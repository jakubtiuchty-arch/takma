import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import FilterableProductGrid from '@/components/subcategory/FilterableProductGrid'
import { categoryFilters } from '@/data/category-filters'
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
import LinkedText from '@/components/ui/LinkedText'

/** Strip Markdown links from text for schema JSON-LD (Google doesn't parse Markdown) */
function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

/** Parse a markdown table block into header + rows */
function parseMarkdownTable(block: string) {
  const lines = block.split('\n').filter(l => l.trim().startsWith('|'))
  if (lines.length < 3) return null // need header + separator + at least 1 row
  const parse = (line: string) => line.split('|').slice(1, -1).map(c => c.trim())
  const header = parse(lines[0])
  // lines[1] is separator (|---|---|)
  const rows = lines.slice(2).map(parse)
  return { header, rows }
}

/** Renders text with \n\n paragraph breaks and markdown table support */
function RichText({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split('\n\n')
  return (
    <div className={className}>
      {paragraphs.map((para, i) => {
        // Check if this paragraph is a markdown table
        const trimmed = para.trim()
        if (trimmed.startsWith('|') && trimmed.includes('|---|')) {
          const table = parseMarkdownTable(trimmed)
          if (table) {
            return (
              <div key={i} className="overflow-x-auto -mx-4 px-4 my-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      {table.header.map((h, hi) => (
                        <th key={hi} className="text-left px-3 py-2 font-semibold text-gray-900 whitespace-nowrap text-xs"><LinkedText text={h} /></th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-gray-100 hover:bg-gray-50/50">
                        {row.map((cell, ci) => (
                          <td key={ci} className={`px-3 py-2 text-xs align-top ${ci === 0 ? 'font-medium text-gray-900 whitespace-nowrap' : 'text-gray-600'}`}>
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
        }
        const lines = para.split('\n')
        return (
          <p key={i}>
            {lines.map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                <LinkedText text={line} />
              </Fragment>
            ))}
          </p>
        )
      })}
    </div>
  )
}

/**
 * Ikona z zestawu wygenerowanego dla takmy (`public/icons/line/`). Kreska jest
 * czarno-granatowa na białym tle, więc `mix-blend-multiply` wtapia ją w tło sekcji.
 */
function Ikona({ nazwa, rozmiar = 40 }: { nazwa?: string; rozmiar?: number }) {
  if (!nazwa) return null
  return (
    <Image
      src={`/icons/line/${nazwa}.png`}
      alt=""
      width={rozmiar}
      height={rozmiar}
      className="mix-blend-multiply flex-shrink-0 self-start"
      style={{ width: rozmiar, height: rozmiar }}
      aria-hidden="true"
    />
  )
}

/** Ikony kolejnych kryteriów poradnika zakupowego (kolejność jak w danych). */
const IKONY_KRYTERIOW = ['klawiatura-fizyczna', 'skaner-daleki', 'wifi-hala', 'ai-kontrola', 'bateria-hotswap', 'budzet']

/** Telefon i formularz — klient, który już wie, czego chce, nie ma dziś na tej stronie gdzie kliknąć. */
function ContactBlock({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="border border-gray-200 rounded-xl p-6 bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{heading}</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{text}</p>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="tel:+48607819688"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2.5 transition-colors"
        >
          +48 607 819 688
        </a>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg px-4 py-2.5 transition-colors"
        >
          Napisz do nas
        </Link>
        <a href="mailto:takma@takma.com.pl" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
          takma@takma.com.pl
        </a>
      </div>
    </section>
  )
}

/** Sekcja zwijana — długie bloki doradcze nie mają stać otworem jeden pod drugim. */
function Accordion({ heading, children, id }: { heading: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <details className="group border border-gray-200 rounded-xl overflow-hidden">
        <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 pr-4">{heading}</h2>
          <ChevronRightIcon size={18} className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" />
        </summary>
        <div className="px-5 pb-5 pt-1">{children}</div>
      </details>
    </section>
  )
}

/** „Jak wdrożyć terminale M3 Mobile?" — sama pierwsza litera w dół, reszta nazwy własnej zostaje. */
function odmien(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1)
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

  // Do komponentu klienckiego jadą tylko pola, których używa kafel i filtry.
  // Reszta (`faq`, `comparison`, długie opisy) zostaje na serwerze — payload
  // strony marki spada o kilkadziesiąt kilobajtów.
  const produktyDoSiatki = allProducts.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    images: p.images.slice(0, 1),
    imageDescriptions: p.imageDescriptions?.slice(0, 1),
    manufacturerId: p.manufacturerId,
    categoryId: p.categoryId,
    subcategoryIds: p.subcategoryIds,
    specifications: p.specifications,
    variants: p.variants,
    priceFrom: p.priceFrom,
    priceTiers: p.priceTiers,
    availability: p.availability,
  }))

  // Pasek faktów pod H1 — zadanie użytkownika z wyszukiwarki to modele i ceny.
  const cenyOd = allProducts.map(p => p.priceFrom).filter((c): c is number => !!c && c > 0)
  const najtansza = cenyOd.length ? Math.min(...cenyOd) : null
  const dostepneOdReki = allProducts.filter(p => p.availability === 'available').length
  const zKlawiatura = allProducts.filter(p => p.specifications.some(sp => /^Klawiatur/i.test(sp.name))).length
  // pl-PL nie grupuje czterocyfrowych liczb, a „2269 zł" czyta się gorzej niż „2 269 zł"
  const zlote = (v: number) => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')

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

  // Jeden węzeł na URL: CollectionPage ze `speakable`, z `@id` do spięcia z resztą
  // grafu. `numberOfItems` należy do listy, nie do strony; producent idzie jako
  // `about`, bo `brand` nie jest właściwością CollectionPage.
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://www.takma.com.pl/${bc.slug}#kolekcja`,
    name: bc.name,
    description: bc.seoDescription,
    url: `https://www.takma.com.pl/${bc.slug}`,
    inLanguage: 'pl-PL',
    ...(content?.updatedAt ? { dateModified: content.updatedAt } : {}),
    provider: { '@type': 'Organization', name: 'TAKMA', url: 'https://www.takma.com.pl' },
    about: { '@type': 'Brand', name: manufacturer.name },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.definition-content', '.faq-section'],
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allProducts.length,
      itemListElement: allProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
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
      acceptedAnswer: { '@type': 'Answer', text: stripMarkdownLinks(f.answer) },
    })),
  } : null

  const howToJsonLd = content?.howToSteps?.length ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: content?.sectionHeadings?.howToSteps || `Jak wdrożyć ${odmien(bc.name)}?`,
    step: content.howToSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: stripMarkdownLinks(step.text),
    })),
  } : null

  const richContent = (
    <>
            {/* Rich SEO content */}
            {content && (
              <div className="mt-12 space-y-10">
                <section id="modele" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.sectionHeadings?.technicalDeepDive || 'Parametry techniczne i koszty'}</h2>
                  {(() => {
                    const allLines = content.technicalDeepDive.split('\n').filter(Boolean)
                    const bulletLines = allLines.filter((l) => l.startsWith('• '))
                    const textLines = allLines.filter((l) => !l.startsWith('• '))

                    // Zestawienie z pól (czytelne karty) — a gdy wpis marki go nie ma,
                    // stary rozbiór zdania na tabelę, żeby pozostałe strony działały.
                    const rows = content.modelTable
                      ? []
                      : bulletLines.map((line) => {
                          const text = line.replace(/^• /, '')
                          const colonIdx = text.indexOf('):')
                          const model = colonIdx > 0 ? text.substring(0, colonIdx + 1) : ''
                          const rest = colonIdx > 0 ? text.substring(colonIdx + 2).trim() : text
                          const cennik = /[Oo]d\s+[\d\s]+zł(?:\s*netto)?(?:\s*\([^)]*\))?(?:\s*\/\s*[\d\s]+zł(?:\s*\([^)]*\))?)*|cena (?:TBD|w zapytaniu)/
                          const priceMatch = rest.match(cennik)
                          const price = priceMatch ? priceMatch[0].replace(' netto', '').trim() : ''
                          const dashParts = rest.split(' — ')
                          const desc = dashParts.length > 1 ? dashParts[dashParts.length - 1].replace(/\.$/, '') : ''
                          const specsPart = dashParts.length > 1 ? dashParts.slice(0, -1).join(' — ') : rest
                          const specs = specsPart.replace(new RegExp(`,?\\s*${cennik.source}`), '').trim().replace(/[.,]$/, '')
                          return { model, specs, price, desc }
                        })

                    return (
                      <>
                        {textLines[0] && (
                          <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl"><LinkedText text={textLines[0]} /></p>
                        )}

                        {content.modelTable ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                            {content.modelTable.map((m) => (
                              <article key={m.name} className="border border-gray-200 rounded-xl bg-white flex flex-col">
                                <header className="flex items-start gap-3 p-4 pb-3">
                                  <Ikona nazwa={m.icon} rozmiar={36} />
                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-bold text-gray-900 leading-tight">
                                      <Link href={m.href} className="hover:text-primary-600 transition-colors">{m.name}</Link>
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
                                  </div>
                                  <p className="text-right text-primary-700 font-semibold whitespace-nowrap">{m.priceFrom}</p>
                                </header>

                                <dl className="px-4 divide-y divide-gray-100 border-t border-gray-100">
                                  {m.specs.map((sp) => (
                                    <div key={sp.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2">
                                      <dt className="text-xs text-gray-500 pt-0.5">{sp.label}</dt>
                                      <dd className="text-xs text-gray-900 leading-relaxed">{sp.value}</dd>
                                    </div>
                                  ))}
                                </dl>

                                <div className="p-4 pt-3 mt-auto border-t border-gray-100">
                                  {m.priceVariants && (
                                    <p className="text-xs text-gray-500 mb-2">{m.priceVariants}</p>
                                  )}
                                  <p className="text-sm text-gray-600 leading-relaxed">{m.bestFor}</p>
                                  <Link href={m.href} className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors mt-3">
                                    Zobacz {m.name}
                                    <ChevronRightIcon size={14} />
                                  </Link>
                                </div>
                              </article>
                            ))}
                          </div>
                        ) : (
                          <>
                            <div className="hidden md:block overflow-x-auto -mx-4 px-4 mb-6">
                              <table className="w-full text-sm border-collapse">
                                <thead>
                                  <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left px-3 py-2.5 font-semibold text-gray-900">Model</th>
                                    <th className="text-left px-3 py-2.5 font-semibold text-gray-900">Kluczowe parametry</th>
                                    <th className="text-left px-3 py-2.5 font-semibold text-gray-900 whitespace-nowrap">Cena netto</th>
                                    <th className="text-left px-3 py-2.5 font-semibold text-gray-900">Zastosowanie</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                                      <td className="px-3 py-2.5 font-medium text-gray-900 align-top"><LinkedText text={row.model} /></td>
                                      <td className="px-3 py-2.5 text-gray-500 text-xs leading-relaxed align-top"><LinkedText text={row.specs} /></td>
                                      <td className="px-3 py-2.5 text-primary-600 font-semibold whitespace-nowrap align-top">{row.price || '—'}</td>
                                      <td className="px-3 py-2.5 text-gray-600 text-xs align-top">{row.desc || '—'}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <ul className="md:hidden space-y-3 mb-6">
                              {rows.map((row, i) => (
                                <li key={i} className="border border-gray-200 rounded-xl p-4">
                                  <p className="font-semibold text-gray-900 text-sm"><LinkedText text={row.model} /></p>
                                  {row.price && <p className="text-primary-600 font-semibold text-sm mt-0.5">{row.price}</p>}
                                  <p className="text-gray-500 text-xs leading-relaxed mt-2"><LinkedText text={row.specs} /></p>
                                  {row.desc && <p className="text-gray-600 text-xs mt-2">{row.desc}</p>}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {textLines.slice(1).map((block, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed text-sm max-w-3xl mb-3"><LinkedText text={block} /></p>
                        ))}
                      </>
                    )
                  })()}
                </section>

                <section id="jak-wybrac" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.buyingGuide.heading}</h2>
                  <div className="space-y-2">
                    {content.buyingGuide.items.map((item, i) => {
                      const dashIndex = item.indexOf(' — ')
                      const hasDash = dashIndex > 0
                      const tytul = hasDash ? item.substring(0, dashIndex) : `Kryterium ${i + 1}`
                      const tresc = hasDash ? item.substring(dashIndex + 3) : item
                      return (
                        <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                          <summary className="flex items-center gap-3 cursor-pointer px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors">
                            <Ikona nazwa={IKONY_KRYTERIOW[i]} rozmiar={28} />
                            <span className="font-medium text-gray-900 flex-1 pr-4">{tytul}</span>
                            <ChevronRightIcon size={18} className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90" />
                          </summary>
                          <div className="px-5 pb-4 pl-[4.25rem] text-gray-600 text-sm leading-relaxed max-w-3xl"><LinkedText text={tresc} /></div>
                        </details>
                      )
                    })}
                  </div>
                </section>

                <section id="zastosowania" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.sectionHeadings?.useCases || 'Scenariusze zastosowań'}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.useCases.map((uc, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                        <Ikona nazwa={uc.icon} rozmiar={44} />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1.5">{uc.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed"><LinkedText text={uc.description} /></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <ContactBlock
                  heading="Nie wiesz, który model wybrać?"
                  text={`Dobierzemy konfigurację do waszej aplikacji i magazynu — skaner, klawiaturę, baterię i akcesoria. Doradzamy po polsku, z Wrocławia, i sami serwisujemy to, co sprzedajemy.`}
                />

                <section id="o-marce" className="scroll-mt-24 definition-content">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.definition.heading}</h2>
                  <RichText text={content.definition.content} className="text-gray-600 leading-relaxed sm:text-justify space-y-3" />
                </section>

                {content.comparisons.length > 0 && (
                  <section id="porownanie" className="scroll-mt-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.sectionHeadings?.comparisons || 'Porównanie'}</h2>
                    <div className="space-y-4">
                      {content.comparisons.map((comp, i) => (
                        <div key={i} className="border border-gray-200 rounded-xl p-5">
                          <h3 className="font-semibold text-gray-900 mb-2">{comp.title}</h3>
                          {comp.verdict && (
                            <p className="text-gray-900 bg-primary-50 border border-primary-100 rounded-lg px-4 py-3 mb-3 leading-relaxed">
                              {comp.verdict}
                            </p>
                          )}
                          <RichText text={comp.content} className="text-gray-600 text-sm leading-relaxed space-y-2 max-w-3xl" />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section id="wyrozniki" className="scroll-mt-24 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{content.uniqueInsights.heading}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {content.uniqueInsights.items.map((item, i) => (
                      <div key={i} className="flex gap-4 bg-white/70 border border-amber-100 rounded-xl p-4">
                        <Ikona nazwa={item.icon} rozmiar={40} />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed"><LinkedText text={item.text} /></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {content.tcoComparisons && content.tcoComparisons.length > 0 && (
                  <Accordion id="tco" heading="Ile kosztuje flota przez 3 lata">
                    <div className="space-y-4">
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
                                            <td className="py-1.5 text-gray-900 text-xs font-medium text-right">{item.cost}</td>
                                          </tr>
                                        ))}
                                        <tr className="border-t border-gray-200">
                                          <td className="pt-2 font-semibold text-gray-900 text-sm">RAZEM</td>
                                          <td className="pt-2 font-bold text-primary-600 text-sm text-right">{v.total}</td>
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
                    </div>
                  </Accordion>
                )}

                {content.howToSteps && content.howToSteps.length > 0 && (
                  <Accordion id="wdrozenie" heading={content.sectionHeadings?.howToSteps || `Jak wdrożyć ${odmien(bc.name)}?`}>
                    <ol className="space-y-4">
                      {content.howToSteps.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">{i + 1}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{step.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed"><LinkedText text={step.text} /></p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </Accordion>
                )}

                <section id="dlaczego-takma" className="scroll-mt-24 bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{content.sectionHeadings?.expertAuthority || 'Dlaczego TAKMA?'}</h2>
                  <RichText text={content.expertAuthority} className="text-gray-600 leading-relaxed text-sm sm:text-justify space-y-2" />
                </section>

                <section id="faq" className="scroll-mt-24 faq-section">
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

            <ServiceBanner categoryId={bc.categoryId} manufacturerId={bc.manufacturerId} />

            <ContactBlock
              heading="Wybierasz sprzęt dla firmy?"
              text="Przygotujemy ofertę na całą flotę razem z akcesoriami i wsparciem. Zwykle odpowiadamy tego samego dnia."
            />

            {/* Cross-links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Zobacz również</h2>
              <div className={`grid grid-cols-1 gap-4 ${subcatsWithProducts.length > 0 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
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
                {siblingBrandCats.slice(0, 2).map(sbc => (
                  <Link key={sbc.id} href={`/${sbc.slug}`} className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-1">{sbc.name}</h3>
                    <p className="text-sm text-gray-500">Ta sama kategoria, inny producent &rarr;</p>
                  </Link>
                ))}
                <Link href="/kontakt" className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">Kontakt i doradztwo</h3>
                  <p className="text-sm text-gray-500">+48 607 819 688 — dobór modelu i wycena floty</p>
                </Link>
              </div>
            </div>
    </>
  )

  const filters = categoryFilters[bc.slug]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      {howToJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />}

      {/* Hero — wąski pas z grafiką; pełny lead siedzi pod nim, na białym */}
      {bc.heroImage ? (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#0A1018' }}>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45 sm:opacity-65 bg-no-repeat"
            style={{ backgroundImage: `url(${bc.heroImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden sm:block"
            style={{ background: 'linear-gradient(to right, #0A1018 0%, #0A1018 26%, rgba(10,16,24,0.92) 42%, rgba(10,16,24,0.6) 58%, rgba(10,16,24,0.25) 78%, rgba(10,16,24,0.15) 100%)' }}
            aria-hidden="true"
          />
          <div className="relative container-main py-6 lg:py-8">
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3 overflow-x-auto">
              <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Strona główna</Link>
              <ChevronRightIcon size={12} className="flex-shrink-0 text-gray-600" />
              <Link href={`/${category.slug}`} className="hover:text-white transition-colors whitespace-nowrap">{category.name}</Link>
              <ChevronRightIcon size={12} className="flex-shrink-0 text-gray-600" />
              <span className="text-gray-200 whitespace-nowrap">{bc.name}</span>
            </nav>

            <h1 className="text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-white">{bc.name}</h1>

            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-300">
              <li><span className="text-white font-semibold">{allProducts.length}</span> {productWord}</li>
              {najtansza && <li>ceny netto <span className="text-white font-semibold">od {zlote(najtansza)} zł</span></li>}
              {dostepneOdReki > 0 && <li><span className="text-white font-semibold">{dostepneOdReki} z {allProducts.length}</span> dostępnych od ręki</li>}
              {zKlawiatura > 0 && <li>klawiatura fizyczna w <span className="text-white font-semibold">{zKlawiatura}</span> modelach</li>}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <a
                href="#modele"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-colors"
              >
                Porównaj {allProducts.length} modeli
                <ChevronRightIcon size={15} />
              </a>
              <a
                href="tel:+48607819688"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/25 hover:border-white/50 text-white text-sm font-semibold transition-colors"
              >
                +48 607 819 688
              </a>
              {content?.updatedAt && (
                <span className="text-xs text-gray-400">
                  ceny sprawdzone {new Date(content.updatedAt).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              )}
            </div>
          </div>
        </section>
      ) : null}

      <div className="container-main py-8 lg:py-10">
        {bc.heroImage ? (
          <RichText text={bc.longDescription} className="text-gray-600 leading-relaxed space-y-3 mb-6" />
        ) : (
          <>
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
              <RichText text={bc.longDescription} className="text-gray-600 sm:text-justify leading-relaxed space-y-3" />
              <p className="text-gray-600 text-sm mt-3">
                {allProducts.length} {productWord}
                {najtansza && <> · ceny netto od {zlote(najtansza)} zł</>}
                {dostepneOdReki > 0 && <> · {dostepneOdReki} z {allProducts.length} dostępnych od ręki</>}
                {zKlawiatura > 0 && <> · klawiatura fizyczna w {zKlawiatura} modelach</>}
                {content?.updatedAt && (
                  <span className="text-gray-500"> · ceny sprawdzone {new Date(content.updatedAt).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                )}
              </p>
            </div>
          </>
        )}

        {/* Skróty do sekcji — strona jest długa, a część odpowiedzi leży nisko */}
        {content && (
          <nav aria-label="Sekcje strony" className="mb-8 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500">
            <a href="#modele" className="hover:text-primary-600 transition-colors">Porównanie modeli</a>
            <a href="#jak-wybrac" className="hover:text-primary-600 transition-colors">Jak wybrać</a>
            <a href="#zastosowania" className="hover:text-primary-600 transition-colors">Zastosowania</a>
            <a href="#porownanie" className="hover:text-primary-600 transition-colors">M3 a konkurencja</a>
            <a href="#faq" className="hover:text-primary-600 transition-colors">Pytania i odpowiedzi</a>
          </nav>
        )}

        {/* Układ z filtrami (konfiguracja w category-filters.ts): sidebar = checkboxy z licznikiem + nawigacja */}
        {filters ? (
          <FilterableProductGrid
            products={produktyDoSiatki}
            filters={filters}
            columns={3}
            filtersFirst
            showDualButtons
            listName={bc.slug}
            categoryNav={categories.map(cat => {
              const isParent = cat.id === bc.categoryId
              const brandChildren = brandCategories.filter(b => b.categoryId === cat.id).map(b => ({ id: b.id, slug: b.slug, name: b.name, productCount: 0, isCurrent: b.id === bc.id }))
              const subChildren = getSubcategoriesForCategory(cat.id).map(sub => ({ id: sub.id, slug: sub.slug, name: sub.name, productCount: sub.productCount, isCurrent: false }))
              return { id: cat.id, slug: cat.slug, name: cat.name, productCount: cat.productCount, isParent, children: isParent ? [...brandChildren, ...subChildren] : [] }
            })}
          >
            {richContent}
          </FilterableProductGrid>
        ) : (
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
            <ProductGrid products={produktyDoSiatki} variant="grid" columns={3} maxInitial={48} showDualButtons listName={bc.slug} />

            {richContent}
          </div>
        </div>
        )}
      </div>
    </>
  )
}
