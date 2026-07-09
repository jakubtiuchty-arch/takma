import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { prisma } from '@/lib/db'
import { adsConfigured, adsQuery } from '@/lib/googleAds'
import { gaConfigured, getGoogleAccessToken } from '@/lib/ga'

/**
 * Alerty dzienne (mail tylko gdy coś nie gra):
 *  1. Ads: wczorajszy koszt > 2× średniej z 7 poprzednich dni,
 *  2. Ads: wczoraj wydane > 50 zł przy zerze konwersji,
 *  3. dostępność 5 stron (HTTP != 200),
 *  4. GA4 takma: wczoraj sesje > 30, a zdarzenia kluczowe = 0 (zepsuty pomiar).
 */
export const maxDuration = 60

const SITES = [
  { name: 'TAKMA', url: 'https://takma.com.pl' },
  { name: 'Serwis-Zebry', url: 'https://serwis-zebry.pl' },
  { name: 'EZDRP24', url: 'https://ezdrp24.com.pl' },
  { name: 'Zadaszenia Trzebnica', url: 'https://zadaszeniatrzebnica.pl' },
  { name: 'Rejestratory.info', url: 'https://rejestratory.info' },
]

const zl = (v: number) => `${v.toFixed(2).replace('.', ',')} zł`

async function checkAds(alerts: string[]) {
  if (!adsConfigured()) return
  // koszt + konwersje per dzień: wczoraj + 7 dni bazy (jawny BETWEEN, GAQL nie zna OR na datach)
  const day = (offset: number) => {
    const d = new Date(Date.now() - offset * 24 * 3600 * 1000)
    return d.toISOString().slice(0, 10)
  }
  const byDay = new Map<string, { cost: number; conv: number }>()
  const data = await adsQuery(`
    SELECT segments.date, metrics.cost_micros, metrics.conversions
    FROM customer
    WHERE segments.date BETWEEN '${day(8)}' AND '${day(1)}'
  `)
  for (const r of data) {
    const d = r.segments?.date
    if (!d) continue
    const cur = byDay.get(d) || { cost: 0, conv: 0 }
    cur.cost += Number(r.metrics?.costMicros || 0) / 1e6
    cur.conv += Number(r.metrics?.conversions || 0)
    byDay.set(d, cur)
  }
  const days = Array.from(byDay.keys()).sort()
  if (!days.length) return
  const yDate = days[days.length - 1]
  const y = byDay.get(yDate)!
  const base = days.slice(0, -1).map((d) => byDay.get(d)!.cost)
  const avg = base.length ? base.reduce((a, b) => a + b, 0) / base.length : 0

  if (avg > 5 && y.cost > 2 * avg) {
    alerts.push(`Google Ads: wczoraj (${yDate}) wydane ${zl(y.cost)} — ponad 2× średnia z poprzednich dni (${zl(avg)}). Sprawdź stawki/budżety.`)
  }
  // Zero konwersji: NIE liczymy pojedynczego dnia — konwersje z GA4 importują się do Ads
  // z opóźnieniem 24-48 h, więc "wczoraj" prawie zawsze pokaże 0 rano. Alarmujemy dopiero,
  // gdy w oknie 3 dni zakończonych 2 dni temu (dane już rozliczone) jest 0 konwersji przy realnym koszcie.
  const settled = days.filter((d) => d <= day(2)) // do przedwczoraj włącznie
  const window3 = settled.slice(-3)
  const winCost = window3.reduce((a, d) => a + byDay.get(d)!.cost, 0)
  const winConv = window3.reduce((a, d) => a + byDay.get(d)!.conv, 0)
  if (window3.length >= 3 && winCost > 300 && winConv === 0) {
    alerts.push(`Google Ads: przez 3 dni (${window3[0]}–${window3[window3.length - 1]}) wydane ${zl(winCost)} przy ZERO konwersji. To już trend — sprawdź kampanie i pomiar konwersji.`)
  }
}

async function checkSites(alerts: string[]) {
  await Promise.all(
    SITES.map(async (s) => {
      try {
        const res = await fetch(s.url, { redirect: 'follow', signal: AbortSignal.timeout(15_000), headers: { 'user-agent': 'takma-alerts/1.0' } })
        if (res.status !== 200) alerts.push(`${s.name} (${s.url}) odpowiada HTTP ${res.status}.`)
      } catch (e) {
        alerts.push(`${s.name} (${s.url}) nie odpowiada: ${e instanceof Error ? e.message : String(e)}.`)
      }
    }),
  )
}

async function checkOnlinePayments(alerts: string[]) {
  // płatności online: ≥2 zamówienia ONLINE wiszące w PENDING_PAYMENT z ost. 24h
  // przy zerze opłaconych w tym oknie = prawdopodobna awaria ścieżki P24
  const since = new Date(Date.now() - 24 * 3600 * 1000)
  const [pending, paid] = await Promise.all([
    prisma.order.count({ where: { paymentMethod: 'ONLINE', status: 'PENDING_PAYMENT', createdAt: { gte: since } } }),
    prisma.order.count({ where: { paymentMethod: 'ONLINE', paidAt: { gte: since } } }),
  ])
  if (pending >= 2 && paid === 0) {
    alerts.push(`Płatności online: ${pending} zamówień z ost. 24h wisi w PENDING_PAYMENT i ŻADNE nie zostało opłacone — sprawdź Przelewy24 (panel P24, webhook).`)
  }
}

async function checkGaEvents(alerts: string[]) {
  if (!gaConfigured()) return
  const token = await getGoogleAccessToken()
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.GA_PROPERTY_ID}:runReport`,
    {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
        metrics: [{ name: 'sessions' }, { name: 'keyEvents' }],
      }),
    },
  )
  if (!res.ok) {
    alerts.push(`GA4: raport nie działa (HTTP ${res.status}).`)
    return
  }
  const json = (await res.json()) as { rows?: { metricValues?: { value: string }[] }[] }
  const v = json.rows?.[0]?.metricValues || []
  const sessions = Number(v[0]?.value || 0)
  const keyEvents = Number(v[1]?.value || 0)
  if (sessions > 30 && keyEvents === 0) {
    alerts.push(`GA4 takma: wczoraj ${sessions} sesji i ZERO zdarzeń kluczowych — prawdopodobnie zepsuty pomiar (gtag/consent).`)
  }
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const alerts: string[] = []
  await Promise.all([
    checkAds(alerts).catch((e) => alerts.push(`Nie udało się sprawdzić Google Ads: ${e instanceof Error ? e.message.slice(0, 200) : e}`)),
    checkSites(alerts),
    checkOnlinePayments(alerts).catch((e) => alerts.push(`Nie udało się sprawdzić płatności online: ${e instanceof Error ? e.message.slice(0, 200) : e}`)),
    checkGaEvents(alerts).catch((e) => alerts.push(`Nie udało się sprawdzić GA4: ${e instanceof Error ? e.message.slice(0, 200) : e}`)),
  ])

  if (alerts.length === 0) {
    return NextResponse.json({ ok: true, alerts: 0, message: 'Wszystko gra — mail pominięty' })
  }

  const html = `
    <h2 style="margin:0 0 12px">⚠️ Alerty dzienne (${alerts.length})</h2>
    <ul style="line-height:1.7">${alerts.map((a) => `<li>${a}</li>`).join('')}</ul>
    <p style="color:#64748b;font-size:13px">Automat: /api/cron/alerts — TAKMA</p>`
  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'takma@takma.com.pl',
    subject: `⚠️ ${alerts.length} alert${alerts.length === 1 ? '' : 'y'}: Ads / strony / pomiar`,
    html,
  })

  return NextResponse.json({ ok: true, alerts: alerts.length, sent: true, list: alerts })
}
