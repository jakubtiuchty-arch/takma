import Link from 'next/link'
import { ChevronRightIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  getManufacturerById,
  getProductsByManufacturer,
  getBrandCategoriesForManufacturer,
  categories,
  type Product,
} from '@/data/products'
import { brandPillarContent } from '@/data/brand-pillar-content'
import ServiceBanner from '@/components/ui/ServiceBanner'
import LinkedText from '@/components/ui/LinkedText'

interface BrandPillarPageProps {
  manufacturerId: string
}

export default function BrandPillarPage({ manufacturerId }: BrandPillarPageProps) {
  const manufacturer = getManufacturerById(manufacturerId)!
  const data = brandPillarContent[manufacturerId]!
  const allProducts = getProductsByManufacturer(manufacturerId)
  const brandCats = getBrandCategoriesForManufacturer(manufacturerId)

  // Category counts (dynamic)
  const categoryCounts: Record<string, number> = {}
  for (const cat of categories) {
    categoryCounts[cat.id] = allProducts.filter(p => p.categoryId === cat.id).length
  }

  // Featured products
  const featuredProducts = data.featuredSlugs
    .map(slug => allProducts.find(p => p.slug === slug))
    .filter((p): p is Product => !!p)

  // Brand full name — only Zebra has "Technologies" in its name
  const brandName = manufacturerId === 'zebra' ? 'Zebra Technologies' : manufacturer.name

  // Brand accent colors
  const accent = manufacturerId === 'honeywell'
    ? { color: '#EE3124', bg: '#EE3124/10', light: 'rgba(238,49,36,0.08)', border: 'rgba(238,49,36,0.25)', text: '#EE3124', hover: '#D42B1F' }
    : { color: '#2563EB', bg: 'primary-50', light: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.25)', text: '#2563EB', hover: '#1D4ED8' }

  // Schema JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: brandName, item: `https://www.takma.com.pl/${manufacturer.slug}` },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Produkty ${brandName}`,
    description: data.heroText,
    url: `https://www.takma.com.pl/${manufacturer.slug}`,
    numberOfItems: allProducts.length,
    dateModified: '2026-03-12',
    provider: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://www.takma.com.pl',
    },
    brand: {
      '@type': 'Brand',
      name: `${brandName}`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: featuredProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/produkt/${p.slug}`,
      })),
    },
  }

  const faqJsonLd = data.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  } : null

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Produkty ${brandName}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero-text', '.about-section', '.faq-section'],
    },
    url: `https://www.takma.com.pl/${manufacturer.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <div className="container-main py-8 lg:py-12">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{brandName}</span>
        </nav>

        {/* H1 + hero */}
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{brandName}</h1>
          <p className="hero-text text-gray-600 leading-relaxed">{data.heroText}</p>
          <p className="text-gray-400 text-sm mt-3">{allProducts.length} produktów w ofercie</p>
        </div>

        {/* Category tiles */}
        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Kategorie produktów {manufacturer.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.categoryTiles.map(tile => {
              const count = categoryCounts[tile.categoryId] || 0
              if (count === 0) return null
              return (
                <Link
                  key={tile.categoryId}
                  href={tile.href}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-all"
                  style={{ ['--accent' as string]: accent.color }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 transition-colors" style={{ color: undefined }}>
                      {tile.name}
                    </h3>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{count}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{tile.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent.text }}>
                    Zobacz <ArrowRightIcon size={14} />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Featured products */}
        {featuredProducts.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Popularne produkty {manufacturer.name}</h2>
            </div>
            <ProductGrid products={featuredProducts} />
          </section>
        )}

        {/* About section */}
        <section className="about-section mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">O {brandName}</h2>
          <div className="prose prose-gray max-w-none">
            {data.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0 sm:text-justify">
                <LinkedText text={para} />
              </p>
            ))}
          </div>
        </section>

        {/* Timeline */}
        {data.timeline.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Historia {brandName}</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[23px] top-2 bottom-2 w-px hidden sm:block" style={{ backgroundColor: accent.border }} />
              <div className="space-y-4 sm:space-y-5">
                {data.timeline.map((entry, i) => (
                  <div key={i} className="flex gap-4 sm:gap-5">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-7 flex items-center justify-center rounded text-xs font-bold"
                        style={{ backgroundColor: accent.light, borderWidth: 1, borderColor: accent.border, color: accent.text }}
                      >
                        {entry.year}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{entry.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        {data.technologies.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Ekosystem oprogramowania {manufacturer.name}</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-2xl">
              Każde urządzenie {manufacturer.name} ma wbudowane oprogramowanie, które odróżnia je od konsumenckich tabletów i telefonów. Oto kluczowe platformy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.technologies.map((tech, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-2.5 mb-3">
                    <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: accent.light, color: accent.text }}>{tech.badge}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Industries */}
        {data.industries.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{manufacturer.name} w branżach</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-2xl">
              Konkretne zastosowania i rekomendowane modele dla każdego środowiska pracy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.industries.map((ind, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{ind.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{ind.description}</p>
                  <div className="text-sm text-gray-500">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Polecane: </span>
                    <LinkedText text={ind.products} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Partnership */}
        {data.partnership.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              {manufacturerId === 'zebra' ? 'TAKMA jako Premier Solution Partner' : `TAKMA — partner ${manufacturer.name} AutoID`}
            </h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: accent.light, borderWidth: 1, borderColor: accent.border }}>
              {data.partnership.map((para, i) => (
                <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3 last:mb-0">
                  <LinkedText text={para} />
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Why buy from TAKMA */}
        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">
            Dlaczego kupić {manufacturer.name} od TAKMA?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.whyBuyItems.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service */}
        {data.service.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Serwis urządzeń {manufacturer.name}</h2>
            <div className="prose prose-gray max-w-none">
              {data.service.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0 text-sm sm:text-base">
                  <LinkedText text={para} />
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Comparison table */}
        {data.comparison.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              {manufacturerId === 'zebra' ? 'Zebra vs Honeywell vs Datalogic' : 'Honeywell vs Zebra vs Datalogic'}
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-2xl">{data.comparisonIntro}</p>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 w-[18%]">Kategoria</th>
                    <th className="text-left px-4 py-3 font-semibold border-b border-gray-200 w-[27%]" style={manufacturerId === 'zebra' ? { color: accent.text, backgroundColor: accent.light } : undefined}>Zebra</th>
                    <th className="text-left px-4 py-3 font-semibold border-b border-gray-200 w-[27%]" style={manufacturerId === 'honeywell' ? { color: accent.text, backgroundColor: accent.light } : undefined}>Honeywell</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 w-[27%]">Datalogic</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.aspect}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100" style={manufacturerId === 'zebra' ? { backgroundColor: accent.light } : undefined}>{row.zebra}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100" style={manufacturerId === 'honeywell' ? { backgroundColor: accent.light } : undefined}>{row.honeywell}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.datalogic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Brand category quick links */}
        {brandCats.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Strony produktowe {manufacturer.name}</h2>
            <div className="flex flex-wrap gap-2">
              {brandCats.map(bc => (
                <Link
                  key={bc.id}
                  href={`/${bc.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 transition-colors hover:shadow-sm"
                >
                  {bc.name}
                  <ArrowRightIcon size={12} className="text-gray-400" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {data.faq.length > 0 && (
          <section className="faq-section mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Często zadawane pytania — {manufacturer.name}</h2>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base pr-4">{item.question}</h3>
                    <ChevronRightIcon
                      size={16}
                      className="flex-shrink-0 text-gray-400 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    <LinkedText text={item.answer} />
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Guide links */}
        {data.guideLinks.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Poradniki i porównania</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.guideLinks.map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-all group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">{guide.title}</span>
                  <ArrowRightIcon size={14} className="flex-shrink-0 text-gray-400 ml-auto" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cross-brand links */}
        <section className="mb-14">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">Inne marki w ofercie TAKMA</h2>
            <div className="flex flex-wrap gap-2">
              {['Zebra', 'Honeywell', 'Datalogic', 'Newland', 'TSC'].filter(b => b !== manufacturer.name).map(brand => (
                <span
                  key={brand}
                  className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">Strony producentów Honeywell, Datalogic i Newland — wkrótce.</p>
          </div>
        </section>

        {/* Service banner */}
        <ServiceBanner categoryId="drukarki-etykiet" manufacturerId={manufacturerId} />

      </div>
    </>
  )
}
