import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { getSubcategoryBySlug, getCategoryById, getRibbonModelSubcategories } from '@/data/products'

const SLUG = 'tasmy-termotransferowe'

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)!
  return {
    title: sub.seoTitle,
    description: sub.seoDescription,
    openGraph: {
      title: sub.seoTitle,
      description: sub.seoDescription,
      url: `https://takma.com.pl/${sub.slug}`,
    },
    alternates: { canonical: `https://takma.com.pl/${sub.slug}` },
  }
}

interface ModelGroup {
  title: string
  description: string
  href: string
  models: { id: string; slug: string; name: string; description: string; productCount: number }[]
}

export default function Page() {
  const sub = getSubcategoryBySlug(SLUG)!
  const parentCategory = getCategoryById(sub.parentCategoryId)!
  const { wax, waxResin, resin } = getRibbonModelSubcategories()

  const groups: ModelGroup[] = [
    {
      title: 'Taśmy woskowe (WAX)',
      description: 'Ekonomiczne, do standardowych etykiet papierowych. Najniższy koszt per etykieta.',
      href: '/tasmy-wax',
      models: wax.map(s => ({ id: s.id, slug: s.slug, name: s.name, description: s.description, productCount: s.productCount })),
    },
    {
      title: 'Taśmy woskowo-żywiczne (WAX/RESIN)',
      description: 'Uniwersalne, odporność na chemikalia i ścieranie. Do papieru powlekanego i syntetyków matowych.',
      href: '/tasmy-wax-resin',
      models: waxResin.map(s => ({ id: s.id, slug: s.slug, name: s.name, description: s.description, productCount: s.productCount })),
    },
    {
      title: 'Taśmy żywiczne (RESIN)',
      description: 'Najtrwalsze, do etykiet syntetycznych (PP/PE/PET). Ekstremalna odporność chemiczna.',
      href: '/tasmy-resin',
      models: resin.map(s => ({ id: s.id, slug: s.slug, name: s.name, description: s.description, productCount: s.productCount })),
    },
  ]

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: parentCategory.name, item: `https://takma.com.pl/${parentCategory.slug}` },
      { '@type': 'ListItem', position: 3, name: sub.name, item: `https://takma.com.pl/${sub.slug}` },
    ],
  }

  const totalProducts = [...wax, ...waxResin, ...resin].reduce((sum, s) => sum + s.productCount, 0)

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
          <span className="text-gray-900 font-medium whitespace-nowrap">{sub.name}</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {sub.name}
          </h1>
          <p className="text-gray-600 sm:text-justify">
            {sub.longDescription}
          </p>
          <p className="text-gray-500 text-sm mt-3">
            {totalProducts} produktów w {wax.length + waxResin.length + resin.length} seriach
          </p>
        </div>

        <div className="space-y-10">
          {groups.map(group => (
            <section key={group.href}>
              <div className="flex items-baseline gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{group.title}</h2>
                <Link href={group.href} className="text-sm text-primary-600 hover:underline">
                  Zobacz wszystkie →
                </Link>
              </div>
              <p className="text-gray-600 text-sm mb-4">{group.description}</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.models.map(model => (
                  <Link
                    key={model.id}
                    href={`/${model.slug}`}
                    className="group block rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1 line-clamp-2">
                      {model.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{model.description}</p>
                    <span className="text-xs font-medium text-primary-600">
                      {model.productCount > 0 ? `${model.productCount} produktów` : 'Wkrótce'}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Cross-links do materiałów eksploatacyjnych */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Inne materiały eksploatacyjne</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/etykiety-termotransferowe-papierowe" className="text-sm text-primary-600 hover:underline">Etykiety TT papierowe →</Link>
            <Link href="/etykiety-termotransferowe-foliowe" className="text-sm text-primary-600 hover:underline">Etykiety TT foliowe →</Link>
            <Link href="/etykiety-termiczne" className="text-sm text-primary-600 hover:underline">Etykiety termiczne →</Link>
            <Link href="/opaski-identyfikacyjne" className="text-sm text-primary-600 hover:underline">Opaski identyfikacyjne →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
