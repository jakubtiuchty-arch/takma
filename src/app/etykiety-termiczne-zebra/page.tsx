import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSubcategoryBySlug } from '@/data/products'
import { thermalLabelSeries, type ThermalLabelSeries } from '@/data/thermal-label-series'
import {
  ChevronRightIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@/components/ui/Icons'
import InfoTooltip from '@/components/ui/InfoTooltip'
import CommonDefinitionsSchema from '@/components/schemas/CommonDefinitions'
import { stripMarkdown } from '@/lib/strip-markdown'

const SLUG = 'etykiety-termiczne-zebra'
const siteUrl = 'https://www.takma.com.pl'

// Grupowanie serii — kolejność wierszy: budżetowe → bestsellery → removable → specjalistyczne
const budgetSlugs = ['z-essentials-500d', 'z-essentials-1000d']
const bestsellerSlugs = ['z-perform-1000d', 'z-select-2000d']
const removableSlugs = ['z-select-2000d-removable', 'z-perform-1000d-removable']
const specialistSlugs = [
  'polypro-4000d',
  'z-perform-1000d-110-tag',
  '8000d-jewelry',
  // ZeroLiner (linerless) w dolnym wierszu — siatka 3-kolumnowa
  'zeroliner-2000d',
  'zeroliner-1100d',
  'zeroliner-4500d',
]

const cardBackgroundImages: Partial<Record<string, string>> = {
  'z-perform-1000d': '/images/zebra-z-perform-1000d-kafelek-v2.webp',
  'z-select-2000d': '/images/zebra-z-select-2000d-kafelek-v3.webp',
  'polypro-4000d': '/images/zebra-polypro-4000d-kafelek-v2.webp',
  'z-select-2000d-removable': '/images/zebra-z-select-2000d-removable-kafelek.webp',
  'z-perform-1000d-removable': '/images/zebra-z-perform-1000d-removable-kafelek.webp',
  'z-perform-1000d-110-tag': '/images/zebra-z-perform-1000d-110-tag-kafelek.webp',
  'z-essentials-1000d': '/images/zebra-z-essentials-1000d-kafelek.webp',
  'z-essentials-500d': '/images/zebra-z-essentials-500d-kafelek.webp',
  '8000d-jewelry': '/images/zebra-8000d-jewelry-kafelek.webp',
}

function seriesBySlug(slug: string) {
  return thermalLabelSeries.find(s => s.slug === slug)
}

/** Pojedynczy kafelek serii — dwa rozmiary (large dla bestsellerów). */
function BannerCard({
  series: s,
  size = 'normal',
}: {
  series: ThermalLabelSeries
  size?: 'normal' | 'large'
}) {
  const isLarge = size === 'large'
  const cardBackgroundImage = cardBackgroundImages[s.slug]
  return (
    <Link
      href={`/etykiety-termiczne-zebra/serie/${s.slug}`}
      className={`group relative overflow-hidden bg-white border border-slate-200 rounded-xl hover:border-[#A8F000] hover:shadow-lg transition-all flex flex-col ${
        isLarge ? 'p-7' : 'p-5'
      }`}
    >
      {cardBackgroundImage ? (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url('${cardBackgroundImage}')` }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.93) 52%, rgba(255,255,255,0.66) 100%)',
            }}
          />
        </>
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 65% 35% at bottom right, rgba(168,240,0,0.32) 0%, rgba(168,240,0,0.10) 40%, transparent 80%)',
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Chip + strzałka */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {isLarge ? 'Bestseller' : s.positioning}
          </span>
          <ArrowRightIcon
            size={isLarge ? 18 : 16}
            className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Ostrzeżenie linerless — wymaga specjalnej drukarki */}
        {s.positioning === 'linerless' && !isLarge && (
          <div className="mb-3 inline-flex items-center gap-1.5 self-start bg-amber-50 border border-amber-200 text-amber-900 rounded-lg pl-2.5 pr-1.5 py-1 text-[11px] font-semibold">
            <span aria-hidden className="text-amber-600 text-sm leading-none">⚠</span>
            <span>Wymaga drukarki linerless</span>
            <InfoTooltip
              size={13}
              text="Etykieta bez papierowego podkładu — wymaga drukarki ze specjalnym, silikonowym wałkiem. Zebra: ZD611/ZD621 Linerless, ZT411 z opcją, mobilne ZQ Linerless. Zwykła drukarka zniszczy się od kleju."
              ariaLabel="Wyjaśnienie technologii linerless"
              className="inline-flex items-center justify-center text-amber-700 hover:text-amber-900 focus:text-amber-900 focus:outline-none rounded-full transition-colors"
            />
          </div>
        )}

        {/* Title */}
        <h4 className={`font-bold text-gray-900 leading-tight mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {s.title}
        </h4>

        {/* Tagline */}
        <p className={`text-gray-700 leading-snug flex-1 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {stripMarkdown(s.tagline)}
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
      images: [{ url: `${siteUrl}/images/etykiety-termiczne-hero.png`, width: 1672, height: 941, alt: 'Etykiety termiczne Zebra' }],
    },
    alternates: { canonical: `${siteUrl}/${sub.slug}` },
  }
}

export default function Page() {
  const sub = getSubcategoryBySlug(SLUG)!

  // Schema JSON-LD: CollectionPage + ItemList serii
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: sub.seoTitle,
    description: sub.seoDescription,
    url: `${siteUrl}/${sub.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: thermalLabelSeries.length,
      itemListElement: thermalLabelSeries.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/etykiety-termiczne-zebra/serie/${s.slug}`,
        name: `Etykiety termiczne Zebra ${s.title}`,
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

  // TechArticle — sygnał treści technicznej dla AI engines (parytet z etykietami TT) + dateModified.
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Etykiety termiczne Zebra — przewodnik wyboru (druk bezpośredni, bez taśmy)',
    description: sub.seoDescription,
    url: `${siteUrl}/${sub.slug}`,
    inLanguage: 'pl-PL',
    proficiencyLevel: 'Expert',
    about: [
      { '@type': 'Thing', name: 'Etykiety termiczne' },
      { '@type': 'Thing', name: 'Druk termiczny bezpośredni' },
      { '@type': 'Thing', name: 'Papier termoczuły' },
      { '@type': 'Thing', name: 'Etykiety linerless' },
      { '@type': 'Thing', name: 'Etykiety wysyłkowe' },
      { '@type': 'Thing', name: 'Atesty żywnościowe BfR XIV' },
    ],
    publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Kierownicy magazynów, działy logistyki i e-commerce, retail, specjaliści ds. zakupów',
    },
    datePublished: '2026-05-21',
    dateModified: '2026-06-02',
  }

  // HowTo — odwzorowuje sekcję "Jak dobrać etykietę termiczną do drukarki Zebra?" (widoczną na stronie).
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Jak dobrać etykietę termiczną do drukarki Zebra',
    description: 'Pięć kroków doboru etykiety termicznej: szerokość druku, średnica gilzy, średnica zewnętrzna rolki, wymóg druku bez podkładu i technologia (bezpośrednia vs termotransfer).',
    inLanguage: 'pl-PL',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Sprawdź szerokość druku drukarki', text: 'Etykieta nie może być szersza niż maksymalna szerokość nośnika obsługiwana przez głowicę (np. ZD230d max 104 mm, ZT411 max 114 mm).' },
      { '@type': 'HowToStep', position: 2, name: 'Średnica gilzy (rdzeń)', text: 'Typowo 19 mm (3/4″), 25 mm (1″) lub 76 mm (3″). Drukarki biurkowe przyjmują 19/25 mm, klasy średniej i przemysłowe także 76 mm.' },
      { '@type': 'HowToStep', position: 3, name: 'Maksymalna średnica zewnętrzna rolki', text: 'Decyduje, ile materiału się zmieści. Drukarki biurkowe ok. 127 mm, przemysłowe nawet 203 mm.' },
      { '@type': 'HowToStep', position: 4, name: 'Sprawdź wymóg druku bez podkładu', text: 'Etykiety bez podkładu (linerless) wymagają specjalnego, silikonowego wałka. Zwykły wałek ulegnie zniszczeniu przy materiale bez podkładu.' },
      { '@type': 'HowToStep', position: 5, name: 'Technologia druku', text: 'Etykiety termiczne działają w drukarkach do druku bezpośredniego i kombinowanych. Drukarki wyłącznie termotransferowe nie zadrukują etykiet termicznych.' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <CommonDefinitionsSchema />

      {/* HERO */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Obraz po prawej stronie hero — ten sam co w etykietach termotransferowych */}
        <div className="absolute right-0 top-0 bottom-0 w-3/5 lg:w-1/2 pointer-events-none">
          <Image
            src="/images/hero-etykiety-termotransfer.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 50vw"
            className="object-cover object-right"
            aria-hidden="true"
          />
        </div>

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
            Etykiety termiczne Zebra
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mb-6">
            Oryginalne etykiety do druku termicznego bezpośredniego — bez taśmy barwiącej, niższy koszt eksploatacji. <strong className="text-white">12 serii Zebra</strong>: papierowe powlekane i ekonomiczne, syntetyczne wodoodporne, bez podkładu (linerless) oraz z klejem zdejmowalnym.
          </p>

          {/* USP badges */}
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> 12 serii, ponad 290 wariantów
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Atesty BfR XIV, FDA, ISEGA
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Autoryzowany partner Zebra
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Doradztwo techniczne i próbki
            </span>
          </div>

          <a href="#serie" className="inline-flex items-center gap-1.5 mt-8 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            Zobacz wszystkie serie <ArrowRightIcon size={14} />
          </a>
        </div>
      </section>

      {/* SERIES BANNERS */}
      <section id="serie" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Wybierz serię etykiet
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Każda seria Zebra ma inne przeznaczenie. Kliknij wybraną żeby zobaczyć pełną specyfikację, warianty rozmiarowe i porównanie z innymi seriami.
          </p>
        </div>

        {/* ── SEKCJA 1: Budżetowe (najniższy koszt) ── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Budżetowe — najniższy koszt
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {budgetSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} />
            })}
          </div>
        </div>

        {/* ── SEKCJA 2: Bestsellery (najczęściej wybierane, 2 duże karty) ── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Bestsellery — najczęściej wybierane
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestsellerSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} size="large" />
            })}
          </div>
        </div>

        {/* ── SEKCJA 3: Klej zdejmowalny (removable) ── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Klej zdejmowalny (removable)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {removableSlugs.map(slug => {
              const s = seriesBySlug(slug)
              if (!s) return null
              return <BannerCard key={s.slug} series={s} />
            })}
          </div>
        </div>

        {/* ── SEKCJA 4: Specjalistyczne (wodoodporne, linerless, dedykowane) ── */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Specjalistyczne — gdy zwykły papier nie wystarcza
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialistSlugs.map(slug => {
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
 *  RICH CONTENT — przewodnik po etykietach termicznych
 *  SEO/AEO: definicje, porównania, decyzja zakupowa, FAQ
 * ───────────────────────────────────────────────────────────────────────── */

function CategoryGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Czym różni się druk termiczny bezpośredni od termotransferowego?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Druk termiczny bezpośredni wykorzystuje papier termoczuły — obraz powstaje pod wpływem ciepła głowicy, bez taśmy barwiącej. Nadruk z czasem blaknie (do 12-24 miesięcy wewnątrz pomieszczeń). Druk termotransferowy wymaga taśmy barwiącej (woskowej, woskowo-żywicznej lub żywicznej) — nadruk jest trwały (lata, także na zewnątrz), ale koszt eksploatacji jest wyższy. Druk bezpośredni wybierz do etykiet wysyłkowych, cenowych i krótkoterminowych; termotransfer do oznaczeń trwałych, elektroniki, oznaczeń mienia i znaków magazynowych.',
        },
      },
      {
        '@type': 'Question',
        name: 'Która seria etykiet termicznych Zebra jest najlepsza dla mojego zastosowania?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Z-Perform 1000D — najtańsza, wystarcza w większości magazynów, do wysyłek InPost/DPD/DHL i kompletacji. Z-Select 2000D — powlekana z najwyższej półki, lepszy kontrast kodów, atesty żywnościowe (BfR XIV, FDA), do handlu i ochrony zdrowia. PolyPro 4000D — wodoodporna folia polipropylenowa, do chłodni, mroźni i zastosowań na zewnątrz. ZeroLiner — bez podkładu (linerless), 2× więcej etykiet na rolce, zero odpadu. Wersje z klejem zdejmowalnym (Removable) — do ekspozycji w sklepie i etykiet tymczasowych. 8000D Jewelry — do biżuterii, ze skrzydełkami.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy etykiety termiczne wymagają taśmy barwiącej?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nie. Etykiety termiczne drukują BEZ taśmy — nadruk powstaje bezpośrednio na papierze termoczułym pod wpływem ciepła głowicy. To główna zaleta wobec termotransferu: niższy koszt eksploatacji i mniej części zużywających się w drukarce. Taśma barwiąca jest potrzebna tylko do etykiet termotransferowych (np. Z-Ultimate 3000T).',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy mogę używać etykiet termicznych do żywności?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak — serie Z-Select 2000D i Z-Perform 1000D mają oficjalne atesty żywnościowe Zebra: BfR XIV (Niemcy), FDA 175.105 (USA), ISEGA (UE) oraz zgodność z EC 1935/2004 i EU 10/2011. Klej jest bez BPA i bez lateksu. Z-Select 2000D — żywność wilgotna i tłusta (poprzez funkcjonalną barierę). Z-Perform 1000D — żywność sucha i wilgotna. Nadają się do piekarni, masarni, gastronomii i sklepów ze świeżą żywnością.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy etykiety termiczne nadają się do mrożonek i chłodni?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, ale wybierz odpowiednią serię. Z-Select 2000D w wariancie do niskich temperatur (All-Temp) — klej zachowuje przyczepność do -40°C, minimalna temperatura naklejania 0°C. Z-Perform 1000D — naklejanie od 0°C, praca w -20°C. PolyPro 4000D — folia odporna na wilgoć (skropliny po wyjęciu z chłodni). Nie używaj zwykłego Z-Perform 1000D do naklejania bezpośrednio na zamrożone produkty — wybierz wariant All-Temp lub Z-Select 2000D.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czym jest etykieta linerless (bez podkładu) i czy się opłaca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Etykieta bez podkładu (linerless) nie ma papierowego nośnika — nawinięta jest bezpośrednio na siebie, z silikonową warstwą zapobiegającą sklejaniu. Zalety: 2× więcej etykiet na rolce (rzadsza wymiana), zero odpadu papierowego (ekologia, niższe koszty utylizacji), mniej miejsca w magazynie. Wada: wymaga drukarki ze specjalnym, silikonowym wałkiem i opcjonalnie obcinakiem — nie każda drukarka to obsługuje. Polecane do sklepów internetowych, paczek i sortowni. Serie Zebra: ZeroLiner 1100D, 2000D, 4500D.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do jakich drukarek Zebra pasują etykiety termiczne?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wszystkie etykiety termiczne Zebra (Z-Select, Z-Perform, PolyPro, ZeroLiner, Z-Essentials, 8000D Jewelry) są kompatybilne z całą gamą drukarek Zebra do druku bezpośredniego: mobilne (ZQ511, ZQ521, ZQ610-630, QLn220-320), biurkowe (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d), klasy średniej (ZD611, ZT231) i przemysłowe (ZT411, ZT421, ZT510, ZT610, ZT620). Etykiety bez podkładu (ZeroLiner) wymagają drukarki ze specjalnym, silikonowym wałkiem — sprawdź specyfikację konkretnego modelu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak długo trzyma nadruk na etykiecie termicznej?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zależy od serii i warunków. Z-Perform 1000D — do 12 miesięcy wewnątrz pomieszczeń (najkrótsza trwałość, najtańsza). Z-Select 2000D — do 24 miesięcy wewnątrz (chroni powłoka ochronna). PolyPro 4000D — kilka lat (folia + powłoka ochronna). Wszystkie blakną pod wpływem promieni UV (bezpośrednie słońce) i w temperaturze powyżej +80°C. Do nadruków, które muszą przetrwać ponad 2 lata lub na zewnątrz, wybierz termotransfer (Z-Ultimate 3000T) zamiast etykiet termicznych.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy oferujecie próbki etykiet przed zakupem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak. Zebra udostępnia oficjalne rolki próbne do potwierdzenia kompatybilności i jakości nadruku: SAMPLE30820 dla drukarek klasy średniej i przemysłowych, SAMPLE30820-D dla biurkowych. W TAKMA pomagamy dobrać próbkę pod konkretną drukarkę i powierzchnię docelową — skontaktuj się przez formularz lub telefonicznie. Próbki są darmowe dla klientów rozważających większe zamówienie (od 10 rolek).',
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

      {/* H2: Czym są etykiety termiczne */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Czym są etykiety termiczne?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <p>
            Etykiety termiczne (druk termiczny bezpośredni) to papier termoczuły, na którym obraz powstaje bezpośrednio pod wpływem ciepła z głowicy drukującej — <strong>bez taśmy barwiącej</strong>. To główna zaleta tej technologii: niższy koszt eksploatacji, mniej części zużywających się w drukarce, prostszy proces. Druk termiczny jest standardem etykiet wysyłkowych (InPost, DPD, DHL, GLS), oznaczeń półkowych w sklepach, identyfikacji w magazynach oraz oznaczeń krótkoterminowych w farmacji, ochronie zdrowia i produkcji.
          </p>
          <p>
            Wadą jest <strong>krótsza trwałość nadruku</strong>: typowo 12-24 miesiące wewnątrz pomieszczeń. Bezpośrednie słońce (promienie UV) i temperatury powyżej +80°C powodują ciemnienie i blaknięcie. Do nadruków o długim cyklu życia lub do zastosowań na zewnątrz wybierz <Link href="/etykiety-termotransferowe-zebra/papierowe" className="text-primary-600 hover:underline">etykiety termotransferowe</Link> — wymagają taśmy, ale są trwałe (lata).
          </p>
        </div>
      </section>

      {/* H2: DT vs TT */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Druk termiczny bezpośredni vs termotransferowy — kiedy co wybrać?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Kryterium</th>
                <th className="text-left p-3 font-semibold text-gray-900">Termiczny bezpośredni</th>
                <th className="text-left p-3 font-semibold text-gray-900">Termotransferowy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-medium">Taśma barwiąca</td>
                <td className="p-3">Nie wymaga</td>
                <td className="p-3">Wymaga (woskowa / woskowo-żywiczna / żywiczna)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Koszt eksploatacji</td>
                <td className="p-3 text-emerald-700">Niższy (brak taśmy)</td>
                <td className="p-3">Wyższy (taśma + etykieta)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Trwałość nadruku</td>
                <td className="p-3">12-24 mies. wewnątrz</td>
                <td className="p-3 text-emerald-700">Lata, na zewnątrz, odporny na UV</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Odporność na ciepło</td>
                <td className="p-3">Do +80°C</td>
                <td className="p-3 text-emerald-700">Do +180°C (żywiczna)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Główne zastosowania</td>
                <td className="p-3">Wysyłki, kompletacja, cenówki, paragony</td>
                <td className="p-3">Elektronika, laboratorium, oznaczenia mienia, na zewnątrz</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Drukarki</td>
                <td className="p-3">Mobilne, biurkowe, klasy średniej, przemysłowe</td>
                <td className="p-3">Biurkowe, klasy średniej, przemysłowe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: 12 serii porównanie */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          12 serii etykiet termicznych Zebra — porównanie
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Seria</th>
                <th className="text-left p-3 font-semibold text-gray-900">Materiał</th>
                <th className="text-left p-3 font-semibold text-gray-900">Klej</th>
                <th className="text-left p-3 font-semibold text-gray-900">Powłoka ochronna</th>
                <th className="text-left p-3 font-semibold text-gray-900">Atest FDA/BfR</th>
                <th className="text-left p-3 font-semibold text-gray-900">Od (zł)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {thermalLabelSeries.map(s => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="p-3 font-medium">
                    <Link href={`/etykiety-termiczne-zebra/serie/${s.slug}`} className="text-primary-600 hover:underline">
                      {s.title}
                    </Link>
                  </td>
                  <td className="p-3 text-gray-600">{materialLabel(s.material)}</td>
                  <td className="p-3 text-gray-600">{glueLabel(s.glue)}</td>
                  <td className="p-3 text-gray-600">{s.topcoat ? 'Tak' : 'Nie'}</td>
                  <td className="p-3 text-gray-600">{s.foodSafe ? 'Tak' : '—'}</td>
                  <td className="p-3 font-medium text-gray-900">{s.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: Atesty żywnościowe */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Atesty żywnościowe — co oznaczają BfR XIV, FDA, ISEGA?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <p>
            Etykiety Zebra w seriach Z-Select 2000D i Z-Perform 1000D mają atesty do bezpośredniego kontaktu z żywnością. To istotne dla piekarni, masarni, gastronomii, producentów spożywczych i sklepów ze świeżą żywnością.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>BfR XIV (Niemcy)</strong> — niemieckie rekomendacje Federalnego Instytutu Oceny Ryzyka dla klejów w kontakcie z żywnością. Wymóg w EU dla detalistów typu Aldi, Lidl, Rewe.</li>
            <li><strong>FDA 175.105</strong> — amerykańska Agencja Żywności i Leków — bezpośredni kontakt z suchą żywnością lub przez funkcjonalną barierę.</li>
            <li><strong>ISEGA</strong> — instytut testujący materiały opakowaniowe pod kątem migracji substancji do żywności suchej, wilgotnej i tłustej.</li>
            <li><strong>EC 1935/2004 + EU 10/2011</strong> — unijne rozporządzenia ramowe dla materiałów kontaktujących się z żywnością + szczegółowe wymogi dla tworzyw sztucznych.</li>
          </ul>
        </div>
      </section>

      {/* H2: Jak dobrać do drukarki */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Jak dobrać etykietę termiczną do drukarki Zebra?
        </h2>
        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Sprawdź szerokość druku drukarki</strong> — etykieta nie może być szersza niż maksymalna szerokość nośnika obsługiwana przez głowicę (np. ZD230d max 104 mm, ZT411 max 114 mm).</li>
            <li><strong>Średnica gilzy (rdzeń)</strong> — typowo 19 mm (3/4″), 25 mm (1″) lub 76 mm (3″). Drukarki biurkowe przyjmują 19/25 mm, klasy średniej i przemysłowe także 76 mm.</li>
            <li><strong>Maksymalna średnica zewnętrzna rolki</strong> — decyduje, ile materiału się zmieści. Drukarki biurkowe ok. 127 mm, przemysłowe nawet 203 mm.</li>
            <li><strong>Druk bez podkładu (linerless) wymaga specjalnego wałka</strong> — silikonowego, odpornego na klej. Sprawdź, czy Twoja drukarka go ma — zwykły wałek zniszczy się przy druku bez podkładu.</li>
            <li><strong>Technologia druku</strong> — etykiety termiczne działają w drukarkach do druku bezpośredniego i kombinowanych. Drukarki wyłącznie termotransferowe nie zadrukują etykiet termicznych.</li>
          </ol>
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

function materialLabel(m: string): string {
  const map: Record<string, string> = {
    'papier-powlekany': 'Papier powlekany',
    'papier-niepowlekany': 'Papier niepowlekany',
    'polipropylen-syntetyczny': 'Polipropylen (syntetyk)',
    'papier-linerless': 'Papier bez podkładu',
    'papier-specjalny': 'Papier specjalny',
  }
  return map[m] ?? m
}

function glueLabel(g: string): string {
  const map: Record<string, string> = {
    permanentny: 'Permanentny',
    zdejmowalny: 'Zdejmowalny',
    brak: 'Bez kleju',
  }
  return map[g] ?? g
}
