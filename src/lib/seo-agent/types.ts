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
// SERP Collector (Faza 2)
// ---------------------------------------------------------------------------

export interface SerpKeywordResult {
  keyword: string
  keywordGroup: string
  takmaPosition: number | null   // null = nie znaleziono w top 30
  competitorPositions: Record<string, number | null> // domain → position
  hasRichSnippet: boolean
}

export interface SerpData {
  results: SerpKeywordResult[]
  collectedAt: string
}

// ---------------------------------------------------------------------------
// Competitor Collector (Faza 2)
// ---------------------------------------------------------------------------

export interface CompetitorPageSnapshot {
  competitor: string
  url: string
  title: string
  metaDescription: string
  contentLength: number
  hasPrice: boolean
  price: number | null
  hasFaq: boolean
  faqCount: number
  hasSchema: boolean
  schemaTypes: string[]
  contentHash: string
}

export interface CompetitorData {
  snapshots: CompetitorPageSnapshot[]
  collectedAt: string
}

// ---------------------------------------------------------------------------
// Claude Scoring (Faza 3)
// ---------------------------------------------------------------------------

export interface PageScore {
  url: string
  scoreSeo: number    // 0-100
  scoreAeo: number    // 0-100
  scoreGeo: number    // 0-100
  reasoning: string
}

export interface ScoringResult {
  pages: PageScore[]
  scoreOverall: number  // weighted avg
  scoreSeo: number      // avg across pages
  scoreAeo: number
  scoreGeo: number
}

// ---------------------------------------------------------------------------
// Collected data (merged for DB storage)
// ---------------------------------------------------------------------------

export interface CollectedData {
  gsc: GSCData | null
  ga4: GA4Data | null
  serp: SerpData | null
  competitors: CompetitorData | null
  scoring: ScoringResult | null
  collectedAt: string
}
