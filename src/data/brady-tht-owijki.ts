import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Owijki samolaminujące, etykiety na przewody i kable oraz flagi Brady na rolkach z gilzą 76 mm (THT-, THTRO-, THTFT-)
// do przemysłowych drukarek Brady na rolki: i6100, i7100, i7500. Jedna karta na rodzinę materiału. 14.11.2026.

// ---------------------------------------------------------------------------
// Samolaminujące owijki winylowe B-427 (cps-4359655), jeden PN = jeden rozmiar i kolor
// ---------------------------------------------------------------------------

// [PN, rozmiar, liczba sztuk na rolce, kolor]
const OWIJKI_427: [string, string, string, string][] = [
  ['THT-80-427-5', '12,70 × 19,05 mm', '5 000 szt.', 'biały'],
  ['THT-61-427-5', '12,70 × 36,50 mm', '5 000 szt.', 'biały'],
  ['THT-127-427-3', '12,70 × 55,88 mm', '3 000 szt.', 'biały'],
  ['THT-26-427-1', '63,50 × 57,15 mm', '1 000 szt.', 'biały'],
  ['THT-81-427-1', '25,40 × 152,40 mm', '1 000 szt.', 'biały'],
  ['THT-64-427-3', '25,40 × 57,15 mm', '3 000 szt.', 'biały'],
  ['THT-75-427-3', '25,40 × 57,15 mm', '3 000 szt.', 'biały'],
  ['THT-131-427-3', '25,40 × 66,68 mm', '3 000 szt.', 'biały'],
  ['THT-56-427-10', '19,05 × 23,80 mm', '10 000 szt.', 'biały'],
  ['THT-8-427-10', '12,70 × 36,50 mm', '10 000 szt.', 'biały'],
  ['THT-64-427-3-YL', '25,40 × 57,15 mm', '3 000 szt.', 'żółty'],
  ['THT-75-427-3-YL', '25,40 × 57,15 mm', '3 000 szt.', 'żółty'],
  ['THT-27-427-1', '50,80 × 95,25 mm', '1 000 szt.', 'biały'],
  ['THT-117-427-5', '25,40 × 31,75 mm', '5 000 szt.', 'biały'],
  ['THT-116-427-5', '25,40 × 25,40 mm', '5 000 szt.', 'biały'],
  ['THT-65-427-3', '25,40 × 95,25 mm', '3 000 szt.', 'biały'],
  ['THT-10-427-3', '25,40 × 95,25 mm', '3 000 szt.', 'biały'],
  ['THT-65-427-3-YL', '25,40 × 95,25 mm', '3 000 szt.', 'żółty'],
  ['THT-10-427-3-YL', '25,40 × 95,25 mm', '3 000 szt.', 'żółty'],
  ['THT-9-427-10', '25,40 × 36,50 mm', '10 000 szt.', 'biały'],
  ['THT-74-427-10', '20,32 × 36,50 mm', '10 000 szt.', 'biały'],
  ['THT-9-427-10-YL', '25,40 × 36,50 mm', '10 000 szt.', 'żółty'],
  ['THT-73-427-10', '19,05 × 44,45 mm', '10 000 szt.', 'biały'],
]

export const bradyTHTOwijki427: Product = {
  ...wspolneTHT,
  id: 'brady-tht-80-427-5',
  slug: 'brady-tht-80-427-5',
  name: 'Samolaminujące owijki winylowe Brady B-427 na rolce 76 mm',
  seoTitle: 'Brady B-427 — owijki samolaminujące do i6100, i7100, i7500',
  seoDescription: 'Samolaminujące owijki winylowe Brady B-427, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-80-427-5, THT-64-427-3, THT-81-427-1.',
  shortDescription: 'Samolaminujące owijki winylowe B-427 w 23 numerach artykułów, białe i żółte, na rolkach po 1 000–10 000 sztuk. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-427 to folia winylowa, z której powstają owijki oznaczające przewody w sieciach teleinformatycznych i instalacjach elektrycznych. Etykieta ma białe pole nadruku oraz przezroczysty ogon. Po owinięciu ogon zakrywa tekst jak laminat. Folia nie podtrzymuje palenia, a jej powierzchnia jest matowa. Klej akrylowy jest trwały, a nadruk powstaje termotransferem.\n\nRodzina liczy 23 numery artykułów, w tym pięć żółtych o szerokości 25,40 mm. Szerokości etykiet mieszczą się między 12,70 a 63,50 mm, wysokości między 19,05 a 152,40 mm, a jedna rolka mieści od 1 000 do 10 000 sztuk. Dla owijki THT-80-427-5 pole nadruku ma 12,70 × 9,53 mm, a obsługiwany przewód Ø 2,54–3,05 mm (16–12 AWG).\n\nDane materiału: grubość 0,102 mm. Odporność obejmuje wodę, olej, wilgoć, chemikalia i pogodę. Zakres temperatur: −70…70 °C. Uznanie UL969 (plik MH17154) potwierdza nadruk taśmami R4300 i R6200, a wersję z uznaniem trzeba wskazać w zamówieniu. Taśma zalecana dla tej rodziny to R4300.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-self-laminating-vinyl-wire-cable-labels-cps-4359655',
  images: [
    '/images/products/brady/tht-80-427-5.png',
    '/images/products/brady/tht-64-427-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-80-427-5 na gilzie 76 mm z wysuniętym paskiem białych owijek winylowych 12,70 × 19,05 mm',
    'Rolka Brady THT-64-427-3 z białymi owijkami samolaminującymi 25,40 × 57,15 mm i przezroczystym ogonem',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące owijki na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 63,50 mm, wysokość od 19,05 do 152,40 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 1 000 do 10 000, zależnie od rozmiaru' },
    { name: 'Zakres średnicy przewodu', value: 'THT-80-427-5: od 2,54 do 3,05 mm (16–12 AWG)' },
    { name: 'Normy', value: 'UL969 (UL Recognised, plik MH17154) przy nadruku taśmami R4300 i R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (także i75-R4300, IP-R4300)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Uwagi o zgodności', value: 'i6100: bez numerów THT-80-427-5, THT-61-427-5, THT-127-427-3, THT-56-427-10, THT-8-427-10, THT-74-427-10 i THT-73-427-10' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: OWIJKI_427.map(([pn, rozmiar, sztuk, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — owijka samolaminująca ${rozmiar}, kolor ${kolor}`,
    attributes: { Rozmiar: rozmiar, 'Na rolce': sztuk, Kolor: kolor } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nWymiary sięgają od 12,70 × 19,05 mm do 25,40 × 152,40 mm.',
    'Na rolce': 'Liczba etykiet na jednej rolce.\n\nRolka liczy od 1 000 do 10 000 sztuk.',
    Kolor: 'Kolor folii, na której powstaje nadruk.\n\nBiały mają prawie wszystkie rozmiary. Żółty występuje w pięciu numerach artykułów o szerokości 25,40 mm.',
  },
  faq: [
    { question: 'Jaki przewód obejmuje owijka THT-80-427-5?', answer: 'Owijka THT-80-427-5 pasuje do przewodów o średnicy od 2,54 do 3,05 mm, czyli od 16 do 12 AWG. Pole nadruku ma 12,70 × 9,53 mm.' },
    { question: 'Jaką taśmę barwiącą stosuje się do owijek B-427?', answer: 'Zaleca się taśmę R4300. Uznanie UL969 obowiązuje przy nadruku taśmami R4300 i R6200. Owijki drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Czy owijki B-427 są dostępne w kolorze żółtym?', answer: 'Tak. Żółtą wersję mają rozmiary 25,40 × 36,50, 25,40 × 57,15 i 25,40 × 95,25 mm. Pozostałe numery artykułów są białe.' },
  ],
  applications: ['Znakowanie przewodów w telekomunikacji i transmisji danych', 'Oznaczanie okablowania w instalacjach elektrycznych', 'Opis kabli kolorem żółtym'],
}

// ---------------------------------------------------------------------------
// Owijki obrotowe B-427 THTRO (cps-4367688)
// ---------------------------------------------------------------------------

// [PN, rozmiar i liczba sztuk, pole nadruku]
const OWIJKI_RO: [string, string, string][] = [
  ['THTRO-292-427-3', '12,70 × 44,45 mm, 3 000 szt.', '12,70 × 17,78 mm'],
  ['THTRO-293-427-3', '12,70 × 69,85 mm, 3 000 szt.', '12,70 × 27,94 mm'],
  ['THTRO-295-427-1.5', '25,40 × 69,85 mm, 1 500 szt.', '25,40 × 27,94 mm'],
  ['THTRO-297-427-3.5', '25,40 × 30,48 mm, 3 500 szt.', '25,40 × 12,70 mm'],
  ['THTRO-294-427-2.5', '25,40 × 44,45 mm, 2 500 szt.', '25,40 × 17,78 mm'],
  ['THTRO-299-427', '50,80 × 79,38 mm, 700 szt.', '50,80 × 31,75 mm'],
  ['THTRO-298-427', '25,40 × 165,10 mm, 700 szt.', '25,40 × 66,04 mm'],
  ['THTRO-300-427', '50,80 × 165,10 mm, 350 szt.', '50,80 × 66,04 mm'],
  ['THTRO-296-427-1.5', '25,40 × 79,38 mm, 1 500 szt.', '25,40 × 31,75 mm'],
  ['THTRO-291-427-3', '31,75 × 55,88 mm, 3 000 szt.', '31,75 × 20,32 mm'],
]

export const bradyTHTOwijkiObrotowe: Product = {
  ...wspolneTHT,
  id: 'brady-thtro-292-427-3',
  slug: 'brady-thtro-292-427-3',
  name: 'Obrotowe owijki winylowe Brady B-427 THTRO na rolce 76 mm',
  seoTitle: 'Brady B-427 THTRO — owijki obrotowe do i6100, i7100, i7500',
  seoDescription: 'Obrotowe owijki winylowe Brady B-427 THTRO, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THTRO-292-427-3, THTRO-293-427-3, THTRO-300-427.',
  shortDescription: 'Obrotowe owijki winylowe B-427 w 10 rozmiarach, od 12,70 × 44,45 do 50,80 × 165,10 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Seria THTRO to owijki z funkcją obrotu, wykonane z folii winylowej B-427. Nadruk powstaje na białym polu, a przezroczysty pas po owinięciu zabezpiecza napis. Winyl jest matowy i trudno się pali. Klej akrylowy ma charakter trwały. Owijki trafiają na kable telekomunikacyjne, sieciowe i zasilające.\n\nDziesięć rozmiarów mieści się w przedziale 12,70–50,80 mm szerokości i 30,48–165,10 mm wysokości. Rolki liczą od 350 do 3 500 sztuk. Najmniejszy rozmiar, THTRO-292-427-3, ma pole nadruku 12,70 × 17,78 mm, a trzy takie etykiety leżą obok siebie. Obejmuje on przewód o Ø 2,69–5,66 mm (16–8 AWG).\n\nParametry folii: grubość 0,102 mm, praca w zakresie od −70 do 70 °C, odporność na wodę i olej, wilgoć, chemikalia oraz warunki atmosferyczne. Nadruk taśmą R4300 lub R6200 daje uznanie UL969 (plik MH17154); wersję UL należy wskazać przy zakupie. Zaleca się taśmę R4302.',
  sameAs: 'https://www.brady.eu/labels/self-laminating-vinyl-wrap-around-labels-rotating-for-76-mm-core-printers-cps-4367688',
  images: [
    '/images/products/brady/thtro-292-427-3.png',
    '/images/products/brady/thtro-297-427-3-5.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTRO-292-427-3 z paskiem obrotowych owijek winylowych 12,70 × 44,45 mm',
    'Rolka Brady THTRO-297-427-3.5 z owijkami obrotowymi 25,40 × 30,48 mm na gilzie 76 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Obrotowe owijki samolaminujące na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 50,80 mm, wysokość od 30,48 do 165,10 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 350 do 3 500, zależnie od rozmiaru' },
    { name: 'Zakres średnicy przewodu', value: 'THTRO-292-427-3: od 2,69 do 5,66 mm (16–8 AWG)' },
    { name: 'Normy', value: 'UL969 (UL Recognised, plik MH17154) przy nadruku taśmami R4300 i R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302 (także i75-R4302, IP-R4302)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: OWIJKI_RO.map(([pn, rozmiar, pole]) => ({
    partNumber: pn,
    name: `Brady ${pn} — owijka obrotowa ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Pole nadruku': pole } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWymiary rosną od 12,70 × 44,45 mm do 50,80 × 165,10 mm, a rolka liczy od 350 do 3 500 sztuk.',
    'Pole nadruku': 'Część etykiety, na której drukarka umieszcza tekst.\n\nSzerokość pola jest równa szerokości etykiety. Wysokość wynosi od 12,70 do 66,04 mm.',
  },
  faq: [
    { question: 'Jaki jest rozmiar pola nadruku w owijkach THTRO?', answer: 'Pole nadruku ma szerokość etykiety i wysokość od 12,70 do 66,04 mm. Najmniejsze pole to 12,70 × 17,78 mm, największe 50,80 × 66,04 mm.' },
    { question: 'Do jakiego przewodu pasuje owijka THTRO-292-427-3?', answer: 'Owijka obejmuje przewody o średnicy od 2,69 do 5,66 mm, czyli od 16 do 8 AWG. Na rolce mieści się 3 000 sztuk, po trzy w rzędzie.' },
    { question: 'Jaka taśma barwiąca pasuje do owijek THTRO?', answer: 'Zaleca się taśmę R4302. Wymóg UL969 spełnia nadruk taśmami R4300 i R6200. Owijki drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów w telekomunikacji', 'Oznaczanie okablowania w sieciach transmisji danych', 'Opis przewodów w instalacjach elektrycznych'],
}

// ---------------------------------------------------------------------------
// Etykiety winylowe B-427 AW na przewody i do probówek (cps-5416482)
// ---------------------------------------------------------------------------

// [PN, rozmiar i liczba sztuk]
const ETYKIETY_AW: [string, string][] = [
  ['THT-135-427-AW-3', '38,10 × 19,05 mm, 3 000 szt.'],
  ['THT-137-427-AW-3', '50,80 × 25,40 mm, 3 000 szt.'],
]

export const bradyTHTEtykiety427Aw: Product = {
  ...wspolneTHT,
  id: 'brady-tht-135-427-aw-3',
  slug: 'brady-tht-135-427-aw-3',
  name: 'Etykiety winylowe Brady B-427 AW na przewody i probówki, rolka 76 mm',
  seoTitle: 'Brady B-427 AW — etykiety na przewody, i6100, i7100, i7500',
  seoDescription: 'Etykiety winylowe Brady B-427 AW na przewody i probówki, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-135-427-AW-3, THT-137-427-AW-3.',
  shortDescription: 'Winylowe etykiety B-427 AW w dwóch rozmiarach, 38,10 × 19,05 i 50,80 × 25,40 mm, po 3 000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Do tej karty należą dwie etykiety z winylu B-427 w wersji AW. Służą w laboratorium do oznaczania probówek stożkowych, dużych probówek i fiolek, a także do znakowania przewodów i kabli. Etykieta owija obiekt, a przezroczysta część chroni nadruk. Folia jest biała, matowa i samogasnąca, z trwałym klejem akrylowym. Kablowe zastosowania obejmują telekomunikację, transmisję danych i elektrykę.\n\nWymiary: 38,10 × 19,05 mm oraz 50,80 × 25,40 mm. Każda rolka zawiera 3 000 etykiet. Mniejsza z nich odpowiada probówce o pojemności 50 mL i leży na rolce pojedynczo.\n\nZakres temperatur sięga od −70 °C (zamrażarka, ciekły azot) do 70 °C. Materiał o przekroju 0,102 mm odpiera wodę, olej, wilgoć oraz chemikalia. Norma UL969 obowiązuje dla nadruku taśmą R4300 lub R6200. Wersję z uznaniem UL należy wskazać w zamówieniu. Do nadruku zaleca się taśmę R4302.',
  sameAs: 'https://www.brady.eu/labels/cps-5416482',
  images: [
    '/images/products/brady/tht-135-427-aw-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-135-427-AW-3 na gilzie 76 mm z paskiem białych etykiet winylowych 38,10 × 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące etykiety na przewody i do probówek, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '38,10 × 19,05 mm i 50,80 × 25,40 mm' },
    { name: 'Liczba sztuk na rolce', value: '3 000' },
    { name: 'Normy', value: 'UL969 (UL Recognised, plik MH17154) przy nadruku taśmami R4300 i R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302 (także IP-R4302)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: ETYKIETY_AW.map(([pn, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta winylowa ${rozmiar}`,
    attributes: { Rozmiar: rozmiar } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nWersja 38,10 × 19,05 mm jest mniejsza, wersja 50,80 × 25,40 mm większa. Obie rolki liczą po 3 000 sztuk.',
  },
  faq: [
    { question: 'Do jakich probówek służy etykieta THT-135-427-AW-3?', answer: 'Etykieta o wymiarach 38,10 × 19,05 mm odpowiada probówce stożkowej o pojemności 50 mL. Rodzina obejmuje też zastosowania na fiolkach i dużych probówkach.' },
    { question: 'W jakich warunkach pracują etykiety B-427 AW?', answer: 'Folia wytrzymuje od −70 do 70 °C, w tym zamrażarkę i ciekły azot. Opiera się wodzie, olejowi, wilgoci i chemikaliom.' },
    { question: 'Jaką taśmą drukuje się etykiety B-427 AW?', answer: 'Zaleca się taśmę R4302. Etykiety drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Etykiety probówek stożkowych i fiolek w laboratorium', 'Znakowanie przewodów i kabli', 'Ogólna identyfikacja próbek'],
}

// ---------------------------------------------------------------------------
// Samolaminujące owijki winylowe B-417 o zwiększonej przyczepności (cps-3069340)
// ---------------------------------------------------------------------------

// [PN, rozmiar, liczba sztuk na rolce]
const OWIJKI_417: [string, string, string][] = [
  ['THT-80-417-5', '12,70 × 19,05 mm', '5 000 szt.'],
  ['THT-119-417-2.5', '38,10 × 38,10 mm', '2 500 szt.'],
  ['THT-26-417-1', '63,50 × 57,15 mm', '1 000 szt.'],
  ['THT-81-417-1', '25,40 × 152,40 mm', '1 000 szt.'],
  ['THT-64-417-3', '25,40 × 57,15 mm', '3 000 szt.'],
  ['THT-75-417-3', '25,40 × 57,15 mm', '3 000 szt.'],
  ['THT-83-417-0.5', '50,80 × 177,80 mm', '500 szt.'],
  ['THT-56-417-10', '19,05 × 23,80 mm', '10 000 szt.'],
  ['THT-8-417-10', '12,70 × 36,50 mm', '10 000 szt.'],
  ['THT-67-417-1.5', '50,80 × 57,15 mm', '1 500 szt.'],
  ['THT-66-417-1.5', '48,26 × 80,95 mm', '1 500 szt.'],
  ['THT-116-417-5', '25,40 × 25,40 mm', '5 000 szt.'],
  ['THT-65-417-3', '25,40 × 95,25 mm', '3 000 szt.'],
  ['THT-9-417-10', '25,40 × 36,50 mm', '10 000 szt.'],
]

export const bradyTHTOwijki417: Product = {
  ...wspolneTHT,
  id: 'brady-tht-80-417-5',
  slug: 'brady-tht-80-417-5',
  name: 'Samolaminujące owijki winylowe Brady B-417 o zwiększonej przyczepności, rolka 76 mm',
  seoTitle: 'Brady B-417 — owijki z mocnym klejem do i6100, i7100, i7500',
  seoDescription: 'Samolaminujące owijki winylowe Brady B-417 z mocnym klejem, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-80-417-5, THT-75-417-3, THT-26-417-1.',
  shortDescription: 'Owijki winylowe B-417 z mocnym klejem do cienkich przewodów, w 14 numerach artykułów, na rolkach po 500–10 000 sztuk. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-417 to wersja winylu samolaminującego z podwyższoną przyczepnością. Mocniejszy klej akrylowy dobrze radzi sobie na przewodach o małej średnicy. Etykietę tworzą białe pole nadruku oraz ogon z przezroczystej folii. Folia jest matowa oraz samogasnąca. Zastosowania to okablowanie w telekomunikacji, sieciach danych i elektryce.\n\nCzternaście numerów artykułów obejmuje etykiety od 12,70 × 19,05 do 63,50 × 57,15 mm oraz duże 25,40 × 152,40 i 50,80 × 177,80 mm. Liczba etykiet na rolce wynosi od 500 do 10 000. Wersja THT-80-417-5 przewidziana jest dla przewodów cienkich, od 16 do 12 AWG, czyli 2,54–3,05 mm średnicy; pole nadruku ma tam 12,70 × 9,53 mm.\n\nGrubość folii wynosi 0,107 mm, a temperatura pracy od −40 do 70 °C. UL969 (plik MH62024) dotyczy nadruku taśmami R4300 i R7950; wersję UL zaznacza się w zamówieniu. Taśma zalecana: R4302.',
  sameAs: 'https://www.brady.eu/products/cps-3069340',
  images: [
    '/images/products/brady/tht-80-417-5.png',
    '/images/products/brady/tht-75-417-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-80-417-5 z paskiem białych owijek winylowych 12,70 × 19,05 mm o podwyższonej przyczepności',
    'Rolka Brady THT-75-417-3 na gilzie 76 mm z owijkami samolaminującymi 25,40 × 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące owijki na przewody z mocnym klejem, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-417' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, o zwiększonej przyczepności' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 63,50 mm, wysokość od 19,05 do 177,80 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od rozmiaru' },
    { name: 'Zakres średnicy przewodu', value: 'THT-80-417-5: od 2,54 do 3,05 mm (16–12 AWG)' },
    { name: 'Normy', value: 'UL969 (UL Recognised, plik MH62024) przy nadruku taśmami R4300 i R7950' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302 (także i75-R4302, IP-R4302)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: OWIJKI_417.map(([pn, rozmiar, sztuk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — owijka samolaminująca ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Na rolce': sztuk } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nWymiary rosną od 12,70 × 19,05 mm do 63,50 × 57,15 mm.',
    'Na rolce': 'Liczba etykiet na jednej rolce.\n\nRolka liczy od 500 do 10 000 sztuk.',
  },
  faq: [
    { question: 'Do jakich przewodów służą owijki B-417?', answer: 'Mocny klej jest przeznaczony do przewodów o małej średnicy. Owijka THT-80-417-5 pasuje do przewodów o średnicy od 2,54 do 3,05 mm.' },
    { question: 'Czy owijki B-417 mają uznanie UL?', answer: 'Mają uznanie UL969 przy nadruku taśmami R4300 i R7950. W zamówieniu trzeba zaznaczyć, że potrzebna jest wersja z uznaniem UL.' },
    { question: 'Jaką taśmą drukuje się owijki B-417?', answer: 'Zaleca się taśmę R4302. Owijki drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie cienkich przewodów sygnałowych', 'Znakowanie okablowania w telekomunikacji', 'Opis przewodów w instalacjach elektrycznych'],
}

// ---------------------------------------------------------------------------
// Samolaminujące etykiety poliestrowe B-461 na przewody (cps-4250858)
// ---------------------------------------------------------------------------

// [PN, rozmiar, liczba sztuk na rolce, pole nadruku]
const POLIESTER_461: [string, string, string, string][] = [
  ['THT-75-461-3', '25,40 × 57,15 mm', '3 000 szt.', '25,40 × 19,05 mm'],
  ['THT-64-461-3', '25,40 × 57,15 mm', '3 000 szt.', '25,40 × 19,05 mm'],
  ['THT-8-461-10', '36,50 × 12,70 mm', '10 000 szt.', '12,70 × 12,70 mm'],
  ['THT-67-461-1.5', '50,80 × 57,15 mm', '1 500 szt.', '50,80 × 19,05 mm'],
  ['THT-27-461-1', '50,80 × 95,25 mm', '1 000 szt.', '50,80 × 25,40 mm'],
  ['THT-65-461-3', '25,40 × 95,25 mm', '3 000 szt.', '25,40 × 25,40 mm'],
  ['THT-10-461-3', '25,40 × 95,25 mm', '3 000 szt.', '25,40 × 25,40 mm'],
  ['THT-9-461-10', '25,40 × 36,50 mm', '10 000 szt.', '25,40 × 12,70 mm'],
]

export const bradyTHTPoliester461: Product = {
  ...wspolneTHT,
  id: 'brady-tht-75-461-3',
  slug: 'brady-tht-75-461-3',
  name: 'Samolaminujące etykiety poliestrowe Brady B-461 na przewody, rolka 76 mm',
  seoTitle: 'Brady B-461 — etykiety poliestrowe do i6100, i7100, i7500',
  seoDescription: 'Samolaminujące etykiety poliestrowe Brady B-461 na przewody, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-75-461-3, THT-8-461-10, THT-27-461-1.',
  shortDescription: 'Samolaminujące etykiety poliestrowe B-461 w 8 numerach artykułów, z pracą od −196 do 110 °C. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Folia poliestrowa B-461 ma tylko 0,048 mm grubości. Jest matowa, a akrylowy klej utrzymuje etykietę na gładkich powierzchniach. Samolaminująca etykieta owija przewód, a przezroczysty ogon kryje nadruk. Materiał znajduje zastosowanie w lotnictwie, elektronice, energetyce odnawialnej i jądrowej. Etykiety znakują też okablowanie elektryczne. W laboratorium oznaczają probówki i fiolki, także kriogeniczne.\n\nOsiem numerów artykułów to etykiety o szerokości 25,40–50,80 mm i wysokości 12,70–95,25 mm. Rolki liczą 1 000, 1 500, 3 000 lub 10 000 sztuk. Numery THT-75-461-3 i THT-64-461-3 mają ten sam rozmiar, lecz różnią się liczbą etykiet w rzędzie: dwie albo jedna. THT-75-461-3 ma pole nadruku 25,40 × 19,05 mm i przeznaczono ją na przewód Ø 6,10–12,19 mm.\n\nPoliester wytrzymuje autoklaw i przechowywanie w bardzo niskich temperaturach: zakres obejmuje wartości od −196 do 110 °C. Zalecana taśma barwiąca: R4302, w seriach R4300 i R7950.',
  sameAs: 'https://www.brady.eu/etiketten/cps-4250858',
  images: [
    '/images/products/brady/tht-75-461-3.png',
    '/images/products/brady/tht-8-461-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-75-461-3 na gilzie 76 mm z paskiem samolaminujących etykiet poliestrowych 25,40 × 57,15 mm',
    'Rolka Brady THT-8-461-10 z wąskimi etykietami poliestrowymi 36,50 × 12,70 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące etykiety na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-461' },
    { name: 'Typ materiału', value: 'poliester, autoklawowalny, do przechowywania kriogenicznego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,048 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,40 do 50,80 mm, wysokość od 12,70 do 95,25 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 1 000 do 10 000, zależnie od rozmiaru' },
    { name: 'Zakres średnicy przewodu', value: 'THT-75-461-3: od 6,10 do 12,19 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302 (także IP-R4302)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: POLIESTER_461.map(([pn, rozmiar, sztuk, pole]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta poliestrowa ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Na rolce': sztuk, 'Pole nadruku': pole } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nWymiary sięgają od 25,40 × 57,15 mm do 50,80 × 95,25 mm.',
    'Na rolce': 'Liczba etykiet na jednej rolce.\n\nRolka liczy od 1 000 do 10 000 sztuk.',
    'Pole nadruku': 'Część etykiety, na której drukarka umieszcza tekst.\n\nWysokość pola wynosi od 12,70 do 25,40 mm, a reszta etykiety tworzy przezroczysty ogon.',
  },
  faq: [
    { question: 'W jakim zakresie temperatur pracują etykiety B-461?', answer: 'Poliester pracuje od −196 do 110 °C. Materiał jest autoklawowalny i nadaje się do przechowywania kriogenicznego.' },
    { question: 'Jaka średnica przewodu pasuje do etykiety THT-75-461-3?', answer: 'Etykieta o wymiarach 25,40 × 57,15 mm obejmuje przewody o średnicy od 6,10 do 12,19 mm. Pole nadruku ma 25,40 × 19,05 mm.' },
    { question: 'Jaką taśmą drukuje się etykiety B-461?', answer: 'Zaleca się taśmę R4302. Etykiety drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów w lotnictwie i elektronice', 'Oznaczanie kabli w energetyce odnawialnej i jądrowej', 'Etykiety probówek i fiolek kriogenicznych'],
}

// ---------------------------------------------------------------------------
// Owijki poliimidowe UltraTemp B-472 (cps-4362865)
// ---------------------------------------------------------------------------

// [PN, szerokość i liczba sztuk, kolor]
const POLIIMID_472: [string, string, string][] = [
  ['THT-1-472-10-YL', 'szer. 19,05 mm, 10 000 szt.', 'żółty'],
  ['THT-105-472-YL', 'szer. 38,10 mm, 1 rolka', 'żółty'],
  ['THT-29-472-10-YL', 'szer. 31,75 mm, 10 000 szt.', 'żółty'],
  ['THT-106-472', 'szer. 50,80 mm, 1 rolka', 'biały'],
]

export const bradyTHTPoliimid472: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1-472-10-yl',
  slug: 'brady-tht-1-472-10-yl',
  name: 'Wysokotemperaturowe owijki poliimidowe Brady UltraTemp B-472 na rolce 76 mm',
  seoTitle: 'Brady B-472 UltraTemp — owijki poliimidowe, i6100, i7100, i7500',
  seoDescription: 'Owijki poliimidowe Brady UltraTemp B-472, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. Praca do 100 °C. PN: THT-1-472-10-YL, THT-106-472.',
  shortDescription: 'Owijki poliimidowe UltraTemp B-472 w czterech numerach artykułów, żółte i białe, z pracą do 100 °C. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Poliimidowa folia UltraTemp B-472 ma 0,081 mm grubości i służy do znakowania cienkich przewodów. Folia jest matowa i trudnopalna. Klej akrylowy jest trwały i nadaje się do powierzchni gładkich oraz chropowatych. Owijki znakują cienkie przewody w sieciach, telekomunikacji i instalacjach zasilających.\n\nCztery numery artykułów to trzy żółte (szerokość 19,05; 31,75 i 38,10 mm) oraz jeden biały (50,80 mm). Dwa pierwsze żółte pakowane są po 10 000 sztuk, dwa pozostałe jako pojedyncza rolka. Etykieta THT-1-472-10-YL ma 19,05 × 6,35 mm, leży po cztery obok siebie i pasuje do przewodów o średnicy 0,76–2,03 mm, czyli 20–14 AWG.\n\nDopuszczalny zakres temperatur to −70…100 °C. Jest samogasnąca, a chemikalia, UV, korozja, wilgoć i ścieranie jej nie szkodzą. Taśmą zalecaną jest R4307, a seria zgodna z materiałem to R4300 i R7950.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-high-temperature-flame-retardant-wire-wraps-cps-4362865',
  images: [
    '/images/products/brady/tht-1-472-10-yl.png',
    '/images/products/brady/tht-106-472.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1-472-10-YL z żółtymi owijkami poliimidowymi 19,05 × 6,35 mm ułożonymi w cztery rzędy',
    'Rolka Brady THT-106-472 z szeroką białą taśmą poliimidową 50,80 mm na gilzie 76 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Owijki na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-472' },
    { name: 'Typ materiału', value: 'poliimid, trudnopalny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, samogasnący' },
    { name: 'Kolor', value: 'żółty, biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 19,05 do 50,80 mm' },
    { name: 'Liczba sztuk na rolce', value: 'THT-1-472-10-YL i THT-29-472-10-YL: 10 000' },
    { name: 'Zakres średnicy przewodu', value: 'THT-1-472-10-YL: od 0,76 do 2,03 mm (20–14 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4307 (także i75-R4307, IP-R4307)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: POLIIMID_472.map(([pn, rozmiar, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — owijka poliimidowa ${rozmiar}, kolor ${kolor}`,
    attributes: { Rozmiar: rozmiar, Kolor: kolor } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość etykiety oraz liczba sztuk w opakowaniu.\n\nSzerokość wynosi od 19,05 do 50,80 mm. Dwa numery liczą po 10 000 sztuk, a dwa dostarcza się jako jedną rolkę.',
    Kolor: 'Kolor folii, na której powstaje nadruk.\n\nŻółty mają trzy numery artykułów, biały jeden.',
  },
  faq: [
    { question: 'Do jakiej temperatury nadają się owijki B-472?', answer: 'Folia poliimidowa pracuje od −70 do 100 °C. Jest samogasnąca i odporna na chemikalia, korozję oraz promieniowanie UV.' },
    { question: 'Jaki przewód obejmuje owijka THT-1-472-10-YL?', answer: 'Ta owijka pasuje do przewodów o średnicy od 0,76 do 2,03 mm, czyli od 20 do 14 AWG. Ma format 19,05 × 6,35 mm.' },
    { question: 'Jaką taśmą drukuje się owijki B-472?', answer: 'Zaleca się taśmę R4307. Owijki drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie cienkich przewodów w trudnych warunkach', 'Oznaczanie okablowania w telekomunikacji', 'Opis przewodów w instalacjach elektrycznych'],
}

// ---------------------------------------------------------------------------
// Etykiety z poliwinylofluorku B-437 na wiązki przewodów (cps-4362863)
// ---------------------------------------------------------------------------

// [PN, szerokość i liczba sztuk, kolor]
const PVF_437: [string, string, string][] = [
  ['THT-1-437W-10', 'szer. 19,05 mm, 10 000 szt.', 'biały'],
  ['THT-2-437-10', 'szer. 22,86 mm, 10 000 szt.', 'biały'],
  ['THT-29-437-10', 'szer. 31,75 mm, 10 000 szt.', 'biały'],
  ['THT-29-437-10-YL', 'szer. 31,75 mm, 10 000 szt.', 'żółty'],
  ['THT-5-437-10-YL', 'szer. 25,40 mm, 10 000 szt.', 'żółty'],
  ['THT-5-437W-10', 'szer. 25,40 mm, 10 000 szt.', 'biały'],
  ['THT-21-437', 'szer. 76,20 mm, 1 szt.', 'biały'],
  ['THT-21-437-YL', 'szer. 76,20 mm, 1 szt.', 'żółty'],
]

export const bradyTHTPvf437: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1-437w-10',
  slug: 'brady-tht-1-437w-10',
  name: 'Etykiety z poliwinylofluorku Brady B-437 na wiązki przewodów, rolka 76 mm',
  seoTitle: 'Brady B-437 — etykiety PVF na wiązki, i6100, i7100, i7500',
  seoDescription: 'Etykiety z poliwinylofluorku Brady B-437 na wiązki przewodów, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-1-437W-10, THT-5-437W-10.',
  shortDescription: 'Etykiety z poliwinylofluorku B-437 w 8 numerach artykułów, z pracą do 135 °C i normą MIL-M-87958. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-437 to matowy poliwinylofluorek (PVF) o grubości 0,091 mm, przeznaczony do oznaczania wiązek przewodów i kabli. Folia nie podtrzymuje palenia i spełnia wymagania MIL-M-87958 dla samoprzylepnych znaczników przewodów i kabli. Klej akrylowy jest trwały, a etykieta trzyma się na powierzchniach gładkich i chropowatych.\n\nOsiem numerów artykułów występuje w kolorze białym (pięć) i żółtym (trzy). Szerokości to 19,05; 22,86; 25,40; 31,75 oraz 76,20 mm. Sześć numerów to rolki po 10 000 sztuk, a dwa szerokie (76,20 mm) dostarcza się po jednej sztuce. Etykieta THT-1-437W-10 mierzy 19,05 × 6,35 mm i dotyczy przewodu o średnicy od 0,76 do 2,03 mm.\n\nPrzedział temperatur: od −70 do 135 °C. Na płytkach materiał sprawdza się przy montażu przewlekanym po procesie, od strony górnej; do montażu powierzchniowego SMT się nie nadaje, a w skrajnie wysokich temperaturach zaleca się najpierw przetestować folię. Taśma barwiąca: R4307.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyvinylfluoride-cable-wire-bundle-labels-cps-4362863',
  images: [
    '/images/products/brady/tht-1-437w-10.png',
    '/images/products/brady/tht-29-437-10-yl.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1-437W-10 z białymi etykietami z poliwinylofluorku 19,05 × 6,35 mm ułożonymi w cztery rzędy',
    'Rolka Brady THT-29-437-10-YL z żółtymi etykietami PVF o szerokości 31,75 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety na przewody i wiązki kabli, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-437' },
    { name: 'Typ materiału', value: 'poliwinylofluorek (PVF), trudnopalny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,091 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 135 °C' },
    { name: 'Odporność', value: 'trudne warunki środowiskowe, samogasnący' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'szerokość od 19,05 do 76,20 mm' },
    { name: 'Liczba sztuk na rolce', value: '10 000 w sześciu numerach artykułów; po jednej sztuce THT-21-437 i THT-21-437-YL' },
    { name: 'Zakres średnicy przewodu', value: 'THT-1-437W-10: od 0,76 do 2,03 mm' },
    { name: 'Normy', value: 'MIL-M-87958' },
    { name: 'Zalecana taśma barwiąca', value: 'R4307 (także i75-R4307, IP-R4307)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Uwagi o zgodności', value: 'i6100: bez numerów THT-1-437W-10 i THT-2-437-10' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: PVF_437.map(([pn, rozmiar, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta z poliwinylofluorku ${rozmiar}, kolor ${kolor}`,
    attributes: { Rozmiar: rozmiar, Kolor: kolor } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość etykiety oraz liczba sztuk w opakowaniu.\n\nSzerokość wynosi od 19,05 do 76,20 mm. Sześć numerów liczy po 10 000 sztuk.',
    Kolor: 'Kolor folii, na której powstaje nadruk.\n\nBiały mają pięć numerów artykułów, żółty trzy.',
  },
  faq: [
    { question: 'Jaką normę spełnia folia B-437?', answer: 'Folia spełnia specyfikację MIL-M-87958 dla znaczników przewodów i kabli z klejem samoprzylepnym.' },
    { question: 'Czy etykiety B-437 nadają się do płytek drukowanych?', answer: 'Nadają się do montażu przewlekanego po procesie, od strony górnej płytki. Do montażu powierzchniowego SMT nie są przeznaczone.' },
    { question: 'Jaką taśmą drukuje się etykiety B-437?', answer: 'Zaleca się taśmę R4307. Etykiety drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie wiązek przewodów i kabli', 'Oznaczanie okablowania w ciężkich warunkach', 'Opis przewodów w wysokiej temperaturze'],
}

// ---------------------------------------------------------------------------
// Ciągła tkanina winylowa B-498 repozycjonowalna (cps-4363571)
// ---------------------------------------------------------------------------

// [PN, szerokość i liczba sztuk]
const TKANINA_CIAGLA_498: [string, string][] = [
  ['THT-500-498', 'szer. 12,70 mm, 1 rolka'],
  ['THT-750-498', 'szer. 19,05 mm, 1 rolka'],
  ['THT-1000-498', 'szer. 25,40 mm, 1 rolka'],
  ['THT-1500-498', 'szer. 38,10 mm, 1 rolka'],
  ['THT-93-498-2', 'szer. 8,00 mm, 1 szt.'],
  ['THT-94-498-2', 'szer. 6,10 mm, 1 szt.'],
]

export const bradyTHTTkaninaCiagla498: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1000-498',
  slug: 'brady-tht-1000-498',
  name: 'Ciągła tkanina winylowa Brady B-498 do znakowania przewodów, rolka 76 mm',
  seoTitle: 'Brady B-498 — ciągła tkanina winylowa do i6100, i7100, i7500',
  seoDescription: 'Ciągła repozycjonowalna tkanina winylowa Brady B-498, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-1000-498, THT-500-498, THT-1500-498.',
  shortDescription: 'Ciągła repozycjonowalna tkanina winylowa B-498 w czterech szerokościach od 12,70 do 38,10 mm oraz dwie wąskie wersje. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Ciągła taśma B-498 powstaje z półbłyszczącej tkaniny winylowej o grubości 0,185 mm. Klej kauczukowy CleanLift jest repozycjonowalny: etykietę można odkleić i położyć od nowa, także na chropowatej powierzchni. Najniższa temperatura aplikacji to 10 °C. Taśma znakuje przewody, kody kreskowe, płytki, komponenty i zasoby, a w laboratorium fiolki.\n\nSześć numerów artykułów to rolki o szerokości 12,70; 19,05; 25,40 i 38,10 mm oraz wąskie wersje 6,10 i 8,00 mm. Rolka THT-1000-498 ma wymiary 25,40 mm × 30,48 m, a podłoże 31,75 mm szerokości. Tkanina jest usuwalna i repozycjonowalna, a opis dotyczy też transmisji danych, telekomunikacji, instalacji elektrycznych i ogólnej identyfikacji.\n\nPo naklejeniu tkanina działa od −40 do 80 °C. Zamrażarka, chemikalia, wilgoć, UV, pogoda, ścieranie i korozja nie uszkadzają tkaniny. Materiał ma uznanie UL. Do nadruku zaleca się taśmę R6206.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-continuous-repositionable-vinyl-cloth-wire-general-id-labels-cps-4363571',
  images: [
    '/images/products/brady/tht-1000-498.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1000-498 na gilzie 76 mm z ciągłą taśmą z białej tkaniny winylowej o szerokości 25,40 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Ciągła taśma do znakowania przewodów i ogólnej identyfikacji, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa, repozycjonowalna' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'repozycjonowalny, kauczukowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,185 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C; naklejanie od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość i długość taśmy', value: 'szerokość od 6,10 do 38,10 mm; THT-1000-498: 25,40 mm × 30,48 m' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6206 (także i75-R6206, IP-R6206)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: TKANINA_CIAGLA_498.map(([pn, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — tkanina winylowa ${rozmiar}`,
    attributes: { Rozmiar: rozmiar } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość taśmy oraz liczba sztuk w opakowaniu.\n\nSzerokość wynosi od 6,10 do 38,10 mm. Rolka THT-1000-498 ma 30,48 m długości.',
  },
  faq: [
    { question: 'Czy etykiety B-498 można przyklejać ponownie?', answer: 'Tak. Klej kauczukowy jest repozycjonowalny, więc etykietę można zdjąć i przykleić w innym miejscu. Naklejanie jest możliwe od 10 °C.' },
    { question: 'W jakiej temperaturze pracuje tkanina B-498?', answer: 'Po naklejeniu tkanina pracuje od −40 do 80 °C. Materiał znosi zamrażarkę i ma uznanie UL.' },
    { question: 'Jaką taśmą drukuje się tkaninę B-498?', answer: 'Zaleca się taśmę R6206. Tkaninę drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Etykiety z kodami kreskowymi i śledzenie zasobów', 'Oznaczenia, które trzeba przestawiać'],
}

// ---------------------------------------------------------------------------
// Okrągłe etykiety z tkaniny nylonowej B-499 (cps-4359750)
// ---------------------------------------------------------------------------

// [PN, średnica i liczba sztuk]
const NYLON_499: [string, string][] = [
  ['THT-143-499-3', 'Ø 9,53 mm, 3 000 szt.'],
  ['THT-144-499-3', 'Ø 12,70 mm, 3 000 szt.'],
]

export const bradyTHTNylon499: Product = {
  ...wspolneTHT,
  id: 'brady-tht-143-499-3',
  slug: 'brady-tht-143-499-3',
  name: 'Okrągłe etykiety z tkaniny nylonowej Brady B-499 na rolce 76 mm',
  seoTitle: 'Brady B-499 — okrągłe etykiety nylonowe do i6100, i7100, i7500',
  seoDescription: 'Okrągłe etykiety z tkaniny nylonowej Brady B-499, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. Autoklaw i kriogenika. PN: THT-143-499-3, THT-144-499-3.',
  shortDescription: 'Okrągłe etykiety z tkaniny nylonowej B-499, o średnicy 9,53 i 12,70 mm, po 3 000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koła B-499 wykonano z nylonu w formie tkaniny; grubość wynosi 0,166 mm, a materiał jest wolny od halogenów. Tkanina jest matowa, wytrzymuje autoklaw i przechowywanie kriogeniczne. Klej akrylowy daje trwałe połączenie z powierzchniami gładkimi, chropowatymi i mocno fakturowanymi, o niskiej energii powierzchniowej. Znakuje się nimi przewody, komponenty, wyposażenie i półki magazynowe, a w laboratorium fiolki i ich wieczka.\n\nŚrednice 9,53 mm i 12,70 mm to dwa numery artykułów. Na rolce jest 3 000 etykiet. Koło THT-143-499-3 odpowiada fiolce 1,5 mL i leży po cztery w rzędzie.\n\nZakres pracy: od −40 do 90 °C. Tkanina nie boi się ścierania, chemikaliów, wilgoci, zimna, UV ani pogody. Uznania CSA i UL oraz zgodność z normą bezhalogenową DIN VDE 0472/815 dotyczą wyłącznie koloru białego. Taśma zalecana: R4307.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-nylon-cloth-wire-lab-labels-cps-4359750',
  images: [
    '/images/products/brady/tht-143-499-3.png',
    '/images/products/brady/tht-144-499-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-143-499-3 z białymi okrągłymi etykietami z tkaniny nylonowej o średnicy 9,53 mm',
    'Rolka Brady THT-144-499-3 z okrągłymi etykietami nylonowymi o średnicy 12,70 mm na gilzie 76 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Okrągłe etykiety do oznaczania przewodów i fiolek, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa, bezhalogenowa, autoklawowalna, do przechowywania kriogenicznego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych i mocno fakturowanych' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, niskie temperatury, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'koło Ø 9,53 mm i Ø 12,70 mm' },
    { name: 'Liczba sztuk na rolce', value: '3 000' },
    { name: 'Normy', value: 'CSA Accepted, UL Recognised, bezhalogenowość wg DIN VDE 0472 część 815 (tylko kolor biały)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4307 (także IP-R4307)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: NYLON_499.map(([pn, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — okrągła etykieta nylonowa ${rozmiar}`,
    attributes: { Rozmiar: rozmiar } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koła oraz liczba sztuk na rolce.\n\nŚrednice to 9,53 i 12,70 mm, a każda rolka liczy 3 000 sztuk.',
  },
  faq: [
    { question: 'Do jakich fiolek pasuje etykieta THT-143-499-3?', answer: 'Koło o średnicy 9,53 mm odpowiada fiolce o pojemności 1,5 mL. Etykiety trafiają także na wieczka fiolek.' },
    { question: 'Czy tkanina B-499 jest bezhalogenowa?', answer: 'Tak. Biała tkanina jest bezhalogenowa wg DIN VDE 0472 część 815 i ma zgody CSA oraz UL.' },
    { question: 'Jaką taśmą drukuje się etykiety B-499?', answer: 'Zaleca się taśmę R4307. Etykiety drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie fiolek i ich wieczek w laboratorium', 'Znakowanie komponentów i wyposażenia', 'Oznaczanie miejsc w magazynie'],
}

// ---------------------------------------------------------------------------
// Repozycjonowalne etykiety z tkaniny winylowej B-498 (cps-4359700)
// ---------------------------------------------------------------------------

// [PN, rozmiar, liczba sztuk na rolce]
const ETYKIETY_498: [string, string, string][] = [
  ['THT-199-498-3', '26,67 × 6,35 mm', '3 000 szt.'],
  ['THT-14-498-10', '16,51 × 5,08 mm', '10 000 szt.'],
  ['THT-1-498-10', '19,05 × 6,35 mm', '10 000 szt.'],
  ['THT-90-498-5', '6,35 × 36,50 mm', '5 000 szt.'],
  ['THT-252-498-3', '19,05 × 6,35 mm', '3 000 szt.'],
  ['THT-254-498-3', '19,05 × 19,05 mm', '3 000 szt.'],
  ['THT-91-498-5', '19,05 × 23,80 mm', '5 000 szt.'],
  ['THT-87-498-5', '12,70 × 36,50 mm', '5 000 szt.'],
  ['THT-88-498-5', '25,40 × 19,05 mm', '5 000 szt.'],
  ['THT-68-498-10', '12,70 × 19,05 mm', '10 000 szt.'],
  ['THT-95-498-5', '20,32 × 36,50 mm', '5 000 szt.'],
  ['THT-5-498-10', '25,40 × 12,70 mm', '10 000 szt.'],
  ['THT-59-498-10', '25,40 × 12,70 mm', '10 000 szt.'],
  ['THT-17-498-3', '50,80 × 25,40 mm', '3 000 szt.'],
  ['THT-89-498-5', '25,40 × 36,50 mm', '5 000 szt.'],
]

export const bradyTHTEtykiety498: Product = {
  ...wspolneTHT,
  id: 'brady-tht-199-498-3',
  slug: 'brady-tht-199-498-3',
  name: 'Repozycjonowalne etykiety z tkaniny winylowej Brady B-498 na rolce 76 mm',
  seoTitle: 'Brady B-498 — etykiety z tkaniny winylowej, i6100, i7100, i7500',
  seoDescription: 'Repozycjonowalne etykiety z tkaniny winylowej Brady B-498, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. PN: THT-199-498-3, THT-1-498-10, THT-17-498-3.',
  shortDescription: 'Repozycjonowalne etykiety z tkaniny winylowej B-498 w 15 numerach artykułów, na rolkach po 3 000–10 000 sztuk. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Wykrojone etykiety B-498 mają półbłyszczącą powierzchnię, a materiałem jest tkanina winylowa o przekroju 0,185 mm. Repozycjonowalny klej kauczukowy (CleanLift) pozwala przestawiać etykiety. Etykiety niosą kody kreskowe, opisują płytki, komponenty, wyposażenie, przewody i kable. W laboratorium oznaczają butelki, szalki, kolby i fiolki.\n\nPełna lista to 15 numerów artykułów z szerokościami między 6,35 a 50,80 mm i wysokościami między 5,08 a 36,50 mm. Rolka mieści 3 000, 5 000 lub 10 000 sztuk. Etykieta THT-199-498-3 ma 26,67 × 6,35 mm i leży na rolce pojedynczo, a podłoże ma 31,75 mm szerokości. Materiał można zdejmować i przestawiać.\n\nZakres temperatur tkaniny to −40…80 °C, a zamrażarka nie jest dla niej przeszkodą. Opiera się korozji, ścieraniu, UV, pogodzie, wilgoci i chemikaliom. Ma uznanie UL. Minimalna temperatura aplikacji wynosi 10 °C. Taśmą zalecaną jest R6206.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-repositionable-vinyl-cloth-labels-cps-4359700',
  images: [
    '/images/products/brady/tht-199-498-3.png',
    '/images/products/brady/tht-1-498-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-199-498-3 na gilzie 76 mm z paskiem etykiet z białej tkaniny winylowej 26,67 × 6,35 mm',
    'Rolka Brady THT-1-498-10 z wąskimi etykietami z tkaniny winylowej 19,05 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Repozycjonowalne etykiety do kodów kreskowych, płytek i przewodów, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa, repozycjonowalna' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'repozycjonowalny, kauczukowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,185 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C; naklejanie od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 50,80 mm, wysokość od 5,08 do 36,50 mm' },
    { name: 'Liczba sztuk na rolce', value: '3 000, 5 000 lub 10 000, zależnie od rozmiaru' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6206 (także i75-R6206, IP-R6206)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: ETYKIETY_498.map(([pn, rozmiar, sztuk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta z tkaniny winylowej ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Na rolce': sztuk } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nWymiary rosną od 6,35 × 36,50 mm do 50,80 × 25,40 mm.',
    'Na rolce': 'Liczba etykiet na jednej rolce.\n\nRolka liczy 3 000, 5 000 lub 10 000 sztuk.',
  },
  faq: [
    { question: 'Jak działa klej repozycjonowalny w etykietach B-498?', answer: 'Etykietę można zdjąć i przykleić w innym miejscu. Klej kauczukowy najlepiej trzyma się czystych powierzchni; naklejanie jest możliwe od 10 °C.' },
    { question: 'Do jakich zastosowań laboratoryjnych służą etykiety B-498?', answer: 'Oznaczają butelki, szalki, kolby i fiolki. Tkanina znosi zamrażarkę, a jej zakres pracy to od −40 do 80 °C.' },
    { question: 'Jaką taśmą drukuje się etykiety B-498?', answer: 'Zaleca się taśmę R6206. Etykiety drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Etykiety z kodami kreskowymi na komponentach i wyposażeniu', 'Oznaczanie płytek drukowanych oraz przewodów', 'Etykiety butelek, szalek i fiolek w laboratorium'],
}

// ---------------------------------------------------------------------------
// Flagi polipropylenowe WorkHorse B-425A (cps-4362868)
// ---------------------------------------------------------------------------

// [PN, skok i liczba sztuk]
const FLAGI_425: [string, string][] = [
  ['THTFT-01-425', 'skok 46,04 mm, 2 500 szt.'],
  ['THTFP-01-425', 'skok 26,03 mm, 2 500 szt.'],
]

export const bradyTHTFlagi425: Product = {
  ...wspolneTHT,
  id: 'brady-thtft-01-425',
  slug: 'brady-thtft-01-425',
  name: 'Flagi polipropylenowe Brady WorkHorse B-425A na rolce 76 mm',
  seoTitle: 'Brady B-425A — flagi polipropylenowe do i6100, i7100, i7500',
  seoDescription: 'Flagi polipropylenowe Brady WorkHorse B-425A, rolka 76 mm, do drukarek Brady i6100, i7100 i i7500. Odporne na rozpuszczalniki. PN: THTFT-01-425, THTFP-01-425.',
  shortDescription: 'Flagi polipropylenowe WorkHorse B-425A w dwóch numerach artykułów, po 2 500 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'WorkHorse B-425A to polipropylenowe flagi do oznaczania przewodów i innych elementów. Matowa folia o grubości 0,1143 mm ma trwały klej akrylowy i przylega do powierzchni gładkich. Większość chemikaliów, olejów i woda nie zmienia wyglądu etykiety, a folia jest odporna na paliwa i rozpuszczalniki. Flagi identyfikują przewody i kable, kody kreskowe, wyposażenie, zasoby oraz kontrole i inwentaryzację, także w laboratorium.\n\nKarta obejmuje dwa numery artykułów: THTFT-01-425 i THTFP-01-425. Każda rolka liczy 2 500 sztuk. Flaga THTFT-01-425 ma wymiar 30,00 × 10,00 mm, obejmuje przewody do Ø 5,40 mm i leży po dwie obok siebie. Skok pionowy wynosi 46,04 mm w THTFT-01-425 oraz 26,03 mm w THTFP-01-425.\n\nFolia jest bezhalogenowa (DIN VDE 0472/815) i ma uznanie CSA oraz UL. Przedział temperatur obejmuje wartości od −70 do 130 °C. Do nadruku służą taśmy serii R4300 i R7950.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polypropylene-flags-cps-4362868',
  images: [
    '/images/products/brady/thtfp-01-425.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTFP-01-425 na gilzie 76 mm z paskiem białych flag polipropylenowych do oznaczania przewodów',
  ],
  specifications: [
    { name: 'Typ', value: 'Flagi do oznaczania przewodów i innych elementów, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-425A' },
    { name: 'Typ materiału', value: 'polipropylen, odporny na rozpuszczalniki' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,1143 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, paliwa, oleje, rozpuszczalniki, niskie temperatury' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'THTFT-01-425: 30,00 × 10,00 mm' },
    { name: 'Liczba sztuk na rolce', value: '2 500' },
    { name: 'Zakres średnicy przewodu', value: 'THTFT-01-425: do 5,40 mm' },
    { name: 'Normy', value: 'CSA Accepted, UL Recognised, bezhalogenowość wg DIN VDE 0472 część 815' },
    { name: 'Zalecana taśma barwiąca', value: 'serie R4300 i R7950' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: FLAGI_425.map(([pn, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — flaga polipropylenowa, ${rozmiar}`,
    attributes: { Skok: rozmiar } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Skok: 'Odległość między początkami kolejnych flag wzdłuż rolki oraz liczba sztuk na rolce.\n\nSkok wynosi 46,04 mm w jednym numerze artykułu i 26,03 mm w drugim. Każda rolka liczy 2 500 sztuk.',
  },
  faq: [
    { question: 'Jaki przewód obejmuje flaga THTFT-01-425?', answer: 'Flaga o wymiarze 30,00 × 10,00 mm obejmuje przewody o średnicy do 5,40 mm. Na szerokości rolki leżą dwie flagi.' },
    { question: 'Jak flagi B-425A znoszą chemikalia i oleje?', answer: 'Etykiety nie zmieniają wyglądu po kontakcie z większością chemikaliów, olejów i wodą. Polipropylen jest odporny na rozpuszczalniki i paliwa.' },
    { question: 'Jaką taśmą drukuje się flagi B-425A?', answer: 'Do nadruku służą taśmy z serii R4300 i R7950. Flagi drukują przemysłowe drukarki [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Flagi na przewody i kable', 'Oznaczanie wyposażenia i zasobów', 'Identyfikacja próbek i kontrola inwentarzowa'],
}

// ---------------------------------------------------------------------------
// Eksporty
// ---------------------------------------------------------------------------

export const bradyTHTOwijki: Product[] = [
  bradyTHTOwijki427,
  bradyTHTOwijkiObrotowe,
  bradyTHTEtykiety427Aw,
  bradyTHTOwijki417,
  bradyTHTPoliester461,
  bradyTHTPoliimid472,
  bradyTHTPvf437,
  bradyTHTTkaninaCiagla498,
  bradyTHTNylon499,
  bradyTHTEtykiety498,
  bradyTHTFlagi425,
]

export const bradyTHTOwijkiSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-tht-80-427-5': 'przewody',
  'brady-thtro-292-427-3': 'przewody',
  'brady-tht-135-427-aw-3': 'przewody',
  'brady-tht-80-417-5': 'przewody',
  'brady-tht-75-461-3': 'przewody',
  'brady-tht-1-472-10-yl': 'przewody',
  'brady-tht-1-437w-10': 'przewody',
  'brady-tht-1000-498': 'przewody',
  'brady-tht-143-499-3': 'przewody',
  'brady-tht-199-498-3': 'ogolne',
  'brady-thtft-01-425': 'przewody',
}
