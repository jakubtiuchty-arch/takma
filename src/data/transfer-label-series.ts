/**
 * Dane 16 serii etykiet termotransferowych (TT) Zebra.
 *
 * Używane na:
 *  - /etykiety-termotransferowe-zebra (landing-rodzic, kafelki 3 podkategorii)
 *  - /etykiety-termotransferowe-zebra/[subcategory] (papierowe / foliowe / specjalne)
 *  - /etykiety-termotransferowe-zebra/[subcategory]/serie/[slug] (pełny landing serii)
 *
 * Każda seria mapuje się 1:1 na produkt w data/products.ts (productId → warianty + URL "Kup").
 *
 * Różnica vs etykiety termiczne (DT): TT WYMAGA taśmy barwiącej (ribbon) — stąd pole
 * recommendedRibbons (wax/wax-resin do papieru, resin do folii).
 */

import type {
  SeriesSection,
  SeriesTechSpec,
  SeriesFaq,
  SeriesCertification,
  SeriesComparison,
  SeriesCompatiblePrinters,
} from './thermal-label-series'

export type TransferLabelSubcategory = 'papierowe' | 'foliowe' | 'specjalne'

export type TransferLabelMaterial =
  | 'papier-niepowlekany'
  | 'papier-powlekany'
  | 'papier-semi-glossy'
  | 'poliester-bialy'
  | 'poliester-srebrny'
  | 'poliester-kriogeniczny'
  | 'polietylen'
  | 'polipropylen-bialy'
  | 'polipropylen-przezroczysty'
  | 'polipropylen-matowy'
  | 'poliolefina'
  | 'folia-blood-bag'
  | 'folia-void'
  | 'folia-destruktywna'

export type TransferLabelGlue =
  | 'permanentny-akrylowy'
  | 'zdejmowalny'
  | 'all-temperature'
  | 'kriogeniczny'
  | 'tamper-evident'
  | 'destruktywny'
  | 'blood-bag'

export type TransferLabelPositioning =
  | 'bestseller'
  | 'premium'
  | 'specjalistyczna'
  | 'budżetowa'
  | 'niche-zabezpieczenia'
  | 'niche-krio'

export interface RecommendedRibbons {
  /** Taśmy wosk/wosk-żywica (papier) */
  waxResin?: string[]
  /** Taśmy żywiczne resin (folia, krio, zabezpieczenia) */
  resin?: string[]
}

export interface TransferLabelSeries {
  // ── IDENTITY ─────────────────────────────────────────────────────
  slug: string
  productId: string
  subcategory: TransferLabelSubcategory
  badge: string
  title: string
  tagline: string
  positioning: TransferLabelPositioning

  // ── ATRYBUTY DO FILTRÓW / TABELI ────────────────────────────────
  material: TransferLabelMaterial
  glue: TransferLabelGlue
  topcoat: boolean
  removable: boolean
  foodSafe: boolean
  outdoorResistant: boolean
  chemicalResistant: boolean
  cryogenic: boolean
  ulCertified: boolean
  priceFrom: number
  accent: string

  // ── SEO ──────────────────────────────────────────────────────────
  seoTitle: string
  seoDescription: string
  h1: string

  // ── HERO LANDINGU ────────────────────────────────────────────────
  heroIntro: string
  keyHighlights: string[]
  /** Opcjonalna ścieżka do obrazu serii (`/images/...`) — używana jako tło karty
   *  w listingu serii oraz w hero landingu serii. Bez tego pole karta używa tylko
   *  gradientu akcentowego. */
  heroImage?: string
  /** Override `object-position` dla `heroImage` w **kafelku karty serii** (lista kategorii).
   *  Format CSS, np. `'center 30%'`. Domyślnie `'center 20%'` — pokazuje górną część obrazu. */
  heroImagePosition?: string
  /** Osobny obraz dla **hero strony landing serii** (gdy potrzeba innego ujęcia
   *  niż na kafelku listingu — np. obraz bez wbudowanych tekstów). Fallback do `heroImage`. */
  heroLandingImage?: string
  /** Override `object-position` dla `heroImage`/`heroLandingImage` w **hero strony landing serii**
   *  (`/etykiety-termotransferowe-zebra/.../serie/[slug]`). Fallback do `heroImagePosition`. */
  heroLandingImagePosition?: string
  /** Gdy `true`, kafelek serii w listingu kategorii pokazuje **tylko obraz + strzałkę**,
   *  bez badge'a/tytułu/tagline'a — bo wszystkie informacje są wbudowane w obraz.
   *  Używać tylko dla obrazów które mają już wpisany kompletny opis (badge, tytuł, opis). */
  cardImageFull?: boolean

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

  // ── TAŚMY BARWIĄCE (kluczowe dla TT) ─────────────────────────────
  recommendedRibbons: RecommendedRibbons
}

/* ═════════════════════════════════════════════════════════════════
 *  DANE 16 SERII
 * ═════════════════════════════════════════════════════════════════ */

export const transferLabelSeries: TransferLabelSeries[] = [
  /* ════════════════ PAPIEROWE (4) ════════════════ */

  /* ──────────────── 1. Z-PERFORM 1000T — bestseller papierowy ──────────────── */
  {
    slug: 'z-perform-1000t',
    productId: 'zebra-z-perform-1000t',
    subcategory: 'papierowe',
    badge: 'Z-Perform 1000T',
    title: 'Z-Perform 1000T',
    tagline: 'Ekonomiczny papier niepowlekany do wysyłki, magazynu i opakowań — najpopularniejsza etykieta TT.',
    positioning: 'bestseller',
    material: 'papier-niepowlekany',
    glue: 'permanentny-akrylowy',
    topcoat: false,
    removable: false,
    foodSafe: true,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 151.25,
    accent: '#2563EB',
    seoTitle: 'Etykiety termotransferowe Zebra Z-Perform 1000T | papier, magazyn, wysyłka',
    seoDescription: 'Zebra Z-Perform 1000T — ekonomiczne papierowe etykiety termotransferowe (papier 67 μm + permanentny klej akrylowy). Atesty BfR XIV / EC 1935/2004 / FDA 175.105, BPA-free, latex-free. 458 wariantów od 151 zł netto, ZipShip od ręki.',
    h1: 'Etykiety termotransferowe Zebra Z-Perform 1000T',
    heroIntro: 'Z-Perform 1000T to **najczęściej kupowana papierowa etykieta termotransferowa Zebra** — niepowlekane matowe etykiety ze superkalandrowanego papieru **67 μm** z permanentnym klejem akrylowym **12 μm** o **wysokiej początkowej przyczepności **, zwłaszcza do tektury falistej. Drukujesz z taśmą **wosk Zebra 2300 lub 2100** w dowolnej drukarce TT Zebra. Komplet atestów żywnościowych UE i USA: **EC 1935/2004, EU 10/2011, BfR XIV** (suche i wilgotne nietłuste) oraz **FDA 175.105**. **BPA-free**, **latex-free**. Trwałość indoor **1 rok+**, zakres pracy **-20°C do +80°C**. Dostępny w programie **Zebra ZipShip** (od ręki z magazynu).',
    heroImage: '/images/etykiety-zebra-z-perform-1000t.png',
    keyHighlights: [
      'Bestseller TT Zebra — najczęściej kupowana papierowa etykieta TT w polskim B2B',
      'Konstrukcja: papier 67 μm + klej 12 μm + glassine 51 μm (łącznie 130 μm ±10%)',
      'Wysoka początkowa przyczepność  — szczególnie do tektury falistej',
      'Druk z taśmami wosk Zebra **2300** lub **2100** — najtańszy koszt nadruku w TT',
      'Komplet atestów: BfR XIV, EC 1935/2004, EU 10/2011, FDA 175.105',
      'BPA-free i latex-free — bezpieczne dla healthcare i farmacji',
      'Trwałość indoor **1 rok+**, zakres pracy **-20°C do +80°C**',
      '458 wariantów (32×25 do 152×210 mm), gilze 25/76 mm i Fanfold',
      'Dostępny w **Zebra ZipShip** (od ręki) i programie EaziPrice',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Perform 1000T?',
        content:
          'Z-Perform 1000T to **ekonomiczna papierowa etykieta termotransferowa Zebra** — odpowiednik bestsellerowego Z-Perform 1000D, ale do druku z taśmą barwiącą (Thermal Transfer), a nie bezpośredniego (Direct Thermal). Różnica jest kluczowa: nadruk termotransferowy jest **trwały, odporny na ścieranie i nie blaknie** z czasem ani od ciepła — w odróżnieniu od termicznego, który po kilkunastu miesiącach ciemnieje.\n\nMateriał to **superkalandrowany niepowlekany matowy papier 67 μm** (proces walcowania pod ciśnieniem ujednolicający strukturę powierzchni — dla wierniejszego druku) z **permanentnym klejem akrylowym 12 μm** o wysokiej początkowej przyczepności . Doskonale trzyma się kartonów, papieru tekturowego, palet, opakowań foliowych. Łączna grubość 130 μm (±10%).\n\nTo **najczęściej kupowana etykieta termotransferowa w Zebra** dostępny w programie **ZipShip** (od ręki z magazynu europejskiego), z 458 wariantami rozmiarowymi pokrywającymi praktycznie każde standardowe zastosowanie magazynowe i wysyłkowe.',
      },
      {
        heading: 'Konstrukcja i parametry techniczne',
        content:
          'Z-Perform 1000T ma trzywarstwową konstrukcję typową dla papierowych etykiet termotransferowych premium:\n\n• **Lico (67 μm)** — superkalandrowany niepowlekany matowy biały papier. Superkalandrowanie ujednolica powierzchnię, dając ostrzejszy nadruk niż na zwykłym papierze offsetowym.\n• **Klej (12 μm)** — permanentny akrylowy z **wysoką początkową przyczepnością **. Wybrany przez Zebra specjalnie pod tekturę falistą i papier tekturowy. Etykieta nie odpadnie z kartonu wysyłkowego nawet w pierwszych minutach po naklejeniu.\n• **Podkład (51 μm, 62 g/m²)** — papier glassine. Standard branżowy umożliwiający automatyczną aplikację w aplikatorach przemysłowych.\n\n**Wydajność:**\n• Minimalna temperatura aplikacji: **0°C** (poniżej klej akrylowy nie aktywuje się; do chłodni wybierz 8000T All-Temp lub Z-Perform Removable z aplikacją od -15°C)\n• Zakres temperatury pracy: **-20°C do +80°C** (po 24h aklimatyzacji)\n• Trwałość użytkowa: **w pomieszczeniach 1 rok i więcej** (oznaczenia magazynowe utrzymują czytelność przez ponad rok)\n• Trwałość magazynowa rolki: **1 rok** przy 20-25°C, RH 40-50%\n\nNumery próbek Zebry: **SAMPLE5147** (mid-range/industrial) lub **SAMPLE5147-D** (desktop) — można zamówić jednorazowo do testów przed dużym zamówieniem.',
      },
      {
        heading: 'Atesty żywnościowe — BfR XIV dla suchej i wilgotnej nietłustej',
        content:
          'Z-Perform 1000T spełnia **komplet regulacji żywnościowych UE i USA** wymaganych dla opakowań zbiorczych w przemyśle spożywczym:\n\n• **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n• **EU 10/2011** — wymagania dla tworzyw sztucznych w kontakcie z żywnością\n• **BfR Recommendation XIV** (Niemcy) — kontakt bezpośredni z **żywnością suchą i wilgotną nietłustą**. Uwaga: BfR XIV pokrywa większość zastosowań magazynowych w branży spożywczej (paczki sucharów, makaron, mąka, kasze, warzywa wilgotne), ale **NIE pokrywa produktów tłustych** — do tłustych wybierz **Z-Perform 1000T Removable** (BfR XXI z reduction factor ≥3)\n• **FDA 175.105** (USA) — kontakt z suchymi produktami spożywczymi lub poprzez warstwę barierową\n• **BPA-free** — bez bisfenolu A\n• **Latex-free** — bez lateksu, ważne w healthcare i dla osób uczulonych\n\nW praktyce możesz stosować ten materiał na **opakowaniach zbiorczych żywności suchej i wilgotnej** (palety, kartony zbiorcze, kontenery transportowe), w **farmacji** (etykiety identyfikacyjne, oznaczanie partii) i **healthcare** (etykiety na sprzęcie, próbkach). Latex-free dodatkowo otwiera zastosowania w środowiskach gdzie alergeny są kontrolowane (sale operacyjne, laboratoria).',
      },
      {
        heading: 'Z jaką taśmą barwiącą drukować?',
        content:
          'Z-Perform 1000T jest **kompatybilny z taśmami woskowymi Zebra 2300 i 2100**. Dobór taśmy to połowa sukcesu druku TT — zła kombinacja media + ribbon daje słaby, ścieralny nadruk:\n\n• **Zebra 2300 Wax** — pierwszy wybór, bestseller wosk. Idealna do typowych etykiet magazynowych, wysyłkowych, picking/receiving. Najtańszy koszt nadruku w portfolio Zebra TT.\n• **Zebra 2100 European Wax** — premium europejska. Ostrzejszy nadruk dla drobnych elementów (kodów 2D, drobnego tekstu), lepsze rezultaty w chłodni i mroźni.\n\nDla aplikacji z **wyższą odpornością nadruku na ścieranie** (etykiety przeładowywane wielokrotnie, transport międzykrajowy) możesz rozważyć **Zebra 3200 Wax/Resin** — ale dla większości magazynowych zastosowań 2300 Wax w zupełności wystarcza i jest tańsza.\n\n**Nie używaj taśm żywicowych (resin)** na Z-Perform 1000T — to przepłacenie. Resin jest projektowany pod folie syntetyczne i odporność chemiczną; na papierze niepowlekanym dodatkowy koszt nie daje żadnej korzyści.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Perform 1000T jest standardem tam, gdzie liczy się **trwały nadruk i niska cena za rolkę**:\n\n• **Wysyłka e-commerce i kurierzy** — etykiety adresowe, listy przewozowe (DHL, DPD, GLS, InPost, FedEx, UPS). Najmasowsze zastosowanie.\n• **masowe etykietowanie kartonów wysyłkowych** — masowe oznaczanie kartonów wysyłkowych w centrach dystrybucyjnych. Wysoka początkowa przyczepność kleju do tektury falistej jest tu kluczowa.\n• **Magazyn** — etykiety lokalizacyjne, półkowe, paletowe, picking, receiving, kompletacja zamówień.\n• **Produkcja** — etykiety produkcji w toku między stanowiskami, oznaczenia opakowań zbiorczych, kartonów wysyłkowych z produktów gotowych.\n• **Przemysł spożywczy** — opakowania zbiorcze sucha i wilgotna nietłusta (atest BfR XIV / EC 1935 / FDA 175.105). Do produktów tłustych wybierz Removable (BfR XXI).\n• **Healthcare i farmacja** — latex-free i BPA-free, etykiety identyfikacyjne sprzętu medycznego i partii leków.\n• **Inwentaryzacja, archiwizacja** dokumentów, etykiety partii (lot/batch), WZ.',
      },
      {
        heading: 'Z-Perform 1000T vs Z-Select 2000T',
        content:
          'Obie to papierowe etykiety TT, ale Z-Select 2000T ma **powłokę top-coat** — gładszą powierzchnię dającą ostrzejszy nadruk drobnych kodów 2D i większą odporność na wilgoć/otarcia. Z-Perform 1000T (niepowlekany) jest tańszy i w zupełności wystarcza do typowych etykiet wysyłkowych i magazynowych.\n\n**Wybierz Z-Select 2000T**, gdy drukujesz drobne kody DataMatrix/GS1, etykiety farmaceutyczne/healthcare premium lub gdy etykieta jest narażona na wilgoć i tarcie. **Do codziennej logistyki — Z-Perform 1000T** — w 90% przypadków lepszy wybór ze względu na cenę i pełen pakiet atestów.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Papier niepowlekany matowy biały, superkalandrowany (67 μm)' },
      { label: 'Klej', value: 'Permanentny akrylowy (12 μm)' },
      { label: 'Podkład', value: 'Papier glassine 62 g/m² (51 μm)' },
      { label: 'Łączna grubość', value: '130 μm (±10%)' },
      { label: 'Min. temperatura aplikacji', value: '0°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość indoor', value: '1 rok+' },
      { label: 'Trwałość magazynowa', value: '1 rok przy 20-25°C, RH 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 2300 Wax, Zebra 2100 European Wax' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, BfR XIV (suche, wilgotne nietłuste)' },
      { label: 'Atest żywnościowy (US)', value: 'FDA 175.105 (suche / przez warstwę barierową)' },
      { label: 'BPA / lateks', value: 'BPA-free, latex-free' },
      { label: 'Program Zebra', value: 'ZipShip (od ręki) + EaziPrice' },
      { label: 'Numery próbek', value: 'SAMPLE5147 (industrial), SAMPLE5147-D (do drukarek biurkowych)' },
      { label: 'Gilze (rdzeń)', value: '25 mm, 76 mm, Fanfold (bez gilzy)' },
      { label: 'Liczba wariantów', value: '458 (od 32×25 do 152×210 mm)' },
      { label: 'Grupa cenowa', value: 'Ekonomia (najczęściej kupowana etykieta termotransferowa)' },
    ],
    applications: [
      'Etykiety wysyłkowe e-commerce — DHL, DPD, InPost, FedEx, GLS, UPS',
      'masowe etykietowanie kartonów wysyłkowych — masowe oznaczanie kartonów wysyłkowych',
      'Magazyn — etykiety lokalizacyjne, półkowe, paletowe, picking, receiving',
      'Identyfikacja produktów (product identification)',
      'etykiety produkcji w toku — oznaczenia między stanowiskami produkcyjnymi',
      'Przemysł spożywczy — opakowania zbiorcze suche/wilgotne nietłuste (BfR XIV)',
      'Healthcare i farmacja — latex-free, etykiety identyfikacyjne',
      'Inwentaryzacja i archiwizacja dokumentów',
      'Etykiety partii (lot/batch), WZ, dokumentacja transportowa',
      'Etykiety na opakowania foliowe (LDPE/HDPE) — dobre trzymanie na PE',
    ],
    notRecommendedFor: [
      'Kontakt bezpośredni z **żywnością tłustą** — BfR XIV pokrywa tylko nietłustą; do tłustej wybierz Z-Perform Removable (BfR XXI z RF≥3)',
      'Oznaczenia trwałe >2 lata na produkcie końcowym — wybierz folię Z-Ultimate 3000T',
      'Drobne kody 2D / DataMatrix / GS1 — brak top-coatu, wybierz Z-Select 2000T dla najostrzejszego nadruku',
      'Kontakt z chemikaliami, rozpuszczalnikami, olejami — wybierz folię żywicową lub PolyPro',
      'Aplikacje outdoor / ekspozycja UV — papier szybko blaknie, wybierz folię',
      'Aplikacje poniżej 0°C — minimalna temp. aplikacji to 0°C; do chłodni wybierz Z-Perform Removable (od -15°C) lub 8000T All-Temp',
      'Mokre powierzchnie i zanurzenie w wodzie',
      'Druk termiczny bezpośredni (DT, bez taśmy) — to materiał TT, wymaga taśmy',
    ],
    compatiblePrinters: {
      desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XIV', description: 'Niemiecki standard dla materiałów w kontakcie z **suchą i wilgotną żywnością nietłustą** (uwaga: BfR XIV NIE pokrywa produktów tłustych — do tłustych wybierz Z-Perform Removable z BfR XXI).' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w kontakcie z suchymi produktami spożywczymi lub poprzez warstwę barierową.' },
      { name: 'BPA-free', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
      { name: 'Latex-free', description: 'Bez lateksu — ważne dla osób uczulonych i dla zastosowań healthcare/laboratoria.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-select-2000t', whenToChooseThis: 'Wybierz Z-Perform 1000T do typowej wysyłki, magazynu i masowego etykietowania kartonów — taniej i z pełnym pakietem atestów. Z-Select 2000T tylko gdy potrzebujesz powłoki top-coat (ostrzejsze kody dwuwymiarowe, ochrona zdrowia, ekspozycja na wilgoć).' },
      { seriesSlug: 'z-perform-1000t-removable', whenToChooseThis: 'Wybierz Z-Perform 1000T (permanentny) do oznaczeń trwałych — etykiet wysyłkowych, identyfikacji produktów na lata. **Removable** (klej zdejmowalny) wybierz gdy etykieta MUSI być usunięta bez śladów (promocje, sprzęt zwrotny, WIP) lub do tłustej żywności (BfR XXI).' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'Z-Perform 1000T do oznaczeń krótko- i średnioterminowych na kartonach. Z-Ultimate 3000T White (folia) gdy etykieta ma przetrwać lata na produkcie końcowym lub w trudnych warunkach (chemikalia, UV, wilgoć).' },
      { seriesSlug: 'z-essentials-500t', whenToChooseThis: 'Wybierz Z-Perform 1000T — bestseller z pełnym pakietem atestów BfR/FDA. Z-Essentials 500T tylko gdy priorytetem jest najniższy koszt i NIE potrzebujesz atestów żywnościowych ani szerokiej gamy rozmiarów.' },
    ],
    faq: [
      { question: 'Czym różni się Z-Perform 1000T od 1000D?', answer: 'Z-Perform 1000T to **termotransfer (TT)** — wymaga taśmy barwiącej i daje trwały nadruk odporny na ścieranie, w pomieszczeniach 1 rok i więcej. 1000D to **direct thermal (DT)** — drukuje bez taśmy, ale nadruk z czasem blaknie (6-12 mies.). Do oznaczeń trwałych i etykiet które mają być czytelne za rok wybierz 1000T. Do krótkoterminowych (paragony, etykiety wysyłkowe doręczane w dni) — 1000D.' },
      { question: 'Jaką taśmę barwiącą dobrać?', answer: '**Pierwszy wybór: Zebra 2300 Wax** — bestseller wosk, najtańszy koszt nadruku w portfolio Zebra TT. Wystarcza do większości zastosowań magazynowych i wysyłkowych. Alternatywa: **Zebra 2100 European Wax** (premium, ostrzejszy nadruk dla drobnych kodów 2D i chłodni). Nie używaj taśm żywicowych (resin) — przepłacenie, resin jest pod folie syntetyczne. Dla aplikacji wymagających wyższej odporności na ścieranie rozważ Zebra 3200 Wax/Resin.' },
      { question: 'Czy Z-Perform 1000T ma atest żywnościowy?', answer: 'Tak — komplet atestów UE i USA: **EC 1935/2004, EU 10/2011, BfR XIV** (kontakt z żywnością **suchą i wilgotną nietłustą**), oraz **FDA 175.105** (USA, suche produkty lub przez warstwę barierową). Materiał jest **BPA-free i latex-free**. UWAGA: do żywności **tłustej** wybierz Z-Perform 1000T Removable (BfR XXI z reduction factor ≥3) — Z-Perform standard nie pokrywa tłustych.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: superkalandrowany matowy biały papier niepowlekany **67 μm**. Klej permanentny akrylowy **12 μm**. Podkład glassine 62 g/m² **51 μm**. **Łączna grubość 130 μm (±10%)** — standardowa do automatycznych aplikatorów i wszystkich drukarek termicznych Zebra.' },
      { question: 'W jakich temperaturach mogę aplikować i używać?', answer: 'Minimalna temperatura aplikacji: **0°C** (poniżej klej akrylowy nie aktywuje się prawidłowo). Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C**. Do aplikacji w chłodni (od -15°C) wybierz **Z-Perform 1000T Removable** (specjalnie odporny na zimno klej). Do mroźni głębokich (od -40°C) wybierz **8000T All-Temp**.' },
      { question: 'Jak długo etykieta zachowuje czytelność?', answer: '**W pomieszczeniach 1 rok i więcej** — czytelność nadruku po prawidłowej aplikacji i 24h aklimatyzacji. Po 1 roku zarówno klej jak i nadruk pozostają zwykle czytelne, ale Zebra nie gwarantuje dłuższego okresu. Do etykiet które muszą żyć **>2 lata** wybierz folię (Z-Ultimate 3000T White lub PolyPro 3000T).' },
      { question: 'Ile wariantów rozmiarowych jest dostępnych?', answer: '**458 wariantów** — od 32×25 mm do 152×210 mm, w rdzeniu (gilzie) **25 mm**, **76 mm** oraz w wersji **Fanfold** (składanka bez gilzy do masowego druku w drukarkach przemysłowych). Użyj filtrów rozmiaru i gilzy na liście wariantów, żeby zawęzić wybór.' },
      { question: 'Co to jest program Zebra ZipShip?', answer: '**ZipShip to program Zebry oferujący szybką dostawę** najpopularniejszych etykiet z magazynu europejskiego — od ręki, bez czekania na produkcję na zamówienie. Z-Perform 1000T jest oznaczony jako "Available From stock on ZipShip" — większość standardowych rozmiarów dociera w 1-3 dni robocze. Mniej popularne rozmiary lub niestandardowe konfiguracje to 5-10 dni (sprowadzane z EU). EaziPrice to z kolei program **stałych, transparentnych cen** dla popularnych wariantów.' },
      { question: 'Jak przechowywać rolki przed użyciem?', answer: 'Optymalnie: **20–25°C, wilgotność względna 40–50%**, w oryginalnym opakowaniu, z dala od bezpośredniego światła słonecznego. W tych warunkach materiał zachowuje pełną wydajność przez **1 rok** od daty produkcji. Przechowywanie w wysokiej wilgotności (>70%) lub temperaturze >30°C skraca trwałość kleju i może powodować zwijanie rolki.' },
      { question: 'Czy mogę zamówić własny rozmiar lub nadruk?', answer: 'Tak. Zebra produkuje Z-Perform 1000T **w praktycznie dowolnych rozmiarach, kształtach i konfiguracjach** — od 25×10 mm do 200×300 mm, prostokątne, owalne, perforowane. Drukarki fleksograficzne Zebry umożliwiają dodanie **wstępnie nadrukowanych elementów** (logo, kolory, ramki) na masowych zamówieniach. Skontaktuj się z TAKMA — przygotujemy wycenę dla nietypowych rozmiarów i nadruków pre-printed.' },
      { question: 'Co znaczy "superkalandrowany papier"?', answer: 'Superkalandrowanie to **proces walcowania papieru pod wysokim ciśnieniem i temperaturą**, który ujednolica strukturę powierzchni — zmniejsza chropowatość i zwiększa gęstość. W praktyce papier superkalandrowany przyjmuje wierniej nadruk z taśmy termotransferowej, daje ostrzejsze krawędzie liter i kodów niż zwykły papier offsetowy. To dlatego nawet bez powłoki top-coat Z-Perform 1000T zapewnia czytelność druku akceptowalną do większości zastosowań przemysłowych.' },
      { question: 'Czy mogę zamówić próbki do testów?', answer: 'Tak — Zebra udostępnia próbne rolki dla testów: **SAMPLE5147** (do drukarek mid-range i high-performance — gilza 76 mm) oraz **SAMPLE5147-D** (do drukarek desktop — gilza 25 mm). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma + etykieta + drukarka do Twojej aplikacji.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 2300 Wax', 'Zebra 1600 Wax'],
    },
  },

  /* ──────────────── 2. Z-PERFORM 1000T REMOVABLE — klej zdejmowalny ──────────────── */
  {
    slug: 'z-perform-1000t-removable',
    productId: 'zebra-z-perform-1000t-removable',
    subcategory: 'papierowe',
    badge: 'Z-Perform 1000T Removable',
    title: 'Z-Perform 1000T Removable',
    tagline: 'Papier z klejem zdejmowalnym — odlepia się bez śladów. Do ekspozytorów i etykiet czasowych.',
    positioning: 'specjalistyczna',
    material: 'papier-niepowlekany',
    glue: 'zdejmowalny',
    topcoat: false,
    removable: true,
    foodSafe: true,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 489.88,
    accent: '#2563EB',
    seoTitle: 'Zebra Z-Perform 1000T Removable | papier z klejem zdejmowalnym TT',
    seoDescription: 'Zebra Z-Perform 1000T Removable — papierowe etykiety termotransferowe z klejem zdejmowalnym, odlepiają się bez śladów. Do ekspozytorów, etykiet promocyjnych i czasowych. 96 wariantów od 490 zł.',
    h1: 'Etykiety termotransferowe Zebra Z-Perform 1000T Removable',
    heroIntro: 'Z-Perform 1000T Removable to **papierowa etykieta termotransferowa Zebra z klejem zdejmowalnym (removable acrylic)** — odlepia się czysto, bez resztek kleju, śladów ani rozdarć papieru, nawet po długim czasie. Konstrukcja: papier niepowlekany **66 μm** + klej zdejmowalny **12 μm** + podkład glassine **57 g/m²** (51 μm). Wyjątkowa cecha klasy removable: **minimalna temperatura aplikacji -15°C**, zakres pracy **-30°C do +80°C** — pasuje do chłodni i magazynów mroźniczych. Komplet atestów żywnościowych UE i USA (EC 1935/2004, EU 10/2011, BfR XXI, FDA 175.105), **BPA-free**, **latex-free**. Trwałość indoor do 1 roku, magazynowa rolki — 1 rok.',
    heroImage: '/images/etykiety-zebra-z-perform-1000t-removable.png',
    heroImagePosition: 'center 30%',
    keyHighlights: [
      'Klej zdejmowalny — **good long term removability**, odlepia się bez śladów nawet po długim czasie',
      'Aplikacja od **-15°C**, praca **-30°C do +80°C** — wyjątkowa odporność na zimno w klasie removable',
      'Komplet atestów: BfR XXI, EC 1935/2004, EU 10/2011 (UE) + FDA 175.105 (USA)',
      'BPA-free, latex-free — bezpieczne dla healthcare i farmacji',
      'Konstrukcja: papier 66 μm + klej 12 μm + glassine 51 μm (łącznie 129 μm ±10%)',
      'Drukarki desktop, mid-range i industrial Zebra — taśmy wosk 2300 / 2100',
    ],
    sections: [
      {
        heading: 'Czym jest klej zdejmowalny (removable)?',
        content:
          'Klej zdejmowalny to klej o **kontrolowanej, niższej sile przyczepności** w porównaniu z klejem permanentnym — etykieta trzyma się pewnie podczas użytkowania, ale po naklejeniu i 24h aklimatyzacji można ją odlepić czysto, bez pozostawiania resztek kleju, rozdarć papieru ani widocznych śladów na powierzchni. Zebra deklaruje „good long term removability" — co oznacza że właściwość zdejmowania zachowuje się nawet po **długim czasie nalepienia**, nie tylko w pierwszych dniach.\n\nKluczowa różnica vs Z-Perform 1000T standard (klej permanentny): standardowy klej przy odrywaniu rozdziera papier, pozostawia warstwę kleju na powierzchni i wymaga rozpuszczalnika do wyczyszczenia. Wersja Removable usuwa się **jednym ruchem dłoni**, bez śladów. To czyni materiał odpowiednim wszędzie tam gdzie etykietowana powierzchnia musi pozostać czysta po użyciu.\n\nUwaga: „zdejmowalny" nie oznacza klej wielokrotnego użytku — etykieta po odklejeniu nie nadaje się do ponownego naklejenia z pełną siłą. Im bardziej porowata powierzchnia (papier, niemalowane drewno, beton), tym trudniejsze czyste zdjęcie. Najlepsze rezultaty: gładkie, nieporowate powierzchnie (metal, szkło, plastik, lakierowane drewno).',
      },
      {
        heading: 'Odporność na zimno — kluczowy wyróżnik serii',
        content:
          'W większości klasy removable klej akrylowy nie aktywuje się poniżej +5°C — naklejanie w chłodni czy magazynie mroźniczym kończy się odpadnięciem etykiety. Z-Perform 1000T Removable jest **świadomie zaprojektowany z odpornością na niskie temperatury**:\n\n• **Minimalna temperatura aplikacji: -15°C** — możesz naklejać w chłodni i schłodzonym magazynie bez ryzyka, że etykieta odpadnie. To dwa-trzy razy niższa wartość niż w typowych klejach removable.\n• **Zakres temperatury pracy: -30°C do +80°C** (po prawidłowej aplikacji i 24h aklimatyzacji) — etykieta wytrzyma transport mrożonej żywności, magazynowanie w mroźni i ekspozycję na nagrzane słońcem powierzchnie.\n\nW praktyce oznacza to że Z-Perform 1000T Removable to **jedyna w klasie** opcja dla aplikacji wymagających zarówno zdejmowalności jak i niskich temperatur: oznaczanie partii w przemyśle spożywczym (chłodnia), kontrola jakości w mroźni, etykiety inwentaryzacyjne w nieogrzewanych magazynach, tymczasowe oznakowanie produktów chłodzonych i mrożonych.',
      },
      {
        heading: 'Atesty żywnościowe i bezpieczeństwo',
        content:
          'Pomimo że to klej zdejmowalny, Z-Perform 1000T Removable spełnia **pełen pakiet regulacji żywnościowych**:\n\n• **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n• **EU 10/2011** — wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością\n• **BfR Recommendation XXI** (Niemcy) — kontakt bezpośredni z suchymi, wilgotnymi i tłustymi produktami (reduction factor ≥3)\n• **FDA 175.105** (USA) — kontakt z suchymi produktami\n• **BPA-free** — bez bisfenolu A\n• **Latex-free** — bez lateksu (ważne w healthcare i dla osób uczulonych)\n\nW praktyce możesz stosować ten materiał na opakowaniach zbiorczych żywności (palety, kartony, tote biny), w farmacji do oznaczania partii i statusu, w healthcare jako etykiety identyfikacyjne sprzętu. Latex-free dodatkowo otwiera zastosowania w środowiskach gdzie alergeny są istotne (sale operacyjne, laboratoria).',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Perform 1000T Removable sprawdza się wszędzie tam, gdzie etykieta jest **tymczasowa**, a powierzchnia musi pozostać czysta po jej usunięciu:\n\n• **Retail i POS** — etykiety promocyjne, cenowe, oznaczenia ekspozytorów. Zdejmujesz po akcji bez śladów na produkcie ani na meblach sklepowych.\n• **Logistyka** — etykiety na pudła, palety, tote biny (boxes, pallets, tote bins). Wielokrotnie używane opakowania zwrotne pozostają czyste między obiegami.\n• **Produkcja — etykiety produkcji w toku** — etykiety statusu między stanowiskami montażowymi, kontrola jakości (hold/release/QC), oznaczenia partii.\n• **Wynajem, leasing, demonstracja** — etykiety inwentaryzacyjne na sprzęcie zwrotnym (Z-Perform 1000T Removable to standard dla firm wypożyczających sprzęt IT, narzędzia, urządzenia medyczne).\n• **Chłodnia i mroźnia** — oznaczanie partii żywności, daty produkcji, identyfikacja produktów. Aplikacja od -15°C, praca do -30°C — wyjątkowa zaleta w klasie.\n• **Witryny sklepowe, etykiety półkowe** — wymieniane co tydzień/miesiąc, szyby i półki pozostają czyste.\n• **Etykiety na produktach prezentowych** — demonstratory, sample, opakowania zwracane do dystrybutora.',
      },
      {
        heading: 'Z jaką taśmą drukować?',
        content:
          'Z-Perform 1000T Removable jest **kompatybilny z taśmami woskowymi Zebra 2300 i 2100**. Klej zdejmowalny nie wpływa na proces druku ani na dobór taśmy — liczy się sam materiał facestock (papier niepowlekany matowy):\n\n• **Zebra 2300 Wax** — pierwszy wybór, bestseller wosk. Czytelny nadruk do logistyki i WIP w zastosowaniach standardowych.\n• **Zebra 2100 European Wax** — premium europejska, ostrzejszy nadruk dla drobnych elementów. Zalecana dla etykiet z drobnymi kodami 2D, etykiet farmaceutycznych, druku grafiki o wyższej rozdzielczości.\n\n**Nie używaj taśm wosk-żywica ani resin** na tym materiale — papier niepowlekany nie potrzebuje dodatkowej odporności nadruku, a różnica w cenie taśmy to czysty narzut. Wyjątek: jeśli etykieta będzie często ścierana w obiegu (np. tote biny w wymiennym obiegu), 2300 Wax w pełni wystarczy.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Papier niepowlekany matowy biały (66 μm)' },
      { label: 'Klej', value: 'Zdejmowalny akrylowy, removable (12 μm)' },
      { label: 'Podkład', value: 'Papier glassine 57 g/m² (51 μm)' },
      { label: 'Łączna grubość', value: '129 μm (±10%)' },
      { label: 'Min. temperatura aplikacji', value: '-15°C (wyjątkowo niska w klasie removable)' },
      { label: 'Zakres temperatury pracy', value: '-30°C do +80°C' },
      { label: 'Trwałość indoor', value: 'do 1 roku' },
      { label: 'Trwałość magazynowa', value: '1 rok przy 20-25°C, RH 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 2300 Wax, Zebra 2100 European Wax' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, BfR XXI (suche, wilgotne, tłuste RF≥3)' },
      { label: 'Atest żywnościowy (US)', value: 'FDA 175.105 (suche produkty)' },
      { label: 'BPA / lateks', value: 'BPA-free, latex-free' },
      { label: 'Numer próbki Zebra', value: 'SAMPLE5207' },
      { label: 'Gilze (rdzeń)', value: '25 mm, 76 mm, Fanfold' },
      { label: 'Liczba wariantów', value: '96' },
      { label: 'Grupa cenowa', value: 'Średnia' },
    ],
    applications: [
      'Retail — etykiety promocyjne i cenowe (zdejmujesz po promocji bez śladów na produkcie)',
      'Ekspozytory i POS — czasowe oznaczenia na meblach sklepowych i witrynach',
      'Logistyka — etykiety na pudła, palety, tote biny (boxes, pallets, tote bins)',
      'Identyfikacja produktów zwrotnych — wynajem, leasing, sprzęt demonstracyjny',
      'Etykiety prac w toku (produkcja w toku) — usuwane po zakończeniu etapu produkcji',
      'Kontrola jakości (QC) — etykiety statusu, partii, hold/release',
      'Etykiety półkowe w supermarketach',
      'Aplikacje w chłodni i mroźni — aplikacja od -15°C, praca do -30°C',
      'Opakowania zbiorcze w przemyśle spożywczym (atest BfR XXI / EC / FDA)',
      'Healthcare i farmacja — latex-free, BPA-free, etykiety identyfikacyjne sprzętu',
    ],
    notRecommendedFor: [
      'Oznaczenia trwałe (na lata) — klej zdejmowalny nie ma siły kleju permanentnego, wybierz Z-Perform 1000T standard',
      'Powierzchnie porowate (papier, beton, niemalowane drewno) — usunięcie pozostawia drobne resztki',
      'Powierzchnie zaolejone, silikonowane, mocno zakurzone — słaby chwyt nawet w warunkach idealnych',
      'Aplikacje poniżej -15°C — minimalna temperatura aplikacji to -15°C; do mroźni głębokich wybierz 8000T All-Temp',
      'Outdoor, wilgoć, ekspozycja słoneczna >miesiąc — papier niepowlekany blaknie, wybierz folię (Z-Ultimate)',
      'Drobne kody 2D / DataMatrix — brak top-coatu, wybierz Z-Select 2000T jeśli kod musi być bardzo ostry',
      'Druk termiczny bezpośredni (DT, bez taśmy) — to materiał TT, wymaga taśmy barwiącej',
    ],
    compatiblePrinters: {
      desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XXI', description: 'Niemiecki standard dla materiałów do kontaktu z żywnością — pokrywa suche, wilgotne i tłuste produkty z reduction factor ≥3.' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w kontakcie z suchymi produktami spożywczymi.' },
      { name: 'BPA-free', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
      { name: 'Latex-free', description: 'Bez lateksu — ważne dla osób uczulonych i dla zastosowań healthcare/laboratoria.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: 'Wybierz wersję Removable gdy etykieta MUSI być usunięta bez śladów (promocje, ekspozytory, sprzęt zwrotny, WIP). Standard 1000T (klej permanentny) do oznaczeń stałych — etykiet wysyłkowych, identyfikacji produktów na lata, magazynowych regałów.' },
      { seriesSlug: 'z-select-2000t', whenToChooseThis: 'Wybierz Removable gdy zdejmowalność jest priorytetem. Z-Select 2000T ma top-coat (ostrzejszy nadruk drobnych kodów 2D, healthcare) ale klej permanentny — nie usuniesz bez śladów.' },
    ],
    faq: [
      { question: 'Czy klej zdejmowalny trzyma pewnie?', answer: 'Tak — podczas normalnego użytkowania etykieta trzyma się dobrze na gładkich, nieporowatych powierzchniach (metal, szkło, plastik, lakierowane drewno). Zebra deklaruje **good tack and adhesion to a wide range of surfaces** w spec sheet. Różnica vs klej permanentny polega na tym, że przy świadomym ściągnięciu etykieta odlepia się czysto, bez śladów. Na powierzchniach porowatych (papier, beton, niemalowane drewno) i po bardzo długim czasie zdjęcie może być trudniejsze.' },
      { question: 'Czy etykieta jest wielokrotnego użytku?', answer: 'Nie. **„Zdejmowalny" oznacza możliwość czystego usunięcia, ale po odklejeniu etykieta nie nadaje się do ponownego naklejenia** z pełną siłą — klej akrylowy traci znaczną część właściwości po pierwszym oderwaniu. To etykieta jednorazowa, ale z opcją kontrolowanego usunięcia.' },
      { question: 'Jak długo można odlepiać bez śladów?', answer: 'Zebra w spec sheet używa terminu **good long term removability** — w praktyce klej zachowuje właściwości zdejmowania nawet po kilku miesiącach. Im krótszy czas nalepienia, tym łatwiejsze zdjęcie. Trwałość samej etykiety w aplikacji to **do 1 roku w pomieszczeniach** — po tym czasie zarówno nadruk jak i klej mogą się degradować.' },
      { question: 'Czy mogę naklejać w chłodni?', answer: 'Tak — **minimalna temperatura aplikacji to -15°C**, co czyni ten materiał wyjątkowym w klasie klejów removable (większość konkurentów wymaga +5°C). Sprawdza się w aplikacji etykiet w chłodni produktowej, magazynach mroźniczych, na produktach świeżych. Praca do **-30°C** — etykieta wytrzyma transport mrożonek.' },
      { question: 'Czy ma atest żywnościowy?', answer: 'Tak — komplet atestów UE i USA: **EC 1935/2004, EU 10/2011, BfR XXI** dla suchych, wilgotnych i tłustych produktów (reduction factor ≥3), oraz **FDA 175.105** (USA) dla suchych produktów. Możesz stosować na opakowaniach zbiorczych żywności (palety, kartony, tote biny). Klej jest **BPA-free i latex-free**.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Taśma **wosk Zebra 2300** (bestseller) lub **2100 European Wax** (premium, ostrzejszy nadruk). Klej zdejmowalny nie wpływa na dobór taśmy — liczy się sam papier facestock. Nie używaj resin ani wosk-żywica — to przepłacenie dla papieru niepowlekanego.' },
      { question: 'Czym Removable różni się od standardowego Z-Perform 1000T?', answer: 'Ten sam papier niepowlekany matowy, **różny tylko klej**. Standard 1000T ma klej permanentny (15 N/25 mm na stali) — przy odrywaniu rozdziera etykietę i zostawia klej. Removable ma klej zdejmowalny (~3-5 N/25 mm) — odlepia się czysto. Plus Removable ma lepszą **odporność na zimno** (min. aplikacji -15°C vs 0°C w standardzie). Cena Removable jest wyższa ze względu na specjalistyczny klej i mniejsze wolumeny produkcji.' },
      { question: 'Czy nadaje się do healthcare i farmacji?', answer: 'Tak. **Latex-free i BPA-free** — bezpieczne dla osób uczulonych i w środowiskach gdzie alergeny są kontrolowane (sale operacyjne, laboratoria). Atesty żywnościowe (BfR/EC) potwierdzają bezpieczeństwo materiału. Typowe zastosowania: etykiety identyfikacyjne sprzętu medycznego (zdejmowalne po sterylizacji/wymianie), oznaczanie próbek laboratoryjnych, etykiety na pojemnikach na próbki.' },
      { question: 'Czy mogę usunąć etykietę po roku?', answer: 'Tak, w zdecydowanej większości przypadków — Zebra deklaruje **good long term removability**. W praktyce zależy to od powierzchni i warunków: na gładkim metalu/szkle zdejmie się bezproblemowo po kilkunastu miesiącach, na powierzchni lakierowanej już z drobnymi resztkami kleju (do wytarcia szmatką z izopropanolem), na powierzchni porowatej (papier, beton) może wymagać dłuższego ściągania.' },
      { question: 'Do jakich drukarek pasuje?', answer: 'Do **dowolnej drukarki termotransferowej Zebra**: desktop (ZD230t, ZD421t, ZD621t), mid-range (ZT231) i industrial (ZT411, ZT421, ZT610, ZT620). Z-Perform 1000T Removable to standardowy materiał TT — pasuje też do drukarek innych producentów (Honeywell, TSC, Brother, Citizen).' },
      { question: 'Jak przechowywać rolki przed użyciem?', answer: 'Optymalnie: **20–25°C, wilgotność względna 40–50%**, w oryginalnym opakowaniu, z dala od bezpośredniego światła słonecznego. W tych warunkach materiał zachowuje pełną wydajność przez **1 rok** od daty produkcji (znacznie dłużej niż Z-Essentials 500T — 6 mies.). Przechowywanie w wysokiej wilgotności lub temperaturze >30°C skraca trwałość kleju.' },
      { question: 'Czy mogę zamówić własny rozmiar?', answer: 'Tak — Zebra produkuje Z-Perform 1000T Removable w **96 standardowych wariantach rozmiarowych** (gilze 25 mm, 76 mm, Fanfold), oraz na zamówienie w niemal dowolnych rozmiarach i kształtach. Drukarki fleksograficzne Zebry umożliwiają dodanie pre-printed elementów (logo, kolory, ramki) dla większych zamówień. Skontaktuj się z TAKMA — przygotujemy wycenę dla nietypowych rozmiarów.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 2300 Wax'],
    },
  },

  /* ──────────────── 3. Z-SELECT 2000T — premium papier powlekany ──────────────── */
  {
    slug: 'z-select-2000t',
    productId: 'zebra-z-select-2000t',
    subcategory: 'papierowe',
    badge: 'Z-Select 2000T',
    title: 'Z-Select 2000T',
    tagline: 'Premium papier powlekany top-coat — ostry nadruk drobnych kodów, do healthcare i farmacji.',
    positioning: 'premium',
    material: 'papier-powlekany',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: true,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 292.83,
    accent: '#2563EB',
    seoTitle: 'Zebra Z-Select 2000T | premium papier powlekany termotransferowy',
    seoDescription: 'Zebra Z-Select 2000T — premium powlekane papierowe etykiety termotransferowe. Top-coat daje ostry nadruk drobnych kodów 2D i odporność na wilgoć. Do healthcare, farmacji, etykiet produktowych. 46 wariantów od 293 zł.',
    h1: 'Etykiety termotransferowe Zebra Z-Select 2000T',
    heroIntro: 'Z-Select 2000T to **premium papierowa etykieta termotransferowa Zebra z ochronną powłoką top-coat**[[?Top-coat to cienka, nadrukowywalna warstwa polimerowa nanoszona na papier w fabryce. Tworzy gładką powierzchnię, na której nadruk z taśmy odkłada się równo — krawędzie kodów i liter są ostre. Dodatkowo chroni papier przed wilgocią, olejami i lekkim tarciem.]] na powierzchni druku. Lico z papieru powlekanego **74 μm**[[?μm = mikrometr = jedna tysięczna milimetra. Dla porównania: ludzki włos ma około 70 μm, a kartka papieru biurowego około 100 μm. 74 μm to standardowa grubość papieru etykietowego premium.]] zapewnia precyzyjny nadruk drobnych kodów kreskowych 2D oraz tekstu w mniejszych rozmiarach, a powłoka chroni etykietę przed wilgocią, olejami i drobnymi otarciami w obiegu sklepowym czy magazynowym.\n\nKluczowa różnica w porównaniu z ekonomiczną serią Z-Perform 1000T: powłoka pozwala drukować **z większą prędkością bez utraty jakości**, jednocześnie **mniej ścierając głowicę termiczną drukarki** (dłuższy serwis sprzętu). To wybór tam, gdzie liczy się łatwość skanowania drobnych kodów (apteka, healthcare), trwałość nadruku w trudniejszych warunkach (retail z dotykiem klientów) oraz wysokonakładowy druk w centrach dystrybucyjnych.',
    heroImage: '/images/etykiety-zebra-z-select-2000t.png',
    heroImagePosition: 'center 30%',
    keyHighlights: [
      'Powłoka ochronna top-coat — ostrzejszy nadruk, wyższa prędkość druku, dłuższa żywotność głowicy drukarki',
      'Konstrukcja: papier 74 μm + klej 14 μm + papier silikonowany 51 μm (łącznie 139 μm ±10%)',
      'Odporność na wilgoć, oleje i drobne czynniki środowiskowe',
      'Najszersza zgodność taśm w klasie — 5 modeli: Zebra 2300, 2100, 3200, 3400, 5555 (wosk i wosk-żywica)',
      'Jedyna etykieta papierowa oficjalnie wspierana przez **mobilną drukarkę Zebra P4T**',
      'Komplet atestów żywnościowych: EC 1935/2004, EU 10/2011, BfR XIV (UE), FDA 175.105 (USA)',
      'Bez bisfenolu A i bez lateksu — bezpieczna dla aptek, szpitali i opakowań żywności',
      'Trwałość w pomieszczeniach **1 rok i więcej**, zakres pracy **-20°C do +80°C**',
      '46 wariantów rozmiarowych, gilze 25 mm i 76 mm, dostępna od ręki z magazynu europejskiego (program Zebra ZipShip)',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Select 2000T?',
        content:
          'Z-Select 2000T to **premium papierowa etykieta termotransferowa Zebra z ochronną powłoką top-coat** na wierzchu papieru. Powłoka to cienka warstwa polimerowa, która tworzy ultra-gładką powierzchnię — przyjmuje nadruk z taśmy precyzyjniej niż papier niepowlekany, krawędzie kodów i znaków są ostre, a poniżej widać wyraźną przewagę nad ekonomiczną serią Z-Perform 1000T.\n\nMateriał jest **dostępny w programie Zebra ZipShip** (od ręki z magazynu europejskiego). 46 wariantów rozmiarowych w rdzeniu (gilzie) 25 mm i 76 mm. To wybór tam, gdzie **jakość nadruku, niezawodność skanowania i odporność etykiety** są ważniejsze niż najniższa cena za rolkę.',
      },
      {
        heading: 'Cztery korzyści powłoki top-coat względem papieru niepowlekanego',
        content:
          'Zebra w karcie katalogowej wymienia **cztery konkretne korzyści** powłoki top-coat względem materiałów niepowlekanych typu Z-Perform 1000T:\n\n- **Doskonała jakość i ostrość nadruku** — najostrzejszy nadruk drobnych kodów dwuwymiarowych (DataMatrix, GS1, QR), drobnego tekstu i grafiki. Krawędzie liter są wyraźne, kod skanuje się przy pierwszym przejściu skanera nawet w trudnych warunkach świetlnych.\n- **Wyższa prędkość druku** — możliwa wyższa prędkość druku (np. z 152 mm/s na 254 mm/s) bez utraty jakości. To kluczowe w wysokonakładowych liniach (handel internetowy, sezonowe akcje detaliczne, druk produkcyjny seriami).\n- **Dłuższa żywotność głowicy drukarki** — gładka powierzchnia mniej ściera głowicę termiczną drukarki. W praktyce: dłuższy serwis głowicy (wydłużenie żywotności o 20-40% w cyklach Zebry), niższe koszty utrzymania sprzętu.\n- **Odporność na wilgoć, oleje i czynniki środowiskowe** — top-coat chroni nadruk i papier przed wilgocią, olejami, lekkim tarciem. Etykieta wytrzymuje dotyk wilgotnymi dłońmi (sklepy spożywcze), ekspozycję na opary, krótki kontakt z olejem maszynowym.\n\nW praktyce różnica jest widoczna od pierwszego druku — kody dwuwymiarowe skanują się szybciej i z większego dystansu, a etykiety lepiej znoszą obieg w magazynie.',
      },
      {
        heading: 'Konstrukcja i parametry techniczne',
        content:
          'Z-Select 2000T ma trzywarstwową konstrukcję z dodatkową powłoką top-coat na licu:\n\n- **Lico — 74 μm** — matowy biały papier z ochronną powłoką top-coat. To **7 μm więcej** niż lico Z-Perform 1000T (67 μm) — różnica to właśnie warstwa top-coat.\n- **Klej — 14 μm** — trwały akrylowy. Nieco grubszy niż w Z-Perform (12 μm) — daje silniejsze trzymanie na trudniejszych powierzchniach (lakierowany metal, plastik, opakowania szklane).\n- **Podkład — 51 μm (57 g/m²)** — papier silikonowany (typu glassine), półprzezroczysty z cienką warstwą antyadhezyjną. Standard branżowy w etykietach samoprzylepnych — etykieta odlepia się od niego czysto, a podkład pozwala na automatyczną aplikację w aplikatorach przemysłowych.\n\n**Łączna grubość 139 μm (±10%)** — o 9 μm więcej niż Z-Perform 1000T (130 μm). W praktyce: pasuje do wszystkich drukarek Zebra które przyjmują standardowe materiały termotransferowe, z niewielkim wpływem na pojemność rolki (krótszy metraż na tej samej średnicy zewnętrznej).\n\n**Wydajność:**\n\n- Minimalna temperatura aplikacji: **0°C**\n- Zakres temperatury pracy: **-20°C do +80°C** (po 24-godzinnej aklimatyzacji)\n- Trwałość użytkowa: **w pomieszczeniach 1 rok i więcej**\n- Trwałość magazynowa rolki: **1 rok** przy 20-25°C i wilgotności względnej 40-50% (powyżej 70% klej akrylowy może migrować i papier się zwija; poniżej 20% papier staje się kruchy)\n\nNumer próbki Zebry: **SAMPLE5257** (jeden uniwersalny dla wszystkich drukarek — biurkowych, średnich, przemysłowych i mobilnej P4T).',
      },
      {
        heading: 'Z jaką taśmą drukować? — najszersza zgodność w klasie',
        content:
          'Z-Select 2000T jest **kompatybilny z bardzo szeroką gamą taśm woskowych i wosk-żywicowych** — według Zebry: **2300, 2100, 3400, 3200, 5555**. To więcej niż Z-Perform 1000T (tylko 2300/2100), bo top-coat dobrze współpracuje z taśmami żywicowymi.\n\n- **Zebra 2300 Wax** — najczęściej kupowana taśma woskowa, do typowych zastosowań magazynowych i sklepowych\n- **Zebra 2100 European Wax** — taśma woskowa klasy premium, ostrzejszy nadruk, dobrze sprawdza się w chłodni i mroźni\n- **Zebra 3200 Wax-Resin** — wosk-żywica, lepsza odporność na ścieranie, zalecana do zastosowań medycznych i sklepowych klasy premium\n- **Zebra 3400 Wax-Resin** — wosk-żywica klasy premium, lepsza odporność chemiczna i na promieniowanie UV\n- **Zebra 5555 Wax-Resin** — specjalistyczna wosk-żywica, najlepsza odporność dla papieru powlekanego\n\nDla **drobnych kodów dwuwymiarowych (DataMatrix, GS1) i tekstu farmaceutycznego** zalecamy taśmy wosk-żywica (3200/3400) — wykorzystują pełen potencjał powłoki top-coat.',
      },
      {
        heading: 'Atesty żywnościowe i bezpieczeństwo',
        content:
          'Z-Select 2000T spełnia **komplet regulacji żywnościowych UE i USA** wymaganych w handlu detalicznym i ochronie zdrowia:\n\n- **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n- **EU 10/2011** — wymagania dla tworzyw sztucznych w kontakcie z żywnością\n- **BfR Recommendation XIV** (Niemcy) — kontakt bezpośredni z **żywnością suchą i wilgotną nietłustą**. UWAGA: BfR XIV NIE pokrywa produktów tłustych — do tłustych wybierz Z-Perform 1000T Removable (BfR XXI z reduction factor ≥3)\n- **FDA 175.105** (USA) — kontakt z suchymi produktami lub poprzez warstwę barierową\n- **Bez bisfenolu A** (BPA-free) — wymóg dla opakowań żywności w UE\n- **Bez lateksu** — kluczowe w służbie zdrowia, na salach operacyjnych i dla osób uczulonych na lateks\n\nW handlu detalicznym możesz używać Z-Select 2000T na **etykietach półkowych w sklepach spożywczych, etykietach cenowych obok produktów, etykietach produktowych klasy premium**. W służbie zdrowia to standard do **etykietowania pakietów sterylizacyjnych** (autoklaw, gaz EtO), oznaczania próbek laboratoryjnych, etykiet na fiolkach z lekami.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Select 2000T jest standardem tam, gdzie **jakość nadruku i niezawodność skanowania** są ważniejsze niż najniższa cena:\n\n- **Handel detaliczny — etykiety półkowe, cenowe i produktowe** na półkach sklepowych. Top-coat zapewnia odporność na dotyk wilgotnymi dłońmi i wytrzymałość w obrocie sezonowym.\n- **Służba zdrowia — etykiety pakietów sterylizacyjnych** (odporność na proces sterylizacji autoklawem lub gazem EtO), oznaczanie próbek laboratoryjnych, identyfikacja sprzętu medycznego.\n- **Farmacja** — etykiety na opakowaniach leków, identyfikacja partii produkcyjnych, drobne kody DataMatrix wymagane przez regulatorów (np. unikalny identyfikator wyrobu medycznego, zabezpieczenia przeciw fałszerstwom).\n- **Etykiety produkcji w toku** — oznaczenia między stanowiskami produkcyjnymi w wymagających środowiskach (przemysł precyzyjny, elektronika).\n- **Identyfikacja produktów klasy premium** — sprzęt elektroniczny, kosmetyki, żywność klasy premium, gdzie etykieta musi wyglądać profesjonalnie.\n- **Etykiety wysyłkowe wyższej klasy** — tam, gdzie kody muszą być skanowane szybko (centra dystrybucyjne z automatyką).\n- **Druk z mobilnych drukarek Zebra P4T** — unikalna zgodność, etykiety drukowane w terenie (logistyka mobilna, serwis polowy, inwentaryzacja w polu).',
      },
      {
        heading: 'Z-Select 2000T vs Z-Perform 1000T — kiedy warto dopłacić?',
        content:
          'To pytanie zadaje sobie większość kupujących. Oba to papierowe etykiety termotransferowe z atestami EC/BfR XIV/FDA. Różnica w czterech wymiarach:\n\n- **Powłoka top-coat** — Z-Select MA, Z-Perform NIE MA. Daje ostrzejszy nadruk, wyższą prędkość druku, dłuższą żywotność głowicy oraz odporność na wilgoć i oleje.\n- **Materiał lica** — Z-Select to papier powlekany 74 μm, Z-Perform niepowlekany 67 μm.\n- **Cena za rolkę** — Z-Select **droższy o około 50-80%** (przy tym samym rozmiarze).\n- **Zgodność taśm** — Z-Select obsługuje **5 taśm** (2300/2100/3200/3400/5555), Z-Perform tylko **2** (2300/2100).\n\n**Wybierz Z-Select 2000T**, gdy:\n\n- drukujesz **drobne kody dwuwymiarowe** (DataMatrix, GS1, QR — zwykle poniżej 3×3 mm)\n- etykieta jest w **służbie zdrowia lub farmacji** i wymaga pakietów sterylizacyjnych albo atestów drukarni\n- jest narażona na **wilgoć, dotyk wilgotnymi dłońmi, opary, drobne tarcia**\n- drukujesz w **o wysokich nakładach linii** i chcesz przyspieszyć druk bez utraty jakości\n- zależy ci na **dłuższej żywotności głowicy** drukarki (wysokie koszty wymiany w sprzęcie przemysłowym)\n\n**Wybierz Z-Perform 1000T**, gdy:\n\n- drukujesz **etykiety wysyłkowe sklepu internetowego** (klient i tak wyrzuca po dostawie)\n- do **typowego magazynu, kompletacji, przyjęć, etykietowania kartonów**\n- priorytetem jest **najniższa cena za rolkę**\n\nW 70% przypadków Z-Perform 1000T wystarcza. Pozostałe 30% to Z-Select 2000T (służba zdrowia, farmacja, sklepy klasy premium, drobne kody dwuwymiarowe).',
      },
    ],
    techSpecs: [
      { label: 'Technologia druku', value: 'Termotransferowa (wymaga taśmy barwiącej)' },
      { label: 'Materiał lica', value: 'Papier matowy biały z powłoką top-coat (74 μm)' },
      { label: 'Klej', value: 'Permanentny akrylowy (14 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine 57 g/m² (51 μm)' },
      { label: 'Łączna grubość', value: '139 μm (±10%)' },
      { label: 'Powłoka top-coat', value: 'Tak — ostry nadruk, wyższa prędkość druku, dłuższa żywotność głowicy, odporność na wilgoć' },
      { label: 'Min. temperatura aplikacji', value: '0°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość w pomieszczeniach', value: '1 rok i więcej' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok w 20-25°C, wilgotność 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 2300, 2100, 3200, 3400, 5555 (wosk i wosk-żywica)' },
      { label: 'Kompatybilne drukarki', value: 'Zebra P4T (mobilna), biurkowe, średnie, przemysłowe' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, BfR XIV (suche, wilgotne nietłuste)' },
      { label: 'Atest żywnościowy (USA)', value: 'FDA 175.105 (suche lub przez warstwę barierową)' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Program dystrybucji Zebra', value: 'ZipShip (od ręki z magazynu europejskiego)' },
      { label: 'Numer próbki', value: 'SAMPLE5257' },
      { label: 'Rdzeń (gilza)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '46' },
      { label: 'Klasa cenowa', value: 'Papier premium' },
    ],
    applications: [
      'Handel detaliczny — etykiety półkowe, cenowe i produktowe',
      'Służba zdrowia — etykietowanie pakietów sterylizacyjnych (autoklaw, gaz EtO)',
      'Służba zdrowia — oznaczanie próbek laboratoryjnych i pojemników medycznych',
      'Farmacja — drobne kody DataMatrix (unikalny identyfikator wyrobu medycznego), numery serii leków',
      'Identyfikacja produktów klasy premium — elektronika, kosmetyki, żywność klasy premium',
      'Etykiety produkcji w toku — w wymagających środowiskach (przemysł precyzyjny, elektronika)',
      'Logistyka — niezawodne skanowanie drobnych kodów w centrach dystrybucyjnych',
      'Etykiety wysyłkowe wyższej klasy — szybkie skanowanie w automatyce magazynowej',
      'Druk z mobilnych drukarek Zebra P4T (unikalna zgodność w klasie papierowych)',
      'Etykiety na opakowania narażone na wilgoć i lekkie zaolejenie',
    ],
    notRecommendedFor: [
      'Budżetowa wysyłka masowa w sklepach internetowych — wybierz tańszy Z-Perform 1000T',
      'Kontakt bezpośredni z **żywnością tłustą** — atest BfR XIV pokrywa tylko nietłustą; do tłustej wybierz Z-Perform Removable (BfR XXI z reduction factor ≥3)',
      'Kontakt z silnymi chemikaliami, rozpuszczalnikami, kwasami — wybierz folię (PolyPro 3000T lub Z-Ultimate)',
      'Zastosowania zewnętrzne i długa ekspozycja na promieniowanie UV — papier blaknie, wybierz folię',
      'Oznaczenia trwałe na produktach powyżej 2 lat — wybierz folię Z-Ultimate 3000T White',
      'Pełna wodoodporność (zanurzenie, długi kontakt z wodą) — top-coat chroni tylko przed wilgocią',
      'Aplikacje poniżej 0°C — minimalna temperatura aplikacji 0°C; do chłodni wybierz Z-Perform Removable (od -15°C)',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy, wymaga taśmy',
    ],
    compatiblePrinters: {
      desktop: ['ZD230t', 'ZD411t', 'ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['P4T'],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XIV', description: 'Niemiecki standard dla materiałów w kontakcie z **suchą i wilgotną żywnością nietłustą**. UWAGA: NIE pokrywa tłustych — do tłustej żywności wybierz Z-Perform Removable (BfR XXI z reduction factor ≥3).' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja Food and Drug Administration dla materiałów w kontakcie z suchymi produktami spożywczymi lub poprzez warstwę barierową.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — kluczowe w służbie zdrowia, na salach operacyjnych i dla osób uczulonych na lateks.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: 'Wybierz Z-Select 2000T (z powłoką top-coat) gdy: drukujesz drobne kody dwuwymiarowe, etykieta jest w służbie zdrowia lub farmacji, narażona na wilgoć i oleje, idzie do o wysokich nakładach linii produkcyjnej, lub potrzebujesz druku z mobilnej drukarki P4T. Do typowej wysyłki sklepu internetowego i magazynu wystarczy **tańszy Z-Perform 1000T** — w 70% przypadków lepszy wybór.' },
      { seriesSlug: 'z-perform-1000t-removable', whenToChooseThis: 'Z-Select 2000T (klej trwały) do oznaczeń stałych — etykiety produktowe, służba zdrowia, farmacja. Wersja Removable (klej zdejmowalny) — gdy etykieta MUSI być usunięta bez śladów (promocje, sprzęt zwrotny, etykiety produkcji w toku) lub do żywności tłustej (atest BfR XXI).' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'Z-Select 2000T (papier) do etykiet produktowych krótko- i średnioterminowych. **Z-Ultimate 3000T White** (folia) gdy potrzeba **wieloletniej trwałości** (ponad 2 lata) na produkcie końcowym lub w trudnych warunkach (chemikalia, UV, wilgoć, zastosowania zewnętrzne).' },
      { seriesSlug: 'z-essentials-500t', whenToChooseThis: 'Z-Select 2000T to skok o dwie klasy — premium z powłoką top-coat, dla wymagających zastosowań. Z-Essentials 500T to wariant budżetowy bez atestów — do prostych etykiet wysyłkowych i magazynowych, gdy priorytetem jest najniższy koszt.' },
    ],
    faq: [
      { question: 'Czym różni się Z-Select 2000T od Z-Perform 1000T?', answer: 'Z-Select 2000T ma **powłokę top-coat** — Z-Perform NIE. Top-coat daje 4 wymierne korzyści: (1) ostrzejszy nadruk drobnych kodów, (2) wyższa prędkość druku bez utraty jakości, (3) dłuższą żywotność głowicy drukarki (o około 20-40% więcej cykli), (4) odporność na wilgoć i oleje. Z-Select jest około 50-80% droższy. Wybierz Z-Select do służby zdrowia, farmacji, drobnych kodów dwuwymiarowych i wymagających zastosowań. Z-Perform do typowej wysyłki i magazynu.' },
      { question: 'Jaką taśmę dobrać do Z-Select 2000T?', answer: 'Z-Select obsługuje **5 modeli taśm Zebra**: 2300 i 2100 (woskowe) oraz 3200, 3400, 5555 (wosk-żywica). Dla **drobnych kodów dwuwymiarowych i tekstu farmaceutycznego** zalecamy wosk-żywicę (3200 lub 3400) — wykorzystują pełen potencjał powłoki top-coat. Do typowych zastosowań sklepowych i magazynowych wystarczy 2300 (tańsza). 5555 to taśma specjalistyczna do najtrudniejszych zastosowań.' },
      { question: 'Czy Z-Select 2000T ma atest żywnościowy?', answer: 'Tak — komplet atestów UE i USA: **EC 1935/2004, EU 10/2011, BfR XIV** (kontakt z żywnością **suchą i wilgotną nietłustą**) oraz **FDA 175.105** (USA). Materiał jest **bez bisfenolu A i bez lateksu**. UWAGA: BfR XIV nie pokrywa produktów tłustych (masło, sery, wędliny) — do tłustych wybierz Z-Perform 1000T Removable (BfR XXI z reduction factor ≥3).' },
      { question: 'Czy Z-Select 2000T jest wodoodporny?', answer: 'Nie w pełni — powłoka top-coat zwiększa **odporność na wilgoć, oleje i drobne czynniki środowiskowe** (wilgotne dłonie w sklepach, opary, lekki kontakt z olejem maszynowym), ale to wciąż papier. Do **pełnej wodoodporności i zanurzenia** wybierz folię (PolyPro 3000T do wnętrz lub Z-Ultimate 3000T White do zastosowań zewnętrznych i agresywnych warunków).' },
      { question: 'Czy nadaje się do farmacji i służby zdrowia?', answer: 'Tak — **to flagowe zastosowanie Z-Select 2000T**. Karta katalogowa Zebry konkretnie wskazuje **etykiety pakietów sterylizacyjnych** w służbie zdrowia. Top-coat daje precyzyjny nadruk drobnych kodów DataMatrix (wymagane przez unikalny identyfikator wyrobu medycznego dla leków), numerów serii i tekstu regulacyjnego. **Bez lateksu** otwiera użycie na salach operacyjnych i dla osób uczulonych. **Bez bisfenolu A** spełnia wymagania służby zdrowia.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: matowy biały papier z powłoką top-coat **74 μm** (7 μm więcej niż Z-Perform 1000T — różnica to warstwa top-coat). Klej trwały akrylowy **14 μm** (2 μm więcej niż Z-Perform — silniejsze trzymanie). Podkład silikonowany 57 g/m² **51 μm**. **Łączna grubość 139 μm (±10%)** — o 9 μm grubszy od Z-Perform 1000T (130 μm).' },
      { question: 'Czy mogę używać Z-Select 2000T z mobilną drukarką P4T?', answer: 'Tak — **Z-Select 2000T to jedyna w klasie papierowych etykieta oficjalnie wspierana przez mobilną drukarkę Zebra P4T**. Z-Perform 1000T i 1000T Removable NIE są oficjalnie wspierane na P4T. Dla zastosowań wymagających druku w terenie (logistyka mobilna, serwis polowy, inwentaryzacja w polu) Z-Select 2000T to oczywisty wybór.' },
      { question: 'W jakich temperaturach mogę aplikować?', answer: 'Minimalna temperatura aplikacji: **0°C**. Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C**. Do aplikacji w chłodni (od -15°C) wybierz Z-Perform 1000T Removable (specjalnie odporny na zimno klej). Do mroźni (od -40°C) wybierz 8000T All-Temp.' },
      { question: 'Jak długo etykieta zachowuje czytelność?', answer: '**1 rok i więcej w pomieszczeniach** — czytelność nadruku po prawidłowej aplikacji i 24-godzinnej aklimatyzacji. Top-coat dodatkowo chroni przed wilgocią i lekkim ścieraniem, co w praktyce daje dłuższą czytelność niż w Z-Perform 1000T w środowiskach z wahaniami wilgotności. Do ponad 2 lat wybierz folię (Z-Ultimate 3000T White).' },
      { question: 'Ile wariantów rozmiarowych jest dostępnych?', answer: '**46 wariantów rozmiarowych** w rdzeniu (gilzie) **25 mm** i **76 mm**. Mniej niż Z-Perform 1000T (458) — to celowe pozycjonowanie Zebry: Z-Select jest dla zastosowań wymagających, gdzie zazwyczaj używane są standardowe rozmiary etykiet produktowych i medycznych (32×25, 50×30, 70×32, 102×64 mm itp.). Do nietypowych rozmiarów masowych — Z-Perform 1000T lub na zamówienie.' },
      { question: 'Co znaczy top-coat — jak to działa?', answer: 'Top-coat to **nadrukowywalna warstwa polimerowa** nanoszona na papier w procesie produkcji. Jej powierzchnia jest **gładsza niż papier** (ujednolicona chemicznie), dzięki czemu wosk lub żywica z taśmy odkłada się równo, krawędzie nadruku są ostre, a sama powłoka chroni nadruk przed wilgocią i lekkim ścieraniem. To powszechny standard w papierowych etykietach klasy premium na rynku — Zebra Z-Select 2000T to konkretna realizacja dla druku termotransferowego.' },
      { question: 'Czy mogę zamówić próbki do testów?', answer: 'Tak — Zebra udostępnia uniwersalną próbną rolkę **SAMPLE5257** (jeden numer dla wszystkich drukarek — biurkowych, średnich, przemysłowych, mobilnej P4T). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma + etykieta + drukarka do Twojego zastosowania.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 2300 Wax', 'Zebra 3200 Wax/Resin'],
    },
  },

  /* ──────────────── 4. Z-ESSENTIALS 500T — budżetowa ──────────────── */
  {
    slug: 'z-essentials-500t',
    productId: 'zebra-z-essentials-500t',
    subcategory: 'papierowe',
    badge: 'Z-Essentials 500T',
    title: 'Z-Essentials 500T',
    tagline: 'Budżetowy papier termotransferowy z gwarantowaną jakością druku Zebry.',
    positioning: 'budżetowa',
    material: 'papier-niepowlekany',
    glue: 'permanentny-akrylowy',
    topcoat: false,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 42,
    accent: '#2563EB',
    seoTitle: 'Zebra Z-Essentials 500T | budżetowy papier termotransferowy',
    seoDescription: 'Zebra Z-Essentials 500T — budżetowe papierowe etykiety termotransferowe z gwarantowaną jakością druku Zebry. Najtańsza opcja w portfolio TT do prostych zastosowań magazynowych.',
    h1: 'Etykiety termotransferowe Zebra Z-Essentials 500T',
    heroIntro: 'Z-Essentials 500T to **budżetowa linia** papierowych etykiet termotransferowych Zebra — superkalandrowany papier niepowlekany 60 μm z trwałym klejem akrylowym, na podkładzie glassine 60 g/m². Najtańsza opcja w portfolio Zebry, z zachowaniem **gwarantowanej jakości i powtarzalności produkcji** (23-punktowy proces kontroli ISO 9001). Drukujesz w połączeniu z woskową taśmą barwiącą **Zebra 1600, 2300 lub 2100** i dostajesz pewny, czytelny nadruk do wysyłki, e-commerce, kompletacji zamówień, identyfikacji produktów i etykiet prac w toku. Trwałość do **1 roku indoor**, zakres temperatur pracy **0°C – 40°C**, materiał **BPA-free**.',
    heroImage: '/images/etykiety-zebra-z-essential-500t.png',
    heroImagePosition: 'center 30%',
    keyHighlights: [
      'Najtańsza papierowa etykieta TT w portfolio Zebra',
      'Superkalandrowany papier niepowlekany 60 μm, trwały klej akrylowy',
      'Gwarantowana powtarzalność — 23-punktowa kontrola jakości ISO 9001',
      'Mocna przyczepność: stal i poliwęglan 15 N/25 mm, polietylen 6 N/25 mm',
      'Kompatybilna z taśmami Zebra 1600, 2300, 2100 (wosk / wosk-żywica)',
      'BPA-free, trwałość indoor do 1 roku',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Essentials 500T?',
        content:
          'Z-Essentials 500T to **budżetowa linia papierowych etykiet termotransferowych Zebra** — zaprojektowana do krótkoterminowych zastosowań o wysokim nakładzie. Konstrukcja oparta na **superkalandrowanym, niepowlekanym papierze 60 μm** z **trwałym klejem akrylowym (10 μm)** na podkładzie **glassine 60 g/m² (55 μm)** — łączna grubość 130 μm (±10%). Brak top-coatu i atestów żywnościowych pozwala utrzymać najniższy koszt w portfolio Zebry, przy zachowaniu kontroli jakości.\n\nMateriał jest **fizycznie nieróżny od droższych serii w zachowaniu na drukarce** — przechodzi przez tę samą 23-punktową kontrolę jakości ISO 9001, ma identyczną zgodność z głowicami i taśmami Zebra. Różnice są w wykończeniu: brak powłoki top-coat (Z-Select 2000T) oraz brak certyfikatów BfR/EC dla kontaktu z żywnością (Z-Perform 1000T). W praktyce: ten sam wynik druku, tylko bez atrybutów których nie potrzebujesz.',
      },
      {
        heading: 'Kiedy wybrać Z-Essentials 500T?',
        content:
          'Wybierz tę serię, gdy drukujesz **wysokie wolumeny prostych etykiet** o niskiej trwałości i priorytetem jest koszt jednostkowy:\n\n• **etykiety wysyłkowe e-commerce** — najmasowsze zastosowanie, etykieta używana raz, dociera do klienta i ląduje w koszu;\n• **kompletacja zamówień i przyjmowanie towaru w magazynie** — etykiety istnieją do momentu rozpakowania palety;\n• **identyfikacja produktów w toku produkcji w toku** — przechodzą przez kolejne stanowiska, po skanowaniu są zdejmowane;\n• **oznaczenia cen w sklepach** — krótkoterminowe, wymieniane co tydzień/miesiąc;\n• **przeładunki logistyczne, etykiety palet zbiorczych** — wystarczy 1–2 tygodnie życia.\n\nDo zastosowań wymagających **trwałości >1 roku, atestu żywnościowego, drobnych kodów 2D, wilgoci lub chemikaliów** — wybierz Z-Perform 1000T (atesty BfR/EC) lub Z-Select 2000T (top-coat). Różnica w cenie zwraca się jakością druku i zgodnością regulacyjną.',
      },
      {
        heading: 'Konstrukcja i parametry techniczne',
        content:
          'Z-Essentials 500T ma trzywarstwową konstrukcję typową dla papierowych etykiet termotransferowych:\n\n• **Lico (60 μm)** — matowy biały papier niepowlekany, superkalandrowany. Superkalandrowanie to proces walcowania pod wysokim ciśnieniem, który ujednolica strukturę powierzchni i zmniejsza chropowatość — w praktyce oznacza to **lepszą wierność druku z taśmy termotransferowej** niż na zwykłym papierze offsetowym.\n• **Klej (10 μm)** — permanentny akrylowy. Po naklejeniu i 24h aklimatyzacji daje siłę trzymania **15 N/25 mm na stali i poliwęglanie**, 6 N/25 mm na polietylenie i 3 N/25 mm na tekturze falistej. To wartości w pełni wystarczające do wysyłki, opakowań zbiorczych i etykiet produktowych — etykieta nie odpadnie podczas transportu.\n• **Podkład (55 μm, 60 g/m²)** — papier glassine. Standard branżowy umożliwiający automatyczną aplikację w aplikatorach przemysłowych.\n\nMateriał spełnia wymagania **BPA-free**. Brak dodatkowych certyfikatów (BfR, FDA, REACH, UL) — to świadoma decyzja produktowa Zebry: te atesty są w wyższych liniach (Z-Perform 1000T, Z-Select 2000T).',
      },
      {
        heading: 'Z jaką taśmą barwiącą drukować?',
        content:
          'Z-Essentials 500T jest **kompatybilna z taśmami woskowymi i wosk-żywicowymi**. Dla optymalnych rezultatów Zebra rekomenduje trzy modele własnych taśm:\n\n• **Zebra 1600 Wax** — najtańsza w portfolio. Pierwszy wybór do Z-Essentials 500T — taśma i etykieta razem dają **najniższy możliwy koszt nadruku** dostępny na rynku Zebra. Idealna do prostej wysyłki i magazynu.\n• **Zebra 2300 Wax** — bestseller, standardowa taśma woskowa. Lekko wyższa cena, lepsza ostrość druku na drobnych elementach. Wybierz gdy ważne są szczegóły grafiki.\n• **Zebra 2100 European Wax** — premium europejska. Najlepsza jakość nadruku w klasie wosk, dobrze sprawdza się w chłodni i mroźni.\n\n**Nie używaj taśm żywicowych (resin)** — to byłoby przepłacenie. Resin jest projektowany pod folie syntetyczne i odporność chemiczną; na papierze niepowlekanym dodatkowy koszt nie daje żadnej korzyści.',
      },
      {
        heading: 'Trwałość, przechowywanie i ograniczenia',
        content:
          '**Trwałość użytkowa indoor: do 1 roku** od naklejenia, po prawidłowej aplikacji i 24h aklimatyzacji. Nadruk pozostaje czytelny w warunkach typowych dla magazynu, sklepu czy biura. Trwałość **outdoor nie jest gwarantowana** — papier niepowlekany szybko traci czytelność pod wpływem słońca, deszczu i wahań wilgotności.\n\n**Trwałość przed użyciem (przechowywanie rolek):** 6 miesięcy w temperaturze poniżej 20°C przy wilgotności względnej 40–50%. Przekroczenie tych warunków (np. magazyn niewentylowany latem) skraca okres przydatności i może spowodować problemy z klejem lub deformację rolki.\n\n**Zakres temperatury pracy aplikacji: 0°C – 40°C.** Minimalna temperatura aplikacji to **0°C** — poniżej tej temperatury klej akrylowy nie aktywuje się prawidłowo i etykieta odpadnie. Dla aplikacji w chłodniach/mroźniach od –20°C wybierz Z-Select 2100T All-Temp.\n\n**Ograniczenia do których ten materiał NIE jest przeznaczony:** kontakt z żywnością (brak atestu BfR/EC), drobne kody DataMatrix (top-coat z Z-Select da ostrzejszy nadruk), powierzchnie zaolejone / pyliste / nierówne (rozważ klej zdejmowalny lub wzmocniony), trwałość >1 rok i outdoor.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Papier niepowlekany matowy biały, superkalandrowany' },
      { label: 'Grubość lica', value: '60 μm' },
      { label: 'Klej', value: 'Trwały akrylowy, permanentny' },
      { label: 'Grubość kleju', value: '10 μm' },
      { label: 'Podkład', value: 'Papier glassine 60 g/m²' },
      { label: 'Łączna grubość', value: '130 μm (±10%)' },
      { label: 'Numer RM Zebra', value: '10026929RM' },
      { label: 'Zalecane taśmy', value: 'Zebra 1600 / 2300 / 2100 (wosk lub wosk-żywica)' },
      { label: 'Min. temperatura aplikacji', value: '0°C' },
      { label: 'Zakres temperatury pracy', value: '0°C – 40°C' },
      { label: 'Trwałość indoor', value: 'do 1 roku' },
      { label: 'Trwałość magazynowa', value: '6 miesięcy (<20°C, RH 40–50%)' },
      { label: 'BPA / lateks', value: 'BPA-free' },
      { label: 'Atest żywnościowy', value: 'Brak — do kontaktu z żywnością wybierz Z-Perform 1000T' },
      { label: 'Kontrola jakości', value: 'Proces 23-punktowy ISO 9001' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Grupa cenowa', value: 'Budżet (najtańsza w portfolio TT Zebra)' },
    ],
    applications: [
      'Etykiety wysyłkowe e-commerce — masowy druk dla kurierów (DHL, DPD, InPost, FedEx)',
      'Kompletacja zamówień w magazynie — picking, packing, etykiety lokalizacyjne na regałach',
      'Przyjmowanie towaru — etykiety identyfikacyjne palet i kartonów przy odbiorze',
      'Identyfikacja produktów w toku produkcji w toku — między stanowiskami montażowymi',
      'Etykiety prac w toku — krótkoterminowe oznaczenia procesowe',
      'Oznaczenia cen w sklepach detalicznych — wymienne co tydzień/miesiąc',
      'Przeładunki w transporcie i logistyce — etykiety na palety zbiorcze i opakowania transportowe',
      'Druk próbny i archiwizacja — testy nowych projektów etykiet przed wdrożeniem',
    ],
    notRecommendedFor: [
      'Kontakt z żywnością — brak atestu BfR XXI / EC 1935/2004 (wybierz Z-Perform 1000T lub Z-Select 2000T)',
      'Drobne kody 2D / DataMatrix / GS1 — brak top-coatu, wybierz Z-Select 2000T dla najostrzejszego nadruku',
      'Healthcare i farmacja — wymagana powłoka top-coat (Z-Select 2000T) lub atest (Z-Perform 1000T)',
      'Outdoor, wilgoć, chemikalia — papier niepowlekany szybko traci czytelność, wybierz folię (Z-Ultimate 3000T) lub PolyPro',
      'Aplikacje poniżej 0°C — klej akrylowy nie aktywuje się; do chłodni/mroźni wybierz Z-Select 2100T All-Temp',
      'Oznaczenia trwałe (tabliczki znamionowe, etykiety produktowe na lata) — wybierz folię żywicową',
      'Powierzchnie zaolejone, pyliste, silikonowane — klej akrylowy nie ma odpowiedniego tacku',
    ],
    compatiblePrinters: {
      desktop: ['ZD230t', 'ZD421t', 'ZD621t'],
      midRange: ['ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: 'Wybierz Z-Essentials 500T tylko gdy priorytetem jest najniższy koszt jednostkowy i nie potrzebujesz atestów. Z-Perform 1000T daje atest żywnościowy BfR/EC i szerszą gamę rozmiarów za niewielką dopłatą — w 90% przypadków lepszy wybór.' },
      { seriesSlug: 'z-select-2000t', whenToChooseThis: 'Wybierz Z-Essentials 500T do prostych etykiet wysyłkowych i magazynowych. Z-Select 2000T ma top-coat dający ostrzejszy nadruk drobnych kodów 2D i odporność na wilgoć — wybierz gdy drukujesz drobne kody, etykiety produktowe premium lub do farmacji.' },
    ],
    faq: [
      { question: 'Czym Z-Essentials 500T różni się od Z-Perform 1000T?', answer: 'Materiał i jakość druku są praktycznie identyczne — oba to papier niepowlekany z klejem akrylowym, obydwa produkowane w 23-punktowej kontroli ISO 9001 Zebry. Różnica jest w **atestach i gamie rozmiarów**: Z-Perform 1000T ma atest BfR XXI / EC 1935/2004 / EU 10/2011 (kontakt z żywnością) i 458 wariantów rozmiarowych. Z-Essentials 500T to budżetowa linia bez atestów, z ograniczoną gamą — wybór gdy priorytetem jest cena, a atesty nie są wymagane.' },
      { question: 'Czy ma atest żywnościowy?', answer: 'Nie. Z-Essentials 500T spełnia tylko wymóg **BPA-free**, nie ma atestów BfR XXI ani EC 1935/2004 wymaganych dla materiałów stykających się z żywnością. Do opakowań zbiorczych w przemyśle spożywczym wybierz Z-Perform 1000T lub Z-Select 2000T.' },
      { question: 'Jaką taśmę barwiącą dobrać?', answer: 'Pierwszy wybór: **Zebra 1600 Wax** — najtańsza taśma woskowa w portfolio. Razem z Z-Essentials 500T dają najniższy możliwy koszt nadruku w portfolio Zebra. Alternatywy: Zebra 2300 Wax (lepsza ostrość, drobne elementy) lub 2100 European Wax (premium, chłodnia). Nie używaj taśm żywicowych (resin) — to przepłacenie, resin jest pod folie, nie pod papier niepowlekany.' },
      { question: 'Jak długo etykieta zachowuje czytelność?', answer: 'Do **1 roku indoor** od momentu naklejenia, po prawidłowej aplikacji i 24h aklimatyzacji. To w pełni wystarczy do większości zastosowań magazynowych, e-commerce i WIP. Etykieta wysyłkowa żyje 2–14 dni (do dostawy), etykieta cenowa w sklepie 1–4 tygodnie, etykieta magazynowa 3–12 miesięcy. Trwałość outdoor nie jest gwarantowana — papier niepowlekany blaknie pod wpływem słońca i wilgoci.' },
      { question: 'Jaka jest siła kleju?', answer: 'Po 24h od naklejenia: **15 N/25 mm na stali i poliwęglanie**, 6 N/25 mm na polietylenie (folie LDPE/HDPE), 3 N/25 mm na tekturze falistej. W praktyce: etykieta nie odpadnie z kartonu wysyłkowego, palety, regału, produktu z PE czy obudowy stalowej. Klej jest **permanentny** — odlepianie pozostawi ślady. Do etykiet które mają być zdejmowane bez śladów wybierz Z-Perform 1000T Removable.' },
      { question: 'Do jakich drukarek pasuje?', answer: 'Do **dowolnej drukarki termotransferowej Zebra**: desktop (ZD230t, ZD421t, ZD621t), mid-range (ZT231), industrial (ZT411, ZT421, ZT610). Z-Essentials 500T to standardowa rolka 25 mm core — pasuje do każdej typowej drukarki Zebra. Działa również z drukarkami innych producentów (Honeywell, TSC, Brother, Citizen) — Zebra nie blokuje sprzętowo.' },
      { question: 'Co oznacza „superkalandrowany papier"?', answer: 'Superkalandrowanie to proces walcowania papieru pod wysokim ciśnieniem i temperaturą, który **ujednolica strukturę powierzchni** — zmniejsza chropowatość i zwiększa gęstość. W praktyce papier superkalandrowany przyjmuje wierniej nadruk z taśmy termotransferowej, daje ostrzejsze krawędzie liter i kodów niż zwykły papier offsetowy. To dlatego nawet bez powłoki top-coat Z-Essentials 500T zapewnia czytelność druku akceptowalną do typowych zastosowań logistycznych.' },
      { question: 'Czy nadaje się na opakowania foliowe (PE, polietylen)?', answer: 'Tak — siła kleju na polietylenie to **6 N/25 mm po 24h**, co wystarcza do typowych zastosowań (etykieta wysyłkowa na foliowej kopercie, opakowanie LDPE/HDPE). Dla powierzchni silnie zaolejonych, silikonowanych lub zakurzonych klej akrylowy może mieć słabszy chwyt — przed dużym zamówieniem zalecamy próbkę. Do trudniejszych powierzchni (kondensacja, niska temperatura, mocno zatłuszczone) wybierz folię z klejem all-temperature.' },
      { question: 'Czy mogę zamówić własny rozmiar lub nadruk?', answer: 'Tak. Zebra produkuje Z-Essentials 500T **w praktycznie dowolnych rozmiarach, kształtach i konfiguracjach** — od 25×10 mm do 200×300 mm, prostokątne, owalne, perforowane. Drukarki fleksograficzne Zebry umożliwiają dodanie **wstępnie nadrukowanych elementów** (logo, kolory, ramki) na masowych zamówieniach. Skontaktuj się z TAKMA — przygotujemy wycenę dla nietypowych rozmiarów i nadruków pre-printed.' },
      { question: 'Jak przechowywać rolki przed użyciem?', answer: 'Optymalnie: **poniżej 20°C, wilgotność względna 40–50%, w oryginalnym opakowaniu, z dala od światła słonecznego**. W tych warunkach materiał zachowuje pełną wydajność przez **6 miesięcy** od daty produkcji. Krótkotrwałe wahania (kilka godzin w transporcie) są dopuszczalne. Przechowywanie w wysokiej wilgotności (>70%) lub temperaturze powyżej 30°C skraca trwałość i może powodować zwijanie rolki, deformację lub osłabienie kleju.' },
      { question: 'Dlaczego Z-Essentials nazywa się „500T" a nie „500"?', answer: 'Litera **T** w nazwach Zebry oznacza **Thermal Transfer** (termotransferowy). Wszystkie etykiety przeznaczone do druku termotransferowego (wymagające taśmy barwiącej) mają sufiks „T": Z-Perform 1000**T**, Z-Select 2000**T**, Z-Ultimate 3000**T**. Etykiety termiczne bezpośrednie (DT, bez taśmy) mają sufiks „D" — np. Z-Perform 1000**D**.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 1600 Wax'],
    },
  },

  /* ════════════════ FOLIOWE (7) ════════════════ */

  /* ──────────────── 5. Z-ULTIMATE 3000T WHITE — bestseller foliowy ──────────────── */
  {
    slug: 'z-ultimate-3000t-white',
    productId: 'zebra-z-ultimate-3000t-white',
    subcategory: 'foliowe',
    badge: 'Z-Ultimate 3000T White',
    title: 'Z-Ultimate 3000T White',
    tagline: 'Premium biały poliester (PET) — trwałość do 5 lat, odporność chemiczna, certyfikat UL.',
    positioning: 'bestseller',
    material: 'poliester-bialy',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: true,
    priceFrom: 179.9,
    accent: '#059669',
    seoTitle: 'Zebra Z-Ultimate 3000T White | biały poliester PET termotransferowy, UL',
    seoDescription: 'Zebra Z-Ultimate 3000T White — premium białe etykiety poliestrowe (PET). Trwałość do 5 lat, wysoka odporność chemiczna i mechaniczna, certyfikat UL. Do elektroniki, motoryzacji, przemysłu. 296 wariantów od 180 zł.',
    h1: 'Etykiety termotransferowe Zebra Z-Ultimate 3000T White',
    heroIntro: 'Z-Ultimate 3000T White to **flagowa biała foliowa etykieta poliestrowa (PET) Zebra** z ochronną powłoką top-coat i połyskiem — najwyższa odporność chemiczna i mechaniczna w portfolio etykiet termotransferowych. Zakres temperatury pracy **-40°C do +150°C** (od mroźni po piece przemysłowe), trwałość **1 rok i więcej** zarówno w pomieszczeniach jak i na zewnątrz, oraz certyfikat **UL approved** dla oznaczeń sprzętu elektrycznego. Etykieta odporna na rozdarcia, wodę, oleje, smary, krew, alkohol, IPA, amoniak i wybielacz; mocne chemikalia jak benzyna z taśmą 5100. Drukujesz wyłącznie taśmą żywiczną (resin): Zebra **4800, 5095 lub 5100**.',
    heroImage: '/images/etykiety-termotransferowe-zebra-z-ultimate-3000t.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — biały poliester (PET) z połyskiem i powłoką top-coat (50 μm)',
      'Konstrukcja: poliester 50 μm + klej 22 μm + podkład silikonowany 56 μm (łącznie 128 μm ±10%)',
      'Wytrzymałość lica: 18 000 psi (kierunek maszynowy), 22 000 psi (poprzeczny)',
      'Zakres pracy **-40°C do +150°C** — najszerszy w klasie etykiet TT Zebra',
      'Trwałość **1 rok i więcej** zarówno w pomieszczeniach jak i na zewnątrz',
      'Certyfikat **UL approved** (z taśmami 4800, 5095, 5100) — dla oznaczeń sprzętu elektrycznego',
      'Odporność chemiczna: krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej, benzyna (z 5100)',
      'Siła kleju po 24h: stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m',
      'Wymaga taśmy żywicznej (resin): Zebra 4800, 5095 lub 5100',
      'Bez bisfenolu A, bez lateksu — bezpieczna dla aplikacji medycznych',
      '299 wariantów rozmiarowych (od 19×6 do 152×102 mm), gilze 19 mm i 25 mm',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Ultimate 3000T White?',
        content:
          'Z-Ultimate 3000T White to **flagowa biała foliowa etykieta termotransferowa Zebra** z **białego poliestru (PET)** z połyskiem i ochronną powłoką **top-coat** — materiał syntetyczny zaprojektowany do **oznaczeń trwałych na produktach końcowych**. W odróżnieniu od papieru (Z-Perform, Z-Select), poliester jest odporny na rozdarcie, wilgoć, rozpuszczalniki, oleje, smary i ścieranie, a nadruk taśmą żywiczną (resin) nie blaknie przez lata.\n\nTo **najpopularniejsza folia w portfolio Zebra** i naturalny domyślny wybór, gdy zwykły papier nie wystarcza. Posiada **certyfikat UL approved** (w połączeniu z taśmami Zebra 4800, 5095 lub 5100) — uznany przez amerykańską jednostkę bezpieczeństwa Underwriters Laboratories dla **oznaczeń sprzętu elektrycznego**, w wymagających aplikacjach przemysłowych i regulowanych (oznaczenia bezpieczeństwa, tabliczki znamionowe, identyfikacja podzespołów).',
      },
      {
        heading: 'Konstrukcja warstwowa i wytrzymałość',
        content:
          'Z-Ultimate 3000T White ma trzywarstwową konstrukcję zaprojektowaną pod ekstremalne warunki:\n\n- **Lico (50 μm)** — biały poliester (PET) z połyskiem i ochronną powłoką top-coat. Folia PET jest niemal niemożliwa do rozdarcia ręką, odporna na wodę, oleje i większość rozpuszczalników. Top-coat dodaje gładkości dla precyzyjnego nadruku.\n- **Klej (22 μm)** — trwały akrylowy wysokiej wydajności. Po 24 godzinach od naklejenia daje siłę trzymania **671 N/m na stali, 517 N/m na poliwęglanie, 66 N/m na polietylenie** (zmierzone metodą peel adhesion pod kątem 180°).\n- **Podkład (56 μm, 65 g/m²)** — biały papier silikonowany glassine.\n\n**Łączna grubość 128 μm (±10%)**. Wytrzymałość lica: **18 000 psi** w kierunku maszynowym i **22 000 psi** w poprzecznym — najwyższa w portfolio etykiet TT Zebra. Materiał jest odporny na rozdarcie i wodę.',
      },
      {
        heading: 'Zakres temperatur i trwałość',
        content:
          'Z-Ultimate 3000T White oferuje wyjątkową odporność temperaturową — **najszerszy zakres pracy w klasie**:\n\n- **Minimalna temperatura aplikacji: 2°C**\n- **Zakres temperatury pracy: -40°C do +150°C** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji). To jeden z najszerszych zakresów na rynku — pokrywa zarówno **chłodnie i mroźnie głębokie** (do -40°C), jak i **piece przemysłowe oraz aplikacje pod maską samochodu** (do +150°C).\n- **Trwałość w pomieszczeniach: 1 rok i więcej**\n- **Trwałość na zewnątrz: 1 rok i więcej** — unikat w klasie poliestrowych. Większość folii ma trwałość zewnętrzną poniżej 6 miesięcy ze względu na promieniowanie UV. Z-Ultimate 3000T White wytrzymuje pełne 12 miesięcy w warunkach zewnętrznych bez utraty czytelności.\n- **Trwałość magazynowa rolki: 1 rok** przy 21°C i wilgotności względnej 50%.',
      },
      {
        heading: 'Dlaczego potrzebujesz taśmy żywicznej (resin)?',
        content:
          'Folia poliestrowa **wymaga taśmy żywicznej (resin), NIE woskowej**. To kluczowa różnica względem etykiet papierowych:\n\n- Taśma **żywiczna** trwale wnika w powierzchnię folii PET, dając nadruk odporny na rozpuszczalniki, tarcie i wysoką temperaturę\n- Taśma woskowa lub wosk-żywiczna **nie zwiąże się** z folią — nadruk dałby się zetrzeć już przy zwykłym potarciu palcem\n\nUżycie niewłaściwej taśmy to najczęstszy błąd przy druku na folii. Do Z-Ultimate 3000T White zawsze używaj taśmy żywicznej. Zebra zaleca **trzy modele**:\n\n- **Zebra 4800** — standardowa taśma żywiczna, wystarczająca do większości aplikacji z certyfikatem UL\n- **Zebra 5095** — najczęściej kupowana taśma żywiczna, zalecana do etykiet narażonych na krew, płyny ustrojowe, słoną wodę, alkohol, amoniak, wybielacz, IPA, smar i olej\n- **Zebra 5100** — taśma żywiczna klasy premium o najszerszej odporności chemicznej; jako jedyna gwarantuje odporność na **benzynę**\n\nKombinacja Z-Ultimate 3000T White z taśmą 4800, 5095 lub 5100 posiada **certyfikat UL**.',
      },
      {
        heading: 'Odporność chemiczna (z taśmą 5095 lub 5100)',
        content:
          'Z-Ultimate 3000T White w połączeniu z odpowiednią taśmą żywiczną oferuje **bardzo szeroką odporność chemiczną** — od substancji wodnych po mocne chemikalia:\n\n- **Słaba odporność** (krew, płyny ustrojowe, słona woda, woda, płyn do mycia szyb) — pełna odporność z taśmami 5095 i 5100\n- **Umiarkowana odporność** (alkohol, amoniak, wybielacz, IPA — alkohol izopropylowy) — pełna odporność z 5095 i 5100\n- **Mocna odporność** (smar, olej) — z 5095 i 5100. **Benzyna** — wyłącznie z taśmą 5100\n- **Brak odporności** na: aceton, IR Reflow, MEK (metyloetyloketon), TCE (trichloroetylen), ksylen — do tych chemikaliów wybierz wyspecjalizowaną folię **8000T Chemresist**\n\nTo czyni Z-Ultimate 3000T White idealną do laboratoriów, galwanizerni, produkcji chemicznej i farmacji.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Ultimate 3000T White to standard w **trwałym znakowaniu przemysłowym** — Zebra w karcie katalogowej wskazuje siedem konkretnych zastosowań:\n\n- **Etykiety pakietów sterylizacyjnych** — wytrzymują autoklaw (sterylizacja parowa wysokotemperaturowa) bez utraty czytelności\n- **Oznaczanie środków trwałych** — śledzenie majątku firmowego (capital asset tracking), etykiety inwentaryzacyjne na sprzęcie biurowym, narzędziach, urządzeniach\n- **Tabliczki znamionowe i etykiety komponentów** (rating plates) — wymagane w elektronice, motoryzacji, przemyśle\n- **Etykiety półkowe i paletowe wielokrotnego skanowania** — wytrzymują tysiące skanowań i przeładunków\n- **Etykiety zanurzone w wodzie** — instalacje sanitarne, basenowe, akwakultura\n- **Etykiety narażone na kwasy lub zasady** — laboratoria, galwanizernie, produkcja chemiczna\n- **Etykiety na płytach drukowanych (PCB)** — top-side printed circuit board applications\n\n**Ostrzeżenie:** materiał z połyskiem (gloss) NIE jest przeznaczony do druku w trybie fanfold (składanka bez gilzy). Do fanfold wybierz matową wersję.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy żywicznej)' },
      { label: 'Materiał lica', value: 'Poliester (PET) biały z połyskiem i powłoką top-coat (50 μm)' },
      { label: 'Klej', value: 'Permanentny akrylowy (22 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine biały 65 g/m² (56 μm)' },
      { label: 'Łączna grubość', value: '128 μm (±10%)' },
      { label: 'Wytrzymałość lica (kierunek maszynowy)', value: '18 000 psi' },
      { label: 'Wytrzymałość lica (poprzeczny)', value: '22 000 psi' },
      { label: 'Min. temperatura aplikacji', value: '2°C' },
      { label: 'Zakres temperatury pracy', value: '-40°C do +150°C (najszerszy w klasie TT)' },
      { label: 'Trwałość indoor', value: '1 rok i więcej' },
      { label: 'Trwałość outdoor', value: '1 rok i więcej (unikat w klasie poliestrowych)' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 21°C, wilgotność 50%' },
      { label: 'Zalecane taśmy żywiczne', value: 'Zebra 4800, 5095, 5100' },
      { label: 'Certyfikat UL approved', value: 'Tak (z taśmami 4800, 5095, 5100) — dla oznaczeń sprzętu elektrycznego' },
      { label: 'Odporność chemiczna', value: 'Mocna — krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej, benzyna (z 5100)' },
      { label: 'Brak odporności na', value: 'Aceton, IR Reflow, MEK, TCE, ksylen (zalecana 8000T Chemresist)' },
      { label: 'Siła kleju po 24h (peel 180°)', value: 'Stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m' },
      { label: 'Kompatybilne drukarki', value: 'Zebra P4T (mobilna), biurkowe, średnie, przemysłowe' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Numery próbek', value: 'SAMPLE5164 (industrial), SAMPLE5164-D (desktop)' },
      { label: 'Ograniczenie', value: 'Materiał gloss NIE nadaje się do druku w trybie fanfold (składanka)' },
      { label: 'Rdzeń (gilza)', value: '19 mm, 25 mm' },
      { label: 'Liczba wariantów', value: '299 (od 19×6 do 152×102 mm)' },
      { label: 'Klasa cenowa', value: 'Folia premium (flagowiec)' },
    ],
    applications: [
      'Etykiety pakietów sterylizacyjnych — wytrzymują autoklaw bez utraty czytelności',
      'Oznaczanie środków trwałych — śledzenie majątku firmowego (capital asset tracking)',
      'Tabliczki znamionowe i etykiety komponentów — elektronika, motoryzacja, AGD',
      'Etykiety na płytach drukowanych (PCB) — top-side printed circuit board',
      'Etykiety wielokrotnego skanowania — półkowe, paletowe, lokalizacyjne',
      'Etykiety zanurzone w wodzie — instalacje sanitarne, basenowe, akwakultura',
      'Etykiety narażone na kwasy i zasady — laboratoria, galwanizernie, chemia',
      'Etykiety bezpieczeństwa BHP — odporne na chemikalia i tarcie',
      'Maszyny przemysłowe — tabliczki znamionowe, oznaczenia urządzeń, narzędzi',
      'Sprzęt elektryczny i AGD — etykiety UL approved',
      'Etykiety produktowe na chemii i kosmetykach (trwałe, długoterminowe)',
      'Aplikacje w mroźni i piecach przemysłowych — zakres -40°C do +150°C',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową lub wosk-żywicową — wymaga taśmy żywicznej (resin), inaczej nadruk się nie zwiąże',
      'Druk w trybie fanfold (składanka bez gilzy) — gloss nie nadaje się; do fanfold wybierz wersję matową',
      'Budżetowa wysyłka i magazyn — przepłacisz, wybierz papier Z-Perform 1000T',
      'Kontakt z żywnością — brak atestów BfR/EC/FDA; wybierz papier z atestem (Z-Perform 1000T)',
      'Kriogenika (-196°C, ciekły azot) — wybierz wyspecjalizowaną 8100T Cryocool',
      'Ekstremalne chemikalia — aceton, MEK, TCE, ksylen — wybierz 8000T Chemresist',
      'Aplikacje poniżej 2°C — minimalna temp. aplikacji to 2°C',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy, wymaga taśmy',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT510', 'ZT610', 'ZT620'],
      mobile: ['P4T'],
    },
    certifications: [
      { name: 'UL approved', description: 'Materiał uznany przez Underwriters Laboratories — w połączeniu z taśmami Zebra 4800, 5095 lub 5100 spełnia wymagania dla oznaczeń sprzętu elektrycznego. Etykieta będzie czytelna tak długo, jak długo istnieje produkt.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań medycznych i przemysłowych.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — kluczowe w służbie zdrowia, na salach operacyjnych i dla osób uczulonych na lateks.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: 'Wybierz Z-Ultimate 3000T White do oznaczeń trwałych (lata, chemikalia, produkt końcowy, certyfikat UL). Z-Perform 1000T (papier) do krótkoterminowej wysyłki, magazynu i opakowań zbiorczych — znacznie taniej.' },
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Z-Ultimate (poliester) gdy potrzeba maksymalnej trwałości, odporności chemicznej, UL i pracy w skrajnych temperaturach. PolyPro (polipropylen) jako tańsza folia do mniej wymagających zastosowań indoor.' },
      { seriesSlug: 'z-ultimate-3000t-silver', whenToChooseThis: 'Biały Z-Ultimate do większości zastosowań i nadruku kodów. Srebrny gdy potrzeba estetyki metalicznej tabliczki znamionowej (premium sprzęt, identyfikacja przemysłowa).' },
      { seriesSlug: 'z-select-2000t', whenToChooseThis: 'Z-Ultimate (folia PET) gdy etykieta MUSI przeżyć produkt — wieloletnia, odporna na chemikalia, UL. Z-Select 2000T (papier z top-coatem) do krótkoterminowych etykiet produktowych premium i healthcare gdy nie potrzebujesz folii.' },
    ],
    faq: [
      { question: 'Jaką taśmę dobrać do Z-Ultimate 3000T White?', answer: 'Wyłącznie taśmę żywiczną — Zebra zaleca trzy modele: **4800** (standardowa, wystarczająca do większości aplikacji UL), **5095** (najczęściej wybierana, do etykiet narażonych na krew, płyny ustrojowe, alkohol, IPA, smar i olej) lub **5100** (klasy premium — jako jedyna gwarantuje odporność na benzynę). Folia poliestrowa nie zwiąże się z taśmą woskową ani wosk-żywiczną — nadruk dałby się zetrzeć przy pierwszym potarciu palcem. To najczęstszy błąd przy druku na folii.' },
      { question: 'Co oznacza certyfikat UL approved i kiedy go potrzebuję?', answer: '**UL approved** to uznanie materiału przez amerykańską jednostkę bezpieczeństwa Underwriters Laboratories. Z-Ultimate 3000T White (w połączeniu z taśmami 4800, 5095 lub 5100) jest zatwierdzona do **oznaczeń sprzętu elektrycznego** — Zebra deklaruje, że etykieta będzie czytelna tak długo, jak długo istnieje produkt. Wymagane w tabliczkach znamionowych, etykietach bezpieczeństwa BHP, oznaczeniach komponentów elektronicznych i AGD, identyfikacji sprzętu medycznego, części motoryzacyjnych.' },
      { question: 'Jak długo wytrzymuje nadruk?', answer: '**1 rok i więcej zarówno w pomieszczeniach, jak i na zewnątrz** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji). Trwałość na zewnątrz 1 rok i więcej to unikat w klasie folii poliestrowych — większość folii zaczyna blaknąć wcześniej ze względu na promieniowanie UV. Z nadrukiem żywicznym Z-Ultimate 3000T White wytrzymuje wilgoć, ścieranie, większość rozpuszczalników i pełny zakres temperatur od -40°C do +150°C.' },
      { question: 'Jaka jest siła kleju?', answer: 'Po 24-godzinnej aklimatyzacji (peel adhesion pod kątem 180°): **stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m**. To bardzo mocne wartości — etykieta trzyma się stali, lakierowanego metalu, plastiku, szkła, lakierowanego drewna. Klej akrylowy permanentny — odlepianie zostawi ślady i prawdopodobnie zniszczy etykietę.' },
      { question: 'W jakich temperaturach mogę aplikować i używać?', answer: 'Minimalna temperatura aplikacji: **2°C** (powierzchnia i otoczenie muszą być cieplejsze). Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-40°C do +150°C**. To jeden z najszerszych zakresów na rynku — pokrywa chłodnie i mroźnie głębokie (do -40°C), aplikacje pod maską samochodu (zwykle 80-120°C), piece przemysłowe (do +150°C). Do kriogeniki w ciekłym azocie (-196°C) wybierz 8100T Cryocool.' },
      { question: 'Czy nadaje się na zewnątrz?', answer: 'Tak — **trwałość na zewnątrz 1 rok i więcej**. To unikat w klasie poliestrowych etykiet termotransferowych. Materiał jest wodoodporny, odporny na lekkie zarysowania i krótkotrwałą ekspozycję na promieniowanie UV. Stosuje się go do oznaczeń urządzeń ogrodowych, instalacji zewnętrznych i skrzynek elektrycznych. Do wieloletniej ekspozycji na UV bez utraty czytelności wybierz folie z dodatkową ochroną UV.' },
      { question: 'Na jakie chemikalia jest odporna?', answer: 'Z-Ultimate 3000T White z taśmą 5095 lub 5100 daje pełną odporność na: **krew, płyny ustrojowe, słoną wodę, wodę, płyn do mycia szyb, alkohol, amoniak, wybielacz, IPA (alkohol izopropylowy), smar, olej** (mocna kategoria). **Benzyna** — wyłącznie z taśmą 5100. **BRAK odporności** na: aceton, IR Reflow, MEK (metyloetyloketon), TCE (trichloroetylen), ksylen — do tych chemikaliów wybierz wyspecjalizowaną folię **8000T Chemresist**.' },
      { question: 'Czym różni się od papieru Z-Select lub Z-Perform?', answer: 'To **folia (poliester PET)**, nie papier — odporna na rozdarcie, wodę, większość chemikaliów, smary i oleje. Wytrzymałość lica 18 000-22 000 psi (papier ma znacznie mniej). Trwałość wieloletnia (papier — do 1 roku). Pełne UL. Cena: około 2-4× wyższa niż papier. Wybierz Z-Ultimate gdy oznaczenie MUSI przeżyć produkt. Papier wybierz do krótkoterminowych etykiet (wysyłka, magazyn).' },
      { question: 'Dlaczego nie nadaje się do fanfold?', answer: 'Materiały **gloss** (z połyskiem) NIE są przeznaczone do druku w trybie fanfold (składanka bez gilzy) — Zebra wyraźnie zaznacza to w karcie katalogowej. Połyskliwa powierzchnia po złożeniu może uszkodzić lico przy rozwijaniu z aplikatora. Do druku w trybie fanfold wybierz **matową** wersję poliestrową lub etykiety na gilzie 25/76 mm.' },
      { question: 'Czy mogę używać Z-Ultimate z mobilną drukarką P4T?', answer: 'Tak — Z-Ultimate 3000T White jest oficjalnie wspierana przez **mobilną drukarkę Zebra P4T** (oprócz drukarek biurkowych, średnich i przemysłowych). Pasuje do aplikacji wymagających druku w terenie (serwis polowy, inwentaryzacja środków trwałych z etykietowaniem od ręki, identyfikacja sprzętu na budowie).' },
      { question: 'Czy mogę zamówić próbki do testów?', answer: 'Tak — Zebra udostępnia dwie próbne rolki: **SAMPLE5164** (do drukarek średnich i przemysłowych — gilza 76 mm) oraz **SAMPLE5164-D** (do drukarek biurkowych — gilza 25 mm). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma (4800/5095/5100) + etykieta + drukarka do Twojego zastosowania.' },
      { question: 'Ile wariantów rozmiarowych jest dostępnych?', answer: '**299 wariantów rozmiarowych** — od 19×6 mm (małe komponenty elektroniczne) do 152×102 mm (tabliczki znamionowe), w rdzeniu (gilzie) **19 mm** i **25 mm**. To pełna paleta rozmiarów do typowych zastosowań przemysłowych — od mikroskopijnych etykiet na rezystory po duże oznaczenia na maszynach.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin', 'Zebra 5100 Premium Resin'],
    },
  },

  /* ──────────────── 6. Z-ULTIMATE 3000T SILVER — srebrny poliester ──────────────── */
  {
    slug: 'z-ultimate-3000t-silver',
    productId: 'zebra-z-ultimate-3000t-silver',
    subcategory: 'foliowe',
    badge: 'Z-Ultimate 3000T Silver',
    title: 'Z-Ultimate 3000T Silver',
    tagline: 'Srebrny metaliczny poliester — tabliczki znamionowe i estetyczne oznaczenia przemysłowe.',
    positioning: 'premium',
    material: 'poliester-srebrny',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: true,
    priceFrom: 2702.55,
    accent: '#059669',
    seoTitle: 'Zebra Z-Ultimate 3000T Silver | srebrny poliester PET termotransferowy, UL i CSA',
    seoDescription: 'Zebra Z-Ultimate 3000T Silver — srebrne metaliczne etykiety poliestrowe (PET) z połyskiem. Trwałość 1 rok+ w pomieszczeniach i na zewnątrz, certyfikaty UL i CSA, zakres pracy -40°C do +150°C. Tabliczki znamionowe, elektronika, motoryzacja.',
    h1: 'Etykiety termotransferowe Zebra Z-Ultimate 3000T Silver',
    heroIntro: 'Z-Ultimate 3000T Silver to **srebrna metaliczna odmiana flagowej foliowej etykiety poliestrowej Zebra** — ta sama trwałość i odporność co wersja biała (Z-Ultimate 3000T White), ale z eleganckim metalicznym wykończeniem. Zakres temperatury pracy **-40°C do +150°C**, trwałość **1 rok i więcej** zarówno w pomieszczeniach jak i na zewnątrz, oraz certyfikaty **UL Recognised** (USA) i **CSA** (Kanada) dla oznaczeń sprzętu elektrycznego. Etykieta odporna na rozdarcia, wodę, oleje, smary, krew, alkohol, IPA, amoniak i wybielacz; benzyna w połączeniu z taśmą 5100. Drukujesz wyłącznie taśmą żywiczną: Zebra **4800, 5095 lub 5100**.',
    heroImage: '/images/etykiety-termotransferowe-zebra-z-ultimate-3000t-silver.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — srebrny metaliczny poliester (PET) z połyskiem i powłoką top-coat (50 μm)',
      'Konstrukcja: poliester 50 μm + klej 20 μm + podkład silikonowany 56 μm (łącznie 126 μm ±10%)',
      'Wytrzymałość lica: 18 000 psi (kierunek maszynowy), 22 000 psi (poprzeczny)',
      'Zakres pracy **-40°C do +150°C** — chłodnie, mroźnie głębokie i piece przemysłowe',
      'Trwałość **1 rok i więcej** zarówno w pomieszczeniach jak i na zewnątrz',
      'Certyfikaty **UL Recognised** (USA) i **CSA** (Kanada) — z taśmami 4800, 5095, 5100',
      'Odporność chemiczna: krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej, benzyna (z 5100)',
      'Siła kleju po 24 godzinach: stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m',
      'Estetyka metaliczna — idealna do tabliczek znamionowych i sprzętu klasy premium',
      'Odporność na kontakt z ruchomymi częściami i paskami transportowymi',
      'Wymaga taśmy żywicznej: Zebra 4800, 5095 lub 5100',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Ultimate 3000T Silver?',
        content:
          'Z-Ultimate 3000T Silver to **srebrna metaliczna odmiana flagowej foliowej etykiety termotransferowej Zebra** — ta sama specyfikacja techniczna co wersja biała (Z-Ultimate 3000T White), ale w eleganckim metalicznym wykończeniu. Lico z **poliestru (PET) z połyskiem i ochronną powłoką top-coat** w srebrnej tonacji oferuje wygląd metalowej tabliczki znamionowej, bez kosztu grawerowanego metalu czy aluminium.\n\nMetaliczne wykończenie ma znaczenie estetyczne i marketingowe — etykieta wygląda profesjonalnie i klasy premium. Stosowane wszędzie tam, gdzie oznaczenie ma być widoczne na produkcie końcowym i komunikować jakość: tabliczki znamionowe maszyn, etykiety na sprzęcie audio i video premium, komponenty w lotnictwie i motoryzacji wyższej klasy.',
      },
      {
        heading: 'Konstrukcja warstwowa i wytrzymałość',
        content:
          'Z-Ultimate 3000T Silver ma trzywarstwową konstrukcję zaprojektowaną pod ekstremalne warunki przemysłowe:\n\n- **Lico (50 μm)** — srebrny metaliczny poliester (PET) z połyskiem i ochronną powłoką top-coat. Folia PET jest niemal niemożliwa do rozdarcia ręką, odporna na wodę, oleje i większość rozpuszczalników. Top-coat dodaje gładkości dla precyzyjnego nadruku.\n- **Klej (20 μm)** — trwały akrylowy wysokiej wydajności. Po 24 godzinach od naklejenia daje siłę trzymania **671 N/m na stali, 517 N/m na poliwęglanie, 66 N/m na polietylenie** (zmierzone metodą peel adhesion pod kątem 180°).\n- **Podkład (56 μm, 65 g/m²)** — biały papier silikonowany glassine.\n\n**Łączna grubość 126 μm (±10%)** — o 2 μm mniej niż wersja White (128 μm). Wytrzymałość lica: **18 000 psi** w kierunku maszynowym i **22 000 psi** w poprzecznym — najwyższa w portfolio etykiet termotransferowych Zebra. Materiał odporny na rozdarcia, wodę i tarcie. Wytrzymuje kontakt z ruchomymi częściami maszyn i paskami transportowymi — to wyróżnia Silver wśród zastosowań na sprzęcie ruchomym.',
      },
      {
        heading: 'Zakres temperatur i trwałość',
        content:
          'Z-Ultimate 3000T Silver oferuje wyjątkową odporność temperaturową — **najszerszy zakres pracy w klasie etykiet termotransferowych**:\n\n- **Minimalna temperatura aplikacji: 2°C**\n- **Zakres temperatury pracy: -40°C do +150°C** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji). Pokrywa zarówno **chłodnie i mroźnie głębokie** (do -40°C), jak i **piece przemysłowe oraz aplikacje pod maską samochodu** (do +150°C).\n- **Trwałość w pomieszczeniach: 1 rok i więcej**\n- **Trwałość na zewnątrz: 1 rok i więcej** — unikat w klasie metalicznych folii termotransferowych. Materiał wytrzymuje pełne 12 miesięcy w warunkach zewnętrznych bez utraty czytelności ani połysku.\n- **Trwałość magazynowa rolki: 1 rok** przy 21°C i wilgotności względnej 50%.',
      },
      {
        heading: 'Certyfikaty UL i CSA dla sprzętu elektrycznego',
        content:
          'Z-Ultimate 3000T Silver posiada **dwa kluczowe certyfikaty bezpieczeństwa**:\n\n- **UL Recognised** — Underwriters Laboratories (USA). W połączeniu z taśmami Zebra 4800, 5095 lub 5100 etykieta jest zatwierdzona do oznaczeń sprzętu elektrycznego. Zebra deklaruje, że etykieta będzie czytelna tak długo, jak długo istnieje produkt.\n- **CSA** — Canadian Standards Association (Kanada). Odpowiednik UL dla rynku kanadyjskiego. Wymagany w oznaczeniach produktów eksportowanych do Kanady.\n\nW praktyce ten dual-certyfikat (UL + CSA) sprawia, że Z-Ultimate 3000T Silver to standard w **tabliczkach znamionowych produktów elektronicznych eksportowanych do Ameryki Północnej** — od sprzętu AGD przez elektronikę użytkową po komponenty motoryzacyjne. Brak certyfikatu = brak możliwości legalnej sprzedaży na tych rynkach.',
      },
      {
        heading: 'Dlaczego potrzebujesz taśmy żywicznej?',
        content:
          'Folia poliestrowa **wymaga taśmy żywicznej, NIE woskowej**. To kluczowa różnica względem etykiet papierowych:\n\n- Taśma **żywiczna** trwale wnika w powierzchnię folii PET, dając nadruk odporny na rozpuszczalniki, tarcie i wysoką temperaturę\n- Taśma woskowa lub wosk-żywiczna **nie zwiąże się** z folią — nadruk dałby się zetrzeć już przy zwykłym potarciu palcem\n\nUżycie niewłaściwej taśmy to najczęstszy błąd przy druku na folii. Do Z-Ultimate 3000T Silver zawsze używaj taśmy żywicznej. Zebra zaleca **trzy modele**:\n\n- **Zebra 4800** — standardowa taśma żywiczna, wystarczająca do większości aplikacji z certyfikatem UL\n- **Zebra 5095** — najczęściej kupowana taśma żywiczna, zalecana do etykiet narażonych na krew, płyny ustrojowe, słoną wodę, alkohol, amoniak, wybielacz, IPA, smar i olej\n- **Zebra 5100** — taśma żywiczna klasy premium o najszerszej odporności chemicznej; jako jedyna gwarantuje odporność na **benzynę**\n\nKombinacja Z-Ultimate 3000T Silver z taśmą 4800, 5095 lub 5100 posiada certyfikaty UL i CSA.',
      },
      {
        heading: 'Odporność chemiczna (z taśmą 5095 lub 5100)',
        content:
          'Z-Ultimate 3000T Silver w połączeniu z odpowiednią taśmą żywiczną oferuje **bardzo szeroką odporność chemiczną** — od substancji wodnych po mocne chemikalia:\n\n- **Słaba odporność** (krew, płyny ustrojowe, słona woda, woda, płyn do mycia szyb) — pełna odporność z taśmami 5095 i 5100\n- **Umiarkowana odporność** (alkohol, amoniak, wybielacz, IPA — alkohol izopropylowy) — pełna odporność z 5095 i 5100\n- **Mocna odporność** (smar, olej) — z taśmami 5095 i 5100. **Benzyna** — wyłącznie z taśmą 5100\n- **Brak odporności** na: aceton, IR Reflow, MEK (metyloetyloketon), TCE (trichloroetylen), ksylen — do tych chemikaliów wybierz wyspecjalizowaną folię **8000T Chemresist**\n\nTo czyni Z-Ultimate 3000T Silver odpowiednią do laboratoriów, galwanizerni, produkcji chemicznej i etykietowania sprzętu eksponowanego na agresywne środowiska.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Ultimate 3000T Silver to standard w **trwałym znakowaniu klasy premium** — Zebra w karcie katalogowej wskazuje siedem konkretnych zastosowań:\n\n- **Etykietowanie i śledzenie środków trwałych** (capital asset tracking) — inwentaryzacja sprzętu firmowego, narzędzi, urządzeń\n- **Tabliczki znamionowe i etykiety komponentów** — wymagane w elektronice, motoryzacji, przemyśle. Metaliczny wygląd zastępuje grawerowany metal po znacznie niższym koszcie\n- **Etykiety półkowe i paletowe wielokrotnego skanowania** — wytrzymują tysiące skanowań i przeładunków\n- **Etykiety zanurzone w wodzie** — instalacje sanitarne, basenowe, akwakultura\n- **Aplikacje z kontaktem z ruchomymi częściami** — etykiety na maszynach z paskami transportowymi, walkami, rolkami; tarcie nie ściera nadruku\n- **Etykiety narażone na kwasy i zasady** — laboratoria, galwanizernie, produkcja chemiczna\n- **Etykiety na płytach drukowanych (PCB)** — top-side printed circuit board applications\n\n**Ostrzeżenie:** materiał z połyskiem (gloss) NIE jest przeznaczony do druku w trybie fanfold (składanka bez gilzy). Do fanfold wybierz matową wersję.',
      },
      {
        heading: 'Z-Ultimate Silver vs White — kiedy wybrać który?',
        content:
          'Wybór między wersjami zależy od **głównego kryterium: estetyka czy kontrast nadruku**:\n\n**Wybierz Z-Ultimate 3000T Silver**, gdy:\n\n- oznaczenie ma wyglądać profesjonalnie i premium (tabliczki znamionowe, sprzęt klasy premium)\n- etykieta będzie widoczna na produkcie końcowym i ma komunikować jakość marki\n- klient docelowy oczekuje metalicznego wykończenia (lotnictwo, motoryzacja klasy premium, sprzęt audio i video, AGD klasy premium)\n- potrzebny jest dual-certyfikat UL i CSA dla eksportu do Ameryki Północnej\n\n**Wybierz Z-Ultimate 3000T White**, gdy:\n\n- drukujesz głównie kody kreskowe — białe tło daje lepszy kontrast skanowania\n- liczy się cena za rolkę — White jest tańszy o około 50-70%\n- to masowe oznaczenia magazynowe lub etykiety przemysłowe bez wymagań estetycznych\n- nie potrzebujesz certyfikatu CSA (White ma tylko UL approved)\n\nW większości aplikacji wystarczy White. Silver to świadomy wybór, gdzie wygląd ma znaczenie.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy żywicznej)' },
      { label: 'Materiał lica', value: 'Poliester (PET) srebrny metaliczny z połyskiem i powłoką top-coat (50 μm)' },
      { label: 'Klej', value: 'Trwały akrylowy (20 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine biały 65 g/m² (56 μm)' },
      { label: 'Łączna grubość', value: '126 μm (±10%)' },
      { label: 'Wytrzymałość lica (kierunek maszynowy)', value: '18 000 psi' },
      { label: 'Wytrzymałość lica (poprzeczny)', value: '22 000 psi' },
      { label: 'Min. temperatura aplikacji', value: '2°C' },
      { label: 'Zakres temperatury pracy', value: '-40°C do +150°C' },
      { label: 'Trwałość w pomieszczeniach', value: '1 rok i więcej' },
      { label: 'Trwałość na zewnątrz', value: '1 rok i więcej' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 21°C i wilgotności względnej 50%' },
      { label: 'Zalecane taśmy żywiczne', value: 'Zebra 4800, 5095, 5100' },
      { label: 'Certyfikat UL Recognised', value: 'Tak (z taśmami 4800, 5095, 5100) — USA' },
      { label: 'Certyfikat CSA', value: 'Tak — Canadian Standards Association (Kanada)' },
      { label: 'Odporność chemiczna', value: 'Mocna — krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej, benzyna (z 5100)' },
      { label: 'Brak odporności na', value: 'Aceton, IR Reflow, MEK, TCE, ksylen (zalecana 8000T Chemresist)' },
      { label: 'Siła kleju po 24h (peel 180°)', value: 'Stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m' },
      { label: 'Kompatybilne drukarki', value: 'Zebra P4T (mobilna), biurkowe, średnie, przemysłowe' },
      { label: 'Numery próbek', value: 'SAMPLE68540 (drukarki średnie i przemysłowe), SAMPLE68540-D (biurkowe)' },
      { label: 'Ograniczenie', value: 'Materiał z połyskiem (gloss) NIE nadaje się do druku w trybie fanfold (składanka)' },
      { label: 'Rdzeń (gilza)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '18' },
      { label: 'Klasa cenowa', value: 'Folia premium metaliczna (niszowa)' },
    ],
    applications: [
      'Tabliczki znamionowe maszyn i urządzeń przemysłowych — zamiennik grawerowanego metalu',
      'Etykiety komponentów elektronicznych — z certyfikatami UL i CSA dla rynku USA i Kanady',
      'Sprzęt audio i video klasy premium — etykiety dekoracyjne i identyfikacyjne',
      'Lotnictwo i motoryzacja klasy premium — oznaczenia podzespołów wymagające estetyki',
      'AGD klasy premium — tabliczki znamionowe wymagające certyfikatów UL/CSA',
      'Etykiety na płytach drukowanych (PCB) — top-side printed circuit board',
      'Etykietowanie i śledzenie środków trwałych — inwentaryzacja',
      'Aplikacje z kontaktem z ruchomymi częściami i paskami transportowymi',
      'Etykiety wielokrotnego skanowania — półkowe i paletowe',
      'Etykiety zanurzone w wodzie — instalacje sanitarne, basenowe, akwakultura',
      'Etykiety narażone na kwasy i zasady — laboratoria, galwanizernie',
      'Identyfikacja sprzętu medycznego wymagająca estetyki klienta',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową lub wosk-żywicową — wymaga taśmy żywicznej, inaczej nadruk się nie zwiąże',
      'Druk w trybie fanfold (składanka bez gilzy) — gloss nie nadaje się; do fanfold wybierz wersję matową',
      'Standardowe oznaczenia magazynowe — wybierz tańszą wersję White lub papier Z-Perform 1000T',
      'Kody kreskowe wymagające wysokiego kontrastu — srebrne tło obniża jakość skanowania, wybierz White',
      'Budżetowa wysyłka i magazyn — materiał niszowy, drogi',
      'Ekstremalne chemikalia — aceton, MEK, TCE, ksylen — wybierz 8000T Chemresist',
      'Aplikacje poniżej 2°C — minimalna temperatura aplikacji to 2°C',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy, wymaga taśmy',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: ['P4T'],
    },
    certifications: [
      { name: 'UL Recognised', description: 'Underwriters Laboratories (USA) — w połączeniu z taśmami Zebra 4800, 5095 lub 5100 spełnia wymagania dla oznaczeń sprzętu elektrycznego. Etykieta będzie czytelna tak długo, jak długo istnieje produkt.' },
      { name: 'CSA approved', description: 'Canadian Standards Association — odpowiednik UL dla rynku kanadyjskiego. Wymagany w oznaczeniach produktów eksportowanych do Kanady.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'Wybierz Silver dla **estetyki metalicznej tabliczki znamionowej** (zamiennik grawerowanego metalu) oraz gdy potrzebny jest certyfikat CSA (Kanada). White wybierz do większości zastosowań — lepszy kontrast nadruku dla kodów kreskowych, niższa cena, też ma certyfikat UL.' },
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Z-Ultimate Silver (poliester + UL/CSA + metaliczny wygląd) gdy etykieta MUSI przetrwać lata na produkcie elektrycznym lub w trudnych warunkach. PolyPro 3000T Gloss (polipropylen) jako tańsza folia do mniej wymagających aplikacji bez metalicznej estetyki.' },
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: 'Z-Ultimate Silver do oznaczeń trwałych na produkcie końcowym z certyfikatami UL/CSA. Z-Perform 1000T (papier) do typowej wysyłki, magazynu i opakowań zbiorczych — znacznie taniej.' },
    ],
    faq: [
      { question: 'Czym różni się Silver od White?', answer: 'Wyłącznie **kolorem lica i certyfikatami** — Silver ma srebrne metaliczne wykończenie i dodatkowo certyfikat CSA (Kanada). White ma białe lico z połyskiem i tylko UL. Trwałość, odporność chemiczna i mechaniczna są takie same. Silver wybiera się dla **estetyki tabliczek znamionowych** oraz eksportu do Kanady; White dla kodów kreskowych (lepszy kontrast skanowania) i większości zastosowań przy niższej cenie.' },
      { question: 'Co oznaczają certyfikaty UL i CSA?', answer: '**UL Recognised** (Underwriters Laboratories, USA) i **CSA** (Canadian Standards Association, Kanada) to certyfikaty bezpieczeństwa dla materiałów stosowanych w oznaczeniach sprzętu elektrycznego. Z-Ultimate 3000T Silver w połączeniu z taśmami Zebra 4800, 5095 lub 5100 spełnia oba standardy — etykieta będzie czytelna tak długo, jak długo istnieje produkt. Wymagane dla legalnej sprzedaży produktów elektronicznych w USA i Kanadzie (sprzęt AGD, elektronika użytkowa, komponenty motoryzacyjne).' },
      { question: 'Jaką taśmę dobrać do Z-Ultimate 3000T Silver?', answer: 'Wyłącznie taśmę żywiczną — Zebra zaleca trzy modele: **4800** (standardowa, wystarczająca do większości aplikacji UL/CSA), **5095** (najczęściej wybierana, do etykiet narażonych na krew, płyny ustrojowe, alkohol, IPA, smar, olej) lub **5100** (klasy premium — jako jedyna gwarantuje odporność na benzynę). Folia poliestrowa nie zwiąże się z taśmą woskową ani wosk-żywiczną — nadruk dałby się zetrzeć przy pierwszym potarciu palcem.' },
      { question: 'Czy mogę drukować kody kreskowe na srebrnym tle?', answer: 'Tak, ale kontrast jest **niższy niż na białym tle** — nadruk żywiczny daje czarne znaki na metalicznym podłożu, co przy gęstych kodach 2D (DataMatrix, GS1) może obniżyć łatwość skanowania. Przy krytycznych kodach (na opakowaniach do automatycznego skanowania) lepiej wybrać Z-Ultimate 3000T White. Przy tabliczkach z dużymi czytelnymi numerami seryjnymi srebrne tło sprawdza się dobrze i wygląda profesjonalnie.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: srebrny metaliczny poliester (PET) z połyskiem i powłoką top-coat **50 μm**. Klej trwały akrylowy **20 μm** (2 μm mniej niż w wersji White). Podkład silikonowany 65 g/m² **56 μm**. **Łączna grubość 126 μm (±10%)** — 2 μm cieńszy od wersji White (128 μm), różnica wynika z cieńszej warstwy kleju.' },
      { question: 'Jak długo wytrzymuje nadruk?', answer: '**1 rok i więcej zarówno w pomieszczeniach, jak i na zewnątrz** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji). Trwałość na zewnątrz to unikat w klasie metalicznych folii termotransferowych. Z nadrukiem żywicznym Z-Ultimate 3000T Silver wytrzymuje wilgoć, ścieranie, większość rozpuszczalników i pełny zakres temperatur od -40°C do +150°C.' },
      { question: 'Czy nadaje się na maszyny z ruchomymi częściami?', answer: 'Tak — to konkretne zastosowanie wskazane w karcie katalogowej Zebry. Z-Ultimate 3000T Silver jest **odporny na kontakt z ruchomymi częściami i paskami transportowymi (friction conveyor drives)** — tarcie nie ściera nadruku ani lica. To wyróżnia Silver wśród zastosowań na sprzęcie ruchomym (maszyny pakujące, walki, rolki transportowe, prasy).' },
      { question: 'Jaka jest siła kleju?', answer: 'Po 24-godzinnej aklimatyzacji (peel adhesion pod kątem 180°): **stal 671 N/m, poliwęglan 517 N/m, polietylen 66 N/m**. To mocne wartości — etykieta trzyma się stali, lakierowanego metalu, plastiku, szkła, lakierowanego drewna. Klej akrylowy trwały — odlepianie zostawi ślady i prawdopodobnie zniszczy etykietę.' },
      { question: 'Na jakie chemikalia jest odporna?', answer: 'Z-Ultimate 3000T Silver z taśmą 5095 lub 5100 daje pełną odporność na: **krew, płyny ustrojowe, słoną wodę, wodę, płyn do mycia szyb, alkohol, amoniak, wybielacz, IPA, smar, olej**. **Benzyna** — wyłącznie z taśmą 5100. **Brak odporności** na: aceton, IR Reflow, MEK, TCE, ksylen — do tych chemikaliów wybierz wyspecjalizowaną folię **8000T Chemresist**.' },
      { question: 'Dlaczego Silver jest dużo droższy od White?', answer: 'Srebrny metaliczny poliester to materiał specjalistyczny, produkowany w mniejszych ilościach niż masowa wersja White. Wymaga dodatkowego procesu nanoszenia metalicznej warstwy podczas produkcji. Kupowany jest do konkretnych zastosowań premium (tabliczki znamionowe, sprzęt elektroniczny z UL/CSA), nie masowo — stąd cena 50-70% wyższa od wersji White.' },
      { question: 'Czy mogę zamówić próbki do testów?', answer: 'Tak — Zebra udostępnia dwie próbne rolki: **SAMPLE68540** (do drukarek średnich i przemysłowych — gilza 76 mm) oraz **SAMPLE68540-D** (do drukarek biurkowych — gilza 25 mm). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma (4800/5095/5100) + etykieta + drukarka do Twojego zastosowania.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin', 'Zebra 5100 Premium Resin'],
    },
  },

  /* ──────────────── 7. POLYE 3100T GLOSS — polietylen ──────────────── */
  {
    slug: 'polye-3100t-gloss',
    productId: 'zebra-polye-3100t-gloss',
    subcategory: 'foliowe',
    badge: 'PolyE 3100T Gloss',
    title: 'PolyE 3100T Gloss',
    tagline: 'Elastyczny polietylen błyszczący — dopasowuje się do zakrzywionych powierzchni, recyklowalny.',
    positioning: 'specjalistyczna',
    material: 'polietylen',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: true,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 1019.53,
    accent: '#059669',
    seoTitle: 'Zebra PolyE 3100T Gloss | etykiety polietylenowe elastyczne TT, recyklowalne, BfR XIV',
    seoDescription: 'Zebra PolyE 3100T Gloss — biała folia polietylenowa z połyskiem i top-coatem. Elastyczna do butelek HDPE, w pełni recyklowalna, atest żywnościowy BfR XIV dla produktów tłustych (RF≥3), FDA 175.105. Konstrukcja 82+19+54 μm = 155 μm. 9 wariantów od 1020 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyE 3100T Gloss',
    heroIntro: 'PolyE 3100T Gloss to **biała foliowa etykieta polietylenowa (PE) Zebra z połyskiem i ochronną powłoką top-coat**. Wyróżnia ją **elastyczność** (dopasowuje się do zakrzywionych i ściśliwych powierzchni — butelek HDPE, tub kosmetycznych, beczek) oraz **pełna recyklowalność** (czysty polietylen, można poddać recyklingowi razem z opakowaniem HDPE lub folią termokurczliwą). Komplet atestów żywnościowych UE i USA — w tym **BfR XIV dla żywności suchej, wilgotnej ORAZ tłustej** z reduction factor ≥3 (rzadkie połączenie dla folii termotransferowej). Drukujesz taśmą wosk-żywica (Zebra 3200) lub żywiczną (4800, 5095).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polye-3100t-gloss.png',
    heroImagePosition: 'center 30%',
    heroLandingImagePosition: 'center 30%',
    keyHighlights: [
      'Lico — biała folia polietylenowa (PE) z połyskiem i powłoką top-coat (82 μm — najgrubsze w portfolio folii Zebra)',
      'Konstrukcja: PE 82 μm + klej 19 μm + podkład silikonowany 54 μm (łącznie 155 μm ±10%)',
      'Wysoka **elastyczność** — dopasowuje się do butelek HDPE, tub, beczek i innych zakrzywionych powierzchni',
      '**Pełna recyklowalność** — czysty polietylen, recykling razem z opakowaniem HDPE lub folią termokurczliwą',
      'Komplet atestów żywnościowych: EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥3), FDA 175.105',
      'Dobra odporność na rozdarcie i wodę',
      'Trwałość: **w pomieszczeniach 1 rok i więcej, na zewnątrz do 1 roku** (rośliny, ogrodnictwo, DIY)',
      'Zakres pracy -20°C do +80°C, minimalna temperatura aplikacji 5°C',
      '9 wariantów, dostępna w programie Zebra ZipShip z magazynu europejskiego',
    ],
    sections: [
      {
        heading: 'Czym jest PolyE 3100T Gloss?',
        content:
          'PolyE 3100T Gloss to **biała foliowa etykieta termotransferowa Zebra z polietylenu (PE)** z połyskiem i ochronną powłoką top-coat. Wyjątkowa wśród folii Zebra z trzech powodów: **elastyczności** (dopasowuje się do zakrzywionych powierzchni bez marszczenia), **pełnej recyklowalności** (czysty polietylen, bez warstw mieszanych) oraz **rozszerzonego atestu BfR XIV** który obejmuje także żywność tłustą (rzadkie w klasie folii TT).\n\nW odróżnieniu od sztywnego poliestru (Z-Ultimate) czy polipropylenu (PolyPro), polietylen jest **elastycznym tworzywem termoplastycznym** — etykieta wygina się razem z opakowaniem i nie odkleja się na krawędziach krzywizn. Wybór dla branży kosmetycznej, chemii gospodarczej oraz wszystkich produktów pakowanych w butelki HDPE.',
      },
      {
        heading: 'Konstrukcja warstwowa i właściwości',
        content:
          'PolyE 3100T Gloss ma trzywarstwową konstrukcję ze szczególnie grubym licem:\n\n- **Lico (82 μm)** — biała folia polietylenowa z połyskiem i ochronną powłoką top-coat. Najgrubsze lico w portfolio folii Zebra (Z-Ultimate i PolyPro mają 50-67 μm) — daje wytrzymałość przy zachowaniu elastyczności. Top-coat zapewnia dobrą przyczepność nadruku z taśmy.\n- **Klej (19 μm)** — trwały akrylowy. Dobra przyczepność do szerokiej gamy podłoży, szczególnie do polietylenu (HDPE) — etykieta z polietylenu na opakowaniu z polietylenu trzyma się wyjątkowo dobrze ze względu na spójność chemiczną.\n- **Podkład (54 μm, 61 g/m²)** — papier silikonowany glassine.\n\n**Łączna grubość 155 μm (±10%)** — najgrubsza spośród folii TT w portfolio Zebra. To istotne dla aplikatorów ręcznych (łatwiej zdjąć z podkładu), trudniejsze dla aplikatorów automatycznych (rolka ma mniejszy metraż przy tej samej średnicy). Materiał jest **odporny na rozdarcia i wodę** (PE jest hydrofobowy z natury).',
      },
      {
        heading: 'Atesty żywnościowe — w tym żywność TŁUSTA',
        content:
          'PolyE 3100T Gloss posiada **rozszerzony pakiet atestów żywnościowych** — szerszy niż w Z-Perform 1000T standardowym i Z-Select 2000T:\n\n- **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n- **EU 10/2011** — wymagania dla tworzyw sztucznych w kontakcie z żywnością\n- **BfR Recommendation XIV** — UWAGA: w PolyE 3100T atest BfR XIV obejmuje kontakt z **żywnością suchą, wilgotną ORAZ tłustą** z reduction factor ≥3. To **rzadkie połączenie** w klasie folii termotransferowych. Standardowy BfR XIV w Z-Perform 1000T i Z-Select 2000T pokrywa tylko produkty suche i wilgotne nietłuste; PolyE jest wzbogacone o produkty tłuste dzięki właściwościom barierowym polietylenu.\n- **FDA 175.105** (USA) — kontakt z suchymi produktami lub przez warstwę barierową\n\nW praktyce PolyE 3100T Gloss to **właściwy wybór dla branży spożywczej z produktami tłustymi** (masło, sery, wędliny, oleje, margaryny, tłuszcze roślinne, smalec). Z-Perform 1000T tych produktów oficjalnie nie pokrywa.',
      },
      {
        heading: 'Z jaką taśmą drukować?',
        content:
          'PolyE 3100T Gloss obsługuje **3 modele taśm Zebra** — kompromis między ceną a odpornością:\n\n- **Zebra 3200 Wax-Resin** — wosk-żywica, **pierwszy wybór dla PolyE**. Najtańsza zgodna taśma, wystarczająca do większości aplikacji konsumenckich (kosmetyki, chemia, etykiety produktowe). Daje czytelny nadruk z dobrą odpornością na ścieranie.\n- **Zebra 4800** — taśma żywiczna standardowa. Wybierz gdy etykieta będzie narażona na rozpuszczalniki, oleje lub agresywne czyszczenie.\n- **Zebra 5095** — taśma żywiczna premium. Dla najbardziej wymagających aplikacji — chemia gospodarcza, opakowania z produktami chemicznymi.\n\n**Taśmy woskowe (2300, 2100) NIE zwiążą się** z polietylenem — wosk nie ma odpowiednich właściwości chemicznych. Użycie taśmy woskowej to najczęstszy błąd przy druku na PolyE.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyE 3100T Gloss to **specjalistyczna folia do elastycznych i ekologicznych opakowań** — Zebra w karcie katalogowej wskazuje sześć konkretnych zastosowań:\n\n- **Etykietowanie butelek HDPE** (high-density polyethylene) — opakowania kosmetyków (szampony, balsamy, mydła w płynie), środki czystości, opakowania spożywcze (oleje, ketchupy w butelkach)\n- **Etykiety produkcji w toku** — w branżach wymagających elastyczności (kosmetyki, chemia)\n- **Etykiety paletowe nadające się do recyklingu** razem z folią termokurczliwą — kluczowe dla firm z polityką ESG, gdy paleta z towarem wchodzi do strumienia recyklingu w całości\n- **Ekonomiczne etykietowanie produktów zewnętrznych** — rośliny doniczkowe, produkty ogrodnicze, DIY (markety budowlane). Trwałość około 9 miesięcy, wystarcza na cały sezon.\n- **Etykiety produktów średnioterminowych** — opakowania kartonowe z elastyczną folią, kosmetyki premium\n- **Etykiety półkowe sklepowe** (shelf-edge) — odporne na dotyk klientów\n\n**Ostrzeżenie:** materiał z połyskiem (gloss) NIE jest przeznaczony do druku w trybie fanfold (składanka bez gilzy). Do fanfold wybierz wersję matową.',
      },
      {
        heading: 'PolyE vs PolyPro — kiedy wybrać który?',
        content:
          'Oba to folie z grupy poliolefin (PE i PP), ale **różnią się sztywnością i sposobem aplikacji**:\n\n**Wybierz PolyE 3100T Gloss (polietylen)**, gdy:\n\n- opakowanie jest **elastyczne i ściśliwe** — butelki HDPE, tuby, beczki, opakowania gniecione w transporcie\n- powierzchnia jest **wyraźnie zakrzywiona** (małe butelki, opakowania krzywiznami 3D)\n- klient wymaga **recyklowalności w strumieniu PE** (kompatybilność etykieta-opakowanie)\n- pakujesz **żywność tłustą** — BfR XIV w PolyE obejmuje też tłuste z RF≥3\n\n**Wybierz PolyPro 3000T Gloss (polipropylen)**, gdy:\n\n- opakowanie jest **sztywne i płaskie** — kartony, plastikowe pojemniki sztywne, słoiki, butelki PET\n- liczy się **niższa cena** (PolyPro tańszy o około 30%)\n- nie potrzebujesz atestu BfR XIV dla żywności tłustej\n\nKształt opakowania to główny czynnik decyzyjny — sztywne polipropylenowe etykiety na elastycznych butelkach PE marszczą się i odklejają.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Folia polietylenowa (PE) biała z połyskiem i powłoką top-coat (82 μm)' },
      { label: 'Klej', value: 'Trwały akrylowy (19 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine 61 g/m² (54 μm)' },
      { label: 'Łączna grubość', value: '155 μm (±10%) — najgrubsze lico w portfolio folii TT Zebra' },
      { label: 'Elastyczność', value: 'Wysoka — dopasowuje się do zakrzywionych i ściśliwych powierzchni' },
      { label: 'Recyklowalność', value: 'Pełna — czysty polietylen, recykling z opakowaniem HDPE lub folią termokurczliwą' },
      { label: 'Min. temperatura aplikacji', value: '5°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość w pomieszczeniach', value: '1 rok i więcej' },
      { label: 'Trwałość na zewnątrz', value: 'Do 1 roku (idealna dla produktów ogrodniczych i sezonowych)' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 20-25°C, wilgotność 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 3200 (wosk-żywica), 4800 lub 5095 (żywiczne)' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥3)' },
      { label: 'Atest żywnościowy (USA)', value: 'FDA 175.105 (suche lub przez warstwę barierową)' },
      { label: 'Odporność na rozdarcie i wodę', value: 'Dobra' },
      { label: 'Numery próbek', value: 'SAMPLE22700 (drukarki średnie i przemysłowe), SAMPLE22700-D (biurkowe)' },
      { label: 'Ograniczenie', value: 'Materiał z połyskiem (gloss) NIE nadaje się do druku w trybie fanfold (składanka)' },
      { label: 'Rdzeń (gilza)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '9' },
      { label: 'Klasa cenowa', value: 'Średnia foliowe' },
    ],
    applications: [
      'Etykietowanie butelek HDPE — kosmetyki (szampony, balsamy, mydła w płynie)',
      'Etykietowanie opakowań spożywczych z PE — oleje, ketchupy, sosy w butelkach',
      'Opakowania żywności tłustej — masło, sery, wędliny, tłuszcze (atest BfR XIV z RF≥3)',
      'Środki czystości i chemia gospodarcza — opakowania z polietylenu',
      'Etykiety produkcji w toku w wymagających środowiskach',
      'Etykiety paletowe nadające się do recyklingu z folią termokurczliwą (ESG)',
      'Ekonomiczne etykiety produktów ogrodniczych — rośliny doniczkowe, DIY (do 9 miesięcy)',
      'Etykiety produktów średnioterminowych — kosmetyki klasy premium, chemia gospodarcza',
      'Etykiety półkowe sklepowe (shelf-edge)',
      'Etykiety na beczkach i pojemnikach z polietylenu wymagających elastyczności',
      'Marki z polityką ESG i wymogami pełnej recyklowalności opakowań',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową — wymaga taśmy żywicznej lub wosk-żywicowej, inaczej nadruk się nie zwiąże',
      'Druk w trybie fanfold (składanka bez gilzy) — gloss nie nadaje się; do fanfold wybierz wersję matową',
      'Sztywne, płaskie powierzchnie (kartony, pojemniki sztywne) — wystarczy tańszy PolyPro 3000T Gloss',
      'Aplikacje wymagające maksymalnej trwałości i odporności chemicznej — wybierz poliester Z-Ultimate 3000T',
      'Aplikacje powyżej 9 miesięcy na zewnątrz — papier blaknie, wybierz Z-Ultimate (1 rok+ outdoor)',
      'Aplikacje poniżej 5°C — minimalna temperatura aplikacji to 5°C; do chłodni wybierz Z-Perform Removable',
      'Budżetowa wysyłka i magazyn — to materiał produktowy, droższy od papieru',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XIV', description: 'Niemiecki standard dla materiałów w kontakcie z **suchą, wilgotną ORAZ tłustą żywnością** (reduction factor ≥3). W PolyE 3100T atest obejmuje produkty tłuste — szerszy zakres niż w Z-Perform 1000T standardowym i Z-Select 2000T.' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w kontakcie z suchymi produktami spożywczymi lub przez warstwę barierową.' },
      { name: 'Pełna recyklowalność', description: 'Czysty polietylen — etykieta i opakowanie HDPE poddają się recyklingowi w tym samym strumieniu. Kluczowe dla firm z polityką ESG.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz PolyE 3100T Gloss (polietylen) na powierzchnie **elastyczne i ściśliwe** — butelki HDPE, tuby, beczki, opakowania gniecione. PolyPro 3000T Gloss (polipropylen) na **sztywne i płaskie** powierzchnie — tańszy o około 30%.' },
      { seriesSlug: 'polypro-3000t-clear', whenToChooseThis: 'PolyE (biały) gdy etykieta ma być widoczna i zawiera tekst, kod, grafikę. PolyPro 3000T Clear (przezroczysty) gdy chcesz efektu „no label look" — etykieta niewidoczna, widoczny produkt pod nią.' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'PolyE na elastyczne opakowania konsumenckie z atestem BfR XIV dla żywności tłustej. **Z-Ultimate 3000T White** (poliester) gdy potrzeba wieloletniej trwałości (1 rok+ outdoor), maksymalnej odporności chemicznej, certyfikatu UL/CSA i zakresu temperatur -40°C do +150°C.' },
    ],
    faq: [
      { question: 'Czym PolyE różni się od PolyPro?', answer: 'PolyE to **polietylen** — elastyczny, dopasowuje się do zakrzywionych i ściśliwych powierzchni (butelki HDPE, tuby, beczki). PolyPro to **polipropylen** — sztywniejszy, do płaskich powierzchni (kartony, pojemniki sztywne, słoiki), tańszy o około 30%. Kształt opakowania to główny czynnik decyzyjny — sztywne etykiety polipropylenowe na elastycznych butelkach PE marszczą się i odklejają na krawędziach krzywizn.' },
      { question: 'Jaką taśmę dobrać do PolyE 3100T?', answer: 'PolyE 3100T obsługuje **3 modele taśm Zebra**: **3200** (wosk-żywica, najczęściej wybierana, najtańsza zgodna), **4800** (żywiczna standardowa, gdy etykieta będzie narażona na rozpuszczalniki) lub **5095** (żywiczna premium, dla wymagających aplikacji). Taśmy woskowe (2300, 2100) NIE zwiążą się z polietylenem — wosk nie ma odpowiednich właściwości chemicznych.' },
      { question: 'Czy PolyE 3100T jest ekologiczny?', answer: 'Tak — **w pełni recyklowalny**. Czysty polietylen (bez warstw mieszanych) trafia do strumienia PE razem z opakowaniem HDPE lub folią termokurczliwą. Kluczowe dla firm z polityką ESG i wymogami pełnej recyklowalności opakowań. To wyróżnia PolyE wśród folii TT — Z-Ultimate (poliester) i PolyPro nie są tak łatwo recyklowalne w typowych strumieniach komunalnych.' },
      { question: 'Czy PolyE ma atest żywnościowy dla produktów tłustych?', answer: 'Tak — to wyjątkowe wśród folii TT. **BfR Recommendation XIV w PolyE 3100T** obejmuje kontakt z żywnością suchą, **wilgotną ORAZ tłustą** z reduction factor ≥3. Standardowy BfR XIV w Z-Perform 1000T i Z-Select 2000T pokrywa tylko produkty suche i wilgotne nietłuste. PolyE jest właściwym wyborem dla branży spożywczej z produktami tłustymi: masło, sery, wędliny, oleje, margaryny, smalec.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: folia polietylenowa biała z połyskiem i powłoką top-coat **82 μm** (najgrubsze lico w portfolio folii TT Zebra — Z-Ultimate ma 50 μm, PolyPro 50-67 μm). Klej trwały akrylowy **19 μm**. Podkład silikonowany 61 g/m² **54 μm**. **Łączna grubość 155 μm (±10%)** — to istotne dla aplikatorów ręcznych (etykieta łatwiej się zdejmuje z podkładu) ale daje krótszy metraż na tej samej średnicy rolki.' },
      { question: 'W jakich temperaturach mogę aplikować i używać?', answer: 'Minimalna temperatura aplikacji: **5°C** (klej akrylowy w PolyE potrzebuje cieplej niż w Z-Perform 1000T z 0°C; do aplikacji w chłodni od -15°C wybierz Z-Perform Removable). Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C** — wystarczająco do typowych aplikacji w magazynie, sklepie, transporcie i produktach domowych.' },
      { question: 'Jak długo etykieta zachowuje czytelność?', answer: '**W pomieszczeniach 1 rok i więcej**, **na zewnątrz do 1 roku** (Zebra w karcie katalogowej podaje około 9 miesięcy dla produktów ogrodniczych i DIY na zewnątrz). Wystarcza na cały sezon ogrodniczy. Do dłuższej ekspozycji na zewnątrz wybierz **Z-Ultimate 3000T White** (folia poliestrowa, 1 rok i więcej outdoor).' },
      { question: 'Czy nadaje się na butelki HDPE z kosmetykami?', answer: 'Tak — **to flagowe zastosowanie PolyE 3100T**. Karta katalogowa Zebry wskazuje konkretnie etykietowanie butelek HDPE (high-density polyethylene) dla kosmetyków, środków czystości i opakowań spożywczych. Spójność chemiczna (etykieta PE na opakowaniu PE) daje wyjątkową przyczepność. Elastyczność folii sprawia, że etykieta wygina się razem z butelką gdy klient ją ściska.' },
      { question: 'Czy nadaje się do paletowego oznakowania w recyklingu?', answer: 'Tak — to drugie kluczowe zastosowanie wskazane w karcie katalogowej. **Etykiety paletowe nadające się do recyklingu z folią termokurczliwą** — gdy paleta z towarem (zabezpieczona folią) trafia do strumienia recyklingu, etykieta z polietylenu nie wymaga osobnego usuwania (jak papier) i nie zanieczyszcza strumienia PE. Kluczowe dla firm z polityką ESG i wymogami zerowych odpadów.' },
      { question: 'Czy mogę zamówić próbki do testów?', answer: 'Tak — Zebra udostępnia dwie próbne rolki: **SAMPLE22700** (do drukarek średnich i przemysłowych — gilza 76 mm) oraz **SAMPLE22700-D** (do drukarek biurkowych — gilza 25 mm). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma (3200/4800/5095) + etykieta + drukarka do Twojego zastosowania.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 3400 Wax/Resin'],
      resin: ['Zebra 5095 Resin'],
    },
  },

  /* ──────────────── 8. POLYPRO 3000T GLOSS — polipropylen biały ──────────────── */
  {
    slug: 'polypro-3000t-gloss',
    productId: 'zebra-polypro-3000t-gloss',
    subcategory: 'foliowe',
    badge: 'PolyPro 3000T Gloss',
    title: 'PolyPro 3000T Gloss',
    tagline: 'Polipropylen biały błyszczący — sztywny, wodoodporny, ekonomiczna folia do przemysłu.',
    positioning: 'specjalistyczna',
    material: 'polipropylen-bialy',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: true,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 373.99,
    accent: '#059669',
    seoTitle: 'Zebra PolyPro 3000T Gloss | biała folia polipropylenowa BOPP, odporność UV, BfR XIV',
    seoDescription: 'Zebra PolyPro 3000T Gloss — biała folia polipropylenowa BOPP z połyskiem i powłoką top-coat. Dwuosiowo orientowana dla wysokiej wytrzymałości i sztywności, klej z odpornością UV, atest BfR XIV dla suchych, wilgotnych i tłustych z RF≥2. Standardowa folia do przemysłu i sklepów. 6 wariantów od 374 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 3000T Gloss',
    heroIntro: 'PolyPro 3000T Gloss to **biała foliowa etykieta termotransferowa Zebra z polipropylenu BOPP** (Bi-axially Oriented PolyPropylene) z połyskiem i powłoką top-coat. Dwuosiowo orientowana folia daje **wysoką wytrzymałość mechaniczną i dobrą sztywność**. Wyróżnik kleju: **doskonała odporność na promieniowanie UV i czynniki atmosferyczne** (excellent UV resistance and weatherability) — najlepszy klej UV wśród standardowych folii Zebra. Komplet atestów żywnościowych UE i USA, w tym **BfR XIV dla produktów tłustych** z RF≥2. Drukujesz wyłącznie taśmą żywiczną: Zebra 4800 lub 5095.',
    heroImage: '/images/etykiety-termotransferowe-zebra-polye-3000t-gloss.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — biały polipropylen BOPP z połyskiem i powłoką top-coat (57 μm)',
      'Konstrukcja: PP 57 μm + klej 19 μm + podkład silikonowany 54 μm (łącznie 130 μm ±10%)',
      'Materiał **BOPP** — dwuosiowo orientowany polipropylen, wysoka wytrzymałość i sztywność',
      'Klej z **doskonałą odpornością UV i atmosferyczną** — najlepszy klej UV wśród standardowych folii',
      'Komplet atestów: EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥2)',
      'FDA 175.105 — kontakt z suchymi produktami lub przez warstwę barierową',
      'Trwałość: w pomieszczeniach do 1 roku, krótkoterminowo na zewnątrz dzięki UV resistance',
      'Zakres pracy -20°C do +80°C, minimalna temperatura aplikacji 5°C',
      'Recyklowalna razem z opakowaniami polipropylenowymi (PP)',
      'Bez bisfenolu A, bez lateksu',
    ],
    sections: [
      {
        heading: 'Czym jest BOPP — polipropylen dwuosiowo orientowany?',
        content:
          'PolyPro 3000T Gloss jest wykonany z **BOPP — Bi-axially Oriented PolyPropylene** (polipropylen dwuosiowo orientowany). To sposób produkcji folii polipropylenowej, gdzie materiał jest rozciągany w **dwóch kierunkach jednocześnie** (kierunku maszynowym i poprzecznym) podczas formowania. Daje to dwie kluczowe właściwości fizyczne:\n\n- **Wysoką wytrzymałość mechaniczną** (high tensile strength) — folia jest odporna na rozciąganie i rozrywanie w obu osiach. Wytrzymuje pakowanie, transport, dotyk klientów w retail.\n- **Dobrą sztywność** (good stiffness) — istotne dla automatycznych aplikatorów i mechanizmów drukarek. Sztywna folia nie marszczy się, daje czyste aplikacje.\n\nBOPP to **najczęściej stosowane tworzywo na etykiety foliowe** w przemyśle — kombinacja wytrzymałości, sztywności i niskiej ceny czyni je standardem branżowym. PolyPro 3000T Gloss to wersja Zebra z dodatkową **powłoką top-coat** na licu (dla lepszej jakości nadruku) i **klejem z odpornością UV** (dla aplikacji zewnętrznych krótkoterminowych).',
      },
      {
        heading: 'Konstrukcja i właściwości — identyczne wymiary jak Clear',
        content:
          'PolyPro 3000T Gloss ma identyczną konstrukcję warstwową jak wersja Clear (różni się tylko kolorem lica — biały zamiast przezroczystego):\n\n- **Lico (57 μm)** — biały polipropylen BOPP z połyskiem i ochronną powłoką top-coat. Top-coat zapewnia gładką powierzchnię dla precyzyjnego nadruku z taśmy żywicznej.\n- **Klej (19 μm)** — trwały akrylowy z **doskonałą odpornością na UV i czynniki atmosferyczne**. To wyróżnik wśród standardowych folii Zebra — większość klejów ma tylko podstawową odporność UV.\n- **Podkład (54 μm, 61 g/m²)** — papier silikonowany glassine.\n\n**Łączna grubość 130 μm (±10%)** — identyczna z Clear, najcieńsza biała folia w portfolio Zebra (PolyPro 4000T ma 208 μm, PolyE 155 μm, Z-Ultimate 128 μm). Materiał jest **odporny na rozdarcia i wodę**.\n\nWydajność: minimalna temperatura aplikacji **5°C**, zakres temperatury pracy **-20°C do +80°C**, trwałość użytkowa **w pomieszczeniach do 1 roku** (zewnętrzna trwałość możliwa krótkoterminowo dzięki UV resistance kleju). Trwałość magazynowa rolki: 1 rok przy 20-25°C i wilgotności względnej 40-50%.',
      },
      {
        heading: 'Odporność UV — kluczowy wyróżnik kleju',
        content:
          'PolyPro 3000T Gloss wyróżnia się **doskonałą odpornością kleju na promieniowanie UV i czynniki atmosferyczne** (excellent UV resistance and weatherability). To istotne ponieważ:\n\n- **Większość klejów akrylowych** traci właściwości pod wpływem promieniowania ultrafioletowego — żółknie, kruszy się, odkleja od podłoża\n- **Klej w PolyPro 3000T** jest stabilizowany przeciw UV — utrzymuje przyczepność i przezroczystość nawet przy ekspozycji słonecznej\n- **Zastosowania zewnętrzne krótkoterminowe** (do około 6-12 miesięcy) — etykiety na opakowaniach magazynowych z ekspozycją słoneczną przez okno magazynu, etykiety na produktach w sklepach z dużymi oknami, etykiety sezonowe DIY i ogrodnictwo\n\n**Uwaga:** odporność UV nie jest tak wysoka jak w specjalistycznych foliach outdoor (Z-Ultimate 3000T White z 1 rok+ outdoor). Do długoterminowego użycia zewnętrznego (lata) wybierz Z-Ultimate 3000T White z certyfikatem UL.',
      },
      {
        heading: 'Atesty żywnościowe — BfR XIV dla produktów tłustych',
        content:
          'PolyPro 3000T Gloss posiada **rozszerzony pakiet atestów żywnościowych** — identyczny jak w wersji Clear:\n\n- **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n- **EU 10/2011** — wymagania dla tworzyw sztucznych w kontakcie z żywnością\n- **BfR Recommendation XIV** — atest obejmuje kontakt z **żywnością suchą, wilgotną ORAZ tłustą** z **reduction factor ≥2**. Szerszy zakres niż w Z-Perform 1000T (RF=0, tylko suche i wilgotne nietłuste), choć węższy niż w PolyE 3100T (RF≥3).\n- **FDA 175.105** (USA) — kontakt z suchymi produktami lub przez warstwę barierową\n- **Bez bisfenolu A** (BPA-free)\n- **Bez lateksu** (latex-free)\n\nDzięki temu PolyPro 3000T Gloss jest **odpowiedni dla branży spożywczej z produktami tłustymi** (oleje, masła, opakowania z tłustą żywnością), kosmetycznej (kremy, oleje, balsamy) i chemicznej. Najlepszy stosunek ceny do zakresu atestów wśród białych folii.',
      },
      {
        heading: 'Z jaką taśmą drukować?',
        content:
          'PolyPro 3000T Gloss obsługuje **2 modele taśm Zebra** — wyłącznie żywiczne (identyczne jak w wersji Clear):\n\n- **Zebra 4800** — żywiczna standardowa. Pierwszy wybór dla większości aplikacji przemysłowych i konsumenckich. Daje czytelny ostry nadruk z dobrą odpornością na ścieranie, wilgoć i krótkoterminowe UV.\n- **Zebra 5095** — żywiczna klasy premium. Dla aplikacji z wyższymi wymaganiami (chemia, beczki przemysłowe, opakowania transportowane międzynarodowo) lub gdy nadruk musi przetrwać pełen rok w warunkach zewnętrznych.\n\n**Taśmy wosk-żywicowe (3200, 3400) i woskowe (2300, 2100) NIE są zalecane** — wosk nie wiąże się trwale z polipropylenem. Dla maksymalnej trwałości na BOPP zawsze stosuj żywiczną taśmę.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 3000T Gloss to **standardowa folia biała przemysłowa** — Zebra wskazuje pięć konkretnych zastosowań:\n\n- **Etykietowanie beczek z chemikaliami i produktów przemysłowych** — wodoodporna folia z atestem żywnościowym, odpornością UV i sztywnym lico dla łatwej aplikacji ręcznej\n- **Etykiety palet zapakowanych folią termokurczliwą** (pallet wrap labels) — wytrzymują transport międzynarodowy i przeładunki\n- **Etykiety nadające się do recyklingu** razem z opakowaniami polipropylenowymi (PP) — kluczowe dla firm z polityką ESG. Etykieta i opakowanie poddają się recyklingowi w tym samym strumieniu.\n- **Etykiety półkowe sklepowe** (shelf edge labels) — biały top-coat zapewnia czytelny nadruk drobnych kodów cenowych. Wytrzymują dotyk klientów i krótkotrwałą ekspozycję na promienie słoneczne przez okna sklepowe.\n- **Etykiety produktów średnioterminowych** — kosmetyki, chemia gospodarcza, AGD, opakowania kartonowe z grafiką marki. Standardowy wybór dla większości aplikacji konsumenckich.\n\nDodatkowe zastosowania (z UV resistance kleju): sezonowe etykiety ogrodnicze, etykiety na produktach DIY w marketach budowlanych z dużymi witrynami, etykiety promocyjne wystawione na słońcu w salonach sprzedażowych.',
      },
      {
        heading: 'PolyPro 3000T Gloss vs Clear — kiedy wybrać który?',
        content:
          'Oba materiały mają **identyczną konstrukcję techniczną** (57 μm + 19 μm + 54 μm = 130 μm), te same atesty, te same temperatury i tę samą zalecaną taśmę. Różnią się **wyłącznie kolorem lica**:\n\n**Wybierz PolyPro 3000T Gloss (biały)**, gdy:\n\n- drukujesz **kody kreskowe wymagające wysokiego kontrastu** — biały podkład pod czarnym nadrukiem daje pełną czytelność dla skanerów\n- etykieta ma być **widoczna z pełnym nadrukiem** (logo, tekst, kod, grafika) — biały top-coat zapewnia ostrość krawędzi\n- aplikacja jest **standardowa**: opakowania kartonowe, plastikowe pojemniki sztywne, palety, beczki przemysłowe\n- liczy się **niższa cena** (Gloss tańszy od Clear o około 30%)\n\n**Wybierz PolyPro 3000T Clear (przezroczysty)**, gdy:\n\n- chcesz **efektu „no label look"** — produkt widoczny pod etykietą, premium estetyka\n- aplikacja jest na **opakowaniach szklanych, przezroczystych plastikach** — spójność wizualna\n- używasz jako **laminat ochronny** nad innymi etykietami\n- masz pewność, że **kontrast kodu kreskowego** wystarcza na docelowym podłożu\n\nW większości aplikacji przemysłowych i konsumenckich wybór to **Gloss (biały)** — Clear to specjalistyczna folia do premium estetyki.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy żywicznej)' },
      { label: 'Materiał lica', value: 'Biały polipropylen BOPP z połyskiem i powłoką top-coat (57 μm)' },
      { label: 'Klej', value: 'Trwały akrylowy z odpornością UV i atmosferyczną (19 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine 61 g/m² (54 μm)' },
      { label: 'Łączna grubość', value: '130 μm (±10%)' },
      { label: 'Konstrukcja folii', value: 'BOPP — dwuosiowo orientowany polipropylen (wysoka wytrzymałość i sztywność)' },
      { label: 'Min. temperatura aplikacji', value: '5°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość w pomieszczeniach', value: 'Do 1 roku' },
      { label: 'Trwałość na zewnątrz', value: 'Krótkoterminowo (klej z doskonałą odpornością UV)' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 20-25°C, wilgotność 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 4800 (żywiczna standardowa), 5095 (żywiczna premium)' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥2)' },
      { label: 'Atest żywnościowy (USA)', value: 'FDA 175.105 (suche lub przez warstwę barierową)' },
      { label: 'Odporność UV i atmosferyczna', value: 'Doskonała (excellent) — kluczowa cecha kleju' },
      { label: 'Odporność na rozdarcie i wodę', value: 'Dobra' },
      { label: 'Recyklowalność', value: 'Tak — razem z opakowaniami polipropylenowymi (PP)' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Numer próbki', value: 'SAMPLE65666 (uniwersalny)' },
      { label: 'Ograniczenie', value: 'Materiał z połyskiem (gloss) NIE nadaje się do druku w trybie fanfold (składanka)' },
      { label: 'Rdzeń (gilza)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '6' },
      { label: 'Klasa cenowa', value: 'Średnia foliowe (ekonomiczna folia biała)' },
    ],
    applications: [
      'Etykietowanie beczek z chemikaliami i produktów przemysłowych',
      'Etykiety palet zapakowanych folią termokurczliwą (pallet wrap labels)',
      'Etykiety nadające się do recyklingu z opakowaniami polipropylenowymi (PP) — ESG',
      'Etykiety półkowe sklepowe — biały top-coat zapewnia czytelny nadruk',
      'Etykiety produktów średnioterminowych — kosmetyki, chemia gospodarcza, AGD',
      'Opakowania z żywnością tłustą — atest BfR XIV z reduction factor ≥2',
      'Etykiety z bezpośrednim kontaktem z suchą żywnością (FDA 175.105)',
      'Etykiety produktów z ekspozycją na UV — sezonowe ogrodnictwo, DIY z dużymi witrynami',
      'Etykiety promocyjne wystawione na słońcu — odporność UV kleju',
      'Etykiety na sztywnych, płaskich opakowaniach — kartony, plastikowe pojemniki sztywne, słoiki',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową (2300, 2100) lub wosk-żywicową (3200, 3400) — wymaga taśmy żywicznej (4800/5095)',
      'Druk w trybie fanfold (składanka bez gilzy) — gloss nie nadaje się; do fanfold wybierz PolyPro 4000T Matte',
      'Aplikacje wymagające maksymalnej trwałości outdoor (>1 rok) — wybierz Z-Ultimate 3000T White (1 rok+ outdoor)',
      'Zakrzywione, elastyczne opakowania (butelki HDPE ściśliwe, tuby) — wybierz elastyczny PolyE 3100T Gloss',
      'Najsilniejszy klej (etykiety na polietylenie) — wybierz PolyPro 4000T Matte (siła 286 N/m na PE)',
      'Mroźnie głębokie poniżej -20°C — wybierz PolyPro 4000T Matte (-54°C) lub 8000T All-Temp',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy',
      'Aplikacje poniżej 5°C — minimalna temperatura aplikacji to 5°C',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XIV', description: 'Niemiecki standard dla materiałów w kontakcie z **suchą, wilgotną ORAZ tłustą żywnością** (reduction factor ≥2). W PolyPro 3000T Gloss atest obejmuje produkty tłuste — szerszy zakres niż w Z-Perform 1000T standardowym, ale węższy niż w PolyE 3100T (RF≥3).' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w kontakcie z suchymi produktami spożywczymi lub przez warstwę barierową.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — dla osób uczulonych na lateks.' },
      { name: 'Odporność UV i atmosferyczna', description: 'Klej akrylowy z doskonałą odpornością na promieniowanie UV i czynniki atmosferyczne — pozwala na zastosowania zewnętrzne krótkoterminowe.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-clear', whenToChooseThis: 'PolyPro 3000T Gloss (biały) dla **standardowych etykiet z nadrukiem** i **wysokiego kontrastu kodów kreskowych**. Tańszy od Clear o około 30%. PolyPro 3000T Clear (przezroczysty) gdy chcesz efektu „no label look" — produkt widoczny pod etykietą, premium estetyka.' },
      { seriesSlug: 'polypro-4000t-matte', whenToChooseThis: 'PolyPro 3000T Gloss do standardowych aplikacji z połyskiem i niższej cenie. PolyPro 4000T Matte gdy potrzebny **najsilniejszy klej** (stal 825 N/m, polietylen 286 N/m), **najszerszy zakres temperatur** (-54°C do +120°C), **machine vision** (matowa powierzchnia) lub **druk fanfold**.' },
      { seriesSlug: 'polye-3100t-gloss', whenToChooseThis: 'PolyPro 3000T Gloss dla **sztywnych, płaskich opakowań** (kartony, pojemniki sztywne, słoiki) i niższej ceny. PolyE 3100T Gloss dla **elastycznych opakowań** (butelki HDPE ściśliwe, tuby) z szerszym atestem BfR XIV (RF≥3).' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'PolyPro 3000T Gloss jako tańsza folia wodoodporna do **zastosowań podstawowych** średnioterminowych (do 1 roku indoor). Z-Ultimate 3000T White (poliester PET) gdy potrzeba **maksymalnej odporności chemicznej**, certyfikatu UL/CSA, trwałości 1 rok+ outdoor i zakresu temperatur -40°C do +150°C.' },
    ],
    faq: [
      { question: 'Co to jest BOPP?', answer: '**BOPP — Bi-axially Oriented PolyPropylene** (polipropylen dwuosiowo orientowany). Sposób produkcji folii polipropylenowej, gdzie materiał jest **rozciągany w dwóch kierunkach jednocześnie** (kierunku maszynowym i poprzecznym). Daje wysoką wytrzymałość mechaniczną (high tensile strength) i dobrą sztywność (good stiffness). BOPP to **najczęściej stosowane tworzywo na etykiety foliowe w przemyśle** — standard branżowy ze względu na kombinację wytrzymałości, sztywności i niskiej ceny.' },
      { question: 'Jaką taśmę dobrać do PolyPro 3000T Gloss?', answer: 'Wyłącznie **żywiczną** — Zebra zaleca dwie taśmy: **4800** (standardowa, pierwszy wybór dla typowych aplikacji przemysłowych i konsumenckich) lub **5095** (klasy premium, dla aplikacji z wyższymi wymaganiami chemicznymi lub krótkoterminowo na zewnątrz). **Taśmy wosk-żywicowe (3200, 3400) i woskowe NIE są zalecane** — wosk nie wiąże się trwale z polipropylenem. Dla maksymalnej trwałości na BOPP zawsze stosuj żywiczną.' },
      { question: 'Czy PolyPro 3000T Gloss jest wodoodporny?', answer: 'Tak — polipropylen jest w pełni wodoodporny, w odróżnieniu od papieru. Sprawdza się na opakowaniach mytych, w chłodniach i wilgotnych środowiskach. Klej akrylowy zachowuje przyczepność po kontakcie z wodą.' },
      { question: 'Czy mogę używać outdoor?', answer: 'Karta katalogowa Zebry podaje **trwałość użytkową „do 1 roku w pomieszczeniach"**, ale **klej ma doskonałą odporność UV i atmosferyczną** (excellent UV resistance and weatherability). To pozwala na **zastosowania zewnętrzne krótkoterminowe** — sezonowe etykiety ogrodnicze, etykiety na produktach DIY z dużymi witrynami sklepowymi, etykiety promocyjne wystawione na słońcu. Do długoterminowych aplikacji zewnętrznych (>1 rok) wybierz Z-Ultimate 3000T White (1 rok+ outdoor) lub Z-Ultimate Silver.' },
      { question: 'Czy ma atest żywnościowy?', answer: 'Tak — komplet atestów UE i USA: **EC 1935/2004, EU 10/2011, BfR Recommendation XIV dla suchych, wilgotnych ORAZ tłustych** produktów (reduction factor ≥2), oraz **FDA 175.105** (USA, suche lub przez warstwę barierową). Materiał jest **bez bisfenolu A i bez lateksu**. Atest BfR XIV w PolyPro 3000T jest **szerszy niż w Z-Perform 1000T** (tylko suche i wilgotne nietłuste), ale **węższy niż w PolyE 3100T** (RF≥3 vs RF≥2).' },
      { question: 'Czym PolyPro Gloss różni się od Clear?', answer: 'Wyłącznie **kolorem lica** — Gloss jest biały (etykieta widoczna z pełnym nadrukiem na białym tle), Clear jest przezroczysty (efekt „no label look", produkt widoczny pod etykietą). Pozostałe parametry techniczne (klej, podkład, atesty, temperatury, taśmy) są **identyczne**. Wybierz Gloss dla standardowych aplikacji z czytelnym kontrastem kodów, Clear dla premium estetyki transparentnej (Gloss tańszy o około 30%).' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: biały polipropylen BOPP z połyskiem i powłoką top-coat **57 μm**. Klej trwały akrylowy z odpornością UV **19 μm**. Podkład silikonowany 61 g/m² **54 μm**. **Łączna grubość 130 μm (±10%)** — identyczna z PolyPro 3000T Clear, najcieńsza biała folia w portfolio Zebra (PolyPro 4000T ma 208 μm, PolyE 155 μm).' },
      { question: 'W jakich temperaturach mogę aplikować?', answer: 'Minimalna temperatura aplikacji: **5°C**. Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C** — wystarczająco do typowych aplikacji w magazynie, transporcie i sklepach detalicznych. Do aplikacji w chłodni (od -15°C) wybierz Z-Perform Removable, do mroźni głębokich (-54°C) — PolyPro 4000T Matte.' },
      { question: 'Czy folia jest recyklowalna?', answer: 'Tak — **w pełni recyklowalna razem z opakowaniami polipropylenowymi**. Etykieta i opakowanie PP poddają się recyklingowi w tym samym strumieniu, bez potrzeby usuwania etykiety przed recyklingiem. Kluczowe dla firm z polityką ESG i celami zerowych odpadów.' },
      { question: 'Czy mogę zamówić próbki?', answer: 'Tak — Zebra udostępnia uniwersalną próbną rolkę **SAMPLE65666** (jeden numer dla wszystkich drukarek — biurkowych, średnich, przemysłowych). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać taśmę (4800 lub 5095) do Twojego zastosowania, z uwzględnieniem warunków docelowych (temperatura, ekspozycja UV, kontakt z chemikaliami).' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 4800 Resin', 'Zebra 5095 Resin'],
    },
  },

  /* ──────────────── 9. POLYPRO 3000T CLEAR — przezroczysty ──────────────── */
  {
    slug: 'polypro-3000t-clear',
    productId: 'zebra-polypro-3000t-clear',
    subcategory: 'foliowe',
    badge: 'PolyPro 3000T Clear',
    title: 'PolyPro 3000T Clear',
    tagline: 'Przezroczysty polipropylen — efekt „no label", widoczność produktu pod etykietą.',
    positioning: 'specjalistyczna',
    material: 'polipropylen-przezroczysty',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: true,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 664.14,
    accent: '#059669',
    seoTitle: 'Zebra PolyPro 3000T Clear | przezroczysta folia polipropylenowa, efekt no label, BfR XIV',
    seoDescription: 'Zebra PolyPro 3000T Clear — przezroczysta folia polipropylenowa z połyskiem. Efekt „no label look" (widoczny produkt pod etykietą), atest BfR XIV dla suchych, wilgotnych i tłustych z RF≥2, FDA 175.105. Kosmetyki, napoje premium, laminat ochronny. 2 warianty od 664 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 3000T Clear',
    heroIntro: 'PolyPro 3000T Clear to **przezroczysta foliowa etykieta termotransferowa Zebra** z polipropylenu (BOPP) z połyskiem. Kluczowa cecha — daje **efekt „no label look"**: produkt pozostaje widoczny pod etykietą, a nadruk wygląda jakby był bezpośrednio na opakowaniu. Komplet atestów żywnościowych UE i USA, w tym **BfR XIV dla suchych, wilgotnych ORAZ tłustych** produktów z reduction factor ≥2. Trwałość w pomieszczeniach i na zewnątrz do 1 roku. Drukujesz wyłącznie taśmą żywiczną: Zebra 4800 lub 5095. **Najcieńsza folia w portfolio Zebra (130 μm)**.',
    heroImage: '/images/etykiety-termotransferowe-zebra-polypro-3000t-clear.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — przezroczysta folia polipropylenowa (BOPP) z połyskiem (57 μm)',
      'Konstrukcja: PP 57 μm + klej 19 μm + podkład silikonowany 54 μm (łącznie **130 μm ±10% — najcieńsza folia w portfolio**)',
      'Efekt **„no label look"** — produkt widoczny pod etykietą, nadruk jak bezpośrednio na opakowaniu',
      'Komplet atestów: EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥2)',
      'FDA 175.105 — kontakt z suchymi produktami lub przez warstwę barierową',
      'Trwałość: w pomieszczeniach do 1 roku, na zewnątrz do 1 roku',
      'Zakres pracy -20°C do +80°C, minimalna temperatura aplikacji 5°C',
      'Druk wyłącznie taśmą żywiczną: Zebra 4800 lub 5095',
      'Bez bisfenolu A, bez lateksu',
      'Można używać jako **laminat ochronny** (over-laminate) nad innymi etykietami',
    ],
    sections: [
      {
        heading: 'Czym jest efekt „no label look"?',
        content:
          'PolyPro 3000T Clear to **przezroczysta folia polipropylenowa z połyskiem**. Po naklejeniu na gładkie, przezroczyste lub kolorowe opakowanie etykieta niemal znika — widać produkt pod nią, a nadruk (tekst, logo, kod) wygląda jakby był wydrukowany bezpośrednio na opakowaniu. To pożądany w klasie premium efekt **„no label look"**, kojarzony z naturalnością, minimalizmem i transparentnością marki.\n\nMateriał jest wodoodporny, trwały i ma takie same parametry mechaniczne jak biała wersja (PolyPro 3000T Gloss) — różni się tylko **przezroczystością lica**. Najcieńsza folia w portfolio Zebra (130 μm) — dyskretna i niemal niezauważalna na opakowaniu.',
      },
      {
        heading: 'Konstrukcja i parametry techniczne',
        content:
          'PolyPro 3000T Clear ma najcieńszą warstwową konstrukcję w portfolio folii TT Zebra:\n\n- **Lico (57 μm)** — przezroczysta folia polipropylenowa (BOPP) z połyskiem. Ultracienka warstwa daje pełną przezroczystość i minimalny relief na opakowaniu — etykieta praktycznie znika z perspektywy estetycznej.\n- **Klej (19 μm)** — trwały akrylowy. Bezbarwny, nie zostawia żółtych smug na przezroczystych opakowaniach (kluczowe dla estetyki premium).\n- **Podkład (54 μm, 61 g/m²)** — papier silikonowany glassine.\n\n**Łączna grubość 130 μm (±10%)** — najcieńsze etykiety TT w portfolio Zebra (PolyPro 4000T ma 208 μm, PolyE 155 μm, Z-Ultimate 128 μm). Cienka folia jest jednocześnie zaletą (dyskrecja) i ograniczeniem (mniejsza wytrzymałość mechaniczna niż grubsze folie). Materiał jest **odporny na rozdarcia i wodę** w typowych warunkach użytkowania konsumenckiego.\n\nWydajność: minimalna temperatura aplikacji **5°C**, zakres temperatury pracy **-20°C do +80°C**. Trwałość użytkowa: **w pomieszczeniach do 1 roku, na zewnątrz do 1 roku** — wystarczająco do produktów średnioterminowych (kosmetyki, napoje, etykiety promocyjne). Trwałość magazynowa rolki: 1 rok przy 20-25°C, wilgotność 40-50%.',
      },
      {
        heading: 'Atesty żywnościowe — BfR XIV dla produktów tłustych',
        content:
          'PolyPro 3000T Clear posiada **rozszerzony pakiet atestów żywnościowych** — szerszy niż w Z-Perform 1000T standardowym i Z-Select 2000T:\n\n- **EC 1935/2004** — unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością\n- **EU 10/2011** — wymagania dla tworzyw sztucznych w kontakcie z żywnością\n- **BfR Recommendation XIV** — w PolyPro 3000T Clear atest obejmuje kontakt z **żywnością suchą, wilgotną ORAZ tłustą** z **reduction factor ≥2**. To rozszerzony zakres względem standardowego BfR XIV (Z-Perform 1000T), choć węższy niż PolyE 3100T (RF≥3).\n- **FDA 175.105** (USA) — kontakt z suchymi produktami lub przez warstwę barierową\n\nDodatkowo materiał jest **bez bisfenolu A (BPA-free) i bez lateksu (latex-free)**.\n\nDzięki temu PolyPro 3000T Clear jest **właściwym wyborem dla branży spożywczej i kosmetycznej klasy premium** — można go używać na opakowaniach z produktami tłustymi (oleje, masła, kosmetyki olejowe), gdzie estetyka „no label look" jest częścią identyfikacji marki.',
      },
      {
        heading: 'Uwaga o czytelności kodów kreskowych',
        content:
          '**Kluczowa uwaga z karty katalogowej Zebry**: „Due to label transparency, barcode scannability depends on substrate colour" — **czytelność kodu kreskowego zależy od koloru podłoża pod etykietą**.\n\nDlaczego to ważne:\n\n- Nadruk z taśmy żywicznej jest **czarny**\n- Tło etykiety jest **przezroczyste** (pokazuje kolor opakowania)\n- Kontrast między czarnym nadrukiem a kolorem opakowania decyduje o czytelności kodu kreskowego dla skanerów\n\n**Na jasnym lub białym opakowaniu** (białe butelki kosmetyków, biały plastik) — kontrast wystarczający, kody skanują się dobrze.\n\n**Na ciemnym, barwnym lub wzorzystym opakowaniu** (czerwone wino w szkle, opakowania z grafiką, ciemne plastiki) — kontrast może być za niski, kody bywają nieczytelne dla skanerów automatycznych.\n\n**Przed dużym zamówieniem zawsze przetestuj** PolyPro 3000T Clear na docelowym opakowaniu z faktycznym kodem kreskowym i typowym skanerem branżowym. Dla etykiet z **krytycznymi kodami** (logistyka, automatyka, sprzedaż detaliczna z automatycznym kasowaniem) — wybierz **białą wersję PolyPro 3000T Gloss** lub Z-Ultimate White (lepszy kontrast).',
      },
      {
        heading: 'Z jaką taśmą drukować?',
        content:
          'PolyPro 3000T Clear obsługuje **2 modele taśm Zebra** — wyłącznie żywiczne:\n\n- **Zebra 4800** — żywiczna standardowa. Pierwszy wybór dla większości aplikacji konsumenckich (kosmetyki, napoje, etykiety promocyjne). Daje czytelny ostry nadruk z dobrą odpornością na ścieranie i wilgoć.\n- **Zebra 5095** — żywiczna klasy premium. Dla aplikacji z wyższymi wymaganiami (chemia, opakowania narażone na rozpuszczalniki) lub gdy nadruk musi przetrwać pełen rok w warunkach zewnętrznych.\n\n**WAŻNE:** taśmy **wosk-żywicowe (3200, 3400, 5555)** i **woskowe (2300, 2100)** NIE są zalecane dla PolyPro 3000T Clear — żywica chemicznie wiąże się z polipropylenem znacznie lepiej niż wosk. Wosk na folii może odchodzić przy potarciu.\n\n**Po co tylko żywiczne taśmy?** Bo wymagania kosmetyków i premium retail są wysokie: etykieta nie może blaknąć, ścierać się na dotyk klientów ani odchodzić po kontakcie z wodą czy kremem. Żywica daje wytrzymały, ostry nadruk pasujący do estetyki premium.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 3000T Clear to **specjalistyczna folia do aplikacji wymagających estetyki transparentnej** — Zebra wskazuje pięć konkretnych zastosowań:\n\n- **Śledzenie dokumentów (document tracking)** — etykiety na teczkach, segregatorach, kopertach, dokumentach archiwizacyjnych. Przezroczysta folia nie zasłania tytułu ani treści dokumentu pod nią.\n- **Aplikacje wymagające efektu „no label look"** — premium kosmetyki, napoje, perfumy, oleje, miody, syropy. Etykieta jak gdyby nie istniała, widać produkt — kluczowe w marketingu marek naturalnych i luksusowych.\n- **Etykietowanie beczek z chemikaliami i produktów przemysłowych** — gdy widoczność płynu lub etykiety pod nią jest ważna (poziom napełnienia, kontrola wzrokowa).\n- **Etykiety promocyjne** — sezonowe akcje, oznaczenia czasowe, kupony rabatowe nakładane na produkt bez zasłaniania głównej etykiety produktu.\n- **Laminat ochronny (over-laminate)** — przezroczysta warstwa nakładana na **inne etykiety** dla zwiększenia trwałości nadruku. To unikalne zastosowanie — PolyPro 3000T Clear można używać jako ochrony dla nadruków papierowych narażonych na ścieranie, wilgoć lub kontakt z dłońmi.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy żywicznej)' },
      { label: 'Materiał lica', value: 'Przezroczysta folia polipropylenowa (BOPP) z połyskiem (57 μm)' },
      { label: 'Klej', value: 'Trwały akrylowy (19 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine 61 g/m² (54 μm)' },
      { label: 'Łączna grubość', value: '130 μm (±10%) — najcieńsza folia w portfolio Zebra' },
      { label: 'Wykończenie', value: 'Przezroczysty z połyskiem — efekt „no label look"' },
      { label: 'Min. temperatura aplikacji', value: '5°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość w pomieszczeniach', value: 'Do 1 roku' },
      { label: 'Trwałość na zewnątrz', value: 'Do 1 roku' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 20-25°C, wilgotność 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 4800 (żywiczna standardowa), 5095 (żywiczna premium)' },
      { label: 'Atest żywnościowy (UE)', value: 'EC 1935/2004, EU 10/2011, **BfR XIV dla suchych, wilgotnych ORAZ tłustych** (reduction factor ≥2)' },
      { label: 'Atest żywnościowy (USA)', value: 'FDA 175.105 (suche lub przez warstwę barierową)' },
      { label: 'Czytelność kodu kreskowego', value: 'Zależy od koloru podłoża — testuj na docelowym opakowaniu' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Odporność na rozdarcie i wodę', value: 'Dobra' },
      { label: 'Numer próbki', value: 'SAMPLE65036 (uniwersalny)' },
      { label: 'Ograniczenie', value: 'Materiał z połyskiem (gloss) NIE nadaje się do druku w trybie fanfold' },
      { label: 'Rdzeń (gilza)', value: '25 mm' },
      { label: 'Liczba wariantów', value: '2' },
      { label: 'Klasa cenowa', value: 'Średnia foliowe specjalne (Clear — premium estetyka)' },
    ],
    applications: [
      'Efekt „no label look" — premium kosmetyki, perfumy, oleje, miody, syropy (widoczny produkt)',
      'Śledzenie dokumentów — teczki, segregatory, koperty, archiwizacja',
      'Etykietowanie beczek z chemikaliami i produktów przemysłowych — kontrola wzrokowa zawartości',
      'Etykiety promocyjne i sezonowe — bez zasłaniania głównej etykiety produktu',
      'Laminat ochronny (over-laminate) — przezroczysta folia nakładana na inne etykiety',
      'Opakowania z żywnością tłustą — atest BfR XIV z reduction factor ≥2',
      'Etykiety na opakowania szklane (butelki, słoiki) — widoczna zawartość',
      'Etykiety na przezroczyste opakowania plastikowe — spójność wizualna',
      'Etykiety klasy premium luksusowej — minimalistyczna estetyka',
      'Etykiety na opakowania z grafiką marki — bez zasłaniania designu',
    ],
    notRecommendedFor: [
      'Krytyczne kody kreskowe na ciemnym lub barwnym podłożu — kontrast może być za niski; wybierz biały PolyPro 3000T Gloss',
      'Druk z taśmą woskową lub wosk-żywicową — wymaga taśmy żywicznej (4800 lub 5095)',
      'Druk w trybie fanfold (składanka bez gilzy) — gloss nie nadaje się',
      'Standardowe etykiety przemysłowe — wybierz tańszy biały PolyPro 3000T Gloss',
      'Etykiety wymagające maksymalnej wytrzymałości — najcieńsza folia (130 μm) ma mniejszą wytrzymałość niż PolyPro 4000T (208 μm)',
      'Trwałość ponad 1 rok — wybierz Z-Ultimate 3000T White (1 rok+ outdoor)',
      'Aplikacje poniżej 5°C — minimalna temperatura aplikacji to 5°C',
      'Budżetowa wysyłka i magazyn — wybierz papier Z-Perform 1000T',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
      { name: 'EU 10/2011', description: 'Wymagania dla tworzyw sztucznych przeznaczonych do kontaktu z żywnością.' },
      { name: 'BfR Recommendation XIV', description: 'Niemiecki standard dla materiałów w kontakcie z **suchą, wilgotną ORAZ tłustą żywnością** (reduction factor ≥2). W PolyPro 3000T Clear atest obejmuje produkty tłuste — szerszy zakres niż w Z-Perform 1000T standardowym, ale węższy niż w PolyE 3100T (RF≥3).' },
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w kontakcie z suchymi produktami spożywczymi lub przez warstwę barierową.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań spożywczych i medycznych.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — dla osób uczulonych na lateks.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz PolyPro 3000T Clear (przezroczysty) dla **efektu „no label look"** — premium kosmetyki, napoje, opakowania szklane gdy chcesz pokazać produkt pod etykietą. PolyPro 3000T Gloss (biały) gdy potrzebny jest **silny kontrast** dla kodów kreskowych, etykieta ma być widoczna z nadrukiem na białym tle.' },
      { seriesSlug: 'polypro-4000t-matte', whenToChooseThis: 'PolyPro 3000T Clear dla aplikacji konsumenckich klasy premium z estetyką transparentną. PolyPro 4000T Matte do wymagających aplikacji przemysłowych z **najsilniejszym klejem** i pracą w mroźniach głębokich (-54°C).' },
      { seriesSlug: 'polye-3100t-gloss', whenToChooseThis: 'PolyPro 3000T Clear dla **estetyki transparentnej** i sztywnego opakowania (butelki szklane, sztywne plastiki). PolyE 3100T Gloss dla elastycznych opakowań (butelki HDPE ściśliwe, tuby) z atestem żywnościowym BfR XIV z reduction factor ≥3 (szerszy niż w Clear).' },
    ],
    faq: [
      { question: 'Czy na przezroczystej etykiecie zeskanuje się kod kreskowy?', answer: 'Zależy od **koloru i wzoru podłoża** pod etykietą. Karta katalogowa Zebry konkretnie ostrzega: „barcode scannability depends on substrate colour". Na jasnym/białym opakowaniu kontrast czarnego nadruku może wystarczyć dla skanerów. **Na ciemnym, barwnym lub wzorzystym podłożu** kody bywają nieczytelne. Zawsze testuj na docelowym opakowaniu z faktycznym skanerem przed dużym zamówieniem. Dla krytycznych kodów (logistyka, automatyka, sprzedaż detaliczna) wybierz białą wersję PolyPro 3000T Gloss.' },
      { question: 'Jaką taśmę dobrać do PolyPro 3000T Clear?', answer: 'Wyłącznie **żywiczną** — Zebra zaleca dwie taśmy: **4800** (standardowa, pierwszy wybór dla typowych aplikacji konsumenckich) lub **5095** (klasy premium, dla aplikacji z wyższymi wymaganiami chemicznymi lub na zewnątrz). **Taśmy woskowe (2300, 2100) i wosk-żywicowe (3200, 3400) NIE są zalecane** — wosk nie wiąże się trwale z polipropylenem. Premium estetyka „no label look" wymaga żywicznego nadruku.' },
      { question: 'Czy etykieta jest naprawdę niewidoczna?', answer: 'Folia jest **przezroczysta**, więc na gładkich, jednolitych powierzchniach (białe butelki kosmetyków, szklane słoiki, przezroczyste opakowania plastikowe) efekt „no label look" jest **bardzo dobry**. Widoczny pozostaje tylko **sam nadruk** (czarny tekst, logo, kod) i delikatna **krawędź etykiety** widoczna z bliska. To pożądany efekt w marketingu marek premium — komunikuje minimalizm i transparentność.' },
      { question: 'Czy PolyPro 3000T Clear ma atest żywnościowy?', answer: 'Tak — komplet atestów UE i USA: **EC 1935/2004, EU 10/2011, BfR Recommendation XIV dla suchych, wilgotnych ORAZ tłustych** produktów (reduction factor ≥2), oraz **FDA 175.105** (USA, suche lub przez warstwę barierową). To **szerszy zakres** niż w Z-Perform 1000T (tylko suche i wilgotne nietłuste), ale **węższy** niż w PolyE 3100T (RF≥3). Materiał jest **bez bisfenolu A i bez lateksu**.' },
      { question: 'Czym PolyPro Clear różni się od Gloss?', answer: '**Wyłącznie kolorem lica** — Clear jest przezroczysty (widoczny produkt pod etykietą), Gloss jest biały (etykieta widoczna z pełnym nadrukiem). Pozostałe parametry techniczne (klej, podkład, atesty, temperatury) są identyczne. **Wybierz Clear dla efektu „no label look"** (premium kosmetyki, napoje), **Gloss dla standardowych etykiet** z czytelnym kontrastem kodów na białym tle.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: przezroczysta folia polipropylenowa z połyskiem **57 μm** (cienka — daje dyskretną etykietę). Klej trwały akrylowy bezbarwny **19 μm** (nie zostawia żółtych smug). Podkład silikonowany 61 g/m² **54 μm**. **Łączna grubość 130 μm (±10%)** — **najcieńsza folia w portfolio Zebra** (PolyPro 4000T ma 208 μm, PolyE 155 μm).' },
      { question: 'Czy mogę używać jako laminat ochronny?', answer: 'Tak — **to konkretne zastosowanie wskazane w karcie katalogowej Zebry** („For use as a protective over-laminate"). Przezroczystą folię PolyPro 3000T Clear można nakładać **na inne etykiety** (np. papierowe Z-Perform) jako warstwę ochronną zwiększającą trwałość nadruku. Chroni przed ścieraniem, wilgocią i kontaktem z dłońmi. Po naklejeniu laminatu nadruk pod nim jest widoczny przez warstwę przezroczystej folii.' },
      { question: 'W jakich temperaturach mogę aplikować?', answer: 'Minimalna temperatura aplikacji: **5°C**. Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C**. Wystarczająco do typowych aplikacji konsumenckich (sklepy, magazyny, transport produktów codziennego użytku). Do aplikacji w chłodni (od -15°C) wybierz Z-Perform 1000T Removable, do mroźni głębokich (-54°C) — PolyPro 4000T Matte.' },
      { question: 'Jak długo wytrzymuje nadruk?', answer: '**W pomieszczeniach do 1 roku, na zewnątrz do 1 roku** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji). Wystarcza do produktów średnioterminowych (kosmetyki, napoje, etykiety promocyjne, dokumentacja archiwizacyjna). Do dłuższej trwałości outdoor wybierz **Z-Ultimate 3000T White** (1 rok+ outdoor z certyfikatem UL).' },
      { question: 'Czy mogę zamówić próbki?', answer: 'Tak — Zebra udostępnia uniwersalną próbną rolkę **SAMPLE65036** (jeden numer dla wszystkich drukarek — biurkowych, średnich, przemysłowych). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać taśmę (4800 lub 5095) do Twojego zastosowania. Szczególnie istotne dla testowania czytelności kodów kreskowych na docelowym opakowaniu.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 4800 Resin', 'Zebra 5095 Resin'],
    },
  },

  /* ──────────────── 10. POLYPRO 4000T MATTE — matowy, machine vision ──────────────── */
  {
    slug: 'polypro-4000t-matte',
    productId: 'zebra-polypro-4000t-matte',
    subcategory: 'foliowe',
    badge: 'PolyPro 4000T Matte',
    title: 'PolyPro 4000T Matte',
    tagline: 'Matowy polipropylen bez odblasków — idealny pod kamery przemysłowe (machine vision).',
    positioning: 'specjalistyczna',
    material: 'polipropylen-matowy',
    glue: 'permanentny-akrylowy',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 1294.41,
    accent: '#059669',
    seoTitle: 'Zebra PolyPro 4000T Matte | matowy polipropylen TT, mroźnie głębokie, najsilniejszy klej',
    seoDescription: 'Zebra PolyPro 4000T Matte — matowa biała folia polipropylenowa z powłoką top-coat. Zakres pracy -54°C do +120°C (mroźnie głębokie i piece przemysłowe), najsilniejszy klej akrylowy w portfolio (stal 825 N/m, polietylen 286 N/m), odporność chemiczna mocna. Recyklowalna z opakowaniami PP.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 4000T Matte',
    heroIntro: 'PolyPro 4000T Matte to **najbardziej wytrzymała foliowa etykieta polipropylenowa Zebra** — najgrubsze lico w portfolio (107 μm), **najsilniejszy klej akrylowy** (stal 825 N/m, polietylen 286 N/m) oraz **najszerszy zakres temperatury pracy spośród polipropylenów: -54°C do +120°C** (od mroźni głębokich do pieców przemysłowych). Matowe wykończenie eliminuje odbicia światła — kluczowe dla systemów **machine vision** i automatycznych skanerów wizyjnych, plus umożliwia druk w trybie fanfold. Odporność chemiczna **mocna**, recyklowalna razem z opakowaniami polipropylenowymi. Drukujesz taśmą Zebra 3200 (wosk-żywica) lub 4800/5095 (żywiczne).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polypro-4000t-matte.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — matowy biały polipropylen (BOPP) z powłoką top-coat (**107 μm** — najgrubsze lico w portfolio folii TT)',
      'Konstrukcja: PP 107 μm + klej 25 μm + podkład kraft 76 μm (łącznie 208 μm ±10%)',
      'Zakres pracy **-54°C do +120°C** — od mroźni głębokich do pieców przemysłowych',
      'Najsilniejszy klej w portfolio: stal 825 N/m, poliwęglan 803 N/m, polietylen 286 N/m (po 24h)',
      'Odporność chemiczna **mocna** — krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej (z taśmą 3200)',
      'Wykończenie matowe — eliminuje odbicia światła dla machine vision i kontroli optycznej',
      'Możliwość druku w trybie fanfold (matowy materiał, w odróżnieniu od gloss)',
      'Recyklowalna razem z opakowaniami polipropylenowymi (PP)',
      'FDA 175.105 — pośredni kontakt z dodatkami żywnościowymi (przez warstwę barierową)',
      'Bez bisfenolu A, bez lateksu',
    ],
    sections: [
      {
        heading: 'Czym jest PolyPro 4000T Matte?',
        content:
          'PolyPro 4000T Matte to **najmocniejsza foliowa etykieta polipropylenowa Zebra** w portfolio etykiet termotransferowych. Wyróżnia ją trzy parametry:\n\n- **Najgrubsze lico (107 μm)** w portfolio folii TT — wytrzymałość mechaniczna na poziomie etykiet przemysłowych klasy premium\n- **Najsilniejszy klej akrylowy** — wartości peel adhesion daleko powyżej innych folii Zebra, szczególnie na powierzchniach niskoenergetycznych jak polietylen (286 N/m vs 66 N/m w Z-Ultimate)\n- **Najszerszy zakres temperatur** spośród polipropylenów: -54°C do +120°C, obejmuje zarówno mroźnie głębokie (deep freeze) jak i piece przemysłowe\n\nMatowe wykończenie powierzchni eliminuje odbicia światła — kluczowe dla zautomatyzowanych linii z systemami **machine vision** i kamerami inspekcyjnymi, gdzie refleksy zakłócają odczyt kodów. Dodatkowo materiały matowe można drukować w trybie **fanfold** (składanka bez gilzy), co nie jest możliwe dla wariantów z połyskiem.',
      },
      {
        heading: 'Konstrukcja warstwowa — najgrubsze lico i najsilniejszy klej',
        content:
          'PolyPro 4000T Matte ma trzywarstwową konstrukcję zaprojektowaną pod ciężkie warunki przemysłowe:\n\n- **Lico (107 μm)** — matowy biały polipropylen (BOPP) z ochronną powłoką top-coat. **Najgrubsze lico w portfolio folii TT Zebra** (Z-Ultimate ma 50 μm, PolyE 82 μm, PolyPro 3000T około 60 μm). Daje wyjątkową wytrzymałość mechaniczną na rozdarcia, abrazję i zarysowania.\n- **Klej (25 μm)** — trwały akrylowy. **Najgrubszy i najsilniejszy klej** spośród wszystkich folii Zebra. Wartości peel adhesion pod kątem 180° po 24 godzinach:\n  - **Stal: 825 N/m** (Z-Ultimate ma 671 N/m, PolyPro 3000T około 600 N/m)\n  - **Poliwęglan: 803 N/m** (Z-Ultimate 517 N/m)\n  - **Polietylen: 286 N/m** (Z-Ultimate 66 N/m — różnica 4×!)\n\n  Wartość na polietylenie jest szczególnie istotna — większość typowych klejów akrylowych słabo trzyma na PE. PolyPro 4000T to **najlepszy wybór dla etykiet na opakowaniach polietylenowych** (HDPE, LDPE).\n- **Podkład (76 μm, 62 g/m²)** — papier kraft półbielony. To rzadkość w portfolio Zebra — większość etykiet ma podkład glassine. Kraft jest grubszy i sztywniejszy, daje lepsze właściwości w aplikatorach automatycznych z dużymi nakładami.\n\n**Łączna grubość 208 μm (±10%)** — **najgrubsze etykiety TT w portfolio Zebra**. Co znaczy w praktyce: lepiej trzymają kształt podczas aplikacji, lepsze dla automatycznych aplikatorów, ale krótszy metraż na rolce o tej samej średnicy.',
      },
      {
        heading: 'Zakres temperatur — od mroźni głębokich do pieców',
        content:
          'PolyPro 4000T Matte oferuje **wyjątkowy zakres temperatury pracy** wśród polipropylenów:\n\n- **Minimalna temperatura aplikacji: 7°C** (klej akrylowy potrzebuje cieplej niż w cieńszych foliach)\n- **Zakres temperatury pracy: -54°C do +120°C** (po prawidłowej aplikacji i 24-godzinnej aklimatyzacji)\n- **Mroźnie głębokie (deep freeze)**: wytrzymuje przechowywanie w temperaturach do **-54°C** — to istotne dla logistyki mrożonej, magazynów przemysłu spożywczego i farmaceutycznego (mrożone leki, próbki kliniczne, biobanki niskotemperaturowe — choć do prawdziwej kriogeniki w ciekłym azocie wybierz 8100T Cryocool z -196°C)\n- **Wysokie temperatury**: do **+120°C** — aplikacje w pobliżu źródeł ciepła, etykiety na sprzęcie technicznym\n- **Trwałość w pomieszczeniach: 1 rok i więcej**\n- **Trwałość magazynowa rolki: 1 rok** przy 22°C i wilgotności względnej 50%\n\nUwaga: karta katalogowa nie wymienia trwałości na zewnątrz — PolyPro 4000T Matte jest projektowany jako etykieta przemysłowa do wnętrz i magazynów, nie do długiej ekspozycji UV.',
      },
      {
        heading: 'Dlaczego matowa powierzchnia ma znaczenie?',
        content:
          'W systemach **machine vision** i kontroli optycznej refleksy światła na błyszczącej etykiecie powodują „przepalenia" w obrazie z kamery — kod kreskowy lub inspekcja wizyjna staje się nieczytelna. **Matowa powierzchnia PolyPro 4000T eliminuje te odbicia**, dając równomierny, czytelny obraz niezależnie od kąta oświetlenia.\n\nTo materiał dla **zautomatyzowanych linii produkcyjnych i sortujących**, gdzie etykiety są odczytywane maszynowo:\n\n- Systemy machine vision w przemyśle motoryzacyjnym i elektronicznym\n- Sortownie kurierskie z automatycznymi skanerami\n- Linie produkcyjne z kontrolą jakości przez kamery wysokorozdzielcze\n- Magazyny z bramami skanującymi (RFID + barcode)\n\nDodatkowo materiały matowe mają **kluczową przewagę nad gloss**: można je drukować w trybie **fanfold** (składanka bez gilzy). Gloss z połyskiem nie wytrzymuje składania, ale matowy materiał świetnie się składa i rozwija w aplikatorach przemysłowych — to standard dla dużych nakładów.',
      },
      {
        heading: 'Odporność chemiczna i taśmy',
        content:
          'PolyPro 4000T Matte z taśmą **Zebra 3200** ma **mocną odporność chemiczną** (klasa Harsh) — według karty katalogowej Zebry pełna odporność na:\n\n- **Słabe** (Weak): krew, płyny ustrojowe, słona woda, woda, płyn do mycia szyb\n- **Umiarkowane** (Moderate): alkohol, amoniak, wybielacz, IPA (alkohol izopropylowy)\n- **Mocne** (Harsh): smar, olej\n\n**Taśmy 4800 i 5095 też dają odporność chemiczną**, ale wymagają testu w konkretnej aplikacji (Zebra nie certyfikuje ich z PolyPro 4000T tak jak z 3200).\n\n**Brak odporności** na: benzynę, aceton, IR Reflow (typowy w produkcji elektroniki), MEK (metyloetyloketon), TCE (trichloroetylen), ksylen. Do tych chemikaliów wybierz:\n- **Z-Ultimate 3000T White** z taśmą 5100 — dla benzyny\n- **8000T Chemresist** — dla acetonu, MEK, TCE, ksylenu i IR Reflow\n\nMateriał jest **bez bisfenolu A i bez lateksu**. Klej spełnia **FDA 175.105 dla pośredniego kontaktu** z dodatkami żywnościowymi — wymaga warstwy barierowej między etykietą a żywnością (NIE do bezpośredniego kontaktu).',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 4000T Matte to **uniwersalna folia przemysłowa** — Zebra wskazuje sześć konkretnych zastosowań:\n\n- **Etykiety produktów przemysłowych** — najsilniejszy klej akrylowy w portfolio, najgrubsze lico, najszerszy zakres temperatur. Idealna dla wymagających środowisk produkcyjnych.\n- **Etykiety palet zapakowanych folią termokurczliwą** (pallet wrap labels) — etykieta widoczna przez foliowe opakowanie palety, wytrzymuje transport międzynarodowy i przeładunki\n- **Etykiety nadające się do recyklingu** razem z opakowaniami polipropylenowymi (PP) — spójność materiałowa daje pełną recyklowalność. Kluczowe dla firm z polityką ESG.\n- **Etykietowanie większości materiałów opakowaniowych i tworzyw sztucznych** — szczególnie polipropylenowych i polietylenowych (siła kleju 286 N/m na PE)\n- **Etykiety półkowe sklepowe** (shelf edge labels) — wytrzymują dotyk klientów i wielokrotne wymiany\n- **Etykiety produktowe o średniej trwałości** — kosmetyki, chemia gospodarcza, AGD, narzędzia\n\nDodatkowe kluczowe zastosowania niewymienione bezpośrednio w PDF, wynikające z parametrów:\n\n- **Logistyka mrożona** — etykiety dla magazynów chłodniczych i transportu mrożonych produktów (do -54°C)\n- **Machine vision i automatyzacja** — sortownie kurierskie, linie produkcyjne z kontrolą optyczną\n- **Aplikacje fanfold** — duże nakłady na drukarkach przemysłowych z mechanizmem składanki',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Matowy biały polipropylen (BOPP) z powłoką top-coat (107 μm — najgrubsze lico)' },
      { label: 'Klej', value: 'Trwały akrylowy (25 μm — najsilniejszy w portfolio)' },
      { label: 'Podkład', value: 'Półbielony papier kraft 62 g/m² (76 μm)' },
      { label: 'Łączna grubość', value: '208 μm (±10%) — najgrubsze etykiety TT w portfolio Zebra' },
      { label: 'Wykończenie powierzchni', value: 'Matowe — eliminuje odbicia, umożliwia druk w trybie fanfold' },
      { label: 'Min. temperatura aplikacji', value: '7°C' },
      { label: 'Zakres temperatury pracy', value: '-54°C do +120°C (mroźnie głębokie do pieców)' },
      { label: 'Trwałość w pomieszczeniach', value: '1 rok i więcej' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 22°C, wilgotność 50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 3200 (wosk-żywica, pełna mapa odporności), 4800 lub 5095 (żywiczne, test w aplikacji)' },
      { label: 'Odporność chemiczna', value: 'Mocna (Harsh) — krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej (z 3200)' },
      { label: 'Brak odporności na', value: 'Aceton, IR Reflow, MEK, TCE, ksylen, benzyna' },
      { label: 'Siła kleju po 24h (peel 180°)', value: 'Stal 825 N/m, poliwęglan 803 N/m, polietylen 286 N/m — najsilniejszy w portfolio' },
      { label: 'FDA 175.105', value: 'Pośredni kontakt z dodatkami żywnościowymi (wymaga warstwy barierowej)' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Odporność na rozdarcie i wodę', value: 'Dobra' },
      { label: 'Recyklowalność', value: 'Tak — razem z opakowaniami polipropylenowymi (PP)' },
      { label: 'Kompatybilne drukarki', value: 'Biurkowe, średnie, przemysłowe (brak P4T)' },
      { label: 'Numer próbki', value: 'SAMPLE5300 (uniwersalny)' },
      { label: 'Rdzeń (gilza)', value: '25 mm, 76 mm, fanfold' },
      { label: 'Klasa cenowa', value: 'Średnia foliowe specjalne (Matt — machine vision i fanfold)' },
    ],
    applications: [
      'Etykiety produktów przemysłowych — najsilniejszy klej, najgrubsze lico w portfolio',
      'Etykiety palet zapakowanych folią termokurczliwą (pallet wrap labels)',
      'Etykiety nadające się do recyklingu z opakowaniami polipropylenowymi (PP) — polityki ESG',
      'Etykietowanie większości materiałów opakowaniowych i tworzyw sztucznych',
      'Etykiety półkowe sklepowe — wytrzymują dotyk klientów',
      'Etykiety produktowe o średniej trwałości — kosmetyki, chemia gospodarcza, AGD',
      'Systemy machine vision i automatyczne skanery wizyjne — matowa powierzchnia bez odbić',
      'Sortownie kurierskie z automatycznymi skanerami',
      'Linie produkcyjne z kontrolą jakości przez kamery wysokorozdzielcze',
      'Aplikacje w mroźniach głębokich (-54°C) — logistyka mrożona, magazyny chłodnicze',
      'Druk w trybie fanfold dla dużych nakładów na drukarkach przemysłowych',
      'Etykiety na powierzchniach niskoenergetycznych — polietylen (siła 286 N/m), polipropylen',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową (2300, 2100) — wymaga wosk-żywicy (3200) lub żywicznej (4800/5095)',
      'Bezpośredni kontakt z żywnością — FDA 175.105 tylko dla pośredniego kontaktu (przez warstwę barierową); wybierz Z-Perform 1000T lub PolyE 3100T',
      'Aplikacje z benzyną, acetonem, MEK, TCE, ksylenem — wybierz Z-Ultimate (5100) lub 8000T Chemresist',
      'Trwałość na zewnątrz — karta katalogowa nie wymienia outdoor; do outdoor wybierz Z-Ultimate 3000T White (1 rok+)',
      'Kriogenika w ciekłym azocie (-196°C) — wybierz 8100T Cryocool',
      'Budżetowa wysyłka i magazyn — wybierz papier Z-Perform 1000T',
      'Aplikacje poniżej 7°C — minimalna temperatura aplikacji to 7°C',
      'Aplikacje wymagające estetyki połysku — wybierz PolyPro 3000T Gloss lub Z-Ultimate Silver',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'FDA 175.105', description: 'Amerykańska rekomendacja FDA dla materiałów w **pośrednim** kontakcie z dodatkami żywnościowymi — wymaga warstwy barierowej między etykietą a żywnością. NIE do bezpośredniego kontaktu (wybierz Z-Perform 1000T z BfR XIV).' },
      { name: 'Recyklowalność', description: 'Materiał polipropylenowy — etykieta i opakowanie PP poddają się recyklingowi w tym samym strumieniu. Kluczowe dla firm z polityką ESG.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań przemysłowych i opakowań produktów konsumenckich.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — dla osób uczulonych na lateks.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'PolyPro 4000T Matte gdy potrzebny **najsilniejszy klej** (stal 825 N/m, polietylen 286 N/m), **najszerszy zakres temperatur** (-54°C do +120°C), **machine vision** (matowa powierzchnia) lub **druk fanfold**. PolyPro 3000T Gloss do standardowych zastosowań z połyskiem — tańszy.' },
      { seriesSlug: 'polypro-3000t-clear', whenToChooseThis: 'PolyPro 4000T Matte do **wymagających aplikacji przemysłowych** i machine vision. PolyPro 3000T Clear gdy chcesz efektu „no label look" (etykieta przezroczysta, widoczny produkt pod nią).' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'PolyPro 4000T Matte gdy klej musi być **najsilniejszy** (etykiety na polietylenie 286 N/m vs 66 N/m w Z-Ultimate) lub potrzebny jest **machine vision** i **fanfold**. Z-Ultimate gdy potrzebne certyfikaty **UL/CSA** (sprzęt elektryczny), trwałość 1 rok+ outdoor i odporność na benzynę.' },
    ],
    faq: [
      { question: 'Czym PolyPro 4000T Matte różni się od PolyPro 3000T Gloss?', answer: '**4000T to wersja Matte, 3000T to Gloss** — różnica nie jest tylko w wykończeniu, ale w całej specyfikacji. 4000T Matte: lico **107 μm** (vs 50-67 μm w 3000T), klej **25 μm** o sile **825 N/m na stali** (vs 600 N/m), zakres pracy **-54°C do +120°C** (vs -20°C do +80°C w 3000T), grubość całkowita **208 μm** (vs 130 μm). 4000T to **najmocniejsza folia polipropylenowa w portfolio**, do najtrudniejszych aplikacji przemysłowych i mroźni głębokich. 3000T do standardowych aplikacji konsumenckich.' },
      { question: 'Po co etykieta matowa?', answer: 'Matowa powierzchnia eliminuje odbicia światła — kluczowe dla **systemów machine vision** i kamer przemysłowych odczytujących kody kreskowe automatycznie. Refleksy z błyszczących etykiet powodują „przepalenia" w obrazie z kamery, czyniąc kod nieczytelnym. Dodatkowo materiały matowe można **drukować w trybie fanfold** (składanka bez gilzy), co nie jest możliwe dla wariantów z połyskiem. Standard dla dużych nakładów na drukarkach przemysłowych.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Pierwsza rekomendacja: **Zebra 3200 Wax-Resin** — daje pełną mapę odporności chemicznej certyfikowaną przez Zebra (krew, woda, alkohol, IPA, amoniak, wybielacz, smar, olej). Taśmy **4800 i 5095** (żywiczne) też dają odporność chemiczną, ale wymagają testu w konkretnej aplikacji. Do bezpośredniego kontaktu z benzyną, acetonem, MEK, TCE lub ksylenem — wybierz inną folię (Z-Ultimate z 5100 dla benzyny, 8000T Chemresist dla rozpuszczalników ekstremalnych).' },
      { question: 'Jak długo wytrzymuje nadruk?', answer: '**W pomieszczeniach 1 rok i więcej**. Karta katalogowa Zebry NIE wymienia trwałości na zewnątrz dla PolyPro 4000T Matte — to materiał projektowany pod aplikacje przemysłowe wewnętrzne (hale produkcyjne, magazyny, mroźnie). Do trwałych etykiet zewnętrznych z trwałością ponad 1 rok wybierz **Z-Ultimate 3000T White** (1 rok+ outdoor).' },
      { question: 'Jaka jest siła kleju?', answer: 'Po 24-godzinnej aklimatyzacji (peel adhesion pod kątem 180°): **stal 825 N/m, poliwęglan 803 N/m, polietylen 286 N/m**. To **najsilniejszy klej w portfolio etykiet termotransferowych Zebra**. Wartość na polietylenie (286 N/m) jest szczególnie istotna — typowe kleje akrylowe słabo trzymają na PE (66 N/m w Z-Ultimate). PolyPro 4000T Matte to najlepszy wybór dla etykiet na opakowaniach polietylenowych (HDPE, LDPE) i niskoenergetycznych tworzywach.' },
      { question: 'W jakich temperaturach mogę aplikować i używać?', answer: 'Minimalna temperatura aplikacji: **7°C** (klej akrylowy w PolyPro 4000T potrzebuje cieplej niż w cieńszych foliach). Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-54°C do +120°C** — wyjątkowo szeroki zakres. Pokrywa zarówno **mroźnie głębokie (deep freeze)** stosowane w logistyce mrożonej i przechowywaniu próbek farmaceutycznych, jak i **piece przemysłowe oraz aplikacje pod maską samochodu** do +120°C.' },
      { question: 'Czy PolyPro 4000T Matte ma atest żywnościowy?', answer: 'Tylko **FDA 175.105 dla pośredniego kontaktu** — wymaga warstwy barierowej (folii, papieru) między etykietą a żywnością. NIE do bezpośredniego kontaktu z żywnością. Do bezpośredniego kontaktu wybierz **Z-Perform 1000T** (BfR XIV dla suchych i wilgotnych nietłustych) lub **PolyE 3100T Gloss** (BfR XIV dla suchych, wilgotnych ORAZ tłustych z RF≥3).' },
      { question: 'Czy mogę drukować w trybie fanfold?', answer: '**Tak — to kluczowa przewaga wersji Matte nad Gloss**. Materiały z połyskiem (gloss) nie wytrzymują składania w fanfold — powierzchnia ulega uszkodzeniu przy każdym zagięciu. Matowy materiał świetnie się składa i rozwija w drukarkach przemysłowych z mechanizmem fanfold. Standard dla dużych nakładów (tysiące etykiet na zamówienie) z drukarkami ZT411, ZT421, ZT610, ZT620.' },
      { question: 'Czy folia jest recyklowalna?', answer: 'Tak — **w pełni recyklowalna razem z opakowaniami polipropylenowymi**. Etykieta i opakowanie PP poddają się recyklingowi w tym samym strumieniu, bez potrzeby usuwania etykiety przed recyklingiem. Kluczowe dla firm z polityką ESG i celami zerowych odpadów.' },
      { question: 'Czy mogę zamówić próbki?', answer: 'Tak — Zebra udostępnia uniwersalną próbną rolkę **SAMPLE5300** (jeden numer dla wszystkich drukarek — biurkowych, średnich, przemysłowych). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma (3200/4800/5095) + etykieta + drukarka do Twojego zastosowania, ze szczególnym uwzględnieniem warunków temperatury, chemii i sposobu skanowania (ręczne vs machine vision).' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin'],
    },
  },

  /* ──────────────── 11. POLYO 3100T — poliolefina (zamiennik PVC) ──────────────── */
  {
    slug: 'polyo-3100t',
    productId: 'zebra-polyo-3100t',
    subcategory: 'foliowe',
    badge: 'PolyO 3100T',
    title: 'PolyO 3100T',
    tagline: 'Poliolefina — ekologiczny zamiennik PVC, all-weather, spełnia regulacje UE.',
    positioning: 'specjalistyczna',
    material: 'poliolefina',
    glue: 'all-temperature',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: true,
    chemicalResistant: true,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 1431.26,
    accent: '#059669',
    seoTitle: 'Zebra PolyO 3100T | foliowe etykiety poliolefinowe BS5609, zamiennik PVC, klej kauczukowy',
    seoDescription: 'Zebra PolyO 3100T — satynowa biała folia poliolefinowa z klejem kauczukowym high-tack. Atest BS5609 dla transportu morskiego substancji niebezpiecznych (etykiety GHS). Alternatywa dla PVC, bez bisfenolu A, bez lateksu. Beczki chemiczne, kosmetyki, hot-fill. 3 warianty od 1431 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyO 3100T',
    heroIntro: 'PolyO 3100T to **foliowa etykieta termotransferowa Zebra z satynowej białej poliolefiny** z **klejem kauczukowym high-tack**. Wyróżniają ją trzy unikalne cechy: **atest BS5609** (transport morski substancji niebezpiecznych — kod IMDG i etykiety GHS), klej kauczukowy o **wzmocnionej przyczepności** do niskoenergetycznych tworzyw (polietylen, polipropylen, PVC) i powierzchni nieoptymalnych oraz **alternatywa dla PVC** tam, gdzie chlor jest zakazany regulacjami (RoHS, REACH) lub politykami ESG. Klej all-weather, materiał bez bisfenolu A i bez lateksu. Drukujesz taśmą Zebra 3200, 4800 lub 5095.',
    heroImage: '/images/etykiety-termotransferowe-zebra-polyo-3100t.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Lico — satynowa biała folia poliolefinowa (75 μm)',
      'Konstrukcja: poliolefina 75 μm + klej kauczukowy 20 μm + podkład silikonowany 63 μm (łącznie 158 μm ±10%)',
      'Klej **kauczukowy high-tack** — wzmocniona przyczepność do trudnych powierzchni (PE, PP, PVC, zaolejone)',
      'Atest **BS5609** — transport morski substancji niebezpiecznych (kod IMDG, etykiety GHS)',
      'Klej **all-weather** — odporność na zmienne warunki atmosferyczne',
      'Alternatywa dla PVC — bez chloru, zgodna z RoHS i REACH',
      'Bez bisfenolu A (BPA-free), bez lateksu',
      'Trwałość: w pomieszczeniach 1 rok i więcej, na zewnątrz do 1 roku',
      'Zakres pracy -20°C do +80°C, minimalna temperatura aplikacji 5°C',
      'Idealna do beczek chemicznych, kosmetyków, hot-fill i post blow-mould',
    ],
    sections: [
      {
        heading: 'Czym jest PolyO 3100T?',
        content:
          'PolyO 3100T to **foliowa etykieta termotransferowa Zebra z białej satynowej poliolefiny** — grupy tworzyw obejmujących polietylen (PE) i polipropylen (PP), bez chloru charakterystycznego dla PVC. Materiał posiada matowo-satynowe wykończenie powierzchni (a NIE z połyskiem jak PolyE czy Z-Ultimate) — to istotne, bo materiały matowe można drukować w trybie fanfold (składanka bez gilzy), w odróżnieniu od wariantów gloss.\n\nWyjątkową cechą serii jest **klej kauczukowy high-tack** — chemicznie inny od typowego akrylowego stosowanego w Z-Perform, Z-Select czy Z-Ultimate. Klej kauczukowy daje **silniejszą początkową przyczepność** (high tack) i lepiej trzyma na powierzchniach o niskiej energii powierzchniowej (polietylen, polipropylen, PVC), zaolejonych powierzchniach przemysłowych oraz tworzywach trudnych do oznakowania. Klej jest też klasyfikowany jako **all-weather** — działa w zmiennych warunkach atmosferycznych.',
      },
      {
        heading: 'Atest BS5609 — transport morski substancji niebezpiecznych',
        content:
          '**BS5609** to brytyjski standard (British Standard) dla materiałów stosowanych w oznakowaniu kontenerów z substancjami niebezpiecznymi przewożonymi drogą morską. Wymagany przez kod **IMDG** (International Maritime Dangerous Goods) dla etykiet ostrzegawczych i identyfikacyjnych na beczkach, kanistrach i opakowaniach zbiorczych z chemikaliami transportowanymi przez ocean.\n\nAtest BS5609 składa się z trzech testów:\n\n- **BS5609 Część 2** — test materiału (folia + klej): odporność na 3 miesiące zanurzenia w słonej wodzie, ekspozycja na słońce, abrazję\n- **BS5609 Część 3** — test druku: czytelność po teście Część 2 (z konkretną taśmą)\n- **BS5609 Część 1** — ogólne wymagania dla materiałów\n\nPolyO 3100T spełnia BS5609 Część 2 (materiał). Aby cały zestaw (etykieta + nadruk) miał pełny atest BS5609 Część 3, konieczne jest użycie certyfikowanej taśmy żywicznej. W praktyce: **PolyO 3100T to standard branżowy dla etykiet GHS (Globalnie Zharmonizowany System) na chemikaliach transportowanych morzem** — wymagane prawnie dla firm chemicznych eksportujących produkty drogą morską.',
      },
      {
        heading: 'Konstrukcja i klej kauczukowy high-tack',
        content:
          'PolyO 3100T ma trzywarstwową konstrukcję z nietypowym klejem:\n\n- **Lico (75 μm)** — satynowa biała folia poliolefinowa. Matowa powierzchnia daje pewny nadruk z taśmy bez efektu refleksów, co ułatwia skanowanie kodów kreskowych w warunkach z silnym oświetleniem (magazyny, hale produkcyjne). Folia jest elastyczna z zachowaniem sztywności potrzebnej do automatycznych aplikatorów.\n- **Klej (20 μm) — kauczukowy high-tack, all-weather** — kluczowa różnica względem typowych folii Zebra. Kauczuk syntetyczny ma inne właściwości chemiczne niż akryl:\n\n  - **Silniejsza początkowa przyczepność** (high tack) — etykieta trzyma się od razu po naklejeniu, bez okresu „dojrzewania" 24 godzin\n  - **Lepsza adhezja na powierzchniach o niskiej energii** — polietylen, polipropylen, PVC, niektóre materiały z dodatkami silikonowymi\n  - **Działa na zaolejonych powierzchniach** — beczki chemiczne wprost z linii produkcyjnej, opakowania z resztkami olejów\n  - **All-weather** — utrzymuje przyczepność w zmiennych warunkach atmosferycznych (deszcz, mróz, wahania wilgotności)\n\n- **Podkład (63 μm, 71 g/m²)** — papier silikonowany glassine.\n\n**Łączna grubość 158 μm (±10%)** — podobnie jak PolyE (155 μm) ze względu na grube lico foliowe. Trochę grubszy materiał, ale za to większa wytrzymałość mechaniczna.',
      },
      {
        heading: 'Alternatywa dla PVC — zgodność z RoHS i REACH',
        content:
          'PolyO 3100T to **świadomy wybór dla firm eliminujących PVC** ze swoich produktów i opakowań. PVC (polichlorek winylu) jest tworzywem trwałym i tanim, ale obarczonym wadami środowiskowymi: zawiera **chlor**, używa **plastyfikatorów** (m.in. ftalanów) i jest **problematyczny w recyklingu**. Coraz więcej regulacji i polityk korporacyjnych ogranicza jego użycie:\n\n- **RoHS** (Restriction of Hazardous Substances) — dyrektywa UE 2011/65/UE ograniczająca substancje niebezpieczne w sprzęcie elektrycznym\n- **REACH** (Registration, Evaluation, Authorization and Restriction of Chemicals) — rozporządzenie UE dla bezpieczeństwa chemicznego\n- **Polityki ESG** w korporacjach — eliminacja PVC z opakowań i materiałów dystrybucyjnych\n- **Branże eco-friendly** — wymagają opakowań i etykiet bez chloru\n\nPolyO 3100T daje **zbliżoną funkcjonalność do PVC** (trwałość, elastyczność, all-weather, dobra adhezja) bez wad chemicznych. **BPA-free i latex-free** dodatkowo wzmacnia profil bezpieczeństwa materiału.',
      },
      {
        heading: 'Z jaką taśmą drukować?',
        content:
          'PolyO 3100T obsługuje **3 modele taśm Zebra** — od ekonomicznej wosk-żywicy po taśmy żywiczne premium:\n\n- **Zebra 3200 Wax-Resin** — najczęściej wybierana taśma dla PolyO. Wystarcza do typowych aplikacji (kosmetyki, opakowania, etykiety produktowe). Najtańsza zgodna z PolyO.\n- **Zebra 4800** — taśma żywiczna standardowa. Wybierz gdy etykieta będzie narażona na kontakt z chemikaliami lub rozpuszczalnikami przy transporcie i magazynowaniu.\n- **Zebra 5095** — taśma żywiczna klasy premium. Dla etykiet GHS na beczkach chemicznych transportowanych morzem (pełny zestaw BS5609 wymaga certyfikowanej taśmy).\n\n**Uwaga:** taśma woskowa (2300, 2100) **nie zwiąże się** z poliolefiną — wosk nie ma odpowiednich właściwości chemicznych do tej grupy tworzyw.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyO 3100T to **specjalistyczna folia do trudnych aplikacji** — Zebra w karcie katalogowej wskazuje sześć konkretnych zastosowań:\n\n- **Etykietowanie beczek z chemikaliami** — atest BS5609 dla transportu morskiego, etykiety GHS, oznaczenia ostrzegawcze na pojemnikach z substancjami niebezpiecznymi\n- **Etykiety małych elementów** (small parts labelling) — komponenty, podzespoły, drobne elementy w przemyśle\n- **Opakowania zbiorcze i transportowe** — kartony, palety, pojemniki, gdzie wymagana jest trwałość w transporcie międzynarodowym\n- **Kosmetyki i środki higieny osobistej** — opakowania szamponów, balsamów, mydeł w płynie, dezodorantów\n- **Etykiety nakładane bezpośrednio po formowaniu z wydmuchu** (post blow-mould labelling) — gorące butelki HDPE/PP wprost z linii produkcyjnej (klej kauczukowy radzi sobie z gorącymi i lekko zaolejonymi powierzchniami lepiej niż akryl)\n- **Linie gorącego napełniania** (hot-fill) dla żywności i napojów — sosy, ketchupy, soki, miody rozlewane w 80-95°C\n\nKlej kauczukowy + materiał poliolefinowy + atest BS5609 — to kombinacja przeznaczona dla wymagających aplikacji chemicznych i spożywczych, gdzie typowe akrylowe folie zawodzą.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał lica', value: 'Satynowa biała folia poliolefinowa (75 μm)' },
      { label: 'Klej', value: 'Trwały kauczukowy high-tack, all-weather (20 μm)' },
      { label: 'Podkład', value: 'Papier silikonowany glassine 71 g/m² (63 μm)' },
      { label: 'Łączna grubość', value: '158 μm (±10%)' },
      { label: 'Wykończenie powierzchni', value: 'Matowe satynowe (umożliwia druk w trybie fanfold)' },
      { label: 'Min. temperatura aplikacji', value: '5°C' },
      { label: 'Zakres temperatury pracy', value: '-20°C do +80°C' },
      { label: 'Trwałość w pomieszczeniach', value: '1 rok i więcej' },
      { label: 'Trwałość na zewnątrz', value: 'Do 1 roku' },
      { label: 'Trwałość magazynowa rolki', value: '1 rok przy 20-25°C, wilgotność 40-50%' },
      { label: 'Zalecane taśmy', value: 'Zebra 3200 (wosk-żywica), 4800 lub 5095 (żywiczne)' },
      { label: 'Atest BS5609', value: 'Tak — transport morski substancji niebezpiecznych (etykiety GHS, kod IMDG)' },
      { label: 'Odporność chemiczna', value: 'Łagodna — do mocnych chemikaliów wybierz Z-Ultimate lub 8000T Chemresist' },
      { label: 'Alternatywa dla PVC', value: 'Tak — bez chloru, zgodna z RoHS i REACH' },
      { label: 'Bezpieczeństwo materiału', value: 'Bez bisfenolu A (BPA-free), bez lateksu' },
      { label: 'Odporność na rozdarcie i wodę', value: 'Dobra' },
      { label: 'Kompatybilne drukarki', value: 'Zebra P4T (mobilna), biurkowe, średnie, przemysłowe' },
      { label: 'Numer próbki', value: 'SAMPLE5151 (uniwersalny dla wszystkich drukarek)' },
      { label: 'Rdzeń (gilza)', value: '76 mm' },
      { label: 'Liczba wariantów', value: '3' },
      { label: 'Klasa cenowa', value: 'Średnia foliowe specjalne' },
    ],
    applications: [
      'Etykietowanie beczek i kanistrów z chemikaliami — atest BS5609 dla transportu morskiego',
      'Etykiety GHS (Globalnie Zharmonizowany System) na pojemnikach z substancjami niebezpiecznymi',
      'Eksport substancji niebezpiecznych drogą morską — zgodność z kodem IMDG',
      'Etykiety małych elementów (small parts) — komponenty, podzespoły, drobne elementy w przemyśle',
      'Opakowania zbiorcze i transportowe — kartony, palety, pojemniki w transporcie międzynarodowym',
      'Opakowania kosmetyków — szampony, balsamy, mydła w płynie, dezodoranty',
      'Etykiety nakładane bezpośrednio po formowaniu z wydmuchu (gorące butelki HDPE/PP)',
      'Etykietowanie w liniach gorącego napełniania (hot-fill) — sosy, ketchupy, soki, miody w 80-95°C',
      'Aplikacje wymagające zastąpienia PVC (RoHS, REACH, polityki ESG)',
      'Etykiety na powierzchniach niskoenergetycznych — polietylen, polipropylen, PVC',
      'Etykiety na zaolejonych powierzchniach przemysłowych — beczki, kontenery techniczne',
    ],
    notRecommendedFor: [
      'Druk z taśmą woskową — wymaga taśmy wosk-żywica (3200) lub żywicznej (4800/5095)',
      'Maksymalna odporność chemiczna na agresywne rozpuszczalniki — wybierz Z-Ultimate 3000T lub 8000T Chemresist',
      'Trwałość outdoor powyżej 1 roku — wybierz Z-Ultimate 3000T (1 rok+ outdoor)',
      'Budżetowa wysyłka i magazyn — wybierz papier Z-Perform 1000T',
      'Aplikacje poniżej 5°C — minimalna temperatura aplikacji to 5°C',
      'Pełen zestaw BS5609 Część 3 — wymaga certyfikowanej taśmy (skontaktuj się z TAKMA po dobór)',
      'Druk termiczny bezpośredni (bez taśmy) — to materiał termotransferowy',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: ['P4T'],
    },
    certifications: [
      { name: 'BS5609 Część 2', description: 'Brytyjski standard dla materiałów stosowanych w oznakowaniu kontenerów z substancjami niebezpiecznymi przewożonymi drogą morską. Wymagany przez kod IMDG (International Maritime Dangerous Goods) i etykiety GHS. Część 2 obejmuje test materiału (folia + klej) — odporność na 3 miesiące w słonej wodzie, słońce, abrazję.' },
      { name: 'Alternatywa dla PVC', description: 'Materiał poliolefinowy bez chloru — zgodny z dyrektywą RoHS i rozporządzeniem REACH. Wybór dla firm eliminujących PVC z opakowań i etykiet ze względów regulacyjnych lub polityk ESG.' },
      { name: 'Bez bisfenolu A (BPA-free)', description: 'Bez bisfenolu A — bezpieczne dla zastosowań medycznych i opakowań produktów konsumenckich.' },
      { name: 'Bez lateksu (latex-free)', description: 'Bez lateksu — kluczowe w służbie zdrowia, na salach operacyjnych i dla osób uczulonych na lateks.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz PolyO 3100T gdy potrzebujesz **atestu BS5609** (transport morski chemikaliów), **kleju kauczukowego high-tack** (niskoenergetyczne tworzywa, zaolejone powierzchnie) lub musisz wyeliminować PVC. PolyPro 3000T Gloss do standardowych zastosowań foliowych ze sztywnym opakowaniem — taniej.' },
      { seriesSlug: 'polye-3100t-gloss', whenToChooseThis: 'PolyO 3100T dla beczek chemicznych, transportu morskiego (BS5609), trudnych powierzchni. PolyE 3100T Gloss dla butelek HDPE z kosmetykami i opakowań z atestem żywnościowym BfR XIV (PolyO atestu żywnościowego NIE ma).' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'PolyO 3100T dla **kleju kauczukowego** (high-tack do trudnych powierzchni) i **atestu BS5609**. Z-Ultimate 3000T White dla **maksymalnej odporności chemicznej** (Harsh), trwałości 1 rok+ outdoor, certyfikatu UL i zakresu temperatur -40°C do +150°C.' },
    ],
    faq: [
      { question: 'Co to jest atest BS5609 i kiedy jest wymagany?', answer: '**BS5609** to brytyjski standard dla materiałów w oznakowaniu kontenerów z substancjami niebezpiecznymi transportowanymi drogą morską. Wymagany przez kod **IMDG** (International Maritime Dangerous Goods) i etykiety GHS (Globalnie Zharmonizowany System) na beczkach, kanistrach i opakowaniach zbiorczych z chemikaliami. Składa się z trzech części: BS5609-1 (wymagania ogólne), **BS5609-2 (test materiału — folia + klej, odporność na słoną wodę, słońce, abrazję)** oraz BS5609-3 (test druku z konkretną taśmą). PolyO 3100T spełnia BS5609-2.' },
      { question: 'Czym różni się klej kauczukowy od akrylowego?', answer: 'Klej kauczukowy (rubber) ma **inną chemię** niż typowy akrylowy stosowany w Z-Perform, Z-Select, Z-Ultimate. Daje **silniejszą początkową przyczepność (high tack)** — etykieta trzyma od razu, bez okresu 24-godzinnej aklimatyzacji. Lepiej trzyma na **niskoenergetycznych tworzywach** (polietylen, polipropylen, PVC), **zaolejonych powierzchniach** (beczki chemiczne wprost z linii) oraz **w zmiennych warunkach atmosferycznych** (all-weather). Słabszy od akrylowego w środowiskach z silnymi rozpuszczalnikami i wysokimi temperaturami (powyżej 80°C).' },
      { question: 'Czym PolyO różni się od PolyE i PolyPro?', answer: 'Wszystkie trzy to folie z grupy poliolefin, ale różnią się materiałem lica i klejem: **PolyO 3100T** — satynowa biała poliolefina z **klejem kauczukowym high-tack** + atest BS5609 (transport morski chemikaliów), bez atestu żywnościowego. **PolyE 3100T Gloss** — folia polietylenowa z połyskiem + klej akrylowy + atest BfR XIV dla **żywności tłustej**. **PolyPro 3000T** — folia polipropylenowa, sztywniejsza, do płaskich opakowań, najtańsza.' },
      { question: 'Czy PolyO 3100T ma atest żywnościowy?', answer: '**Nie** — karta katalogowa Zebry NIE wymienia żadnych atestów żywnościowych (BfR, EC 1935, FDA) dla PolyO 3100T. Do **kontaktu z żywnością wybierz PolyE 3100T Gloss** (BfR XIV dla suchych, wilgotnych i tłustych) lub papier Z-Perform 1000T (BfR XIV dla suchych i wilgotnych nietłustych).' },
      { question: 'Jakie taśmy do PolyO 3100T?', answer: 'PolyO 3100T obsługuje 3 taśmy Zebra: **3200** (wosk-żywica, najczęściej wybierana dla typowych aplikacji), **4800** (żywiczna standardowa, dla większej odporności na chemikalia) lub **5095** (żywiczna klasy premium, dla pełnego zestawu BS5609 Część 3). Taśmy woskowe NIE zwiążą się z poliolefiną.' },
      { question: 'Jakie są wymiary i grubość materiału?', answer: 'Lico: satynowa biała folia poliolefinowa **75 μm**. Klej kauczukowy high-tack **20 μm**. Podkład silikonowany 71 g/m² **63 μm**. **Łączna grubość 158 μm (±10%)** — najgrubsza wśród folii poliolefinowych Zebra (PolyE ma 155 μm), co daje większą wytrzymałość mechaniczną.' },
      { question: 'W jakich temperaturach mogę aplikować?', answer: 'Minimalna temperatura aplikacji: **5°C** (klej kauczukowy potrzebuje cieplej niż akrylowy w Z-Perform z 0°C). Zakres temperatury pracy po naklejeniu i 24-godzinnej aklimatyzacji: **-20°C do +80°C** — wystarczająco do typowych aplikacji w magazynie, transporcie oraz w liniach hot-fill (do 95°C). Klej kauczukowy lepiej znosi wahania pogodowe (all-weather).' },
      { question: 'Co to są zastosowania post blow-mould?', answer: '**Post blow-mould labelling** to etykietowanie butelek bezpośrednio po formowaniu z wydmuchu — gorące butelki HDPE lub polipropylenowe wprost z linii produkcyjnej, zanim ostygną. To trudne warunki dla typowego akrylowego kleju (lekko zaolejona powierzchnia, gorąca temperatura), ale klej kauczukowy w PolyO świetnie sobie radzi. Stosowane w produkcji opakowań kosmetycznych i chemii gospodarczej.' },
      { question: 'Co to jest hot-fill labelling?', answer: '**Hot-fill** to linia produkcyjna z **gorącym napełnianiem** opakowań — produkt (sos, ketchup, sok, miód) jest rozlewany w temperaturze 80-95°C, co naturalnie pasteryzuje wnętrze opakowania. Klej akrylowy może wówczas migrować lub odklejać etykietę, ale klej kauczukowy w PolyO 3100T jest zaprojektowany specjalnie do tych warunków — utrzymuje etykietę w wysokiej temperaturze napełniania.' },
      { question: 'Czy mogę zamówić próbki?', answer: 'Tak — Zebra udostępnia uniwersalną próbną rolkę **SAMPLE5151** (jeden numer dla wszystkich drukarek — biurkowych, średnich, przemysłowych, P4T). Skontaktuj się z TAKMA — pomożemy zamówić próbkę i dobrać optymalną kombinację taśma (3200/4800/5095) + etykieta + drukarka do Twojego zastosowania, ze szczególnym uwzględnieniem certyfikowanej taśmy dla pełnego zestawu BS5609 Część 3.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin', 'Zebra 4800 Resin'],
    },
  },

  /* ════════════════ SPECJALNE (5) ════════════════ */

  /* ──────────────── 12. 8100T CRYOCOOL — kriogeniczna -196°C ──────────────── */
  {
    slug: '8100t-cryocool',
    productId: 'zebra-8100t-cryocool',
    subcategory: 'specjalne',
    badge: '8100T Cryocool',
    title: '8100T Cryocool',
    tagline: 'Etykiety kriogeniczne do ciekłego azotu (-196°C) — dla biobanków i laboratoriów biotech.',
    positioning: 'niche-krio',
    material: 'poliester-kriogeniczny',
    glue: 'kriogeniczny',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: true,
    cryogenic: true,
    ulCertified: false,
    priceFrom: 885.91,
    accent: '#D97706',
    seoTitle: 'Zebra 8100T Cryocool | etykiety kriogeniczne -196°C do ciekłego azotu',
    seoDescription: 'Zebra 8100T Cryocool — etykiety kriogeniczne do przechowywania w ciekłym azocie (-196°C do +120°C). Wielokrotne cykle mróz-rozmróz. Dla biobanków, laboratoriów biotech, banków krwi. 6 wariantów od 886 zł.',
    h1: 'Etykiety termotransferowe Zebra 8100T Cryocool',
    heroIntro: 'Cryocool 8100T to specjalistyczne etykiety **kriogeniczne** — wytrzymują przechowywanie w ciekłym azocie (**-196°C**) i wielokrotne cykle mróz-rozmróz bez odklejania i utraty czytelności. Zaprojektowane dla biobanków, laboratoriów biotechnologicznych i banków krwi, gdzie próbki są przechowywane w skrajnie niskich temperaturach. Wymagają taśmy żywicznej (resin) Zebra 5095.',
    keyHighlights: [
      'Zakres pracy -196°C do +120°C — ciekły azot i autoklaw',
      'Wytrzymują wielokrotne cykle mróz-rozmróz',
      'Klej kriogeniczny — trzyma na zmrożonych powierzchniach',
      'Poliester z odpornością chemiczną — dla laboratoriów',
      'Druk z taśmą żywiczną (resin) Zebra 5095',
      '6 wariantów, gilza 25 mm',
    ],
    sections: [
      {
        heading: 'Czym jest etykieta kriogeniczna?',
        content:
          'Standardowe etykiety odpadają w niskich temperaturach — klej traci elastyczność i pęka, a materiał kruszeje. Etykiety kriogeniczne 8100T Cryocool są zaprojektowane do przetrwania w **ciekłym azocie (-196°C)** i w autoklawie (+120°C) — z zachowaniem przyczepności i czytelności nadruku przez wiele cykli zamrażania i rozmrażania.\n\nTo materiał krytyczny w nauce i medycynie: próbki biologiczne, komórki, krew i tkanki przechowywane w biobankach muszą być jednoznacznie oznaczone przez cały okres przechowywania — błędna identyfikacja próbki to katastrofa. Cryocool gwarantuje, że etykieta i kod kreskowy przetrwają.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Cryocool 8100T to standard w **krioprzechowywaniu**:\n\n- **Biobanki** — oznaczenia próbek w ciekłym azocie\n- **Laboratoria biotechnologiczne** — fiolki, probówki, kriopudełka\n- **Banki krwi i tkanek** — identyfikacja w głębokim mrożeniu\n- **Badania kliniczne** — próbki przechowywane długoterminowo\n- **Farmacja i R&D** — materiały biologiczne w niskich temperaturach\n\nTo produkt niszowy, kupowany przez wyspecjalizowane placówki — konkurencja rzadko ma go w ofercie.',
      },
      {
        heading: 'Jak prawidłowo aplikować?',
        content:
          'Kluczowe dla skuteczności: etykietę nakłada się na **suchą powierzchnię w temperaturze pokojowej** PRZED zamrożeniem, z odpowiednim dwell time (czasem na związanie kleju). Naklejanie na już zamrożoną fiolkę daje słabszy efekt. Po prawidłowej aplikacji etykieta wytrzyma cykle krioprzechowywania.\n\nDruk wyłącznie taśmą żywiczną (resin) Zebra 5095 — tylko resin daje nadruk odporny na warunki kriogeniczne i chemikalia laboratoryjne.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (taśma żywiczna Zebra 5095)' },
      { label: 'Materiał', value: 'Poliester kriogeniczny' },
      { label: 'Klej', value: 'Kriogeniczny akrylowy' },
      { label: 'Zakres temperatur pracy', value: '−196°C do +120°C' },
      { label: 'Min. temperatura aplikacji', value: '−40°C' },
      { label: 'Cykle mróz-rozmróz', value: 'Wielokrotne' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Liczba wariantów', value: '6' },
      { label: 'Grupa cenowa', value: 'Specjalistyczna' },
    ],
    applications: [
      'Biobanki — oznaczenia próbek w ciekłym azocie',
      'Laboratoria biotech — fiolki, probówki, kriopudełka',
      'Banki krwi i tkanek — głębokie mrożenie',
      'Badania kliniczne — próbki długoterminowe',
      'Farmacja i R&D — materiały biologiczne',
    ],
    notRecommendedFor: [
      'Standardowe oznaczenia — to drogi materiał niszowy',
      'Worki z krwią — wybierz dedykowane 8000T Blood Bag',
      'Aplikacja na już zamrożone powierzchnie',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: '8000t-all-temp', whenToChooseThis: 'Wybierz Cryocool do skrajnie niskich temperatur (-196°C, ciekły azot, biobanki). 8000T All-Temp wystarcza do chłodni/mrożonek (-40°C) i jest tańszy.' },
      { seriesSlug: '8000t-blood-bag-deep-freeze', whenToChooseThis: 'Cryocool do fiolek i próbek laboratoryjnych. Blood Bag do worków z krwią (dedykowany klej do polimerów i zgodność ISBT 128).' },
    ],
    faq: [
      { question: 'Czy etykieta naprawdę wytrzyma ciekły azot?', answer: 'Tak — 8100T Cryocool jest zaprojektowany do pracy w -196°C (ciekły azot) i wielu cykli mróz-rozmróz. Warunek: prawidłowa aplikacja na suchą powierzchnię w temperaturze pokojowej przed zamrożeniem.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Wyłącznie żywiczną (resin) Zebra 5095 — tylko ona daje nadruk odporny na warunki kriogeniczne i chemikalia laboratoryjne.' },
      { question: 'Czy mogę nakleić na już zamrożoną fiolkę?', answer: 'Nie zaleca się — klej najlepiej wiąże w temperaturze pokojowej. Etykietę nakłada się przed zamrożeniem, z czasem na związanie (dwell time).' },
      { question: 'Czym różni się od 8000T All-Temp?', answer: 'Cryocool wytrzymuje -196°C (ciekły azot, biobanki). All-Temp jest do chłodni i mrożonek (-40°C) i jest tańszy. Wybór zależy od skrajności temperatury.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin', 'Zebra 5100 Premium Resin'],
    },
  },

  /* ──────────────── 13. 8000T ALL-TEMP — niskie temperatury (papier) ──────────────── */
  {
    slug: '8000t-all-temp',
    productId: 'zebra-8000t-all-temp',
    subcategory: 'specjalne',
    badge: '8000T All-Temp',
    title: '8000T All-Temp',
    tagline: 'Papier do niskich temperatur — aplikacja od -10°C, praca do -40°C. Chłodnie i mrożonki.',
    positioning: 'niche-krio',
    material: 'papier-semi-glossy',
    glue: 'all-temperature',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 919.98,
    accent: '#D97706',
    seoTitle: 'Zebra 8000T All-Temp | etykiety papierowe do niskich temperatur -40°C',
    seoDescription: 'Zebra 8000T All-Temp — papierowe etykiety termotransferowe do niskich temperatur. Aplikacja już od -10°C, praca do -40°C. Do chłodni, mrożonek i logistyki mrożonej. 8 wariantów od 920 zł.',
    h1: 'Etykiety termotransferowe Zebra 8000T All-Temp',
    heroIntro: '8000T All-Temp to papierowe etykiety termotransferowe z **klejem all-temperature** — można je naklejać już w temperaturze **-10°C** (np. na zmrożone opakowania), a po aplikacji pracują do **-40°C**. Standard w chłodniach, mrożonkach i logistyce mrożonej, gdzie zwykły klej akrylowy nie chwyta.',
    keyHighlights: [
      'Aplikacja już od -10°C — naklejasz na zmrożone opakowania',
      'Zakres pracy -40°C do +50°C',
      'Klej all-temperature — chwyta w niskich temperaturach',
      'Papier semi-glossy — tańszy niż folia kriogeniczna',
      '8 wariantów, gilza 76 mm',
    ],
    sections: [
      {
        heading: 'Czym jest klej all-temperature?',
        content:
          'Zwykły klej akrylowy wymaga aplikacji w temperaturze powyżej 0°C — naklejony na zimną lub zmrożoną powierzchnię nie chwyta i odpada. **Klej all-temperature** w 8000T jest zaprojektowany do aplikacji już od -10°C: chwyta na chłodnych i zmrożonych opakowaniach, a po naklejeniu utrzymuje przyczepność do -40°C.\n\nTo rozwiązuje typowy problem logistyki mrożonej: etykietowanie produktów, które już są w chłodni lub mrożarce, bez konieczności ich ogrzewania.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          '8000T All-Temp to standard w **łańcuchu chłodniczym**:\n\n- **Chłodnie i mroźnie** — etykietowanie produktów w niskiej temperaturze\n- **Logistyka mrożona** — oznaczenia opakowań w transporcie chłodniczym\n- **Przemysł spożywczy mrożony** — etykiety na opakowaniach zbiorczych\n- **Magazyny chłodnicze** — lokalizacje i picking w niskich temperaturach\n\nW odróżnieniu od kriogenicznego Cryocool (folia, -196°C) to papier — tańszy, do typowego mrożenia, nie do ciekłego azotu.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy)' },
      { label: 'Materiał', value: 'Papier semi-glossy' },
      { label: 'Klej', value: 'All-temperature akrylowy' },
      { label: 'Zakres temperatur pracy', value: '−40°C do +50°C' },
      { label: 'Min. temperatura aplikacji', value: '−10°C' },
      { label: 'Zalecana taśma', value: 'Wosk-żywica Zebra 3200' },
      { label: 'Gilza (rdzeń)', value: '76 mm' },
      { label: 'Liczba wariantów', value: '8' },
      { label: 'Grupa cenowa', value: 'Średnia specjalistyczna' },
    ],
    applications: [
      'Chłodnie i mroźnie — etykietowanie w niskiej temperaturze',
      'Logistyka mrożona — transport chłodniczy',
      'Przemysł spożywczy mrożony — opakowania zbiorcze',
      'Magazyny chłodnicze — lokalizacje, picking',
    ],
    notRecommendedFor: [
      'Ciekły azot (-196°C) — wybierz folię 8100T Cryocool',
      'Standardowa wysyłka w temperaturze pokojowej — wybierz Z-Perform 1000T',
      'Oznaczenia trwałe na produktach — wybierz folię',
      'Druk bez taśmy (DT)',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: '8100t-cryocool', whenToChooseThis: 'Wybierz 8000T All-Temp do chłodni i mrożonek (-40°C) — tańszy papier. Cryocool tylko do ciekłego azotu (-196°C) i biobanków.' },
      { seriesSlug: 'z-perform-1000t', whenToChooseThis: '8000T All-Temp gdy aplikujesz w niskich temperaturach (chłodnia). Z-Perform 1000T do typowej wysyłki w temperaturze pokojowej — taniej.' },
    ],
    faq: [
      { question: 'Czy mogę nakleić na zmrożone opakowanie?', answer: 'Tak — klej all-temperature chwyta już od -10°C, więc możesz etykietować produkty będące w chłodni czy mrożarce bez ich ogrzewania. To główna zaleta tej serii.' },
      { question: 'Czym różni się od Cryocool?', answer: '8000T All-Temp to papier do chłodni/mrożonek (-40°C), tańszy. Cryocool to folia do ciekłego azotu (-196°C, biobanki). Do typowego mrożenia żywności wystarcza All-Temp.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Pierwszy wybór to Zebra 2100 European Wax — premium woskowa zoptymalizowana pod druk w niskich temperaturach (chłodnia, mróz). Alternatywa: Zebra 3400 Wax/Resin, gdy mróz dodatkowo łączy się z tarciem lub wilgocią (transport mroźniczy z przeładunkami).' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 2100 European Wax', 'Zebra 3400 Wax/Resin'],
    },
  },

  /* ──────────────── 14. 8000T BLOOD BAG DEEP FREEZE — worki z krwią ──────────────── */
  {
    slug: '8000t-blood-bag-deep-freeze',
    productId: 'zebra-8000t-blood-bag-deep-freeze',
    subcategory: 'specjalne',
    badge: '8000T Blood Bag Deep Freeze',
    title: '8000T Blood Bag Deep Freeze',
    tagline: 'Dedykowane etykiety na worki z krwią w głębokim mrożeniu — zgodność z ISBT 128.',
    positioning: 'niche-krio',
    material: 'folia-blood-bag',
    glue: 'blood-bag',
    topcoat: true,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: true,
    cryogenic: true,
    ulCertified: false,
    priceFrom: 1259.68,
    accent: '#D97706',
    seoTitle: 'Zebra 8000T Blood Bag Deep Freeze | etykiety na worki z krwią ISBT 128',
    seoDescription: 'Zebra 8000T Blood Bag Deep Freeze — dedykowane etykiety do oznaczania worków z krwią w głębokim mrożeniu. Klej do worków polimerowych, zgodność z ISBT 128. Dla banków krwi i krwiodawstwa. Od 1260 zł.',
    h1: 'Etykiety termotransferowe Zebra 8000T Blood Bag Deep Freeze',
    heroIntro: '8000T Blood Bag Deep Freeze to **dedykowane etykiety do worków z krwią** przechowywanych w głębokim mrożeniu. Specjalny klej trzyma na elastycznych, zimnych workach polimerowych, a materiał jest zgodny ze standardem kodowania krwi **ISBT 128**. Dla banków krwi i szpitalnych zakładów krwiodawstwa.',
    keyHighlights: [
      'Dedykowane do worków z krwią w głębokim mrożeniu',
      'Klej do elastycznych worków polimerowych',
      'Zgodność z ISBT 128 (międzynarodowy standard kodowania krwi)',
      'Druk z taśmą żywiczną (resin)',
      'Gilza 25 mm',
    ],
    sections: [
      {
        heading: 'Dlaczego worki z krwią wymagają specjalnej etykiety?',
        content:
          'Worki z krwią to wyzwanie dla etykiet: są **elastyczne, gładkie (polimer), wilgotne od kondensacji i przechowywane w głębokim mrożeniu**. Standardowa etykieta odpada lub marszczy się na takiej powierzchni. 8000T Blood Bag Deep Freeze ma klej zaprojektowany specjalnie do worków polimerowych w niskich temperaturach.\n\nDodatkowo identyfikacja krwi podlega rygorystycznym standardom — etykieta wspiera kodowanie **ISBT 128**, międzynarodowy standard identyfikacji produktów krwiopochodnych, kluczowy dla bezpieczeństwa transfuzji.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          '8000T Blood Bag to wąsko wyspecjalizowany produkt dla **krwiodawstwa i transfuzjologii**:\n\n- **Banki krwi** — oznaczanie i archiwizacja worków\n- **Szpitalne zakłady krwiodawstwa** — identyfikacja jednostek krwi\n- **Stacje krwiodawstwa** — etykietowanie zgodne z ISBT 128\n- **Laboratoria transfuzjologiczne**\n\nTo produkt kupowany przez konkretne placówki medyczne — niski wolumen, ale krytyczne zastosowanie.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Folia kriogeniczna dedykowana do worków z krwią' },
      { label: 'Klej', value: 'Specjalistyczny do worków polimerowych' },
      { label: 'Zgodność z normami', value: 'ISBT 128 (kody kreskowe krwi)' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Liczba wariantów', value: '1' },
      { label: 'Grupa cenowa', value: 'Specjalistyczna' },
    ],
    applications: [
      'Banki krwi — oznaczanie i archiwizacja worków',
      'Szpitalne zakłady krwiodawstwa',
      'Stacje krwiodawstwa — zgodność ISBT 128',
      'Laboratoria transfuzjologiczne',
    ],
    notRecommendedFor: [
      'Inne próbki laboratoryjne — wybierz 8100T Cryocool',
      'Standardowe oznaczenia mrożone — wybierz 8000T All-Temp',
      'Zastosowania poza krwiodawstwem',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [
      { name: 'ISBT 128', description: 'Międzynarodowy standard identyfikacji i kodowania produktów krwiopochodnych — kluczowy dla bezpieczeństwa transfuzji.' },
    ],
    comparedWith: [
      { seriesSlug: '8100t-cryocool', whenToChooseThis: 'Wybierz Blood Bag do worków z krwią (dedykowany klej, ISBT 128). Cryocool do fiolek i próbek laboratoryjnych w ciekłym azocie.' },
    ],
    faq: [
      { question: 'Co to jest ISBT 128?', answer: 'ISBT 128 to międzynarodowy standard identyfikacji produktów krwiopochodnych (krew, tkanki, komórki). Zapewnia jednoznaczne, bezpieczne kodowanie kluczowe dla transfuzji. Etykieta 8000T Blood Bag wspiera ten standard.' },
      { question: 'Dlaczego nie zwykła etykieta mrożona?', answer: 'Worki z krwią są elastyczne, gładkie i wilgotne — standardowy klej odpada. Blood Bag ma klej dedykowany do worków polimerowych w głębokim mrożeniu.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Taśmę żywiczną (resin) Zebra 5095 — odporną na warunki mrożenia i wilgoć.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 5095 Resin'],
    },
  },

  /* ──────────────── 15. 8000T VOID MATTE — zabezpieczająca VOID ──────────────── */
  {
    slug: '8000t-void-matte',
    productId: 'zebra-8000t-void-matte',
    subcategory: 'specjalne',
    badge: '8000T Void Matte',
    title: '8000T Void Matte',
    tagline: 'Etykieta zabezpieczająca — przy próbie zdjęcia ujawnia napis „VOID". Plomby dokumentów.',
    positioning: 'niche-zabezpieczenia',
    material: 'folia-void',
    glue: 'tamper-evident',
    topcoat: false,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 1144.98,
    accent: '#D97706',
    seoTitle: 'Zebra 8000T Void Matte | etykiety zabezpieczające VOID, plomby',
    seoDescription: 'Zebra 8000T Void Matte — foliowe etykiety zabezpieczające. Przy próbie zdjęcia ujawniają napis „VOID", sygnalizując ingerencję. Plomby dokumentów, pieczęci gwarancyjnych. Od 1145 zł.',
    h1: 'Etykiety termotransferowe Zebra 8000T Void Matte',
    heroIntro: '8000T Void Matte to foliowe etykiety **zabezpieczające (tamper-evident)** — przy próbie odklejenia na powierzchni i/lub na etykiecie ujawnia się napis **„VOID"**, trwale sygnalizując, że ktoś próbował naruszyć plombę. Stosowane do pieczęci gwarancyjnych, plomb dokumentów i oznaczeń, których nie wolno bezśladowo zdjąć.',
    heroImage: '/images/etykiety-termotransferowe-zebra-8000t-void-matte_hero.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Efekt VOID — napis ujawnia się przy próbie zdjęcia',
      'Tamper-evident — widoczny dowód naruszenia plomby',
      'Matowa folia zabezpieczająca',
      'Do pieczęci gwarancyjnych i plomb dokumentów',
      'Druk z taśmą żywiczną (resin)',
    ],
    sections: [
      {
        heading: 'Jak działa efekt VOID?',
        content:
          'Etykieta tamper-evident VOID ma specjalną konstrukcję warstwową: przy próbie odklejenia warstwa wierzchnia rozdziela się od kleju w taki sposób, że na powierzchni (lub na samej etykiecie) pojawia się trwały, widoczny napis **„VOID"** lub wzór. Tego efektu nie da się cofnąć — raz naruszona plomba na zawsze pokazuje ślad ingerencji.\n\nTo prosty, ale skuteczny mechanizm zabezpieczenia: nie blokuje fizycznie dostępu, ale daje **jednoznaczny dowód, że ktoś próbował otworzyć/zdjąć** plombę. Kluczowe tam, gdzie liczy się integralność i audytowalność.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          '8000T Void Matte stosuje się jako **plomby i pieczęcie zabezpieczające**:\n\n- **Pieczęci gwarancyjne** — sprzęt elektroniczny, urządzenia (naruszenie = utrata gwarancji)\n- **Plomby dokumentów** wewnętrznych i kopert\n- **Zabezpieczenie opakowań** przed otwarciem\n- **Kontrola dostępu** do szaf, pojemników, sprzętu\n- **Oznaczenia audytowe** wymagające dowodu nienaruszalności',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Folia matowa zabezpieczająca' },
      { label: 'Klej', value: 'Tamper-evident (napis VOID po zdjęciu)' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Poziom zabezpieczenia', value: 'Średni — dowód naruszenia' },
      { label: 'Liczba wariantów', value: '1' },
      { label: 'Grupa cenowa', value: 'Specjalistyczna' },
    ],
    applications: [
      'Pieczęci gwarancyjne sprzętu elektronicznego',
      'Plomby dokumentów i kopert',
      'Zabezpieczenie opakowań przed otwarciem',
      'Kontrola dostępu do szaf i pojemników',
      'Oznaczenia audytowe',
    ],
    notRecommendedFor: [
      'Najwyższy poziom zabezpieczenia — wybierz destruktywne 8100T Z-Destruct PE',
      'Standardowe etykiety — to materiał zabezpieczający',
      'Powierzchnie, z których etykieta ma schodzić czysto',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: '8100t-z-destruct-pe', whenToChooseThis: 'Wybierz Void Matte gdy wystarczy widoczny dowód naruszenia (napis VOID). Z-Destruct PE gdy etykieta ma się fizycznie rozpaść przy próbie zdjęcia (najwyższy poziom).' },
    ],
    faq: [
      { question: 'Czy napis VOID da się ukryć?', answer: 'Nie — efekt jest trwały i nieodwracalny. Raz naruszona plomba na zawsze pokazuje napis VOID, co stanowi dowód próby ingerencji.' },
      { question: 'Czym różni się od etykiet destruktywnych?', answer: 'Void Matte daje widoczny dowód naruszenia (napis VOID), ale pozostaje w jednym kawałku. Z-Destruct PE rozpada się na drobne fragmenty — wyższy poziom zabezpieczenia, gdy etykieta nie może być zdjęta w całości.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Pierwszy wybór to Zebra 4800 Resin — standardowa żywiczna do plomb VOID, z certyfikatem UL. Alternatywa: 5100 Premium Resin gdy wymagana wyższa jakość kodu kreskowego na plombach premium.' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 4800 Resin', 'Zebra 5100 Premium Resin'],
    },
  },

  /* ──────────────── 16. 8100T Z-DESTRUCT PE — destruktywna (najwyższy poziom) ──────────────── */
  {
    slug: '8100t-z-destruct-pe',
    productId: 'zebra-8100t-z-destruct-pe',
    subcategory: 'specjalne',
    badge: '8100T Z-Destruct PE',
    title: '8100T Z-Destruct PE',
    tagline: 'Etykieta destruktywna — przy próbie zdjęcia rozpada się na kawałki. Najwyższy poziom zabezpieczenia.',
    positioning: 'niche-zabezpieczenia',
    material: 'folia-destruktywna',
    glue: 'destruktywny',
    topcoat: false,
    removable: false,
    foodSafe: false,
    outdoorResistant: false,
    chemicalResistant: false,
    cryogenic: false,
    ulCertified: false,
    priceFrom: 6996.64,
    accent: '#D97706',
    seoTitle: 'Zebra 8100T Z-Destruct PE | etykiety destruktywne, plomby najwyższego poziomu',
    seoDescription: 'Zebra 8100T Z-Destruct PE — destruktywne etykiety polietylenowe. Przy próbie zdjęcia rozpadają się na małe kawałki, uniemożliwiając ponowne użycie. Najwyższy poziom zabezpieczenia — plomby urzędowe, służby, lotnictwo. Od 6997 zł.',
    h1: 'Etykiety termotransferowe Zebra 8100T Z-Destruct PE',
    heroIntro: '8100T Z-Destruct PE to **destruktywne** etykiety polietylenowe — najwyższy poziom zabezpieczenia w portfolio Zebra. Przy próbie odklejenia etykieta **rozpada się na drobne kawałki**, których nie da się zebrać ani ponownie nakleić. Stosowane jako plomby urzędowe, oznaczenia sprzętu wojskowego, służb specjalnych i lotnictwa, gdzie etykieta nie może być zdjęta w całości.',
    keyHighlights: [
      'Destruktywna — rozpada się na kawałki przy próbie zdjęcia',
      'Najwyższy poziom zabezpieczenia (nie do ponownego użycia)',
      'Polietylen destruktywny z klejem destruktywnym',
      'Plomby urzędowe, sprzęt wojskowy, służby, lotnictwo',
      'Druk z taśmą żywiczną (resin)',
    ],
    sections: [
      {
        heading: 'Jak działa etykieta destruktywna?',
        content:
          'Z-Destruct PE jest zbudowana z kruchego materiału (polietylen destruktywny) z bardzo silnym klejem. Przy próbie odklejenia etykieta **rozpada się na drobne fragmenty** zamiast schodzić w całości — fragmenty są zbyt małe i kruche, by je zebrać i ponownie nakleić. To uniemożliwia przeniesienie plomby na inny obiekt czy ukrycie faktu jej zdjęcia.\n\nTo najwyższy poziom zabezpieczenia tamper-evident: w odróżnieniu od etykiety VOID (która zostaje w jednym kawałku z napisem), destruktywna fizycznie przestaje istnieć jako całość.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Destruct PE to produkt dla **krytycznych zabezpieczeń**:\n\n- **Plomby urzędowe** — pieczęcie organów państwowych\n- **Policja i służby specjalne** — zabezpieczenie dowodów i sprzętu\n- **Sprzęt wojskowy** — identyfikacja i plombowanie\n- **Lotnictwo** — sprzęt naziemny, plomby krytycznych komponentów\n- **Identyfikacja sprzętu krytycznego** wymagającego nieusuwalnej plomby\n\nWysoka cena za rolkę odzwierciedla niszowość i zaawansowanie materiału — to produkt kupowany w małych ilościach do konkretnych, krytycznych zastosowań. Konkurencja praktycznie nie ma go w ofercie.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Polietylen destruktywny' },
      { label: 'Klej', value: 'Destruktywny — rozpada się przy zdjęciu' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Poziom zabezpieczenia', value: 'Najwyższy' },
      { label: 'Liczba wariantów', value: '1' },
      { label: 'Grupa cenowa', value: 'Najwyższa' },
    ],
    applications: [
      'Plomby urzędowe — pieczęcie organów państwowych',
      'Policja i służby specjalne — zabezpieczenie dowodów',
      'Sprzęt wojskowy — identyfikacja i plombowanie',
      'Lotnictwo — sprzęt naziemny, plomby komponentów',
      'Identyfikacja sprzętu krytycznego',
    ],
    notRecommendedFor: [
      'Zastosowania, gdzie etykieta ma schodzić czysto',
      'Standardowe oznaczenia — to materiał ekstremalnie niszowy',
      'Budżetowe zabezpieczenia — wybierz tańszy 8000T Void Matte',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: '8000t-void-matte', whenToChooseThis: 'Wybierz Z-Destruct PE dla najwyższego poziomu — etykieta rozpada się fizycznie. Void Matte gdy wystarczy widoczny napis VOID jako dowód naruszenia (taniej).' },
    ],
    faq: [
      { question: 'Czy etykietę da się zdjąć w całości?', answer: 'Nie — to jej cel. Przy próbie odklejenia Z-Destruct PE rozpada się na drobne, kruche fragmenty, których nie da się zebrać ani ponownie nakleić. To uniemożliwia przeniesienie lub ukrycie zdjęcia plomby.' },
      { question: 'Czym różni się od etykiety VOID?', answer: 'VOID zostaje w jednym kawałku z widocznym napisem po zdjęciu. Z-Destruct PE fizycznie się rozpada — wyższy poziom zabezpieczenia, gdy etykieta nie może istnieć po próbie zdjęcia.' },
      { question: 'Dlaczego jest tak droga?', answer: 'To ekstremalnie niszowy, zaawansowany materiał kupowany w małych ilościach do krytycznych zastosowań (służby, wojsko, plomby urzędowe). Cena odzwierciedla specjalizację i niski wolumen produkcji.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Pierwszy wybór to Zebra 4800 Resin — standardowa żywiczna do plomb destruktywnych z certyfikatem UL. Alternatywa: 8000 ChemResist gdy plomby będą na sprzęcie chemicznym, lotniczym lub wojskowym z kontaktem z agresywnymi rozpuszczalnikami (aceton, MEK, paliwa lotnicze).' },
    ],
    recommendedRibbons: {
      resin: ['Zebra 4800 Resin', 'Zebra 8000 ChemResist'],
    },
  },
]

/* ═════════════════════════════════════════════════════════════════
 *  HELPERY
 * ═════════════════════════════════════════════════════════════════ */

export function getTransferLabelSeriesBySlug(slug: string): TransferLabelSeries | undefined {
  return transferLabelSeries.find((s) => s.slug === slug)
}

export function getTransferLabelSeriesBySubcategory(
  sub: TransferLabelSubcategory,
): TransferLabelSeries[] {
  return transferLabelSeries.filter((s) => s.subcategory === sub)
}

export function getAllTransferLabelSeriesSlugs(): string[] {
  return transferLabelSeries.map((s) => s.slug)
}

export function getTransferLabelSeriesByProductId(
  productId: string,
): TransferLabelSeries | undefined {
  return transferLabelSeries.find((s) => s.productId === productId)
}
