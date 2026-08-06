import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  thermalLabelSeries,
  getThermalLabelSeriesBySlug,
  getAllThermalLabelSeriesSlugs,
  type ThermalLabelSeries,
} from '@/data/thermal-label-series'
import { getProductBySlug } from '@/data/products'
import { getSeriesStock, minAvailablePrice } from '@/lib/series-price'
import {
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import { stripMarkdown } from '@/lib/strip-markdown'
import CommonDefinitionsSchema from '@/components/schemas/CommonDefinitions'
import SeriesVariantsTable from './SeriesVariantsTable'

const siteUrl = 'https://www.takma.com.pl'

// ISR — odświeżaj cenę „od X zł" (StockCache) co 6h, zgodnie z cyklem crona stocku.
export const revalidate = 21600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllThermalLabelSeriesSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const series = getThermalLabelSeriesBySlug(slug)
  if (!series) return { title: 'Nie znaleziono serii' }

  // Zdjęcie etykiety do og:image/twitter — bez tego Google wybiera losowy obraz
  // z treści (np. drukarkę z sekcji „pasujące drukarki"). Absolutny URL.
  const seriesProduct = getProductBySlug(series.productId)
  const ogImage = seriesProduct?.images?.[0]
    ? [seriesProduct.images[0].startsWith('http') ? seriesProduct.images[0] : `${siteUrl}${seriesProduct.images[0]}`]
    : undefined

  return {
    title: series.seoTitle,
    description: series.seoDescription,
    openGraph: {
      title: series.seoTitle,
      description: series.seoDescription,
      url: `${siteUrl}/etykiety-termiczne-zebra/serie/${series.slug}`,
      type: 'article',
      ...(ogImage ? { images: ogImage } : {}),
    },
    ...(ogImage ? { twitter: { card: 'summary_large_image', images: ogImage } } : {}),
    alternates: {
      canonical: `${siteUrl}/etykiety-termiczne-zebra/serie/${series.slug}`,
    },
  }
}

export default async function SeriesPage({ params }: PageProps) {
  const { slug } = await params
  const series = getThermalLabelSeriesBySlug(slug)
  if (!series) notFound()

  const product = getProductBySlug(series.productId)
  const variantCount = product?.variants?.length ?? 0

  // Stock żywy ze StockCache (jedno zapytanie): zasila tabelę wariantów po stronie serwera
  // ORAZ wyznacza cenę „od X zł" (nagłówek + schema). Fallback: statyczny priceFrom.
  // Dzięki temu cena widoczna, schema Google i tabela są zgodne i samonaprawialne (ISR).
  const seriesStock = await getSeriesStock(product?.variants?.map(v => v.partNumber) ?? [])
  const priceFrom = minAvailablePrice(seriesStock) ?? series.priceFrom

  // Schema — Article + BreadcrumbList + FAQPage
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    proficiencyLevel: 'Expert',
    inLanguage: 'pl-PL',
    headline: series.h1,
    description: series.seoDescription,
    image: product?.images?.[0] ? [product.images[0]] : undefined,
    author: { '@type': 'Organization', name: 'TAKMA' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/takma-logo.png` },
    },
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    mainEntityOfPage: `${siteUrl}/etykiety-termiczne-zebra/serie/${series.slug}`,
  }

  // Product + AggregateOffer — lowPrice = series.priceFrom (zgodny z widocznym "od X zł netto").
  // Google wymaga priceValidUntil w Offer/AggregateOffer dla rich snippets ceny (od 2024).
  const priceValidUntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Etykiety termiczne Zebra ${series.title}`,
    description: series.seoDescription,
    brand: { '@type': 'Brand', name: 'Zebra Technologies' },
    category: 'Etykiety termiczne',
    ...(product?.images?.[0] ? { image: product.images[0] } : {}),
    ...(priceFrom
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'PLN',
            lowPrice: priceFrom,
            priceValidUntil,
            offerCount: variantCount || undefined,
            seller: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
          },
        }
      : {}),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: 'Etykiety termiczne', item: `${siteUrl}/etykiety-termiczne-zebra` },
      { '@type': 'ListItem', position: 4, name: series.title, item: `${siteUrl}/etykiety-termiczne-zebra/serie/${series.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: series.faq.map(q => ({
      '@type': 'Question',
      name: stripMarkdown(q.question),
      acceptedAnswer: { '@type': 'Answer', text: stripMarkdown(q.answer) },
    })),
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <CommonDefinitionsSchema />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative z-[1] bg-slate-950 text-white overflow-hidden">
        {/* Tło: subtelne, kolorowane akcentem serii */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${series.accent}, transparent 60%), radial-gradient(circle at 20% 80%, ${series.accent}40, transparent 50%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-5 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/etykiety-termiczne-zebra" className="hover:text-white whitespace-nowrap">Etykiety termiczne</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <span className="text-white font-medium whitespace-nowrap">{series.title}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              {series.h1}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mb-5 leading-relaxed">
              <LinkedText text={series.heroIntro} />
            </p>

            {/* CTA — kompaktowo, link do sekcji opisu poniżej */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#opis"
                className="inline-flex items-center gap-1.5 bg-[#A8F000] hover:bg-[#94d600] text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Pełen opis serii ↓
              </a>
              <a
                href="#warianty"
                className="inline-flex items-center gap-1.5 border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                {variantCount} wariantów rozmiarowych
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WARIANTY ROZMIAROWE — pod hero, przed opisami ──────────── */}
      {product?.variants && product.variants.length > 0 && (
        <section id="warianty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Warianty rozmiarowe — {series.title}
            </h2>
            <p className="text-gray-600">
              Wszystkie {product.variants.length} {product.variants.length === 1 ? 'wariant' : product.variants.length < 5 ? 'warianty' : 'wariantów'} z serii {series.title}. Użyj filtrów (szerokość, wysokość, gilza), żeby zawęzić listę.
            </p>
          </div>
          <SeriesVariantsTable
            variants={product.variants}
            productSlug={product.slug}
            productImage={product.images?.[0]}
            seriesTitle={series.title}
            manufacturerName="Zebra"
            initialStock={seriesStock}
          />
        </section>
      )}

      {/* ── DESCRIPTIVE SECTIONS — Opis serii (Czym jest, Zastosowania, ...) PRZED specyfikacją ──
          Pomijamy 'Kiedy NIE używać X' — to duplikat z notRecommendedFor renderowanego niżej jako bullet lista */}
      <section id="opis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-100 scroll-mt-20">
        <div className="space-y-10">
          {series.sections
            .filter(sec => !sec.heading.toLowerCase().startsWith('kiedy nie'))
            .map((sec, i) => (
            <article key={i}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {sec.heading}
              </h2>
              <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
                {sec.content.split('\n\n').map((para, j) => {
                  const trimmed = para.trim()
                  // Bullet list: każda linia zaczyna się od '- '
                  if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
                    const items = trimmed.split('\n').map(l => l.replace(/^\s*-\s*/, ''))
                    return (
                      <ul key={j} className="list-disc pl-5 space-y-1.5 mb-4 marker:text-gray-400">
                        {items.map((item, k) => (
                          <li key={k}><LinkedText text={item} /></li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={j} className="mb-4"><LinkedText text={para} /></p>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── APPLICATIONS + NOT RECOMMENDED ──────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 rounded-2xl my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckIcon size={22} className="text-emerald-600" /> Zastosowania
            </h2>
            <ul className="space-y-2">
              {series.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckIcon size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><LinkedText text={app} /></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-slate-500 text-xl">⊘</span> Kiedy NIE używać
            </h2>
            <ul className="space-y-2">
              {series.notRecommendedFor.map((nr, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-slate-400 flex-shrink-0 mt-0.5">⊘</span>
                  <span><LinkedText text={nr} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── COMPATIBLE PRINTERS ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Kompatybilne drukarki Zebra
        </h2>
        <p className="text-gray-600 mb-6">
          {series.title} jest media-tested dla następujących modeli drukarek Zebra obsługujących direct thermal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PrinterCategoryCard title="Drukarki biurkowe" models={series.compatiblePrinters.desktop} />
          <PrinterCategoryCard title="Mid-range" models={series.compatiblePrinters.midRange} />
          <PrinterCategoryCard title="Industrialne" models={series.compatiblePrinters.industrial} />
          <PrinterCategoryCard title="Mobilne" models={series.compatiblePrinters.mobile} />
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────── */}
      {series.certifications.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Atesty i certyfikaty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {series.certifications.map((cert, i) => (
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

      {/* ── COMPARED WITH ───────────────────────────────────────────── */}
      {series.comparedWith.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Porównanie z innymi seriami
          </h2>
          <p className="text-gray-600 mb-6">
            Kiedy wybrać {series.title} a kiedy alternatywną serię.
          </p>
          <div className="space-y-4">
            {series.comparedWith.map((comp, i) => {
              const other = getThermalLabelSeriesBySlug(comp.seriesSlug)
              if (!other) return null
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span
                        className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded text-white"
                        style={{ backgroundColor: other.accent }}
                      >
                        vs {other.title}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        <LinkedText text={comp.whenToChooseThis} />
                      </p>
                      <Link
                        href={`/etykiety-termiczne-zebra/serie/${comp.seriesSlug}`}
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
                      >
                        Zobacz {other.title} <ArrowRightIcon size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ── KEY SPECS TABLE — na dole, przed FAQ ────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Specyfikacja techniczna
        </h2>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-slate-100">
              {series.techSpecs.map((spec, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-3 font-medium text-gray-700 w-1/3"><LinkedText text={spec.label} /></td>
                  <td className="p-3 text-gray-900"><LinkedText text={spec.value} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-3">
          {series.faq.map((q, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-gray-900 flex-1"><LinkedText text={q.question} /></span>
                <ChevronRightIcon
                  size={20}
                  className="text-slate-400 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform"
                />
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed"><LinkedText text={q.answer} /></p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA STICKY BOTTOM ───────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Gotowy zamówić {series.title}?
              </h2>
              <p className="text-gray-600 text-sm">
                {variantCount} wariantów rozmiarowych od {priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł netto.
                Doradzimy w doborze i wyślemy próbki.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/produkt/${series.productId}`}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Zobacz warianty <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 border border-slate-300 hover:bg-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors text-gray-700"
              >
                <PhoneIcon size={16} /> Zapytaj o próbkę
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function PrinterCategoryCard({ title, models }: { title: string; models: string[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">{title}</h3>
      {models.length === 0 ? (
        <p className="text-xs text-gray-400 italic">Brak kompatybilnych modeli</p>
      ) : (
        <ul className="space-y-1.5">
          {models.map(m => (
            <li key={m} className="text-sm text-gray-700 flex items-center gap-1.5">
              <CheckIcon size={14} className="text-emerald-600 flex-shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
