import type { Product } from './products'

// Drukarki TSC serii TL/DL 4": TL241 (203 dpi) i TL341 (300 dpi) — termotransfer i druk termiczny, osobne karty od 26.10.2026 —
// oraz DL241 (tylko druk termiczny).
// Modele TL240, TL340 i DL240 (tylko USB) nie mają oznaczenia CE i nie występują w PN na Europę — pominięte.
// Fakty: karta serii TL DL (TSC, 09.05.2024) i instrukcja TL240/DL240 (TSC, wyd. 21.03.2025).
// Ceny i stany z /api/stock z 25.10.2026. Dokumentacja: docs/catalog/tsc-tl-dl-2026-10-25.md

const downloadsTlDl = [
  { name: 'Karta katalogowa TSC TL DL (EN)', type: 'datasheet' as const, url: '/downloads/tsc/tsc-tl-dl-karta-katalogowa-en.pdf', size: '368 KB' },
  { name: 'Instrukcja TSC TL240/DL240 (EN)', type: 'manual' as const, url: '/downloads/tsc/tsc-tl240-dl240-instrukcja-en.pdf', size: '3,5 MB' },
  { name: 'Sterowniki i wsparcie TSC', type: 'driver' as const, url: 'https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers', size: 'Online' },
]

// Wspólne wiersze specyfikacji TL241 i TL341 — karta katalogowa podaje dla obu modeli jedną kolumnę poza rozdzielczością,
// prędkością, szerokością druku i długością etykiety.
const specyfikacjaTl = (model: { rozdzielczosc: string; predkosc: string; szerokosc: string; dlugosc: string }) => [
  { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka etykiet' },
  { name: 'Metoda druku', value: 'Termotransferowa i termiczna bezpośrednia' },
  { name: 'Rozdzielczość', value: model.rozdzielczosc },
  { name: 'Prędkość druku', value: model.predkosc },
  { name: 'Szerokość druku', value: model.szerokosc },
  { name: 'Długość etykiety', value: model.dlugosc },
  { name: 'Taśma barwiąca', value: 'Rolka 300 m (średnica do 67 mm, gilza 1") lub 110 m (średnica do 40 mm, gilza 0,5"), farba na zewnątrz; szerokość 40–110 mm' },
  { name: 'Szerokość materiału', value: '19–118 mm' },
  { name: 'Grubość materiału', value: '0,06–0,19 mm' },
  { name: 'Maks. średnica rolki', value: '127 mm' },
  { name: 'Gilza materiału', value: '25,4 mm (1")' },
  { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka (nawinięcie na zewnątrz)' },
  { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika, czujnik końca taśmy, czujnik otwarcia głowicy' },
  { name: 'Panel obsługi', value: 'Włącznik, przycisk pauzy i podawania, dioda LED w trzech kolorach (zielony, bursztynowy, czerwony)' },
  { name: 'Interfejsy', value: 'USB 2.0, wbudowany Ethernet 10/100 Mb/s' },
  { name: 'Procesor', value: '32-bitowy RISC' },
  { name: 'Pamięć', value: '128 MB Flash, 64 MB DRAM' },
  { name: 'Zegar czasu rzeczywistego', value: 'Brak' },
  { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
  { name: 'Czcionki', value: '8 czcionek bitmapowych; silnik TrueType Monotype z czcionką skalowalną CG Triumvirate Bold Condensed' },
  { name: 'Kody kreskowe 1D', value: 'Code 39, Code 93, Code 128UCC, Code 128 (podzbiory A, B, C), Codabar, Interleaved 2 of 5, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, dodatki 2 i 5 cyfr EAN i UPC, MSI, PLESSEY, POSTNET, China Post, ITF14, EAN14, Code 11, TELEPEN, TELEPENN, PLANET, Code 49, Deutsche Post Identcode, Deutsche Post Leitcode, LOGMARS' },
  { name: 'Kody kreskowe 2D', value: 'TLC39, CODABLOCK F, PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar (RSS)' },
  { name: 'Obrót czcionek i kodów', value: '0°, 90°, 180°, 270°' },
  { name: 'Zarządzanie', value: 'TSC Console (zdalne monitorowanie i zarządzanie), autodiagnostyka głowicy TPH Care' },
  { name: 'Obudowa', value: 'Tworzywo ABS oraz ABS + PC' },
  { name: 'Wymiary (szer. × wys. × gł.)', value: '211 × 164 × 279 mm' },
  { name: 'Waga', value: '2,0 kg' },
  { name: 'Zasilanie', value: 'Zewnętrzny uniwersalny zasilacz impulsowy; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 2,0 A, 48 W' },
  { name: 'Temperatura pracy', value: '0–40°C, wilgotność 10–85% bez kondensacji' },
  { name: 'Temperatura przechowywania', value: '−20–60°C, wilgotność 5–90% bez kondensacji' },
  { name: 'Certyfikaty', value: 'CB, FCC klasa A, IC klasa A, NOM, cTUVus, CE klasa A, UKCA klasa A, EAC, BIS, ISC, KC, Energy Star 3.2' },
  { name: 'Środowisko', value: 'Zgodność z RoHS, REACH, WEEE i China RoHS; opakowanie w 100% nadaje się do recyklingu' },
  { name: 'Opcje montowane przez dealera', value: 'Gilotyna (cięcie pełne)' },
  { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz, trzpień etykiet z 2 zaczepami, 2 trzpienie taśmy 1", 2 trzpienie taśmy 0,5", papierowe gilzy taśmy 1" i 0,5"' },
  { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
]

const tl241: Product = {
  id: 'tsc-tl241',
  slug: 'tsc-tl241',
  name: 'TSC TL241',
  shortDescription: 'TSC TL241 — biurkowa drukarka etykiet 4" do druku termotransferowego i termicznego: 203 dpi, do 152 mm/s, USB i Ethernet, język TSPL-EZD zgodny z ZPL i EPL.',
  seoTitle: 'TSC TL241 — termotransferowa drukarka etykiet 4" 203 dpi',
  seoDescription: 'Drukarka etykiet TSC TL241: termotransfer i druk termiczny 4", 203 dpi, 152 mm/s, szerokość druku 108 mm, USB 2.0 i Ethernet, okienko kontroli materiału. Drukarka termotransferowa TSC TL241, drukarka biurkowa TL241, TL241 TSC, seria TSC TL240. PN: TL241-A001-0002.',
  description: `TSC TL241 to biurkowa drukarka etykiet 4" serii TL, przeznaczona do codziennego druku. Pracuje z taśmą barwiącą w trybie termotransferowym albo bez taśmy, na materiale termicznym. Służy m.in. do etykiet półkowych, wysyłkowych, etykiet przyjęcia towaru i oznaczeń produktów spożywczych.

Głowica 203 dpi (8 punktów na milimetr) drukuje z prędkością do 152 mm/s, a szerokość wydruku sięga 108 mm. Długość jednej etykiety może wynosić od 5 do 25 400 mm.

Oprogramowanie drukarki samo rozpoznaje język przesłanych danych. TSPL-EZD obsługuje polecenia ZPL, ZPL II, EPL oraz DPL, dlatego istniejące szablony etykiet nie wymagają zmian.

TL241 ma USB 2.0, port Ethernet 10/100 Mb/s, 128 MB pamięci Flash i 64 MB DRAM. Funkcja TPH Care w czasie druku kontroluje głowicę i wykrywa uszkodzone punkty. Program TSC Console służy do zdalnego monitorowania drukarek i zarządzania nimi. Głowicę wymienia się bez narzędzi, a okienko w pokrywie pozwala sprawdzić zapas materiału. Jako opcję dealer montuje gilotynę do pełnego cięcia.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 911.49,
  images: ['/images/products/TL241-A001-0002.png', '/images/products/TL241-A001-0002-2.png', '/images/products/TL241-A001-0002-3.png'],
  imageDescriptions: [
    'TSC TL241 — czarna biurkowa drukarka etykiet 4", widok z przodu pod kątem: okienko kontroli materiału w pokrywie i przycisk podawania z diodą',
    'TSC TL241 — widok z przodu z wydrukowaną etykietą z kodem kreskowym w szczelinie wydruku',
    'TSC TL241 — otwarta pokrywa: mechanizm głowicy z założoną taśmą barwiącą i rolka etykiet w komorze materiału',
  ],
  tags: ['retail', 'logistyka'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny',
    rozdzielczosc: '203 dpi',
    predkoscDruku: 'Do 152 mm/s',
    szerokoscDruku: 'Do 108 mm',
    szerokoscEtykiet: '19–118 mm',
  },
  specifications: specyfikacjaTl({
    rozdzielczosc: '203 dpi (8 punktów/mm)',
    predkosc: 'Do 152 mm/s',
    szerokosc: 'Do 108 mm',
    dlugosc: '5–25 400 mm',
  }),
  applications: [
    'Etykiety półkowe i inwentaryzacja w handlu',
    'Etykiety wysyłkowe i etykiety przyjęcia towaru',
    'Etykiety produktowe w branży spożywczej',
    'Śledzenie partii produktów (track and trace)',
  ],
  variants: [
    { partNumber: 'TL241-A001-0002', name: 'TL241, 203 dpi, USB + Ethernet', attributes: {}, priceFrom: 911.49, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Czym TSC TL241 różni się od TL341?',
      answer: 'Różnica dotyczy głowicy i parametrów wydruku. TL241 ma głowicę 203 dpi, drukuje do 152 mm/s na szerokości 108 mm i przyjmuje etykiety o długości do 25 400 mm. [TSC TL341](/produkt/tsc-tl341) ma głowicę 300 dpi, prędkość do 102 mm/s, szerokość druku 105,6 mm i etykiety do 11 430 mm. Obudowa, interfejsy, pamięć i obsługiwane materiały są takie same.',
    },
    {
      question: 'Jakie taśmy barwiące przyjmuje TSC TL241?',
      answer: 'TL241 pracuje z taśmami nawiniętymi farbą na zewnątrz, szerokimi na 40–110 mm. Dłuższa taśma ma 300 m długości, rolkę o średnicy maks. 67 mm i gilzę 1". Krótsza ma 110 m, rolkę maks. 40 mm i gilzę 0,5". Trzpienie i papierowe gilzy do obu rodzajów taśmy są dołączone do drukarki.',
    },
    {
      question: 'Czy do TL241 można zamontować obcinarkę?',
      answer: 'Tak. Do TL241 dealer może zamontować gilotynę, która odcina etykietę w całości po wydruku. Inne opcje fabryczne i opcje montowane przez użytkownika nie są dostępne.',
    },
    {
      question: 'Czy TSC TL241 drukuje szablony przygotowane w ZPL?',
      answer: 'Tak. TSPL-EZD rozumie dane w językach ZPL II, ZPL, DPL i EPL, a drukarka automatycznie przełącza się na właściwy język. Używane szablony najlepiej sprawdzić na wydrukach testowych.',
    },
    {
      question: 'Jak podłączyć TL241 do sieci i zarządzać nim zdalnie?',
      answer: 'TL241 ma wbudowany port Ethernet 10/100 Mb/s oraz USB 2.0. Oferowana wersja nie ma Wi-Fi ani Bluetooth. W programie TSC Console drukarkę dodaje się po adresie IP. Program pokazuje stan urządzenia, zmienia ustawienia i aktualizuje firmware. Moduł TPH Care w tym programie pokazuje wadliwe punkty głowicy.',
    },
    {
      question: 'Czy głowicę w TSC TL241 można wymienić samodzielnie?',
      answer: 'Tak. Konstrukcja serii TL pozwala wyjąć i założyć głowicę termiczną oraz wałek dociskowy bez narzędzi. Przed otwarciem pokrywy w celu naprawy należy odłączyć zasilanie. Zamawiając głowicę, należy podać model drukarki: TL241 pracuje z głowicą 203 dpi.',
    },
    {
      question: 'Dlaczego w ofercie nie ma modelu TSC TL240?',
      answer: 'TL240 to odmiana bez portu Ethernet, z 16 MB pamięci Flash. Jej certyfikaty nie obejmują znaku CE. Sprzedajemy TL241, który ma dodatkowo Ethernet, 128 MB pamięci Flash i znak CE klasy A.',
    },
    {
      question: 'Jakie są alternatywy dla TSC TL241?',
      answer: 'Wersją 300 dpi tej serii jest [TSC TL341](/produkt/tsc-tl341), a do samego druku termicznego służy [TSC DL241](/produkt/tsc-dl241). Inne biurkowe drukarki termotransferowe 4" to [Zebra ZD421t](/produkt/zebra-zd421t), [Honeywell PC45t](/produkt/honeywell-pc45t), [Honeywell PC42E-T](/produkt/honeywell-pc42e-t) i [Brother TD-4T](/produkt/brother-td-4t).',
    },
  ],
  downloads: downloadsTlDl,
  relatedProducts: ['tsc-tl341', 'tsc-dl241', 'zebra-zd421t', 'honeywell-pc45t', 'honeywell-pc42e-t', 'zebra-zd230t', 'brother-td-4t', 'citizen-cl-e321'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers',
}

const tl341: Product = {
  id: 'tsc-tl341',
  slug: 'tsc-tl341',
  name: 'TSC TL341',
  shortDescription: 'TSC TL341 — drukarka biurkowa 4" z głowicą 300 dpi: termotransfer lub druk termiczny, prędkość do 102 mm/s, zadruk do 105,6 mm, porty Ethernet i USB 2.0.',
  seoTitle: 'TSC TL341 — drukarka etykiet 4" 300 dpi, termotransfer',
  seoDescription: 'TSC TL341, drukarka etykiet 300 dpi do termotransferu i druku termicznego 4": 102 mm/s, zadruk 105,6 mm, Ethernet 10/100 i USB 2.0, emulacja ZPL. Drukarka termotransferowa TSC TL341, drukarka 300 dpi TL341, TL341 TSC, seria TSC TL. PN: TL341-A001-0002.',
  description: `TSC TL341 jest 4-calową drukarką biurkową serii TL z głowicą o rozdzielczości 300 dpi (12 punktów/mm). Drukuje termotransferowo przez taśmę barwiącą lub termicznie bezpośrednio, na materiale termicznym. Typowe obszary pracy to handel (oznaczenia półek, inwentaryzacja), transport i logistyka (etykiety nadawcze, oznaczenia dostaw przyjmowanych do magazynu) oraz branża spożywcza (etykiety produktów, śledzenie partii).

Maksymalna prędkość TL341 to 102 mm/s, a pole zadruku ma do 105,6 mm szerokości. Model przyjmuje etykiety długie na 5–11 430 mm i materiał szeroki na 19–118 mm.

Firmware wykrywa język poleceń i sam przełącza emulację. Dane w formatach EPL, DPL, ZPL lub ZPL II drukarka przetwarza w języku TSPL-EZD, więc dotychczasowe projekty etykiet można drukować bez przeróbek.

Do komputera podłącza się ją przewodem USB 2.0, do sieci firmowej — przez wewnętrzny Ethernet 10/100 Mb/s. Do dyspozycji jest 128 MB Flash i 64 MB DRAM. Autodiagnostyka TPH Care sprawdza stan głowicy, a TSC Console zbiera te dane i pozwala zdalnie nadzorować wiele drukarek. Głowicę i wałek dociskowy wyjmuje się bez narzędzi. Okienko w obudowie pokazuje, ile materiału zostało. Dealer może doposażyć drukarkę w gilotynę z pełnym cięciem.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1961.33,
  images: ['/images/products/TL341-A001-0002.png', '/images/products/TL341-A001-0002-2.png', '/images/products/TL341-A001-0002-3.png'],
  imageDescriptions: [
    'TSC TL341 — czarna drukarka etykiet 4" z głowicą 300 dpi, ujęcie z przodu pod kątem: okienko w pokrywie do kontroli zapasu etykiet i przycisk podawania z diodą stanu',
    'TSC TL341 — przód drukarki z etykietą z kodem kreskowym wychodzącą ze szczeliny wydruku',
    'TSC TL341 — podniesiona pokrywa: zespół głowicy z taśmą barwiącą i rolka etykiet założona w komorze materiału',
  ],
  tags: ['retail', 'logistyka'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny',
    rozdzielczosc: '300 dpi',
    predkoscDruku: 'Do 102 mm/s',
    szerokoscDruku: 'Do 105,6 mm',
    szerokoscEtykiet: '19–118 mm',
  },
  specifications: specyfikacjaTl({
    rozdzielczosc: '300 dpi (12 punktów/mm)',
    predkosc: 'Do 102 mm/s',
    szerokosc: 'Do 105,6 mm',
    dlugosc: '5–11 430 mm',
  }),
  applications: [
    'Oznaczanie półek i inwentaryzacja w sklepach',
    'Etykiety nadawcze i etykiety przy przyjęciu dostaw',
    'Etykiety na produkty spożywcze',
    'Identyfikowalność partii żywności (track and trace)',
  ],
  variants: [
    { partNumber: 'TL341-A001-0002', name: 'TL341, 300 dpi, USB + Ethernet', attributes: {}, priceFrom: 1961.33, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Czym TSC TL341 różni się od TL241?',
      answer: 'TL341 ma głowicę o rozdzielczości 300 dpi (12 punktów/mm). Maksymalna prędkość druku wynosi 102 mm/s, szerokość zadruku 105,6 mm, a najdłuższa etykieta 11 430 mm. [TSC TL241](/produkt/tsc-tl241) ma głowicę 203 dpi, osiąga 152 mm/s, zadrukowuje pas 108 mm i obsługuje etykiety do 25 400 mm. Wymiary, masa, porty, pamięć i zakres materiałów obu modeli są wspólne.',
    },
    {
      question: 'Jaką taśmę barwiącą założyć do TSC TL341?',
      answer: 'Drukarka przyjmuje taśmy szerokości od 40 do 110 mm z warstwą farby od zewnątrz. Możliwe są dwa formaty rolek: 300 m na gilzie 1" (średnica zewnętrzna do 67 mm) oraz 110 m na gilzie 0,5" (średnica do 40 mm). W kartonie są po dwa trzpienie dla każdego rozmiaru gilzy i po jednej pustej gilzie papierowej.',
    },
    {
      question: 'Jakie etykiety można drukować na TSC TL341?',
      answer: 'TL341 przyjmuje materiał szeroki na 19–118 mm, o grubości 0,06–0,19 mm, nawinięty stroną zadruku na zewnątrz na gilzę 25,4 mm. Rolka może mieć do 127 mm średnicy zewnętrznej. Obsługiwane są etykiety wycinane, materiał ciągły, papier z czarnym znacznikiem i składanka. Długość pojedynczej etykiety: 5–11 430 mm.',
    },
    {
      question: 'Czy TL341 obsługuje polecenia ZPL i EPL?',
      answer: 'Tak. Język TSPL-EZD emuluje ZPL, ZPL II, EPL i DPL. Firmware sam wykrywa, w jakim języku przyszło zadanie druku, więc etykiety zaprojektowane dla innych drukarek nie wymagają przeróbki szablonu.',
    },
    {
      question: 'Jakie złącza ma TSC TL341?',
      answer: 'Oferowany model TL341-A001-0002 ma USB 2.0 i wewnętrzny port Ethernet 10/100 Mb/s. TL341 w tej wersji nie ma łączności Wi-Fi ani Bluetooth. Po podłączeniu do sieci drukarką zarządza program TSC Console: pokazuje jej stan, pozwala zmienić konfigurację i wgrać nowy firmware.',
    },
    {
      question: 'Jak TL341 kontroluje stan głowicy?',
      answer: 'Autodiagnostyka TPH Care w trakcie druku skanuje głowicę 300 dpi i wykrywa wadliwe punkty. W TSC Console można ustawić próg ostrzeżenia, wydrukować stronę testową głowicy i włączyć automatyczną ochronę TPH Care (domyślnie wyłączoną). Głowicę i wałek dociskowy wymienia się bez narzędzi; przed czyszczeniem głowicy drukarkę należy wyłączyć.',
    },
    {
      question: 'Czy do TSC TL341 jest dostępna gilotyna?',
      answer: 'Tak, jako opcja montowana przez dealera. Gilotyna przecina etykietę na całej szerokości (pełne cięcie). Opcji fabrycznych ani akcesoriów instalowanych przez użytkownika dla tego modelu nie przewidziano.',
    },
    {
      question: 'Dlaczego nie sprzedajemy modelu TSC TL340?',
      answer: 'TL340 to wariant 300 dpi bez portu Ethernet, z pamięcią Flash 16 MB, a lista jego certyfikatów nie zawiera CE. TL341 ma Ethernet, 128 MB Flash i oznaczenie CE klasy A, dlatego oferujemy tylko ten model. Model przeznaczony wyłącznie do druku termicznego to [TSC DL241](/produkt/tsc-dl241).',
    },
  ],
  downloads: downloadsTlDl,
  relatedProducts: ['tsc-tl241', 'tsc-dl241', 'zebra-zd421t', 'honeywell-pc45t', 'honeywell-pc42e-t', 'zebra-zd230t', 'brother-td-4t', 'citizen-cl-e321'],
  createdAt: '2026-10-26',
  sameAs: 'https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers',
}

const dl241: Product = {
  id: 'tsc-dl241',
  slug: 'tsc-dl241',
  name: 'TSC DL241',
  shortDescription: 'TSC DL241 — termiczna drukarka etykiet 4" bez taśmy barwiącej: 203 dpi, do 152 mm/s, porty Ethernet i USB 2.0, masa 1,1 kg.',
  seoTitle: 'TSC DL241 — termiczna drukarka etykiet 4" z Ethernetem',
  seoDescription: 'Drukarka termiczna TSC DL241 do etykiet 4" bez taśmy: 203 dpi, 152 mm/s, Ethernet i USB 2.0, emulacja EPL, ZPL i DPL. Drukarka etykiet TSC DL241, termiczna drukarka biurkowa DL241, DL241 TSC, seria TSC DL240. PN: DL241-A001-0002.',
  description: `TSC DL241 to 4-calowa drukarka biurkowa do druku termicznego bezpośredniego. Nie używa taśmy barwiącej i drukuje na materiałach termicznych. Typowe zadania to etykiety wysyłkowe, oznaczenia przy przyjęciu dostaw, etykiety na półki sklepowe, paragony oraz etykiety do śledzenia żywności.

Głowica 203 dpi pracuje z prędkością do 152 mm/s. Maksymalna szerokość wydruku wynosi 108 mm, a szerokość materiału 40–112 mm. Pojedyncza etykieta może mieć od 15 mm do 25,4 m długości.

DL241 łączy się z komputerem przez USB 2.0, a z siecią firmową przez wbudowany port Ethernet. W sieci drukarkę nadzoruje i konfiguruje program TSC Console. Autodiagnostyka TPH Care w trakcie pracy skanuje głowicę i wskazuje wadliwe elementy grzejne.

Do obsługi służy jeden przycisk i trójkolorowa dioda stanu. Głowicę można wyjąć bez użycia narzędzi. Przez okienko w obudowie widać, ile etykiet zostało na rolce. Język TSPL-EZD rozpoznaje polecenia EPL, ZPL, ZPL II i DPL. Opakowanie drukarki w całości nadaje się do recyklingu.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 1497.57,
  images: ['/images/products/DL241-A001-0002.png', '/images/products/DL241-A001-0002-2.png', '/images/products/DL241-A001-0002-3.png'],
  imageDescriptions: [
    'TSC DL241 — czarna termiczna drukarka etykiet 4", widok z przodu pod kątem: logo TSC, przycisk z diodą w pokrywie i zielona dźwignia otwierania pokrywy',
    'TSC DL241 — widok z przodu z etykietą z kodem kreskowym wysuwaną ze szczeliny wydruku',
    'TSC DL241 — otwarta pokrywa: rolka etykiet termicznych na trzpieniu i wysunięta taśma etykiet',
  ],
  tags: ['logistyka', 'retail'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi',
    predkoscDruku: 'Do 152 mm/s',
    szerokoscDruku: 'Do 108 mm',
    szerokoscEtykiet: '40–112 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka termiczna' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 152 mm/s' },
    { name: 'Szerokość druku', value: 'Do 108 mm' },
    { name: 'Długość etykiety', value: '15–25 400 mm' },
    { name: 'Szerokość materiału', value: '40–112 mm' },
    { name: 'Grubość materiału', value: '0,06–0,20 mm' },
    { name: 'Maks. średnica rolki', value: '127 mm' },
    { name: 'Gilza materiału', value: '25,4 mm (1")' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, składanka (nawinięcie na zewnątrz)' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika, czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Włącznik, przycisk pauzy i podawania, dioda LED w trzech kolorach (zielony, bursztynowy, czerwony)' },
    { name: 'Interfejsy', value: 'USB 2.0, wbudowany Ethernet 10/100 Mb/s' },
    { name: 'Procesor', value: '32-bitowy RISC' },
    { name: 'Pamięć', value: '128 MB Flash, 64 MB DRAM' },
    { name: 'Zegar czasu rzeczywistego', value: 'Brak' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Czcionki', value: '8 czcionek bitmapowych; silnik TrueType Monotype z czcionką skalowalną CG Triumvirate Bold Condensed' },
    { name: 'Kody kreskowe 1D', value: 'Code 39, Code 93, Code 128UCC, Code 128 (podzbiory A, B, C), Codabar, Interleaved 2 of 5, EAN-8, EAN-13, EAN-128, UPC-A, UPC-E, dodatki 2 i 5 cyfr EAN i UPC, MSI, PLESSEY, POSTNET, China Post, ITF14, EAN14, Code 11, TELEPEN, TELEPENN, PLANET, Code 49, Deutsche Post Identcode, Deutsche Post Leitcode, LOGMARS' },
    { name: 'Kody kreskowe 2D', value: 'TLC39, CODABLOCK F, PDF417, MaxiCode, DataMatrix, QR Code, Aztec, Micro PDF417, GS1 DataBar (RSS)' },
    { name: 'Obrót czcionek i kodów', value: '0°, 90°, 180°, 270°' },
    { name: 'Zarządzanie', value: 'TSC Console (zdalne monitorowanie i zarządzanie), autodiagnostyka głowicy TPH Care' },
    { name: 'Obudowa', value: 'Tworzywo ABS oraz ABS + PC' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '181 × 162 × 223 mm' },
    { name: 'Waga', value: '1,1 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny uniwersalny zasilacz impulsowy; wejście 100–240 V AC, 2,0 A, 50–60 Hz; wyjście 24 V DC, 2,0 A, 48 W' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 10–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−20–60°C, wilgotność 5–90% bez kondensacji' },
    { name: 'Certyfikaty', value: 'CB, FCC klasa A, IC klasa A, NOM, cTUVus, CE klasa A, UKCA klasa A, EAC, Energy Star 3.2, BIS, ISC, KC' },
    { name: 'Środowisko', value: 'Zgodność z RoHS, REACH, WEEE i China RoHS; opakowanie w 100% nadaje się do recyklingu' },
    { name: 'Opcje', value: 'Brak opcji fabrycznych, montowanych przez dealera i montowanych przez użytkownika' },
    { name: 'W zestawie', value: 'Skrócona instrukcja, przewód USB, przewód zasilający, zewnętrzny zasilacz, trzpień etykiet z 2 zaczepami' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety wysyłkowe',
    'Etykiety przyjęcia dostaw',
    'Etykiety półkowe i paragony w handlu',
    'Śledzenie produktów spożywczych (track and trace)',
  ],
  variants: [
    { partNumber: 'DL241-A001-0002', name: 'DL241, 203 dpi, USB + Ethernet', attributes: {}, priceFrom: 1497.57, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Czym TSC DL241 różni się od TL241?',
      answer: 'DL241 drukuje tylko termicznie, bez taśmy barwiącej, więc nie ma mechanizmu taśmy ani czujnika jej końca. Jest mniejszy (181 × 162 × 223 mm) i lżejszy (1,1 kg). Przyjmuje materiał o szerokości 40–112 mm. [TSC TL241](/produkt/tsc-tl241) i [TSC TL341](/produkt/tsc-tl341) drukują również termotransferowo, a TL341 ma głowicę 300 dpi. Do obu modeli dealer montuje gilotynę.',
    },
    {
      question: 'Jakie etykiety przyjmuje TSC DL241?',
      answer: 'Materiał termiczny o szerokości 40–112 mm i grubości 0,06–0,20 mm, nawinięty na zewnątrz na gilzę 1 cala, w rolce o średnicy do 127 mm. Obsługiwane rodzaje to materiał ciągły, etykiety wycinane, materiał z czarnym znacznikiem i składanka. Etykieta może mieć 15–25 400 mm długości.',
    },
    {
      question: 'Czy DL241 ma obcinarkę lub odklejak?',
      answer: 'Nie. Dla DL241 nie ma opcji fabrycznych ani opcji montowanych przez dealera lub użytkownika. Gilotyna jest dostępna tylko dla drukarek termotransferowych serii TL.',
    },
    {
      question: 'Czy TSC DL241 obsługuje język ZPL?',
      answer: 'Tak. TSPL-EZD jest zgodny z EPL, ZPL, ZPL II i DPL. Drukarka sama wykrywa, w którym z tych języków przyszły dane, i drukuje bez zmiany ustawień.',
    },
    {
      question: 'Jak zarządzać drukarką DL241 w sieci?',
      answer: 'DL241 w oferowanej wersji ma port Ethernet 10/100 Mb/s i USB 2.0. Nie ma Wi-Fi ani Bluetooth. Po dodaniu drukarki po adresie IP w programie TSC Console można zmieniać prędkość i zaczernienie, wykonać kalibrację, wgrywać czcionki i aktualizować firmware.',
    },
    {
      question: 'Co sprawdza funkcja TPH Care w DL241?',
      answer: 'TPH Care podczas druku skanuje głowicę termiczną i wykrywa uszkodzone punkty grzejne. W programie TSC Console można ustawić przypomnienie po przekroczeniu wybranej liczby wadliwych punktów i wydrukować stronę testową głowicy. Funkcja ogranicza przestoje, liczbę wadliwych etykiet i ryzyko nieczytelnych kodów kreskowych.',
    },
    {
      question: 'Dlaczego w ofercie nie ma modelu TSC DL240?',
      answer: 'Model DL240 nie ma portu Ethernet i ma 16 MB pamięci Flash. Znak CE nie występuje na liście jego certyfikatów. Oferowany DL241 ma port Ethernet, 8 razy więcej pamięci Flash (128 MB) i znak CE klasy A.',
    },
    {
      question: 'Jakie są alternatywy dla TSC DL241?',
      answer: 'Inne biurkowe drukarki termiczne 4" to [Zebra ZD421d](/produkt/zebra-zd421d), [Zebra ZD230d](/produkt/zebra-zd230d), [Honeywell PC45d](/produkt/honeywell-pc45d) i [Brother TD-4D](/produkt/brother-td-4d).',
    },
  ],
  downloads: downloadsTlDl,
  relatedProducts: ['tsc-tl241', 'tsc-tl341', 'zebra-zd421d', 'zebra-zd230d', 'zebra-zd220d', 'honeywell-pc45d', 'brother-td-4d', 'citizen-cl-e300'],
  createdAt: '2026-10-25',
  sameAs: 'https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers',
}

// Drukarki w jednej liście: products.ts dołącza ją do katalogu i rozdziela do podkategorii według `subcategoryIds`.
export const tscTlDlProducts: Product[] = [tl241, tl341, dl241]
