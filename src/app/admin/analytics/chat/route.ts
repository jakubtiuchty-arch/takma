import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getSessionFromCookie } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

type Role = 'user' | 'assistant'
interface ChatMsg { id: string; role: Role; content: string; pinned: boolean; createdAt: string }

const toDto = (m: { id: string; role: string; content: string; pinned: boolean; createdAt: Date }): ChatMsg => ({
  id: m.id,
  role: m.role === 'assistant' ? 'assistant' : 'user',
  content: m.content,
  pinned: m.pinned,
  createdAt: m.createdAt.toISOString(),
})

/** Historia dialogu (ostatnie 60 wiadomości, chronologicznie). */
export async function GET() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const rows = await prisma.gaChatMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 60 })
  return NextResponse.json({ messages: rows.reverse().map(toDto) }, { headers: { 'Cache-Control': 'no-store' } })
}

/** Buduje grunt danych dla AI: ostatnia analiza dnia + jej metryki/alerty. */
async function dataContext(): Promise<string> {
  const digest = await prisma.gaDigest.findFirst({ orderBy: { date: 'desc' } })
  if (!digest) return 'Brak zapisanej analizy dnia (cron jeszcze nie zebrał danych).'
  let metricsLine = ''
  try {
    const m = JSON.parse(digest.metrics || '{}') as {
      current?: Record<string, number>
      previous?: Record<string, number>
      alerts?: string[]
    }
    if (m.current) metricsLine = `\nSnapshot metryk (7 dni vs poprzednie 7 dni):\n${JSON.stringify({ current: m.current, previous: m.previous })}`
    if (m.alerts?.length) metricsLine += `\nAlerty wykryte automatycznie: ${m.alerts.join(' | ')}`
  } catch { /* stare wpisy */ }
  return `Ostatnia analiza dnia (${digest.date}):\n${digest.summary}${metricsLine}`
}

const SYSTEM = `Jesteś analitykiem ruchu i sprzedaży e-commerce B2B dla takma.com.pl (etykiety, taśmy termotransferowe, terminale i drukarki Zebra). Rozmawiasz z właścicielem sklepu w panelu /admin/analytics.

Twoja rola:
- Odpowiadaj rzeczowo, po polsku, krótko i liczbami. Bez ogólników i bez korpomowy.
- Właściciel podaje Ci kontekst biznesowy, którego nie ma w danych GA4 (np. „spadek przychodu w ten weekend bo robiliśmy inwentaryzację", „duże zamówienie poszło przez Allegro, nie przez stronę", „wstrzymaliśmy kampanię"). Przyjmuj te wyjaśnienia, potwierdzaj zrozumienie i wiąż je z liczbami.
- Gdy właściciel wyjaśni anomalię — zapamiętasz to (cała ta rozmowa trafia do codziennej analizy), więc potwierdź, że nie będziesz już o niej alarmował.
- Jeśli pyta o dane — opieraj się na dostarczonym snapshotcie. Nie zmyślaj liczb, których nie masz; powiedz wprost, czego brakuje.
- NIGDY nie twierdź, że jakiś pomiar „nie jest wdrożony", jeśli nie widzisz go w snapshotcie. Snapshot to skrót, nie spis wszystkiego. Zamiast „brak zdarzenia X" napisz „w tym zestawieniu nie widzę X".

Stan pomiaru na stronie (to DZIAŁA, nie proponuj wdrożenia):
- klik_tel i klik_mail strzelają automatycznie z każdego linku tel:/mailto: w całym serwisie; formularze dają form_start, form_submit, wyslanie_formularza i generate_lead.
- Formularz zgłoszenia serwisowego działa na /serwis i /serwis/<marka>.
- E-commerce: view_item, add_to_cart, view_cart, begin_checkout, add_payment_info, purchase (z kodem rabatowym w parametrze coupon).
- Własne: strona_kontakt, doradca_* (czat doradcy materiałowego), ribbon_calc_used, kod_zastosowany, kod_odrzucony, search.
- Ruch „serwis-zebry / instrukcja" to nasze celowe tagowanie UTM z banerów na serwis-zebry.pl — nie jest to zepsuta atrybucja cross-domain.
- Możesz proponować konkretne działania, ale tylko jeśli właściciel o to prosi lub gdy to naturalne w rozmowie.`

/** Nowa wiadomość właściciela → odpowiedź AI. Zapisuje obie. */
export async function POST(req: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const body = (await req.json().catch(() => ({}))) as { message?: string; action?: string; id?: string; pinned?: boolean }

  // Przełączanie „przypięcia" wiadomości (trwały kontekst dla codziennej analizy).
  if (body.action === 'pin' && body.id) {
    const updated = await prisma.gaChatMessage.update({ where: { id: body.id }, data: { pinned: Boolean(body.pinned) } })
    return NextResponse.json({ ok: true, message: toDto(updated) })
  }
  // Usunięcie wiadomości.
  if (body.action === 'delete' && body.id) {
    await prisma.gaChatMessage.delete({ where: { id: body.id } }).catch(() => {})
    return NextResponse.json({ ok: true })
  }

  const message = (body.message || '').trim()
  if (!message) return NextResponse.json({ error: 'Pusta wiadomość.' }, { status: 400 })
  if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ error: 'Brak ANTHROPIC_API_KEY.' }, { status: 500 })

  await prisma.gaChatMessage.create({ data: { role: 'user', content: message.slice(0, 4000) } })

  // Kontekst rozmowy: ostatnie 30 wiadomości (chronologicznie).
  const history = (await prisma.gaChatMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 30 })).reverse()
  // Anthropic wymaga, by historia zaczynała się od wiadomości 'user'.
  while (history.length && history[0].role !== 'user') history.shift()
  const ctx = await dataContext()

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1200,
    system: `${SYSTEM}\n\n--- DANE Z GA4 (do odpowiedzi) ---\n${ctx}`,
    messages: history.map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content } as const)),
  })
  const reply = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('\n').trim()
    || 'Nie udało się wygenerować odpowiedzi.'

  const saved = await prisma.gaChatMessage.create({ data: { role: 'assistant', content: reply } })
  return NextResponse.json({ reply: toDto(saved) }, { headers: { 'Cache-Control': 'no-store' } })
}
