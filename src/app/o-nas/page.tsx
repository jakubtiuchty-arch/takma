import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui'
import {
  ChevronRightIcon,
  CheckIcon,
  TruckIcon,
  WrenchIcon,
  UserGroupIcon,
  StarIcon,
  BuildingOfficeIcon,
} from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'O nas',
  description:
    'TAKMA - 20 lat doświadczenia na rynku AutoID. Poznaj naszą historię, wartości i dlaczego warto nam zaufać.',
}

const stats = [
  { value: '20+', label: 'lat doświadczenia' },
  { value: '5000+', label: 'zrealizowanych projektów' },
  { value: '2000+', label: 'zadowolonych klientów' },
  { value: '100%', label: 'zaangażowania' },
]

const values = [
  {
    icon: <UserGroupIcon size={28} />,
    title: 'Partnerskie podejście',
    description:
      'Budujemy długotrwałe relacje z klientami, oparte na zaufaniu i wzajemnym szacunku.',
  },
  {
    icon: <StarIcon size={28} />,
    title: 'Jakość i niezawodność',
    description:
      'Oferujemy tylko sprawdzone rozwiązania od renomowanych producentów.',
  },
  {
    icon: <WrenchIcon size={28} />,
    title: 'Profesjonalne wsparcie',
    description:
      'Zapewniamy kompleksową obsługę – od doradztwa, przez wdrożenie, po serwis.',
  },
  {
    icon: <TruckIcon size={28} />,
    title: 'Szybka realizacja',
    description:
      'Sprawna logistyka i dostępność magazynowa gwarantują terminowe dostawy.',
  },
]

const milestones = [
  { year: '2004', event: 'Założenie firmy TAKMA w Krakowie' },
  { year: '2008', event: 'Uzyskanie statusu autoryzowanego dystrybutora Zebra Technologies' },
  { year: '2012', event: 'Rozszerzenie oferty o rozwiązania RFID' },
  { year: '2016', event: 'Otwarcie autoryzowanego centrum serwisowego' },
  { year: '2020', event: 'Realizacja 5000. projektu dla klientów B2B' },
  { year: '2024', event: '20-lecie działalności i uruchomienie nowej platformy' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="container-main">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <ChevronRightIcon size={16} />
            <span className="text-white">O nas</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              20 lat doświadczenia w rozwiązaniach AutoID
            </h1>
            <p className="text-xl text-primary-100">
              Jesteśmy jednym z wiodących dostawców urządzeń do automatycznej identyfikacji
              w Polsce. Od 2004 roku pomagamy firmom optymalizować procesy za pomocą
              nowoczesnych technologii.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kim jesteśmy?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-900">TAKMA</strong> to polska firma z siedzibą
                  w Krakowie, specjalizująca się w dostawie kompleksowych rozwiązań z zakresu
                  automatycznej identyfikacji (AutoID).
                </p>
                <p>
                  Nasza oferta obejmuje drukarki etykiet, skanery kodów kreskowych, terminale
                  mobilne, systemy RFID oraz materiały eksploatacyjne od najlepszych światowych
                  producentów: Zebra Technologies, Honeywell, Datalogic, TSC i wielu innych.
                </p>
                <p>
                  Działamy na terenie całej Polski, obsługując firmy z różnych branż – od handlu
                  detalicznego, przez logistykę i produkcję, po służbę zdrowia i administrację.
                </p>
                <p>
                  Naszą misją jest dostarczanie niezawodnych rozwiązań, które pomagają naszym
                  klientom zwiększać efektywność operacyjną i redukować koszty.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <BuildingOfficeIcon size={64} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400">Zdjęcie siedziby</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasze wartości
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Przez 20 lat działalności wypracowaliśmy zasady, które wyróżniają nas na rynku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasza historia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kluczowe momenty w rozwoju firmy TAKMA
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 lg:left-1/2 lg:-translate-x-1/2" />

              {/* Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {milestone.year}
                    </div>
                    <div
                      className={`flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      <p className="text-gray-900">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Co oferujemy?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <CheckIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sprzedaż urządzeń
              </h3>
              <p className="text-gray-600">
                Szeroki wybór drukarek etykiet, skanerów, terminali mobilnych i akcesoriów
                od wiodących producentów.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <WrenchIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Serwis i naprawa
              </h3>
              <p className="text-gray-600">
                Autoryzowany serwis gwarancyjny i pogwarancyjny. Szybkie naprawy i części
                zamienne.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <UserGroupIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Doradztwo techniczne
              </h3>
              <p className="text-gray-600">
                Pomożemy dobrać optymalne rozwiązanie dopasowane do specyfiki Twojej firmy
                i budżetu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Chcesz dowiedzieć się więcej?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania i przygotujemy
            indywidualną ofertę.
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
