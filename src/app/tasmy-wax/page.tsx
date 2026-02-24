import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { getRibbonModelSubcategories, getCategoryById, getSubcategoryById } from '@/data/products'

export const metadata: Metadata = {
  title: 'Taśmy woskowe (WAX) Zebra | 2100, 2300, 1600, 5319',
  description: 'Taśmy woskowe (WAX) Zebra do etykiet papierowych — serie 2300 Standard, 2100 High Performance, 1600 Economy, 5319 Performance. Desktop i industrial. Ceny netto, dobór do drukarki.',
  openGraph: {
    title: 'Taśmy woskowe (WAX) Zebra | 2100, 2300, 1600, 5319',
    description: 'Taśmy woskowe (WAX) Zebra do etykiet papierowych — serie 2300 Standard, 2100 High Performance, 1600 Economy, 5319 Performance.',
    url: 'https://takma.com.pl/tasmy-wax',
  },
  alternates: { canonical: 'https://takma.com.pl/tasmy-wax' },
}

export default function TasmyWaxPage() {
  const { wax } = getRibbonModelSubcategories()
  const parentCategory = getCategoryById('materialy-eksploatacyjne')!
  const parentSub = getSubcategoryById('tasmy-termotransferowe')!

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: parentCategory.name, item: `https://takma.com.pl/${parentCategory.slug}` },
      { '@type': 'ListItem', position: 3, name: parentSub.name, item: `https://takma.com.pl/${parentSub.slug}` },
      { '@type': 'ListItem', position: 4, name: 'Taśmy woskowe (WAX)', item: 'https://takma.com.pl/tasmy-wax' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="container-main py-8 lg:py-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto">
          <Link href="/" className="hover:text-primary-600 transition-colors whitespace-nowrap">Strona główna</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <Link href={`/${parentCategory.slug}`} className="hover:text-primary-600 transition-colors whitespace-nowrap">{parentCategory.name}</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <Link href={`/${parentSub.slug}`} className="hover:text-primary-600 transition-colors whitespace-nowrap">{parentSub.name}</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium whitespace-nowrap">Taśmy woskowe (WAX)</span>
        </nav>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Taśmy woskowe (WAX) Zebra
        </h1>
        <p className="text-gray-600 mb-8 max-w-3xl sm:text-justify">
          Taśmy woskowe (Wax) to najpopularniejszy i najtańszy typ taśm barwiących — przeznaczone do druku na standardowych etykietach papierowych. Idealne do etykiet wysyłkowych, adresowych, magazynowych i logistycznych. Zebra oferuje 4 serie woskowe dostosowane do różnych wymagań prędkości, trwałości i budżetu.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {wax.map(sub => (
            <Link
              key={sub.id}
              href={`/${sub.slug}`}
              className="group block rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                {sub.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{sub.description}</p>
              <span className="text-sm font-medium text-primary-600">
                {sub.productCount > 0 ? `${sub.productCount} produktów →` : 'Wkrótce w ofercie →'}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex gap-4 text-sm">
          <Link href="/tasmy-wax-resin" className="text-primary-600 hover:underline">Taśmy woskowo-żywiczne (WAX/RESIN) →</Link>
          <Link href="/tasmy-resin" className="text-primary-600 hover:underline">Taśmy żywiczne (RESIN) →</Link>
        </div>
      </div>
    </>
  )
}
