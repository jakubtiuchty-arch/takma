import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { satoRibbonHub } from '@/data/sato-ribbon-hub'
import type { SatoRibbonHubBlock, SatoRibbonHubTable } from '@/data/sato-ribbon-hub-types'
import { satoRibbonSeries, getSatoRibbonSeriesBySlug } from '@/data/sato-ribbon-series'
import {
  satoRibbonPrinters,
  SATO_PRINTERS_TABLE_NOTE,
  formatSatoCore,
  formatSatoWidthRange,
  formatSatoOd,
  formatSatoWinding,
} from '@/data/sato-ribbon-printers'
import { ribbonSeriesUrl } from '@/data/ribbon-series-registry'
import { getProductBySlug } from '@/data/products'
import { getSeriesStock, minAvailablePrice } from '@/lib/series-price'
import {
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@/components/ui/Icons'
import LinkedText from '@/components/ui/LinkedText'
import CommonDefinitionsSchema from '@/components/schemas/CommonDefinitions'
import RibbonSeriesBannerCard from '@/components/ribbons/RibbonSeriesBannerCard'
import { stripMarkdown } from '@/lib/strip-markdown'

const SLUG = 'tasmy-termotransferowe-sato'
const siteUrl = 'https://www.takma.com.pl'
const pageUrl = `${siteUrl}/${SLUG}`
const ogImage = '/images/sato-ribbons/sato-tasmy-termotransferowe.webp'

// ISR — odświeżaj ceny „od X zł" (StockCache) co 6h, zgodnie z cyklem crona stocku.
export const revalidate = 21600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: satoRibbonHub.seoTitle,
    description: satoRibbonHub.seoDescription,
    openGraph: {
      images: [ogImage],
      title: satoRibbonHub.seoTitle,
      description: satoRibbonHub.seoDescription,
      url: pageUrl,
    },
    alternates: { canonical: pageUrl },
  }
}

export default async function Page() {
  const hub = satoRibbonHub

  // Ceny „od X zł" na kafelkach: najniższa cena dostępnego wariantu serii (jak na stronie serii).
  // Jedno zapytanie do StockCache dla wszystkich serii; brak ceny → kafelek bez linii ceny.
  const seriesPns = new Map(satoRibbonSeries.map(s => [
    s.slug,
    getProductBySlug(s.productId)?.variants?.map(v => v.partNumber) ?? [],
  ]))
  const stock = await getSeriesStock(Array.from(seriesPns.values()).flat())
  const priceFromOf = (slug: string): number | null => {
    const pns = new Set(seriesPns.get(slug) ?? [])
    return minAvailablePrice(stock.filter(r => pns.has(r.partNumber)))
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: hub.seoTitle,
    description: hub.seoDescription,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: satoRibbonSeries.length,
      itemListElement: satoRibbonSeries.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}${ribbonSeriesUrl(s)}`,
        name: `Taśma termotransferowa ${s.title}`,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: 'Taśmy termotransferowe SATO', item: pageUrl },
    ],
  }

  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: hub.h1,
    description: hub.seoDescription,
    url: pageUrl,
    inLanguage: 'pl-PL',
    proficiencyLevel: 'Expert',
    about: [
      { '@type': 'Thing', name: 'Taśmy termotransferowe' },
      { '@type': 'Thing', name: 'Taśma woskowa' },
      { '@type': 'Thing', name: 'Taśma woskowo-żywiczna' },
      { '@type': 'Thing', name: 'Taśma żywiczna' },
      { '@type': 'Thing', name: 'Druk termotransferowy' },
      { '@type': 'Thing', name: 'Nawój zewnętrzny' },
      { '@type': 'Thing', name: 'Dobór taśmy do drukarki' },
      { '@type': 'Thing', name: 'Dobór taśmy do etykiety' },
      { '@type': 'Thing', name: 'Taśmy SATO' },
    ],
    publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Specjaliści ds. zakupów, kierownicy magazynów, inżynierowie produkcji, działy logistyki',
    },
    datePublished: hub.datePublished,
    dateModified: hub.dateModified,
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: hub.howTo.name,
    description: hub.howTo.description,
    inLanguage: 'pl-PL',
    step: hub.howTo.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: stripMarkdown(step.text),
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hub.faq.map(q => ({
      '@type': 'Question',
      name: stripMarkdown(q.question),
      acceptedAnswer: { '@type': 'Answer', text: stripMarkdown(q.answer) },
    })),
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CommonDefinitionsSchema />

      {/* HERO — rolki SATO (przezroczyste tło) po prawej, akcent w kolorze SATO. */}
      <section className="relative z-[1] bg-slate-950 text-white overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-3/4 lg:w-2/3 pointer-events-none">
          <Image
            src="/images/sato-ribbons/sato-tasmy-hero.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 75vw, 66vw"
            className="object-contain opacity-80"
            style={{ objectPosition: 'right center' }}
            aria-hidden="true"
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-slate-950 to-transparent"
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(0,114,206,0.4), transparent 55%), radial-gradient(circle at 20% 80%, rgba(0,114,206,0.25), transparent 55%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white transition-colors whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
            <span className="text-white font-medium whitespace-nowrap">Taśmy termotransferowe SATO</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            {hub.h1}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mb-6">
            <LinkedText text={hub.heroIntro} />
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            {hub.badges.map((badge, i) => (
              <span key={badge} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
                {i === 1
                  ? <ShieldCheckIcon size={14} className="text-emerald-400" />
                  : <CheckIcon size={14} className="text-emerald-400" />}
                {badge}
              </span>
            ))}
          </div>

          <a href="#modele" className="inline-flex items-center gap-1.5 mt-8 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            Wszystkie serie ↓
          </a>
        </div>
      </section>

      {/* SERIE — kafelki pogrupowane wg typu taśmy */}
      <section id="modele" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-mt-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Wybierz serię taśmy
          </h2>
          <p className="text-gray-600 max-w-2xl">
            <LinkedText text={hub.modelsIntro} />
          </p>
        </div>

        <div className="space-y-10">
          {hub.sections.map(({ label, flagship, rest }) => {
            const flag = getSatoRibbonSeriesBySlug(flagship)
            return (
              <div key={label}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {label}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
                  {flag && (
                    <RibbonSeriesBannerCard
                      series={flag}
                      href={ribbonSeriesUrl(flag)}
                      chip={`Linia ${flag.line}`}
                      priceFrom={priceFromOf(flag.slug)}
                      size="large"
                      className="sm:col-span-2 lg:col-span-2"
                      showImage={false}
                    />
                  )}
                  {rest.map(slug => {
                    const s = getSatoRibbonSeriesBySlug(slug)
                    if (!s) return null
                    return (
                      <RibbonSeriesBannerCard
                        key={s.slug}
                        series={s}
                        href={ribbonSeriesUrl(s)}
                        chip={`Linia ${s.line}`}
                        priceFrom={priceFromOf(s.slug)}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* PRZEWODNIK — bloki z treścią i tabelami, FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="mt-16 space-y-12">
          {hub.guide.map(block => (
            <GuideBlock key={block.heading} block={block} />
          ))}

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-3">
              {hub.faq.map((q, i) => (
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

          <p>
            <Link
              href="/tasmy-termotransferowe"
              className="inline-flex items-center gap-1 text-primary-600 font-semibold hover:underline"
            >
              Taśmy termotransferowe Zebra <ArrowRightIcon size={14} />
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

/** Blok przewodnika: H2 + treść jak sekcje serii (akapity, listy „- ”) + tabela pod treścią. */
function GuideBlock({ block }: { block: SatoRibbonHubBlock }) {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {block.heading}
      </h2>
      {block.content && (
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          {block.content.split('\n\n').map((para, j) => {
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
      )}
      {block.table === 'drukarki' ? (
        <PrintersTable />
      ) : block.table ? (
        <HubTable table={satoRibbonHub.tables[block.table]} />
      ) : null}
    </section>
  )
}

/** Tabela w stylu tabel huba Zebry; komórki przez LinkedText (linki do serii, pogrubienia). */
function HubTable({ table }: { table: SatoRibbonHubTable }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-sm">
        {table.caption && (
          <caption className="caption-bottom text-left text-xs text-gray-500 pt-2">{table.caption}</caption>
        )}
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {table.header.map(h => (
              <th key={h} className="text-left p-3 font-semibold text-gray-900">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {table.rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50">
              {row.map((cell, j) => (
                <td key={j} className={j === 0 ? 'p-3 font-medium' : 'p-3 text-gray-600'}>
                  <LinkedText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Tabela zgodności drukarek SATO z `sato-ribbon-printers.ts`. */
function PrintersTable() {
  return (
    <>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {['Drukarka', 'Gilza taśmy', 'Maks. długość', 'Szerokość taśmy', 'Maks. średnica rolki', 'Nawój'].map(h => (
                <th key={h} className="text-left p-3 font-semibold text-gray-900">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {satoRibbonPrinters.map(p => (
              <tr key={p.model} className="hover:bg-slate-50">
                <td className="p-3 font-medium">
                  {p.links.length > 0
                    ? p.links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && ', '}
                          <Link href={l.href} className="text-primary-600 hover:underline">{l.name}</Link>
                        </span>
                      ))
                    : p.model}
                </td>
                <td className="p-3 text-gray-600 whitespace-nowrap">{formatSatoCore(p.coreMm)}</td>
                <td className="p-3 text-gray-600 whitespace-nowrap">{p.maxLengthM} m</td>
                <td className="p-3 text-gray-600 whitespace-nowrap">{formatSatoWidthRange(p)}</td>
                <td className="p-3 text-gray-600 whitespace-nowrap">{formatSatoOd(p)}</td>
                <td className="p-3 text-gray-600 whitespace-nowrap">{formatSatoWinding(p.winding)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-gray-500">{SATO_PRINTERS_TABLE_NOTE}</p>
    </>
  )
}
