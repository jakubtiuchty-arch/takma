/**
 * GSC Collector — Google Search Console API v3
 * 4 API calls: current pages, prev pages, current queries, prev queries
 * Delta computation + auto-alerts
 */

import { getGoogleAccessToken, GSC_SCOPE } from '../google-auth'
import type { GSCData, GSCPageData, GSCQueryData, GSCAlerts } from '../types'

const GSC_API = 'https://www.googleapis.com/webmasters/v3'
const PROPERTY = process.env.GSC_PROPERTY || 'sc-domain:takma.com.pl'

// GSC has 3-day delay
function getDateRanges() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const currentEnd = new Date(today)
  currentEnd.setDate(currentEnd.getDate() - 3)

  const currentStart = new Date(currentEnd)
  currentStart.setDate(currentStart.getDate() - 7)

  const prevEnd = new Date(currentStart)
  prevEnd.setDate(prevEnd.getDate() - 1)

  const prevStart = new Date(prevEnd)
  prevStart.setDate(prevStart.getDate() - 7)

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
// GSC Search Analytics Request
// ---------------------------------------------------------------------------

interface GSCRow {
  keys: string[]
  clicks: number
  impressions: number
  ctr: number
  position: number
}

interface GSCResponse {
  rows?: GSCRow[]
}

async function queryGSC(
  token: string,
  startDate: string,
  endDate: string,
  dimensions: string[],
  rowLimit = 1000,
): Promise<GSCRow[]> {
  const url = `${GSC_API}/sites/${encodeURIComponent(PROPERTY)}/searchAnalytics/query`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions,
      rowLimit,
      dataState: 'all',
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`GSC API ${response.status}: ${errorText}`)
  }

  const data: GSCResponse = await response.json()
  return data.rows || []
}

// ---------------------------------------------------------------------------
// Collect GSC data
// ---------------------------------------------------------------------------

export async function collectGSC(): Promise<GSCData> {
  const token = await getGoogleAccessToken(GSC_SCOPE)
  const dates = getDateRanges()

  console.log(`[GSC] Zbieram dane: ${dates.currentStart} → ${dates.currentEnd}`)

  // 4 parallel API calls
  const [currentPages, prevPages, currentQueries, prevQueries] = await Promise.all([
    queryGSC(token, dates.currentStart, dates.currentEnd, ['page']),
    queryGSC(token, dates.prevStart, dates.prevEnd, ['page']),
    queryGSC(token, dates.currentStart, dates.currentEnd, ['query', 'page']),
    queryGSC(token, dates.prevStart, dates.prevEnd, ['query', 'page']),
  ])

  // Build prev pages lookup
  const prevPageMap = new Map<string, GSCRow>()
  for (const row of prevPages) {
    prevPageMap.set(row.keys[0], row)
  }

  // Pages with deltas
  const pages: GSCPageData[] = currentPages.map((row) => {
    const url = row.keys[0]
    const prev = prevPageMap.get(url)
    return {
      url,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      avgPosition: row.position,
      clicksDelta: prev ? row.clicks - prev.clicks : row.clicks,
      positionDelta: prev ? row.position - prev.position : 0,
    }
  })

  // Build prev queries lookup (key = query+page)
  const prevQueryMap = new Map<string, GSCRow>()
  const prevQueryKeys = new Set<string>()
  for (const row of prevQueries) {
    const key = `${row.keys[0]}|${row.keys[1]}`
    prevQueryMap.set(key, row)
    prevQueryKeys.add(key)
  }

  const currentQueryKeys = new Set<string>()

  // Queries with deltas
  const queries: GSCQueryData[] = currentQueries.map((row) => {
    const query = row.keys[0]
    const page = row.keys[1]
    const key = `${query}|${page}`
    currentQueryKeys.add(key)

    const prev = prevQueryMap.get(key)
    return {
      query,
      page,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
      positionDelta: prev ? row.position - prev.position : 0,
      isNew: !prev,
      isLost: false,
    }
  })

  // Lost queries (existed in prev but not in current)
  Array.from(prevQueryKeys).forEach((key) => {
    if (!currentQueryKeys.has(key)) {
      const prev = prevQueryMap.get(key)!
      queries.push({
        query: prev.keys[0],
        page: prev.keys[1],
        clicks: 0,
        impressions: 0,
        ctr: 0,
        position: 0,
        positionDelta: 0,
        isNew: false,
        isLost: true,
      })
    }
  })

  // Auto-alerts
  const alerts: GSCAlerts = {
    droppedPages: [],
    newRankings: [],
    ctrDrops: [],
  }

  for (const page of pages) {
    // Position dropped >5
    if (page.positionDelta > 5) {
      alerts.droppedPages.push(page.url)
    }
    // CTR dropped >20%
    const prev = prevPageMap.get(page.url)
    if (prev && prev.ctr > 0) {
      const ctrChange = (page.ctr - prev.ctr) / prev.ctr
      if (ctrChange < -0.2) {
        alerts.ctrDrops.push(page.url)
      }
    }
    // New ranking in top 20 (wasn't in prev)
    if (!prevPageMap.has(page.url) && page.avgPosition <= 20) {
      alerts.newRankings.push(page.url)
    }
  }

  console.log(`[GSC] Zebrano: ${pages.length} stron, ${queries.length} fraz, ${alerts.droppedPages.length + alerts.ctrDrops.length + alerts.newRankings.length} alertów`)

  return {
    pages,
    queries,
    alerts,
    periodStart: dates.currentStart,
    periodEnd: dates.currentEnd,
    prevPeriodStart: dates.prevStart,
    prevPeriodEnd: dates.prevEnd,
  }
}
