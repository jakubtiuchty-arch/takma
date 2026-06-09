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

// --- Access token (cache w pamięci ciepłej instancji) ---------------------
let cachedToken: { token: string; exp: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.exp > Date.now() + 60_000) return cachedToken.token

  const clientEmail = process.env.GA_SA_CLIENT_EMAIL!
  const privateKey = (process.env.GA_SA_PRIVATE_KEY || '').replace(/\\n/g, '\n')
  const key = await importPKCS8(privateKey, 'RS256')

  const assertion = await new SignJWT({ scope: SCOPE })
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
  cachedToken = { token: json.access_token, exp: Date.now() + json.expires_in * 1000 }
  return json.access_token
}

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
