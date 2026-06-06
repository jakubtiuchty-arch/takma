import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { endOffer } from '@/lib/allegro/existing-offers'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Wygaszenie starej oferty (publication ENDED). Pod /admin/* — cookie admina dochodzi.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let offerId: string | undefined
  try {
    const body = await request.json()
    offerId = typeof body?.offerId === 'string' ? body.offerId.trim() : undefined
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!offerId) return NextResponse.json({ error: 'Brak offerId.' }, { status: 400 })

  try {
    await endOffer(offerId)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
