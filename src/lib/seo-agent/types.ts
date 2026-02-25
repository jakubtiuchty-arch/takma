/**
 * SEO Agent — interfejsy TypeScript
 * Faza 1: GSC + GA4 collectory, pipeline, dashboard
 */

// ---------------------------------------------------------------------------
// GSC Collector
// ---------------------------------------------------------------------------

export interface GSCPageData {
  url: string
  clicks: number
  impressions: number
  ctr: number
  avgPosition: number
  clicksDelta: number
  positionDelta: number
}

export interface GSCQueryData {
  query: string
  page: string
  clicks: number
  impressions: number
  ctr: number
  position: number
  positionDelta: number
  isNew: boolean
  isLost: boolean
}

export interface GSCAlerts {
  droppedPages: string[]   // strony, które spadły >5 pozycji
  newRankings: string[]    // nowe strony w top 20
  ctrDrops: string[]       // spadek CTR >20%
}

export interface GSCData {
  pages: GSCPageData[]
  queries: GSCQueryData[]
  alerts: GSCAlerts
  periodStart: string
  periodEnd: string
  prevPeriodStart: string
  prevPeriodEnd: string
}

// ---------------------------------------------------------------------------
// GA4 Collector
// ---------------------------------------------------------------------------

export interface GA4PageData {
  url: string
  sessions: number
  uniqueUsers: number
  bounceRate: number
  avgSessionDuration: number
  conversions: number
  sessionsDelta: number
}

export interface GA4TrafficSource {
  url: string
  organic: number
  direct: number
  referral: number
  social: number
}

export interface GA4OrganicLanding {
  url: string
  sessions: number
  bounceRate: number
  conversions: number
}

export interface GA4Data {
  pages: GA4PageData[]
  trafficSources: GA4TrafficSource[]
  topOrganicLandings: GA4OrganicLanding[]
  periodStart: string
  periodEnd: string
}

// ---------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------

export interface PipelineResult {
  reportId: string
  status: 'completed' | 'failed'
  duration: number  // ms
  gscOk: boolean
  ga4Ok: boolean
  error?: string
}

// ---------------------------------------------------------------------------
// Collected data (merged for DB storage)
// ---------------------------------------------------------------------------

export interface CollectedData {
  gsc: GSCData | null
  ga4: GA4Data | null
  collectedAt: string
}
