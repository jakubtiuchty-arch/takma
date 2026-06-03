import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@/components/ui/Icons'
import LiveRibbonPrice, { LiveRibbonAvailability, LiveRibbonProvider, LiveRibbonCartActions } from './LiveRibbonPrice'
import { ribbonNameToSlug } from '@/lib/ribbon-name-to-slug'
import { stripMarkdown } from '@/lib/strip-markdown'
import { getRibbonSeriesBySlug } from '@/data/transfer-ribbon-series'
import {
  getProductBySlug,
  getRibbonVariantImage,
  pickRibbonVariantForLabel,
  variantSizeSlug,
  type Product,
  type ProductVariant,
} from '@/data/products'
import type { TransferLabelSeries } from '@/data/transfer-label-series'

interface Props {
  recommendedRibbons: TransferLabelSeries['recommendedRibbons']
  seriesTitle: string
  /** Szerokość etykiety w mm — gdy podana, dobieramy konkretny wariant taśmy
   *  o najbliższej pasującej szerokości (`labelWidth+2..+10 mm`). Bez tej wartości
   *  fallback do pierwszego wariantu (typowo najtańszego). */
  labelWidthMm?: number
  /** Gilza etykiety (rdzeń) w mm — klucz do dobrania klasy drukarki:
   *  ≤ 25 mm → desktop → krótkie taśmy (74 m) z gilzą 12 mm
   *  ≥ 38 mm → industrial → długie taśmy (300/450 m) z gilzą 25 mm */
  labelCoreMm?: number
}

interface ResolvedRibbon {
  /** Oryginalna nazwa rekomendacji (np. "Zebra 5095 Resin") */
  modelName: string
  /** Produkt taśmy w katalogu */
  product: Product
  /** Wybrany wariant — konkretny SKU (lub fallback) */
  variant: ProductVariant
  /** Krótki tagline z series — argument wyboru ("Bestseller", "Najtańsza", "Premium…") */
  tagline: string
}

/** Mapuje nazwę taśmy z `recommendedRibbons` (np. "Zebra 5095 Resin") na konkretny wariant
 *  produktu w katalogu, opcjonalnie dopasowany do szerokości i gilzy etykiety. */
function resolveRibbon(modelName: string, labelWidthMm?: number, labelCoreMm?: number): ResolvedRibbon | null {
  const slug = ribbonNameToSlug(modelName)
  const series = getRibbonSeriesBySlug(slug)
  if (!series) return null
  const product = getProductBySlug(series.productId)
  if (!product || !product.variants?.length) return null

  const variant = labelWidthMm
    ? pickRibbonVariantForLabel(product, labelWidthMm, labelCoreMm)
    : product.variants.find(v => parseFloat(v.attributes['Szerokość']?.match(/(\d+)/)?.[1] ?? '0') === 110)
      ?? product.variants[0]

  if (!variant) return null
  return { modelName, product, variant, tagline: series.tagline }
}

export default function RecommendedRibbonsBlock({
  recommendedRibbons: rr,
  seriesTitle,
  labelWidthMm,
  labelCoreMm,
}: Props) {
  const waxResin = (rr.waxResin ?? [])
    .map(name => resolveRibbon(name, labelWidthMm, labelCoreMm))
    .filter((r): r is ResolvedRibbon => r !== null)
  const resin = (rr.resin ?? [])
    .map(name => resolveRibbon(name, labelWidthMm, labelCoreMm))
    .filter((r): r is ResolvedRibbon => r !== null)

  if (waxResin.length === 0 && resin.length === 0) return null

  return (
    <section id="tasmy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Jaką taśmę barwiącą dokupić?
        </h2>
        <p className="text-gray-600 mb-5 text-sm sm:text-base">
          Druk termotransferowy <strong>wymaga taśmy barwiącej</strong>.
          {labelWidthMm ? (
            <> Dla etykiety <strong>{seriesTitle}</strong> dobraliśmy taśmy o szerokości pasującej do {labelWidthMm} mm:</>
          ) : (
            <> Dla serii {seriesTitle} polecane modele taśm:</>
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {waxResin.map((r, i) => (
            <RibbonVariantCard
              key={r.variant.partNumber}
              resolved={r}
              role={i === 0 ? 'primary' : 'alternative'}
              groupLabel="Do papieru (wosk / wosk-żywica)"
            />
          ))}
          {resin.map((r, i) => (
            <RibbonVariantCard
              key={r.variant.partNumber}
              resolved={r}
              role={i === 0 ? 'primary' : 'alternative'}
              groupLabel="Do folii (żywiczna)"
            />
          ))}
        </div>

        <p className="mt-5">
          <Link
            href="/tasmy-termotransferowe"
            className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline text-sm"
          >
            Zobacz wszystkie taśmy termotransferowe <ArrowRightIcon size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}

/** Wyciąga "pigułkę argumentu" z taglinu — pierwsze słowo, które w naszym schemacie
 *  taglinów to zawsze kategoria: Bestseller / Premium / Standardowa / Ekonomiczna /
 *  Performance / Specjalistyczna. Specjalny case dla "Ekonomiczna…najtańsza" → "Najtańsza". */
function extractHighlight(tagline: string): string {
  if (/najtańsza/i.test(tagline)) return 'Najtańsza'
  const firstWord = tagline.split(/\s+/)[0] ?? ''
  return firstWord.replace(/[.,]$/, '')
}

function RibbonVariantCard({
  resolved: { product, variant, tagline },
  role,
  groupLabel,
}: {
  resolved: ResolvedRibbon
  role: 'primary' | 'alternative'
  groupLabel: string
}) {
  const sizeSlug = variantSizeSlug(variant)
  const href = `/produkt/${product.slug}/${sizeSlug}/${variant.partNumber}`
  // Adekwatne zdjęcie do długości rolki — desktop dla < 200 m, industrial dla ≥ 200 m.
  const image = getRibbonVariantImage(product, variant)
  const isPrimary = role === 'primary'
  const highlight = extractHighlight(tagline)

  // Nazwa serii bez prefiksu "Zebra" (eyebrow już zawiera ZEBRA)
  const seriesNameClean = product.name
    .replace(/^Taśma termotransferowa\s+/i, '')
    .replace(/^Zebra\s+/i, '')

  const w = variant.attributes['Szerokość']
  const l = variant.attributes['Długość']
  const sizeDescriptor = w && l ? `${w.replace(' ', '')}×${l.replace(' ', '')}` : variant.name

  // Cena ORAZ dostępność pobierane są live z `/api/stock` przez `LiveRibbonProvider`
  // (statyczne `variant.availability` i `priceFrom` w danych bywają nieaktualne).

  return (
    <LiveRibbonProvider partNumber={variant.partNumber} fallbackPrice={variant.priceFrom}>
    <div
      className={`group bg-white rounded-2xl overflow-hidden transition-all flex flex-col ${
        isPrimary
          ? 'border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-md'
          : 'border border-slate-200 hover:border-slate-300 hover:shadow-md'
      }`}
    >
      {/* Klikalny obszar: obraz + treść */}
      <Link href={href} className="flex flex-col flex-1">
        {/* Image area */}
        <div className="relative aspect-square bg-white">
          {image ? (
            <Image
              src={image}
              alt={`Zebra ${seriesNameClean} ${sizeDescriptor}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs">
              brak zdjęcia
            </div>
          )}
          {isPrimary && (
            <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-emerald-600 text-white">
              ✓ Polecana
            </span>
          )}
          {!isPrimary && (
            <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-700 text-white">
              Alternatywa
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              ZEBRA
            </span>
            <span aria-hidden className="text-slate-300 text-[11px]">·</span>
            <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
              isPrimary
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-slate-100 text-slate-600'
            }`}>
              {highlight}
            </span>
          </div>

          <h4 className="text-base font-bold text-gray-900 leading-snug mb-1">
            Zebra {seriesNameClean} {sizeDescriptor}
          </h4>

          {/* Tagline — krótki argument wyboru, NAJWAŻNIEJSZE info dla klienta na liście */}
          <p className="text-sm text-gray-600 mb-3 leading-snug line-clamp-2">
            {stripMarkdown(tagline)}
          </p>

          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{groupLabel}</span>
            <span aria-hidden className="text-gray-300">·</span>
            <span className="font-mono">{variant.partNumber}</span>
          </p>

          <div className="min-h-[26px]">
            <LiveRibbonAvailability />
          </div>
        </div>
      </Link>

      {/* Footer: cena + akcje (poza linkiem — koszyk to button) */}
      <div className="px-5 pb-5">
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-1.5 mb-3 min-h-[28px]">
            <LiveRibbonPrice />
          </div>
          <LiveRibbonCartActions
            id={`${product.slug}__${variant.partNumber}`}
            name={`Zebra ${seriesNameClean} ${sizeDescriptor}`}
            slug={product.slug}
            image={image}
            partNumber={variant.partNumber}
            categoryId={product.categoryId}
            href={href}
          />
        </div>
      </div>
    </div>
    </LiveRibbonProvider>
  )
}
