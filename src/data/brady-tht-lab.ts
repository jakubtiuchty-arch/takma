import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Etykiety laboratoryjne i kriogeniczne Brady na rolkach z gilzą 76 mm do drukarek i6100, i7100 i i7500: FreezerBondz B-490 i B-492,
// samolaminujący poliester B-461, polipropylen B-7425 (także ze wskaźnikiem sterylizacji) i StainerBondz B-481 na szkiełka.
// Dane Brady przeczą sobie w dwóch miejscach (B-7425 i B-481 mają dolną granicę −80 °C, a środowisko z ciekłym azotem), dlatego
// te karty podają tylko zakres temperatur i pozostałe warunki — tak jak karty B33. 14.11.2026.

const DRUKARKI = 'i6100, i7100, i7500'
const LINKI_DRUKAREK = '[Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500)'

// ---------------------------------------------------------------------------
// FreezerBondz B-490 (cps-4365904)
// ---------------------------------------------------------------------------

// [PN, rozmiar etykiety]
const FREEZERBONDZ_490: [string, string][] = [
  ['THT-154-490-3', '31,75 × 9,53 mm'],
  ['THT-155-490-3', 'szer. 41,28 mm'],
  ['THT-156-490-3', 'szer. 48,26 mm'],
  ['THT-157-490-3', 'szer. 55,88 mm'],
  ['THT-158-490-3', 'szer. 95,25 mm'],
]

export const bradyTHTFreezerBondz490: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-154-490-3',
  slug: 'brady-tht-154-490-3',
  name: 'Etykiety kriogeniczne z poliestru Brady FreezerBondz B-490 na rolce 76 mm',
  seoTitle: 'Brady B-490 — etykiety kriogeniczne do i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety FreezerBondz B-490 na rolce do drukarek Brady i6100, i7100 i i7500, od −196 do 130 °C, na probówki i fiolki. PN: THT-154-490-3, THT-155-490-3.',
  shortDescription: 'Brady THT-154-490-3 i cztery inne szerokości etykiet FreezerBondz B-490 przylegają do zamrożonego szkła i polipropylenu. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykiety B-490 z serii FreezerBondz powstały z myślą o głębokim mrożeniu. Poliester jest biały, matowy i cienki: ma 0,065 mm. Klej akrylowy wiąże trwale, a przyklejenie do szkła lub polipropylenu wyjętych z ciekłego azotu nadal jest możliwe. Na probówce lub fiolce końce etykiety muszą na siebie nachodzić na co najmniej 3 mm. Materiał stosuje się w ciekłym azocie oraz w procesach z autoklawem.\n\nDo wyboru jest pięć szerokości: 31,75, 41,28, 48,26, 55,88 i 95,25 mm. Każda rolka niesie 3000 sztuk. Wysokość najwęższej wersji wynosi 9,53 mm; oznacza ona probówki 1,5 ml. Etykiety trafiają na probówki Eppendorf, PCR i wirówkowe, na fiolki oraz na próbki w ogólnej identyfikacji laboratoryjnej.\n\nDolna granica pracy to −196 °C, górna 130 °C. W tym przedziale etykieta przetrwa zamrażarkę, ciekły azot i wodę o temperaturze 100 °C. Wydruk jest trwały wobec rozpuszczalników i tarcia. Folia znosi także chemikalia, UV i pogodę. Dobrana taśma barwiąca to R4306.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyester-autoclave-cryogenic-labels-cps-4365904',
  images: [
    '/images/products/brady/tht-154-490-3.png',
    '/images/products/brady/tht-156-490-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-154-490-3 z białymi, matowymi etykietami FreezerBondz o szerokości 31,75 mm',
    'Rolka Brady THT-156-490-3 z szerszymi etykietami FreezerBondz B-490 rozwiniętymi na przodzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-490' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,065 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 130 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C), ciekły azot' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '31,75 × 9,53 mm (THT-154-490-3); pozostałe wersje: szerokość 41,28, 48,26, 55,88 albo 95,25 mm' },
    { name: 'Liczba sztuk na rolce', value: '3000' },
    { name: 'Etykiet w rzędzie', value: '1' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R4306' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-154-490-3: 011263' },
  ],
  variants: FREEZERBONDZ_490.map(([pn, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 3000 etykiet FreezerBondz B-490, ${rozmiar}`,
    attributes: { Rozmiar: `${rozmiar}, 3000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce.\n\nSkrót „szer.” oznacza samą szerokość etykiety. Rodzina obejmuje szerokości od 31,75 do 95,25 mm.',
  },
  faq: [
    { question: 'Jak nakleić etykietę B-490 na zamrożoną probówkę?', answer: 'Etykieta przylega do zamrożonego szkła i polipropylenu. Na probówce lub fiolce musi zachodzić na siebie zakładką co najmniej 3 mm.' },
    { question: 'Do jakiej temperatury pracują etykiety B-490?', answer: 'Zakres pracy to od −196 do 130 °C. Materiał znosi ciekły azot, zamrażarkę i łaźnię wodną o temperaturze 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-490?', answer: `Zaleca się taśmę barwiącą R4306. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Probówki Eppendorf, PCR i wirówkowe', 'Fiolki przechowywane w ciekłym azocie', 'Ogólna identyfikacja próbek w laboratorium'],
}

// ---------------------------------------------------------------------------
// FreezerBondz B-492, etykiety okrągłe i prostokątne (cps-4359715)
// ---------------------------------------------------------------------------

// [PN, rozmiar, sztuk, kształt]
const FREEZERBONDZ_492: [string, string, string, string][] = [
  ['THT-143-492-3', 'Ø 9,53 mm', '3000', 'okrągła'],
  ['THT-144-492-3', 'Ø 12,7 mm', '3000', 'okrągła'],
  ['THT-152-492-3', '25,4 × 9,53 mm', '3000', 'prostokątna'],
  ['THT-155-492-3', '41,28 × 15,24 mm', '3000', 'prostokątna'],
  ['THT-180-492-3', '22,86 × 25,4 mm', '3000', 'prostokątna'],
  ['THT-179-492-3', '25,4 × 25,4 mm', '3000', 'prostokątna'],
  ['THT-156-492-3', '48,26 × 25,4 mm', '3000', 'prostokątna'],
  ['THT-88-492-5', '25,4 × 19,05 mm', '5000', 'prostokątna'],
  ['THT-59-492-10', '25,4 × 12,7 mm', '10 000', 'prostokątna'],
]

export const bradyTHTFreezerBondz492: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-143-492-3',
  slug: 'brady-tht-143-492-3',
  name: 'Etykiety poliestrowe odporne na chemikalia Brady FreezerBondz B-492 na rolce 76 mm',
  seoTitle: 'Brady B-492 — etykiety na probówki do i6100, i7100, i7500',
  seoDescription: 'Błyszczące etykiety FreezerBondz B-492, okrągłe i prostokątne, do drukarek Brady i6100, i7100 i i7500, od −196 do 110 °C. PN: THT-143-492-3, THT-155-492-3.',
  shortDescription: 'Brady THT-143-492-3 i osiem innych wersji etykiet FreezerBondz B-492: dwa kółka na wieczka i siedem prostokątów na ścianki. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'FreezerBondz B-492 to cienki (0,081 mm), błyszczący poliester w kolorze białym. Warstwa kleju akrylowego ma dużą przyczepność i jest przeznaczona do gładkich podłoży. Rodzina obejmuje okrągłe etykiety, które zakrywają wieczka fiolek, oraz prostokątne etykiety na ścianki probówek. Obie formy służą fiolkom, probówkom i pojemnikom ogólnego przeznaczenia w laboratorium.\n\nRozmiarów jest dziewięć. Okrągłe mają Ø 9,53 oraz 12,7 mm. Prostokątne mają szerokość między 22,86 a 48,26 mm, a wysokość między 9,53 a 25,4 mm. Rolka mieści zwykle 3000 etykiet. Wersja 25,4 × 19,05 mm ma 5000 sztuk. Wersję 25,4 × 12,7 mm dostarcza się w opakowaniu 10 000 sztuk.\n\nOkrągłych etykiet na wieczka nie poleca się do ciekłego azotu, bo nie mogą zachodzić na siebie. Cały materiał mieści się w przedziale −196…110 °C. Znosi zamrażarkę oraz kąpiel wodną w temperaturze 100 °C. Odporność obejmuje chemikalia i rozmazanie. Pasuje do niego seria taśm barwiących R6400.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyester-chemical-resistant-laboratory-labels-cps-4359715',
  images: [
    '/images/products/brady/tht-143-492-3.png',
    '/images/products/brady/tht-155-492-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-143-492-3 z białymi okrągłymi etykietami na wieczka fiolek, po cztery w rzędzie',
    'Rolka Brady THT-155-492-3 z prostokątnymi etykietami FreezerBondz B-492 w jednym rzędzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, agresywny, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C); okrągłych etykiet na wieczka nie zaleca się do ciekłego azotu' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'okrągłe Ø 9,53 i 12,7 mm; prostokątne od 22,86 × 25,4 do 48,26 × 25,4 mm, 25,4 × 9,53 / 41,28 × 15,24 / 25,4 × 19,05 / 25,4 × 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: '3000 (5000 albo 10 000 w dwóch wersjach prostokątnych)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6400' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-143-492-3: 805916' },
  ],
  variants: FREEZERBONDZ_492.map(([pn, rozmiar, szt, ksztalt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${rozmiar}`,
    attributes: { Rozmiar: `${rozmiar}, ${szt} szt.`, Kształt: ksztalt },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość albo średnica) i liczba sztuk.\n\nKółko o średnicy 9,53 mm ma 3000 sztuk, a prostokąt 25,4 × 12,7 mm 10 000 sztuk w opakowaniu.',
    Kształt: 'Forma etykiety.\n\nKółka zakrywają wieczko fiolki. Prostokąty oznaczają ściankę probówki albo inną gładką powierzchnię.',
  },
  faq: [
    { question: 'Czy etykiety B-492 nadają się do ciekłego azotu?', answer: 'Prostokątne etykiety pracują do −196 °C. Okrągłych etykiet na wieczka nie zaleca się do ciekłego azotu, bo nie mogą zachodzić na siebie.' },
    { question: 'Czym różnią się okrągłe i prostokątne etykiety B-492?', answer: 'Okrągłe etykiety mają średnicę 9,53 albo 12,7 mm i oznaczają wieczka fiolek. Prostokątne wersje mają od 22,86 do 48,26 mm szerokości.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-492?', answer: `Zaleca się taśmy barwiące z serii R6400. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Wieczka fiolek i probówek', 'Probówki wirówkowe i fiolki laboratoryjne', 'Ogólna identyfikacja w laboratorium'],
}

// ---------------------------------------------------------------------------
// FreezerBondz B-492, zestawy z krążkiem na wieczko (cps-4365919)
// ---------------------------------------------------------------------------

// [PN, etykieta, krążek]
const ZESTAWY_492: [string, string, string][] = [
  ['THT-163-492-3', '25,4 × 9,53 mm', 'Ø 9,53 mm'],
  ['THT-181-492-3', '25,4 × 12,7 mm', 'Ø 9,53 mm'],
  ['THT-182-492-3', '25,4 × 12,7 mm', 'Ø 11,18 mm'],
  ['THT-190-492-3', '41,28 × 15,24 mm', 'Ø 9,53 mm'],
]

export const bradyTHTZestawy492: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-163-492-3',
  slug: 'brady-tht-163-492-3',
  name: 'Zestawy etykiet z krążkiem na wieczko Brady FreezerBondz B-492 na rolce 76 mm',
  seoTitle: 'Brady B-492 — etykiety z wieczkiem do i6100, i7100, i7500',
  seoDescription: 'Zestawy etykieta plus krążek na wieczko z poliestru B-492, do drukarek Brady i6100, i7100 i i7500, od −196 do 110 °C. PN: THT-163-492-3, THT-181-492-3.',
  shortDescription: 'Brady THT-163-492-3 i trzy inne zestawy łączą etykietę na ściankę probówki z krążkiem na wieczko. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Zestaw tworzą dwa elementy wykrojone obok siebie: prostokątna etykieta na ściankę probówki i okrągły krążek na jej wieczko. Jest to biały, błyszczący poliester FreezerBondz B-492, gruby na 0,081 mm. Klej akrylowy dobrano do podłoży gładkich. Zestawy oznaczają probówki stożkowe i duże, fiolki oraz próbki ogólne.\n\nRolka zawiera 3000 zestawów, jeden w rzędzie. Etykieta ma wymiary 25,4 × 9,53, 25,4 × 12,7 lub 41,28 × 15,24 mm. Krążek ma zwykle Ø 9,53 mm, a w jednej wersji Ø 11,18 mm. Najmniejszy zestaw służy probówkom 0,5 ml.\n\nMateriał pracuje w przedziale −196…110 °C. Ciekłego azotu jednak nie zaleca się, bo krążek na wieczko nie ma jak zachodzić na siebie. Chemikalia i rozmazanie nie niszczą nadruku. Dla tej rolki przewidziano taśmy z serii R6400.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyester-chemical-resistant-laboratory-labels-vial-top-cps-4365919',
  images: [
    '/images/products/brady/tht-163-492-3.png',
    '/images/products/brady/tht-190-492-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-163-492-3 z zestawami: prostokątna etykieta i okrągły krążek obok siebie',
    'Rolka Brady THT-190-492-3 z szerszymi zestawami etykiet 41,28 × 15,24 mm i małymi krążkami',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów etykieta i krążek, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, agresywny, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C); nie zaleca się ciekłego azotu, bo krążek na wieczko nie może się zakładać' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '25,4 × 9,53 / 25,4 × 12,7 / 41,28 × 15,24 mm, zależnie od wersji' },
    { name: 'Wymiary krążka', value: 'Ø 9,53 albo 11,18 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '3000 zestawów' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6400' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-163-492-3: 805918' },
  ],
  variants: ZESTAWY_492.map(([pn, etykieta, krazek]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 3000 zestawów, etykieta ${etykieta} i krążek ${krazek}`,
    attributes: { Rozmiar: `${etykieta}, 3000 zest.`, Wieczko: krazek },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary prostokątnej etykiety (szerokość × wysokość) i liczba zestawów na rolce.\n\nWszystkie wersje mają 3000 zestawów na rolce.',
    Wieczko: 'Średnica okrągłego krążka, który zakrywa wieczko.\n\nKrążek ma 9,53 mm w trzech wersjach i 11,18 mm w jednej.',
  },
  faq: [
    { question: 'Z czego składa się zestaw B-492?', answer: 'Z prostokątnej etykiety na ściankę oraz okrągłego krążka na wieczko. Oba elementy leżą na rolce obok siebie.' },
    { question: 'Dlaczego zestawów B-492 nie zaleca się do ciekłego azotu?', answer: 'Krążek na wieczko nie może zachodzić na siebie. Materiał pracuje do −196 °C, a w zamrażarce i łaźni wodnej 100 °C sprawdza się bez ograniczeń.' },
    { question: 'Jaką taśmę barwiącą zamówić do zestawów B-492?', answer: `Zaleca się taśmy barwiące z serii R6400. Zestawy drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Probówki stożkowe i duże z wieczkiem', 'Fiolki z osobnym oznaczeniem wieczka', 'Ogólna identyfikacja próbek'],
}

// ---------------------------------------------------------------------------
// Etykiety na probówki PCR B-492 (pid-198751), jeden PN
// ---------------------------------------------------------------------------

export const bradyTHTPcr492: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-289-492-2-wt',
  slug: 'brady-tht-289-492-2-wt',
  name: 'Etykiety na probówki PCR Brady FreezerBondz B-492 THT-289-492-2-WT na rolce 76 mm',
  seoTitle: 'Brady THT-289-492-2-WT — etykiety PCR do i6100, i7100, i7500',
  seoDescription: 'Etykiety Brady FreezerBondz B-492 na probówki PCR, 9,50 × 6,35 mm, 2000 szt., do drukarek Brady i6100, i7100 i i7500. PN: THT-289-492-2-WT, nr art. 198751.',
  shortDescription: 'Brady THT-289-492-2-WT to rolka 2000 małych etykiet 9,50 × 6,35 mm, po osiem w rzędzie, na probówki PCR. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rolka THT-289-492-2-WT niesie małe etykiety w układzie osiem obok siebie, każda o wymiarach 9,50 × 6,35 mm. Materiał FreezerBondz B-492 to biały poliester o połysku, gruby na 0,081 mm. Do powierzchni gładkich dobrano klej akrylowy. Etykiety pasują do probówek PCR, Eppendorf i wirówkowych oraz do fiolek.\n\nNa rolce znajduje się 2000 etykiet, a w rzędzie leży ich osiem. Rozstaw etykiet wynosi 9,50 mm w poziomie i 12,45 mm w pionie, a materiał ma 81 mm szerokości. Układ dopasowano do probówek 0,5 ml.\n\nMateriał wytrzymuje temperatury od −196 do 110 °C, a kąpiel wodna 100 °C mu nie szkodzi. Nadruk jest trwały wobec chemikaliów i rozmazywania. Ponieważ etykieta nie może zachodzić na siebie, do ciekłego azotu jej nie zaleca się. Naklejać można nawet w temperaturze −196 °C. Zalecana taśma barwiąca to R6402.',
  sameAs: 'https://www.brady.eu/labels/pcr-tube-label-for-thermal-transfer-printers-pid-198751',
  images: [
    '/images/products/brady/tht-289-492-2-wt.png',
    '/images/products/brady/tht-289-492-2-wt-label.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-289-492-2-WT z białymi etykietami na probówki PCR ułożonymi w rzędach po osiem',
    'Arkusz etykiet THT-289-492-2-WT z równoległymi paskami etykiet i podłużnymi otworami między nimi',
  ],
  specifications: [
    { name: 'Part Number', value: 'THT-289-492-2-WT' },
    { name: 'Numer artykułu Brady', value: '198751' },
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, agresywny, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C); nie zaleca się ciekłego azotu, bo etykieta nie może zachodzić na siebie' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '9,50 × 6,35 mm' },
    { name: 'Liczba etykiet w rzędzie', value: '8' },
    { name: 'Odstęp etykiet', value: '9,50 mm w poziomie, 12,45 mm w pionie' },
    { name: 'Szerokość materiału', value: '81 mm' },
    { name: 'Liczba sztuk na rolce', value: '2000' },
    { name: 'Probówki', value: 'PCR, Eppendorf, wirówkowe, fiolki; pojemność 0,5 ml' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6402' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  faq: [
    { question: 'Ile etykiet leży w jednym rzędzie na rolce THT-289-492-2-WT?', answer: 'Osiem. Rząd pasuje do ośmiu probówek PCR stojących obok siebie. Rolka ma 2000 etykiet.' },
    { question: 'Czy etykiety THT-289-492-2-WT można stosować w ciekłym azocie?', answer: 'Nie zaleca się tego, bo etykieta nie może zachodzić na siebie. Materiał pracuje od −196 do 110 °C, w zamrażarce i w łaźni wodnej 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet na probówki PCR?', answer: `Zaleca się taśmę barwiącą R6402. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Probówki PCR w stojaku', 'Probówki Eppendorf i wirówkowe', 'Fiolki laboratoryjne 0,5 ml'],
}

// ---------------------------------------------------------------------------
// Samolaminujący poliester B-461 (cps-4364396)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, pole nadruku, sztuk]
const SAMOLAMINUJACE_461: [string, string, string, string, string][] = [
  ['THT-183-461-1', '44,45', '25,4', '25,4 × 25,4', '1000'],
  ['THT-123-461-3', '45,72', '9,53', '19,05 × 9,53', '3000'],
  ['THT-122-461-3', '45,72', '12,7', '19,05 × 12,7', '3000'],
  ['THT-127-461-3', '55,88', '12,7', '19,05 × 12,7', '3000'],
  ['THT-133-461-3', '41,28', '15,24', '25,4 × 15,24', '3000'],
  ['THT-153-461-3', '66,68', '15,24', '25,4 × 15,24', '3000'],
  ['THT-131-461-3', '66,68', '25,4', '25,4 × 25,4', '3000'],
  ['THT-139-461-2', '133,35', '25,4', '38,1 × 25,4', '2000'],
  ['THT-134-461-3', '88,9', '38,1', '31,75 × 38,1', '3000'],
]

export const bradyTHTSamolaminujace461: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-183-461-1',
  slug: 'brady-tht-183-461-1',
  name: 'Samolaminujące etykiety kriogeniczne z poliestru Brady B-461 na rolce 76 mm',
  seoTitle: 'Brady B-461 — etykiety samolaminujące do i6100, i7100, i7500',
  seoDescription: 'Samolaminujące etykiety Brady B-461, od −196 do 110 °C, do drukarek Brady i6100, i7100 i i7500, na probówki kriogeniczne. PN: THT-183-461-1, THT-123-461-3.',
  shortDescription: 'Brady THT-183-461-1 i osiem innych rozmiarów samolaminujących etykiet B-461 na probówki i fiolki kriogeniczne. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-461 to samolaminujący poliester, który owija się wokół naczynia. Folia jest matowa i bardzo cienka: ma 0,048 mm. Pole nadruku zajmuje tylko część szerokości etykiety. Klej akrylowy, trwały, wiąże z podłożami gładkimi, a wydruk dobrze znosi ścieranie i rozmazywanie. Etykiety oznaczają probówki i fiolki kriogeniczne, szkiełka oraz zwykłe probówki.\n\nW rodzinie jest dziewięć rozmiarów. Szerokości zaczynają się od 41,28 mm i sięgają 133,35 mm, a wysokości rozciągają się między 9,53 a 38,1 mm. Typowa rolka liczy 3000 sztuk. Wyjątki to wersja 44,45 × 25,4 mm (1000 sztuk) i wersja 133,35 × 25,4 mm (2000 sztuk). Etykietę 44,45 × 25,4 mm przewidziano dla probówek 2 ml.\n\nEtykieta pracuje w całym przedziale temperatur od −196 do 110 °C: w autoklawie, zamrażarce, wodzie o temperaturze 100 °C oraz w ciekłym azocie. Dobiera się do niej taśmę R4302; pasują też serie R4300 i R7950.',
  sameAs: 'https://www.brady.eu/labels/self-laminating-cryogenic-polyester-labels-for-76-mm-core-printers-cps-4364396',
  images: [
    '/images/products/brady/tht-153-461-3.png',
    '/images/products/brady/tht-183-461-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-153-461-3 z białymi samolaminującymi etykietami B-461 o szerokości 66,68 mm',
    'Rolka Brady THT-183-461-1 z etykietami B-461 44,45 × 25,4 mm rozwiniętymi na przodzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet samolaminujących, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Brady B-461' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,048 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka, łaźnia wodna (100 °C), ciekły azot' },
    { name: 'Odporność', value: 'ścieranie, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 41,28 × 15,24 do 133,35 × 25,4 mm; wysokość od 9,53 do 38,1 mm, zależnie od wersji' },
    { name: 'Pole nadruku', value: 'od 19,05 × 9,53 do 38,1 × 25,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 2000 albo 3000, zależnie od rozmiaru' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302; serie R4300 i R7950' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'i6100: bez THT-139-461-2 (ten PN pasuje do i7100 i i7500)' },
    { name: 'Numery artykułów Brady', value: 'THT-183-461-1: 105124' },
  ],
  variants: SAMOLAMINUJACE_461.map(([pn, szer, wys, pole, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet B-461 ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'Pole nadruku': `${pole} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary całej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 41,28 × 15,24 mm, a najszersza 133,35 × 25,4 mm.',
    'Pole nadruku': 'Część etykiety przeznaczona na nadruk (szerokość × wysokość).\n\nPole jest węższe niż cała etykieta. Przy wersji 44,45 × 25,4 mm wynosi 25,4 × 25,4 mm.',
  },
  faq: [
    { question: 'Co oznacza samolaminująca etykieta B-461?', answer: 'Etykieta jest owijana wokół naczynia i samolaminująca. Nadruk zajmuje część jej szerokości, a materiał dobrze znosi ścieranie i rozmazywanie.' },
    { question: 'Czy etykiety B-461 znoszą ciekły azot i autoklaw?', answer: 'Tak. Zakres pracy to od −196 do 110 °C. Materiał znosi autoklaw, zamrażarkę, łaźnię wodną 100 °C i ciekły azot.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-461?', answer: `Zaleca się taśmę barwiącą R4302. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Probówki i fiolki kriogeniczne', 'Szkiełka laboratoryjne', 'Probówki z etykietą owijaną wokół naczynia'],
}

// ---------------------------------------------------------------------------
// Polipropylen B-7425 (cps-4363436)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość]
const POLIPROPYLEN_7425: [string, string, string][] = [
  ['THT-151-7425-2', '50,8', '6,35'],
  ['THT-152-7425-2', '25,4', '9,53'],
  ['THT-235-7425-2', '38,1', '25,4'],
  ['THT-137-7425-2', '50,8', '25,4'],
  ['THT-59-7425-2', '25,4', '12,7'],
  ['THT-256-7425-2', '33,02', '15,24'],
  ['THT-37-7425-2', '38,1', '12,7'],
  ['THT-179-7425-2', '25,4', '25,4'],
  ['THT-53-7425-2', '50,8', '12,7'],
  ['THT-257-7425-2', '20,96', '6,35'],
  ['THT-136-7425-2', '38,1', '19,05'],
  ['THT-88-7425-2', '25,4', '19,05'],
  ['THT-258-7425-2', '38,1', '44,45'],
]

export const bradyTHTPolipropylen7425: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-151-7425-2',
  slug: 'brady-tht-151-7425-2',
  name: 'Etykiety polipropylenowe odporne na chemikalia Brady B-7425 na rolce 76 mm',
  seoTitle: 'Brady B-7425 — etykiety laboratoryjne do i6100, i7100, i7500',
  seoDescription: 'Etykiety polipropylenowe Brady B-7425, od −80 do 70 °C, do drukarek Brady i6100, i7100 i i7500, na butelki i probówki. PN: THT-151-7425-2, THT-235-7425-2.',
  shortDescription: 'Brady THT-151-7425-2 i dwanaście innych rozmiarów etykiet polipropylenowych B-7425 po 2000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Biały polipropylen B-7425 ma matowe wykończenie i 0,102 mm grubości. Klej akrylowy utrzymuje etykietę na gładkich podłożach. Tworzywo znosi mróz, chemikalia i rozpuszczalniki, a kod drukuje się termotransferem. Etykiety trafiają na butelki, szalki, kolby, probówki stożkowe i duże oraz płytki wielodołkowe, a także na elementy i sprzęt oraz do ogólnej identyfikacji.\n\nTrzynaście rozmiarów występuje po 2000 sztuk na rolce. Najwęższa etykieta ma 20,96 mm, najszersza 50,8 mm. Wysokość zaczyna się od 6,35 mm i dochodzi do 44,45 mm. Płaskie, szerokie etykiety 50,8 × 6,35 mm przewidziano dla probówek 4 ml. Szerokość 25,4 mm występuje z wysokościami 9,53, 12,7, 19,05 i 25,4 mm, a szerokość 38,1 mm z wysokościami 12,7, 19,05, 25,4 oraz 44,45 mm.\n\nW zakresie −80…70 °C materiał przechodzi autoklaw i zamrażarkę. Etykietę nakleja się przed zamrożeniem. Rolce odpowiada taśma barwiąca R6400.',
  sameAs: 'https://www.brady.eu/labels/chemical-resistant-cryogenic-polypropylene-labels-for-76-mm-core-printers-cps-4363436',
  images: [
    '/images/products/brady/tht-235-7425-2.png',
    '/images/products/brady/tht-151-7425-2.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-235-7425-2 z białymi etykietami polipropylenowymi B-7425 38,1 × 25,4 mm',
    'Rolka Brady THT-151-7425-2 z niskimi, szerokimi etykietami B-7425 50,8 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Brady B-7425' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka; etykietę trzeba nakleić przed zamrożeniem' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 20,96 do 50,8 mm, wysokość od 6,35 do 44,45 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '2000' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6400' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-151-7425-2: 121008' },
  ],
  variants: POLIPROPYLEN_7425.map(([pn, szer, wys]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 2000 etykiet B-7425 ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, 2000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 20,96 × 6,35 mm, a najwyższa 38,1 × 44,45 mm.',
  },
  faq: [
    { question: 'Jak nakleić etykiety B-7425 do zamrażarki?', answer: 'Etykietę trzeba nakleić przed zamrożeniem naczynia. Materiał pracuje w zakresie od −80 do 70 °C i znosi autoklaw.' },
    { question: 'Na jakie naczynia pasują etykiety B-7425?', answer: 'Na butelki, szalki, kolby, probówki stożkowe i duże oraz płytki wielodołkowe. Rozmiar dobiera się do pojemności naczynia.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7425?', answer: `Zaleca się taśmę barwiącą R6400. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Butelki, szalki i kolby laboratoryjne', 'Probówki i płytki wielodołkowe', 'Znakowanie elementów i sprzętu'],
}

// ---------------------------------------------------------------------------
// Polipropylen B-7425, zestawy z krążkiem na wieczko (cps-4366859)
// ---------------------------------------------------------------------------

// [PN, etykieta, krążek]
const ZESTAWY_7425: [string, string, string][] = [
  ['THT-251-7425-2', '25,4 × 12,7 mm', 'Ø 11,18 mm'],
  ['THT-249-7425-2', '25,4 × 9,53 mm', 'Ø 9,53 mm'],
]

export const bradyTHTZestawy7425: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-251-7425-2',
  slug: 'brady-tht-251-7425-2',
  name: 'Zestawy etykiet polipropylenowych z krążkiem na wieczko Brady B-7425 na rolce 76 mm',
  seoTitle: 'Brady B-7425 — etykiety z wieczkiem do i6100, i7100, i7500',
  seoDescription: 'Zestawy etykieta plus krążek na wieczko z polipropylenu B-7425, do drukarek Brady i6100, i7100 i i7500, od −80 do 70 °C. PN: THT-251-7425-2, THT-249-7425-2.',
  shortDescription: 'Brady THT-251-7425-2 i THT-249-7425-2 to zestawy etykiety na ściankę i krążka na wieczko z polipropylenu B-7425. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'W zestawie leżą obok siebie prostokątna etykieta i okrągły krążek. Pierwsza trafia na ściankę, drugi na wieczko. Materiałem jest biały, matowy polipropylen B-7425 o grubości 0,102 mm. Klej akrylowy jest przeznaczony do gładkich powierzchni. Zestawy oznaczają fiolki oraz probówki stożkowe i duże razem z wieczkami.\n\nRolka mieści 2000 zestawów w jednym rzędzie. Wersja z etykietą 25,4 × 12,7 mm dostaje krążek Ø 11,18 mm i obsługuje probówki 0,5 ml. W wersji mniejszej średnica krążka to 9,53 mm, a etykieta jest niższa: 25,4 × 9,53 mm.\n\nZakres od −80 do 70 °C obejmuje autoklaw oraz zamrażarkę. Przed schłodzeniem naczynia etykieta musi już przylegać. Rozpuszczalniki, chemikalia i rozmazywanie nie psują nadruku, a materiał jest odporny na zimno oraz na niską i wysoką temperaturę. Zestawy drukuje się termotransferem. Taśma barwiąca do tej rolki to R6406.',
  sameAs: 'https://www.brady.eu/labels/chemical-resistant-cryogenic-polypropylene-labels-vial-top-for-76-mm-core-printers-cps-4366859',
  images: [
    '/images/products/brady/tht-251-7425-2.png',
    '/images/products/brady/tht-249-7425-2.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-251-7425-2 z zestawami: prostokątna etykieta i krążek Ø 11,18 mm',
    'Rolka Brady THT-249-7425-2 z mniejszymi zestawami etykiet B-7425 i krążkami Ø 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów etykieta i krążek, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Brady B-7425' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka; etykietę trzeba nakleić przed zamrożeniem' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 albo 25,4 × 9,53 mm, zależnie od wersji' },
    { name: 'Wymiary krążka', value: 'Ø 11,18 albo 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '2000 zestawów' },
    { name: 'Etykiet w rzędzie', value: '1' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6406' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-251-7425-2: 121001' },
  ],
  variants: ZESTAWY_7425.map(([pn, etykieta, krazek]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 2000 zestawów, etykieta ${etykieta} i krążek ${krazek}`,
    attributes: { Rozmiar: `${etykieta}, 2000 zest.`, Wieczko: krazek },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary prostokątnej etykiety (szerokość × wysokość) i liczba zestawów na rolce.\n\nObie wersje mają 2000 zestawów na rolce.',
    Wieczko: 'Średnica okrągłego krążka, który zakrywa wieczko.\n\nKrążek ma 11,18 albo 9,53 mm, zależnie od wersji.',
  },
  faq: [
    { question: 'Do czego służy krążek w zestawie B-7425?', answer: 'Krążek oznacza wieczko fiolki lub probówki, a prostokątna etykieta jej ściankę. Oba elementy leżą na rolce obok siebie.' },
    { question: 'Czy zestawy B-7425 można zamrażać po naklejeniu?', answer: 'Tak, ale etykietę trzeba nakleić przed zamrożeniem. Materiał pracuje w zakresie od −80 do 70 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do zestawów B-7425?', answer: `Zaleca się taśmę barwiącą R6406. Zestawy drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Fiolki z oznaczeniem wieczka', 'Probówki stożkowe i duże', 'Oznaczanie próbek w badaniach laboratoryjnych'],
}

// ---------------------------------------------------------------------------
// Polipropylen B-7425 ze wskaźnikiem sterylizacji parowej (cps-4326151)
// ---------------------------------------------------------------------------

// [PN, rozmiar etykiety, pole nadruku]
const STERYLIZACJA_7425: [string, string, string | null][] = [
  ['THT-235-7425-2-AC', '38,1 × 25,4 mm', '38,1 × 19,05 mm'],
  ['THT-137-7425-2-AC', 'szer. 50,8 mm', null],
]

export const bradyTHTSterylizacja7425: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-235-7425-2-ac',
  slug: 'brady-tht-235-7425-2-ac',
  name: 'Etykiety polipropylenowe ze wskaźnikiem sterylizacji parowej Brady B-7425-AC na rolce 76 mm',
  seoTitle: 'Brady B-7425-AC — etykiety do autoklawu do i6100, i7100, i7500',
  seoDescription: 'Etykiety Brady B-7425-AC ze wskaźnikiem sterylizacji parowej, od −80 do 70 °C, do drukarek Brady i6100, i7100 i i7500. PN: THT-235-7425-2-AC, THT-137-7425-2-AC.',
  shortDescription: 'Brady THT-235-7425-2-AC i THT-137-7425-2-AC wskazują sterylizację parową. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykiety B-7425-AC pokazują, że przedmiot przeszedł sterylizację parową. Bazą jest biały polipropylen B-7425, matowy i gruby na 0,102 mm. Klej jest trwały, akrylowy, do podłoży gładkich. Etykiety oznaczają szkiełka, probówki, fiolki i płytki wielodołkowe. Znajdują zastosowanie w ogólnej identyfikacji i przy znakowaniu elementów oraz sprzętu.\n\nRolka mieści 2000 sztuk w dwóch szerokościach. Wersja 38,1 mm szerokości ma wysokość 25,4 mm, a drukuje się na niej w polu 38,1 × 19,05 mm; pasuje do probówek 4 ml. Wersja 38,1 mm ma skok etykiet 28,58 mm i pas materiału 43,18 mm. Szerokość drugiej wersji to 50,8 mm.\n\nZakres pracy obejmuje temperatury między −80 a 70 °C. Materiał wytrzymuje autoklaw, zamrażarkę i niską temperaturę. Kod drukuje się termotransferem. Odporność na chemikalia i rozpuszczalniki dotyczy także nadruku. Zalecana taśma barwiąca to R6406.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-sterilisation-indicating-autoclave-polypropylene-labels-cps-4326151',
  images: [
    '/images/products/brady/tht-235-7425-2-ac.png',
    '/images/products/brady/tht-137-7425-2-ac.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-235-7425-2-AC z białymi etykietami ze wskaźnikiem sterylizacji 38,1 × 25,4 mm',
    'Rolka Brady THT-137-7425-2-AC z szerszymi etykietami B-7425-AC na gilzie widocznej z boku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych ze wskaźnikiem sterylizacji parowej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Brady B-7425' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '38,1 × 25,4 mm (THT-235-7425-2-AC); szerokość 50,8 mm (THT-137-7425-2-AC)' },
    { name: 'Pole nadruku', value: '38,1 × 19,05 mm (THT-235-7425-2-AC)' },
    { name: 'Liczba sztuk na rolce', value: '2000' },
    { name: 'Wskaźnik', value: 'sterylizacja parowa' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6406' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-235-7425-2-AC: 149272' },
  ],
  variants: STERYLIZACJA_7425.map(([pn, rozmiar, pole]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 2000 etykiet B-7425-AC ${rozmiar}`,
    attributes: { Rozmiar: `${rozmiar}, 2000 szt.`, ...(pole ? { 'Pole nadruku': pole } : {}) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nSkrót „szer.” oznacza samą szerokość etykiety. Obie wersje mają 2000 sztuk.',
    'Pole nadruku': 'Część etykiety przeznaczona na nadruk (szerokość × wysokość).\n\nWysokość pola wynosi 19,05 mm, mniej niż wysokość całej etykiety.',
  },
  faq: [
    { question: 'Co wskazują etykiety B-7425-AC?', answer: 'Wskazują sterylizację parową. Materiał przechodzi autoklaw i pracuje w zakresie od −80 do 70 °C.' },
    { question: 'Na jakich naczyniach stosuje się etykiety B-7425-AC?', answer: 'Na szkiełkach, probówkach, fiolkach i płytkach wielodołkowych. Wersja 38,1 × 25,4 mm pasuje do probówek 4 ml.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7425-AC?', answer: `Zaleca się taśmę barwiącą R6406. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Naczynia po sterylizacji parowej', 'Szkiełka, probówki i fiolki', 'Płytki wielodołkowe i sprzęt laboratoryjny'],
}

// ---------------------------------------------------------------------------
// StainerBondz B-481 na szkiełka (cps-4363573)
// ---------------------------------------------------------------------------

// [PN, wysokość, sztuk, rozmiar pełny (gdy znany)]
const SZKIELKA_481: [string, string, string, string | null][] = [
  ['THT-142-481-2.5', '5,08', '2500', null],
  ['THT-195-481-3', '9,53', '3000', '22,86 × 9,53'],
  ['THT-194-481-3', '19,05', '3000', null],
  ['THT-164-481-3', '22,86', '3000', null],
]

export const bradyTHTStainerBondz481: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-195-481-3',
  slug: 'brady-tht-195-481-3',
  name: 'Etykiety na szkiełka odporne na chemikalia Brady StainerBondz B-481 na rolce 76 mm',
  seoTitle: 'Brady B-481 — etykiety na szkiełka do i6100, i7100, i7500',
  seoDescription: 'Etykiety StainerBondz B-481 na szkiełka mikroskopowe, odporne na barwienie H&E, do drukarek Brady i6100, i7100 i i7500. PN: THT-195-481-3, THT-194-481-3.',
  shortDescription: 'Brady THT-195-481-3 i trzy inne wysokości etykiet StainerBondz B-481 do szkiełek barwionych w histologii. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'StainerBondz B-481 to satynowy poliester w kolorze białym, gruby na 0,0914 mm. Powstał dla szkiełek mikroskopowych barwionych w pracowni. Sprawdza się w częstej metodzie H&E, w której używa się hematoksyliny i eozyny. Dobrze znosi też wiele chemikaliów, oleje i wodę, więc nadaje się do innych oznaczeń w szpitalu lub laboratorium. Klej akrylowy trzyma trwale.\n\nRodzina ma cztery wysokości etykiet: 5,08, 9,53, 19,05 i 22,86 mm. Po 3000 sztuk mają rolki o wysokościach 9,53, 19,05 i 22,86 mm. Rolka o wysokości 5,08 mm liczy 2500 sztuk. Etykiety leżą pojedynczo w rzędzie. Znana szerokość etykiety o wysokości 9,53 mm to 22,86 mm.\n\nDolna granica wynosi −80 °C, a górna 130 °C. Materiał jest przystosowany do zamrażarki oraz do łaźni wodnej nagrzanej do 100 °C. Z tą rolką łączy się taśmę R6406 z serii R6400.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyester-chemical-resistant-slide-labels-cps-4363573',
  images: [
    '/images/products/brady/tht-194-481-3.png',
    '/images/products/brady/tht-195-481-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-194-481-3 z satynowymi etykietami StainerBondz o wysokości 19,05 mm',
    'Rolka Brady THT-195-481-3 z etykietami StainerBondz B-481 22,86 × 9,53 mm na szkiełka',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'StainerBondz B-481' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0914 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 130 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Odporność', value: 'chemikalia, oleje, woda, barwienie H&E' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '22,86 × 9,53 mm (THT-195-481-3); pozostałe wersje: wysokość 5,08, 19,05 albo 22,86 mm' },
    { name: 'Liczba sztuk na rolce', value: '3000; 2500 przy wysokości 5,08 mm' },
    { name: 'Etykiet w rzędzie', value: '1' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6406 (seria R6400)' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numery artykułów Brady', value: 'THT-195-481-3: 108242' },
  ],
  variants: SZKIELKA_481.map(([pn, wys, szt, pelny]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet B-481, ${pelny ? `${pelny} mm` : `wysokość ${wys} mm`}`,
    attributes: { Rozmiar: `${pelny ? `${pelny} mm` : `wys. ${wys} mm`}, ${szt} szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce.\n\nSkrót „wys.” oznacza samą wysokość etykiety. Rolki mają 2500 albo 3000 sztuk.',
  },
  faq: [
    { question: 'Do jakiego barwienia przeznaczone są etykiety B-481?', answer: 'Do szkiełek mikroskopowych barwionych w laboratorium, w tym metodą H&E z hematoksyliną i eozyną. Materiał znosi też oleje i wodę.' },
    { question: 'Jaki zakres temperatur obejmują etykiety B-481?', answer: 'Od −80 do 130 °C. Materiał znosi zamrażarkę i łaźnię wodną o temperaturze 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-481?', answer: `Zaleca się taśmę barwiącą R6406 z serii R6400. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Szkiełka mikroskopowe w histologii', 'Oznaczanie w laboratoriach i szpitalach', 'Identyfikacja ogólna odporna na chemikalia'],
}

export const bradyTHTLab: Product[] = [
  bradyTHTFreezerBondz490,
  bradyTHTFreezerBondz492,
  bradyTHTZestawy492,
  bradyTHTPcr492,
  bradyTHTSamolaminujace461,
  bradyTHTPolipropylen7425,
  bradyTHTZestawy7425,
  bradyTHTSterylizacja7425,
  bradyTHTStainerBondz481,
]

export const bradyTHTLabSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-tht-154-490-3': 'lab',
  'brady-tht-143-492-3': 'lab',
  'brady-tht-163-492-3': 'lab',
  'brady-tht-289-492-2-wt': 'lab',
  'brady-tht-183-461-1': 'lab',
  'brady-tht-151-7425-2': 'lab',
  'brady-tht-251-7425-2': 'lab',
  'brady-tht-235-7425-2-ac': 'lab',
  'brady-tht-195-481-3': 'lab',
}
