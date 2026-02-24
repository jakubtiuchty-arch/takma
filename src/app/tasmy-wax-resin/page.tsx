import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { getRibbonModelSubcategories, getCategoryById, getSubcategoryById } from '@/data/products'

export const metadata: Metadata = {
  title: 'Taśmy woskowo-żywiczne (WAX/RESIN) Zebra | 3200, 3300, 3400, 5555',
  description: 'Taśmy woskowo-żywiczne (WAX/RESIN) Zebra — serie 3200 Premium, 3300 Standard, 3400 High Performance, 5555 Enhanced. Odporność na chemikalia, certyfikat UL. Ceny netto.',
  openGraph: {
    title: 'Taśmy woskowo-żywiczne (WAX/RESIN) Zebra | 3200, 3300, 3400, 5555',
    description: 'Taśmy woskowo-żywiczne (WAX/RESIN) Zebra — serie 3200, 3300, 3400, 5555. Odporność na chemikalia i ścieranie.',
    url: 'https://takma.com.pl/tasmy-wax-resin',
  },
  alternates: { canonical: 'https://takma.com.pl/tasmy-wax-resin' },
}

export default function TasmyWaxResinPage() {
  const { waxResin } = getRibbonModelSubcategories()
  const parentCategory = getCategoryById('materialy-eksploatacyjne')!
  const parentSub = getSubcategoryById('tasmy-termotransferowe')!

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: parentCategory.name, item: `https://takma.com.pl/${parentCategory.slug}` },
      { '@type': 'ListItem', position: 3, name: parentSub.name, item: `https://takma.com.pl/${parentSub.slug}` },
      { '@type': 'ListItem', position: 4, name: 'Taśmy woskowo-żywiczne (WAX/RESIN)', item: 'https://takma.com.pl/tasmy-wax-resin' },
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
          <span className="text-gray-900 font-medium whitespace-nowrap">Taśmy woskowo-żywiczne (WAX/RESIN)</span>
        </nav>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Taśmy woskowo-żywiczne (WAX/RESIN) Zebra
        </h1>
        <p className="text-gray-600 mb-8 max-w-3xl sm:text-justify">
          Taśmy woskowo-żywiczne (Wax/Resin) łączą zalety obu technologii — lepszą odporność na ścieranie, chemikalia i wilgoć niż taśmy woskowe, przy zachowaniu dobrej jakości druku na papierze powlekanym i syntetykach matowych. Standardowe rozwiązanie do etykiet GHS, laboratoryjnych i produktowych narażonych na kontakt z substancjami chemicznymi.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {waxResin.map(sub => (
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
          <Link href="/tasmy-wax" className="text-primary-600 hover:underline">Taśmy woskowe (WAX) →</Link>
          <Link href="/tasmy-resin" className="text-primary-600 hover:underline">Taśmy żywiczne (RESIN) →</Link>
        </div>
      </div>
    </>
  )
}
