import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Taśmy barwiące Brady do drukarek na rolki: kasety i75 do i7500 oraz taśmy na gilzie 25,4 mm do i6100 i i7100.
// Jedna karta na serię taśmy, PN jako warianty. 14.11.2026.

const SZEROKOSC_DLUGOSC = 'Rozmiar'
const SZEROKOSC_DLUGOSC_TOOLTIP = (zakres: string, dlugosc: string) =>
  `Szerokość taśmy barwiącej i długość nawiniętej taśmy.\n\nW tej serii szerokość wynosi ${zakres}, a długość ${dlugosc}.`
const KOLOR_TOOLTIP = (opis: string) => `Kolor warstwy barwiącej, czyli kolor wydruku.\n\n${opis}`

// [PN, szerokość mm, długość m, kolor]
type Wiersz = [string, string, string, string?, Record<string, string>?]

const wariantyTasmy = (wiersze: Wiersz[], opis: string, zKolorem = false) =>
  wiersze.map(([pn, szer, dl, kolor, dodatkowe]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${opis} ${szer} mm × ${dl} m`,
    attributes: {
      [SZEROKOSC_DLUGOSC]: `${szer} mm × ${dl} m`,
      ...(zKolorem && kolor ? { Kolor: kolor } : {}),
      ...(dodatkowe ?? {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  }))

interface OpcjeSpecyfikacji {
  typ: string
  seria: string
  formula: string
  materialNosnika?: string
  kolor: string
  szerokosc: string
  dlugosc: string
  grubosc?: string
  warstwa: string
  wlasciwosci?: string
  odpornosc?: string
  zalecane?: string
  gilza: string
  format: string
  smartCell?: boolean
  drukarki: string
  artykul?: string
  pn?: string
}

const specyfikacjaTasmy = (o: OpcjeSpecyfikacji) =>
  [
    o.pn ? { name: 'Part Number', value: o.pn } : null,
    o.artykul ? { name: 'Numer artykułu Brady', value: o.artykul } : null,
    { name: 'Typ', value: o.typ },
    { name: 'Seria', value: o.seria },
    { name: 'Formuła taśmy', value: o.formula },
    o.materialNosnika ? { name: 'Typ materiału', value: o.materialNosnika } : null,
    { name: 'Kolor', value: o.kolor },
    { name: 'Szerokość taśmy', value: o.szerokosc },
    { name: 'Długość taśmy', value: o.dlugosc },
    o.grubosc ? { name: 'Grubość', value: o.grubosc } : null,
    { name: 'Warstwa barwiąca', value: o.warstwa },
    o.wlasciwosci ? { name: 'Właściwości', value: o.wlasciwosci } : null,
    o.odpornosc ? { name: 'Odporność', value: o.odpornosc } : null,
    { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
    o.zalecane ? { name: 'Zalecane materiały', value: o.zalecane } : null,
    { name: 'Format', value: o.format },
    { name: 'Gilza', value: o.gilza },
    o.smartCell ? { name: 'Smart Cell', value: 'Tak' } : null,
    { name: 'Zgodne drukarki', value: o.drukarki },
  ].filter((x): x is { name: string; value: string } => x !== null)

// ---------------------------------------------------------------------------
// Kasety i75 do drukarki Brady i7500
// ---------------------------------------------------------------------------

const DRUKARKA_I7500 = 'Brady i7500, i7500 RFID'
const ZASTOSOWANIA_I75 = ['Oznaczanie przewodów i elementów instalacji', 'Etykiety na płytki drukowane i urządzenia', 'Kody kreskowe i oznaczenia laboratoryjne']

const KASETA_I75 = 'Taśma barwiąca w kasecie do druku termotransferowego'
const FORMAT_I75 = 'kaseta z taśmą, warstwa barwiąca zawsze zwrócona do etykiety'

// i75-R4300 (cps-5042008)
const I75_R4300: Wiersz[] = [
  ['i75-R4306', '40', '300'],
  ['i75-R4302', '60', '300'],
  ['i75-R4300', '83', '300'],
  ['i75-R4307', '110', '300'],
]

export const bradyI75R4300: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r4300',
  slug: 'brady-i75-r4300',
  name: 'Taśma barwiąca Brady i75-R4300 woskowo-żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R4300 — taśma barwiąca woskowo-żywiczna do i7500',
  seoDescription: 'Czarna taśma barwiąca Brady i75-R4300 do drukarki Brady i7500: formuła woskowo-żywiczna, 40–110 mm × 300 m, odporna na rozmazanie. PN: i75-R4306, i75-R4300.',
  shortDescription: 'Brady i75-R4300 to czarna taśma barwiąca w kasecie, o formule woskowo-żywicznej, szerokości od 40 do 110 mm i długości 300 m. Do drukarki Brady i7500.',
  description: 'Czarna taśma woskowo-żywiczna z serii i75-R4300 trafia do drukarki w kasecie. Kaseta wyrównuje taśmę samoczynnie i obraca ją farbą ku etykiecie. Napis nie rozmazuje się i znosi kontakt z chemikaliami, a skanery odczytują kody kreskowe z dużą pewnością. Skład jest bezhalogenowy.\n\nNajwęższa kaseta ma 40 mm, najszersza 110 mm; pośrednie rozmiary to 60 i 83 mm. Taśma liczy 300 m. Strona barwna jest nawinięta na zewnątrz. Opakowanie zawiera jedną kasetę z taśmą jednokolorową.\n\nSeria ma służyć do druku na papierach i foliach bez połysku, o powierzchni matowej albo chropowatej. Należą do nich samolaminujący winyl B-427, koszulki PermaSleeve B-342 oraz tkanina nylonowa B-499. Spośród zastosowań wymieniono przewody, płytki drukowane, urządzenia, telekomunikację, laboratorium i identyfikację ogólną. Wersje drukarki i7500, zwykłą i RFID, obsługuje ta sama kaseta.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r4300-ribbon-for-i7500-label-printer-cps-5042008',
  images: ['/images/products/brady/i75-r4306.png', '/images/products/brady/i75-r4300.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z czarną taśmą barwiącą na niebieskiej piaście, z odwiniętym pasem taśmy',
    'Szersza kaseta Brady i75 z czarną taśmą barwiącą i z rozwiniętym pasem taśmy na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R4300',
    formula: 'woskowo-żywiczna',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'rozmazanie, chemikalia',
    zalecane: 'matowe i szorstkie papiery oraz folie: B-427, PermaSleeve B-342, tkanina nylonowa B-499',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R4300, 'czarna taśma barwiąca i75-R4300'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Na jakich materiałach drukuje się taśmą i75-R4300?', answer: 'Na papierach i foliach o powierzchni matowej lub szorstkiej, na przykład na winylu B-427 i tkaninie nylonowej B-499. Pasuje także do koszulek PermaSleeve B-342.' },
    { question: 'Z jaką drukarką działają kasety i75-R4300?', answer: 'Z drukarką [Brady i7500](/produkt/brady-i7500), także w wersji RFID. Kaseta jest ułożona tak, że strona z farbą zawsze zwraca się do etykiety.' },
  ],
  applications: ZASTOSOWANIA_I75,
}

// i75-R4400 (cps-5042009)
const KOLORY_I75: Record<string, string> = { BL: 'Niebieski', GR: 'Zielony', RD: 'Czerwony', WT: 'Biały' }
const kolorI75 = (pn: string) => KOLORY_I75[pn.slice(-2)]

const I75_R4400: Wiersz[] = [
  ['i75-R4400-BL', '60', '300'],
  ['i75-R4400-GR', '60', '300'],
  ['i75-R4400-RD', '60', '300'],
  ['i75-R4400-WT', '60', '300'],
  ['i75-R4402-BL', '83', '300'],
  ['i75-R4402-GR', '83', '300'],
  ['i75-R4402-RD', '83', '300'],
  ['i75-R4402-WT', '83', '300'],
  ['i75-R4407-BL', '110', '300'],
  ['i75-R4407-RD', '110', '300'],
  ['i75-R4407-WT', '110', '300'],
].map(([pn, s, d]) => [pn, s, d, kolorI75(pn)] as Wiersz)

export const bradyI75R4400: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r4400',
  slug: 'brady-i75-r4400',
  name: 'Kolorowe taśmy barwiące Brady i75-R4400 żywiczne w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R4400 — kolorowa taśma barwiąca do drukarki i7500',
  seoDescription: 'Kolorowe taśmy barwiące Brady i75-R4400 do drukarki Brady i7500: żywica, kolory niebieski, zielony, czerwony, biały. PN: i75-R4400-BL, i75-R4402-WT.',
  shortDescription: 'Brady i75-R4400 to taśmy barwiące z żywicą o wysokiej gęstości w kolorach niebieskim, zielonym, czerwonym i białym, w szerokościach 60, 83 i 110 mm. Do drukarki Brady i7500.',
  description: 'Taśmy i75-R4400 pozwalają drukować kolorem, a nie tylko na czarno. Do wyboru są cztery barwy: niebieska, zielona, czerwona i biała. Żywica o wysokiej gęstości daje wydruk odporny na rozpuszczalniki, zarysowania i wysoką temperaturę. Taśma jest przeznaczona do trudnych warunków pracy.\n\nTaśma występuje w trzech szerokościach: 60, 83 i 110 mm, ale nie każdy kolor ma wszystkie rozmiary. Czerwony, niebieski i biały są dostępne w całej trójce, a zielony tylko w dwóch węższych. Kaseta układa taśmę stroną z farbą ku etykiecie. W opakowaniu leży jedna kaseta, a nadruk jest jednokolorowy.\n\nDla taśm R4400 wskazano podłoża z połyskiem i gładką powierzchnią, w tym trwały poliester B-423 oraz poliester B-483 z klejem ultramocnym. Wspólne zastosowania serii to kody kreskowe, płytki drukowane, przewody, wyposażenie i laboratorium. Taśma pracuje w drukarce i7500.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r4400-ribbon-for-i7500-label-printer-cps-5042009',
  images: ['/images/products/brady/i75-r4400-bl.png', '/images/products/brady/i75-r4400-rd.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z niebieską taśmą barwiącą w niebieskiej obudowie, z odwiniętym pasem taśmy',
    'Kaseta Brady i75 z czerwoną taśmą barwiącą w czerwonej obudowie, z odwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R4400',
    formula: 'żywica o wysokiej gęstości',
    kolor: 'niebieski, zielony, czerwony, biały',
    szerokosc: '60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'do trudnych warunków pracy',
    odpornosc: 'rozpuszczalniki, zarysowania, wysoka temperatura',
    zalecane: 'błyszczące i gładkie materiały: poliester B-483, poliester B-423',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R4400, 'taśma barwiąca i75-R4400', true),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 60 do 110 mm', '300 m'),
    Kolor: KOLOR_TOOLTIP('W tej serii dostępne są kolory niebieski, zielony, czerwony i biały.'),
  },
  faq: [
    { question: 'Jakie kolory ma seria i75-R4400?', answer: 'Niebieski, zielony, czerwony i biały. Zielona taśma występuje w szerokościach 60 i 83 mm, pozostałe kolory także w 110 mm.' },
    { question: 'Do jakich materiałów przeznaczona jest taśma i75-R4400?', answer: 'Do materiałów błyszczących i bardzo gładkich, takich jak poliester B-483 i trwały poliester B-423.' },
    { question: 'Z jaką drukarką pracuje i75-R4400?', answer: 'Z drukarką [Brady i7500](/produkt/brady-i7500). Kaseta ma oznaczenie Smart Cell.' },
  ],
  applications: ['Kolorowe oznaczenia na poliestrze', 'Etykiety odporne na rozpuszczalniki i ciepło'],
}

// i75-R4500 (cps-5042010)
const I75_R4500: Wiersz[] = [
  ['i75-R4500-BL', '60', '300', 'Niebieski'],
  ['i75-R4500-RD', '60', '300', 'Czerwony'],
  ['i75-R4507-BL', '110', '300', 'Niebieski'],
  ['i75-R4507-RD', '110', '300', 'Czerwony'],
]

export const bradyI75R4500: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r4500',
  slug: 'brady-i75-r4500',
  name: 'Kolorowe taśmy barwiące Brady i75-R4500 woskowo-żywiczne w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R4500 — niebieska i czerwona taśma do drukarki i7500',
  seoDescription: 'Niebieska i czerwona taśma barwiąca Brady i75-R4500 do drukarki Brady i7500: formuła woskowo-żywiczna, 60 i 110 mm × 300 m. PN: i75-R4500-BL, i75-R4507-RD.',
  shortDescription: 'Brady i75-R4500 to niebieska i czerwona taśma barwiąca woskowo-żywiczna w kasecie, 60 lub 110 mm szerokości i 300 m długości. Do drukarki Brady i7500.',
  description: 'Seria i75-R4500 zawiera dwa kolory: niebieski i czerwony. Formuła woskowo-żywiczna daje nadruk odporny na rozmazanie i pozwala uzyskać bardzo dobrą czytelność kodów kreskowych. Taśma pracuje w kasecie, która ustawia się w drukarce samoczynnie. Nadruk jest jednokolorowy.\n\nKażdy kolor ma dwie szerokości, 60 i 110 mm. Rolka taśmy mierzy 300 m. Farba leży po zewnętrznej stronie nawinięcia. Kasetę wkłada się wprost do drukarki.\n\nKolor nadaje się do podłoży bez połysku: winylu samolaminującego B-427 i tkaniny nylonowej B-499. Na liście zastosowań są kody kreskowe i płytki drukowane, a także wyposażenie, instalacje elektryczne, magazyn i laboratorium. Kaseta pracuje w drukarce i7500, także w odmianie RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r4500-ribbon-for-i7500-label-printer-cps-5042010',
  images: ['/images/products/brady/i75-r4500-bl.png', '/images/products/brady/i75-r4500-rd.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z niebieską taśmą barwiącą w niebieskiej obudowie i z rozwiniętym pasem taśmy',
    'Kaseta Brady i75 z czerwoną taśmą barwiącą w czerwonej obudowie i z rozwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R4500',
    formula: 'woskowo-żywiczna',
    kolor: 'niebieski, czerwony',
    szerokosc: '60, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    odpornosc: 'rozmazanie',
    zalecane: 'matowe i szorstkie materiały: winyl samolaminujący B-427, tkanina nylonowa B-499',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R4500, 'taśma barwiąca i75-R4500', true),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60 lub 110 mm', '300 m'),
    Kolor: KOLOR_TOOLTIP('Seria i75-R4500 występuje w kolorach niebieskim i czerwonym.'),
  },
  faq: [
    { question: 'Jakie szerokości ma taśma i75-R4500?', answer: 'Dostępne są szerokości 60 i 110 mm, każda w kolorze niebieskim i czerwonym. Długość taśmy w kasecie to 300 m.' },
    { question: 'Czym różni się i75-R4500 od i75-R4400?', answer: 'Seria R4500 ma formułę woskowo-żywiczną i dwa kolory. Seria i75-R4400 jest żywiczna i oprócz niebieskiego i czerwonego ma także zielony i biały.' },
  ],
  applications: ['Kolorowe kody i oznaczenia na winylu', 'Znakowanie przewodów i urządzeń kolorem'],
}

// i75-R4900 (cps-5042011)
const I75_R4900: Wiersz[] = [
  ['i75-R4902', '60', '300'],
  ['i75-R4900', '83', '300'],
]

export const bradyI75R4900: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r4900',
  slug: 'brady-i75-r4900',
  name: 'Taśma barwiąca Brady i75-R4900 żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R4900 — czarna żywiczna taśma barwiąca do i7500',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady i75-R4900 do drukarki Brady i7500: odporna na rozpuszczalniki i zarysowania, 60 i 83 mm × 300 m. PN: i75-R4902, i75-R4900.',
  shortDescription: 'Brady i75-R4900 to czarna bezhalogenowa taśma żywiczna w kasecie, szeroka na 60 lub 83 mm i długa na 300 m. Do drukarki Brady i7500.',
  description: 'Taśma i75-R4900 jest czarna, żywiczna i bezhalogenowa. Wydruk wytrzymuje rozpuszczalniki, rozmazywanie, zarysowania i wysoką temperaturę. Kaseta ustawia taśmę samoczynnie, więc strona z farbą zawsze przylega do etykiety. Taśma ma jeden kolor.\n\nSeria ma tylko dwie wersje: 60 mm i 83 mm. Obie wypełnia po 300 m taśmy. Kaseta z oznaczeniem Smart Cell jest pakowana pojedynczo.\n\nTaśma pasuje do znakowania przewodów, elementów instalacji, płytek drukowanych i wyposażenia. Używa się jej także do etykiet z kodami kreskowymi, oznaczeń w laboratorium i do identyfikacji zapasów oraz przeglądów. Drukarka i7500 przyjmuje ją zarówno w modelu bez RFID, jak i z RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r4900-ribbon-for-i7500-label-printer-cps-5042011',
  images: ['/images/products/brady/i75-r4902.png', '/images/products/brady/i75-r4900.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 60 mm i z odwiniętym końcem taśmy',
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 83 mm na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R4900',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: '60, 83 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'rozpuszczalniki, rozmazanie, zarysowania, wysoka temperatura',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R4900, 'czarna taśma barwiąca i75-R4900'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60 lub 83 mm', '300 m'),
  },
  faq: [
    { question: 'Jakie wydruki daje taśma i75-R4900?', answer: 'Czarne, odporne na rozpuszczalniki, rozmazanie, zarysowania i wysoką temperaturę. Taśma jest bezhalogenowa.' },
    { question: 'W jakich szerokościach jest i75-R4900?', answer: 'W szerokościach 60 i 83 mm. Kaseta zawiera 300 m taśmy i pasuje do drukarki [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ZASTOSOWANIA_I75,
}

// i75-R6000HF (cps-5042012)
const I75_R6000: Wiersz[] = [
  ['i75-R6006', '40', '300'],
  ['i75-R6000', '60', '300'],
  ['i75-R6002', '83', '300'],
  ['i75-R6007', '110', '300'],
]

export const bradyI75R6000: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6000',
  slug: 'brady-i75-r6000',
  name: 'Taśma barwiąca Brady i75-R6000 bezhalogenowa żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6000 — bezhalogenowa taśma barwiąca do i7500',
  seoDescription: 'Czarna bezhalogenowa taśma barwiąca Brady i75-R6000 do drukarki Brady i7500: żywica o wysokiej gęstości, 40–110 mm × 300 m. PN: i75-R6006, i75-R6000, i75-R6002.',
  shortDescription: 'Brady i75-R6000 to czarna bezhalogenowa taśma z żywicą o wysokiej gęstości, w szerokościach od 40 do 110 mm i długości 300 m. Do drukarki Brady i7500.',
  description: 'Seria i75-R6000 łączy bezhalogenowy skład z żywicą o wysokiej gęstości. Wydruk jest wyjątkowo odporny na zarysowania, a także na rozpuszczalniki i ciepło. Kaseta centruje taśmę samoczynnie i zawsze zwraca farbę ku etykiecie.\n\nWarstwa barwna jest tu grubsza niż zwykle i wynosi 0,008 mm, czyli prawie dwa razy tyle co w większości taśm i75. Rolka ma 300 m, a szerokości zaczynają się od 40 mm i kończą na 110 mm. Kolor jest czarny. W opakowaniu znajduje się jedna kaseta.\n\nTaśma pasuje do etykiet z poliestru o wysokim połysku, przykładowo B-423 lub B-483. Obsługuje znakowanie przewodów, płytek drukowanych i urządzeń, a także oznaczenia laboratoryjne i kody kreskowe. Kaseta pracuje w drukarce i7500, zwykłej i RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6000-ribbon-for-i7500-label-printer-cps-5042012',
  images: ['/images/products/brady/i75-r6006.png', '/images/products/brady/i75-r6002.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z wąską czarną taśmą barwiącą na niebieskiej piaście i z rozwiniętym pasem taśmy',
    'Kaseta Brady i75 z szeroką czarną taśmą barwiącą i z rozwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6000HF',
    formula: 'żywica o wysokiej gęstości',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,008 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'rozpuszczalniki, zarysowania, wysoka temperatura',
    zalecane: 'błyszczące i gładkie materiały: poliester B-483, poliester B-423',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6000, 'czarna taśma barwiąca i75-R6000'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Dlaczego taśma i75-R6000 jest grubsza od innych?', answer: 'Warstwa barwiąca ma 0,008 mm grubości, a w większości serii i75 jest to 0,0045 mm. Taśma jest bezhalogenowa i odporna na zarysowania.' },
    { question: 'Na jakich materiałach drukuje się taśmą i75-R6000?', answer: 'Na materiałach błyszczących i bardzo gładkich, na przykład na poliestrze B-483 i B-423. Kaseta pasuje do drukarki [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ZASTOSOWANIA_I75,
}

// i75-R6200 (cps-5042013)
const I75_R6200: Wiersz[] = [
  ['i75-R6206', '40', '300'],
  ['i75-R6200', '60', '300'],
  ['i75-R6202', '83', '300'],
  ['i75-R6207', '110', '300'],
]

export const bradyI75R6200: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6200',
  slug: 'brady-i75-r6200',
  name: 'Taśma barwiąca Brady i75-R6200 żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6200 — żywiczna taśma barwiąca do drukarki i7500',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady i75-R6200 do drukarki Brady i7500: odporna na ścieranie, chemikalia i ciepło, 40–110 mm × 300 m. PN: i75-R6206, i75-R6202.',
  shortDescription: 'Brady i75-R6200 to czarna bezhalogenowa taśma żywiczna w kasecie, odporna na ścieranie, chemikalia i ciepło. Do drukarki Brady i7500.',
  description: 'Czarna taśma i75-R6200 ma żywiczną formułę i nie zawiera halogenów. Wydruk znosi ścieranie, chemikalia i wysoką temperaturę. Kasetę wkłada się do drukarki bez ustawiania, bo taśma sama się centruje i zawsze obraca farbę ku etykiecie.\n\nSzerokość kasety wybiera się spośród czterech wartości: 40, 60, 83 albo 110 mm. Długość taśmy to 300 m. Farba leży po stronie zewnętrznej rolki. Opakowanie mieści jedną kasetę z taśmą jednokolorową.\n\nTaśmę dobrano do podłoży o różnym wykończeniu: błyszczących, gładkich i półmatowych. Wymieniono dla niej repozycjonowalną tkaninę winylową B-498 i metalizowany poliester B-486. Pasuje do przewodów, urządzeń, płytek drukowanych, próbek, telekomunikacji i kodów kreskowych. Kasety są przeznaczone do drukarki i7500 w wersji zwykłej i RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6200-ribbon-for-i7500-label-printer-cps-5042013',
  images: ['/images/products/brady/i75-r6200.png', '/images/products/brady/i75-r6207.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 60 mm i z odwiniętym pasem taśmy',
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 110 mm na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6200',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'ścieranie, chemikalia, wysoka temperatura',
    zalecane: 'błyszczące, gładkie i półmatowe materiały: repozycjonowalna tkanina winylowa B-498, metalizowany poliester B-486',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6200, 'czarna taśma barwiąca i75-R6200'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Do jakich materiałów pasuje taśma i75-R6200?', answer: 'Do materiałów błyszczących, gładkich i półmatowych, takich jak repozycjonowalna tkanina winylowa B-498 i metalizowany poliester B-486.' },
    { question: 'W jakich drukarkach można użyć kaset i75-R6200?', answer: 'W drukarce [Brady i7500](/produkt/brady-i7500), także w wersji RFID. Kaseta ma oznaczenie Smart Cell.' },
  ],
  applications: ZASTOSOWANIA_I75,
}

// i75-R6300 (cps-5042014)
const I75_R6300: Wiersz[] = [
  ['i75-R6306', '40', '300'],
  ['i75-R6300', '60', '300'],
  ['i75-R6302', '83', '300'],
  ['i75-R6307', '110', '300'],
]

export const bradyI75R6300: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6300',
  slug: 'brady-i75-r6300',
  name: 'Taśma barwiąca Brady i75-R6300 żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6300 — taśma barwiąca żywiczna do drukarki i7500',
  seoDescription: 'Czarna taśma barwiąca Brady i75-R6300 do drukarki Brady i7500: żywica odporna na rozpuszczalniki i zarysowania, 40–110 mm × 300 m. PN: i75-R6306, i75-R6300.',
  shortDescription: 'Brady i75-R6300 to czarna bezhalogenowa taśma żywiczna w kasecie, szeroka od 40 do 110 mm i długa na 300 m. Do drukarki Brady i7500.',
  description: 'Czarna żywica w serii i75-R6300 znosi rozpuszczalniki, zarysowania i ciepło. Nie zawiera halogenów. Ułożeniem taśmy w drukarce zajmuje się kaseta, która ją centruje. Taśma jest jednokolorowa.\n\nZakres szerokości rozciąga się od 40 do 110 mm, a kasety 60 i 83 mm leżą pomiędzy skrajnymi. W jednej rolce jest 300 m taśmy. Kaseta ma oznaczenie Smart Cell, a w opakowaniu jest jedna sztuka.\n\nSeria odpowiada etykietom z poliestru o wysokim połysku. Chodzi o trwały B-423 i B-483 o bardzo mocnym kleju. Wymienione zastosowania to kody kreskowe i etykiety na płytki drukowane. Zastosować ją można w drukarce i7500, także w modelu z RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6300-ribbon-for-i7500-label-printer-cps-5042014',
  images: ['/images/products/brady/i75-r6306.png', '/images/products/brady/i75-r6302.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z wąską czarną taśmą barwiącą i z niebieską piastą na białym tle',
    'Kaseta Brady i75 z szerszą czarną taśmą barwiącą i z odwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6300',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'rozpuszczalniki, zarysowania, wysoka temperatura',
    zalecane: 'błyszczące i gładkie materiały: poliester B-483, poliester B-423',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6300, 'czarna taśma barwiąca i75-R6300'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaka jest odporność wydruku z taśmy i75-R6300?', answer: 'Wydruk jest odporny na rozpuszczalniki, zarysowania i wysoką temperaturę. Taśma jest bezhalogenowa.' },
    { question: 'Z jaką drukarką pracuje taśma i75-R6300?', answer: 'Z drukarką [Brady i7500](/produkt/brady-i7500). Szerokości taśmy to 40, 60, 83 i 110 mm.' },
  ],
  applications: ['Etykiety z kodami kreskowymi', 'Etykiety na płytki drukowane'],
}

// i75-R6400 (cps-5042015)
const I75_R6400: Wiersz[] = [
  ['i75-R6406', '40', '300'],
  ['i75-R6400', '60', '300'],
  ['i75-R6402', '83', '300'],
  ['i75-R6407', '110', '300'],
]

export const bradyI75R6400: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6400',
  slug: 'brady-i75-r6400',
  name: 'Taśma barwiąca Brady i75-R6400 żywiczna do materiałów chemoodpornych w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6400 — taśma do etykiet chemoodpornych, i7500',
  seoDescription: 'Czarna taśma barwiąca Brady i75-R6400 do drukarki Brady i7500: żywica do materiałów B-492 i B-481, 40–110 mm × 300 m. PN: i75-R6406, i75-R6402.',
  shortDescription: 'Brady i75-R6400 to czarna taśma z żywicą o wysokiej gęstości, przeznaczona do materiałów odpornych na chemikalia, w szerokościach od 40 do 110 mm. Do drukarki Brady i7500.',
  description: 'Taśma i75-R6400 to czarna żywica o wysokiej gęstości w kasecie serii i75. Nadruk wytrzymuje działanie rozpuszczalników, zarysowania oraz wysokie temperatury. Taśma sama się centruje, a farba zawsze zwraca się w stronę etykiety. Skład jest bezhalogenowy.\n\nDo wyboru są wersje 40, 60, 83 lub 110 mm. Taśma ma 300 m. W opakowaniu jest jedna kaseta o oznaczeniu Smart Cell.\n\nTa seria jest dobierana do materiałów, które same mają odporność na chemikalia. Przykłady to poliester B-492 Frozen Surface i chemoodporny poliester B-481. Nadruk pasuje więc do znakowania urządzeń, przewodów i próbek, które mają kontakt z agresywnymi substancjami. Pasuje do drukarki i7500 i jej wersji RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6400-ribbon-for-i7500-label-printer-cps-5042015',
  images: ['/images/products/brady/i75-r6406.png', '/images/products/brady/i75-r6402.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z wąską czarną taśmą barwiącą, niebieską piastą i odwiniętym końcem taśmy',
    'Kaseta Brady i75 z szeroką czarną taśmą barwiącą i rozwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6400',
    formula: 'żywica o wysokiej gęstości',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'rozpuszczalniki, zarysowania, wysoka temperatura',
    zalecane: 'materiały chemoodporne: poliester B-492 Frozen Surface, chemoodporny poliester B-481',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6400, 'czarna taśma barwiąca i75-R6400'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Z jakimi materiałami łączy się taśmę i75-R6400?', answer: 'Z materiałami odpornymi na chemikalia, na przykład z poliestrem B-492 Frozen Surface i z chemoodpornym poliestrem B-481.' },
    { question: 'Czy taśma i75-R6400 pasuje do drukarek innych niż i7500?', answer: 'Dane taśmy wskazują tylko [Brady i7500](/produkt/brady-i7500) w wersji standardowej i RFID.' },
  ],
  applications: ['Znakowanie urządzeń w kontakcie z chemikaliami', 'Oznaczanie próbek i przewodów'],
}

// i75-R6600 (cps-5042016)
const I75_R6600: Wiersz[] = [
  ['i75-R6606', '40', '300'],
  ['i75-R6600', '60', '300'],
  ['i75-R6602', '83', '300'],
  ['i75-R6607', '110', '300'],
]

export const bradyI75R6600: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6600',
  slug: 'brady-i75-r6600',
  name: 'Taśma barwiąca Brady i75-R6600 do koszulek termokurczliwych w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6600 — taśma do koszulek PermaSleeve, drukarka i7500',
  seoDescription: 'Czarna taśma Brady i75-R6600 do koszulek PermaSleeve w drukarce Brady i7500: odporna na olej napędowy, 40–110 mm × 300 m. PN: i75-R6606, i75-R6602.',
  shortDescription: 'Brady i75-R6600 to czarna żywiczna taśma do koszulek termokurczliwych PermaSleeve, odporna na olej napędowy, w szerokościach od 40 do 110 mm. Do drukarki Brady i7500.',
  description: 'Seria i75-R6600 jest przeznaczona do druku na koszulkach termokurczliwych PermaSleeve. Żywica daje napis odporny na olej napędowy. Taśma jest bezhalogenowa, a kaseta centruje ją samoczynnie. Wydruk ma jeden kolor, czarny.\n\nSzerokość dobiera się do koszulki: 40 mm, 60 mm, 83 mm albo 110 mm. Rolka ma 300 m. Kolor wydruku jest czarny. Jedna kaseta tworzy jedno opakowanie.\n\nKoszulki, do których ją przewidziano, mają numery materiału B-7647, B-7646, B-7642, B-7641 i B-342. Zastosowania to znakowanie przewodów i kabli, urządzeń oraz instalacji elektrycznych i telekomunikacyjnych. Taśma pracuje w drukarce i7500 w obu odmianach, zwykłej i RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6600-ribbon-for-i7500-label-printer-cps-5042016',
  images: ['/images/products/brady/i75-r6606.png', '/images/products/brady/i75-r6602.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z czarną taśmą barwiącą do koszulek, z odwiniętym końcem taśmy',
    'Kaseta Brady i75 z szeroką czarną taśmą barwiącą do koszulek PermaSleeve na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6600',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'olej napędowy',
    zalecane: 'koszulki termokurczliwe PermaSleeve: B-342, B-7641, B-7642, B-7646, B-7647',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6600, 'czarna taśma barwiąca i75-R6600'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Na jakich koszulkach drukuje się taśmą i75-R6600?', answer: 'Na koszulkach termokurczliwych PermaSleeve o numerach materiału B-342, B-7641, B-7642, B-7646 i B-7647.' },
    { question: 'Jakiej odporności dotyczy seria R6600?', answer: 'Wydruk jest odporny na olej napędowy. Taśma jest żywiczna i bezhalogenowa, a kaseta pasuje do drukarki [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Opisy koszulek termokurczliwych na przewodach', 'Znakowanie kabli i instalacji telekomunikacyjnych'],
}

// i75-R6800 (cps-5042018)
const I75_R6800: Wiersz[] = [
  ['i75-R6800-WT', '60', '300'],
  ['i75-R6802-WT', '83', '300'],
  ['i75-R6807-WT', '110', '300'],
]

export const bradyI75R6800: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6800',
  slug: 'brady-i75-r6800',
  name: 'Biała taśma barwiąca Brady i75-R6800 do ciemnych koszulek PermaSleeve w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6800 — biała taśma na ciemne koszulki, drukarka i7500',
  seoDescription: 'Biała taśma Brady i75-R6800 do drukarki Brady i7500: biały nadruk na ciemnych koszulkach PermaSleeve HT, 60–110 mm × 300 m. PN: i75-R6800-WT, i75-R6802-WT.',
  shortDescription: 'Brady i75-R6800 to biała żywiczna taśma barwiąca do białego nadruku na ciemnych koszulkach PermaSleeve HT. Do drukarki Brady i7500.',
  description: 'Taśma i75-R6800 drukuje na biało. Biała żywica jest przeznaczona do ciemnych koszulek PermaSleeve HT, na których czarny napis byłby niewidoczny. Taśma jest bezhalogenowa, a kaseta sama się centruje i zwraca farbę ku materiałowi.\n\nSzerokości to 60 mm, 83 mm i 110 mm. W kasecie jest 300 m taśmy. Grubość wynosi 0,0057 mm i jest większa niż w czarnych seriach R4300 czy R6300. Kaseta ma oznaczenie Smart Cell i jest pakowana pojedynczo.\n\nSeria przewidziana jest dla ciemnych materiałów termokurczliwych, na przykład czarnej wysokotemperaturowej koszulki PermaSleeve B-345. Wśród zastosowań są też kody kreskowe i płytki drukowane. Taśma pracuje w drukarce i7500 i w jej odmianie RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6800-ribbon-for-i7500-label-printer-cps-5042018',
  images: ['/images/products/brady/i75-r6802-wt.png', '/images/products/brady/i75-r6800-wt.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z białą taśmą barwiącą na białej obudowie i z odwiniętym pasem taśmy',
    'Kaseta Brady i75 z białą taśmą barwiącą i niebieską piastą na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6800',
    formula: 'biała żywica',
    kolor: 'biały',
    szerokosc: '60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0057 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'ciemne koszulki termokurczliwe PermaSleeve HT, na przykład czarna B-345',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6800, 'biała taśma barwiąca i75-R6800'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 83 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Do czego służy biała taśma i75-R6800?', answer: 'Do białego nadruku na ciemnych koszulkach termokurczliwych PermaSleeve HT, na przykład na czarnej koszulce B-345.' },
    { question: 'Z jaką drukarką pracuje i75-R6800?', answer: 'Z drukarką [Brady i7500](/produkt/brady-i7500). Kaseta zawiera 300 m taśmy, a szerokości to 60, 83 i 110 mm.' },
  ],
  applications: ['Biały napis na czarnych koszulkach termokurczliwych', 'Znakowanie przewodów w instalacjach wysokotemperaturowych'],
}

// i75-R7950 (cps-5057002)
const I75_R7950: Wiersz[] = [
  ['i75-R7950-40X300', '40', '300'],
  ['i75-R7950-60X300', '60', '300'],
  ['i75-R7950-110X300', '110', '300'],
]

export const bradyI75R7950: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r7950',
  slug: 'brady-i75-r7950',
  name: 'Taśma barwiąca Brady i75-R7950 woskowo-żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R7950 — czarna taśma woskowo-żywiczna do i7500',
  seoDescription: 'Czarna taśma barwiąca Brady i75-R7950 do drukarki Brady i7500: bezhalogenowa, woskowo-żywiczna, 40–110 mm × 300 m. PN: i75-R7950-40X300, i75-R7950-60X300.',
  shortDescription: 'Brady i75-R7950 to czarna bezhalogenowa taśma woskowo-żywiczna na poliestrze w kasecie, w szerokościach 40, 60 i 110 mm. Do drukarki Brady i7500.',
  description: 'Seria i75-R7950 to czarna taśma woskowo-żywiczna na nośniku z poliestru. Jest bezhalogenowa. Kaseta centruje taśmę samoczynnie, a strona z farbą zawsze zwraca się do etykiety. Taśma jest jednokolorowa.\n\nWersje różnią się szerokością: 40, 60 albo 110 mm. Każda rolka liczy 300 m taśmy. Sprzedaje się ją po jednej kasecie.\n\nKaseta pasuje do drukarki i7500 (także z modułem RFID). Ta sama drukarka obsługuje serie R4300 i R6300, dostępne w szerokościach od 40 do 110 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r7950-ribbon-for-i7500-label-printer-cps-5057002',
  images: ['/images/products/brady/i75-r7950-40x300.png', '/images/products/brady/i75-r7950-110x300.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z wąską czarną taśmą barwiącą i odwiniętym końcem taśmy na białym tle',
    'Kaseta Brady i75 z najszerszą czarną taśmą barwiącą i rozwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R7950',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '40, 60, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R7950, 'czarna taśma barwiąca i75-R7950'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('40, 60 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Z czego wykonana jest taśma i75-R7950?', answer: 'Nośnikiem jest poliester, a warstwa barwiąca ma formułę woskowo-żywiczną. Taśma jest czarna i bezhalogenowa.' },
    { question: 'Jakie szerokości ma seria i75-R7950?', answer: 'Szerokości to 40, 60 i 110 mm, a długość taśmy 300 m. Kasety pasują do drukarki [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Etykiety w druku czarnym', 'Znakowanie przewodów i urządzeń'],
}

// i75-R7961 (cps-5057006)
const I75_R7961: Wiersz[] = [
  ['i75-R7961-60X300', '60', '300'],
  ['i75-R7961-110X300', '110', '300'],
]

export const bradyI75R7961: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r7961',
  slug: 'brady-i75-r7961',
  name: 'Taśma barwiąca Brady i75-R7961 woskowa w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R7961 — czarna taśma woskowa do drukarki i7500',
  seoDescription: 'Czarna woskowa taśma barwiąca Brady i75-R7961 do drukarki Brady i7500: bezhalogenowa, poliestrowa, 60 i 110 mm × 300 m. PN: i75-R7961-60X300, i75-R7961-110X300.',
  shortDescription: 'Brady i75-R7961 to czarna bezhalogenowa taśma woskowa na poliestrze w kasecie, szeroka na 60 lub 110 mm. Do drukarki Brady i7500.',
  description: 'Taśma i75-R7961 ma woskową formułę i czarny kolor. Nośnik jest z poliestru, a cały wyrób jest bezhalogenowy. Kaseta serii i75 centruje taśmę samoczynnie i ustawia farbę w stronę etykiety. Wydruk jest jednokolorowy.\n\nDo wyboru jest szerokość 60 albo 110 mm. W obu wersjach nawinięto 300 m taśmy. Farba leży na zewnątrz.\n\nObsługuje ją drukarka i7500, zarówno zwykła, jak i RFID. Obok niej pracują czarne taśmy żywiczne, na przykład i75-R6200. Oznaczenie Smart Cell nosi każda kaseta tej serii.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r7961-ribbon-for-i7500-label-printer-cps-5057006',
  images: ['/images/products/brady/i75-r7961-60x300.png', '/images/products/brady/i75-r7961-110x300.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 60 mm i z odwiniętym pasem taśmy',
    'Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 110 mm na białym tle',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R7961',
    formula: 'woskowa',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '60, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R7961, 'czarna taśma barwiąca i75-R7961'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma i75-R7961?', answer: 'Woskową, na nośniku z poliestru. Taśma jest czarna i bezhalogenowa, a jej grubość to 0,0045 mm.' },
    { question: 'W której drukarce pracuje i75-R7961?', answer: 'W drukarce [Brady i7500](/produkt/brady-i7500), także w wersji RFID.' },
  ],
  applications: ['Etykiety w druku czarnym', 'Znakowanie urządzeń i przewodów'],
}

// i75-R7962 (pid-i75-r7962-110x300)
export const bradyI75R7962: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r7962-110x300',
  slug: 'brady-i75-r7962-110x300',
  name: 'Taśma barwiąca Brady i75-R7962 woskowa 110 mm × 300 m w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R7962-110X300 — taśma woskowa do drukarki i7500',
  seoDescription: 'Czarna woskowa taśma barwiąca Brady i75-R7962-110X300 do drukarki Brady i7500: poliester, bezhalogenowa, 110 mm × 300 m. PN: i75-R7962-110X300. Nr art. 322740.',
  shortDescription: 'Brady i75-R7962-110X300 to czarna woskowa taśma barwiąca w kasecie, szeroka na 110 mm i długa na 300 m. Do drukarki Brady i7500.',
  description: 'Kaseta i75-R7962-110X300 zawiera czarną taśmę woskową na poliestrze. Taśma jest bezhalogenowa i ma 0,0057 mm grubości, więc jest grubsza od wielu taśm serii i75.\n\nRolka ma 110 mm w poprzek i 300 m w długość. Farba leży po stronie zewnętrznej. Kaseta sama centruje taśmę i ma oznaczenie Smart Cell. Numer artykułu Brady to 322740.\n\nKaseta jest dla drukarki i7500 w obu odmianach. Węższe taśmy tej samej rodziny to i75-R7950 i i75-R7961. Wydruk jest jednokolorowy, a w opakowaniu jest jedna kaseta.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6700-ribbon-for-i7500-label-printer-pid-i75-r7962-110x300',
  images: ['/images/products/brady/i75-r7962-110x300.png'],
  imageDescriptions: ['Kaseta Brady i75 z czarną taśmą barwiącą o szerokości 110 mm i z rozwiniętym pasem taśmy'],
  specifications: specyfikacjaTasmy({
    pn: 'i75-R7962-110X300',
    artykul: '322740',
    typ: KASETA_I75,
    seria: 'i75-R7962',
    formula: 'woskowa',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '110 mm',
    dlugosc: '300 m',
    grubosc: '0,0057 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  faq: [
    { question: 'Jaka jest grubość taśmy i75-R7962-110X300?', answer: 'Warstwa barwiąca ma 0,0057 mm. Taśma jest woskowa, czarna i bezhalogenowa.' },
    { question: 'Do jakiej drukarki pasuje ta kaseta?', answer: 'Do drukarki [Brady i7500](/produkt/brady-i7500), w wersji standardowej i RFID.' },
  ],
  applications: ['Druk czarnych etykiet szerokich do 110 mm', 'Znakowanie urządzeń i przewodów'],
}

// i75-R6700 (pid-176771, pid-176772, pid-i75-r6707-wt)
const I75_R6700: Wiersz[] = [
  ['i75-R6700-WT', '60', '300'],
  ['i75-R6702-WT', '83', '300'],
  ['i75-R6707-WT', '110', '300'],
]

export const bradyI75R6700: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-i75-r6700',
  slug: 'brady-i75-r6700',
  name: 'Biała taśma barwiąca Brady i75-R6700 woskowo-żywiczna w kasecie do drukarki i7500',
  seoTitle: 'Brady i75-R6700 — biała taśma woskowo-żywiczna do drukarki i7500',
  seoDescription: 'Biała taśma barwiąca Brady i75-R6700 do drukarki Brady i7500: woskowo-żywiczna, na ciemne koszulki, 60–110 mm × 300 m. PN: i75-R6700-WT, i75-R6702-WT.',
  shortDescription: 'Brady i75-R6700 to biała bezhalogenowa taśma woskowo-żywiczna w kasecie, szeroka na 60, 83 lub 110 mm. Do drukarki Brady i7500.',
  description: 'Biała taśma i75-R6700 jest woskowo-żywiczna. Nadruk opiera się chemikaliom, zarysowaniom i smugom, a sama taśma jest bezhalogenowa. Kaseta sama ją centruje. Wydruk jest jednokolorowy.\n\nSzerokości: 60, 83 i 110 mm. Po 300 m taśmy zmieści każda kaseta, a farba jest zwrócona na zewnątrz rolki. Kolor wydruku: biały. Kaseta ma oznaczenie Smart Cell, w opakowaniu jest jedna sztuka.\n\nJasny nadruk zalecany jest na czarnych koszulkach PermaSleeve, w tym B-342 i B-344. Z podanych zastosowań na uwagę zasługują przewody, płytki, próbki laboratoryjne, kody kreskowe i identyfikacja ogólna. Do i7500 w odmianie RFID pasuje tak samo jak do modelu podstawowego.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/i75-series-r6700-ribbon-for-i7500-label-printer-pid-176771',
  images: ['/images/products/brady/i75-r6700-wt.png', '/images/products/brady/i75-r6702-wt.png'],
  imageDescriptions: [
    'Kaseta Brady i75 z białą taśmą barwiącą i niebieską piastą na białym tle',
    'Kaseta Brady i75 z białą taśmą barwiącą o szerokości 83 mm i z odwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: KASETA_I75,
    seria: 'i75-R6700',
    formula: 'woskowo-żywiczna',
    kolor: 'biały',
    szerokosc: '60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'chemikalia, zarysowania, rozmazanie',
    zalecane: 'ciemne koszulki termokurczliwe PermaSleeve, na przykład czarne B-342 i B-344',
    gilza: '25,4 mm',
    format: FORMAT_I75,
    smartCell: true,
    drukarki: DRUKARKA_I7500,
  }),
  variants: wariantyTasmy(I75_R6700, 'biała taśma barwiąca i75-R6700'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 83 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Na czym drukuje się białą taśmą i75-R6700?', answer: 'Na ciemnych materiałach, na przykład na czarnych koszulkach termokurczliwych PermaSleeve B-342 i B-344.' },
    { question: 'Czy taśma i75-R6700 jest bezhalogenowa?', answer: 'Tak. Ma formułę woskowo-żywiczną i jest przeznaczona do drukarki [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Biały napis na czarnych koszulkach', 'Znakowanie przewodów i płytek drukowanych'],
}

// ---------------------------------------------------------------------------
// Taśmy na gilzie 25,4 mm do drukarek na rolki (i6100, i7100, i7500)
// ---------------------------------------------------------------------------

const RDZEN_25 = 'rolka taśmy na gilzie, warstwa barwiąca na zewnątrz'
const TYP_25 = 'Rolka taśmy barwiącej do druku termotransferowego'

// R6700, gilza 25,4 mm (cps-4394051)
const R6700: Wiersz[] = [
  ['110556', '60', '300'],
  ['110554', '83', '300'],
]

export const bradyR6700: Product = {
  ...wspolneTHT,
    id: 'brady-r6700',
  slug: 'brady-r6700',
  name: 'Biała taśma barwiąca Brady R6700 (gilza 25 mm) do drukarek i6100, i7100 i i7500',
  seoTitle: 'Brady R6700 — biała taśma barwiąca do i6100, i7100, i7500',
  seoDescription: 'Biała taśma barwiąca Brady R6700 do drukarek Brady i6100, i7100 i i7500: woskowo-żywiczna, 60 i 83 mm × 300 m. PN: 110556, 110554. Gilza 25,4 mm.',
  shortDescription: 'Brady R6700 to biała bezhalogenowa taśma woskowo-żywiczna na poliestrze, w szerokościach 60 i 83 mm i długości 300 m. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Biała taśma R6700 pozwala drukować jasny napis na ciemnych materiałach. Ma formułę woskowo-żywiczną i nośnik z poliestru. Jest bezhalogenowa i sprzedawana jako rolka bez kasety.\n\nDo wyboru są rolki 60 mm i 83 mm szerokości, obie o długości 300 m.\n\nSeria obsługuje wiele zastosowań, od etykiet z kodami kreskowych po łączność i telekomunikację, instalacje elektryczne, kontrolę zapasów, laboratorium i znakowanie przewodów. Pasuje do drukarek i6100, i7100 i i7500, także do wersji RFID. W opakowaniu jest jedna rolka. Biały nadruk R6700 zaleca się na czarnych koszulkach B-342 i B-344.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r6700-series-printer-ribbon-cps-4394051',
  images: ['/images/products/brady/r6700-wt.png', '/images/products/brady/r6702-wt.png'],
  imageDescriptions: [
    'Rolka białej taśmy barwiącej Brady na tekturowej gilzie, widok z boku',
    'Szersza rolka białej taśmy barwiącej Brady na tekturowej gilzie',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6700',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'biały',
    szerokosc: '60, 83 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'ciemne koszulki termokurczliwe, na przykład czarne B-342 i B-344',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i6100, i7100, i7500 (także i7500 RFID)',
  }),
  variants: wariantyTasmy(R6700, 'biała taśma barwiąca R6700'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60 lub 83 mm', '300 m'),
  },
  faq: [
    { question: 'Do czego służy biała taśma R6700?', answer: 'Do białego nadruku na ciemnych materiałach, na przykład przy oznaczaniu przewodów, urządzeń i płytek drukowanych.' },
    { question: 'Które drukarki obsługują taśmę R6700 na gilzie 25,4 mm?', answer: 'Taśma pasuje do [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Rolka ma gilzę 25,4 mm i jest szeroka na 60 lub 83 mm.' },
  ],
  applications: ['Biały nadruk na ciemnych materiałach', 'Oznaczanie przewodów i płytek drukowanych'],
}

// R6800-WT, gilza 25,4 mm (pid-110559)
export const bradyR6800WT: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i6100', 'brady-i7100'],
  id: 'brady-r6800-wt',
  slug: 'brady-r6800-wt',
  name: 'Biała taśma barwiąca Brady R6800-WT 60 mm × 300 m (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R6800-WT — biała taśma barwiąca do i6100 i i7100',
  seoDescription: 'Biała żywiczna taśma barwiąca Brady R6800-WT do drukarek Brady i6100 i i7100: bezhalogenowa, na poliestrze, 60 mm × 300 m. PN: R6800-WT. Nr art. 110559.',
  shortDescription: 'Brady R6800-WT to biała żywiczna taśma barwiąca na poliestrze, szeroka na 60 mm i długa na 300 m. Do drukarek Brady i6100 i i7100.',
  description: 'R6800-WT jest białą taśmą z formułą żywiczną. Nośnikiem jest poliester, a cały produkt jest bezhalogenowy. Numer artykułu Brady to 110559.\n\nRolka mierzy 60 mm × 300 m. Warstwa barwiąca ma 0,0057 mm, więc jest wyraźnie grubsza niż w białej taśmie woskowo-żywicznej R6700.\n\nTaśma jest wskazana do kodów kreskowych, płytek drukowanych, elementów i wyposażenia, telekomunikacji, instalacji elektrycznych, identyfikacji ogólnej, kontroli zapasów, laboratorium i oznaczania przewodów. Używa się jej w i6100 i i7100. Seria R6800 jest przeznaczona do białego nadruku na ciemnych koszulkach PermaSleeve HT, na przykład czarnej B-345.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/white-6800-series-thermal-transfer-printer-ribbon-pid-110559',
  images: ['/images/products/brady/r6800-wt.png'],
  imageDescriptions: ['Biała rolka taśmy barwiącej Brady na tekturowej gilzie, widok z boku'],
  specifications: specyfikacjaTasmy({
    pn: 'R6800-WT',
    artykul: '110559',
    typ: TYP_25,
    seria: 'R6800',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'biały',
    szerokosc: '60 mm',
    dlugosc: '300 m',
    grubosc: '0,0057 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'ciemne koszulki PermaSleeve HT, na przykład czarna B-345',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i6100, i7100',
  }),
  faq: [
    { question: 'Jaka jest grubość taśmy R6800-WT?', answer: 'Warstwa barwiąca ma 0,0057 mm. Taśma jest żywiczna, biała i bezhalogenowa.' },
    { question: 'Z jakimi drukarkami pracuje R6800-WT?', answer: 'Z drukarkami [Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100). Rolka ma gilzę 25,4 mm, 60 mm szerokości i 300 m długości.' },
  ],
  applications: ['Biały nadruk na ciemnych materiałach', 'Oznaczanie przewodów i urządzeń'],
}

// R4500-RD, gilza 25,4 mm (pid-055736)
export const bradyR4500RD: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i6100', 'brady-i7100'],
  id: 'brady-r4500-rd',
  slug: 'brady-r4500-rd',
  name: 'Czerwona taśma barwiąca Brady R4500-RD 60 mm × 300 m (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R4500-RD — czerwona taśma barwiąca do i6100 i i7100',
  seoDescription: 'Czerwona taśma barwiąca Brady R4500-RD do drukarek Brady i6100 i i7100: woskowo-żywiczna, na poliestrze, 60 mm × 300 m. PN: R4500-RD. Nr art. 055736.',
  shortDescription: 'Brady R4500-RD to czerwona taśma barwiąca woskowo-żywiczna na poliestrze, szeroka na 60 mm i długa na 300 m. Do drukarek Brady i6100 i i7100.',
  description: 'Taśma R4500-RD drukuje na czerwono. Formuła jest woskowo-żywiczna, a nośnik wykonano z poliestru. Numer artykułu Brady to 055736. Taśma jest jednokolorowa.\n\nRolka ma wymiary 60 mm × 300 m. Taśma daje jednokolorowy nadruk w odcieniu czerwonym.\n\nDla serii R4500 wskazano materiały B-427 i B-499, o powierzchni matowej lub szorstkiej. Rolka jest przeznaczona dla i6100 oraz i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/red-4500-series-thermal-transfer-printer-ribbon-pid-055736',
  images: ['/images/products/brady/r4500-rd.png'],
  imageDescriptions: ['Czerwona rolka taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy'],
  specifications: specyfikacjaTasmy({
    pn: 'R4500-RD',
    artykul: '055736',
    typ: TYP_25,
    seria: 'R4500',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czerwony',
    szerokosc: '60 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    zalecane: 'materiały B-427 i B-499 o powierzchni matowej lub szorstkiej',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i6100, i7100',
  }),
  faq: [
    { question: 'Z czego składa się czerwona taśma R4500-RD?', answer: 'Nośnikiem jest poliester, a warstwa barwiąca ma formułę woskowo-żywiczną. Grubość to 0,0045 mm.' },
    { question: 'W których drukarkach Brady działa R4500-RD?', answer: 'W drukarkach [Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100). Rolka ma 60 mm szerokości, 300 m długości i gilzę 25,4 mm.' },
  ],
  applications: ['Czerwony nadruk na etykietach', 'Wyróżnianie oznaczeń kolorem'],
}

// R6200, gilza 25,4 mm (cps-4394048)
const R6200: Wiersz[] = [
  ['R6202', '83', '300'],
  ['R6207', '110', '300'],
]

export const bradyR6200: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i6100', 'brady-i7100'],
  id: 'brady-r6200',
  slug: 'brady-r6200',
  name: 'Czarna taśma barwiąca Brady R6200 (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R6200 — czarna żywiczna taśma do i6100 i i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R6200 do drukarek Brady i6100 i i7100: bezhalogenowa, na poliestrze, 83 i 110 mm × 300 m. PN: R6202, R6207.',
  shortDescription: 'Brady R6200 to czarna bezhalogenowa taśma żywiczna na poliestrze, szeroka na 83 lub 110 mm i długa na 300 m. Do drukarek Brady i6100 i i7100.',
  description: 'Seria R6200 obejmuje czarne taśmy żywiczne na poliestrze. Są bezhalogenowe i sprzedawane jako rolki bez kasety. Nadruk powstaje wyłącznie z żywicy.\n\nWersja R6202 ma 83 mm szerokości (nr art. 054803), a R6207 ma 110 mm. W każdej jest 300 m taśmy.\n\nTaśmę przewidziano dla i6100 i i7100. Nadaje się też do podłoży półmatowych, między innymi do B-498 i B-486.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r6200-series-printer-ribbon-cps-4394048',
  images: ['/images/products/brady/r6202.png', '/images/products/brady/r6207.png'],
  imageDescriptions: [
    'Czarna rolka taśmy barwiącej Brady o szerokości 83 mm na tekturowej gilzie',
    'Czarna rolka taśmy barwiącej Brady o szerokości 110 mm na tekturowej gilzie z odwiniętym końcem',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6200',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'podłoża błyszczące, gładkie i półmatowe: B-498, B-486',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i6100, i7100',
  }),
  variants: wariantyTasmy(R6200, 'czarna taśma barwiąca R6200'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('83 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma R6200?', answer: 'Żywiczną. Nośnik jest z poliestru, a taśma jest czarna i bezhalogenowa.' },
    { question: 'Jakie drukarki obsługują taśmę R6200 na gilzie 25,4 mm?', answer: 'Taśma pasuje do drukarek [Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100). Szerokości to 83 i 110 mm.' },
  ],
  applications: ['Czarny nadruk na etykietach i koszulkach', 'Oznaczanie urządzeń i przewodów'],
}

const D61_71 = 'Brady i6100, i7100'
const LINKI_61_71 = '[Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100)'
const REL_61_71 = ['brady-i6100', 'brady-i7100']
const STRONA_FARBY = 'Strona farby'
const STRONA_FARBY_TOOLTIP = 'Strona rolki, na której leży warstwa barwiąca.\n\nWiększość rolek ma farbę na zewnątrz. Wybrane wersje mają ją po stronie wewnętrznej.'

// R4300, gilza 25,4 mm (cps-4394043)
const R4300: Wiersz[] = [
  ['R4311-25X300/O', '25,4', '300'],
  ['R4306-40X300/O', '40', '300'],
  ['R4302-60X300/O', '60', '300'],
  ['R4300-83X300/O', '83', '300'],
  ['R4307-110X300/O', '110', '300'],
]

export const bradyR4300: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r4300',
  slug: 'brady-r4300',
  name: 'Czarna taśma barwiąca Brady R4300 woskowo-żywiczna (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R4300 — taśma woskowo-żywiczna do drukarek i6100 i i7100',
  seoDescription: 'Czarna taśma barwiąca Brady R4300 do drukarek Brady i6100 i i7100: woskowo-żywiczna, na poliestrze, 25,4–110 mm × 300 m. PN: R4311-25X300/O, R4307-110X300/O.',
  shortDescription: 'Brady R4300 to czarna taśma woskowo-żywiczna na poliestrze, w pięciu szerokościach od 25,4 do 110 mm, po 300 m na rolce. Do drukarek Brady i6100 i i7100.',
  description: 'R4300 jest czarną taśmą do druku termotransferowego, w której warstwa barwiąca łączy wosk z żywicą. Nośnikiem jest poliester, a całość nie zawiera halogenów. Taśma trafia do drukarki jako rolka bez kasety.\n\nSzerokości zaczynają się od wąskiej taśmy 25,4 mm i sięgają 110 mm; pośrednie rozmiary to 40, 60 i 83 mm. Każda rolka ma 300 m długości, a pas ma jeden kolor.\n\nObsługują ją drukarki i6100 i i7100. Materiały B-427, B-342 i B-499, czyli winyl, koszulki i tkanina nylonowa o powierzchni matowej lub szorstkiej, są typowymi podłożami dla tej serii.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r4300-series-printer-ribbon-cps-4394043',
  images: ['/images/products/brady/r4311.png', '/images/products/brady/r4300.png'],
  imageDescriptions: [
    'Wąska rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Szersza rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z napisem na rdzeniu',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R4300',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '25,4, 40, 60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'matowe i szorstkie materiały: B-427, B-342, B-499',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R4300, 'czarna taśma barwiąca R4300'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 25,4 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma R4300?', answer: 'Woskowo-żywiczną. Warstwa barwiąca leży na poliestrze, jest czarna i nie zawiera halogenów.' },
    { question: 'W których drukarkach Brady używa się taśmy R4300?', answer: 'W drukarkach ' + LINKI_61_71 + '. Rolki mają gilzę 25,4 mm i do 110 mm szerokości.' },
  ],
  applications: ['Czarny nadruk na etykietach z rolki', 'Znakowanie przewodów i urządzeń'],
}

// R4400, gilza 25,4 mm (cps-4394044)
const R4400: Wiersz[] = [
  ['R4400BL-60X300/O', '60', '300', 'Niebieski'],
  ['R4400GR-60X300/O', '60', '300', 'Zielony'],
  ['R4400RD-60X300/O', '60', '300', 'Czerwony'],
  ['R4400WT-60X300/O', '60', '300', 'Biały'],
  ['R4402BL-83X300/O', '83', '300', 'Niebieski'],
  ['R4402GR-83X300/O', '83', '300', 'Zielony'],
  ['R4402RD-83X300/O', '83', '300', 'Czerwony'],
  ['R4402WT-83X300/O', '83', '300', 'Biały'],
  ['055759', '110', '300', 'Czerwony'],
  ['R4407WT-110X300/O', '110', '300', 'Biały'],
]

export const bradyR4400: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r4400',
  slug: 'brady-r4400',
  name: 'Kolorowe taśmy barwiące Brady R4400 żywiczne (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R4400 — kolorowe taśmy barwiące do drukarek i6100 i i7100',
  seoDescription: 'Kolorowe taśmy barwiące Brady R4400 do drukarek Brady i6100 i i7100: żywica, cztery kolory, 60–110 mm × 300 m. PN: R4400BL-60X300/O, R4407WT-110X300/O.',
  shortDescription: 'Brady R4400 to żywiczne taśmy barwiące w kolorach niebieskim, zielonym, czerwonym i białym, w szerokościach 60, 83 i 110 mm. Do drukarek Brady i6100 i i7100.',
  description: 'Seria R4400 zastępuje czerń kolorem. Rolki są niebieskie, zielone, czerwone albo białe, a warstwa barwiąca ma formułę żywiczną. Taśmę sprzedaje się bez kasety, po jednej rolce w opakowaniu.\n\nDwie węższe szerokości, 60 i 83 mm, mają po cztery kolory. Szerokość 110 mm występuje w kolorze czerwonym i białym. Wszystkie rolki liczą 300 m.\n\nKolor wydruku odpowiada kolorowi rolki. Taśma pracuje w i6100 i i7100 i najlepiej współpracuje z poliestrami o gładkiej, błyszczącej powierzchni, na przykład B-483 i B-423.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r4400-series-printer-ribbon-cps-4394044',
  images: ['/images/products/brady/r4400-bl.png', '/images/products/brady/r4400-rd.png'],
  imageDescriptions: [
    'Rolka niebieskiej taśmy barwiącej Brady na białej gilzie z odwiniętym końcem taśmy',
    'Rolka czerwonej taśmy barwiącej Brady na białej gilzie z odwiniętym końcem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R4400',
    formula: 'żywiczna',
    kolor: 'niebieski, zielony, czerwony, biały',
    szerokosc: '60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    zalecane: 'gładkie i błyszczące poliestry: B-483, B-423',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R4400, 'taśma barwiąca R4400', true),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 83 lub 110 mm', '300 m'),
    Kolor: KOLOR_TOOLTIP('Seria R4400 występuje w kolorach niebieskim, zielonym, czerwonym i białym. Zielonej taśmy nie ma w szerokości 110 mm.'),
  },
  faq: [
    { question: 'Jakie kolory ma taśma R4400?', answer: 'Niebieski, zielony, czerwony i biały. W szerokości 110 mm dostępne są tylko czerwona i biała.' },
    { question: 'Z którymi drukarkami współpracuje R4400?', answer: 'Z drukarkami ' + LINKI_61_71 + '. Taśma ma formułę żywiczną i grubość 0,0045 mm.' },
  ],
  applications: ['Kolorowy nadruk na etykietach z rolki', 'Oznaczenia wyróżnione kolorem'],
}

// R4700, gilza 25,4 mm (cps-4394046)
const R4700: Wiersz[] = [
  ['R4706-40X300/O', '40', '300'],
  ['R4702-60X300/O', '60', '300'],
  ['R4707-110X300/O', '110', '300'],
]

export const bradyR4700: Product = {
  ...wspolneTHT,
  id: 'brady-r4700',
  slug: 'brady-r4700',
  name: 'Czarna taśma barwiąca Brady R4700 żywiczna (gilza 25 mm) do drukarek i6100, i7100 i i7500',
  seoTitle: 'Brady R4700 — żywiczna taśma barwiąca do i6100, i7100, i7500',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R4700 do drukarek Brady i6100, i7100 i i7500: bezhalogenowa, 40, 60 i 110 mm × 300 m. PN: R4706-40X300/O, R4707-110X300/O.',
  shortDescription: 'Brady R4700 to czarna bezhalogenowa taśma żywiczna na poliestrze, w szerokościach 40, 60 i 110 mm, po 300 m na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Taśma R4700 tworzy czarny, żywiczny nadruk. Warstwa nośna jest z poliestru, a produkt nie zawiera halogenów. Dostarcza się ją na rolce, bez kasety.\n\nDo wyboru są trzy rolki: 40, 60 i 110 mm szerokości, po 300 m długości.\n\nTrzy drukarki, i6100, i7100 oraz i7500 (także z RFID), przyjmują tę taśmę.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r4700-series-printer-ribbon-cps-4394046',
  images: ['/images/products/brady/r4702.png', '/images/products/brady/r4706.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Wąska rolka czarnej taśmy barwiącej Brady na tekturowej gilzie',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R4700',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '40, 60, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i6100, i7100, i7500 (także i7500 RFID)',
  }),
  variants: wariantyTasmy(R4700, 'czarna taśma barwiąca R4700'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('40, 60 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Do których drukarek pasuje taśma R4700?', answer: 'Do drukarek [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Rolka ma gilzę 25,4 mm.' },
    { question: 'Jaką formułę ma taśma R4700?', answer: 'Żywiczną, na nośniku z poliestru. Taśma jest czarna i bezhalogenowa.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach z rolki', 'Znakowanie przewodów i urządzeń'],
}

// R4900, gilza 25,4 mm (cps-4394047)
const R4900: Wiersz[] = [
  ['R4902-60X300/O', '60', '300'],
  ['R4900-83X300/O', '83', '300'],
  ['R4907-110X300/O', '110', '300'],
]

export const bradyR4900: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r4900',
  slug: 'brady-r4900',
  name: 'Czarna taśma barwiąca Brady R4900 żywiczna (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R4900 — czarna taśma żywiczna do drukarek i6100 i i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R4900 do drukarek Brady i6100 i i7100: bezhalogenowa, 60, 83 i 110 mm × 300 m. PN: R4902-60X300/O, R4907-110X300/O.',
  shortDescription: 'Brady R4900 to czarna bezhalogenowa taśma żywiczna na poliestrze, w szerokościach 60, 83 i 110 mm, po 300 m na rolce. Do drukarek Brady i6100 i i7100.',
  description: 'Czarny nadruk żywiczny na rolkach R4900 powstaje z poliestru pokrytego warstwą barwiącą bez halogenów.\n\nRolki mają 60, 83 albo 110 mm szerokości, a każda liczy 300 m.\n\nTaśma jest używana w i6100 i i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r4900-series-printer-ribbon-cps-4394047',
  images: ['/images/products/brady/r4900.png', '/images/products/brady/r4902.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Czarna rolka taśmy barwiącej Brady z widocznym rdzeniem i odwiniętym pasem',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R4900',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R4900, 'czarna taśma barwiąca R4900'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 83 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Z czego składa się taśma R4900?', answer: 'Z poliestru z warstwą barwiącą o formule żywicznej. Taśma jest czarna i bezhalogenowa.' },
    { question: 'W jakich drukarkach pracuje R4900?', answer: 'W drukarkach ' + LINKI_61_71 + '. Rolki mają gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie urządzeń i przewodów'],
}

// R6400, gilza 25,4 mm (cps-4394049)
const R6400: Wiersz[] = [
  ['R6406-40X300/O', '40', '300'],
  ['R6400-60X300/O', '60', '300'],
  ['R6402-83X300/O', '83', '300'],
  ['R6407-110X300/O', '110', '300'],
]

export const bradyR6400: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r6400',
  slug: 'brady-r6400',
  name: 'Czarna taśma barwiąca Brady R6400 żywiczna (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R6400 — czarna taśma żywiczna do drukarek i6100 i i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R6400 do drukarek Brady i6100 i i7100: bezhalogenowa, 40–110 mm × 300 m. PN: R6406-40X300/O, R6407-110X300/O.',
  shortDescription: 'Brady R6400 to czarna bezhalogenowa taśma żywiczna na poliestrze, w czterech szerokościach od 40 do 110 mm, po 300 m na rolce. Do drukarek Brady i6100 i i7100.',
  description: 'Seria R6400 to czarna żywica na nośniku poliestrowym, wolna od halogenów.\n\nRolki zaczynają się od 40 mm, kończą na 110 mm, a każda ma 300 m.\n\nUżywają jej i6100 i i7100. Seria R6400 jest dobierana do materiałów chemoodpornych B-492 i B-481.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r6400-series-printer-ribbon-cps-4394049',
  images: ['/images/products/brady/r6400.png', '/images/products/brady/r6407.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Szeroka rolka czarnej taśmy barwiącej Brady na tekturowej gilzie',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6400',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'materiały chemoodporne: B-492, B-481',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R6400, 'czarna taśma barwiąca R6400'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jakie szerokości ma taśma R6400?', answer: 'Szerokości to 40, 60, 83 i 110 mm. Każda rolka ma 300 m długości.' },
    { question: 'Z jakimi drukarkami współpracuje R6400?', answer: 'Z drukarkami ' + LINKI_61_71 + '. Taśma jest żywiczna i bezhalogenowa.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach z rolki', 'Znakowanie przewodów i urządzeń'],
}

// R6600, gilza 25,4 mm (cps-4394050)
const R6600: Wiersz[] = [
  ['R6606-40X300/O', '40', '300'],
  ['R6600-60X300/O', '60', '300'],
  ['R6602-83X300/O', '83', '300'],
  ['R6607-110X300/O', '110', '300'],
]

export const bradyR6600: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r6600',
  slug: 'brady-r6600',
  name: 'Czarna taśma barwiąca Brady R6600 żywiczna (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R6600 — czarna taśma barwiąca do drukarek i6100 i i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R6600 do drukarek Brady i6100 i i7100: na poliestrze, bezhalogenowa, 40–110 mm × 300 m. PN: R6606-40X300/O, R6602-83X300/O.',
  shortDescription: 'Brady R6600 to czarna bezhalogenowa taśma żywiczna na poliestrze, w szerokościach od 40 do 110 mm, po 300 m na rolce. Do drukarek Brady i6100 i i7100.',
  description: 'Czarna, bezhalogenowa taśma R6600 ma żywiczną warstwę barwiącą na poliestrze.\n\nCztery szerokości, od 40 do 110 mm, występują w jednej długości: 300 m. Rolkę kupuje się pojedynczo.\n\nPasuje do i6100 i i7100. Jako podłoża zaleca się koszulki termokurczliwe o numerach materiału B-342, B-7646, B-7647, B-7641 i B-7642; nadruk wytrzymuje olej napędowy.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/thermal-transfer-25-mm-core-r6600-series-printer-ribbon-cps-4394050',
  images: ['/images/products/brady/r6600.png', '/images/products/brady/r6606.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Wąska rolka czarnej taśmy barwiącej Brady z widocznym rdzeniem',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6600',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: 'od 40 do 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'koszulki termokurczliwe B-342, B-7641, B-7642, B-7646, B-7647',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R6600, 'czarna taśma barwiąca R6600'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
  },
  faq: [
    { question: 'Z czego wykonana jest taśma R6600?', answer: 'Z poliestru z żywiczną warstwą barwiącą. Taśma jest czarna i bezhalogenowa.' },
    { question: 'W których drukarkach używa się R6600?', answer: 'W drukarkach ' + LINKI_61_71 + '. Gilza rolki ma 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R6300, gilza 25,4 mm (cps-4398824)
const R6300: Wiersz[] = [
  ['R6300HV-50X300/I', '50', '300', undefined, { [STRONA_FARBY]: 'Wewnątrz rolki' }],
  ['R6306-40X300/O', '40', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6300-60X300/O', '60', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6302-83X300/O', '83', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6307-110X300/O', '110', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
]

export const bradyR6300: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r6300',
  slug: 'brady-r6300',
  name: 'Czarna taśma barwiąca Brady R6300 żywiczna (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R6300 — czarna żywiczna taśma barwiąca do drukarki i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R6300 do drukarki Brady i7100: bezhalogenowa, na poliestrze, 40–110 mm × 300 m. PN: R6306-40X300/O, R6300HV-50X300/I.',
  shortDescription: 'Brady R6300 to czarna bezhalogenowa taśma żywiczna na poliestrze, w pięciu szerokościach od 40 do 110 mm, po 300 m na rolce. Do drukarki Brady i7100.',
  description: 'Taśma R6300 jest czarna, żywiczna i bezhalogenowa, a jej nośnikiem jest poliester.\n\nWersja R6300HV-50X300/I, szeroka na 50 mm, ma farbę po wewnętrznej stronie rolki. Pozostałe, szerokie od 40 do 110 mm, mają ją na zewnątrz. Każda zawiera 300 m taśmy.\n\nWskazano ją dla drukarki i7100. Jako podłoża dla serii R6300 podano poliester B-423 oraz B-483 z gładką powierzchnią.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r6300-printer-ribbon-cps-4398824',
  images: ['/images/products/brady/r6302.png', '/images/products/brady/r6300hv-50x300-i.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na białej gilzie z odwiniętym końcem taśmy',
    'Wąska rolka czarnej taśmy barwiącej Brady na tekturowej gilzie',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6300',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '40, 50, 60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki; wersja 50 mm wewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    zalecane: 'poliestry B-483 i B-423 o gładkiej powierzchni',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R6300, 'czarna taśma barwiąca R6300'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 40 do 110 mm', '300 m'),
    [STRONA_FARBY]: STRONA_FARBY_TOOLTIP,
  },
  faq: [
    { question: 'Którą wersję R6300 ma farbę po wewnętrznej stronie?', answer: 'Wersję R6300HV-50X300/I o szerokości 50 mm. Pozostałe rolki mają farbę na zewnątrz.' },
    { question: 'Do jakiej drukarki Brady pasuje R6300?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Rolki mają gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach z rolki', 'Znakowanie przewodów i urządzeń'],
}

// R6000HF, gilza 25,4 mm (cps-4398817, pid-323731, pid-196510)
const R6000HF: Wiersz[] = [
  ['R6000HF-30X300/O', '30', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6006HF-40X300/O', '40', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6000HF-60X300/O', '60', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6002HF-83X300/O', '83', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6007HF-110X300/O', '110', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki' }],
  ['R6002HF/I', '83', '300', undefined, { [STRONA_FARBY]: 'Wewnątrz rolki' }],
  ['R6002HF-PC', '83', '300', undefined, { [STRONA_FARBY]: 'Na zewnątrz rolki', Gilza: 'Plastikowa' }],
]

export const bradyR6000HF: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r6000hf',
  slug: 'brady-r6000hf',
  name: 'Czarna taśma barwiąca Brady R6000HF bezhalogenowa (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R6000HF — bezhalogenowa taśma do drukarek i6100 i i7100',
  seoDescription: 'Czarna bezhalogenowa taśma barwiąca Brady R6000HF do drukarek Brady i6100 i i7100: żywica, 30–110 mm × 300 m, odporna na ciepło. PN: R6002HF/I, R6002HF-PC.',
  shortDescription: 'Brady R6000HF to czarna bezhalogenowa taśma żywiczna na poliestrze, w szerokościach od 30 do 110 mm, po 300 m na rolce. Do drukarek Brady i6100 i i7100.',
  description: 'R6000HF to bezhalogenowa żywica na poliestrze o grubości 0,008 mm. Pas jest czarny i odporny na ciepło, zarysowania oraz rozpuszczalniki.\n\nDostępnych jest siedem rolek. Pięć ma wykonanie podstawowe i szerokość 30, 40, 60, 83 bądź 110 mm. Dwie pozostałe mają 83 mm: jedna z farbą po wewnętrznej stronie, druga na plastikowej gilzie. Każda rolka liczy 300 m.\n\nW zaleceniach tej serii pojawiają się gładkie poliestry B-483 i B-423. Drukują nią i6100 oraz i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-6000-series-halogen-free-thermal-transfer-printer-ribbon-cps-4398817',
  images: ['/images/products/brady/r6006hf.png', '/images/products/brady/r6002hf.png'],
  imageDescriptions: [
    'Wąska rolka czarnej taśmy barwiącej Brady na białej gilzie z odwiniętym końcem taśmy',
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z rozwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R6000HF',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '30, 40, 60, 83, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,008 mm',
    warstwa: 'na zewnątrz rolki; R6002HF/I wewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    odpornosc: 'ciepło, zarysowania, rozpuszczalniki',
    zalecane: 'gładkie poliestry B-483 i B-423',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R6000HF, 'czarna taśma barwiąca R6000HF'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 30 do 110 mm', '300 m'),
    [STRONA_FARBY]: STRONA_FARBY_TOOLTIP,
    Gilza: 'Materiał rdzenia, na który nawinięto taśmę.\n\nWersja R6002HF-PC ma plastikową gilzę.',
  },
  faq: [
    { question: 'Jaka jest grubość taśmy R6000HF?', answer: 'Warstwa ma 0,008 mm. Taśma jest czarna, żywiczna i bezhalogenowa.' },
    { question: 'Czym różni się R6002HF/I od R6002HF-PC?', answer: 'Wersja R6002HF/I ma farbę po wewnętrznej stronie rolki, a R6002HF-PC ma plastikową gilzę i farbę na zewnątrz. Obie mają 83 mm szerokości.' },
    { question: 'Do jakich drukarek pasuje R6000HF?', answer: 'Do drukarek ' + LINKI_61_71 + '.' },
  ],
  applications: ['Czarny nadruk odporny na ciepło i rozpuszczalniki', 'Znakowanie przewodów i urządzeń'],
}

// R7950, gilza 25,4 mm (cps-4398837)
const R7950: Wiersz[] = [
  ['R7950-25X300/O', '25,4', '300'],
  ['R7950-40X300/O', '40', '300'],
  ['R7950-60X300/O', '60', '300'],
  ['R7950-90X300/O', '90', '300'],
  ['R7950-83X320/O', '83', '320'],
  ['R7950-110X300/O', '110', '300'],
]

export const bradyR7950: Product = {
  ...wspolneTHT,
  relatedProducts: REL_61_71,
  id: 'brady-r7950',
  slug: 'brady-r7950',
  name: 'Czarna taśma barwiąca Brady R7950 woskowo-żywiczna (gilza 25 mm) do drukarek i6100 i i7100',
  seoTitle: 'Brady R7950 — taśma woskowo-żywiczna do drukarek i6100 i i7100',
  seoDescription: 'Czarna taśma barwiąca Brady R7950 do drukarek Brady i6100 i i7100: woskowo-żywiczna, bezhalogenowa, 25,4–110 mm × 300 m. PN: R7950-25X300/O, R7950-110X300/O.',
  shortDescription: 'Brady R7950 to czarna bezhalogenowa taśma woskowo-żywiczna na poliestrze, w sześciu rozmiarach od 25,4 do 110 mm. Do drukarek Brady i6100 i i7100.',
  description: 'Seria R7950 łączy wosk z żywicą w czarnej warstwie barwiącej, nałożonej na poliester. Taśma jest bezhalogenowa.\n\nNajwęższa rolka ma 25,4 mm, najszersza 110 mm; pośrednio są 40, 60 i 90 mm oraz wersja 83 mm o długości 320 m. Pozostałe rolki liczą 300 m.\n\nPracują z nimi i6100 oraz i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7950-series-thermal-transfer-ribbon-cps-4398837',
  images: ['/images/products/brady/r7950-83x320-o.png', '/images/products/brady/r7950-110x300-o.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady na białej plastikowej gilzie z odwiniętym pasem taśmy',
    'Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym pasem taśmy',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7950',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '25,4, 40, 60, 83, 90, 110 mm',
    dlugosc: '300 m, wersja 83 mm: 320 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: D61_71,
  }),
  variants: wariantyTasmy(R7950, 'czarna taśma barwiąca R7950'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('od 25,4 do 110 mm', '300 m; wyjątkiem jest wersja 83 mm, która ma 320 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma R7950?', answer: 'Woskowo-żywiczną. Warstwa barwiąca jest czarna i leży na poliestrze o grubości 0,0045 mm.' },
    { question: 'Z jakimi drukarkami Brady pracuje R7950?', answer: 'Z drukarkami ' + LINKI_61_71 + '. Rolki mają gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk woskowo-żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7961, gilza 25,4 mm (cps-4398846)
const R7961: Wiersz[] = [
  ['R7961-60X300/O', '60', '300'],
  ['R7961-90X300/O', '90', '300'],
  ['R7961-110X300/O', '110', '300'],
]

export const bradyR7961: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r7961',
  slug: 'brady-r7961',
  name: 'Czarna taśma barwiąca Brady R7961 żywiczna (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R7961 — czarna żywiczna taśma barwiąca do drukarki i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R7961 do drukarki Brady i7100: bezhalogenowa, na poliestrze, 60, 90 i 110 mm × 300 m. PN: R7961-60X300/O, R7961-110X300/O.',
  shortDescription: 'Brady R7961 to czarna bezhalogenowa taśma żywiczna na poliestrze, w szerokościach 60, 90 i 110 mm, po 300 m na rolce. Do drukarki Brady i7100.',
  description: 'R7961 to czarna żywica na poliestrze, bez halogenów.\n\nDostępne są rolki 60, 90 i 110 mm, każda po 300 m.\n\nDrukuje nią i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7961-series-thermal-transfer-ribbon-cps-4398846',
  images: ['/images/products/brady/r7961-90x300-o.png'],
  imageDescriptions: ['Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym pasem taśmy'],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7961',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '60, 90, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R7961, 'czarna taśma barwiąca R7961'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 90 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jakie rolki obejmuje seria R7961?', answer: 'Rolki o szerokości 60, 90 i 110 mm, każda o długości 300 m.' },
    { question: 'Do której drukarki Brady pasuje R7961?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Gilza rolki ma 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7960, gilza 25,4 mm (cps-4398843)
const R7960: Wiersz[] = [
  ['R7960-40X300/O', '40', '300'],
  ['R7960-90X300/O', '90', '300'],
]

export const bradyR7960: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r7960',
  slug: 'brady-r7960',
  name: 'Czarna taśma barwiąca Brady R7960 żywiczna (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R7960 — czarna żywiczna taśma barwiąca do drukarki i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R7960 do drukarki Brady i7100: rolki 40 i 90 mm × 300 m z gilzą 25,4 mm. PN: R7960-40X300/O, R7960-90X300/O.',
  shortDescription: 'Brady R7960 to czarna taśma żywiczna w dwóch szerokościach, 40 i 90 mm, po 300 m na rolce. Do drukarki Brady i7100.',
  description: 'Seria R7960 obejmuje czarne taśmy z warstwą żywiczną.\n\nRolki mają szerokość 40 albo 90 mm i długość 300 m.\n\nTaśma pracuje w drukarce i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7960-series-thermal-transfer-ribbon-cps-4398843',
  images: ['/images/products/brady/r7960-40x300-o.png', '/images/products/brady/r7960-90x300-o.png'],
  imageDescriptions: [
    'Wąska rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy',
    'Szersza rolka czarnej taśmy barwiącej Brady na tekturowej gilzie',
  ],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7960',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: '40, 90 mm',
    dlugosc: '300 m',
    warstwa: 'na zewnątrz rolki',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R7960, 'czarna taśma barwiąca R7960'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('40 lub 90 mm', '300 m'),
  },
  faq: [
    { question: 'W jakich szerokościach jest taśma R7960?', answer: 'W szerokościach 40 i 90 mm. Każda rolka ma 300 m długości.' },
    { question: 'Do której drukarki pasuje R7960?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Rolka ma gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7962, gilza 25,4 mm (cps-4398849)
const R7962: Wiersz[] = [
  ['R7962-90X300/O', '90', '300'],
  ['R7962-110X300/O', '110', '300'],
]

export const bradyR7962: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r7962',
  slug: 'brady-r7962',
  name: 'Czarna taśma barwiąca Brady R7962 żywiczna (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R7962 — czarna żywiczna taśma barwiąca do drukarki i7100',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R7962 do drukarki Brady i7100: bezhalogenowa, na poliestrze, 90 i 110 mm × 300 m. PN: R7962-90X300/O, R7962-110X300/O.',
  shortDescription: 'Brady R7962 to czarna bezhalogenowa taśma żywiczna na poliestrze o grubości 0,0057 mm, w szerokościach 90 i 110 mm. Do drukarki Brady i7100.',
  description: 'Taśma R7962 jest czarna, żywiczna i grubsza od większości taśm tej karty: jej warstwa ma 0,0057 mm. Nośnik jest z poliestru, a skład bezhalogenowy.\n\nRolki mają 90 lub 110 mm szerokości i 300 m długości. Farba leży na zewnątrz.\n\nTaśmę przewidziano do drukarki i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7962-series-thermal-transfer-ribbon-cps-4398849',
  images: ['/images/products/brady/r7962-90x300-o.png'],
  imageDescriptions: ['Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z rozwiniętym pasem taśmy'],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7962',
    formula: 'żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '90, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0057 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R7962, 'czarna taśma barwiąca R7962'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('90 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaka jest grubość taśmy R7962?', answer: 'Warstwa ma 0,0057 mm. Taśma jest czarna, żywiczna i bezhalogenowa.' },
    { question: 'Do której drukarki Brady pasuje R7962?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Rolka ma gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7964, gilza 25,4 mm (cps-4398853)
const R7964: Wiersz[] = [
  ['R7964-60X300/O', '60', '300'],
  ['R7964-90X300/O', '90', '300'],
  ['R7964-110X300/O', '110', '300'],
]

export const bradyR7964: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100', 'brady-i7500'],
  id: 'brady-r7964',
  slug: 'brady-r7964',
  name: 'Czarna taśma barwiąca Brady R7964 żywiczna (gilza 25 mm) do drukarek i7100 i i7500',
  seoTitle: 'Brady R7964 — czarna żywiczna taśma do drukarek i7100 i i7500',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R7964 do drukarek Brady i7100 i i7500: rolki 60, 90 i 110 mm × 300 m. PN: R7964-60X300/O, R7964-90X300/O, R7964-110X300/O.',
  shortDescription: 'Brady R7964 to czarna taśma żywiczna w szerokościach 60, 90 i 110 mm, po 300 m na rolce. Do drukarek Brady i7100 i i7500.',
  description: 'Seria R7964 to czarna żywica na rolkach 60, 90 i 110 mm.\n\nDługość każdej rolki to 300 m.\n\nTaśma pasuje do drukarek i7100 i i7500, także w wersji RFID.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7964-series-thermal-transfer-ribbon-cps-4398853',
  images: ['/images/products/brady/r7964-110x300-o.png'],
  imageDescriptions: ['Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym pasem taśmy'],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7964',
    formula: 'żywiczna',
    kolor: 'czarny',
    szerokosc: '60, 90, 110 mm',
    dlugosc: '300 m',
    warstwa: 'na zewnątrz rolki',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100, i7500 (także i7500 RFID)',
  }),
  variants: wariantyTasmy(R7964, 'czarna taśma barwiąca R7964'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 90 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'W jakich szerokościach jest taśma R7964?', answer: 'W szerokościach 60, 90 i 110 mm. Każda rolka ma 300 m.' },
    { question: 'Do których drukarek Brady pasuje R7964?', answer: 'Do drukarek [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Rolka ma gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7942, gilza 25,4 mm (cps-4398832)
const R7942: Wiersz[] = [
  ['R7942-60X300/O', '60', '300'],
  ['R7942-90X300/O', '90', '300'],
  ['R7942-110X300/O', '110', '300'],
]

export const bradyR7942: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r7942',
  slug: 'brady-r7942',
  name: 'Czarna taśma barwiąca Brady R7942 woskowa (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R7942 — czarna woskowa taśma barwiąca do drukarki i7100',
  seoDescription: 'Czarna woskowa taśma barwiąca Brady R7942 do drukarki Brady i7100: bezhalogenowa, na poliestrze, 60, 90 i 110 mm × 300 m. PN: R7942-60X300/O, R7942-110X300/O.',
  shortDescription: 'Brady R7942 to czarna bezhalogenowa taśma woskowa na poliestrze, w szerokościach 60, 90 i 110 mm, po 300 m na rolce. Do drukarki Brady i7100.',
  description: 'R7942 to czarna taśma woskowa na poliestrze, bezhalogenowa.\n\nRolki są szerokie na 60, 90 lub 110 mm i mają po 300 m.\n\nDrukarka i7100 przyjmuje tę taśmę.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7942-series-thermal-transfer-ribbon-cps-4398832',
  images: ['/images/products/brady/r7942-110x300-o.png'],
  imageDescriptions: ['Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym pasem taśmy'],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7942',
    formula: 'woskowa',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '60, 90, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R7942, 'czarna taśma barwiąca R7942'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 90 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma R7942?', answer: 'Woskową, na nośniku z poliestru. Taśma jest czarna i bezhalogenowa.' },
    { question: 'Do której drukarki Brady pasuje R7942?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Rolka ma gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk woskowy na etykietach', 'Znakowanie przewodów i urządzeń'],
}

// R7953, gilza 25,4 mm (cps-4398840)
const R7953: Wiersz[] = [
  ['R7953-60X300/O', '60', '300'],
  ['R7953-80X300/O', '80', '300'],
  ['R7953-110X300/O', '110', '300'],
]

export const bradyR7953: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100'],
  id: 'brady-r7953',
  slug: 'brady-r7953',
  name: 'Czarna taśma barwiąca Brady R7953 woskowo-żywiczna (gilza 25 mm) do drukarki i7100',
  seoTitle: 'Brady R7953 — taśma woskowo-żywiczna do drukarki i7100',
  seoDescription: 'Czarna taśma barwiąca Brady R7953 do drukarki Brady i7100: woskowo-żywiczna, bezhalogenowa, 60, 80 i 110 mm × 300 m. PN: R7953-60X300/O, R7953-110X300/O.',
  shortDescription: 'Brady R7953 to czarna bezhalogenowa taśma woskowo-żywiczna na poliestrze, w szerokościach 60, 80 i 110 mm. Do drukarki Brady i7100.',
  description: 'Taśma R7953 ma czarną warstwę woskowo-żywiczną na poliestrze i nie zawiera halogenów.\n\nDostępne są szerokości 60, 80 i 110 mm. Rolka liczy 300 m.\n\nPasuje do drukarki i7100.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r7953-series-thermal-transfer-ribbon-cps-4398840',
  images: ['/images/products/brady/r7953-60x300-o.png'],
  imageDescriptions: ['Rolka czarnej taśmy barwiącej Brady na tekturowej gilzie z odwiniętym końcem taśmy'],
  specifications: specyfikacjaTasmy({
    typ: TYP_25,
    seria: 'R7953',
    formula: 'woskowo-żywiczna',
    materialNosnika: 'poliester',
    kolor: 'czarny',
    szerokosc: '60, 80, 110 mm',
    dlugosc: '300 m',
    grubosc: '0,0045 mm',
    warstwa: 'na zewnątrz rolki',
    wlasciwosci: 'bezhalogenowa',
    gilza: '25,4 mm',
    format: RDZEN_25,
    drukarki: 'Brady i7100',
  }),
  variants: wariantyTasmy(R7953, 'czarna taśma barwiąca R7953'),
  variantAttributeTooltips: {
    [SZEROKOSC_DLUGOSC]: SZEROKOSC_DLUGOSC_TOOLTIP('60, 80 lub 110 mm', '300 m'),
  },
  faq: [
    { question: 'Jaką formułę ma taśma R7953?', answer: 'Woskowo-żywiczną, na nośniku z poliestru. Taśma jest czarna i bezhalogenowa.' },
    { question: 'Do której drukarki Brady pasuje R7953?', answer: 'Do drukarki [Brady i7100](/produkt/brady-i7100). Rolka ma gilzę 25,4 mm.' },
  ],
  applications: ['Czarny nadruk woskowo-żywiczny na etykietach', 'Znakowanie przewodów i urządzeń'],
}

export const bradyTHTTasmy: Product[] = [
  bradyI75R4300,
  bradyI75R4400,
  bradyI75R4500,
  bradyI75R4900,
  bradyI75R6000,
  bradyI75R6200,
  bradyI75R6300,
  bradyI75R6400,
  bradyI75R6600,
  bradyI75R6700,
  bradyI75R6800,
  bradyI75R7950,
  bradyI75R7961,
  bradyI75R7962,
  bradyR4300,
  bradyR4400,
  bradyR4500RD,
  bradyR4700,
  bradyR4900,
  bradyR6000HF,
  bradyR6200,
  bradyR6300,
  bradyR6400,
  bradyR6600,
  bradyR6700,
  bradyR6800WT,
  bradyR7942,
  bradyR7950,
  bradyR7953,
  bradyR7960,
  bradyR7961,
  bradyR7962,
  bradyR7964,
]
