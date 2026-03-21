import { NextRequest, NextResponse } from 'next/server'
import { lookupStock } from '@/lib/jarltech'

/**
 * GET /api/jarltech/stock?pn=ZD4A042-30EM00EZ,P1112640-031
 *
 * Zwraca aktualne stany magazynowe i ceny z Jarltech dla podanych Part Numberow.
 * Endpoint debug/legacy — do testowania Jarltech osobno.
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

  if (partNumbers.length > 20) {
    return NextResponse.json(
      { error: 'Maksymalnie 20 Part Numberow (Jarltech = sequential, bez batcha).' },
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
    console.error('[API /jarltech/stock] Blad:', error)
    return NextResponse.json(
      { error: 'Blad pobierania danych z Jarltech' },
      { status: 500 }
    )
  }
}
