import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { bulkPublishBatch } from '@/lib/allegro/bulk'
import { ALLEGRO_PAUSED, ALLEGRO_PAUSED_MESSAGE } from '@/lib/allegro/pause'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Ręczne uruchomienie jednej paczki hurtowego wystawiania.
export async function POST() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (ALLEGRO_PAUSED) return NextResponse.json({ error: ALLEGRO_PAUSED_MESSAGE }, { status: 423 })
  try {
    const progress = await bulkPublishBatch(20)
    return NextResponse.json({ ok: true, ...progress })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
