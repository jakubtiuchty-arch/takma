import { NextRequest, NextResponse } from 'next/server'
import { lookupStock } from '@/lib/bluestar'

/**
 * GET /api/bluestar/stock?pn=ZD4A042-30EM00EZ,P1112640-031
 *
 * Zwraca aktualne stany magazynowe i ceny z BlueStar dla podanych Part Numberów.
 * Ceny zawierają 15% marży. Brutto zawiera 23% VAT.
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
    console.error('[API /bluestar/stock] Błąd:', error)
    return NextResponse.json(
      { error: 'Błąd pobierania danych z BlueStar' },
      { status: 500 }
    )
  }
}
