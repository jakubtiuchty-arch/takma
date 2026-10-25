import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

// Drukarki dla ochrony zdrowia kilku producentów: Zebra HC, TSC HC, SATO, Honeywell PC45d Healthcare, Citizen CL-H300SV.
// Karty przychodzą z osobnych plików (zebra-hc-*-products.ts, tsc-hc-products.ts, sato-hc-products.ts,
// honeywell-citizen-hc-products.ts) i trafiają tu także przez pętlę `subcategoryIds` w products.ts.
// Parametry w treści według kart katalogowych: Zebra ZD411/ZD421 (2024), ZD611/ZD621, ZD510-HC (10.2025), ZQ6 HC (01.2026);
// TSC TH DH (04.2026) i Alpha-30L/40L (01.2024); SATO CT4-LX-HC (04.2023) i WS2-2 (11.2024);
// Honeywell PC45 Healthcare (Rev A 01/24); Citizen CL-H300SV (05.2026). Źródła: docs/catalog/hc-producenci-2026-10-25/J4.md.
export const healthcarePrinterCategory: Subcategory = {
  id: 'drukarki-dla-sluzby-zdrowia',
  slug: 'drukarki-dla-sluzby-zdrowia',
  name: 'Drukarki dla służby zdrowia',
  parentCategoryId: 'drukarki-etykiet',
  description: 'Biurkowe i mobilne drukarki etykiet i opasek w wersjach dla ochrony zdrowia — Zebra, TSC, SATO, Honeywell i Citizen — do szpitali, laboratoriów i aptek szpitalnych.',
  seoTitle: 'Drukarki dla służby zdrowia i szpitali: Zebra, TSC, SATO | TAKMA',
  seoDescription: 'Drukarki dla służby zdrowia Zebra, TSC, SATO, Honeywell i Citizen: szpitalna drukarka etykiet na probówki i leki, drukarka opasek dla pacjentów, drukarki mobilne. Porównanie modeli.',
  longDescription: 'Drukarki dla służby zdrowia to drukarki etykiet i opasek w wersjach przeznaczonych dla placówek ochrony zdrowia. Ich obudowy wykonano z tworzyw przygotowanych do częstej dezynfekcji. Zależnie od producenta mają też tworzywo antybakteryjne lub antymikrobowe, zasilacz zgodny z normą IEC 60601-1 albo obudowę odporną na promieniowanie UV. Drukują opaski dla pacjentów, etykiety na probówki i próbki oraz etykiety leków. Dane do druku wysyła system szpitalny przez sieć lub USB, a kod z opaski odczytuje [skaner kodów kreskowych](/skanery-dla-sluzby-zdrowia). Materiały do druku są w kategoriach [opaski identyfikacyjne](/opaski-identyfikacyjne) i [etykiety termiczne](/etykiety-termiczne-zebra).',
  icon: 'printer',
  productIds: [
    'zebra-zd510-hc',
    'zebra-zd411-hc',
    'zebra-zd611-hc',
    'zebra-zd421-hc',
    'zebra-zd621-hc',
    'zebra-zq610-plus-hc',
    'zebra-zq620-plus-hc',
    'tsc-th220thc',
    'tsc-dh220thc',
    'tsc-dh220lhc',
    'tsc-th240thc',
    'tsc-dh240thc',
    'tsc-alpha-30lhc',
    'sato-ws2-2',
    'sato-ct4-lx-hc',
    'honeywell-pc45d-hc',
    'citizen-cl-h300sv',
  ],
  productCount: 17,
}

export const healthcarePrinterContent: SubcategoryRichContent = {
  updatedAt: '2026-10-25',
  sectionHeadings: {
    technicalDeepDive: 'Obudowa, tworzywo i zasilacz',
    useCases: 'Zastosowania w placówce',
    comparisons: 'Porównanie modeli',
    howToSteps: 'Jak wybrać drukarkę dla służby zdrowia?',
  },
  definition: {
    heading: 'Czym różni się drukarka dla służby zdrowia od zwykłej drukarki etykiet?',
    content: 'Wersje dla ochrony zdrowia różnią się od modeli podstawowych przede wszystkim obudową. Wszystkie drukarki w tej kategorii mają tworzywa przygotowane do regularnego przecierania środkami dezynfekcyjnymi. Pozostałe cechy zależą od producenta. Drukarki TSC mają obudowę antybakteryjną, drukarki SATO — obudowę antymikrobową, a [Citizen CL-H300SV](/produkt/citizen-cl-h300sv) — obudowę z jonami srebra i znakiem SIAA zgodnym z normą ISO 22196. Zasilacz zgodny z normą IEC 60601-1 mają biurkowe drukarki Zebra HC oraz drukarki TSC HC, a uszczelnione przyciski — biurkowe drukarki Zebra HC i drukarki TSC HC. Obudowę odporną na promieniowanie UV mają biurkowe drukarki Zebra HC. [Honeywell PC45d Healthcare](/produkt/honeywell-pc45d-hc) ma obudowę i złącza przygotowane do dezynfekcji.\n\nW kategorii są trzy rodzaje urządzeń. [Zebra ZD510-HC](/produkt/zebra-zd510-hc) drukuje opaski z kartridżów. Drukarki biurkowe 2- i 4-calowe drukują etykiety, a większość z nich także opaski z rolki; [SATO WS2-2](/produkt/sato-ws2-2) drukuje jednym urządzeniem opaski pacjentów i etykiety na oddziale. Drukarki mobilne [Zebra ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc), [ZQ620 Plus-HC](/produkt/zebra-zq620-plus-hc) i [TSC Alpha-30LHC](/produkt/tsc-alpha-30lhc) pracują na baterii i drukują etykiety w miejscu opieki nad pacjentem.',
  },
  comparisonTable: {
    heading: 'Porównanie drukarek dla służby zdrowia',
    intro: 'Podstawowe parametry modeli w grupach: drukarka opasek, biurkowe 2-calowe, biurkowe 4-calowe i mobilne. Konfiguracje i numery PN są na kartach produktów.',
    columns: ['Szerokość druku', 'Technologia druku', 'Rozdzielczość', 'Prędkość maks.', 'Łączność w standardzie'],
    rows: [
      { model: 'Zebra ZD510-HC', href: '/produkt/zebra-zd510-hc', role: 'Biurkowa drukarka opasek z kartridżami Z-Band', cells: ['19,05 / 25,4 / 30,16 mm', 'Termiczna', '300 dpi', '51 mm/s (opaski medyczne)', 'USB, USB Host, Ethernet'] },
      { model: 'Zebra ZD411-HC', href: '/produkt/zebra-zd411-hc', role: 'Biurkowa 2", tylko druk termiczny', cells: ['do 56 mm', 'Termiczna', '203 lub 300 dpi', '152 mm/s', 'USB, USB Host'] },
      { model: 'Zebra ZD611-HC', href: '/produkt/zebra-zd611-hc', role: 'Biurkowa 2", Ethernet w standardzie', cells: ['do 56 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet'] },
      { model: 'TSC TH220THC / TH320THC', href: '/produkt/tsc-th220thc', role: 'Biurkowa 2", druk termiczny i termotransferowy', cells: ['54 mm (203 dpi), 56,9 mm (300 dpi)', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'TSC DH220THC / DH320THC', href: '/produkt/tsc-dh220thc', role: 'Biurkowa 2", tylko druk termiczny', cells: ['54 mm (203 dpi), 56,9 mm (300 dpi)', 'Termiczna', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'TSC DH220LHC / DH320LHC', href: '/produkt/tsc-dh220lhc', role: 'Biurkowa 2", rolka etykiet do 165 mm średnicy', cells: ['54 mm (203 dpi), 56,9 mm (300 dpi)', 'Termiczna', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'SATO WS2-2 (WS208-2 / WS212-2)', href: '/produkt/sato-ws2-2', role: 'Biurkowa 2", opaski pacjentów i etykiety', cells: ['54,1 mm (203 dpi), 56,8 mm (300 dpi)', 'Termiczna', '203 lub 300 dpi', '177 mm/s', 'USB, Ethernet'] },
      { model: 'Zebra ZD421-HC', href: '/produkt/zebra-zd421-hc', role: 'Biurkowa 4", taśma w rolce lub kasecie', cells: ['do 108 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '152 mm/s', 'USB, USB Host'] },
      { model: 'Zebra ZD621-HC', href: '/produkt/zebra-zd621-hc', role: 'Biurkowa 4", kolorowy ekran dotykowy', cells: ['do 108 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'TSC TH240THC / TH340THC', href: '/produkt/tsc-th240thc', role: 'Biurkowa 4", taśma w rolce lub kasecie', cells: ['108 mm (203 dpi), 105,7 mm (300 dpi)', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'TSC DH240THC / DH340THC', href: '/produkt/tsc-dh240thc', role: 'Biurkowa 4", tylko druk termiczny', cells: ['108 mm (203 dpi), 105,7 mm (300 dpi)', 'Termiczna', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'SATO CT4-LX-HC', href: '/produkt/sato-ct4-lx-hc', role: 'Biurkowa 4", kolorowy ekran dotykowy 4,3"', cells: ['104 mm', 'Termiczna, termotransferowa', '203 lub 305 dpi', '203 mm/s', 'USB, Ethernet 1 Gb/s, NFC'] },
      { model: 'Honeywell PC45d Healthcare', href: '/produkt/honeywell-pc45d-hc', role: 'Biurkowa 4", obudowa i złącza przygotowane do dezynfekcji', cells: ['108 mm', 'Termiczna', '203 dpi', '203 mm/s', 'USB, USB Host, Ethernet'] },
      { model: 'Citizen CL-H300SV', href: '/produkt/citizen-cl-h300sv', role: 'Biurkowa 4", obudowa ze znakiem SIAA (ISO 22196)', cells: ['104 mm', 'Termiczna', '203 dpi', '200 mm/s', 'USB; gniazdo karty interfejsu'] },
      { model: 'Zebra ZQ610 Plus-HC', href: '/produkt/zebra-zq610-plus-hc', role: 'Mobilna 2", praca przy łóżku pacjenta', cells: ['do 48 mm', 'Termiczna', '203 dpi', '115 mm/s', 'Bluetooth, USB, RS-232; Wi-Fi w wersjach dwuradiowych'] },
      { model: 'Zebra ZQ620 Plus-HC', href: '/produkt/zebra-zq620-plus-hc', role: 'Mobilna 3", praca przy łóżku pacjenta', cells: ['do 72 mm', 'Termiczna', '203 dpi', '115 mm/s', 'Bluetooth, USB, RS-232; Wi-Fi w wersjach dwuradiowych'] },
      { model: 'TSC Alpha-30LHC', href: '/produkt/tsc-alpha-30lhc', role: 'Mobilna 3", obudowa IP54', cells: ['72 mm', 'Termiczna', '203 dpi', '127 mm/s', 'USB-C, Bluetooth 5.0, NFC; Wi-Fi zależnie od wersji'] },
    ],
    note: 'Prędkość drukarek biurkowych dostępnych w dwóch rozdzielczościach dotyczy 203 dpi; przy 300 i 305 dpi jest niższa. ZD510-HC drukuje tylko w 300 dpi. Szerokość druku 2-calowych drukarek Zebra przy 300 dpi wynosi 54 mm, a 4-calowych przy 203 dpi 104 mm (ZD421C-HC na kasety: 104 mm przy obu rozdzielczościach). Dodatkowe interfejsy zależą od numeru PN.',
  },
  buyingGuide: {
    heading: 'Jak wybrać drukarkę do szpitala?',
    items: [
      'Opaski czy etykiety — opaski z kartridżów drukuje Zebra ZD510-HC. SATO WS2-2 drukuje opaski pacjentów i etykiety z rolki. Inne drukarki biurkowe drukują opaski z rolki, jeśli producent wymienia je wśród obsługiwanych materiałów danego modelu.',
      'Szerokość druku — drukarki 2-calowe (ok. 54–57 mm) służą m.in. do etykiet na probówki. Drukarki 4-calowe (104–108 mm) drukują także większe etykiety, np. na worki z krwią i płynami infuzyjnymi.',
      'Technologia druku — druk termiczny nie wymaga taśmy barwiącej. Z taśmą drukują wersje termotransferowe: Zebra ZD421-HC, ZD611-HC i ZD621-HC, TSC TH220THC i TH240THC oraz SATO CT4-LX-HC. Odporność wydruku zależy od zestawienia etykiety i taśmy.',
      'Obudowa i zasilacz — wszystkie modele mają obudowę przygotowaną do dezynfekcji. Jeśli placówka wymaga tworzywa antybakteryjnego lub antymikrobowego, zasilacza z certyfikatem IEC 60601-1 albo obudowy odpornej na UV, należy sprawdzić kartę konkretnego modelu, bo producenci wyposażają drukarki różnie.',
      'Miejsce pracy — drukarka biurkowa pracuje na stanowisku, np. w rejestracji lub w punkcie pobrań. Drukarka mobilna z baterią drukuje etykiety przy łóżku pacjenta.',
      'Łączność — drukarka w sieci szpitalnej wymaga Ethernetu albo Wi-Fi. Interfejsy zależą od numeru PN, a w wielu modelach moduł łączności można zamontować później.',
      'Materiały — opaski i etykiety należy dobrać do drukarki i technologii druku. Kartridże z opaskami Z-Band są przeznaczone wyłącznie do drukarek Zebra ZD510-HC i HC100.',
    ],
  },
  expertAuthority: 'TAKMA jako partner wielu producentów drukarek pomaga dobrać drukarkę dla służby zdrowia, opaski, etykiety i akcesoria do procesu w placówce. Przed zamówieniem ustalamy miejsce pracy drukarki, sposób podłączenia do systemu szpitalnego, rodzaj materiałów do druku i wymagania placówki dotyczące obudowy oraz zasilacza.',
  technicalDeepDive: 'Tworzywa przygotowane do dezynfekcji pozwalają regularnie przecierać obudowę środkami stosowanymi na oddziale. Środki i metody czyszczenia należy dobrać według dokumentacji producenta danego modelu. Zebra publikuje przewodnik „Guide To Disinfecting and Cleaning Zebra Healthcare Printers”, a Honeywell — przewodnik czyszczenia obudów przygotowanych do dezynfekcji z osobną listą środków dla drukarek biurkowych dla ochrony zdrowia.\n\nObudowa antybakteryjna lub antymikrobowa to inna cecha niż przygotowanie do dezynfekcji: dotyczy samego tworzywa. TSC opisuje obudowy drukarek HC jako antybakteryjne, a SATO stosuje obudowę antymikrobową w CT4-LX-HC i WS2-2. Citizen CL-H300SV ma obudowę ze znakiem SIAA zgodnym z normą ISO 22196, a tworzywo zawiera jony srebra. Obudowę czyści się według procedur placówki niezależnie od rodzaju tworzywa.\n\nZgodność z normą IEC 60601-1 dotyczy zasilacza, a nie całej drukarki. IEC 60601-1 to norma bezpieczeństwa medycznych urządzeń elektrycznych. Zasilacz z certyfikatem IEC 60601-1 mają biurkowe drukarki Zebra ZD411-HC, ZD421-HC, ZD611-HC i ZD621-HC oraz drukarki TSC HC, w tym mobilna Alpha-30LHC. Zasilacz Zebra ZD510-HC jest zgodny z normą IEC 60601-1:2012. Baterię drukarek mobilnych Zebra ZQ6 HC ładuje się w drukarce z zasilacza zgodnego z IEC 60601, sprzedawanego osobno. SATO, Honeywell i Citizen nie podają tej normy dla swoich modeli.\n\nDruk termiczny nie wymaga taśmy barwiącej, więc w drukarce nie zostaje zużyta taśma z odbiciem wydrukowanych danych. Przy druku termotransferowym zużytą taśmę należy zabezpieczyć lub zniszczyć zgodnie z zasadami ochrony danych placówki.',
  useCases: [
    { title: 'Izba przyjęć i rejestracja', description: 'Druk opasek identyfikacyjnych dla pacjentów przy przyjęciu: z kartridżów w Zebra ZD510-HC albo z rolki w drukarce biurkowej, np. SATO WS2-2.' },
    { title: 'Laboratorium i punkt pobrań', description: 'Etykiety na probówki i próbki drukowane na stanowisku pobrań drukarką 2-calową albo drukarką mobilną przy łóżku pacjenta.' },
    { title: 'Apteka szpitalna', description: 'Etykiety leków drukowane na drukarkach biurkowych dla ochrony zdrowia.' },
    { title: 'Worki z krwią i płynami infuzyjnymi', description: 'Etykiety na worki drukowane na drukarkach 4-calowych.' },
    { title: 'Bank krwi i pokarm kobiecy', description: 'Etykiety do zarządzania krwią i do oznaczania pokarmu kobiecego drukowane drukarką mobilną w miejscu opieki nad pacjentem.' },
    { title: 'Dokumentacja i wyposażenie', description: 'Etykiety na dokumentację pacjenta i oznaczenia wyposażenia placówki.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed wdrożeniem?',
    items: [
      { title: 'Próba na docelowych materiałach', text: 'Przed wdrożeniem należy sprawdzić wydruk i odczyt kodu na etykiecie lub opasce stosowanej w placówce, także po kontakcie ze środkami używanymi na oddziale.' },
      { title: 'Format etykiety i język drukarki', text: 'Drukarki Zebra używają języka ZPL. Modele TSC, SATO, Honeywell i Citizen mają własne języki, a także emulację ZPL, dlatego często przyjmują istniejące formaty etykiet. Przed zmianą producenta należy sprawdzić wydruk szablonów z systemu szpitalnego.' },
      { title: 'Przechowywanie kartridży z opaskami', text: 'Kartridże Z-Band do ZD510-HC przechowuje się w temperaturze od 0 °C do 21 °C przy wilgotności względnej 35–50%.' },
    ],
  },
  comparisons: [
    {
      title: 'ZD510-HC czy SATO WS2-2 do opasek?',
      verdict: 'ZD510-HC do opasek z kartridżów z automatyczną kalibracją; WS2-2, gdy jedno urządzenie ma drukować opaski i etykiety z rolki.',
      content: '[Zebra ZD510-HC](/produkt/zebra-zd510-hc) drukuje opaski z kartridżów Z-Band. Kartridż wkłada się od góry, a chip umożliwia automatyczną kalibrację i ustawienie prędkości druku. [SATO WS2-2](/produkt/sato-ws2-2) drukuje termicznie opaski pacjentów i etykiety z rolki o szerokości 12–60 mm i jest przystosowana do opasek SATO. Opaski z rolki drukują też inne drukarki biurkowe, np. [Zebra ZD411-HC](/produkt/zebra-zd411-hc).',
    },
    {
      title: 'ZD411-HC czy ZD611-HC?',
      content: 'Oba modele drukują etykiety o szerokości do 56 mm. [ZD411-HC](/produkt/zebra-zd411-hc) drukuje tylko termicznie, z prędkością do 152 mm/s, i ma w standardzie USB oraz USB Host. [ZD611-HC](/produkt/zebra-zd611-hc) drukuje termicznie lub termotransferowo, z prędkością do 203 mm/s, i ma w standardzie także Ethernet. Wersja termotransferowa ZD611-HC ma kolorowy ekran dotykowy 4,3 cala.',
    },
    {
      title: 'ZD421-HC czy ZD621-HC?',
      content: 'Oba modele drukują etykiety o szerokości do 108 mm, termicznie lub termotransferowo. [ZD621-HC](/produkt/zebra-zd621-hc) drukuje z prędkością do 203 mm/s, ma kolorowy ekran dotykowy 4,3 cala oraz w standardzie Ethernet i RS-232. Do wersji termicznej jest dostępna zamykana na klucz szafka na nośnik. [ZD421-HC](/produkt/zebra-zd421-hc) drukuje z prędkością do 152 mm/s i ma w standardzie USB oraz USB Host. Termotransferowy ZD421-HC występuje w wersji na taśmę w rolce (74 m lub 300 m) albo jako ZD421C-HC na kasetę z taśmą 74 m.',
    },
    {
      title: 'TSC TH czy DH w wersji HC?',
      content: 'Seria TH drukuje termicznie lub termotransferowo, a seria DH tylko termicznie. Obie mają w standardzie USB, USB Host, Ethernet i RS-232 oraz zasilacz z certyfikatem IEC 60601-1. Modele 2-calowe to [TSC TH220THC](/produkt/tsc-th220thc) i [DH220THC](/produkt/tsc-dh220thc), a 4-calowe — [TH240THC](/produkt/tsc-th240thc) i [DH240THC](/produkt/tsc-dh240thc). 4-calowa TH240THC występuje też jako TH240TRCHC na kasetę z taśmą 100 m, a [DH220LHC](/produkt/tsc-dh220lhc) przyjmuje rolkę etykiet o średnicy do 165 mm.',
    },
    {
      title: 'ZQ610 Plus-HC, ZQ620 Plus-HC czy TSC Alpha-30LHC?',
      content: 'Wszystkie trzy drukarki mobilne drukują termicznie w rozdzielczości 203 dpi. [Zebra ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc) drukuje do 48 mm szerokości, a [ZQ620 Plus-HC](/produkt/zebra-zq620-plus-hc) do 72 mm; obie osiągają do 115 mm/s i mają baterię PowerPrecision+ 3250 mAh. [TSC Alpha-30LHC](/produkt/tsc-alpha-30lhc) drukuje do 72 mm szerokości z prędkością do 127 mm/s, ma baterię 3030 mAh i zasilacz z certyfikatem IEC 60601-1 w zestawie.',
    },
  ],
  faq: [
    {
      question: 'Czym drukarka dla służby zdrowia różni się od zwykłej drukarki etykiet?',
      answer: 'Wszystkie modele w tej kategorii mają obudowę z tworzyw przygotowanych do częstej dezynfekcji. Część z nich ma też obudowę antybakteryjną lub antymikrobową (TSC, SATO, Citizen), zasilacz zgodny z normą IEC 60601-1 (biurkowe Zebra HC, TSC HC) albo obudowę odporną na UV (biurkowe Zebra HC). Wyposażenie konkretnego modelu jest opisane na jego karcie.',
    },
    {
      question: 'Czy drukarkę dla służby zdrowia można dezynfekować?',
      answer: 'Tak. Obudowy drukarek w tej kategorii są przystosowane do regularnej dezynfekcji. Przetestowane środki i metody czyszczenia opisują przewodniki producentów, np. przewodnik Zebry dla drukarek HC i przewodnik Honeywell dla obudów przygotowanych do dezynfekcji. Procedurę czyszczenia należy sprawdzić przed wdrożeniem drukarki na oddziale.',
    },
    {
      question: 'Czym obudowa antybakteryjna różni się od obudowy przygotowanej do dezynfekcji?',
      answer: 'Obudowa przygotowana do dezynfekcji wytrzymuje częste przecieranie środkami odkażającymi. Obudowa antybakteryjna lub antymikrobowa dotyczy samego tworzywa, np. Citizen CL-H300SV ma obudowę z jonami srebra i znakiem SIAA zgodnym z normą ISO 22196. Obie cechy mają też drukarki TSC (obudowa antybakteryjna) i SATO (obudowa antymikrobowa). Taką obudowę także czyści się według procedur placówki.',
    },
    {
      question: 'Która drukarka drukuje opaski dla pacjentów?',
      answer: 'Opaski Z-Band z kartridżów drukuje [Zebra ZD510-HC](/produkt/zebra-zd510-hc). [SATO WS2-2](/produkt/sato-ws2-2) drukuje opaski pacjentów i etykiety z rolki. Opaski z rolki drukują też drukarki biurkowe, np. [Zebra ZD411-HC](/produkt/zebra-zd411-hc) i [ZD421-HC](/produkt/zebra-zd421-hc), [TSC DH220LHC](/produkt/tsc-dh220lhc) czy [Honeywell PC45d Healthcare](/produkt/honeywell-pc45d-hc). Drukarka opasek z kartridżów jest też w kategorii [drukarki opasek](/drukarki-opasek).',
    },
    {
      question: 'Jaka drukarka do etykiet na probówki?',
      answer: 'Do etykiet na probówki służą m.in. drukarki 2-calowe: biurkowe [Zebra ZD411-HC](/produkt/zebra-zd411-hc), [ZD611-HC](/produkt/zebra-zd611-hc), [TSC DH220THC](/produkt/tsc-dh220thc) i [SATO WS2-2](/produkt/sato-ws2-2) oraz mobilna [Zebra ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc). Drukarka mobilna drukuje etykietę przy łóżku pacjenta, w miejscu pobrania. Rozmiar i materiał etykiety należy dobrać do probówek stosowanych w laboratorium.',
    },
    {
      question: 'Jak drukarka łączy się z systemem szpitalnym?',
      answer: 'Drukarka odbiera dane przez USB, Ethernet, Wi-Fi albo Bluetooth, zależnie od modelu i wersji. Format opaski lub etykiety przygotowuje się w systemie szpitalnym w języku drukarki, np. ZPL, albo w programie do projektowania etykiet. Integrację z systemem HIS lub LIS należy uzgodnić z jego dostawcą. Kody z opasek i etykiet odczytują [skanery dla służby zdrowia](/skanery-dla-sluzby-zdrowia) oraz terminale mobilne dla służby zdrowia, np. [Zebra HC20](/produkt/zebra-hc20) i [Zebra HC50](/produkt/zebra-hc50).',
    },
    {
      question: 'Czy drukarki dla służby zdrowia mają Wi-Fi i Bluetooth?',
      answer: 'To zależy od modelu i numeru PN. Do biurkowych drukarek Zebra ZD411-HC, ZD421-HC, ZD611-HC i ZD621-HC, drukarek TSC TH/DH HC, SATO CT4-LX-HC i Honeywell PC45d Healthcare jest dostępny moduł Wi-Fi z Bluetooth, a do SATO WS2-2 — moduł Wi-Fi. Zebra ZD510-HC ma Wi-Fi z Bluetooth tylko w wersji fabrycznej. Citizen CL-H300SV przyjmuje karty interfejsu z Wi-Fi lub Bluetooth. Drukarki mobilne Zebra ZQ6 HC występują w wersjach z Wi-Fi i Bluetooth albo z samym Bluetooth, a TSC Alpha-30LHC — w wersji z Wi-Fi i Bluetooth 5.0.',
    },
    {
      question: 'Czy drukarki dla służby zdrowia mogą pracować na baterii?',
      answer: 'Tak, część z nich. Drukarki mobilne Zebra ZQ6 HC mają wymienną baterię PowerPrecision+ 3250 mAh, a TSC Alpha-30LHC baterię 3030 mAh. Do drukarek biurkowych Zebra ZD411-HC, ZD421-HC, ZD611-HC i ZD621-HC jest dostępna opcjonalna bateria 2750 mAh, a do drukarek TSC TH/DH w wersjach HC — stacja baterii BP-4000. Pozostałe drukarki biurkowe pracują z zasilaczem sieciowym.',
    },
    {
      question: 'Gdzie są opaski i etykiety do tych drukarek?',
      answer: 'Opaski Z-Band są w kategorii [opaski identyfikacyjne](/opaski-identyfikacyjne). Etykiety termiczne są w kategorii [etykiety termiczne](/etykiety-termiczne-zebra), a taśmy do druku termotransferowego w kategorii [taśmy termotransferowe](/tasmy-termotransferowe).',
    },
  ],
  howToSteps: [
    { name: 'Określ zastosowanie', text: 'Ustal, czy drukarka ma drukować opaski dla pacjentów, etykiety na probówki, etykiety leków czy etykiety na worki.' },
    { name: 'Wybierz rodzaj drukarki', text: 'Wybierz drukarkę opasek, drukarkę biurkową 2- lub 4-calową albo drukarkę mobilną do pracy przy łóżku pacjenta.' },
    { name: 'Sprawdź obudowę i zasilacz', text: 'Porównaj wymagania placówki z kartą modelu: tworzywo przygotowane do dezynfekcji, tworzywo antybakteryjne lub antymikrobowe, zasilacz z certyfikatem IEC 60601-1.' },
    { name: 'Dobierz wersję i materiały', text: 'Wybierz numer PN z wymaganym interfejsem. Dobierz opaski, etykiety i taśmy, a potem wykonaj próbę druku i skanowania.' },
  ],
}
