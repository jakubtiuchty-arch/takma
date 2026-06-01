import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSubcategoryBySlug } from '@/data/products'
import { transferRibbonSeries, type RibbonSeries, type RibbonCategory } from '@/data/transfer-ribbon-series'
import {
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@/components/ui/Icons'

const SLUG = 'tasmy-termotransferowe'
const siteUrl = 'https://www.takma.com.pl'

// Grupowanie 12 modeli — hierarchia UX (bestseller > woskowe i wax/resin > resin i niche)
const bestsellerSlugs = ['2300-wax', '3200-wax-resin', '5095-resin']
const waxAndWaxResinSlugs = ['1600-wax', '2100-wax', '5319-wax', '3300-wax-resin', '3400-wax-resin']
const resinAndNicheSlugs = ['5555-wax-resin', '4800-resin', '5100-resin', '8000-chemresist']

function seriesBySlug(slug: string): RibbonSeries | undefined {
  return transferRibbonSeries.find(s => s.slug === slug)
}

function categoryLabel(c: RibbonCategory): string {
  return c === 'woskowe' ? 'Woskowa'
    : c === 'woskowo-zywiczne' ? 'Woskowo-żywiczna'
    : 'Żywiczna'
}

function positioningLabel(p: RibbonSeries['positioning']): string {
  return p === 'bestseller' ? 'Bestseller'
    : p === 'premium' ? 'Premium'
    : p === 'specjalistyczna' ? 'Specjalistyczna'
    : p === 'ekonomiczna' ? 'Ekonomiczna'
    : 'Standard'
}

/** Pojedynczy kafelek modelu taśmy — dwa rozmiary (large dla bestsellerów). */
function BannerCard({
  series: s,
  size = 'normal',
}: {
  series: RibbonSeries
  size?: 'normal' | 'large'
}) {
  const isLarge = size === 'large'
  const hasImage = Boolean(s.heroImage)
  return (
    <Link
      href={`/tasmy-termotransferowe/serie/${s.slug}`}
      className={`group relative overflow-hidden bg-white border border-slate-200 rounded-xl hover:border-[#A8F000] hover:shadow-lg transition-all flex flex-col ${
        isLarge ? 'p-7' : 'p-5'
      }`}
    >
      {hasImage ? (
        // Tapeta — obraz wypełnia całą kartę (bg-cover bg-center). Półprzezroczysty biały
        // overlay (75%) nad obrazem zapewnia czytelność tekstu pełnej szerokości karty.
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url('${s.heroImage}')`, backgroundPosition: s.heroImagePosition ?? '50% center' }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-white/75"
          />
        </>
      ) : (
        // Bez obrazu — subtelny radial gradient z prawego-dolnego rogu z accent koloru serii
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse 65% 35% at bottom right, ${s.accent}55 0%, ${s.accent}1A 40%, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Chip + strzałka */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {isLarge ? 'Bestseller' : positioningLabel(s.positioning)}
          </span>
          <ArrowRightIcon
            size={isLarge ? 18 : 16}
            className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Title */}
        <h4 className={`font-bold text-gray-900 leading-tight mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {s.title}
        </h4>

        {/* Tagline */}
        <p className={`text-gray-700 leading-snug flex-1 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {s.tagline}
        </p>

        {/* Cena od */}
        <p className={`mt-3 text-gray-500 ${isLarge ? 'text-sm' : 'text-xs'}`}>
          od <span className="font-semibold text-gray-900">{s.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</span> netto
        </p>
      </div>
    </Link>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)!
  return {
    title: sub.seoTitle,
    description: sub.seoDescription,
    openGraph: {
      title: sub.seoTitle,
      description: sub.seoDescription,
      url: `${siteUrl}/${sub.slug}`,
    },
    alternates: { canonical: `${siteUrl}/${sub.slug}` },
  }
}

export default function Page() {
  const sub = getSubcategoryBySlug(SLUG)!

  const totalVariants = transferRibbonSeries
    .map(s => 0) // placeholder; faktyczna liczba w opisie statycznym (140) — wyciągamy z products
    .reduce((a, b) => a + b, 140)

  // Schema JSON-LD: CollectionPage + ItemList modeli
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: sub.seoTitle,
    description: sub.seoDescription,
    url: `${siteUrl}/${sub.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: transferRibbonSeries.length,
      itemListElement: transferRibbonSeries.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/tasmy-termotransferowe/serie/${s.slug}`,
        name: `Taśma termotransferowa Zebra ${s.title}`,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: sub.name, item: `${siteUrl}/${sub.slug}` },
    ],
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO z obrazem — kontener obrazu po prawej (3/5 mobile, 1/2 desktop). Gradient
          od lewej pełen dark do 50% (ukrywa krawędź kontenera), potem fade do transparent. */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-3/4 lg:w-2/3 pointer-events-none">
          <Image
            src="/images/tasmy-hero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 75vw, 66vw"
            className="object-cover opacity-80"
            style={{ objectPosition: 'right center' }}
            aria-hidden="true"
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-slate-950 to-transparent"
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(245,158,11,0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.25), transparent 55%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Breadcrumbs (jasne na hero) */}
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white transition-colors whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="flex-shrink-0 text-slate-500" />
            <span className="text-white font-medium whitespace-nowrap">{sub.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            Taśmy termotransferowe Zebra
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mb-6">
            Oryginalne taśmy barwiące do druku termotransferowego na etykietach papierowych i foliowych. <strong className="text-white">12 modeli Zebra</strong>: woskowe do papieru, woskowo-żywiczne dla zastosowań wymagających odporności na tarcie, żywiczne do folii syntetycznych i warunków ekstremalnych.
          </p>

          {/* USP badges */}
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> 12 modeli, 140 wariantów
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Polecane przez Zebra
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Doradztwo techniczne
            </span>
          </div>

          <a href="#modele" className="inline-flex items-center gap-1.5 mt-8 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            Zobacz wszystkie modele <ArrowRightIcon size={14} />
          </a>
        </div>
      </section>

      {/* MODELS BANNERS */}
      <section id="modele" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Wybierz model taśmy
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Każdy model Zebra ma inne przeznaczenie. Kliknij wybrany, żeby zobaczyć pełną specyfikację, warianty rozmiarowe, kompatybilne drukarki i etykiety, do których jest polecany.
          </p>
        </div>

        {/* ── SEKCJA 1: Najczęściej wybierane (3 bestsellery) ── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Najczęściej wybierane
          </h3>
          {/* max-w-4xl (896 px) — 3 karty po ~290 px, identyczna szerokość jak karta 5555
              w 4-kolumnowym gridzie pozostałych sekcji. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {bestsellerSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} />
            })}
          </div>
        </div>

        {/* ── SEKCJA 2: Woskowe i woskowo-żywiczne (5 kart) ── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Woskowe i woskowo-żywiczne — papier i mieszane zastosowania
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {waxAndWaxResinSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} />
            })}
          </div>
        </div>

        {/* ── SEKCJA 3: Żywiczne i specjalistyczne (4 karty) ── */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Żywiczne i specjalistyczne — folia, chemia, ekstremalne warunki
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resinAndNicheSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} />
            })}
          </div>
        </div>
      </section>

      {/* RICH CONTENT — przewodnik (bez filtrów ani gridu produktów; filtry przeniesione do /serie/[slug]) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <CategoryGuide />
      </div>
    </main>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
 *  RICH CONTENT — przewodnik po taśmach termotransferowych
 *  SEO/AEO/GEO: definicje, porównania, decyzja zakupowa, FAQ
 * ───────────────────────────────────────────────────────────────────────── */

function CategoryGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Co to jest taśma termotransferowa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Taśma termotransferowa (taśma barwiąca) to taśma folii poliestrowej pokryta woskiem, żywicą lub mieszanką wosk-żywica. Pod wpływem ciepła głowicy drukującej barwnik przenosi się na etykietę, tworząc trwały nadruk. Taśmy są wymagane w technologii druku termotransferowego (TT) — w odróżnieniu od druku termicznego bezpośredniego (DT), który drukuje bez taśmy na specjalnym papierze termoczułym. Trwałość nadruku termotransferowego: lata, odporność na UV, wilgoć i temperatury do +180°C (taśma żywiczna).',
        },
      },
      {
        '@type': 'Question',
        name: 'Woskowa, woskowo-żywiczna i żywiczna — czym się różnią taśmy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trzy kategorie różnią się składem powłoki barwiącej i odpornością nadruku. Woskowe: najtańsze, do papierowych etykiet (powlekanych i niepowlekanych), nadruk standardowej odporności na tarcie — bestseller Zebra 2300 Wax. Woskowo-żywiczne: kombinacja — droższe od woskowych, ale lepsza odporność na ścieranie, wilgoć i ciepło, drukują też na niektórych foliach (polipropylen) — bestseller Zebra 3200 Wax/Resin. Żywiczne: najdroższe, ekstremalna odporność (chemikalia, UV, wysokie temperatury), wymagane do folii poliestrowych Z-Ultimate — standard Zebra 5095 Resin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Którą taśmę Zebra wybrać do mojego zastosowania?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zebra 2300 Wax — bestseller, papier ekonomiczny, magazyn, wysyłki, sprzedaż detaliczna. Zebra 2100 European Wax — chłodnia, mroźnia, papier premium z atestami. Zebra 3200 Wax/Resin — kompromis cena/jakość, handel z wymaganiami odpornościowymi, niektóre folie polipropylenowe. Zebra 3400 Wax/Resin — folia polietylenowa (kosmetyki), mróz z tarciem. Zebra 5095 Resin — wszystkie folie poliestrowe (Z-Ultimate), elektronika, oznaczenia mienia. Zebra 5100 Premium Resin — tabliczki znamionowe, UL/cUL, długoterminowa trwałość. Zebra 8000 ChemResist — chemia, paliwa, lotnictwo (ekstremalna odporność).',
        },
      },
      {
        '@type': 'Question',
        name: 'Skąd wiem, jaki rozmiar taśmy kupić?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Szerokość taśmy powinna być o 2–5 mm szersza niż etykieta — chroni głowicę przed bezpośrednim kontaktem z papierem. Np. do etykiety 102 mm wybierz taśmę 106 lub 110 mm. Długość taśmy zależy od drukarki: desktopowe biorą rolki 74 m (rdzeń 12 mm) lub 300 m, przemysłowe — 450 m, 600 m lub 900 m (rdzeń 25 mm = 1"). Sprawdź specyfikację drukarki — maksymalna średnica rolki taśmy (OD) i średnica rdzenia muszą być zgodne.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy moja drukarka Zebra obsługuje wszystkie taśmy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak — wszystkie taśmy Zebra mają nawój zewnętrzny (warstwa barwiąca na zewnętrznej stronie rolki), który jest standardem drukarek Zebra. Drukarki biurkowe (ZD220t, ZD230t, ZD411t, ZD421t, ZD611t) typowo używają rdzenia 12 mm / długości 74 m. Drukarki przemysłowe (ZT231, ZT411, ZT421, ZT510, ZT610, ZT620) — rdzeń 25 mm / długości 300–900 m. Ważne: drukarki tylko do druku termicznego bezpośredniego (np. ZD220d, ZD230d) NIE obsługują taśm — drukują bez taśmy na papierze termoczułym.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak dobrać taśmę do etykiety — papier czy folia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reguła kluczowa: papier → taśma woskowa (lub woskowo-żywiczna gdy wyższa odporność), folia → taśma żywiczna. Etykiety papierowe (Z-Perform 1000T, Z-Select 2000T) dobiera się z 2300 Wax (standard) lub 3200 Wax/Resin (premium). Folie polipropylenowe białe (PolyPro 3000T) — 3200 Wax/Resin standardowo. Folie polietylenowe (PolyE 3100T) — 3400 Wax/Resin. Folie poliestrowe (Z-Ultimate 3000T) — TYLKO 5095 Resin (wymóg Zebry — taśma woskowa nie zwiąże się z poliestrem). Mieszanie nieprawidłowo: nadruk schodzi palcem lub blaknie w godziny.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy taśma 2300 Wax wystarczy do mojego magazynu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'W zdecydowanej większości przypadków — tak. Zebra 2300 Wax to absolutny bestseller — najczęściej kupowana taśma w Polsce. Drukuje na większości papierowych etykiet (powlekanych i niepowlekanych) z prędkością do 304 mm/s (12 ips). Idealna do oznaczeń lokalizacyjnych, wysyłek kurierskich (DHL, DPD, InPost, GLS), kompletacji zamówień. Wymień na 2100 European Wax tylko gdy: drukujesz w chłodni/mroźni, potrzebujesz ostrzejszego nadruku kodów wysokiej rozdzielczości, prędkość druku >12 ips. Wymień na 3200 Wax/Resin gdy etykieta ma kontakt z wilgocią lub tarciem.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ile etykiet wydrukuje się z jednej rolki taśmy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wzór: liczba etykiet = (długość_rolki w mm − ~2000 mm strat) / (wysokość_etykiety + 3 mm odstępu). Np. rolka 450 m i etykieta 102×152 mm: (450 000 − 2000) / (152 + 3) = ~2890 etykiet. Rolka 300 m i etykieta 80 mm: (300 000 − 2000) / (80 + 3) = ~3590 etykiet. Praktyczny kalkulator dostępny na każdej stronie wariantu taśmy. Pamiętaj: jedna rolka taśmy wystarcza zwykle 1:1 do rolki etykiet — kupuj komplet (etykieta + taśma) o porównywalnej długości.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy oferujecie próbki taśm przed zakupem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak. W TAKMA pomagamy dobrać taśmę pod konkretną drukarkę i etykietę. Próbki taśmy + etykiety są darmowe dla klientów rozważających większe zamówienie (od kilku rolek). Doradzamy też w przypadku trudnych zastosowań — folie nietypowe, środowisko chemiczne, wymagania certyfikacyjne (UL, GHS, FDA). Skontaktuj się przez formularz lub telefon — w 1 dzień roboczy odpowiadamy z konkretną rekomendacją.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co oznacza nawój zewnętrzny i czy moja drukarka go obsługuje?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nawój zewnętrzny (warstwa barwiąca na zewnętrznej stronie rolki, ang. „Out-Side Coated" / OS) to standard producenta Zebra. Wszystkie drukarki Zebra obsługują go bez konfiguracji (rodziny ZD, ZT, ZD611, mobilne ZQ Linerless). Inne marki drukarek (niektóre starsze TSC, Citizen) używają nawoju wewnętrznego — wtedy trzeba przełączyć kierunek nawijania mechanicznie. Wszystkie taśmy Zebra w naszej ofercie mają nawój zewnętrzny.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy taśma 5095 Resin nadaje się do tabliczek znamionowych UL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, częściowo — 5095 Resin jest standardową taśmą dla etykiet poliestrowych Z-Ultimate 3000T (wymóg producenta). Do certyfikacji UL/cUL na sprzęcie elektrycznym (oznakowanie urządzeń AGD, transformatorów, paneli sterowania) lepszą opcją jest 5100 Premium Resin — ma oficjalną certyfikację UL/cUL i gwarantowaną czytelność 10+ lat. W aplikacjach lotniczych, wojskowych i chemicznych — 8000 ChemResist (najwyższa odporność na rozpuszczalniki i agresywne środowisko).',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy mogę używać taśmy żywicznej do papieru?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technicznie tak, ale nie jest to zalecane — to marnowanie pieniędzy. Taśmy żywiczne są 2–4× droższe od woskowych, a do druku na papierze nie dają wymiernie lepszej jakości. Ich przewaga (odporność chemiczna, UV, wysoka temperatura) jest niewidoczna na papierze. Wyjątek: jeśli używasz papieru w środowisku z agresywnymi chemikaliami lub ekstremalnymi temperaturami (>+100°C) — wtedy żywiczna może mieć sens. W zwykłym magazynie, sprzedaży detalicznej lub gastronomii — wybierz woskową lub woskowo-żywiczną.',
        },
      },
    ],
  }

  return (
    <div className="mt-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* H2: Co to jest taśma termotransferowa */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Co to jest taśma termotransferowa?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <p>
            Taśma termotransferowa (taśma barwiąca) to taśma folii poliestrowej pokryta woskiem, żywicą lub mieszanką wosk-żywica. Pod wpływem ciepła głowicy drukującej barwnik przenosi się z taśmy na etykietę, tworząc <strong>trwały nadruk</strong>. Jest niezbędnym składnikiem druku termotransferowego (TT) — w odróżnieniu od druku termicznego bezpośredniego (DT), który drukuje bez taśmy na specjalnym papierze termoczułym.
          </p>
          <p>
            Druk termotransferowy daje <strong>długą trwałość nadruku</strong>: lata wewnątrz pomieszczeń, odporność na promieniowanie UV, wilgoć i temperatury do +180°C (taśmy żywiczne). Wadą — wyższy koszt użytkowania niż druk termiczny (trzeba kupić zarówno taśmę, jak i etykietę). Dlatego TT wybierz do: <Link href="/etykiety-termotransferowe-zebra/foliowe" className="text-primary-600 hover:underline">oznaczeń elektroniki i mienia</Link>, <Link href="/etykiety-termotransferowe-zebra/specjalne" className="text-primary-600 hover:underline">tabliczek znamionowych</Link>, etykiet zewnętrznych i wszystkich zastosowań wymagających trwałości powyżej 2 lat.
          </p>
        </div>
      </section>

      {/* H2: Trzy kategorie taśm — porównanie */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Woskowa, woskowo-żywiczna czy żywiczna — kiedy wybrać każdą?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Kryterium</th>
                <th className="text-left p-3 font-semibold text-gray-900">Woskowa</th>
                <th className="text-left p-3 font-semibold text-gray-900">Woskowo-żywiczna</th>
                <th className="text-left p-3 font-semibold text-gray-900">Żywiczna</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-medium">Cena rolki</td>
                <td className="p-3 text-emerald-700">Najniższa</td>
                <td className="p-3">Średnia</td>
                <td className="p-3">Najwyższa</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Prędkość druku</td>
                <td className="p-3">Do 304 mm/s (12 ips)</td>
                <td className="p-3 text-emerald-700">Do 304 mm/s (12 ips)</td>
                <td className="p-3">Do 254 mm/s (10 ips)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Odporność na tarcie</td>
                <td className="p-3">Niska</td>
                <td className="p-3">Średnia</td>
                <td className="p-3 text-emerald-700">Wysoka</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Odporność chemiczna</td>
                <td className="p-3">Niska</td>
                <td className="p-3">Średnia</td>
                <td className="p-3 text-emerald-700">Wysoka / ekstremalna</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Odporność na temperaturę</td>
                <td className="p-3">Do +60°C</td>
                <td className="p-3">Do +120°C</td>
                <td className="p-3 text-emerald-700">Do +180°C</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Polecana do etykiet</td>
                <td className="p-3">Papier niepowlekany i powlekany</td>
                <td className="p-3">Papier premium, niektóre folie PP/PE</td>
                <td className="p-3">Folie poliestrowe (PET), poliolefina</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Bestseller</td>
                <td className="p-3">Zebra 2300 Wax</td>
                <td className="p-3">Zebra 3200 Wax/Resin</td>
                <td className="p-3">Zebra 5095 Resin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: 12 modeli przegląd */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          12 modeli Zebra — przegląd
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Model</th>
                <th className="text-left p-3 font-semibold text-gray-900">Kategoria</th>
                <th className="text-left p-3 font-semibold text-gray-900">UL/cUL</th>
                <th className="text-left p-3 font-semibold text-gray-900">Odp. chemiczna</th>
                <th className="text-left p-3 font-semibold text-gray-900">Odp. UV</th>
                <th className="text-left p-3 font-semibold text-gray-900">Polecana do</th>
                <th className="text-left p-3 font-semibold text-gray-900">Od (zł)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {transferRibbonSeries.map(s => {
                const primaryLabels = s.recommendedForLabels
                  .filter(l => l.role === 'primary')
                  .slice(0, 2)
                  .map(l => l.seriesName)
                  .join(', ') || '—'
                return (
                  <tr key={s.slug} className="hover:bg-slate-50">
                    <td className="p-3 font-medium">
                      <Link href={`/tasmy-termotransferowe/serie/${s.slug}`} className="text-primary-600 hover:underline">
                        {s.title}
                      </Link>
                    </td>
                    <td className="p-3 text-gray-600">{categoryLabel(s.category)}</td>
                    <td className="p-3 text-gray-600">{s.ulCertified ? 'Tak' : '—'}</td>
                    <td className="p-3 text-gray-600 capitalize">{s.chemicalResistance}</td>
                    <td className="p-3 text-gray-600 capitalize">{s.uvResistance}</td>
                    <td className="p-3 text-gray-600">{primaryLabels}</td>
                    <td className="p-3 font-medium text-gray-900">{s.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: Jak dobrać do drukarki */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Jak dobrać taśmę do drukarki?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Sprawdź czy drukarka obsługuje druk termotransferowy</strong> — modele oznaczone literką „t&rdquo; w nazwie (ZD220t, ZD230t, ZD411t, ZT411, ZT421). Drukarki tylko DT (ZD220d, ZD230d) NIE biorą taśm.</li>
            <li><strong>Nawój zewnętrzny</strong> — wszystkie taśmy Zebra mają warstwę barwiącą na zewnętrznej stronie rolki (standard producenta). Pasują do wszystkich drukarek Zebra bez konfiguracji.</li>
            <li><strong>Średnica rdzenia (gilzy)</strong> — drukarki biurkowe (rodzina ZD) typowo biorą rolki z rdzeniem 12 mm (1/2&Prime;). Drukarki średniej i wysokiej wydajności — rdzeń 25 mm (1&Prime;). Sprawdź specyfikację drukarki.</li>
            <li><strong>Maksymalna długość rolki taśmy</strong> — biurkowe: 74 m. Średniej wydajności (ZD611t, ZT231): do 300 m. Przemysłowe (ZT411, ZT421, ZT510): do 450 m, 600 m lub 900 m.</li>
            <li><strong>Szerokość taśmy</strong> — powinna być o 2–5 mm szersza niż etykieta. Np. do etykiety 102 mm wybierz taśmę 110 mm. Chroni głowicę przed bezpośrednim kontaktem z papierem.</li>
            <li><strong>Prędkość druku</strong> — taśmy woskowe i woskowo-żywiczne Zebra drukują do 304 mm/s (12 ips). Taśmy żywiczne — do 254 mm/s (10 ips) z uwagi na czas potrzebny na właściwe przyleganie żywicy.</li>
          </ol>
        </div>
      </section>

      {/* H2: Jak dobrać do etykiety */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Jak dobrać taśmę do etykiety?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <p>
            Najważniejsza zasada: <strong>papier → taśma woskowa lub woskowo-żywiczna, folia → taśma żywiczna</strong>. Mieszanie nieprawidłowo skutkuje nadrukiem, który schodzi palcem lub blaknie w ciągu godzin.
          </p>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Materiał etykiety</th>
                <th className="text-left p-3 font-semibold text-gray-900">Polecana taśma</th>
                <th className="text-left p-3 font-semibold text-gray-900">Alternatywa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-medium">Papier niepowlekany (Z-Perform 1000T)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/2300-wax" className="text-primary-600 hover:underline">Zebra 2300 Wax</Link></td>
                <td className="p-3 text-gray-600">Zebra 1600 Wax (budżetowo)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Papier powlekany (Z-Select 2000T)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/2300-wax" className="text-primary-600 hover:underline">Zebra 2300 Wax</Link></td>
                <td className="p-3 text-gray-600">Zebra 3200 Wax/Resin (wyższa odporność)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Papier z atestem żywności (8000T All-Temp)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/2100-wax" className="text-primary-600 hover:underline">Zebra 2100 European Wax</Link></td>
                <td className="p-3 text-gray-600">Zebra 3400 Wax/Resin (mróz + tarcie)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Polipropylen biały (PolyPro 3000T)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/3200-wax-resin" className="text-primary-600 hover:underline">Zebra 3200 Wax/Resin</Link></td>
                <td className="p-3 text-gray-600">Zebra 5095 Resin (zewnątrz / UV)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Polietylen (PolyE 3100T)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/3400-wax-resin" className="text-primary-600 hover:underline">Zebra 3400 Wax/Resin</Link></td>
                <td className="p-3 text-gray-600">Zebra 5095 Resin (chemia)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Poliester biały / silver (Z-Ultimate 3000T)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/5095-resin" className="text-primary-600 hover:underline">Zebra 5095 Resin</Link></td>
                <td className="p-3 text-gray-600">Zebra 5100 Premium Resin (UL, 10+ lat)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Plomby destruktywne (8000T VOID / Z-Destruct)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/4800-resin" className="text-primary-600 hover:underline">Zebra 4800 Resin</Link></td>
                <td className="p-3 text-gray-600">Zebra 8000 ChemResist (chemia)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Krioprzechowywanie (8100T CryoCool)</td>
                <td className="p-3"><Link href="/tasmy-termotransferowe/serie/5095-resin" className="text-primary-600 hover:underline">Zebra 5095 Resin</Link></td>
                <td className="p-3 text-gray-600">Zebra 5100 Premium Resin (biobanki)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: FAQ */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((q, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-gray-900 flex-1">{q.name}</span>
                <ChevronRightIcon
                  size={20}
                  className="text-slate-400 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform"
                />
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{q.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
