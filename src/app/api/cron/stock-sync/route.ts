import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { products, isLabelPN } from '@/data/products'
import { isRibbonPN } from '@/data/transfer-ribbon-products'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'
import { applyStockOverrides } from '@/lib/stock-overrides'
import { selectPurchasePrice } from '@/lib/price-selection'

export const maxDuration = 300 // 5 minutes

const MARGIN = 1.10        // 10% margin (same as /api/stock)
const RIBBON_MARGIN = 1.20 // 20% margin dla taśm (same as /api/stock)
const LABEL_MARGIN = 1.15  // 15% margin dla etykiet (same as /api/stock)
const VAT = 1.23           // 23% VAT

const EUR_RATE_FALLBACK = 4.30

async function getEurPlnRate(): Promise<number> {
  try {
    const res = await fetch(
      'https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json',
      { signal: AbortSignal.timeout(5000) }
    )
    if (!res.ok) throw new Error(`NBP HTTP ${res.status}`)
    const data = await res.json()
    const rate = data.rates?.[0]?.mid
    if (typeof rate === 'number' && rate > 0) {
      console.log(`[Stock Sync] EUR/PLN rate: ${rate}`)
      return rate
    }
    throw new Error('No rate in NBP response')
  } catch (error) {
    console.warn(`[Stock Sync] NBP error, fallback ${EUR_RATE_FALLBACK}:`, error)
    return EUR_RATE_FALLBACK
  }
}

/**
 * Zbiera numery katalogowe wszystkich produktów — łącznie z M3 Mobile.
 *
 * M3 był tu wcześniej pomijany („ma własny cron"), ale jarltech-sync zapisuje
 * tylko JarltechStockCache, a karty produktów i koszyk czytają StockCache.
 * Efekt: 101 produktów M3 pokazywało „brak danych z dystrybutora", mimo że
 * Jarltech miał i cenę, i stan (US300D-T2CWRE-HF: 898,81 EUR, 50 szt.).
 * M3 sprzedaje wyłącznie przez Jarltech, więc cena zawsze pochodzi stamtąd —
 * selectPurchasePrice i tak wybierze jedyne dostępne źródło.
 */
function collectAllPartNumbers(): string[] {
  const pnSet = new Set<string>()

  for (const product of products) {
    // From variants
    if (product.variants) {
      for (const v of product.variants) {
        pnSet.add(v.partNumber)
      }
    }

    // From specifications (accessories with Part Number)
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec) {
      pnSet.add(pnSpec.value)
    }

    // From service plans
    if (product.servicePlans) {
      for (const sp of product.servicePlans) {
        pnSet.add(sp.partNumber)
      }
    }
  }

  return Array.from(pnSet)
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const startTime = Date.now()
  const allPNs = collectAllPartNumbers()
  console.log(`[Stock Sync] Starting sync for ${allPNs.length} part numbers`)

  // Get EUR/PLN rate once
  const eurRate = await getEurPlnRate()

  const BATCH_SIZE = 10
  const BATCH_DELAY_MS = 2000
  let synced = 0
  // PN-y, przy których cena Ingrama okazała się odstająca — do raportu z crona
  const suspectPrices: string[] = []
  let found = 0
  let errors = 0
  const totalBatches = Math.ceil(allPNs.length / BATCH_SIZE)

  for (let i = 0; i < allPNs.length; i += BATCH_SIZE) {
    const batch = allPNs.slice(i, i + BATCH_SIZE)
    const batchNum = Math.floor(i / BATCH_SIZE) + 1

    console.log(`[Stock Sync] Processing batch ${batchNum}/${totalBatches} (${batch.length} PNs)...`)

    try {
      // Fetch from both distributors in parallel
      const [ingramResult, bluestarResult] = await Promise.allSettled([
        ingramLookup(batch),
        bluestarLookup(batch),
      ])

      const ingramData: StockInfo[] =
        ingramResult.status === 'fulfilled' ? ingramResult.value : []
      const bluestarData: BlueStarStockInfo[] =
        bluestarResult.status === 'fulfilled' ? bluestarResult.value : []

      if (ingramResult.status === 'rejected') {
        console.error(`[Stock Sync] Ingram error batch ${batchNum}:`, ingramResult.reason)
      }
      if (bluestarResult.status === 'rejected') {
        console.error(`[Stock Sync] BlueStar error batch ${batchNum}:`, bluestarResult.reason)
      }

      // Also read Jarltech cache for this batch (Jarltech carries Zebra/Honeywell too).
      // Bezpiecznik: wpisy starsze niż 7 dni ignorujemy — jarltech-sync rotuje pulę
      // (~350 PN/przebieg), a stęchły stan (np. 112 szt. z kwietnia przy realnym 0)
      // nie może trafiać do sklepu.
      const jarltechCache = await prisma.jarltechStockCache.findMany({
        where: {
          partNumber: { in: batch },
          found: true,
          lastSync: { gte: new Date(Date.now() - 7 * 86400_000) },
        },
      })
      const jarltechMap = new Map<string, typeof jarltechCache[0]>()
      for (const j of jarltechCache) jarltechMap.set(j.partNumber, j)

      // Build maps
      const ingramMap = new Map<string, StockInfo>()
      for (const item of ingramData) ingramMap.set(item.partNumber, item)

      const bluestarMap = new Map<string, BlueStarStockInfo>()
      for (const item of bluestarData) bluestarMap.set(item.partNumber, item)

      // Merge & upsert each PN
      for (const pn of batch) {
        try {
          const ing = ingramMap.get(pn)
          const bs = bluestarMap.get(pn)
          const jt = jarltechMap.get(pn)

          const ingFound = ing?.found ?? false
          const bsFound = bs?.found ?? false
          const jtFound = !!jt

          if (!ingFound && !bsFound && !jtFound) {
            // No data from any distributor
            await prisma.stockCache.upsert({
              where: { partNumber: pn },
              create: {
                partNumber: pn,
                found: false,
                availability: 'unavailable',
                deliveryText: 'Brak danych z dystrybutora',
              },
              update: {
                found: false,
                price: null,
                priceBrutto: null,
                ingramPrice: null,
                stockPL: 0,
                stockDE: 0,
                inDelivery: 0,
                totalStock: 0,
                availability: 'unavailable',
                deliveryText: 'Brak danych z dystrybutora',
              },
            })
            synced++
            continue
          }

          // Stock levels (Ingram + BlueStar + Jarltech)
          const stockPL = ing?.stockPL ?? 0
          const jtInventory = jtFound ? (jt!.inventory ?? 0) : 0
          const jtIncoming = jtFound ? (jt!.incomingQty ?? 0) : 0
          const stockDE = (ing?.stockDE ?? 0) + (bsFound ? (bs!.inventory ?? 0) : 0) + jtInventory
          const inDelivery = (ing?.inDelivery ?? 0) + (bsFound ? (bs!.qtyExpected ?? 0) : 0) + jtIncoming
          const totalStock = stockPL + stockDE + inDelivery

          // Price: compare in PLN (Ingram already PLN, BlueStar/Jarltech EUR->PLN).
          // Korekta pakietowa — identyczna jak w /api/stock: kupujemy w kartonach, sprzedajemy
          // na sztuki. BlueStar `unitPrice` to ZAWSZE cena pakietu → dziel przez multipleQty
          // (etykiety: karton np. 4 rolki; taśmy: 6/12, fallback /12). Jarltech: dla taśm cena
          // pakietu → dziel; dla etykiet cena za 1 rolkę → nie dziel. Ingram zawsze per-szt.
          const isRibbon = isRibbonPN(pn)
          const isLabel = !isRibbon && isLabelPN(pn)
          // BlueStar `unitPrice` bywa ceną pakietu → dziel przez multipleQty (gdy podane).
          const bsPackagingUnit = bs?.multipleQty && bs.multipleQty > 1
            ? bs.multipleQty
            : (isRibbon ? 12 : 1)
          // Jarltech: cena ZA SZTUKĘ (potwierdzone: 03300GS08407 = 2 EUR = Ingram per-szt).
          // NIE dzielimy — gdyby gdzieś była ceną pakietu, wyjdzie za wysoka i min() ją pominie.
          const jarltechPackagingUnit = 1

          const ingramPLN = ingFound ? ing!.ingramPrice : undefined
          const bluestarPLN = (bsFound && bs!.unitPrice)
            ? Math.round((bs!.unitPrice * eurRate / bsPackagingUnit) * 100) / 100
            : undefined

          const jarltechPLN = (jtFound && jt!.unitPrice)
            ? Math.round((jt!.unitPrice * eurRate / jarltechPackagingUnit) * 100) / 100
            : undefined

          // Bezpiecznik dwustronny — patrz lib/price-selection: odrzuca zarówno źródła
          // rażąco poniżej Ingrama (błąd pakietowy), jak i samego Ingrama, gdy to on
          // podaje cenę odstającą w górę.
          const selection = selectPurchasePrice({
            ingram: ingramPLN,
            bluestar: bluestarPLN,
            jarltech: jarltechPLN,
          })
          const bestRawPricePLN = selection.best
          if (selection.ingramSuspect) {
            suspectPrices.push(pn)
            console.warn(`[stock-sync] ${pn}: ${selection.rejected.map((r) => `${r.source} ${r.reason}`).join('; ')}`)
          }

          let price: number | undefined
          let priceBrutto: number | undefined
          let ingramPrice: number | undefined

          if (bestRawPricePLN != null && bestRawPricePLN > 0) {
            const marginForPN = isRibbon ? RIBBON_MARGIN : isLabel ? LABEL_MARGIN : MARGIN
            price = Math.round(bestRawPricePLN * marginForPN * 100) / 100
            priceBrutto = Math.round(price * VAT * 100) / 100
            ingramPrice = bestRawPricePLN
          }

          // Availability & delivery text
          let availability: string
          let deliveryText: string

          if (stockPL > 0) {
            availability = 'available'
            deliveryText = `Dostepny — wysylka 24h (${stockPL} szt.)`
          } else if (stockDE > 0) {
            availability = 'available'
            deliveryText = `Dostepny — wysylka 2-3 dni (${stockDE} szt.)`
          } else if (inDelivery > 0) {
            availability = 'on-order'
            deliveryText = `W dostawie (${inDelivery} szt.)`
          } else {
            availability = 'unavailable'
            deliveryText = 'Niedostepny'
          }

          // Ręczne korekty per PN (np. przedsprzedaż — patrz lib/stock-overrides)
          const o = applyStockOverrides({ partNumber: pn, found: true, availability, deliveryText, stockPL, stockDE, totalStock, inDelivery })

          await prisma.stockCache.upsert({
            where: { partNumber: pn },
            create: {
              partNumber: pn,
              found: true,
              price: price ?? null,
              priceBrutto: priceBrutto ?? null,
              ingramPrice: ingramPrice ?? null,
              stockPL: o.stockPL,
              stockDE: o.stockDE,
              inDelivery: o.inDelivery,
              totalStock: o.totalStock,
              availability: o.availability,
              deliveryText: o.deliveryText,
            },
            update: {
              found: true,
              price: price ?? null,
              priceBrutto: priceBrutto ?? null,
              ingramPrice: ingramPrice ?? null,
              stockPL: o.stockPL,
              stockDE: o.stockDE,
              inDelivery: o.inDelivery,
              totalStock: o.totalStock,
              availability: o.availability,
              deliveryText: o.deliveryText,
            },
          })

          synced++
          found++
        } catch (err) {
          console.error(`[Stock Sync] Upsert error for ${pn}:`, err)
          errors++
        }
      }
    } catch (err) {
      console.error(`[Stock Sync] Batch ${batchNum} failed:`, err)
      errors += batch.length
    }

    // Delay between batches to avoid rate limits
    if (i + BATCH_SIZE < allPNs.length) {
      await new Promise(r => setTimeout(r, BATCH_DELAY_MS))
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000)
  console.log(`[Stock Sync] Done in ${elapsed}s: ${synced}/${allPNs.length} synced, ${found} found, ${errors} errors`)

  if (suspectPrices.length) {
    console.warn(`[Stock Sync] Cena Ingrama odrzucona jako odstająca dla ${suspectPrices.length} PN: ${suspectPrices.slice(0, 20).join(', ')}`)
  }

  return NextResponse.json({
    success: true,
    total: allPNs.length,
    synced,
    found,
    errors,
    // PN-y, przy których cena Ingrama była odstająca — warto zgłosić dystrybutorowi
    suspectIngramPrices: suspectPrices,
    elapsedSeconds: elapsed,
    timestamp: new Date().toISOString(),
  })
}
