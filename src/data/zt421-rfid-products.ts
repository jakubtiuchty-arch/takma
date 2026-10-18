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
  seoDescription: 'Zebra ZT421 RFID: 6-calowa drukarka i koder RAIN UHF 203 lub 300 dpi. Druk do 168 mm z prędkością do 305 mm/s, Ethernet, Bluetooth, ekran 4,3 cala.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT421 RFID drukuje i koduje szerokie etykiety RAIN UHF. Druk do 168 mm, rozdzielczość 203 lub 300 dpi.',
  description: `Zebra ZT421 RFID to przemysłowa drukarka i koder etykiet RAIN UHF RFID o szerokości druku do 168 mm. Przygotowuje nadruk i zapisuje identyfikator w układzie elektronicznym etykiety.

Wybierz ten model, gdy etykieta wymaga większej powierzchni niż oferują drukarki z nadrukiem do 104 mm. ZT421 RFID służy do znakowania kartonów, palet, pojemników i wyrobów. Dane nadruku oraz identyfikator EPC mogą być powiązane z tym samym rekordem w systemie WMS lub ERP.

Dostępne są dwie konfiguracje z fabrycznym koderem RFID dla regionu ROW oraz przewodami zasilającymi EU i UK. ZT42162-T0E00L0Z ma rozdzielczość 203 dpi, a ZT42163-T0E00L0Z — 300 dpi. Wersja 203 dpi drukuje z prędkością do 305 mm/s, a wersja 300 dpi do 254 mm/s. Wybierz 300 dpi do drobnego tekstu, niewielkich kodów 2D i szczegółowej grafiki. Rozdzielczość określa szczegółowość nadruku, a nie zasięg odczytu RFID.

Moduł RFID obsługuje etykiety zgodne z EPC UHF Gen2 v2.1, ISO/IEC 18000-63 i RAIN RFID. Adaptacyjne kodowanie ułatwia dobór położenia wkładki oraz kalibrację. Minimalny odstęp kolejnych wkładek wynosi 16 mm przy odpowiednio dobranym materiale. Przed wdrożeniem wydrukuj serię próbną wybranej etykiety na docelowym przedmiocie.

Drukarka obsługuje druk termotransferowy z taśmą barwiącą oraz druk termiczny bezpośredni na etykietach termoczułych. W obu metodach kodowanie wymaga etykiety z wkładką RFID. Rolka może mieć średnicę do 203 mm na gilzie 76 mm. Taśma barwiąca ma długość do 450 m i szerokość 51–174 mm. Przy standardowym odrywaniu szerokość materiału wynosi 51–178 mm.

Oba warianty mają USB 2.0, dwa porty USB Host, RS-232, Ethernet 10/100 i Bluetooth 4.1. Wi-Fi nie jest wyposażeniem tych PN. Do połączenia bezprzewodowego możesz dobrać osobno zgodny moduł Wi-Fi 5 lub Wi-Fi 6. Kolorowy ekran dotykowy 4,3 cala służy do ustawień druku, materiałów i RFID. Link-OS oraz narzędzia Zebra DNA wspierają konfigurację i zarządzanie drukarką.

Metalowa rama i składana pokrywa chronią mechanizm oraz ułatwiają wymianę szerokich rolek z boku urządzenia. Dodatkowe wyposażenie obejmuje obcinacz, odklejak i karty interfejsów. Obcinacz musi przecinać materiał między wkładkami RFID. Wewnętrzny nawijak pełnej rolki wymaga konfiguracji fabrycznej. Nie jest częścią pokazanych wariantów. Etykiety, taśma i dodatkowe moduły są sprzedawane osobno.

ZT421 RFID nie jest wersją ZT411 On-metal do grubych etykiet na metal. Do takiego materiału dobierz odpowiednią drukarkę oraz etykietę. Jeśli potrzebujesz wyłącznie nadruku bez kodowania radiowego, sprawdź [Zebra ZT421](/produkt/zebra-zt421).

Gwarancja na drukarkę w regionie EMEA wynosi 24 miesiące. Obcinacz i części zużywające się mają ochronę ograniczoną do 12 miesięcy. Głowica jest objęta ochroną przez 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
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
    { name: 'Wymiary (gł. × szer. × wys.)', value: '495 × 336 × 324 mm' },
    { name: 'Masa', value: '18,14 kg' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
    { name: 'Gwarancja EMEA', value: 'Drukarka: 24 miesiące; obcinacz i części zużywające się: 12 miesięcy; głowica: 12 miesięcy lub milion cali druku' },
  ],
  variants: [
    { partNumber: 'ZT42162-T0E00L0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT42163-T0E00L0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
  ],
  applications: ['Druk i kodowanie szerokich etykiet RFID na kartony i palety', 'Identyfikacja pojemników w obiegu magazynowym', 'Przygotowanie etykiet RFID powiązanych z danymi WMS lub ERP', 'Znakowanie wyrobów i opakowań zbiorczych na produkcji'],
  compatibleAccessories: [], relatedAccessories: zt421RfidAccessoryIds,
  faq: [
    { question: 'Co odróżnia ZT421 RFID od standardowej ZT421?', answer: 'ZT421 RFID ma fabryczny moduł do zapisu i odczytu układu etykiety podczas drukowania. Zwykła ZT421 bez tego modułu wykonuje nadruk. Jeśli nie potrzebujesz identyfikacji radiowej, wybierz standardową ZT421.' },
    { question: 'Kiedy wybrać ZT421 RFID zamiast ZT411 RFID?', answer: 'Wybierz ZT421 RFID, gdy potrzebujesz nadruku szerszego niż 104 mm. ZT421 RFID drukuje do 168 mm, a ZT411 RFID do 104 mm. W obu przypadkach dopasuj wkładkę RFID, format rolki i materiał do urządzenia oraz zastosowania.' },
    { question: 'Które numery PN są dostępne na tej karcie?', answer: 'ZT42162-T0E00L0Z to wersja 203 dpi. ZT42163-T0E00L0Z ma 300 dpi. Obie konfiguracje obejmują fabryczne RFID ROW, przewody EU i UK, Ethernet, USB, RS-232, Bluetooth 4.1 i USB Host.' },
    { question: 'Czy te warianty mają Wi-Fi?', answer: 'Nie. Oba PN mają Bluetooth 4.1 oraz połączenia przewodowe. Wi-Fi możesz dodać przez zgodny moduł Wi-Fi 5 P1083320-037C albo Wi-Fi 6 P1083320-037G. Moduły są sprzedawane osobno.' },
    { question: 'Czy ZT421 RFID nadaje się do grubych etykiet na metal?', answer: 'Dostępne PN to standardowa ZT421 RFID, z materiałem o grubości do 0,25 mm. Nie jest to wersja On-metal. Do grubych etykiet przeznaczonych na metal sprawdź odpowiednią konfigurację ZT411 RFID On-metal.' },
    { question: 'Czy drukarka odczyta towary na całej półce?', answer: 'Nie. Drukarka koduje i sprawdza etykietę w swoim torze materiałów. Do radiowej inwentaryzacji półki potrzebujesz czytnika UHF RFID oraz oprogramowania magazynowego.' },
    { question: 'Czy etykiety i taśma są w zestawie?', answer: 'Nie. Dobierz je osobno do rozmiaru nadruku, wkładki RFID i powierzchni znakowanego przedmiotu. Druk termotransferowy wymaga taśmy barwiącej. Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZT400 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt400-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki i instrukcje ZT421', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt421.html', size: 'Online' },
    { name: 'Instrukcja obsługi ZT421 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt421/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt421', 'zebra-zt411-rfid', 'zebra-zt610-rfid', 'zebra-zt231-rfid'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/industrial/zt400-series/zt421-rfid.html',
}
