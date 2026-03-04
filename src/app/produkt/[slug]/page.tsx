import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  products,
  getProductBySlug,
  getCategoryById,
  getManufacturerById,
  getSubcategoriesForProduct,
} from '@/data/products'
import { ProductGallery } from '@/components/product'
import { Badge } from '@/components/ui'
import {
  ChevronRightIcon,
  DownloadIcon,
  CheckIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import AddToRFQButton from './AddToRFQButton'
import AskAboutProductButton from './AskAboutProductButton'
import ServicePlansBox from './ServicePlansBox'
import RelatedProducts from './RelatedProducts'
import VariantsTable from './VariantsTable'
import StockInfo, { LiveAvailabilityBadge } from './StockInfo'
import SmartPrice from './SmartPrice'
import StickyPrice from './StickyPrice'
import ComparisonTable from './ComparisonTable'
import SpecsAccordion from './SpecsAccordion'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

// Generowanie metadanych
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produkt nie znaleziony',
    }
  }

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)

  // SEO: dedykowany tytuł lub fallback na dynamiczny
  const title = product.seoTitle
    ?? `${product.name}${category ? ` - ${category.name}` : ''}${product.priceFrom ? ` | ${product.priceFrom.toLocaleString('pl-PL')} zł` : ''}`

  // Smart truncation — ends at last sentence boundary (.) before 160 chars
  const smartTruncate = (text: string, maxLen: number): string => {
    if (text.length <= maxLen) return text
    const truncated = text.slice(0, maxLen)
    const lastDot = truncated.lastIndexOf('.')
    if (lastDot > maxLen * 0.5) return truncated.slice(0, lastDot + 1)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '…' : truncated
  }

  // SEO: dedykowany opis lub fallback na dynamiczny
  const priceText = product.priceFrom ? ` Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto.` : ''
  const variantsText = product.variants?.length ? ` ${product.variants.length} wariantów.` : ''
  const fallbackDesc = `${product.name} — ${product.shortDescription}.${priceText}${variantsText} Doradztwo techniczne i serwis.`
  const metaDescription = product.seoDescription ?? smartTruncate(fallbackDesc, 160)

  // OG description — more engaging for social media
  const ogDescription = product.priceFrom
    ? `${product.name} — ${product.shortDescription}. Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto. Sprawdź warianty i zamów w TAKMA.`
    : `${product.name} — ${product.shortDescription}. Sprawdź i zamów w TAKMA.`

  // OG image — pełny URL z domeną (nie relative path)
  const ogImage = product.images[0] ? `https://www.takma.com.pl${product.images[0]}` : undefined

  return {
    title,
    description: metaDescription,
    openGraph: {
      title: product.name,
      description: smartTruncate(ogDescription, 200),
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: product.name }] : undefined,
      url: `https://www.takma.com.pl/produkt/${product.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: `https://www.takma.com.pl/produkt/${product.slug}`,
    },
  }
}

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const subcats = getSubcategoriesForProduct(product)
  const primarySubcategory = subcats[0] ?? null

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

  // Akcesoria — grupowane wg kategorii
  const allRelated = (product.relatedAccessories || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  const relatedCards = allRelated.filter((p) => p!.subcategoryIds?.includes('karty-pcv'))
  const relatedSoftware = allRelated.filter((p) => p!.categoryId === 'oprogramowanie')
  const relatedAccessories = allRelated.filter((p) => !p!.subcategoryIds?.includes('karty-pcv') && p!.categoryId !== 'oprogramowanie')

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
            offers: product.variants.filter((v) => v.priceFrom && v.priceFrom > 0).map((v) => ({
              '@type': 'Offer',
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
            })),
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
  const breadcrumbItems: { '@type': string; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
    { '@type': 'ListItem', position: 2, name: 'Katalog', item: 'https://www.takma.com.pl/katalog' },
  ]
  let pos = 3
  if (category) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: category.name, item: `https://www.takma.com.pl/${category.slug}` })
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

  const ogProductMeta = `<meta property="og:type" content="product" />${product.priceFrom ? `<meta property="product:price:amount" content="${product.priceFrom.toFixed(2)}" /><meta property="product:price:currency" content="PLN" />` : ''}`

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var h=document.head;
          var d=document.createElement('div');
          d.innerHTML='${ogProductMeta.replace(/'/g, "\\'")}';
          while(d.firstChild)h.appendChild(d.firstChild);
        })();
      `}} />
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
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            {/* Manufacturer */}
            {manufacturer && (
              <Link
                href={`/katalog?producent=${manufacturer.slug}`}
                className="text-sm text-primary-600 font-medium hover:text-primary-700 uppercase tracking-wide"
              >
                {manufacturer.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 mb-4">
              {product.name}
              {(primarySubcategory || category) && (
                <span className="block text-sm xs:text-base lg:text-lg font-medium text-gray-500 mt-1">
                  {primarySubcategory?.name || category?.name}
                </span>
              )}
            </h1>

            {/* Availability — live z Ingram API */}
            <div className="mb-6">
              <LiveAvailabilityBadge
                staticAvailability={product.availability}
                partNumbers={
                  product.variants && product.variants.length > 0
                    ? product.variants.map(v => v.partNumber)
                    : (() => {
                        const pnSpec = product.specifications.find(s => s.name === 'Part Number')
                        return pnSpec ? [pnSpec.value] : []
                      })()
                }
              />
            </div>

            {/* Variants link */}
            {product.variants && product.variants.length > 0 && (
              <a
                href="#warianty"
                className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-primary-400 hover:decoration-primary-600 transition-colors mb-1"
              >
                {product.variants.length} {product.variants.length === 1 ? 'wariant' : product.variants.length < 5 ? 'warianty' : 'wariantów'} do wyboru ↓
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
              />
            )}

            {/* Key specs */}
            {product.keyParams ? (
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
              {product.variants && product.variants.length > 0 && (
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
              {product.videoUrl && (
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
              {compatibleConsumables.length > 0 && (
                <a
                  href="#etykiety-papierowe"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  {product.categoryId === 'drukarki-kart' ? 'Taśmy' : product.categoryId === 'drukarki-opasek' ? 'Opaski' : product.subcategoryIds?.includes('termiczne-drukarki-etykiet') ? 'Etykiety termiczne' : 'Etykiety papierowe'}
                </a>
              )}
              {compatibleFoilLabels.length > 0 && (
                <a
                  href="#etykiety-foliowe"
                  className="px-1.5 py-3 sm:px-3 sm:py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Etykiety foliowe
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
            </nav>
          </div>

          <div className="py-8 lg:py-12 space-y-12 lg:space-y-16">
            {/* Warianty */}
            {product.variants && product.variants.length > 0 && (
              <VariantsTable
                productSlug={product.slug}
                productName={product.name}
                productImage={product.images[0]}
                variants={product.variants}
                variantAttributeTooltips={product.variantAttributeTooltips}
                manufacturerId={product.manufacturerId}
              />
            )}

            {/* Opis */}
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Opis produktu</h2>
              <div className="prose prose-gray max-w-none">
                {product.description.split('\n\n').map((paragraph, i) => {
                  const linkMatch = paragraph.match(/(.*sekcji )(Powiązane produkty|Akcesoria)( poniżej.*)/)
                  if (linkMatch) {
                    return (
                      <p key={i} className="text-gray-600 mb-4 sm:text-justify">
                        {linkMatch[1]}
                        <a href="#akcesoria" className="text-primary-600 font-semibold hover:underline">{linkMatch[2]}</a>
                        {linkMatch[3]}
                      </p>
                    )
                  }
                  // Parse markdown links [text](url)
                  const parts = paragraph.split(/(\[[^\]]+\]\([^)]+\))/)
                  const hasLinks = parts.length > 1
                  return (
                    <p key={i} className="text-gray-600 mb-4 sm:text-justify">
                      {hasLinks ? parts.map((part, j) => {
                        const md = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
                        if (md) return <a key={j} href={md[2]} className="text-primary-600 hover:underline">{md[1]}</a>
                        return <span key={j}>{part}</span>
                      }) : paragraph}
                    </p>
                  )
                })}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Aktualizacja: {new Date().toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}
                </span>
              </div>
            </section>

            {/* Video — embed Vidyard/YouTube */}
            {product.videoUrl && (
              <section id="video">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wideo produktowe</h2>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src={product.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={`Wideo produktowe — ${product.name}`}
                    loading="lazy"
                  />
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
                      {app}
                    </li>
                  ))}
                </ul>
              </section>
            )}

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

            {/* Etykiety */}
            {compatibleConsumables.length > 0 && (
              <RelatedProducts
                id="etykiety-papierowe"
                title={product.categoryId === 'drukarki-kart' ? 'Taśmy do drukarek kart' : product.categoryId === 'drukarki-opasek' ? 'Opaski identyfikacyjne' : product.subcategoryIds?.includes('termiczne-drukarki-etykiet') ? 'Etykiety termiczne' : 'Etykiety papierowe termotransferowe'}
                products={compatibleConsumables as typeof products}
                labels={product.categoryId !== 'drukarki-kart' && product.categoryId !== 'drukarki-opasek'}
                showDualButtons
              />
            )}

            {/* Etykiety foliowe termotransferowe */}
            {compatibleFoilLabels.length > 0 && (
              <RelatedProducts
                id="etykiety-foliowe"
                title="Etykiety foliowe termotransferowe"
                products={compatibleFoilLabels as typeof products}
                labels
                showDualButtons
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
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 lg:hidden safe-bottom z-40">
        <div className="flex items-center gap-2">
          <StickyPrice product={product} />
          <div className="flex-1 min-w-0">
            <AddToRFQButton product={product} compact />
          </div>
          <AskAboutProductButton productName={product.name} productSlug={product.slug} compact />
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-24 lg:hidden" />
    </>
  )
}
