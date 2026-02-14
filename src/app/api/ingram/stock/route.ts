import { NextRequest, NextResponse } from 'next/server'
import { lookupStock } from '@/lib/ingram'

/**
 * GET /api/ingram/stock?pn=ZD4A042-30EM00EZ,ZD4A042-30EE00EZ
 *
 * Zwraca aktualne stany magazynowe i ceny z Ingram Micro dla podanych Part Numberów.
 * Ceny zawierają 10% marży. Brutto zawiera 23% VAT.
 * Stany podzielone na PL (dostawa 24h) i DE (dostawa 72h).
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
      { error: 'Nie podano prawidłowych Part Numberów.' },
      { status: 400 }
    )
  }

  if (partNumbers.length > 50) {
    return NextResponse.json(
      { error: 'Maksymalnie 50 Part Numberów na jedno zapytanie.' },
      { status: 400 }
    )
  }

  try {
    const results = await lookupStock(partNumbers)

    return NextResponse.json({
      results,
      count: results.length,
      found: results.filter(r => r.found).length,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('[API /ingram/stock] Błąd:', error)
    return NextResponse.json(
      { error: 'Błąd pobierania danych magazynowych' },
      { status: 500 }
    )
  }
}
