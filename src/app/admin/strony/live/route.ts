import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { waConfigured, liveCounts } from '@/lib/vercelWa'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Liczniki „na żywo" (odwiedzający w ostatniej ~godzinie) — pollowane z klienta. */
export async function GET() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (!waConfigured()) return NextResponse.json({}, { headers: { 'Cache-Control': 'no-store' } })
  const counts = await liveCounts().catch(() => ({}))
  return NextResponse.json(counts, { headers: { 'Cache-Control': 'no-store' } })
}
