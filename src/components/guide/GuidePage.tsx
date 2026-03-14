import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { Guide, guideCategoryLabels } from '@/data/guides'
import { products } from '@/data/products'
import GuideLivePrices from './GuideLivePrices'

// Build model name → slug map
const productNameMap: Record<string, string> = {}
for (const p of products) {
  const short = p.name.replace(/^Zebra\s+/i, '')
  productNameMap[short.toUpperCase()] = p.slug
  productNameMap[short] = p.slug
}

// Bold + link product model names in HTML
// Matches: Zebra ZD/ZT/TC/MC/ZQ/EM, Honeywell CT/CK, Datalogic Memor/Skorpio, Newland MT, M3 SL/UL/SM
// Tracks <a>...</a> nesting to avoid creating invalid nested anchor tags
function boldifyModels(html: string): string {
  let insideA = false
  return html.replace(
    /(<a\s[^>]*>)|(<\/a>)|(<[^>]*>)|(\b(?:Zebra\s+)?(?:Z[DT]\d{3}[dDtT]?|(?:TC|MC|ZQ|EM)\d{2,4}[a-z]?(?:\s+Plus)?)(?=[\s,.<)]|\b))|(\b(?:Honeywell\s+)?(?:CT|CK)\d{2,3}\b)|(\bDatalogic\s+(?:Memor|Skorpio)\s+\w+\b)|(\bNewland\s+MT\d{2,3}\b)|(\bM3\s+(?:Mobile\s+)?(?:SL|UL|SM)\d{2}\+?\b)/gi,
    (match, openA, closeA, tag) => {
      if (openA) { insideA = true; return openA }
      if (closeA) { insideA = false; return closeA }
      if (tag) return tag
      // Skip wrapping if already inside an <a> tag (prevents nested anchors → hydration error)
      if (insideA) return `<strong>${match}</strong>`
      // Check if it's a Zebra product we can link to
      const zebraMatch = match.replace(/^Zebra\s+/i, '')
      const slug = productNameMap[zebraMatch] || productNameMap[zebraMatch.toUpperCase()]
      if (slug) {
        return `<strong><a href="/produkt/${slug}">${match}</a></strong>`
      }
      // Check Datalogic products (stored as "Datalogic Skorpio X5" etc.)
      const datalogicSlug = productNameMap[match] || productNameMap[match.replace(/^Datalogic\s+/i, '')]
      if (datalogicSlug) {
        return `<strong><a href="/produkt/${datalogicSlug}">${match}</a></strong>`
      }
      return `<strong>${match}</strong>`
    }
  )
}

interface GuidePageProps {
  guide: Guide
}

export default function GuidePage({ guide }: GuidePageProps) {
  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Poradniki', item: 'https://www.takma.com.pl/poradnik' },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `https://www.takma.com.pl/poradnik/${guide.slug}` },
    ],
  }

  // JSON-LD: Article (E-E-A-T: author = Person, publisher = Organization)
  const wordCount = guide.sections.reduce((acc, s) => acc + s.content.replace(/<[^>]*>/g, '').split(/\s+/).length, 0)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.seoDescription,
    wordCount,
    author: {
      '@type': 'Person',
      name: 'Jakub Tiuchty',
      jobTitle: 'Specjalista AutoID',
      worksFor: { '@type': 'Organization', name: 'TAKMA', url: 'https://www.takma.com.pl' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://www.takma.com.pl',
      logo: { '@type': 'ImageObject', url: 'https://www.takma.com.pl/images/takma_logo.png' },
    },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: `https://www.takma.com.pl/poradnik/${guide.slug}`,
    image: guide.heroImage ? `https://www.takma.com.pl${guide.heroImage}` : undefined,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', `#${guide.sections[0]?.id} p:first-of-type`, '#faq'],
    },
  }

  // JSON-LD: ItemList (for ranking/comparison articles)
  const isRanking = guide.tags.includes('ranking') || guide.tags.includes('top-10')
  const itemListJsonLd = isRanking ? (() => {
    // Extract product links from guide relatedLinks that point to /produkt/
    const productLinks = guide.relatedLinks.filter(l => l.href.startsWith('/produkt/'))
    if (productLinks.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: guide.title,
      numberOfItems: productLinks.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: productLinks.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: link.title.replace(/ — .*$/, ''),
        url: `https://www.takma.com.pl${link.href}`,
      })),
    }
  })() : null

  // JSON-LD: HowTo (for step-by-step sections like "Jak wdrożyć...")
  const howToSection = guide.sections.find(s => s.id === 'wdrozenie')
  const howToJsonLd = howToSection ? (() => {
    const stepMatches = howToSection.content.match(/<h3>Krok \d+:[^<]*<\/h3>\s*<p>([^<]*(?:<[^/][^>]*>[^<]*)*)<\/p>/g)
    if (!stepMatches || stepMatches.length === 0) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howToSection.heading,
      description: 'Krok po kroku: jak prawidłowo wdrożyć terminale mobilne w firmie — od audytu procesów po monitoring.',
      step: stepMatches.map((match, i) => {
        const nameMatch = match.match(/<h3>(Krok \d+:[^<]*)<\/h3>/)
        const textMatch = match.match(/<p>([\s\S]*?)<\/p>/)
        return {
          '@type': 'HowToStep',
          position: i + 1,
          name: nameMatch ? nameMatch[1].replace(/<[^>]*>/g, '') : `Krok ${i + 1}`,
          text: textMatch ? textMatch[1].replace(/<[^>]*>/g, '') : '',
        }
      }),
    }
  })() : null

  // JSON-LD: FAQPage (rich snippets w Google)
  const faqJsonLd = guide.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  // Build slug → partNumbers[] map for live prices
  const allContent = guide.sections.map(s => s.content).join('') + guide.faq.map(f => f.answer).join('')
  const livePriceSlugs: string[] = []
  let m: RegExpExecArray | null
  const priceRegex = /data-live-price="([^"]+)"/g
  while ((m = priceRegex.exec(allContent)) !== null) {
    if (!livePriceSlugs.includes(m[1])) livePriceSlugs.push(m[1])
  }

  const productPNs: Record<string, string[]> = {}
  livePriceSlugs.forEach(slug => {
    const product = products.find(p => p.slug === slug)
    if (product?.variants?.length) {
      productPNs[slug] = product.variants.map(v => v.partNumber)
    }
  })

  return (
    <>
      {/* Live price hydration */}
      {Object.keys(productPNs).length > 0 && <GuideLivePrices productPNs={productPNs} />}

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      {itemListJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />}

      <div className="bg-white">
        {guide.heroImage ? (
          <>
            {/* Hero with background image */}
            <div className="relative bg-gray-900 overflow-hidden sm:min-h-[340px]">
              {/* Background image — right-aligned, vertically centered, not cropped */}
              <img
                src={guide.heroImage}
                alt=""
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 object-contain hidden sm:block"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
              <div className="relative">
                <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-1.5 text-sm text-white/70 flex-wrap">
                    <li><Link href="/" className="hover:text-[#A8F000] transition-colors">Strona główna</Link></li>
                    <li><ChevronRightIcon size={14} className="text-white/40" /></li>
                    <li><Link href="/poradnik" className="hover:text-[#A8F000] transition-colors">Poradniki</Link></li>
                    <li><ChevronRightIcon size={14} className="text-white/40" /></li>
                    <li className="text-white font-medium truncate max-w-[300px]">{guide.title}</li>
                  </ol>
                </nav>
                <header className="container-main pt-6 pb-12">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#A8F000]/20 text-[#A8F000]">
                        {guideCategoryLabels[guide.category]}
                      </span>
                      <span className="text-sm text-white/70">{guide.readTime} czytania</span>
                      <span className="text-sm text-white/40 hidden sm:inline">|</span>
                      <time className="text-sm text-white/70" dateTime={guide.updatedAt}>
                        Aktualizacja: {new Date(guide.updatedAt).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {guide.title}
                    </h1>
                    <p className="mt-4 text-lg text-white/80 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>
                </header>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Default header without hero */}
            <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
                <li><Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link></li>
                <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
                <li><Link href="/poradnik" className="hover:text-primary-600 transition-colors">Poradniki</Link></li>
                <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
                <li className="text-gray-900 font-medium truncate max-w-[300px]">{guide.title}</li>
              </ol>
            </nav>
            <header className="container-main pt-6 pb-8 border-b border-gray-100">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                    {guideCategoryLabels[guide.category]}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime} czytania</span>
                  <span className="text-sm text-gray-400 hidden sm:inline">|</span>
                  <time className="text-sm text-gray-500" dateTime={guide.updatedAt}>
                    Aktualizacja: {new Date(guide.updatedAt).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {guide.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>
            </header>
          </>
        )}

        {/* Table of Contents + Content */}
        <div className="container-main py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar — TOC */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <nav className="bg-gray-50 rounded-xl p-5 border-t-2 border-[#A8F000]">
                  <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Spis treści</h2>
                  <ol className="space-y-2">
                    {guide.sections.map((section, i) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-gray-600 hover:text-[#A8F000] transition-colors flex gap-2"
                        >
                          <span className="text-gray-400 font-medium">{i + 1}.</span>
                          <span>{section.heading}</span>
                        </a>
                      </li>
                    ))}
                    {guide.faq.length > 0 && (
                      <li>
                        <a href="#faq" className="text-sm text-gray-600 hover:text-[#A8F000] transition-colors flex gap-2">
                          <span className="text-gray-400 font-medium">{guide.sections.length + 1}.</span>
                          <span>Najczęstsze pytania (FAQ)</span>
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>

              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Content Sections */}
              <div className="space-y-10">
                {guide.sections.map(section => (
                  <section key={section.id} id={section.id}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    <div
                      className="prose prose-gray max-w-none overflow-x-auto sm:text-justify prose-headings:text-gray-900 prose-headings:text-left prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl [&_img]:max-h-48 sm:[&_img]:max-h-64 [&_table]:!min-w-[520px] [&_table]:!text-xs sm:[&_table]:!text-sm [&_table]:border-collapse [&_table]:shadow-sm [&_table]:border [&_table]:border-gray-200 [&_th]:bg-gray-800 [&_th]:text-white [&_th]:text-left [&_th]:font-semibold [&_th]:!normal-case [&_th]:!tracking-normal [&_th]:!px-2 [&_th]:!py-2 sm:[&_th]:!px-4 sm:[&_th]:!py-3 [&_td]:!px-2 [&_td]:!py-2 sm:[&_td]:!px-4 sm:[&_td]:!py-3 [&_td]:border-t [&_td]:border-gray-100 [&_tbody_tr:nth-child(even)]:bg-gray-50/60 [&_tbody_tr:hover]:bg-blue-50/40 [&_tbody_tr]:transition-colors [&_td:first-child]:font-semibold [&_td:first-child]:text-gray-900"
                      dangerouslySetInnerHTML={{ __html: boldifyModels(section.content) }}
                    />
                  </section>
                ))}
              </div>

              {/* FAQ Section */}
              {guide.faq.length > 0 && (
                <section id="faq" className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęstsze pytania (FAQ)</h2>
                  <div className="space-y-4">
                    {guide.faq.map((item, i) => (
                      <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden border-l-2 border-transparent group-open:border-[#A8F000]">
                        <summary className="cursor-pointer px-5 py-4 text-gray-900 font-semibold flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <span>{item.question}</span>
                          <ChevronRightIcon size={18} className="text-gray-400 group-open:text-[#A8F000] transition-transform group-open:rotate-90 flex-shrink-0 ml-3" />
                        </summary>
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Author byline (E-E-A-T: visible author) */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A8F000]/20 flex items-center justify-center text-gray-900 font-bold text-sm">JT</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Jakub Tiuchty</p>
                  <p className="text-xs text-gray-500">Specjalista AutoID w TAKMA | 25 lat doświadczenia w AutoID</p>
                </div>
              </div>

              {/* CTA Section */}
              {(() => {
                const isTerminal = guide.tags.includes('terminale-mobilne')
                const ctaText = isTerminal ? 'urządzenie' : 'drukarkę'
                const ctaHref = isTerminal ? '/terminale-mobilne' : '/drukarki-etykiet'
                const ctaLabel = isTerminal ? 'Przeglądaj terminale' : 'Przeglądaj drukarki'
                return (
                  <section className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
                    <h3 className="text-base font-bold text-gray-900 mb-2">Potrzebujesz pomocy w wyborze?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Nasi eksperci z ponad 25-letnim doświadczeniem pomogą dobrać {ctaText} idealnie dopasowane do Twoich potrzeb i budżetu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Skontaktuj się z nami
                      </Link>
                      <Link
                        href={ctaHref}
                        className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {ctaLabel}
                      </Link>
                    </div>
                  </section>
                )
              })()}

              {/* Related Links */}
              {guide.relatedLinks.length > 0 && (
                <section className="mt-10">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Zobacz też</h3>
                  <div className="flex flex-wrap gap-2">
                    {guide.relatedLinks.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
