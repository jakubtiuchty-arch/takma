'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { products, categories, manufacturers } from '@/data/products'
import { useCustomerRfqStore } from '@/store/customerRfqStore'

interface SearchResult {
  id: string
  name: string
  slug: string
  shortDescription: string
  partNumber?: string
  image?: string
  categoryName?: string
  hasVariants: boolean
  variants?: { partNumber: string; name: string }[]
}

function buildSearchIndex() {
  return products
    .filter((p) => p.categoryId !== 'oprogramowanie')
    .map((p) => {
      const partNumbers = (p.variants || []).map((v) => v.partNumber.toLowerCase())
      const variantNames = (p.variants || []).map((v) => v.name.toLowerCase())
      const manufacturer = manufacturers.find((m) => m.id === p.manufacturerId)

      const searchText = [
        p.name,
        p.slug.replace(/-/g, ' '),
        p.shortDescription,
        p.id,
        manufacturer?.name || '',
        ...p.tags,
        ...partNumbers,
        ...variantNames,
      ]
        .join(' ')
        .toLowerCase()

      return { product: p, searchText, partNumbers }
    })
}

export default function RfqProductSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = useCustomerRfqStore((s) => s.addItem)
  const items = useCustomerRfqStore((s) => s.items)

  const searchIndex = useMemo(() => buildSearchIndex(), [])

  const search = useCallback(
    (q: string) => {
      if (q.length < 2) {
        setResults([])
        setIsOpen(false)
        return
      }

      const queryLower = q.toLowerCase().trim()
      const queryNormalized = queryLower.replace(/\s+/g, '')
      const queryTokens = queryLower.split(/\s+/).filter(Boolean)
      const found: (SearchResult & { _score: number })[] = []

      for (const entry of searchIndex) {
        const { product, searchText, partNumbers } = entry

        const allMatch = queryTokens.every((token) => searchText.includes(token))
        if (!allMatch) continue

        let score = 0
        const nameLower = product.name.toLowerCase()

        if (nameLower === queryLower) score += 100
        else if (nameLower.includes(queryNormalized)) score += 80
        if (product.slug.includes(queryNormalized)) score += 60
        if (partNumbers.some((pn) => pn.includes(queryNormalized))) score += 90
        if (product.categoryId !== 'akcesoria') score += 40
        if (score === 0) score = 1

        const category = categories.find((c) => c.id === product.categoryId)
        const hasVariants = (product.variants?.length ?? 0) > 1

        found.push({
          _score: score,
          id: product.id,
          name: product.name,
          slug: product.slug,
          shortDescription: product.shortDescription,
          partNumber: product.variants?.[0]?.partNumber,
          image: product.images[0],
          categoryName: category?.name,
          hasVariants,
          variants: hasVariants
            ? product.variants?.map((v) => ({ partNumber: v.partNumber, name: v.name }))
            : undefined,
        })
      }

      found.sort((a, b) => b._score - a._score)
      setResults(found.slice(0, 8))
      setIsOpen(true)
      setExpandedProduct(null)
    },
    [searchIndex]
  )

  useEffect(() => {
    const timer = setTimeout(() => search(query), 200)
    return () => clearTimeout(timer)
  }, [query, search])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleAddProduct = (result: SearchResult, variantPN?: string) => {
    const isAlreadyAdded = items.some((item) => {
      if (variantPN) return item.productId === `${result.id}__${variantPN}`
      return item.productId === result.id
    })
    if (isAlreadyAdded) return

    addItem({
      id: variantPN ? `${result.id}__${variantPN}` : result.id,
      name: variantPN
        ? `${result.name} — ${result.variants?.find((v) => v.partNumber === variantPN)?.name || variantPN}`
        : result.name,
      slug: result.slug,
      image: result.image,
      partNumber: variantPN || result.partNumber,
    })

    setQuery('')
    setIsOpen(false)
    setExpandedProduct(null)
  }

  const isProductAdded = (productId: string, variantPN?: string) => {
    if (variantPN) return items.some((item) => item.productId === `${productId}__${variantPN}`)
    return items.some((item) => item.productId === productId)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        Wyszukaj produkt
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
          placeholder="Wpisz nazwę produktu, model lub Part Number..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map((result) => {
                const isExpanded = expandedProduct === result.id

                return (
                  <li key={result.id} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => {
                        if (result.hasVariants && result.variants) {
                          setExpandedProduct(isExpanded ? null : result.id)
                        } else {
                          handleAddProduct(result)
                        }
                      }}
                      className={clsx(
                        'w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-gray-50',
                        isProductAdded(result.id) && !result.hasVariants && 'opacity-50'
                      )}
                    >
                      {result.image ? (
                        <div className="w-9 h-9 bg-gray-50 rounded flex-shrink-0 overflow-hidden relative">
                          <Image src={result.image} alt="" fill className="object-contain p-0.5" sizes="36px" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 bg-gray-100 rounded flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-900 truncate">{result.name}</p>
                          {result.categoryName && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded flex-shrink-0">
                              {result.categoryName}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 truncate">
                          {result.partNumber && <span className="font-mono">{result.partNumber} · </span>}
                          {result.shortDescription}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        {result.hasVariants ? (
                          <svg
                            className={clsx('w-4 h-4 text-gray-400 transition-transform', isExpanded && 'rotate-180')}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        ) : isProductAdded(result.id) ? (
                          <span className="text-xs text-green-600 font-medium">Dodano</span>
                        ) : (
                          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Warianty */}
                    {isExpanded && result.variants && (
                      <div className="bg-gray-50 border-t border-gray-100">
                        {result.variants.map((variant) => {
                          const added = isProductAdded(result.id, variant.partNumber)
                          return (
                            <button
                              key={variant.partNumber}
                              onClick={() => handleAddProduct(result, variant.partNumber)}
                              disabled={added}
                              className={clsx(
                                'w-full flex items-center gap-3 px-3 py-2 pl-14 text-left transition-colors',
                                added ? 'opacity-50' : 'hover:bg-gray-100'
                              )}
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-800 truncate">{variant.name}</p>
                                <p className="text-xs text-gray-500 font-mono">{variant.partNumber}</p>
                              </div>
                              {added ? (
                                <span className="text-xs text-green-600 font-medium flex-shrink-0">Dodano</span>
                              ) : (
                                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          ) : query.length >= 2 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-gray-500">Brak wyników dla &quot;{query}&quot;</p>
              <p className="text-xs text-gray-400 mt-1">Spróbuj inną nazwę, model lub Part Number</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
