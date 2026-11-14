import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Koszulki termokurczliwe PermaSleeve Heatex z poliolefiny B-7642 na rolkach z gilzą 76 mm oraz ciągła koszulka 2:1
// do przemysłowych drukarek Brady i6100, i7100 i i7500. Jedna karta na rodzinę rozmiaru, PN jako warianty. 14.11.2026.

const DRUKARKI = 'Brady i6100, i7100, i7500'
const TASMA = 'R6400 (i75-R6400, R6406)'
const ODPORNOSC = 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; samogasnący'

const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty', BK: 'Czarny', BL: 'Niebieski', RD: 'Czerwony' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', YL: 'żółta', BK: 'czarna', BL: 'niebieska', RD: 'czerwona' }

// [PN, długość koszulki mm, sztuk na rolce, kolor, nadruk: J = jednostronny, D = dwustronny]
type Wiersz = [string, string, number, string, 'J' | 'D']

const ile = (n: number) => (n >= 10000 ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : String(n))
const liczba = (t: string) => Number(t.replace(',', '.'))
const zakres = (a: number, b: number, jednostka = '') => (a === b ? `${ile(a)}${jednostka}` : `od ${ile(a)} do ${ile(b)}${jednostka}`)

const dlugosci = (w: Wiersz[]) => {
  const d = Array.from(new Set(w.map((x) => x[1]))).sort((a, b) => liczba(a) - liczba(b))
  return d.length === 1 ? `${d[0]} mm` : `od ${d[0]} do ${d[d.length - 1]} mm`
}
const sztuki = (w: Wiersz[]) => {
  const s = w.map((x) => x[2])
  return zakres(Math.min(...s), Math.max(...s))
}

// Rodziny bez wersji dwustronnych: Rozmiar, Przewód, Kolor. Rodziny z wersjami dwustronnymi: Rozmiar, Kolor, Nadruk.
const wariantyHeatex = (wiersze: Wiersz[], szer: string, przewod: string) => {
  const dwustronne = wiersze.some((w) => w[4] === 'D')
  return wiersze.map(([pn, dl, szt, kol, nadruk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kol]} koszulka PermaSleeve Heatex ${dl} × ${szer} mm`,
    attributes: (dwustronne
      ? { Rozmiar: `${dl} × ${szer} mm, ${ile(szt)} szt.`, Kolor: KOLORY[kol], Nadruk: nadruk === 'D' ? 'Dwustronny' : 'Jednostronny' }
      : { Rozmiar: `${dl} × ${szer} mm, ${ile(szt)} szt.`, Przewód: przewod, Kolor: KOLORY[kol] }) as Record<string, string>,
    availability: 'unavailable' as const,
  }))
}

const NADRUK_TOOLTIP = 'Strona koszulki, na której powstaje opis.\n\nWersje z przedrostkiem 2 w numerze mają nadruk po obu stronach, pozostałe po jednej.'

// ---------------------------------------------------------------------------
// 16–10 AWG (cps-4519444)
// ---------------------------------------------------------------------------

const HX187: Wiersz[] = [
  ['HX-187-150-WT-S', '38,1', 500, 'WT', 'J'],
  ['HX-187-150-YL', '38,1', 2500, 'YL', 'J'],
  ['117070', '19,05', 5000, 'WT', 'J'],
  ['HX-187-150-YL-2', '19,05', 5000, 'YL', 'J'],
  ['HX-187-2-WT', '50,8', 2500, 'WT', 'J'],
  ['HX-187-2-WT-2', '25,4', 5000, 'WT', 'J'],
  ['HX-187-2-YL-2', '25,4', 5000, 'YL', 'J'],
  ['HX-187-2-YL-4', '12,7', 10000, 'YL', 'J'],
  ['2HX-187-2-YL', '50,8', 2500, 'YL', 'D'],
]

export const bradyHeatex187: Product = {
  ...wspolneTHT,
  id: 'brady-hx-187-2-wt',
  slug: 'brady-hx-187-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 16–10 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 16–10 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: poliolefina 2:1, przewody 16–10 AWG. PN: HX-187-2-WT, HX-187-150-YL.',
  shortDescription: 'Brady HX-187 to koszulki termokurczliwe 2:1 z poliolefiny na przewody od 16 do 10 AWG, od 500 do 10 000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki PermaSleeve Heatex B-7642 z tej rodziny oznaczają przewody od 16 do 10 AWG. Wykonano je z matowej poliolefiny, która po ogrzaniu zmniejsza średnicę o połowę i obejmuje izolację. Nadruk powstaje termotransferowo. Koszulki są ułożone na nośniku.\n\nPrzed obkurczeniem koszulka ma średnicę 4,75 mm, a po spłaszczeniu 8,51 mm szerokości. Przewód może mieć średnicę 2,39–3,81 mm. Najkrótsza koszulka ma 12,7 mm, najdłuższa 50,8 mm. Na rolce są 500, 2500, 5000 albo 10 000 koszulek. Kolor jest biały lub żółty, a jedna wersja ma nadruk dwustronny. Podziałka na nośniku wynosi 15,88 mm. Numer 117070 jest jednocześnie numerem artykułu Brady.\n\nKoszulka jest samogasnąca. Wytrzymuje kontakt z chemikaliami, wilgocią, UV i pogodą, a także korozję. W instalacji znosi zarówno −40 °C, jak i 120 °C. Nadruk wymaga taśmy barwiącej R6400 (i75-R6400 lub R6406), kupowanej osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-16-to-10-gauge-wire-marking-sleeves-cps-4519444',
  images: ['/images/products/brady/hx-187-2-wt.png', '/images/products/brady/hx-187-2-wt-2.png'],
  imageDescriptions: [
    'Karton Brady z rolką białych koszulek PermaSleeve Heatex, z którego wysunięto pasek koszulek na nośniku',
    'Karton Brady z rolką koszulek PermaSleeve Heatex o niebieskim rdzeniu i z wysuniętym paskiem białych koszulek',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX187)}, szerokość po spłaszczeniu 8,51 mm` },
    { name: 'Średnica przed obkurczeniem', value: '4,75 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX187)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 2,39 do 3,81 mm (16–10 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX187, '8,51', 'Ø 2,39–3,81 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 8,51 mm, a długość od 12,7 do 50,8 mm.',
    Kolor: 'Kolor koszulki.\n\nW tej rodzinie dostępne są koszulki białe i żółte.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Na jakie przewody pasują koszulki HX-187?', answer: 'Na przewody od 16 do 10 AWG, czyli o średnicy od 2,39 do 3,81 mm. Koszulka kurczy się w stosunku 2:1.' },
    { question: 'Czy koszulki HX-187 można zadrukować po obu stronach?', answer: 'Tak, ale tylko wersję 2HX-187-2-YL. Pozostałe numery mają nadruk po jednej stronie.' },
    { question: 'Które drukarki obsługują rolki Heatex B-7642?', answer: 'Rolki obsługują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Taśma barwiąca R6400 jest kupowana osobno.' },
  ],
  applications: ['Znakowanie elektryczne', 'Oznaczanie przewodów i kabli o średnicy do 3,81 mm'],
}

// ---------------------------------------------------------------------------
// 20–16 AWG (cps-4519445)
// ---------------------------------------------------------------------------

const HX125: Wiersz[] = [
  ['117067', '38,1', 2500, 'WT', 'J'],
  ['HX-125-2-WT', '50,8', 2500, 'WT', 'J'],
  ['HX-125-2-YL', '50,8', 2500, 'YL', 'J'],
  ['117065', '19,05', 5000, 'WT', 'J'],
  ['HX-125-150-YL-2', '19,05', 5000, 'YL', 'J'],
  ['HX-125-2-WT-2', '25,4', 5000, 'WT', 'J'],
  ['HX-125-2-YL-2', '25,4', 5000, 'YL', 'J'],
  ['2HX-125-2-WT-2', '25,4', 5000, 'WT', 'D'],
]

export const bradyHeatex125: Product = {
  ...wspolneTHT,
  id: 'brady-hx-125-2-wt',
  slug: 'brady-hx-125-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 20–16 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 20–16 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: przewody 20–16 AWG, 2500 lub 5000 szt. PN: HX-125-2-WT, HX-125-2-YL.',
  shortDescription: 'Brady HX-125 to koszulki z poliolefiny 2:1 dla przewodów o średnicy od 1,57 do 2,79 mm, 2500 lub 5000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki HX-125 oznaczają przewody od 20 do 16 AWG o średnicy 1,57–2,79 mm. Materiałem jest matowa poliolefina Heatex B-7642 o skurczu 2:1. Po ogrzaniu koszulka przylega do przewodu. Opis nanosi drukarka termotransferowa.\n\nŚrednica koszulki przed obkurczeniem wynosi 3,18 mm, a po spłaszczeniu jej szerokość to 5,97 mm. Rolki zawierają 2500 albo 5000 sztuk. Koszulki mają od 19,05 do 50,8 mm długości i są białe lub żółte. Wersja 2HX-125-2-WT-2 przyjmuje nadruk z obu stron. Koszulki leżą jednym rzędem, a kolejne zaczynają się co 12,7 mm. Numery 117067 i 117065 są jednocześnie numerami artykułów Brady.\n\nSamogasnąca poliolefina znosi wilgoć, korozję, promieniowanie UV, chemikalia i czynniki atmosferyczne. Koszulka wytrzymuje −40 °C oraz +120 °C. Drukarki i6100, i7100 i i7500 używają do niej taśmy barwiącej z serii R6400.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-20-to-16-gauge-wire-marking-sleeves-cps-4519445',
  images: ['/images/products/brady/hx-125-2-wt.png', '/images/products/brady/2hx-125-2-wt-2.png'],
  imageDescriptions: [
    'Rolka Brady z białymi koszulkami PermaSleeve Heatex z czerwonymi pasami prowadzącymi na brzegach nośnika',
    'Rolka Brady z białymi koszulkami PermaSleeve Heatex na rdzeniu z niebieską etykietą i rozwiniętym paskiem koszulek',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX125)}, szerokość po spłaszczeniu 5,97 mm` },
    { name: 'Średnica przed obkurczeniem', value: '3,18 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX125)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 2,79 mm (20–16 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX125, '5,97', 'Ø 1,57–2,79 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu to 5,97 mm, a rolki mieszczą 2500 albo 5000 koszulek.',
    Kolor: 'Kolor koszulki.\n\nDostępne są wersje białe i żółte.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Jaką średnicę przewodu obejmuje koszulka HX-125?', answer: 'Od 1,57 do 2,79 mm, co odpowiada przewodom od 20 do 16 AWG. Średnica koszulki przed obkurczeniem wynosi 3,18 mm.' },
    { question: 'Ile koszulek jest na rolce HX-125?', answer: 'Na rolce jest 2500 albo 5000 sztuk, zależnie od długości koszulki. Dłuższe koszulki, 38,1 i 50,8 mm, pakowane są po 2500 sztuk.' },
    { question: 'Z jakimi drukarkami współpracują koszulki HX-125?', answer: 'Z [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zaleca się taśmę barwiącą R6400.' },
  ],
  applications: ['Oznaczanie cienkich przewodów w szafach sterowniczych', 'Znakowanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// 6–1 AWG (cps-4519446)
// ---------------------------------------------------------------------------

const HX500: Wiersz[] = [
  ['HX-500-150-WT', '38,1', 500, 'WT', 'J'],
  ['HX-500-150-WT-2', '19,05', 1000, 'WT', 'J'],
  ['117088', '50,8', 500, 'WT', 'J'],
  ['HX-500-2-YL', '50,8', 500, 'YL', 'J'],
  ['117040', '25,4', 1000, 'YL', 'J'],
  ['HX-500-2-WT-2', '25,4', 1000, 'WT', 'J'],
  ['2HX-500-2-BK-2', '25,4', 1000, 'BK', 'D'],
]

export const bradyHeatex500: Product = {
  ...wspolneTHT,
  id: 'brady-hx-500-2-wt-2',
  slug: 'brady-hx-500-2-wt-2',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 6–1 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 6–1 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: przewody 6–1 AWG, biała, żółta i czarna. PN: HX-500-2-WT-2, 2HX-500-2-BK-2.',
  shortDescription: 'Brady HX-500 to koszulki 2:1 z poliolefiny dla przewodów o średnicy od 6,35 do 11,43 mm, 500 lub 1000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Ta rodzina koszulek Heatex B-7642 przeznaczona jest do przewodów od 6 do 1 AWG, czyli o średnicy 6,35–11,43 mm. Koszulki z matowej poliolefiny kurczą się o połowę. Nadruk wykonuje drukarka termotransferowa.\n\nPrzed obkurczeniem koszulka ma średnicę 12,7 mm, a po spłaszczeniu szerokość 21,62 mm. Długość mieści się między 19,05 a 50,8 mm. Rolki zawierają 500 albo 1000 koszulek. Poza białymi i żółtymi jest też czarna koszulka z nadrukiem po obu stronach. Koszulki leżą pojedynczo, co 31,75 mm. Numery 117088 i 117040 są jednocześnie numerami artykułów Brady.\n\nPoliolefina Heatex nie podtrzymuje palenia i znosi chemikalia, wilgoć, korozję oraz UV. Pracuje od −40 °C (dolna granica) do 120 °C (górna granica). Zaleca się taśmę barwiącą R6400, oznaczoną też jako i75-R6400 i R6406. Rolki obsługują drukarki Brady i6100, i7100 oraz i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-6-to-1-gauge-wire-marking-sleeves-cps-4519446',
  images: ['/images/products/brady/hx-500-2-wt-2.png', '/images/products/brady/2hx-500-2-bk-2.png'],
  imageDescriptions: [
    'Karton Brady z rolką białych koszulek PermaSleeve Heatex i wysuniętym paskiem koszulek na nośniku',
    'Otwarty karton Brady z rolką czarnych koszulek PermaSleeve Heatex ułożonych na białym nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty, czarny' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX500)}, szerokość po spłaszczeniu 21,62 mm` },
    { name: 'Średnica przed obkurczeniem', value: '12,7 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX500)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 6,35 do 11,43 mm (6–1 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX500, '21,62', 'Ø 6,35–11,43 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 21,62 mm, a na rolce jest 500 albo 1000 koszulek.',
    Kolor: 'Kolor koszulki.\n\nBiałe i żółte koszulki mają nadruk po jednej stronie. Czarna występuje w wersji dwustronnej.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Dla jakich przewodów przeznaczona jest rodzina HX-500?', answer: 'Dla przewodów od 6 do 1 AWG o średnicy od 6,35 do 11,43 mm. Koszulka ma 12,7 mm średnicy przed obkurczeniem.' },
    { question: 'Jakie kolory ma rodzina HX-500?', answer: 'Koszulki są białe, żółte lub czarne. Czarną wersję 2HX-500-2-BK-2 można zadrukować po obu stronach.' },
    { question: 'Czy rolki HX-500 pasują do drukarki i6100?', answer: 'Tak. Rolki obsługuje [Brady i6100](/produkt/brady-i6100), a także [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Opis powstaje w technice termotransferowej, więc potrzebna jest taśma barwiąca z serii R6400.' },
  ],
  applications: ['Znakowanie grubych przewodów w rozdzielnicach', 'Oznaczanie kabli o średnicy do 11,43 mm'],
}

// ---------------------------------------------------------------------------
// 2–0000 AWG (cps-4519447)
// ---------------------------------------------------------------------------

const HX750: Wiersz[] = [
  ['HX-750-150-WT', '38,1', 250, 'WT', 'J'],
  ['HX-750-2-WT', '50,8', 250, 'WT', 'J'],
  ['HX-750-2-YL', '50,8', 250, 'YL', 'J'],
  ['HX-750-2-WT-2', '25,4', 500, 'WT', 'J'],
  ['117118', '50,8', 250, 'YL', 'D'],
  ['2HX-750-2-RD', '50,8', 250, 'RD', 'D'],
]

export const bradyHeatex750: Product = {
  ...wspolneTHT,
  id: 'brady-hx-750-2-wt',
  slug: 'brady-hx-750-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 2–0000 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 2–0000 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: grube przewody 2–0000 AWG, 250 lub 500 szt. PN: HX-750-2-WT, 2HX-750-2-RD.',
  shortDescription: 'Brady HX-750 to koszulki z poliolefiny 2:1 dla grubych przewodów od 9,53 do 17,78 mm, 250 lub 500 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki Heatex B-7642 w rozmiarze 750 służą do znakowania grubych przewodów od 2 do 0000 AWG. Ich średnica mieści się między 9,53 a 17,78 mm. Poliolefina ma wykończenie matowe i kurczy się o połowę. Koszulki drukuje się termotransferowo.\n\nŚrednica koszulki przed obkurczeniem to 19,05 mm, a szerokość po spłaszczeniu 31,75 mm. Rolka zawiera 250 koszulek, a w wersji 25,4 mm 500. Krótsza z pozostałych ma 38,1 mm, dłuższa 50,8 mm. Kolory: biały, żółty i czerwony. Dwustronny nadruk mają czerwona koszulka i jedna z żółtych. Podziałka to 41,28 mm. Numer 117118 jest jednocześnie numerem artykułu Brady.\n\nMateriał jest samogasnący. Dobrze znosi UV, wilgoć, korozję i chemikalia. Praca jest możliwa od −40 °C aż do 120 °C. Przewidziano do niej taśmę barwiącą z serii R6400, w tym R6406.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-2-to-4-0-gauge-wire-marking-sleeves-cps-4519447',
  images: ['/images/products/brady/hx-750-2-wt.png', '/images/products/brady/2hx-750-2-rd.png'],
  imageDescriptions: [
    'Otwarty karton Brady z rolką białych koszulek PermaSleeve Heatex i paskiem koszulek wysuniętym na nośniku',
    'Otwarty karton Brady z rolką czerwonych koszulek PermaSleeve Heatex ułożonych na białym nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty, czerwony' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX750)}, szerokość po spłaszczeniu 31,75 mm` },
    { name: 'Średnica przed obkurczeniem', value: '19,05 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX750)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 9,53 do 17,78 mm (2–0000 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX750, '31,75', 'Ø 9,53–17,78 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 31,75 mm, a rolka mieści 250 lub 500 koszulek.',
    Kolor: 'Kolor koszulki.\n\nW tej rodzinie występuje też kolor czerwony, dostępny tylko z nadrukiem dwustronnym.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Jakie przewody oznaczają koszulki HX-750?', answer: 'Przewody od 2 do 0000 AWG o średnicy od 9,53 do 17,78 mm. Przed obkurczeniem koszulka ma 19,05 mm średnicy.' },
    { question: 'Które numery HX-750 mają nadruk dwustronny?', answer: 'Dwustronne są 117118 w kolorze żółtym i 2HX-750-2-RD w kolorze czerwonym. Pozostałe numery drukuje się po jednej stronie.' },
    { question: 'Jakie drukarki przyjmują rolki HX-750?', answer: 'Rolki przyjmują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) oraz [Brady i7500](/produkt/brady-i7500). Taśmę barwiącą R6400 zamawia się osobno.' },
  ],
  applications: ['Znakowanie grubych kabli zasilających', 'Oznaczanie przewodów o średnicy do 17,78 mm'],
}

// ---------------------------------------------------------------------------
// 24–20 AWG (cps-4519448)
// ---------------------------------------------------------------------------

const HX094: Wiersz[] = [
  ['HX-094-150-WT', '38,1', 2500, 'WT', 'J'],
  ['HX-094-2-WT', '50,8', 2500, 'WT', 'J'],
  ['HX-094-2-WT-2', '25,4', 5000, 'WT', 'J'],
  ['HX-094-2-YL-4', '12,7', 10000, 'YL', 'J'],
]

export const bradyHeatex094: Product = {
  ...wspolneTHT,
  id: 'brady-hx-094-2-wt',
  slug: 'brady-hx-094-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 24–20 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 24–20 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: cienkie przewody 24–20 AWG, do 10 000 szt. PN: HX-094-2-WT, HX-094-2-YL-4.',
  shortDescription: 'Brady HX-094 to koszulki z poliolefiny 2:1 dla przewodów o średnicy od 1,19 do 2,03 mm, od 2500 do 10 000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rodzina HX-094 obejmuje koszulki Heatex B-7642 dla żył i przewodów od 24 do 20 AWG. Przewód może mieć 1,19–2,03 mm średnicy. Poliolefina ma powierzchnię matową i po ogrzaniu zmniejsza się dwukrotnie. Rolka trafia do drukarki termotransferowej.\n\nKoszulka płaska ma 4,62 mm szerokości, a przed obkurczeniem jej średnica wynosi 2,39 mm. Rolki zawierają odpowiednio 2500, 5000 albo 10 000 sztuk: im krótsza koszulka, tym więcej na rolce. Najkrótsza, żółta, ma 12,7 mm. Białe występują w trzech długościach, od 25,4 do 50,8 mm. Nadruk jest zawsze jednostronny. Podziałka koszulek na nośniku wynosi 12,7 mm.\n\nMateriał nie podtrzymuje palenia. Na przewodzie koszulka znosi zakres −40…120 °C. Odporność obejmuje wilgoć, korozję, chemikalia, UV oraz pogodę. Taśma barwiąca do nadruku to R6400, także oznaczana i75-R6400 lub R6406. Rolkę zakłada się w drukarkach Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-24-to-20-gauge-wire-marking-sleeves-cps-4519448',
  images: ['/images/products/brady/hx-094-2-wt.png', '/images/products/brady/hx-094-2-yl-4.png'],
  imageDescriptions: [
    'Rolka Brady z białymi, wąskimi koszulkami PermaSleeve Heatex i rozwiniętym paskiem koszulek na nośniku',
    'Rolka Brady z żółtymi, wąskimi koszulkami PermaSleeve Heatex i rozwiniętym paskiem koszulek na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX094)}, szerokość po spłaszczeniu 4,62 mm` },
    { name: 'Średnica przed obkurczeniem', value: '2,39 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX094)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 1,19 do 2,03 mm (24–20 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX094, '4,62', 'Ø 1,19–2,03 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 4,62 mm, a rolka mieści od 2500 do 10 000 koszulek.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nW tej rodzinie jest to od 1,19 do 2,03 mm, czyli przewody od 24 do 20 AWG.',
    Kolor: 'Kolor koszulki.\n\nŻółta jest tylko najkrótsza koszulka o długości 12,7 mm.',
  },
  faq: [
    { question: 'Dla jak cienkich przewodów przeznaczone są koszulki HX-094?', answer: 'Dla przewodów o średnicy od 1,19 do 2,03 mm, czyli od 24 do 20 AWG.' },
    { question: 'Czy koszulki HX-094 mają nadruk dwustronny?', answer: 'Nie. Wszystkie cztery numery tej rodziny przyjmują nadruk po jednej stronie.' },
    { question: 'Jakimi drukarkami wykonuje się nadruk na koszulkach HX-094?', answer: 'Drukują je [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą R6400.' },
  ],
  applications: ['Oznaczanie żył i cienkich przewodów', 'Znakowanie elektryczne w aparaturze'],
}

// ---------------------------------------------------------------------------
// 12–8 AWG (cps-4519449)
// ---------------------------------------------------------------------------

const HX250: Wiersz[] = [
  ['HX-250-150-YL-S', '38,1', 500, 'YL', 'J'],
  ['HX-250-150-WT', '38,1', 1000, 'WT', 'J'],
  ['HX-250-150-YL', '38,1', 1000, 'YL', 'J'],
  ['117075', '19,05', 2000, 'WT', 'J'],
  ['HX-250-150-YL-2', '19,05', 2000, 'YL', 'J'],
  ['HX-250-2-WT', '50,8', 1000, 'WT', 'J'],
  ['HX-250-2-YL', '50,8', 1000, 'YL', 'J'],
  ['HX-250-2-BK-2', '25,4', 2000, 'BK', 'J'],
  ['HX-250-2-YL-2', '25,4', 2000, 'YL', 'J'],
  ['HX-250-2-YL-4', '12,7', 4000, 'YL', 'J'],
]

export const bradyHeatex250: Product = {
  ...wspolneTHT,
  id: 'brady-hx-250-2-wt',
  slug: 'brady-hx-250-2-wt',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 12–8 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 12–8 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: przewody 12–8 AWG, biała, żółta i czarna. PN: HX-250-2-WT, HX-250-2-BK-2.',
  shortDescription: 'Brady HX-250 to dziesięć wersji koszulek 2:1 z poliolefiny dla przewodów o średnicy od 3,18 do 5,46 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rodzina HX-250 obejmuje dziesięć wersji koszulek Heatex B-7642 na przewody od 12 do 8 AWG. Przewód może mieć 3,18–5,46 mm średnicy. Matowa poliolefina kurczy się dwukrotnie, a opis powstaje w technice termotransferowej.\n\nKoszulka ma 6,35 mm średnicy przed obkurczeniem oraz 11,15 mm szerokości po spłaszczeniu. Zakres długości to 12,7–50,8 mm. Na rolce znajduje się 500, 1000, 2000 lub 4000 koszulek. Kolory to biały, żółty i czarny, przy czym czarna jest tylko koszulka 25,4 mm. Nadruk jest jednostronny. Rolka ma jeden rząd koszulek z podziałką 19,05 mm. Numer 117075 jest jednocześnie numerem artykułu Brady.\n\nPoliolefina jest samogasnąca i ma odporność na korozję, chemikalia, wilgoć, UV oraz warunki zewnętrzne. Zakres temperatury pracy zaczyna się od −40 °C i kończy na 120 °C. Do nadruku dobiera się taśmę R6400 (i75-R6400, R6406).',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-12-to-8-gauge-wire-marking-sleeves-cps-4519449',
  images: ['/images/products/brady/hx-250-2-wt.png', '/images/products/brady/hx-250-2-bk-2.png'],
  imageDescriptions: [
    'Karton Brady z rolką białych koszulek PermaSleeve Heatex i wysuniętym paskiem koszulek na nośniku',
    'Otwarty karton Brady z rolką czarnych koszulek PermaSleeve Heatex na białym nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty, czarny' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX250)}, szerokość po spłaszczeniu 11,15 mm` },
    { name: 'Średnica przed obkurczeniem', value: '6,35 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX250)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 3,18 do 5,46 mm (12–8 AWG)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX250, '11,15', 'Ø 3,18–5,46 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 11,15 mm, a na rolce jest od 500 do 4000 koszulek.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nW tej rodzinie jest to od 3,18 do 5,46 mm, czyli przewody od 12 do 8 AWG.',
    Kolor: 'Kolor koszulki.\n\nCzarna jest tylko koszulka o długości 25,4 mm.',
  },
  faq: [
    { question: 'Na jakie przewody nakłada się koszulki HX-250?', answer: 'Na przewody od 12 do 8 AWG, o średnicy od 3,18 do 5,46 mm. Koszulka kurczy się do połowy swojej średnicy.' },
    { question: 'Ile wersji ma rodzina HX-250?', answer: 'Dziesięć. Różnią się długością od 12,7 do 50,8 mm, kolorem i liczbą koszulek na rolce.' },
    { question: 'Jaka drukarka Brady drukuje na koszulkach HX-250?', answer: 'Koszulki HX-250 drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Dobiera się do nich taśmę R6400.' },
  ],
  applications: ['Znakowanie przewodów w instalacjach elektrycznych', 'Oznaczanie kabli o średnicy do 5,46 mm'],
}

// ---------------------------------------------------------------------------
// 8–4 AWG (cps-4519450); PN HX-500-150-WT należy do rodziny 6–1 AWG (powyżej) i nie jest tu powtórzony
// ---------------------------------------------------------------------------

const HX375: Wiersz[] = [
  ['117082', '38,1', 1000, 'WT', 'J'],
  ['HX-375-150-YL', '38,1', 1000, 'YL', 'J'],
  ['HX-375-150-WT-2', '19,05', 2000, 'WT', 'J'],
  ['117083', '50,8', 1000, 'WT', 'J'],
  ['HX-375-2-YL', '50,8', 1000, 'YL', 'J'],
  ['HX-375-2-WT-2', '25,4', 2000, 'WT', 'J'],
  ['HX-375-2-YL-2', '25,4', 2000, 'YL', 'J'],
  ['HX-375-2-YL-4', '12,7', 4000, 'YL', 'J'],
  ['2HX-375-2-WT-2', '25,4', 2000, 'WT', 'D'],
]

export const bradyHeatex375: Product = {
  ...wspolneTHT,
  id: 'brady-hx-375-2-wt-2',
  slug: 'brady-hx-375-2-wt-2',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do przewodów 8–4 AWG na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki 8–4 AWG do i6100, i7100, i7500',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: przewody 8–4 AWG, 1000 do 4000 szt. PN: HX-375-2-WT-2, 2HX-375-2-WT-2.',
  shortDescription: 'Brady HX-375 to koszulki 2:1 z poliolefiny dla przewodów od 8 do 4 AWG, od 1000 do 4000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki Heatex B-7642 w tym rozmiarze oznaczają przewody od 8 do 4 AWG. Materiałem jest matowa poliolefina o skurczu 2:1. Rolka zawiera gotowe koszulki ułożone na nośniku, a nadruk powstaje termotransferowo.\n\nPo spłaszczeniu koszulka ma 16,38 mm szerokości. Najmniejsza długość to 12,7 mm, największa 50,8 mm. Na rolkę trafia od 1000 do 4000 sztuk. Koszulki są białe lub żółte. Dwustronnie drukuje się tylko wersję 2HX-375-2-WT-2, białą. Na nośniku koszulki tworzą jeden rząd. Numery 117082 i 117083 są jednocześnie numerami artykułów Brady.\n\nMateriał nie podtrzymuje palenia i dobrze znosi pogodę, UV, wilgoć, korozję oraz chemikalia. Koszulki pracują w temperaturach od −40 do 120 °C. Pasuje do nich taśma barwiąca R6400 (i75-R6400, R6406). Zastosowanie obejmuje znakowanie elektryczne oraz oznaczanie przewodów i kabli. Zgodne z nią są Brady i6100, i7100 oraz i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-8-to-4-gauge-wire-marking-sleeves-cps-4519450',
  images: ['/images/products/brady/hx-375-2-wt-2.png', '/images/products/brady/hx-375-150-wt-2.png'],
  imageDescriptions: [
    'Karton Brady z rolką białych koszulek PermaSleeve Heatex i paskiem koszulek wysuniętym na nośniku',
    'Otwarty karton Brady z rolką białych koszulek PermaSleeve Heatex o czerwonym rdzeniu',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX375)}, szerokość po spłaszczeniu 16,38 mm` },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX375)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: '8–4 AWG' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX375, '16,38', '8–4 AWG'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 16,38 mm, a rolka mieści od 1000 do 4000 koszulek.',
    Kolor: 'Kolor koszulki.\n\nW tej rodzinie dostępne są koszulki białe i żółte.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Dla jakich przewodów przeznaczone są koszulki HX-375?', answer: 'Dla przewodów od 8 do 4 AWG. Szerokość koszulki po spłaszczeniu wynosi 16,38 mm.' },
    { question: 'Która koszulka HX-375 ma nadruk po obu stronach?', answer: 'Numer 2HX-375-2-WT-2, biała koszulka o długości 25,4 mm w opakowaniu po 2000 sztuk.' },
    { question: 'Do jakich drukarek pasują rolki HX-375?', answer: 'Do [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zalecana jest taśma barwiąca R6400.' },
  ],
  applications: ['Oznaczanie przewodów średniej grubości', 'Znakowanie elektryczne i kablowe'],
}

// ---------------------------------------------------------------------------
// 00 AWG – 500 MCM (cps-4519452)
// ---------------------------------------------------------------------------

const HX1000: Wiersz[] = [
  ['HX-1000-150-YL', '38,1', 250, 'YL', 'J'],
  ['HX-1000-2-WT', '50,8', 250, 'WT', 'J'],
  ['2HX-1000-2-BK', '50,8', 250, 'BK', 'D'],
  ['2HX-1000-2-BL', '50,8', 250, 'BL', 'D'],
  ['2HX-1000-2-WT', '50,8', 250, 'WT', 'D'],
  ['2HX-1000-2-YL', '50,8', 250, 'YL', 'D'],
  ['2HX-1000-2-RD-2', '25,4', 500, 'RD', 'D'],
]

export const bradyHeatex1000: Product = {
  ...wspolneTHT,
  id: 'brady-hx-1000-150-yl',
  slug: 'brady-hx-1000-150-yl',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do kabli Ø 12,7–24,13 mm na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki na kable do 24 mm, i6100, i7100',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: kable Ø 12,7–24,13 mm, 5 kolorów. PN: HX-1000-150-YL, 2HX-1000-2-BL.',
  shortDescription: 'Brady HX-1000 to koszulki z poliolefiny 2:1 na kable o średnicy od 12,7 do 24,13 mm w pięciu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki Heatex B-7642 z rodziny HX-1000 pasują na grube kable o średnicy od 12,7 do 24,13 mm, co odpowiada zakresowi od 00 AWG do 500 MCM. Poliolefina jest matowa i kurczy się o połowę. Nadruk wykonuje się metodą termotransferową.\n\nŚrednica przed obkurczeniem wynosi 25,4 mm, a szerokość po spłaszczeniu 42,16 mm. Rolka mieści 250 albo 500 koszulek. Długość 50,8 mm występuje w pięciu wersjach. Dodatkowo dostępne są koszulki 38,1 mm w kolorze żółtym i 25,4 mm w czerwonym. Kolory: biały, żółty, czarny, niebieski i czerwony. Pięć wersji ma nadruk dwustronny. Koszulki rozmieszczono co 50,8 mm na nośniku o szerokości 88,65 mm.\n\nPoliolefina nie podtrzymuje palenia. Dobrze znosi warunki pogodowe, UV, wilgoć, chemikalia oraz korozję. Granice temperatury pracy to −40 oraz 120 °C. Taśma barwiąca do nadruku: R6400 lub R6406 (i75-R6400).',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-2-0-gauge-to-24-mm-diameter-wire-marking-sleeves-cps-4519452',
  images: ['/images/products/brady/2hx-1000-2-yl.png', '/images/products/brady/2hx-1000-2-bk.png'],
  imageDescriptions: [
    'Rolka Brady z szerokimi, żółtymi koszulkami PermaSleeve Heatex i paskiem koszulek rozwiniętym na nośniku',
    'Rolka Brady z szerokimi, czarnymi koszulkami PermaSleeve Heatex i paskiem koszulek rozwiniętym na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały, żółty, czarny, niebieski, czerwony' },
    { name: 'Wymiary etykiety', value: `długość ${dlugosci(HX1000)}, szerokość po spłaszczeniu 42,16 mm` },
    { name: 'Średnica przed obkurczeniem', value: '25,4 mm' },
    { name: 'Liczba sztuk na rolce', value: `${sztuki(HX1000)}, zależnie od wersji` },
    { name: 'Zakres średnicy przewodu', value: 'od 12,7 do 24,13 mm (00 AWG – 500 MCM)' },
    { name: 'Zalecana taśma barwiąca', value: TASMA },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX1000, '42,16', 'Ø 12,7–24,13 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nSzerokość po spłaszczeniu wynosi 42,16 mm, a rolka mieści 250 lub 500 koszulek.',
    Kolor: 'Kolor koszulki.\n\nRodzina ma pięć kolorów, w tym czarny, niebieski i czerwony dostępne tylko z nadrukiem dwustronnym.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Na jakie kable pasują koszulki HX-1000?', answer: 'Na kable o średnicy od 12,7 do 24,13 mm, czyli od 00 AWG do 500 MCM. Koszulka kurczy się w stosunku 2:1.' },
    { question: 'W jakich kolorach dostępne są koszulki HX-1000?', answer: 'W białym, żółtym, czarnym, niebieskim i czerwonym. Czarna, niebieska i czerwona są dostępne tylko z nadrukiem dwustronnym.' },
    { question: 'Jakie drukarki obsługują koszulki HX-1000?', answer: 'Obsługują je [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500) z taśmą barwiącą R6400.' },
  ],
  applications: ['Znakowanie grubych kabli', 'Oznaczanie kabli kolorem przypisanym do instalacji'],
}

// ---------------------------------------------------------------------------
// Ø 25–49 mm (cps-4519453)
// ---------------------------------------------------------------------------

const HX2000: Wiersz[] = [
  ['HX-2000-2-YL', '50,8', 100, 'YL', 'J'],
  ['2HX-2000-2-BK', '50,8', 100, 'BK', 'D'],
]

export const bradyHeatex2000: Product = {
  ...wspolneTHT,
  id: 'brady-hx-2000-2-yl',
  slug: 'brady-hx-2000-2-yl',
  name: 'Koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 do kabli Ø 25–49 mm na rolce 76 mm',
  seoTitle: 'Brady Heatex B-7642 — koszulki na kable Ø 25–49 mm, i6100, i7100',
  seoDescription: 'Koszulki Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: kable Ø 25,4–49,53 mm, 100 szt. na rolce. PN: HX-2000-2-YL, 2HX-2000-2-BK.',
  shortDescription: 'Brady HX-2000 to koszulki z poliolefiny 2:1 na kable o średnicy od 25,4 do 49,53 mm, 100 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rodzina HX-2000 obejmuje koszulki dla kabli o średnicy od 25,4 do 49,53 mm. Poliolefina Heatex B-7642 jest matowa i kurczy się do połowy średnicy. Po obkurczeniu koszulka obejmuje kabel na całym obwodzie.\n\nKoszulka ma długość 50,8 mm, średnicę 50,8 mm przed obkurczeniem i szerokość 80,39 mm po spłaszczeniu. Rolka zawiera 100 sztuk. Dostępne są dwie wersje: żółta z nadrukiem jednostronnym i czarna z nadrukiem dwustronnym. Koszulki leżą w jednym rzędzie w odstępie 101,6 mm.\n\nPoliolefina nie podtrzymuje palenia. Odpiera chemikalia, wilgoć, korozję, UV i działanie atmosfery. Granice zastosowania to −40 i 120 °C. Dla nadruku przewidziano serię R6400, także w oznaczeniu i75-R6400. Koszulka oznacza kable i przewody instalacji elektrycznych. Do druku na rolce służą Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-heatex-polyolefin-25-to-48-mm-diameter-wire-marking-sleeves-cps-4519453',
  images: ['/images/products/brady/hx-2000-2-yl.png'],
  imageDescriptions: ['Otwarty karton Brady z rolką żółtych koszulek PermaSleeve Heatex i paskiem koszulek wysuniętym na nośniku'],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'żółty, czarny' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, szerokość po spłaszczeniu 80,39 mm' },
    { name: 'Średnica przed obkurczeniem', value: '50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Zakres średnicy przewodu', value: 'od 25,4 do 49,53 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'R6400 (i75-R6400)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: wariantyHeatex(HX2000, '80,39', 'Ø 25,4–49,53 mm'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki, jej szerokość po spłaszczeniu oraz liczba sztuk na rolce.\n\nWszystkie koszulki mają 50,8 mm długości i 80,39 mm szerokości po spłaszczeniu, a na rolce jest 100 sztuk.',
    Kolor: 'Kolor koszulki.\n\nDostępna jest wersja żółta i czarna.',
    Nadruk: NADRUK_TOOLTIP,
  },
  faq: [
    { question: 'Jakie kable obejmują koszulki HX-2000?', answer: 'Kable o średnicy od 25,4 do 49,53 mm. Koszulka ma 50,8 mm średnicy przed obkurczeniem.' },
    { question: 'Którą wersję HX-2000 można zadrukować z obu stron?', answer: 'Czarną koszulkę 2HX-2000-2-BK. Żółta HX-2000-2-YL ma nadruk po jednej stronie.' },
    { question: 'Z jakimi drukarkami współpracują koszulki HX-2000?', answer: 'Z [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie kabli o dużej średnicy', 'Oznaczanie przewodów w rozdzielniach i na szynach'],
}

// ---------------------------------------------------------------------------
// HX-1500-2-YL, jeden PN (pid-hx-1500-2-yl): średnica 19,05–36,83 mm nie mieści się w żadnej z sąsiednich rodzin
// ---------------------------------------------------------------------------

export const bradyHeatex1500: Product = {
  ...wspolneTHT,
  id: 'brady-hx-1500-2-yl',
  slug: 'brady-hx-1500-2-yl',
  name: 'Żółte koszulki termokurczliwe Brady PermaSleeve Heatex B-7642 HX-1500-2-YL na rolce 76 mm',
  seoTitle: 'Brady Heatex HX-1500-2-YL — koszulki Ø 19–37 mm, i6100, i7100',
  seoDescription: 'Żółta koszulka Brady PermaSleeve Heatex B-7642 do drukarek Brady i6100, i7100 i i7500: kable Ø 19,05–36,83 mm, 250 szt. PN: HX-1500-2-YL, nr art. 117054.',
  shortDescription: 'Brady HX-1500-2-YL to żółta koszulka z poliolefiny 2:1 na kable o średnicy od 19,05 do 36,83 mm, 250 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Brady HX-1500-2-YL to żółta koszulka PermaSleeve Heatex B-7642 na kable o średnicy od 19,05 do 36,83 mm. Odpowiada to zakresowi od 600 do 2000 MCM. Matowa poliolefina zmniejsza średnicę dwukrotnie. Numer artykułu Brady to 117054.\n\nKoszulka ma 50,8 mm długości, 38,1 mm średnicy przed obkurczeniem i 61,8 mm szerokości po spłaszczeniu. Rolka zawiera 250 sztuk. Nadruk powstaje na jednej stronie, w technice termotransferowej. Koszulki są ułożone w jednym rzędzie na nośniku. Odstęp między początkami koszulek wynosi 76,2 mm. Koszulki leżą w jednym rzędzie.\n\nPoliolefina jest samogasnąca i znosi kontakt z chemikaliami, korozją, wilgocią, UV i pogodą. Dopuszczalna jest eksploatacja w zakresie od −40 do 120 °C. Do nadruku pasuje taśma R6400 w wersji i75-R6400. Rolkę obsługują drukarki Brady i6100, i7100 i i7500. Zastosowanie obejmuje oznaczanie kabli elektrycznych o dużej średnicy.',
  sameAs: 'https://www.brady.eu/labels/permasleeve-wire-marking-sleeves-pid-hx-1500-2-yl',
  images: ['/images/products/brady/hx-1500-2-yl.png'],
  imageDescriptions: ['Dwie żółte koszulki PermaSleeve Heatex ułożone jedna pod drugą na białym nośniku z perforacją'],
  specifications: [
    { name: 'Part Number', value: 'HX-1500-2-YL' },
    { name: 'Numer artykułu Brady', value: '117054' },
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve Heatex B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'żółty' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, szerokość po spłaszczeniu 61,8 mm' },
    { name: 'Średnica przed obkurczeniem', value: '38,1 mm' },
    { name: 'Liczba sztuk na rolce', value: '250' },
    { name: 'Zakres średnicy przewodu', value: 'od 19,05 do 36,83 mm (600–2000 MCM)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6400 (i75-R6400)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  faq: [
    { question: 'Na jakie kable pasuje koszulka HX-1500-2-YL?', answer: 'Na kable o średnicy od 19,05 do 36,83 mm, czyli od 600 do 2000 MCM.' },
    { question: 'Ile koszulek jest na rolce HX-1500-2-YL?', answer: 'Na rolce znajduje się 250 żółtych koszulek z nadrukiem po jednej stronie.' },
    { question: 'Jakie drukarki przyjmują rolkę HX-1500-2-YL?', answer: 'Przyjmują ją [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Znakowanie kabli o średnicy do 36,83 mm', 'Oznaczenia elektryczne na kablach zasilających'],
}

// ---------------------------------------------------------------------------
// Koszulka ciągła 2:1 (cps-5288294): tylko i7100 i i7500, gilza 41,28 mm wg danych Brady
// ---------------------------------------------------------------------------

// [PN, szerokość po spłaszczeniu mm, średnica przed obkurczeniem mm, przewód od, przewód do]
const CIAGLA: [string, string, string, string, string][] = [
  ['HX-C-125-WT-K', '6', '3,18', '1,57', '2,79'],
  ['HX-C-187-WT-K', '8,5', '4,75', '2,39', '3,81'],
  ['HX-C-250-WT-K', '11,15', '6,35', '3,18', '5,46'],
]

export const bradyHeatexCiagla: Product = {
  ...wspolneTHT,
  relatedProducts: ['brady-i7100', 'brady-i7500'],
  id: 'brady-hx-c-125-wt-k',
  slug: 'brady-hx-c-125-wt-k',
  name: 'Ciągła koszulka termokurczliwa Brady B-7642 2:1 na rolce 109 m',
  seoTitle: 'Brady B-7642 — ciągła koszulka termokurczliwa 2:1, i7100, i7500',
  seoDescription: 'Ciągła koszulka Brady B-7642 2:1 do drukarek Brady i7100 i i7500: biała poliolefina, 109 m na rolce, trzy rozmiary. PN: HX-C-125-WT-K, HX-C-187-WT-K.',
  shortDescription: 'Brady HX-C to biała ciągła koszulka z poliolefiny 2:1, 109 m na rolce, w trzech rozmiarach. Do drukarek Brady i7100 i i7500.',
  description: 'Koszulka ciągła B-7642 jest dostarczana jako jedna taśma o długości 109 m, bez podziału na odcinki. Dzięki temu nadruk może być dłuższy niż na koszulkach wyciętych. Materiał to biała poliolefina w wykończeniu matowym, z nadrukiem jednostronnym i skurczem 2:1.\n\nDostępne są trzy rozmiary. Średnice przewodów to kolejno 1,57–2,79; 2,39–3,81 i 3,18–5,46 mm. Szerokość taśmy po spłaszczeniu wynosi odpowiednio 6, 8,5 i 11,15 mm. Rolka musi być zamontowana poza drukarką. Nie obsługuje jej LabelSense. W drukarce i7500 można drukować w trybie ręcznym.\n\nZgodność normowa obejmuje SAE-AMS-DTL-23053/5 (klasy 1 i 3), SAE-AS-81531, UL 224 i VW-1. Koszulka nie podtrzymuje palenia i nie traci odporności na pogodę, UV, chemikalia, wilgoć oraz korozję. Granicami eksploatacji są −40 °C i 120 °C. Dobrą taśmą barwiącą jest R6606; dopuszczalne są też serie R4300 i R6000HF.',
  sameAs: 'https://www.brady.eu/labels/continuous-21-heat-shrink-sleeve-cps-5288294',
  images: ['/images/products/brady/hx-c-125-wt-k.png', '/images/products/brady/hx-c-187-wt-k.png'],
  imageDescriptions: [
    'Kartonowa szpula Brady z nawiniętą białą, ciągłą koszulką termokurczliwą HX-C-125-WT-K',
    'Kartonowa szpula Brady z nawiniętą białą, ciągłą koszulką termokurczliwą HX-C-187-WT-K',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka ciągłej koszulki termokurczliwej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: ODPORNOSC },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość i długość taśmy', value: 'szerokość po spłaszczeniu od 6 do 11,15 mm, długość 109 m' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 5,46 mm, zależnie od wersji' },
    { name: 'Normy', value: 'SAE-AMS-DTL-23053/5 (klasy 1 i 3); SAE-AS-81531; UL 224; VW-1' },
    { name: 'Zalecana taśma barwiąca', value: 'R6606 (dopuszczalne serie R4300, R6000HF, R6600)' },
    { name: 'Gilza', value: '41,28 mm' },
    { name: 'Zgodne drukarki', value: 'Brady i7100, i7500' },
  ],
  variants: CIAGLA.map(([pn, szer, , od, do_]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała ciągła koszulka na przewód Ø ${od}–${do_} mm`,
    attributes: { Rozmiar: `szer. płaska ${szer} mm, 109 m`, Przewód: `Ø ${od}–${do_} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość koszulki po spłaszczeniu oraz długość taśmy na rolce.\n\nSzerokość wynosi 6, 8,5 albo 11,15 mm, a rolka zawiera 109 m taśmy.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy mieszczą się między 1,57 a 5,46 mm, a średnice koszulki przed obkurczeniem to 3,18, 4,75 i 6,35 mm.',
  },
  faq: [
    { question: 'Czym koszulka ciągła różni się od koszulek wyciętych?', answer: 'Rolka zawiera 109 m taśmy bez podziału na odcinki. Dzięki temu można wykonać dłuższy nadruk niż na koszulkach o stałej długości.' },
    { question: 'Czy koszulkę ciągłą można zamontować w drukarce?', answer: 'Nie. Rolka musi być zamontowana poza drukarką i nie jest zgodna z LabelSense. W [Brady i7500](/produkt/brady-i7500) można drukować w trybie ręcznym.' },
    { question: 'Z jakimi drukarkami współpracują koszulki HX-C?', answer: 'Z [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Drukarka [Brady i6100](/produkt/brady-i6100) ich nie obsługuje.' },
  ],
  applications: ['Znakowanie przewodów koszulką o dowolnej długości', 'Oznaczanie przewodów i kabli'],
}

export const bradyTHTHeatex: Product[] = [
  bradyHeatex094,
  bradyHeatex125,
  bradyHeatex187,
  bradyHeatex250,
  bradyHeatex375,
  bradyHeatex500,
  bradyHeatex750,
  bradyHeatex1000,
  bradyHeatex1500,
  bradyHeatex2000,
  bradyHeatexCiagla,
]

export const bradyTHTHeatexSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-hx-094-2-wt': 'przewody',
  'brady-hx-125-2-wt': 'przewody',
  'brady-hx-187-2-wt': 'przewody',
  'brady-hx-250-2-wt': 'przewody',
  'brady-hx-375-2-wt-2': 'przewody',
  'brady-hx-500-2-wt-2': 'przewody',
  'brady-hx-750-2-wt': 'przewody',
  'brady-hx-1000-150-yl': 'przewody',
  'brady-hx-1500-2-yl': 'przewody',
  'brady-hx-2000-2-yl': 'przewody',
  'brady-hx-c-125-wt-k': 'przewody',
}
