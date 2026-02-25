import { NextRequest, NextResponse } from 'next/server'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'

const MARGIN = 1.15 // 15% marzy
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
 * Unified stock API — Ingram Micro (PLN) + BlueStar (EUR).
 * Stany EU sumowane (Ingram DE/HU/CZ + BlueStar inventory).
 * Cena: BlueStar EUR -> PLN po kursie NBP, potem min(ingram, bluestar) x 1.15.
 * Graceful fallback — jesli jeden dystrybutor padnie, dane z drugiego.
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
    // Rownolegle: oba dystrybutory + kurs EUR/PLN
    const [ingramResult, bluestarResult, eurRate] = await Promise.all([
      Promise.allSettled([ingramLookup(partNumbers)]).then(r => r[0]),
      Promise.allSettled([bluestarLookup(partNumbers)]).then(r => r[0]),
      getEurPlnRate(),
    ])

    const ingramData: StockInfo[] =
      ingramResult.status === 'fulfilled' ? ingramResult.value : []
    const bluestarData: BlueStarStockInfo[] =
      bluestarResult.status === 'fulfilled' ? bluestarResult.value : []

    if (ingramResult.status === 'rejected') {
      console.error('[API /stock] Ingram error:', ingramResult.reason)
    }
    if (bluestarResult.status === 'rejected') {
      console.error('[API /stock] BlueStar error:', bluestarResult.reason)
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

    const now = new Date().toISOString()

    // Merge per PN
    const results: StockInfo[] = partNumbers.map(pn => {
      const ing = ingramMap.get(pn)
      const bs = bluestarMap.get(pn)

      const ingFound = ing?.found ?? false
      const bsFound = bs?.found ?? false

      // Jesli zaden dystrybutor nie ma danych
      if (!ingFound && !bsFound) {
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
      const stockDE = (ing?.stockDE ?? 0) + (bsFound ? (bs!.inventory ?? 0) : 0) // Ingram EU + BlueStar
      const inDelivery = (ing?.inDelivery ?? 0) + (bsFound ? (bs!.qtyExpected ?? 0) : 0)
      const totalStock = stockPL + stockDE + inDelivery

      // Cena: porownanie w PLN
      // Ingram: juz w PLN | BlueStar: EUR -> PLN po kursie NBP
      const ingramPLN = ingFound ? ing!.ingramPrice : undefined
      const bluestarPLN = (bsFound && bs!.unitPrice)
        ? Math.round(bs!.unitPrice * eurRate * 100) / 100
        : undefined

      let bestRawPricePLN: number | undefined
      if (ingramPLN != null && bluestarPLN != null) {
        bestRawPricePLN = Math.min(ingramPLN, bluestarPLN)
      } else {
        bestRawPricePLN = ingramPLN ?? bluestarPLN
      }

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

      return {
        partNumber: pn,
        found: true,
        price,
        priceBrutto,
        ingramPrice,
        stockPL,
        stockDE,
        inDelivery,
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
      }
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
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
