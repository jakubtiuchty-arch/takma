import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Koszulki termokurczliwe PermaSleeve LSZH B-7641 (niska emisja dymu, bez halogenów) na rolkach z gilzą 76 mm
// do przemysłowych drukarek Brady i6100, i7100 i i7500 oraz ciągła koszulka LSZH do i7100 i i7500. 14.11.2026.

const DRUKARKI = 'Brady i6100, i7100, i7500'
const TASMA = 'i75-R6007, IP-R6007, R6007 (serie R6000HF, R6600)'
const NORMY = 'BS 6853 (1999), kategoria pojazdu 1A; EN 45545-2, wymaganie 24, kategoria HL3, zero halogenów'
const ODPORNOSC = 'chemikalia, korozja, wilgoć, promieniowanie UV, warunki atmosferyczne; materiał samogasnący'

const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', YL: 'żółta' }
const NADRUK: Record<string, string> = { J: 'Jednostronny', D: 'Dwustronny' }

// [PN, sztuk na rolce, długość koszulki mm, kolor, nadruk (J = jedna strona, D = obie strony)]
type Wiersz = [string, number, string, 'WT' | 'YL', 'J' | 'D']

const szt = (n: number) => (n >= 10000 ? n.toLocaleString('pl-PL').replace(/ /g, ' ') : String(n))

function warianty(wysokosc: string, wiersze: Wiersz[]): NonNullable<Product['variants']> {
  return wiersze.map(([pn, ilosc, dlugosc, kolor, strony]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} koszulka PermaSleeve LSZH, nadruk ${strony === 'J' ? 'jednostronny' : 'dwustronny'}`,
    attributes: { Rozmiar: `${dlugosc} × ${wysokosc} mm, ${szt(ilosc)} szt.`, Kolor: KOLORY[kolor], Nadruk: NADRUK[strony] },
    availability: 'unavailable' as const,
  }))
}

const TOOLTIPY_KOSZULEK = (rozmiar: string): Record<string, string> => ({
  Rozmiar: rozmiar,
  Kolor: 'Kolor koszulki.\n\nDostępne są biała i żółta. Obie mają tę samą specyfikację i tę samą taśmę barwiącą.',
  Nadruk: 'Liczba zadrukowywanych stron koszulki.\n\nWersja jednostronna ma nadruk po jednej stronie. Numery z przedrostkiem 2 umożliwiają nadruk po obu stronach.',
})

// ---------------------------------------------------------------------------
// Ø 1,19–2,03 mm (24–20 AWG), wysokość 4,62 mm (cps-4510951)
// ---------------------------------------------------------------------------

const WARIANTY_094: Wiersz[] = [
  ['LSZH-094-2-YL', 2500, '50,8', 'YL', 'J'],
  ['LSZH-094-2-WT', 2500, '50,8', 'WT', 'J'],
  ['LSZH-094-2-YL-S', 500, '50,8', 'YL', 'J'],
  ['LSZH-094-2-WT-S', 500, '50,8', 'WT', 'J'],
  ['LSZH-094-2-YL-2', 5000, '25,4', 'YL', 'J'],
  ['LSZH-094-2-WT-2', 5000, '25,4', 'WT', 'J'],
  ['LSZH-094-2-YL-4', 10000, '12,7', 'YL', 'J'],
  ['LSZH-094-2-WT-4', 10000, '12,7', 'WT', 'J'],
  ['2LSZH-094-2-YL', 2500, '50,8', 'YL', 'D'],
  ['2ZH-094-2-WT', 2500, '50,8', 'WT', 'D'],
  ['2LSZH-094-2-WT-2', 5000, '25,4', 'WT', 'D'],
]

export const bradyLszh094: Product = {
  ...wspolneTHT,
  id: 'brady-lszh-094-2-yl',
  slug: 'brady-lszh-094-2-yl',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 1,19–2,03 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 1,19–2,03 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 24–20 AWG do drukarek Brady i6100, i7100 i i7500. PN: LSZH-094-2-YL, LSZH-094-2-WT, 2LSZH-094-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 to bezhalogenowe koszulki termokurczliwe 2:1 o niskiej emisji dymu na przewody o średnicy od 1,19 do 2,03 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Najmniejszy rozmiar koszulek PermaSleeve LSZH B-7641 oznacza cienkie żyły 24–20 AWG, czyli przewody o średnicy 1,19–2,03 mm. Poliolefina nie zawiera halogenów, mało dymi i sama gaśnie. Po ogrzaniu zmniejsza średnicę dwukrotnie. Matowa powierzchnia przyjmuje nadruk termotransferowy.\n\nPole nadruku ma 4,62 mm wysokości. Koszulki występują w trzech długościach: 50,8 mm (2500 lub 500 sztuk), 25,4 mm (5000 sztuk) i 12,7 mm (10 000 sztuk). Kolory to biały i żółty. Warianty z numerem zaczynającym się od 2 mają dwie zadrukowywane strony, pozostałe jedną.\n\nMateriał pracuje między −55 a 105 °C. Odporność dotyczy chemikaliów, wilgoci, korozji i UV, a także pogody. Norma BS 6853 przypisuje mu kategorię pojazdu 1A. Taśmy z serii R6000HF lub R6600, na przykład R6007, wykonują nadruk. Obsługują je drukarki i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-24-to-20-gauge-wire-marking-sleeves-cps-4510951',
  images: ['/images/products/brady/lszh-094-2-yl.png', '/images/products/brady/lszh-094-2-wt.png'],
  imageDescriptions: [
    'Rolka żółtych koszulek termokurczliwych PermaSleeve LSZH Brady z koszulkami ułożonymi na perforowanym nośniku',
    'Rolka białych koszulek termokurczliwych PermaSleeve LSZH Brady z koszulkami ułożonymi na perforowanym nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 4,62 mm, długość 50,8; 25,4 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,19 do 2,03 mm (24 AWG – 20 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: 'LSZH-094-2-YL: 141207' },
  ],
  variants: warianty('4,62', WARIANTY_094),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Długość i wysokość jednej koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWysokość wynosi 4,62 mm, a długość 12,7; 25,4 lub 50,8 mm.'),
  faq: [
    { question: 'Dla jakiej średnicy przewodu przeznaczono koszulki LSZH-094?', answer: 'Dla przewodów od 1,19 do 2,03 mm, czyli od 24 do 20 AWG. Koszulka obkurcza się 2:1.' },
    { question: 'Co oznacza przedrostek 2 w numerze, na przykład 2LSZH-094-2-YL?', answer: 'Taka koszulka ma nadruk po obu stronach. Numery bez przedrostka drukuje się po jednej stronie.' },
    { question: 'Które drukarki wydrukują koszulki B-7641?', answer: 'Rolki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie cienkich przewodów 24–20 AWG', 'Okablowanie, w którym obowiązują wymogi niskiej emisji dymu'],
}

// ---------------------------------------------------------------------------
// Ø 1,57–2,79 mm (20–16 AWG), wysokość 5,97 mm (cps-4510953)
// ---------------------------------------------------------------------------

const WARIANTY_125: Wiersz[] = [
  ['LSZH-125-2-WT-S', 500, '50,8', 'WT', 'J'],
  ['2LSZH-125-2-YL-S', 500, '50,8', 'YL', 'D'],
  ['LSZH-125-2-WT', 2500, '50,8', 'WT', 'J'],
  ['LSZH-125-2-YL', 2500, '50,8', 'YL', 'J'],
  ['141201', 5000, '19,05', 'YL', 'J'],
  ['LSZH-125-2-WT-2', 5000, '25,4', 'WT', 'J'],
  ['LSZH-125-2-YL-2', 5000, '25,4', 'YL', 'J'],
  ['LSZH-125-2-WT-4', 10000, '12,7', 'WT', 'J'],
  ['LSZH-125-2-YL-4', 10000, '12,7', 'YL', 'J'],
  ['2LSZH-125-2-WT', 2500, '50,8', 'WT', 'D'],
  ['2LSZH-125-2-YL', 2500, '50,8', 'YL', 'D'],
  ['2LSZH-125-2-WT-2', 5000, '25,4', 'WT', 'D'],
  ['2LSZH-125-2-YL-2', 5000, '25,4', 'YL', 'D'],
]

export const bradyLszh125: Product = {
  ...wspolneTHT,
  id: 'brady-lszh-125-2-wt-s',
  slug: 'brady-lszh-125-2-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 1,57–2,79 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 1,57–2,79 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 20–16 AWG do drukarek Brady i6100, i7100 i i7500. PN: LSZH-125-2-WT-S, LSZH-125-2-YL, 2LSZH-125-2-WT.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 125 to koszulki 2:1 bez halogenów na przewody o średnicy od 1,57 do 2,79 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'LSZH-125 to rozmiar koszulek PermaSleeve B-7641 dla przewodów 1,57–2,79 mm średnicy (20–16 AWG). Tworzywem jest termokurczliwa poliolefina bezhalogenowa i samogasnąca, która przy spalaniu wydziela mało dymu. Powierzchnia jest matowa. Obkurczona koszulka przylega do izolacji, a nadruk termotransferowy zostaje na miejscu.\n\nPole nadruku ma 5,97 mm wysokości, a podziałka na rolce wynosi 12,7 mm. Do wyboru są długości 50,8; 25,4; 19,05 i 12,7 mm. Najdłuższe koszulki pakuje się po 500 albo 2500 sztuk, krótsze po 5000 lub 10 000. Koszulki są białe lub żółte; zadrukowywana bywa jedna strona albo obie.\n\nDolna granica temperatury to −55 °C, górna to 105 °C. Odporność dotyczy korozji i wilgoci, a także chemikaliów, UV oraz pogody. Dla taboru szynowego znaczenie ma EN 45545-2 z poziomem HL3. Zaleca się taśmę R6007; w i7500 używa się i75-R6007. Wydruk wykonają i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-20-to-16-gauge-wire-marking-sleeves-cps-4510953',
  images: ['/images/products/brady/lszh-125-2-wt-s.png', '/images/products/brady/lszh-125-2-wt-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką białych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym końcem nośnika',
    'Fragment nośnika z trzema białymi koszulkami PermaSleeve LSZH ułożonymi równolegle',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 5,97 mm, długość 50,8; 25,4; 19,05 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 2,79 mm (20 AWG – 16 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: 'LSZH-125-2-WT-S: 141216' },
  ],
  variants: warianty('5,97', WARIANTY_125),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWysokość to 5,97 mm, a długość zmienia się od 12,7 do 50,8 mm.'),
  faq: [
    { question: 'Jak duże przewody obejmuje rozmiar LSZH-125?', answer: 'Od 1,57 do 2,79 mm średnicy, co odpowiada 20–16 AWG.' },
    { question: 'Czym różnią się wersje S od pozostałych?', answer: 'Wersje z końcówką -S mają 500 koszulek na rolce. W pozostałych długich wersjach jest ich 2500.' },
    { question: 'Jaką taśmę barwiącą wybrać do tych koszulek?', answer: 'Zalecana jest R6007, a w [Brady i7500](/produkt/brady-i7500) i75-R6007. Rolki pasują także do [Brady i6100](/produkt/brady-i6100) i [Brady i7100](/produkt/brady-i7100).' },
  ],
  applications: ['Znakowanie przewodów 20–16 AWG', 'Okablowanie pojazdów szynowych'],
}

// ---------------------------------------------------------------------------
// Ø 2,39–3,81 mm (16–10 AWG), wysokość 8,51 mm (cps-4510954)
// ---------------------------------------------------------------------------

const WARIANTY_187: Wiersz[] = [
  ['2LSZH-187-2-YL-S', 500, '50,8', 'YL', 'D'],
  ['LSZH-187-2-WT-S', 500, '50,8', 'WT', 'J'],
  ['LSZH-187-2-YL-S', 500, '50,8', 'YL', 'J'],
  ['LSZH-187-2-YL', 2500, '50,8', 'YL', 'J'],
  ['ZH-187-2-WT', 2500, '50,8', 'WT', 'J'],
  ['141223', 5000, '25,4', 'WT', 'J'],
  ['141225', 10000, '12,7', 'WT', 'J'],
  ['141228', 5000, '25,4', 'YL', 'J'],
  ['LSZH-187-2-YL-4', 10000, '12,7', 'YL', 'J'],
  ['140985', 2500, '50,8', 'YL', 'D'],
  ['2LSZH-187-2-YL-2', 5000, '25,4', 'YL', 'D'],
  ['2LSZH-187-2-YL-3', 7500, '17,02', 'YL', 'D'],
  ['2LSZH-187-2-YL-4', 10000, '12,7', 'YL', 'D'],
]

export const bradyLszh187: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-187-2-yl-s',
  slug: 'brady-2lszh-187-2-yl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 2,39–3,81 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 2,39–3,81 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 16–10 AWG do drukarek Brady i6100, i7100 i i7500. PN: 2LSZH-187-2-YL-S, LSZH-187-2-YL, 140985.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 187 to koszulki bezhalogenowe o niskiej emisji dymu na przewody od 2,39 do 3,81 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulka LSZH-187 pasuje do przewodów o średnicy 2,39–3,81 mm (16–10 AWG). Wykonano ją z poliolefiny, która w pożarze mało dymi, nie uwalnia halogenów i nie podtrzymuje palenia. Przed obkurczeniem średnica nominalna wynosi 4,75 mm.\n\nWysokość koszulki to 8,51 mm, a podziałka na rolce 15,88 mm. Dla długości 50,8 mm przewidziano rolki po 500 i 2500 sztuk. Długość 25,4 mm daje 5000 sztuk, 17,02 mm 7500, a 12,7 mm 10 000. Rozmiar 17,02 mm istnieje wyłącznie jako żółty z nadrukiem dwustronnym. Pozostałe długości są białe lub żółte.\n\nKoszulka zachowuje właściwości w przedziale −55…105 °C i przyjmuje wilgoć, korozję oraz promieniowanie UV; nie szkodzą jej chemikalia ani pogoda. Wymaganie 24 normy EN 45545-2 spełnia w kategorii HL3. Do wydruku pasuje taśma R6007 z serii R6000HF; w i7500 jest to i75-R6007. Rolki drukują i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-16-to-10-gauge-wire-marking-sleeves-cps-4510954',
  images: ['/images/products/brady/2lszh-187-2-yl-s.png', '/images/products/brady/2lszh-187-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką żółtych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym końcem nośnika',
    'Fragment nośnika z trzema żółtymi koszulkami PermaSleeve LSZH o szerszym polu nadruku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 8,51 mm, długość 50,8; 25,4; 17,02 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,39 do 3,81 mm (16 AWG – 10 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-187-2-YL-S: 140989' },
  ],
  variants: warianty('8,51', WARIANTY_187),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim i liczba sztuk na rolce.\n\nWysokość to 8,51 mm, a długość przyjmuje pięć wartości od 12,7 do 50,8 mm.'),
  faq: [
    { question: 'Na jakie przewody pasuje rozmiar LSZH-187?', answer: 'Na przewody o średnicy od 2,39 do 3,81 mm (16–10 AWG).' },
    { question: 'Czy istnieją koszulki 17,02 mm z nadrukiem jednostronnym?', answer: 'Nie. Długość 17,02 mm występuje tylko w wersji żółtej z nadrukiem po obu stronach, 7500 sztuk na rolce.' },
    { question: 'Z jakimi drukarkami współpracuje ta rodzina?', answer: 'Z [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie przewodów 16–10 AWG', 'Znakowanie okablowania w taborze kolejowym'],
}

// ---------------------------------------------------------------------------
// Ø 3,18–5,46 mm (12–8 AWG), wysokość 11,15 mm (cps-4510955)
// ---------------------------------------------------------------------------

const WARIANTY_250: Wiersz[] = [
  ['2LSZH-250-2-YL-S', 500, '50,8', 'YL', 'D'],
  ['LSZH-250-2-YL-S', 500, '50,8', 'YL', 'J'],
  ['2LSZH-250-2-WT-S', 500, '50,8', 'WT', 'D'],
  ['LSZH-250-2-WT', 2500, '50,8', 'WT', 'J'],
  ['LSZH-250-2-YL', 2500, '50,8', 'YL', 'J'],
  ['LSZH-250-2-WT-2', 5000, '25,4', 'WT', 'J'],
  ['LSZH-250-2-WT-4', 10000, '12,7', 'WT', 'J'],
  ['LSZH-250-2-YL-2', 5000, '25,4', 'YL', 'J'],
  ['2LSZH-250-2-WT', 2500, '50,8', 'WT', 'D'],
  ['2LSZH-250-2-YL', 2500, '50,8', 'YL', 'D'],
  ['2LSZH-250-2-YL-2', 5000, '25,4', 'YL', 'D'],
]

export const bradyLszh250: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-250-2-yl-s',
  slug: 'brady-2lszh-250-2-yl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 3,18–5,46 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 3,18–5,46 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 12–8 AWG do drukarek Brady i6100, i7100 i i7500. PN: 2LSZH-250-2-YL-S, LSZH-250-2-WT, 2LSZH-250-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 250 to koszulki termokurczliwe bez halogenów na przewody od 3,18 do 5,46 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar LSZH-250 obejmuje przewody 3,18–5,46 mm (12–8 AWG). Koszulka ma nominalnie 6,35 mm średnicy i kurczy się do połowy tej wartości. Poliolefina nie zawiera halogenów, ogranicza emisję dymu i gaśnie samoczynnie. Matowa warstwa przyjmuje nadruk termotransferowy.\n\nWysokość wynosi 11,15 mm. Koszulki 50,8 mm pakuje się po 500 lub po 2500 sztuk, koszulki 25,4 mm po 5000. Długość 12,7 mm występuje tylko w bieli i daje 10 000 koszulek na rolce. Numery z przedrostkiem 2 służą do nadruku na obu stronach, pozostałe na jednej. Kolory są dwa: biały i żółty.\n\nKoszulka znosi 105 °C i spadek do −55 °C. Odporność dotyczy też chemikaliów, korozji, wilgoci, UV i pogody. Spełnia BS 6853, kategoria 1A, a także EN 45545-2, kategoria HL3. Zalecana taśma barwiąca to R6007. Drukarki: i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-12-to-8-gauge-wire-marking-sleeves-cps-4510955',
  images: ['/images/products/brady/lszh-250-2-wt.png', '/images/products/brady/2lszh-250-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką białych koszulek termokurczliwych PermaSleeve LSZH na czarnym uchwycie',
    'Fragment nośnika z trzema żółtymi koszulkami PermaSleeve LSZH o wysokości 11,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 11,15 mm, długość 50,8; 25,4 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 3,18 do 5,46 mm (12 AWG – 8 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-250-2-YL-S: 140999' },
  ],
  variants: warianty('11,15', WARIANTY_250),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWysokość to 11,15 mm; długość wynosi 12,7; 25,4 lub 50,8 mm.'),
  faq: [
    { question: 'Jaki zakres średnic obejmuje rozmiar LSZH-250?', answer: 'Przewody od 3,18 do 5,46 mm, czyli od 12 do 8 AWG.' },
    { question: 'Czy koszulka 12,7 mm występuje w kolorze żółtym?', answer: 'Nie. W tym rozmiarze długość 12,7 mm jest dostępna tylko w bieli, 10 000 sztuk na rolce.' },
    { question: 'Gdzie wydrukować koszulki z tej rodziny?', answer: 'W drukarkach [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów 12–8 AWG', 'Instalacje o podwyższonych wymaganiach pożarowych'],
}

// ---------------------------------------------------------------------------
// Ø 4,78–8,13 mm (8–4 AWG), wysokość 16,38 mm (cps-4510956)
// ---------------------------------------------------------------------------

const WARIANTY_375: Wiersz[] = [
  ['2LSZH-375-2-YL-S', 250, '50,8', 'YL', 'D'],
  ['LSZH-375-2-YL-S', 250, '50,8', 'YL', 'J'],
  ['LSZH-375-2-WT-S', 250, '50,8', 'WT', 'J'],
  ['LSZH-375-2-WT', 1000, '50,8', 'WT', 'J'],
  ['LSZH-375-2-YL', 1000, '50,8', 'YL', 'J'],
  ['LSZH-375-2-WT-2', 2000, '25,4', 'WT', 'J'],
  ['LSZH-375-2-YL-2', 2000, '25,4', 'YL', 'J'],
  ['LSZH-375-2-YL-4', 4000, '12,7', 'YL', 'J'],
  ['2LSZH-375-2-WT', 1000, '50,8', 'WT', 'D'],
  ['2LSZH-375-2-YL', 1000, '50,8', 'YL', 'D'],
  ['2LSZH-375-2-YL-2', 2000, '25,4', 'YL', 'D'],
  ['2ZH-375-2-WT-3', 3000, '17,02', 'WT', 'D'],
]

export const bradyLszh375: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-375-2-yl-s',
  slug: 'brady-2lszh-375-2-yl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 4,78–8,13 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 4,78–8,13 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 8–4 AWG do drukarek Brady i6100, i7100 i i7500. PN: 2LSZH-375-2-YL-S, LSZH-375-2-WT, 2LSZH-375-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 375 to koszulki bezhalogenowe o niskiej emisji dymu na przewody od 4,78 do 8,13 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki LSZH-375 oznaczają przewody o średnicy 4,78–8,13 mm (8–4 AWG). Do tego zakresu służy koszulka o nominalnej średnicy 9,53 mm. Poliolefina zawiera zero halogenów, wytwarza niewiele dymu i gaśnie samoczynnie. Skurcz 2:1 zapewnia szczelne przyleganie do izolacji.\n\nWysokość koszulki wynosi 16,38 mm, a podziałka na rolce 25,4 mm. Rolka z koszulkami 50,8 mm zawiera 250 lub 1000 sztuk. Koszulek 25,4 mm jest 2000, koszulek 17,02 mm 3000 (biała, dwustronna), a koszulek 12,7 mm 4000 (żółta). W ofercie są dwa kolory: biały i żółty. Część numerów obsługuje nadruk po obu stronach.\n\nZakres pracy obejmuje temperatury od −55 do 105 °C. Koszulki odpierają chemikalia, wilgoć, korozję i promieniowanie UV. Zgodność z BS 6853 (1A) dotyczy pojazdów szynowych. Przy nadruku używa się taśmy R6007, a w i7500 i75-R6007. Nadrukują je i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-8-to-4-gauge-wire-marking-sleeves-cps-4510956',
  images: ['/images/products/brady/lszh-375-2-wt.png', '/images/products/brady/2lszh-375-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką białych koszulek termokurczliwych PermaSleeve LSZH na czarnym uchwycie',
    'Fragment nośnika z dwiema żółtymi koszulkami PermaSleeve LSZH o wysokości 16,38 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 16,38 mm, długość 50,8; 25,4; 17,02 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 4000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 4,78 do 8,13 mm (8 AWG – 4 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-375-2-YL-S: 141117' },
  ],
  variants: warianty('16,38', WARIANTY_375),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim i liczba sztuk na rolce.\n\nWysokość to 16,38 mm, a długość zawiera się między 12,7 a 50,8 mm.'),
  faq: [
    { question: 'Jaką średnicę przewodu obejmuje koszulka LSZH-375?', answer: 'Od 4,78 do 8,13 mm, co odpowiada 8–4 AWG.' },
    { question: 'Ile koszulek mieści rolka?', answer: 'Od 250 do 4000, zależnie od długości. Koszulek 50,8 mm jest 250 lub 1000, a 12,7 mm 4000.' },
    { question: 'Jakie drukarki obsługują tę rodzinę?', answer: '[Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) oraz [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie przewodów 8–4 AWG', 'Znakowanie okablowania w pojazdach szynowych'],
}

// ---------------------------------------------------------------------------
// Ø 6,35–11,43 mm (6–1 AWG), wysokość 21,62 mm (cps-4510957)
// ---------------------------------------------------------------------------

const WARIANTY_500: Wiersz[] = [
  ['2LSZH-500-2-YL-S', 250, '50,8', 'YL', 'D'],
  ['LSZH-500-2-WT-S', 250, '50,8', 'WT', 'J'],
  ['LSZH-500-2-WT', 500, '50,8', 'WT', 'J'],
  ['LSZH-500-2-YL', 500, '50,8', 'YL', 'J'],
  ['LSZH-500-2-WT-2', 1000, '25,4', 'WT', 'J'],
  ['LSZH-500-2-YL-2', 1000, '25,4', 'YL', 'J'],
  ['2LSZH-500-2-WT', 500, '50,8', 'WT', 'D'],
  ['2LSZH-500-2-YL', 500, '50,8', 'YL', 'D'],
  ['2LSZH-500-2-YL-2', 1000, '25,4', 'YL', 'D'],
]

export const bradyLszh500: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-500-2-yl-s',
  slug: 'brady-2lszh-500-2-yl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 6,35–11,43 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 6,35–11,43 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 6–1 AWG do drukarek Brady i6100, i7100 i i7500. PN: 2LSZH-500-2-YL-S, LSZH-500-2-WT, 2LSZH-500-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 500 to koszulki bezhalogenowe 2:1 na przewody od 6,35 do 11,43 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Dla przewodów grubszych, 6,35–11,43 mm (6–1 AWG), przeznaczono rozmiar LSZH-500. Nominalna średnica koszulki wynosi 12,7 mm. Materiał to matowa poliolefina o zerowej zawartości halogenów, niskiej emisji dymu i właściwościach samogasnących. Po obkurczeniu 2:1 koszulka mocno trzyma się izolacji.\n\nPole nadruku mierzy 21,62 mm wysokości, a odstęp roboczy na rolce to 31,75 mm. Wersje 50,8 mm przypadają po 250 lub 500 sztuk na rolkę, wersje 25,4 mm po 1000. Biała i żółta koszulka występują w obu długościach. Cyfra 2 na początku numeru oznacza nadruk na obu stronach, a bez niej zadrukowuje się jedną.\n\nKoszulka nie reaguje na chemikalia, wilgoć, korozję, UV ani pogodę, a temperatura robocza mieści się od −55 do 105 °C. Przewidziano zgodność z EN 45545-2 (HL3) oraz BS 6853 (1A). Jako taśmę barwiącą zaleca się R6007 (do i7500 i75-R6007). Drukują i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-6-to-1-gauge-wire-marking-sleeves-cps-4510957',
  images: ['/images/products/brady/2lszh-500-2-yl-s.png', '/images/products/brady/2lszh-500-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką żółtych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym nośnikiem',
    'Fragment nośnika z dwiema dużymi żółtymi koszulkami PermaSleeve LSZH o wysokości 21,62 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 21,62 mm, długość 50,8 lub 25,4 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 6,35 do 11,43 mm (6 AWG – 1 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-500-2-YL-S: 141177' },
  ],
  variants: warianty('21,62', WARIANTY_500),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWysokość to 21,62 mm, a długość 25,4 albo 50,8 mm.'),
  faq: [
    { question: 'Dla jakich przewodów zaprojektowano rozmiar LSZH-500?', answer: 'Dla przewodów od 6,35 do 11,43 mm średnicy, czyli od 6 do 1 AWG.' },
    { question: 'Ile koszulek jest na rolce?', answer: 'Od 250 do 1000 sztuk. Dłuższe koszulki 50,8 mm pakuje się po 250 lub 500.' },
    { question: 'Z jakimi drukarkami Brady pasują rolki?', answer: 'Z [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie przewodów 6–1 AWG', 'Znakowanie grubszych kabli zasilających'],
}

// ---------------------------------------------------------------------------
// Ø 9,53–17,78 mm (2–0000 AWG), wysokość 31,75 mm (cps-4510958)
// ---------------------------------------------------------------------------

const WARIANTY_750: Wiersz[] = [
  ['2LSZH-750-2-YL-S', 100, '50,8', 'YL', 'D'],
  ['LSZH-750-2-WT', 250, '50,8', 'WT', 'J'],
  ['LSZH-750-2-YL', 250, '50,8', 'YL', 'J'],
  ['LSZH-750-2-WT-2', 500, '25,4', 'WT', 'J'],
  ['LSZH-750-2-YL-2', 500, '25,4', 'YL', 'J'],
  ['ZH-750-2-YL-4', 1000, '12,7', 'YL', 'J'],
  ['2LSZH-750-2-WT', 250, '50,8', 'WT', 'D'],
  ['2LSZH-750-2-YL', 250, '50,8', 'YL', 'D'],
  ['2LSZH-750-2-YL-2', 500, '25,4', 'YL', 'D'],
]

export const bradyLszh750: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-750-2-yl-s',
  slug: 'brady-2lszh-750-2-yl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 9,53–17,78 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 9,53–17,78 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na przewody 2–0000 AWG do drukarek Brady i6100, i7100 i i7500. PN: 2LSZH-750-2-YL-S, LSZH-750-2-WT, 2LSZH-750-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 750 to koszulki bezhalogenowe o niskiej emisji dymu na przewody od 9,53 do 17,78 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar LSZH-750 oznacza kable o średnicy od 9,53 do 17,78 mm, w skali amerykańskiej od 2 AWG do 0000 AWG. Nominalna średnica koszulki to 19,05 mm. Poliolefina jest matowa, samogasnąca i wolna od halogenów, a w ogniu daje niewiele dymu. Obkurczanie 2:1 zamyka koszulkę wokół izolacji.\n\nKoszulka ma 31,75 mm wysokości, a jej podziałka na rolce to 41,28 mm. Wersja 50,8 mm występuje w rolkach po 100 (tylko żółta, dwustronna) i po 250 sztuk. Rolki 25,4 mm zawierają 500 sztuk, a rolka 12,7 mm 1000 sztuk, wyłącznie żółtych. Wybór obejmuje biel i żółć. Przedrostek 2 w numerze oznacza nadruk dwustronny.\n\nPraca jest możliwa w zakresie temperatur −55…105 °C. Chemikalia i korozja nie wpływają na ten materiał, podobnie jak wilgoć, UV i pogoda. Poświadczają to BS 6853 dla kategorii 1A i EN 45545-2 dla HL3. Taśma barwiąca: R6007, w i7500 i75-R6007. Rolki obsługują i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-2-to-4-0-gauge-wire-marking-sleeves-cps-4510958',
  images: ['/images/products/brady/lszh-750-2-yl.png', '/images/products/brady/2lszh-750-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką żółtych koszulek termokurczliwych PermaSleeve LSZH na czarnym uchwycie',
    'Fragment nośnika z dwiema bardzo dużymi żółtymi koszulkami PermaSleeve LSZH',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 31,75 mm, długość 50,8; 25,4 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 100 do 1000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 9,53 do 17,78 mm (2 AWG – 0000 AWG)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-750-2-YL-S: 141187' },
  ],
  variants: warianty('31,75', WARIANTY_750),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim i liczba sztuk na rolce.\n\nWysokość to 31,75 mm, a długość 12,7; 25,4 lub 50,8 mm.'),
  faq: [
    { question: 'Na jakie przewody pasuje rozmiar LSZH-750?', answer: 'Na przewody o średnicy od 9,53 do 17,78 mm (2 AWG – 0000 AWG).' },
    { question: 'Którą koszulkę pakuje się po 100 sztuk?', answer: 'Żółtą koszulkę o długości 50,8 mm z nadrukiem dwustronnym, o numerze 2LSZH-750-2-YL-S.' },
    { question: 'Jakie drukarki przyjmują te rolki?', answer: '[Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie kabli o średnicy do 17,78 mm', 'Znakowanie przewodów zasilających w taborze'],
}

// ---------------------------------------------------------------------------
// Ø 25,40–49,53 mm, rozmiar 2000 (cps-4510959)
// ---------------------------------------------------------------------------

export const bradyLszh2000: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-2000-2-yl',
  slug: 'brady-2lszh-2000-2-yl',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 25,40–49,53 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 25,4–49,5 mm — i6100, i7100, i7500',
  seoDescription: 'Duże koszulki Brady PermaSleeve LSZH B-7641 na kable Ø 25,4–49,5 mm do drukarek Brady i6100, i7100, i7500. PN: 2LSZH-2000-2-YL, LSZH-2000-2-WT, LSZH-2000-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 2000 to duże koszulki bezhalogenowe na kable od 25,40 do 49,53 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 2000 to największa koszulka PermaSleeve LSZH B-7641 o średnicy nominalnej 50,8 mm. Zakłada się ją na kable i szyny o średnicy od 25,40 do 49,53 mm. Tworzywo gaśnie samoczynnie, nie zawiera halogenów i wytwarza mało dymu. Skurcz 2:1 dopasowuje koszulkę do grubego kabla.\n\nKoszulka mierzy 50,8 mm długości. Na rolce znajduje się 100 sztuk, a podziałka wynosi 101,6 mm. Dostępne są trzy numery: biały z nadrukiem jednostronnym, żółty z nadrukiem jednostronnym i żółty drukowany po obu stronach. Powierzchnia jest matowa.\n\nMateriał działa od −55 do 105 °C. Nie psują go chemikalia, korozja, wilgoć, UV ani czynniki pogodowe. Dla wnętrz pojazdów szynowych istotne są BS 6853 i EN 45545-2. Zalecane są taśmy R6007, a w drukarce i7500 i75-R6007. Wydruk zapewniają i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-25-to-48-mm-diameter-wire-marking-sleeves-cps-4510959',
  images: ['/images/products/brady/lszh-2000-2-yl-s.png', '/images/products/brady/2lszh-1500-2-yl-s.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką dużych żółtych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym nośnikiem',
    'Pudełko Brady z rolką żółtych koszulek PermaSleeve LSZH ułożonych na nośniku w jednym rzędzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, średnica nominalna 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Zakres średnicy przewodu', value: 'od 25,40 do 49,53 mm' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-2000-2-YL: 116980' },
  ],
  variants: [
    { partNumber: '2LSZH-2000-2-YL', name: 'Brady 2LSZH-2000-2-YL — żółta koszulka PermaSleeve LSZH, nadruk dwustronny', attributes: { Rozmiar: 'Ø 50,8 × 50,8 mm, 100 szt.', Kolor: 'Żółty', Nadruk: 'Dwustronny' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-2000-2-WT', name: 'Brady LSZH-2000-2-WT — biała koszulka PermaSleeve LSZH, nadruk jednostronny', attributes: { Rozmiar: 'Ø 50,8 × 50,8 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'Jednostronny' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-2000-2-YL', name: 'Brady LSZH-2000-2-YL — żółta koszulka PermaSleeve LSZH, nadruk jednostronny', attributes: { Rozmiar: 'Ø 50,8 × 50,8 mm, 100 szt.', Kolor: 'Żółty', Nadruk: 'Jednostronny' }, availability: 'unavailable' as const },
  ],
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Nominalna średnica i długość koszulki oraz liczba sztuk na rolce.\n\nWszystkie trzy numery mają średnicę 50,8 mm, długość 50,8 mm i 100 sztuk na rolce.'),
  faq: [
    { question: 'Jakie kable obejmuje rozmiar 2000?', answer: 'Kable i przewody o średnicy od 25,40 do 49,53 mm.' },
    { question: 'Ile koszulek ma rolka i jaką długość mają koszulki?', answer: 'Rolka zawiera 100 koszulek, a każda ma 50,8 mm długości.' },
    { question: 'Czy takie koszulki wydrukuje drukarka i6100?', answer: 'Tak. Rolki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie kabli o dużej średnicy', 'Znakowanie szyn i grubych wiązek w taborze'],
}

// ---------------------------------------------------------------------------
// Ø 12,70–24,13 mm (00 AWG – 500 MCM), wysokość 42,16 mm (cps-4510960)
// ---------------------------------------------------------------------------

const WARIANTY_1000: Wiersz[] = [
  ['LSZH-1000-2-WT', 250, '50,8', 'WT', 'J'],
  ['LSZH-1000-2-YL', 250, '50,8', 'YL', 'J'],
  ['LSZH-1000-2-WT-2', 500, '25,4', 'WT', 'J'],
  ['LSZH-1000-2-YL-2', 500, '25,4', 'YL', 'J'],
  ['ZH-1000-2-WT-4', 1000, '12,7', 'WT', 'J'],
  ['2LSZH-1000-2-WT', 250, '50,8', 'WT', 'D'],
  ['2LSZH-1000-2-YL', 250, '50,8', 'YL', 'D'],
  ['2LSZH-1000-2-WT-2', 500, '25,4', 'WT', 'D'],
  ['2ZH-1000-2-YL-2', 500, '25,4', 'YL', 'D'],
]

export const bradyLszh1000: Product = {
  ...wspolneTHT,
  id: 'brady-lszh-1000-2-wt',
  slug: 'brady-lszh-1000-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 12,70–24,13 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 12,7–24,1 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na kable Ø 12,7–24,1 mm do drukarek Brady i6100, i7100 i i7500. PN: LSZH-1000-2-WT, LSZH-1000-2-YL, 2LSZH-1000-2-WT.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 1000 to koszulki bezhalogenowe o niskiej emisji dymu na kable od 12,70 do 24,13 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulka LSZH-1000 oznacza kable o średnicy 12,70–24,13 mm (00 AWG – 500 MCM). Średnica nominalna wynosi 25,40 mm. Poliolefina nie zawiera halogenów, w pożarze wytwarza mało dymu i sama gaśnie. Obkurczanie 2:1 daje trwałe oznaczenie na grubym przewodzie.\n\nWysokość koszulki to 42,16 mm, a podziałka 50,8 mm. Koszulek 50,8 mm jest 250 na rolce, koszulek 25,4 mm 500, a 12,7 mm 1000 (tylko biała, jednostronna). Obie barwy, biała i żółta, występują w pozostałych długościach. Wersje z cyfrą 2 na początku numeru drukuje się po obu stronach.\n\nTemperatura robocza mieści się między −55 a 105 °C. Do zalet należy odporność na wilgoć, UV, pogodę, korozję i chemikalia. W zestawie norm znajdują się BS 6853 (1A) i EN 45545-2 (HL3). Do nadruku zaleca się taśmę R6007; i7500 pracuje z i75-R6007. Zgodne są i6100, i7100 oraz i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-2-0-gauge-to-24-mm-diameter-wire-marking-sleeves-cps-4510960',
  images: ['/images/products/brady/2lszh-1000-2-yl.png', '/images/products/brady/2lszh-1000-2-wt-s-2.png'],
  imageDescriptions: [
    'Rolka żółtych koszulek termokurczliwych PermaSleeve LSZH o wysokości 42,16 mm na perforowanym nośniku',
    'Fragment nośnika z dwiema dużymi białymi koszulkami PermaSleeve LSZH',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'wysokość 42,16 mm, długość 50,8; 25,4 lub 12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 12,70 do 24,13 mm (00 AWG – 500 MCM)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: 'LSZH-1000-2-WT: 141272' },
  ],
  variants: warianty('42,16', WARIANTY_1000),
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Wymiary koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWysokość to 42,16 mm, a długość 12,7; 25,4 lub 50,8 mm.'),
  faq: [
    { question: 'Jaką średnicę kabla obejmuje rozmiar LSZH-1000?', answer: 'Od 12,70 do 24,13 mm, czyli od 00 AWG do 500 MCM.' },
    { question: 'Czy koszulka 12,7 mm jest dostępna w żółtym kolorze?', answer: 'Nie. Ta długość występuje tylko jako biała z nadrukiem jednostronnym, 1000 sztuk na rolce.' },
    { question: 'Które drukarki obsługują tę rodzinę?', answer: '[Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie kabli 00 AWG – 500 MCM', 'Znakowanie grubych przewodów w pojazdach szynowych'],
}

// ---------------------------------------------------------------------------
// Ø 19,05–36,83 mm (600–2000 MCM), wysokość 61,8 mm (cps-4510961)
// ---------------------------------------------------------------------------

export const bradyLszh1500: Product = {
  ...wspolneTHT,
  id: 'brady-2lszh-1500-2-yl',
  slug: 'brady-2lszh-1500-2-yl',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 na przewody Ø 19,05–36,83 mm na rolce 76 mm',
  seoTitle: 'Brady LSZH B-7641 Ø 19–36,8 mm — i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 na kable Ø 19,05–36,83 mm do drukarek Brady i6100, i7100, i7500. PN: 2LSZH-1500-2-YL, LSZH-1500-2-WT, LSZH-1500-2-YL.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w rozmiarze 1500 to koszulki bezhalogenowe na kable od 19,05 do 36,83 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 1500 wybiera się dla grubych kabli o średnicy 19,05–36,83 mm (600–2000 MCM). Koszulka ma nominalnie 38,10 mm średnicy. Poliolefina jest wolna od halogenów, wytwarza niewiele dymu i sama gaśnie. Po ogrzaniu średnica zmniejsza się o połowę, a koszulka obejmuje izolację bez luzu.\n\nWymiary koszulki to 50,8 mm długości i 61,8 mm wysokości. Podziałka na rolce wynosi 76,2 mm. Każda rolka zawiera 250 sztuk. Rodzina ma cztery numery: dwa białe i dwa żółte, każdy kolor z wersją jednostronną oraz dwustronną.\n\nMateriał nadaje się do pracy od −55 do 105 °C. Opiera się chemikaliom, korozji, wilgoci, UV i pogodzie. Obowiązują go BS 6853 oraz EN 45545-2, kategorie 1A i HL3. Taśmą zalecaną jest R6007, a dla i7500 i75-R6007. Rolki przyjmują drukarki i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-low-smoke-zero-halogen-19-to-36-mm-diameter-wire-marking-sleeves-cps-4510961',
  images: ['/images/products/brady/2lszh-1500-2-wt-s.png', '/images/products/brady/2lszh-1500-2-yl-s-2.png'],
  imageDescriptions: [
    'Pudełko Brady z rolką białych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym nośnikiem',
    'Fragment nośnika z dwiema żółtymi koszulkami PermaSleeve LSZH o dużej wysokości pola nadruku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych LSZH, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej lub po obu stronach, zależnie od numeru' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '50,8 × 61,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '250' },
    { name: 'Zakres średnicy przewodu', value: 'od 19,05 do 36,83 mm (600 MCM – 2000 MCM)' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Numer artykułu Brady', value: '2LSZH-1500-2-YL: 141200' },
  ],
  variants: [
    { partNumber: '2LSZH-1500-2-YL', name: 'Brady 2LSZH-1500-2-YL — żółta koszulka PermaSleeve LSZH, nadruk dwustronny', attributes: { Rozmiar: '50,8 × 61,8 mm, 250 szt.', Kolor: 'Żółty', Nadruk: 'Dwustronny' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-1500-2-WT', name: 'Brady LSZH-1500-2-WT — biała koszulka PermaSleeve LSZH, nadruk jednostronny', attributes: { Rozmiar: '50,8 × 61,8 mm, 250 szt.', Kolor: 'Biały', Nadruk: 'Jednostronny' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-1500-2-YL', name: 'Brady LSZH-1500-2-YL — żółta koszulka PermaSleeve LSZH, nadruk jednostronny', attributes: { Rozmiar: '50,8 × 61,8 mm, 250 szt.', Kolor: 'Żółty', Nadruk: 'Jednostronny' }, availability: 'unavailable' as const },
    { partNumber: '2LSZH-1500-2-WT', name: 'Brady 2LSZH-1500-2-WT — biała koszulka PermaSleeve LSZH, nadruk dwustronny', attributes: { Rozmiar: '50,8 × 61,8 mm, 250 szt.', Kolor: 'Biały', Nadruk: 'Dwustronny' }, availability: 'unavailable' as const },
  ],
  variantAttributeTooltips: TOOLTIPY_KOSZULEK('Długość i wysokość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nWszystkie cztery numery mają 50,8 × 61,8 mm i 250 sztuk na rolce.'),
  faq: [
    { question: 'Dla jakich kabli przeznaczono rozmiar LSZH-1500?', answer: 'Dla kabli o średnicy od 19,05 do 36,83 mm, w przeliczeniu od 600 do 2000 MCM.' },
    { question: 'Ile sztuk ma rolka z koszulkami LSZH-1500?', answer: 'Każda rolka ma 250 koszulek o wymiarach 50,8 × 61,8 mm.' },
    { question: 'Jakie drukarki obsługują rolki o tak dużej wysokości?', answer: 'Zgodne są [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie kabli wielożyłowych o dużej średnicy', 'Znakowanie szyn i kabli zasilających w taborze'],
}

// ---------------------------------------------------------------------------
// Ciągła koszulka PermaSleeve LSZH, rolka 110 m (cps-5287477); drukarki i7100 i i7500
// ---------------------------------------------------------------------------

export const bradyLszhCiagla: Product = {
  ...wspolneTHT,
  id: 'brady-lszh-c-125-wt-k',
  slug: 'brady-lszh-c-125-wt-k',
  name: 'Ciągła koszulka termokurczliwa Brady PermaSleeve LSZH B-7641 na rolce 110 m',
  seoTitle: 'Brady ciągła koszulka PermaSleeve LSZH B-7641 — i7100, i7500',
  seoDescription: 'Ciągła koszulka Brady PermaSleeve LSZH B-7641, rolka 110 m, do drukarek Brady i7100 i i7500. PN: LSZH-C-125-WT-K, LSZH-C-187-WT-K, LSZH-C-250-WT-K.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 w wersji ciągłej to biała bezhalogenowa koszulka na rolce 110 m, w trzech średnicach. Do drukarek Brady i7100 i i7500.',
  description: 'Ciągła koszulka PermaSleeve LSZH B-7641 jest nawinięta na rolkę o długości 110 m i nie jest cięta na sztuki. To biała poliolefina kurcząca się 2:1, bez halogenów, o niskiej emisji dymu i samogasnąca. Produkt opracowano z myślą o Komax Zeta M1650 i szybkich liniach automatycznych.\n\nRolki występują w trzech rozmiarach: Ø 3,18 mm przy wysokości 6,00 mm, Ø 4,75 mm przy 8,50 mm oraz Ø 6,35 mm przy 11,15 mm. Dla rozmiaru 3,18 mm podano zakres średnicy przewodu 1,57–2,79 mm (20–16 AWG). Nadruk wykonuje się po jednej stronie.\n\nRolkę trzeba zamontować na zewnątrz drukarki. Nie współpracuje z Labelsense. W i7500 drukuje się ją w trybie ręcznym. Temperatura pracy mieści się w granicach −55…105 °C. Odporność obejmuje UV, wilgoć, korozję oraz chemikalia i pogodę. Zalecana taśma barwiąca to R6006, a w i7500 i75-R6006. Zgodne są drukarki i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/continuous-low-smoke-zero-halogen-permasleeve-cps-5287477',
  images: ['/images/products/brady/lszh-c-125-wt-k.png'],
  imageDescriptions: ['Szpula z kartonu z nawiniętą białą ciągłą koszulką termokurczliwą PermaSleeve LSZH Brady'],
  specifications: [
    { name: 'Typ', value: 'Ciągła koszulka termokurczliwa LSZH, rolka 110 m, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'termotransfer, po jednej stronie' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały' },
    { name: 'Rozmiary koszulki', value: 'Ø 3,18 × 6,00 mm; Ø 4,75 × 8,50 mm; Ø 6,35 × 11,15 mm' },
    { name: 'Długość rolki', value: '110 m' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 2,79 mm (20 AWG – 16 AWG) dla rozmiaru Ø 3,18 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'i75-R6006, R6006 (serie R4300, R6000HF, R6600)' },
    { name: 'Gilza', value: '41,28 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'Rolkę montuje się poza drukarką; brak zgodności z Labelsense. W i7500 koszulkę drukuje się w trybie ręcznym.' },
    { name: 'Numer artykułu Brady', value: 'LSZH-C-125-WT-K: 178771' },
  ],
  variants: [
    { partNumber: 'LSZH-C-125-WT-K', name: 'Brady LSZH-C-125-WT-K — biała ciągła koszulka PermaSleeve LSZH Ø 3,18 mm, 110 m', attributes: { Rozmiar: 'Ø 3,18 × 6,00 mm, 110 m' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-C-187-WT-K', name: 'Brady LSZH-C-187-WT-K — biała ciągła koszulka PermaSleeve LSZH Ø 4,75 mm, 110 m', attributes: { Rozmiar: 'Ø 4,75 × 8,50 mm, 110 m' }, availability: 'unavailable' as const },
    { partNumber: 'LSZH-C-250-WT-K', name: 'Brady LSZH-C-250-WT-K — biała ciągła koszulka PermaSleeve LSZH Ø 6,35 mm, 110 m', attributes: { Rozmiar: 'Ø 6,35 × 11,15 mm, 110 m' }, availability: 'unavailable' as const },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Średnica i wysokość koszulki oraz długość rolki.\n\nKażda rolka ma 110 m ciągłej koszulki, a średnica wynosi 3,18; 4,75 lub 6,35 mm.',
  },
  faq: [
    { question: 'Czym ciągła koszulka LSZH różni się od koszulek na nośniku?', answer: 'Rolka zawiera 110 m nieciętej koszulki zamiast pojedynczych sztuk na nośniku. Opracowano ją z myślą o Komax Zeta M1650 i szybkich liniach automatycznych.' },
    { question: 'Czy rolkę 110 m można zamontować w drukarce?', answer: 'Nie. Rolkę trzeba zamontować poza drukarką, a w [Brady i7500](/produkt/brady-i7500) drukuje się ją w trybie ręcznym. Koszulka nie współpracuje z Labelsense.' },
    { question: 'Jaka taśma barwiąca jest zalecana?', answer: 'R6006, a w drukarce i7500 i75-R6006. Zgodne są także serie R4300, R6000HF i R6600. Drukują [Brady i7100](/produkt/brady-i7100) oraz [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie przewodów 20–16 AWG na liniach automatycznych', 'Długie nadruki na koszulce ciągłej'],
  relatedProducts: ['brady-i7100', 'brady-i7500'],
}

export const bradyTHTLszh: Product[] = [
  bradyLszh094, bradyLszh125, bradyLszh187, bradyLszh250, bradyLszh375,
  bradyLszh500, bradyLszh750, bradyLszh2000, bradyLszh1000, bradyLszh1500, bradyLszhCiagla,
]

export const bradyTHTLszhSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-lszh-094-2-yl': 'przewody',
  'brady-lszh-125-2-wt-s': 'przewody',
  'brady-2lszh-187-2-yl-s': 'przewody',
  'brady-2lszh-250-2-yl-s': 'przewody',
  'brady-2lszh-375-2-yl-s': 'przewody',
  'brady-2lszh-500-2-yl-s': 'przewody',
  'brady-2lszh-750-2-yl-s': 'przewody',
  'brady-2lszh-2000-2-yl': 'przewody',
  'brady-lszh-1000-2-wt': 'przewody',
  'brady-2lszh-1500-2-yl': 'przewody',
  'brady-lszh-c-125-wt-k': 'przewody',
}
