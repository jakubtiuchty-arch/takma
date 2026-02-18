'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { products, type Product } from '@/data/products'
import { useQuoteStore } from '@/store/quoteStore'

function buildIndex() {
  return products.map((p) => {
    const partNumbers = (p.variants || []).map((v) => v.partNumber.toLowerCase())
    const searchText = [
      p.name,
      p.slug.replace(/-/g, ' '),
      p.shortDescription,
      p.id,
      ...partNumbers,
    ]
      .join(' ')
      .toLowerCase()
    return { product: p, searchText, partNumbers }
  })
}

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const addItem = useQuoteStore((s) => s.addItem)
  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildIndex(), [])

  const search = useCallback(
    (q: string) => {
      if (q.length < 2) {
        setResults([])
        return
      }
      const tokens = q.toLowerCase().split(/\s+/).filter(Boolean)
      const found: Product[] = []
      for (const entry of index) {
        if (found.length >= 20) break
        if (tokens.every((t) => entry.searchText.includes(t))) {
          found.push(entry.product)
        }
      }
      setResults(found)
    },
    [index]
  )

  useEffect(() => {
    const timer = setTimeout(() => search(query), 150)
    return () => clearTimeout(timer)
  }, [query, search])

  const addFromCatalog = (product: Product, variant?: { partNumber: string; name: string; priceFrom?: number }) => {
    const priceNetto = variant?.priceFrom
      ? Math.round(variant.priceFrom * 100)
      : product.priceFrom
      ? Math.round(product.priceFrom * 100)
      : 0

    // priceFrom = ingramPrice × 1.15, więc purchasePrice = priceNetto / 1.15
    const purchasePrice = priceNetto > 0 ? Math.round(priceNetto / 1.15) : undefined
    const marginPercent = purchasePrice && purchasePrice > 0
      ? ((priceNetto - purchasePrice) / purchasePrice) * 100
      : undefined

    addItem({
      source: 'catalog',
      productId: product.id,
      productName: variant ? `${product.name} — ${variant.name}` : product.name,
      partNumber: variant?.partNumber || product.variants?.[0]?.partNumber,
      description: product.shortDescription,
      quantity: 1,
      purchasePrice,
      priceNetto,
      marginPercent,
    })

    setQuery('')
    setResults([])
    setExpanded(null)
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Dodaj z katalogu
      </h3>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Szukaj produktu, modelu, PN..."
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2"
      />

      {results.length > 0 && (
        <div className="border border-gray-200 rounded-lg max-h-80 overflow-y-auto bg-white">
          {results.map((product) => (
            <div key={product.id} className="border-b border-gray-100 last:border-0">
              <button
                type="button"
                onClick={() => {
                  if (product.variants && product.variants.length > 1) {
                    setExpanded(expanded === product.id ? null : product.id)
                  } else {
                    addFromCatalog(product, product.variants?.[0])
                  }
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 text-sm"
              >
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 truncate">{product.name}</div>
                  <div className="text-xs text-gray-500 truncate">{product.shortDescription}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  {product.priceFrom && (
                    <span className="text-sm font-medium tabular-nums">
                      {product.priceFrom.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </span>
                  )}
                  {product.variants && product.variants.length > 1 && (
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${expanded === product.id ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </div>
              </button>

              {expanded === product.id && product.variants && (
                <div className="bg-gray-50 px-3 pb-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.partNumber}
                      type="button"
                      onClick={() => addFromCatalog(product, v)}
                      className="w-full flex items-center justify-between px-2 py-1.5 text-left hover:bg-white rounded text-xs"
                    >
                      <div className="min-w-0">
                        <span className="font-mono text-gray-600">{v.partNumber}</span>
                        <span className="text-gray-400 ml-2">{v.name}</span>
                      </div>
                      {v.priceFrom && (
                        <span className="font-medium tabular-nums ml-2">
                          {v.priceFrom.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
