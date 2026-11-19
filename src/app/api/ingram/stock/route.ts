import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { lookupStock } from '@/lib/ingram'

/**
 * GET /api/ingram/stock?pn=ZD4A042-30EM00EZ,ZD4A042-30EE00EZ
 *
 * Zwraca aktualne stany magazynowe i ceny z Ingram Micro dla podanych Part Numberów.
 * Ceny zawierają 10% marży. Brutto zawiera 23% VAT.
 * Stany podzielone na PL (dostawa 24h) i DE (dostawa 72h).
 *
 * Tylko dla zalogowanego admina: odpowiedź zawiera cenę zakupu u dystrybutora.
 * Sklep czyta stany przez /api/stock, który tej ceny nie podaje.
 */
export async function GET(request: NextRequest) {
  if (!(await getSessionFromCookie())) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401, headers: { 'Cache-Control': 'private, no-store' } })
  }

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
        // Odpowiedź admina nie może trafić do cache CDN.
        'Cache-Control': 'private, no-store',
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
