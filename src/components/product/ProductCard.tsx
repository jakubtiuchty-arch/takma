'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { Badge, Button } from '@/components/ui'
import { PlusIcon, CheckIcon, HeartIcon, CompareIcon } from '@/components/ui/Icons'
import { Product, getCategoryById, getManufacturerById } from '@/data/products'
import { useRFQStore } from '@/store/rfqStore'
import { useEffect, useState } from 'react'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list'
}

export default function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
  const { addItem, isInRFQ } = useRFQStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const inRFQ = mounted ? isInRFQ(product.id) : false

  const handleAddToRFQ = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
    })
  }

  const availabilityConfig = {
    available: { label: 'Dostępny', variant: 'success' as const },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const },
  }

  const availability = availabilityConfig[product.availability]

  if (variant === 'list') {
    return (
      <article className="card p-4 flex gap-4">
        {/* Image */}
        <Link
          href={`/produkt/${product.slug}`}
          className="w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center group"
        >
          <span className="text-gray-400 text-sm group-hover:text-primary-500 transition-colors">
            {/* Placeholder */}
            IMG
          </span>
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              {manufacturer && (
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {manufacturer.name}
                </span>
              )}
              <Link href={`/produkt/${product.slug}`}>
                <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {product.shortDescription}
              </p>
            </div>

            {product.priceFrom && (
              <div className="text-right flex-shrink-0">
                <span className="text-xs text-gray-500">od</span>
                <p className="text-lg font-bold text-gray-900">
                  {product.priceFrom.toLocaleString('pl-PL')} zł
                </p>
                <span className="text-xs text-gray-500">netto</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <Badge variant={availability.variant} size="sm">
              {availability.label}
            </Badge>
            {product.isNew && (
              <Badge variant="primary" size="sm">
                Nowość
              </Badge>
            )}
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Button
              size="sm"
              variant={inRFQ ? 'secondary' : 'primary'}
              onClick={handleAddToRFQ}
              leftIcon={inRFQ ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
            >
              {inRFQ ? 'W zapytaniu' : 'Dodaj do zapytania'}
            </Button>
            <button
              className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-primary-600 hover:border-primary-600 transition-colors"
              aria-label="Porównaj"
            >
              <CompareIcon size={18} />
            </button>
          </div>
        </div>
      </article>
    )
  }

  // Grid variant (default)
  return (
    <article className="card group overflow-hidden flex flex-col h-full">
      {/* Image */}
      <Link
        href={`/produkt/${product.slug}`}
        className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden"
      >
        <span className="text-gray-400 text-lg group-hover:text-primary-500 transition-colors">
          {/* Placeholder */}
          IMG
        </span>

        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <Badge variant="primary" size="sm">
              Nowość
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="info" size="sm">
              Bestseller
            </Badge>
          )}
        </div>

        {/* Quick actions overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Dodaj do ulubionych"
          >
            <HeartIcon size={18} />
          </button>
          <button
            className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 hover:text-primary-600 transition-colors"
            aria-label="Porównaj"
          >
            <CompareIcon size={18} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          {manufacturer && (
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {manufacturer.name}
            </span>
          )}
          <Link href={`/produkt/${product.slug}`}>
            <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors mt-0.5 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-1.5 mt-3 flex-wrap">
            <Badge variant={availability.variant} size="sm">
              {availability.label}
            </Badge>
            {category && (
              <Badge size="sm">{category.name}</Badge>
            )}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          {product.priceFrom ? (
            <div className="mb-3">
              <span className="text-xs text-gray-500">od</span>
              <span className="text-xl font-bold text-gray-900 ml-1">
                {product.priceFrom.toLocaleString('pl-PL')} zł
              </span>
              <span className="text-xs text-gray-500 ml-1">netto</span>
            </div>
          ) : (
            <div className="mb-3">
              <span className="text-sm text-gray-500">Cena na zapytanie</span>
            </div>
          )}

          <Button
            fullWidth
            size="sm"
            variant={inRFQ ? 'secondary' : 'primary'}
            onClick={handleAddToRFQ}
            leftIcon={inRFQ ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
          >
            {inRFQ ? 'W zapytaniu' : 'Dodaj do zapytania'}
          </Button>
        </div>
      </div>
    </article>
  )
}
