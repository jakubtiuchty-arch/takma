import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

// Skanery dla ochrony zdrowia kilku producentów: Zebra HC, Honeywell Xenon Ultra „h”, Datalogic Gryphon 4600 HC,
// Newland HR33 / HR23 AI White i Socket Mobile DuraScan D745 / D765. Karty przychodzą z osobnych plików
// (zebra-hc-scanners.ts, honeywell-socket-hc-scanners.ts, datalogic-newland-hc-scanners.ts) i trafiają tu także
// przez pętlę `subcategoryIds` w products.ts. Parametry w treści według dokumentów producentów:
// Zebra DS2200-HC (07.2019), DS4600-HC (10.2019), DS82-HC (08.2026), CS60-HC (09.2023), przewodnik dezynfekcji 07.2026;
// Honeywell Xenon Ultra 1960h (Rev E 04/26) i 1962h (Rev C 04/26); Datalogic Gryphon 4600 (Rev A 2025);
// Newland HR33 / HR23 AI White (09–10.2026); Socket Mobile D745 / D765. Źródła: docs/catalog/skanery-hc-2026-10-25/S4.md.
export const healthcareScannerCategory: Subcategory = {
  id: 'skanery-dla-sluzby-zdrowia',
  slug: 'skanery-dla-sluzby-zdrowia',
  name: 'Skanery dla służby zdrowia',
  parentCategoryId: 'skanery-kodow-kreskowych',
  description: 'Przewodowe i bezprzewodowe skanery kodów kreskowych 1D i 2D przeznaczone dla ochrony zdrowia: Zebra, Honeywell, Datalogic, Newland i Socket Mobile. Do pracy na oddziałach, w laboratoriach i w aptekach szpitalnych.',
  seoTitle: 'Skanery dla służby zdrowia i szpitali: Zebra, Honeywell, Datalogic | TAKMA',
  seoDescription: 'Skanery dla służby zdrowia Zebra, Honeywell, Datalogic, Newland i Socket Mobile: skaner kodów kreskowych do szpitala, skaner opasek pacjentów, modele przewodowe i Bluetooth. Porównanie.',
  longDescription: 'Skanery dla służby zdrowia to ręczne czytniki kodów kreskowych 1D i 2D w wersjach przeznaczonych dla szpitali, laboratoriów i aptek szpitalnych. Mają jasne obudowy, w większości z tworzyw przygotowanych do częstego przecierania środkami dezynfekcyjnymi, a część także z dodatkami lub powłoką antymikrobową. Odczytują kody z opasek pacjentów, etykiet leków, probówek i worków z płynami infuzyjnymi. Dane przesyłają przewodem USB albo bezprzewodowo do komputera na stanowisku, wózka z laptopem lub tabletu z systemem szpitalnym. Opaski i etykiety z kodami drukują [drukarki dla służby zdrowia](/drukarki-dla-sluzby-zdrowia).',
  icon: 'scan',
  productIds: [
    'zebra-ds2208-hc',
    'zebra-ds4608-hc',
    'zebra-ds8208-hc',
    'honeywell-xenon-ultra-1960h',
    'datalogic-gryphon-gd4690-hc',
    'datalogic-gryphon-gd4620-hc',
    'newland-hr33-marlin-ai-white',
    'newland-hr23-dorada-ai-white',
    'zebra-ds2278-hc',
    'zebra-ds8288-hc',
    'zebra-cs60-hc',
    'honeywell-xenon-ultra-1962h',
    'datalogic-gryphon-gbt4600-hc',
    'datalogic-gryphon-gm4600-hc',
    'newland-hr33-marlin-ai-bt-white',
    'newland-hr23-dorada-ai-bt-white',
    'socket-mobile-durascan-d745',
    'socket-mobile-durascan-d765',
  ],
  productCount: 18,
}

export const healthcareScannerContent: SubcategoryRichContent = {
  updatedAt: '2026-10-25',
  sectionHeadings: {
    technicalDeepDive: 'Obudowa, normy i zasilanie',
    useCases: 'Zastosowania w placówce',
    comparisons: 'Porównanie modeli',
    howToSteps: 'Jak wybrać skaner dla służby zdrowia?',
  },
  definition: {
    heading: 'Czym różni się skaner dla służby zdrowia od zwykłego skanera kodów kreskowych?',
    content: 'Skaner dla służby zdrowia, nazywany też skanerem szpitalnym lub medycznym, odróżnia się od zwykłego modelu przede wszystkim obudową. Zebra, Honeywell i Datalogic stosują w wersjach dla ochrony zdrowia obudowy przygotowane do regularnej dezynfekcji. Pozostałe cechy zależą od producenta. Honeywell opisuje obudowy Xenon Ultra 1960h i 1962h jako antymikrobowe. Datalogic stosuje w Gryphon 4600 HC tworzywo z dodatkami antymikrobowymi zgodne z normą ISO 22196, a Newland pokrywa obudowy HR33 i HR23 AI White powłoką antymikrobową. [Zebra DS8208-HC](/produkt/zebra-ds8208-hc) i [DS8288-HC](/produkt/zebra-ds8288-hc) mają uszczelniony spust indukcyjny i etykiety antymikrobowe, a [Zebra CS60-HC](/produkt/zebra-cs60-hc) — obudowę o szczelności IP65. Socket Mobile wykonuje obudowy [DuraScan D745](/produkt/socket-mobile-durascan-d745) i [D765](/produkt/socket-mobile-durascan-d765) z tworzywa medycznego spełniającego normy ISO 10993 i EN 60529.\n\nDruga grupa cech dotyczy pracy przy pacjencie. Tryb nocny i wibrację mają Zebra DS4608-HC, DS8208-HC, DS8288-HC i CS60-HC. Honeywell Xenon Ultra ma tryby Patient Do-Not-Disturb i Scan Lamp oraz wibrację (w 1960h jako opcję). Zebra DS2208-HC i DS2278-HC w trybie „Do Not Disturb” potwierdzają odczyt światłem rzucanym na kod zamiast sygnału dźwiękowego. Wibrację mają też skanery Newland AI White, a w bezprzewodowych Gryphon 4600 HC jest ona opcją.',
  },
  comparisonTable: {
    heading: 'Porównanie skanerów dla służby zdrowia',
    intro: 'Podstawowe parametry modeli w dwóch grupach: przewodowe i bezprzewodowe. Skład zestawów, przewody, stacje i numery PN opisują karty produktów.',
    columns: ['Łączność', 'Sensor', 'Obudowa', 'Sygnalizacja i cicha praca', 'Szczelność'],
    rows: [
      { model: 'Zebra DS2208-HC', href: '/produkt/zebra-ds2208-hc', role: 'Przewodowy imager 2D do podstawowych zadań', cells: ['Przewód: USB, RS-232, Keyboard Wedge, IBM 46XX (RS-485)', '640 × 480', 'Przygotowana do dezynfekcji', 'Tryb „Do Not Disturb” (potwierdzenie światłem na kodzie); bez wibracji', 'IP52'] },
      { model: 'Zebra DS4608-HC', href: '/produkt/zebra-ds4608-hc', role: 'Przewodowy, ogniskowanie HD do małych i zakrzywionych kodów', cells: ['Przewód: USB, RS-232, IBM 46XX (RS-485)', '1280 × 800', 'Przygotowana do dezynfekcji; zakryte otwory śrub i głośnika', 'Tryb nocny z wibracją; zielony celownik LED', 'IP52'] },
      { model: 'Zebra DS8208-HC', href: '/produkt/zebra-ds8208-hc', role: 'Przewodowy 2 MP, przechwytywanie dokumentów', cells: ['Przewód: USB, RS-232', '1600 × 1200', 'Przygotowana do dezynfekcji; uszczelniony spust indukcyjny, etykiety antymikrobowe', 'Tryb nocny, wibracja, wbudowana lampka; zielony celownik LED', 'IP52'] },
      { model: 'Honeywell Xenon Ultra 1960h', href: '/produkt/honeywell-xenon-ultra-1960h', role: 'Przewodowy, przewody zgodne z Xenon XP 1950h', cells: ['Przewód: USB, Keyboard Wedge, RS-232', '1280 × 1080', 'Antymikrobowa, przygotowana do dezynfekcji', 'Patient Do-Not-Disturb, wibracja (opcja), Scan Lamp', 'IP52'] },
      { model: 'Datalogic Gryphon GD4690 HC', href: '/produkt/datalogic-gryphon-gd4690-hc', role: 'Przewodowy, dwa sensory (HP)', cells: ['Przewód: USB-C, USB, RS-232', '1,5 MP + VGA', 'Przygotowana do dezynfekcji, z dodatkami antymikrobowymi (ISO 22196)', 'Green Spot, 3GL, sygnał dźwiękowy', 'IP52'] },
      { model: 'Datalogic Gryphon GD4620 HC', href: '/produkt/datalogic-gryphon-gd4620-hc', role: 'Przewodowy, jeden sensor (HD), tylko USB', cells: ['Przewód: USB-C, USB', '1,5 MP', 'Przygotowana do dezynfekcji, z dodatkami antymikrobowymi (ISO 22196)', 'Green Spot, 3GL, sygnał dźwiękowy', 'IP52'] },
      { model: 'Newland HR33 Marlin AI Corded White', href: '/produkt/newland-hr33-marlin-ai-white', role: 'Przewodowy, sensor megapikselowy', cells: ['Przewód: USB, RS-232', '1280 × 800', 'Powłoka antymikrobowa', 'Sygnał dźwiękowy, LED, wibracja', 'IP52'] },
      { model: 'Newland HR23 Dorada AI Corded White', href: '/produkt/newland-hr23-dorada-ai-white', role: 'Przewodowy, podstawowa seria Newland', cells: ['Przewód: USB, RS-232', '800 × 640', 'Powłoka antymikrobowa', 'Sygnał dźwiękowy, LED, wibracja', 'IP52'] },
      { model: 'Zebra DS2278-HC', href: '/produkt/zebra-ds2278-hc', role: 'Bezprzewodowy imager 2D, bateria 2400 mAh', cells: ['Bluetooth 4.0 (klasa 2, do 10 m)', '640 × 480', 'Przygotowana do dezynfekcji', 'Tryb „Do Not Disturb” (potwierdzenie światłem na kodzie); bez wibracji', 'IP52'] },
      { model: 'Zebra DS8288-HC', href: '/produkt/zebra-ds8288-hc', role: 'Bezprzewodowy 2 MP, ładowanie indukcyjne', cells: ['Bluetooth 5.2 (klasa 1, do 100 m)', '1600 × 1200', 'Przygotowana do dezynfekcji; uszczelniony spust indukcyjny, etykiety antymikrobowe', 'Tryb nocny, wibracja, wbudowana lampka; zielony celownik LED', 'IP52'] },
      { model: 'Zebra CS60-HC', href: '/produkt/zebra-cs60-hc', role: 'Kompaktowy, bezprzewodowy lub przewodowy po zmianie zasilania', cells: ['Bluetooth 5.0 (klasa 1, do 100 m); USB z konwerterem przewodowym', '1280 × 960', 'Tworzywo do agresywnych środków; przyciski dotykowe, ładowanie bez styków', 'Tryb nocny z wibracją, wbudowana lampka; zielony celownik LED', 'IP65'] },
      { model: 'Honeywell Xenon Ultra 1962h', href: '/produkt/honeywell-xenon-ultra-1962h', role: 'Bezprzewodowy, bateria lub superkondensator', cells: ['Bluetooth 4.2 (klasa 1, do 100 m)', '1280 × 1080', 'Antymikrobowa, przygotowana do dezynfekcji', 'Patient Do-Not-Disturb, wibracja, Scan Lamp', 'IP52'] },
      { model: 'Datalogic Gryphon GBT4600 HC', href: '/produkt/datalogic-gryphon-gbt4600-hc', role: 'Bezprzewodowy Bluetooth, ładowanie indukcyjne', cells: ['Bluetooth 5.2 (do 100 m)', '1,5 MP + VGA', 'Przygotowana do dezynfekcji, z dodatkami antymikrobowymi (ISO 22196)', 'Green Spot, 3GL, sygnał dźwiękowy, wibracja (opcja)', 'IP52'] },
      { model: 'Datalogic Gryphon GM4600 HC', href: '/produkt/datalogic-gryphon-gm4600-hc', role: 'Bezprzewodowy, radio STAR 433 MHz', cells: ['Radio STAR 433 MHz (min. 50 m)', '1,5 MP + VGA', 'Przygotowana do dezynfekcji, z dodatkami antymikrobowymi (ISO 22196)', 'Green Spot, 3GL, sygnał dźwiękowy, wibracja (opcja)', 'IP52'] },
      { model: 'Newland HR33 Marlin AI Bluetooth White', href: '/produkt/newland-hr33-marlin-ai-bt-white', role: 'Bezprzewodowy, bateria 2600 mAh', cells: ['Bluetooth 5.0 (min. 100 m)', '1280 × 800', 'Powłoka antymikrobowa', 'Sygnał dźwiękowy, LED, wibracja', 'IP52'] },
      { model: 'Newland HR23 Dorada AI Bluetooth White', href: '/produkt/newland-hr23-dorada-ai-bt-white', role: 'Bezprzewodowy, bateria 2600 mAh', cells: ['Bluetooth 5.0 (min. 100 m)', '800 × 640', 'Powłoka antymikrobowa', 'Sygnał dźwiękowy, LED, wibracja', 'IP52'] },
      { model: 'Socket Mobile DuraScan D745', href: '/produkt/socket-mobile-durascan-d745', role: 'Bezprzewodowy, do iOS, Androida i Windows', cells: ['Bluetooth Classic', '1280 × 960', 'Tworzywo medyczne (ISO 10993, EN 60529)', 'LED, sygnał dźwiękowy', 'IP54'] },
      { model: 'Socket Mobile DuraScan D765', href: '/produkt/socket-mobile-durascan-d765', role: 'Bezprzewodowy, odczyt stref MRZ dokumentów', cells: ['Bluetooth Classic', '1280 × 960', 'Tworzywo medyczne (ISO 10993, EN 60529)', 'LED, sygnał dźwiękowy', 'IP54'] },
    ],
    note: 'Wszystkie modele odczytują kody 1D i 2D. Zasięg Bluetooth dotyczy otwartej przestrzeni. Datalogic oferuje wibrację jako opcję tylko w bezprzewodowych modelach Gryphon 4600 HC. Interfejsy i wyposażenie zestawów zależą od numeru PN.',
  },
  buyingGuide: {
    heading: 'Jak wybrać skaner do szpitala?',
    items: [
      'Przewodowy czy bezprzewodowy — skaner przewodowy zwykle zasila się z portu USB komputera i nie wymaga ładowania, dlatego pasuje do stałych stanowisk: rejestracji, apteki szpitalnej i laboratorium. Skaner bezprzewodowy łączy się z wózkiem z komputerem, tabletem albo stacją i służy do pracy przy łóżku pacjenta.',
      'Zasięg — skanery Bluetooth klasy 1 (np. Zebra DS8288-HC, CS60-HC, Honeywell Xenon Ultra 1962h, Datalogic GBT4600 HC) pracują do 100 m od stacji w otwartej przestrzeni, a Newland AI Bluetooth White — co najmniej 100 m. Zebra DS2278-HC ma Bluetooth klasy 2 o zasięgu do 10 m, a Datalogic GM4600 HC łączy się z bazą przez radio STAR 433 MHz.',
      'Małe kody — kody na fiolkach, strzykawkach i probówkach są drobne i często zakrzywione. Do takich zadań lepiej wybrać model z sensorem o większej rozdzielczości, np. Zebra DS4608-HC z ogniskowaniem HD, Zebra DS82-HC z sensorem 2 MP, Honeywell Xenon Ultra w wersji HD albo Datalogic Gryphon 4600 HC.',
      'Praca w nocy — przy śpiącym pacjencie przydaje się wibracja zamiast sygnału dźwiękowego i lampka, która oświetla stanowisko. Tryb nocny i wibrację mają Zebra DS4608-HC, DS8208-HC, DS8288-HC i CS60-HC, a Honeywell Xenon Ultra — tryb Patient Do-Not-Disturb i Scan Lamp.',
      'Zasilanie skanera bezprzewodowego — bateria wystarcza na pełną zmianę. Superkondensator (Zebra PowerCap w DS8288-HC, wersje battery-free Honeywell Xenon Ultra 1962h) ładuje się szybciej i nie wymaga wymiany baterii, ale starcza na mniej odczytów, więc skaner trzeba często odkładać do stacji.',
      'Czyszczenie — środki do dezynfekcji należy dobrać według listy producenta dla danego modelu. Zebra ma osobne listy dla każdej rodziny skanerów HC, a niezatwierdzone środki mogą unieważnić gwarancję.',
      'System i urządzenie — skanery przewodowe i większość bezprzewodowych przesyłają dane jak klawiatura, więc działają z systemem szpitalnym bez dodatkowych sterowników. Socket Mobile DuraScan D745 i D765 łączą się przez Bluetooth z urządzeniami iOS, Android i Windows, a w aplikacjach z pakietem Socket Mobile CaptureSDK działają bez dodatkowej konfiguracji.',
    ],
  },
  expertAuthority: 'TAKMA jest partnerem kilku producentów skanerów. Pomagamy dobrać skaner dla służby zdrowia razem ze stacjami, podstawkami i drukarkami opasek. Na początku ustalamy, gdzie skaner będzie używany, jak ma się łączyć z systemem szpitalnym, jakie kody są na opaskach i lekach oraz jakimi środkami placówka dezynfekuje sprzęt.',
  technicalDeepDive: 'Obudowa przygotowana do dezynfekcji wytrzymuje regularne przecieranie środkami stosowanymi w placówce. Producenci publikują listy środków dopuszczonych do czyszczenia danego modelu. Zebra w przewodniku dla skanerów HC podaje osobne listy dla DS2200-HC, DS4600-HC oraz łącznie dla DS82-HC i CS60-HC. Socket Mobile publikuje listę środków dla DuraScan D745 i D765. Środki na bazie wybielacza Zebra wyklucza do czyszczenia stacji, bo powodują korozję metalowych styków.\n\nCecha antymikrobowa opisuje samo tworzywo albo jego powłokę, a nie odporność obudowy na środki czyszczące. Datalogic podaje dla Gryphon 4600 HC zgodność tworzywa z normą ISO 22196, która opisuje badanie działania antybakteryjnego powierzchni z tworzyw. Honeywell i Newland nie podają normy dla obudowy antymikrobowej, a Zebra stosuje etykiety antymikrobowe w DS82-HC. Obudowę z każdego rodzaju tworzywa czyści się według procedur placówki.\n\nKarty Zebra DS4608-HC, DS8208-HC i DS8288-HC wymieniają normę EN 60601-1-2. Dotyczy ona kompatybilności elektromagnetycznej medycznych urządzeń elektrycznych. Socket Mobile podaje dla tworzywa D745 i D765 normy ISO 10993 i EN 60529. ISO 10993 opisuje ocenę biologiczną wyrobów medycznych, a EN 60529 — stopnie ochrony obudów (kody IP).\n\nŁadowanie bez styków ułatwia czyszczenie, bo na skanerze i stacji nie ma odsłoniętych metalowych styków. Indukcyjnie ładują się Zebra DS8288-HC i CS60-HC oraz bezprzewodowe Datalogic Gryphon 4600 HC. Honeywell Xenon Ultra 1962h występuje w wersjach stykowych i bezstykowych.',
  useCases: [
    { title: 'Izba przyjęć i rejestracja', description: 'Odczyt kodu z opaski identyfikacyjnej pacjenta i z dokumentów przy przyjęciu. Zebra DS82-HC przechwytuje obraz dokumentu, a Socket Mobile D765 odczytuje strefę MRZ w paszportach i dokumentach tożsamości.' },
    { title: 'Podawanie leków przy łóżku', description: 'Porównanie kodu z opaski pacjenta z kodem na leku lub worku z płynem infuzyjnym, skanerem bezprzewodowym połączonym z wózkiem albo tabletem.' },
    { title: 'Laboratorium i punkt pobrań', description: 'Odczyt kodów na probówkach i próbkach na stanowisku pobrań oraz śledzenie próbek w laboratorium.' },
    { title: 'Apteka szpitalna', description: 'Przyjęcie leków i inwentaryzacja w aptece szpitalnej, z odczytem małych kodów na opakowaniach jednostkowych.' },
    { title: 'Bank krwi', description: 'Odczyt kodów na workach z krwią. Zebra DS82-HC i CS60-HC mają funkcję Blood Bag Parse+, a DS4608-HC — Preferred Symbol, który wybiera jeden kod spośród kilku na etykiecie.' },
    { title: 'Blok operacyjny', description: 'Rejestracja narzędzi chirurgicznych i implantów oraz odczyt danych UDI wyrobów medycznych, np. funkcją UDI Scan+ w skanerach Zebra DS82-HC i CS60-HC.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed wdrożeniem?',
    items: [
      { title: 'Próba na kodach z placówki', text: 'Przed wdrożeniem należy sprawdzić odczyt kodów z opasek, etykiet leków i probówek stosowanych w placówce, także po kilkukrotnym przetarciu środkiem używanym na oddziale.' },
      { title: 'Lista środków dla konkretnej rodziny', text: 'Listy producentów różnią się między rodzinami. Na przykład lista Zebry dla DS2200-HC nie zawiera alkoholu izopropylowego, a lista dla DS4600-HC obejmuje 70% alkohol izopropylowy.' },
      { title: 'Stacje i bazy', text: 'Stacje ładujące mają inne ograniczenia niż skanery. Zebra nie dopuszcza środków z wybielaczem do czyszczenia stacji swoich skanerów HC.' },
    ],
  },
  comparisons: [
    {
      title: 'Przewodowy czy bezprzewodowy skaner do szpitala?',
      verdict: 'Przewodowy na stałe stanowisko, bezprzewodowy do pracy przy łóżku pacjenta i na wózku.',
      content: 'Skaner przewodowy, np. [Zebra DS4608-HC](/produkt/zebra-ds4608-hc) albo [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h), nie ma baterii i pracuje bez przerw na ładowanie. Skaner bezprzewodowy, np. [Zebra DS8288-HC](/produkt/zebra-ds8288-hc) albo [Datalogic Gryphon GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc), wraca do stacji między zadaniami i nie ogranicza ruchu przewodem przy łóżku pacjenta.',
    },
    {
      title: 'Zebra DS2208-HC czy DS4608-HC?',
      content: 'Oba skanery przewodowe mają szczelność IP52 i 5 lat gwarancji. [DS2208-HC](/produkt/zebra-ds2208-hc) ma sensor 640 × 480 i tryb „Do Not Disturb”, ale nie ma wibracji. [DS4608-HC](/produkt/zebra-ds4608-hc) ma sensor 1280 × 800 z ogniskowaniem HD do drobnych i zakrzywionych kodów, tryb nocny z wibracją, zielony celownik LED oraz funkcję Preferred Symbol.',
    },
    {
      title: 'Zebra DS8288-HC, Honeywell Xenon Ultra 1962h czy Datalogic GBT4600 HC?',
      content: 'Wszystkie trzy to bezprzewodowe skanery Bluetooth o zasięgu do 100 m. [Zebra DS8288-HC](/produkt/zebra-ds8288-hc) ma Bluetooth 5.2, baterię PowerPrecision+ 3500 mAh albo superkondensator PowerCap i ładuje się indukcyjnie. [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h) ma Bluetooth 4.2 i baterię 3300 mAh albo superkondensator, w wersjach stykowych i bezstykowych. [Datalogic Gryphon GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) ma Bluetooth 5.2, baterię 3250 mAh i ładowanie indukcyjne w bazie.',
    },
    {
      title: 'Datalogic Gryphon GBT4600 HC czy GM4600 HC?',
      content: 'Oba skanery mają dwa sensory i bazę z ładowaniem indukcyjnym. [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) łączy się przez Bluetooth 5.2, a do jednej bazy można podłączyć do 7 skanerów. [GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc) korzysta z radia STAR 433 MHz o zasięgu co najmniej 50 m i komunikacji dwukierunkowej, a jeden odbiornik obsługuje do 16 skanerów.',
    },
    {
      title: 'Newland HR33 czy HR23 AI White?',
      content: 'Obie serie mają powłokę antymikrobową, wibrację, szczelność IP52 i 5 lat gwarancji. [HR33 Marlin AI White](/produkt/newland-hr33-marlin-ai-white) ma sensor 1280 × 800 i czyta kod EAN-13 z odległości od 35 do 535 mm. [HR23 Dorada AI White](/produkt/newland-hr23-dorada-ai-white) ma sensor 800 × 640 i czyta ten sam kod z odległości od 50 do 280 mm. Obie serie mają wersje przewodowe i Bluetooth.',
    },
  ],
  faq: [
    {
      question: 'Co wyróżnia skaner dla służby zdrowia na tle zwykłego skanera kodów kreskowych?',
      answer: 'Zwykle ma jasną obudowę przygotowaną do częstej dezynfekcji (Zebra, Honeywell, Datalogic) albo z tworzywa medycznego (Socket Mobile). Część modeli ma też obudowę lub powłokę antymikrobową (Honeywell, Datalogic, Newland), tryb nocny albo tryb Patient Do-Not-Disturb (Zebra, Honeywell), wibrację i zielony celownik LED. Szczegóły każdego modelu podaje jego karta produktu.',
    },
    {
      question: 'Jakimi środkami można dezynfekować skaner?',
      answer: 'Tylko środkami z listy producenta dla danej rodziny skanerów. Listy Zebry są różne: DS82-HC i CS60-HC mają najdłuższą listę, m.in. z 91% alkoholem izopropylowym i 3% nadtlenkiem wodoru, DS4600-HC obejmuje 70% alkohol izopropylowy, a DS2200-HC — m.in. 3% nadtlenek wodoru, bez alkoholu izopropylowego. Zebra zaleca przecieranie nawilżoną chusteczką lub ściereczką; środka nie rozpyla się ani nie wylewa na skaner.',
    },
    {
      question: 'Który skaner odczyta kody z opasek pacjentów?',
      answer: 'Wszystkie skanery w tej kategorii czytają kody 1D i 2D, także te drukowane na opaskach identyfikacyjnych. Przed wdrożeniem warto sprawdzić odczyt na opaskach stosowanych w placówce. Opaski znajdują się w dziale [opaski identyfikacyjne](/opaski-identyfikacyjne), a drukarki do nich — wśród [drukarek dla służby zdrowia](/drukarki-dla-sluzby-zdrowia) i [drukarek opasek](/drukarki-opasek).',
    },
    {
      question: 'Który skaner wybrać do pracy przy pacjencie w nocy?',
      answer: 'Ciche potwierdzenie odczytu daje wibracja. Tryb nocny i wibrację mają [Zebra DS4608-HC](/produkt/zebra-ds4608-hc), [DS8208-HC](/produkt/zebra-ds8208-hc), [DS8288-HC](/produkt/zebra-ds8288-hc) i [CS60-HC](/produkt/zebra-cs60-hc). Honeywell Xenon Ultra ma tryb Patient Do-Not-Disturb. Skanery Zebra i Datalogic Gryphon 4600 HC mogą potwierdzać odczyt światłem na kodzie (Direct Decode Indicator, Green Spot), a w Zebra DS2208-HC i DS2278-HC służy do tego tryb „Do Not Disturb”. Lampkę oświetlającą stanowisko mają Zebra DS82-HC i CS60-HC, a Honeywell Xenon Ultra ma tryb Scan Lamp.',
    },
    {
      question: 'Czy skaner dla służby zdrowia współpracuje z systemem szpitalnym?',
      answer: 'Tak. Skaner zwykle przesyła odczytany kod jak klawiatura, przez USB albo Bluetooth, więc system szpitalny przyjmuje dane w polu, w którym stoi kursor. Ustawienia skanera zmienia się kodami konfiguracyjnymi albo programem producenta: Zebra 123Scan, Honeywell Scanner Management Utility, Datalogic Aladdin i Newland EasySet. Sposób przekazywania danych do systemu HIS lub LIS warto ustalić z firmą, która ten system dostarcza.',
    },
    {
      question: 'Bateria czy superkondensator w skanerze bezprzewodowym?',
      answer: 'Bateria zapewnia pracę przez pełną zmianę. Superkondensator ładuje się szybciej, ale starcza na mniej odczytów. PowerCap w Zebra DS8288-HC daje do 6000 skanów i ładuje się do pełna w 13–60 minut zależnie od źródła zasilania. Wersja battery-free Honeywell Xenon Ultra 1962h wykonuje co najmniej 450 skanów kodów UPC/EAN, a z zasilacza ładuje się w mniej niż 60 s. Superkondensator pasuje do pracy, w której skaner wraca do stacji między zadaniami.',
    },
    {
      question: 'Jaką gwarancję mają skanery dla służby zdrowia?',
      answer: 'Zależy od modelu. Przewodowe Zebra DS2208-HC, DS4608-HC i DS8208-HC, Honeywell Xenon Ultra 1960h, przewodowe Datalogic Gryphon 4600 HC oraz skanery Newland AI White mają 5 lat gwarancji. Bezprzewodowe Zebra DS2278-HC, DS8288-HC i CS60-HC, Honeywell Xenon Ultra 1962h i bezprzewodowe Gryphon 4600 HC mają 3 lata. Baterie mają zwykle krótszą gwarancję niż skaner.',
    },
    {
      question: 'Gdzie są drukarki i opaski do identyfikacji pacjentów?',
      answer: 'Drukarki etykiet i opasek przeznaczone dla placówek medycznych zebrano na stronie [drukarki dla służby zdrowia](/drukarki-dla-sluzby-zdrowia). Opaski Z-Band znajdują się w dziale [opaski identyfikacyjne](/opaski-identyfikacyjne), a stacje, podstawki i przewody — w dziale [akcesoria do skanerów](/akcesoria-do-skanerow).',
    },
  ],
  howToSteps: [
    { name: 'Określ miejsce pracy', text: 'Ustal, czy skaner ma pracować na stałym stanowisku (rejestracja, apteka, laboratorium), czy przy łóżku pacjenta z wózkiem lub tabletem.' },
    { name: 'Wybierz łączność', text: 'Wybierz skaner przewodowy albo bezprzewodowy z Bluetooth lub radiem producenta. Sprawdź zasięg i sposób ładowania.' },
    { name: 'Sprawdź obudowę i sygnalizację', text: 'Zestaw wymagania placówki z opisem modelu: obudowa przygotowana do dezynfekcji, tworzywo antymikrobowe, tryb nocny i wibracja, lista dopuszczonych środków.' },
    { name: 'Dobierz zestaw i przetestuj', text: 'Wybierz numer PN z przewodem lub stacją i dobierz akcesoria. Potem sprawdź odczyt kodów z opasek, leków i probówek stosowanych w placówce.' },
  ],
}
