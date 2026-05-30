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
  desktop: ['ZD220t', 'ZD230t', 'ZD411t', 'ZD421t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
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
 tagline: 'Bestseller — standardowa taśma woskowa do papieru. Najczęściej kupowana taśma w Polsce.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 304,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: '+5°C do +50°C',
 priceFrom: 109.65,
 accent: '#F59E0B',
 seoTitle: 'Zebra 2300 Wax — bestseller taśma woskowa termotransferowa',
 seoDescription: 'Zebra 2300 Wax — najczęściej kupowana taśma termotransferowa w Polsce. Standardowa woskowa do papieru, druk do 304 mm/s, gama 33–220 mm. Do magazynu, wysyłki, retail. 25 wariantów od 110 zł netto.',
 h1: 'Taśma termotransferowa Zebra 2300 Wax',
 heroIntro: 'Zebra 2300 Wax to **absolutny bestseller w portfolio taśm Zebry** — najczęściej kupowana taśma termotransferowa w polskim B2B. Standardowa woskowa, drukuje na większości papierowych etykiet (niepowlekanych i powlekanych) z **dobrą jakością nadruku do 304 mm/s (12 ips)**. Idealna do uniwersalnych zastosowań: magazyn, wysyłka, oznaczenia półkowe, etykiety produktowe.',
 keyHighlights: [
  'Bestseller — najczęściej kupowana taśma TT w Polsce',
  'Druk do 304 mm/s (12 ips) na większości papierów TT',
  'Dostępna w 25 wariantach od 33 do 220 mm szerokości',
  'Długości od 74 m (desktop) do 900 m (XL industrial)',
  'Rdzeń 12 mm i 25 mm — pokrywa wszystkie drukarki Zebra',
  'Konstrukcja nawój zewnętrzny — standard Zebry',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 2300 Wax?',
  content:
   'Zebra 2300 Wax to **standardowa taśma woskowa Zebry** i jednocześnie absolutny bestseller w portfolio materiałów eksploatacyjnych. Taśma składa się z poliestrowego nośnika z naniesioną od strony zewnętrznej (OS — nawój zewnętrzny) warstwą wosku barwiącego, która pod wpływem ciepła głowicy drukarki topi się i przenosi na powierzchnię papierowej etykiety, dając czarny, czytelny nadruk.\n\nTo "domyślna" taśma do papieru — bezpieczny wybór do 80% typowych zastosowań magazynowych i logistycznych. Pasuje do większości drukarek Zebra (desktopowe, mid-range, industrial) i pokrywa pełną gamę szerokości od 33 mm (drobne etykiety) do 220 mm (etykiety paletowe XL).',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 2300 Wax to taśma do **codziennej eksploatacji w magazynie i logistyce**:\n\n- **Magazyn** — etykiety wysyłkowe, lokalizacyjne, paletowe, picking i kompletacja\n- **Wysyłki kurierskie** — DHL, DPD, InPost, GLS (etykiety adresowe na kartonach)\n- **Etykiety produktowe** — oznaczenia opakowań kartonowych, partii\n- **Retail** — codzienny druk etykiet półkowych i cenowych\n- **Picking** — etykiety na opakowaniach zbiorczych w e-commerce',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 2300 Wax jest polecana dla **3 najpopularniejszych etykiet papierowych TT**:\n\n- **Z-Perform 1000T** — bestseller papierowy niepowlekany (magazyn, wysyłka)\n- **Z-Perform 1000T Removable** — papier z klejem zdejmowalnym (retail, ekspozytory)\n- **Z-Select 2000T** — premium papier powlekany (wystarczająca w 80% scenariuszy)\n\nW każdym z tych przypadków 2300 to bezpieczny, sprawdzony wybór. Jeśli etykieta będzie miała kontakt z wilgocią, tarciem lub chemikaliami — przesiądź się na **3200 Wax/Resin** (woskowo-żywiczna). Jeśli drukujesz w chłodni — wybierz **2100 European Wax**.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 2300 Wax dostępna w **najpełniejszej gamie wariantów** ze wszystkich taśm Zebry — od desktopowych (74 m, rdzeń 12 mm) do XL industrial (900 m, rdzeń 25 mm). Konstrukcja **nawój zewnętrzny** — kompatybilna ze wszystkimi drukarkami Zebra obsługującymi taśmy z nawojem zewnętrznym, czyli praktycznie cała linia ZD/ZT.',
  },
  {
  heading: 'Kiedy wybrać 2300 a kiedy coś innego',
  content:
   'Wybierz **2300 Wax** w 90% scenariuszy z papierem TT. Przesiądź się gdy:\n\n- **Chłodnia/mróz** → 2100 European Wax\n- **Wilgoć, tarcie, lekkie chemikalia** → 3200 Wax/Resin (woskowo-żywiczna)\n- **Folia (PE, PP, PET)** → 5095 Resin (taśma woskowa się nie zwiąże)\n- **Outdoor lub UV długoterminowy** → 5095 Resin lub 5100 Premium Resin\n- **Najniższy koszt rolki** → 1600 Wax (ale jakość niższa)',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa' },
  { label: 'Model', value: '2300 Wax' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '304 mm/s (12 ips)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") i 25 mm (1")' },
  { label: 'Polecane etykiety', value: 'Z-Perform 1000T, Z-Perform 1000T Removable, Z-Select 2000T' },
  { label: 'Certyfikaty', value: 'BPA-free, halogen-free, latex-free, FDA, REACH' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '25' },
  { label: 'Grupa cenowa', value: 'Standardowa (bestseller)' },
 ],
 applications: [
  'Magazyn — etykiety wysyłkowe, lokalizacyjne, paletowe',
  'Wysyłki kurierskie (DHL, DPD, InPost, GLS)',
  'Etykiety produktowe na opakowaniach kartonowych',
  'Codzienny druk w retail',
  'Picking i kompletacja zamówień',
  'Inwentaryzacja i etykiety partii',
  'Listy przewozowe i WZ',
 ],
 notRecommendedFor: [
  'Folie syntetyczne (PE, PP, PET) — wymagają żywicy',
  'Chłodnia / mróz — wybierz 2100 European Wax',
  'Etykiety z kontaktem z wilgocią lub chemikaliami — wybierz 3200',
  'Zastosowania zewnętrzne / UV — wybierz folię + 5095 Resin',
  'Plomby i zabezpieczenia — wybierz 4800 Resin',
 ],
 compatiblePrinters: {
  desktop: ['ZD220t', 'ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'BPA-free', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
  { name: 'FDA / REACH', description: 'Zgodność z amerykańskim FDA i europejskim REACH — udokumentowane bezpieczeństwo chemiczne.' },
 ],
 comparedWith: [
  { seriesSlug: '1600-wax', whenToChooseThis: 'Wybierz 2300 w 99% scenariuszy — bestseller z lepszą jakością nadruku i większą maksymalną prędkością. 1600 tylko gdy budżet jest absolutnym priorytetem.' },
  { seriesSlug: '2100-wax', whenToChooseThis: '2300 do typowego magazynu w temperaturze pokojowej. 2100 — gdy drukujesz w chłodni, mroźni, lub potrzebujesz ostrzejszego nadruku przy >10 ips.' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '2300 do papieru w typowych warunkach (suchych). 3200 — gdy etykieta będzie miała kontakt z wilgocią, tarciem lub chemikaliami (healthcare, gastronomia).' },
 ],
 faq: [
  { question: 'Dlaczego 2300 Wax to bestseller?', answer: '2300 to "domyślna" taśma do papieru — pokrywa 80% typowych zastosowań magazynowych i logistycznych. Bezpieczna, sprawdzona, w pełnej gamie szerokości i długości, kompatybilna ze wszystkimi drukarkami Zebra. Tania, dobra jakość, dostępna od ręki.' },
  { question: 'Jaka jest różnica między 2300 a 3200?', answer: '2300 to czysta taśma woskowa. 3200 ma dodatkową warstwę żywicy (wax/resin) — daje wyższą odporność na ścieranie, wilgoć i lekkie chemikalia. Wybierz 2300 do suchego magazynu, 3200 gdy etykieta będzie narażona na trudniejsze warunki.' },
  { question: 'Czy 2300 drukuje na folii poliestrowej?', answer: 'Nie. Taśma woskowa nie wiąże się chemicznie z folią syntetyczną — nadruk zszedłby palcem. Do folii (Z-Ultimate, PolyPro, PolyE) wybierz taśmę żywiczną (5095 Resin). To najczęstszy błąd przy druku TT.' },
  { question: 'Jak dobrać szerokość taśmy 2300?', answer: 'Szerokość taśmy powinna być o 2–5 mm szersza niż etykieta. Do etykiety 100 mm wybierz taśmę 102 lub 110 mm. Chroni to głowicę drukującą przed bezpośrednim kontaktem z etykietą i przedłuża jej żywotność. Pełna gama szerokości 2300: 33, 40, 57, 60, 64, 83, 89, 102, 110, 131, 156, 170, 220 mm.' },
  { question: 'Jaki rdzeń (gilzę) wybrać?', answer: 'Rdzeń 12 mm (0,5") — do drukarek desktopowych Zebra (ZD220, ZD230, ZD411 — wariant 74 m). Rdzeń 25 mm (1") — do drukarek przemysłowych (ZT411, ZT421, ZT610 — warianty 300, 450, 900 m). Sprawdź w specyfikacji drukarki.' },
  { question: 'Ile etykiet wydrukuję z jednej rolki 2300?', answer: 'Zależy od długości rolki i wysokości etykiety. Rolka 450 m wystarczy na ok. 6 000 etykiet 76 mm (typowa etykieta wysyłkowa A6 częściowa). Rolka 74 m to ok. 1 000 etykiet 76 mm. Dokładne wyliczenie zrobi nasz doradca pod Twój use case.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'primary' },
  { seriesSlug: 'z-perform-1000t-removable', seriesName: 'Z-Perform 1000T Removable', role: 'primary' },
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'primary' },
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
 title: 'Zebra 3200 Wax/Resin',
 tagline: 'Bestseller woskowo-żywiczna — uniwersalna taśma do papieru powlekanego i etykiet syntetycznych.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 254,
 chemicalResistance: 'średnia',
 uvResistance: 'brak',
 temperatureRange: '0°C do +60°C',
 priceFrom: 163.18,
 accent: '#A855F7',
 seoTitle: 'Zebra 3200 Wax/Resin — bestseller taśma woskowo-żywiczna z UL',
 seoDescription: 'Zebra 3200 Wax/Resin — uniwersalna taśma woskowo-żywiczna do papieru powlekanego i etykiet syntetycznych. Certyfikat UL, odporność na wilgoć i tarcie. Do healthcare, retail, polipropylenu. 21 wariantów od 163 zł netto.',
 h1: 'Taśma termotransferowa Zebra 3200 Wax/Resin',
 heroIntro: 'Zebra 3200 Wax/Resin to **absolutny bestseller w kategorii taśm woskowo-żywicznych**. Uniwersalna — drukuje zarówno na **papierze powlekanym** (premium etykiety, atest żywnościowy), jak i na **podstawowych etykietach syntetycznych** (polipropylen biały i przezroczysty). Mocno wyższa odporność nadruku na ścieranie i wilgoć niż taśmy czysto woskowe (2300, 1600). Posiada **certyfikat UL** — wymóg dla wielu zastosowań regulowanych.',
 keyHighlights: [
  'Bestseller wax/resin — najczęściej kupowana taśma WR',
  'Drukuje na papierze powlekanym I polipropylenie',
  'Certyfikat UL — wymagany dla etykiet GHS i regulowanych',
  'Większa odporność na ścieranie i wilgoć niż wax (2300)',
  'Druk do 254 mm/s (10 ips)',
  '21 wariantów szerokości od 33 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest taśma Zebra 3200 Wax/Resin?',
  content:
   'Zebra 3200 Wax/Resin to **uniwersalna taśma woskowo-żywiczna** — mieszanka wosku i żywicy daje połączenie zalet obu materiałów: wosk topi się i przenosi nadruk podobnie jak w taśmach czysto woskowych, ale dodatek żywicy zwiększa odporność nadruku na ścieranie, wilgoć i kontakt z lekkimi chemikaliami.\n\nTo "pierwsza taśma WR", po którą sięga się gdy 2300 Wax nie wystarcza — etykieta będzie miała kontakt z trudniejszymi warunkami, ale folia żywiczna byłaby przepłatą. Pokrywa szeroki zakres zastosowań: od healthcare i farmacji (papier powlekany), przez retail premium, po podstawowe etykiety syntetyczne (PolyPro Gloss i Clear).',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 3200 to **taśma "uniwersalna" w wax/resin** — pokrywa bardzo szeroki zakres aplikacji:\n\n- **Healthcare i farmacja** — etykiety z drobnymi kodami 2D na papierze powlekanym (Z-Select 2000T)\n- **Retail premium** — etykiety produktowe z grafiką i wymogiem trwałości\n- **Etykiety opakowań kosmetyków** — kontakt z lekkimi olejami, wilgocią\n- **Polipropylen biały (PolyPro 3000T Gloss)** — podstawowy standard syntetyczny\n- **Polipropylen przezroczysty (PolyPro 3000T Clear)** — efekt "no label"\n- **Etykiety z atestem żywnościowym** — opakowania zbiorcze, gastronomia',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 3200 Wax/Resin polecana dla **3 etykiet** (jako pierwszy wybór) + dla 1 jako alternatywa:\n\n- **PolyPro 3000T Gloss** — polipropylen biały błyszczący (standard syntetyczny)\n- **PolyPro 3000T Clear** — polipropylen przezroczysty (efekt no-label)\n- **Z-Select 2000T** — papier powlekany premium (gdy etykieta będzie miała kontakt z wilgocią/tarciem — alternatywa dla 2300)\n\nTo "pomost" między papierem a folią — gdy zwykła woskowa 2300 nie wystarcza, ale żywiczna 5095 byłaby przepłatą.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 3200 Wax/Resin dostępna w **najpełniejszej gamie wariantów** ze wszystkich taśm WR — od desktopowych (74 m, rdzeń 12 mm) do XL industrial (450 m, rdzeń 25 mm). Konstrukcja **nawój zewnętrzny** — kompatybilna ze wszystkimi drukarkami Zebra obsługującymi OS.\n\n**Maksymalna prędkość druku 254 mm/s (10 ips)** — niższa niż w 2300 Wax (12 ips), ale to typowe dla taśm wax/resin: dodatek żywicy wymaga nieco wolniejszego topienia.',
  },
  {
  heading: 'Kiedy wybrać 3200 a kiedy 3400 lub 5095',
  content:
   'Wybierz **3200** w 80% scenariuszy WR — to pierwsza i bezpieczna rekomendacja. Przesiądź się gdy:\n\n- **Polietylen (PE)** — wybierz 3400 Wax/Resin (zoptymalizowany pod PE)\n- **Outdoor lub UV** — wybierz 5095 Resin (3200 nie ma odporności UV)\n- **Agresywne chemikalia** — wybierz 4800 Resin lub 8000 ChemResist\n- **Folie premium (Z-Ultimate, PolyPro Matte)** — wybierz 5095 Resin (wymóg producenta)',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowo-żywiczna (wax/resin)' },
  { label: 'Model', value: '3200 Wax/Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '254 mm/s (10 ips)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") i 25 mm (1")' },
  { label: 'Polecane etykiety', value: 'PolyPro 3000T Gloss, PolyPro 3000T Clear, Z-Select 2000T' },
  { label: 'Certyfikaty', value: 'UL certified' },
  { label: 'Odporność chemiczna', value: 'Średnia' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '21' },
  { label: 'Grupa cenowa', value: 'Standardowa wax/resin' },
 ],
 applications: [
  'Etykiety farmaceutyczne i healthcare',
  'Retail premium z grafiką',
  'Etykiety opakowań kosmetyków',
  'Polipropylen biały standardowy (PolyPro Gloss)',
  'Polipropylen przezroczysty (PolyPro Clear)',
  'Etykiety z atestem żywnościowym (opakowania zbiorcze)',
  'Etykiety GHS na pojemnikach chemicznych (UL)',
 ],
 notRecommendedFor: [
  'Folia poliestrowa (Z-Ultimate) — wymaga 5095 Resin',
  'Polietylen (PE) — wybierz 3400 Wax/Resin',
  'Outdoor / długoterminowy UV — wybierz 5095 Resin',
  'Plomby zabezpieczające — wybierz 4800 Resin',
  'Krioprzechowywanie — wybierz 5095 Resin',
  'Aplikacje z bardzo agresywnymi rozpuszczalnikami',
 ],
 compatiblePrinters: {
  desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL certified', description: 'Certyfikat UL potwierdza trwałość nadruku w testach ścierania i ekspozycji chemicznej. Wymagany m.in. dla etykiet GHS na pojemnikach chemicznych.' },
 ],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz 3200 gdy etykieta będzie miała kontakt z wilgocią, tarciem lub lekkimi chemikaliami (healthcare, kosmetyki). Do typowego magazynu suchego — 2300 wystarczy i jest tańsza.' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '3200 to bestseller WR — uniwersalna do polipropylenu i papieru powlekanego. 3400 — gdy drukujesz na polietylenie (PE) lub w transporcie mroźniczym.' },
  { seriesSlug: '5095-resin', whenToChooseThis: '3200 do papieru powlekanego i prostego polipropylenu. 5095 (resin) gdy drukujesz na folii poliestrowej (Z-Ultimate), w aplikacjach na zewnątrz lub z agresywnymi chemikaliami.' },
 ],
 faq: [
  { question: 'Co oznacza "wax/resin"?', answer: 'Mieszanka wosku i żywicy — daje połączenie zalet obu materiałów. Wosk zapewnia łatwe topienie i ostry nadruk; żywica zwiększa odporność na ścieranie, wilgoć i lekkie chemikalia. Taśma uniwersalna pomiędzy czystą woskową (2300) a czystą żywiczną (5095).' },
  { question: 'Czy 3200 drukuje na poliestrze (Z-Ultimate)?', answer: 'Nie polecane. 3200 zwiąże się z poliestrem słabiej niż czysta żywica 5095. Do Z-Ultimate 3000T (White/Silver) Zebra wymaga taśmy żywicznej — 5095 Resin lub 5100 Premium Resin. To często popełniany błąd.' },
  { question: 'Do jakich etykiet 3200 jest najlepsza?', answer: 'PolyPro 3000T Gloss i Clear (polipropylen — standard syntetyczny) oraz Z-Select 2000T jako alternatywa względem 2300 gdy potrzeba większej odporności. Dla zwykłego Z-Perform 1000T (magazyn, wysyłka) — wybierz 2300 (taniej).' },
  { question: 'Co oznacza certyfikat UL w 3200?', answer: 'UL certified to potwierdzenie, że nadruk wytrzymuje testy ścierania i ekspozycji chemicznej zgodne ze standardami UL. Wymagane dla etykiet regulowanych — np. GHS na pojemnikach chemicznych zgodnie z BS5609 (przy parowaniu z odpowiednią etykietą).' },
  { question: 'Czy 3200 nadaje się do na zewnątrz?', answer: 'Nie do długoterminowego — taśma WR nie ma odporności na UV. Do zastosowań zewnętrznych wybierz folię (PolyPro lub Z-Ultimate) z taśmą żywiczną 5095 Resin.' },
  { question: 'Jaką szerokość 3200 dobrać?', answer: 'O 2–5 mm szerszą niż etykieta. Do etykiety 100 mm wybierz taśmę 102 lub 110 mm. Pełna gama 3200: 33, 40, 56, 57, 60, 64, 80, 83, 84, 89, 102, 110, 131, 156, 174, 220 mm.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'polypro-3000t-gloss', seriesName: 'PolyPro 3000T Gloss', role: 'primary' },
  { seriesSlug: 'polypro-3000t-clear', seriesName: 'PolyPro 3000T Clear', role: 'primary' },
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'alternative', when: 'Wybierz gdy etykieta będzie miała kontakt z wilgocią lub tarciem (healthcare, gastronomia). Domyślnie dla Z-Select wystarcza 2300 Wax.' },
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
  desktop: ['ZD220t', 'ZD230t', 'ZD411t', 'ZD421t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411'],
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
  desktop: ['ZD421t', 'ZD621t'],
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
  desktop: ['ZD421t', 'ZD621t'],
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
 tagline: 'Bestseller resin — High Performance, poliester (Z-Ultimate), krio, folie premium.',
 positioning: 'bestseller',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 203,
 chemicalResistance: 'wysoka',
 uvResistance: 'krótkoterminowa',
 temperatureRange: '-40°C do +120°C',
 priceFrom: 248.97,
 accent: '#0EA5E9',
 seoTitle: 'Zebra 5095 Resin — bestseller taśma żywiczna do poliestru i folii premium',
 seoDescription: 'Zebra 5095 High-Performance Resin — najczęściej kupowana taśma żywiczna. Do poliestru (Z-Ultimate), folii kriogenicznych, polipropylenu matowego. Certyfikat UL/cUL. 20 wariantów od 249 zł netto.',
 h1: 'Taśma termotransferowa Zebra 5095 Resin',
 heroIntro: 'Zebra 5095 Resin to **absolutny bestseller w kategorii taśm żywicznych** — najczęściej kupowana taśma do etykiet poliestrowych. High Performance — drukuje **ostre, czarne kody kreskowe na poliestrze** (Z-Ultimate 3000T White/Silver), na PolyPro Matte, na etykietach kriogenicznych (Cryocool, Blood Bag). Wysoka odporność na zarysowania, alkohole/IPA, UV (krótkoterminowo), temperatury **-40°C do +120°C**. Certyfikat UL/cUL. **Wymagana przez Zebrę dla wszystkich etykiet Z-Ultimate i PolyPro 4000T Matte**.',
 keyHighlights: [
  'Bestseller resin — najczęściej kupowana taśma żywiczna',
  'Wymagana przez Zebrę dla Z-Ultimate 3000T (White i Silver)',
  'Działa od -40°C do +120°C (krio + ciepło)',
  'Certyfikat UL/cUL — etykiety GHS, komponenty elektroniczne',
  'Druk do 203 mm/s (8 ips)',
  '20 wariantów szerokości od 33 do 220 mm',
 ],
 sections: [
  {
  heading: 'Czym jest Zebra 5095 Resin?',
  content:
   'Zebra 5095 to **High Performance taśma żywiczna** — bestseller w kategorii żywicznych, najczęściej kupowana taśma do druku na foliach syntetycznych. Czysta żywica topi się i wiąże chemicznie z poliestrem (PET), polipropylenem matowym (PP) i poliolefiną (PO), dając nadruk wyjątkowo trwały: odporny na zarysowania, alkohole/IPA, rozpuszczalniki podstawowe, UV (krótkoterminowo), oraz pełen zakres temperatur od kriogenicznych **-40°C** do gorących **+120°C**.\n\nTo "domyślna taśma żywiczna" — pierwszy wybór gdy drukujesz na folii. Zebra wymaga 5095 dla wszystkich etykiet Z-Ultimate (White, Silver), PolyPro 4000T Matte, oraz etykiet kriogenicznych (Cryocool, Blood Bag).',
  },
  {
  heading: 'Dlaczego 5095 jest najczęściej polecana',
  content:
   'Zebra 5095 to taśma o **największej liczbie priorytetowych parowań etykietowych** — polecana **dla 8 etykiet** (najwięcej w portfolio):\n\n- **Z-Ultimate 3000T White** — flagowy poliester (PET) — bestseller foliowy\n- **Z-Ultimate 3000T Silver** — srebrny poliester (tabliczki znamionowe)\n- **PolyPro 4000T Matte** — polipropylen matowy (machine vision)\n- **PolyO 3100T** — poliolefina (ogólnego zastosowania)\n- **8100T Cryocool** — etykiety kriogeniczne (-196°C)\n- **8000T Blood Bag** — banki krwi (ISBT 128)\n- **PolyE 3100T Gloss** — alternatywa do 3400 (gdy PE + chemikalia)\n- **PolyPro 3000T Gloss** — alternatywa do 3200 (gdy na zewnątrz lub UV)\n\nTaka uniwersalność czyni ją **bezpieczną domyślną żywicą** — jeśli nie wiesz, którą wybrać do folii, 5095 to bezpieczny wybór.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 5095 Resin to standard do **trwałego znakowania na folii**:\n\n- **Elektronika** — tabliczki znamionowe, oznaczenia PCB, komponenty\n- **Motoryzacja** — etykiety części, oznaczenia pod maską\n- **Przemysł** — oznaczenia maszyn, urządzeń, narzędzi\n- **Etykiety kriogeniczne** — laboratoria, biobanki (Cryocool)\n- **Banki krwi** — ISBT 128 (Blood Bag)\n- **Etykiety GHS** — pojemniki chemiczne (z UL/cUL)\n- **Machine vision** — PolyPro 4000T Matte',
  },
  {
  heading: 'Jak dobrać do etykiety',
  content:
   'Zebra 5095 ma **5 priorytetowych parowań** + 3 jako alternatywa:\n\n**Pierwszy wybór (primary):**\n- Z-Ultimate 3000T White (poliester)\n- Z-Ultimate 3000T Silver (poliester srebrny)\n- PolyPro 4000T Matte (machine vision)\n- PolyO 3100T (poliolefina)\n- 8100T Cryocool (krio)\n- 8000T Blood Bag (banki krwi)\n\n**Alternatywa:**\n- PolyE 3100T Gloss (gdy PE + chemikalia — domyślnie 3400)\n- PolyPro 3000T Gloss (gdy na zewnątrz — domyślnie 3200)\n\nDo standardowego poliestru, krio i PP matowego — 5095 jest **wymogiem producenta**, nie opcjonalnym wyborem.',
  },
  {
  heading: 'Kompatybilność i konstrukcja',
  content:
   'Zebra 5095 dostępna w **najpełniejszej gamie wariantów resin** — od desktopowych (74 m, rdzeń 12 mm) do XL industrial (450 m, rdzeń 25 mm). Konstrukcja **nawój zewnętrzny**.\n\n**Maksymalna prędkość druku 203 mm/s (8 ips)** — niższa niż taśmy woskowe (12 ips), ale to typowe dla resin: czysta żywica wymaga wolniejszego topienia dla pewnego związania z folią. Nadruk po związaniu jest niezniszczalny w typowych warunkach.',
  },
  {
  heading: 'Kiedy wybrać 5095 a kiedy 5100 lub 4800',
  content:
   'Wybierz **5095 Resin** w 90% zastosowań foliowych:\n\n- Standard do poliestru (Z-Ultimate)\n- Krio (Cryocool), banki krwi (Blood Bag)\n- Polipropylen matowy (machine vision)\n- Poliolefina (PolyO)\n\nPrzesiądź się na **5100 Premium Resin** gdy:\n\n- Potrzebujesz gwarancji trwałości **10+ lat** (tabliczki znamionowe na maszynach pod maską)\n- Krioprzechowywanie długoterminowe (>5 lat — biobanki)\n- Outdoor długoterminowy z ciągłym UV\n\nPrzesiądź się na **4800 Resin** gdy:\n\n- Drukujesz na foliach zabezpieczających (VOID, destruktywne)\n- Etykieta ma kontakt z bardzo agresywnymi chemikaliami\n- Beczki chemiczne, plomby na sprzęcie przemysłowym',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Żywiczna High Performance' },
  { label: 'Model', value: '5095 Resin' },
  { label: 'Konstrukcja', value: 'nawój zewnętrzny' },
  { label: 'Maksymalna prędkość druku', value: '203 mm/s (8 ips)' },
  { label: 'Rdzeń (gilza)', value: '12 mm (0,5") i 25 mm (1")' },
  { label: 'Polecane etykiety', value: 'Z-Ultimate 3000T White/Silver, PolyPro 4000T Matte, PolyO 3100T, 8100T Cryocool, 8000T Blood Bag' },
  { label: 'Certyfikaty', value: 'UL/cUL approved, BS5609 (z etykietą Z-Ultimate)' },
  { label: 'Odporność chemiczna', value: 'Wysoka (alkohole, IPA, rozpuszczalniki podstawowe)' },
  { label: 'Odporność UV', value: 'Krótkoterminowa (na zewnątrz do roku)' },
  { label: 'Zakres temperatur', value: '-40°C do +120°C' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '20' },
  { label: 'Grupa cenowa', value: 'Bestseller resin' },
 ],
 applications: [
  'Etykiety na produktach końcowych (Z-Ultimate)',
  'Tabliczki znamionowe (poliester)',
  'Etykiety kriogeniczne (Cryocool, Blood Bag)',
  'Komponenty elektroniczne (UL/cUL)',
  'Etykiety GHS — pojemniki chemiczne',
  'Machine vision — polipropylen matowy',
  'Etykiety maszyn przemysłowych',
  'Etykiety motoryzacyjne (pod maską)',
 ],
 notRecommendedFor: [
  'Typowe etykiety papierowe — wybierz 2300 (5095 to przepłata)',
  'Plomby zabezpieczające — wybierz 4800',
  'Tabliczki znamionowe 10+ lat — wybierz 5100 Premium',
  'Najagresywniejsze chemikalia (aceton, MEK) — wybierz 8000 ChemResist',
  'Bardzo wolne drukarki <6 ips — nieoptymalne',
 ],
 compatiblePrinters: {
  desktop: ['ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL/cUL approved', description: 'Certyfikaty UL i kanadyjska cUL — wymagane dla oznaczeń bezpieczeństwa i komponentów elektrycznych w USA/Kanadzie.' },
  { name: 'BS5609 (z Z-Ultimate)', description: 'W połączeniu z Z-Ultimate 2500T/3000T spełnia normę BS5609 dla etykiet GHS na pojemnikach chemicznych transportowanych morzem.' },
 ],
 comparedWith: [
  { seriesSlug: '5100-resin', whenToChooseThis: '5095 to bestseller resin — pokrywa 90% zastosowań foliowych. 5100 Premium gdy potrzebujesz gwarancji trwałości 10+ lat (tabliczki znamionowe pod maską) lub krioprzechowywania długoterminowego (biobanki).' },
  { seriesSlug: '4800-resin', whenToChooseThis: '5095 do standardowego poliestru, krio i polipropylenu matowego. 4800 — do plomb zabezpieczających (VOID, destruktywne) i etykiet z agresywnymi chemikaliami (beczki chemiczne).' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '5095 (resin) do folii poliestrowej i krio — wymóg producenta. 3200 (wax/resin) do papieru powlekanego i prostego polipropylenu (taniej, gdy nie potrzebujesz pełnej żywicy).' },
 ],
 faq: [
  { question: 'Dlaczego 5095 to bestseller resin?', answer: '5095 jest polecana dla 8 etykiet (najwięcej w portfolio Zebra) i wymagana przez producenta dla Z-Ultimate 3000T (White i Silver) oraz PolyPro 4000T Matte. To "domyślna taśma żywiczna" — pierwszy wybór do druku na folii, krio i etykietach UL/GHS.' },
  { question: 'Czy mogę użyć 5095 zamiast 2300 do papieru?', answer: 'Technicznie tak, ale to przepłata. 5095 jest wielokrotnie droższa od 2300 Wax i daje tę samą jakość na papierze. Resin to wymóg dla folii — do papieru wystarczy wax (2300) lub wax/resin (3200).' },
  { question: 'Co się stanie jeśli użyję 2300 zamiast 5095 do Z-Ultimate?', answer: 'Nadruk schodzi palcem — taśma woskowa nie wiąże się chemicznie z poliestrem. To najczęstszy błąd przy druku TT. Z-Ultimate wymaga taśmy żywicznej (5095 Resin) lub 5100 Premium Resin. Etykiety wydrukowane wax bezużyteczne.' },
  { question: 'Czy 5095 wytrzymuje kontakt z acetonem?', answer: 'Z normalnym kontaktem — tak. Z ciągłym zanurzeniem w acetonie lub MEK — wybierz 8000 ChemResist, specjalistyczną odmianę pod najtrudniejsze aplikacje chemiczne. Do 99% scenariuszy 5095 wystarcza.' },
  { question: 'Jakie są zalecane drukarki dla 5095?', answer: 'Zebra 5095 dostępna w wariantach desktopowych (74 m, rdzeń 12 mm — pod ZD-y) i industrial (300/450 m, rdzeń 25 mm — pod ZT-y). Pełna kompatybilność: ZD421t, ZD621t, ZD611t, ZT231, ZT411, ZT421, ZT510, ZT610, ZT620.' },
  { question: 'Czy 5095 ma certyfikat dla etykiet GHS?', answer: 'Tak — w połączeniu z Z-Ultimate 2500T/3000T spełnia normę BS5609 dla etykiet GHS na pojemnikach chemicznych transportowanych morzem. Certyfikat UL/cUL daje dodatkowe uznanie dla rynku USA/Kanada.' },
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
