/**
 * Klient Google Ads API (REST `googleAds:search` + GAQL, OAuth refresh token).
 * Bez SDK google-ads-api (gRPC/protobuf) — czysty fetch, działa na Vercel serverless.
 *
 * Auth inna niż GA4: Ads API nie przyjmuje service accountu bez Workspace
 * domain-wide delegation, więc używamy klasycznego OAuth2 refresh tokena
 * (jednorazowa zgoda przez scripts/google-ads-refresh-token.mjs).
 *
 * Wymagane env:
 *   GOOGLE_ADS_DEVELOPER_TOKEN   — z Centrum API konta MCC
 *   GOOGLE_ADS_CLIENT_ID         — OAuth client (Desktop app) z Google Cloud
 *   GOOGLE_ADS_CLIENT_SECRET
 *   GOOGLE_ADS_REFRESH_TOKEN     — ze skryptu scripts/google-ads-refresh-token.mjs
 *   GOOGLE_ADS_CUSTOMER_ID       — konto reklamowe, np. 3421931664 (bez myślników)
 *   GOOGLE_ADS_LOGIN_CUSTOMER_ID — ID konta MCC (bez myślników)
 * Opcjonalnie:
 *   GOOGLE_ADS_API_VERSION       — domyślnie v21
 */

const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const API_VERSION = process.env.GOOGLE_ADS_API_VERSION || 'v21'

export function adsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_ADS_DEVELOPER_TOKEN &&
      process.env.GOOGLE_ADS_CLIENT_ID &&
      process.env.GOOGLE_ADS_CLIENT_SECRET &&
      process.env.GOOGLE_ADS_REFRESH_TOKEN &&
      process.env.GOOGLE_ADS_CUSTOMER_ID,
  )
}

// --- Access token (cache w pamięci ciepłej instancji) -----------------------
let tokenCache: { token: string; exp: number } | null = null

async function getAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.exp > Date.now() + 60_000) return tokenCache.token
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.GOOGLE_ADS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN!,
    }),
  })
  if (!res.ok) throw new Error(`Ads token error ${res.status}: ${await res.text()}`)
  const json = (await res.json()) as { access_token: string; expires_in: number }
  tokenCache = { token: json.access_token, exp: Date.now() + json.expires_in * 1000 }
  return json.access_token
}

// --- GAQL search -------------------------------------------------------------

interface GaqlRow {
  campaign?: { id?: string; name?: string; status?: string; advertisingChannelType?: string }
  campaignBudget?: { amountMicros?: string }
  searchTermView?: { searchTerm?: string }
  adGroupCriterion?: { keyword?: { text?: string; matchType?: string } }
  segments?: { date?: string }
  metrics?: {
    costMicros?: string
    impressions?: string
    clicks?: string
    ctr?: number
    conversions?: number
    conversionsValue?: number
    costPerConversion?: string
    searchImpressionShare?: number
    searchBudgetLostImpressionShare?: number
    searchRankLostImpressionShare?: number
  }
}

/** Zapytanie GAQL do googleAds:search (z paginacją). */
export async function adsQuery(query: string): Promise<GaqlRow[]> {
  const token = await getAccessToken()
  const cid = process.env.GOOGLE_ADS_CUSTOMER_ID!
  const loginCid = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID
  const url = `https://googleads.googleapis.com/${API_VERSION}/customers/${cid}/googleAds:search`

  const rows: GaqlRow[] = []
  let pageToken: string | undefined
  do {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
        ...(loginCid ? { 'login-customer-id': loginCid } : {}),
      },
      body: JSON.stringify({ query, ...(pageToken ? { pageToken } : {}) }),
    })
    if (!res.ok) throw new Error(`Ads search ${res.status}: ${await res.text()}`)
    const json = (await res.json()) as { results?: GaqlRow[]; nextPageToken?: string }
    rows.push(...(json.results || []))
    pageToken = json.nextPageToken
  } while (pageToken && rows.length < 10_000)

  return rows
}

// --- Typy panelu -------------------------------------------------------------

export interface AdsCampaign {
  id: string
  name: string
  status: string
  channel: string
  budgetDaily: number // zł/dzień
  cost: number // zł
  impressions: number
  clicks: number
  ctr: number // 0..1
  conversions: number
  conversionsValue: number
  costPerConversion: number // zł
  searchIS?: number // 0..1
  lostISBudget?: number
  lostISRank?: number
}

export interface AdsOverview {
  rangeDays: number
  totals: { cost: number; clicks: number; impressions: number; conversions: number; conversionsValue: number }
  campaigns: AdsCampaign[]
  daily: { date: string; cost: number; clicks: number; conversions: number }[]
  /** Wyszukiwane hasła z kosztem i zerem konwersji (kandydaci do wykluczeń) */
  wastedTerms: { term: string; campaign: string; cost: number; clicks: number }[]
}

const micros = (v?: string) => (v ? Number(v) / 1_000_000 : 0)
const n = (v?: string | number) => (v ? Number(v) : 0)

function during(rangeDays: number): string {
  // GAQL: gotowe zakresy dla 7/30, reszta przez BETWEEN
  if (rangeDays === 7) return 'segments.date DURING LAST_7_DAYS'
  if (rangeDays === 30) return 'segments.date DURING LAST_30_DAYS'
  const to = new Date()
  to.setDate(to.getDate() - 1)
  const from = new Date(to)
  from.setDate(from.getDate() - rangeDays + 1)
  const iso = (d: Date) => d.toISOString().slice(0, 10)
  return `segments.date BETWEEN '${iso(from)}' AND '${iso(to)}'`
}

/** Komplet danych panelu /admin/ads. */
export async function adsOverview(rangeDays = 30): Promise<AdsOverview> {
  const where = during(rangeDays)

  const [campaignRows, dailyRows, termRows] = await Promise.all([
    adsQuery(`
      SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type,
             campaign_budget.amount_micros,
             metrics.cost_micros, metrics.impressions, metrics.clicks, metrics.ctr,
             metrics.conversions, metrics.conversions_value, metrics.cost_per_conversion,
             metrics.search_impression_share, metrics.search_budget_lost_impression_share,
             metrics.search_rank_lost_impression_share
      FROM campaign
      WHERE ${where} AND campaign.status IN ('ENABLED','PAUSED')
      ORDER BY metrics.cost_micros DESC`),
    adsQuery(`
      SELECT segments.date, metrics.cost_micros, metrics.clicks, metrics.conversions
      FROM customer
      WHERE ${where}
      ORDER BY segments.date`),
    adsQuery(`
      SELECT search_term_view.search_term, campaign.name,
             metrics.cost_micros, metrics.clicks, metrics.conversions
      FROM search_term_view
      WHERE ${where}
      ORDER BY metrics.cost_micros DESC
      LIMIT 200`),
  ])

  const campaigns: AdsCampaign[] = campaignRows.map((r) => ({
    id: r.campaign?.id || '',
    name: r.campaign?.name || '(bez nazwy)',
    status: r.campaign?.status || '',
    channel: r.campaign?.advertisingChannelType || '',
    budgetDaily: micros(r.campaignBudget?.amountMicros),
    cost: micros(r.metrics?.costMicros),
    impressions: n(r.metrics?.impressions),
    clicks: n(r.metrics?.clicks),
    ctr: n(r.metrics?.ctr),
    conversions: n(r.metrics?.conversions),
    conversionsValue: n(r.metrics?.conversionsValue),
    costPerConversion: micros(r.metrics?.costPerConversion),
    searchIS: r.metrics?.searchImpressionShare,
    lostISBudget: r.metrics?.searchBudgetLostImpressionShare,
    lostISRank: r.metrics?.searchRankLostImpressionShare,
  }))

  const totals = campaigns.reduce(
    (a, c) => ({
      cost: a.cost + c.cost,
      clicks: a.clicks + c.clicks,
      impressions: a.impressions + c.impressions,
      conversions: a.conversions + c.conversions,
      conversionsValue: a.conversionsValue + c.conversionsValue,
    }),
    { cost: 0, clicks: 0, impressions: 0, conversions: 0, conversionsValue: 0 },
  )

  const daily = dailyRows.map((r) => ({
    date: r.segments?.date || '',
    cost: micros(r.metrics?.costMicros),
    clicks: n(r.metrics?.clicks),
    conversions: n(r.metrics?.conversions),
  }))

  const wastedTerms = termRows
    .filter((r) => n(r.metrics?.conversions) === 0 && micros(r.metrics?.costMicros) > 0)
    .slice(0, 30)
    .map((r) => ({
      term: r.searchTermView?.searchTerm || '',
      campaign: r.campaign?.name || '',
      cost: micros(r.metrics?.costMicros),
      clicks: n(r.metrics?.clicks),
    }))

  return { rangeDays, totals, campaigns, daily, wastedTerms }
}
