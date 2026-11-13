import type { Product } from './products'

// Kasety Brady M4 i M5 do drukarki M510 (etykieta i taśma barwiąca w jednej kasecie).
// Jedna karta na rodzinę materiału, rozmiary i kolory jako warianty (jak kasety M21).
// Kasety M4/M4C pasują do M410, M510 i M511, kasety M5/M5C tylko do M510 i M511.
// Stare kasety BMP51 (MC-, MC1-, M-) nie działają w M510 — pominięte.
// Brady nie ma cen ani stanów w /api/stock → karty na zapytanie. 13.11.2026.

const DRUKARKI_M4 = 'M410, M510, M511'
const DRUKARKI_M4_M5 = 'M510 i M511 (kasety M5 i M5C); M410, M510 i M511 (kasety M4 i M4C)'

const wspolne: Pick<Product, 'categoryId' | 'subcategoryIds' | 'manufacturerId' | 'quoteOnly' | 'availability' | 'tags' | 'isNew' | 'isBestseller' | 'compatibleAccessories' | 'relatedAccessories' | 'relatedProducts' | 'downloads' | 'createdAt' | 'updatedAt'> = {
  categoryId: 'materialy-eksploatacyjne',
  subcategoryIds: [],
  manufacturerId: 'brady',
  quoteOnly: true,
  availability: 'unavailable',
  tags: ['produkcja'],
  isNew: true,
  isBestseller: false,
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['brady-m510'],
  downloads: [],
  createdAt: '2026-11-13',
  updatedAt: '2026-11-13',
}

export const bradyM45PermaSleeve: Product = {
  ...wspolne,
  id: 'brady-m5-375-1-342',
  slug: 'brady-m5-375-1-342',
  name: 'Koszulki termokurczliwe Brady PermaSleeve M5-375-1-342 — kasety M4 i M5 do M510',
  seoTitle: 'Brady PermaSleeve M5-375-1-342 — koszulki termokurczliwe do M510',
  seoDescription: 'Koszulki PermaSleeve B-342 do Brady M510: skurcz 3:1, przewody 1,17–8,13 mm, odcinki lub koszulka ciągła 2,13 m. PN: M5-375-1-342, M5-250-1-342, M4C-250-342.',
  shortDescription: 'Brady PermaSleeve M5-375-1-342 i pozostałe kasety M4 i M5 z koszulkami termokurczliwymi z poliolefiny B-342. Skurcz 3:1, przewody od 1,17 do 8,13 mm. Do drukarki Brady M510.',
  description: 'W kasetach Brady PermaSleeve M4 i M5 jest termokurczliwa koszulka z poliolefiny B-342. Drukarka nanosi napis na spłaszczoną koszulkę. Oznaczoną koszulkę zakłada się na przewód, zanim zostanie zaciśnięta końcówka. Pod wpływem ciepła średnica koszulki zmniejsza się trzykrotnie, a koszulka ściśle obejmuje izolację.\n\nRodzina ma trzy formy. Kasety M5 mają 80 odcinków o długości 25,4 mm, a kasety M4 mają 80 odcinków o długości 19,05 mm. Kasety M4C mają 2,13 m koszulki ciągłej, białej albo żółtej. W tej formie długość oznacznika ustawia się w drukarce. Średnica koszulki wynosi 3,18, 4,75, 6,35 albo 9,53 mm. Łącznie rodzina obejmuje przewody o średnicy od 1,17 do 8,13 mm.\n\nPoliolefina B-342 jest trudnopalna i ma matowe wykończenie. Koszulka pracuje w temperaturze od −55 do 135 °C. Materiał spełnia SAE AS-81531 i SAE-AMS-DTL-23053/5 (klasa 1) oraz ma uznanie UL 224. Odcinki M5 są przeznaczone tylko do drukarek M510 i M511, a kasety M4 i M4C działają też w M410.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/permasleeve-heat-shrink-labels-for-m410-m510-m511-printers-cps-3081044',
  images: [
    '/images/products/brady/m5-375-1-342.png',
    '/images/products/brady/m5-125-1-342.png',
    '/images/products/brady/m4c-250-342.png',
    '/images/products/brady/m4c-125-342-yl.png',
    '/images/products/brady/m4c-375-342.png',
  ],
  imageDescriptions: [
    'Kaseta Brady PermaSleeve M5-375-1-342 i pasek białych odcinków koszulki 9,53 mm',
    'Kaseta Brady PermaSleeve M5-125-1-342 z odcinkami koszulki 3,18 mm',
    'Kaseta Brady PermaSleeve M4C-250-342 z białą koszulką ciągłą 6,35 mm',
    'Kaseta Brady PermaSleeve M4C-125-342-YL z żółtą koszulką ciągłą 3,18 mm',
    'Kaseta Brady PermaSleeve M4C-375-342 z białą koszulką ciągłą 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z koszulkami termokurczliwymi i taśmą barwiącą' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; koszulka zaciska się na przewodzie po podgrzaniu' },
    { name: 'Współczynnik skurczu', value: '3:1' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolory', value: 'czarny nadruk na białym tle; czarny nadruk na żółtym tle (kasety M4C 3,18, 4,75 i 6,35 mm)' },
    { name: 'Średnica koszulki', value: '3,18 / 4,75 / 6,35 / 9,53 mm, zależnie od wersji' },
    { name: 'Szerokość koszulki na płasko', value: '5,97 / 8,51 / 11,15 / 16,38 mm' },
    { name: 'Zakres średnic przewodu', value: 'od 1,17 do 8,13 mm, zależnie od wersji' },
    { name: 'Format', value: 'odcinki 25,4 mm, 80 szt. (M5); odcinki 19,05 mm, 80 szt. (M4); koszulka ciągła 2,13 m (M4C)' },
    { name: 'Normy', value: 'UL 224, SAE AS-81531, SAE-AMS-DTL-23053/5 (klasa 1)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4_M5 },
    { name: 'Numery artykułów Brady', value: 'M5-125-1-342: 170852; M5-187-1-342: 170853; M5-250-1-342: 170854; M5-375-1-342: 170855; M4-125-075-342: 170721; M4-187-075-342: 170719; M4-250-075-342: 170720; M4-375-075-342: 170722; M4C-125-342: 170712; M4C-125-342-YL: 170713; M4C-187-342: 170714; M4C-187-342-YL: 170715; M4C-250-342: 170716; M4C-250-342-YL: 170717; M4C-375-342: 170718' },
  ],
  variants: [
    { partNumber: 'M5-375-1-342', name: 'Brady PermaSleeve M5-375-1-342 — 80 białych odcinków 9,53 mm × 25,4 mm', attributes: { 'Średnica kabla': '3,18–8,13 mm', Rodzaj: 'Odcinki 25,4 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M5-250-1-342', name: 'Brady PermaSleeve M5-250-1-342 — 80 białych odcinków 6,35 mm × 25,4 mm', attributes: { 'Średnica kabla': '2,39–5,46 mm', Rodzaj: 'Odcinki 25,4 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M5-187-1-342', name: 'Brady PermaSleeve M5-187-1-342 — 80 białych odcinków 4,75 mm × 25,4 mm', attributes: { 'Średnica kabla': '1,57–3,81 mm', Rodzaj: 'Odcinki 25,4 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M5-125-1-342', name: 'Brady PermaSleeve M5-125-1-342 — 80 białych odcinków 3,18 mm × 25,4 mm', attributes: { 'Średnica kabla': '1,17–2,79 mm', Rodzaj: 'Odcinki 25,4 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4-375-075-342', name: 'Brady PermaSleeve M4-375-075-342 — 80 białych odcinków 9,53 mm × 19,05 mm', attributes: { 'Średnica kabla': '3,18–8,13 mm', Rodzaj: 'Odcinki 19,05 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4-250-075-342', name: 'Brady PermaSleeve M4-250-075-342 — 80 białych odcinków 6,35 mm × 19,05 mm', attributes: { 'Średnica kabla': '2,39–5,46 mm', Rodzaj: 'Odcinki 19,05 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4-187-075-342', name: 'Brady PermaSleeve M4-187-075-342 — 80 białych odcinków 4,75 mm × 19,05 mm', attributes: { 'Średnica kabla': '1,57–3,81 mm', Rodzaj: 'Odcinki 19,05 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4-125-075-342', name: 'Brady PermaSleeve M4-125-075-342 — 80 białych odcinków 3,18 mm × 19,05 mm', attributes: { 'Średnica kabla': '1,17–2,79 mm', Rodzaj: 'Odcinki 19,05 mm, 80 szt.', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4C-375-342', name: 'Brady PermaSleeve M4C-375-342 — koszulka ciągła 9,53 mm, 2,13 m, biała', attributes: { 'Średnica kabla': '3,18–8,13 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4C-250-342', name: 'Brady PermaSleeve M4C-250-342 — koszulka ciągła 6,35 mm, 2,13 m, biała', attributes: { 'Średnica kabla': '2,39–5,46 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4C-250-342-YL', name: 'Brady PermaSleeve M4C-250-342-YL — koszulka ciągła 6,35 mm, 2,13 m, żółta', attributes: { 'Średnica kabla': '2,39–5,46 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Żółty' }, availability: 'unavailable' },
    { partNumber: 'M4C-187-342', name: 'Brady PermaSleeve M4C-187-342 — koszulka ciągła 4,75 mm, 2,13 m, biała', attributes: { 'Średnica kabla': '1,57–3,81 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4C-187-342-YL', name: 'Brady PermaSleeve M4C-187-342-YL — koszulka ciągła 4,75 mm, 2,13 m, żółta', attributes: { 'Średnica kabla': '1,57–3,81 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Żółty' }, availability: 'unavailable' },
    { partNumber: 'M4C-125-342', name: 'Brady PermaSleeve M4C-125-342 — koszulka ciągła 3,18 mm, 2,13 m, biała', attributes: { 'Średnica kabla': '1,17–2,79 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'M4C-125-342-YL', name: 'Brady PermaSleeve M4C-125-342-YL — koszulka ciągła 3,18 mm, 2,13 m, żółta', attributes: { 'Średnica kabla': '1,17–2,79 mm', Rodzaj: 'Ciągła, 2,13 m', Kolor: 'Żółty' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Średnica kabla': 'Zakres średnic przewodu w izolacji, na którym koszulka zaciska się po podgrzaniu.\n\nKoszulka 3,18 mm obejmuje przewody od 1,17 mm. Koszulka 9,53 mm obejmuje przewody do 8,13 mm.',
    Rodzaj: 'Forma koszulki w kasecie.\n\nOdcinki mają stałą długość: 25,4 mm w kasetach M5 i 19,05 mm w kasetach M4. Kaseta ma 80 odcinków.\n\nKoszulka ciągła ma 2,13 m. Długość oznacznika ustawia się w drukarce.',
    Kolor: 'Kolor koszulki. Nadruk jest zawsze czarny.\n\nŻółta koszulka jest tylko w kasetach ciągłych 3,18, 4,75 i 6,35 mm.',
  },
  faq: [
    { question: 'Czym różnią się kasety PermaSleeve M5, M4 i M4C?', answer: 'Formą koszulki. Kasety M5 mają 80 odcinków o długości 25,4 mm, kasety M4 mają 80 odcinków o długości 19,05 mm, a kasety M4C mają 2,13 m koszulki ciągłej. Kasety M5 pasują tylko do [Brady M510](/produkt/brady-m510) i M511. Kasety M4 i M4C pasują także do M410.' },
    { question: 'Jak dobrać koszulkę PermaSleeve do średnicy przewodu?', answer: 'Według średnicy przewodu w izolacji. Koszulka 3,18 mm pasuje do przewodów od 1,17 do 2,79 mm, 4,75 mm od 1,57 do 3,81 mm, 6,35 mm od 2,39 do 5,46 mm, a 9,53 mm od 3,18 do 8,13 mm.' },
    { question: 'Kiedy zakłada się koszulkę termokurczliwą na przewód?', answer: 'Przed zaciśnięciem końcówki albo podłączeniem przewodu. Koszulkę nasuwa się na przewód i podgrzewa. Po skurczu koszulka trzyma się izolacji bez kleju.' },
  ],
  applications: ['Oznaczanie przewodów koszulkami termokurczliwymi', 'Szafy sterownicze i rozdzielnice', 'Wiązki przewodów'],
}

export const bradyM45CleanLift: Product = {
  ...wspolne,
  id: 'brady-m5-103-498',
  slug: 'brady-m5-103-498',
  name: 'Etykiety winylowe do przeklejania Brady CleanLift M5-103-498 — kasety M4 i M5 do M510',
  seoTitle: 'Brady CleanLift M5-103-498 — etykiety do przeklejania do M510',
  seoDescription: 'Brady CleanLift B-498 do M510: etykiety z tkaniny winylowej z klejem do przeklejania, 8 rozmiarów. PN: M5-103-498, M4-11-498, M4-49-498, M4-91-498.',
  shortDescription: 'Brady CleanLift M5-103-498 i kasety M4-498 — wykrawane etykiety z tkaniny winylowej B-498. Klej pozwala odkleić etykietę i nakleić ją ponownie. Do drukarki Brady M510.',
  description: 'Kasety Brady CleanLift zawierają wykrawane etykiety z tkaniny winylowej B-498. Klej kauczukowy pozwala odkleić etykietę i nakleić ją w innym miejscu. Dzięki temu oznaczenie można poprawić albo przenieść po zmianie w instalacji. Tkanina winylowa jest giętka i układa się na przewodach oraz zaokrąglonych powierzchniach. Wykończenie jest półbłyszczące, a nadruk czarny na białym tle.\n\nW rodzinie jest osiem rozmiarów, od 12,7 × 12,7 mm do 48,26 × 25,4 mm. Kaseta mieści od 100 do 240 etykiet. Sześć rozmiarów owija się wokół przewodu. Najmniejsze etykiety obejmują przewody od 4 mm, a etykieta 25,4 × 38,1 mm obejmuje przewody do 20,19 mm.\n\nTkanina B-498 ma uznanie UL i jest przeznaczona do pracy od −40 do 80 °C. Kaseta M5-103-498 z etykietami 25,4 × 31,75 mm działa tylko w M510 i M511. Siedem kaset M4 obsługuje także drukarka M410.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/repositionable-multi-purpose-vinyl-cloth-labels-for-m410-m510-m511-printers-cps-4661496',
  images: [
    '/images/products/brady/m5-103-498.png',
    '/images/products/brady/m4-11-498.png',
    '/images/products/brady/m4-91-498.png',
    '/images/products/brady/m4-128-498.png',
  ],
  imageDescriptions: [
    'Kaseta Brady CleanLift M5-103-498 i pasek etykiet winylowych z kodem kreskowym',
    'Kaseta Brady CleanLift M4-11-498 z małymi etykietami 19,05 × 12,7 mm na przewody',
    'Kaseta Brady CleanLift M4-91-498 z etykietami 25,4 × 38,1 mm na grubsze przewody',
    'Kaseta Brady CleanLift M4-128-498 z etykietami 48,26 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi etykietami i taśmą barwiącą' },
    { name: 'Materiał', value: 'CleanLift B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'kauczukowy, do przeklejania; etykietę można odkleić i nakleić ponownie' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Kolor', value: 'czarny nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '12,7 × 12,7 / 19,05 × 12,7 / 25,4 × 12,7 / 25,4 × 19,05 / 25,4 × 25,4 / 25,4 × 31,75 / 25,4 × 38,1 / 48,26 × 25,4 mm, zależnie od wersji' },
    { name: 'Liczba etykiet w kasecie', value: 'od 100 do 240, zależnie od rozmiaru' },
    { name: 'Zakres średnic przewodu', value: 'od 4 do 20,19 mm, zależnie od rozmiaru (M4-128-498 i M5-103-498 nie są przeznaczone do owijania)' },
    { name: 'Format', value: 'etykiety wykrawane' },
    { name: 'Normy', value: 'uznanie UL' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4_M5 },
    { name: 'Numery artykułów Brady', value: 'M5-103-498: 170926; M4-7-498: 170787; M4-11-498: 170785; M4-131-498: 170788; M4-48-498: 170790; M4-49-498: 170791; M4-91-498: 170789; M4-128-498: 170792' },
  ],
  variants: [
    { partNumber: 'M5-103-498', name: 'Brady CleanLift M5-103-498 — 160 etykiet 25,4 × 31,75 mm', attributes: { Rozmiar: '25,4 × 31,75 mm, 160 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-7-498', name: 'Brady CleanLift M4-7-498 — 240 etykiet 12,7 × 12,7 mm', attributes: { Rozmiar: '12,7 × 12,7 mm, 240 szt.', 'Średnica kabla': '4–8,1 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-11-498', name: 'Brady CleanLift M4-11-498 — 220 etykiet 19,05 × 12,7 mm', attributes: { Rozmiar: '19,05 × 12,7 mm, 220 szt.', 'Średnica kabla': '4–8,1 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-131-498', name: 'Brady CleanLift M4-131-498 — 180 etykiet 25,4 × 12,7 mm', attributes: { Rozmiar: '25,4 × 12,7 mm, 180 szt.', 'Średnica kabla': '4–8,1 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-48-498', name: 'Brady CleanLift M4-48-498 — 180 etykiet 25,4 × 19,05 mm', attributes: { Rozmiar: '25,4 × 19,05 mm, 180 szt.', 'Średnica kabla': '6,7–14,2 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-49-498', name: 'Brady CleanLift M4-49-498 — 160 etykiet 25,4 × 25,4 mm', attributes: { Rozmiar: '25,4 × 25,4 mm, 160 szt.', 'Średnica kabla': '7,11–13,11 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-91-498', name: 'Brady CleanLift M4-91-498 — 120 etykiet 25,4 × 38,1 mm', attributes: { Rozmiar: '25,4 × 38,1 mm, 120 szt.', 'Średnica kabla': '10,8–20,19 mm' }, availability: 'unavailable' },
    { partNumber: 'M4-128-498', name: 'Brady CleanLift M4-128-498 — 100 etykiet 48,26 × 25,4 mm', attributes: { Rozmiar: '48,26 × 25,4 mm, 100 szt.' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość × wysokość etykiety z tkaniny winylowej i liczba etykiet w kasecie.\n\nNajmniejsze etykiety, 12,7 × 12,7 mm, są po 240 sztuk. Największe, 48,26 × 25,4 mm, są po 100 sztuk.',
    'Średnica kabla': 'Zakres średnic przewodu, wokół którego owija się etykietę.\n\nEtykieta 25,4 × 38,1 mm obejmuje najgrubsze przewody, do 20,19 mm.',
  },
  faq: [
    { question: 'Czy etykietę CleanLift można przenieść w inne miejsce?', answer: 'Tak. Klej kauczukowy pozwala odkleić etykietę z tkaniny winylowej B-498 i nakleić ją ponownie. Oznaczenie można więc poprawić po zmianie w instalacji.' },
    { question: 'Które etykiety CleanLift owija się wokół przewodu?', answer: 'Sześć rozmiarów z kaset M4. Etykiety 12,7 × 12,7, 19,05 × 12,7 i 25,4 × 12,7 mm obejmują przewody od 4 do 8,1 mm. Etykieta 25,4 × 19,05 mm obejmuje przewody od 6,7 do 14,2 mm, 25,4 × 25,4 mm od 7,11 do 13,11 mm, a 25,4 × 38,1 mm od 10,8 do 20,19 mm.' },
    { question: 'Czy kaseta M5-103-498 pasuje do Brady M410?', answer: 'Nie. Kasety z numerem M5 pasują tylko do [Brady M510](/produkt/brady-m510) i M511. Do M410 służą kasety M4 z tej rodziny.' },
  ],
  applications: ['Oznaczenia, które się poprawia lub przenosi', 'Etykiety owijane na przewody', 'Oznaczanie urządzeń i elementów'],
}

// Kolor tła i nadruku według końcówki PN (TŁO-NADRUK). Przezroczysta taśma (CL) ma 6,1 m, pozostałe 7,62 m.
const KOLORY_595: Record<string, string> = {
  'WT-BK': 'Biały, czarny nadruk',
  'WT-RD': 'Biały, czerwony nadruk',
  'YL-BK': 'Żółty, czarny nadruk',
  'OR-BK': 'Pomarańczowy, czarny nadruk',
  'BK-WT': 'Czarny, biały nadruk',
  'BL-WT': 'Niebieski, biały nadruk',
  'GN-WT': 'Zielony, biały nadruk',
  'RD-WT': 'Czerwony, biały nadruk',
  'CL-BK': 'Przezroczysty, czarny nadruk',
  'CL-WT': 'Przezroczysty, biały nadruk',
}
const PELNA_PALETA_595 = Object.keys(KOLORY_595)
const CIAGLE_595: [string, string, string[]][] = [
  ['M5C-1500', '38,1 mm', PELNA_PALETA_595],
  ['M4C-1000', '25,4 mm', PELNA_PALETA_595],
  ['M4C-750', '19,05 mm', PELNA_PALETA_595],
  ['M4C-500', '12,7 mm', PELNA_PALETA_595],
  ['M4C-375', '9,53 mm', ['WT-BK', 'YL-BK', 'RD-WT']],
  ['M4C-250', '6,35 mm', ['WT-BK', 'YL-BK']],
]
const WYKRAWANE_595: [string, string, string][] = [
  ['M5-31-595', '38,1 × 25,4 mm', '250'],
  ['M4-7-595', '12,7 × 12,7 mm', '280'],
  ['M4-11-595', '19,05 × 12,7 mm', '360'],
  ['M4-17-595', '25,4 × 12,7 mm', '360'],
  ['M4-49-595', '25,4 × 25,4 mm', '160'],
  ['M4-22-595', '25,4 × 76,2 mm', '100'],
]

export const bradyM45Winyl: Product = {
  ...wspolne,
  id: 'brady-m5c-1500-595-wt-bk',
  slug: 'brady-m5c-1500-595-wt-bk',
  name: 'Etykiety winylowe Brady M5C-1500-595-WT-BK — kasety B-595 na zewnątrz do M510',
  seoTitle: 'Brady M5C-1500-595-WT-BK — etykiety winylowe B-595 do M510',
  seoDescription: 'Winyl Brady B-595 do M510 na zewnątrz: taśma 6,35–38,1 mm w 10 wersjach kolorów i etykiety wykrawane, BS 5609. PN: M5C-1500-595-WT-BK, M4C-1000-595-YL-BK.',
  shortDescription: 'Brady M5C-1500-595-WT-BK i pozostałe kasety M4 i M5 z winylem B-595 do pracy na zewnątrz. Taśma ciągła od 6,35 do 38,1 mm w 10 wersjach kolorów oraz etykiety wykrawane. Do drukarki Brady M510.',
  description: 'Kasety Brady z winylem B-595 służą do trwałych oznaczeń w zakładzie i na zewnątrz budynków. Winyl ma błyszczącą powierzchnię i mocny, trwały klej akrylowy. Etykiety są przeznaczone do trudnych warunków. Materiał spełnia wymagania BS 5609, sekcje 2 i 3. Etykiety pracują w zakresie temperatur od −40 do 82 °C.\n\nWiększość kaset ma taśmę ciągłą o szerokości od 6,35 do 38,1 mm. Długość etykiety ustawia się w drukarce. Taśma kolorowa i biała ma 7,62 m, a przezroczysta 6,1 m. Szerokości 12,7, 19,05, 25,4 i 38,1 mm są w 10 wersjach kolorów, także z czerwonym nadrukiem na białym tle. Na przezroczystym tle nadruk jest czarny albo biały. W rodzinie jest też sześć kaset z białymi etykietami wykrawanymi, od 12,7 × 12,7 mm do 25,4 × 76,2 mm.\n\nKaseta M5C-1500-595-WT-BK z białą taśmą 38,1 mm jest w zestawach drukarki M510. Kasety z numerem M5 lub M5C współpracują z M510 i M511. Kasety M4 i M4C można stosować w M410, M510 i M511.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/all-weather-permanent-adhesive-vinyl-labels-for-m410-m510-m511-printers-cps-3069495',
  images: [
    '/images/products/brady/m5c-1500-595-wt-bk.png',
    '/images/products/brady/m5c-1500-595-yl-bk.png',
    '/images/products/brady/m5c-1500-595-rd-wt.png',
    '/images/products/brady/m5c-1500-595-bl-wt.png',
    '/images/products/brady/m5c-1500-595-cl-bk.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M5C-1500-595-WT-BK z białą taśmą winylową 38,1 mm i czarnym nadrukiem',
    'Kaseta Brady M5C-1500-595-YL-BK z żółtą taśmą winylową 38,1 mm',
    'Kaseta Brady M5C-1500-595-RD-WT z czerwoną taśmą winylową i białym nadrukiem',
    'Kaseta Brady M5C-1500-595-BL-WT z niebieską taśmą winylową i białym nadrukiem',
    'Kaseta Brady M5C-1500-595-CL-BK z przezroczystą taśmą winylową i czarnym nadrukiem',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą etykietową lub etykietami wykrawanymi i taśmą barwiącą' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl do pracy wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Kolory', value: 'czarny nadruk na tle białym, żółtym, pomarańczowym lub przezroczystym; biały nadruk na tle czarnym, niebieskim, zielonym, czerwonym lub przezroczystym; czerwony nadruk na białym tle' },
    { name: 'Szerokość taśmy ciągłej', value: '6,35 / 9,53 / 12,7 / 19,05 / 25,4 / 38,1 mm, zależnie od wersji' },
    { name: 'Wymiary etykiet wykrawanych', value: '12,7 × 12,7 / 19,05 × 12,7 / 25,4 × 12,7 / 25,4 × 25,4 / 25,4 × 76,2 / 38,1 × 25,4 mm' },
    { name: 'Format', value: 'taśma ciągła 7,62 m (przezroczysta 6,1 m) albo etykiety wykrawane, od 100 do 360 sztuk' },
    { name: 'Normy', value: 'BS 5609, sekcje 2 i 3' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4_M5 },
    { name: 'Numery artykułów Brady', value: 'M5C-1500-595-WT-BK: 170944; M5C-1500-595-WT-RD: 170945; M5C-1500-595-YL-BK: 170946; M5C-1500-595-OR-BK: 170942; M5C-1500-595-BK-WT: 170947; M5C-1500-595-BL-WT: 170939; M5C-1500-595-GN-WT: 170941; M5C-1500-595-RD-WT: 170943; M5C-1500-595-CL-BK: 170940; M5C-1500-595-CL-WT: 170948; M4C-1000-595-WT-BK: 170833; M4C-1000-595-WT-RD: 170840; M4C-1000-595-YL-BK: 170834; M4C-1000-595-OR-BK: 170835; M4C-1000-595-BK-WT: 170841; M4C-1000-595-BL-WT: 170836; M4C-1000-595-GN-WT: 170839; M4C-1000-595-RD-WT: 170837; M4C-1000-595-CL-BK: 170838; M4C-1000-595-CL-WT: 170842; M4C-750-595-WT-BK: 170830; M4C-750-595-WT-RD: 170831; M4C-750-595-YL-BK: 170832; M4C-750-595-OR-BK: 170828; M4C-750-595-BK-WT: 170823; M4C-750-595-BL-WT: 170824; M4C-750-595-GN-WT: 170827; M4C-750-595-RD-WT: 170829; M4C-750-595-CL-BK: 170825; M4C-750-595-CL-WT: 170826; M4C-500-595-WT-BK: 170818; M4C-500-595-WT-RD: 170819; M4C-500-595-YL-BK: 170820; M4C-500-595-OR-BK: 170816; M4C-500-595-BK-WT: 170821; M4C-500-595-BL-WT: 170813; M4C-500-595-GN-WT: 170815; M4C-500-595-RD-WT: 170817; M4C-500-595-CL-BK: 170814; M4C-500-595-CL-WT: 170822; M4C-375-595-WT-BK: 170843; M4C-375-595-YL-BK: 170844; M4C-375-595-RD-WT: 170845; M4C-250-595-WT-BK: 170949; M4C-250-595-YL-BK: 170950; M5-31-595: 176807; M4-7-595: 176803; M4-11-595: 176804; M4-17-595: 176805; M4-49-595: 176806; M4-22-595: 177010' },
  ],
  variants: [
    ...CIAGLE_595.flatMap(([prefiks, szerokosc, kolory]) => kolory.map((k) => {
      const dlugosc = k.startsWith('CL') ? '6,1 m' : '7,62 m'
      return {
        partNumber: `${prefiks}-595-${k}`,
        name: `Brady ${prefiks}-595-${k} — winyl ${szerokosc} × ${dlugosc}, ${KOLORY_595[k].toLowerCase()}`,
        attributes: { Rozmiar: `${szerokosc} × ${dlugosc}`, Kolor: KOLORY_595[k] },
        availability: 'unavailable' as const,
      }
    })),
    ...WYKRAWANE_595.map(([pn, wymiary, sztuk]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${sztuk} etykiet winylowych ${wymiary}, białe`,
      attributes: { Rozmiar: `${wymiary}, ${sztuk} szt.`, Kolor: KOLORY_595['WT-BK'] },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Taśma ciągła albo etykiety wykrawane.\n\nTaśma ciągła ma szerokość od 6,35 do 38,1 mm i długość 7,62 m (przezroczysta 6,1 m). Długość etykiety ustawia się w drukarce.\n\nEtykiety wykrawane mają stały rozmiar, od 100 do 360 sztuk w kasecie. Szerokość 38,1 mm mają tylko kasety M5 i M5C.',
    Kolor: 'Kolor tła i kolor nadruku.\n\nNa tle białym, żółtym i pomarańczowym nadruk jest czarny. Na tle czarnym, niebieskim, zielonym i czerwonym nadruk jest biały.\n\nTaśma przezroczysta ma nadruk czarny albo biały.',
  },
  faq: [
    { question: 'Która kaseta z winylem B-595 jest w zestawie z drukarką Brady M510?', answer: 'Kaseta M5C-1500-595-WT-BK z białą taśmą 38,1 mm × 7,62 m i czarnym nadrukiem. Jest w zestawie M510-KIT-EU i w opakowaniu M510-EU drukarki [Brady M510](/produkt/brady-m510).' },
    { question: 'Czy etykiety z winylu B-595 nadają się na zewnątrz?', answer: 'Tak. Winyl B-595 jest przeznaczony do pracy wewnątrz i na zewnątrz. Spełnia wymagania BS 5609, sekcje 2 i 3, i pracuje w temperaturze od −40 do 82 °C.' },
    { question: 'Jakie kolory ma taśma B-595?', answer: 'Szerokości 12,7, 19,05, 25,4 i 38,1 mm są w 10 wersjach: białej z czarnym albo czerwonym nadrukiem, żółtej, pomarańczowej, czarnej, niebieskiej, zielonej, czerwonej oraz przezroczystej z czarnym albo białym nadrukiem. Taśma 9,53 mm jest biała, żółta albo czerwona, a 6,35 mm biała albo żółta.' },
  ],
  applications: ['Oznaczenia na zewnątrz budynków', 'Oznaczenia elektryczne i urządzeń', 'Oznaczanie rur i zaworów', 'Oznaczenia obiektów i 5S'],
}

export const bradyM45ToughBond422: Product = {
  ...wspolne,
  id: 'brady-m5c-1500-422',
  slug: 'brady-m5c-1500-422',
  name: 'Etykiety poliestrowe Brady ToughBond M5C-1500-422 — kasety B-422 do M510',
  seoTitle: 'Brady ToughBond M5C-1500-422 — etykiety poliestrowe do M510',
  seoDescription: 'Poliester Brady ToughBond B-422 do M510: taśma 9,53–38,1 mm × 7,62 m lub etykiety wykrawane, od −40 do 100 °C. PN: M5C-1500-422, M4C-1000-422, M4-49-422.',
  shortDescription: 'Brady ToughBond M5C-1500-422 i kasety M4-422 — etykiety z białego poliestru B-422 z agresywnym klejem akrylowym. Taśma ciągła albo etykiety wykrawane. Do drukarki Brady M510.',
  description: 'Kasety Brady ToughBond B-422 zawierają etykiety z białego, błyszczącego poliestru. Materiał ma agresywny, trwały klej akrylowy. Etykieta mocno trzyma się powierzchni chropowatych i tworzyw sztucznych. Dlatego nadaje się do oznaczania obudów, paneli, części i środków trwałych. Nadruk jest czarny, a na poliestrze dobrze drukują się teksty, symbole i kody kreskowe.\n\nPoliester B-422 jest bezhalogenowy i odporny na wysoką temperaturę. Pracuje w zakresie od −40 do 100 °C. Materiał ma akceptację CSA i uznanie UL.\n\nSześć kaset ma taśmę ciągłą o długości 7,62 m. Szerokość taśmy wynosi 9,53, 12,07, 12,7, 15,88, 25,4 albo 38,1 mm, a długość etykiety określa się przy projektowaniu. Pięć kaset M4 ma etykiety wykrawane, od 12,7 × 12,7 mm do 19,05 × 38,1 mm, od 180 do 480 sztuk w kasecie. Najszersza kaseta, M5C-1500-422 (38,1 mm), działa w drukarkach M510 i M511. Pozostałe kasety mają numery M4 i M4C, więc pasują też do M410.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/aggressive-adhesive-multi-purpose-polyester-labels-for-m410-m510-m511-printers-cps-4661490',
  images: [
    '/images/products/brady/m5c-1500-422.png',
    '/images/products/brady/m4c-1000-422.png',
    '/images/products/brady/m4c-500-422.png',
    '/images/products/brady/m4-49-422.png',
    '/images/products/brady/m4-7-422.png',
  ],
  imageDescriptions: [
    'Kaseta Brady ToughBond M5C-1500-422 z białą taśmą poliestrową 38,1 mm',
    'Kaseta Brady ToughBond M4C-1000-422 z taśmą poliestrową 25,4 mm',
    'Kaseta Brady ToughBond M4C-500-422 z taśmą poliestrową 12,7 mm',
    'Kaseta Brady ToughBond M4-49-422 i pasek wykrawanych etykiet z kodem kreskowym',
    'Kaseta Brady ToughBond M4-7-422 z małymi etykietami wykrawanymi 12,7 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą etykietową lub etykietami wykrawanymi i taśmą barwiącą' },
    { name: 'Materiał', value: 'ToughBond B-422, bezhalogenowy' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolor', value: 'czarny nadruk na białym tle' },
    { name: 'Szerokość taśmy ciągłej', value: '9,53 / 12,07 / 12,7 / 15,88 / 25,4 / 38,1 mm, zależnie od wersji' },
    { name: 'Wymiary etykiet wykrawanych', value: '12,7 × 12,7 / 25,4 × 12,7 / 25,4 × 25,4 / 12,7 × 38,1 / 19,05 × 38,1 mm' },
    { name: 'Format', value: 'taśma ciągła 7,62 m albo etykiety wykrawane, od 180 do 480 sztuk' },
    { name: 'Normy', value: 'uznanie UL, akceptacja CSA' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4_M5 },
    { name: 'Numery artykułów Brady', value: 'M5C-1500-422: 170859; M4C-1000-422: 170734; M4C-625-422: 170733; M4C-500-422: 170732; M4C-475-422: 170731; M4C-375-422: 170730; M4-7-422: 170735; M4-47-422: 170738; M4-49-422: 170739; M4-89-422: 170737; M4-90-422: 170736' },
  ],
  variants: [
    { partNumber: 'M5C-1500-422', name: 'Brady ToughBond M5C-1500-422 — poliester 38,1 mm × 7,62 m', attributes: { Rozmiar: '38,1 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4C-1000-422', name: 'Brady ToughBond M4C-1000-422 — poliester 25,4 mm × 7,62 m', attributes: { Rozmiar: '25,4 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4C-625-422', name: 'Brady ToughBond M4C-625-422 — poliester 15,88 mm × 7,62 m', attributes: { Rozmiar: '15,88 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4C-500-422', name: 'Brady ToughBond M4C-500-422 — poliester 12,7 mm × 7,62 m', attributes: { Rozmiar: '12,7 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4C-475-422', name: 'Brady ToughBond M4C-475-422 — poliester 12,07 mm × 7,62 m', attributes: { Rozmiar: '12,07 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4C-375-422', name: 'Brady ToughBond M4C-375-422 — poliester 9,53 mm × 7,62 m', attributes: { Rozmiar: '9,53 mm × 7,62 m' }, availability: 'unavailable' },
    { partNumber: 'M4-7-422', name: 'Brady ToughBond M4-7-422 — 280 etykiet poliestrowych 12,7 × 12,7 mm', attributes: { Rozmiar: '12,7 × 12,7 mm, 280 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-47-422', name: 'Brady ToughBond M4-47-422 — 480 etykiet poliestrowych 25,4 × 12,7 mm', attributes: { Rozmiar: '25,4 × 12,7 mm, 480 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-49-422', name: 'Brady ToughBond M4-49-422 — 260 etykiet poliestrowych 25,4 × 25,4 mm', attributes: { Rozmiar: '25,4 × 25,4 mm, 260 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-89-422', name: 'Brady ToughBond M4-89-422 — 180 etykiet poliestrowych 12,7 × 38,1 mm', attributes: { Rozmiar: '12,7 × 38,1 mm, 180 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-90-422', name: 'Brady ToughBond M4-90-422 — 180 etykiet poliestrowych 19,05 × 38,1 mm', attributes: { Rozmiar: '19,05 × 38,1 mm, 180 szt.' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Taśma ciągła albo etykiety wykrawane z poliestru B-422.\n\nTaśma ciągła ma szerokość od 9,53 do 38,1 mm i długość 7,62 m; taśma 38,1 mm jest tylko w kasecie M5C.\n\nEtykiety wykrawane w kasetach M4 mają stały rozmiar, od 180 do 480 sztuk w kasecie.',
  },
  faq: [
    { question: 'Czym kaseta M5C-1500-422 różni się od kaset M4C-422?', answer: 'Szerokością taśmy i zgodnością z drukarkami. M5C-1500-422 ma taśmę 38,1 mm i pasuje tylko do [Brady M510](/produkt/brady-m510) i M511. Kasety M4C mają taśmę od 9,53 do 25,4 mm i pasują także do M410. Materiał i klej są takie same.' },
    { question: 'W jakiej temperaturze pracują etykiety ToughBond B-422?', answer: 'Od −40 do 100 °C. Poliester B-422 jest odporny na wysoką temperaturę i jest bezhalogenowy.' },
  ],
  applications: ['Oznaczanie obudów, paneli i części', 'Kody kreskowe i ewidencja środków trwałych', 'Etykiety na tworzywa i powierzchnie chropowate'],
}

export const bradyM45BradyGrip: Product = {
  ...wspolne,
  id: 'brady-m4c-500-414',
  slug: 'brady-m4c-500-414',
  name: 'Etykiety BradyGrip Brady M4C-500-414 na opaski VELCRO — kasety M4C do M510',
  seoTitle: 'Brady BradyGrip M4C-500-414 — etykiety na opaski VELCRO do M510',
  seoDescription: 'Brady BradyGrip B-414 do M510: etykiety z haczykami VELCRO na opaski wiązek kabli, 6,35–19,05 mm × 3,66 m. PN: M4C-250-414, M4C-500-414, M4C-750-414.',
  shortDescription: 'Brady BradyGrip M4C-250-414, M4C-500-414 i M4C-750-414 — kasety z taśmą z poliestru B-414 z haczykami VELCRO do oznaczania wiązek kabli. Do drukarki Brady M510, także M410 i M511.',
  description: 'Kasety Brady BradyGrip M4C-414 zawierają taśmę z poliestru B-414 z haczykami VELCRO na spodniej stronie. Materiał nie ma kleju. Wydrukowaną etykietę dociska się do opaski z pętelkami, np. VELCRO ONE-WRAP, owiniętej wokół wiązki przewodów. Haczyki trzymają etykietę na opasce.\n\nEtykietę można zdjąć i założyć ponownie w innym miejscu. Po zmianach w szafie albo w trasie kablowej wystarczy wydrukować nowy opis i wymienić samą etykietę. Opaska zostaje na wiązce. Opaski nie wchodzą w skład kasety.\n\nTaśma ma szerokość 6,35, 12,7 albo 19,05 mm i długość 3,66 m. Długość pojedynczej etykiety wybiera się przy projektowaniu. Tło etykiety jest białe i matowe, a nadruk czarny. Dopuszczalna temperatura pracy wynosi od −40 do 50 °C. Wszystkie trzy kasety mają numery M4C i działają w drukarkach M410, M510 i M511.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/bradygrip-print-on-hook-labels-featuring-velcro-brand-hook-m410-m510-m511-printers-cps-4022802',
  images: [
    '/images/products/brady/m4c-500-414.png',
    '/images/products/brady/m4c-750-414.png',
    '/images/products/brady/m4c-250-414.png',
  ],
  imageDescriptions: [
    'Kaseta Brady BradyGrip M4C-500-414 z taśmą z haczykami VELCRO 12,7 mm',
    'Kaseta Brady BradyGrip M4C-750-414 z taśmą 19,05 mm',
    'Kaseta Brady BradyGrip M4C-250-414 z wąską taśmą 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z materiałem z haczykami VELCRO i taśmą barwiącą' },
    { name: 'Materiał', value: 'BradyGrip B-414' },
    { name: 'Typ materiału', value: 'poliester z haczykami VELCRO' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; etykieta trzyma się opaski z pętelkami VELCRO' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Kolor', value: 'czarny nadruk na białym tle' },
    { name: 'Szerokość', value: '6,35 / 12,7 / 19,05 mm, zależnie od wersji' },
    { name: 'Format', value: 'taśma ciągła 3,66 m' },
    { name: 'Właściwości', value: 'etykietę można zdjąć i założyć ponownie; opaski poza zestawem' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4 },
    { name: 'Numery artykułów Brady', value: 'M4C-250-414: 170727; M4C-500-414: 170728; M4C-750-414: 170729' },
  ],
  variants: [
    { partNumber: 'M4C-500-414', name: 'Brady BradyGrip M4C-500-414 — taśma 12,7 mm × 3,66 m', attributes: { Szerokość: '12,7 mm' }, availability: 'unavailable' },
    { partNumber: 'M4C-250-414', name: 'Brady BradyGrip M4C-250-414 — taśma 6,35 mm × 3,66 m', attributes: { Szerokość: '6,35 mm' }, availability: 'unavailable' },
    { partNumber: 'M4C-750-414', name: 'Brady BradyGrip M4C-750-414 — taśma 19,05 mm × 3,66 m', attributes: { Szerokość: '19,05 mm' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy z haczykami VELCRO. Długość etykiety ustawia się w drukarce.\n\nKażda kaseta ma 3,66 m taśmy.',
  },
  faq: [
    { question: 'Czy kasety BradyGrip M4C-414 pasują do Brady M510?', answer: 'Tak. Kasety M4C pasują do [Brady M510](/produkt/brady-m510), M511 i M410.' },
    { question: 'Czy etykietę BradyGrip można użyć ponownie?', answer: 'Tak. Etykietę zdejmuje się z opaski i zakłada w innym miejscu. Materiał nie ma kleju, więc nie zostawia śladów na opasce.' },
    { question: 'Czy opaski VELCRO są w kasecie?', answer: 'Nie. Kaseta zawiera tylko materiał do druku etykiet. Opaski z pętelkami, np. VELCRO ONE-WRAP, zamawia się osobno.' },
  ],
  applications: ['Oznaczanie wiązek przewodów', 'Oznaczenia, które się zmienia', 'Szafy serwerowe i teleinformatyczne'],
}

export const bradyM45ToughBond483: Product = {
  ...wspolne,
  id: 'brady-m4-60-483',
  slug: 'brady-m4-60-483',
  name: 'Etykiety poliestrowe Brady ToughBond M4-60-483 — kasety B-483A z klejem kauczukowym do M510',
  seoTitle: 'Brady ToughBond M4-60-483 — etykiety z mocnym klejem do M510',
  seoDescription: 'Poliester Brady ToughBond B-483A z mocnym klejem kauczukowym do M510: 3 rozmiary etykiet wykrawanych, do 120 °C. PN: M4-60-483, M4-61-483, M4-47-483.',
  shortDescription: 'Brady ToughBond M4-60-483, M4-61-483 i M4-47-483 — kasety z wykrawanymi etykietami z poliestru B-483A z bardzo mocnym klejem kauczukowym. Do drukarki Brady M510, także M410 i M511.',
  description: 'Kasety Brady ToughBond M4-483 zawierają wykrawane etykiety z białego poliestru B-483A. Trwały klej kauczukowy ma bardzo dużą siłę przylegania. Etykieta trzyma się także powierzchni chropowatych i tworzyw sztucznych. Etykiety służą do oznaczania urządzeń, obudów, regałów i części.\n\nBiały poliester ma błyszczącą powierzchnię i czarny nadruk. Materiał jest odporny na wysoką i niską temperaturę. Etykiety wytrzymują temperaturę od −40 do 120 °C. Materiał B-483A uzyskał uznanie UL i akceptację CSA.\n\nW rodzinie są trzy rozmiary etykiet: 25,4 × 50,8 mm (140 sztuk w kasecie), 12,7 × 50,8 mm (80 sztuk) i 25,4 × 12,7 mm (480 sztuk). Długie etykiety mieszczą kilka wierszy tekstu albo kod kreskowy z opisem. Etykiety mają stały rozmiar, więc oznaczenia w całej instalacji są jednakowe. Każda z trzech kaset ma numer M4, więc obsługują je drukarki M410, M510 i M511.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/ultra-aggressive-adhesive-multi-purpose-polyester-labels-for-m410-m510-m511-printers-cps-4661495',
  images: [
    '/images/products/brady/m4-60-483.png',
    '/images/products/brady/m4-61-483.png',
    '/images/products/brady/m4-47-483.png',
  ],
  imageDescriptions: [
    'Kaseta Brady ToughBond M4-60-483 i pasek etykiet z kodem kreskowym',
    'Kaseta Brady ToughBond M4-61-483 z etykietami 12,7 × 50,8 mm',
    'Kaseta Brady ToughBond M4-47-483 z małymi etykietami 25,4 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi etykietami i taśmą barwiącą' },
    { name: 'Materiał', value: 'ToughBond B-483A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Kolor', value: 'czarny nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '25,4 × 50,8 / 12,7 × 50,8 / 25,4 × 12,7 mm, zależnie od wersji' },
    { name: 'Liczba etykiet w kasecie', value: '140 / 80 / 480, zależnie od rozmiaru' },
    { name: 'Format', value: 'etykiety wykrawane' },
    { name: 'Normy', value: 'uznanie UL, akceptacja CSA' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4 },
    { name: 'Numery artykułów Brady', value: 'M4-60-483: 170772; M4-61-483: 170771; M4-47-483: 170773' },
  ],
  variants: [
    { partNumber: 'M4-60-483', name: 'Brady ToughBond M4-60-483 — 140 etykiet 25,4 × 50,8 mm', attributes: { Rozmiar: '25,4 × 50,8 mm, 140 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-61-483', name: 'Brady ToughBond M4-61-483 — 80 etykiet 12,7 × 50,8 mm', attributes: { Rozmiar: '12,7 × 50,8 mm, 80 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-47-483', name: 'Brady ToughBond M4-47-483 — 480 etykiet 25,4 × 12,7 mm', attributes: { Rozmiar: '25,4 × 12,7 mm, 480 szt.' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość × wysokość etykiety z poliestru B-483A i liczba etykiet w kasecie.\n\nEtykiety o wysokości 50,8 mm mieszczą kilka wierszy tekstu albo kod kreskowy z opisem. Najwięcej, 480 sztuk, ma kaseta z etykietami 25,4 × 12,7 mm.',
  },
  faq: [
    { question: 'Czym etykiety B-483A różnią się od etykiet ToughBond B-422?', answer: 'Klejem i zakresem temperatur. B-483A ma klej kauczukowy i pracuje do 120 °C. [B-422](/produkt/brady-m5c-1500-422) ma klej akrylowy i pracuje do 100 °C. Oba materiały to biały, błyszczący poliester.' },
    { question: 'Czy kasety M4-483 pasują do Brady M510?', answer: 'Tak. Kasety M4 pasują do [Brady M510](/produkt/brady-m510), M511 i M410.' },
  ],
  applications: ['Oznaczanie urządzeń i obudów', 'Etykiety na regały i części', 'Kody kreskowe z opisem'],
}

export const bradyM45FreezerBondz: Product = {
  ...wspolne,
  tags: ['healthcare'],
  id: 'brady-m5-113-490',
  slug: 'brady-m5-113-490',
  name: 'Etykiety kriogeniczne Brady FreezerBondz M5-113-490 — kasety B-490 do M510',
  seoTitle: 'Brady FreezerBondz M5-113-490 — etykiety do ciekłego azotu, M510',
  seoDescription: 'Brady FreezerBondz B-490 do M510: matowy poliester do zamrażarek i ciekłego azotu, od −196 do 130 °C. PN: M5-113-490, M5-112-490, M5-114-490, M4-124-490.',
  shortDescription: 'Brady FreezerBondz M5-113-490 i pozostałe kasety B-490 — wykrawane etykiety z matowego poliestru do zamrażarek i ciekłego azotu, od −196 do 130 °C. Do drukarki Brady M510.',
  description: 'Kasety Brady FreezerBondz zawierają wykrawane etykiety z matowego poliestru B-490. Etykiety służą do oznaczania próbek, które trafiają do zamrażarek i do ciekłego azotu. Agresywny, trwały klej akrylowy jest przeznaczony do naklejania w niskiej temperaturze. Materiał pracuje w zakresie od −196 do 130 °C i nadaje się do przechowywania kriogenicznego.\n\nNa matowym poliestrze drukuje się tekst i kody kreskowe. Etykiety są białe, a nadruk czarny. Nadają się na probówki, fiolki, pudełka i statywy przechowywane w niskiej temperaturze.\n\nW rodzinie jest sześć rozmiarów. Kasety M5 mają etykiety 31,75 × 9,53 mm (360 sztuk), 44,45 × 25,4 mm (180), 38,1 × 55,88 mm (140) i 38,1 × 95,25 mm (80 sztuk). Kasety M4 mają etykiety 12,7 × 41,91 mm i 45,72 × 15,24 mm, po 180 sztuk. Etykiety M5 drukuje się na M510 i M511. Kasety M4 można stosować również w M410.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/freezerbondz-cryogenic-matte-polyester-labels-for-m410-m510-m511-printers-cps-4661494',
  images: [
    '/images/products/brady/m5-113-490.png',
    '/images/products/brady/m5-114-490.png',
    '/images/products/brady/m5-125-490.png',
    '/images/products/brady/m5-112-490.png',
    '/images/products/brady/m4-124-490.png',
  ],
  imageDescriptions: [
    'Kaseta Brady FreezerBondz M5-113-490 z etykietami kriogenicznymi 38,1 × 55,88 mm',
    'Kaseta Brady FreezerBondz M5-114-490 i duża etykieta z kodem kreskowym',
    'Kaseta Brady FreezerBondz M5-125-490 z etykietami z kodami kreskowymi',
    'Kaseta Brady FreezerBondz M5-112-490 z wąskimi etykietami 31,75 × 9,53 mm',
    'Kaseta Brady FreezerBondz M4-124-490 z etykietami 12,7 × 41,91 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi etykietami i taśmą barwiącą' },
    { name: 'Materiał', value: 'FreezerBondz B-490' },
    { name: 'Typ materiału', value: 'poliester do niskich temperatur' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny; do naklejania w niskiej temperaturze' },
    { name: 'Temperatura pracy', value: 'od −196 do 130 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, ciekły azot, przechowywanie kriogeniczne' },
    { name: 'Kolor', value: 'czarny nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '31,75 × 9,53 / 44,45 × 25,4 / 38,1 × 55,88 / 38,1 × 95,25 mm (M5); 12,7 × 41,91 / 45,72 × 15,24 mm (M4)' },
    { name: 'Liczba etykiet w kasecie', value: 'od 80 do 360, zależnie od rozmiaru' },
    { name: 'Format', value: 'etykiety wykrawane' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M4_M5 },
    { name: 'Numery artykułów Brady', value: 'M5-112-490: 170889; M5-113-490: 170890; M5-114-490: 170891; M5-125-490: 170888; M4-124-490: 170775; M4-126-490: 170776' },
  ],
  variants: [
    { partNumber: 'M5-113-490', name: 'Brady FreezerBondz M5-113-490 — 140 etykiet 38,1 × 55,88 mm', attributes: { Rozmiar: '38,1 × 55,88 mm, 140 szt.' }, availability: 'unavailable' },
    { partNumber: 'M5-112-490', name: 'Brady FreezerBondz M5-112-490 — 360 etykiet 31,75 × 9,53 mm', attributes: { Rozmiar: '31,75 × 9,53 mm, 360 szt.' }, availability: 'unavailable' },
    { partNumber: 'M5-125-490', name: 'Brady FreezerBondz M5-125-490 — 180 etykiet 44,45 × 25,4 mm', attributes: { Rozmiar: '44,45 × 25,4 mm, 180 szt.' }, availability: 'unavailable' },
    { partNumber: 'M5-114-490', name: 'Brady FreezerBondz M5-114-490 — 80 etykiet 38,1 × 95,25 mm', attributes: { Rozmiar: '38,1 × 95,25 mm, 80 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-124-490', name: 'Brady FreezerBondz M4-124-490 — 180 etykiet 12,7 × 41,91 mm', attributes: { Rozmiar: '12,7 × 41,91 mm, 180 szt.' }, availability: 'unavailable' },
    { partNumber: 'M4-126-490', name: 'Brady FreezerBondz M4-126-490 — 180 etykiet 45,72 × 15,24 mm', attributes: { Rozmiar: '45,72 × 15,24 mm, 180 szt.' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość × wysokość etykiety z poliestru B-490 i liczba etykiet w kasecie.\n\nNajmniejsze etykiety, 31,75 × 9,53 mm, są po 360 sztuk. Największe, 38,1 × 95,25 mm, są po 80 sztuk.',
  },
  faq: [
    { question: 'Czy etykiety FreezerBondz wytrzymują ciekły azot?', answer: 'Tak. Poliester B-490 pracuje w temperaturze od −196 do 130 °C i jest przeznaczony do przechowywania kriogenicznego. Etykiety pracują w zamrażarkach i w ciekłym azocie.' },
    { question: 'Czy etykietę B-490 można nakleić w niskiej temperaturze?', answer: 'Tak. Klej akrylowy w etykietach FreezerBondz jest przeznaczony do naklejania w niskiej temperaturze.' },
    { question: 'Które kasety FreezerBondz pasują do Brady M410?', answer: 'Tylko kasety M4: M4-124-490 i M4-126-490. Kasety M5 pasują do [Brady M510](/produkt/brady-m510) i M511.' },
  ],
  applications: ['Probówki i fiolki w zamrażarkach', 'Próbki w ciekłym azocie', 'Pudełka i statywy kriogeniczne'],
}

export const bradyM45Kasety: Product[] = [
  bradyM45Winyl,
  bradyM45PermaSleeve,
  bradyM45CleanLift,
  bradyM45ToughBond422,
  bradyM45BradyGrip,
  bradyM45ToughBond483,
  bradyM45FreezerBondz,
]

// Kasety zakładane na kabel (koszulki, owijki, flagi, zawieszki, BradyGrip) — sekcja kabli na karcie M510.
export const BRADY_M45_KABLE_IDS = new Set(['brady-m5-375-1-342', 'brady-m5-103-498', 'brady-m4c-500-414'])

// Kasety laboratoryjne — osobna sekcja na karcie M510.
export const BRADY_M45_LAB_IDS = new Set(['brady-m5-113-490'])
