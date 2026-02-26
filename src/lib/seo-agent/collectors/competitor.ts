/**
 * Competitor Collector — Faza 2
 * Analizuje strony konkurentów z wyników SERP:
 * title, meta description, content length, FAQ, schema, cena
 * Zapisuje hash → wykrywa zmiany
 */

import type { CompetitorPageSnapshot, CompetitorData, SerpKeywordResult } from '../types'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function simpleHash(text: string): string {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0 // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36)
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return match ? match[1].trim().slice(0, 200) : ''
}

function extractMetaDescription(html: string): string {
  const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i)
    || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i)
  return match ? match[1].trim().slice(0, 300) : ''
}

function extractTextLength(html: string): number {
  // Strip tags → liczymy znaki treści
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length
}

function extractJsonLdBlocks(html: string): string[] {
  const blocks: string[] = []
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1])
  }
  return blocks
}

function extractSchemaTypes(html: string): string[] {
  const types: string[] = []
  for (const block of extractJsonLdBlocks(html)) {
    try {
      const json = JSON.parse(block)
      if (json['@type']) {
        const schemaType = Array.isArray(json['@type']) ? json['@type'] : [json['@type']]
        types.push(...schemaType)
      }
      if (json['@graph'] && Array.isArray(json['@graph'])) {
        for (const item of json['@graph']) {
          if (item['@type']) {
            const schemaType = Array.isArray(item['@type']) ? item['@type'] : [item['@type']]
            types.push(...schemaType)
          }
        }
      }
    } catch {
      // invalid JSON-LD, skip
    }
  }
  return Array.from(new Set(types))
}

function extractFaqCount(html: string): number {
  for (const block of extractJsonLdBlocks(html)) {
    try {
      const json = JSON.parse(block)
      if (json['@type'] === 'FAQPage' && json.mainEntity) {
        return Array.isArray(json.mainEntity) ? json.mainEntity.length : 0
      }
      if (json['@graph']) {
        for (const item of json['@graph']) {
          if (item['@type'] === 'FAQPage' && item.mainEntity) {
            return Array.isArray(item.mainEntity) ? item.mainEntity.length : 0
          }
        }
      }
    } catch {
      // skip
    }
  }
  return 0
}

function extractPrice(html: string): number | null {
  for (const block of extractJsonLdBlocks(html)) {
    try {
      const json = JSON.parse(block)
      const product = json['@type'] === 'Product' ? json : null
      if (product?.offers) {
        const offers = Array.isArray(product.offers) ? product.offers[0] : product.offers
        if (offers?.price) return parseFloat(offers.price)
        if (offers?.lowPrice) return parseFloat(offers.lowPrice)
      }
    } catch {
      // skip
    }
  }
  // Fallback: szukaj ceny w meta
  const priceMatch = html.match(/property=["']product:price:amount["'][^>]*content=["'](\d+[\.,]?\d*)["']/i)
  if (priceMatch) return parseFloat(priceMatch[1].replace(',', '.'))
  return null
}

// ---------------------------------------------------------------------------
// Fetch competitor page with timeout
// ---------------------------------------------------------------------------

async function fetchPage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TakmaSEOBot/1.0)',
        'Accept': 'text/html',
      },
    })

    clearTimeout(timeout)

    if (!response.ok) return null

    const text = await response.text()
    // Limit do 500KB żeby nie ładować gigantycznych stron
    return text.slice(0, 500_000)
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Collect competitor snapshots
// ---------------------------------------------------------------------------

export async function collectCompetitors(serpResults: SerpKeywordResult[]): Promise<CompetitorData> {
  console.log(`[Competitor] Start — analiza stron konkurentów`)

  // Zbierz unikalne URL-e konkurentów z SERP → max 15 URL-ów
  const competitorUrls = new Map<string, string>() // url → competitor name
  const competitors = ['aspekt.net.pl', 'bcmarket.pl', 'zebrasklep.pl', 'strefadrukarek.pl', 'netselekt.pl']

  for (const result of serpResults) {
    for (const [competitor, position] of Object.entries(result.competitorPositions)) {
      if (position !== null && position <= 10 && competitors.includes(competitor)) {
        // URL nie jest bezpośrednio dostępny z CSE, więc konstruujemy go
        // Realnie: competitor URL byłby zapisany z CSE — tutaj używamy domeny
        const key = `${competitor}:${result.keyword}`
        if (!competitorUrls.has(key) && competitorUrls.size < 15) {
          competitorUrls.set(key, competitor)
        }
      }
    }
  }

  // Dla każdego unikalnego konkurenta, fetch ich stronę główną + top strony
  const snapshotsMap = new Map<string, CompetitorPageSnapshot>()

  for (const competitor of competitors) {
    const url = `https://${competitor}`
    if (snapshotsMap.has(url)) continue

    const html = await fetchPage(url)
    if (!html) {
      console.warn(`[Competitor] Nie udało się pobrać: ${url}`)
      continue
    }

    const title = extractTitle(html)
    const metaDescription = extractMetaDescription(html)
    const contentLength = extractTextLength(html)
    const schemaTypes = extractSchemaTypes(html)
    const faqCount = extractFaqCount(html)
    const price = extractPrice(html)

    const snapshot: CompetitorPageSnapshot = {
      competitor,
      url,
      title,
      metaDescription,
      contentLength,
      hasPrice: price !== null,
      price,
      hasFaq: faqCount > 0,
      faqCount,
      hasSchema: schemaTypes.length > 0,
      schemaTypes,
      contentHash: simpleHash(title + metaDescription + contentLength),
    }

    snapshotsMap.set(url, snapshot)
    console.log(`[Competitor] ${competitor}: title="${title.slice(0, 50)}...", content=${contentLength}, FAQ=${faqCount}, schemas=${schemaTypes.join(',')}`)

    // Throttle
    await new Promise(resolve => setTimeout(resolve, 300))
  }

  const snapshots = Array.from(snapshotsMap.values())
  console.log(`[Competitor] Zebrano ${snapshots.length} snapshotów`)

  return {
    snapshots,
    collectedAt: new Date().toISOString(),
  }
}
