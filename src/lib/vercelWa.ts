/**
 * Klient Vercel Web Analytics API (oficjalne /v1/query/web-analytics/*).
 * Zasila /admin/strony — zbiorczy podgląd ruchu wszystkich stron w teamie.
 *
 * Env:
 *   VERCEL_API_TOKEN — personal access token (ten sam co CLI)
 *   VERCEL_TEAM_ID   — team_...
 */

export interface WaSite {
  id: string
  name: string
  domain: string
  projectId: string
}

/** Strony objęte kokpitem (kolejność = kolejność kart). */
export const WA_SITES: WaSite[] = [
  { id: 'takma', name: 'TAKMA', domain: 'takma.com.pl', projectId: 'prj_UImoJveZeMg86ctGrnwe36d6PwDa' },
  { id: 'serwiszebra', name: 'Serwis-Zebry', domain: 'serwis-zebry.pl', projectId: 'prj_ygqnmRiV0KhGgpnqaH38M5oXJxjb' },
  { id: 'ezdrp24', name: 'EZDRP24', domain: 'ezdrp24.com.pl', projectId: 'prj_7mXelL0P1IAcG8Q8EoixsBRaJeHj' },
  { id: 'zadaszenia', name: 'Zadaszenia Trzebnica', domain: 'zadaszeniatrzebnica.pl', projectId: 'prj_I8XPStsJl4uQDIkmTMrmdhO0avzc' },
  { id: 'rejestratory', name: 'Rejestratory.info', domain: 'rejestratory.info', projectId: 'prj_LmUHWp7Pf7d4qVJYKVm4vWIVqEUI' },
]

export function waConfigured(): boolean {
  return Boolean(process.env.VERCEL_API_TOKEN && process.env.VERCEL_TEAM_ID)
}

interface WaRow {
  timestamp?: string
  requestPath?: string
  referrerHostname?: string
  country?: string
  visitors: number
  pageviews: number
}

async function waGet(path: 'aggregate' | 'count', projectId: string, params: Record<string, string>): Promise<WaRow[] | WaRow> {
  const qs = new URLSearchParams({
    teamId: process.env.VERCEL_TEAM_ID!,
    projectId,
    ...params,
  })
  const res = await fetch(`https://api.vercel.com/v1/query/web-analytics/visits/${path}?${qs}`, {
    headers: { authorization: `Bearer ${process.env.VERCEL_API_TOKEN}` },
    // dane agregowane — krótki cache łagodzi rate limit przy odświeżaniu
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`Vercel WA ${res.status}: ${await res.text()}`)
  const json = (await res.json()) as { data: WaRow[] | WaRow }
  return json.data
}

const isoDay = (d: Date) => d.toISOString().slice(0, 10)

export interface SiteStats {
  site: WaSite
  /** Odwiedzający w bieżącej + poprzedniej godzinie (przybliżenie „na żywo") */
  lastHourVisitors: number
  today: { visitors: number; pageviews: number }
  totals30d: { visitors: number; pageviews: number }
  /** 14 dni, po dniu — pod sparkline */
  trend: { date: string; visitors: number; pageviews: number }[]
  topPages: { label: string; visitors: number }[]
  topReferrers: { label: string; visitors: number }[]
  error?: string
}

/** Komplet statystyk jednej strony (5 zapytań równolegle). */
export async function siteStats(site: WaSite): Promise<SiteStats> {
  const now = new Date()
  const today = isoDay(now)
  const d14 = new Date(now); d14.setDate(d14.getDate() - 13)
  const d30 = new Date(now); d30.setDate(d30.getDate() - 29)
  const h2 = new Date(now); h2.setHours(h2.getHours() - 1, 0, 0, 0)

  try {
    const [hourly, todayCount, m30, trend, pages, refs] = await Promise.all([
      waGet('aggregate', site.projectId, { since: h2.toISOString(), until: now.toISOString(), by: 'hour' }) as Promise<WaRow[]>,
      waGet('count', site.projectId, { since: today, until: today }) as Promise<WaRow>,
      waGet('count', site.projectId, { since: isoDay(d30), until: today }) as Promise<WaRow>,
      waGet('aggregate', site.projectId, { since: isoDay(d14), until: today, by: 'day', limit: '14' }) as Promise<WaRow[]>,
      waGet('aggregate', site.projectId, { since: isoDay(d14), until: today, by: 'requestPath', limit: '6' }) as Promise<WaRow[]>,
      waGet('aggregate', site.projectId, { since: isoDay(d14), until: today, by: 'referrerHostname', limit: '6' }) as Promise<WaRow[]>,
    ])

    return {
      site,
      lastHourVisitors: hourly.reduce((a, r) => a + r.visitors, 0),
      today: { visitors: todayCount.visitors, pageviews: todayCount.pageviews },
      totals30d: { visitors: m30.visitors, pageviews: m30.pageviews },
      trend: trend.map((r) => ({ date: (r.timestamp || '').slice(0, 10), visitors: r.visitors, pageviews: r.pageviews })),
      topPages: pages.map((r) => ({ label: r.requestPath || '(inne)', visitors: r.visitors })),
      topReferrers: refs
        .map((r) => ({ label: r.referrerHostname || 'wejścia bezpośrednie', visitors: r.visitors }))
        .filter((r) => r.label !== site.domain && r.label !== `www.${site.domain}`),
    }
  } catch (e) {
    return {
      site,
      lastHourVisitors: 0,
      today: { visitors: 0, pageviews: 0 },
      totals30d: { visitors: 0, pageviews: 0 },
      trend: [],
      topPages: [],
      topReferrers: [],
      error: (e as Error).message,
    }
  }
}

/** Same liczniki „na żywo" (ostatnie ~2 h) dla wszystkich stron — pod polling. */
export async function liveCounts(): Promise<Record<string, number>> {
  const now = new Date()
  const h2 = new Date(now); h2.setHours(h2.getHours() - 1, 0, 0, 0)
  const entries = await Promise.all(
    WA_SITES.map(async (s) => {
      try {
        const rows = (await waGet('aggregate', s.projectId, { since: h2.toISOString(), until: now.toISOString(), by: 'hour' })) as WaRow[]
        return [s.id, rows.reduce((a, r) => a + r.visitors, 0)] as const
      } catch {
        return [s.id, -1] as const
      }
    }),
  )
  return Object.fromEntries(entries)
}
