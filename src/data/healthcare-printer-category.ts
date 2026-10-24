import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

// Drukarki Zebra HC. Karty ZD4/ZD6/ZQ6 HC przychodzą z osobnych plików
// (zebra-hc-*-products.ts) i trafiają tu także przez pętlę `subcategoryIds` w products.ts.
// Parametry w treści według kart katalogowych HC: ZD411/ZD421 (2024), ZD611/ZD621, ZD510-HC (10.2025), ZQ6 HC (01.2026).
export const healthcarePrinterCategory: Subcategory = {
  id: 'drukarki-dla-sluzby-zdrowia',
  slug: 'drukarki-dla-sluzby-zdrowia',
  name: 'Drukarki dla służby zdrowia',
  parentCategoryId: 'drukarki-etykiet',
  description: 'Biurkowe i mobilne drukarki Zebra HC do etykiet i opasek w szpitalach, laboratoriach i aptekach szpitalnych.',
  seoTitle: 'Drukarki dla służby zdrowia i szpitali — Zebra HC | TAKMA',
  seoDescription: 'Drukarki dla służby zdrowia Zebra HC: szpitalna drukarka etykiet na probówki i leki, drukarka opasek dla pacjentów i drukarki mobilne do pracy przy łóżku pacjenta. Porównanie modeli i PN.',
  longDescription: 'Drukarki dla służby zdrowia to drukarki etykiet i opasek w wersji HC (healthcare). Mają obudowę z tworzyw odpornych na środki dezynfekcyjne. Drukarki biurkowe HC mają też obudowę odporną na promieniowanie UV, uszczelnione przyciski i zasilacz zgodny z normą IEC 60601-1. Drukują opaski dla pacjentów w izbie przyjęć, etykiety na probówki w laboratorium i przy łóżku pacjenta oraz etykiety leków w aptece szpitalnej. Dane do druku wysyła system szpitalny przez sieć lub USB. Kod na opasce odczytuje [skaner kodów kreskowych](/skanery-kodow-kreskowych). Materiały do druku są w kategoriach [opaski identyfikacyjne](/opaski-identyfikacyjne) i [etykiety termiczne](/etykiety-termiczne-zebra).',
  icon: 'printer',
  productIds: [
    'zebra-zd510-hc',
    'zebra-zd411-hc',
    'zebra-zd611-hc',
    'zebra-zd421-hc',
    'zebra-zd621-hc',
    'zebra-zq610-plus-hc',
    'zebra-zq620-plus-hc',
  ],
  productCount: 7,
}

export const healthcarePrinterContent: SubcategoryRichContent = {
  updatedAt: '2026-10-25',
  sectionHeadings: {
    technicalDeepDive: 'Cechy drukarek HC',
    useCases: 'Zastosowania w placówce',
    comparisons: 'Porównanie modeli',
    howToSteps: 'Jak wybrać drukarkę dla służby zdrowia?',
  },
  definition: {
    heading: 'Czym różni się drukarka HC od zwykłej drukarki etykiet?',
    content: 'Wersje HC drukarek Zebra są zaprojektowane do placówek ochrony zdrowia. Obudowę wykonano z tworzyw przystosowanych do częstej dezynfekcji. W drukarkach biurkowych obudowa jest odporna na promieniowanie UV, przyciski są uszczelnione, a zasilacz spełnia normę IEC 60601-1. Drukarki mobilne HC mają obudowę z materiałów klasy medycznej, a zasilacz sieciowy do ładowania baterii jest zgodny z IEC 60601.\n\nW kategorii są trzy rodzaje urządzeń. [Zebra ZD510-HC](/produkt/zebra-zd510-hc) drukuje opaski Z-Band z kartridżów. Drukarki biurkowe 2-calowe [ZD411-HC](/produkt/zebra-zd411-hc) i [ZD611-HC](/produkt/zebra-zd611-hc) oraz 4-calowe [ZD421-HC](/produkt/zebra-zd421-hc) i [ZD621-HC](/produkt/zebra-zd621-hc) drukują etykiety i opaski z rolki. Drukarki mobilne [ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc) i [ZQ620 Plus-HC](/produkt/zebra-zq620-plus-hc) pracują na baterii i drukują etykiety w miejscu opieki nad pacjentem.',
  },
  comparisonTable: {
    heading: 'Porównanie drukarek dla służby zdrowia',
    intro: 'Podstawowe parametry modeli HC. Konfiguracje i numery PN są na kartach produktów.',
    columns: ['Szerokość druku', 'Technologia druku', 'Rozdzielczość', 'Prędkość maks.', 'Łączność w standardzie'],
    rows: [
      { model: 'Zebra ZD510-HC', href: '/produkt/zebra-zd510-hc', role: 'Biurkowa drukarka opasek z kartridżami Z-Band', cells: ['19,05 / 25,4 / 30,16 mm', 'Termiczna', '300 dpi', '51 mm/s (opaski medyczne)', 'USB, USB Host, Ethernet'] },
      { model: 'Zebra ZD411-HC', href: '/produkt/zebra-zd411-hc', role: 'Biurkowa 2", tylko druk termiczny', cells: ['do 56 mm', 'Termiczna', '203 lub 300 dpi', '152 mm/s', 'USB, USB Host'] },
      { model: 'Zebra ZD611-HC', href: '/produkt/zebra-zd611-hc', role: 'Biurkowa 2", Ethernet w standardzie', cells: ['do 56 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet'] },
      { model: 'Zebra ZD421-HC', href: '/produkt/zebra-zd421-hc', role: 'Biurkowa 4", taśma w rolce lub kasecie', cells: ['do 108 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '152 mm/s', 'USB, USB Host'] },
      { model: 'Zebra ZD621-HC', href: '/produkt/zebra-zd621-hc', role: 'Biurkowa 4", kolorowy ekran dotykowy', cells: ['do 108 mm', 'Termiczna, termotransferowa', '203 lub 300 dpi', '203 mm/s', 'USB, USB Host, Ethernet, RS-232'] },
      { model: 'Zebra ZQ610 Plus-HC', href: '/produkt/zebra-zq610-plus-hc', role: 'Mobilna 2", praca przy łóżku pacjenta', cells: ['do 48 mm', 'Termiczna', '203 dpi', '115 mm/s', 'Bluetooth, USB, RS-232; Wi-Fi 6 w wersjach dwuradiowych'] },
      { model: 'Zebra ZQ620 Plus-HC', href: '/produkt/zebra-zq620-plus-hc', role: 'Mobilna 3", praca przy łóżku pacjenta', cells: ['do 72 mm', 'Termiczna', '203 dpi', '115 mm/s', 'Bluetooth, USB, RS-232; Wi-Fi 6 w wersjach dwuradiowych'] },
    ],
    note: 'Prędkość drukarek biurkowych dotyczy rozdzielczości 203 dpi; przy 300 dpi jest niższa. Szerokość druku 2-calowych modeli biurkowych przy 300 dpi wynosi 54 mm, a 4-calowych przy 203 dpi 104 mm. Dodatkowe interfejsy zależą od numeru PN.',
  },
  buyingGuide: {
    heading: 'Jak wybrać drukarkę do szpitala?',
    items: [
      'Opaski czy etykiety — opaski dla pacjentów drukuje drukarka kartridżowa ZD510-HC oraz drukarki biurkowe HC z rolki opasek. Etykiety na probówki, leki i dokumentację drukują drukarki biurkowe i mobilne.',
      'Szerokość druku — drukarki 2-calowe (do 56 mm) służą m.in. do etykiet na probówki. Drukarki 4-calowe (do 108 mm) drukują także większe etykiety, np. na worki z krwią i płynami infuzyjnymi.',
      'Technologia druku — druk termiczny nie wymaga taśmy barwiącej. ZD421-HC, ZD611-HC i ZD621-HC są dostępne również w wersjach termotransferowych, które drukują z taśmą. Odporność wydruku zależy od zestawienia etykiety i taśmy.',
      'Miejsce pracy — drukarka biurkowa pracuje na stanowisku, np. w rejestracji lub w punkcie pobrań. Drukarka mobilna z baterią drukuje etykiety przy łóżku pacjenta.',
      'Łączność — drukarka w sieci szpitalnej wymaga Ethernetu albo Wi-Fi. Interfejsy zależą od numeru PN, a w części modeli biurkowych moduł łączności można zamontować później.',
      'Materiały — opaski i etykiety należy dobrać do drukarki i technologii druku. Kartridże z opaskami Z-Band są przeznaczone do drukarek ZD510-HC i HC100.',
    ],
  },
  expertAuthority: 'TAKMA jako partner Zebra pomaga dobrać drukarkę HC, opaski, etykiety i akcesoria do procesu w placówce. Przed zamówieniem ustalamy miejsce pracy drukarki, sposób podłączenia do systemu szpitalnego i rodzaj materiałów do druku.',
  technicalDeepDive: 'Tworzywa odporne na środki dezynfekcyjne pozwalają regularnie czyścić obudowę. W drukarkach biurkowych HC obudowa jest też odporna na promieniowanie UV, więc można ją dezynfekować światłem UV. Przyciski są uszczelnione, dlatego panel czyści się razem z obudową. Środki i metody czyszczenia należy dobrać według przewodnika Zebry „Guide To Disinfecting and Cleaning Zebra Healthcare Printers”.\n\nZgodność z normą IEC 60601-1 dotyczy zasilacza drukarek biurkowych HC, a nie całej drukarki. IEC 60601-1 to norma bezpieczeństwa medycznych urządzeń elektrycznych. Baterię drukarki mobilnej HC ładuje się w drukarce z zasilacza sieciowego zgodnego z IEC 60601 albo w stacji dokującej. Zapasowe baterie ładuje się w ładowarkach.\n\nDruk termiczny nie wymaga taśmy barwiącej, więc w drukarce nie zostaje zużyta taśma z odbiciem wydrukowanych danych. Przy druku termotransferowym zużytą taśmę należy zabezpieczyć lub zniszczyć zgodnie z zasadami ochrony danych placówki.\n\nDrukarki HC obsługują narzędzia Zebra do zarządzania drukarkami (Print DNA albo Zebra DNA). Narzędzie PrintSecure służy do konfiguracji bezpiecznych połączeń i blokowania nieupoważnionego dostępu do drukarki.',
  useCases: [
    { title: 'Izba przyjęć i rejestracja', description: 'Druk opasek identyfikacyjnych dla pacjentów przy przyjęciu: z kartridżów w ZD510-HC albo z rolki w drukarce biurkowej HC.' },
    { title: 'Laboratorium i punkt pobrań', description: 'Etykiety na probówki i próbki drukowane na stanowisku pobrań albo drukarką mobilną przy łóżku pacjenta.' },
    { title: 'Apteka szpitalna', description: 'Etykiety leków drukowane na drukarkach biurkowych HC.' },
    { title: 'Worki z krwią i płynami infuzyjnymi', description: 'Etykiety na worki drukowane na drukarkach 4-calowych ZD421-HC i ZD621-HC.' },
    { title: 'Bank krwi i pokarm kobiecy', description: 'Etykiety do zarządzania krwią i do oznaczania pokarmu kobiecego drukowane drukarką mobilną w miejscu opieki nad pacjentem.' },
    { title: 'Dokumentacja i wyposażenie', description: 'Etykiety na dokumentację pacjenta i oznaczenia wyposażenia placówki.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed wdrożeniem?',
    items: [
      { title: 'Próba na docelowych materiałach', text: 'Przed wdrożeniem należy sprawdzić wydruk i odczyt kodu na etykiecie lub opasce stosowanej w placówce, także po kontakcie ze środkami używanymi na oddziale.' },
      { title: 'Format etykiety i język drukarki', text: 'Drukarki HC obsługują język ZPL, a modele mobilne także CPCL. Format opaski lub etykiety przygotowuje się w systemie szpitalnym albo w programie ZebraDesigner.' },
      { title: 'Przechowywanie kartridży z opaskami', text: 'Kartridże Z-Band do ZD510-HC przechowuje się w temperaturze od 0 °C do 21 °C przy wilgotności względnej 35–50%.' },
    ],
  },
  comparisons: [
    {
      title: 'ZD510-HC czy drukarka biurkowa HC do opasek?',
      verdict: 'ZD510-HC do szybkiej wymiany opasek bez kontaktu z nośnikiem; drukarka biurkowa HC, gdy jedno urządzenie ma drukować opaski i etykiety.',
      content: '[ZD510-HC](/produkt/zebra-zd510-hc) drukuje opaski z kartridżów Z-Band. Kartridż wkłada się od góry, a chip umożliwia automatyczną kalibrację i ustawienie prędkości druku. Drukarki biurkowe HC, np. [ZD411-HC](/produkt/zebra-zd411-hc), drukują opaski z rolki oraz etykiety, ale wymagają założenia rolki nośnika.',
    },
    {
      title: 'ZD411-HC czy ZD611-HC?',
      content: 'Oba modele drukują etykiety o szerokości do 56 mm. [ZD411-HC](/produkt/zebra-zd411-hc) drukuje tylko termicznie, z prędkością do 152 mm/s, i ma w standardzie USB oraz USB Host. [ZD611-HC](/produkt/zebra-zd611-hc) drukuje termicznie lub termotransferowo, z prędkością do 203 mm/s, i ma w standardzie także Ethernet. Wersja termotransferowa ZD611-HC ma kolorowy ekran dotykowy 4,3 cala.',
    },
    {
      title: 'ZD421-HC czy ZD621-HC?',
      content: 'Oba modele drukują etykiety o szerokości do 108 mm, termicznie lub termotransferowo. [ZD621-HC](/produkt/zebra-zd621-hc) drukuje z prędkością do 203 mm/s, ma kolorowy ekran dotykowy 4,3 cala oraz w standardzie Ethernet i RS-232. Do wersji termicznej jest dostępna zamykana na klucz szafka na nośnik. [ZD421-HC](/produkt/zebra-zd421-hc) drukuje z prędkością do 152 mm/s i ma w standardzie USB oraz USB Host. Termotransferowy ZD421-HC występuje w wersji na taśmę w rolce 300 m albo w kasecie 74 m.',
    },
    {
      title: 'ZQ610 Plus-HC czy ZQ620 Plus-HC?',
      content: 'Obie drukarki mobilne drukują termicznie w rozdzielczości 203 dpi, z prędkością do 115 mm/s, i mają baterię PowerPrecision+ 3250 mAh. [ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc) drukuje do 48 mm szerokości i waży z baterią 0,6 kg. [ZQ620 Plus-HC](/produkt/zebra-zq620-plus-hc) drukuje do 72 mm szerokości i waży z baterią 0,73 kg.',
    },
  ],
  faq: [
    {
      question: 'Czym drukarka dla służby zdrowia różni się od zwykłej drukarki etykiet?',
      answer: 'Drukarki HC mają obudowę z tworzyw odpornych na środki dezynfekcyjne. Drukarki biurkowe HC mają też białą obudowę odporną na promieniowanie UV, uszczelnione przyciski i zasilacz zgodny z normą IEC 60601-1.',
    },
    {
      question: 'Czy drukarkę HC można dezynfekować?',
      answer: 'Tak. Obudowa drukarek HC jest przystosowana do regularnej dezynfekcji. Przetestowane środki i metody czyszczenia są opisane w przewodniku Zebry „Guide To Disinfecting and Cleaning Zebra Healthcare Printers”. Procedurę czyszczenia należy sprawdzić przed wdrożeniem drukarki na oddziale.',
    },
    {
      question: 'Która drukarka drukuje opaski dla pacjentów?',
      answer: 'Opaski Z-Band z kartridżów drukuje [Zebra ZD510-HC](/produkt/zebra-zd510-hc). Opaski z rolki drukują drukarki biurkowe HC: [ZD411-HC](/produkt/zebra-zd411-hc), [ZD421-HC](/produkt/zebra-zd421-hc), [ZD611-HC](/produkt/zebra-zd611-hc) i [ZD621-HC](/produkt/zebra-zd621-hc). Wszystkie drukarki opasek w ofercie są w kategorii [drukarki opasek](/drukarki-opasek).',
    },
    {
      question: 'Jaka drukarka do etykiet na probówki?',
      answer: 'Do etykiet na probówki służą m.in. drukarki 2-calowe: biurkowe [ZD411-HC](/produkt/zebra-zd411-hc) i [ZD611-HC](/produkt/zebra-zd611-hc) oraz mobilna [ZQ610 Plus-HC](/produkt/zebra-zq610-plus-hc). Drukarka mobilna drukuje etykietę przy łóżku pacjenta, w miejscu pobrania. Rozmiar i materiał etykiety należy dobrać do probówek stosowanych w laboratorium.',
    },
    {
      question: 'Jak drukarka HC łączy się z systemem szpitalnym?',
      answer: 'Drukarka odbiera dane przez USB, Ethernet, Wi-Fi albo Bluetooth, zależnie od modelu i wersji. Format opaski lub etykiety przygotowuje się w systemie szpitalnym w języku drukarki, np. ZPL, albo w programie ZebraDesigner. Integrację z systemem HIS lub LIS należy uzgodnić z jego dostawcą. Kody z opasek i etykiet odczytują skanery oraz terminale mobilne dla służby zdrowia, np. [Zebra HC20](/produkt/zebra-hc20) i [Zebra HC50](/produkt/zebra-hc50).',
    },
    {
      question: 'Czy drukarki HC mają Wi-Fi i Bluetooth?',
      answer: 'To zależy od modelu i numeru PN. Drukarki biurkowe ZD4 i ZD6 HC mają opcjonalny moduł Wi-Fi z Bluetooth. ZD510-HC ma moduł Wi-Fi 802.11ac z Bluetooth 4.1 w wersjach z montażem fabrycznym. Drukarki mobilne ZQ6 HC występują w wersjach z Wi-Fi 6 i Bluetooth 5.3 albo z samym Bluetooth.',
    },
    {
      question: 'Czy drukarki HC mogą pracować na baterii?',
      answer: 'Tak, część z nich. Drukarki mobilne ZQ6 HC mają wymienną baterię PowerPrecision+ 3250 mAh. Do drukarek biurkowych ZD411-HC, ZD421-HC, ZD611-HC i ZD621-HC jest dostępna opcjonalna bateria 2750 mAh. ZD510-HC pracuje z zasilaczem sieciowym.',
    },
    {
      question: 'Gdzie są opaski i etykiety do tych drukarek?',
      answer: 'Opaski Z-Band są w kategorii [opaski identyfikacyjne](/opaski-identyfikacyjne). Etykiety termiczne Zebra są w kategorii [etykiety termiczne](/etykiety-termiczne-zebra), a taśmy do druku termotransferowego w kategorii [taśmy termotransferowe](/tasmy-termotransferowe).',
    },
  ],
  howToSteps: [
    { name: 'Określ zastosowanie', text: 'Ustal, czy drukarka ma drukować opaski dla pacjentów, etykiety na probówki, etykiety leków czy etykiety na worki.' },
    { name: 'Wybierz rodzaj drukarki', text: 'Wybierz drukarkę kartridżową do opasek, drukarkę biurkową 2- lub 4-calową albo drukarkę mobilną do pracy przy łóżku pacjenta.' },
    { name: 'Dobierz wersję i materiały', text: 'Wybierz numer PN z wymaganym interfejsem. Dobierz opaski, etykiety i taśmy, a potem wykonaj próbę druku i skanowania.' },
  ],
}
