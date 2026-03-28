'use client'

import { createContext, useContext, useMemo } from 'react'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'
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
  const { stockData, loading } = useStockData(partNumbers)

  const state = useMemo<SmartPriceState>(() => {
    if (allVariants.length === 0) {
      return { displayedPn: undefined, price: product.priceFrom ?? undefined, isFallback: false, loading, stockData, partNumbers, variantName: undefined }
    }

    // Podczas ładowania — pokaż najtańszy ze statyczną ceną
    if (loading || stockData.size === 0) {
      const withPrice = allVariants.filter(v => v.price !== null)
      const best = withPrice.length > 0 ? withPrice[0] : allVariants[0]
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

    // Z cenami live
    const withLivePrices = allVariants.map(v => {
      const s = stockData.get(v.partNumber)
      const livePrice = (s?.found && s?.price) ? s.price : null
      const hasStock = s?.found
        ? s.totalStock > 0
        : v.staticAvailability === 'available'
      return { ...v, effectivePrice: livePrice ?? v.price, hasStock }
    }).sort((a, b) => (a.effectivePrice ?? Infinity) - (b.effectivePrice ?? Infinity))

    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)

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
      loading,
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
