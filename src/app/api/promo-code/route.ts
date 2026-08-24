import { NextRequest, NextResponse } from 'next/server'
import { sprawdzKod } from '@/lib/promo-codes'

/**
 * POST /api/promo-code — sprawdzenie kodu wpisanego w koszyku.
 * Body: { code }
 *
 * Zwraca dane potrzebne do pokazania ceny promocyjnej. Ostateczna cena i tak
 * liczy się jeszcze raz przy składaniu zamówienia — to, co wraca stąd, służy
 * tylko wyświetleniu.
 */
export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()
    if (typeof code !== 'string') {
      return NextResponse.json({ ok: false, blad: 'Podaj kod rabatowy.' }, { status: 400 })
    }

    const wynik = await sprawdzKod(code)
    if (!wynik.ok) return NextResponse.json({ ok: false, blad: wynik.blad })

    return NextResponse.json({ ok: true, kod: wynik.kod })
  } catch {
    return NextResponse.json(
      { ok: false, blad: 'Nie udało się sprawdzić kodu. Spróbuj ponownie.' },
      { status: 500 },
    )
  }
}
