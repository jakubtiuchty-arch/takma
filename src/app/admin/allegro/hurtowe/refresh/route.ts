import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { refreshBatch } from '@/lib/allegro/bulk'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Odśwież opisy już wystawionych ofert (paczka).
export async function POST() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  try {
    const res = await refreshBatch(20)
    return NextResponse.json({ ok: true, ...res })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
