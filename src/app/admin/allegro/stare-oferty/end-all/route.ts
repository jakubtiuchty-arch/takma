import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { listOldMaterialOffers, endOffer } from '@/lib/allegro/existing-offers'

export const runtime = 'nodejs'
export const maxDuration = 200
export const dynamic = 'force-dynamic'

// Wygaś stare oferty materiałów (nie nasze). ?matched=1 → tylko te z żywym
// odpowiednikiem (match=exact) — bezpieczny tryb, nie zostawia luki.
export async function POST(request: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const matchedOnly = request.nextUrl.searchParams.get('matched') === '1'

  try {
    let offers = await listOldMaterialOffers()
    if (matchedOnly) offers = offers.filter((o) => o.match === 'exact')
    let ended = 0
    let err = 0
    for (const o of offers) {
      try {
        await endOffer(o.id)
        ended++
      } catch {
        err++
      }
    }
    return NextResponse.json({ ok: true, total: offers.length, ended, err })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
