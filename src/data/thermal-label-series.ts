/**
 * Dane 12 serii etykiet termicznych Zebra.
 *
 * Używane na:
 *  - /etykiety-termiczne (kafelki serii, tabela porównawcza)
 *  - /etykiety-termiczne/serie/[slug] (pełny landing serii)
 *
 * Każda seria mapuje się 1:1 na produkt w data/products.ts (productId — strona "Kup").
 * Strona /serie/[slug] = SEO landing z porównaniami, atestami, FAQ, kompatybilnością.
 */

export type ThermalLabelMaterial =
  | 'papier-powlekany'
  | 'papier-niepowlekany'
  | 'polipropylen-syntetyczny'
  | 'papier-linerless'
  | 'papier-specjalny'

export type ThermalLabelGlue = 'permanentny' | 'zdejmowalny' | 'brak'

export type ThermalLabelPositioning =
  | 'premium'
  | 'ekonomiczna'
  | 'wodoodporna'
  | 'linerless'
  | 'zdejmowalna'
  | 'specjalna'
  | 'budżetowa'

export interface SeriesCertification {
  name: string
  description: string
}

export interface SeriesComparison {
  /** slug serii do której porównujemy */
  seriesSlug: string
  /** kiedy wybrać OPISYWANĄ serię zamiast tamtej */
  whenToChooseThis: string
}

export interface SeriesFaq {
  question: string
  answer: string
}

export interface SeriesSection {
  heading: string
  /** Akapity rozdzielone pustą linią (\n\n). Markdown-light. */
  content: string
}

export interface SeriesTechSpec {
  label: string
  value: string
}

export interface SeriesCompatiblePrinters {
  /** Drukarki biurkowe (desktop) */
  desktop: string[]
  /** Mid-range industrial */
  midRange: string[]
  /** Industrial pełnoetatowe */
  industrial: string[]
  /** Mobilne */
  mobile: string[]
}

export interface ThermalLabelSeries {
  // ── IDENTITY ─────────────────────────────────────────────────────
  /** slug do URL /etykiety-termiczne/serie/[slug] */
  slug: string
  /** id produktu w data/products.ts (link do strony kupna) */
  productId: string
  /** Krótkie ID serii — eyebrow na banerze */
  badge: string
  /** Pełna nazwa do H2 banera */
  title: string
  /** Jedno zdanie sprzedażowe (max ~110 chars) */
  tagline: string
  /** Kategoria pozycjonująca */
  positioning: ThermalLabelPositioning

  // ── ATRYBUTY DO FILTRÓW / TABELI ────────────────────────────────
  material: ThermalLabelMaterial
  glue: ThermalLabelGlue
  topcoat: boolean
  linerless: boolean
  perforation: boolean
  foodSafe: boolean
  outdoor: boolean
  priceFrom: number
  /** Hex kolor akcentu kafelka */
  accent: string

  // ── SEO ──────────────────────────────────────────────────────────
  seoTitle: string
  seoDescription: string
  /** H1 na landingu (może różnić się od `title`) */
  h1: string

  // ── HERO LANDINGU ────────────────────────────────────────────────
  /** 2-3 zdania pod H1 */
  heroIntro: string
  /** 3-6 key highlights (lista kropkowa) */
  keyHighlights: string[]

  // ── SEKCJE OPISOWE (długi content) ───────────────────────────────
  sections: SeriesSection[]

  // ── SPECYFIKACJA TECHNICZNA (tabela) ─────────────────────────────
  techSpecs: SeriesTechSpec[]

  // ── ZASTOSOWANIA / NIE UŻYWAĆ ────────────────────────────────────
  applications: string[]
  notRecommendedFor: string[]

  // ── KOMPATYBILNE DRUKARKI ────────────────────────────────────────
  compatiblePrinters: SeriesCompatiblePrinters

  // ── ATESTY ───────────────────────────────────────────────────────
  certifications: SeriesCertification[]

  // ── PORÓWNANIE ───────────────────────────────────────────────────
  /** Top 2-3 alternatywne serie do porównania */
  comparedWith: SeriesComparison[]

  // ── FAQ (AEO/GEO) ────────────────────────────────────────────────
  faq: SeriesFaq[]
}

/* ═════════════════════════════════════════════════════════════════
 *  DANE 12 SERII
 * ═════════════════════════════════════════════════════════════════ */

export const thermalLabelSeries: ThermalLabelSeries[] = [
  /* ────────────────────────────────────────────────────────────────
   *  1. Z-SELECT 2000D — premium powlekany
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-select-2000d',
    productId: 'zebra-z-select-2000d',
    badge: 'Z-Select 2000D',
    title: 'Z-Select 2000D',
    tagline: 'All-temp premium z klejem gumowym — aplikacja do −40 °C, atesty BfR XIV, FDA, EC 1935/2004.',
    positioning: 'premium',
    material: 'papier-powlekany',
    glue: 'permanentny',
    topcoat: true,
    linerless: false,
    perforation: false,
    foodSafe: true,
    outdoor: false,
    priceFrom: 510.62,
    accent: '#0F766E',
    seoTitle: 'Z-Select 2000D — premium etykieta termiczna Zebra | klej gumowy all-temp',
    seoDescription: 'Zebra Z-Select 2000D — premium powlekana etykieta DT z klejem gumowym all-temperature (-40°C do +50°C). Atesty BfR XIV, FDA 175.105, EU 10/2011. 37 wariantów od 510 zł.',
    h1: 'Etykiety termiczne Zebra Z-Select 2000D',
    heroIntro: 'Z-Select 2000D to flagowa, powlekana etykieta termiczna Zebra do druku bezpośredniego (DT) z **klejem gumowym all-temperature** — pracuje w temperaturach od **−40 °C do +50 °C**, idealna do chłodni, mroźni i etykiet logistycznych w niskich temperaturach. Top-coat zapewnia ostry nadruk kodów kreskowych i odporność na wilgoć, oleje i czynniki środowiskowe. Atesty żywnościowe (BfR XIV, FDA 175.105, EC 1935/2004, EU 10/2011) czynią ją standardem dla retailu, healthcare i farmacji.',
    keyHighlights: [
      'Papier powlekany top-coat — ostry nadruk kodów, ochrona przed wilgocią/olejami',
      'Klej GUMOWY (rubber) permanentny all-temperature — bez BPA, bez lateksu',
      'Zakres temperatur pracy: −40 °C do +50 °C (po dwell time ~24 h)',
      'Min. temperatura aplikacji: 0 °C — idealna do chłodni',
      'Atesty żywnościowe: BfR XIV, FDA 175.105, EC 1935/2004, EU 10/2011',
      'Trwałość nadruku: do 1 roku indoor',
      '37 wariantów rozmiarowych w gilzach 19/25/35/76 mm',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Select 2000D?',
        content:
          'Z-Select 2000D to oryginalna, premium seria mediów termicznych Zebra do druku direct thermal (DT) zaprojektowana z myślą o **niezawodności i druku wysokiej jakości**. Składa się z trzech warstw: matowy biały papier powlekany top-coat (facestock 81 µm) + permanentny **klej gumowy all-temperature** (13 µm) + liner glassine 62 g/m² (51 µm). Łączna grubość 145 µm ±10%, materiał RM 05311RM.\n\nPowłoka ochronna top-coat na wierzchu papieru to kluczowa różnica vs Z-Perform 1000D — zapewnia ultra-gładki nadruk, chroni głowicę drukującą, daje wyższą rozdzielczość kodów kreskowych i odporność na wilgoć, oleje i inne czynniki środowiskowe. **Klej gumowy** (rubber, NIE akrylowy) jest "low-temperature" — etykieta przyczepi się i będzie trzymać w niskich temperaturach, idealna do chłodni i mroźni.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Select 2000D jest standardem w **chłodni, mroźniach, healthcare i logistyce niskotemperaturowej** dzięki klejowi gumowemu all-temperature. Wytrzymuje pracę od −40 °C do +50 °C. Typowe zastosowania:\n\n- **Logistyka** — oznaczenia opakowań (kartony, palety) w chłodni\n- **Magazyny** — etykiety wysyłkowe, picking, receiving\n- **Retail** — etykiety półkowe, produktowe, cenowe (drobny font + 2D)\n- **Healthcare** — etykiety na opakowaniach sterylizowanych\n- **Produkcja** — etykiety prac w toku (WIP)\n- **Inne** — identyfikacja produktów, oznaczenia partii (lot/batch)\n\nDla typowych wysyłek paczkowych w temperaturach pokojowych zwykle wystarcza tańszy Z-Perform 1000D — Z-Select 2000D ma sens tam, gdzie kontakt z żywnością, chłodnia, lub jakość skanu kodu są kluczowe.',
      },
      {
        heading: 'Atesty żywnościowe i bezpieczeństwo materiału',
        content:
          'Klej Z-Select 2000D ma oficjalne atesty żywnościowe Zebra dla kontaktu z żywnością suchą i wilgotną nieoleistą: **BfR XIV** (Niemcy — Federalna rekomendacja, wymóg sieci EU typu Aldi, Lidl, Rewe), **FDA 175.105** (USA — bezpośredni kontakt z suchą żywnością, lub poprzez funkcjonalną barierę), **EC 1935/2004** + **EU 10/2011** (unijne rozporządzenia ramowe dla materiałów kontaktujących się z żywnością).\n\nMateriał jest **BPA-free i bez lateksu**. To kluczowy argument dla piekarni, masarni, mleczarni, gastronomii, producentów spożywczych i sklepów typu fresh — wymagających dokumentacji compliance do audytów HACCP.',
      },
      {
        heading: 'Konstrukcja i parametry techniczne',
        content:
          'Trójwarstwowa konstrukcja:\n\n- **Facestock**: matowy biały papier powlekany termoczuły, **81 µm**\n- **Klej**: permanentny gumowy (rubber adhesive), **13 µm**\n- **Liner**: glassine 62 g/m², **51 µm**\n- **Łączna grubość**: 145 µm ±10%\n\nMinimalna temperatura aplikacji: **0 °C** (temperatura otoczenia i powierzchni musi być powyżej tej wartości w momencie naklejenia). Po prawidłowej aplikacji i dwell time ~24 h etykieta wytrzymuje pracę w zakresie **−40 °C do +50 °C**. Przewidywany okres eksploatacji indoor: **do 1 roku**.',
      },
      {
        heading: 'Odporność chemiczna',
        content:
          'Z-Select 2000D ma ograniczoną odporność chemiczną — była testowana przez Zebrę dla różnych substancji:\n\n- **Słabe chemikalia** (woda, woda słona, krew, płyny ustrojowe, środki do czyszczenia szyb): "Test in your application" — testuj w swoich warunkach\n- **Średnio agresywne** (alkohol, amoniak, wybielacz, IPA): **NIE rekomendowane**\n- **Agresywne** (benzyna, smar, olej): **NIE rekomendowane**\n- **Ekstremalne** (aceton, IR reflow, MEK, TCE, ksylen): **NIE rekomendowane**\n\nJeśli aplikacja wymaga kontaktu z chemikaliami, wybierz PolyPro 4000D (syntetyk wodoodporny) lub etykiety z poliestru/Kapton (termotransfer resin).',
      },
      {
        heading: 'Kompatybilność z drukarkami Zebra',
        content:
          'Z-Select 2000D jest media-tested dla pełnej gamy drukarek termicznych Zebra: **mobilne** (ZQ511, ZQ521, ZQ610, ZQ620, ZQ630, QLn220, QLn320), **desktopowe** (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d), **mid-range** (ZD611, ZT231) oraz **industrial / high-performance** (ZT411, ZT421, ZT510, ZT610, ZT620).\n\nDostępna w gilzach 19 mm (3/4″), 25 mm/25,4 mm (1″) oraz 76 mm (3″). Druk DT — bez taśmy barwiącej (ribbon N/A).',
      },
      {
        heading: 'Kiedy NIE używać Z-Select 2000D',
        content:
          'Trzy sytuacje, w których lepiej wybrać inną serię: (1) **Temperatury >+50 °C** (np. wnętrza pojazdów na słońcu, hale produkcyjne 60+) — wybierz Z-Ultimate 3000T (termotransfer resin). (2) **Długotrwała ekspozycja na bezpośrednie słońce** — UV ciemni facestock DT, wybierz Z-Ultimate z lakierem UV. (3) **Kontakt z chemikaliami** (alkohol, paliwo, rozpuszczalniki) — klej gumowy nie wytrzymuje, wybierz PolyPro 4000D lub poliester TT.\n\nDla budżetowych etykiet wysyłkowych w typowych warunkach (bez chłodni, bez wymogu atestu żywnościowego) lepiej wybrać Z-Perform 1000D — taniej, klej akrylowy i podobna trwałość 1 rok. Dla wodoodporności wybierz PolyPro 4000D (syntetyk).',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania: **6 miesięcy** w temperaturze **20–25 °C** przy wilgotności względnej **40–50%**. Przewidywany okres eksploatacji po aplikacji: **do 1 roku indoor** (po prawidłowej aplikacji i ~24 h dwell time).\n\nPo upływie tego okresu nadruk termiczny może blaknąć — dla nadruków o cyklu życia >1 rok wybierz etykiety termotransferowe (Z-Ultimate 3000T, lata trwałości).',
      },
      {
        heading: 'Próbki i testowanie przed zakupem',
        content:
          'Zebra udostępnia oficjalne rolki próbne Z-Select 2000D: **SAMPLE5311** (mid-range/industrial) lub **SAMPLE5311-D** (desktop). Numer materiału (Raw Material): **05311RM**. Dostępna w programie Zebra ZipShip (minimum zamówienia: 1 rolka). W TAKMA pomagamy dobrać próbkę pod konkretną drukarkę i powierzchnię docelową — zalecamy 24-godzinny test przyczepności w realnych warunkach operacyjnych przed dużym zamówieniem.',
      },
    ],
    techSpecs: [
      { label: 'Materiał facestock', value: 'Matowy biały papier termoczuły powlekany (top-coat)' },
      { label: 'Grubość facestock', value: '81 µm' },
      { label: 'Klej', value: 'Permanentny gumowy (rubber) all-temperature' },
      { label: 'Grubość kleju', value: '13 µm' },
      { label: 'Liner', value: 'Glassine 62 g/m², 51 µm' },
      { label: 'Łączna grubość', value: '145 µm ±10%' },
      { label: 'Środowisko', value: 'Indoor' },
      { label: 'Zakres temperatur pracy', value: '−40 °C do +50 °C' },
      { label: 'Min. temperatura aplikacji', value: '0 °C' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Warunki przechowywania', value: '6 mies., 20–25 °C, RH 40–50%' },
      { label: 'Gilze (rdzeń)', value: '19 mm, 25 mm, 35 mm, 76 mm' },
      { label: 'Atesty żywnościowe', value: 'BfR XIV, FDA 175.105, EC 1935/2004, EU 10/2011' },
      { label: 'BPA / lateks', value: 'BPA-free, bez lateksu' },
      { label: 'Numer materiału (RM)', value: '05311RM' },
      { label: 'Numer próbki (mid-range/industrial)', value: 'SAMPLE5311' },
      { label: 'Numer próbki (desktop)', value: 'SAMPLE5311-D' },
      { label: 'Liczba wariantów', value: '37' },
    ],
    applications: [
      'Logistyka — oznaczenia opakowań (kartony, palety), chłodnia',
      'Magazyny — etykiety wysyłkowe, picking, receiving',
      'Handel detaliczny — etykiety półkowe, produktowe, cenowe (drobny font + 2D)',
      'Służba zdrowia — etykiety na opakowaniach sterylizowanych',
      'Produkcja — etykiety prac w toku (WIP)',
      'Identyfikacja produktów — oznaczenia partii (lot/batch)',
      'Chłodnia / mrożonki — dzięki klejowi gumowemu all-temperature (-40°C)',
      'Etykiety w przemyśle spożywczym (dzięki atestom BfR/FDA)',
    ],
    notRecommendedFor: [
      'Temperatury >+50 °C (samochody na słońcu, hale produkcyjne 60+)',
      'Długotrwała ekspozycja na bezpośrednie słońce (UV ciemni DT)',
      'Kontakt z alkoholem, IPA, amoniakiem, wybielaczem',
      'Kontakt z paliwami / olejem / smarem',
      'Kontakt z acetonem, MEK, TCE, ksylenem',
      'IR reflow (procesy lutowania elektronicznego)',
      'Etykiety outdoor — wybierz PolyPro 4000D lub termotransfer',
      'Cykl życia >1 rok — wybierz Z-Ultimate 3000T (TT)',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['ZQ511', 'ZQ521', 'ZQ610', 'ZQ620', 'ZQ630', 'QLn220', 'QLn320'],
    },
    certifications: [
      { name: 'BfR XIV (Niemcy)', description: 'Federalna rekomendacja dla klejów w kontakcie z żywnością suchą i wilgotną nieoleistą. Wymóg sieci EU (Aldi, Lidl, Rewe).' },
      { name: 'FDA 175.105 (USA)', description: 'Amerykańska Agencja Żywności i Leków — bezpośredni kontakt z suchą żywnością lub poprzez funkcjonalną barierę.' },
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów kontaktujących się z żywnością.' },
      { name: 'EU 10/2011', description: 'Szczegółowe wymogi dla tworzyw sztucznych w kontakcie z żywnością.' },
      { name: 'BPA-free', description: 'Facestock papierowy bez bisfenolu A — zgodny z najnowszymi restrykcjami EU dla mediów termicznych.' },
      { name: 'Latex-free adhesive', description: 'Klej gumowy bez lateksu — przyjazny dla alergików i bezpieczny do kontaktu z żywnością.' },
      { name: 'ISO 9001 certified', description: '23-punktowy proces kontroli jakości w produkcji — spójność wydajności między partiami.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Wybierz Z-Select 2000D gdy potrzebujesz lepszej jakości skanu kodu, dłuższego życia etykiety (>12 mies.) lub atestów żywnościowych. Z-Perform 1000D wystarczy dla budżetowych wysyłek i pickingu.',
      },
      {
        seriesSlug: 'polypro-4000d',
        whenToChooseThis: 'Wybierz Z-Select 2000D do etykiet indoor z atestem żywnościowym. PolyPro 4000D do outdoor, chłodni i wody — ale bez atestu żywnościowego.',
      },
      {
        seriesSlug: 'z-select-2000d-removable',
        whenToChooseThis: 'Wybierz Z-Select 2000D standardową gdy etykieta ma trzymać się permanentnie. Wersję Removable wybierz dla ekspozycji retail i etykiet tymczasowych zdejmowanych bez śladu.',
      },
    ],
    faq: [
      {
        question: 'Czym różni się Z-Select 2000D od Z-Perform 1000D?',
        answer: 'Z-Select 2000D ma powłokę top-coat (ostrzejszy nadruk, dłuższe życie głowicy, do 24 mies. trwałości) i atesty żywnościowe. Z-Perform 1000D to tańszy papier niepowlekany do 12 mies. trwałości. Z-Select 2000D wybierasz dla retail, healthcare, żywności. Z-Perform 1000D dla wysyłek, pickingu, magazynu o krótkim cyklu życia etykiety.',
      },
      {
        question: 'Czy Z-Select 2000D nadaje się do kontaktu z żywnością?',
        answer: 'Tak — Z-Select 2000D ma pełen pakiet atestów żywnościowych: BfR XIV (Niemcy), FDA 175.105 (USA), ISEGA, EC 1935/2004 i EU 10/2011. Klej jest BPA-free i bez lateksu. Może być stosowana w kontakcie z żywnością suchą i wilgotną, a tłustą poprzez funkcjonalną barierę.',
      },
      {
        question: 'Czy Z-Select 2000D działa w chłodniach i mroźniach?',
        answer: 'Zakres temperatur pracy: −20 °C do +80 °C (po prawidłowej aplikacji i 24 h dwell time). Minimalna temperatura aplikacji standardowej wersji to 0 °C. Dla aplikacji na zamrożone produkty bezpośrednio z chłodni/zamrażarki wybierz wariant All-Temp z klejem niskotemperaturowym.',
      },
      {
        question: 'Do jakich drukarek Zebra pasuje Z-Select 2000D?',
        answer: 'Pasuje do wszystkich drukarek Zebra obsługujących direct thermal: desktopowe (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d), mid-range (ZD611, ZT231), industrial (ZT411, ZT421, ZT510, ZT610, ZT620) i mobilne (ZQ511-630, QLn220-320). Dostępna w gilzach 19/25/35/76 mm — sprawdź który rozmiar obsługuje Twoja drukarka.',
      },
      {
        question: 'Jak długo trzyma nadruk na Z-Select 2000D?',
        answer: 'Do 24 miesięcy w warunkach indoor (bez bezpośredniego słońca, temp. do +80 °C). To 2× więcej niż Z-Perform 1000D dzięki powłoce top-coat chroniącej facestock przed ścieraniem i UV. Dla nadruków >2 lat lub outdoor wybierz Z-Ultimate 3000T (termotransfer) lub PolyPro 4000D.',
      },
      {
        question: 'Czy są dostępne próbki Z-Select 2000D przed zakupem?',
        answer: 'Tak. Zebra oferuje oficjalne rolki próbne: SAMPLE30820 dla drukarek mid-range/industrial, SAMPLE30820-D dla desktopowych. W TAKMA pomagamy dobrać próbkę pod Twoją drukarkę i powierzchnię docelową. Skontaktuj się przez formularz lub telefonicznie — próbki są darmowe dla klientów rozważających zamówienie od 10 rolek.',
      },
      {
        question: 'Czy mogę używać Z-Select 2000D bez powłoki top-coat (tańsza wersja)?',
        answer: 'Top-coat jest stałą cechą Z-Select 2000D — to ona odróżnia tę serię od tańszej Z-Perform 1000D. Jeśli nie potrzebujesz powłoki ochronnej i chcesz oszczędzić — wybierz Z-Perform 1000D (niepowlekana, do 12 mies. trwałości, bez top-coatu).',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  2. Z-PERFORM 1000D — ekonomiczna niepowlekana
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-perform-1000d',
    productId: 'zebra-z-perform-1000d',
    badge: 'Z-Perform 1000D',
    title: 'Z-Perform 1000D',
    tagline: 'Ekonomiczny niepowlekany papier do wysyłek, magazynu i pickingu — najlepsza cena/m².',
    positioning: 'ekonomiczna',
    material: 'papier-niepowlekany',
    glue: 'permanentny',
    topcoat: false,
    linerless: false,
    perforation: true,
    foodSafe: true,
    outdoor: false,
    priceFrom: 159.48,
    accent: '#1D4ED8',
    seoTitle: 'Z-Perform 1000D — ekonomiczna etykieta termiczna Zebra | od 159 zł',
    seoDescription: 'Zebra Z-Perform 1000D — ekonomiczna niepowlekana etykieta DT do wysyłek InPost/DPD, magazynu i pickingu. Atest BfR, FDA. 216 wariantów od 159 zł netto.',
    h1: 'Etykiety termiczne Zebra Z-Perform 1000D',
    heroIntro: 'Z-Perform 1000D to ekonomiczna, papierowa seria etykiet termicznych Zebra do druku bezpośredniego — zaprojektowana do codziennej pracy w magazynie, e-commerce, retailu i logistyce. Matowy facestock z klejem akrylowym permanentnym wytrzymuje od −20 °C do +80 °C. Najlepsza cena/m² dla wysokowolumenowych etykiet wysyłkowych InPost/DPD/DHL.',
    keyHighlights: [
      'Papier matowy biały niepowlekany — facestock 79 µm, total 145 µm',
      'Klej akrylowy permanentny — bez BPA, bez lateksu',
      'Atesty: ISEGA, FDA 175.105, EC 1935/2004, EU 10/2011, BfR XIV',
      'Zakres temperatur: −20 °C do +80 °C (dwell time ~24 h)',
      'Min. temp. aplikacji: 0 °C — niżej wybierz wariant All-Temp',
      '216 wariantów rozmiarowych — największy wybór gilz i formatów',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Perform 1000D?',
        content:
          'Z-Perform 1000D to oryginalna, papierowa seria mediów termicznych Zebra do druku direct thermal (DT). Składa się z trzech warstw: matowego facestocku z papieru termoczułego niepowlekanego, permanentnego kleju akrylowego oraz lineru glassine 57 g/m². Brak taśmy barwiącej oznacza prostszy proces druku, niższy TCO i mniej części zużywających się w drukarce — co jest typowym uzasadnieniem wyboru tej serii do operacji o dużej rotacji (wysyłki kurierskie, picking magazynowy, cenówki).\n\nZ-Perform 1000D NIE ma powłoki ochronnej top-coat — to różnica vs droższa Z-Select 2000D. Bez top-coatu: tańszy materiał, krótszy lifespan (do 12 mies. indoor), mniejsza ostrość kodu kreskowego przy gęstym 2D. Ale dla 70% magazynów i wysyłek to wystarcza w pełni.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Producent rekomenduje Z-Perform 1000D do etykietowania wewnątrz obiektów: etykiety wysyłkowe i kurierskie (InPost, DPD, DHL, GLS, FedEx), oznaczenia kartonów i opakowań, etykiety produktowe i cenowe na półce, picking i receiving w magazynie, lokacje regałowe, identyfikacja produktów oraz oznaczanie partii. Krótki cykl życia (do 12 miesięcy indoor) świadomie ogranicza koszt — dla nadruków, które muszą wytrzymać dłużej, wybierz Z-Select 2000D lub etykiety termotransferowe.',
      },
      {
        heading: 'Atesty żywnościowe',
        content:
          'Facestock Z-Perform 1000D jest BPA-free, a klej akrylowy nie zawiera lateksu. Klej posiada atest ISEGA do bezpośredniego kontaktu z suchą i wilgotną żywnością nieoleistą, jest zgodny z europejskimi regulacjami żywnościowymi EC 1935/2004, EU 10/2011 oraz BfR XIV (kontakt z żywnością suchą, wilgotną i tłustą o współczynniku redukcji co najmniej 3), a także z FDA 175.105 — dla bezpośredniego kontaktu z suchą żywnością lub przez funkcjonalną barierę. Argument dla gastronomii, piekarni, masarni, producentów spożywczych.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Trójwarstwowa konstrukcja: matowy biały papier termoczuły niepowlekany (facestock 79 µm), permanentny klej akrylowy (15 µm) oraz liner glassine 57 g/m² (51 µm). Całkowita grubość 145 µm ±10%. Po prawidłowej aplikacji i odczekaniu dwell time (~24 h) etykieta wytrzymuje pracę od −20 °C do +80 °C. Minimalna temperatura aplikacji to 0 °C — dla aplikacji na produkty schłodzone/zamrożone wybierz wariant All-Temp.',
      },
      {
        heading: 'Kompatybilność z drukarkami Zebra',
        content:
          'Z-Perform 1000D jest media-tested dla pełnej gamy drukarek termicznych Zebra: mobilne (ZQ511, ZQ521, ZQ610-630, QLn220-320), desktopowe (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d), mid-range (ZD611, ZT231) oraz industrialne (ZT411, ZT421, ZT510, ZT610, ZT620). Dostępna w gilzach 19 mm (3/4″), 25 mm/25,4 mm (1″) oraz 76 mm (3″) i w składance. Przy doborze potwierdź szerokość nośnika obsługiwaną przez konkretny model i maksymalną średnicę zewnętrzną rolki (OD).',
      },
      {
        heading: 'Z-Perform 1000D vs Z-Select 2000D — który wybrać',
        content:
          'Z-Perform 1000D to papier niepowlekany — tańszy, lekko mniej kontrastowy nadruk, idealny do etykiet o cyklu życia do kilku tygodni (wysyłki, picking, cenówki). Z-Select 2000D to papier powlekany top-coat — wyższa rozdzielczość nadruku kodu kreskowego, lepsza odporność na zarysowanie i ciecze, dłuższa żywotność (do 24 miesięcy indoor) oraz dostępność w wariantach z klejem All-Temp i do mrożonek.\n\nDecyzja: jeśli budżet jest priorytetem i etykieta nie ma długiego życia — wybierz 1000D. Jeśli liczy się jakość skanu kodu, kontakt z wodą lub chłodnią — wybierz 2000D.',
      },
      {
        heading: 'Kiedy NIE używać Z-Perform 1000D',
        content:
          'Trzy zastosowania, w których lepiej wybrać inną serię: (1) Długotrwała ekspozycja na bezpośrednie światło słoneczne — UV powoduje ciemnienie facestocku DT. (2) Ekstremalne ciepło powyżej 80 °C — np. wnętrza pojazdów na słońcu. (3) Aplikacja na powierzchnie z PVC — klej akrylowy nie wiąże stabilnie z plastyfikatorami PVC.\n\nW tych przypadkach sięgnij po PolyPro 4000D (syntetyk DT), Z-Ultimate 3000T (termotransfer poliester z żywicą) lub etykietę specjalistyczną z klejem high-tack.',
      },
    ],
    techSpecs: [
      { label: 'Materiał facestock', value: 'Papier termoczuły niepowlekany matowy biały' },
      { label: 'Klej', value: 'Akrylowy permanentny, BPA-free, bez lateksu (15 µm)' },
      { label: 'Grubość facestock', value: '79 µm' },
      { label: 'Grubość total', value: '145 µm ±10%' },
      { label: 'Liner', value: 'Glassine 57 g/m², 51 µm' },
      { label: 'Zakres temperatur pracy', value: '−20 °C do +80 °C' },
      { label: 'Min. temperatura aplikacji', value: '0 °C (warianty All-Temp niżej)' },
      { label: 'Trwałość nadruku indoor', value: 'Do 12 miesięcy' },
      { label: 'Gilze (rdzeń)', value: '19 mm, 25 mm, 76 mm + składanka' },
      { label: 'Atesty żywnościowe', value: 'BfR XIV, FDA 175.105, ISEGA, EC 1935/2004' },
            { label: 'Warunki przechowywania', value: '6 mies., 20-25°C, RH 40-50%' },
      { label: 'Numer próbki (mid-range/industrial)', value: 'SAMPLE30820' },
      { label: 'Numer próbki (desktop)', value: 'SAMPLE30820-D' },
      { label: 'Liczba wariantów', value: '216' },
    ],
    applications: [
      'Etykiety wysyłkowe i kurierskie (InPost, DPD, DHL, GLS, FedEx, paczkomaty)',
      'Kompletacja i przyjmowanie zamówień w magazynach WMS',
      'Oznaczenia kartonów i opakowań zbiorczych',
      'Cenówki półkowe i etykiety produktowe w retailu',
      'Identyfikacja produktów oraz oznaczenia partii (lot/batch)',
      'Etykiety adresowe do listów i przesyłek dokumentowych',
      'Oznaczenia półek, lokacji regałowych i miejsc składowania',
    ],
    notRecommendedFor: [
      'Długotrwała ekspozycja na bezpośrednie słońce (UV ciemni facestock)',
      'Ekstremalne ciepło >+80 °C (samochody, hale produkcyjne)',
      'Aplikacja na PVC (klej akrylowy nie wiąże stabilnie)',
      'Aplikacja poniżej 0 °C — wybierz wariant All-Temp lub Z-Select 2000D',
      'Etykiety zewnętrzne (outdoor) — sięgnij po PolyPro 4000D',
      'Etykiety długoterminowe (>12 miesięcy) — wybierz Z-Ultimate 3000T lub Z-Select 2000D',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['ZQ511', 'ZQ521', 'ZQ610', 'ZQ620', 'ZQ630', 'QLn220', 'QLn320'],
    },
    certifications: [
      { name: 'BfR XIV (Niemcy)', description: 'Atest dla klejów w kontakcie z żywnością suchą, wilgotną oraz tłustą (reduction factor co najmniej 3). Wymóg sieci EU (Aldi, Lidl, Rewe).' },
      { name: 'FDA 175.105 (USA)', description: 'Amerykańska Agencja Żywności i Leków — bezpośredni kontakt z suchą żywnością.' },
      { name: 'ISEGA', description: 'Instytut testujący materiały opakowaniowe — kontakt z żywnością suchą i wilgotną nieoleistą.' },
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów kontaktujących się z żywnością.' },
      { name: 'EU 10/2011', description: 'Szczegółowe wymogi dla tworzyw sztucznych w kontakcie z żywnością.' },
      { name: 'BPA-free', description: 'Facestock papierowy bez bisfenolu A — zgodny z najnowszymi restrykcjami EU dla mediów termicznych.' },
      { name: 'Latex-free adhesive', description: 'Klej akrylowy bez lateksu — przyjazny dla alergików i bezpieczny do kontaktu z żywnością.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-select-2000d',
        whenToChooseThis: 'Wybierz Z-Perform 1000D gdy budżet jest priorytetem i etykieta ma krótkie życie (do 12 mies., wysyłki/picking). Z-Select 2000D wybierz dla lepszej jakości skanu, dłuższego życia i atestów żywnościowych premium.',
      },
      {
        seriesSlug: 'z-essentials-1000d',
        whenToChooseThis: 'Z-Perform 1000D ma 216 wariantów rozmiarowych i atesty żywnościowe. Z-Essentials 1000D to entry-level (1 wariant, brak atestów). Wybierz Essentials tylko dla skrajnego budżetu i jednego konkretnego rozmiaru.',
      },
      {
        seriesSlug: 'z-perform-1000d-removable',
        whenToChooseThis: 'Z-Perform 1000D ma klej permanentny — etykieta trzyma się stale. Wersja Removable ma klej zdejmowalny — wybierz gdy etykiety mają być zdejmowane bez śladu (ekspozycje, tymczasowe oznaczenia).',
      },
    ],
    faq: [
      {
        question: 'Czy Z-Perform 1000D wymaga taśmy barwiącej?',
        answer: 'Nie. Z-Perform 1000D to etykieta direct thermal (DT) — nadruk powstaje bezpośrednio na specjalnym papierze termicznym pod wpływem ciepła głowicy drukującej. Brak taśmy = niższy koszt eksploatacji i prostszy proces druku.',
      },
      {
        question: 'Czy Z-Perform 1000D może być w kontakcie z żywnością?',
        answer: 'Tak. Z-Perform 1000D ma atesty: BfR XIV (Niemcy), FDA 175.105 (USA), ISEGA, EC 1935/2004, EU 10/2011. Klej akrylowy jest BPA-free i bez lateksu. Może być stosowana w kontakcie z żywnością suchą i wilgotną (z tłustą poprzez funkcjonalną barierę).',
      },
      {
        question: 'Jak długo trzyma nadruk na Z-Perform 1000D?',
        answer: 'Do 12 miesięcy w warunkach indoor. UV i temperatury powyżej +80 °C skracają lifespan. Dla nadruków o dłuższym cyklu życia wybierz Z-Select 2000D (do 24 mies., z top-coatem) lub etykiety termotransferowe (Z-Ultimate 3000T, lata).',
      },
      {
        question: 'Czy Z-Perform 1000D nadaje się do mrożonek?',
        answer: 'Standardowy wariant — nie do aplikacji bezpośredniej na zamrożone produkty (min. temp. aplikacji 0 °C). Po prawidłowej aplikacji etykieta wytrzymuje pracę do −20 °C. Dla aplikacji na produkty wprost z chłodni/zamrażarki wybierz wariant All-Temp z klejem niskotemperaturowym lub Z-Select 2000D.',
      },
      {
        question: 'Ile wariantów rozmiarowych ma Z-Perform 1000D?',
        answer: '216 — największy wybór w portfolio etykiet termicznych Zebra. Obejmuje gilze 19 mm (3/4″), 25 mm/25.4 mm (1″), 76 mm (3″) oraz wersję ze składanką. W TAKMA pomagamy dobrać dokładny rozmiar pod Twoją drukarkę i zastosowanie.',
      },
      {
        question: 'Czy Z-Perform 1000D ma powłokę top-coat?',
        answer: 'Nie. Z-Perform 1000D to papier NIEPOWLEKANY — bez top-coatu. To główna różnica vs Z-Select 2000D, która ma top-coat (ostrzejszy nadruk kodów kreskowych, dłuższe życie głowicy, wyższa trwałość). Brak top-coatu = niższa cena = krótszy lifespan.',
      },
      {
        question: 'Do jakich drukarek Zebra pasuje Z-Perform 1000D?',
        answer: 'Do pełnej gamy: mobilne (ZQ511, ZQ521, ZQ610-630, QLn220-320), desktopowe (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d), mid-range (ZD611, ZT231) i industrial (ZT411, ZT421, ZT510, ZT610, ZT620). Sprawdź czy Twoja drukarka obsługuje wybraną gilzę i szerokość etykiety.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  3. POLYPRO 4000D — wodoodporna syntetyczna
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'polypro-4000d',
    productId: 'zebra-polypro-4000d',
    badge: 'PolyPro 4000D',
    title: 'PolyPro 4000D',
    tagline: 'Wodoodporny polipropylen all-temp — aplikacja do −40°C, FDA do indirect food contact.',
    positioning: 'wodoodporna',
    material: 'polipropylen-syntetyczny',
    glue: 'permanentny',
    topcoat: false,
    linerless: false,
    perforation: false,
    foodSafe: true,
    outdoor: false,
    priceFrom: 983.62,
    accent: '#0EA5E9',
    seoTitle: 'PolyPro 4000D — wodoodporna etykieta termiczna Zebra | all-temp',
    seoDescription: 'Zebra PolyPro 4000D — wodoodporna polipropylenowa etykieta termiczna DT z klejem all-temp (-40°C aplikacja). Atest FDA 175.105 (indirect food). Chłodnie, package labeling.',
    h1: 'Etykiety termiczne Zebra PolyPro 4000D — polipropylen wodoodporny',
    heroIntro: 'PolyPro 4000D to syntetyczna, **wodoodporna i tear-resistant** etykieta termiczna Zebra wykonana z matowego białego polipropylenu zamiast papieru. **Klej akrylowy all-temperature** umożliwia aplikację w temperaturze nawet **−40°C** — perfekcyjna do chłodni, mroźni i package labeling. Atest **FDA 175.105 (indirect food contact)** — można aplikować na shrink wrap i opakowania żywności. Materiał odporny na rozdarcie — idealna do **reusable totes, skrzynek, regałów** gdzie etykieta jest wymieniana wraz z całością.',
    keyHighlights: [
      'Wodoodporny matowy biały polipropylen — nie wchłania wilgoci',
      'Klej akrylowy all-temperature — aplikacja do −40 °C',
      'Zakres pracy: −54 °C do +55 °C (po dwell time)',
      'Tear-resistant — odporny na rozdarcie (reusable totes, skrzynki)',
      'Atest FDA 175.105 dla indirect food contact (shrink wrap, opakowania)',
      'Suitable for fan-folding (składanka)',
      'BPA-free / latex-free',
    ],
    sections: [
      {
        heading: 'Czym jest PolyPro 4000D?',
        content:
          'PolyPro 4000D to syntetyczna etykieta termiczna Zebra wykonana z matowego białego polipropylenu zamiast papieru. Konstrukcja: facestock polipropylenowy 71,1 µm + permanentny akrylowy klej all-temperature 20,32 µm + liner 50 gsm semi-bleached kraft 63,5 µm. Łączna grubość 154,9 µm ±10%, materiał RM 65843RM.\n\nKluczowa przewaga vs serie papierowe (Z-Perform, Z-Select): polipropylen NIE wchłania wilgoci ani się nie rwie. Klucz dla cold storage labeling (chłodnia/mroźnia), package labeling w warunkach wilgotnych oraz indirect food labeling — Zebra rekomenduje PolyPro 4000D do aplikacji na shrink wrap i innych opakowaniach żywności.\n\nMateriał jest tear-resistant — etykieta nie rwie się przy próbie odklejenia, więc cały label można wymienić jednym ruchem. Przydatne dla reusable totes, skrzynek, regałów magazynowych — gdzie zmieniasz etykiety co kilka tygodni.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Zebra rekomenduje PolyPro 4000D dla trzech głównych scenariuszy:\n\n- **Magazyn — etykietowanie w chłodni i mroźni** (gdzie zwykły papier rozmięknie od kondensatu)\n- **Magazyn — etykietowanie opakowań** w wilgotnych warunkach magazynowych\n- **Etykietowanie opakowań żywności** (shrink wrap, kartony zewnętrzne — bez bezpośredniego kontaktu z produktem)\n\nDodatkowo dzięki odporności na rozdarcie i wodoodporności sprawdza się w: oznaczeniach pojemników wielokrotnych, skrzynek, regałów (wymiana etykiety bez residuum), etykietach wodoodpornych ogólnego zastosowania (chłodnie spożywcze, kuchnie przemysłowe).',
      },
      {
        heading: 'Atest żywnościowy — FDA 175.105 indirect food',
        content:
          'PolyPro 4000D ma atest **FDA 175.105 dla indirect food contact** — bezpośredni kontakt z suchą żywnością LUB rozdzielony funkcjonalną barierą. To znaczy: etykieta może być aplikowana na **shrink wrap, kartony, opakowania żywności** — ale nie w bezpośrednim kontakcie z mokrą/tłustą żywnością.\n\nDla bezpośredniego kontaktu z żywnością (np. opakowania w masarni z surowym mięsem, opakowania mlekarskie) wybierz Z-Select 2000D lub Z-Perform 1000D z pełnym pakietem atestów (BfR XIV + FDA + EC 1935/2004).',
      },
      {
        heading: 'Parametry techniczne i wytrzymałość',
        content:
          'Konstrukcja:\n\n- **Facestock**: matowy biały polipropylen, **71,1 µm (2,8 mil)**\n- **Klej**: permanentny akrylowy all-temperature, **20,32 µm (0,8 mil)**\n- **Liner**: 50 gsm semi-bleached kraft, **63,5 µm (2,5 mil)**\n- **Łączna grubość**: 154,9 µm ±10% (6,1 mil)\n\nMinimalna temperatura aplikacji: **−40 °C** (all-temperature adhesive — można naklejać nawet w mroźni). Po prawidłowej aplikacji i dwell time ~24 h: zakres pracy **−54 °C do +55 °C**.\n\nSiła przyczepności (5 min / 24h, oz/in): Corrugate 17/18, Steel 49/facestock rips (klej tak mocny, że materiał się rwie wcześniej), Polycarbonate 57/facestock rips, Polyethylene 26/46. Polipropylen jest **tear-resistant** — wytrzymuje rozdzieranie przy zdejmowaniu.',
      },
      {
        heading: 'Odporność chemiczna',
        content:
          'PolyPro 4000D ma OGRANICZONĄ odporność chemiczną mimo że jest wodoodporny:\n\n- **Słabe chemikalia** (woda, woda słona, krew, płyny ustrojowe, środek do szyb): "Test in your application" — testuj w swojej aplikacji\n- **Średnio agresywne** (alcohol, ammonia, bleach, IPA): **NIE rekomendowane**\n- **Agresywne** (benzyna, smar, olej): **NIE rekomendowane**\n- **Ekstremalne** (aceton, IR reflow, MEK, TCE, ksylen): **NIE rekomendowane**\n\nWodoodporność polipropylenu działa tylko dla CZYSTEJ WODY i wilgoci kondensacyjnej — nie dla rozpuszczalników i agresywnych chemikaliów. Dla takich aplikacji wybierz etykietę z poliestru lub Kapton (termotransfer resin).',
      },
      {
        heading: 'Kompatybilność z drukarkami Zebra',
        content:
          'PolyPro 4000D jest media-tested dla wszystkich klas drukarek Zebra direct thermal: **desktopowe** (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d), **industrial** (ZT411, ZT421, ZT510, ZT610, ZT620) oraz **mobilne** (ZQ511-630, QLn220-320). Drukuje BEZ taśmy barwiącej (ribbons N/A).\n\nMateriał można składać do **gęstej składanki (fanfold)** zamiast nawijać na gilzę — przydatne dla drukarek przemysłowych z tacą składankową (ZT411/ZT421).\n\nUWAGA: druk na syntetyku wymaga lekko wyższej temperatury głowicy niż papier — w drukarce ustaw "darkness" o 2-3 stopnie wyżej niż dla Z-Perform 1000D.',
      },
      {
        heading: 'Kiedy NIE używać PolyPro 4000D',
        content:
          'PolyPro 4000D NIE jest pierwszym wyborem dla: (1) **Bezpośredniego kontaktu z żywnością** — FDA dotyczy tylko INDIRECT contact; dla mokrej/tłustej żywności wybierz Z-Select 2000D lub Z-Perform 1000D. (2) **Długotrwałej ekspozycji UV** (>30 dni outdoor) — facestock DT blaknie pod słońcem; wybierz termotransfer (Z-Ultimate 3000T) z lakierem UV. (3) **Temperatur >+55 °C** (silniki, hale produkcyjne 60+) — polipropylen się deformuje.\n\nDla **kontaktu z chemikaliami** (alkohol, IPA, paliwa, aceton, MEK, ksylen) — PolyPro 4000D NIE jest rekomendowany; wybierz etykietę z poliestru lub Kapton (termotransfer resin).',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania: **6 miesięcy** w temperaturze **22 °C** przy wilgotności względnej **50%**. Przewidywany okres eksploatacji po aplikacji: **do 1 roku indoor** (po prawidłowej aplikacji i ~24 h dwell time).\n\nNumer materiału (Raw Material): **65843RM**. PDF nie podaje numeru rolki próbnej (Sample PN) — Zebra rekomenduje "Material Testing in End Application" — sprawdź w swoich warunkach przed dużym zamówieniem.',
      },
    ],
    techSpecs: [
      { label: 'Materiał facestock', value: 'Matowy biały polipropylen (71,1 µm / 2,8 mil)' },
      { label: 'Klej', value: 'All-temp permanent acrylic (20,32 µm / 0,8 mil)' },
      { label: 'Liner', value: '50 gsm semi-bleached kraft (63,5 µm / 2,5 mil)' },
      { label: 'Łączna grubość', value: '154,9 µm ±10% (6,1 mil)' },
      { label: 'Środowisko', value: 'Indoor use' },
      { label: 'Wodoodporność', value: 'Tak — polipropylen nie wchłania wilgoci' },
      { label: 'Tear-resistant', value: 'Tak — odporny na rozdarcie' },
      { label: 'Składanka (fan-fold)', value: 'Tak — można składać do gęstej składanki' },
      { label: 'Zakres temperatur pracy', value: '−54 °C do +55 °C' },
      { label: 'Min. temperatura aplikacji', value: '−40 °C (all-temperature adhesive)' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Warunki przechowywania', value: '6 mies., 22 °C, RH 50%' },
      { label: 'Siła kleju — stal (24h)', value: 'Klej tak silny, że facestock się rwie' },
      { label: 'Siła kleju — poliwęglan (24h)', value: 'Klej tak silny, że facestock się rwie' },
      { label: 'Siła kleju — tektura falista (24h)', value: '18 oz/in' },
      { label: 'Siła kleju — polietylen (24h)', value: '46 oz/in' },
      { label: 'Atest żywnościowy', value: 'FDA 175.105 (indirect food contact)' },
      { label: 'Numer materiału (RM)', value: '65843RM' },
      { label: 'Liczba wariantów', value: '3' },
    ],
    applications: [
      'Magazyn — etykietowanie w chłodni i mroźni',
      'Magazyn — etykietowanie opakowań w warunkach wilgotnych',
      'Etykietowanie opakowań żywności (shrink wrap, kartony zewnętrzne)',
      'Pojemniki wielokrotne, skrzynki, regały magazynowe (odporne na rozdarcie)',
      'Etykiety wodoodporne ogólnego zastosowania',
      'Etykiety w wilgotnych pomieszczeniach (chłodnie spożywcze, kuchnie przemysłowe)',
      'Oznaczenia w składance (fanfold dla drukarek przemysłowych)',
    ],
    notRecommendedFor: [
      'Bezpośredni kontakt z żywnością — FDA tylko indirect; dla direct food wybierz Z-Select/Z-Perform 1000D',
      'Długotrwała ekspozycja UV outdoor (>30 dni) — facestock DT blaknie',
      'Temperatury >+55 °C — polipropylen się deformuje',
      'Kontakt z alkoholem, IPA, amoniakiem, wybielaczem',
      'Kontakt z paliwami / olejem / smarem',
      'Agresywne rozpuszczalniki (aceton, MEK, TCE, ksylen)',
      'IR reflow (procesy lutowania elektronicznego)',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d'],
      midRange: [],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['ZQ511', 'ZQ521', 'ZQ610', 'ZQ620', 'ZQ630'],
    },
    certifications: [
      { name: 'FDA 175.105 (indirect food contact)', description: 'Atest do bezpośredniego kontaktu z suchą żywnością LUB rozdzielonej funkcjonalną barierą. Aplikacja na shrink wrap i opakowania żywności.' },
      { name: 'BPA-free', description: 'Facestock polipropylenowy bez bisfenolu A.' },
      { name: 'Latex-free adhesive', description: 'Klej akrylowy bez lateksu.' },
      { name: 'ISO 9001 certified', description: '23-punktowy proces kontroli jakości — spójność wydajności między partiami.' },
      { name: 'Tear-resistant', description: 'Folia polipropylenowa odporna na rozdarcie — wytrzymuje wymiany etykiet w reusable totes i skrzynkach.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-select-2000d',
        whenToChooseThis: 'Wybierz PolyPro 4000D gdy etykieta ma kontakt z wodą, wilgocią, mrożeniem lub chemią. Z-Select 2000D do zastosowań indoor z atestem żywnościowym (papier, nie syntetyk).',
      },
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Wybierz PolyPro 4000D dla wodoodporności i wytrzymałości. Z-Perform 1000D to budżetowy papier do suchych etykiet wysyłkowych — nie wytrzymuje wilgoci.',
      },
    ],
    faq: [
      {
        question: 'Czy PolyPro 4000D jest naprawdę wodoodporny?',
        answer: 'Tak. Polipropylen jest naturalnie wodoodporny — nie wchłania wilgoci, nie pęka, nie strzępi się. Etykieta wytrzymuje deszcz, kondensację z chłodni, mrożenie. Materiał jest też tear-resistant (odporny na rozdarcie). UWAGA: wodoodporność dotyczy CZYSTEJ wody — dla rozpuszczalników i agresywnych chemikaliów PDF Zebry mówi "Not recommended".',
      },
      {
        question: 'Czy PolyPro 4000D nadaje się do żywności?',
        answer: 'Tak, ale tylko do INDIRECT food contact. PolyPro 4000D ma atest FDA 175.105 — bezpośredni kontakt z SUCHĄ żywnością lub rozdzielony funkcjonalną barierą (np. shrink wrap, kartony, opakowania zewnętrzne). Dla BEZPOŚREDNIEGO kontaktu z mokrą/tłustą żywnością wybierz Z-Select 2000D lub Z-Perform 1000D (BfR XIV + FDA + EC 1935/2004).',
      },
      {
        question: 'Do jakich temperatur wytrzymuje PolyPro 4000D?',
        answer: 'Zakres pracy: −54 °C do +55 °C (po prawidłowej aplikacji i 24 h dwell time). Min. temperatura aplikacji: −40 °C (klej all-temperature — można naklejać nawet w mroźni). Powyżej +55 °C polipropylen zaczyna się deformować — dla wyższych temperatur wybierz poliester (termotransfer resin).',
      },
      {
        question: 'Czy mogę używać PolyPro 4000D outdoor?',
        answer: 'Tak, ale z ograniczeniami. Wodoodporność: bez problemu (deszcz, śnieg, wilgoć). UV: facestock DT ciemnieje pod długotrwałym słońcem (>30 dni) nawet pod top-coatem. Dla outdoor długoterminowo (>1 mies. na słońcu) wybierz etykietę termotransferową z lakierem UV (np. Z-Ultimate 3000T + UV laminat).',
      },
      {
        question: 'Czy PolyPro 4000D wytrzymuje rozpuszczalniki?',
        answer: 'Większość typowych — tak (alkohol izopropylowy, etanol, oleje, smary, środki czystości). Agresywne (aceton, MEK, ksylen, toluen) mogą zniszczyć top-coat i nadruk. Dla kontaktu z silnymi chemikaliami wybierz etykietę z poliestru (termotransfer resin) lub Kapton.',
      },
      {
        question: 'Do jakich drukarek Zebra pasuje PolyPro 4000D?',
        answer: 'Do wszystkich Zebra obsługujących direct thermal: desktop (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d), mid-range (ZD611, ZT231), industrial (ZT411, ZT421, ZT510, ZT610, ZT620) i mobile (ZQ511-630). UWAGA: przy druku na syntetyku ustaw darkness 2-3 stopnie wyżej niż dla papieru — głowica potrzebuje więcej ciepła.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  4. ZEROLINER 2000D — premium linerless
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'zeroliner-2000d',
    productId: 'zebra-zeroliner-2000d',
    badge: 'ZeroLiner 2000D',
    title: 'ZeroLiner 2000D',
    tagline: 'Premium linerless z błyszczącym wykończeniem i klejem gumowym — bezfenolowa, do drukarek mobilnych i biurkowych Zebra.',
    positioning: 'linerless',
    material: 'papier-linerless',
    glue: 'permanentny',
    topcoat: true,
    linerless: true,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 800.87,
    accent: '#16A34A',
    seoTitle: 'ZeroLiner 2000D — premium linerless Zebra z klejem gumowym | bezfenolowy',
    seoDescription: 'Zebra ZeroLiner 2000D — premium etykieta termiczna linerless z klejem gumowym i błyszczącym wykończeniem. Bezfenolowa (REACH, RoHS, EN71-3). Do drukarek mobilnych i biurkowych. Praca −10 °C do +60 °C.',
    h1: 'Etykiety termiczne Zebra ZeroLiner 2000D — premium linerless',
    heroIntro: 'ZeroLiner 2000D to **bezfenolowa, premium etykieta linerless** z błyszczącym wykończeniem (silikonowanym papierem 78 µm) i **trwałym klejem kauczukowym (gumowym)**. Łączna grubość **88 µm ±10%**, zakres pracy **−10 °C do +60 °C**. Zatwierdzona przez Zebrę do **drukarek mobilnych i biurkowych** — idealna dla handlu detalicznego, magazynowania i logistyki w pomieszczeniach.',
    keyHighlights: [
      'Linerless — bez papierowego podkładu (więcej etykiet na rolkę, zero odpadu)',
      'Gładki biały papier z powłoką silikonową, 78 µm (3 mil)',
      'Trwały klej **kauczukowy (gumowy)** — nie akrylowy',
      'Bezfenolowa — REACH, RoHS, EN71-3 Bezpieczeństwo zabawek',
      'Zakres pracy −10 °C do +60 °C, min. aplikacja 10 °C',
      'Rekomendowana do drukarek **mobilnych i biurkowych** Zebra (linerless)',
      'Łączna grubość 88 µm ±10%',
    ],
    sections: [
      {
        heading: 'Czym jest ZeroLiner 2000D?',
        content:
          'ZeroLiner 2000D to **bezfenolowa, bezpodkładowa (linerless) papierowa etykieta termiczna** o doskonałych parametrach — z **trwałym klejem kauczukowym** i **błyszczącym wykończeniem**. Materiał wierzchni to **gładki biały papier z powłoką silikonową** o grubości **78 µm (3 mil)**, łączna grubość rolki wynosi **88 µm ±10%**.\n\nLinerless oznacza etykietę nawiniętą bezpośrednio samą na siebie, BEZ papierowego podkładu — silikonowa powłoka na wierzchu pełni rolę antiblock i zapobiega sklejaniu się etykiet w rolce. Korzyść: rolka mieści więcej etykiet, zero odpadu papierowego z lineru, rzadsza wymiana rolki w drukarce.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'ZeroLiner 2000D został zaprojektowany do użytku **wewnątrz pomieszczeń**, doskonale sprawdza się w **drukarkach mobilnych Zebra** oraz w drukarkach biurkowych. Branże i zastosowania według Zebry:\n\n- **Zakłady produkcyjne** — etykietowanie produkcji w toku (WIP)\n- **Handel detaliczny** — etykietowanie produktów i cen\n- **Usługi logistyczne** — etykiety wysyłkowe, zarządzanie zapasami i magazynami\n- **Inne** — zastosowania niepozwalające na użycie podkładu (gdzie liner byłby utrudnieniem)\n\nKlej kauczukowy daje stabilną przyczepność w typowych warunkach indoor — od **−10 °C do +60 °C** po prawidłowej aplikacji i dwell time ~24 h.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Konstrukcja materiału:\n\n- **Materiał wierzchni**: gładki biały papier z powłoką silikonową, **78 µm (3 mil)**\n- **Klej**: permanentny klej **kauczukowy (gumowy)**\n- **Podkład**: brak (linerless)\n- **Łączna grubość**: **88 µm (3,4 mil) ±10%**\n- **Środowisko**: do użytku wewnątrz pomieszczeń\n\nWydajność temperaturowa:\n\n- **Minimalna temperatura aplikacji**: **10 °C (50 °F)** — temperatura otoczenia i powierzchni musi być wyższa w momencie naklejenia\n- **Zakres temperatury użytkowej**: **−10 °C do +60 °C** (14 °F do 140 °F) po prawidłowej aplikacji i dwell time ~24 h',
      },
      {
        heading: 'Zgodność i certyfikaty',
        content:
          'ZeroLiner 2000D spełnia wymogi: **REACH**, **RoHS**, **EN71-3 Bezpieczeństwo zabawek**, brytyjskie przepisy dotyczące opakowań z 1998 r. — produkt jest **wolny od fenolu** (bezfenolowy).\n\nUWAGA: ZeroLiner 2000D **nie ma atestów żywnościowych** (BfR XIV, FDA 175.105 itp.) — dla kontaktu z żywnością wybierz Z-Select 2000D lub Z-Perform 1000D.',
      },
      {
        heading: 'Wymóg: drukarka linerless Zebra',
        content:
          'Drukarki z możliwością druku bezpodkładowego są wyposażone w **specjalnie zaprojektowane wałki i obcinaki** odporne na klej. Standardowy gumowy platen roller zostanie zniszczony przez klej kauczukowy w ciągu godzin.\n\nZeroLiner 2000D jest **zatwierdzony przez Zebrę do drukarek mobilnych i biurkowych** (dostępne rozmiary do modeli desktopowych). Modele Zebra z natywnym wsparciem linerless: ZD611 Linerless, ZD621 Linerless, mobilne ZQ510 / ZQ520 / ZQ630 Linerless. Sprawdź konfigurację swojej drukarki przed zamówieniem.',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania (produktu przed użyciem): **1 rok** przy temperaturze **22 °C** i wilgotności względnej **40–50%**. Rolki należy przechowywać w temperaturze poniżej **35 °C**, w pomieszczeniach zamkniętych, z dala od bezpośredniego nasłonecznienia, w oryginalnym opakowaniu.\n\nPrzewidywany okres eksploatacji w zastosowaniu: **do 1 roku indoor** (po prawidłowej aplikacji i dwell time ~24 h).',
      },
    ],
    techSpecs: [
      { label: 'Materiał wierzchni', value: 'Gładki biały papier z powłoką silikonową' },
      { label: 'Grubość facestock', value: '78 µm (3 mil)' },
      { label: 'Klej', value: 'Permanentny **kauczukowy (gumowy)**' },
      { label: 'Liner', value: 'Brak (linerless)' },
      { label: 'Łączna grubość', value: '88 µm (3,4 mil) ±10%' },
      { label: 'Środowisko użytkowe', value: 'Indoor — wnętrza pomieszczeń' },
      { label: 'Min. temperatura aplikacji', value: '10 °C (50 °F)' },
      { label: 'Zakres temperatury użytkowej', value: '−10 °C do +60 °C' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Taśmy barwiące', value: 'Nd. (DT — bez ribbonu)' },
      { label: 'Warunki przechowywania', value: '1 rok, 22 °C, RH 40–50%, poniżej 35 °C' },
      { label: 'Wolny od fenolu', value: 'Tak (bezfenolowy)' },
      { label: 'Zgodność', value: 'REACH, RoHS, EN71-3, UK Packaging Regulations 1998' },
      { label: 'Drukarki zalecane', value: 'Mobilne i biurkowe Zebra (z linerless platen rollerem)' },
      { label: 'Liczba wariantów', value: '6' },
    ],
    applications: [
      'Zakłady produkcyjne — etykietowanie produkcji w toku (WIP)',
      'Handel detaliczny — etykietowanie produktów i cen',
      'Usługi logistyczne — etykiety wysyłkowe',
      'Zarządzanie zapasami i magazynami',
      'Drukarki mobilne — etykietowanie w terenie i w magazynie',
      'Zastosowania, gdzie liner byłby utrudnieniem (zero odpadu)',
    ],
    notRecommendedFor: [
      'Drukarki bez linerless platen rollera — zniszczysz wałek',
      'Aplikacje outdoor — produkt przeznaczony tylko do użytku wewnątrz',
      'Temperatury <−10 °C lub >+60 °C (poza zakresem użytkowym)',
      'Aplikacja na powierzchnie <10 °C (poniżej min. temp. aplikacji)',
      'Etykiety w kontakcie z żywnością (brak atestów BfR/FDA)',
      'Aplikacje wymagające peelera/dispensera (linerless nie współpracuje)',
    ],
    compatiblePrinters: {
      desktop: ['ZD611 Linerless', 'ZD621 Linerless'],
      midRange: [],
      industrial: [],
      mobile: ['ZQ510 Linerless', 'ZQ520 Linerless', 'ZQ630 Linerless'],
    },
    certifications: [
      { name: 'REACH', description: 'Zgodność z unijnym rozporządzeniem REACH dotyczącym chemikaliów.' },
      { name: 'RoHS', description: 'Ograniczenie stosowania substancji niebezpiecznych w produktach.' },
      { name: 'EN71-3 Bezpieczeństwo zabawek', description: 'Norma bezpieczeństwa zabawek — migracja pierwiastków.' },
      { name: 'UK Packaging Regulations 1998', description: 'Brytyjskie przepisy dotyczące opakowań z 1998 r.' },
      { name: 'Wolny od fenolu', description: 'Materiał bezfenolowy — bez bisfenoli (BPA/BPS) i innych fenoli.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'zeroliner-1100d',
        whenToChooseThis: 'Wybierz ZeroLiner 2000D dla premium jakości (top-coat, ostry nadruk kodów, dłuższe życie). ZeroLiner 1100D to ekonomiczna wersja bez top-coatu — taniej, krótszy lifespan.',
      },
      {
        seriesSlug: 'zeroliner-4500d',
        whenToChooseThis: 'Wybierz ZeroLiner 2000D dla standardowych operacji. ZeroLiner 4500D ma najdłuższy metraż na rolce — wybierz dla bardzo wysokich wolumenów gdzie chcesz maksymalnie zminimalizować wymiany rolki.',
      },
      {
        seriesSlug: 'z-select-2000d',
        whenToChooseThis: 'Wybierz ZeroLiner 2000D dla bezobsługowości i zerowego odpadu (linerless). Z-Select 2000D wybierz gdy potrzebujesz atestów żywnościowych lub Twoja drukarka nie ma linerless platen rollera.',
      },
    ],
    faq: [
      {
        question: 'Czym jest etykieta linerless?',
        answer: 'Etykieta nawinięta bezpośrednio sama na siebie, BEZ papierowego podkładu (lineru). Plus: do 2× więcej etykiet na rolce, zero odpadu papierowego, mniej miejsca w magazynie. Minus: wymaga drukarki z linerless platen rollerem (silikonowym, odpornym na klej).',
      },
      {
        question: 'Czy moja drukarka obsługuje linerless?',
        answer: 'Sprawdź czy ma "linerless platen roller" lub opcję linerless. Drukarki Zebra z natywnym wsparciem: ZD611 Linerless, ZD621 Linerless, ZT411 z opcją linerless, mobilne ZQ510/520/630 Linerless. Jeśli masz standardową drukarkę bez tej opcji — wymień platen roller na linerless (ok. 200-400 zł) lub wybierz etykietę z linerem.',
      },
      {
        question: 'Czy ZeroLiner 2000D jest droższy niż standardowa etykieta?',
        answer: 'Cena za rolkę jest wyższa, ale CENA ZA ETYKIETĘ jest niższa lub porównywalna — bo rolka mieści do 2× więcej. Plus zaoszczędzony czas operatora na wymianach rolki i koszty utylizacji odpadu. ROI typowo po 2-3 miesiącach dla wolumenów >2000 etykiet/dzień.',
      },
      {
        question: 'Czy ZeroLiner 2000D nadaje się do żywności?',
        answer: 'Nie ma oficjalnych atestów żywnościowych (BfR, FDA, ISEGA). Dla kontaktu z żywnością wybierz Z-Select 2000D (premium powlekana z atestami) lub Z-Perform 1000D (ekonomiczna z atestami). ZeroLiner 2000D używaj do etykiet wysyłkowych, sortowni, oznaczeń napojów.',
      },
      {
        question: 'Czy etykiety linerless się sklejają w rolce?',
        answer: 'Nie — dzięki silikonowej warstwie antiblock na wierzchu facestocku. Antiblock zapobiega sklejaniu klej-facestock podczas nawijania. To główna technologia umożliwiająca linerless.',
      },
      {
        question: 'Czy linerless działa z peelerem/dispenserem?',
        answer: 'Trudno. Peeler oddziela etykietę od lineru — linerless nie ma lineru do oddzielania. Niektóre drukarki Zebra mają "linerless cutter" zamiast peelera — automatycznie odcina etykiety nożem zamiast oddzielać. Sprawdź funkcjonalność swojej drukarki.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  5. ZEROLINER 1100D — ekonomiczna linerless
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'zeroliner-1100d',
    productId: 'zebra-zeroliner-1100d',
    badge: 'ZeroLiner 1100D',
    title: 'ZeroLiner 1100D',
    tagline: 'Linerless klasy podstawowej — do transportu, logistyki i poczty. Drukarki biurkowe, bezfenolowa, bez BPA/BPS.',
    positioning: 'linerless',
    material: 'papier-linerless',
    glue: 'permanentny',
    topcoat: true,
    linerless: true,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 915.04,
    accent: '#22C55E',
    seoTitle: 'ZeroLiner 1100D — linerless klasy podstawowej Zebra | bez BPA i BPS',
    seoDescription: 'Zebra ZeroLiner 1100D — bezpodkładowa etykieta termiczna klasy podstawowej. Silikonowa powłoka wierzchnia (rozmazywanie/zarysowania), klej kauczukowy, bezfenolowa, bez BPA/BPS. Do drukarek biurkowych Zebra.',
    h1: 'Etykiety termiczne Zebra ZeroLiner 1100D — linerless klasy podstawowej',
    heroIntro: 'ZeroLiner 1100D to **bezpodkładowy produkt klasy podstawowej** zaprojektowany do **standardowych zastosowań w transporcie i logistyce**. Nośnik doskonale sprawdza się w **drukarkach biurkowych Zebra** o niskim lub średnim nakładzie druku. Dobra odporność na **rozmazywanie i zarysowania** dzięki silikonowanej powłoce wierzchniej. **Bezfenolowa, bez BPA i BPS** (REACH, RoHS, EN71-3).',
    keyHighlights: [
      'Linerless klasy podstawowej — bez papierowego podkładu',
      'Silikonowana powłoka wierzchnia — odporność na rozmazywanie i zarysowania',
      'Gładki biały papier 78 µm (3,07 mil), łączna grubość **90 µm (3,5 mil)** ±10%',
      'Klej **kauczukowy (gumowy)** permanentny',
      'Bezfenolowa, **bez BPA i BPS** (BPA-free, BPS-free)',
      'Zakres pracy −10 °C do +60 °C, min. aplikacja 5 °C',
      'Rolki ciągłe — etykiety o różnych długościach bez wymiany nośnika',
    ],
    sections: [
      {
        heading: 'Czym jest ZeroLiner 1100D?',
        content:
          'ZeroLiner 1100D to **bezpodkładowy (linerless) produkt klasy podstawowej** firmy Zebra — papierowa etykieta termiczna do standardowych zastosowań w transporcie i logistyce. Materiał: gładki biały papier z powłoką silikonową **78 µm (3,07 mil)**, łączna grubość **90 µm (3,5 mil) ±10%**. Klej **kauczukowy (gumowy)** permanentny. Brak papierowego podkładu (linerless) — silikonowa powłoka na wierzchu pełni rolę antiblock.\n\nW przeciwieństwie do ZeroLiner 2000D (premium, do drukarek mobilnych), 1100D jest zaprojektowany pod **drukarki biurkowe Zebra** o niskim lub średnim nakładzie druku. **Rolki ciągłe** umożliwiają stosowanie etykiet o różnych długościach bez konieczności wymiany nośnika w drukarce.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Branże i zastosowania według Zebry:\n\n- **Sektor produkcji** — etykietowanie produkcji w toku (WIP)\n- **Logistyka** — etykiety wysyłkowe, zarządzanie zapasami i magazynami\n- **Sektor publiczny** — poczta\n- **Inne** — zastosowania niepozwalające na użycie podkładu\n\nDobra odporność na **rozmazywanie i zarysowania** (silikonowana powłoka wierzchnia) sprawia, że nadruk pozostaje czytelny podczas transportu i obsługi paczek.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Struktura materiału:\n\n- **Materiał**: gładki biały papier z powłoką silikonową, **78 µm (3,07 mil)**\n- **Klej**: permanentny **kauczukowy (gumowy)**\n- **Podkład**: brak (linerless)\n- **Łączna grubość**: **90 µm (3,5 mil) ±10%**\n- **Środowisko**: do użytku wewnątrz pomieszczeń\n\nWydajność temperaturowa:\n\n- **Min. temperatura aplikacji**: **5 °C (41 °F)**\n- **Zakres temperatury użytkowej**: **−10 °C do +60 °C** (14 °F do 140 °F)',
      },
      {
        heading: 'Zgodność i certyfikaty',
        content:
          'ZeroLiner 1100D spełnia wymogi przepisów dotyczących ograniczenia stosowania substancji niebezpiecznych: **REACH**, **RoHS**, **EN71-3 Bezpieczeństwo zabawek**, **brytyjskie przepisy dotyczące opakowań z 1998 r**.\n\nDodatkowo etykieta **nie zawiera BPA ani BPS** (BPA-free, BPS-free) — kluczowe dla aplikacji wymagających mediów termicznych bez bisfenoli (np. paragony konsumenckie po nowych regulacjach EU).',
      },
      {
        heading: 'Wymóg: drukarka biurkowa Zebra z linerless',
        content:
          'Drukarki bezpodkładowe Zebra są wyposażone w **specjalnie zaprojektowane rolki dociskowe i obcinaki** odporne na klej kauczukowy. ZeroLiner 1100D jest **rekomendowany do drukarek biurkowych** Zebra (zakres niski/średni nakład druku).\n\nModele Zebra z natywnym wsparciem linerless: ZD611 Linerless, ZD621 Linerless. Bez linerless platen rollera NIE drukuj — zniszczysz standardowy gumowy wałek w ciągu godzin.',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania: **1 rok** przy temperaturze **20–25 °C** i wilgotności względnej **40–50%**. Rolki przechowywać poniżej **35 °C**, w pomieszczeniach zamkniętych, z dala od bezpośredniego nasłonecznienia, w oryginalnym opakowaniu.\n\nPrzewidywany okres eksploatacji w zastosowaniu: **do 1 roku indoor** po prawidłowej aplikacji i dwell time ~24 h.',
      },
      {
        heading: 'Porównanie z innymi etykietami ZeroLiner',
        content:
          'Według noty Zebry dla rodziny ZeroLiner:\n\n- **ZeroLiner 1100D** — klasa podstawowa, do **drukarek biurkowych**, transport i logistyka standardowa\n- **ZeroLiner 2000D** — klasa wysoka, do **drukarek mobilnych i biurkowych**, wiele zastosowań\n- **ZeroLiner 4500D** — klasa premium, druk wysokonakładowy w trudnych warunkach, do **drukarek przemysłowych i biurkowych**',
      },
    ],
    techSpecs: [
      { label: 'Materiał wierzchni', value: 'Gładki biały papier z powłoką silikonową' },
      { label: 'Grubość facestock', value: '78 µm (3,07 mil)' },
      { label: 'Klej', value: 'Permanentny **kauczukowy (gumowy)**' },
      { label: 'Liner', value: 'Brak (linerless)' },
      { label: 'Łączna grubość', value: '90 µm (3,5 mil) ±10%' },
      { label: 'Środowisko użytkowe', value: 'Do użytku wewnątrz pomieszczeń' },
      { label: 'Min. temperatura aplikacji', value: '5 °C (41 °F)' },
      { label: 'Zakres temperatury użytkowej', value: '−10 °C do +60 °C' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Taśmy barwiące', value: 'Nie dot. (DT)' },
      { label: 'Warunki przechowywania', value: '1 rok, 20–25 °C, RH 40–50%, poniżej 35 °C' },
      { label: 'Wolny od fenolu', value: 'Tak (bezfenolowy)' },
      { label: 'BPA / BPS', value: 'Bez BPA i bez BPS' },
      { label: 'Zgodność', value: 'REACH, RoHS, EN71-3, UK Packaging Regulations 1998' },
      { label: 'Drukarki zalecane', value: 'Biurkowe Zebra (linerless) — niski/średni nakład druku' },
      { label: 'Forma', value: 'Rolki ciągłe — różne długości etykiet' },
      { label: 'Liczba wariantów', value: '1' },
    ],
    applications: [
      'Sektor produkcji — etykietowanie produkcji w toku (WIP)',
      'Logistyka — etykiety wysyłkowe',
      'Zarządzanie zapasami i magazynami',
      'Sektor publiczny — poczta',
      'Drukarki biurkowe z niskim/średnim nakładem druku',
      'Zastosowania, gdzie liner byłby utrudnieniem',
    ],
    notRecommendedFor: [
      'Drukarki bez linerless platen rollera — zniszczysz wałek',
      'Druk wysokonakładowy w trudnych warunkach — wybierz ZeroLiner 4500D',
      'Drukarki mobilne — Zebra rekomenduje 2000D do tej kategorii',
      'Aplikacja na powierzchnie <5 °C (poniżej min. temp. aplikacji)',
      'Aplikacje outdoor — produkt do użytku wewnątrz pomieszczeń',
      'Kontakt z żywnością (brak atestów BfR/FDA)',
    ],
    compatiblePrinters: {
      desktop: ['ZD611 Linerless', 'ZD621 Linerless'],
      midRange: [],
      industrial: [],
      mobile: [],
    },
    certifications: [
      { name: 'REACH', description: 'Zgodność z unijnym rozporządzeniem REACH.' },
      { name: 'RoHS', description: 'Ograniczenie stosowania substancji niebezpiecznych.' },
      { name: 'EN71-3 Bezpieczeństwo zabawek', description: 'Norma bezpieczeństwa zabawek — migracja pierwiastków.' },
      { name: 'UK Packaging Regulations 1998', description: 'Brytyjskie przepisy opakowaniowe z 1998 r.' },
      { name: 'Wolny od fenolu', description: 'Materiał bezfenolowy.' },
      { name: 'BPA-free, BPS-free', description: 'Bez bisfenolu A i bisfenolu S — kluczowe dla mediów termicznych po nowych regulacjach EU.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'zeroliner-2000d',
        whenToChooseThis: 'Wybierz ZeroLiner 1100D dla niskiej ceny i krótkiego cyklu życia (wysyłki paczkowe). ZeroLiner 2000D wybierz dla premium jakości nadruku i dłuższego życia (top-coat).',
      },
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'ZeroLiner 1100D = linerless = 2× więcej etykiet na rolce. Z-Perform 1000D = z linerem = standardowa rolka, ale 216 wariantów rozmiarowych i atesty żywnościowe.',
      },
    ],
    faq: [
      {
        question: 'Czym różni się ZeroLiner 1100D od ZeroLiner 2000D?',
        answer: '1100D nie ma powłoki top-coat — tańszy, krótszy lifespan nadruku, mniej ostry kod kreskowy. 2000D ma top-coat — droższy, do 24 mies. trwałości, ostry nadruk kodów. Wybierz 1100D dla budżetowych wysyłek paczkowych, 2000D dla premium operacji e-commerce.',
      },
      {
        question: 'Czy ZeroLiner 1100D wymaga specjalnej drukarki?',
        answer: 'Tak — wymaga drukarki z linerless platen rollerem (silikonowy, odporny na klej). Drukarki Zebra: ZD611/ZD621 Linerless, ZT411 z opcją linerless, mobilne ZQ510/520/630 Linerless. Bez linerless wałka NIE drukuj — zniszczysz standardowy gumowy wałek.',
      },
      {
        question: 'Czy ZeroLiner 1100D nadaje się do długoterminowych oznaczeń?',
        answer: 'Nie. ZeroLiner 1100D ma krótki cykl życia (do 12 mies. indoor) bo brak top-coatu. Dla etykiet trwałych wybierz ZeroLiner 2000D (do 24 mies.) lub etykiety termotransferowe.',
      },
      {
        question: 'Jakie wolumeny operacji wymagają linerless?',
        answer: 'ROI z linerless najlepiej widać dla operacji >2000 etykiet/dzień — bo wtedy oszczędność na wymianach rolki i utylizacji odpadu przewyższa wyższą cenę za rolkę. Dla <500 etykiet/dzień wybierz tańszą papierową z linerem (Z-Perform 1000D).',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  6. ZEROLINER 4500D — long-roll linerless
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'zeroliner-4500d',
    productId: 'zebra-zeroliner-4500d',
    badge: 'ZeroLiner 4500D',
    title: 'ZeroLiner 4500D',
    tagline: 'Linerless klasy premium z klejem akrylowym — druk wysokonakładowy w trudnych warunkach. Zakres pracy do +100 °C.',
    positioning: 'linerless',
    material: 'papier-linerless',
    glue: 'permanentny',
    topcoat: true,
    linerless: true,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 615.33,
    accent: '#4D7C0F',
    seoTitle: 'ZeroLiner 4500D — linerless premium Zebra z klejem akrylowym | do +100 °C',
    seoDescription: 'Zebra ZeroLiner 4500D — najwyższej jakości bezpodkładowa etykieta termiczna do drukowania dużych ilości w trudnych warunkach. Klej akrylowy, błyszczące wykończenie, zakres pracy −10 °C do +100 °C. Bezfenolowa. Drukarki przemysłowe i biurkowe Zebra.',
    h1: 'Etykiety termiczne Zebra ZeroLiner 4500D — linerless klasy premium',
    heroIntro: 'ZeroLiner 4500D to **niezawierająca fenolu, niepowlekana etykieta papierowa** z **permanentnym klejem akrylowym** i **błyszczącym wykończeniem**, **najwyższej jakości rozwiązanie w ofercie produktów linerless Zebry**. Przeznaczona do **drukowania dużych ilości i w trudnych warunkach**. Wyjątkowy zakres temperatury użytkowej: **−10 °C do +100 °C** (po dwell time ~24 h) — najszerszy w rodzinie ZeroLiner. Rekomendowana do **drukarek przemysłowych i biurkowych** Zebra.',
    keyHighlights: [
      'Klasa premium — najwyższej jakości linerless w portfolio Zebra',
      'Klej **akrylowy** permanentny (nie kauczukowy)',
      'Błyszczące wykończenie + silikonowana powłoka wierzchnia 78 µm (3 mil)',
      'Łączna grubość **96 µm (3,8 mil)** ±10%',
      '**Zakres pracy −10 °C do +100 °C** — najwyższy w rodzinie ZeroLiner',
      'Min. temperatura aplikacji: **5 °C (41 °F)**',
      'Druk wysokonakładowy w trudnych warunkach',
      'Bezfenolowa, zgodna z REACH i RoHS',
    ],
    sections: [
      {
        heading: 'Czym jest ZeroLiner 4500D?',
        content:
          'ZeroLiner 4500D to **bezpodkładowa etykieta papierowa klasy premium** Zebry — najwyższej jakości rozwiązanie w ofercie linerless. Charakteryzuje się **trwałym klejem akrylowym** (w przeciwieństwie do gumowych klejów w 1100D/2000D), błyszczącym wykończeniem i niezawieraniem fenolu. Przeznaczona do **drukowania dużych ilości i w trudnych warunkach**.\n\nMateriał: gładki biały papier z powłoką silikonową **78 µm (3 mil)**, łączna grubość **96 µm (3,8 mil) ±10%**. Klej **akrylowy** zapewnia lepszą odporność chemiczną i wyższy zakres temperatur pracy w porównaniu do klejów kauczukowych.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Branże i zastosowania według Zebry:\n\n- **Zakłady produkcyjne** — etykietowanie produkcji w toku (WIP) w warunkach przemysłowych\n- **Usługi logistyczne** — etykiety wysyłkowe, zarządzanie zapasami i magazynami\n- **Administracja publiczna** — poczta (duże wolumeny)\n- **Inne** — zastosowania niepozwalające na użycie podkładu, druk wysokonakładowy\n\nKlej akrylowy + wysoki zakres temperatur (do +100 °C) sprawiają, że 4500D jest najlepszym wyborem do trudnych warunków: hale produkcyjne z podwyższoną temperaturą, magazyny z wahaniami klimatu, druk 24/7 w sortowniach.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Struktura materiału:\n\n- **Materiał**: gładki biały papier z powłoką silikonową, **78 µm (3 mil)**\n- **Klej**: permanentny **akrylowy**\n- **Podkład**: brak (linerless)\n- **Łączna grubość**: **96 µm (3,8 mil) ±10%**\n- **Środowisko**: do użytku wewnątrz pomieszczeń\n\nWydajność temperaturowa:\n\n- **Min. temperatura aplikacji**: **5 °C (41 °F)**\n- **Zakres temperatury użytkowej**: **−10 °C do +100 °C** (14 °F do 212 °F) — wyjątkowo wysoki górny zakres dzięki klejowi akrylowemu',
      },
      {
        heading: 'Zgodność i certyfikaty',
        content:
          'ZeroLiner 4500D spełnia wymogi **REACH** i **RoHS** oraz **nie zawiera fenolu** (bezfenolowy).\n\nUWAGA: 4500D nie ma atestów żywnościowych (BfR XIV, FDA itp.). Dla aplikacji wymagających kontaktu z żywnością wybierz Z-Select 2000D lub Z-Perform 1000D.',
      },
      {
        heading: 'Wymóg: drukarka przemysłowa lub biurkowa Zebra',
        content:
          'ZeroLiner 4500D jest **rekomendowany do drukarek przemysłowych i biurkowych** Zebra — to klasa premium projektowana pod druk wysokonakładowy. Drukarki przemysłowe są zazwyczaj stosowane w trudnych środowiskach roboczych, w których najważniejsze są **prędkość i powtarzalność oraz ograniczenie liczby przestojów** — co idealnie wpisuje się w profil 4500D.\n\nPodobnie jak inne ZeroLiner, wymaga **linerless platen rollera** (specjalnie zaprojektowanego wałka i obcinaka odpornego na klej). Standardowy gumowy wałek zostanie zniszczony przez klej akrylowy.',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania: **1 rok** przy temperaturze **20–25 °C** i wilgotności względnej **40–50%**. Rolki przechowywać w pomieszczeniach zamkniętych, z dala od bezpośredniego nasłonecznienia, w oryginalnym opakowaniu. Przechowywanie w wyższych temperaturach lub większej wilgotności może wpłynąć na właściwości użytkowe produktu.\n\nPrzewidywany okres eksploatacji w zastosowaniu: **do 1 roku indoor** po prawidłowej aplikacji i dwell time ~24 h.',
      },
    ],
    techSpecs: [
      { label: 'Materiał wierzchni', value: 'Gładki biały papier z powłoką silikonową' },
      { label: 'Grubość facestock', value: '78 µm (3 mil)' },
      { label: 'Klej', value: 'Permanentny **akrylowy**' },
      { label: 'Liner', value: 'Brak (linerless)' },
      { label: 'Łączna grubość', value: '96 µm (3,8 mil) ±10%' },
      { label: 'Środowisko użytkowe', value: 'Do użytku wewnątrz pomieszczeń' },
      { label: 'Min. temperatura aplikacji', value: '5 °C (41 °F)' },
      { label: 'Zakres temperatury użytkowej', value: '−10 °C do +100 °C' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Taśmy barwiące', value: 'Nd. (DT)' },
      { label: 'Warunki przechowywania', value: '1 rok, 20–25 °C, RH 40–50%' },
      { label: 'Wolny od fenolu', value: 'Tak (bezfenolowy)' },
      { label: 'Zgodność', value: 'REACH, RoHS' },
      { label: 'Drukarki zalecane', value: 'Przemysłowe i biurkowe Zebra (linerless)' },
      { label: 'Klasa', value: 'Premium (najwyższa w rodzinie ZeroLiner)' },
      { label: 'Liczba wariantów', value: '2' },
    ],
    applications: [
      'Zakłady produkcyjne — etykietowanie produkcji w toku (WIP)',
      'Usługi logistyczne — etykiety wysyłkowe',
      'Zarządzanie zapasami i magazynami',
      'Administracja publiczna — poczta',
      'Druk wysokonakładowy w trudnych warunkach',
      'Drukarki przemysłowe Zebra (sortownie, fulfillment, 24/7)',
      'Zastosowania bez podkładu (zero odpadu)',
    ],
    notRecommendedFor: [
      'Drukarki bez linerless platen rollera — zniszczysz wałek',
      'Aplikacje outdoor — produkt do użytku wewnątrz pomieszczeń',
      'Aplikacja na powierzchnie <5 °C (poniżej min. temp. aplikacji)',
      'Etykiety w kontakcie z żywnością (brak atestów BfR/FDA)',
      'Drukarki mobilne — Zebra rekomenduje 2000D do mobilnych',
    ],
    compatiblePrinters: {
      desktop: ['ZD611 Linerless', 'ZD621 Linerless'],
      midRange: [],
      industrial: ['ZT411 (z opcją linerless)', 'ZT421 (z opcją linerless)', 'ZT510', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'REACH', description: 'Zgodność z unijnym rozporządzeniem REACH.' },
      { name: 'RoHS', description: 'Ograniczenie stosowania substancji niebezpiecznych.' },
      { name: 'Wolny od fenolu', description: 'Materiał bezfenolowy.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'zeroliner-2000d',
        whenToChooseThis: 'Wybierz ZeroLiner 4500D dla maksymalnej długości nawoju (bardzo wysokie wolumeny, automatyczne linie). ZeroLiner 2000D dla standardowych operacji e-commerce z drukarką desktop/mid-range.',
      },
      {
        seriesSlug: 'zeroliner-1100d',
        whenToChooseThis: 'ZeroLiner 4500D ma top-coat (premium, do 24 mies.) i dłuższą rolkę dla wysokich wolumenów. ZeroLiner 1100D to budżetowy linerless bez top-coatu, krótszy lifespan.',
      },
    ],
    faq: [
      {
        question: 'Do jakich drukarek pasuje ZeroLiner 4500D?',
        answer: 'Tylko industrialne z linerless platen rollerem i miejscem na dużą rolkę: ZT411/ZT421 z opcją linerless, ZT510/ZT610/ZT620. Desktopowe NIE mieszczą rolki 4500D (mniejszy OD). Sprawdź konfigurację swojej drukarki przed zamówieniem.',
      },
      {
        question: 'Czy ZeroLiner 4500D ma sens dla małych operacji?',
        answer: 'Nie. Dla wolumenów <5000 etykiet/dzień wybierz ZeroLiner 2000D (mniejsza rolka, działa w desktopach) lub ZeroLiner 1100D (taniej). 4500D ma sens tylko gdy chcesz maksymalnie zminimalizować wymiany rolki (sortownie 20 000+ etykiet/zmianę).',
      },
      {
        question: 'Ile etykiet mieści rolka ZeroLiner 4500D?',
        answer: 'Zależy od rozmiaru etykiety, ale typowo do 4× więcej niż etykieta z linerem o tej samej OD. Dla popularnego rozmiaru 102×152 mm (etykieta wysyłkowa A6): ok. 1500-2000 etykiet vs 500-700 standardowo.',
      },
      {
        question: 'Czy ZeroLiner 4500D ma top-coat?',
        answer: 'Tak — w przeciwieństwie do 1100D, 4500D ma powłokę top-coat. Zapewnia ostry nadruk kodów kreskowych premium i do 24 mies. trwałości indoor.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  7. Z-SELECT 2000D REMOVABLE — premium z klejem zdejmowalnym
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-select-2000d-removable',
    productId: 'zebra-z-select-2000d-removable',
    badge: 'Z-Select 2000D Removable',
    title: 'Z-Select 2000D Removable',
    tagline: 'Premium z **klejem gumowym zdejmowalnym** + atestami żywnościowymi BfR XIV / FDA. Cold Temp + Deep Freeze. −40 °C do +50 °C.',
    positioning: 'zdejmowalna',
    material: 'papier-powlekany',
    glue: 'zdejmowalny',
    topcoat: true,
    linerless: false,
    perforation: false,
    foodSafe: true,
    outdoor: false,
    priceFrom: 914.61,
    accent: '#A855F7',
    seoTitle: 'Z-Select 2000D Removable — premium etykieta z klejem gumowym zdejmowalnym | BfR XIV',
    seoDescription: 'Zebra Z-Select 2000D Removable — premium powlekana etykieta termiczna z klejem gumowym zdejmowalnym. Atesty żywnościowe BfR XIV, FDA 175.105, EC 1935/2004, EU 10/2011. BPA-free, latex-free. Zakres −40 °C do +50 °C.',
    h1: 'Etykiety termiczne Zebra Z-Select 2000D Removable',
    heroIntro: 'Z-Select 2000D Removable to **premium powlekana (topcoated) etykieta termiczna** Zebra z **klejem gumowym zdejmowalnym** (removable rubber adhesive). Top-coat zapewnia ostry druk, odporność na wilgoć, oleje i czynniki środowiskowe. Klej odkleja się czysto z różnych podłoży — **bez pozostałości**. Wyjątkowy zakres pracy: **−40 °C do +50 °C** z **min. aplikacją −20 °C** (Cold Temperature + Deep Freeze). Pełen pakiet **atestów żywnościowych**: BfR XIV, EC 1935/2004, EU 10/2011, FDA 175.105. BPA-free, latex-free.',
    keyHighlights: [
      'Klej **gumowy zdejmowalny** (NIE akrylowy) — odkleja bez śladu',
      'Powłoka **top-coat** — ostry nadruk, odporność na wilgoć i oleje',
      'Zakres pracy **−40 °C do +50 °C** | min. aplikacja **−20 °C**',
      '**Cold Temperature + Deep Freeze** — chłodnie i mroźnie',
      'Atesty żywnościowe: **BfR XIV, EC 1935/2004, EU 10/2011, FDA 175.105** (dry + moist non-fatty foods)',
      'BPA-free, latex-free adhesive',
      'Trwałość przyczepności: do 1 roku indoor',
      'Drukarki: mobilne, desktop, mid-range, high-performance Zebra',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Select 2000D Removable?',
        content:
          'Z-Select 2000D Removable to **powlekana (topcoated) etykieta termiczna z klejem gumowym zdejmowalnym** (removable rubber adhesive). Powłoka **top-coat** zapewnia istotne korzyści vs nośnik niepowlekany (np. Z-Perform): doskonała jakość druku i ostrość, **wyższe prędkości druku**, **dłuższa żywotność głowicy** oraz **odporność na wilgoć, oleje i inne czynniki środowiskowe**.\n\nKonstrukcja materiału: facestock matte white topcoated paper **81 µm**, removable rubber adhesive **18 µm**, glassine liner **57 g/m² (51 µm)**, łączna grubość **150 µm ±10%**. **Superior removability** — odkleja się bez pozostałości kleju na różnorodnych podłożach.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Zastosowania według Zebry:\n\n- **Zdejmowalne etykiety cenowe w handlu detalicznym**\n- **Zdejmowalne etykiety półkowe**\n- **Identyfikacja produktów**\n- **Zdejmowalne etykiety na opakowaniach** — kartony, palety, pojemniki wielokrotne w magazynach\n\nKluczowa różnica vs zwykłe etykiety zdejmowalne: **klej ma doskonałą odporność na niskie temperatury** — sprawdza się w chłodniach i mroźniach głębokich.',
      },
      {
        heading: 'Atesty żywnościowe i bezpieczeństwo materiału',
        content:
          'Klej Z-Select 2000D Removable ma pełen pakiet atestów żywnościowych Zebra:\n\n- **EC 1935/2004 + EU 10/2011 + BfR Recommendation XIV** — dla **bezpośredniego kontaktu z żywnością suchą i wilgotną nieoleistą** (direct contact with dry and moist, non-fatty foodstuffs)\n- **FDA 175.105** — dla bezpośredniego kontaktu z żywnością suchą (direct contact with dry foodstuffs)\n\nDodatkowo:\n\n- **BPA free** — bez bisfenolu A\n- **Latex free adhesive** — bez lateksu, przyjazne dla alergików\n\nWyróżnia tę serię od większości removable na rynku — pełne compliance HACCP/EHEDG.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Struktura materiału:\n\n- **Facestock**: matte white topcoated paper, **81 µm**\n- **Adhesive**: removable rubber adhesive, **18 µm**\n- **Liner**: 57 g/m² glassine liner, **51 µm**\n- **Total**: **150 µm ±10%**\n\nWydajność temperaturowa:\n\n- **Minimum Application Temperature**: **−20 °C** (otoczenie + powierzchnia)\n- **Service Temperature Range**: **−40 °C do +50 °C** (po dwell time ~24 h)\n\nProperties (Cold Temperature + Deep Freeze) — etykieta przystosowana do chłodni i mroźni.',
      },
      {
        heading: 'Kompatybilność z drukarkami Zebra',
        content:
          'Zalecane drukarki Zebra: **mobile, desktop, mid-range i high-performance thermal printers** — pełna gama drukarek DT Zebra (mobilne ZQ511/521/610/620/630, desktop ZD220d-ZD621d, mid-range ZD611/ZT231, industrial ZT411/421/510/610/620).\n\nDruk **Direct Thermal** — bez taśmy barwiącej (Ribbon Required: No). Tylko jedna pozycja w magazynie (No ribbon required — only one stock item needed).',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Recommended Storage Conditions: **6 miesięcy** przy temperaturze **20–25 °C** i wilgotności względnej **40–50%**.\n\nExpected Life Span in Application: **indoor use, for up to 1 year** (po prawidłowej aplikacji i dwell time ~24 h).',
      },
      {
        heading: 'Próbki przed zakupem',
        content:
          'Numery próbek Zebra dostępne w programie ZipShip:\n\n- **SAMPLE5648** — dla drukarek mid-range/industrial/high-performance\n- **SAMPLE5648-D** — dla drukarek desktopowych\n\nW TAKMA pomagamy dobrać próbkę pod konkretną drukarkę i powierzchnię docelową — zalecamy 24-godzinny test przyczepności i odklejenia w realnych warunkach operacyjnych przed dużym zamówieniem.',
      },
    ],
    techSpecs: [
      { label: 'Facestock', value: 'Matte white topcoated paper, 81 µm' },
      { label: 'Klej', value: 'Removable **rubber** adhesive, 18 µm' },
      { label: 'Liner', value: '57 g/m² glassine liner, 51 µm' },
      { label: 'Łączna grubość', value: '150 µm ±10%' },
      { label: 'Środowisko', value: 'Indoor' },
      { label: 'Material Type', value: 'Paper' },
      { label: 'Printing Technology', value: 'Direct Thermal (no ribbon required)' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Properties', value: 'Cold Temperature, Deep Freeze' },
      { label: 'Min. temperatura aplikacji', value: '−20 °C' },
      { label: 'Zakres temperatur pracy', value: '−40 °C do +50 °C' },
      { label: 'Warunki przechowywania', value: '6 mies., 20–25 °C, RH 40–50%' },
      { label: 'Okres eksploatacji', value: 'Indoor — do 1 roku' },
      { label: 'Atesty żywnościowe', value: 'BfR XIV, EC 1935/2004, EU 10/2011, FDA 175.105' },
      { label: 'BPA / lateks', value: 'BPA-free, latex-free' },
      { label: 'Numer próbki (mid-range/industrial)', value: 'SAMPLE5648' },
      { label: 'Numer próbki (desktop)', value: 'SAMPLE5648-D' },
      { label: 'Liczba wariantów', value: '4' },
    ],
    applications: [
      'Zdejmowalne etykiety cenowe w handlu detalicznym',
      'Zdejmowalne etykiety półkowe',
      'Identyfikacja produktów',
      'Zdejmowalne etykiety na opakowaniach (kartony, palety, pojemniki wielokrotne)',
      'Chłodnia i mroźnia (zakres temperatur z mroźniami głębokimi)',
      'Produkty wracające do magazynu (zwroty e-commerce)',
      'Etykiety w kontakcie z żywnością (BfR XIV, FDA 175.105)',
    ],
    notRecommendedFor: [
      'Etykiety permanentne — wybierz Z-Select 2000D standardową',
      'Aplikacja na powierzchnie <−20 °C (poniżej min. temp. aplikacji)',
      'Temperatury >+50 °C — wybierz termotransfer (Z-Ultimate)',
      'Powierzchnie zatłuszczone, brudne — klej removable słabo trzyma',
      'Aplikacje outdoor — produkt indoor',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['ZQ511', 'ZQ521', 'ZQ610', 'ZQ620', 'ZQ630'],
    },
    certifications: [
      { name: 'BfR Recommendation XIV', description: 'Federalna rekomendacja niemiecka dla klejów w kontakcie z żywnością suchą i wilgotną nieoleistą.' },
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów kontaktujących się z żywnością.' },
      { name: 'EU 10/2011', description: 'Szczegółowe wymogi dla tworzyw sztucznych w kontakcie z żywnością.' },
      { name: 'FDA 175.105', description: 'Amerykańska Agencja Żywności i Leków — bezpośredni kontakt z żywnością suchą.' },
      { name: 'BPA-free', description: 'Bez bisfenolu A.' },
      { name: 'Latex-free adhesive', description: 'Klej bez lateksu — bezpieczny dla alergików.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-select-2000d',
        whenToChooseThis: 'Wybierz Z-Select 2000D Removable gdy etykieta MA się zdjąć (ekspozycje, promocje, inwentaryzacja). Z-Select 2000D standardowa dla etykiet permanentnych.',
      },
      {
        seriesSlug: 'z-perform-1000d-removable',
        whenToChooseThis: 'Z-Select 2000D Removable ma top-coat (lepsza jakość nadruku, premium retail). Z-Perform 1000D Removable bez top-coatu — taniej, do prostszych zastosowań tymczasowych.',
      },
    ],
    faq: [
      {
        question: 'Czy klej removable zostawia ślad po odklejeniu?',
        answer: 'Nie — to główna cecha klejów removable. Etykieta odkleja się czysto, bez pozostałości kleju ani uszkodzenia powierzchni. Bezpieczne dla szkła, lakieru, papieru, plastiku. Po odklejeniu powierzchnia wygląda jak przed naklejeniem etykiety.',
      },
      {
        question: 'Jak długo trzyma klej removable?',
        answer: 'Do 6 miesięcy w warunkach indoor. Po tym czasie klej może wysychać i etykieta odpadać samoczynnie. To celowa cecha — kompromis dla możliwości czystego odklejenia. Dla ekspozycji 1-3 miesiące idealnie. Dla dłuższych — wybierz permanentną Z-Select 2000D.',
      },
      {
        question: 'Czy można aplikować Z-Select 2000D Removable w chłodni?',
        answer: 'Minimalna temperatura aplikacji to +5 °C — wyższa niż dla standardowej Z-Select 2000D (0 °C). To wynika z natury klejów removable — potrzebują wyższej temp. do prawidłowego rozprowadzenia. Dla chłodni wybierz wariant All-Temp lub Z-Select 2000D standardową.',
      },
      {
        question: 'Czy Z-Select 2000D Removable trzyma na zatłuszczonych powierzchniach?',
        answer: 'Słabo. Klej removable ma niższą siłę przyczepności niż permanentny — łatwiej traci kontakt z brudem, kurzem, tłuszczem. Przed aplikacją wytrzyj powierzchnię izopropanolem lub środkiem odtłuszczającym. Dla zatłuszczonych powierzchni wybierz permanentny klej lub etykietę high-tack.',
      },
      {
        question: 'Czy można drukować Z-Select 2000D Removable w tej samej drukarce co standardową?',
        answer: 'Tak — używaj tej samej drukarki Zebra DT. Czasami trzeba lekko zmniejszyć "darkness" (temp. głowicy) o 1 stopień — klej removable ma cieńsze warstwy. Zacznij od ustawień jak dla Z-Select 2000D standardowej i dostosuj jeśli nadruk jest zbyt ciemny.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  8. Z-PERFORM 1000D REMOVABLE — ekonomiczna z klejem zdejmowalnym
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-perform-1000d-removable',
    productId: 'zebra-z-perform-1000d-removable',
    badge: 'Z-Perform 1000D Removable',
    title: 'Z-Perform 1000D Removable',
    tagline: 'Ekonomiczna niepowlekana z **klejem gumowym zdejmowalnym**, BPA-free, atest FDA 175.105 + EC 1935/2004 (suche/niem-tłuste). Zakres −10 °C do +70 °C.',
    positioning: 'zdejmowalna',
    material: 'papier-niepowlekany',
    glue: 'zdejmowalny',
    topcoat: false,
    linerless: false,
    perforation: false,
    foodSafe: true,
    outdoor: false,
    priceFrom: 620.49,
    accent: '#C026D3',
    seoTitle: 'Z-Perform 1000D Removable — ekonomiczna etykieta DT z klejem gumowym zdejmowalnym',
    seoDescription: 'Zebra Z-Perform 1000D Removable — niepowlekana etykieta termiczna z klejem gumowym zdejmowalnym. ISEGA, EC 1935/2004, EU 10/2011, FDA 175.105 (dry + non-fatty). BPA-free. 18 wariantów.',
    h1: 'Etykiety termiczne Zebra Z-Perform 1000D Removable',
    heroIntro: 'Z-Perform 1000D Removable to **adaptowalne i niezawodne rozwiązanie** dla różnorodnych zastosowań indoor wymagających **czystego odklejenia**. Facestock **matte white uncoated** thermal imaging paper **66 µm**, **removable rubber adhesive 13 µm**, glassine liner 60 g/m² 47 µm, total **126 µm ±10%**. **BPA-free face stock**, klej zgodny z **EC 1935/2004, EU 10/2011, FDA 175.105** dla kontaktu z żywnością suchą i niem-tłustą. ISEGA approval. Zakres pracy: **−10 °C do +70 °C**, min. aplikacja **+5 °C**.',
    keyHighlights: [
      'Direct thermal — bez taśmy barwiącej',
      'Klej **gumowy zdejmowalny** (NIE akrylowy) — czyste odklejenie',
      'Atesty kleju: **EC 1935/2004, EU 10/2011, FDA 175.105** (dry + non-fatty food)',
      '**ISEGA approval** — niemiecki certyfikat żywnościowy',
      '**BPA-free face stock**',
      'Matte finish + Cold Temperature property',
      'Zakres pracy **−10 °C do +70 °C**, min. aplikacja **+5 °C**',
      'Trwałość przyczepności: do 1 roku indoor',
      '18 wariantów rozmiarowych',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Perform 1000D Removable?',
        content:
          'Z-Perform 1000D Removable to **bardzo adaptowalne i niezawodne rozwiązanie etykietowe** zaprojektowane dla różnorodnych zastosowań indoor wymagających **czystego odklejenia (clean removability) i wyjątkowej wydajności**. Jako papierowa etykieta direct thermal nie wymaga taśm barwiących, co usprawnia operacje. **Matte finish, cold temperature capability i BPA-free face stock** odzwierciedlają przemyślaną konstrukcję spełniającą wymogi nowoczesnego etykietowania.\n\nKlej zaprojektowany dla **tymczasowych potrzeb etykietowania** — zapewnia mocną przyczepność do szerokiej gamy powierzchni przy gwarancji **odklejenia bez pozostałości (residue-free removal)**.',
      },
      {
        heading: 'Główne zastosowania (Markets and Applications)',
        content:
          'Według Zebry:\n\n- **Etykietowanie ogólnego zastosowania wewnątrz pomieszczeń** (w tym etykiety do żywności)\n- **Etykietowanie większości materiałów opakowaniowych**\n- **Zdejmowalne etykiety półkowe, produktowe i cenowe** w handlu detalicznym\n- **Identyfikacja produktów**\n- **Etykietowanie produkcji w toku** (WIP)\n- **Zdejmowalne etykiety na kartony, palety, półki i pojemniki wielokrotne**\n\nIdealnie pasuje do aplikacji takich jak etykiety retailowe, opakowania spożywcze i inne ogólnego przeznaczenia.',
      },
      {
        heading: 'Atesty żywnościowe',
        content:
          'Atesty kleju Z-Perform 1000D Removable:\n\n- **EC 1935/2004** — unijne rozporządzenie ramowe\n- **EU 10/2011** — wymogi dla tworzyw kontaktujących się z żywnością\n- **FDA 175.105** — bezpośredni kontakt z żywnością suchą i niem-tłustą (dry and non-fatty foodstuffs)\n- **ISEGA approval** — niemiecki certyfikat dla materiałów żywnościowych\n\nDodatkowo: **BPA-free face stock**. Spełnia wymogi stringent safety requirements dla aplikacji w kontakcie z żywnością.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Material Construction:\n\n- **Facestock**: matte white uncoated thermal imaging paper, **66 µm**\n- **Adhesive**: removable rubber adhesive, **13 µm**\n- **Liner**: 60 g/m² glassine liner, **47 µm**\n- **Total Thickness**: **126 µm ±10%**\n- **Environment**: Indoor Use\n\nTemperature Performance:\n\n- **Minimum Application Temperature**: **+5 °C (41 °F)**\n- **Service Temperature Range**: **−10 °C do +70 °C** (14 °F do 158 °F)',
      },
      {
        heading: 'Kiedy NIE używać Z-Perform 1000D Removable',
        content:
          'Zebra wyraźnie wskazuje, że etykieta **nie jest rekomendowana** dla warunków obejmujących:\n\n- **Prolonged exposure to sunlight** (długotrwałe wystawienie na słońce)\n- **Extreme heat** (skrajne ciepło)\n- **PVC surfaces** (powierzchnie PVC — klej może migrować plastyfikatory)\n\nW takich warunkach wydajność etykiety może być pogorszona. Dla outdoor lub powierzchni PVC wybierz syntetyczną etykietę (np. PolyPro 4000D).',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Recommended Storage Conditions: **6 miesięcy** przy **20 °C** i wilgotności względnej **50%**.\n\nExpected Life Span in Application: **indoor use, for up to 1 year** (po prawidłowej aplikacji i dwell time ~24 h).',
      },
      {
        heading: 'Próbki przed zakupem',
        content:
          'Numer próbki Zebra: **SAMPLE40762** (dostępna w programie ZipShip). W TAKMA pomagamy dobrać próbkę pod Twoją drukarkę i powierzchnię docelową — zalecamy test przyczepności i odklejenia w realnych warunkach przed dużym zamówieniem.',
      },
    ],
    techSpecs: [
      { label: 'Facestock', value: 'Matte white uncoated thermal imaging paper, 66 µm' },
      { label: 'Klej', value: 'Removable **rubber** adhesive, 13 µm' },
      { label: 'Liner', value: '60 g/m² glassine liner, 47 µm' },
      { label: 'Łączna grubość (Total Thickness)', value: '126 µm ±10%' },
      { label: 'Środowisko', value: 'Indoor use' },
      { label: 'Printing Technology', value: 'Direct Thermal (no ribbon required)' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Min. temperatura aplikacji', value: '+5 °C (41 °F)' },
      { label: 'Zakres temperatur pracy', value: '−10 °C do +70 °C' },
      { label: 'Warunki przechowywania', value: '6 mies., 20 °C, RH 50%' },
      { label: 'Okres eksploatacji', value: 'Indoor — do 1 roku' },
      { label: 'Atesty kleju', value: 'EC 1935/2004, EU 10/2011, FDA 175.105' },
      { label: 'Dodatkowe', value: 'ISEGA approval, BPA-free face stock' },
      { label: 'Numer próbki', value: 'SAMPLE40762' },
      { label: 'Liczba wariantów', value: '18' },
    ],
    applications: [
      'Etykietowanie ogólnego zastosowania wewnątrz pomieszczeń, w tym etykiety do żywności',
      'Etykietowanie większości materiałów opakowaniowych',
      'Zdejmowalne etykiety półkowe, produktowe i cenowe w handlu detalicznym',
      'Identyfikacja produktów',
      'Etykietowanie produkcji w toku (WIP)',
      'Zdejmowalne etykiety na kartony, palety, półki i pojemniki wielokrotne',
    ],
    notRecommendedFor: [
      'Prolonged exposure to sunlight (długotrwałe słońce)',
      'Extreme heat (skrajne temperatury)',
      'PVC surfaces (powierzchnie PVC)',
      'Aplikacje outdoor — produkt indoor',
      'Aplikacja na powierzchnie <+5 °C (poniżej min. temp. aplikacji)',
      'Powierzchnie zatłuszczone, brudne — klej removable słabo trzyma',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów kontaktujących się z żywnością.' },
      { name: 'EU 10/2011', description: 'Szczegółowe wymogi dla tworzyw sztucznych w kontakcie z żywnością.' },
      { name: 'FDA 175.105', description: 'Direct contact with dry and non-fatty foodstuffs.' },
      { name: 'ISEGA approval', description: 'Niemiecki certyfikat dla materiałów w kontakcie z żywnością.' },
      { name: 'BPA-free face stock', description: 'Facestock bez bisfenolu A.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-select-2000d-removable',
        whenToChooseThis: 'Wybierz Z-Perform 1000D Removable dla budżetowych zastosowań tymczasowych. Z-Select 2000D Removable dla retail premium z drobnym kodem 2D (lepsza jakość nadruku, top-coat).',
      },
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Z-Perform 1000D Removable ma klej zdejmowalny — etykieta odkleja się bez śladu. Z-Perform 1000D standardowa ma klej permanentny — etykieta trzyma się stabilnie, trzeba ją zedrzeć.',
      },
    ],
    faq: [
      {
        question: 'Czy Z-Perform 1000D Removable jest tańsza od Z-Select Removable?',
        answer: 'Tak — bo nie ma powłoki top-coat. Z-Perform Removable to budżetowa wersja klejów zdejmowalnych Zebra. Wadą jest krótszy lifespan nadruku i niższa jakość kodów kreskowych 2D. Zalety: tańsza i 18 wariantów rozmiarowych (vs 4 dla Z-Select Removable).',
      },
      {
        question: 'Jak długo trzyma klej Z-Perform 1000D Removable?',
        answer: 'Do 6 miesięcy w warunkach indoor — tak samo jak Z-Select Removable. Klej jest ten sam (akrylowy zdejmowalny), różnica jest tylko w facestocku (papier niepowlekany vs powlekany).',
      },
      {
        question: 'Czy Z-Perform 1000D Removable nadaje się do drobnego nadruku?',
        answer: 'Słabiej niż Z-Select Removable. Bez top-coatu nadruk jest mniej ostry — kody 1D ok, ale kody 2D Data Matrix lub QR z gęstym wzorem mogą być słabo czytelne. Dla precyzyjnego skanowania kodów 2D wybierz Z-Select 2000D Removable.',
      },
      {
        question: 'Czy mogę używać Z-Perform 1000D Removable na produktach prezentacyjnych?',
        answer: 'Tak — to typowe zastosowanie. Klej removable odkleja się bez śladu, więc produkt po ekspozycji nadaje się do sprzedaży lub powrotu do magazynu bez czyszczenia. Idealnie dla showroomów, targów, ekspozycji okresowych.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  9. Z-PERFORM 1000D 110 TAG — perforowane paski
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-perform-1000d-110-tag',
    productId: 'zebra-z-perform-1000d-110-tag',
    badge: '110 Tag',
    title: 'Z-Perform 1000D 110 Tag',
    tagline: 'Papierowy tag bez kleju (104 g/m², 112 µm) do archiwizacji — do 5 lat indoor, **12 lat w warunkach archiwalnych**. Dobra odporność na blaknięcie. BPA-free.',
    positioning: 'specjalna',
    material: 'papier-niepowlekany',
    glue: 'brak',
    topcoat: false,
    linerless: false,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 1372.56,
    accent: '#F59E0B',
    seoTitle: 'Z-Perform 1000D 110 Tag — papierowy tag DT bez kleju Zebra | archiwizacja 12 lat',
    seoDescription: 'Zebra Z-Perform 1000D 110 Tag — papierowy tag DT bez kleju, 104 g/m², 112 µm. Dobra odporność na blaknięcie. Do 5 lat indoor / 12 lat archive. BPA-free.',
    h1: 'Etykiety termiczne Zebra Z-Perform 1000D 110 Tag',
    heroIntro: 'Z-Perform 1000D 110 Tag to **papierowy tag bez kleju (No Adhesive)** w technologii direct thermal — facestock **104 g/m² matte white uncoated thermal imaging paper o grubości 112 µm**, łączna grubość rolki **112 µm ±7%**. **Suitable for archive applications** — przy prawidłowym druku, obsłudze i przechowywaniu **drukowane obrazy pozostaną czytelne przez 12 lat** (Archive Conditions). **Dobra odporność na blaknięcie obrazu**. **BPA-free**.',
    keyHighlights: [
      'Tag — Media Type: Tag, **No Adhesive** (bez kleju)',
      'Facestock **104 g/m² matte white uncoated thermal imaging paper, 112 µm**',
      'Łączna grubość 112 µm ±7%',
      'Druk Direct Thermal — bez taśmy barwiącej',
      '**Suitable for archive applications** — do 12 lat (Archive Conditions)',
      'Indoor use: do 1 roku | Indoor archive: do 5 lat',
      'Good resistance to image fading',
      '**BPA Free**',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Perform 1000D 110 Tag?',
        content:
          'Z-Perform 1000D 110 Tag to **papierowy tag bez kleju (No Adhesive) w technologii direct thermal**. Materiał: **104 g/m² matte white uncoated thermal imaging paper, 112 µm**, łączna grubość rolki **112 µm ±7%**. Tag — w przeciwieństwie do etykiety samoprzylepnej — nie ma kleju na spodniej stronie; przyczepia się mechanicznie (zszywka, dziurka, sznurek) lub jest używany jako paragon/identyfikator.\n\nKluczowa cecha: **dobra odporność na blaknięcie obrazu (good resistance to image fading)** — odpowiedni dla archive applications.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Według Zebry:\n\n- **Retail shelf edge labelling** — etykiety półkowe w retailu\n- **High quality receipts or tickets** — paragony i bilety wysokiej jakości\n- **Passenger public transport tickets** — bilety komunikacji publicznej\n- **Visitor identification tags** — identyfikatory dla gości (konferencje, eventy)\n- **Packing inserts** — wkładki do paczek\n- **Pallet tags and shop floor inventory tracking** — tagi paletowe, śledzenie zapasów w sklepie\n\nUWAGA Zebra: **Z-Perform 1000D 110 Tag NIE jest rekomendowany dla długotrwałego wystawienia na słońce lub skrajne ciepło**.',
      },
      {
        heading: 'Trwałość archiwalna (Archive Conditions)',
        content:
          'Zebra deklaruje (ale nie gwarantuje) trwałość drukowanego obrazu **do 12 lat** przy przechowywaniu w specyficznych warunkach archiwalnych:\n\n- **Temperatura 18–24 °C, wilgotność względna 40–60%**\n- Długotrwałe przechowywanie >40 °C lub >60% RH może zmniejszyć kontrast\n- **Przechowywanie w ciemności** — bez słońca, świetlówek i innych źródeł UV\n\nProdukt NIE powinien stykać się z:\n\n- Papierami węglowymi i samokopiującymi (carbon i carbonless forms)\n- Papierami i klejami zawierającymi fosforany tributylu, dibutylu lub inne rozpuszczalniki organiczne\n- Kopertami i teczkami z plastiku z plastyfikatorami\n- Rozpuszczalnikami (w tym alkoholem)\n- Materiałami przebarwiającymi (PVC z plastyfikatorami)\n\nW warunkach standardowych indoor: **do 1 roku** czytelności, **indoor archive do 5 lat**.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Material Construction:\n\n- **Facestock**: 104 g/m² matte white uncoated thermal imaging paper, **112 µm**\n- **Total**: **112 µm ±7%** (uwaga: ±7%, nie ±10% jak inne)\n- **Adhesive**: brak (No Adhesive)\n- **Liner**: brak\n\nTemperature Performance:\n\n- **Minimum Application Temperature**: N/A (brak kleju)\n- **Service Temperature Range**: **−5 °C do +49 °C** (dla archive applications — patrz Archive Conditions)\n\nMedia Type: Tag. Material Type: Paper. Printing Technology: Direct Thermal (no Ribbon Required). Finish: Matte.',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Recommended Storage Conditions: **6 miesięcy** przy temperaturze **18–25 °C** i wilgotności **40–60%**.\n\nExpected Life Span in Application:\n\n- **Indoor use, up to 1 year**\n- **Indoor archive use, up to 5 years**\n- **Up to 12 years** w warunkach archiwalnych (patrz Archive Conditions powyżej)',
      },
      {
        heading: 'Próbki przed zakupem',
        content:
          'Numer próbki Zebra: **SAMPLE30818** (dostępna w programie ZipShip). W TAKMA pomagamy dobrać próbkę pod Twoją drukarkę i zastosowanie — szczególnie polecane dla aplikacji archiwalnych (testy fading w realnym świetle).',
      },
    ],
    techSpecs: [
      { label: 'Facestock', value: '104 g/m² matte white uncoated thermal imaging paper, 112 µm' },
      { label: 'Łączna grubość (Total)', value: '112 µm ±7%' },
      { label: 'Klej', value: 'BRAK (No Adhesive)' },
      { label: 'Media Type', value: 'Tag' },
      { label: 'Material Type', value: 'Paper' },
      { label: 'Printing Technology', value: 'Direct Thermal (no ribbon required)' },
      { label: 'Finish', value: 'Matte' },
      { label: 'Min. temperatura aplikacji', value: 'N/A' },
      { label: 'Zakres temperatur pracy', value: '−5 °C do +49 °C' },
      { label: 'Warunki przechowywania', value: '6 mies., 18–25 °C, RH 40–60%' },
      { label: 'Okres eksploatacji indoor', value: 'Do 1 roku' },
      { label: 'Okres eksploatacji indoor archive', value: 'Do 5 lat' },
      { label: 'Archive Conditions (specyficzne)', value: 'Do 12 lat (18–24 °C, RH 40–60%, ciemność)' },
      { label: 'Odporność na blaknięcie', value: 'Good resistance to image fading' },
      { label: 'BPA Free', value: 'Tak' },
      { label: 'Numer próbki', value: 'SAMPLE30818' },
      { label: 'Liczba wariantów', value: '1' },
    ],
    applications: [
      'Etykiety półkowe w handlu detalicznym',
      'Paragony i bilety wysokiej jakości',
      'Bilety komunikacji publicznej',
      'Identyfikatory gości na eventach',
      'Wkładki do paczek (packing inserts)',
      'Tagi paletowe i śledzenie zapasów na hali produkcyjnej',
      'Dokumenty archiwalne (trwałość do 12 lat)',
    ],
    notRecommendedFor: [
      'Long term exposure to sunlight (długotrwałe słońce) — wyraźne ostrzeżenie Zebry',
      'Extreme heat (skrajne ciepło)',
      'Etykiety samoprzylepne — wybierz Z-Perform 1000D z klejem',
      'Kontakt z papierami węglowymi/samokopiującymi',
      'Kontakt z PVC z plastyfikatorami, rozpuszczalnikami, alkoholem',
      'Przechowywanie >40 °C lub >60% RH',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: [],
      mobile: ['ZQ511', 'ZQ521', 'ZQ610', 'ZQ620', 'ZQ630'],
    },
    certifications: [
      { name: 'BPA Free', description: 'Materiał bez bisfenolu A.' },
      { name: 'Good resistance to image fading', description: 'Odporność na blaknięcie obrazu — kluczowa dla archive applications.' },
      { name: 'Archive 12 years', description: 'Trwałość drukowanego obrazu do 12 lat w specyficznych warunkach archiwalnych (18–24 °C, RH 40–60%, ciemność).' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Z-Perform 1000D 110 Tag = bez kleju, perforowane paski (do paragonów, identyfikatorów). Z-Perform 1000D standardowa = z klejem akrylowym (etykiety samoprzylepne na produkty).',
      },
    ],
    faq: [
      {
        question: 'Co oznacza "Tag" w nazwie etykiety?',
        answer: '"Tag" w terminologii Zebra to etykieta BEZ kleju — pasek papieru do owijania, wieszania lub przyczepiania mechanicznie (zszywka, sznurek, dziurka). To różnica vs standardowa etykieta, która ma klej na spodzie.',
      },
      {
        question: 'Jak działa perforacja między etykietami?',
        answer: 'Linia mikronacięcia między etykietami pozwala oddzielić je ręcznie bez nożyczek lub gilotyny. Po wydruku rwiesz tag palcami — szybkie i wygodne dla aplikacji typu paragony przy kasie lub identyfikatory eventowe.',
      },
      {
        question: 'Czy Z-Perform 1000D 110 Tag pasuje do drukarek fiskalnych?',
        answer: 'Nie bezpośrednio. Drukarki fiskalne mają własne specjalistyczne papiery (zwykle szerokość 57 mm lub 76 mm). 110 Tag to format Zebra do drukarek Zebra DT — używany w aplikacjach niefiskalnych (identyfikatory, wagowe, cenowe).',
      },
      {
        question: 'Czy mogę używać 110 Tag jako etykietę samoprzylepną?',
        answer: 'Nie — Z-Perform 1000D 110 Tag NIE ma kleju. To pasek do mechanicznego przyczepiania (sznurek, dziurka, zszywka). Dla etykiety samoprzylepnej wybierz Z-Perform 1000D standardową z klejem akrylowym permanentnym.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  10. Z-ESSENTIALS 1000D — entry-level (większa rolka)
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-essentials-1000d',
    productId: 'zebra-z-essentials-1000d',
    badge: 'Z-Essentials 1000D',
    title: 'Z-Essentials 1000D',
    tagline: 'Entry-level powlekana — top-coat dla lepszego nadruku, najniższy koszt jednostkowy.',
    positioning: 'budżetowa',
    material: 'papier-powlekany',
    glue: 'permanentny',
    topcoat: true,
    linerless: false,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 1475.76,
    accent: '#64748B',
    seoTitle: 'Z-Essentials 1000D — etykieta termiczna z powłoką wierzchnią | Zebra',
    seoDescription: 'Zebra Z-Essentials 1000D — papier termiczny z powłoką wierzchnią (top-coat), trwały klej akrylowy. Do wysyłek e-commerce, magazynów, produkcji. BPA-free, 0-40°C.',
    h1: 'Etykiety termiczne Zebra Z-Essentials 1000D',
    heroIntro: 'Z-Essentials 1000D to papierowa etykieta termiczna Zebra z powłoką wierzchnią ochronną i trwałym klejem akrylowym — zaprojektowana do krótkoterminowych zastosowań masowych o wysokim nakładzie. Powłoka wierzchnia daje pewną odporność na ścieranie, wilgoć i czynniki środowiskowe — pierwszy wybór dla wysyłek e-commerce, identyfikacji produktów, etykiet cen w sklepach i etykiet prac w toku.',
    keyHighlights: [
      'Papier POWLEKANY (top-coat) — pewna odporność na ścieranie, wilgoć, czynniki środowiskowe',
      'Trwały klej akrylowy — dobra przyczepność na kartonie, stali, plastiku',
      'BPA-free — bez bisfenolu A w facestocku',
      'Doskonały stosunek ceny do jakości — entry-level z powłoką',
      'Dowolna drukarka termiczna Zebra — pełna kompatybilność',
      'Możliwość personalizacji (rozmiary, kształty, prepinty fleksografia)',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Essentials 1000D?',
        content:
          'Z-Essentials 1000D to papierowa etykieta do druku termicznego bezpośredniego (direct thermal) z linii budżetowej Zebra, ale z powłoką wierzchnią ochronną — to wyróżnia ją od taniej wersji Z-Essentials 500D (bez powłoki). Wierzchnia warstwa ochronna zwiększa trwałość drukowanego obrazu i daje pewną odporność na ścieranie, wilgoć oraz inne czynniki środowiskowe. Dzięki temu etykiety umożliwiają skanowanie kodów kreskowych przez dłuższy czas niż etykiety niepowlekane.\n\nKonstrukcja: matowy biały papier termoczuły 72 µm + trwały klej akrylowy 10 µm + biały podkład glassine 60 g/m² (55 µm). Łączna grubość 140 µm ±10%. Materiał jest BPA-free, certyfikowany w 23-punktowym procesie kontroli jakości ISO 9001.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Essentials 1000D jest standardem dla wysokowolumenowych zastosowań krótkoterminowych: etykiety wysyłkowe e-commerce, etykiety paczkowe w logistyce i transporcie, kompletacja zamówień i przyjmowanie towaru w magazynach, identyfikacja produktów i etykiety prac w toku w zakładach produkcyjnych, oznaczenia cen w sklepach (retail), przeładunek w logistyce.\n\nPowłoka wierzchnia pozwala na skanowanie kodów dłużej niż dla taniej Z-Essentials 500D — wybierz 1000D wszędzie gdzie operacjonista musi czytać kod kreskowy po kilku dniach/tygodniach od wydruku.',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Trójwarstwowa konstrukcja: matowy biały papier termoczuły powlekany 72 µm (facestock) + trwały klej akrylowy 10 µm + biały papier glassine 60 g/m² jako liner (55 µm). Łączna grubość: 140 µm ±10%.\n\nSiła przyczepności kleju (5 min / 24 godz., N/25 mm): Stal 15/15, Poliwęglan 13/15, Polietylen 4/6, Tektura falista 3/3. Najlepsza przyczepność na powierzchniach metalowych i twardych plastikach. Klej zaczyna mieć słabszą przyczepność na powierzchniach polietylenowych.',
      },
      {
        heading: 'Środowisko pracy i temperatura',
        content:
          'Z-Essentials 1000D jest przeznaczona do **temperatur otoczenia wewnątrz pomieszczeń**. Minimalna temperatura aplikacji etykiety: 0°C — poniżej tej temperatury klej nie rozprowadzi się prawidłowo. Zakres temperatury użytkowej (po prawidłowej aplikacji i ~24 godz. dwell time): **od 0°C do +40°C**.\n\nUWAGA: to znacznie WĘŻSZY zakres niż serie Z-Select 2000D lub Z-Perform 1000D (które wytrzymują −20°C do +80°C). Z-Essentials 1000D NIE nadaje się do chłodni, mrożonek, ekspozycji w hali produkcyjnej >40°C ani aplikacji outdoor. Dla takich warunków wybierz Z-Perform 1000D wariant All-Temp, PolyPro 4000D (syntetyk) lub etykiety termotransferowe.',
      },
      {
        heading: 'Kompatybilność z drukarkami',
        content:
          'Z-Essentials 1000D działa z **dowolną drukarką termiczną firmy Zebra** obsługującą direct thermal (DT). Nie wymaga taśmy barwiącej (N/A). Sprawdzona na: desktopowych (ZD220d, ZD230d, ZD411d, ZD421d, ZD621d), mid-range (ZD611, ZT231) oraz industrial (ZT411, ZT421). Standardowo dostępna w gilzie 25 mm w formacie 102×152 mm (typowa wysyłka A6).',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Zalecane warunki przechowywania: do 6 miesięcy w temperaturze poniżej 20°C przy wilgotności względnej 40-50%. Przewidywany okres eksploatacji po aplikacji: **do 1 roku wewnątrz pomieszczeń** (po prawidłowej aplikacji i ~24 godz. dwell time).\n\nPo upływie tego okresu nadruk termiczny może blaknąć — dla nadruków o cyklu życia >1 rok lub w wymagających warunkach wybierz Z-Select 2000D (do 24 mies.) lub etykiety termotransferowe.',
      },
      {
        heading: 'Próbki przed zakupem',
        content:
          'Zebra udostępnia oficjalną rolkę próbną pod numerem **SAMPLE26928D**. Numer materiału (Raw Material): 10026928RM. W TAKMA pomagamy dobrać próbkę pod konkretną drukarkę i powierzchnię docelową — skontaktuj się przez formularz lub telefonicznie.',
      },
    ],
    techSpecs: [
      { label: 'Materiał facestock', value: 'Matowy biały papier termoczuły powlekany (72 µm)' },
      { label: 'Klej', value: 'Trwały klej akrylowy permanentny (10 µm)' },
      { label: 'Podkład (liner)', value: 'Biały papier glassine 60 g/m² (55 µm)' },
      { label: 'Łączna grubość', value: '140 µm ±10%' },
      { label: 'Top-coat (powłoka wierzchnia)', value: 'Tak — odporność na ścieranie i wilgoć' },
      { label: 'Atesty żywnościowe', value: 'Brak' },
      { label: 'BPA-free', value: 'Tak' },
      { label: 'Zakres temperatury pracy', value: '0°C do +40°C (indoor)' },
      { label: 'Min. temperatura aplikacji', value: '0°C' },
      { label: 'Trwałość nadruku indoor', value: 'Do 1 roku' },
      { label: 'Siła kleju — stal (24h)', value: '15 N/25 mm' },
      { label: 'Siła kleju — poliwęglan (24h)', value: '15 N/25 mm' },
      { label: 'Siła kleju — polietylen (24h)', value: '6 N/25 mm' },
      { label: 'Siła kleju — tektura falista (24h)', value: '3 N/25 mm' },
      { label: 'Format standardowy', value: '102×152 mm (typowa wysyłka A6)' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Przechowywanie', value: '6 mies., <20°C, RH 40-50%' },
      { label: 'Numer próbki', value: 'SAMPLE26928D' },
      { label: 'Numer materiału (RM)', value: '10026928RM' },
      { label: 'Liczba wariantów', value: '1' },
    ],
    applications: [
      'Wysyłki e-commerce — etykiety paczkowe (InPost, DPD, DHL, GLS, FedEx)',
      'Logistyka — wysyłka, przeładunek',
      'Magazyny — kompletacja zamówień, przyjmowanie towaru, wysyłka',
      'Zakłady produkcyjne — etykiety prac w toku (WIP), identyfikacja produktów',
      'Handel detaliczny — oznaczenia cen w sklepach, wysyłka',
      'Transport — etykiety wysyłkowe',
      'Krótkoterminowe etykiety produktowe (do 1 roku)',
    ],
    notRecommendedFor: [
      'Chłodnie i mrożonki (zakres pracy 0-40°C, NIE do temperatur ujemnych)',
      'Aplikacje >+40°C (hale produkcyjne, samochody na słońcu)',
      'Etykiety w kontakcie z żywnością (brak atestów)',
      'Długoterminowe oznaczenia (>1 rok)',
      'Wodoodporne zastosowania (zanurzenie)',
      'Outdoor (UV ciemni nadruk DT)',
      'Aplikacja na polietylen (klej ma słabszą przyczepność — 6 N/25 mm)',
      'Aplikacje wymagające wielu rozmiarów (tylko 1 wariant 102×152 mm)',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [
      { name: 'BPA-free', description: 'Materiał facestocku bez bisfenolu A — zgodny z najnowszymi wymogami EU dla mediów termicznych.' },
      { name: 'ISO 9001', description: '23-punktowy proces kontroli jakości certyfikowany ISO 9001 — spójność wydajności między partiami.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-essentials-500d',
        whenToChooseThis: 'Z-Essentials 1000D ma powłokę wierzchnią (top-coat) zapewniającą odporność na ścieranie i wilgoć — nadruk skanowalny dłużej. Z-Essentials 500D bez powłoki — taniej, ale mniej trwałe; do krótkoterminowych etykiet bez wymogu skanowania kodów po kilku dniach.',
      },
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Z-Perform 1000D to znacznie lepszy wybór dla 90% zastosowań — taniej w przeliczeniu na etykietę, 216 wariantów rozmiarowych, atesty żywnościowe. Z-Essentials 1000D wybierz tylko gdy konkretnie potrzebujesz 102×152 mm i liczy się każdy grosz.',
      },
    ],
    faq: [
      {
        question: 'Czy Z-Essentials 1000D jest tańsza od Z-Perform 1000D?',
        answer: 'Cena ZA ETYKIETĘ często WYŻSZA niż Z-Perform 1000D! Z-Perform ma 216 wariantów rozmiarowych i niższy koszt jednostkowy dzięki większej skali produkcji. Z-Essentials to nazwa marketingowa "entry-level", ale w praktyce Z-Perform 1000D bywa tańsza.',
      },
      {
        question: 'Czym różni się Z-Essentials 1000D od 500D?',
        answer: 'Tylko liczbą etykiet na rolce. 1000D = większa rolka (więcej etykiet), 500D = mniejsza rolka. Materiał, klej i format identyczne. 1000D wybierz dla rzadszej wymiany rolki, 500D dla niższej ceny za rolkę i mniejszego stocku.',
      },
      {
        question: 'Czy Z-Essentials 1000D nadaje się do żywności?',
        answer: 'Nie — brak atestów żywnościowych (BfR, FDA, ISEGA). Dla etykiet w kontakcie z żywnością wybierz Z-Perform 1000D lub Z-Select 2000D, które mają pełen pakiet atestów.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  11. Z-ESSENTIALS 500D — najtańszy entry-level
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: 'z-essentials-500d',
    productId: 'zebra-z-essentials-500d',
    badge: 'Z-Essentials 500D',
    title: 'Z-Essentials 500D',
    tagline: 'Najtańsza etykieta termiczna Zebra — do krótkoterminowych etykiet wysyłkowych.',
    positioning: 'budżetowa',
    material: 'papier-niepowlekany',
    glue: 'permanentny',
    topcoat: false,
    linerless: false,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 1346.12,
    accent: '#475569',
    seoTitle: 'Z-Essentials 500D — najtańsza etykieta termiczna Zebra | entry-level',
    seoDescription: 'Zebra Z-Essentials 500D — najtańsza entry-level etykieta termiczna z portfolio Zebra. Mniejsza rolka, krótki cykl życia, niewrażliwe zastosowania.',
    h1: 'Etykiety termiczne Zebra Z-Essentials 500D',
    heroIntro: 'Z-Essentials 500D to najbardziej budżetowa etykieta termiczna Zebra — z mniejszą rolką niż Z-Essentials 1000D, papier niepowlekany, klej standardowy. Idealna dla krótkoterminowych etykiet wysyłkowych, oznaczeń tymczasowych i paragonów gdzie nie potrzebujesz żadnych premium cech.',
    keyHighlights: [
      'Najtańsza etykieta termiczna w portfolio Zebra',
      'Papier niepowlekany, klej akrylowy permanentny standardowy',
      'Mniejsza rolka — niższa cena, częstsze wymiany',
      'Krótki cykl życia — do krótkoterminowych zastosowań',
      'Bez atestów, bez top-coatu',
      'Tylko 1 wariant rozmiarowy',
    ],
    sections: [
      {
        heading: 'Czy Z-Essentials 500D ma sens?',
        content:
          'Z-Essentials 500D to najtańszy poziom w portfolio etykiet termicznych Zebra — bez atestów, bez top-coatu, z mniejszą rolką (500 etykiet zamiast 1000+). Sens ma TYLKO dla bardzo specyficznych przypadków: pilne zamówienie minimalnej liczby etykiet, test pojedynczej drukarki przed większym zakupem, etykiety tymczasowe z bardzo krótkim cyklem życia.\n\nDla 95% magazynów i wysyłek lepszym wyborem jest Z-Perform 1000D — taniej w przeliczeniu na etykietę, 216 wariantów rozmiarowych, atesty żywnościowe.',
      },
      {
        heading: 'Z-Essentials 500D vs 1000D',
        content:
          'Dwie istotne różnice: (1) Powłoka top-coat — Z-Essentials 500D NIE ma powłoki, Z-Essentials 1000D MA. Top-coat poprawia ostrość nadruku kodów kreskowych i wydłuża życie głowicy drukarki. (2) Pojemność rolki — 500D ma ~2× mniej etykiet niż 1000D.\n\n500D wybierz gdy: nie skanujesz drobnych kodów (top-coat niepotrzebny), masz mały wolumen i nie chcesz "zostawać" z dużą rolką, kupujesz jako test/próbkę, liczy się minimalna cena za rolkę. 1000D wybierz dla regularnych operacji wymagających skanowania kodów — top-coat + rzadsza wymiana rolki.',
      },
    ],
    techSpecs: [
      { label: 'Materiał facestock', value: 'Papier termoczuły niepowlekany' },
      { label: 'Klej', value: 'Akrylowy permanentny standardowy' },
      { label: 'Top-coat', value: 'Nie' },
      { label: 'Atesty żywnościowe', value: 'Brak' },
      { label: 'Trwałość nadruku indoor', value: 'Do 12 miesięcy' },
      { label: 'Format', value: '102×152 mm' },
      { label: 'Gilza', value: '25 mm' },
      { label: 'Pojemność rolki', value: '~500 etykiet (mniejsza niż 1000D)' },
      { label: 'Liczba wariantów', value: '1' },
    ],
    applications: [
      'Krótkoterminowe etykiety wysyłkowe',
      'Pilne zamówienia minimalnej liczby etykiet',
      'Test pojedynczej drukarki przed większym zakupem',
      'Oznaczenia tymczasowe',
    ],
    notRecommendedFor: [
      'Regularne wysyłki — wybierz Z-Perform 1000D (taniej za etykietę)',
      'Kontakt z żywnością (brak atestów)',
      'Drobny nadruk 2D (brak top-coatu)',
      'Wodoodporne zastosowania',
      'Operacje z dużymi wolumenami (zbyt częste wymiany rolki)',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      {
        seriesSlug: 'z-essentials-1000d',
        whenToChooseThis: 'Z-Essentials 500D bez powłoki top-coat — taniej, mniej kontrastowy nadruk. Z-Essentials 1000D z powłoką top-coat (ostrzejszy nadruk kodów) i większą rolką — wybierz gdy skanujesz kody lub potrzebujesz mniej wymian.',
      },
      {
        seriesSlug: 'z-perform-1000d',
        whenToChooseThis: 'Z-Perform 1000D to znacznie lepszy wybór dla regularnych operacji — taniej w przeliczeniu na etykietę, 216 wariantów. Z-Essentials 500D tylko dla małych zamówień testowych lub bardzo specyficznych przypadków.',
      },
    ],
    faq: [
      {
        question: 'Czy Z-Essentials 500D jest naprawdę najtańsza?',
        answer: 'Cena ZA ROLKĘ — tak, najtańsza w portfolio. Ale cena ZA ETYKIETĘ często wyższa niż Z-Perform 1000D dzięki większej skali produkcji tej drugiej serii. Sprawdź przelicznik (cena rolki ÷ liczba etykiet) przed decyzją.',
      },
      {
        question: 'Kiedy wybrać Z-Essentials 500D zamiast 1000D?',
        answer: 'Gdy: (1) Potrzebujesz mniejszej rolki w drukarce, (2) Masz mały wolumen i nie chcesz "zostawać" z dużą rolką, (3) Kupujesz jako test/próbkę pojedynczej drukarki. W innych przypadkach 1000D jest lepszy (rzadsze wymiany).',
      },
      {
        question: 'Czy mogę używać Z-Essentials 500D do regularnych wysyłek?',
        answer: 'Możesz, ale nieoptymalnie — Z-Perform 1000D jest taniej w przeliczeniu na etykietę i ma 216 wariantów rozmiarowych. Z-Essentials 500D ma sens tylko dla bardzo małych wolumenów lub konkretnego rozmiaru 102×152 mm.',
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────
   *  12. 8000D JEWELRY — jubilerska ze skrzydełkami
   * ──────────────────────────────────────────────────────────────── */
  {
    slug: '8000d-jewelry',
    productId: 'zebra-8000d-jewelry',
    badge: '8000D Jewelry',
    title: '8000D Jewelry',
    tagline: 'Syntetyczna **polipropylenowa** etykieta DT do biżuterii — UV resistant varnish, **Moderate chemical resistance**, klej akrylowy. Butterfly / dumbbell shape.',
    positioning: 'specjalna',
    material: 'polipropylen-syntetyczny',
    glue: 'permanentny',
    topcoat: true,
    linerless: false,
    perforation: false,
    foodSafe: false,
    outdoor: false,
    priceFrom: 1477.69,
    accent: '#E11D48',
    seoTitle: '8000D Jewelry — polipropylenowa etykieta DT Zebra do biżuterii | UV resistant',
    seoDescription: 'Zebra 8000D Jewelry — polipropylenowa (syntetyczna) etykieta DT do biżuterii i drobnych komponentów. UV resistant varnish, klej akrylowy, butterfly/dumbbell shape. Cold Temperature + Deep Freeze (−40 °C do +49 °C). BPA-free, latex-free.',
    h1: 'Etykiety termiczne Zebra 8000D Jewelry',
    heroIntro: '8000D Jewelry to **syntetyczna polipropylenowa etykieta direct thermal** zaprojektowana dla branży jubilerskiej. Facestock **gloss white thermal imaging polypropylene 84 µm** + **permanent high-performance acrylic adhesive 26 µm** + white kraft paper liner 81 µm, **total 191 µm ±10%**. **UV resistant varnish** zapewnia doskonałą odporność na silne światło w retail. Cold Temperature + Deep Freeze + **Moderate Chemical Resistance**. Dwie formy: **butterfly** (z strefą bez kleju) i **dumbbell** (z pełnym klejem). **BPA-free, latex-free adhesive**.',
    keyHighlights: [
      'Material Type: **Synthetic** (NIE papier!) — Film Type: **Polypropylene**',
      'Facestock gloss white thermal imaging polypropylene, **84 µm**',
      'Klej **permanent high-performance acrylic**, 26 µm',
      '**UV resistant varnish** — odporność na silne światło w retail',
      'Properties: Cold Temperature, Deep Freeze, **Moderate Chemical Resistance**',
      'Zakres pracy **−40 °C do +49 °C**, min. aplikacja **−23 °C**',
      'Indoor use, 1 year+',
      'Dwie formy: **butterfly** (strefa bez kleju) lub **dumbbell** (pełny klej)',
      '**BPA-free, latex-free adhesive**',
      'Good smear and scratch resistance',
    ],
    sections: [
      {
        heading: 'Czym jest 8000D Jewelry?',
        content:
          '8000D Jewelry to **syntetyczna polipropylenowa etykieta direct thermal** Zebry zaprojektowana pod biżuterię i drobne komponenty. W przeciwieństwie do większości etykiet DT na rynku, **NIE jest papierem** — Material Type: **Synthetic**, Film Type: **Polypropylene**. Daje to wytrzymałość mechaniczną i chemiczną nieosiągalną dla papieru.\n\nKonstrukcja: facestock **gloss white thermal imaging polypropylene, 84 µm** + **permanent high-performance acrylic adhesive, 26 µm** + white kraft paper liner, 81 µm. Łączna grubość **191 µm ±10%**.\n\nDostępna w dwóch kształtach (Available in two shapes):\n\n- **Butterfly shape** — z strefą **bez kleju** (adhesive free zone) na drobne elementy biżuterii\n- **Dumbbell shape** — z **pełnym klejem** (full adhesive)',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Według Zebry:\n\n- **Tagi do biżuterii i pierścionków** (kształt skrzydełkowy do owijania)\n- **Oznaczenia drobnych kabli i przewodów**\n- **Etykiety na oprawkach okularów i okularów przeciwsłonecznych**\n\nDodatkowo poza biżuterią: drobne komponenty elektroniczne, oznaczenia w warsztatach złotniczych, aukcjach biżuterii i serwisach jubilerskich.',
      },
      {
        heading: 'Odporność chemiczna (Expected Chemical Resistance)',
        content:
          'Z UV Coating — **Moderate Chemical Resistance** (acceptable resistance):\n\n- **Weak (akceptowalne)**: krew, płyny ustrojowe, woda słona, woda, środki do czyszczenia szyb\n- **Moderate (akceptowalne)**: amoniak, wybielacz, IPA. **Alcohol — NIE akceptowalne**\n- **Harsh (NIE akceptowalne)**: benzyna, smar, olej\n- **Extreme (NIE akceptowalne)**: aceton, IR Reflow, MEK, TCE, ksylen\n\nZakres odporności jest większy niż w przypadku papierowych Z-Select/Z-Perform — kluczowa zaleta syntetycznej polipropylenowej konstrukcji.',
      },
      {
        heading: 'UV resistant varnish i odporność mechaniczna',
        content:
          'Dodatkowe cechy (Additional Features) według Zebry:\n\n- **Good smear and scratch resistance** — dobra odporność na rozmazywanie i zarysowania\n- **UV resistant varnish** — odporność na silne światło w środowiskach retail (gabloty z mocnym oświetleniem)\n- **BPA free** — bez bisfenolu A\n- **Latex free adhesive** — bez lateksu',
      },
      {
        heading: 'Parametry techniczne',
        content:
          'Material Construction:\n\n- **Facestock**: gloss white thermal imaging polypropylene, **84 µm**\n- **Adhesive**: permanent high-performance acrylic adhesive, **26 µm**\n- **Liner**: white kraft paper liner, **81 µm**\n- **Total**: **191 µm ±10%**\n\nTemperature Performance:\n\n- **Minimum Application Temperature**: **−23 °C**\n- **Service Temperature Range**: **−40 °C do +49 °C**\n\nProperties: **Cold Temperature, Deep Freeze, Moderate Chemical Resistance**.',
      },
      {
        heading: 'Kompatybilność z drukarkami Zebra',
        content:
          'Recommended Zebra Printers: **desktop, mid-range and high-performance thermal printers** (NIE mobilne). Druk Direct Thermal — bez taśmy barwiącej.',
      },
      {
        heading: 'Przechowywanie i okres eksploatacji',
        content:
          'Recommended Storage Conditions: **1 rok** przy temperaturze **22 °C** i wilgotności względnej **50%**.\n\nExpected Life Span in Application: **indoor use, 1 year+** (po prawidłowej aplikacji i dwell time ~24 h).',
      },
    ],
    techSpecs: [
      { label: 'Facestock', value: 'Gloss white thermal imaging **polypropylene**, 84 µm' },
      { label: 'Klej', value: 'Permanent **high-performance acrylic** adhesive, 26 µm' },
      { label: 'Liner', value: 'White kraft paper liner, 81 µm' },
      { label: 'Łączna grubość (Total)', value: '191 µm ±10%' },
      { label: 'Material Type', value: 'Synthetic' },
      { label: 'Film Type', value: 'Polypropylene' },
      { label: 'Finish', value: 'Gloss' },
      { label: 'Środowisko', value: 'Indoor' },
      { label: 'Properties', value: 'Cold Temperature, Deep Freeze, Moderate Chemical Resistance' },
      { label: 'Kształty (Available in two shapes)', value: 'Butterfly (adhesive-free zone) / Dumbbell (full adhesive)' },
      { label: 'Min. temperatura aplikacji', value: '−23 °C' },
      { label: 'Zakres temperatur pracy', value: '−40 °C do +49 °C' },
      { label: 'Warunki przechowywania', value: '1 rok, 22 °C, RH 50%' },
      { label: 'Okres eksploatacji', value: 'Indoor — 1 year+' },
      { label: 'UV resistant varnish', value: 'Tak — odporność na silne światło w retail' },
      { label: 'Odporność mechaniczna', value: 'Good smear and scratch resistance' },
      { label: 'BPA / lateks', value: 'BPA-free, latex-free adhesive' },
      { label: 'Liczba wariantów', value: '2' },
    ],
    applications: [
      'Tagi do biżuterii i pierścionków (kształt skrzydełkowy)',
      'Oznaczenia drobnych kabli i przewodów',
      'Etykiety na oprawkach okularów i okularów przeciwsłonecznych',
      'Salony jubilerskie — etykiety cenowe w gablotach (UV resistant)',
      'E-commerce biżuterii — etykiety z kodem dla pickingu',
      'Aukcje biżuterii — numery aukcyjne',
      'Drobne komponenty elektroniczne',
    ],
    notRecommendedFor: [
      'Kontakt z alkoholem (etanol/isopropanol — alcohol nieakceptowalny)',
      'Kontakt z benzyną, smarem, olejem (Harsh chemicals)',
      'Kontakt z acetonem, MEK, TCE, ksylenem (Extreme chemicals)',
      'IR reflow (procesy lutowania)',
      'Aplikacje outdoor — produkt indoor (mimo high tolerancji temperatur)',
      'Etykiety wysyłkowe (standardowy format) — to specjalistyczny tag jubilerski',
      'Kontakt z żywnością (brak atestów)',
    ],
    compatiblePrinters: {
      desktop: ['ZD220d', 'ZD230d', 'ZD411d', 'ZD421d', 'ZD621d', 'GK420d'],
      midRange: ['ZD611', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'UV resistant varnish', description: 'Lakier UV — odporność na silne światło w środowisku retail (gabloty z mocnym oświetleniem).' },
      { name: 'BPA free', description: 'Materiał bez bisfenolu A.' },
      { name: 'Latex-free adhesive', description: 'Klej bez lateksu — bezpieczny dla alergików.' },
      { name: 'Moderate Chemical Resistance', description: 'Odporność na słabe (woda, krew, salt water) i moderate (amoniak, bleach, IPA) chemikalia.' },
    ],
    comparedWith: [
      {
        seriesSlug: 'z-select-2000d',
        whenToChooseThis: 'Wybierz 8000D Jewelry dla biżuterii i drobnych komponentów które trzeba owinąć (skrzydełka). Z-Select 2000D dla płaskich etykiet samoprzylepnych z atestami żywnościowymi.',
      },
    ],
    faq: [
      {
        question: 'Co to są "skrzydełka" w etykiecie jubilerskiej?',
        answer: 'Dwa wąskie pasma po obu stronach środkowej części etykiety, które owija się wokół biżuterii (pierścionka, łańcuszka). Po owinięciu skrzydełka sklejają się ze sobą tworząc wystający tag, który można skanować lub odczytać bez odklejania.',
      },
      {
        question: 'Czy 8000D Jewelry trzyma na metalu (złoto, srebro)?',
        answer: 'Tak — klej akrylowy permanentny dobrze trzyma na powierzchniach metalowych. Skrzydełka owija się wokół biżuterii i sklejają ze sobą — etykieta trzyma się stabilnie nawet bez kontaktu z metalem.',
      },
      {
        question: 'Czy mogę drukować 8000D Jewelry na zwykłej drukarce Zebra?',
        answer: 'Tak — pasuje do drukarek Zebra DT desktop: ZD220d, ZD230d, ZD411d, ZD421d, ZD621d, GK420d. Większa drukarka industrial może mieć problemy z dokładnym pozycjonowaniem (etykieta jest mała) — desktop jest optymalny.',
      },
      {
        question: 'Czy etykieta jubilerska wystarczy na drobny font (próba 585, kod 2D)?',
        answer: 'Tak — dzięki powłoce top-coat. 8000D Jewelry ma powlekany papier, który zapewnia ostry nadruk drobnego tekstu i kodów 2D. Możesz zmieścić: cenę, kod produktu, próbę (Au 585), masę (3.5 g), opis kamieni, kod QR.',
      },
    ],
  },
]

/** Lookup helper */
export function getThermalLabelSeriesBySlug(slug: string): ThermalLabelSeries | undefined {
  return thermalLabelSeries.find(s => s.slug === slug)
}

/** Lista slugów do generateStaticParams */
export function getAllThermalLabelSeriesSlugs(): string[] {
  return thermalLabelSeries.map(s => s.slug)
}
