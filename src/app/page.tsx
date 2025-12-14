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
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-main relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              20 lat na rynku AutoID
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Profesjonalne rozwiązania{' '}
              <span className="text-primary-200">AutoID</span> dla Twojej firmy
            </h1>

            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
              Drukarki etykiet, skanery kodów kreskowych, terminale mobilne i systemy RFID.
              Dostarczamy sprawdzone rozwiązania od najlepszych producentów.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/katalog">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50"
                  rightIcon={<ArrowRightIcon size={20} />}
                >
                  Przeglądaj katalog
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white border-2 border-white/30 hover:bg-white/10"
                >
                  Skontaktuj się z nami
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} className="text-green-400" />
                <span className="text-sm text-primary-100">Autoryzowany dystrybutor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} className="text-green-400" />
                <span className="text-sm text-primary-100">Serwis gwarancyjny</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} className="text-green-400" />
                <span className="text-sm text-primary-100">Doradztwo techniczne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kategorie produktów
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Znajdź urządzenia dopasowane do potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/katalog?kategoria=${category.slug}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {categoryIcons[category.icon] || <PackageIcon size={28} />}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.productCount} produktów
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Bestsellery
              </h2>
              <p className="text-lg text-gray-600">
                Najczęściej wybierane produkty przez naszych klientów
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

          <div className="mt-8 text-center md:hidden">
            <Link href="/katalog?sortuj=popularnosc">
              <Button variant="secondary" rightIcon={<ArrowRightIcon size={18} />}>
                Zobacz wszystkie bestsellery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      {newProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-main">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Nowości w ofercie
                </h2>
                <p className="text-lg text-gray-600">
                  Najnowsze produkty w naszym katalogu
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
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dlaczego TAKMA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Od 20 lat dostarczamy rozwiązania AutoID dla firm w całej Polsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                <UserGroupIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                20 lat doświadczenia
              </h3>
              <p className="text-gray-600">
                Tysiące zrealizowanych projektów i zadowolonych klientów
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                <TruckIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dostawa w całej Polsce
              </h3>
              <p className="text-gray-600">
                Szybka wysyłka i profesjonalna obsługa logistyczna
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                <WrenchIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Serwis i wsparcie
              </h3>
              <p className="text-gray-600">
                Autoryzowany serwis gwarancyjny i pogwarancyjny
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                <CheckIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Doradztwo techniczne
              </h3>
              <p className="text-gray-600">
                Pomożemy dobrać optymalne rozwiązanie dla Twojego biznesu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Potrzebujesz pomocy w wyborze urządzeń?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Nasi eksperci pomogą dobrać optymalne rozwiązanie dopasowane do potrzeb Twojej firmy.
            Skontaktuj się z nami, aby otrzymać indywidualną ofertę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50"
              >
                Skontaktuj się z nami
              </Button>
            </Link>
            <Link href="/katalog">
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-2 border-white/30 hover:bg-white/10"
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
