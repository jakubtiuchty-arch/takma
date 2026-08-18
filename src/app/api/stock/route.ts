import { NextRequest, NextResponse } from 'next/server'
import { lookupStock as ingramLookup } from '@/lib/ingram'
import { lookupStock as bluestarLookup } from '@/lib/bluestar'
import { lookupStock as jarltechLive } from '@/lib/jarltech'
import { prisma } from '@/lib/db'
import { isRibbonPN } from '@/data/transfer-ribbon-products'
import { isLabelPN } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import type { BlueStarStockInfo } from '@/lib/bluestar'
import type { JarltechStockInfo } from '@/lib/jarltech'
import { applyStockOverrides } from '@/lib/stock-overrides'
import { selectPurchasePrice } from '@/lib/price-selection'

const MARGIN = 1.10        // 10% marży — standardowa dla większości produktów
const RIBBON_MARGIN = 1.20 // 20% marży dla taśm termotransferowych Zebra
const LABEL_MARGIN = 1.15  // 15% marży dla etykiet (termiczne + termotransferowe)
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

/**
 * GET /api/stock?pn=ZD4A042-30EM00EZ,ZD4A042-30EE00EZ
 *
 * Unified stock API — Ingram Micro (PLN) + BlueStar (EUR) + Jarltech (EUR).
 * Stany EU sumowane (Ingram DE/HU/CZ + BlueStar + Jarltech inventory).
 * Cena: EUR -> PLN po kursie NBP, potem min(ingram, bluestar, jarltech) x 1.10.
 * Graceful fallback — jesli jeden/dwoch dystrybutorów padnie, dane z pozostalych.
 */
export async function GET(request: NextRequest) {
  const showDebug = request.nextUrl.searchParams.get('debug') === '1'
  const pnParam = request.nextUrl.searchParams.get('pn')

  if (!pnParam) {
    return NextResponse.json(
      { error: 'Brak parametru ?pn=. Podaj Part Numbery oddzielone przecinkiem.' },
      { status: 400 }
    )
  }

  const partNumbers = pnParam.split(',').map(pn => pn.trim()).filter(Boolean)

  if (partNumbers.length === 0) {
    return NextResponse.json(
      { error: 'Nie podano prawidlowych Part Numberow.' },
      { status: 400 }
    )
  }

  if (partNumbers.length > 50) {
    return NextResponse.json(
      { error: 'Maksymalnie 50 Part Numberow na jedno zapytanie.' },
      { status: 400 }
    )
  }

  try {
    // ============================================
    // STEP 1: Check StockCache + JarltechStockCache in parallel
    // Jarltech sync runs separately — if it shows more stock than StockCache,
    // override (StockCache may be stale because previous stock-sync ran while
    // jarltech-sync was still syncing).
    // ============================================
    const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000 // 24h
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

    const jarltechCacheMap = new Map(jarltechRows.map(j => [j.partNumber, j]))
    const overriddenPNs: string[] = []

    const freshCache = new Map<string, typeof cachedRows[0]>()
    for (const row of cachedRows) {
      const age = cacheCheckTime.getTime() - row.lastSync.getTime()
      if (age >= CACHE_MAX_AGE_MS) continue

      const j = jarltechCacheMap.get(row.partNumber)
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
    // Gdy StockCache mówi "unavailable" ALE JarltechStockCache nie ma wpisu
    // (jarltech-sync nie dotarł do tego PN), wywołaj live Jarltech API.
    // Limit 3 PN / request żeby nie blokować listingów. Timeout 10s.
    // Fire-and-forget write-through do JarltechStockCache dla przyszłych requestów.
    // ============================================
    const liveFallbackCandidates = Array.from(freshCache.values())
      .filter(c => c.availability === 'unavailable' && !jarltechCacheMap.has(c.partNumber))
      .slice(0, 3)
      .map(c => c.partNumber)

    const liveFallbackResults: { pn: string; overridden: boolean; inventory: number }[] = []

    if (liveFallbackCandidates.length > 0) {
      try {
        const liveData = await Promise.race([
          jarltechLive(liveFallbackCandidates),
          new Promise<JarltechStockInfo[]>((_, reject) =>
            setTimeout(() => reject(new Error('jarltech-live-timeout')), 10_000)
          ),
        ])

        for (const item of liveData) {
          if (!item.found || item.inventory <= 0) {
            liveFallbackResults.push({ pn: item.partNumber, overridden: false, inventory: item.inventory })
            continue
          }
          const c = freshCache.get(item.partNumber)
          if (!c) continue
          const newStockDE = Math.max(c.stockDE, item.inventory)
          const newTotalStock = c.stockPL + newStockDE + c.inDelivery
          freshCache.set(item.partNumber, {
            ...c,
            stockDE: newStockDE,
            totalStock: newTotalStock,
            availability: c.stockPL > 0 ? c.availability : 'available',
            deliveryText: c.stockPL > 0
              ? c.deliveryText
              : `Dostepny — wysylka 2-3 dni (${newStockDE} szt.)`,
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
                stockDE: c.stockDE,
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

      return NextResponse.json(response, {
        headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
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
        return cached.map(c => ({
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
        }))
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
      const bluestarPLN = (bsFound && bs!.unitPrice)
        ? Math.round((bs!.unitPrice * eurRate / bsPackagingUnit) * 100) / 100
        : undefined

      let jarltechPLN: number | undefined
      if (jlFound && jl!.unitPrice) {
        const rawJarltechPLN = jl!.unitPrice * eurRate
        jarltechPLN = Math.round((rawJarltechPLN / jarltechPackagingUnit) * 100) / 100
      }

      // Wybór ceny zakupu z bezpiecznikiem dwustronnym — patrz lib/price-selection.
      // Odrzuca źródła rażąco poniżej Ingrama (błąd pakietowy) ORAZ samego Ingrama,
      // gdy to on podaje cenę odstającą w górę (ET401EA-3V101F2P-A6: 164 922 zł
      // wobec 547 EUR w Jarltechu).
      const selection = selectPurchasePrice({
        ingram: ingramPLN,
        bluestar: bluestarPLN,
        jarltech: jarltechPLN,
      })
      const bestRawPricePLN = selection.best
      if (selection.ingramSuspect) {
        console.warn(`[stock] ${pn}: ${selection.rejected.map((r) => `${r.source} ${r.reason}`).join('; ')}`)
      }

      let price: number | undefined
      let priceBrutto: number | undefined
      let ingramPrice: number | undefined

      if (bestRawPricePLN != null && bestRawPricePLN > 0) {
        const marginForPN = isRibbonPN(pn) ? RIBBON_MARGIN : isLabelPN(pn) ? LABEL_MARGIN : MARGIN
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
    Promise.all(
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
        }).catch(err => console.error(`[API /stock] Cache write error for ${r.partNumber}:`, err))
      )
    ).catch(() => {})

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
    const cacheHeader = anyFound
      ? 'public, s-maxage=300, stale-while-revalidate=600'
      : 'public, s-maxage=30, stale-while-revalidate=30'

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': cacheHeader,
      },
    })
  } catch (error) {
    console.error('[API /stock] Blad:', error)
    return NextResponse.json(
      { error: 'Blad pobierania danych magazynowych' },
      { status: 500 }
    )
  }
}
