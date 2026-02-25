/**
 * GA4 Collector — Google Analytics Data API v1beta
 * 3 API calls: page metrics (2 dateRanges), traffic sources, organic landings
 */

import { getGoogleAccessToken, GA4_SCOPE } from '../google-auth'
import type { GA4Data, GA4PageData, GA4TrafficSource, GA4OrganicLanding } from '../types'

const GA4_API = 'https://analyticsdata.googleapis.com/v1beta'

function getPropertyId(): string {
  const id = process.env.GA4_PROPERTY_ID
  if (!id) throw new Error('[GA4] Brak GA4_PROPERTY_ID env var')
  return id
}

function getDateRanges() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const currentEnd = new Date(today)
  currentEnd.setDate(currentEnd.getDate() - 1) // GA4 yesterday

  const currentStart = new Date(currentEnd)
  currentStart.setDate(currentStart.getDate() - 6) // 7 days

  const prevEnd = new Date(currentStart)
  prevEnd.setDate(prevEnd.getDate() - 1)

  const prevStart = new Date(prevEnd)
  prevStart.setDate(prevStart.getDate() - 6)

  return {
    currentStart: fmt(currentStart),
    currentEnd: fmt(currentEnd),
    prevStart: fmt(prevStart),
    prevEnd: fmt(prevEnd),
  }
}

function fmt(d: Date): string {
  return d.toISOString().split('T')[0]
}

// ---------------------------------------------------------------------------
// GA4 runReport helper
// ---------------------------------------------------------------------------

interface GA4RunReportRequest {
  dateRanges: { startDate: string; endDate: string }[]
  dimensions: { name: string }[]
  metrics: { name: string }[]
  dimensionFilter?: unknown
  limit?: number
  orderBys?: unknown[]
}

interface GA4DimensionValue {
  value: string
}

interface GA4MetricValue {
  value: string
}

interface GA4Row {
  dimensionValues: GA4DimensionValue[]
  metricValues: GA4MetricValue[]
}

interface GA4RunReportResponse {
  rows?: GA4Row[]
}

async function runReport(
  token: string,
  propertyId: string,
  request: GA4RunReportRequest,
): Promise<GA4Row[]> {
  const url = `${GA4_API}/properties/${propertyId}:runReport`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`GA4 API ${response.status}: ${errorText}`)
  }

  const data: GA4RunReportResponse = await response.json()
  return data.rows || []
}

// ---------------------------------------------------------------------------
// Collect GA4 data
// ---------------------------------------------------------------------------

export async function collectGA4(): Promise<GA4Data> {
  const token = await getGoogleAccessToken(GA4_SCOPE)
  const propertyId = getPropertyId()
  const dates = getDateRanges()

  console.log(`[GA4] Zbieram dane: ${dates.currentStart} → ${dates.currentEnd}`)

  // 3 parallel API calls
  const [pageRows, trafficRows, organicRows] = await Promise.all([
    // 1. Page metrics with comparison dateRange
    runReport(token, propertyId, {
      dateRanges: [
        { startDate: dates.currentStart, endDate: dates.currentEnd },
        { startDate: dates.prevStart, endDate: dates.prevEnd },
      ],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' },
        { name: 'conversions' },
      ],
      limit: 500,
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    }),

    // 2. Traffic sources per page
    runReport(token, propertyId, {
      dateRanges: [{ startDate: dates.currentStart, endDate: dates.currentEnd }],
      dimensions: [
        { name: 'pagePath' },
        { name: 'sessionDefaultChannelGroup' },
      ],
      metrics: [{ name: 'sessions' }],
      limit: 1000,
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    }),

    // 3. Organic landings
    runReport(token, propertyId, {
      dateRanges: [{ startDate: dates.currentStart, endDate: dates.currentEnd }],
      dimensions: [{ name: 'landingPage' }],
      metrics: [
        { name: 'sessions' },
        { name: 'bounceRate' },
        { name: 'conversions' },
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'sessionDefaultChannelGroup',
          stringFilter: { matchType: 'EXACT', value: 'Organic Search' },
        },
      },
      limit: 100,
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    }),
  ])

  // Parse page metrics (GA4 returns 2 dateRanges interleaved — current first, prev second)
  // Each row has metrics for each dateRange: metricValues[0..4] = current, metricValues[5..9] = prev
  const pages: GA4PageData[] = pageRows.map((row) => {
    const url = row.dimensionValues[0].value
    const sessions = parseInt(row.metricValues[0].value) || 0
    const uniqueUsers = parseInt(row.metricValues[1].value) || 0
    const bounceRate = parseFloat(row.metricValues[2].value) || 0
    const avgSessionDuration = parseFloat(row.metricValues[3].value) || 0
    const conversions = parseInt(row.metricValues[4].value) || 0

    // Previous period (if available)
    const prevSessions = row.metricValues.length > 5
      ? parseInt(row.metricValues[5].value) || 0
      : 0

    return {
      url,
      sessions,
      uniqueUsers,
      bounceRate,
      avgSessionDuration,
      conversions,
      sessionsDelta: sessions - prevSessions,
    }
  })

  // Parse traffic sources
  const trafficMap = new Map<string, GA4TrafficSource>()
  for (const row of trafficRows) {
    const url = row.dimensionValues[0].value
    const channel = row.dimensionValues[1].value.toLowerCase()
    const sessions = parseInt(row.metricValues[0].value) || 0

    if (!trafficMap.has(url)) {
      trafficMap.set(url, { url, organic: 0, direct: 0, referral: 0, social: 0 })
    }
    const entry = trafficMap.get(url)!

    if (channel.includes('organic')) entry.organic += sessions
    else if (channel.includes('direct')) entry.direct += sessions
    else if (channel.includes('referral')) entry.referral += sessions
    else if (channel.includes('social')) entry.social += sessions
  }
  const trafficSources = Array.from(trafficMap.values())

  // Parse organic landings
  const topOrganicLandings: GA4OrganicLanding[] = organicRows.map((row) => ({
    url: row.dimensionValues[0].value,
    sessions: parseInt(row.metricValues[0].value) || 0,
    bounceRate: parseFloat(row.metricValues[1].value) || 0,
    conversions: parseInt(row.metricValues[2].value) || 0,
  }))

  console.log(`[GA4] Zebrano: ${pages.length} stron, ${trafficSources.length} źródeł ruchu, ${topOrganicLandings.length} organic landings`)

  return {
    pages,
    trafficSources,
    topOrganicLandings,
    periodStart: dates.currentStart,
    periodEnd: dates.currentEnd,
  }
}
