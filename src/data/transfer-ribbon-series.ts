/**
 * Dane 12 modeli (serii) taśm termotransferowych Zebra.
 *
 * Używane na:
 * - /tasmy-termotransferowe (landing, 3 sekcje: woskowe / woskowo-zywiczne / zywiczne)
 * - /tasmy-termotransferowe/serie/[slug] (pełny landing serii — opis + tabela wariantów)
 *
 * Każda seria mapuje się 1:1 na produkt w transfer-ribbon-products.ts (productId → warianty).
 *
 * Wzorzec danych: transfer-label-series.ts. Reuse typów SeriesSection / SeriesTechSpec /
 * SeriesFaq / SeriesCertification / SeriesComparison / SeriesCompatiblePrinters z
 * thermal-label-series.ts.
 *
 * Pole `recommendedForLabels` — odwrócona mapa względem `recommendedRibbons` w etykiecie:
 * tu pokazujemy „dla jakich etykiet TA TAŚMA jest polecana".
 */

import type {
 SeriesSection,
 SeriesTechSpec,
 SeriesFaq,
 SeriesCertification,
 SeriesComparison,
 SeriesCompatiblePrinters,
} from './thermal-label-series'

export type RibbonCategory = 'woskowe' | 'woskowo-zywiczne' | 'zywiczne'

export type RibbonPositioning =
 | 'bestseller'
 | 'standard'
 | 'premium'
 | 'specjalistyczna'
 | 'ekonomiczna'

export interface RecommendedForLabel {
 /** slug serii etykiety w transfer-label-series.ts */
 seriesSlug: string
 /** wyświetlana nazwa etykiety */
 seriesName: string
 /** główna rekomendacja czy alternatywa */
 role: 'primary' | 'alternative'
 /** (alternatywa) kiedy wybrać tę taśmę */
 when?: string
}

export interface RibbonSeries {
 // ── IDENTITY ─────────────────────────────────────────────────────
 slug: string
 productId: string
 category: RibbonCategory
 badge: string
 title: string
 tagline: string
 positioning: RibbonPositioning

 // ── ATRYBUTY DO FILTRÓW / TABELI ────────────────────────────────
 /** OS — nawój zewnętrzny (standard Zebry) */
 outsideCoated: boolean
 /** UL/cUL — dla sprzętu elektrycznego */
 ulCertified: boolean
 /** Maksymalna prędkość druku w mm/s */
 printSpeedMax: number
 chemicalResistance: 'niska' | 'średnia' | 'wysoka' | 'ekstremalna'
 uvResistance: 'brak' | 'krótkoterminowa' | 'długoterminowa'
 /** Zakres temperatur pracy (np. "-40°C do +120°C") */
 temperatureRange: string
 priceFrom: number
 accent: string
 /** Opcjonalny obraz „tapeta" — wypełnia prawą stronę kafelka bestsellera, tekst po lewej. */
 heroImage?: string
 /** Opcjonalna pozycja tła dla `heroImage` (CSS background-position). Domyślnie `50% center`. */
 heroImagePosition?: string
 /** Opcjonalny gradient tła sekcji hero — używaj gdy zdjęcie ma jasne tło, żeby uniknąć
     ostrego przejścia między czarnym bg-slate-950 a tłem fotografii. CSS linear-gradient. */
 heroBackgroundGradient?: string

 // ── SEO ──────────────────────────────────────────────────────────
 seoTitle: string
 seoDescription: string
 h1: string

 // ── HERO LANDINGU ────────────────────────────────────────────────
 heroIntro: string
 keyHighlights: string[]

 // ── SEKCJE / SPEC / ZASTOSOWANIA ─────────────────────────────────
 sections: SeriesSection[]
 techSpecs: SeriesTechSpec[]
 applications: string[]
 notRecommendedFor: string[]

 // ── KOMPATYBILNE DRUKARKI + ATESTY + PORÓWNANIE + FAQ ────────────
 compatiblePrinters: SeriesCompatiblePrinters
 certifications: SeriesCertification[]
 comparedWith: SeriesComparison[]
 faq: SeriesFaq[]

 // ── KLUCZOWE: etykiety, do których ta taśma jest polecana ───────
 recommendedForLabels: RecommendedForLabel[]

 // ── DOWNLOADS: specyfikacja techniczna do pobrania ────────────
 downloads?: { name: string; type: string; url: string; size?: string }[]
}

/* ═════════════════════════════════════════════════════════════════
 * DANE 12 SERII (WOSKOWE 4 + WOSKOWO-ZYWICZNE 4 + ZYWICZNE 4)
 * ═════════════════════════════════════════════════════════════════ */

export const transferRibbonSeries: RibbonSeries[] = [
 /* ════════════════ WOSKOWE (4) ════════════════ */

 /* ──────────────── 1. 1600 WAX — ekonomiczna ──────────────── */
 {
 slug: '1600-wax',
 productId: 'zebra-1600-wax',
 category: 'woskowe',
 badge: 'Zebra 1600',
 title: 'Zebra 1600 Wax',
 tagline: 'Ekonomiczna taśma woskowa do papieru — najtańsza opcja w portfolio Zebra.',
 positioning: 'ekonomiczna',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 254,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: '+5°C do +40°C',
 priceFrom: 303.15,
 accent: '#F59E0B',
 seoTitle: 'Zebra 1600 Wax — ekonomiczna taśma woskowa termotransferowa',
 seoDescription: 'Zebra 1600 Wax — najtańsza taśma woskowa do papierowych etykiet niepowlekanych i powlekanych. Druk do 254 mm/s. Magazyn, wysyłka, etykiety półkowe. 10 wariantów od 303 zł netto.',
 h1: 'Taśma termotransferowa Zebra 1600 Wax',
 heroIntro: 'Zebra 1600 Wax to **najtańsza taśma woskowa** w portfolio Zebra — wybór do prostych zastosowań magazynowych, etykiet półkowych i wysyłek standardowych. Drukuje na większości papierowych etykiet (powlekanych i niepowlekanych) do prędkości **254 mm/s (10 ips)**. Tańsza od bestsellerowej 2300 Wax, ale z niższą odpornością nadruku na ścieranie — wybieraj świadomie, gdy budżet jest absolutnym priorytetem, a etykieta nie jest narażona na tarcie.',
 keyHighlights: [
  'Najtańsza taśma woskowa Zebra — minimalny koszt za rolkę',
  'Druk na papierze niepowlekanym i powlekanym',
  'Prędkość druku do 254 mm/s (10 ips)',
  'Konstrukcja nawój zewnętrzny — standard Zebry',
  'Rdzeń 25 mm (1") — kompatybilny z drukarkami przemysłowymi',
  '10 wariantów szerokości od 60 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest taśma Zebra 1600 Wax?',
  content:
   'Zebra 1600 Wax to woskowa taśma barwiąca do druku termotransferowego — najtańsza pozycja w portfolio woskowych Zebry. Powłoka woskowa topi się pod głowicą drukarki i przenosi na papierową etykietę, dając czytelny czarny nadruk. Wystarcza do podstawowych zastosowań tam, gdzie etykieta nie jest narażona na tarcie, wilgoć ani agresywne warunki środowiskowe.\n\nW odróżnieniu od bestsellerowej 2300 Wax, 1600 ma niższą odporność nadruku i mniejszą maksymalną prędkość druku. To wybór budżetowy — sensowny gdy drukujesz duże wolumeny prostych etykiet w temperaturze pokojowej i koszt jest priorytetem.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 1600 Wax sprawdza się w **prostych zastosowaniach magazynowych i retail**:\n\n- **Magazyn** — etykiety lokalizacyjne, półkowe (krótkie serie, temperatura pokojowa)\n- **Retail** — etykiety półkowe i ekspozytory (brak ekspozycji na warunki zewnętrzne)\n- **Wysyłki standardowe** — etykiety adresowe na opakowania kartonowe\n- **Druk podstawowy** — proste oznaczenia wewnętrzne, dokumentacja\n\nDo bardziej wymagających zastosowań (codzienna eksploatacja, większe prędkości druku, większe wolumeny) wybierz **2300 Wax** — bestseller, dużo lepsza relacja jakości do ceny.',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 1600 Wax pasuje do **papierowych etykiet termotransferowych** klasy ekonomicznej:\n\n- **Z-Essentials 500T** — budżetowy papier, idealna kombinacja taśma + etykieta w najniższej cenie\n- **Z-Perform 1000T** — papier niepowlekany standardowy (alternatywa względem 2300, taniej)\n\nNie nadaje się do folii (poliester, polipropylen, polietylen) — do tych materiałów wymagana jest taśma żywiczna (resin) lub woskowo-żywiczna.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 1600 Wax dostępna w konstrukcji **nawój zewnętrzny** — standardowy Zebry typ nawoju, kompatybilny ze wszystkimi drukarkami Zebra obsługującymi taśmy z nawojem zewnętrznym. Rdzeń **25 mm (1")** dla wariantów przemysłowych. Większość wariantów ma długość 450 m (industrial) oraz 74 m (wersja desktopowa pod ZD-y).',
  },
  {
  heading: 'Kiedy wybrać 1600 zamiast 2300',
  content:
   'Wybierz **1600 Wax** wyłącznie gdy:\n\n- Liczy się każde 10% kosztu za rolkę\n- Drukujesz proste etykiety w temperaturze pokojowej (brak chłodni, brak na zewnątrz)\n- Etykieta nie jest przeładowywana ani narażona na tarcie\n- Prędkość druku Twojej drukarki nie przekracza 10 ips\n\nW każdym innym scenariuszu — **2300 Wax** jest bezpieczniejszą i nadal niedrogą opcją. Różnica w cenie zwraca się jakością nadruku i mniejszym ryzykiem reklamacji.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa' },
  { label: 'Model', value: '1600 Wax' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '254 mm/s (10 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: 'Z-Essentials 500T, Z-Perform 1000T' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '10' },
  { label: 'Grupa cenowa', value: 'Ekonomia' },
 ],
 applications: [
  'Magazyn — etykiety lokalizacyjne i półkowe',
  'Wysyłki standardowe na kartonach',
  'Etykiety półkowe w retail',
  'Druk podstawowy na papierze',
  'Oznaczenia wewnętrzne i dokumentacja',
 ],
 notRecommendedFor: [
  'Folie syntetyczne (PE, PP, PET) — wymagają żywicy (resin)',
  'Aplikacje z kontaktem z wilgocią lub tarciem',
  'Druk >10 ips — wybierz 2300 lub 2100',
  'Chłodnia / mróz — wybierz 2100 European Wax',
  'Outdoor i ekspozycja UV',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz 1600 tylko gdy koszt rolki jest absolutnym priorytetem i etykieta nie jest narażona na tarcie. W każdym innym przypadku — 2300 Wax (bezpieczniejszy bestseller).' },
  { seriesSlug: '2100-wax', whenToChooseThis: '1600 do prostego magazynu w temperaturze pokojowej. 2100 — gdy potrzebujesz wyższej jakości nadruku, prędkości >10 ips lub pracy w chłodni.' },
 ],
 faq: [
  { question: 'Czym 1600 Wax różni się od 2300 Wax?', answer: '1600 jest tańsza, ale ma niższą odporność nadruku na ścieranie i niższą maksymalną prędkość druku (10 ips vs 12 ips). 2300 to bestseller — bezpieczniejszy wybór do codziennego druku. 1600 wybieraj tylko gdy budżet jest absolutnym priorytetem.' },
  { question: 'Czy 1600 Wax drukuje na folii?', answer: 'Nie. Taśmy woskowe nie wiążą się z folią syntetyczną (poliester, polipropylen, polietylen) — nadruk schodziłby palcem. Do folii potrzebujesz taśmy żywicznej (resin) lub woskowo-żywicznej (wax/resin) — np. 5095 Resin lub 3200 Wax/Resin.' },
  { question: 'Jaką szerokość taśmy dobrać do etykiety?', answer: 'Szerokość taśmy powinna być o 2–5 mm szersza niż etykieta. Np. do etykiety 102 mm wybierz taśmę 106 lub 110 mm. Chroni to głowicę drukującą przed bezpośrednim kontaktem z etykietą.' },
  { question: 'Czy 1600 Wax ma rdzeń 12 mm dla drukarek desktopowych?', answer: '1600 jest dostępna głównie z rdzeniem 25 mm (1") dla wariantów przemysłowych. Do drukarek desktopowych Zebra (ZD220/ZD230 z rdzeniem 12 mm) wybierz wariant z konkretnej tabeli wariantów lub porozmawiaj z doradcą.' },
  { question: 'Czy 1600 ma certyfikat UL?', answer: 'Nie. Taśmy woskowe nie posiadają certyfikatu UL — ten dotyczy taśm żywicznych (5095 Resin, 5100 Premium Resin) na folii poliestrowej. Do oznaczeń UL wybierz 5095 + Z-Ultimate 3000T.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-essentials-500t', seriesName: 'Z-Essentials 500T', role: 'primary' },
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'alternative', when: 'Wybierz 1600 gdy budżet jest priorytetem, w temp. pokojowej i krótkich seriach. Domyślnie do Z-Perform 1000T używa się 2300 Wax.' },
 ],
 },

 /* ──────────────── 2. 2100 EUROPEAN WAX — premium chłodnia ──────────────── */
 {
 slug: '2100-wax',
 productId: 'zebra-2100-wax',
 category: 'woskowe',
 badge: 'Zebra 2100',
 title: 'Zebra 2100 European Wax',
 tagline: 'Premium europejska taśma woskowa — wyższa jakość, druk w chłodni i mroźni.',
 positioning: 'premium',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 304,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: '-20°C do +60°C',
 priceFrom: 145.18,
 accent: '#F59E0B',
 seoTitle: 'Zebra 2100 European Wax — premium taśma woskowa do chłodni',
 seoDescription: 'Zebra 2100 European Wax — premium taśma woskowa zoptymalizowana pod europejski rynek. Druk do 304 mm/s, działanie w chłodni i mroźni, ostrzejszy nadruk niż 2300. 15 wariantów od 145 zł netto.',
 h1: 'Taśma termotransferowa Zebra 2100 European Wax',
 heroIntro: 'Zebra 2100 European Wax to **premium taśma woskowa zoptymalizowana pod europejski rynek**. Charakteryzuje się ostrzejszym nadrukiem i lepszą odpornością na zarysowania niż standardowa 2300 Wax. Drukuje na pełnej gamie papierów termotransferowych z prędkością do **304 mm/s (12 ips)** — i, co kluczowe, **działa w niskich temperaturach**: chłodnia, mroźnia, transport mroźniczy.',
 keyHighlights: [
  'Premium taśma woskowa — ostrzejszy nadruk niż 2300',
  'Działanie w niskich temperaturach (chłodnia, mróz)',
  'Druk do 304 mm/s (12 ips) — szybsze drukarki industrial',
  'Nawój zewnętrzny — standard Zebry',
  'Idealna do etykiet 8000T All-Temp',
  '15 wariantów szerokości od 40 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 2100 European Wax?',
  content:
   'Zebra 2100 European Wax to taśma woskowa o **zoptymalizowanej formulacji pod warunki europejskie** — niższe temperatury (chłodnia, magazyny nieogrzewane) i wymóg ostrego nadruku na drukarkach przemysłowych. Tańsza od taśm woskowo-żywicznych i żywicznych, ale lepsza od zwykłej 2300 Wax pod względem ostrości nadruku i odporności na zarysowania.\n\nKluczowa cecha: **działa w chłodni i mroźni**. Standardowe taśmy woskowe (2300, 1600) w niskich temperaturach gorzej topią się i dają bledszy nadruk. 2100 została zaprojektowana właśnie pod ten scenariusz.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 2100 European Wax to wybór do **zastosowań premium na papierze**, gdzie zwykła 2300 nie wystarcza:\n\n- **Chłodnia i mroźnia** — etykiety wysyłkowe i opakowaniowe z All-Temp\n- **Transport mroźniczy** — łańcuch chłodniczy żywności, farmacja\n- **Etykiety farmaceutyczne** — wysoka jakość nadruku drobnych kodów 2D\n- **Druk z prędkością >10 ips** — drukarki przemysłowe pracujące szybko (ZT411, ZT610)\n- **Etykiety wysokiej jakości** na papierze powlekanym (Z-Select 2000T)',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 2100 European Wax to **pierwsza taśma do papierowych etykiet w niskich temperaturach**:\n\n- **8000T All-Temp** — to jest jej domyślne, najlepsze parowanie. Klej All-Temperature + taśma 2100 = etykieta działa od −20°C i przyklei się w chłodni.\n- **Z-Perform 1000T** — alternatywa względem 2300, gdy potrzebujesz wyższej jakości nadruku lub szybszego druku\n- **Z-Select 2000T** — premium papier powlekany (gdy 2300 nie daje wystarczającej ostrości kodów 2D)',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 2100 dostępna **głównie w wariantach industrial** (długości 450 m i 600 m z rdzeniem 25 mm) — przeznaczona pod szybkie drukarki przemysłowe Zebra (ZT411, ZT421, ZT610, ZT620). Konstrukcja **nawój zewnętrzny** — standard Zebry.\n\nDla drukarek desktopowych z 12 mm rdzeniem (ZD220/ZD230) zazwyczaj wybiera się tańsza 2300 Wax — 2100 byłaby przepłatą w tym formacie.',
  },
  {
  heading: 'Kiedy wybrać 2100 zamiast 2300',
  content:
   'Wybierz **2100 European Wax** gdy:\n\n- Drukujesz w chłodni lub mroźni (etykiety musza działać w niskich temperaturach)\n- Twoja drukarka przemysłowa pracuje z prędkością >10 ips i potrzebujesz ostrego nadruku\n- Potrzebujesz etykiet farmaceutycznych z drobnymi kodami 2D na papierze\n- Etykieta będzie miała kontakt z drobnymi zarysowaniami (premium ekspozycja produktu)\n\nDo typowego magazynu w temperaturze pokojowej — **2300 Wax** wystarczy i jest tańsza.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa premium (European wax)' },
  { label: 'Model', value: '2100 European Wax' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '304 mm/s (12 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: '8000T All-Temp, Z-Perform 1000T' },
  { label: 'Zakres temperatur', value: 'Działa od −20°C (chłodnia, mróz)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '15' },
  { label: 'Grupa cenowa', value: 'Premium woskowe' },
 ],
 applications: [
  'Etykiety wysokiej jakości na papierze',
  'Chłodnia i mroźnia (8000T All-Temp)',
  'Etykiety farmaceutyczne (drobne kody 2D)',
  'Druk z prędkością >10 ips',
  'Transport mroźniczy (łańcuch chłodniczy)',
  'Etykiety logistyczne wymagające ostrego nadruku',
 ],
 notRecommendedFor: [
  'Folie syntetyczne — wymagają żywicy',
  'Najtańsze etykiety budżetowe — wybierz 2300 lub 1600',
  'Outdoor / długoterminowa ekspozycja UV',
  'Aplikacje z agresywnymi chemikaliami',
  'Drukarki desktopowe 12 mm — wybierz 2300',
 ],
 compatiblePrinters: {
  desktop: ['ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz 2100 gdy drukujesz w chłodni/mroźni lub potrzebujesz ostrzejszego nadruku przy prędkości >10 ips. 2300 — do typowego magazynu w temperaturze pokojowej (taniej, bestseller).' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '2100 do papieru w chłodni. 3400 Wax/Resin gdy mróz dodatkowo łączy się z tarciem lub wilgocią (transport mroźniczy + przeładunki).' },
 ],
 faq: [
  { question: 'Czym 2100 European Wax różni się od 2300 Wax?', answer: '2100 ma zoptymalizowaną formulację pod europejskie warunki — ostrzejszy nadruk, lepszą odporność na zarysowania i, co kluczowe, działanie w niskich temperaturach (chłodnia, mróz). 2300 to bestseller do typowego magazynu w temperaturze pokojowej — taniej i wystarcza w 80% scenariuszy.' },
  { question: 'Czy 2100 nadaje się do mroźni?', answer: 'Tak — to jej kluczowa zaleta. 2100 European Wax została zoptymalizowana pod druk w niskich temperaturach i parowana z etykietami 8000T All-Temp daje pewny nadruk od −20°C. Standardowa 2300 w mrozie daje bledszy nadruk.' },
  { question: 'Jaką etykietę dobrać do 2100?', answer: 'Domyślnie 8000T All-Temp (mróz, chłodnia) lub Z-Perform 1000T (papier ogólny, gdy potrzebujesz wyższej jakości nadruku niż z 2300). Do papieru powlekanego premium (Z-Select 2000T) — również dobrze działa.' },
  { question: 'Czy 2100 ma certyfikat REACH?', answer: 'Tak — taśmy Zebra serii 2100 są zgodne z REACH i przeznaczone na rynek europejski. To istotne dla firm wymagających udokumentowanej zgodności chemicznej.' },
  { question: 'Czy 2100 drukuje na folii?', answer: 'Nie. To wciąż taśma woskowa — wiąże się tylko z papierem. Do folii (poliester, polipropylen, polietylen) wybierz taśmę żywiczną (5095 Resin) lub woskowo-żywiczną (3400 Wax/Resin).' },
 ],
 recommendedForLabels: [
  { seriesSlug: '8000t-all-temp', seriesName: '8000T All-Temp', role: 'primary' },
 ],
 },

 /* ──────────────── 3. 2300 WAX — BESTSELLER ──────────────── */
 {
 slug: '2300-wax',
 productId: 'zebra-2300-wax',
 category: 'woskowe',
 badge: 'Zebra 2300',
 title: 'Zebra 2300 Wax',
 tagline: 'Ekonomiczna woskowa do papieru — bestseller B2B.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 304,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: '+5°C do +35°C (magazynowanie)',
 priceFrom: 109.65,
 accent: '#F59E0B',
 heroImage: '/images/tasma-termotransferowa-zebra-2300-wax.png',
 heroImagePosition: '40% center',
 seoTitle: 'Zebra 2300 European Wax — woskowa taśma TT do papieru',
 seoDescription: 'Zebra 2300 European Wax — ekonomiczna uniwersalna woskowa taśma TT. Konstrukcja 8 μm, druk do 304 mm/s, atesty FDA 21 CFR 175.300, REACH, RoHS, LFGB. Magazyn, wysyłka, retail. 25 wariantów od 110 zł.',
 h1: 'Taśma termotransferowa Zebra 2300 European Wax',
 heroIntro: 'Zebra 2300 European Wax to **ekonomiczna uniwersalna woskowa taśma barwiąca** — bestseller w portfolio Zebry i najczęściej kupowana taśma w polskim B2B. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosku barwiącego, łącznie 8 μm**. Drukuje na **papierach powlekanych i niepowlekanych** z prędkością **do 304 mm/s (12 ips)** dla standardowych kodów kreskowych i **152 mm/s (6 ips)** dla obróconych. Nadruk czytelny zarówno w świetle widzialnym, jak i podczerwonym (IR + visible scannable). Komplet atestów regulacyjnych: **FDA 21 CFR 175.300** (pośredni kontakt z żywnością), **dyrektywa UE 1935/2004/WE**, **LFGB**, **REACH**, **RoHS**. Bez halogenów, bez bisfenolu A, bez lateksu, bez substancji pochodzenia zwierzęcego (vegan).',
 keyHighlights: [
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **8 μm**',
  'Prędkość druku do **304 mm/s** (12 ips) — standardowe kody, **152 mm/s** (6 ips) — obrócone',
  'Nadruk czytelny w **świetle podczerwonym i widzialnym** (IR + visible scannable)',
  'Atest **FDA 21 CFR 175.300** — pośredni kontakt z żywnością (powłoki żywiczne i polimerowe)',
  'Zgodność z **europejską dyrektywą żywnościową 1935/2004/WE** i niemieckim **LFGB**',
  'REACH/SVHC, RoHS, California Proposition 65 — pełna zgodność regulacyjna',
  'Bez halogenów, **bez bisfenolu A**, bez lateksu, **bez substancji pochodzenia zwierzęcego** (vegan)',
  'Dostępna w 25 wariantach od 33 do 220 mm szerokości, długości 74–900 m',
  'Rdzeń 12 mm (desktop) i 25 mm (przemysłowe) — pokrywa wszystkie drukarki Zebra TT',
  'Konstrukcja nawój zewnętrzny (Outside Coated) — standard Zebry',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność druku',
  content:
   'Zebra 2300 European Wax ma **dwuwarstwową konstrukcję** zoptymalizowaną pod biurkowe drukarki termiczne Zebra (desktop) oraz średniej i wysokiej klasy:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — odporna mechanicznie warstwa nośnika, na której osadzona jest warstwa wosku barwiącego\n- **Warstwa wosku barwiącego (czarny)** — topi się pod głowicą termiczną i przenosi na podłoże papierowe\n- **Grubość całkowita: 8 μm** — cienka konstrukcja pozwala na wysokie prędkości druku bez obciążenia mechanizmu drukarki\n\n**Wydajność druku:**\n\n- **Do 304 mm/s (12 ips)** dla standardowych kodów kreskowych — najwyższa prędkość wśród taśm woskowych Zebra\n- **Do 152 mm/s (6 ips)** dla obróconych kodów kreskowych (rotated barcodes) — ostry nadruk przy zmianach orientacji\n- **Nadruk czytelny w świetle podczerwonym i widzialnym** — skanery IR (handheld, stacjonarne, machine vision) i wizualne odczytują kod równie niezawodnie\n\nTo wydajność klasy standardowej (Standard) — szybsza niż 1600 Wax (budżetowa) i porównywalna z 2100 European Wax (High Performance), ale w przystępnej cenie bestsellera.',
  },
  {
  heading: 'Atesty regulacyjne i zgodność z normami',
  content:
   'Zebra 2300 European Wax posiada **komplet atestów regulacyjnych** wymaganych przez branżę spożywczą, farmaceutyczną i konsumencką:\n\n**Atesty żywnościowe:**\n\n- **FDA 21 CFR część 175.300** — amerykańska rekomendacja dla powłok żywicznych i polimerowych w pośrednim kontakcie z żywnością. Pozwala na stosowanie etykiet z nadrukiem 2300 Wax na opakowaniach żywności w USA.\n- **Dyrektywa europejska 1935/2004/WE** — unijne rozporządzenie ramowe dla materiałów do kontaktu z żywnością.\n- **LFGB** (niemieckie zatwierdzenie żywnościowe) — dla niemieckiego i austriackiego rynku spożywczego.\n\n**Atesty chemiczne i bezpieczeństwo:**\n\n- **REACH** + lista **SVHC** (substancje wzbudzające szczególne obawy)\n- **RoHS** (ograniczenie substancji niebezpiecznych)\n- **Ustawa Dodda-Franka** (conflict minerals — brak minerałów konfliktu)\n- **Ustawa kontroli substancji toksycznych z 1976 r.** (TSCA)\n- **Substancje rakotwórcze, mutagenne, działające szkodliwie na rozrodczość lub toksyczne** (CMR) — zgodność\n- **Dyrektywa 1976/769/WE** (substancje niebezpieczne)\n- **California Proposition 65** — zgodność z kalifornijską ustawą o substancjach toksycznych\n\n**Brak substancji niepożądanych:**\n\n- **Bez halogenów** (chlor, brom, fluor) — bezpieczne dla spalarni i recyklingu\n- **Bez bisfenolu A** (BPA-free)\n- **Bez lateksu** (latex-free) — dla osób uczulonych i procedur medycznych\n- **Bez substancji pochodzenia zwierzęcego** — vegan/animal-free, ważne dla branży kosmetycznej i spożywczej dla wegan',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Producent wskazuje **trzy główne segmenty zastosowań** dla 2300 European Wax:\n\n**Handel detaliczny:**\n\n- Etykiety produktowe na opakowania kartonowe\n- Metki z cenami i kodami kreskowymi dla sklepów detalicznych\n\n**Transport i logistyka:**\n\n- Wysyłka i przyjmowanie towaru — etykiety adresowe na paczkach\n- Etykiety do zastosowań ogólnych — opakowania zbiorcze, listy przewozowe\n- Dystrybucja — etykiety w łańcuchu dostaw, oznaczenia palet\n\n**Zakłady produkcyjne:**\n\n- Śledzenie zapasów — etykiety lokalizacyjne, regałowe, paletowe\n- Magazyn — picking, kompletacja zamówień, inwentaryzacja\n\nDodatkowe zastosowania niszowe (poza listą producenta): listy przewozowe WZ/PZ, etykiety partii produkcyjnych, oznaczenia kompletowanych zamówień w e-commerce, kurierskie etykiety adresowe (DHL, DPD, InPost, GLS).',
  },
  {
  heading: 'Magazynowanie i trwałość',
  content:
   'Zalecane warunki magazynowania zgodnie z kartą producenta:\n\n- **Temperatura przechowywania: 5°C do 35°C**\n- **Wilgotność względna: 20% do 80% RH**\n- **Trwałość magazynowa: 1 rok** od daty produkcji (oryginalne, nieuszkodzone opakowanie)\n\nPrzekroczenie zakresu (np. magazyn nieklimatyzowany latem powyżej 35°C, lub poniżej 5°C zimą w nieogrzewanych magazynach) może spowodować degradację warstwy wosku, sklejanie się rolki lub problemy z transferem podczas druku. Dla aplikacji w **chłodni lub mroźni** wybierz **2100 European Wax** — zoptymalizowana pod niskie temperatury druku.',
  },
  {
  heading: 'Numer próbki i pierwsze zamówienie',
  content:
   'Do testów na drukarkach **średniej i wysokiej klasy** zamów rolkę próbną o numerze katalogowym **02300BK11005** (rozmiar 110 × 50 mm/m, rdzeń 25 mm) — standardowy SKU testowy producenta. Dla drukarek biurkowych (desktop) lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę i etykietę.\n\nDostępne szerokości: **33, 40, 57, 60, 64, 83, 89, 102, 110, 131, 156, 170, 220 mm**. Długości od **74 m** (desktop, rdzeń 12 mm) do **900 m** (przemysłowe, rdzeń 25 mm). Pełna gama 25 wariantów — z reguły dostępne od ręki dla popularnych rozmiarów (110×450, 110×300, 83×450).',
  },
  {
  heading: 'Kiedy wybrać 2300, a kiedy coś innego?',
  content:
   'Wybierz **2300 European Wax** w 90% scenariuszy z papierem TT. Przesiądź się gdy:\n\n- **Chłodnia lub mróz** → 2100 European Wax (zoptymalizowana pod niskie temperatury)\n- **Wilgoć, tarcie, lekkie chemikalia** → 3200 Wax/Resin (woskowo-żywiczna)\n- **Folia syntetyczna (PE, PP, PET)** → 5095 Resin (taśma woskowa nie zwiąże się z folią)\n- **Outdoor lub UV długoterminowy** → 5095 Resin lub 5100 Premium Resin\n- **Najniższy koszt rolki za wszelką cenę** → 1600 Wax (ale jakość niższa)\n\n2300 to **bezpieczny, sprawdzony wybór** dla typowych zastosowań — magazyn, wysyłka, retail, śledzenie zapasów. Pełna paleta szerokości, kompatybilność ze wszystkimi drukarkami Zebra (desktop, mid-range, industrial), atesty żywnościowe i regulacyjne — i wszystko w przystępnej cenie bestsellera.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa (Wax) — klasa Standard' },
  { label: 'Model', value: '2300 European Wax' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '8 μm' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Maks. prędkość druku — standardowe kody', value: '304 mm/s (12 ips)' },
  { label: 'Maks. prędkość druku — obrócone kody', value: '152 mm/s (6 ips)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne — uniwersalna skanowalność' },
  { label: 'Kompatybilne podłoża', value: 'Papier niepowlekany i powlekany' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") — desktop / 25 mm (1") — mid-range, industrial' },
  { label: 'Dostępne szerokości', value: '33, 40, 57, 60, 64, 83, 89, 102, 110, 131, 156, 170, 220 mm' },
  { label: 'Dostępne długości', value: '74 m, 300 m, 450 m, 900 m' },
  { label: 'Atest FDA', value: 'FDA 21 CFR część 175.300 — pośredni kontakt z żywnością (powłoki żywiczne i polimerowe)' },
  { label: 'Atest UE', value: 'Dyrektywa europejska 1935/2004/WE — materiały w kontakcie z żywnością' },
  { label: 'Atest niemiecki', value: 'LFGB (Lebensmittel- und Futtermittelgesetzbuch)' },
  { label: 'REACH / SVHC', value: 'Zgodność — udokumentowane bezpieczeństwo chemiczne' },
  { label: 'RoHS', value: 'Zgodność — ograniczenie substancji niebezpiecznych' },
  { label: 'Ustawa Dodda-Franka', value: 'Bez minerałów konfliktu' },
  { label: 'California Proposition 65', value: 'Zgodność' },
  { label: 'Halogeny', value: 'Bez halogenów (chlor, brom, fluor)' },
  { label: 'Bisfenol A (BPA)', value: 'Bez bisfenolu A (BPA-free)' },
  { label: 'Lateks', value: 'Bez lateksu (latex-free)' },
  { label: 'Substancje pochodzenia zwierzęcego', value: 'Brak (vegan / animal-free)' },
  { label: 'Temperatura magazynowania', value: '5°C do 35°C' },
  { label: 'Wilgotność magazynowania', value: '20% do 80% RH' },
  { label: 'Trwałość magazynowa', value: '1 rok od daty produkcji' },
  { label: 'Numer próbki', value: '02300BK11005 (110 × 50 mm/m, rdzeń 25 mm)' },
  { label: 'Polecane etykiety', value: 'Z-Perform 1000T, Z-Perform 1000T Removable, Z-Select 2000T' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '25' },
  { label: 'Grupa cenowa', value: 'Standardowa (bestseller)' },
 ],
 applications: [
  'Handel detaliczny — etykiety i metki produktowe, kody cenowe',
  'Transport i logistyka — wysyłka i przyjmowanie towaru, etykiety adresowe',
  'Dystrybucja — etykiety w łańcuchu dostaw, oznaczenia palet',
  'Zakłady produkcyjne — śledzenie zapasów, etykiety lokalizacyjne',
  'Magazyn — picking, kompletacja zamówień, etykiety regałowe',
  'Inwentaryzacja — etykiety partii, oznaczenia środków obrotowych',
  'Listy przewozowe — WZ, PZ, dokumentacja magazynowa',
  'E-commerce — etykiety kurierskie (DHL, DPD, InPost, GLS) na opakowaniach kartonowych',
  'Branża spożywcza — etykiety na opakowaniach zbiorczych (pośredni kontakt, FDA + 1935/2004/WE)',
  'Branża kosmetyczna — etykiety na opakowaniach kartonowych (vegan, bez substancji zwierzęcych)',
 ],
 notRecommendedFor: [
  'Folie syntetyczne (PE, PP, PET) — wosk nie wiąże się chemicznie z folią; wybierz 5095 Resin',
  'Chłodnia lub mróz (poniżej 5°C) — wybierz 2100 European Wax (zoptymalizowana pod niskie temp.)',
  'Etykiety z kontaktem z wilgocią lub chemikaliami — wybierz 3200 Wax/Resin (woskowo-żywiczna)',
  'Zastosowania zewnętrzne lub długoterminowy kontakt z UV — wybierz folię + 5095 Resin',
  'Plomby zabezpieczające (VOID) i tabliczki znamionowe — wybierz 5095 lub 4800 Resin',
  'Bezpośredni kontakt z żywnością (poza opakowaniem) — FDA 175.300 obejmuje tylko pośredni kontakt',
  'Magazynowanie powyżej 35°C lub poniżej 5°C — degradacja warstwy wosku',
  'Tabliczki znamionowe z certyfikatem UL — 2300 Wax nie ma UL Recognized (wybierz 5095 lub 3400)',
 ],
 compatiblePrinters: {
  desktop: ['ZD220t', 'ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'FDA 21 CFR 175.300', description: 'Amerykańska rekomendacja FDA dla powłok żywicznych i polimerowych w pośrednim kontakcie z żywnością. Pozwala na stosowanie etykiet z nadrukiem 2300 Wax na opakowaniach żywności w USA.' },
  { name: 'Dyrektywa UE 1935/2004/WE', description: 'Unijne rozporządzenie ramowe dla materiałów i wyrobów przeznaczonych do kontaktu z żywnością. Wymóg podstawowy dla branży spożywczej w UE.' },
  { name: 'LFGB (Niemcy)', description: 'Niemieckie zatwierdzenie żywnościowe (Lebensmittel- und Futtermittelgesetzbuch) — dla rynku niemieckiego i austriackiego.' },
  { name: 'REACH / SVHC', description: 'Zgodność z europejskim rozporządzeniem REACH i listą substancji wzbudzających szczególne obawy (SVHC). Udokumentowane bezpieczeństwo chemiczne.' },
  { name: 'RoHS', description: 'Zgodność z dyrektywą ograniczającą stosowanie substancji niebezpiecznych w sprzęcie elektronicznym i elektrotechnicznym.' },
  { name: 'Ustawa Dodda-Franka', description: 'Brak minerałów konfliktu (conflict minerals) — zgodność z amerykańską ustawą z 2010 r.' },
  { name: 'Ustawa TSCA (1976)', description: 'Amerykańska ustawa o kontroli substancji toksycznych (Toxic Substances Control Act).' },
  { name: 'California Proposition 65', description: 'Zgodność z kalifornijską ustawą o substancjach toksycznych.' },
  { name: 'CMR', description: 'Bez substancji rakotwórczych, mutagennych ani działających szkodliwie na rozrodczość lub toksycznych.' },
  { name: 'Bez halogenów', description: 'Brak chloru, bromu i fluoru w składzie — bezpieczne dla procesów spalania i recyklingu.' },
  { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i konsumenckich.' },
  { name: 'Bez lateksu', description: 'Bez lateksu (latex-free) — dla osób uczulonych i procedur farmaceutycznych wymagających środowisk wolnych od alergenów.' },
  { name: 'Bez substancji pochodzenia zwierzęcego', description: 'Vegan / animal-free — ważne dla branży kosmetycznej, spożywczej dla wegan i etycznych etykiet.' },
 ],
 comparedWith: [
  { seriesSlug: '1600-wax', whenToChooseThis: 'Wybierz 2300 w 99% scenariuszy — bestseller z lepszą jakością nadruku, wyższą prędkością druku (304 mm/s vs 254 mm/s) i pełnym kompletem atestów żywnościowych. 1600 wybierz tylko gdy budżet jest absolutnym priorytetem.' },
  { seriesSlug: '2100-wax', whenToChooseThis: '2300 do typowego magazynu w temperaturze pokojowej. **2100 European Wax** — gdy drukujesz w chłodni, mroźni, lub potrzebujesz ostrzejszego nadruku przy >10 ips (klasa High Performance).' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '2300 do papieru w typowych warunkach (suchych). **3200 Wax/Resin** — gdy etykieta będzie miała kontakt z wilgocią, tarciem lub lekkimi chemikaliami (służba zdrowia, gastronomia, transport mroźniczy).' },
  { seriesSlug: '5095-resin', whenToChooseThis: '2300 do papierowych etykiet. **5095 Resin** gdy drukujesz na foliach syntetycznych (PET, PP, PE) — tabliczki znamionowe, etykiety chemicznie odporne, kriogeniczne (Cryocool), Z-Ultimate. Wosk nie wiąże się z folią — to inny mechanizm.' },
 ],
 faq: [
  { question: 'Dlaczego 2300 Wax to bestseller?', answer: '2300 to "domyślna" taśma do papieru — pokrywa 80% typowych zastosowań magazynowych i logistycznych. Bezpieczna, sprawdzona, w pełnej gamie szerokości i długości, kompatybilna ze wszystkimi drukarkami Zebra. Tania, dobra jakość, dostępna od ręki. Komplet atestów żywnościowych (FDA, UE, LFGB) i regulacyjnych (REACH, RoHS) — gotowa do większości branż.' },
  { question: 'Jaka jest dokładna konstrukcja 2300 Wax?', answer: '**Dwuwarstwowa**: powłoka bazowa z poliestru (PET) **4,5 μm** + warstwa wosku barwiącego (czarny). **Łączna grubość 8 μm**. Konstrukcja nawój zewnętrzny (Outside Coated) — standard Zebry, kompatybilność ze wszystkimi drukarkami Zebra TT.' },
  { question: 'Z jaką maksymalną prędkością drukuje 2300?', answer: '**Do 304 mm/s (12 cali na sekundę)** dla standardowych kodów kreskowych — najwyższa prędkość wśród taśm woskowych Zebra. Dla **obróconych kodów kreskowych** (rotated barcodes) maksymalna prędkość to **152 mm/s (6 ips)** — niższa, bo wymaga większej precyzji nadruku przy zmianach orientacji. Nadruk czytelny w świetle podczerwonym i widzialnym.' },
  { question: 'Czy 2300 ma atesty żywnościowe?', answer: 'Tak — komplet atestów: **FDA 21 CFR część 175.300** (USA — powłoki żywiczne i polimerowe w pośrednim kontakcie z żywnością), **dyrektywa europejska 1935/2004/WE** (UE — materiały w kontakcie z żywnością), oraz **LFGB** (niemieckie zatwierdzenie żywnościowe). Dodatkowo: **bez bisfenolu A**, **bez lateksu**, **bez halogenów**, **bez substancji pochodzenia zwierzęcego** (vegan). Można stosować na opakowaniach żywności w UE, USA i Niemczech.' },
  { question: 'Czy 2300 ma certyfikat UL?', answer: '**Nie.** 2300 European Wax to taśma woskowa do papieru — bez UL Recognized. Dla aplikacji wymagających UL (tabliczki znamionowe sprzętu elektronicznego sprzedawanego w USA/Kanadzie) wybierz **Zebra 5095 Resin** (UL approved z Z-Ultimate 3000T White) lub **3400 Wax/Resin** (UL approved z 8000T Void Matte).' },
  { question: 'Jaka jest różnica między 2300 a 3200?', answer: '**2300** to czysta taśma woskowa do papieru. **3200** ma dodatkową warstwę żywicy (wax/resin) — daje wyższą odporność na ścieranie, wilgoć i lekkie chemikalia. Wybierz **2300** do suchego magazynu i typowej logistyki, **3200** gdy etykieta będzie narażona na trudniejsze warunki (wilgoć, dotyk wilgotnymi dłońmi w sklepach spożywczych, transport mroźniczy, kontakt z alkoholem dezynfekującym w służbie zdrowia).' },
  { question: 'Czy 2300 drukuje na folii poliestrowej?', answer: 'Nie. Taśma woskowa nie wiąże się chemicznie z folią syntetyczną — nadruk dałby się zetrzeć palcem. Do folii (Z-Ultimate, PolyPro, PolyE, Cryocool) wybierz **taśmę żywiczną — Zebra 5095 Resin lub 4800 Resin**. To najczęstszy błąd przy druku TT — wosk na folię = nadruk nieczytelny po pierwszym dotyku.' },
  { question: 'Jak dobrać szerokość taśmy 2300?', answer: 'Szerokość taśmy powinna być **o 2–5 mm szersza niż etykieta**. Do etykiety 100 mm wybierz taśmę 102 lub 110 mm. Chroni to głowicę drukującą przed bezpośrednim kontaktem z etykietą i przedłuża jej żywotność. Pełna gama szerokości 2300: **33, 40, 57, 60, 64, 83, 89, 102, 110, 131, 156, 170, 220 mm**.' },
  { question: 'Jaki rdzeń (gilzę) wybrać?', answer: 'Rdzeń **12 mm (0,5")** — do drukarek desktopowych Zebra (ZD220, ZD230, ZD411, ZD421 — warianty 74 m). Rdzeń **25 mm (1")** — do drukarek mid-range (ZD611) i przemysłowych (ZT411, ZT421, ZT610 — warianty 300, 450, 900 m). Sprawdź w specyfikacji drukarki.' },
  { question: 'Ile etykiet wydrukuję z jednej rolki 2300?', answer: 'Zależy od długości rolki i wysokości etykiety. **Rolka 450 m wystarczy na ok. 6 000 etykiet 76 mm** (typowa etykieta wysyłkowa A6 częściowa). Rolka **74 m** to ok. 1 000 etykiet 76 mm. Dla precyzyjnego wyliczenia pod Twój use case skontaktuj się z TAKMA — pomożemy dobrać optymalną długość rolki pod wolumen druku.' },
  { question: 'Jakie są warunki magazynowania?', answer: '**1 rok** od daty produkcji w temperaturze **5°C do 35°C** i wilgotności względnej **20% do 80%**. Przekroczenie zakresu (np. magazyn nieklimatyzowany latem powyżej 35°C) może spowodować degradację warstwy wosku, sklejanie się rolki lub problemy z transferem. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.' },
  { question: 'Czy mogę zamówić próbkę?', answer: 'Tak — numer katalogowy próbki Zebry to **02300BK11005** (rozmiar 110 × 50 mm/m, rdzeń 25 mm, do testów na drukarkach średniej i wysokiej klasy). Dla drukarek biurkowych (desktop) lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę i etykietę.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'primary' },
  { seriesSlug: 'z-perform-1000t-removable', seriesName: 'Z-Perform 1000T Removable', role: 'primary' },
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'primary' },
 ],
 downloads: [
  { name: 'Karta katalogowa Zebra 2300 European Wax (PL)', type: 'datasheet', url: '/datasheets/2300-european-wax-spec-sheet-pl-pl.pdf', size: '325 KB' },
 ],
 },

 /* ──────────────── 4. 5319 PERFORMANCE WAX — specjalistyczna ──────────────── */
 {
 slug: '5319-wax',
 productId: 'zebra-5319-wax',
 category: 'woskowe',
 badge: 'Zebra 5319',
 title: 'Zebra 5319 Performance Wax',
 tagline: 'Performance wax — szybki druk wysokiej rozdzielczości i warianty kolorowe (GOLD).',
 positioning: 'specjalistyczna',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 355,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: '+5°C do +50°C',
 priceFrom: 129.64,
 accent: '#F59E0B',
 seoTitle: 'Zebra 5319 Performance Wax — szybki druk wysokiej rozdzielczości',
 seoDescription: 'Zebra 5319 Performance Wax — specjalistyczna taśma woskowa do industrial 24/7. Druk do 355 mm/s, wysoka rozdzielczość, wariant GOLD do druku dekoracyjnego. 14 wariantów od 130 zł netto.',
 h1: 'Taśma termotransferowa Zebra 5319 Performance Wax',
 heroIntro: 'Zebra 5319 Performance Wax to **specjalistyczna taśma woskowa** zaprojektowana dla wymagających zastosowań: bardzo wysoka prędkość druku (do **355 mm/s, 14 ips**), ostry kontrast, doskonała czytelność kodów kreskowych w wysokich rozdzielczościach. Idealna do drukarek przemysłowych pracujących 24/7. Dostępna również w **wariancie GOLD (złoty)** — do druku dekoracyjnego, etykiet premium i kart wstępu.',
 keyHighlights: [
  'Performance — prędkość druku do 355 mm/s (14 ips)',
  'Wariant GOLD (złoty) do druku dekoracyjnego',
  'Idealna do drukarek 24/7 (ZT411, ZT610)',
  'Drukuje ostre obrócone kody kreskowe (ladder)',
  'Nawój zewnętrzny — standard Zebry',
  '14 wariantów (czarny + warianty kolorowe BL, RD, GD)',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 5319 Performance Wax?',
  content:
   'Zebra 5319 Performance Wax to **specjalistyczna taśma woskowa wysokiej wydajności** — zoptymalizowana pod druk z bardzo wysoką prędkością (355 mm/s, 14 ips) na drukarkach przemysłowych pracujących 24/7. Daje ostry kontrast nawet przy gęstych kodach 2D i drobnym tekście, a także drukuje wysokiej jakości **obrócone kody kreskowe (ladder)** — bez utraty czytelności linii poziomych.\n\nTo nie jest "zamiennik 2300" — to taśma do konkretnych przemysłowych zastosowań produkcyjnych, gdzie standardowa 2300 byłaby wąskim gardłem prędkości lub jakości.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 5319 Performance Wax używa się głównie w **przemysłowej produkcji etykiet**:\n\n- **Industrial 24/7** — linie produkcyjne drukujące tysiące etykiet dziennie\n- **Etykiety wysokiej rozdzielczości** — wymagana ostrość drobnych kodów 2D (DataMatrix, QR)\n- **Druk obróconych kodów (ladder)** — gdy etykieta jest skanowana w pozycji "schodów"\n- **Wariant GOLD** — etykiety dekoracyjne, karty wstępu, premium oznaczenia\n- **Warianty kolorowe (RD, BL)** — czerwony i niebieski do specjalnych aplikacji',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   '5319 Performance Wax to **niche** — nie jest pierwszą rekomendacją dla typowych etykiet papierowych. Używana głównie:\n\n- W zakładach produkcyjnych z dużymi wolumenami druku\n- Gdy potrzebujesz ostrego nadruku obróconych kodów\n- Gdy potrzebujesz wariantów kolorowych (GOLD do premium, RD/BL do specjalnych oznaczeń)\n\nDo typowych etykiet wysyłkowych i magazynowych — **2300 Wax** jest tańsza i wystarczająca.',
  },
  {
  heading: 'Warianty kolorowe — GOLD, RED, BLUE',
  content:
   '5319 to jedna z **niewielu taśm Zebra dostępnych w wariantach kolorowych**:\n\n- **GOLD** — złoty kolor, druk dekoracyjny: karty wstępu, etykiety premium, oznaczenia VIP\n- **RD (red)** — czerwony, oznaczenia ostrzegawcze, etykiety bezpieczeństwa\n- **BL (blue)** — niebieski, oznaczenia kategorii w produkcji\n- **BK (black)** — standardowy czarny\n\nWarianty kolorowe są niszowe — kupowane do konkretnych projektów. Większość zamówień to wciąż czarna wersja.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 5319 dostępna głównie w wariantach industrial (długość 450 m, rdzeń 25 mm) — przeznaczona pod szybkie drukarki przemysłowe Zebra (ZT411, ZT421, ZT610). Konstrukcja **nawój zewnętrzny** — standard Zebry. Część wariantów dostępna w długości 74 m dla drukarek desktopowych — ale to atypowe.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa performance' },
  { label: 'Model', value: '5319 Performance Wax' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '355 mm/s (14 ips)' },
  { label: 'Warianty kolorowe', value: 'BK (czarny), GD (złoty), RD (czerwony), BL (niebieski)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '14' },
  { label: 'Grupa cenowa', value: 'Specjalistyczne' },
 ],
 applications: [
  'Industrial 24/7 — duże wolumeny druku',
  'Etykiety wysokiej rozdzielczości',
  'Druk obróconych kodów kreskowych (ladder)',
  'Wariant GOLD — etykiety dekoracyjne, karty wstępu',
  'Warianty RD/BL — oznaczenia kategorii i bezpieczeństwa',
  'Premium etykiety produktowe z metalicznym akcentem',
 ],
 notRecommendedFor: [
  'Typowy magazyn — wybierz tańszą 2300 Wax',
  'Folie syntetyczne — wymaga taśmy żywicznej',
  'Chłodnia/mróz — wybierz 2100 European Wax',
  'Outdoor / UV',
  'Aplikacje z agresywnymi chemikaliami',
 ],
 compatiblePrinters: {
  desktop: ['ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz 5319 gdy potrzebujesz prędkości >12 ips, ostrego druku obróconych kodów lub wariantu kolorowego (GOLD). W typowym magazynie — 2300 wystarczy i jest tańsza.' },
  { seriesSlug: '2100-wax', whenToChooseThis: '5319 do druku z prędkością 14 ips na linii produkcyjnej. 2100 — gdy potrzebujesz pracy w chłodni/mroźni (5319 nie jest zoptymalizowana pod niskie temperatury).' },
 ],
 faq: [
  { question: 'Czym 5319 różni się od 2300?', answer: '5319 to taśma performance — wyższa prędkość druku (14 vs 12 ips), ostrzejsze obrócone kody i dostępność w wariantach kolorowych (GOLD, RD, BL). Stosowana głównie w industrial 24/7. Do typowego magazynu 2300 wystarcza i jest tańsza.' },
  { question: 'Co to jest wariant GOLD?', answer: 'GOLD to wariant 5319 z taśmą barwiącą w kolorze złotym — używana do druku dekoracyjnego: karty wstępu, etykiety premium, oznaczenia VIP. Jedna z niewielu taśm Zebra w kolorze metalicznym.' },
  { question: 'Czy 5319 drukuje na folii?', answer: 'Nie. Mimo wysokiej wydajności to wciąż taśma woskowa — wiąże się tylko z papierem. Do folii potrzebujesz taśmy żywicznej (5095 Resin) lub woskowo-żywicznej (3200 Wax/Resin).' },
  { question: 'Do jakich drukarek pasuje 5319?', answer: 'Głównie drukarki przemysłowe Zebra z prędkością druku >10 ips — ZT411, ZT421, ZT610, ZT620. Wykorzystuje swoje atuty właśnie tam.' },
 ],
 recommendedForLabels: [],
 },

 /* ════════════════ WOSKOWO-ZYWICZNE (4) ════════════════ */

 /* ──────────────── 5. 3200 WAX/RESIN — BESTSELLER WR ──────────────── */
 {
 slug: '3200-wax-resin',
 productId: 'zebra-3200-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 3200',
 title: 'Zebra 3200 Premium Wax/Resin',
 tagline: 'Premium wosk-żywica — odporność chemiczna, UL Recognized.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 254,
 chemicalResistance: 'średnia',
 uvResistance: 'brak',
 temperatureRange: 'Magazynowanie 22°C, 50% RH',
 priceFrom: 163.18,
 accent: '#A855F7',
 heroImage: '/images/tasma-termotransferowa-zebra-3200-wax-resin.png',
 heroImagePosition: '70% center',
 seoTitle: 'Zebra 3200 Premium Wax/Resin — UL Recognized z 7 etykietami',
 seoDescription: 'Zebra 3200 Premium Wax/Resin — premium taśma wosk-żywica z UL Recognized. Konstrukcja PET 4,5 μm + 8,6 μm total. Odporność na rozpuszczalniki, ścieranie i agresywne chemikalia. Do papierów powlekanych i syntetyków. 21 wariantów od 163 zł.',
 h1: 'Taśma termotransferowa Zebra 3200 Premium Wax/Resin',
 heroIntro: 'Zebra 3200 Premium Wax/Resin to **wysokowydajna taśma wosk-żywica** zaprojektowana specjalnie do drukarek termotransferowych Zebra. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosk-żywicowa, łącznie 8,6 μm (±10%)**. Wyróżnia się **wybitną jakością druku w połączeniu z odpornością chemiczną i rozpuszczalnikową** — odporność na rozmazywanie i zarysowania na powlekanych papierach i matowych syntetycznych etykietach Zebra. Posiada **certyfikat UL Recognized** w zestawieniu z wybranymi etykietami premium z globalnego portfolio Zebra. Dla aplikacji UL Recognized w polskim portfolio TAKMA rekomendujemy alternatywnie **Zebra 5095 Resin + Z-Ultimate 3000T** (czysta żywica, dostępna w PL). Skanowalność w świetle podczerwonym i widzialnym.',
 keyHighlights: [
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **8,6 μm (±10%)**',
  'Skanowalność w świetle podczerwonym (IR) i widzialnym',
  '**UL Recognized** w zestawieniu z wybranymi etykietami premium Zebra (lista niedostępna w polskim portfolio — dla UL z PL wybierz 5095 Resin + Z-Ultimate)',
  'Doskonała odporność chemiczna i rozpuszczalnikowa — odporność na rozmazywanie i zarysowania',
  'Drukuje na **powlekanych papierach** i **matowych materiałach syntetycznych**',
  'Maksymalna prędkość druku 254 mm/s (10 ips)',
  'Magazynowanie: **1 rok** w temperaturze 22°C, wilgotność 50% RH',
  'Konstrukcja nawój zewnętrzny (Outside Coated) — standard Zebry',
  '21 wariantów szerokości od 33 do 220 mm',
  'Numer próbki: **03200BK08005** (80 × 50 mm/m, rdzeń 25 mm)',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 3200 Premium Wax/Resin to **specjalna formuła atramentu** dedykowana drukarkom termotransferowym Zebra:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — odporna mechanicznie warstwa nośnika\n- **Warstwa wosk-żywicowa (czarna)** — formuła łącząca zalety wosku (łatwe topienie, ostry nadruk) z dodatkiem żywicy (wyższa odporność chemiczna)\n- **Grubość całkowita: 8,6 μm (±10%)** — w środku między czystym woskiem (8 μm) a czystą żywicą (6,5 μm)\n- Konstrukcja nawój zewnętrzny (Outside Coated)\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible) — uniwersalna współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami machine vision\n\n**Wydajność:**\n\n- Maksymalna prędkość druku **254 mm/s (10 ips)** — niższa od czystej woskowej 2300 (304 mm/s), ale wyższa od żywicy 5095 (203 mm/s). To typowe dla taśm wosk-żywicowych — dodatek żywicy wymaga nieco wolniejszego topienia.\n- Doskonała **odporność na rozmazanie i zarysowania** (smear and scratch resistance) na podłożach Zebra\n- Wytrzymałość w trudnych warunkach — **chemikaliach, rozpuszczalnikach, ścieraniu**\n- Drukuje na **powlekanych papierach** (Z-Select 2000T) i **matowych materiałach syntetycznych** (PolyPro Matte)',
  },
  {
  heading: 'UL Recognized — dostępność w polskim portfolio',
  content:
   'Zebra 3200 Premium Wax/Resin posiada **certyfikat UL Recognized** w kombinacji z wybranymi etykietami premium z globalnego portfolio Zebra (kombinacja taśmy + etykiety jest certyfikowana razem). **W polskim portfolio TAKMA** żadna z certyfikowanych etykiet UL z 3200 nie jest dostępna w stałej dystrybucji.\n\n**Co to oznacza w praktyce:** jeśli producent komponentu sprzedawanego na rynki USA/Kanada wymaga jednoznacznej zgodności **UL Recognized Component**, w polskim portfolio TAKMA należy wybrać alternatywne rozwiązanie:\n\n- **Zebra 5095 Resin** (czysta żywica, klasa High Performance) **+ Z-Ultimate 3000T White** lub **Z-Ultimate 3000T Silver** — kombinacja UL Recognized dostępna w PL\n- **Zebra 5095 Resin + 8000T Void Matte** — UL Recognized z funkcją zabezpieczającą VOID\n\n3200 Wax/Resin pozostaje doskonałym wyborem do **papierów powlekanych** (Z-Select 2000T), **polipropylenu matowego i błyszczącego** (PolyPro 3000T) oraz aplikacji wymagających odporności na rozpuszczalniki, ścieranie i tarcie — w aplikacjach niewymagających certyfikatu UL.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Pięć segmentów zastosowań dla 3200 Premium Wax/Resin — wszystkie wymagają trwałości w trudniejszych warunkach niż czysta woskowa:\n\n- **Etykiety narażone na rozpuszczalniki i chemikalia** — laboratoria, galwanizernie, produkcja chemiczna, gdzie etykieta ma kontakt z odczynnikami sanitarnymi\n- **Etykiety narażone na ścieranie lub tarcie** (abrasion or friction) — opakowania transportowane międzynarodowo, etykiety półkowe wielokrotnie dotykane przez klientów\n- **Aplikacje zewnętrzne w skrajnych warunkach** (outdoor labeling in extreme environments) — krótkoterminowo, gdzie potrzebna trwałość niż w czystej woskowej\n- **Etykietowanie beczek z chemikaliami** (chemical drum labeling) — pojemniki magazynowe, IBC, etykiety GHS (w połączeniu z odpowiednią etykietą)\n- **Etykiety narażone na wodę, parę, zasady lub kwasy** (alkali or acid solutions) — przemysł spożywczy, hale produkcyjne z myciem ciśnieniowym, laboratoria\n\nDodatkowe niszowe zastosowania (na bazie kompatybilnych etykiet Zebra): etykiety produktowe z grafiką na opakowaniach kosmetyków, etykiety transportowe międzynarodowe na opakowaniach zbiorczych, oznaczenia komponentów elektronicznych z UL Recognized.',
  },
  {
  heading: 'Magazynowanie i pierwsze zamówienie',
  content:
   'Zalecane warunki magazynowania zgodnie z kartą producenta:\n\n- **Temperatura: 72°F (22°C)**\n- **Wilgotność względna: 50% RH**\n- **Trwałość magazynowa: 1 rok** od daty produkcji\n\nWarunki magazynowania są zbliżone do typowych warunków biurowych — taśma nie wymaga klimatyzacji czy specjalnej szafy. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.\n\n**Numer próbki do testów:** 03200BK08005 (80 × 50 mm/m, rdzeń 25 mm) — standardowy SKU testowy producenta. Dla drukarek biurkowych lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę i etykietę.\n\nDostępne szerokości: 33, 40, 56, 57, 60, 64, 80, 83, 84, 89, 102, 110, 131, 156, 174, 220 mm. Długości od **74 m** (desktop, rdzeń 12 mm) do **450 m** (przemysłowe, rdzeń 25 mm).',
  },
  {
  heading: 'Kiedy wybrać 3200, a kiedy 3400, 5095 lub 4800?',
  content:
   'Wybierz **3200 Premium Wax/Resin** w 80% scenariuszy wosk-żywicowych — to standard średniej klasy. Przesiądź się gdy:\n\n- **Polietylen (PE) lub PolyPro w outdoor** → **3400 Wax/Resin High Performance** (zoptymalizowany pod PE i UV)\n- **Folia poliestrowa Z-Ultimate 3000T z najwyższą odpornością chemiczną lub wymóg UL Recognized** → **5095 Resin** (czysta żywica, klasa High Performance)\n- **Outdoor długoterminowy z UV** → **5095 Resin** lub **5100 Premium Resin**\n- **Najagresywniejsze chemikalia (aceton, MEK, ksylen)** → **8000 ChemResist** (specjalistyczna)\n- **Plomby destruktywne (Z-Destruct PE)** → **4800 Resin**',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Wosk-żywica (Wax/Resin) — klasa Premium' },
  { label: 'Model', value: '3200 Premium Wax/Resin' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Formuła atramentu', value: 'Wax/Resin (mieszanka wosku i żywicy)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '8,6 μm (±10%)' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '254 mm/s (10 ips)' },
  { label: 'Kompatybilne podłoża', value: 'Powlekane papiery, matowe materiały syntetyczne (polipropylen, PolyPro)' },
  { label: 'UL Recognized (globalnie)', value: 'W kombinacji z wybranymi etykietami premium Zebra (niedostępne w polskim portfolio — dla UL z PL użyj 5095 Resin + Z-Ultimate 3000T)' },
  { label: 'Odporność na rozmazywanie i zarysowania', value: 'Doskonała (smear and scratch resistance)' },
  { label: 'Odporność na rozpuszczalniki', value: 'Wysoka' },
  { label: 'Odporność na ścieranie i tarcie', value: 'Wysoka' },
  { label: 'Magazynowanie — temperatura', value: '22°C (72°F)' },
  { label: 'Magazynowanie — wilgotność', value: '50% RH' },
  { label: 'Trwałość magazynowa', value: '1 rok od daty produkcji' },
  { label: 'Numer próbki', value: '03200BK08005 (80 × 50 mm/m, rdzeń 25 mm)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") — desktop / 25 mm (1") — mid-range, industrial' },
  { label: 'Dostępne szerokości', value: '33, 40, 56, 57, 60, 64, 80, 83, 84, 89, 102, 110, 131, 156, 174, 220 mm' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '21' },
  { label: 'Grupa cenowa', value: 'Premium Wax/Resin' },
 ],
 applications: [
  'Etykiety narażone na rozpuszczalniki i chemikalia (laboratoria, galwanizernie)',
  'Etykiety narażone na ścieranie lub tarcie (transport międzynarodowy, etykiety półkowe)',
  'Aplikacje zewnętrzne w skrajnych warunkach (krótkoterminowo)',
  'Etykietowanie beczek z chemikaliami (chemical drum labeling)',
  'Etykiety narażone na wodę, parę, zasady lub kwasy (alkali or acid)',
  'Etykiety produktowe z grafiką (papiery powlekane Z-Select 2000T) — przemysł spożywczy, kosmetyczny',
  'Polipropylen biały i przezroczysty (PolyPro 3000T Gloss/Clear)',
  'Etykiety GHS na pojemnikach chemicznych (z odpowiednią etykietą)',
  'Przemysł spożywczy — opakowania zbiorcze z myciem ciśnieniowym',
 ],
 notRecommendedFor: [
  'Folia poliestrowa Z-Ultimate (PET) — wymaga 5095 Resin (czysta żywica)',
  'Polietylen (PE) lub PolyPro w outdoor — wybierz 3400 Wax/Resin (High Performance)',
  'Outdoor długoterminowy z UV — wybierz 5095 lub 5100 Premium Resin',
  'Plomby destruktywne (8100T Z-Destruct PE) — wybierz 4800 Resin',
  'Krioprzechowywanie (-196°C, Cryocool) — wybierz 5095 Resin',
  'Najagresywniejsze chemikalia (aceton, MEK, ksylen, Skydrol) — wybierz 8000 ChemResist',
  'Etykiety na zewnątrz na lata — wybierz folię z 5100 Premium Resin',
  'Bardzo wolne drukarki <5 ips — formuła wax/resin wymaga wyższych prędkości',
 ],
 compatiblePrinters: {
  desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL Recognized Component', description: 'Amerykańska norma UL — 3200 Wax/Resin posiada certyfikat UL Recognized w kombinacji z wybranymi etykietami premium Zebra (lista niedostępna w polskim portfolio TAKMA). Dla aplikacji UL na polskim rynku rekomendujemy alternatywne rozwiązanie: 5095 Resin + Z-Ultimate 3000T (White, Silver) lub 8000T Void Matte.' },
  { name: 'Odporność chemiczna i rozpuszczalnikowa', description: 'Specjalna formuła wosk-żywicowa zapewnia wybitną odporność nadruku na rozmazywanie i zarysowania w kontakcie z rozpuszczalnikami, kwasami i zasadami.' },
  { name: 'Skanowalność IR + visible', description: 'Nadruk czytelny w świetle podczerwonym i widzialnym — uniwersalna współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami machine vision.' },
 ],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz **3200 Premium Wax/Resin** gdy etykieta będzie miała kontakt z **rozpuszczalnikami, chemikaliami, wilgocią lub tarciem** (laboratoria, healthcare, transport międzynarodowy) — lub gdy potrzebny UL Recognized. Do typowego magazynu suchego — **2300 European Wax** wystarczy i jest tańsza.' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '**3200** to standard premium WR z UL Recognized do **papierów powlekanych i polipropylenu**. **3400 High Performance** — gdy drukujesz na **polietylenie (PE)**, w **transporcie mroźniczym** lub potrzebujesz najwyższej wydajności WR.' },
  { seriesSlug: '5095-resin', whenToChooseThis: '**3200** (wax/resin) do papieru powlekanego i syntetycznych — bez wymogu UL. **5095 Resin** gdy drukujesz na **folii poliestrowej Z-Ultimate 3000T** (wymóg producenta), potrzebujesz **UL Recognized w polskim portfolio** (Z-Ultimate 3000T White/Silver, 8000T Void Matte), albo przy outdoor i agresywnych chemikaliach.' },
  { seriesSlug: '4800-resin', whenToChooseThis: '**3200** do typowych aplikacji wax/resin z UL. **4800 Resin** do **plomb destruktywnych** (8100T Z-Destruct PE) i etykiet z agresywnymi chemikaliami (beczki z odczynnikami laboratoryjnymi).' },
 ],
 faq: [
  { question: 'Jaka jest dokładna konstrukcja 3200 Premium Wax/Resin?', answer: '**Dwuwarstwowa**: powłoka bazowa z poliestru (PET) **4,5 μm** + warstwa wosk-żywicowa (czarna). **Łączna grubość 8,6 μm (±10%)** — w środku między czystym woskiem 2300 (8 μm) a czystą żywicą 5095 (6,5 μm). Konstrukcja nawój zewnętrzny (Outside Coated). Skanowalność w świetle podczerwonym i widzialnym.' },
  { question: 'Co oznacza "wax/resin" (wosk-żywica)?', answer: 'Mieszanka wosku i żywicy — daje połączenie zalet obu materiałów. Wosk zapewnia łatwe topienie i ostry nadruk; żywica zwiększa **odporność na rozmazywanie i zarysowania**, kontakt z rozpuszczalnikami i chemikaliami. Taśma uniwersalna pomiędzy czystą woskową (2300) a czystą żywiczną (5095).' },
  { question: 'Czy 3200 ma UL Recognized z etykietami dostępnymi w Polsce?', answer: 'Zebra 3200 Wax/Resin posiada certyfikat UL Recognized w kombinacji z wybranymi etykietami premium z globalnego portfolio Zebra — **żadna z nich nie jest dostępna w stałej dystrybucji polskiej**. Dla aplikacji wymagających UL Recognized w polskim portfolio TAKMA rekomendujemy: **5095 Resin + Z-Ultimate 3000T White/Silver** lub **5095 Resin + 8000T Void Matte** (dla aplikacji z funkcją VOID).' },
  { question: 'Czy 3200 drukuje na poliestrze Z-Ultimate?', answer: 'Nie polecane jako pierwszy wybór. Producent wymaga czystej żywicy **5095 Resin** dla Z-Ultimate 3000T (White, Silver) — chemicznie wiąże się lepiej z poliestrem. 3200 zwiąże się z PET słabiej i nadruk może być mniej trwały w kontakcie z chemikaliami. Wybieraj 3200 do **papierów powlekanych** (Z-Select) i **syntetyków matowych/błyszczących** (PolyPro), 5095 do **PET** (Z-Ultimate).' },
  { question: 'Jakie są główne zastosowania 3200?', answer: 'Pięć segmentów: etykiety narażone na **rozpuszczalniki i chemikalia**, etykiety narażone na **ścieranie lub tarcie**, **aplikacje zewnętrzne w skrajnych warunkach** (krótkoterminowo), **etykietowanie beczek z chemikaliami**, etykiety narażone na **wodę, parę, zasady lub kwasy**.' },
  { question: 'Jaka jest maksymalna prędkość druku?', answer: '**254 mm/s (10 ips)** — niższa od czystej woskowej 2300 (304 mm/s), ale wyższa od czystej żywicy 5095 (203 mm/s). To typowe dla taśm wax/resin — dodatek żywicy wymaga nieco wolniejszego topienia dla trwałego transferu na podłoże.' },
  { question: 'Jakie są warunki magazynowania?', answer: '**1 rok** w temperaturze **22°C (72°F)** i wilgotności **50% RH** — warunki zbliżone do typowych warunków biurowych. Taśma nie wymaga klimatyzacji ani specjalnej szafy. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.' },
  { question: 'Czy 3200 nadaje się do outdoor?', answer: '**Krótkoterminowo tak** — „aplikacje zewnętrzne w skrajnych warunkach" to jedno z głównych zastosowań. Do **długoterminowego outdoor z UV** (powyżej 6 miesięcy) wybierz folię (PolyPro 3000T Gloss z 5095 Resin) lub Z-Ultimate z 5100 Premium Resin — taśmy WR nie mają pełnej odporności na promieniowanie UV.' },
  { question: 'Jaką szerokość 3200 dobrać?', answer: 'Szerokość taśmy powinna być **o 2–5 mm szersza niż etykieta**. Do etykiety 100 mm wybierz taśmę 102 lub 110 mm. Pełna gama 3200: 33, 40, 56, 57, 60, 64, 80, 83, 84, 89, 102, 110, 131, 156, 174, 220 mm.' },
  { question: 'Czy mogę zamówić próbkę?', answer: 'Tak — numer katalogowy próbki Zebry to **03200BK08005** (rozmiar 80 × 50 mm/m, rdzeń 25 mm — do testów na drukarkach średniej i wysokiej klasy). Dla drukarek biurkowych lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę, etykietę i wymagany atest.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'polypro-3000t-gloss', seriesName: 'PolyPro 3000T Gloss', role: 'primary' },
  { seriesSlug: 'polypro-3000t-clear', seriesName: 'PolyPro 3000T Clear', role: 'primary' },
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'alternative', when: 'Wybierz gdy etykieta będzie miała kontakt z wilgocią, rozpuszczalnikami lub tarciem (laboratoria, healthcare). Domyślnie dla Z-Select wystarcza 2300 Wax.' },
 ],
 downloads: [
  { name: 'Karta katalogowa Zebra 3200 Premium Wax/Resin (EN)', type: 'datasheet', url: '/datasheets/3200-wax-resin-spec-sheet-en-us.pdf', size: '114 KB' },
 ],
 },

 /* ──────────────── 6. 3300 WAX/RESIN — standard ──────────────── */
 {
 slug: '3300-wax-resin',
 productId: 'zebra-3300-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 3300',
 title: 'Zebra 3300 Wax/Resin',
 tagline: 'Standardowa woskowo-żywiczna — ekonomiczna do etykiet syntetycznych podstawowych.',
 positioning: 'standard',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 254,
 chemicalResistance: 'średnia',
 uvResistance: 'brak',
 temperatureRange: '0°C do +60°C',
 priceFrom: 196.08,
 accent: '#A855F7',
 seoTitle: 'Zebra 3300 Wax/Resin — standardowa taśma woskowo-żywiczna',
 seoDescription: 'Zebra 3300 Wax/Resin — standardowa, ekonomiczna taśma woskowo-żywiczna do podstawowych syntetycznych etykiet. Tańsza od 3200, do prostych krótkoseryjnych zastosowań. 4 warianty od 196 zł netto.',
 h1: 'Taśma termotransferowa Zebra 3300 Wax/Resin',
 heroIntro: 'Zebra 3300 Wax/Resin to **standardowa, ekonomiczna taśma woskowo-żywiczna** dla podstawowych zastosowań syntetycznych. Tańsza od bestsellera 3200, ale z niższą odpornością na ścieranie — wybieraj gdy zastosowanie jest proste (krótka eksploatacja, bez kontaktu z chemikaliami, brak certyfikatu UL).',
 keyHighlights: [
  'Tańsza alternatywa dla 3200 Wax/Resin',
  'Druk na podstawowych etykietach syntetycznych',
  'Druk do 254 mm/s (10 ips)',
  'Nawój zewnętrzny — standard Zebry',
  'Dostępna głównie w wariantach desktopowych (74 m)',
  '4 warianty szerokości',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 3300 Wax/Resin?',
  content:
   'Zebra 3300 Wax/Resin to **budżetowa odmiana taśmy woskowo-żywicznej** Zebry. Mniejszy udział żywicy w mieszance niż w 3200 — stąd niższa odporność na ścieranie, ale i niższa cena. Drukuje na podstawowych etykietach syntetycznych (proste polipropyleny) i papierze powlekanym, ale do bardziej wymagających aplikacji wybiera się 3200 (większa odporność, certyfikat UL) lub 3400 (do PE).\n\nNiche — kupowana głównie w wariantach desktopowych do drukarek ZD220/ZD230/ZD411 (długość 74 m, rdzeń 12 mm), gdy potrzeba taśmy WR ale w mniejszej skali i bez wymogu certyfikacji.',
  },
  {
  heading: 'Kiedy wybrać 3300',
  content:
   'Wybierz **3300 Wax/Resin** gdy:\n\n- Drukujesz krótkie serie na drukarce desktopowej (ZD-y) i potrzebujesz taśmy WR\n- Etykieta nie wymaga certyfikatu UL\n- Aplikacja jest prosta (brak kontaktu z agresywnymi chemikaliami, brak długiej eksploatacji)\n- Liczy się minimalna cena za rolkę 74 m\n\nW pozostałych scenariuszach — **3200 Wax/Resin** to bezpieczniejszy wybór (UL, większa odporność, pełniejsza gama).',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   '3300 to taśma WR ogólnego zastosowania — pasuje do podstawowych etykiet syntetycznych i papieru powlekanego, ale **bez priorytetowej rekomendacji** (Zebra preferuje 3200 dla większości scenariuszy WR). W praktyce 3300 kupuje się jako "tańsza wymienna" dla 3200 w prostych aplikacjach krótkoseryjnych.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 3300 dostępna w wariantach desktopowych (74 m, rdzeń 12 mm i 25 mm). Konstrukcja **nawój zewnętrzny** — kompatybilna z drukarkami Zebra obsługującymi OS. Wąska gama — 4 warianty szerokości (64, 84, 110 mm).',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowo-żywiczna budżetowa' },
  { label: 'Model', value: '3300 Wax/Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '254 mm/s (10 ips)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") i 25 mm (1")' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '4' },
  { label: 'Grupa cenowa', value: 'Budżet wax/resin' },
 ],
 applications: [
  'Etykiety syntetyczne podstawowe (krótkie serie)',
  'Krótkoterminowe oznaczenia produktów',
  'Druk testowy na materiałach foliowych',
  'Aplikacje desktopowe niskim wolumenie',
 ],
 notRecommendedFor: [
  'Wymagane certyfikaty UL — wybierz 3200',
  'Polietylen (PE) — wybierz 3400',
  'Folia poliestrowa — wybierz 5095 Resin',
  'Outdoor / UV',
  'Aplikacje z chemikaliami i tarciem',
 ],
 compatiblePrinters: {
  desktop: ['ZD220t', 'ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t'],
  industrial: [],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: 'Wybierz 3300 wyłącznie do krótkich serii desktopowych bez wymogu certyfikacji. W każdym innym scenariuszu WR — 3200 (bestseller, UL, pełniejsza gama).' },
 ],
 faq: [
  { question: 'Czym 3300 różni się od 3200?', answer: '3300 ma mniejszy udział żywicy — niższa cena, ale niższa odporność na ścieranie i brak certyfikatu UL. 3200 to bestseller wax/resin z certyfikatem UL. 3300 kupuje się jako tańszą wymienną do prostych krótkich serii desktopowych.' },
  { question: 'Do jakich etykiet pasuje 3300?', answer: '3300 nie ma priorytetowych rekomendacji — to taśma "ogólnego zastosowania" do podstawowych etykiet syntetycznych i papieru powlekanego w prostych aplikacjach. Dla konkretnych etykiet (PolyPro, Z-Select) wybiera się 3200 lub 2300.' },
  { question: 'Czy 3300 nadaje się do polietylenu (PE)?', answer: 'Słabo. Do PE wybierz 3400 Wax/Resin — zoptymalizowany pod polietylen. 3300 zwiąże się słabiej i nadruk będzie miał niższą trwałość.' },
 ],
 recommendedForLabels: [],
 },

 /* ──────────────── 7. 3400 WAX/RESIN — premium PE ──────────────── */
 {
 slug: '3400-wax-resin',
 productId: 'zebra-3400-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 3400',
 title: 'Zebra 3400 Wax/Resin',
 tagline: 'Premium wax/resin — do polietylenu (PE), polipropylenu w trudniejszych warunkach.',
 positioning: 'premium',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 203,
 chemicalResistance: 'wysoka',
 uvResistance: 'krótkoterminowa',
 temperatureRange: '-20°C do +80°C',
 priceFrom: 334.11,
 accent: '#A855F7',
 seoTitle: 'Zebra 3400 Wax/Resin — premium taśma do polietylenu i mroźni',
 seoDescription: 'Zebra 3400 Wax/Resin — premium taśma woskowo-żywiczna do polietylenu (PE), polipropylenu na zewnątrz i transportu mroźniczego. Wyższa odporność niż 3200. UL recognized. 11 wariantów od 334 zł netto.',
 h1: 'Taśma termotransferowa Zebra 3400 Wax/Resin',
 heroIntro: 'Zebra 3400 Wax/Resin to **premium taśma woskowo-żywiczna** zaprojektowana dla wymagających aplikacji syntetycznych. Lepsza od 3200 odporność na rozpuszczalniki, oleje, alkohol i wilgoć. Idealna do **polietylenu (PE)**, polipropylenu w **transporcie mroźniczym** i etykiet z lekkim kontaktem z chemikaliami. Certyfikat **UL recognized**.',
 keyHighlights: [
  'Premium wax/resin — wyższa odporność niż 3200',
  'Zoptymalizowana pod polietylen (PE)',
  'Działa w niskich temperaturach (transport mroźniczy)',
  'Odporność na rozpuszczalniki, oleje, alkohol',
  'Certyfikat UL recognized',
  '11 wariantów szerokości od 40 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 3400 Wax/Resin?',
  content:
   'Zebra 3400 Wax/Resin to **premium odmiana taśmy woskowo-żywicznej** z większym udziałem żywicy i zoptymalizowaną formulacją pod folie polietylenowe (PE). Daje nadruk odporny na większą gamę chemikaliów niż 3200 — rozpuszczalniki, oleje, alkohol, wilgoć. Dodatkowo działa w niskich temperaturach, dzięki czemu sprawdza się w **transporcie mroźniczym** etykiet z klejem All-Temperature.\n\nTo "pomost" między standardową WR (3200) a pełną żywicą (5095) — gdy 3200 nie wystarcza, ale folia z czysta żywicą byłaby przepłatą. Klasyczna kombinacja: PolyE 3100T Gloss + 3400.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 3400 Wax/Resin to wybór do **trudniejszych aplikacji syntetycznych**:\n\n- **Polietylen (PE)** — etykiety na butelkach, tubach, opakowaniach kosmetyków, chemii\n- **Polipropylen na zewnątrz** — etykiety produktowe z krótkoterminową ekspozycją UV\n- **Transport mroźniczy** — etykiety w łańcuchu chłodniczym z All-Temp\n- **Etykiety z lekkim kontaktem z chemikaliami** — kosmetyki, chemia gospodarcza\n- **Etykiety paliw i smarów** — gdy etykieta ma kontakt z olejem',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 3400 ma dwa priorytetowe parowania:\n\n- **PolyE 3100T Gloss** (polietylen — kosmetyki, chemia) — **3400 jest pierwszą rekomendacją**\n- **8000T All-Temp** (papier w mroźni) — **alternatywa** względem 2100 European Wax, gdy mróz dodatkowo łączy się z tarciem lub wilgocią (transport mroźniczy z przeładunkami)\n\nDla typowego PolyPro Gloss/Clear — wystarcza 3200 (taniej). 3400 ma sens właśnie gdy podłoże to PE lub gdy aplikacja jest "na zewnątrz lite".',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 3400 dostępna **wyłącznie w wariantach industrial** (długość 450 m, rdzeń 25 mm) — przeznaczona pod drukarki przemysłowe Zebra (ZT411, ZT421, ZT510, ZT610, ZT620). Konstrukcja **nawój zewnętrzny**.\n\n**Maksymalna prędkość druku 203 mm/s (8 ips)** — niższa niż w 3200 (10 ips). To typowe dla taśm z wyższym udziałem żywicy: wymagają nieco wolniejszego topienia dla pewnego związania z folią.',
  },
  {
  heading: 'Kiedy wybrać 3400 zamiast 5095',
  content:
   'Wybierz **3400 Wax/Resin** gdy:\n\n- Drukujesz na polietylenie (PE) w typowych warunkach kosmetyków/chemii — 5095 byłby przepłatą\n- Etykieta ma krótko-średnioterminową ekspozycję na zewnątrz (do roku) — 5095 da pełną odporność UV, ale 3400 wystarcza\n- Aplikacja mroźnicza z lekkim tarciem (transport)\n\nPrzesiądź się na **5095 Resin** gdy:\n\n- Drukujesz na poliestrze (Z-Ultimate) — wymóg producenta\n- Etykieta jest narażona na agresywne chemikalia (rozpuszczalniki, kwasy)\n- Outdoor długoterminowy (lata) lub ciągły UV',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowo-żywiczna premium' },
  { label: 'Model', value: '3400 Wax/Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '203 mm/s (8 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: 'PolyE 3100T Gloss, 8000T All-Temp' },
  { label: 'Certyfikaty', value: 'UL recognized' },
  { label: 'Odporność chemiczna', value: 'Wysoka (rozpuszczalniki, oleje, alkohol)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '11' },
  { label: 'Grupa cenowa', value: 'Premium wax/resin' },
 ],
 applications: [
  'Polietylen (PE) — kosmetyki, chemia',
  'Polipropylen na zewnątrz (krótkoterminowo)',
  'Transport mroźniczy (łańcuch chłodniczy + przeładunki)',
  'Etykiety z lekkim kontaktem z chemikaliami',
  'Etykiety paliw i smarów (kontakt z olejem)',
  'Etykiety motoryzacyjne podstawowe',
 ],
 notRecommendedFor: [
  'Folia poliestrowa (Z-Ultimate) — wybierz 5095 Resin',
  'Najtańsze typowe etykiety — wybierz 2300 lub 3200',
  'Outdoor długoterminowy — wybierz 5095',
  'Plomby zabezpieczające — wybierz 4800',
  'Krioprzechowywanie — wybierz 5095',
 ],
 compatiblePrinters: {
  desktop: [],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL recognized', description: 'Recognized component UL — uznanie materiału dla zastosowań przemysłowych regulowanych.' },
 ],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '3200 to bestseller WR uniwersalny (papier powlekany + polipropylen). 3400 — gdy drukujesz na PE, w transporcie mroźniczym lub z większymi wymaganiami chemicznymi.' },
  { seriesSlug: '5095-resin', whenToChooseThis: '3400 do PE w typowych warunkach (kosmetyki, opakowania). 5095 (resin) gdy potrzebujesz pełnej odporności UV, agresywnych chemikaliów lub drukujesz na poliestrze (Z-Ultimate).' },
 ],
 faq: [
  { question: 'Czym 3400 różni się od 3200?', answer: '3400 ma większy udział żywicy w mieszance — wyższa odporność na chemikalia i działanie w niskich temperaturach. Zoptymalizowana pod polietylen (PE). 3200 to bestseller uniwersalny — do polipropylenu i papieru powlekanego.' },
  { question: 'Czy 3400 drukuje na poliestrze?', answer: 'Tak, ale Zebra rekomenduje czysto żywiczną 5095 do Z-Ultimate. 3400 daje słabsze związanie z poliestrem niż 5095 — używaj 3400 do PE, a 5095 do PET.' },
  { question: 'Jaka etykieta jest priorytetowa dla 3400?', answer: 'PolyE 3100T Gloss (polietylen) — to jest jej domyślne, pierwsze parowanie. Druga to 8000T All-Temp jako alternatywa do 2100 European Wax w transporcie mroźniczym.' },
  { question: 'Czy 3400 ma certyfikat UL?', answer: 'Tak — UL recognized. To uznanie materiału pozwala stosować go w zastosowaniach przemysłowych regulowanych, ale jeśli potrzebujesz "UL certified" do etykiet GHS — wybierz 3200 lub 5095.' },
  { question: 'Dlaczego 3400 jest dostępna tylko w industrial (450 m)?', answer: 'To celowe — 3400 jest taśmą premium pod aplikacje przemysłowe (PE, transport mroźniczy). Drukarki desktopowe rzadko obsługują tego typu zastosowania w wolumenach uzasadniających taśmę WR premium. Dla desktopowych aplikacji WR Zebra ma 3200 i 3300.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'polye-3100t-gloss', seriesName: 'PolyE 3100T Gloss', role: 'primary' },
  { seriesSlug: '8000t-all-temp', seriesName: '8000T All-Temp', role: 'alternative', when: 'Wybierz gdy mróz łączy się z tarciem lub wilgocią (transport mroźniczy z przeładunkami). Domyślnie do 8000T All-Temp wystarcza 2100 European Wax.' },
 ],
 },

 /* ──────────────── 8. 5555 WAX/RESIN — niche ──────────────── */
 {
 slug: '5555-wax-resin',
 productId: 'zebra-5555-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 5555',
 title: 'Zebra 5555 Wax/Resin',
 tagline: 'Specjalistyczna woskowo-żywiczna — niche aplikacje, dostępność na zamówienie.',
 positioning: 'specjalistyczna',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 203,
 chemicalResistance: 'wysoka',
 uvResistance: 'krótkoterminowa',
 temperatureRange: '+5°C do +60°C',
 priceFrom: 1317.41,
 accent: '#A855F7',
 seoTitle: 'Zebra 5555 Wax/Resin — specjalistyczna taśma do niche aplikacji',
 seoDescription: 'Zebra 5555 Wax/Resin — specjalistyczna taśma do niche zastosowań syntetycznych (machine vision, specialty labels). Dostępność na zamówienie. Skonsultuj z doradcą.',
 h1: 'Taśma termotransferowa Zebra 5555 Wax/Resin',
 heroIntro: 'Zebra 5555 Wax/Resin to **specjalistyczna taśma do niche aplikacji syntetycznych** — bardzo rzadko zamawiana, zazwyczaj na konkretne projekty (machine vision, specialty labels). Skontaktuj się z naszym doradcą żeby ustalić, czy 5555 jest właściwym wyborem dla Twojego zastosowania — w 95% scenariuszy WR lepszą rekomendacją są 3200 lub 3400.',
 keyHighlights: [
  'Niche taśma do konkretnych projektów',
  'Specjalistyczna — bardzo wąska gama wariantów',
  'Dostępność na zamówienie — skonsultuj się z doradcą',
  'Typowe zastosowanie: machine vision',
  'Dostępna w wariancie 110 × 30 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 5555 Wax/Resin?',
  content:
   'Zebra 5555 Wax/Resin to **niche, specjalistyczna taśma woskowo-żywiczna** — kupowana w pojedynczych przypadkach do konkretnych projektów przemysłowych. Najczęściej zastosowanie: machine vision, gdzie wymagana jest bardzo specyficzna formulacja zapewniająca konkretny kontrast dla systemów rozpoznawania obrazu.\n\nW 95% zastosowań WR lepszym wyborem są 3200 (bestseller, UL, pełna gama) lub 3400 (premium, PE, mróz). 5555 to taśma do specyficznych wymagań technicznych, które warto skonsultować z doradcą przed zamówieniem.',
  },
  {
  heading: 'Kiedy może być potrzebna',
  content:
   'Zebra 5555 ma sens, gdy:\n\n- Twój integrator/inżynier explicite ją wymaga (machine vision, specialty labels)\n- Otrzymałeś konkretną specyfikację od producenta etykiet wskazującą 5555\n- Projekt ma bardzo wąskie wymagania kontrastu/jakości nadruku\n\nW pozostałych scenariuszach — wybierz **3200 Wax/Resin** (bestseller) lub **3400 Wax/Resin** (premium PE).',
  },
  {
  heading: 'Kompatybilność',
  content:
   '5555 dostępna w wąskiej gamie wariantów (głównie 110 × 30 mm dla drukarek desktopowych z krótkimi seriami). Konstrukcja **nawój zewnętrzny**. Dostępność **na zamówienie** — czas realizacji do uzgodnienia.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowo-żywiczna specjalistyczna' },
  { label: 'Model', value: '5555 Wax/Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '203 mm/s (8 ips)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '1' },
  { label: 'Grupa cenowa', value: 'Niche specjalistyczna' },
  { label: 'Dostępność', value: 'Na zamówienie' },
 ],
 applications: [
  'Niche industrial',
  'Machine vision',
  'Specialty labels',
  'Projekty z konkretnymi wymaganiami inżynieryjnymi',
 ],
 notRecommendedFor: [
  'Typowe etykiety syntetyczne — wybierz 3200',
  'Polietylen (PE) — wybierz 3400',
  'Aplikacje masowe — niche dostępność',
  'Folie poliestrowe — wybierz 5095',
  'Aplikacje budżetowe',
 ],
 compatiblePrinters: {
  desktop: ['ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421'],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: 'W 95% scenariuszy WR wybierz 3200 — bestseller, UL, pełna gama. 5555 tylko gdy explicite wymagana przez integratora lub specyfikację producenta etykiet.' },
 ],
 faq: [
  { question: 'Czym 5555 różni się od 3200?', answer: '5555 to taśma niche pod konkretne, specyficzne aplikacje (machine vision, specialty labels). 3200 to bestseller WR uniwersalny. W 95% scenariuszy wybierz 3200 — 5555 ma sens tylko gdy explicite wymagana.' },
  { question: 'Skąd wiedzieć, czy potrzebuję 5555?', answer: 'Jeśli pytasz "czy potrzebuję 5555" — prawdopodobnie nie potrzebujesz. Ta taśma jest wskazywana przez integratorów lub inżynierów w bardzo wąskich projektach. Skontaktuj się z naszym doradcą — w większości przypadków polecimy 3200 lub 3400.' },
  { question: 'Dlaczego 5555 jest tak droga?', answer: 'Niche produkcja w niskich wolumenach — taśma kupowana w pojedynczych projektach przemysłowych. Cena odzwierciedla niski wolumen produkcji i specjalizację formulacji.' },
 ],
 recommendedForLabels: [],
 },

 /* ════════════════ ZYWICZNE (4) ════════════════ */

 /* ──────────────── 9. 4800 RESIN — standard ──────────────── */
 {
 slug: '4800-resin',
 productId: 'zebra-4800-resin',
 category: 'zywiczne',
 badge: 'Zebra 4800',
 title: 'Zebra 4800 Resin',
 tagline: 'Standardowa żywiczna — odporność chemiczna, plomby zabezpieczające, certyfikat UL.',
 positioning: 'standard',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 152,
 chemicalResistance: 'wysoka',
 uvResistance: 'krótkoterminowa',
 temperatureRange: '-20°C do +120°C',
 priceFrom: 798.83,
 accent: '#0EA5E9',
 seoTitle: 'Zebra 4800 Resin — standardowa żywiczna z certyfikatem UL/cUL',
 seoDescription: 'Zebra 4800 Resin — standardowa taśma żywiczna z wysoką odpornością chemiczną. Idealna do plomb VOID, etykiet destruktywnych i komponentów elektronicznych. Certyfikat UL/cUL. 11 wariantów od 799 zł netto.',
 h1: 'Taśma termotransferowa Zebra 4800 Resin',
 heroIntro: 'Zebra 4800 Resin to **standardowa taśma żywiczna z wysoką odpornością chemiczną** — wytrzymuje kontakt z agresywnymi substancjami: kwasy, zasady, paliwa, oleje przemysłowe, rozpuszczalniki. Posiada certyfikat **UL/cUL** dla oznaczeń sprzętu elektrycznego. Główne zastosowania: **plomby zabezpieczające (VOID, destruktywne)**, oznaczenia komponentów w przemyśle chemicznym, beczki chemiczne, tablice znamionowe maszyn.',
 keyHighlights: [
  'Standardowa taśma żywiczna z certyfikatem UL/cUL',
  'Wysoka odporność chemiczna (kwasy, zasady, paliwa, rozpuszczalniki)',
  'Idealna do plomb zabezpieczających (VOID, destruktywne)',
  'Druk na folii matowej i błyszczącej (PE, PP, PET)',
  'Nawój zewnętrzny — standard Zebry',
  '11 wariantów szerokości od 40 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 4800 Resin?',
  content:
   'Zebra 4800 Resin to **standardowa taśma żywiczna** zoptymalizowana pod konkretne zastosowania: **plomby zabezpieczające i etykiety z wysoką odpornością chemiczną**. Czysta żywica topi się i wiąże chemicznie z folią syntetyczną (PE, PP, PET) — daje nadruk niesamowicie odporny na ścieranie, rozpuszczalniki i agresywne chemikalia.\n\nW odróżnieniu od bestsellera 5095 Resin (poliester wysokiej jakości), 4800 jest zoptymalizowana pod **folie zabezpieczające** — VOID (z napisem widocznym po próbie zdjęcia) i destruktywne (rozpadające się przy próbie zdjęcia). Posiada certyfikat UL/cUL — wymóg w wielu zastosowaniach przemysłowych regulowanych (oznaczenia bezpieczeństwa, tabliczki znamionowe).',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 4800 Resin to taśma do **zabezpieczeń i etykiet w trudnych warunkach chemicznych**:\n\n- **Plomby VOID** — etykiety zabezpieczające z napisem widocznym po naruszeniu (8000T Void Matte)\n- **Plomby destruktywne** — etykiety rozpadające się przy próbie zdjęcia (8100T Z-Destruct PE)\n- **Komponenty elektroniczne** — oznaczenia z certyfikatem UL\n- **Beczki chemiczne** — odporność na kontakt z agresywnymi substancjami\n- **Tablice znamionowe maszyn** — oznaczenia regulowane\n- **Etykiety w petrochemii** — kontakt z paliwami i olejami',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 4800 Resin polecana priorytetowo dla **2 etykiet zabezpieczających**:\n\n- **8000T Void Matte** — plomby VOID — 4800 jest **pierwszym wyborem**\n- **8100T Z-Destruct PE** — etykiety destruktywne — 4800 jest **pierwszym wyborem**\n- **PolyO 3100T** — poliolefina — 4800 jako **alternatywa** dla 5095 (gdy etykieta ma kontakt z agresywnymi chemikaliami, np. beczki chemiczne)',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 4800 dostępna **wyłącznie w wariantach industrial** (długość 450 m, rdzeń 25 mm) — przeznaczona pod drukarki przemysłowe Zebra (ZT411, ZT421, ZT510, ZT610, ZT620). Konstrukcja **nawój zewnętrzny**.\n\n**Maksymalna prędkość druku 152 mm/s (6 ips)** — to typowe dla taśm żywicznych: czysta żywica wymaga wolniejszego topienia dla pewnego związania z folią. Krótszy wolumen druku ale za to nadruk o trwałości lat.',
  },
  {
  heading: 'Kiedy wybrać 4800 zamiast 5095',
  content:
   'Wybierz **4800 Resin** gdy:\n\n- Drukujesz na foliach zabezpieczających (VOID, destruktywne) — to jej domyślne zastosowanie\n- Etykieta ma kontakt z bardzo agresywnymi chemikaliami (rozpuszczalniki, kwasy, paliwa)\n- Aplikacja: beczki chemiczne, komponenty przemysłowe regulowane\n\nWybierz **5095 Resin** gdy:\n\n- Drukujesz na poliestrze (Z-Ultimate 3000T White/Silver) — wymóg producenta\n- Aplikacja kriogeniczna (8100T Cryocool, 8000T Blood Bag)\n- Polipropylen matowy (PolyPro 4000T Matte) — machine vision\n\nObie taśmy mają certyfikat UL — różnica jest w priorytecie zastosowań.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Żywiczna' },
  { label: 'Model', value: '4800 Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '152 mm/s (6 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: '8000T Void Matte, 8100T Z-Destruct PE, PolyO 3100T' },
  { label: 'Certyfikaty', value: 'UL/cUL approved' },
  { label: 'Odporność chemiczna', value: 'Wysoka (kwasy, zasady, paliwa, rozpuszczalniki)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '11' },
  { label: 'Grupa cenowa', value: 'Standard żywiczne' },
 ],
 applications: [
  'Plomby zabezpieczające (VOID, destruktywne)',
  'Komponenty elektroniczne (UL/cUL)',
  'Beczki chemiczne — odporność na agresywne substancje',
  'Tablice znamionowe maszyn',
  'Petrochemia — etykiety na paliwach i olejach',
  'Etykiety w przemyśle motoryzacyjnym',
  'Identyfikacja podzespołów w przemyśle',
 ],
 notRecommendedFor: [
  'Poliester premium (Z-Ultimate) — wybierz 5095',
  'Krioprzechowywanie — wybierz 5095',
  'Polipropylen matowy machine vision — wybierz 5095',
  'Typowe etykiety papierowe — wybierz 2300 (4800 to przepłata)',
  'Tabliczki znamionowe 10+ lat — wybierz 5100 Premium Resin',
 ],
 compatiblePrinters: {
  desktop: [],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL/cUL approved', description: 'Certyfikaty UL i kanadyjska cUL — wymagane dla oznaczeń bezpieczeństwa i komponentów elektrycznych w USA/Kanadzie.' },
 ],
 comparedWith: [
  { seriesSlug: '5095-resin', whenToChooseThis: 'Wybierz 4800 do plomb zabezpieczających (VOID, destruktywne) i etykiet z agresywnymi chemikaliami. 5095 to bestseller resin do poliestru (Z-Ultimate), krio i polipropylenu matowego.' },
  { seriesSlug: '5100-resin', whenToChooseThis: '4800 do standardowych zastosowań resin (plomby, chemia). 5100 Premium gdy potrzebujesz gwarancji trwałości 10+ lat (tabliczki znamionowe na maszynach).' },
  { seriesSlug: '8000-chemresist', whenToChooseThis: '4800 do typowych aplikacji chemicznych. 8000 ChemResist gdy potrzebujesz odporności na najagresywniejsze rozpuszczalniki (aceton, MEK, paliwa lotnicze) — przemysł chemiczny i lotniczy.' },
 ],
 faq: [
  { question: 'Czy 4800 to to samo co 5095?', answer: 'Nie. Obie to taśmy żywiczne z certyfikatem UL, ale zoptymalizowane pod różne zastosowania. 4800 — plomby zabezpieczające (VOID, destruktywne) i etykiety chemiczne. 5095 — poliester premium (Z-Ultimate), krio, polipropylen matowy. Różnica w priorytecie etykiet.' },
  { question: 'Czy 4800 drukuje na poliestrze (Z-Ultimate)?', answer: 'Tak, ale Zebra rekomenduje 5095 jako pierwszy wybór do Z-Ultimate. 4800 dało dobry nadruk, ale 5095 ma zoptymalizowaną formulację pod poliester. Wybierz 4800 do folii zabezpieczających, 5095 do Z-Ultimate.' },
  { question: 'Czy 4800 nadaje się do plomb VOID?', answer: 'Tak — to jej priorytetowe zastosowanie. 4800 + 8000T Void Matte (folia z napisem VOID widocznym po próbie zdjęcia) to standard plomb zabezpieczających na sprzęcie elektronicznym i mechanicznym.' },
  { question: 'Co oznacza UL/cUL approved?', answer: 'UL — Underwriters Laboratories (USA), cUL — kanadyjska odmiana. Certyfikaty potwierdzające bezpieczeństwo materiału i trwałość nadruku zgodnie ze standardami amerykańskimi/kanadyjskimi. Wymagane m.in. dla oznaczeń bezpieczeństwa komponentów elektrycznych.' },
  { question: 'Czy 4800 wytrzymuje kontakt z acetonem?', answer: 'Z normalnym kontaktem — tak. Z ciągłym zanurzeniem w acetonie lub bardzo agresywnymi rozpuszczalnikami (MEK, TCE) — wybierz 8000 ChemResist, specjalistyczną odmianę resin do najtrudniejszych aplikacji chemicznych.' },
 ],
 recommendedForLabels: [
  { seriesSlug: '8000t-void-matte', seriesName: '8000T Void Matte', role: 'primary' },
  { seriesSlug: '8100t-z-destruct-pe', seriesName: '8100T Z-Destruct PE', role: 'primary' },
  { seriesSlug: 'polyo-3100t', seriesName: 'PolyO 3100T', role: 'alternative', when: 'Wybierz gdy etykieta będzie miała kontakt z agresywnymi chemikaliami (beczki chemiczne, paliwa). Domyślnie do PolyO 3100T używa się 5095 Resin.' },
 ],
 },

 /* ──────────────── 10. 5095 RESIN — BESTSELLER RESIN ──────────────── */
 {
 slug: '5095-resin',
 productId: 'zebra-5095-resin',
 category: 'zywiczne',
 badge: 'Zebra 5095',
 title: 'Zebra 5095 Resin',
 tagline: 'Żywica High Performance — UL 969, BS 5609, FDA.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 203,
 chemicalResistance: 'wysoka',
 uvResistance: 'krótkoterminowa',
 temperatureRange: 'Magazynowanie -5°C do +40°C',
 priceFrom: 248.97,
 accent: '#0EA5E9',
 heroImage: '/images/tasma-termotransferowa-zebra-5095-resin.png',
 heroBackgroundGradient: 'linear-gradient(to right, #0f172a 0%, #0f172a 35%, #1e3a5c 60%, #4a6e94 82%, #a8c4d8 100%)',
 seoTitle: 'Zebra 5095 Resin — żywiczna taśma TT High Performance z UL',
 seoDescription: 'Zebra 5095 Resin — żywiczna taśma TT do matowych i błyszczących syntetyków. Konstrukcja PET 4,5 μm + 6,5 μm total. UL 969, BS 5609, FDA, REACH. ANSI A na poliestrze. 20 wariantów od 249 zł.',
 h1: 'Taśma termotransferowa Zebra 5095 Resin',
 heroIntro: 'Zebra 5095 Resin to **żywiczna taśma barwiąca o wysokiej wydajności (High Performance)** zaprojektowana do druku na matowych i błyszczących podłożach syntetycznych. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa żywicy, łącznie 6,5 μm (±10%)**. Doskonała odporność chemiczna i termiczna — odporność na rozmazanie, wilgoć, ścieranie, skrajne temperatury i substancje chemiczne. **Certyfikat UL 969** w polskim portfolio dla trzech etykiet Zebra: **Z-Ultimate 3000T White**, **Z-Ultimate 3000T Silver** oraz **8000T Void Matte** (jedyna z funkcją zabezpieczającą VOID). Dodatkowo **BS 5609** dla etykiet GHS. Klasa skanowania **ANSI A** dla standardowych kodów do 203 mm/s. Komplet atestów: FDA, REACH/SVHC 1907/2006/EC, RoHS 2011/65/EU, dyrektywa UE 1935/2004/EC, halogeny IEC 61249-2-21:2003.',
 keyHighlights: [
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **6,5 μm (±10%)**',
  'Klasa skanowania **ANSI A** (10–12 mil) do 203 mm/s, **ANSI B** (obrócone) do 152 mm/s',
  'Skanowalność w świetle podczerwonym i widzialnym (IR + visible light)',
  '**Certyfikat UL 969** — w polskim portfolio dla 3 etykiet Zebra (Z-Ultimate 3000T White, Z-Ultimate 3000T Silver, 8000T Void Matte)',
  'Certyfikat **BS 5609** — etykiety GHS dla transportu morskiego chemikaliów',
  'Atest **FDA US Food Contact** — pośredni kontakt z żywnością',
  'Atest **EU 1935/2004/EC** — UE materiały w kontakcie z żywnością',
  'REACH/SVHC, RoHS 2011/65/EU, halogeny IEC 61249-2-21:2003',
  'Odporność chemiczna: środki amoniakowe, Formula 409, olej silnikowy, WD-40, IPA 90%, heksan',
  'Magazynowanie: 1 rok w -5°C do +40°C, wilgotność 20%–85% RH',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność druku',
  content:
   'Zebra 5095 Resin to **żywiczna taśma barwiąca o wysokiej wydajności (High Performance)**:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — odporna mechanicznie warstwa nośnika\n- **Warstwa żywicy (czarna)** — formuła żywiczna o wysokiej wydajności, topi się i wiąże chemicznie z podłożem syntetycznym\n- **Grubość całkowita: 6,5 μm (±10%)** — cieńsza od taśm woskowych (8 μm) i wosk-żywicowych (8,6 μm)\n- Konstrukcja nawój zewnętrzny (Outside Coated) — kompatybilna z P4T, biurkowymi, średniej i wysokiej klasy drukarkami termicznymi Zebra\n\n**Wydajność druku — klasy ANSI z syntetycznych materiałów wierzchnich:**\n\n- **Normalny kod 10–12 mil, prędkość do 203,2 mm/s (8 ips) → typowa klasa ANSI A** (najwyższa kategoria czytelności kodu kreskowego, A=4.0)\n- **Obrócony kod 15 mil, prędkość do 152,4 mm/s (6 ips) → typowa klasa ANSI B** (B=3.0, drugi w kolejności)\n- **Skanowalność w świetle podczerwonym (IR) i widzialnym** — uniwersalna współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami przemysłowymi (machine vision)\n\nNiższa maksymalna prędkość niż taśmy woskowe (304 mm/s) to typowe dla żywic: czysta żywica wymaga wolniejszego topienia dla pewnego, trwałego związania z folią syntetyczną. Nadruk po związaniu jest niezniszczalny w typowych warunkach.',
  },
  {
  heading: 'Certyfikat UL 969 — 9 kompatybilnych etykiet Zebra',
  content:
   'Zebra 5095 Resin posiada **certyfikat UL 969** (amerykańska norma dla etykiet trwałych) w połączeniu z konkretnymi etykietami Zebra. W **polskim portfolio TAKMA** dostępne są trzy kombinacje z certyfikatem UL/cUL:\n\n- **Z-Ultimate 3000T White** — flagowy biały poliester (PET) z UL\n- **Z-Ultimate 3000T Silver** — srebrny metaliczny poliester z UL\n- **8000T Void Matte** — etykieta zabezpieczająca z funkcją VOID (matowa, unieważniająca)\n\n**Co to oznacza w praktyce:** dla producentów elektroniki, sprzętu AGD, narzędzi i urządzeń sprzedawanych na rynki **USA i Kanada** — kombinacja 5095 Resin + jedna z powyższych etykiet zapewnia jednoznaczną zgodność z UL Recognized Component. Etykieta wytrzymuje cały cykl życia produktu i spełnia wymogi normy bezpieczeństwa.\n\nDodatkowo — w połączeniu z **Z-Ultimate 3000T** taśma spełnia normę **BS 5609** dla etykiet GHS na pojemnikach chemicznych transportowanych drogą morską (90-dniowe zanurzenie w słonej wodzie morskiej).',
  },
  {
  heading: 'Odporność chemiczna druku',
  content:
   'Badanie odporności druku przeprowadzono na **podłożu poliestrowym (PET)** poprzez wykonanie **10 cykli (20 potarć) miernikiem Crockmeter**. Wyniki:\n\n**Odporność dobra (rekomendowane):**\n\n- Środki do czyszczenia szkła z amoniakiem\n- Formula 409 (uniwersalny środek czyszczący)\n- Olej silnikowy\n- Odtłuszczacz Gunk\n- WD-40\n- Heksan\n- Alkohol izopropylowy (IPA 90%) — standard sanityzacji\n\n**Wymaga indywidualnego testu w aplikacji:**\n\n- Płyn hamulcowy\n- Benzyna\n\n**Niezalecane** (uszkadzają nadruk):\n\n- Skydrol (płyn hydrauliczny lotniczy)\n- Genesolv (chlorowcowane rozpuszczalniki)\n- Rho-Tro\n- Ksylen\n- Aceton\n\nDla aplikacji wymagających odporności na **aceton, MEK, ksylen, Skydrol** wybierz **Zebra 8000 ChemResist** — specjalistyczną odmianę pod najtrudniejsze aplikacje chemiczne. 5095 pokrywa większość typowych aplikacji motoryzacyjnych, przemysłowych i tabliczek znamionowych.',
  },
  {
  heading: 'Atesty regulacyjne i zgodność z normami',
  content:
   'Zebra 5095 Resin posiada **komplet atestów regulacyjnych** wymaganych przez branżę przemysłową, motoryzacyjną i spożywczą:\n\n**Atesty żywnościowe:**\n\n- **FDA US Food Contact** — amerykańska rekomendacja dla pośredniego kontaktu z żywnością\n- **EU 1935/2004/EC** — unijne rozporządzenie ramowe dla materiałów do kontaktu z żywnością\n\n**Atesty chemiczne i bezpieczeństwo:**\n\n- **REACH/SVHC 1907/2006/EC** — europejskie rozporządzenie REACH + lista substancji wzbudzających szczególne obawy\n- **RoHS / metale ciężkie 2011/65/EU** — dyrektywa ograniczająca substancje niebezpieczne\n- **Halogeny — IEC 61249-2-21:2003** — bez halogenów (chlor, brom, fluor)\n\n**Atesty produktowe:**\n\n- **UL 969** — norma UL dla etykiet trwałych (z 9 kompatybilnymi etykietami Zebra)\n- **BS 5609** — brytyjska norma dla etykiet GHS w transporcie morskim (z Z-Ultimate)\n\nKomplet 7 atestów regulacyjnych czyni 5095 Resin **najszerszej certyfikowaną żywiczną taśmą Zebra dla zastosowań przemysłowych i motoryzacyjnych** sprzedawanych w UE, USA i Kanadzie.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Sześć segmentów zastosowań dla 5095 Resin — wszystkie wymagają trwałości w warunkach trudnych:\n\n- **Etykiety narażone na działanie ciepła, pary wodnej, rozpuszczalników, ścieranie i tarcie** — typowe środowisko hal produkcyjnych\n- **Etykiety stosowane na zewnątrz w skrajnych warunkach** — krótkoterminowo (do 1 roku) z UV i deszczem\n- **Etykiety na pojemniki z substancjami chemicznymi** — beczki, IBC, pojemniki magazynowe, etykiety GHS (z BS 5609)\n- **Etykiety narażone na działanie wody, pary, substancji alkalicznych lub kwasów** — laboratoria, galwanizernie, produkcja chemiczna\n- **Etykiety motoryzacyjne** — części samochodowe, oznaczenia pod maską, tabliczki kontrolne\n- **Przemysłowe tabliczki znamionowe i często skanowane etykiety** — komponenty UL, maszyny przemysłowe, oznaczenia inwentarzowe\n\nDodatkowe niszowe zastosowania (na bazie kompatybilnych etykiet): krioprzechowywanie z 8100T Cryocool (-196°C, ciekły azot), banki krwi z 8000T Blood Bag, plomby zabezpieczające z 8000T Void Matte (UL Recognized z efektem VOID).',
  },
  {
  heading: 'Magazynowanie i pierwsze zamówienie',
  content:
   'Zalecane warunki magazynowania zgodnie z kartą producenta:\n\n- **Temperatura: -5°C do +40°C** (23°F do 104°F) — szerszy zakres niż taśmy woskowe (5–35°C), bo żywica jest bardziej stabilna termicznie\n- **Wilgotność względna: 20% do 85% RH**\n- **Trwałość magazynowa: 1 rok** od daty produkcji\n\n**Numer próbki do testów:** 05095BK08305 (83 × 50 mm/m, rdzeń 25 mm) — standardowy SKU testowy producenta. Dla innych szerokości lub rdzenia 12 mm (drukarki biurkowe) skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę i etykietę. Dostępne szerokości: 33, 40, 56, 57, 60, 64, 83, 84, 89, 110, 131, 154, 174, 220 mm. Długości od **74 m** (desktop, rdzeń 12 mm) do **450 m** (przemysłowe, rdzeń 25 mm).',
  },
  {
  heading: 'Kiedy wybrać 5095, a kiedy 5100, 4800 lub 8000 ChemResist?',
  content:
   'Wybierz **5095 Resin** w 90% zastosowań foliowych:\n\n- Standard do poliestru Z-Ultimate 3000T (White, Silver) — wymóg producenta\n- Tabliczki znamionowe UL dla rynków USA/Kanada (Z-Ultimate 3000T + 5095)\n- Etykiety GHS z BS 5609 (chemikalia w transporcie morskim)\n- Motoryzacja, przemysł, oznaczenia maszyn\n- Etykiety zabezpieczające 8000T Void Matte (UL Recognized z funkcją VOID)\n\nPrzesiądź się gdy:\n\n- **10+ lat trwałości** (tabliczki znamionowe pod maską z gwarancją) → **5100 Premium Resin**\n- **Krioprzechowywanie długoterminowe** (>5 lat w azocie) → **5100 Premium Resin**\n- **Plomby destruktywne i agresywne chemikalia** → **4800 Resin**\n- **Aceton, MEK, ksylen, Skydrol** → **8000 ChemResist** (specjalistyczna)',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Żywiczna (Resin) — klasa High Performance' },
  { label: 'Model', value: '5095 Resin' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Formuła atramentu', value: 'Żywica (Resin)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '6,5 μm (±10%)' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Klasa ANSI — normalny kod', value: 'A (kod 10–12 mil, prędkość do 203,2 mm/s)' },
  { label: 'Klasa ANSI — obrócony kod', value: 'B (kod 15 mil, prędkość do 152,4 mm/s)' },
  { label: 'Maks. prędkość druku', value: '203 mm/s (8 ips)' },
  { label: 'Kompatybilne podłoża', value: 'Matowe i błyszczące materiały syntetyczne (poliester, polipropylen, poliolefina), niektóre powlekane' },
  { label: 'Certyfikat UL 969 (polskie portfolio)', value: 'Z-Ultimate 3000T White, Z-Ultimate 3000T Silver, 8000T Void Matte' },
  { label: 'Certyfikat BS 5609', value: 'Z Z-Ultimate 2500T/3000T — etykiety GHS dla transportu morskiego chemikaliów' },
  { label: 'Atest FDA', value: 'US Food Contact — pośredni kontakt z żywnością' },
  { label: 'Atest UE', value: 'EU 1935/2004/EC — materiały w kontakcie z żywnością' },
  { label: 'REACH / SVHC', value: '1907/2006/EC — zgodność' },
  { label: 'RoHS / metale ciężkie', value: '2011/65/EU — zgodność' },
  { label: 'Halogeny', value: 'IEC 61249-2-21:2003 — bez halogenów' },
  { label: 'Odporność — środki amoniakowe', value: 'Dobry' },
  { label: 'Odporność — IPA 90%', value: 'Dobry (sanityzacja)' },
  { label: 'Odporność — olej silnikowy, WD-40, Gunk', value: 'Dobry' },
  { label: 'Odporność — heksan, Formula 409', value: 'Dobry' },
  { label: 'Odporność — Skydrol, Genesolv, ksylen, aceton', value: 'Niezalecane' },
  { label: 'Odporność — benzyna, płyn hamulcowy', value: 'Przetestować w aplikacji' },
  { label: 'Magazynowanie — temperatura', value: '-5°C do +40°C (23°F do 104°F)' },
  { label: 'Magazynowanie — wilgotność', value: '20% do 85% RH' },
  { label: 'Trwałość magazynowa', value: '1 rok od daty produkcji' },
  { label: 'Numer próbki', value: '05095BK08305 (83 × 50 mm/m, rdzeń 25 mm)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") — desktop / 25 mm (1") — mid-range, industrial' },
  { label: 'Dostępne szerokości', value: '33, 40, 56, 57, 60, 64, 83, 84, 89, 110, 131, 154, 174, 220 mm' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '20' },
  { label: 'Grupa cenowa', value: 'High Performance Resin' },
 ],
 applications: [
  'Etykiety narażone na ciepło, parę wodną, rozpuszczalniki, ścieranie i tarcie',
  'Etykiety stosowane na zewnątrz w skrajnych warunkach (krótkoterminowo)',
  'Etykiety na pojemniki z substancjami chemicznymi (beczki, IBC, etykiety GHS)',
  'Etykiety narażone na wodę, parę, substancje alkaliczne lub kwasy',
  'Etykiety motoryzacyjne — części, oznaczenia pod maską, tabliczki kontrolne',
  'Przemysłowe tabliczki znamionowe i często skanowane etykiety (UL Recognized)',
  'Komponenty elektroniczne z certyfikatem UL/cUL dla rynków USA/Kanada',
  'Krioprzechowywanie (z 8100T Cryocool) — biobanki, laboratoria medyczne',
  'Banki krwi (z 8000T Blood Bag) — ISBT 128, transfuzjologia',
  'Plomby zabezpieczające z efektem VOID (8000T Void Matte z UL)',
 ],
 notRecommendedFor: [
  'Typowe etykiety papierowe — wybierz 2300 Wax (5095 to przepłata 2-3×)',
  'Plomby destruktywne i bardzo agresywne chemikalia — wybierz 4800 Resin',
  'Tabliczki znamionowe z gwarancją 10+ lat — wybierz 5100 Premium Resin',
  'Aceton, MEK, ksylen, Skydrol (ciągły kontakt) — wybierz 8000 ChemResist',
  'Bardzo wolne drukarki <6 ips — żywica wymaga minimum tej prędkości dla pewnego transferu',
  'Bezpośredni kontakt z żywnością — atest FDA pokrywa tylko pośredni kontakt',
  'Magazynowanie poza zakresem -5°C do +40°C — degradacja warstwy żywicznej',
 ],
 compatiblePrinters: {
  desktop: ['ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: ['P4T'],
 },
 certifications: [
  { name: 'UL 969', description: 'Amerykańska norma UL dla etykiet trwałych. Certyfikat UL Recognized w połączeniu z etykietami Zebra dostępnymi w polskim portfolio TAKMA: Z-Ultimate 3000T White, Z-Ultimate 3000T Silver, 8000T Void Matte. Wymagane dla komponentów elektronicznych sprzedawanych w USA i Kanadzie.' },
  { name: 'BS 5609', description: 'Brytyjska norma dla etykiet GHS na pojemnikach chemicznych transportowanych drogą morską (90-dniowe zanurzenie w słonej wodzie). W połączeniu z Z-Ultimate 2500T/3000T zapewnia zgodność z kodem IMDG.' },
  { name: 'FDA US Food Contact', description: 'Amerykańska rekomendacja FDA dla pośredniego kontaktu z żywnością — pozwala na stosowanie etykiet z nadrukiem 5095 na opakowaniach żywności w USA.' },
  { name: 'EU 1935/2004/EC', description: 'Unijne rozporządzenie ramowe dla materiałów i wyrobów przeznaczonych do kontaktu z żywnością.' },
  { name: 'REACH / SVHC 1907/2006/EC', description: 'Zgodność z europejskim rozporządzeniem REACH i listą substancji wzbudzających szczególne obawy (SVHC).' },
  { name: 'RoHS / metale ciężkie 2011/65/EU', description: 'Zgodność z dyrektywą ograniczającą stosowanie substancji niebezpiecznych — kluczowe dla branży elektronicznej.' },
  { name: 'Halogeny IEC 61249-2-21:2003', description: 'Bez halogenów (chlor, brom, fluor) — bezpieczne dla procesów spalania i recyklingu, zgodność z normą IEC dla materiałów elektronicznych.' },
 ],
 comparedWith: [
  { seriesSlug: '5100-resin', whenToChooseThis: '5095 to High Performance — pokrywa 90% zastosowań foliowych w cenie standardowej. **5100 Premium Resin** gdy potrzebujesz gwarancji trwałości **10+ lat** (tabliczki znamionowe pod maską silnika) lub krioprzechowywania długoterminowego biobanków (>5 lat w azocie).' },
  { seriesSlug: '4800-resin', whenToChooseThis: '5095 do standardowego poliestru Z-Ultimate 3000T z UL i krio. **4800 Resin** — do plomb destruktywnych (8100T Z-Destruct PE) i etykiet z agresywnymi chemikaliami (beczki chemiczne, sprzęt laboratoryjny z kontaktem z rozpuszczalnikami).' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '5095 (czysta żywica) do folii poliestrowej Z-Ultimate i etykiet UL — wymóg producenta. **3200 Wax/Resin** do papieru powlekanego i prostego polipropylenu matowego — taniej, gdy nie potrzebujesz pełnej żywicy ani UL.' },
  { seriesSlug: '8000-chemresist', whenToChooseThis: '5095 do typowych odczynników (alkohol, IPA, oleje, środki czyszczące). **8000 ChemResist** — specjalistyczna pod najtrudniejsze chemikalia (aceton, MEK, ksylen, Skydrol) gdzie 5095 jest niezalecane.' },
 ],
 faq: [
  { question: 'Jaka jest dokładna konstrukcja 5095?', answer: '**Dwuwarstwowa**: powłoka bazowa z poliestru (PET) **4,5 μm** + warstwa żywicy (czarna). **Łączna grubość 6,5 μm (±10%)** — cieńsza od taśm woskowych (8 μm) i wosk-żywicowych (8,6 μm). Konstrukcja nawój zewnętrzny (Outside Coated). Skanowalność w świetle podczerwonym i widzialnym (IR + visible).' },
  { question: 'Z jaką maksymalną prędkością drukuje 5095?', answer: '**Do 203,2 mm/s (8 ips)** dla normalnych kodów kreskowych 10–12 mil — uzyskuje typową **klasę ANSI A** (najwyższa kategoria czytelności). Dla obróconych kodów 15 mil prędkość do **152,4 mm/s (6 ips)** — typowa klasa **ANSI B**. Niższa niż taśmy woskowe, bo czysta żywica wymaga wolniejszego topienia dla pewnego transferu.' },
  { question: 'Z jakimi etykietami 5095 ma certyfikat UL w polskim portfolio?', answer: 'UL 969 w polskim portfolio TAKMA z **trzema etykietami Zebra**: **Z-Ultimate 3000T White**, **Z-Ultimate 3000T Silver** oraz **8000T Void Matte** (jedyna z funkcją zabezpieczającą VOID). Dla każdej z tych etykiet kombinacja 5095 + etykieta daje UL Recognized Component — kluczowe dla rynków USA i Kanada.' },
  { question: 'Czy 5095 ma atest dla etykiet GHS?', answer: 'Tak — w połączeniu z **Z-Ultimate 2500T lub 3000T** spełnia normę **BS 5609** dla etykiet GHS na pojemnikach chemicznych transportowanych drogą morską. Norma wymaga 90-dniowego zanurzenia w słonej wodzie morskiej bez utraty czytelności — 5095 Resin + Z-Ultimate to standardowe rozwiązanie dla branży chemicznej.' },
  { question: 'Jaka jest odporność chemiczna druku 5095?', answer: 'Test 10 cykli (20 potarć) Crockmeter na podłożu poliestrowym (PET): **Dobra** dla środków amoniakowych, Formula 409, oleju silnikowego, WD-40, odtłuszczacza Gunk, heksanu, IPA 90%. **Niezalecane**: Skydrol, Genesolv, Rho-Tro, ksylen, aceton. **Przetestować**: benzyna, płyn hamulcowy. Dla najagresywniejszych chemikaliów (aceton, MEK) wybierz Zebra 8000 ChemResist.' },
  { question: 'Jakie są warunki magazynowania?', answer: '**1 rok** od daty produkcji w temperaturze **-5°C do +40°C** (23°F do 104°F) i wilgotności **20%–85% RH**. Szerszy zakres temperatur niż taśmy woskowe (5–35°C) — żywica jest bardziej stabilna termicznie. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.' },
  { question: 'Czy mogę użyć 5095 zamiast 2300 do papieru?', answer: 'Technicznie tak, ale to przepłata. 5095 jest **2-3× droższa od 2300 Wax** i daje tę samą jakość na papierze. Żywica to wymóg dla folii — do papieru wystarczy wosk (2300 European Wax) lub wosk-żywica (3200 Premium Wax/Resin). 5095 wybieraj wyłącznie dla materiałów syntetycznych.' },
  { question: 'Co się stanie jeśli użyję 2300 zamiast 5095 do Z-Ultimate?', answer: '**Nadruk dałby się zetrzeć palcem** — taśma woskowa nie wiąże się chemicznie z poliestrem. To najczęstszy błąd przy druku TT. Z-Ultimate wymaga taśmy żywicznej (5095 Resin) lub 5100 Premium Resin. Etykiety wydrukowane z taśmą woskową są bezużyteczne — kod kreskowy znika po pierwszym kontakcie z dłonią.' },
  { question: 'Jakie są zalecane drukarki dla 5095?', answer: '5095 jest kompatybilna ze wszystkimi klasami drukarek Zebra: **P4T (mobilna), biurkowe, średniej i wysokiej klasy** drukarki termiczne. Dostępna w wariantach desktopowych (74 m, rdzeń 12 mm) i przemysłowych (300/450 m, rdzeń 25 mm). Pełna kompatybilność: ZD421t, ZD621t, ZD611t, ZT231, ZT411, ZT421, ZT510, ZT610, ZT620.' },
  { question: 'Czy mogę zamówić próbkę?', answer: 'Tak — numer katalogowy próbki Zebry to **05095BK08305** (rozmiar 83 × 50 mm/m, rdzeń 25 mm — do testów na drukarkach średniej i wysokiej klasy). Dla drukarek biurkowych lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę, etykietę i wymagany atest (UL / BS 5609 / FDA).' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-ultimate-3000t-white', seriesName: 'Z-Ultimate 3000T White', role: 'primary' },
  { seriesSlug: 'z-ultimate-3000t-silver', seriesName: 'Z-Ultimate 3000T Silver', role: 'primary' },
  { seriesSlug: 'polypro-4000t-matte', seriesName: 'PolyPro 4000T Matte', role: 'primary' },
  { seriesSlug: 'polyo-3100t', seriesName: 'PolyO 3100T', role: 'primary' },
  { seriesSlug: '8100t-cryocool', seriesName: '8100T Cryocool', role: 'primary' },
  { seriesSlug: '8000t-blood-bag-deep-freeze', seriesName: '8000T Blood Bag Deep Freeze', role: 'primary' },
  { seriesSlug: 'polye-3100t-gloss', seriesName: 'PolyE 3100T Gloss', role: 'alternative', when: 'Wybierz gdy etykieta na PE będzie miała kontakt z chemikaliami lub UV. Domyślnie dla PolyE 3100T wystarcza 3400 Wax/Resin.' },
  { seriesSlug: 'polypro-3000t-gloss', seriesName: 'PolyPro 3000T Gloss', role: 'alternative', when: 'Wybierz dla zastosowań zewnętrznych lub UV (krótkoterminowo). Domyślnie dla PolyPro Gloss wystarcza 3200 Wax/Resin.' },
 ],
 downloads: [
  { name: 'Karta katalogowa Zebra 5095 Resin (PL)', type: 'datasheet', url: '/datasheets/5095-resin-spec-sheet-pl-pl.pdf', size: '967 KB' },
 ],
 },

 /* ──────────────── 11. 5100 PREMIUM RESIN — premium ──────────────── */
 {
 slug: '5100-resin',
 productId: 'zebra-5100-resin',
 category: 'zywiczne',
 badge: 'Zebra 5100',
 title: 'Zebra 5100 Premium Resin',
 tagline: 'Premium żywica — najwyższa trwałość, tabliczki znamionowe z gwarancją 10+ lat.',
 positioning: 'premium',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 152,
 chemicalResistance: 'ekstremalna',
 uvResistance: 'długoterminowa',
 temperatureRange: '-50°C do +220°C',
 priceFrom: 1368.69,
 accent: '#0EA5E9',
 seoTitle: 'Zebra 5100 Premium Resin — najwyższa trwałość, tabliczki znamionowe 10+ lat',
 seoDescription: 'Zebra 5100 Premium Resin — najwyższej klasy taśma żywiczna. Trwałość 10+ lat na zewnątrz, ekstremalna odporność chemiczna, temperatury -50°C do +220°C. Do tabliczek znamionowych, lotnictwa, motoryzacji premium. 7 wariantów od 1369 zł netto.',
 h1: 'Taśma termotransferowa Zebra 5100 Premium Resin',
 heroIntro: 'Zebra 5100 Premium Resin to **najwyższej klasy taśma żywiczna w portfolio Zebry**. Najwyższa odporność na: zarysowania, agresywne chemikalia (rozpuszczalniki, paliwa, kwasy), UV (długoterminowo na zewnątrz — kilka lat), ekstremalne temperatury (**-50°C do +220°C**). Wybierana do oznaczeń, które **muszą wytrzymać 10+ lat**: tabliczki znamionowe maszyn, etykiety na sprzęcie lotniczym, oznaczenia w motoryzacji premium, identyfikacja w przemyśle nuklearnym.',
 keyHighlights: [
  'Najwyższa klasa żywiczna w portfolio Zebra',
  'Trwałość 10+ lat na zewnątrz (długoterminowy UV)',
  'Ekstremalne temperatury -50°C do +220°C',
  'Najwyższa odporność chemiczna w portfolio (poza 8000 ChemResist)',
  'Wymóg w lotnictwie, motoryzacji premium, przemyśle nuklearnym',
  '7 wariantów szerokości od 40 do 154 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 5100 Premium Resin?',
  content:
   'Zebra 5100 to **premium odmiana taśmy żywicznej** — formulacja o zwiększonej zawartości żywic wysokiej klasy, dająca nadruk niezniszczalny w warunkach, w których 5095 byłaby na granicy. Wybierana do aplikacji wymagających **gwarancji wieloletniej trwałości** — tabliczki znamionowe maszyn pod maską (motoryzacja), oznaczenia sprzętu lotniczego (cykle ciśnieniowe, ekstremalne temperatury), identyfikacja w przemyśle nuklearnym (długotrwała ekspozycja).\n\nCena znacząco wyższa od bestsellera 5095 — wybieraj świadomie do aplikacji wymagających trwałości **beyond 5095**. Do typowego poliestru Z-Ultimate — 5095 wystarcza i jest bardziej opłacalna.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 5100 Premium Resin to wybór do **najwyższych wymagań trwałości**:\n\n- **Tabliczki znamionowe maszyn** — z gwarancją czytelności **10+ lat**\n- **Lotnictwo** — oznaczenia komponentów w warunkach ekstremalnych\n- **Motoryzacja premium** — etykiety pod maską (cykle temperaturowe, oleje, paliwa)\n- **Przemysł nuklearny i wojskowy** — identyfikacja w warunkach radiacji\n- **Outdoor długoterminowy** — oznaczenia infrastruktury (lata ciągłej ekspozycji UV)\n- **Banki biologiczne premium** — krioprzechowywanie >5 lat',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   '5100 Premium nie ma własnych priorytetowych parowań — jest **alternatywą do 5095** w sytuacjach wymagających trwałości beyond standard:\n\n- **Z-Ultimate 3000T White / Silver** — gdy potrzebujesz gwarancji **10+ lat** (tabliczki znamionowe pod maską)\n- **8100T Cryocool** — gdy krioprzechowywanie **długoterminowe** (biobanki premium, >5 lat)\n- **8000T Void Matte** — gdy plomba ma trwać bardzo długo z najwyższą jakością kodu kreskowego\n\nDo standardowych zastosowań — **5095 wystarcza**. 5100 to wybór świadomy, dla projektów z dokumentowanymi wymogami trwałości.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 5100 dostępna **wyłącznie w wariantach industrial** (długość 450 m, rdzeń 25 mm) — przeznaczona pod drukarki przemysłowe Zebra (ZT411, ZT421, ZT510, ZT610, ZT620). Konstrukcja **nawój zewnętrzny**.\n\n**Maksymalna prędkość druku 152 mm/s (6 ips)** — najniższa w portfolio. Czysta żywica wysokiej klasy wymaga powolnego, kontrolowanego topienia dla optymalnego związania.',
  },
  {
  heading: 'Kiedy wybrać 5100 zamiast 5095',
  content:
   'Wybierz **5100 Premium** wyłącznie gdy:\n\n- Twoja specyfikacja explicite wymaga trwałości **10+ lat** (motoryzacja premium, lotnictwo, infrastruktura)\n- Etykieta będzie w ekstremalnych temperaturach (**-50°C do +220°C** — np. pod maską silnika)\n- Outdoor z **ciągłą ekspozycją UV** przez lata\n- Krioprzechowywanie **długoterminowe** (biobanki, archiwum genetyczne)\n- Aplikacje regulowane wymagające dokumentowanej trwałości (np. lotnictwo cywilne)\n\nW 95% typowych zastosowań resin — **5095 wystarczy** i jest 5-7× tańsza. Wybór 5100 to wybór świadomy pod konkretne wymagania projektu.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Żywiczna premium' },
  { label: 'Model', value: '5100 Premium Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '152 mm/s (6 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: 'Z-Ultimate 3000T White/Silver (10+ lat), 8100T Cryocool (długoterminowo), 8000T Void Matte (premium plomby)' },
  { label: 'Certyfikaty', value: 'UL/cUL approved' },
  { label: 'Odporność chemiczna', value: 'Ekstremalna' },
  { label: 'Odporność UV', value: 'Długoterminowa (lata na zewnątrz)' },
  { label: 'Zakres temperatur', value: '-50°C do +220°C' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '7' },
  { label: 'Grupa cenowa', value: 'Premium żywiczne' },
 ],
 applications: [
  'Tabliczki znamionowe maszyn (gwarancja 10+ lat)',
  'Lotnictwo — oznaczenia komponentów',
  'Motoryzacja premium (pod maską)',
  'Przemysł nuklearny i wojskowy',
  'Outdoor — długoterminowe oznaczenia infrastruktury',
  'Banki biologiczne premium (krioprzechowywanie >5 lat)',
  'Etykiety regulowane z dokumentowaną trwałością',
 ],
 notRecommendedFor: [
  'Standardowe zastosowania resin — wybierz 5095 (taniej)',
  'Typowe etykiety papierowe — wybierz 2300',
  'Plomby standardowe — wybierz 4800',
  'Aplikacje z najagresywniejszymi rozpuszczalnikami — wybierz 8000 ChemResist',
  'Drukarki desktopowe (5100 dostępna tylko industrial)',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL/cUL approved', description: 'Certyfikaty UL i cUL — uznanie dla oznaczeń bezpieczeństwa.' },
 ],
 comparedWith: [
  { seriesSlug: '5095-resin', whenToChooseThis: '5100 wybieraj wyłącznie gdy wymagasz dokumentowanej trwałości 10+ lat, ekstremalnych temperatur, długoterminowego UV lub krio. W 95% zastosowań resin — 5095 wystarczy i jest znacznie tańsza.' },
  { seriesSlug: '8000-chemresist', whenToChooseThis: '5100 do trwałości czasowej (10+ lat) i ekstremalnych temperatur. 8000 ChemResist — gdy potrzebujesz odporności na najagresywniejsze chemikalia (aceton, MEK, paliwa lotnicze).' },
 ],
 faq: [
  { question: 'Kiedy ma sens 5100 zamiast 5095?', answer: 'Gdy specyfikacja explicite wymaga trwałości 10+ lat, ekstremalnych temperatur (-50°C do +220°C) lub długoterminowego UV (lata na zewnątrz). Typowe przykłady: tabliczki znamionowe pod maską samochodu, oznaczenia komponentów lotniczych, identyfikacja w przemyśle nuklearnym. W zwykłych zastosowaniach 5095 wystarczy i jest 5-7× tańsza.' },
  { question: 'Dlaczego 5100 jest tak droga?', answer: 'Premium formulacja żywic wysokiej klasy + niski wolumen produkcji (kupowana w pojedynczych projektach). Cena 5-7× wyższa niż 5095. Wybieraj świadomie — tylko gdy dokumentowane wymagania uzasadniają.' },
  { question: 'Czy 5100 nadaje się do banków krwi (Blood Bag)?', answer: 'Tak, ale standardowo banki krwi używają 5095 zgodnie z ISBT 128. 5100 wybiera się dla banków biologicznych z krioprzechowywaniem długoterminowym (>5 lat) — np. archiwum genetyczne, biobanki naukowe.' },
  { question: 'Czy 5100 wytrzymuje aceton?', answer: 'Tak, w typowym kontakcie. Ale do ciągłego zanurzenia w acetonie/MEK wybierz 8000 ChemResist — specjalistyczną taśmę pod najtrudniejsze chemikalia. 5100 to "wszechstronna premium", 8000 to "ekstremalna chemiczna".' },
  { question: 'Do których drukarek pasuje 5100?', answer: '5100 dostępna wyłącznie w wariantach industrial (450 m, rdzeń 25 mm) — pod drukarki przemysłowe Zebra (ZT411, ZT421, ZT510, ZT610, ZT620). Nie ma wariantów desktopowych.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-ultimate-3000t-white', seriesName: 'Z-Ultimate 3000T White', role: 'alternative', when: 'Wybierz gdy wymagana gwarancja czytelności 10+ lat lub certyfikat UL na sprzęcie elektrycznym (motoryzacja premium, lotnictwo). Domyślnie 5095 wystarcza.' },
  { seriesSlug: 'z-ultimate-3000t-silver', seriesName: 'Z-Ultimate 3000T Silver', role: 'alternative', when: 'Tabliczki znamionowe z gwarancją długoterminową. Domyślnie 5095.' },
  { seriesSlug: '8100t-cryocool', seriesName: '8100T Cryocool', role: 'alternative', when: 'Krioprzechowywanie długoterminowe (biobanki naukowe, archiwum genetyczne >5 lat). Domyślnie 5095.' },
  { seriesSlug: '8000t-void-matte', seriesName: '8000T Void Matte', role: 'alternative', when: 'Wybierz dla wyższej jakości kodu kreskowego na plombach premium. Domyślnie 4800.' },
 ],
 },

 /* ──────────────── 12. 8000 CHEMRESIST — niche chemia ──────────────── */
 {
 slug: '8000-chemresist',
 productId: 'zebra-8000-chemresist',
 category: 'zywiczne',
 badge: 'Zebra 8000 CR',
 title: 'Zebra 8000 ChemResist',
 tagline: 'Specjalistyczna — najwyższa odporność chemiczna na rynku, aceton, MEK, paliwa lotnicze.',
 positioning: 'specjalistyczna',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 152,
 chemicalResistance: 'ekstremalna',
 uvResistance: 'krótkoterminowa',
 temperatureRange: '-20°C do +120°C',
 priceFrom: 1487.05,
 accent: '#0EA5E9',
 seoTitle: 'Zebra 8000 ChemResist — najwyższa odporność chemiczna na rynku',
 seoDescription: 'Zebra 8000 ChemResist — specjalistyczna taśma żywiczna dla najagresywniejszych aplikacji: aceton, MEK, ksylen, paliwa lotnicze. Do przemysłu chemicznego, petrochemii, lotnictwa wojskowego. Na zamówienie od 1487 zł netto.',
 h1: 'Taśma termotransferowa Zebra 8000 ChemResist',
 heroIntro: 'Zebra 8000 ChemResist to **specjalistyczna taśma żywiczna do najbardziej wymagających aplikacji chemicznych** — wytrzymuje kontakt z agresywnymi chemikaliami, których nie wytrzymuje nawet 5100 Premium Resin: **stężone kwasy, ekstremalne rozpuszczalniki (aceton, MEK, TCE), ksylen, paliwa lotnicze, oleje przemysłowe wysokiej temperatury**. Wybierana do oznaczeń w przemyśle chemicznym, petrochemii, lotnictwie wojskowym i cywilnym. Dostępność na zamówienie.',
 keyHighlights: [
  'Najwyższa odporność chemiczna w portfolio Zebra',
  'Wytrzymuje aceton, MEK, ksylen, TCE, paliwa lotnicze',
  'Identyfikacja w warunkach ekstremalnych',
  'Nawój zewnętrzny — standard Zebry',
  'Dostępna na zamówienie (110 × 300 mm/m)',
  'Niche taśma do konkretnych projektów chemiczno-lotniczych',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 8000 ChemResist?',
  content:
   'Zebra 8000 ChemResist to **specjalistyczna taśma żywiczna o najwyższej odporności chemicznej w portfolio Zebra**. Dedykowana do aplikacji, gdzie zwykła żywica (5095, 5100) nie wystarcza — kontakt z najagresywniejszymi rozpuszczalnikami i paliwami: aceton, **MEK (metyloetyloketon)**, **TCE (trichloroetylen)**, **ksylen**, **paliwa lotnicze (JP-8, Jet A)**, stężone kwasy mineralne, oleje przemysłowe wysokiej temperatury.\n\nTo niszowy produkt — kupowany pojedynczo do projektów w przemyśle chemicznym, petrochemii, lotnictwie wojskowym i cywilnym. **Dostępność na zamówienie** — czas realizacji do uzgodnienia.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 8000 ChemResist to wybór do **najtrudniejszych aplikacji chemicznych**:\n\n- **Przemysł chemiczny i petrochemiczny** — oznaczenia komponentów z kontaktem z rozpuszczalnikami\n- **Lotnictwo wojskowe** — identyfikacja sprzętu w warunkach paliwa lotniczego\n- **Lotnictwo cywilne** — oznaczenia podzespołów silnikowych (kontakt z JP-8)\n- **Beczki z agresywnymi rozpuszczalnikami** — aceton, MEK, ksylen\n- **Identyfikacja sprzętu wojskowego** — plomby destruktywne na sprzęcie chemicznym\n- **Plomby na komponentach z kontaktem z paliwem rakietowym/lotniczym**',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   '8000 ChemResist ma jedno priorytetowe parowanie:\n\n- **8100T Z-Destruct PE** — plomby destruktywne — **alternatywa** względem 4800 (gdy plomba na sprzęcie chemicznym, lotniczym lub wojskowym z kontaktem z agresywnymi rozpuszczalnikami)\n\nW 99% scenariuszy resin — 5095 lub 4800 wystarczają. 8000 ChemResist to ostatnia deska ratunku, gdy żaden inny resin nie wytrzymuje konkretnych chemikaliów.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 8000 ChemResist dostępna w **bardzo wąskiej gamie wariantów** (głównie 110 × 300 mm/m, rdzeń 25 mm). Konstrukcja **nawój zewnętrzny** — kompatybilna z drukarkami Zebra obsługującymi OS.\n\n**Maksymalna prędkość druku 152 mm/s (6 ips)** — typowa dla taśm żywicznych premium. Dostępność **na zamówienie** — czas realizacji do uzgodnienia z dystrybutorem (specjalistyczna produkcja).',
  },
  {
  heading: 'Kiedy wybrać 8000 ChemResist',
  content:
   'Wybierz **8000 ChemResist** wyłącznie gdy:\n\n- Specyfikacja explicite wymaga odporności na konkretne agresywne chemikalia (aceton, MEK, ksylen, TCE, paliwa lotnicze)\n- Standardowa 5095 lub 5100 została przetestowana i nie wytrzymała\n- Aplikacja w przemyśle chemicznym, petrochemii, lotnictwie wojskowym\n\nW pozostałych scenariuszach **5095 (bestseller) lub 4800 (plomby/chemia standard)** wystarczą i są znacznie tańsze. 8000 ChemResist to wybór świadomy, najczęściej wskazywany przez inżyniera/integratora konkretnego projektu.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Żywiczna ChemResist (specjalistyczna)' },
  { label: 'Model', value: '8000 ChemResist' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '152 mm/s (6 ips)' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Polecane etykiety', value: '8100T Z-Destruct PE' },
  { label: 'Odporność chemiczna', value: 'Ekstremalna — aceton, MEK, TCE, ksylen, paliwa lotnicze' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '1' },
  { label: 'Grupa cenowa', value: 'Specjalistyczna ChemResist' },
  { label: 'Dostępność', value: 'Na zamówienie' },
 ],
 applications: [
  'Przemysł chemiczny — oznaczenia komponentów z agresywnymi substancjami',
  'Petrochemia — etykiety beczek z paliwami i rozpuszczalnikami',
  'Lotnictwo wojskowe — identyfikacja sprzętu',
  'Lotnictwo cywilne — oznaczenia podzespołów silnikowych',
  'Plomby destruktywne na sprzęcie wojskowym',
  'Oznaczenia komponentów z paliwem rakietowym/lotniczym',
 ],
 notRecommendedFor: [
  'Standardowe zastosowania resin — wybierz 5095 (taniej)',
  'Plomby standardowe — wybierz 4800',
  'Aplikacje budżetowe — wysoka cena, dostępność na zamówienie',
  'Etykiety papierowe — to przepłata',
  'Aplikacje masowe — niche produkcja',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [],
 comparedWith: [
  { seriesSlug: '4800-resin', whenToChooseThis: '4800 do standardowych zastosowań resin z plombami i chemią. 8000 ChemResist gdy potrzebujesz odporności na najagresywniejsze rozpuszczalniki (aceton, MEK, paliwa lotnicze) — przemysł chemiczny i lotniczy.' },
  { seriesSlug: '5100-resin', whenToChooseThis: '5100 do trwałości czasowej (10+ lat) i ekstremalnych temperatur. 8000 ChemResist — gdy specyfikacja wymaga odporności na konkretne chemikalia, których nie wytrzymuje 5100.' },
 ],
 faq: [
  { question: 'Czym 8000 ChemResist różni się od 5100 Premium?', answer: 'Inna specjalizacja. 5100 — najwyższa trwałość czasowa (10+ lat na zewnątrz) i ekstremalne temperatury (-50°C do +220°C). 8000 ChemResist — najwyższa odporność na agresywne chemikalia (aceton, MEK, paliwa lotnicze). Dla 99% aplikacji 5095 lub 4800 wystarczają.' },
  { question: 'Kiedy ma sens 8000 ChemResist?', answer: 'Gdy specyfikacja wymaga konkretnej odporności na chemikalia, których nie wytrzymują standardowe taśmy resin. Typowe przykłady: oznaczenia w petrochemii, plomby na komponentach z paliwem lotniczym, identyfikacja sprzętu w przemyśle chemicznym z ciągłym kontaktem z acetonem/MEK.' },
  { question: 'Dlaczego 8000 ChemResist jest na zamówienie?', answer: 'Niche produkcja — taśma kupowana w pojedynczych projektach. Czas realizacji do uzgodnienia z dystrybutorem. Skontaktuj się z naszym doradcą — pomożemy zweryfikować, czy 8000 jest właściwym wyborem przed zamówieniem.' },
  { question: 'Czy 8000 wytrzymuje paliwa lotnicze JP-8?', answer: 'Tak — to jej kluczowe zastosowanie. Standardowa 5095 ulega degradacji w kontakcie z JP-8/Jet A. 8000 ChemResist została zaprojektowana m.in. pod oznaczenia komponentów w lotnictwie wojskowym i cywilnym z bezpośrednim kontaktem z paliwem.' },
  { question: 'Czy mogę kupić 8000 do typowej aplikacji chemicznej?', answer: 'Może być przepłata. Skontaktuj się z naszym doradcą — w 99% scenariuszy wystarczy 5095 (bestseller) lub 4800 (plomby/chemia). 8000 ChemResist ma sens tylko gdy konkretna specyfikacja chemiczna nie jest spełniana przez standardowe taśmy resin.' },
 ],
 recommendedForLabels: [
  { seriesSlug: '8100t-z-destruct-pe', seriesName: '8100T Z-Destruct PE', role: 'alternative', when: 'Wybierz dla plomb destruktywnych na sprzęcie chemicznym, lotniczym lub wojskowym z kontaktem z agresywnymi rozpuszczalnikami. Domyślnie do 8100T używa się 4800 Resin.' },
 ],
 },
]

/* ═════════════════════════════════════════════════════════════════
 * HELPERY
 * ═════════════════════════════════════════════════════════════════ */

export function getRibbonSeriesBySlug(slug: string): RibbonSeries | undefined {
 return transferRibbonSeries.find((s) => s.slug === slug)
}

export function getRibbonSeriesByCategory(cat: RibbonCategory): RibbonSeries[] {
 return transferRibbonSeries.filter((s) => s.category === cat)
}

export function getAllRibbonSeriesSlugs(): string[] {
 return transferRibbonSeries.map((s) => s.slug)
}

export function getRibbonSeriesByProductId(productId: string): RibbonSeries | undefined {
 return transferRibbonSeries.find((s) => s.productId === productId)
}
