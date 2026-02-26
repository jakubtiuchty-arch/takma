import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  getBrandCategoryBySlug,
  getProductsByBrandCategory,
  getCategoryById,
  getManufacturerById,
  getSubcategoriesForCategory,
  categories,
  brandCategories,
} from '@/data/products'
import { brandCategoryContent } from '@/data/brand-category-content'
import ServiceBanner from '@/components/ui/ServiceBanner'

/** Renders text with markdown-style links [text](/url) or [text](https://...) */
function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return (
    <>
      {parts.map((part, i) => {
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          const [, label, href] = linkMatch
          const isExternal = href.startsWith('http')
          if (isExternal) {
            return <a key={i} href={href} target="_blank" rel="noopener" className="text-primary-600 hover:text-primary-800 underline decoration-primary-300">{label}</a>
          }
          return <Link key={i} href={href} className="text-primary-600 hover:text-primary-800 underline decoration-primary-300">{label}</Link>
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

/** Renders text with \n\n paragraph breaks */
function RichText({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split('\n\n')
  return (
    <div className={className}>
      {paragraphs.map((para, i) => {
        const lines = para.split('\n')
        return (
          <p key={i}>
            {lines.map((line, j) => (
              <span key={j}>
                {j > 0 && <br />}
                <LinkedText text={line} />
              </span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

interface BrandCategoryPageProps {
  slug: string
}

export default function BrandCategoryPage({ slug }: BrandCategoryPageProps) {
  const bc = getBrandCategoryBySlug(slug)!
  const category = getCategoryById(bc.categoryId)!
  const manufacturer = getManufacturerById(bc.manufacturerId)!
  const allProducts = getProductsByBrandCategory(bc)
  const subcats = getSubcategoriesForCategory(bc.categoryId)
  const content = brandCategoryContent[slug]

  // Subcats with products from this manufacturer
  const subcatsWithProducts = subcats
    .map(sub => ({
      ...sub,
      filteredCount: allProducts.filter(p => p.subcategoryIds?.includes(sub.id)).length,
    }))
    .filter(s => s.filteredCount > 0)

  // Sibling brand categories (other brand+category pages for the same category)
  const siblingBrandCats = brandCategories.filter(
    sbc => sbc.categoryId === bc.categoryId && sbc.id !== bc.id
  )

  const productWord = allProducts.length === 1
    ? 'produkt'
    : allProducts.length < 5
      ? 'produkty'
      : 'produktów'

  // Schema JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://www.takma.com.pl/${category.slug}` },
      { '@type': 'ListItem', position: 3, name: bc.name, item: `https://www.takma.com.pl/${bc.slug}` },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: bc.name,
    description: bc.seoDescription,
    url: `https://www.takma.com.pl/${bc.slug}`,
    numberOfItems: allProducts.length,
    dateModified: '2026-02-26',
    provider: { '@type': 'Organization', name: 'TAKMA', url: 'https://www.takma.com.pl' },
    brand: { '@type': 'Brand', name: manufacturer.name },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/produkt/${p.slug}`,
      })),
    },
  }

  const faqItems = content?.faq ?? bc.faq
  const faqJsonLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const howToJsonLd = content?.howToSteps?.length ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Jak wybrać i wdrożyć ${bc.name.toLowerCase()}`,
    description: `Krok po kroku: wybór, konfiguracja i wdrożenie ${bc.name.toLowerCase()} w firmie.`,
    step: content.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } : null

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: bc.name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.definition-content', '.faq-section'],
    },
    url: `https://www.takma.com.pl/${bc.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-primary-600 transition-colors whitespace-nowrap">Strona główna</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <Link href={`/${category.slug}`} className="hover:text-primary-600 transition-colors whitespace-nowrap">{category.name}</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium whitespace-nowrap">{bc.name}</span>
        </nav>

        {/* H1 + intro */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{bc.name}</h1>
          <p className="text-gray-600 sm:text-justify leading-relaxed">{bc.longDescription}</p>
          <p className="text-gray-500 text-sm mt-3">{allProducts.length} {productWord}</p>
        </div>

        {/* Sidebar + Content layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="font-semibold text-gray-900 mb-3">Kategoria</h2>
              <ul className="space-y-1">
                {categories.map(cat => {
                  const isParent = cat.id === bc.categoryId
                  const catSubs = getSubcategoriesForCategory(cat.id)
                  const catBrands = brandCategories.filter(b => b.categoryId === cat.id)
                  return (
                    <li key={cat.id}>
                      <Link
                        href={`/${cat.slug}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isParent ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.name}
                        <span className="text-gray-400 ml-1">({cat.productCount})</span>
                      </Link>
                      {isParent && (catBrands.length > 0 || catSubs.length > 0) && (
                        <ul className="ml-3 mt-1 space-y-0.5">
                          {catBrands.map(b => (
                            <li key={b.id}>
                              <Link
                                href={`/${b.slug}`}
                                className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                  b.id === bc.id
                                    ? 'bg-primary-50 text-primary-700 font-medium'
                                    : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                                }`}
                              >
                                {b.name}
                              </Link>
                            </li>
                          ))}
                          {catSubs.map(sub => (
                            <li key={sub.id}>
                              <Link
                                href={`/${sub.slug}`}
                                className="block px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              >
                                {sub.name}
                                <span className="text-gray-400 ml-1">({sub.productCount})</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={allProducts} variant="grid" columns={3} />

            {/* Rich SEO content */}
            {content && (
              <div className="mt-12 space-y-10">
                <section className="definition-content">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.definition.heading}</h2>
                  <p className="text-gray-600 leading-relaxed sm:text-justify">{content.definition.content}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.buyingGuide.heading}</h2>
                  <ul className="space-y-3">
                    {content.buyingGuide.items.map((item, i) => {
                      const dashIndex = item.indexOf(' — ')
                      const hasDash = dashIndex > 0
                      return (
                        <li key={i} className="flex gap-3 text-gray-600">
                          <span className="text-primary-600 font-bold mt-0.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed">
                            {hasDash ? (
                              <>
                                <strong className="text-gray-900">{item.substring(0, dashIndex)}</strong>
                                {item.substring(dashIndex)}
                              </>
                            ) : item}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </section>

                <section className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Dlaczego TAKMA?</h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-justify">{content.expertAuthority}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Parametry techniczne i koszty</h2>
                  {(() => {
                    // Split into individual lines, then group into bullets vs text
                    const allLines = content.technicalDeepDive.split('\n').filter(Boolean)
                    const bulletLines: string[] = []
                    const textLines: string[] = []
                    for (const line of allLines) {
                      if (line.startsWith('• ')) {
                        bulletLines.push(line)
                      } else {
                        textLines.push(line)
                      }
                    }

                    // Parse each bullet into structured row
                    const rows = bulletLines.map(line => {
                      const text = line.replace(/^• /, '')
                      const colonIdx = text.indexOf('):')
                      const model = colonIdx > 0 ? text.substring(0, colonIdx + 1) : ''
                      const rest = colonIdx > 0 ? text.substring(colonIdx + 2).trim() : text
                      const priceMatch = rest.match(/od\s+[\d\s]+zł(?:\s*netto)?/)
                      const price = priceMatch ? priceMatch[0].replace(' netto', '') : ''
                      const dashParts = rest.split(' — ')
                      const desc = dashParts.length > 1 ? dashParts[dashParts.length - 1].replace(/\.$/, '') : ''
                      const specsPart = dashParts.length > 1 ? dashParts.slice(0, -1).join(' — ') : rest
                      const specs = specsPart.replace(/,?\s*od\s+[\d\s]+zł(?:\s*netto)?/, '').trim().replace(/\.$/, '')
                      return { model, specs, price, desc }
                    })

                    return (
                      <>
                        {textLines[0] && (
                          <p className="text-gray-600 leading-relaxed mb-4 sm:text-justify">{textLines[0]}</p>
                        )}
                        <div className="overflow-x-auto -mx-4 px-4 mb-6">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="text-left px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Model</th>
                                <th className="text-left px-3 py-2.5 font-semibold text-gray-900">Kluczowe parametry</th>
                                <th className="text-left px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Cena netto</th>
                                <th className="text-left px-3 py-2.5 font-semibold text-gray-900 hidden md:table-cell">Zastosowanie</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, i) => (
                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                                  <td className="px-3 py-2.5 font-medium text-gray-900 whitespace-nowrap align-top">{row.model}</td>
                                  <td className="px-3 py-2.5 text-gray-500 text-xs leading-relaxed align-top">{row.specs}</td>
                                  <td className="px-3 py-2.5 text-primary-600 font-semibold whitespace-nowrap align-top">{row.price || '—'}</td>
                                  <td className="px-3 py-2.5 text-gray-600 text-xs hidden md:table-cell align-top">{row.desc || '—'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {textLines.slice(1).map((block, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-justify mb-3">{block}</p>
                        ))}

                        {/* TCO comparisons from structured data */}
                        {content.tcoComparisons?.map((tco, ti) => (
                          <div key={ti} className="bg-primary-50/60 border border-primary-100 rounded-xl p-5 mt-2">
                            <h3 className="font-bold text-gray-900 mb-3">{tco.title}</h3>
                            <div className={`grid gap-4 ${tco.variants.length > 1 ? 'md:grid-cols-2' : ''}`}>
                              {tco.variants.map((v, vi) => (
                                <div key={vi} className="bg-white rounded-lg p-4 border border-gray-100">
                                  <p className="font-semibold text-gray-900 text-sm mb-2">{v.label}</p>
                                  <table className="w-full text-sm">
                                    <tbody>
                                      {v.items.map((item, ii) => (
                                        <tr key={ii} className="border-b border-gray-50">
                                          <td className="py-1.5 text-gray-600 text-xs">{item.name}</td>
                                          <td className="py-1.5 text-gray-900 text-xs font-medium text-right whitespace-nowrap">{item.cost}</td>
                                        </tr>
                                      ))}
                                      <tr className="border-t border-gray-200">
                                        <td className="pt-2 font-semibold text-gray-900 text-sm">RAZEM</td>
                                        <td className="pt-2 font-bold text-primary-600 text-sm text-right whitespace-nowrap">{v.total}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              ))}
                            </div>
                            {tco.conclusion && (
                              <p className="text-gray-600 text-xs mt-3 leading-relaxed">{tco.conclusion}</p>
                            )}
                          </div>
                        ))}
                      </>
                    )
                  })()}
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenariusze zastosowań</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.useCases.map((uc, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{content.uniqueInsights.heading}</h2>
                  <div className="space-y-4">
                    {content.uniqueInsights.items.map((item, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{i + 1}. {item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {content.comparisons.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Porównanie</h2>
                    <div className="space-y-4">
                      {content.comparisons.map((comp, i) => (
                        <div key={i} className="border-l-4 border-primary-500 pl-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{comp.title}</h3>
                          <RichText text={comp.content} className="text-gray-600 text-sm leading-relaxed space-y-2" />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {content.howToSteps && content.howToSteps.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak wdrożyć {bc.name.toLowerCase()}?</h2>
                    <ol className="space-y-4">
                      {content.howToSteps.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">{i + 1}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{step.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                <section className="faq-section">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Najczęściej zadawane pytania</h2>
                  <div className="space-y-4">
                    {content.faq.map((f, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                          <span className="font-medium text-gray-900 pr-4">{f.question}</span>
                          <ChevronRightIcon size={18} className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm sm:text-justify"><LinkedText text={f.answer} /></div>
                      </details>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Fallback FAQ if no rich content */}
            {!content && bc.faq.length > 0 && (
              <div className="mt-12">
                <section className="faq-section">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Najczęściej zadawane pytania</h2>
                  <div className="space-y-4">
                    {bc.faq.map((f, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                          <span className="font-medium text-gray-900 pr-4">{f.question}</span>
                          <ChevronRightIcon size={18} className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm sm:text-justify"><LinkedText text={f.answer} /></div>
                      </details>
                    ))}
                  </div>
                </section>
              </div>
            )}

            <ServiceBanner categoryId={bc.categoryId} />

            {/* Cross-links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Zobacz również</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href={`/${category.slug}`} className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">Wszystkie marki — {category.productCount} produktów</p>
                </Link>
                {subcatsWithProducts.slice(0, 5).map(sub => (
                  <Link key={sub.id} href={`/${sub.slug}`} className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-1">{sub.name}</h3>
                    <p className="text-sm text-gray-500">{sub.filteredCount} {manufacturer.name} &rarr;</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
