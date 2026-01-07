import Link from 'next/link'
import { Button } from '@/components/ui'
import {
  ArrowRightIcon,
  PrinterIcon,
  ScanIcon,
  SmartphoneIcon,
  RadioIcon,
  TagIcon,
  PackageIcon,
  CheckIcon,
  TruckIcon,
  WrenchIcon,
  UserGroupIcon,
} from '@/components/ui/Icons'
import { ProductCard } from '@/components/product'
import { categories, getBestsellers, products } from '@/data/products'

// Mapowanie ikon do kategorii
const categoryIcons: Record<string, React.ReactNode> = {
  printer: <PrinterIcon size={24} />,
  scan: <ScanIcon size={24} />,
  smartphone: <SmartphoneIcon size={24} />,
  radio: <RadioIcon size={24} />,
  tag: <TagIcon size={24} />,
  package: <PackageIcon size={24} />,
}

// Wyróżniony produkt - ZT411 jako flagowiec
const featuredProduct = products.find(p => p.slug === 'zebra-zt411') || products[0]

export default function HomePage() {
  const bestsellers = getBestsellers(6).filter(p => p.id !== featuredProduct.id).slice(0, 4)

  return (
    <>
      {/* Hero Section - kompaktowy */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/10 to-transparent" />
        </div>

        <div className="container-main relative py-8 lg:py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-600/20 border border-primary-500/30 rounded-full text-sm mb-5">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
              <span className="text-primary-300">Autoryzowany partner Zebra Technologies</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Urządzenia <span className="text-primary-400">AutoID</span> dla Twojego biznesu
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl">
              Drukarki etykiet, skanery kodów kreskowych, terminale mobilne i systemy RFID.
              20 lat doświadczenia, profesjonalny serwis, doradztwo techniczne.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/katalog">
                <Button
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                  rightIcon={<ArrowRightIcon size={18} />}
                >
                  Przeglądaj katalog
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  Kontakt
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center gap-2">
                <CheckIcon size={16} className="text-primary-400" />
                <span className="text-sm text-gray-400">Serwis gwarancyjny</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={16} className="text-primary-400" />
                <span className="text-sm text-gray-400">Szybka dostawa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={16} className="text-primary-400" />
                <span className="text-sm text-gray-400">Doradztwo techniczne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - compact */}
      <section className="py-6 lg:py-8 border-b border-gray-100">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/katalog?kategoria=${category.slug}`}
                className="group flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-primary-50 rounded-full transition-colors"
              >
                <span className="text-gray-400 group-hover:text-primary-600 transition-colors">
                  {categoryIcons[category.icon] || <PackageIcon size={20} />}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-primary-600 transition-colors text-sm">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product + Bestsellers */}
      <section className="py-8 lg:py-10">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Product - Large */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 lg:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  POLECAMY
                </span>
                {featuredProduct.isNew && (
                  <span className="px-2.5 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                    NOWOŚĆ
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                {/* Product image */}
                <div className="w-full sm:w-40 lg:w-48 flex-shrink-0">
                  <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                    <PrinterIcon size={80} className="text-gray-300" />
                  </div>
                </div>

                {/* Product info */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {featuredProduct.name}
                  </h2>

                  <p className="text-gray-600 text-sm mb-3">
                    {featuredProduct.shortDescription}
                  </p>

                  {/* Key specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {featuredProduct.specifications.slice(0, 4).map((spec, i) => (
                      <div key={i} className="bg-white rounded p-2">
                        <div className="text-xs text-gray-500">{spec.name}</div>
                        <div className="text-sm font-semibold text-gray-900">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {featuredProduct.priceFrom && (
                      <div className="mb-3">
                        <span className="text-sm text-gray-500">od </span>
                        <span className="text-xl font-bold text-gray-900">
                          {featuredProduct.priceFrom.toLocaleString('pl-PL')} zł
                        </span>
                        <span className="text-sm text-gray-500"> netto</span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Link href={`/produkt/${featuredProduct.slug}`} className="flex-1">
                        <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                          Zobacz szczegóły
                        </Button>
                      </Link>
                      <Link href={`/zapytanie?produkt=${featuredProduct.id}`}>
                        <Button size="sm" variant="secondary" className="border-gray-300">
                          Zapytaj
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bestsellers - Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Bestsellery
                </h2>
                <Link
                  href="/katalog?sortuj=popularnosc"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                >
                  Wszystkie
                  <ArrowRightIcon size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {bestsellers.map((product) => (
                  <ProductCard key={product.id} product={product} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 1 - Serwis Zebry */}
      <section className="py-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-main">
          <a
            href="https://serwis-zebry.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-white group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <WrenchIcon size={28} />
              </div>
              <div>
                <div className="text-xl font-bold">Serwis-Zebry.pl</div>
                <div className="text-primary-100">
                  Profesjonalna naprawa i serwis urządzeń Zebra
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 font-semibold rounded-lg group-hover:bg-primary-50 transition-colors">
              Sprawdź ofertę serwisu
              <ArrowRightIcon size={18} />
            </div>
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-5 bg-gray-900">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">35+</div>
              <div className="text-gray-400 text-sm">produktów Zebra</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">20</div>
              <div className="text-gray-400 text-sm">lat na rynku</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">autoryzowany serwis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">48h</div>
              <div className="text-gray-400 text-sm">szybka wysyłka</div>
            </div>
          </div>
        </div>
      </section>

      {/* More Products by Category */}
      <section className="py-8 lg:py-10 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              Przeglądaj według kategorii
            </h2>
            <p className="text-gray-600">
              Znajdź urządzenie idealne do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                href={`/katalog?kategoria=${category.slug}`}
                className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex-shrink-0">
                    {categoryIcons[category.icon] || <PackageIcon size={24} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  <ArrowRightIcon size={20} className="text-gray-300 group-hover:text-primary-600 transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TAKMA - Compact */}
      <section className="py-8 lg:py-10">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                <UserGroupIcon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">20 lat doświadczenia</h3>
              <p className="text-gray-500 text-sm">Tysiące projektów</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                <TruckIcon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Szybka dostawa</h3>
              <p className="text-gray-500 text-sm">Wysyłka 24-48h</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                <WrenchIcon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Autoryzowany serwis</h3>
              <p className="text-gray-500 text-sm">Gwarancja i naprawa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                <CheckIcon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Doradztwo</h3>
              <p className="text-gray-500 text-sm">Pomoc w wyborze</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 2 - Serwis Zebry (dark variant) */}
      <section className="py-5 bg-gray-800">
        <div className="container-main">
          <a
            href="https://serwis-zebry.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center justify-between gap-6 group"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <WrenchIcon size={24} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">
                  Twoja drukarka Zebra wymaga naprawy?
                </div>
                <div className="text-gray-400">
                  Autoryzowany serwis z 20-letnim doświadczeniem. Naprawy gwarancyjne i pogwarancyjne.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg group-hover:bg-primary-500 transition-colors flex-shrink-0">
              Serwis-Zebry.pl
              <ArrowRightIcon size={16} />
            </div>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-10 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-2">
            Potrzebujesz pomocy w wyborze?
          </h2>
          <p className="text-gray-400 text-sm mb-4 max-w-xl mx-auto">
            Skontaktuj się z nami - doradzimy i przygotujemy indywidualną ofertę.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
                Skontaktuj się
              </Button>
            </Link>
            <Link href="/katalog">
              <Button size="lg" variant="secondary" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Przeglądaj produkty
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
