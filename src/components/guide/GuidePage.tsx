import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { Guide, guideCategoryLabels } from '@/data/guides'
import { products } from '@/data/products'

// Build model name → slug map
const productNameMap: Record<string, string> = {}
for (const p of products) {
  const short = p.name.replace(/^Zebra\s+/i, '')
  productNameMap[short.toUpperCase()] = p.slug
  productNameMap[short] = p.slug
}

// Bold + link product model names in HTML
function boldifyModels(html: string): string {
  return html.replace(/(<[^>]*>)|(\b(?:Zebra\s+)?Z[DT]\d{3}[dDtT]?\b)/gi, (match, tag, model) => {
    if (tag) return tag
    const short = model.replace(/^Zebra\s+/i, '')
    const slug = productNameMap[short] || productNameMap[short.toUpperCase()]
    if (slug) {
      return `<strong><a href="/produkt/${slug}">${model}</a></strong>`
    }
    return `<strong>${model}</strong>`
  })
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
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Poradniki', item: 'https://takma.com.pl/poradnik' },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `https://takma.com.pl/poradnik/${guide.slug}` },
    ],
  }

  // JSON-LD: Article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.seoDescription,
    author: { '@type': 'Organization', name: 'TAKMA', url: 'https://takma.com.pl' },
    publisher: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://takma.com.pl',
      logo: { '@type': 'ImageObject', url: 'https://takma.com.pl/images/takma_logo.png' },
    },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: `https://takma.com.pl/poradnik/${guide.slug}`,
    image: guide.heroImage ? `https://takma.com.pl${guide.heroImage}` : undefined,
  }

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="bg-white">
        {/* Breadcrumbs */}
        <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link></li>
            <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
            <li><Link href="/poradnik" className="hover:text-primary-600 transition-colors">Poradniki</Link></li>
            <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
            <li className="text-gray-900 font-medium truncate max-w-[300px]">{guide.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="container-main pt-6 pb-8 border-b border-gray-100">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                {guideCategoryLabels[guide.category]}
              </span>
              <span className="text-sm text-gray-500">{guide.readTime} czytania</span>
              <span className="text-sm text-gray-400">|</span>
              <time className="text-sm text-gray-500" dateTime={guide.updatedAt}>
                Aktualizacja: {new Date(guide.updatedAt).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {guide.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {guide.excerpt}
            </p>
          </div>
        </header>

        {/* Table of Contents + Content */}
        <div className="container-main py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar — TOC */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <nav className="bg-gray-50 rounded-xl p-5">
                  <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Spis treści</h2>
                  <ol className="space-y-2">
                    {guide.sections.map((section, i) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex gap-2"
                        >
                          <span className="text-gray-400 font-medium">{i + 1}.</span>
                          <span>{section.heading}</span>
                        </a>
                      </li>
                    ))}
                    {guide.faq.length > 0 && (
                      <li>
                        <a href="#faq" className="text-sm text-gray-600 hover:text-primary-600 transition-colors flex gap-2">
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
                      className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-50 prose-th:text-left prose-th:font-semibold prose-td:border-t prose-td:border-gray-100 prose-img:rounded-xl"
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
                      <details key={i} className="group bg-gray-50 rounded-xl overflow-hidden">
                        <summary className="cursor-pointer px-5 py-4 text-gray-900 font-semibold flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <span>{item.question}</span>
                          <ChevronRightIcon size={18} className="text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-3" />
                        </summary>
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <section className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
                <h3 className="text-base font-bold text-gray-900 mb-2">Potrzebujesz pomocy w wyborze?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nasi eksperci z ponad 25-letnim doświadczeniem pomogą dobrać drukarkę idealnie dopasowaną do Twoich potrzeb i budżetu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Skontaktuj się z nami
                  </Link>
                  <Link
                    href="/drukarki-etykiet"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Przeglądaj drukarki
                  </Link>
                </div>
              </section>

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
