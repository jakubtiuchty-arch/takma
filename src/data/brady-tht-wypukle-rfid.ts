import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Etykiety wypukłe B-7593, One Step Protect (B-711, B-712), poliester z recyklingu B-618 i etykiety UHF RFID Brady na rolkach
// z gilzą 76 mm do drukarek i6100, i7100 i i7500 (RFID: tylko i7500 w wersji RFID). Jedna karta na rodzinę z brady.eu,
// PN jako warianty. 14.11.2026.

// Drukarki bez i6100 (zgodność z danych producenta: i7100 i i7500).
const BEZ_I6100: Product['relatedProducts'] = ['brady-i7100', 'brady-i7500']

// ---------------------------------------------------------------------------
// One Step Protect B-712, przezroczysty poliester z białą ramką kleju (cps-4427683)
// ---------------------------------------------------------------------------

// [PN, wymiar etykiety]
const OSP_712: [string, string][] = [
  ['THT-382-712-1', '25,4 × 19,05'],
  ['THT-383-712-1', '50,8 × 25,4'],
  ['THT-384-712-1', '76,2 × 50,8'],
]

export const bradyTHTOneStepProtect712: Product = {
  ...wspolneTHT,
  id: 'brady-tht-382-712-1',
  slug: 'brady-tht-382-712-1',
  name: 'Przezroczyste etykiety poliestrowe Brady One Step Protect B-712 z białą ramką kleju na rolce 76 mm',
  seoTitle: 'Brady One Step Protect B-712 — etykiety, i6100, i7100, i7500',
  seoDescription: 'Etykiety Brady One Step Protect B-712 do i6100, i7100 i i7500: nadruk pod folią, od −80 do 100 °C. PN: THT-382-712-1, THT-383-712-1, THT-384-712-1.',
  shortDescription: 'Brady One Step Protect B-712 to przezroczyste etykiety poliestrowe z nadrukiem od spodu i białą ramką kleju, w trzech formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'One Step Protect B-712 to bezbarwny poliester z trwałym klejem akrylowym i błyszczącą powierzchnią. Drukarka nanosi treść na spód folii, a odczytuje się ją przez materiał. Rysy, paliwa, oleje i rozpuszczalniki nie sięgają farby, więc osobny laminat jest zbędny. Okienko pokazuje podłoże, a wokół niego biegnie biała ramka kleju. Takie etykiety noszą tabliczki marki, obudowy urządzeń, komponenty oraz sprzęt w ewidencji.\n\nNa rolce mieści się 1000 sztuk. Dostępne są trzy wykroje. Dostępne są wykroje 25,4 × 19,05 mm, 50,8 × 25,4 mm i największy 76,2 × 50,8 mm. Pole nadruku najmniejszej etykiety ma 17,78 × 11,43 mm.\n\nPrzezroczysta folia o grubości 0,178 mm pracuje w zakresie temperatur od −80 do 100 °C. Materiał odpiera ścieranie i chemikalia, a klej wiąże z powierzchniami gładkimi. Do procesów SMT nie jest przeznaczony. Do wydruku zaleca się taśmę R6006, a w i7500 jej odmianę i75-R6006.',
  sameAs: 'https://www.brady.eu/labels/cps-4427683',
  images: [
    '/images/products/brady/tht-382-712-1.png',
    '/images/products/brady/tht-384-712-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-382-712-1 z przezroczystymi etykietami One Step Protect B-712 o białej ramce kleju, 25,4 × 19,05 mm',
    'Rolka Brady THT-384-712-1 z przezroczystymi etykietami One Step Protect B-712 o białej ramce kleju, 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'One Step Protect B-712' },
    { name: 'Typ materiału', value: 'przezroczysty poliester, nadruk na spodniej stronie folii' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,178 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, zarysowania, chemikalia, rozpuszczalniki, paliwa i oleje, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'przezroczysty, z białą ramką kleju' },
    { name: 'Wymiary etykiety', value: '25,4 × 19,05 / 50,8 × 25,4 / 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000' },
    { name: 'Zalecana taśma barwiąca', value: 'R6006; do i7500: i75-R6006' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: OSP_712.map(([pn, wym]) => ({
    partNumber: pn,
    name: `Brady ${pn} — przezroczysta etykieta One Step Protect B-712 z białą ramką ${wym} mm, 1000 szt.`,
    attributes: { Rozmiar: `${wym} mm, 1000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nWszystkie formaty mają 1000 etykiet na rolce, od 25,4 × 19,05 do 76,2 × 50,8 mm.',
  },
  faq: [
    { question: 'Dlaczego etykiety One Step Protect B-712 nie wymagają laminatu?', answer: 'Nadruk leży na spodniej stronie przezroczystej folii. Poliester chroni go przed zarysowaniem i chemikaliami.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-712?', answer: 'Zaleca się taśmę R6006, a do i7500 jej odmianę i75-R6006. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Czy etykiety B-712 nadają się do technologii SMT?', answer: 'Nie. Materiał nie działa w tym zastosowaniu. Przeznaczono go do tabliczek, obudów urządzeń i ewidencji sprzętu.' },
  ],
  applications: ['Tabliczki marki i etykiety własne na obudowach', 'Ewidencja sprzętu i komponentów', 'Oznaczanie urządzeń w telekomunikacji'],
}

// ---------------------------------------------------------------------------
// Poliester z recyklingu B-618, matowy biały (pid-tht-1-618-10, pid-tht-5-618-10, pid-tht-14-618-10, pid-170394)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk na rolce, rzędów, taśma barwiąca]
const RECYKLING_618: [string, string, string, string, string, string][] = [
  ['THT-1-618-10', '170392', '19,05 × 6,35', '10 000', '4', 'R6007 / R4904'],
  ['THT-14-618-10', '170393', '16,51 × 5,08', '10 000', '4', 'R6002 / R4900'],
  ['THT-5-618-10', '170395', '25,4 × 12,7', '10 000', '3', 'R6007 / R4904'],
  ['THT-19-618-1', '170394', '76,2 × 50,8', '1000', '1', 'R6002 / R4900'],
]

export const bradyTHTRecykling618: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1-618-10',
  slug: 'brady-tht-1-618-10',
  name: 'Matowe etykiety poliestrowe z recyklingu Brady B-618 na rolce 76 mm',
  seoTitle: 'Brady B-618 — etykiety poliestrowe z recyklingu, i6100, i7100',
  seoDescription: 'Matowe białe etykiety Brady B-618 z recyklingu do i6100, i7100 i i7500: kody kreskowe, od −70 do 120 °C. PN: THT-1-618-10, THT-5-618-10, THT-19-618-1.',
  shortDescription: 'Brady B-618 to matowy biały poliester zawierający co najmniej 25% materiału z recyklingu, w czterech formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-618 to matowy, biały poliester, w którym co najmniej 25% składu pochodzi z recyklingu. Etykiety przyjmują druk termotransferowy, także kody kreskowe. Klej akrylowy, trwały, nadaje się do gładkich powierzchni. Zastosowania to sprzęt telekomunikacyjny i znakowanie ogólne. Na płytkach drukowanych klei się je dopiero po zakończeniu produkcji, a w technologii SMT nie działają.\n\nW ofercie są cztery formaty. Dwa najmniejsze paski, 16,51 × 5,08 i 19,05 × 6,35 mm, leżą w czterech rzędach. Średni wykrój, 25,4 × 12,7 mm, leży w trzech rzędach. Największy wykrój, 76,2 × 50,8 mm, zajmuje rolkę w jednym rzędzie.\n\nFolia ma 0,0711 mm. Znosi pracę od −70 do 120 °C oraz chemikalia, wilgoć i korozję. Zatwierdzenia to UL i cUL Recognised. Do wersji THT-1-618-10 i THT-5-618-10 zaleca się taśmę R6007 albo R4904. Do THT-14-618-10 i THT-19-618-1 zaleca się R6002 albo R4900.',
  sameAs: 'https://www.brady.eu/products/76-mm-core-eco-friendly-matt-white-polyester-labels-pid-tht-1-618-10',
  images: [
    '/images/products/brady/tht-1-618-10.png',
    '/images/products/brady/tht-19-618-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1-618-10 z drobnymi matowymi białymi etykietami poliestrowymi 19,05 × 6,35 mm w czterech rzędach',
    'Rolka Brady THT-19-618-1 z dużymi matowymi białymi etykietami poliestrowymi 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-618' },
    { name: 'Typ materiału', value: 'poliester z co najmniej 25% materiału z recyklingu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0711 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '16,51 × 5,08 / 19,05 × 6,35 / 25,4 × 12,7 / 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 10 000, zależnie od wymiaru' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6007 albo R4904 (19,05 × 6,35 i 25,4 × 12,7 mm); R6002 albo R4900 (pozostałe formaty); do i7500: i75-R6007, i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Numery artykułów Brady', value: RECYKLING_618.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: RECYKLING_618.map(([pn, , wym, szt, rzedy, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała matowa etykieta poliestrowa B-618 z recyklingu ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy, Barwiąca: tasma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nPaski mają od 16,51 × 5,08 do 25,4 × 12,7 mm, a największa etykieta 76,2 × 50,8 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nDrobne paski leżą w czterech rzędach, a duży wykrój w jednym.',
    Barwiąca: 'Taśma barwiąca zalecana do danego formatu.\n\nDo i7500 stosuje się odmiany z przedrostkiem i75-, na przykład i75-R6007.',
  },
  faq: [
    { question: 'Co oznacza „z recyklingu” w etykietach B-618?', answer: 'Co najmniej 25% materiału folii pochodzi z recyklingu. Etykieta jest matowa, biała i ma trwały klej akrylowy.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-618?', answer: 'Do pasków 19,05 × 6,35 i 25,4 × 12,7 mm zaleca się R6007 albo R4904. Do pozostałych formatów zaleca się R6002 albo R4900.' },
    { question: 'Jakie drukarki obsługują etykiety B-618?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie ogólne i etykiety z kodami kreskowymi', 'Oznaczanie sprzętu telekomunikacyjnego', 'Etykiety na płytki drukowane po zakończeniu procesu'],
}

// ---------------------------------------------------------------------------
// One Step Protect B-711, przezroczysty poliester z przezroczystą ramką kleju (cps-4427689)
// ---------------------------------------------------------------------------

// [PN, wymiar etykiety]
const OSP_711: [string, string][] = [
  ['THT-382-711-1', '25,4 × 19,05'],
  ['THT-383-711-1', '50,8 × 25,4'],
  ['THT-384-711-1', '76,2 × 50,8'],
]

export const bradyTHTOneStepProtect711: Product = {
  ...wspolneTHT,
  relatedProducts: BEZ_I6100,
  id: 'brady-tht-382-711-1',
  slug: 'brady-tht-382-711-1',
  name: 'Przezroczyste etykiety poliestrowe Brady One Step Protect B-711 z przezroczystą ramką kleju na rolce 76 mm',
  seoTitle: 'Brady One Step Protect B-711 — etykiety do i7100 i i7500',
  seoDescription: 'Przezroczyste etykiety Brady One Step Protect B-711 do i7100 i i7500: nadruk pod folią, od −80 do 100 °C. PN: THT-382-711-1, THT-383-711-1, THT-384-711-1.',
  shortDescription: 'Brady One Step Protect B-711 to przezroczyste etykiety poliestrowe z nadrukiem od spodu i przezroczystą ramką kleju, w trzech formatach. Do drukarek Brady i7100 i i7500.',
  description: 'B-711 to wariant One Step Protect z przezroczystą ramką kleju. Bezbarwna folia poliestrowa przykrywa treść wydrukowaną od spodu, dlatego znaki leżą pod warstwą ochronną. Etykieta znosi ścieranie, paliwa, oleje i rozpuszczalniki bez dodatkowego laminatu. Podłoże pozostaje widoczne na całej powierzchni. Materiał trafia na tabliczki marki, etykiety własne i oznaczenia produktów.\n\nRolka liczy 1000 etykiet. Do wyboru są trzy wykroje o jednakowych parametrach materiału. Szerokości to 25,4 / 50,8 / 76,2 mm, a wysokości 19,05 / 25,4 / 50,8 mm. Wydruk na najmniejszym zajmuje 17,78 × 11,43 mm.\n\nGrubość materiału wynosi 0,178 mm, a temperatura pracy sięga od −80 do 100 °C. Przyczepność zapewnia klej akrylowy na gładkich podłożach. Materiał nie pracuje w procesach SMT. Do i7100 zaleca się taśmę R6006, do i7500 jej odmianę i75-R6006.',
  sameAs: 'https://www.brady.eu/labels/cps-4427689',
  images: [
    '/images/products/brady/tht-382-711-1.png',
    '/images/products/brady/tht-384-711-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-382-711-1 z przezroczystymi etykietami One Step Protect B-711 o przezroczystej ramce kleju, 25,4 × 19,05 mm',
    'Rolka Brady THT-384-711-1 z przezroczystymi etykietami One Step Protect B-711 o przezroczystej ramce kleju, 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'One Step Protect B-711' },
    { name: 'Typ materiału', value: 'przezroczysty poliester, nadruk na spodniej stronie folii' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,178 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, rozpuszczalniki, paliwa i oleje, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'przezroczysty, z przezroczystą ramką kleju' },
    { name: 'Wymiary etykiety', value: '25,4 × 19,05 / 50,8 × 25,4 / 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000' },
    { name: 'Zalecana taśma barwiąca', value: 'R6006; do i7500: i75-R6006' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500' },
  ],
  variants: OSP_711.map(([pn, wym]) => ({
    partNumber: pn,
    name: `Brady ${pn} — przezroczysta etykieta One Step Protect B-711 z przezroczystą ramką ${wym} mm, 1000 szt.`,
    attributes: { Rozmiar: `${wym} mm, 1000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nTrzy formaty, od 25,4 × 19,05 do 76,2 × 50,8 mm, po 1000 sztuk na rolce.',
  },
  faq: [
    { question: 'Dlaczego nadruk na etykiecie B-711 leży na spodniej stronie folii?', answer: 'Wydruk znajduje się pod przezroczystym poliestrem. Folia chroni go przed zarysowaniem i chemikaliami, więc laminat nie jest potrzebny.' },
    { question: 'Jakie drukarki obsługują etykiety B-711?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Do i7100 zaleca się taśmę R6006, a do i7500 jej odmianę i75-R6006.' },
    { question: 'Jakie formaty etykiet B-711 są dostępne?', answer: 'Trzy: 25,4 × 19,05, 50,8 × 25,4 i 76,2 × 50,8 mm. Na rolce znajduje się po 1000 etykiet.' },
  ],
  applications: ['Tabliczki marki i etykiety własne', 'Oznaczanie produktów i urządzeń', 'Ewidencja sprzętu i komponentów'],
}

// ---------------------------------------------------------------------------
// Wypukłe etykiety B-7593, prostokątne (cps-4402081)
// ---------------------------------------------------------------------------

const KOLORY_7593: Record<string, string> = { WT: 'Biały', SV: 'Srebrny', BK: 'Czarny', YL: 'Żółty' }
const KOLORY_7593_ZENSKIE: Record<string, string> = { WT: 'biała', SV: 'srebrna', BK: 'czarna', YL: 'żółta' }

// [PN, kolor, szerokość, wysokość, sztuk; w paczce zamiast na rolce — ostatnie trzy formaty]
const PROSTOKATNE_7593: [string, string, string, string, string][] = [
  ['THTEP-03-7593-WT', 'WT', '27', '15', '1500'],
  ['805806', 'SV', '27', '15', '1500'],
  ['THTEP-03-7593-BK', 'BK', '27', '15', '1500'],
  ['THTEP-04-7593-WT', 'WT', '27', '18', '1500'],
  ['THTEP-04-7593-SV', 'SV', '27', '18', '1500'],
  ['THTEP-04-7593-BK', 'BK', '27', '18', '1500'],
  ['THTEP-02-7593-WT', 'WT', '27', '12,45', '2000'],
  ['THTEP-02-7593-SV', 'SV', '27', '12,45', '2000'],
  ['THTEP-02-7593-BK', 'BK', '27', '12,45', '2000'],
  ['THTEP-01-7593-WT', 'WT', '27', '7,95', '2500'],
  ['THTEP-01-7593-SV', 'SV', '27', '7,95', '2500'],
  ['THTEP-01-7593-BK', 'BK', '27', '7,95', '2500'],
  ['THTEP-07-7593-WT', 'WT', '35', '18', '1250'],
  ['620372', 'SV', '35', '18', '1250'],
  ['THTEP-07-7593-BK', 'BK', '35', '18', '1250'],
  ['THTEP-07-7593-YL', 'YL', '35', '18', '1250'],
  ['THTEP-08-7593-WT', 'WT', '48', '19', '1250'],
  ['620459', 'SV', '48', '19', '1250'],
  ['THTEP-08-7593-BK', 'BK', '48', '19', '1250'],
  ['THTEP-08-7593-YL', 'YL', '48', '19', '1250'],
  ['THTEP-06-7593-WT', 'WT', '45', '15', '1500'],
  ['THTEP-06-7593-SV', 'SV', '45', '15', '1500'],
  ['THTEP-06-7593-BK', 'BK', '45', '15', '1500'],
  ['THTEP-09-7593-WT', 'WT', '69', '19', '1200'],
  ['THTEP-09-7593-SV', 'SV', '69', '19', '1200'],
  ['THTEP-09-7593-BK', 'BK', '69', '19', '1200'],
  ['THTEP-09-7593-YL', 'YL', '69', '19', '1200'],
  ['THTEP-15-7593-WT', 'WT', '60', '30', '750'],
  ['620376', 'SV', '60', '30', '750'],
  ['THTEP-15-7593-BK', 'BK', '60', '30', '750'],
  ['THTEP-15-7593-YL', 'YL', '60', '30', '750'],
  ['THTEP-21-7593-WT', 'WT', '75', '25', '500'],
  ['THTEP-21-7593-YL', 'YL', '75', '25', '500'],
  ['THTEP-22-7593-WT', 'WT', '100', '25', '500'],
  ['THTEP-22-7593-YL', 'YL', '100', '25', '500'],
  ['THTEP-11-7593-WT', 'WT', '100', '30', '500'],
  ['THTEP-11-7593-SV', 'SV', '100', '30', '500'],
  ['THTEP-11-7593-BK', 'BK', '100', '30', '500'],
  ['THTEP-11-7593-YL', 'YL', '100', '30', '500'],
  ['THTEP-16-7593-WT', 'WT', '90', '44,45', '500'],
  ['620380', 'SV', '90', '44,45', '500'],
  ['THTEP-16-7593-BK', 'BK', '90', '44,45', '500'],
  ['THTEP-16-7593-YL', 'YL', '90', '44,45', '500'],
  ['THTEP-12-7593-WT', 'WT', '100', '50', '500'],
  ['THTEP-12-7593-SV', 'SV', '100', '50', '500'],
  ['THTEP-12-7593-BK', 'BK', '100', '50', '500'],
  ['THTEP-12-7593-YL', 'YL', '100', '50', '500'],
]

// Formaty sprzedawane w paczkach: [PN, kolor, szerokość, wysokość, sztuk w paczce]
const PACZKI_7593: [string, string, string, string, string][] = [
  ['THTEP-20-7593-WT', 'WT', '8', '125', '2800'],
  ['THTEP-17-7593-WT', 'WT', '69', '150', '400'],
  ['THTEP-17-7593-SV', 'SV', '69', '150', '400'],
  ['THTEP-18-7593-WT', 'WT', '60', '400', '200'],
  ['THTEP-18-7593-SV', 'SV', '60', '400', '200'],
]

export const bradyTHTWypukle7593Prostokatne: Product = {
  ...wspolneTHT,
  relatedProducts: BEZ_I6100,
  id: 'brady-thtep-03-7593-wt',
  slug: 'brady-thtep-03-7593-wt',
  name: 'Wypukłe etykiety prostokątne Brady B-7593 na rolce 76 mm',
  seoTitle: 'Brady B-7593 — wypukłe etykiety prostokątne, i7100 i i7500',
  seoDescription: 'Wypukłe etykiety prostokątne Brady B-7593 do i7100 i i7500: pianka 0,65 mm, od −40 do 100 °C, cztery kolory. PN: THTEP-03-7593-WT, THTEP-12-7593-SV, 805806.',
  shortDescription: 'Brady B-7593 to wypukłe etykiety prostokątne w czternastu formatach rolek i trzech formatach paczek, w czterech kolorach. Do drukarek Brady i7100 i i7500.',
  description: 'THTEP to wypukłe etykiety wykonane z materiału B-7593. Poliester i pianka polietylenowa tworzą warstwę 0,65 mm, a spód pokrywa klej akrylowy z podkładem z pianki. Błyszcząca strona przyjmuje druk termotransferowy. Wykroje prostokątne oznaczają urządzenia w telekomunikacji i elektryce oraz służą identyfikacji ogólnej.\n\nRolki występują w czternastu formatach, od 27 × 7,95 do 100 × 50 mm, po 500–2500 etykiet. Kolory to biały, srebrny, czarny i żółty, zależnie od formatu. Trzy wydłużone formaty — 8 × 125, 69 × 150 i 60 × 400 mm — pakuje się w paczki po 200–2800 sztuk.\n\nGórna granica temperatury to 100 °C, dolna −40 °C. Materiał odpiera ścieranie, wilgoć, UV i wpływ pogody oraz skrajne temperatury. Wszystkie formaty wykonano z tego samego laminatu. Do wydruku służy taśma z serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/raised-profile-labels-for-thermal-transfer-printers-rectangular-cps-4402081',
  images: [
    '/images/products/brady/thtep-03-7593-wt.png',
    '/images/products/brady/thtep-21-7593-yl.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTEP-03-7593-WT z białymi wypukłymi etykietami prostokątnymi B-7593 o wymiarach 27 × 15 mm',
    'Rolka Brady THTEP-21-7593-YL z żółtymi wypukłymi etykietami prostokątnymi B-7593 o wymiarach 75 × 25 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce albo w paczce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7593' },
    { name: 'Typ materiału', value: 'poliester laminowany z pianką polietylenową, profil wypukły' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, na podkładzie piankowym' },
    { name: 'Grubość', value: '0,65 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, UV, warunki atmosferyczne, wysoka i niska temperatura' },
    { name: 'Kolory', value: 'biały, srebrny, czarny, żółty' },
    { name: 'Wymiary etykiety', value: 'od 27 × 7,95 do 100 × 50 mm na rolkach; 8 × 125, 69 × 150 i 60 × 400 mm w paczkach' },
    { name: 'Liczba sztuk', value: 'od 500 do 2500 na rolce; od 200 do 2800 w paczce' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm (rolki)' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500' },
  ],
  variants: [
    ...PROSTOKATNE_7593.map(([pn, kolor, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${KOLORY_7593_ZENSKIE[kolor]} wypukła etykieta prostokątna B-7593 ${w} × ${h} mm, ${szt} szt.`,
      attributes: { Rozmiar: `${w} × ${h} mm, ${szt} szt.`, Kolor: KOLORY_7593[kolor] },
      availability: 'unavailable' as const,
    })),
    ...PACZKI_7593.map(([pn, kolor, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${KOLORY_7593_ZENSKIE[kolor]} wypukła etykieta prostokątna B-7593 ${w} × ${h} mm, ${szt} szt. w paczce`,
      attributes: { Rozmiar: `${w} × ${h} mm, ${szt} szt.`, Kolor: KOLORY_7593[kolor] },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk w opakowaniu.\n\nRolki mają od 500 do 2500 etykiet, a wydłużone formaty 8 × 125, 69 × 150 i 60 × 400 mm sprzedaje się w paczkach.',
    Kolor: 'Kolor laminatu etykiety.\n\nDostępne są biały, srebrny, czarny i żółty, zależnie od formatu.',
  },
  faq: [
    { question: 'Czym wyróżnia się materiał B-7593?', answer: 'Ma wypukły profil o grubości 0,65 mm. Poliester łączy się w nim z pianką polietylenową, a klej akrylowy leży na podkładzie piankowym.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7593?', answer: 'Zaleca się taśmę barwiącą z serii R6000HF. Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'W jakich temperaturach pracują etykiety B-7593?', answer: 'Od −40 do 100 °C. Materiał odpiera także wilgoć, ścieranie, promieniowanie UV i warunki atmosferyczne.' },
  ],
  applications: ['Oznaczenia w telekomunikacji i elektryce', 'Identyfikacja ogólna urządzeń', 'Etykiety o wypukłym profilu w czterech kolorach'],
}

// ---------------------------------------------------------------------------
// Wypukłe etykiety B-7593 do przycisków (cps-4402083)
// ---------------------------------------------------------------------------

const KOLORY_PRZYCISK: Record<string, string> = { SV: 'Srebrny', BK: 'Czarny', GN: 'Zielony', RD: 'Czerwony', WT: 'Biały' }
const KOLORY_PRZYCISK_ZENSKIE: Record<string, string> = { SV: 'srebrna', BK: 'czarna', GN: 'zielona', RD: 'czerwona', WT: 'biała' }

export const bradyTHTWypukle7593Przycisk: Product = {
  ...wspolneTHT,
  relatedProducts: BEZ_I6100,
  id: 'brady-thtep-05-7593-sv',
  slug: 'brady-thtep-05-7593-sv',
  name: 'Wypukłe etykiety do przycisków Brady B-7593 na rolce 76 mm',
  seoTitle: 'Brady B-7593 — wypukłe etykiety do przycisków, i7100 i i7500',
  seoDescription: 'Wypukłe etykiety Brady B-7593 do przycisków, do i7100 i i7500: 30 × 40 mm, otwór 24 mm, pięć kolorów. PN: THTEP-05-7593-SV, THTEP-05-7593-RD, THTEP-05-7593-GN.',
  shortDescription: 'Brady THTEP-05 to wypukłe etykiety B-7593 do przycisków, z otworem Ø 24 mm, w pięciu kolorach. Do drukarek Brady i7100 i i7500.',
  description: 'THTEP-05 to etykieta do przycisków z wypukłego materiału B-7593. Wykrój 30 × 40 mm ma otwór Ø 24 mm. Dostępne kolory to srebrny, czarny, zielony, czerwony i biały. Poza barwą warianty są identyczne, a parametry materiału wspólne. Etykieta służy do oznaczeń w elektryce i telekomunikacji oraz do identyfikacji ogólnej.\n\nNa rolce jest 750 sztuk. Szerokość nośnika to 43 mm, a podziałka pionowa, liczona od początku jednej etykiety do początku następnej, wynosi 43,39 mm. Pianka polietylenowa połączona z poliestrem daje grubość 0,65 mm. Klej akrylowy na piance łączy etykietę z podłożem, a jej powierzchnia jest błyszcząca.\n\nEtykieta pracuje w temperaturze między −40 a 100 °C i odpiera ścieranie, wilgoć oraz UV. Wszystkie warianty drukuje się w tych samych drukarkach. Do druku służy taśma barwiąca z serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/raised-profile-labels-for-thermal-transfer-printers-push-button-cps-4402083',
  images: [
    '/images/products/brady/thtep-05-7593-sv.png',
    '/images/products/brady/thtep-05-7593-rd.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTEP-05-7593-SV z srebrnymi wypukłymi etykietami do przycisków z okrągłym otworem',
    'Rolka Brady THTEP-05-7593-RD z czerwonymi wypukłymi etykietami do przycisków z okrągłym otworem',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7593' },
    { name: 'Typ materiału', value: 'poliester laminowany z pianką polietylenową, profil wypukły' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, na podkładzie piankowym' },
    { name: 'Grubość', value: '0,65 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, UV, warunki atmosferyczne, wysoka i niska temperatura' },
    { name: 'Kolory', value: 'srebrny, czarny, zielony, czerwony, biały' },
    { name: 'Wymiary etykiety', value: '30 × 40 mm, otwór Ø 24 mm' },
    { name: 'Liczba sztuk na rolce', value: '750' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500' },
  ],
  variants: Object.entries(KOLORY_PRZYCISK).map(([kod, kolor]) => ({
    partNumber: `THTEP-05-7593-${kod}`,
    name: `Brady THTEP-05-7593-${kod} — ${KOLORY_PRZYCISK_ZENSKIE[kod]} wypukła etykieta do przycisków B-7593 30 × 40 mm, 750 szt.`,
    attributes: { Kolor: kolor },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Kolor: 'Kolor laminatu etykiety.\n\nKażdy wariant ma 30 × 40 mm, otwór Ø 24 mm i 750 sztuk na rolce.',
  },
  faq: [
    { question: 'Jakie wymiary mają etykiety THTEP-05?', answer: 'Etykieta ma 30 × 40 mm, a otwór w niej ma średnicę 24 mm. Na rolce znajduje się 750 sztuk.' },
    { question: 'W jakich kolorach występują etykiety do przycisków?', answer: 'W srebrnym, czarnym, zielonym, czerwonym i białym. Wszystkie mają ten sam materiał B-7593 z wypukłym profilem.' },
    { question: 'Jakie drukarki obsługują etykiety THTEP-05?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą z serii R6000HF.' },
  ],
  applications: ['Oznaczanie przycisków', 'Etykiety w elektryce i telekomunikacji', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Wypukłe etykiety B-7593, okrągłe z otworem (cps-4402085)
// ---------------------------------------------------------------------------

export const bradyTHTWypukle7593Okragle: Product = {
  ...wspolneTHT,
  relatedProducts: BEZ_I6100,
  id: 'brady-thtep-19-7593-rd',
  slug: 'brady-thtep-19-7593-rd',
  name: 'Wypukłe etykiety okrągłe z otworem Brady B-7593, składane harmonijkowo',
  seoTitle: 'Brady B-7593 — wypukłe etykiety okrągłe, i7100 i i7500',
  seoDescription: 'Okrągłe wypukłe etykiety Brady B-7593 z otworem 25 mm do i7100 i i7500: 60 × 60 mm, paczka 100 sztuk. PN: THTEP-19-7593-RD, THTEP-19-7593-YL.',
  shortDescription: 'Brady THTEP-19 to okrągłe wypukłe etykiety B-7593 z otworem Ø 25 mm, składane harmonijkowo, w kolorze czerwonym i żółtym. Do drukarek Brady i7100 i i7500.',
  description: 'THTEP-19 to okrągła etykieta z wypukłego materiału B-7593, w kolorze czerwonym albo żółtym. Pierścień o wymiarach 60 × 60 mm ma otwór Ø 25 mm. Etykiety składa się harmonijkowo i pakuje po 100 sztuk, a nie nawija na rolkę. Szerokość nośnika to 73 mm, a podziałka pionowa wynosi 69,85 mm.\n\nWarstwa poliestru z pianką polietylenową ma 0,65 mm. Podłoże z pianki pod klejem akrylowym zapewnia trwałe przyleganie. Błyszcząca powierzchnia przyjmuje wydruk termotransferowy. Etykiety stosuje się w elektryce, telekomunikacji i do identyfikacji ogólnej.\n\nDolną granicę stanowi −40 °C, górną 100 °C. Etykieta odpiera ścieranie, wilgoć, UV i pogodę. Obie wersje mają jednakowe wymiary i liczbę sztuk w paczce. Etykiety pakuje się po 100 sztuk w każdym z kolorów. Zalecana taśma to seria R6000HF. Etykiety drukują drukarki i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/raised-profile-labels-for-thermal-transfer-printers-circular-cps-4402085',
  images: [
    '/images/products/brady/thtep-19-7593-rd.png',
    '/images/products/brady/thtep-19-7593-yl.png',
  ],
  imageDescriptions: [
    'Stos czerwonych okrągłych etykiet Brady THTEP-19-7593-RD z otworem pośrodku, składanych harmonijkowo',
    'Żółte okrągłe etykiety Brady THTEP-19-7593-YL z otworem pośrodku, złożone harmonijkowo',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone, składane harmonijkowo, w paczce; bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7593' },
    { name: 'Typ materiału', value: 'poliester laminowany z pianką polietylenową, profil wypukły' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, na podkładzie piankowym' },
    { name: 'Grubość', value: '0,65 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, UV, warunki atmosferyczne, wysoka i niska temperatura' },
    { name: 'Kolory', value: 'czerwony, żółty' },
    { name: 'Wymiary etykiety', value: '60 × 60 mm, otwór Ø 25 mm' },
    { name: 'Liczba sztuk', value: '100 w paczce' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500' },
  ],
  variants: [
    { partNumber: 'THTEP-19-7593-RD', name: 'Brady THTEP-19-7593-RD — czerwona okrągła wypukła etykieta B-7593 60 × 60 mm z otworem, 100 szt. w paczce', attributes: { Kolor: 'Czerwony' }, availability: 'unavailable' as const },
    { partNumber: 'THTEP-19-7593-YL', name: 'Brady THTEP-19-7593-YL — żółta okrągła wypukła etykieta B-7593 60 × 60 mm z otworem, 100 szt. w paczce', attributes: { Kolor: 'Żółty' }, availability: 'unavailable' as const },
  ],
  variantAttributeTooltips: {
    Kolor: 'Kolor laminatu etykiety.\n\nOba warianty mają 60 × 60 mm, otwór Ø 25 mm i 100 sztuk w paczce.',
  },
  faq: [
    { question: 'Jak dostarcza się etykiety THTEP-19?', answer: 'Etykiety są składane harmonijkowo i pakowane po 100 sztuk. Nie są nawinięte na rolkę.' },
    { question: 'Jakie wymiary mają okrągłe etykiety B-7593?', answer: 'Pierścień ma 60 × 60 mm, a otwór pośrodku ma średnicę 25 mm.' },
    { question: 'Jakie drukarki obsługują etykiety THTEP-19?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą z serii R6000HF.' },
  ],
  applications: ['Etykiety okrągłe z otworem w elektryce', 'Oznaczenia w telekomunikacji', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Etykiety UHF RFID do ewidencji zasobów (cps-4301855); bez THT-HF-B423-43X25 (HF, drukarka Sato)
// ---------------------------------------------------------------------------

// [PN, wymiar etykiety]
const RFID_ZASOBY: [string, string][] = [
  ['THTUHF-B423-11-PDM', '53 × 26'],
  ['THT-UHF-B423-25.4', '101,6 × 25,4'],
  ['THT-UHF-B423-50.8', '101,6 × 50,8'],
]

export const bradyTHTRfidZasoby: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-thtuhf-b423-11-pdm',
  slug: 'brady-thtuhf-b423-11-pdm',
  name: 'Etykiety poliestrowe UHF RFID do ewidencji zasobów Brady na rolce 76 mm',
  seoTitle: 'Brady etykiety UHF RFID do ewidencji zasobów, i7500 RFID',
  seoDescription: 'Etykiety poliestrowe UHF RFID Brady do ewidencji zasobów, druk i kodowanie w i7500 RFID, chip NXP UCODE 8. PN: THTUHF-B423-11-PDM, THT-UHF-B423-25.4.',
  shortDescription: 'Brady THT-UHF to poliestrowe etykiety UHF RFID do ewidencji zasobów, w trzech formatach, po 500 sztuk na rolce. Do drukarki Brady i7500 w wersji RFID.',
  description: 'Etykiety THT-UHF łączą druk termotransferowy ze znacznikiem UHF RFID. Chip leży na antenie aluminiowej, a poliestrowa folia ma błyszczącą powierzchnię. Znaczniki służą ewidencji środków trwałych oraz identyfikacji ogólnej. Znaczniki przeznaczono na powierzchnie niemetalowe. Zgodną drukarką jest i7500 RFID.\n\nRodzina ma trzy formaty: 53 × 26, 101,6 × 25,4 oraz 101,6 × 50,8 mm. Producent kontroluje każdą sztukę i oznacza wadliwe znaczniki, więc rolka zawiera 500 sprawnych etykiet.\n\nChip NXP UCODE 8 i pamięć EPC 128 bitów zawiera etykieta 53 × 26 mm. Pasmo pracy to 860–960 MHz (ETSI), a norma to EPC Class 1 Gen 2 oraz ISO 18000-6C. Zasięg odczytu dochodzi do 11 m. Temperatura pracy chipa mieści się między −40 a 85 °C. Zaleca się stosowanie taśmy i75-R6000.',
  sameAs: 'https://www.brady.eu/labels/asset-tracking-rfid-labels-cps-4301855',
  images: [
    '/images/products/brady/thtuhf-b423-11-pdm.png',
    '/images/products/brady/tht-uhf-b423-25-4.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTUHF-B423-11-PDM z białymi etykietami UHF RFID 53 × 26 mm',
    'Rolka Brady THT-UHF-B423-25.4 z białymi etykietami UHF RFID 101,6 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety UHF RFID wykrojone na rolce, do druku termotransferowego i kodowania; bez taśmy barwiącej' },
    { name: 'Materiał', value: 'poliester z wkładką UHF RFID' },
    { name: 'Typ materiału', value: 'poliester, chip na antenie aluminiowej' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały' },
    { name: 'Częstotliwość', value: 'UHF, pasmo 860–960 MHz (ETSI)' },
    { name: 'Chip i pamięć', value: 'NXP UCODE 8, pamięć EPC 128 bitów (etykieta 53 × 26 mm)' },
    { name: 'Zasięg odczytu', value: 'do 11 m (etykieta 53 × 26 mm)' },
    { name: 'Temperatura pracy chipa', value: 'od −40 do 85 °C' },
    { name: 'Normy', value: 'EPC Class 1 Gen 2, ISO 18000-6C' },
    { name: 'Wymiary etykiety', value: '53 × 26 / 101,6 × 25,4 / 101,6 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R6000 (seria R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7500 w wersji RFID' },
  ],
  variants: RFID_ZASOBY.map(([pn, wym]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta UHF RFID do ewidencji zasobów ${wym} mm, 500 szt.`,
    attributes: { Rozmiar: `${wym} mm, 500 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nWszystkie formaty mają 500 sprawnych etykiet RFID na rolce.',
  },
  faq: [
    { question: 'Jaka drukarka koduje etykiety UHF RFID z tej rodziny?', answer: 'Do druku i kodowania służy [Brady i7500](/produkt/brady-i7500) w wersji RFID.' },
    { question: 'Na jakich powierzchniach działają te etykiety?', answer: 'Antenę zaprojektowano do powierzchni niemetalowych. Na metalu stosuje się etykiety RFID przeznaczone do tego podłoża.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet THT-UHF?', answer: 'Zaleca się taśmę i75-R6000 z serii R6000HF. Na rolce jest 500 sprawnych etykiet.' },
  ],
  applications: ['Ewidencja środków trwałych', 'Identyfikacja ogólna z kodowaniem RFID', 'Znakowanie w magazynie i łańcuchu dostaw'],
}

// ---------------------------------------------------------------------------
// Laboratoryjne etykiety UHF RFID z polipropylenu (cps-4301854)
// ---------------------------------------------------------------------------

// [PN, wymiar etykiety]
const RFID_LAB: [string, string][] = [
  ['309081', '53 × 26'],
  ['312403', '65 × 6'],
  ['309082', '45 × 30'],
]

export const bradyTHTRfidLab: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-309081',
  slug: 'brady-309081',
  name: 'Laboratoryjne etykiety polipropylenowe UHF RFID Brady B-7425 na rolce 76 mm',
  seoTitle: 'Brady B-7425 — laboratoryjne etykiety UHF RFID, i7500 RFID',
  seoDescription: 'Laboratoryjne etykiety UHF RFID Brady B-7425 z polipropylenu do druku i kodowania w i7500 RFID: od −80 do 70 °C, trzy formaty. PN: 309081, 312403, 309082.',
  shortDescription: 'Brady B-7425 to matowe etykiety polipropylenowe UHF RFID do pojemników laboratoryjnych, w trzech formatach. Do drukarki Brady i7500 w wersji RFID.',
  description: 'B-7425 RFID to biały, matowy polipropylen z chipem UHF na antenie aluminiowej. Etykiety trafiają do farmacji, ochrony zdrowia i laboratoriów. Format 53 × 26 mm przeznaczono na probówki stożkowe, butelki, duże probówki i płytki wielodołkowe. Te etykiety obsługuje tylko drukarka i7500 w wariancie RFID.\n\nRolka zawiera 500 etykiet, a znaczniki z wadą są na niej oznaczone. Rodzina obejmuje trzy formaty: 53 × 26, 65 × 6 oraz 45 × 30 mm. Najwęższa jest wersja 65 × 6 mm.\n\nWersja 53 × 26 mm ma grubość 0,26 mm i zakres pracy od −80 do 70 °C. Klej jest akrylowy i trwały. Chip NXP UCODE 8 ma 128 bitów pamięci EPC, a zasięg odczytu wynosi do 10 m. Zalecana taśma to i75-R6400.',
  sameAs: 'https://www.brady.eu/labels/laboratory-rfid-labels-cps-4301854',
  images: [
    '/images/products/brady/309081.png',
    '/images/products/brady/309082.png',
  ],
  imageDescriptions: [
    'Rolka Brady 309081 z białymi etykietami UHF RFID B-7425 53 × 26 mm',
    'Rolka Brady 309082 z białymi etykietami UHF RFID B-7425 45 × 30 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety UHF RFID wykrojone na rolce, do druku termotransferowego i kodowania; bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7425' },
    { name: 'Typ materiału', value: 'polipropylen, chip na antenie aluminiowej' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,26 mm (etykieta 53 × 26 mm)' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Częstotliwość', value: 'UHF, pasmo 860–960 MHz (ETSI)' },
    { name: 'Chip i pamięć', value: 'NXP UCODE 8, pamięć EPC 128 bitów (etykieta 53 × 26 mm)' },
    { name: 'Zasięg odczytu', value: 'do 10 m (etykieta 53 × 26 mm)' },
    { name: 'Wymiary etykiety', value: '53 × 26 / 65 × 6 / 45 × 30 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R6400 (seria R6400)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7500 w wersji RFID' },
  ],
  variants: RFID_LAB.map(([pn, wym]) => ({
    partNumber: pn,
    name: `Brady ${pn} — laboratoryjna etykieta UHF RFID B-7425 ${wym} mm, 500 szt.`,
    attributes: { Rozmiar: `${wym} mm, 500 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajwęższa etykieta ma 65 × 6 mm, a największa 53 × 26 mm.',
  },
  faq: [
    { question: 'Jaką drukarką drukuje się etykiety B-7425 RFID?', answer: 'Do druku i kodowania służy [Brady i7500](/produkt/brady-i7500) w wersji RFID. Zalecana taśma barwiąca to i75-R6400.' },
    { question: 'Na jakie pojemniki pasuje etykieta 53 × 26 mm?', answer: 'Na probówki stożkowe, butelki, duże probówki i płytki wielodołkowe w środowisku laboratoryjnym.' },
    { question: 'Jaki zakres temperatur znosi etykieta B-7425 RFID?', answer: 'Etykieta 53 × 26 mm pracuje od −80 do 70 °C. Temperatura pracy chipa to od −40 do 85 °C.' },
  ],
  applications: ['Znakowanie pojemników i próbek w laboratorium', 'Etykiety RFID w ochronie zdrowia i szpitalach', 'Ewidencja zasobów laboratoryjnych'],
}

// ---------------------------------------------------------------------------
// Etykieta UHF RFID na metal (cps-4301853); bez THT-UHF-M-PET-45X8 (dane producenta: żadna z drukarek i6100, i7100, i7500)
// ---------------------------------------------------------------------------

export const bradyTHTRfidMetal: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-322714',
  slug: 'brady-322714',
  name: 'Poliestrowe etykiety UHF RFID na metal Brady na rolce 76 mm',
  seoTitle: 'Brady etykiety UHF RFID na metal 50,8 × 25,4 mm, i7500 RFID',
  seoDescription: 'Poliestrowa etykieta UHF RFID Brady 50,8 × 25,4 mm na metal, plastik i płyny, do druku i kodowania w i7500 RFID: od −40 do 140 °C, 500 szt. PN: 322714.',
  shortDescription: 'Brady 322714 to poliestrowa etykieta UHF RFID na metal i trudne podłoża, 500 sztuk na rolce. Do drukarki Brady i7500 w wersji RFID.',
  description: 'Etykiety RFID na metal poleca się do znakowania metalu, cieczy, tworzyw i innych podłoży, na których zwykłe znaczniki słabo się odczytują. Przykłady to kosmetyki, napoje, przekąski i drobne artykuły konsumenckie. Błyszcząca folia poliestrowa przyjmuje wydruk termotransferowy. Wydruk i zapis chipa wykonuje i7500 RFID.\n\nEtykieta ma wymiary 50,8 × 25,4 mm. Rolka liczy 500 sztuk, wadliwe znaczniki oznaczono na nawoju, a pozostałe etykiety przeszły kontrolę. Podziałka pionowa wynosi 30,48 mm, a szerokość nośnika 60 mm.\n\nMateriał ma 1,3 mm grubości i pracuje od −40 do 140 °C. Pamięć EPC o rozmiarze 128 bitów zapewnia chip NXP UCODE 8, a odczyt dochodzi do 3,2 m. Taśma barwiąca i75-R6000 jest zalecana. Etykiety pracują w paśmie ETSI 860–960 MHz. Chip dopuszczono do użycia w przedziale od −40 do 85 °C.',
  sameAs: 'https://www.brady.eu/labels/on-metal-rfid-labels-cps-4301853',
  images: [
    '/images/products/brady/322714.png',
  ],
  imageDescriptions: [
    'Rolka Brady 322714 z etykietami UHF RFID na metal 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety UHF RFID wykrojone na rolce, do druku termotransferowego i kodowania; bez taśmy barwiącej' },
    { name: 'Part Number', value: '322714' },
    { name: 'Materiał', value: 'poliester z wkładką UHF RFID do stosowania na metalu' },
    { name: 'Typ materiału', value: 'poliester, chip na antenie aluminiowej' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały' },
    { name: 'Grubość', value: '1,3 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 140 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Częstotliwość', value: 'UHF, pasmo 860–960 MHz (ETSI)' },
    { name: 'Chip i pamięć', value: 'NXP UCODE 8, pamięć EPC 128 bitów' },
    { name: 'Zasięg odczytu', value: 'do 3,2 m' },
    { name: 'Wymiary etykiety', value: '50,8 × 25,4 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R6000' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7500 w wersji RFID' },
  ],
  faq: [
    { question: 'Na jakich podłożach stosuje się etykietę RFID na metal?', answer: 'Na metalu, płynach, tworzywach i innych powierzchniach trudnych do odczytu. Przykłady to opakowania napojów, przekąsek i kosmetyków.' },
    { question: 'Jaka drukarka koduje tę etykietę?', answer: 'Do druku i kodowania służy [Brady i7500](/produkt/brady-i7500) w wersji RFID. Zalecana taśma barwiąca to i75-R6000.' },
    { question: 'Jaki zasięg odczytu ma etykieta 50,8 × 25,4 mm?', answer: 'Do 3,2 m. Chip NXP UCODE 8 ma pamięć EPC 128 bitów, a etykieta pracuje od −40 do 140 °C.' },
  ],
  applications: ['Znakowanie metalu i elementów konstrukcji', 'Ewidencja sprzętu w ochronie zdrowia', 'Oznaczanie opakowań i drobnych produktów'],
}

// ---------------------------------------------------------------------------
// Flaga kablowa UHF RFID z polipropylenu (pid-321274)
// ---------------------------------------------------------------------------

export const bradyTHTRfidFlaga: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-thtfp-uhf-nm-b425-34x24-0-5',
  slug: 'brady-thtfp-uhf-nm-b425-34x24-0-5',
  name: 'Flagi kablowe UHF RFID z polipropylenu Brady na rolce 76 mm',
  seoTitle: 'Brady flaga kablowa UHF RFID 34 × 24 mm, do i7500 RFID',
  seoDescription: 'Polipropylenowa flaga kablowa UHF RFID Brady 34 × 24 mm do druku i kodowania w i7500 RFID: od −70 do 130 °C, UL969. PN: THTFP-UHF-NM-B425-34x24-0.5.',
  shortDescription: 'Brady THTFP-UHF-NM-B425-34x24-0.5 to matowa flaga kablowa z polipropylenu ze znacznikiem UHF RFID, 500 sztuk na rolce. Do drukarki Brady i7500 w wersji RFID.',
  description: 'THTFP-UHF to flaga kablowa z matowego polipropylenu ze znacznikiem UHF RFID. Etykieta mierzy 34 × 24 mm, a antena 10 × 30 mm. Flaga oznacza przewody i kable, komponenty, sprzęt i instalacje telekomunikacyjne; nadaje się też do ewidencji w handlu, przemyśle i łańcuchu dostaw. Zgodna drukarka to i7500 w odmianie RFID.\n\nRolka zawiera 500 sprawnych flag. Występuje jeden format i jeden kolor: biały. Etykieta nadaje się do druku termotransferowego, w tym do kodowania RFID.\n\nGrubość folii to 0,1143 mm, a zakres pracy od −70 do 130 °C. Klej jest akrylowy, trwały. Chip NXP U7XM2 ma pamięć EPC 448 bitów i odczyt do 11 m. Dla chipa podano zakres pracy od −40 do 85 °C. Zatwierdzenia: UL969 i CSA Accepted. Zaleca się taśmę i75-R4306.',
  sameAs: 'https://www.brady.eu/labels/polypropylene-rfid-cable-wire-flag-pid-321274',
  images: [
    '/images/products/brady/thtfp-uhf-nm-b425-34x24-0-5.png',
    '/images/products/brady/thtfp-uhf-nm-b425-34x24-0-5-2.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTFP-UHF-NM-B425-34x24-0.5 z białymi flagami kablowymi UHF RFID 34 × 24 mm',
    'Rolka flag kablowych Brady THTFP-UHF-NM-B425-34x24-0.5 z widocznym układem anteny RFID',
  ],
  specifications: [
    { name: 'Typ', value: 'Flagi kablowe UHF RFID wykrojone na rolce, do druku termotransferowego i kodowania; bez taśmy barwiącej' },
    { name: 'Part Number', value: 'THTFP-UHF-NM-B425-34x24-0.5' },
    { name: 'Materiał', value: 'L-2588-40A' },
    { name: 'Typ materiału', value: 'polipropylen, chip na antenie aluminiowej' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,1143 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Częstotliwość', value: 'UHF, pasmo 860–960 MHz (ETSI)' },
    { name: 'Chip i pamięć', value: 'NXP U7XM2, pamięć EPC 448 bitów' },
    { name: 'Zasięg odczytu', value: 'do 11 m' },
    { name: 'Temperatura pracy chipa', value: 'od −40 do 85 °C' },
    { name: 'Wymiary etykiety', value: '34 × 24 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Normy', value: 'UL969, CSA Accepted; EPC Class 1 Gen 2, ISO 18000-6C' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R4306 (seria R4300)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7500 w wersji RFID' },
    { name: 'Numery artykułów Brady', value: '321274' },
  ],
  faq: [
    { question: 'Jaka drukarka koduje flagi THTFP-UHF?', answer: 'Do druku i kodowania służy [Brady i7500](/produkt/brady-i7500) w wersji RFID. Zalecana taśma barwiąca to i75-R4306.' },
    { question: 'Jakie normy spełnia flaga THTFP-UHF?', answer: 'Materiał ma zatwierdzenie UL969 oraz CSA Accepted. Chip pracuje zgodnie z EPC Class 1 Gen 2 i ISO 18000-6C.' },
    { question: 'Jaki zasięg odczytu mają te flagi?', answer: 'Do 11 m. Chip NXP U7XM2 ma pamięć EPC 448 bitów, a na rolce jest 500 sprawnych flag.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Ewidencja komponentów i sprzętu', 'Identyfikacja w łańcuchu dostaw'],
}

// ---------------------------------------------------------------------------
// Etykieta UHF RFID wykrywająca wilgoć (pid-tht-uhf-b423-42x85)
// ---------------------------------------------------------------------------

export const bradyTHTRfidWilgoc: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7500'],
  id: 'brady-tht-uhf-b423-42x85',
  slug: 'brady-tht-uhf-b423-42x85',
  name: 'Poliestrowe etykiety UHF RFID wykrywające wilgoć Brady na rolce 76 mm',
  seoTitle: 'Brady etykieta UHF RFID wykrywająca wilgoć 42 × 85 mm, i7500',
  seoDescription: 'Poliestrowa etykieta UHF RFID Brady z wykrywaniem wilgoci 42 × 85 mm do druku i kodowania w i7500 RFID: od −80 do 120 °C. PN: THT-UHF-B423-42x85.',
  shortDescription: 'Brady THT-UHF-B423-42x85 to błyszcząca etykieta poliestrowa UHF RFID wykrywająca wilgoć, 100 sztuk na rolce. Do drukarki Brady i7500 w wersji RFID.',
  description: 'THT-UHF-B423-42x85 to etykieta UHF RFID z funkcją wykrywania wilgoci. Biały, błyszczący poliester mierzy 42 × 85 mm, a antena 80,7 × 38 mm. Stosuje się ją w budownictwie, ochronie zdrowia, handlu, przemyśle i łańcuchu dostaw. Antena jest przystosowana do podłoży niemetalowych. Pracuje z nią drukarka i7500 RFID.\n\nRolka mieści 100 etykiet; to jedyny dostępny format. Folia o grubości 0,3 mm pracuje od −80 do 120 °C, a klej akrylowy trzyma trwale. Etykieta przyjmuje druk termotransferowy i kodowanie RFID.\n\nChip EM4152V001WS6U ma pamięć 480 bitów (UHF). Etykieta działa w paśmie 860–960 MHz (ETSI), zgodnie z EPC Class 1 Gen 2 i ISO 18000-6C. Odczyt sięga 2,7 m. Temperatura pracy chipa: od −40 do 85 °C. Do wydruku zaleca się taśmę i75-R6000.',
  sameAs: 'https://www.brady.eu/labels/glossy-white-polyester-rfid-moisture-sensing-labels-pid-tht-uhf-b423-42x85',
  images: [
    '/images/products/brady/tht-uhf-b423-42x85.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-UHF-B423-42x85 z białymi etykietami UHF RFID wykrywającymi wilgoć, 42 × 85 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety UHF RFID wykrywające wilgoć, wykrojone na rolce, do druku termotransferowego i kodowania; bez taśmy barwiącej' },
    { name: 'Part Number', value: 'THT-UHF-B423-42x85' },
    { name: 'Materiał', value: 'L-2588-32A' },
    { name: 'Typ materiału', value: 'poliester, chip na antenie aluminiowej' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,3 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 120 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Częstotliwość', value: 'UHF, pasmo 860–960 MHz (ETSI)' },
    { name: 'Chip i pamięć', value: 'EM4152V001WS6U, pamięć 480 bitów (UHF)' },
    { name: 'Zasięg odczytu', value: 'do 2,7 m' },
    { name: 'Temperatura pracy chipa', value: 'od −40 do 85 °C' },
    { name: 'Wymiary etykiety', value: '42 × 85 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Normy', value: 'EPC Class 1 Gen 2, ISO 18000-6C' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R6000 (seria R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7500 w wersji RFID' },
    { name: 'Numery artykułów Brady', value: '311513' },
  ],
  faq: [
    { question: 'Jaka drukarka koduje etykietę THT-UHF-B423-42x85?', answer: 'Do druku i kodowania służy [Brady i7500](/produkt/brady-i7500) w wersji RFID. Zalecana taśma barwiąca to i75-R6000.' },
    { question: 'Jaki zasięg odczytu ma ta etykieta?', answer: 'Do 2,7 m. Chip EM4152V001WS6U ma pamięć 480 bitów, a antena ma 80,7 × 38 mm.' },
    { question: 'Gdzie stosuje się etykiety wykrywające wilgoć?', answer: 'W budownictwie, ochronie zdrowia, handlu, przemyśle i łańcuchu dostaw. Antena działa na powierzchniach niemetalowych.' },
  ],
  applications: ['Wykrywanie wilgoci w budownictwie', 'Inwentaryzacja i kontrola w ochronie zdrowia', 'Znakowanie w przemyśle i łańcuchu dostaw'],
}

export const bradyTHTWypukleRfid: Product[] = [
  bradyTHTWypukle7593Prostokatne,
  bradyTHTWypukle7593Przycisk,
  bradyTHTWypukle7593Okragle,
  bradyTHTOneStepProtect712,
  bradyTHTOneStepProtect711,
  bradyTHTRecykling618,
  bradyTHTRfidZasoby,
  bradyTHTRfidLab,
  bradyTHTRfidMetal,
  bradyTHTRfidFlaga,
  bradyTHTRfidWilgoc,
]

const RFID = [bradyTHTRfidZasoby, bradyTHTRfidLab, bradyTHTRfidMetal, bradyTHTRfidFlaga, bradyTHTRfidWilgoc].map((p) => p.id)

export const bradyTHTWypukleRfidSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = Object.fromEntries(
  bradyTHTWypukleRfid.map((p) => [p.id, RFID.includes(p.id) ? ('rfid' as const) : ('ogolne' as const)]),
)
