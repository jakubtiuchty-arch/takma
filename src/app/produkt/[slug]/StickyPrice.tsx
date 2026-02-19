'use client'

import { useMemo } from 'react'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'

interface StickyPriceProps {
  product: Product
}

function getPartNumbers(product: Product): string[] {
  if (product.variants && product.variants.length > 0) {
    return product.variants.map(v => v.partNumber)
  }
  const pnSpec = product.specifications.find(s => s.name === 'Part Number')
  return pnSpec ? [pnSpec.value] : []
}

export default function StickyPrice({ product }: StickyPriceProps) {
  const partNumbers = useMemo(() => getPartNumbers(product), [product])
  const { stockData, loading } = useStockData(partNumbers)

  const displayPrice = useMemo(() => {
    if (loading || stockData.size === 0) return product.priceFrom
    const livePrices = partNumbers
      .map(pn => stockData.get(pn))
      .filter((s): s is NonNullable<typeof s> => !!s?.found && !!s?.price)
      .map(s => s.price!)
      .sort((a, b) => a - b)
    return livePrices[0] ?? product.priceFrom
  }, [loading, stockData, partNumbers, product.priceFrom])

  if (!displayPrice) return null

  return (
    <div className="flex-shrink-0">
      {loading ? (
        <span className="inline-block h-6 w-24 bg-gray-200 rounded animate-pulse" />
      ) : (
        <>
          <span className="text-xl font-bold text-gray-900">
            {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
          </span>
          <span className="text-xs text-gray-500 ml-1">netto</span>
        </>
      )}
    </div>
  )
}
