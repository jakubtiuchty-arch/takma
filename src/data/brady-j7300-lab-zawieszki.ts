import type { Product } from './products'
import { wspolneJ7300 } from './brady-j7300-wspolne'

// Materiały Brady J- i JC- do BradyJet J7300: etykiety laboratoryjne i kriogeniczne (polipropylen B-7425J, FreezerBondz B-2492)
// oraz zawieszki i opaski z rzepem (poliester B-2551, B-2414). Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.

// ---------------------------------------------------------------------------
// Polipropylen B-7425J odporny na chemikalia (cps-4854370), 23 PN + J-77-7425J z rodziny cps-5452402 (ten sam materiał B-7425J)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk na rolce, kształt, pojemność probówki]; kształt: R = prostokąt, K = prostokąt i koło (średnica w ostatnim polu)
const PP_7425J: [string, string, string, string, string, string, string][] = [
  ['J-152-7425J', '170479', '25,4', '9,53', '1000', 'R', '0,5 mL'],
  ['J-249-7425J', '176631', '25,4', '9,53', '1000', 'K 9,53', '0,5 mL'],
  ['J-53-7425J', '176613', '50,8', '12,7', '1000', 'R', ''],
  ['J-59-7425J', '176607', '25,4', '12,7', '1000', 'R', '0,5 mL'],
  ['J-251-7425J', '176633', '25,4', '12,7', '1000', 'K 11,18', '0,5 mL'],
  ['J-136-7425J', '176608', '38,1', '19,05', '1000', 'R', '4 mL'],
  ['J-256-7425J', '170464', '33,02', '15,24', '1000', 'R', '2 mL'],
  ['J-37-7425J', '176635', '12,7', '38,1', '1000', 'R', '4 mL'],
  ['J-88-7425J', '176634', '25,4', '19,05', '1000', 'R', '1,5 mL'],
  ['J-179-7425J', '176606', '25,4', '25,4', '1000', 'R', '2 mL'],
  ['J-235-7425J', '176609', '38,1', '25,4', '1000', 'R', '4 mL'],
  ['J-156-7425J', '170478', '48,26', '25,4', '1000', 'R', '8 mL'],
  ['J-137-7425J', '176611', '50,8', '25,4', '1000', 'R', '8 mL'],
  ['J-18-7425J', '176615', '76,2', '25,4', '1000', 'R', '15 mL'],
  ['J-258-7425J', '176610', '38,1', '44,45', '1000', 'R', '4 mL'],
  ['J-19-7425J', '176616', '76,2', '50,8', '1000', 'R', '50 mL'],
  ['J-260-7425J', '176614', '55,12', '85,09', '500', 'R', ''],
  ['J-261-7425J', '176617', '74,93', '109,98', '300', 'R', ''],
  ['J-77-7425J', '178816', '101,6', '101,6', '300', 'R', ''],
  ['J-371-7425J', '176636', '88,9', '127', '300', 'R', '50 mL'],
  ['J-262-7425J', '176618', '104,9', '154,94', '250', 'R', ''],
]

// [PN, nr art., szerokość]; taśmy ciągłe 45,72 m
const PP_7425J_CIAGLE: [string, string, string][] = [
  ['JC-1125-7425J', '176584', '28,58'],
  ['JC-2250-7425J', '176585', '57,15'],
  ['JC-4000-7425J', '170463', '101,6'],
]

export const bradyJ7300Pp7425J: Product = {
  ...wspolneJ7300,
  id: 'brady-j-18-7425j',
  slug: 'brady-j-18-7425j',
  name: 'Etykiety polipropylenowe odporne na chemikalia Brady B-7425J do drukarki J7300',
  seoTitle: 'Brady B-7425J — etykiety odporne na chemikalia do J7300',
  seoDescription: 'Etykiety polipropylenowe Brady B-7425J do drukarki Brady J7300 (BradyJet): do probówek i fiolek, od −80 do 70 °C, druk kolorowy. PN: J-18-7425J, J-136-7425J.',
  shortDescription: 'Brady B-7425J to biały, matowy polipropylen do kolorowych etykiet na probówkach, fiolkach i butelkach laboratoryjnych. 21 rozmiarów wykrawanych i 3 taśmy ciągłe. Do drukarki Brady J7300.',
  description: 'Brady B-7425J to biały, matowy polipropylen z powłoką przyjmującą tusz atramentowy. Folia ma grubość 0,127 mm. Trwały klej akrylowy mocno wiąże ze szkłem, miedzią i stalą nierdzewną. Etykiety opisują probówki, fiolki, butelki, kolby do hodowli komórkowych, pudełka kriogeniczne i stojaki. Służą też do oznaczania substancji niebezpiecznych.\n\nKarta obejmuje dwadzieścia jeden rozmiarów etykiet wykrawanych i trzy taśmy ciągłe. Szerokość etykiet wykrawanych wynosi od 12,7 do 104,9 mm. Rolki zawierają od 250 do 1000 etykiet, a ich liczba zależy od wymiaru. Każda z trzech taśm ciągłych ma 45,72 m, a pozostałe wymiary to szerokość najwęższej 28,58 mm, środkowej 57,15 mm i najszerszej 101,6 mm. Dwa rozmiary mają dodatkowe koło o średnicy 9,53 albo 11,18 mm.\n\nNajniższa temperatura pracy to −80 °C, a najwyższa 70 °C. Etykiety wytrzymują autoklaw, zamrażarkę, kąpiel wodną 100 °C oraz ciekły azot. Są odporne na ścieranie, rozpuszczalniki i chemikalia. Wyrób spełnia wymagania RoHS (dyrektywy 2011/65/EU i 2015/863). Drukarka Brady J7300 nanosi na etykiety pełny kolor tuszami.',
  sameAs: 'https://www.brady.eu/labels/chemical-resistant-polypropylene-labels-for-bradyjet-j7300-colour-label-printer-cps-4854370',
  images: [
    '/images/products/brady/j-136-7425j.png',
    '/images/products/brady/j-88-7425j.png',
    '/images/products/brady/jc-4000-7425j.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-136-7425J na niebieskim uchwycie z wysuniętym paskiem białych etykiet polipropylenowych',
    'Arkusz z dwunastoma białymi etykietami prostokątnymi z polipropylenu B-7425J',
    'Rolka Brady JC-4000-7425J z wysuniętą białą taśmą ciągłą o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrawane i taśmy ciągłe na rolce, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'B-7425J' },
    { name: 'Typ materiału', value: 'polipropylen z powłoką przyjmującą tusz atramentowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,127 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Odporność', value: 'autoklaw, zamrażarka, kąpiel wodna 100 °C, ciekły azot, ścieranie, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: PP_7425J.map(([, , w, h]) => `${w} × ${h} mm`).join('; ') },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000, zależnie od rozmiaru' },
    { name: 'Szerokość taśmy ciągłej', value: PP_7425J_CIAGLE.map(([, , w]) => w).join(' / ') + ' mm' },
    { name: 'Długość taśmy ciągłej', value: '45,72 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'RoHS 2011/65/EU i 2015/863' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: [...PP_7425J, ...PP_7425J_CIAGLE].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...PP_7425J.map(([pn, , w, h, szt, ksztalt, probowka]) => {
      const zKolem = ksztalt.startsWith('K')
      return {
        partNumber: pn,
        name: `Brady ${pn} — etykieta polipropylenowa ${w} × ${h} mm, ${szt} szt.`,
        attributes: {
          Rozmiar: `${w} × ${h} mm, ${szt} szt.`,
          Kształt: zKolem ? `Prostokąt i koło Ø ${ksztalt.slice(2)} mm` : 'Prostokąt',
          ...(probowka ? { Probówka: probowka } : {}),
        },
        availability: 'unavailable' as const,
      }
    }),
    ...PP_7425J_CIAGLE.map(([pn, , w]) => ({
      partNumber: pn,
      name: `Brady ${pn} — taśma ciągła polipropylenowa ${w} mm × 45,72 m`,
      attributes: { Rozmiar: `ciągła ${w} mm × 45,72 m`, Kształt: 'Taśma ciągła' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nEtykiety wykrawane mają od 25,4 × 9,53 mm do 104,9 × 154,94 mm. Taśma ciągła ma 45,72 m długości.',
    Kształt: 'Kształt wykrojonej etykiety.\n\nDwa rozmiary mają obok prostokąta dodatkowe koło, a w tabeli podano jego średnicę. Taśma ciągła nie ma wykroju, a jej długość ustawia się w oprogramowaniu.',
    Probówka: 'Pojemność probówki lub fiolki, do której przewidziano dany rozmiar etykiety.\n\nW tej karcie wartości sięgają od 0,5 do 50 mL.',
  },
  faq: [
    { question: 'Jakie temperatury znosi polipropylen B-7425J?', answer: 'Materiał pracuje w zakresie od −80 do 70 °C. Etykiety wytrzymują zamrażarkę, ciekły azot, autoklaw i kąpiel wodną 100 °C.' },
    { question: 'Na jakich powierzchniach trzymają się etykiety B-7425J?', answer: 'Trwały klej akrylowy wiąże ze szkłem, miedzią i stalą nierdzewną. Materiał przeznaczono na powierzchnie gładkie.' },
    { question: 'Jakich kaset z tuszem wymaga ten materiał?', answer: 'Do druku potrzebne są kasety P-CMY-1 i P-K-1. Materiał ma układ Smart Cell, który rozpoznaje [Brady J7300](/produkt/brady-j7300) i automatycznie ustawia etykietę.' },
  ],
  applications: ['Probówki, fiolki i kolby w laboratorium', 'Pudełka i stojaki kriogeniczne', 'Oznaczanie substancji niebezpiecznych'],
}

// ---------------------------------------------------------------------------
// Kriogeniczne etykiety polipropylenowe B-7425J na wieczka fiolek (cps-5452400), 7 PN
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar, sztuk na rolce, przeznaczenie, etykiet w rzędzie]; wymiar: średnica albo szerokość × wysokość
const WIECZKA_7425J: [string, string, string, string, string, string][] = [
  ['J-396-7425J', '178781', 'Ø 6,35 mm', '2000', 'wieczka fiolek', '4'],
  ['J-143-7425J', '178782', 'Ø 9,53 mm', '2000', 'probówki, fiolki, wieczka', '4'],
  ['J-397-7425J', '178783', 'Ø 11,176 mm', '2000', 'probówki, fiolki, wieczka', '4'],
  ['J-144-7425J', '178784', 'Ø 12,7 mm', '1500', 'probówki, fiolki, wieczka', '3'],
  ['J-398-7425J', '178785', 'Ø 19,05 mm', '1500', 'probówki, fiolki, wieczka', '3'],
  ['J-257-7425J', '178779', '20,96 × 6,35 mm', '1500', 'mikropłytki', '2'],
  ['J-151-7425J', '178780', '50,8 × 6,35 mm', '1000', 'mikropłytki', '1'],
]

export const bradyJ7300Wieczka7425J: Product = {
  ...wspolneJ7300,
  id: 'brady-j-143-7425j',
  slug: 'brady-j-143-7425j',
  name: 'Kriogeniczne etykiety polipropylenowe na wieczka fiolek Brady B-7425J do drukarki J7300',
  seoTitle: 'Brady B-7425J — etykiety na wieczka fiolek do J7300',
  seoDescription: 'Kriogeniczne etykiety Brady B-7425J na wieczka fiolek do Brady J7300 (BradyJet): koła Ø 6,35–19,05 mm i paski do mikropłytek. PN: J-143-7425J, J-144-7425J.',
  shortDescription: 'Brady B-7425J w wersji na wieczka: pięć rozmiarów okrągłych oraz dwa paski do mikropłytek, od 1000 do 2000 sztuk na rolce. Do drukarki Brady J7300.',
  description: 'Okrągła etykieta z polipropylenu B-7425J zakrywa wieczko fiolki lub probówki, a wąski pasek opisuje mikropłytkę. Materiał jest biały i matowy, ma grubość 0,127 mm i powłokę przyjmującą tusz. Klej akrylowy wiąże trwale z gładką powierzchnią. Opis w kolorze nanosi się bezpośrednio przed naklejeniem.\n\nPięć rozmiarów jest okrągłych: 6,35 mm, 9,53 mm, 11,176 mm, 12,7 mm oraz 19,05 mm średnicy. Rozmiar 6,35 mm jest przeznaczony tylko na wieczka fiolek. Pozostałe koła pasują także do probówek kriogenicznych i do PCR. Dwa paski, 20,96 × 6,35 mm i 50,8 × 6,35 mm, oznaczają mikropłytki. Rolka zawiera od 1000 do 2000 sztuk, a w rzędzie mieści się od jednej do czterech etykiet.\n\nZakres temperatur pracy to od −80 do 70 °C. Materiał pracuje w zamrażarce, w autoklawie, w kąpieli wodnej 100 °C i w ciekłym azocie. Opiera się też ścieraniu, rozpuszczalnikom i chemikaliom. Spełnia RoHS w wersji z dyrektywą 2011/65/EU wraz z uzupełnieniem 2015/863. Pełnokolorowy nadruk powstaje w drukarce Brady J7300, a rolka ma gilzę o średnicy 76,2 mm.',
  sameAs: 'https://www.brady.eu/labels/chemical-resistant-cryogenic-polypropylene-laboratory-vial-top-labels-for-j7300-printer-cps-5452400',
  images: [
    '/images/products/brady/j-143-7425j.png',
    '/images/products/brady/j-257-7425j.png',
    '/images/products/brady/j-151-7425j.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-143-7425J na niebieskim uchwycie z wysuniętym paskiem małych białych etykiet okrągłych',
    'Rolka Brady J-257-7425J z paskiem wąskich białych etykiet prostokątnych na mikropłytki',
    'Rolka Brady J-151-7425J z długimi, wąskimi etykietami prostokątnymi na uchwycie',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrawane na rolce, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'B-7425J' },
    { name: 'Typ materiału', value: 'polipropylen z powłoką przyjmującą tusz atramentowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,127 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Odporność', value: 'ciekły azot, zamrażarka, autoklaw, kąpiel wodna 100 °C, ścieranie, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: WIECZKA_7425J.map(([, , wym]) => wym).join('; ') },
    { name: 'Liczba sztuk na rolce', value: WIECZKA_7425J.map(([, , wym, szt]) => `${szt} (${wym})`).join('; ') },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'RoHS 2011/65/EU i 2015/863' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: WIECZKA_7425J.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WIECZKA_7425J.map(([pn, , wym, szt, przeznaczenie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — kriogeniczna etykieta polipropylenowa ${wym}, ${szt} szt.`,
    attributes: { Rozmiar: `${wym}, ${szt} szt.`, Przeznaczenie: przeznaczenie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koła albo wymiary paska oraz liczba sztuk na rolce.\n\nKoła mają od 6,35 do 19,05 mm, a paski 6,35 mm wysokości. Na rolce jest od 1000 do 2000 sztuk.',
    Przeznaczenie: 'Pojemniki, do których przewidziano dany rozmiar.\n\nNajmniejsze koło 6,35 mm służy tylko na wieczka fiolek. Pozostałe koła pasują też do probówek, a paski do mikropłytek.',
  },
  faq: [
    { question: 'Do czego służą etykiety okrągłe B-7425J?', answer: 'Etykieta okrągła zakrywa wieczko fiolki lub probówki. Rozmiar 6,35 mm jest przeznaczony tylko na wieczka fiolek, a większe pasują także do probówek kriogenicznych i do PCR.' },
    { question: 'Jakie etykiety oznaczają mikropłytki?', answer: 'Mikropłytki oznaczają dwa paski: 20,96 × 6,35 mm (1500 sztuk na rolce) i 50,8 × 6,35 mm (1000 sztuk na rolce).' },
    { question: 'W jakiej temperaturze pracują te etykiety?', answer: 'Zakres pracy wynosi od −80 do 70 °C. Materiał wytrzymuje ciekły azot, a rolki pasują do [Brady J7300](/produkt/brady-j7300).' },
  ],
  applications: ['Wieczka fiolek i probówek kriogenicznych', 'Probówki do PCR', 'Oznaczanie mikropłytek'],
}

// ---------------------------------------------------------------------------
// FreezerBondz Ultra-Thin B-2492 na wieczka fiolek (cps-5452401), 5 PN
// ---------------------------------------------------------------------------

// [PN, nr art., średnica, sztuk na rolce, środowisko]
const ULTRA_2492: [string, string, string, string, string][] = [
  ['J-396-2492', '178786', '6,35', '2000', 'autoklaw, zamrażarka'],
  ['J-143-2492', '178787', '9,53', '2000', 'ciekły azot, autoklaw'],
  ['J-397-2492', '178788', '11,176', '2000', 'ciekły azot, autoklaw'],
  ['J-144-2492', '178789', '12,7', '1500', 'ciekły azot, autoklaw'],
  ['J-398-2492', '178790', '19,05', '1500', 'ciekły azot, autoklaw'],
]

export const bradyJ7300Ultra2492: Product = {
  ...wspolneJ7300,
  id: 'brady-j-143-2492',
  slug: 'brady-j-143-2492',
  name: 'Etykiety poliestrowe FreezerBondz Ultra-Thin Brady B-2492 na wieczka fiolek do drukarki J7300',
  seoTitle: 'Brady FreezerBondz Ultra-Thin B-2492 — etykiety do J7300',
  seoDescription: 'Cienkie etykiety Brady FreezerBondz B-2492 na wieczka fiolek do Brady J7300 (BradyJet), od −196 do 100 °C. PN: J-143-2492, J-144-2492, J-398-2492.',
  shortDescription: 'Brady FreezerBondz Ultra-Thin B-2492 to cienkie, okrągłe etykiety poliestrowe na wieczka fiolek i probówek, od −196 do 100 °C. Do drukarki Brady J7300.',
  description: 'FreezerBondz B-2492 to biała, matowa folia poliestrowa wykrojona w koła. Cienki materiał ma 0,11 mm grubości i przyjmuje tusz atramentowy. Klej akrylowy jest trwały i łączy się z gładką, zakrzywioną powierzchnią. Etykiety pasują do wieczek fiolek, probówek kriogenicznych, probówek do PCR i innych probówek. Kolorowy nadruk ułatwia odróżnienie próbek i ogranicza pomyłki.\n\nŚrednice rosną od 6,35 do 19,05 mm, a pośrednie to 9,53, 11,176 oraz 12,7 mm. Trzy najmniejsze rolki zawierają po 2000 etykiet, a dwie największe po 1500. W rzędzie mieszczą się cztery etykiety mniejszych średnic albo trzy etykiety większych. Od średnicy 9,53 mm środowiska pracy obejmują ciekły azot, kąpiel wodną 100 °C, autoklaw i zamrażarkę. Przy średnicy 6,35 mm wymieniono tylko autoklaw i zamrażarkę.\n\nFolia pracuje w temperaturach od −196 do 100 °C. Etykiety opierają się chemikaliom i ścieraniu. Zgodność z RoHS potwierdzają dyrektywy 2011/65/EU oraz 2015/863. Etykiety stosuje się w laboratoriach i w ochronie zdrowia. Do druku służy kolorowa drukarka Brady J7300.',
  sameAs: 'https://www.brady.eu/labels/freezerbondz-ultra-thin-cryogenic-polyester-laboratory-vial-top-labels-for-j7300-inkjet-printer-cps-5452401',
  images: [
    '/images/products/brady/j-143-2492.png',
    '/images/products/brady/j-398-2492.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-143-2492 na niebieskim uchwycie z paskiem małych białych etykiet okrągłych z poliestru',
    'Rolka Brady J-398-2492 z paskiem większych białych etykiet okrągłych o średnicy 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety okrągłe wykrawane na rolce, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'FreezerBondz B-2492' },
    { name: 'Typ materiału', value: 'poliester kriogeniczny z powłoką przyjmującą tusz atramentowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,11 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, ścieranie, wysoka i niska temperatura; środowiska wg wariantu (autoklaw, zamrażarka, kąpiel wodna 100 °C, ciekły azot)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: ULTRA_2492.map(([, , d]) => `Ø ${d} mm`).join('; ') },
    { name: 'Liczba sztuk na rolce', value: ULTRA_2492.map(([, , d, szt]) => `${szt} (Ø ${d} mm)`).join('; ') },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'RoHS 2011/65/EU (zgodność z 2015/863)' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: ULTRA_2492.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ULTRA_2492.map(([pn, , d, szt, srodowisko]) => ({
    partNumber: pn,
    name: `Brady ${pn} — okrągła etykieta poliestrowa Ø ${d} mm, ${szt} szt.`,
    attributes: { Rozmiar: `Ø ${d} mm, ${szt} szt.`, Środowisko: srodowisko },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica okrągłej etykiety i liczba sztuk na rolce.\n\nŚrednica wynosi od 6,35 do 19,05 mm, a na rolce jest 1500 albo 2000 etykiet.',
    Środowisko: 'Środowiska pracy wymienione dla danego rozmiaru.\n\nRozmiar 6,35 mm ma wymieniony autoklaw i zamrażarkę. Pozostałe rozmiary mają także kąpiel wodną 100 °C i ciekły azot.',
  },
  faq: [
    { question: 'Jaki zakres temperatur obejmuje FreezerBondz Ultra-Thin B-2492?', answer: 'Folia pracuje w zakresie od −196 do 100 °C. Dla rozmiarów od 9,53 mm wymieniono ciekły azot, autoklaw, zamrażarkę i kąpiel wodną 100 °C.' },
    { question: 'Jakie rozmiary oferuje ta karta?', answer: 'Etykiety okrągłe mają średnicę 6,35, 9,53, 11,176, 12,7 albo 19,05 mm. Rolki zawierają po 2000 albo 1500 sztuk.' },
    { question: 'Jakiej drukarki wymaga ten materiał?', answer: 'Materiał drukuje [Brady J7300](/produkt/brady-j7300) z kasetami P-CMY-1 i P-K-1. Rolka ma układ Smart Cell i gilzę 76,2 mm.' },
  ],
  applications: ['Wieczka fiolek i probówek kriogenicznych', 'Probówki do PCR', 'Oznaczanie próbek w laboratorium i w ochronie zdrowia'],
}

// ---------------------------------------------------------------------------
// Zawieszki LOTO B-2551 z nadrukiem fabrycznym z tyłu: OSHAF, OSHAG, OSHAB — trzy pojedyncze PN w jednej karcie
// ---------------------------------------------------------------------------

// [PN, nr art., wersja, nagłówek, tekst fabryczny]
const LOTO_2551: [string, string, string, string, string][] = [
  ['J-392-2551-OSHAF', '178791', 'F', 'DANGER', 'zdejmuje tylko podpisany'],
  ['J-392-2551-OSHAB', '178792', 'B', 'DANGER', 'zdjęcie grozi zwolnieniem'],
  ['J-392-2551-OSHAG', '178793', 'G', 'PELIGRO', 'nie uruchamiać (hiszp.)'],
]

export const bradyJ7300Loto2551: Product = {
  ...wspolneJ7300,
  id: 'brady-j-392-2551-oshaf',
  slug: 'brady-j-392-2551-oshaf',
  name: 'Zawieszki LOTO Brady B-2551 z nadrukiem fabrycznym z tyłu do drukarki J7300',
  seoTitle: 'Brady B-2551 — zawieszki LOTO z nadrukiem do J7300',
  seoDescription: 'Zawieszki LOTO Brady B-2551 do Brady J7300 (BradyJet): przód do druku, tył z nadrukiem OSHA, 82,55 × 146,05 mm. PN: J-392-2551-OSHAF, -OSHAB, -OSHAG.',
  shortDescription: 'Brady J-392-2551-OSHAF, -OSHAB i -OSHAG to zawieszki LOTO z poliestru, z przodem do zadruku i fabrycznym nadrukiem OSHA z tyłu. Do drukarki Brady J7300.',
  description: 'Zawieszki B-2551 do blokady LOTO mają jedną stronę zadrukowaną fabrycznie, a drugą do zadruku w drukarce J7300. Wykonano je z grubego, białego poliestru o grubości 0,386 mm z winylową powłoką przyjmującą tusz. Otwór o średnicy 15,875 mm służy do zawieszenia. Zawieszki oznaczają źródła energii w czasie blokady oraz przeglądy i prace konserwacyjne.\n\nTrzy wersje różnią się nadrukiem fabrycznym. Układy F i B mają nagłówek DANGER (niebezpieczeństwo). W układzie F zawieszkę może zdjąć tylko osoba, która ją podpisała. W układzie B nieuprawnione zdjęcie grozi natychmiastowym zwolnieniem. Układ G ma nagłówek PELIGRO (to samo po hiszpańsku) i hiszpańskie ostrzeżenie, by nie uruchamiać urządzenia.\n\nWymiar zawieszki to 82,55 × 146,05 mm, z czego do zadruku służy pole 82,55 × 102,11 mm. W opakowaniu jest 200 sztuk. Poliester pracuje od −40 do 60 °C. Odporność dotyczy ścierania, olejów, rozpuszczalników oraz rozdarcia. Warunkiem zgodności z OSHA 1910.145(f) jest nadruk słowa sygnałowego i głównego komunikatu. Wydruk na przodzie jest kolorowy i powstaje w drukarce Brady J7300.',
  sameAs: 'https://www.brady.eu/labels/heavy-duty-polyester-tags-for-j7300-inkjet-printer-pid-j-392-2551-oshaf',
  images: [
    '/images/products/brady/j-392-2551-oshaf.png',
    '/images/products/brady/j-392-2551-oshab.png',
    '/images/products/brady/j-392-2551-oshag.png',
  ],
  imageDescriptions: [
    'Zawieszka LOTO Brady J-392-2551-OSHAF z nagłówkiem DANGER i fabrycznym tekstem o zdejmowaniu przez osobę podpisaną',
    'Zawieszka LOTO Brady J-392-2551-OSHAB z nagłówkiem DANGER i fabrycznym tekstem o zwolnieniu za nieuprawnione zdjęcie',
    'Zawieszka LOTO Brady J-392-2551-OSHAG z nagłówkiem PELIGRO i hiszpańskim ostrzeżeniem oraz polami na nazwisko i datę',
  ],
  specifications: [
    { name: 'Typ', value: 'Zawieszki wykrawane na rolce, przód do druku atramentowego, tył z nadrukiem fabrycznym (Smart Cell)' },
    { name: 'Materiał', value: 'B-2551' },
    { name: 'Typ materiału', value: 'poliester dużej wytrzymałości z winylową powłoką przyjmującą tusz' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,386 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Odporność', value: 'ścieranie, olej, rozpuszczalniki i chemikalia, rozdarcie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '82,55 × 146,05 mm' },
    { name: 'Pole nadruku', value: '82,55 × 102,11 mm' },
    { name: 'Otwór', value: 'okrągły, 15,875 mm; jeden otwór' },
    { name: 'Liczba sztuk na rolce', value: '200' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po zadrukowaniu wymaganym słowem sygnałowym i głównym komunikatem' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: LOTO_2551.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: LOTO_2551.map(([pn, , wersja, naglowek, tekst]) => ({
    partNumber: pn,
    name: `Brady ${pn} — zawieszka LOTO, układ ${wersja} z nagłówkiem ${naglowek}, 200 szt.`,
    attributes: { Rozmiar: '82,55 × 146,05 mm, 200 szt.', Wersja: `${wersja}, nagłówek ${naglowek}`, 'Tekst fabryczny': tekst },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary zawieszki i liczba sztuk na rolce.\n\nWszystkie wersje mają 82,55 × 146,05 mm i po 200 sztuk na rolce.',
    Wersja: 'Układ nadruku fabrycznego oznaczony literą F, B albo G.\n\nUkłady F i B mają nagłówek DANGER (niebezpieczeństwo), a układ G nagłówek PELIGRO (to samo po hiszpańsku).',
    'Tekst fabryczny': 'Treść fabrycznego nadruku, która odróżnia wersje.\n\nW układzie F zawieszkę zdejmuje tylko osoba, która ją podpisała. W układzie B zdjęcie bez uprawnień grozi natychmiastowym zwolnieniem. Układ G ma hiszpańskie ostrzeżenie, by nie uruchamiać urządzenia.',
  },
  faq: [
    { question: 'Czym różnią się wersje F, B i G?', answer: 'Różni je nadruk fabryczny. Wersje F i B mają nagłówek DANGER, a wersja G nagłówek PELIGRO i hiszpański tekst. Wersje F i B różnią się treścią o zdejmowaniu zawieszki.' },
    { question: 'Czy zawieszki spełniają wymagania OSHA?', answer: 'Spełniają OSHA 1910.145(f) po zadrukowaniu wymaganym słowem sygnałowym i głównym komunikatem.' },
    { question: 'Którą stronę zawieszki drukuje się w drukarce?', answer: 'Drukuje się przód zawieszki w [Brady J7300](/produkt/brady-j7300). Tył ma nadruk fabryczny.' },
  ],
  applications: ['Blokada i oznakowanie źródeł energii (LOTO)', 'Tagowanie kontrolne', 'Zawieszki przy pracach konserwacyjnych'],
}

// ---------------------------------------------------------------------------
// BradyGrip B-2414 — etykiety z rzepem do druku (pid-jc-1000-2414 i pid-176590 to ten sam PN), jeden PN
// ---------------------------------------------------------------------------

export const bradyJ7300BradyGrip: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-1000-2414',
  slug: 'brady-jc-1000-2414',
  name: 'Etykiety z rzepem do druku BradyGrip Brady JC-1000-2414 do drukarki J7300',
  seoTitle: 'Brady BradyGrip JC-1000-2414 — etykiety z rzepem do J7300',
  seoDescription: 'Etykiety z rzepem Brady BradyGrip B-2414 do Brady J7300 (BradyJet): 25,4 mm × 22,86 m, do przewodów i kabli. PN: JC-1000-2414, nr art. 176590.',
  shortDescription: 'Brady BradyGrip JC-1000-2414 to rolka etykiet z rzepem haczykowym 25,4 mm × 22,86 m do oznaczania przewodów i kabli. Do drukarki Brady J7300.',
  description: 'BradyGrip to etykiety z rzepem haczykowym, które drukuje się w drukarce J7300. Wydrukowaną etykietę przykłada się do rolki rzepa ONE-WRAP, a potem owija wokół przewodu lub wiązki. Opaskę wolno zdjąć i założyć gdzie indziej. Rolka ONE-WRAP nie wchodzi w skład zakupu. Materiał służy do znakowania przewodów i kabli.\n\nNa rolce nawinięto 22,86 m taśmy, a jej szerokość to 25,4 mm. Podłożem jest poliester: biały, matowy, o grubości 0,406 mm. Zamiast kleju działa rzep haczykowy, więc etykieta jest zdejmowalna i przestawna. Rolka jest ciągła, więc oprogramowanie określa długość każdego wydruku. Kolor nadruku ułatwia szybkie odnalezienie wiązki podczas instalacji, diagnostyki i napraw. Druk na żądanie pozwala przygotować opis w miejscu pracy. Karta obejmuje jeden numer, JC-1000-2414, o numerze artykułu 176590.\n\nMateriał pracuje do 50 °C. Jest odporny na ścieranie, paliwo, olej i rozpuszczalniki. Etykiety drukuje się kolorowo w drukarce Brady J7300. Rolka ma gilzę 76,2 mm i układ Smart Cell.',
  sameAs: 'https://www.brady.eu/labels/bradygrip-print-on-hook-labels-featuring-velcro-brand-hook-for-bradyjet-j7300-colour-label-printer-pid-jc-1000-2414',
  images: ['/images/products/brady/jc-1000-2414.png'],
  imageDescriptions: ['Rolka Brady JC-1000-2414 na niebieskim uchwycie z wysuniętą białą taśmą z rzepem haczykowym o szerokości 25,4 mm'],
  specifications: [
    { name: 'Part Number', value: 'JC-1000-2414' },
    { name: 'Numer artykułu Brady', value: '176590' },
    { name: 'Typ', value: 'Rolka taśmy ciągłej z rzepem haczykowym, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'BradyGrip B-2414' },
    { name: 'Typ materiału', value: 'poliester z powłoką przyjmującą tusz atramentowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'rzep haczykowy; etykieta zdejmowalna i przestawna' },
    { name: 'Grubość', value: '0,406 mm' },
    { name: 'Temperatura pracy', value: 'do 50 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwo, olej, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '25,4 mm' },
    { name: 'Długość taśmy', value: '22,86 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
  ],
  faq: [
    { question: 'Do czego służą etykiety BradyGrip?', answer: 'Służą do oznaczania przewodów i kabli. Wydrukowaną etykietę przykłada się do rolki rzepa ONE-WRAP i owija wokół wiązki.' },
    { question: 'Czy w zestawie jest rolka ONE-WRAP?', answer: 'Nie. Rolkę rzepa ONE-WRAP kupuje się osobno. Karta obejmuje tylko etykiety z rzepem haczykowym.' },
    { question: 'Jakiej drukarki wymaga materiał BradyGrip?', answer: 'Materiał drukuje [Brady J7300](/produkt/brady-j7300) z kasetami P-CMY-1 i P-K-1. Rolka ma długość 22,86 m i szerokość 25,4 mm.' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Kolorowe znaczniki wiązek przewodów', 'Etykiety przestawne przy instalacjach'],
}

// ---------------------------------------------------------------------------
// FreezerBondz B-2492, kriogeniczny poliester (cps-4854378), 7 PN
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, kształt (R = prostokąt, K = prostokąt i koło), pojemność probówki]
const FREEZERBONDZ_2492: [string, string, string, string, string, string][] = [
  ['J-152-2492', '176647', '25,4', '9,53', 'R', '0,5 mL'],
  ['J-249-2492', '176644', '25,4', '9,53', 'K', '0,5 mL'],
  ['J-59-2492', '176641', '25,4', '12,7', 'R', '2 mL'],
  ['J-250-2492', '176643', '25,4', '12,7', 'K', '2 mL'],
  ['J-251-2492', '176645', '25,4', '12,7', 'K', '0,5 mL'],
  ['J-179-2492', '176642', '25,4', '25,4', 'R', '2 mL'],
  ['J-156-2492', '176646', '48,26', '25,4', 'R', '8 mL'],
]

export const bradyJ7300FreezerBondz2492: Product = {
  ...wspolneJ7300,
  id: 'brady-j-156-2492',
  slug: 'brady-j-156-2492',
  name: 'Kriogeniczne etykiety poliestrowe FreezerBondz Brady B-2492 do drukarki J7300',
  seoTitle: 'Brady FreezerBondz B-2492 — etykiety kriogeniczne do J7300',
  seoDescription: 'Kriogeniczne etykiety Brady FreezerBondz B-2492 do Brady J7300 (BradyJet): probówki i fiolki, od −196 do 100 °C. PN: J-156-2492, J-179-2492, J-59-2492.',
  shortDescription: 'Brady FreezerBondz B-2492 to biały poliester do kolorowych etykiet na probówkach i fiolkach, także zamrożonych, od −196 do 100 °C. Siedem rozmiarów. Do drukarki Brady J7300.',
  description: 'FreezerBondz B-2492 to poliester kriogeniczny, biały i matowy, o grubości 0,11 mm. Służy do opisu próbek w laboratorium. Specjalna powłoka wierzchnia chroni kolorowy nadruk przed chemikaliami. Klej akrylowy mocno wiąże z gładkimi, zakrzywionymi powierzchniami probówek i fiolek. Etykietę można nakleić na zamrożoną powierzchnię, więc zawartość próbki nie przechodzi zbędnego rozmrażania. Nadruk w kolorze pozwala szybciej rozpoznać pojedynczą próbkę albo całą grupę próbek.\n\nKarta obejmuje siedem rozmiarów, każdy po 1000 sztuk na rolce. Najmniejszy rozmiar ma 9,53 mm wysokości i 25,4 mm szerokości, a największy 48,26 mm szerokości. Trzy rozmiary mają obok prostokąta dodatkowe koło, a cztery są zwykłymi prostokątami. Każdy rozmiar przewidziano do probówek o pojemności od 0,5 do 8 mL.\n\nZakres temperatur obejmuje od −196 do 100 °C. Środowiska pracy to ciekły azot, zamrażarka, autoklaw oraz kąpiel wodna 100 °C. Wykazują odporność na alkohol, rozpuszczalniki i chemikalia. Materiał stosuje się w laboratoriach oraz w szpitalach. Tuszem drukuje się na nich w drukarce Brady J7300, która rozpoznaje rolkę o gilzie 76,2 mm dzięki układowi Smart Cell.',
  sameAs: 'https://www.brady.eu/labels/freezerbondz-cryogenic-polyester-labels-for-bradyjet-j7300-colour-label-printer-cps-4854378',
  images: [
    '/images/products/brady/j-156-2492.png',
    '/images/products/brady/j-179-2492.png',
    '/images/products/brady/j-249-2492.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-156-2492 na niebieskim uchwycie z wysuniętym paskiem białych etykiet prostokątnych z poliestru',
    'Rolka Brady J-179-2492 z paskiem białych etykiet kwadratowych o boku 25,4 mm',
    'Rolka Brady J-249-2492 z paskiem białych etykiet z częścią okrągłą',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrawane na rolce, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'FreezerBondz B-2492' },
    { name: 'Typ materiału', value: 'poliester kriogeniczny z powłoką przyjmującą tusz atramentowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,11 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 100 °C' },
    { name: 'Odporność', value: 'ciekły azot, zamrażarka, autoklaw, kąpiel wodna 100 °C, alkohol, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: FREEZERBONDZ_2492.map(([, , w, h]) => `${w} × ${h} mm`).join('; ') },
    { name: 'Liczba sztuk na rolce', value: '1000' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: FREEZERBONDZ_2492.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: FREEZERBONDZ_2492.map(([pn, , w, h, ksztalt, probowka]) => ({
    partNumber: pn,
    name: `Brady ${pn} — kriogeniczna etykieta poliestrowa ${w} × ${h} mm, 1000 szt.`,
    attributes: {
      Rozmiar: `${w} × ${h} mm, 1000 szt.`,
      Kształt: ksztalt === 'K' ? 'Prostokąt i koło' : 'Prostokąt',
      Probówka: probowka,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nEtykiety mają od 25,4 × 9,53 mm do 48,26 × 25,4 mm i po 1000 sztuk na rolce.',
    Kształt: 'Kształt wykrojonej etykiety.\n\nTrzy rozmiary mają obok prostokąta dodatkowe koło, a pozostałe są zwykłymi prostokątami.',
    Probówka: 'Pojemność probówki lub fiolki, do której przewidziano dany rozmiar etykiety.\n\nW tej karcie wartości wynoszą 0,5, 2 albo 8 mL.',
  },
  faq: [
    { question: 'Czy etykietę FreezerBondz można nakleić na zamrożoną próbkę?', answer: 'Tak. Klej akrylowy wiąże także z zamrożoną powierzchnią, więc próbka nie musi się rozmrażać. Zakres pracy wynosi od −196 do 100 °C.' },
    { question: 'Jakie rozmiary obejmuje ta karta?', answer: 'Siedem rozmiarów od 25,4 × 9,53 mm do 48,26 × 25,4 mm, po 1000 sztuk na rolce. Trzy z nich mają dodatkowe koło obok prostokąta.' },
    { question: 'Jaka drukarka drukuje na materiale B-2492?', answer: 'Materiał drukuje [Brady J7300](/produkt/brady-j7300). Rolka ma układ Smart Cell i gilzę 76,2 mm.' },
  ],
  applications: ['Probówki i fiolki z próbkami zamrożonymi', 'Kolorowe oznaczanie próbek w laboratorium', 'Etykiety w ochronie zdrowia i szpitalach'],
}

// ---------------------------------------------------------------------------
// Zawieszki poliestrowe B-2551 (cps-4854382), 4 PN; zawieszki LOTO z nadrukiem fabrycznym to osobna karta
// ---------------------------------------------------------------------------

export const bradyJ7300Zawieszki2551: Product = {
  ...wspolneJ7300,
  id: 'brady-j-392-2551',
  slug: 'brady-j-392-2551',
  name: 'Zawieszki poliestrowe Brady B-2551 do drukarki J7300',
  seoTitle: 'Brady B-2551 — zawieszki poliestrowe do drukarki J7300',
  seoDescription: 'Zawieszki poliestrowe Brady B-2551 do Brady J7300 (BradyJet): 82,55 × 146,05 mm i 76,2 × 38,1 mm oraz taśmy ciągłe. PN: J-392-2551, J-374-2551, JC-2500-2551.',
  shortDescription: 'Brady B-2551 to biały, gruby poliester na zawieszki: dwie wykrojone zawieszki z otworem i dwie taśmy ciągłe. Do drukarki Brady J7300.',
  description: 'Brady B-2551 to gruby poliester z winylową powłoką przyjmującą tusz, przeznaczony na zawieszki ostrzegawcze i identyfikacyjne. Biały materiał ma matowe wykończenie i grubość 0,386 mm. Zawieszki oznaczają źródła energii przy blokadzie, przeglądach i pracach konserwacyjnych, a także w przestrzeniach zamkniętych i w magazynie. Służą też do ogólnego, wizualnego oznakowania miejsc pracy.\n\nMateriał występuje w czterech formach. Zawieszka 82,55 × 146,05 mm występuje po 200 sztuk na rolce, a zawieszka 76,2 × 38,1 mm po 500 sztuk. Każda ma jeden okrągły otwór, a w większej zawieszce ma on 15,875 mm. Taśmy ciągłe mają po 15,24 m i szerokość 63,5 albo 82,55 mm. Długość zawieszki z taśmy ustawia się w oprogramowaniu.\n\nPoliester znosi temperatury od −40 do 60 °C. Opiera się ścieraniu, olejom, rozpuszczalnikom i rozdarciu, a także nadaje się do pracy na zewnątrz. Zadrukowana wymaganym słowem sygnałowym i głównym komunikatem, odpowiada normie OSHA 1910.145(f). Pełny kolor na zawieszkach zapewnia drukarka Brady J7300.',
  sameAs: 'https://www.brady.eu/labels/polyester-tags-for-bradyjet-j7300-colour-label-printer-cps-4854382',
  images: [
    '/images/products/brady/j-392-2551.png',
    '/images/products/brady/j-374-2551.png',
    '/images/products/brady/jc-2500-2551.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-392-2551 na niebieskim uchwycie z białą zawieszką poliestrową z okrągłym otworem',
    'Rolka Brady J-374-2551 z wykrojonymi białymi zawieszkami o wymiarach 76,2 × 38,1 mm',
    'Rolka Brady JC-2500-2551 z białą taśmą ciągłą z poliestru o szerokości 63,5 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Zawieszki wykrawane i taśmy ciągłe na rolce, do druku atramentowego (Smart Cell)' },
    { name: 'Materiał', value: 'B-2551' },
    { name: 'Typ materiału', value: 'poliester dużej wytrzymałości z winylową powłoką przyjmującą tusz' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,386 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Odporność', value: 'ścieranie, olej, rozpuszczalniki i chemikalia, rozdarcie; do użytku na zewnątrz' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '82,55 × 146,05 mm; 76,2 × 38,1 mm' },
    { name: 'Liczba sztuk na rolce', value: '200 (82,55 × 146,05 mm); 500 (76,2 × 38,1 mm)' },
    { name: 'Otwór', value: 'okrągły, jeden; w zawieszce 82,55 × 146,05 mm ma 15,875 mm' },
    { name: 'Szerokość taśmy ciągłej', value: '63,5 / 82,55 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po zadrukowaniu wymaganym słowem sygnałowym i głównym komunikatem' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: 'J-392-2551: 170466; J-374-2551: 170467; JC-2500-2551: 176589; JC-3250-2551: 170468' },
  ],
  variants: [
    { partNumber: 'J-392-2551', name: 'Brady J-392-2551 — zawieszka poliestrowa 82,55 × 146,05 mm, 200 szt.', attributes: { Rozmiar: '82,55 × 146,05 mm, 200 szt.', Forma: 'Zawieszka z otworem' }, availability: 'unavailable' as const },
    { partNumber: 'J-374-2551', name: 'Brady J-374-2551 — zawieszka poliestrowa 76,2 × 38,1 mm, 500 szt.', attributes: { Rozmiar: '76,2 × 38,1 mm, 500 szt.', Forma: 'Zawieszka z otworem' }, availability: 'unavailable' as const },
    { partNumber: 'JC-2500-2551', name: 'Brady JC-2500-2551 — taśma ciągła z poliestru 63,5 mm × 15,24 m', attributes: { Rozmiar: 'ciągła 63,5 mm × 15,24 m', Forma: 'Taśma ciągła' }, availability: 'unavailable' as const },
    { partNumber: 'JC-3250-2551', name: 'Brady JC-3250-2551 — taśma ciągła z poliestru 82,55 mm × 15,24 m', attributes: { Rozmiar: 'ciągła 82,55 mm × 15,24 m', Forma: 'Taśma ciągła' }, availability: 'unavailable' as const },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary zawieszki albo szerokość i długość taśmy ciągłej.\n\nZawieszki mają 82,55 × 146,05 mm albo 76,2 × 38,1 mm. Taśmy mają po 15,24 m długości.',
    Forma: 'Sposób dostawy materiału.\n\nZawieszka jest wykrojona i ma okrągły otwór do zawieszenia. Taśma ciągła nie ma wykroju, a jej długość ustawia się w oprogramowaniu.',
  },
  faq: [
    { question: 'Jakie zawieszki obejmuje materiał B-2551?', answer: 'Dwie wykrojone zawieszki z okrągłym otworem, 82,55 × 146,05 mm (200 sztuk) i 76,2 × 38,1 mm (500 sztuk), oraz dwie taśmy ciągłe o szerokości 63,5 i 82,55 mm.' },
    { question: 'Czy zawieszki B-2551 spełniają wymagania OSHA?', answer: 'Spełniają OSHA 1910.145(f), jeśli zadrukuje się je wymaganym słowem sygnałowym i głównym komunikatem.' },
    { question: 'W jakiej temperaturze pracuje poliester B-2551?', answer: 'Od −40 do 60 °C. Zawieszki drukuje [Brady J7300](/produkt/brady-j7300) z kasetami P-CMY-1 i P-K-1.' },
  ],
  applications: ['Zawieszki blokady i oznakowania źródeł energii', 'Zawieszki w przestrzeniach zamkniętych i w magazynie', 'Ogólne oznakowanie miejsc pracy'],
}

export const bradyJ7300LabZawieszki: Product[] = [
  bradyJ7300Pp7425J,
  bradyJ7300Wieczka7425J,
  bradyJ7300FreezerBondz2492,
  bradyJ7300Ultra2492,
  bradyJ7300Zawieszki2551,
  bradyJ7300Loto2551,
  bradyJ7300BradyGrip,
]

export const bradyJ7300LabZawieszkiSekcje: Record<string, 'ogolne' | 'lab' | 'zawieszki'> = {
  'brady-j-18-7425j': 'lab',
  'brady-j-143-7425j': 'lab',
  'brady-j-156-2492': 'lab',
  'brady-j-143-2492': 'lab',
  'brady-j-392-2551': 'zawieszki',
  'brady-j-392-2551-oshaf': 'zawieszki',
  'brady-jc-1000-2414': 'zawieszki',
}
