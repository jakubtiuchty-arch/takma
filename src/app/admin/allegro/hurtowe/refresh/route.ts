import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { refreshBatch } from '@/lib/allegro/bulk'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Odśwież opisy już wystawionych ofert (paczka 20, od najdawniej aktualizowanych).
// Autoryzacja: sesja admina (cookie) LUB Bearer CRON_SECRET (do masowego re-PATCHu).
export async function POST(request: NextRequest) {
  const session = await getSessionFromCookie()
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  const isCron = cronSecret && authHeader === `Bearer ${cronSecret}`
  if (!session && !isCron) {
    return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  }
  try {
    const res = await refreshBatch(20)
    return NextResponse.json({ ok: true, ...res })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
