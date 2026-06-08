import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { runFeedValidations } from '@/lib/feeds/run'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 120

// Ręczne uruchomienie walidacji feedów z panelu (sesja admina). Bez maila.
export async function POST(request: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  try {
    const results = await runFeedValidations(request.nextUrl.origin, { notify: false })
    return NextResponse.json({ ok: true, results })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 422 })
  }
}
