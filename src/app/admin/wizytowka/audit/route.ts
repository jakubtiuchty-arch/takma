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
Zwróć WYŁĄCZNIE poprawny JSON (bez markdown fences) w formacie:
{
  "score": <0-100 ocena kompletności i jakości wizytówki>,
  "audit": "<markdown: 2-4 zdania podsumowania co jest dobrze, a co kuleje — z konkretami z danych>",
  "tasks": [
    {
      "title": "<krótkie zadanie>",
      "detail": "<1-2 zdania jak i dlaczego>",
      "proposal": "<GOTOWA do wklejenia treść/wartość — np. pełny draft opisu firmy (250-750 znaków), konkretna nazwa kategorii, lista usług do dodania, poprawiona nazwa wizytówki. Po polsku, gotowiec, bez placeholderów. Jeśli zadanie nie wymaga konkretnej treści (np. 'dodaj 5 zdjęć produktów'), wpisz konkretną instrukcję/checklistę co dokładnie dodać. Może być wieloliniowe.>",
      "where": "<dokładnie gdzie to zrobić w Profilu Firmy Google, np. 'Edytuj profil → Informacje → Opis' lub 'Edytuj profil → Kategoria'>",
      "priority": "high|med|low",
      "category": "opinie|tresc|zdjecia|dane|aktywnosc|ogolne"
    }
  ]
}
Zasady: 4-7 zadań, posortowane od najważniejszego. KLUCZOWE — pole "proposal" ma być GOTOWE DO WKLEJENIA (właściciel ma móc skopiować i wstawić bez przeróbek): dla opisu firmy napisz pełny, naturalny opis TAKMA głosem firmy; dla kategorii podaj konkretne nazwy; dla usług podaj konkretną listę. Nie pisz ogólników typu „napisz opis" — napisz TEN opis. Priorytet wg realnego wpływu (B2B: kompletność, opis, kategoria, zdjęcia, usługi/atrybuty, aktualność). Nie wymyślaj danych kontaktowych, których nie ma. KRYTYCZNE: Places API nie zwraca odpowiedzi właściciela na opinie — NIE twierdź, że firma „nie odpowiedziała" / „brak reakcji" (nie wiesz tego); co najwyżej ogólna dobra praktyka.`

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  })
  const raw = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('').trim()

  let parsed: { score?: number; audit?: string; tasks?: Array<{ title: string; detail: string; proposal?: string; where?: string; priority?: string; category?: string }> }
  try {
    parsed = JSON.parse(raw.replace(/^```json\s*/i, '').replace(/```$/i, '').trim())
  } catch {
    return NextResponse.json({ error: 'AI zwróciło nieparsowalny JSON.', raw: raw.slice(0, 400) }, { status: 502 })
  }

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
