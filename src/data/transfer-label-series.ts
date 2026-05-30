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
  /** Override `object-position` dla `heroImage` w **hero strony landing serii**
   *  (`/etykiety-termotransferowe-zebra/.../serie/[slug]`). Fallback do `heroImagePosition`. */
  heroLandingImagePosition?: string

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
    ulCertified: false,
    priceFrom: 2702.55,
    accent: '#059669',
    seoTitle: 'Zebra Z-Ultimate 3000T Silver | srebrny poliester termotransferowy',
    seoDescription: 'Zebra Z-Ultimate 3000T Silver — srebrne metaliczne etykiety poliestrowe do tabliczek znamionowych i estetycznych oznaczeń przemysłowych. Trwałość do 5 lat, odporność chemiczna. 18 wariantów od 2703 zł.',
    h1: 'Etykiety termotransferowe Zebra Z-Ultimate 3000T Silver',
    heroIntro: 'Z-Ultimate 3000T Silver to **srebrny metaliczny poliester** — odmiana flagowej folii Zebra dla zastosowań, gdzie liczy się estetyka metalicznej powierzchni: tabliczki znamionowe, oznaczenia premium sprzętu i identyfikacja przemysłowa. Ta sama trwałość i odporność co wersja biała, w eleganckim srebrnym wykończeniu. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-z-ultimate-3000t-silver.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Srebrny metaliczny poliester (PET) — estetyka tabliczek znamionowych',
      'Trwałość do 5 lat, wysoka odporność chemiczna i mechaniczna',
      'Klej permanentny akrylowy wysokiej wydajności',
      'Druk z taśmą żywiczną (resin) Zebra 5095',
      '18 wariantów, gilza 25 mm',
    ],
    sections: [
      {
        heading: 'Czym jest Z-Ultimate 3000T Silver?',
        content:
          'Z-Ultimate 3000T Silver to wariant flagowej folii poliestrowej Zebra w **srebrnym metalicznym wykończeniu**. Oferuje tę samą trwałość (do 5 lat), odporność chemiczną i mechaniczną co wersja biała, ale srebrna powierzchnia daje wygląd metalowej tabliczki znamionowej — bez kosztu grawerowanego metalu.\n\nTo wybór estetyczny i funkcjonalny: tam gdzie oznaczenie ma wyglądać profesjonalnie i "przemysłowo", a jednocześnie przetrwać lata w trudnych warunkach.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'Z-Ultimate 3000T Silver stosuje się głównie w **oznaczeniach premium i tabliczkach**:\n\n- **Tabliczki znamionowe** maszyn i urządzeń (zamiennik grawerowanego metalu)\n- **Oznaczenia sprzętu przemysłowego** premium\n- **Identyfikacja zasobów** wymagająca estetyki\n- **Panele sterownicze** i oznaczenia instalacji\n\nWysoka cena za rolkę wynika z metalicznego materiału — to produkt niszowy, kupowany w mniejszych ilościach do konkretnych zastosowań.',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Poliester srebrny metaliczny (PET)' },
      { label: 'Klej', value: 'Permanentny akrylowy wysokiej wydajności' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Trwałość indoor', value: 'Do 5 lat' },
      { label: 'Odporność chemiczna', value: 'Wysoka' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Liczba wariantów', value: '18' },
      { label: 'Grupa cenowa', value: 'Premium foliowe specjalne' },
    ],
    applications: [
      'Tabliczki znamionowe maszyn i urządzeń',
      'Oznaczenia sprzętu przemysłowego premium',
      'Identyfikacja zasobów z estetyką metalu',
      'Panele sterownicze i instalacje',
    ],
    notRecommendedFor: [
      'Standardowe oznaczenia — wybierz tańszą wersję White',
      'Kody kreskowe wymagające wysokiego kontrastu (srebrne tło)',
      'Wysyłka i magazyn — to materiał niszowy',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'Wybierz Silver tylko dla estetyki metalicznej tabliczki. Do oznaczeń z kodami kreskowymi i większości zastosowań — White (lepszy kontrast, certyfikat UL, taniej).' },
    ],
    faq: [
      { question: 'Czym różni się Silver od White?', answer: 'Wyłącznie kolorem/wykończeniem powierzchni — srebrny metaliczny vs biały. Trwałość i odporność są takie same. Silver wybiera się dla estetyki tabliczek znamionowych; White dla kodów kreskowych (lepszy kontrast) i certyfikatu UL.' },
      { question: 'Czy mogę drukować kody kreskowe na srebrnym tle?', answer: 'Tak, ale kontrast jest niższy niż na białym — przy gęstych kodach 2D przetestuj łatwość skanowania. Do krytycznych kodów lepszy jest White.' },
      { question: 'Dlaczego Silver jest dużo droższy?', answer: 'Metaliczny poliester to materiał specjalistyczny, produkowany w mniejszych wolumenach. Kupowany jest do konkretnych zastosowań (tabliczki), nie masowo.' },
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
    seoTitle: 'Zebra PolyE 3100T Gloss | etykiety polietylenowe elastyczne termotransferowe',
    seoDescription: 'Zebra PolyE 3100T Gloss — elastyczne foliowe etykiety polietylenowe (PE), dopasowują się do zakrzywionych powierzchni. Ekologiczne (recyklowalne), atest żywnościowy. Do opakowań kosmetyków i chemii. 9 wariantów od 1020 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyE 3100T Gloss',
    heroIntro: 'PolyE 3100T Gloss to foliowe etykiety **polietylenowe (PE)** — wyróżnia je elastyczność, dzięki której dopasowują się do zakrzywionych i ściśliwych powierzchni (butelki, tuby, opakowania kosmetyków). Materiał jest recyklowalny (zgodny ze strumieniem PE) i posiada atest żywnościowy. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polye-3100t-gloss.png',
    heroImagePosition: 'center 30%',
    heroLandingImagePosition: 'center 30%',
    keyHighlights: [
      'Polietylen (PE) — wysoka elastyczność, konformny na krzywiznach',
      'Idealny na butelki, tuby, ściśliwe opakowania kosmetyków',
      'Ekologiczny — recyklowalny w strumieniu PE',
      'Atest żywnościowy, powłoka top-coat',
      'Druk z taśmą żywiczną (resin)',
      '9 wariantów, gilze 25 mm i 76 mm',
    ],
    sections: [
      {
        heading: 'Czym jest PolyE 3100T Gloss?',
        content:
          'PolyE 3100T Gloss to etykieta z **polietylenu (PE)** — folia, której kluczową cechą jest elastyczność. W odróżnieniu od sztywnego polipropylenu czy poliestru, PE dopasowuje się do zakrzywionych, ściśliwych powierzchni bez marszczenia i odklejania krawędzi. To czyni ją idealną do butelek, tub i opakowań kosmetycznych, które są ściskane podczas użytkowania.\n\nDodatkowo PE jest zgodny z recyklingiem w strumieniu polietylenu — istotne dla marek dbających o ekologię opakowań. Posiada atest żywnościowy i powłokę top-coat dla jakości nadruku.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyE 3100T Gloss to wybór do **opakowań elastycznych i ekologicznych**:\n\n- **Kosmetyki** — butelki, tuby, opakowania ściskane\n- **Chemia gospodarcza** — opakowania PE (spójność materiału etykiety i opakowania)\n- **Produkty konsumenckie** — etykiety na zakrzywionych powierzchniach\n- **Marki eco** — gdy liczy się recyklowalność opakowania',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Polietylen (PE) gloss z top-coat' },
      { label: 'Klej', value: 'Permanentny akrylowy' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Elastyczność', value: 'Wysoka — konformny na krzywiznach' },
      { label: 'Atest żywnościowy', value: 'Tak' },
      { label: 'Recyklowalny', value: 'Tak (strumień PE)' },
      { label: 'Gilze (rdzeń)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '9' },
    ],
    applications: [
      'Kosmetyki — butelki, tuby, opakowania ściskane',
      'Chemia gospodarcza — opakowania PE',
      'Produkty konsumenckie na zakrzywionych powierzchniach',
      'Marki eco — recyklowalność opakowania',
    ],
    notRecommendedFor: [
      'Sztywne, płaskie powierzchnie — wystarczy tańszy PolyPro',
      'Maksymalna odporność chemiczna — wybierz poliester Z-Ultimate',
      'Wysyłka i magazyn — to materiał produktowy',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie ramowe dla materiałów w kontakcie z żywnością.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz PolyE (polietylen) na powierzchnie elastyczne/ściskane (tuby, butelki). PolyPro (polipropylen) na sztywne płaskie powierzchnie — taniej.' },
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'PolyE na elastyczne opakowania konsumenckie. Z-Ultimate (poliester) na trwałe oznaczenia przemysłowe z maksymalną odpornością chemiczną.' },
    ],
    faq: [
      { question: 'Czym PolyE różni się od PolyPro?', answer: 'PolyE to polietylen — elastyczny, dopasowuje się do zakrzywionych i ściskanych powierzchni (tuby, butelki). PolyPro to polipropylen — sztywniejszy, do płaskich powierzchni, tańszy. Wybór zależy od kształtu opakowania.' },
      { question: 'Jaką taśmę do PolyE 3100T?', answer: 'Taśmę żywiczną (resin), np. Zebra 5095 — jak do każdej folii. Taśma woskowa nie zwiąże się z polietylenem.' },
      { question: 'Czy PolyE jest ekologiczny?', answer: 'Tak — polietylen jest recyklowalny w strumieniu PE. Gdy etykieta i opakowanie są z tego samego materiału (PE), całość łatwiej poddać recyklingowi.' },
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
    seoTitle: 'Zebra PolyPro 3000T Gloss | etykiety polipropylenowe białe termotransferowe',
    seoDescription: 'Zebra PolyPro 3000T Gloss — białe foliowe etykiety polipropylenowe (BOPP), sztywne i wodoodporne. Odporność UV, atest żywnościowy. Ekonomiczna folia do przemysłu i retailu. 6 wariantów od 374 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 3000T Gloss',
    heroIntro: 'PolyPro 3000T Gloss to białe foliowe etykiety **polipropylenowe (BOPP)** — sztywne, wytrzymałe na rozdarcie i wodoodporne. To najbardziej **ekonomiczna folia** w portfolio: tańsza od poliestru Z-Ultimate, a wystarczająca do większości zastosowań przemysłowych i retailowych, gdzie liczy się wodoodporność i trwałość bez ekstremalnej odporności chemicznej. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polye-3000t-gloss.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Polipropylen biały (BOPP) — sztywny, wodoodporny, odporny na rozdarcie',
      'Najtańsza folia w portfolio — alternatywa dla poliestru',
      'Klej akrylowy z odpornością UV, atest żywnościowy (EC, FDA)',
      'Druk z taśmą żywiczną (resin)',
      '6 wariantów, gilze 25 mm i 76 mm',
    ],
    sections: [
      {
        heading: 'Czym jest PolyPro 3000T Gloss?',
        content:
          'PolyPro 3000T Gloss to etykieta z białego polipropylenu (BOPP) — folii syntetycznej, która jest **wodoodporna, sztywna i odporna na rozdarcie**, ale tańsza od poliestru (PET). To "folia do zadań podstawowych": gdy papier nie wystarcza (wilgoć, woda, mycie), a pełna odporność chemiczna i 5-letnia trwałość poliestru są nadmiarem.\n\nKlej akrylowy ma odporność UV, a materiał posiada atesty żywnościowe (EC, FDA) — stąd zastosowania od przemysłu po retail i produkty spożywcze w wilgotnym środowisku.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 3000T Gloss sprawdza się tam, gdzie potrzeba **wodoodpornej folii w rozsądnej cenie**:\n\n- **Przemysł** — oznaczenia odporne na wilgoć i mycie\n- **Retail** — etykiety produktowe na opakowania narażone na wilgoć\n- **Chłodnie i mokre środowiska** — etykiety na opakowaniach\n- **Produkty spożywcze** — etykiety na opakowaniach mytych/wilgotnych (atest)\n- **Kosmetyki i chemia** — płaskie, sztywne opakowania',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Polipropylen biały gloss (BOPP)' },
      { label: 'Klej', value: 'Permanentny akrylowy z odpornością UV' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Wodoodporność', value: 'Tak' },
      { label: 'Atest żywnościowy', value: 'Tak (EC, FDA)' },
      { label: 'Gilze (rdzeń)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '6' },
    ],
    applications: [
      'Przemysł — oznaczenia odporne na wilgoć i mycie',
      'Retail — etykiety produktowe na wilgotne opakowania',
      'Chłodnie i mokre środowiska',
      'Produkty spożywcze — opakowania myte (atest)',
      'Kosmetyki i chemia — płaskie opakowania',
    ],
    notRecommendedFor: [
      'Maksymalna trwałość i odporność chemiczna — wybierz poliester Z-Ultimate',
      'Zakrzywione/ściskane powierzchnie — wybierz elastyczny PolyE',
      'Budżetowa wysyłka — wybierz papier Z-Perform 1000T',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie dla materiałów w kontakcie z żywnością.' },
      { name: 'FDA', description: 'Zgodność z wymogami amerykańskiej FDA dla kontaktu z żywnością.' },
    ],
    comparedWith: [
      { seriesSlug: 'z-ultimate-3000t-white', whenToChooseThis: 'Wybierz PolyPro jako tańszą folię wodoodporną do zastosowań podstawowych. Z-Ultimate (poliester) gdy potrzeba maksymalnej odporności chemicznej, UL i 5 lat trwałości.' },
      { seriesSlug: 'polypro-3000t-clear', whenToChooseThis: 'Gloss (biały) do standardowych etykiet z nadrukiem. Clear (przezroczysty) gdy chcesz efekt "no label" i widoczność produktu.' },
    ],
    faq: [
      { question: 'Czym PolyPro różni się od poliestru Z-Ultimate?', answer: 'PolyPro (polipropylen) jest tańszy i wystarcza do wodoodpornych etykiet podstawowych. Z-Ultimate (poliester) ma wyższą odporność chemiczną, mechaniczną, certyfikat UL i trwałość do 5 lat. Wybór zależy od wymagań i budżetu.' },
      { question: 'Czy PolyPro jest wodoodporny?', answer: 'Tak — polipropylen jest w pełni wodoodporny, w odróżnieniu od papieru. Sprawdza się na opakowaniach mytych, w chłodniach i wilgotnych środowiskach.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Domyślnie taśma wosk-żywica (Zebra 3200 Wax/Resin) — pierwszy wybór dla polipropylenu białego błyszczącego. Do aplikacji outdoor lub UV (krótkoterminowo) wybierz żywiczną 5095 Resin.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 3200 Wax/Resin'],
      resin: ['Zebra 5095 Resin'],
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
    seoTitle: 'Zebra PolyPro 3000T Clear | przezroczyste etykiety polipropylenowe',
    seoDescription: 'Zebra PolyPro 3000T Clear — przezroczyste foliowe etykiety polipropylenowe z efektem „no label". Widoczność produktu pod etykietą, wodoodporne. Do kosmetyków i opakowań premium. 2 warianty od 664 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 3000T Clear',
    heroIntro: 'PolyPro 3000T Clear to **przezroczyste** foliowe etykiety polipropylenowe — dają efekt „no label look", w którym widać produkt pod etykietą, a nadruk wygląda jakby był bezpośrednio na opakowaniu. Wodoodporne i trwałe jak biała wersja, ale do zastosowań, gdzie liczy się estetyka i minimalizm opakowania. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polypro-3000t-clear.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Przezroczysty polipropylen — efekt „no label", widoczność produktu',
      'Wodoodporny i trwały, klej akrylowy',
      'Atest żywnościowy — kosmetyki, spożywka premium',
      'Druk z taśmą żywiczną (resin)',
      '2 warianty, gilza 25 mm',
    ],
    sections: [
      {
        heading: 'Czym jest efekt „no label look"?',
        content:
          'PolyPro 3000T Clear to przezroczysta folia polipropylenowa. Po naklejeniu na gładkie, przezroczyste lub kolorowe opakowanie etykieta niemal znika — widać produkt pod nią, a nadruk (tekst, logo, kod) wygląda jakby był wydrukowany bezpośrednio na opakowaniu. To pożądany w premium retailu efekt „no label look", kojarzony z naturalnością i minimalizmem.\n\nMateriał jest wodoodporny i trwały jak wersja biała — różni się tylko przezroczystością facestock.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 3000T Clear stosuje się tam, gdzie **estetyka opakowania jest kluczowa**:\n\n- **Kosmetyki premium** — butelki, słoiki, opakowania szklane i przezroczyste\n- **Napoje i spożywka premium** — efekt etykiety „wtopionej" w opakowanie\n- **Produkty konsumenckie** — minimalistyczny branding\n- **Opakowania, gdzie ma być widoczna zawartość**',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Polipropylen przezroczysty (BOPP)' },
      { label: 'Klej', value: 'Permanentny akrylowy' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Wodoodporność', value: 'Tak' },
      { label: 'Atest żywnościowy', value: 'Tak' },
      { label: 'Gilza (rdzeń)', value: '25 mm' },
      { label: 'Liczba wariantów', value: '2' },
    ],
    applications: [
      'Kosmetyki premium — butelki, słoiki, szkło',
      'Napoje i spożywka premium — efekt „no label"',
      'Produkty konsumenckie — minimalistyczny branding',
      'Opakowania z widoczną zawartością',
    ],
    notRecommendedFor: [
      'Kody kreskowe wymagające wysokiego kontrastu (przezroczyste tło)',
      'Standardowe etykiety — wybierz tańszy PolyPro Gloss (biały)',
      'Wysyłka i magazyn — to materiał produktowy premium',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [
      { name: 'EC 1935/2004', description: 'Unijne rozporządzenie dla materiałów w kontakcie z żywnością.' },
    ],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz Clear dla efektu „no label" i widoczności produktu. Gloss (biały) do standardowych etykiet z pełnym nadrukiem i lepszym kontrastem kodów.' },
    ],
    faq: [
      { question: 'Czy na przezroczystej etykiecie zeskanuje się kod kreskowy?', answer: 'Zależy od tła. Na jasnym/białym opakowaniu kontrast może wystarczyć, ale na ciemnym lub wzorzystym kody bywają nieczytelne. Do krytycznych kodów wybierz białą wersję (PolyPro Gloss).' },
      { question: 'Jaką taśmę do PolyPro Clear?', answer: 'Wosk-żywica Zebra 3200 Wax/Resin — pierwszy wybór dla polipropylenu przezroczystego. Dobre związanie z folią i ostry nadruk drobnych kodów dla efektu „no label".' },
      { question: 'Czy etykieta jest naprawdę niewidoczna?', answer: 'Folia jest przezroczysta, więc na gładkich powierzchniach efekt „no label" jest bardzo dobry. Widoczny pozostaje sam nadruk (tekst, logo) i delikatna krawędź etykiety.' },
    ],
    recommendedRibbons: {
      waxResin: ['Zebra 3200 Wax/Resin'],
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
    seoTitle: 'Zebra PolyPro 4000T Matte | matowe etykiety polipropylenowe machine vision',
    seoDescription: 'Zebra PolyPro 4000T Matte — matowe foliowe etykiety polipropylenowe bez odbić światła. Idealne pod kamery przemysłowe i kontrolę optyczną (machine vision). Wodoodporne. 2 warianty od 1294 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyPro 4000T Matte',
    heroIntro: 'PolyPro 4000T Matte to **matowe** foliowe etykiety polipropylenowe — brak odbić światła sprawia, że są idealne na produkty skanowane i fotografowane przez **kamery przemysłowe (machine vision)** i systemy kontroli optycznej. Matowa powierzchnia eliminuje refleksy, które zakłócają odczyt kodów i inspekcję wizyjną. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polypro-4000t-matte.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Matowa powierzchnia — brak odbić światła i refleksów',
      'Idealna pod kamery przemysłowe (machine vision) i kontrolę optyczną',
      'Wodoodporny polipropylen, klej akrylowy',
      'Druk z taśmą żywiczną (resin)',
      '2 warianty, gilze 25 mm i 76 mm',
    ],
    sections: [
      {
        heading: 'Dlaczego matowa powierzchnia ma znaczenie?',
        content:
          'W systemach machine vision i kontroli optycznej refleksy światła na błyszczącej etykiecie powodują "przepalenia" w obrazie z kamery — kod kreskowy lub inspekcja wizyjna staje się nieczytelna. **Matowa powierzchnia PolyPro 4000T eliminuje te odbicia**, dając równomierny, czytelny obraz niezależnie od kąta oświetlenia.\n\nTo materiał specjalistyczny dla zautomatyzowanych linii produkcyjnych i sortujących, gdzie etykiety są odczytywane maszynowo, a nie przez człowieka.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyPro 4000T Matte stosuje się w **automatyzacji i kontroli optycznej**:\n\n- **Linie produkcyjne** z odczytem kodów przez kamery stałe\n- **Sortownie i logistyka** zautomatyzowana (vision systems)\n- **Kontrola jakości** z inspekcją wizyjną\n- **Etykiety odczytywane maszynowo** w trudnych warunkach oświetleniowych',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Polipropylen biały matowy (BOPP)' },
      { label: 'Klej', value: 'Permanentny akrylowy' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'Specjalizacja', value: 'Machine vision, kontrola optyczna' },
      { label: 'Wodoodporność', value: 'Tak' },
      { label: 'Gilze (rdzeń)', value: '25 mm, 76 mm' },
      { label: 'Liczba wariantów', value: '2' },
    ],
    applications: [
      'Linie produkcyjne z odczytem kodów przez kamery',
      'Sortownie i logistyka zautomatyzowana (vision)',
      'Kontrola jakości z inspekcją wizyjną',
      'Etykiety odczytywane maszynowo',
    ],
    notRecommendedFor: [
      'Standardowe etykiety dla ludzi — wybierz tańszy PolyPro Gloss',
      'Efekt premium/estetyczny — wybierz Clear lub Gloss',
      'Budżetowa wysyłka — wybierz papier',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610', 'ZT620'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz Matte gdy etykieta jest odczytywana przez kamery (machine vision) — brak refleksów. Gloss do standardowego odczytu i niższej ceny.' },
    ],
    faq: [
      { question: 'Po co etykieta matowa?', answer: 'Matowa powierzchnia eliminuje odbicia światła, które zakłócają odczyt kodów przez kamery przemysłowe (machine vision) i inspekcję optyczną. To materiał do zautomatyzowanych linii, nie do odczytu przez człowieka.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Taśmę żywiczną (resin), np. Zebra 5095 — jak do każdej folii.' },
      { question: 'Czy Matte jest droższy od Gloss?', answer: 'Tak — to materiał specjalistyczny do machine vision, produkowany w mniejszych wolumenach. Do standardowych zastosowań Gloss jest tańszy i wystarczający.' },
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
    seoTitle: 'Zebra PolyO 3100T | etykiety poliolefinowe, ekologiczny zamiennik PVC',
    seoDescription: 'Zebra PolyO 3100T — foliowe etykiety poliolefinowe, ekologiczna alternatywa dla PVC. All-weather, BPA-free, spełniają regulacje UE. Do trwałych oznaczeń przemysłowych. 3 warianty od 1431 zł.',
    h1: 'Etykiety termotransferowe Zebra PolyO 3100T',
    heroIntro: 'PolyO 3100T to foliowe etykiety **poliolefinowe** — ekologiczna alternatywa dla etykiet PVC, która spełnia wymagania środowiskowe i regulacje UE (BPA-free, latex-free). Klej all-weather sprawia, że nadają się do trwałych oznaczeń w zmiennych warunkach pogodowych. Druk taśmą żywiczną (resin).',
    heroImage: '/images/etykiety-termotransferowe-zebra-polyo-3100t.png',
    heroImagePosition: 'center 40%',
    keyHighlights: [
      'Poliolefina — ekologiczny zamiennik PVC (BPA-free, latex-free)',
      'Klej all-weather — odporność na zmienne warunki pogodowe',
      'Spełnia regulacje UE dotyczące materiałów',
      'Druk z taśmą żywiczną (resin)',
      '3 warianty, gilza 76 mm',
    ],
    sections: [
      {
        heading: 'Czym jest poliolefina i dlaczego zamiast PVC?',
        content:
          'Poliolefina to grupa tworzyw (m.in. PE/PP) stosowana jako **ekologiczna alternatywa dla PVC**. PVC, mimo dobrych właściwości, jest problematyczny środowiskowo (chlor, plastyfikatory) i coraz częściej wykluczany przez regulacje UE i polityki zrównoważonego rozwoju firm. PolyO 3100T daje zbliżoną funkcjonalność (trwałość, elastyczność, all-weather) bez wad PVC — jest BPA-free i latex-free.\n\nTo wybór dla firm, które potrzebują trwałej folii, a jednocześnie chcą wyeliminować PVC z opakowań i oznaczeń.',
      },
      {
        heading: 'Główne zastosowania',
        content:
          'PolyO 3100T stosuje się jako **trwałą, ekologiczną folię all-weather**:\n\n- **Przemysł** — trwałe oznaczenia w zmiennych warunkach\n- **Firmy eliminujące PVC** — zgodność z politykami środowiskowymi\n- **Oznaczenia narażone na pogodę** — klej all-weather\n- **Zastosowania regulowane** wymagające materiałów bez PVC',
      },
    ],
    techSpecs: [
      { label: 'Typ druku', value: 'Termotransferowy (wymaga taśmy resin)' },
      { label: 'Materiał', value: 'Poliolefina (alternatywa PVC)' },
      { label: 'Klej', value: 'All-weather akrylowy' },
      { label: 'Zalecana taśma', value: 'Żywiczna (resin) Zebra 5095' },
      { label: 'BPA / lateks', value: 'BPA-free, latex-free' },
      { label: 'Odporność pogodowa', value: 'All-weather' },
      { label: 'Gilza (rdzeń)', value: '76 mm' },
      { label: 'Liczba wariantów', value: '3' },
    ],
    applications: [
      'Przemysł — trwałe oznaczenia all-weather',
      'Firmy eliminujące PVC z opakowań',
      'Oznaczenia narażone na zmienne warunki pogodowe',
      'Zastosowania regulowane bez PVC',
    ],
    notRecommendedFor: [
      'Maksymalna odporność chemiczna — wybierz poliester Z-Ultimate',
      'Budżetowe zastosowania — wybierz PolyPro Gloss',
      'Wysyłka i magazyn — wybierz papier',
      'Druk z taśmą woskową — wymaga resin',
    ],
    compatiblePrinters: {
      desktop: ['ZD421t', 'ZD621t'],
      midRange: ['ZD611t', 'ZT231'],
      industrial: ['ZT411', 'ZT421', 'ZT610'],
      mobile: [],
    },
    certifications: [],
    comparedWith: [
      { seriesSlug: 'polypro-3000t-gloss', whenToChooseThis: 'Wybierz PolyO gdy musisz wyeliminować PVC i potrzebujesz kleju all-weather. PolyPro do standardowych zastosowań foliowych — taniej.' },
    ],
    faq: [
      { question: 'Dlaczego poliolefina zamiast PVC?', answer: 'Poliolefina to ekologiczna alternatywa — bez chloru i plastyfikatorów problematycznych w PVC, BPA-free i latex-free. Wybierana przez firmy eliminujące PVC ze względów środowiskowych i regulacyjnych.' },
      { question: 'Co oznacza klej all-weather?', answer: 'Klej all-weather utrzymuje przyczepność w zmiennych warunkach pogodowych i temperaturowych — nadaje się do oznaczeń narażonych na wahania otoczenia.' },
      { question: 'Jaką taśmę dobrać?', answer: 'Domyślnie taśmę żywiczną Zebra 5095 Resin — pierwszy wybór dla poliolefiny. Do aplikacji z kontaktem z agresywnymi chemikaliami (beczki chemiczne, paliwa) wybierz 4800 Resin.' },
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
