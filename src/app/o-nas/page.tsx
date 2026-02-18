import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import {
  ChevronRightIcon,
  CheckIcon,
  WrenchIcon,
  UserGroupIcon,
  StarIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  MailIcon,
  TruckIcon,
  UserIcon,
} from '@/components/ui/Icons'
import AnimatedCounter from '@/components/about/AnimatedCounter'

export const metadata: Metadata = {
  title: 'O nas — TAKMA | 25 lat doświadczenia w AutoID',
  description:
    'TAKMA Tadeusz Tiuchty — od 2001 dostarczamy drukarki etykiet, skanery i terminale mobilne. Autoryzowany partner Zebra. Wrocław.',
  alternates: {
    canonical: '/o-nas',
  },
}

const milestones = [
  { year: '2001', event: 'Tadeusz Tiuchty zakłada firmę TAKMA we Wrocławiu — pierwsze dostawy drukarek kodów kreskowych dla leśnictwa' },
  { year: '2005', event: 'Uzyskanie statusu autoryzowanego partnera Zebra Technologies' },
  { year: '2008', event: 'Rozszerzenie oferty o terminale mobilne i skanery kodów kreskowych' },
  { year: '2012', event: 'Otwarcie autoryzowanego serwisu Zebra — pierwsze naprawy drukarek przemysłowych' },
  { year: '2016', event: 'Złoty Medal MTP LAS-EXPO za wdrożenie Zebra ZQ520 w leśnictwie' },
  { year: '2020', event: 'Wyróżnienie Genius of Business od Zebra Technologies za wyniki sprzedażowe' },
  { year: '2025', event: '25-lecie firmy, uruchomienie nowej platformy e-commerce takma.com.pl' },
]

const faqItems = [
  {
    q: 'Czym zajmuje się firma TAKMA?',
    a: 'TAKMA specjalizuje się w dostawie urządzeń do automatycznej identyfikacji (AutoID) — drukarek etykiet, skanerów kodów kreskowych, terminali mobilnych i materiałów eksploatacyjnych. Obsługujemy klientów B2B z branż logistycznej, handlowej, produkcyjnej i leśnej. Jesteśmy autoryzowanym partnerem Zebra Technologies od 2005 roku.',
  },
  {
    q: 'Gdzie znajduje się siedziba TAKMA?',
    a: 'Siedziba firmy TAKMA mieści się przy ul. Poświęckiej 1a, 51-128 Wrocław. Obsługujemy klientów na terenie całej Polski — zarówno stacjonarnie, jak i zdalnie.',
  },
  {
    q: 'Jakie marki oferuje TAKMA?',
    a: 'Współpracujemy z wiodącymi producentami urządzeń AutoID: Zebra Technologies (Premier Solution Partner), Honeywell, Datalogic, TSC, Citizen, Godex, SATO, Newland i M3 Mobile. Dobieramy sprzęt pod konkretne potrzeby klienta, niezależnie od marki.',
  },
  {
    q: 'Czy TAKMA oferuje serwis gwarancyjny i pogwarancyjny?',
    a: 'Tak. Prowadzimy autoryzowany serwis Zebra (Zebra Printer Repair Specialist) dostępny na stronie serwis-zebry.pl. Wykonujemy naprawy gwarancyjne i pogwarancyjne drukarek etykiet, terminali mobilnych i skanerów. Oferujemy również kontrakty serwisowe Zebra OneCare.',
  },
  {
    q: 'Czy TAKMA realizuje zamówienia publiczne i przetargi?',
    a: 'Tak. Mamy wieloletnie doświadczenie w realizacji zamówień publicznych dla instytucji takich jak RDLP Łódź, RDLP Wrocław i RDLP Zielona Góra. Znamy procedury PZP i przygotowujemy kompletną dokumentację przetargową.',
  },
  {
    q: 'Ile lat doświadczenia ma firma TAKMA?',
    a: 'TAKMA działa od 1 sierpnia 2001 roku — to ponad 24 lata doświadczenia na rynku AutoID. Założyciel Tadeusz Tiuchty zbudował firmę od podstaw, łącząc wiedzę z zakresu technologii identyfikacji automatycznej z głębokim zrozumieniem potrzeb klientów B2B.',
  },
  {
    q: 'Jakie branże obsługuje TAKMA?',
    a: 'Obsługujemy firmy z branż: logistyka i magazynowanie, handel detaliczny i hurtowy, produkcja przemysłowa, leśnictwo i ochrona środowiska, opieka zdrowotna oraz administracja publiczna. Dla każdej branży dobieramy dedykowane rozwiązania AutoID.',
  },
  {
    q: 'Jak skontaktować się z TAKMA?',
    a: 'Najszybciej pod numerem telefonu +48 71 781 71 28 lub mailowo na adres takma@takma.com.pl. Formularz kontaktowy dostępny jest na stronie takma.com.pl/kontakt. Odpowiadamy w ciągu 24 godzin w dni robocze.',
  },
]

const partners = [
  { name: 'Zebra Technologies', status: 'Premier Solution Partner', logo: '/images/partners/logo_zebra.png' },
  { name: 'Honeywell', status: 'Autoryzowany partner', logo: '/images/partners/logo_honeywell.png' },
  { name: 'Datalogic', status: 'Autoryzowany partner', logo: '/images/partners/logo_datalogic.png' },
  { name: 'TSC', status: 'Autoryzowany partner', logo: '/images/partners/logo_tsc.png' },
  { name: 'Citizen', status: 'Autoryzowany partner', logo: '/images/partners/logo_citizen.png' },
  { name: 'Godex', status: 'Autoryzowany partner', logo: '/images/partners/logo-godex.png' },
  { name: 'SATO', status: 'Autoryzowany partner', logo: '/images/partners/logo_sato.png' },
  { name: 'Newland', status: 'Autoryzowany partner', logo: '/images/partners/logo_newland.png' },
  { name: 'M3 Mobile', status: 'Autoryzowany partner', logo: '/images/partners/logo_m3mobile.png' },
]

const industries = [
  {
    icon: <TruckIcon size={28} />,
    name: 'Logistyka i magazynowanie',
    desc: 'Drukarki etykiet wysyłkowych, skanery i terminale do zarządzania magazynem',
  },
  {
    icon: <BuildingOfficeIcon size={28} />,
    name: 'Handel i retail',
    desc: 'Metkownice, drukarki cenówek, skanery kasowe i systemy inwentaryzacji',
  },
  {
    icon: <WrenchIcon size={28} />,
    name: 'Produkcja przemysłowa',
    desc: 'Drukarki przemysłowe, etykiety odporne na chemikalia, systemy śledzenia',
  },
  {
    icon: <StarIcon size={28} />,
    name: 'Leśnictwo i środowisko',
    desc: 'Mobilne drukarki etykiet i terminale terenowe dla Lasów Państwowych',
  },
]

export default function AboutPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://takma.com.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'O nas',
        item: 'https://takma.com.pl/o-nas',
      },
    ],
  }

  const jsonLdAbout = {
    '@context': 'https://schema.org',
    '@type': ['AboutPage', 'WebPage'],
    name: 'O nas — TAKMA',
    description: metadata.description,
    url: 'https://takma.com.pl/o-nas',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': 'https://takma.com.pl/#organization',
      name: 'TAKMA Tadeusz Tiuchty',
      alternateName: 'TAKMA',
      url: 'https://takma.com.pl',
      telephone: '+48717817128',
      email: 'takma@takma.com.pl',
      foundingDate: '2001-08-01',
      founder: {
        '@type': 'Person',
        name: 'Tadeusz Tiuchty',
        jobTitle: 'Założyciel i właściciel',
        description:
          'Absolwent Uniwersytetu Wrocławskiego (prawo) i Uniwersytetu Rolniczego w Krakowie (leśnictwo). Wieloletni sekretarz Stowarzyszenia Przedsiębiorców Leśnych, wykładowca UR Kraków (Wydział Leśny — informatyzacja i AutoID).',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Poświęcka 1a',
        addressLocality: 'Wrocław',
        postalCode: '51-128',
        addressCountry: 'PL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.1308,
        longitude: 17.0575,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Polska',
      },
      priceRange: '$$',
      image: 'https://takma.com.pl/og-image.png',
      award: [
        'Złoty Medal MTP LAS-EXPO 2016',
        'Genius of Business 2020 — Zebra Technologies',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Zebra Premier Solution Partner',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Zebra Public Sector Specialist',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Zebra Printer Repair Specialist',
        },
      ],
      sameAs: [
        'https://www.serwis-zebry.pl',
        'https://maps.google.com/?cid=TAKMA+Wroclaw',
      ],
    },
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* S1: Hero */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="container-main">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-primary-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Strona główna
            </Link>
            <ChevronRightIcon size={16} />
            <span className="text-white">O nas</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-primary-100 mb-6">
                Autoryzowany partner Zebra Technologies od 2001
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Od 2001 roku pomagamy firmom automatyzować procesy
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                TAKMA to rodzinna firma z Wrocławia, która od ponad 24 lat dostarcza drukarki
                etykiet, skanery kodów kreskowych i terminale mobilne dla biznesu. Łączymy
                doświadczenie z indywidualnym podejściem do każdego klienta.
              </p>
            </div>
            <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <UserGroupIcon size={64} className="text-white/30 mx-auto mb-4" />
                <p className="text-white/40 text-sm">Zdjęcie zespołu TAKMA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2: Statystyki z AnimatedCounter */}
      <section className="relative z-10 -mt-8 pb-8">
        <div className="container-main">
          <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {[
              { end: 25, suffix: '+', label: 'lat doświadczenia', sublabel: 'od 2001 roku' },
              { end: 5000, suffix: '+', label: 'zrealizowanych projektów', sublabel: 'dla firm B2B' },
              { end: 2000, suffix: '+', label: 'zadowolonych klientów', sublabel: 'w całej Polsce' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-gray-900 font-medium text-sm">{stat.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Założyciel — Tadeusz Tiuchty */}
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Placeholder zdjęcie */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl aspect-[3/4] flex items-center justify-center max-w-sm mx-auto lg:mx-0">
              <div className="text-center">
                <UserIcon size={64} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">Tadeusz Tiuchty</p>
                <p className="text-gray-300 text-xs">Założyciel TAKMA</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Tadeusz Tiuchty
              </h2>
              <p className="text-primary-600 font-medium mb-6">Założyciel i właściciel TAKMA</p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Absolwent <strong className="text-gray-900">Uniwersytetu Wrocławskiego</strong> (prawo)
                  i <strong className="text-gray-900">Uniwersytetu Rolniczego w Krakowie</strong> (leśnictwo).
                  Nietypowe połączenie wykształcenia, które okazało się kluczem do sukcesu — głębokie
                  zrozumienie branży leśnej i jednoczesna znajomość prawa zamówień publicznych.
                </p>
                <p>
                  W 2001 roku założył firmę TAKMA we Wrocławiu, początkowo dostarczając drukarki
                  kodów kreskowych dla nadleśnictw i zakładów usług leśnych. Z biegiem lat firma
                  rozrosła się, obsługując klientów z logistyki, handlu, produkcji i administracji.
                </p>
                <p>
                  Przez <strong className="text-gray-900">8 lat pełnił funkcję sekretarza
                  Stowarzyszenia Przedsiębiorców Leśnych</strong>, aktywnie wspierając rozwój
                  technologiczny polskiego leśnictwa. Obecnie jest{' '}
                  <strong className="text-gray-900">wykładowcą na Uniwersytecie Rolniczym
                  w Krakowie</strong> (Wydział Leśny), gdzie prowadzi zajęcia z informatyzacji
                  i automatycznej identyfikacji w leśnictwie.
                </p>
              </div>

              {/* Callout cards */}
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <div className="text-primary-700 font-semibold text-sm">Wykładowca</div>
                  <div className="text-primary-600 text-xs">UR Kraków, Wydział Leśny</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <div className="text-primary-700 font-semibold text-sm">Sekretarz SPL</div>
                  <div className="text-primary-600 text-xs">8 lat działalności</div>
                </div>
              </div>

              {/* Cytat */}
              <blockquote className="mt-8 border-l-4 border-primary-500 pl-6 py-2">
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;Każda firma ma inne potrzeby. Naszą rolą jest nie tylko dostarczyć sprzęt,
                  ale zrozumieć proces klienta i zaproponować rozwiązanie, które naprawdę działa.
                  Po 24 latach wiem, że najlepsza technologia to ta, o której użytkownik nie musi
                  myśleć — po prostu robi swoje.&quot;
                </p>
                <footer className="mt-2 text-sm text-gray-500">
                  — Tadeusz Tiuchty, założyciel TAKMA
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Dlaczego TAKMA? */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dlaczego TAKMA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              6 powodów, dla których firmy od lat wybierają nas jako dostawcę AutoID
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Karta 1: Doświadczenie */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <StarIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">25 lat doświadczenia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Działamy od 2001 roku. Przez ponad dwie dekady zrealizowaliśmy tysiące projektów
                dla firm z całej Polski — od małych drukarń po wielkie centra logistyczne.
              </p>
            </div>

            {/* Karta 2: Serwis */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <WrenchIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Autoryzowany serwis Zebra</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prowadzimy{' '}
                <a
                  href="https://www.serwis-zebry.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  serwis-zebry.pl
                </a>
                {' '}— autoryzowane centrum napraw Zebra. Naprawy gwarancyjne, pogwarancyjne
                i kontrakty serwisowe OneCare.
              </p>
            </div>

            {/* Karta 3: Przetargi */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <BuildingOfficeIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Przetargi publiczne</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wieloletnie doświadczenie w zamówieniach publicznych — realizacje dla Lasów
                Państwowych (RDLP Łódź, Wrocław, Zielona Góra). Znajomość procedur PZP.
              </p>
            </div>

            {/* Karta 4: Nagrody */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-4">
                <CheckIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nagrody i wyróżnienia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Złoty Medal MTP LAS-EXPO 2016</strong> za wdrożenie Zebra ZQ520
                w leśnictwie. <strong>Genius of Business 2020</strong> od Zebra Technologies
                za wybitne wyniki sprzedażowe.
              </p>
            </div>

            {/* Karta 5: Zespół */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <UserGroupIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certyfikowani specjaliści</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nasz zespół przeszedł szkolenia producentów i posiada certyfikaty Zebra,
                Honeywell i Datalogic. Doradzamy na podstawie wiedzy, nie katalogów.
              </p>
            </div>

            {/* Karta 6: Podejście */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <UserIcon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerskie podejście B2B</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nie jesteśmy sklepem — jesteśmy partnerem technologicznym. Pomagamy dobrać
                rozwiązanie, wdrożyć je i serwisować przez cały cykl życia urządzenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Oś czasu (Timeline) */}
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
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <div
                      className={`flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: Partnerzy i certyfikaty */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnerzy i certyfikaty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Współpracujemy z wiodącymi producentami urządzeń AutoID na świecie
            </p>
          </div>

          {/* Loga partnerów */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-all group"
              >
                <div className="h-12 flex items-center justify-center mb-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name} — partner TAKMA`}
                    width={120}
                    height={48}
                    className="object-contain max-h-12"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-xs">{partner.name}</h3>
                <p className="text-gray-500 text-[10px] mt-0.5">{partner.status}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center flex flex-col items-center justify-center">
              <div className="h-12 flex items-center justify-center mb-3">
                <span className="text-gray-300 text-2xl font-light">+</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs">i wielu innych</h3>
            </div>
          </div>

          {/* Certyfikaty Zebra — oficjalne loga */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              Nasze certyfikaty Zebra Technologies
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <Image
                  src="/images/certifications/zebra-premier-solution-partner.png"
                  alt="Zebra Premier Solution Partner — oficjalny certyfikat TAKMA"
                  width={220}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/certifications/zebra-public-sector-specialist.png"
                  alt="Zebra Premier Solution Partner — Public Sector Specialist — 1 z 4 firm w Polsce"
                  width={220}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/certifications/zebra-printer-repair-specialist.png"
                  alt="Zebra Premier Solution Partner — Printer Repair Specialist — autoryzowany serwis TAKMA"
                  width={220}
                  height={48}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* S7: Branże i klienci */}
      <section className="py-16 lg:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Branże, które obsługujemy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dostarczamy rozwiązania AutoID dopasowane do specyfiki każdej branży
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>

          {/* Loga klientów */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Zaufali nam między innymi:</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { src: '/images/clients/lasy_logo.png', alt: 'Lasy Państwowe — klient TAKMA' },
                { src: '/images/clients/orlen_logo.png', alt: 'Orlen — klient TAKMA' },
                { src: '/images/clients/poczta_polska_logo.png', alt: 'Poczta Polska — klient TAKMA' },
                { src: '/images/clients/żabka_logo.png', alt: 'Żabka — klient TAKMA' },
                { src: '/images/clients/cba_logo.png', alt: 'CBA — klient TAKMA' },
                { src: '/images/clients/wosjko_logo.png', alt: 'Wojsko Polskie — klient TAKMA' },
              ].map((client) => (
                <div
                  key={client.alt}
                  className="bg-white rounded-lg border border-gray-100 p-4 flex items-center justify-center aspect-[3/2]"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={160}
                    height={80}
                    className="object-contain max-h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S8: FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Odpowiedzi na pytania, które najczęściej słyszymy od klientów
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-gray-900 hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronRightIcon
                    size={20}
                    className="text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* S9: CTA kontaktowy */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Porozmawiajmy o Twoich potrzebach
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Niezależnie czy szukasz jednej drukarki czy kompleksowego wdrożenia — chętnie
            doradzimy i przygotujemy indywidualną ofertę.
          </p>

          {/* Kontakt bezpośredni */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:+48717817128"
              className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors"
            >
              <PhoneIcon size={20} />
              <span className="font-medium">+48 71 781 71 28</span>
            </a>
            <a
              href="mailto:takma@takma.com.pl"
              className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors"
            >
              <MailIcon size={20} />
              <span className="font-medium">takma@takma.com.pl</span>
            </a>
          </div>

          {/* Buttony */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="!bg-white !text-primary-700 hover:!bg-primary-50"
              >
                Wyślij zapytanie
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
