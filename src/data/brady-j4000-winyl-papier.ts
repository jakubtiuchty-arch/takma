import type { Product } from './products'
import { wspolneJ4000 } from './brady-j4000-wspolne'

// Etykiety Brady J40-, J40C-, J50- i J50C- do kolorowej drukarki atramentowej BradyJet J4000: winyl B-2595 i B-2581, papier B-2550,
// PermaShield z laminatem, ToughWash B-2855, zestawy etykiet z laminatem oraz zawieszki poliestrowe B-2551. 14.11.2026.


// ---------------------------------------------------------------------------
// Winyl B-2595 (cps-3069400 wykrawane + cps-3069398 taśmy ciągłe + cps-4552775 etykiety okrągłe J40-)
// ---------------------------------------------------------------------------

const J40 = 'J4000'
const J40_J50 = 'J4000, J5000'

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma, drukarki]
const WINYL_2595: [string, string, string, string, string, string][] = [
  ['J40-388-2595', '175434', 'okrągłe Ø 25,4 mm, 500 szt.', 'Ø 25,4 mm, 500 szt.', 'Wykrawane, okrągłe', J40],
  ['J40-389-2595', '175436', 'okrągłe Ø 38,1 mm, 500 szt.', 'Ø 38,1 mm, 500 szt.', 'Wykrawane, okrągłe', J40],
  ['J40-390-2595', '175438', 'okrągłe Ø 50,8 mm, 500 szt.', 'Ø 50,8 mm, 500 szt.', 'Wykrawane, okrągłe', J40],
  ['J40-179-2595', '175432', '25,4 × 25,4 mm, 1500 szt.', '25,4 × 25,4 mm, 1500 szt.', 'Wykrawane, kwadrat', J40],
  ['J50-260-2595', '148657', '55,12 × 85,09 mm, 340 szt.', '55,12 × 85,09 mm, 340 szt.', 'Wykrawane, prostokąt', J40_J50],
  ['J50-261-2595', '148660', '74,93 × 109,98 mm, 270 szt.', '74,93 × 109,98 mm, 270 szt.', 'Wykrawane, prostokąt', J40_J50],
  ['J50-262-2595', '148651', '104,9 × 154,94 mm, 200 szt.', '104,9 × 154,94 mm, 200 szt.', 'Wykrawane, prostokąt', J40_J50],
  ['J50-267-2595', '148664', '154,94 × 210,82 mm, 120 szt.', '154,94 × 210,82 mm, 120 szt.', 'Wykrawane, prostokąt', J40_J50],
  ['J50-265-2595', '148659', '177,8 × 254 mm, 100 szt.', '177,8 × 254 mm, 100 szt.', 'Wykrawane, prostokąt', J40_J50],
  ['J40C-1125-2595', '175439', 'taśma ciągła 28,58 mm × 30,48 m', 'ciągła 28,58 mm × 30,48 m', 'Taśma ciągła', J40],
  ['J50C-2250-2595', '148656', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła', J40_J50],
  ['J50C-4000-2595', '148653', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła', J40_J50],
  ['J50C-6000-2595', '148666', 'taśma ciągła 152,4 mm × 30,48 m', 'ciągła 152,4 mm × 30,48 m', 'Taśma ciągła', J40_J50],
  ['J50C-8000-2595', '148663', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła', J40_J50],
]

export const bradyJ4000Winyl2595: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-179-2595',
  slug: 'brady-j40-179-2595',
  name: 'Etykiety winylowe Brady B-2595 do drukarki J4000',
  seoTitle: 'Brady B-2595 — etykiety winylowe do drukarki J4000',
  seoDescription: 'Etykiety winylowe Brady B-2595 do Brady J4000 (BradyJet): wykrawane i taśmy ciągłe, matowe, od −40 do 60 °C. PN: J40-179-2595, J50-262-2595, J50C-4000-2595.',
  shortDescription: 'Brady B-2595 to białe, matowe etykiety winylowe: dziewięć rodzajów wykrawanych, od okręgu Ø 25,4 mm po 177,8 × 254 mm, oraz pięć taśm ciągłych. Do drukarki Brady J4000.',
  description: 'Winyl B-2595 jest białym i matowym materiałem do druku atramentowego o przeznaczeniu ogólnym. Wierzchnia warstwa poprawia barwy i chroni nadruk przed rozmazaniem. Odporność sprawdzano w kontakcie z cieczami, alkoholem oraz chemikaliami, a także pod światłem fluorescencyjnym i UV. Znakuje się nim instalacje elektryczne, rury, zawory i magazyny. Nadaje się też do oznaczeń zagrożeń, procedur lockout tagout i stanowisk 5S.\n\nWśród etykiet wykrawanych są trzy okrągłe, o średnicy 25,4, 38,1 i 50,8 mm, po 500 sztuk na rolce. Dochodzi kwadrat 25,4 × 25,4 mm z 1500 sztukami oraz pięć prostokątów: najmniejszy ma 55,12 × 85,09 mm, a największy 177,8 × 254 mm. Okrągłe etykiety pasują do tarcz przyrządów i oznaczeń 5S. Taśm ciągłych jest pięć, każda z 30,48 m folii, a ich szerokość waha się od 28,58 mm do 203,2 mm, zależnie od wersji.\n\nFolia o grubości 0,135 mm ma trwały klej akrylowy. Naklejać można już od −18 °C. Granice pracy gotowej etykiety to −40 °C i 60 °C, a materiał znosi ścieranie. Wersje J40, czyli okrągłe, kwadrat i taśma 28,58 mm, mają klej o większej przyczepności i wytrzymują warunki zewnętrzne. Pełny kolor daje tusz drukarki J4000.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-j5000-pre-cut-vinyl-labels-cps-3069400',
  images: [
    '/images/products/brady/j40-179-2595.png',
    '/images/products/brady/j50-267-2595.png',
    '/images/products/brady/j40-388-2595.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-179-2595 z białymi kwadratowymi etykietami winylowymi o wymiarach 25,4 × 25,4 mm na tekturowej gilzie',
    'Rolka Brady J50-267-2595 z dużymi białymi etykietami winylowymi o wymiarach 154,94 × 210,82 mm',
    'Rolka Brady J40-388-2595 z białymi okrągłymi etykietami winylowymi o średnicy 25,4 mm na tekturowej gilzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40-, J50- i taśm ciągłych J40C-, J50C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2595' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; wersje J40 do powierzchni gładkich, wersje J50 także do chropowatych' },
    { name: 'Grubość', value: '0,135 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, ciecze, alkohol, chemikalia, światło fluorescencyjne i UV' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J40-388-2595: Ø 25,4 mm; J40-389-2595: Ø 38,1 mm; J40-390-2595: Ø 50,8 mm; J40-179-2595: 25,4 × 25,4 mm; J50-260-2595: 55,12 × 85,09 mm; J50-261-2595: 74,93 × 109,98 mm; J50-262-2595: 104,9 × 154,94 mm; J50-267-2595: 154,94 × 210,82 mm; J50-265-2595: 177,8 × 254 mm' },
    { name: 'Liczba sztuk na rolce', value: 'J40-388/389/390-2595: 500; J40-179-2595: 1500; J50-260-2595: 340; J50-261-2595: 270; J50-262-2595: 200; J50-267-2595: 120; J50-265-2595: 100' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 / 152,4 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000 (wersje J40- i J40C-: tylko J4000)' },
    { name: 'Numery artykułów Brady', value: WINYL_2595.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_2595.map(([pn, , nazwa, rozmiar, forma, drukarki]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety winylowe B-2595 ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma, Drukarki: drukarki },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od Ø 25,4 mm do 177,8 × 254 mm, a taśmy od 28,58 do 203,2 mm szerokości.',
    Forma: 'Kształt etykiety albo taśma bez podziału.\n\nEtykiety wykrawane są okrągłe, kwadratowe lub prostokątne. Taśmę ciągłą drukarka obcina po wydruku.',
    Drukarki: 'Drukarki, w których pracuje dana rolka.\n\nRolki J40 i J40C pasują tylko do J4000, a rolki J50 i J50C także do J5000.',
  },
  faq: [
    { question: 'Jakie rozmiary etykiet B-2595 są dostępne?', answer: 'Dziewięć rodzajów etykiet wykrawanych, od okręgu Ø 25,4 mm do 177,8 × 254 mm, oraz pięć taśm ciągłych o szerokości od 28,58 do 203,2 mm. Materiał drukuje [Brady J4000](/produkt/brady-j4000).' },
    { question: 'W jakiej temperaturze można naklejać etykiety B-2595?', answer: 'Od −18 °C. Naklejone etykiety pracują w zakresie od −40 do 60 °C.' },
    { question: 'Czym różnią się wersje J40 od J50?', answer: 'Wersje J40 (okrągłe, kwadrat 25,4 mm i taśma 28,58 mm) mają klej o zwiększonej przyczepności i drukuje je tylko J4000. Wersje J50 pasują także do J5000.' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczenia zagrożeń', 'Rury, zawory i instalacje elektryczne', 'Etykiety 5S, magazyny i lockout tagout'],
}

// ---------------------------------------------------------------------------
// Winyl do wielokrotnego przyklejania B-2581 (cps-4198075)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość taśmy]
const WIELOKROTNE_2581: [string, string, string][] = [
  ['J50C-2250-2581', '151110', '57,15'],
  ['J50C-4000-2581', '151111', '101,6'],
  ['J50C-6000-2581', '151112', '152,4'],
  ['J50C-8000-2581', '151113', '203,2'],
]

export const bradyJ4000Wielokrotne2581: Product = {
  ...wspolneJ4000,
  id: 'brady-j50c-4000-2581',
  slug: 'brady-j50c-4000-2581',
  name: 'Etykiety winylowe do wielokrotnego przyklejania Brady B-2581 do drukarki J4000',
  seoTitle: 'Brady B-2581 — winyl do wielokrotnego klejenia do J4000',
  seoDescription: 'Taśma winylowa Brady B-2581 do Brady J4000 (BradyJet): klej do ponownego naklejania, 4 szerokości, 30,48 m. PN: J50C-2250-2581, J50C-4000-2581, J50C-8000-2581.',
  shortDescription: 'Brady B-2581 to biała, matowa taśma ciągła z winylu z klejem, który pozwala odklejać i naklejać etykiety ponownie, w czterech szerokościach od 57,15 do 203,2 mm. Do drukarki Brady J4000.',
  description: 'Taśma B-2581 jest winylem w kolorze białym, z matową powierzchnią, który przyjmuje tusz atramentowy. Klej akrylowy pozwala etykietę zdjąć i przykleić ponownie. Elastyczna, trwała folia sprawdza się tam, gdzie identyfikacja zmienia się często. Z taśmy powstają etykiety 5S i Lean, znaczniki zapasów, oznaczenia pojemników wielokrotnego użytku oraz tymczasowe oznaczenia bezpieczeństwa i identyfikacji ogólnej. Można je stosować tam, gdzie oznaczenie ma pozostać na miejscu tylko przez pewien czas.\n\nTaśma jest ciągła, bez wykrojów. Długość etykiety wynika z projektu, a obcinarka drukarki przecina folię po wydruku. Każda rolka zawiera 30,48 m materiału. Dostępne szerokości to 57,15, 101,6, 152,4 i 203,2 mm. Najszersza wersja wykorzystuje pełną szerokość etykiety w J4000, więc nadaje się do dużych oznaczeń i znaków informacyjnych. Jedna rolka daje etykiety o różnych długościach, od krótkich nalepek po długie paski.\n\nFolia ma 0,137 mm grubości. Etykietę przykleja się od 10 °C, a użytkować można w temperaturach od −40 do 60 °C. Najlepiej przylega do powierzchni gładkich. Tusz drukarki daje pełny kolor, więc potrzebne oznaczenia powstają na miejscu i w wymaganej liczbie.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-j5000-repositionable-vinyl-labels-cps-4198075',
  images: [
    '/images/products/brady/j50c-4000-2581.png',
    '/images/products/brady/j50c-2250-2581.png',
    '/images/products/brady/j50c-8000-2581.png',
  ],
  imageDescriptions: [
    'Rolka Brady J50C-4000-2581 z białą taśmą winylową do wielokrotnego przyklejania o szerokości 101,6 mm',
    'Rolka Brady J50C-2250-2581 z białą taśmą winylową o szerokości 57,15 mm z wysuniętym końcem',
    'Rolka Brady J50C-8000-2581 z szeroką białą taśmą winylową o szerokości 203,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Taśma ciągła do druku atramentowego' },
    { name: 'Materiał', value: 'B-2581' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'akrylowy, do ponownego naklejania; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,137 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '57,15 / 101,6 / 152,4 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000' },
    { name: 'Numery artykułów Brady', value: WIELOKROTNE_2581.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WIELOKROTNE_2581.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — taśma winylowa B-2581 ciągła ${szer} mm × 30,48 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 30,48 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej na rolce.\n\nTaśmy mają 57,15, 101,6, 152,4 lub 203,2 mm szerokości, a każda rolka 30,48 m długości.',
  },
  faq: [
    { question: 'Czy etykiety z taśmy B-2581 można przeklejać?', answer: 'Tak. Klej jest przeznaczony do ponownego naklejania, więc etykietę można odkleić i przenieść. Materiał opracowano do miejsc, w których oznaczenia często się zmienia.' },
    { question: 'W jakiej temperaturze można naklejać taśmę B-2581?', answer: 'Od 10 °C. Naklejona etykieta pracuje w zakresie od −40 do 60 °C.' },
    { question: 'Jakie szerokości taśmy B-2581 są dostępne?', answer: 'Cztery szerokości: 57,15, 101,6, 152,4 i 203,2 mm, każda z 30,48 m materiału. Taśmę drukuje [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Etykiety 5S i Lean', 'Oznaczanie pojemników wielokrotnego użytku', 'Tymczasowe znaki bezpieczeństwa i oznaczenia zapasów'],
}

// ---------------------------------------------------------------------------
// Papier B-2550 (cps-4533106 wykrawane + cps-4533103 taśmy ciągłe)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const PAPIER_2550: [string, string, string, string, string][] = [
  ['J40-235-2550', '175421', '38,1 × 25,4 mm, 1050 szt.', '38,1 × 25,4 mm, 1050 szt.', 'Wykrawane'],
  ['J40-17-2550', '175422', '50,8 × 25,4 mm, 1000 szt.', '50,8 × 25,4 mm, 1000 szt.', 'Wykrawane'],
  ['J40-166-2550', '175423', '63,5 × 31,75 mm, 850 szt.', '63,5 × 31,75 mm, 850 szt.', 'Wykrawane'],
  ['J40-7-2550', '175424', '69,85 × 31,75 mm, 850 szt.', '69,85 × 31,75 mm, 850 szt.', 'Wykrawane'],
  ['J40-18-2550', '175425', '76,2 × 25,4 mm, 1050 szt.', '76,2 × 25,4 mm, 1050 szt.', 'Wykrawane'],
  ['J40-19-2550', '175426', '76,2 × 50,8 mm, 550 szt.', '76,2 × 50,8 mm, 550 szt.', 'Wykrawane'],
  ['J40-20-2550', '175427', '76,2 × 127 mm, 200 szt.', '76,2 × 127 mm, 200 szt.', 'Wykrawane'],
  ['J40-55-2550', '175430', '101,6 × 50,8 mm, 550 szt.', '101,6 × 50,8 mm, 550 szt.', 'Wykrawane'],
  ['J40-77-2550', '175428', '101,6 × 101,6 mm, 280 szt.', '101,6 × 101,6 mm, 280 szt.', 'Wykrawane'],
  ['J40-25-2550', '175429', '101,6 × 152,4 mm, 180 szt.', '101,6 × 152,4 mm, 180 szt.', 'Wykrawane'],
  ['J40C-1125-2550', '175417', 'taśma ciągła 28,58 mm × 30,48 m', 'ciągła 28,58 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-2000-2550', '175418', 'taśma ciągła 50,8 mm × 30,48 m', 'ciągła 50,8 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-3000-2550', '175419', 'taśma ciągła 76,2 mm × 30,48 m', 'ciągła 76,2 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-4000-2550', '175420', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000Papier2550: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-25-2550',
  slug: 'brady-j40-25-2550',
  name: 'Etykiety papierowe Brady B-2550 do drukarki J4000',
  seoTitle: 'Brady B-2550 — etykiety papierowe do drukarki J4000',
  seoDescription: 'Etykiety papierowe Brady B-2550 do Brady J4000 (BradyJet): 10 rozmiarów wykrawanych i 4 taśmy ciągłe, matowe. PN: J40-25-2550, J40-55-2550, J40C-4000-2550.',
  shortDescription: 'Brady B-2550 to matowy biały papier z klejem akrylowym, w dziesięciu rozmiarach wykrawanych i na czterech taśmach ciągłych, do lekkich zastosowań. Do drukarki Brady J4000.',
  description: 'B-2550 jest białym papierem drukowanym tuszem atramentowym; przeznaczono go do lekkich zastosowań. Matowa powierzchnia daje wyraźny kontrast i odporność na rozmazanie, dlatego papier dobrze nadaje się do kodów kreskowych. Klej akrylowy trwale łączy etykietę z gładką powierzchnią. Służą do identyfikacji ogólnej i do znakowania komponentów oraz wyposażenia. Materiał stanowi ekonomiczne rozwiązanie do codziennych oznaczeń, w których nie ma potrzeby stosowania folii.\n\nRolki z etykietami wykrawanymi mają dziesięć rozmiarów: najmniejsza etykieta to 38,1 × 25,4 mm i 1050 sztuk na rolce, a największa to 101,6 × 152,4 mm, której na rolce mieści się 180. Cztery taśmy ciągłe liczą po 30,48 m, a ich szerokość wynosi 28,58, 50,8, 76,2 lub 101,6 mm. Taśma ciągła daje etykiety o dowolnej długości, a obcinarka drukarki dzieli ją po wydruku. Każdą rolkę rozpoznaje układ Smart Cell.\n\nPapier ma 0,12 mm grubości. Etykiety można naklejać nawet przy −28 °C, a naklejone pracują w przedziale między −40 a 60 °C. Wydruk wykonuje tusz drukarki J4000, w pełnym kolorze.',
  sameAs: 'https://www.brady.eu/labels/paper-labels-pre-sized-for-j4000-printer-cps-4533106',
  images: [
    '/images/products/brady/j40-25-2550.png',
    '/images/products/brady/j40-235-2550.png',
    '/images/products/brady/j40c-1125-2550.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-25-2550 z wysuniętym paskiem białych etykiet papierowych o wymiarach 101,6 × 152,4 mm',
    'Rolka Brady J40-235-2550 z małymi białymi etykietami papierowymi o wymiarach 38,1 × 25,4 mm na tekturowej gilzie',
    'Rolka Brady J40C-1125-2550 z wąską białą taśmą papierową o szerokości 28,58 mm na tekturowej gilzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40- i taśmy ciągłej J40C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2550' },
    { name: 'Typ materiału', value: 'papier do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,12 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −28 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 38,1 × 25,4 mm (J40-235-2550) do 101,6 × 152,4 mm (J40-25-2550), dziesięć rozmiarów w tabeli wariantów' },
    { name: 'Szerokość taśmy', value: '28,58 / 50,8 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: PAPIER_2550.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PAPIER_2550.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety papierowe B-2550 ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 38,1 × 25,4 do 101,6 × 152,4 mm, a taśmy 28,58, 50,8, 76,2 lub 101,6 mm szerokości.',
    Forma: 'Sposób przygotowania papieru na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśma ciągła nie ma podziału i jest cięta po wydruku na zaprojektowaną długość.',
  },
  faq: [
    { question: 'Do jakich zastosowań służą etykiety papierowe B-2550?', answer: 'Do lekkich zastosowań: identyfikacji ogólnej oraz oznaczania komponentów i sprzętu. Matowy papier daje dobry kontrast, więc nadaje się do kodów kreskowych.' },
    { question: 'W jakiej temperaturze można naklejać etykiety B-2550?', answer: 'Od −28 °C. Naklejone etykiety pracują w zakresie od −40 do 60 °C.' },
    { question: 'Jakie rozmiary etykiet B-2550 są dostępne?', answer: 'Dziesięć rozmiarów wykrawanych oraz cztery taśmy ciągłe. Materiał drukuje [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Kody kreskowe i identyfikacja ogólna', 'Oznaczanie komponentów i sprzętu', 'Etykiety do lekkich zastosowań'],
}

// ---------------------------------------------------------------------------
// PermaShield — winyl B-2595 z laminatem poliestrowym (cps-4683136)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, laminat]
const PERMASHIELD_2595: [string, string, string, string, string][] = [
  ['J40PSL-260-2595', '175622', '55,12 × 85,09 mm, 340 szt.', '55,12 × 85,09 mm, 340 szt.', '67,82 × 97,79 mm'],
  ['J40PSL-261-2595', '175623', '74,93 × 109,98 mm, 270 szt.', '74,93 × 109,98 mm, 270 szt.', '87,63 × 122,68 mm'],
  ['J40PSL-262-2595', '175624', '104,9 × 154,94 mm, 200 szt.', '104,9 × 154,94 mm, 200 szt.', '117,6 × 167,64 mm'],
  ['J40PSL-267-2595', '175625', '154,94 × 210,82 mm, 120 szt.', '154,94 × 210,82 mm, 120 szt.', '167,64 × 223,52 mm'],
]

export const bradyJ4000PermaShield2595: Product = {
  ...wspolneJ4000,
  id: 'brady-j40psl-260-2595',
  slug: 'brady-j40psl-260-2595',
  name: 'Etykiety winylowe PermaShield z laminatem Brady B-2595 do drukarki J4000',
  seoTitle: 'Brady PermaShield B-2595 — winyl z laminatem do drukarki J4000',
  seoDescription: 'Etykiety Brady PermaShield z laminatem poliestrowym do Brady J4000 (BradyJet): odporne na rozpuszczalniki, UV i zmywanie. PN: J40PSL-260-2595, J40PSL-262-2595.',
  shortDescription: 'Brady PermaShield to zestaw białej etykiety winylowej i przezroczystego laminatu poliestrowego, w czterech rozmiarach od 55,12 × 85,09 do 154,94 × 210,82 mm. Do drukarki Brady J4000.',
  description: 'PermaShield składa się z dwóch warstw: białej etykiety winylowej i dopasowanego, przezroczystego laminatu poliestrowego. Etykietę drukuje się w J4000, nakleja na powierzchnię i przykrywa laminatem. Powłoka wierzchnia wzmacnia kolory i utrzymuje czytelność nadruku. Całość chroni wydruk przed rozpuszczalnikami, chemikaliami, pogodą i zmywaniem. Zestawy stosuje się w zakładach spożywczych, do znaków bezpieczeństwa, oznaczania rur, zaworów i instalacji elektrycznych oraz do zdjęć na kłódkach lockout.\n\nDo wyboru są cztery etykiety. Najmniejsza etykieta mierzy 55,12 × 85,09 mm; zestaw liczy 340 sztuk. Największa mierzy 154,94 × 210,82 mm; w zestawie jest 120 sztuk. Pośrednie rozmiary to: 74,93 × 109,98 mm; 104,9 × 154,94 mm. Laminat jest większy od etykiety; dla najmniejszej wynosi 67,82 × 97,79 mm. Układ Smart Cell informuje drukarkę o rolce.\n\nZestaw ma 0,237 mm grubości. Etykiety przykleja się od −18 °C, także na powierzchnie chropowate i teksturowane. Dolna granica pracy wynosi −40 °C, górna 60 °C. Odporność obejmuje ścieranie, słońce i UV, blaknięcie, częste czyszczenie oraz zmywanie.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-permashield-vinyl-overlaminate-cps-4683136',
  images: [
    '/images/products/brady/j40psl-260-2595.png',
    '/images/products/brady/j40psl-262-2595.png',
    '/images/products/brady/j40psl-262-2595-etykieta.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40PSL-260-2595 z białymi etykietami PermaShield o wymiarach 55,12 × 85,09 mm i przezroczystym laminatem',
    'Rolka Brady J40PSL-262-2595 z białymi etykietami PermaShield o wymiarach 104,9 × 154,94 mm na przezroczystym podkładzie',
    'Biała etykieta Brady J40PSL-262-2595 o wymiarach 104,9 × 154,94 mm na arkuszu z przezroczystym laminatem',
  ],
  specifications: [
    { name: 'Typ', value: 'Zestawy etykiet wykrawanych z dopasowanym laminatem' },
    { name: 'Materiał', value: 'PermaShield: winyl B-2595 z laminatem poliestrowym B-966' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego z laminatem poliestrowym' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,237 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'rozpuszczalniki, chemikalia, UV, warunki atmosferyczne, zmywanie, ścieranie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J40PSL-260-2595: 55,12 × 85,09 mm; J40PSL-261-2595: 74,93 × 109,98 mm; J40PSL-262-2595: 104,9 × 154,94 mm; J40PSL-267-2595: 154,94 × 210,82 mm' },
    { name: 'Liczba sztuk w zestawie', value: 'J40PSL-260-2595: 340; J40PSL-261-2595: 270; J40PSL-262-2595: 200; J40PSL-267-2595: 120' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_2595.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_2595.map(([pn, , nazwa, rozmiar, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield z laminatem ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Laminat: laminat },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk w zestawie.\n\nEtykiety mają od 55,12 × 85,09 do 154,94 × 210,82 mm, a zestawy liczą od 120 do 340 sztuk.',
    Laminat: 'Wymiary przezroczystej nakładki poliestrowej, którą przykrywa się naklejoną etykietę.\n\nNakładki mają od 67,82 × 97,79 do 167,64 × 223,52 mm i przewyższają etykietę z każdej strony.',
  },
  faq: [
    { question: 'Przed czym chroni laminat w zestawie PermaShield?', answer: 'Laminat poliestrowy wraz z etykietą chroni wydruk przed rozpuszczalnikami, chemikaliami, słońcem i UV oraz zmywaniem. Zestaw odpiera też ścieranie i częste czyszczenie.' },
    { question: 'Czy etykiety PermaShield przylegają do powierzchni chropowatych?', answer: 'Tak. Klej akrylowy jest przeznaczony do powierzchni gładkich oraz chropowatych i teksturowanych. Etykietę można naklejać od −18 °C.' },
    { question: 'Jakie rozmiary zestawów PermaShield są dostępne?', answer: 'Cztery, od 55,12 × 85,09 do 154,94 × 210,82 mm. Zestawy drukuje [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Zakłady spożywcze i napojowe', 'Znaki bezpieczeństwa, rury, zawory i instalacje elektryczne', 'Zdjęcia na kłódkach lockout'],
}

// ---------------------------------------------------------------------------
// ToughWash B-2855 (cps-5393355) — etykiety odporne na zmywanie
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const TOUGHWASH_2855: [string, string, string, string, string][] = [
  ['J40-412-2855', '181600', '74,93 × 36,83 mm, 750 szt.', '74,93 × 36,83 mm, 750 szt.', 'Wykrawane, prostokąt'],
  ['J40-413-2855', '181601', '100,33 × 62,23 mm, 500 szt.', '100,33 × 62,23 mm, 500 szt.', 'Wykrawane, prostokąt'],
  ['J40-25-2855', '176538', '101,6 × 152,4 mm, 200 szt.', '101,6 × 152,4 mm, 200 szt.', 'Wykrawane, prostokąt'],
  ['J40C-1125-2855', '176535', 'taśma ciągła 28,58 mm × 30,48 m', 'ciągła 28,58 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-2250-2855', '176536', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-4000-2855', '176537', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-4000-2855-S', '181592', 'krótka taśma ciągła 101,6 mm × 15,24 m', 'ciągła 101,6 mm × 15,24 m', 'Taśma ciągła'],
  ['J40C-6000-2855', '179196', 'taśma ciągła 152,4 mm × 30,48 m', 'ciągła 152,4 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-7000-2855', '179197', 'taśma ciągła 177,8 mm × 30,48 m', 'ciągła 177,8 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-8000-2855', '179198', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000ToughWash2855: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-25-2855',
  slug: 'brady-j40-25-2855',
  name: 'Etykiety odporne na zmywanie Brady ToughWash B-2855 do drukarki J4000',
  seoTitle: 'Brady ToughWash B-2855 — etykiety odporne na zmywanie do J4000',
  seoDescription: 'Etykiety Brady ToughWash B-2855 do Brady J4000 (BradyJet): poliester odporny na zmywanie i chemikalia. PN: J40-25-2855, J40-413-2855, J40C-4000-2855.',
  shortDescription: 'Brady ToughWash B-2855 to matowe etykiety poliestrowe odporne na zmywanie wodą pod ciśnieniem i chemikalia, w trzech rozmiarach wykrawanych i siedmiu taśmach ciągłych. Do drukarki Brady J4000.',
  description: 'ToughWash B-2855 to biały, matowy poliester do druku atramentowego, opracowany dla miejsc myjących powierzchnie strumieniem wody. Zarówno etykieta, jak i tusz drukarki J4000 wytrzymują wodę pod wysokim ciśnieniem i o podwyższonej temperaturze, szorowanie oraz chemikalia. Wzmocniona powłoka chroni tekst i grafikę przed rozmazaniem. Etykiety trafiają do zakładów spożywczych i napojowych, na maszyny i sprzęt, do oznaczeń konserwacyjnych, tagów kontrolnych oraz kodów kreskowych.\n\nWykrawane etykiety mieszczą się w trzech formatach. Rolka 750 sztuk niesie etykiety 74,93 × 36,83 mm, rolka 500 sztuk etykiety 100,33 × 62,23 mm, a rolka 200 sztuk największe, 101,6 × 152,4 mm. Taśm ciągłych jest siedem. Sześć liczy po 30,48 m i ma szerokość od 28,58 mm aż do 203,2 mm, a siódma, szeroka na 101,6 mm, mieści 15,24 m. Dane rolki odczytuje układ Smart Cell.\n\nMateriał ma 0,22 mm grubości, a jego klej akrylowy przylega do powierzchni gładkich. Przykleja się go od 4 °C. Gotowa etykieta pracuje, gdy temperatura mieści się między −40 a 60 °C. Druk w kolorze pozwala przygotować nagłówki ANSI i OSHA w wielu językach, bez magazynowania gotowych nadruków.',
  sameAs: 'https://www.brady.eu/labels/toughwash-washdown-resistant-labels-for-j4000-printer-cps-5393355',
  images: [
    '/images/products/brady/j40-413-2855.png',
    '/images/products/brady/j40-412-2855.png',
    '/images/products/brady/j40c-4000-2855-s.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-413-2855 z białymi etykietami ToughWash o wymiarach 100,33 × 62,23 mm',
    'Rolka Brady J40-412-2855 z białymi etykietami ToughWash o wymiarach 74,93 × 36,83 mm',
    'Rolka Brady J40C-4000-2855-S z krótką białą taśmą ciągłą ToughWash o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40- i taśmy ciągłej J40C- do druku atramentowego' },
    { name: 'Materiał', value: 'ToughWash B-2855' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,22 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Odporność', value: 'zmywanie wodą pod ciśnieniem, ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J40-412-2855: 74,93 × 36,83 mm; J40-413-2855: 100,33 × 62,23 mm; J40-25-2855: 101,6 × 152,4 mm' },
    { name: 'Liczba sztuk na rolce', value: 'J40-412-2855: 750; J40-413-2855: 500; J40-25-2855: 200' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 / 152,4 / 177,8 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m; J40C-4000-2855-S: 15,24 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: TOUGHWASH_2855.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TOUGHWASH_2855.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety ToughWash ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 74,93 × 36,83 do 101,6 × 152,4 mm, a taśmy od 28,58 do 203,2 mm szerokości.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśma ciągła nie ma podziału i jest cięta po wydruku na długość projektu.',
  },
  faq: [
    { question: 'Czy etykiety ToughWash B-2855 znoszą zmywanie wodą pod ciśnieniem?', answer: 'Tak. Etykieta i tusz drukarki J4000 znoszą wodę o wysokim ciśnieniu i temperaturze, szorowanie oraz chemikalia.' },
    { question: 'Od jakiej temperatury można naklejać etykiety B-2855?', answer: 'Od 4 °C. Gotowa etykieta pracuje w zakresie od −40 do 60 °C.' },
    { question: 'Jakie taśmy ciągłe ToughWash są dostępne?', answer: 'Siedem taśm: sześć po 30,48 m i jedna krótka, 15,24 m. Szerokości wynoszą od 28,58 do 203,2 mm. Materiał drukuje [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Zakłady spożywcze i napojowe', 'Oznaczenia maszyn, sprzętu i konserwacji', 'Nagłówki ANSI i OSHA oraz kody kreskowe'],
}

// ---------------------------------------------------------------------------
// Zestawy etykiet winylowych B-2595 z laminatem (cps-4574820)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar etykiety w nazwie, rozmiar w tabeli, laminat]
const ZESTAWY_2595_KT: [string, string, string, string, string][] = [
  ['J50-260-2595-KT', '175452', '55,12 × 85,09 mm, 340 szt.', '55,12 × 85,09 mm, 340 szt.', '61,47 × 91,44 mm'],
  ['J50-261-2595-KT', '175454', '74,93 × 109,98 mm, 270 szt.', '74,93 × 109,98 mm, 270 szt.', '81,28 × 116,33 mm'],
  ['J50-262-2595-KT', '175456', '104,9 × 154,94 mm, 200 szt.', '104,9 × 154,94 mm, 200 szt.', '111,25 × 161,29 mm'],
  ['J50-267-2595-KT', '175460', '154,94 × 210,82 mm, 120 szt.', '154,94 × 210,82 mm, 120 szt.', '161,29 × 217,17 mm'],
  ['J50-265-2595-KT', '175458', '177,8 × 254 mm, 100 szt.', '177,8 × 254 mm, 100 szt.', '184,15 × 260,35 mm'],
]

export const bradyJ4000ZestawyLaminat2595: Product = {
  ...wspolneJ4000,
  id: 'brady-j50-260-2595-kt',
  slug: 'brady-j50-260-2595-kt',
  name: 'Zestawy etykiet winylowych z laminatem Brady B-2595 do drukarki J4000',
  seoTitle: 'Brady B-2595 — etykiety winylowe z laminatem do drukarki J4000',
  seoDescription: 'Zestawy Brady B-2595: etykiety winylowe z laminatem akrylowym do Brady J4000 (BradyJet), pięć rozmiarów. PN: J50-260-2595-KT, J50-262-2595-KT.',
  shortDescription: 'Brady B-2595 w zestawie to matowe etykiety winylowe z dopasowanym laminatem akrylowym, w pięciu rozmiarach od 55,12 × 85,09 do 177,8 × 254 mm. Do drukarki Brady J4000.',
  description: 'Każdy zestaw łączy białą etykietę winylową B-2595 z laminatem akrylowym przeciętym na ten sam rozmiar. Etykietę drukuje się w J4000, odkleja od podkładu i nakleja na powierzchnię. Potem przykrywa się ją laminatem. Powłoka wierzchnia etykiety wzmacnia kolory i chroni wydruk przed rozmazaniem. Laminat podnosi odporność na promieniowanie UV i ścieranie, a na zewnątrz zapewnia do 10 lat trwałości. Zestawy stosuje się do znaków bezpieczeństwa, oznaczania rur i zaworów, wdrażania 5S oraz procedur lockout tagout.\n\nDostępnych jest pięć wielkości. Zestaw z najmniejszą etykietą, 55,12 × 85,09 mm, zawiera 340 sztuk, a ten z największą, 177,8 × 254 mm, sto sztuk. Laminat przewyższa etykietę o 6 mm w każdym wymiarze. Nadmiar ułatwia równe położenie nakładki i całkowicie zakrywa brzeg wydruku. Informacje o rolce drukarka odczytuje z układu Smart Cell.\n\nWinylowa folia mierzy 0,135 mm, a klej akrylowy wiąże etykietę trwale. Przyklejać ją można, gdy powierzchnia ma co najmniej −18 °C. Po naklejeniu zestaw jest użytkowany od −40 aż do 60 °C.',
  sameAs: 'https://www.brady.eu/labels/vinyl-label-overlaminate-kit-for-j4000-j5000-printers-cps-4574820',
  images: [
    '/images/products/brady/j50-260-2595-kt.png',
    '/images/products/brady/j50-267-2595-kt.png',
    '/images/products/brady/j50-265-2595-kt.png',
  ],
  imageDescriptions: [
    'Rolka białych etykiet winylowych Brady J50-260-2595-KT o wymiarach 55,12 × 85,09 mm obok rolki przezroczystego laminatu',
    'Rolka Brady J50-267-2595-KT z etykietami 154,94 × 210,82 mm i rolka dopasowanego laminatu z wysuniętymi paskami',
    'Rolka Brady J50-265-2595-KT z dużymi etykietami 177,8 × 254 mm i rolka laminatu z wysuniętymi paskami',
  ],
  specifications: [
    { name: 'Typ', value: 'Zestawy etykiet wykrawanych z dopasowanym laminatem' },
    { name: 'Materiał', value: 'B-2595' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego z laminatem akrylowym' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,135 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'UV, ścieranie (laminat)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J50-260-2595-KT: 55,12 × 85,09 mm; J50-261-2595-KT: 74,93 × 109,98 mm; J50-262-2595-KT: 104,9 × 154,94 mm; J50-267-2595-KT: 154,94 × 210,82 mm; J50-265-2595-KT: 177,8 × 254 mm' },
    { name: 'Liczba etykiet w zestawie', value: 'J50-260-2595-KT: 340; J50-261-2595-KT: 270; J50-262-2595-KT: 200; J50-267-2595-KT: 120; J50-265-2595-KT: 100' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000' },
    { name: 'Numery artykułów Brady', value: ZESTAWY_2595_KT.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZESTAWY_2595_KT.map(([pn, , nazwa, rozmiar, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — zestaw etykiet B-2595 z laminatem ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Laminat: laminat },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet w zestawie.\n\nZestawy mają etykiety od 55,12 × 85,09 do 177,8 × 254 mm, w liczbie od 100 do 340 sztuk.',
    Laminat: 'Wymiary nakładki z przezroczystego laminatu przypisanej do etykiety w zestawie.\n\nLaminat jest większy od etykiety o 6 mm, więc zakrywa ją z zapasem na brzegach.',
  },
  faq: [
    { question: 'Jak zakłada się laminat na etykietę z zestawu?', answer: 'Etykietę drukuje się i nakleja na powierzchnię. Dopiero potem na wydruk kładzie się dopasowany laminat. Laminat jest o 6 mm większy, więc łatwiej go ułożyć i w pełni zakrywa etykietę.' },
    { question: 'Jaką trwałość na zewnątrz daje laminat akrylowy?', answer: 'Do 10 lat. Laminat zwiększa odporność wydruku na promieniowanie UV i ścieranie.' },
    { question: 'Jakie drukarki drukują etykiety z zestawów J50-…-KT?', answer: 'Zestawy drukuje się na drukarkach J4000 i J5000, między innymi na [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczanie rur', 'Etykiety 5S i lockout tagout', 'Oznaczenia używane na zewnątrz budynków'],
}

// ---------------------------------------------------------------------------
// Zawieszki poliestrowe B-2551 (pid-j40-385-2551; J50-255-2551 pominięty — zgodność tylko z J5000)
// ---------------------------------------------------------------------------

export const bradyJ4000Zawieszki2551: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-385-2551',
  slug: 'brady-j40-385-2551',
  name: 'Zawieszki poliestrowe Brady B-2551 do drukarki J4000',
  seoTitle: 'Brady B-2551 — zawieszki poliestrowe do drukarki J4000',
  seoDescription: 'Zawieszki Brady B-2551 do Brady J4000 (BradyJet): gruby poliester z otworem, 82,55 × 146,05 mm, 100 szt., zgodne z OSHA 1910.145(f). PN: J40-385-2551.',
  shortDescription: 'Brady J40-385-2551 to białe, matowe zawieszki z grubego poliestru z otworem, o wymiarach 82,55 × 146,05 mm, w opakowaniu po 100 sztuk. Do drukarki Brady J4000.',
  description: 'Zawieszki B-2551 wykonano z grubego poliestru z naklejoną warstwą winylu, która przyjmuje tusz. Powierzchnia jest biała i matowa. Każda zawieszka ma wykrojony otwór oraz ścięte rogi. Mikroperforacja między sztukami pozwala je oddzielić bez postrzępionych krawędzi. Zawieszki służą do ostrzegania o zagrożeniach, znakowania w ramach zapobiegania wypadkom, oznaczania przestrzeni zamkniętych oraz urządzeń objętych procedurą lockout tagout. Pasują także do ogólnego znakowania obiektów, magazynów i stanowisk 5S.\n\nZawieszka mierzy 82,55 mm szerokości i 146,05 mm wysokości, a pole nadruku zajmuje 76,2 × 120,65 mm. Otwór o średnicy 15,88 mm znajduje się w górnej części. Opakowanie liczy 100 sztuk. Zawieszki oznaczone J40-385-2551 pasują wyłącznie do drukarki J4000.\n\nMateriał ma 0,386 mm grubości i odpiera ścieranie. Zawieszka zachowuje właściwości między −40 °C i 60 °C. Wydrukowanie hasła ostrzegawczego i głównego komunikatu daje zawieszkę zgodną z normą OSHA 1910.145(f). Drukarka J4000 pozwala przygotować ostrzeżenia w kolorze na miejscu, w chwili wykrycia zagrożenia. Wydrukowane zawieszki są od razu gotowe do użycia, bez dodatkowego wykrawania.',
  sameAs: 'https://www.brady.eu/labels/vinyl-tags-for-j4000-printer-pid-j40-385-2551',
  images: [
    '/images/products/brady/j40-385-2551.png',
    '/images/products/brady/j40-385-2551-pasek.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-385-2551 z wysuniętym paskiem białych zawieszek poliestrowych z otworem, o wymiarach 82,55 × 146,05 mm',
    'Pasek dwóch białych zawieszek Brady J40-385-2551 z otworem i ściętymi rogami, połączonych mikroperforacją',
  ],
  specifications: [
    { name: 'Typ', value: 'Zawieszki z otworem do druku atramentowego' },
    { name: 'Materiał', value: 'B-2551' },
    { name: 'Typ materiału', value: 'gruby poliester z winylem do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,386 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Odporność', value: 'ścieranie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zawieszki', value: '82,55 × 146,05 mm' },
    { name: 'Pole nadruku', value: '76,2 × 120,65 mm' },
    { name: 'Średnica otworu', value: '15,88 mm' },
    { name: 'Liczba sztuk w opakowaniu', value: '100' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po wydrukowaniu hasła ostrzegawczego i głównego komunikatu' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Part Number', value: 'J40-385-2551' },
    { name: 'Numer artykułu Brady', value: '170396' },
  ],
  faq: [
    { question: 'Czy zawieszki B-2551 spełniają wymagania OSHA?', answer: 'Tak, w zakresie normy OSHA 1910.145(f). Warunkiem jest wydrukowanie wymaganego hasła ostrzegawczego i głównego komunikatu.' },
    { question: 'Jakie wymiary mają zawieszki B-2551?', answer: 'Zawieszka ma 82,55 × 146,05 mm i otwór o średnicy 15,88 mm. Pole nadruku wynosi 76,2 × 120,65 mm.' },
    { question: 'Do jakiej drukarki pasują zawieszki J40-385-2551?', answer: 'Do drukarki [Brady J4000](/produkt/brady-j4000). Druk wykonuje się tuszem tej drukarki, bez taśmy barwiącej.' },
  ],
  applications: ['Ostrzeżenia o zagrożeniach i zapobieganie wypadkom', 'Oznaczanie przestrzeni zamkniętych', 'Procedury lockout tagout'],
}


export const bradyJ4000WinylPapier: Product[] = [
  bradyJ4000Winyl2595,
  bradyJ4000Wielokrotne2581,
  bradyJ4000Papier2550,
  bradyJ4000PermaShield2595,
  bradyJ4000ToughWash2855,
  bradyJ4000ZestawyLaminat2595,
  bradyJ4000Zawieszki2551,
]

export const bradyJ4000WinylPapierSekcje: Record<string, 'ogolne' | 'lab' | 'laminaty' | 'zawieszki'> = {
  'brady-j40-179-2595': 'ogolne',
  'brady-j50c-4000-2581': 'ogolne',
  'brady-j40-25-2550': 'ogolne',
  'brady-j40psl-260-2595': 'ogolne',
  'brady-j40-25-2855': 'ogolne',
  'brady-j50-260-2595-kt': 'laminaty',
  'brady-j40-385-2551': 'zawieszki',
}
