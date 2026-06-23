import { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import Link from 'next/link'
import {
  products,
  getProductBySlug,
  getCategoryById,
  getManufacturerById,
  getSubcategoriesForProduct,
  brandCategories,
  isThermalLabelProduct,
  isTransferLabelProduct,
  isRibbonProduct,
  thermalSizeSlug,
  variantSizeSlug,
} from '@/data/products'
import { getTransferLabelSeriesByProductId } from '@/data/transfer-label-series'
import { getRibbonSeriesByProductId } from '@/data/transfer-ribbon-series'
import { ProductGallery } from '@/components/product'
import { Badge } from '@/components/ui'
import {
  ChevronRightIcon,
  DownloadIcon,
  CheckIcon,
  PhoneIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import AddToRFQButton from './AddToRFQButton'
import AskAboutProductButton from './AskAboutProductButton'
import ServicePlansBox from './ServicePlansBox'
import RelatedProducts from './RelatedProducts'
import PrinterCompatibleLabels from '@/components/product/PrinterCompatibleLabels'
import PrinterMaterialVariants from '@/components/product/PrinterMaterialVariants'
import VariantsTable from './VariantsTable'
import StockInfo from './StockInfo'
import SmartPrice from './SmartPrice'
import { SmartPriceProvider } from './SmartPriceContext'
import ContextAvailabilityBadge from './ContextAvailabilityBadge'
import ComparisonTable from './ComparisonTable'
import SpecsAccordion from './SpecsAccordion'
import { getBrandBySlug as getServiceBrandBySlug } from '@/app/serwis/_data/brands'
import { getManualByProductSlug } from '@/data/manuals'
import ViewItemTracker from './ViewItemTracker'
import { thermalLabelSeries } from '@/data/thermal-label-series'

interface ProductPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

/** Wyciągnięcie wariantu z searchParams (?pn=...) — używane do dynamic title/desc/canonical */
function pickVariant(product: ReturnType<typeof getProductBySlug>, pn: string | string[] | undefined) {
  if (!product?.variants?.length || !pn) return undefined
  const partNumber = Array.isArray(pn) ? pn[0] : pn
  return product.variants.find(v => v.partNumber === partNumber)
}

// Generowanie metadanych
export async function generateMetadata({ params, searchParams }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const { pn } = await searchParams
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produkt nie znaleziony',
    }
  }

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const variant = pickVariant(product, pn)
  const variantSize = variant?.attributes['Rozmiar']
  const variantPN = variant?.partNumber

  // SEO: dynamic title gdy wybrany wariant (rozmiar + PN), inaczej dedykowany lub fallback
  const variantSuffix = variant ? ` ${variantSize ?? ''}${variantPN ? ` — ${variantPN}` : ''}`.trim() : ''
  const baseTitle = product.seoTitle
    ?? `${product.name}${category ? ` - ${category.name}` : ''}${product.priceFrom ? ` | ${product.priceFrom.toLocaleString('pl-PL')} zł` : ''}`
  const title = variant
    ? `${product.name}${variantSize ? ` ${variantSize}` : ''}${variantPN ? ` (${variantPN})` : ''}`
    : baseTitle

  // Smart truncation — ends at last sentence boundary (.) before 160 chars
  const smartTruncate = (text: string, maxLen: number): string => {
    if (text.length <= maxLen) return text
    const truncated = text.slice(0, maxLen)
    const lastDot = truncated.lastIndexOf('.')
    if (lastDot > maxLen * 0.5) return truncated.slice(0, lastDot + 1)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '…' : truncated
  }

  // SEO: dedykowany opis lub fallback na dynamiczny — uzupełniony rozmiarem wariantu
  const priceText = product.priceFrom ? ` Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto.` : ''
  const variantsText = !variant && product.variants?.length ? ` ${product.variants.length} wariantów.` : ''
  const variantPrice = variant?.priceFrom ? ` Cena od ${variant.priceFrom.toLocaleString('pl-PL')} zł netto.` : priceText
  const variantPrefix = variant
    ? `${product.name}${variantSize ? ` w rozmiarze ${variantSize}` : ''}${variantPN ? ` (PN: ${variantPN})` : ''}. `
    : ''
  const fallbackDesc = variant
    ? `${variantPrefix}${product.shortDescription}.${variantPrice} Doradztwo techniczne i serwis.`
    : `${product.shortDescription}.${priceText}${variantsText} Doradztwo techniczne i serwis.`
  const metaDescription = !variant && product.seoDescription
    ? product.seoDescription
    : smartTruncate(fallbackDesc, 160)

  // OG description — more engaging for social media
  const ogDescription = variant
    ? `${variantPrefix}${product.shortDescription}.${variantPrice} Zamów w TAKMA.`
    : product.priceFrom
      ? `${product.shortDescription}. Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto. Sprawdź warianty i zamów w TAKMA.`
      : `${product.shortDescription}. Sprawdź i zamów w TAKMA.`

  // OG image — pełny URL z domeną (nie relative path)
  const ogImage = product.images[0] ? `https://www.takma.com.pl${product.images[0]}` : undefined

  // ── Canonical: dla etykiet (DT i TT) przekazujemy autorytet stronie serii.
  //  • Z ?pn= → canonical na nowy URL wariantu (komponent też robi 301, to backstop)
  //  • Bez ?pn= → canonical na landing serii (rozwiązuje duplicate content
  //    między /produkt/[slug] a series landing page)
  const isThermalLabel = isThermalLabelProduct(product)
  const isTransferLabel = isTransferLabelProduct(product)
  const thermalSeries = isThermalLabel
    ? thermalLabelSeries.find((s) => s.productId === product.id)
    : null
  const transferSeries = isTransferLabel ? getTransferLabelSeriesByProductId(product.id) : null
  let canonical = `https://www.takma.com.pl/produkt/${product.slug}`
  if (isThermalLabel) {
    if (variant && variantSize) {
      canonical = `https://www.takma.com.pl/produkt/${product.slug}/${thermalSizeSlug(variantSize)}/${variant.partNumber}`
    } else if (thermalSeries) {
      canonical = `https://www.takma.com.pl/etykiety-termiczne-zebra/serie/${thermalSeries.slug}`
    }
  } else if (isTransferLabel) {
    if (variant) {
      canonical = `https://www.takma.com.pl/produkt/${product.slug}/${variantSizeSlug(variant)}/${variant.partNumber}`
    } else if (transferSeries) {
      canonical = `https://www.takma.com.pl/etykiety-termotransferowe-zebra/${transferSeries.subcategory}/serie/${transferSeries.slug}`
    }
  }

  return {
    title,
    description: metaDescription,
    openGraph: {
      title: title,
      description: smartTruncate(ogDescription, 200),
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: variant ? `${product.name}${variantSize ? ` ${variantSize}` : ''}` : product.name }] : undefined,
      url: canonical,
    },
    other: {
      ...(product.priceFrom ? {
        'product:price:amount': product.priceFrom.toFixed(2),
        'product:price:currency': 'PLN',
      } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical,
      languages: {
        'pl-PL': canonical,
        'x-default': canonical,
      },
    },
  }
}

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { slug } = await params
  const { pn } = await searchParams
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Instrukcja obsługi dla tego produktu (jeśli istnieje w /instrukcje)
  const manual = getManualByProductSlug(product.slug)

  // Wybrany wariant z ?pn=... — wpływa na H1, badge, cenę i specyfikację
  const selectedVariant = pickVariant(product, pn)
  const selectedSize = selectedVariant?.attributes['Rozmiar']

  // ── Etykiety (DT i TT) — redirect na nowy, indeksowalny URL wariantu ─
  // /produkt/[slug]?pn=XXX → /produkt/[slug]/[size]/[pn]
  // Stare URLe (np. z zewnętrznych linków, kopii UA) lądują na właściwym wariancie.
  if ((isThermalLabelProduct(product) || isTransferLabelProduct(product) || isRibbonProduct(product)) && selectedVariant) {
    permanentRedirect(
      `/produkt/${product.slug}/${variantSizeSlug(selectedVariant)}/${selectedVariant.partNumber}`,
    )
  }

  // ── Rodzic etykiety/taśmy (DT, TT, ribbon) bez wybranego wariantu → 301 na series landing.
  //    Strona produktu-rodzica jest treściowym duplikatem series page; canonical
  //    sam nie wystarcza, lepiej redirect żeby Google i użytkownik trafiali tylko
  //    na series page. Wybór wariantu odbywa się tam (tabela z filtrami).
  if (!selectedVariant) {
    if (isThermalLabelProduct(product)) {
      const series = thermalLabelSeries.find(s => s.productId === product.id)
      if (series) permanentRedirect(`/etykiety-termiczne-zebra/serie/${series.slug}`)
    } else if (isTransferLabelProduct(product)) {
      const series = getTransferLabelSeriesByProductId(product.id)
      if (series) permanentRedirect(`/etykiety-termotransferowe-zebra/${series.subcategory}/serie/${series.slug}`)
    } else if (isRibbonProduct(product)) {
      const series = getRibbonSeriesByProductId(product.id)
      if (series) permanentRedirect(`/tasmy-termotransferowe/serie/${series.slug}`)
    }
  }

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const subcats = getSubcategoriesForProduct(product)
  const primarySubcategory = subcats[0] ?? null
  // Etykiety (DT/TT) — wybór wariantu na series page, na rodzicu nie pokazujemy tabeli
  // (rodzic i tak jest redirectowany wyżej, to backstop dla starych slugów bez series).
  const isThermalLabel = product.subcategoryIds?.includes('etykiety-termiczne') ?? false
  const isTransferLabel = product.subcategoryIds?.includes('etykiety-termotransferowe') ?? false
  const showVariants = !!(product.variants && product.variants.length > 0 && !isThermalLabel && !isTransferLabel)

  const availabilityConfig = {
    available: { label: 'Dostępny', variant: 'success' as const, description: 'Produkt dostępny od ręki' },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const, description: 'Czas realizacji: 7-14 dni' },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const, description: 'Produkt chwilowo niedostępny' },
  }

  const availability = availabilityConfig[product.availability]

  // Etykiety termiczne
  const compatibleConsumables = product.compatibleAccessories
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  // Etykiety foliowe termotransferowe
  const compatibleFoilLabels = (product.compatibleFoilLabels || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  // ── Dobór materiałów do drukarki: technologia + szerokość głowicy ──────────
  const isLabelPrinter = product.categoryId === 'drukarki-etykiet'
  const isTTprinter = product.subcategoryIds?.includes('termotransferowe-drukarki-etykiet') ?? false
  // Wymagany rdzeń taśmy: przemysłowe = 25 mm (1"), biurkowe = 12 mm (1/2").
  // Rolka 12 mm nie wejdzie na wieszaki przemysłówki i odwrotnie — filtrujemy rekomendowane taśmy.
  const printerRibbonCore = product.subcategoryIds?.includes('przemyslowe-drukarki-etykiet')
    ? '25'
    : product.subcategoryIds?.includes('biurkowe-drukarki-etykiet')
      ? '12'
      : undefined
  // Rdzeń (gilza) ETYKIET: biurkowe akceptują małe gilzy (12/19/25 mm) — NIE 76 mm
  // (etykieta fi76 fizycznie nie wejdzie na drukarkę desktop). Przemysłowe i pozostałe:
  // bez filtra (mieszczą każdą gilzę, w tym 25 mm na adapterze).
  const printerLabelCore: string[] | undefined = product.subcategoryIds?.includes('biurkowe-drukarki-etykiet')
    ? ['12', '19', '25']
    : undefined
  // Szerokość druku (głowicy) w mm — szukamy w wielu polach, bo część drukarek ma to
  // tylko w keyParams.szerokoscDruku, a nie w specifications (np. Honeywell PD45/PM45).
  const printWidthMm = (() => {
    const candidates = [
      product.specifications?.find((s) => s.name === 'Szerokość druku')?.value,
      product.keyParams?.szerokoscDruku,
      product.specifications?.find((s) => s.name === 'Szerokość mediów')?.value,
    ]
    for (const v of candidates) {
      const m = v?.match(/(\d+(?:[.,]\d+)?)\s*mm/)
      if (m) return parseFloat(m[1].replace(',', '.'))
    }
    return undefined
  })()
  // Taśmy barwiące do drukarek TT — 3 podstawowe serie (wosk / wosk-żywica / żywica).
  const printerRibbons = isTTprinter
    ? ['zebra-2300-wax', 'zebra-3200-wax-resin', 'zebra-5095-resin']
        .map((id) => products.find((p) => p.id === id))
        .filter(Boolean)
    : []
  // Etykiety TT — dobór niezależny od producenta drukarki: per-produkt (gdy uzupełnione,
  // głównie Zebra) lub standardowe serie Zebra (pozostali producenci). Sprzedajemy materiały
  // Zebra do każdej drukarki, a TT bez etykiet nie ma sensu.
  const STANDARD_TT_PAPER = ['zebra-z-perform-1000t', 'zebra-z-select-2000t']
  const STANDARD_TT_FOIL = ['zebra-z-ultimate-3000t-white', 'zebra-z-ultimate-3000t-silver']
  const ttPaperIds = isTTprinter
    ? (compatibleConsumables.length ? compatibleConsumables.map((c) => c!.id) : STANDARD_TT_PAPER)
    : []
  const ttFoilIds = isTTprinter
    ? (compatibleFoilLabels.length ? compatibleFoilLabels.map((c) => c!.id) : STANDARD_TT_FOIL)
    : []

  // Widoczność kotwic nawigacji = sekcje materiałów, które faktycznie się renderują niżej.
  const showLabelsNav = (isLabelPrinter && !isTTprinter) || (isTTprinter && ttPaperIds.length > 0) || compatibleConsumables.length > 0
  const showFoilNav = (isTTprinter && ttFoilIds.length > 0) || compatibleFoilLabels.length > 0
  const showRibbonNav = printerRibbons.length > 0

  // Akcesoria — grupowane wg kategorii
  const allRelated = (product.relatedAccessories || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  const relatedCards = allRelated.filter((p) => p!.subcategoryIds?.includes('karty-pcv'))
  const relatedSoftware = allRelated.filter((p) => p!.categoryId === 'oprogramowanie')
  const relatedAccessories = allRelated.filter((p) => !p!.subcategoryIds?.includes('karty-pcv') && p!.categoryId !== 'oprogramowanie')

  // Podobne produkty (relatedProducts) — dynamiczny tytuł per kategoria
  const relatedProductsList = (product.relatedProducts || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
  const relatedProductsTitle = product.categoryId === 'drukarki-etykiet' ? 'Podobne drukarki'
    : product.categoryId === 'terminale-mobilne' ? 'Podobne terminale'
    : product.categoryId === 'skanery-kodow' ? 'Podobne skanery'
    : 'Podobne produkty'

  const isDevice = ['drukarki-etykiet', 'drukarki-kart', 'drukarki-opasek', 'terminale-mobilne', 'skanery-kodow-kreskowych', 'tablety'].includes(product.categoryId)

  // JSON-LD: Product schema
  const availabilitySchemaMap = {
    available: 'https://schema.org/InStock',
    'on-order': 'https://schema.org/PreOrder',
    unavailable: 'https://schema.org/OutOfStock',
  }

  const priceValidUntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]

  const sellerOrg = {
    '@type': 'Organization',
    name: 'TAKMA',
    url: 'https://www.takma.com.pl',
  }

  // Extract model name from product name (e.g. "Zebra ZD230d" → "ZD230d")
  const modelName = manufacturer ? product.name.replace(manufacturer.name, '').trim() : product.name

  // Extract specs for JSON-LD additionalProperty — dynamicznie z specifications[]
  const weightSpec = product.specifications.find(s => s.name.toLowerCase().includes('waga'))
  const dimensionsSpec = product.specifications.find(s => s.name.toLowerCase().includes('wymiar'))

  // Klucze specyfikacji do uwzględnienia w additionalProperty
  const additionalPropertyKeys = [
    'Rozdzielczość', 'Prędkość druku', 'Interfejsy', 'Interfejs',
    'Szerokość druku', 'Maks. szerokość nośnika', 'Pamięć RAM', 'Pamięć Flash',
    'Bluetooth', 'Klasa ochrony (IP)', 'Odporność na upadki', 'Waga z baterią',
    'Bateria', 'Temperatura pracy', 'Języki programowania', 'Part Number',
    'Procesor', 'Wyświetlacz', 'Kamera', 'RFID', 'Skaner', 'Wi-Fi', 'NFC',
    'NPU/AI', 'System operacyjny', '5G',
  ]

  const dynamicAdditionalProps = product.specifications
    .filter(s => additionalPropertyKeys.some(key => s.name === key))
    .map(s => ({ '@type': 'PropertyValue' as const, name: s.name, value: s.value }))

  // Build isRelatedTo from accessories and compatible labels
  // Use @id reference instead of nested Product to avoid GSC "missing offers" error
  const relatedProductsForSchema = [
    ...relatedAccessories.slice(0, 5),
    ...compatibleConsumables.slice(0, 3),
  ].filter(Boolean).map((p) => ({
    '@type': 'Product' as const,
    name: p!.name,
    url: `https://www.takma.com.pl/produkt/${p!.slug}`,
    ...(p!.priceFrom && p!.priceFrom > 0 ? {
      offers: {
        '@type': 'Offer' as const,
        price: p!.priceFrom.toFixed(2),
        priceCurrency: 'PLN',
        availability: availabilitySchemaMap[p!.availability],
      },
    } : {}),
  }))

  // Check if product has any valid price (> 0) at product or variant level
  const hasValidPrice = (product.priceFrom && product.priceFrom > 0) ||
    (product.variants?.some(v => v.priceFrom && v.priceFrom > 0))

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    url: `https://www.takma.com.pl/produkt/${product.slug}`,
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `https://www.takma.com.pl${img}`),
    brand: manufacturer ? { '@type': 'Brand', name: manufacturer.name } : undefined,
    manufacturer: manufacturer ? { '@type': 'Organization', name: manufacturer.id === 'zebra' ? 'Zebra Technologies' : manufacturer.name, ...(manufacturer.id === 'zebra' ? { url: 'https://www.zebra.com' } : {}) } : undefined,
    model: modelName,
    category: category?.name,
    sku: product.variants?.[0]?.partNumber || product.id,
    mpn: product.variants?.[0]?.partNumber || product.id,
    datePublished: product.createdAt,
    dateModified: product.updatedAt || product.createdAt,
    inLanguage: 'pl-PL',
    ...(product.sameAs ? { sameAs: product.sameAs } : {}),
    ...(weightSpec ? { weight: { '@type': 'QuantitativeValue', value: parseFloat(weightSpec.value.replace(',', '.')) || weightSpec.value, unitCode: weightSpec.value.includes('kg') ? 'KGM' : 'GRM' } } : {}),
    ...(() => {
      const props = [
        ...(dimensionsSpec ? [{ '@type': 'PropertyValue' as const, name: 'Wymiary', value: dimensionsSpec.value }] : []),
        ...dynamicAdditionalProps,
      ]
      return props.length > 0 ? { additionalProperty: props } : {}
    })(),
    ...(relatedProductsForSchema.length > 0 ? { isRelatedTo: relatedProductsForSchema } : {}),
    ...(product.gtin13 ? { gtin13: product.gtin13 } : {}),
    ...(product.editorialReview ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.editorialReview.ratingValue,
        bestRating: product.editorialReview.bestRating,
        worstRating: 1,
        ratingCount: 1,
        reviewCount: 1,
      },
      review: {
        '@type': 'Review',
        author: { '@type': 'Organization', name: 'TAKMA' },
        datePublished: product.updatedAt || product.createdAt,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: product.editorialReview.ratingValue,
          bestRating: product.editorialReview.bestRating,
          worstRating: 1,
        },
        reviewBody: product.editorialReview.reviewBody,
      },
    } : {}),
    // Only include offers when product has valid pricing — prevents GSC schema errors
    ...(hasValidPrice ? {
      offers: product.variants && product.variants.length > 0
        ? (() => {
            const variantPrices = product.variants.filter((v) => v.priceFrom && v.priceFrom > 0).map((v) => v.priceFrom!)
            const lowPrice = variantPrices.length > 0 ? Math.min(...variantPrices) : (product.priceFrom && product.priceFrom > 0 ? product.priceFrom : undefined)
            const highPrice = variantPrices.length > 0 ? Math.max(...variantPrices) : (product.priceFrom && product.priceFrom > 0 ? product.priceFrom : undefined)
            return {
            '@type': 'AggregateOffer' as const,
            url: `https://www.takma.com.pl/produkt/${product.slug}`,
            lowPrice: lowPrice!.toFixed(2),
            highPrice: (highPrice || lowPrice)!.toFixed(2),
            priceCurrency: 'PLN',
            offerCount: product.variants.length,
            availability: availabilitySchemaMap[product.availability],
            priceValidUntil: priceValidUntil,
            offers: (() => {
              const variantsWithPrice = product.variants!.filter((v) => v.priceFrom && v.priceFrom > 0)
              if (variantsWithPrice.length > 0) {
                return variantsWithPrice.map((v) => ({
                  '@type': 'Offer' as const,
                  url: `https://www.takma.com.pl/produkt/${product.slug}`,
                  sku: v.partNumber,
                  mpn: v.partNumber,
                  name: `${product.name} — ${v.name}`,
                  price: v.priceFrom!.toFixed(2),
                  priceCurrency: 'PLN',
                  availability: availabilitySchemaMap[v.availability],
                  itemCondition: 'https://schema.org/NewCondition',
                  priceValidUntil,
                  seller: sellerOrg,
                }))
              }
              // Fallback: variants without individual prices — use product-level priceFrom
              return product.variants!.map((v) => ({
                '@type': 'Offer' as const,
                url: `https://www.takma.com.pl/produkt/${product.slug}`,
                sku: v.partNumber,
                mpn: v.partNumber,
                name: `${product.name} — ${v.name}`,
                price: product.priceFrom!.toFixed(2),
                priceCurrency: 'PLN',
                availability: availabilitySchemaMap[v.availability],
                itemCondition: 'https://schema.org/NewCondition',
                priceValidUntil,
                seller: sellerOrg,
              }))
            })(),
          }
          })()
        : {
              '@type': 'Offer',
              url: `https://www.takma.com.pl/produkt/${product.slug}`,
              price: product.priceFrom!.toFixed(2),
              priceCurrency: 'PLN',
              availability: availabilitySchemaMap[product.availability],
              itemCondition: 'https://schema.org/NewCondition',
              priceValidUntil,
              seller: sellerOrg,
            },
    } : {}),
  }

  // JSON-LD: BreadcrumbList
  const brandCategory = brandCategories.find(
    (bc) => bc.manufacturerId === product.manufacturerId && bc.categoryId === product.categoryId
  )

  const breadcrumbItems: { '@type': string; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
    { '@type': 'ListItem', position: 2, name: 'Katalog', item: 'https://www.takma.com.pl/katalog' },
  ]
  let pos = 3
  if (category) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: category.name, item: `https://www.takma.com.pl/${category.slug}` })
  }
  if (brandCategory) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: brandCategory.name, item: `https://www.takma.com.pl/${brandCategory.slug}` })
  }
  if (primarySubcategory) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: primarySubcategory.name, item: `https://www.takma.com.pl/${primarySubcategory.slug}` })
  }
  breadcrumbItems.push({ '@type': 'ListItem', position: pos, name: product.name, item: `https://www.takma.com.pl/produkt/${product.slug}` })

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  // JSON-LD: Speakable — dla Google Assistant / voice search
  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: product.name,
    datePublished: product.createdAt,
    dateModified: product.updatedAt || product.createdAt,
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://www.takma.com.pl',
    },
    about: {
      '@type': 'Thing',
      name: product.name,
      url: `https://www.takma.com.pl/produkt/${product.slug}`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#opis p:first-of-type', '#faq'],
    },
    url: `https://www.takma.com.pl/produkt/${product.slug}`,
  }

  // JSON-LD: FAQPage — structured data for product FAQ
  const faqJsonLd = product.faq && product.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  return (
    <SmartPriceProvider product={product}>
      <ViewItemTracker
        itemId={product.id}
        itemName={product.name}
        itemCategory={product.categoryId}
        price={product.priceFrom}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="container-main py-6 lg:py-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Strona główna
          </Link>
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <Link href="/katalog" className="hover:text-primary-600 transition-colors">
            Katalog
          </Link>
          {category && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link
                href={`/${category.slug}`}
                className="hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            </>
          )}
          {brandCategory && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link
                href={`/${brandCategory.slug}`}
                className="hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {brandCategory.name}
              </Link>
            </>
          )}
          {primarySubcategory && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link
                href={`/${primarySubcategory.slug}`}
                className="hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {primarySubcategory.name}
              </Link>
            </>
          )}
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Product main section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Gallery */}
          <div className="min-w-0">
            <ProductGallery images={product.images} productName={product.name} imageDescriptions={product.imageDescriptions} />
          </div>

          {/* Product info */}
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start lg:pt-10">
            {/* Title + Manufacturer logo */}
            <div className="flex items-start justify-between gap-4">
              <div className="mb-4">
                <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.seoH1 || product.name}
                  {selectedSize && <span className="text-gray-700"> {selectedSize}</span>}
                </h1>
                {(primarySubcategory || category) && (
                  <p className="text-sm xs:text-base lg:text-lg font-medium text-gray-500 mt-1">
                    {primarySubcategory?.name || category?.name}
                  </p>
                )}
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

            {/* Availability — z SmartPriceContext (jedno źródło danych) */}
            <div className="mb-6">
              <ContextAvailabilityBadge
                staticAvailability={product.availability}
                treatUnknownAsUnavailable={product.categoryId === 'materialy-eksploatacyjne'}
              />
            </div>

            {/* Variants link — ukryte dla etykiet termicznych (wybór wariantu na /serie/) */}
            {showVariants && (
              <a
                href="#warianty"
                className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-primary-400 hover:decoration-primary-600 transition-colors mb-1"
              >
                {product.variants!.length} {product.variants!.length === 1 ? 'wariant' : product.variants!.length < 5 ? 'warianty' : 'wariantów'} do wyboru ↓
              </a>
            )}

            {/* Price — smart fallback na najtańszy dostępny wariant */}
            <SmartPrice product={product} />

            {/* CTA */}
            <div className="space-y-3">
              <AddToRFQButton product={product} />
              <AskAboutProductButton productName={product.name} productSlug={product.slug} />
            </div>

            {/* Service Plans — OneCare upsell */}
            {product.servicePlans && product.servicePlans.length > 0 && (
              <ServicePlansBox
                plans={product.servicePlans}
                productSlug={product.slug}
                productName={product.name}
                manufacturerId={product.manufacturerId}
              />
            )}

            {/* Key specs */}
            {isThermalLabel && selectedVariant ? (() => {
              // Parsowanie Rozmiar np. "100×30 mm" → { width: 100, height: 30 }
              const rozmiarRaw = selectedVariant.attributes['Rozmiar'] ?? ''
              const sizeMatch = rozmiarRaw.match(/(\d+(?:[.,]\d+)?)\s*[×x]\s*(\d+(?:[.,]\d+)?)/i)
              const szerokosc = sizeMatch ? `${sizeMatch[1].replace(',', '.')} mm` : null
              const wysokosc = sizeMatch ? `${sizeMatch[2].replace(',', '.')} mm` : null
              const gilza = selectedVariant.attributes['Rdzeń (gilza)']
              // Z spec produktu: Materiał, Klej
              const materialSpec = product.specifications.find(s => s.name === 'Materiał')?.value
              const klejSpec = product.specifications.find(s => s.name === 'Klej')?.value
              const typDrukuSpec = product.specifications.find(s => s.name === 'Typ druku')?.value

              return (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {szerokosc && (
                      <div>
                        <dt className="text-sm text-gray-500">Szerokość etykiety</dt>
                        <dd className="font-medium text-gray-900">{szerokosc}</dd>
                      </div>
                    )}
                    {wysokosc && (
                      <div>
                        <dt className="text-sm text-gray-500">Wysokość etykiety</dt>
                        <dd className="font-medium text-gray-900">{wysokosc}</dd>
                      </div>
                    )}
                    {gilza && (
                      <div>
                        <dt className="text-sm text-gray-500">Rdzeń (gilza)</dt>
                        <dd className="font-medium text-gray-900">{gilza}</dd>
                      </div>
                    )}
                    {typDrukuSpec && (
                      <div>
                        <dt className="text-sm text-gray-500">Typ druku</dt>
                        <dd className="font-medium text-gray-900">{typDrukuSpec}</dd>
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
              )
            })() : product.keyParams ? (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-gray-500">Rodzaj druku</dt>
                    <dd className="font-medium text-gray-900">{product.keyParams.rodzajDruku}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Rozdzielczość</dt>
                    <dd className="font-medium text-gray-900">{product.keyParams.rozdzielczosc}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Prędkość druku</dt>
                    <dd className="font-medium text-gray-900">{product.keyParams.predkoscDruku}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Szerokość druku</dt>
                    <dd className="font-medium text-gray-900">{product.keyParams.szerokoscDruku}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Szerokość etykiet</dt>
                    <dd className="font-medium text-gray-900">{product.keyParams.szerokoscEtykiet}</dd>
                  </div>
                </dl>
              </div>
            ) : product.specifications.length > 0 ? (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specifications.slice(0, 5).map((spec) => (
                    <div key={spec.name}>
                      <dt className="text-sm text-gray-500">{spec.name}</dt>
                      <dd className="font-medium text-gray-900 break-words">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

          </div>
        </div>

        {/* Tabs / Details */}
        <div className="mt-12 lg:mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex gap-1 sm:gap-6 -mb-px overflow-x-auto scrollbar-hide">
              {showVariants && (
                <a
                  href="#warianty"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-primary-600 border-b-2 border-primary-600 whitespace-nowrap"
                >
                  Warianty
                </a>
              )}
              <a
                href="#opis"
                className={`px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium whitespace-nowrap ${
                  product.variants && product.variants.length > 0
                    ? 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                    : 'text-primary-600 border-b-2 border-primary-600'
                }`}
              >
                Opis
              </a>
              <a
                href="#specyfikacja"
                className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Specyfikacja
              </a>
              <a
                href="#zastosowania"
                className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Zastosowania
              </a>
              {product.comparison && (
                <a
                  href="#porownanie"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Porównanie
                </a>
              )}
              {product.faq && product.faq.length > 0 && (
                <a
                  href="#faq"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  FAQ
                </a>
              )}
              {(product.videoUrl || product.videoFile) && (
                <a
                  href="#video"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Wideo
                </a>
              )}
              {product.downloads.length > 0 && (
                <a
                  href="#pliki"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Do pobrania
                </a>
              )}
              {(showLabelsNav || showFoilNav || showRibbonNav) && (
                <a
                  href="#etykiety-papierowe"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  {product.categoryId === 'drukarki-kart' ? 'Taśmy' : product.categoryId === 'drukarki-opasek' ? 'Opaski' : 'Materiały eksploatacyjne'}
                </a>
              )}
              {relatedCards.length > 0 && (
                <a
                  href="#karty-pcv"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Karty PCV
                </a>
              )}
              {relatedSoftware.length > 0 && (
                <a
                  href="#oprogramowanie"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Oprogramowanie
                </a>
              )}
              {relatedAccessories.length > 0 && (
                <a
                  href="#akcesoria"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  {isDevice ? 'Akcesoria' : 'Powiązane produkty'}
                </a>
              )}
              {relatedProductsList.length > 0 && (
                <a
                  href="#podobne-produkty"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  {relatedProductsTitle}
                </a>
              )}
            </nav>
          </div>

          <div className="py-8 lg:py-12 space-y-12 lg:space-y-16">
            {/* Warianty — ukryte dla etykiet termicznych (wybór wariantu odbywa się na /etykiety-termiczne-zebra/serie/[slug]) */}
            {showVariants && (
              <VariantsTable
                productSlug={product.slug}
                productName={product.name}
                productImage={product.images[0]}
                variants={product.variants!}
                variantAttributeTooltips={product.variantAttributeTooltips}
                manufacturerId={product.manufacturerId}
              />
            )}

            {/* Opis — dla etykiet termicznych bogaty content z thermal-label-series */}
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Opis produktu</h2>
              {(() => {
                const series = isThermalLabel
                  ? thermalLabelSeries.find(s => s.productId === product.id)
                  : null

                if (series) {
                  return (
                    <div className="prose prose-gray max-w-none text-[15px] leading-relaxed">
                      {/* Intro */}
                      <p className="text-gray-700 mb-6 text-base"><LinkedText text={series.heroIntro} /></p>

                      {/* Kluczowe cechy — bullet list */}
                      {series.keyHighlights.length > 0 && (
                        <>
                          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Kluczowe cechy</h3>
                          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                            {series.keyHighlights.map((h, i) => (
                              <li key={i}><LinkedText text={h} /></li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Sekcje opisowe — H3 + akapity (z obsługą list bullet '- item' i markdown **bold').
                          Pomijamy 'Kiedy NIE używać X' bo mamy lepszą bullet listę z notRecommendedFor poniżej */}
                      {series.sections
                        .filter(sec => !sec.heading.toLowerCase().startsWith('kiedy nie'))
                        .map((sec, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">{sec.heading}</h3>
                          {sec.content.split('\n\n').map((para, j) => {
                            const trimmed = para.trim()
                            if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
                              const items = trimmed.split('\n').map(l => l.replace(/^\s*-\s*/, ''))
                              return (
                                <ul key={j} className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                                  {items.map((item, k) => (
                                    <li key={k}><LinkedText text={item} /></li>
                                  ))}
                                </ul>
                              )
                            }
                            return (
                              <p key={j} className="text-gray-700 mb-4"><LinkedText text={para} /></p>
                            )
                          })}
                        </div>
                      ))}

                      {/* Zastosowania — lista */}
                      {series.applications.length > 0 && (
                        <>
                          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Główne zastosowania</h3>
                          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                            {series.applications.map((app, i) => (
                              <li key={i}><LinkedText text={app} /></li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Kiedy NIE używać */}
                      {series.notRecommendedFor.length > 0 && (
                        <>
                          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Kiedy NIE używać</h3>
                          <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                            {series.notRecommendedFor.map((nr, i) => (
                              <li key={i}><LinkedText text={nr} /></li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Atesty — gdy są */}
                      {series.certifications.length > 0 && (
                        <>
                          <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Atesty i certyfikaty</h3>
                          <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 marker:text-gray-400">
                            {series.certifications.map((c, i) => (
                              <li key={i}>
                                <strong className="text-gray-900">{c.name}</strong> — <LinkedText text={c.description} />
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Link do pełnego landingu serii */}
                      <p className="mt-6 text-sm">
                        <Link
                          href={`/etykiety-termiczne-zebra/serie/${series.slug}`}
                          className="text-primary-600 font-semibold hover:underline"
                        >
                          Zobacz pełny przewodnik po serii {series.title} →
                        </Link>
                      </p>
                    </div>
                  )
                }

                // Fallback — standardowy renderer dla pozostałych produktów
                return (
                  <div className="prose prose-gray max-w-none text-[15px] leading-relaxed">
                    {product.description.split('\n\n').map((paragraph, i) => {
                  const trimmed = paragraph.trim()

                  // ## Heading → <h3>
                  const headingMatch = trimmed.match(/^## (.+)$/)
                  if (headingMatch) {
                    return <h3 key={i} className="text-lg font-bold text-gray-900 mt-8 mb-3">{headingMatch[1]}</h3>
                  }

                  // Lista bullet: każda linia zaczyna się od "- " → <ul>
                  if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
                    const items = trimmed.split('\n').map(l => l.replace(/^\s*-\s*/, ''))
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                        {items.map((item, j) => (
                          <li key={j}><LinkedText text={item} /></li>
                        ))}
                      </ul>
                    )
                  }

                  // Cross-link do sekcji akcesoriów
                  const linkMatch = paragraph.match(/(.*sekcji )(Powiązane produkty|Akcesoria)( poniżej.*)/)
                  if (linkMatch) {
                    return (
                      <p key={i} className="text-gray-700 mb-4">
                        {linkMatch[1]}
                        <a href="#akcesoria" className="text-primary-600 font-semibold hover:underline">{linkMatch[2]}</a>
                        {linkMatch[3]}
                      </p>
                    )
                  }

                  return (
                    <p key={i} className="text-gray-700 mb-4">
                      <LinkedText text={paragraph} />
                    </p>
                  )
                })}
                  </div>
                )
              })()}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Aktualizacja: {new Date().toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}
                </span>
              </div>
            </section>

            {/* Video — embed Vidyard/YouTube or native MP4 */}
            {(product.videoUrl || product.videoFile) && (
              <section id="video">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wideo produktowe</h2>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  {product.videoFile ? (
                    <video
                      src={product.videoFile}
                      className="w-full h-full object-contain bg-[#0c1525]"
                      controls
                      preload="metadata"
                      playsInline
                      title={`Wideo produktowe — ${product.name}`}
                    />
                  ) : (
                    <iframe
                      src={product.videoUrl}
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; fullscreen; picture-in-picture"
                      title={`Wideo produktowe — ${product.name}`}
                      loading="lazy"
                    />
                  )}
                </div>
              </section>
            )}

            {/* Autoryzowany Partner Zebra — box (tylko urządzenia Zebra) */}
            {product.manufacturerId === 'zebra' && isDevice && (
              <div className="rounded-2xl overflow-hidden">
                <div className="bg-[#A8F000] px-6 py-5 text-center">
                  <h3 className="text-lg font-bold text-gray-900">Certyfikaty Zebra</h3>
                  <p className="text-sm text-gray-800 mt-1">
                    TAKMA jako jeden z nielicznych partnerów Zebra w Polsce posiada 3 oficjalne certyfikaty potwierdzające najwyższe kompetencje w sprzedaży i serwisie.
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-4 sm:gap-6">
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
                    <img src="/images/certyfikat-1-zebra.png" alt="Zebra Premier Solution Partner — Printer Repair Specialist" className="h-10 sm:h-12 w-auto" />
                  </div>
                  <a href="https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav" target="_blank" rel="noopener" className="bg-white rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/images/certyfikat-3-zebra.png" alt="Zebra Premier Solution Partner" className="h-10 sm:h-12 w-auto" />
                  </a>
                  <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
                    <img src="/images/certyfikat-2-zebra.png" alt="Zebra Premier Solution Partner — Public Sector Specialist" className="h-10 sm:h-12 w-auto" />
                  </div>
                </div>
              </div>
            )}

            {/* Specyfikacja */}
            {product.specifications.length > 0 && (
              <section id="specyfikacja">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Specyfikacja techniczna
                </h2>
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

            {/* CTA — Serwis (gdy marka ma stronę serwisową) */}
            {(() => {
              const serviceBrand = getServiceBrandBySlug(product.manufacturerId)
              if (!serviceBrand) return null
              return (
                <aside className="rounded-xl border border-slate-200 bg-gray-50 p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Potrzebujesz serwisu {serviceBrand.name}?
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    TAKMA naprawia wszystkie modele {serviceBrand.name} pogwarancyjnie — diagnostyka 48h, oryginalne części, gwarancja 3–6 mies. Wysyłka z całej Polski.
                  </p>
                  <Link
                    href={`/serwis/${serviceBrand.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-lime-600 transition-colors"
                  >
                    Sprawdź serwis urządzeń {serviceBrand.name}
                    <span aria-hidden="true">→</span>
                  </Link>
                </aside>
              )
            })()}

            {/* Porównanie */}
            {product.comparison && (
              <ComparisonTable
                title={product.comparison.title}
                models={product.comparison.models}
              />
            )}

            {/* FAQ */}
            {product.faq && product.faq.length > 0 && (
              <section id="faq">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania</h2>
                <div className="space-y-4">
                  {product.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group bg-gray-50 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 cursor-pointer hover:bg-gray-100 transition-colors">
                        <h3 className="text-sm font-semibold text-gray-900 pr-4">{item.question}</h3>
                        <ChevronRightIcon size={20} className="text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-4 pb-3 sm:px-6 sm:pb-4">
                        <p className="text-sm text-gray-600 leading-relaxed"><LinkedText text={item.answer} /></p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Pliki do pobrania */}
            {product.downloads.length > 0 && (
              <section id="pliki">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pliki do pobrania</h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {product.downloads.map((download, i) => {
                    const isExternal = download.url.startsWith('http')
                    const isSerwisZebry = download.url.includes('serwis-zebry.pl')
                    const externalRel = isSerwisZebry ? 'noopener' : 'noopener nofollow'
                    return (
                      <a
                        key={i}
                        href={download.url}
                        {...(isExternal ? { target: '_blank', rel: externalRel } : {})}
                        className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          <DownloadIcon size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{download.name}</p>
                          <p className="text-sm text-gray-500">
                            {download.type.toUpperCase()} • {download.size}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Instrukcja obsługi — link do /instrukcje/[slug] */}
            {manual && (
              <section>
                <Link
                  href={`/instrukcje/${manual.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <DownloadIcon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">Instrukcja obsługi {product.name} (PDF)</p>
                    <p className="text-sm text-gray-500">
                      Szybki start, konfiguracja i obsługa po polsku — przeglądaj online lub pobierz
                    </p>
                  </div>
                  <ChevronRightIcon size={20} className="text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              </section>
            )}

            {/* Serwis gwarancyjny — urządzenia Zebra + akcesoria serwisowe (głowice, wałki, obcinaki, odklejaki) */}
            {product.manufacturerId === 'zebra' && (product.variants?.length || /głowic|wałek|wałk|obcinak|odklejak|cutter|dispenser|platen|printhead/i.test(product.name)) && (
              <section>
                <a
                  href={product.categoryId === 'terminale-mobilne' ? 'https://www.serwis-zebry.pl/serwis-terminali-zebra' : product.categoryId === 'skanery-kodow-kreskowych' ? 'https://www.serwis-zebry.pl/serwis-skanerow-zebra' : product.categoryId === 'tablety-przemyslowe' ? 'https://www.serwis-zebry.pl/serwis-tabletow-zebra' : 'https://www.serwis-zebry.pl/serwis-drukarek-zebra'}
                  target="_blank"
                  rel="noopener"
                  className="block relative rounded-xl overflow-hidden hover:shadow-lg transition-all group bg-gray-900 min-h-[160px]"
                >
                  <img
                    src="/images/serwis-zebry-banner.jpg"
                    alt={product.categoryId === 'terminale-mobilne' ? 'Serwis-Zebry.pl — autoryzowany serwis terminali Zebra' : product.categoryId === 'skanery-kodow-kreskowych' ? 'Serwis-Zebry.pl — autoryzowany serwis skanerów Zebra' : product.categoryId === 'tablety-przemyslowe' ? 'Serwis-Zebry.pl — autoryzowany serwis tabletów Zebra' : 'Serwis-Zebry.pl — autoryzowany serwis drukarek Zebra'}
                    className="absolute inset-0 w-full h-full object-cover object-[65%_28%]"
                  />
                  <div className="relative h-full flex items-center justify-between p-6">
                    <div>
                      <p className="text-xs text-primary-400 font-semibold uppercase tracking-wide mb-1">Serwis-Zebry.pl</p>
                      <h3 className="text-lg font-bold text-white mb-1">Autoryzowany serwis gwarancyjny i pogwarancyjny</h3>
                      <p className="text-sm text-gray-300">
                        Instrukcje po polsku, sterowniki, diagnostyka AI 24/7, naprawa z odbiorem kurierem
                      </p>
                    </div>
                    <ChevronRightIcon size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0 ml-4" />
                  </div>
                </a>
              </section>
            )}

            {/* Etykiety — dobór wg technologii i szerokości głowicy:
                a) drukarka DT (termiczna, w tym mobilne) → PrinterCompatibleLabels — etykiety
                   termiczne filtrowane do szerokości głowicy (live cena/dostępność)
                b) drukarka TT → etykiety papierowe termotransferowe (compatibleAccessories)
                c) drukarki kart/opasek → RelatedProducts (taśmy/opaski) */}
            {isLabelPrinter && !isTTprinter ? (
              <PrinterCompatibleLabels printerSlug={product.slug} printWidthMm={printWidthMm} />
            ) : isTTprinter && ttPaperIds.length > 0 ? (
              <PrinterMaterialVariants
                id="etykiety-papierowe"
                title="Etykiety papierowe termotransferowe"
                productIds={ttPaperIds}
                kind="label"
                printWidthMm={printWidthMm}
                requiredCore={printerLabelCore}
              />
            ) : compatibleConsumables.length > 0 ? (
              <RelatedProducts
                id="etykiety-papierowe"
                title={product.categoryId === 'drukarki-kart' ? 'Taśmy do drukarek kart' : product.categoryId === 'drukarki-opasek' ? 'Opaski identyfikacyjne' : 'Etykiety papierowe termotransferowe'}
                products={compatibleConsumables as typeof products}
                labels={product.categoryId !== 'drukarki-kart' && product.categoryId !== 'drukarki-opasek'}
                showDualButtons
              />
            ) : null}

            {/* Etykiety foliowe termotransferowe — konkretne warianty dobrane do głowicy */}
            {isTTprinter && ttFoilIds.length > 0 ? (
              <PrinterMaterialVariants
                id="etykiety-foliowe"
                title="Etykiety foliowe termotransferowe"
                productIds={ttFoilIds}
                kind="label"
                printWidthMm={printWidthMm}
                requiredCore={printerLabelCore}
              />
            ) : compatibleFoilLabels.length > 0 ? (
              <RelatedProducts
                id="etykiety-foliowe"
                title="Etykiety foliowe termotransferowe"
                products={compatibleFoilLabels as typeof products}
                labels
                showDualButtons
              />
            ) : null}

            {/* Taśmy barwiące — wymagane do druku termotransferowego (konkretne warianty) */}
            {printerRibbons.length > 0 && (
              <PrinterMaterialVariants
                id="tasmy-barwiace"
                title="Taśmy termotransferowe"
                productIds={['zebra-2300-wax', 'zebra-3200-wax-resin', 'zebra-5095-resin']}
                kind="ribbon"
                printWidthMm={printWidthMm}
                requiredCore={printerRibbonCore}
              />
            )}

            {/* Karty PCV */}
            {relatedCards.length > 0 && (
              <RelatedProducts
                id="karty-pcv"
                title="Karty PCV"
                products={relatedCards as typeof products}
                showDualButtons
              />
            )}

            {/* Oprogramowanie */}
            {relatedSoftware.length > 0 && (
              <RelatedProducts
                id="oprogramowanie"
                title="Oprogramowanie"
                products={relatedSoftware as typeof products}
                showDualButtons
              />
            )}

            {/* Akcesoria / Powiązane produkty */}
            {relatedAccessories.length > 0 && (
              <RelatedProducts
                id="akcesoria"
                title={isDevice ? 'Akcesoria' : 'Powiązane produkty'}
                products={relatedAccessories as typeof products}
                initialLimit={4}
                showDualButtons
              />
            )}

            {/* Podobne produkty */}
            {relatedProductsList.length > 0 && (
              <RelatedProducts
                id="podobne-produkty"
                title={relatedProductsTitle}
                products={relatedProductsList as typeof products}
                initialLimit={4}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] lg:hidden z-40">
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            <AskAboutProductButton productName={product.name} productSlug={product.slug} compact />
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

      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </SmartPriceProvider>
  )
}
