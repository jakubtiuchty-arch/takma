import type { Product } from './products'
import { wspolneJ4000 } from './brady-j4000-wspolne'

// Etykiety poliestrowe i polipropylenowe Brady do kolorowej drukarki atramentowej BradyJet J4000: poliester B-2569 i B-2475,
// PermaShield z laminatem, etykiety morskie BS 5609, poliester ekologiczny B-2618, polipropylen B-7425J oraz laminat akrylowy
// B-910 i zestawy etykiet z laminatem. 14.11.2026.

// ---------------------------------------------------------------------------
// Poliester B-2569: etykiety wykrawane J50- (cps-3069399) i taśmy ciągłe J50C- (cps-3069397)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const POLIESTER_2569: [string, string, string, string, string][] = [
  ['J50-260-2569', '148662', '55,12 × 85,09 mm, 340 szt.', '55,12 × 85,09 mm, 340 szt.', 'Wykrawane'],
  ['J50-262-2569', '148654', '104,9 × 154,94 mm, 200 szt.', '104,9 × 154,94 mm, 200 szt.', 'Wykrawane'],
  ['J50-267-2569', '148668', '154,94 × 210,82 mm, 120 szt.', '154,94 × 210,82 mm, 120 szt.', 'Wykrawane'],
  ['J50-265-2569', '148667', '177,8 × 254 mm, 100 szt.', '177,8 × 254 mm, 100 szt.', 'Wykrawane'],
  ['J50C-2250-2569', '148665', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-4000-2569', '148658', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-6000-2569', '148652', 'taśma ciągła 152,4 mm × 30,48 m', 'ciągła 152,4 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-8000-2569', '148655', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000Poliester2569: Product = {
  ...wspolneJ4000,
  id: 'brady-j50-262-2569',
  slug: 'brady-j50-262-2569',
  name: 'Etykiety poliestrowe Brady B-2569 do drukarki J4000',
  seoTitle: 'Brady B-2569 — etykiety poliestrowe do drukarki J4000',
  seoDescription: 'Etykiety poliestrowe Brady B-2569 do Brady J4000 i J5000 (BradyJet): matowe, 4 rozmiary i 4 taśmy ciągłe. PN: J50-262-2569, J50-267-2569, J50C-4000-2569.',
  shortDescription: 'Brady B-2569 to matowy poliester do użytku wewnątrz pomieszczeń, w czterech rozmiarach wykrawanych i na czterech taśmach ciągłych. Do drukarki Brady J4000.',
  description: 'Etykiety B-2569 wykonano z białego poliestru, który przeznaczono do użytku wewnątrz pomieszczeń. Specjalna powłoka wierzchnia poprawia trwałość nadruku i nasycenie kolorów. Spód etykiety pokrywa trwały klej akrylowy, odpowiedni dla gładkich powierzchni. Takie etykiety trafiają na znaki bezpieczeństwa, oznaczenia 5S i magazynowe, znaczniki rur i zaworów oraz instalacje elektryczne.\n\nRolki z gotowymi etykietami występują w czterech rozmiarach, a na rolce mieści się 100, 120, 200 lub 340 sztuk. Wersje ciągłe są nawinięte na 30,48 m taśmy. Szerokość taśmy rośnie od 57,15 mm przez 101,6 i 152,4 do 203,2 mm. Wszystkie rolki pasują do drukarek J4000 oraz J5000.\n\nCienka folia (0,119 mm) przykleja się nawet w chłodnym miejscu, od −18 °C. Zakres temperatur pracy: −40…60 °C. Wydruk wytrzymuje kontakt z cieczami, alkoholem, chemikaliami, a także światło jarzeniowe i UV w halach. Powłoka chroni go przed rozmazaniem i trudnymi warunkami pracy. Kolorowe oznaczenia powstają na miejscu, z tuszu drukarki J4000, bez zamawiania gotowych nadruków.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-j5000-pre-cut-polyester-labels-cps-3069399',
  images: [
    '/images/products/brady/j50-262-2569.png',
    '/images/products/brady/j50c-4000-2569.png',
  ],
  imageDescriptions: [
    'Rolka Brady J50-262-2569 z białymi etykietami poliestrowymi o wymiarach 104,9 × 154,94 mm na gilzie 76,2 mm',
    'Rolka Brady J50C-4000-2569 z białą taśmą ciągłą z poliestru o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J50- i taśmy ciągłej J50C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2569' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,119 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ciecze, alkohol, chemikalia, światło jarzeniowe i UV (wewnątrz pomieszczeń)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 55,12 × 85,09 mm do 177,8 × 254 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '100–340, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '57,15 / 101,6 / 152,4 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000' },
    { name: 'Numery artykułów Brady', value: POLIESTER_2569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIESTER_2569.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety poliestrowe ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 55,12 × 85,09 mm, a najszersza taśma 203,2 mm.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśmę ciągłą obcina automatyczna obcinarka drukarki po wydruku.',
  },
  faq: [
    { question: 'Czy etykiety B-2569 nadają się do użytku na zewnątrz?', answer: 'Nie. B-2569 przeznaczono do pracy wewnątrz pomieszczeń. Do zastosowań na zewnątrz służą zestawy etykiet z laminatem.' },
    { question: 'Do jakich drukarek pasują rolki B-2569?', answer: 'Rolki pasują do drukarek BradyJet J4000 i J5000. Druk z użyciem tuszu drukarki umożliwia [Brady J4000](/produkt/brady-j4000).' },
    { question: 'Czym różni się etykieta wykrawana od taśmy ciągłej?', answer: 'Etykieta wykrawana ma stały rozmiar prostokąta. Taśma ciągła nie ma podziału, więc długość wydruku wynika z projektu.' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczenia 5S', 'Znaczniki rur i zaworów', 'Oznaczenia magazynowe i instalacji elektrycznych'],
}

// ---------------------------------------------------------------------------
// Poliester B-2475 (cps-4197972)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const POLIESTER_2475: [string, string, string, string, string][] = [
  ['J40-136-2475', '152802', '38,1 × 19,05 mm, 1000 szt.', '38,1 × 19,05 mm, 1000 szt.', 'Wykrawane'],
  ['J40-235-2475', '152803', '38,1 × 25,4 mm, 750 szt.', '38,1 × 25,4 mm, 750 szt.', 'Wykrawane'],
  ['J40-137-2475', '152804', '50,8 × 25,4 mm, 750 szt.', '50,8 × 25,4 mm, 750 szt.', 'Wykrawane'],
  ['J40-18-2475', '152805', '76,2 × 25,4 mm, 750 szt.', '76,2 × 25,4 mm, 750 szt.', 'Wykrawane'],
  ['J40-19-2475', '152806', '76,2 × 50,8 mm, 250 szt.', '76,2 × 50,8 mm, 250 szt.', 'Wykrawane'],
  ['J40-55-2475', '152807', '101,6 × 50,8 mm, 250 szt.', '101,6 × 50,8 mm, 250 szt.', 'Wykrawane'],
  ['J40-25-2475', '152808', '101,6 × 152,4 mm, 80 szt.', '101,6 × 152,4 mm, 80 szt.', 'Wykrawane'],
  ['J40C-1125-2475', '152809', 'taśma ciągła 28,58 mm × 30,48 m', 'ciągła 28,58 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-2250-2475', '152810', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-4000-2475', '152811', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-8000-2475', '152812', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000Poliester2475: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-19-2475',
  slug: 'brady-j40-19-2475',
  name: 'Etykiety poliestrowe z certyfikatem UL Brady B-2475 do drukarki J4000',
  seoTitle: 'Brady B-2475 — etykiety poliestrowe UL 969 do drukarki J4000',
  seoDescription: 'Etykiety poliestrowe Brady B-2475 zgodne z UL 969 do Brady J4000 (BradyJet): 7 rozmiarów i 4 taśmy ciągłe, matowe. PN: J40-19-2475, J40-55-2475, J40C-4000-2475.',
  shortDescription: 'Brady B-2475 to matowy biały poliester zgodny z normą UL 969, w siedmiu rozmiarach wykrawanych i na czterech taśmach ciągłych. Do drukarki Brady J4000.',
  description: 'Poliester B-2475 odpowiada normie UL 969 (znakowanie i etykietowanie). Jest matowy i biały, a przyjmuje tusz z drukarki J4000. Spód pokrywa trwały akryl, który najlepiej przylega do powierzchni płaskich i gładkich. Z etykiet korzysta się przy znakowaniu produktów z logo, w oznaczeniach RTK (Right to Know) i przy kodach kreskowych. Drukowanie na żądanie ogranicza zapasy, a pomyłkę w projekcie można poprawić od razu.\n\nW ofercie jest siedem prostokątnych etykiet wykrawanych. Rolka z najmniejszą etykietą (38,1 × 19,05 mm) zawiera tysiąc sztuk, a rolka z największą (101,6 × 152,4 mm) tylko 80. Cztery taśmy ciągłe, po 30,48 m każda, są dostępne w szerokościach od najwęższej (28,58 mm) po najszerszą (203,2 mm).\n\nGrubość folii to 0,119 mm. Etykietę przykleja się, gdy temperatura wynosi co najmniej −18 °C, a gotowe oznaczenie znosi zakres −40…60 °C. Wydruk nie ulega zniszczeniu pod wpływem tarcia, olejów, rozpuszczalników i chemikaliów. Kolor drukuje się na miejscu, dlatego czas oczekiwania na etykiety jest krótki, a linia produkcyjna nie stoi z braku oznaczeń.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-polyester-labels-cps-4197972',
  images: [
    '/images/products/brady/j40-19-2475.png',
    '/images/products/brady/j40-19-2475-pasek.png',
    '/images/products/brady/j40c-1125-2475.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-19-2475 z białymi etykietami poliestrowymi o wymiarach 76,2 × 50,8 mm',
    'Pasek białych etykiet poliestrowych Brady J40-19-2475 o wymiarach 76,2 × 50,8 mm',
    'Rolka Brady J40C-1125-2475 z białą taśmą ciągłą z poliestru o szerokości 28,58 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40- i taśmy ciągłej J40C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2475' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,119 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje, rozpuszczalniki' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 38,1 × 19,05 mm do 101,6 × 152,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '80–1000, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'UL 969' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: POLIESTER_2475.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIESTER_2475.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety poliestrowe UL ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nRolki z małymi etykietami liczą po 750 albo 1000 sztuk, a rolka z największą etykietą 80.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśma ciągła pozwala drukować etykiety o dowolnej długości w granicach szerokości rolki.',
  },
  faq: [
    { question: 'Jaką normę spełniają etykiety B-2475?', answer: 'Poliester B-2475 spełnia wymagania normy UL 969 dla znakowania i etykietowania.' },
    { question: 'Na jakich powierzchniach najlepiej trzymają się etykiety B-2475?', answer: 'Klej akrylowy najlepiej działa na powierzchniach płaskich i gładkich. Etykiety można naklejać w temperaturze od −18 °C.' },
    { question: 'Do czego służą etykiety RTK i kody kreskowe na materiale B-2475?', answer: 'Materiał nadaje się do etykiet produktowych, etykiet RTK (Right to Know) i kodów kreskowych. Etykiety drukuje się w [Brady J4000](/produkt/brady-j4000) w pełnym kolorze.' },
  ],
  applications: ['Etykiety produktowe z logo', 'Etykiety RTK i kody kreskowe', 'Znakowanie komponentów, sprzętu i urządzeń telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// PermaShield B-2569 z laminatem B-966 (cps-4683137)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta (szer. × wys.), sztuk na rolce, laminat (szer. × wys.)]
const PERMASHIELD_2569: [string, string, string, string, string][] = [
  ['J40PSL-260-2569', '175627', '55,12 × 85,09', '340', '67,82 × 97,79'],
  ['J40PSL-261-2569', '175628', '74,93 × 109,98', '270', '87,63 × 122,68'],
  ['J40PSL-262-2569', '175629', '104,9 × 154,94', '200', '117,6 × 167,64'],
  ['J40PSL-267-2569', '175630', '154,94 × 210,82', '120', '167,64 × 223,52'],
]

export const bradyJ4000PermaShield2569: Product = {
  ...wspolneJ4000,
  id: 'brady-j40psl-262-2569',
  slug: 'brady-j40psl-262-2569',
  name: 'Etykiety poliestrowe z laminatem Brady PermaShield B-2569 do drukarki J4000',
  seoTitle: 'Brady PermaShield B-2569 — etykiety z laminatem do J4000',
  seoDescription: 'Zestawy Brady PermaShield B-2569 do Brady J4000 (BradyJet): etykieta z poliestru i laminat B-966, 4 rozmiary. PN: J40PSL-260-2569, J40PSL-262-2569.',
  shortDescription: 'Brady PermaShield B-2569 to zestaw etykiety z białego poliestru i przezroczystego laminatu B-966, w czterech rozmiarach. Do drukarki Brady J4000.',
  description: 'PermaShield B-2569 to komplet z dwóch części: białej etykiety poliestrowej B-2569 i przezroczystego laminatu B-966, dobranego do jej rozmiaru. Wydrukowaną etykietę przykleja się do powierzchni gładkiej, a po tym nakłada laminat. Zewnętrzna warstwa osłania nadruk przed agresywnymi rozpuszczalnikami, pogodą oraz myciem w przetwórstwie żywności i napojów. Powłoka etykiety pogłębia kolory.\n\nEtykiety mają cztery rozmiary, a rolka mieści 120, 200, 270 albo 340 sztuk. Najdrobniejsza etykieta to 55,12 × 85,09 mm, największa — 154,94 × 210,82 mm. Każdy laminat ma o 12,7 mm więcej niż etykieta w szerokości i wysokości, dlatego zachodzi na jej krawędzie.\n\nGotowy zestaw ma 0,221 mm grubości. Temperatura naklejania zaczyna się od −18 °C, a użytkowania mieści się w przedziale −40…60 °C. Klej akrylowy dobrze trzyma na gładkich podłożach. Całość wytrzymuje tarcie, rozpuszczalniki, chemikalia, mycie i warunki zewnętrzne, dlatego nadaje się do znakowania w trudnych warunkach. Znaki bezpieczeństwa, oznaczenia 5S, znaczniki rur i oznaczenia magazynowe powstają z tuszu drukarki J4000, w pełnej gamie kolorów.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-permashield-polyester-overlaminate-cps-4683137',
  images: [
    '/images/products/brady/j40psl-262-2569.png',
    '/images/products/brady/j40psl-262-2569-pasek.png',
    '/images/products/brady/j40psl-261-2569.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40PSL-262-2569 z białymi etykietami PermaShield z laminatem, 104,9 × 154,94 mm',
    'Pasek białych etykiet PermaShield Brady J40PSL-262-2569 o wymiarach 104,9 × 154,94 mm z laminatem',
    'Rolka Brady J40PSL-261-2569 z białymi etykietami PermaShield z laminatem, 74,93 × 109,98 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40PSL- z dopasowanym laminatem' },
    { name: 'Materiał', value: 'PermaShield B-2569' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z laminatem z poliestru B-966' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,221 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki, chemikalia, mycie, warunki zewnętrzne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 55,12 × 85,09 mm do 154,94 × 210,82 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '120–340, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_2569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_2569.map(([pn, , etykieta, szt, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield z laminatem ${etykieta} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${etykieta} mm, ${szt} szt.`, Laminat: `${laminat} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 55,12 × 85,09 mm i 340 sztuk na rolce, a największa 154,94 × 210,82 mm i 120 sztuk.',
    Laminat: 'Wymiary przezroczystego laminatu z poliestru B-966, który przykrywa naklejoną etykietę.\n\nLaminat jest większy od etykiety o 12,7 mm w szerokości i w wysokości.',
  },
  faq: [
    { question: 'Z czego składa się zestaw PermaShield B-2569?', answer: 'Z etykiety z białego poliestru B-2569 i dopasowanego laminatu z przezroczystego poliestru B-966. Etykietę drukuje się, nakleja, a potem przykrywa laminatem.' },
    { question: 'Przed czym chroni laminat PermaShield?', answer: 'Chroni nadruk przed silnymi rozpuszczalnikami, czynnikami zewnętrznymi i myciem w zakładach spożywczych oraz napojowych.' },
    { question: 'Jaka drukarka drukuje etykiety PermaShield?', answer: 'Etykiety przeznaczono do drukarki [Brady J4000](/produkt/brady-j4000). Wydruk powstaje z jej tuszu, a laminat nakleja się ręcznie.' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczenia 5S', 'Znaczniki rur i zaworów', 'Oznaczenia w zakładach spożywczych i napojowych'],
}

// ---------------------------------------------------------------------------
// PermaShield matowy B-2475 z laminatem B-966 (cps-4683138)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta (szer. × wys.), sztuk na rolce, laminat (szer. × wys.)]
const PERMASHIELD_2475: [string, string, string, string, string][] = [
  ['J40PSL-136-2475', '175632', '38,1 × 19,05', '1000', '50,8 × 31,75'],
  ['J40PSL-235-2475', '175633', '38,1 × 25,4', '750', '50,8 × 38,1'],
  ['J40PSL-137-2475', '175634', '50,8 × 25,4', '750', '63,5 × 38,1'],
  ['J40PSL-18-2475', '175635', '76,2 × 25,4', '750', '88,9 × 38,1'],
  ['J40PSL-19-2475', '175636', '76,2 × 50,8', '250', '88,9 × 63,5'],
  ['J40PSL-55-2475', '175637', '101,6 × 50,8', '250', '114,3 × 63,5'],
  ['J40PSL-25-2475', '175638', '101,6 × 152,4', '80', '114,3 × 165,1'],
]

export const bradyJ4000PermaShield2475: Product = {
  ...wspolneJ4000,
  id: 'brady-j40psl-19-2475',
  slug: 'brady-j40psl-19-2475',
  name: 'Etykiety poliestrowe z laminatem Brady PermaShield B-2475 do drukarki J4000',
  seoTitle: 'Brady PermaShield B-2475 — etykiety z laminatem do J4000',
  seoDescription: 'Zestawy Brady PermaShield B-2475 do Brady J4000 (BradyJet): etykieta z poliestru i laminat B-966, 7 rozmiarów. PN: J40PSL-19-2475, J40PSL-55-2475.',
  shortDescription: 'Brady PermaShield B-2475 to zestaw etykiety z matowego poliestru i przezroczystego laminatu B-966, w siedmiu rozmiarach. Do drukarki Brady J4000.',
  description: 'W jednym opakowaniu PermaShield B-2475 są dwa elementy: etykieta z matowego poliestru i dopasowany laminat z przezroczystego poliestru B-966. Etykieta ma trwały klej akrylowy. Po wydruku przykleja się ją do gładkiej powierzchni i zakrywa laminatem. Laminat osłania nadruk przed licznymi silnymi rozpuszczalnikami i nadaje mu połysk. Zestawy oznaczają komponenty, sprzęt i urządzenia telekomunikacyjne, a także nadają się do kodów kreskowych i ogólnych znaków bezpieczeństwa.\n\nRolki zawierają od 80 do 1000 etykiet, zależnie od rozmiaru; w ofercie jest ich siedem. Rozmiar największy ma 101,6 × 152,4 mm, najmniejszy zaś 38,1 × 19,05 mm; pięć pozostałych leży pomiędzy nimi. Laminat każdego zestawu przekracza wymiary etykiety o 12,7 mm, np. do etykiety 76,2 × 50,8 mm pasuje laminat 88,9 × 63,5 mm.\n\nGrubość zestawu to 0,221 mm. Mróz −40 °C i ciepło 60 °C nie szkodzą etykiecie, a do naklejania wystarcza temperatura −18 °C. Odporność obejmuje tarcie, oleje, rozpuszczalniki i chemikalia. Powłoka etykiety ożywia barwy, które drukarka J4000 nanosi w pełnym kolorze.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-permashield-matte-polyester-overlaminate-cps-4683138',
  images: [
    '/images/products/brady/j40psl-19-2475.png',
    '/images/products/brady/j40psl-19-2475-pasek.png',
    '/images/products/brady/j40psl-136-2475.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40PSL-19-2475 z białymi etykietami PermaShield z laminatem, 76,2 × 50,8 mm',
    'Pasek białych etykiet PermaShield Brady J40PSL-19-2475 o wymiarach 76,2 × 50,8 mm',
    'Rolka Brady J40PSL-136-2475 z białymi etykietami PermaShield z laminatem, 38,1 × 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40PSL- z dopasowanym laminatem' },
    { name: 'Materiał', value: 'PermaShield B-2475' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z laminatem z poliestru B-966' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,221 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, oleje, rozpuszczalniki, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 38,1 × 19,05 mm do 101,6 × 152,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '80–1000, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_2475.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_2475.map(([pn, , etykieta, szt, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield z laminatem ${etykieta} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${etykieta} mm, ${szt} szt.`, Laminat: `${laminat} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nRolki z najmniejszymi etykietami liczą 1000 sztuk, a rolka z największą 80.',
    Laminat: 'Wymiary przezroczystego laminatu z poliestru B-966, który przykrywa naklejoną etykietę.\n\nLaminat jest większy od etykiety o 12,7 mm w szerokości i w wysokości.',
  },
  faq: [
    { question: 'Co zawiera opakowanie PermaShield B-2475?', answer: 'Drukowaną etykietę z matowego poliestru oraz dopasowany przezroczysty laminat poliestrowy B-966.' },
    { question: 'Jak używa się zestawu PermaShield?', answer: 'Etykietę drukuje się, przykleja do powierzchni, a potem przykrywa dopasowanym laminatem. Laminat chroni nadruk przed wieloma silnymi rozpuszczalnikami.' },
    { question: 'Jaka drukarka drukuje zestawy PermaShield B-2475?', answer: 'Zestawy drukuje się w [Brady J4000](/produkt/brady-j4000), tuszem tej drukarki.' },
  ],
  applications: ['Znakowanie komponentów, sprzętu i urządzeń telekomunikacyjnych', 'Etykiety z kodami kreskowymi', 'Ogólne znaki bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// Etykiety morskie BS 5609, polipropylen B-2585 (cps-4198074)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const MORSKIE_2585: [string, string, string, string, string][] = [
  ['J50-261-2585', '150754', '74,93 × 109,98 mm, 270 szt.', '74,93 × 109,98 mm, 270 szt.', 'Wykrawane'],
  ['J50-267-2585', '150756', '154,94 × 210,82 mm, 120 szt.', '154,94 × 210,82 mm, 120 szt.', 'Wykrawane'],
  ['J50-268-2585', '150757', '203,2 × 279,4 mm, 100 szt.', '203,2 × 279,4 mm, 100 szt.', 'Wykrawane'],
  ['J50C-2250-2585', '150760', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-4000-2585', '150761', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-6000-2585', '150762', 'taśma ciągła 152,4 mm × 30,48 m', 'ciągła 152,4 mm × 30,48 m', 'Taśma ciągła'],
  ['J50C-8000-2585', '150763', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000Morskie2585: Product = {
  ...wspolneJ4000,
  id: 'brady-j50-261-2585',
  slug: 'brady-j50-261-2585',
  name: 'Etykiety morskie BS 5609 Brady B-2585 do drukarki J4000',
  seoTitle: 'Brady B-2585 — etykiety morskie BS 5609 do drukarki J4000',
  seoDescription: 'Etykiety morskie Brady B-2585 z polipropylenu, zgodne z BS 5609, do Brady J4000 i J5000 (BradyJet). PN: J50-261-2585, J50-267-2585, J50C-4000-2585.',
  shortDescription: 'Brady B-2585 to matowe etykiety polipropylenowe zgodne z normą BS 5609, w trzech rozmiarach wykrawanych i na czterech taśmach ciągłych. Do drukarki Brady J4000.',
  description: 'B-2585 to biały polipropylen o matowej powierzchni, zgodny z sekcjami 2 i 3 normy BS 5609:1986, czyli z wymaganiami dla oznaczeń w środowisku morskim. Dzięki temu etykieta zostaje na miejscu i da się ją odczytać także na morzu. Powierzchnie gładkie to właściwe podłoże dla jego trwałego kleju akrylowego. Etykiety służą do znakowania ogólnego, komunikacji o zagrożeniach i oznaczeń bezpieczeństwa.\n\nGotowe etykiety mają trzy rozmiary. Rolka zawiera 270 sztuk 74,93 × 109,98 mm, 120 sztuk 154,94 × 210,82 mm albo 100 sztuk 203,2 × 279,4 mm. Dochodzą do nich cztery wersje ciągłe, nawinięte na 30,48 m, od wąskiej 57,15 mm po szerszą, 203,2 mm. Rolki są zgodne z J4000 i J5000.\n\nFolia ma 0,224 mm grubości, a przykleja się ją przy temperaturze od −12 °C. Zakres pracy sięga od −40 do 60 °C. Polipropylen jest odporny na korozję, wilgoć, promieniowanie UV, pogodę, ścieranie i chemikalia. Tusz drukarki J4000 daje barwny nadruk o wysokiej rozdzielczości.',
  sameAs: 'https://www.brady.eu/labels/bradyjet-j4000-j5000-bs-5609-marine-labels-cps-4198074',
  images: [
    '/images/products/brady/j50-261-2585.png',
    '/images/products/brady/j50-261-2585-pasek.png',
    '/images/products/brady/j50c-2250-2585.png',
  ],
  imageDescriptions: [
    'Rolka Brady J50-261-2585 z białymi etykietami morskimi o wymiarach 74,93 × 109,98 mm',
    'Pasek białych etykiet morskich Brady J50-261-2585 o wymiarach 74,93 × 109,98 mm',
    'Rolka Brady J50C-2250-2585 z białą taśmą ciągłą do etykiet morskich o szerokości 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J50- i taśmy ciągłej J50C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2585' },
    { name: 'Typ materiału', value: 'polipropylen do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,224 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −12 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 74,93 × 109,98 mm do 203,2 × 279,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '100–270, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '57,15 / 101,6 / 152,4 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000' },
    { name: 'Numery artykułów Brady', value: MORSKIE_2585.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MORSKIE_2585.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety morskie BS 5609 ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nWykrawane etykiety są duże, od 74,93 × 109,98 do 203,2 × 279,4 mm.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane mają stały rozmiar. Taśmę ciągłą drukarka obcina po wydruku, więc długość etykiety wynika z projektu.',
  },
  faq: [
    { question: 'Co oznacza zgodność z BS 5609 w etykietach B-2585?', answer: 'To norma dla etykiet stosowanych w środowisku morskim. Etykiety B-2585 spełniają jej sekcje 2 i 3.' },
    { question: 'Do jakich oznaczeń służą etykiety B-2585?', answer: 'Do znakowania ogólnego, komunikacji o zagrożeniach, oznaczeń bezpieczeństwa i znakowania morskiego.' },
    { question: 'W jakich drukarkach można drukować na materiale B-2585?', answer: 'Rolki pasują do drukarek J4000 i J5000. W [Brady J4000](/produkt/brady-j4000) drukuje się je tuszem tej drukarki.' },
  ],
  applications: ['Znakowanie ładunków i urządzeń w transporcie morskim', 'Komunikacja o zagrożeniach', 'Oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// Poliester ekologiczny B-2618 (cps-5069952)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w tabeli]
const EKO_2618: [string, string, string][] = [
  ['J40-136-2618', '176668', '38,1 × 19,05 mm, 1000 szt.'],
  ['J40-17-2618', '176669', '50,8 × 25,4 mm, 1000 szt.'],
  ['J40-7-2618', '176671', '69,85 × 31,75 mm, 850 szt.'],
  ['J40-18-2618', '176670', '76,2 × 25,4 mm, 1050 szt.'],
  ['J40-19-2618', '176672', '76,2 × 50,8 mm, 550 szt.'],
  ['J40-55-2618', '176673', '101,6 × 50,8 mm, 250 szt.'],
  ['J40-76-2618', '176674', '101,6 × 76,2 mm, 500 szt.'],
]

export const bradyJ4000Eko2618: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-19-2618',
  slug: 'brady-j40-19-2618',
  name: 'Etykiety z ekologicznego poliestru Brady B-2618 do drukarki J4000',
  seoTitle: 'Brady B-2618 — etykiety z ekologicznego poliestru do J4000',
  seoDescription: 'Etykiety Brady B-2618 z poliestru z recyklingu do Brady J4000 (BradyJet): matowe, UL, od −40 do 100 °C, 7 rozmiarów. PN: J40-19-2618, J40-55-2618, J40-76-2618.',
  shortDescription: 'Brady B-2618 to matowy biały poliester z dodatkiem materiału z recyklingu, uznany przez UL, w siedmiu rozmiarach. Do drukarki Brady J4000.',
  description: 'Etykiety B-2618 mają matową, białą powierzchnię z poliestru. W folii użyto PET z recyklingu, więc materiał jest tak samo trwały jak zwykły poliester, ale mniej obciąża środowisko. Od spodu etykieta ma trwały akryl, który wiąże z gładkimi powierzchniami. Poliester ma uznanie UL (UL Recognised). Trafia na tabliczki znamionowe, do śledzenia aktywów i inwentaryzacji, kontroli, a także do kodów kreskowych i znakowania komponentów oraz sprzętu. Nadaje się też do ogólnego znakowania, w którym liczy się wysoka jakość kodów i grafiki.\n\nSiedem rozmiarów zaczyna się od drobnicy o wymiarach 38,1 × 19,05 mm, a kończy na formacie 101,6 × 76,2 mm. Rolki liczą od 250 do 1050 sztuk. Najwięcej, bo 1050 sztuk, mieści rolka z etykietą 76,2 × 25,4 mm.\n\nGrubość folii wynosi 0,1118 mm. Zakres pracy sięga w górę do 100 °C, a w dół do −40 °C. Etykiety są odporne na chemikalia, oleje, wodę, korozję i wilgoć, także przy intensywnym myciu. Kody kreskowe i grafikę drukuje w pełnym kolorze drukarka J4000.',
  sameAs: 'https://www.brady.eu/labels/sustainable-matt-white-polyester-labels-for-j4000-printer-cps-5069952',
  images: [
    '/images/products/brady/j40-76-2618.png',
    '/images/products/brady/j40-76-2618-pasek.png',
    '/images/products/brady/j40-7-2618.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-76-2618 z białymi etykietami z ekologicznego poliestru o wymiarach 101,6 × 76,2 mm',
    'Arkusz z białymi etykietami z ekologicznego poliestru Brady J40-76-2618 o wymiarach 101,6 × 76,2 mm',
    'Rolka Brady J40-7-2618 z białymi etykietami z ekologicznego poliestru o wymiarach 69,85 × 31,75 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2618' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z dodatkiem poliestru z recyklingu (PET)' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,1118 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, oleje, woda, korozja, wilgoć, intensywne mycie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 38,1 × 19,05 mm do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '250–1050, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: EKO_2618.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: EKO_2618.map(([pn, , rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety z ekologicznego poliestru ${rozmiar}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nRolki z najmniejszymi etykietami liczą po 1000 sztuk, a rolka 76,2 × 25,4 mm aż 1050.',
  },
  faq: [
    { question: 'Co jest ekologicznego w etykietach B-2618?', answer: 'Do produkcji folii użyto poliestru z recyklingu (PET). Etykieta ma właściwości poliestru, a mniej obciąża środowisko.' },
    { question: 'Czy etykiety B-2618 nadają się na tabliczki znamionowe?', answer: 'Tak. Materiał ma uznanie UL i pracuje w zakresie od −40 do 100 °C.' },
    { question: 'Jakie rozmiary etykiet B-2618 są dostępne?', answer: 'Siedem rozmiarów, od 38,1 × 19,05 do 101,6 × 76,2 mm. Etykiety drukuje się w [Brady J4000](/produkt/brady-j4000).' },
  ],
  applications: ['Tabliczki znamionowe', 'Śledzenie aktywów i kody kreskowe', 'Inwentaryzacja i oznaczanie sprzętu'],
}

// ---------------------------------------------------------------------------
// Polipropylen odporny na chemikalia B-7425J: etykiety J40- (cps-4433292) i taśmy J40C- (cps-4197971)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const PP_7425J: [string, string, string, string, string][] = [
  ['J40-260-7425J', '152778', '55,12 × 85,09 mm, 340 szt.', '55,12 × 85,09 mm, 340 szt.', 'Wykrawane'],
  ['J40-262-7425J', '152779', '104,9 × 154,94 mm, 200 szt.', '104,9 × 154,94 mm, 200 szt.', 'Wykrawane'],
  ['J40-321-7425J', '152781', '203,2 × 133,35 mm, 100 szt.', '203,2 × 133,35 mm, 100 szt.', 'Wykrawane'],
  ['J40-265-7425J', '152780', '177,8 × 254 mm, 100 szt.', '177,8 × 254 mm, 100 szt.', 'Wykrawane'],
  ['J40-268-7425J', '152782', '203,2 × 279,4 mm, 100 szt.', '203,2 × 279,4 mm, 100 szt.', 'Wykrawane'],
  ['J40C-2250-7425J', '152783', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-4000-7425J', '152784', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-6000-7425J', '152785', 'taśma ciągła 152,4 mm × 30,48 m', 'ciągła 152,4 mm × 30,48 m', 'Taśma ciągła'],
  ['J40C-8000-7425J', '152786', 'taśma ciągła 203,2 mm × 30,48 m', 'ciągła 203,2 mm × 30,48 m', 'Taśma ciągła'],
]

export const bradyJ4000Polipropylen7425J: Product = {
  ...wspolneJ4000,
  id: 'brady-j40-262-7425j',
  slug: 'brady-j40-262-7425j',
  name: 'Etykiety polipropylenowe odporne na chemikalia Brady B-7425J do drukarki J4000',
  seoTitle: 'Brady B-7425J — etykiety odporne na chemikalia do J4000',
  seoDescription: 'Etykiety polipropylenowe Brady B-7425J do Brady J4000 (BradyJet): odporne na chemikalia, od −80 do 70 °C. PN: J40-262-7425J, J40C-4000-7425J.',
  shortDescription: 'Brady B-7425J to matowy polipropylen odporny na chemikalia i niskie temperatury, w pięciu rozmiarach wykrawanych i na czterech taśmach ciągłych. Do drukarki Brady J4000.',
  description: 'B-7425J to polipropylen o matowej, białej powierzchni, opracowany do pracy w laboratoriach. Nadaje się do etykiet GHS i innych oznaczeń w pełnym kolorze, które muszą przetrwać kontakt z agresywną chemią. Spód pokrywa trwały klej akrylowy. Etykiety GHS drukuje się w pełnym kolorze na miejscu, a gotowy materiał wytrzymuje kontakt z chemikaliami. Etykiety znakują komponenty i sprzęt, substancje niebezpieczne oraz próbki i pojemniki w laboratorium.\n\nPięć rozmiarów etykiet wykrawanych mieści się między 55,12 × 85,09 mm (340 sztuk na rolce) a największą etykietą 203,2 × 279,4 mm (100 sztuk). Taśma ciągła ma 30,48 m, a jej szerokość zaczyna się od 57,15 mm i kończy na 203,2 mm.\n\nMateriał o grubości 0,127 mm działa w temperaturach od −80 do 70 °C. Dzięki temu nadaje się do autoklawowania i przechowywania kriogenicznego: znosi ciekły azot, zamrażarkę i gorącą łaźnię wodną (100 °C). Jest odporna na tarcie, rozpuszczalniki i chemikalia. Pełnokolorowy nadruk daje tusz drukarki J4000.',
  sameAs: 'https://www.brady.eu/labels/chemical-resistant-cryogenic-polypropylene-labels-for-j4000-printer-cps-4433292',
  images: [
    '/images/products/brady/j40-321-7425j.png',
    '/images/products/brady/j40-321-7425j-pasek.png',
    '/images/products/brady/j40c-4000-7425j.png',
  ],
  imageDescriptions: [
    'Rolka Brady J40-321-7425J z białymi etykietami polipropylenowymi o wymiarach 203,2 × 133,35 mm',
    'Arkusz z białymi etykietami polipropylenowymi Brady J40-321-7425J o wymiarach 203,2 × 133,35 mm',
    'Rolka Brady J40C-4000-7425J z białą taśmą ciągłą z polipropylenu o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J40- i taśmy ciągłej J40C- do druku atramentowego' },
    { name: 'Materiał', value: 'B-7425J' },
    { name: 'Typ materiału', value: 'polipropylen do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,127 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Odporność', value: 'autoklaw, zamrażarka, łaźnia wodna 100 °C, ciekły azot, ścieranie, rozpuszczalniki, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 55,12 × 85,09 mm do 203,2 × 279,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '100–340, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '57,15 / 101,6 / 152,4 / 203,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000' },
    { name: 'Numery artykułów Brady', value: PP_7425J.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PP_7425J.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety polipropylenowe ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 55,12 × 85,09 mm, a największa 203,2 × 279,4 mm.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśma ciągła nie ma podziału, a automatyczna obcinarka odcina ją po wydruku.',
  },
  faq: [
    { question: 'Do jakich oznaczeń nadaje się materiał B-7425J?', answer: 'Do etykiet GHS i innych pełnokolorowych oznaczeń, które muszą wytrzymać silne chemikalia, a także do etykietowania w laboratorium.' },
    { question: 'Jaki zakres temperatury znosi materiał B-7425J?', answer: 'Od −80 do 70 °C. Etykieta jest przewidziana także do zamrażarki, łaźni wodnej o temperaturze 100 °C i ciekłego azotu.' },
    { question: 'Jaka drukarka drukuje na materiale B-7425J?', answer: 'Materiał przeznaczono do drukarki [Brady J4000](/produkt/brady-j4000). Do druku służy tusz tej drukarki.' },
  ],
  applications: ['Etykiety GHS w laboratorium', 'Oznaczanie substancji niebezpiecznych', 'Znakowanie komponentów i sprzętu laboratoryjnego'],
}

// ---------------------------------------------------------------------------
// Zestawy etykiet poliestrowych B-2569 z laminatem akrylowym, -KT (cps-4574818)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta (szer. × wys.), sztuk w zestawie, laminat (krótszy × dłuższy bok)]
const ZESTAW_2569: [string, string, string, string, string][] = [
  ['J50-260-2569-KT', '175451', '55,12 × 85,09', '340', '61,47 × 91,44'],
  ['J50-261-2569-KT', '175453', '74,93 × 109,98', '270', '81,28 × 116,33'],
  ['J50-262-2569-KT', '175455', '104,9 × 154,94', '200', '111,25 × 161,29'],
  ['J50-267-2569-KT', '175459', '154,94 × 210,82', '120', '161,29 × 217,17'],
  ['J50-265-2569-KT', '175457', '177,8 × 254', '100', '184,15 × 260,35'],
]

export const bradyJ4000Zestaw2569: Product = {
  ...wspolneJ4000,
  id: 'brady-j50-262-2569-kt',
  slug: 'brady-j50-262-2569-kt',
  name: 'Zestawy etykiet poliestrowych B-2569 z laminatem akrylowym Brady do drukarki J4000',
  seoTitle: 'Brady B-2569 z laminatem — zestawy etykiet do drukarki J4000',
  seoDescription: 'Zestawy Brady: etykiety poliestrowe B-2569 i laminat akrylowy do Brady J4000 i J5000 (BradyJet), do 10 lat na zewnątrz. PN: J50-262-2569-KT, J50-260-2569-KT.',
  shortDescription: 'Brady J50-…-KT to zestawy etykiet z poliestru B-2569 i dopasowanego laminatu akrylowego, w pięciu rozmiarach. Do drukarki Brady J4000.',
  description: 'Zestaw KT to białe etykiety poliestrowe B-2569 oraz laminat akrylowy o rozmiarze dopasowanym do etykiety. Etykietę drukuje się, odkleja od podkładu i przykleja, a na wierzchu układa laminat. Powłoka etykiety rozjaśnia kolory i zabezpiecza je przed smugami i rozmazaniem. Laminat akrylowy poprawia odporność na UV i ścieranie, co pozwala stosować etykietę poza budynkiem do 10 lat.\n\nKomplety występują w pięciu rozmiarach etykiet, od 55,12 × 85,09 mm w liczbie 340 sztuk do 177,8 × 254 mm w liczbie 100 sztuk. Laminat jest większy o 6 mm, dzięki czemu przykrywa cały wydruk i łatwiej go nakleić. Zestawy współpracują z J4000 i J5000.\n\nPoliester ma 0,119 mm grubości, a spód pokrywa klej akrylowy dla gładkich podłoży. Naklejony wytrzymuje temperatury −40…60 °C, a przykleja się go od −18 °C. Komplety stosuje się do znaków bezpieczeństwa, oznaczeń 5S i magazynowych, znaczników rur i zaworów, blokad LOTO oraz identyfikacji obiektów. Tusz drukarki J4000 daje pełny kolor.',
  sameAs: 'https://www.brady.eu/labels/polyester-label-overlaminate-kit-for-j4000-j5000-printers-cps-4574818',
  images: [
    '/images/products/brady/j50-262-2569-kt.png',
    '/images/products/brady/j50-260-2569-kt.png',
    '/images/products/brady/j50-267-2569-kt.png',
  ],
  imageDescriptions: [
    'Zestaw Brady J50-262-2569-KT: rolka z białymi etykietami poliestrowymi 104,9 × 154,94 mm i rolka laminatu',
    'Zestaw Brady J50-260-2569-KT: rolka z białymi etykietami poliestrowymi 55,12 × 85,09 mm i rolka laminatu',
    'Zestaw Brady J50-267-2569-KT: rolka z białymi etykietami poliestrowymi 154,94 × 210,82 mm i rolka laminatu',
  ],
  specifications: [
    { name: 'Typ', value: 'Zestawy rolek etykiet wykrawanych J50- z dopasowanym laminatem akrylowym' },
    { name: 'Materiał', value: 'B-2569 z laminatem akrylowym' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z laminatem akrylowym' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,119 mm (etykieta)' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie i UV (z laminatem do 10 lat na zewnątrz)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 55,12 × 85,09 mm do 177,8 × 254 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w zestawie', value: '100–340, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000, J5000' },
    { name: 'Numery artykułów Brady', value: ZESTAW_2569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZESTAW_2569.map(([pn, , etykieta, szt, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — zestaw etykiet B-2569 z laminatem ${etykieta} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${etykieta} mm, ${szt} szt.`, Laminat: `${laminat} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet w zestawie.\n\nNajmniejsza etykieta ma 55,12 × 85,09 mm i 340 sztuk, a największa 177,8 × 254 mm i 100 sztuk.',
    Laminat: 'Wymiary laminatu akrylowego dopasowanego do etykiety, podane od krótszego do dłuższego boku.\n\nLaminat jest większy od etykiety o 6 mm, więc przykrywa cały wydruk.',
  },
  faq: [
    { question: 'Co zawiera zestaw J50-…-KT?', answer: 'Etykiety z białego poliestru B-2569 oraz laminat akrylowy w rozmiarze dopasowanym do etykiety.' },
    { question: 'Ile lat laminat chroni etykietę na zewnątrz?', answer: 'Laminat akrylowy daje do 10 lat trwałości na zewnątrz. Poprawia odporność na UV i ścieranie.' },
    { question: 'W jakich drukarkach drukuje się etykiety z zestawów KT?', answer: 'Etykiety pasują do drukarek J4000 i J5000. W [Brady J4000](/produkt/brady-j4000) drukuje się je tuszem tej drukarki.' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczenia 5S na zewnątrz', 'Znaczniki rur i zaworów', 'Oznaczenia magazynowe i blokady LOTO'],
}

// ---------------------------------------------------------------------------
// Laminat akrylowy B-910 (cps-3069270)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const LAMINAT_910: [string, string, string, string, string][] = [
  ['LAM-260-910', '175440', '61,47 × 91,44 mm, 340 szt.', '61,47 × 91,44 mm, 340 szt.', 'Sztuki cięte'],
  ['LAM-261-910', '175441', '81,28 × 116,33 mm, 270 szt.', '81,28 × 116,33 mm, 270 szt.', 'Sztuki cięte'],
  ['LAM-262-910', '175442', '111,25 × 161,29 mm, 200 szt.', '111,25 × 161,29 mm, 200 szt.', 'Sztuki cięte'],
  ['LAM-267-910', '175444', '161,29 × 217,17 mm, 120 szt.', '161,29 × 217,17 mm, 120 szt.', 'Sztuki cięte'],
  ['LAM-265-910', '175443', '184,15 × 260,35 mm, 100 szt.', '184,15 × 260,35 mm, 100 szt.', 'Sztuki cięte'],
  ['LAM-2250-910', '149259', 'rolka 69,85 mm × 36,56 m', 'ciągły 69,85 mm × 36,56 m', 'Rolka ciągła'],
  ['LAM-4000-910', '149258', 'rolka 114,3 mm × 36,56 m', 'ciągły 114,3 mm × 36,56 m', 'Rolka ciągła'],
  ['LAM-6000-910', '149257', 'rolka 165,1 mm × 36,56 m', 'ciągły 165,1 mm × 36,56 m', 'Rolka ciągła'],
  ['LAM-8000-910', '149260', 'rolka 215,9 mm × 36,56 m', 'ciągły 215,9 mm × 36,56 m', 'Rolka ciągła'],
]

export const bradyJ4000Laminat910: Product = {
  ...wspolneJ4000,
  id: 'brady-lam-6000-910',
  slug: 'brady-lam-6000-910',
  name: 'Laminat akrylowy Brady B-910 do etykiet z drukarki J4000',
  seoTitle: 'Brady B-910 — laminat akrylowy do etykiet z drukarki J4000',
  seoDescription: 'Laminat akrylowy Brady B-910 do etykiet z Brady J4000 (BradyJet): do 10 lat na zewnątrz, od −29 do 150 °C. PN: LAM-6000-910, LAM-262-910, LAM-265-910.',
  shortDescription: 'Brady B-910 to przezroczysty laminat akrylowy do ręcznego naklejania na etykiety BradyJet, w pięciu rozmiarach ciętych i na czterech rolkach. Do drukarki Brady J4000.',
  description: 'Laminat B-910 to przezroczysta, błyszcząca folia akrylowa, która chroni etykiety z drukarek BradyJet. Nakleja się go ręcznie na gotowy wydruk, a efektem jest do 10 lat trwałości poza budynkiem. Folia jest optycznie przejrzysta, ma 0,076 mm grubości i klej akrylowy. Laminat stosuje się przy identyfikacji obiektów, oznaczaniu rur i zaworów, znakowaniu magazynów, systemie 5S i komunikacji o zagrożeniach.\n\nDostępne są dwie postaci. Rolki ciągłe liczą 36,56 m, a ich szerokość mieści się między 69,85 a 215,9 mm; potrzebny odcinek odcina się ręcznie. Pięć gotowych rozmiarów odpowiada etykietom wykrawanym, a w opakowaniu jest od 100 do 340 sztuk. Laminat jest szerszy od materiałów BradyJet, więc łatwiej go ułożyć. Rolka ciągła przydaje się do etykiet drukowanych na taśmie, bo odcinek dopasowuje się do ich długości.\n\nFolia znosi temperatury od −29 do 150 °C. Do naklejania wymaga co najmniej 5 °C, a jego klej jest trwały. Wydruk, który laminat przykrywa, wykonuje się wcześniej tuszem drukarki J4000.',
  sameAs: 'https://www.brady.eu/labels/acrylic-overlaminate-for-bradyjet-cps-3069270',
  images: [
    '/images/products/brady/lam-6000-910.png',
    '/images/products/brady/lam-260-910.png',
    '/images/products/brady/lam-262-910.png',
  ],
  imageDescriptions: [
    'Rolka przezroczystego laminatu akrylowego Brady LAM-6000-910 o szerokości 165,1 mm na gilzie 76,2 mm',
    'Rolka przezroczystego laminatu akrylowego Brady LAM-260-910 w rozmiarze 61,47 × 91,44 mm',
    'Rolka przezroczystego laminatu akrylowego Brady LAM-262-910 w rozmiarze 111,25 × 161,29 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Laminat akrylowy w rolkach LAM- i gotowych rozmiarach do etykiet z druku atramentowego' },
    { name: 'Materiał', value: 'B-910' },
    { name: 'Typ materiału', value: 'akryl, przezroczysty laminat' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −29 do 150 °C' },
    { name: 'Temperatura naklejania', value: 'od 5 °C' },
    { name: 'Odporność', value: 'do 10 lat na zewnątrz po naklejeniu na etykietę BradyJet' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary laminatu', value: 'od 61,47 × 91,44 mm do 184,15 × 260,35 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w opakowaniu', value: '100–340, zależnie od wersji' },
    { name: 'Szerokość rolki', value: '69,85 / 114,3 / 165,1 / 215,9 mm, zależnie od wersji' },
    { name: 'Długość rolki', value: '36,56 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J4000 (laminat nakłada się na wydrukowane etykiety)' },
    { name: 'Numery artykułów Brady', value: LAMINAT_910.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: LAMINAT_910.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — laminat akrylowy ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary gotowego laminatu z liczbą sztuk w opakowaniu albo szerokość i długość rolki ciągłej.\n\nGotowe sztuki mają od 61,47 × 91,44 do 184,15 × 260,35 mm, a rolki od 69,85 do 215,9 mm szerokości.',
    Forma: 'Sposób przygotowania laminatu.\n\nSztuki cięte pasują do etykiet wykrawanych. Z rolki ciągłej odcina się ręcznie odcinek o potrzebnej długości.',
  },
  faq: [
    { question: 'Do czego służy laminat B-910?', answer: 'Nakleja się go ręcznie na wydrukowaną etykietę BradyJet. Daje to do 10 lat trwałości na zewnątrz.' },
    { question: 'Czym różni się rolka ciągła od gotowych sztuk laminatu?', answer: 'Z rolki ciągłej odcina się ręcznie odcinek o dowolnej długości. Gotowe sztuki mają stały rozmiar dopasowany do etykiet wykrawanych.' },
    { question: 'Czy laminat B-910 nadaje się do etykiet z J4000?', answer: 'Tak. Laminat nakleja się na etykiety drukowane w [Brady J4000](/produkt/brady-j4000) lub innych drukarkach BradyJet.' },
  ],
  applications: ['Ochrona etykiet na zewnątrz', 'Znaczniki rur i zaworów', 'Oznaczenia magazynowe i komunikacja o zagrożeniach'],
}

export const bradyJ4000PoliesterPp: Product[] = [
  bradyJ4000Poliester2569,
  bradyJ4000Poliester2475,
  bradyJ4000PermaShield2569,
  bradyJ4000PermaShield2475,
  bradyJ4000Morskie2585,
  bradyJ4000Eko2618,
  bradyJ4000Polipropylen7425J,
  bradyJ4000Zestaw2569,
  bradyJ4000Laminat910,
]

export const bradyJ4000PoliesterPpSekcje: Record<string, 'ogolne' | 'lab' | 'laminaty' | 'zawieszki'> = {
  'brady-j50-262-2569': 'ogolne',
  'brady-j40-19-2475': 'ogolne',
  'brady-j40psl-262-2569': 'ogolne',
  'brady-j40psl-19-2475': 'ogolne',
  'brady-j50-261-2585': 'ogolne',
  'brady-j40-19-2618': 'ogolne',
  'brady-j40-262-7425j': 'lab',
  'brady-j50-262-2569-kt': 'laminaty',
  'brady-lam-6000-910': 'laminaty',
}
