import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { sendMessage } from '@/lib/allegro/messaging'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Odpowiedź na wiadomość. Pod /admin/* — cookie admina dochodzi.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let threadId: string | undefined
  let text: string | undefined
  try {
    const body = await request.json()
    threadId = typeof body?.threadId === 'string' ? body.threadId : undefined
    text = typeof body?.text === 'string' ? body.text.trim() : undefined
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe body.' }, { status: 400 })
  }
  if (!threadId || !text) return NextResponse.json({ error: 'Brak threadId lub treści.' }, { status: 400 })

  try {
    await sendMessage(threadId, text)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
