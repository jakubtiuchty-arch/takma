import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Zawieszki i oznaczniki kablowe Brady na rolkach z gilzą 76 mm (B-7643, Heatex HCM, B-7598, B-348, Hypertag, B-412, B-109, B-7649, B-508)
// do przemysłowych drukarek Brady i6100, i7100 i i7500. Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.

const KOLORY: Record<string, string> = {
  WT: 'Biały', YL: 'Żółty', RD: 'Czerwony', OR: 'Pomarań\u00ADczowy', BL: 'Niebieski', GN: 'Zielony', BK: 'Czarny', SV: 'Srebrny',
}
const KOLORY_ZENSKIE: Record<string, string> = {
  WT: 'biała', YL: 'żółta', RD: 'czerwona', OR: 'pomarańczowa', BL: 'niebieska', GN: 'zielona', BK: 'czarna', SV: 'srebrna',
}
const KOLORY_MESKIE: Record<string, string> = {
  WT: 'biały', YL: 'żółty', RD: 'czerwony', OR: 'pomarańczowy', BL: 'niebieski', GN: 'zielony', BK: 'czarny', SV: 'srebrny',
}

// [PN, wymiar (szerokość × wysokość, mm), sztuk na rolce, kolor]
type Wiersz = [string, string, number, string]

const warianty = (wiersze: Wiersz[], rodzaj: string, nazwaMat: string, rodzajMeski = false) =>
  wiersze.map(([pn, wym, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${(rodzajMeski ? KOLORY_MESKIE : KOLORY_ZENSKIE)[kolor]} ${rodzaj} ${nazwaMat} ${wym} mm`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Kolor: KOLORY[kolor] } as Record<string, string>,
    availability: 'unavailable' as const,
  }))

// ---------------------------------------------------------------------------
// Zawieszki B-7643 z ulepszonym formatem wykrojenia (pojedyncze PN THT-…LL-7643-…)
// ---------------------------------------------------------------------------

const KOLORY_LL = ['WT', 'YL', 'RD', 'OR', 'BL', 'GN', 'BK']

// [rozmiar w PN, wymiar, numery artykułów w kolejności KOLORY_LL]
const LL_7643: [string, string, string[]][] = [
  ['6010', '60 × 10', ['319362', '319361', '320056', '320052', '320044', '320040', '320048']],
  ['7510', '75 × 10', ['319356', '319355', '320053', '320049', '320041', '320037', '320045']],
  ['7515', '75 × 15', ['319358', '319357', '320054', '320050', '320042', '320038', '320046']],
  ['7525', '75 × 25', ['319360', '319359', '320055', '320051', '320043', '320039', '320047']],
]

// [PN, nr art., wymiar, kolor]
const WIERSZE_LL_7643: [string, string, string, string][] = LL_7643.flatMap(([rozm, wym, art]) =>
  KOLORY_LL.map((k, i): [string, string, string, string] => [`THT-${rozm}LL-7643-${k}`, art[i], wym, k]),
)

export const bradyTHTZawieszki7643LL: Product = {
  ...wspolneTHT,
  id: 'brady-tht-6010ll-7643-wt',
  slug: 'brady-tht-6010ll-7643-wt',
  name: 'Zawieszki kablowe z poliuretanu Brady B-7643 z ulepszonym formatem wykrojenia na rolce 76 mm',
  seoTitle: 'Brady B-7643 — zawieszki kablowe do i6100, i7100, i7500',
  seoDescription: 'Zawieszki kablowe Brady B-7643 z poliuretanu do drukarek Brady i6100, i7100 i i7500: 4 rozmiary, 7 kolorów. PN: THT-6010LL-7643-WT, THT-7525LL-7643-YL.',
  shortDescription: 'Brady THT-LL-7643 to bezhalogenowe zawieszki z termoplastycznego poliuretanu, w czterech rozmiarach i siedmiu kolorach, po 500 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Zawieszki THT-LL-7643 pochodzą z rodziny B-7643, wykonanej z poliuretanu polieterowego bez halogenów. Materiał ma matowe wykończenie i 0,45 mm grubości. Zastosowano ulepszony format wykrojenia. W każdej sztuce wycięto cztery otwory o kształcie owalnym. Zawieszki oznaczają przewody i kable, a nadruk powstaje termotransferowo.\n\nRolka mieści 500 zawieszek, niezależnie od rozmiaru. Szerokość × wysokość to 60 × 10, 75 × 10, 75 × 15 albo 75 × 25 mm. Siedem barw: biała, żółta, czerwona, pomarańczowa, niebieska, zielona i czarna. Każda barwa występuje w każdym rozmiarze, co daje 28 numerów katalogowych.\n\nZawieszki pracują od −40 °C do 90 °C. Ścieranie, chemikalia i wilgoć nie uszkadzają materiału. Taśmą barwiącą do nadruku jest R6000HF (i75-R6000HF), sprzedawana osobno.',
  sameAs: 'https://www.brady.eu/labels/halogen-free-cable-tag-pid-tht-6010ll-7643-bk',
  images: ['/images/products/brady/tht-6010ll-7643-wt.png', '/images/products/brady/tht-6010ll-7643-yl.png'],
  imageDescriptions: [
    'Rolka białych zawieszek kablowych Brady B-7643 z rzędem czterech owalnych otworów w każdej zawieszce',
    'Rolka żółtych zawieszek kablowych Brady B-7643 z częściowo rozwiniętym paskiem na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'poliuretan termoplastyczny typu polieter, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały, żółty, czerwony, pomarańczowy, niebieski, zielony, czarny' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Otwory', value: '4, owalne' },
    { name: 'Normy', value: 'IEC 61249-2-21 (wymagania dotyczące halogenów)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF (i75-R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
    { name: 'Numery artykułów Brady', value: WIERSZE_LL_7643.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: warianty(WIERSZE_LL_7643.map(([pn, , wym, k]) => [pn, wym, 500, k] as Wiersz), 'zawieszka kablowa', 'B-7643'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nRodzina obejmuje formaty od 60 × 10 do 75 × 25 mm, każdy po 500 sztuk.',
    Kolor: 'Kolor zawieszki.\n\nKażdy format jest dostępny w siedmiu kolorach, od białego po czarny.',
  },
  faq: [
    { question: 'Jakie kolory zawieszek B-7643 są dostępne?', answer: 'Biały, żółty, czerwony, pomarańczowy, niebieski, zielony i czarny. Wszystkie cztery formaty występują w pełnej palecie siedmiu kolorów.' },
    { question: 'Czy zawieszki B-7643 zawierają halogeny?', answer: 'Nie. Poliuretan jest bezhalogenowy i spełnia wymagania normy IEC 61249-2-21. Grubość materiału wynosi 0,45 mm.' },
    { question: 'Które drukarki obsługują zawieszki B-7643?', answer: 'Zawieszki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Taśma barwiąca R6000HF jest kupowana osobno.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie obwodów kolorem zawieszki'],
}

// ---------------------------------------------------------------------------
// Zawieszki B-7643 (cps-4541727)
// ---------------------------------------------------------------------------

const ZAWIESZKI_7643: Wiersz[] = [
  ['197393', '75 × 25', 250, 'WT'],
  ['THT-7525-7643-YL', '75 × 25', 250, 'YL'],
  ['197396', '75 × 25', 250, 'RD'],
  ['197397', '75 × 25', 250, 'OR'],
  ['THT-7525-7643-BL', '75 × 25', 250, 'BL'],
  ['THT-7525-7643-GN', '75 × 25', 250, 'GN'],
  ['197387', '75 × 15', 500, 'YL'],
  ['THT-7515-7643-WT', '75 × 15', 500, 'WT'],
  ['197389', '75 × 15', 500, 'RD'],
  ['197390', '75 × 15', 500, 'OR'],
  ['197392', '75 × 15', 500, 'BL'],
  ['THT-7515-7643-BK', '75 × 15', 500, 'BK'],
  ['THT-7515-7643-GN', '75 × 15', 500, 'GN'],
  ['197372', '60 × 10', 750, 'WT'],
  ['THT-6010-7643-YL', '60 × 10', 750, 'YL'],
  ['197378', '60 × 10', 750, 'BL'],
  ['THT-6010-7643-BK', '60 × 10', 750, 'BK'],
  ['THT-6010-7643-GN', '60 × 10', 750, 'GN'],
  ['THT-6010-7643-OR', '60 × 10', 750, 'OR'],
  ['THT-6010-7643-RD', '60 × 10', 750, 'RD'],
  ['197379', '75 × 10', 750, 'WT'],
  ['197380', '75 × 10', 750, 'YL'],
  ['197382', '75 × 10', 750, 'RD'],
  ['197383', '75 × 10', 750, 'OR'],
  ['THT-7510-7643-BK', '75 × 10', 750, 'BK'],
  ['THT-7510-7643-BL', '75 × 10', 750, 'BL'],
  ['THT-7510-7643-GN', '75 × 10', 750, 'GN'],
]

export const bradyTHTZawieszki7643: Product = {
  ...wspolneTHT,
  id: 'brady-tht-7525-7643-yl',
  slug: 'brady-tht-7525-7643-yl',
  name: 'Zawieszki kablowe z poliuretanu Brady B-7643 na rolce 76 mm',
  seoTitle: 'Brady B-7643 — zawieszki z poliuretanu do i6100, i7100, i7500',
  seoDescription: 'Bezhalogenowe zawieszki Brady B-7643 do drukarek Brady i6100, i7100 i i7500: 4 formaty, 250–750 szt. na rolce. PN: THT-7525-7643-YL, THT-6010-7643-BK, 197393.',
  shortDescription: 'Brady B-7643 to zawieszki z matowego poliuretanu, od 60 × 10 do 75 × 25 mm, do znakowania przewodów oraz instalacji teletechnicznych. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rodzina B-7643 obejmuje 27 numerów katalogowych. Zawieszki wykonano z matowego poliuretanu termoplastycznego, w którym nie ma halogenów, a folia ma 0,45 mm. Otwory są cztery, owalne, o wymiarze 5 × 2 mm. Znakują przewody, kable oraz okablowanie teletechniczne.\n\nLiczba sztuk zależy od formatu. Zawieszka 75 × 25 mm występuje po 250 sztuk na rolce, 75 × 15 mm po 500, a dwie najniższe, 75 × 10 i 60 × 10 mm, po 750. Kolorów jest siedem: biały, żółty, czerwony, pomarańczowy, niebieski, zielony oraz czarny, lecz największy format nie ma wersji czarnej.\n\nTemperatury użytkowania obejmują przedział −40…90 °C. Poliuretan odpiera ścieranie, chemikalia i wilgoć. Deklaracja IEC 61249-2-21 potwierdza brak halogenów. Do nadruku potrzebna jest taśma R6000HF, którą kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-thermoplastic-polyether-polyurethane-cable-tags-cps-4541727',
  images: ['/images/products/brady/tht-7525-7643-yl.png', '/images/products/brady/tht-7525-7643-wt.png'],
  imageDescriptions: [
    'Rolka żółtych zawieszek kablowych Brady B-7643 o wymiarach 75 × 25 mm z wykrojonymi otworami',
    'Rolka białych zawieszek kablowych Brady B-7643 o wymiarach 75 × 25 mm na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'poliuretan termoplastyczny typu polieter, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały, żółty, czerwony, pomarańczowy, niebieski, zielony, czarny (czarny nie występuje w formacie 75 × 25 mm)' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '750 / 500 / 250, zależnie od formatu' },
    { name: 'Otwory', value: '4, owalne, 5 × 2 mm' },
    { name: 'Normy', value: 'IEC 61249-2-21 (wymagania dotyczące halogenów)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
  ],
  variants: warianty(ZAWIESZKI_7643, 'zawieszka kablowa', 'B-7643'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nIm większa zawieszka, tym mniej sztuk na rolce: od 750 przy 60 × 10 mm do 250 przy 75 × 25 mm.',
    Kolor: 'Kolor zawieszki.\n\nW formacie 75 × 25 mm nie ma wersji czarnej, w pozostałych jest siedem kolorów.',
  },
  faq: [
    { question: 'Ile zawieszek B-7643 mieści rolka?', answer: 'Zależy to od formatu. Rolka 60 × 10 i 75 × 10 mm zawiera 750 sztuk, rolka 75 × 15 mm 500 sztuk, a rolka 75 × 25 mm 250 sztuk.' },
    { question: 'Jaka taśma barwiąca pasuje do zawieszek B-7643?', answer: 'Zalecana jest taśma R6000HF, sprzedawana osobno. Zawieszki zadrukowuje przemysłowa [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) albo [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Czy zawieszki B-7643 nadają się do instalacji bezhalogenowych?', answer: 'Materiał jest bezhalogenowy i spełnia wymagania normy IEC 61249-2-21. Zakres roboczy to od −40 do 90 °C.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie okablowania sieci i łączności'],
}

// ---------------------------------------------------------------------------
// Oznaczniki Heatex HCM (cps-4525268 + pid-hcm-60x10-b7643-wt, -bk, pid-620332, pid-hcm-75x15-b7643-rd)
// ---------------------------------------------------------------------------

const OZNACZNIKI_HCM: Wiersz[] = [
  ['HCM-75X25-B7643-BK', '75 × 25', 500, 'BK'],
  ['HCM-75X25-B7643-OR', '75 × 25', 500, 'OR'],
  ['HCM-75X25-B7643-RD', '75 × 25', 500, 'RD'],
  ['HCM-75X25-B7643-WT', '75 × 25', 500, 'WT'],
  ['HCM-75X25-B7643-YL', '75 × 25', 500, 'YL'],
  ['HCM-60X10-B7643-WT', '60 × 10', 1000, 'WT'],
  ['HCM-60X10-B7643-YL', '60 × 10', 1000, 'YL'],
  ['HCM-60X10-B7643-BK', '60 × 10', 1000, 'BK'],
  ['620332', '60 × 10', 1000, 'OR'],
  ['620340', '60 × 10', 1000, 'RD'],
  ['HCM-75X10-B7643-BK', '75 × 10', 1000, 'BK'],
  ['HCM-75X10-B7643-OR', '75 × 10', 1000, 'OR'],
  ['620341', '75 × 10', 1000, 'RD'],
  ['HCM-75X10-B7643-WT', '75 × 10', 1000, 'WT'],
  ['HCM-75X10-B7643-YL', '75 × 10', 1000, 'YL'],
  ['HCM-75X15-B7643-BK', '75 × 15', 1000, 'BK'],
  ['HCM-75X15-B7643-OR', '75 × 15', 1000, 'OR'],
  ['HCM-75X15-B7643-RD', '75 × 15', 1000, 'RD'],
  ['HCM-75X15-B7643-WT', '75 × 15', 1000, 'WT'],
  ['HCM-75X15-B7643-YL', '75 × 15', 1000, 'YL'],
]

export const bradyTHTOznacznikiHCM: Product = {
  ...wspolneTHT,
  id: 'brady-hcm-75x25-b7643-bk',
  slug: 'brady-hcm-75x25-b7643-bk',
  name: 'Oznaczniki kablowe Brady Heatex HCM B-7643 na rolce 76 mm',
  seoTitle: 'Brady Heatex HCM — oznaczniki kablowe do i6100, i7100, i7500',
  seoDescription: 'Oznaczniki kablowe Brady Heatex HCM z poliuretanu B-7643 do drukarek Brady i6100, i7100 i i7500. 4 formaty. PN: HCM-75X25-B7643-BK, HCM-60X10-B7643-WT, 620341.',
  shortDescription: 'Brady Heatex HCM to oznaczniki kablowe z matowego poliuretanu B-7643, w czterech formatach i pięciu kolorach, po 500 albo 1000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Oznaczniki Heatex HCM wykonano z matowego poliuretanu B-7643 o grubości 0,45 mm, bez halogenów. Układają się na nośniku o szerokości 110 mm. Opisują przewody i kable w instalacjach elektrycznych, sieciach telekomunikacyjnych i transmisji danych. Podziałka na nośniku wynosi 25,4 mm w formatach 60 × 10 i 75 × 15 mm oraz 50,8 mm w formacie 75 × 25 mm.\n\nNajwiększy format ma 500 sztuk na rolce, trzy mniejsze po 1000. Każdy format jest dostępny w pięciu barwach: białej, żółtej, czerwonej, pomarańczowej i czarnej. Łącznie daje to 20 numerów katalogowych.\n\nOznaczniki pracują poprawnie między −40 °C a 90 °C. Odpierają ścieranie, chemikalia i wilgoć. Czarne wersje drukuje taśma R4400-WT, pozostałe taśma R6000HF. Obie taśmy zamawia się osobno.',
  sameAs: 'https://www.brady.eu/labels/heatex-cable-markers-cps-4525268',
  images: ['/images/products/brady/hcm-75x25-b7643-bk.png', '/images/products/brady/hcm-75x10-b7643-yl.png'],
  imageDescriptions: [
    'Rolka czarnych oznaczników Brady Heatex HCM o wymiarach 75 × 25 mm na białym nośniku',
    'Rolka żółtych oznaczników Brady Heatex HCM o wymiarach 75 × 10 mm, ułożonych w jednym rzędzie na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka oznaczników kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Heatex HCM B-7643' },
    { name: 'Typ materiału', value: 'poliuretan termoplastyczny typu polieter, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały, żółty, czerwony, pomarańczowy, czarny' },
    { name: 'Wymiary etykiety', value: '75 × 25 / 60 × 10 / 75 × 10 / 75 × 15 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '500 (75 × 25 mm) albo 1000 (pozostałe formaty)' },
    { name: 'Szerokość nośnika', value: '110 mm' },
    { name: 'Normy', value: 'IEC 61249-2-21 (wymagania dotyczące halogenów)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF (kolory i biały); R4400-WT (czarny)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
  ],
  variants: warianty(OZNACZNIKI_HCM, 'oznacznik kablowy', 'Heatex HCM', true),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość oznacznika oraz liczba sztuk na rolce.\n\nFormat 75 × 25 mm ma 500 sztuk na rolce, pozostałe trzy formaty po 1000.',
    Kolor: 'Kolor oznacznika.\n\nKażdy format występuje w pięciu kolorach: białym, żółtym, czerwonym, pomarańczowym i czarnym.',
  },
  faq: [
    { question: 'Czym są oznaczniki Heatex HCM?', answer: 'To oznaczniki kablowe z bezhalogenowego poliuretanu B-7643 na nośniku o szerokości 110 mm. Przeznaczone są do znakowania przewodów i kabli.' },
    { question: 'Jaką taśmę barwiącą zamówić do oznaczników HCM?', answer: 'Do wersji białych i kolorowych zalecana jest taśma R6000HF, do czarnych R4400-WT. Obie taśmy są sprzedawane osobno.' },
    { question: 'Które drukarki obsługują oznaczniki HCM?', answer: 'Oznaczniki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Rolka mieści 500 albo 1000 sztuk, zależnie od formatu.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie okablowania teletechnicznego i sieci danych'],
}

// ---------------------------------------------------------------------------
// Zawieszki poliestrowe B-7598 (cps-4525267 + pid-tht-6010-7598-wt)
// ---------------------------------------------------------------------------

const ZAWIESZKI_7598: Wiersz[] = [
  ['THT-7525-7598-WT', '75 × 25', 500, 'WT'],
  ['THT-7525-7598-YL', '75 × 25', 500, 'YL'],
  ['THT-7525-7598-BK', '75 × 25', 500, 'BK'],
  ['THT-7525-7598-BL', '75 × 25', 500, 'BL'],
  ['THT-7525-7598-GN', '75 × 25', 500, 'GN'],
  ['THT-7525-7598-RD', '75 × 25', 500, 'RD'],
  ['THT-7525-7598-SV', '75 × 25', 500, 'SV'],
  ['THT-6010-7598-WT', '60 × 10', 1000, 'WT'],
  ['THT-6010-7598-YL', '60 × 10', 1000, 'YL'],
  ['THT-6010-7598-BK', '60 × 10', 1000, 'BK'],
  ['THT-6010-7598-BL', '60 × 10', 1000, 'BL'],
  ['THT-6010-7598-GN', '60 × 10', 1000, 'GN'],
  ['THT-6010-7598-RD', '60 × 10', 1000, 'RD'],
  ['THT-6010-7598-SV', '60 × 10', 1000, 'SV'],
  ['THT-7510-7598-WT', '75 × 10', 1000, 'WT'],
  ['THT-7510-7598-YL', '75 × 10', 1000, 'YL'],
  ['THT-7510-7598-BK', '75 × 10', 1000, 'BK'],
  ['THT-7510-7598-BL', '75 × 10', 1000, 'BL'],
  ['THT-7510-7598-GN', '75 × 10', 1000, 'GN'],
  ['THT-7510-7598-RD', '75 × 10', 1000, 'RD'],
  ['THT-7510-7598-SV', '75 × 10', 1000, 'SV'],
  ['THT-7515-7598-WT', '75 × 15', 1000, 'WT'],
  ['THT-7515-7598-YL', '75 × 15', 1000, 'YL'],
  ['THT-7515-7598-BK', '75 × 15', 1000, 'BK'],
  ['THT-7515-7598-BL', '75 × 15', 1000, 'BL'],
  ['THT-7515-7598-RD', '75 × 15', 1000, 'RD'],
  ['THT-7515-7598-SV', '75 × 15', 1000, 'SV'],
]

export const bradyTHTZawieszki7598: Product = {
  ...wspolneTHT,
  id: 'brady-tht-7525-7598-wt',
  slug: 'brady-tht-7525-7598-wt',
  name: 'Zawieszki kablowe z poliestru Brady B-7598 na rolce 76 mm',
  seoTitle: 'Brady B-7598 — zawieszki poliestrowe do i6100, i7100, i7500',
  seoDescription: 'Zawieszki kablowe Brady B-7598 z błyszczącego poliestru do drukarek Brady i6100, i7100 i i7500: 7 kolorów, 4 formaty. PN: THT-7525-7598-WT, THT-6010-7598-SV.',
  shortDescription: 'Brady B-7598 to zawieszki z błyszczącego poliestru, od 60 × 10 do 75 × 25 mm, w siedmiu kolorach z wersją srebrną. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Zawieszki B-7598 wykonano z błyszczącego poliestru, który ma 0,20 mm grubości i jest zadrukowywany termotransferowo. W każdej sztuce wykrojono cztery owale 5 × 2 mm. Zawieszki oznaczają przewody, kable oraz okablowanie sieci i łączności. Pole zadruku zawieszki 60 × 10 mm ma 44 × 15,08 mm.\n\nTrzy mniejsze formaty (60 × 10, 75 × 10 i 75 × 15 mm) mają 1000 sztuk na rolce, a największy, 75 × 25 mm, ma 500. Paleta liczy siedem barw: biała, żółta, czarna, niebieska, zielona, czerwona i srebrna. Zielonej brakuje tylko w formacie 75 × 15 mm.\n\nPoliester znosi temperatury od −40 °C aż do 100 °C. Wersje biała, czarna i srebrna są bezhalogenowe zgodnie z normą IEC 61249-2-21. Zalecaną taśmą barwiącą jest R6000HF; sprzedaje się ją osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyester-cable-tags-cps-4525267',
  images: ['/images/products/brady/tht-7525-7598-wt.png', '/images/products/brady/tht-7515-7598-wt.png'],
  imageDescriptions: [
    'Rolka białych zawieszek poliestrowych Brady B-7598 ze zwiniętym paskiem i otworami w każdej zawieszce',
    'Szeroka rolka białych zawieszek poliestrowych Brady B-7598 z wykrojonymi otworami wzdłuż brzegów',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Grubość', value: '0,20 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolor', value: 'biały, żółty, czarny, niebieski, zielony, czerwony, srebrny' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 (60 × 10, 75 × 10 i 75 × 15 mm) albo 500 (75 × 25 mm)' },
    { name: 'Otwory', value: '4, owalne, 5 × 2 mm' },
    { name: 'Normy', value: 'IEC 61249-2-21 (wymagania dotyczące halogenów, wersje biała, czarna i srebrna)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
  ],
  variants: warianty(ZAWIESZKI_7598, 'zawieszka kablowa', 'B-7598'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nFormat 75 × 25 mm ma 500 sztuk na rolce, pozostałe formaty po 1000.',
    Kolor: 'Kolor poliestru.\n\nOprócz podstawowych barw dostępna jest wersja srebrna. Zawieszki białe, czarne i srebrne są bezhalogenowe.',
  },
  faq: [
    { question: 'Które zawieszki B-7598 są bezhalogenowe?', answer: 'Wersje w kolorze białym, czarnym i srebrnym spełniają wymagania normy IEC 61249-2-21. Pozostałe kolory nie mają takiej deklaracji.' },
    { question: 'Czy zawieszki B-7598 występują w kolorze srebrnym?', answer: 'Tak, we wszystkich czterech formatach. W kolorze zielonym nie ma tylko formatu 75 × 15 mm.' },
    { question: 'Jakie drukarki obsługują zawieszki B-7598?', answer: 'Zawieszki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zalecana taśma barwiąca to R6000HF.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie okablowania łączności i transmisji danych'],
}

// ---------------------------------------------------------------------------
// Zawieszki z poliolefiny B-348 (cps-4402372)
// ---------------------------------------------------------------------------

const ZAWIESZKI_348: Wiersz[] = [
  ['THT-7525-348-WT', '75 × 25', 250, 'WT'],
  ['THT-7525-348-YL', '75 × 25', 250, 'YL'],
  ['THT-7515-348-WT', '75 × 15', 500, 'WT'],
  ['THT-7515-348-YL', '75 × 15', 500, 'YL'],
  ['THT-6010-348-YL', '60 × 10', 750, 'YL'],
  ['THT-6010-348-WT', '60 × 10', 750, 'WT'],
  ['THT-7510-348-WT', '75 × 10', 750, 'WT'],
  ['THT-7510-348-YL', '75 × 10', 750, 'YL'],
]

export const bradyTHTZawieszki348: Product = {
  ...wspolneTHT,
  id: 'brady-tht-7525-348-wt',
  slug: 'brady-tht-7525-348-wt',
  name: 'Zawieszki kablowe z poliolefiny Brady B-348 do transportu zbiorowego na rolce 76 mm',
  seoTitle: 'Brady B-348 — zawieszki z poliolefiny do i6100, i7100, i7500',
  seoDescription: 'Zawieszki Brady B-348 z poliolefiny, EN 45545-2 HL3, do drukarek Brady i6100, i7100 i i7500: biało-żółte, 4 formaty. PN: THT-7525-348-WT, THT-6010-348-YL.',
  shortDescription: 'Brady B-348 to zawieszki z poliolefiny o niskiej emisji dymu, bez halogenów, w kolorze białym i żółtym, w czterech formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-348 to bezhalogenowa poliolefina o matowej powierzchni, która wydziela mało dymu. Rodzina służy w transporcie zbiorowym: materiał odpowiada wymaganiu 24 normy EN 45545-2 dla kategorii pojazdów HL3. Zawieszki opisują przewody, kable i okablowanie łączności. Zawieszka ma w sumie cztery otwory, owale 5 × 2 mm.\n\nOsiem wersji tworzą cztery formaty w bieli i żółci. Najniższe, 75 × 10 oraz 60 × 10 mm, liczą po 750 sztuk na rolce. Format 75 × 15 mm liczy 500 sztuk, a format 75 × 25 mm 250.\n\nMateriał dobrze znosi UV, dlatego można go stosować w pomieszczeniach i na zewnątrz. Grubość folii to 0,020 mm. Pracuje w temperaturach od −55 °C do 105 °C. Taśma barwiąca R6000HF jest osobnym zakupem.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyolefin-cable-tags-for-mass-transit-cps-4402372',
  images: ['/images/products/brady/tht-7525-348-wt.png', '/images/products/brady/tht-6010-348-wt.png'],
  imageDescriptions: [
    'Szeroka rolka białych zawieszek z poliolefiny Brady B-348 o wymiarach 75 × 25 mm',
    'Rolka białych zawieszek z poliolefiny Brady B-348 o wymiarach 60 × 10 mm z rzędem otworów',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-348' },
    { name: 'Typ materiału', value: 'poliolefina o niskiej emisji dymu, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,020 mm' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'promieniowanie UV' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '750 / 500 / 250, zależnie od formatu' },
    { name: 'Otwory', value: '4, owalne, 5 × 2 mm' },
    { name: 'Normy', value: 'EN 45545-2, wymaganie 24, kategoria pojazdów HL3' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
  ],
  variants: warianty(ZAWIESZKI_348, 'zawieszka kablowa', 'B-348'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nNajwiększa zawieszka 75 × 25 mm ma 250 sztuk na rolce, najmniejsze po 750.',
    Kolor: 'Kolor poliolefiny.\n\nKażdy format jest dostępny jako biały i żółty.',
  },
  faq: [
    { question: 'Jaką normę spełniają zawieszki B-348?', answer: 'Spełniają wymagania EN 45545-2 (wymaganie 24, kategoria pojazdów HL3). Materiał jest bezhalogenowy i ma niską emisję dymu.' },
    { question: 'Czy zawieszki B-348 można stosować na zewnątrz?', answer: 'Tak. Materiał jest odporny na promieniowanie UV, a temperatura pracy mieści się w zakresie od −55 do 105 °C.' },
    { question: 'Którymi drukarkami zadrukuje się zawieszki B-348?', answer: 'Drukują je [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą R6000HF.' },
  ],
  applications: ['Znakowanie przewodów i kabli w transporcie zbiorowym', 'Oznaczanie okablowania łączności i transmisji danych'],
}

// ---------------------------------------------------------------------------
// Zawieszki z poliolefiny B-348 z ulepszonym formatem wykrojenia (cps-4851374)
// ---------------------------------------------------------------------------

const ZAWIESZKI_348_LL: Wiersz[] = [
  ['THT-7515LL-348-WT', '75 × 15', 500, 'WT'],
  ['THT-7515LL-348-YL', '75 × 15', 500, 'YL'],
  ['THT-6010LL-348-WT', '60 × 10', 750, 'WT'],
  ['THT-6010LL-348-YL', '60 × 10', 750, 'YL'],
  ['THT-7525LL-348-WT', '75 × 25', 500, 'WT'],
  ['THT-7525LL-348-YL', '75 × 25', 500, 'YL'],
  ['THT-7510LL-348-WT', '75 × 10', 750, 'WT'],
  ['THT-7510LL-348-YL', '75 × 10', 750, 'YL'],
]

export const bradyTHTZawieszki348LL: Product = {
  ...wspolneTHT,
  id: 'brady-tht-7515ll-348-wt',
  slug: 'brady-tht-7515ll-348-wt',
  name: 'Zawieszki kablowe z poliolefiny Brady B-348 do transportu zbiorowego z ulepszonym formatem wykrojenia na rolce 76 mm',
  seoTitle: 'Brady B-348 THT-LL — zawieszki z poliolefiny do i6100, i7100',
  seoDescription: 'Zawieszki Brady B-348 z poliolefiny, ulepszone wykrojenie, EN 45545-2 HL3, do drukarek Brady i6100 i i7100. PN: THT-7515LL-348-WT, THT-7515LL-348-YL.',
  shortDescription: 'Brady THT-LL-348 to zawieszki z poliolefiny B-348 w ulepszonym wykrojeniu, białe i żółte, w czterech formatach. Do drukarek Brady i6100 i i7100, a wersja THT-7515LL-348-YL także i7500.',
  description: 'Zawieszki THT-LL-348 wykrojono w ulepszonym formacie z poliolefiny B-348. Zawieszkę zdejmuje się z nośnika szybciej i bez rozdarcia podkładu. Poliolefina jest matowa, bezhalogenowa i ma niską emisję dymu. Przeznaczono ją do transportu zbiorowego; obowiązuje ją norma kolejowa EN 45545-2, kategoria HL3, wymaganie 24.\n\nW rodzinie jest osiem wersji, wszystkie białe albo żółte. Podziałka zawieszki 75 × 15 mm wynosi 20,02 mm, a nośnik ma 75 mm szerokości. Rolki z zawieszkami o wysokości 10 mm mieszczą po 750 sztuk, a rolki z zawieszkami wyższymi (15 oraz 25 mm) mieszczą ich po 500. Zawieszki znakują przewody, kable i okablowanie łączności.\n\nPoliolefina znosi mróz do −55 °C i ciepło do 105 °C, a także promieniowanie UV. Do nadruku służy taśma R6000HF, dostępna osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyolefin-cable-tags-for-mass-transit-in-clever-die-cut-format-cps-4851374',
  images: ['/images/products/brady/tht-7515ll-348-wt.png', '/images/products/brady/tht-6010ll-348-yl.png'],
  imageDescriptions: [
    'Rolka białych zawieszek z poliolefiny Brady B-348 w ulepszonym wykrojeniu o wymiarach 75 × 15 mm',
    'Rolka żółtych zawieszek z poliolefiny Brady B-348 w ulepszonym wykrojeniu o wymiarach 60 × 10 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-348' },
    { name: 'Typ materiału', value: 'poliolefina o niskiej emisji dymu, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,020 mm' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'promieniowanie UV' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '750 (60 × 10 i 75 × 10 mm) albo 500 (75 × 15 i 75 × 25 mm)' },
    { name: 'Otwory', value: '4, owalne, 5 × 2 mm' },
    { name: 'Normy', value: 'EN 45545-2, wymaganie 24, kategoria pojazdów HL3' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'Brady i7500: tylko THT-7515LL-348-YL' },
  ],
  variants: warianty(ZAWIESZKI_348_LL, 'zawieszka kablowa', 'B-348'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nFormaty 60 × 10 i 75 × 10 mm mają po 750 sztuk, formaty 75 × 15 i 75 × 25 mm po 500.',
    Kolor: 'Kolor poliolefiny.\n\nKażdy format jest dostępny jako biały i żółty.',
  },
  faq: [
    { question: 'Czym zawieszki THT-LL-348 różnią się od zwykłych zawieszek B-348?', answer: 'Mają ulepszone wykrojenie. Zawieszkę zdejmuje się z nośnika szybciej, a podkład nie ulega rozdarciu. Materiał jest ten sam: poliolefina B-348.' },
    { question: 'Jaką normę spełniają te zawieszki?', answer: 'EN 45545-2, wymaganie 24, kategoria pojazdów HL3. Poliolefina jest bezhalogenowa i ma niską emisję dymu.' },
    { question: 'Które drukarki obsługują zawieszki THT-LL-348?', answer: 'Zawieszki obsługują [Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100). Wersję THT-7515LL-348-YL obsługuje także [Brady i7500](/produkt/brady-i7500). Zalecana taśma barwiąca to R6000HF.' },
  ],
  applications: ['Znakowanie przewodów i kabli w transporcie zbiorowym', 'Oznaczanie okablowania łączności i transmisji danych'],
}

// ---------------------------------------------------------------------------
// Zawieszki Hypertag z poliolefiny B-348 (cps-5081847)
// ---------------------------------------------------------------------------

const HYPERTAG: Wiersz[] = [
  ['THT-7512HT-348-RD', '75 × 12', 500, 'RD'],
  ['THT-7512HT-348-BL', '75 × 12', 500, 'BL'],
  ['THT-7512HT-348-WT', '75 × 12', 500, 'WT'],
  ['THT-7512HT-348-YL', '75 × 12', 500, 'YL'],
  ['THT-7825HT-348-RD', '78 × 25', 500, 'RD'],
  ['THT-7825HT-348-BL', '78 × 25', 500, 'BL'],
  ['THT-7825HT-348-WT', '78 × 25', 500, 'WT'],
  ['THT-7825HT-348-YL', '78 × 25', 500, 'YL'],
  ['THT-10721HT-348-BL', '107 × 21', 500, 'BL'],
  ['THT-10721HT-348-RD', '107 × 21', 500, 'RD'],
  ['THT-10721HT-348-WT', '107 × 21', 500, 'WT'],
  ['THT-10721HT-348-YL', '107 × 21', 500, 'YL'],
]

export const bradyTHTHypertag: Product = {
  ...wspolneTHT,
  id: 'brady-tht-7512ht-348-rd',
  slug: 'brady-tht-7512ht-348-rd',
  name: 'Zawieszki Hypertag Brady B-348 z poliolefiny na rolce 76 mm',
  seoTitle: 'Brady Hypertag B-348 — zawieszki do i6100, i7100, i7500',
  seoDescription: 'Zawieszki Brady Hypertag z poliolefiny B-348 do drukarek Brady i6100, i7100 i i7500: mocowanie bez opaski, 3 formaty. PN: THT-7512HT-348-RD, THT-10721HT-348-BL.',
  shortDescription: 'Brady Hypertag to zawieszki z poliolefiny B-348, które mocuje się do przewodu bez opaski kablowej. Trzy formaty, cztery kolory, do drukarek Brady i6100, i7100 i i7500.',
  description: 'Hypertag to zawieszka z matowej poliolefiny B-348, którą mocuje się do przewodu bez opaski kablowej. Taki sposób mocowania upraszcza i przyspiesza montaż. Wersja 75 × 12 mm obejmuje przewody w zakresie średnic 2–10 mm. Materiał jest bezhalogenowy i wydziela mało dymu.\n\nRodzina ma dwanaście wersji. Formaty to 75 × 12, 78 × 25 i 107 × 21 mm, każdy w czterech barwach: czerwonej, niebieskiej, białej i żółtej. Rolka zawiera 500 zawieszek. W formacie 75 × 12 mm pole zadruku ma 33 × 12 mm, a nośnik 85 mm szerokości.\n\nPromieniowanie UV nie niszczy B-348, więc zawieszki nadają się do wnętrz i na zewnątrz. Zawieszki wytrzymują temperatury z przedziału −55…105 °C. Zalecana taśma R6000 (R6000HF) wymaga osobnego zamówienia.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyolefin-hypertag-suitable-for-in-outdoor-application-cps-5081847',
  images: ['/images/products/brady/tht-7512ht-348-rd.png', '/images/products/brady/tht-7512ht-348-yl.png'],
  imageDescriptions: [
    'Rolka czerwonych zawieszek Hypertag Brady B-348 o wymiarach 75 × 12 mm z rozwiniętym paskiem',
    'Rolka żółtych zawieszek Hypertag Brady B-348 o wymiarach 75 × 12 mm z rozwiniętym paskiem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek Hypertag, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-348' },
    { name: 'Typ materiału', value: 'poliolefina o niskiej emisji dymu, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,020 mm' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'promieniowanie UV' },
    { name: 'Kolor', value: 'czerwony, niebieski, biały, żółty' },
    { name: 'Wymiary etykiety', value: '75 × 12 / 78 × 25 / 107 × 21 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Zakres średnicy przewodu', value: 'od 2 do 10 mm (wersja 75 × 12 mm)' },
    { name: 'Normy', value: 'EN 45545-2, wymaganie 24, kategoria pojazdów HL3' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
  ],
  variants: warianty(HYPERTAG, 'zawieszka Hypertag', 'B-348'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nTrzy formaty: 75 × 12, 78 × 25 i 107 × 21 mm, zawsze po 500 sztuk.',
    Kolor: 'Kolor poliolefiny.\n\nKażdy format występuje jako czerwony, niebieski, biały i żółty.',
  },
  faq: [
    { question: 'Jak mocuje się zawieszki Hypertag?', answer: 'Zawieszkę mocuje się do przewodu bez opaski kablowej. Wersja 75 × 12 mm pasuje do przewodów o średnicy od 2 do 10 mm.' },
    { question: 'Jakie formaty zawieszek Hypertag są dostępne?', answer: 'Trzy: 75 × 12, 78 × 25 i 107 × 21 mm. Każdy występuje w kolorze czerwonym, niebieskim, białym i żółtym, po 500 sztuk na rolce.' },
    { question: 'Które drukarki obsługują zawieszki Hypertag?', answer: 'Zawieszki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie elementów i wyposażenia', 'Znakowanie w instalacjach paneli fotowoltaicznych'],
}

// ---------------------------------------------------------------------------
// Zawieszka polipropylenowa B-412 76,2 × 152,4 mm (pid-tht-33-412-1-eu; zgodność REP: i6100 i i7500)
// ---------------------------------------------------------------------------

export const bradyTHTZawieszka412: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i6100', 'brady-i7500'],
  id: 'brady-tht-33-412-1-eu',
  slug: 'brady-tht-33-412-1-eu',
  name: 'Zawieszki polipropylenowe Brady B-412 76,2 × 152,4 mm na rolce 76 mm',
  seoTitle: 'Brady B-412 THT-33-412-1-EU — zawieszki do i6100 i i7500',
  seoDescription: 'Zawieszki polipropylenowe Brady B-412 76,2 × 152,4 mm do drukarek Brady i6100 i i7500: odporne na UV i chemikalia. PN: THT-33-412-1-EU, art. 199965.',
  shortDescription: 'Brady THT-33-412-1-EU to duża zawieszka z polipropylenu B-412 o wymiarach 76,2 × 152,4 mm, z jednym okrągłym otworem. Do drukarek Brady i6100 i i7500.',
  description: 'THT-33-412-1-EU to duża zawieszka z matowego polipropylenu B-412. Ma wymiary 76,2 × 152,4 mm, czyli 3 × 6 cali, i jeden okrągły otwór o średnicy 7 mm. Biała powierzchnia mieści opis, kod kreskowy i dane identyfikacyjne, a duży format pozwala rozmieścić je w kilku polach. Zawieszka znakuje komponenty i wyposażenie, instalacje elektryczne, okablowanie telekomunikacyjne oraz przewody i kable.\n\nGrubość polipropylenu to 0,201 mm. Chroni go odporność na rozdarcie, korozję, wilgoć, UV i pogodę, a także na chemikalia. Pracuje w przedziale temperatur −40…100 °C.\n\nNadruk powstaje termotransferowo. Zalecane są taśmy barwiące R4300 oraz R7950, zamawiane osobno. Zawieszkę drukują Brady i6100 i Brady i7500.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-tags-pid-tht-33-412-1-eu',
  images: ['/images/products/brady/tht-33-412-1-eu.png'],
  imageDescriptions: ['Rolka białych zawieszek polipropylenowych Brady B-412 o wymiarach 76,2 × 152,4 mm z rozwiniętym końcem'],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-412' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,201 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, rozdarcie, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '76,2 × 152,4 mm' },
    { name: 'Otwór', value: '1, okrągły, Ø 7 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300, R7950' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7500' },
    { name: 'Part Number', value: 'THT-33-412-1-EU (art. 199965)' },
  ],
  faq: [
    { question: 'Jakie wymiary ma zawieszka THT-33-412-1-EU?', answer: 'Ma 76,2 × 152,4 mm i jeden okrągły otwór o średnicy 7 mm. Materiał to biały, matowy polipropylen o grubości 0,201 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszki B-412?', answer: 'Zalecane są taśmy R4300 i R7950, sprzedawane osobno. Zawieszkę drukują [Brady i6100](/produkt/brady-i6100) oraz [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie komponentów i wyposażenia', 'Oznaczanie instalacji elektrycznych i telekomunikacyjnych', 'Znakowanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Zawieszka polietylenowa B-109 76,2 × 152,4 mm (pid-020499)
// ---------------------------------------------------------------------------

export const bradyTHTZawieszka109: Product = {
  ...wspolneTHT,
  id: 'brady-tht-33-109-0-5',
  slug: 'brady-tht-33-109-0-5',
  name: 'Zawieszki polietylenowe Brady B-109 76,2 × 152,4 mm na rolce 76 mm',
  seoTitle: 'Brady B-109 THT-33-109-0.5 — zawieszki do i6100, i7100, i7500',
  seoDescription: 'Zawieszki polietylenowe Brady B-109 76,2 × 152,4 mm do drukarek Brady i6100, i7100 i i7500: odporne na rozdarcie i niskie temperatury. PN: THT-33-109-0.5.',
  shortDescription: 'Brady THT-33-109-0.5 to zawieszka z polietylenu B-109 o wymiarach 76,2 × 152,4 mm, odporna na rozdarcie i zimno. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'THT-33-109-0.5 to zawieszka z matowego polietylenu B-109 o wymiarach 76,2 × 152,4 mm. Ma jeden okrągły otwór o średnicy 4,75 mm, a pole zadruku mierzy 76,2 × 137,44 mm. Zawieszki znakują przewody i kable, miejsca zablokowane w procedurach LOTO oraz urządzenia poddane kontroli i inwentaryzacji. Służą także jako oznaczenia bezpieczeństwa.\n\nKrzyżowo laminowany polietylen jest bardzo odporny na rozdarcie i dobrze znosi niskie temperatury. Grubość materiału wynosi 0,216 mm. Zawieszka jest biała, odporna na chemikalia i wilgoć, a jej numer artykułu Brady to 020499. Na dole skali materiał sięga −40 °C, ale na górze kończy się już na 49 °C.\n\nNadruk termotransferowy wykonuje się taśmą R4300 (i75-R4300) lub R7950. Taśmy trzeba kupić osobno.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-tags-pid-020499',
  images: ['/images/products/brady/tht-33-109-0-5.png'],
  imageDescriptions: ['Rolka białych zawieszek polietylenowych Brady B-109 o wymiarach 76,2 × 152,4 mm z rozwiniętym końcem'],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-109' },
    { name: 'Typ materiału', value: 'polietylen krzyżowo laminowany' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,216 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 49 °C' },
    { name: 'Odporność', value: 'rozdarcie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '76,2 × 152,4 mm' },
    { name: 'Pole zadruku', value: '76,2 × 137,44 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Otwór', value: '1, okrągły, Ø 4,75 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (i75-R4300), R7950' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
    { name: 'Part Number', value: 'THT-33-109-0.5 (art. 020499)' },
  ],
  faq: [
    { question: 'W jakich temperaturach pracuje zawieszka B-109?', answer: 'Od −40 do 49 °C. Polietylen dobrze znosi zimno, ale górna granica jest niska.' },
    { question: 'Ile zawieszek THT-33-109-0.5 jest na rolce?', answer: 'Na rolce jest 500 zawieszek o wymiarach 76,2 × 152,4 mm. Pole zadruku mierzy 76,2 × 137,44 mm.' },
    { question: 'Którymi drukarkami zadrukuje się zawieszki B-109?', answer: 'Zawieszki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zalecana taśma to R4300.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie miejsc blokowanych (LOTO) i kontrola inwentarza', 'Oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// Zawieszki wykrywalne detektorem metali B-7649 (cps-5081903; zgodność REP: i7100 i i7500)
// ---------------------------------------------------------------------------

const ZAWIESZKI_7649: [string, string, number][] = [
  ['THT-7515LL-7649-BL', '75 × 15', 500],
  ['THT-7525LL-7649-BL', '75 × 25', 500],
  ['THT-6010LL-7649-BL', '60 × 10', 750],
  ['THT-7510LL-7649-BL', '75 × 10', 750],
]

export const bradyTHTZawieszki7649: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100', 'brady-i7500'],
  id: 'brady-tht-7515ll-7649-bl',
  slug: 'brady-tht-7515ll-7649-bl',
  name: 'Zawieszki kablowe wykrywalne detektorem metali Brady B-7649 z ulepszonym formatem wykrojenia na rolce 76 mm',
  seoTitle: 'Brady B-7649 — zawieszki wykrywalne detektorem do i7100, i7500',
  seoDescription: 'Niebieskie zawieszki Brady B-7649 wykrywalne detektorem metali do drukarek Brady i7100 i i7500, HACCP/ISO 22000. PN: THT-7515LL-7649-BL, THT-6010LL-7649-BL.',
  shortDescription: 'Brady THT-LL-7649 to niebieskie zawieszki z polietylenu wykrywalnego detektorem metali, w czterech formatach, dla przemysłu spożywczego. Do drukarek Brady i7100 i i7500.',
  description: 'Zawieszki B-7649 wykonano z polietylenu zawierającego składnik wykrywalny detektorem metali. Są niebieskie. Ulepszone wykrojenie pozwala odejmować zawieszki od nośnika bez rozrywania podkładu, a przy tym szybciej. Materiał przeznaczono do trudnych warunków, także w przetwórstwie żywności i napojów, i dopuszczono go zgodnie z HACCP/ISO 22000.\n\nDo wyboru są cztery formaty. Dwa niższe (wysokość 10 mm) pakuje się po 750, a dwa wyższe (15 i 25 mm) — po 500 zawieszek na rolce. Zawieszka ma cztery owalne otwory 5 × 2 mm. Pasują do niej wykrywalne opaski kablowe Brady ToughWash (art. 145588).\n\nFolia ma 0,6 mm grubości, a przedział użytkowania wyznaczają −40 °C i 60 °C. Zawieszki oznaczają też przewody w placówkach medycznych i laboratoriach. Zalecana taśma barwiąca to R6802-WT (seria R6800), zamawiana osobno.',
  sameAs: 'https://www.brady.eu/labels/76mm-core-metal-dedectable-cable-wire-tag-cps-5081903',
  images: ['/images/products/brady/tht-7510ll-7649-bl.png'],
  imageDescriptions: ['Rolka niebieskich zawieszek Brady B-7649 wykrywalnych detektorem metali z rzędem owalnych otworów'],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7649' },
    { name: 'Typ materiału', value: 'polietylen wykrywalny detektorem metali' },
    { name: 'Grubość', value: '0,6 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Kolor', value: 'niebieski' },
    { name: 'Wymiary etykiety', value: '60 × 10 / 75 × 10 / 75 × 15 / 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '750 (60 × 10 i 75 × 10 mm) albo 500 (75 × 15 i 75 × 25 mm)' },
    { name: 'Otwory', value: '4, owalne, 5 × 2 mm' },
    { name: 'Normy', value: 'HACCP/ISO 22000' },
    { name: 'Zalecana taśma barwiąca', value: 'R6802-WT (seria R6800)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i7100, i7500' },
  ],
  variants: ZAWIESZKI_7649.map(([pn, wym, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — niebieska zawieszka kablowa wykrywalna B-7649 ${wym} mm`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nFormaty 60 × 10 i 75 × 10 mm mają po 750 sztuk, formaty 75 × 15 i 75 × 25 mm po 500.',
  },
  faq: [
    { question: 'Dlaczego zawieszki B-7649 są wykrywalne detektorem metali?', answer: 'Polietylen zawiera składnik wykrywalny detektorem. Zawieszki przeznaczono do przetwórstwa żywności i napojów, a materiał spełnia wymagania HACCP/ISO 22000.' },
    { question: 'Czy do zawieszek B-7649 pasują opaski kablowe?', answer: 'Tak, wykrywalne opaski Brady ToughWash o numerze artykułu 145588. Zawieszki mają cztery owalne otwory 5 × 2 mm.' },
    { question: 'Które drukarki obsługują zawieszki B-7649?', answer: 'Obsługują je [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą R6802-WT. Drukarka Brady i6100 ich nie obsługuje.' },
  ],
  applications: ['Znakowanie przewodów w przetwórstwie żywności i napojów', 'Oznaczanie przewodów w opiece zdrowotnej i laboratoriach'],
}

// ---------------------------------------------------------------------------
// Zawieszki BradyTag z Nomexu B-508 (cps-4402467; zgodność REP: i7100 i i7500)
// ---------------------------------------------------------------------------

const ZAWIESZKI_508: Wiersz[] = [
  ['HSNX-400-2-WT', '55,88 × 10,41', 2500, 'WT'],
  ['HSNX-400-2-YL', '55,88 × 10,41', 2500, 'YL'],
  ['HSNX-800-2-WT', '55,88 × 20,32', 2500, 'WT'],
  ['HSNX-800-2-YL', '55,88 × 20,32', 2500, 'YL'],
]

export const bradyTHTZawieszki508: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100', 'brady-i7500'],
  id: 'brady-hsnx-400-2-wt',
  slug: 'brady-hsnx-400-2-wt',
  name: 'Zawieszki kablowe Brady BradyTag z Nomexu B-508 na rolce 76 mm',
  seoTitle: 'Brady BradyTag B-508 — zawieszki z Nomexu do i7100 i i7500',
  seoDescription: 'Sztywne zawieszki Brady BradyTag B-508 z Nomexu do drukarek Brady i7100 i i7500, odporne na temperaturę od −70 do 130 °C. PN: HSNX-400-2-WT, HSNX-800-2-YL.',
  shortDescription: 'Brady BradyTag B-508 to sztywne zawieszki z Nomexu, białe i żółte, w dwóch formatach po 2500 sztuk na rolce. Do drukarek Brady i7100 i i7500.',
  description: 'BradyTag B-508 to sztywna zawieszka z Nomexu o grubości 0,305 mm i matowej powierzchni. Służy do oznaczania przewodów i wiązek kablowych. W każdej zawieszce wycięto cztery owale; w wersji HSNX-400 otwór mierzy 5,59 × 1,78 mm.\n\nDwa formaty: HSNX-400 o wymiarach 55,88 × 10,41 mm i HSNX-800 o wymiarach 55,88 × 20,32 mm, każdy jako biały lub żółty. Rolka mieści 2500 zawieszek. Nośnik wersji HSNX-400 ma 82,55 mm szerokości, a podziałka zawieszek wynosi 15,79 mm.\n\nNomex znosi −70 °C na dole skali i 130 °C na górze. Odpiera ciepło, ogień, chemikalia, korozję, wilgoć, rozdarcie, UV i pogodę. Do nadruku nadaje się taśma R4300 (i75-R4300) albo R7950, zamawiana osobno.',
  sameAs: 'https://www.brady.eu/labels/cable-harness-marking-tags-cps-4402467',
  images: ['/images/products/brady/hsnx-400-2-wt.png', '/images/products/brady/hsnx-400-2-wt-2.png'],
  imageDescriptions: [
    'Rolka białych zawieszek BradyTag z Nomexu Brady B-508 z wykrojonymi otworami wzdłuż nośnika',
    'Arkusz białych zawieszek BradyTag Brady B-508 z wykrojeniem i otworami widoczny z góry',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych BradyTag, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-508' },
    { name: 'Typ materiału', value: 'Nomex, sztywny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,305 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ciepło, ogień, chemikalia, korozja, wilgoć, rozdarcie, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '55,88 × 10,41 / 55,88 × 20,32 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '2500' },
    { name: 'Otwory', value: '4, owalne (HSNX-400: 5,59 × 1,78 mm)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (i75-R4300), R7950' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i7100, i7500' },
  ],
  variants: warianty(ZAWIESZKI_508, 'zawieszka kablowa BradyTag', 'B-508'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nHSNX-400 ma wysokość 10,41 mm, a HSNX-800 20,32 mm, obie po 2500 sztuk.',
    Kolor: 'Kolor zawieszki.\n\nKażdy format występuje jako biały i żółty.',
  },
  faq: [
    { question: 'W jakich temperaturach pracują zawieszki B-508?', answer: 'Od −70 do 130 °C. Nomex jest odporny na ciepło i ogień, a ponadto na chemikalia, korozję oraz promieniowanie UV.' },
    { question: 'Czym różnią się HSNX-400 i HSNX-800?', answer: 'Wysokością zawieszki: HSNX-400 ma 10,41 mm, a HSNX-800 20,32 mm. Szerokość wynosi w obu 55,88 mm, a rolka mieści po 2500 sztuk.' },
    { question: 'Które drukarki obsługują zawieszki B-508?', answer: 'Obsługują je [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Drukarka Brady i6100 ich nie obsługuje.' },
  ],
  applications: ['Znakowanie przewodów i wiązek kablowych', 'Oznaczanie w warunkach wysokiej temperatury'],
}

// ---------------------------------------------------------------------------
// Zawieszki Rapido B-7599 (cps-4402461; bez THT-03 i THT-04, które nie pasują do i6100, i7100 ani i7500)
// ---------------------------------------------------------------------------

// [PN, wymiar, sztuk na rolce, wymiar otworu]
const RAPIDO: [string, string, number, string][] = [
  ['THT-01-7599-YL', '23 × 5,2', 2500, '3,9 × 2,4'],
  ['THT-02-7599-YL', '23 × 5,2', 2500, '4,9 × 3,5'],
  ['THT-05-7599-YL', '41 × 11', 1500, '10,5 × 8,4'],
]

export const bradyTHTRapido: Product = {
  ...wspolneTHT,
  id: 'brady-tht-01-7599-yl',
  slug: 'brady-tht-01-7599-yl',
  name: 'Zawieszki do znakowania przewodów Brady Rapido B-7599 na rolce 76 mm',
  seoTitle: 'Brady Rapido B-7599 — zawieszki do i6100, i7100, i7500',
  seoDescription: 'Żółte zawieszki Brady Rapido B-7599 do znakowania przewodów, do drukarek Brady i6100, i7100 i i7500. PN: THT-01-7599-YL, THT-02-7599-YL, THT-05-7599-YL.',
  shortDescription: 'Brady Rapido to małe, żółte zawieszki z polietylenu B-7599 do znakowania przewodów, w trzech wersjach. Do drukarek Brady i7100 i i7500, a wersja THT-05-7599-YL także i6100.',
  description: 'Rapido to zawieszki do znakowania przewodów, wykonane z matowego polietylenu B-7599 o grubości 0,250 mm. Są żółte, a nadruk powstaje termotransferowo. Średnica otworu zależy od wersji.\n\nTrzy wersje różnią się wymiarami. THT-01 i THT-02 mają 23 × 5,2 mm i po 2500 sztuk na rolce, a THT-05 ma 41 × 11 mm i 1500 sztuk. Otwory mierzą odpowiednio 3,9 × 2,4, 4,9 × 3,5 oraz 10,5 × 8,4 mm.\n\nOdporność obejmuje wilgoć i promieniowanie UV. Polietylen pracuje w przedziale od −40 do 50 °C. Wersje THT-01 i THT-02 obsługują drukarki Brady i7100 oraz i7500, a wersja THT-05 także i6100.',
  sameAs: 'https://www.brady.eu/labels/rapido-wire-marking-tags-for-thermal-transfer-printers-cps-4402461',
  images: ['/images/products/brady/tht-01-7599-yl.png'],
  imageDescriptions: ['Rolka żółtych zawieszek Rapido Brady B-7599 z rzędem małych otworów i częściowo rozwiniętym paskiem'],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek do znakowania przewodów, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7599' },
    { name: 'Typ materiału', value: 'polietylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,250 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Odporność', value: 'wilgoć, promieniowanie UV' },
    { name: 'Kolor', value: 'żółty' },
    { name: 'Wymiary etykiety', value: '23 × 5,2 / 41 × 11 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '2500 (23 × 5,2 mm) albo 1500 (41 × 11 mm)' },
    { name: 'Otwór', value: 'od 3,9 × 2,4 do 10,5 × 8,4 mm, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'Brady i6100: tylko THT-05-7599-YL' },
  ],
  variants: RAPIDO.map(([pn, wym, szt, otwor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — żółta zawieszka Rapido B-7599 ${wym} mm`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Otwór: `${otwor} mm` } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość zawieszki oraz liczba sztuk na rolce.\n\nWersje 23 × 5,2 mm mają po 2500 sztuk, wersja 41 × 11 mm 1500 sztuk.',
    Otwór: 'Wymiar otworu w zawieszce.\n\nW rodzinie otwory mają od 3,9 × 2,4 do 10,5 × 8,4 mm.',
  },
  faq: [
    { question: 'Jakie wymiary mają zawieszki Rapido?', answer: 'Wersje THT-01 i THT-02 mają 23 × 5,2 mm, a wersja THT-05 ma 41 × 11 mm. Materiałem jest żółty polietylen B-7599 o grubości 0,250 mm.' },
    { question: 'Które drukarki obsługują zawieszki Rapido?', answer: 'Wersje THT-01 i THT-02 obsługują [Brady i7100](/produkt/brady-i7100) oraz [Brady i7500](/produkt/brady-i7500). Wersję THT-05 obsługuje także [Brady i6100](/produkt/brady-i6100).' },
  ],
  applications: ['Znakowanie przewodów'],
}

export const bradyTHTZawieszki: Product[] = [
  bradyTHTZawieszki7643LL,
  bradyTHTZawieszki7643,
  bradyTHTOznacznikiHCM,
  bradyTHTZawieszki7598,
  bradyTHTZawieszki348,
  bradyTHTZawieszki348LL,
  bradyTHTHypertag,
  bradyTHTZawieszka412,
  bradyTHTZawieszka109,
  bradyTHTZawieszki7649,
  bradyTHTZawieszki508,
  bradyTHTRapido,
]

export const bradyTHTZawieszkiSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-tht-6010ll-7643-wt': 'przewody',
  'brady-tht-7525-7643-yl': 'przewody',
  'brady-hcm-75x25-b7643-bk': 'przewody',
  'brady-tht-7525-7598-wt': 'przewody',
  'brady-tht-7525-348-wt': 'przewody',
  'brady-tht-7515ll-348-wt': 'przewody',
  'brady-tht-7512ht-348-rd': 'przewody',
  'brady-tht-33-412-1-eu': 'przewody',
  'brady-tht-33-109-0-5': 'przewody',
  'brady-tht-7515ll-7649-bl': 'przewody',
  'brady-hsnx-400-2-wt': 'przewody',
  'brady-tht-01-7599-yl': 'przewody',
}
