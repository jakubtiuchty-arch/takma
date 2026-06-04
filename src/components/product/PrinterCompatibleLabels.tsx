'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products, thermalSizeSlug, type Product, type ProductVariant } from '@/data/products'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { useCartStore } from '@/store/cartStore'
import { Badge } from '@/components/ui'
import { ArrowRightIcon, PlusIcon, CheckIcon, BellIcon } from '@/components/ui/Icons'
import type { StockInfo } from '@/lib/ingram'

/**
 * Domyślne 8 najpopularniejszych wariantów etykiet (Z-Perform 1000D bestseller) — wszystkie
 * ≤102 mm szerokości, pasują do drukarek 4". Stosowane dla większości drukarek termicznych.
 */
const DEFAULT_VARIANTS = [
  { productId: 'zebra-z-perform-1000d', partNumber: '3002908' },    // 102×38 mm — adresowe
  { productId: 'zebra-z-perform-1000d', partNumber: '3002654' },    // 102×64 mm — produktowe
  { productId: 'zebra-z-perform-1000d', partNumber: '3007096-T' },  // 102×152 mm — paczkomaty
  { productId: 'zebra-z-perform-1000d', partNumber: '3007891' },    // 102×178 mm — wysyłkowe XL
  { productId: 'zebra-z-perform-1000d', partNumber: '3005807' },    // 76×51 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3006307-T' },  // 57×32 mm — cenówki
  { productId: 'zebra-z-perform-1000d', partNumber: '3004996' },    // 51×25 mm — identyfikacja
  { productId: 'zebra-z-perform-1000d', partNumber: '3002549' },    // 32×25 mm — małe produkty
] as const

/**
 * Override dla drukarek entry-level (ZD220d/ZD230d/ZD421d) — Z-Essentials najpierw, bo to
 * najtańsze etykiety w portfolio i naturalny pairing dla budget drukarek.
 */
const ESSENTIALS_FIRST_VARIANTS = [
  { productId: 'zebra-z-essentials-1000d', partNumber: 'ZIPZED3018655XL' },  // 102×152 z topcoat
  { productId: 'zebra-z-essentials-500d', partNumber: 'ZIPZED3018654XL' },   // 102×152 budget
  { productId: 'zebra-z-perform-1000d', partNumber: '3002908' },             // 102×38 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3002654' },             // 102×64 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3007891' },             // 102×178 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3005807' },             // 76×51 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3006307-T' },           // 57×32 mm
  { productId: 'zebra-z-perform-1000d', partNumber: '3004996' },             // 51×25 mm
] as const

const ESSENTIALS_FIRST_PRINTERS = new Set([
  'zebra-zd220d',
  'zebra-zd230d',
  'zebra-zd421d',
])

function getBestsellerVariants(printerSlug?: string) {
  if (printerSlug && ESSENTIALS_FIRST_PRINTERS.has(printerSlug)) {
    return ESSENTIALS_FIRST_VARIANTS
  }
  return DEFAULT_VARIANTS
}

interface VariantData {
  product: Product
  variant: ProductVariant
  seriesTitle: string
}

function getVariantData(spec: { productId: string; partNumber: string }): VariantData | null {
  const product = products.find(p => p.id === spec.productId)
  if (!product) return null
  const variant = product.variants?.find(v => v.partNumber === spec.partNumber)
  if (!variant) return null
  const series = thermalLabelSeries.find(s => s.productId === spec.productId)
  return { product, variant, seriesTitle: series?.title ?? product.name.replace(/^Etykiety termiczne Zebra /, '') }
}

const AVAILABILITY_CONFIG = {
  available: { label: 'Dostępny', variant: 'success' as const },
  'on-order': { label: 'Na zamówienie', variant: 'warning' as const },
  unavailable: { label: 'Niedostępny', variant: 'danger' as const },
}

/** Kafelek wariantu — wygląd spójny z ProductCard (grid + dual buttons) używanym dla etykiet TT. */
function VariantCard({
  product,
  variant,
  seriesTitle,
  stockInfo,
  stockLoading,
}: {
  product: Product
  variant: ProductVariant
  seriesTitle: string
  stockInfo?: StockInfo
  stockLoading: boolean
}) {
  const { addItem, isInCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const rozmiar = variant.attributes['Rozmiar'] ?? ''
  const productImage = product.images[0]
  const hasRealImage = !!productImage && !productImage.includes('placeholder')
  // Live nadpisuje editorial gdy dystrybutor zwrócił realny sygnał: found=true LUB totalStock>0
  // (np. override Jarltech, który nie ustawia found). Brak sygnału → editorial fallback.
  const liveSignal = !!stockInfo && (stockInfo.found || stockInfo.totalStock > 0)
  const liveAvailability = liveSignal ? stockInfo!.availability : variant.availability
  const livePrice = liveSignal && stockInfo!.price ? stockInfo!.price : variant.priceFrom
  const isUnavailable = liveAvailability === 'unavailable'
  const availability = AVAILABILITY_CONFIG[liveAvailability]

  // URL wariantu: /produkt/[slug]/[size]/[pn] — statyczny, indeksowalny per SKU
  const sizeSlug = rozmiar ? thermalSizeSlug(rozmiar) : ''
  const variantHref = sizeSlug
    ? `/produkt/${product.slug}/${sizeSlug}/${variant.partNumber}`
    : `/produkt/${product.slug}`

  const fullName = `Zebra ${seriesTitle}${rozmiar ? ` ${rozmiar}` : ''}`
  const cartId = `${product.id}-${variant.partNumber}`
  const inCart = mounted ? isInCart(cartId) : false

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: cartId,
      name: fullName,
      slug: product.slug,
      image: productImage,
      partNumber: variant.partNumber,
      priceNetto: livePrice,
      categoryId: 'materialy-eksploatacyjne',
    })
  }

  return (
    <article className="card group overflow-hidden flex flex-col h-full">
      <Link
        href={variantHref}
        className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden"
      >
        {hasRealImage ? (
          <Image
            src={productImage}
            alt={fullName}
            fill
            className="object-contain p-3"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <span className="text-gray-300 text-sm group-hover:text-primary-500 transition-colors">IMG</span>
        )}
      </Link>

      <div className="p-2 sm:p-3 flex flex-col flex-1">
        <div className="flex-1">
          <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">ZEBRA</span>
          <Link href={variantHref}>
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900 hover:text-primary-600 transition-colors mt-0.5 line-clamp-2 leading-tight">
              {fullName}
            </h3>
          </Link>
          <div className="mt-1.5">
            <Badge variant={availability.variant} size="sm">{availability.label}</Badge>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          {stockLoading ? (
            <div className="mb-2">
              <span className="inline-block h-5 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : livePrice ? (
            <div className="mb-2">
              <span className="text-sm sm:text-lg font-bold text-gray-900">
                {livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 ml-0.5 sm:ml-1">netto/rolka</span>
            </div>
          ) : (
            <div className="mb-2">
              <span className="text-sm text-gray-500">Cena na zapytanie</span>
            </div>
          )}

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-1.5 sm:gap-2">
            {isUnavailable ? (
              <Link
                href={variantHref}
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <BellIcon size={14} />
                Powiadom
              </Link>
            ) : !livePrice ? (
              <Link
                href={variantHref}
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors"
              >
                Zobacz więcej
              </Link>
            ) : (
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-all active:scale-[0.98] ${
                  inCart
                    ? 'text-primary-600 bg-white border-2 border-primary-600'
                    : 'text-gray-900 bg-[#A8F000] hover:bg-[#96d800]'
                }`}
              >
                {inCart ? <CheckIcon size={14} /> : <PlusIcon size={14} />}
                {inCart ? 'Dodano' : 'Koszyk'}
              </button>
            )}
            <Link
              href={variantHref}
              className="flex items-center justify-center text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 transition-colors whitespace-nowrap"
            >
              Więcej
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * Sekcja "Etykiety termiczne" na karcie produktu drukarki termicznej. Renderuje 8 kart
 * konkretnych wariantów rozmiarowych (PN, nie serii) z live ceną i dostępnością z API
 * Ingram/BlueStar/Jarltech. Każda karta linkuje do /produkt/{seria}?pn={PN}.
 */
/** Parsuje szerokość etykiety (mm) z atrybutu „Rozmiar" (np. „102×38 mm" → 102). */
function labelWidthMm(rozmiar?: string): number | null {
  const m = rozmiar?.match(/(\d+(?:[.,]\d+)?)\s*[×xX]/)
  return m ? parseFloat(m[1].replace(',', '.')) : null
}

export default function PrinterCompatibleLabels({
  printerSlug,
  printWidthMm,
}: {
  printerSlug?: string
  printWidthMm?: number
}) {
  const bestsellers = getBestsellerVariants(printerSlug)
  // Filtr szerokości głowicy — etykieta nie może być szersza niż głowica drukarki
  // (np. drukarka 2"/56 mm nie dostaje etykiet 102 mm). Tolerancja 2 mm.
  const fits = (rozmiar?: string) => {
    if (!printWidthMm) return true
    const w = labelWidthMm(rozmiar)
    return w == null || w <= printWidthMm + 2
  }
  let candidates = bestsellers
    .map(getVariantData)
    .filter((v): v is VariantData => v !== null && fits(v.variant.attributes['Rozmiar']))

  // Zawsze powiększamy pulę z Z-Perform 1000D — po sprawdzeniu stanu pokażemy tylko
  // DOSTĘPNE, więc potrzeba więcej kandydatów (mieszczących się w głowicy).
  {
    const zp = products.find(p => p.id === 'zebra-z-perform-1000d')
    const series = thermalLabelSeries.find(s => s.productId === 'zebra-z-perform-1000d')
    const seen = new Set(candidates.map(v => v.variant.partNumber))
    const extra = (zp?.variants ?? [])
      .map(v => ({ v, w: labelWidthMm(v.attributes['Rozmiar']) }))
      .filter(x => x.w != null && (!printWidthMm || x.w! <= printWidthMm + 2) && !seen.has(x.v.partNumber))
      .sort((a, b) => (b.w! - a.w!)) // najszersze mieszczące się najpierw
      .map(x => ({ product: zp!, variant: x.v, seriesTitle: series?.title ?? 'Z-Perform 1000D' }))
    candidates = [...candidates, ...extra].slice(0, 16)
  }

  const partNumbers = candidates.map(v => v.variant.partNumber)
  const { stockData, loading: stockLoading } = useStockData(partNumbers)

  if (candidates.length === 0) return null

  // Pokazujemy WYŁĄCZNIE dostępne (stan PL lub EU). Podczas ładowania — pierwsze 8.
  const isAvailable = (pn: string) => {
    const s = stockData.get(pn)
    return !!s && (s.found || s.totalStock > 0) && s.availability === 'available'
  }
  const shown = stockLoading
    ? candidates.slice(0, 8)
    : candidates.filter(v => isAvailable(v.variant.partNumber)).slice(0, 8)

  if (!stockLoading && shown.length === 0) return null

  return (
    <section id="etykiety-papierowe" className="scroll-mt-24">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Etykiety termiczne</h2>
        <span className="text-sm text-gray-400">Najpopularniejsze rozmiary</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shown.map(({ product, variant, seriesTitle }) => (
          <VariantCard
            key={variant.partNumber}
            product={product}
            variant={variant}
            seriesTitle={seriesTitle}
            stockInfo={stockData.get(variant.partNumber)}
            stockLoading={stockLoading}
          />
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100 text-center">
        <Link
          href="/etykiety-termiczne-zebra"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          Zobacz wszystkie etykiety termiczne (12 serii, 582 warianty)
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  )
}
