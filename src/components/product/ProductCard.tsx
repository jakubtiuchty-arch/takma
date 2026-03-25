'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge, Button } from '@/components/ui'
import { PlusIcon, CheckIcon, BellIcon } from '@/components/ui/Icons'
import { Product, getManufacturerById } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { useEffect, useState, useMemo } from 'react'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list' | 'compact'
  showDualButtons?: boolean
}

function getPartNumbers(product: Product): string[] {
  if (product.variants && product.variants.length > 0) {
    return product.variants.map(v => v.partNumber)
  }
  const pnSpec = product.specifications.find(s => s.name === 'Part Number')
  return pnSpec ? [pnSpec.value] : []
}

export default function ProductCard({ product, variant = 'grid', showDualButtons = false }: ProductCardProps) {
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)

  const partNumbers = useMemo(() => getPartNumbers(product), [product])
  const { stockData, loading: stockLoading } = useStockData(partNumbers)

  useEffect(() => {
    setMounted(true)
  }, [])

  const manufacturer = getManufacturerById(product.manufacturerId)
  const inRFQ = mounted ? isInCart(product.id) : false
  const hasRealImage = product.images.length > 0 && !product.images[0].includes('placeholder')

  // Live dostępność z Ingram — tylko gdy Ingram faktycznie znalazł PN-y (found: true)
  const anyFound = !stockLoading && partNumbers.length > 0 && stockData.size > 0 &&
    partNumbers.some(pn => stockData.get(pn)?.found)

  const isUnavailable = anyFound && (() => {
    for (const pn of partNumbers) {
      const stock = stockData.get(pn)
      if (stock?.found && stock.totalStock > 0) return false
    }
    return true
  })()

  // Statyczna cena: product.priceFrom lub najtańszy wariant
  const staticPrice = useMemo(() => {
    if (product.priceFrom) return product.priceFrom
    const variantPrices = product.variants
      ?.map(v => v.priceFrom)
      .filter((p): p is number => p != null && p > 0)
      .sort((a, b) => a - b)
    return variantPrices?.[0]
  }, [product.priceFrom, product.variants])

  // Live cena z API — szukaj najtańszej dostępnej ceny z Ingram
  const displayPrice = useMemo(() => {
    if (stockLoading || !anyFound) return staticPrice
    const livePrices = partNumbers
      .map(pn => stockData.get(pn))
      .filter((s): s is NonNullable<typeof s> => !!s?.found && !!s?.price)
      .map(s => s.price!)
      .sort((a, b) => a - b)
    return livePrices[0] ?? staticPrice
  }, [stockLoading, anyFound, partNumbers, stockData, staticPrice])

  const liveAvailability = !anyFound
    ? product.availability
    : isUnavailable ? 'unavailable' as const : 'available' as const

  const availabilityConfig = {
    available: { label: 'Dostępny', variant: 'success' as const },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const },
  }

  const availability = availabilityConfig[liveAvailability]

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images[0],
      partNumber: product.variants?.[0]?.partNumber || product.specifications.find(s => s.name === 'Part Number')?.value,
      priceNetto: displayPrice,
    })
  }

  if (variant === 'list') {
    return (
      <article className="card p-4 flex gap-4">
        <Link
          href={`/produkt/${product.slug}`}
          className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center group relative overflow-hidden"
        >
          {hasRealImage ? (
            <Image src={product.images[0]} alt={product.imageDescriptions?.[0] || product.name} fill className="object-contain p-1" sizes="96px" />
          ) : (
            <span className="text-gray-300 text-sm group-hover:text-primary-500 transition-colors">IMG</span>
          )}
        </Link>

        <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
          <div className="min-w-0">
            {manufacturer && (
              <span className="text-xs text-gray-400 uppercase tracking-wide">{manufacturer.name}</span>
            )}
            <Link href={`/produkt/${product.slug}`}>
              <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors truncate">
                {product.name}
              </h3>
            </Link>
            <Badge variant={availability.variant} size="sm" className="mt-1">
              {availability.label}
            </Badge>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {stockLoading ? (
              <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
            ) : displayPrice ? (
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </p>
                <span className="text-xs text-gray-400">netto</span>
              </div>
            ) : (
              <span className="text-sm text-gray-500">Cena na zapytanie</span>
            )}
            <Link
              href={`/produkt/${product.slug}`}
              className="inline-flex items-center text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap"
            >
              Zobacz więcej
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // Compact variant — for labels/consumables (no image, clean layout)
  if (variant === 'compact') {
    const dimension = product.specifications.find(s => s.name === 'Wymiar etykiety')?.value || ''
    const series = product.specifications.find(s => s.name === 'Seria')?.value || ''
    const qty = product.specifications.find(s => s.name === 'Ilość na rolce')?.value || ''

    const availDot = {
      available: 'bg-green-500',
      'on-order': 'bg-yellow-500',
      unavailable: 'bg-red-400',
    }

    return (
      <article className="card group overflow-hidden flex flex-col h-full">
        <Link href={`/produkt/${product.slug}`} className="p-3 flex flex-col flex-1">
          <span className="text-[11px] text-gray-400 font-medium leading-tight">{series}</span>
          <span className="text-sm xs:text-base font-bold text-gray-900 mt-0.5 group-hover:text-primary-600 transition-colors">{dimension}</span>
          <span className="text-xs text-gray-500 mt-0.5">{qty}</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${availDot[liveAvailability]}`} />
            <span className="text-[11px] text-gray-400">{availability.label}</span>
          </div>
        </Link>
        <div className="px-3 pb-3 flex items-center justify-between gap-2 mt-auto">
          {stockLoading ? (
            <span className="inline-block h-4 w-16 bg-gray-200 rounded animate-pulse" />
          ) : displayPrice ? (
            <span className="text-sm font-bold text-gray-900">
              {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-xs font-normal text-gray-400 ml-0.5">zł</span>
            </span>
          ) : (
            <span className="text-xs text-gray-500">Na zapytanie</span>
          )}
          {isUnavailable ? (
            <Link
              href={`/produkt/${product.slug}`}
              className="p-1.5 rounded-lg text-amber-600 bg-amber-50 hover:bg-amber-100 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <BellIcon size={16} />
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`p-1.5 rounded-lg transition-colors ${
                inRFQ
                  ? 'text-green-600 bg-green-50'
                  : 'text-primary-600 bg-primary-50 hover:bg-primary-100'
              }`}
            >
              {inRFQ ? <CheckIcon size={16} /> : <PlusIcon size={16} />}
            </button>
          )}
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
        className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden"
      >
        {hasRealImage ? (
          <Image src={product.images[0]} alt={product.imageDescriptions?.[0] || product.name} fill className="object-contain p-3" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        ) : (
          <span className="text-gray-300 text-sm group-hover:text-primary-500 transition-colors">IMG</span>
        )}

      </Link>

      {/* Content */}
      <div className="p-2 sm:p-3 flex flex-col flex-1">
        <div className="flex-1">
          {manufacturer && (
            <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">
              {manufacturer.name}
            </span>
          )}
          <Link href={`/produkt/${product.slug}`}>
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900 hover:text-primary-600 transition-colors mt-0.5 line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>
          <div className="mt-1.5">
            <Badge variant={availability.variant} size="sm">{availability.label}</Badge>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          {stockLoading ? (
            <div className="mb-2">
              <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : displayPrice ? (
            <div className="mb-2">
              <span className="text-sm sm:text-lg font-bold text-gray-900">
                {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 ml-0.5 sm:ml-1">
                {product.categoryId === 'materialy-eksploatacyjne' ? 'netto/rolka' : 'netto'}
              </span>
            </div>
          ) : (
            <div className="mb-2">
              <span className="text-sm text-gray-500">Cena na zapytanie</span>
            </div>
          )}

          {showDualButtons ? (
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-1.5 sm:gap-2">
              {isUnavailable ? (
                <Link
                  href={`/produkt/${product.slug}`}
                  className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BellIcon size={14} />
                  Powiadom
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-all active:scale-[0.98] ${
                    inRFQ
                      ? 'text-primary-600 bg-white border-2 border-primary-600'
                      : product.manufacturerId === 'zebra'
                        ? 'text-gray-900 bg-[#A8F000] hover:bg-[#96d800]'
                        : 'text-white bg-primary-600 hover:bg-primary-700'
                  }`}
                >
                  {inRFQ ? <CheckIcon size={14} /> : <PlusIcon size={14} />}
                  {inRFQ ? 'Dodano' : 'Koszyk'}
                </button>
              )}
              <Link
                href={`/produkt/${product.slug}`}
                className="flex items-center justify-center text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors whitespace-nowrap"
              >
                Więcej
              </Link>
            </div>
          ) : (
            <Link
              href={`/produkt/${product.slug}`}
              className={`w-full flex items-center justify-center text-xs sm:text-sm font-semibold rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 transition-colors ${
                product.manufacturerId === 'zebra'
                  ? 'text-gray-900 bg-[#A8F000] hover:bg-[#96d800]'
                  : 'text-white bg-primary-600 hover:bg-primary-700'
              }`}
            >
              Zobacz więcej
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
