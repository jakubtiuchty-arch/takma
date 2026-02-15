'use client'

import { useMemo } from 'react'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'
import StockInfo from './StockInfo'

interface SmartPriceProps {
  product: Product
}

/**
 * Wyświetla cenę produktu z inteligentnym fallbackiem:
 * Jeśli najtańszy wariant jest niedostępny, pokazuje najtańszy DOSTĘPNY wariant.
 * Dzięki temu klient nie widzi "Niedostępny" i nie odchodzi — widzi alternatywę.
 */
export default function SmartPrice({ product }: SmartPriceProps) {
  // Zbierz wszystkie warianty z cenami i PN-ami
  const allVariants = useMemo(() => {
    if (product.variants && product.variants.length > 0) {
      return product.variants
        .filter(v => v.priceFrom)
        .map(v => ({ partNumber: v.partNumber, price: v.priceFrom!, name: v.name }))
        .sort((a, b) => a.price - b.price)
    }
    const pnSpec = product.specifications.find(s => s.name === 'Part Number')
    if (pnSpec && product.priceFrom) {
      return [{ partNumber: pnSpec.value, price: product.priceFrom, name: '' }]
    }
    return []
  }, [product])

  const partNumbers = useMemo(() => allVariants.map(v => v.partNumber), [allVariants])
  const { stockData, loading } = useStockData(partNumbers)

  // Znajdź najlepszy wariant do wyświetlenia
  const displayed = useMemo(() => {
    if (allVariants.length === 0) return null

    const cheapest = allVariants[0]

    // Jeśli jeszcze ładuje — pokaż najtańszy
    if (loading || stockData.size === 0) {
      return { ...cheapest, fallback: false }
    }

    // Sprawdź czy Ingram w ogóle zwrócił dane
    const anyFound = partNumbers.some(pn => stockData.get(pn)?.found)
    if (!anyFound) {
      return { ...cheapest, fallback: false }
    }

    // Sprawdź czy najtańszy jest dostępny
    const cheapestStock = stockData.get(cheapest.partNumber)
    if (cheapestStock?.found && cheapestStock.totalStock > 0) {
      return { ...cheapest, fallback: false }
    }

    // Najtańszy niedostępny → szukaj najtańszego dostępnego
    for (const v of allVariants) {
      const stock = stockData.get(v.partNumber)
      if (stock?.found && stock.totalStock > 0) {
        return { ...v, fallback: true }
      }
    }

    // Wszystkie niedostępne — pokaż najtańszy
    return { ...cheapest, fallback: false }
  }, [allVariants, stockData, loading, partNumbers])

  if (!displayed && !product.priceFrom) {
    return (
      <div className="bg-gray-100 shadow-sm rounded-xl p-6 mb-6">
        <p className="text-lg text-gray-600">Cena na zapytanie</p>
      </div>
    )
  }

  const price = displayed?.price || product.priceFrom!
  const pn = displayed?.partNumber

  // Dla StockInfo przekaż tylko PN wyświetlanego wariantu — żeby status był spójny z ceną
  const displayedPn = pn ? [pn] : partNumbers

  return (
    <div className="bg-gray-100 shadow-sm rounded-xl p-6 mb-6">
      {pn && (
        <p className="text-xs font-mono text-gray-500 mb-2">PN: {pn}</p>
      )}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-gray-900">
          {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
        </span>
        <span className="text-sm text-gray-500">netto</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">
        {(price * 1.23).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł brutto
      </p>
      {displayedPn.length > 0 && <StockInfo partNumbers={displayedPn} />}
    </div>
  )
}
