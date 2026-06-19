import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@/lib/db'
import { gaConfigured, gaDashboard, gaDayDetail, LEAD_EVENTS, type GaRow, type GaMetrics, type GaDayDetail } from '@/lib/ga'

export const maxDuration = 120

function yesterdayWarsaw(): string {
  const d = new Date(Date.now() - 24 * 60 * 60 * 1000)
  // YYYY-MM-DD w strefie Europe/Warsaw
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(d)
}

function topList(rows: GaRow[], n = 8): string {
  return rows.slice(0, n).map((r) => `  - ${r.label}: ${r.value}${r.value2 != null ? ` / ${r.value2}` : ''}`).join('\n')
}

function metricsLine(m: GaMetrics): string {
  return `użytkownicy ${m.activeUsers}, nowi ${m.newUsers}, sesje ${m.sessions}, odsłony ${m.screenPageViews}, zaangażowanie ${(m.engagementRate * 100).toFixed(1)}%, śr. czas sesji ${m.averageSessionDuration.toFixed(0)}s, bounce ${(m.bounceRate * 100).toFixed(1)}%, zdarzenia ${m.eventCount}, przychód ${m.totalRevenue.toFixed(0)} zł`
}

/**
 * Twarde reguły alertowe dla wczorajszego dnia (porównanie: ten sam dzień
 * tygodnia tydzień wcześniej). Zwraca listę komunikatów — pusta = spokój.
 */
function dayAlerts(date: string, day: GaDayDetail): string[] {
  const alerts: string[] = []
  const cur = day.summary
  const prev = day.previous

  if (prev.sessions >= 20 && cur.sessions < prev.sessions * 0.7) {
    alerts.push(`Sesje spadły o ${Math.round((1 - cur.sessions / prev.sessions) * 100)}% (${cur.sessions} vs ${prev.sessions} tydzień wcześniej)`)
  }
  if (cur.sessions >= 20 && cur.bounceRate - prev.bounceRate >= 0.2) {
    alerts.push(`Współczynnik odrzuceń skoczył o ${((cur.bounceRate - prev.bounceRate) * 100).toFixed(0)} p.p. (${(cur.bounceRate * 100).toFixed(0)}% vs ${(prev.bounceRate * 100).toFixed(0)}%)`)
  }

  const leadNames = new Set<string>(LEAD_EVENTS)
  const leads = day.events.filter((e) => leadNames.has(e.label)).reduce((s, e) => s + e.value, 0)
  const weekday = new Date(`${date}T12:00:00Z`).getUTCDay()
  if (weekday >= 1 && weekday <= 5 && cur.sessions >= 20 && leads === 0) {
    alerts.push(`Zero leadów (telefon/mail/formularz) w dzień roboczy przy ${cur.sessions} sesjach`)
  }

  const notSet = day.sourceLanding.filter((r) => r.landing === '(not set)').reduce((s, r) => s + r.sessions, 0)
  if (cur.sessions >= 20 && notSet / cur.sessions > 0.15) {
    alerts.push(`${Math.round((notSet / cur.sessions) * 100)}% sesji z landingiem "(not set)" (${notSet} z ${cur.sessions}) — możliwy problem z tagiem GA / consent`)
  }

  return alerts
}

export async function GET(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!gaConfigured()) {
    return NextResponse.json({ ok: false, error: 'GA nieskonfigurowane' }, { status: 200 })
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ ok: false, error: 'Brak ANTHROPIC_API_KEY' }, { status: 200 })
  }

  const date = yesterdayWarsaw()
  const existing = await prisma.gaDigest.findUnique({ where: { date } })
  if (existing && request.nextUrl.searchParams.get('force') !== '1') {
    return NextResponse.json({ ok: true, skipped: 'już istnieje', date })
  }

  // Analizujemy ostatnie 7 dni vs poprzednie 7 dni (świeży obraz, mniej szumu niż 1 dzień).
  const [data, day] = await Promise.all([gaDashboard(7), gaDayDetail(date)])
  const alerts = dayAlerts(date, day)

  // Kontekst od właściciela z czatu w panelu: wiadomości przypięte (zawsze) +
  // wiadomości użytkownika z ostatnich 21 dni. Dzięki temu AI nie alarmuje
  // o anomaliach, które właściciel już wyjaśnił.
  const ctxSince = new Date(Date.now() - 21 * 24 * 60 * 60 * 1000)
  const ownerNotes = await prisma.gaChatMessage.findMany({
    where: { role: 'user', OR: [{ pinned: true }, { createdAt: { gte: ctxSince } }] },
    orderBy: { createdAt: 'asc' },
    take: 60,
  })
  const ownerContext = ownerNotes
    .map((m) => `  - [${new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(m.createdAt)}]${m.pinned ? ' (trwałe)' : ''} ${m.content.replace(/\s+/g, ' ').trim()}`)
    .join('\n')

  const prompt = `Jesteś analitykiem ruchu e-commerce B2B (takma.com.pl — sprzedaż etykiet, taśm i terminali Zebra). Przeanalizuj dane GA4 z ostatnich 7 dni względem poprzednich 7 dni. Pisz po polsku, konkretnie, liczbami. Bez ogólników.
${ownerContext ? `\n## 🗣️ KONTEKST OD WŁAŚCICIELA (z czatu w panelu) — BEZWZGLĘDNIE UWZGLĘDNIJ\nWłaściciel wyjaśnił poniższe sytuacje. NIE zgłaszaj ponownie jako anomalii niczego, co już wyjaśnił. Jeśli alert dotyczy wyjaśnionej sprawy — zamiast alarmować, krótko odnotuj „zgodnie z wyjaśnieniem właściciela: …". Uwzględniaj daty (wyjaśnienie może dotyczyć konkretnego okresu).\n${ownerContext}\n` : ''}${alerts.length ? `\n## ⚠️ ALERTY za wczoraj (${date}) — odnieś się do nich w analizie (ale pomiń te już wyjaśnione przez właściciela)\n${alerts.map((a) => `  - ${a}`).join('\n')}\n` : ''}

## Metryki (ostatnie 7 dni)
${metricsLine(data.current)}

## Metryki (poprzednie 7 dni)
${metricsLine(data.previous)}

## Najczęściej odwiedzane strony (odsłony)
${topList(data.topPages)}

## Kanały (sesje / użytkownicy)
${topList(data.channels)}

## Źródła ruchu (sesje)
${topList(data.sources)}

## Strony wejścia / landing (sesje)
${topList(data.landingPages)}

## Kraje (użytkownicy)
${topList(data.countries, 6)}

## Urządzenia (sesje)
${topList(data.devices, 4)}

## Zdarzenia (liczba)
${topList(data.events)}

## Zadanie
Napisz zwięzłą analizę (markdown, ~250-400 słów) w sekcjach:
1. **Najważniejsze** — 2-3 zdania: co się zmieniło w ruchu (z liczbami i %).
2. **Co rośnie / spada** — konkretne strony, kanały, źródła (z liczbami). Wskaż anomalie.
3. **Możliwe przyczyny** — krótko, na podstawie danych (nie zgaduj na siłę).
4. **Rekomendacje** — 3-5 konkretnych działań dla sklepu (SEO/treści/kampanie), priorytetowo.`

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  })
  const summary = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('\n').trim()

  const metrics = JSON.stringify({ current: data.current, previous: data.previous, alerts })
  await prisma.gaDigest.upsert({
    where: { date },
    create: { date, summary, metrics },
    update: { summary, metrics },
  })

  return NextResponse.json({ ok: true, date, alerts, length: summary.length })
}
