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
 /** Opcjonalny override pozycji tła TYLKO dla kafelka na liście (BannerCard).
     Gdy brak — używa `heroImagePosition`. Pozwala przesunąć kadr na kafelku niezależnie od hero. */
 cardImagePosition?: string
 /** Opcjonalny gradient tła sekcji hero — używaj gdy zdjęcie ma jasne tło, żeby uniknąć
     ostrego przejścia między czarnym bg-slate-950 a tłem fotografii. CSS linear-gradient. */
 heroBackgroundGradient?: string
 /** Gdy `true` — featheruje lewą krawędź `heroImage` maską CSS. Używaj dla zdjęć z jasnym,
     jednolitym tłem bez winiety (np. 5095), gdzie object-contain zostawia widoczną pionową
     krawędź. NIE potrzebne dla zdjęć z naturalną winietą (2300, 3200). */
 heroMaskLeft?: boolean
 /** Opcjonalne powiększenie `heroImage` w hero (CSS transform scale, kotwica prawa krawędź).
     Używaj dla szerokich banerów, które object-contain renderuje zbyt mało (np. 2100 = 1.2).
     Nadmiar przycina overflow-hidden sekcji. */
 heroImageScale?: number
 /** Gdy `true` — hero używa object-cover zamiast object-contain (wypełnia kontener, bez pasków
     góra/dół, kadruje boki). Dla szerokich banerów z produktem przy prawej krawędzi (np. 5319). */
 heroImageCover?: boolean

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
 temperatureRange: 'Magazynowanie -5°C do 35°C, 20–80% RH',
 priceFrom: 303.15,
 accent: '#F59E0B',
 seoTitle: 'Zebra 1600 Wax — standardowa taśma woskowa termotransferowa',
 seoDescription: 'Zebra 1600 Wax — standardowa taśma woskowa do papierowych etykiet niepowlekanych i powlekanych. PET 4,5 μm, łącznie 9 μm, druk do 254 mm/s. Atest kontaktu z żywnością (FDA, 1935/2004/WE, LFGB), bez halogenów i lateksu. Do drukarek przemysłowych i napędów Zebra.',
 h1: 'Taśma termotransferowa Zebra 1600 Wax',
 heroIntro: 'Zebra 1600 Wax to **standardowa woskowa taśma barwiąca** do druku na papierowych etykietach niepowlekanych i powlekanych. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosku, łącznie 9 μm**. Drukuje z prędkością **do 254 mm/s (10 ips)** dla kodów standardowych i **152 mm/s (6 ips)** dla kodów obróconych, z czytelnością nadruku w świetle widzialnym i podczerwonym (IR + visible). Posiada komplet atestów regulacyjnych z **kontaktem z żywnością** (FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB) — bez halogenów, lateksu, pochodzenia zwierzęcego i bisfenolu A. Stockowana głównie pod **drukarki przemysłowe (tabletop), napędy drukujące (print engines) i starsze instalacje Zebra** — to woskowa „robocza" do dużych wolumenów na rolkach przemysłowych.',
 keyHighlights: [
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **9 μm**',
  'Druk na papierze niepowlekanym i powlekanym (uncoated/coated)',
  'Prędkość **do 254 mm/s (10 ips)**; **152 mm/s (6 ips)** dla kodów obróconych',
  'Skanowalność w świetle widzialnym i podczerwonym (IR + visible) — typowa klasa **ANSI A/B**',
  'Atest **kontaktu z żywnością**: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB',
  'Bez halogenów, bez lateksu, bez pochodzenia zwierzęcego (vegan), bez bisfenolu A (BPA free)',
  'Zgodność: REACH/SVHC, RoHS, TSCA, konflikt minerałów (Dodd-Frank), California Prop 65',
  'Konstrukcja nawój zewnętrzny (Outside Coated) — standard Zebry',
  'Dla wszystkich przemysłowych drukarek tabletop Zebra, napędów (engines) i instalacji legacy',
  'Magazynowanie: **1 rok** w temperaturze -5°C do 35°C, wilgotność 20–80% RH',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 1600 Wax to standardowa formuła woskowa zaprojektowana do druku termotransferowego na papierze:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — wytrzymały mechanicznie nośnik warstwy barwiącej\n- **Warstwa wosku (czarna)** — topi się pod głowicą i przenosi na podłoże, dając ostry, czytelny nadruk\n- **Grubość całkowita: 9 μm** — nieco grubsza niż bestsellerowa 2300 Wax (8 μm)\n- Konstrukcja nawój zewnętrzny (Outside Coated) — standard wszystkich drukarek Zebra\n- Skanowalność w świetle **podczerwonym i widzialnym** (IR + visible) — współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami\n\n**Wydajność druku:**\n\n- **Do 254 mm/s (10 ips)** dla kodów standardowych, **152 mm/s (6 ips)** dla kodów obróconych\n- Typowa jakość skanowania **ANSI Grade A** na papierze niepowlekanym i powlekanym dla kodów 10 mil przy prędkościach do 203–254 mm/s; kody obrócone 15 mil — Grade A na papierze niepowlekanym i powlekanym przy niższych prędkościach\n- Powłoka woskowa zapewnia podstawową odporność nadruku — wystarczającą do etykiet, które nie są narażone na tarcie, wilgoć ani chemikalia',
  },
  {
  heading: 'Atesty kontaktu z żywnością i czysty skład',
  content:
   'Mimo standardowej, ekonomicznej klasy, 1600 Wax ma pełen komplet atestów regulacyjnych — w tym **pośredni kontakt z żywnością**:\n\n- **FDA 21 CFR 175.300** — pośredni kontakt z żywnością (powłoki żywiczne i polimerowe)\n- **Dyrektywa UE 1935/2004/WE** — materiały i wyroby przeznaczone do kontaktu z żywnością\n- **LFGB** — niemiecka ustawa o środkach spożywczych i towarach konsumpcyjnych\n\nSkład bez substancji budzących wątpliwości środowiskowe i zdrowotne:\n\n- **Bez halogenów** (halogen free), **bez lateksu** (latex free)\n- **Bez składników pochodzenia zwierzęcego** (vegan), **bez bisfenolu A** (BPA free)\n- Zgodność: **REACH/SVHC**, **RoHS**, **TSCA**, **Dodd-Frank** (konflikt minerałów), **California Proposition 65**, CMR 1976/769/WE\n\nDzięki temu 1600 Wax sprawdza się tam, gdzie etykieta może mieć pośredni kontakt z opakowaniem produktów spożywczych — przy zachowaniu niskiego kosztu eksploatacji.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 1600 Wax to woskowa „robocza" do dużych wolumenów prostych etykiet papierowych:\n\n- **Etykietowanie ogólnego przeznaczenia** (general purpose) — oznaczenia wewnętrzne, dokumentacja, kompletacja\n- **Wysyłka i przyjęcie towaru** (shipping and receiving) — etykiety adresowe i logistyczne na kartonach\n- **Śledzenie zapasów** (inventory tracking) — oznaczenia lokalizacyjne, regałowe, kontenerowe\n- **Magazynowanie i dystrybucja** (warehousing and distribution) — duże serie w temperaturze pokojowej\n- **Etykiety i metki w handlu** (retail labels and tags) — etykiety półkowe, ekspozytory, metki produktowe\n\nDzięki dostępności w dużych formatach i atestowi kontaktu z żywnością 1600 Wax pasuje też do **linii pakujących z napędami drukującymi** (print engines, np. seria ZE) i **starszych instalacji przemysłowych** drukujących duże ilości papierowych etykiet zbiorczych.',
  },
  {
  heading: 'Kompatybilność, magazynowanie i pierwsze zamówienie',
  content:
   'Zebra 1600 Wax dostępna jest w konstrukcji **nawój zewnętrzny** — standardowym typie nawoju Zebry, zgodnym ze wszystkimi drukarkami Zebra obsługującymi taśmy outside coated.\n\n- **Drukarki:** wszystkie przemysłowe drukarki tabletop Zebra, napędy drukujące (print engines) oraz starsze instalacje przemysłowe i legacy\n- **Rdzeń (gilza):** 25 mm (1") dla wariantów przemysłowych\n- **Długości:** głównie rolki przemysłowe (do 450 m); inne szerokości i długości dostępne na zamówienie, z minimalną ilością zamówieniową i czasem realizacji\n\n**Magazynowanie:** trwałość **1 rok** od daty produkcji w temperaturze **-5°C do 35°C** i wilgotności **20–80% RH**. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.\n\nNie wiesz, który wariant pasuje do Twojej drukarki i etykiety? Skontaktuj się z TAKMA — dobierzemy szerokość, długość i rdzeń pod konkretny model oraz wyślemy próbkę do testu.',
  },
  {
  heading: 'Kiedy wybrać 1600, a kiedy 2300, 2100 lub 3200?',
  content:
   'Wybierz **1600 Wax** gdy drukujesz **duże wolumeny prostych papierowych etykiet** na drukarce przemysłowej lub napędzie drukującym, w temperaturze pokojowej, a etykieta nie jest narażona na tarcie, wilgoć ani chemikalia. Przesiądź się gdy:\n\n- **Druk biurkowy / mniejsze serie / prędkość >10 ips** → **2300 Wax** (bestseller, dostępny w małych rolkach 74 m, do 304 mm/s)\n- **Najwyższa prędkość (print-and-apply), druk na matowych syntetykach lub lepsza odporność na ścieranie** → **2100 European Wax** (High-Performance)\n- **Kontakt z wilgocią, tarciem lub chemikaliami** → **3200 Premium Wax/Resin** (wosk-żywica, wyższa odporność)\n- **Folia syntetyczna (PET, PP, PE)** → taśma żywiczna **5095 Resin** lub woskowo-żywiczna **3200/3400**',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa (Wax) — klasa standardowa' },
  { label: 'Model', value: '1600 Wax' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '9 μm' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '254 mm/s (10 ips); 152 mm/s (6 ips) dla kodów obróconych' },
  { label: 'Jakość skanowania (ANSI)', value: 'Typowo Grade A/B na papierze niepowlekanym i powlekanym' },
  { label: 'Kompatybilne podłoża', value: 'Papier niepowlekany i powlekany (etykiety i metki)' },
  { label: 'Kontakt z żywnością', value: 'FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB (kontakt pośredni)' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS, TSCA, Dodd-Frank (konflikt minerałów), California Prop 65, CMR 1976/769/WE' },
  { label: 'Czysty skład', value: 'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A (BPA free)' },
  { label: 'Drukarki', value: 'Przemysłowe tabletop Zebra, napędy drukujące (engines), instalacje legacy' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1") — warianty przemysłowe' },
  { label: 'Magazynowanie — temperatura', value: '-5°C do 35°C' },
  { label: 'Magazynowanie — wilgotność', value: '20–80% RH' },
  { label: 'Trwałość magazynowa', value: '1 rok od daty produkcji' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '10' },
  { label: 'Grupa cenowa', value: 'Standard / ekonomia' },
 ],
 applications: [
  'Etykietowanie ogólnego przeznaczenia (general purpose)',
  'Wysyłka i przyjęcie towaru — etykiety adresowe i logistyczne na kartonach',
  'Śledzenie zapasów — oznaczenia lokalizacyjne, regałowe, kontenerowe',
  'Magazynowanie i dystrybucja — duże serie w temperaturze pokojowej',
  'Etykiety i metki w handlu (retail labels and tags)',
  'Linie pakujące z napędami drukującymi (print engines)',
  'Etykiety na opakowania produktów spożywczych (pośredni kontakt z żywnością)',
 ],
 notRecommendedFor: [
  'Folie syntetyczne (PE, PP, PET) — wymagają żywicy (resin) lub wosk-żywicy',
  'Aplikacje z kontaktem z wilgocią, tarciem lub chemikaliami — wybierz 3200 Wax/Resin',
  'Druk >10 ips lub małe rolki desktop 74 m — wybierz 2300 Wax',
  'Najwyższa prędkość, print-and-apply lub matowe syntetyki — wybierz 2100 European Wax',
  'Outdoor i ekspozycja UV — wybierz folię z taśmą żywiczną (5095/5100)',
  'Oznaczenia z certyfikatem UL/cUL — wybierz 5095 lub 5100 na folii poliestrowej',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620', 'ZE511', 'ZE521'],
  mobile: [],
 },
 certifications: [
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE, LFGB)', description: 'Atest pośredniego kontaktu z żywnością: FDA 21 CFR 175.300 (powłoki żywiczne i polimerowe), dyrektywa UE 1935/2004/WE oraz niemiecka ustawa LFGB. Pozwala stosować 1600 Wax do etykiet na opakowaniach produktów spożywczych.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC, RoHS, TSCA (1976), Dodd-Frank (konflikt minerałów), California Proposition 65 oraz CMR 1976/769/WE — pełna zgodność z wymaganiami środowiskowymi rynków UE i USA.' },
  { name: 'Czysty skład', description: 'Bez halogenów, bez lateksu, bez składników pochodzenia zwierzęcego (vegan) i bez bisfenolu A (BPA free) — bezpieczna w środowiskach o podwyższonych wymaganiach.' },
  { name: 'Skanowalność IR + visible', description: 'Nadruk czytelny w świetle podczerwonym i widzialnym, typowa klasa ANSI Grade A/B na papierze niepowlekanym i powlekanym — współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami.' },
 ],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz **1600 Wax** do dużych wolumenów na drukarkach przemysłowych i napędach (engines), gdy etykieta nie jest narażona na tarcie. **2300 European Wax** to bestseller — dostępna w małych rolkach 74 m (desktop), drukuje do 304 mm/s (12 ips) i ma wyższą odporność nadruku; bezpieczniejszy wybór do codziennego druku biurkowego.' },
  { seriesSlug: '2100-wax', whenToChooseThis: '**1600** do prostego magazynu i druku ogólnego w temperaturze pokojowej. **2100 European Wax** — gdy potrzebujesz najwyższej prędkości (print-and-apply), druku na matowych syntetykach lub lepszej odporności nadruku na ścieranie (klasa High-Performance).' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '**1600** (czysty wosk) do papieru w warunkach suchych. **3200 Premium Wax/Resin** gdy etykieta będzie miała kontakt z **wilgocią, rozpuszczalnikami, chemikaliami lub tarciem** — wosk-żywica daje znacznie wyższą odporność nadruku.' },
 ],
 faq: [
  { question: 'Jaka jest konstrukcja Zebra 1600 Wax?', answer: 'Dwuwarstwowa: powłoka bazowa z poliestru (PET) **4,5 μm** + warstwa wosku barwiącego, **łącznie 9 μm**. Kolor czarny, konstrukcja nawój zewnętrzny (Outside Coated). Skanowalność w świetle podczerwonym i widzialnym.' },
  { question: 'Czym 1600 Wax różni się od 2300 Wax?', answer: '1600 to standardowa woskowa stockowana głównie pod **drukarki przemysłowe, napędy drukujące i instalacje legacy** w dużych rolkach (do 450 m), drukuje do **254 mm/s (10 ips)**. 2300 to bestseller dostępny też w małych rolkach 74 m pod drukarki biurkowe, drukuje do **304 mm/s (12 ips)** i ma wyższą odporność nadruku na ścieranie. Do druku biurkowego i mniejszych serii wybierz 2300; do dużych wolumenów przemysłowych — 1600.' },
  { question: 'Czy 1600 Wax ma atest kontaktu z żywnością?', answer: 'Tak — 1600 Wax ma atest **pośredniego** kontaktu z żywnością: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB. Dodatkowo jest bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A. Można nią drukować etykiety na opakowaniach produktów spożywczych.' },
  { question: 'Czy 1600 Wax drukuje na folii?', answer: 'Nie. Taśmy woskowe nie wiążą się z folią syntetyczną (poliester, polipropylen, polietylen) — nadruk schodziłby palcem. Do folii potrzebujesz taśmy żywicznej (5095 Resin) lub woskowo-żywicznej (3200/3400 Wax/Resin).' },
  { question: 'Jaka jest maksymalna prędkość druku 1600 Wax?', answer: '**Do 254 mm/s (10 ips)** dla kodów standardowych i **152 mm/s (6 ips)** dla kodów obróconych. Jeśli Twoja drukarka pracuje szybciej niż 10 ips lub potrzebujesz wyższej rozdzielczości, wybierz 2300 lub 2100 Wax.' },
  { question: 'Do jakich drukarek pasuje 1600 Wax?', answer: 'Do wszystkich przemysłowych drukarek tabletop Zebra (ZT411, ZT421, ZT510, ZT610, ZT620), napędów drukujących (print engines, np. ZE511/ZE521) oraz starszych instalacji Zebra. Standardowy rdzeń 25 mm (1"). Wszystkie taśmy mają nawój zewnętrzny — pasują bez konfiguracji.' },
  { question: 'Jaką szerokość taśmy dobrać do etykiety?', answer: 'Szerokość taśmy powinna być o 2–5 mm szersza niż etykieta — np. do etykiety 102 mm wybierz taśmę 106 lub 110 mm. Chroni to głowicę drukującą przed bezpośrednim kontaktem z etykietą.' },
  { question: 'Jakie są warunki magazynowania?', answer: 'Trwałość **1 rok** od daty produkcji w temperaturze **-5°C do 35°C** i wilgotności **20–80% RH**. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.' },
  { question: 'Czy 1600 ma certyfikat UL?', answer: 'Nie. Taśmy woskowe nie posiadają certyfikatu UL — dotyczy on taśm żywicznych (5095 Resin, 5100 Premium Resin) na folii poliestrowej. Do oznaczeń UL/cUL wybierz 5095 + Z-Ultimate 3000T.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-essentials-500t', seriesName: 'Z-Essentials 500T', role: 'primary' },
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'alternative', when: 'Wybierz 1600 gdy budżet jest priorytetem, w temp. pokojowej i krótkich seriach. Domyślnie do Z-Perform 1000T używa się 2300 Wax.' },
 ],
 },

 /* ──────────────── 2. 2100 EUROPEAN WAX — High-Performance ──────────────── */
 {
 slug: '2100-wax',
 productId: 'zebra-2100-wax',
 category: 'woskowe',
 badge: 'Zebra 2100',
 title: 'Zebra 2100 European Wax',
 tagline: 'Woskowa High-Performance — top prędkość, matowe syntetyki, lepsza odporność na ścieranie.',
 positioning: 'premium',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 304,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: 'Magazynowanie 5°C do 35°C, 20–80% RH',
 priceFrom: 145.18,
 accent: '#F59E0B',
 heroImage: '/images/zebra-2100-wax-hero.png',
 heroImagePosition: 'right center',
 heroImageCover: true,
 seoTitle: 'Zebra 2100 European Wax — woskowa High-Performance, 12 ips',
 seoDescription: 'Zebra 2100 European Wax — woskowa taśma High-Performance. PET 4,5 μm, łącznie 8 μm, druk do 304,8 mm/s (12 ips) przy niskiej energii głowicy, także na matowych syntetykach. Lepsza odporność na rozmazanie/zarysowania niż zwykły wosk. Atest kontaktu z żywnością. 15 wariantów od 145 zł.',
 h1: 'Taśma termotransferowa Zebra 2100 European Wax',
 heroIntro: 'Zebra 2100 European Wax to **woskowa taśma klasy High-Performance** — w odróżnieniu od standardowej 2300 Wax drukuje nie tylko na papierze niepowlekanym i powlekanym, ale też na **wielu matowych materiałach syntetycznych**, i oferuje **lepszą odporność na rozmazanie i zarysowania niż zwykłe taśmy woskowe**. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosku, łącznie 8 μm**. Dzięki **niskiej energii potrzebnej do transferu** osiąga ekstremalnie wysokie prędkości — **do 304,8 mm/s (12 ips)** i 203 mm/s (8 ips) — co czyni ją idealną do **szybkich aplikacji print-and-apply** z papierami topcoated Zebra. Nadruk czytelny w świetle widzialnym i podczerwonym (IR + visible). Komplet atestów regulacyjnych z kontaktem z żywnością (FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB).',
 keyHighlights: [
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **8 μm**',
  'Najwyższa prędkość: **do 304,8 mm/s (12 ips)** i 203 mm/s (8 ips) przy **niskiej energii głowicy**',
  'Druk na papierze niepowlekanym/powlekanym **oraz na wielu matowych syntetykach** (wyróżnik vs 2300)',
  '**Lepsza odporność na rozmazanie i zarysowania** niż standardowe taśmy woskowe',
  'Doskonała jakość kodów standardowych i obróconych — typowo **ANSI Grade A** na papierze powlekanym',
  'Ograniczona odporność chemiczna: znosi łagodne środki amoniakalne, Formula 409 i 90% IPA (nie znosi rozpuszczalników, paliw, acetonu)',
  'Atest **kontaktu z żywnością**: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB',
  'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A (BPA free)',
  'Idealna do **szybkiego print-and-apply** i wysyłki w krajach o wysokiej temperaturze',
  'Magazynowanie **1 rok** w 5–35°C; numer próbki **02100BK11005**',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 2100 European Wax to woskowa formuła klasy **High-Performance** zaprojektowana pod szybki, jakościowy druk:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — wytrzymały mechanicznie nośnik\n- **Warstwa wosku (czarna)** — formuła o **niskiej energii transferu**, dzięki czemu głowica topi ją szybciej i mniejszym kosztem energii\n- **Grubość całkowita: 8 μm** — jak standardowa 2300, ale z lepszą odpornością nadruku\n- Konstrukcja nawój zewnętrzny (Outside Coated)\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible)\n\n**Wydajność druku:**\n\n- **Do 304,8 mm/s (12 ips)** oraz **203 mm/s (8 ips)** — niska energia głowicy pozwala na ekstremalnie szybki druk\n- **Doskonała jakość kodów standardowych i obróconych** (normal + rotated)\n- Typowa jakość skanowania: **ANSI Grade A** na papierze powlekanym do 304,8 mm/s oraz na matowych syntetykach do 254 mm/s; **Grade B** na papierze niepowlekanym do 152,4 mm/s\n- **Lepsza odporność na rozmazanie i zarysowania** w porównaniu z innymi taśmami woskowymi',
  },
  {
  heading: 'Matowe syntetyki i odporność chemiczna',
  content:
   'Najważniejszy wyróżnik 2100 względem standardowej 2300 Wax: **drukuje nie tylko na papierze, ale też na wielu matowych materiałach syntetycznych**. To rozszerza zastosowania poza papier — bez konieczności sięgania od razu po droższą taśmę wosk-żywiczną.\n\n**Odporność chemiczna — realistycznie:** 2100 to wciąż wosk, więc jej odporność na chemikalia jest **ograniczona**. W testach ścierania z odczynnikami nadruk zachowuje czytelność (ocena ANSI B lub wyższa) tylko w kontakcie z **łagodnymi środkami czyszczącymi**: płynem do szyb z amoniakiem, preparatem Formula 409 oraz **90% alkoholem izopropylowym (IPA)**. Nadruk **nie jest odporny** na: oleje silnikowe, płyn hamulcowy, odtłuszczacze, WD-40, heksan, ksylen, benzynę i aceton.\n\nJeśli etykieta będzie miała kontakt z rozpuszczalnikami, paliwami lub agresywnymi chemikaliami — wybierz taśmę wosk-żywiczną **3200 Premium Wax/Resin** lub żywiczną **5095 Resin**.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 2100 European Wax sprawdza się tam, gdzie liczy się **prędkość i jakość nadruku** na papierze i matowych syntetykach:\n\n- **Etykietowanie ogólnego przeznaczenia** (general purpose)\n- **Wysyłka i przyjęcie towaru** — w tym w **krajach o wysokiej temperaturze** (high temperature countries)\n- **Śledzenie zapasów** — oznaczenia lokalizacyjne, regałowe, paletowe\n- **Magazynowanie i dystrybucja** — duże serie na szybkich drukarkach\n- **Etykiety i metki w handlu** (retail labels and tags)\n- **Szybki print-and-apply** — automatyczne aplikatory etykiet z papierami topcoated Zebra, gdzie wymagana jest najwyższa prędkość przy zachowaniu jakości kodu',
  },
  {
  heading: 'Atesty, czysty skład i magazynowanie',
  content:
   '2100 European Wax ma komplet atestów regulacyjnych — w tym **pośredni kontakt z żywnością**:\n\n- **FDA 21 CFR 175.300** (pośredni kontakt z żywnością), **dyrektywa UE 1935/2004/WE**, **LFGB**\n- **REACH/SVHC**, **RoHS**, **Dodd-Frank** (konflikt minerałów), **California Proposition 65**\n- **Bez halogenów**, **bez lateksu**, **bez składników pochodzenia zwierzęcego** (vegan), **bez bisfenolu A** (BPA free)\n\n**Magazynowanie:** trwałość **1 rok** od daty produkcji w temperaturze **5°C do 35°C** i wilgotności **20–80% RH**. Magazynuj w oryginalnym opakowaniu, z dala od bezpośredniego nasłonecznienia.\n\n**Drukarki:** stockowana pod drukarki **mid-range i wysokowydajne** Zebra oraz **napędy drukujące (print engines)** i starsze instalacje. Numer próbki do testów: **02100BK11005** (110 mm). Dla drukarek biurkowych lub nietypowych rozmiarów skontaktuj się z TAKMA — dobierzemy wariant pod Twoją drukarkę i etykietę.',
  },
  {
  heading: 'Kiedy wybrać 2100, a kiedy 2300, 3200 lub 5095?',
  content:
   'Wybierz **2100 European Wax** gdy potrzebujesz **najwyższej prędkości druku** (print-and-apply), drukujesz na **matowych syntetykach** obok papieru, lub chcesz **lepszej odporności nadruku na ścieranie** niż daje standardowy wosk — przy zachowaniu woskowego budżetu. Przesiądź się gdy:\n\n- **Typowy papier w temperaturze pokojowej, mniejsze serie, niższy koszt** → **2300 Wax** (bestseller)\n- **Kontakt z wilgocią, tarciem lub rozpuszczalnikami/paliwami** → **3200 Premium Wax/Resin** (wosk-żywica)\n- **Folia poliestrowa, błyszcząca lub outdoor/UV** → **5095 Resin** (czysta żywica)\n- **Folia polietylenowa (PE) lub aplikacje wysokowydajne na syntetykach** → **3400 Wax/Resin High-Performance**',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa (Wax) — klasa High-Performance' },
  { label: 'Model', value: '2100 European Wax (2100 High-Performance Wax)' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '8 μm' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '304,8 mm/s (12 ips); 203 mm/s (8 ips) — niska energia głowicy' },
  { label: 'Jakość skanowania (ANSI)', value: 'Grade A na papierze powlekanym i matowych syntetykach; Grade B na papierze niepowlekanym' },
  { label: 'Kompatybilne podłoża', value: 'Papier niepowlekany i powlekany oraz wiele matowych materiałów syntetycznych' },
  { label: 'Odporność na rozmazywanie i zarysowania', value: 'Dobra — lepsza niż standardowe taśmy woskowe' },
  { label: 'Odporność chemiczna', value: 'Ograniczona: łagodne środki amoniakalne, Formula 409, 90% IPA (nie: rozpuszczalniki, paliwa, aceton)' },
  { label: 'Kontakt z żywnością', value: 'FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB (kontakt pośredni)' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS, Dodd-Frank (konflikt minerałów), California Prop 65' },
  { label: 'Czysty skład', value: 'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A (BPA free)' },
  { label: 'Drukarki', value: 'Mid-range, wysokowydajne, napędy drukujące (engines), instalacje legacy' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1") — warianty przemysłowe' },
  { label: 'Magazynowanie', value: '5°C do 35°C, 20–80% RH; trwałość 1 rok' },
  { label: 'Numer próbki', value: '02100BK11005 (110 mm)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '15' },
  { label: 'Grupa cenowa', value: 'Premium woskowe (High-Performance)' },
 ],
 applications: [
  'Etykietowanie ogólnego przeznaczenia (general purpose)',
  'Wysyłka i przyjęcie towaru — w tym w krajach o wysokiej temperaturze',
  'Szybki print-and-apply z papierami topcoated Zebra',
  'Druk na matowych materiałach syntetycznych',
  'Śledzenie zapasów — oznaczenia lokalizacyjne, regałowe, paletowe',
  'Magazynowanie i dystrybucja — duże serie na szybkich drukarkach',
  'Etykiety i metki w handlu (retail labels and tags)',
  'Etykiety na opakowania produktów spożywczych (pośredni kontakt z żywnością)',
 ],
 notRecommendedFor: [
  'Folie błyszczące i poliester (PET) — wymagają żywicy (5095 Resin)',
  'Kontakt z rozpuszczalnikami, paliwami, acetonem, ksylenem — wybierz 3200 Wax/Resin lub 5095 Resin',
  'Outdoor i długoterminowa ekspozycja UV — wybierz folię z taśmą żywiczną',
  'Folia polietylenowa (PE) — wybierz 3400 Wax/Resin',
  'Oznaczenia z certyfikatem UL/cUL — wybierz 5095 lub 5100 Resin',
  'Najniższy koszt rolki przy prostym papierze — wystarczy 2300 lub 1600 Wax',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620', 'ZE511', 'ZE521'],
  mobile: [],
 },
 certifications: [
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE, LFGB)', description: 'Atest pośredniego kontaktu z żywnością: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB — pozwala drukować etykiety na opakowaniach produktów spożywczych.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC, RoHS, Dodd-Frank (konflikt minerałów) oraz California Proposition 65.' },
  { name: 'Czysty skład', description: 'Bez halogenów, bez lateksu, bez składników pochodzenia zwierzęcego (vegan) i bez bisfenolu A (BPA free).' },
  { name: 'Skanowalność IR + visible', description: 'Nadruk czytelny w świetle podczerwonym i widzialnym; typowa klasa ANSI Grade A na papierze powlekanym i matowych syntetykach — współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami.' },
 ],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz **2100 European Wax** gdy potrzebujesz najwyższej prędkości (print-and-apply), druku na **matowych syntetykach** lub lepszej odporności nadruku na ścieranie. **2300 Wax** to tańszy bestseller do typowego papieru w temperaturze pokojowej — wystarcza w większości scenariuszy.' },
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '**2100** (czysty wosk High-Performance) do papieru i matowych syntetyków bez kontaktu z agresywnymi chemikaliami. **3200 Premium Wax/Resin** gdy etykieta ma kontakt z **wilgocią, rozpuszczalnikami, paliwami lub tarciem** — wosk-żywica daje znacznie wyższą odporność.' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '**2100** do papieru i matowych syntetyków. **3400 Wax/Resin High-Performance** gdy drukujesz na **polietylenie (PE)** lub w wymagających aplikacjach na foliach syntetycznych.' },
 ],
 faq: [
  { question: 'Czym 2100 European Wax różni się od 2300 Wax?', answer: '2100 to wosk klasy **High-Performance**: drukuje nie tylko na papierze, ale też na **wielu matowych syntetykach**, ma **lepszą odporność na rozmazanie i zarysowania** niż standardowy wosk oraz osiąga najwyższą prędkość (304,8 mm/s) przy niskiej energii głowicy — idealny do print-and-apply. 2300 to tańszy bestseller do typowego papieru w temperaturze pokojowej.' },
  { question: 'Czy 2100 drukuje na materiałach syntetycznych?', answer: 'Tak — to jej wyróżnik względem 2300. 2100 drukuje na papierze niepowlekanym i powlekanym **oraz na wielu matowych materiałach syntetycznych** (typowo ANSI Grade A do 254 mm/s). Do folii błyszczących i poliestru nadal potrzebna jest taśma żywiczna (5095 Resin).' },
  { question: 'Jaka jest maksymalna prędkość druku 2100?', answer: '**Do 304,8 mm/s (12 ips)** oraz 203 mm/s (8 ips). Niska energia potrzebna do transferu pozwala drukować ekstremalnie szybko — dlatego 2100 jest polecana do szybkich aplikacji print-and-apply.' },
  { question: 'Jaką odporność chemiczną ma 2100?', answer: 'Ograniczoną — to wciąż wosk. Nadruk pozostaje czytelny (ANSI B lub wyżej) w kontakcie z **łagodnymi środkami: płynem do szyb z amoniakiem, Formula 409 i 90% alkoholem izopropylowym**. **Nie** jest odporny na oleje, płyn hamulcowy, odtłuszczacze, WD-40, heksan, ksylen, benzynę ani aceton — do takich zastosowań wybierz 3200 Wax/Resin lub 5095 Resin.' },
  { question: 'Czy 2100 ma atest kontaktu z żywnością?', answer: 'Tak — FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB (kontakt pośredni). Dodatkowo jest bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A.' },
  { question: 'Czy 2100 drukuje na folii?', answer: 'Na matowych syntetykach — tak. Na foliach błyszczących i poliestrze (PET) — nie; tam wymagana jest taśma żywiczna (5095 Resin) lub woskowo-żywiczna (3400 Wax/Resin).' },
  { question: 'Do jakich drukarek pasuje 2100?', answer: 'Stockowana pod drukarki mid-range i wysokowydajne Zebra (ZT231, ZT411, ZT421, ZT510, ZT610, ZT620), napędy drukujące (print engines, np. ZE511/ZE521) oraz starsze instalacje. Standardowy rdzeń 25 mm (1"); nawój zewnętrzny — pasuje bez konfiguracji.' },
  { question: 'Jaką szerokość taśmy dobrać?', answer: 'Szerokość taśmy powinna być o 2–5 mm szersza niż etykieta — np. do etykiety 102 mm wybierz taśmę 106 lub 110 mm. Numer próbki do testów to 02100BK11005 (110 mm).' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'primary' },
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'alternative', when: 'Papier niepowlekany do zastosowań ogólnych i szybkiego print-and-apply, gdy nie potrzebujesz powlekanego podłoża premium.' },
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
   'Zalecane warunki magazynowania zgodnie z kartą producenta:\n\n- **Temperatura przechowywania: 5°C do 35°C**\n- **Wilgotność względna: 20% do 80% RH**\n- **Trwałość magazynowa: 1 rok** od daty produkcji (oryginalne, nieuszkodzone opakowanie)\n\nPrzekroczenie zakresu (np. magazyn nieklimatyzowany latem powyżej 35°C, lub poniżej 5°C zimą w nieogrzewanych magazynach) może spowodować degradację warstwy wosku, sklejanie się rolki lub problemy z transferem podczas druku. Do **etykiet w chłodni lub mroźni** o pracy w niskich temperaturach decyduje **klej etykiety** (np. 8000T All-Temp działający od −20°C), a nie taśma — woskowa 2300 drukuje na takich etykietach normalnie.',
  },
  {
  heading: 'Numer próbki i pierwsze zamówienie',
  content:
   'Do testów na drukarkach **średniej i wysokiej klasy** zamów rolkę próbną o numerze katalogowym **02300BK11005** (rozmiar 110 × 50 mm/m, rdzeń 25 mm) — standardowy SKU testowy producenta. Dla drukarek biurkowych (desktop) lub niestandardowych rozmiarów skontaktuj się z TAKMA — pomożemy dobrać konkretny wariant pod Twoją drukarkę i etykietę.\n\nDostępne szerokości: **33, 40, 57, 60, 64, 83, 89, 102, 110, 131, 156, 170, 220 mm**. Długości od **74 m** (desktop, rdzeń 12 mm) do **900 m** (przemysłowe, rdzeń 25 mm). Pełna gama 25 wariantów — z reguły dostępne od ręki dla popularnych rozmiarów (110×450, 110×300, 83×450).',
  },
  {
  heading: 'Kiedy wybrać 2300, a kiedy coś innego?',
  content:
   'Wybierz **2300 European Wax** w 90% scenariuszy z papierem TT. Przesiądź się gdy:\n\n- **Najwyższa prędkość (print-and-apply) lub matowe syntetyki** → 2100 European Wax (High-Performance)\n- **Wilgoć, tarcie, lekkie chemikalia** → 3200 Wax/Resin (woskowo-żywiczna)\n- **Folia syntetyczna (PE, PP, PET)** → 5095 Resin (taśma woskowa nie zwiąże się z folią)\n- **Outdoor lub UV długoterminowy** → 5095 Resin lub 5100 Premium Resin\n- **Najniższy koszt rolki za wszelką cenę** → 1600 Wax (ale jakość niższa)\n\n2300 to **bezpieczny, sprawdzony wybór** dla typowych zastosowań — magazyn, wysyłka, retail, śledzenie zapasów. Pełna paleta szerokości, kompatybilność ze wszystkimi drukarkami Zebra (desktop, mid-range, industrial), atesty żywnościowe i regulacyjne — i wszystko w przystępnej cenie bestsellera.',
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
  'Druk z najwyższą prędkością (print-and-apply) lub na matowych syntetykach — wybierz 2100 European Wax',
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
  { seriesSlug: '2100-wax', whenToChooseThis: '2300 do typowego papieru w temperaturze pokojowej. **2100 European Wax** — gdy potrzebujesz najwyższej prędkości (print-and-apply), druku na matowych syntetykach lub lepszej odporności nadruku na ścieranie (klasa High-Performance).' },
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
 tagline: 'Woskowa kolorowa — czarna, niebieska, czerwona i złota (GOLD) do kolorowego znakowania.',
 positioning: 'specjalistyczna',
 outsideCoated: true,
 ulCertified: false,
 printSpeedMax: 203,
 chemicalResistance: 'niska',
 uvResistance: 'brak',
 temperatureRange: 'Magazynowanie -5°C do 40°C, 20–85% RH',
 priceFrom: 129.64,
 accent: '#F59E0B',
 heroImage: '/images/zebra-5319-wax-hero.png',
 heroImagePosition: 'right center',
 heroImageCover: true,
 seoTitle: 'Zebra 5319 Performance Wax — kolorowa taśma woskowa (gold, red, blue)',
 seoDescription: 'Zebra 5319 Performance Wax — woskowa taśma barwiąca dostępna w czterech kolorach: czarnym, niebieskim, czerwonym i złotym (GOLD). PET 4,5 μm, łącznie 7,6 μm, druk do 203 mm/s. Do kolorowego tekstu i grafiki na papierze. Atest kontaktu z żywnością. 14 wariantów od 130 zł.',
 h1: 'Taśma termotransferowa Zebra 5319 Performance Wax',
 heroIntro: 'Zebra 5319 Performance Wax to woskowa taśma barwiąca z jednym wyróżnikiem, którego nie ma żadna inna taśma Zebra: **dostępna jest w czterech kolorach — czarnym, niebieskim, czerwonym i złotym (GOLD)**. To wybór do **kolorowego tekstu i grafiki w celach identyfikacyjnych** — kodowanie kolorem, etykiety ostrzegawcze, oznaczenia kategorii, druk dekoracyjny. Drukuje na papierze niepowlekanym i powlekanym z doskonałą jakością kodów standardowych i obróconych, do prędkości **203,3 mm/s (8 ips)**. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosku, łącznie 7,6 μm** (najcieńsza w gamie woskowej). Komplet atestów regulacyjnych z kontaktem z żywnością.',
 keyHighlights: [
  'Dostępna w **czterech kolorach: czarny, niebieski, czerwony, złoty (GOLD)** — jedyna kolorowa taśma w gamie',
  'Do **kolorowego tekstu i grafiki** w celach identyfikacyjnych (kodowanie kolorem, oznaczenia)',
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **7,6 μm** (najcieńsza woskowa)',
  'Doskonała jakość kodów standardowych i obróconych (normal + rotated)',
  'Druk do **203,3 mm/s (8 ips)**',
  'Skanowalność w świetle podczerwonym (IR) i widzialnym',
  'Atest **kontaktu z żywnością**: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB',
  'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A (BPA free)',
  'Numery próbek: 05319**BK**11005 (czarny), 05319**BL**11005 (niebieski), 05319**RD**11005 (czerwony), 05319**GL**11005 (złoty)',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 5319 Performance Wax to woskowa formuła zaprojektowana do druku na papierze, dostępna w czterech kolorach barwnika:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm** — wytrzymały mechanicznie nośnik\n- **Warstwa wosku** w kolorze czarnym, niebieskim, czerwonym lub złotym\n- **Grubość całkowita: 7,6 μm** — najcieńsza spośród taśm woskowych Zebra (1600 = 9 μm, 2300/2100 = 8 μm)\n- Konstrukcja nawój zewnętrzny (Outside Coated)\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible)\n\n**Wydajność druku:**\n\n- **Do 203,3 mm/s (8 ips)** — niższa niż standardowa 2300 (304 mm/s); 5319 stawia na jakość i kolor, nie na maksymalną prędkość\n- **Doskonała jakość nadruku kodów standardowych i obróconych** (normal + rotated barcodes)\n- Drukuje na papierze niepowlekanym i powlekanym',
  },
  {
  heading: 'Cztery kolory — kodowanie i identyfikacja',
  content:
   '5319 to **jedyna taśma w gamie Zebra dostępna w kolorach** — to jej powód istnienia. Kolory służą do **wizualnej identyfikacji i kodowania**:\n\n- **Czarny (BK)** — standardowy nadruk, pełna czytelność kodów\n- **Niebieski (BL)** — kodowanie kategorii, oznaczenia działów, wyróżnienie partii\n- **Czerwony (RD)** — etykiety ostrzegawcze, oznaczenia bezpieczeństwa, statusy „uwaga/wstrzymane"\n- **Złoty (GOLD)** — druk dekoracyjny, etykiety premium, karty wstępu, oznaczenia ekspozycyjne\n\nKodowanie kolorem przyspiesza rozpoznawanie wzrokowe na linii, w magazynie czy w handlu — bez konieczności czytania treści etykiety. Uwaga: kolorowe nadruki (zwłaszcza złoty) są zwykle czytelne dla oka, ale dla skanerów najpewniejszy pozostaje **czarny** — kody kreskowe drukuj w czerni.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Dwa główne segmenty zastosowań 5319:\n\n- **Etykietowanie ogólnego przeznaczenia** (general purpose) — na papierze niepowlekanym i powlekanym\n- **Aplikacje wymagające kolorowego tekstu lub grafiki** w celach identyfikacyjnych — kodowanie kolorem, oznaczenia kategorii i bezpieczeństwa, etykiety dekoracyjne i premium (GOLD)\n\nDo typowego, czarnego druku etykiet wysyłkowych i magazynowych z najwyższą prędkością — tańsza i szybsza będzie **2300 Wax**. 5319 wybieraj wtedy, gdy potrzebny jest **kolor**.',
  },
  {
  heading: 'Atesty, czysty skład i magazynowanie',
  content:
   '5319 ma komplet atestów regulacyjnych — w tym **pośredni kontakt z żywnością**:\n\n- **FDA 21 CFR 175.300** (pośredni kontakt z żywnością), **dyrektywa UE 1935/2004/WE**, **LFGB**\n- **REACH/SVHC**, **RoHS**, **Dodd-Frank** (konflikt minerałów), **TSCA**, **California Proposition 65**\n- **Bez halogenów**, **bez lateksu**, **bez składników pochodzenia zwierzęcego** (vegan), **bez bisfenolu A** (BPA free)\n\n**Magazynowanie:** trwałość **1 rok** od daty produkcji w temperaturze **-5°C do 40°C** i wilgotności **20–85% RH**.\n\n**Drukarki:** stockowana pod drukarki **mid-range i wysokowydajne** Zebra. Numery próbek do testów (110 mm): **05319BK11005** (czarny), **05319BL11005** (niebieski), **05319RD11005** (czerwony), **05319GL11005** (złoty). Inne szerokości i długości — na zamówienie. Skontaktuj się z TAKMA, by dobrać kolor i rozmiar pod aplikację.',
  },
  {
  heading: 'Kiedy wybrać 5319, a kiedy 2300 lub 2100?',
  content:
   'Wybierz **5319 Performance Wax** gdy potrzebujesz **koloru** nadruku — czarnego, niebieskiego, czerwonego lub złotego — do kodowania, oznaczeń lub druku dekoracyjnego na papierze. W pozostałych przypadkach:\n\n- **Standardowy czarny druk, najwyższa prędkość, niższy koszt** → **2300 Wax** (304 mm/s, bestseller)\n- **Druk na matowych syntetykach lub lepsza odporność na ścieranie** → **2100 European Wax** (High-Performance)\n- **Kontakt z wilgocią, tarciem lub chemikaliami** → **3200 Premium Wax/Resin**\n- **Folia syntetyczna (PET, PP, PE)** → taśma żywiczna **5095 Resin**',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Woskowa (Wax) — klasa Performance, kolorowa' },
  { label: 'Model', value: '5319 Performance Wax' },
  { label: 'Dostępne kolory', value: 'Czarny (BK), niebieski (BL), czerwony (RD), złoty / GOLD (GL)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '7,6 μm (najcieńsza woskowa)' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '203,3 mm/s (8 ips)' },
  { label: 'Jakość nadruku', value: 'Doskonała dla kodów standardowych i obróconych' },
  { label: 'Kompatybilne podłoża', value: 'Papier niepowlekany i powlekany' },
  { label: 'Kontakt z żywnością', value: 'FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE, LFGB (kontakt pośredni)' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS, TSCA, Dodd-Frank (konflikt minerałów), California Prop 65' },
  { label: 'Czysty skład', value: 'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A (BPA free)' },
  { label: 'Drukarki', value: 'Mid-range i wysokowydajne Zebra' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Magazynowanie', value: '-5°C do 40°C, 20–85% RH; trwałość 1 rok' },
  { label: 'Numery próbek', value: '05319BK/BL/RD/GL 11005 (110 mm — czarny/niebieski/czerwony/złoty)' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '14' },
  { label: 'Grupa cenowa', value: 'Performance (kolorowa)' },
 ],
 applications: [
  'Etykietowanie ogólnego przeznaczenia (general purpose) na papierze',
  'Kolorowy tekst i grafika w celach identyfikacyjnych',
  'Kodowanie kolorem — kategorie, działy, partie',
  'Etykiety ostrzegawcze i oznaczenia bezpieczeństwa (czerwony)',
  'Druk dekoracyjny, etykiety premium, karty wstępu (złoty / GOLD)',
  'Wyróżnienie i oznaczenia statusów (niebieski)',
 ],
 notRecommendedFor: [
  'Czytelne dla skanera kody kreskowe w kolorze — kody drukuj w czerni (BK)',
  'Standardowy czarny druk z najwyższą prędkością — wybierz 2300 Wax (304 mm/s)',
  'Druk na matowych syntetykach lub lepsza odporność na ścieranie — wybierz 2100 European Wax',
  'Folie syntetyczne (PE, PP, PET) — wymagają żywicy lub wosk-żywicy',
  'Kontakt z wilgocią, tarciem lub chemikaliami — wybierz 3200 Wax/Resin',
  'Outdoor i ekspozycja UV',
 ],
 compatiblePrinters: {
  desktop: ['ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE, LFGB)', description: 'Atest pośredniego kontaktu z żywnością: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB — pozwala drukować etykiety na opakowaniach produktów spożywczych.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC, RoHS, TSCA (1976), Dodd-Frank (konflikt minerałów) oraz California Proposition 65.' },
  { name: 'Czysty skład', description: 'Bez halogenów, bez lateksu, bez składników pochodzenia zwierzęcego (vegan) i bez bisfenolu A (BPA free).' },
  { name: 'Skanowalność IR + visible', description: 'Nadruk (w czerni) czytelny w świetle podczerwonym i widzialnym. Kody kreskowe zaleca się drukować w kolorze czarnym dla pewności odczytu skanerem.' },
 ],
 comparedWith: [
  { seriesSlug: '2300-wax', whenToChooseThis: 'Wybierz **5319** gdy potrzebujesz **koloru** nadruku (niebieski, czerwony, złoty) do kodowania, oznaczeń lub druku dekoracyjnego. **2300 Wax** to standardowy czarny bestseller — szybszy (304 vs 203 mm/s) i tańszy do typowego druku.' },
  { seriesSlug: '2100-wax', whenToChooseThis: '**5319** gdy decyduje **kolor** nadruku na papierze. **2100 European Wax** gdy potrzebujesz najwyższej prędkości (print-and-apply), druku na matowych syntetykach lub lepszej odporności nadruku na ścieranie (klasa High-Performance).' },
 ],
 faq: [
  { question: 'W jakich kolorach dostępna jest 5319?', answer: 'W czterech: **czarnym (BK)**, **niebieskim (BL)**, **czerwonym (RD)** i **złotym / GOLD (GL)**. To jedyna taśma w gamie Zebra dostępna w kolorach — jej powód istnienia. Kolory służą do kolorowego tekstu i grafiki w celach identyfikacyjnych.' },
  { question: 'Co to jest wariant GOLD?', answer: 'GOLD to 5319 z barwnikiem w kolorze złotym — używana do druku dekoracyjnego: etykiety premium, karty wstępu, oznaczenia ekspozycyjne. Jedna z niewielu taśm Zebra w kolorze metalicznym.' },
  { question: 'Czy mogę drukować kody kreskowe w kolorze?', answer: 'Lepiej nie. Kolorowe nadruki (zwłaszcza złoty, czerwony) są czytelne dla oka, ale skanery najpewniej odczytują kody w **czerni**. Kolory 5319 wykorzystuj do tekstu, grafiki i kodowania kolorem; kody kreskowe drukuj czarną wersją (BK).' },
  { question: 'Jaka jest prędkość i konstrukcja 5319?', answer: 'Druk do **203,3 mm/s (8 ips)** — niższa niż standardowa 2300 (304 mm/s); 5319 stawia na kolor i jakość, nie na maksymalną prędkość. Konstrukcja: poliester (PET) 4,5 μm + warstwa wosku, łącznie **7,6 μm** — najcieńsza woskowa w gamie.' },
  { question: 'Czy 5319 ma atest kontaktu z żywnością?', answer: 'Tak — FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB (kontakt pośredni). Dodatkowo bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A.' },
  { question: 'Czy 5319 drukuje na folii?', answer: 'Nie. To taśma woskowa — wiąże się tylko z papierem. Do folii (poliester, polipropylen, polietylen) wybierz taśmę żywiczną (5095 Resin) lub woskowo-żywiczną (3200 Wax/Resin).' },
  { question: 'Do jakich drukarek pasuje 5319?', answer: 'Stockowana pod drukarki mid-range i wysokowydajne Zebra (ZT231, ZT411, ZT421, ZT510, ZT610, ZT620). Standardowy rdzeń 25 mm (1"); nawój zewnętrzny — pasuje bez konfiguracji.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-perform-1000t', seriesName: 'Z-Perform 1000T', role: 'primary' },
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'alternative', when: 'Papier powlekany premium, gdy potrzebujesz ostrzejszego nadruku kolorowego tekstu i grafiki.' },
 ],
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
 cardImagePosition: '70% 65%',
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
   'Wybierz **3200 Premium Wax/Resin** w 80% scenariuszy wosk-żywicowych — to standard średniej klasy. Przesiądź się gdy:\n\n- **Folie syntetyczne w trudnych warunkach (ciepło, ścieranie, tarcie)** → **3400 Wax/Resin High-Performance**\n- **Folia poliestrowa Z-Ultimate 3000T z najwyższą odpornością chemiczną lub wymóg UL Recognized** → **5095 Resin** (czysta żywica, klasa High Performance)\n- **Outdoor długoterminowy z UV** → **5095 Resin** lub **5100 Premium Resin**\n- **Najagresywniejsze chemikalia (aceton, MEK, ksylen)** → **8000 ChemResist** (specjalistyczna)\n- **Plomby destruktywne (Z-Destruct PE)** → **4800 Resin**',
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
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '**3200** to standard premium WR z UL Recognized do **papierów powlekanych i polipropylenu** z naciskiem na odporność chemiczną. **3400 High-Performance** — gdy etykieta pracuje w **trudnych warunkach fizycznych** (ciepło, para, ścieranie, tarcie): huty, motoryzacja, tabliczki znamionowe.' },
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
 tagline: 'Wszechstronna wosk-żywica — druk na wszystkich podłożach, najszybsza (16 ips), UL 969.',
 positioning: 'standard',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 400,
 chemicalResistance: 'średnia',
 uvResistance: 'brak',
 temperatureRange: 'Odporność cieplna 100°C; magazynowanie 5–35°C, 20–80% RH',
 priceFrom: 196.08,
 accent: '#A855F7',
 heroImage: '/images/zebra-3300-wax-resin-hero.png',
 heroImagePosition: 'right center',
 heroImageCover: true,
 seoTitle: 'Zebra 3300 Wax/Resin — wszechstronna taśma WR, 16 ips, UL 969',
 seoDescription: 'Zebra 3300 Wax/Resin — wszechstronna taśma woskowo-żywiczna ogólnego przeznaczenia. Druk na wszystkich podłożach (od papieru po syntetyki), do 400 mm/s (16 ips) przy niskiej energii głowicy. Mocna odporność na ścieranie, odporność cieplna 100°C, UL 969, atest żywnościowy. 4 warianty od 196 zł.',
 h1: 'Taśma termotransferowa Zebra 3300 Wax/Resin',
 heroIntro: 'Zebra 3300 Wax/Resin to **wszechstronna taśma woskowo-żywiczna ogólnego przeznaczenia** — drukuje na **wszystkich podłożach**, od chropowatych papierów po materiały syntetyczne, co daje maksymalną elastyczność. Zaprojektowana pod **druk wysokiej prędkości — do 400 mm/s (16 ips)** przy **niskiej energii głowicy**, co obniża zużycie energii i wydłuża żywotność głowicy drukującej. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosk-żywicowa, łącznie <9 μm**. Mocna **odporność na ścieranie** i **odporność cieplna do 100°C**; niższa odporność na rozpuszczalniki. Spełnia liczne normy: **UL 969**, kontakt z żywnością (FDA, UE 1935/2004/WE), REACH/SVHC, RoHS, California Prop 65, bez halogenów.',
 keyHighlights: [
  'Druk na **wszystkich podłożach** — od chropowatych papierów po materiały syntetyczne',
  'Najwyższa prędkość w gamie: **do 400 mm/s (16 ips)** przy niskiej energii głowicy',
  'Niska energia transferu — niższe zużycie energii i dłuższa żywotność głowicy',
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **<9 μm (±10%)**',
  'Mocna **odporność na ścieranie**, **odporność cieplna do 100°C**',
  '**UL 969** (norma dla systemów znakowania i etykietowania)',
  'Atest **kontaktu z żywnością**: FDA i dyrektywa UE 1935/2004/WE',
  'REACH/SVHC, RoHS, California Prop 65, bez halogenów (IEC 61249-2-21)',
  'Gęstość optyczna **2,1 ODR**, skanowalność IR + visible; niższa odporność na rozpuszczalniki',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 3300 Wax/Resin to wszechstronna formuła wosk-żywicowa zaprojektowana pod szeroki zakres zastosowań:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm**, grubość całkowita **<9 μm (±10%)**\n- **Formuła wosk-żywicowa (czarna)**, temperatura topnienia tuszu **75°C**\n- Gęstość optyczna nadruku **2,1 ODR** — wysoki kontrast\n- Konstrukcja nawój zewnętrzny (Outside Coated)\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible)\n\n**Wydajność i odporność:**\n\n- **Do 400 mm/s (16 ips)** — najwyższa prędkość spośród taśm Zebra w tym zestawieniu, przy **niskiej energii głowicy** (niższe zużycie energii, dłuższa żywotność głowicy, niższe koszty eksploatacji)\n- Mocna **odporność na ścieranie**\n- **Odporność cieplna do 100°C (212°F)**\n- **Niższa odporność na rozpuszczalniki** — do agresywnych chemikaliów wybierz 3200 Wax/Resin lub żywicę 5095',
  },
  {
  heading: 'Druk na wszystkich podłożach',
  content:
   'Kluczowa zaleta 3300: **drukuje na wszystkich podłożach etykiet** — od chropowatych, niepowlekanych papierów, przez papiery powlekane, po materiały syntetyczne. To czyni ją uniwersalnym wyborem dla zakładów drukujących na wielu różnych mediach, gdzie nie chce się magazynować osobnej taśmy do każdego rodzaju etykiety.\n\nW połączeniu z **najwyższą prędkością (16 ips)** i **niską energią głowicy** 3300 sprawdza się w środowiskach o dużych wolumenach i zróżnicowanym asortymencie etykiet — jedna taśma do papieru i syntetyków.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 3300 Wax/Resin obsługuje szeroki zakres branż i zastosowań:\n\n**Branże:**\n\n- **Farmacja** — etykiety leków\n- **Spożywka i napoje** — etykiety informacyjne na żywności\n- **Handel detaliczny**\n- **Produkcja**\n\n**Przykładowe zastosowania:**\n\n- Etykiety produktowe **na zewnątrz** (outdoor product labels)\n- **Metki ogrodnicze** (horticultural tags)\n- **Materiały budowlane**\n- **Metki odzieżowe** (clothing tags)\n- Etykiety **wnętrz samochodowych** (automotive interior labels)',
  },
  {
  heading: 'Atesty i magazynowanie',
  content:
   '3300 Wax/Resin spełnia liczne normy międzynarodowe, co czyni ją bezpieczną i zgodną na rynku globalnym:\n\n- **UL 969** — norma dla systemów znakowania i etykietowania\n- **Kontakt z żywnością:** FDA (USA) oraz dyrektywa UE 1935/2004/WE\n- **REACH/SVHC** (1907/2006/WE), **RoHS** (2011/65/UE — metale ciężkie)\n- **California Proposition 65**\n- **Bez halogenów** (IEC 61249-2-21:2003)\n\n**Magazynowanie:** w temperaturze **5–35°C** i wilgotności **20–80% RH**. Stockowana pod drukarki **z zakresu essential, mid-range i wysokowydajne** Zebra oraz starsze instalacje. Inne szerokości i długości — na zamówienie.',
  },
  {
  heading: 'Kiedy wybrać 3300, a kiedy 3200, 3400 lub 5095?',
  content:
   'Wybierz **3300 Wax/Resin** gdy potrzebujesz **jednej, wszechstronnej taśmy** do druku na różnych podłożach (papier + syntetyki), z **najwyższą prędkością (16 ips)**, odpornością na ścieranie i cieplną oraz zgodnością UL 969. Przesiądź się gdy:\n\n- **Kontakt z rozpuszczalnikami i agresywnymi chemikaliami** → **3200 Premium Wax/Resin** (lepsza odporność chemiczna i rozpuszczalnikowa)\n- **Folia polietylenowa (PE) lub trudne warunki (ciepło, para, ścieranie, tarcie)** → **3400 Wax/Resin High-Performance**\n- **Folia poliestrowa Z-Ultimate, outdoor długoterminowy z UV, najwyższa odporność** → **5095 Resin** (czysta żywica)',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Wosk-żywica (Wax/Resin) — ogólnego przeznaczenia' },
  { label: 'Model', value: '3300 Wax/Resin' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Formuła atramentu', value: 'Wax/Resin (wosk-żywica)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '<9 μm (±10%)' },
  { label: 'Temperatura topnienia tuszu', value: '75°C (167°F)' },
  { label: 'Gęstość optyczna', value: '2,1 ODR' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '400 mm/s (16 ips) — niska energia głowicy' },
  { label: 'Kompatybilne podłoża', value: 'Wszystkie — od chropowatych papierów po materiały syntetyczne' },
  { label: 'Odporność na ścieranie', value: 'Mocna' },
  { label: 'Odporność cieplna', value: 'Do 100°C (212°F)' },
  { label: 'Odporność na rozpuszczalniki', value: 'Niższa — do chemii wybierz 3200 lub 5095' },
  { label: 'UL 969', value: 'Tak (norma systemów znakowania i etykietowania)' },
  { label: 'Kontakt z żywnością', value: 'FDA (USA), dyrektywa UE 1935/2004/WE' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS (metale ciężkie), California Prop 65, bez halogenów (IEC 61249-2-21)' },
  { label: 'Magazynowanie', value: '5–35°C, 20–80% RH' },
  { label: 'Drukarki', value: 'Essential, mid-range, wysokowydajne Zebra oraz legacy' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '4' },
  { label: 'Grupa cenowa', value: 'Wax/Resin ogólnego przeznaczenia' },
 ],
 applications: [
  'Farmacja — etykiety leków',
  'Spożywka i napoje — etykiety informacyjne na żywności',
  'Handel detaliczny i produkcja',
  'Etykiety produktowe na zewnątrz (outdoor)',
  'Metki ogrodnicze (horticultural tags)',
  'Materiały budowlane',
  'Metki odzieżowe (clothing tags)',
  'Etykiety wnętrz samochodowych (automotive interior)',
 ],
 notRecommendedFor: [
  'Kontakt z rozpuszczalnikami i agresywnymi chemikaliami — wybierz 3200 Wax/Resin lub 5095 Resin',
  'Folia polietylenowa (PE) — wybierz 3400 Wax/Resin',
  'Folia poliestrowa Z-Ultimate (PET) — wybierz 5095 Resin',
  'Outdoor długoterminowy z UV — wybierz 5095 lub 5100 Resin',
  'Aplikacje powyżej 100°C — przekracza odporność cieplną taśmy',
 ],
 compatiblePrinters: {
  desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
  mobile: [],
 },
 certifications: [
  { name: 'UL 969', description: 'Amerykańska norma UL 969 dla systemów znakowania i etykietowania — potwierdza trwałość i czytelność nadruku zgodnie z wymaganiami UL.' },
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE)', description: 'Atest kontaktu z żywnością: FDA (USA) oraz dyrektywa UE 1935/2004/WE — pozwala drukować etykiety informacyjne na opakowaniach produktów spożywczych.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC (1907/2006/WE), RoHS (2011/65/UE — metale ciężkie), California Proposition 65 oraz brak halogenów (IEC 61249-2-21:2003).' },
  { name: 'Skanowalność IR + visible', description: 'Nadruk o gęstości optycznej 2,1 ODR, czytelny w świetle podczerwonym i widzialnym — współpraca z czytnikami ręcznymi, stacjonarnymi i kamerami.' },
 ],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '**3300** to wszechstronna WR ogólnego przeznaczenia — drukuje na **wszystkich podłożach**, jest **najszybsza (16 ips)** i ma UL 969. **3200 Premium Wax/Resin** wybierz, gdy etykieta ma kontakt z **rozpuszczalnikami i agresywnymi chemikaliami** — 3200 ma wyższą odporność chemiczną i rozpuszczalnikową oraz UL Recognized.' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '**3300** do uniwersalnego druku na papierze i syntetykach. **3400 Wax/Resin High-Performance** gdy drukujesz na **polietylenie (PE)** lub w wymagających aplikacjach foliowych.' },
  { seriesSlug: '5095-resin', whenToChooseThis: '**3300** (wosk-żywica) do papieru i syntetyków bez ekstremalnych wymagań. **5095 Resin** (czysta żywica) do **folii poliestrowej Z-Ultimate**, outdoor długoterminowego z UV i najwyższej odporności chemicznej.' },
 ],
 faq: [
  { question: 'Czym 3300 różni się od 3200?', answer: '**3300** to wszechstronna wosk-żywica ogólnego przeznaczenia — drukuje na **wszystkich podłożach**, jest **najszybsza (do 400 mm/s, 16 ips)**, ma odporność cieplną 100°C i UL 969. **3200 Premium Wax/Resin** ma wyższą **odporność chemiczną i rozpuszczalnikową** oraz UL Recognized — wybierz ją, gdy etykieta ma kontakt z chemikaliami. 3300 ma niższą odporność na rozpuszczalniki.' },
  { question: 'Na jakich podłożach drukuje 3300?', answer: 'Na **wszystkich** — od chropowatych, niepowlekanych papierów, przez papiery powlekane, po materiały syntetyczne. To jej kluczowa zaleta: jedna taśma do różnych mediów, bez magazynowania osobnej taśmy do każdego typu etykiety.' },
  { question: 'Jaka jest maksymalna prędkość druku 3300?', answer: '**Do 400 mm/s (16 ips)** — najwyższa spośród taśm Zebra w tym zestawieniu. Dodatkowo pracuje przy **niskiej energii głowicy**, co obniża zużycie energii i wydłuża żywotność głowicy drukującej.' },
  { question: 'Czy 3300 ma certyfikat UL?', answer: 'Tak — spełnia **UL 969**, amerykańską normę dla systemów znakowania i etykietowania (trwałość i czytelność nadruku). Uwaga: to inny zakres niż UL Recognized Component w kombinacji etykieta+taśma — do aplikacji UL Recognized na elektronice wybierz 5095/5100 Resin na folii poliestrowej.' },
  { question: 'Czy 3300 jest odporna na chemikalia?', answer: 'Ma **niższą odporność na rozpuszczalniki**. Do kontaktu z rozpuszczalnikami i agresywnymi chemikaliami wybierz **3200 Premium Wax/Resin** (wyższa odporność chemiczna) lub żywicę **5095 Resin** / **8000 ChemResist**.' },
  { question: 'Jaka jest odporność cieplna 3300?', answer: 'Nadruk wytrzymuje temperaturę **do 100°C (212°F)**. Powyżej tej wartości wybierz taśmę żywiczną o wyższej odporności termicznej (5095/5100 Resin do +180°C).' },
  { question: 'Jakie ma atesty żywnościowe?', answer: 'Kontakt z żywnością wg **FDA (USA)** oraz **dyrektywy UE 1935/2004/WE** — można nią drukować etykiety informacyjne na opakowaniach produktów spożywczych. Dodatkowo bez halogenów, zgodna z REACH, RoHS i California Prop 65.' },
 ],
 recommendedForLabels: [
  { seriesSlug: 'z-select-2000t', seriesName: 'Z-Select 2000T', role: 'primary' },
  { seriesSlug: 'polypro-3000t-gloss', seriesName: 'PolyPro 3000T Gloss', role: 'alternative', when: 'Polipropylen błyszczący — gdy potrzebujesz uniwersalnej taśmy WR do syntetyków bez kontaktu z agresywnymi chemikaliami.' },
 ],
 },

 /* ──────────────── 7. 3400 WAX/RESIN — premium PE ──────────────── */
 {
 slug: '3400-wax-resin',
 productId: 'zebra-3400-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 3400',
 title: 'Zebra 3400 Wax/Resin',
 tagline: 'High-Performance wosk-żywica — trudne warunki: ciepło, para, rozpuszczalniki, ścieranie, tarcie. UL Recognised.',
 positioning: 'premium',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 203,
 chemicalResistance: 'średnia',
 uvResistance: 'krótkoterminowa',
 temperatureRange: 'Wysoka odporność na ciepło i parę; magazynowanie -5°C do 40°C, 20–85% RH',
 priceFrom: 334.11,
 accent: '#A855F7',
 heroImage: '/images/zebra-3400-wax-resin-hero.png',
 heroImagePosition: 'right center',
 heroImageCover: true,
 seoTitle: 'Zebra 3400 High-Performance Wax/Resin — trudne warunki, UL Recognised',
 seoDescription: 'Zebra 3400 High-Performance Wax/Resin — wytrzymała taśma woskowo-żywiczna do etykiet narażonych na ciepło, parę, rozpuszczalniki, ścieranie i tarcie. Outdoor w trudnych warunkach, huty stali, motoryzacja, tabliczki znamionowe. PET 4,5 μm / 10 μm, druk do 203 mm/s, UL Recognised. 11 wariantów od 334 zł.',
 h1: 'Taśma termotransferowa Zebra 3400 High-Performance Wax/Resin',
 heroIntro: 'Zebra 3400 High-Performance Wax/Resin to **wytrzymała taśma woskowo-żywiczna do trudnych warunków**. Oferuje doskonałą jakość druku na szerokiej gamie papierów niepowlekanych i powlekanych oraz **wielu matowych syntetykach**, z **dobrą odpornością na ścieranie i pewną odpornością na rozpuszczalniki**. Drukuje **gęste kody kreskowe i grafikę wysokiej rozdzielczości** z prędkością **do 203 mm/s (8 ips)** dla kodów standardowych i obróconych. Zaprojektowana do etykiet narażonych na **ciepło, parę, rozpuszczalniki, ścieranie i tarcie** — huty stali, motoryzacja, tabliczki znamionowe, aplikacje zewnętrzne w trudnych środowiskach. Posiada **UL Recognised** (w polskim portfolio z etykietą 8000T Void Matte). Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosk-żywicowa, łącznie 10 μm (±10%)** — najgrubsza w gamie WR.',
 keyHighlights: [
  'Do etykiet narażonych na **ciepło, parę, rozpuszczalniki, ścieranie i tarcie**',
  'Druk na papierach niepowlekanych/powlekanych **oraz wielu matowych syntetykach**',
  '**Dobra odporność na ścieranie** i **pewna odporność na rozpuszczalniki**',
  'Doskonałe **gęste kody kreskowe i grafika wysokiej rozdzielczości**',
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **10 μm (±10%)** — najgrubsza w gamie WR',
  'Druk **do 203 mm/s (8 ips)** dla kodów standardowych i obróconych',
  '**UL Recognised** — w polskim portfolio z etykietą 8000T Void Matte',
  'Atest **kontaktu z żywnością**: FDA 21 CFR 175.300, UE 1935/2004/WE, LFGB',
  'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A; REACH, RoHS, TSCA, Prop 65',
 ],
 sections: [
  {
  heading: 'Konstrukcja techniczna i wydajność',
  content:
   'Zebra 3400 to **wysokowydajna (High-Performance) formuła wosk-żywicowa** o zwiększonej wytrzymałości:\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm**\n- **Grubość całkowita: 10 μm (±10%)** — najgrubsza spośród taśm wosk-żywicowych Zebra (3200 = 8,6 μm), co przekłada się na wyższą wytrzymałość nadruku\n- Konstrukcja nawój zewnętrzny (Outside Coated)\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible)\n\n**Wydajność i odporność:**\n\n- **Do 203 mm/s (8 ips)** dla kodów standardowych i obróconych\n- **Dobra odporność na ścieranie** oraz **pewna odporność na rozpuszczalniki**\n- Doskonała jakość **gęstych kodów kreskowych i grafiki wysokiej rozdzielczości**\n- Typowa jakość skanowania: **ANSI Grade A** na papierze powlekanym (10 mil do 203 mm/s); Grade B na matowych syntetykach i kodach obróconych\n- Drukuje na szerokiej gamie **papierów niepowlekanych i powlekanych** oraz **wielu matowych syntetykach**',
  },
  {
  heading: 'Główne zastosowania — trudne i przemysłowe środowiska',
  content:
   'Zebra 3400 to taśma do etykiet pracujących w **wymagających warunkach**, gdzie zwykła wosk-żywica (3200) nie wystarcza:\n\n- **Etykiety narażone na ciepło, parę, rozpuszczalniki, ścieranie i tarcie**\n- **Aplikacje zewnętrzne w trudnych środowiskach** (outdoor labelling in harsh environments)\n- **Tagi w hutach stali** (steel mill tags)\n- **Etykiety motoryzacyjne** (automotive labels)\n- **Tabliczki znamionowe przemysłowe** (industrial rating plates)\n\nWyższa wytrzymałość (gruba, 10 μm konstrukcja) i UL Recognised czynią z niej naturalny wybór tam, gdzie etykieta musi przetrwać kontakt fizyczny, wysoką temperaturę, parę i okazjonalny kontakt z rozpuszczalnikami.',
  },
  {
  heading: 'UL Recognised — dopuszczone materiały',
  content:
   'Zebra 3400 posiada **certyfikat UL Recognised** w kombinacji z wybranymi etykietami (kombinacja taśma + etykieta jest dopuszczona razem). W polskim portfolio TAKMA dostępną kombinacją UL jest **8000T Void Matte** — matowa etykieta z funkcją zabezpieczającą (po odklejeniu zostaje napis VOID), typowa dla tabliczek znamionowych i oznaczeń sprzętu.',
  },
  {
  heading: 'Atesty, czysty skład i magazynowanie',
  content:
   'Komplet atestów regulacyjnych, w tym **pośredni kontakt z żywnością**:\n\n- **FDA 21 CFR 175.300**, **dyrektywa UE 1935/2004/WE**, **LFGB**\n- **REACH/SVHC**, **RoHS**, **Dodd-Frank** (konflikt minerałów), **TSCA**, **California Proposition 65**\n- **Bez halogenów**, **bez lateksu**, **bez pochodzenia zwierzęcego** (vegan), **bez bisfenolu A** (BPA free)\n\n**Magazynowanie:** trwałość **1 rok** od daty produkcji w temperaturze **-5°C do 40°C** i wilgotności **20–85% RH**.\n\n**Drukarki:** stockowana pod drukarki **mid-range i wysokowydajne** Zebra oraz **napędy drukujące** i starsze instalacje. Numer próbki do testów: **03400BK11005** (110 mm). Inne szerokości i długości — na zamówienie.',
  },
  {
  heading: 'Kiedy wybrać 3400, a kiedy 3200, 3300 lub 5095?',
  content:
   'Wybierz **3400 High-Performance Wax/Resin** gdy etykieta pracuje w **trudnych warunkach** — ciepło, para, ścieranie, tarcie — lub potrzebujesz UL Recognised do **tabliczek znamionowych, oznaczeń w hutach i motoryzacji**. Przesiądź się gdy:\n\n- **Najwyższa odporność chemiczna i rozpuszczalnikowa** → **3200 Premium Wax/Resin**\n- **Uniwersalny, szybki druk (16 ips) na wszystkich podłożach** bez ekstremalnych warunków → **3300 Wax/Resin**\n- **Folia poliestrowa Z-Ultimate, outdoor długoterminowy z UV, agresywne chemikalia** → **5095 Resin** (czysta żywica)\n- **Najagresywniejsze rozpuszczalniki (aceton, MEK, ksylen)** → **8000 ChemResist**',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Wosk-żywica (Wax/Resin) — klasa High-Performance' },
  { label: 'Model', value: '3400 High-Performance Wax/Resin' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Formuła atramentu', value: 'Wax/Resin (wosk-żywica)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '10 μm (±10%) — najgrubsza w gamie WR' },
  { label: 'Konstrukcja', value: 'Nawój zewnętrzny (Outside Coated)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Maks. prędkość druku', value: '203 mm/s (8 ips) — kody standardowe i obrócone' },
  { label: 'Kompatybilne podłoża', value: 'Papier niepowlekany i powlekany oraz wiele matowych syntetyków' },
  { label: 'Odporność na ścieranie i tarcie', value: 'Dobra' },
  { label: 'Odporność na rozpuszczalniki', value: 'Pewna (some solvent resistance)' },
  { label: 'Odporność cieplna', value: 'Wysoka — ciepło i para' },
  { label: 'UL Recognised', value: 'W polskim portfolio z etykietą 8000T Void Matte' },
  { label: 'Kontakt z żywnością', value: 'FDA 21 CFR 175.300, UE 1935/2004/WE, LFGB (kontakt pośredni)' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS, Dodd-Frank, TSCA, California Prop 65' },
  { label: 'Czysty skład', value: 'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan), BPA free' },
  { label: 'Magazynowanie', value: '-5°C do 40°C, 20–85% RH; trwałość 1 rok' },
  { label: 'Numer próbki', value: '03400BK11005 (110 mm)' },
  { label: 'Drukarki', value: 'Mid-range, wysokowydajne, napędy drukujące, legacy' },
  { label: 'Rdzeń (gilza)', value: '25 mm (1")' },
  { label: 'Producent', value: 'Zebra Technologies' },
  { label: 'Liczba wariantów', value: '11' },
  { label: 'Grupa cenowa', value: 'High-Performance Wax/Resin' },
 ],
 applications: [
  'Etykiety narażone na ciepło, parę, rozpuszczalniki, ścieranie i tarcie',
  'Aplikacje zewnętrzne w trudnych środowiskach (outdoor harsh)',
  'Tagi w hutach stali (steel mill tags)',
  'Etykiety motoryzacyjne (automotive labels)',
  'Tabliczki znamionowe przemysłowe (industrial rating plates)',
  'Gęste kody kreskowe i grafika wysokiej rozdzielczości na syntetykach matowych',
 ],
 notRecommendedFor: [
  'Folia poliestrowa Z-Ultimate (PET) — wybierz 5095 Resin',
  'Najwyższa odporność chemiczna/rozpuszczalnikowa — wybierz 3200 Wax/Resin',
  'Uniwersalny szybki druk (16 ips) na wszystkich podłożach — wybierz 3300 Wax/Resin',
  'Outdoor długoterminowy z UV (lata) — wybierz 5095 lub 5100 Resin',
  'Najagresywniejsze rozpuszczalniki (aceton, MEK, ksylen) — wybierz 8000 ChemResist',
 ],
 compatiblePrinters: {
  desktop: [],
  midRange: ['ZD611t', 'ZT231'],
  industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620', 'ZE511', 'ZE521'],
  mobile: [],
 },
 certifications: [
  { name: 'UL Recognised', description: 'Certyfikat UL Recognised w kombinacji z wybranymi etykietami. W polskim portfolio TAKMA dostępną kombinacją UL jest 8000T Void Matte (kombinacja taśmy i etykiety jest dopuszczona razem).' },
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE, LFGB)', description: 'Atest pośredniego kontaktu z żywnością: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC, RoHS, Dodd-Frank (konflikt minerałów), TSCA (1976) oraz California Proposition 65.' },
  { name: 'Czysty skład', description: 'Bez halogenów, bez lateksu, bez składników pochodzenia zwierzęcego (vegan) i bez bisfenolu A (BPA free).' },
 ],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '**3400** to wytrzymała WR do **trudnych warunków fizycznych** — ciepła, pary, ścierania, tarcia (huty, motoryzacja, tabliczki znamionowe). **3200 Premium Wax/Resin** wybierz, gdy kluczowa jest **najwyższa odporność chemiczna i rozpuszczalnikowa**.' },
  { seriesSlug: '3300-wax-resin', whenToChooseThis: '**3400** do trudnych, przemysłowych warunków z UL Recognised. **3300 Wax/Resin** gdy potrzebujesz **uniwersalnej, szybkiej (16 ips) taśmy na wszystkie podłoża** bez ekstremalnych obciążeń.' },
  { seriesSlug: '5095-resin', whenToChooseThis: '**3400** (wosk-żywica) do papieru i matowych syntetyków w trudnych warunkach. **5095 Resin** (czysta żywica) do **folii poliestrowej Z-Ultimate**, outdoor długoterminowego z UV i najwyższej odporności chemicznej.' },
 ],
 faq: [
  { question: 'Czym 3400 różni się od 3200?', answer: '**3400 High-Performance** to wytrzymała WR do **trudnych warunków fizycznych** — ciepła, pary, ścierania i tarcia; ma najgrubszą konstrukcję (10 μm) i UL Recognised z etykietami high-tack. **3200 Premium** ma wyższą **odporność chemiczną i rozpuszczalnikową**. 3400 wybierz do hut, motoryzacji i tabliczek znamionowych; 3200 — gdy kluczowy jest kontakt z chemikaliami.' },
  { question: 'Na jakich podłożach drukuje 3400?', answer: 'Na szerokiej gamie **papierów niepowlekanych i powlekanych** oraz **wielu matowych materiałach syntetycznych**. Daje doskonałe gęste kody kreskowe i grafikę wysokiej rozdzielczości. Do folii poliestrowej Z-Ultimate wybierz żywicę 5095.' },
  { question: 'Jakie są główne zastosowania 3400?', answer: 'Etykiety narażone na **ciepło, parę, rozpuszczalniki, ścieranie i tarcie**, aplikacje zewnętrzne w trudnych środowiskach, **tagi w hutach stali**, **etykiety motoryzacyjne** oraz **tabliczki znamionowe przemysłowe**.' },
  { question: 'Z jakimi etykietami 3400 ma UL Recognised?', answer: 'W polskim portfolio TAKMA dostępną kombinacją UL Recognised jest **8000T Void Matte** — matowa etykieta z funkcją zabezpieczającą VOID (kombinacja taśma + etykieta jest dopuszczona razem).' },
  { question: 'Jaka jest odporność chemiczna 3400?', answer: 'Ma **pewną** odporność na rozpuszczalniki (some solvent resistance) oraz **dobrą** odporność na ścieranie. Do najwyższej odporności chemicznej wybierz 3200, a do najagresywniejszych rozpuszczalników (aceton, MEK, ksylen) — 8000 ChemResist.' },
  { question: 'Jaka jest prędkość i konstrukcja 3400?', answer: 'Druk **do 203 mm/s (8 ips)** dla kodów standardowych i obróconych. Konstrukcja: poliester (PET) 4,5 μm + warstwa wosk-żywicowa, **łącznie 10 μm (±10%)** — najgrubsza w gamie WR, co daje wyższą wytrzymałość nadruku.' },
 ],
 recommendedForLabels: [
  { seriesSlug: '8000t-void-matte', seriesName: '8000T Void Matte', role: 'primary' },
  { seriesSlug: 'polypro-4000t-matte', seriesName: 'PolyPro 4000T Matte', role: 'alternative', when: 'Matowy polipropylen do trudniejszych aplikacji syntetycznych, gdy nie potrzebujesz funkcji zabezpieczającej VOID.' },
 ],
 },

 /* ──────────────── 8. 5555 WAX/RESIN — niche ──────────────── */
 {
 slug: '5555-wax-resin',
 productId: 'zebra-5555-wax-resin',
 category: 'woskowo-zywiczne',
 badge: 'Zebra 5555',
 title: 'Zebra 5555 Wax/Resin',
 tagline: 'Wosk-żywica w kartridżu do mobilnej drukarki Zebra P4T — odporna na wilgoć, ciepło i chemikalia.',
 positioning: 'specjalistyczna',
 outsideCoated: true,
 ulCertified: true,
 printSpeedMax: 76,
 chemicalResistance: 'średnia',
 uvResistance: 'brak',
 temperatureRange: 'Odporność na wilgoć, wysoką temperaturę i chemikalia; magazynowanie -5°C do 40°C, 20–85% RH',
 priceFrom: 1317.41,
 accent: '#A855F7',
 seoTitle: 'Zebra 5555 Wax/Resin Cartridge — taśma do mobilnej drukarki P4T',
 seoDescription: 'Zebra 5555 Wax/Resin Cartridge — taśma woskowo-żywiczna w kartridżu do mobilnej drukarki Zebra P4T. Druk na topcoated papierach i syntetykach, odporna na wilgoć, ciepło i chemikalia (woda, para, kwasy, zasady). UL Recognised, atest żywnościowy. PET 4,5 μm / 8,4 μm.',
 h1: 'Taśma termotransferowa Zebra 5555 Wax/Resin (kartridż P4T)',
 heroIntro: 'Zebra 5555 Wax/Resin to **taśma woskowo-żywiczna w kartridżu, zaprojektowana specjalnie do mobilnej drukarki Zebra P4T**. Drukuje na **papierach topcoated i materiałach syntetycznych**, dając dobrą jakość i trwałość nadruku kodów kreskowych, tekstu i grafiki. Wyróżnia się **dobrą odpornością na rozmazanie i zarysowania** oraz odpornością na **nadmierną wilgoć, wysoką temperaturę i kontakt z chemikaliami** (woda, para, roztwory kwasów i zasad). Posiada **UL Recognised**. Konstrukcja: **poliestrowa powłoka bazowa 4,5 μm + warstwa wosk-żywicowa, łącznie 8,4 μm (±10%)**.',
 keyHighlights: [
  'Kartridż zaprojektowany **specjalnie do mobilnej drukarki Zebra P4T**',
  'Druk na **papierach topcoated i materiałach syntetycznych**',
  'Dobra jakość i trwałość nadruku — kody kreskowe, tekst, grafika',
  '**Dobra odporność na rozmazanie i zarysowania**',
  'Odporna na **wilgoć, wysoką temperaturę i chemikalia** (woda, para, kwasy, zasady)',
  'Powłoka bazowa — poliester (PET) **4,5 μm**, grubość całkowita **8,4 μm (±10%)**',
  '**UL Recognised** — w polskim portfolio z etykietą 8000T Void Matte',
  'Atest **kontaktu z żywnością** (FDA, UE 1935/2004/WE, LFGB); bez halogenów, lateksu, BPA',
  'Numer katalogowy: **05555BK110D** (kartridż 110 × 30 m)',
 ],
 sections: [
  {
  heading: 'Konstrukcja i przeznaczenie — kartridż do drukarki P4T',
  content:
   'Zebra 5555 Wax/Resin to **kartridż taśmy barwiącej zaprojektowany specjalnie do mobilnej drukarki Zebra P4T** — przenośnej drukarki termotransferowej. W odróżnieniu od pozostałych taśm Zebra (sprzedawanych jako rolki na rdzeniu) 5555 ma postać **kartridża** dopasowanego mechanicznie do P4T.\n\n- **Powłoka bazowa: poliester (PET) 4,5 μm**, grubość całkowita **8,4 μm (±10%)**\n- **Formuła wosk-żywicowa (czarna)**\n- Skanowalność w świetle podczerwonym i widzialnym (IR + visible)\n- **Dobra odporność na rozmazanie i zarysowania**\n- **Odporna na nadmierną wilgoć, wysoką temperaturę i kontakt z chemikaliami**\n\nDrukuje na **papierach topcoated i materiałach syntetycznych**, dając dobrą jakość i trwałość nadruku kodów kreskowych, tekstu i grafiki — z myślą o mobilnym etykietowaniu w terenie i w magazynie.',
  },
  {
  heading: 'Główne zastosowania',
  content:
   'Zebra 5555 sprawdza się w mobilnym etykietowaniu wymagającym trwałości nadruku:\n\n- **Etykiety wysyłkowe i opakowaniowe** (shipping and packaging)\n- **Etykiety produktowe** (product labelling)\n- **Etykiety wielokrotnie skanowane czytnikiem wand** (repetitively wand scanned) — nadruk odporny na ścieranie głowicą czytnika\n- **Etykiety narażone na ścieranie lub tarcie** (abrasion or friction)\n- **Etykiety półkowe i paletowe** (shelf and scan-pallet labels)\n- **Etykiety narażone na wodę, parę, roztwory zasad lub kwasów**',
  },
  {
  heading: 'UL Recognised',
  content:
   'Zebra 5555 posiada **certyfikat UL Recognised** w kombinacji z wybranymi etykietami (kombinacja taśma + etykieta jest dopuszczona razem). W polskim portfolio TAKMA dostępną kombinacją UL jest **8000T Void Matte** — matowa etykieta z funkcją zabezpieczającą (po odklejeniu zostaje napis VOID).\n\nDzięki temu 5555 + 8000T Void Matte to gotowe rozwiązanie do trwałych, zabezpieczonych etykiet drukowanych mobilnie na drukarce P4T.',
  },
  {
  heading: 'Atesty, czysty skład i magazynowanie',
  content:
   'Komplet atestów regulacyjnych, w tym **pośredni kontakt z żywnością**:\n\n- **FDA 21 CFR 175.300**, **dyrektywa UE 1935/2004/WE**, **LFGB**\n- **REACH/SVHC**, **RoHS**, **Dodd-Frank** (konflikt minerałów), **TSCA**, **California Proposition 65**\n- **Bez halogenów**, **bez lateksu**, **bez pochodzenia zwierzęcego** (vegan), **bez bisfenolu A** (BPA free)\n\n**Magazynowanie:** trwałość **1 rok** od daty produkcji w temperaturze **-5°C do 40°C** i wilgotności **20–85% RH**.\n\n**Drukarka:** wyłącznie **Zebra P4T** (mobilna). Numer katalogowy: **05555BK110D** (kartridż 110 × 30 m). Jeśli masz drukarkę P4T i potrzebujesz materiału eksploatacyjnego — skontaktuj się z TAKMA.',
  },
 ],
 techSpecs: [
  { label: 'Typ taśmy', value: 'Wosk-żywica (Wax/Resin) — kartridż' },
  { label: 'Model', value: '5555 Wax/Resin Cartridge' },
  { label: 'Kolor tuszu', value: 'Czarny' },
  { label: 'Przeznaczenie', value: 'Mobilna drukarka Zebra P4T' },
  { label: 'Format', value: 'Kartridż (nie rolka na rdzeniu)' },
  { label: 'Powłoka bazowa', value: 'Poliester (PET), grubość 4,5 μm' },
  { label: 'Grubość całkowita', value: '8,4 μm (±10%)' },
  { label: 'Funkcje skanowania', value: 'Światło podczerwone (IR) i widzialne' },
  { label: 'Kompatybilne podłoża', value: 'Papiery topcoated i materiały syntetyczne' },
  { label: 'Odporność na rozmazywanie i zarysowania', value: 'Dobra' },
  { label: 'Odporność', value: 'Wilgoć, wysoka temperatura, chemikalia (woda, para, kwasy, zasady)' },
  { label: 'UL Recognised', value: 'W polskim portfolio z etykietą 8000T Void Matte' },
  { label: 'Kontakt z żywnością', value: 'FDA 21 CFR 175.300, UE 1935/2004/WE, LFGB (kontakt pośredni)' },
  { label: 'Zgodność regulacyjna', value: 'REACH/SVHC, RoHS, Dodd-Frank, TSCA, California Prop 65' },
  { label: 'Czysty skład', value: 'Bez halogenów, lateksu, pochodzenia zwierzęcego (vegan), BPA free' },
  { label: 'Magazynowanie', value: '-5°C do 40°C, 20–85% RH; trwałość 1 rok' },
  { label: 'Numer katalogowy', value: '05555BK110D (kartridż 110 × 30 m)' },
  { label: 'Producent', value: 'Zebra Technologies' },
 ],
 applications: [
  'Etykiety wysyłkowe i opakowaniowe (mobilne, w terenie)',
  'Etykiety produktowe',
  'Etykiety wielokrotnie skanowane czytnikiem wand',
  'Etykiety narażone na ścieranie lub tarcie',
  'Etykiety półkowe i paletowe (shelf / scan-pallet)',
  'Etykiety narażone na wodę, parę, roztwory kwasów lub zasad',
 ],
 notRecommendedFor: [
  'Drukarki inne niż mobilna Zebra P4T — to kartridż dedykowany P4T',
  'Stacjonarny druk dużych wolumenów na rolkach — wybierz 3200/3300 Wax/Resin',
  'Folia poliestrowa Z-Ultimate (PET) — wybierz 5095 Resin',
  'Najagresywniejsze rozpuszczalniki (aceton, MEK, ksylen) — wybierz 8000 ChemResist',
 ],
 compatiblePrinters: {
  desktop: [],
  midRange: [],
  industrial: [],
  mobile: ['P4T'],
 },
 certifications: [
  { name: 'UL Recognised', description: 'Certyfikat UL Recognised w kombinacji z wybranymi etykietami. W polskim portfolio TAKMA dostępną kombinacją UL jest 8000T Void Matte (kombinacja taśmy i etykiety jest dopuszczona razem).' },
  { name: 'Kontakt z żywnością (FDA, UE 1935/2004/WE, LFGB)', description: 'Atest pośredniego kontaktu z żywnością: FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB.' },
  { name: 'Zgodność regulacyjna', description: 'REACH/SVHC, RoHS, Dodd-Frank (konflikt minerałów), TSCA (1976) oraz California Proposition 65.' },
  { name: 'Czysty skład', description: 'Bez halogenów, bez lateksu, bez składników pochodzenia zwierzęcego (vegan) i bez bisfenolu A (BPA free).' },
 ],
 comparedWith: [
  { seriesSlug: '3200-wax-resin', whenToChooseThis: '**5555** wybierz wyłącznie gdy masz **mobilną drukarkę Zebra P4T** — to kartridż dedykowany temu urządzeniu. Do stacjonarnego druku wosk-żywica na rolkach (drukarki ZD/ZT) wybierz **3200 Premium Wax/Resin** (bestseller, pełna gama).' },
  { seriesSlug: '3400-wax-resin', whenToChooseThis: '**5555** to kartridż do mobilnej P4T. **3400 Wax/Resin High-Performance** to taśma na rolce do stacjonarnych drukarek przemysłowych — trudne warunki (ciepło, para, ścieranie, tarcie).' },
 ],
 faq: [
  { question: 'Do jakiej drukarki jest taśma 5555?', answer: 'Wyłącznie do **mobilnej drukarki Zebra P4T**. 5555 to kartridż taśmy zaprojektowany specjalnie pod to przenośne urządzenie — nie pasuje do drukarek na rolki (ZD, ZT). Numer katalogowy: 05555BK110D (kartridż 110 × 30 m).' },
  { question: 'Czym 5555 różni się od pozostałych taśm wosk-żywicznych?', answer: 'Formatem i przeznaczeniem: pozostałe WR (3200, 3300, 3400) to rolki na rdzeniu do drukarek stacjonarnych, a 5555 to **kartridż do mobilnej drukarki P4T**. Konstrukcja wosk-żywiczna jest podobna (PET 4,5 μm, łącznie 8,4 μm), z dobrą odpornością na rozmazanie, zarysowania, wilgoć, ciepło i chemikalia.' },
  { question: 'Na jakich podłożach drukuje 5555?', answer: 'Na **papierach topcoated i materiałach syntetycznych**. Daje dobrą jakość i trwałość nadruku kodów kreskowych, tekstu i grafiki — z odpornością na ścieranie (np. przy wielokrotnym skanowaniu czytnikiem wand) oraz na wodę, parę, kwasy i zasady.' },
  { question: 'Z jakimi etykietami 5555 ma UL Recognised?', answer: 'W polskim portfolio TAKMA dostępną kombinacją UL Recognised jest **8000T Void Matte** — matowa etykieta z funkcją zabezpieczającą VOID (kombinacja taśma + etykieta jest dopuszczona razem).' },
  { question: 'Czy 5555 ma atest kontaktu z żywnością?', answer: 'Tak — FDA 21 CFR 175.300, dyrektywa UE 1935/2004/WE oraz LFGB (kontakt pośredni). Dodatkowo bez halogenów, lateksu, pochodzenia zwierzęcego (vegan) i bisfenolu A.' },
 ],
 recommendedForLabels: [
  { seriesSlug: '8000t-void-matte', seriesName: '8000T Void Matte', role: 'primary' },
 ],
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
 heroMaskLeft: true,
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
