import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

export const rfidSledCategory: Subcategory = {
  id: 'uchwyty-rfid', slug: 'uchwyty-rfid', name: 'Uchwyty RFID',
  parentCategoryId: 'terminale-mobilne',
  description: 'Uchwyty UHF RFID do zgodnych terminali i telefonów.',
  seoTitle: 'Uchwyty RFID UHF — Zebra RFD40 | TAKMA',
  seoDescription: 'Uchwyty RFID Zebra RFD40 Standard, Premium i Premium Plus. Porównaj eConnex, Bluetooth i skaner kodów. Europejskie PN, ceny, stany i zgodne akcesoria.',
  longDescription: 'Uchwyty RFID dodają odczyt znaczników UHF do zgodnego terminala lub telefonu. Wybierz Zebra RFD40 Standard z eConnex, Premium z Bluetooth albo Premium Plus ze skanerem kodów 1D/2D. Każdy zestaw wymaga aplikacji obsługującej czytnik. Adapter i ładowanie dobierz do konkretnego modelu urządzenia.',
  icon: 'smartphone',
  productIds: ['zebra-rfd40-standard', 'zebra-rfd40-premium', 'zebra-rfd40-premium-plus'], productCount: 3,
}

export const rfidSledContent: SubcategoryRichContent = {
  updatedAt: '2026-10-19',
  definition: { heading: 'Co to jest uchwyt RFID?', content: 'Uchwyt RFID to zewnętrzny czytnik znaczników radiowych połączony z terminalem lub telefonem. Czytnik obsługuje UHF, a aplikacja działa na urządzeniu nadrzędnym. Uchwyt nie ma własnego ekranu ani systemu Android.\n\n[Zebra RFD40 Standard](/produkt/zebra-rfd40-standard) łączy się przez eConnex. [RFD40 Premium](/produkt/zebra-rfd40-premium) dodaje Bluetooth i Wi-Fi do zarządzania. [RFD40 Premium Plus](/produkt/zebra-rfd40-premium-plus) ma także skaner SE4100 do kodów 1D i 2D. Jeśli potrzebujesz urządzenia z własnym ekranem i aplikacją, porównaj [terminale RFID](/terminale-rfid).' },
  comparisonTable: { heading: 'Różnice między wersjami RFD40', intro: 'Wspólne parametry to UHF 865–868 MHz, eConnex, bateria 7000 mAh i IP54. Tabela pokazuje różnice.', columns: ['Bluetooth', 'Wi-Fi do zarządzania', 'Skaner kodów'], rows: [
    { model: 'RFD40 Standard', href: '/produkt/zebra-rfd40-standard', cells: ['Brak', 'Brak', 'Brak'] },
    { model: 'RFD40 Premium', href: '/produkt/zebra-rfd40-premium', cells: ['5.3', 'Wi-Fi 6', 'Brak'] },
    { model: 'RFD40 Premium Plus', href: '/produkt/zebra-rfd40-premium-plus', cells: ['5.3', 'Wi-Fi 6', 'SE4100 — 1D/2D'] },
  ] },
  buyingGuide: { heading: 'Jak dobrać uchwyt RFID?', items: [
    'Sprawdź aplikację — musi obsługiwać czytnik Zebra i dane znaczników UHF.',
    'Wybierz połączenie — eConnex wymaga zgodnego złącza oraz adaptera. Bluetooth wymaga wersji Premium lub Premium Plus.',
    'Dobierz adapter do dokładnego modelu terminala. Adapter mechaniczny do Bluetooth nie jest adapterem eConnex.',
    'Wybierz sposób ładowania. Stacje, zasilacze i przewody mogą być sprzedawane osobno.',
    'Do pracy w Polsce wybierz europejski PN. Sprawdź odczyt na docelowych etykietach i towarach.',
  ] },
  expertAuthority: 'TAKMA pomaga dobrać uchwyt, terminal, adapter i ładowanie do procesu magazynowego. Przy doborze zestawu uwzględniamy model terminala, rodzaj złącza i używaną aplikację.',
  technicalDeepDive: 'UHF RFID odczytuje układ radiowy znacznika. Skaner kodów odczytuje widoczny nadruk. Tylko RFD40 Premium Plus ma wbudowany skaner SE4100. W pozostałych wersjach kody można odczytywać skanerem podłączonego terminala.\n\nWi-Fi w wersjach Premium służy do zarządzania czytnikiem. Nie oznacza, że uchwyt sam uruchamia aplikację magazynową. Zasięg i szybkość odczytu zależą od znacznika, powierzchni towaru, ustawionej mocy oraz otoczenia.\n\nDo przygotowania oznaczeń sprawdź [drukarki RFID](/drukarki-rfid) i [etykiety RFID](/etykiety-rfid-zebra). Dobór etykiety do czytnika nie zastępuje sprawdzenia zgodności nośnika z drukarką.',
  useCases: [
    { title: 'Inwentaryzacja', description: 'Liczenie oznakowanych towarów i przekazywanie wyników do aplikacji.' },
    { title: 'Wyszukiwanie produktu', description: 'Lokalizowanie wybranego znacznika wśród towarów na półce.' },
    { title: 'Rozbudowa terminala', description: 'Dodanie UHF RFID do zgodnego terminala bez wymiany całego urządzenia.' },
  ],
  uniqueInsights: { heading: 'Co sprawdzić przed zakupem?', items: [
    { title: 'Złącze terminala', text: 'Nie każdy wariant terminala ma tylne złącze 8-pin wymagane do eConnex.' },
    { title: 'Zawartość zestawu', text: 'Cena uchwytu obejmuje baterię. Terminal, adapter i wyposażenie do ładowania dobierz osobno.' },
  ] },
  comparisons: [{ title: 'Uchwyt czy samodzielny terminal RFID?', content: 'Uchwyt rozbudowuje zgodne urządzenie, na którym działa aplikacja. [Terminal RFID](/terminale-rfid) ma własny ekran, system i wbudowany czytnik. Wybór zależy od posiadanego sprzętu i sposobu pracy.' }],
  faq: [
    { question: 'Czy RFD40 Standard ma Bluetooth?', answer: 'Nie. Standard korzysta z eConnex. Bluetooth jest dostępny w RFD40 Premium i Premium Plus.' },
    { question: 'Który RFD40 ma skaner kodów kreskowych?', answer: 'RFD40 Premium Plus ma skaner SE4100 do kodów 1D i 2D. Standard oraz Premium nie mają wbudowanego skanera.' },
    { question: 'Czy uchwyt RFID działa z każdym telefonem?', answer: 'Nie należy zakładać takiej zgodności. Trzeba sprawdzić aplikację, obsługiwany sposób połączenia i mechaniczne mocowanie telefonu.' },
    { question: 'Czy adapter i stacja są w cenie RFD40?', answer: 'Cena dotyczy uchwytu z baterią 7000 mAh. Adapter, stacja, zasilacz i przewody są sprzedawane osobno.' },
  ],
  howToSteps: [
    { name: 'Sprawdź urządzenie', text: 'Podaj dokładny model i PN terminala lub telefonu oraz nazwę aplikacji.' },
    { name: 'Wybierz wersję RFD40', text: 'Ustal sposób połączenia i potrzebę odczytu kodów przez skaner w uchwycie.' },
    { name: 'Dobierz adapter i ładowanie', text: 'Wybierz zgodny adapter, stację lub nakładkę oraz wymagane elementy zasilania.' },
  ],
}
