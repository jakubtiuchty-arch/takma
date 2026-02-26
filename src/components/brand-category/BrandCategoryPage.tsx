import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  getBrandCategoryBySlug,
  getProductsByBrandCategory,
  getCategoryById,
  getManufacturerById,
  getSubcategoriesForCategory,
} from '@/data/products'

interface BrandCategoryPageProps {
  slug: string
}

export default function BrandCategoryPage({ slug }: BrandCategoryPageProps) {
  const bc = getBrandCategoryBySlug(slug)!
  const category = getCategoryById(bc.categoryId)!
  const manufacturer = getManufacturerById(bc.manufacturerId)!
  const allProducts = getProductsByBrandCategory(bc)
  const subcategories = getSubcategoriesForCategory(bc.categoryId)

  // Filter subcategory products by this manufacturer
  const subcatsWithProducts = subcategories
    .map(sub => ({
      ...sub,
      filteredCount: allProducts.filter(p => p.subcategoryIds?.includes(sub.id)).length,
    }))
    .filter(s => s.filteredCount > 0)

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
    provider: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://www.takma.com.pl',
    },
    brand: {
      '@type': 'Brand',
      name: manufacturer.name,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/produkt/${p.slug}`,
      })),
    },
  }

  const faqJsonLd = bc.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: bc.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null

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

      <div className="container-main py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-primary-600 transition-colors whitespace-nowrap">
            Strona główna
          </Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <Link href={`/${category.slug}`} className="hover:text-primary-600 transition-colors whitespace-nowrap">
            {category.name}
          </Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium whitespace-nowrap">{bc.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            {manufacturer.logo && (
              <Image
                src={manufacturer.logo}
                alt={`Logo ${manufacturer.name}`}
                width={48}
                height={48}
                className="h-10 w-auto"
              />
            )}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {bc.name}
            </h1>
          </div>
          <p className="text-gray-600 sm:text-justify leading-relaxed">
            {bc.longDescription}
          </p>
          <p className="text-gray-500 text-sm mt-3">
            {allProducts.length} {productWord}
          </p>
        </div>

        {/* Subcategory nav chips */}
        {subcatsWithProducts.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {subcatsWithProducts.map(sub => (
              <Link
                key={sub.id}
                href={`/${sub.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-700 rounded-full text-sm text-gray-700 transition-colors"
              >
                {sub.name}
                <span className="text-gray-400 text-xs">({sub.filteredCount})</span>
              </Link>
            ))}
          </div>
        )}

        {/* Product grid */}
        <ProductGrid products={allProducts} variant="grid" columns={3} />

        {/* Rich SEO content */}
        <div className="mt-12 space-y-10">
          {/* FAQ */}
          {bc.faq.length > 0 && (
            <section className="faq-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Najczęściej zadawane pytania</h2>
              <div className="space-y-4">
                {bc.faq.map((f, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-white hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900 pr-4">{f.question}</span>
                      <ChevronRightIcon
                        size={18}
                        className="text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-90"
                      />
                    </summary>
                    <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm sm:text-justify">
                      {f.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Dlaczego TAKMA */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Dlaczego kupować {manufacturer.name} w TAKMA?</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-justify">
              TAKMA to autoryzowany partner {manufacturer.name} w Polsce z ponad 25-letnim doświadczeniem w branży AutoID.
              Oferujemy: profesjonalne doradztwo w doborze urządzeń, konfigurację i wdrożenie, integrację z systemami WMS/ERP,
              kontrakty serwisowe oraz autoryzowany serwis gwarancyjny i pogwarancyjny (<a href="https://www.serwis-zebry.pl" target="_blank" rel="noopener" className="text-primary-600 hover:underline">serwis-zebry.pl</a>).
              Wszystkie ceny netto, dostawa w 24h na terenie całej Polski.
            </p>
          </section>

          {/* Cross-links to generic category + subcategories */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Zobacz również</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href={`/${category.slug}`}
                className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">Wszystkie marki — {category.productCount} produktów</p>
              </Link>
              {subcatsWithProducts.slice(0, 5).map(sub => (
                <Link
                  key={sub.id}
                  href={`/${sub.slug}`}
                  className="block p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">{sub.name}</h3>
                  <p className="text-sm text-gray-500">{sub.filteredCount} {manufacturer.name} &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
