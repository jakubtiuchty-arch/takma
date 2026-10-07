import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { lookupStock as jarltechLive } from '@/lib/jarltech'
import { prisma } from '@/lib/db'
import { isRibbonPN } from '@/data/transfer-ribbon-products'
import { products, isLabelPN, getCatalogNetPrice } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'
import type { JarltechStockInfo } from '@/lib/jarltech'
import { applyStockOverrides, MANUAL_STOCK_OVERRIDES } from '@/lib/stock-overrides'
import { selectPurchasePrice, resolveBlueStarUnitPrice } from '@/lib/price-selection'
import { zebraTerminalPartNumbers, stockCacheMaxAge } from '@/lib/zebra-terminal-catalog'
import { selectTerminalPurchasePrice, ZEBRA_TERMINAL_CACHE_MAX_AGE_MS, ZEBRA_TERMINAL_PRICE_MULTIPLIER } from '@/lib/zebra-terminal-pricing'

const MARGIN = 1.10        // 10% marży — standardowa dla większości produktów
const RIBBON_MARGIN = 1.20 // 20% marży dla taśm termotransferowych Zebra
const LABEL_MARGIN = 1.15  // 15% marży dla etykiet (termiczne + termotransferowe)
// Katalog Newland: uzupełnij brakujące dane Jarltech także przy zapasie w PL.
// Nowe numery nie trafiają od razu do rotacyjnego synchronizatora.
const newlandPNs = new Set(products.filter(p => p.manufacturerId === 'newland').flatMap(p =>
  p.variants?.length ? p.variants.map(v => v.partNumber) :
    p.specifications.filter(s => s.name === 'Part Number').map(s => s.value)
))

const VAT = 1.23           // 23% VAT

// ============================================
// KURS EUR/PLN z NBP API (cache 12h)
// ============================================

const EUR_RATE_FALLBACK = 4.30 // Awaryjny kurs gdyby NBP nie odpowiedzial
const EUR_CACHE_TTL = 12 * 60 * 60 * 1000 // 12h

let cachedEurRate: number | null = null
let eurRateCachedAt = 0

async function getEurPlnRate(): Promise<number> {
  if (cachedEurRate && (Date.now() - eurRateCachedAt) < EUR_CACHE_TTL) {
    return cachedEurRate
  }

  try {
    const res = await fetch(
      'https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json',
      { signal: AbortSignal.timeout(5000) }
    )
    if (!res.ok) throw new Error(`NBP HTTP ${res.status}`)
    const data = await res.json()
    const rate = data.rates?.[0]?.mid
    if (typeof rate === 'number' && rate > 0) {
      cachedEurRate = rate
      eurRateCachedAt = Date.now()
      console.log(`[EUR/PLN] Kurs NBP: ${rate}`)
      return rate
    }
    throw new Error('Brak kursu w odpowiedzi NBP')
  } catch (error) {
    console.warn(`[EUR/PLN] Blad NBP, fallback ${EUR_RATE_FALLBACK}:`, error)
    return cachedEurRate ?? EUR_RATE_FALLBACK
  }
}

async function readLiveJarltechWithDeadline(partNumbers: string[]): Promise<JarltechStockInfo[]> {
  let timeout: ReturnType<typeof setTimeout> | undefined
  try {
    return await Promise.race([
      jarltechLive(partNumbers),
      new Promise<JarltechStockInfo[]>((_, reject) => {
        timeout = setTimeout(() => reject(new Error('jarltech-live-timeout')),
          partNumbers.some(pn => zebraTerminalPartNumbers.has(pn)) ? 30_000 : 10_000)
      }),
    ])
  } finally {
    if (timeout) clearTimeout(timeout)
  }
}

export interface StockResponse {
  body: { results?: StockInfo[]; [key: string]: unknown }
  status: number
  headers?: Record<string, string>
}

function stockResponse(body: StockResponse['body'], init?: { status?: number; headers?: Record<string, string> }): StockResponse {
  return { body, status: init?.status ?? 200, headers: init?.headers }
}

/**
 * Wspólne źródło ofert dla API i renderowania po stronie serwera.
 *
 * `maxWiekCacheMs` skraca ważność wpisu w StockCache — starszy idzie do
 * dystrybutorów na żywo (i zapisuje się z powrotem do cache). Sklepowi
 * wystarcza doba, ale kreator oferty sprawdza stan tuż przed wysłaniem.
 */
export async function lookupUnifiedStock(
  partNumbers: string[],
  showDebug = false,
  opcje: { maxWiekCacheMs?: number } = {}
): Promise<StockResponse> {
  // Dystrybutorzy bez API: jeśli cały request dotyczy ręcznie utrzymywanych
  // stanów, odpowiedz od razu i nie czekaj na integracje zewnętrzne.
  if (partNumbers.every(pn => MANUAL_STOCK_OVERRIDES.has(pn.toUpperCase()))) {
    const now = new Date().toISOString()
    const results: StockInfo[] = partNumbers.map(partNumber => applyStockOverrides({
      partNumber,
      found: false,
      stockPL: 0,
      stockDE: 0,
      inDelivery: 0,
      totalStock: 0,
      availability: 'unavailable' as const,
      deliveryText: 'Brak danych z dystrybutora',
      lastSync: now,
    }))

    return stockResponse({
      results,
      count: results.length,
      found: results.length,
      _source: 'manual-stock-override',
      ...(showDebug ? { _debug: { manualStockOverrides: partNumbers } } : {}),
    })
  }

  try {
    // ============================================
    // STEP 1: Check StockCache + JarltechStockCache in parallel
    // Jarltech sync runs separately — if it shows more stock than StockCache,
    // override (StockCache may be stale because previous stock-sync ran while
    // jarltech-sync was still syncing).
    // ============================================
    const CACHE_MAX_AGE_MS = opcje.maxWiekCacheMs ?? 24 * 60 * 60 * 1000 // domyślnie 24h
    // Jarltech: wpisy starsze niż 7 dni traktujemy jak BRAK wpisu — jarltech-sync
    // rotuje pulę (~350 PN/przebieg), a stęchły stan (112 szt. z kwietnia przy
    // realnym 0) nie może zawyżać override'u. Brak wpisu = odpala się live
    // fallback (STEP 1b), który write-through odświeża cache.
    const JT_CACHE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000
    const cacheCheckTime = new Date()
    const jtFreshSince = new Date(cacheCheckTime.getTime() - JT_CACHE_MAX_AGE_MS)

    const [cachedRows, jarltechRows] = await Promise.all([
      prisma.stockCache.findMany({ where: { partNumber: { in: partNumbers } } }),
      prisma.jarltechStockCache.findMany({ where: { partNumber: { in: partNumbers }, lastSync: { gte: jtFreshSince } } }),
    ])

    const jarltechCacheMap = new Map(jarltechRows
      .filter(j => !zebraTerminalPartNumbers.has(j.partNumber) || cacheCheckTime.getTime() - j.lastSync.getTime() < ZEBRA_TERMINAL_CACHE_MAX_AGE_MS)
      .map(j => [j.partNumber, j]))
    const overriddenPNs: string[] = []

    const freshCache = new Map<string, typeof cachedRows[0]>()
    for (const row of cachedRows) {
      const age = cacheCheckTime.getTime() - row.lastSync.getTime()
      if (age >= stockCacheMaxAge(row.partNumber, CACHE_MAX_AGE_MS) || (!row.found && age >= 5 * 60 * 1000)) continue

      // Ponownie porównaj rażąco zawyżoną cenę z ceną katalogową i źródłami.
      const catalogPrice = getCatalogNetPrice(row.partNumber)
      if (catalogPrice && row.price && row.price > catalogPrice * 3) continue

      const j = jarltechCacheMap.get(row.partNumber)
      if (zebraTerminalPartNumbers.has(row.partNumber) && (!j || j.lastSync.getTime() > row.lastSync.getTime())) continue
      // Potwierdzony wpis Jarltech musi zastąpić wcześniejsze nieznalezienie,
      // również przy zerowym zapasie i oczekiwanej dostawie.
      if (j?.found && !row.found) continue

      // Override gdy Jarltech ma więcej inventory niż StockCache.stockDE.
      // Usunęlismy warunek `j.lastSync > row.lastSync` — jeśli jarltech-sync nie zaktualizował
      // wpisu (np. padł w środku batcha), ale poprzedni sync miał prawdziwe dane, nadal lepiej
      // pokazać stock niż "niedostępny". Jarltech cache refresh dzienny = max 24h stale.
      if (j && j.found && j.inventory > row.stockDE) {
        const newStockDE = Math.max(row.stockDE, j.inventory)
        const newTotalStock = row.stockPL + newStockDE + row.inDelivery
        freshCache.set(row.partNumber, {
          ...row,
          stockDE: newStockDE,
          totalStock: newTotalStock,
          availability: row.stockPL > 0 ? row.availability : 'available',
          deliveryText: row.stockPL > 0
            ? row.deliveryText
            : `Dostepny — wysylka 2-3 dni (${newStockDE} szt.)`,
          lastSync: j.lastSync,
        })
        overriddenPNs.push(row.partNumber)
      } else {
        freshCache.set(row.partNumber, row)
      }
    }

    // Także: PN brak w StockCache, ale Jarltech ma → trigger slow path (ceny wymagają EUR rate)
    // (uncachedPNs poniżej automatycznie obejmie te przypadki)

    // ============================================
    // STEP 1b: Live Jarltech fallback
    // Gdy brak wpisu Jarltech: niedostępne PN oraz nowe numery Newland, nawet z zapasem PL
    // (jarltech-sync nie dotarł do tego PN), wywołaj live Jarltech API.
    // Listing mieszany: limit 3 PN. Newland: do 24 PN, concurrency 4 w integracji. Timeout 10s.
    // Fire-and-forget write-through do JarltechStockCache dla przyszłych requestów.
    // ============================================
    const liveFallbackCandidates = Array.from(freshCache.values())
      .filter(c => !jarltechCacheMap.has(c.partNumber) && (c.availability === 'unavailable' || newlandPNs.has(c.partNumber)))
      .sort((a, b) => Number(newlandPNs.has(b.partNumber)) - Number(newlandPNs.has(a.partNumber)))
      .slice(0, partNumbers.every(pn => newlandPNs.has(pn)) ? 24 : 3)
      .map(c => c.partNumber)

    const liveFallbackResults: { pn: string; overridden: boolean; inventory: number }[] = []

    if (liveFallbackCandidates.length > 0) {
      try {
        const liveData = await readLiveJarltechWithDeadline(liveFallbackCandidates)

        for (const item of liveData) {
          if (!item.found) {
            liveFallbackResults.push({ pn: item.partNumber, overridden: false, inventory: item.inventory })
            continue
          }
          const c = freshCache.get(item.partNumber)
          if (!c) continue
          const newStockDE = Math.max(c.stockDE, item.inventory)
          const inDelivery = Math.max(c.inDelivery, item.incomingQty)
          const newTotalStock = c.stockPL + newStockDE + inDelivery
          const margin = isRibbonPN(item.partNumber) ? RIBBON_MARGIN : isLabelPN(item.partNumber) ? LABEL_MARGIN : MARGIN
          const price = c.price ?? (item.unitPrice ? Math.round(item.unitPrice * await getEurPlnRate() * margin * 100) / 100 : null)
          freshCache.set(item.partNumber, {
            ...c,
            found: true,
            price,
            priceBrutto: price == null ? null : Math.round(price * VAT * 100) / 100,
            stockDE: newStockDE,
            inDelivery,
            totalStock: newTotalStock,
            availability: c.stockPL > 0 || newStockDE > 0 ? 'available' : inDelivery > 0 ? 'on-order' : 'unavailable',
            deliveryText: c.stockPL > 0 ? c.deliveryText : item.deliveryText,
            lastSync: new Date(),
          })
          overriddenPNs.push(item.partNumber)
          liveFallbackResults.push({ pn: item.partNumber, overridden: true, inventory: item.inventory })

          // Fire-and-forget write-through do JarltechStockCache
          prisma.jarltechStockCache.upsert({
            where: { partNumber: item.partNumber },
            create: {
              partNumber: item.partNumber,
              found: true,
              unitPrice: item.unitPrice ?? null,
              currency: item.currency ?? 'EUR',
              inventory: item.inventory,
              incomingQty: item.incomingQty,
              incomingDate: item.incomingDate ?? null,
              totalStock: item.totalStock,
              jarltechId: item.jarltechId ?? null,
              availability: item.availability,
              deliveryText: item.deliveryText,
            },
            update: {
              found: true,
              unitPrice: item.unitPrice ?? null,
              inventory: item.inventory,
              incomingQty: item.incomingQty,
              incomingDate: item.incomingDate ?? null,
              totalStock: item.totalStock,
              jarltechId: item.jarltechId ?? null,
              availability: item.availability,
              deliveryText: item.deliveryText,
            },
          }).catch(err => console.error(`[API /stock] Jarltech live write-through fail ${item.partNumber}:`, err))
        }
      } catch (err) {
        console.warn('[API /stock] Jarltech live fallback failed:', err instanceof Error ? err.message : err)
      }
    }

    // If all PNs are in fresh cache, serve from cache (skip live API calls)
    const uncachedPNs = partNumbers.filter(pn => !freshCache.has(pn))

    if (uncachedPNs.length === 0) {
      // All PNs are in fresh cache — fast path
      const results: StockInfo[] = partNumbers.map(pn => {
        const c = freshCache.get(pn)!
        return {
          partNumber: c.partNumber,
          found: c.found,
          price: c.price ?? undefined,
          priceBrutto: c.priceBrutto ?? undefined,
          ingramPrice: c.ingramPrice ?? undefined,
          stockPL: c.stockPL,
          stockDE: c.stockDE,
          inDelivery: c.inDelivery,
          totalStock: c.totalStock,
          availability: c.availability as StockInfo['availability'],
          deliveryText: c.deliveryText ?? 'Brak danych',
          lastSync: c.lastSync.toISOString(),
        }
      })
      results.forEach(applyStockOverrides)

      // Background write-through: jeśli były override'y, zaktualizuj StockCache
      // (fire-and-forget — nie blokuje response)
      if (overriddenPNs.length > 0) {
        Promise.all(
          overriddenPNs.map(pn => {
            const c = freshCache.get(pn)!
            return prisma.stockCache.update({
              where: { partNumber: pn },
              data: {
                found: c.found,
                price: c.price,
                priceBrutto: c.priceBrutto,
                stockDE: c.stockDE,
                inDelivery: c.inDelivery,
                totalStock: c.totalStock,
                availability: c.availability,
                deliveryText: c.deliveryText,
              },
            }).catch(err => console.error(`[API /stock] Override write-back failed for ${pn}:`, err))
          })
        ).catch(() => {})
      }

      const response: Record<string, unknown> = {
        results,
        count: results.length,
        found: results.filter(r => r.found).length,
        _source: overriddenPNs.length > 0 ? 'stock-cache+jarltech-override' : 'stock-cache',
      }

      if (showDebug) {
        response._debug = {
          source: 'StockCache',
          cacheHits: partNumbers.length,
          cacheMisses: 0,
          jarltechOverrides: overriddenPNs,
          jarltechCacheLookup: partNumbers.map(pn => {
            const j = jarltechCacheMap.get(pn)
            return {
              pn,
              hit: !!j,
              found: j?.found ?? null,
              inventory: j?.inventory ?? null,
              lastSync: j?.lastSync?.toISOString() ?? null,
            }
          }),
          jarltechLiveFallback: liveFallbackResults,
        }
      }

      return stockResponse(response, {
        headers: { 'Cache-Control': partNumbers.some(pn => zebraTerminalPartNumbers.has(pn))
          ? 'private, no-store' : 'public, s-maxage=300, stale-while-revalidate=600' },
      })
    }

    // ============================================
    // STEP 2: Live API fallback for uncached PNs
    // (also includes Jarltech for M3 products)
    // ============================================

    // Jarltech: read from DB cache (synced by daily cron, not live)
    const jarltechFromCache = async (): Promise<JarltechStockInfo[]> => {
      try {
        const cached = await prisma.jarltechStockCache.findMany({
          where: { partNumber: { in: uncachedPNs }, lastSync: { gte: jtFreshSince } },
        })
        const liveTerminalPNs = uncachedPNs.filter(pn => zebraTerminalPartNumbers.has(pn) && !cached.some(c => c.partNumber === pn && Date.now() - c.lastSync.getTime() < ZEBRA_TERMINAL_CACHE_MAX_AGE_MS))
        const missingNewland = uncachedPNs.filter(pn => newlandPNs.has(pn) && !cached.some(c => c.partNumber === pn))
        const livePNs = Array.from(new Set([...liveTerminalPNs, ...missingNewland.slice(0, 24)]))
        const live: JarltechStockInfo[] = livePNs.length ? await readLiveJarltechWithDeadline(livePNs)
          .catch(err => { console.warn('[stock] Jarltech live fallback failed:', err); return [] }) : []
        // Zapis potwierdzonych ofert jest częścią odczytu — kolejny render nie gubi DE.
        await Promise.all(live.filter(item => item.found || zebraTerminalPartNumbers.has(item.partNumber)).map(item => {
          const data = {
            found: item.found, unitPrice: item.unitPrice ?? null, currency: item.currency ?? 'EUR',
            inventory: item.inventory, incomingQty: item.incomingQty, incomingDate: item.incomingDate ?? null,
            totalStock: item.totalStock, jarltechId: item.jarltechId ?? null,
            availability: item.availability, deliveryText: item.deliveryText, lastSync: new Date(),
          }
          return prisma.jarltechStockCache.upsert({
            where: { partNumber: item.partNumber }, create: { partNumber: item.partNumber, ...data }, update: data,
          }).catch(err => console.warn('[stock] Jarltech cache write failed:', item.partNumber, err))
        }))
        return [...live, ...cached.filter(c => !livePNs.includes(c.partNumber)).map(c => ({
          partNumber: c.partNumber,
          found: c.found,
          unitPrice: c.unitPrice ?? undefined,
          currency: c.currency ?? 'EUR',
          inventory: c.inventory,
          incomingQty: c.incomingQty,
          incomingDate: c.incomingDate ?? undefined,
          totalStock: c.totalStock,
          jarltechId: c.jarltechId ?? undefined,
          availability: c.availability as 'available' | 'on-order' | 'unavailable',
          deliveryText: c.deliveryText ?? '',
          lastSync: c.lastSync.toISOString(),
        }))]
      } catch (err) {
        console.error('[API /stock] Jarltech cache read error:', err)
        return []
      }
    }

    // Rownolegle: dwoch dystrybutorów live + Jarltech z cache DB + kurs EUR/PLN
    const [ingramResult, bluestarResult, jarltechResult, eurRate] = await Promise.all([
      Promise.allSettled([ingramLookup(uncachedPNs)]).then(r => r[0]),
      Promise.allSettled([bluestarLookup(uncachedPNs)]).then(r => r[0]),
      Promise.allSettled([jarltechFromCache()]).then(r => r[0]),
      getEurPlnRate(),
    ])

    const ingramData: StockInfo[] =
      ingramResult.status === 'fulfilled' ? ingramResult.value : []
    const bluestarData: BlueStarStockInfo[] =
      bluestarResult.status === 'fulfilled' ? bluestarResult.value : []
    const jarltechData: JarltechStockInfo[] =
      jarltechResult.status === 'fulfilled' ? jarltechResult.value : []

    if (ingramResult.status === 'rejected') {
      console.error('[API /stock] Ingram error:', ingramResult.reason)
    }
    if (bluestarResult.status === 'rejected') {
      console.error('[API /stock] BlueStar error:', bluestarResult.reason)
    }
    if (jarltechResult.status === 'rejected') {
      console.error('[API /stock] Jarltech error:', jarltechResult.reason)
    }

    // Mapuj wyniki po PN
    const ingramMap = new Map<string, StockInfo>()
    for (const item of ingramData) {
      ingramMap.set(item.partNumber, item)
    }

    const bluestarMap = new Map<string, BlueStarStockInfo>()
    for (const item of bluestarData) {
      bluestarMap.set(item.partNumber, item)
    }

    const jarltechMap = new Map<string, JarltechStockInfo>()
    for (const item of jarltechData) {
      jarltechMap.set(item.partNumber, item)
    }

    const now = new Date().toISOString()

    // Merge per PN (only uncached PNs — cached ones handled separately)
    const results: StockInfo[] = uncachedPNs.map(pn => {
      const ing = ingramMap.get(pn)
      const bs = bluestarMap.get(pn)
      const jl = jarltechMap.get(pn)

      const ingFound = ing?.found ?? false
      const bsFound = bs?.found ?? false
      const jlFound = jl?.found ?? false

      // Jesli zaden dystrybutor nie ma danych
      if (!ingFound && !bsFound && !jlFound) {
        return {
          partNumber: pn,
          found: false,
          stockPL: 0,
          stockDE: 0,
          inDelivery: 0,
          totalStock: 0,
          availability: 'unavailable' as const,
          deliveryText: 'Brak danych z dystrybutora',
          lastSync: now,
        }
      }

      // Stany magazynowe
      const stockPL = ing?.stockPL ?? 0 // Polski magazyn — tylko Ingram
      const stockDE = (ing?.stockDE ?? 0)
        + (bsFound ? (bs!.inventory ?? 0) : 0)
        + (jlFound ? (jl!.inventory ?? 0) : 0) // Ingram EU + BlueStar + Jarltech
      const inDelivery = (ing?.inDelivery ?? 0)
        + (bsFound ? (bs!.qtyExpected ?? 0) : 0)
        + (jlFound ? (jl!.incomingQty ?? 0) : 0)
      const totalStock = stockPL + stockDE + inDelivery

      // Cena: porównanie w PLN.
      // Korekta pakietowa. Kupujemy w kartonach/pakietach, sprzedajemy na sztuki (rolki),
      // więc cenę pakietu trzeba podzielić przez liczbę sztuk w pakiecie.
      //
      // BLUESTAR: `unitPrice` to ZAWSZE cena PAKIETU (kartonu). BlueStar podaje
      // `multipleQty` (= multipleQtyForSales) = liczba sztuk w kartonie. Dzielimy przez nią.
      //   - Etykiety: karton np. 4 rolki (multipleQty=4) — POTWIERDZONE na PN 3011713,
      //     gdzie BlueStar 117,48 EUR/karton ÷ 4 = 29,37 EUR/rolkę (≈ Jarltech 29,87 EUR/rolkę).
      //   - Taśmy: pakiet 6/12 rolek; gdy API nie poda multipleQty → fallback /12.
      //   - multipleQty=1 → brak podziału.
      // JARLTECH: dla TAŚM cena pakietu (jak BlueStar) → dziel; dla ETYKIET cena za 1 rolkę
      //   (PN 3011713: 29,87 EUR/rolkę) → NIE dziel.
      // INGRAM: zawsze cena per-szt. (PLN) → nigdy nie dzielimy.
      const isRibbon = isRibbonPN(pn)
      const bsPackagingUnit = bs?.multipleQty && bs.multipleQty > 1
        ? bs.multipleQty
        : (isRibbon ? 12 : 1)
      // Jarltech: cena ZA SZTUKĘ (potwierdzone: 03300GS08407 = 2 EUR = Ingram per-szt). NIE dzielimy.
      const jarltechPackagingUnit = 1

      const ingramPLN = ingFound ? ing!.ingramPrice : undefined
      let jarltechPLN: number | undefined
      if (jlFound && jl!.unitPrice) {
        const rawJarltechPLN = jl!.unitPrice * eurRate
        jarltechPLN = Math.round((rawJarltechPLN / jarltechPackagingUnit) * 100) / 100
      }
      // BlueStar: pakiet czy sztuka rozstrzyga cena za sztukę z Jarltecha/Ingrama, a gdy
      // BlueStar jest jedynym źródłem — cena katalogowa (patrz lib/price-selection)
      const bluestarPLN = (bsFound && bs!.unitPrice)
        ? resolveBlueStarUnitPrice(bs!.unitPrice * eurRate, bs!.multipleQty, jarltechPLN ?? ingramPLN ?? getCatalogNetPrice(pn), bsPackagingUnit).price
        : undefined

      // Wybór ceny zakupu z bezpiecznikiem dwustronnym — patrz lib/price-selection.
      // Odrzuca źródła rażąco poniżej Ingrama (błąd pakietowy) ORAZ samego Ingrama,
      // gdy to on podaje cenę odstającą w górę (ET401EA-3V101F2P-A6: 164 922 zł
      // wobec 547 EUR w Jarltechu).
      const sourcePrices = { ingram: ingramPLN, bluestar: bluestarPLN, jarltech: jarltechPLN }
      const selection = zebraTerminalPartNumbers.has(pn)
        ? selectTerminalPurchasePrice(sourcePrices, { ingram: (ing?.stockPL ?? 0) + (ing?.stockDE ?? 0), bluestar: bs?.inventory ?? 0, jarltech: jl?.inventory ?? 0 }, getCatalogNetPrice(pn))
        : selectPurchasePrice(sourcePrices, getCatalogNetPrice(pn))
      const catalogPrice = getCatalogNetPrice(pn)
      // Jedno błędne źródło nie może zastąpić zweryfikowanej ceny katalogowej.
      const bestRawPricePLN = catalogPrice && selection.best && selection.best > catalogPrice * 3
        ? undefined
        : selection.best
      if (selection.ingramSuspect) {
        console.warn(`[stock] ${pn}: ${selection.rejected.map((r) => `${r.source} ${r.reason}`).join('; ')}`)
      }

      let price: number | undefined
      let priceBrutto: number | undefined
      let ingramPrice: number | undefined

      if (bestRawPricePLN != null && bestRawPricePLN > 0) {
        const marginForPN = zebraTerminalPartNumbers.has(pn) ? ZEBRA_TERMINAL_PRICE_MULTIPLIER : isRibbonPN(pn) ? RIBBON_MARGIN : isLabelPN(pn) ? LABEL_MARGIN : MARGIN
        price = Math.round(bestRawPricePLN * marginForPN * 100) / 100
        priceBrutto = Math.round(price * VAT * 100) / 100
        ingramPrice = bestRawPricePLN // Najlepsza cena zakupu PLN
      }


      // Availability & delivery text
      let availability: StockInfo['availability']
      let deliveryText: string

      if (stockPL > 0) {
        availability = 'available'
        deliveryText = `Dostepny — wysylka 24h (${stockPL} szt.)`
      } else if (stockDE > 0) {
        availability = 'available'
        deliveryText = `Dostepny — wysylka 2-3 dni (${stockDE} szt.)`
      } else if (inDelivery > 0) {
        availability = 'on-order'
        deliveryText = `W dostawie (${inDelivery} szt.)`
      } else {
        availability = 'unavailable'
        deliveryText = 'Niedostepny'
      }

      // ETA dostawy — Jarltech jako jedyny dostarcza daty
      const incomingDate = jlFound ? jl!.incomingDate : undefined

      return {
        partNumber: pn,
        found: true,
        price,
        priceBrutto,
        ingramPrice,
        stockPL,
        stockDE,
        inDelivery,
        incomingDate,
        totalStock,
        availability,
        deliveryText,
        lastSync: now,
      }
    })
    results.forEach(applyStockOverrides)

    // Write-through: save live results to StockCache for future requests
    // Fire-and-forget — don't block the response
    const cacheWrite = Promise.all(
      results.map(r =>
        prisma.stockCache.upsert({
          where: { partNumber: r.partNumber },
          create: {
            partNumber: r.partNumber,
            found: r.found,
            price: r.price ?? null,
            priceBrutto: r.priceBrutto ?? null,
            ingramPrice: r.ingramPrice ?? null,
            stockPL: r.stockPL,
            stockDE: r.stockDE,
            inDelivery: r.inDelivery,
            totalStock: r.totalStock,
            availability: r.availability,
            deliveryText: r.deliveryText,
          },
          update: {
            found: r.found,
            price: r.price ?? null,
            priceBrutto: r.priceBrutto ?? null,
            ingramPrice: r.ingramPrice ?? null,
            stockPL: r.stockPL,
            stockDE: r.stockDE,
            inDelivery: r.inDelivery,
            totalStock: r.totalStock,
            availability: r.availability,
            deliveryText: r.deliveryText,
          },
        }).catch(err => {
          console.error(`[API /stock] Cache write error for ${r.partNumber}:`, err)
          if (zebraTerminalPartNumbers.has(r.partNumber)) throw err
        })
      )
    )

    // Cron i terminale muszą zakończyć trwały zapis ceny przed odpowiedzią.
    if (partNumbers.some(pn => zebraTerminalPartNumbers.has(pn))) await cacheWrite

    // Merge cached results with live results for partially-cached requests
    const finalResults: StockInfo[] = partNumbers.map(pn => {
      // First check live results
      const liveResult = results.find(r => r.partNumber === pn)
      if (liveResult) return liveResult
      // Then check fresh cache
      const cached = freshCache.get(pn)
      if (cached) {
        return {
          partNumber: cached.partNumber,
          found: cached.found,
          price: cached.price ?? undefined,
          priceBrutto: cached.priceBrutto ?? undefined,
          ingramPrice: cached.ingramPrice ?? undefined,
          stockPL: cached.stockPL,
          stockDE: cached.stockDE,
          inDelivery: cached.inDelivery,
          totalStock: cached.totalStock,
          availability: cached.availability as StockInfo['availability'],
          deliveryText: cached.deliveryText ?? 'Brak danych',
          lastSync: cached.lastSync.toISOString(),
        }
      }
      // Should not happen, but fallback
      return liveResult ?? {
        partNumber: pn,
        found: false,
        stockPL: 0,
        stockDE: 0,
        inDelivery: 0,
        totalStock: 0,
        availability: 'unavailable' as const,
        deliveryText: 'Brak danych z dystrybutora',
        lastSync: now,
      }
    })
    finalResults.forEach(applyStockOverrides)

    const response: Record<string, unknown> = {
      results: finalResults,
      count: finalResults.length,
      found: finalResults.filter(r => r.found).length,
      _source: uncachedPNs.length === partNumbers.length ? 'live' : 'mixed',
    }

    if (showDebug) {
      response._debug = {
        eurRate,
        envPresent: {
          BLUESTAR_CLIENT_ID: !!process.env.BLUESTAR_CLIENT_ID,
          BLUESTAR_CLIENT_SECRET: !!process.env.BLUESTAR_CLIENT_SECRET,
          BLUESTAR_CUSTOMER_NO: !!process.env.BLUESTAR_CUSTOMER_NO,
          BLUESTAR_API_KEY: !!process.env.BLUESTAR_API_KEY,
          JARLTECH_CUSTOMER_ID: !!process.env.JARLTECH_CUSTOMER_ID,
          JARLTECH_CLIENT_ID: !!process.env.JARLTECH_CLIENT_ID,
          JARLTECH_CLIENT_SECRET: !!process.env.JARLTECH_CLIENT_SECRET,
        },
        ingram: {
          status: ingramResult.status,
          count: ingramData.length,
          foundCount: ingramData.filter(r => r.found).length,
          error: ingramResult.status === 'rejected' ? String(ingramResult.reason) : undefined,
        },
        bluestar: {
          status: bluestarResult.status,
          count: bluestarData.length,
          foundCount: bluestarData.filter(r => r.found).length,
          items: bluestarData.map(b => ({ pn: b.partNumber, found: b.found, inv: b.inventory, eur: b.unitPrice })),
          error: bluestarResult.status === 'rejected' ? String(bluestarResult.reason) : undefined,
        },
        jarltech: {
          status: jarltechResult.status,
          count: jarltechData.length,
          foundCount: jarltechData.filter(r => r.found).length,
          items: jarltechData.map(j => ({
            pn: j.partNumber,
            found: j.found,
            inv: j.inventory,
            eur: j.unitPrice,
            incoming: j.incomingQty,
            incomingDate: j.incomingDate,
            jid: j.jarltechId,
          })),
          error: jarltechResult.status === 'rejected' ? String(jarltechResult.reason) : undefined,
        },
      }
    }

    // Nie cachuj pustych odpowiedzi — mogą wynikać z timeoutu dystrybutora
    const anyFound = finalResults.some(r => r.found)
    const cacheHeader = partNumbers.some(pn => zebraTerminalPartNumbers.has(pn))
      ? 'private, no-store'
      : anyFound
      ? 'public, s-maxage=300, stale-while-revalidate=600'
      : 'public, s-maxage=30, stale-while-revalidate=30'

    return stockResponse(response, {
      headers: {
        'Cache-Control': cacheHeader,
      },
    })
  } catch (error) {
    console.error('[API /stock] Blad:', error)
    return stockResponse(
      { error: 'Blad pobierania danych magazynowych' },
      { status: 500 }
    )
  }
}
