import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import {
  ArrowRightIcon,
  WrenchIcon,
  ChevronRightIcon,
} from '@/components/ui/Icons'
import { ProductCard } from '@/components/product'
import { categories, getBestsellers, getNewProducts } from '@/data/products'
import { guides, guideCategoryLabels } from '@/data/guides'
import Hero from '@/components/home/Hero'

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery | Sklep B2B AutoID',
  description:
    'Sklep B2B z urządzeniami AutoID — drukarki etykiet, terminale mobilne, skanery kodów kreskowych. Zebra, Honeywell, Datalogic, TSC i inne. Ceny netto, dostawa 24h, 25 lat doświadczenia. Wrocław, cała Polska.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TAKMA — Drukarki etykiet, Terminale mobilne, Skanery kodów',
    description: 'Drukarki etykiet od 800 zł netto, terminale mobilne, skanery. Zebra, Honeywell, Datalogic i inne marki. Doradztwo, sprzedaż i serwis dla firm B2B w całej Polsce.',
  },
}

/* ── Ikony kategorii ── */
const categoryIcons: Record<string, string> = {
  printer: '/images/ikony/drukarki-etykiet.jpeg',
  scan: '/images/skanery-czytniki.png',
  smartphone: '/images/ikony/terminale-mobilne.jpeg',
  tablet: '/images/tablety.png',
  tag: '/images/ikony/materialy-eksploatacyjne.jpeg',
  package: '/images/akcesoria.png',
  code: '/images/ikony/drukarki-etykiet.jpeg',
}

/* ── 6 kategorii na HP ── */
const homepageCategoryIds = [
  'drukarki-etykiet',
  'terminale-mobilne',
  'materialy-eksploatacyjne',
  'akcesoria',
  'drukarki-kart',
  'drukarki-opasek',
]

/* ── Loga producentów (reuse z /o-nas) ── */
const partnerLogos = [
  { name: 'Zebra Technologies', logo: '/images/partners/logo_zebra.png' },
  { name: 'Honeywell', logo: '/images/partners/logo_honeywell.png' },
  { name: 'Datalogic', logo: '/images/partners/logo_datalogic.png' },
  { name: 'TSC', logo: '/images/partners/logo_tsc.png' },
  { name: 'Citizen', logo: '/images/partners/logo_citizen.png' },
  { name: 'Godex', logo: '/images/partners/logo-godex.png' },
  { name: 'SATO', logo: '/images/partners/logo_sato.png' },
  { name: 'Newland', logo: '/images/partners/logo_newland.png' },
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
      item: 'https://takma.com.pl/',
    },
  ],
}

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://takma.com.pl/#organization',
  name: 'TAKMA Tadeusz Tiuchty',
  alternateName: 'TAKMA',
  url: 'https://takma.com.pl',
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
  image: 'https://takma.com.pl/images/takma-og.png',
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
  const best = getBestsellers(4)
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
      url: `https://takma.com.pl/produkt/${p.slug}`,
      name: p.name,
    })),
  }

  // Kategorie do wyświetlenia
  const homepageCategories = homepageCategoryIds
    .map(id => categories.find(c => c.id === id)!)
    .filter(Boolean)

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
      <section className="border-b border-gray-100 py-5 lg:py-6">
        <div className="container-main">
          <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="h-7 lg:h-8 flex-shrink-0 flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={110}
                  height={32}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: Kategorie (Bento Grid — 6 kategorii) ── */}
      <section className="py-10 lg:py-14 bg-gradient-mesh relative">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Urządzenia AutoID — nasze kategorie
              </h2>
              <p className="text-gray-500 mt-2">Znajdź urządzenie idealne do Twoich potrzeb</p>
            </div>
            <Link
              href="/katalog"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Cały katalog
              <ArrowRightIcon size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {homepageCategories.map((category, i) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className={`bento-card group p-5 lg:p-6 flex flex-col items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={categoryIcons[category.icon] || '/images/icon-accessories.png'}
                    alt={category.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 hidden lg:block">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: Bestsellery (dynamiczne) ── */}
      <section className="py-10 lg:py-14">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: Zaufali nam ── */}
      <section className="py-10 lg:py-14 bg-gray-50">
        <div className="container-main">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-8">
            Zaufali nam
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.alt}
                className="bg-white rounded-xl border border-gray-100 h-20 lg:h-24 relative group hover:shadow-md transition-all"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain p-4 lg:p-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: Serwis-Zebry Banner (bez zmian) ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600" />
        <div className="absolute inset-0 bg-gradient-mesh-dark opacity-50" />

        <div className="container-main relative py-10 lg:py-14">
          <a
            href="https://serwis-zebry.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center justify-between gap-6 group"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/15 transition-colors">
                <WrenchIcon size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  Serwis-Zebry.pl
                </div>
                <div className="text-primary-100 mt-1">
                  Profesjonalna naprawa i serwis urządzeń Zebra — autoryzowany partner z 20-letnim doświadczeniem
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl group-hover:bg-primary-50 transition-all duration-300 shadow-glass flex-shrink-0">
              Sprawdź ofertę serwisu
              <ArrowRightIcon size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* ── S7: Dlaczego TAKMA? + Certyfikaty Zebra ── */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="container-main relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Dlaczego TAKMA?
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              Kompleksowe rozwiązania AutoID z profesjonalnym wsparciem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                image: '/images/about/doswiadczenie.png',
                title: '25 lat doświadczenia',
                desc: 'Tysiące zrealizowanych projektów i zadowolonych klientów w całej Polsce',
              },
              {
                image: '/images/about/dostawa.png',
                title: 'Szybka dostawa',
                desc: 'Wysyłka 24–48h — większość produktów dostępna od ręki z magazynu',
              },
              {
                image: '/images/about/serwis.png',
                title: 'Autoryzowany serwis',
                desc: 'Naprawy gwarancyjne i pogwarancyjne urządzeń Zebra, Honeywell, Datalogic i innych',
              },
              {
                image: '/images/about/doradztwo.png',
                title: 'Doradztwo techniczne',
                desc: 'Pomożemy dobrać rozwiązanie idealne dla Twojej branży i potrzeb',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bento-card p-6 lg:p-7 flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <div className="w-[72px] h-[72px] mb-5">
                  <Image src={item.image} alt={item.title} width={72} height={72} className="object-contain mix-blend-multiply" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certyfikaty Zebra */}
          <div className="bg-white rounded-xl border p-6 lg:p-8" style={{ borderColor: '#A8F000' }}>
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
                  alt="Zebra Public Sector Specialist — 1 z 4 firm w Polsce"
                  width={220}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="/images/certifications/zebra-printer-repair-specialist.png"
                  alt="Zebra Printer Repair Specialist — autoryzowany serwis TAKMA"
                  width={220}
                  height={48}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8: Poradniki i baza wiedzy ── */}
      <section className="py-14 lg:py-20">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Poradniki i baza wiedzy
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              Praktyczna wiedza o drukarkach etykiet, terminali i technologiach AutoID
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.slice(0, 3).map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/poradnik/${guide.slug}`}
                className={`group bento-card p-6 lg:p-7 flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)}`}
              >
                <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 mb-4">
                  {guideCategoryLabels[guide.category]}
                </span>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {guide.excerpt}
                </p>
                <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 flex items-center gap-1.5 transition-colors mt-auto">
                  Czytaj poradnik
                  <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── S9: FAQ ── */}
      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              Odpowiedzi na pytania, które najczęściej słyszymy od klientów
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {homepageFaq.map((item, index) => (
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

      {/* ── S10: CTA ── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-mesh-dark" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

        <div className="container-main relative py-16 lg:py-24 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-balance">
            Doradzimy i dobierzemy urządzenie
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Bezpłatne doradztwo techniczne, 25&nbsp;lat doświadczenia i&nbsp;indywidualna oferta
            dopasowana do Twoich potrzeb. Porozmawiajmy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="ghost"
                className="!bg-white !text-gray-900 hover:!bg-gray-100 font-semibold px-8"
              >
                Porozmawiajmy
              </Button>
            </Link>
            <Link href="/katalog">
              <Button
                size="lg"
                variant="ghost"
                className="!text-gray-300 hover:!text-white hover:!bg-white/[0.06] !border !border-white/[0.1]"
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
