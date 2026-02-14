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
import AddToRFQButton from './AddToRFQButton'
import RelatedProducts from './RelatedProducts'
import VariantsTable from './VariantsTable'
import StockInfo, { LiveAvailabilityBadge } from './StockInfo'
import SmartPrice from './SmartPrice'
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

  const title = `${product.name}${category ? ` - ${category.name}` : ''}${product.priceFrom ? ` | ${product.priceFrom.toLocaleString('pl-PL')} zł` : ''}`

  const priceText = product.priceFrom ? ` Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto.` : ''
  const variantsText = product.variants?.length ? ` ${product.variants.length} wariantów.` : ''
  const fullDesc = `${product.name} — ${product.shortDescription}.${priceText}${variantsText} Doradztwo techniczne i serwis.`

  // Smart truncation — ends at last sentence boundary (.) before 160 chars
  const smartTruncate = (text: string, maxLen: number): string => {
    if (text.length <= maxLen) return text
    const truncated = text.slice(0, maxLen)
    const lastDot = truncated.lastIndexOf('.')
    if (lastDot > maxLen * 0.5) return truncated.slice(0, lastDot + 1)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '…' : truncated
  }

  const metaDescription = smartTruncate(fullDesc, 160)

  // OG description — more engaging for social media
  const ogDescription = product.priceFrom
    ? `${product.name} — ${product.shortDescription}. Od ${product.priceFrom.toLocaleString('pl-PL')} zł netto. Sprawdź warianty i zamów w TAKMA.`
    : `${product.name} — ${product.shortDescription}. Sprawdź i zamów w TAKMA.`

  const ogImage = product.images[0] || undefined

  return {
    title,
    description: metaDescription,
    openGraph: {
      title: product.name,
      description: smartTruncate(ogDescription, 200),
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: product.name }] : undefined,
      url: `/produkt/${product.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: `https://takma.com.pl/produkt/${product.slug}`,
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

  // Akcesoria
  const relatedAccessories = (product.relatedAccessories || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

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
    url: 'https://takma.com.pl',
  }

  // Extract model name from product name (e.g. "Zebra ZD230d" → "ZD230d")
  const modelName = manufacturer ? product.name.replace(manufacturer.name, '').trim() : product.name

  // Extract specs for JSON-LD additionalProperty
  const weightSpec = product.specifications.find(s => s.name.toLowerCase().includes('waga'))
  const dimensionsSpec = product.specifications.find(s => s.name.toLowerCase().includes('wymiar'))
  const resolutionSpec = product.specifications.find(s => s.name.toLowerCase().includes('rozdzielczość'))
  const speedSpec = product.specifications.find(s => s.name.toLowerCase().includes('prędkość'))
  const interfaceSpec = product.specifications.find(s => s.name.toLowerCase().includes('interfejsy') || s.name.toLowerCase() === 'interfejs')

  // Build isRelatedTo from accessories and compatible labels
  const relatedProductsForSchema = [
    ...relatedAccessories.slice(0, 5),
    ...compatibleConsumables.slice(0, 3),
  ].filter(Boolean).map((p) => ({
    '@type': 'Product' as const,
    name: p!.name,
    url: `https://takma.com.pl/produkt/${p!.slug}`,
  }))

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    url: `https://takma.com.pl/produkt/${product.slug}`,
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `https://takma.com.pl${img}`),
    brand: manufacturer ? { '@type': 'Brand', name: manufacturer.name } : undefined,
    manufacturer: manufacturer ? { '@type': 'Organization', name: `${manufacturer.name} Technologies`, url: 'https://zebra.com' } : undefined,
    model: modelName,
    category: category?.name,
    sku: product.variants?.[0]?.partNumber || product.id,
    mpn: product.variants?.[0]?.partNumber || product.id,
    datePublished: product.createdAt,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'pl-PL',
    ...(weightSpec ? { weight: { '@type': 'QuantitativeValue', value: parseFloat(weightSpec.value.replace(',', '.')) || weightSpec.value, unitCode: 'KGM' } } : {}),
    ...(() => {
      const props = [
        ...(dimensionsSpec ? [{ '@type': 'PropertyValue', name: 'Wymiary', value: dimensionsSpec.value }] : []),
        ...(resolutionSpec ? [{ '@type': 'PropertyValue', name: 'Rozdzielczość', value: resolutionSpec.value }] : []),
        ...(speedSpec ? [{ '@type': 'PropertyValue', name: 'Prędkość druku', value: speedSpec.value }] : []),
        ...(interfaceSpec ? [{ '@type': 'PropertyValue', name: 'Interfejsy', value: interfaceSpec.value }] : []),
      ]
      return props.length > 0 ? { additionalProperty: props } : {}
    })(),
    ...(relatedProductsForSchema.length > 0 ? { isRelatedTo: relatedProductsForSchema } : {}),
    ...(product.gtin13 ? { gtin13: product.gtin13 } : {}),
    ...(product.editorialReview ? {
      review: {
        '@type': 'Review',
        author: { '@type': 'Organization', name: 'TAKMA' },
        datePublished: product.createdAt,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: product.editorialReview.ratingValue.toString(),
          bestRating: product.editorialReview.bestRating.toString(),
        },
        reviewBody: product.editorialReview.reviewBody,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.editorialReview.ratingValue.toString(),
        bestRating: product.editorialReview.bestRating.toString(),
        reviewCount: '1',
      },
    } : {}),
    offers: product.variants && product.variants.length > 0
      ? {
          '@type': 'AggregateOffer',
          url: `https://takma.com.pl/produkt/${product.slug}`,
          lowPrice: Math.min(...product.variants.filter((v) => v.priceFrom).map((v) => v.priceFrom!)).toFixed(2),
          highPrice: Math.max(...product.variants.filter((v) => v.priceFrom).map((v) => v.priceFrom!)).toFixed(2),
          priceCurrency: 'PLN',
          offerCount: product.variants.length,
          availability: availabilitySchemaMap[product.availability],
          offers: product.variants.filter((v) => v.priceFrom).map((v) => ({
            '@type': 'Offer',
            url: `https://takma.com.pl/produkt/${product.slug}`,
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
      : product.priceFrom
        ? {
            '@type': 'Offer',
            url: `https://takma.com.pl/produkt/${product.slug}`,
            price: product.priceFrom.toFixed(2),
            priceCurrency: 'PLN',
            availability: availabilitySchemaMap[product.availability],
            itemCondition: 'https://schema.org/NewCondition',
            priceValidUntil,
            seller: sellerOrg,
          }
        : {
            '@type': 'Offer',
            availability: availabilitySchemaMap[product.availability],
            priceCurrency: 'PLN',
            seller: sellerOrg,
          },
  }

  // JSON-LD: BreadcrumbList
  const breadcrumbItems: { '@type': string; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
    { '@type': 'ListItem', position: 2, name: 'Katalog', item: 'https://takma.com.pl/katalog' },
  ]
  let pos = 3
  if (category) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: category.name, item: `https://takma.com.pl/${category.slug}` })
  }
  if (primarySubcategory) {
    breadcrumbItems.push({ '@type': 'ListItem', position: pos++, name: primarySubcategory.name, item: `https://takma.com.pl/${primarySubcategory.slug}` })
  }
  breadcrumbItems.push({ '@type': 'ListItem', position: pos, name: product.name, item: `https://takma.com.pl/produkt/${product.slug}` })

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  // JSON-LD: FAQ (jeśli produkt ma FAQ)
  const faqJsonLd = product.faq && product.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
            author: { '@type': 'Organization', name: 'TAKMA' },
          },
        })),
      }
    : null

  // JSON-LD: Speakable — dla Google Assistant / voice search
  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: product.name,
    about: {
      '@type': 'Product',
      name: product.name,
      url: `https://takma.com.pl/produkt/${product.slug}`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#opis p:first-of-type', '#faq'],
    },
    url: `https://takma.com.pl/produkt/${product.slug}`,
  }

  // JSON-LD: HowTo — dla drukarek (mają downloads z instrukcjami)
  const isPrinter = product.categoryId === 'drukarki-etykiet'
  const isDirectThermalOnly = product.specifications.some(s => s.name === 'Rodzaj druku' && s.value.toLowerCase().includes('bezpośredni'))
  const howToJsonLd = isPrinter ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Jak skonfigurować ${product.name}`,
    description: `Instrukcja pierwszego uruchomienia i konfiguracji drukarki ${product.name}.`,
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Podłącz zasilanie i kabel USB', text: 'Podłącz zasilacz do drukarki i gniazda sieciowego, następnie połącz drukarkę z komputerem kablem USB.' },
      { '@type': 'HowToStep', position: 2, name: 'Załaduj materiały eksploatacyjne', text: isDirectThermalOnly
        ? 'Otwórz pokrywę drukarki i włóż rolkę etykiet termicznych zgodnie z oznaczeniami na urządzeniu. Drukarka direct thermal nie wymaga taśmy barwiącej (ribbona).'
        : 'Otwórz pokrywę drukarki, włóż rolkę etykiet i taśmę termotransferową (ribbon) zgodnie z oznaczeniami na urządzeniu.' },
      { '@type': 'HowToStep', position: 3, name: 'Zainstaluj sterowniki', text: 'Pobierz i zainstaluj sterowniki ze strony serwis-zebry.pl/sterowniki. Sterowniki obsługują Windows 10/11.' },
      { '@type': 'HowToStep', position: 4, name: 'Przeprowadź kalibrację', text: 'Uruchom drukarkę i przeprowadź kalibrację sensora mediów za pomocą Zebra Setup Utilities lub funkcji auto-kalibracji.' },
      { '@type': 'HowToStep', position: 5, name: 'Wydrukuj testową etykietę', text: 'Z menu drukarki wybierz druk testowy, aby potwierdzić poprawność konfiguracji i jakość wydruku.' },
    ],
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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} imageDescriptions={product.imageDescriptions} />
          </div>

          {/* Product info */}
          <div>
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
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1 mb-4">
              {product.name}
              {(primarySubcategory || category) && (
                <span className="block text-base lg:text-lg font-medium text-gray-500 mt-1">
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

            {/* Price — smart fallback na najtańszy dostępny wariant */}
            <SmartPrice product={product} />

            {/* CTA */}
            <AddToRFQButton product={product} />

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
                      <dd className="font-medium text-gray-900">{spec.value}</dd>
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
            <nav className="flex gap-4 sm:gap-6 -mb-px overflow-x-auto scrollbar-hide">
              {product.variants && product.variants.length > 0 && (
                <a
                  href="#warianty"
                  className="px-3 py-4 text-sm font-medium text-primary-600 border-b-2 border-primary-600 whitespace-nowrap"
                >
                  Warianty
                </a>
              )}
              <a
                href="#opis"
                className={`px-3 py-4 text-sm font-medium whitespace-nowrap ${
                  product.variants && product.variants.length > 0
                    ? 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                    : 'text-primary-600 border-b-2 border-primary-600'
                }`}
              >
                Opis
              </a>
              <a
                href="#specyfikacja"
                className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Specyfikacja
              </a>
              <a
                href="#zastosowania"
                className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Zastosowania
              </a>
              {product.comparison && (
                <a
                  href="#porownanie"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Porównanie
                </a>
              )}
              {product.faq && product.faq.length > 0 && (
                <a
                  href="#faq"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  FAQ
                </a>
              )}
              {product.downloads.length > 0 && (
                <a
                  href="#pliki"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Do pobrania
                </a>
              )}
              {compatibleConsumables.length > 0 && (
                <a
                  href="#etykiety-papierowe"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Etykiety papierowe
                </a>
              )}
              {compatibleFoilLabels.length > 0 && (
                <a
                  href="#etykiety-foliowe"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Etykiety foliowe
                </a>
              )}
              {relatedAccessories.length > 0 && (
                <a
                  href="#akcesoria"
                  className="px-3 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Akcesoria
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
              />
            )}

            {/* Opis */}
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Opis produktu</h2>
              <div className="prose prose-gray max-w-none">
                {product.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4 sm:text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6">
                {product.manufacturerId === 'zebra'
                  ? 'Oferowany przez TAKMA — autoryzowanego partnera Zebra Technologies z 25-letnim doświadczeniem w branży AutoID.'
                  : 'Oferowany przez TAKMA — 20 lat doświadczenia w branży AutoID.'}
                {' '}Aktualizacja: {new Date().toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}
              </p>
            </section>

            {/* Specyfikacja */}
            {product.specifications.length > 0 && (
              <section id="specyfikacja">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Specyfikacja techniczna
                </h2>
                <SpecsAccordion specs={product.specifications} />
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
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors">
                        <h3 className="text-sm font-semibold text-gray-900 pr-4">{item.question}</h3>
                        <ChevronRightIcon size={20} className="text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-6 pb-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.downloads.map((download, i) => {
                    const isExternal = download.url.startsWith('http')
                    return (
                      <a
                        key={i}
                        href={download.url}
                        {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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

            {/* Serwis gwarancyjny — tylko dla produktów Zebra */}
            {product.manufacturerId === 'zebra' && (
              <section>
                <a
                  href="https://serwis-zebry.pl"
                  target="_blank"
                  rel="noopener"
                  className="block relative rounded-xl overflow-hidden hover:shadow-lg transition-all group bg-gray-900 min-h-[160px]"
                >
                  <img
                    src="/images/serwis-zebry-banner.jpg"
                    alt="Serwis-Zebry.pl — autoryzowany serwis drukarek Zebra"
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
                title={product.subcategoryIds?.includes('termiczne-drukarki-etykiet') ? 'Etykiety termiczne' : 'Etykiety papierowe termotransferowe'}
                products={compatibleConsumables as typeof products}
                labels
              />
            )}

            {/* Etykiety foliowe termotransferowe */}
            {compatibleFoilLabels.length > 0 && (
              <RelatedProducts
                id="etykiety-foliowe"
                title="Etykiety foliowe termotransferowe"
                products={compatibleFoilLabels as typeof products}
                labels
              />
            )}

            {/* Akcesoria */}
            {relatedAccessories.length > 0 && (
              <RelatedProducts
                id="akcesoria"
                title="Akcesoria"
                products={relatedAccessories as typeof products}
                initialLimit={4}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden safe-bottom z-40">
        <div className="flex items-center gap-4">
          {product.priceFrom && (
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">
                {product.priceFrom.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
              </span>
              <span className="text-xs text-gray-500 ml-1">netto</span>
            </div>
          )}
          <div className="flex-1">
            <AddToRFQButton product={product} compact />
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-24 lg:hidden" />
    </>
  )
}
