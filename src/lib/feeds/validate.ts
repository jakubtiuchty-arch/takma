/**
 * Walidacja feedów porównywarek (Ceneo, Google Merchant).
 * Pobiera feed po HTTP, parsuje (regexem — bez zależności), sprawdza:
 *  - osiągalność i niepustość,
 *  - braki wymaganych pól (cena, zdjęcie, nazwa, url),
 *  - ceny ≤ 0 i podejrzanie niskie (< progu = ryzyko sprzedaży poniżej kosztu),
 *  - duplikaty ID,
 *  - nagły spadek liczby ofert względem poprzedniego runu (feed „padł").
 */

export type FeedKind = 'ceneo' | 'merchant'

// Cena brutto poniżej tej wartości = sygnał błędu (np. dawny bug taśm 0,85 zł).
const LOW_PRICE_FLOOR = 1.0
// Spadek liczby ofert o tyle względem poprzedniego runu = alarm.
const DROP_RATIO = 0.7

export interface FeedValidationResult {
  feed: FeedKind
  url: string
  ok: boolean
  httpStatus: number
  totalOffers: number
  withEan: number
  minPrice: number | null
  maxPrice: number | null
  errors: string[]
  warnings: string[]
  durationMs: number
}

interface ParsedOffer {
  id: string
  price: number | null
  hasImage: boolean
  hasName: boolean
  hasUrl: boolean
  hasEan: boolean
}

function parseCeneo(body: string): ParsedOffer[] {
  const blocks = body.match(/<o\b[\s\S]*?<\/o>/g) || []
  return blocks.map((b) => {
    const price = b.match(/<o\b[^>]*\bprice="([^"]*)"/)?.[1]
    return {
      id: b.match(/<o\b[^>]*\bid="([^"]*)"/)?.[1] || '',
      price: price != null ? parseFloat(price) : null,
      hasImage: /<main\s+url="[^"]+"/.test(b),
      hasName: /<name>[\s\S]*?<\/name>/.test(b),
      hasUrl: /<o\b[^>]*\burl="[^"]+"/.test(b),
      hasEan: /<a name="EAN">/.test(b),
    }
  })
}

function parseMerchant(body: string): ParsedOffer[] {
  const blocks = body.match(/<item>[\s\S]*?<\/item>/g) || []
  return blocks.map((b) => {
    const price = b.match(/<g:price>([\d.]+)/)?.[1]
    return {
      id: b.match(/<g:id>([^<]*)<\/g:id>/)?.[1] || '',
      price: price != null ? parseFloat(price) : null,
      hasImage: /<g:image_link>[^<]+<\/g:image_link>/.test(b),
      hasName: /<title>[\s\S]*?<\/title>/.test(b),
      hasUrl: /<link>[^<]+<\/link>/.test(b),
      hasEan: /<g:gtin>[^<]+<\/g:gtin>/.test(b),
    }
  })
}

export async function validateFeed(
  feed: FeedKind,
  url: string,
  prevTotal?: number | null,
): Promise<FeedValidationResult> {
  const start = Date.now()
  const errors: string[] = []
  const warnings: string[] = []
  let httpStatus = 0
  let offers: ParsedOffer[] = []

  try {
    const res = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(45000) })
    httpStatus = res.status
    const body = await res.text()

    if (!res.ok) {
      errors.push(`Feed nieosiągalny — HTTP ${res.status}`)
    } else if (feed === 'ceneo' && !/<offers[\s>]/.test(body)) {
      errors.push('Brak elementu <offers> — feed uszkodzony lub to nie XML Ceneo')
    } else if (feed === 'merchant' && !/<rss[\s>]/.test(body)) {
      errors.push('Brak elementu <rss> — feed uszkodzony lub to nie XML Google')
    } else {
      offers = feed === 'ceneo' ? parseCeneo(body) : parseMerchant(body)
    }
  } catch (e) {
    errors.push(`Błąd pobierania feedu: ${(e as Error).message}`)
  }

  const total = offers.length
  const withEan = offers.filter((o) => o.hasEan).length
  const prices = offers.map((o) => o.price).filter((p): p is number => p != null && !isNaN(p))
  const minPrice = prices.length ? Math.min(...prices) : null
  const maxPrice = prices.length ? Math.max(...prices) : null

  if (errors.length === 0 && total === 0) {
    errors.push('Feed pusty — 0 ofert')
  }

  // Spadek liczby ofert względem poprzedniego runu
  if (prevTotal && total > 0 && total < prevTotal * DROP_RATIO) {
    const pct = Math.round((1 - total / prevTotal) * 100)
    errors.push(`Spadek liczby ofert: ${prevTotal} → ${total} (-${pct}%)`)
  }

  // Ceny ≤ 0 i poniżej progu (ryzyko poniżej kosztu)
  const zeroPrice = offers.filter((o) => o.price == null || o.price <= 0)
  if (zeroPrice.length) {
    errors.push(`Ceny ≤ 0 lub brak ceny: ${zeroPrice.length} (${zeroPrice.slice(0, 8).map((o) => o.id).join(', ')})`)
  }
  const lowPrice = offers.filter((o) => o.price != null && o.price > 0 && o.price < LOW_PRICE_FLOOR)
  if (lowPrice.length) {
    errors.push(`Ceny podejrzanie niskie (< ${LOW_PRICE_FLOOR} zł): ${lowPrice.length} (${lowPrice.slice(0, 8).map((o) => o.id).join(', ')})`)
  }

  // Duplikaty ID
  const seen = new Set<string>()
  const dups = new Set<string>()
  for (const o of offers) {
    if (o.id && seen.has(o.id)) dups.add(o.id)
    if (o.id) seen.add(o.id)
  }
  if (dups.size) warnings.push(`Zduplikowane ID: ${dups.size} (${Array.from(dups).slice(0, 8).join(', ')})`)

  // Braki pól
  const noImg = offers.filter((o) => !o.hasImage).length
  if (noImg) warnings.push(`Bez zdjęcia: ${noImg}`)
  const noUrl = offers.filter((o) => !o.hasUrl).length
  if (noUrl) warnings.push(`Bez URL: ${noUrl}`)
  const noName = offers.filter((o) => !o.hasName).length
  if (noName) warnings.push(`Bez nazwy: ${noName}`)

  // Niski udział EAN
  if (total > 0 && withEan / total < 0.3) {
    warnings.push(`Niski udział EAN: ${withEan}/${total} (${Math.round((withEan / total) * 100)}%)`)
  }

  return {
    feed,
    url,
    ok: errors.length === 0,
    httpStatus,
    totalOffers: total,
    withEan,
    minPrice,
    maxPrice,
    errors,
    warnings,
    durationMs: Date.now() - start,
  }
}
