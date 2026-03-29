'use client'

import { useSmartPrice } from './SmartPriceContext'

export default function StickyPrice() {
  const { price, loading } = useSmartPrice()

  if (!price && !loading) return null

  return (
    <div className="flex-shrink-0">
      {loading || !price ? (
        <span className="inline-block h-6 w-24 bg-gray-200 rounded animate-pulse" />
      ) : (
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
            {price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
          </span>
          <span className="text-xs text-gray-500">netto</span>
          <span className="text-xs text-gray-400 whitespace-nowrap">
            ({(price * 1.23).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł brutto)
          </span>
        </div>
      )}
    </div>
  )
}
