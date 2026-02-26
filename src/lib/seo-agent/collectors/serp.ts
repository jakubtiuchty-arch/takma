/**
 * SERP Collector — Google Custom Search API
 * Faza 2: Śledzi pozycje TAKMA i konkurentów dla ~25 fraz
 * API: https://www.googleapis.com/customsearch/v1
 * Free tier: 100 calls/dzień → ~25 fraz × 3 pages = 75 calls/run
 */

import type { SerpKeywordResult, SerpData } from '../types'

const CSE_API = 'https://www.googleapis.com/customsearch/v1'

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
  { keyword: 'zebra zq520', group: 'mobilne' },
]

// ---------------------------------------------------------------------------
// CSE API query — pobiera 10 wyników na call (max start=21 dla top 30)
// ---------------------------------------------------------------------------

interface CSEItem {
  title: string
  link: string
  displayLink: string
  snippet: string
  pagemap?: {
    metatags?: Array<Record<string, string>>
  }
}

interface CSEResponse {
  items?: CSEItem[]
  searchInformation?: {
    totalResults: string
  }
  queries?: {
    request?: Array<{ totalResults: string }>
  }
}

async function queryCSE(
  apiKey: string,
  cseId: string,
  query: string,
  start: number,
): Promise<CSEItem[]> {
  const params = new URLSearchParams({
    key: apiKey,
    cx: cseId,
    q: query,
    gl: 'pl',
    hl: 'pl',
    start: String(start),
    num: '10',
  })

  const response = await fetch(`${CSE_API}?${params}`)

  if (!response.ok) {
    // 429 = quota exceeded — graceful degradation
    if (response.status === 429) {
      console.warn(`[SERP] Quota exceeded for "${query}" (start=${start})`)
      return []
    }
    const text = await response.text()
    throw new Error(`CSE API ${response.status}: ${text}`)
  }

  const data: CSEResponse = await response.json()
  return data.items || []
}

// ---------------------------------------------------------------------------
// Znalezienie pozycji domeny w wynikach
// ---------------------------------------------------------------------------

function findPosition(items: CSEItem[], domain: string): number | null {
  for (let i = 0; i < items.length; i++) {
    try {
      const url = new URL(items[i].link)
      if (url.hostname === domain || url.hostname === `www.${domain}` || url.hostname.endsWith(`.${domain}`)) {
        return i + 1
      }
    } catch {
      // invalid URL, skip
    }
  }
  return null
}

function hasRichSnippetInResults(items: CSEItem[]): boolean {
  // Heurystyka: sprawdź czy TAKMA ma rich snippet (pagemap z FAQ/Product)
  for (const item of items) {
    try {
      const url = new URL(item.link)
      if (url.hostname.includes('takma.com.pl')) {
        if (item.pagemap?.metatags) {
          return true
        }
      }
    } catch {
      // skip
    }
  }
  return false
}

// ---------------------------------------------------------------------------
// Collect SERP positions for all keywords
// ---------------------------------------------------------------------------

export async function collectSERP(): Promise<SerpData> {
  const apiKey = process.env.GOOGLE_CSE_API_KEY
  const cseId = process.env.GOOGLE_CSE_ID

  if (!apiKey || !cseId) {
    throw new Error('Brak GOOGLE_CSE_API_KEY lub GOOGLE_CSE_ID')
  }

  console.log(`[SERP] Start — ${TRACKED_KEYWORDS.length} fraz do sprawdzenia`)

  const results: SerpKeywordResult[] = []

  // Przetwarzaj po jednym keyword, żeby nie przekroczyć quota
  for (const { keyword, group } of TRACKED_KEYWORDS) {
    try {
      // 3 calls per keyword: start=1, 11, 21 → top 30 results
      const [page1, page2, page3] = await Promise.all([
        queryCSE(apiKey, cseId, keyword, 1),
        queryCSE(apiKey, cseId, keyword, 11),
        queryCSE(apiKey, cseId, keyword, 21),
      ])

      const allItems = [...page1, ...page2, ...page3]

      // Pozycja TAKMA (szukaj po www.takma.com.pl i takma.com.pl)
      let takmaPosition: number | null = null
      for (let i = 0; i < allItems.length; i++) {
        try {
          const url = new URL(allItems[i].link)
          if (url.hostname === 'takma.com.pl' || url.hostname === 'www.takma.com.pl') {
            takmaPosition = i + 1
            break
          }
        } catch {
          // skip
        }
      }

      // Pozycje konkurentów
      const competitorPositions: Record<string, number | null> = {}
      for (const competitor of COMPETITORS) {
        competitorPositions[competitor] = findPosition(allItems, competitor)
      }

      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition,
        competitorPositions,
        hasRichSnippet: hasRichSnippetInResults(allItems),
      })

      console.log(`[SERP] "${keyword}" → TAKMA: ${takmaPosition ?? 'brak'}`)
    } catch (err) {
      console.error(`[SERP] Błąd dla "${keyword}":`, err)
      // Graceful: dodaj wynik z nullami zamiast przerywać
      results.push({
        keyword,
        keywordGroup: group,
        takmaPosition: null,
        competitorPositions: Object.fromEntries(COMPETITORS.map(c => [c, null])),
        hasRichSnippet: false,
      })
    }

    // Throttle: 200ms między keywords żeby nie spam-ować API
    await new Promise(resolve => setTimeout(resolve, 200))
  }

  console.log(`[SERP] Zebrano ${results.length} fraz, TAKMA w top 30: ${results.filter(r => r.takmaPosition !== null).length}`)

  return {
    results,
    collectedAt: new Date().toISOString(),
  }
}
