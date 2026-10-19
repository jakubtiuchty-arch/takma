import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

export const rfidSledCategory: Subcategory = {
  id: 'uchwyty-rfid', slug: 'uchwyty-rfid', name: 'Uchwyty RFID',
  parentCategoryId: 'terminale-mobilne',
  description: 'Uchwyty UHF RFID do zgodnych terminali i telefonów.',
  seoTitle: 'Uchwyty RFID UHF — Zebra RFD40 i RFD90 | TAKMA',
  seoDescription: 'Uchwyty RFID Zebra RFD40 i RFD90. Porównaj łączność, skanery i odporność obudowy. Europejskie PN, aktualne ceny, stany i zgodne akcesoria.',
  longDescription: 'Uchwyty RFID dodają odczyt UHF do zgodnego terminala lub telefonu. Porównaj Zebra RFD40 Standard, Premium i Premium Plus oraz RFD9030 i RFD9090 z obudową IP65/IP67. Wybierz połączenie, skaner kodów i zasięg odpowiedni do pracy. Adapter, ładowanie oraz aplikacja muszą pasować do wybranego zestawu.',
  icon: 'smartphone',
  productIds: ['zebra-rfd40-standard', 'zebra-rfd40-premium', 'zebra-rfd40-premium-plus', 'zebra-rfd9030', 'zebra-rfd9090'], productCount: 5,
}

export const rfidSledContent: SubcategoryRichContent = {
  updatedAt: '2026-10-19',
  definition: { heading: 'Co to jest uchwyt RFID?', content: 'Uchwyt RFID to zewnętrzny czytnik znaczników radiowych połączony z terminalem lub telefonem. Czytnik obsługuje UHF, a aplikacja działa na urządzeniu nadrzędnym. Uchwyt nie ma własnego ekranu ani systemu Android.\n\n[Zebra RFD40 Standard](/produkt/zebra-rfd40-standard) łączy się przez eConnex. [RFD40 Premium](/produkt/zebra-rfd40-premium) dodaje Bluetooth i Wi-Fi do zarządzania. [RFD40 Premium Plus](/produkt/zebra-rfd40-premium-plus) ma także skaner SE4100 do kodów 1D i 2D. [RFD9030](/produkt/zebra-rfd9030) ma obudowę IP65/IP67 i standardowy zasięg RFID. [RFD9090](/produkt/zebra-rfd9090) wykorzystuje kierunkową antenę Yagi do odczytu z większej odległości. Jeśli potrzebujesz urządzenia z własnym ekranem i aplikacją, porównaj [terminale RFID](/terminale-rfid).' },
  comparisonTable: { heading: 'Porównanie uchwytów RFID Zebra', intro: 'Wszystkie modele mają europejskie wersje UHF 865–868 MHz, eConnex i baterię 7000 mAh. Tabela pokazuje różnice.', columns: ['Bluetooth', 'Wi-Fi do zarządzania', 'Skaner kodów', 'Ochrona obudowy', 'Odczyt RFID'], rows: [
    { model: 'RFD40 Standard', href: '/produkt/zebra-rfd40-standard', cells: ['Brak', 'Brak', 'Brak', 'IP54', 'Standardowy zasięg'] },
    { model: 'RFD40 Premium', href: '/produkt/zebra-rfd40-premium', cells: ['5.3', 'Wi-Fi 6', 'Brak', 'IP54', 'Standardowy zasięg'] },
    { model: 'RFD40 Premium Plus', href: '/produkt/zebra-rfd40-premium-plus', cells: ['5.3', 'Wi-Fi 6', 'SE4100 — 1D/2D', 'IP54', 'Standardowy zasięg'] },
    { model: 'RFD9030', href: '/produkt/zebra-rfd9030', cells: ['5.3', 'Wi-Fi 6', 'SE4750MR lub SE4850', 'IP65, IP67', 'Standardowy zasięg'] },
    { model: 'RFD9090', href: '/produkt/zebra-rfd9090', cells: ['5.3', 'Wi-Fi 6', 'SE4850', 'IP65, IP67', 'Wydłużony zasięg, antena Yagi'] },
  ] },
  buyingGuide: { heading: 'Jak dobrać uchwyt RFID?', items: [
    'Sprawdź aplikację — musi obsługiwać czytnik Zebra i dane znaczników UHF.',
    'Wybierz połączenie — eConnex wymaga zgodnego złącza oraz adaptera. Bluetooth jest dostępny w RFD40 Premium, Premium Plus i RFD90.',
    'Dobierz adapter do dokładnego modelu terminala. Adapter mechaniczny do Bluetooth nie jest adapterem eConnex.',
    'Wybierz sposób ładowania. Stacje, zasilacze i przewody mogą być sprzedawane osobno.',
    'Do pracy w Polsce wybierz europejski PN. Sprawdź odczyt na docelowych etykietach i towarach.',
  ] },
  expertAuthority: 'TAKMA pomaga dobrać uchwyt, terminal, adapter i ładowanie do procesu magazynowego. Przy doborze zestawu uwzględniamy model terminala, rodzaj złącza i używaną aplikację.',
  technicalDeepDive: 'UHF RFID odczytuje układ radiowy znacznika. Skaner kodów odczytuje widoczny nadruk. W rodzinie RFD40 tylko Premium Plus ma skaner SE4100. RFD9030 jest dostępny ze skanerem SE4750MR lub SE4850, a oferowany RFD9090 ma SE4850. RFD40 Standard i Premium korzystają ze skanera podłączonego terminala.\n\nWi-Fi w RFD40 Premium, Premium Plus i RFD90 służy do zarządzania czytnikiem. Nie oznacza, że uchwyt sam uruchamia aplikację magazynową. Zasięg i szybkość odczytu zależą od znacznika, powierzchni towaru, ustawionej mocy oraz otoczenia.\n\nDo przygotowania oznaczeń sprawdź [drukarki RFID](/drukarki-rfid) i [etykiety RFID](/etykiety-rfid-zebra). Dobór etykiety do czytnika nie zastępuje sprawdzenia zgodności nośnika z drukarką.',
  useCases: [
    { title: 'Inwentaryzacja', description: 'Liczenie oznakowanych towarów i przekazywanie wyników do aplikacji.' },
    { title: 'Wyszukiwanie produktu', description: 'Lokalizowanie wybranego znacznika wśród towarów na półce.' },
    { title: 'Rozbudowa terminala', description: 'Dodanie UHF RFID do zgodnego terminala bez wymiany całego urządzenia.' },
  ],
  uniqueInsights: { heading: 'Co sprawdzić przed zakupem?', items: [
    { title: 'Złącze terminala', text: 'Nie każdy wariant terminala ma tylne złącze 8-pin wymagane do eConnex.' },
    { title: 'Zawartość zestawu', text: 'Cena uchwytu obejmuje baterię. Terminal, adapter i wyposażenie do ładowania dobierz osobno.' },
  ] },
  comparisons: [{ title: 'RFD40 czy RFD90?', content: 'RFD40 ma obudowę IP54. [RFD9030](/produkt/zebra-rfd9030) i [RFD9090](/produkt/zebra-rfd9090) mają IP65/IP67 i odporność na upadki z 1,8 m. RFD9090 dobierz do odczytu RFID z większej odległości. Adaptery muszą pasować do wybranej rodziny uchwytów.' }, { title: 'Uchwyt czy samodzielny terminal RFID?', content: 'Uchwyt rozbudowuje zgodne urządzenie, na którym działa aplikacja. [Terminal RFID](/terminale-rfid) ma własny ekran, system i wbudowany czytnik. Wybór zależy od posiadanego sprzętu i sposobu pracy.' }],
  faq: [
    { question: 'Czy RFD40 Standard ma Bluetooth?', answer: 'Nie. Standard korzysta z eConnex. Bluetooth jest dostępny w RFD40 Premium i Premium Plus.' },
    { question: 'Który uchwyt RFID ma skaner kodów kreskowych?', answer: 'RFD40 Premium Plus ma SE4100. RFD9030 ma SE4750MR lub SE4850 zależnie od PN. Oferowany RFD9090 ma SE4850. RFD40 Standard i Premium nie mają skanera kodów.' },
    { question: 'Czy uchwyt RFID działa z każdym telefonem?', answer: 'Nie należy zakładać takiej zgodności. Trzeba sprawdzić aplikację, obsługiwany sposób połączenia i mechaniczne mocowanie telefonu.' },
    { question: 'Czy adapter i stacja są w cenie RFD40?', answer: 'Cena dotyczy uchwytu z baterią 7000 mAh. Adapter, stacja, zasilacz i przewody są sprzedawane osobno.' },
  ],
  howToSteps: [
    { name: 'Sprawdź urządzenie', text: 'Podaj dokładny model i PN terminala lub telefonu oraz nazwę aplikacji.' },
    { name: 'Wybierz wersję RFD40', text: 'Ustal sposób połączenia i potrzebę odczytu kodów przez skaner w uchwycie.' },
    { name: 'Dobierz adapter i ładowanie', text: 'Wybierz zgodny adapter, stację lub nakładkę oraz wymagane elementy zasilania.' },
  ],
}
