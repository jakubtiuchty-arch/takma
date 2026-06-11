/**
 * Klient Google Search Console API (ten sam service account co GA4).
 * Wymaga dodania client_email service accountu jako użytkownika w GSC
 * (Ustawienia → Użytkownicy i uprawnienia → Dodaj użytkownika, wystarczy
 * „Pełny ograniczony"). Bez tego `gscResolveSite()` zwraca null.
 */
import { gaConfigured, getGoogleAccessToken, shiftDate } from '@/lib/ga'

const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const API = 'https://www.googleapis.com/webmasters/v3'

export function gscConfigured(): boolean {
  return gaConfigured() // te same credentiale
}

async function gscFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await getGoogleAccessToken(GSC_SCOPE)
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...init?.headers },
  })
  if (!res.ok) throw new Error(`GSC ${path} ${res.status}: ${await res.text()}`)
  return res.json() as Promise<T>
}

/** Zwraca siteUrl usługi takma w GSC (env GSC_SITE_URL ma pierwszeństwo) albo null, gdy SA nie ma dostępu. */
export async function gscResolveSite(): Promise<string | null> {
  if (process.env.GSC_SITE_URL) return process.env.GSC_SITE_URL
  const json = await gscFetch<{ siteEntry?: { siteUrl: string; permissionLevel: string }[] }>('/sites')
  const sites = (json.siteEntry || []).filter((s) => s.permissionLevel !== 'siteUnverifiedUser')
  const takma = sites.find((s) => s.siteUrl.includes('takma'))
  return takma?.siteUrl ?? sites[0]?.siteUrl ?? null
}

export interface GscRow {
  keys: string[]
  clicks: number
  impressions: number
  ctr: number
  position: number
}

async function searchAnalytics(siteUrl: string, body: Record<string, unknown>): Promise<GscRow[]> {
  const json = await gscFetch<{ rows?: GscRow[] }>(`/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return json.rows || []
}

export interface GscTotals {
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export interface GscQueryRow {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
  prevClicks: number | null
  prevPosition: number | null
}

export interface GscDashboard {
  siteUrl: string
  rangeDays: number
  /** Ostatni dzień z danymi (GSC ma ~2 dni opóźnienia) */
  endDate: string
  startDate: string
  totals: GscTotals
  prevTotals: GscTotals
  queries: GscQueryRow[]
  pages: GscRow[]
}

const totalsOf = (rows: GscRow[]): GscTotals => ({
  clicks: rows[0]?.clicks || 0,
  impressions: rows[0]?.impressions || 0,
  ctr: rows[0]?.ctr || 0,
  position: rows[0]?.position || 0,
})

/** Frazy + strony z GSC za ostatnie `rangeDays` dni (vs poprzedni okres). */
export async function gscDashboard(siteUrl: string, rangeDays = 28): Promise<GscDashboard> {
  // GSC publikuje dane z ~2-dniowym opóźnieniem
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(new Date())
  const endDate = shiftDate(today, -2)
  const startDate = shiftDate(endDate, -(rangeDays - 1))
  const prevEnd = shiftDate(startDate, -1)
  const prevStart = shiftDate(prevEnd, -(rangeDays - 1))

  const [totals, prevTotals, queries, prevQueries, pages] = await Promise.all([
    searchAnalytics(siteUrl, { startDate, endDate }),
    searchAnalytics(siteUrl, { startDate: prevStart, endDate: prevEnd }),
    searchAnalytics(siteUrl, { startDate, endDate, dimensions: ['query'], rowLimit: 50 }),
    searchAnalytics(siteUrl, { startDate: prevStart, endDate: prevEnd, dimensions: ['query'], rowLimit: 250 }),
    searchAnalytics(siteUrl, { startDate, endDate, dimensions: ['page'], rowLimit: 25 }),
  ])

  const prevByQuery = new Map(prevQueries.map((r) => [r.keys[0], r]))

  return {
    siteUrl,
    rangeDays,
    startDate,
    endDate,
    totals: totalsOf(totals),
    prevTotals: totalsOf(prevTotals),
    queries: queries.map((r) => {
      const prev = prevByQuery.get(r.keys[0])
      return {
        query: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
        prevClicks: prev ? prev.clicks : null,
        prevPosition: prev ? prev.position : null,
      }
    }),
    pages,
  }
}
