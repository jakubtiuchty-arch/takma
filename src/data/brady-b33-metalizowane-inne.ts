import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Etykiety Brady B33 / B33C do BradyPrinter i3300 (także BBP33): metalizowany poliester, PermaShield, winyl do ogólnej identyfikacji,
// polipropylen i papier. 14.11.2026.

const DRUKARKI_B33 = 'i3300, BBP33, i4311, i5300'

// ---------------------------------------------------------------------------
// Metalizowany poliester B-428, klej akrylowy (cps-3069379 + B33-161-428 z cps-4578485)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const METAL_428: [string, string, string, string, string, string][] = [
  ['B33-5-428', '142880', '25,4', '12,7', '5000', '3'],
  ['B33-37-428', '153389', '38,1', '12,7', '4000', '2'],
  ['B33-53-428', '133884', '50,8', '12,7', '2500', '1'],
  ['B33-6-428', '153390', '38,1', '19,05', '3000', '2'],
  ['B33-17-428', '143085', '50,8', '25,4', '1500', '1'],
  ['B33-18-428', '142881', '76,2', '25,4', '1500', '1'],
  ['B33-7-428', '153391', '69,85', '31,75', '1000', '1'],
  ['B33-19-428', '133828', '76,2', '50,8', '500', '1'],
  ['B33-55-428', '153392', '101,6', '50,8', '500', '1'],
  ['B33-161-428', '153393', '101,6', '101,6', '300', '1'],
]

export const bradyB33Metal428: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-428',
  slug: 'brady-b33-17-428',
  name: 'Etykiety z metalizowanego poliestru Brady B-428 do drukarki i3300',
  seoTitle: 'Brady B-428 — metalizowany poliester do drukarki i3300',
  seoDescription: 'Etykiety z metalizowanego poliestru Brady B-428 do drukarki Brady i3300: matowe, jasnoszare, od −40 do 120 °C. PN: B33-17-428, B33-19-428, B33-55-428.',
  shortDescription: 'Matowe, jasnoszare etykiety z metalizowanego poliestru B-428 w dziesięciu rozmiarach, od 25,4 × 12,7 do 101,6 × 101,6 mm. Do drukarki Brady i3300.',
  description: 'Brady B-428 to jasnoszary poliester z warstwą metalu i matową powierzchnią. Zadrukowana folia przypomina tabliczkę znamionową lub seryjną. Nadruk mieści kody kreskowe, napisy, znaki graficzne i logo. Trwały klej akrylowy łączy się z powierzchniami gładkimi. Folia oznacza aparaty, elementy płytek drukowanych, sprzęt teleinformatyczny i instalacje elektryczne. Służy również do ewidencji mienia. Niektóre rozmiary występują pod marką MetaLabel.\n\nRolki występują w dziesięciu formatach. Wersja o szerokości 25,4 mm i wysokości 12,7 mm jest pakowana po 5000 sztuk, a największa, kwadratowa o boku 101,6 mm, po 300. Mniejsze formaty mają obok siebie dwie lub trzy etykiety. Większe formaty pomieszczą dłuższy tekst albo duży kod. Grubość folii wynosi 0,122 mm.\n\nMateriał odpiera paliwa, oleje, rozpuszczalniki i chemikalia. Wytrzymuje zimno do −40 °C oraz ciepło do 120 °C. Certyfikaty: UL (uznanie), CSA (akceptacja) i AGA (zatwierdzenie). Halogenów w folii nie ma (norma DIN VDE 0472-815). Nadruk wykonuje kaseta B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-metallised-polyester-permanent-acrylic-adhesive-labels-cps-3069379',
  images: [
    '/images/products/brady/b33-17-428.png',
    '/images/products/brady/b33-55-428.png',
    '/images/products/brady/b33-6-428.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-428 na uchwycie z paskiem jasnoszarych etykiet z metalizowanego poliestru 50,8 × 25,4 mm',
    'Rolka Brady B33-55-428 z szeroką, matową folią metalizowaną w rozmiarze 101,6 × 50,8 mm',
    'Rolka Brady B33-6-428 z rzędami małych jasnoszarych etykiet 38,1 × 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-428' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'matowe, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,122 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, wysoka temperatura, niska temperatura, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 101,6 mm' },
    { name: 'Liczba sztuk', value: 'od 300 do 5000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted, AGA Approved, bez halogenów (DIN VDE 0472, część 815)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: METAL_428.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METAL_428.map(([pn, , szer, wys, szt, rzad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta z metalizowanego poliestru ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 25,4 × 12,7 mm do 101,6 × 101,6 mm, a rolka liczy od 300 do 5000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajmniejsza etykieta ma trzy obok siebie, wersje 38,1 mm mają po dwie, pozostałe po jednej.',
  },
  faq: [
    { question: 'Na jakie powierzchnie nakleja się etykiety B-428?', answer: 'Trwały klej akrylowy jest przeznaczony do powierzchni gładkich. Etykieta pracuje w zakresie od −40 do 120 °C.' },
    { question: 'Jakie uznania mają etykiety z metalizowanego poliestru B-428?', answer: 'Mają uznanie UL, akceptację CSA i zatwierdzenie AGA. Materiał nie zawiera halogenów zgodnie z normą DIN VDE 0472, część 815.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-428?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe i seryjne urządzeń', 'Oznaczanie płytek drukowanych i elementów elektrycznych', 'Ewidencja mienia i inwentaryzacja'],
}

// ---------------------------------------------------------------------------
// Błyszczący metalizowany poliester B-434A (cps-3069364)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const METAL_434: [string, string, string, string, string, string][] = [
  ['B33-5-434', '142963', '25,4', '12,7', '5000', '3'],
  ['B33-37-434', '153358', '38,1', '12,7', '5000', '2'],
  ['B33-53-434', '153359', '50,8', '12,7', '2500', '1'],
  ['B33-136-434', '133958', '38,1', '19,05', '1500', '1'],
  ['B33-6-434', '153360', '38,1', '19,05', '3300', '2'],
  ['B33-17-434', '142968', '50,8', '25,4', '1500', '1'],
  ['B33-18-434', '142954', '76,2', '25,4', '1500', '1'],
  ['B33-7-434', '153361', '69,85', '31,75', '1000', '1'],
  ['B33-19-434', '142955', '76,2', '50,8', '500', '1'],
  ['B33-55-434', '133895', '101,6', '50,8', '750', '1'],
  ['B33-161-434', '153362', '101,6', '101,6', '350', '1'],
]

export const bradyB33Metal434: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-434',
  slug: 'brady-b33-17-434',
  name: 'Błyszczące etykiety z metalizowanego poliestru Brady B-434A do drukarki i3300',
  seoTitle: 'Brady B-434A — błyszczący metalizowany poliester do i3300',
  seoDescription: 'Błyszczące etykiety Brady B-434A z metalizowanego poliestru do drukarki Brady i3300: srebrne, od −70 do 130 °C, UV. PN: B33-17-434, B33-19-434, B33-161-434.',
  shortDescription: 'Srebrne, błyszczące etykiety z metalizowanego poliestru B-434A w jedenastu wersjach, od 25,4 × 12,7 do 101,6 × 101,6 mm. Do drukarki Brady i3300.',
  description: 'Brady B-434A to srebrna, błyszcząca folia poliestrowa z metalizacją. Imituje tabliczkę znamionową lub seryjną, a termotransfer odwzorowuje kody kreskowe, grafikę i logo. Trwały klej akrylowy chwyta powierzchnie gładkie, ale także chropowate, na przykład obudowy z fakturą. Folię stosuje się na urządzeniach, osprzęcie, sprzęcie telekomunikacyjnym i instalacjach elektrycznych oraz w inwentaryzacji. Dłuższe wersje mieszczą jedną linię tekstu z kodem. Wybrane formaty noszą nazwę MetaLabel. Zastosowania obejmują ewidencję środków trwałych, oznaczanie komponentów oraz identyfikację ogólną.\n\nW rodzinie jest jedenaście formatów, od drobnych etykiet po kwadrat, którego bok mierzy 101,6 mm. Rolka mieści 350–5000 etykiet. W części formatów etykiety biegną w dwóch lub trzech rzędach. Grubość folii to 0,102 mm.\n\nTrwałość etykiety obejmuje przedział od −70 do 130 °C. Materiał znosi ścieranie, wilgoć, UV i pogodę, a wybrane wersje także paliwa, oleje i rozpuszczalniki. Folię uznaje UL, a akceptuje CSA. Do wydruku służy kaseta B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-glossy-metallised-polyester-2-mil-adhesive-labels-cps-3069364',
  images: [
    '/images/products/brady/b33-55-434.png',
    '/images/products/brady/b33-161-434.png',
    '/images/products/brady/b33-17-434.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-55-434 na uchwycie z paskiem srebrnych, błyszczących etykiet 101,6 × 50,8 mm',
    'Rolka Brady B33-161-434 ze srebrnymi etykietami o wymiarach 101,6 × 101,6 mm',
    'Rolka Brady B33-17-434 z paskiem błyszczących etykiet metalizowanych 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-434A' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'błyszczące, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, UV, warunki atmosferyczne; w wybranych wersjach także paliwa, oleje i rozpuszczalniki' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 101,6 mm' },
    { name: 'Liczba sztuk', value: 'od 350 do 5000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: METAL_434.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METAL_434.map(([pn, , szer, wys, szt, rzad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — błyszcząca etykieta metalizowana ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk w opakowaniu.\n\nWymiary rosną od 25,4 × 12,7 mm do 101,6 × 101,6 mm, a opakowanie liczy od 350 do 5000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy obok siebie ma najmniejsza etykieta, po dwie dwie wersje 38,1 mm, pozostałe po jednej.',
  },
  faq: [
    { question: 'Czym B-434A różni się od matowego materiału metalizowanego B-428?', answer: 'Folia B-434A jest srebrna i błyszcząca, a klej akrylowy trzyma się też powierzchni chropowatych. Zakres temperatur sięga od −70 do 130 °C.' },
    { question: 'Czy etykiety B-434A znoszą warunki zewnętrzne?', answer: 'Folia jest odporna na ścieranie, wilgoć, promieniowanie UV i wpływ pogody. Ma uznanie UL i akceptację CSA.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-434A?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300) oraz BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe i seryjne urządzeń', 'Znakowanie sprzętu telekomunikacyjnego i elektrycznego', 'Oznaczanie wyposażenia na zewnątrz'],
}

// ---------------------------------------------------------------------------
// Polipropylen Workhorse B-425A / B-425D (cps-3069389)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie, materiał]
const PP_425: [string, string, string, string, string, string, string][] = [
  ['B33-5-425', '142962', '25,4', '12,7', '5000', '3', 'B-425D'],
  ['B33-17-425', '142891', '50,8', '25,4', '1500', '1', 'B-425A'],
  ['B33-18-425', '142892', '76,2', '25,4', '1500', '1', 'B-425A'],
  ['B33-19-425', '143053', '76,2', '50,8', '500', '1', 'B-425A'],
]

export const bradyB33Polipropylen425: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-425',
  slug: 'brady-b33-17-425',
  name: 'Etykiety polipropylenowe Brady Workhorse B-425A do drukarki i3300',
  seoTitle: 'Brady Workhorse B-425A — etykiety polipropylenowe do i3300',
  seoDescription: 'Etykiety polipropylenowe Brady Workhorse B-425A do drukarki Brady i3300: białe, odporne na chemikalia i mrożenie. PN: B33-17-425, B33-18-425, B33-19-425.',
  shortDescription: 'Białe, matowe etykiety polipropylenowe Workhorse B-425A w czterech rozmiarach, odporne na chemikalia, oleje i wodę. Do drukarki Brady i3300.',
  description: 'Brady B-425A z serii Workhorse to biały, matowy polipropylen do znakowania tam, gdzie etykieta styka się z chemikaliami, olejami i wodą. Po kontakcie z większością popularnych substancji folia nie zmienia wyglądu, a nadruk pozostaje czytelny. Trwały klej akrylowy przywiera do gładkich powierzchni. Etykiety oznaczają butelki, naczynia, kolby i fiolki, a także aparaturę, kable i osprzęt teleinformatyczny oraz kody kreskowe w magazynie.\n\nSą cztery wersje. Najmniejsza: szerokość 25,4 mm, wysokość 12,7 mm, 5000 sztuk. Dwie średnie: wysokość 25,4 mm, szerokość 50,8 albo 76,2 mm, po 1500 sztuk. Największa: szerokość 76,2 mm, wysokość 50,8 mm, 500 sztuk. Najmniejsza wersja wykorzystuje materiał B-425D. Ma trzy etykiety w rzędzie i jest przeznaczona na probówki oraz fiolki do 50 ml.\n\nFolia jest odporna na ścieranie, wilgoć i chemikalia. Znosi mrożenie do −70 °C, a wersja B-425D nawet do −80 °C. Górna granica temperatury wynosi 130 °C. UL uznał materiał, CSA go zaakceptowała, a halogenów w nim nie ma (DIN VDE 0472-815). Wydruk wymaga kasety z taśmą B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polypropylene-labels-cps-3069389',
  images: [
    '/images/products/brady/b33-17-425.png',
    '/images/products/brady/b33-19-425.png',
    '/images/products/brady/b33-5-425.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-425 na uchwycie z paskiem białych etykiet polipropylenowych 50,8 × 25,4 mm',
    'Rolka Brady B33-19-425 z szerokim paskiem białych etykiet polipropylenowych 76,2 × 50,8 mm',
    'Rolka Brady B33-5-425 z trzema rzędami małych białych etykiet 25,4 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-425A (B33-5-425: B-425D)' },
    { name: 'Typ materiału', value: 'polipropylen, seria Workhorse' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,1143 mm (B-425D: 0,1194 mm)' },
    { name: 'Temperatura pracy', value: 'do 130 °C; w mrożeniu do −70 °C (B-425D: −80 °C)' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, chemikalia, rozpuszczalniki, paliwa i oleje' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 76,2 mm, wysokość od 12,7 do 50,8 mm' },
    { name: 'Liczba sztuk', value: 'od 500 do 5000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted, bez halogenów (DIN VDE 0472, część 815)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PP_425.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PP_425.map(([pn, , szer, wys, szt, rzad, mat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta polipropylenowa ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad, Materiał: mat },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 25,4 × 12,7 mm do 76,2 × 50,8 mm, a rolka liczy od 500 do 5000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy etykiety obok siebie ma tylko najmniejsza wersja, pozostałe po jednej.',
    Materiał: 'Odmiana polipropylenu Brady.\n\nB-425D, używany w najmniejszej wersji, znosi mrożenie do −80 °C. B-425A znosi do −70 °C.',
  },
  faq: [
    { question: 'Do czego służy wersja B33-5-425?', answer: 'To najmniejsza wersja, na materiale B-425D, z trzema etykietami w rzędzie. Oznacza się nią probówki i fiolki do 50 ml oraz inne pojemniki laboratoryjne.' },
    { question: 'Czy etykiety B-425A znoszą mrożenie?', answer: 'Tak. Folia B-425A znosi mrożenie do −70 °C, a B-425D do −80 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-425A?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300) oraz BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie butelek, kolb i naczyń w laboratorium', 'Etykiety w miejscach z chemikaliami i olejami', 'Kody kreskowe na opakowaniach i regałach'],
}

// ---------------------------------------------------------------------------
// Metalizowany poliester MetaLabel B-486B, klej kauczukowy (cps-3069380)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const METAL_486: [string, string, string, string, string, string][] = [
  ['B33-5-486', '142879', '25,4', '12,7', '5000', '3'],
  ['B33-59-486', '133954', '25,4', '12,7', '2500', '1'],
  ['B33-53-486', '133885', '50,8', '12,7', '2500', '1'],
  ['B33-17-486', '143083', '50,8', '25,4', '1300', '1'],
  ['B33-18-486', '143078', '76,2', '25,4', '1300', '1'],
  ['B33-7-486', '133966', '69,85', '31,75', '1000', '1'],
  ['B33-19-486', '142957', '76,2', '50,8', '500', '1'],
  ['B33-76-486', '133975', '101,6', '76,2', '500', '1'],
  ['B33-161-486', '133812', '101,6', '101,6', '250', '1'],
]

export const bradyB33Metal486: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-486',
  slug: 'brady-b33-17-486',
  name: 'Etykiety z metalizowanego poliestru Brady MetaLabel B-486B z klejem kauczukowym do drukarki i3300',
  seoTitle: 'Brady MetaLabel B-486B — klej kauczukowy do drukarki i3300',
  seoDescription: 'Brady MetaLabel B-486B z klejem kauczukowym do drukarki Brady i3300: etykiety na powierzchnie chropowate. PN: B33-17-486, B33-19-486, B33-161-486.',
  shortDescription: 'Jasnoszare, matowe etykiety B-486B z metalizowanego poliestru z mocnym klejem kauczukowym, w dziewięciu wersjach do 101,6 × 101,6 mm. Do drukarki Brady i3300.',
  description: 'Brady MetaLabel B-486B to metalizowany poliester z klejem kauczukowym o bardzo wysokiej sile wiązania. Folia jest jasnoszara i matowa, a po wydruku przypomina tabliczkę znamionową lub seryjną. Klej przywiera do trzech grup podłoży: gładkich, chropowatych oraz bardzo fakturowanych. Wiąże także z plastikami o małej energii powierzchniowej. Etykieta dobrze wiąże z metalem o fakturze oraz z powierzchniami malowanymi proszkowo. Znakuje się nią aparaturę i elementy wyposażenia, a także prowadzi się inwentaryzację.\n\nDziewięć wersji zaczyna się od drobnej etykiety, a kończy na kwadracie, którego bok ma 101,6 mm. Na rolce znajdzie się od 250 do 5000 etykiet. Najmniejszy format występuje w dwóch układach: z trzema etykietami obok siebie albo z jedną. Folia ma 0,142 mm grubości.\n\nDolna granica temperatury to −40 °C, a górna 120 °C. Folia znosi chemikalia, rozpuszczalniki, oleje, paliwa i ścieranie. Zgodność potwierdzają UL (uznanie) i CSA (akceptacja). Taśmę barwiącą B30-R4300 należy zamówić osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-metallised-polyester-permanent-rubber-based-adhesive-labels-cps-3069380',
  images: [
    '/images/products/brady/b33-17-486.png',
    '/images/products/brady/b33-76-486.png',
    '/images/products/brady/b33-5-486.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-486 na uchwycie z paskiem jasnoszarych etykiet metalizowanych 50,8 × 25,4 mm',
    'Rolka Brady B33-76-486 z szeroką folią metalizowaną w rozmiarze 101,6 × 76,2 mm',
    'Rolka Brady B33-5-486 z trzema rzędami małych etykiet metalizowanych 25,4 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-486B' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'matowe, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,142 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, wysoka i niska temperatura, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 101,6 mm' },
    { name: 'Liczba sztuk', value: 'od 250 do 5000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: METAL_486.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METAL_486.map(([pn, , szer, wys, szt, rzad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta z metalizowanego poliestru ${szer} × ${wys} mm, klej kauczukowy`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 25,4 × 12,7 mm do 101,6 × 101,6 mm, a rolka liczy od 250 do 5000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy etykiety obok siebie ma jedna wersja 25,4 × 12,7 mm, pozostałe po jednej.',
  },
  faq: [
    { question: 'Do jakich powierzchni nadaje się klej kauczukowy B-486B?', answer: 'Do gładkich i chropowatych, a także do metali o fakturze, powierzchni malowanych proszkowo i tworzyw o niskiej energii powierzchniowej.' },
    { question: 'Czym B-486B różni się od materiału B-428?', answer: 'B-486B ma klej kauczukowy zamiast akrylowego i folię grubszą o 0,02 mm. Zakres pracy od −40 do 120 °C jest taki sam.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-486B?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe na metalu o fakturze', 'Znakowanie elementów malowanych proszkowo i tworzyw trudnych do oklejenia', 'Inwentaryzacja aparatury i wyposażenia'],
}

// ---------------------------------------------------------------------------
// Metalizowany poliester z zabezpieczeniem przed manipulacją B-438 (cps-4297060)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const TAMPER_438: [string, string, string, string, string, string][] = [
  ['B33-5-438', '153381', '25,4', '12,7', '7000', '3'],
  ['B33-37-438', '153382', '38,1', '12,7', '5000', '2'],
  ['B33-53-438', '153383', '50,8', '12,7', '2500', '1'],
  ['B33-6-438', '153385', '38,1', '19,05', '3300', '2'],
  ['B33-7-438', '153386', '69,85', '31,75', '1000', '1'],
  ['B33-55-438', '153387', '101,6', '50,8', '750', '1'],
  ['B33-76-438', '153388', '101,6', '76,2', '500', '1'],
]

export const bradyB33Tamper438: Product = {
  ...wspolneB33,
  id: 'brady-b33-55-438',
  slug: 'brady-b33-55-438',
  name: 'Etykiety z metalizowanego poliestru z zabezpieczeniem przed manipulacją Brady B-438 do drukarki i3300',
  seoTitle: 'Brady B-438 — etykiety plombujące z poliestru do i3300',
  seoDescription: 'Etykiety Brady B-438 z metalizowanego poliestru z wzorem szachownicy po zerwaniu, do drukarki Brady i3300. PN: B33-55-438, B33-76-438, B33-5-438.',
  shortDescription: 'Srebrne etykiety B-438 z metalizowanego poliestru w siedmiu rozmiarach zostawiają po zerwaniu wzór szachownicy. Do drukarki Brady i3300.',
  description: 'Brady B-438 to srebrna, matowa folia z metalizowanego poliestru z zabezpieczeniem przed manipulacją. Po zerwaniu etykiety klej zostawia na podłożu wzór szachownicy. Wzór pokazuje, że oznaczenie próbowano zdjąć. Folia pasuje na tabliczki znamionowe i seryjne, które wymagają ochrony przed usunięciem. Znakuje się nią także wyroby, urządzenia i elementy elektryczne, a w magazynie służy do inwentaryzacji. Etykiety pasują też do sprzętu transmisji danych oraz do kontroli i przeglądów. Przed naklejeniem należy ograniczyć dotykanie etykiet, aby wzór nie ujawnił się przedwcześnie.\n\nSiedem wersji obejmuje formaty od drobnych po największy o wymiarach 101,6 na 76,2 mm. Pakowanie obejmuje od 500 do 7000 sztuk. Dwie wersje mają dwie etykiety w rzędzie, a najmniejsza ma trzy. Grubość folii wynosi 0,085 mm.\n\nZakres temperatury roboczej to od −40 do 40 °C. Folia znosi wilgoć, UV, pogodę i chemikalia, a ponadto paliwa, oleje i rozpuszczalniki. Posiada uznanie UL i akceptację CSA. Zalecana kaseta z taśmą barwiącą to B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-tamper-evident-metallized-polyester-labels-cps-4297060',
  images: [
    '/images/products/brady/b33-55-438.png',
    '/images/products/brady/b33-76-438.png',
    '/images/products/brady/b33-5-438.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-55-438 na uchwycie z paskiem srebrnych etykiet z zabezpieczeniem przed manipulacją 101,6 × 50,8 mm',
    'Rolka Brady B33-76-438 ze srebrną folią metalizowaną o wymiarach etykiety 101,6 × 76,2 mm',
    'Rolka Brady B33-5-438 z trzema rzędami małych srebrnych etykiet 25,4 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-438' },
    { name: 'Typ materiału', value: 'poliester metalizowany z zabezpieczeniem przed manipulacją' },
    { name: 'Wykończenie', value: 'matowe, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały; po zerwaniu etykiety zostaje wzór szachownicy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,085 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 40 °C' },
    { name: 'Odporność', value: 'chemikalia, wilgoć, UV, warunki atmosferyczne, paliwa i oleje, niska temperatura, rozpuszczalniki' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 76,2 mm' },
    { name: 'Liczba sztuk', value: 'od 500 do 7000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: TAMPER_438.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TAMPER_438.map(([pn, , szer, wys, szt, rzad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — srebrna etykieta z zabezpieczeniem przed manipulacją ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 25,4 × 12,7 mm do 101,6 × 76,2 mm, a rolka liczy od 500 do 7000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy etykiety obok siebie ma najmniejszy rozmiar, po dwie dwie wersje 38,1 mm, pozostałe po jednej.',
  },
  faq: [
    { question: 'Jak działa zabezpieczenie przed manipulacją w etykietach B-438?', answer: 'Po zerwaniu etykiety klej zostawia na podłożu wzór szachownicy. Wzór wskazuje, że oznaczenie próbowano zdjąć.' },
    { question: 'Dlaczego etykiet B-438 nie należy dotykać przed naklejeniem?', answer: 'Zbyt częste dotykanie może przedwcześnie ujawnić wzór szachownicy. Etykiety należy brać do ręki jak najmniej.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-438?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe zabezpieczone przed usunięciem', 'Znakowanie wyrobów i urządzeń z kontrolą ingerencji', 'Inwentaryzacja i identyfikacja przemysłowa'],
}

// ---------------------------------------------------------------------------
// Papier B-424 (cps-3069381)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk]
const PAPIER_424: [string, string, string, string, string][] = [
  ['B33-53-424', '133883', '50,8', '12,7', '2500'],
  ['B33-17-424', '143086', '50,8', '25,4', '1500'],
  ['B33-18-424', '143080', '76,2', '25,4', '1500'],
  ['B33-7-424', '133964', '69,85', '31,75', '1000'],
  ['B33-19-424', '143070', '76,2', '50,8', '500'],
  ['B33-55-424', '133894', '101,6', '50,8', '750'],
  ['B33-20-424', '133832', '76,2', '127', '250'],
  ['B33-25-424', '143069', '101,6', '152,4', '350'],
]

export const bradyB33Papier424: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-424',
  slug: 'brady-b33-17-424',
  name: 'Etykiety papierowe Brady B-424 do drukarki i3300',
  seoTitle: 'Brady B-424 — etykiety papierowe do drukarki i3300',
  seoDescription: 'Białe etykiety papierowe Brady B-424 z klejem kauczukowym do drukarki Brady i3300: znakowanie ogólne i kody kreskowe. PN: B33-17-424, B33-19-424, B33-25-424.',
  shortDescription: 'Białe, matowe etykiety papierowe B-424 z trwałym klejem kauczukowym w ośmiu rozmiarach, od 50,8 × 12,7 do 101,6 × 152,4 mm. Do drukarki Brady i3300.',
  description: 'Brady B-424 to biały, matowy papier z trwałym klejem kauczukowym, przeznaczony do znakowania ogólnego. Daje wyraźny kontrast i nie rozmazuje nadruku termotransferowego, dlatego dobrze nadaje się na kody kreskowe. Klej łączy się z gładkimi powierzchniami. Etykiety służą do oznaczeń elektrycznych i identyfikacji ogólnej. Część wersji nadaje się też do laboratorium. Wersja szeroka na 76,2 mm i wysoka na 25,4 mm służy do butelek, naczyń, kolb i probówek. Wersja szeroka na 76,2 mm i wysoka na 50,8 mm służy do butelek, naczyń i kolb. Dwa najmniejsze formaty 50,8 mm trafiają na ogólną identyfikację laboratoryjną.\n\nRozmiary sięgają od pasków 50,8 na 12,7 mm aż po duże etykiety 101,6 na 152,4 mm. Na rolkach spotyka się od 250 do 2500 sztuk, a każda wersja ma jedną etykietę na szerokość rolki. Papier ma 0,089 mm grubości.\n\nEtykieta wytrzymuje temperatury od −40 do 50 °C. Papier jest niedrogim materiałem do wszystkich zwykłych zadań znakowania. Nadruk zapewnia taśma B30-R4300 w osobnej kasecie. Wersję szeroką na 50,8 mm i wysoką na 25,4 mm można zadrukować także taśmami B30-R4500 i B30-R6100.',
  sameAs: 'https://www.brady.eu/labels/b33-series-paper-labels-cps-3069381',
  images: [
    '/images/products/brady/b33-17-424.png',
    '/images/products/brady/b33-25-424.png',
    '/images/products/brady/b33-55-424.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-424 na uchwycie z paskiem białych etykiet papierowych 50,8 × 25,4 mm',
    'Rolka Brady B33-25-424 z dużymi białymi etykietami papierowymi 101,6 × 152,4 mm',
    'Rolka Brady B33-55-424 z paskiem kremowobiałych etykiet papierowych 101,6 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-424' },
    { name: 'Typ materiału', value: 'papier' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,089 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 50,8 do 101,6 mm, wysokość od 12,7 do 152,4 mm' },
    { name: 'Liczba sztuk', value: 'od 250 do 2500, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PAPIER_424.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PAPIER_424.map(([pn, , szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta papierowa ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 50,8 × 12,7 mm do 101,6 × 152,4 mm, a rolka liczy od 250 do 2500 sztuk.',
  },
  faq: [
    { question: 'Do czego służą etykiety papierowe B-424?', answer: 'Do znakowania ogólnego i kodów kreskowych. Papier daje dobry kontrast, a nadruk się nie rozmazuje.' },
    { question: 'W jakiej temperaturze pracuje papier B-424?', answer: 'Od −40 do 50 °C. Klej kauczukowy jest trwały i przylega do gładkich powierzchni.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-424?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie ogólne i kody kreskowe', 'Oznaczenia elektryczne i identyfikacja ogólna', 'Etykiety butelek, naczyń i probówek w laboratorium'],
}

// ---------------------------------------------------------------------------
// Metaliczny poliester bez metalu B-413 (cps-4297062): etykiety B33 i rolki ciągłe B33C
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość (puste = taśma ciągła), sztuk lub długość, etykiet w rzędzie]
const NIEMETAL_413: [string, string, string, string, string, string][] = [
  ['B33-5-413', '153132', '25,4', '12,7', '7000', '3'],
  ['B33-37-413', '153133', '38,1', '12,7', '5000', '2'],
  ['B33-53-413', '153134', '50,8', '12,7', '2500', '1'],
  ['B33-6-413', '153135', '38,1', '19,05', '3300', '2'],
  ['B33-17-413', '152871', '50,8', '25,4', '1500', '1'],
  ['B33-18-413', '153136', '76,2', '25,4', '1500', '1'],
  ['B33-7-413', '153137', '69,85', '31,75', '1000', '1'],
  ['B33-19-413', '153138', '76,2', '50,8', '700', '1'],
  ['B33-55-413', '153139', '101,6', '50,8', '750', '1'],
  ['B33C-2000-413', '153140', '50,8', '', '30,48 m', ''],
  ['B33C-3000-413', '153141', '76,2', '', '30,48 m', ''],
  ['B33C-4000-413', '153142', '101,6', '', '30,48 m', ''],
]

export const bradyB33Niemetal413: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-413',
  slug: 'brady-b33-17-413',
  name: 'Etykiety z poliestru metalicznego bez metalu Brady B-413 do drukarki i3300',
  seoTitle: 'Brady B-413 — poliester metaliczny bez metalu do i3300',
  seoDescription: 'Srebrny poliester Brady B-413 bez metalu do drukarki Brady i3300: etykiety i rolki ciągłe o wyglądzie metalu. PN: B33-17-413, B33-55-413, B33C-3000-413.',
  shortDescription: 'Srebrny, satynowy poliester B-413 o metalicznym wyglądzie, ale bez warstwy metalu: dziewięć rozmiarów etykiet i trzy rolki ciągłe. Do drukarki Brady i3300.',
  description: 'Brady B-413 to poliester z powłoką o metalicznym wyglądzie, ale bez warstwy metalu. Srebrna folia ma satynowe wykończenie. Sprawdza się na tabliczkach znamionowych i na etykietach z kodem kreskowym do ewidencji środków trwałych. Klej akrylowy, mocny i trwały, wiąże z czystymi, suchymi, gładkimi powierzchniami. Etykiety znakują elementy, wyposażenie i urządzenia, a także służą do identyfikacji ogólnej.\n\nOferta liczy dziewięć etykiet pojedynczych i trzy rolki ciągłe B33C. Etykiety mierzą 25,4–101,6 mm szerokości i 12,7–50,8 mm wysokości, a na rolce mieści się od 700 do 7000 sztuk. Rolki ciągłe występują w trzech szerokościach (50,8, 76,2 i 101,6 mm) i mają 30,48 m długości. Długość etykiety wycina się wtedy w projekcie. Folia ma 0,086 mm grubości.\n\nMateriał odpiera ścieranie, chemikalia, korozję i wilgoć. Granice pracy to −70 i 110 °C. Taśmy ciągłe odpierają ponadto paliwa i oleje. Folia uzyskała uznanie UL. Barwnik do nadruku dostarcza osobna kaseta B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-metallic-non-metal-polyester-acrylic-adhesive-labels-cps-4297062',
  images: [
    '/images/products/brady/b33-17-413.png',
    '/images/products/brady/b33-55-413.png',
    '/images/products/brady/b33c-3000-413.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-413 na uchwycie z paskiem srebrnych, satynowych etykiet 50,8 × 25,4 mm',
    'Rolka Brady B33-55-413 z wieloma rzędami srebrnych, satynowych etykiet na uchwycie',
    'Rolka Brady B33C-3000-413 z jasnoszarą taśmą ciągłą o szerokości 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33 i taśma ciągła B33C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-413' },
    { name: 'Typ materiału', value: 'poliester metaliczny bez metalu' },
    { name: 'Wykończenie', value: 'satynowe, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do czystych, suchych, gładkich powierzchni' },
    { name: 'Grubość', value: '0,086 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć; w taśmach ciągłych także paliwa i oleje' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 50,8 mm' },
    { name: 'Liczba sztuk', value: 'od 700 do 7000, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '50,8 / 76,2 / 101,6 mm (B33C)' },
    { name: 'Długość taśmy', value: '30,48 m (B33C)' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: NIEMETAL_413.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: NIEMETAL_413.map(([pn, , szer, wys, ile, rzad]) => ({
    partNumber: pn,
    name: wys
      ? `Brady ${pn} — srebrna etykieta ${szer} × ${wys} mm`
      : `Brady ${pn} — srebrna taśma ciągła ${szer} mm × ${ile}`,
    attributes: {
      Rozmiar: wys ? `${szer} × ${wys} mm, ${ile} szt.` : `ciągła ${szer} mm × ${ile}`,
      ...(rzad ? { 'W rzędzie': rzad } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 25,4 × 12,7 mm do 101,6 × 50,8 mm, a taśmy ciągłe 30,48 m długości.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy obok siebie ma najmniejsza etykieta, po dwie dwie wersje 38,1 mm. Taśmy ciągłe nie mają podziału na etykiety.',
  },
  faq: [
    { question: 'Czy etykieta B-413 zawiera warstwę metalu?', answer: 'Nie. To poliester z powłoką, która wygląda jak metal. Wygląd etykiety przypomina tabliczkę znamionową.' },
    { question: 'Czym różnią się wersje B33 od B33C?', answer: 'Wersje B33 to etykiety pojedyncze na rolce. Wersje B33C to taśmy ciągłe o długości 30,48 m, z których długość etykiety ustawia się w projekcie.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-413?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Materiał drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe i etykiety kodów kreskowych', 'Ewidencja środków trwałych', 'Oznaczanie elementów i wyposażenia'],
}

// ---------------------------------------------------------------------------
// Winyl do ogólnej identyfikacji B-439 (cps-4578481)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const WINYL_439: [string, string, string, string, string, string][] = [
  ['B33-5-439', '152853', '25,4', '12,7', '7000', '3'],
  ['B33-37-439', '152857', '38,1', '12,7', '5000', '2'],
  ['B33-53-439', '152858', '50,8', '12,7', '2500', '1'],
  ['B33-17-439', '152854', '50,8', '25,4', '1000', '1'],
  ['B33-18-439', '152855', '76,2', '25,4', '1000', '1'],
  ['B33-19-439', '152856', '76,2', '50,8', '700', '1'],
  ['B33-55-439', '152859', '101,6', '50,8', '700', '1'],
  ['B33-76-439', '152860', '101,6', '76,2', '500', '1'],
]

export const bradyB33Winyl439: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-439',
  slug: 'brady-b33-17-439',
  name: 'Etykiety winylowe do ogólnej identyfikacji Brady B-439 do drukarki i3300',
  seoTitle: 'Brady B-439 — etykiety winylowe do ogólnej identyfikacji i3300',
  seoDescription: 'Białe, błyszczące etykiety winylowe Brady B-439 do drukarki Brady i3300: identyfikacja wyrobów i wyposażenia. PN: B33-17-439, B33-19-439, B33-76-439.',
  shortDescription: 'Białe, błyszczące etykiety winylowe B-439 do identyfikacji ogólnej w ośmiu rozmiarach, od 25,4 × 12,7 do 101,6 × 76,2 mm. Do drukarki Brady i3300.',
  description: 'Brady B-439 to biały, błyszczący winyl do druku termotransferowego. Jest przeznaczony do oznaczania gotowych wyrobów, tabliczek znamionowych i do identyfikacji ogólnej. Folia pracuje wewnątrz i na zewnątrz, w warunkach otoczenia z ograniczonym kontaktem z rozpuszczalnikami. Brady zalicza ją do materiałów na trudne warunki. Mocny klej akrylowy dobrze wiąże z podłożem gładkim i chropowatym. Etykiety oznaczają elementy i wyposażenie. Na indywidualne zamówienie dostępne są także inne kolory folii.\n\nOsiem wersji mieści się w widełkach 25,4–101,6 mm (szerokość) oraz 12,7–76,2 mm (wysokość). Liczba sztuk na rolce mieści się między 500 a 7000. Po dwie etykiety obok siebie ma format 38,1 mm, a trzy najmniejszy. Grubość folii: 0,107 mm.\n\nWinyl znosi korozję, UV i wilgoć, a także pogodę, chemikalia i ścieranie. Temperatura pracy mieści się między −70 a 80 °C. Wyróżnia ją odporność na ścieranie i na niską temperaturę. Bez taśmy barwiącej B30-R6000 nie da się zadrukować tej folii, a taśmę kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-vinyl-general-identification-labels-cps-4578481',
  images: [
    '/images/products/brady/b33-17-439.png',
    '/images/products/brady/b33-76-439.png',
    '/images/products/brady/b33-37-439.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-439 na uchwycie z paskiem białych etykiet winylowych 50,8 × 25,4 mm',
    'Rolka Brady B33-76-439 z szeroką białą folią winylową o wymiarach etykiety 101,6 × 76,2 mm',
    'Rolka Brady B33-37-439 z dwoma rzędami małych białych etykiet winylowych 38,1 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-439' },
    { name: 'Typ materiału', value: 'winyl, folia do użytku wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 80 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 76,2 mm' },
    { name: 'Liczba sztuk', value: 'od 500 do 7000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: WINYL_439.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_439.map(([pn, , szer, wys, szt, rzad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta winylowa ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 25,4 × 12,7 mm do 101,6 × 76,2 mm, a rolka liczy od 500 do 7000 sztuk.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy obok siebie ma najmniejsza etykieta, dwie wersja 38,1 mm, pozostałe po jednej.',
  },
  faq: [
    { question: 'Czy etykiety winylowe B-439 nadają się na zewnątrz?', answer: 'Tak. Folia jest przeznaczona do wnętrz i na zewnątrz, a odpiera promieniowanie UV, wilgoć i wpływ pogody. Zakres pracy sięga od −70 do 80 °C.' },
    { question: 'Czy materiał B-439 występuje w innych kolorach?', answer: 'Standardowa wersja jest biała. Inne kolory są dostępne na indywidualne zamówienie.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-439?', answer: 'Wymagana jest taśma barwiąca B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Oznaczanie gotowych wyrobów', 'Tabliczki znamionowe', 'Znakowanie elementów i wyposażenia'],
}

// ---------------------------------------------------------------------------
// Błyszczący metalizowany poliester B-435A (cps-3069363 + cps-4578485): etykiety B33 i rolki ciągłe B33C
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość (puste = taśma ciągła), sztuk lub długość, etykiet w rzędzie]
const METAL_435: [string, string, string, string, string, string][] = [
  ['B33-5-435', '153365', '25,4', '12,7', '7000', '3'],
  ['B33-37-435', '153373', '38,1', '12,7', '5000', '2'],
  ['B33-53-435', '153374', '50,8', '12,7', '2500', '1'],
  ['B33-6-435', '153375', '38,1', '19,05', '3300', '2'],
  ['B33-17-435', '153376', '50,8', '25,4', '1500', '1'],
  ['B33-18-435', '133823', '76,2', '25,4', '1500', '1'],
  ['B33-7-435', '153377', '69,85', '31,75', '1000', '1'],
  ['B33-19-435', '133829', '76,2', '50,8', '500', '1'],
  ['B33-55-435', '133896', '101,6', '50,8', '750', '1'],
  ['B33-161-435', '153378', '101,6', '101,6', '350', '1'],
  ['B33C-2000-435', '153379', '50,8', '', '30,48 m', ''],
  ['B33C-3000-435', '153380', '76,2', '', '30,48 m', ''],
]

export const bradyB33Metal435: Product = {
  ...wspolneB33,
  id: 'brady-b33-19-435',
  slug: 'brady-b33-19-435',
  name: 'Błyszczące etykiety z metalizowanego poliestru Brady B-435A do drukarki i3300',
  seoTitle: 'Brady B-435A — błyszczący metalizowany poliester do i3300',
  seoDescription: 'Srebrne etykiety i taśmy ciągłe Brady B-435A z metalizowanego poliestru do drukarki Brady i3300, do metali i tworzyw. PN: B33-19-435, B33-18-435, B33C-3000-435.',
  shortDescription: 'Srebrny, błyszczący poliester B-435A: dziesięć rozmiarów etykiet od 25,4 × 12,7 do 101,6 × 101,6 mm i dwie taśmy ciągłe. Do drukarki Brady i3300.',
  description: 'Brady B-435A to srebrny, błyszczący poliester z warstwą metalu. Grubość folii wynosi 0,0762 mm. Klej akrylowy dobrano do trudnych podłoży: metali o fakturze, powierzchni malowanych proszkowo i plastików o małej energii powierzchniowej. Zadrukowana etykieta znakuje aparaty, elementy elektryczne, płytki i sprzęt telekomunikacyjny. Służy też do ewidencji i inwentaryzacji. Trzy wersje sprzedaje się pod nazwą MetaLabel.\n\nOferta składa się z dziesięciu etykiet oraz dwóch taśm ciągłych B33C o długości 30,48 m. Szerokość najmniejszej etykiety to 25,4 mm, a największa jest kwadratem o boku 101,6 mm. Rolka etykiet mieści od 350 do 7000 sztuk. Trzy etykiety w rzędzie ma najmniejszy format, a podwójny rząd mają dwa formaty z 38,1 mm szerokości.\n\nGranice temperatury wynoszą −70 i 130 °C. Folia odpiera pogodę, UV, wilgoć, ścieranie oraz chemikalia. Jest uznana przez UL i zaakceptowana przez CSA. Kasetę z taśmą B30-R6000 trzeba kupić osobno, bo materiał drukuje się tylko z nią.',
  sameAs: 'https://www.brady.eu/labels/b33-glossy-metallised-polyester-7-mil-adhesive-labels-cps-3069363',
  images: [
    '/images/products/brady/b33-19-435.png',
    '/images/products/brady/b33-18-435.png',
    '/images/products/brady/b33c-3000-435.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-19-435 na uchwycie z paskiem srebrnych, błyszczących etykiet 76,2 × 50,8 mm',
    'Rolka Brady B33-18-435 z paskiem srebrnych etykiet metalizowanych 76,2 × 25,4 mm',
    'Rolka Brady B33C-3000-435 z szarą, błyszczącą taśmą ciągłą o szerokości 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety w rolce B33 i taśma ciągła B33C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-435A' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,4 do 101,6 mm, wysokość od 12,7 do 101,6 mm' },
    { name: 'Liczba sztuk', value: 'od 350 do 7000, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '50,8 / 76,2 mm (B33C)' },
    { name: 'Długość taśmy', value: '30,48 m (B33C)' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: METAL_435.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METAL_435.map(([pn, , szer, wys, ile, rzad]) => ({
    partNumber: pn,
    name: wys
      ? `Brady ${pn} — srebrna etykieta metalizowana ${szer} × ${wys} mm`
      : `Brady ${pn} — srebrna taśma ciągła ${szer} mm × ${ile}`,
    attributes: {
      Rozmiar: wys ? `${szer} × ${wys} mm, ${ile} szt.` : `ciągła ${szer} mm × ${ile}`,
      ...(rzad ? { 'W rzędzie': rzad } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 25,4 × 12,7 mm do 101,6 × 101,6 mm, a taśmy ciągłe 30,48 m długości.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nTrzy obok siebie ma najmniejsza etykieta, po dwie dwie wersje 38,1 mm. Taśmy ciągłe nie mają podziału na etykiety.',
  },
  faq: [
    { question: 'Do jakich powierzchni nadaje się materiał B-435A?', answer: 'Do metali o fakturze, powierzchni malowanych proszkowo i tworzyw o niskiej energii powierzchniowej. Klej akrylowy trzyma się także powierzchni gładkich.' },
    { question: 'Kiedy wybrać taśmę ciągłą B33C zamiast etykiety?', answer: 'Taśma ciągła ma 30,48 m długości, a długość etykiety ustawia się w projekcie. Przydaje się, gdy żaden gotowy rozmiar nie pasuje.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-435A?', answer: 'Wymagana jest taśma barwiąca B30-R6000. Materiał drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie metali o fakturze i powierzchni malowanych proszkowo', 'Oznaczanie sprzętu telekomunikacyjnego, elektrycznego i płytek', 'Ewidencja i inwentaryzacja urządzeń'],
}

// ---------------------------------------------------------------------------
// PermaShield: metalizowany poliester B-428 z nakładką B-966 (cps-4297066)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie, nakładka]
const PERMASHIELD_428: [string, string, string, string, string, string, string][] = [
  ['B33-22-428', '152877', '31,75', '19,05', '1700', '2', '38,1 × 25,4 mm'],
  ['B33-23-428', '152878', '50,8', '25,4', '700', '1', '57,15 × 31,75 mm'],
  ['B33-24-428', '152879', '69,85', '44,45', '450', '1', '76,2 × 50,8 mm'],
]

export const bradyB33Permashield428: Product = {
  ...wspolneB33,
  id: 'brady-b33-23-428',
  slug: 'brady-b33-23-428',
  name: 'Etykiety z metalizowanego poliestru z nakładką Brady PermaShield B-428 do drukarki i3300',
  seoTitle: 'Brady PermaShield B-428 — etykiety z nakładką do drukarki i3300',
  seoDescription: 'Brady PermaShield B-428 do drukarki Brady i3300: etykiety metalizowane z przezroczystą nakładką, od −70 do 120 °C. PN: B33-23-428, B33-24-428, B33-22-428.',
  shortDescription: 'Etykiety PermaShield B-428 z jasnoszarego poliestru metalizowanego z dopasowaną przezroczystą nakładką poliestrową, w trzech rozmiarach. Do drukarki Brady i3300.',
  description: 'Brady PermaShield to etykieta dwuczęściowa. Składa się z jasnoszarej, błyszczącej etykiety wykonanej z poliestru metalizowanego B-428 oraz z dopasowanej nakładki z przezroczystego poliestru B-966, umieszczonej pod etykietą. Nakładka tworzy dodatkową warstwę ochronną. Zadrukowana część wygląda jak tabliczka znamionowa i niesie kody kreskowe, napisy, symbole oraz logo. Zestaw znakuje płytki drukowane, elementy wyposażenia i sprzęt teleinformatyczny, a także służy do inwentaryzacji i ewidencji.\n\nRodzina obejmuje trzy rozmiary etykiet: 31,75 na 19,05 mm (1700 sztuk), 50,8 na 25,4 mm (700 sztuk) i 69,85 na 44,45 mm (450 sztuk). Do każdego rozmiaru dobrano nakładkę nieco większą od etykiety. Najmniejszy format ma dwie etykiety obok siebie. Całość ma 0,185 mm grubości.\n\nOdporność obejmuje ciepło, pogodę, UV, korozję, wilgoć i chemikalia. Zakres temperatury sięga od −70 do 120 °C. Klej akrylowy jest dobrany do powierzchni gładkich. Do wydruku służy taśma B30-R4300, osobna kaseta.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permashield-metallized-polyester-labels-cps-4297066',
  images: [
    '/images/products/brady/b33-23-428.png',
    '/images/products/brady/b33-24-428.png',
    '/images/products/brady/b33-22-428.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-23-428 na uchwycie z paskiem jasnoszarych etykiet PermaShield 50,8 × 25,4 mm',
    'Rolka Brady B33-24-428 z szerokim paskiem etykiet PermaShield 69,85 × 44,45 mm',
    'Rolka Brady B33-22-428 z dwoma rzędami małych etykiet PermaShield 31,75 × 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety dwuczęściowe w rolce B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaShield: etykieta B-428, nakładka B-966' },
    { name: 'Typ materiału', value: 'poliester metalizowany z nakładką z poliestru przezroczystego' },
    { name: 'Wykończenie', value: 'błyszczące, metaliczny wygląd' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,185 mm (etykieta z nakładką)' },
    { name: 'Temperatura pracy', value: 'od −70 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, wysoka temperatura' },
    { name: 'Kolor', value: 'jasnoszary, z przezroczystą nakładką' },
    { name: 'Wymiary etykiety', value: 'szerokość od 31,75 do 69,85 mm, wysokość od 19,05 do 44,45 mm' },
    { name: 'Liczba sztuk', value: 'od 450 do 1700, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_428.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_428.map(([pn, , szer, wys, szt, rzad, nakl]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta PermaShield ${szer} × ${wys} mm z nakładką ${nakl}`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Nakładka: nakl, 'W rzędzie': rzad },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 31,75 × 19,05 mm do 69,85 × 44,45 mm, a rolka liczy od 450 do 1700 sztuk.',
    Nakładka: 'Wymiary przezroczystej nakładki z poliestru, umieszczonej pod etykietą.\n\nNakładka jest większa od etykiety, na przykład 76,2 × 50,8 mm przy etykiecie 69,85 × 44,45 mm.',
    'W rzędzie': 'Liczba etykiet obok siebie na szerokości rolki.\n\nDwie obok siebie ma najmniejszy rozmiar, pozostałe po jednej.',
  },
  faq: [
    { question: 'Czym jest etykieta PermaShield?', answer: 'To zestaw dwóch części: etykiety z metalizowanego poliestru B-428 i dopasowanej, przezroczystej nakładki z poliestru B-966, umieszczonej pod etykietą.' },
    { question: 'W jakiej temperaturze pracują etykiety PermaShield B-428?', answer: 'Zakres pracy wynosi od −70 do 120 °C. Poliester jest odporny na chemikalia, korozję, wilgoć, UV i wpływ pogody.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet PermaShield?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Tabliczki znamionowe z dodatkową warstwą ochronną', 'Znakowanie płytek drukowanych i sprzętu teleinformatycznego', 'Inwentaryzacja i ewidencja urządzeń'],
}

export const bradyB33MetalizowaneInne: Product[] = [bradyB33Metal428, bradyB33Metal434, bradyB33Metal435, bradyB33Metal486, bradyB33Niemetal413, bradyB33Tamper438, bradyB33Permashield428, bradyB33Winyl439, bradyB33Polipropylen425, bradyB33Papier424]

export const bradyB33MetalizowaneInneSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = {
  'brady-b33-17-428': 'ogolne',
  'brady-b33-17-434': 'ogolne',
  'brady-b33-19-435': 'ogolne',
  'brady-b33-17-486': 'ogolne',
  'brady-b33-17-413': 'ogolne',
  'brady-b33-55-438': 'ogolne',
  'brady-b33-23-428': 'ogolne',
  'brady-b33-17-439': 'ogolne',
  'brady-b33-17-425': 'ogolne',
  'brady-b33-17-424': 'ogolne',
}
