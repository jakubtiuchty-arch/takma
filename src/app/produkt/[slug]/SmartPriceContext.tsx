'use client'

import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { Product } from '@/data/products'
import type { StockInfo as StockResult } from '@/lib/ingram'

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

export function SmartPriceProvider({ product, children }: { product: Product; children: React.ReactNode }) {
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

  // Bezpośredni fetch — niezależny od globalnego batchera ProductCard
  const [stockData, setStockData] = useState<Map<string, StockResult>>(new Map())
  const [loading, setLoading] = useState(partNumbers.length > 0)

  const pnKey = partNumbers.join(',')
  useEffect(() => {
    if (partNumbers.length === 0) { setLoading(false); return }

    let cancelled = false
    setLoading(true)

    // Dziel na chunki po 20 PNow (bezpieczenstwo przed timeoutem)
    const chunks: string[][] = []
    for (let i = 0; i < partNumbers.length; i += 20) {
      chunks.push(partNumbers.slice(i, i + 20))
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
        console.log(`[SmartPrice] Stock loaded: ${map.size} items, found: ${[...map.values()].filter(v => v.found).length}`)
      }
      setStockData(map)
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pnKey])

  const state = useMemo<SmartPriceState>(() => {
    if (allVariants.length === 0) {
      return { displayedPn: undefined, price: product.priceFrom ?? undefined, isFallback: false, loading, stockData, partNumbers, variantName: undefined }
    }

    // Sprawdź czy API odpowiedziało — musi być przynajmniej 1 PN z found=true
    // lub loading wciąż trwa. Bez tego czesciowe dane z cache powodują
    // wybranie złego wariantu (np. drogi zamiast najtańszego)
    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)
    const isStillLoading = loading || (stockData.size === 0 && partNumbers.length > 0)

    // Podczas ładowania — pokaż najtańszy ze statyczną ceną
    if (isStillLoading || !anyFound) {
      const withPrice = allVariants.filter(v => v.price !== null)
      const best = withPrice.length > 0 ? withPrice[0] : allVariants[0]
      return {
        displayedPn: best.partNumber,
        price: best.price ?? product.priceFrom ?? undefined,
        isFallback: false,
        loading: isStillLoading,
        stockData,
        partNumbers,
        variantName: best.name || undefined,
      }
    }

    // API odpowiedziało — buduj listę z cenami live
    // WAŻNE: gdy API ma dane (anyFound=true), NIE ufaj statycznej dostępności
    // dla wariantów których API nie zna. Tylko API decyduje o hasStock.
    const withLivePrices = allVariants.map(v => {
      const s = stockData.get(v.partNumber)
      const livePrice = (s?.found && s?.price) ? s.price : null
      const hasStock = s?.found ? s.totalStock > 0 : false
      return { ...v, effectivePrice: livePrice ?? v.price, hasStock, apiFound: !!s?.found }
    })
    // Sortuj: warianty z ceną live PRZED wariantami ze statyczną ceną, potem po cenie
    .sort((a, b) => {
      if (a.apiFound && !b.apiFound) return -1
      if (!a.apiFound && b.apiFound) return 1
      return (a.effectivePrice ?? Infinity) - (b.effectivePrice ?? Infinity)
    })

    let best = withLivePrices[0]
    let isFallback = false

    if (anyFound) {
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
  }, [allVariants, stockData, loading, partNumbers, product.priceFrom])

  return (
    <SmartPriceContext.Provider value={state}>
      {children}
    </SmartPriceContext.Provider>
  )
}
