import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  getCategoryById,
  getProductsByCategory,
  getSubcategoriesForCategory,
  getChildSubcategories,
  categories,
  brandCategories,
} from '@/data/products'
import { subcategoryContent } from '@/data/subcategory-content'
import ServiceBanner from '@/components/ui/ServiceBanner'
import LinkedText from '@/components/ui/LinkedText'

interface CategoryPageProps {
  slug: string
}

export default function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategoryById(slug)!
  const products = getProductsByCategory(category.id)
  const subcats = getSubcategoriesForCategory(category.id)
  const content = subcategoryContent[slug]

  const faqJsonLd = content?.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null

  const howToJsonLd = content?.howToSteps?.length ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Jak wybrać i wdrożyć ${category.name.toLowerCase()}`,
    description: `Krok po kroku: wybór, konfiguracja i wdrożenie ${category.name.toLowerCase()} w firmie.`,
    step: content.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } : null

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://www.takma.com.pl/${category.slug}` },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.seoDescription,
    url: `https://www.takma.com.pl/${category.slug}`,
    numberOfItems: products.length,
    dateModified: '2026-02-22',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/produkt/${p.slug}`,
      })),
    },
  }

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: category.name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.definition-content', '.faq-section'],
    },
    url: `https://www.takma.com.pl/${category.slug}`,
  }

  const productWord = products.length === 1
    ? 'produkt'
    : products.length < 5
      ? 'produkty'
      : 'produktów'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-primary-600 transition-colors whitespace-nowrap">
            Strona główna
          </Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium whitespace-nowrap">{category.name}</span>
        </nav>

        {/* H1 + intro */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {category.name}
          </h1>
          <p className="text-gray-600 sm:text-justify">
            {category.longDescription}
          </p>
          <p className="text-gray-500 text-sm mt-3">
            {products.length} {productWord}
          </p>
        </div>

        {/* Sidebar + Content layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - desktop only */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="font-semibold text-gray-900 mb-3">Kategoria</h2>
              <ul className="space-y-1">
                {categories.map((cat) => {
                  const subs = getSubcategoriesForCategory(cat.id)
                  const isCurrent = cat.id === category.id
                  return (
                    <li key={cat.id}>
                      <Link
                        href={`/${cat.slug}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isCurrent
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.name}
                        <span className="text-gray-400 ml-1">({cat.productCount})</span>
                      </Link>
                      {isCurrent && (brandCategories.filter(b => b.categoryId === cat.id).length > 0 || subs.length > 0) && (
                        <ul className="ml-3 mt-1 space-y-0.5">
                          {brandCategories.filter(b => b.categoryId === cat.id).map((bc) => (
                            <li key={bc.id}>
                              <Link
                                href={`/${bc.slug}`}
                                className="block px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              >
                                {bc.name}
                              </Link>
                            </li>
                          ))}
                          {subs.map((sub) => {
                            const children = getChildSubcategories(sub.id)
                            return (
                              <li key={sub.id}>
                                <Link
                                  href={`/${sub.slug}`}
                                  className="block px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                >
                                  {sub.name}
                                  <span className="text-gray-400 ml-1">({sub.productCount})</span>
                                </Link>
                                {children.length > 0 && (
                                  <ul className="ml-3 mt-0.5 space-y-0.5">
                                    {children.map((child) => (
                                      <li key={child.id}>
                                        <Link
                                          href={`/${child.slug}`}
                                          className="block px-3 py-1.5 rounded-lg text-xs text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                        >
                                          {child.name}
                                          <span className="text-gray-400 ml-1">({child.productCount})</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            )
                          })}
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
            <ProductGrid products={products} variant="grid" columns={3} />

            {/* Rich content sections */}
            {content && (
              <div className="mt-12 space-y-10">
                {/* Definition */}
                <section className="definition-content">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.definition.heading}</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3 sm:text-justify">
                    {content.definition.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {/* Buying Guide */}
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

                {/* Expert Authority */}
                <section className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Dlaczego TAKMA? Ekspert na rynku AutoID w Polsce</h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-justify">{content.expertAuthority}</p>
                </section>

                {/* Technical Deep-Dive */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Szczegóły techniczne</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3 sm:text-justify">
                    {content.technicalDeepDive.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {/* Use Cases */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenariusze zastosowań</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {content.useCases.map((uc, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Unique Insights */}
                <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{content.uniqueInsights.heading}</h2>
                  <div className="space-y-4">
                    {content.uniqueInsights.items.map((item, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {i + 1}. {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Comparisons */}
                {content.comparisons.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Porównania</h2>
                    <div className="space-y-4">
                      {content.comparisons.map((comp, i) => (
                        <div key={i} className="border-l-4 border-primary-500 pl-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{comp.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed sm:text-justify">{comp.content}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* HowTo Steps */}
                {content.howToSteps?.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak wybrać i wdrożyć {category.name.toLowerCase()}?</h2>
                    <ol className="space-y-4">
                      {content.howToSteps.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{step.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {/* FAQ */}
                <section className="faq-section">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Najczęściej zadawane pytania</h2>
                  <div className="space-y-4">
                    {content.faq.map((f, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                          <span className="font-medium text-gray-900 pr-4">{f.question}</span>
                          <ChevronRightIcon
                            size={18}
                            className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90"
                          />
                        </summary>
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm sm:text-justify">
                          <LinkedText text={f.answer} />
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

              </div>
            )}

            <ServiceBanner categoryId={category.id} />
          </div>
        </div>
      </div>
    </>
  )
}
