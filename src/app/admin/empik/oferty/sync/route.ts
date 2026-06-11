import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300

/** Ręczna synchronizacja ofert — uruchamia tę samą logikę co cron empik-sync. */
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const back = new URL('/admin/empik/oferty', request.url)
  try {
    const { GET } = await import('@/app/api/cron/empik-sync/route')
    const res = await GET(new Request(new URL('/api/cron/empik-sync', request.url)))
    const data = await res.json()
    if (!data.ok) back.searchParams.set('err', 'Synchronizacja nie powiodła się')
  } catch (e) {
    back.searchParams.set('err', (e as Error).message)
  }
  return NextResponse.redirect(back, 303)
}
