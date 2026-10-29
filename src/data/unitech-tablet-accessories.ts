import type { Product } from './products'

// Akcesoria do tabletów Unitech RT112, RT112 Windows i TB170 Plus (29.10.2026).
// Karty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Zgodność wg katalogów akcesoriów RT112 i RT112 Windows, skróconych instrukcji akcesoriów oraz instrukcji TB170 Plus.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U4.md

const RT112 = 'unitech-rt112'
const RT112_WINDOWS = 'unitech-rt112-windows'
const TB170_PLUS = 'unitech-tb170-plus'
const TABLETY_RT112 = [RT112, RT112_WINDOWS]
const TABLETY_WSZYSTKIE = [RT112, RT112_WINDOWS, TB170_PLUS]
const TAGI: Product['tags'] = ['magazyn', 'logistyka', 'produkcja']

const KATALOG_RT112 = { name: 'Katalog akcesoriów Unitech RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-akcesoria-en.pdf', size: '774 KB' }
const KATALOG_RT112_WINDOWS = { name: 'Katalog akcesoriów Unitech RT112 Windows (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-windows-akcesoria-en.pdf', size: '1,0 MB' }
const KATALOGI_RT112 = [KATALOG_RT112, KATALOG_RT112_WINDOWS]
const INSTRUKCJA_TB170 = { name: 'Instrukcja obsługi Unitech TB170 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-tb170-plus-instrukcja-en.pdf', size: '1,6 MB' }
const QSG_STACJA_BIURKOWA = { name: 'Skrócona instrukcja stacji biurkowej RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-stacja-biurkowa-skrocona-instrukcja-en.pdf', size: '828 KB' }
const QSG_UCHWYT_SAMOCHODOWY = { name: 'Skrócona instrukcja uchwytów samochodowych RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-uchwyt-samochodowy-skrocona-instrukcja-en.pdf', size: '939 KB' }
const QSG_PLYTA_VESA = { name: 'Skrócona instrukcja płyty VESA (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-tablet-plyta-vesa-skrocona-instrukcja-en.pdf', size: '609 KB' }
const QSG_UCHWYT_POS = { name: 'Skrócona instrukcja uchwytu POS (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-tablet-uchwyt-pos-skrocona-instrukcja-en.pdf', size: '760 KB' }
const QSG_PASEK_NA_DLON = { name: 'Skrócona instrukcja obrotowego paska na dłoń RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-pasek-na-dlon-skrocona-instrukcja-en.pdf', size: '739 KB' }
const QSG_PASEK_NA_RAMIE = { name: 'Skrócona instrukcja paska na ramię RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-pasek-na-ramie-skrocona-instrukcja-en.pdf', size: '739 KB' }
const QSG_RYSIK = { name: 'Skrócona instrukcja rysika z linką RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-rysik-skrocona-instrukcja-en.pdf', size: '587 KB' }

const PRZEWOD_EU = `**Wymagane — sprzedawane osobno**

- [Przewód sieciowy EU Unitech, IEC C5, 1,8 m (1550-905940G)](/produkt/unitech-przewod-sieciowy-eu-c5)

`

// ---------------------------------------------------------------------------
// RT112 i RT112 Windows
// ---------------------------------------------------------------------------

const bateriaRt112: Product = {
  id: 'unitech-rt112-bateria',
  slug: 'unitech-rt112-bateria',
  name: 'Bateria Unitech RT112 i RT112 Windows, 8800 mAh (1400-900077G)',
  seoH1: 'Bateria Unitech RT112 i RT112 Windows, 8800 mAh',
  shortDescription: 'Bateria Unitech 1400-900077G o pojemności 8800 mAh do tabletów RT112 i RT112 Windows: zapasowa lub zamienna.',
  seoTitle: 'Bateria Unitech 1400-900077G 8800 mAh do RT112 i RT112 Windows',
  seoDescription: 'Bateria 8800 mAh Unitech 1400-900077G do tabletów przemysłowych Unitech RT112 z Androidem i RT112 Windows. Zapasowa bateria do tabletu Unitech RT112. PN: 1400-900077G.',
  description: `Bateria 1400-900077G ma pojemność 8800 mAh i zastępuje fabryczną baterię tabletów z rodziny RT112, zarówno z Androidem, jak i z Windows.

Przy wymianie przesuwa się w górę cztery zatrzaski pokrywy, zdejmuje pokrywę i przytrzymuje zatrzask baterii u dołu w pozycji otwartej, a baterię wyjmuje się za pasek. Nowa bateria wchodzi do gniazda z kliknięciem; na koniec zakłada się pokrywę i blokuje cztery zatrzaski. Pełne ładowanie w tablecie trwa do 4 godzin.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 362.69,
  images: ['/images/products/1400-900077G.png'],
  imageDescriptions: ['Bateria Unitech 1400-900077G 8800 mAh — czarna bateria z etykietą znamionową i oznaczeniami CE'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900077G' },
    { name: 'Typ', value: 'Bateria wymienna' },
    { name: 'Pojemność', value: '8800 mAh' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Zapasowa bateria do pracy na wielu zmianach'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-stacja-biurkowa', 'unitech-rp300-zasilacz-45w'],
  downloads: KATALOGI_RT112,
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const szkloRt112: Product = {
  id: 'unitech-rt112-szklo-ochronne',
  slug: 'unitech-rt112-szklo-ochronne',
  name: 'Szkło ochronne 9H Unitech RT112 i RT112 Windows, 10 szt. (5400-900060G)',
  seoH1: 'Szkło ochronne 9H Unitech RT112 i RT112 Windows, 10 szt.',
  shortDescription: 'Szkło ochronne 9H Unitech 5400-900060G w opakowaniu 10 sztuk do ekranu 10,1″ tabletów RT112 i RT112 Windows.',
  seoTitle: 'Szkło ochronne 9H Unitech 5400-900060G, 10 szt., do RT112 i RT112 Windows',
  seoDescription: 'Szkło ochronne 9H Unitech 5400-900060G w opakowaniu 10 sztuk, do ekranu 10,1″ w RT112 i jego wersji Windows. Szkło do tabletu Unitech RT112, osłona ekranu RT112. PN: 5400-900060G.',
  description: `Opakowanie 5400-900060G zawiera 10 sztuk szkła ochronnego 9H do ekranu 10,1″.

Tablet RT112 Windows jest dostarczany z naklejoną osłoną ekranu, więc szkło służy tam do jej wymiany. Przy RT112 z Androidem osłona jest akcesorium opcjonalnym. Jedna pozycja w koszyku to komplet dziesięciu szyb dla floty tabletów.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 980.27,
  images: ['/images/products/5400-900060G.png', '/images/products/5400-900060G-2.png'],
  imageDescriptions: [
    'Szkło ochronne 9H Unitech 5400-900060G — przezroczysta tafla obok tabletu RT112 z Androidem',
    'Szkło ochronne 9H Unitech 5400-900060G — przezroczysta tafla obok tabletu RT112 Windows z pulpitem Windows 11',
  ],
  tags: TAGI,
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900060G' },
    { name: 'Typ', value: 'Szkło ochronne 9H do ekranu' },
    { name: 'Zawartość opakowania', value: '10 sztuk' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Wymiana osłony ekranu w tabletach floty'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-rysik'],
  downloads: KATALOGI_RT112,
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const pasekNaDlonRt112: Product = {
  id: 'unitech-rt112-pasek-na-dlon',
  slug: 'unitech-rt112-pasek-na-dlon',
  name: 'Obrotowy pasek na dłoń Unitech RT112 i RT112 Windows (5400-900061G)',
  seoH1: 'Obrotowy pasek na dłoń Unitech RT112 i RT112 Windows',
  shortDescription: 'Obrotowy pasek na dłoń Unitech 5400-900061G do RT112 i RT112 Windows: mocowany czterema śrubami do tylnej ściany tabletu.',
  seoTitle: 'Obrotowy pasek na dłoń Unitech 5400-900061G do RT112 i RT112 Windows',
  seoDescription: 'Obrotowy pasek na dłoń Unitech 5400-900061G z podkładkami i śrubami; pasuje do RT112 oraz RT112 Windows. Pasek na dłoń do tabletu Unitech RT112. PN: 5400-900061G.',
  description: `Pasek 5400-900061G mocuje się do tylnej ściany tabletu i pozwala trzymać urządzenie jedną dłonią. W czasie pracy można go obrócić do wygodnego kąta.

W opakowaniu są pasek, cztery podkładki i cztery śruby. Przy montażu tablet kładzie się tylną ścianą do góry, pasek ustawia nad otworami, a podkładki i śruby dokręca śrubokrętem. Demontaż polega na odkręceniu tych samych śrub.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 246.18,
  images: ['/images/products/5400-900061G.png'],
  imageDescriptions: ['Obrotowy pasek na dłoń Unitech 5400-900061G — tył tabletu RT112 z czarnym paskiem na okrągłej podstawie'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900061G' },
    { name: 'Typ', value: 'Obrotowy pasek na dłoń' },
    { name: 'Zawartość opakowania', value: 'Pasek, 4 podkładki, 4 śruby' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Praca z tabletem w ręku podczas chodzenia po magazynie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-pasek-na-ramie', 'unitech-rt112-rysik'],
  downloads: [QSG_PASEK_NA_DLON, KATALOG_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const pasekNaRamieRt112: Product = {
  id: 'unitech-rt112-pasek-na-ramie',
  slug: 'unitech-rt112-pasek-na-ramie',
  name: 'Pasek na ramię Unitech RT112 i RT112 Windows (3210-900041G)',
  seoH1: 'Pasek na ramię Unitech RT112 i RT112 Windows',
  shortDescription: 'Pasek na ramię Unitech 3210-900041G z regulowaną długością do RT112 i RT112 Windows, z dwoma pierścieniami D.',
  seoTitle: 'Pasek na ramię Unitech 3210-900041G do RT112 i RT112 Windows',
  seoDescription: 'Pasek na ramię Unitech 3210-900041G z regulacją długości i pierścieniami D; akcesorium dla Unitech RT112 oraz wersji Windows. Pasek do tabletu Unitech RT112. PN: 3210-900041G.',
  description: `Pasek na ramię 3210-900041G pozwala nosić tablet w czasie przemieszczania się. Długość reguluje się przez chwycenie obu stron paska i pociągnięcie.

Pasek jest przypinany do dwóch pierścieni D, które mocuje się do tylnej ściany tabletu. W opakowaniu są pasek, dwa pierścienie D, dwie podkładki i dwie śruby. Pierścienie można przykręcić na dwa sposoby: w tym samym kierunku co logo „unitech” albo po prawej stronie tylnej ściany.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 65.08,
  images: ['/images/products/3210-900041G.png', '/images/products/3210-900041G-2.png'],
  imageDescriptions: [
    'Pasek na ramię Unitech 3210-900041G — tablet RT112 z Androidem zawieszony na czarnym pasku, widok z przodu',
    'Pasek na ramię Unitech 3210-900041G — tablet RT112 zawieszony na pasku z nakładką na ramię, widok pod kątem',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900041G' },
    { name: 'Typ', value: 'Pasek na ramię z regulacją długości' },
    { name: 'Zawartość opakowania', value: 'Pasek, 2 pierścienie D, 2 podkładki, 2 śruby' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Noszenie tabletu podczas pracy w ruchu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-pasek-na-dlon', 'unitech-rt112-rysik'],
  downloads: [QSG_PASEK_NA_RAMIE, KATALOG_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const rysikRt112: Product = {
  id: 'unitech-rt112-rysik',
  slug: 'unitech-rt112-rysik',
  name: 'Rysik pojemnościowy 5,5 mm z linką Unitech RT112 i RT112 Windows (1979-900008G)',
  seoH1: 'Rysik pojemnościowy 5,5 mm z linką Unitech RT112 i RT112 Windows',
  shortDescription: 'Rysik pojemnościowy 5,5 mm Unitech 1979-900008G z linką spiralną i pierścieniem D do RT112 i RT112 Windows.',
  seoTitle: 'Rysik pojemnościowy Unitech 1979-900008G z linką do RT112 i RT112 Windows',
  seoDescription: 'Rysik pojemnościowy 5,5 mm Unitech 1979-900008G z linką spiralną, zgodny z RT112 i jego wersją Windows. Rysik do tabletu Unitech RT112. PN: 1979-900008G.',
  description: `Rysik 1979-900008G ma końcówkę pojemnościową o średnicy 5,5 mm i linkę spiralną. Ekran RT112 obsługuje rysik pojemnościowy, dotyk w rękawicach i dotyk mokrym palcem.

W opakowaniu są rysik z linką, pierścień D, podkładka i śruba. Pierścień D mocuje się śrubokrętem w jednym z otworów na tylnej ścianie tabletu, a linkę zawiązuje się na pierścieniu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 56.9,
  images: ['/images/products/1979-900008G.png'],
  imageDescriptions: ['Rysik pojemnościowy Unitech 1979-900008G — czarny rysik z gumową końcówką i spiralną linką z pętlą'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1979-900008G' },
    { name: 'Typ', value: 'Rysik pojemnościowy z linką spiralną' },
    { name: 'Końcówka', value: '5,5 mm' },
    { name: 'Zawartość opakowania', value: 'Rysik z linką, pierścień D, podkładka, śruba' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Obsługa ekranu w rękawicach roboczych'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-szklo-ochronne', 'unitech-rt112-pasek-na-dlon'],
  downloads: [QSG_RYSIK, KATALOG_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const stacjaBiurkowaRt112: Product = {
  id: 'unitech-rt112-stacja-biurkowa',
  slug: 'unitech-rt112-stacja-biurkowa',
  name: 'Stacja biurkowa Unitech RT112 i RT112 Windows (5000-900124G)',
  seoH1: 'Stacja biurkowa Unitech RT112 i RT112 Windows',
  shortDescription: 'Stacja biurkowa Unitech 5000-900124G do RT112 i RT112 Windows: ładowanie przez styki POGO, Ethernet, cztery porty USB-A i USB-C z DisplayPort.',
  seoTitle: 'Stacja biurkowa Unitech 5000-900124G do RT112 i RT112 Windows',
  seoDescription: 'Stacja biurkowa Unitech 5000-900124G: szybkie ładowanie, Ethernet, USB i wyjście na monitor dla RT112 i RT112 Windows. Stacja dokująca do tabletu Unitech RT112. PN: 5000-900124G.',
  description: `Stacja 5000-900124G ładuje tablet przez styki POGO i daje mu połączenie z siecią przewodową. Ma złącze Ethernet, cztery porty USB-A oraz port USB-C z DisplayPort do podłączenia monitora przewodem USB-C – HDMI. Niebieska dioda zasilania świeci, gdy stacja jest włączona, a zielone światło złącza Ethernet oznacza połączenie z siecią.

Tablet wsuwa się w gniazdo, aż zablokuje się w stacji. Tablet RT112 Windows może pracować w stacji bez baterii.

## Co jest potrzebne do użycia?

W zestawie jest tylko stacja. Port zasilania USB-C znajduje się obok złącza Ethernet. Najlepiej podłączyć do niego zasilacz USB-C z zestawu tabletu z [przewodem sieciowym EU 1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5). Drugi zasilacz, na przykład na stałe przy stacji, musi obsługiwać Power Delivery, mieć moc co najmniej 45 W i stopień 12 V / 3 A; te warunki spełnia [zasilacz 1010-900072G](/produkt/unitech-rp300-zasilacz-45w).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 639.03,
  images: ['/images/products/5000-900124G.png', '/images/products/5000-900124G-2.png'],
  imageDescriptions: [
    'Stacja biurkowa Unitech 5000-900124G — tablet RT112 osadzony w czarnej stacji, widok z przodu pod kątem',
    'Stacja biurkowa Unitech 5000-900124G — tył stacji z czterema portami USB-A, złączem Ethernet i portami USB-C, tablet RT112 w gnieździe',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900124G' },
    { name: 'Typ', value: 'Stacja biurkowa z ładowaniem przez styki POGO' },
    { name: 'Złącza', value: 'Ethernet, 4 × USB-A, USB-C z DisplayPort, port zasilania USB-C' },
    { name: 'Zasilanie', value: 'Zasilacz USB-C z zestawu tabletu albo inny zasilacz Power Delivery, co najmniej 45 W, 12 V / 3 A' },
    { name: 'Zawartość zestawu', value: 'Stacja; bez zasilacza i przewodu sieciowego' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Ładowanie i praca tabletu na stanowisku', 'Podłączenie tabletu do sieci Ethernet i monitora'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rp300-zasilacz-45w', 'unitech-przewod-sieciowy-eu-c5', 'unitech-rt112-bateria'],
  downloads: [QSG_STACJA_BIURKOWA, ...KATALOGI_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const uchwytSamochodowyUsbRt112: Product = {
  id: 'unitech-rt112-uchwyt-samochodowy-usb',
  slug: 'unitech-rt112-uchwyt-samochodowy-usb',
  name: 'Uchwyt samochodowy z portem USB-A Unitech RT112 i RT112 Windows (5000-900128G)',
  seoH1: 'Uchwyt samochodowy z portem USB-A Unitech RT112 i RT112 Windows',
  shortDescription: 'Aktywny uchwyt samochodowy Unitech 5000-900128G z portem USB-A do RT112 i RT112 Windows: zamek, zasilanie 12 V i 24 V, otwory AMPS.',
  seoTitle: 'Uchwyt samochodowy Unitech 5000-900128G z portem USB-A do RT112 i RT112 Windows',
  seoDescription: 'Aktywny uchwyt samochodowy Unitech 5000-900128G z portem USB-A, zamkiem i zasilaniem 12/24 V dla RT112 oraz RT112 Windows. Uchwyt do pojazdu dla Unitech RT112. PN: 5000-900128G.',
  description: `Uchwyt 5000-900128G mocuje tablet w pojeździe i ładuje go w trakcie pracy. Zatrzask z zamkiem trzyma urządzenie podczas jazdy. Port USB-A pozwala podłączyć skaner, drukarkę lub klawiaturę.

Wbudowana ładowarka samochodowa przyjmuje napięcie 12 V i 24 V, więc uchwyt pasuje do samochodów osobowych, użytkowych i ciężarowych. Wtyk zapalniczki można odłączyć przy montażu na stałe. Otwory w obudowie odpowiadają standardowi AMPS.

W pudełku jest uchwyt z zamkiem, przewodem 100 mm i przewodem 500 mm z gniazdem USB, kabel do zapalniczki o długości 1,2 m z bezpiecznikiem 5 A, dwa klucze, przegub obrotowy M4, dwa komplety śrub oraz instrukcja montażu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 1090.44,
  images: ['/images/products/5000-900128G.png', '/images/products/5000-900128G-2.png'],
  imageDescriptions: [
    'Uchwyt samochodowy Unitech 5000-900128G — tablet RT112 z Androidem w uchwycie, przewody z wtykiem zapalniczki i gniazdem USB',
    'Uchwyt samochodowy Unitech 5000-900128G — tablet RT112 Windows w uchwycie, przewody z wtykiem zapalniczki i gniazdem USB',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900128G' },
    { name: 'Typ', value: 'Aktywny uchwyt samochodowy z zamkiem' },
    { name: 'Wersja', value: 'Z portem USB-A (host)' },
    { name: 'Zasilanie', value: '12 V i 24 V; wtyk zapalniczki, przewód 1,2 m' },
    { name: 'Mocowanie', value: 'Otwory zgodne ze standardem AMPS; obrotowy przegub M4' },
    { name: 'Zawartość zestawu', value: 'Uchwyt z przewodem USB, przewód zasilający z wtykiem zapalniczki, 2 klucze, przegub M4, 2 zestawy śrub, instrukcja' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Transport i dostawy paczek', 'Wózki widłowe i pojazdy użytkowe'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-uchwyt-samochodowy', 'ram-b-166-202u'],
  downloads: [QSG_UCHWYT_SAMOCHODOWY, ...KATALOGI_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

const uchwytSamochodowyRt112: Product = {
  id: 'unitech-rt112-uchwyt-samochodowy',
  slug: 'unitech-rt112-uchwyt-samochodowy',
  name: 'Uchwyt samochodowy Unitech RT112 i RT112 Windows (5000-900125G)',
  seoH1: 'Uchwyt samochodowy Unitech RT112 i RT112 Windows',
  shortDescription: 'Aktywny uchwyt samochodowy Unitech 5000-900125G w wersji standardowej do RT112 i RT112 Windows: zasilanie 12 V i 24 V przez wtyk zapalniczki.',
  seoTitle: 'Uchwyt samochodowy Unitech 5000-900125G do RT112 i RT112 Windows',
  seoDescription: 'Uchwyt samochodowy Unitech 5000-900125G, wersja standardowa z wtykiem zapalniczki i zasilaniem 12/24 V; pasuje do RT112 i RT112 Windows. Wersja bez USB-A uchwytu pojazdowego RT112. PN: 5000-900125G.',
  description: `Uchwyt 5000-900125G to wersja standardowa uchwytu samochodowego: ma wtyk zapalniczki i nie ma portu USB-A. Jest to uchwyt aktywny, który trzyma i ładuje tablet w pojeździe.

Ładowarka wbudowana w uchwyt pracuje przy napięciu 12 V i 24 V. Zasilanie z zapalniczki można odłączyć przy instalacji na stałe. Mocowanie na ramieniu umożliwiają otwory zgodne ze standardem AMPS.

Komplet obejmuje uchwyt z zamkiem i krótkim przewodem 100 mm, kabel do gniazda zapalniczki o długości 1,2 m, przegub M4 do obracania, śruby i instrukcję. Do podłączenia skanera, drukarki lub klawiatury służy [wersja z portem USB-A](/produkt/unitech-rt112-uchwyt-samochodowy-usb).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 964.8,
  images: ['/images/products/5000-900125G.png'],
  imageDescriptions: ['Uchwyt samochodowy Unitech 5000-900125G — tablet RT112 z Androidem w uchwycie, przewód z wtykiem zapalniczki'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900125G' },
    { name: 'Typ', value: 'Aktywny uchwyt samochodowy z zamkiem' },
    { name: 'Wersja', value: 'Standardowa, bez portu USB-A' },
    { name: 'Zasilanie', value: '12 V i 24 V; wtyk zapalniczki, przewód 1,2 m' },
    { name: 'Mocowanie', value: 'Otwory zgodne ze standardem AMPS; obrotowy przegub M4' },
    { name: 'Zawartość zestawu', value: 'Uchwyt, przewód zasilający, przegub M4, zestawy śrub, instrukcja' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows' },
  ],
  applications: ['Tablet w kabinie pojazdu z zasilaniem z zapalniczki'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-uchwyt-samochodowy-usb', 'ram-b-166-202u'],
  downloads: [QSG_UCHWYT_SAMOCHODOWY, ...KATALOGI_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

// ---------------------------------------------------------------------------
// Wspólne dla RT112, RT112 Windows i TB170 Plus
// ---------------------------------------------------------------------------

const uchwytPos: Product = {
  id: 'unitech-tablet-uchwyt-pos',
  slug: 'unitech-tablet-uchwyt-pos',
  name: 'Uchwyt POS Unitech RT112, RT112 Windows i TB170 Plus (4070-900019G)',
  seoH1: 'Uchwyt POS Unitech RT112, RT112 Windows i TB170 Plus',
  shortDescription: 'Uchwyt POS Unitech 4070-900019G z regulacją położenia tabletu; wspólny dla trzech modeli: RT112, RT112 Windows i TB170 Plus.',
  seoTitle: 'Uchwyt POS Unitech 4070-900019G do RT112, RT112 Windows i TB170 Plus',
  seoDescription: 'Uchwyt POS Unitech 4070-900019G z regulacją pochylenia, obrotu i wysokości; zgodny z RT112, RT112 Windows i TB170 Plus. Stojak na tablet do kasy. PN: 4070-900019G.',
  description: `Uchwyt 4070-900019G ustawia tablet na stanowisku sprzedaży. Ma regulację Tilt, Pivot, Lift i Swivel: tablet można pochylić, obrócić z poziomu do pionu, podnieść i obrócić na podstawie.

Zestaw składa się z płyty adaptera, podstawy i kolumny oraz śrub: czterech motylkowych, czterech M2-L10, dwóch M3,5-L5 i czterech M4-L10. Płytę adaptera mocuje się na jeden z dwóch sposobów: do RT112 i RT112 Windows czterema śrubami M2-L10, a przy TB170 Plus dochodzą jeszcze dwie śruby M3,5-L5.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 783.6,
  images: ['/images/products/4070-900019G.png', '/images/products/4070-900019G-2.png'],
  imageDescriptions: [
    'Uchwyt POS Unitech 4070-900019G — tablet RT112 w poziomie na czarnej kolumnie z okrągłą podstawą',
    'Uchwyt POS Unitech 4070-900019G — tablet RT112 w pionie na czarnej kolumnie z okrągłą podstawą',
  ],
  tags: ['retail', 'logistyka'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '4070-900019G' },
    { name: 'Typ', value: 'Uchwyt POS z regulacją położenia' },
    { name: 'Regulacja', value: 'Tilt, Pivot, Lift, Swivel: pochylanie, obrót poziom/pion, wysokość, obrót na podstawie' },
    { name: 'Zawartość zestawu', value: 'Płyta adaptera, podstawa, kolumna, 4 śruby motylkowe, 4 śruby M2-L10, 2 śruby M3,5-L5, 4 śruby M4-L10' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows, TB170 Plus' },
  ],
  applications: ['Stanowisko kasowe i punkt obsługi klienta'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tablet-plyta-vesa', 'ram-b-166-202u'],
  downloads: [QSG_UCHWYT_POS, ...KATALOGI_RT112],
  relatedProducts: TABLETY_WSZYSTKIE,
  createdAt: '2026-10-29',
}

const plytaVesa: Product = {
  id: 'unitech-tablet-plyta-vesa',
  slug: 'unitech-tablet-plyta-vesa',
  name: 'Płyta VESA 100 × 100 mm Unitech RT112, RT112 Windows i TB170 Plus (5400-900065G)',
  seoH1: 'Płyta VESA 100 × 100 mm Unitech RT112, RT112 Windows i TB170 Plus',
  shortDescription: 'Płyta VESA Unitech 5400-900065G, rozstaw otworów 100 × 100 mm; pasuje do tabletów RT112, ich wersji Windows oraz TB170 Plus.',
  seoTitle: 'Płyta VESA 100 × 100 Unitech 5400-900065G do RT112, RT112 Windows i TB170 Plus',
  seoDescription: 'Płyta VESA 100 × 100 mm Unitech 5400-900065G ze śrubami, dla RT112 i TB170 Plus oraz wersji Windows RT112. Adapter VESA do tabletu Unitech. PN: 5400-900065G.',
  description: `Płyta 5400-900065G ma rozstaw otworów VESA 100 × 100 mm. Pozwala przykręcić tablet do ramienia, stojaka lub innej podstawy zgodnej z tym standardem.

W opakowaniu są płyta, cztery śruby motylkowe, cztery śruby M2-L10 i dwie śruby M3,5-L5. Tablety RT112 mocuje się czterema śrubami M2-L10, a TB170 Plus dodatkowo dwiema śrubami M3,5-L5. Śruby motylkowe ustawiają położenie płyty. Tylko do TB170 Plus jest też osobny [uchwyt VESA 4070-900018G](/produkt/unitech-tb170-plus-uchwyt-vesa).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 243.18,
  images: ['/images/products/5400-900065G.png'],
  imageDescriptions: ['Płyta VESA Unitech 5400-900065G — czarna metalowa płyta z dwóch części z otworami montażowymi i tłoczeniami w kształcie krzyża'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900065G' },
    { name: 'Typ', value: 'Płyta VESA' },
    { name: 'Rozstaw otworów', value: '100 × 100 mm' },
    { name: 'Zawartość opakowania', value: 'Płyta, 4 śruby motylkowe, 4 śruby M2-L10, 2 śruby M3,5-L5' },
    { name: 'Zgodność', value: 'Unitech RT112, RT112 Windows, TB170 Plus' },
  ],
  applications: ['Mocowanie tabletu na ramieniu monitorowym lub stojaku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tablet-uchwyt-pos', 'unitech-tb170-plus-uchwyt-vesa'],
  downloads: [QSG_PLYTA_VESA, ...KATALOGI_RT112],
  relatedProducts: TABLETY_WSZYSTKIE,
  createdAt: '2026-10-29',
}

const ramB166202u: Product = {
  id: 'ram-b-166-202u',
  slug: 'ram-b-166-202u',
  name: 'Uchwyt RAM Mounts z przyssawką i okrągłą płytą, rozmiar B (RAM-B-166-202U)',
  seoH1: 'Uchwyt RAM Mounts z przyssawką i okrągłą płytą, rozmiar B',
  shortDescription: 'Uchwyt RAM-B-166-202U z przyssawką, ramieniem dwukulowym średniej długości i okrągłą płytą; mocowanie uchwytu samochodowego RT112 na szybie.',
  seoTitle: 'Uchwyt RAM-B-166-202U z przyssawką do tabletów Unitech RT112',
  seoDescription: 'Uchwyt RAM Mounts RAM-B-166-202U z przyssawką, ramieniem dwukulowym i okrągłą płytą, rozmiar B, do montażu uchwytu samochodowego tabletów Unitech RT112 i RT112 Windows. Przyssawka do tabletu Unitech. PN: RAM-B-166-202U.',
  description: `RAM-B-166-202U to uchwyt marki RAM Mounts z przyssawką, ramieniem dwukulowym i okrągłą płytą. Przyssawka mocuje całość do gładkiej powierzchni, na przykład szyby pojazdu, a ramię dwukulowe pozwala ustawić tablet pod wybranym kątem.

Uchwyt należy do mocowań tabletów RT112 i RT112 Windows. Ma rozmiar B i ramię średniej długości (Medium). Tablet nie mocuje się bezpośrednio do płyty: na płycie montuje się [uchwyt samochodowy RT112](/produkt/unitech-rt112-uchwyt-samochodowy-usb), zgodny z produktami RAM Mounts. Do tego połączenia potrzebne są cztery śruby M3 × 16 mm z łbem stożkowym, nakrętki samozabezpieczające M3 i podkładki M3; nie ma ich w zestawie uchwytu samochodowego.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'ram',
  priceFrom: 195.9,
  images: ['/images/products/RAM-B-166-202U.png'],
  imageDescriptions: ['Uchwyt RAM-B-166-202U — przyssawka z czarnym ramieniem dwukulowym i okrągłą płytą montażową'],
  tags: ['logistyka', 'magazyn'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'RAM-B-166-202U' },
    { name: 'Typ', value: 'Uchwyt z przyssawką i ramieniem dwukulowym' },
    { name: 'Rozmiar', value: 'B; ramię średniej długości (Medium); okrągła płyta' },
    { name: 'Producent', value: 'RAM Mounts' },
    { name: 'Zgodność', value: 'Uchwyty samochodowe Unitech RT112 i RT112 Windows (5000-900128G, 5000-900125G)' },
  ],
  applications: ['Mocowanie tabletu na szybie pojazdu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rt112-uchwyt-samochodowy-usb', 'unitech-rt112-uchwyt-samochodowy'],
  downloads: [QSG_UCHWYT_SAMOCHODOWY, ...KATALOGI_RT112],
  relatedProducts: TABLETY_RT112,
  createdAt: '2026-10-29',
}

// ---------------------------------------------------------------------------
// TB170 Plus
// ---------------------------------------------------------------------------

const bateriaTb170: Product = {
  id: 'unitech-tb170-plus-bateria',
  slug: 'unitech-tb170-plus-bateria',
  name: 'Bateria Unitech TB170 Plus, 4300 mAh hot swap (1400-900068G)',
  seoH1: 'Bateria Unitech TB170 Plus, 4300 mAh hot swap',
  shortDescription: 'Bateria Unitech 1400-900068G 7,68 V / 4300 mAh typu hot-swappable do tabletu TB170 Plus.',
  seoTitle: 'Bateria Unitech 1400-900068G 4300 mAh hot swap do TB170 Plus',
  seoDescription: 'Bateria 4300 mAh Unitech 1400-900068G typu hot swap, zapasowa do TB170 Plus. Bateria TB170 Plus Unitech. PN: 1400-900068G.',
  description: `Bateria 1400-900068G ma napięcie 7,68 V i pojemność 4300 mAh (32 Wh). Jest to bateria typu hot-swappable, więc wymiana nie przerywa pracy tabletu TB170 Plus. Po włożeniu baterii trzeba zablokować zatrzask na tylnej ściance, bo w przeciwnym razie ekran się nie włączy.

Baterię najlepiej wymieniać co roku albo po 500 cyklach ładowania. Bateria innej marki może uszkodzić tablet i spowodować utratę gwarancji. Zapasowe baterie ładuje [ładowarka na cztery sztuki](/produkt/unitech-tb170-plus-ladowarka-baterii).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 567.63,
  images: ['/images/products/1400-900068G.png'],
  imageDescriptions: ['Bateria Unitech 1400-900068G 4300 mAh — czarny pakiet baterii z etykietą znamionową'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900068G' },
    { name: 'Typ', value: 'Bateria wymienna hot-swappable' },
    { name: 'Napięcie i pojemność', value: '7,68 V, 4300 mAh (32 Wh)' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Zapasowa bateria do pracy bez przestojów'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-ladowarka-baterii', 'unitech-tb170-plus-zasilacz-65w'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const ladowarkaTb170: Product = {
  id: 'unitech-tb170-plus-ladowarka-baterii',
  slug: 'unitech-tb170-plus-ladowarka-baterii',
  name: 'Ładowarka 4 baterii Unitech TB170 Plus (5100-900032G)',
  seoH1: 'Ładowarka 4 baterii Unitech TB170 Plus',
  shortDescription: 'Ładowarka Unitech 5100-900032G z czterema gniazdami na baterie 4300 mAh do tabletu TB170 Plus.',
  seoTitle: 'Ładowarka 4 baterii Unitech 5100-900032G do TB170 Plus',
  seoDescription: 'Ładowarka czterogniazdowa Unitech 5100-900032G na baterie 4300 mAh; zgodna z TB170 Plus. Ładowarka baterii TB170 Plus. PN: 5100-900032G.',
  description: `Ładowarka 5100-900032G ma cztery gniazda na baterie tabletu TB170 Plus. Pozwala ładować zapasowe baterie poza tabletem, więc po wymianie hot swap kolejna bateria jest gotowa.

Ładowarka (4-Slot Battery Charger) jest przeznaczona do [baterii 4300 mAh](/produkt/unitech-tb170-plus-bateria).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 1612.78,
  images: ['/images/products/5100-900032G.png'],
  imageDescriptions: ['Ładowarka 4 baterii Unitech 5100-900032G — szara ładowarka z czterema gniazdami na baterie, widok z przodu'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5100-900032G' },
    { name: 'Typ', value: 'Ładowarka baterii' },
    { name: 'Liczba gniazd', value: '4' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Ładowanie zapasowych baterii przy stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-bateria'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const pioroTb170: Product = {
  id: 'unitech-tb170-plus-pioro',
  slug: 'unitech-tb170-plus-pioro',
  name: 'Pióro Digitizer Pen typ B Unitech TB170 Plus (1979-900007G)',
  seoH1: 'Pióro Digitizer Pen typ B Unitech TB170 Plus',
  shortDescription: 'Pióro Digitizer Pen typ B Unitech 1979-900007G (EETI, MPP 2.0) z dwoma przyciskami do tabletu TB170 Plus.',
  seoTitle: 'Pióro Digitizer Pen Unitech 1979-900007G do TB170 Plus',
  seoDescription: 'Pióro Digitizer Pen typ B Unitech 1979-900007G (EETI, MPP 2.0) do notatek i podpisów na ekranie TB170 Plus. Rysik TB170 Plus Unitech. PN: 1979-900007G.',
  description: `Pióro 1979-900007G to aktywne pióro EETI typu B, zgodne ze standardem Microsoft HID i z MPP 2.0. Ma dwa przyciski boczne: jeden działa jak prawy przycisk myszy, drugi jak gumka.

Pióro służy do notatek, podpisów i adnotacji bezpośrednio na ekranie TB170 Plus, na przykład przy pracy w serwisie, magazynie i logistyce.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 432.31,
  images: ['/images/products/1979-900007G.png'],
  imageDescriptions: ['Pióro Digitizer Pen Unitech 1979-900007G — czarne pióro z dwoma przyciskami bocznymi i cienką końcówką'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1979-900007G' },
    { name: 'Typ', value: 'Pióro aktywne Digitizer Pen typ B (EETI)' },
    { name: 'Standard', value: 'Microsoft HID, MPP 2.0' },
    { name: 'Przyciski', value: '2: prawy przycisk i gumka' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Notatki, podpisy i adnotacje na ekranie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-pasek-na-dlon'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const pasekNaDlonTb170: Product = {
  id: 'unitech-tb170-plus-pasek-na-dlon',
  slug: 'unitech-tb170-plus-pasek-na-dlon',
  name: 'Pasek na dłoń X-Strap Unitech TB170 Plus (3210-900022G)',
  seoH1: 'Pasek na dłoń X-Strap Unitech TB170 Plus',
  shortDescription: 'Pasek na dłoń X-Strap Unitech 3210-900022G do tabletu TB170 Plus, mocowany na tylnej ściance.',
  seoTitle: 'Pasek na dłoń X-Strap Unitech 3210-900022G do TB170 Plus',
  seoDescription: 'Pasek na dłoń X-Strap Unitech 3210-900022G, wersja dla TB170 Plus. Pasek TB170 Plus Unitech. PN: 3210-900022G.',
  description: `X-Strap 3210-900022G to pasek na dłoń mocowany do tylnej ściany tabletu. Taśmy układają się w kształt litery X i są zamocowane w narożnikach obudowy.

Pasek służy do trzymania TB170 Plus w ręku podczas pracy w terenie; do noszenia na ramieniu jest osobny [pasek 3210-900034G](/produkt/unitech-tb170-plus-pasek-na-ramie).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 80.88,
  images: ['/images/products/3210-900022G.png'],
  imageDescriptions: ['Pasek na dłoń X-Strap Unitech 3210-900022G — czarne taśmy w kształcie litery X na tylnej ścianie tabletu Unitech TB162'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900022G' },
    { name: 'Typ', value: 'Pasek na dłoń X-Strap' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Praca w terenie z tabletem trzymanym w dłoni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-pasek-na-ramie', 'unitech-tb170-plus-raczka'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const pasekNaRamieTb170: Product = {
  id: 'unitech-tb170-plus-pasek-na-ramie',
  slug: 'unitech-tb170-plus-pasek-na-ramie',
  name: 'Pasek na ramię Unitech TB170 Plus (3210-900034G)',
  seoH1: 'Pasek na ramię Unitech TB170 Plus',
  shortDescription: 'Pasek na ramię Unitech 3210-900034G do noszenia tabletu TB170 Plus.',
  seoTitle: 'Pasek na ramię Unitech 3210-900034G do TB170 Plus',
  seoDescription: 'Pasek na ramię Unitech 3210-900034G przeznaczony dla TB170 Plus. Pasek na ramię TB170 Plus Unitech. PN: 3210-900034G.',
  description: `Pasek 3210-900034G umożliwia noszenie TB170 Plus na ramieniu, gdy praca wymaga częstego przemieszczania się. Zaczepy paska wpina się w uchwyty przy górnych narożnikach obudowy.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 60.15,
  images: ['/images/products/3210-900034G.png'],
  imageDescriptions: ['Pasek na ramię Unitech 3210-900034G — tablet TB170 Plus zawieszony na czarnym pasku, widok z przodu'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900034G' },
    { name: 'Typ', value: 'Pasek na ramię' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Noszenie tabletu podczas obchodu i kontroli'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-pasek-na-dlon', 'unitech-tb170-plus-raczka'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const raczkaTb170: Product = {
  id: 'unitech-tb170-plus-raczka',
  slug: 'unitech-tb170-plus-raczka',
  name: 'Rączka do przenoszenia Unitech TB170 Plus (3210-900037G)',
  seoH1: 'Rączka do przenoszenia Unitech TB170 Plus',
  shortDescription: 'Rączka do przenoszenia Unitech 3210-900037G (Brief Case Handle) do tabletu TB170 Plus.',
  seoTitle: 'Rączka do przenoszenia Unitech 3210-900037G do TB170 Plus',
  seoDescription: 'Rączka Brief Case Handle Unitech 3210-900037G do przenoszenia TB170 Plus. Uchwyt do noszenia TB170 Plus Unitech. PN: 3210-900037G.',
  description: `Rączka 3210-900037G ma kształt uchwytu teczki (Brief Case Handle) i wpina się w zaczepy przy górnej krawędzi tabletu. Tablet można nosić w jednej ręce jak teczkę.

Rączka jest osobnym akcesorium obok paska na dłoń i paska na ramię.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 40.56,
  images: ['/images/products/3210-900037G.png'],
  imageDescriptions: ['Rączka do przenoszenia Unitech 3210-900037G — tablet TB170 Plus z czarną rączką wpiętą przy górnej krawędzi, widok z przodu pod kątem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900037G' },
    { name: 'Typ', value: 'Rączka do przenoszenia (Brief Case Handle)' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Przenoszenie tabletu między stanowiskami'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-pasek-na-dlon', 'unitech-tb170-plus-pasek-na-ramie'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const stacjaBiurkowaTb170: Product = {
  id: 'unitech-tb170-plus-stacja-biurkowa',
  slug: 'unitech-tb170-plus-stacja-biurkowa',
  name: 'Stacja biurkowa Unitech TB170 Plus bez portu DisplayPort (5000-900137G)',
  seoH1: 'Stacja biurkowa Unitech TB170 Plus bez portu DisplayPort',
  shortDescription: 'Stacja biurkowa Unitech 5000-900137G (Office Dock) w wersji bez portu DisplayPort; zgodna z tabletem TB170 Plus.',
  seoTitle: 'Stacja biurkowa Unitech 5000-900137G do TB170 Plus',
  seoDescription: 'Stacja biurkowa Unitech 5000-900137G (Office Dock), wersja bez portu DisplayPort, dla TB170 Plus. Stacja dokująca TB170 Plus Unitech. PN: 5000-900137G.',
  description: `Stacja 5000-900137G to Office Dock przeznaczony do pracy TB170 Plus na stałym stanowisku. Nie ma portu DisplayPort.

Złącze dokujące na dolnej krawędzi tabletu łączy go ze stacją i zwiększa liczbę dostępnych złączy.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 1684.33,
  images: ['/images/products/5000-900137G.png'],
  imageDescriptions: ['Stacja biurkowa Unitech 5000-900137G — tablet TB170 Plus osadzony w czarnej stacji, widok z przodu pod kątem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900137G' },
    { name: 'Typ', value: 'Stacja biurkowa (Office Dock)' },
    { name: 'Wersja', value: 'Bez portu DisplayPort' },
    { name: 'Połączenie z tabletem', value: 'Złącze dokujące na dolnej krawędzi tabletu' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Praca tabletu na biurku z dodatkowymi złączami'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-zasilacz-65w', 'unitech-tb170-plus-stacja-pojazdowa'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const stacjaPojazdowaTb170: Product = {
  id: 'unitech-tb170-plus-stacja-pojazdowa',
  slug: 'unitech-tb170-plus-stacja-pojazdowa',
  name: 'Stacja pojazdowa Unitech TB170 Plus bez portu DisplayPort (5000-900138G)',
  seoH1: 'Stacja pojazdowa Unitech TB170 Plus bez portu DisplayPort',
  shortDescription: 'Unitech 5000-900138G (Vehicle Dock), stacja do kabiny pojazdu bez portu DisplayPort, dla tabletu TB170 Plus.',
  seoTitle: 'Stacja pojazdowa Unitech 5000-900138G do TB170 Plus',
  seoDescription: 'Stacja pojazdowa Unitech 5000-900138G (Vehicle Dock) bez DisplayPort, dla TB170 Plus. Uchwyt pojazdowy TB170 Plus Unitech. PN: 5000-900138G.',
  description: `Stacja 5000-900138G to Vehicle Dock do kabiny pojazdu. Wersja nie ma portu DisplayPort. Połączenie z tabletem odbywa się przez to samo złącze dokujące na dolnej krawędzi.

Do zasilania stacji z instalacji pojazdu służy [zasilacz 1010-900056G](/produkt/unitech-tb170-plus-zasilacz-pojazdowy) z wtykiem zapalniczki. Jest to osobna pozycja w ofercie akcesoriów TB170 Plus.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 1908.8,
  images: ['/images/products/5000-900138G.png', '/images/products/5000-900138G-2.png'],
  imageDescriptions: [
    'Stacja pojazdowa Unitech 5000-900138G — tablet TB170 Plus w czarnej stacji, widok z przodu',
    'Stacja pojazdowa Unitech 5000-900138G — wysoka czarna stacja bez tabletu, złącza na podstawie, widok pod kątem',
  ],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900138G' },
    { name: 'Typ', value: 'Stacja pojazdowa (Vehicle Dock)' },
    { name: 'Wersja', value: 'Bez portu DisplayPort' },
    { name: 'Zasilanie', value: 'Z instalacji pojazdu przez zasilacz 1010-900056G (osobna pozycja)' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Praca tabletu w kabinie pojazdu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-zasilacz-pojazdowy', 'unitech-tb170-plus-stacja-biurkowa'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const zasilaczPojazdowyTb170: Product = {
  id: 'unitech-tb170-plus-zasilacz-pojazdowy',
  slug: 'unitech-tb170-plus-zasilacz-pojazdowy',
  name: 'Zasilacz do stacji pojazdowej Unitech TB170 Plus (1010-900056G)',
  seoH1: 'Zasilacz do stacji pojazdowej Unitech TB170 Plus',
  shortDescription: 'Zasilacz Unitech 1010-900056G do stacji pojazdowej tabletu TB170 Plus, z wtykiem do gniazda zapalniczki.',
  seoTitle: 'Zasilacz do stacji pojazdowej Unitech 1010-900056G do TB170 Plus',
  seoDescription: 'Zasilacz Unitech 1010-900056G z wtykiem zapalniczki do stacji pojazdowej TB170 Plus. Zasilacz samochodowy TB170 Plus Unitech. PN: 1010-900056G.',
  description: `Zasilacz 1010-900056G to Power Adapter for Vehicle Docking / Cradle. Zasila [stację pojazdową](/produkt/unitech-tb170-plus-stacja-pojazdowa) TB170 Plus z instalacji pojazdu.

Jest to zasilacz DC/DC: przewód wejściowy kończy się wtykiem do gniazda zapalniczki, a przewód wyjściowy wtykiem DC do stacji.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 409.88,
  images: ['/images/products/1010-900056G.png'],
  imageDescriptions: ['Zasilacz Unitech 1010-900056G do stacji pojazdowej — zasilacz DC/DC z przewodami zakończonymi wtykiem DC i wtykiem zapalniczki'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900056G' },
    { name: 'Typ', value: 'Zasilacz do stacji pojazdowej' },
    { name: 'Zgodność', value: 'Stacja pojazdowa 5000-900138G dla Unitech TB170 Plus' },
  ],
  applications: ['Zasilanie stacji pojazdowej z gniazda zapalniczki'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-stacja-pojazdowa'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const podporkaTb170: Product = {
  id: 'unitech-tb170-plus-podporka',
  slug: 'unitech-tb170-plus-podporka',
  name: 'Podpórka Unitech TB170 Plus (5200-900015G)',
  seoH1: 'Podpórka Unitech TB170 Plus',
  shortDescription: 'Podpórka Unitech 5200-900015G (kickstand) mocowana do płyty montażowej tabletu TB170 Plus.',
  seoTitle: 'Podpórka Unitech 5200-900015G do TB170 Plus',
  seoDescription: 'Podpórka Unitech 5200-900015G (kickstand) mocowana do płyty montażowej TB170 Plus. Podstawka TB170 Plus Unitech. PN: 5200-900015G.',
  description: `Podpórka 5200-900015G pozwala postawić TB170 Plus na stole lub blacie bez stacji. Mocuje się ją do zdejmowanej płyty montażowej na tylnej ścianie tabletu.

Płytę montażową odkręca się śrubokrętem, a po założeniu akcesorium przykręca z powrotem. Ta sama płyta przyjmuje też uchwyt snap mount 4070-900015G.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 224.81,
  images: ['/images/products/5200-900015G.png'],
  imageDescriptions: ['Podpórka Unitech 5200-900015G — dwa ujęcia tabletu TB170 Plus od tyłu: podpórka złożona i rozłożona'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5200-900015G' },
    { name: 'Typ', value: 'Podpórka (kickstand)' },
    { name: 'Mocowanie', value: 'Zdejmowana płyta montażowa na tylnej ścianie tabletu' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Praca tabletu postawionego na blacie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tb170-plus-uchwyt-vesa', 'unitech-tablet-plyta-vesa'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const uchwytVesaTb170: Product = {
  id: 'unitech-tb170-plus-uchwyt-vesa',
  slug: 'unitech-tb170-plus-uchwyt-vesa',
  name: 'Uchwyt VESA Unitech TB170 Plus (4070-900018G)',
  seoH1: 'Uchwyt VESA Unitech TB170 Plus',
  shortDescription: 'Uchwyt VESA Unitech 4070-900018G (VESA Mount) do tabletu TB170 Plus.',
  seoTitle: 'Uchwyt VESA Unitech 4070-900018G do TB170 Plus',
  seoDescription: 'Uchwyt VESA Unitech 4070-900018G (VESA Mount) dla TB170 Plus. Adapter VESA TB170 Plus Unitech. PN: 4070-900018G.',
  description: `Uchwyt 4070-900018G (VESA Mount) jest przeznaczony do TB170 Plus. Pozwala zamontować tablet na standardowym ramieniu lub stojaku z mocowaniem VESA.

Do TB170 Plus pasuje też [płyta VESA 100 × 100 mm](/produkt/unitech-tablet-plyta-vesa), wspólna z tabletami RT112. Wybór zależy od sposobu montażu na stanowisku.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 130.54,
  images: ['/images/products/4070-900018G.png', '/images/products/4070-900018G-2.png'],
  imageDescriptions: [
    'Uchwyt VESA Unitech 4070-900018G — szara metalowa płyta z otworami montażowymi i wycięciem',
    'Uchwyt VESA Unitech 4070-900018G — tył tabletu TB170 Plus z przykręconą metalową płytą',
  ],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '4070-900018G' },
    { name: 'Typ', value: 'Uchwyt VESA (VESA Mount)' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus' },
  ],
  applications: ['Montaż tabletu na ramieniu lub stojaku VESA'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-tablet-plyta-vesa', 'unitech-tb170-plus-podporka'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

const zasilacz65wTb170: Product = {
  id: 'unitech-tb170-plus-zasilacz-65w',
  slug: 'unitech-tb170-plus-zasilacz-65w',
  name: 'Zasilacz AC 65 W Unitech TB170 Plus, bez przewodu sieciowego (1010-900070G)',
  seoH1: 'Zasilacz AC 65 W Unitech TB170 Plus, bez przewodu sieciowego',
  shortDescription: 'Zasilacz Unitech 1010-900070G o mocy 65 W (PSU only) do tabletu TB170 Plus, sprzedawany bez przewodu sieciowego.',
  seoTitle: 'Zasilacz 65 W Unitech 1010-900070G do TB170 Plus',
  seoDescription: 'Zasilacz AC 65 W Unitech 1010-900070G (PSU only), bez przewodu sieciowego, do TB170 Plus. Zapasowy zasilacz TB170 Plus Unitech. PN: 1010-900070G.',
  description: `Zasilacz 1010-900070G ma moc 65 W i jest sprzedawany w wersji PSU only, czyli bez przewodu sieciowego. Służy jako zapasowy zasilacz TB170 Plus albo drugi zasilacz na dodatkowym stanowisku. Pasuje też do modeli TB170 i TB162.

Wtyk DC na końcu przewodu pasuje do gniazda DC w tablecie. Od strony sieci zasilacz ma gniazdo IEC C6, do którego podłącza się przewód z wtykiem C5.

## Co jest potrzebne do użycia?

${PRZEWOD_EU}Przewód 1550-905940G ma wtyczkę do europejskiego gniazdka z uziemieniem i długość 1,8 m.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-tabletow'],
  manufacturerId: 'unitech',
  priceFrom: 140.49,
  images: ['/images/products/1010-900070G.png'],
  imageDescriptions: ['Zasilacz AC 65 W Unitech 1010-900070G — czarny zasilacz z gniazdem IEC C6 i przewodem zakończonym kątowym wtykiem DC'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900070G' },
    { name: 'Typ', value: 'Zasilacz AC (PSU only)' },
    { name: 'Moc', value: '65 W' },
    { name: 'Wejście sieciowe', value: 'IEC C6; przewód z wtykiem C5 sprzedawany osobno' },
    { name: 'Wyjście', value: 'Wtyk DC' },
    { name: 'Zgodność', value: 'Unitech TB170 Plus (zasilacz wspólny z TB170 i TB162)' },
  ],
  applications: ['Zapasowy zasilacz do tabletu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-sieciowy-eu-c5', 'unitech-tb170-plus-bateria', 'unitech-tb170-plus-stacja-biurkowa'],
  downloads: [INSTRUKCJA_TB170],
  relatedProducts: [TB170_PLUS],
  createdAt: '2026-10-29',
}

// Akcesoria w jednej liście: integracja w products.ts rozdziela je do podkategorii według `subcategoryIds`.
export const unitechTabletAccessories: Product[] = [
  bateriaRt112,
  szkloRt112,
  pasekNaDlonRt112,
  pasekNaRamieRt112,
  rysikRt112,
  stacjaBiurkowaRt112,
  uchwytSamochodowyUsbRt112,
  uchwytSamochodowyRt112,
  uchwytPos,
  plytaVesa,
  ramB166202u,
  bateriaTb170,
  ladowarkaTb170,
  pioroTb170,
  pasekNaDlonTb170,
  pasekNaRamieTb170,
  raczkaTb170,
  stacjaBiurkowaTb170,
  stacjaPojazdowaTb170,
  zasilaczPojazdowyTb170,
  podporkaTb170,
  uchwytVesaTb170,
  zasilacz65wTb170,
]
