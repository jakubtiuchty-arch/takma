import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getSessionFromCookie } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { gbpConfigured, profileForPrompt } from '@/lib/gbp'
import { refreshProfile } from '@/lib/gbp-snapshot'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

/** Odświeża profil z Places API i generuje audyt AI + listę zadań optymalizacyjnych. */
export async function POST() {
  const session = await getSessionFromCookie()
  if (!session) return NextResponse.json({ error: 'Brak autoryzacji.' }, { status: 401 })
  if (!gbpConfigured()) return NextResponse.json({ error: 'Wizytówka nieskonfigurowana (Places API).' }, { status: 400 })
  if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ error: 'Brak ANTHROPIC_API_KEY.' }, { status: 500 })

  let profile
  try { profile = await refreshProfile() } catch (e) { return NextResponse.json({ error: (e as Error).message }, { status: 502 }) }

  const prompt = `Jesteś ekspertem od wizytówki Google (Google Business Profile) i lokalnego SEO. Analizujesz profil firmy TAKMA (B2B, sprzedaż i serwis urządzeń AutoID — drukarki etykiet, terminale, skanery Zebra; siedziba Wrocław, zasięg ogólnopolski). Pisz po polsku, konkretnie.

## Dane wizytówki (Places API)
${profileForPrompt(profile)}

## Zadanie
Wykonaj audyt i wywołaj narzędzie "zapisz_audyt".
Zasady: 4-7 zadań, posortowanych od najważniejszego. KLUCZOWE — pole "proposal" ma być GOTOWE DO WKLEJENIA (właściciel kopiuje i wstawia bez przeróbek): dla opisu firmy napisz pełny, naturalny opis TAKMA głosem firmy (250-750 znaków); dla kategorii podaj konkretne nazwy; dla usług podaj konkretną listę. Nie pisz ogólników typu „napisz opis" — napisz TEN opis. Jeśli zadanie nie wymaga treści (np. zdjęcia) — w "proposal" daj konkretną checklistę co dodać. "where" = dokładne miejsce w profilu (np. "Edytuj profil → Informacje → Opis"). Priorytet wg realnego wpływu (B2B: kompletność, opis, kategoria, zdjęcia, usługi/atrybuty, aktualność). Nie wymyślaj danych kontaktowych, których nie ma. KRYTYCZNE: Places API nie zwraca odpowiedzi właściciela na opinie — NIE twierdź, że firma „nie odpowiedziała" / „brak reakcji" (nie wiesz tego); co najwyżej ogólna dobra praktyka.`

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 3000,
    tools: [{
      name: 'zapisz_audyt',
      description: 'Zapisuje audyt i listę zadań optymalizacyjnych wizytówki.',
      input_schema: {
        type: 'object',
        properties: {
          score: { type: 'integer', description: 'Ocena kompletności i jakości 0-100' },
          audit: { type: 'string', description: 'Markdown: 2-4 zdania podsumowania z konkretami' },
          tasks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                detail: { type: 'string' },
                proposal: { type: 'string', description: 'Gotowa do wklejenia treść/wartość (może być wieloliniowa)' },
                where: { type: 'string', description: 'Gdzie w profilu to wkleić' },
                priority: { type: 'string', enum: ['high', 'med', 'low'] },
                category: { type: 'string', enum: ['opinie', 'tresc', 'zdjecia', 'dane', 'aktywnosc', 'ogolne'] },
              },
              required: ['title', 'detail', 'priority', 'category'],
            },
          },
        },
        required: ['score', 'audit', 'tasks'],
      },
    }],
    tool_choice: { type: 'tool', name: 'zapisz_audyt' },
    messages: [{ role: 'user', content: prompt }],
  })

  const toolUse = msg.content.find((b) => b.type === 'tool_use')
  if (!toolUse || toolUse.type !== 'tool_use') {
    return NextResponse.json({ error: 'AI nie zwróciło wyniku audytu.' }, { status: 502 })
  }
  const parsed = toolUse.input as { score?: number; audit?: string; tasks?: Array<{ title: string; detail: string; proposal?: string; where?: string; priority?: string; category?: string }> }

  // Zapis audytu + podmiana zadań (zachowaj „done" dla pasujących tytułów)
  const prevDone = new Set((await prisma.gbpTask.findMany({ where: { done: true } })).map((t) => t.title))
  await prisma.gbpAudit.create({ data: { summary: parsed.audit || '', score: typeof parsed.score === 'number' ? parsed.score : null } })
  await prisma.gbpTask.deleteMany({})
  const tasks = (parsed.tasks || []).slice(0, 12)
  for (const t of tasks) {
    await prisma.gbpTask.create({
      data: {
        title: (t.title || '').slice(0, 200),
        detail: (t.detail || '').slice(0, 1000),
        proposal: (t.proposal || '').slice(0, 2000) || null,
        where: (t.where || '').slice(0, 200) || null,
        priority: ['high', 'med', 'low'].includes(t.priority || '') ? t.priority! : 'med',
        category: t.category || 'ogolne',
        done: prevDone.has(t.title || ''),
      },
    })
  }
  return NextResponse.json({ ok: true, score: parsed.score, taskCount: tasks.length })
}
