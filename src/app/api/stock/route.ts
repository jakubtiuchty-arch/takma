import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { lookupUnifiedStock } from '@/lib/unified-stock'

/**
 * Publiczne API stanów i cen sprzedaży. Nie podaje ceny zakupu (`ingramPrice`):
 * konkurencja odczytywała z niej marżę. Cenę kartonową i cenę kontraktu
 * serwisowego liczy serwer (lib/ceny-pochodne); cenę zakupu dla kreatora
 * oferty zwraca /api/admin/stock.
 */
export async function GET(request: NextRequest) {
  const debugParam = request.nextUrl.searchParams.get('debug') === '1'
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

  // `_debug` zawiera ceny dostawców w EUR — tylko dla zalogowanego admina.
  // Bez sesji parametr jest ignorowany.
  const showDebug = debugParam && !!(await getSessionFromCookie())

  const { body, status, headers } = await lookupUnifiedStock(partNumbers, showDebug)
  const publicBody = body.results
    ? { ...body, results: body.results.map(({ ingramPrice: _cenaZakupu, ...wiersz }) => wiersz) }
    : body

  // Odpowiedź z `debug=1` nie może trafić do cache CDN: wersja admina
  // byłaby serwowana pod tym samym adresem innym osobom.
  return NextResponse.json(publicBody, {
    status,
    headers: debugParam ? { ...headers, 'Cache-Control': 'private, no-store' } : headers,
  })
}
