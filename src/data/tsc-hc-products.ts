import type { Product, ProductVariant } from './products'

// Drukarki TSC w wersjach dla ochrony zdrowia (HC): TH/DH 2" i 4", DH-L 2" z rolką 165 mm, Alpha-30LHC.
// Fakty: karta serii TH DH (EMEA, 24.04.2026), karta Alpha-30L/40L (29.01.2024), instrukcje TSC serii
// TH240/DH240, TH220/DH220, DH220L i Alpha-30L/40L; konfiguracje PN według schematu TSC u dystrybutora.
// Ceny i stany z /api/stock z 25.10.2026. Audyt: docs/catalog/hc-producenci-2026-10-25/J1.md

const datasheetThDh = { name: 'Karta katalogowa TSC TH DH (EN)', type: 'datasheet' as const, url: '/downloads/tsc-th-dh-karta-produktu-2026-en.pdf', size: '5,3 MB' }

const th240thc: Product = {
  id: 'tsc-th240thc',
  slug: 'tsc-th240thc',
  name: 'TSC TH240THC / TH340THC',
  shortDescription: 'TSC TH240THC / TH340THC — biurkowa drukarka etykiet 4" dla placówek medycznych: termotransfer i druk termiczny, biała antybakteryjna obudowa, opcja z kasetą taśmy.',
  seoTitle: 'TSC TH240THC / TH340THC — drukarka etykiet 4" dla służby zdrowia',
  seoDescription: 'Drukarka etykiet TSC TH240THC i TH340THC dla placówek medycznych: termotransfer 4", 203 lub 300 dpi, ekran dotykowy, zasilacz IEC 60601-1. Szpitalna drukarka etykiet TSC, drukarka termotransferowa TSC TH240THC, TH340THC TSC. PN: TH240HC-A001-0002, TH240HC-A001-0102, TH340HC-A001-0002, TH340HC-A001-0102, TH240HC-A002-0002, TH240HC-A002-0102, TH240HC-A002-0202.',
  description: `TSC TH240THC i TH340THC to 4-calowe drukarki biurkowe serii TH w wykonaniu dla placówek ochrony zdrowia. Drukują termotransferowo, a na materiale termicznym również bez taśmy barwiącej. Służą do oznaczania próbek, etykiet aptecznych i śledzenia pacjentów.

Biała obudowa w układzie clamshell jest dwuścienna. Tworzywo jest gotowe do dezynfekcji, ma łatwą do czyszczenia powierzchnię i uszczelniony panel przycisków. Obudowa ma właściwości antybakteryjne. Zewnętrzny zasilacz 90 W z zestawu posiada certyfikat IEC 60601-1.

Głowica 203 dpi w TH240THC zapewnia prędkość do 203 mm/s i szerokość druku 108 mm. TH340THC z głowicą 300 dpi osiąga 152 mm/s i 105,7 mm szerokości druku. Ustawienia zmienia się na kolorowym ekranie dotykowym 3,5 cala.

Wersje A001 przyjmują rolkę taśmy 300 m na gilzie 1 cala lub 110 m na gilzie 0,5 cala. Wersje A002 to model TH240TRCHC z kasetą taśmy 100 m, która upraszcza zakładanie taśmy. Wszystkie konfiguracje mają USB, USB Host, RS-232 i Ethernet; część wariantów ma również Wi-Fi z Bluetooth lub Bluetooth MFi.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1976.6,
  images: ['/images/products/TH240HC-A001-0002.png', '/images/products/TH240HC-A001-0002-2.png'],
  imageDescriptions: [
    'TSC TH240THC — biała drukarka etykiet 4" z kolorowym ekranem dotykowym, widok z przodu pod kątem',
    'TSC TH240THC — widok z przodu: ekran dotykowy 3,5 cala, przyciski obok ekranu i szczelina wydruku',
  ],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny',
    rozdzielczosc: '203 dpi (TH240THC) lub 300 dpi (TH340THC)',
    predkoscDruku: 'Do 203 mm/s (203 dpi); do 152 mm/s (300 dpi)',
    szerokoscDruku: 'Do 108 mm (203 dpi); do 105,7 mm (300 dpi)',
    szerokoscEtykiet: '15–120 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Modele', value: 'TH240THC (203 dpi), TH340THC (300 dpi); TH240TRCHC — wersja z kasetą taśmy (PN z A002)' },
    { name: 'Metoda druku', value: 'Termotransferowa i termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm) lub 300 dpi (12 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 300 dpi' },
    { name: 'Szerokość druku', value: 'Do 108 mm przy 203 dpi; do 105,7 mm przy 300 dpi' },
    { name: 'Długość wydruku', value: 'Do 25 400 mm przy 203 dpi; do 11 430 mm przy 300 dpi' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Biała obudowa clamshell z podwójnymi ściankami; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelniony panel przycisków; obudowa antybakteryjna; zasilacz zewnętrzny z certyfikatem IEC 60601-1' },
    { name: 'Taśma barwiąca', value: 'Wersje A001: rolka 300 m (średnica do 67 mm, gilza 1") lub 110 m (średnica do 40 mm, gilza 0,5"), farba na zewnątrz, szerokość 40–110 mm. Wersje A002 (TH240TRCHC): kaseta taśmy 100 m, szerokość 110 mm' },
    { name: 'Szerokość materiału', value: '15–120 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm (203 dpi); 5–11 430 mm (300 dpi)' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka, z nacięciem (nawinięcie na zewnątrz)' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika (regulowana pozycja), czujnik końca taśmy, czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Kolorowy ekran dotykowy 3,5 cala (480 × 320 pikseli); włącznik, przyciski podawania, pauzy i ponownego wydruku' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100 Mb/s; w PN z końcówką 0102 moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0; w PN z końcówką 0202 Bluetooth MFi 5.0' },
    { name: 'Pamięć', value: '128 MB Flash, 128 MB SDRAM; czytnik microSD do 512 GB (FAT32, exFAT)' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 39, Code 93, Code 128, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar, rMQR' },
    { name: 'Bezpieczeństwo sieci', value: 'HTTPS, SNMPv3, 802.1X, filtr portu TCP/IP 9100' },
    { name: 'Zarządzanie', value: 'Wbudowana strona WWW, wirtualny panel, TSC Console, SOTI Connect' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '223 × 186 × 286 mm' },
    { name: 'Waga', value: '2,8 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny zasilacz impulsowy z certyfikatem IEC 60601-1; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 3,75 A, 90 W' },
    { name: 'Temperatura pracy', value: 'Wersje A001: 0–40°C; wersje z kasetą taśmy (A002): 20–40°C; wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak, gilotyna (cięcie pełne i częściowe), moduł Wi-Fi z Bluetooth 5.0, moduł Bluetooth 5.0, zestawy rozbudowy UHF RFID' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki, klawiatura z wyświetlaczem KP-200 Plus, adapter wąskiego materiału 10 mm, PDF Print Dongle, stacja baterii BP-4000' },
    { name: 'W zestawie', value: 'Wersje A001: skrócona instrukcja, przewód USB, przewód zasilający, zasilacz, 2 trzpienie taśmy 1" do rolki 300 m, papierowa gilza taśmy 1", adapter materiału 120 mm. Wersje A002: skrócona instrukcja, przewód USB, przewód zasilający, zasilacz, adapter materiału 120 mm' },
    { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety na próbki',
    'Etykiety apteczne',
    'Śledzenie pacjentów',
    'Druk termotransferowy z taśmą w rolce lub w kasecie',
  ],
  variants: [
    { partNumber: 'TH240HC-A001-0002', name: 'TH240THC, 203 dpi, rolka taśmy, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '203 dpi', 'Taśma': 'Rolka 300 m' }, priceFrom: 1976.6, availability: 'unavailable' },
    { partNumber: 'TH240HC-A001-0102', name: 'TH240THC, 203 dpi, rolka taśmy, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Taśma': 'Rolka 300 m', 'Łączność': 'Wi-Fi + BT 5.0' }, priceFrom: 2547.56, availability: 'unavailable' },
    { partNumber: 'TH340HC-A001-0002', name: 'TH340THC, 300 dpi, rolka taśmy, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '300 dpi', 'Taśma': 'Rolka 300 m' }, priceFrom: 2470.74, availability: 'unavailable' },
    { partNumber: 'TH340HC-A001-0102', name: 'TH340THC, 300 dpi, rolka taśmy, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '300 dpi', 'Taśma': 'Rolka 300 m', 'Łączność': 'Wi-Fi + BT 5.0' }, priceFrom: 3044.27, availability: 'unavailable' },
    { partNumber: 'TH240HC-A002-0002', name: 'TH240TRCHC, 203 dpi, kaseta taśmy, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '203 dpi', 'Taśma': 'Kaseta 100 m' }, priceFrom: 1976.6, availability: 'unavailable' },
    { partNumber: 'TH240HC-A002-0102', name: 'TH240TRCHC, 203 dpi, kaseta taśmy, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Taśma': 'Kaseta 100 m', 'Łączność': 'Wi-Fi + BT 5.0' }, priceFrom: 2547.56, availability: 'unavailable' },
    { partNumber: 'TH240HC-A002-0202', name: 'TH240TRCHC, 203 dpi, kaseta taśmy, Bluetooth MFi 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Taśma': 'Kaseta 100 m', 'Łączność': 'BT MFi 5.0' }, priceFrom: 2299.21, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Gęstość punktów głowicy drukującej.\n\n203 dpi (TH240THC) — do 203 mm/s, druk na szerokości 108 mm.\n\n300 dpi (TH340THC) — do 152 mm/s; wyraźniejszy drobny tekst i małe kody 2D.',
    'Taśma': 'Sposób zakładania taśmy barwiącej.\n\nRolka 300 m — taśma nawijana na trzpień; przyjmuje też rolki 110 m na gilzie 0,5 cala.\n\nKaseta 100 m — taśma w gotowej kasecie, wkładanej do drukarki w całości (TH240TRCHC).',
    'Łączność': 'Interfejs bezprzewodowy zamontowany w danej wersji; USB, USB Host, RS-232 i Ethernet ma każda wersja.\n\nWi-Fi + BT 5.0 — sieć 802.11a/b/g/n/ac i Bluetooth 5.0.\n\nBT MFi 5.0 — Bluetooth 5.0 z certyfikatem Apple MFi, np. do druku z iPhone lub iPad.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['tsc-th-roll-holder'],
  faq: [
    {
      question: 'Czym wersja TH240TRCHC różni się od TH240THC?',
      answer: 'TH240TRCHC (PN z oznaczeniem A002) przyjmuje taśmę w kasecie o długości 100 m i szerokości 110 mm. TH240THC (PN z A001) korzysta z rolek 300 m lub 110 m o szerokości 40–110 mm. Wersja z kasetą pracuje w temperaturze otoczenia 20–40°C, a wersja na rolki w zakresie 0–40°C. Obie mają 203 dpi, ekran dotykowy i tę samą obudowę dla ochrony zdrowia.',
    },
    {
      question: 'Jak dezynfekować obudowę TSC TH240THC?',
      answer: 'Przed czyszczeniem należy wyłączyć drukarkę wyłącznikiem, ale zostawić przewód zasilający w gniazdku, aby urządzenie było uziemione. Obudowę przeciera się niestrzępiącą się ściereczką zwilżoną wodą, w razie potrzeby z detergentem bez chloru, a następnie 75-procentowym etanolem. Płynu nie wolno rozpylać ani wylewać bezpośrednio na drukarkę. Inne środki mogą uszkodzić urządzenie i unieważnić gwarancję.',
    },
    {
      question: 'Czego dotyczy certyfikat IEC 60601-1 w TH340THC?',
      answer: 'Certyfikat dotyczy zewnętrznego zasilacza impulsowego dostarczanego z drukarką. Zasilacz przyjmuje 100–240 V AC i podaje 24 V DC przy 3,75 A, czyli 90 W.',
    },
    {
      question: 'Jakie taśmy barwiące pasują do TH240THC i TH340THC?',
      answer: 'Taśmy z farbą po zewnętrznej stronie, o szerokości 40–110 mm. Rolka 300 m ma gilzę 1 cala i średnicę do 67 mm, a rolka 110 m gilzę 0,5 cala i średnicę do 40 mm. Do zestawu dołączono dwa trzpienie 1 cala do rolek 300 m i papierową gilzę taśmy 1 cala.',
    },
    {
      question: 'Czy do wersji z Ethernetem można dodać Wi-Fi?',
      answer: 'Tak. Dealer może zamontować moduł łączący Wi-Fi i Bluetooth 5.0 lub sam moduł Bluetooth 5.0. Konfiguracje z końcówką PN 0102 mają moduł Wi-Fi z Bluetooth od razu, a TH240HC-A002-0202 ma fabryczny Bluetooth MFi.',
    },
    {
      question: 'Czy TH240THC drukuje szablony przygotowane dla drukarek Zebra?',
      answer: 'Drukarka używa języka TSPL-EZD zgodnego z ZPL, ZPL II, EPL oraz DPL, a jej oprogramowanie samo rozpoznaje język przesłanych danych. Przed wdrożeniem warto wydrukować próbne etykiety z używanych szablonów.',
    },
    {
      question: 'Jaka gwarancja obejmuje TSC TH240THC i TH340THC?',
      answer: 'TSC obejmuje drukarkę 3-letnią gwarancją. Dla głowicy limit wynosi 25 km druku albo 12 miesięcy, dla wałka dociskowego 50 km albo 12 miesięcy — obowiązuje ten, który upłynie wcześniej.',
    },
    {
      question: 'Jakie są alternatywy dla TSC TH240THC?',
      answer: 'Bez taśmy barwiącej pracuje [TSC DH240THC / DH340THC](/produkt/tsc-dh240thc), lżejszy i niższy model tej samej serii. Inne 4-calowe drukarki dla ochrony zdrowia to [Zebra ZD421-HC](/produkt/zebra-zd421-hc) i [Zebra ZD621-HC](/produkt/zebra-zd621-hc).',
    },
  ],
  downloads: [
    datasheetThDh,
    { name: 'Instrukcja TSC TH240/DH240 (EN)', type: 'manual', url: '/downloads/tsc-th-dh-instrukcja-en.pdf', size: '4,5 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-dh240thc', 'zebra-zd421-hc', 'zebra-zd621-hc', 'sato-ct4-lx-hc', 'honeywell-pc45d-hc', 'citizen-cl-h300sv'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers',
}

const dh240thc: Product = {
  id: 'tsc-dh240thc',
  slug: 'tsc-dh240thc',
  name: 'TSC DH240THC / DH340THC',
  shortDescription: 'TSC DH240THC / DH340THC — 4-calowa drukarka termiczna dla służby zdrowia, bez taśmy barwiącej, z ekranem dotykowym i obudową przygotowaną do dezynfekcji.',
  seoTitle: 'TSC DH240THC / DH340THC — drukarka termiczna 4" dla służby zdrowia',
  seoDescription: 'Drukarka termiczna TSC DH240THC i DH340THC do szpitali i przychodni: etykiety 4" bez taśmy, 203 lub 300 dpi, antybakteryjna obudowa, zasilacz IEC 60601-1. Drukarka etykiet TSC DH240THC, szpitalna drukarka etykiet DH340THC TSC. PN: DH240HC-A001-0002, DH240HC-A001-0102, DH340HC-A001-0002, DH340HC-A001-0102.',
  description: `TSC DH240THC i DH340THC to 4-calowe drukarki termiczne serii DH w wersji dla placówek medycznych. Pracują bez taśmy barwiącej, na etykietach termicznych, dlatego nie wymagają zakładania taśmy. Służą m.in. do etykiet na próbki, etykiet aptecznych i śledzenia pacjentów.

Obudowa ma biały kolor, podwójne ścianki i jest antybakteryjna. Tworzywo przystosowano do środków dezynfekujących, a przyciski osłania uszczelniony panel, więc obudowę łatwo przetrzeć. Z drukarką dostarczany jest zewnętrzny zasilacz 24 V o mocy 90 W z certyfikatem IEC 60601-1.

DH240THC ma głowicę 203 dpi i drukuje do 203 mm/s, a DH340THC — 300 dpi i do 152 mm/s. Rolka materiału może mieć do 127 mm średnicy, a sam materiał 15–120 mm szerokości. Drukarka ma 208 mm szerokości i waży 2,1 kg.

Każda wersja ma kolorowy ekran dotykowy 3,5 cala, zegar RTC, port Ethernet, złącze szeregowe RS-232 oraz USB i USB Host. PN z końcówką 0102 mają dodatkowo Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0. Dealer może doposażyć drukarkę w odklejak, gilotynę lub zestaw do materiału bez podkładu (linerless).`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1820.41,
  images: ['/images/products/DH240HC-A001-0002.png', '/images/products/DH240HC-A001-0002-2.png'],
  imageDescriptions: [
    'TSC DH240THC — biała drukarka termiczna 4" z ekranem dotykowym, widok z przodu pod kątem',
    'TSC DH240THC — widok z przodu: kolorowy ekran dotykowy, przezroczyste okienko pokrywy i szczelina wydruku',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (DH240THC) lub 300 dpi (DH340THC)',
    predkoscDruku: 'Do 203 mm/s (203 dpi); do 152 mm/s (300 dpi)',
    szerokoscDruku: 'Do 108 mm (203 dpi); do 105,7 mm (300 dpi)',
    szerokoscEtykiet: '15–120 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka termiczna w wersji dla ochrony zdrowia' },
    { name: 'Modele', value: 'DH240THC (203 dpi), DH340THC (300 dpi)' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm) lub 300 dpi (12 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 300 dpi' },
    { name: 'Szerokość druku', value: 'Do 108 mm przy 203 dpi; do 105,7 mm przy 300 dpi' },
    { name: 'Długość wydruku', value: 'Do 25 400 mm przy 203 dpi; do 11 430 mm przy 300 dpi' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Biała obudowa clamshell z podwójnymi ściankami; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelniony panel przycisków; obudowa antybakteryjna; zasilacz zewnętrzny z certyfikatem IEC 60601-1' },
    { name: 'Szerokość materiału', value: '15–120 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm (203 dpi); 5–11 430 mm (300 dpi)' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka, z nacięciem (nawinięcie na zewnątrz); materiał bez podkładu z opcją linerless' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika (regulowana pozycja), czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Kolorowy ekran dotykowy 3,5 cala (480 × 320 pikseli); włącznik, przyciski podawania, pauzy i ponownego wydruku' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100 Mb/s; w PN z końcówką 0102 moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0' },
    { name: 'Pamięć', value: '128 MB Flash, 128 MB SDRAM; czytnik microSD do 512 GB (FAT32, exFAT)' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 39, Code 93, Code 128, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar, rMQR' },
    { name: 'Bezpieczeństwo sieci', value: 'HTTPS, SNMPv3, 802.1X, filtr portu TCP/IP 9100' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '208 × 170 × 235 mm' },
    { name: 'Waga', value: '2,1 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny zasilacz impulsowy z certyfikatem IEC 60601-1; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 3,75 A, 90 W' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak, gilotyna (cięcie pełne i częściowe), moduł Wi-Fi z Bluetooth 5.0, moduł Bluetooth 5.0, zestaw linerless z obcinarką (cięcie pełne), zestaw linerless do odrywania' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki, klawiatura z wyświetlaczem KP-200 Plus, adapter wąskiego materiału 10 mm, PDF Print Dongle, stacja baterii BP-4000' },
    { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz' },
    { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety na próbki',
    'Etykiety apteczne',
    'Śledzenie pacjentów',
    'Etykiety termiczne bez taśmy barwiącej',
  ],
  variants: [
    { partNumber: 'DH240HC-A001-0002', name: 'DH240THC, 203 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '203 dpi' }, priceFrom: 1820.41, availability: 'available' },
    { partNumber: 'DH240HC-A001-0102', name: 'DH240THC, 203 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 2391.38, availability: 'unavailable' },
    { partNumber: 'DH340HC-A001-0002', name: 'DH340THC, 300 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '300 dpi' }, priceFrom: 2314.57, availability: 'available' },
    { partNumber: 'DH340HC-A001-0102', name: 'DH340THC, 300 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '300 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 2888.08, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Liczba punktów głowicy na cal.\n\n203 dpi (DH240THC) — do 203 mm/s, etykiety do 25,4 m długości.\n\n300 dpi (DH340THC) — do 152 mm/s; do drobnych opisów i gęstych kodów na małych etykietach.',
    'Wi-Fi + Bluetooth': 'Moduł bezprzewodowy montowany w drukarce; porty USB, USB Host, RS-232 i Ethernet ma każda wersja.\n\nTak — sieć Wi-Fi 802.11a/b/g/n/ac oraz Bluetooth 5.0, np. do drukarki na wózku lub w miejscu bez gniazda sieciowego.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['tsc-th-roll-holder'],
  faq: [
    {
      question: 'Czy TSC DH240THC potrzebuje taśmy barwiącej?',
      answer: 'Nie. DH240THC i DH340THC drukują wyłącznie termicznie, dlatego wymagają etykiet termicznych i nie mają mechanizmu taśmy. Do etykiet termotransferowych przeznaczona jest [TSC TH240THC / TH340THC](/produkt/tsc-th240thc).',
    },
    {
      question: 'Jakimi środkami czyścić DH340THC?',
      answer: 'Na zewnątrz wystarcza ściereczka niepozostawiająca włókien, zwilżona wodą, a przy większym zabrudzeniu detergent niezawierający chloru. Do dezynfekcji powierzchni służy etanol 75%. Środek nanosi się na ściereczkę, nigdy bezpośrednio na urządzenie. Głowicę i wałek czyści się alkoholem izopropylowym o stężeniu co najmniej 99%.',
    },
    {
      question: 'Jaki zasilacz ma DH240THC?',
      answer: 'Zewnętrzny zasilacz impulsowy 90 W (24 V DC, 3,75 A) z certyfikatem IEC 60601-1, dostarczany razem z przewodem zasilającym. Certyfikat obejmuje zasilacz, a nie samą drukarkę.',
    },
    {
      question: 'Czy DH240THC może drukować na materiale bez podkładu?',
      answer: 'Tak, po zamontowaniu przez dealera zestawu linerless. TSC oferuje wersję z obcinarką (cięcie pełne) i wersję do odrywania. Bez zestawu drukarka obsługuje materiał ciągły, etykiety wycinane, z czarnym znacznikiem, z nacięciem i składankę.',
    },
    {
      question: 'Który wariant DH340THC ma łączność bezprzewodową?',
      answer: 'DH340HC-A001-0102 ma moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0. DH340HC-A001-0002 łączy się przez Ethernet, RS-232, USB i USB Host; moduł Wi-Fi z Bluetooth lub sam Bluetooth można w nim zamontować później.',
    },
    {
      question: 'Jak długo trwa gwarancja na DH240THC?',
      answer: 'Drukarka ma 3 lata gwarancji TSC. Gwarancja głowicy kończy się po 25 km wydruku lub po roku, a wałka dociskowego po 50 km lub po roku, zależnie od tego, co nastąpi pierwsze.',
    },
    {
      question: 'Jakie drukarki można rozważyć zamiast TSC DH240THC?',
      answer: 'Etykiety 4-calowe bez taśmy drukują w placówkach medycznych także [Honeywell PC45d Healthcare](/produkt/honeywell-pc45d-hc) i [Citizen CL-H300SV](/produkt/citizen-cl-h300sv). Wersję, która przyjmuje również taśmę barwiącą, oferuje [TSC TH240THC](/produkt/tsc-th240thc).',
    },
  ],
  downloads: [
    datasheetThDh,
    { name: 'Instrukcja TSC TH240/DH240 (EN)', type: 'manual', url: '/downloads/tsc-th-dh-instrukcja-en.pdf', size: '4,5 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/dh-series-4-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-th240thc', 'honeywell-pc45d-hc', 'citizen-cl-h300sv', 'zebra-zd421-hc', 'zebra-zd621-hc', 'sato-ct4-lx-hc'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/dh-series-4-inch-performance-desktop-printers',
}

const th220thc: Product = {
  id: 'tsc-th220thc',
  slug: 'tsc-th220thc',
  name: 'TSC TH220THC / TH320THC',
  shortDescription: 'TSC TH220THC / TH320THC — 2-calowa drukarka termotransferowa i termiczna dla służby zdrowia, z taśmą 90 m, ekranem dotykowym i zasilaczem IEC 60601-1.',
  seoTitle: 'TSC TH220THC / TH320THC — drukarka etykiet 2" dla służby zdrowia',
  seoDescription: 'TSC TH220THC i TH320THC: 2-calowa szpitalna drukarka etykiet z termotransferem i drukiem termicznym, 203 lub 300 dpi, obudowa antybakteryjna, Ethernet lub Wi-Fi. Drukarka etykiet TSC TH220THC, drukarka termotransferowa TH320THC TSC. PN: TH220HC-A001-0002, TH220HC-A001-0102, TH320HC-A001-0002, TH320HC-A001-0102.',
  description: `TSC TH220THC i TH320THC to 2-calowe biurkowe drukarki TH w wersji dla ochrony zdrowia. Łączą druk termotransferowy z termicznym, więc na wąskich etykietach można stosować zarówno materiał termiczny, jak i etykiety drukowane z taśmą. Przykładowe zadania to oznaczanie próbek, etykiety apteczne i śledzenie pacjentów.

Kompaktowa obudowa ma 146 mm szerokości i waży 1,8 kg. Jest biała i antybakteryjna, a jej tworzywo przygotowano do dezynfekcji. Powierzchnie zaprojektowano z myślą o łatwym czyszczeniu, a przyciski są uszczelnione. Certyfikat IEC 60601-1 obejmuje dołączony zasilacz zewnętrzny o mocy 60 W.

Taśma barwiąca ma 90 m długości i 56–58 mm szerokości. Głowica 203 dpi (TH220THC) drukuje z szybkością 203 mm/s, a głowica 300 dpi (TH320THC) — 152 mm/s; pas druku ma odpowiednio 54 i 56,9 mm. Etykiety i materiał ciągły mogą mieć od 15 do 60 mm szerokości.

Wszystkie konfiguracje mają ekran dotykowy 3,5 cala i łącza przewodowe: Ethernet, RS-232, USB oraz USB Host. Moduł Wi-Fi z Bluetooth 5.0 jest w numerach kończących się na 0102. Język TSPL-EZD rozumie polecenia ZPL, ZPL II, EPL i DPL.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1692.39,
  images: ['/images/products/TH220HC-A001-0002.png', '/images/products/TH220HC-A001-0002-2.png'],
  imageDescriptions: [
    'TSC TH220THC — biała 2-calowa drukarka etykiet z ekranem dotykowym, widok z przodu pod kątem',
    'TSC TH220THC — widok z przodu: ekran dotykowy 3,5 cala nad pokrywą i szczelina wydruku',
  ],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny',
    rozdzielczosc: '203 dpi (TH220THC) lub 300 dpi (TH320THC)',
    predkoscDruku: 'Do 203 mm/s (203 dpi); do 152 mm/s (300 dpi)',
    szerokoscDruku: 'Do 54 mm (203 dpi); do 56,9 mm (300 dpi)',
    szerokoscEtykiet: '15–60 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '2-calowa biurkowa drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Modele', value: 'TH220THC (203 dpi), TH320THC (300 dpi)' },
    { name: 'Metoda druku', value: 'Termotransferowa i termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm) lub 300 dpi (12 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 300 dpi' },
    { name: 'Szerokość druku', value: 'Do 54 mm przy 203 dpi; do 56,9 mm przy 300 dpi' },
    { name: 'Długość wydruku', value: 'Do 25 400 mm przy 203 dpi; do 11 430 mm przy 300 dpi' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Biała obudowa clamshell z podwójnymi ściankami; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelniony panel przycisków; obudowa antybakteryjna; zasilacz zewnętrzny z certyfikatem IEC 60601-1' },
    { name: 'Taśma barwiąca', value: 'Długość 90 m, średnica do 37 mm, gilza 0,5", farba na zewnątrz; szerokość 56–58 mm' },
    { name: 'Szerokość materiału', value: '15–60 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm (203 dpi); 5–11 430 mm (300 dpi)' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka, z nacięciem (nawinięcie na zewnątrz)' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika (regulowana pozycja), czujnik końca taśmy, czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Kolorowy ekran dotykowy 3,5 cala (480 × 320 pikseli); włącznik, przyciski podawania, pauzy i ponownego wydruku' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100 Mb/s; w PN z końcówką 0102 moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0' },
    { name: 'Pamięć', value: '128 MB Flash, 128 MB SDRAM; czytnik microSD do 512 GB (FAT32, exFAT)' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 39, Code 93, Code 128, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar, rMQR' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '146 × 179 × 231 mm' },
    { name: 'Waga', value: '1,8 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny zasilacz impulsowy z certyfikatem IEC 60601-1; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 2,5 A, 60 W' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak, gilotyna (cięcie pełne i częściowe), moduł Wi-Fi z Bluetooth 5.0, moduł Bluetooth 5.0' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki, klawiatura z wyświetlaczem KP-200 Plus, adapter wąskiego materiału 10 mm, PDF Print Dongle, stacja baterii BP-4000' },
    { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz, papierowa gilza taśmy 0,5"' },
    { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety na próbki',
    'Etykiety apteczne',
    'Śledzenie pacjentów',
    'Wąskie etykiety termotransferowe',
  ],
  variants: [
    { partNumber: 'TH220HC-A001-0002', name: 'TH220THC, 203 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '203 dpi' }, priceFrom: 1692.39, availability: 'unavailable' },
    { partNumber: 'TH220HC-A001-0102', name: 'TH220THC, 203 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 2263.36, availability: 'unavailable' },
    { partNumber: 'TH320HC-A001-0002', name: 'TH320THC, 300 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '300 dpi' }, priceFrom: 2002.2, availability: 'unavailable' },
    { partNumber: 'TH320HC-A001-0102', name: 'TH320THC, 300 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '300 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 2575.73, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Gęstość punktów głowicy 2-calowej.\n\n203 dpi (TH220THC) — do 203 mm/s, druk na szerokości 54 mm.\n\n300 dpi (TH320THC) — do 152 mm/s, druk na szerokości 56,9 mm; ostrzejszy drobny tekst.',
    'Wi-Fi + Bluetooth': 'Moduł radiowy zamontowany w danej wersji; Ethernet, RS-232, USB i USB Host ma każda wersja.\n\nTak — Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0 do druku bez przewodu sieciowego.',
  },
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Jaka taśma barwiąca pasuje do TSC TH220THC?',
      answer: 'Taśma o długości do 90 m i szerokości 56–58 mm, nawinięta farbą na zewnątrz na gilzę 0,5 cala. Średnica rolki nie może przekraczać 37 mm. W zestawie jest papierowa gilza taśmy 0,5 cala.',
    },
    {
      question: 'Jak dbać o higienę drukarki TH320THC?',
      answer: 'Zewnętrzne powierzchnie przeciera się ściereczką bez włókien zwilżoną wodą, opcjonalnie z bezchlorowym detergentem, po czym dezynfekuje 75-procentowym etanolem. Na czas czyszczenia drukarkę wyłącza się, a przewód zasilający pozostaje podłączony dla uziemienia. Głowicę czyści się alkoholem izopropylowym 99% przy każdej zmianie materiału.',
    },
    {
      question: 'Czym TH220THC różni się od DH220THC?',
      answer: 'TH220THC drukuje termotransferowo i termicznie, ma mechanizm taśmy i czujnik jej końca. [DH220THC](/produkt/tsc-dh220thc) drukuje tylko termicznie, jest mniejsza (138 × 172 × 210 mm) i lżejsza (1,6 kg). Obie mają tę samą rozdzielczość, prędkość i obudowę dla ochrony zdrowia.',
    },
    {
      question: 'Dlaczego TH320THC ma większą szerokość druku niż TH220THC?',
      answer: 'Wersja 300 dpi drukuje na szerokości 56,9 mm, a wersja 203 dpi na 54 mm. Obie przyjmują materiał o szerokości 15–60 mm. Wersja 300 dpi drukuje wolniej, do 152 mm/s, a maksymalna długość etykiety wynosi w niej 11 430 mm.',
    },
    {
      question: 'Jak podłączyć TH220THC do sieci szpitalnej?',
      answer: 'Każda wersja ma port Ethernet 10/100 Mb/s. Wersje z końcówką PN 0102 łączą się także przez Wi-Fi 802.11a/b/g/n/ac. Drukarka obsługuje HTTPS, SNMPv3, 802.1X i filtrowanie portu 9100, a zdalnie zarządza się nią przez TSC Console lub SOTI Connect.',
    },
    {
      question: 'Jaką gwarancję ma TSC TH220THC?',
      answer: 'Gwarancja TSC na drukarkę wynosi 3 lata. Osobne limity mają części eksploatacyjne: głowica 25 km lub 12 miesięcy, wałek 50 km lub 12 miesięcy.',
    },
    {
      question: 'Jakie są alternatywy dla TSC TH220THC?',
      answer: 'Do druku wyłącznie termicznego służy [TSC DH220THC / DH320THC](/produkt/tsc-dh220thc), a do opasek z dużych rolek [TSC DH220LHC / DH320LHC](/produkt/tsc-dh220lhc). Wśród 2-calowych drukarek dla ochrony zdrowia są też [Zebra ZD411-HC](/produkt/zebra-zd411-hc) i [Zebra ZD611-HC](/produkt/zebra-zd611-hc).',
    },
  ],
  downloads: [
    datasheetThDh,
    { name: 'Instrukcja TSC TH220/DH220 (EN)', type: 'manual', url: '/downloads/tsc-th220-dh220-instrukcja-en.pdf', size: '3,5 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/th-series-2-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-dh220thc', 'tsc-dh220lhc', 'zebra-zd411-hc', 'zebra-zd611-hc', 'sato-ws2-2'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/th-series-2-inch-performance-desktop-printers',
}

const dh220thc: Product = {
  id: 'tsc-dh220thc',
  slug: 'tsc-dh220thc',
  name: 'TSC DH220THC / DH320THC',
  shortDescription: 'TSC DH220THC / DH320THC — mała drukarka termiczna 2" dla służby zdrowia: 1,6 kg, ekran dotykowy, antybakteryjna obudowa i zasilacz IEC 60601-1.',
  seoTitle: 'TSC DH220THC / DH320THC — drukarka termiczna 2" dla służby zdrowia',
  seoDescription: 'Mała drukarka termiczna TSC DH220THC i DH320THC na stanowiska w szpitalu i laboratorium: etykiety 2" bez taśmy barwiącej w rozdzielczości 203 albo 300 dpi. Drukarka etykiet TSC DH220THC, szpitalna drukarka etykiet DH320THC TSC. PN: DH220HC-A001-0002, DH220HC-A001-0102, DH320HC-A001-0002, DH320HC-A001-0102.',
  description: `TSC DH220THC i DH320THC to 2-calowe drukarki termiczne serii DH dla placówek medycznych. Mają 138 mm szerokości, 210 mm głębokości i ważą 1,6 kg, więc zajmują niewiele miejsca na blacie. Drukują bez taśmy, na etykietach termicznych o szerokości 15–60 mm, np. przy oznaczaniu próbek, w aptece i przy śledzeniu pacjentów.

Białą obudowę wykonano z antybakteryjnego tworzywa, które można dezynfekować. Przyciski są uszczelnione, a obudowa ma podwójne ścianki. Do drukarki dołączony jest zasilacz 24 V/60 W z certyfikatem IEC 60601-1.

Wersja 203 dpi (DH220THC) osiąga 203 mm/s przy szerokości druku 54 mm, a wersja 300 dpi (DH320THC) — 152 mm/s przy 56,9 mm. Na ekranie dotykowym 3,5 cala zmienia się ustawienia bez komputera, a zegar RTC jest standardem.

Standardowo drukarka ma Ethernet, port szeregowy, USB oraz USB Host, a PN z końcówką 0102 także Wi-Fi z Bluetooth 5.0. Po doposażeniu w zestaw linerless drukarka obsługuje etykiety bez podkładu, z obcinarką lub z odrywaniem.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1326.27,
  images: ['/images/products/DH220HC-A001-0002.png', '/images/products/DH220HC-A001-0002-2.png'],
  imageDescriptions: [
    'TSC DH220THC — biała 2-calowa drukarka termiczna z ekranem dotykowym, widok z przodu pod kątem',
    'TSC DH220THC — widok z przodu: ekran dotykowy, zielone zatrzaski pokrywy i szczelina wydruku',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (DH220THC) lub 300 dpi (DH320THC)',
    predkoscDruku: 'Do 203 mm/s (203 dpi); do 152 mm/s (300 dpi)',
    szerokoscDruku: 'Do 54 mm (203 dpi); do 56,9 mm (300 dpi)',
    szerokoscEtykiet: '15–60 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '2-calowa biurkowa drukarka termiczna w wersji dla ochrony zdrowia' },
    { name: 'Modele', value: 'DH220THC (203 dpi), DH320THC (300 dpi)' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm) lub 300 dpi (12 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 300 dpi' },
    { name: 'Szerokość druku', value: 'Do 54 mm przy 203 dpi; do 56,9 mm przy 300 dpi' },
    { name: 'Długość wydruku', value: 'Do 25 400 mm przy 203 dpi; do 11 430 mm przy 300 dpi' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Biała obudowa clamshell z podwójnymi ściankami; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelniony panel przycisków; obudowa antybakteryjna; zasilacz zewnętrzny z certyfikatem IEC 60601-1' },
    { name: 'Szerokość materiału', value: '15–60 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm (203 dpi); 5–11 430 mm (300 dpi)' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka, z nacięciem (nawinięcie na zewnątrz); materiał bez podkładu z opcją linerless' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika (regulowana pozycja), czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Kolorowy ekran dotykowy 3,5 cala (480 × 320 pikseli); włącznik, przyciski podawania, pauzy i ponownego wydruku' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100 Mb/s; w PN z końcówką 0102 moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0' },
    { name: 'Pamięć', value: '128 MB Flash, 128 MB SDRAM; czytnik microSD do 512 GB (FAT32, exFAT)' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 39, Code 93, Code 128, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar, rMQR' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '138 × 172 × 210 mm' },
    { name: 'Waga', value: '1,6 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny zasilacz impulsowy z certyfikatem IEC 60601-1; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 2,5 A, 60 W' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak, gilotyna (cięcie pełne i częściowe), moduł Wi-Fi z Bluetooth 5.0, moduł Bluetooth 5.0, zestaw linerless z obcinarką (cięcie pełne), zestaw linerless do odrywania' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki, klawiatura z wyświetlaczem KP-200 Plus, adapter wąskiego materiału 10 mm, PDF Print Dongle, stacja baterii BP-4000' },
    { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz' },
    { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety na próbki',
    'Etykiety apteczne',
    'Śledzenie pacjentów',
    'Druk termiczny na stanowiskach z małą ilością miejsca',
  ],
  variants: [
    { partNumber: 'DH220HC-A001-0002', name: 'DH220THC, 203 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '203 dpi' }, priceFrom: 1326.27, availability: 'available' },
    { partNumber: 'DH220HC-A001-0102', name: 'DH220THC, 203 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 1899.79, availability: 'unavailable' },
    { partNumber: 'DH320HC-A001-0002', name: 'DH320THC, 300 dpi, USB + RS-232 + Ethernet', attributes: { 'Rozdzielczość': '300 dpi' }, priceFrom: 1638.63, availability: 'unavailable' },
    { partNumber: 'DH320HC-A001-0102', name: 'DH320THC, 300 dpi, Wi-Fi + Bluetooth 5.0', attributes: { 'Rozdzielczość': '300 dpi', 'Wi-Fi + Bluetooth': 'Tak' }, priceFrom: 2212.16, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Rozdzielczość głowicy termicznej.\n\n203 dpi (DH220THC) — do 203 mm/s na szerokości 54 mm.\n\n300 dpi (DH320THC) — do 152 mm/s na szerokości 56,9 mm; czytelniejsze małe kody na wąskich etykietach.',
    'Wi-Fi + Bluetooth': 'Moduł radiowy w drukarce; Ethernet, RS-232, USB i USB Host są w każdej wersji.\n\nTak — Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0, gdy przy stanowisku nie ma gniazda sieci przewodowej.',
  },
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Ile miejsca zajmuje TSC DH220THC?',
      answer: 'Drukarka ma 138 mm szerokości, 172 mm wysokości i 210 mm głębokości oraz waży 1,6 kg. Mieści rolkę etykiet o średnicy do 127 mm.',
    },
    {
      question: 'Jak dezynfekować TSC DH220THC?',
      answer: 'Obudowę najpierw myje się wilgotną, niestrzępiącą się ściereczką, a przy trudniejszych zabrudzeniach z detergentem niezawierającym chloru. Następnie powierzchnię dezynfekuje się etanolem 75%, nałożonym na ściereczkę. Drukarka powinna być wyłączona wyłącznikiem, z przewodem zasilającym w gniazdku. Nie należy używać sprężonego powietrza wewnątrz urządzenia.',
    },
    {
      question: 'Czy DH320THC drukuje opaski dla pacjentów?',
      answer: 'Lista materiałów DH220THC i DH320THC nie obejmuje opasek. Opaski są na liście materiałów modelu [TSC DH220LHC / DH320LHC](/produkt/tsc-dh220lhc), który mieści rolkę o średnicy 165 mm.',
    },
    {
      question: 'Czy zasilacz DH220THC jest zasilaczem medycznym?',
      answer: 'Dołączony zewnętrzny zasilacz 60 W (24 V DC, 2,5 A) ma certyfikat IEC 60601-1. Norma dotyczy zasilacza; obudowa drukarki ma osobne cechy: tworzywo antybakteryjne i przygotowane do dezynfekcji.',
    },
    {
      question: 'Czym różnią się PN DH220HC-A001-0002 i DH220HC-A001-0102?',
      answer: 'Oba to DH220THC z głowicą 203 dpi i tymi samymi portami przewodowymi. Różnica dotyczy sieci bezprzewodowej: PN z końcówką 0102 obsługuje Wi-Fi (802.11a/b/g/n/ac) i Bluetooth 5.0, a PN z końcówką 0002 nie ma modułu radiowego.',
    },
    {
      question: 'Jak długo TSC gwarantuje DH220THC?',
      answer: 'Gwarancja na drukarkę trwa 3 lata. Na głowicę przysługuje 12 miesięcy lub 25 km, a na wałek dociskowy 12 miesięcy lub 50 km; decyduje warunek spełniony wcześniej.',
    },
    {
      question: 'Jaką inną drukarkę wybrać zamiast DH220THC?',
      answer: 'Do etykiet z taśmą barwiącą służy [TSC TH220THC / TH320THC](/produkt/tsc-th220thc). Termiczne 2-calowe drukarki dla ochrony zdrowia oferuje też Zebra: [ZD411-HC](/produkt/zebra-zd411-hc) i [ZD611-HC](/produkt/zebra-zd611-hc).',
    },
  ],
  downloads: [
    datasheetThDh,
    { name: 'Instrukcja TSC TH220/DH220 (EN)', type: 'manual', url: '/downloads/tsc-th220-dh220-instrukcja-en.pdf', size: '3,5 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/dh-series-2-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-dh220lhc', 'tsc-th220thc', 'zebra-zd411-hc', 'zebra-zd611-hc', 'sato-ws2-2'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/dh-series-2-inch-performance-desktop-printers',
}

// DH-L HC, końcówka PN (np. 1102): pierwsza cyfra = panel (0 ekran dotykowy, 1 LED), druga = łączność
// (1 Wi-Fi + BT, 2 Bluetooth MFi), trzecia = obsługa etykiet (1 odklejak, 2 obcinarka).
// Łączność i obsługa etykiet w jednej kolumnie „Wyposażenie” (żaden oferowany PN nie ma obu), aby tabela mieściła się przy 1024 px.
const dhlVariant = (pn: string, priceFrom: number): ProductVariant => {
  const dpi = pn.startsWith('DH220') ? '203 dpi' : '300 dpi'
  const [panel, radio, handling] = pn.slice(-4).split('')
  const attributes: Record<string, string> = { 'Rozdzielczość': dpi, 'Panel': panel === '1' ? 'LED' : 'Ekran dotykowy' }
  const equipment = [radio === '1' ? 'Wi-Fi + BT 5.0' : radio === '2' ? 'BT MFi 5.3' : '', handling === '1' ? 'Odklejak' : handling === '2' ? 'Obcinarka' : ''].filter(Boolean)
  if (equipment.length) attributes['Wyposażenie'] = equipment.join(', ')
  const model = `${pn.startsWith('DH220') ? 'DH220L' : 'DH320L'}${panel === '1' ? '' : 'T'}HC`
  const extras = [radio === '1' ? 'Wi-Fi + Bluetooth 5.0' : radio === '2' ? 'Bluetooth MFi 5.3' : 'USB + RS-232 + Ethernet', handling === '1' ? 'odklejak' : handling === '2' ? 'obcinarka' : '']
  return { partNumber: pn, name: [`${model}, ${dpi}`, ...extras.filter(Boolean)].join(', '), attributes, priceFrom, availability: 'unavailable' }
}

const dh220lhc: Product = {
  id: 'tsc-dh220lhc',
  slug: 'tsc-dh220lhc',
  name: 'TSC DH220LHC / DH320LHC',
  shortDescription: 'TSC DH220LHC / DH320LHC — drukarka opasek i etykiet 2" dla służby zdrowia na rolki 165 mm: opaski dla pacjentów i etykiety, czujnik Save Labels, panel LED lub ekran dotykowy.',
  seoTitle: 'TSC DH220LHC / DH320LHC — drukarka opasek i etykiet dla szpitali',
  seoDescription: 'Drukarka opasek TSC DH220LHC i DH320LHC (DH220L HC) z rolką 165 mm: termiczna 2-calowa, 203/300 dpi, panel LED lub ekran dotykowy, zasilacz z certyfikatem IEC 60601-1. Szpitalna drukarka opasek TSC DH220LTHC, DH320LTHC. PN: DH220LHC-A001-1002, DH220LHC-A001-1012, DH220LHC-A001-1022, DH220LHC-A001-1102, DH220LHC-A001-1202, DH220LHC-A001-0002, DH220LHC-A001-0012, DH220LHC-A001-0022, DH220LHC-A001-0102, DH220LHC-A001-0202, DH320LHC-A001-1002, DH320LHC-A001-1012, DH320LHC-A001-1022, DH320LHC-A001-1102, DH320LHC-A001-1202, DH320LHC-A001-0002, DH320LHC-A001-0012, DH320LHC-A001-0022, DH320LHC-A001-0102, DH320LHC-A001-0202.',
  description: `TSC DH220LHC i DH320LHC to 2-calowe drukarki termiczne serii DH-L w wersji dla ochrony zdrowia. Mieszczą rolkę o średnicy 165 mm (6,5 cala) i są przeznaczone do druku dużych ilości opasek identyfikacyjnych. Obsługują także etykiety o szerokości od 10 do 60 mm.

Czujnik Save Labels automatycznie ustawia materiał w pozycji początkowej druku. Po założeniu nowej rolki nie trzeba ręcznie wyrównywać i przewijać etykiet, więc mniej materiału trafia do odpadów.

Obudowa jest biała i antybakteryjna, z tworzywa przygotowanego do dezynfekcji, z łatwą do czyszczenia powierzchnią i uszczelnionymi przyciskami. Zasilanie zapewnia zewnętrzny zasilacz 60 W, certyfikowany zgodnie z IEC 60601-1.

Modele DH220LHC i DH320LHC mają panel z diodą stanu i trzema ikonami. DH220LTHC i DH320LTHC mają kolorowy ekran dotykowy 3,5 cala. Prędkość druku wynosi do 203 mm/s przy 203 dpi i do 152 mm/s przy 300 dpi. W tabeli są wersje z odklejakiem, obcinarką, modułem Wi-Fi z Bluetooth 5.0 lub Bluetooth MFi 5.3. Drukarka ma 512 MB pamięci Flash i 256 MB SDRAM.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1277.62,
  images: ['/images/products/DH220LHC-A001-1002.png', '/images/products/DH220LHC-A001-0002.png'],
  imageDescriptions: [
    'TSC DH220LHC — biała 2-calowa drukarka termiczna z panelem LED i przezroczystym okienkiem rolki, widok z przodu',
    'TSC DH220LTHC — wersja z kolorowym ekranem dotykowym 3,5 cala, widok z przodu',
  ],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (DH220L) lub 300 dpi (DH320L)',
    predkoscDruku: 'Do 203 mm/s (203 dpi); do 152 mm/s (300 dpi)',
    szerokoscDruku: 'Do 54 mm (203 dpi); do 56,9 mm (300 dpi)',
    szerokoscEtykiet: '10–60 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '2-calowa biurkowa drukarka termiczna na rolki 165 mm w wersji dla ochrony zdrowia' },
    { name: 'Modele', value: 'DH220LHC i DH320LHC (panel LED), DH220LTHC i DH320LTHC (ekran dotykowy)' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm) lub 300 dpi (12 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 203 mm/s przy 203 dpi; do 152 mm/s przy 300 dpi' },
    { name: 'Szerokość druku', value: 'Do 54 mm przy 203 dpi; do 56,9 mm przy 300 dpi' },
    { name: 'Długość wydruku', value: 'Do 25 400 mm przy 203 dpi; do 11 430 mm przy 300 dpi' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Biała obudowa clamshell z podwójnymi ściankami; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelniony panel przycisków; obudowa antybakteryjna; zasilacz zewnętrzny z certyfikatem IEC 60601-1' },
    { name: 'Szerokość materiału', value: '10–60 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 165 mm (6,5"); gilza 25,4–38,1 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm (203 dpi); 5–11 430 mm (300 dpi)' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka, z nacięciem (nawinięcie na zewnątrz), opaski na rękę; materiał bez podkładu z opcją linerless' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika (regulowana pozycja), czujnik otwarcia głowicy, czujnik Save Labels' },
    { name: 'Panel obsługi', value: 'DH220LHC/DH320LHC: dioda stanu, 3 ikony stanu, włącznik, przyciski podawania, pauzy i ponownego wydruku. DH220LTHC/DH320LTHC: kolorowy ekran dotykowy 3,5 cala (480 × 320 pikseli), włącznik i te same przyciski' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100 Mb/s; zależnie od PN moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0 albo Bluetooth MFi 5.3' },
    { name: 'Pamięć', value: '512 MB Flash, 256 MB SDRAM; czytnik microSD do 512 GB (FAT32, exFAT)' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 39, Code 93, Code 128, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar, rMQR' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '146 × 206 × 264 mm' },
    { name: 'Waga', value: '2,0 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny zasilacz impulsowy z certyfikatem IEC 60601-1; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 2,5 A, 60 W' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak, gilotyna (cięcie pełne i częściowe), moduł Wi-Fi z Bluetooth 5.0, moduł Bluetooth 5.3, zestaw linerless z obcinarką, zestaw linerless do odrywania; w modelach z ekranem dotykowym zestawy rozbudowy HF RFID' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki, klawiatura z wyświetlaczem KP-200 Plus, PDF Print Dongle, stacja baterii BP-4000' },
    { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz' },
    { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Opaski identyfikacyjne dla pacjentów',
    'Druk dużych ilości opasek z jednej rolki',
    'Wąskie etykiety od 10 mm szerokości',
    'Etykiety termiczne bez podkładu (z opcją linerless)',
  ],
  variants: [
    dhlVariant('DH220LHC-A001-1002', 1277.62),
    dhlVariant('DH220LHC-A001-1012', 1431.24),
    dhlVariant('DH220LHC-A001-1022', 1782.01),
    dhlVariant('DH220LHC-A001-1102', 1897.23),
    dhlVariant('DH220LHC-A001-1202', 1651.43),
    dhlVariant('DH220LHC-A001-0002', 1431.24),
    dhlVariant('DH220LHC-A001-0012', 1584.87),
    dhlVariant('DH220LHC-A001-0022', 1938.19),
    dhlVariant('DH220LHC-A001-0102', 2053.41),
    dhlVariant('DH220LHC-A001-0202', 1807.62),
    dhlVariant('DH320LHC-A001-1002', 1584.87),
    dhlVariant('DH320LHC-A001-1012', 1741.05),
    dhlVariant('DH320LHC-A001-1022', 2091.82),
    dhlVariant('DH320LHC-A001-1102', 2209.59),
    dhlVariant('DH320LHC-A001-1202', 1963.8),
    dhlVariant('DH320LHC-A001-0002', 1738.48),
    dhlVariant('DH320LHC-A001-0012', 1897.23),
    dhlVariant('DH320LHC-A001-0022', 2247.99),
    dhlVariant('DH320LHC-A001-0102', 2365.77),
    dhlVariant('DH320LHC-A001-0202', 2119.98),
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Rozdzielczość głowicy.\n\n203 dpi (DH220L) — do 203 mm/s na szerokości 54 mm.\n\n300 dpi (DH320L) — do 152 mm/s na szerokości 56,9 mm; do drobnych danych na opasce.',
    'Panel': 'Sposób obsługi drukarki.\n\nLED — dioda stanu i trzy ikony stanu (modele DH220LHC i DH320LHC).\n\nEkran dotykowy — kolorowy ekran 3,5 cala do zmiany ustawień bez komputera (DH220LTHC i DH320LTHC).',
    'Wyposażenie': 'Moduł zamontowany w danej wersji; Ethernet, RS-232, USB i USB Host ma każda wersja.\n\nWi-Fi + BT 5.0 — sieć 802.11a/b/g/n/ac i Bluetooth 5.0.\n\nBT MFi 5.3 — Bluetooth 5.3 z certyfikatem Apple MFi do druku z iPhone lub iPad.\n\nOdklejak — oddziela etykietę od podkładu i podaje ją do naklejenia.\n\nObcinarka — gilotyna do cięcia pełnego i częściowego; bez odklejaka i obcinarki etykiety odrywa się ręcznie.',
  },
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Czy TSC DH220LHC drukuje opaski dla pacjentów?',
      answer: 'Tak. Opaski na rękę są na liście obsługiwanych materiałów, a rolka o średnicy do 165 mm jest przeznaczona do druku dużych ilości opasek. Szerokość materiału musi mieścić się w zakresie 10–60 mm, a grubość w 0,06–0,19 mm.',
    },
    {
      question: 'Czym DH220LHC różni się od DH220LTHC?',
      answer: 'DH220LHC ma panel z diodą stanu, trzema ikonami i przyciskami. DH220LTHC ma kolorowy ekran dotykowy 3,5 cala, na którym zmienia się ustawienia bez komputera. Tylko modele z ekranem dotykowym mogą zostać rozbudowane przez dealera o moduł HF RFID. Pozostałe parametry obu modeli są takie same.',
    },
    {
      question: 'Do czego służy czujnik Save Labels w DH320LHC?',
      answer: 'Czujnik automatycznie ustawia początek materiału w pozycji startowej druku. Po założeniu rolki nie trzeba ręcznie wyrównywać etykiet ani przewijać ich do przodu, co ogranicza straty materiału.',
    },
    {
      question: 'Jak dezynfekować drukarkę DH220LHC?',
      answer: 'Przed dezynfekcją drukarkę wyłącza się wyłącznikiem; przewód zasilający zostaje w gniazdku, żeby zachować uziemienie. Następnie obudowę przeciera się wilgotną ściereczką bez włókien, a przy zabrudzeniu dodaje detergent bez chloru. Na koniec powierzchnię przeciera się ściereczką z 75-procentowym etanolem. Środka nie rozpyla się bezpośrednio na drukarkę.',
    },
    {
      question: 'Która wersja DH220LHC ma odklejak lub obcinarkę?',
      answer: 'Odklejak mają PN kończące się na 12 (np. DH220LHC-A001-1012), a obcinarkę PN kończące się na 22 (np. DH220LHC-A001-0022). Obcinarka jest gilotyną do cięcia pełnego i częściowego. Oba moduły dealer może też zamontować później.',
    },
    {
      question: 'Czy DH320LHC ma zasilacz z certyfikatem medycznym?',
      answer: 'Tak. Certyfikat IEC 60601-1 ma zewnętrzny zasilacz o mocy 60 W i napięciu wyjściowym 24 V DC, dostarczany z drukarką.',
    },
    {
      question: 'Jaka gwarancja obejmuje TSC DH220LHC i DH320LHC?',
      answer: 'TSC daje 3 lata gwarancji na drukarkę, 25 km lub 12 miesięcy na głowicę i 50 km lub 12 miesięcy na wałek dociskowy. Obowiązuje limit, który zostanie osiągnięty jako pierwszy.',
    },
    {
      question: 'Jakie są alternatywy dla TSC DH220LHC?',
      answer: 'Przy mniejszych rolkach, do 127 mm, można wybrać [TSC DH220THC / DH320THC](/produkt/tsc-dh220thc). Do druku opasek i etykiet służy także [SATO WS2-2](/produkt/sato-ws2-2), a opaski w kartridżach drukuje [Zebra ZD510-HC](/produkt/zebra-zd510-hc).',
    },
  ],
  downloads: [
    datasheetThDh,
    { name: 'Instrukcja obsługi TSC DH220L (EN)', type: 'manual', url: '/downloads/tsc-dh220l-instrukcja-en.pdf', size: '2,5 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/dh-series-2-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-dh220thc', 'sato-ws2-2', 'tsc-th220thc', 'zebra-zd411-hc', 'zebra-zd611-hc'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/dh-series-2-inch-performance-desktop-printers',
}

const alpha30lhc: Product = {
  id: 'tsc-alpha-30lhc',
  slug: 'tsc-alpha-30lhc',
  name: 'TSC Alpha-30LHC',
  shortDescription: 'TSC Alpha-30LHC — 3-calowa mobilna drukarka etykiet dla służby zdrowia: biało-szara obudowa antybakteryjna, IP54, Wi-Fi, Bluetooth i NFC, zasilacz IEC 60601-1.',
  seoTitle: 'TSC Alpha-30LHC — mobilna drukarka etykiet dla służby zdrowia',
  seoDescription: 'Mobilna drukarka etykiet TSC Alpha-30LHC (Alpha-30L HC) dla ratownictwa medycznego i do etykietowania próbek: druk termiczny 3", 203 dpi, IP54, bateria 3030 mAh, Wi-Fi i Bluetooth. Drukarka mobilna TSC Alpha-30LHC, Alpha-30LHC TSC. PN: A30LHC-A001-1002.',
  description: `TSC Alpha-30LHC to 3-calowa mobilna drukarka termiczna w wersji dla ochrony zdrowia, z obudową w kolorze białym i szarym. Jest przeznaczona m.in. dla zespołów ratownictwa medycznego, do karetek i do etykietowania próbek. Drukuje etykiety i paragony, zasilana z baterii.

Obudowa z tworzywa pokrytego gumą jest antybakteryjna i przygotowana do dezynfekcji, a uszczelnione przyciski ułatwiają jej przecieranie. Zasilacz z zestawu ma certyfikat IEC 60601-1. Ten sam certyfikat ma zasilacz opcjonalnej ładowarki na cztery baterie w wersji dla ochrony zdrowia.

Drukarka ma klasę IP54 (z wyłączeniem toru papieru) i wytrzymuje upadek z 1,8 m, a w etui ochronnym z 2,5 m. Z baterią 3030 mAh waży 745 g. Drukuje z rozdzielczością 203 dpi, do 127 mm/s, na szerokości do 72 mm i z rolki o średnicy do 67 mm.

Wersja A30LHC-A001-1002 łączy się przez USB-C, Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0, a parowanie ułatwia pasywny znacznik NFC. Stan drukarki pokazuje kolorowy wyświetlacz 2,3 cala. W trybie odklejania etykieta może mieć 25,4–152,4 mm długości.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 2952.09,
  images: ['/images/products/A30LHC-A001-1002.png'],
  imageDescriptions: [
    'TSC Alpha-30LHC — biało-szara mobilna drukarka 3" z kolorowym wyświetlaczem, klawiaturą nawigacyjną i zielonym zatrzaskiem pokrywy',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi',
    predkoscDruku: 'Do 127 mm/s',
    szerokoscDruku: 'Do 72 mm',
    szerokoscEtykiet: '25,4–80 mm (z podkładem)',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '3-calowa mobilna drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 127 mm/s' },
    { name: 'Szerokość druku', value: 'Do 72 mm' },
    { name: 'Długość wydruku', value: 'Do 2794 mm' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Obudowa w kolorze białym i szarym, z tworzywa pokrytego gumą; tworzywo przygotowane do dezynfekcji, łatwa do czyszczenia powierzchnia, uszczelnione przyciski; obudowa antybakteryjna; zasilacz z certyfikatem IEC 60601-1' },
    { name: 'Odporność', value: 'IP54 bez etui (z wyłączeniem toru papieru); upadek z 1,8 m, w etui ochronnym z 2,5 m' },
    { name: 'Szerokość materiału', value: '25,4–80 mm z podkładem' },
    { name: 'Grubość materiału', value: '0,06–0,16 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 67 mm; gilza 12,7 mm, z opcjonalnymi adapterami 19,1 mm oraz 25,4 i 38,1 mm' },
    { name: 'Długość etykiety', value: '12,7–2794 mm; w trybie odklejania 25,4–152,4 mm' },
    { name: 'Rodzaje materiałów', value: 'Etykiety wycinane, z czarnym znacznikiem, papier paragonowy, składanka, materiał bez podkładu, materiał ciągły (nawinięcie na zewnątrz)' },
    { name: 'Czujniki', value: 'Refleksyjny, transmisyjny, czujnik odklejania, czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Kolorowy wyświetlacz LCD 2,3 cala (320 × 240 pikseli), 2 diody (ładowanie, stan drukarki), 7 przycisków (zasilanie, podawanie/pauza, menu, nawigacja)' },
    { name: 'Interfejsy', value: 'USB-C 2.0 (tylko komunikacja), Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0, pasywny znacznik NFC' },
    { name: 'Pamięć', value: '128 MB SDRAM, 128 MB Flash; czytnik microSD do 32 GB' },
    { name: 'Zegar czasu rzeczywistego', value: 'Standard' },
    { name: 'Język drukarki', value: 'TSPL-EZC (EPL2, ZPL2, CPCL) lub ESC/POS' },
    { name: 'Kody kreskowe', value: '1D: m.in. Code 128, EAN-128, Code 39, Code 93, EAN-13, EAN-8, UPC-A, UPC-E, ITF-14, Codabar, MSI, LOGMARS; 2D: CODABLOCK F, GS1 DataBar, GS1 DataMatrix, MaxiCode, Aztec, PDF417, QR Code, Micro PDF417, TLC39' },
    { name: 'Bateria', value: 'Li-ion Smart Battery 7,4 V, 3030 mAh; ładowanie 3,5–5 godz.; do 23,5 godz. pracy przy wypełnieniu wydruku 12,5%, jednej etykiecie na 2 minuty i połączeniu Bluetooth' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '117 × 173 × 79 mm' },
    { name: 'Waga', value: '745 g z baterią' },
    { name: 'Temperatura pracy', value: '−20–50°C; ładowanie 0–40°C; wilgotność 10–90% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−30–70°C' },
    { name: 'Opcje fabryczne', value: 'Położenie czujnika materiału (środek, prawa lub lewa strona), zestaw linerless' },
    { name: 'Opcje użytkownika', value: 'Przewód USB-C, adaptery gilzy, etui ochronne z paskiem na ramię, pasek na ramię, bateria, ładowarka 4 baterii z zasilaczem IEC 60601-1, zasilacze samochodowe, zasilanie bez baterii (eliminator baterii), uchwyt samochodowy, zewnętrzny pojemnik na składankę' },
    { name: 'W zestawie', value: 'Bateria Li-ion, zasilacz z certyfikatem IEC 60601-1, klips do paska, skrócona instrukcja' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; bateria 1 rok; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Zespoły ratownictwa medycznego',
    'Karetki',
    'Etykietowanie próbek',
    'Paragony drukowane w terenie',
  ],
  variants: [
    { partNumber: 'A30LHC-A001-1002', name: 'Alpha-30LHC, 203 dpi, USB-C + Wi-Fi + Bluetooth 5.0 + NFC', attributes: { 'Łączność': 'Wi-Fi + BT 5.0 + NFC' }, priceFrom: 2952.09, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Interfejsy tej wersji drukarki.\n\nWi-Fi + BT 5.0 + NFC — Wi-Fi 802.11a/b/g/n/ac, Bluetooth 5.0 i pasywny znacznik NFC do szybkiego parowania; port USB-C służy tylko do komunikacji.',
  },
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Jak długo TSC Alpha-30LHC pracuje na baterii?',
      answer: 'Bateria 3030 mAh wystarcza na około 23,5 godziny przy wypełnieniu wydruku 12,5%, jednej etykiecie na dwie minuty i połączeniu Bluetooth. Pełne ładowanie trwa 3,5–5 godzin. Baterię ładuje się w temperaturze 0–40°C.',
    },
    {
      question: 'Jak czyścić i dezynfekować Alpha-30LHC?',
      answer: 'Obudowę myje się niepylącą ściereczką nasączoną wodą; przy silniejszym zabrudzeniu można użyć łagodnego środka bez chloru lub płynu do czyszczenia blatów, po czym przetrzeć ją 75-procentowym etanolem. Głowicę, wałek i krawędź odklejania czyści się alkoholem izopropylowym 99%. Płynu nie należy rozpylać bezpośrednio na drukarkę.',
    },
    {
      question: 'Czy Alpha-30LHC ładuje się przez USB-C?',
      answer: 'Nie. Port USB-C służy tylko do komunikacji. Baterię ładuje zasilacz z zestawu, który ma certyfikat IEC 60601-1, albo opcjonalna ładowarka na cztery baterie z zasilaczem o tym samym certyfikacie.',
    },
    {
      question: 'Czy TSC Alpha-30LHC wytrzyma upadek?',
      answer: 'Drukarka wytrzymuje upadek z 1,8 m i ma klasę szczelności IP54, przy czym tor papieru nie jest objęty tą klasą. W opcjonalnym etui ochronnym odporność na upadek rośnie do 2,5 m.',
    },
    {
      question: 'Jakie etykiety przyjmuje Alpha-30LHC?',
      answer: 'Materiał z podkładem o szerokości 25,4–80 mm i grubości 0,06–0,16 mm, na rolce o średnicy do 67 mm. Drukarka obsługuje etykiety wycinane, z czarnym znacznikiem, papier paragonowy, składankę i materiał ciągły. Do materiału bez podkładu potrzebny jest fabryczny zestaw linerless.',
    },
    {
      question: 'Jaka gwarancja obejmuje TSC Alpha-30LHC?',
      answer: 'Na drukarkę obowiązują 2 lata gwarancji, na baterię rok. Głowica jest objęta gwarancją do przebiegu 25 km albo przez 12 miesięcy, a wałek dociskowy do 50 km albo przez 12 miesięcy.',
    },
    {
      question: 'Jaką inną mobilną drukarkę dla ochrony zdrowia można wybrać?',
      answer: 'Drukarką 3-calową w wersji dla ochrony zdrowia jest też [Zebra ZQ620 Plus-HC](/produkt/zebra-zq620-plus-hc).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa Alpha-30L (EN)', type: 'datasheet', url: '/downloads/tsc-alpha-30l-40l-karta-produktu-en.pdf', size: '1,6 MB' },
    { name: 'Instrukcja TSC Alpha-30L/40L (EN)', type: 'manual', url: '/downloads/tsc-alpha-30l-40l-instrukcja-en.pdf', size: '2,3 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/products/alpha-series-3-inch-performance-mobile-printers', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq620-plus-hc'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/alpha-series-3-inch-performance-mobile-printers',
}

// Drukarki w jednej liście: integracja w products.ts dołącza ją do katalogu
// i rozdziela do podkategorii według `subcategoryIds`.
export const tscHcProducts: Product[] = [th240thc, dh240thc, th220thc, dh220thc, dh220lhc, alpha30lhc]
