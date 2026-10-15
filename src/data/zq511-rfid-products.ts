import type { Product } from './products'

const accessoryGuide = 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf'

export const zq511RfidAccessoryIds = [
  'zebra-ac-adapter-zq5', 'zebra-battery-zq5-standard', 'zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5',
  'zebra-battery-zq5-extended', 'zebra-soft-case-zq5', 'zebra-exoskeleton-zq5', 'zebra-zq630-charger-6',
  'zebra-zq5-vehicle-cradle', 'zebra-zq5-power-station-4', 'zebra-zq5-rugged-strap', 'zebra-zq5-mounting-plate',
  'zebra-usb-cable-zq5', 'zebra-car-charger-zq5', 'zebra-cleaning-pens-zd621r',
]

export const zq511RfidAccessorySlugs = [
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-3250mah-zq511-zq521', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-bateria-6500mah-zq511-zq521', 'zebra-etui-pasek-zq511', 'zebra-egzoszkielet-zq511',
  'zebra-ladowarka-6-baterii-sac-mpp-6bcheu1-01', 'zebra-stacja-pojazdowa-p1063406-062', 'zebra-stacja-4-drukarek-p1063406-053',
  'zebra-pasek-na-ramie-p1063406-035', 'zebra-plyta-montazowa-p1063406-042', 'zebra-kabel-usb-twist-lock-zq5-zq6',
  'zebra-zasilacz-samochodowy-zq5', 'zebra-pisaki-czyszczace-105950-035',
]

export const zq511RfidProduct: Product = {
  id: 'zebra-zq511-rfid', slug: 'zebra-zq511-rfid', name: 'Zebra ZQ511 RFID', seoH1: 'Zebra ZQ511 RFID',
  seoTitle: 'Zebra ZQ511 RFID — mobilna drukarka i koder UHF',
  seoDescription: 'Zebra ZQ511 RFID do mobilnego druku i kodowania etykiet UHF do 72 mm. PN ZQ51-BUW030E-00, Wi-Fi i Bluetooth. Dobierz konfigurację oraz akcesoria w TAKMA.',
  shortDescription: 'Mobilna drukarka i koder RAIN UHF RFID. Druk do 72 mm, Wi-Fi 802.11ac, Bluetooth 4.1, bateria 3250 mAh i obudowa IP54.',
  description: `Zebra ZQ511 RFID to mobilna drukarka termiczna z koderem RAIN UHF RFID. Przygotowuje nadruk i zapisuje dane w etykietach o szerokości druku do 72 mm.

## Etykiety RFID przygotowane przy towarze

ZQ511 RFID służy do oznaczania produktów, pojemników, części i wyposażenia. Pracownik drukuje oraz koduje etykietę w miejscu jej naklejenia. Urządzenie waży około 630 g z baterią standardową. Wymiary wynoszą 150 × 120 × 62 mm.

Koder obsługuje UHF EPC Gen2 v2, ISO/IEC 18000-63 i RAIN RFID. Adaptive Encoding ułatwia kalibrację materiału. Dla zgodnych etykiet minimalny odstęp kolejnych wkładek wynosi 16 mm. Przed wdrożeniem sprawdź zapis i odczyt etykiety na docelowym produkcie.

Powiąż identyfikator EPC z danymi w systemie magazynowym. Ustal format danych i sposób obsługi błędnego kodowania. Drukarka sprawdza etykietę w swoim torze materiałów. Do radiowej inwentaryzacji całej półki potrzebujesz osobnego czytnika UHF i oprogramowania.

## PN ZQ51-BUW030E-00 dla EMEA

Ta konfiguracja ma koder RFID, Wi-Fi 802.11ac, Bluetooth 4.1 Classic i BLE oraz standardową baterię PowerPrecision+. Ma czcionki angielskie i łacińskie. Jest przeznaczona dla regionu EMEA. Zasilacz do ładowania dobierz osobno.

Wi-Fi obsługuje pasma 2,4 i 5 GHz oraz roaming 802.11r. Może pracować jednocześnie z Bluetooth. USB 2.0 OTG z gniazdem Micro-AB umożliwia połączenie przewodowe. NFC Print Touch ułatwia parowanie i nie służy do kodowania etykiet NFC.

## Materiał z czarnym znacznikiem

ZQ511 RFID wymaga czarnego znacznika na materiale. Nie wykrywa przerw między etykietami. Do kodowania potrzebna jest zgodna wkładka UHF RFID. Sprawdź jej położenie, rozmiar etykiety i kalibrację drukarki.

Szerokość materiału wynosi 35–80 mm, a maksymalna średnica rolki 51 mm. Rozdzielczość nadruku wynosi 203 dpi. Maksymalna prędkość 127 mm/s dotyczy włączonego Draft Mode. Kodowanie i kontrola wkładki mogą zmniejszyć wydajność zadania. Zmierz ją dla docelowej etykiety i formatu danych.

Druk termiczny bezpośredni nie wymaga taśmy barwiącej. Oferowany PN jest przeznaczony do materiału z podkładem. Jeśli potrzebujesz szerszych etykiet RFID, porównaj [Zebra ZQ521 RFID](/produkt/zebra-zq521-rfid), która drukuje do 104 mm.

## Bateria i ochrona drukarki

Bateria PowerPrecision+ ma nominalnie 3250 mAh i jest wymienna. Opcjonalna bateria rozszerzona ma 6500 mAh. Czas pracy zależy od nadruku, kodowania, połączeń i temperatury. Ekran LCD pokazuje stan baterii i łączności. Link-OS wspiera konfigurację i zarządzanie urządzeniem.

Obudowa ma klasę IP54 i odporność na upadki z 2 m na beton. Drukarka pracuje w temperaturze od −20 do 55°C. Opcjonalny [egzoszkielet P1063406-043](/produkt/zebra-egzoszkielet-zq511) zwiększa ochronę do IP65 i odporność na upadki do 3 m. Etui i egzoszkielet dobierz do ZQ511; osłony szerszej ZQ521 mają inne numery PN.

## Ładowanie i mocowanie

Aby ładować baterię w drukarce z sieci, potrzebujesz [zasilacza EU P1031365-042](/produkt/zebra-zasilacz-ac-zq5-zq6). Wyjętą baterię możesz ładować w zgodnej ładowarce 1-, 3- lub 6-gniazdowej. Przewód USB służy do komunikacji i nie zastępuje zasilacza do ładowania.

[Stacja P1063406-062](/produkt/zebra-stacja-pojazdowa-p1063406-062) mocuje i ładuje jedną drukarkę. Wymaga osobnego zasilacza. [Stacja P1063406-053](/produkt/zebra-stacja-4-drukarek-p1063406-053) ładuje cztery drukarki i obejmuje zasilacz z przewodem europejskim. Do pojazdu dobierz adapter zgodny z napięciem instalacji. P1031359 jest przeznaczony do 12 V.

Jeśli potrzebujesz tylko nadruku bez kodowania UHF, wybierz [Zebra ZQ511](/produkt/zebra-zq511). Do szerszych materiałów i większej rolki porównaj [Zebra ZQ630 Plus RFID](/produkt/zebra-zq630-plus-rfid).

## Gwarancja

Gwarancja na drukarkę wynosi 24 miesiące, a na baterię 12 miesięcy. Ochrona głowicy w regionie EMEA wynosi 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zq511-rfid-framed.webp'], imageDescriptions: ['Zebra ZQ511 RFID — mobilna drukarka z oznaczeniem UHF RFID, widok z przodu'],
  tags: ['magazyn', 'logistyka', 'outdoor', 'retail'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 dpi', predkoscDruku: 'do 127 mm/s z Draft Mode', szerokoscDruku: 'do 72 mm', szerokoscEtykiet: '35–80 mm; czarny znacznik' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Mobilna drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Oferowany PN', value: 'ZQ51-BUW030E-00 — EMEA, bateria standardowa' },
    { name: 'RFID', value: 'UHF EPC Gen2 v2, ISO/IEC 18000-63, RAIN RFID; Adaptive Encoding' },
    { name: 'Rodzaj druku', value: 'Termiczny bezpośredni; bez taśmy barwiącej' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Szerokość druku', value: 'do 72 mm' },
    { name: 'Prędkość nadruku', value: 'do 127 mm/s z Draft Mode; kodowanie może zmniejszyć wydajność' },
    { name: 'Materiał', value: 'Szerokość 35–80 mm; czarny znacznik; brak wykrywania przerw' },
    { name: 'Średnica rolki', value: 'do 51 mm' },
    { name: 'Odstęp wkładek RFID', value: 'Od 16 mm dla zgodnych etykiet po kalibracji' },
    { name: 'Łączność', value: 'Wi-Fi 802.11ac 2,4/5 GHz, Bluetooth 4.1 Classic i BLE' },
    { name: 'USB', value: '2.0 OTG, gniazdo Micro-AB' },
    { name: 'NFC', value: 'Print Touch do parowania; bez kodowania NFC' },
    { name: 'Bateria standardowa', value: 'PowerPrecision+ Li-Ion, nominalnie 3250 mAh; wymienna' },
    { name: 'Bateria opcjonalna', value: '6500 mAh' },
    { name: 'Ekran', value: 'LCD z ikonami stanu' },
    { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash; użytkownik: 8 MB RAM i 64 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; CPCL, ZPL, ZBI 2.x' },
    { name: 'Klasa ochrony', value: 'IP54; IP65 z opcjonalnym egzoszkieletem' },
    { name: 'Odporność na upadki', value: '2 m na beton; do 3 m z egzoszkieletem' },
    { name: 'Temperatura pracy', value: '−20 do 55°C' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '150 × 120 × 62 mm' },
    { name: 'Masa z baterią standardową', value: 'Około 0,63 kg' },
    { name: 'W zestawie', value: 'Drukarka z koderem RFID i bateria standardowa' },
    { name: 'Do kupienia osobno', value: 'Zasilacz lub ładowarka baterii, etykiety RFID i dodatkowe wyposażenie' },
    { name: 'Gwarancja', value: 'Drukarka 24 miesiące; bateria 12 miesięcy; głowica EMEA 12 miesięcy lub milion cali druku' },
  ],
  variants: [{ partNumber: 'ZQ51-BUW030E-00', name: 'RFID — Wi-Fi, Bluetooth, bateria, EMEA', attributes: {}, availability: 'unavailable' }],
  applications: ['Druk i kodowanie etykiet przy towarze', 'Oznaczanie kartonów i pojemników', 'Przygotowanie etykiet EPC do ewidencji magazynowej', 'Znakowanie części i wyposażenia w terenie'],
  compatibleAccessories: [], relatedAccessories: zq511RfidAccessoryIds,
  faq: [
    { question: 'Czym ZQ511 RFID różni się od zwykłej ZQ511?', answer: 'ZQ511 RFID ma koder UHF do zapisu danych w układzie etykiety. Wersja RFID wymaga materiału z czarnym znacznikiem i nie wykrywa przerw. Zwykła ZQ511 wykonuje nadruk bez kodowania UHF.' },
    { question: 'Jaki PN obejmuje oferta?', answer: 'ZQ51-BUW030E-00: konfigurację EMEA z koderem RFID, Wi-Fi 802.11ac, Bluetooth 4.1, standardową baterią i czcionkami angielskimi oraz łacińskimi. Zasilacz dobierz osobno.' },
    { question: 'Czy zwykła rolka etykiet z przerwą będzie działać?', answer: 'Nie dobieraj materiału wyłącznie według rozmiaru. ZQ511 RFID wymaga czarnego znacznika. Do kodowania potrzebna jest zgodna wkładka UHF RFID. Sprawdź materiał, położenie wkładki i kalibrację.' },
    { question: 'Czy potrzebuję taśmy barwiącej?', answer: 'Nie. Drukarka wykonuje nadruk termiczny bezpośredni na materiale termoczułym. Do zapisu radiowego potrzebujesz etykiety z układem UHF RFID.' },
    { question: 'Czy 127 mm/s dotyczy każdego zadania RFID?', answer: 'Nie. Jest to maksymalna prędkość nadruku przy włączonym Draft Mode. Kodowanie i sprawdzanie wkładki może zmniejszyć wydajność. Zmierz ją dla docelowej etykiety i formatu danych.' },
    { question: 'Czy zasilacz jest w komplecie?', answer: 'Nie. Do ładowania baterii w drukarce dobierz np. P1031365-042 z przewodem EU. Wyjętą baterię można ładować w zgodnej ładowarce. Przewód USB nie zastępuje zasilacza do ładowania.' },
    { question: 'Czy ZQ511 RFID odczyta całą półkę?', answer: 'Nie służy do takiej pracy. Koduje i sprawdza etykietę w torze materiałów. Do odczytu towarów na półce potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZQ511/ZQ521 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq511-zq521-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ511', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/mobile/zq511.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq511', 'zebra-zq521-rfid', 'zebra-zq630-plus-rfid'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/mobile/zq500/zq511-rfid.html',
}
