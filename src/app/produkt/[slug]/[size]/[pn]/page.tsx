import { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import Link from 'next/link'
import {
  products,
  getProductBySlug,
  getCategoryById,
  getManufacturerById,
  variantSizeSlug,
  findThermalVariant,
  isThermalLabelProduct,
  isTransferLabelProduct,
  isRibbonProduct,
  parseLabelWidth,
  parseLabelCore,
  getRibbonVariantImage,
  type Product,
} from '@/data/products'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { transferRibbonSeries } from '@/data/transfer-ribbon-series'

// Kontekst serii — normalizuje różnice między etykietą termiczną (DT), etykietą
// termotransferową (TT) a taśmą termotransferową (ribbon): landing serii, breadcrumb,
// etykieta kategorii oraz polecane taśmy (tylko etykiety TT).
function getLabelContext(product: Product) {
  const thermal = thermalLabelSeries.find((s) => s.productId === product.id)
  if (thermal) {
    return {
      series: thermal,
      isTransfer: false as const,
      isRibbon: false as const,
      categoryLabel: 'Etykiety termiczne',
      categoryUrl: '/etykiety-termiczne-zebra',
      seriesUrl: `/etykiety-termiczne-zebra/serie/${thermal.slug}`,
      recommendedRibbons: undefined,
    }
  }
  const transfer = transferLabelSeries.find((s) => s.productId === product.id)
  if (transfer) {
    return {
      series: transfer,
      isTransfer: true as const,
      isRibbon: false as const,
      categoryLabel: 'Etykiety termotransferowe',
      categoryUrl: '/etykiety-termotransferowe-zebra',
      subcategoryLabel:
        transfer.subcategory === 'papierowe' ? 'Papierowe' :
        transfer.subcategory === 'foliowe' ? 'Foliowe' : 'Specjalne',
      subcategoryUrl: `/etykiety-termotransferowe-zebra/${transfer.subcategory}`,
      seriesUrl: `/etykiety-termotransferowe-zebra/${transfer.subcategory}/serie/${transfer.slug}`,
      recommendedRibbons: transfer.recommendedRibbons,
    }
  }
  const ribbon = transferRibbonSeries.find((s) => s.productId === product.id)
  if (ribbon) {
    return {
      series: ribbon,
      isTransfer: false as const,
      isRibbon: true as const,
      categoryLabel: 'Taśmy termotransferowe',
      categoryUrl: '/tasmy-termotransferowe',
      seriesUrl: `/tasmy-termotransferowe/serie/${ribbon.slug}`,
      recommendedRibbons: undefined,
    }
  }
  return null
}

function isLabelOrRibbonProduct(product: Product): boolean {
  return isThermalLabelProduct(product) || isTransferLabelProduct(product) || isRibbonProduct(product)
}
import { ProductGallery } from '@/components/product'
import RecommendedRibbonsBlock from '@/components/labels/RecommendedRibbonsBlock'
import {
  ChevronRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  DownloadIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import { stripMarkdown } from '@/lib/strip-markdown'
import AddToRFQButton from '../../AddToRFQButton'
import AskAboutProductButton from '../../AskAboutProductButton'
import SpecsAccordion from '../../SpecsAccordion'
import SmartPrice from '../../SmartPrice'
import { SmartPriceProvider } from '../../SmartPriceContext'
import ContextAvailabilityBadge from '../../ContextAvailabilityBadge'
import ViewItemTracker from '../../ViewItemTracker'
import RibbonLabelCountWidget from '@/components/calculators/RibbonLabelCountWidget'
import { parseLengthFromAttribute } from '@/lib/ribbon-math'

const siteUrl = 'https://www.takma.com.pl'

/** Kolor taśmy 5319 z numeru katalogowego (jedyna kolorowa taśma w gamie). Zwraca etykietę lub null. */
const RIBBON_5319_COLOR_LABELS: Record<string, string> = {
  BK: 'czarny', BL: 'niebieski', RD: 'czerwony', GD: 'złoty', GL: 'złoty',
}
function ribbon5319ColorLabel(slug: string, pn: string): string | null {
  if (slug !== 'zebra-5319-wax') return null
  const m = pn.match(/^0?5319(BK|BL|RD|GD|GL)/i)
  if (m) return RIBBON_5319_COLOR_LABELS[m[1].toUpperCase()] ?? null
  if (/^800132-/.test(pn)) return 'czarny'
  return null
}

interface PageProps {
  params: Promise<{ slug: string; size: string; pn: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; size: string; pn: string }[] = []
  for (const product of products) {
    if (!isLabelOrRibbonProduct(product) || !product.variants) continue
    for (const v of product.variants) {
      params.push({
        slug: product.slug,
        size: variantSizeSlug(v),
        pn: v.partNumber,
      })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, size, pn } = await params
  const product = getProductBySlug(slug)
  if (!product || !isLabelOrRibbonProduct(product)) return { title: 'Nie znaleziono wariantu' }
  const variant = findThermalVariant(product, size, pn)
  if (!variant) return { title: 'Nie znaleziono wariantu' }

  const rozmiar = variant.attributes['Rozmiar']
  const gilza = variant.attributes['Rdzeń (gilza)'] ?? variant.attributes['Rdzeń']
  const url = `${siteUrl}/produkt/${product.slug}/${size}/${pn}`

  const sizeLabel = rozmiar ?? variant.name ?? pn
  const colorLabel = ribbon5319ColorLabel(product.slug, pn)
  const priceText = variant.priceFrom
    ? ` od ${variant.priceFrom.toLocaleString('pl-PL')} zł netto`
    : ''
  const title = `${product.name} ${sizeLabel}${colorLabel ? ` ${colorLabel}` : ''} — PN ${pn}${priceText}`

  const smartTruncate = (text: string, maxLen: number): string => {
    if (text.length <= maxLen) return text
    const truncated = text.slice(0, maxLen)
    const lastDot = truncated.lastIndexOf('.')
    if (lastDot > maxLen * 0.5) return truncated.slice(0, lastDot + 1)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '…' : truncated
  }

  const desc = smartTruncate(
    `${product.name}${rozmiar ? ` w rozmiarze ${rozmiar}` : ''}${gilza ? `, rdzeń ${gilza}` : ''} — PN ${pn}.${priceText ? ` Cena${priceText}.` : ''} ${product.shortDescription} Wysyłka z PL, doradztwo i próbki.`,
    160,
  )

  const ogImage = product.images[0] ? `${siteUrl}${product.images[0]}` : undefined

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: { 'pl-PL': url, 'x-default': url },
    },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: `${product.name} ${sizeLabel}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ogImage ? [ogImage] : undefined,
    },
    other: variant.priceFrom
      ? {
          'product:price:amount': variant.priceFrom.toFixed(2),
          'product:price:currency': 'PLN',
        }
      : {},
  }
}

export default async function ThermalLabelVariantPage({ params }: PageProps) {
  const { slug, size, pn } = await params
  const product = getProductBySlug(slug)
  if (!product || !isLabelOrRibbonProduct(product)) notFound()
  const variant = findThermalVariant(product, size, pn)
  if (!variant) notFound()

  const rozmiar = variant.attributes['Rozmiar']

  // Normalizacja slug-u — jeśli ktoś wpisał inny format niż canonical (np. uppercase),
  // przekieruj na czysty URL żeby uniknąć duplikatów w Google.
  const canonicalSize = variantSizeSlug(variant)
  if (canonicalSize !== size) {
    permanentRedirect(`/produkt/${product.slug}/${canonicalSize}/${pn}`)
  }

  const ctx = getLabelContext(product)
  const series = ctx?.series
  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const gilza = variant.attributes['Rdzeń (gilza)'] ?? variant.attributes['Rdzeń']
  const qtyInRoll = variant.attributes['Etykiet w rolce']
  // Wersja wariantu (np. 8000D Jewelry: ze skrzydełkami / bez skrzydełek) — różnicuje warianty
  // o identycznym rozmiarze. Wyświetlana w "Kluczowych parametrach", nie w nazwie.
  const wersja = variant.attributes['Wersja']
  const url = `${siteUrl}/produkt/${product.slug}/${size}/${pn}`

  // Etykieta rozmiaru — fallback na nazwę wariantu/PN gdy brak Rozmiar (część wariantów TT)
  const sizeLabel = rozmiar ?? variant.name ?? pn
  const colorLabel = ribbon5319ColorLabel(product.slug, pn)
  const variantH1 = `${product.name} ${sizeLabel}${colorLabel ? ` ${colorLabel}` : ''}${gilza ? ` (rdzeń ${gilza})` : ''}`

  // Inne warianty tej samej serii (do "Inne rozmiary" CTA)
  const otherVariants = (product.variants || [])
    .filter((v) => v.partNumber !== pn)
    .slice(0, 6)

  // Kluczowe specyfikacje serii — do "Kluczowe parametry" obok rozmiaru/gilzy
  const typDruku = product.specifications.find((s) => s.name === 'Typ druku')?.value
  const materialSpec = product.specifications.find((s) => s.name === 'Materiał')?.value
  const klejSpec = product.specifications.find((s) => s.name === 'Klej')?.value

  // ── JSON-LD: Product schema z pojedynczym Offer ────────────────────
  const availabilityMap = {
    available: 'https://schema.org/InStock',
    'on-order': 'https://schema.org/PreOrder',
    unavailable: 'https://schema.org/OutOfStock',
  }
  const priceValidUntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toISOString()
    .split('T')[0]

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    url,
    name: variantH1,
    description: `${product.name}${rozmiar ? ` w rozmiarze ${rozmiar}` : ''}${gilza ? `, rdzeń ${gilza}` : ''}. ${product.shortDescription}`,
    image: product.images.map((i) => `${siteUrl}${i}`),
    brand: manufacturer ? { '@type': 'Brand', name: manufacturer.name } : undefined,
    manufacturer: manufacturer
      ? {
          '@type': 'Organization',
          name: manufacturer.id === 'zebra' ? 'Zebra Technologies' : manufacturer.name,
          ...(manufacturer.id === 'zebra' ? { url: 'https://www.zebra.com' } : {}),
        }
      : undefined,
    sku: variant.partNumber,
    mpn: variant.partNumber,
    category: category?.name,
    inLanguage: 'pl-PL',
    isVariantOf: {
      '@type': 'ProductGroup',
      name: product.name,
      url: ctx ? `${siteUrl}${ctx.seriesUrl}` : `${siteUrl}/produkt/${product.slug}`,
    },
    additionalProperty: [
      ...(rozmiar ? [{ '@type': 'PropertyValue', name: 'Rozmiar', value: rozmiar }] : []),
      ...(gilza ? [{ '@type': 'PropertyValue', name: 'Rdzeń', value: gilza }] : []),
      ...(qtyInRoll ? [{ '@type': 'PropertyValue', name: 'Etykiet w rolce', value: qtyInRoll }] : []),
      { '@type': 'PropertyValue', name: 'Part Number', value: variant.partNumber },
      ...(typDruku ? [{ '@type': 'PropertyValue', name: 'Typ druku', value: typDruku }] : []),
      ...(materialSpec ? [{ '@type': 'PropertyValue', name: 'Materiał', value: materialSpec }] : []),
    ],
    ...(variant.priceFrom && variant.priceFrom > 0
      ? {
          offers: {
            '@type': 'Offer',
            url,
            sku: variant.partNumber,
            mpn: variant.partNumber,
            name: variantH1,
            price: variant.priceFrom.toFixed(2),
            priceCurrency: 'PLN',
            availability: availabilityMap[variant.availability],
            itemCondition: 'https://schema.org/NewCondition',
            priceValidUntil,
            seller: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
          },
        }
      : {}),
  }

  // ── JSON-LD: BreadcrumbList ────────────────────────────────────────
  const crumbs: { name: string; item: string }[] = [
    { name: 'Strona główna', item: siteUrl },
    { name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
  ]
  if (ctx) {
    crumbs.push({ name: ctx.categoryLabel, item: `${siteUrl}${ctx.categoryUrl}` })
    if (ctx.isTransfer) {
      crumbs.push({ name: ctx.subcategoryLabel, item: `${siteUrl}${ctx.subcategoryUrl}` })
    }
    crumbs.push({ name: ctx.series.title, item: `${siteUrl}${ctx.seriesUrl}` })
  }
  crumbs.push({ name: `${sizeLabel} (${variant.partNumber})`, item: url })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  }

  // ── Kalkulator zużycia taśmy — tylko dla taśm termotransferowych ──
  const isRibbon = product.subcategoryIds?.includes('tasmy-termotransferowe') ?? false
  const rollLengthAttr = variant.attributes['Długość']
  const rollLength = rollLengthAttr ? parseLengthFromAttribute(rollLengthAttr) : null
  const ribbonPrice = variant.priceFrom ?? product.priceFrom ?? 0

  // Dane konkretnego wariantu taśmy — do unikalnej, transakcyjnej treści karty
  // (anty-kanibalizacja względem landingu serii: tu „ten rozmiar", tam pełny przewodnik).
  const ribbonWidthMm = isRibbon ? (parseInt(variant.attributes['Szerokość'] ?? '', 10) || null) : null
  const ribbonCoreMm = isRibbon && gilza ? (parseInt(gilza, 10) || null) : null
  const ribbonPrinterHint = !isRibbon ? null
    : ribbonCoreMm === 12
      ? 'Rdzeń 12 mm (0,5") — drukarki biurkowe Zebra (ZD611t, ZD621t).'
    : ribbonCoreMm === 25
      ? 'Rdzeń 25 mm (1") — drukarki mid-range, przemysłowe oraz napędy drukujące Zebra (ZT231, ZT411, ZT421, ZT510, ZT610, ZT620, ZE511/ZE521).'
    : null

  // Dane konkretnego wariantu etykiety (termicznej/TT) — unikalna, transakcyjna treść per wariant,
  // żeby każdy rozmiar/PN miał własny opis (brak duplicate content między wariantami serii).
  const wersjaLabel = !isRibbon ? (variant.attributes['Wersja'] || null) : null
  const labelCoreMm = !isRibbon && gilza ? (parseInt(gilza, 10) || null) : null
  const labelCoreHint = isRibbon ? null
    : labelCoreMm === 76
      ? 'rdzeń 76 mm (3") — drukarki przemysłowe Zebra (ZT411, ZT421, ZT510, ZT610, ZT620).'
    : labelCoreMm === 25
      ? 'rdzeń 25 mm (1") — drukarki biurkowe, mid-range i przemysłowe Zebra.'
    : labelCoreMm === 19
      ? 'rdzeń 19 mm (3/4") — kompaktowe drukarki biurkowe Zebra.'
    : null

  // ── JSON-LD: HowTo schema "Jak obliczyć ilość etykiet z rolki" (tylko taśmy) ──
  const howToSchema = isRibbon && rollLength
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `Jak obliczyć ilość etykiet z rolki ${product.name}`,
        description: `Obliczanie liczby etykiet możliwych do wydruku z rolki taśmy ${product.name} (${rollLength} m) dla zadanej wysokości etykiety.`,
        totalTime: 'PT1M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Sprawdź długość rolki',
            text: `Rolka ${variant.partNumber} ma ${rollLength} metrów taśmy.`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Określ wysokość etykiety',
            text: 'Wpisz wysokość Twojej etykiety w mm (np. 80 mm dla typowej etykiety magazynowej).',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Oblicz',
            text: 'Liczba etykiet = (długość_rolki × 1000 − 2000 mm strat) / (wysokość_etykiety + 3 mm odstępu).',
          },
        ],
      }
    : null

  return (
    <SmartPriceProvider product={product} forcedPn={variant.partNumber}>
      <ViewItemTracker
        itemId={`${product.id}-${variant.partNumber}`}
        itemName={variantH1}
        itemCategory={product.categoryId}
        price={variant.priceFrom ?? product.priceFrom}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <div className="container-main py-6 lg:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <Link href="/materialy-eksploatacyjne" className="hover:text-primary-600 transition-colors">Materiały eksploatacyjne</Link>
          {ctx && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link href={ctx.categoryUrl} className="hover:text-primary-600 transition-colors">{ctx.categoryLabel}</Link>
              {ctx.isTransfer && (
                <>
                  <ChevronRightIcon size={16} className="flex-shrink-0" />
                  <Link href={ctx.subcategoryUrl} className="hover:text-primary-600 transition-colors">{ctx.subcategoryLabel}</Link>
                </>
              )}
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link href={ctx.seriesUrl} className="hover:text-primary-600 transition-colors">{ctx.series.title}</Link>
            </>
          )}
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <span className="text-gray-900 font-medium">
            {sizeLabel} ({variant.partNumber})
          </span>
        </nav>

        {/* Product main section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Gallery */}
          <div className="min-w-0">
            <ProductGallery
              images={(() => {
                // Dla taśm — pokaż obraz adekwatny do długości wariantu (desktop vs industrial).
                const variantImage = getRibbonVariantImage(product, variant)
                if (!variantImage || !product.images.includes(variantImage)) {
                  // variantImage to dedicated desktop/industrial URL — podstawiamy na pierwszą pozycję.
                  return variantImage ? [variantImage, ...product.images.filter(i => i !== variantImage)] : product.images
                }
                // variantImage jest już w images[] — przenosimy go na początek galerii.
                return [variantImage, ...product.images.filter(i => i !== variantImage)]
              })()}
              productName={variantH1}
              imageDescriptions={product.imageDescriptions}
            />
          </div>

          {/* Product info */}
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start lg:pt-10">
            <div className="flex items-start justify-between gap-4">
              <div className="mb-4">
                <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.name} <span className="text-gray-700">{sizeLabel}{colorLabel ? ` ${colorLabel}` : ''}</span>
                </h1>
                <p className="text-sm xs:text-base lg:text-lg font-medium text-gray-500 mt-1">
                  {ctx ? `${ctx.categoryLabel} — seria ${ctx.series.title}` : 'Etykiety'}
                </p>
              </div>
              {manufacturer?.logo && (
                <Link
                  href={`/${manufacturer.slug}`}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity mt-1"
                  title={`Wszystkie produkty ${manufacturer.name}`}
                >
                  <img
                    src={manufacturer.logo}
                    alt={`Logo ${manufacturer.name}`}
                    className="h-10 lg:h-12 w-auto"
                  />
                </Link>
              )}
            </div>

            <div className="mb-6">
              <ContextAvailabilityBadge
                staticAvailability={variant.availability}
                treatUnknownAsUnavailable={product.categoryId === 'materialy-eksploatacyjne'}
                feminine={!!ctx?.isRibbon}
              />
            </div>

            <SmartPrice product={product} />

            <div className="space-y-3">
              <AddToRFQButton product={product} />
              <AskAboutProductButton
                productName={`${product.name} ${sizeLabel} (PN ${variant.partNumber})`}
                productSlug={product.slug}
              />
            </div>

            {/* Kluczowe parametry wariantu */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rozmiar && (
                  <div>
                    <dt className="text-sm text-gray-500">Rozmiar</dt>
                    <dd className="font-medium text-gray-900">{rozmiar}</dd>
                  </div>
                )}
                {wersja && (
                  <div>
                    <dt className="text-sm text-gray-500">Wersja</dt>
                    <dd className="font-medium text-gray-900">{wersja}</dd>
                  </div>
                )}
                {gilza && (
                  <div>
                    <dt className="text-sm text-gray-500">Rdzeń (gilza)</dt>
                    <dd className="font-medium text-gray-900">{gilza}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm text-gray-500">Part Number</dt>
                  <dd className="font-mono font-medium text-gray-900">{variant.partNumber}</dd>
                </div>
                {qtyInRoll && (
                  <div>
                    <dt className="text-sm text-gray-500">Etykiet w rolce</dt>
                    <dd className="font-medium text-gray-900">{qtyInRoll}</dd>
                  </div>
                )}
                {typDruku && (
                  <div>
                    <dt className="text-sm text-gray-500">Typ druku</dt>
                    <dd className="font-medium text-gray-900">{typDruku}</dd>
                  </div>
                )}
                {materialSpec && (
                  <div>
                    <dt className="text-sm text-gray-500">Materiał</dt>
                    <dd className="font-medium text-gray-900">{materialSpec}</dd>
                  </div>
                )}
                {klejSpec && (
                  <div>
                    <dt className="text-sm text-gray-500">Klej</dt>
                    <dd className="font-medium text-gray-900 break-words">{klejSpec}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Kalkulator zużycia taśmy — tylko dla taśm TT z długością rolki i ceną */}
            {isRibbon && rollLength && ribbonPrice > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <RibbonLabelCountWidget
                  rollLengthM={rollLength}
                  defaultLabelHeight={80}
                />
              </div>
            )}
          </div>
        </div>

        {/* Tabs / Details */}
        <div className="mt-12 lg:mt-16 space-y-12 lg:space-y-16">
          {/* Opis — dla taśm krótkie, UNIKALNE podsumowanie wariantu (anty-kanibalizacja:
              pełny przewodnik żyje na landingu serii). Dla etykiet zostaje pełny opis serii. */}
          {ctx && isRibbon ? (
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {ctx.series.title} — wariant {sizeLabel}
              </h2>
              <div className="prose prose-gray max-w-none text-[15px] leading-relaxed">
                <p className="text-gray-700 mb-4">
                  {stripMarkdown(ctx.series.tagline)} Ten wariant to <strong>{sizeLabel}</strong>
                  {gilza && !/rdze/i.test(sizeLabel) ? <> na rdzeniu <strong>{gilza}</strong></> : null}, numer katalogowy{' '}
                  <strong className="font-mono">{variant.partNumber}</strong>
                  {rollLength ? <>, długość rolki <strong>{rollLength} m</strong></> : null}.
                </p>
                <p className="text-gray-700 mb-4">
                  Pełną specyfikację techniczną modelu {ctx.series.title}, atesty, porównania z innymi
                  taśmami Zebra oraz dobór do konkretnych etykiet znajdziesz w przewodniku po serii.
                </p>
                <p className="mt-6">
                  <Link
                    href={ctx.seriesUrl}
                    className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline"
                  >
                    Pełny przewodnik po serii {ctx.series.title} <ArrowRightIcon size={14} />
                  </Link>
                </p>
              </div>
            </section>
          ) : ctx ? (
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {ctx.series.title} — wariant {sizeLabel}
              </h2>
              <div className="prose prose-gray max-w-none text-[15px] leading-relaxed">
                <p className="text-gray-700 mb-4">
                  {stripMarkdown(ctx.series.tagline)} Ten wariant to <strong>{sizeLabel}</strong>
                  {wersjaLabel ? <> w wersji <strong>{wersjaLabel}</strong></> : null}
                  {gilza && !/rdze/i.test(sizeLabel) ? <> na rdzeniu <strong>{gilza}</strong></> : null}
                  {qtyInRoll ? <>, <strong>{qtyInRoll}</strong> na rolce</> : null}, numer katalogowy{' '}
                  <strong className="font-mono">{variant.partNumber}</strong>.
                </p>
                <p className="text-gray-700 mb-4">
                  Pełny opis serii {ctx.series.title}, parametry techniczne, atesty i dobór do
                  zastosowań znajdziesz w przewodniku po serii.
                </p>
                <p className="mt-6">
                  <Link
                    href={ctx.seriesUrl}
                    className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline"
                  >
                    Pełny przewodnik po serii {ctx.series.title} <ArrowRightIcon size={14} />
                  </Link>
                </p>
              </div>
            </section>
          ) : null}

          {/* Dobór i kompatybilność TEGO wariantu etykiety — treść unikalna per wariant (SEO/anty-duplikacja) */}
          {ctx && !isRibbon && (rozmiar || labelCoreHint || qtyInRoll || wersjaLabel) && (
            <section id="dobor-wariantu">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ten wariant w praktyce</h2>
              <ul className="space-y-3">
                {rozmiar && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Rozmiar <strong>{rozmiar}</strong> — upewnij się, że szerokość nośnika obsługuje
                      Twoja drukarka (np. ZD230d do 104 mm, ZT411 do 114 mm).
                    </span>
                  </li>
                )}
                {wersjaLabel && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Wersja <strong>{wersjaLabel}</strong> — różnicuje sposób mocowania względem drugiego wariantu o tym samym rozmiarze.</span>
                  </li>
                )}
                {labelCoreHint && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Gilza — {labelCoreHint}</span>
                  </li>
                )}
                {qtyInRoll && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>{qtyInRoll}</strong> na rolce — im więcej etykiet, tym rzadsza wymiana rolki w drukarce.</span>
                  </li>
                )}
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Druk direct thermal — bez taśmy barwiącej, pasuje do drukarek Zebra obsługujących druk termiczny.</span>
                </li>
              </ul>
            </section>
          )}

          {/* Dobór i kompatybilność TEGO wariantu taśmy — treść transakcyjna, unikalna per wariant */}
          {isRibbon && (ribbonWidthMm || ribbonPrinterHint || rollLength) && (
            <section id="dobor-wariantu">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dobór i kompatybilność tego wariantu</h2>
              <ul className="space-y-3">
                {ribbonWidthMm && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Szerokość <strong>{ribbonWidthMm} mm</strong> — pasuje do etykiet o szerokości
                      do ok. <strong>{ribbonWidthMm - 2} mm</strong>. Taśma powinna być 2–5 mm szersza
                      niż etykieta, co chroni głowicę przed bezpośrednim kontaktem z podłożem.
                    </span>
                  </li>
                )}
                {ribbonPrinterHint && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{ribbonPrinterHint}</span>
                  </li>
                )}
                {rollLength && (
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Długość rolki <strong>{rollLength} m</strong>
                      {ribbonCoreMm === 25 ? ' — format przemysłowy.' : ribbonCoreMm === 12 ? ' — format biurkowy.' : '.'}{' '}
                      Liczbę etykiet z tej rolki policzysz kalkulatorem zużycia taśmy powyżej.
                    </span>
                  </li>
                )}
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Konstrukcja nawój zewnętrzny (Outside Coated) — pasuje do drukarek Zebra bez dodatkowej konfiguracji.</span>
                </li>
              </ul>
            </section>
          )}

          {/* Polecane taśmy barwiące — kluczowe dla TT. Komponent dobiera konkretny
              wariant taśmy (szerokość) dopasowany do szerokości etykiety. */}
          {ctx?.isTransfer && ctx.recommendedRibbons && (
            <RecommendedRibbonsBlock
              recommendedRibbons={ctx.recommendedRibbons}
              seriesTitle={`${ctx.series.title}${rozmiar ? ` ${rozmiar}` : ''}`}
              labelWidthMm={parseLabelWidth(rozmiar) ?? undefined}
              labelCoreMm={parseLabelCore(gilza) ?? undefined}
            />
          )}

          {/* Specyfikacja techniczna serii (wspólna dla wariantów) */}
          {product.specifications.length > 0 && (
            <section id="specyfikacja">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specyfikacja techniczna</h2>
              <SpecsAccordion specs={product.specifications} productName={product.name} />
            </section>
          )}

          {/* Zastosowania */}
          {product.applications.length > 0 && (
            <section id="zastosowania">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Zastosowania</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckIcon size={20} className="text-green-500 flex-shrink-0" />
                    <LinkedText text={app} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Atesty (z serii) — dla taśm pomijamy (żyją na landingu serii, anty-kanibalizacja) */}
          {ctx && !isRibbon && ctx.series.certifications.length > 0 && (
            <section id="atesty">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Atesty i certyfikaty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ctx.series.certifications.map((cert, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheckIcon size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed"><LinkedText text={cert.description} /></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Inne rozmiary tej samej serii */}
          {otherVariants.length > 0 && (
            <section id="inne-rozmiary">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Inne rozmiary {ctx ? ctx.series.title : product.name}
                </h2>
                {ctx && (
                  <Link
                    href={`${ctx.seriesUrl}#warianty`}
                    className="text-sm font-semibold text-primary-600 hover:underline whitespace-nowrap"
                  >
                    Wszystkie warianty →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {otherVariants.map((v) => {
                  const otherSize = v.attributes['Rozmiar']
                  const otherSlug = variantSizeSlug(v)
                  return (
                    <Link
                      key={v.partNumber}
                      href={`/produkt/${product.slug}/${otherSlug}/${v.partNumber}`}
                      className="block bg-white border border-slate-200 rounded-xl p-3 hover:border-slate-400 hover:shadow-sm transition-all text-center"
                    >
                      <div className="font-semibold text-gray-900 text-sm">{otherSize ?? v.name}</div>
                      <div className="text-xs text-gray-500 font-mono mt-0.5">{v.partNumber}</div>
                      {v.priceFrom && (
                        <div className="text-xs text-gray-700 mt-1">
                          {v.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł
                        </div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* Kompatybilne drukarki (z serii) */}
          {ctx && (
            <section id="kompatybilne-drukarki">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Kompatybilne drukarki Zebra</h2>
              <p className="text-gray-600 mb-6 text-sm">
                {product.name}{sizeLabel ? ` ${sizeLabel}` : ''} jest media-tested dla następujących modeli drukarek Zebra
                obsługujących {ctx.isTransfer ? 'druk termotransferowy (z taśmą)' : 'direct thermal'}.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(['desktop', 'midRange', 'industrial', 'mobile'] as const).map((cat) => {
                  const label =
                    cat === 'desktop' ? 'Drukarki biurkowe' :
                    cat === 'midRange' ? 'Mid-range' :
                    cat === 'industrial' ? 'Industrialne' : 'Mobilne'
                  const models = ctx.series.compatiblePrinters[cat]
                  if (!models || models.length === 0) return null
                  return (
                    <div key={cat} className="bg-white border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">{label}</h3>
                      <ul className="space-y-1.5">
                        {models.map((m) => (
                          <li key={m} className="text-sm text-gray-700 flex items-center gap-1.5">
                            <CheckIcon size={14} className="text-emerald-600 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Pliki do pobrania (z produktu) */}
          {product.downloads.length > 0 && (
            <section id="pliki">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pliki do pobrania</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {product.downloads.map((d, i) => {
                  const isExternal = d.url.startsWith('http')
                  return (
                    <a
                      key={i}
                      href={d.url}
                      {...(isExternal ? { target: '_blank', rel: 'noopener nofollow' } : {})}
                      className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <DownloadIcon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{d.name}</p>
                        <p className="text-sm text-gray-500">{d.type.toUpperCase()} • {d.size}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] lg:hidden z-40">
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <AskAboutProductButton
              productName={`${product.name} ${rozmiar} (PN ${variant.partNumber})`}
              productSlug={product.slug}
              compact
            />
          </div>
          <a
            href="tel:+48607819688"
            aria-label="Zadzwoń do nas"
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors active:scale-[0.96] shrink-0"
          >
            <PhoneIcon size={22} />
          </a>
        </div>
      </div>

      <div className="h-16 lg:hidden" />
    </SmartPriceProvider>
  )
}
