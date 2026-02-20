import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import {
  ChevronRightIcon,
  PhoneIcon,
  MailIcon,
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
  { name: 'Zebra Technologies', status: 'Premier Solution Partner', logo: '/images/partners/logo_zebra.png', href: 'https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav' },
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
    image: '/images/about/logistyka-magazynowanie.png',
    name: 'Logistyka i magazynowanie',
    desc: 'Drukarki etykiet wysyłkowych, skanery i terminale do zarządzania magazynem',
  },
  {
    image: '/images/about/handel-retail.png',
    name: 'Handel i retail',
    desc: 'Metkownice, drukarki cenówek, skanery kasowe i systemy inwentaryzacji',
  },
  {
    image: '/images/about/lesnictwo-srodowisko.png',
    name: 'Leśnictwo i środowisko',
    desc: 'Mobilne drukarki etykiet i terminale terenowe dla Lasów Państwowych',
  },
  {
    image: '/images/about/sektor-publiczny.png',
    name: 'Sektor publiczny',
    desc: 'Zamówienia publiczne, przetargi PZP, dostawy dla administracji i służb mundurowych',
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
      <section className="bg-indigo-50/80 border-b border-indigo-100 py-16 lg:py-24">
        <div className="container-main">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Strona główna
            </Link>
            <ChevronRightIcon size={16} />
            <span className="text-gray-600">O nas</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Od 2001 roku pomagamy firmom automatyzować procesy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              TAKMA to firma z Wrocławia, która od ponad 24 lat dostarcza drukarki
              etykiet, skanery kodów kreskowych i terminale mobilne dla biznesu. Łączymy
              doświadczenie z indywidualnym podejściem do każdego klienta.
            </p>
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
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-gray-900 font-medium text-sm">{stat.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.sublabel}</div>
              </div>
            ))}
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
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/25-lat-doswiadczenia.png"
                  alt="Ikona 25 lat doświadczenia TAKMA"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">25 lat doświadczenia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Działamy od 2001 roku. Przez ponad dwie dekady zrealizowaliśmy tysiące projektów
                dla firm z całej Polski — od małych drukarń po wielkie centra logistyczne.
              </p>
            </div>

            {/* Karta 2: Serwis */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/autoryzowany-serwis-zebra.png"
                  alt="Ikona autoryzowany serwis Zebra"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
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
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/przetargi-publiczne.png"
                  alt="Ikona przetargi publiczne"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Przetargi publiczne</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wieloletnie doświadczenie w zamówieniach publicznych — realizacje dla
                Tauron, Poczta Polska, Lasy Państwowe i wielu innych. Znajomość procedur PZP.
              </p>
            </div>

            {/* Karta 4: Nagrody */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/nagrody-i-wyroznienia.png"
                  alt="Ikona nagrody i wyróżnienia"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
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
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/certyfikowani-specjalisci.png"
                  alt="Ikona certyfikowani specjaliści"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certyfikowani specjaliści</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nasz zespół przeszedł szkolenia producentów i posiada certyfikaty Zebra,
                Honeywell i Datalogic. Doradzamy na podstawie wiedzy, nie katalogów.
              </p>
            </div>

            {/* Karta 6: Podejście */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/images/about/partnerskie-podejscie-b2b.png"
                  alt="Ikona partnerskie podejście B2B"
                  width={64}
                  height={64}
                  className="object-contain mix-blend-multiply"
                />
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
            {partners.map((partner) => {
              const Wrapper = partner.href ? 'a' : 'div'
              const wrapperProps = partner.href ? { href: partner.href, target: '_blank', rel: 'noopener' } : {}
              return (
                <Wrapper
                  key={partner.name}
                  {...wrapperProps as any}
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
                </Wrapper>
              )
            })}
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center flex flex-col items-center justify-center">
              <div className="h-12 flex items-center justify-center mb-3">
                <span className="text-gray-300 text-2xl font-light">+</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-xs">i wielu innych</h3>
            </div>
          </div>

          {/* Certyfikaty Zebra — oficjalne loga */}
          <div className="bg-white rounded-xl border p-8" style={{ borderColor: '#A8F000' }}>
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
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={industry.image}
                    alt={`Ikona ${industry.name}`}
                    width={64}
                    height={64}
                    className="object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>

          {/* Loga klientów */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">Zaufali nam między innymi:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
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
                  className="bg-white rounded-xl border border-gray-100 h-24 relative"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain p-5"
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
      <section className="py-16 lg:py-24 bg-indigo-50/80 border-t border-indigo-100">
        <div className="container-main text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Porozmawiajmy o Twoich potrzebach
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Niezależnie czy szukasz jednej drukarki czy kompleksowego wdrożenia — chętnie
            doradzimy i przygotujemy indywidualną ofertę.
          </p>

          {/* Kontakt bezpośredni */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="tel:+48717817128"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <PhoneIcon size={20} />
              <span className="font-medium">+48 71 781 71 28</span>
            </a>
            <a
              href="mailto:takma@takma.com.pl"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <MailIcon size={20} />
              <span className="font-medium">takma@takma.com.pl</span>
            </a>
          </div>

          {/* Buttony */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg">
                Wyślij zapytanie
              </Button>
            </Link>
            <Link href="/katalog">
              <Button
                size="lg"
                variant="ghost"
                className="text-gray-700 border-2 border-gray-300 hover:bg-gray-100"
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
