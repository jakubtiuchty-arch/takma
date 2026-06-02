import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { products } from '@/data/products'
import { isRibbonPN } from '@/data/transfer-ribbon-products'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'

export const maxDuration = 300 // 5 minutes

const MARGIN = 1.10        // 10% margin (same as /api/stock)
const RIBBON_MARGIN = 1.20 // 20% margin dla taśm (same as /api/stock)
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
 * Collect ALL part numbers from all products except M3 Mobile
 * (M3 uses JarltechStockCache via separate cron)
 */
function collectAllPartNumbers(): string[] {
  const pnSet = new Set<string>()

  for (const product of products) {
    // Skip M3 Mobile — uses JarltechStockCache separately
    if (product.manufacturerId === 'm3-mobile') continue

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

      // Also read Jarltech cache for this batch (Jarltech carries Zebra/Honeywell too)
      const jarltechCache = await prisma.jarltechStockCache.findMany({
        where: { partNumber: { in: batch }, found: true },
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
          const bsPackagingUnit = bs?.multipleQty && bs.multipleQty > 1
            ? bs.multipleQty
            : (isRibbon ? 12 : 1)
          const jarltechPackagingUnit = isRibbon ? bsPackagingUnit : 1

          const ingramPLN = ingFound ? ing!.ingramPrice : undefined
          const bluestarPLN = (bsFound && bs!.unitPrice)
            ? Math.round((bs!.unitPrice * eurRate / bsPackagingUnit) * 100) / 100
            : undefined

          const jarltechPLN = (jtFound && jt!.unitPrice)
            ? Math.round((jt!.unitPrice * eurRate / jarltechPackagingUnit) * 100) / 100
            : undefined

          const prices = [ingramPLN, bluestarPLN, jarltechPLN].filter(
            (p): p is number => p != null && p > 0
          )
          const bestRawPricePLN = prices.length > 0 ? Math.min(...prices) : undefined

          let price: number | undefined
          let priceBrutto: number | undefined
          let ingramPrice: number | undefined

          if (bestRawPricePLN != null && bestRawPricePLN > 0) {
            const marginForPN = isRibbon ? RIBBON_MARGIN : MARGIN
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

          await prisma.stockCache.upsert({
            where: { partNumber: pn },
            create: {
              partNumber: pn,
              found: true,
              price: price ?? null,
              priceBrutto: priceBrutto ?? null,
              ingramPrice: ingramPrice ?? null,
              stockPL,
              stockDE,
              inDelivery,
              totalStock,
              availability,
              deliveryText,
            },
            update: {
              found: true,
              price: price ?? null,
              priceBrutto: priceBrutto ?? null,
              ingramPrice: ingramPrice ?? null,
              stockPL,
              stockDE,
              inDelivery,
              totalStock,
              availability,
              deliveryText,
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

  return NextResponse.json({
    success: true,
    total: allPNs.length,
    synced,
    found,
    errors,
    elapsedSeconds: elapsed,
    timestamp: new Date().toISOString(),
  })
}
