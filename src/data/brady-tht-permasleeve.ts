import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Koszulki termokurczliwe PermaSleeve z poliolefiny B-342 na rolkach z gilzą 76 mm do drukarek Brady i6100, i7100 i i7500.
// Jedna karta na rodzinę z brady.eu (według średnicy koszulki), PN jako warianty. 14.11.2026.

const DRUKARKI: Record<string, { nazwa: string; slug: string }> = {
  '6': { nazwa: 'i6100', slug: 'brady-i6100' },
  '1': { nazwa: 'i7100', slug: 'brady-i7100' },
  '5': { nazwa: 'i7500', slug: 'brady-i7500' },
}
const KODY_DRUKAREK = ['6', '1', '5']

const KOLORY: Record<string, string> = { WT: 'Biały', BK: 'Czarny', BL: 'Niebieski', BR: 'Brązowy', GN: 'Zielony', GY: 'Szary', OR: 'Pomarań\u00ADczowy', RD: 'Czerwony', YL: 'Żółty', PK: 'Różowy', VT: 'Fioletowy' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', BK: 'czarna', BL: 'niebieska', BR: 'brązowa', GN: 'zielona', GY: 'szara', OR: 'pomarańczowa', RD: 'czerwona', YL: 'żółta', PK: 'różowa', VT: 'fioletowa' }

// [PN, sztuk na rolce, nadruk (J jednostronny, D dwustronny), długość koszulki w mm (puste = brak w danych), kolor, drukarki gdy inne niż domyślne dla rodziny]
// Kody drukarek: 6 = i6100, 1 = i7100, 5 = i7500.
type Wiersz = [pn: string, szt: number, nadruk: 'J' | 'D', dlugosc: string, kolor: string, drukarki?: string]

const liczba = (n: number) => (n >= 10000 ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : String(n))

const kodyRodziny = (wiersze: Wiersz[], domyslne: string) =>
  KODY_DRUKAREK.filter((k) => wiersze.some((w) => (w[5] ?? domyslne).includes(k))).join('')

const nazwyDrukarek = (kody: string) => KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => DRUKARKI[k].nazwa)

const wyliczenie = (elementy: string[]) => (elementy.length > 1 ? `${elementy.slice(0, -1).join(', ')} i ${elementy[elementy.length - 1]}` : elementy[0])

const listaDrukarek = (kody: string) => nazwyDrukarek(kody).join(', ')

const linkiDrukarek = (kody: string) =>
  wyliczenie(KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => `[Brady ${DRUKARKI[k].nazwa}](/produkt/${DRUKARKI[k].slug})`))

const uwagiZgodnosci = (wiersze: Wiersz[], domyslne: string) => {
  const kody = kodyRodziny(wiersze, domyslne)
  const opisy = KODY_DRUKAREK.filter((k) => kody.includes(k)).flatMap((k) => {
    const pasuja = wiersze.filter((w) => (w[5] ?? domyslne).includes(k)).map((w) => w[0])
    const nie = wiersze.filter((w) => !(w[5] ?? domyslne).includes(k)).map((w) => w[0])
    if (nie.length === 0) return []
    return [pasuja.length <= nie.length ? `${DRUKARKI[k].nazwa}: tylko PN ${pasuja.join(', ')}` : `${DRUKARKI[k].nazwa}: bez PN ${nie.join(', ')}`]
  })
  return opisy.length ? [{ name: 'Uwagi o zgodności', value: opisy.join('; ') }] : []
}

const relatedProducts = (kody: string) => KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => DRUKARKI[k].slug)

const wariantyKoszulek = (wiersze: Wiersz[], srednica: string) =>
  wiersze.map(([pn, szt, nadruk, dlugosc, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} koszulka PermaSleeve Ø ${srednica} mm${dlugosc ? `, dł. ${dlugosc} mm` : ''}, nadruk ${nadruk === 'D' ? 'dwustronny' : 'jednostronny'}`,
    attributes: {
      Rozmiar: dlugosc ? `dł. ${dlugosc} mm, ${liczba(szt)} szt.` : `${liczba(szt)} szt. na rolce`,
      Nadruk: nadruk === 'D' ? 'Dwustronny' : 'Jednostronny',
      Kolor: KOLORY[kolor],
    },
    availability: 'unavailable' as const,
  }))

const NORMY = 'SAE AS-81531; SAE-AMS-DTL-23053/5 (klasa 1); UL 224 (uznanie UL); MIL-STD-202; RoHS'

// ---------------------------------------------------------------------------
// Ø 2,38 mm — przewody 0,58–2,03 mm (cps-3069430)
// ---------------------------------------------------------------------------

const PS_094: Wiersz[] = [
  ['032136', 500, 'J', '38,1', 'WT'],
  ['3PS-094-2-BK-S', 500, 'D', '50,8', 'BK'],
  ['3PS-094-2-BL-S', 500, 'D', '50,8', 'BL'],
  ['3PS-094-2-BR-S', 500, 'D', '50,8', 'BR'],
  ['3PS-094-2-GR-S', 500, 'D', '50,8', 'GN'],
  ['3PS-094-2-GY-S', 500, 'D', '50,8', 'GY'],
  ['3PS-094-2-OR-S', 500, 'D', '50,8', 'OR'],
  ['3PS-094-2-RD-S', 500, 'D', '50,8', 'RD'],
  ['3PS-094-2-WT-S', 500, 'D', '50,8', 'WT'],
  ['3PS-094-2-YL-S', 500, 'D', '50,8', 'YL'],
  ['PS-094-2-WT-S', 500, 'J', '50,8', 'WT'],
  ['PS-094-2-WT-S-2', 1000, 'J', '25,4', 'WT'],
  ['PS-094-2-WT-S-4', 2000, 'J', '12,7', 'WT'],
  ['PS-094-150-WT', 2500, 'J', '38,1', 'WT'],
  ['032510', 2500, 'D', '50,8', 'WT'],
  ['3PS-094-2-YL', 2500, 'D', '50,8', 'YL'],
  ['PS-094-150-WT-2', 5000, 'J', '19,05', 'WT'],
  ['PS-094-2-WT', 2500, 'J', '50,8', 'WT'],
  ['3PS-094-2-YL-2', 5000, 'D', '25,4', 'YL', '5'],
  ['3PS-094-2-WT-2', 5000, 'D', '25,4', 'WT', '5'],
  ['3PS-094-2-WT-4', 10000, 'D', '12,7', 'WT', '5'],
  ['PS-094-2-WT-2', 5000, 'J', '25,4', 'WT', '615'],
  ['3PS-094-2-WT-S-2', 1000, 'D', '25,4', 'WT'],
]
const DRUKARKI_094 = '15'
const KODY_094 = kodyRodziny(PS_094, DRUKARKI_094)
const DRUKARKI_TEKST_094 = '[Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500)'

export const bradyTHTPermaSleeve094: Product = {
  ...wspolneTHT,
  id: 'brady-ps-094-150-wt-s',
  slug: 'brady-ps-094-150-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 2,38 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 2,38 mm — koszulki do i7100, i7500',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 2,38 mm do drukarek Brady i6100, i7100 i i7500: skurcz 3:1. PN: PS-094-150-WT, 3PS-094-2-BK-S.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 2,38 mm to koszulki termokurczliwe na cienkie przewody od 0,58 do 2,03 mm, z nadrukiem jedno- lub dwustronnym. Do drukarek Brady i7100 i i7500, a numer PS-094-2-WT-2 także do i6100.',
  description: 'Rozmiar 2,38 mm dobiera się do cienkich przewodów, których średnica mieści się między 0,58 a 2,03 mm (28–20 AWG). Materiał B-342 to poliolefina o skurczu 3:1, matowa i trudnopalna. Po obkurczeniu koszulka obejmuje izolację na całym obwodzie, a nadruk powstaje w technice termotransferu.\n\nNa rolce znajduje się 500–10 000 koszulek, zależnie od długości. Najkrótsze koszulki mają 12,7 mm, a najdłuższe 50,8 mm. Wysokość pola nadruku to 4,62 mm, a szerokość wstęgi z koszulkami 88,65 mm. Wersja biała występuje z nadrukiem jednostronnym i dwustronnym. Poza białą jest osiem kolorów: czarny, niebieski, brązowy, zielony, szary, pomarańczowy, czerwony i żółty. Wszystkie kolorowe koszulki mają nadruk dwustronny.\n\nZakres temperatur pracy wyznaczają wartości −55 °C i 135 °C. Koszulka ma uznanie UL (UL 224) i spełnia MIL-STD-202 oraz wymagania RoHS. Zalecana taśma barwiąca: R6600. Rolki przyjmują drukarki Brady i7100 i i7500; i6100 obsługuje tylko numer PS-094-2-WT-2.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-28-to-20-gauge-wire-marking-sleeves-cps-3069430',
  relatedProducts: relatedProducts(KODY_094),
  images: [
    '/images/products/brady/ps-094-150-wt-s.png',
    '/images/products/brady/3ps-094-2-bk-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-094-150-WT-S z rolką koszulek termokurczliwych PermaSleeve Ø 2,38 mm i wysuniętym paskiem nośnika',
    'Pudełko Brady 3PS-094-2-BK-S z rolką czarnych koszulek PermaSleeve Ø 2,38 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, czarny, niebieski, brązowy, zielony, szary, pomarańczowy, czerwony, żółty' },
    { name: 'Średnica koszulki', value: '2,38 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,58 do 2,03 mm (28 AWG – 20 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 12,7 / 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 4,62 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_094) },
    ...uwagiZgodnosci(PS_094, DRUKARKI_094),
  ],
  variants: wariantyKoszulek(PS_094, '2,38'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nDługości sięgają od 12,7 do 50,8 mm, a rolki liczą od 500 do 10 000 sztuk.',
    Nadruk: 'Liczba stron koszulki, na których drukarka umieszcza nadruk.\n\nWersja dwustronna pozwala odczytać opis z dwóch stron przewodu.',
    Kolor: 'Kolor koszulki.\n\nDziewięć kolorów występuje w tej średnicy, ale białe koszulki mają najwięcej długości.',
  },
  faq: [
    { question: 'Jakie przewody mieszczą się w koszulce PermaSleeve Ø 2,38 mm?', answer: 'Przewody o średnicy od 0,58 do 2,03 mm, co odpowiada zakresowi 28–20 AWG. Koszulka kurczy się w stosunku 3:1.' },
    { question: 'Jaką taśmą drukuje się koszulki B-342?', answer: 'Zalecana jest taśma barwiąca z serii R6600.' },
    { question: 'Które drukarki obsługują koszulki Ø 2,38 mm?', answer: `Większość numerów jest zgodna z drukarkami ${DRUKARKI_TEKST_094}. Trzy numery pasują tylko do i7500, a numer PS-094-2-WT-2 także do [Brady i6100](/produkt/brady-i6100).` },
  ],
  applications: ['Znakowanie cienkich przewodów 28–20 AWG', 'Oznaczanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Ø 3,18 mm — przewody 1,17–2,79 mm (cps-3069431)
// ---------------------------------------------------------------------------

const PS_125: Wiersz[] = [
  ['PS-125-150W-S', 500, 'J', '38,1', 'WT'],
  ['3PS-125-2-BL-S', 500, 'D', '50,8', 'BL'],
  ['3PS-125-2-OR-S', 500, 'D', '50,8', 'OR'],
  ['3PS-125-2-PK-S', 500, 'D', '50,8', 'PK'],
  ['3PS-125-2-RD-S', 500, 'D', '50,8', 'RD'],
  ['3PS-125-2-WT-S', 500, 'D', '50,8', 'WT'],
  ['3PS-125-2YL-S', 500, 'D', '50,8', 'YL'],
  ['PS-125-2-WT-S', 500, 'J', '50,8', 'WT'],
  ['PS-125-2-YL-S', 500, 'J', '50,8', 'YL'],
  ['3PS-125-2-WT-S-2', 1000, 'D', '25,4', 'WT'],
  ['3PS-125-2-YL-S-2', 1000, 'D', '25,4', 'YL'],
  ['PS-125-2-WT-S-2', 1000, 'J', '25,4', 'WT'],
  ['PS-125-2-WT-S-4', 2000, 'J', '12,7', 'WT'],
  ['PS-125-150-WT', 2500, 'J', '38,1', 'WT'],
  ['3PS-125-2-GR', 2500, 'D', '50,8', 'GN'],
  ['3PS-125-2-WT', 2500, 'D', '50,8', 'WT'],
  ['3PS-125-2-YL', 2500, 'D', '50,8', 'YL'],
  ['PS-125-150-WT-2', 5000, 'J', '19,05', 'WT'],
  ['PS-125-150-YL-2', 5000, 'J', '19,05', 'YL'],
  ['032601', 2500, 'J', '50,8', 'WT'],
  ['PS-125-2-YL', 2500, 'J', '50,8', 'YL'],
  ['3PS-125-2-WT-2', 5000, 'D', '25,4', 'WT'],
  ['104689', 7500, 'J', '17,02', 'WT'],
  ['PS-125-2-WT-4', 10000, 'J', '12,7', 'WT'],
  ['PS-125-2-YL-2', 5000, 'J', '25,4', 'YL'],
  ['PS-125-2-WT-2', 5000, 'J', '25,4', 'WT'],
  ['3PS-125-2-WT-3', 7500, 'D', '17,02', 'WT'],
  ['3PS-125-2-WT-4', 10000, 'D', '12,7', 'WT'],
]
const DRUKARKI_125 = '615'
const KODY_125 = kodyRodziny(PS_125, DRUKARKI_125)

export const bradyTHTPermaSleeve125: Product = {
  ...wspolneTHT,
  id: 'brady-ps-125-150w-s',
  slug: 'brady-ps-125-150w-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 3,18 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 3,18 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 3,18 mm do drukarek Brady i6100, i7100 i i7500: skurcz 3:1. PN: PS-125-150-WT, 3PS-125-2-WT.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 3,18 mm to koszulki termokurczliwe na przewody od 1,17 do 2,79 mm, w siedmiu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 3,18 mm pasuje do przewodów 22–16 AWG, czyli o średnicy 1,17–2,79 mm. B-342 to matowa poliolefina o skurczu 3:1, trudnopalna. Obkurczona koszulka chroni izolację i utrzymuje opis na miejscu. Termotransfer nanosi opis na koszulkę, a całość mieści się na wstędze o szerokości 88,65 mm.\n\nW stanie płaskim koszulka mierzy 5,97 mm wysokości. Długości rozpoczyna wartość 12,7 mm, a kończy 50,8 mm (sześć rozmiarów). Rolki liczą 500–10 000 sztuk. Wersja biała występuje w każdej długości. Kolorowe koszulki są dostępne tylko w wybranych długościach: żółte, niebieskie, pomarańczowe, różowe, czerwone i zielone. Nadruk jest jednostronny lub dwustronny.\n\nPracuje przy temperaturach z przedziału −55 °C do 135 °C. Normy to SAE AS-81531 oraz UL 224 (uznanie UL). Do nadruku służy taśma barwiąca R6600. Rolka pasuje do drukarek Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-22-to-16-gauge-wire-marking-sleeves-cps-3069431',
  relatedProducts: relatedProducts(KODY_125),
  images: [
    '/images/products/brady/ps-125-150w-s.png',
    '/images/products/brady/3ps-125-2-rd-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-125-150W-S z rolką koszulek termokurczliwych PermaSleeve Ø 3,18 mm',
    'Pudełko Brady 3PS-125-2-RD-S z rolką czerwonych koszulek PermaSleeve Ø 3,18 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty, niebieski, pomarańczowy, różowy, czerwony, zielony' },
    { name: 'Średnica koszulki', value: '3,18 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,17 do 2,79 mm (22 AWG – 16 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 12,7 / 17,02 / 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 5,97 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_125) },
    ...uwagiZgodnosci(PS_125, DRUKARKI_125),
  ],
  variants: wariantyKoszulek(PS_125, '3,18'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nNajkrótsze koszulki mają 12,7 mm i trafiają na rolki po 2000–10 000 sztuk.',
    Nadruk: 'Strony koszulki przeznaczone do nadruku.\n\nKoszulki dwustronne drukuje się z obu stron, więc opis widać po każdej stronie przewodu.',
    Kolor: 'Kolor koszulki.\n\nBiałe koszulki są dostępne w każdej długości, kolorowe w wybranych.',
  },
  faq: [
    { question: 'Na jakie przewody pasuje PermaSleeve B-342 Ø 3,18 mm?', answer: 'Na przewody o średnicy od 1,17 do 2,79 mm, czyli 22–16 AWG. Po obkurczeniu 3:1 koszulka przylega do izolacji.' },
    { question: 'Które drukarki obsługują rolki z koszulkami Ø 3,18 mm?', answer: `Koszulki drukują ${linkiDrukarek(KODY_125)}. Zalecana taśma barwiąca to R6600.` },
    { question: 'Czy koszulki B-342 występują w wersji jednostronnej i dwustronnej?', answer: 'Tak. Wersje jednostronne są białe i żółte, a dwustronne dostępne są także w kolorach niebieskim, pomarańczowym, różowym, czerwonym i zielonym.' },
  ],
  applications: ['Oznaczanie przewodów 22–16 AWG', 'Znakowanie elektryczne'],
}

// ---------------------------------------------------------------------------
// Ø 4,76 mm — przewody 1,57–3,81 mm (cps-3069432)
// ---------------------------------------------------------------------------

const PS_187: Wiersz[] = [
  ['PS-187-150-WT-S', 500, 'J', '38,1', 'WT'],
  ['PS-187-150-WT-S-2', 1000, 'J', '19,05', 'WT'],
  ['PS-187-150-WT-S-4', 2000, 'J', '9,53', 'WT'],
  ['PS-187-2-WT-S', 500, 'J', '50,8', 'WT'],
  ['PS-187-2-YL-S', 500, 'J', '50,8', 'YL'],
  ['3PS-187-2-BK-S', 500, 'D', '50,8', 'BK'],
  ['3PS-187-2-BL-S', 500, 'D', '50,8', 'BL'],
  ['3PS-187-2-BR-S', 500, 'D', '50,8', 'BR'],
  ['3PS-187-2-GR-S', 500, 'D', '50,8', 'GN'],
  ['3PS-187-2-GY-S', 500, 'D', '50,8', 'GY'],
  ['3PS-187-2-OR-S', 500, 'D', '50,8', 'OR'],
  ['3PS-187-2-RD-S', 500, 'D', '50,8', 'RD'],
  ['3PS-187-2-VT-S', 500, 'D', '50,8', 'VT'],
  ['3PS-187-2-WT-S', 500, 'D', '50,8', 'WT'],
  ['3PS-187-2-YL-S', 500, 'D', '50,8', 'YL'],
  ['PS-187-2-WT-S-2', 1000, 'J', '25,4', 'WT'],
  ['PS-187-2-WT-S-3', 1500, 'J', '17,02', 'WT'],
  ['PS-187-2-WT-S-4', 2000, 'J', '12,7', 'WT'],
  ['3PS-187-2-WT-S-4', 2000, 'D', '12,7', 'WT'],
  ['3PS-187-2-WT-S-2', 1000, 'D', '25,4', 'WT'],
  ['PS-187-150-WT', 2500, 'J', '38,1', 'WT'],
  ['PS-187-2-YL', 2500, 'J', '50,8', 'YL'],
  ['3PS-187-2-GR', 5000, 'D', '50,8', 'GN'],
  ['3PS-187-2-WT', 2500, 'D', '50,8', 'WT'],
  ['3PS-187-2-YL', 2500, 'D', '50,8', 'YL'],
  ['PS-187-150-WT-2', 5000, 'J', '19,05', 'WT'],
  ['PS-187-2-WT', 2500, 'J', '50,8', 'WT'],
  ['PS-187-2-WT-2', 5000, 'J', '25,4', 'WT'],
  ['PS-187-2-WT-3', 7500, 'J', '17,02', 'WT'],
  ['PS-187-2-WT-4', 10000, 'J', '12,7', 'WT'],
  ['PS-187-2-YL-2', 5000, 'J', '25,4', 'YL'],
  ['3PS-187-2-WT-2', 5000, 'D', '25,4', 'WT'],
  ['3PS-187-2-WT-3', 7500, 'D', '17,02', 'WT'],
  ['3PS-187-2-WT-4', 10000, 'D', '12,7', 'WT'],
  ['3PS-187-2-YL-4', 10000, 'D', '12,7', 'YL', '15'],
]
const DRUKARKI_187 = '615'
const KODY_187 = kodyRodziny(PS_187, DRUKARKI_187)

export const bradyTHTPermaSleeve187: Product = {
  ...wspolneTHT,
  id: 'brady-ps-187-150-wt-s',
  slug: 'brady-ps-187-150-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 4,76 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 4,76 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 4,76 mm do drukarek Brady i6100, i7100 i i7500: 10 kolorów. PN: PS-187-150-WT-S, 3PS-187-2-BK-S.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 4,76 mm to koszulki termokurczliwe na przewody od 1,57 do 3,81 mm, w dziesięciu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulka 4,76 mm pasuje do przewodów w przedziale 20–10 AWG, czyli 1,57–3,81 mm. Tworzywem jest poliolefina B-342: matowa, trudnopalna, kurcząca się 3:1. Opis nanosi się termotransferem.\n\nRolki występują w siedmiu długościach, od 9,53 do 50,8 mm, przy wysokości koszulki 8,51 mm. Rolka mieści 500–10 000 szt., a numery katalogowe różnią się długością, kolorem, liczbą stron nadruku i liczbą sztuk. Biały i żółty mają wersje jednostronne oraz dwustronne. Osiem pozostałych kolorów występuje wyłącznie z nadrukiem dwustronnym: fioletowy, czerwony, pomarańczowy, szary, zielony, brązowy, niebieski i czarny.\n\nTemperatura robocza nie schodzi poniżej −55 °C i nie przekracza 135 °C. Deklarowane normy to MIL-STD-202 i SAE AS-81531, a uznanie UL odnosi się do UL 224. Wskazana taśma barwiąca: R6600. Koszulki drukują Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-20-to-10-gauge-wire-marking-sleeves-cps-3069432',
  relatedProducts: relatedProducts(KODY_187),
  images: [
    '/images/products/brady/ps-187-150-wt-s.png',
    '/images/products/brady/3ps-187-2-yl-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-187-150-WT-S z rolką koszulek termokurczliwych PermaSleeve Ø 4,76 mm',
    'Pudełko Brady 3PS-187-2-YL-S z rolką żółtych koszulek PermaSleeve Ø 4,76 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty, czarny, niebieski, brązowy, zielony, szary, pomarańczowy, czerwony, fioletowy' },
    { name: 'Średnica koszulki', value: '4,76 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 3,81 mm (20 AWG – 10 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 9,53 / 12,7 / 17,02 / 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 8,51 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_187) },
    ...uwagiZgodnosci(PS_187, DRUKARKI_187),
  ],
  variants: wariantyKoszulek(PS_187, '4,76'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim i liczba sztuk na rolce.\n\nNajkrótsza koszulka ma 9,53 mm, najdłuższa 50,8 mm, a rolki liczą od 500 do 10 000 sztuk.',
    Nadruk: 'Informacja, czy drukuje się jedną stronę koszulki, czy obie.\n\nKolory inne niż biały i żółty występują tylko w wersji dwustronnej.',
    Kolor: 'Kolor koszulki.\n\nW tej średnicy dostępnych jest dziesięć kolorów, w tym fioletowy i brązowy.',
  },
  faq: [
    { question: 'Do jakich przewodów służą koszulki PermaSleeve Ø 4,76 mm?', answer: 'Do przewodów o średnicy od 1,57 do 3,81 mm (20–10 AWG). Koszulka kurczy się w stosunku 3:1.' },
    { question: 'W jakich kolorach są koszulki B-342 Ø 4,76 mm?', answer: 'Biały, żółty, czarny, niebieski, brązowy, zielony, szary, pomarańczowy, czerwony i fioletowy. Kolory inne niż biały i żółty mają nadruk po obu stronach.' },
    { question: 'Które drukarki obsługują koszulki Ø 4,76 mm?', answer: `Rolki drukują ${linkiDrukarek(KODY_187)}. Zalecana taśma barwiąca to R6600.` },
  ],
  applications: ['Oznaczanie przewodów 20–10 AWG', 'Znakowanie kolorystyczne przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Ø 6,35 mm — przewody 2,39–5,46 mm (cps-3069433)
// ---------------------------------------------------------------------------

const PS_250: Wiersz[] = [
  ['PS-250-150-WT-S', 500, 'J', '38,1', 'WT'],
  ['3PS-250-2-BL-S', 500, 'D', '50,8', 'BL'],
  ['3PS-250-2-BR-S', 500, 'D', '50,8', 'BR'],
  ['3PS-250-2-GR-S', 500, 'D', '50,8', 'GN'],
  ['3PS-250-2-GY-S', 500, 'D', '50,8', 'GY'],
  ['3PS-250-2-OR-S', 500, 'D', '50,8', 'OR'],
  ['3PS-250-2-RD-S', 500, 'D', '50,8', 'RD'],
  ['3PS-250-2-VT-S', 500, 'D', '50,8', 'VT'],
  ['3PS-250-2-WT-S', 500, 'D', '50,8', 'WT'],
  ['3PS-250-2-YL-S', 500, 'D', '50,8', 'YL'],
  ['3PS-250-2BK', 500, 'D', '50,8', 'BK'],
  ['PS-250-2-WT-S', 500, 'J', '50,8', 'WT'],
  ['PS-250-2-YL-S', 500, 'J', '50,8', 'YL'],
  ['3PS-250-2-BK-S-2', 1000, 'D', '25,4', 'BK'],
  ['3PS-250-2-WT-S-2', 1000, 'D', '25,4', 'WT'],
  ['PS-250-2-WT-S-2', 1000, 'J', '25,4', 'WT'],
  ['PS-250-2-WT-S-3', 1500, 'J', '17,02', 'WT'],
  ['PS-250-2-WT-S-4', 2000, 'J', '12,7', 'WT'],
  ['PS-250-150-WT', 2500, 'J', '38,1', 'WT'],
  ['3PS-250-2-BK', 2500, 'D', '50,8', 'BK'],
  ['3PS-250-2-WT', 2500, 'D', '50,8', 'WT'],
  ['3PS-250-2-YL', 2500, 'D', '50,8', 'YL'],
  ['PS-250-150-WT-2', 5000, 'J', '19,05', 'WT'],
  ['PS-250-150-YL-2', 5000, 'J', '19,05', 'YL'],
  ['PS-250-2-WT', 2500, 'J', '50,8', 'WT'],
  ['PS-250-2-WT-2', 5000, 'J', '25,4', 'WT'],
  ['PS-250-2-YL-2', 5000, 'J', '25,4', 'YL'],
  ['3PS-250-2-WT-2', 5000, 'D', '25,4', 'WT'],
  ['3PS-250-2-WT-3', 7500, 'D', '17,02', 'WT'],
  ['3PS-250-2-YL-2', 5000, 'D', '25,4', 'YL'],
]
const DRUKARKI_250 = '615'
const KODY_250 = kodyRodziny(PS_250, DRUKARKI_250)

export const bradyTHTPermaSleeve250: Product = {
  ...wspolneTHT,
  id: 'brady-ps-250-150-wt-s',
  slug: 'brady-ps-250-150-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 6,35 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 6,35 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 6,35 mm do drukarek Brady i6100, i7100 i i7500: 16–8 AWG. PN: PS-250-150-WT, 3PS-250-2-WT.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 6,35 mm to koszulki termokurczliwe na przewody od 2,39 do 5,46 mm (16–8 AWG), w dziesięciu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Przewody 16–8 AWG, o średnicy 2,39–5,46 mm, obejmuje koszulka 6,35 mm. Poliolefina B-342 jest matowa, trudnopalna i kurczy się 3:1. Po obkurczeniu opis pozostaje widoczny na izolacji. Nadruk wykonuje się termotransferem.\n\nWysokość koszulki w stanie płaskim to 11,15 mm, a długość mieści się między 12,7 a 50,8 mm. Rolka liczy 500–7500 sztuk. Wersje jednostronne są tylko białe i żółte. Wersje dwustronne dostępne są w dziesięciu kolorach, w tym w czarnym, brązowym i fioletowym. Rodzina obejmuje trzydzieści numerów katalogowych, w tym dziewięć kolorowych wersji dwustronnych po 500 sztuk.\n\nKoszulka toleruje temperatury od −55 °C aż do 135 °C. Ma uznanie UL (UL 224), spełnia RoHS, a ponadto klasa 1 SAE-AMS-DTL-23053/5. Wydruk wykonuje taśma barwiąca R6600. Rolki przyjmują Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-16-to-8-gauge-wire-marking-sleeves-cps-3069433',
  relatedProducts: relatedProducts(KODY_250),
  images: [
    '/images/products/brady/ps-250-150-wt-s.png',
    '/images/products/brady/3ps-250-2-bl-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-250-150-WT-S z rolką koszulek termokurczliwych PermaSleeve Ø 6,35 mm',
    'Pudełko Brady 3PS-250-2-BL-S z rolką niebieskich koszulek PermaSleeve Ø 6,35 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty, czarny, niebieski, brązowy, zielony, szary, pomarańczowy, czerwony, fioletowy' },
    { name: 'Średnica koszulki', value: '6,35 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,39 do 5,46 mm (16 AWG – 8 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 12,7 / 17,02 / 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 11,15 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 7500, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_250) },
    ...uwagiZgodnosci(PS_250, DRUKARKI_250),
  ],
  variants: wariantyKoszulek(PS_250, '6,35'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nRolki mają od 500 do 7500 koszulek, a najdłuższe koszulki liczą 50,8 mm.',
    Nadruk: 'Strony koszulki, na których drukarka umieszcza opis.\n\nWersje jednostronne są tylko białe i żółte.',
    Kolor: 'Kolor koszulki.\n\nCzarne koszulki występują wyłącznie z nadrukiem dwustronnym.',
  },
  faq: [
    { question: 'Jaki przewód mieści koszulka PermaSleeve Ø 6,35 mm?', answer: 'Przewód o średnicy od 2,39 do 5,46 mm, czyli od 16 do 8 AWG. Koszulka kurczy się w stosunku 3:1.' },
    { question: 'Czy w tej średnicy są koszulki czarne?', answer: 'Tak, ale tylko z nadrukiem dwustronnym. Wersje jednostronne występują w kolorze białym i żółtym.' },
    { question: 'Jakie drukarki przyjmują rolki Ø 6,35 mm?', answer: `Rolki przyjmują ${linkiDrukarek(KODY_250)}. Zalecana jest taśma barwiąca R6600.` },
  ],
  applications: ['Oznaczanie przewodów 16–8 AWG', 'Znakowanie grubszych przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Ø 9,53 mm — przewody 3,18–8,13 mm (cps-3069434)
// ---------------------------------------------------------------------------

const PS_375: Wiersz[] = [
  ['PS-375-150W-S', 250, 'J', '38,1', 'WT'],
  ['3PS-375-2-BK-S', 250, 'D', '50,8', 'BK'],
  ['3PS-375-2-BL-S', 250, 'D', '50,8', 'BL'],
  ['3PS-375-2-GR-S', 250, 'D', '50,8', 'GN'],
  ['3PS-375-2-OR-S', 250, 'D', '50,8', 'OR'],
  ['3PS-375-2-RD-S', 250, 'D', '50,8', 'RD'],
  ['3PS-375-2-YL-S', 250, 'D', '50,8', 'YL'],
  ['3PS-375-2W-S', 250, 'D', '50,8', 'WT'],
  ['PS-375-150-WT-S-2', 500, 'J', '19,05', 'WT'],
  ['PS-375-2-WT-S', 250, 'J', '50,8', 'WT'],
  ['PS-375-2-YL-S', 250, 'J', '50,8', 'YL'],
  ['3PS-375-2-YL-S-2', 500, 'D', '25,4', 'YL'],
  ['PS-375-2-WT-S-2', 500, 'J', '25,4', 'WT'],
  ['PS-375-150-WT', 1000, 'J', '38,1', 'WT'],
  ['3PS-375-2-OR', 1000, 'D', '50,8', 'OR'],
  ['3PS-375-2-BK', 1000, 'D', '50,8', 'BK'],
  ['3PS-375-2-RD', 1000, 'D', '50,8', 'RD'],
  ['3PS-375-2-WT', 1000, 'D', '50,8', 'WT'],
  ['3PS-375-2-YL', 1000, 'D', '50,8', 'YL'],
  ['PS-375-150-WT-2', 2000, 'J', '19,05', 'WT'],
  ['PS-375-2-WT', 1000, 'J', '50,8', 'WT'],
  ['PS-375-2-YL', 1000, 'J', '50,8', 'YL'],
  ['3PS-375-2-WT-2', 2000, 'D', '25,4', 'WT'],
  ['3PS-375-2-YL-2', 2000, 'D', '25,4', 'YL'],
  ['PS-375-2-WT-2', 4000, 'J', '25,4', 'WT'],
  ['PS-375-2-WT-4', 4000, 'J', '12,7', 'WT'],
  ['PS-375-2-YL-2', 4000, 'J', '25,4', 'YL'],
  ['3PS-375-2-WT-S-2', 500, 'D', '25,4', 'WT'],
]
const DRUKARKI_375 = '615'
const KODY_375 = kodyRodziny(PS_375, DRUKARKI_375)

export const bradyTHTPermaSleeve375: Product = {
  ...wspolneTHT,
  id: 'brady-ps-375-150w-s',
  slug: 'brady-ps-375-150w-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 9,53 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 9,53 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 9,53 mm do drukarek Brady i6100, i7100 i i7500: 12–4 AWG. PN: PS-375-150-WT, 3PS-375-2-WT.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 9,53 mm to koszulki termokurczliwe na przewody od 3,18 do 8,13 mm (12–4 AWG), w siedmiu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 9,53 mm służy do przewodów 12–4 AWG (3,18–8,13 mm). Wykonano go z poliolefiny B-342 o skurczu 3:1. Tworzywo jest matowe i trudnopalne, a koszulka ma w stanie płaskim 16,38 mm wysokości. Wstęga z koszulkami jest szeroka na 88,65 mm, a opis powstaje termotransferem.\n\nRolki są mniejsze niż przy cieńszych koszulkach: mieszczą 250–4000 sztuk. Koszulki liczą od 12,7 mm do 50,8 mm długości. Rodzina liczy dwadzieścia osiem numerów. Białe i żółte mają także wersje jednostronne. Czarne, niebieskie, zielone, pomarańczowe i czerwone mają nadruk po obu stronach.\n\nDopuszczalne wartości temperatury pracy to −55 °C (minimum) i 135 °C (maksimum). Materiał należy do klasy 1 zdefiniowanej w SAE-AMS-DTL-23053/5. Dodatkowo spełnia MIL-STD-202, a uznanie UL dotyczy UL 224. Nadruk wykonuje taśma R6600. Pasują do nich Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-12-to-4-gauge-wire-marking-sleeves-cps-3069434',
  relatedProducts: relatedProducts(KODY_375),
  images: [
    '/images/products/brady/ps-375-150w-s.png',
    '/images/products/brady/3ps-375-2-gr-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-375-150W-S z rolką koszulek termokurczliwych PermaSleeve Ø 9,53 mm',
    'Pudełko Brady 3PS-375-2-GR-S z rolką zielonych koszulek PermaSleeve Ø 9,53 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty, czarny, niebieski, zielony, pomarańczowy, czerwony' },
    { name: 'Średnica koszulki', value: '9,53 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 3,18 do 8,13 mm (12 AWG – 4 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 12,7 / 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 16,38 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 4000, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_375) },
    ...uwagiZgodnosci(PS_375, DRUKARKI_375),
  ],
  variants: wariantyKoszulek(PS_375, '9,53'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nRolki liczą od 250 do 4000 koszulek, bo koszulki o tej średnicy zajmują więcej miejsca.',
    Nadruk: 'Strony koszulki, które drukarka pokrywa nadrukiem.\n\nTylko białe i żółte koszulki mają wersję jednostronną.',
    Kolor: 'Kolor koszulki.\n\nSiedem kolorów: biały, żółty, czarny, niebieski, zielony, pomarańczowy i czerwony.',
  },
  faq: [
    { question: 'Jaki zakres przewodów obejmuje PermaSleeve Ø 9,53 mm?', answer: 'Przewody o średnicy od 3,18 do 8,13 mm, czyli 12–4 AWG. Koszulka kurczy się w stosunku 3:1.' },
    { question: 'Ile koszulek jest na rolce Ø 9,53 mm?', answer: 'Od 250 do 4000 sztuk, zależnie od długości koszulki i wersji. Najmniej mieszczą rolki z koszulkami o długości 50,8 mm.' },
    { question: 'Jakie drukarki obsługują te koszulki?', answer: `Obsługują je ${linkiDrukarek(KODY_375)}. Zalecana taśma barwiąca to R6600.` },
  ],
  applications: ['Oznaczanie przewodów 12–4 AWG', 'Znakowanie kabli zasilających'],
}

// ---------------------------------------------------------------------------
// Ø 12,7 mm — przewody 4,75–11,43 mm (cps-3069435)
// ---------------------------------------------------------------------------

const PS_500: Wiersz[] = [
  ['PS-500-150-WT-S', 250, 'J', '38,1', 'WT'],
  ['017235', 250, 'D', '50,8', 'BK'],
  ['3PS-500-2-BL-S', 250, 'D', '50,8', 'BL'],
  ['3PS-500-2-BR-S', 250, 'D', '50,8', 'BR'],
  ['3PS-500-2-OR-S', 250, 'D', '50,8', 'OR'],
  ['3PS-500-2-RD-S', 250, 'D', '50,8', 'RD'],
  ['3PS-500-2-WT-S', 250, 'D', '50,8', 'WT'],
  ['3PS-500-2GR', 250, 'D', '50,8', 'GN'],
  ['3PS-500-2YL-S', 250, 'D', '50,8', 'YL'],
  ['PS-500-2-WT-S', 250, 'J', '50,8', 'WT'],
  ['PS-500-2-YL-S', 250, 'J', '50,8', 'YL'],
  ['PS-500-2-WT-S-2', 500, 'J', '25,4', 'WT'],
  ['PS-500-150-WT', 500, 'J', '38,1', 'WT'],
  ['3PS-500-2-WT', 500, 'D', '50,8', 'WT'],
  ['3PS-500-2-YL', 500, 'D', '50,8', 'YL'],
  ['3PS-500-2-RD', 500, 'D', '50,8', 'RD'],
  ['PS-500-2-WT', 500, 'J', '50,8', 'WT'],
  ['PS-500-2-YL', 500, 'J', '50,8', 'YL'],
  ['3PS-500-2-WT-2', 1000, 'D', '25,4', 'WT'],
  ['PS-500-2-WT-2', 1000, 'J', '25,4', 'WT'],
  ['PS-500-150-WT-S-2', 500, 'J', '19,05', 'WT'],
]
const DRUKARKI_500 = '615'
const KODY_500 = kodyRodziny(PS_500, DRUKARKI_500)

export const bradyTHTPermaSleeve500: Product = {
  ...wspolneTHT,
  id: 'brady-ps-500-150-wt-s',
  slug: 'brady-ps-500-150-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 12,7 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 12,7 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 12,7 mm do drukarek Brady i6100, i7100 i i7500: 8–1 AWG. PN: PS-500-150-WT-S, 3PS-500-2-WT.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 12,7 mm to koszulki termokurczliwe na przewody od 4,75 do 11,43 mm (8–1 AWG), w ośmiu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulka 12,7 mm to rozmiar dla przewodów 8–1 AWG, czyli o średnicy z przedziału 4,75–11,43 mm. B-342 jest poliolefiną o skurczu 3:1. Powierzchnia jest matowa, a tworzywo trudnopalne. Nadruk powstaje termotransferem.\n\nW stanie płaskim koszulka ma 21,62 mm wysokości. Długości to 19,05 mm (najkrótsza) i 50,8 mm (najdłuższa), a rolki zawierają 250–1000 sztuk. Wersje jednostronne występują w bieli i żółci. Dwustronne oferowane są w ośmiu kolorach: biały, czarny, niebieski, brązowy, pomarańczowy, czerwony, zielony i żółty.\n\nDolny limit temperatury pracy to −55 °C, górny 135 °C. Materiał spełnia RoHS i został opisany normą UL 224. Zalecana taśma barwiąca: R6600 (i75-R6600, IP-R6606 lub R6606). Koszulki służą do znakowania elektrycznego oraz do oznaczania przewodów i kabli. Rodzina liczy dwadzieścia jeden numerów, a rolki pasują do urządzeń Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-8-to-1-gauge-wire-marking-sleeves-cps-3069435',
  relatedProducts: relatedProducts(KODY_500),
  images: [
    '/images/products/brady/ps-500-150-wt-s.png',
    '/images/products/brady/3ps-500-2-bl-s.png',
  ],
  imageDescriptions: [
    'Pudełko Brady PS-500-150-WT-S z rolką koszulek termokurczliwych PermaSleeve Ø 12,7 mm',
    'Pudełko Brady 3PS-500-2-BL-S z rolką niebieskich koszulek PermaSleeve Ø 12,7 mm do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, czarny, niebieski, brązowy, pomarańczowy, czerwony, zielony, żółty' },
    { name: 'Średnica koszulki', value: '12,7 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 4,75 do 11,43 mm (8 AWG – 1 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość 19,05 / 25,4 / 38,1 / 50,8 mm, wysokość 21,62 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600, IP-R6606, R6606)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_500) },
    ...uwagiZgodnosci(PS_500, DRUKARKI_500),
  ],
  variants: wariantyKoszulek(PS_500, '12,7'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nRolki mają od 250 do 1000 koszulek, a długości sięgają od 19,05 do 50,8 mm.',
    Nadruk: 'Strony koszulki, na których drukarka wykonuje nadruk.\n\nJednostronne są tylko wersje białe i żółte.',
    Kolor: 'Kolor koszulki.\n\nW tej średnicy dostępne są między innymi czarne i brązowe koszulki dwustronne.',
  },
  faq: [
    { question: 'Jaką średnicę przewodu przyjmuje koszulka Ø 12,7 mm?', answer: 'Od 4,75 do 11,43 mm, czyli 8–1 AWG. Po obkurczeniu 3:1 koszulka ściśle obejmuje izolację.' },
    { question: 'Jaka jest wysokość koszulki Ø 12,7 mm w stanie płaskim?', answer: 'Wynosi 21,62 mm. Długość koszulki to 19,05; 25,4; 38,1 lub 50,8 mm, zależnie od wersji.' },
    { question: 'Którymi drukarkami drukuje się koszulki Ø 12,7 mm?', answer: `Drukują nimi ${linkiDrukarek(KODY_500)}. Zalecana taśma barwiąca to R6600.` },
  ],
  applications: ['Oznaczanie przewodów 8–1 AWG', 'Znakowanie przewodów o dużym przekroju'],
}

// ---------------------------------------------------------------------------
// Ø 19,05 mm (cps-3069436); bez 3PS-750-2-WT-S (strona producenta niedostępna)
// ---------------------------------------------------------------------------

const PS_750: Wiersz[] = [
  ['3PS-750-2-BK-S', 100, 'D', '', 'BK'],
  ['3PS-750-2-BL-S', 100, 'D', '', 'BL'],
  ['3PS-750-2-GR-S', 100, 'D', '', 'GN'],
  ['3PS-750-2-OR-S', 100, 'D', '', 'OR'],
  ['3PS-750-2-RD-S', 100, 'D', '', 'RD'],
  ['3PS-750-2-YL-S', 100, 'D', '', 'YL'],
  ['3PS-750-2-WT', 250, 'D', '', 'WT'],
  ['PS-750-2-WT', 250, 'J', '', 'WT'],
  ['PS-750-2-YL', 250, 'J', '', 'YL'],
  ['3PS-750-2-YL', 250, 'D', '', 'YL', '65'],
]
const DRUKARKI_750 = '615'
const KODY_750 = kodyRodziny(PS_750, DRUKARKI_750)

export const bradyTHTPermaSleeve750: Product = {
  ...wspolneTHT,
  id: 'brady-3ps-750-2-bl-s',
  slug: 'brady-3ps-750-2-bl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 19,05 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 19,05 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 19,05 mm do drukarek Brady i6100, i7100 i i7500: 7 kolorów. PN: 3PS-750-2-BK-S, 3PS-750-2-WT, PS-750-2-YL.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 19,05 mm to koszulki termokurczliwe w siedmiu kolorach, z nadrukiem jedno- lub dwustronnym. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 19,05 mm przeznaczono do znakowania przewodów i kabli. Materiał B-342 to poliolefina z funkcją skurczu 3:1: matowa, trudnopalna i ściśle przylegająca do izolacji po ogrzaniu. Opis powstaje termotransferem, a obkurczona koszulka utrzymuje go na przewodzie.\n\nRolka mieści 100 albo 250 koszulek. Po 100 sztuk występuje sześć kolorów z nadrukiem dwustronnym: czarny, niebieski, zielony, pomarańczowy, czerwony i żółty. Po 250 sztuk dostępne są koszulki białe z nadrukiem jedno- i dwustronnym oraz żółte w obu wersjach. Razem to dziesięć numerów katalogowych. Numery różnią się kolorem, liczbą zadrukowanych stron i liczbą sztuk na rolce.\n\nMinimalna temperatura pracy to −55 °C, maksymalna 135 °C. Lista norm obejmuje SAE AS-81531, MIL-STD-202 oraz RoHS, a materiał ma uznanie UL. Do wydruku nadają się Brady i6100, i7100 i i7500; numer 3PS-750-2-YL nie pasuje do i7100.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-6-to-4-0-gauge-wire-marking-sleeves-cps-3069436',
  relatedProducts: relatedProducts(KODY_750),
  images: [
    '/images/products/brady/3ps-750-2-bl-s.png',
    '/images/products/brady/3ps-750-2-wt.png',
  ],
  imageDescriptions: [
    'Pudełko Brady 3PS-750-2-BL-S z rolką niebieskich koszulek termokurczliwych PermaSleeve Ø 19,05 mm do nadruku dwustronnego',
    'Pudełko Brady 3PS-750-2-WT z rolką białych koszulek PermaSleeve Ø 19,05 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, czarny, niebieski, zielony, pomarańczowy, czerwony, żółty' },
    { name: 'Średnica koszulki', value: '19,05 mm' },
    { name: 'Liczba sztuk na rolce', value: '100 / 250, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_750) },
    ...uwagiZgodnosci(PS_750, DRUKARKI_750),
  ],
  variants: wariantyKoszulek(PS_750, '19,05'),
  variantAttributeTooltips: {
    Rozmiar: 'Liczba koszulek na rolce.\n\nKoszulki o tej średnicy sprzedaje się po 100 lub 250 sztuk.',
    Nadruk: 'Strony koszulki, na których drukarka wykonuje opis.\n\nKoszulki z kolorem, poza żółtą i białą, mają nadruk po obu stronach.',
    Kolor: 'Kolor koszulki.\n\nW tej średnicy dostępnych jest siedem kolorów, od białego po czarny.',
  },
  faq: [
    { question: 'Ile koszulek PermaSleeve Ø 19,05 mm mieści rolka?', answer: 'Sto albo dwieście pięćdziesiąt sztuk, zależnie od numeru. Rolki po 100 sztuk mają kolory z nadrukiem dwustronnym.' },
    { question: 'Które numery mają nadruk jednostronny?', answer: 'Nadruk jednostronny mają dwa numery: biały PS-750-2-WT i żółty PS-750-2-YL, oba po 250 sztuk na rolce.' },
    { question: 'Jakie drukarki obsługują koszulki Ø 19,05 mm?', answer: `Większość numerów jest zgodna z drukarkami ${linkiDrukarek(KODY_750)}. Numer 3PS-750-2-YL nie pasuje do [Brady i7100](/produkt/brady-i7100).` },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Znakowanie elektryczne'],
}

// ---------------------------------------------------------------------------
// Ø 25,4 mm — przewody 8,46–24,13 mm (cps-3069437)
// ---------------------------------------------------------------------------

const PS_1000: Wiersz[] = [
  ['3PS-1000-2-BL-S', 100, 'D', '50,8', 'BL'],
  ['3PS-1000-2-GR-S', 100, 'D', '50,8', 'GN'],
  ['3PS-1000-2-OR-S', 100, 'D', '50,8', 'OR'],
  ['3PS-1000-2-RD-S', 100, 'D', '50,8', 'RD'],
  ['3PS-1000-2-WT', 250, 'D', '50,8', 'WT'],
  ['PS-1000-2-WT', 250, 'J', '50,8', 'WT'],
  ['PS-1000-2-YL', 250, 'J', '50,8', 'YL'],
  ['PS-1000-2-RD-2', 500, 'J', '25,4', 'RD'],
  ['PS-1000-2-WT-2', 500, 'J', '25,4', 'WT'],
]
const DRUKARKI_1000 = '615'
const KODY_1000 = kodyRodziny(PS_1000, DRUKARKI_1000)

export const bradyTHTPermaSleeve1000: Product = {
  ...wspolneTHT,
  id: 'brady-3ps-1000-2-bl-s',
  slug: 'brady-3ps-1000-2-bl-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 25,4 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 25,4 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 25,4 mm do Brady i6100, i7100 i i7500: do 24,13 mm. PN: 3PS-1000-2-BL-S, PS-1000-2-WT, PS-1000-2-YL.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 25,4 mm to koszulki termokurczliwe na grube przewody od 8,46 do 24,13 mm (2 AWG – 500 MCM). Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 25,4 mm przeznaczono dla grubych przewodów i kabli, od 2 AWG do 500 MCM (8,46–24,13 mm). Materiałem jest trudnopalna poliolefina B-342 o wykończeniu matowym; skurcz wynosi 3:1. Opis powstaje w technice termotransferu.\n\nPo rozłożeniu koszulka ma 42,16 mm wysokości. Długość to 50,8 albo 25,4 mm. Rolki zawierają 100, 250 lub 500 sztuk. Nadruk dwustronny mają koszulki niebieskie, zielone, pomarańczowe, czerwone i białe. Jednostronne są koszulki białe i żółte oraz czerwona o długości 25,4 mm. Rodzina obejmuje dziewięć numerów katalogowych.\n\nMateriał zachowuje funkcje między −55 a 135 °C. Wymienione normy to SAE AS-81531 i UL 224 (uznanie UL); koszulka odpowiada też MIL-STD-202. Zalecane taśmy barwiące to R6600 oraz R6700-WT, w wersjach i75, IP i bez przedrostka. Rolki obsługują Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-2-gauge-to-2413-mm-diameter-wire-marking-sleeves-cps-3069437',
  relatedProducts: relatedProducts(KODY_1000),
  images: [
    '/images/products/brady/3ps-1000-2-bl-s.png',
    '/images/products/brady/ps-1000-2-wt.png',
  ],
  imageDescriptions: [
    'Rolka Brady 3PS-1000-2-BL-S z niebieskimi koszulkami termokurczliwymi PermaSleeve Ø 25,4 mm na nośniku z perforacją',
    'Rolka Brady PS-1000-2-WT z białymi koszulkami PermaSleeve Ø 25,4 mm i wysuniętym paskiem nośnika',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'niebieski, zielony, pomarańczowy, czerwony, biały, żółty' },
    { name: 'Średnica koszulki', value: '25,4 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 8,46 do 24,13 mm (2 AWG – 500 MCM)' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 / 25,4 mm, wysokość 42,16 mm' },
    { name: 'Liczba sztuk na rolce', value: '100 / 250 / 500, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6600, R6700-WT (i75-R6600, i75-R6700-WT, IP-R6600, IP-R6700-WT)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_1000) },
    ...uwagiZgodnosci(PS_1000, DRUKARKI_1000),
  ],
  variants: wariantyKoszulek(PS_1000, '25,4'),
  variantAttributeTooltips: {
    Rozmiar: 'Długość koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nTak duże koszulki trafiają na rolki po 100–500 sztuk.',
    Nadruk: 'Strony koszulki, na których drukarka wykonuje opis.\n\nW tej średnicy nadruk jednostronny mają koszulki białe, żółte i czerwone.',
    Kolor: 'Kolor koszulki.\n\nDostępne są kolory niebieski, zielony, pomarańczowy, czerwony, biały i żółty.',
  },
  faq: [
    { question: 'Na jak grube przewody pasuje koszulka PermaSleeve Ø 25,4 mm?', answer: 'Na przewody o średnicy od 8,46 do 24,13 mm, co odpowiada zakresowi od 2 AWG do 500 MCM.' },
    { question: 'Jaką taśmą barwiącą drukuje się te koszulki?', answer: 'Zalecane są taśmy z serii R6600 i R6700-WT.' },
    { question: 'Jakie drukarki obsługują rolki Ø 25,4 mm?', answer: `Rolki obsługują ${linkiDrukarek(KODY_1000)}.` },
  ],
  applications: ['Oznaczanie grubych przewodów i kabli', 'Znakowanie przewodów od 2 AWG do 500 MCM'],
}

// ---------------------------------------------------------------------------
// Ø 38,1 mm — przewody 12,7–36,83 mm (cps-3069438)
// ---------------------------------------------------------------------------

const PS_1500: Wiersz[] = [
  ['3PS-1500-2-BK-S', 100, 'D', '', 'BK'],
  ['3PS-1500-2-BL-S', 100, 'D', '', 'BL'],
  ['3PS-1500-2-OR-S', 100, 'D', '', 'OR'],
  ['3PS-1500-2-YL-S', 100, 'D', '', 'YL'],
  ['PS-1500-2-YL-S', 100, 'J', '', 'YL'],
  ['3PS-1500-2-WT', 250, 'D', '', 'WT'],
  ['3PS-1500-2-YL', 250, 'D', '', 'YL'],
  ['PS-1500-2-WT', 250, 'J', '', 'WT'],
]
const DRUKARKI_1500 = '615'
const KODY_1500 = kodyRodziny(PS_1500, DRUKARKI_1500)

export const bradyTHTPermaSleeve1500: Product = {
  ...wspolneTHT,
  id: 'brady-3ps-1500-2-bk-s',
  slug: 'brady-3ps-1500-2-bk-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 38,1 mm na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-342 Ø 38,1 mm — koszulki do i6100, i7100',
  seoDescription: 'Koszulki termokurczliwe Brady PermaSleeve B-342 Ø 38,1 mm do Brady i6100, i7100 i i7500: do 36,83 mm. PN: 3PS-1500-2-BK-S, PS-1500-2-WT, 3PS-1500-2-WT.',
  shortDescription: 'Brady PermaSleeve B-342 Ø 38,1 mm to koszulki termokurczliwe na przewody o dużym przekroju, od 12,7 do 36,83 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Rozmiar 38,1 mm obsługuje kable o średnicy 12,7–36,83 mm, czyli od 300 do 2000 MCM. Materiał B-342 jest poliolefiną, która kurczy się 3:1. Tworzywo ma wykończenie matowe i jest trudnopalne. Nadruk wykonuje się termotransferem, a pole koszulki ma 61,8 mm wysokości.\n\nW rolce jest 100 albo 250 koszulek, razem osiem numerów katalogowych. Czarna koszulka występuje tylko z nadrukiem dwustronnym. Po 100 sztuk mają koszulki dwustronne: czarna, niebieska, pomarańczowa i żółta, oraz jednostronna żółta. Po 250 sztuk mają koszulki biała i żółta dwustronne oraz biała jednostronna.\n\nGranice temperatury pracy: −55 °C oraz 135 °C. Norma UL 224 i uznanie UL dotyczą całej rodziny; materiał spełnia też MIL-STD-202 oraz klasa 1 według SAE-AMS-DTL-23053/5. Zalecana taśma barwiąca to R6700-WT. Drukuje je Brady i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-permasleeve-polyolefin-1270-mm-to-3556-mm-diameter-wire-marking-sleeves-cps-3069438',
  relatedProducts: relatedProducts(KODY_1500),
  images: [
    '/images/products/brady/3ps-1500-2-bk-s.png',
    '/images/products/brady/ps-1500-2-wt.png',
  ],
  imageDescriptions: [
    'Pudełko Brady 3PS-1500-2-BK-S z rolką czarnych koszulek termokurczliwych PermaSleeve Ø 38,1 mm',
    'Pudełko Brady PS-1500-2-WT z rolką białych koszulek PermaSleeve Ø 38,1 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'czarny, niebieski, pomarańczowy, żółty, biały' },
    { name: 'Średnica koszulki', value: '38,1 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 12,7 do 36,83 mm (300 MCM – 2000 MCM)' },
    { name: 'Wymiary etykiety', value: 'wysokość 61,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '100 / 250, zależnie od wersji' },
    { name: 'Normy', value: NORMY },
    { name: 'Zalecana taśma barwiąca', value: 'R6700-WT (i75-R6700-WT, IP-R6700-WT)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_1500) },
    ...uwagiZgodnosci(PS_1500, DRUKARKI_1500),
  ],
  variants: wariantyKoszulek(PS_1500, '38,1'),
  variantAttributeTooltips: {
    Rozmiar: 'Liczba koszulek na rolce.\n\nTak duże koszulki sprzedaje się po 100 lub 250 sztuk.',
    Nadruk: 'Strony koszulki, na których drukarka wykonuje opis.\n\nNadruk jednostronny mają koszulki biała i żółta.',
    Kolor: 'Kolor koszulki.\n\nW tej średnicy są koszulki czarne, niebieskie, pomarańczowe, żółte i białe.',
  },
  faq: [
    { question: 'Do jakich przewodów służy koszulka PermaSleeve Ø 38,1 mm?', answer: 'Do przewodów o średnicy od 12,7 do 36,83 mm, czyli od 300 do 2000 MCM.' },
    { question: 'Jaka taśma barwiąca pasuje do koszulek Ø 38,1 mm?', answer: 'Zalecana jest taśma R6700-WT w wersji i75-R6700-WT albo IP-R6700-WT.' },
    { question: 'Czy koszulkę Ø 38,1 mm wydrukuje Brady i6100?', answer: `Rolki z tą średnicą obsługują ${linkiDrukarek(KODY_1500)}.` },
  ],
  applications: ['Oznaczanie przewodów 300–2000 MCM', 'Znakowanie kabli o dużej średnicy'],
}

export const bradyTHTPermaSleeve: Product[] = [
  bradyTHTPermaSleeve094,
  bradyTHTPermaSleeve125,
  bradyTHTPermaSleeve187,
  bradyTHTPermaSleeve250,
  bradyTHTPermaSleeve375,
  bradyTHTPermaSleeve500,
  bradyTHTPermaSleeve750,
  bradyTHTPermaSleeve1000,
  bradyTHTPermaSleeve1500,
]

export const bradyTHTPermaSleeveSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-ps-094-150-wt-s': 'przewody',
  'brady-ps-125-150w-s': 'przewody',
  'brady-ps-187-150-wt-s': 'przewody',
  'brady-ps-250-150-wt-s': 'przewody',
  'brady-ps-375-150w-s': 'przewody',
  'brady-ps-500-150-wt-s': 'przewody',
  'brady-3ps-750-2-bl-s': 'przewody',
  'brady-3ps-1000-2-bl-s': 'przewody',
  'brady-3ps-1500-2-bk-s': 'przewody',
}
