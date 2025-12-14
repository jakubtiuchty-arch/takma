import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  products,
  getProductBySlug,
  getCategoryById,
  getManufacturerById,
} from '@/data/products'
import { ProductGallery } from '@/components/product'
import { Badge } from '@/components/ui'
import {
  ChevronRightIcon,
  DownloadIcon,
  CheckIcon,
} from '@/components/ui/Icons'
import AddToRFQButton from './AddToRFQButton'
import RelatedProducts from './RelatedProducts'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

// Generowanie metadanych
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produkt nie znaleziony',
    }
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: 'website',
    },
  }
}

// Generowanie statycznych ścieżek
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const category = getCategoryById(product.categoryId)
  const manufacturer = getManufacturerById(product.manufacturerId)

  const availabilityConfig = {
    available: { label: 'Dostępny', variant: 'success' as const, description: 'Produkt dostępny od ręki' },
    'on-order': { label: 'Na zamówienie', variant: 'warning' as const, description: 'Czas realizacji: 7-14 dni' },
    unavailable: { label: 'Niedostępny', variant: 'danger' as const, description: 'Produkt chwilowo niedostępny' },
  }

  const availability = availabilityConfig[product.availability]

  // Kompatybilne akcesoria
  const compatibleProducts = product.compatibleAccessories
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <>
      <div className="container-main py-6 lg:py-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            Strona główna
          </Link>
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <Link href="/katalog" className="hover:text-primary-600 transition-colors">
            Katalog
          </Link>
          {category && (
            <>
              <ChevronRightIcon size={16} className="flex-shrink-0" />
              <Link
                href={`/katalog?kategoria=${category.slug}`}
                className="hover:text-primary-600 transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRightIcon size={16} className="flex-shrink-0" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Product main section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product info */}
          <div>
            {/* Manufacturer */}
            {manufacturer && (
              <Link
                href={`/katalog?producent=${manufacturer.slug}`}
                className="text-sm text-primary-600 font-medium hover:text-primary-700 uppercase tracking-wide"
              >
                {manufacturer.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1 mb-4">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

            {/* Tags & availability */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant={availability.variant}>{availability.label}</Badge>
              {product.isNew && <Badge variant="primary">Nowość</Badge>}
              {product.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              {product.priceFrom ? (
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-gray-500">od</span>
                  <span className="text-3xl font-bold text-gray-900">
                    {product.priceFrom.toLocaleString('pl-PL')} zł
                  </span>
                  <span className="text-sm text-gray-500">netto</span>
                </div>
              ) : (
                <p className="text-lg text-gray-600 mb-2">Cena na zapytanie</p>
              )}
              <p className="text-sm text-gray-500">{availability.description}</p>
            </div>

            {/* CTA */}
            <AddToRFQButton product={product} />

            {/* Key specs */}
            {product.specifications.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="font-semibold text-gray-900 mb-4">Kluczowe parametry</h2>
                <dl className="grid grid-cols-2 gap-4">
                  {product.specifications.slice(0, 6).map((spec) => (
                    <div key={spec.name}>
                      <dt className="text-sm text-gray-500">{spec.name}</dt>
                      <dd className="font-medium text-gray-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* Tabs / Details */}
        <div className="mt-12 lg:mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 -mb-px overflow-x-auto">
              <a
                href="#opis"
                className="px-1 py-4 text-sm font-medium text-primary-600 border-b-2 border-primary-600 whitespace-nowrap"
              >
                Opis
              </a>
              <a
                href="#specyfikacja"
                className="px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Specyfikacja
              </a>
              <a
                href="#zastosowania"
                className="px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
              >
                Zastosowania
              </a>
              {product.downloads.length > 0 && (
                <a
                  href="#pliki"
                  className="px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                >
                  Do pobrania
                </a>
              )}
            </nav>
          </div>

          <div className="py-8 lg:py-12 space-y-12 lg:space-y-16">
            {/* Opis */}
            <section id="opis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Opis produktu</h2>
              <div className="prose prose-gray max-w-none">
                {product.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Specyfikacja */}
            {product.specifications.length > 0 && (
              <section id="specyfikacja">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Specyfikacja techniczna
                </h2>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-500 w-1/3">
                            {spec.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Zastosowania */}
            {product.applications.length > 0 && (
              <section id="zastosowania">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Zastosowania</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckIcon size={20} className="text-green-500 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Pliki do pobrania */}
            {product.downloads.length > 0 && (
              <section id="pliki">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pliki do pobrania</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.downloads.map((download, i) => (
                    <a
                      key={i}
                      href={download.url}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <DownloadIcon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{download.name}</p>
                        <p className="text-sm text-gray-500">
                          {download.type.toUpperCase()} • {download.size}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Kompatybilne akcesoria */}
            {compatibleProducts.length > 0 && (
              <RelatedProducts
                title="Kompatybilne akcesoria"
                products={compatibleProducts as typeof products}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden safe-bottom z-40">
        <div className="flex items-center gap-4">
          {product.priceFrom && (
            <div className="flex-shrink-0">
              <span className="text-xs text-gray-500">od</span>
              <span className="text-xl font-bold text-gray-900 ml-1">
                {product.priceFrom.toLocaleString('pl-PL')} zł
              </span>
            </div>
          )}
          <div className="flex-1">
            <AddToRFQButton product={product} compact />
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 lg:hidden" />
    </>
  )
}
