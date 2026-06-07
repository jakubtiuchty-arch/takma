import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { setThreadRead } from '@/lib/allegro/messaging'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Zmiana statusu przeczytania wątku.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let threadId: string | undefined
  let read = true
  try {
    const body = await request.json()
    threadId = typeof body?.threadId === 'string' ? body.threadId : undefined
    read = body?.read !== false
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!threadId) return NextResponse.json({ error: 'Brak threadId.' }, { status: 400 })

  await setThreadRead(threadId, read)
  return NextResponse.json({ ok: true })
}
