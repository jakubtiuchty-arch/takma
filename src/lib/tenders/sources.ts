import { prisma } from '@/lib/db'
import { decodeText, CORE_CPV, BROAD_CPV, candidate, hash, plain, polishDate, latestDeadline, type Notice } from './core'
import { json, download } from './network'

const BK = 'https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl'
export const BUILTIN_SOURCES = [
  { id: 'BZP', name: 'BZP — e-Zamówienia' },
  { id: 'BZP_CHANGE', name: 'BZP — zmiany ogłoszeń' },
  { id: 'TED', name: 'TED — zamówienia UE' },
  { id: 'BK', name: 'Baza Konkurencyjności' },
  { id: 'PLATFORM', name: 'PlatformaZakupowa.pl — wyszukiwarka publiczna' },
]
type Cursor = { from: string; to: string; day: string; page: number }
const date = (d: Date) => d.toISOString().slice(0, 10)
const nextDay = (d: string, offset = 1) => date(new Date(new Date(d + 'T00:00:00Z').getTime() + offset * 86400000))
const bkQueries = ['drukarki', 'etykiety', 'czytniki', 'kolektory', 'terminale', 'RFID', 'karty plastikowe', 'sprzęt komputerowy', 'sprzęt informatyczny', 'tablety', 'inwentaryzacja', 'Zebra', 'Honeywell', 'Datalogic', 'Newland', 'Magicard', 'Entrust', 'taśmy', 'identyfikatory']
export async function saveNotice(n: Notice) {
  const contentHash = hash(n)
  const old = await prisma.tender.findUnique({ where: { noticeNumber: n.noticeNumber }, select: { contentHash: true, amendedAt: true, submittingOffersDate: true } })
  const { rawBody, ...metadata } = n
  const data = { ...metadata, rawBody, contentHash, lastSeenAt: new Date(), ...(old?.amendedAt ? { submittingOffersDate: old.submittingOffersDate } : {}) }
  await prisma.tender.upsert({ where: { noticeNumber: n.noticeNumber },
    create: { ...data, score: 0, analysisStatus: 'pending' },
    update: { ...data, ...(old?.contentHash !== contentHash ? { analysisStatus: 'pending', analysisAttempts: 0, nextCheckAt: new Date(), analysisError: null } : {}) },
  })
  return !old
}
function text(v: unknown): string {
  if (Array.isArray(v)) return v.map(text).join('\n')
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>
    return text(o.pol ?? o.pl ?? Object.values(o)[0])
  }
  return v == null ? '' : String(v)
}
export async function bzpPage(day: string, page: number, changes = false) {
  const u = new URL('https://ezamowienia.gov.pl/mo-board/api/v1/notice')
  Object.entries({ NoticeType: changes ? 'NoticeUpdateNotice' : 'ContractNotice', PublicationDateFrom: day, PublicationDateTo: day, pageSize: '100', pageNo: String(page) }).forEach(([k, v]) => u.searchParams.set(k, v))
  const rows = await json<Record<string, unknown>[]>(u.href)
  if (!Array.isArray(rows)) throw new Error('BZP: nieznany format odpowiedzi')
  const notices: Notice[] = rows.filter(r => r.noticeNumber).map(r => ({
    noticeNumber: text(r.noticeNumber), source: 'BZP', orderObject: text(r.orderObject), rawBody: text(r.htmlBody),
    objectId: text(r.objectId), bzpNumber: text(r.bzpNumber), cpvCodes: text(r.cpvCode),
    organizationName: text(r.organizationName), organizationCity: text(r.organizationCity),
    publicationDate: polishDate(r.publicationDate), submittingOffersDate: polishDate(r.submittingOffersDate),
    url: `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${r.objectId}`,
  }))
  return { notices: changes ? notices : notices.filter(candidate), raw: rows.length, done: rows.length < 100 }
}
export async function tedPage(from: string, to: string, page: number) {
  const keywords = ['drukarki etykiet', 'drukarki kart', 'kolektory danych', 'czytniki kodów', 'terminale mobilne', 'etykiety', 'RFID', 'Zebra', 'Honeywell', 'Datalogic', 'Newland', 'Magicard', 'Entrust']
  const query = `((classification-cpv IN (${[...CORE_CPV, ...BROAD_CPV].join(' ')})) OR FT~(${keywords.map(t => `"${t}"`).join(' OR ')})) AND buyer-country=POL AND publication-date>=${from.replaceAll('-', '')} AND publication-date<=${to.replaceAll('-', '')} AND notice-type IN (cn-standard cn-social cn-desg corr)`
  const data = await json<{ notices: Record<string, unknown>[]; totalNoticeCount: number }>('https://api.ted.europa.eu/v3/notices/search', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query, page, limit: 100,
      fields: ['publication-number', 'notice-title', 'buyer-name', 'buyer-city', 'publication-date', 'deadline-receipt-tender-date-lot', 'classification-cpv', 'description-lot'],
    }),
  })
  if (!Array.isArray(data.notices) || !Number.isFinite(data.totalNoticeCount)) throw new Error('TED: nieznany format odpowiedzi')
  return { notices: data.notices.map(n => ({
    noticeNumber: `TED/${n['publication-number']}`, source: 'TED', orderObject: text(n['notice-title']),
    rawBody: text(n['description-lot']), organizationName: text(n['buyer-name']), organizationCity: text(n['buyer-city']),
    cpvCodes: text(n['classification-cpv']), publicationDate: polishDate(n['publication-date']),
    submittingOffersDate: latestDeadline(n['deadline-receipt-tender-date-lot']),
    url: `https://ted.europa.eu/pl/notice/-/detail/${n['publication-number']}`,
  } satisfies Notice)), raw: data.notices.length, done: page * 100 >= data.totalNoticeCount }
}
/** Wyszukiwanie pełnotekstowe BK obejmuje treść, której nie ma w skrócie wyników. */
export async function bkPage(from: string, to: string, queryIndex: number, page: number) {
  const u = new URL(BK + '/api/announcements/search')
  Object.entries({ page: String(page), limit: '50', sort: 'publicationDate', 'status[]': 'PUBLISHED', query: bkQueries[queryIndex],
    'publicationDateRange[from]': from, 'publicationDateRange[to]': to }).forEach(([k, v]) => u.searchParams.set(k, v))
  const r = await json<{ status: string; data: { advertisements: Record<string, unknown>[]; meta: { total: number } } }>(u.href)
  if (r.status !== 'OK' || !Array.isArray(r.data?.advertisements) || !Number.isFinite(r.data?.meta?.total)) throw new Error('BK: nieznany format odpowiedzi')
  return { notices: r.data.advertisements.map(n => ({ noticeNumber: `BK/${n.id}`, source: 'BK',
    orderObject: plain(text(n.title)), rawBody: text(n.content), organizationName: text(n.advertiser_name),
    publicationDate: polishDate(n.publication_date), submittingOffersDate: polishDate(n.submission_deadline),
    url: `${BK}/ogloszenia/${n.id}` } satisfies Notice)), raw: r.data.advertisements.length, done: page * 50 >= r.data.meta.total }
}
export async function bkDetail(id: string) {
  const r = await json<{ status: string; data: { advertisement: Record<string, unknown> } }>(`${BK}/api/announcements/${id}/compact`)
  if (r.status !== 'OK' || !r.data?.advertisement) throw new Error('BK: brak szczegółów')
  return r.data.advertisement
}
export async function syncSource(id: string, until: number) {
  const kind = id.replace(/^RECENT\//, '')
  const recent = id.startsWith('RECENT/')
  const source = await prisma.tenderSource.findUniqueOrThrow({ where: { id } })
  if (!source.enabled) return
  let c = source.cursor as Cursor | null
  if (!c) {
    const from = recent ? date(new Date()) : source.lastSuccessAt ? date(new Date(+source.lastSuccessAt - 7 * 86400000)) : date(new Date(Date.now() - 60 * 86400000))
    c = { from, to: date(new Date()), day: ['BK', 'PLATFORM'].includes(kind) ? '0' : date(new Date()), page: 1 }
  }
  if (recent && c.to < date(new Date()) && (source.stats as { complete?: boolean } | null)?.complete) c = { from: date(new Date()), to: date(new Date()), day: ['BK', 'PLATFORM'].includes(kind) ? '0' : date(new Date()), page: 1 }
  let raw = 0, saved = 0, pages = 0
  await prisma.tenderSource.update({ where: { id }, data: { lastAttemptAt: new Date(), error: null, cursor: c } })
  try {
    while (Date.now() < until) {
      const queryIndex = ['BK', 'PLATFORM'].includes(kind) ? Number(c.day) || 0 : 0
      const result = kind.startsWith('BZP') ? await bzpPage(c.day, c.page, kind === 'BZP_CHANGE') : kind === 'TED' ? await tedPage(c.from, c.to, c.page) : kind === 'BK' ? await bkPage(c.from, c.to, queryIndex, c.page) : await platformPage(queryIndex, c.page)
      for (const n of result.notices) {
        if (kind === 'BZP_CHANGE') await applyBzpChange(n)
        else await saveNotice(n)
      }
      raw += result.raw; saved += result.notices.length; pages++
      let complete = false
      if (!result.done) c.page++
      else if (kind.startsWith('BZP') && c.day > c.from) { c.day = nextDay(c.day, -1); c.page = 1 }
      else if (['BK', 'PLATFORM'].includes(kind) && queryIndex < (kind === 'BK' ? bkQueries : platformQueries).length - 1) { c.day = String(queryIndex + 1); c.page = 1 }
      else complete = true
      await prisma.tenderSource.update({ where: { id }, data: {
        // Sukces odnosi się do końca przeskanowanego okna, nie do czasu zakończenia backfillu.
        cursor: complete ? { from: recent ? date(new Date()) : nextDay(c.to, -7), to: date(new Date()), day: ['BK', 'PLATFORM'].includes(kind) ? '0' : date(new Date()), page: 1 } : c,
        ...(complete ? { lastSuccessAt: new Date(Math.min(Date.now(), +new Date(c.to + 'T23:59:59Z'))) } : {}),
        stats: { raw, saved, pages, from: c.from, to: c.to, complete }, error: null,
      } })
      if (complete) break
    }
  } catch (e) {
    await prisma.tenderSource.update({ where: { id }, data: { error: e instanceof Error ? e.message : String(e), stats: { raw, saved, pages, complete: false } } })
  }
}
/** Publiczna lista konkretnego zamawiającego / RSS: jawnie ograniczony zakres, bez udawania skanu całego portalu. */
export async function syncPlatform(id: string) {
  const source = await prisma.tenderSource.findUniqueOrThrow({ where: { id } })
  if (!source.enabled || !source.url) return
  await prisma.tenderSource.update({ where: { id }, data: { lastAttemptAt: new Date(), error: null } })
  try {
    const r = await download(source.url, 6 * 1024 * 1024)
    const html = r.buffer.toString('utf8')
    const links = Array.from(html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi))
    const targets = new Map<string, string>()
    for (const m of links) {
      const title = plain(m[2]); const u = new URL(m[1].replaceAll('&amp;', '&'), r.url)
      if (u.origin === new URL(r.url).origin && /(?:\/transakcja\/\d+|\/demand\/notice\/public\/\d+\/details|\/ogloszenia\/\d+|\.pdf(?:\?|$))/i.test(u.href)) targets.set(u.href, title)
    }
    // RSS i Atom udostępniane przez wybrane strony zamawiających.
    for (const item of Array.from(html.matchAll(/<(?:item|entry)\b[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi))) {
      const link = item[1].match(/<link[^>]*href=["']([^"']+)/i)?.[1] || item[1].match(/<link[^>]*>([^<]+)/i)?.[1]
      const title = plain(item[1].match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '')
      if (link) targets.set(new URL(link, r.url).href, title)
    }
    if (!targets.size) throw new Error('Nie znaleziono ogłoszeń w HTML/RSS. Lista może wymagać JavaScript; dodaj bezpośredni link do postępowania.')
    // Kolejka kandydatów obejmuje wszystkie pozycje listy, niezależnie od ogólnego tytułu.
    for (const [url, title] of Array.from(targets)) {
      await saveNotice({ noticeNumber: `URL/${hash({ noticeNumber: '', source: '', orderObject: url, rawBody: '' }).slice(0, 32)}`, source: source.name,
        orderObject: title || url, rawBody: '', url })
    }
    await prisma.tenderSource.update({ where: { id }, data: { lastSuccessAt: new Date(), stats: { saved: targets.size, complete: true, scope: 'Tylko pozycje widoczne na wskazanej liście HTML/RSS' } } })
  } catch (e) { await prisma.tenderSource.update({ where: { id }, data: { error: e instanceof Error ? e.message : String(e) } }) }
}

export function bzpAmendment(body: string) {
  const text = plain(body)
  const number = text.match(/Numer zmienianego ogłoszenia w BZP:\s*(\d{4}\/BZP \d+)/)?.[1]
  const deadline = text.match(/8\.1\.?\s*Termin składania ofert[\s\S]*?Po zmianie:\s*(\d{4}-\d\d-\d\d[ T]\d\d:\d\d)/)?.[1]
  return { number, deadline: deadline ? polishDate(deadline) : null }
}
async function applyBzpChange(n: Notice) {
  const change = bzpAmendment(n.rawBody)
  const original = change.number ? await prisma.tender.findFirst({ where: { bzpNumber: change.number }, select: { id: true, amendedAt: true, amendments: true } }) : null
  if (!original) { if (candidate(n)) await saveNotice({ ...n, submittingOffersDate: change.deadline || n.submittingOffersDate }); return }
  if (original.amendedAt && n.publicationDate && original.amendedAt >= n.publicationDate) return
  const previous = (original.amendments || []) as { number: string; text: string; url?: string }[]
  await prisma.tender.update({ where: { id: original.id }, data: {
    amendedAt: n.publicationDate || new Date(), amendments: [...previous.filter(x => x.number !== n.noticeNumber), { number: n.noticeNumber, text: plain(n.rawBody), url: n.url }],
    ...(change.deadline ? { submittingOffersDate: change.deadline } : {}),
    analysisStatus: 'pending', nextCheckAt: new Date(), analysisAttempts: 0,
  } })
}

const platformQueries = ['etykiet', 'czytnik', 'kolektor', 'terminal', 'drukark', 'RFID', 'Zebra', 'Honeywell', 'Datalogic', 'Newland', 'Magicard', 'Entrust', 'karty plastikowe', 'taśmy termotransferowe']
export async function platformPage(queryIndex: number, page: number) {
  const url = new URL('https://platformazakupowa.pl/all')
  url.searchParams.set('query', platformQueries[queryIndex]); url.searchParams.set('page', String(page)); url.searchParams.set('limit', '30')
  const r = await download(url.href, 8 * 1024 * 1024)
  const html = r.buffer.toString('utf8')
  if (!html.includes('auction-row') && !/Nie znaleziono|Brak postępowań|Brak wyników|Nie ma postępowań/i.test(html)) throw new Error('PlatformaZakupowa: nie rozpoznano listy wyników')
  const notices: Notice[] = []
  for (const chunk of html.split(/class="col-md-12 auction-row/).slice(1)) {
    const id = chunk.match(/\/transakcja\/(\d+)/)?.[1]
    const title = chunk.match(/<a[^>]*class="[^"]*auction-title[^"]*"[^>]*>([\s\S]*?)<\/a>/)?.[1]
    const date = chunk.match(/title="(\d\d)-(\d\d)-(\d{4}) (\d\d:\d\d:\d\d) Europe\/Warsaw"/)
    if (!id || !title) continue
    notices.push({ noticeNumber: `PLATFORM/${id}`, source: 'PlatformaZakupowa', orderObject: plain(title), rawBody: '',
      url: `https://platformazakupowa.pl/transakcja/${id}`,
      submittingOffersDate: date ? polishDate(`${date[3]}-${date[2]}-${date[1]} ${date[4]}`) : null })
  }
  const next = Array.from(html.matchAll(/<a[^>]*href="([^"]+)"/g)).some(m => {
    try { return Number(new URL(decodeText(m[1]), r.url).searchParams.get('page')) === page + 1 } catch { return false }
  })
  return { notices, raw: notices.length, done: !next }
}
