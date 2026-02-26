/**
 * SERP Collector — Serper.dev API
 * Faza 2: Śledzi pozycje TAKMA i konkurentów dla ~25 fraz
 * API: https://google.serper.dev/search
 * Free tier: 2500 queries/miesiąc → 25 fraz/run × 2 runs/tydzień = ~200/msc
 * Env var: SERPER_API_KEY
 */

import type { SerpKeywordResult, SerpData } from '../types'

const SERPER_API = 'https://google.serper.dev/search'

// Konkurenci do śledzenia
const COMPETITORS = [
  'aspekt.net.pl',
  'bcmarket.pl',
  'zebrasklep.pl',
  'strefadrukarek.pl',
  'netselekt.pl',
]

// Śledzone frazy z grupami
const TRACKED_KEYWORDS: { keyword: string; group: string }[] = [
  // Brand
  { keyword: 'takma drukarki', group: 'brand' },
  { keyword: 'takma terminale', group: 'brand' },
  // Drukarki
  { keyword: 'drukarki etykiet zebra', group: 'drukarki' },
  { keyword: 'drukarka etykiet', group: 'drukarki' },
  { keyword: 'drukarka termiczna zebra', group: 'drukarki' },
  { keyword: 'drukarka etykiet cena', group: 'drukarki' },
  { keyword: 'drukarka kodów kreskowych', group: 'drukarki' },
  { keyword: 'drukarki etykiet przemysłowe', group: 'drukarki' },
  // Terminale
  { keyword: 'terminal mobilny zebra', group: 'terminale' },
  { keyword: 'zebra tc501', group: 'terminale' },
  { keyword: 'zebra tc22', group: 'terminale' },
  { keyword: 'zebra tc27', group: 'terminale' },
  { keyword: 'terminal mobilny cena', group: 'terminale' },
  // Skanery
  { keyword: 'skaner kodów kreskowych zebra', group: 'skanery' },
  { keyword: 'skanery kodów kreskowych', group: 'skanery' },
  // Long-tail
  { keyword: 'drukarka termiczna vs termotransferowa', group: 'long-tail' },
  { keyword: 'jak wybrać drukarkę etykiet', group: 'long-tail' },
  { keyword: 'drukarka etykiet do magazynu', group: 'long-tail' },
  // Produkty
  { keyword: 'zebra zd421', group: 'produkty' },
  { keyword: 'zebra zt411', group: 'produkty' },
  { keyword: 'zebra zd621', group: 'produkty' },
  { keyword: 'zebra zd220', group: 'produkty' },
  { keyword: 'zebra zt231', group: 'produkty' },
  // Mobilne drukarki
  { keyword: 'drukarka mobilna zebra', group: 'mobilne' },
  { keyword: 'zebra zq521', group: 'mobilne' },
]

// ---------------------------------------------------------------------------
// Serper.dev API — 1 call = top 30 organicznych wyników
// ---------------------------------------------------------------------------

interface SerperOrganicResult {
  title: string
  link: string
  snippet: string
  position: number
}

interface SerperResponse {
  organic?: SerperOrganicResult[]
  knowledgeGraph?: {
    title?: string
    type?: string
  }
}

async function querySerper(
  apiKey: string,
  query: string,
): Promise<SerperOrganicResult[]> {
  const response = await fetch(SERPER_API, {
    method: 'POST',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: query,
      gl: 'pl',
      hl: 'pl',
      num: 30,
    }),
  })

  if (!response.ok) {
    if (response.status === 429) {
      console.warn(`[SERP] Rate limit for "${query}"`)
      return []
    }
    const text = await response.text()
    throw new Error(`Serper API ${response.status}: ${text}`)
  }

  const data: SerperResponse = await response.json()
  return data.organic || []
}

// ---------------------------------------------------------------------------
// Znalezienie pozycji domeny w wynikach
// ---------------------------------------------------------------------------

function findPosition(results: SerperOrganicResult[], domain: string): number | null {
  for (const result of results) {
    try {
      const url = new URL(result.link)
      if (url.hostname === domain || url.hostname === `www.${domain}` || url.hostname.endsWith(`.${domain}`)) {
        return result.position
      }
    } catch {
      // invalid URL, skip
    }
  }
  return null
}

// ---------------------------------------------------------------------------
// Collect SERP positions for all keywords
// ---------------------------------------------------------------------------

export async function collectSERP(): Promise<SerpData> {
  const apiKey = process.env.SERPER_API_KEY

  if (!apiKey) {
    throw new Error('Brak SERPER_API_KEY')
  }

  console.log(`[SERP] Start — ${TRACKED_KEYWORDS.length} fraz (Serper.dev)`)

  const results: SerpKeywordResult[] = []

  for (const { keyword, group } of TRACKED_KEYWORDS) {
    try {
      const organic = await querySerper(apiKey, keyword)

      // Pozycja TAKMA
      const takmaPosition = findPosition(organic, 'takma.com.pl')

      // Pozycje konkurentów
      const competitorPositions: Record<string, number | null> = {}
      for (const competitor of COMPETITORS) {
        competitorPositions[competitor] = findPosition(organic, competitor)
      }

      // Rich snippet: sprawdź czy w top 3 jest jakaś pozycja z rozszerzonym wynikiem
      const hasRichSnippet = takmaPosition !== null && takmaPosition <= 10

      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition,
        competitorPositions,
        hasRichSnippet,
      })

      console.log(`[SERP] "${keyword}" → TAKMA: ${takmaPosition ?? 'brak w top 30'}`)
    } catch (err) {
      console.error(`[SERP] Błąd dla "${keyword}":`, err)
      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition: null,
        competitorPositions: Object.fromEntries(COMPETITORS.map(c => [c, null])),
        hasRichSnippet: false,
      })
    }

    // Throttle: 100ms między zapytaniami
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log(`[SERP] Zebrano ${results.length} fraz, TAKMA w top 30: ${results.filter(r => r.takmaPosition !== null).length}`)

  return {
    results,
    collectedAt: new Date().toISOString(),
  }
}
