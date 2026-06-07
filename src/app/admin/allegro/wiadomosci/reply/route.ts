import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { sendMessage, declareAttachment, uploadAttachment } from '@/lib/allegro/messaging'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Odpowiedź na wiadomość + opcjonalne załączniki. Multipart/form-data.
export async function POST(request: Request) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Nieprawidłowe dane formularza.' }, { status: 400 })
  }

  const threadId = String(form.get('threadId') || '').trim()
  const text = String(form.get('text') || '').trim()
  const files = form.getAll('files').filter((f): f is File => f instanceof File && f.size > 0)

  if (!threadId || (!text && files.length === 0)) {
    return NextResponse.json({ error: 'Brak treści lub załącznika.' }, { status: 400 })
  }

  try {
    const attachmentIds: string[] = []
    for (const file of files) {
      const buf = await file.arrayBuffer()
      const id = await declareAttachment(file.name, buf.byteLength)
      await uploadAttachment(id, buf, file.type || 'application/octet-stream')
      attachmentIds.push(id)
    }
    await sendMessage(threadId, text || ' ', attachmentIds)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 422 })
  }
}
