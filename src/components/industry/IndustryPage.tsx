import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { getIndustryPageBySlug, industryPages } from '@/data/industry-content'
import { products } from '@/data/products'

interface IndustryPageProps {
  slug: string
}

// Build a map of product display names → slugs for auto-linking in tables
const productNameMap: Record<string, string> = {}
for (const p of products) {
  // Extract short name like "ZD220d" from "Zebra ZD220d"
  const short = p.name.replace(/^Zebra\s+/i, '')
  productNameMap[short.toUpperCase()] = p.slug
  productNameMap[short] = p.slug
}

// Auto-link known product names inside <th> tags
function linkifyTableHeaders(html: string): string {
  return html.replace(/<th>(.*?)<\/th>/gi, (match, content) => {
    const trimmed = content.trim()
    const slug = productNameMap[trimmed] || productNameMap[trimmed.toUpperCase()]
    if (slug) {
      return `<th><a href="/produkt/${slug}">${trimmed}</a></th>`
    }
    return match
  })
}

// Bold + link product model names (e.g. "ZD220d", "Zebra ZT411") inside text
const modelPattern = /\b(Zebra\s+)?(Z[DT]\d{3}[dDtT]?)\b/g

function boldifyModels(html: string): string {
  // Don't process inside tags or existing links/bolds
  return html.replace(/(<[^>]*>)|(\b(?:Zebra\s+)?Z[DT]\d{3}[dDtT]?\b)/gi, (match, tag, model) => {
    if (tag) return tag // skip HTML tags
    const short = model.replace(/^Zebra\s+/i, '')
    const slug = productNameMap[short] || productNameMap[short.toUpperCase()]
    if (slug) {
      return `<strong><a href="/produkt/${slug}">${model}</a></strong>`
    }
    return `<strong>${model}</strong>`
  })
}


// Prose classes for HTML content (tables, lists, paragraphs)
const proseClasses = [
  'prose prose-sm prose-gray max-w-none',
  'prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium',
  'prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-3',
  'prose-li:text-gray-600 prose-li:leading-relaxed prose-li:my-1',
  'prose-strong:text-gray-900',
  'prose-ul:my-3 prose-ul:space-y-1',
].join(' ')

// Split technicalDeepDive HTML by <h3> into visual sections
function parseTechSections(html: string) {
  const parts = html.split(/<h3>/)
  const intro = parts[0]?.trim() || ''
  const sections = parts.slice(1).map(part => {
    const endIdx = part.indexOf('</h3>')
    return {
      title: part.substring(0, endIdx),
      content: part.substring(endIdx + 5).trim(),
    }
  })
  return { intro, sections }
}

export default function IndustryPage({ slug }: IndustryPageProps) {
  const page = getIndustryPageBySlug(slug)!
  const otherPages = industryPages.filter(p => p.slug !== slug)
  const enhanceHtml = (html: string) => boldifyModels(linkifyTableHeaders(html))
  const techData = parseTechSections(enhanceHtml(page.technicalDeepDive))

  // JSON-LD schemas
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: page.name, item: `https://takma.com.pl/${page.slug}` },
    ],
  }

  const faqJsonLd = page.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
        author: { '@type': 'Organization', name: 'TAKMA' },
      },
    })),
  } : null

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.heroHeadline,
    author: { '@type': 'Organization', name: 'TAKMA', url: 'https://takma.com.pl' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://takma.com.pl',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/takma_logo.png' },
    },
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
    description: page.seoDescription,
    mainEntityOfPage: `https://takma.com.pl/${page.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="bg-white">
        {/* Breadcrumbs */}
        <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link></li>
            <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
            <li className="text-gray-900 font-medium">{page.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className={`relative border-b border-gray-100 overflow-hidden ${page.heroImage ? 'bg-gray-900' : 'bg-gradient-to-br from-primary-50 via-white to-primary-50/30'}`}>
          {page.heroImage && (
            <>
              <Image
                src={page.heroImage}
                alt=""
                fill
                className="object-cover opacity-40" style={{ objectPosition: page.heroPosition || 'center center' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30" />
            </>
          )}
          <div className="container-main pt-8 pb-10 relative z-10">
            <h1 className={`text-3xl lg:text-4xl font-bold mb-4 text-balance ${page.heroImage ? 'text-white' : 'text-gray-900'}`}>
              {page.heroHeadline}
            </h1>
            <p className={`text-lg max-w-3xl leading-relaxed ${page.heroImage ? 'text-gray-200' : 'text-gray-600'}`}>
              {page.heroSubtext}
            </p>
          </div>
        </header>

        <div className="container-main py-10 lg:py-14 space-y-12">

          {/* Long Description — styled as intro with lead paragraph */}
          {page.longDescription && (
            <section>
              <div
                className="long-desc prose prose-gray max-w-none prose-a:text-primary-600 prose-a:font-medium hover:prose-a:underline prose-a:no-underline prose-strong:text-gray-900 prose-li:text-gray-600 prose-p:text-gray-600 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: enhanceHtml(page.longDescription) }}
              />
            </section>
          )}

          {/* Definition */}
          <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">{page.definition.heading}</h2>
            <div className="overflow-x-auto">
              <div
                className={proseClasses}
                dangerouslySetInnerHTML={{ __html: enhanceHtml(page.definition.content) }}
              />
            </div>
          </section>

          {/* Buying Guide */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{page.buyingGuide.heading}</h2>
            <div className="space-y-3">
              {page.buyingGuide.items.map((item, i) => {
                const dashIndex = item.indexOf(' — ')
                const hasDash = dashIndex > 0
                const hasHtml = item.includes('<')
                return (
                  <div key={i} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-primary-200 transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <div className="text-gray-600 text-sm leading-relaxed [&_a]:text-primary-600 [&_a]:font-medium hover:[&_a]:underline [&_strong]:text-gray-900">
                      {hasHtml ? (
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      ) : hasDash ? (
                        <>
                          <strong className="text-gray-900">{item.substring(0, dashIndex)}</strong>
                          {item.substring(dashIndex)}
                        </>
                      ) : item}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Expert Authority */}
          <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/30 border border-gray-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-sm font-bold text-primary-700 mb-2">Dlaczego TAKMA?</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{page.expertAuthority}</p>
          </section>

          {/* Technical Deep Dive — split into visual cards by h3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Szczegóły techniczne</h2>

            {techData.intro && (
              <div className="overflow-x-auto">
                <div
                  className={`${proseClasses} mb-6`}
                  dangerouslySetInnerHTML={{ __html: techData.intro }}
                />
              </div>
            )}

            <div className="space-y-6">
              {techData.sections.map((section, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3.5 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-base">{section.title}</h3>
                  </div>
                  <div className="p-5 overflow-x-auto">
                    <div
                      className={proseClasses}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Scenariusze zastosowań</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {page.useCases.map((uc, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-card transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary-50 text-primary-600 rounded-md flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{uc.title}</h3>
                  </div>
                  <p
                    className="text-gray-500 text-sm leading-relaxed [&_a]:text-primary-600 [&_a]:font-medium hover:[&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: uc.description }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Unique Insights */}
          <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{page.uniqueInsights.heading}</h2>
            <div className="space-y-3">
              {page.uniqueInsights.items.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-3">
              {page.faq.map((f, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-primary-200 transition-colors">
                  <summary className="cursor-pointer px-5 py-4 text-gray-900 font-medium flex items-center justify-between hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    <span className="pr-4">{f.question}</span>
                    <ChevronRightIcon size={18} className="text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    <div
                      className="text-gray-600 text-sm leading-relaxed [&_a]:text-primary-600 [&_a]:font-medium hover:[&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: f.answer }}
                    />
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Links */}
          {page.relatedLinks.length > 0 && (
            <section>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Zobacz też</h3>
              <div className="flex flex-wrap gap-2">
                {page.relatedLinks.map(link => (
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

          {/* Other Industry Pages */}
          {otherPages.length > 0 && (
            <section className="pt-10 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Rozwiązania dla innych branż</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherPages.map(p => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group block p-5 bg-gray-50 rounded-xl hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors">{p.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{p.heroSubtext}</p>
                    <span className="text-sm text-primary-600 font-medium mt-2 inline-block">
                      Dowiedz się więcej &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-gray-900 mb-2">Potrzebujesz pomocy w doborze?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Nasi eksperci z ponad 25-letnim doświadczeniem pomogą dobrać drukarkę idealnie dopasowaną do Twojej branży i budżetu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Bezpłatna konsultacja
              </Link>
              <Link
                href="/drukarki-etykiet"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Przeglądaj wszystkie drukarki
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
