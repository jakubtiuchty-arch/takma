import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { gaConfigured, gaRealtime } from '@/lib/ga'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Dane „Na żywo" dla panelu /admin/analytics — pollowane co 30 s z klienta. */
export async function GET() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (!gaConfigured()) return NextResponse.json({ error: 'GA nieskonfigurowane' }, { status: 503 })

  try {
    const data = await gaRealtime()
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 })
  }
}
