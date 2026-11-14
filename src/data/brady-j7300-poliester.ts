import type { Product } from './products'
import { wspolneJ7300 } from './brady-j7300-wspolne'

// Etykiety poliestrowe Brady J- i JC- do kolorowej drukarki atramentowej BradyJet J7300: poliester B-2569 i B-2475,
// PermaShield z laminatem, poliester ekologiczny B-2618, etykiety morskie BS 5609 i ToughWash B-2855. 14.11.2026.

const SMART_CELL = 'Smart Cell (LabelSense)'

// ---------------------------------------------------------------------------
// ToughWash B-2855 — etykiety odporne na zmywanie (7 pojedynczych PN z brady.eu połączonych w jedną kartę)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli, forma]
const TOUGHWASH_2855: [string, string, string, string, string][] = [
  ['J-25-2855', '178339', '101,6 × 152,4 mm, 200 szt.', '101,6 × 152,4 mm, 200 szt.', 'Wykrawane, prostokąt'],
  ['J-413-2855', '181597', '100,33 × 62,23 mm, 500 szt.', '100,33 × 62,23 mm, 500 szt.', 'Wykrawane, prostokąt'],
  ['J-412-2855', '181596', '74,93 × 36,83 mm, 750 szt.', '74,93 × 36,83 mm, 750 szt.', 'Wykrawane, prostokąt'],
  ['JC-1125-2855', '178336', 'taśma ciągła 28,58 mm × 30,48 m', 'ciągła 28,58 mm × 30,48 m', 'Taśma ciągła'],
  ['JC-2250-2855', '178337', 'taśma ciągła 57,15 mm × 30,48 m', 'ciągła 57,15 mm × 30,48 m', 'Taśma ciągła'],
  ['JC-4000-2855', '178338', 'taśma ciągła 101,6 mm × 30,48 m', 'ciągła 101,6 mm × 30,48 m', 'Taśma ciągła'],
  ['JC-4000-2855-S', '181593', 'krótka taśma ciągła 101,6 mm × 15,24 m', 'ciągła 101,6 mm × 15,24 m', 'Taśma ciągła'],
]

export const bradyJ7300ToughWash2855: Product = {
  ...wspolneJ7300,
  id: 'brady-j-25-2855',
  slug: 'brady-j-25-2855',
  name: 'Etykiety odporne na zmywanie Brady ToughWash B-2855 do drukarki J7300',
  seoTitle: 'Brady ToughWash B-2855 — etykiety odporne na zmywanie do J7300',
  seoDescription: 'Etykiety Brady ToughWash B-2855 do Brady J7300 (BradyJet): poliester odporny na zmywanie, od −40 do 60 °C. PN: J-25-2855, J-413-2855, JC-4000-2855.',
  shortDescription: 'Brady ToughWash B-2855 to matowe etykiety poliestrowe odporne na mycie wodą pod ciśnieniem i chemikalia, w trzech rozmiarach wykrawanych i na taśmie ciągłej. Do drukarki Brady J7300.',
  description: 'ToughWash B-2855 to biały poliester do druku atramentowego z matową powierzchnią. Opracowano go do miejsc, w których etykiety są regularnie myte strumieniem wody. Klej akrylowy jest trwały i wiąże z powierzchniami gładkimi. Etykiety stosuje się w zakładach spożywczych i napojowych oraz do oznaczania maszyn, urządzeń i obiektów.\n\nEtykiety wykrawane są dostępne w trzech rozmiarach: 101,6 × 152,4 mm (200 szt.), 100,33 × 62,23 mm (500 szt.) i 74,93 × 36,83 mm (750 szt.). Taśmę ciągłą nawinięto na 30,48 m, a szerokość wynosi 28,58 mm w najwęższej, 57,15 mm w średniej i 101,6 mm w najszerszej. Dodatkowo oferowana jest krótsza taśma, szeroka na 101,6 mm i długa na 15,24 m.\n\nEtykieta i tusz drukarki J7300 znoszą wodę o wysokim ciśnieniu i wysokiej temperaturze, szorowanie oraz kontakt z chemikaliami. Naklejać materiał można od 4 °C, a w użyciu znosi mróz −40 °C i temperaturę 60 °C. Druk w pełnym kolorze pozwala przygotować znaki bezpieczeństwa i oznaczenia maszyn w kilku językach, bez zapasu etykiet z gotowym nadrukiem.',
  sameAs: 'https://www.brady.eu/labels/toughwash-washdown-resistant-labels-for-j7300-inkjet-printer-102-x-152-mm-pid-j-25-2855',
  images: [
    '/images/products/brady/j-25-2855.png',
    '/images/products/brady/j-412-2855.png',
    '/images/products/brady/jc-4000-2855.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-25-2855 na uchwycie z wysuniętym paskiem białych etykiet ToughWash o wymiarach 101,6 × 152,4 mm',
    'Rolka Brady J-412-2855 z białymi etykietami ToughWash o wymiarach 74,93 × 36,83 mm',
    'Rolka Brady JC-4000-2855 z białą taśmą ciągłą ToughWash o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J- i taśmy ciągłej JC- do druku atramentowego' },
    { name: 'Materiał', value: 'ToughWash B-2855' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,22 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Odporność', value: 'mycie wodą pod ciśnieniem, ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J-25-2855: 101,6 × 152,4 mm; J-413-2855: 100,33 × 62,23 mm; J-412-2855: 74,93 × 36,83 mm' },
    { name: 'Liczba sztuk na rolce', value: 'J-25-2855: 200; J-413-2855: 500; J-412-2855: 750' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m; JC-4000-2855-S: 15,24 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: TOUGHWASH_2855.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TOUGHWASH_2855.map(([pn, , nazwa, rozmiar, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety ToughWash ${nazwa}`,
    attributes: { Rozmiar: rozmiar, Forma: forma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 74,93 × 36,83 do 101,6 × 152,4 mm, a taśmy 28,58, 57,15 lub 101,6 mm szerokości.',
    Forma: 'Sposób przygotowania materiału na rolce.\n\nEtykiety wykrawane są gotowymi prostokątami. Taśma ciągła nie ma podziału, a drukarka obcina ją po wydruku na długość projektu.',
  },
  faq: [
    { question: 'Czy etykiety ToughWash B-2855 wytrzymują mycie wodą pod ciśnieniem?', answer: 'Tak. Etykieta i tusz drukarki J7300 znoszą wodę o wysokim ciśnieniu i wysokiej temperaturze, szorowanie oraz chemikalia. Materiał opracowano dla zakładów spożywczych i napojowych.' },
    { question: 'W jakiej temperaturze można naklejać etykiety B-2855?', answer: 'Od 4 °C. Naklejona etykieta pracuje w zakresie od −40 do 60 °C.' },
    { question: 'Jakie kasety z tuszem są potrzebne do druku na materiale ToughWash?', answer: 'Do druku służą kasety P-CMY-1 i P-K-1. Rolkę rozpoznaje układ Smart Cell, a materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Zakłady spożywcze i napojowe', 'Znaki bezpieczeństwa i oznaczenia maszyn', 'Kody kreskowe i oznaczenia sprzętu'],
}

// ---------------------------------------------------------------------------
// Poliester z certyfikatem UL B-2475 (cps-4854374)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli]
const UL_2475: [string, string, string, string][] = [
  ['J-59-2475', '176591', '25,4 × 12,7 mm, 1000 szt.', '25,4 × 12,7 mm, 1000 szt.'],
  ['J-136-2475', '176592', '38,1 × 19,05 mm, 1000 szt.', '38,1 × 19,05 mm, 1000 szt.'],
  ['J-235-2475', '176593', '38,1 × 25,4 mm, 1000 szt.', '38,1 × 25,4 mm, 1000 szt.'],
  ['J-137-2475', '176594', '50,8 × 25,4 mm, 1000 szt.', '50,8 × 25,4 mm, 1000 szt.'],
  ['J-18-2475', '176595', '76,2 × 25,4 mm, 1000 szt.', '76,2 × 25,4 mm, 1000 szt.'],
  ['J-19-2475', '176596', '76,2 × 50,8 mm, 750 szt.', '76,2 × 50,8 mm, 750 szt.'],
  ['J-55-2475', '176597', '101,6 × 50,8 mm, 750 szt.', '101,6 × 50,8 mm, 750 szt.'],
  ['J-76-2475', '176598', '101,6 × 76,2 mm, 500 szt.', '101,6 × 76,2 mm, 500 szt.'],
  ['J-25-2475', '176599', '101,6 × 152,4 mm, 300 szt.', '101,6 × 152,4 mm, 300 szt.'],
  ['JC-1125-2475', '176574', 'taśma ciągła 28,58 mm × 45,72 m', 'ciągła 28,58 mm × 45,72 m'],
  ['JC-2250-2475', '176575', 'taśma ciągła 57,15 mm × 45,72 m', 'ciągła 57,15 mm × 45,72 m'],
  ['JC-4000-2475', '176576', 'taśma ciągła 101,6 mm × 45,72 m', 'ciągła 101,6 mm × 45,72 m'],
]

export const bradyJ7300PoliesterUL2475: Product = {
  ...wspolneJ7300,
  id: 'brady-j-25-2475',
  slug: 'brady-j-25-2475',
  name: 'Etykiety poliestrowe z certyfikatem UL Brady B-2475 do drukarki J7300',
  seoTitle: 'Brady B-2475 — etykiety poliestrowe UL 969 do drukarki J7300',
  seoDescription: 'Etykiety poliestrowe Brady B-2475 zgodne z UL 969 do Brady J7300 (BradyJet): 9 rozmiarów i 3 taśmy ciągłe, matowe. PN: J-25-2475, J-55-2475, JC-4000-2475.',
  shortDescription: 'Brady B-2475 to matowe etykiety z białego poliestru, zgodne z normą UL 969, w dziewięciu rozmiarach wykrawanych i na trzech taśmach ciągłych. Do drukarki Brady J7300.',
  description: 'Etykiety B-2475 są wykonane z matowego poliestru do druku atramentowego. Materiał spełnia wymagania normy UL 969 dla znakowania i etykietowania. Biała folia przyjmuje tusz drukarki J7300, więc zmienne dane i kolorowe elementy drukuje się na miejscu, bez zamawiania gotowych nadruków. Klej akrylowy jest trwały, a najlepiej przylega do płaskich i gładkich powierzchni. Etykiety znakują produkty, komponenty i urządzenia, sprzęt telekomunikacyjny oraz kody kreskowe.\n\nRolki z etykietami wykrawanymi występują w dziewięciu rozmiarach. Najmniejsza etykieta ma 25,4 × 12,7 mm (1000 szt.), a największa 101,6 × 152,4 mm (300 szt.). Dostępne są też trzy taśmy ciągłe, każda z 45,72 m materiału, o szerokości wynoszącej odpowiednio 28,58, 57,15 i 101,6 mm. Układ Smart Cell przekazuje drukarce dane rolki, więc etykieta ustawia się automatycznie.\n\nPoliester o grubości 0,119 mm zachowuje właściwości między −40 °C a 60 °C, a klei się go od −18 °C. Materiał odpiera ścieranie, chemikalia, oleje i rozpuszczalniki. Wydruk wykonuje się tuszami drukarki J7300.',
  sameAs: 'https://www.brady.eu/labels/ul-approved-polyester-labels-for-bradyjet-j7300-colour-label-printer-cps-4854374',
  images: [
    '/images/products/brady/j-25-2475.png',
    '/images/products/brady/j-55-2475.png',
    '/images/products/brady/jc-2250-2475.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-25-2475 na uchwycie z wysuniętym paskiem białych etykiet poliestrowych o wymiarach 101,6 × 152,4 mm',
    'Rolka Brady J-55-2475 z białymi etykietami poliestrowymi o wymiarach 101,6 × 50,8 mm',
    'Rolka Brady JC-2250-2475 z białą taśmą ciągłą z poliestru o szerokości 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J- i taśmy ciągłej JC- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2475' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,119 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje, rozpuszczalniki' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 mm do 101,6 × 152,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '300–1000, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'UL 969' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: UL_2475.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: UL_2475.map(([pn, , nazwa, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety poliestrowe UL ${nazwa}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 25,4 × 12,7 do 101,6 × 152,4 mm, a taśmy ciągłe 28,58, 57,15 lub 101,6 mm szerokości i 45,72 m długości.',
  },
  faq: [
    { question: 'Jaką normę UL spełniają etykiety B-2475?', answer: 'Poliester B-2475 spełnia wymagania normy UL 969 dla znakowania i etykietowania. Dlatego etykiety nadają się do oznaczania produktów i urządzeń.' },
    { question: 'Na jakich powierzchniach trzymają się etykiety B-2475?', answer: 'Trwały klej akrylowy najlepiej wiąże z powierzchniami płaskimi i gładkimi. Etykiety można naklejać od −18 °C.' },
    { question: 'Jakie kasety z tuszem są potrzebne do materiału B-2475?', answer: 'Do druku służą tusze drukarki J7300. Materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Znakowanie produktów, komponentów i urządzeń', 'Etykiety z kodami kreskowymi', 'Znakowanie sprzętu telekomunikacyjnego i transmisji danych'],
}

// ---------------------------------------------------------------------------
// Etykiety morskie BS 5609, polipropylen B-2585 (cps-4854381)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli]
const MORSKIE_2585: [string, string, string, string][] = [
  ['J-260-2585', '176619', '55,12 × 85,09 mm, 500 szt.', '55,12 × 85,09 mm, 500 szt.'],
  ['J-261-2585', '170470', '74,93 × 109,98 mm, 300 szt.', '74,93 × 109,98 mm, 300 szt.'],
  ['J-262-2585', '176620', '104,9 × 154,94 mm, 250 szt.', '104,9 × 154,94 mm, 250 szt.'],
  ['JC-2250-2585', '176586', 'taśma ciągła 57,15 mm × 45,72 m', 'ciągła 57,15 mm × 45,72 m'],
  ['JC-4000-2585', '170469', 'taśma ciągła 101,6 mm × 45,72 m', 'ciągła 101,6 mm × 45,72 m'],
]

export const bradyJ7300Morskie2585: Product = {
  ...wspolneJ7300,
  id: 'brady-j-262-2585',
  slug: 'brady-j-262-2585',
  name: 'Etykiety morskie BS 5609 Brady B-2585 do drukarki J7300',
  seoTitle: 'Brady B-2585 — etykiety morskie BS 5609 do drukarki J7300',
  seoDescription: 'Etykiety morskie Brady B-2585 z polipropylenu, certyfikat BS 5609 sekcje 2 i 3, do Brady J7300 (BradyJet). PN: J-260-2585, J-262-2585, JC-4000-2585.',
  shortDescription: 'Brady B-2585 to matowe etykiety polipropylenowe z certyfikatem BS 5609 sekcje 2 i 3, w trzech rozmiarach wykrawanych i na dwóch taśmach ciągłych. Do drukarki Brady J7300.',
  description: 'Etykiety B-2585 są wykonane z matowego, białego polipropylenu do druku atramentowego. Materiał ma certyfikat BS 5609 w sekcjach 2 i 3. Certyfikat ma zapewnić, że oznaczenie pozostaje przyklejone, czytelne i zgodne z przepisami podczas transportu morskiego. Etykiety stosuje się do znakowania GHS, substancji niebezpiecznych, beczek, ładunków w transporcie (DOT), magazynowania i wyrobów farmaceutycznych. Klej akrylowy trwale wiąże z powierzchniami gładkimi.\n\nDo wyboru są trzy rozmiary: 55,12 × 85,09 mm (rolka z 500 etykietami), 74,93 × 109,98 mm (300 etykiet) oraz największy 104,9 × 154,94 mm, w którym rolka mieści 250 etykiet. Taśmy ciągłe liczą 45,72 m; jedna ma 57,15 mm, druga 101,6 mm szerokości. Drukarka rozpoznaje rolkę po układzie Smart Cell i ustawia format bez ręcznej konfiguracji.\n\nFolia z polipropylenu, gruba na 0,224 mm, użytkowana jest w zakresie od mrozu −40 °C do ciepła 60 °C. Etykiety przykleja się od −12 °C. Odporność obejmuje ścieranie, chemikalia, korozję, wilgoć, UV i wpływ pogody. Barwny wydruk powstaje z tuszy drukarki J7300.',
  sameAs: 'https://www.brady.eu/labels/bs-5609-marine-labels-for-bradyjet-j7300-colour-label-printer-cps-4854381',
  images: [
    '/images/products/brady/j-262-2585.png',
    '/images/products/brady/j-261-2585.png',
    '/images/products/brady/jc-4000-2585.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-262-2585 na uchwycie z wysuniętym paskiem białych etykiet morskich o wymiarach 104,9 × 154,94 mm',
    'Rolka Brady J-261-2585 z białymi etykietami morskimi o wymiarach 74,93 × 109,98 mm',
    'Rolka Brady JC-4000-2585 z białą taśmą ciągłą do etykiet morskich o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J- i taśmy ciągłej JC- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2585' },
    { name: 'Typ materiału', value: 'polipropylen do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,224 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −12 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'J-260-2585: 55,12 × 85,09 mm; J-261-2585: 74,93 × 109,98 mm; J-262-2585: 104,9 × 154,94 mm' },
    { name: 'Liczba sztuk na rolce', value: 'J-260-2585: 500; J-261-2585: 300; J-262-2585: 250' },
    { name: 'Szerokość taśmy', value: '57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: MORSKIE_2585.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MORSKIE_2585.map(([pn, , nazwa, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety morskie BS 5609 ${nazwa}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 55,12 × 85,09 do 104,9 × 154,94 mm, a taśmy ciągłe 57,15 lub 101,6 mm szerokości i 45,72 m długości.',
  },
  faq: [
    { question: 'Co oznacza certyfikat BS 5609 na etykietach B-2585?', answer: 'To certyfikat dla etykiet stosowanych w transporcie morskim, w sekcjach 2 i 3 normy. Ma zapewnić, że oznaczenie pozostaje przyklejone, czytelne i zgodne z przepisami.' },
    { question: 'Do jakich oznaczeń służą etykiety morskie B-2585?', answer: 'Do znakowania GHS, substancji niebezpiecznych, beczek, ładunków w transporcie (DOT), magazynowania i wyrobów farmaceutycznych.' },
    { question: 'Jakie kasety z tuszem są potrzebne do materiału B-2585?', answer: 'Do druku służą tusze drukarki J7300. Materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Znakowanie GHS i substancji niebezpiecznych', 'Oznaczanie beczek i ładunków w transporcie morskim', 'Etykiety magazynowe i dla wyrobów farmaceutycznych'],
}

// ---------------------------------------------------------------------------
// PermaShield B-2475 z laminatem B-966 (cps-4854375)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta (szer. × wys.), sztuk na rolce, laminat (szer. × wys.)]
const PERMASHIELD_2475: [string, string, string, string, string][] = [
  ['JPSL-136-2475', '176651', '38,1 × 19,05', '800', '50,8 × 31,75'],
  ['JPSL-235-2475', '176653', '38,1 × 25,4', '800', '50,8 × 38,1'],
  ['JPSL-137-2475', '176652', '50,8 × 25,4', '800', '63,5 × 38,1'],
  ['JPSL-18-2475', '176649', '76,2 × 25,4', '800', '88,9 × 38,1'],
  ['JPSL-19-2475', '176650', '76,2 × 50,8', '500', '88,9 × 63,5'],
]

export const bradyJ7300PermaShield2475: Product = {
  ...wspolneJ7300,
  id: 'brady-jpsl-19-2475',
  slug: 'brady-jpsl-19-2475',
  name: 'Etykiety poliestrowe z laminatem Brady PermaShield B-2475 do drukarki J7300',
  seoTitle: 'Brady PermaShield B-2475 — etykiety z laminatem do J7300',
  seoDescription: 'Zestawy Brady PermaShield B-2475 do Brady J7300 (BradyJet): etykieta z poliestru i laminat B-966, 5 rozmiarów. PN: JPSL-19-2475, JPSL-136-2475, JPSL-18-2475.',
  shortDescription: 'Brady PermaShield B-2475 to zestaw etykiety z matowego poliestru i przezroczystego laminatu B-966, w pięciu rozmiarach. Do drukarki Brady J7300.',
  description: 'PermaShield B-2475 to zestaw dwóch elementów: etykiety z białego poliestru do druku atramentowego i dopasowanego laminatu z przezroczystego poliestru B-966. Etykietę drukuje się w J7300 i nakleja na powierzchnię, a potem przykrywa laminatem. Laminat chroni wydruk przed wieloma rozpuszczalnikami i nadaje mu bardziej błyszczący wygląd. Zestawy służą do etykiet produktowych, logo i kodów kreskowych. Zestawy przeznaczono do płaskich, gładkich powierzchni.\n\nNa rolkach jest pięć rozmiarów etykiet, od 38,1 × 19,05 mm do 76,2 × 50,8 mm. Cztery mniejsze rolki mają po 800 etykiet, a rolka 76,2 × 50,8 mm ma 500 etykiet. Laminat jest o 12,7 mm większy od etykiety w szerokości i wysokości. Po włożeniu rolki drukarka rozpoznaje ją i sama konfiguruje wydruk.\n\nEtykieta i laminat odpierają ścieranie, oleje, rozpuszczalniki i chemikalia. Przedział temperatur użytkowania zestawu zaczyna się na −40 °C i kończy na 60 °C. Przyklejanie jest możliwe od −18 °C. Etykiety drukuje się tuszami drukarki J7300 w pełnej palecie kolorów.',
  sameAs: 'https://www.brady.eu/labels/permashield-matt-polyester-labels-overlaminate-for-bradyjet-j7300-colour-label-printer-cps-4854375',
  images: [
    '/images/products/brady/jpsl-19-2475.png',
    '/images/products/brady/jpsl-136-2475.png',
    '/images/products/brady/jpsl-235-2475.png',
  ],
  imageDescriptions: [
    'Rolka Brady JPSL-19-2475 na uchwycie z wysuniętym paskiem białych etykiet PermaShield z laminatem, 76,2 × 50,8 mm',
    'Rolka Brady JPSL-136-2475 z białymi etykietami PermaShield z laminatem, 38,1 × 19,05 mm',
    'Rolka Brady JPSL-235-2475 z białymi etykietami PermaShield z laminatem, 38,1 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J7300 z dopasowanym laminatem' },
    { name: 'Materiał', value: 'PermaShield B-2475' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z laminatem z poliestru B-966' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,221 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, oleje, rozpuszczalniki, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 38,1 × 19,05 mm do 76,2 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '800; JPSL-19-2475: 500' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_2475.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_2475.map(([pn, , etykieta, szt, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield z laminatem ${etykieta} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${etykieta} mm, ${szt} szt.`, Laminat: `${laminat} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nRolki z czterema mniejszymi rozmiarami mają po 800 etykiet, a rolka 76,2 × 50,8 mm ma 500.',
    Laminat: 'Wymiary przezroczystego laminatu z poliestru B-966, który przykrywa naklejoną etykietę.\n\nLaminat jest o 12,7 mm większy od etykiety w szerokości i wysokości.',
  },
  faq: [
    { question: 'Z czego składa się zestaw PermaShield B-2475?', answer: 'Z etykiety z białego poliestru do druku atramentowego i dopasowanego laminatu z przezroczystego poliestru B-966. Etykietę drukuje się i nakleja, a następnie przykrywa laminatem.' },
    { question: 'Przed czym chroni laminat PermaShield?', answer: 'Laminat chroni wydruk przed wieloma rozpuszczalnikami i nadaje mu bardziej błyszczący wygląd. Etykieta i laminat są też odporne na ścieranie, oleje i chemikalia.' },
    { question: 'Jakie kasety z tuszem są potrzebne do zestawów PermaShield?', answer: 'Do druku służą tusze drukarki J7300. Materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Etykiety produktowe z logo', 'Etykiety z kodami kreskowymi', 'Znakowanie narażone na kontakt z rozpuszczalnikami'],
}

// ---------------------------------------------------------------------------
// Etykiety poliestrowe B-2569 (cps-4854376)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli]
const POLIESTER_2569: [string, string, string, string][] = [
  ['J-260-2569', '176600', '55,12 × 85,09 mm, 500 szt.', '55,12 × 85,09 mm, 500 szt.'],
  ['J-391-2569', '176624', '82,55 × 57,15 mm, 500 szt.', '82,55 × 57,15 mm, 500 szt.'],
  ['J-261-2569', '170453', '74,93 × 109,98 mm, 300 szt.', '74,93 × 109,98 mm, 300 szt.'],
  ['J-371-2569', '176625', '88,9 × 127 mm, 300 szt.', '88,9 × 127 mm, 300 szt.'],
  ['J-262-2569', '170454', '104,9 × 154,94 mm, 250 szt.', '104,9 × 154,94 mm, 250 szt.'],
  ['JC-1125-2569', '176577', 'taśma ciągła 28,58 mm × 45,72 m', 'ciągła 28,58 mm × 45,72 m'],
  ['JC-2250-2569', '176578', 'taśma ciągła 57,15 mm × 45,72 m', 'ciągła 57,15 mm × 45,72 m'],
  ['JC-4000-2569', '170452', 'taśma ciągła 101,6 mm × 45,72 m', 'ciągła 101,6 mm × 45,72 m'],
]

export const bradyJ7300Poliester2569: Product = {
  ...wspolneJ7300,
  id: 'brady-j-260-2569',
  slug: 'brady-j-260-2569',
  name: 'Etykiety poliestrowe Brady B-2569 do drukarki J7300',
  seoTitle: 'Brady B-2569 — etykiety poliestrowe do drukarki J7300',
  seoDescription: 'Etykiety poliestrowe Brady B-2569 do Brady J7300 (BradyJet): matowe, odporne na oleje i chemikalia, 5 rozmiarów. PN: J-260-2569, J-262-2569, JC-4000-2569.',
  shortDescription: 'Brady B-2569 to matowe etykiety z białego poliestru ogólnego przeznaczenia, w pięciu rozmiarach wykrawanych i na trzech taśmach ciągłych. Do drukarki Brady J7300.',
  description: 'Etykiety B-2569 to poliester ogólnego przeznaczenia z powłoką wierzchnią, która poprawia trwałość, kolory i wygląd wydruku. Matowa biała folia dobrze przyjmuje tusz drukarki J7300, dlatego tekst jest ostry, a grafika dokładna. Klej akrylowy mocno wiąże z powierzchniami gładkimi, a etykiety można naklejać także na zimne powierzchnie. Znakuje się nimi obiekty, rury i zawory, magazyny, stanowiska metody 5S, urządzenia i środki ochrony osobistej. Drukuje się na nich też komunikaty bezpieczeństwa OSHA/ANSI oraz oznaczenia blokad LOTO.\n\nEtykiety wykrawane występują w pięciu rozmiarach: 55,12 × 85,09 mm i 82,55 × 57,15 mm (po 500 szt.), 74,93 × 109,98 mm i 88,9 × 127 mm (po 300 szt.) oraz 104,9 × 154,94 mm (250 szt.). Taśmy ciągłe mają po 45,72 m; najwęższa ma 28,58 mm szerokości, a pozostałe 57,15 mm oraz 101,6 mm.\n\nFolia o grubości 0,119 mm ma dolną granicę użytkowania −40 °C i górną 60 °C. Naklejanie jest możliwe już przy −18 °C. Na zewnątrz etykiety zachowują trwałość do dwóch lat, a w pomieszczeniach dłużej. Materiał znosi ścieranie, oleje, rozpuszczalniki i chemikalia. Testowano go na działanie cieczy, alkoholu oraz światła świetlówek i UV.',
  sameAs: 'https://www.brady.eu/labels/polyester-labels-for-bradyjet-j7300-colour-label-printer-cps-4854376',
  images: [
    '/images/products/brady/j-260-2569.png',
    '/images/products/brady/j-371-2569.png',
    '/images/products/brady/jc-1125-2569.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-260-2569 na uchwycie z wysuniętym paskiem białych etykiet poliestrowych o wymiarach 55,12 × 85,09 mm',
    'Rolka Brady J-371-2569 z białymi etykietami poliestrowymi o wymiarach 88,9 × 127 mm',
    'Rolka Brady JC-1125-2569 z wąską białą taśmą ciągłą z poliestru o szerokości 28,58 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J- i taśmy ciągłej JC- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2569' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, o dużej sile wiązania; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,119 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, oleje, rozpuszczalniki, chemikalia, zastosowanie na zewnątrz' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 55,12 × 85,09 mm do 104,9 × 154,94 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '250–500, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: POLIESTER_2569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIESTER_2569.map(([pn, , nazwa, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety poliestrowe ${nazwa}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej z liczbą sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 55,12 × 85,09 do 104,9 × 154,94 mm, a taśmy ciągłe 28,58, 57,15 lub 101,6 mm szerokości.',
  },
  faq: [
    { question: 'Jak długo etykiety B-2569 wytrzymują na zewnątrz?', answer: 'Do dwóch lat, a w pomieszczeniach dłużej. Pracują w zakresie od −40 do 60 °C, a naklejać je można od −18 °C.' },
    { question: 'Do jakich oznaczeń służą etykiety poliestrowe B-2569?', answer: 'Do znakowania obiektów, rur i zaworów, magazynów, metody 5S, urządzeń oraz środków ochrony osobistej, a także do komunikatów OSHA/ANSI i oznaczeń blokad LOTO.' },
    { question: 'Jakie kasety z tuszem są potrzebne do materiału B-2569?', answer: 'Do druku służą tusze drukarki J7300. Materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Znakowanie obiektów, rur i zaworów', 'Oznaczenia metody 5S i magazynowe', 'Komunikaty bezpieczeństwa OSHA/ANSI i blokady LOTO'],
}

// ---------------------------------------------------------------------------
// PermaShield B-2569 z laminatem B-966 (cps-4854377)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta (szer. × wys.), sztuk na rolce, laminat (szer. × wys.)]
const PERMASHIELD_2569: [string, string, string, string, string][] = [
  ['JPSL-260-2569', '176654', '55,12 × 85,09', '300', '67,82 × 97,79'],
  ['JPSL-261-2569', '176656', '74,93 × 109,98', '250', '87,63 × 122,68'],
]

export const bradyJ7300PermaShield2569: Product = {
  ...wspolneJ7300,
  id: 'brady-jpsl-261-2569',
  slug: 'brady-jpsl-261-2569',
  name: 'Etykiety poliestrowe z laminatem Brady PermaShield B-2569 do drukarki J7300',
  seoTitle: 'Brady PermaShield B-2569 — etykiety z laminatem do J7300',
  seoDescription: 'Zestawy Brady PermaShield B-2569 do Brady J7300 (BradyJet): etykieta z poliestru i laminat B-966, do pracy na zewnątrz. PN: JPSL-261-2569, JPSL-260-2569.',
  shortDescription: 'Brady PermaShield B-2569 to zestaw etykiety z matowego poliestru i przezroczystego laminatu B-966, w dwóch rozmiarach. Do drukarki Brady J7300.',
  description: 'PermaShield B-2569 to zestaw etykiety z matowego poliestru i przezroczystego laminatu poliestrowego B-966. Powłoka wierzchnia etykiety uwydatnia kolory i utrzymuje czytelność wydruku. Po wydrukowaniu etykietę przykleja się do powierzchni i przykrywa laminatem. Zestaw chroni wydruk przed agresywnymi rozpuszczalnikami, czynnikami zewnętrznymi i myciem w zakładach spożywczych i napojowych. Znakuje się nim obiekty, magazyny, rury i zawory oraz miejsca wymagające znaków bezpieczeństwa i informacji o zagrożeniach. Etykiety pasują też do oznaczeń metody 5S.\n\nDo wyboru są dwie etykiety: mniejsza o wymiarach 55,12 × 85,09 mm, po 300 sztuk na rolce, i większa o wymiarach 74,93 × 109,98 mm, po 250 sztuk. Przezroczysty laminat wystaje poza etykietę o 12,7 mm w szerokości i wysokości. Układ Smart Cell przekazuje drukarce format etykiety.\n\nDo 60 °C zestaw zachowuje właściwości, a najniższa temperatura użytkowania to −40 °C. Etykietę można przykleić nawet przy −18 °C. Klej akrylowy o dużej sile wiązania przylega do gładkich powierzchni. Całość wytrzymuje warunki zewnętrzne, ścieranie, rozpuszczalniki i chemikalia. Wydruk powstaje w pełnej palecie tuszy drukarki J7300.',
  sameAs: 'https://www.brady.eu/labels/permashield-polyester-labels-overlaminate-for-bradyjet-j7300-colour-label-printer-cps-4854377',
  images: [
    '/images/products/brady/jpsl-261-2569.png',
    '/images/products/brady/jpsl-260-2569.png',
  ],
  imageDescriptions: [
    'Rolka Brady JPSL-261-2569 na uchwycie z wysuniętym paskiem białych etykiet PermaShield z laminatem, 74,93 × 109,98 mm',
    'Rolka Brady JPSL-260-2569 z białymi etykietami PermaShield z laminatem, 55,12 × 85,09 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J7300 z dopasowanym laminatem' },
    { name: 'Materiał', value: 'PermaShield B-2569' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z laminatem z poliestru B-966' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, o dużej sile wiązania; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,221 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki, chemikalia, zastosowanie na zewnątrz' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'JPSL-260-2569: 55,12 × 85,09 mm; JPSL-261-2569: 74,93 × 109,98 mm' },
    { name: 'Liczba sztuk na rolce', value: 'JPSL-260-2569: 300; JPSL-261-2569: 250' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_2569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_2569.map(([pn, , etykieta, szt, laminat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield z laminatem ${etykieta} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${etykieta} mm, ${szt} szt.`, Laminat: `${laminat} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nRolka z mniejszą etykietą ma 300 sztuk, a z większą 250.',
    Laminat: 'Wymiary przezroczystego laminatu z poliestru B-966, który przykrywa naklejoną etykietę.\n\nLaminat jest o 12,7 mm większy od etykiety w szerokości i wysokości.',
  },
  faq: [
    { question: 'Czym różni się PermaShield B-2569 od zestawu B-2475?', answer: 'Zestaw B-2569 ma etykietę przeznaczoną do pracy na zewnątrz i naklejania od −18 °C, z klejem o dużej sile wiązania. Oba zestawy mają ten sam laminat B-966.' },
    { question: 'Jak używa się zestawu PermaShield?', answer: 'Etykietę drukuje się w drukarce J7300 i przykleja do powierzchni. Następnie przykrywa się ją dopasowanym przezroczystym laminatem.' },
    { question: 'Jakie kasety z tuszem są potrzebne do zestawów PermaShield?', answer: 'Do druku służą tusze drukarki J7300. Materiał drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Znaki bezpieczeństwa i informacje o zagrożeniach', 'Oznaczanie rur, zaworów i obiektów', 'Etykiety w zakładach spożywczych i napojowych'],
}

// ---------------------------------------------------------------------------
// Ekologiczny poliester B-2618 (cps-5071797)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w nazwie, rozmiar w tabeli]
const EKO_2618: [string, string, string, string][] = [
  ['J-59-2618', '178388', '25,4 × 12,7 mm, 1000 szt.', '25,4 × 12,7 mm, 1000 szt.'],
  ['J-37-2618', '178389', '38,1 × 12,7 mm, 1000 szt.', '38,1 × 12,7 mm, 1000 szt.'],
  ['J-53-2618', '178390', '50,8 × 12,7 mm, 1000 szt.', '50,8 × 12,7 mm, 1000 szt.'],
  ['J-136-2618', '178391', '38,1 × 19,05 mm, 1000 szt.', '38,1 × 19,05 mm, 1000 szt.'],
  ['J-17-2618', '178392', '50,8 × 25,4 mm, 1000 szt.', '50,8 × 25,4 mm, 1000 szt.'],
  ['J-18-2618', '178393', '76,2 × 25,4 mm, 1000 szt.', '76,2 × 25,4 mm, 1000 szt.'],
  ['J-7-2618', '178394', '69,85 × 31,75 mm, 850 szt.', '69,85 × 31,75 mm, 850 szt.'],
  ['J-19-2618', '178395', '76,2 × 50,8 mm, 750 szt.', '76,2 × 50,8 mm, 750 szt.'],
  ['J-55-2618', '178396', '101,6 × 50,8 mm, 750 szt.', '101,6 × 50,8 mm, 750 szt.'],
  ['J-76-2618', '178397', '101,6 × 76,2 mm, 750 szt.', '101,6 × 76,2 mm, 750 szt.'],
  ['J-25-2618', '178398', '101,6 × 152,4 mm, 300 szt.', '101,6 × 152,4 mm, 300 szt.'],
]

export const bradyJ7300Eko2618: Product = {
  ...wspolneJ7300,
  id: 'brady-j-19-2618',
  slug: 'brady-j-19-2618',
  name: 'Ekologiczne etykiety poliestrowe Brady B-2618 do drukarki J7300',
  seoTitle: 'Brady B-2618 — ekologiczne etykiety poliestrowe do J7300',
  seoDescription: 'Ekologiczne etykiety Brady B-2618 z poliestru z recyklingu, UL, od −40 do 100 °C, do Brady J7300 (BradyJet). PN: J-19-2618, J-55-2618, J-25-2618.',
  shortDescription: 'Brady B-2618 to matowe etykiety z białego poliestru zawierającego PET z recyklingu, w jedenastu rozmiarach, od 25,4 × 12,7 do 101,6 × 152,4 mm. Do drukarki Brady J7300.',
  description: 'Etykiety B-2618 to matowy biały poliester do druku atramentowego. Folia zawiera poliester z recyklingu (PET), dzięki czemu materiał łączy trwałość poliestru z mniejszym wpływem na środowisko. Trwałość połączenia zapewnia klej akrylowy, który przylega do gładkich powierzchni. Materiał jest uznany przez UL (UL Recognised), więc nadaje się na tabliczki znamionowe. Etykiety stosuje się też do znakowania ogólnego, kodów kreskowych i grafiki wysokiej jakości. Służą do śledzenia aktywów, oznaczania podzespołów i sprzętu oraz do kontroli i inwentaryzacji.\n\nEtykiety występują w jedenastu rozmiarach, które zaczynają się od 25,4 × 12,7 mm, a kończą na 101,6 × 152,4 mm. Najmniejsze rolki liczą po 1000 sztuk, a największa 300 sztuk. Etykiety 38,1 × 12,7 mm układają się w dwóch kolumnach obok siebie.\n\nFolia o grubości 0,1118 mm ma górną granicę temperatury użytkowania 100 °C, a dolną −40 °C. Chemikalia, oleje, woda, korozja i wilgoć jej nie szkodzą. Drukarka J7300 nanosi tusze w pełnej palecie kolorów, a układ Smart Cell przekazuje jej dane rolki.',
  sameAs: 'https://www.brady.eu/labels/sustainable-matt-white-polyester-labels-for-j7300-printer-cps-5071797',
  images: [
    '/images/products/brady/j-37-2618.png',
    '/images/products/brady/j-7-2618.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-37-2618 na uchwycie z białymi etykietami 38,1 × 12,7 mm ułożonymi w dwóch kolumnach',
    'Rolka Brady J-7-2618 z białymi etykietami z poliestru ekologicznego o wymiarach 69,85 × 31,75 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolki etykiet wykrawanych J- do druku atramentowego' },
    { name: 'Materiał', value: 'B-2618' },
    { name: 'Typ materiału', value: 'poliester do druku atramentowego z dodatkiem PET z recyklingu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,1118 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, oleje, woda, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 mm do 101,6 × 152,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '300–1000, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Rozpoznawanie rolki', value: SMART_CELL },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: EKO_2618.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: EKO_2618.map(([pn, , nazwa, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ekologiczne etykiety poliestrowe ${nazwa}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba etykiet na rolce.\n\nEtykiety mają od 25,4 × 12,7 do 101,6 × 152,4 mm. Rolki liczą od 300 do 1000 sztuk.',
  },
  faq: [
    { question: 'Co jest ekologicznego w etykietach B-2618?', answer: 'Folia zawiera poliester z recyklingu (PET). Materiał zachowuje trwałość poliestru, a ma mniejszy wpływ na środowisko.' },
    { question: 'Czy etykiety B-2618 nadają się na tabliczki znamionowe?', answer: 'Tak. Materiał jest uznany przez UL (UL Recognised) i pracuje w temperaturze od −40 do 100 °C.' },
    { question: 'Jakie rozmiary etykiet B-2618 są dostępne?', answer: 'Jedenaście rozmiarów, od 25,4 × 12,7 do 101,6 × 152,4 mm. Wybrany rozmiar drukuje [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Tabliczki znamionowe', 'Śledzenie aktywów i kody kreskowe', 'Oznaczanie komponentów, urządzeń i inwentaryzacja'],
}

export const bradyJ7300Poliester: Product[] = [
  bradyJ7300Poliester2569,
  bradyJ7300PermaShield2569,
  bradyJ7300PermaShield2475,
  bradyJ7300PoliesterUL2475,
  bradyJ7300Morskie2585,
  bradyJ7300Eko2618,
  bradyJ7300ToughWash2855,
]

export const bradyJ7300PoliesterSekcje: Record<string, 'ogolne' | 'lab' | 'zawieszki'> = {
  'brady-j-260-2569': 'ogolne',
  'brady-jpsl-261-2569': 'ogolne',
  'brady-jpsl-19-2475': 'ogolne',
  'brady-j-25-2475': 'ogolne',
  'brady-j-262-2585': 'ogolne',
  'brady-j-19-2618': 'ogolne',
  'brady-j-25-2855': 'ogolne',
}
