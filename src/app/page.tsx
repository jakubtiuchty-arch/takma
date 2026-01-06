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
import { ProductGrid } from '@/components/product'
import { categories, getBestsellers, getNewProducts } from '@/data/products'

// Mapowanie ikon do kategorii
const categoryIcons: Record<string, React.ReactNode> = {
  printer: <PrinterIcon size={28} />,
  scan: <ScanIcon size={28} />,
  smartphone: <SmartphoneIcon size={28} />,
  radio: <RadioIcon size={28} />,
  tag: <TagIcon size={28} />,
  package: <PackageIcon size={28} />,
}

export default function HomePage() {
  const bestsellers = getBestsellers(4)
  const newProducts = getNewProducts(4)

  return (
    <>
      {/* Hero Section - kompaktowy */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary-600/5 to-transparent" />
        </div>

        <div className="container-main relative py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-600/20 border border-primary-500/30 rounded-full text-sm mb-5">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
              <span className="text-primary-300">Autoryzowany partner Zebra Technologies</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
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

            {/* Trust indicators - compact */}
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

      {/* Categories Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Kategorie produktów
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Znajdź urządzenia dopasowane do potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/katalog?kategoria=${category.slug}`}
                className="group bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {categoryIcons[category.icon] || <PackageIcon size={24} />}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Bestsellery
              </h2>
              <p className="text-gray-600">
                Najczęściej wybierane produkty
              </p>
            </div>
            <Link
              href="/katalog?sortuj=popularnosc"
              className="hidden md:inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Zobacz wszystkie
              <ArrowRightIcon size={18} />
            </Link>
          </div>

          <ProductGrid products={bestsellers} columns={4} />

          <div className="mt-6 text-center md:hidden">
            <Link href="/katalog?sortuj=popularnosc">
              <Button variant="secondary" rightIcon={<ArrowRightIcon size={18} />}>
                Zobacz wszystkie
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      {newProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container-main">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Nowości
                </h2>
                <p className="text-gray-600">
                  Najnowsze produkty w ofercie
                </p>
              </div>
              <Link
                href="/katalog?nowosc=tak"
                className="hidden md:inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Zobacz wszystkie
                <ArrowRightIcon size={18} />
              </Link>
            </div>

            <ProductGrid products={newProducts} columns={4} />
          </div>
        </section>
      )}

      {/* Why TAKMA Section */}
      <section className="py-12 lg:py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Dlaczego TAKMA?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Od 20 lat dostarczamy rozwiązania AutoID dla firm w całej Polsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                <UserGroupIcon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                20 lat doświadczenia
              </h3>
              <p className="text-gray-600 text-sm">
                Tysiące zrealizowanych projektów
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                <TruckIcon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Szybka dostawa
              </h3>
              <p className="text-gray-600 text-sm">
                Wysyłka w 24-48h w całej Polsce
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                <WrenchIcon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Autoryzowany serwis
              </h3>
              <p className="text-gray-600 text-sm">
                Serwis gwarancyjny i pogwarancyjny
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                <CheckIcon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Doradztwo techniczne
              </h3>
              <p className="text-gray-600 text-sm">
                Pomożemy dobrać rozwiązanie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Potrzebujesz pomocy w wyborze?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Skontaktuj się z nami, aby otrzymać profesjonalne doradztwo i indywidualną ofertę.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                Skontaktuj się
              </Button>
            </Link>
            <Link href="/katalog">
              <Button
                size="lg"
                variant="secondary"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Przeglądaj produkty
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
