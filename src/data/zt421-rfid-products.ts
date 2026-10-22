import type { Product } from './products'

export const zt421RfidAccessoryIds = [
  'zebra-cutter-zt421',
  'zebra-wifi6-p1083320-037g',
  'zebra-module-wifi-zt111',
  'zebra-platen-zt421',
  'zebra-printhead-zt421-203',
  'zebra-printhead-zt421-300',
  'zebra-lpt-zt411',
  'zebra-applicator-p1083320-038',
  'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r',
  'zebra-cleaning-pens-zd621r',
  'zebra-cleaning-swabs-zd621r',
]

export const zt421RfidAccessorySlugs = [
  'zebra-gilotyna-zt421', 'zebra-walek-dociskowy-zt420-zt421',
  'zebra-glowica-203dpi-zt421', 'zebra-glowica-300dpi-zt421',
  'zebra-interfejs-aplikatora-p1083320-038',
]

export const zt421RfidAdditionalAccessories: Product[] = [{
  id: 'zebra-applicator-p1083320-038',
  slug: 'zebra-interfejs-aplikatora-p1083320-038',
  name: 'Interfejs aplikatora Zebra ZT411, ZT421, ZT610, ZT620 — P1083320-038',
  shortDescription: 'Karta interfejsu aplikatora 5–24 V do drukarek Zebra ZT411, ZT421, ZT610 i ZT620, także wersji RFID.',
  description: 'Zebra P1083320-038 to karta interfejsu aplikatora 5–24 V. Łączy zgodną drukarkę z układem sterowania aplikatora etykiet. Pasuje do Zebra ZT411, ZT421, ZT610 i ZT620, także wersji RFID. Przed montażem sprawdź gniazdo rozszerzeń oraz wymagania elektryczne i sygnały sterujące aplikatora. Sama karta nie nakleja etykiet i nie zawiera mechanizmu odklejania. Aplikator oraz wymagane elementy obsługi etykiet dobierz osobno.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/P1123335-025.jpg'],
  imageDescriptions: ['Karta interfejsu aplikatora Zebra P1083320-038, 5–24 V'],
  tags: ['produkcja', 'magazyn'], availability: 'unavailable', isNew: false, isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'P1083320-038' },
    { name: 'Kompatybilność', value: 'Zebra ZT411, ZT421, ZT610, ZT620; także wersje RFID' },
    { name: 'Interfejs aplikatora', value: '5–24 V' },
  ],
  applications: ['Sterowanie aplikatorem etykiet'], compatibleAccessories: [],
  relatedAccessories: ['zebra-zt421-rfid'], downloads: [], createdAt: '2026-10-15',
}]

// Aktualne konfiguracje EU/ROW: Solutions Pathway, model 227844, 15.10.2026.
// Starsze PN ...C0Z mają status Pending End Of Sale. Ceny i stany pochodzą z integracji po PN.
export const zt421RfidProduct: Product = {
  id: 'zebra-zt421-rfid', slug: 'zebra-zt421-rfid',
  name: 'Zebra ZT421 RFID', seoH1: 'Zebra ZT421 RFID',
  seoTitle: 'Zebra ZT421 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZT421 RFID – 6-calowa drukarka RFID UHF 203 lub 300 dpi. Nadruk do 168 mm z prędkością do 305 mm/s, materiał 51–178 mm, Bluetooth 4.1.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT421 RFID drukuje i koduje szerokie etykiety RAIN UHF. Druk do 168 mm, rozdzielczość 203 lub 300 dpi.',
  description: `Zebra ZT421 RFID to 6-calowa przemysłowa drukarka RFID UHF o szerokości nadruku 168 mm. Wkładki zgodne z ISO/IEC 18000-63, RFID RAIN i EPC Gen 2 v2.1 mogą leżeć co 16 mm. Drukuje z prędkością do 305 mm/s, czyli 12 cali/s.

## Szeroki materiał 51–178 mm

Przy odrywaniu i obcinaniu materiał ma 51–178 mm szerokości, a przy odklejaniu i nawijaniu 51–171 mm. Taśma do 450 m ma 51–174 mm szerokości. Maksymalna długość wydruku wynosi 2591 mm przy 203 dpi i 1143 mm przy 300 dpi. Rolka ma do 203 mm średnicy na gilzie 76 mm.

## ZT42162-T0E00L0Z i ZT42163-T0E00L0Z

Obie konfiguracje mają fabryczny koder RFID i odrywanie etykiet. Pierwsza ma głowicę 203 dpi, druga 300 dpi. Złącza obejmują Ethernet 10/100, RS-232, dwa porty USB Host, USB 2.0 i Bluetooth 4.1. Wi-Fi 6 z Bluetooth 5.3 dodaje się kartą w wolnym gnieździe.

## Ekran 4,3 cala i Print Touch

Kolorowy ekran dotykowy 4,3 cala pozwala tworzyć skróty do często używanych ustawień, także RFID. Print Touch paruje drukarkę z urządzeniem NFC jednym dotknięciem. Printer Profile Manager Enterprise zarządza drukarkami Link-OS z jednego miejsca. Drukarka waży 18,14 kg.

[Zebra ZT620 RFID](/produkt/zebra-zt620-rfid) też drukuje do 168 mm, ale ma Gigabit Ethernet i 1 GB RAM.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'zebra',
  images: ['/images/products/zt421_1_s.png', '/images/products/zt421_2_s.png', '/images/products/zt421_3_s.png'],
  imageDescriptions: [
    'Zebra ZT421 RFID — przemysłowa drukarka etykiet o szerokości druku do 168 mm',
    'Zebra ZT421 RFID — widok obudowy i ekranu dotykowego',
    'Zebra ZT421 RFID — widok z boku z oknem komory materiałów',
  ],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'do 305 mm/s (203 dpi) lub 254 mm/s (300 dpi)',
    szerokoscDruku: 'do 168 mm', szerokoscEtykiet: '51–178 mm przy odrywaniu',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Prędkość druku', value: 'do 305 mm/s (203 dpi) lub 254 mm/s (300 dpi); prędkość kodowania zależy od etykiety i danych' },
    { name: 'Szerokość druku', value: 'do 168 mm' },
    { name: 'Szerokość mediów', value: '51–178 mm przy odrywaniu i cięciu; 51–171 mm przy odklejaniu i nawijaniu' },
    { name: 'Minimalny odstęp wkładek RFID', value: '16 mm; wymaga doboru i kalibracji materiału' },
    { name: 'Grubość mediów', value: '0,058–0,25 mm' },
    { name: 'Rolka etykiet', value: 'Średnica do 203 mm; gilza 76 mm' },
    { name: 'Taśma barwiąca', value: 'Długość do 450 m; szerokość 51–174 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0, dwa porty USB Host, RS-232, Ethernet 10/100' },
    { name: 'Łączność bezprzewodowa', value: 'Bluetooth 4.1; Wi-Fi 5 lub Wi-Fi 6 jako osobny moduł' },
    { name: 'Obsługa etykiet w oferowanych PN', value: 'Odrywanie; bez fabrycznego obcinacza i nawijaka' },
    { name: 'Region oferowanych PN', value: 'RFID ROW — poza USA, Kanadą i Japonią; przewody EU i UK' },
    { name: 'Pamięć', value: '256 MB SDRAM, 512 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; ZPL i ZPL II; EPL i EPL2 tylko w wersji 203 dpi; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '495 × 336 × 324 mm' },
    { name: 'Masa', value: '18,14 kg' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
  ],
  variants: [
    { partNumber: 'ZT42162-T0E00L0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT42163-T0E00L0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
  ],
  applications: ['Szerokie etykiety RFID do 168 mm na przeładunku', 'Kodowanie etykiet UHF na palety i zasoby'],
  compatibleAccessories: [], relatedAccessories: zt421RfidAccessoryIds,
  faq: [
    { question: 'Jak długą etykietę wydrukuje ZT421 RFID?', answer: 'Do 2591 mm przy 203 dpi i do 1143 mm przy 300 dpi. Węższa ZT411 RFID w wersji 203 dpi drukuje do 3988 mm.' },
    { question: 'Czy ZT421 RFID ma wersję do etykiet na metal?', answer: 'Nie. Opcja On-metal do materiału 1,5 mm dotyczy tylko ZT411 RFID. ZT421 RFID przyjmuje materiał 0,058–0,25 mm.' },
    { question: 'Jakie gniazda rozszerzeń ma ZT421 RFID?', answer: 'Dwa wolne gniazda na karty łączności: Wi-Fi z Bluetooth, port równoległy, Ethernet lub interfejs aplikatora.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZT411 / ZT421 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zt400-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZT400 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt400-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki i instrukcje ZT421', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt421.html', size: 'Online' },
    { name: 'Instrukcja obsługi ZT421 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt421/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt421', 'zebra-zt411-rfid', 'zebra-zt610-rfid', 'zebra-zt231-rfid'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/industrial/zt400-series/zt421-rfid.html',
}
