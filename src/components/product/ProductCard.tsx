'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge, Button } from '@/components/ui'
import { PlusIcon, CheckIcon, BellIcon } from '@/components/ui/Icons'
import type { ProductCardData } from './ProductGrid'
import { getManufacturerById } from '@/data/manufacturers'
import { useCartStore } from '@/store/cartStore'
import { useEffect, useState, useMemo } from 'react'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { trackAddToCart, trackSelectItem } from '@/lib/ga-events'

interface ProductCardProps {
  product: ProductCardData
  variant?: 'grid' | 'list' | 'compact'
  showDualButtons?: boolean
  /** Nazwa listy do GA4 (np. slug kategorii) — trafia do `select_item`. */
  listName?: string
}

function getPartNumbers(product: ProductCardData): string[] {
  if (product.variants && product.variants.length > 0) {
    return product.variants.map(v => v.partNumber)
  }
  const pnSpec = product.specifications.find(s => s.name === 'Part Number')
  return pnSpec ? [pnSpec.value] : []
}

/**
 * Link do karty produktu. Dla serii etykiet termicznych (subcategoryId 'etykiety-termiczne')
 * kierujemy do variant browsera /etykiety-termiczne-zebra/serie/[slug] zamiast strony parent — klient
 * od razu widzi wszystkie 200+ wariantów rozmiarowych z filtrem szerokość/wysokość/gilza.
 */
function getProductHref(product: ProductCardData): string {
  if (product.subcategoryIds?.includes('etykiety-termiczne')) {
    const seriesSlug = product.slug.replace(/^zebra-/, '')
    return `/etykiety-termiczne-zebra/serie/${seriesSlug}`
  }
  return `/produkt/${product.slug}`
}

export default function ProductCard({ product, variant = 'grid', showDualButtons = false, listName }: ProductCardProps) {
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
  const productHref = getProductHref(product)

  // Live dostępność z Ingram — tylko gdy Ingram faktycznie znalazł PN-y (found: true)
  const anyFound = !stockLoading && partNumbers.length > 0 && stockData.size > 0 &&
    partNumbers.some(pn => stockData.get(pn)?.found)

  // Zasada sklepu (2026-06-12): binarnie — jest na stanie → Dostępny,
  // brak stanu → Niedostępny. Bez stanów pośrednich na badge'ach.
  const liveStatus = anyFound ? (() => {
    for (const pn of partNumbers) {
      const stock = stockData.get(pn)
      if (stock?.found && stock.totalStock > 0) return 'available' as const
    }
    return 'unavailable' as const
  })() : null

  // Statyczna cena: product.priceFrom lub najtańszy wariant
  const staticPrice = useMemo(() => {
    if (product.priceFrom) return product.priceFrom
    const variantPrices = product.variants
      ?.map(v => v.priceFrom)
      .filter((p): p is number => p != null && p > 0)
      .sort((a, b) => a - b)
    return variantPrices?.[0]
  }, [product.priceFrom, product.variants])

  // Live cena z API. Najpierw najtańszy wariant, który faktycznie leży na
  // magazynie — inaczej kafel obiecuje cenę konfiguracji, której nie da się
  // kupić od ręki. Gdy nic nie ma stanu, pokazujemy najtańszą cenę katalogową.
  const displayPrice = useMemo(() => {
    if (stockLoading || !anyFound) return staticPrice
    const znalezione = partNumbers
      .map(pn => stockData.get(pn))
      .filter((s): s is NonNullable<typeof s> => !!s?.found && !!s?.price)
    const posortuj = (lista: typeof znalezione) => lista.map(s => s.price!).sort((a, b) => a - b)
    const naStanie = posortuj(znalezione.filter(s => s.totalStock > 0))
    return naStanie[0] ?? posortuj(znalezione)[0] ?? staticPrice
  }, [stockLoading, anyFound, partNumbers, stockData, staticPrice])

  // Czas wysyłki liczymy z pól stanu, nie z gotowego tekstu — ten w cache'u
  // bywa zapisany bez polskich znaków i różni się między źródłami.
  const czasWysylki = (() => {
    if (stockLoading || !anyFound) return null
    let pl = 0, de = 0, wDrodze = 0
    for (const pn of partNumbers) {
      const stan = stockData.get(pn)
      if (!stan?.found) continue
      pl += stan.stockPL || 0
      de += stan.stockDE || 0
      wDrodze += stan.inDelivery || 0
    }
    if (pl > 0) return 'wysyłka 24 h'
    if (de > 0) return 'wysyłka 2–3 dni'
    if (wDrodze > 0) return 'w dostawie'
    return null
  })()

  const liveAvailability = liveStatus ?? product.availability
  // 'on-order' jest zamawialne (przedsprzedaż) — dzwonek tylko dla twardego braku
  const isUnavailable = liveAvailability === 'unavailable'

  const availabilityConfig = {
    available: { label: 'Dostępny', variant: 'success' as const },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const },
  }

  const availability = availabilityConfig[liveAvailability]

  const gaItem = () => ({
    item_id: product.id,
    item_name: product.name,
    item_category: product.categoryId,
    price: displayPrice,
    quantity: 1,
  })

  // Kliknięcie w kafel — bez tego w GA4 nie widać, które pozycje listy działają.
  const handleSelect = () => trackSelectItem(gaItem(), listName ?? product.categoryId)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    trackAddToCart(gaItem())
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
          href={productHref}
          onClick={handleSelect}
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
              <span className="text-xs text-gray-500 uppercase tracking-wide">{manufacturer.name}</span>
            )}
            <Link href={productHref} onClick={handleSelect}>
              <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors truncate">
                {product.name}
              </h3>
            </Link>
            <Badge variant={availability.variant} size="sm" className="mt-1">
              {availability.label}
            </Badge>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {stockLoading && !displayPrice ? (
              <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
            ) : displayPrice ? (
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </p>
                <span className="text-xs text-gray-500">netto</span>
              </div>
            ) : (
              <span className="text-sm text-gray-500">Cena na zapytanie</span>
            )}
            <Link
              href={productHref}
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
        <Link href={productHref} className="p-3 flex flex-col flex-1">
          <span className="text-[11px] text-gray-500 font-medium leading-tight">{series}</span>
          <span className="text-sm xs:text-base font-bold text-gray-900 mt-0.5 group-hover:text-primary-600 transition-colors">{dimension}</span>
          <span className="text-xs text-gray-500 mt-0.5">{qty}</span>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${availDot[liveAvailability]}`} />
            <span className="text-[11px] text-gray-500">{availability.label}</span>
          </div>
        </Link>
        <div className="px-3 pb-3 flex items-center justify-between gap-2 mt-auto">
          {stockLoading && !displayPrice ? (
            <span className="inline-block h-4 w-16 bg-gray-200 rounded animate-pulse" />
          ) : displayPrice ? (
            <span className="text-sm font-bold text-gray-900">
              {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-xs font-normal text-gray-500 ml-0.5">zł</span>
            </span>
          ) : (
            <span className="text-xs text-gray-500">Na zapytanie</span>
          )}
          {isUnavailable ? (
            <Link
              href={productHref}
              className="p-1.5 rounded-lg text-amber-600 bg-amber-50 hover:bg-amber-100 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <BellIcon size={16} />
            </Link>
          ) : displayPrice ? (
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
          ) : null}
        </div>
      </article>
    )
  }

  // Grid variant (default)
  // Cały kafel jest celem dotyku (stretched link na tytule), a przyciski leżą
  // nad tą warstwą — bez tego 129 z 304 px wysokości karty nie reagowało.
  return (
    <article className="card group overflow-hidden flex flex-col h-full relative">
      {/* Image */}
      <Link
        href={productHref}
        className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden"
      >
        {hasRealImage ? (
          <Image src={product.images[0]} alt={product.imageDescriptions?.[0] || product.name} fill className="object-contain p-3" sizes="(max-width: 1024px) 45vw, 22vw" />
        ) : (
          <span className="text-gray-300 text-sm group-hover:text-primary-500 transition-colors">IMG</span>
        )}

      </Link>

      {/* Content */}
      <div className="p-2 sm:p-3 flex flex-col flex-1">
        <div className="flex-1">
          {manufacturer && (
            <span className="text-[11px] text-gray-500 uppercase tracking-wide font-medium">
              {manufacturer.name}
            </span>
          )}
          <Link href={productHref} onClick={handleSelect} className="after:absolute after:inset-0 after:content-['']">
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900 hover:text-primary-600 transition-colors mt-0.5 line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </Link>
          <div className="mt-1.5">
            <Badge variant={availability.variant} size="sm">{availability.label}</Badge>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-3 pt-3 border-t border-gray-100 relative z-10">
          {stockLoading && !displayPrice ? (
            <div className="mb-2">
              <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : displayPrice ? (
            <div className="mb-2">
              <span className="text-sm sm:text-lg font-bold text-gray-900">
                {displayPrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
              </span>
              <span className="text-xs text-gray-500 ml-0.5 sm:ml-1">
                {product.subcategoryIds?.includes('karty-plastikowe')
                  ? 'netto/opak.'
                  : product.priceTiers
                    ? 'netto/szt.'
                    : product.categoryId === 'materialy-eksploatacyjne'
                      // tusze i pojemnik konserwacyjny do drukarek kolorowych sprzedajemy na sztuki, reszta materiałów to rolki
                      ? (/^(Tusz|Pojemnik)\b/.test(product.name) ? 'netto/szt.' : 'netto/rolka')
                      : 'netto'}
              </span>
              {czasWysylki && <span className="block text-xs text-gray-500">{czasWysylki}</span>}
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
                  href={productHref}
                  className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BellIcon size={14} />
                  Powiadom
                </Link>
              ) : !displayPrice ? (
                <Link
                  href={productHref}
                  className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors"
                >
                  Zobacz więcej
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
                href={productHref}
                className="flex items-center justify-center text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors whitespace-nowrap"
              >
                Więcej
              </Link>
            </div>
          ) : (
            <Link
              href={productHref}
              className={`w-full flex items-center justify-center text-xs sm:text-sm font-semibold rounded-lg px-2 py-3 sm:px-3 sm:py-2.5 transition-colors ${
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
