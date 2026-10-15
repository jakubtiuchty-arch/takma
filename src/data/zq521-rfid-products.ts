import type { Product } from './products'

const accessoryGuide = 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf'

export const zq521RfidAccessoryIds = [
  'zebra-ac-adapter-zq5', 'zebra-battery-zq5-standard', 'zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5',
  'zebra-battery-zq5-extended', 'zebra-soft-case-zq521', 'zebra-exoskeleton-zq521', 'zebra-zq630-charger-6',
  'zebra-zq5-vehicle-cradle', 'zebra-zq5-power-station-4', 'zebra-zq5-rugged-strap', 'zebra-zq5-mounting-plate',
  'zebra-usb-cable-zq5', 'zebra-car-charger-zq5', 'zebra-cleaning-pens-zd621r',
]

const additions = [
  { id: 'zebra-zq5-vehicle-cradle', slug: 'zebra-stacja-pojazdowa-p1063406-062', pn: 'P1063406-062', name: 'Stacja pojazdowa Zebra ZQ500', image: 'P1063406-062-framed.webp', description: 'Stacja Zebra P1063406-062 mocuje i ładuje jedną drukarkę serii ZQ500, także ZQ521 RFID. Pasuje do wersji z baterią standardową lub rozszerzoną oraz z egzoszkieletem. Aby korzystać ze stacji, potrzebujesz osobnego zasilacza sieciowego albo adaptera pojazdowego zgodnego z napięciem instalacji. Ramię RAM do montażu w pojeździe dobierz osobno. Drukarka i zasilacz nie są częścią zestawu.' },
  { id: 'zebra-zq5-power-station-4', slug: 'zebra-stacja-4-drukarek-p1063406-053', pn: 'P1063406-053', name: 'Stacja ładująca 4 drukarki Zebra ZQ500 EU', image: 'P1063406-053.webp', description: 'Stacja Zebra P1063406-053 ładuje do czterech drukarek serii ZQ500 jednocześnie, także ZQ521 RFID. Obsługuje baterie standardowe i rozszerzone oraz drukarki w egzoszkielecie. Zestaw obejmuje zasilacz i przewód europejski typu C. Drukarki widoczne na zdjęciu są sprzedawane osobno.' },
  { id: 'zebra-zq5-rugged-strap', slug: 'zebra-pasek-na-ramie-p1063406-035', pn: 'P1063406-035', name: 'Wzmocniony pasek na ramię Zebra ZQ500', image: 'P1063406-035.webp', description: 'Pasek Zebra P1063406-035 służy do noszenia drukarki serii ZQ500 na ramieniu, także modelu ZQ521 RFID. Ma metalowe zaczepy i długość 56 cali, około 142 cm. Drukarka jest sprzedawana osobno.' },
  { id: 'zebra-zq5-mounting-plate', slug: 'zebra-plyta-montazowa-p1063406-042', pn: 'P1063406-042', name: 'Płyta montażowa Zebra ZQ500', image: 'P1063406-042-framed.webp', description: 'Płyta Zebra P1063406-042 umożliwia stałe zamocowanie drukarki serii ZQ500 na zgodnym ramieniu RAM. Pasuje także do ZQ521 RFID. Ramię RAM, drukarka i zasilanie są sprzedawane osobno. Płyta nie jest potrzebna przy użyciu stacji pojazdowej P1063406-062 z ramieniem RAM. Nie zastępuje stacji ładującej.' },
]

export const zq521RfidAdditionalAccessories: Product[] = additions.map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`, shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  images: [`/images/products/${a.image}`], imageDescriptions: [`${a.name} — ${a.pn}${a.pn === 'P1063406-053' ? '; drukarki na zdjęciu są sprzedawane osobno' : ''}`],
  tags: ['magazyn', 'logistyka'], availability: 'unavailable', isNew: false, isBestseller: false,
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Kompatybilność', value: 'Zebra ZQ510, ZQ511, ZQ520, ZQ521, także wersje RFID' }],
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zq521-rfid', 'zebra-zq511-rfid', 'zebra-zq521', 'zebra-zq511'],
  downloads: [{ name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' }], createdAt: '2026-10-15',
}))

export const zq521RfidExistingAccessorySlugs = [
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-3250mah-zq511-zq521', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-bateria-6500mah-zq511-zq521', 'zebra-etui-pasek-zq521',
  'zebra-egzoszkielet-zq521', 'zebra-ladowarka-6-baterii-sac-mpp-6bcheu1-01', 'zebra-kabel-usb-twist-lock-zq5-zq6',
  'zebra-zasilacz-samochodowy-zq5', 'zebra-pisaki-czyszczace-105950-035',
]

export const zq521RfidProduct: Product = {
  id: 'zebra-zq521-rfid', slug: 'zebra-zq521-rfid', name: 'Zebra ZQ521 RFID', seoH1: 'Zebra ZQ521 RFID',
  seoTitle: 'Zebra ZQ521 RFID — mobilna drukarka i koder UHF',
  seoDescription: 'Zebra ZQ521 RFID drukuje i koduje etykiety UHF przy towarze. PN ZQ52-BUW030E-00, druk do 104 mm, Wi-Fi i Bluetooth. Sprawdź cenę oraz akcesoria w TAKMA.',
  shortDescription: 'Mobilna drukarka i koder RAIN UHF RFID. Druk do 104 mm, Wi-Fi 802.11ac, Bluetooth 4.1, bateria 3250 mAh i obudowa IP54.',
  description: `Zebra ZQ521 RFID to mobilna drukarka termiczna z koderem RAIN UHF RFID. Drukuje etykietę i zapisuje jej identyfikator bezpośrednio przy towarze.

## Druk i kodowanie w magazynie oraz w terenie

Drukarka służy do oznaczania kartonów, pojemników, części i wyposażenia. Pracownik może przygotować etykietę w miejscu jej naklejenia. Kodowanie obsługuje UHF EPC Gen2 v2, ISO/IEC 18000-63 i RAIN RFID. Technologia Adaptive Encoding ułatwia kalibrację wkładki RFID.

Dla zgodnych etykiet minimalny odstęp kolejnych wkładek wynosi 16 mm. Przed wdrożeniem sprawdź zapis i odczyt na docelowej powierzchni. Powiąż identyfikator EPC z rekordem w systemie magazynowym i ustal obsługę błędnego kodowania.

ZQ521 RFID koduje i sprawdza etykietę w torze materiałów. Do radiowej inwentaryzacji całej półki potrzebujesz osobnego czytnika UHF i oprogramowania.

## Konfiguracja EMEA ZQ52-BUW030E-00

Oferowany PN ma koder RFID, Wi-Fi 802.11ac, Bluetooth 4.1 Classic i BLE oraz standardową baterię PowerPrecision+. Jest przeznaczony dla regionu EMEA i ma czcionki angielskie oraz łacińskie. W zestawie jest klips do paska. Zasilacz do ładowania dobierz osobno.

Wi-Fi pracuje w pasmach 2,4 i 5 GHz. Dwa interfejsy radiowe mogą działać jednocześnie. USB 2.0 OTG z gniazdem Micro-AB umożliwia komunikację przewodową. NFC Print Touch ułatwia parowanie; nie służy do kodowania etykiet NFC.

## Etykiety z czarnym znacznikiem

Wersja RFID wymaga materiału z czarnym znacznikiem. Nie wykrywa przerw między etykietami. Sprawdź położenie znacznika i wkładki RFID, szerokość materiału oraz średnicę rolki. Oferowany PN jest przeznaczony do etykiet z podkładem.

ZQ521 RFID drukuje termicznie bezpośrednio, bez taśmy barwiącej. Rozdzielczość wynosi 203 dpi, a maksymalna szerokość nadruku 104 mm. Szerokość materiału wynosi 50,8–113 mm, a średnica rolki do 57 mm. Maksymalna prędkość 127 mm/s dotyczy włączonego trybu Draft Mode. Kodowanie RFID może zmniejszyć wydajność zadania.

## Bateria i warunki pracy

Wymienna bateria PowerPrecision+ ma nominalnie 3250 mAh. Opcjonalna bateria rozszerzona ma 6500 mAh. Czas pracy zależy od formatu etykiety, nadruku, kodowania, połączeń i temperatury. Ekran LCD pokazuje stan baterii i połączeń. Link-OS wspiera konfigurację i zarządzanie drukarką.

Drukarka waży około 0,79 kg z baterią standardową. Ma klasę IP54 i odporność na upadki z 2,1 m na beton. Pracuje w temperaturze od −20 do 55°C. Opcjonalny [egzoszkielet P1063406-044](/produkt/zebra-egzoszkielet-zq521) zwiększa ochronę do IP65 i odporność na upadki do 3 m. Dobierz także etykietę do warunków pracy.

## Ładowanie i wyposażenie

Aby ładować baterię w drukarce z sieci, potrzebujesz [zasilacza EU P1031365-042](/produkt/zebra-zasilacz-ac-zq5-zq6). Alternatywą jest ładowanie wyjętej baterii w ładowarce 1-, 3- lub 6-gniazdowej. Przewód USB służy do komunikacji i nie zastępuje tego zasilacza.

[Stacja P1063406-062](/produkt/zebra-stacja-pojazdowa-p1063406-062) mocuje i ładuje jedną drukarkę. Wymaga osobnego zasilacza. [Stacja P1063406-053](/produkt/zebra-stacja-4-drukarek-p1063406-053) ładuje cztery drukarki i ma zasilacz w zestawie. W pojeździe dobierz adapter do napięcia instalacji. Adapter P1031359 jest przeznaczony do 12 V.

Jeśli potrzebujesz wyłącznie nadruku, sprawdź [Zebra ZQ521](/produkt/zebra-zq521). Do mobilnego druku RFID z większą rolką porównaj [Zebra ZQ630 Plus RFID](/produkt/zebra-zq630-plus-rfid).

## Gwarancja

Gwarancja na drukarkę wynosi 24 miesiące, a na baterię 12 miesięcy. Głowica w regionie EMEA ma ochronę przez 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zq521-rfid-framed.webp'], imageDescriptions: ['Zebra ZQ521 RFID — mobilna drukarka z oznaczeniem UHF RFID, widok pod kątem'],
  tags: ['magazyn', 'logistyka', 'outdoor', 'retail'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 dpi', predkoscDruku: 'do 127 mm/s z Draft Mode', szerokoscDruku: 'do 104 mm', szerokoscEtykiet: '50,8–113 mm; czarny znacznik' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Mobilna drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Oferowany PN', value: 'ZQ52-BUW030E-00 — EMEA, bateria standardowa' },
    { name: 'RFID', value: 'UHF EPC Gen2 v2, ISO/IEC 18000-63, RAIN RFID; Adaptive Encoding' },
    { name: 'Rodzaj druku', value: 'Termiczny bezpośredni; bez taśmy barwiącej' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Prędkość nadruku', value: 'do 127 mm/s z Draft Mode; kodowanie może zmniejszyć wydajność' },
    { name: 'Materiał', value: 'Szerokość 50,8–113 mm; czarny znacznik; brak wykrywania przerw' },
    { name: 'Średnica rolki', value: 'do 57 mm' },
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
    { name: 'Odporność na upadki', value: '2,1 m na beton; do 3 m z egzoszkieletem' },
    { name: 'Temperatura pracy', value: '−20 do 55°C' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '158 × 155 × 67 mm' },
    { name: 'Masa z baterią standardową', value: 'Około 0,79 kg' },
    { name: 'W zestawie', value: 'Drukarka z koderem RFID, bateria standardowa, klips do paska' },
    { name: 'Do kupienia osobno', value: 'Zasilacz lub ładowarka baterii, etykiety RFID i dodatkowe wyposażenie' },
    { name: 'Gwarancja', value: 'Drukarka 24 miesiące; bateria 12 miesięcy; głowica EMEA 12 miesięcy lub milion cali druku' },
  ],
  variants: [{ partNumber: 'ZQ52-BUW030E-00', name: 'RFID — Wi-Fi, Bluetooth, bateria, EMEA', attributes: {}, availability: 'unavailable' }],
  applications: ['Druk i kodowanie etykiet przy towarze', 'Oznaczanie kartonów i pojemników', 'Przygotowanie etykiet EPC do ewidencji magazynowej', 'Znakowanie części i wyposażenia w terenie'],
  compatibleAccessories: [], relatedAccessories: zq521RfidAccessoryIds,
  faq: [
    { question: 'Czym ZQ521 RFID różni się od zwykłej ZQ521?', answer: 'ZQ521 RFID ma koder UHF do zapisu danych w układzie etykiety. Wersja RFID wymaga materiału z czarnym znacznikiem i nie wykrywa przerw. Zwykła ZQ521 wykonuje nadruk bez kodowania UHF.' },
    { question: 'Jaki PN obejmuje oferta?', answer: 'ZQ52-BUW030E-00: konfigurację EMEA z koderem RFID, Wi-Fi 802.11ac, Bluetooth 4.1, standardową baterią i czcionkami angielskimi oraz łacińskimi. Zasilacz dobierz osobno.' },
    { question: 'Czy zwykła rolka etykiet z przerwą będzie działać?', answer: 'Nie dobieraj materiału wyłącznie według rozmiaru. ZQ521 RFID wymaga czarnego znacznika. Do kodowania potrzebna jest zgodna wkładka UHF RFID. Sprawdź materiał, położenie wkładki i kalibrację.' },
    { question: 'Czy potrzebuję taśmy barwiącej?', answer: 'Nie. Drukarka wykonuje nadruk termiczny bezpośredni na materiale termoczułym. Do zapisu radiowego potrzebujesz etykiety z układem UHF RFID.' },
    { question: 'Czy 127 mm/s dotyczy każdego zadania RFID?', answer: 'Nie. Jest to maksymalna prędkość nadruku przy włączonym Draft Mode. Kodowanie i sprawdzanie wkładki może zmniejszyć wydajność. Zmierz ją dla docelowej etykiety i formatu danych.' },
    { question: 'Czy zasilacz jest w komplecie?', answer: 'Nie. Do ładowania baterii w drukarce dobierz np. P1031365-042 z przewodem EU. Wyjętą baterię można ładować w zgodnej ładowarce. Przewód USB nie zastępuje zasilacza do ładowania.' },
    { question: 'Czy ZQ521 RFID odczyta całą półkę?', answer: 'Nie służy do takiej pracy. Koduje i sprawdza etykietę w torze materiałów. Do odczytu towarów na półce potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZQ511/ZQ521 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq511-zq521-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ521', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/mobile/zq521.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq521', 'zebra-zq630-plus-rfid', 'zebra-zd621r'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/mobile/zq500/zq521-rfid.html',
}
