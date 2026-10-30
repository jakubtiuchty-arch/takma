import type { Product } from './products'

// Akcesoria do skanerów przewodowych Unitech (30.10.2026): podstawki, uchwyt biurkowo-ścienny, etui i przewód USB.
// Karty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Karty serii MS85x są wspólne dla skanerów przewodowych i bezprzewodowych (modele Bluetooth i 2,4 GHz są w unitech-wireless-scanner-products.ts).
// Dokumentacja: docs/catalog/unitech-skanery-2026-10-30/S1.md

const MS85X_PRZEWODOWE = ['unitech-ms852', 'unitech-ms852-plus', 'unitech-ms852-lr', 'unitech-ms852-dpm-esd', 'unitech-ms852-plus-esd', 'unitech-ms851-esd']
const MS85X_BEZPRZEWODOWE = ['unitech-ms852b', 'unitech-ms852b-plus', 'unitech-ms852b-lr', 'unitech-ms852p', 'unitech-ms851b-esd', 'unitech-ms852b-plus-esd']
const MS85X = [...MS85X_PRZEWODOWE, ...MS85X_BEZPRZEWODOWE]
const MS85X_ZGODNOSC = 'MS852, MS852 Plus, MS852 LR, MS852 DPM ESD, MS852 Plus ESD, MS851 ESD oraz modele Bluetooth i 2,4 GHz: MS852B, MS852B Plus, MS852B LR, MS852P, MS851B ESD, MS852B Plus ESD'
const TAGI: Product['tags'] = ['retail', 'magazyn']

const podstawkaMs85x: Product = {
  id: 'unitech-ms85x-podstawka',
  slug: 'unitech-ms85x-podstawka',
  name: 'Podstawka hands-free Unitech MS85x (5200-900009G)',
  seoH1: 'Podstawka hands-free Unitech MS85x',
  shortDescription: 'Podstawka hands-free Unitech 5200-900009G do skanerów serii MS85x: utrzymuje skaner na blacie i pozwala skanować bez trzymania w dłoni.',
  seoTitle: 'Podstawka Unitech 5200-900009G do skanerów MS852, MS851 i MS852 Plus',
  seoDescription: 'Podstawka hands-free Unitech 5200-900009G trzyma skaner nad blatem, aby czytać kody bez użycia rąk. Pasuje do przewodowych Unitech MS852, MS852 Plus, MS852 LR i MS851 ESD oraz bezprzewodowego MS852B. Podstawka do skanera Unitech MS852. PN: 5200-900009G.',
  description: `Podstawka 5200-900009G utrzymuje skaner serii MS85x na blacie, aby skanować kody bez trzymania skanera w dłoni.

W pudełku są uchwyt skanera, przekładka, kolumna, dolna i górna płyta podstawy oraz wkręty. Uchwyt, przekładka i kolumna oraz obie płyty są fabrycznie złożone w dwie części. Obie części łączy się śrubokrętem krzyżakowym. Podstawę można przykręcić do blatu wkrętami samogwintującymi.

Żaden zestaw skanera serii MS85x nie zawiera tej podstawki, dlatego zamawia się ją osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'unitech',
  priceFrom: 52.07,
  images: ['/images/products/5200-900009G.png'],
  imageDescriptions: ['Podstawka hands-free Unitech 5200-900009G — czarna podstawka z zakrzywioną kolumną i uchwytem na skaner serii MS85x'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5200-900009G' },
    { name: 'Typ', value: 'Podstawka hands-free do skanera ręcznego' },
    { name: 'Zgodność', value: MS85X_ZGODNOSC },
    { name: 'Zawartość pudełka', value: 'Uchwyt skanera, przekładka, kolumna, dolna i górna płyta podstawy, wkręty płaskie i samogwintujące' },
    { name: 'Montaż', value: 'Śrubokręt krzyżakowy' },
  ],
  applications: ['Praca ze skanerem bez trzymania w dłoni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-ms85x-przewod-usb'],
  downloads: [
    { name: 'Skrócona instrukcja podstawki hands-free MS85x (EN)', type: 'manual', url: '/downloads/unitech/unitech-ms85x-podstawka-skrocona-instrukcja-en.pdf', size: '720 KB' },
  ],
  relatedProducts: MS85X,
  createdAt: '2026-10-30',
}

const uchwytBiurkowyMs85x: Product = {
  id: 'unitech-ms85x-uchwyt-biurkowy',
  slug: 'unitech-ms85x-uchwyt-biurkowy',
  name: 'Uchwyt biurkowy i ścienny Unitech MS85x (5200-900011G)',
  seoH1: 'Uchwyt biurkowy i ścienny Unitech MS85x',
  shortDescription: 'Uchwyt Unitech 5200-900011G do skanerów serii MS85x: odkładanie skanera na biurku albo montaż na ścianie.',
  seoTitle: 'Uchwyt biurkowy i ścienny Unitech 5200-900011G do skanerów MS85x',
  seoDescription: 'Przezroczysty uchwyt Unitech 5200-900011G do odkładania skanera na biurku albo montażu na ścianie. Obsługuje Unitech MS852 Plus ESD, MS852 DPM ESD, MS852B LR i pozostałe skanery serii MS85x. Uchwyt na skaner Unitech MS852. PN: 5200-900011G.',
  description: `Uchwyt 5200-900011G służy do odkładania skanera serii MS85x. Można go ustawić na biurku albo zamontować na ścianie.

Przezroczysty uchwyt podtrzymuje skaner za rękojeść. Nie jest podstawką hands-free: do pracy bez trzymania skanera w dłoni służy [podstawka 5200-900009G](/produkt/unitech-ms85x-podstawka).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'unitech',
  priceFrom: 27.61,
  images: ['/images/products/5200-900011G.png', '/images/products/5200-900011G-2.png'],
  imageDescriptions: [
    'Uchwyt Unitech 5200-900011G — przezroczysty uchwyt ścienny ze skanerem MS85x zawieszonym za rękojeść',
    'Uchwyt Unitech 5200-900011G — przezroczysty uchwyt biurkowy ze skanerem MS85x opartym o podstawę',
  ],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5200-900011G' },
    { name: 'Typ', value: 'Uchwyt biurkowy i ścienny do skanera ręcznego' },
    { name: 'Zgodność', value: MS85X_ZGODNOSC },
  ],
  applications: ['Odkładanie skanera na biurku', 'Montaż skanera na ścianie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-podstawka', 'unitech-ms85x-etui', 'unitech-ms85x-przewod-usb'],
  downloads: [],
  relatedProducts: MS85X,
  createdAt: '2026-10-30',
}

const etuiMs85x: Product = {
  id: 'unitech-ms85x-etui',
  slug: 'unitech-ms85x-etui',
  name: 'Etui ochronne Unitech MS85x (386793G)',
  seoH1: 'Etui ochronne Unitech MS85x',
  shortDescription: 'Etui ochronne Unitech 386793G do skanerów serii MS85x: osłona na upadki; w MS852 LR zwiększa odporność z 1,8 m do 2,2 m.',
  seoTitle: 'Etui ochronne Unitech 386793G do skanerów MS852 LR, MS852 i MS851',
  seoDescription: 'Żółte etui ochronne Unitech 386793G zwiększa odporność skanera MS852 LR na upadki do 2,2 m. Zakłada się je także na MS852B LR, MS851B ESD i inne modele serii MS85x. Osłona skanera Unitech MS852 LR. PN: 386793G.',
  description: `Etui 386793G chroni skaner serii MS85x przed skutkami upadku. Jest żółte i ma na powierzchni logo unitech.

Dla MS852 LR dopuszczalna wysokość upadku wynosi 1,8 m bez osłony i 2,2 m w etui. Zestawy skanerów go nie zawierają, więc zamawia się je osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'etui-kabury-skanerow'],
  manufacturerId: 'unitech',
  priceFrom: 45.98,
  images: ['/images/products/386793G.png'],
  imageDescriptions: ['Etui ochronne Unitech 386793G — żółta osłona skanera z napisem unitech'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '386793G' },
    { name: 'Typ', value: 'Etui ochronne do skanera ręcznego' },
    { name: 'Zgodność', value: MS85X_ZGODNOSC },
    { name: 'Odporność na upadki z etui', value: 'MS852 LR: 2,2 m na beton (bez etui 1,8 m)' },
  ],
  applications: ['Ochrona skanera przy upadkach w magazynie i na produkcji'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-przewod-usb'],
  downloads: [],
  relatedProducts: MS85X,
  createdAt: '2026-10-30',
}

const przewodUsbMs85x: Product = {
  id: 'unitech-ms85x-przewod-usb',
  slug: 'unitech-ms85x-przewod-usb',
  name: 'Przewód USB z ochroną ESD Unitech MS85x (1550-905920G)',
  seoH1: 'Przewód USB z ochroną ESD Unitech MS85x',
  shortDescription: 'Przewód USB Unitech 1550-905920G z ochroną ESD do skanerów serii MS85x: zamienny lub zapasowy przewód skanera.',
  seoTitle: 'Przewód USB Unitech 1550-905920G z ochroną ESD do skanerów MS85x',
  seoDescription: 'Zapasowy przewód USB Unitech 1550-905920G z ochroną ESD do skanerów MS851 ESD, MS852 Plus ESD i MS852 DPM ESD oraz innych modeli serii MS85x. Przewód do skanera Unitech MS852. PN: 1550-905920G.',
  description: `Przewód 1550-905920G łączy skaner serii MS85x z portem USB komputera. Ma ochronę ESD (ESD enhanced) i służy jako przewód zamienny lub zapasowy.

Z jednej strony ma wtyk USB-A, a z drugiej wtyk modułowy, który wchodzi do złącza przewodu w rękojeści skanera. Dzięki temu złączu przewód skanera MS85x można odłączyć i wymienić.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'kable-do-skanerow'],
  manufacturerId: 'unitech',
  priceFrom: 23.98,
  images: ['/images/products/1550-905920G.png'],
  imageDescriptions: ['Przewód USB Unitech 1550-905920G — czarny przewód z wtykiem USB-A z jednej strony i wtykiem modułowym z osłoną przeciwzgięciową po drugiej'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1550-905920G' },
    { name: 'Typ', value: 'Przewód USB z ochroną ESD (ESD enhanced)' },
    { name: 'Zgodność', value: MS85X_ZGODNOSC },
  ],
  applications: ['Wymiana przewodu skanera', 'Zapasowy przewód w strefach EPA'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui'],
  downloads: [],
  relatedProducts: MS85X,
  createdAt: '2026-10-30',
}

const podstawkaMs282e: Product = {
  id: 'unitech-ms282e-podstawka',
  slug: 'unitech-ms282e-podstawka',
  name: 'Podstawka hands-free Unitech MS282e (5200-900013G)',
  seoH1: 'Podstawka hands-free Unitech MS282e',
  shortDescription: 'Podstawka hands-free Unitech 5200-900013G do skanera MS282e: stoi na blacie i pozwala skanować w trybie prezentacyjnym.',
  seoTitle: 'Podstawka Unitech 5200-900013G do skanera MS282e',
  seoDescription: 'Podstawka hands-free Unitech 5200-900013G do skanera kodów MS282e. Podstawka do skanera Unitech MS282e do pracy w trybie prezentacyjnym. PN: 5200-900013G.',
  description: `Podstawka 5200-900013G utrzymuje smukły skaner MS282e na giętkim ramieniu nad blatem. W podstawce skaner czyta kody w trybie prezentacyjnym, bez trzymania w dłoni.

Zestaw MS282-3UCB00-SG jej nie zawiera; podstawkę zamawia się osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'unitech',
  priceFrom: 63.04,
  images: ['/images/products/5200-900013G.png'],
  imageDescriptions: ['Podstawka Unitech 5200-900013G — dwie czarne podstawki na giętkim ramieniu, jedna pusta i jedna ze skanerem MS282e'],
  tags: ['retail'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5200-900013G' },
    { name: 'Typ', value: 'Podstawka hands-free do skanera ręcznego' },
    { name: 'Zgodność', value: 'MS282e' },
  ],
  applications: ['Praca ze skanerem bez trzymania w dłoni'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [],
  relatedProducts: ['unitech-ms282e'],
  createdAt: '2026-10-30',
}

export const unitechScannerAccessories: Product[] = [
  podstawkaMs85x,
  uchwytBiurkowyMs85x,
  etuiMs85x,
  przewodUsbMs85x,
  podstawkaMs282e,
]
