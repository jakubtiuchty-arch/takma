import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  getManufacturerById,
  getProductsByManufacturer,
  getBrandCategoriesForManufacturer,
  categories,
  type Product,
} from '@/data/products'
import ServiceBanner from '@/components/ui/ServiceBanner'
import LinkedText from '@/components/ui/LinkedText'

// ============================================
// BRAND PILLAR CONTENT
// ============================================

interface CategoryTile {
  categoryId: string
  name: string
  href: string
  description: string
}

interface BrandPillarData {
  heroText: string
  categoryTiles: CategoryTile[]
  featuredSlugs: string[]
  aboutHeading: string
  aboutParagraphs: string[]
  whyBuyItems: { title: string; text: string }[]
  faq: { question: string; answer: string }[]
  guideLinks: { title: string; href: string }[]
}

const brandPillarData: Record<string, BrandPillarData> = {
  zebra: {
    heroText: 'Kompletna oferta Zebra Technologies z cenami netto i dostawą z magazynu w Polsce. Drukarki etykiet, terminale mobilne, skanery, tablety, materiały eksploatacyjne i akcesoria.',
    categoryTiles: [
      {
        categoryId: 'drukarki-etykiet',
        name: 'Drukarki etykiet',
        href: '/drukarki-etykiet-zebra',
        description: 'Biurkowe ZD, przemysłowe ZT, mobilne ZQ. Od 576 zł netto.',
      },
      {
        categoryId: 'terminale-mobilne',
        name: 'Terminale mobilne',
        href: '/terminale-mobilne-zebra',
        description: 'Serie TC i MC z Androidem. Wi-Fi 6E, IP65–IP68.',
      },
      {
        categoryId: 'skanery-kodow-kreskowych',
        name: 'Skanery kodów',
        href: '/skanery-kodow-kreskowych-zebra',
        description: 'Ręczne, bezprzewodowe, prezentacyjne. Od 181 zł netto.',
      },
      {
        categoryId: 'tablety-przemyslowe',
        name: 'Tablety przemysłowe',
        href: '/tablety-przemyslowe',
        description: 'Seria ET: 8″ i 10″. Android i Windows. IP65/IP66.',
      },
      {
        categoryId: 'drukarki-kart',
        name: 'Drukarki kart',
        href: '/drukarki-kart',
        description: 'Seria ZC — druk kart plastikowych i identyfikatorów.',
      },
      {
        categoryId: 'materialy-eksploatacyjne',
        name: 'Materiały eksploatacyjne',
        href: '/materialy-eksploatacyjne',
        description: 'Etykiety termiczne i termotransferowe, taśmy barwiące.',
      },
    ],
    featuredSlugs: [
      'zebra-zd421t',
      'zebra-zt231',
      'zebra-zq511',
      'zebra-tc22',
      'zebra-mc3400',
      'zebra-ds2208',
      'zebra-ds4608',
      'zebra-et40',
    ],
    aboutHeading: 'O Zebra Technologies',
    aboutParagraphs: [
      'Zebra Technologies to amerykański producent urządzeń Auto-ID z siedzibą w Vernon Hills pod Chicago. Firma działa od 1969 roku — najpierw jako producent drukarek etykiet, a od 2014 roku (po przejęciu działu Enterprise od Motorola Solutions za 3,45 mld USD) również jako producent terminali mobilnych, skanerów i tabletów przemysłowych.',
      'Na świecie Zebra ma ponad 50% udziału w rynku drukarek etykiet i porównywalną pozycję w segmencie terminali enterprise. W Polsce to najczęściej wybierana marka w magazynach, centrach logistycznych, sieciach handlowych i na liniach produkcyjnych. Platformy Link-OS (drukarki) i Mobility DNA (terminale) to branżowy standard.',
      'TAKMA jest autoryzowanym [Premier Solution Partner Zebra Technologies](https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav) i widnieje w oficjalnym rejestrze partnerów na zebra.com. Serwis gwarancyjny i pogwarancyjny drukarek, terminali i skanerów Zebra realizujemy we współpracy z [serwis-zebry.pl](https://www.serwis-zebry.pl) — autoryzowanym centrum serwisowym.',
    ],
    whyBuyItems: [
      {
        title: 'Autoryzowane partnerstwo',
        text: 'Premier Solution Partner Zebra z oficjalnym wpisem na zebra.com. Nie szary import — pełna gwarancja producenta.',
      },
      {
        title: 'Ceny z dystrybucji',
        text: 'Ceny netto aktualizowane codziennie bezpośrednio z hurtowni Ingram Micro i BlueStar. Bez pośredników.',
      },
      {
        title: 'Serwis w Polsce',
        text: 'Naprawy gwarancyjne i pogwarancyjne przez serwis-zebry.pl. Części zamienne na miejscu, czas naprawy 3–5 dni.',
      },
      {
        title: '25 lat na rynku',
        text: 'Działamy od 2002 roku. Znamy te urządzenia od podszewki — doradzamy, konfigurujemy, integrujemy z WMS/ERP.',
      },
    ],
    faq: [
      {
        question: 'Gdzie kupić urządzenia Zebra w Polsce?',
        answer: 'TAKMA jest autoryzowanym [Premier Solution Partner Zebra Technologies](https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav) — widniejemy w oficjalnym rejestrze partnerów na zebra.com. Sprzedajemy drukarki etykiet, terminale, skanery, tablety i akcesoria Zebra z cenami netto aktualizowanymi codziennie. Wysyłka z magazynu PL (24h) lub EU (2–3 dni). Siedziba we Wrocławiu.',
      },
      {
        question: 'Ile kosztuje najtańsze urządzenie Zebra?',
        answer: 'Najtańszy produkt Zebra w naszej ofercie to skaner [LI2208](/produkt/zebra-li2208) od 181 zł netto. Najtańsza drukarka etykiet: [ZD220t](/produkt/zebra-zd220t) od 639 zł. Najtańszy terminal: [MC2200](/produkt/zebra-mc2200) od 2 261 zł. Najtańszy tablet: [ET40](/produkt/zebra-et40) od 2 407 zł. Ceny netto, aktualizowane codziennie.',
      },
      {
        question: 'Czym różnią się serie drukarek ZD, ZT i ZQ?',
        answer: 'ZD (np. [ZD421](/produkt/zebra-zd421t), [ZD621](/produkt/zebra-zd621t)) to drukarki biurkowe — kompaktowe, do biura, apteki, e-commerce. ZT (np. [ZT231](/produkt/zebra-zt231), [ZT411](/produkt/zebra-zt411), ZT610) to drukarki przemysłowe — metalowa obudowa, praca 24/7, duże rolki. ZQ (np. [ZQ511](/produkt/zebra-zq511), [ZQ620 Plus](/produkt/zebra-zq620-plus)) to drukarki mobilne — na pasku/w pojeździe, zasilanie bateryjne, Bluetooth. Szczegóły w [poradniku](/poradnik/jak-wybrac-drukarke-etykiet).',
      },
      {
        question: 'Który terminal Zebra do magazynu?',
        answer: 'Zależy od warunków i budżetu. [MC3400](/produkt/zebra-mc3400) (od 4 561 zł) — klawiatura + uchwyt pistoletowy, Wi-Fi 6E, optymalny do typowego magazynu. [MC9400](/produkt/zebra-mc9400) (od 7 638 zł) — ultra-rugged, chłodnie, porty, upadki 3 m. [TC22](/produkt/zebra-tc22) (od 2 417 zł) — dotykowy, lekki, dobry do retail i lekkiego magazynu. Porównanie modeli: [poradnik terminali](/poradnik/jak-wybrac-terminal-mobilny).',
      },
      {
        question: 'Jaki skaner Zebra do kasy?',
        answer: '[DS2208](/produkt/zebra-ds2208) (od 352 zł) — ręczny imager 2D, USB, gwarancja 5 lat. Czyta kody z ekranów smartfonów. Do apteki lub kasy z dużym ruchem: [DS9308](/produkt/zebra-ds9308) prezentacyjny (hands-free) lub [DS4608](/produkt/zebra-ds4608) z szybszym dekodowaniem.',
      },
      {
        question: 'Czy urządzenia Zebra mają serwis w Polsce?',
        answer: 'Tak. TAKMA współpracuje z [serwis-zebry.pl](https://www.serwis-zebry.pl) — autoryzowanym centrum serwisowym Zebra. Naprawa drukarek, terminali i skanerów, części zamienne na miejscu. Czas naprawy: 3–5 dni roboczych. Dodatkowo dostępne kontrakty Zebra OneCare — rozszerzona gwarancja do 5 lat z naprawą uszkodzeń przypadkowych.',
      },
      {
        question: 'Jak długo Zebra wspiera Android na terminalach?',
        answer: 'Zebra oferuje najdłuższe wsparcie Android w branży. Najnowsze modele ([TC501](/produkt/zebra-tc501), [TC701](/produkt/zebra-tc701)) mają wsparcie do Android 19 — to 8–10 lat aktualizacji bezpieczeństwa (program LifeGuard). Starsze modele (TC22, TC53) wspierane do A16–A17. Dla porównania: Honeywell Sentinel — 5–7 lat, Datalogic — 3–5 lat, Newland — 3 lata.',
      },
      {
        question: 'Czy drukarki Zebra działają z systemami WMS i ERP?',
        answer: 'Tak, bez wyjątku. Drukarki Zebra obsługują ZPL II i EPL2 (branżowy standard), łączą się przez USB, Ethernet i Wi-Fi. Kompatybilne z SAP, Oracle, Comarch WMS, BaseLinker, Shoper, PrestaShop i każdym systemem wysyłającym etykiety. Platforma Link-OS umożliwia zdalne zarządzanie flotą drukarek. TAKMA pomaga w konfiguracji.',
      },
      {
        question: 'Co to jest Zebra OneCare?',
        answer: 'Zebra OneCare to oficjalny program kontraktów serwisowych. Obejmuje naprawę uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa), wymianę urządzenia i wsparcie techniczne. Dostępne warianty: Essential (3 dni), Select (priorytet), Premier (next-day). Kontrakty 1–5 lat, wykupujesz w ciągu 30 dni od zakupu. Ceny OneCare widoczne na stronach produktów.',
      },
      {
        question: 'Zebra vs Honeywell — co wybrać?',
        answer: 'Zebra dominuje ekosystemem software (Link-OS, Mobility DNA, DataWedge) i serwisem w Polsce ([serwis-zebry.pl](https://www.serwis-zebry.pl)). Honeywell wygrywa w niektórych niszach hardware: PX940 z weryfikatorem kodów, PM45 z emulacją ZPL. Cenowo porównywalne. Jeśli masz już flotę Zebra — zostań przy Zebrze (kompatybilność). Nowa flota? [Porównanie terminali](/poradnik/zebra-vs-honeywell-terminale-mobilne), [porównanie drukarek](/poradnik/jak-wybrac-drukarke-etykiet).',
      },
      {
        question: 'Jakie etykiety pasują do drukarek Zebra?',
        answer: 'Do drukarek termicznych (ZD220d, ZD421d): etykiety termiczne Z-Select 2000D lub Z-Perform 2000D. Do termotransferowych (ZD421t, ZT231, ZT411): etykiety papierowe Z-Perform 1000T / Z-Select 2000T + taśma woskowa 2300 Wax. Do etykiet trwałych (chemia, outdoor): Z-Ultimate 3000T (folia poliester) + taśma żywiczna 5095 Resin. Pełna oferta w kategorii [materiały eksploatacyjne](/materialy-eksploatacyjne).',
      },
      {
        question: 'Czy tablety Zebra ET pracują w chłodniach?',
        answer: 'Tak. [Zebra ET60](/produkt/zebra-et60) i [ET65](/produkt/zebra-et65) działają w temperaturach od -20°C do +50°C (z opcją podgrzewanego ekranu). Ekran pojemnościowy działa w rękawicach. Bateria hot-swap pozwala na wymianę bez wyłączania tabletu. IP66 chroni przed pyłem i strumieniem wody. Do standardowego magazynu: [ET40](/produkt/zebra-et40) lub [ET45](/produkt/zebra-et45) (IP65, 8-calowy ekran).',
      },
    ],
    guideLinks: [
      { title: 'Jak wybrać drukarkę etykiet — poradnik kupującego', href: '/poradnik/jak-wybrac-drukarke-etykiet' },
      { title: 'Drukarki etykiet Zebra — przewodnik po seriach ZD i ZT', href: '/poradnik/drukarki-etykiet-zebra-przewodnik' },
      { title: 'Jak wybrać terminal mobilny — poradnik kupującego', href: '/poradnik/jak-wybrac-terminal-mobilny' },
      { title: 'Zebra vs Honeywell — porównanie terminali mobilnych', href: '/poradnik/zebra-vs-honeywell-terminale-mobilne' },
      { title: 'Top 10 terminali mobilnych 2026 — ranking z cenami', href: '/poradnik/top-10-terminali-mobilnych-2026' },
      { title: 'Drukarka termiczna vs termotransferowa — porównanie', href: '/poradnik/drukarka-termiczna-vs-termotransferowa' },
    ],
  },
}

// ============================================
// COMPONENT
// ============================================

interface BrandPillarPageProps {
  manufacturerId: string
}

export default function BrandPillarPage({ manufacturerId }: BrandPillarPageProps) {
  const manufacturer = getManufacturerById(manufacturerId)!
  const data = brandPillarData[manufacturerId]!
  const allProducts = getProductsByManufacturer(manufacturerId)
  const brandCats = getBrandCategoriesForManufacturer(manufacturerId)

  // Category counts (dynamic)
  const categoryCounts: Record<string, number> = {}
  for (const cat of categories) {
    categoryCounts[cat.id] = allProducts.filter(p => p.categoryId === cat.id).length
  }

  // Device products (exclude accessories and consumables for total count)
  const deviceCount = allProducts.filter(
    p => p.categoryId !== 'akcesoria' && p.categoryId !== 'materialy-eksploatacyjne'
  ).length

  // Featured products
  const featuredProducts = data.featuredSlugs
    .map(slug => allProducts.find(p => p.slug === slug))
    .filter((p): p is Product => !!p)

  // Schema JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: manufacturer.name + ' Technologies', item: `https://www.takma.com.pl/${manufacturer.slug}` },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Produkty ${manufacturer.name} Technologies`,
    description: data.heroText,
    url: `https://www.takma.com.pl/${manufacturer.slug}`,
    numberOfItems: allProducts.length,
    dateModified: '2026-03-12',
    provider: {
      '@type': 'Organization',
      name: 'TAKMA',
      url: 'https://www.takma.com.pl',
    },
    brand: {
      '@type': 'Brand',
      name: `${manufacturer.name} Technologies`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: featuredProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/produkt/${p.slug}`,
      })),
    },
  }

  const faqJsonLd = data.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  } : null

  const speakableJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Produkty ${manufacturer.name} Technologies`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.hero-text', '.about-section', '.faq-section'],
    },
    url: `https://www.takma.com.pl/${manufacturer.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <div className="container-main py-8 lg:py-12">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link>
          <ChevronRightIcon size={14} className="flex-shrink-0 text-gray-400" />
          <span className="text-gray-900 font-medium">{manufacturer.name} Technologies</span>
        </nav>

        {/* H1 + hero */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{manufacturer.name} Technologies</h1>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100">
              Autoryzowany partner
            </span>
          </div>
          <p className="hero-text text-gray-600 leading-relaxed max-w-3xl">{data.heroText}</p>
          <p className="text-gray-400 text-sm mt-3">{allProducts.length} produktów w ofercie</p>
        </div>

        {/* Category tiles */}
        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Kategorie produktów {manufacturer.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.categoryTiles.map(tile => {
              const count = categoryCounts[tile.categoryId] || 0
              if (count === 0) return null
              return (
                <Link
                  key={tile.categoryId}
                  href={tile.href}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {tile.name}
                    </h3>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{count}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{tile.description}</p>
                  <div className="flex items-center gap-1 text-primary-600 text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Zobacz <ArrowRightIcon size={14} />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Featured products */}
        {featuredProducts.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Popularne produkty {manufacturer.name}</h2>
            </div>
            <ProductGrid products={featuredProducts} />
          </section>
        )}

        {/* About section */}
        <section className="about-section mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{data.aboutHeading}</h2>
          <div className="prose prose-gray max-w-none">
            {data.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0 sm:text-justify">
                <LinkedText text={para} />
              </p>
            ))}
          </div>
        </section>

        {/* Why buy from TAKMA */}
        <section className="mb-14">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">
            Dlaczego kupić {manufacturer.name} od TAKMA?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.whyBuyItems.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand category quick links */}
        {brandCats.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Strony produktowe {manufacturer.name}</h2>
            <div className="flex flex-wrap gap-2">
              {brandCats.map(bc => (
                <Link
                  key={bc.id}
                  href={`/${bc.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  {bc.name}
                  <ArrowRightIcon size={12} className="text-gray-400" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {data.faq.length > 0 && (
          <section className="faq-section mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Często zadawane pytania — {manufacturer.name}</h2>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base pr-4">{item.question}</h3>
                    <ChevronRightIcon
                      size={16}
                      className="flex-shrink-0 text-gray-400 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    <LinkedText text={item.answer} />
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Guide links */}
        {data.guideLinks.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Poradniki i porównania</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.guideLinks.map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">{guide.title}</span>
                  <ArrowRightIcon size={14} className="flex-shrink-0 text-gray-400 ml-auto" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cross-brand links */}
        <section className="mb-14">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">Inne marki w ofercie TAKMA</h2>
            <div className="flex flex-wrap gap-2">
              {['Honeywell', 'Datalogic', 'Newland', 'TSC'].map(brand => (
                <span
                  key={brand}
                  className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">Strony producentów Honeywell, Datalogic i Newland — wkrótce.</p>
          </div>
        </section>

        {/* Service banner */}
        <ServiceBanner categoryId="drukarki-etykiet" manufacturerId={manufacturerId} />

      </div>
    </>
  )
}
