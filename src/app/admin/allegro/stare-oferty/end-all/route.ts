import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { listOldMaterialOffers, endOffer } from '@/lib/allegro/existing-offers'

export const runtime = 'nodejs'
export const maxDuration = 200
export const dynamic = 'force-dynamic'

// Wygaś WSZYSTKIE stare oferty materiałów (nie nasze) — masowo.
export async function POST() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  try {
    const offers = await listOldMaterialOffers()
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
