import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSubcategoryBySlug } from '@/data/products'
import {
  transferLabelSeries,
  getTransferLabelSeriesBySubcategory,
  type TransferLabelSubcategory,
} from '@/data/transfer-label-series'
import { ChevronRightIcon, CheckIcon, ArrowRightIcon, ShieldCheckIcon } from '@/components/ui/Icons'
import CommonDefinitionsSchema from '@/components/schemas/CommonDefinitions'

const siteUrl = 'https://www.takma.com.pl'
const SLUG = 'etykiety-termotransferowe'

interface Tile {
  sub: TransferLabelSubcategory
  title: string
  desc: string
  /** Subtelny akcent w rogu kafelka — kolor podkategorii (gdy brak obrazu tapety). */
  accent: string
  badge: string
  /** Opcjonalny obraz „tapeta" — wypełnia prawą stronę kafelka, tekst po lewej. */
  image?: string
}

const TILES: Tile[] = [
  {
    sub: 'papierowe',
    title: 'Papierowe',
    desc: 'Ekonomiczne — Z-Perform 1000T, Z-Select 2000T. Do magazynu, wysyłki i opakowań.',
    accent: '#2563EB',
    badge: 'Bestseller',
    image: '/images/etykiety-termotransfer-zebra-papier.webp',
  },
  {
    sub: 'foliowe',
    title: 'Foliowe',
    desc: 'Trwałe syntetyki — Z-Ultimate 3000T, PolyPro, PolyE. Odporne na wodę, chemikalia i UV.',
    accent: '#059669',
    badge: 'Trwałe',
    image: '/images/etykiety-termotransfer-zebra-folia.webp',
  },
  {
    sub: 'specjalne',
    title: 'Specjalne',
    desc: 'Niszowe — kriogeniczne (-196°C), worki z krwią, plomby VOID i destruktywne.',
    accent: '#D97706',
    badge: 'Niszowe',
    image: '/images/etykiety-termotransfer-zebra-special.webp',
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)
  const url = `${siteUrl}/${SLUG}`
  return {
    title: sub?.seoTitle ?? 'Etykiety termotransferowe Zebra | TAKMA',
    description: sub?.seoDescription ?? 'Pełna gama etykiet termotransferowych Zebra: papierowe, foliowe i specjalne.',
    openGraph: {
      images: ['/images/takma-og.png'],
      title: sub?.seoTitle ?? 'Etykiety termotransferowe Zebra',
      description: sub?.seoDescription ?? '',
      url,
    },
    alternates: { canonical: url },
  }
}

const FAQ = [
  {
    q: 'Czym różnią się etykiety termotransferowe od termicznych?',
    a: 'Etykiety termotransferowe (TT) wymagają taśmy barwiącej (ribbon) — nadruk jest trwały, odporny na ścieranie i nie blaknie z czasem. Etykiety termiczne (DT) drukują bez taśmy, taniej w eksploatacji, ale nadruk blaknie po kilkunastu miesiącach. TT wybierz do oznaczeń trwałych (produkty, tabliczki, przemysł), DT do krótkoterminowych (wysyłka, paragony).',
  },
  {
    q: 'Jaką taśmę dobrać do etykiet termotransferowych?',
    a: 'Zależy od materiału etykiety. Papier (Z-Perform, Z-Select) — taśma wosk lub wosk-żywica (Zebra 2300/3200). Folia (Z-Ultimate, PolyPro, PolyE, PolyO) i etykiety specjalne — taśma żywiczna resin (Zebra 5095). Użycie taśmy woskowej na folii to najczęstszy błąd — nadruk schodzi palcem.',
  },
  {
    q: 'Które etykiety termotransferowe są wodoodporne?',
    a: 'Wodoodporne są wszystkie etykiety foliowe: Z-Ultimate 3000T (poliester), PolyPro 3000T/4000T (polipropylen), PolyE 3100T (polietylen) i PolyO 3100T (poliolefina). Papierowe (Z-Perform, Z-Select) nie są wodoodporne — do wilgoci i mycia wybierz folię.',
  },
  {
    q: 'Czy macie etykiety do bardzo niskich temperatur i ciekłego azotu?',
    a: 'Tak. 8000T All-Temp aplikuje się od -10°C i pracuje do -40°C (chłodnie, mrożonki). 8100T Cryocool wytrzymuje -196°C (ciekły azot, biobanki). 8000T Blood Bag Deep Freeze jest dedykowany workom z krwią w głębokim mrożeniu (zgodność ISBT 128).',
  },
  {
    q: 'Czy oferujecie etykiety zabezpieczające i plomby?',
    a: 'Tak. 8000T Void Matte ujawnia napis „VOID" przy próbie zdjęcia (pieczęci gwarancyjne, plomby dokumentów). 8100T Z-Destruct PE rozpada się na kawałki przy odklejeniu — najwyższy poziom zabezpieczenia (plomby urzędowe, służby, lotnictwo).',
  },
  {
    q: 'Ile wariantów rozmiarowych jest dostępnych?',
    a: 'Ponad 950 wariantów w 16 seriach. Najwięcej w bestsellerach: Z-Perform 1000T (papier, 458 wariantów) i Z-Ultimate 3000T White (poliester, 296 wariantów). Każda seria ma stronę z filtrami rozmiaru, wysokości i rdzenia.',
  },
]

export default function Page() {
  const url = `${siteUrl}/${SLUG}`
  const counts = {
    papierowe: getTransferLabelSeriesBySubcategory('papierowe').length,
    foliowe: getTransferLabelSeriesBySubcategory('foliowe').length,
    specjalne: getTransferLabelSeriesBySubcategory('specjalne').length,
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Etykiety termotransferowe Zebra',
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: TILES.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteUrl}/etykiety-termotransferowe-zebra/${t.sub}`,
        name: `Etykiety termotransferowe ${t.title.toLowerCase()}`,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Materiały eksploatacyjne', item: `${siteUrl}/materialy-eksploatacyjne` },
      { '@type': 'ListItem', position: 3, name: 'Etykiety termotransferowe', item: url },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // TechArticle — symetria ze stronami [subcategory] i serie. Sygnał treści technicznej
  // dla AI engines + dateModified (fresh signal).
  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Etykiety termotransferowe Zebra — przewodnik wyboru (papier, folia, specjalne)',
    description: 'Kompletny przewodnik po etykietach termotransferowych Zebra: różnica DT vs TT, trzy grupy materiałowe (papier, folia poliestrowa/BOPP/PE, specjalne), dobór taśmy barwiącej i 16 serii w 950+ wariantach.',
    url,
    inLanguage: 'pl-PL',
    proficiencyLevel: 'Expert',
    about: [
      { '@type': 'Thing', name: 'Etykiety termotransferowe' },
      { '@type': 'Thing', name: 'Druk termotransferowy' },
      { '@type': 'Thing', name: 'Druk termiczny bezpośredni' },
      { '@type': 'Thing', name: 'Folia poliestrowa PET' },
      { '@type': 'Thing', name: 'Polipropylen BOPP' },
      { '@type': 'Thing', name: 'Taśma barwiąca' },
      { '@type': 'Thing', name: 'UL Recognized Component' },
    ],
    publisher: { '@type': 'Organization', name: 'TAKMA', url: siteUrl },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Specjaliści ds. zakupów technicznych, inżynierowie produkcji, kierownicy magazynów, dział regulacyjny',
    },
    datePublished: '2026-05-29',
    dateModified: '2026-05-31',
  }

  // HowTo — odwzorowuje sekcje "Jak wybrać materiał" + "Jak dobrać taśmę barwiącą" (widoczne na stronie).
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Jak dobrać etykietę termotransferową',
    description: 'Pięć kroków doboru etykiety termotransferowej Zebra: trwałość, materiał, taśma barwiąca, drukarka i rozmiar.',
    inLanguage: 'pl-PL',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Określ wymaganą trwałość', text: 'Do 1–2 lat bez chemikaliów → papier. Lata, kontakt z rozpuszczalnikami, produkt końcowy, certyfikat UL → folia. Krioprzechowywanie, plomby, worki z krwią → etykiety specjalne.' },
      { '@type': 'HowToStep', position: 2, name: 'Wybierz materiał', text: 'Papier (Z-Perform, Z-Select) — ekonomia, magazyn, wysyłka. Folia (Z-Ultimate PET, PolyPro BOPP, PolyE) — odporność na wodę, chemikalia, UV. Specjalne — zastosowania niszowe.' },
      { '@type': 'HowToStep', position: 3, name: 'Dobierz taśmę barwiącą', text: 'Papier → taśma woskowa (Zebra 2300) lub woskowo-żywiczna (3200). Folia poliestrowa → taśma żywiczna (5095). Zła kombinacja media + taśma to najczęstsza przyczyna ścieralnego nadruku.' },
      { '@type': 'HowToStep', position: 4, name: 'Sprawdź drukarkę', text: 'Etykiety TT wymagają drukarki z funkcją druku termotransferowego (modele z literą „t”: ZD230t, ZD421t, ZT411). Drukarki tylko termiczne bezpośrednie nie obsługują taśm.' },
      { '@type': 'HowToStep', position: 5, name: 'Dobierz rozmiar i rdzeń', text: 'Wybierz wymiar etykiety i średnicę rdzenia rolki zgodną z drukarką (25 mm dla biurkowych, 76 mm dla przemysłowych). Filtry rozmiarowe na stronie serii zawężą listę wariantów.' },
    ],
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CommonDefinitionsSchema />

      {/* HERO */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Tło abstrakcyjne — kolorowe światła neonowe tylko po prawej stronie hero */}
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
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-300 mb-6 overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white whitespace-nowrap">Strona główna</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <Link href="/materialy-eksploatacyjne" className="hover:text-white whitespace-nowrap">Materiały eksploatacyjne</Link>
            <ChevronRightIcon size={14} className="text-slate-500" />
            <span className="text-white font-medium whitespace-nowrap">Etykiety termotransferowe</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            Etykiety termotransferowe Zebra
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mb-6">
            Pełna gama mediów termotransferowych Zebra w jednym miejscu — <strong className="text-white">16 serii, ponad 950 wariantów</strong>. Papierowe do magazynu i wysyłki, foliowe do trwałych oznaczeń, specjalne do kriogeniki i zabezpieczeń. Wymagają taśmy barwiącej — pomożemy dobrać.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> 16 serii, ponad 950 wariantów
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <ShieldCheckIcon size={14} className="text-emerald-400" /> Atesty BfR XXI, FDA, EC 1935/2004
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Autoryzowany partner Zebra
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur rounded-full px-3 py-1.5 border border-white/20">
              <CheckIcon size={14} className="text-emerald-400" /> Doradztwo techniczne i próbki
            </span>
          </div>
        </div>
      </section>

      {/* 3 KAFELKI PODKATEGORII */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Wybierz rodzaj materiału</h2>
          <p className="text-gray-600 max-w-2xl">
            Trzy grupy materiałowe — różny materiał, taśma i zastosowanie. Kliknij, żeby zobaczyć serie i warianty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TILES.map(t => (
            <Link
              key={t.sub}
              href={`/etykiety-termotransferowe-zebra/${t.sub}`}
              className="group relative overflow-hidden bg-white border border-slate-200 rounded-xl hover:border-[#A8F000] hover:shadow-lg transition-all flex flex-col p-7 min-h-[260px]"
            >
              {t.image ? (
                // Tapeta — obraz wypełnia kafelek, biały gradient od lewej dla czytelności tekstu
                <>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-right transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url('${t.image}')` }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/95 via-45% to-transparent"
                  />
                </>
              ) : (
                // Bez obrazu — subtelny radial akcent koloru podkategorii w prawym-dolnym rogu
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse 65% 35% at bottom right, ${t.accent}28 0%, ${t.accent}0d 40%, transparent 80%)`,
                  }}
                />
              )}

              <div className={`relative z-10 flex flex-col h-full ${t.image ? 'max-w-[55%]' : ''}`}>
                {/* Chip + strzałka */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {t.badge}
                  </span>
                  <ArrowRightIcon
                    size={18}
                    className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                  {t.title}
                </h3>

                {/* Desc */}
                <p className="text-base text-gray-700 leading-snug flex-1">
                  {t.desc}
                </p>

                {/* Liczba serii — drobna informacja na dole */}
                <p className="text-xs font-medium text-slate-500 mt-4">
                  {counts[t.sub]} {counts[t.sub] < 5 ? 'serie' : 'serii'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── BOGATY PRZEWODNIK (SEO/AEO/GEO) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-14">

        {/* Czym są etykiety termotransferowe */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Czym są etykiety termotransferowe (TT)?
          </h2>
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
            <p>
              Etykiety termotransferowe (thermal transfer, TT) to media drukowane <strong>z taśmą barwiącą (ribbon)</strong> — woskową, woskowo-żywiczną lub żywiczną. Głowica drukarki podgrzewa taśmę, a stopiony tusz przenosi się na powierzchnię etykiety, tworząc <strong>trwały, odporny na ścieranie nadruk</strong>. To kluczowa różnica względem etykiet termicznych (direct thermal, DT), które drukują bez taśmy — taniej, ale nadruk z czasem blaknie.
            </p>
            <p>
              Druk termotransferowy jest standardem dla oznaczeń, które mają <strong>przetrwać miesiące lub lata</strong>: tabliczki znamionowe, etykiety produktowe, oznaczenia w przemyśle, motoryzacji i elektronice. Również wszędzie tam, gdzie etykieta jest narażona na chemikalia, rozpuszczalniki, wilgoć, UV lub wysokie temperatury — papier i folia TT z odpowiednim ribbonem dają trwałość nieosiągalną dla druku termicznego.
            </p>
            <p>
              W ofercie TAKMA znajdziesz pełną gamę <strong>oryginalnych mediów TT Zebra Technologies</strong> — 16 serii w trzech grupach materiałowych: papierowe (ekonomia, magazyn, wysyłka), foliowe (poliester, polipropylen, polietylen — trwałość lat) oraz specjalne (kriogeniczne, plomby, worki z krwią). Łącznie ponad 950 wariantów rozmiarowych.
            </p>
          </div>
        </div>

        {/* DT vs TT — tabela */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Direct Thermal vs Thermal Transfer — kiedy wybrać każdą technologię?
          </h2>
          <p className="text-gray-600 mb-5">
            DT i TT to dwa różne sposoby druku w drukarkach Zebra. Wybór zależy od trwałości nadruku, warunków pracy i budżetu na materiały.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-900">Kryterium</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Direct Thermal (DT)</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Thermal Transfer (TT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-medium">Taśma barwiąca (ribbon)</td>
                  <td className="p-3">Nie wymaga</td>
                  <td className="p-3">Wymaga (wax / wax-resin / resin)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Koszt eksploatacji</td>
                  <td className="p-3 text-emerald-700">Niższy (brak taśmy)</td>
                  <td className="p-3">Wyższy (etykieta + taśma)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Trwałość nadruku indoor</td>
                  <td className="p-3">12–24 miesiące</td>
                  <td className="p-3 text-emerald-700">Kilka lat (papier), do 5 lat (folia)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Odporność na ciepło</td>
                  <td className="p-3">Do +80 °C</td>
                  <td className="p-3 text-emerald-700">Do +180 °C (resin na folii)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Odporność chemiczna</td>
                  <td className="p-3">Niska</td>
                  <td className="p-3 text-emerald-700">Wysoka (folia + resin)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Typowe zastosowania</td>
                  <td className="p-3">Wysyłka kurierska, picking, paragony, etykiety półkowe</td>
                  <td className="p-3">Tabliczki znamionowe, oznaczenia produktów, przemysł, elektronika</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Drukarki Zebra</td>
                  <td className="p-3">DT (ZD230d, ZD421d, ZD621d) i kombinowane DT/TT</td>
                  <td className="p-3">TT (ZD230t, ZD421t, ZD621t, ZT411/421/510/610/620)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Jeśli potrzebujesz druku bez taśmy, sprawdź pełną kategorię <Link href="/etykiety-termiczne-zebra" className="text-primary-600 hover:underline">etykiety termiczne Zebra</Link>.
          </p>
        </div>

        {/* Trzy grupy materiałowe — przewodnik wyboru */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Jak wybrać między papierem, folią a etykietą specjalną?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Papier (Z-Perform, Z-Select)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Najtańszy materiał TT. Do wysyłki kurierskiej, etykiet magazynowych, opakowań zbiorczych i etykiet produktowych krótko- i średnioterminowych. Bardzo dobry stosunek ceny do jakości.
              </p>
              <p className="text-xs text-gray-500"><strong>Wybierz, gdy:</strong> oznaczenie ma działać do 1–2 lat, brak kontaktu z chemikaliami, niewielka ekspozycja na wilgoć.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Folia (Z-Ultimate, PolyPro, PolyE)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Poliester (PET), polipropylen (BOPP), polietylen (PE), poliolefina. Odporne na wodę, chemikalia, ścieranie, UV. Trwałość do 5 lat. Standard dla produktów końcowych, elektroniki, motoryzacji.
              </p>
              <p className="text-xs text-gray-500"><strong>Wybierz, gdy:</strong> oznaczenie ma przetrwać lata, kontakt z rozpuszczalnikami, etykieta na produkcie końcowym, certyfikat UL.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specjalne (krio, plomby)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Etykiety kriogeniczne (-196 °C, ciekły azot), do worków z krwią (ISBT 128), zabezpieczające VOID i destruktywne PE. Niszowe materiały dla biobanków, służb specjalnych, sprzętu wojskowego.
              </p>
              <p className="text-xs text-gray-500"><strong>Wybierz, gdy:</strong> krioprzechowywanie, identyfikacja krwi/tkanek, plomby gwarancyjne, najwyższy poziom zabezpieczenia.</p>
            </div>
          </div>
        </div>

        {/* Jak dobrać taśmę — kluczowe dla TT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Jak dobrać taśmę barwiącą (ribbon)?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Dobór taśmy to <strong>50% sukcesu druku TT</strong>. Zła kombinacja media + ribbon daje słaby, ścieralny nadruk — to najczęstszy problem zgłaszany przez klientów. Reguła kciuka:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Wax (wosk)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2"><strong>Do papieru</strong> — najtańsza opcja. Zebra 2100, 2300.</p>
              <p className="text-xs text-gray-500">Podstawowe etykiety magazynowe i wysyłkowe.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Wax-Resin (wosk-żywica)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2"><strong>Do papieru premium</strong> i papieru powlekanego. Zebra 3200.</p>
              <p className="text-xs text-gray-500">Ostrzejszy nadruk drobnych kodów 2D, większa odporność na tarcie.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Resin (żywica)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2"><strong>Do folii</strong> (poliester, PP, PE) i materiałów specjalnych. Zebra 5095, 5100.</p>
              <p className="text-xs text-gray-500">Jedyna taśma chemicznie wiążąca się z folią — odporność na rozpuszczalniki.</p>
            </div>
          </div>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Najczęstszy błąd:</strong> użycie taśmy woskowej na folii — nadruk schodzi palcem. Folia (PET/PP/PE) <strong>wymaga żywicznej resin (Zebra 5095)</strong>, bez wyjątku.
          </div>
          <p className="mt-4 text-sm">
            <Link href="/tasmy-termotransferowe" className="text-primary-600 font-semibold hover:underline">
              Zobacz wszystkie taśmy termotransferowe Zebra →
            </Link>
          </p>
        </div>

        {/* TAKMA — autorytet (E-E-A-T dla AEO/GEO) */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dlaczego oryginalne media Zebra w TAKMA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShieldCheckIcon size={20} className="text-emerald-600" /> Autoryzowany partner Zebra
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                25 lat doświadczenia na rynku AutoID. Trzy certyfikaty Zebra: Premier Solution Partner, Printer Repair Specialist, Public Sector Specialist. Dostęp do pełnego portfolio mediów Zebra — także niszowych (Cryocool, Blood Bag, Z-Destruct).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckIcon size={20} className="text-emerald-600" /> Doradztwo techniczne
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Pomożemy dobrać materiał i taśmę pod Twoją drukarkę, powierzchnię docelową i warunki pracy. Dla projektów krytycznych (medycyna, biotech, służby) dostarczamy próbki i dokumentację walidacyjną (TDS, CoC, IQ/OQ/PQ).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckIcon size={20} className="text-emerald-600" /> Oryginalność i gwarancja
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Każda rolka jest fabrycznie testowana z drukarkami Zebra — gwarantowana kompatybilność, brak ryzyka uszkodzenia głowicy (koszt wymiany 1 000–3 000 zł), atesty żywnościowe (BfR XXI, FDA, EC 1935/2004) gdy są deklarowane.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckIcon size={20} className="text-emerald-600" /> Szybka dostawa, zwroty
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Standardowe rozmiary z magazynu PL w 24–72 h. Mniej popularne SKU sprowadzamy z magazynu EU w 5–10 dni roboczych. Niestandardowe rozmiary — cięcie pod zamówienie. Faktura VAT, B2B.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* TABELA WSZYSTKICH 16 SERII */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">16 serii Zebra — przegląd</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">Seria</th>
                <th className="text-left p-3 font-semibold text-gray-900">Grupa</th>
                <th className="text-left p-3 font-semibold text-gray-900">Taśma</th>
                <th className="text-left p-3 font-semibold text-gray-900">Od (zł)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {transferLabelSeries.map(s => (
                <tr key={s.slug} className="hover:bg-slate-50">
                  <td className="p-3 font-medium">
                    <Link href={`/etykiety-termotransferowe-zebra/${s.subcategory}/serie/${s.slug}`} className="text-primary-600 hover:underline">
                      {s.title}
                    </Link>
                  </td>
                  <td className="p-3 text-gray-600 capitalize">{s.subcategory}</td>
                  <td className="p-3 text-gray-600">{s.recommendedRibbons.resin ? 'Resin' : 'Wosk/wosk-żywica'}</td>
                  <td className="p-3 font-medium text-gray-900">{s.priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania</h2>
        <div className="space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-gray-900 flex-1">{f.q}</span>
                <ChevronRightIcon size={20} className="text-slate-400 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
