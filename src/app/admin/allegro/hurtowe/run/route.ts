import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { bulkPublishBatch } from '@/lib/allegro/bulk'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Ręczne uruchomienie jednej paczki hurtowego wystawiania.
export async function POST() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  try {
    const progress = await bulkPublishBatch(20)
    return NextResponse.json({ ok: true, ...progress })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
