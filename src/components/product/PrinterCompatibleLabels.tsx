'use client'

import Link from 'next/link'
import Image from 'next/image'
import { products, thermalSizeSlug, type Product, type ProductVariant } from '@/data/products'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'
import { ArrowRightIcon } from '@/components/ui/Icons'
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

function AvailabilityBadge({ value }: { value: ProductVariant['availability'] }) {
  const config = {
    available: { label: 'Dostępny', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    'on-order': { label: 'Na zamówienie', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
    unavailable: { label: 'Niedostępny', cls: 'bg-slate-50 text-slate-600 border-slate-200' },
  }[value]
  return (
    <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${config.cls}`}>
      {config.label}
    </span>
  )
}

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
  const rozmiar = variant.attributes['Rozmiar'] ?? ''
  const productImage = product.images[0]
  const liveAvailability = stockInfo?.found ? stockInfo.availability : variant.availability
  const livePrice = stockInfo?.found && stockInfo.price ? stockInfo.price : variant.priceFrom

  // URL wariantu: /produkt/[slug]/[size]/[pn] — statyczny, indeksowalny per SKU
  const sizeSlug = rozmiar ? thermalSizeSlug(rozmiar) : ''
  const variantHref = sizeSlug
    ? `/produkt/${product.slug}/${sizeSlug}/${variant.partNumber}`
    : `/produkt/${product.slug}`

  return (
    <Link
      href={variantHref}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
    >
      <div className="relative aspect-square bg-white">
        {productImage ? (
          <Image
            src={productImage}
            alt={`Zebra ${seriesTitle} ${rozmiar}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain p-4"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs">
            brak zdjęcia
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 border-t border-slate-100">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          ZEBRA
        </div>

        <h3 className="text-base font-bold text-gray-900 leading-snug mb-3">
          Zebra {seriesTitle}{rozmiar && ` ${rozmiar}`}
        </h3>

        <div className="mb-4 min-h-[26px]">
          {stockLoading ? (
            <span className="inline-block h-6 w-24 bg-slate-100 rounded-full animate-pulse" />
          ) : (
            <AvailabilityBadge value={liveAvailability} />
          )}
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-1.5 mb-3 min-h-[28px]">
            {livePrice ? (
              <>
                <span className="text-xl font-bold text-gray-900">
                  {livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </span>
                <span className="text-sm text-gray-500">netto</span>
              </>
            ) : (
              <span className="text-gray-400 text-sm">Zapytaj o cenę</span>
            )}
          </div>

          <span className="block w-full text-center bg-[#A8F000] group-hover:bg-[#94d600] text-gray-900 font-semibold py-3 rounded-lg transition-colors text-sm">
            Zobacz więcej
          </span>
        </div>
      </div>
    </Link>
  )
}

/**
 * Sekcja "Etykiety termiczne" na karcie produktu drukarki termicznej. Renderuje 8 kart
 * konkretnych wariantów rozmiarowych (PN, nie serii) z live ceną i dostępnością z API
 * Ingram/BlueStar/Jarltech. Każda karta linkuje do /produkt/{seria}?pn={PN}.
 */
export default function PrinterCompatibleLabels({ printerSlug }: { printerSlug?: string }) {
  const bestsellers = getBestsellerVariants(printerSlug)
  const variantData = bestsellers.map(getVariantData).filter(
    (v): v is VariantData => v !== null,
  )
  const partNumbers = variantData.map(v => v.variant.partNumber)
  const { stockData, loading: stockLoading } = useStockData(partNumbers)

  if (variantData.length === 0) return null

  return (
    <section id="etykiety-papierowe" className="scroll-mt-24">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Etykiety termiczne</h2>
        <span className="text-sm text-gray-400">Najpopularniejsze rozmiary</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {variantData.map(({ product, variant, seriesTitle }) => (
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
          href="/etykiety-termiczne"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          Zobacz wszystkie etykiety termiczne (12 serii, 582 warianty)
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  )
}
