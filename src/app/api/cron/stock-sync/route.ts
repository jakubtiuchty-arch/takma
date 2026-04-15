import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { products } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'

export const maxDuration = 300 // 5 minutes

const MARGIN = 1.10 // 10% margin (same as /api/stock)
const VAT = 1.23    // 23% VAT

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

          const ingFound = ing?.found ?? false
          const bsFound = bs?.found ?? false

          if (!ingFound && !bsFound) {
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

          // Stock levels (same logic as /api/stock)
          const stockPL = ing?.stockPL ?? 0
          const stockDE = (ing?.stockDE ?? 0) + (bsFound ? (bs!.inventory ?? 0) : 0)
          const inDelivery = (ing?.inDelivery ?? 0) + (bsFound ? (bs!.qtyExpected ?? 0) : 0)
          const totalStock = stockPL + stockDE + inDelivery

          // Price: compare in PLN (Ingram already PLN, BlueStar EUR->PLN)
          const ingramPLN = ingFound ? ing!.ingramPrice : undefined
          const bluestarPLN = (bsFound && bs!.unitPrice)
            ? Math.round(bs!.unitPrice * eurRate * 100) / 100
            : undefined

          const prices = [ingramPLN, bluestarPLN].filter(
            (p): p is number => p != null && p > 0
          )
          const bestRawPricePLN = prices.length > 0 ? Math.min(...prices) : undefined

          let price: number | undefined
          let priceBrutto: number | undefined
          let ingramPrice: number | undefined

          if (bestRawPricePLN != null && bestRawPricePLN > 0) {
            price = Math.round(bestRawPricePLN * MARGIN * 100) / 100
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
