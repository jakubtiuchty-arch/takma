import { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import Link from 'next/link'
import {
  products,
  getProductBySlug,
  getCategoryById,
  getManufacturerById,
  thermalSizeSlug,
  findThermalVariant,
  isThermalLabelProduct,
} from '@/data/products'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { ProductGallery } from '@/components/product'
import {
  ChevronRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  DownloadIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import AddToRFQButton from '../../AddToRFQButton'
import AskAboutProductButton from '../../AskAboutProductButton'
import SpecsAccordion from '../../SpecsAccordion'
import SmartPrice from '../../SmartPrice'
import { SmartPriceProvider } from '../../SmartPriceContext'
import ContextAvailabilityBadge from '../../ContextAvailabilityBadge'
import ViewItemTracker from '../../ViewItemTracker'

const siteUrl = 'https://www.takma.com.pl'

interface PageProps {
  params: Promise<{ slug: string; size: string; pn: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; size: string; pn: string }[] = []
  for (const product of products) {
    if (!isThermalLabelProduct(product) || !product.variants) continue
    for (const v of product.variants) {
      const rozmiar = v.attributes['Rozmiar']
      if (!rozmiar) continue
      params.push({
        slug: product.slug,
        size: thermalSizeSlug(rozmiar),
        pn: v.partNumber,
      })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, size, pn } = await params
  const product = getProductBySlug(slug)
  if (!product || !isThermalLabelProduct(product)) return { title: 'Nie znaleziono wariantu' }
  const variant = findThermalVariant(product, size, pn)
  if (!variant) return { title: 'Nie znaleziono wariantu' }

  const rozmiar = variant.attributes['Rozmiar']
  const gilza = variant.attributes['Rdzeń (gilza)']
  const url = `${siteUrl}/produkt/${product.slug}/${size}/${pn}`

  const priceText = variant.priceFrom
    ? ` od ${variant.priceFrom.toLocaleString('pl-PL')} zł netto`
    : ''
  const title = `${product.name} ${rozmiar} — PN ${pn}${priceText}`

  const smartTruncate = (text: string, maxLen: number): string => {
    if (text.length <= maxLen) return text
    const truncated = text.slice(0, maxLen)
    const lastDot = truncated.lastIndexOf('.')
    if (lastDot > maxLen * 0.5) return truncated.slice(0, lastDot + 1)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.slice(0, lastSpace) + '…' : truncated
  }

  const desc = smartTruncate(
    `${product.name} w rozmiarze ${rozmiar}${gilza ? `, gilza ${gilza}` : ''} — PN ${pn}.${priceText ? ` Cena${priceText}.` : ''} ${product.shortDescription} Wysyłka z PL, doradztwo i próbki.`,
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
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: `${product.name} ${rozmiar}` }] : undefined,
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
  if (!product || !isThermalLabelProduct(product)) notFound()
  const variant = findThermalVariant(product, size, pn)
  if (!variant) notFound()

  const rozmiar = variant.attributes['Rozmiar']

  // Normalizacja slug-u — jeśli ktoś wpisał inny format niż canonical (np. uppercase),
  // przekieruj na czysty URL żeby uniknąć duplikatów w Google.
  const canonicalSize = thermalSizeSlug(rozmiar)
  if (canonicalSize !== size) {
    permanentRedirect(`/produkt/${product.slug}/${canonicalSize}/${pn}`)
  }

  const series = thermalLabelSeries.find((s) => s.productId === product.id)
  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)
  const gilza = variant.attributes['Rdzeń (gilza)']
  const url = `${siteUrl}/produkt/${product.slug}/${size}/${pn}`

  const variantTitle = `${product.name} ${rozmiar}`
  const variantH1 = manufacturer
    ? `${product.name} ${rozmiar}${gilza ? ` (gilza ${gilza})` : ''}`
    : variantTitle

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
    description: `${product.name} w rozmiarze ${rozmiar}${gilza ? `, gilza ${gilza}` : ''}. ${product.shortDescription}`,
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
      url: series ? `${siteUrl}/etykiety-termiczne/serie/${series.slug}` : `${siteUrl}/produkt/${product.slug}`,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Rozmiar', value: rozmiar },
      ...(gilza ? [{ '@type': 'PropertyValue', name: 'Rdzeń (gilza)', value: gilza }] : []),
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
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
    { '@type': 'ListItem', position: 3, name: 'Etykiety termiczne', item: `${siteUrl}/etykiety-termiczne` },
    ...(series
      ? [{ '@type': 'ListItem', position: 4, name: series.title, item: `${siteUrl}/etykiety-termiczne/serie/${series.slug}` }]
      : []),
    {
      '@type': 'ListItem',
      position: series ? 5 : 4,
      name: `${rozmiar} (${variant.partNumber})`,
      item: url,
    },
  ]
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

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

      <div className="container-main py-6 lg:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <Link href="/materialy-eksploatacyjne" className="hover:text-primary-600 transition-colors">Materiały eksploatacyjne</Link>
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <Link href="/etykiety-termiczne" className="hover:text-primary-600 transition-colors">Etykiety termiczne</Link>
          {series && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link
                href={`/etykiety-termiczne/serie/${series.slug}`}
                className="hover:text-primary-600 transition-colors"
              >
                {series.title}
              </Link>
            </>
          )}
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <span className="text-gray-900 font-medium">
            {rozmiar} ({variant.partNumber})
          </span>
        </nav>

        {/* Product main section */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Gallery */}
          <div className="min-w-0">
            <ProductGallery
              images={product.images}
              productName={variantH1}
              imageDescriptions={product.imageDescriptions}
            />
          </div>

          {/* Product info */}
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start lg:pt-10">
            <div className="flex items-start justify-between gap-4">
              <div className="mb-4">
                <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.name} <span className="text-gray-700">{rozmiar}</span>
                </h1>
                <p className="text-sm xs:text-base lg:text-lg font-medium text-gray-500 mt-1">
                  {series ? `Etykiety termiczne — seria ${series.title}` : 'Etykiety termiczne'}
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
              <ContextAvailabilityBadge staticAvailability={variant.availability} />
            </div>

            <SmartPrice product={product} />

            <div className="space-y-3">
              <AddToRFQButton product={product} />
              <AskAboutProductButton
                productName={`${product.name} ${rozmiar} (PN ${variant.partNumber})`}
                productSlug={product.slug}
              />
            </div>

            {/* Kluczowe parametry wariantu */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">Rozmiar</dt>
                  <dd className="font-medium text-gray-900">{rozmiar}</dd>
                </div>
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
          </div>
        </div>

        {/* Tabs / Details */}
        <div className="mt-12 lg:mt-16 space-y-12 lg:space-y-16">
          {/* Opis serii — z thermalLabelSeries (krótki) z linkiem do pełnego przewodnika */}
          {series && (
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Czym jest {product.name}
              </h2>
              <div className="prose prose-gray max-w-none text-[15px] leading-relaxed">
                <p className="text-gray-700 mb-4">
                  <LinkedText text={series.heroIntro} />
                </p>

                {series.keyHighlights.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Kluczowe cechy</h3>
                    <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 marker:text-gray-400">
                      {series.keyHighlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </>
                )}

                <p className="mt-6">
                  <Link
                    href={`/etykiety-termiczne/serie/${series.slug}`}
                    className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline"
                  >
                    Pełny przewodnik po serii {series.title} <ArrowRightIcon size={14} />
                  </Link>
                </p>
              </div>
            </section>
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
                    {app}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Atesty (z serii) */}
          {series && series.certifications.length > 0 && (
            <section id="atesty">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Atesty i certyfikaty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {series.certifications.map((cert, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheckIcon size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
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
                  Inne rozmiary {series ? series.title : product.name}
                </h2>
                {series && (
                  <Link
                    href={`/etykiety-termiczne/serie/${series.slug}#warianty`}
                    className="text-sm font-semibold text-primary-600 hover:underline whitespace-nowrap"
                  >
                    Wszystkie warianty →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {otherVariants.map((v) => {
                  const otherSize = v.attributes['Rozmiar']
                  if (!otherSize) return null
                  const otherSlug = thermalSizeSlug(otherSize)
                  return (
                    <Link
                      key={v.partNumber}
                      href={`/produkt/${product.slug}/${otherSlug}/${v.partNumber}`}
                      className="block bg-white border border-slate-200 rounded-xl p-3 hover:border-slate-400 hover:shadow-sm transition-all text-center"
                    >
                      <div className="font-semibold text-gray-900 text-sm">{otherSize}</div>
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
          {series && (
            <section id="kompatybilne-drukarki">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Kompatybilne drukarki Zebra</h2>
              <p className="text-gray-600 mb-6 text-sm">
                {product.name} {rozmiar} jest media-tested dla następujących modeli drukarek Zebra
                obsługujących direct thermal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(['desktop', 'midRange', 'industrial', 'mobile'] as const).map((cat) => {
                  const label =
                    cat === 'desktop' ? 'Drukarki biurkowe' :
                    cat === 'midRange' ? 'Mid-range' :
                    cat === 'industrial' ? 'Industrialne' : 'Mobilne'
                  const models = series.compatiblePrinters[cat]
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
