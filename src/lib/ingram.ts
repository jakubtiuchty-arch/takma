/**
 * Integracja z Ingram Micro 24 IMCEE-XML 2.0 API dla TAKMA
 *
 * Metoda PnA (Price and Availability) — sprawdzanie cen i dostępności
 * do 50 produktów na jedno zapytanie.
 *
 * Endpoint: https://www.ingrammicro24.com/en/imapi/request
 * Dokumentacja: API_Ingram.pdf (IMCEE-XML 2.0)
 */

const INGRAM_API_URL = 'https://www.ingrammicro24.com/en/imapi/request'
const INGRAM_API_KEY = process.env.INGRAM_API_KEY

const MARGIN = 1.15 // 15% marży
const VAT = 1.23    // 23% VAT

// ============================================
// TYPY
// ============================================

export interface StockInfo {
  partNumber: string
  found: boolean
  price?: number         // Netto z marżą
  priceBrutto?: number   // Brutto
  ingramPrice?: number   // Surowa cena Ingram (YourPrice)
  stockPL: number        // Magazyn lokalny (PL) — dostawa 24h
  stockDE: number        // Magazyn centralny (DE) — dostawa 2-3 dni
  inDelivery: number     // W dostawie
  totalStock: number
  availability: 'available' | 'on-order' | 'unavailable'
  deliveryText: string
  lastSync: string
}

// ============================================
// CACHE W PAMIĘCI
// ============================================

const CACHE_TTL = 60 * 60 * 1000           // 1 godzina dla wyników found: true
const CACHE_TTL_NOT_FOUND = 5 * 60 * 1000 // 5 minut dla wyników found: false
const ERROR_COOLDOWN = 30 * 1000           // 30s po błędzie (skrócony — batching eliminuje flooding)

const stockCache = new Map<string, { data: StockInfo; cachedAt: number }>()
let lastErrorAt = 0

// ============================================
// KOLEJKA REQUESTÓW — jeden request na raz do Ingram
// ============================================

let requestQueue: Promise<void> = Promise.resolve()

function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  const result = requestQueue.then(fn, fn)
  requestQueue = result.then(() => {}, () => {})
  return result
}

function getCached(pn: string): StockInfo | null {
  const entry = stockCache.get(pn)
  if (!entry) return null
  const ttl = entry.data.found ? CACHE_TTL : CACHE_TTL_NOT_FOUND
  if ((Date.now() - entry.cachedAt) < ttl) {
    return entry.data
  }
  return null
}

function setCached(pn: string, data: StockInfo) {
  stockCache.set(pn, { data, cachedAt: Date.now() })
}

function isErrorCooldown(): boolean {
  return lastErrorAt > 0 && (Date.now() - lastErrorAt) < ERROR_COOLDOWN
}

// ============================================
// XML HELPERS
// ============================================

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function extractTag(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`)
  const match = xml.match(regex)
  return match ? match[1].trim() : null
}

function extractAttribute(xml: string, tag: string, attr: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`)
  const match = xml.match(regex)
  return match ? match[1] : null
}

// ============================================
// PnA REQUEST — zgodnie z IMCEE-XML 2.0
// ============================================

/**
 * Konwertuje Part Number na Ingram ItemID.
 * Zebra printers (PN starts with Z, P, K) → prefix ZB (Zebra)
 * Symbol-heritage mobile/accessories (PN starts with W, MC, TC, CC, SG, CRD, SAC, BTRY, TRG, CBL) → prefix SB
 * Newland (PN starts with N7-, MT93, NLS-, TPUN7, SPN7, BTY7) → prefix N1
 * Honeywell (PN starts with CT, CK, EDA, 50, 1990, 1991, 2100, 2105) → prefix ON
 * Np. ZD4A042-30EM00EZ → ZBZD4A042-30EM00EZ
 * Np. WLMT0-T22B6ABC2-A6 → SBWLMT0-T22B6ABC2-A6
 * Np. N7-PRO-W4-E3 → N1N7-PRO-W4-E3
 * Np. CT70-L0N-057CS104G → ONCT70-L0N-057CS104G
 */
function toIngramItemId(partNumber: string): string {
  const upper = partNumber.toUpperCase()
  if (upper.startsWith('ZB') || upper.startsWith('SB') || upper.startsWith('N1') || upper.startsWith('ON')) return upper
  // Honeywell products (terminals CT/CK/EDA, printers PX/PM/PD/PC, scanners 14xx/19xx/21xx, accessories/batteries 50xxx/225xxx)
  if (upper.startsWith('CT7') || upper.startsWith('CT3') || upper.startsWith('CT4') || upper.startsWith('CK') || upper.startsWith('EDA') || upper.startsWith('PX') || upper.startsWith('PM') || upper.startsWith('PD') || upper.startsWith('PC4') || upper.startsWith('RP') || upper.startsWith('501') || upper.startsWith('225') || upper.startsWith('211') || upper.startsWith('220') || upper.startsWith('280') || upper.startsWith('510') || upper.startsWith('750') || upper.startsWith('2105') || upper.startsWith('2100') || upper.startsWith('1990') || upper.startsWith('1991') || upper.startsWith('1962') || upper.startsWith('1960') || upper.startsWith('1470') || upper.startsWith('1472')) return 'ON' + upper
  // Newland products (terminals N7-*, MT93-*, MT95-*, accessories NLS-*, TPUN7*, SPN7*, BTY7*, BTY-MT*, HS-MT*, SPMT*)
  if (upper.startsWith('N7-') || upper.startsWith('MT93') || upper.startsWith('MT95') || upper.startsWith('NLS-') || upper.startsWith('TPUN7') || upper.startsWith('SPN7') || upper.startsWith('BTY7') || upper.startsWith('BTY-MT') || upper.startsWith('HS-MT') || upper.startsWith('SPMT')) return 'N1' + upper
  // Symbol-heritage products (terminale mobilne, skanery, akcesoria mobilne)
  const sbPrefixes = ['W', 'MC', 'TC', 'CC', 'EM', 'ET', 'DS', 'LI', 'CBA-', 'SG-', 'CRD-', 'SAC-', 'BTRY-', 'TRG-', 'CBL-', 'Z1A', '20-']
  for (const prefix of sbPrefixes) {
    if (upper.startsWith(prefix)) return 'SB' + upper
  }
  return 'ZB' + upper
}

/**
 * Buduje XML żądania PnA zgodnie z dokumentacją IMCEE-XML 2.0.
 *
 * Format:
 * <PNARequest>
 *   <TransactionHeader>
 *     <APIKey>...</APIKey>
 *     <MyPriceCurrency>PLN</MyPriceCurrency>
 *   </TransactionHeader>
 *   <PNAInformations>
 *     <PNAInformation ItemID="ZBZD4A042-30EM00EZ"/>
 *   </PNAInformations>
 * </PNARequest>
 */
function buildPnARequest(itemIds: string[]): string {
  const items = itemIds
    .map(id => `        <PNAInformation ItemID="${escapeXml(id)}"/>`)
    .join('\n')

  return `<PNARequest>
    <TransactionHeader>
        <APIKey>${INGRAM_API_KEY}</APIKey>
        <MyPriceCurrency>PLN</MyPriceCurrency>
    </TransactionHeader>
    <PNAInformations>
${items}
    </PNAInformations>
</PNARequest>`
}

// ============================================
// PnA RESPONSE PARSING — zgodnie z dokumentacją
// ============================================

interface PnAProduct {
  itemId: string
  vpn: string
  yourPrice: number
  currency: string
  qtyTotalAvailable: number
  qtyLocalWarehouse: number
  qtyLocalInDelivery: number
  warehouses: {
    name: string
    countryCode: string
    leadTime: number
    qtyAvailable: number
    qtyInDelivery: number
  }[]
}

function parsePnAResponse(xml: string): { products: PnAProduct[]; errors: string[] } {
  const errors: string[] = []
  const products: PnAProduct[] = []

  // Sprawdź błędy w odpowiedzi
  const errorRegex = /<Error[^>]*>([^<]*)<\/Error>/g
  let errorMatch
  while ((errorMatch = errorRegex.exec(xml)) !== null) {
    if (errorMatch[1].trim()) {
      errors.push(errorMatch[1].trim())
    }
  }

  // Parsuj produkty: <Product>...</Product>
  const productRegex = /<Product>([\s\S]*?)<\/Product>/g
  let productMatch

  while ((productMatch = productRegex.exec(xml)) !== null) {
    const p = productMatch[1]

    const itemId = extractTag(p, 'ItemID') || ''
    const vpn = extractTag(p, 'VPN') || ''
    const yourPrice = parseFloat(extractTag(p, 'YourPrice') || '0')
    const currency = extractTag(p, 'Currency') || 'PLN'

    // Dostępność
    const qtyTotalAvailable = parseInt(extractTag(p, 'QtyTotalAvailable') || '0')
    const qtyLocalWarehouse = parseInt(extractTag(p, 'QtyLocalWarehouseAvailable') || '0')
    const qtyLocalInDelivery = parseInt(extractTag(p, 'QtyLocalWarehouseAvailableInDelivery') || '0')

    // Dodatkowe magazyny
    const warehouses: PnAProduct['warehouses'] = []
    const warehouseRegex = /<Warehouse>([\s\S]*?)<\/Warehouse>/g
    let whMatch
    while ((whMatch = warehouseRegex.exec(p)) !== null) {
      const wh = whMatch[1]
      warehouses.push({
        name: extractTag(wh, 'Name') || '',
        countryCode: extractTag(wh, 'CountryCode') || '',
        leadTime: parseInt(extractTag(wh, 'AdditionalLeadTime') || '0'),
        qtyAvailable: parseInt(extractTag(wh, 'QtyAvailable') || '0'),
        qtyInDelivery: parseInt(extractTag(wh, 'QtyAvailableInDelivery') || '0'),
      })
    }

    products.push({
      itemId,
      vpn,
      yourPrice,
      currency,
      qtyTotalAvailable,
      qtyLocalWarehouse,
      qtyLocalInDelivery,
      warehouses,
    })
  }

  return { products, errors }
}

// ============================================
// WYSYŁANIE ŻĄDANIA
// ============================================

async function sendPnARequest(xmlBody: string): Promise<{ products: PnAProduct[]; errors: string[] }> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30s timeout

    console.log('[Ingram PnA] Wysyłam zapytanie...')

    let response = await fetch(INGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
      },
      body: xmlBody,
      signal: controller.signal,
    })

    // Retry po 429 (rate limit) — czekaj 3s i spróbuj ponownie
    if (response.status === 429) {
      console.warn('[Ingram PnA] Rate limit (429), retry za 3s...')
      await new Promise(r => setTimeout(r, 3000))
      response = await fetch(INGRAM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml; charset=utf-8' },
        body: xmlBody,
        signal: controller.signal,
      })
    }

    clearTimeout(timeoutId)

    const xmlText = await response.text()

    if (!response.ok) {
      console.error(`[Ingram PnA] HTTP ${response.status}: ${response.statusText}`)
      lastErrorAt = Date.now()
      return { products: [], errors: [`HTTP ${response.status}`] }
    }

    console.log(`[Ingram PnA] Odpowiedź: ${xmlText.length} znaków`)

    const result = parsePnAResponse(xmlText)

    if (result.errors.length > 0) {
      console.warn(`[Ingram PnA] Błędy API: ${result.errors.join(', ')}`)
    }

    console.log(`[Ingram PnA] Sparsowano ${result.products.length} produktów`)
    return result

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('[Ingram PnA] Timeout po 30s')
    } else {
      console.error('[Ingram PnA] Błąd:', error)
    }
    lastErrorAt = Date.now()
    return { products: [], errors: ['Timeout lub błąd połączenia'] }
  }
}

// ============================================
// GŁÓWNA FUNKCJA — SPRAWDZANIE STANÓW
// ============================================

/**
 * Sprawdza stany magazynowe i ceny dla podanych Part Numberów.
 * Używa IMCEE-XML 2.0 PnA z cache per PN (TTL 1h).
 */
export async function lookupStock(partNumbers: string[]): Promise<StockInfo[]> {
  const now = new Date().toISOString()

  // Sprawdź cache
  const uncached: string[] = []
  for (const pn of partNumbers) {
    if (!getCached(pn)) {
      uncached.push(pn)
    }
  }

  if (uncached.length === 0) {
    return partNumbers.map(pn => getCached(pn)!)
  }

  // Error cooldown — nie zalewaj API po błędzie
  if (isErrorCooldown()) {
    for (const pn of uncached) {
      setCached(pn, makeEmptyResult(pn, now))
    }
    return partNumbers.map(pn => getCached(pn) || makeEmptyResult(pn, now))
  }

  if (!INGRAM_API_KEY) {
    console.warn('[Ingram PnA] Brak INGRAM_API_KEY')
    for (const pn of uncached) {
      setCached(pn, makeEmptyResult(pn, now))
    }
    return partNumbers.map(pn => getCached(pn) || makeEmptyResult(pn, now))
  }

  // Konwertuj Part Numbery na Ingram ItemID
  const itemIds = uncached.map(pn => toIngramItemId(pn))
  const xmlBody = buildPnARequest(itemIds)

  console.log(`[Ingram PnA] Sprawdzam ${uncached.length} PN: ${uncached.join(', ')}`)

  // Kolejka — jeden request na raz, żeby nie zalewać Ingram
  const { products, errors } = await enqueue(() => sendPnARequest(xmlBody))

  // Jeśli same błędy i żadnych produktów — oznacz cooldown
  if (products.length === 0 && errors.length > 0) {
    lastErrorAt = Date.now()
    for (const pn of uncached) {
      setCached(pn, makeEmptyResult(pn, now))
    }
    return partNumbers.map(pn => getCached(pn) || makeEmptyResult(pn, now))
  }

  // Mapuj produkty na Part Numbery po VPN i ItemID
  const byVpn = new Map<string, PnAProduct>()
  const byItemId = new Map<string, PnAProduct>()

  for (const product of products) {
    if (product.vpn) {
      byVpn.set(product.vpn.toUpperCase(), product)
    }
    if (product.itemId) {
      byItemId.set(product.itemId.toUpperCase(), product)
      // Mapuj też bez prefiksu ZB/SB/N1
      const noZb = product.itemId.toUpperCase().replace(/^(ZB|SB|N1)/, '')
      byItemId.set(noZb, product)
    }
  }

  for (const pn of uncached) {
    const pnUpper = pn.toUpperCase()
    const ingramId = toIngramItemId(pn)

    // Szukaj po VPN (Part Number), potem po ItemID
    const found =
      byVpn.get(pnUpper) ||
      byItemId.get(ingramId) ||
      byItemId.get(pnUpper)

    if (!found) {
      setCached(pn, makeEmptyResult(pn, now))
      continue
    }

    // Cena: YourPrice to cena zakupu, dodajemy marżę
    const priceNetto = Math.round(found.yourPrice * MARGIN * 100) / 100
    const priceBrutto = Math.round(priceNetto * VAT * 100) / 100

    // Stany magazynowe
    const stockPL = found.qtyLocalWarehouse
    const inDeliveryLocal = found.qtyLocalInDelivery

    // Magazyn DE — szukaj w dodatkowych magazynach
    let stockDE = 0
    let inDeliveryDE = 0
    for (const wh of found.warehouses) {
      const cc = wh.countryCode.toUpperCase()
      if (cc === 'DE' || cc === 'HU' || cc === 'CZ') {
        stockDE += wh.qtyAvailable
        inDeliveryDE += wh.qtyInDelivery
      }
    }

    const totalStock = found.qtyTotalAvailable
    const inDelivery = inDeliveryLocal + inDeliveryDE

    let availability: StockInfo['availability']
    let deliveryText: string

    if (stockPL > 0) {
      availability = 'available'
      deliveryText = `Dostępny — wysyłka 24h (${stockPL} szt.)`
    } else if (stockDE > 0) {
      availability = 'available'
      deliveryText = `Dostępny — wysyłka 2-3 dni (${stockDE} szt.)`
    } else if (inDelivery > 0) {
      availability = 'on-order'
      deliveryText = `W dostawie (${inDelivery} szt.)`
    } else {
      availability = 'unavailable'
      deliveryText = 'Niedostępny'
    }

    const result: StockInfo = {
      partNumber: pn,
      found: true,
      price: priceNetto,
      priceBrutto,
      ingramPrice: found.yourPrice,
      stockPL,
      stockDE,
      inDelivery,
      totalStock,
      availability,
      deliveryText,
      lastSync: now,
    }

    setCached(pn, result)
  }

  return partNumbers.map(pn => getCached(pn) || makeEmptyResult(pn, now))
}

function makeEmptyResult(pn: string, now: string): StockInfo {
  return {
    partNumber: pn,
    found: false,
    stockPL: 0,
    stockDE: 0,
    inDelivery: 0,
    totalStock: 0,
    availability: 'unavailable',
    deliveryText: 'Brak danych z dystrybutora',
    lastSync: now,
  }
}

/**
 * Konwertuje Part Number Zebra na format Ingram ItemID
 * ZD4A042-30EM00EZ → ZBZD4A042-30EM00EZ
 */
export function convertSkuToIngram(sku: string): string {
  return toIngramItemId(sku)
}
