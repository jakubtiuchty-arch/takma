import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import FilterableProductGrid, { FilterDefinition, CategoryNavItem } from '@/components/subcategory/FilterableProductGrid'
import { categoryFilters } from '@/data/category-filters'
import {
  getSubcategoryBySlug,
  getSubcategoryById,
  getProductsBySubcategory,
  getCategoryById,
  getSubcategoriesForCategory,
  getChildSubcategories,
  subcategories,
  categories,
  brandCategories,
} from '@/data/products'
import { subcategoryContent, type ComparisonTable } from '@/data/subcategory-content'
import ServiceBanner from '@/components/ui/ServiceBanner'
import LinkedText from '@/components/ui/LinkedText'
import KalkulatorKosztuEtykiet from '@/components/subcategory/KalkulatorKosztuEtykiet'
import WskazowkaWyboru from '@/components/subcategory/WskazowkaWyboru'
import SekcjaZwijana from '@/components/subcategory/SekcjaZwijana'
import BrandServiceBanner from '@/app/produkt/[slug]/ServiceBanner'

/**
 * Zestawienie modeli. Sześć kolumn nie mieści się na telefonie, a przewijanie w bok gubi
 * nazwę modelu, więc poniżej md każdy model dostaje własną kartę z parami parametr–wartość.
 * Od md wraca zwykła tabela.
 */
function TabelaPorownawcza({ table }: { table: ComparisonTable }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{table.heading}</h2>
      {table.intro && <p className="text-gray-600 leading-relaxed mb-4 sm:text-justify">{table.intro}</p>}

      <div className="space-y-3 md:hidden">
        {table.rows.map((row) => (
          <div key={row.model} className="rounded-xl border border-gray-200">
            <div className="border-b border-gray-200 px-4 py-3">
              <Link href={row.href} className="font-semibold text-primary-600">{row.model}</Link>
              {row.role && <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{row.role}</p>}
            </div>
            <dl className="divide-y divide-gray-100 text-sm">
              {table.columns.map((c, i) => (
                <div key={c} className="flex gap-3 px-4 py-2">
                  <dt className="w-[42%] shrink-0 text-xs leading-5 text-gray-500">{c}</dt>
                  <dd className="flex-1 text-gray-900">{row.cells[i]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-xl border border-gray-200 md:block">
        <table className="w-full min-w-[46rem] border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Model</th>
              {table.columns.map((c) => (
                <th key={c} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold text-gray-900">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.model} className="border-t border-gray-200 align-top">
                <th scope="row" className="px-4 py-3 text-left font-medium">
                  <Link href={row.href} className="text-primary-600 hover:underline">{row.model}</Link>
                  {row.role && <span className="mt-1 block text-xs font-normal text-gray-500">{row.role}</span>}
                </th>
                {row.cells.map((cell, i) => (
                  <td key={i} className="px-4 py-3 text-gray-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="mt-3 text-sm leading-relaxed text-gray-500">{table.note}</p>}
    </section>
  )
}

/** Renders text with \n\n paragraph breaks and \n line breaks within paragraphs */
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
                {line}
              </span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

/**
 * Podkategorie z ciemnym hero na górze. Bez wpisu strona zostaje przy jasnym nagłówku.
 * `lead` to krótkie zdanie pod H1 — bez linków, bo z hero się nie wychodzi; pełny opis
 * kategorii (z linkami) renderuje się niżej, nad siatką produktów.
 */
const heroImages: Record<string, { src: string; alt: string; lead: string }> = {
  'kolorowe-drukarki-etykiet': {
    src: '/images/kolorowe-drukarki-etykiet-hero-v5.webp',
    alt: 'Wstęga etykiet z tym samym projektem: po lewej wydruk czarno-biały, w środku wybuch pigmentu CMYK, po prawej ta sama etykieta w pełnym kolorze',
    lead: 'Etykieta z logo, zdjęciem produktu albo piktogramem GHS powstaje na miejscu, w nakładzie na dziś. Sześć modeli Epson ColorWorks — od biurkowego C3500 po przemysłową C8000e.',
  },
}

/** Baner serwisowy na dole kategorii — dla marek, których serwis prowadzimy sami. */
const serviceBanners: Record<string, { brandName: string; href: string; image: string; eyebrow: string; lead: string; cta: string; imageAlt: string; imagePosition?: string }> = {
  'kolorowe-drukarki-etykiet': {
    brandName: 'Epson ColorWorks',
    href: '/serwis-kolorowych-drukarek-epson',
    image: '/images/serwis-banner/epson-colorworks-banner-v2.webp',
    eyebrow: 'Serwis Epson ColorWorks',
    lead: 'Zatkane dysze po przestoju, białe pasy na wydruku, pełny pojemnik konserwacyjny, gilotyna i odklejak. Diagnostyka w 48 godzin, odbiór kurierem z całej Polski.',
    cta: 'Zobacz serwis ColorWorks',
    imageAlt: 'Kolorowa drukarka etykiet z otwartą pokrywą na stole serwisowym, obok narzędzia i cztery wkłady CMYK',
    imagePosition: '62% 62%',
  },
}

/** Konfiguracja filtrów w sidebarze per subcategory */
const sidebarFilters: Record<string, FilterDefinition[]> = {
  'tasmy-termotransferowe': [
    { specKey: 'Typ taśmy', label: 'Rodzaj', sort: 'alpha' },
    { specKey: 'Szerokość', label: 'Szerokość', sort: 'numeric' },
    { specKey: 'Długość', label: 'Długość', sort: 'numeric' },
    { specKey: 'Rdzeń', label: 'Format', sort: 'numeric', displayMap: {
      '12.7 mm (0,5")': 'Desktop (12,7 mm)',
      '25 mm (1")': 'Industrial (25 mm)',
    }},
    { specKey: 'Seria', label: 'Seria', sort: 'alpha' },
  ],
  'etykiety-termotransferowe-papierowe': [
    { specKey: 'Wymiar etykiety', label: 'Szerokość', sort: 'numeric', transform: 'extract-width', style: 'dropdown' },
    { specKey: 'Wymiar etykiety', label: 'Wysokość', sort: 'numeric', transform: 'extract-height', style: 'dropdown' },
  ],
  'etykiety-termotransferowe-foliowe': [
    { specKey: 'Seria', label: 'Seria', sort: 'alpha', style: 'dropdown' },
    { specKey: 'Wymiar etykiety', label: 'Szerokość', sort: 'numeric', transform: 'extract-width', style: 'dropdown' },
    { specKey: 'Wymiar etykiety', label: 'Wysokość', sort: 'numeric', transform: 'extract-height', style: 'dropdown' },
  ],
  'etykiety-termiczne-zebra': [
    { specKey: 'Wymiar etykiety', label: 'Szerokość', sort: 'numeric', transform: 'extract-width', style: 'dropdown' },
    { specKey: 'Wymiar etykiety', label: 'Wysokość', sort: 'numeric', transform: 'extract-height', style: 'dropdown' },
  ],
}

interface SubcategoryPageProps {
  slug: string
}

/** Tylko pierwsza litera w dół — nazwy własne w nazwie podkategorii mają zostać. */
function odmienNazwe(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1)
}

export default function SubcategoryPage({ slug }: SubcategoryPageProps) {
  const subcategory = getSubcategoryBySlug(slug)!
  const parentCategory = getCategoryById(subcategory.parentCategoryId)!
  const parentSubcategory = subcategory.parentSubcategoryId
    ? getSubcategoryById(subcategory.parentSubcategoryId)
    : undefined
  const products = getProductsBySubcategory(subcategory.id)
  const content = subcategoryContent[slug]

  // Siblings: subcategories at the same level
  const siblings = subcategory.parentSubcategoryId
    ? subcategories.filter(s => s.parentSubcategoryId === subcategory.parentSubcategoryId && s.id !== subcategory.id)
    : subcategories.filter(s => s.parentCategoryId === subcategory.parentCategoryId && !s.parentSubcategoryId && s.id !== subcategory.id)

  // Breadcrumbs: 3-level or 4-level depending on hierarchy
  const breadcrumbItems = [
    { '@type': 'ListItem' as const, position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
    { '@type': 'ListItem' as const, position: 2, name: parentCategory.name, item: `https://www.takma.com.pl/${parentCategory.slug}` },
  ]
  if (parentSubcategory) {
    breadcrumbItems.push(
      { '@type': 'ListItem', position: 3, name: parentSubcategory.name, item: `https://www.takma.com.pl/${parentSubcategory.slug}` },
      { '@type': 'ListItem', position: 4, name: subcategory.name, item: `https://www.takma.com.pl/${subcategory.slug}` },
    )
  } else {
    breadcrumbItems.push(
      { '@type': 'ListItem', position: 3, name: subcategory.name, item: `https://www.takma.com.pl/${subcategory.slug}` },
    )
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: subcategory.name,
    description: subcategory.seoDescription,
    url: `https://www.takma.com.pl/${subcategory.slug}`,
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
    name: `Jak wybrać i wdrożyć ${odmienNazwe(subcategory.name)}`,
    description: `Krok po kroku: wybór, konfiguracja i wdrożenie ${odmienNazwe(subcategory.name)} w firmie.`,
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
    name: subcategory.name,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.definition-content', '.faq-section'],
    },
    url: `https://www.takma.com.pl/${subcategory.slug}`,
  }

  const hero = heroImages[slug]
  const banerSerwisu = serviceBanners[slug]
  // Podkategoria jednej marki (np. Epson ColorWorks) nie może pokazywać banera serwisu Zebry.
  const jedynyProducent = products.length > 0 && products.every((p) => p.manufacturerId === products[0].manufacturerId)
    ? products[0].manufacturerId
    : undefined

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

      {hero && (
        <section className="relative bg-slate-950 text-white overflow-hidden">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Przesłona pod tekst: na wąskim ekranie tekst leży na całym obrazie, więc przyciemniamy
              go w całości; od sm gradient kończy się na 55 % szerokości, żeby nie zabierał
              nasycenia wybuchowi koloru, który zaczyna się mniej więcej w połowie kadru.
              Pozycje stopów tylko z domyślnej skali Tailwinda (co 5 %), inaczej klasa nie powstaje. */}
          <div className="absolute inset-0 bg-slate-950/75 sm:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 from-20% via-slate-950/70 via-35% to-transparent to-55%" />
          <div className="relative container-main py-10 lg:py-16">
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 overflow-x-auto">
              <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Strona główna</Link>
              <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
              <Link href={`/${parentCategory.slug}`} className="hover:text-white transition-colors whitespace-nowrap">
                {parentCategory.name}
              </Link>
              {parentSubcategory && (
                <>
                  <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
                  <Link href={`/${parentSubcategory.slug}`} className="hover:text-white transition-colors whitespace-nowrap">
                    {parentSubcategory.name}
                  </Link>
                </>
              )}
              <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
              <span className="text-white font-medium whitespace-nowrap">{subcategory.name}</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 max-w-lg">{subcategory.name}</h1>
            <p className="text-slate-200 max-w-md">{hero.lead}</p>
            <p className="text-slate-400 text-sm mt-3">
              {products.length} {productWord}
            </p>
          </div>
        </section>
      )}

      <div className="container-main py-8 lg:py-12">
        {!hero && (
          <>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
              <Link href="/" className="hover:text-primary-600 transition-colors whitespace-nowrap">
                Strona główna
              </Link>
              <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
              <Link
                href={`/${parentCategory.slug}`}
                className="hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {parentCategory.name}
              </Link>
              {parentSubcategory && (
                <>
                  <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
                  <Link
                    href={`/${parentSubcategory.slug}`}
                    className="hover:text-primary-600 transition-colors whitespace-nowrap"
                  >
                    {parentSubcategory.name}
                  </Link>
                </>
              )}
              <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
              <span className="text-gray-900 font-medium whitespace-nowrap">{subcategory.name}</span>
            </nav>

            {/* H1 + intro */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {subcategory.name}
              </h1>
              <p className="text-gray-600 sm:text-justify">
                <LinkedText text={subcategory.longDescription} />
              </p>
              <p className="text-gray-500 text-sm mt-3">
                {products.length} {productWord}
              </p>
            </div>
          </>
        )}

        {/* Sidebar + Content layout */}
        {(sidebarFilters[slug] || categoryFilters[slug]) ? (
          /* Layout z filtrami — FilterableProductGrid renderuje sidebar (kategorie+filtry) + grid; konfiguracja tu (materiały) albo w category-filters.ts (reguły pochodne) */
          <FilterableProductGrid
            products={products}
            filters={sidebarFilters[slug] || categoryFilters[slug]}
            filtersFirst={!sidebarFilters[slug]}
            categoryNav={categories.map(cat => {
              const subs = getSubcategoriesForCategory(cat.id)
              const catBrands = brandCategories.filter(b => b.categoryId === cat.id)
              const isParent = cat.id === subcategory.parentCategoryId
              const brandChildren = catBrands.map(bc => ({
                id: bc.id,
                slug: bc.slug,
                name: bc.name,
                productCount: 0,
                isCurrent: false,
              }))
              const subChildren = subs.map(sub => ({
                id: sub.id,
                slug: sub.slug,
                name: sub.name,
                productCount: sub.productCount,
                isCurrent: sub.id === subcategory.id,
              }))
              return {
                id: cat.id,
                slug: cat.slug,
                name: cat.name,
                productCount: cat.productCount,
                isParent,
                children: isParent && (brandChildren.length > 0 || subChildren.length > 0)
                  ? [...brandChildren, ...subChildren]
                  : undefined,
              } satisfies CategoryNavItem
            })}
            variant="grid"
            columns={3}
          >
            {/* Rich content sections */}
            {content && (
              <div className="mt-12 space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.definition.heading}</h2>
                  <RichText text={content.definition.content} className="text-gray-600 leading-relaxed space-y-3 sm:text-justify" />
                </section>

                {content.comparisonTable && <TabelaPorownawcza table={content.comparisonTable} />}

                {content.decisionGuide && <WskazowkaWyboru guide={content.decisionGuide} />}

                {content.calculator === 'koszt-etykiety' && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Termotransfer czy kolor? Policz koszt etykiety</h2>
                    <p className="text-gray-600 leading-relaxed mb-4 sm:text-justify">
                      Decyzja sprowadza się do jednego: czy kolor na etykiecie zastąpi rolkę zamawianą w drukarni.
                      Wpisz swój format, dzienny nakład i cenę, jaką dziś płacisz za gotową etykietę — kalkulator
                      pokaże koszt sztuki w trzech wariantach i moment, w którym drukarka się zwraca.
                    </p>
                    <KalkulatorKosztuEtykiet />
                  </section>
                )}

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.buyingGuide.heading}</h2>
                  <SekcjaZwijana etykieta="Pokaż wszystkie punkty">
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
                  </SekcjaZwijana>
                </section>

                <section className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Dlaczego TAKMA?</h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-justify">{content.expertAuthority}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Parametry techniczne i koszty</h2>
                  <SekcjaZwijana etykieta="Rozwiń opis">
                    <RichText text={content.technicalDeepDive} className="text-gray-600 leading-relaxed space-y-3 sm:text-justify" />
                  </SekcjaZwijana>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenariusze zastosowań</h2>
                  <SekcjaZwijana etykieta="Pokaż wszystkie scenariusze">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.useCases.map((uc, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                      </div>
                    ))}
                  </div>
                  </SekcjaZwijana>
                </section>

                <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{content.uniqueInsights.heading}</h2>
                  <SekcjaZwijana etykieta="Pokaż pozostałe" tlo="from-amber-50">
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
                  </SekcjaZwijana>
                </section>

                {content.comparisons.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Porównanie</h2>
                    <div className="space-y-4">
                      {content.comparisons.map((comp, i) => (
                        <div key={i} className="rounded-xl border border-gray-200 p-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{comp.title}</h3>
                          <RichText text={comp.content} className="text-gray-600 text-sm leading-relaxed space-y-2" />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {content.howToSteps?.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak wybrać i wdrożyć {odmienNazwe(subcategory.name)}?</h2>
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

            <ServiceBanner categoryId={subcategory.parentCategoryId} manufacturerId={jedynyProducent} />
            {banerSerwisu && (
              <div className="mt-10">
                <BrandServiceBanner {...banerSerwisu} imageFit="cover" />
              </div>
            )}

            {/* Cross-links */}
            {siblings.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Zobacz również</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {siblings.map(s => {
                    const sWord = s.productCount === 1
                      ? 'produkt'
                      : s.productCount < 5
                        ? 'produkty'
                        : 'produktów'
                    return (
                      <Link
                        key={s.id}
                        href={`/${s.slug}`}
                        className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                        <p className="text-sm text-gray-500">{s.description}</p>
                        <span className="text-sm text-primary-600 font-medium mt-2 inline-block">
                          {s.productCount} {sWord} &rarr;
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </FilterableProductGrid>
        ) : (
          /* Layout bez filtrów — klasyczny sidebar + grid */
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <div className="sticky top-32">
                <h2 className="font-semibold text-gray-900 mb-3">Kategoria</h2>
                <ul className="space-y-1">
                  {categories.map((cat) => {
                    const subs = getSubcategoriesForCategory(cat.id)
                    const isParent = cat.id === subcategory.parentCategoryId
                    return (
                      <li key={cat.id}>
                        <Link
                          href={`/${cat.slug}`}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isParent
                              ? 'bg-primary-50 text-primary-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {cat.name}
                          <span className="text-gray-400 ml-1">({cat.productCount})</span>
                        </Link>
                        {isParent && (brandCategories.filter(b => b.categoryId === cat.id).length > 0 || subs.length > 0) && (
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
                              const isCurrentOrAncestor = sub.id === subcategory.id || sub.id === subcategory.parentSubcategoryId
                              return (
                                <li key={sub.id}>
                                  <Link
                                    href={`/${sub.slug}`}
                                    className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                      sub.id === subcategory.id
                                        ? 'bg-primary-50 text-primary-700 font-medium'
                                        : sub.id === subcategory.parentSubcategoryId
                                          ? 'text-primary-600 font-medium'
                                          : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                                    }`}
                                  >
                                    {sub.name}
                                    <span className="text-gray-400 ml-1">({sub.productCount})</span>
                                  </Link>
                                  {isCurrentOrAncestor && children.length > 0 && (
                                    <ul className="ml-3 mt-0.5 space-y-0.5">
                                      {children.map((child) => (
                                        <li key={child.id}>
                                          <Link
                                            href={`/${child.slug}`}
                                            className={`block px-3 py-1.5 rounded-lg text-xs transition-colors ${
                                              child.id === subcategory.id
                                                ? 'bg-primary-50 text-primary-700 font-medium'
                                                : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                                            }`}
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

            <div className="flex-1 min-w-0">
              <ProductGrid products={products} variant="grid" columns={3} />

              {content && (
                <div className="mt-12 space-y-10">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.definition.heading}</h2>
                    <RichText text={content.definition.content} className="text-gray-600 leading-relaxed space-y-3 sm:text-justify" />
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.buyingGuide.heading}</h2>
                    <SekcjaZwijana etykieta="Pokaż wszystkie punkty">
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
                    </SekcjaZwijana>
                  </section>

                  <section className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">Dlaczego TAKMA?</h2>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-justify">{content.expertAuthority}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Parametry techniczne i koszty</h2>
                    <SekcjaZwijana etykieta="Rozwiń opis">
                    <RichText text={content.technicalDeepDive} className="text-gray-600 leading-relaxed space-y-3 sm:text-justify" />
                  </SekcjaZwijana>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenariusze zastosowań</h2>
                    <SekcjaZwijana etykieta="Pokaż wszystkie scenariusze">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {content.useCases.map((uc, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm">{uc.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
                        </div>
                      ))}
                    </div>
                    </SekcjaZwijana>
                  </section>

                  <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{content.uniqueInsights.heading}</h2>
                    <SekcjaZwijana etykieta="Pokaż pozostałe" tlo="from-amber-50">
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
                    </SekcjaZwijana>
                  </section>

                  {content.comparisons.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Porównanie</h2>
                      <div className="space-y-4">
                        {content.comparisons.map((comp, i) => (
                          <div key={i} className="rounded-xl border border-gray-200 p-4">
                            <h3 className="font-semibold text-gray-900 mb-1">{comp.title}</h3>
                            <RichText text={comp.content} className="text-gray-600 text-sm leading-relaxed space-y-2" />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {content.howToSteps?.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak wybrać i wdrożyć {odmienNazwe(subcategory.name)}?</h2>
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

              <ServiceBanner categoryId={subcategory.parentCategoryId} manufacturerId={jedynyProducent} />
            {banerSerwisu && (
              <div className="mt-10">
                <BrandServiceBanner {...banerSerwisu} imageFit="cover" />
              </div>
            )}

              {siblings.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Zobacz również</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {siblings.map(s => {
                      const sWord = s.productCount === 1
                        ? 'produkt'
                        : s.productCount < 5
                          ? 'produkty'
                          : 'produktów'
                      return (
                        <Link
                          key={s.id}
                          href={`/${s.slug}`}
                          className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                          <p className="text-sm text-gray-500">{s.description}</p>
                          <span className="text-sm text-primary-600 font-medium mt-2 inline-block">
                            {s.productCount} {sWord} &rarr;
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
