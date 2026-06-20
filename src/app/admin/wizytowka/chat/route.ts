import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getSessionFromCookie } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { gbpConfigured, profileForPrompt } from '@/lib/gbp'
import { getCachedProfile } from '@/lib/gbp-snapshot'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

type Role = 'user' | 'assistant'
const toDto = (m: { id: string; role: string; content: string; createdAt: Date }) => ({
  id: m.id, role: (m.role === 'assistant' ? 'assistant' : 'user') as Role, content: m.content, createdAt: m.createdAt.toISOString(),
})

export async function GET() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  const rows = await prisma.gbpChatMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 60 })
  return NextResponse.json({ messages: rows.reverse().map(toDto) }, { headers: { 'Cache-Control': 'no-store' } })
}

const SYSTEM = `Jesteś doradcą strategicznym ds. wizytówki Google (Google Business Profile) i lokalnego SEO dla firmy TAKMA (B2B AutoID — drukarki etykiet, terminale, skanery Zebra; Wrocław, zasięg ogólnopolski). Rozmawiasz z właścicielem w panelu /admin/wizytowka.

Zasady:
- Po polsku, rzeczowo, konkretnie. Bez korpomowy.
- TAKMA jest ogólnopolska, więc lokalny ranking (pak map) ma mniejsze znaczenie niż JAKOŚĆ wizytówki: kompletność, opinie i odpowiedzi, zdjęcia, aktualność, posty — to pracuje na zaufanie przy wyszukiwaniach marki i przy decyzjach zakupowych B2B oraz w odpowiedziach AI.
- Opieraj się na dostarczonych danych wizytówki. Nie zmyślaj liczb.
- Doradzaj praktycznie (co zrobić w profilu, jaki post, jak odpowiedzieć na opinię).`

export async function POST(req: NextRequest) {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })

  const body = (await req.json().catch(() => ({}))) as { message?: string; action?: string; id?: string }
  if (body.action === 'delete' && body.id) {
    await prisma.gbpChatMessage.delete({ where: { id: body.id } }).catch(() => {})
    return NextResponse.json({ ok: true })
  }

  const message = (body.message || '').trim()
  if (!message) return NextResponse.json({ error: 'Pusta wiadomość.' }, { status: 400 })
  if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ error: 'Brak ANTHROPIC_API_KEY.' }, { status: 500 })

  await prisma.gbpChatMessage.create({ data: { role: 'user', content: message.slice(0, 4000) } })

  let ctx = 'Brak danych wizytówki (Places API nieskonfigurowane).'
  if (gbpConfigured()) {
    try { ctx = profileForPrompt(await getCachedProfile()) } catch (e) { ctx = 'Błąd pobrania profilu: ' + (e as Error).message }
  }
  const lastAudit = await prisma.gbpAudit.findFirst({ orderBy: { createdAt: 'desc' } })

  const history = (await prisma.gbpChatMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 30 })).reverse()
  while (history.length && history[0].role !== 'user') history.shift()

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1200,
    system: `${SYSTEM}\n\n--- DANE WIZYTÓWKI ---\n${ctx}${lastAudit ? `\n\n--- OSTATNI AUDYT ---\n${lastAudit.summary}` : ''}`,
    messages: history.map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content } as const)),
  })
  const reply = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('\n').trim() || 'Brak odpowiedzi.'
  const saved = await prisma.gbpChatMessage.create({ data: { role: 'assistant', content: reply } })
  return NextResponse.json({ reply: toDto(saved) }, { headers: { 'Cache-Control': 'no-store' } })
}
