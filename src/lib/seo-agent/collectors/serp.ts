/**
 * SERP Collector — Serper.dev API
 * Faza 2: Śledzi pozycje TAKMA i konkurentów dla fraz produktowych i generycznych
 * API: https://google.serper.dev/search
 * Free tier: 2500 queries/miesiąc → ~75 fraz × 8 runs/msc = ~600/msc
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
  // =====================================================
  // BRAND (2)
  // =====================================================
  { keyword: 'takma drukarki', group: 'brand' },
  { keyword: 'takma terminale', group: 'brand' },

  // =====================================================
  // DRUKARKI BIURKOWE — "drukarka etykiet zebra X" (11)
  // =====================================================
  { keyword: 'drukarka etykiet zebra zd220t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd220d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd230t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd230d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd411t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd411d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd421t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd421d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd621t', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd621d', group: 'drukarki-biurkowe' },
  { keyword: 'drukarka etykiet zebra zd510', group: 'drukarki-biurkowe' },

  // =====================================================
  // DRUKARKI PRZEMYSŁOWE — "drukarka etykiet zebra X" (7)
  // =====================================================
  { keyword: 'drukarka etykiet zebra zt111', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt231', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt411', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt421', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt510', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt610', group: 'drukarki-przemyslowe' },
  { keyword: 'drukarka etykiet zebra zt620', group: 'drukarki-przemyslowe' },

  // =====================================================
  // DRUKARKI MOBILNE — "drukarka mobilna zebra X" (9)
  // =====================================================
  { keyword: 'drukarka mobilna zebra zq210', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq220', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq310', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq320', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq511', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq521', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq610', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq620', group: 'drukarki-mobilne' },
  { keyword: 'drukarka mobilna zebra zq630', group: 'drukarki-mobilne' },

  // =====================================================
  // SKANERY — "skaner zebra X" (9)
  // =====================================================
  { keyword: 'skaner zebra ds2208', group: 'skanery' },
  { keyword: 'skaner zebra ds4608', group: 'skanery' },
  { keyword: 'skaner zebra ds8208', group: 'skanery' },
  { keyword: 'skaner zebra ds3608', group: 'skanery' },
  { keyword: 'skaner zebra ds3608 xr', group: 'skanery' },
  { keyword: 'skaner zebra ds3608 hd', group: 'skanery' },
  { keyword: 'skaner zebra ds3608 sr', group: 'skanery' },
  { keyword: 'skaner zebra li2208', group: 'skanery' },
  { keyword: 'skaner zebra li3608', group: 'skanery' },
  { keyword: 'skaner zebra li3608-er', group: 'skanery' },
  { keyword: 'skaner zebra ds3678', group: 'skanery' },
  { keyword: 'skaner zebra ds3678-xr', group: 'skanery' },
  { keyword: 'skaner zebra ds3678-hd', group: 'skanery' },
  { keyword: 'skaner zebra ds3678-hp', group: 'skanery' },
  { keyword: 'skaner zebra ds2278', group: 'skanery' },
  { keyword: 'skaner zebra ds8288', group: 'skanery' },
  { keyword: 'skaner zebra ds4678', group: 'skanery' },
  { keyword: 'skaner zebra ds4678 dpm', group: 'skanery' },
  { keyword: 'skaner zebra ds9908', group: 'skanery' },
  { keyword: 'skaner zebra ds9308', group: 'skanery' },
  { keyword: 'newland hr23 dorada', group: 'skanery' },
  { keyword: 'skaner newland hr23', group: 'skanery' },
  { keyword: 'newland hr33 marlin', group: 'skanery' },
  { keyword: 'skaner newland hr33', group: 'skanery' },
  { keyword: 'newland hr11 aringa', group: 'skanery' },
  { keyword: 'skaner newland hr11', group: 'skanery' },

  // =====================================================
  // TERMINALE ZEBRA — "terminal mobilny zebra X" (14)
  // =====================================================
  { keyword: 'terminal mobilny zebra tc22', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc27', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc53', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc58', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc501', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc701', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc73', group: 'terminale' },
  { keyword: 'terminal mobilny zebra tc78', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc2200', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc2700', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc3300x', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc3400', group: 'terminale' },
  { keyword: 'terminal mobilny zebra mc9400', group: 'terminale' },
  { keyword: 'terminal mobilny zebra em45', group: 'terminale' },

  // =====================================================
  // TERMINALE NEWLAND (7)
  // =====================================================
  { keyword: 'newland n7 cachalot pro ii', group: 'terminale-newland' },
  { keyword: 'terminal newland n7', group: 'terminale-newland' },
  { keyword: 'terminal mobilny newland', group: 'terminale-newland' },
  { keyword: 'newland n7 cachalot', group: 'terminale-newland' },
  { keyword: 'newland mt93 megattera', group: 'terminale-newland' },
  { keyword: 'terminal newland mt93', group: 'terminale-newland' },
  { keyword: 'newland mt93 megattera standard', group: 'terminale-newland' },
  { keyword: 'newland mt93 megattera standard plus', group: 'terminale-newland' },
  { keyword: 'newland mt93 standard plus wifi 6e', group: 'terminale-newland' },
  { keyword: 'newland mt95 kambur pro ii', group: 'terminale-newland' },
  { keyword: 'newland mt95 kambur', group: 'terminale-newland' },
  { keyword: 'terminal newland mt95', group: 'terminale-newland' },

  // =====================================================
  // TERMINALE DATALOGIC (4)
  // =====================================================
  { keyword: 'terminal datalogic memor', group: 'terminale-datalogic' },
  { keyword: 'datalogic skorpio x5', group: 'terminale-datalogic' },
  { keyword: 'datalogic memor k', group: 'terminale-datalogic' },
  { keyword: 'terminal mobilny datalogic', group: 'terminale-datalogic' },

  // =====================================================
  // DRUKARKI KART (3)
  // =====================================================
  { keyword: 'drukarka kart zebra zc100', group: 'drukarki-kart' },
  { keyword: 'drukarka kart zebra zc300', group: 'drukarki-kart' },
  { keyword: 'drukarka kart plastikowych', group: 'drukarki-kart' },

  // =====================================================
  // PRODUKTY — sam model (20)
  // =====================================================
  { keyword: 'zebra zd421t', group: 'produkty' },
  { keyword: 'zebra zd421d', group: 'produkty' },
  { keyword: 'zebra zd621t', group: 'produkty' },
  { keyword: 'zebra zd621d', group: 'produkty' },
  { keyword: 'zebra zt411', group: 'produkty' },
  { keyword: 'zebra zt231', group: 'produkty' },
  { keyword: 'zebra zt610', group: 'produkty' },
  { keyword: 'zebra zd220', group: 'produkty' },
  { keyword: 'zebra tc22', group: 'produkty' },
  { keyword: 'zebra tc27', group: 'produkty' },
  { keyword: 'zebra mc3400', group: 'produkty' },
  { keyword: 'zebra mc9400', group: 'produkty' },
  { keyword: 'zebra ds2208', group: 'produkty' },
  { keyword: 'zebra ds4608', group: 'produkty' },
  { keyword: 'zebra zq521', group: 'produkty' },
  { keyword: 'zebra li3608', group: 'produkty' },
  { keyword: 'newland n7', group: 'produkty' },
  { keyword: 'newland mt93', group: 'produkty' },
  { keyword: 'zebra tc53e', group: 'produkty' },
  { keyword: 'zebra mc3450', group: 'produkty' },
  { keyword: 'zebra ds8178', group: 'produkty' },

  // =====================================================
  // TABLETY — „tablet zebra X" (6)
  // =====================================================
  { keyword: 'tablet zebra et40', group: 'tablety' },
  { keyword: 'tablet zebra et45', group: 'tablety' },
  { keyword: 'tablet zebra et60', group: 'tablety' },
  { keyword: 'tablet zebra et65', group: 'tablety' },
  { keyword: 'tablet zebra et401', group: 'tablety' },
  { keyword: 'tablet zebra et80', group: 'tablety' },
  { keyword: 'tablet przemysłowy zebra', group: 'tablety' },
  { keyword: 'tablet przemysłowy', group: 'tablety' },
  { keyword: 'tablet rugged android', group: 'tablety' },

  // =====================================================
  // GENERYCZNE (5)
  // =====================================================
  { keyword: 'drukarka etykiet', group: 'generyczne' },
  { keyword: 'drukarka etykiet cena', group: 'generyczne' },
  { keyword: 'drukarka kodów kreskowych', group: 'generyczne' },
  { keyword: 'skanery kodów kreskowych', group: 'generyczne' },
  { keyword: 'terminal mobilny cena', group: 'generyczne' },

  // =====================================================
  // LONG-TAIL (9)
  // =====================================================
  { keyword: 'drukarka termiczna vs termotransferowa', group: 'long-tail' },
  { keyword: 'jak wybrać drukarkę etykiet', group: 'long-tail' },
  { keyword: 'drukarka etykiet do magazynu', group: 'long-tail' },
  { keyword: 'drukarki etykiet przemysłowe', group: 'long-tail' },
  { keyword: 'drukarka etykiet do apteki', group: 'long-tail' },
  { keyword: 'jak wybrać terminal mobilny', group: 'long-tail' },
  { keyword: 'terminal mobilny do magazynu', group: 'long-tail' },
  { keyword: 'newland vs zebra terminal', group: 'long-tail' },
  { keyword: 'top terminale mobilne 2026', group: 'long-tail' },
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

      // Rich snippet: sprawdź czy w top 10 jest TAKMA
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
