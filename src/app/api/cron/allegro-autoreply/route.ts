import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { listThreads, getThreadMessages, sendMessage } from '@/lib/allegro/messaging'
import { generateAutoReply } from '@/lib/allegro/autoreply'
import { sendEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const NOTIFY_EMAIL = process.env.ALLEGRO_NOTIFY_EMAIL || 'handlowy@takma.com.pl'
const RECENT_HOURS = 48 // nie ruszamy starych, nieodpowiedzianych wątków przy pierwszym uruchomieniu
const MAX_PER_RUN = 10

function clientLabel(login?: string): string {
  if (!login) return 'Klient'
  return login.startsWith('Client:') ? `Klient #${login.slice(7)}` : login
}

/**
 * Auto-odpowiedź na PIERWSZĄ wiadomość klienta (brak jakiejkolwiek naszej odpowiedzi
 * w wątku) + powiadomienie handlowca mailem. Włączane env ALLEGRO_AUTOREPLY=true.
 */
export async function GET() {
  if (process.env.ALLEGRO_AUTOREPLY !== 'true') {
    return NextResponse.json({ ok: true, disabled: true })
  }

  let threads
  try {
    threads = await listThreads(20)
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 200 })
  }

  const cutoff = Date.now() - RECENT_HOURS * 3600 * 1000
  const candidates = threads.filter((t) => {
    const ts = new Date(t.lastMessageDateTime).getTime()
    return Number.isFinite(ts) && ts >= cutoff
  })

  // pomiń wątki już obsłużone
  const already = await prisma.allegroAutoReply.findMany({
    where: { threadId: { in: candidates.map((t) => t.id) } },
    select: { threadId: true },
  })
  const handled = new Set(already.map((a) => a.threadId))

  let replied = 0,
    notified = 0,
    skipped = 0
  for (const t of candidates) {
    if (replied >= MAX_PER_RUN) break
    if (handled.has(t.id)) {
      skipped++
      continue
    }
    try {
      const messages = await getThreadMessages(t.id) // malejąco (najnowsze pierwsze)
      // Pierwsza wiadomość = w wątku NIE ma żadnej naszej odpowiedzi (same od klienta)
      const sellerReplied = messages.some((m) => m.author && m.author.isInterlocutor === false)
      if (sellerReplied || messages.length === 0) {
        skipped++
        continue
      }
      const lastCustomerMsg = messages[0] // najnowsza od klienta

      const reply = await generateAutoReply(lastCustomerMsg.text || '')
      await sendMessage(t.id, reply)
      await prisma.allegroAutoReply.create({ data: { threadId: t.id } })
      replied++

      // Powiadomienie handlowca
      const excerpt = (lastCustomerMsg.text || '').slice(0, 600)
      const panelUrl = 'https://takma.com.pl/admin/allegro/wiadomosci?thread=' + t.id
      const r = await sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'MASZ WIADOMOŚĆ NA ALLEGRO – ODPOWIEDZ',
        replyTo: 'takma@takma.com.pl',
        html: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937">
            <h2 style="margin:0 0 8px">Nowa wiadomość na Allegro</h2>
            <p style="margin:0 0 4px"><strong>Od:</strong> ${clientLabel(t.interlocutor?.login)}</p>
            <p style="margin:0 0 12px"><strong>Treść klienta:</strong></p>
            <blockquote style="margin:0 0 16px;padding:10px 14px;background:#f3f4f6;border-radius:8px;white-space:pre-wrap">${excerpt.replace(/</g, '&lt;')}</blockquote>
            <p style="margin:0 0 16px;color:#6b7280">Automat odpowiedział już wstępnie. Wejdź i odpowiedz merytorycznie:</p>
            <p><a href="${panelUrl}" style="display:inline-block;background:#2563eb;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600">Otwórz wiadomość w panelu</a></p>
          </div>`,
      })
      if (r.success) {
        notified++
        await prisma.allegroAutoReply.update({ where: { threadId: t.id }, data: { notified: true } })
      }
    } catch (e) {
      console.error(`[Allegro AutoReply] ${t.id}:`, (e as Error).message)
      skipped++
    }
  }

  return NextResponse.json({ ok: true, checked: candidates.length, replied, notified, skipped })
}
