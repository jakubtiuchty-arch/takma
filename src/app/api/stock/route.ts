import { NextRequest, NextResponse } from 'next/server'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { prisma } from '@/lib/db'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'
import type { JarltechStockInfo } from '@/lib/jarltech'

const MARGIN = 1.10 // 10% marzy
const VAT = 1.23    // 23% VAT

// ============================================
// KURS EUR/PLN z NBP API (cache 12h)
// ============================================

const EUR_RATE_FALLBACK = 4.30 // Awaryjny kurs gdyby NBP nie odpowiedzial
const EUR_CACHE_TTL = 12 * 60 * 60 * 1000 // 12h

let cachedEurRate: number | null = null
let eurRateCachedAt = 0

async function getEurPlnRate(): Promise<number> {
  if (cachedEurRate && (Date.now() - eurRateCachedAt) < EUR_CACHE_TTL) {
    return cachedEurRate
  }

  try {
    const res = await fetch(
      'https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json',
      { signal: AbortSignal.timeout(5000) }
    )
    if (!res.ok) throw new Error(`NBP HTTP ${res.status}`)
    const data = await res.json()
    const rate = data.rates?.[0]?.mid
    if (typeof rate === 'number' && rate > 0) {
      cachedEurRate = rate
      eurRateCachedAt = Date.now()
      console.log(`[EUR/PLN] Kurs NBP: ${rate}`)
      return rate
    }
    throw new Error('Brak kursu w odpowiedzi NBP')
  } catch (error) {
    console.warn(`[EUR/PLN] Blad NBP, fallback ${EUR_RATE_FALLBACK}:`, error)
    return cachedEurRate ?? EUR_RATE_FALLBACK
  }
}

/**
 * GET /api/stock?pn=ZD4A042-30EM00EZ,ZD4A042-30EE00EZ
 *
 * Unified stock API — Ingram Micro (PLN) + BlueStar (EUR) + Jarltech (EUR).
 * Stany EU sumowane (Ingram DE/HU/CZ + BlueStar + Jarltech inventory).
 * Cena: EUR -> PLN po kursie NBP, potem min(ingram, bluestar, jarltech) x 1.10.
 * Graceful fallback — jesli jeden/dwoch dystrybutorów padnie, dane z pozostalych.
 */
export async function GET(request: NextRequest) {
  const showDebug = request.nextUrl.searchParams.get('debug') === '1'
  const pnParam = request.nextUrl.searchParams.get('pn')

  if (!pnParam) {
    return NextResponse.json(
      { error: 'Brak parametru ?pn=. Podaj Part Numbery oddzielone przecinkiem.' },
      { status: 400 }
    )
  }

  const partNumbers = pnParam.split(',').map(pn => pn.trim()).filter(Boolean)

  if (partNumbers.length === 0) {
    return NextResponse.json(
      { error: 'Nie podano prawidlowych Part Numberow.' },
      { status: 400 }
    )
  }

  if (partNumbers.length > 50) {
    return NextResponse.json(
      { error: 'Maksymalnie 50 Part Numberow na jedno zapytanie.' },
      { status: 400 }
    )
  }

  try {
    // Jarltech: read from DB cache (synced by daily cron, not live)
    const jarltechFromCache = async (): Promise<JarltechStockInfo[]> => {
      try {
        const cached = await prisma.jarltechStockCache.findMany({
          where: { partNumber: { in: partNumbers } },
        })
        return cached.map(c => ({
          partNumber: c.partNumber,
          found: c.found,
          unitPrice: c.unitPrice ?? undefined,
          currency: c.currency ?? 'EUR',
          inventory: c.inventory,
          incomingQty: c.incomingQty,
          incomingDate: c.incomingDate ?? undefined,
          totalStock: c.totalStock,
          jarltechId: c.jarltechId ?? undefined,
          availability: c.availability as 'available' | 'on-order' | 'unavailable',
          deliveryText: c.deliveryText ?? '',
          lastSync: c.lastSync.toISOString(),
        }))
      } catch (err) {
        console.error('[API /stock] Jarltech cache read error:', err)
        return []
      }
    }

    // Rownolegle: dwoch dystrybutorów live + Jarltech z cache DB + kurs EUR/PLN
    const [ingramResult, bluestarResult, jarltechResult, eurRate] = await Promise.all([
      Promise.allSettled([ingramLookup(partNumbers)]).then(r => r[0]),
      Promise.allSettled([bluestarLookup(partNumbers)]).then(r => r[0]),
      Promise.allSettled([jarltechFromCache()]).then(r => r[0]),
      getEurPlnRate(),
    ])

    const ingramData: StockInfo[] =
      ingramResult.status === 'fulfilled' ? ingramResult.value : []
    const bluestarData: BlueStarStockInfo[] =
      bluestarResult.status === 'fulfilled' ? bluestarResult.value : []
    const jarltechData: JarltechStockInfo[] =
      jarltechResult.status === 'fulfilled' ? jarltechResult.value : []

    if (ingramResult.status === 'rejected') {
      console.error('[API /stock] Ingram error:', ingramResult.reason)
    }
    if (bluestarResult.status === 'rejected') {
      console.error('[API /stock] BlueStar error:', bluestarResult.reason)
    }
    if (jarltechResult.status === 'rejected') {
      console.error('[API /stock] Jarltech error:', jarltechResult.reason)
    }

    // Mapuj wyniki po PN
    const ingramMap = new Map<string, StockInfo>()
    for (const item of ingramData) {
      ingramMap.set(item.partNumber, item)
    }

    const bluestarMap = new Map<string, BlueStarStockInfo>()
    for (const item of bluestarData) {
      bluestarMap.set(item.partNumber, item)
    }

    const jarltechMap = new Map<string, JarltechStockInfo>()
    for (const item of jarltechData) {
      jarltechMap.set(item.partNumber, item)
    }

    const now = new Date().toISOString()

    // Merge per PN
    const results: StockInfo[] = partNumbers.map(pn => {
      const ing = ingramMap.get(pn)
      const bs = bluestarMap.get(pn)
      const jl = jarltechMap.get(pn)

      const ingFound = ing?.found ?? false
      const bsFound = bs?.found ?? false
      const jlFound = jl?.found ?? false

      // Jesli zaden dystrybutor nie ma danych
      if (!ingFound && !bsFound && !jlFound) {
        return {
          partNumber: pn,
          found: false,
          stockPL: 0,
          stockDE: 0,
          inDelivery: 0,
          totalStock: 0,
          availability: 'unavailable' as const,
          deliveryText: 'Brak danych z dystrybutora',
          lastSync: now,
        }
      }

      // Stany magazynowe
      const stockPL = ing?.stockPL ?? 0 // Polski magazyn — tylko Ingram
      const stockDE = (ing?.stockDE ?? 0)
        + (bsFound ? (bs!.inventory ?? 0) : 0)
        + (jlFound ? (jl!.inventory ?? 0) : 0) // Ingram EU + BlueStar + Jarltech
      const inDelivery = (ing?.inDelivery ?? 0)
        + (bsFound ? (bs!.qtyExpected ?? 0) : 0)
        + (jlFound ? (jl!.incomingQty ?? 0) : 0)
      const totalStock = stockPL + stockDE + inDelivery

      // Cena: porownanie w PLN
      // Ingram: juz w PLN | BlueStar + Jarltech: EUR -> PLN po kursie NBP
      const ingramPLN = ingFound ? ing!.ingramPrice : undefined
      const bluestarPLN = (bsFound && bs!.unitPrice)
        ? Math.round(bs!.unitPrice * eurRate * 100) / 100
        : undefined
      const jarltechPLN = (jlFound && jl!.unitPrice)
        ? Math.round(jl!.unitPrice * eurRate * 100) / 100
        : undefined

      // Min z trzech dystrybutorów
      const prices = [ingramPLN, bluestarPLN, jarltechPLN].filter(
        (p): p is number => p != null && p > 0
      )
      const bestRawPricePLN = prices.length > 0 ? Math.min(...prices) : undefined

      let price: number | undefined
      let priceBrutto: number | undefined
      let ingramPrice: number | undefined

      if (bestRawPricePLN != null && bestRawPricePLN > 0) {
        price = Math.round(bestRawPricePLN * MARGIN * 100) / 100
        priceBrutto = Math.round(price * VAT * 100) / 100
        ingramPrice = bestRawPricePLN // Najlepsza cena zakupu PLN
      }

      // Availability & delivery text
      let availability: StockInfo['availability']
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

      // ETA dostawy — Jarltech jako jedyny dostarcza daty
      const incomingDate = jlFound ? jl!.incomingDate : undefined

      return {
        partNumber: pn,
        found: true,
        price,
        priceBrutto,
        ingramPrice,
        stockPL,
        stockDE,
        inDelivery,
        incomingDate,
        totalStock,
        availability,
        deliveryText,
        lastSync: now,
      }
    })

    const response: Record<string, unknown> = {
      results,
      count: results.length,
      found: results.filter(r => r.found).length,
    }

    if (showDebug) {
      response._debug = {
        eurRate,
        envPresent: {
          BLUESTAR_CLIENT_ID: !!process.env.BLUESTAR_CLIENT_ID,
          BLUESTAR_CLIENT_SECRET: !!process.env.BLUESTAR_CLIENT_SECRET,
          BLUESTAR_CUSTOMER_NO: !!process.env.BLUESTAR_CUSTOMER_NO,
          BLUESTAR_API_KEY: !!process.env.BLUESTAR_API_KEY,
          JARLTECH_CUSTOMER_ID: !!process.env.JARLTECH_CUSTOMER_ID,
          JARLTECH_CLIENT_ID: !!process.env.JARLTECH_CLIENT_ID,
          JARLTECH_CLIENT_SECRET: !!process.env.JARLTECH_CLIENT_SECRET,
        },
        ingram: {
          status: ingramResult.status,
          count: ingramData.length,
          foundCount: ingramData.filter(r => r.found).length,
          error: ingramResult.status === 'rejected' ? String(ingramResult.reason) : undefined,
        },
        bluestar: {
          status: bluestarResult.status,
          count: bluestarData.length,
          foundCount: bluestarData.filter(r => r.found).length,
          items: bluestarData.map(b => ({ pn: b.partNumber, found: b.found, inv: b.inventory, eur: b.unitPrice })),
          error: bluestarResult.status === 'rejected' ? String(bluestarResult.reason) : undefined,
        },
        jarltech: {
          status: jarltechResult.status,
          count: jarltechData.length,
          foundCount: jarltechData.filter(r => r.found).length,
          items: jarltechData.map(j => ({
            pn: j.partNumber,
            found: j.found,
            inv: j.inventory,
            eur: j.unitPrice,
            incoming: j.incomingQty,
            incomingDate: j.incomingDate,
            jid: j.jarltechId,
          })),
          error: jarltechResult.status === 'rejected' ? String(jarltechResult.reason) : undefined,
        },
      }
    }

    // Nie cachuj pustych odpowiedzi — mogą wynikać z timeoutu dystrybutora
    const anyFound = results.some(r => r.found)
    const cacheHeader = anyFound
      ? 'public, s-maxage=300, stale-while-revalidate=600'
      : 'public, s-maxage=30, stale-while-revalidate=30'

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': cacheHeader,
      },
    })
  } catch (error) {
    console.error('[API /stock] Blad:', error)
    return NextResponse.json(
      { error: 'Blad pobierania danych magazynowych' },
      { status: 500 }
    )
  }
}
