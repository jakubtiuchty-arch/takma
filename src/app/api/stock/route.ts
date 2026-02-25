import { NextRequest, NextResponse } from 'next/server'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'

const MARGIN = 1.15 // 15% marzy
const VAT = 1.23    // 23% VAT

/**
 * GET /api/stock?pn=ZD4A042-30EM00EZ,ZD4A042-30EE00EZ
 *
 * Unified stock API — Ingram Micro + BlueStar.
 * Stany EU sumowane (Ingram DE/HU/CZ + BlueStar inventory).
 * Cena = min(ingramPrice, bluestarUnitPrice) x 1.15 marzy.
 * Graceful fallback — jesli jeden dystrybutor padnie, dane z drugiego.
 */
export async function GET(request: NextRequest) {
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
    // Rownolegle zapytania do obu dystrybutorow
    const [ingramResult, bluestarResult] = await Promise.allSettled([
      ingramLookup(partNumbers),
      bluestarLookup(partNumbers),
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

      // Cena: min(ingramPrice, bluestarUnitPrice) x 1.15
      const ingramRaw = ingFound ? ing!.ingramPrice : undefined
      const bluestarRaw = bsFound ? bs!.unitPrice : undefined

      let bestRawPrice: number | undefined
      if (ingramRaw != null && bluestarRaw != null) {
        bestRawPrice = Math.min(ingramRaw, bluestarRaw)
      } else {
        bestRawPrice = ingramRaw ?? bluestarRaw
      }

      let price: number | undefined
      let priceBrutto: number | undefined
      let ingramPrice: number | undefined

      if (bestRawPrice != null && bestRawPrice > 0) {
        price = Math.round(bestRawPrice * MARGIN * 100) / 100
        priceBrutto = Math.round(price * VAT * 100) / 100
        ingramPrice = bestRawPrice // Raw price from cheapest source
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

    // Debug: status obu dystrybutorow
    const _debug = {
      ingram: ingramResult.status === 'fulfilled'
        ? { ok: true, count: ingramData.length, foundCount: ingramData.filter(r => r.found).length }
        : { ok: false, error: String(ingramResult.reason) },
      bluestar: bluestarResult.status === 'fulfilled'
        ? { ok: true, count: bluestarData.length, foundCount: bluestarData.filter(r => r.found).length,
            sample: bluestarData[0] ? { pn: bluestarData[0].partNumber, found: bluestarData[0].found, inv: bluestarData[0].inventory, price: bluestarData[0].unitPrice } : null }
        : { ok: false, error: String(bluestarResult.reason) },
    }

    return NextResponse.json({
      results,
      count: results.length,
      found: results.filter(r => r.found).length,
      _debug,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
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
