import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@/lib/db'
import { gaConfigured, gaDashboard, type GaRow, type GaMetrics } from '@/lib/ga'

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
  const data = await gaDashboard(7)

  const prompt = `Jesteś analitykiem ruchu e-commerce B2B (takma.com.pl — sprzedaż etykiet, taśm i terminali Zebra). Przeanalizuj dane GA4 z ostatnich 7 dni względem poprzednich 7 dni. Pisz po polsku, konkretnie, liczbami. Bez ogólników.

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

  await prisma.gaDigest.upsert({
    where: { date },
    create: { date, summary, metrics: JSON.stringify({ current: data.current, previous: data.previous }) },
    update: { summary, metrics: JSON.stringify({ current: data.current, previous: data.previous }) },
  })

  return NextResponse.json({ ok: true, date, length: summary.length })
}
