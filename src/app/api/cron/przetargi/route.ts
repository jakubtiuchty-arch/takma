import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/email'

/**
 * Monitor przetargów AutoID — cron dzienny (6:15).
 *
 * 1. Pobiera ogłoszenia ContractNotice z BZP (publiczne API e-Zamówienia,
 *    bez klucza) z ostatnich N dni (domyślnie 2 — zakładka na opóźnienia publikacji).
 * 2. Pre-filtr: kody CPV branżowe LUB słowa kluczowe w przedmiocie/treści.
 * 3. Scoring AI (Haiku): dopasowanie 0-100 do profilu TAKMA + uzasadnienie.
 * 4. Zapis do DB (dedup po noticeNumber) + mail dzienny z nowymi trafieniami.
 *
 * Parametry: ?days=14 (backfill), ?dry=1 (bez zapisu i maila).
 * UWAGA endpoint: mo-board/api/v1/notice (ten z dokumentacji mo-client-board zwraca HTML).
 */

export const maxDuration = 300

const BZP_API = 'https://ezamowienia.gov.pl/mo-board/api/v1/notice'
const NOTICE_URL = (objectId: string) => `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/${objectId}`
const DIGEST_TO = 'jakub.tiuchty@takma.com.pl'
const MIN_SCORE_FOR_MAIL = 40

// Kody CPV branżowe (prefiksy, bez sufiksu kontrolnego)
const CPV_PREFIXES = [
  '30232100', // drukarki i plotery (szum: 3D — odsiewa AI)
  '30216130', // czytniki kodów kreskowych
  '30216000', // czytniki magnetyczne i optyczne
  '30192800', // etykiety samoprzylepne
  '30199760', // etykiety
  '30192300', // taśmy barwiące
  '30213100', // komputery przenośne (tak bywają klasyfikowane kolektory)
  '30213200', // tablety
]

// Słowa kluczowe (lowercase, dopasowanie substring w przedmiocie + treści)
const KEYWORDS = [
  'drukark etykiet', 'drukarki etykiet', 'drukarek etykiet', 'drukarkę etykiet',
  'kod kreskow', 'kodów kreskowych', 'kody kreskowe',
  'kolektor danych', 'kolektory danych', 'kolektorów danych',
  'terminal mobilny', 'terminale mobilne', 'terminali mobilnych',
  'czytnik kodów', 'czytniki kodów',
  'termotransfer', 'etykiet samoprzylepn', 'etykiety termiczne',
  'rfid', 'zebra technologies', ' zebra ', 'honeywell', 'datalogic', 'newland',
]

interface BzpNotice {
  noticeNumber: string
  bzpNumber?: string
  objectId?: string
  orderObject?: string
  organizationName?: string
  organizationCity?: string
  organizationProvince?: string
  cpvCode?: string
  publicationDate?: string
  submittingOffersDate?: string
  htmlBody?: string
  noticeType?: string
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ')
}

function matchesPrefilter(n: BzpNotice): boolean {
  const cpv = (n.cpvCode || '').replace(/-\d$/, '')
  if (CPV_PREFIXES.some((p) => cpv.startsWith(p))) return true
  const blob = `${n.orderObject || ''} ${stripHtml(n.htmlBody || '')}`.toLowerCase()
  return KEYWORDS.some((k) => blob.includes(k))
}

/**
 * Pobiera ogłoszenia DZIEŃ PO DNIU — paginacja BZP przy dużych oknach jest
 * niestabilna (duplikaty i potencjalne ubytki między stronami); okno 1-dniowe
 * (~15-25 stron) minimalizuje problem. Strony w paczkach po 5 równolegle.
 */
/** Zwraca TYLKO kandydatów (prefiltr + dedup w locie) — surowe ogłoszenia z htmlBody
 *  są zbyt ciężkie, by je akumulować (4 dni ≈ >1 GB → OOM na Vercelu). */
async function fetchCandidates(fromDate: string, toDate: string): Promise<{ candidates: BzpNotice[]; raw: number }> {
  const uniq = new Map<string, BzpNotice>()
  let raw = 0
  const fetchPage = async (day: string, page: number): Promise<BzpNotice[]> => {
    const url = `${BZP_API}?NoticeType=ContractNotice&PublicationDateFrom=${day}&PublicationDateTo=${day}&pageSize=100&pageNo=${page}`
    const res = await fetch(url, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(`BZP API HTTP ${res.status} (${day} s.${page})`)
    const rows = (await res.json()) as BzpNotice[]
    return Array.isArray(rows) ? rows : []
  }
  const days: string[] = []
  for (let d = new Date(fromDate + 'T00:00:00Z'); d <= new Date(toDate + 'T00:00:00Z'); d = new Date(d.getTime() + 86400_000)) {
    days.push(d.toISOString().slice(0, 10))
  }
  for (const day of days) {
    for (let start = 1; start <= 60; start += 5) {
      const pages = await Promise.all([0, 1, 2, 3, 4].map((i) => fetchPage(day, start + i)))
      let done = false
      for (const rows of pages) {
        raw += rows.length
        for (const n of rows) {
          if (n.noticeNumber && !uniq.has(n.noticeNumber) && matchesPrefilter(n)) uniq.set(n.noticeNumber, n)
        }
        if (rows.length < 100) done = true
      }
      if (done) break
    }
  }
  return { candidates: Array.from(uniq.values()), raw }
}

const TAKMA_PROFILE = `TAKMA (takma.com.pl) — autoryzowany partner Zebra, Honeywell, Datalogic, Newland, M3 Mobile. Sprzedaje i serwisuje:
- drukarki etykiet (biurkowe, przemysłowe, mobilne), drukarki kart plastikowych
- terminale mobilne / kolektory danych, tablety przemysłowe
- skanery / czytniki kodów kreskowych, czytniki RFID
- etykiety termiczne i termotransferowe, taśmy termotransferowe (materiały eksploatacyjne)
- akcesoria (baterie, stacje dokujące), kontrakty serwisowe, wdrożenia AutoID
NIE oferuje: drukarek biurowych/laserowych/atramentowych/3D, tonerów, komputerów PC/laptopów, monitorów, oprogramowania ERP, mebli, usług budowlanych.`

async function scoreNotice(client: Anthropic, n: BzpNotice): Promise<{ score: number; reason: string }> {
  const text = `${n.orderObject || ''}\n\nFragment ogłoszenia: ${stripHtml(n.htmlBody || '').slice(0, 2500)}`
  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 150,
    messages: [{
      role: 'user',
      content: `Profil firmy:\n${TAKMA_PROFILE}\n\nPrzetarg (BZP):\n${text}\n\nOceń dopasowanie przetargu do profilu firmy w skali 0-100 (100 = idealny rdzeń oferty, np. dostawa drukarek etykiet Zebra; 0 = zupełnie obok, np. drukarki 3D, tonery, meble). Jeśli sprzęt AutoID jest tylko małą częścią większego pakietu IT — oceń 30-50. Odpowiedz WYŁĄCZNIE JSON-em: {"score": <int>, "reason": "<1 zdanie po polsku>"}`,
    }],
  })
  const raw = msg.content.filter((b) => b.type === 'text').map((b) => (b as { text: string }).text).join('').trim()
  try {
    const j = JSON.parse(raw.replace(/^```json?\s*|\s*```$/g, ''))
    return { score: Math.max(0, Math.min(100, Number(j.score) || 0)), reason: String(j.reason || '').slice(0, 300) }
  } catch {
    return { score: 0, reason: `Nie udało się sparsować oceny AI: ${raw.slice(0, 100)}` }
  }
}

export async function GET(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const days = Math.min(30, Number(request.nextUrl.searchParams.get('days')) || 2)
  const dry = request.nextUrl.searchParams.get('dry') === '1'
  const fmt = (d: Date) => d.toISOString().slice(0, 10)
  // opcjonalne jawne okno dat (backfill segmentami): ?from=2026-07-10&to=2026-07-13
  const fromDate = request.nextUrl.searchParams.get('from') || fmt(new Date(Date.now() - days * 86400_000))
  const toDate = request.nextUrl.searchParams.get('to') || fmt(new Date())

  const { candidates, raw } = await fetchCandidates(fromDate, toDate)

  // dedup względem DB
  const existing = new Set(
    (await prisma.tender.findMany({
      where: { noticeNumber: { in: candidates.map((c) => c.noticeNumber) } },
      select: { noticeNumber: true },
    })).map((t) => t.noticeNumber),
  )
  const fresh = candidates.filter((c) => c.noticeNumber && !existing.has(c.noticeNumber))

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const scored: (BzpNotice & { score: number; reason: string })[] = []
  const BATCH = 6
  for (let i = 0; i < fresh.length; i += BATCH) {
    const batch = fresh.slice(i, i + BATCH)
    const results = await Promise.all(batch.map(async (n) => {
      try {
        const { score, reason } = await scoreNotice(client, n)
        return { ...n, score, reason }
      } catch (e) {
        return { ...n, score: 0, reason: `Błąd scoringu: ${e instanceof Error ? e.message.slice(0, 80) : e}` }
      }
    }))
    scored.push(...results)
  }
  console.log(`[przetargi] pobrane=${raw} prefiltr=${candidates.length} nowe=${fresh.length}`)

  if (!dry) {
    for (const n of scored) {
      await prisma.tender.upsert({
        where: { noticeNumber: n.noticeNumber },
        create: {
          noticeNumber: n.noticeNumber,
          bzpNumber: n.bzpNumber || null,
          objectId: n.objectId || null,
          orderObject: (n.orderObject || '(brak przedmiotu)').slice(0, 1000),
          organizationName: n.organizationName || null,
          organizationCity: n.organizationCity || null,
          organizationProvince: n.organizationProvince || null,
          cpvCodes: n.cpvCode || null,
          publicationDate: n.publicationDate ? new Date(n.publicationDate) : null,
          submittingOffersDate: n.submittingOffersDate ? new Date(n.submittingOffersDate) : null,
          url: n.objectId ? NOTICE_URL(n.objectId) : null,
          score: n.score,
          aiReason: n.reason,
        },
        update: {},
      })
    }
  }

  // mail: nowe trafienia z sensownym score
  const forMail = scored.filter((n) => n.score >= MIN_SCORE_FOR_MAIL).sort((a, b) => b.score - a.score)
  if (forMail.length > 0 && !dry) {
    const rows = forMail.map((n) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:700;color:${n.score >= 70 ? '#16a34a' : '#d97706'}">${n.score}</td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb"><a href="${n.objectId ? NOTICE_URL(n.objectId) : '#'}" style="color:#2563eb;text-decoration:none">${(n.orderObject || '').slice(0, 140)}</a><br/><span style="color:#6b7280;font-size:12px">${n.reason}</span></td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;font-size:13px">${n.organizationName || ''}<br/><span style="color:#6b7280">${n.organizationCity || ''}</span></td>
        <td style="padding:8px;border-bottom:1px solid #e5e7eb;white-space:nowrap">${(n.submittingOffersDate || '').slice(0, 10)}</td>
      </tr>`).join('')
    await sendEmail({
      to: DIGEST_TO,
      subject: `📋 Przetargi AutoID: ${forMail.length} ${forMail.length === 1 ? 'nowe trafienie' : 'nowych trafień'}`,
      html: `<div style="font-family:sans-serif;max-width:760px">
        <h2 style="margin:0 0 12px">📋 Nowe przetargi dopasowane do TAKMA (${forMail.length})</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <thead><tr style="text-align:left;color:#6b7280;font-size:12px"><th style="padding:8px">Ocena</th><th style="padding:8px">Przedmiot</th><th style="padding:8px">Zamawiający</th><th style="padding:8px">Oferty do</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p style="color:#6b7280;font-size:12px;margin-top:16px">Pełna lista i statusy: <a href="https://www.takma.com.pl/admin/przetargi">panel przetargów</a>. Źródło: BZP (e-Zamówienia).</p>
      </div>`,
    })
  }

  return NextResponse.json({
    ok: true,
    okno: `${fromDate}..${toDate}`,
    days,
    dry,
    pobrane: raw,
    poPrefiltrze: candidates.length,
    nowe: fresh.length,
    doMaila: forMail.length,
    top: scored.sort((a, b) => b.score - a.score).slice(0, 10).map((n) => ({ score: n.score, przedmiot: (n.orderObject || '').slice(0, 90), reason: n.reason })),
  })
}
