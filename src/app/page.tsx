import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import {
  ArrowRightIcon,
  ChevronRightIcon,
} from '@/components/ui/Icons'
import { ProductCard } from '@/components/product'
import { getNewProducts, getProductBySlug } from '@/data/products'
import { guides, guideCategoryLabels } from '@/data/guides'
import Hero from '@/components/home/Hero'
import { FeatureIcon } from '@/components/home/FeatureIcons'

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery | Sklep B2B AutoID',
  description:
    'Sklep B2B z urządzeniami AutoID — drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Zebra, Honeywell, Datalogic, TSC i inne. Ceny netto, dostawa 24h, 25 lat doświadczenia. Wrocław, cała Polska.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
      images: ['/images/takma-og.png'],
    title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery kodów',
    description: 'Drukarki etykiet od 800 zł netto, terminale mobilne, skanery. Zebra, Honeywell, Datalogic i inne marki. Doradztwo, sprzedaż i serwis dla firm B2B w całej Polsce.',
  },
}

/* ── Loga producentów (reuse z /o-nas) ── */
const partnerLogos: { name: string; logo: string; href?: string }[] = [
  { name: 'Zebra Technologies', logo: '/images/partners/logo_zebra.png', href: '/zebra' },
  { name: 'Honeywell', logo: '/images/partners/logo_honeywell.png', href: '/honeywell' },
  { name: 'Datalogic', logo: '/images/partners/logo_datalogic.png' },
  { name: 'TSC', logo: '/images/partners/logo_tsc.png' },
  { name: 'Citizen', logo: '/images/partners/logo_citizen.png' },
  { name: 'Godex', logo: '/images/partners/logo-godex.png' },
  { name: 'SATO', logo: '/images/partners/logo_sato.png' },
  { name: 'Newland', logo: '/images/partners/logo_newland.png', href: '/newland' },
  { name: 'M3 Mobile', logo: '/images/partners/logo_m3mobile.png' },
]

/* ── Loga klientów (reuse z /o-nas) ── */
const clientLogos = [
  { src: '/images/clients/lasy_logo.png', alt: 'Lasy Państwowe — klient TAKMA' },
  { src: '/images/clients/orlen_logo.png', alt: 'Orlen — klient TAKMA' },
  { src: '/images/clients/poczta_polska_logo.png', alt: 'Poczta Polska — klient TAKMA' },
  { src: '/images/clients/żabka_logo.png', alt: 'Żabka — klient TAKMA' },
  { src: '/images/clients/cba_logo.png', alt: 'CBA — klient TAKMA' },
  { src: '/images/clients/wosjko_logo.png', alt: 'Wojsko Polskie — klient TAKMA' },
]

/* ── Branże — 6 rozwiązań branżowych z linkami do stron ── */
const industries = [
  {
    name: 'E-commerce i fulfillment',
    href: '/drukarki-etykiet-e-commerce',
    desc: 'Etykiety wysyłkowe, kompletacja zamówień, multi-order picking',
    image: '/images/ecommerce.png',
    imagePos: 'center 70%',
  },
  {
    name: 'Magazyn i dystrybucja',
    href: '/drukarki-etykiet-magazyn',
    desc: 'WMS, inwentaryzacja, przyjęcia i wydania towarów',
    image: '/images/magazyn-dystrybucja.jpeg',
    imagePos: 'center 30%',
  },
  {
    name: 'Produkcja',
    href: '/drukarki-etykiet-produkcja',
    desc: 'Oznaczanie na linii, śledzenie serii, kontrola jakości',
    image: '/images/produkcja.jpeg',
    imagePos: 'center 65%',
  },
  {
    name: 'Logistyka i transport',
    href: '/drukarki-etykiet-logistyka',
    desc: 'Etykiety przewozowe, śledzenie przesyłek, cross-docking',
    image: '/images/logistyka-transport.jpeg',
    imagePos: 'center 60%',
  },
  {
    name: 'Apteka i healthcare',
    href: '/drukarki-etykiet-apteka',
    desc: 'Opaski identyfikacyjne, etykiety na leki, próbki laboratoryjne',
    image: '/images/apteka.jpeg',
  },
  {
    name: 'Gastronomia i HoReCa',
    href: '/drukarki-etykiet-gastronomia',
    desc: 'Etykiety żywnościowe, daty przydatności, HACCP',
    image: '/images/gastronomia.jpeg',
    imagePos: 'center 80%',
  },
]

/* ── FAQ — zoptymalizowane pod AEO (Position Zero), multi-brand ── */
const homepageFaq = [
  {
    q: 'Czym zajmuje się TAKMA?',
    a: 'TAKMA to polska firma B2B z siedzibą we Wrocławiu, działająca od 2001 roku. Specjalizujemy się w dostawie drukarek etykiet, terminali mobilnych, skanerów kodów kreskowych i materiałów eksploatacyjnych. Współpracujemy z 9 czołowymi producentami: Zebra, Honeywell, Datalogic, TSC, Citizen, Godex, SATO, Newland i M3 Mobile. Prowadzimy również własny serwis napraw na serwis-zebry.pl.',
  },
  {
    q: 'Jakie drukarki etykiet oferujecie?',
    a: 'Oferujemy drukarki etykiet wielu marek: Zebra (ZD220, ZD421, ZD621, ZT411, ZT610), Honeywell (PC42, PD45), TSC (DA220, TE310), Godex (G500, EZ6250i) i Citizen (CL-S321). Biurkowe od ok. 800 zł netto, przemysłowe do pracy 24/7 oraz mobilne do druku w terenie. Pomagamy dobrać model dopasowany do Twojego wolumenu i zastosowania — niezależnie od marki.',
  },
  {
    q: 'Czy TAKMA oferuje serwis urządzeń?',
    a: 'Tak. Prowadzimy autoryzowane centrum napraw Zebra (serwis-zebry.pl) oraz serwisujemy urządzenia Honeywell, Datalogic, TSC, Citizen i innych producentów. Wykonujemy naprawy gwarancyjne, pogwarancyjne i oferujemy kontrakty serwisowe. Czas naprawy to zazwyczaj 5–7 dni roboczych, a diagnostyka jest bezpłatna.',
  },
  {
    q: 'Ile kosztuje drukarka etykiet?',
    a: 'Ceny drukarek etykiet zaczynają się od ok. 600 zł netto za podstawowe modele biurkowe (np. TSC DA220), przez ok. 800–2 500 zł za zaawansowane modele Zebra i Honeywell, aż po ponad 15 000 zł netto za przemysłowe drukarki 6-calowe. Wszystkie ceny w naszym sklepie podane są netto. Przygotowujemy też indywidualne oferty dla zamówień ilościowych.',
  },
  {
    q: 'Jaka jest różnica między drukarką termiczną a termotransferową?',
    a: 'Drukarka termiczna (DT) drukuje bezpośrednio na papierze termoczułym — jest tańsza w eksploatacji, ale etykiety blakną po kilku miesiącach. Drukarka termotransferowa (TT) używa taśmy barwiącej (ribbon) i drukuje na dowolnym materiale — etykiety są trwałe latami, odporne na UV, wodę i chemikalia. Obie technologie oferują wszyscy główni producenci: Zebra, Honeywell, TSC i Godex.',
  },
  {
    q: 'Czy wysyłacie urządzenia kurierem do całej Polski?',
    a: 'Tak, realizujemy dostawy kurierem (DPD, InPost) na terenie całej Polski. Produkty dostępne w magazynie wysyłamy w ciągu 24 godzin roboczych od złożenia zamówienia. Oferujemy również odbiór osobisty w siedzibie firmy we Wrocławiu.',
  },
  {
    q: 'Jakie terminale mobilne polecacie do magazynu?',
    a: 'Dobór terminala zależy od środowiska pracy. Do standardowych operacji magazynowych polecamy Zebra TC22 lub Honeywell CT47 — lekkie, wytrzymałe i w przystępnej cenie. Dla intensywnego skanowania z klawiaturą fizyczną sprawdzi się Zebra MC3400. Do chłodni i ciężkiego przemysłu — Zebra MC9400 lub Datalogic Skorpio X5. Pomagamy dobrać model do konkretnych potrzeb.',
  },
  {
    q: 'Czy oferujecie doradztwo przed zakupem?',
    a: 'Tak, oferujemy bezpłatne doradztwo techniczne. Nasi certyfikowani specjaliści pomogą dobrać urządzenie dopasowane do Twojej branży, wolumenu pracy i budżetu — niezależnie od producenta. Skontaktuj się z nami telefonicznie (+48 71 781 71 28), mailowo (takma@takma.com.pl) lub przez formularz na stronie kontaktowej.',
  },
]

/* ── JSON-LD Schema ── */
const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona główna',
      item: 'https://www.takma.com.pl/',
    },
  ],
}

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.takma.com.pl/#organization',
  name: 'TAKMA Tadeusz Tiuchty',
  alternateName: 'TAKMA',
  url: 'https://www.takma.com.pl',
  telephone: '+48717817128',
  email: 'takma@takma.com.pl',
  foundingDate: '2001-08-01',
  description:
    'Dystrybutor urządzeń AutoID: Zebra, Honeywell, Datalogic, TSC, Citizen, Godex i innych. Drukarki etykiet, terminale mobilne, skanery kodów kreskowych i materiały eksploatacyjne dla firm B2B. 25+ lat doświadczenia, serwis, doradztwo.',
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
    opens: '07:30',
    closes: '15:30',
  },
  areaServed: [
    { '@type': 'City', name: 'Wrocław' },
    { '@type': 'Country', name: 'Polska' },
  ],
  priceRange: '$$',
  image: 'https://www.takma.com.pl/images/takma-og.png',
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
    'https://www.linkedin.com/company/takma',
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function HomePage() {
  // Dynamiczne bestsellery z fallback na isNew
  // Bestsellery: mix marek (1× Honeywell, 1× Newland, 1× Brother, 1× Zebra) — jawny dobór
  const best = ['honeywell-ct37', 'newland-hr23-dorada', 'brother-td-4t', 'zebra-zd421t']
    .map(getProductBySlug)
    .filter((p): p is NonNullable<ReturnType<typeof getProductBySlug>> => Boolean(p))
  const bestsellers = best.length >= 4
    ? best
    : [...best, ...getNewProducts(4 - best.length)]

  // ItemList schema dla bestseller-ów (Google karuzela)
  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Bestsellery TAKMA — urządzenia AutoID',
    numberOfItems: bestsellers.length,
    itemListElement: bestsellers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.takma.com.pl/produkt/${p.slug}`,
      name: p.name,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      {/* ── S1: Hero ── */}
      <Hero />

      {/* ── S2: Pasek logów producentów ── */}
      <section className="border-b border-gray-100 py-3 lg:py-6">
        <div className="container-main">
          <div className="flex items-center justify-between gap-3 lg:gap-4 overflow-x-auto scrollbar-hide">
            {partnerLogos.map((partner) => {
              const inner = (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={110}
                  height={32}
                  className="h-full w-auto object-contain"
                />
              )
              const className = "h-5 md:h-7 lg:h-8 flex-shrink-0 flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              return partner.href ? (
                <Link key={partner.name} href={partner.href} className={className} title={`Produkty ${partner.name}`}>
                  {inner}
                </Link>
              ) : (
                <div key={partner.name} className={className}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── S3: Bestsellery (dynamiczne) ── */}
      <section className="py-8 lg:py-14">
        <div className="container-main">
          <div className="flex items-center justify-between mb-5 lg:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Bestsellery
            </h2>
            <Link
              href="/katalog?sortuj=popularnosc"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1.5 transition-colors"
            >
              Wszystkie produkty
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: Dlaczego TAKMA? + Certyfikaty Zebra ── */}
      <section className="py-10 lg:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="container-main relative">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Kompleksowe rozwiązania AutoID z&nbsp;profesjonalnym wsparciem
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8 lg:mb-12">
            {[
              {
                variant: 'medal' as const,
                title: '25 lat doświadczenia',
                desc: 'Tysiące zrealizowanych projektów i zadowolonych klientów w całej Polsce',
              },
              {
                variant: 'delivery' as const,
                title: 'Szybka dostawa',
                desc: 'Wysyłka 24–48h — większość produktów dostępna od ręki z magazynu',
              },
              {
                variant: 'service' as const,
                title: 'Autoryzowany serwis',
                desc: 'Naprawy gwarancyjne i pogwarancyjne urządzeń Zebra, Honeywell, Datalogic i innych',
              },
              {
                variant: 'consulting' as const,
                title: 'Doradztwo techniczne',
                desc: 'Pomożemy dobrać rozwiązanie idealne dla Twojej branży i potrzeb',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bento-card group p-4 lg:p-7 flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="mb-3 lg:mb-5">
                  <FeatureIcon variant={item.variant} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-1 lg:mb-2">{item.title}</h3>
                <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certyfikaty Zebra — zielony box */}
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-gradient-to-br from-[#A8F000] to-[#8dbd00]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A1A2F] tracking-tight mb-2 lg:mb-3">
                Certyfikaty Zebra
              </h3>
              <p className="text-sm sm:text-base text-[#0A1A2F]/80 font-medium leading-relaxed max-w-2xl mx-auto">
                TAKMA jako jeden z nielicznych partnerów Zebra w Polsce posiada 3 oficjalne certyfikaty potwierdzające najwyższe kompetencje w sprzedaży i serwisie.
              </p>
            </div>
          </div>

          {/* Loga certyfikatów pod boxem — z tooltipami dokumentów */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 lg:mt-8">
            {[
              { badge: '/images/certyfikat-1-zebra.png', doc: '/images/Certyfikaty/Repair_Specialist.png', alt: 'Zebra Printer Repair Specialist — certyfikat autoryzowanego serwisu TAKMA', title: 'Certyfikat Printer Repair Specialist' },
              { badge: '/images/certyfikat-2-zebra.png', doc: '/images/Certyfikaty/Public_sector_specialist.png', alt: 'Zebra Public Sector Specialist — certyfikat specjalisty sektora publicznego TAKMA', title: 'Certyfikat Public Sector Specialist' },
              { badge: '/images/certyfikat-3-zebra.png', doc: '/images/Certyfikaty/Premier.png', alt: 'Zebra Premier Solution Partner — certyfikat partnerstwa TAKMA', title: 'Certyfikat Premier Solution Partner' },
            ].map((cert) => (
              <div key={cert.badge} className="group relative bg-white rounded-xl px-4 py-3 shadow-sm cursor-pointer" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
                <meta itemProp="credentialCategory" content="Autoryzacja producenta" />
                <meta itemProp="name" content={cert.title} />
                <span itemProp="recognizedBy" itemScope itemType="https://schema.org/Organization">
                  <meta itemProp="name" content="Zebra Technologies" />
                </span>
                <Image
                  src={cert.badge}
                  alt={cert.alt}
                  width={200}
                  height={80}
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                  itemProp="image"
                />
                {/* Tooltip z dokumentem certyfikatu — tylko desktop */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[480px] hidden lg:block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2 text-center">{cert.title}</p>
                    <Image
                      src={cert.doc}
                      alt={`Dokument: ${cert.title}`}
                      width={600}
                      height={420}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: Poradniki i baza wiedzy ── */}
      <section className="py-8 lg:py-20">
        <div className="container-main">
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Poradniki i baza wiedzy
            </h2>
            <p className="text-gray-500 mt-1.5 md:mt-2 max-w-lg mx-auto text-sm md:text-base">
              Praktyczna wiedza o drukarkach etykiet, terminali i technologiach AutoID
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* KC401 wykluczony do premiery 17.09.2026 (embargo) — Google rankował home zamiast wpisu na frazę "zebra kc401" */}
            {[...guides].filter(g => g.slug !== 'zebra-kc401-kiosk-samoobslugowy').sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 4).map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/poradnik/${guide.slug}`}
                className={`group bento-card flex flex-col overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                {guide.heroImage && (
                  <div className="relative h-40 lg:h-48 bg-[#0a0a0a] overflow-hidden">
                    <img
                      src={guide.heroImage}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: guide.cardImagePosition || '100% center' }}
                    />
                    <span className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      guide.category === 'poradnik' ? 'bg-blue-100/90 text-blue-700' :
                      guide.category === 'porownanie' ? 'bg-amber-100/90 text-amber-700' :
                      guide.category === 'przewodnik' ? 'bg-emerald-100/90 text-emerald-700' :
                      guide.category === 'branzowy' ? 'bg-purple-100/90 text-purple-700' :
                      guide.category === 'serwisowy' ? 'bg-rose-100/90 text-rose-700' :
                      'bg-gray-100/90 text-gray-700'
                    }`}>
                      {guideCategoryLabels[guide.category]}
                    </span>
                  </div>
                )}
                <div className="p-5 lg:p-6 flex flex-col flex-1">
                  {!guide.heroImage && (
                    <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 mb-4">
                      {guideCategoryLabels[guide.category]}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {guide.excerpt}
                  </p>
                  <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 flex items-center gap-1.5 transition-colors mt-auto">
                    Czytaj
                    <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Wejście do pełnej bazy — sekcja pokazuje 4 najnowsze wpisy z kilkudziesięciu,
              a bez tego linku reszta poradników nie ma dojścia ze strony głównej */}
          <div className="mt-8 lg:mt-10 text-center">
            <Link
              href="/poradnik"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-xl transition-colors"
            >
              Zobacz wszystkie poradniki ({guides.filter(g => g.slug !== 'zebra-kc401-kiosk-samoobslugowy').length})
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── S6: Rozwiązania branżowe ── */}
      <section className="py-8 lg:py-20 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Rozwiązania dla Twojej branży
            </h2>
            <p className="text-gray-500 mt-1.5 md:mt-2 max-w-lg mx-auto text-sm md:text-base">
              Dobieramy urządzenia AutoID dopasowane do specyfiki Twojego sektora
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {industries.map((ind, i) => (
              <Link
                key={ind.href}
                href={ind.href}
                className={`group bento-card p-4 lg:p-6 flex flex-col relative overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                {ind.image && (
                  <Image
                    src={ind.image}
                    alt=""
                    fill
                    className="object-cover opacity-[0.12] group-hover:opacity-[0.40] transition-opacity duration-500"
                    style={{ objectPosition: ind.imagePos || 'center' }}
                  />
                )}
                <h3 className="relative font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-xs md:text-sm lg:text-base mb-1">
                  {ind.name}
                </h3>
                <p className="relative text-[11px] md:text-xs lg:text-sm text-gray-500 leading-relaxed">
                  {ind.desc}
                </p>
                <span className="relative text-xs font-medium text-primary-600 mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Zobacz rozwiązania
                  <ArrowRightIcon size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7: Zaufali nam ── */}
      <section className="py-8 lg:py-14 bg-white">
        <div className="container-main">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-5 lg:mb-8">
            Zaufali nam
          </h2>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.alt}
                className="bg-white rounded-xl border border-gray-100 h-16 lg:h-24 relative group hover:shadow-md transition-all"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain p-3 lg:p-5 lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: FAQ ── */}
      <section className="py-8 lg:py-20 bg-gray-50">
        <div className="container-main">
          <details className="group max-w-3xl mx-auto">
            <summary className="flex items-center justify-center gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <h2 className="text-lg lg:text-2xl font-semibold text-gray-400 tracking-tight">
                Najczęściej zadawane pytania
              </h2>
              <ChevronRightIcon
                size={24}
                className="text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90 mt-1"
              />
            </summary>

            <p className="text-gray-500 mt-2 mb-8 text-center">
              Odpowiedzi na pytania, które najczęściej słyszymy od klientów
            </p>

            <div className="space-y-3">
              {homepageFaq.map((item, index) => (
                <details
                  key={index}
                  className="group/item bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 p-4 lg:p-5 cursor-pointer list-none font-medium text-gray-900 hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden text-sm lg:text-base">
                    <span>{item.q}</span>
                    <ChevronRightIcon
                      size={20}
                      className="text-gray-400 flex-shrink-0 transition-transform group-open/item:rotate-90"
                    />
                  </summary>
                  <div className="px-4 pb-4 lg:px-5 lg:pb-5 text-gray-600 text-xs lg:text-sm leading-relaxed border-t border-gray-50 pt-3 lg:pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </details>
        </div>
      </section>

    </>
  )
}
