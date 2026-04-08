'use client'

import { useState } from 'react'
import { Product } from '@/data/products'
import ProductCard from './ProductCard'
import clsx from 'clsx'

interface ProductGridProps {
  products: Product[]
  variant?: 'grid' | 'list' | 'compact'
  columns?: 2 | 3 | 4
  showDualButtons?: boolean
  /** Max products to show initially (rest behind "Pokaż więcej"). Reduces page size for SEO. */
  maxInitial?: number
}

const LOAD_MORE_STEP = 48

export default function ProductGrid({
  products,
  variant = 'grid',
  columns = 4,
  showDualButtons = false,
  maxInitial,
}: ProductGridProps) {
  const limit = maxInitial || products.length
  const [visible, setVisible] = useState(limit)
  const displayedProducts = products.slice(0, visible)
  const hasMore = visible < products.length

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Brak produktów
        </h3>
        <p className="text-gray-500">
          Spróbuj zmienić kryteria wyszukiwania lub filtry
        </p>
      </div>
    )
  }

  const loadMore = () => setVisible(prev => Math.min(prev + LOAD_MORE_STEP, products.length))

  const showMoreButton = hasMore && (
    <div className="flex justify-center mt-8">
      <button
        onClick={loadMore}
        className="px-6 py-3 text-sm font-semibold text-primary-700 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
      >
        Pokaż więcej ({products.length - visible} pozostałych)
      </button>
    </div>
  )

  if (variant === 'list') {
    return (
      <>
        <div className="space-y-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="list" />
          ))}
        </div>
        {showMoreButton}
      </>
    )
  }

  if (variant === 'compact') {
    return (
      <>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
        {showMoreButton}
      </>
    )
  }

  const gridCols = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }

  return (
    <>
      <div className={clsx('grid gap-4 sm:gap-6', gridCols[columns])}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} variant="grid" showDualButtons={showDualButtons} />
        ))}
      </div>
      {showMoreButton}
    </>
  )
}
