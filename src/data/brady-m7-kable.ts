import type { Product } from './products'
import { wspolneM7 } from './brady-m7-wspolne'

// Materiały Brady tylko do drukarki M710, do oznaczania przewodów i kabli: bezhalogenowe koszulki PermaSleeve B-7641
// (kasety M7 i materiał zbiorczy BM), owijki z poliimidu, zawieszki na listwy zaciskowe, etykiety na rzepie BradyGrip
// i zawieszki owalne. Taśma barwiąca M7-R jest osobno. Dane z rodzin brady.eu; wycofane PN pominięte. 14.11.2026.

const DRUKARKI_M7 = 'Brady M710 i starsza BMP71'

type KolorKoszulki = 'WT' | 'YL'
// Kolor: [atrybut, dopełniacz l. mn. do nazwy wariantu]
const KOLOR_KOSZULKI: Record<KolorKoszulki, [string, string]> = {
  WT: ['Biały', 'białych'],
  YL: ['Żółty', 'żółtych'],
}

// [PN, numer artykułu Brady, średnica koszulki mm, długość odcinka mm, sztuk na rolce, zakres średnic przewodu mm, kolor]
type Koszulka = [string, string, string, string, number, string, KolorKoszulki]

const reprezentatywnyNajpierw = <T extends unknown[]>(dane: T[], pn: string) => [...dane.filter((w) => w[0] === pn), ...dane.filter((w) => w[0] !== pn)]
const numeryArtykulow = (dane: unknown[][]) => dane.map(([pn, art]) => `${pn}: ${art}`).join('; ')

function wariantyKoszulek(dane: Koszulka[], pn: string, slowo: string, zKolorem: boolean) {
  return reprezentatywnyNajpierw(dane, pn).map(([partNumber, , srednica, dlugosc, sztuk, przewod, kolor]) => ({
    partNumber,
    name: `Brady PermaSleeve ${partNumber} — ${sztuk} ${zKolorem ? `${KOLOR_KOSZULKI[kolor][1]} ` : ''}${slowo} koszulki ${srednica} × ${dlugosc} mm`,
    attributes: {
      Rozmiar: `${srednica} × ${dlugosc} mm, ${sztuk} szt.`,
      'Ø kabla': przewod,
      ...(zKolorem ? { Kolor: KOLOR_KOSZULKI[kolor][0] } : {}),
    },
    availability: 'unavailable' as const,
  }))
}

// cps-4554362 — kasety M7 z odcinkami PermaSleeve B-7641: 7 średnic, 2 długości, biały i żółty
const DANE_M7_7641: Koszulka[] = [
  ['M7-094-1-7641', '174658', '2,39', '25,4', 100, '1,19–2,03 mm', 'WT'],
  ['M7-094-1-7641-YL', '174659', '2,39', '25,4', 100, '1,19–2,03 mm', 'YL'],
  ['M7-094-175-7641', '174656', '2,39', '44,45', 100, '1,19–2,03 mm', 'WT'],
  ['M7-094-175-7641-YL', '174657', '2,39', '44,45', 100, '1,19–2,03 mm', 'YL'],
  ['M7-125-1-7641', '174550', '3,18', '25,4', 100, '1,57–2,79 mm', 'WT'],
  ['M7-125-1-7641-YL', '174551', '3,18', '25,4', 100, '1,57–2,79 mm', 'YL'],
  ['M7-125-175-7641', '174548', '3,18', '44,45', 100, '1,57–2,79 mm', 'WT'],
  ['M7-125-175-7641-YL', '174549', '3,18', '44,45', 100, '1,57–2,79 mm', 'YL'],
  ['M7-187-1-7641', '174569', '4,75', '25,4', 100, '2,39–3,81 mm', 'WT'],
  ['M7-187-1-7641-YL', '174570', '4,75', '25,4', 100, '2,39–3,81 mm', 'YL'],
  ['M7-187-175-7641', '174567', '4,75', '44,45', 100, '2,39–3,81 mm', 'WT'],
  ['M7-187-175-7641-YL', '174568', '4,75', '44,45', 100, '2,39–3,81 mm', 'YL'],
  ['M7-250-1-7641', '174588', '6,35', '25,4', 100, '3,18–5,46 mm', 'WT'],
  ['M7-250-1-7641-YL', '174589', '6,35', '25,4', 100, '3,18–5,46 mm', 'YL'],
  ['M7-250-175-7641', '174586', '6,35', '44,45', 100, '3,18–5,46 mm', 'WT'],
  ['M7-250-175-7641-YL', '174587', '6,35', '44,45', 100, '3,18–5,46 mm', 'YL'],
  ['M7-375-1-7641', '174620', '9,53', '25,4', 100, '4,78–8,13 mm', 'WT'],
  ['M7-375-1-7641-YL', '174621', '9,53', '25,4', 100, '4,78–8,13 mm', 'YL'],
  ['M7-375-175-7641', '174618', '9,53', '44,45', 100, '4,78–8,13 mm', 'WT'],
  ['M7-375-175-7641-YL', '174619', '9,53', '44,45', 100, '4,78–8,13 mm', 'YL'],
  ['M7-500-1-7641', '174637', '12,7', '25,4', 100, '6,35–11,43 mm', 'WT'],
  ['M7-500-1-7641-YL', '174638', '12,7', '25,4', 100, '6,35–11,43 mm', 'YL'],
  ['M7-500-175-7641', '174635', '12,7', '44,45', 100, '6,35–11,43 mm', 'WT'],
  ['M7-500-175-7641-YL', '174636', '12,7', '44,45', 100, '6,35–11,43 mm', 'YL'],
  ['M7-750-1-7641', '174648', '19,05', '25,4', 75, '9,53–17,78 mm', 'WT'],
  ['M7-750-1-7641-YL', '174649', '19,05', '25,4', 75, '9,53–17,78 mm', 'YL'],
  ['M7-750-175-7641', '174646', '19,05', '44,45', 75, '9,53–17,78 mm', 'WT'],
  ['M7-750-175-7641-YL', '174647', '19,05', '44,45', 75, '9,53–17,78 mm', 'YL'],
]

export const bradyM7PermaSleeve7641: Product = {
  ...wspolneM7,
  id: 'brady-m7-375-1-7641',
  slug: 'brady-m7-375-1-7641',
  name: 'Bezhalogenowe koszulki termokurczliwe Brady PermaSleeve M7-375-1-7641 — kasety M7 do M710',
  seoTitle: 'Brady PermaSleeve M7-375-1-7641 — koszulki bezhalogenowe do M710',
  seoDescription: 'Kasety Brady PermaSleeve B-7641 do M710: bezhalogenowe koszulki, mało dymu, skurcz 2:1. PN: M7-375-1-7641, M7-125-175-7641, M7-750-1-7641-YL, M7-094-1-7641.',
  shortDescription: 'Brady PermaSleeve M7-375-1-7641 i 27 innych kaset M7 zawierają odcinki bezhalogenowej koszulki termokurczliwej B-7641 w kolorze białym albo żółtym. Do drukarki Brady M710.',
  description: 'Brady PermaSleeve M7-375-1-7641 to jedna z 28 kaset z koszulką B-7641, wykonaną z bezhalogenowej poliolefiny. W razie pożaru materiał wydziela niewiele dymu. Odcinki koszulki leżą w kasecie na podkładzie i przechodzą przez drukarkę jak zwykłe etykiety. Gotowy odcinek wsuwa się na przewód, a następnie ogrzewa. Zamiast kleju działa skurcz: koszulka zaciska się na izolacji.\n\nKasety różnią się trzema cechami. Pierwsza to średnica koszulki przed skurczem, od 2,39 do 19,05 mm, w siedmiu stopniach. Druga to długość odcinka: krótszy ma 25,4 mm, dłuższy 44,45 mm. Trzecia to kolor, biały lub żółty. W kasecie mieści się 100 odcinków, a przy największej średnicy 75. Zakres przewodów sięga od 1,19 do 17,78 mm.\n\nSkurcz 2:1 zmniejsza średnicę koszulki o połowę. Materiał jest samogasnący i znosi chemikalia, korozję, wilgoć, UV oraz wpływ pogody. Użytkować go można między −55 a 105 °C. Spełnia normę BS 6853 (kategoria pojazdu 1A) oraz EN 45545-2, wymaganie 24, w kategorii HL3. Taśmy M7-R6000 lub M7-R6600 dokupuje się osobno. Kaseta wchodzi do M710 i BMP71; w M610 oraz M611 nie zadziała.',
  sameAs: 'https://www.brady.eu/labels/permasleeve-low-smoke-zero-halogen-heat-shrink-wire-cable-labels-for-m710-printers-cps-4554362',
  images: [
    '/images/products/brady/m7-750-175-7641.png',
    '/images/products/brady/m7-375-1-7641-yl.png',
    '/images/products/brady/m7-125-1-7641.png',
  ],
  imageDescriptions: [
    'Kaseta Brady PermaSleeve M7-750-175-7641 z paskiem białych koszulek o średnicy 19,05 mm na podkładzie',
    'Kaseta Brady PermaSleeve M7-375-1-7641-YL z żółtymi odcinkami koszulki 9,53 mm',
    'Kaseta Brady PermaSleeve M7-125-1-7641 z wąskimi białymi odcinkami koszulki 3,18 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z odcinkami koszulki termokurczliwej na podkładzie, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; koszulka obejmuje przewód po skurczu' },
    { name: 'Współczynnik skurczu', value: '2:1' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; materiał samogasnący' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Średnica koszulki', value: '2,39 / 3,18 / 4,75 / 6,35 / 9,53 / 12,7 / 19,05 mm' },
    { name: 'Szerokość koszulki na płasko', value: '4,62 / 5,97 / 8,51 / 11,15 / 16,38 / 21,62 / 31,75 mm' },
    { name: 'Długość odcinka', value: '25,4 albo 44,45 mm' },
    { name: 'Liczba sztuk na rolce', value: '100; 75 przy średnicy koszulki 19,05 mm' },
    { name: 'Zakres średnic przewodu', value: 'od 1,19 do 17,78 mm, zależnie od średnicy koszulki' },
    { name: 'Format', value: 'odcinki koszulki na podkładzie w kasecie M7' },
    { name: 'Normy', value: 'EN 45545-2 (wymaganie 24, kategoria HL3), BS 6853:1999 (kategoria pojazdu 1A), materiał bezhalogenowy' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000, M7-R6600' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(DANE_M7_7641) },
  ],
  variants: wariantyKoszulek(DANE_M7_7641, 'M7-375-1-7641', 'odcinków', true),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koszulki przed skurczem × długość odcinka. Liczbę odcinków w kasecie podaje druga część wartości.\n\nOdcinki mają 25,4 albo 44,45 mm. Koszulka o średnicy 19,05 mm jest po 75 sztuk, pozostałe po 100.',
    'Ø kabla': 'Przewody, na których koszulka ciasno przylega po skurczu.\n\nNajcieńsza koszulka, 2,39 mm, jest do przewodów od 1,19 do 2,03 mm. Koszulka 19,05 mm obejmuje przewody do 17,78 mm.',
    Kolor: 'Kolor materiału koszulki.\n\nKażda z siedmiu średnic jest dostępna jako biała i żółta.',
  },
  faq: [
    { question: 'Jak dobrać koszulkę B-7641 do przewodu?', answer: 'Decyduje średnica izolacji. Przewód 1,57–2,79 mm obejmuje koszulka 3,18 mm. Dla izolacji 4,78–8,13 mm właściwa jest koszulka 9,53 mm. Najgrubsze przewody, 9,53–17,78 mm, oznacza się koszulką 19,05 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do kaset M7-7641?', answer: 'Zalecane są taśmy M7-R6000 i M7-R6600. Taśma nie jest w zestawie z kasetą. Obie pasują do drukarki [Brady M710](/produkt/brady-m710).' },
    { question: 'Czym koszulka B-7641 różni się od zwykłej poliolefiny?', answer: 'Nie zawiera halogenów i przy spalaniu wydziela mało dymu. Materiał jest też samogasnący, a jego skurcz wynosi 2:1.' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Okablowanie teleinformatyczne', 'Instalacje z wymaganiem niskiej emisji dymu'],
}

// cps-4554363 — rolki BM z odcinkami PermaSleeve B-7641 do M710, kolor biały
const DANE_BM_7641: Koszulka[] = [
  ['BM-094-1-7641', '174506', '2,39', '25,4', 2500, '1,19–2,03 mm', 'WT'],
  ['BM7-125-1-7641', '174430', '3,18', '25,4', 1000, '1,57–2,79 mm', 'WT'],
  ['BM-125-175-7641', '174429', '3,18', '44,45', 1000, '1,57–2,79 mm', 'WT'],
  ['BM-187-1-7641', '174452', '4,75', '25,4', 1000, '2,39–3,81 mm', 'WT'],
  ['BM-187-175-7641', '174451', '4,75', '44,45', 1000, '2,39–3,81 mm', 'WT'],
  ['BM-250-1-7641', '174467', '6,35', '25,4', 1000, '3,18–5,46 mm', 'WT'],
  ['BM-375-1-7641', '174483', '9,53', '25,4', 1000, '4,78–8,13 mm', 'WT'],
  ['BM-375-175-7641', '174482', '9,53', '44,45', 1000, '4,78–8,13 mm', 'WT'],
]

export const bradyM7BmPermaSleeve7641: Product = {
  ...wspolneM7,
  id: 'brady-bm-250-1-7641',
  slug: 'brady-bm-250-1-7641',
  name: 'Bezhalogenowe koszulki termokurczliwe Brady PermaSleeve BM-250-1-7641 na dużej rolce — materiał BM do M710',
  seoTitle: 'Brady PermaSleeve BM-250-1-7641 — koszulki bezhalogenowe do M710',
  seoDescription: 'Rolki Brady PermaSleeve B-7641 do M710: 1000 albo 2500 białych odcinków bezhalogenowej koszulki. PN: BM-250-1-7641, BM-375-175-7641, BM-094-1-7641.',
  shortDescription: 'Brady PermaSleeve BM-250-1-7641 i siedem innych rolek BM zawierają 1000 albo 2500 białych odcinków bezhalogenowej koszulki B-7641. Do drukarki Brady M710.',
  description: 'Rolki BM-7641 służą do znakowania dużych partii przewodów. Każda mieści od 1000 do 2500 białych odcinków bezhalogenowej koszulki z poliolefiny B-7641, a taśmy barwiącej w niej nie ma. Materiał wydziela mało dymu przy spalaniu.\n\nDo wyboru jest osiem rolek. Koszulka ma średnicę 2,39; 3,18; 4,75; 6,35 lub 9,53 mm. Odcinki mają 25,4 mm długości, a w trzech rolkach (BM-125-175, BM-187-175 i BM-375-175) 44,45 mm. Najcieńsza koszulka jest pakowana po 2500 sztuk, reszta po tysiąc. Zakres średnic przewodów wynosi od 1,19 do 8,13 mm, czyli w skali AWG od 24 do 4. Po spłaszczeniu koszulka ma od 4,62 do 16,38 mm szerokości. Kolor jest zawsze biały.\n\nGotową koszulkę zakłada się na przewód przed ogrzaniem. Skurcz 2:1 daje ścisłe obłożenie izolacji. Zakres pracy to −55…105 °C. Materiał jest samogasnący. Spełnia EN 45545-2 (HL3) i BS 6853 w kategorii 1A. Do wydruku wybiera się taśmę M7-R6000 lub M7-R6600, a drukarką może być M710 albo starsza BMP71.',
  sameAs: 'https://www.brady.eu/labels/permasleeve-low-smoke-zero-halogen-heat-shrink-wire-cable-labels-bulk-for-m710-printers-cps-4554363',
  images: [
    '/images/products/brady/bm-375-175-7641.png',
    '/images/products/brady/bm-125-1-7641.png',
  ],
  imageDescriptions: [
    'Kartonowy podajnik z rolką Brady BM-375-175-7641 i wysuniętym paskiem białych odcinków koszulki',
    'Kartonowy podajnik z rolką Brady BM7-125-1-7641 z wąskimi odcinkami koszulki 3,18 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Duża rolka BM z odcinkami koszulki termokurczliwej (materiał luzem), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; koszulka obejmuje przewód po skurczu' },
    { name: 'Współczynnik skurczu', value: '2:1' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; materiał samogasnący' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Średnica koszulki', value: '2,39 / 3,18 / 4,75 / 6,35 / 9,53 mm' },
    { name: 'Szerokość koszulki na płasko', value: '4,62 / 5,97 / 8,51 / 11,15 / 16,38 mm' },
    { name: 'Długość odcinka', value: '25,4 albo 44,45 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000; 2500 przy średnicy koszulki 2,39 mm' },
    { name: 'Zakres średnic przewodu', value: 'od 1,19 do 8,13 mm, zależnie od średnicy koszulki' },
    { name: 'Format', value: 'odcinki koszulki na dużej rolce (materiał luzem)' },
    { name: 'Normy', value: 'EN 45545-2 (wymaganie 24, kategoria HL3), BS 6853:1999 (kategoria pojazdu 1A), materiał bezhalogenowy' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000, M7-R6600' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(DANE_BM_7641) },
  ],
  variants: wariantyKoszulek(DANE_BM_7641, 'BM-250-1-7641', 'odcinków', false),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koszulki przed skurczem × długość odcinka. Druga część wartości to liczba odcinków na rolce.\n\nRolka z koszulką 2,39 mm ma 2500 sztuk, pozostałe po 1000.',
    'Ø kabla': 'Przewody, na których koszulka ciasno przylega po skurczu.\n\nKoszulka 2,39 mm jest do przewodów od 1,19 do 2,03 mm. Koszulka 9,53 mm obejmuje przewody od 4,78 do 8,13 mm.',
  },
  faq: [
    { question: 'Czym rolka BM-7641 różni się od kasety M7-7641?', answer: 'Liczbą odcinków. Kaseta M7 ma 100 albo 75 odcinków, a rolka BM 1000 albo 2500. Materiał B-7641 i skurcz 2:1 są takie same. Rolki BM są tylko białe i mają średnice do 9,53 mm.' },
    { question: 'Do jakich przewodów pasują rolki BM-7641?', answer: 'Do przewodów o średnicy od 1,19 do 8,13 mm. Koszulka 3,18 mm obejmuje izolację 1,57–2,79 mm, a koszulka 9,53 mm izolację 4,78–8,13 mm.' },
    { question: 'Jaka taśma barwiąca pasuje do rolek BM-7641?', answer: 'Zalecane są taśmy M7-R6000 i M7-R6600 do drukarki [Brady M710](/produkt/brady-m710). Taśmy nie ma w zestawie z rolką.' },
  ],
  applications: ['Seryjne oznaczanie przewodów', 'Produkcja wiązek kablowych', 'Okablowanie teleinformatyczne'],
}

// cps-4554319 — owijki z poliimidu B-472 (kasety M7) i taśma ciągła B-472 (kasety M7C) do M710
// [PN, numer artykułu Brady, wymiary, kolor]; owijki: [PN, art, szerokość × wysokość mm, sztuk, AWG, kolor]
const OWIJKI_472: [string, string, string, number, string][] = [
  ['M7-31-472', '173343', '38,1 × 25,4', 250, '4–10 AWG'],
  ['M7-17-472', '174557', '25,4 × 12,7', 500, '10–12 AWG'],
  ['M7-30-472', '174600', '38,1 × 19,05', 250, '10–16 AWG'],
]
const TASMA_472: [string, string, string, 'WT' | 'YL'][] = [
  ['M7C-1500-472', '173269', '38,1', 'WT'],
  ['M7C-1500-472-YL', '173268', '38,1', 'YL'],
  ['M7C-1000-472', '173296', '25,4', 'WT'],
  ['M7C-1000-472-YL', '173295', '25,4', 'YL'],
  ['M7C-2000-472', '173262', '50,8', 'WT'],
  ['M7C-2000-472-YL', '173261', '50,8', 'YL'],
]

export const bradyM7Owijki472: Product = {
  ...wspolneM7,
  id: 'brady-m7-31-472',
  slug: 'brady-m7-31-472',
  name: 'Trudnopalne owijki z poliimidu Brady UltraTemp M7-31-472 — kasety M7 i M7C do M710',
  seoTitle: 'Brady UltraTemp M7-31-472 — owijki z poliimidu do M710',
  seoDescription: 'Kasety Brady UltraTemp B-472 do M710: trudnopalny poliimid, od −70 do 100 °C, owijki na przewody i taśma ciągła 15,24 m. PN: M7-31-472, M7-17-472, M7C-1500-472.',
  shortDescription: 'Brady UltraTemp M7-31-472 i osiem innych kaset M7 oraz M7C zawierają trudnopalny poliimid B-472 z trwałym klejem akrylowym, w formie owijek albo taśmy ciągłej. Do drukarki Brady M710.',
  description: 'B-472 to matowy poliimid o grubości 0,081 mm, który nie podtrzymuje płomienia i sam gaśnie. Warstwa klejowa jest akrylowa i trwała, a przylega do powierzchni zarówno gładkich, jak i chropowatych. Nadruk wykonuje się termotransferowo. Materiał stosuje się do oznaczania przewodów oraz wiązek.\n\nRodzina obejmuje dziewięć kaset. Trzy zawierają gotowe owijki: 500 sztuk o wymiarach 25,4 × 12,7 mm oraz dwa rozmiary po 250 sztuk: 38,1 × 25,4 oraz 38,1 × 19,05 mm. Owijki są przeznaczone dla przewodów od 4 do 16 AWG: najmniejsza dla 10–12 AWG, największa dla 4–10 AWG. Przy owijce 38,1 × 25,4 mm zadruk zajmuje 25,4 × 12,7 mm. W sześciu kasetach M7C jest taśma ciągła: rolka ma 15,24 m, a szerokość wynosi 25,4; 38,1 lub 50,8 mm. Owijki są białe, taśma jest biała lub żółta.\n\nUżytkować można od −70 do 100 °C. Handlowo ten materiał występuje pod nazwą UltraTemp. Odpiera ścieranie, korozję, wilgoć, UV oraz środki chemiczne. Kasety nie mają taśmy barwiącej; zaleca się M7-R4300. Mogą pracować w M710 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/high-temp-flame-retardant-polyimide-wrap-around-wire-cable-labels-for-m710-printers-cps-4554319',
  images: [
    '/images/products/brady/m7-31-472.png',
    '/images/products/brady/m7c-1500-472.png',
    '/images/products/brady/m7c-2000-472-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady UltraTemp M7-31-472 z białymi owijkami z poliimidu 38,1 × 25,4 mm',
    'Kaseta Brady UltraTemp M7C-1500-472 z białą taśmą ciągłą z poliimidu 38,1 mm',
    'Kaseta Brady UltraTemp M7C-2000-472-YL z żółtą taśmą ciągłą z poliimidu 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi owijkami (M7) albo z taśmą ciągłą (M7C), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-472' },
    { name: 'Typ materiału', value: 'poliimid trudnopalny, samogasnący' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV; materiał samogasnący' },
    { name: 'Kolory', value: 'owijki białe; taśma ciągła biała albo żółta' },
    { name: 'Wymiary etykiety', value: 'owijki 25,4 × 12,7, 38,1 × 19,05 i 38,1 × 25,4 mm; taśma ciągła 25,4, 38,1 i 50,8 mm × 15,24 m' },
    { name: 'Pole nadruku', value: 'owijka 38,1 × 25,4 mm: 25,4 × 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'owijki: 500 (25,4 × 12,7 mm) albo 250' },
    { name: 'Zakres przewodów', value: 'od 4 do 16 AWG, zależnie od rozmiaru owijki' },
    { name: 'Format', value: 'owijki wykrawane (M7) i taśma ciągła 15,24 m (M7C)' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow([...OWIJKI_472, ...TASMA_472]) },
  ],
  variants: [
    ...OWIJKI_472.map(([pn, , rozmiar, sztuk, awg]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${sztuk} owijek ${rozmiar} mm, kaseta do M710`,
      attributes: { Rozmiar: `${rozmiar} mm, ${sztuk} szt.`, 'Zakres przewodu': awg, Kolor: 'Biały' },
      availability: 'unavailable' as const,
    })),
    ...TASMA_472.map(([pn, , szerokosc, kolor]) => ({
      partNumber: pn,
      name: `Brady ${pn} — taśma ciągła ${szerokosc} mm × 15,24 m, ${kolor === 'WT' ? 'biała' : 'żółta'}`,
      attributes: { Rozmiar: `ciągła ${szerokosc} mm × 15,24 m`, Kolor: kolor === 'WT' ? 'Biały' : 'Żółty' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety w milimetrach. Dla owijek podano szerokość × wysokość i liczbę sztuk na rolce, a dla taśmy ciągłej szerokość i długość.\n\nOwijka 25,4 × 12,7 mm jest po 500 sztuk, pozostałe po 250. Każda rolka taśmy ma 15,24 m.',
    'Zakres przewodu': 'Rozmiar przewodu, który obejmuje owijka, w skali AWG.\n\nNajmniejsza owijka obejmuje przewody 10–12 AWG. Największa, 38,1 × 25,4 mm, przewody od 4 do 10 AWG.',
    Kolor: 'Kolor materiału.\n\nOwijki są białe. Taśma ciągła jest biała albo żółta, każda szerokość w obu kolorach.',
  },
  faq: [
    { question: 'Czym poliimid B-472 różni się od zwykłego winylu?', answer: 'Poliimid jest trudnopalny i samogasnący. Pracuje od −70 do 100 °C i znosi ścieranie, chemikalia, korozję oraz UV. Grubość materiału wynosi 0,081 mm.' },
    { question: 'Jak dobrać owijkę B-472 do przewodu?', answer: 'Według rozmiaru przewodu w skali AWG. Owijka 25,4 × 12,7 mm jest do przewodów 10–12 AWG, owijka 38,1 × 19,05 mm do 10–16 AWG, a owijka 38,1 × 25,4 mm do 4–10 AWG.' },
    { question: 'Jaką taśmą barwiącą drukuje się na B-472 w drukarce M710?', answer: 'Zalecana jest taśma M7-R4300. Kasety nie mają taśmy barwiącej. Pasują do [Brady M710](/produkt/brady-m710) i nie działają w M610 ani M611.' },
  ],
  applications: ['Przewody i wiązki kablowe', 'Miejsca wymagające materiału samogasnącego', 'Instalacje elektryczne'],
}

// cps-5195684 — taśma ciągła z winylu B-7696 na oznaczniki listew zaciskowych (kasety M7C).
// M6C-433-7696 z tej rodziny (M610, M611, M710) pominięty: karta tylko do M710.
const TASMY_7696: [string, string, string][] = [
  ['M7C-433-7696', '323195', '11'],
  ['M7C-669-7696-WT', '323786', '17'],
]

export const bradyM7ListwyZaciskowe7696: Product = {
  ...wspolneM7,
  id: 'brady-m7c-433-7696',
  slug: 'brady-m7c-433-7696',
  name: 'Zawieszki winylowe na listwy zaciskowe Brady M7C-433-7696 — kasety M7 do M710',
  seoTitle: 'Brady M7C-433-7696 — oznaczniki listew zaciskowych do M710',
  seoDescription: 'Kasety Brady z białą taśmą winylową B-7696 do M710: 11 albo 17 mm × 10 m, oznaczniki listew zaciskowych w rozdzielnicach. PN: M7C-433-7696, M7C-669-7696-WT.',
  shortDescription: 'Brady M7C-433-7696 i M7C-669-7696-WT zawierają białą, błyszczącą taśmę ciągłą z winylu B-7696 do oznaczania listew zaciskowych. Do drukarki Brady M710.',
  description: 'Biała, błyszcząca taśma winylowa B-7696 służy do drukowania oznaczników na listwy zaciskowe. Wyraźny opis zacisków zmniejsza liczbę pomyłek przy okablowaniu, a przez to poprawia bezpieczeństwo. Oznaczniki są dopasowane do większości listew Schneider, stosowanych w głównych rozdzielnicach niskiego napięcia.\n\nRodzina ma dwie kasety: M7C-433-7696 z taśmą 11 mm oraz M7C-669-7696-WT z taśmą 17 mm. W każdej jest rolka długości 10 m z winylu o grubości 0,249 mm. Powierzchnia taśmy jest błyszcząca, a kolor biały w obu kasetach. Wzory projektuje się w aplikacji Terminal Block, dostępnej w Brady Workstation i w Express Labels Mobile.\n\nWinyl znosi temperaturę od −40 do 70 °C. Chemikalia, korozja, wilgoć, UV i pogoda mu nie szkodzą. Do materiału pasują taśmy barwiące serii R6000HF, R6200 i R6900, a w M710 zaleca się M7-R6000, którą trzeba dokupić. Zastosowanie to oznaczanie elementów instalacji elektrycznych. Kasety M7C pasują do M710 oraz BMP71, ale nie do M610 ani M611. Taśmy barwiącej w kasecie nie ma, więc zamawia się ją osobno.',
  sameAs: 'https://www.brady.eu/labels/vinyl-terminal-block-tags-for-m710-printers-cps-5195684',
  images: [
    '/images/products/brady/m7c-433-7696.png',
    '/images/products/brady/m7c-669-7696-wt.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-433-7696 z białą taśmą winylową 11 mm na rolce',
    'Kaseta Brady M7C-669-7696-WT z białą taśmą winylową 17 mm na rolce',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą z winylu, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7696' },
    { name: 'Typ materiału', value: 'winyl' },
    { name: 'Grubość', value: '0,249 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Wymiary etykiety', value: 'szerokość 11 albo 17 mm, długość taśmy 10 m' },
    { name: 'Format', value: 'taśma ciągła w kasecie M7C' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(TASMY_7696) },
  ],
  variants: TASMY_7696.map(([pn, , szerokosc]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała taśma winylowa ${szerokosc} mm × 10 m, kaseta do M710`,
    attributes: { Rozmiar: `ciągła ${szerokosc} mm × 10 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej w kasecie.\n\nObie kasety mają 10 m taśmy. Węższa taśma ma 11 mm, a szersza 17 mm.',
  },
  faq: [
    { question: 'Do jakich listew zaciskowych pasuje taśma B-7696?', answer: 'Oznaczniki są dopasowane do większości listew zaciskowych Schneider w głównych rozdzielnicach niskiego napięcia. Dostępne są taśmy o szerokości 11 i 17 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do kaset M7C-7696?', answer: 'Zalecana jest taśma M7-R6000. Nie ma jej w zestawie z kasetą. Pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
    { question: 'Czym zaprojektować oznaczniki listew zaciskowych?', answer: 'W aplikacji Terminal Block w programie Brady Workstation albo w aplikacji mobilnej Express Labels.' },
  ],
  applications: ['Oznaczanie listew zaciskowych', 'Rozdzielnice niskiego napięcia', 'Instalacje elektryczne'],
}

// cps-4554293 — BradyGrip B-414: poliester z haczykami VELCRO, taśma ciągła 6,1 m (kasety M7C)
const TASMY_414: [string, string, string][] = [
  ['M7C-500-414', '173230', '12,7'],
  ['M7C-250-414', '173238', '6,35'],
  ['M7C-750-414', '173202', '19,05'],
  ['M7C-1000-414', '173299', '25,4'],
  ['M7C-1500-414', '173270', '38,1'],
]

export const bradyM7BradyGrip414: Product = {
  ...wspolneM7,
  id: 'brady-m7c-500-414',
  slug: 'brady-m7c-500-414',
  name: 'Etykiety na rzepie do wiązek kabli Brady BradyGrip M7C-500-414 — kasety M7 do M710',
  seoTitle: 'Brady BradyGrip M7C-500-414 — etykiety na rzepie do M710',
  seoDescription: 'Kasety Brady BradyGrip B-414 do M710: etykiety drukowane na rzepie VELCRO do wiązek kabli, 6,35–38,1 mm × 6,1 m. PN: M7C-250-414, M7C-500-414, M7C-1500-414.',
  shortDescription: 'Brady BradyGrip M7C-500-414 i cztery inne kasety M7C zawierają białą taśmę poliestrową z haczykami VELCRO do oznaczania wiązek kabli. Do drukarki Brady M710.',
  description: 'BradyGrip to materiał B-414 z nadrukiem z przodu i mikroskopijnymi haczykami rzepu z tyłu. Haczyki zastępują klej: etykieta zaczepia się o opaskę VELCRO ONE-WRAP, a w razie potrzeby można ją przesunąć albo zdjąć. Rzep nie uszkadza przewodów, a nylonowa opaska zaciskowa może to zrobić. Opaski ONE-WRAP trzeba kupić osobno.\n\nRodzina liczy pięć kaset z białą, matową taśmą o długości 6,1 m. Różnią się szerokością: 6,35; 12,7; 19,05; 25,4 lub 38,1 mm. Grubość poliestru to 0,381 mm. Przeznaczeniem materiału są powierzchnie gładkie. Taśma jest ciągła, więc długość etykiety wynika z projektu nadruku. Materiał służy do oznaczania przewodów i kabli w wiązkach.\n\nZakres temperatur to −40…50 °C. Taśma jest odporna na ścieranie i wilgoć, znosi też zmiany temperatury. Zalecana jest seria taśm barwiących R6000HF, w M710 taśma M7-R6000, kupowana osobno. Kasety M7C obsługuje drukarka M710 i starsza BMP71. Do M610 oraz M611 nie pasują. Opaska VELCRO i taśma barwiąca nie są dołączone do kasety.',
  sameAs: 'https://www.brady.eu/labels/bradygrip-print-on-hook-labels-featuring-velco-brand-hook-for-m710-printers-cps-4554293',
  images: [
    '/images/products/brady/m7c-500-414.png',
    '/images/products/brady/m7c-1500-414.png',
    '/images/products/brady/m7c-250-414.png',
  ],
  imageDescriptions: [
    'Kaseta Brady BradyGrip M7C-500-414 z białą taśmą z haczykami VELCRO 12,7 mm',
    'Kaseta Brady BradyGrip M7C-1500-414 z szeroką białą taśmą 38,1 mm',
    'Kaseta Brady BradyGrip M7C-250-414 z wąską białą taśmą 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą z haczykami VELCRO, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'poliester B-414 z haczykami VELCRO' },
    { name: 'Mocowanie', value: 'na opasce VELCRO ONE-WRAP (opaska poza zestawem)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,381 mm' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Właściwości', value: 'etykietę można przesuwać i zdejmować' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, temperatura' },
    { name: 'Szerokość taśmy', value: '6,35 / 12,7 / 19,05 / 25,4 / 38,1 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '6,1 m' },
    { name: 'Format', value: 'taśma ciągła w kasecie M7C' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(TASMY_414) },
  ],
  variants: TASMY_414.map(([pn, , szerokosc]) => ({
    partNumber: pn,
    name: `Brady BradyGrip ${pn} — taśma z haczykami VELCRO ${szerokosc} mm × 6,1 m, kaseta do M710`,
    attributes: { Rozmiar: `ciągła ${szerokosc} mm × 6,1 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość taśmy z haczykami i jej długość w kasecie.\n\nKażda kaseta ma 6,1 m taśmy. Najwęższa ma 6,35 mm, a najszersza 38,1 mm.',
  },
  faq: [
    { question: 'Czy do kasety BradyGrip dołączona jest opaska VELCRO?', answer: 'Nie. W zestawie jest tylko materiał do druku. Opaskę VELCRO ONE-WRAP kupuje się osobno.' },
    { question: 'Czy etykietę BradyGrip można przełożyć na inną opaskę?', answer: 'Tak. Etykieta trzyma się na haczykach, więc można ją zdjąć i przesunąć. Materiał jest odpowiedni do powierzchni gładkich.' },
    { question: 'Jaką taśmę barwiącą wybrać do BradyGrip w drukarce M710?', answer: 'Zalecana jest taśma M7-R6000. Kaseta nie ma taśmy barwiącej. Pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Wiązki kabli na opaskach VELCRO', 'Oznaczenia, które można przesuwać'],
}

// cps-4554277 — zawieszki owalne B-145BFR na dużych rolkach BM7 (po 1000 sztuk)
const OWALNE_145: [string, string, string, string][] = [
  ['BM7-110-145-GY', '174414', '44,45 × 25,4', '38,1 × 25,4'],
  ['BM7-111-145-GY', '174415', '30,63 × 19,25', '27,43 × 19,25'],
]

export const bradyM7BmOwalne145: Product = {
  ...wspolneM7,
  id: 'brady-bm7-110-145-gy',
  slug: 'brady-bm7-110-145-gy',
  name: 'Trudnopalne zawieszki owalne na dużej rolce Brady BM7-110-145-GY — materiał BM7 do M710',
  seoTitle: 'Brady BM7-110-145-GY — zawieszki owalne luzem do M710',
  seoDescription: 'Duże rolki Brady BM7 do M710: 1000 szarych zawieszek owalnych z trudnopalnego polietylenu B-145BFR, od −40 do 100 °C. PN: BM7-110-145-GY, BM7-111-145-GY.',
  shortDescription: 'Brady BM7-110-145-GY i BM7-111-145-GY to rolki BM7 z 1000 szarych zawieszek owalnych z trudnopalnego polietylenu B-145BFR. Do drukarki Brady M710.',
  description: 'Rolki BM7 zawierają po 1000 szarych zawieszek owalnych z trudnopalnego polietylenu B-145BFR. Materiał jest przeznaczony do nadruku termotransferowego i ma grubość 0,559 mm. To krzyżowo laminowana folia polietylenowa. Zadrukowaną zawieszkę zgina się wzdłuż na pół, a klej wewnątrz skleja obie części w sztywny element. Zewnętrzna powierzchnia pozostaje bez kleju.\n\nBM7-110-145-GY ma wymiar 44,45 × 25,4 mm i pozwala zadrukować 38,1 × 25,4 mm. BM7-111-145-GY jest mniejsza: 30,63 × 19,25 mm, a zadrukować można 27,43 × 19,25 mm. Zawieszki sprawdzają się w ewidencji majątku, oznaczaniu urządzeń i podzespołów, okablowania teleinformatycznego, obiektów oraz zapasów magazynowych. Używa się ich też do oznaczeń bezpieczeństwa i kontroli.\n\nPolietylen jest odporny na rozdarcie i trudnopalny, a w pracy znosi od −40 do 100 °C. Zgodność z dyrektywą RoHS jest zachowana. Taśma barwiąca M7-R6200 kupowana jest osobno, a rolki pasują do M710 i BMP71. Seria taśm barwiących zgodna z tym materiałem to R6200. Do M610 i M611 rolki BM7 nie pasują, a taśmy barwiącej w rolce nie ma.',
  sameAs: 'https://www.brady.eu/labels/oval-tags-bulk-for-m710-printers-cps-4554277',
  images: [
    '/images/products/brady/bm7-110-145-gy.png',
    '/images/products/brady/bm7-111-145-gy.png',
  ],
  imageDescriptions: [
    'Kartonowy podajnik z rolką Brady BM7-110-145-GY i wysuniętym paskiem szarych zawieszek owalnych',
    'Kartonowy podajnik z rolką Brady BM7-111-145-GY i małymi szarymi zawieszkami owalnymi',
  ],
  specifications: [
    { name: 'Typ', value: 'Duża rolka BM7 z zawieszkami owalnymi do złożenia (materiał luzem), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-145BFR' },
    { name: 'Typ materiału', value: 'polietylen trudnopalny, laminowany krzyżowo, sztywny po złożeniu' },
    { name: 'Grubość', value: '0,559 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'samoprzylepny, wewnątrz; łączy dwie części zawieszki' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'trudnopalność, rozdarcie' },
    { name: 'Kolor', value: 'szary' },
    { name: 'Wymiary etykiety', value: '44,45 × 25,4 mm albo 30,63 × 19,25 mm' },
    { name: 'Pole nadruku', value: '38,1 × 25,4 mm albo 27,43 × 19,25 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000' },
    { name: 'Format', value: 'zawieszki wykrawane na dużej rolce' },
    { name: 'Normy', value: 'RoHS' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6200' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(OWALNE_145) },
  ],
  variants: OWALNE_145.map(([pn, , rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 1000 szarych zawieszek owalnych ${rozmiar} mm`,
    attributes: { Rozmiar: `${rozmiar} mm, 1000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary zawieszki w milimetrach (szerokość × wysokość) i liczba sztuk na rolce.\n\nWiększa zawieszka ma pole nadruku 38,1 × 25,4 mm, mniejsza 27,43 × 19,25 mm. Obie rolki mają po 1000 sztuk.',
  },
  faq: [
    { question: 'Jak powstaje sztywna zawieszka owalna z rolki BM7?', answer: 'Po wydruku zawieszkę składa się na pół. Klej wewnątrz łączy obie części w sztywną zawieszkę, a na zewnątrz kleju nie ma.' },
    { question: 'Jaką taśmą barwiącą drukować zawieszki BM7-145?', answer: 'Zalecana jest taśma M7-R6200. Nie ma jej w zestawie z rolką. Pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Kable i okablowanie teleinformatyczne', 'Zapasy magazynowe i kontrola', 'Znaki bezpieczeństwa'],
}

export const bradyM7Kable: Product[] = [
  bradyM7PermaSleeve7641,
  bradyM7BmPermaSleeve7641,
  bradyM7Owijki472,
  bradyM7ListwyZaciskowe7696,
  bradyM7BradyGrip414,
  bradyM7BmOwalne145,
]

export const bradyM7KableSekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = {
  'brady-m7-375-1-7641': 'kable',
  'brady-bm-250-1-7641': 'kable',
  'brady-m7-31-472': 'kable',
  'brady-m7c-433-7696': 'kable',
  'brady-m7c-500-414': 'kable',
  'brady-bm7-110-145-gy': 'kable',
}
