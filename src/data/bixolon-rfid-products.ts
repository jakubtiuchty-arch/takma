import type { Product } from './products'

const headParts = [
  { dpi: 203, pn: 'AE04-00043A-AS', model: 'XT5-40NR', price: 1528.42 },
  { dpi: 300, pn: 'AE04-00043B-AS', model: 'XT5-43NR', price: 2752.86 },
  { dpi: 600, pn: 'AE04-00043C-AS', model: 'XT5-46NR', price: 3177.67 },
]

export const bixolonRfidAccessories: Product[] = [
  ...headParts.map<Product>(a => ({
    id: `bixolon-xt5-glowica-${a.dpi}`, slug: `bixolon-xt5-glowica-${a.dpi}`, name: `Głowica ${a.dpi} dpi BIXOLON XT5 — ${a.pn}`,
    shortDescription: `Głowica drukująca ${a.pn} do BIXOLON ${a.model}, ${a.dpi} dpi. Część zamienna do zgodnej wersji drukarki.`,
    description: `Głowica ${a.pn} zastępuje zużytą głowicę ${a.dpi} dpi w BIXOLON ${a.model}. Wykonuje nadruk na etykiecie. Nie dodaje funkcji RFID. Sprawna drukarka ma głowicę już zamontowaną.\n\nDobierz tę część do tej samej rozdzielczości. Nie służy do samodzielnej zmiany rozdzielczości urządzenia. Przed zakupem podaj model i numer seryjny. Odłącz zasilanie przed wymianą.\n\nPasuje do odpowiedniej wersji [BIXOLON XT5-40](/produkt/bixolon-xt5-40) oraz [XT5-40NR](/produkt/bixolon-xt5-40nr), przy tej samej rozdzielczości.`,
    seoTitle: `Głowica BIXOLON ${a.dpi} dpi ${a.pn} | TAKMA`,
    seoDescription: `Głowica ${a.pn}, ${a.dpi} dpi do BIXOLON ${a.model}. Sprawdź cenę, stan i zgodność części zamiennej.`,
    categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-xt5-glowica.webp'], imageDescriptions: [`Głowica BIXOLON XT5 ${a.dpi} dpi, PN ${a.pn} — zdjęcie poglądowe zespołu głowicy`],
    tags: ['produkcja', 'magazyn'], priceFrom: a.price, availability: 'unavailable' as const, isNew: true, isBestseller: false,
    specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Rozdzielczość', value: `${a.dpi} dpi` }, { name: 'Zgodność', value: `BIXOLON ${a.model}, ta sama rozdzielczość` }],
    applications: ['Wymiana zużytej głowicy drukującej'], compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['bixolon-xt5-40nr'],
    downloads: [{ name: 'Instrukcja XT5-40NR (EN)', type: 'manual' as const, url: '/downloads/bixolon-xt5-40nr-instrukcja-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
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
    applications: ['Podawanie etykiet z większej rolki'], compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['bixolon-xd5-40tr'],
    downloads: [{ name: 'Instrukcja XD5-40tR (EN)', type: 'manual', url: '/downloads/bixolon-xd5-40tr-instrukcja-en.pdf#page=62', size: 'PDF' }, { name: 'Katalog akcesoriów BIXOLON (EN)', type: 'pdf', url: '/downloads/bixolon-akcesoria-etykiety-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
  },
]

const commonDownloads: Product['downloads'] = [
  { name: 'Katalog akcesoriów BIXOLON (EN)', type: 'pdf', url: '/downloads/bixolon-akcesoria-etykiety-en.pdf', size: 'PDF' },
]

export const bixolonRfidProducts: Product[] = [
  {
    id: 'bixolon-xt5-40nr', slug: 'bixolon-xt5-40nr', name: 'BIXOLON XT5-40NR', seoH1: 'BIXOLON XT5-40NR',
    seoTitle: 'BIXOLON XT5-40NR — drukarka RFID UHF 203–600 dpi',
    seoDescription: 'BIXOLON XT5-40NR, XT5-43NR i XT5-46NR: przemysłowe drukarki i kodery UHF RFID 203, 300 lub 600 dpi. Druk do 356 mm/s, taśma 450 m, Ethernet.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID EU. Trzy warianty: 203, 300 i 600 dpi. Ekran dotykowy 4,3 cala, Ethernet, USB i RS-232. Rolki do 203 mm i taśmy do 450 m.',
    description: `BIXOLON XT5-40NR drukuje etykiety i zapisuje dane w ich układach UHF RFID. Służy do znakowania produktów, kartonów i wyposażenia. Rodzina obejmuje XT5-40NR, XT5-43NR i XT5-46NR. Dostępne konfiguracje są przeznaczone do pracy w Europie.

## Wybierz rozdzielczość i prędkość

XT5-40NRES ma 203 dpi i drukuje z prędkością do 356 mm/s. XT5-43NRES/BEG ma 300 dpi i osiąga do 254 mm/s. XT5-46NRES/BEG ma 600 dpi i osiąga do 127 mm/s. Maksymalna szerokość nadruku wynosi odpowiednio 104, 105,7 i 105,6 mm.

Wersja 203 dpi służy do standardowych oznaczeń. Rozdzielczość 300 lub 600 dpi pozwala przygotować drobniejszy tekst i grafikę. Prędkość kodowania zależy także od wkładki RFID i danych zadania. Maksymalna prędkość nadruku nie gwarantuje takiej samej prędkości kodowania.

## Kodowanie UHF RFID dla Europy

Pokazane PN mają koder UHF dla pasma 865–868 MHz. Obsługują ISO 18000-6C i EPC Class 1 Gen2. Minimalny odstęp między wkładkami wynosi 16 mm. Nie trzeba dokupować osobnego modułu RFID do tych konfiguracji.

Przed wdrożeniem dobierz wkładkę i wykonaj kalibrację. Do metalu lub opakowań z płynem potrzebujesz odpowiednio dobranej etykiety. Materiały do XT5 są w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam wymiary, gilzę i powierzchnię przedmiotu. Dobierzemy rolkę do XT5 i sprawdzimy kodowanie.

Przygotuj zadanie z poleceniami zapisu RFID. Sam nadruk kodu kreskowego nie zapisuje identyfikatora EPC. Powiąż EPC z danymi w WMS lub ERP. Do odczytu oznaczeń poza drukarką potrzebujesz czytnika UHF.

## Materiał i taśma barwiąca

Drukarka obsługuje materiał o szerokości 25–114 mm i rolki do 203 mm. Standardowy uchwyt przyjmuje gilzy 38,1–76,2 mm. Gilza 25,4 mm wymaga odpowiedniej opcji uchwytu.

Termotransfer wymaga taśmy barwiącej. XT5 obsługuje taśmy do 450 m na gilzie 25,4 mm. Druk termiczny bezpośredni wymaga materiału termoczułego i nie używa taśmy. W obu metodach etykieta RFID musi pasować do kodera.

## Obsługa i łączność

Ekran dotykowy 4,3 cala służy do ustawień i obsługi komunikatów. Obudowa ma składaną pokrywę. Trzy oferowane PN mają zegar RTC, USB, USB Host, Ethernet i RS-232. Nie zawierają fabrycznego Wi-Fi ani Bluetooth.

SLCS, BPL-Z, BPL-E i BPL-D umożliwiają przygotowanie nadruku z systemu nadrzędnego. Przed integracją sprawdź również obsługę poleceń kodowania. Funkcja Printer Twin kopiuje ustawienia i pliki między zgodnymi drukarkami przez pamięć USB.

## Akcesoria i części zamienne

Głowica AE04-00043A-AS pasuje do XT5-40NR 203 dpi. AE04-00043B-AS służy do XT5-43NR 300 dpi. AE04-00043C-AS służy do XT5-46NR 600 dpi. To części zamienne, a nie obowiązkowe dodatki do nowej drukarki.

Dobieraj głowicę do tej samej rozdzielczości. Przed zakupem części podaj numer seryjny urządzenia. Gilotynę, odklejak i nawijak dobierz do wersji RFID. Przed zamówieniem podaj nam PN drukarki, a wskażemy zgodny zestaw.

Do mniejszego stanowiska porównaj [BIXOLON XD5-40tR](/produkt/bixolon-xd5-40tr). W tej klasie przemysłowej sprawdź także [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid) i [TSC MB241TR](/produkt/tsc-mb241tr).`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'bixolon',
    images: ['/images/products/bixolon-xt5-40nr-clean.webp'], imageDescriptions: ['BIXOLON XT5-40NR — drukarka przemysłowa RFID z ekranem dotykowym, widok pod kątem'],
    tags: ['magazyn', 'produkcja', 'logistyka'], priceFrom: 14482.42, availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203, 300 lub 600 dpi', predkoscDruku: 'Do 356 / 254 / 127 mm/s, zależnie od PN', szerokoscDruku: '104 / 105,7 / 105,6 mm', szerokoscEtykiet: '25–114 mm; RFID wymaga doboru wkładki' },
    variants: [
      { partNumber: 'XT5-40NRES', priceFrom: 14482.42, name: 'XT5-40NR, 203 dpi, UHF EU', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość druku': '356 mm/s', 'Szerokość druku': '104 mm' }, availability: 'unavailable' },
      { partNumber: 'XT5-43NRES/BEG', priceFrom: 17504.34, name: 'XT5-43NR, 300 dpi, UHF EU', attributes: { 'Rozdzielczość': '300 dpi', 'Prędkość druku': '254 mm/s', 'Szerokość druku': '105,7 mm' }, availability: 'unavailable' },
      { partNumber: 'XT5-46NRES/BEG', priceFrom: 21319.86, name: 'XT5-46NR, 600 dpi, UHF EU', attributes: { 'Rozdzielczość': '600 dpi', 'Prędkość druku': '127 mm/s', 'Szerokość druku': '105,6 mm' }, availability: 'unavailable' },
    ],
    specifications: [
      { name: 'RFID', value: 'UHF EU 865–868 MHz; ISO 18000-6C / EPC Class 1 Gen2; minimalny pitch 16 mm' },
      { name: 'Rozdzielczość', value: '203, 300 lub 600 dpi, zależnie od PN' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '104 mm (203 dpi); 105,7 mm (300 dpi); 105,6 mm (600 dpi)' },
      { name: 'Prędkość nadruku', value: 'Do 356 / 254 / 127 mm/s dla 203 / 300 / 600 dpi; kodowanie zależy od materiału' },
      { name: 'Ekran', value: 'Dotykowy, kolorowy, 4,3 cala' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet; bez fabrycznego Wi-Fi i Bluetooth w pokazanych PN' },
      { name: 'Zegar RTC', value: 'Tak' },
      { name: 'Materiał', value: 'Szerokość 25–114 mm; rolka do 203 mm; gilza 38,1–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; gilza 25,4 mm' },
      { name: 'Pamięć', value: '512 MB SDRAM i 512 MB Flash' },
    ],
    compatibleAccessories: [], relatedAccessories: headParts.map(a => `bixolon-xt5-glowica-${a.dpi}`),
    applications: ['Druk i kodowanie etykiet produktowych UHF', 'Znakowanie kartonów i wyposażenia', 'Przygotowanie etykiet dla WMS i ERP'],
    faq: [
      { question: 'Czy wszystkie wersje XT5 mają RFID?', answer: 'Nie. Fabryczny koder UHF EU mają XT5-40NRES, XT5-43NRES/BEG i XT5-46NRES/BEG. Zwykła XT5 bez kodera nie zapisuje danych w etykietach RFID.' },
      { question: 'Co różni XT5-40NR, XT5-43NR i XT5-46NR?', answer: 'Rozdzielczość, maksymalna prędkość i szerokość nadruku. Warianty mają odpowiednio 203, 300 i 600 dpi oraz prędkości do 356, 254 i 127 mm/s. Wspólne wyposażenie obejmuje koder UHF EU, ekran dotykowy i połączenia przewodowe.' },
      { question: 'Czy pokazane PN mają Wi-Fi?', answer: 'Nie. Oferowane konfiguracje mają połączenia przewodowe. Łączność bezprzewodowa wymaga osobnego doboru konfiguracji.' },
      { question: 'Czy drukarka RFID może drukować zwykłe etykiety?', answer: 'Tak. Może wykonywać sam nadruk bez kodowania. Przy etykietach RFID zadanie musi dodatkowo zawierać polecenia zapisu danych.' },
    ],
    downloads: [{ name: 'Karta katalogowa XT5-40NR (EN)', type: 'datasheet', url: '/downloads/bixolon-xt5-40nr-karta-en.pdf', size: 'PDF' }, { name: 'Instrukcja XT5-40NR (EN)', type: 'manual', url: '/downloads/bixolon-xt5-40nr-instrukcja-en.pdf', size: 'PDF' }, ...commonDownloads, { name: 'Sterowniki i pliki XT5-40NR', type: 'driver', url: 'https://www.bixolon.com/download_view.php?idx=165', size: 'Online' }],
    relatedProducts: ['bixolon-xd5-40tr', 'zebra-zt411-rfid', 'tsc-mb241tr'], sameAs: 'https://www.bixolon.com/product_view.php?idx=384', createdAt: '2026-10-16',
  },
  {
    id: 'bixolon-xd5-40tr', slug: 'bixolon-xd5-40tr', name: 'BIXOLON XD5-40tR', seoH1: 'BIXOLON XD5-40tR',
    seoTitle: 'BIXOLON XD5-40tR — drukarka RFID UHF 203 dpi',
    seoDescription: 'BIXOLON XD5-40tR: biurkowa drukarka i koder UHF RFID 203 dpi. Druk 108 mm z prędkością 152 mm/s, taśma 300 m, Ethernet, USB i RS-232.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID EU, 203 dpi, do 152 mm/s. Druk do 108 mm. USB, USB Host, RS-232 i Ethernet. Taśmy do 300 m i opcjonalny uchwyt większej rolki.',
    description: `BIXOLON XD5-40tR drukuje etykiety i zapisuje dane w ich układach UHF RFID. To biurkowe urządzenie do stanowiska w magazynie, handlu lub produkcji. Dostępny PN XD5-40tREK ma głowicę 203 dpi i połączenia przewodowe.

## Nadruk i kodowanie na jednym stanowisku

XD5-40tREK drukuje z prędkością do 152 mm/s i szerokością do 108 mm. Obsługuje druk termotransferowy i termiczny bezpośredni. Termotransfer wymaga dobranej taśmy barwiącej. Materiał termoczuły nie wymaga taśmy.

Koder UHF dla Europy pracuje w paśmie 865–868 MHz. Obsługuje ISO 18000-6C i EPC Class 1 Gen2. Minimalny odstęp między wkładkami RFID wynosi 16 mm. Kodowanie może wymagać niższej prędkości niż sam nadruk.

Przed pierwszą pracą wykonaj kalibrację. Po zmianie materiału sprawdź ustawienia ponownie. Gotowe rolki z wkładką UHF zobaczysz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam szerokość etykiety i gilzę. Dobierzemy rolkę do XD5-40tR i położenie wkładki.

## Etykiety, rolki i taśmy

Drukarka obsługuje materiał o szerokości 15–118 mm. Wewnątrz mieści rolkę do 127 mm na gilzie 25,4–38,1 mm. Taśma barwiąca może mieć do 300 m. Dobierz gilzę taśmy 12,7 lub 25,4 mm do używanego nawoju.

Opcjonalny uchwyt LES-400G podaje materiał z rolki do 203 mm umieszczonej za drukarką. Nie jest częścią standardowego zestawu. Większa rolka nadal wymaga etykiety zgodnej z koderem i mechanizmem drukarki.

## Łączność i integracja

Oferowany PN ma USB, USB Host, RS-232 i Ethernet. Nie zawiera fabrycznego Wi-Fi ani Bluetooth. Ekran LCD ułatwia ustawienia i odczyt komunikatów. Zasilacz oraz przewód zasilający są w zestawie.

Emulacje SLCS, BPL-Z i BPL-E służą do przygotowania nadruku. Zadanie RFID musi zawierać polecenia kodowania. Sam plik PDF ani nadruk kodu kreskowego nie zapisuje EPC. Przed integracją z WMS lub ERP sprawdź zgodność poleceń i format identyfikatora.

Do inwentaryzacji radiowej potrzebujesz osobnego czytnika UHF. Drukarka przygotowuje oznaczenia, ale nie zastępuje czytnika magazynowego.

## Rozbudowa i części

LES-400G jest zewnętrznym uchwytem rolki bez napędu. Gilotyna i odklejak wymagają doboru do konkretnej konfiguracji RFID. Nie przecinaj anteny ani układu etykiety. Części zamienne dobieraj według modelu i numeru seryjnego.

Do większych rolek i wyższej wydajności porównaj [BIXOLON XT5-40NR](/produkt/bixolon-xt5-40nr). W klasie biurkowej sprawdź także [Zebra ZD621R](/produkt/zebra-zd621r) i [TSC TH240R](/produkt/tsc-th240r).`,
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
      { name: 'Taśma barwiąca', value: 'Do 300 m; gilza 12,7 lub 25,4 mm; nawój zewnętrzny' },
      { name: 'Zawartość zestawu', value: 'Drukarka z koderem UHF EU, zasilacz i przewód zasilający; etykiety i taśma dobierane osobno' },
    ],
    compatibleAccessories: [], relatedAccessories: ['bixolon-les-400g'], applications: ['Druk i kodowanie etykiet przy stanowisku', 'Znakowanie produktów i wyposażenia', 'Przygotowanie oznaczeń dla WMS i ERP'],
    faq: [
      { question: 'Czy XD5-40tREK ma już RFID?', answer: 'Tak. Pokazany PN zawiera koder UHF EU. Nie trzeba dokupować modułu RFID. Potrzebujesz zgodnych etykiet oraz zadania z poleceniami zapisu danych.' },
      { question: 'Czy większa rolka wymaga osobnego uchwytu?', answer: 'Tak. Rolka wewnętrzna może mieć do 127 mm. Opcjonalny LES-400G obsługuje rolkę zewnętrzną do 203 mm na gilzie 25,4–38,1 mm.' },
      { question: 'Czy ten PN ma Wi-Fi lub Bluetooth?', answer: 'Nie. XD5-40tREK ma USB, USB Host, RS-232 i Ethernet. Połączenie bezprzewodowe wymaga innej konfiguracji.' },
      { question: 'Czym XD5-40tR różni się od XT5-40NR?', answer: 'XD5-40tR jest drukarką biurkową 203 dpi z taśmą do 300 m. Przemysłowa XT5-40NR obsługuje taśmę do 450 m i ma także warianty 300 oraz 600 dpi.' },
    ],
    downloads: [{ name: 'Karta katalogowa XD5-40tR (EN)', type: 'datasheet', url: '/downloads/bixolon-xd5-40tr-karta-en.pdf', size: 'PDF' }, { name: 'Instrukcja XD5-40tR (EN)', type: 'manual', url: '/downloads/bixolon-xd5-40tr-instrukcja-en.pdf', size: 'PDF' }, ...commonDownloads, { name: 'Sterowniki i pliki XD5-40tR', type: 'driver', url: 'https://www.bixolon.com/download_view.php?idx=163', size: 'Online' }],
    relatedProducts: ['bixolon-xt5-40nr', 'zebra-zd621r', 'tsc-th240r'], sameAs: 'https://www.bixolon.com/product_view.php?idx=386', createdAt: '2026-10-16',
  },
]
