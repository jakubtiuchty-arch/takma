import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { replyEmpikThread } from '@/lib/empik/messages'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Odpowiedź w wątku Mirakl Inbox. */
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const form = await request.formData()
  const threadId = String(form.get('threadId') || '').trim()
  const text = String(form.get('text') || '').trim()
  const back = new URL(`/admin/empik/wiadomosci?thread=${encodeURIComponent(threadId)}`, request.url)
  if (!threadId || !text) {
    back.searchParams.set('err', 'Brak treści.')
    return NextResponse.redirect(back, 303)
  }

  try {
    await replyEmpikThread(threadId, text)
  } catch (e) {
    back.searchParams.set('err', (e as Error).message)
  }
  return NextResponse.redirect(back, 303)
}
