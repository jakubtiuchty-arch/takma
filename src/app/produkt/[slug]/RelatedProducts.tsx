'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ProductGrid } from '@/components/product'
import { Product } from '@/data/products'
import { ArrowRightIcon } from '@/components/ui/Icons'

interface RelatedProductsProps {
  title: string
  products: Product[]
  initialLimit?: number
  labels?: boolean
  id?: string
  showDualButtons?: boolean
}

const ROW_SIZE = 4 // ilość kart w jednym wierszu (desktop xl:grid-cols-4)

function parseDimension(product: Product): { width: number; height: number } | null {
  const spec = product.specifications.find(s => s.name === 'Wymiar etykiety')
  if (!spec) return null
  // Format: "57 × 19 mm" lub "50.8 × 25.4 mm"
  const match = spec.value.match(/([\d.]+)\s*[×x]\s*([\d.]+)/)
  if (!match) return null
  return { width: parseFloat(match[1]), height: parseFloat(match[2]) }
}

function DimensionFilters({
  products,
  selectedWidth,
  selectedHeight,
  onWidthChange,
  onHeightChange,
}: {
  products: Product[]
  selectedWidth: string
  selectedHeight: string
  onWidthChange: (v: string) => void
  onHeightChange: (v: string) => void
}) {
  const dimensions = useMemo(() => {
    const dims: { width: number; height: number }[] = []
    for (const p of products) {
      const d = parseDimension(p)
      if (d) dims.push(d)
    }
    return dims
  }, [products])

  // Wszystkie unikalne szerokości
  const allWidths = useMemo(() => {
    const set = new Set(dimensions.map(d => d.width))
    return Array.from(set).sort((a, b) => a - b)
  }, [dimensions])

  // Wysokości dostępne dla wybranej szerokości
  const availableHeights = useMemo(() => {
    const filtered = selectedWidth
      ? dimensions.filter(d => d.width === parseFloat(selectedWidth))
      : dimensions
    const set = new Set(filtered.map(d => d.height))
    return Array.from(set).sort((a, b) => a - b)
  }, [dimensions, selectedWidth])

  // Szerokości dostępne dla wybranej wysokości
  const availableWidths = useMemo(() => {
    const filtered = selectedHeight
      ? dimensions.filter(d => d.height === parseFloat(selectedHeight))
      : dimensions
    const set = new Set(filtered.map(d => d.width))
    return Array.from(set).sort((a, b) => a - b)
  }, [dimensions, selectedHeight])

  const formatNum = (n: number) => Number.isInteger(n) ? n.toString() : n.toFixed(1)

  // Brak wymiarów (np. produkty to serie/parent bez 'Wymiar etykiety') — nie renderuj filtra
  if (allWidths.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3 mb-5">
      <div className="relative">
        <select
          value={selectedWidth}
          onChange={(e) => onWidthChange(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
        >
          <option value="">Szerokość — wszystkie</option>
          {allWidths.map(w => (
            <option key={w} value={w} disabled={!availableWidths.includes(w)}>
              {formatNum(w)} mm
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <select
          value={selectedHeight}
          onChange={(e) => onHeightChange(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
        >
          <option value="">Wysokość — wszystkie</option>
          {availableHeights.map(h => (
            <option key={h} value={h}>
              {formatNum(h)} mm
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {(selectedWidth || selectedHeight) && (
        <button
          onClick={() => { onWidthChange(''); onHeightChange('') }}
          className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2"
        >
          Wyczyść filtry
        </button>
      )}
    </div>
  )
}

export default function RelatedProducts({ title, products, initialLimit, labels, id, showDualButtons }: RelatedProductsProps) {
  // Dla etykiet termicznych pokazujemy od razu 2 wiersze (8 kafelków serii) gdy produktów >4
  const defaultRows = labels && products.length > ROW_SIZE ? 2 : 1
  const [visibleRows, setVisibleRows] = useState(defaultRows)
  const [selectedWidth, setSelectedWidth] = useState('')
  const [selectedHeight, setSelectedHeight] = useState('')

  // Filtrowanie etykiet po wymiarach (hook musi być przed warunkowymi returnami)
  const filtered = useMemo(() => {
    if (!labels || (!selectedWidth && !selectedHeight)) return products
    return products.filter(p => {
      const d = parseDimension(p)
      if (!d) return false
      if (selectedWidth && d.width !== parseFloat(selectedWidth)) return false
      if (selectedHeight && d.height !== parseFloat(selectedHeight)) return false
      return true
    })
  }, [products, labels, selectedWidth, selectedHeight])

  if (products.length === 0) return null

  // Tryb etykiet: wiersz po wierszu
  if (labels) {
    const visibleCount = visibleRows * ROW_SIZE
    const visible = filtered.slice(0, visibleCount)
    const hasMore = visibleCount < filtered.length
    const isExpanded = visibleCount >= filtered.length && filtered.length > ROW_SIZE
    // Czy produkty są seriami (brak konkretnych wymiarów) — wtedy pokazujemy link do katalogu zamiast filtra
    const isSeriesView = products.every(p => !parseDimension(p))

    return (
      <section id={id} className="scroll-mt-24">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <span className="text-sm text-gray-400">
            {filtered.length === products.length
              ? `${products.length} produktów`
              : `${filtered.length} z ${products.length}`
            }
          </span>
        </div>

        <DimensionFilters
          products={products}
          selectedWidth={selectedWidth}
          selectedHeight={selectedHeight}
          onWidthChange={(v) => { setSelectedWidth(v); setVisibleRows(1) }}
          onHeightChange={(v) => { setSelectedHeight(v); setVisibleRows(1) }}
        />

        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 py-8 text-center">Brak etykiet o wybranych wymiarach</p>
        ) : (
          <>
            <ProductGrid products={visible} columns={4} showDualButtons={showDualButtons} />

            <div className="mt-5 text-center flex justify-center gap-3">
              {hasMore && (
                <button
                  onClick={() => setVisibleRows(v => v + 1)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl transition-colors"
                >
                  Zobacz więcej ({filtered.length - visibleCount})
                </button>
              )}
              {isExpanded && (
                <button
                  onClick={() => setVisibleRows(1)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors"
                >
                  Zwiń
                </button>
              )}
            </div>

            {/* Link do pełnego katalogu etykiet termicznych — pokazujemy tylko gdy produkty to serie (brak wymiarów) */}
            {isSeriesView && (
              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <Link
                  href="/etykiety-termiczne"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
                >
                  Zobacz wszystkie etykiety termiczne (12 serii, 582 warianty)
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            )}
          </>
        )}
      </section>
    )
  }

  // Tryb domyślny: wiersz po wierszu (ROW_SIZE = 4)
  const limit = initialLimit ?? products.length
  const visibleCount = visibleRows * ROW_SIZE
  const capped = Math.max(limit, visibleCount)
  const visible = products.slice(0, capped)
  const hasMore = capped < products.length
  const isExpanded = visibleRows > 1 && capped >= products.length

  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {products.length > limit && (
          <span className="text-sm text-gray-500">{products.length} produktów</span>
        )}
      </div>
      <ProductGrid products={visible} columns={4} showDualButtons={showDualButtons} />
      <div className="mt-5 text-center flex justify-center gap-3">
        {hasMore && (
          <button
            onClick={() => setVisibleRows(v => v + 1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl transition-colors"
          >
            Pokaż kolejne ({products.length - capped})
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setVisibleRows(1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors"
          >
            Zwiń
          </button>
        )}
      </div>
    </section>
  )
}
