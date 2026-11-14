import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Owijki, etykiety i materiały do oznaczania przewodów Brady B33 / B33C do drukarki BradyPrinter i3300 (także BBP33):
// owijki winylowe, etykiety poliestrowe, poliimid, Tedlar (PVF), tkanina winylowa i nylonowa oraz BradyGrip. 14.11.2026.

// ---------------------------------------------------------------------------
// Samolaminujące owijki winylowe B-427 (cps-3069370), jeden PN = jedna wersja
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, min. średnica przewodu, maks. średnica przewodu] — AW = wersje laboratoryjne bez zakresu przewodu
const OWIJKI_427: [string, string, string, string, string, string, string][] = [
  ['B33-80-427', '143094', '12,70', '19,05', '2500', '2,54', '3,05'],
  ['B33-115-427', '133780', '25,40', '19,05', '2500', '2,54', '3,05'],
  ['B33-56-427', '143097', '19,05', '23,80', '5000', '2,29', '4,57'],
  ['B33-113-427', '143101', '12,70', '25,40', '2500', '2,54', '5,08'],
  ['B33-116-427', '143102', '25,40', '25,40', '2500', '2,54', '5,08'],
  ['B33-118-427', '143042', '38,10', '25,40', '1250', '2,54', '5,08'],
  ['B33-120-427', '142994', '44,45', '25,40', '1250', '2,69', '5,11'],
  ['B33-117-427', '152852', '25,40', '31,75', '2000', '3,05', '6,10'],
  ['B33-114-427', '152851', '12,70', '31,75', '4000', '3,81', '6,10'],
  ['B33-8-427', '143092', '12,70', '36,50', '5000', '3,81', '7,62'],
  ['B33-9-427', '143091', '25,40', '36,50', '2500', '3,81', '7,62'],
  ['B33-74-427', '143096', '20,32', '36,50', '4000', '3,81', '7,62'],
  ['B33-119-427', '142870', '38,10', '38,10', '1000', '4,06', '8,13'],
  ['B33-121-427', '142871', '44,45', '38,10', '1000', '4,06', '8,13'],
  ['B33-73-427', '143008', '19,05', '44,45', '3500', '5,08', '10,16'],
  ['B33-75-427', '143095', '25,40', '57,15', '1400', '6,10', '12,19'],
  ['B33-272-427', '133841', '38,10', '57,15', '700', '6,10', '12,19'],
  ['B33-273-427', '133842', '44,45', '57,15', '500', '6,10', '12,19'],
  ['B33-26-427', '142882', '63,50', '57,15', '500', '6,10', '12,19'],
  ['B33-131-427', '142996', '25,40', '66,68', '1500', '7,11', '13,11'],
  ['B33-10-427', '143099', '25,40', '95,25', '1200', '11,18', '22,35'],
  ['B33-27-427', '143098', '50,80', '95,25', '400', '11,18', '22,35'],
  ['B33-81-427', '143093', '25,40', '152,40', '500', '18,29', '36,32'],
  ['B33-82-427', '133977', '50,80', '152,40', '200', '18,29', '36,32'],
  ['B33-135-427AW', '142952', '38,10', '19,05', '1500', '', ''],
  ['B33-137-427AW', '143045', '50,80', '25,40', '1500', '', ''],
  ['B33-640-427AW', '361690', '55,88', '38,10', '1500', '', ''],
  ['B33-648-427AW', '361692', '66,68', '25,40', '1500', '', ''],
]

export const bradyB33Owijki427: Product = {
  ...wspolneB33,
  id: 'brady-b33-273-427',
  slug: 'brady-b33-273-427',
  name: 'Samolaminujące owijki winylowe Brady B-427 do drukarki i3300',
  seoTitle: 'Brady B-427 — samolaminujące owijki winylowe do drukarki i3300',
  seoDescription: 'Samolaminujące owijki winylowe Brady B-427 do drukarki Brady i3300: przewody od 2,29 do 36,32 mm, UL. PN: B33-273-427, B33-120-427, B33-82-427.',
  shortDescription: 'Samolaminujące owijki winylowe B-427 w 28 wersjach, głównie na przewody o średnicy od 2,29 do 36,32 mm. Do drukarki Brady i3300.',
  description: 'Brady B-427 to winylowa folia samolaminująca do oznaczania przewodów i kabli. Matowa, biała część służy do nadruku, a przezroczysty pasek obok niej zakrywa tekst po owinięciu przewodu. Klej akrylowy jest stały, a etykieta trzyma się zarówno powierzchni gładkich, jak i chropowatych. Winyl nie podtrzymuje palenia i dobrze układa się na krzywiznach. Zastosowania to telekomunikacja, instalacje elektryczne i laboratorium.\n\nRodzina liczy 28 wersji. Pudełko zawiera od 200 do 5000 sztuk. Etykiety są szerokie na 12,70–66,68 mm, a wysokie na 19,05–152,40 mm. Wersje bez końcówki AW dopasowano do przewodów o średnicach 2,29–36,32 mm. Najmniejsza owijka ma pole nadruku 19,05 × 9,53 mm. Cztery wersje AW to etykiety laboratoryjne na probówki stożkowe i fiolki, bez zakresu przewodu.\n\nDolna granica pracy folii (0,102 mm) to −70 °C, górna 70 °C. Opiera się wodzie, olejowi, wilgoci, chemikaliom oraz pogodzie. Norma UL969 obejmuje te owijki po wydruku taśmami B30-R4300 lub B30-R6200; wersję UL należy zaznaczyć w zamówieniu. Dla i3300 wskazana jest kaseta barwiąca B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-self-laminating-vinyl-labels-cps-3069370',
  images: [
    '/images/products/brady/b33-273-427.png',
    '/images/products/brady/b33-82-427.png',
    '/images/products/brady/b33-120-427.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-273-427 na uchwycie z wysuniętym paskiem białych samolaminujących owijek winylowych 44,45 × 57,15 mm',
    'Rolka Brady B33-82-427 z szerokim paskiem owijek winylowych o wymiarach 50,80 × 152,40 mm',
    'Rolka Brady B33-120-427 z pasmem białych owijek winylowych 44,45 × 25,40 mm na przewody cienkie',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące owijki na przewody, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały z przezroczystym ogonem' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 66,68 mm, wysokość od 19,05 do 152,40 mm' },
    { name: 'Liczba sztuk', value: 'od 200 do 5000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,29 do 36,32 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL969 (UL Recognised) przy nadruku taśmami B30-R4300 i B30-R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: OWIJKI_427.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: OWIJKI_427.map(([pn, , szer, wys, szt, dMin, dMax]) => ({
    partNumber: pn,
    name: dMin
      ? `Brady ${pn} — owijka samolaminująca ${szer} × ${wys} mm na przewód Ø ${dMin}–${dMax} mm`
      : `Brady ${pn} — etykieta laboratoryjna ${szer} × ${wys} mm`,
    attributes: {
      Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`,
      ...(dMin ? { Przewód: `Ø ${dMin}–${dMax} mm` } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk w opakowaniu.\n\nWymiary rosną od 12,70 × 19,05 mm do 63,50 × 57,15 mm, a opakowanie liczy od 200 do 5000 sztuk.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje owijka.\n\nWersje sięgają od Ø 2,29–4,57 mm do Ø 18,29–36,32 mm. Etykiety laboratoryjne z końcówką AW nie mają tej wartości.',
  },
  faq: [
    { question: 'Jak dobrać owijkę B-427 do średnicy przewodu?', answer: 'Każda wersja ma zakres średnicy przewodu w kolumnie Przewód. Zakresy mieszczą się między 2,29 a 36,32 mm.' },
    { question: 'Czy owijki B-427 mają uznanie UL?', answer: 'Mają uznanie UL969, jeśli nadrukuje się je taśmą B30-R4300 lub B30-R6200. Wersję z uznaniem UL należy wskazać przy zamówieniu.' },
    { question: 'Jaką taśmę barwiącą zamówić do owijek B-427?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Owijki drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Znakowanie przewodów i kabli w telekomunikacji', 'Oznaczanie okablowania elektrycznego', 'Etykiety probówek i fiolek w laboratorium'],
}

// ---------------------------------------------------------------------------
// Samolaminujące etykiety poliestrowe B-461 (cps-3069369 + pid-b33-602-461aw, pid-b33-604-461aw); bez B33-614-461 (tylko i5300)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, zakres przewodu (puste = etykieta bez zakresu), kształt (puste = prostokąt)]
const POLIESTER_461: [string, string, string, string, string][] = [
  ['B33-9-461', '311098', '25,40 × 36,50 mm, 2500 szt.', 'Ø 3,81–7,60 mm', ''],
  ['B33-8-461', '311099', '36,50 × 12,70 mm, 5000 szt.', 'Ø 3,81–7,60 mm', ''],
  ['B33-64-461', '311103', '25,40 × 57,15 mm, 750 szt.', 'Ø 6,10–12,10 mm', ''],
  ['B33-75-461', '311100', '25,40 × 57,15 mm, 1500 szt.', 'Ø 6,10–12,10 mm', ''],
  ['B33-67-461', '311105', '50,80 × 57,15 mm, 750 szt.', 'Ø 6,10–12,10 mm', ''],
  ['B33-10-461', '311102', '25,40 × 95,25 mm, 1000 szt.', 'Ø 11,18–22,20 mm', ''],
  ['B33-65-461', '311104', '25,40 × 95,25 mm, 500 szt.', 'Ø 11,18–22,20 mm', ''],
  ['B33-27-461', '311101', '50,80 × 95,25 mm, 500 szt.', 'Ø 11,18–22,20 mm', ''],
  ['B33-627-461', '361683', '6,35 × 27,94 mm, 1000 szt.', '', ''],
  ['B33-628-461', '361684', '15,24 × 38,10 mm, 2500 szt.', '', ''],
  ['B33-638-461', '361689', '15,24 × 48,26 mm, 2000 szt.', '', ''],
  ['B33-612-461', '361673', '15,24 × 66,68 mm, 1500 szt.', '', ''],
  ['B33-629-461', '361685', '19,05 × 38,10 mm, 2500 szt.', '', ''],
  ['B33-606-461', '361668', '25,40 × 9,53 mm, 1000 szt.', '', 'prostokąt i koło Ø 9,53 mm'],
  ['B33-632-461', '361686', '34,93 × 45,72 mm, 1500 szt.', '', ''],
  ['B33-133-461', '143014', '41,28 × 15,24 mm, 1500 szt.', '', ''],
  ['B33-608-461', '361669', '41,28 × 15,24 mm, 1000 szt.', '', 'prostokąt i koło Ø 12,70 mm'],
  ['B33-183-461', '133821', '44,45 × 25,40 mm, 2000 szt.', '', ''],
  ['B33-123-461', '143010', '45,72 × 9,53 mm, 1500 szt.', '', ''],
  ['B33-122-461', '143043', '45,72 × 12,70 mm, 1500 szt.', '', ''],
  ['B33-127-461', '143012', '55,88 × 12,70 mm, 1500 szt.', '', ''],
  ['B33-153-461', '142999', '66,68 × 15,24 mm, 1500 szt.', '', ''],
  ['B33-276-461', '143013', '66,68 × 25,40 mm, 1500 szt.', '', ''],
  ['B33-134-461', '143044', '88,90 × 38,10 mm, 1000 szt.', '', ''],
  ['B33-139-461', '143046', '133,35 × 25,40 mm, 650 szt.', '', ''],
  ['B33-602-461AW', '361662', 'Ø 9,53 mm, 3000 szt.', '', 'koło'],
  ['B33-604-461AW', '361667', 'Ø 15,24 mm, 3000 szt.', '', 'koło'],
]

export const bradyB33Poliester461: Product = {
  ...wspolneB33,
  id: 'brady-b33-134-461',
  slug: 'brady-b33-134-461',
  name: 'Samolaminujące etykiety poliestrowe Brady B-461 do drukarki i3300',
  seoTitle: 'Brady B-461 — samolaminujące etykiety poliestrowe do i3300',
  seoDescription: 'Samolaminujące etykiety poliestrowe Brady B-461 do drukarki Brady i3300: od −196 do 110 °C, przewody i laboratorium. PN: B33-134-461, B33-9-461, B33-602-461AW.',
  shortDescription: 'Samolaminujące etykiety z folii poliestrowej B-461 w 27 wersjach, na przewody i do laboratorium, od −196 do 110 °C. Do drukarki Brady i3300.',
  description: 'Brady B-461 to przezroczysta folia poliestrowa z białą, matową strefą nadruku. Po owinięciu przezroczysta część przykrywa tekst, więc nadruk jest chroniony. Klej akrylowy jest stały i przeznaczony do powierzchni gładkich. Folię nadrukowuje się termotransferem; po wydruku tekst nie rozmazuje się i nie reaguje na rozpuszczalniki. Etykiety znakują przewody, próbki w laboratorium i inne przedmioty. Pasują do nich też i4311 oraz i5300.\n\nDostępnych jest 27 wersji o szerokości 6,35–133,35 mm, a w pudełku mieści się 500–5000 sztuk. Osiem owijek ma zakres przewodu, 3,81–22,20 mm. Dwie wersje są okrągłe, Ø 9,53 oraz 15,24 mm, i pasują na wieczka fiolek. Dwie następne łączą prostokąt z kołem. Na owijce 25,40 × 36,50 mm pole nadruku ma 25,40 × 12,70 mm, resztę zajmuje przezroczysty laminat.\n\nFolia ma 0,048 mm grubości i jest autoklawowalna. Zakres użytkowania: od −196 °C (ciekły azot) do 110 °C. Wersje bez zakresu przewodu wytrzymują też zamrażarkę oraz gorącą wodę (100 °C). Do wydruku zaleca się kasetę B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-self-laminating-polyester-labels-cps-3069369',
  images: [
    '/images/products/brady/b33-134-461.png',
    '/images/products/brady/b33-122-461.png',
    '/images/products/brady/b33-602-461aw.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-134-461 na uchwycie z szerokim paskiem białych samolaminujących etykiet poliestrowych 88,90 × 38,10 mm',
    'Rolka Brady B33-122-461 z paskiem etykiet poliestrowych 45,72 × 12,70 mm z nacięciami po bokach',
    'Rolka Brady B33-602-461AW z okrągłymi białymi etykietami poliestrowymi o średnicy 9,53 mm na wieczka fiolek',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety samolaminujące, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-461' },
    { name: 'Typ materiału', value: 'folia poliestrowa, samolaminująca, autoklawowalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,048 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Odporność', value: 'rozmazanie nadruku, rozpuszczalniki; wersje bez zakresu przewodu także autoklaw, zamrażarka, kąpiel wodna 100 °C, ciekły azot' },
    { name: 'Kolor', value: 'biały z przezroczystym laminatem' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 133,35 mm, wysokość od 9,53 do 95,25 mm; wersje okrągłe Ø 9,53 i 15,24 mm' },
    { name: 'Liczba sztuk', value: 'od 500 do 5000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 3,81 do 22,20 mm (osiem wersji)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIESTER_461.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIESTER_461.map(([pn, , rozmiar, przewod, ksztalt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — samolaminująca etykieta poliestrowa ${rozmiar.replace(/, \d+ szt\./, '')}${przewod ? ` na przewód ${przewod}` : ''}`,
    attributes: {
      Rozmiar: rozmiar,
      ...(przewod ? { Przewód: przewod } : {}),
      ...(ksztalt ? { Kształt: ksztalt } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety albo średnica wersji okrągłej oraz liczba sztuk w opakowaniu.\n\nPaski mają od 6,35 do 133,35 mm szerokości, a opakowanie liczy od 500 do 5000 sztuk.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje owijka.\n\nOsiem wersji ma ten zakres, od Ø 3,81–7,60 mm do Ø 11,18–22,20 mm. Pozostałe są etykietami bez zakresu przewodu.',
    Kształt: 'Forma etykiety, gdy nie jest to zwykły prostokąt.\n\nWersje okrągłe mają średnicę 9,53 lub 15,24 mm, a dwie wersje łączą prostokąt z kołem na wieczko fiolki.',
  },
  faq: [
    { question: 'Jaki zakres temperatury ma folia poliestrowa B-461?', answer: 'Od −196 do 110 °C. Folia jest autoklawowalna, a wersje bez zakresu przewodu znoszą też ciekły azot i kąpiel wodną 100 °C.' },
    { question: 'Do czego służą okrągłe wersje B33-602-461AW i B33-604-461AW?', answer: 'To etykiety o średnicy 9,53 i 15,24 mm, do wieczek fiolek o pojemności 1,5 i 15 ml. Opakowanie zawiera po 3000 sztuk.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-461?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Identyfikacja próbek w laboratorium, także w niskich temperaturach', 'Etykiety wieczek fiolek laboratoryjnych'],
}

// ---------------------------------------------------------------------------
// Etykiety z tkaniny nylonowej B-499, okrągłe i prostokątne (cps-3079475)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, kolor, rodzaj]
const NYLON_ETYKIETY_499: [string, string, string, string, string][] = [
  ['B33-602-499', '361663', 'Ø 9,53 mm, 3000 szt.', 'Biały', 'okrągła'],
  ['B33-602-499YL', '361664', 'Ø 9,53 mm, 3000 szt.', 'Żółty', 'okrągła'],
  ['B33-603-499', '361665', 'Ø 12,70 mm, 3000 szt.', 'Biały', 'okrągła'],
  ['B33-603-499YL', '361666', 'Ø 12,70 mm, 3000 szt.', 'Żółty', 'okrągła'],
  ['B33-611-499', '361672', '12,70 × 25,40 mm, 3000 szt.', 'Biały', 'prostokątna'],
  ['B33-620-499', '361679', '12,70 × 25,40 mm, 1000 szt.', 'Biały', 'prostokątna'],
  ['B33-659-499', '361694', '25,40 × 12,45 mm, 1000 szt.', 'Biały', 'prostokątna'],
  ['B33-621-499', '361681', '25,40 × 36,50 mm, 3000 szt.', 'Biały', 'prostokątna'],
  ['B33-625-499', '361682', '25,40 × 66,68 mm, 1500 szt.', 'Biały', 'prostokątna'],
]

export const bradyB33NylonEtykiety499: Product = {
  ...wspolneB33,
  id: 'brady-b33-621-499',
  slug: 'brady-b33-621-499',
  name: 'Etykiety z tkaniny nylonowej Brady B-499 do drukarki i3300',
  seoTitle: 'Brady B-499 — etykiety z tkaniny nylonowej do drukarki i3300',
  seoDescription: 'Etykiety z tkaniny nylonowej Brady B-499 do drukarki Brady i3300: okrągłe i prostokątne, od −40 do 90 °C, UL i CSA. PN: B33-621-499, B33-602-499YL, B33-625-499.',
  shortDescription: 'Etykiety z matowej tkaniny nylonowej B-499, okrągłe i prostokątne, białe lub żółte, z agresywnym klejem. Do drukarki Brady i3300.',
  description: 'Etykiety B-499 wykonano z matowej tkaniny nylonowej pokrytej warstwą do druku termotransferowego. Są białe, a okrągłe dostępne są także w kolorze żółtym. Silny klej akrylowy o trwałym działaniu przylega do podłoży gładkich, szorstkich oraz silnie fakturowanych o małej energii powierzchniowej. Etykiety oznaczają urządzenia i ich elementy, przewody, instalacje elektryczne, miejsca w magazynie oraz próbki.\n\nRodzina ma dziewięć wersji: cztery koła i pięć prostokątów. Koła mają Ø 9,53 lub 12,70 mm. Prostokąty mają szerokość 12,70 albo 25,40 mm i wysokość 12,45–66,68 mm. Pudełko mieści 1000, 1500 lub 3000 sztuk; wersje 12,70 × 25,40 mm występują po 1000 i po 3000. Okrągłe etykiety drukuje się po trzy w rzędzie. Wersja 25,40 × 66,68 mm jest największa i liczy 1500 sztuk.\n\nGórna granica pracy to 90 °C, dolna −40 °C, a tkanina ma 0,166 mm grubości. Wytrzymuje też autoklaw, zamrażarkę i ciekły azot. Wersje białe mają uznanie UL, akceptację CSA oraz atest braku halogenów. Zalecana kaseta barwiąca: B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/nylon-cloth-labels-for-bbp33-i3300-printers-cps-3079475',
  images: [
    '/images/products/brady/b33-621-499.png',
    '/images/products/brady/b33-620-499.png',
    '/images/products/brady/b33-602-499yl.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-621-499 na uchwycie z szerokim paskiem białych prostokątnych etykiet nylonowych 25,40 × 36,50 mm',
    'Rolka Brady B33-620-499 z wąskim paskiem białych etykiet nylonowych 12,70 × 25,40 mm',
    'Rolka Brady B33-602-499YL z żółtymi okrągłymi etykietami nylonowymi o średnicy 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety okrągłe i prostokątne, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa, bezhalogenowa, autoklawowalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny; do powierzchni gładkich, chropowatych i silnie fakturowanych' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, niska temperatura, UV, warunki atmosferyczne, autoklaw, zamrażarka, ciekły azot' },
    { name: 'Kolor', value: 'biały, żółty (etykiety okrągłe)' },
    { name: 'Wymiary etykiety', value: 'okrągłe Ø 9,53 i 12,70 mm; prostokątne od 12,70 × 25,40 do 25,40 × 66,68 mm' },
    { name: 'Liczba sztuk', value: '1000, 1500 lub 3000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted, bezhalogenowy wg DIN VDE 0472 część 815; zatwierdzenia dotyczą materiału białego' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: NYLON_ETYKIETY_499.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: NYLON_ETYKIETY_499.map(([pn, , rozmiar, kolor, rodzaj]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rodzaj} etykieta nylonowa ${rozmiar.replace(/, \d+ szt\./, '')}, ${kolor === 'Biały' ? 'biała' : 'żółta'}`,
    attributes: { Rozmiar: rozmiar, Kolor: kolor },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk w opakowaniu.\n\nKoła mają średnicę 9,53 lub 12,70 mm, a prostokąty szerokość 12,70 albo 25,40 mm.',
    Kolor: 'Kolor tkaniny nylonowej.\n\nŻółty jest dostępny tylko w etykietach okrągłych. Zatwierdzenia UL, CSA i brak halogenów dotyczą wyłącznie koloru białego.',
  },
  faq: [
    { question: 'Czy żółte etykiety B-499 mają zatwierdzenia UL i CSA?', answer: 'Nie. Zatwierdzenia UL i CSA oraz atest braku halogenów dotyczą tylko materiału białego.' },
    { question: 'Jaki zakres temperatury mają etykiety z tkaniny B-499?', answer: 'Od −40 do 90 °C. Tkanina wytrzymuje też autoklaw, zamrażarkę i ciekły azot.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-499?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Oznaczanie elementów i urządzeń', 'Znakowanie próbek w laboratorium', 'Oznaczenia kolorystyczne w magazynie'],
}

// ---------------------------------------------------------------------------
// Samolaminujące etykiety winylowe B-427 do BBP33 i i3300 (cps-3079474)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, zakres przewodu]
const ETYKIETY_427_BBP33: [string, string, string, string][] = [
  ['B33-211-427', '361641', '25,40 × 25,40 mm, 3000 szt.', 'Ø 2,70–5,10 mm'],
  ['B33-311-427', '361650', '25,40 × 31,75 mm, 3000 szt.', 'Ø 3,40–6,10 mm'],
  ['B33-511-427', '361657', '25,40 × 63,50 mm, 1500 szt.', 'Ø 6,70–14,20 mm'],
  ['B33-517-427', '361658', '38,10 × 63,50 mm, 1000 szt.', 'Ø 6,70–14,20 mm'],
]

export const bradyB33Etykiety427Bbp33: Product = {
  ...wspolneB33,
  id: 'brady-b33-311-427',
  slug: 'brady-b33-311-427',
  name: 'Samolaminujące etykiety winylowe Brady B-427 do drukarki i3300',
  seoTitle: 'Brady B-427 — samolaminujące etykiety winylowe do drukarki i3300',
  seoDescription: 'Samolaminujące etykiety winylowe Brady B-427 do drukarki Brady i3300: cztery wersje na przewody Ø 2,70–14,20 mm. PN: B33-211-427, B33-311-427, B33-511-427.',
  shortDescription: 'Cztery wersje samolaminujących etykiet winylowych B-427 na przewody o średnicy od 2,70 do 14,20 mm, po 1000–3000 sztuk. Do drukarki Brady i3300.',
  description: 'W tej rodzinie B-427 zebrano cztery etykiety dla drukarek BBP33 i i3300. Biały, matowy winyl z wydrukowanym tekstem zawija się na przewodzie, a przezroczysta część chroni nadruk. Winyl nie podtrzymuje palenia, a przyczepność zapewnia klej akrylowy, odpowiedni dla podłoży gładkich i szorstkich. Zastosowania obejmują okablowanie telekomunikacyjne i transmisję danych, instalacje elektryczne oraz znakowanie w laboratorium.\n\nEtykiety mają 25,40 mm szerokości, a największa 38,10 mm. Wysokość wynosi 25,40–63,50 mm. Pudełko zawiera 1000, 1500 lub 3000 sztuk. Pasują przewody o średnicy 2,70–14,20 mm. Najmniejsza etykieta jest kwadratowa, a jej pole nadruku ma 9,65 mm wysokości. Dwie największe, o wysokości 63,50 mm, pasują do przewodów Ø 6,70–14,20 mm. Obsługują je także modele i4311 oraz i5300.\n\nFolia ma 0,102 mm grubości i działa w przedziale temperatur −70…70 °C. Nie szkodzą jej woda, olej, wilgoć, chemikalia ani pogoda. Uznanie UL969 uzyskuje się po wydruku taśmą B30-R4300 lub B30-R6200, a o wersji UL decyduje zapis w zamówieniu. Nadruk wykonuje kaseta B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/self-laminating-vinyl-labels-for-bbp33-i3300-printers-cps-3079474',
  images: [
    '/images/products/brady/b33-311-427.png',
    '/images/products/brady/b33-211-427.png',
    '/images/products/brady/b33-517-427.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-311-427 na uchwycie z paskiem białych samolaminujących etykiet winylowych 25,40 × 31,75 mm w trzech rzędach',
    'Rolka Brady B33-211-427 z kwadratowymi białymi etykietami winylowymi 25,40 × 25,40 mm',
    'Rolka Brady B33-517-427 z paskiem białych etykiet winylowych 38,10 × 63,50 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące etykiety na przewody, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały z przezroczystym ogonem' },
    { name: 'Wymiary etykiety', value: 'od 25,40 × 25,40 mm do 38,10 × 63,50 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '1000, 1500 lub 3000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,70 do 14,20 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL969 (UL Recognised) przy nadruku taśmami B30-R4300 i B30-R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ETYKIETY_427_BBP33.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ETYKIETY_427_BBP33.map(([pn, , rozmiar, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — samolaminująca etykieta winylowa ${rozmiar.replace(/, \d+ szt\./, '')} na przewód ${przewod}`,
    attributes: { Rozmiar: rozmiar, Przewód: przewod },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk w opakowaniu.\n\nSzerokość to 25,40 lub 38,10 mm, a wysokość od 25,40 do 63,50 mm.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje etykieta.\n\nNajmniejsza wersja obejmuje Ø 2,70–5,10 mm, a największe Ø 6,70–14,20 mm.',
  },
  faq: [
    { question: 'Na jakie przewody pasują te etykiety B-427?', answer: 'Na przewody o średnicy od 2,70 do 14,20 mm. Zakres każdej wersji podaje kolumna Przewód w tabeli.' },
    { question: 'Czy etykiety B-427 mają uznanie UL?', answer: 'Uznanie UL969 obowiązuje przy nadruku taśmą B30-R4300 lub B30-R6200. Wersję z uznaniem UL należy wskazać przy zamówieniu.' },
    { question: 'Jaką taśmę barwiącą zamówić do tych etykiet?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Okablowanie w telekomunikacji i transmisji danych', 'Znakowanie instalacji elektrycznych', 'Etykiety w laboratorium'],
}

// ---------------------------------------------------------------------------
// Samolaminujące owijki winylowe obrotowe B-427 (cps-4359521)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, zakres przewodu]
const OWIJKI_OBROTOWE_427: [string, string, string, string][] = [
  ['B33RO-297-427', '151030', '25,40 × 30,48 mm, 600 szt.', 'Ø 2,01–4,04 mm'],
  ['B33RO-292-427', '151025', '12,70 × 44,45 mm, 1500 szt.', 'Ø 2,69–5,66 mm'],
  ['B33RO-294-427', '151027', '25,40 × 44,45 mm, 1000 szt.', 'Ø 2,69–5,66 mm'],
  ['B33RO-293-427', '151026', '12,70 × 69,85 mm, 900 szt.', 'Ø 3,99–8,89 mm'],
  ['B33RO-295-427', '151028', '25,40 × 69,85 mm, 700 szt.', 'Ø 3,99–8,89 mm'],
  ['B33RO-296-427', '151029', '25,40 × 79,38 mm, 600 szt.', 'Ø 4,39–10,11 mm'],
  ['B33RO-299-427', '151032', '50,80 × 79,38 mm, 250 szt.', 'Ø 4,39–10,11 mm'],
]

export const bradyB33OwijkiObrotowe427: Product = {
  ...wspolneB33,
  id: 'brady-b33ro-297-427',
  slug: 'brady-b33ro-297-427',
  name: 'Samolaminujące owijki winylowe obrotowe Brady B-427 do drukarki i3300',
  seoTitle: 'Brady B-427 — obrotowe owijki winylowe do drukarki i3300',
  seoDescription: 'Obrotowe samolaminujące owijki winylowe Brady B-427 do drukarki Brady i3300: przewody Ø 2,01–10,11 mm. PN: B33RO-297-427, B33RO-292-427, B33RO-299-427.',
  shortDescription: 'Siedem obrotowych owijek winylowych B-427, które obracają się na przewodzie o średnicy od 2,01 do 10,11 mm. Do drukarki Brady i3300.',
  description: 'Owijka obrotowa B-427 składa się z białej, matowej strefy do nadruku, bez kleju, oraz przezroczystego laminatu z klejem. Laminat obejmuje przewód, a nadruk pozostaje swobodny i obraca się razem z etykietą. Tekst można więc odczytać pod każdym kątem. Pomaga to szybciej wskazać właściwy kabel i nie odłączyć złego podczas szukania usterki. Winyl jest trudnopalny.\n\nW ofercie jest siedem wersji, od 250 do 1500 sztuk w opakowaniu. Szerokość etykiety wynosi 12,70, 25,40 lub 50,80 mm. Zakres średnic przewodu każdej wersji podaje tabela, łącznie 2,01–10,11 mm. Wysokość pola nadruku to 12,70–31,75 mm, a wąskie wersje układają się po trzy w rzędzie. Największa wersja liczy 250 sztuk i ma 50,80 mm szerokości. Etykiety działają również w modelach i4311 oraz i5300.\n\nWarstwa folii ma 0,102 mm, a temperatura robocza wynosi −70…70 °C. Folia znosi wodę, olej, wilgoć, chemikalia i warunki pogodowe. Uznanie UL969 dotyczy nadruku taśmą B30-R4300 albo B30-R6200 i trzeba je zaznaczyć przy składaniu zamówienia. Do druku służy kaseta barwiąca B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/self-laminating-vinyl-wrap-around-labels-rotating-for-b33-printers-cps-4359521',
  images: [
    '/images/products/brady/b33ro-297-427.png',
    '/images/products/brady/b33ro-292-427.png',
    '/images/products/brady/b33ro-299-427.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33RO-297-427 na uchwycie z paskiem przezroczystych obrotowych owijek winylowych 25,40 × 30,48 mm',
    'Rolka Brady B33RO-292-427 z wąskimi obrotowymi owijkami winylowymi 12,70 × 44,45 mm w trzech rzędach',
    'Rolka Brady B33RO-299-427 z szerokim paskiem obrotowych owijek winylowych 50,80 × 79,38 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Obrotowe owijki samolaminujące, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-427' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; w strefie nadruku bez kleju' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C' },
    { name: 'Odporność', value: 'woda, olej, wilgoć, chemikalia, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały z przezroczystym laminatem' },
    { name: 'Wymiary etykiety', value: 'szerokość 12,70 / 25,40 / 50,80 mm, wysokość od 30,48 do 79,38 mm' },
    { name: 'Liczba sztuk', value: 'od 250 do 1500, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,01 do 10,11 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL969 (UL Recognised) przy nadruku taśmami B30-R4300 i B30-R6200' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: OWIJKI_OBROTOWE_427.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: OWIJKI_OBROTOWE_427.map(([pn, , rozmiar, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — obrotowa owijka winylowa ${rozmiar.replace(/, \d+ szt\./, '')} na przewód ${przewod}`,
    attributes: { Rozmiar: rozmiar, Przewód: przewod },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk w opakowaniu.\n\nSzerokość to 12,70, 25,40 lub 50,80 mm, a w opakowaniu jest od 250 do 1500 sztuk.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje owijka.\n\nNajcieńsza wersja obejmuje Ø 2,01–4,04 mm, a największe Ø 4,39–10,11 mm.',
  },
  faq: [
    { question: 'Dlaczego owijka obrotowa B-427 się obraca?', answer: 'Strefa nadruku nie ma kleju, a klej znajduje się tylko na przezroczystym laminacie. Laminat trzyma się przewodu, a etykieta obraca się swobodnie.' },
    { question: 'Na jakie przewody pasują owijki obrotowe B-427?', answer: 'Na przewody o średnicy od 2,01 do 10,11 mm. Zakres każdej wersji podaje kolumna Przewód w tabeli.' },
    { question: 'Jaką taśmę barwiącą zamówić do owijek obrotowych?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Owijki drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Okablowanie w telekomunikacji i transmisji danych', 'Szybkie rozpoznawanie przewodów podczas diagnozowania usterek', 'Znakowanie instalacji elektrycznych'],
}

// ---------------------------------------------------------------------------
// Wielofunkcyjne etykiety z tkaniny nylonowej B-499 z powłoką poliamidową (cps-3069387)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, taśma barwiąca, zakres przewodu (puste = brak)]
const NYLON_499: [string, string, string, string, string][] = [
  ['B33-1-499', '153085', '19,05 × 6,35 mm, 10000 szt.', 'B30-R6000', ''],
  ['B33-90-499', '153091', '6,35 × 36,50 mm, 2500 szt.', 'B30-R6000', ''],
  ['B33-87-499', '153090', '12,70 × 36,50 mm, 2500 szt.', 'B30-R6000', ''],
  ['B33-5-499', '153086', '25,40 × 12,70 mm, 5000 szt.', 'B30-R6000', ''],
  ['B33-91-499', '153089', '19,05 × 23,80 mm, 2500 szt.', 'B30-R6000', ''],
  ['B33-254-499', '153088', '19,05 × 19,05 mm, 1000 szt.', 'B30-R6000', ''],
  ['B33-89-499', '153092', '25,40 × 36,50 mm, 2300 szt.', 'B30-R6000', ''],
  ['B33-325-499', '153093', '25,40 × 63,50 mm, 700 szt.', 'B30-R6000', ''],
  ['B33-326-499', '153094', '25,40 × 101,60 mm, 450 szt.', 'B30-R6000', ''],
  ['B33-327-499', '153095', '38,10 × 101,60 mm, 450 szt.', 'B30-R6000', ''],
  ['B33-328-499', '153096', '38,10 × 152,40 mm, 300 szt.', 'B30-R6000', ''],
  ['B33-143-499', '143015', 'Ø 9,53 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-144-499', '143016', 'Ø 12,70 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-151-499', '143049', '50,80 × 6,35 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-152-499', '143017', '25,40 × 9,53 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-68-499', '143018', '12,70 × 19,05 mm, 1500 szt.', 'B30-R4300', 'Ø 2,54–6,10 mm'],
  ['B33-125-499', '142995', '22,86 × 12,70 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-136-499', '142997', '38,10 × 19,05 mm, 1500 szt.', 'B30-R4300', ''],
  ['B33-88-499', '153087', '25,40 × 19,05 mm, 2500 szt.', 'B30-R4300', ''],
  ['B33-165-499', '143002', '20,32 × 36,50 mm, 2500 szt.', 'B30-R4300', 'Ø 4,57–11,68 mm'],
  ['B33-137-499', '143066', '50,80 × 25,40 mm, 1100 szt.', 'B30-R4300', ''],
]

export const bradyB33Nylon499: Product = {
  ...wspolneB33,
  id: 'brady-b33-137-499',
  slug: 'brady-b33-137-499',
  name: 'Wielofunkcyjne etykiety z tkaniny nylonowej Brady B-499 z klejem agresywnym do drukarki i3300',
  seoTitle: 'Brady B-499 — wielofunkcyjne etykiety nylonowe do drukarki i3300',
  seoDescription: 'Wielofunkcyjne etykiety z tkaniny nylonowej Brady B-499 do drukarki Brady i3300: 21 wersji, od −40 do 90 °C. PN: B33-137-499, B33-165-499, B33-328-499.',
  shortDescription: 'Biała tkanina nylonowa B-499 z powłoką poliamidową i agresywnym klejem akrylowym, 21 wersji od 300 do 10000 sztuk. Do drukarki Brady i3300.',
  description: 'Tkanina nylonowa B-499 z powłoką poliamidową jest bardzo giętka, więc dobrze przylega do mocno zakrzywionych powierzchni, takich jak przewody i kable. Biały, matowy materiał ma stały klej akrylowy i można go nadrukować termotransferem. Przeznaczono go do pomieszczeń. Etykiety znakują komponenty i urządzenia, okablowanie, instalacje elektryczne i telekomunikacyjne oraz miejsca w magazynie.\n\nW rodzinie jest 21 wersji. Dwie mają kształt koła (Ø 9,53 i 12,70 mm), reszta to prostokąty. Wszystkie prostokąty są szerokie na 6,35–50,80 mm i wysokie na 6,35–152,40 mm. Sztuk w opakowaniu jest 300–10000. Zakres przewodu podają tylko dwie wersje: 2,54–6,10 i 4,57–11,68 mm. Wersja po 10000 sztuk ma tylko 19,05 × 6,35 mm, a największa etykieta 38,10 × 152,40 mm. Drukują je też modele i4311 oraz i5300. Kolumna Taśma wskazuje kasetę barwiącą B30-R4300 lub B30-R6000.\n\nGrubość tkaniny to 0,166 mm, a zakres pracy −40…90 °C. Odpiera autoklaw, ścieranie, chemikalia, wilgoć, niską temperaturę, UV i pogodę. Atest braku halogenów, uznanie UL i akceptacja CSA dotyczą wersji białych.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polyamide-coated-nylon-cloth-labels-cps-3069387',
  images: [
    '/images/products/brady/b33-137-499.png',
    '/images/products/brady/b33-165-499.png',
    '/images/products/brady/b33-328-499.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-137-499 na uchwycie z paskiem białych etykiet z tkaniny nylonowej 50,80 × 25,40 mm',
    'Rolka Brady B33-165-499 z białymi etykietami z tkaniny nylonowej 20,32 × 36,50 mm w czterech rzędach',
    'Rolka Brady B33-328-499 z wysokimi białymi etykietami z tkaniny nylonowej 38,10 × 152,40 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety okrągłe i prostokątne, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa z powłoką poliamidową, bezhalogenowa, autoklawowalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny; do powierzchni gładkich, chropowatych i silnie fakturowanych' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, niska temperatura, UV, warunki atmosferyczne, autoklaw, zamrażarka, ciekły azot' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'prostokątne od 6,35 do 50,80 mm szerokości i od 6,35 do 152,40 mm wysokości; okrągłe Ø 9,53 i 12,70 mm' },
    { name: 'Liczba sztuk', value: 'od 300 do 10000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'Ø 2,54–6,10 mm (B33-68-499), Ø 4,57–11,68 mm (B33-165-499)' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted, bezhalogenowy wg DIN VDE 0472 część 815; zatwierdzenia dotyczą materiału białego' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300 lub B30-R6000, zależnie od wersji' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: NYLON_499.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: NYLON_499.map(([pn, , rozmiar, tasma, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rozmiar.startsWith('Ø') ? 'okrągła' : 'prostokątna'} etykieta nylonowa ${rozmiar.replace(/, \d+ szt\./, '')}`,
    attributes: {
      Rozmiar: rozmiar,
      Taśma: tasma,
      ...(przewod ? { Przewód: przewod } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk w opakowaniu.\n\nOpakowania liczą od 300 do 10000 sztuk. Dwie wersje są okrągłe, o średnicy 9,53 i 12,70 mm.',
    Taśma: 'Zalecana taśma barwiąca B30 do danej wersji: B30-R4300 albo B30-R6000.\n\nObie wersje okrągłe korzystają z taśmy B30-R4300.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje etykieta.\n\nPodają go tylko dwie wersje: Ø 2,54–6,10 mm oraz Ø 4,57–11,68 mm.',
  },
  faq: [
    { question: 'Którą taśmę barwiącą wybrać do etykiet B-499?', answer: 'Zalecana taśma zależy od wersji i jest podana w kolumnie Taśma: B30-R4300 albo B30-R6000. Etykiety drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
    { question: 'Czy etykiety z tkaniny nylonowej B-499 nadają się na zewnątrz?', answer: 'Producent zaleca je do użytku wewnątrz pomieszczeń. Tkanina znosi jednak wilgoć, UV i pogodę, a praca jest możliwa od −40 do 90 °C.' },
    { question: 'Które etykiety B-499 mają zatwierdzenia UL i CSA?', answer: 'Zatwierdzenia UL i CSA oraz atest braku halogenów wg DIN VDE 0472 część 815 dotyczą etykiet białych. Wszystkie wersje z tej rodziny są białe.' },
  ],
  applications: ['Oznaczanie komponentów i urządzeń', 'Znakowanie okablowania i instalacji telekomunikacyjnych', 'Oznaczenia miejsc w magazynie'],
}

// ---------------------------------------------------------------------------
// Owijki winylowe samolaminujące o dużej przyczepności B-417 (cps-4297061)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, zakres przewodu]
const OWIJKI_417: [string, string, string, string][] = [
  ['B33-80-417', '153252', '12,70 × 19,05 mm, 2500 szt.', 'Ø 2,54–3,05 mm'],
  ['B33-56-417', '153253', '19,05 × 23,80 mm, 5000 szt.', 'Ø 2,29–4,57 mm'],
  ['B33-116-417', '153254', '25,40 × 25,40 mm, 2500 szt.', 'Ø 2,54–5,08 mm'],
  ['B33-114-417', '153255', '12,70 × 31,75 mm, 4000 szt.', 'Ø 3,05–6,10 mm'],
  ['B33-117-417', '153256', '25,40 × 31,75 mm, 2000 szt.', 'Ø 3,05–6,10 mm'],
  ['B33-8-417', '153257', '12,70 × 36,50 mm, 5000 szt.', 'Ø 3,81–7,62 mm'],
  ['B33-9-417', '153258', '25,40 × 36,50 mm, 2500 szt.', 'Ø 3,81–7,62 mm'],
  ['B33-119-417', '153259', '38,10 × 38,10 mm, 1000 szt.', 'Ø 3,81–8,38 mm'],
  ['B33-73-417', '153260', '19,05 × 44,45 mm, 3500 szt.', 'Ø 5,59–11,43 mm'],
  ['B33-26-417', '153261', '63,50 × 57,15 mm, 500 szt.', 'Ø 6,10–12,19 mm'],
  ['B33-75-417', '153262', '25,40 × 57,15 mm, 1400 szt.', 'Ø 6,60–12,45 mm'],
  ['B33-10-417', '153263', '25,40 × 95,25 mm, 1200 szt.', 'Ø 11,18–22,35 mm'],
  ['B33-27-417', '153264', '50,80 × 95,25 mm, 400 szt.', 'Ø 11,43–16,15 mm'],
  ['B33-81-417', '153265', '25,40 × 152,40 mm, 500 szt.', 'Ø 18,29–36,32 mm'],
]

export const bradyB33Owijki417: Product = {
  ...wspolneB33,
  id: 'brady-b33-75-417',
  slug: 'brady-b33-75-417',
  name: 'Owijki winylowe samolaminujące o dużej przyczepności Brady B-417 do drukarki i3300',
  seoTitle: 'Brady B-417 — owijki winylowe o dużej przyczepności do i3300',
  seoDescription: 'Owijki winylowe Brady B-417 o dużej przyczepności do drukarki Brady i3300: 14 wersji na przewody Ø 2,29–36,32 mm, UL. PN: B33-75-417, B33-56-417, B33-81-417.',
  shortDescription: 'Samolaminujące owijki winylowe B-417 z bardzo mocnym klejem, w 14 wersjach na przewody o średnicy od 2,29 do 36,32 mm. Do drukarki Brady i3300.',
  description: 'Owijki B-417 służą do cienkich przewodów. Bardzo mocny klej akrylowy trzyma marker na przewodzie o małej średnicy. Biała strefa nadruku ma obok przezroczysty ogon, który owija marker i chroni tekst jak laminat. Winyl jest matowy, samolaminujący i trudnopalny. Owijki znakują wiązki kablowe i kable telekomunikacyjne.\n\nJest 14 wersji o szerokości 12,70–63,50 mm; opakowanie mieści 400–5000 sztuk, a owijki sięgają 152,40 mm wysokości (najniższa ma 19,05 mm). Pasują przewody 2,29–36,32 mm; tabela podaje zakres dla każdej wersji. Największa owijka, 50,80 × 95,25 mm, ma pole nadruku 50,80 × 25,40 mm. Najcieńsze przewody, 2,54–3,05 mm, obsługuje wersja 12,70 × 19,05 mm, a najgrubsze, Ø 18,29–36,32 mm, wersja 25,40 × 152,40 mm. Owijki drukują ponadto modele i4311 i i5300.\n\nOdporność obejmuje ścieranie, paliwo, olej, rozpuszczalniki i chemikalia. Grubość folii to 0,107 mm, zakres temperatury −40…70 °C. Norma UL969 obejmuje owijki zadrukowane taśmą B30-R4300 lub B30-R7950; wersję z uznaniem UL wskazuje się w zamówieniu. Kaseta barwiąca do i3300: B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-high-adhesion-self-laminating-vinyl-wire-wraps-cps-4297061',
  images: [
    '/images/products/brady/b33-75-417.png',
    '/images/products/brady/b33-56-417.png',
    '/images/products/brady/b33-81-417.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-75-417 na uchwycie z wysuniętym paskiem białych owijek winylowych 25,40 × 57,15 mm',
    'Rolka Brady B33-56-417 z małymi owijkami winylowymi 19,05 × 23,80 mm na cienkie przewody',
    'Rolka Brady B33-81-417 z wysokimi owijkami winylowymi 25,40 × 152,40 mm na przewody grube',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące owijki na przewody, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-417' },
    { name: 'Typ materiału', value: 'folia winylowa, samolaminująca, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, o dużej przyczepności; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwo, olej, rozpuszczalniki, chemikalia' },
    { name: 'Kolor', value: 'biały z przezroczystym ogonem' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 63,50 mm, wysokość od 19,05 do 152,40 mm' },
    { name: 'Liczba sztuk', value: 'od 400 do 5000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,29 do 36,32 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL969 (UL Recognised) przy nadruku taśmami B30-R4300 i B30-R7950' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: OWIJKI_417.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: OWIJKI_417.map(([pn, , rozmiar, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — owijka winylowa ${rozmiar.replace(/, \d+ szt\./, '')} na przewód ${przewod}`,
    attributes: { Rozmiar: rozmiar, Przewód: przewod },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość owijki oraz liczba sztuk w opakowaniu.\n\nOpakowanie liczy od 400 do 5000 sztuk, a wysokość sięga 152,40 mm.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje owijka.\n\nNajcieńsza wersja obejmuje Ø 2,54–3,05 mm, a największa Ø 18,29–36,32 mm.',
  },
  faq: [
    { question: 'Do czego służy duża przyczepność owijek B-417?', answer: 'Mocny klej akrylowy utrzymuje marker na przewodach o małej średnicy. Zakres przewodu każdej wersji podaje kolumna Przewód.' },
    { question: 'Czy owijki B-417 mają uznanie UL?', answer: 'Uznanie UL969 obowiązuje przy nadruku taśmą B30-R4300 lub B30-R7950. Wersję z uznaniem UL należy wskazać przy zamówieniu.' },
    { question: 'Jaką taśmę barwiącą zamówić do owijek B-417?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Owijki drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Oznaczanie cienkich przewodów', 'Znakowanie wiązek kablowych', 'Okablowanie telekomunikacyjne'],
}

// ---------------------------------------------------------------------------
// BradyGrip B-414 — materiał z rzepem do druku (cps-3413315)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość]
const BRADYGRIP_414: [string, string, string][] = [
  ['B33C-250-414', '151520', '6,35'],
  ['B33C-500-414', '151521', '12,70'],
  ['B33C-750-414', '151522', '19,05'],
]

export const bradyB33BradyGrip414: Product = {
  ...wspolneB33,
  id: 'brady-b33c-500-414',
  slug: 'brady-b33c-500-414',
  name: 'Materiał z rzepem do druku Brady BradyGrip B-414 do drukarki i3300',
  seoTitle: 'Brady BradyGrip B-414 — materiał z rzepem do drukarki i3300',
  seoDescription: 'Materiał z rzepem do druku Brady BradyGrip B-414 do drukarki Brady i3300: taśma ciągła 15,24 m, 3 szerokości. PN: B33C-250-414, B33C-500-414, B33C-750-414.',
  shortDescription: 'Brady BradyGrip B-414 to poliestrowa taśma ciągła z rzepem do druku, w szerokościach 6,35, 12,70 i 19,05 mm. Do drukarki Brady i3300.',
  description: 'BradyGrip B-414 to poliestrowy materiał do druku z warstwą rzepu (częścią haczykową), opracowany we współpracy z producentem rzepów. Wydrukowany pasek przykleja się do opaski z rzepem ONE-WRAP, a całą opaskę zakłada się na wiązkę przewodów lub kabli. Oznaczenie można przestawić albo zdjąć. Nie uszkadza przewodów, tak jak robią to nylonowe opaski zaciskowe. Dzięki temu wiązkę łatwo rozpoznać i odszukać przy późniejszej modyfikacji. Identyfikacja powstaje od razu przy drukarce, co skraca przestoje i ogranicza poprawki.\n\nTaśma jest nawinięta na rolkę 15,24 m. Wybiera się szerokość 6,35, 12,70 lub 19,05 mm, a powierzchnia do druku jest biała i matowa. Opaski ONE-WRAP, do których materiał przeznaczono, mają rozmiary 6,35–13,0 mm i nie wchodzą w skład zestawu. Opakowanie zawiera jedną rolkę, a kasetę barwiącą kupuje się osobno. Drukują ją i3300, BBP33, i4311 oraz i5300.\n\nPoliester ma 0,381 mm grubości. Użytkować go można między −40 a 50 °C. Opiera się ścieraniu, wilgoci i wahaniom temperatury. Nadruk wykonuje kaseta B30-R10000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-bradygrip-print-on-hook-material-featuring-velcro-brand-hook-cps-3413315',
  images: [
    '/images/products/brady/b33c-500-414.png',
    '/images/products/brady/b33c-250-414.png',
    '/images/products/brady/b33c-750-414.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33C-500-414 na uchwycie z wysuniętą białą taśmą BradyGrip o szerokości 12,70 mm',
    'Rolka Brady B33C-250-414 z wąską białą taśmą BradyGrip o szerokości 6,35 mm',
    'Rolka Brady B33C-750-414 z białą taśmą BradyGrip o szerokości 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej z rzepem do druku, bez taśmy barwiącej' },
    { name: 'Nazwa handlowa', value: 'BradyGrip' },
    { name: 'Materiał', value: 'B-414' },
    { name: 'Typ materiału', value: 'poliester z warstwą rzepu (część haczykowa)' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'rzep; oznaczenie można przestawiać i zdejmować' },
    { name: 'Grubość', value: '0,381 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, zmiany temperatury' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '6,35 / 12,70 / 19,05 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: BRADYGRIP_414.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: BRADYGRIP_414.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — taśma BradyGrip z rzepem ${szer} mm × 15,24 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 15,24 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 6,35, 12,70 albo 19,05 mm, a rolka zawiera 15,24 m materiału.',
  },
  faq: [
    { question: 'Czy opaska ONE-WRAP wchodzi w skład zestawu z BradyGrip?', answer: 'Nie. Materiał BradyGrip sprzedaje się osobno. Opaskę ONE-WRAP w rozmiarze od 6,35 do 13,0 mm należy zamówić oddzielnie.' },
    { question: 'Czy oznaczenie z BradyGrip można przestawić?', answer: 'Tak. Rzep pozwala zdjąć i ponownie założyć oznaczenie, a przewody pozostają nieuszkodzone.' },
    { question: 'Jaką taśmę barwiącą zamówić do BradyGrip?', answer: 'Zaleca się taśmę barwiącą B30-R10000. Materiał drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Oznaczanie wiązek przewodów i kabli', 'Znaczniki wielokrotnego użytku na opaskach z rzepem', 'Szybkie odnajdywanie wiązek przy modyfikacjach okablowania'],
}

// ---------------------------------------------------------------------------
// Poliimid UltraTemp B-472: etykiety (cps-3069378) i taśma ciągła (cps-3069266); bez B33-29-472YL (brak danych)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, kolor]
const POLIIMID_472: [string, string, string, string][] = [
  ['B33-11-472', '133778', '6,35 × 6,35 mm, 15000 szt.', 'Biały'],
  ['B33-1-472', '133796', '19,05 × 6,35 mm, 5000 szt.', 'Biały'],
  ['B33-2-472', '133835', '22,86 × 6,35 mm, 5000 szt.', 'Biały'],
  ['B33-5-472', '133890', '25,40 × 12,70 mm, 5000 szt.', 'Biały'],
  ['B33-5-472-YL', '133891', '25,40 × 12,70 mm, 5000 szt.', 'Żółty'],
  ['B33-29-472', '133849', '31,75 × 9,53 mm, 5000 szt.', 'Biały'],
  ['B33C-1000-472', '133982', 'ciągła 25,40 mm × 25,91 m', 'Biały'],
  ['B33C-1000-472YL', '133983', 'ciągła 25,40 mm × 25,91 m', 'Żółty'],
  ['B33C-1500-472', '133986', 'ciągła 38,10 mm × 25,91 m', 'Biały'],
  ['B33C-1500-472YL', '133987', 'ciągła 38,10 mm × 25,91 m', 'Żółty'],
  ['B33C-2000-472', '133992', 'ciągła 50,80 mm × 25,91 m', 'Biały'],
  ['B33C-2000-472YL', '133993', 'ciągła 50,80 mm × 25,91 m', 'Żółty'],
  ['B33C-3000-472', '133999', 'ciągła 76,20 mm × 25,91 m', 'Biały'],
  ['B33C-3000-472YL', '134002', 'ciągła 76,20 mm × 25,91 m', 'Żółty'],
]

export const bradyB33Poliimid472: Product = {
  ...wspolneB33,
  id: 'brady-b33-5-472',
  slug: 'brady-b33-5-472',
  name: 'Etykiety i taśma ciągła z poliimidu Brady UltraTemp B-472 na przewody do drukarki i3300',
  seoTitle: 'Brady UltraTemp B-472 — poliimid na przewody do drukarki i3300',
  seoDescription: 'Poliimid Brady UltraTemp B-472 do drukarki Brady i3300: samogasnące etykiety i taśma ciągła, od −70 do 100 °C. PN: B33-5-472, B33-1-472, B33C-1500-472.',
  shortDescription: 'Samogasnące etykiety i taśma ciągła z matowego poliimidu UltraTemp B-472, białe lub żółte, od −70 do 100 °C. Do drukarki Brady i3300.',
  description: 'UltraTemp B-472 to matowy poliimid, który sam gaśnie i nie rozprzestrzenia płomienia. Akrylowy klej o trwałym działaniu łączy się z gładkimi i chropowatymi powierzchniami. Do druku służy termotransfer. Poliimid stosuje się w wiązkach przewodów, w okablowaniu telekomunikacyjnym i w etykietach, które muszą być samogasnące.\n\nWersji jest 14, w dwóch formach. Gotowe etykiety to sześć małych wersji, a pudełko mieści 5000 albo 15000 sztuk. Osiem wersji to taśma ciągła na rolce 25,91 m, o szerokościach 25,40; 38,10; 50,80 i 76,20 mm. Dostępny jest kolor biały oraz, w części wersji, żółty. Taśma ciągła ma oba kolory w każdej szerokości, a wersje żółte są oznaczone końcówką YL. Poliimid drukują też BBP33, i4311 i i5300. Najmniejsza etykieta, kwadrat 6,35 mm, ma dwanaście sztuk w rzędzie.\n\nFolia ma 0,081 mm grubości, a właściwości zachowuje w zakresie −70…100 °C. Chroni ją to przed korozją, wilgocią, UV, chemikaliami i ścieraniem; znosi też niską temperaturę. Kasetę barwiącą B30-R4300 wybiera się do druku w i3300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-matt-top-coated-polyimide-wire-marking-labels-cps-3069378',
  images: [
    '/images/products/brady/b33-5-472.png',
    '/images/products/brady/b33-5-472-yl.png',
    '/images/products/brady/b33c-2000-472.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-5-472 na uchwycie z paskiem białych etykiet z poliimidu 25,40 × 12,70 mm w trzech rzędach',
    'Rolka Brady B33-5-472-YL z żółtymi etykietami z poliimidu 25,40 × 12,70 mm',
    'Rolka Brady B33C-2000-472 z białą taśmą ciągłą z poliimidu o szerokości 50,80 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety i rolki taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Nazwa handlowa', value: 'UltraTemp' },
    { name: 'Materiał', value: 'B-472' },
    { name: 'Typ materiału', value: 'poliimid, samogasnący' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 31,75 × 9,53 mm' },
    { name: 'Liczba sztuk', value: '5000 lub 15000, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '25,40 / 38,10 / 50,80 / 76,20 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '25,91 m' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIIMID_472.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIIMID_472.map(([pn, , rozmiar, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rozmiar.startsWith('ciągła') ? 'taśma ciągła z poliimidu' : 'etykieta z poliimidu'} ${rozmiar.replace(/^ciągła /, '').replace(/, \d+ szt\./, '')}, ${kolor === 'Biały' ? 'biała' : 'żółta'}`,
    attributes: { Rozmiar: rozmiar, Kolor: kolor },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary gotowej etykiety i liczba sztuk albo szerokość i długość taśmy ciągłej.\n\nEtykiety są małe, od 6,35 × 6,35 mm, a taśma ciągła ma 25,91 m długości.',
    Kolor: 'Kolor folii poliimidowej.\n\nKażda szerokość taśmy ciągłej występuje jako biała i żółta. Wśród etykiet żółta jest tylko jedna wersja.',
  },
  faq: [
    { question: 'Co oznacza, że poliimid B-472 jest samogasnący?', answer: 'Materiał zaprojektowano tak, by sam gasł i nie przenosił płomienia. Dlatego stosuje się go tam, gdzie wymagana jest ta właściwość.' },
    { question: 'W jakim zakresie temperatury pracuje UltraTemp B-472?', answer: 'Od −70 do 100 °C. Folia znosi też ścieranie, chemikalia, korozję, wilgoć i UV.' },
    { question: 'Jaką taśmę barwiącą zamówić do poliimidu B-472?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Materiał drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Znakowanie wiązek przewodów', 'Okablowanie telekomunikacyjne', 'Etykiety wymagające właściwości samogasnących'],
}

// ---------------------------------------------------------------------------
// Tedlar B-437 (PVF): etykiety (cps-3069392) i taśma ciągła (cps-3069267); bez B33-11-437, B33-2-437, B33C-1500-437YL, B33C-3000-437YL (brak danych)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, kolor, zakres przewodu (puste = taśma ciągła)]
const TEDLAR_437: [string, string, string, string, string][] = [
  ['B33-1-437', '133791', '19,05 × 6,35 mm, 5000 szt.', 'Biały', 'Ø 0,76–2,03 mm'],
  ['B33-29-437', '133846', '31,75 × 9,53 mm, 5000 szt.', 'Biały', 'Ø 1,27–3,05 mm'],
  ['B33-29-437YL', '133847', '31,75 × 9,53 mm, 5000 szt.', 'Żółty', 'Ø 1,27–3,05 mm'],
  ['B33-5-437', '133888', '25,40 × 12,70 mm, 5000 szt.', 'Biały', 'Ø 1,52–4,06 mm'],
  ['B33-5-437YL', '133889', '25,40 × 12,70 mm, 5000 szt.', 'Żółty', 'Ø 1,52–4,06 mm'],
  ['B33C-1000-437', '133980', 'ciągła 25,40 mm × 25,91 m', 'Biały', ''],
  ['B33C-1000-437YL', '133981', 'ciągła 25,40 mm × 25,91 m', 'Żółty', ''],
  ['B33C-1500-437', '133984', 'ciągła 38,10 mm × 25,91 m', 'Biały', ''],
  ['B33C-2000-437', '133990', 'ciągła 50,80 mm × 25,91 m', 'Biały', ''],
  ['B33C-2000-437YL', '133991', 'ciągła 50,80 mm × 25,91 m', 'Żółty', ''],
  ['B33C-3000-437', '133997', 'ciągła 76,20 mm × 25,91 m', 'Biały', ''],
]

export const bradyB33Tedlar437: Product = {
  ...wspolneB33,
  id: 'brady-b33-29-437',
  slug: 'brady-b33-29-437',
  name: 'Etykiety i taśma ciągła z folii PVF Brady Tedlar B-437 na przewody do drukarki i3300',
  seoTitle: 'Brady Tedlar B-437 — folia PVF na przewody do drukarki i3300',
  seoDescription: 'Folia PVF Brady Tedlar B-437 do drukarki Brady i3300: etykiety i taśma ciągła, od −70 do 135 °C, MIL-M-87958. PN: B33-29-437, B33-5-437, B33C-2000-437.',
  shortDescription: 'Etykiety i taśma ciągła z folii poliwinylofluorkowej Tedlar B-437, białe lub żółte, odporne do 135 °C. Do drukarki Brady i3300.',
  description: 'Tedlar B-437 to matowa folia poliwinylofluorkowa (PVF) pokryta warstwą do druku. Używa się jej głównie do identyfikacji przewodów i kabli, gdy potrzebne są właściwości samogasnące. Folia należy do materiałów do trudnych warunków pracy. Klej akrylowy o trwałym działaniu mocuje folię na powierzchni gładkiej lub chropowatej. Etykiety znakują też płytki drukowane, komponenty i urządzenia; nadruk wykonuje się termotransferem.\n\nWersji jest 11. Pięć to gotowe etykiety, po 5000 sztuk, na przewody Ø 0,76–4,06 mm; najcieńsze obejmuje najmniejsza etykieta. Sześć to taśma ciągła na rolkach, każda po 25,91 m, o szerokości 25,40 mm, 38,10 mm, 50,80 mm albo 76,20 mm. Kolory: biały i żółty. Folię drukują również BBP33, i4311 oraz i5300.\n\nGrubość materiału wynosi 0,091 mm, a temperatura pracy od −70 do 135 °C. Folia ma doskonałą odporność na wodę, olej i inne płyny. Odpowiada wymaganiom MIL-M-87958 (znaczniki przewodów i kabli) i ma aprobaty UL oraz CSA. Kaseta barwiąca B30-R4300 służy do nadruku w i3300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-tedlar-polyvinylflouride-permanent-adhesive-wire-marking-labels-cps-3069392',
  images: [
    '/images/products/brady/b33-29-437yl.png',
    '/images/products/brady/b33c-1000-437.png',
    '/images/products/brady/b33c-2000-437.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-29-437YL na uchwycie z paskiem żółtych etykiet z folii Tedlar 31,75 × 9,53 mm',
    'Rolka Brady B33C-1000-437 z białą taśmą ciągłą z folii Tedlar o szerokości 25,40 mm',
    'Rolka Brady B33C-2000-437 z szeroką białą taśmą ciągłą z folii Tedlar o szerokości 50,80 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety i rolki taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Nazwa handlowa', value: 'Tedlar' },
    { name: 'Materiał', value: 'B-437' },
    { name: 'Typ materiału', value: 'folia poliwinylofluorkowa (PVF), samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,091 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 135 °C' },
    { name: 'Odporność', value: 'woda, olej i inne popularne płyny' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'od 19,05 × 6,35 mm do 31,75 × 9,53 mm' },
    { name: 'Liczba sztuk', value: '5000' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,76 do 4,06 mm (etykiety)' },
    { name: 'Szerokość taśmy', value: '25,40 / 38,10 / 50,80 / 76,20 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '25,91 m' },
    { name: 'Normy', value: 'MIL-M-87958 (znaczniki przewodów i kabli); UL; CSA' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: TEDLAR_437.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TEDLAR_437.map(([pn, , rozmiar, kolor, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rozmiar.startsWith('ciągła') ? 'taśma ciągła z folii Tedlar' : 'etykieta z folii Tedlar'} ${rozmiar.replace(/^ciągła /, '').replace(/, \d+ szt\./, '')}, ${kolor === 'Biały' ? 'biała' : 'żółta'}`,
    attributes: {
      Rozmiar: rozmiar,
      Kolor: kolor,
      ...(przewod ? { Przewód: przewod } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary gotowej etykiety i liczba sztuk albo szerokość i długość taśmy ciągłej.\n\nEtykiety liczą po 5000 sztuk, a taśma ciągła ma 25,91 m długości.',
    Kolor: 'Kolor folii Tedlar.\n\nWystępuje biała i żółta. Żółte są dwie wersje etykiet i dwie wersje taśmy ciągłej.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje etykieta.\n\nEtykiety obejmują od Ø 0,76–2,03 mm do Ø 1,52–4,06 mm. Taśma ciągła nie ma tej wartości.',
  },
  faq: [
    { question: 'Do czego służy folia Tedlar B-437?', answer: 'Najczęściej do identyfikacji przewodów i kabli, gdzie wymagane są właściwości samogasnące. Etykiety oznaczają też płytki drukowane, komponenty i urządzenia.' },
    { question: 'Jakie wymagania spełnia folia Tedlar B-437?', answer: 'Spełnia specyfikację MIL-M-87958 dla samoprzylepnych znaczników przewodów i kabli. Ma też uznanie UL i akceptację CSA.' },
    { question: 'Jaką taśmę barwiącą zamówić do folii Tedlar?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Folię drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Identyfikacja przewodów i kabli', 'Znakowanie płytek drukowanych i komponentów', 'Etykiety w trudnych warunkach pracy'],
}

// ---------------------------------------------------------------------------
// Tkanina winylowa CleanLift B-498 z klejem repozycjonowalnym: etykiety (cps-3069371) i taśma ciągła (cps-3069268); bez B33-91-498 (brak danych)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, zakres przewodu (puste = brak)]
const TKANINA_498: [string, string, string, string][] = [
  ['B33-1-498', '142872', '19,05 × 6,35 mm, 5000 szt.', 'Ø 0,76–2,03 mm'],
  ['B33-5-498', '142966', '25,40 × 12,70 mm, 5000 szt.', 'Ø 1,52–4,06 mm'],
  ['B33-68-498', '143074', '12,70 × 19,05 mm, 5000 szt.', 'Ø 2,54–6,10 mm'],
  ['B33-88-498', '142874', '25,40 × 19,05 mm, 2500 szt.', 'Ø 2,54–6,10 mm'],
  ['B33-254-498', '153080', '19,05 × 19,05 mm, 1000 szt.', 'Ø 2,54–6,10 mm'],
  ['B33-90-498', '142875', '6,35 × 36,50 mm, 2500 szt.', 'Ø 4,57–11,68 mm'],
  ['B33-87-498', '143009', '12,70 × 36,50 mm, 2500 szt.', 'Ø 4,57–11,68 mm'],
  ['B33-95-498', '142876', '20,32 × 36,50 mm, 2300 szt.', 'Ø 4,57–11,68 mm'],
  ['B33-89-498', '142967', '25,40 × 36,50 mm, 2300 szt.', 'Ø 4,57–11,68 mm'],
  ['B33-325-498', '153081', '25,40 × 63,50 mm, 700 szt.', ''],
  ['B33-326-498', '153082', '25,40 × 101,60 mm, 450 szt.', ''],
  ['B33-327-498', '153083', '38,10 × 101,60 mm, 450 szt.', ''],
  ['B33-328-498', '153084', '38,10 × 152,40 mm, 300 szt.', ''],
  ['B33C-312-498', '143064', 'ciągła 7,92 mm × 25,91 m', ''],
  ['B33C-375-498', '143072', 'ciągła 9,53 mm × 25,91 m', ''],
]

export const bradyB33Tkanina498: Product = {
  ...wspolneB33,
  id: 'brady-b33-90-498',
  slug: 'brady-b33-90-498',
  name: 'Etykiety i taśma ciągła z tkaniny winylowej Brady CleanLift B-498 z klejem repozycjonowalnym do drukarki i3300',
  seoTitle: 'Brady CleanLift B-498 — tkanina winylowa do drukarki i3300',
  seoDescription: 'Tkanina winylowa Brady CleanLift B-498 z klejem repozycjonowalnym do drukarki Brady i3300: etykiety i taśma ciągła. PN: B33-90-498, B33-326-498, B33C-375-498.',
  shortDescription: 'Etykiety i taśma ciągła z półbłyszczącej tkaniny winylowej CleanLift B-498 z klejem, który pozwala przestawić etykietę. Do drukarki Brady i3300.',
  description: 'CleanLift B-498 to winylowa tkanina z powłoką pod druk i półbłyszczącą powierzchnią. Kauczukowy klej pozwala zdjąć etykietę i przykleić ją ponownie, a mimo to trzyma pewnie. Przylega do dowolnej czystej, suchej powierzchni, a powłoka daje czytelny wydruk. Zastosowania: przewody, płytki drukowane, komponenty, urządzenia, kody kreskowe oraz śledzenie zasobów.\n\nRodzina liczy 15 wersji: 13 etykiet i dwie taśmy ciągłe na rolkach 25,91 m, o szerokości 7,92 i 9,53 mm. Opakowanie mieści 300–5000 etykiet, a ich szerokość wynosi 6,35–38,10 mm i wysokość 6,35–152,40 mm. Dziewięć owijek ma zakres przewodu, Ø 0,76–11,68 mm, a cztery największe etykiety go nie podają. Najcieńsze przewody, Ø 0,76–2,03 mm, obejmuje najmniejszy format. Drukują go także BBP33, i4311 oraz i5300.\n\nGrubość tkaniny: 0,185 mm. Dopuszczalna praca: −40…80 °C, naklejanie od 10 °C. Odporność dotyczy korozji, wilgoci, UV, pogody, chemikaliów i ścierania; tkanina nadaje się do zamrażarki i ma uznanie UL. Kaseta barwiąca B30-R6200 służy do druku w i3300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-coated-vinyl-cloth-repositionable-adhesive-labels-cps-3069371',
  images: [
    '/images/products/brady/b33-90-498.png',
    '/images/products/brady/b33-326-498.png',
    '/images/products/brady/b33c-375-498.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-90-498 na uchwycie z wąskimi białymi etykietami z tkaniny winylowej 6,35 × 36,50 mm w sześciu rzędach',
    'Rolka Brady B33-326-498 z białymi etykietami z tkaniny winylowej 25,40 × 101,60 mm',
    'Rolka Brady B33C-375-498 z białą taśmą ciągłą z tkaniny winylowej o szerokości 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety i rolki taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Nazwa handlowa', value: 'CleanLift' },
    { name: 'Materiał', value: 'B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa z powłoką do druku' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'kauczukowy, repozycjonowalny; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,185 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, zamrażarka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 38,10 mm, wysokość od 6,35 do 152,40 mm' },
    { name: 'Liczba sztuk', value: 'od 300 do 5000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,76 do 11,68 mm (dziewięć wersji)' },
    { name: 'Szerokość taśmy', value: '7,92 / 9,53 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '25,91 m' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6200' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: TKANINA_498.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TKANINA_498.map(([pn, , rozmiar, przewod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rozmiar.startsWith('ciągła') ? 'taśma ciągła z tkaniny winylowej' : 'etykieta z tkaniny winylowej'} ${rozmiar.replace(/^ciągła /, '').replace(/, \d+ szt\./, '')}${przewod ? ` na przewód ${przewod}` : ''}`,
    attributes: {
      Rozmiar: rozmiar,
      ...(przewod ? { Przewód: przewod } : {}),
    } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk w opakowaniu albo szerokość i długość taśmy ciągłej.\n\nOpakowania liczą od 300 do 5000 sztuk, a taśma ciągła ma 25,91 m długości.',
    Przewód: 'Zakres średnicy przewodu, na który pasuje owijka.\n\nDziewięć wersji ma ten zakres, od Ø 0,76–2,03 mm do Ø 4,57–11,68 mm. Większe etykiety i taśma ciągła go nie podają.',
  },
  faq: [
    { question: 'Co oznacza klej repozycjonowalny w tkaninie B-498?', answer: 'Etykietę można zdjąć i przykleić w innym miejscu, a mimo to dobrze trzyma. Materiał przykleja się do czystych, suchych powierzchni.' },
    { question: 'W jakiej temperaturze można naklejać etykiety B-498?', answer: 'Etykiety należy naklejać w temperaturze co najmniej 10 °C. Po naklejeniu tkanina pracuje od −40 do 80 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do tkaniny B-498?', answer: 'Zaleca się taśmę barwiącą B30-R6200. Materiał drukuje przemysłowa drukarka [Brady i3300](/produkt/brady-i3300) oraz starsza BBP33.' },
  ],
  applications: ['Znakowanie przewodów i płytek drukowanych', 'Etykiety z kodami kreskowymi i śledzenie zasobów', 'Oznaczenia, które trzeba przestawiać'],
}

// ---------------------------------------------------------------------------
// Eksporty
// ---------------------------------------------------------------------------

export const bradyB33Owijki: Product[] = [bradyB33Owijki427, bradyB33Poliester461, bradyB33NylonEtykiety499, bradyB33Etykiety427Bbp33, bradyB33OwijkiObrotowe427, bradyB33Nylon499, bradyB33Owijki417, bradyB33BradyGrip414, bradyB33Poliimid472, bradyB33Tedlar437, bradyB33Tkanina498]

export const bradyB33OwijkiSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = {
  'brady-b33-273-427': 'przewody',
  'brady-b33-134-461': 'przewody',
  'brady-b33-621-499': 'przewody',
  'brady-b33-311-427': 'przewody',
  'brady-b33ro-297-427': 'przewody',
  'brady-b33-137-499': 'przewody',
  'brady-b33-75-417': 'przewody',
  'brady-b33c-500-414': 'przewody',
  'brady-b33-5-472': 'przewody',
  'brady-b33-29-437': 'przewody',
  'brady-b33-90-498': 'przewody',
}
