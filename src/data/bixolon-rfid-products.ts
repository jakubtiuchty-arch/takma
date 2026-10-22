import type { Product } from './products'

const headParts = [
  { dpi: 203, pn: 'AE04-00043A-AS', model: 'XT5-40NR', models: 'XT5-40 i XT5-40NR', price: 1528.42 },
  { dpi: 300, pn: 'AE04-00043B-AS', model: 'XT5-43NR', models: 'XT5-43 i XT5-43NR', price: 2752.86 },
  { dpi: 600, pn: 'AE04-00043C-AS', model: 'XT5-46NR', models: 'XT5-46 i XT5-46NR', price: 3177.67 },
]

export const bixolonRfidAccessories: Product[] = [
  ...headParts.map<Product>(a => ({
    id: `bixolon-xt5-glowica-${a.dpi}`, slug: `bixolon-xt5-glowica-${a.dpi}`, name: `Głowica ${a.dpi} dpi BIXOLON XT5 — ${a.pn}`,
    shortDescription: `Głowica drukująca ${a.pn} do BIXOLON ${a.models} (${a.dpi} dpi). Część zamienna do drukarki o tej samej rozdzielczości.`,
    description: `Głowica ${a.pn} zastępuje zużytą głowicę ${a.dpi} dpi w BIXOLON ${a.models}. Wykonuje nadruk na etykiecie. Nie dodaje funkcji RFID. Sprawna drukarka ma głowicę już zamontowaną.\n\nDobierz tę część do tej samej rozdzielczości. Nie służy do samodzielnej zmiany rozdzielczości urządzenia. Przed zakupem podaj model i numer seryjny. Odłącz zasilanie przed wymianą.\n\nPasuje do odpowiedniej wersji [BIXOLON XT5-40](/produkt/bixolon-xt5-40) oraz [XT5-40NR](/produkt/bixolon-xt5-40nr), przy tej samej rozdzielczości.`,
    seoTitle: `Głowica BIXOLON ${a.dpi} dpi ${a.pn} | TAKMA`,
    seoDescription: `Głowica ${a.pn}, ${a.dpi} dpi do BIXOLON ${a.models}. Sprawdź cenę, stan i zgodność części zamiennej.`,
    categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-xt5-glowica.webp'], imageDescriptions: [`Głowica BIXOLON XT5 ${a.dpi} dpi, PN ${a.pn} — zdjęcie poglądowe zespołu głowicy`],
    tags: ['produkcja', 'magazyn'], priceFrom: a.price, availability: 'unavailable' as const, isNew: true, isBestseller: false,
    specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Rozdzielczość', value: `${a.dpi} dpi` }, { name: 'Zgodność', value: `BIXOLON ${a.models} (${a.dpi} dpi)` }],
    applications: ['Wymiana zużytej głowicy drukującej'], compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['bixolon-xt5-40', 'bixolon-xt5-40nr'],
    downloads: [{ name: 'Instrukcja XT5-40NR (EN)', type: 'manual' as const, url: '/downloads/bixolon-xt5-40nr-instrukcja-en.pdf', size: '6,2 MB' }], createdAt: '2026-10-16',
  })),
  {
    id: 'bixolon-les-400g', slug: 'bixolon-les-400g', name: 'Uchwyt rolki BIXOLON LES-400G',
    shortDescription: 'Zewnętrzny uchwyt rolki do zgodnych drukarek etykiet BIXOLON. Obsługuje rolki do 203 mm na gilzie 25,4–38,1 mm.',
    description: 'BIXOLON LES-400G podaje materiał z rolki umieszczonej za drukarką. Pasuje do [BIXOLON XD5-40tR](/produkt/bixolon-xd5-40tr), rodzin XD3-40d/t, XD5-40d/t, XD5-40IId/IIt, SLP-DX220/TX220, SLP-DL410, XL5-40 i XQ-840II. Obsługuje rolki o średnicy zewnętrznej do 203 mm i gilzie 25,4–38,1 mm.\n\nUstaw uchwyt za drukarką. Wprowadź materiał przez tylną szczelinę i ustaw prowadnice. Uchwyt nie jest nawijakiem i nie ma napędu. Nie jest częścią standardowego zestawu drukarki.\n\nPrzy RFID dobierz także szerokość etykiety, odstęp i położenie wkładki. Większa rolka nie zmienia wymagań kodera ani dopuszczalnej grubości materiału.',
    seoTitle: 'BIXOLON LES-400G — zewnętrzny uchwyt rolki | TAKMA',
    seoDescription: 'BIXOLON LES-400G: zewnętrzny uchwyt rolki do zgodnych drukarek XD3, XD5, SLP, XL5 i XQ. Rolka do 203 mm, gilza 25,4–38,1 mm. Sprawdź cenę i stan.',
    categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-les-400g.webp'], imageDescriptions: ['BIXOLON LES-400G — zewnętrzny uchwyt rolki bez etykiet'],
    tags: ['magazyn', 'retail'], priceFrom: 75.12, availability: 'available', isNew: true, isBestseller: false,
    specifications: [{ name: 'Part Number', value: 'LES-400G' }, { name: 'Zgodność', value: 'XD3-40d/t, XD5-40d/t, XD5-40IId/IIt, XD5-40tR, SLP-DX220/TX220, SLP-DL410, XL5-40, XQ-840II' }, { name: 'Średnica rolki', value: 'Do 203 mm' }, { name: 'Średnica gilzy', value: '25,4–38,1 mm' }],
    applications: ['Podawanie etykiet z większej rolki'], compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['bixolon-xd3-40d', 'bixolon-xd3-40t', 'bixolon-xd5-40d', 'bixolon-xd5-40t', 'bixolon-xd5-40iid', 'bixolon-xd5-40iit', 'bixolon-slp-dx220', 'bixolon-slp-tx220', 'bixolon-slp-dl410', 'bixolon-xl5-40ct', 'bixolon-xq-840ii', 'bixolon-xd5-40tr'],
    downloads: [{ name: 'Instrukcja XD5-40tR (EN)', type: 'manual', url: '/downloads/bixolon-xd5-40tr-instrukcja-en.pdf#page=62', size: '3,0 MB' }, { name: 'Katalog akcesoriów BIXOLON (EN)', type: 'pdf', url: '/downloads/bixolon-akcesoria-etykiety-en.pdf', size: '3,4 MB' }], createdAt: '2026-10-16',
  },
]

const commonDownloads: Product['downloads'] = [
  { name: 'Katalog akcesoriów BIXOLON (EN)', type: 'pdf', url: '/downloads/bixolon-akcesoria-etykiety-en.pdf', size: '3,4 MB' },
]

export const bixolonRfidProducts: Product[] = [
  {
    id: 'bixolon-xt5-40nr', slug: 'bixolon-xt5-40nr', name: 'BIXOLON XT5-40NR', seoH1: 'BIXOLON XT5-40NR',
    seoTitle: 'BIXOLON XT5-40NR — drukarka RFID UHF 203–600 dpi',
    seoDescription: 'BIXOLON XT5-40NR – przemysłowa drukarka RFID UHF 203, 300 lub 600 dpi. Ethernet 1 Gb/s, ekran dotykowy 4,3 cala, taśma do 450 m i rolka do 203 mm.',
    shortDescription: 'BIXOLON XT5-40NR — przemysłowa drukarka i koder UHF RFID EU w wersjach 203, 300 i 600 dpi. Ma ekran dotykowy 4,3 cala, Ethernet, USB i RS-232. Przyjmuje rolki do 203 mm i taśmy do 450 m.',
    description: `BIXOLON XT5-40NR to przemysłowa drukarka RFID UHF w aluminiowej obudowie ze składanymi drzwiami komory materiału. Koduje etykiety EPC Class 1 Gen2 i drukuje je termotransferowo albo termicznie bezpośrednio. Wersje różnią się głowicą: 203, 300 lub 600 dpi.

## Trzy głowice: 356, 254 i 127 mm/s

XT5-40NRES z głowicą 203 dpi drukuje do 356 mm/s i do 4000 mm długości. XT5-43NRES/BEG ma 300 dpi, prędkość do 254 mm/s i wydruk do 2500 mm. XT5-46NRES/BEG ma 600 dpi, prędkość do 127 mm/s i wydruk do 1000 mm. Szerokość nadruku wynosi 104–105,7 mm. Wałek i głowicę wymienia się bez narzędzi.

## Kodowanie w paśmie 865–868 MHz

Moduł UHF pracuje z mocą 1 W i protokołem ISO 18000-6C. Wkładki mogą występować co 16 mm. Zadania z poleceniami RFID przyjmuje w języku SLCS oraz w emulacjach BPL-Z, BPL-E i BPL-D. Port GPIO z 4 wejściami i 8 wyjściami jest opcją do pracy z automatyką.

## Materiał 0,06–0,30 mm i port 1 Gb/s

Drukarka przyjmuje materiał o szerokości 25–114 mm i grubości 0,06–0,30 mm. Rolka ma do 203 mm średnicy na gilzie 38,1–76,2 mm. Taśma do 450 m może mieć warstwę barwiącą na zewnątrz lub wewnątrz. Każda konfiguracja ma Ethernet 10/100/1000 Mb/s, USB, dwa porty USB Host, zegar RTC i ekran dotykowy 4,3 cala. Seria ma też warianty z WLAN, Bluetooth, portem równoległym lub GPIO.

Biurkowa [BIXOLON XD5-40tR](/produkt/bixolon-xd5-40tr) przyjmuje taśmę do 300 m i rolkę do 127 mm.`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-xt5-40nr-clean.webp'], imageDescriptions: ['BIXOLON XT5-40NR — drukarka przemysłowa RFID z ekranem dotykowym, widok pod kątem'],
    tags: ['magazyn', 'produkcja', 'logistyka'], priceFrom: 14482.42, availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203, 300 lub 600 dpi', predkoscDruku: 'Do 356 mm/s (203 dpi), 254 mm/s (300 dpi), 127 mm/s (600 dpi)', szerokoscDruku: '104 / 105,7 / 105,6 mm', szerokoscEtykiet: '25–114 mm; RFID wymaga doboru wkładki' },
    variants: [
      { partNumber: 'XT5-40NRES', priceFrom: 14482.42, name: 'XT5-40NR, 203 dpi, UHF EU', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość druku': '356 mm/s', 'Szerokość druku': '104 mm' }, availability: 'unavailable' },
      { partNumber: 'XT5-43NRES/BEG', priceFrom: 17504.34, name: 'XT5-43NR, 300 dpi, UHF EU', attributes: { 'Rozdzielczość': '300 dpi', 'Prędkość druku': '254 mm/s', 'Szerokość druku': '105,7 mm' }, availability: 'unavailable' },
      { partNumber: 'XT5-46NRES/BEG', priceFrom: 21319.86, name: 'XT5-46NR, 600 dpi, UHF EU', attributes: { 'Rozdzielczość': '600 dpi', 'Prędkość druku': '127 mm/s', 'Szerokość druku': '105,6 mm' }, availability: 'unavailable' },
    ],
    specifications: [
      { name: 'RFID', value: 'UHF EU 865–868 MHz; ISO 18000-6C / EPC Class 1 Gen2; minimalny pitch 16 mm' },
      { name: 'Rozdzielczość', value: '203, 300 lub 600 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '104 mm (203 dpi); 105,7 mm (300 dpi); 105,6 mm (600 dpi)' },
      { name: 'Prędkość nadruku', value: 'Do 356 / 254 / 127 mm/s dla 203 / 300 / 600 dpi; kodowanie zależy od materiału' },
      { name: 'Ekran', value: 'Dotykowy, kolorowy, 4,3 cala' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet; Wi-Fi i Bluetooth: brak' },
      { name: 'Zegar RTC', value: 'Tak' },
      { name: 'Materiał', value: 'Szerokość 25–114 mm; rolka do 203 mm; gilza 38,1–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; gilza 25,4 mm' },
      { name: 'Pamięć', value: '512 MB SDRAM i 512 MB Flash' },
    ],
    compatibleAccessories: [], relatedAccessories: headParts.map(a => `bixolon-xt5-glowica-${a.dpi}`),
    applications: ['Kodowanie etykiet UHF z głowicą 600 dpi', 'Długie etykiety RFID do 4000 mm', 'Etykiety UHF na grubszym materiale do 0,30 mm'],
    faq: [
      { question: 'Która wersja XT5-40NR drukuje najdłuższe etykiety?', answer: 'XT5-40NRES z głowicą 203 dpi. Pojedynczy wydruk może mieć do 4000 mm. Wersja 300 dpi drukuje do 2500 mm, a 600 dpi do 1000 mm.' },
      { question: 'Czy XT5-40NR przyjmie rolkę na gilzie 25,4 mm?', answer: 'Tak, z opcjonalnym wieszakiem na gilzę 1 cala. Standardowo gilza ma 38,1–76,2 mm, a rolka do 203 mm średnicy.' },
      { question: 'Jak gruby materiał RFID przejdzie przez XT5-40NR?', answer: 'Do 0,30 mm. Dolna granica wynosi 0,06 mm, a szerokość materiału 25–114 mm.' },
    ],
    downloads: [{ name: 'Karta katalogowa XT5-40NR (EN)', type: 'datasheet', url: '/downloads/bixolon-xt5-40nr-karta-en.pdf', size: '1,1 MB' }, { name: 'Instrukcja XT5-40NR (EN)', type: 'manual', url: '/downloads/bixolon-xt5-40nr-instrukcja-en.pdf', size: '6,2 MB' }, ...commonDownloads, { name: 'Sterowniki i pliki XT5-40NR', type: 'driver', url: 'https://www.bixolon.com/download_view.php?idx=165', size: 'Online' }],
    relatedProducts: ['bixolon-xd5-40tr', 'zebra-zt411-rfid', 'tsc-mb241tr'], sameAs: 'https://www.bixolon.com/product_view.php?idx=384', createdAt: '2026-10-16',
  },
  {
    id: 'bixolon-xd5-40tr', slug: 'bixolon-xd5-40tr', name: 'BIXOLON XD5-40tR', seoH1: 'BIXOLON XD5-40tR',
    seoTitle: 'BIXOLON XD5-40tR — drukarka RFID UHF 203 dpi',
    seoDescription: 'BIXOLON XD5-40tR – biurkowa drukarka RFID UHF 203 dpi z koderem 865–868 MHz. Druk 108 mm do 152 mm/s, taśma do 300 m, USB, RS-232 i Ethernet.',
    shortDescription: 'BIXOLON XD5-40tR — biurkowa drukarka i koder UHF RFID EU, 203 dpi, do 152 mm/s. Druk do 108 mm, USB, USB Host, RS-232 i Ethernet. Taśmy do 300 m i opcjonalny uchwyt większej rolki.',
    description: `BIXOLON XD5-40tR to biurkowa drukarka RFID UHF do etykiet na materiale o szerokości 15–118 mm. Drukuje treść etykiety i zapisuje dane w jej wkładce UHF. Służy do kodowania etykiet RFID przy stanowisku pracy w handlu, logistyce, produkcji i ochronie zdrowia.

## Koder 865–868 MHz i kalibracja RFID Cal

Moduł RFID pracuje w paśmie 865–868 MHz z mocą nadajnika 1 W. Obsługuje protokół ISO 18000-6C, czyli EPC Class 1 Gen2. Wkładki mogą występować co 16 mm. Funkcja RFID Cal ustala położenie transpondera i moc zapisu. Po każdej zmianie typu etykiety RFID kalibrację trzeba powtórzyć. W menu RFID ustawia się też liczbę ponownych prób zapisu po błędzie.

## Taśma 300 m w obudowie 211 × 285 × 188 mm

XD5-40tR drukuje termotransferowo lub termicznie bezpośrednio, z prędkością do 152 mm/s. Szerokość nadruku wynosi do 108 mm, a długość do 1000 mm. Taśma barwiąca ma do 300 m na gilzie 25,4 mm albo 74 m na gilzie 12,7 mm. Rolka materiału w obudowie ma do 127 mm średnicy. Większą rolkę podaje z tyłu zewnętrzny podajnik [LES-400G](/produkt/bixolon-les-400g).

## USB, RS-232, Ethernet i opcjonalne WLAN

Standardowo drukarka ma USB, USB Host, RS-232 i Ethernet 10/100. Konfiguracje z WLAN 802.11a/b/g/n albo z Bluetooth 5.0 są opcjonalne. Wyświetlacz LCD 200 × 100 pikseli jest w XD5-40tR wyposażeniem standardowym. Drukarka przyjmuje polecenia SLCS, BPL-Z i BPL-E, a BPL-D jest opcją.

Przemysłowa [BIXOLON XT5-40NR](/produkt/bixolon-xt5-40nr) przyjmuje taśmę do 450 m i rolkę do 203 mm.`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-xd5-40tr-clean.webp'], imageDescriptions: ['BIXOLON XD5-40tR — biurkowa drukarka RFID z ekranem LCD, widok pod kątem'],
    tags: ['magazyn', 'retail', 'produkcja'], priceFrom: 8659.82, availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203 dpi', predkoscDruku: 'Do 152 mm/s; kodowanie zależy od materiału', szerokoscDruku: 'Do 108 mm', szerokoscEtykiet: '15–118 mm; RFID wymaga doboru wkładki' },
    variants: [{ partNumber: 'XD5-40tREK', priceFrom: 8659.82, name: '203 dpi, UHF EU, Ethernet', attributes: {}, availability: 'unavailable' }],
    specifications: [
      { name: 'RFID', value: 'UHF EU 865–868 MHz; ISO 18000-6C / EPC Class 1 Gen2; minimalny pitch 16 mm' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: 'Do 108 mm' },
      { name: 'Prędkość nadruku', value: 'Do 152 mm/s; kodowanie zależy od materiału' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232 i Ethernet; bez Wi-Fi i Bluetooth w XD5-40tREK' },
      { name: 'Panel', value: 'Ekran LCD i przyciski' },
      { name: 'Materiał', value: 'Szerokość 15–118 mm; rolka wewnętrzna do 127 mm; gilza 25,4–38,1 mm' },
      { name: 'Rolka zewnętrzna', value: 'Do 203 mm z opcjonalnym LES-400G' },
      { name: 'Taśma barwiąca', value: 'Do 300 m na gilzie 25,4 mm; do 74 m na gilzie 12,7 mm; farba na zewnątrz' },
      { name: 'Zawartość zestawu', value: 'Drukarka z koderem UHF EU, zasilacz, przewód zasilający, przewód USB, gilzy 12,7 i 25,4 mm, 2 uchwyty taśmy; etykiety i taśma dobierane osobno' },
    ],
    compatibleAccessories: [], relatedAccessories: ['bixolon-les-400g'], applications: ['Druk i kodowanie etykiet UHF przy stanowisku biurowym', 'Etykiety RFID na wąskim materiale od 15 mm', 'Oznaczanie towarów UHF w małych seriach'],
    faq: [
      { question: 'Jak XD5-40tR ustala miejsce kodowania na etykiecie?', answer: 'Przez automatyczną kalibrację RFID Cal uruchamianą z menu. Drukarka wyznacza położenie transpondera i moc zapisu. Przy nowym typie etykiety RFID kalibrację wykonuje się ponownie.' },
      { question: 'Czy XD5-40tR obsłuży rolkę większą niż 127 mm?', answer: 'Tak, z zewnętrznym podajnikiem LES-400G ustawionym za drukarką. Wewnątrz obudowy mieści się rolka do 127 mm na gilzie 25,4–38,1 mm.' },
      { question: 'Jaką grubość materiału przyjmuje XD5-40tR?', answer: '0,06–0,20 mm. Szerokość materiału wynosi 15–118 mm, a minimalny rozstaw wkładek RFID 16 mm.' },
    ],
    downloads: [{ name: 'Karta katalogowa XD5-40tR (EN)', type: 'datasheet', url: '/downloads/bixolon-xd5-40tr-karta-en.pdf', size: '1,3 MB' }, { name: 'Instrukcja XD5-40tR (EN)', type: 'manual', url: '/downloads/bixolon-xd5-40tr-instrukcja-en.pdf', size: '3,0 MB' }, ...commonDownloads, { name: 'Sterowniki i pliki XD5-40tR', type: 'driver', url: 'https://www.bixolon.com/download_view.php?idx=163', size: 'Online' }],
    relatedProducts: ['bixolon-xt5-40nr', 'zebra-zd621r', 'tsc-th240r'], sameAs: 'https://www.bixolon.com/product_view.php?idx=386', createdAt: '2026-10-16',
  },
]
