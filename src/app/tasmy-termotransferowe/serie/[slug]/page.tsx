import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  transferRibbonSeries,
  getRibbonSeriesBySlug,
  getAllRibbonSeriesSlugs,
} from '@/data/transfer-ribbon-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { getProductBySlug } from '@/data/products'
import { getThermalLabelSeriesBySlug } from '@/data/thermal-label-series'
import {
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import { stripMarkdown } from '@/lib/strip-markdown'
import RibbonVariantsTable from './RibbonVariantsTable'

const siteUrl = 'https://www.takma.com.pl'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllRibbonSeriesSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const series = getRibbonSeriesBySlug(slug)
  if (!series) return { title: 'Nie znaleziono modelu' }

  return {
    title: series.seoTitle,
    description: series.seoDescription,
    openGraph: {
      title: series.seoTitle,
      description: series.seoDescription,
      url: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}`,
    },
  }
}

/** Helper — subcategory etykiety TT (papierowe/foliowe/specjalne) po slug serii.
 *  Fallback do 'papierowe' (najpopularniejsza), gdy brak danych. */
function labelSubcategoryOf(seriesSlug: string): string {
  const s = transferLabelSeries.find(x => x.slug === seriesSlug)
  return s?.subcategory ?? 'papierowe'
}

/** Resolver URL etykiety po slug — najpierw TT (foliowe/papierowe/specjalne), potem DT. */
function labelSeriesUrl(seriesSlug: string): string {
  const tt = transferLabelSeries.find(x => x.slug === seriesSlug)
  if (tt) return `/etykiety-termotransferowe-zebra/${tt.subcategory}/serie/${tt.slug}`
  const dt = getThermalLabelSeriesBySlug(seriesSlug)
  if (dt) return `/etykiety-termiczne/serie/${dt.slug}`
  // Fallback — przyjmuje że to TT papierowe
  return `/etykiety-termotransferowe-zebra/${labelSubcategoryOf(seriesSlug)}/serie/${seriesSlug}`
}

export default async function RibbonSeriesPage({ params }: PageProps) {
  const { slug } = await params
  const series = getRibbonSeriesBySlug(slug)
  if (!series) notFound()

  const product = getProductBySlug(series.productId)
  const variantCount = product?.variants?.length ?? 0

  // Schema — Article + BreadcrumbList + FAQPage
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: series.h1,
    description: series.seoDescription,
    image: product?.images?.[0] ? [product.images[0]] : undefined,
    author: { '@type': 'Organization', name: 'TAKMA' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/takma-logo.png` },
    },
    datePublished: '2026-05-29',
    dateModified: '2026-05-29',
    mainEntityOfPage: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: 'Taśmy termotransferowe', item: `${siteUrl}/tasmy-termotransferowe` },
      { '@type': 'ListItem', position: 4, name: series.title, item: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}` },
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

  // Polecane etykiety — primary i alternative
  const primaryLabels = series.recommendedForLabels.filter(l => l.role === 'primary')
  const altLabels = series.recommendedForLabels.filter(l => l.role === 'alternative')

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      {/* Jeśli seria ma `heroBackgroundGradient`, użyj go (matchuje kolor tła zdjęcia, brak widocznego
          łączenia). W przeciwnym razie domyślne `bg-slate-950`. */}
      <section
        className={`relative text-white overflow-hidden ${series.heroBackgroundGradient ? '' : 'bg-slate-950'}`}
        style={series.heroBackgroundGradient ? { backgroundImage: series.heroBackgroundGradient } : undefined}
      >
        {series.heroImage && (
          <>
            <div
              className={`absolute top-0 bottom-0 pointer-events-none ${
                series.heroImageCover ? 'inset-x-0' : 'right-0 w-3/5 lg:w-1/2'
              }`}
              style={
                series.heroMaskLeft
                  ? {
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 45%)',
                      maskImage: 'linear-gradient(to right, transparent 0%, black 45%)',
                    }
                  : undefined
              }
            >
              <Image
                src={series.heroImage}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 50vw"
                className={series.heroImageCover ? 'object-contain object-right opacity-100' : 'object-contain opacity-80'}
                style={{
                  objectPosition: 'right center',
                  ...(series.heroImageScale
                    ? { transform: `scale(${series.heroImageScale})`, transformOrigin: 'right center' }
                    : {}),
                }}
                aria-hidden="true"
              />
            </div>
            {/* Gradient overlay tylko po lewej żeby tekst pozostał czytelny. Pomijamy dla banerów
                cover (heroImageCover) — to czyste, gotowe grafiki z ciemną lewą stroną. */}
            {!series.heroImageCover && (
              <span
                aria-hidden="true"
                className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${
                  series.heroBackgroundGradient
                    ? 'from-[#0f172a] via-[#0f172a] via-35% to-transparent'
                    : 'from-slate-950 via-slate-950 via-60% to-transparent'
                }`}
              />
            )}
          </>
        )}
        {/* Radialny akcent koloru — pomijamy dla banerów cover (mają własną kolorystykę i glow). */}
        {!series.heroImageCover && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 80% 20%, ${series.accent}, transparent 60%), radial-gradient(circle at 20% 80%, ${series.accent}40, transparent 50%)`,
            }}
          />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-5 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/tasmy-termotransferowe" className="hover:text-white whitespace-nowrap">Taśmy termotransferowe</Link>
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

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#opis"
                className="inline-flex items-center gap-1.5 bg-[#A8F000] hover:bg-[#94d600] text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Pełny opis modelu ↓
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

      {/* ── WARIANTY ROZMIAROWE — pod hero ──────────── */}
      {product?.variants && product.variants.length > 0 && (
        <section id="warianty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Warianty rozmiarowe — {series.title}
            </h2>
            <p className="text-gray-600">
              Wszystkie {product.variants.length} {product.variants.length === 1 ? 'wariant' : product.variants.length < 5 ? 'warianty' : 'wariantów'} z modelu {series.title}. Użyj filtrów po lewej (szerokość, długość, rdzeń), żeby zawęzić listę.
            </p>
          </div>
          <RibbonVariantsTable
            variants={product.variants}
            productSlug={product.slug}
            productImage={product.images?.[0]}
            productImageDesktop={product.imageDesktop}
            productImageIndustrial={product.imageIndustrial}
            seriesTitle={series.title}
            manufacturerName="Zebra"
          />
        </section>
      )}

      {/* ── DESCRIPTIVE SECTIONS — Opis serii ── */}
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

      {/* ── POLECANA DLA ETYKIET (kluczowa sekcja cross-link) ── */}
      {series.recommendedForLabels.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Polecana dla etykiet
          </h2>
          <p className="text-gray-600 mb-6">
            {series.title} dobiera się do następujących serii etykiet termotransferowych Zebra. Kliknij, żeby zobaczyć etykietę i jej warianty rozmiarowe.
          </p>

          {primaryLabels.length > 0 && (
            <>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                Główna rekomendacja ({primaryLabels.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {primaryLabels.map(label => (
                  <Link
                    key={label.seriesSlug}
                    href={labelSeriesUrl(label.seriesSlug)}
                    className="block bg-white border border-emerald-200 rounded-lg p-4 hover:border-emerald-500 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-emerald-700">Polecana</span>
                      <ArrowRightIcon size={14} className="text-emerald-500" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{label.seriesName}</h4>
                  </Link>
                ))}
              </div>
            </>
          )}

          {altLabels.length > 0 && (
            <>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Alternatywa ({altLabels.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {altLabels.map(label => (
                  <Link
                    key={label.seriesSlug}
                    href={labelSeriesUrl(label.seriesSlug)}
                    className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-400 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Alternatywa</span>
                      <ArrowRightIcon size={14} className="text-slate-400" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{label.seriesName}</h4>
                    {label.when && <p className="text-xs text-gray-600 mt-1.5 leading-snug">{label.when}</p>}
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* ── COMPATIBLE PRINTERS ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Kompatybilne drukarki Zebra
        </h2>
        <p className="text-gray-600 mb-6">
          {series.title} jest media-tested dla następujących modeli drukarek Zebra obsługujących druk termotransferowy.
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
            Porównanie z innymi modelami
          </h2>
          <p className="text-gray-600 mb-6">
            Kiedy wybrać {series.title} a kiedy alternatywny model.
          </p>
          <div className="space-y-4">
            {series.comparedWith.map((comp, i) => {
              const other = getRibbonSeriesBySlug(comp.seriesSlug)
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
                        href={`/tasmy-termotransferowe/serie/${comp.seriesSlug}`}
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

      {/* ── KEY SPECS TABLE ────────────────────── */}
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
                {variantCount} wariantów rozmiarowych od {series.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł netto.
                Doradzimy w doborze i wyślemy próbki.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#warianty"
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
