/**
 * Klient GA4 Data API (REST + service account JWT podpisany przez `jose`).
 * Bez ciężkiego @google-analytics/data (gRPC) — czysty fetch, działa na Vercel serverless.
 *
 * Wymagane env (service account z dostępem Viewer do usługi GA4):
 *   GA_PROPERTY_ID       — numeryczny ID usługi GA4 (np. 403123456)
 *   GA_SA_CLIENT_EMAIL   — client_email z klucza JSON
 *   GA_SA_PRIVATE_KEY    — private_key z klucza JSON (z literalnymi \n)
 */
import { SignJWT, importPKCS8 } from 'jose'

const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'

export function gaConfigured(): boolean {
  return Boolean(process.env.GA_PROPERTY_ID && process.env.GA_SA_CLIENT_EMAIL && process.env.GA_SA_PRIVATE_KEY)
}

// --- Access token (cache per scope, w pamięci ciepłej instancji) ----------
const tokenCache = new Map<string, { token: string; exp: number }>()

/** Token service accountu dla dowolnego scope Google (używa też gsc.ts). */
export async function getGoogleAccessToken(scope: string = SCOPE): Promise<string> {
  const hit = tokenCache.get(scope)
  if (hit && hit.exp > Date.now() + 60_000) return hit.token

  const clientEmail = process.env.GA_SA_CLIENT_EMAIL!
  const privateKey = (process.env.GA_SA_PRIVATE_KEY || '').replace(/\\n/g, '\n')
  const key = await importPKCS8(privateKey, 'RS256')

  const assertion = await new SignJWT({ scope })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuer(clientEmail)
    .setSubject(clientEmail)
    .setAudience(TOKEN_URL)
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key)

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  })
  if (!res.ok) throw new Error(`GA token error ${res.status}: ${await res.text()}`)
  const json = (await res.json()) as { access_token: string; expires_in: number }
  tokenCache.set(scope, { token: json.access_token, exp: Date.now() + json.expires_in * 1000 })
  return json.access_token
}

const getAccessToken = () => getGoogleAccessToken(SCOPE)

// --- Low-level report calls ------------------------------------------------
async function callApi(method: 'runReport' | 'runRealtimeReport', body: unknown): Promise<GaResponse> {
  const token = await getAccessToken()
  const propertyId = process.env.GA_PROPERTY_ID!
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:${method}`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`GA ${method} ${res.status}: ${await res.text()}`)
  return res.json() as Promise<GaResponse>
}

interface GaResponse {
  rows?: { dimensionValues?: { value: string }[]; metricValues?: { value: string }[] }[]
  totals?: { metricValues?: { value: string }[] }[]
}

const n = (v?: string) => (v ? Number(v) || 0 : 0)

// --- Typy panelu -----------------------------------------------------------
export interface GaMetrics {
  activeUsers: number
  newUsers: number
  sessions: number
  screenPageViews: number
  engagementRate: number // 0..1
  averageSessionDuration: number // sekundy
  bounceRate: number // 0..1
  eventCount: number
  totalRevenue: number
}

export interface GaRow {
  label: string
  sub?: string
  value: number
  value2?: number
}

export interface GaDashboard {
  rangeDays: number
  current: GaMetrics
  previous: GaMetrics
  timeseries: { date: string; users: number; sessions: number }[]
  topPages: GaRow[]
  channels: GaRow[]
  sources: GaRow[]
  countries: GaRow[]
  devices: GaRow[]
  landingPages: GaRow[]
  events: GaRow[]
  realtimeActiveUsers: number
}

export interface GaDayDetail {
  date: string
  prevDate: string // ten sam dzień tygodnia tydzień wcześniej
  summary: GaMetrics
  previous: GaMetrics
  hourly: { hour: number; sessions: number; users: number }[]
  /** Skąd przyszła sesja → na co weszła → jak się zachowała */
  sourceLanding: {
    source: string
    landing: string
    sessions: number
    pagesPerSession: number
    avgDuration: number // sekundy
    bounceRate: number // 0..1
  }[]
  pages: { path: string; views: number; users: number; avgTime: number }[]
  events: GaRow[]
  newVsReturning: { label: string; users: number; sessions: number }[]
}

const SUMMARY_METRICS = [
  'activeUsers', 'newUsers', 'sessions', 'screenPageViews',
  'engagementRate', 'averageSessionDuration', 'bounceRate', 'eventCount', 'totalRevenue',
] as const

function parseMetrics(values?: { value: string }[]): GaMetrics {
  const v = values || []
  return {
    activeUsers: n(v[0]?.value),
    newUsers: n(v[1]?.value),
    sessions: n(v[2]?.value),
    screenPageViews: n(v[3]?.value),
    engagementRate: n(v[4]?.value),
    averageSessionDuration: n(v[5]?.value),
    bounceRate: n(v[6]?.value),
    eventCount: n(v[7]?.value),
    totalRevenue: n(v[8]?.value),
  }
}

function rows(res: GaResponse, mk: (r: NonNullable<GaResponse['rows']>[number]) => GaRow): GaRow[] {
  return (res.rows || []).map(mk)
}

/** Ciągnie komplet danych panelu w jednym przebiegu (raporty równolegle). */
export async function gaDashboard(rangeDays = 28): Promise<GaDashboard> {
  const cur = { startDate: `${rangeDays}daysAgo`, endDate: 'yesterday' }
  const prev = { startDate: `${rangeDays * 2}daysAgo`, endDate: `${rangeDays + 1}daysAgo` }
  const metrics = SUMMARY_METRICS.map((name) => ({ name }))

  const [summary, ts, topPages, channels, sources, countries, devices, landing, events, realtime] =
    await Promise.all([
      callApi('runReport', { dateRanges: [cur, prev], metrics }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'date' }], metrics: [{ name: 'activeUsers' }, { name: 'sessions' }], orderBys: [{ dimension: { dimensionName: 'date' } }] }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }], metrics: [{ name: 'screenPageViews' }], orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 15 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 10 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionSourceMedium' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 12 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'country' }], metrics: [{ name: 'activeUsers' }], orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }], limit: 10 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'deviceCategory' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }] }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'landingPagePlusQueryString' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 12 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 12 }),
      callApi('runRealtimeReport', { metrics: [{ name: 'activeUsers' }] }).catch(() => ({ rows: [] }) as GaResponse),
    ])

  // summary: wiersz per dateRange (current=0, previous=1)
  const sRows = summary.rows || []
  const curRow = sRows.find((r) => r.dimensionValues?.[0]?.value === 'date_range_0') || sRows[0]
  const prevRow = sRows.find((r) => r.dimensionValues?.[0]?.value === 'date_range_1') || sRows[1]

  return {
    rangeDays,
    current: parseMetrics(curRow?.metricValues),
    previous: parseMetrics(prevRow?.metricValues),
    timeseries: (ts.rows || []).map((r) => ({
      date: r.dimensionValues?.[0]?.value || '',
      users: n(r.metricValues?.[0]?.value),
      sessions: n(r.metricValues?.[1]?.value),
    })),
    topPages: rows(topPages, (r) => ({ label: r.dimensionValues?.[0]?.value || '/', sub: r.dimensionValues?.[1]?.value, value: n(r.metricValues?.[0]?.value) })),
    channels: rows(channels, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value), value2: n(r.metricValues?.[1]?.value) })),
    sources: rows(sources, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value) })),
    countries: rows(countries, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value) })),
    devices: rows(devices, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value) })),
    landingPages: rows(landing, (r) => ({ label: r.dimensionValues?.[0]?.value || '/', value: n(r.metricValues?.[0]?.value) })),
    events: rows(events, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value) })),
    realtimeActiveUsers: n(realtime.rows?.[0]?.metricValues?.[0]?.value ?? realtime.totals?.[0]?.metricValues?.[0]?.value),
  }
}

// --- Konwersje / leady -------------------------------------------------------

/** Zdarzenia kontaktowe = lead (zgodnie z ga-events.ts na froncie). */
export const LEAD_EVENTS = ['klik_tel', 'klik_mail', 'wyslanie_formularza', 'generate_lead'] as const
const FUNNEL_EVENTS = ['view_item', 'add_to_cart', 'begin_checkout', 'purchase'] as const

const inList = (field: string, values: readonly string[]) => ({
  filter: { fieldName: field, inListFilter: { values: [...values] } },
})

export interface GaConversions {
  rangeDays: number
  /** Zdarzenia leadowe: nazwa → liczba teraz / poprzedni okres */
  leadEvents: { name: string; count: number; prevCount: number }[]
  leadsTotal: number
  leadsPrevTotal: number
  funnel: { name: string; count: number }[]
  leadsBySource: { source: string; sessions: number; leads: number }[]
  leadsByPage: { page: string; leads: number }[]
  campaigns: { campaign: string; sessions: number; leads: number; bounceRate: number; avgDuration: number }[]
  products: { name: string; viewed: number; addedToCart: number; purchased: number; revenue: number }[]
  /** Zdrowie tagowania: sesje z landingiem "(not set)" vs wszystkie */
  notSetSessions: number
  totalSessions: number
}

/** Konwersje, leady, kampanie i produkty za ostatnie `rangeDays` dni. */
export async function gaConversions(rangeDays = 28): Promise<GaConversions> {
  const cur = { startDate: `${rangeDays}daysAgo`, endDate: 'yesterday' }
  const prev = { startDate: `${rangeDays * 2}daysAgo`, endDate: `${rangeDays + 1}daysAgo` }
  const allEvents = [...LEAD_EVENTS, ...FUNNEL_EVENTS]

  const [events, srcSessions, srcLeads, pageLeads, campSessions, campLeads, products, notSet, totals] =
    await Promise.all([
      callApi('runReport', { dateRanges: [cur, prev], dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], dimensionFilter: inList('eventName', allEvents) }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionSourceMedium' }], metrics: [{ name: 'sessions' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 20 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionSourceMedium' }], metrics: [{ name: 'eventCount' }], dimensionFilter: inList('eventName', LEAD_EVENTS), orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 50 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'pagePath' }], metrics: [{ name: 'eventCount' }], dimensionFilter: inList('eventName', LEAD_EVENTS), orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 15 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionCampaignName' }], metrics: [{ name: 'sessions' }, { name: 'bounceRate' }, { name: 'averageSessionDuration' }], orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 20 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'sessionCampaignName' }], metrics: [{ name: 'eventCount' }], dimensionFilter: inList('eventName', LEAD_EVENTS), limit: 50 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'itemName' }], metrics: [{ name: 'itemsViewed' }, { name: 'itemsAddedToCart' }, { name: 'itemsPurchased' }, { name: 'itemRevenue' }], orderBys: [{ metric: { metricName: 'itemsViewed' }, desc: true }], limit: 15 }),
      callApi('runReport', { dateRanges: [cur], dimensions: [{ name: 'landingPagePlusQueryString' }], metrics: [{ name: 'sessions' }], dimensionFilter: { filter: { fieldName: 'landingPagePlusQueryString', stringFilter: { value: '(not set)' } } } }),
      callApi('runReport', { dateRanges: [cur], metrics: [{ name: 'sessions' }] }),
    ])

  // events: wiersze [eventName, dateRange] — rozdziel bieżący i poprzedni okres
  const evCur = new Map<string, number>()
  const evPrev = new Map<string, number>()
  for (const r of events.rows || []) {
    const name = r.dimensionValues?.[0]?.value || ''
    const range = r.dimensionValues?.[1]?.value
    ;(range === 'date_range_1' ? evPrev : evCur).set(name, n(r.metricValues?.[0]?.value))
  }
  const leadEvents = LEAD_EVENTS.map((name) => ({ name, count: evCur.get(name) || 0, prevCount: evPrev.get(name) || 0 }))

  const leadsBySrc = new Map((srcLeads.rows || []).map((r) => [r.dimensionValues?.[0]?.value || '', n(r.metricValues?.[0]?.value)]))
  const leadsByCamp = new Map((campLeads.rows || []).map((r) => [r.dimensionValues?.[0]?.value || '', n(r.metricValues?.[0]?.value)]))
  const campLabel = (c: string) => (c === '(not set)' || c === '(direct)' ? '(bez kampanii)' : c)

  return {
    rangeDays,
    leadEvents,
    leadsTotal: leadEvents.reduce((s, e) => s + e.count, 0),
    leadsPrevTotal: leadEvents.reduce((s, e) => s + e.prevCount, 0),
    funnel: FUNNEL_EVENTS.map((name) => ({ name, count: evCur.get(name) || 0 })),
    leadsBySource: (srcSessions.rows || []).map((r) => {
      const source = r.dimensionValues?.[0]?.value || '(brak)'
      return { source, sessions: n(r.metricValues?.[0]?.value), leads: leadsBySrc.get(source) || 0 }
    }),
    leadsByPage: (pageLeads.rows || []).map((r) => ({ page: r.dimensionValues?.[0]?.value || '/', leads: n(r.metricValues?.[0]?.value) })),
    campaigns: (campSessions.rows || []).map((r) => {
      const campaign = r.dimensionValues?.[0]?.value || '(brak)'
      return {
        campaign: campLabel(campaign),
        sessions: n(r.metricValues?.[0]?.value),
        leads: leadsByCamp.get(campaign) || 0,
        bounceRate: n(r.metricValues?.[1]?.value),
        avgDuration: n(r.metricValues?.[2]?.value),
      }
    }),
    products: (products.rows || []).map((r) => ({
      name: r.dimensionValues?.[0]?.value || '(brak)',
      viewed: n(r.metricValues?.[0]?.value),
      addedToCart: n(r.metricValues?.[1]?.value),
      purchased: n(r.metricValues?.[2]?.value),
      revenue: n(r.metricValues?.[3]?.value),
    })),
    notSetSessions: n(notSet.rows?.[0]?.metricValues?.[0]?.value),
    totalSessions: n(totals.rows?.[0]?.metricValues?.[0]?.value),
  }
}

/** Przesuwa datę YYYY-MM-DD o `days` dni. */
export function shiftDate(date: string, days: number): string {
  const d = new Date(`${date}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

/** Dzisiejsza data w strefie usługi GA4 (Europe/Warsaw), format YYYY-MM-DD. */
export function gaToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(new Date())
}

/** Szczegóły jednego dnia: skąd przyszli, co robili, jak szybko wyszli. */
export async function gaDayDetail(date: string): Promise<GaDayDetail> {
  const prevDate = shiftDate(date, -7)
  const day = { startDate: date, endDate: date }
  const metrics = SUMMARY_METRICS.map((name) => ({ name }))

  const [summary, hourly, srcLanding, pages, events, nvr] = await Promise.all([
    callApi('runReport', { dateRanges: [day, { startDate: prevDate, endDate: prevDate }], metrics }),
    callApi('runReport', { dateRanges: [day], dimensions: [{ name: 'hour' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }], orderBys: [{ dimension: { dimensionName: 'hour' } }] }),
    callApi('runReport', {
      dateRanges: [day],
      dimensions: [{ name: 'sessionSourceMedium' }, { name: 'landingPagePlusQueryString' }],
      metrics: [{ name: 'sessions' }, { name: 'screenPageViewsPerSession' }, { name: 'averageSessionDuration' }, { name: 'bounceRate' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 50,
    }),
    callApi('runReport', {
      dateRanges: [day],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'userEngagementDuration' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 25,
    }),
    callApi('runReport', { dateRanges: [day], dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 30 }),
    callApi('runReport', { dateRanges: [day], dimensions: [{ name: 'newVsReturning' }], metrics: [{ name: 'activeUsers' }, { name: 'sessions' }] }),
  ])

  const sRows = summary.rows || []
  const curRow = sRows.find((r) => r.dimensionValues?.[0]?.value === 'date_range_0') || sRows[0]
  const prevRow = sRows.find((r) => r.dimensionValues?.[0]?.value === 'date_range_1') || sRows[1]

  // pełne 24h, nawet gdy GA pomija godziny bez ruchu
  const byHour = new Map((hourly.rows || []).map((r) => [n(r.dimensionValues?.[0]?.value), r]))
  const hours = Array.from({ length: 24 }, (_, h) => {
    const r = byHour.get(h)
    return { hour: h, sessions: n(r?.metricValues?.[0]?.value), users: n(r?.metricValues?.[1]?.value) }
  })

  const nvrLabel: Record<string, string> = { new: 'Nowi', returning: 'Powracający' }

  return {
    date,
    prevDate,
    summary: parseMetrics(curRow?.metricValues),
    previous: parseMetrics(prevRow?.metricValues),
    hourly: hours,
    sourceLanding: (srcLanding.rows || []).map((r) => ({
      source: r.dimensionValues?.[0]?.value || '(brak)',
      landing: r.dimensionValues?.[1]?.value || '/',
      sessions: n(r.metricValues?.[0]?.value),
      pagesPerSession: n(r.metricValues?.[1]?.value),
      avgDuration: n(r.metricValues?.[2]?.value),
      bounceRate: n(r.metricValues?.[3]?.value),
    })),
    pages: (pages.rows || []).map((r) => {
      const views = n(r.metricValues?.[0]?.value)
      return {
        path: r.dimensionValues?.[0]?.value || '/',
        views,
        users: n(r.metricValues?.[1]?.value),
        avgTime: views ? n(r.metricValues?.[2]?.value) / views : 0,
      }
    }),
    events: rows(events, (r) => ({ label: r.dimensionValues?.[0]?.value || '(brak)', value: n(r.metricValues?.[0]?.value) })),
    newVsReturning: (nvr.rows || [])
      .filter((r) => r.dimensionValues?.[0]?.value)
      .map((r) => ({
        label: nvrLabel[r.dimensionValues?.[0]?.value || ''] || r.dimensionValues?.[0]?.value || '(nieznani)',
        users: n(r.metricValues?.[0]?.value),
        sessions: n(r.metricValues?.[1]?.value),
      })),
  }
}
