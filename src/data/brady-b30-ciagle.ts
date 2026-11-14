import type { Product } from './products'
import { wspolneB30 } from './brady-b30-wspolne'

// Taśmy ciągłe B30C do drukarek Brady S3100, S3700 i i3300 (także starsze BBP30, BBP31, BBP33, BBP35, BBP37 i S3000). Kaseta B30C nie ma taśmy barwiącej —
// zalecaną taśmę B30-R… podaje specyfikacja, a kolor nadruku dymek kolumny „Kolor”.
// Rodziny Brady: cps-3069347 (B-595), 3079460 (B-7569), 3069348 (B-569), 3069358, 4578480, 3069354 (B-581), 3069357 (B-549), 3079459 (B-565), 3079464 (B-484A). 14.11.2026.

// Kod koloru w PN (B30C-<szerokość>-<materiał>-<kolor>): [nazwa w tabeli, forma w nazwie wariantu (taśma)].
const KOLORY: Record<string, [string, string]> = {
  WT: ['Biały', 'biała'],
  YL: ['Żółty', 'żółta'],
  OR: ['Poma­rań­czowy', 'pomarańczowa'],
  GD: ['Złoty', 'złota'],
  PK: ['Różowy', 'różowa'],
  OC: ['Ochrowy', 'ochrowa'],
  RD: ['Czerwony', 'czerwona'],
  GY: ['Szary', 'szara'],
  CL: ['Prze­zro­czysty', 'przezroczysta'],
  BL: ['Niebieski', 'niebieska'],
  BR: ['Brązowy', 'brązowa'],
  GN: ['Zielony', 'zielona'],
  PL: ['Fioletowy', 'fioletowa'],
  BK: ['Czarny', 'czarna'],
  LB: ['Jasno­niebieski', 'jasnoniebieska'],
  SB: ['Błękitny', 'błękitna'],
  TN: ['Beżowy', 'beżowa'],
  SL: ['Srebrny', 'srebrna'],
}

const DRUKARKI_B30 = 'S3100, S3700, S3000, i3300, i4311, i5300; BBP30, BBP31, BBP33, BBP35, BBP37'

// Szerokość taśmy według członu PN (B30C-<człon>-…): cale × 1000, np. 4000 = 4 cale = 101,6 mm.
const SZEROKOSC: Record<string, string> = {
  '500': '12,7 mm',
  '1125': '28,58 mm',
  '2000': '50,8 mm',
  '2250': '57,15 mm',
  '3000': '76,2 mm',
  '4000': '101,6 mm',
}

const szerokoscZPn = (pn: string) => SZEROKOSC[pn.split('-')[1]]
const kolorZPn = (pn: string) => KOLORY[pn.split('-')[3]]

// ---------------------------------------------------------------------------
// B-595 — taśma winylowa do pracy na zewnątrz (cps-3069347)
// ---------------------------------------------------------------------------


// Kolor nadruku wynika z zalecanej taśmy barwiącej: B30-R10000 = czarny, B30-R10000-WT = biały.
type Nadruk = 'czarny' | 'biały' | 'czarny lub biały'
const NADRUK_595: Record<string, Nadruk> = {
  WT: 'czarny',
  YL: 'czarny',
  OR: 'czarny',
  GD: 'czarny',
  PK: 'czarny',
  OC: 'czarny',
  RD: 'czarny lub biały',
  GY: 'czarny lub biały',
  CL: 'czarny lub biały',
  BL: 'biały',
  BR: 'biały',
  GN: 'biały',
  PL: 'biały',
  BK: 'biały',
}

// [PN, numer artykułu Brady]
const TASMY_595: [string, string][] = [
  ['B30C-500-595-WT', '142031'],
  ['B30C-500-595-YL', '142036'],
  ['B30C-500-595-OR', '142018'],
  ['B30C-500-595-GD', '142006'],
  ['B30C-500-595-PK', '178691'],
  ['B30C-500-595-RD', '142026'],
  ['B30C-500-595-GY', '142014'],
  ['B30C-500-595-CL', '142002'],
  ['B30C-500-595-BL', '141994'],
  ['B30C-500-595-BR', '141998'],
  ['B30C-500-595-GN', '142010'],
  ['B30C-500-595-PL', '142022'],
  ['B30C-500-595-BK', '141990'],
  ['B30C-1125-595-WT', '142030'],
  ['B30C-1125-595-YL', '142035'],
  ['B30C-1125-595-OR', '142017'],
  ['B30C-1125-595-GD', '142005'],
  ['B30C-1125-595-PK', '178692'],
  ['B30C-1125-595-OC', '146042'],
  ['B30C-1125-595-RD', '142025'],
  ['B30C-1125-595-GY', '142013'],
  ['B30C-1125-595-CL', '142001'],
  ['B30C-1125-595-BL', '141993'],
  ['B30C-1125-595-BR', '141997'],
  ['B30C-1125-595-GN', '142009'],
  ['B30C-1125-595-PL', '142021'],
  ['B30C-1125-595-BK', '141989'],
  ['B30C-2250-595-WT', '142029'],
  ['B30C-2250-595-YL', '142034'],
  ['B30C-2250-595-OR', '142016'],
  ['B30C-2250-595-GD', '142004'],
  ['B30C-2250-595-PK', '178693'],
  ['B30C-2250-595-OC', '146043'],
  ['B30C-2250-595-RD', '142024'],
  ['B30C-2250-595-GY', '142012'],
  ['B30C-2250-595-CL', '142000'],
  ['B30C-2250-595-BL', '141992'],
  ['B30C-2250-595-BR', '141996'],
  ['B30C-2250-595-GN', '142008'],
  ['B30C-2250-595-PL', '142020'],
  ['B30C-2250-595-BK', '141988'],
  ['B30C-3000-595-WT', '142028'],
  ['B30C-3000-595-YL', '142033'],
  ['B30C-4000-595-WT', '142027'],
  ['B30C-4000-595-YL', '142032'],
  ['B30C-4000-595-OR', '142015'],
  ['B30C-4000-595-GD', '142003'],
  ['B30C-4000-595-PK', '178694'],
  ['B30C-4000-595-OC', '146044'],
  ['B30C-4000-595-RD', '142023'],
  ['B30C-4000-595-GY', '142011'],
  ['B30C-4000-595-CL', '141999'],
  ['B30C-4000-595-BL', '141991'],
  ['B30C-4000-595-BR', '141995'],
  ['B30C-4000-595-GN', '142007'],
  ['B30C-4000-595-PL', '142019'],
  ['B30C-4000-595-BK', '141987'],
]

export const bradyB30Winyl595: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-595-wt',
  slug: 'brady-b30c-4000-595-wt',
  name: 'Taśma winylowa do pracy na zewnątrz Brady B30C-4000-595-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-595-WT — winyl na zewnątrz do S3100 i S3700',
  seoDescription: 'Winyl Brady B-595 do S3100 i S3700: taśma ciągła 12,7–101,6 mm × 30,48 m, 14 kolorów, od −40 do 82 °C. PN: B30C-4000-595-WT, B30C-2250-595-YL, B30C-500-595-RD.',
  shortDescription: 'Brady B30C-4000-595-WT i pozostałe kasety z winylem B-595 na bardzo mocnym kleju akrylowym, w 14 kolorach i pięciu szerokościach od 12,7 do 101,6 mm. Do drukarek Brady S3100 i S3700.',
  description: 'Winyl Brady B-595 ma mały skurcz i bardzo mocny klej akrylowy. Klej trzyma także na podłożach brudnych, szorstkich i mocno teksturowanych. Przykłady to malowany pustak i drewno, tworzywo z fakturą oraz rury w papierowej osłonie. Materiał jest giętki. Powierzchnia jest błyszcząca, a taśma wytrzymuje użytkowanie na zewnątrz. Z taśmy wykonuje się oznaczenia rur, zaworów, urządzeń i półek, znaki podłogowe, oznaczenia magazynu oraz etykiety Lean i 5S.\n\nW kasecie B30C jest rolka długości 30,48 m, a grubość taśmy wynosi 0,102 mm. Rolki są szerokie na 12,7, 28,58, 57,15, 76,2 albo 101,6 mm. Szerokość 76,2 mm występuje wyłącznie jako biała i żółta. Taśma 12,7 mm ma 13 kolorów. Pozostałe szerokości, bez 76,2 mm, mają po 14 kolorów, z ochrowym włącznie.\n\nWinyl znosi ścieranie, chemikalia, oleje, smary, wodę, mgłę solną i detergenty. Taśma pracuje w zamrażarce, od −40 °C aż do 82 °C. Naklejanie jest możliwe już od −18 °C. Winyl spełnia wymagania normy BS 5609:1986 w sekcjach 2 i 3. Na taśmach jasnych drukuje czarna taśma barwiąca B30-R10000, a na ciemnych biała B30-R10000-WT. Kolor nadruku każdej wersji opisuje dymek kolumny Kolor. Kaseta B30C pasuje do S3100, S3700 i przemysłowej i3300. W i5300 i i4311 działa również, podobnie jak w starszej S3000 i w modelach BBP30–BBP37.',
  sameAs: 'https://www.brady.eu/labels/b30-series-continuous-indoor-outdoor-vinyl-labels-cps-3069347',
  images: [
    '/images/products/brady/b30c-4000-595-wt.png',
    '/images/products/brady/b30c-500-595-yl.png',
    '/images/products/brady/b30c-2250-595-rd.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy winylowej Brady B30C-4000-595-WT o szerokości 101,6 mm na uchwycie kasety',
    'Rolka żółtej taśmy winylowej Brady B30C-500-595-YL o szerokości 12,7 mm z wysuniętym paskiem taśmy',
    'Rolka czerwonej taśmy winylowej Brady B30C-2250-595-RD o szerokości 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl o małym skurczu, do pracy wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, bardzo mocny; do podłoży gładkich, teksturowanych i szorstkich' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz, zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje i smary, woda, mgła solna, detergenty' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, złoty, różowy, ochrowy (od 28,58 mm), czerwony, szary, przezroczysty, niebieski, brązowy, zielony, fioletowy, czarny; taśma 76,2 mm: biała i żółta' },
    { name: 'Szerokość taśmy', value: '12,7 / 28,58 / 57,15 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna) do taśmy białej, żółtej, pomarańczowej, złotej, różowej i ochrowej; B30-R10000-WT (biała) do taśmy niebieskiej, brązowej, zielonej, fioletowej i czarnej; do czerwonej, szarej i przezroczystej obie' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_595.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_595.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — winyl B-595 ${szerokoscZPn(pn)} × 30,48 m, ${kolorZPn(pn)[1]}, nadruk ${NADRUK_595[pn.split('-')[3]]}`,
    attributes: { Szerokość: `${szerokoscZPn(pn)} × 30,48 m`, Kolor: kolorZPn(pn)[0] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy ciągłej i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m taśmy. Najwęższa ma 12,7 mm, najszersza 101,6 mm. Długość etykiety wybiera się w projekcie.',
    Kolor: 'Kolor winylu B-595. Od koloru zależy taśma barwiąca.\n\nNa białej, żółtej, pomarańczowej, złotej, różowej i ochrowej drukuje czarna B30-R10000. Na niebieskiej, brązowej, zielonej, fioletowej i czarnej drukuje biała B30-R10000-WT. Na czerwonej, szarej i przezroczystej można użyć obu.',
  },
  faq: [
    { question: 'Na jakich powierzchniach trzyma winyl B-595?', answer: 'Na podłożach gładkich, szorstkich i teksturowanych, także brudnych. Przykłady to malowany pustak, malowane drewno, tworzywo z fakturą, rury w papierowej osłonie i obudowy formowane z tworzywa.' },
    { question: 'Którą taśmę barwiącą wybrać do kolorowego winylu B-595?', answer: 'Na jasnych kolorach drukuje czarna taśma B30-R10000. Na ciemnych kolorach drukuje biała B30-R10000-WT. Dla każdej wersji kolor nadruku podaje nazwa wariantu i dymek kolumny Kolor.' },
    { question: 'Do jakich drukarek pasuje taśma B30C-595?', answer: 'Do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i przemysłowej [Brady i3300](/produkt/brady-i3300), a także do [Brady i4311](/produkt/brady-i4311) i [Brady i5300](/produkt/brady-i5300). Ze starszych drukarek taśmę przyjmują S3000, BBP30, BBP31, BBP33, BBP35 i BBP37. Taśma barwiąca jest w osobnej kasecie B30-R.' },
  ],
  applications: ['Oznaczanie rur, zaworów i urządzeń', 'Znaki podłogowe i oznaczenia magazynu', 'Etykiety Lean i 5S'],
}

// ---------------------------------------------------------------------------
// B-7569 — ciągła taśma winylowa (cps-3079460)
// ---------------------------------------------------------------------------

const SZEROKOSC_7569: Record<string, string> = { '500': '12,7 mm', '1125': '29 mm', '2250': '57 mm', '3000': '75 mm', '4000': '101 mm' }
const NADRUK_7569: Record<string, Nadruk> = { WT: 'czarny', YL: 'czarny', OR: 'czarny', RD: 'biały', GN: 'biały', BL: 'biały', BK: 'biały' }

const TASMY_7569: [string, string][] = [
  ['B30C-500-7569-WT', '120920'],
  ['B30C-500-7569-YL', '120925'],
  ['B30C-500-7569-OR', '120912'],
  ['B30C-500-7569-RD', '120916'],
  ['B30C-500-7569-GN', '120908'],
  ['B30C-500-7569-BL', '120904'],
  ['B30C-500-7569-BK', '120900'],
  ['B30C-1125-7569-WT', '120921'],
  ['B30C-1125-7569-YL', '120926'],
  ['B30C-1125-7569-OR', '120913'],
  ['B30C-1125-7569-RD', '120917'],
  ['B30C-1125-7569-GN', '120909'],
  ['B30C-1125-7569-BL', '120905'],
  ['B30C-1125-7569-BK', '120901'],
  ['B30C-2250-7569-WT', '120922'],
  ['B30C-2250-7569-YL', '120927'],
  ['B30C-2250-7569-OR', '120914'],
  ['B30C-2250-7569-RD', '120918'],
  ['B30C-2250-7569-GN', '120910'],
  ['B30C-2250-7569-BL', '120906'],
  ['B30C-2250-7569-BK', '120902'],
  ['B30C-3000-7569-WT', '120923'],
  ['B30C-3000-7569-YL', '120928'],
  ['B30C-4000-7569-WT', '120924'],
  ['B30C-4000-7569-YL', '120929'],
  ['B30C-4000-7569-OR', '120915'],
  ['B30C-4000-7569-RD', '120919'],
  ['B30C-4000-7569-GN', '120911'],
  ['B30C-4000-7569-BL', '120907'],
  ['B30C-4000-7569-BK', '120903'],
]

export const bradyB30Winyl7569: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-7569-wt',
  slug: 'brady-b30c-4000-7569-wt',
  name: 'Ciągła taśma winylowa Brady B30C-4000-7569-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-7569-WT — ciągły winyl do S3100 i S3700',
  seoDescription: 'Ciągły winyl Brady B-7569 do S3100 i S3700: 12,7–101 mm × 30 m, 7 kolorów, znaki BHP i rury. PN: B30C-4000-7569-WT, B30C-2250-7569-YL, B30C-500-7569-RD.',
  shortDescription: 'Brady B30C-4000-7569-WT i pozostałe kasety z ciągłym winylem B-7569 na mocnym kleju akrylowym, w siedmiu kolorach i pięciu szerokościach od 12,7 do 101 mm. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-7569 to błyszczący winyl o standardowej jakości, przeznaczony do trwałych oznaczeń w zakładzie. Klej jest akrylowy, mocny i trwały, a materiał przykleja się do powierzchni gładkich, teksturowanych i szorstkich. Z taśmy powstają znaki bezpieczeństwa i ostrzeżenia, oznaczenia rur i zaworów oraz etykiety urządzeń. Nadaje się też do oznaczeń Lean i 5S, identyfikacji obiektów, znaków podłogowych i oznaczeń magazynu, wewnątrz i na zewnątrz budynków.\n\nRolka w kasecie B30C ma 30 m, a taśma 0,102 mm grubości. Szerokości to 12,7, 29, 57, 75 i 101 mm. Szerokość 75 mm jest tylko biała albo żółta. Pozostałe szerokości mają siedem kolorów: czerwony, zielony, niebieski i czarny oraz biały, żółty i pomarańczowy.\n\nDolna granica pracy etykiet to −20 °C, a górna 75 °C. Naklejanie wymaga temperatury od 10 °C. Norma BS 5609 obejmuje tu sekcje 2 oraz 3. Czarna taśma barwiąca B30-R10000 jest zalecana do taśmy białej, żółtej i pomarańczowej. Biała B30-R10000-WT jest przeznaczona dla wersji czerwonych, zielonych, niebieskich i czarnych. Dymek kolumny Kolor podaje kolor nadruku wersji. Kasety obsługują drukarki S3100 i S3700, BBP30 i BBP31 oraz BBP33, BBP35 i BBP37, a ponadto S3000, i3300, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/continuous-vinyl-tape-for-bbp3x-s3xxx-i3300-printers-cps-3079460',
  images: [
    '/images/products/brady/b30c-2250-7569-gn.png',
    '/images/products/brady/b30c-3000-7569-yl.png',
    '/images/products/brady/b30c-1125-7569-rd.png',
  ],
  imageDescriptions: [
    'Rolka zielonej taśmy winylowej Brady B30C-2250-7569-GN o szerokości 57 mm na uchwycie kasety',
    'Rolka żółtej taśmy winylowej Brady B30C-3000-7569-YL o szerokości 75 mm',
    'Rolka czerwonej taśmy winylowej Brady B30C-1125-7569-RD o szerokości 29 mm z wysuniętym paskiem taśmy',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7569' },
    { name: 'Typ materiału', value: 'winyl standardowej jakości, do pracy wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do podłoży gładkich, teksturowanych i szorstkich' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −20 do 75 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, czerwony, zielony, niebieski, czarny; taśma 75 mm: biała i żółta' },
    { name: 'Szerokość taśmy', value: '12,7 / 29 / 57 / 75 / 101 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna) do taśmy białej, żółtej i pomarańczowej; B30-R10000-WT (biała) do taśmy czerwonej, zielonej, niebieskiej i czarnej' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_7569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_7569.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — winyl B-7569 ${SZEROKOSC_7569[pn.split('-')[1]]} × 30 m, ${kolorZPn(pn)[1]}, nadruk ${NADRUK_7569[pn.split('-')[3]]}`,
    attributes: { Szerokość: `${SZEROKOSC_7569[pn.split('-')[1]]} × 30 m`, Kolor: kolorZPn(pn)[0] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy ciągłej i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30 m taśmy. Najwęższa ma 12,7 mm, najszersza 101 mm. Długość etykiety wybiera się w projekcie.',
    Kolor: 'Kolor winylu B-7569. Od koloru zależy taśma barwiąca.\n\nNa białej, żółtej i pomarańczowej drukuje czarna B30-R10000. Na czerwonej, zielonej, niebieskiej i czarnej drukuje biała B30-R10000-WT. Szerokość 75 mm jest tylko biała i żółta.',
  },
  faq: [
    { question: 'Jaki zakres temperatur obejmuje winyl B-7569?', answer: 'Etykiety pracują w temperaturze od −20 do 75 °C. Taśmę można naklejać od 10 °C.' },
    { question: 'Którą taśmę barwiącą zamówić do taśmy B-7569?', answer: 'Do białej, żółtej i pomarańczowej zalecana jest czarna B30-R10000. Do czerwonej, zielonej, niebieskiej i czarnej zalecana jest biała B30-R10000-WT.' },
    { question: 'Do jakich drukarek pasują kasety B30C-7569?', answer: 'Kasety pasują do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i [Brady i3300](/produkt/brady-i3300) oraz do [Brady i4311](/produkt/brady-i4311) i [Brady i5300](/produkt/brady-i5300). Starsze S3000, BBP30, BBP31, BBP33, BBP35 i BBP37 też je przyjmują. Taśma barwiąca jest w osobnej kasecie B30-R.' },
  ],
  applications: ['Znaki bezpieczeństwa i ostrzeżenia', 'Oznaczenia rur i zaworów', 'Znaki podłogowe i oznaczenia magazynu'],
}

// ---------------------------------------------------------------------------
// B-569 — poliester o niskiej zawartości halogenków (cps-3069348)
// ---------------------------------------------------------------------------

// Wiersze „kod koloru:numer artykułu Brady” według szerokości (członu PN); PN = B30C-<szerokość>-<materiał>-<kolor>.
const rozwin = (mat: string, spec: Record<string, string>): [string, string][] =>
  Object.entries(spec).flatMap(([szer, lista]) =>
    lista.split(' ').map((x) => {
      const [kolor, art] = x.split(':')
      return [`B30C-${szer}-${mat}-${kolor}`, art] as [string, string]
    }),
  )

const TASMY_569 = rozwin('569', {
  '500': 'WT:117989 YL:117993 OR:117964 PK:117968 TN:117984 GY:117952 CL:117944 LB:117956 SB:117980 RD:117976 BL:117936 BR:117940 GN:117948 PL:117972 BK:117932',
  '1125': 'WT:117988 YL:117992 OR:117963 PK:117967 TN:117983 GY:117951 CL:117943 LB:117955 SB:117979 OC:117959 RD:117975 BL:117935 BR:117939 GN:117947 PL:117971 BK:117931',
  '2250': 'WT:117987 YL:117991 OR:117962 PK:117966 TN:117982 GY:117950 CL:117942 LB:117954 SB:117978 OC:117958 RD:117974 BL:117934 BR:117938 GN:117946 PL:117970 BK:117930',
  '3000': 'WT:117986',
  '4000': 'WT:117985 YL:117990 OR:117961 PK:117965 TN:117981 GY:117949 CL:117941 LB:117953 SB:117977 OC:117957 RD:117973 BL:117933 BR:117937 GN:117945 PL:117969 BK:117929',
})

// Zalecana taśma barwiąca: B30-R10000 (czarny nadruk), B30-R10000-WT (biały nadruk), na ochrowym B30-R6000OC.
const NADRUK_569: Record<string, string> = {
  WT: 'nadruk czarny', YL: 'nadruk czarny', OR: 'nadruk czarny', PK: 'nadruk czarny', TN: 'nadruk czarny', GY: 'nadruk czarny', CL: 'nadruk czarny', LB: 'nadruk czarny', SB: 'nadruk czarny',
  OC: 'taśma barwiąca B30-R6000OC',
  RD: 'nadruk biały', BL: 'nadruk biały', BR: 'nadruk biały', GN: 'nadruk biały', PL: 'nadruk biały', BK: 'nadruk biały',
}

export const bradyB30Poliester569: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-569-wt',
  slug: 'brady-b30c-4000-569-wt',
  name: 'Taśma poliestrowa o niskiej zawartości halogenków Brady B30C-4000-569-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-569-WT — poliester do rur, do S3100 i S3700',
  seoDescription: 'Poliester Brady B-569 do S3100 i S3700: mało halogenków, 12,7–101,6 mm, 16 kolorów, do 100 °C. PN: B30C-4000-569-WT, B30C-2250-569-YL, B30C-500-569-BL.',
  shortDescription: 'Brady B30C-4000-569-WT i pozostałe kasety z poliestrem B-569 o niskiej zawartości halogenków, do oznaczania rur ze stali nierdzewnej i gładkich powierzchni, w 16 kolorach. Do drukarek Brady S3100 i S3700.',
  description: 'Poliester Brady B-569 zawiera mało halogenków, dlatego przeznaczono go do oznaczania rur ze stali nierdzewnej, szczególnie w trudnych warunkach. Etykieta ma bardzo gładką powierzchnię. Klej akrylowy jest trwały i silnie przylega. Najlepiej trzyma na gładkich podłożach, także na sztywnych panelach. Poliester nadaje się do druku termotransferowego i do użytku na zewnątrz. Taśma służy do identyfikacji obiektów oraz do oznaczania rur i zaworów.\n\nRolka w kasecie ma 30,48 m, a materiał jest cienki: 0,076 mm. Rolki mają szerokość 12,7, 28,58, 57,15 lub 101,6 mm, a także 76,2 mm, wyłącznie w bieli. Paleta liczy 16 kolorów, między innymi biały, żółty, brązowy, fioletowy, czarny i przezroczysty. Taśma 12,7 mm nie występuje w kolorze ochrowym.\n\nEtykiety wytrzymują ścieranie, olej, wodę i łagodne chemikalia. Zakres pracy zaczyna się na poziomie −40 °C i kończy na 100 °C. Naklejać ją można od −18 °C. Do jasnych kolorów zaleca się czarną taśmę barwiącą B30-R10000, do ciemnych białą B30-R10000-WT, a do ochrowej B30-R6000OC. Szczegóły podaje dymek kolumny Kolor. Kasety B30C-569 działają w S3100 i S3700, a także w starszej S3000. Pasują też do BBP30 i BBP31, BBP33, BBP35 i BBP37, a także do i3300, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/b30-series-low-halide-polyester-labels-cps-3069348',
  images: [
    '/images/products/brady/b30c-4000-569-gn.png',
    '/images/products/brady/b30c-4000-569-yl.png',
    '/images/products/brady/b30c-2250-569-sb.png',
  ],
  imageDescriptions: [
    'Rolka zielonej taśmy poliestrowej Brady B30C-4000-569-GN o szerokości 101,6 mm na uchwycie kasety',
    'Rolka żółtej taśmy poliestrowej Brady B30C-4000-569-YL o szerokości 101,6 mm',
    'Rolka błękitnej taśmy poliestrowej Brady B30C-2250-569-SB o szerokości 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-569' },
    { name: 'Typ materiału', value: 'poliester o niskiej zawartości halogenków, do rur ze stali nierdzewnej i gładkich powierzchni' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny; do podłoży gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, łagodne chemikalia, olej, woda' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, różowy, beżowy, szary, przezroczysty, jasnoniebieski, błękitny, ochrowy (od 28,58 mm), czerwony, niebieski, brązowy, zielony, fioletowy, czarny; taśma 76,2 mm: biała' },
    { name: 'Szerokość taśmy', value: '12,7 / 28,58 / 57,15 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna) do taśmy białej, żółtej, pomarańczowej, różowej, beżowej, szarej, przezroczystej, jasnoniebieskiej i błękitnej; B30-R10000-WT (biała) do taśmy czerwonej, niebieskiej, brązowej, zielonej, fioletowej i czarnej; B30-R6000OC do taśmy ochrowej' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_569.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_569.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — poliester B-569 ${szerokoscZPn(pn)} × 30,48 m, ${kolorZPn(pn)[1]}, ${NADRUK_569[pn.split('-')[3]]}`,
    attributes: { Szerokość: `${szerokoscZPn(pn)} × 30,48 m`, Kolor: kolorZPn(pn)[0] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy ciągłej i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m taśmy. Najwęższa ma 12,7 mm, najszersza 101,6 mm. Szerokość 76,2 mm jest tylko biała.',
    Kolor: 'Kolor poliestru B-569. Od koloru zależy taśma barwiąca.\n\nNa białej, żółtej, pomarańczowej, różowej, beżowej, szarej, przezroczystej, jasnoniebieskiej i błękitnej drukuje czarna B30-R10000. Na czerwonej, niebieskiej, brązowej, zielonej, fioletowej i czarnej drukuje biała B30-R10000-WT. Na ochrowej zalecana jest B30-R6000OC.',
  },
  faq: [
    { question: 'Do czego służy poliester B-569 o niskiej zawartości halogenków?', answer: 'Do oznaczania rur ze stali nierdzewnej i innych gładkich powierzchni, zwłaszcza w trudnych warunkach. Materiał ma mało halogenków.' },
    { question: 'Którą taśmę barwiącą zamówić do ochrowej taśmy B-569?', answer: 'Zalecana jest taśma B30-R6000OC. Do pozostałych kolorów służy czarna B30-R10000 albo biała B30-R10000-WT, zależnie od koloru taśmy.' },
    { question: 'Na jakich podłożach należy naklejać taśmę B-569?', answer: 'Na gładkich, na przykład na stali nierdzewnej i sztywnych panelach. Materiał jest przeznaczony do podłoży gładkich i używa się go w [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) oraz w starszych drukarkach B30.' },
  ],
  applications: ['Oznaczanie rur ze stali nierdzewnej', 'Oznaczenia rur i zaworów', 'Identyfikacja obiektów'],
}

// ---------------------------------------------------------------------------
// Wielozadaniowe taśmy 101,6 mm do trudnych warunków — B-423, B-424, B-428, B-432, B-434A, B-480A, B-483A, B-488, B-787 (cps-3069358)
// ---------------------------------------------------------------------------

// [PN, numer artykułu, materiał w tabeli, kolor, długość rolki, taśma barwiąca]
const TASMY_TRUDNE: [string, string, string, string, string, string][] = [
  ['B30C-4000-423', '143578', 'WorkHorse B-423', 'Biały', '45,72 m', 'B30-R6000'],
  ['B30C-4000-424', '145298', 'Papier B-424', 'Biały', '45,72 m', 'B30-R4300'],
  ['B30C-4000-428', '145300', 'MetaLabel B-428', 'Jasnoszary', '39,62 m', 'B30-R4300'],
  ['B30C-4000-432', '145292', 'ToughBond B-432', 'Przezroczysty', '36,58 m', 'B30-R6000'],
  ['B30C-4000-434', '145293', 'MetaLabel B-434A', 'Srebrny', '39,62 m', 'B30-R6000'],
  ['B30C-4000-480', '148780', 'BradyBondz B-480A', 'Jasnoszary', '35,05 m', 'B30-R6000'],
  ['B30C-4000-483', '143580', 'ToughStripe B-483A', 'Biały', '39,62 m', 'B30-R6000'],
  ['B30C-4000-488', '143584', 'WorkHorse B-488', 'Biały', '39,62 m', 'B30-R4300'],
  ['B30C-4000-787', '143582', 'PVF B-787', 'Biały', '18,29 m', 'B30-R6000'],
]

export const bradyB30TrudneWarunki: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-423',
  slug: 'brady-b30c-4000-423',
  name: 'Wielozadaniowe taśmy ciągłe do trudnych warunków Brady B30C-4000-423 — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-423 — taśmy ciągłe do S3100 i S3700',
  seoDescription: 'Taśmy ciągłe Brady 101,6 mm do S3100 i S3700: poliester, metalizowany poliester, papier, PVF, od −70 do 180 °C. PN: B30C-4000-423, B30C-4000-434, B30C-4000-787.',
  shortDescription: 'Brady B30C-4000-423 i osiem pozostałych kaset z taśmą ciągłą 101,6 mm z poliestru, poliestru metalizowanego, papieru albo PVF, do oznaczeń w trudnych warunkach. Do drukarek Brady S3100 i S3700.',
  description: 'Rodzina obejmuje dziewięć kaset B30C z taśmą 101,6 mm do oznaczeń w trudnych warunkach. Materiały to poliestry (B-423, B-432, B-483A, B-488), poliestry metalizowane lub o wyglądzie metalicznym (B-428, B-434A, B-480A), papier B-424 i folia PVF B-787. Etykiety z tych taśm służą do kodów kreskowych, oznaczania płytek drukowanych, podzespołów, aparatury laboratoryjnej oraz instalacji elektrycznych i telekomunikacyjnych. Nadają się też do inwentaryzacji, kontroli i oznaczeń Lean i 5S.\n\nRolki mają różną długość: 45,72 m (B-423, B-424), 39,62 m (B-428, B-434A, B-483A, B-488), 36,58 m (B-432), 35,05 m (B-480A) i 18,29 m (B-787). Taśmy są białe, jasnoszare, srebrne albo przezroczyste. Grubości, kleje i wykończenia poszczególnych materiałów podaje specyfikacja.\n\nZakres temperatur pracy sięga od −70 do 180 °C, zależnie od materiału. B-423 i B-488 nadają się do autoklawu, a B-488 także do przechowywania kriogenicznego. B-787 ma oznaczenie Boeing BMS 10-26. Taśma barwiąca B30-R6000 pasuje do większości materiałów, a B30-R4300 do B-424, B-428 i B-488. Rodzina jest przeznaczona dla drukarek S3100, S3700 i i3300. Współdziałają z nią także i5300 i i4311 oraz starsze S3000, BBP37 i BBP35.',
  sameAs: 'https://www.brady.eu/labels/b30-series-product-identification-labels-cps-3069358',
  images: [
    '/images/products/brady/b30c-4000-423.png',
    '/images/products/brady/b30c-4000-428.png',
    '/images/products/brady/b30c-4000-434.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy Brady B30C-4000-423 o szerokości 101,6 mm na uchwycie kasety',
    'Rolka jasnoszarej taśmy metalizowanej Brady B30C-4000-428 o szerokości 101,6 mm',
    'Rolka srebrnej taśmy metalizowanej Brady B30C-4000-434 o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-423, B-424, B-428, B-432, B-434A, B-480A, B-483A, B-488 i B-787, każdy w osobnej wersji' },
    { name: 'Typ materiału', value: 'poliester: B-423 (bezhalogenowy), B-432, B-483A, B-488; poliester metalizowany: B-428, B-434A; poliester o wyglądzie metalicznym: B-480A; papier: B-424; poliwinylofluorek (PVF), trudnopalny: B-787' },
    { name: 'Wykończenie', value: 'błyszczące: B-423, B-432, B-434A, B-483A, B-787; matowe: B-424, B-428, B-488; satynowe: B-480A' },
    { name: 'Klej', value: 'trwały, akrylowy: B-423, B-428, B-432, B-434A, B-488, B-787; trwały, kauczukowy: B-424, B-480A, B-483A; agresywny: B-423, B-432, B-480A, B-483A' },
    { name: 'Podłoża', value: 'gładkie; B-432, B-434A i B-483A także teksturowane i szorstkie, B-483A także o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: 'B-423: 0,076 mm; B-424: 0,089 mm; B-428: 0,122 mm; B-432, B-434A, B-483A: 0,102 mm; B-480A: 0,112 mm; B-488: 0,0914 mm; B-787: 0,082 mm' },
    { name: 'Temperatura pracy', value: 'B-423: od −70 do 110 °C; B-424: od −40 do 180 °C; B-428: od −40 do 120 °C; B-432: od −40 do 100 °C; B-434A: od −70 do 130 °C; B-480A: od −70 do 110 °C; B-483A: od −40 do 120 °C; B-488: od −40 do 160 °C; B-787: od −70 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'B-488: od 10 °C' },
    { name: 'Warunki pracy', value: 'autoklaw: B-423, B-488; zamrażarka: B-423, B-424, B-488; kąpiel w gorącej wodzie 100 °C: B-423; przechowywanie kriogeniczne: B-488' },
    { name: 'Odporność', value: 'B-423 i B-483A: ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; B-480A: to samo bez UV; B-432: chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; B-434A: ścieranie, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały: B-423, B-424, B-483A, B-488, B-787; jasnoszary: B-428, B-480A; srebrny: B-434A; przezroczysty: B-432' },
    { name: 'Szerokość taśmy', value: '101,6 mm' },
    { name: 'Długość taśmy', value: 'B-423, B-424: 45,72 m; B-428, B-434A, B-483A, B-488: 39,62 m; B-432: 36,58 m; B-480A: 35,05 m; B-787: 18,29 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'UL Recognized: B-423, B-428, B-432, B-434A, B-480A (cUL), B-483A; CSA: B-423, B-428, B-432, B-434A, B-483A; AGA: B-428; bezhalogenowe wg DIN VDE 0472 cz. 815: B-423, B-428; B-787: Boeing BMS 10-26 typ I klasa A, kolor biały zgodny z FED-STD-595C (17875)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000: B-423, B-432, B-434A, B-480A, B-483A, B-787; B30-R4300: B-424, B-428, B-488' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, i4311, i5300; BBP35, BBP37' },
    { name: 'Numery artykułów Brady', value: TASMY_TRUDNE.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_TRUDNE.map(([pn, , mat, kolor, dlugosc, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${mat} 101,6 mm × ${dlugosc}, ${kolor.toLowerCase()}, taśma barwiąca ${tasma}`,
    attributes: { Materiał: mat, Kolor: kolor, Długość: dlugosc },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Materiał: 'Materiał taśmy ciągłej 101,6 mm.\n\nWorkHorse B-423 i B-488 to poliestry do autoklawu, MetaLabel B-428 i B-434A to poliestry metalizowane, B-424 to papier, a B-787 to folia PVF.',
    Kolor: 'Kolor materiału.\n\nWiększość taśm jest biała. B-428 i B-480A są jasnoszare, B-434A srebrna, a B-432 przezroczysta.',
    Długość: 'Długość taśmy na rolce w kasecie.\n\nZależy od materiału: od 18,29 m dla B-787 do 45,72 m dla B-423 i B-424. Do każdej wersji zalecana jest taśma B30-R6000 albo B30-R4300, podana w nazwie wariantu.',
  },
  faq: [
    { question: 'Które taśmy z tej rodziny nadają się do autoklawu?', answer: 'Do autoklawu przeznaczone są B-423 i B-488. B-488 pracuje do 160 °C i nadaje się też do przechowywania kriogenicznego.' },
    { question: 'Którą taśmę barwiącą wybrać do taśm 101,6 mm z tej rodziny?', answer: 'Do B-423, B-432, B-434A, B-480A, B-483A i B-787 zalecana jest B30-R6000. Do B-424, B-428 i B-488 zalecana jest B30-R4300. Nazwa każdego wariantu podaje właściwą taśmę.' },
    { question: 'Do jakich drukarek pasują te kasety B30C?', answer: 'Kasety przyjmują [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i [Brady i3300](/produkt/brady-i3300) oraz [Brady i4311](/produkt/brady-i4311) i [Brady i5300](/produkt/brady-i5300). Z modeli starszych współpracują S3000, BBP35 i BBP37. Taśma barwiąca jest w osobnej kasecie B30-R.' },
  ],
  applications: ['Kody kreskowe i oznaczenia inwentarzowe', 'Płytki drukowane i podzespoły elektroniczne', 'Oznaczenia laboratoryjne i śledzenie wyposażenia'],
}

// ---------------------------------------------------------------------------
// Taśma do oznaczania produktów — B-423, B-434A, B-428 w szerokościach 50,8 i 76,2 mm (cps-4578480)
// ---------------------------------------------------------------------------

// [PN, numer artykułu, materiał w tabeli, kolor, szerokość, taśma barwiąca]
const TASMY_PRODUKTY: [string, string, string, string, string, string][] = [
  ['B30C-2000-423', '152999', 'Poliester B-423', 'Biały', '50,8 mm', 'B30-R6000'],
  ['B30C-3000-423', '153000', 'Poliester B-423', 'Biały', '76,2 mm', 'B30-R6000'],
  ['B30C-2000-434', '153363', 'Metalizowany B-434A', 'Srebrny', '50,8 mm', 'B30-R6000'],
  ['B30C-3000-434', '153364', 'Metalizowany B-434A', 'Srebrny', '76,2 mm', 'B30-R6000'],
  ['B30C-2000-428', '153394', 'Metalizowany B-428', 'Jasnoszary', '50,8 mm', 'B30-R4300'],
]

export const bradyB30OznaczanieProduktow: Product = {
  ...wspolneB30,
  id: 'brady-b30c-2000-423',
  slug: 'brady-b30c-2000-423',
  name: 'Taśma do oznaczania produktów Brady B30C-2000-423 — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-2000-423 — taśma ciągła do S3100 i S3700',
  seoDescription: 'Taśma ciągła Brady do S3100 i S3700: poliester B-423 i metalizowany B-434A, 50,8 i 76,2 mm. PN: B30C-2000-423, B30C-3000-423, B30C-2000-434, B30C-2000-428.',
  shortDescription: 'Brady B30C-2000-423 i cztery pozostałe kasety z taśmą ciągłą 30,48 m z białego poliestru B-423 albo poliestru metalizowanego B-434A i B-428, do oznaczania produktów i podzespołów. Do drukarek Brady S3100 i S3700.',
  description: 'Biały poliester B-423 jest przeznaczony do identyfikacji płytek drukowanych i podzespołów elektronicznych, etykiet z kodami kreskowymi, tabliczek znamionowych oraz paneli fotowoltaicznych. Powierzchnia jest błyszcząca, a klej akrylowy trwały. Materiał nie zawiera halogenów w rozumieniu DIN VDE 0472 cz. 815 i drukuje się na nim termotransferowo.\n\nObok bieli dostępne są dwa poliestry metalizowane. B-434A ma srebrny, błyszczący wygląd, a B-428 jasnoszary i matowy. Cała rodzina służy do oznaczania urządzeń i sprzętu telekomunikacyjnego, do identyfikacji zasobów, do kontroli i inwentaryzacji oraz do oznaczeń elektrycznych. Każda kaseta B30C ma rolkę 30,48 m. Taśma jest szeroka na 50,8 mm albo 76,2 mm, przy czym B-428 jest tylko w pierwszej szerokości.\n\nDolna granica pracy B-423 i B-434A to −70 °C, górna 110 i 130 °C. B-428 pracuje w przedziale między −40 a 120 °C. Do B-423 i B-434A zalecana jest taśma barwiąca B30-R6000, a do B-428 taśma B30-R4300. Obsługują je drukarki S3100, S3700, i3300, i4311, i5300 oraz seria BBP (modele 31, 33, 35 i 37).',
  sameAs: 'https://www.brady.eu/labels/product-identification-label-tape-for-b30-printers-cps-4578480',
  images: [
    '/images/products/brady/b30c-2000-423.png',
    '/images/products/brady/b30c-2000-434.png',
    '/images/products/brady/b30c-2000-428.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy poliestrowej Brady B30C-2000-423 o szerokości 50,8 mm na uchwycie kasety',
    'Rolka srebrnej taśmy metalizowanej Brady B30C-2000-434 o szerokości 50,8 mm',
    'Rolka jasnoszarej taśmy metalizowanej Brady B30C-2000-428 o szerokości 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-423, B-434A i B-428, każdy w osobnej wersji' },
    { name: 'Typ materiału', value: 'B-423: poliester bezhalogenowy; B-434A i B-428: poliester metalizowany' },
    { name: 'Wykończenie', value: 'błyszczące: B-423, B-434A; matowe: B-428' },
    { name: 'Klej', value: 'trwały, akrylowy; B-423 agresywny, do podłoży gładkich; B-434A do podłoży gładkich, teksturowanych i szorstkich; B-428 do podłoży gładkich' },
    { name: 'Grubość', value: 'B-423: 0,076 mm; B-434A: 0,102 mm; B-428: 0,122 mm' },
    { name: 'Temperatura pracy', value: 'B-423: od −70 do 110 °C; B-434A: od −70 do 130 °C; B-428: od −40 do 120 °C' },
    { name: 'Warunki pracy', value: 'autoklaw: B-423' },
    { name: 'Odporność', value: 'B-423: ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; B-434A: ścieranie, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały: B-423; srebrny: B-434A; jasnoszary: B-428' },
    { name: 'Szerokość taśmy', value: '50,8 / 76,2 mm; B-428 tylko 50,8 mm' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'UL Recognized i CSA: B-423, B-434A, B-428; AGA: B-428; bezhalogenowe wg DIN VDE 0472 cz. 815: B-423, B-428' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000: B-423 i B-434A; B30-R4300: B-428' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, i3300, i4311, i5300; BBP31, BBP33, BBP35, BBP37' },
    { name: 'Numery artykułów Brady', value: TASMY_PRODUKTY.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_PRODUKTY.map(([pn, , mat, kolor, szer, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${mat} ${szer} × 30,48 m, ${kolor.toLowerCase()}, taśma barwiąca ${tasma}`,
    attributes: { Materiał: mat, Kolor: kolor, Szerokość: `${szer} × 30,48 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Materiał: 'Materiał taśmy ciągłej.\n\nB-423 to biały poliester bezhalogenowy, a B-434A i B-428 to poliestry metalizowane.',
    Kolor: 'Kolor materiału.\n\nB-423 jest biały, B-434A srebrny, a B-428 jasnoszary.',
    Szerokość: 'Szerokość taśmy i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m taśmy. Dostępne są szerokości 50,8 i 76,2 mm. B-428 występuje tylko jako 50,8 mm.',
  },
  faq: [
    { question: 'Do czego służy biały poliester B-423?', answer: 'Do oznaczania płytek drukowanych i podzespołów, etykiet z kodami kreskowymi, tabliczek znamionowych i paneli fotowoltaicznych. Materiał jest bezhalogenowy i nadaje się do autoklawu.' },
    { question: 'Którą taśmę barwiącą zamówić do tej rodziny?', answer: 'Do B-423 i B-434A zalecana jest B30-R6000, a do B-428 zalecana jest B30-R4300. Nazwa każdego wariantu podaje właściwą taśmę.' },
    { question: 'Do jakich drukarek pasują te kasety?', answer: 'Do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700), [Brady i3300](/produkt/brady-i3300), [Brady i4311](/produkt/brady-i4311) i [Brady i5300](/produkt/brady-i5300) oraz BBP31, BBP33, BBP35 i BBP37.' },
  ],
  applications: ['Płytki drukowane i podzespoły elektroniczne', 'Etykiety z kodami kreskowymi i tabliczki znamionowe', 'Panele fotowoltaiczne'],
}

// ---------------------------------------------------------------------------
// B-565 — metalizowana taśma poliestrowa (cps-3079459)
// ---------------------------------------------------------------------------

const TASMY_565: [string, string][] = [
  ['B30C-1125-565-SL', '117922'],
  ['B30C-2250-565-SL', '117921'],
  ['B30C-4000-565-SL', '117920'],
]

export const bradyB30Metalizowana565: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-565-sl',
  slug: 'brady-b30c-4000-565-sl',
  name: 'Metalizowana taśma poliestrowa Brady B30C-4000-565-SL — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-565-SL — metalizowany poliester do S3100 i S3700',
  seoDescription: 'Poliester metalizowany Brady B-565 do S3100 i S3700: srebrny, matowy, 28,58–101,6 mm, do 110 °C. PN: B30C-4000-565-SL, B30C-2250-565-SL, B30C-1125-565-SL.',
  shortDescription: 'Brady B30C-4000-565-SL i dwie pozostałe kasety z matowym, srebrnym poliestrem metalizowanym B-565 na tabliczki informacyjne i etykiety z kodami kreskowymi. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-565 to matowy poliester metalizowany w kolorze srebrnym. Z taśmy powstają własne tabliczki instrukcyjne i informacyjne oraz etykiety do identyfikacji ogólnej, także z kodami kreskowymi. Nadruk wykonuje się termotransferowo, taśmą barwiącą z osobnej kasety. Materiał stosuje się do identyfikacji zasobów, podzespołów i urządzeń oraz do oznaczeń inwentarzowych i kontrolnych. Taśma nie ma nadruku fabrycznego.\n\nKaseta B30C zawiera 30,48 m taśmy o grubości 0,071 mm. Rolki różnią się tylko szerokością: 28,58, 57,15 albo 101,6 mm. Wszystkie wersje mają ten sam materiał i trwały klej akrylowy, który łączy się z gładkim podłożem. Kolor jest tylko jeden, więc o wyborze decyduje szerokość. Długość etykiety określa projekt w drukarce.\n\nPoliester znosi ścieranie i chemikalia. Dolna granica pracy to −40 °C, górna 110 °C, a naklejanie jest możliwe od −18 °C. Do tego materiału zalecana jest czarna taśma barwiąca B30-R10000. Drukują go S3100, S3700 i i3300. Obsługują go też i5300, i4311 oraz starsze S3000 i BBP30–BBP37.',
  sameAs: 'https://www.brady.eu/labels/metallised-polyester-tape-for-bbp3x-s3xxx-i3300-s3xxx-i3300-printers-cps-3079459',
  images: [
    '/images/products/brady/b30c-4000-565-sl.png',
    '/images/products/brady/b30c-2250-565-sl.png',
    '/images/products/brady/b30c-1125-565-sl.png',
  ],
  imageDescriptions: [
    'Rolka srebrnej taśmy metalizowanej Brady B30C-4000-565-SL o szerokości 101,6 mm na uchwycie kasety',
    'Rolka srebrnej taśmy metalizowanej Brady B30C-2250-565-SL o szerokości 57,15 mm',
    'Rolka srebrnej taśmy metalizowanej Brady B30C-1125-565-SL o szerokości 28,58 mm z wysuniętym paskiem taśmy',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-565' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'matowe, metaliczne' },
    { name: 'Klej', value: 'trwały, akrylowy; do podłoży gładkich' },
    { name: 'Grubość', value: '0,071 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 110 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_565.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_565.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — poliester metalizowany B-565 ${szerokoscZPn(pn)} × 30,48 m, srebrny`,
    attributes: { Szerokość: `${szerokoscZPn(pn)} × 30,48 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m srebrnej taśmy. Najwęższa ma 28,58 mm, najszersza 101,6 mm.',
  },
  faq: [
    { question: 'Do czego służy metalizowany poliester B-565?', answer: 'Do własnych tabliczek informacyjnych, etykiet z kodami kreskowymi i oznaczeń ogólnych. Stosuje się go też do identyfikacji zasobów i podzespołów oraz do oznaczeń inwentarzowych i kontrolnych.' },
    { question: 'Którą taśmę barwiącą zamówić do materiału B-565?', answer: 'Zalecana jest czarna taśma barwiąca B30-R10000 w osobnej kasecie serii B30.' },
    { question: 'Do jakich drukarek pasuje materiał B-565?', answer: 'Do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i przemysłowych [Brady i3300](/produkt/brady-i3300), [Brady i4311](/produkt/brady-i4311) oraz [Brady i5300](/produkt/brady-i5300). Pasuje też do starszych drukarek BBP30, BBP31, BBP33, BBP35, BBP37 i S3000.' },
  ],
  applications: ['Tabliczki informacyjne', 'Etykiety z kodami kreskowymi', 'Oznaczenia zasobów i podzespołów'],
}

// ---------------------------------------------------------------------------
// B-581 — winyl do przeklejania (cps-3069354)
// ---------------------------------------------------------------------------

const TASMY_581 = rozwin('581', {
  '500': 'WT:118006 YL:118010',
  '1125': 'WT:118005 YL:118009',
  '2250': 'WT:118004 YL:118008',
  '4000': 'WT:118003 YL:118007',
})

export const bradyB30WinylPrzeklejany581: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-581-yl',
  slug: 'brady-b30c-4000-581-yl',
  name: 'Taśma winylowa do przeklejania Brady B30C-4000-581-YL — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-581-YL — winyl do przeklejania do S3100 i S3700',
  seoDescription: 'Winyl Brady B-581 do S3100 i S3700: etykiety do przeklejania bez śladów, 12,7–101,6 mm, biały i żółty. PN: B30C-4000-581-YL, B30C-4000-581-WT, B30C-2250-581-WT.',
  shortDescription: 'Brady B30C-4000-581-YL i siedem pozostałych kaset z błyszczącym winylem B-581 na kleju, który pozwala przeklejać etykiety bez śladów, w kolorze białym albo żółtym. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-581 to giętki winyl o wysokim połysku, który można przeklejać. Akrylowa warstwa klejąca utrzymuje etykietę na powierzchni, a po zdjęciu schodzi bez śladów. Taśma jest przeznaczona do oznaczeń wewnątrz pomieszczeń, w których etykiety trzeba często przeklejać. Sprawdza się przy wdrażaniu 5S i w inwentaryzacji, a także w identyfikacji obiektów, identyfikacji ogólnej i znakach bezpieczeństwa. Nadruk termotransferowy powstaje przy użyciu taśmy barwiącej z osobnej kasety. Przeciętna trwałość na zewnątrz to pięć lat.\n\nKaseta B30C mieści rolkę 30,48 m o grubości 0,125 mm. Szerokości taśmy to 101,6 mm, 57,15 mm, 28,58 mm i 12,7 mm. Każdą szerokość oferuje się w bieli i w żółci. Klej przylega do gładkich podłoży.\n\nOdporność obejmuje ścieranie i chemikalia. Materiał pracuje między −40 a 82 °C, a naklejać go można przy 10 °C lub więcej. Czarna taśma barwiąca B30-R10000 drukuje na obu kolorach. Kasety B-581 przyjmują S3100, S3700 i i3300. Na liście są też i4311 i i5300 oraz starsze modele: S3000, BBP31, BBP30, BBP33, BBP37 i BBP35.',
  sameAs: 'https://www.brady.eu/labels/b30-series-repositionable-vinyl-labels-cps-3069354',
  images: [
    '/images/products/brady/b30c-4000-581-yl.png',
    '/images/products/brady/b30c-2250-581-wt.png',
    '/images/products/brady/b30c-1125-581-yl.png',
  ],
  imageDescriptions: [
    'Rolka żółtej taśmy winylowej Brady B30C-4000-581-YL o szerokości 101,6 mm na uchwycie kasety',
    'Rolka białej taśmy winylowej Brady B30C-2250-581-WT o szerokości 57,15 mm',
    'Rolka żółtej taśmy winylowej Brady B30C-1125-581-YL o szerokości 28,58 mm z wysuniętym paskiem taśmy',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-581' },
    { name: 'Typ materiału', value: 'winyl giętki, do przeklejania' },
    { name: 'Wykończenie', value: 'wysoki połysk' },
    { name: 'Klej', value: 'akrylowy, do przeklejania; zdejmuje się bez śladów kleju; do podłoży gładkich' },
    { name: 'Grubość', value: '0,125 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'wewnątrz; średnia trwałość na zewnątrz 5 lat' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy', value: '12,7 / 28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna) do obu kolorów' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_581.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_581.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — winyl do przeklejania B-581 ${szerokoscZPn(pn)} × 30,48 m, ${kolorZPn(pn)[1]}, nadruk czarny`,
    attributes: { Szerokość: `${szerokoscZPn(pn)} × 30,48 m`, Kolor: kolorZPn(pn)[0] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m taśmy. Najwęższa ma 12,7 mm, najszersza 101,6 mm.',
    Kolor: 'Kolor winylu B-581.\n\nTaśma jest biała albo żółta. Na obu kolorach drukuje czarna taśma barwiąca B30-R10000.',
  },
  faq: [
    { question: 'Czy etykiety z winylu B-581 zostawiają ślady kleju?', answer: 'Nie. Klej akrylowy trzyma etykietę na miejscu, a po zdjęciu schodzi czysto. Etykietę można przykleić w nowym miejscu.' },
    { question: 'Gdzie stosuje się winyl B-581?', answer: 'Wewnątrz pomieszczeń, tam gdzie etykiety trzeba często przesuwać: przy wdrażaniu 5S, w inwentaryzacji i przy znakach bezpieczeństwa. Średnia trwałość na zewnątrz wynosi pięć lat.' },
    { question: 'Którą taśmę barwiącą zamówić do winylu B-581?', answer: 'Do obu kolorów zalecana jest czarna taśma B30-R10000. Kasety pasują do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i starszych drukarek B30.' },
  ],
  applications: ['Oznaczenia metodą 5S', 'Inwentaryzacja i identyfikacja ogólna', 'Znaki bezpieczeństwa i oznaczenia obiektów'],
}

// ---------------------------------------------------------------------------
// B-549 — poliester do naklejania w niskiej temperaturze (cps-3069357)
// ---------------------------------------------------------------------------

const TASMY_549 = rozwin('549', {
  '1125': 'WT:117862',
  '2250': 'WT:117861 YL:117864',
  '4000': 'WT:117860 YL:117863',
})

export const bradyB30PoliesterZimno549: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-549-wt',
  slug: 'brady-b30c-4000-549-wt',
  name: 'Taśma poliestrowa do naklejania w niskiej temperaturze Brady B30C-4000-549-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-549-WT — poliester do S3100 i S3700',
  seoDescription: 'Poliester Brady B-549 do S3100 i S3700: naklejanie od −23 °C, praca do 100 °C, 28,58–101,6 mm. PN: B30C-4000-549-WT, B30C-4000-549-YL, B30C-2250-549-WT.',
  shortDescription: 'Brady B30C-4000-549-WT i cztery pozostałe kasety z błyszczącym poliestrem B-549, który można naklejać już od −23 °C, w kolorze białym i żółtym. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-549 to błyszczący poliester, który można naklejać w zimnym otoczeniu. Minimalna temperatura naklejania wynosi −23 °C. Klej akrylowy jest agresywny i trwale łączy się z gładkim podłożem. Z taśmy powstają etykiety do identyfikacji ogólnej, oznaczeń bezpieczeństwa oraz wskaźników temperatury. Materiał sprawdza się w trudnych warunkach pracy.\n\nRolka ma 30,48 m długości, a materiał 0,076 mm grubości. Szerokości taśmy to 101,6, 57,15 i 28,58 mm. Taśma jest biała, a w szerokościach 101,6 i 57,15 mm występuje także w kolorze żółtym. Wybór wersji sprowadza się więc do szerokości i koloru. Długość każdej etykiety wynika z projektu, a nadruk wykonuje się termotransferowo. Materiał, klej i grubość są w każdej wersji identyczne.\n\nPo naklejeniu etykieta znosi ciepło do 100 °C i mróz do −40 °C. Do nadruku na obu kolorach służy czarna taśma barwiąca B30-R10000, umieszczona w oddzielnej kasecie. Z kasetami współpracują drukarki S3100, S3700 i i3300, a ponadto i4311 i i5300. Ze starszych działają S3000, BBP33, BBP30, BBP35, BBP31 i BBP37.',
  sameAs: 'https://www.brady.eu/labels/b30-series-cold-temperature-application-brady-material-type-cps-3069357',
  images: [
    '/images/products/brady/b30c-4000-549-wt.png',
    '/images/products/brady/b30c-2250-549-yl.png',
    '/images/products/brady/b30c-1125-549-wt.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy poliestrowej Brady B30C-4000-549-WT o szerokości 101,6 mm na uchwycie kasety',
    'Rolka żółtej taśmy poliestrowej Brady B30C-2250-549-YL o szerokości 57,15 mm',
    'Rolka białej taśmy poliestrowej Brady B30C-1125-549-WT o szerokości 28,58 mm z wysuniętym paskiem taśmy',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-549' },
    { name: 'Typ materiału', value: 'poliester do naklejania w niskiej temperaturze' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny; do podłoży gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'od −23 °C' },
    { name: 'Warunki pracy', value: 'trudne warunki' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000 (czarna) do obu kolorów' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: TASMY_549.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_549.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — poliester B-549 ${szerokoscZPn(pn)} × 30,48 m, ${kolorZPn(pn)[1]}, nadruk czarny`,
    attributes: { Szerokość: `${szerokoscZPn(pn)} × 30,48 m`, Kolor: kolorZPn(pn)[0] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy i długość rolki w kasecie B30C.\n\nKażda kaseta ma 30,48 m taśmy. Najwęższa ma 28,58 mm, najszersza 101,6 mm.',
    Kolor: 'Kolor poliestru B-549.\n\nTaśma jest biała albo żółta. Na obu kolorach drukuje czarna taśma barwiąca B30-R10000.',
  },
  faq: [
    { question: 'W jakiej temperaturze można naklejać taśmę B-549?', answer: 'Już od −23 °C. Po naklejeniu etykieta pracuje w zakresie od −40 do 100 °C.' },
    { question: 'Do czego służy poliester B-549?', answer: 'Do etykiet identyfikacyjnych i oznaczeń bezpieczeństwa, które naklejają się w niskiej temperaturze, a także do wskaźników temperatury.' },
    { question: 'Którą taśmę barwiącą zamówić do poliestru B-549?', answer: 'Zalecana jest czarna taśma B30-R10000. Kasety działają w [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz w starszych drukarkach B30.' },
  ],
  applications: ['Etykiety naklejane w niskiej temperaturze', 'Oznaczenia bezpieczeństwa', 'Wskaźniki temperatury i identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// B-484A, B-486B, B-489A — poliester na kleju kauczukowym, 101,6 mm (cps-3079464)
// ---------------------------------------------------------------------------

// [PN, numer artykułu, materiał w tabeli, kolor, długość rolki, taśma barwiąca]
const TASMY_KAUCZUK: [string, string, string, string, string, string][] = [
  ['B30C-4000-484', '145295', 'ToughBond B-484A', 'Biały', '45,72 m', 'B30-R6000'],
  ['B30C-4000-486', '145294', 'MetaLabel B-486B', 'Jasnoszary', '35,05 m', 'B30-R4300'],
  ['B30C-4000-489', '143581', 'ToughBond B-489A', 'Biały', '39,62 m', 'B30-R4300'],
]

export const bradyB30PoliesterKauczuk: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-484',
  slug: 'brady-b30c-4000-484',
  name: 'Taśma poliestrowa Brady ToughBond B30C-4000-484 — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-484 — taśma poliestrowa 101,6 mm do S3100 i S3700',
  seoDescription: 'Taśmy poliestrowe Brady do S3100 i S3700: B-484A, B-486B i B-489A, 101,6 mm, klej kauczukowy, do 120 °C. PN: B30C-4000-484, B30C-4000-486, B30C-4000-489.',
  shortDescription: 'Brady B30C-4000-484, B30C-4000-486 i B30C-4000-489 — kasety z poliestrem 101,6 mm na agresywnym kleju kauczukowym, do podłoży nierównych i szorstkich. Do drukarek Brady S3100 i S3700.',
  description: 'Trzy poliestry w tej rodzinie mają agresywny klej kauczukowy i są przeznaczone do podłoży nierównych, zakrzywionych i szorstkich. B-484A to biała, błyszcząca taśma ToughBond na powierzchnie zakrzywione i pochylone, na przykład tabliczki znamionowe i oznaczenia paneli wewnątrz pomieszczeń. B-489A jest biała i matowa. Dobrze przylega do mocno teksturowanych powierzchni, takich jak malowane proszkowo obudowy i urządzenia. B-486B to jasnoszary, matowy poliester metalizowany do oznaczania produktów i zasobów na bardzo szorstkich podłożach.\n\nSzerokość każdej taśmy wynosi 101,6 mm. Długość rolki zależy od materiału: 45,72 m dla B-484A, 39,62 m dla B-489A i 35,05 m dla B-486B. Grubość to odpowiednio 0,076, 0,1295 i 0,142 mm.\n\nWszystkie trzy materiały mają ten sam zakres pracy: od −40 do 120 °C. B-484A i B-489A są odporne na chemikalia i korozję, a także na wilgoć, promieniowanie UV oraz pogodę. Materiał B-484A drukuje się taśmą barwiącą B30-R6000, a pozostałe taśmą B30-R4300. Taśmy przyjmują S3100, S3700 oraz przemysłowe i3300, i5300 i i4311. Z drukarek starszych współpracują S3000, BBP37 i BBP35.',
  sameAs: 'https://www.brady.eu/labels/polyester-tape-for-bbp35-bbp37-s3xxx-i3300-printers-cps-3079464',
  images: [
    '/images/products/brady/b30c-4000-484.png',
    '/images/products/brady/b30c-4000-486.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy poliestrowej Brady B30C-4000-484 o szerokości 101,6 mm na uchwycie kasety',
    'Rolka jasnoszarej taśmy metalizowanej Brady B30C-4000-486 o szerokości 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-484A, B-486B i B-489A, każdy w osobnej wersji' },
    { name: 'Typ materiału', value: 'poliester: B-484A, B-489A; poliester metalizowany: B-486B' },
    { name: 'Wykończenie', value: 'błyszczące: B-484A; matowe: B-486B, B-489A' },
    { name: 'Klej', value: 'trwały, kauczukowy, agresywny; do podłoży gładkich, teksturowanych, szorstkich i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: 'B-484A: 0,076 mm; B-486B: 0,142 mm; B-489A: 0,1295 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'B-484A i B-489A: chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały: B-484A, B-489A; jasnoszary: B-486B' },
    { name: 'Szerokość taśmy', value: '101,6 mm' },
    { name: 'Długość taśmy', value: 'B-484A: 45,72 m; B-486B: 35,05 m; B-489A: 39,62 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'UL Recognized: B-484A, B-486B, B-489A; CSA: B-486B, B-489A' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000: B-484A; B30-R4300: B-486B, B-489A' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, i4311, i5300; BBP35, BBP37' },
    { name: 'Numery artykułów Brady', value: TASMY_KAUCZUK.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_KAUCZUK.map(([pn, , mat, kolor, dlugosc, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${mat} 101,6 mm × ${dlugosc}, ${kolor.toLowerCase()}, taśma barwiąca ${tasma}`,
    attributes: { Materiał: mat, Kolor: kolor, Długość: dlugosc },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Materiał: 'Materiał taśmy ciągłej 101,6 mm.\n\nToughBond B-484A to błyszczący poliester na powierzchnie zakrzywione, B-489A to matowy poliester na mocno teksturowane podłoża, a MetaLabel B-486B to metalizowany poliester na bardzo szorstkie podłoża.',
    Kolor: 'Kolor materiału.\n\nB-484A i B-489A są białe, a B-486B jasnoszary.',
    Długość: 'Długość taśmy na rolce w kasecie.\n\nZależy od materiału: 45,72 m dla B-484A, 39,62 m dla B-489A i 35,05 m dla B-486B. Zalecana taśma barwiąca jest podana w nazwie wariantu.',
  },
  faq: [
    { question: 'Który materiał z tej rodziny przykleja się do mocno teksturowanych powierzchni?', answer: 'B-489A, na przykład do malowanych proszkowo obudów i urządzeń wewnątrz pomieszczeń. Do bardzo szorstkich podłoży przeznaczony jest metalizowany B-486B.' },
    { question: 'Którą taśmę barwiącą zamówić do tych materiałów?', answer: 'Do B-484A zalecana jest B30-R6000. Do B-486B i B-489A zalecana jest B30-R4300. Nazwa każdego wariantu podaje właściwą taśmę.' },
    { question: 'Do jakich drukarek pasują te kasety B30C?', answer: 'Drukują je [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700), [Brady i3300](/produkt/brady-i3300), [Brady i4311](/produkt/brady-i4311) i [Brady i5300](/produkt/brady-i5300). Starsze S3000, BBP35 i BBP37 także je obsługują. Taśma barwiąca jest w osobnej kasecie B30-R.' },
  ],
  applications: ['Tabliczki znamionowe i oznaczenia paneli', 'Obudowy i urządzenia o chropowatej powierzchni', 'Oznaczenia produktów i zasobów'],
}

export const bradyB30Ciagle: Product[] = [
  bradyB30Winyl595,
  bradyB30Winyl7569,
  bradyB30Poliester569,
  bradyB30TrudneWarunki,
  bradyB30OznaczanieProduktow,
  bradyB30WinylPrzeklejany581,
  bradyB30PoliesterZimno549,
  bradyB30Metalizowana565,
  bradyB30PoliesterKauczuk,
]

export const bradyB30CiagleSekcje: Record<string, 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'> = Object.fromEntries(bradyB30Ciagle.map((p) => [p.id, 'ciagle' as const]))
