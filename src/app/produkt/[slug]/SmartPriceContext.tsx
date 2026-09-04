'use client'

import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product } from '@/data/products'
import type { StockInfo as StockResult } from '@/lib/ingram'
import { activePromo } from '@/data/promos'
import { getMagicardStock } from '@/lib/magicard-offer'
import { selectProductVariant } from '@/lib/product-variant-offers'

interface SmartPriceState {
  /** Wybrany PN do wyświetlenia */
  displayedPn: string | undefined
  /** Cena (live lub statyczna) */
  price: number | undefined
  /** Czy to fallback (nie najtańszy globalnie, ale najtańszy dostępny) */
  isFallback: boolean
  /** Czy ładuje */
  loading: boolean
  /** Dane stockowe */
  stockData: Map<string, StockResult>
  /** Wszystkie PNy produktu */
  partNumbers: string[]
  /** Nazwa wariantu */
  variantName: string | undefined
}

const SmartPriceContext = createContext<SmartPriceState | null>(null)

export function useSmartPrice() {
  const ctx = useContext(SmartPriceContext)
  if (!ctx) throw new Error('useSmartPrice must be used within SmartPriceProvider')
  return ctx
}

export function SmartPriceProvider({
  product,
  children,
  forcedPn,
  initialStock,
}: {
  product: Product
  children: React.ReactNode
  /** Wymusza wybór konkretnego wariantu (z path URL, np. /produkt/[slug]/[size]/[pn]).
   *  Override'uje ?pn= z searchParams. Używane na statycznej stronie wariantu. */
  forcedPn?: string
  initialStock?: StockResult[]
}) {
  // ?pn=... — gdy klient przyszedł z karty konkretnego wariantu, pokazujemy TEN wariant
  const searchParams = useSearchParams()
  const urlPn = forcedPn ?? searchParams?.get('pn') ?? null

  const allVariants = useMemo(() => {
    if (product.variants && product.variants.length > 0) {
      return product.variants
        .map(v => ({ partNumber: v.partNumber, price: v.priceFrom ?? null, name: v.name, staticAvailability: v.availability }))
        .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    }
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec) {
      return [{ partNumber: pnSpec.value, price: product.priceFrom ?? null, name: '', staticAvailability: product.availability ?? 'available' as const }]
    }
    return []
  }, [product])

  const partNumbers = useMemo(() => allVariants.map(v => v.partNumber), [allVariants])
  const manualStockData = useMemo(() => {
    const rows = getMagicardStock(product)
    return rows ? new Map(rows.map(row => [row.partNumber, row])) : undefined
  }, [product])

  // Bezpośredni fetch — niezależny od globalnego batchera ProductCard
  const [fetchedStockData, setStockData] = useState<Map<string, StockResult>>(() => new Map(initialStock?.map(row => [row.partNumber, row])))
  const [fetchLoading, setLoading] = useState(initialStock === undefined && partNumbers.length > 0)
  const stockData = manualStockData ?? fetchedStockData
  const loading = manualStockData ? false : fetchLoading

  const pnKey = partNumbers.join(',')
  useEffect(() => {
    // Brak zewnętrznego API dla tej oferty: cena i stan są już w HTML z serwera.
    if (manualStockData) { setLoading(false); return }
    if (partNumbers.length === 0) { setLoading(false); return }

    let cancelled = false
    if (initialStock === undefined) setLoading(true)

    // Dziel na chunki po 12 PNow (Jarltech concurrent z limitem 4)
    const chunks: string[][] = []
    for (let i = 0; i < partNumbers.length; i += 12) {
      chunks.push(partNumbers.slice(i, i + 12))
    }

    Promise.all(
      chunks.map(chunk =>
        fetch(`/api/stock?pn=${chunk.join(',')}`, {
          signal: AbortSignal.timeout(15000),
          cache: 'no-store',
        })
          .then(r => {
            if (!r.ok) {
              console.warn(`[SmartPrice] stock API ${r.status} for ${chunk.join(',')}`)
              return { results: [] }
            }
            return r.json()
          })
          .catch((err) => {
            console.warn('[SmartPrice] stock fetch failed:', err)
            return { results: [] }
          })
      )
    ).then(responses => {
      if (cancelled) return
      const map = new Map<string, StockResult>()
      for (const data of responses) {
        const items = data.results || []
        for (const item of items) {
          map.set(item.partNumber, item)
        }
      }
      if (process.env.NODE_ENV === 'development') {
        console.log(`[SmartPrice] Stock loaded: ${map.size} items`)
      }
      if (map.size > 0) setStockData(previous => new Map([...Array.from(previous), ...Array.from(map)]))
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pnKey, manualStockData])

  const state = useMemo<SmartPriceState>(() => {
    if (product.slug === 'zebra-zd421t') {
      const selected = selectProductVariant(product, Array.from(stockData.values()), urlPn)
      const stock = selected ? stockData.get(selected.partNumber) : undefined
      return {
        displayedPn: selected?.partNumber,
        price: stock?.found && stock.price && stock.price > 0 ? stock.price : undefined,
        variantName: selected?.name,
        isFallback: false, loading, stockData, partNumbers,
      }
    }
    if (allVariants.length === 0) {
      return { displayedPn: undefined, price: product.priceFrom ?? undefined, isFallback: false, loading, stockData, partNumbers, variantName: undefined }
    }

    // ── PRIORYTET URL ?pn=... — klient wybrał konkretny wariant z karty na /serie/[slug]
    // Pokazujemy TEN wariant niezależnie od ceny/stock-u (zgodność z H1 / meta / breadcrumbs).
    const urlVariant = urlPn ? allVariants.find(v => v.partNumber === urlPn) : null
    if (urlVariant) {
      const stock = stockData.get(urlVariant.partNumber)
      const livePrice = (stock?.found && stock?.price) ? stock.price : null
      return {
        displayedPn: urlVariant.partNumber,
        price: livePrice ?? urlVariant.price ?? product.priceFrom ?? undefined,
        isFallback: false,
        loading,
        stockData,
        partNumbers,
        variantName: urlVariant.name || undefined,
      }
    }

    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)

    // Przy aktywnej promocji box ceny pokazuje wariant PROMOCYJNY (np. komplet
    // z kablem i podstawką), nie najtańszy okrojony — spójność z banerem promo.
    const preferredPn = activePromo(product.slug)?.sku

    // Podczas ładowania — pokaż najtańszy ze statyczną ceną
    if (loading) {
      const withPrice = allVariants.filter(v => v.price !== null)
      const best = (preferredPn && allVariants.find(v => v.partNumber === preferredPn)) || (withPrice.length > 0 ? withPrice[0] : allVariants[0])
      return {
        displayedPn: best.partNumber,
        price: best.price ?? product.priceFrom ?? undefined,
        isFallback: false,
        loading,
        stockData,
        partNumbers,
        variantName: best.name || undefined,
      }
    }

    // API nie znalazło żadnego PN — pokaż statyczną cenę (bez stock info)
    if (!anyFound) {
      const withPrice = allVariants.filter(v => v.price !== null)
      const best = (preferredPn && allVariants.find(v => v.partNumber === preferredPn)) || (withPrice.length > 0 ? withPrice[0] : allVariants[0])
      return {
        displayedPn: best.partNumber,
        price: best.price ?? product.priceFrom ?? undefined,
        isFallback: false,
        loading: false,
        stockData,
        partNumbers,
        variantName: best.name || undefined,
      }
    }

    // API odpowiedziało z danymi — buduj listę z cenami live
    const withLivePrices = allVariants.map(v => {
      const s = stockData.get(v.partNumber)
      // Realny sygnał dostępności: found=true LUB totalStock>0 (override Jarltech bez found).
      const liveSignal = !!s && (s.found || s.totalStock > 0)
      const livePrice = (s?.found && s?.price) ? s.price : null
      const isAvailable = liveSignal ? s!.availability === 'available' : false
      return { ...v, effectivePrice: livePrice ?? v.price, hasStock: isAvailable, apiFound: !!s?.found }
    })
    // Sortuj: warianty z ceną live PRZED wariantami ze statyczną ceną, potem po cenie
    .sort((a, b) => {
      if (a.apiFound && !b.apiFound) return -1
      if (!a.apiFound && b.apiFound) return 1
      return (a.effectivePrice ?? Infinity) - (b.effectivePrice ?? Infinity)
    })

    let best = withLivePrices[0]
    let isFallback = false

    const preferred = preferredPn ? withLivePrices.find(v => v.partNumber === preferredPn) : undefined
    if (preferred) {
      best = preferred
    } else if (anyFound) {
      const cheapestAvailable = withLivePrices.find(v => v.hasStock)
      if (cheapestAvailable) {
        isFallback = cheapestAvailable.partNumber !== withLivePrices[0].partNumber
        best = cheapestAvailable
      }
    }

    const stock = stockData.get(best.partNumber)
    const livePrice = (stock?.found && stock?.price) ? stock.price : null
    const price = livePrice ?? best.price ?? product.priceFrom ?? undefined

    return {
      displayedPn: best.partNumber,
      price,
      isFallback,
      loading: false,
      stockData,
      partNumbers,
      variantName: best.name || undefined,
    }
  }, [allVariants, stockData, loading, partNumbers, product, urlPn])

  return (
    <SmartPriceContext.Provider value={state}>
      {children}
    </SmartPriceContext.Provider>
  )
}
