import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Etykiety Brady na płytki drukowane i do elektroniki (poliimid, poliester, wersje rozpraszające ładunki ESD) na rolkach z gilzą 76 mm
// do drukarek i6100, i7100 i i7500. Jedna karta na materiał (B-xxx) z brady.eu, PN jako warianty. 14.11.2026.

// Wymiar z danych producenta (np. '50.80') na zapis polski ('50,8').
const mm = (v: string) => String(parseFloat(v)).replace('.', ',')
const sztuk = (n: string) => (Number(n) >= 10000 ? `${Number(n) / 1000} 000` : n)
const wym = (w: string, h: string) => `${mm(w)} × ${mm(h)}`
// Wartość atrybutu wariantu ma się mieścić w 28 znakach; przy najdłuższych zapisach pomijamy jednostkę.
const rozmiar = (w: string, h: string, n: string) => {
  const pelny = `${wym(w, h)} mm, ${sztuk(n)} szt.`
  return pelny.length > 28 ? `${wym(w, h)}, ${sztuk(n)} szt.` : pelny
}

// Kod zgodności z danych producenta: 6 = i6100, 1 = i7100, 5 = i7500.
type Kod = '615' | '-15' | '-1-'
// [PN, szerokość, wysokość, sztuk, rzędów na rolce, zgodność, 'P' = opakowanie zamiast pojedynczej rolki]
type Wiersz = [string, string, string, string, string, Kod, 'P'?]

const NAZWY_DRUKAREK: Record<Kod, string> = { '615': 'i6100, i7100, i7500', '-15': 'i7100, i7500', '-1-': 'i7100' }
const ID_DRUKAREK: Record<string, string> = { i6100: 'brady-i6100', i7100: 'brady-i7100', i7500: 'brady-i7500' }

// Drukarki zgodne z co najmniej jednym numerem karty, w kolejności i6100, i7100, i7500.
const sumaDrukarek = (wiersze: Wiersz[]) => {
  const zbior = new Set(wiersze.flatMap((w) => NAZWY_DRUKAREK[w[5]].split(', ')))
  return ['i6100', 'i7100', 'i7500'].filter((d) => zbior.has(d))
}
const zgodneDrukarki = (wiersze: Wiersz[]) => sumaDrukarek(wiersze).join(', ')
// Karta wymienia tylko drukarki, do których pasuje któryś z jej numerów (przy trzech zostaje wartość z wspolneTHT).
const powiazane = (wiersze: Wiersz[]): Pick<Product, 'relatedProducts'> => {
  const drukarki = sumaDrukarek(wiersze)
  return drukarki.length === 3 ? {} : { relatedProducts: drukarki.map((d) => ID_DRUKAREK[d]) }
}
const uwagiZgodnosci = (wiersze: Wiersz[]) => {
  const grupy = (['-15', '-1-'] as Kod[]).map((kod) => ({ kod, numery: wiersze.filter((w) => w[5] === kod).map((w) => w[0]) })).filter((g) => g.numery.length)
  if (!grupy.length) return []
  const bezWszystkich = wiersze.every((w) => w[5] !== '615')
  if (bezWszystkich) return []
  const zdania = grupy.map((g) =>
    g.kod === '-15'
      ? `Numery ${g.numery.join(', ')} nie mają i6100 na liście zgodnych drukarek; pasują do i7100 i i7500.`
      : `Numer ${g.numery.join(', ')} pasuje tylko do i7100.`,
  )
  return [{ name: 'Uwagi o zgodności', value: `${zdania.join(' ')} Pozostałe numery pasują do wszystkich trzech drukarek.` }]
}
const opakowania = (wiersze: Wiersz[]) => {
  const numery = wiersze.filter((w) => w[6] === 'P').map((w) => w[0])
  if (!numery.length) return []
  const tekst = numery.length === 1 ? `Numer ${numery[0]} to opakowanie, a nie pojedyncza rolka` : `Numery ${numery.join(', ')} to opakowania, a nie pojedyncze rolki`
  return [{ name: 'Opakowanie', value: `${tekst}; liczba sztuk dotyczy całego opakowania.` }]
}
const listaSztuk = (wiersze: Wiersz[]) =>
  Array.from(new Set(wiersze.map((w) => Number(w[3])))).sort((a, b) => a - b).map((n) => sztuk(String(n))).join(' / ')

// Warianty: kolumna Rozmiar, opcjonalnie Rzędów i Drukarki (gdy część numerów nie pasuje do i6100).
const warianty = (wiersze: Wiersz[], rodzaj: string, opcje: { rzedy?: boolean; drukarki?: boolean } = {}) =>
  wiersze.map(([pn, w, h, szt, rzedy, kod, opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${rodzaj} ${wym(w, h)} mm, ${sztuk(szt)} szt.${opak ? ' w opakowaniu' : ''}`,
    attributes: {
      Rozmiar: rozmiar(w, h, szt),
      ...(opcje.rzedy ? { Rzędów: rzedy } : {}),
      ...(opcje.drukarki ? { Drukarki: NAZWY_DRUKAREK[kod] } : {}),
    },
    availability: 'unavailable' as const,
  }))

const TOOLTIP_ROZMIAR = (min: string, max: string) =>
  `Szerokość i wysokość jednej etykiety oraz liczba sztuk na rolce.\n\nNajmniejsza etykieta ma ${min} mm, a największa ${max} mm.`
const TOOLTIP_DRUKARKI =
  'Drukarki Brady, do których pasuje dany numer.\n\nNumery z i6100 pasują do wszystkich trzech drukarek, pozostałe tylko do i7100 i i7500.'

// ---------------------------------------------------------------------------
// Biały błyszczący poliimid B-797 (cps-4358222)
// ---------------------------------------------------------------------------

const POLIIMID_797: Wiersz[] = [
  ['THT-97-797-10', '12.70', '5.08', '10000', '1', '-15'],
  ['THT-38-797-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-11-797-10', '6.35', '6.35', '10000', '12', '615'],
  ['THT-12-797-10', '12.70', '11.10', '10000', '5', '615'],
  ['THT-47-797-10', '16.51', '5.08', '10000', '1', '-15'],
  ['THT-211-797-10', '12.70', '12.70', '5000', '1', '-15', 'P'],
  ['THT-14-797-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-46-797-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-1-797-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-42-797-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-2-797-10', '22.86', '6.35', '10000', '3', '615'],
  ['THT-49-797-10', '22.86', '6.35', '10000', '1', '615'],
  ['THT-103-797-10', '25.40', '6.35', '10000', '1', '615'],
  ['THTHD-70-797-12', '6.35', '6.35', '12000', '1', '-15'],
  ['THT-60-797-10', '38.10', '3.18', '10000', '1', '615'],
  ['THT-13-797-10', '31.75', '6.35', '10000', '2', '615'],
  ['THT-40-797-10', '34.93', '6.35', '10000', '2', '615'],
  ['THT-43-797-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-44-797-10', '34.93', '6.35', '10000', '1', '615'],
  ['THT-4-797-10', '38.10', '6.35', '10000', '2', '615'],
  ['THT-45-797-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-15-797-2.5', '50.80', '6.35', '2500', '1', '615'],
  ['THT-70-797-20', '6.35', '6.35', '20000', '7', '615'],
  ['THT-71-797-20', '8.00', '8.00', '20000', '6', '615'],
  ['THT-58-797-10', '25.40', '9.53', '10000', '1', '615'],
]

export const bradyTHTPoliimid797: Product = {
  ...wspolneTHT,
  id: 'brady-tht-11-797-10',
  slug: 'brady-tht-11-797-10',
  updatedAt: '2026-11-15',
  name: 'Białe błyszczące etykiety poliimidowe na płytki drukowane Brady B-797 na rolce 76 mm',
  seoTitle: 'Brady B-797 — etykiety poliimidowe na płytki, i6100, i7100',
  seoDescription: 'Białe etykiety poliimidowe Brady B-797 do drukarek i6100, i7100 i i7500: mycie po lutowaniu, do 300 °C. PN: THT-11-797-10, THT-38-797-10, THT-70-797-20.',
  shortDescription: 'Brady B-797 to biały, błyszczący poliimid do znakowania płytek drukowanych, w 25 numerach wykrojonych. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-797 to biały poliimid z połyskiem o grubości 0,104 mm, używany do znakowania płytek drukowanych, komponentów i sprzętu. Trwały klej akrylowy opracowano pod kątem skrajnie ostrego mycia i środków czyszczących. Wzmocniona warstwa wierzchnia znosi wielokrotne mycie w trudnych warunkach, a nadruk się nie rozmazuje. Czytelność nadruku zapewnia się bez reflow i bez wstępnego podgrzewania.\n\nW karcie jest 25 numerów. Etykiety kwadratowe o boku 6,35 mm występują w trzech wersjach: 12 000 sztuk w jednym rzędzie, 10 000 w dwunastu rzędach i 20 000 w siedmiu. Takie same 20 000 sztuk mają etykiety 8 × 8 mm. Najszersza etykieta mierzy 50,8 mm i jest pakowana po 2500 sztuk. Numer THT-211-797-10 jest opakowaniem 10 000 etykiet 12,7 × 12,7 mm, zawierającym rolki po 5000 sztuk.\n\nWartości graniczne temperatury wynoszą −80 °C i 300 °C. Etykieta jest odporna na ścieranie, chemikalia, korozję, ciepło oraz wilgoć. Spełnia MIL-STD-202G, ma znak UL Recognised i jest wolna od dibutylocyny oraz dioktylocyny. Do nadruku zaleca się taśmę R6306 (seria R6300), a w i7500 i75-R6306; dla numeru THT-211-797-10 podano R6000HF.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-glossy-white-2-mil-polyimide-circuit-board-labels-cps-4358222',
  images: [
    '/images/products/brady/tht-11-797-10.png',
    '/images/products/brady/tht-97-797-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych Brady THT-11-797-10 6,35 × 6,35 mm z odwiniętym końcem',
    'Rolka wąskich białych etykiet poliimidowych Brady THT-97-797-10 12,7 × 5,08 mm',
  ],
  ...powiazane(POLIIMID_797),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-797' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika w trudnych warunkach' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, ciepło, wilgoć, rozpuszczalniki' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 50,8 mm, wysokość od 3,18 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_797)}, zależnie od wersji` },
    { name: 'Opakowanie', value: 'Numer THT-211-797-10 to opakowanie 10 000 etykiet, z rolkami po 5000 sztuk.' },
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K), bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'R6306 (seria R6300); do i7500: i75-R6306; THT-211-797-10: R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_797) },
    ...uwagiZgodnosci(POLIIMID_797),
  ],
  variants: warianty(POLIIMID_797, 'biała etykieta poliimidowa B-797', { rzedy: true, drukarki: true }).map((v) =>
    v.partNumber === 'THT-211-797-10'
      ? { ...v, name: 'Brady THT-211-797-10 — biała etykieta poliimidowa B-797 12,7 × 12,7 mm, 5000 szt. na rolce, 10 000 szt. w opakowaniu' }
      : v,
  ),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '50,8 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 6,35 × 6,35 mm leżą w jednym, siedmiu albo dwunastu rzędach.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Czy etykiety B-797 trzeba wygrzewać przed lutowaniem?', answer: 'Nie. Materiał nie wymaga reflow ani wstępnego podgrzewania, aby nadruk był czytelny. Wzmocniona warstwa wierzchnia znosi też wielokrotne mycie płytek.' },
    { question: 'Do jakiego montażu pasuje materiał B-797?', answer: 'Do technologii SMT i THT, na stronie górnej i dolnej płytki. Etykiety nakleja się po zakończeniu procesu.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-797?', answer: 'Zaleca się R6306 z serii R6300, a do i7500 oznaczenie i75-R6306. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500); część numerów nie ma i6100, co opisano w uwagach o zgodności.' },
  ],
  applications: ['Znakowanie płytek drukowanych po montażu SMT i THT', 'Oznaczanie komponentów i sprzętu', 'Płytki poddawane wielokrotnemu myciu w trudnych warunkach'],
}

// ---------------------------------------------------------------------------
// Błyszczący poliimid ESD B-768 (cps-4363570); cztery numery z kolumną materiału B-718
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk, rzędów, zgodność, 'P'] + materiał
const POLIIMID_768: Wiersz[] = [
  ['THT-38-768-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-97-768-10', '12.70', '5.08', '10000', '1', '615'],
  ['THT-70-768-20', '6.35', '6.35', '20000', '7', '615'],
  ['176358', '22.86', '6.35', '10000', '3', '615'],
  ['THT-49-768-10', '22.86', '6.35', '10000', '1', '615'],
  ['THT-47-768-10', '16.51', '5.08', '10000', '1', '615'],
  ['THT-12-768-10', '12.70', '11.10', '10000', '5', '615'],
  ['THT-1-768-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-46-768-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-42-718-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-42-768-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-43-768-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-44-768-10', '34.93', '6.35', '10000', '1', '615'],
  ['THT-103-718-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-103-768-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-45-718-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-45-768-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-29-768-10', '31.75', '9.53', '10000', '2', '615'],
  ['THT-3-768-10', '25.40', '9.53', '10000', '3', '615'],
  ['THT-4-768-10', '38.10', '6.35', '10000', '2', '615'],
  ['THT-58-768-10', '25.40', '9.53', '10000', '1', '615'],
  ['THT-5-768-10', '25.40', '12.70', '10000', '3', '615'],
  ['THT-59-718-10', '25.40', '12.70', '10000', '1', '615', 'P'],
  ['THT-71-768-20', '8.00', '8.00', '20000', '6', '615'],
  ['THT-72-768-10', '44.45', '6.35', '10000', '1', '615'],
  ['THT-48-768-10', '50.80', '6.35', '10000', '1', '615'],
]
const MATERIAL_B718 = ['THT-42-718-10', 'THT-103-718-10', 'THT-45-718-10', 'THT-59-718-10']

export const bradyTHTPoliimid768: Product = {
  ...wspolneTHT,
  id: 'brady-tht-38-768-10',
  slug: 'brady-tht-38-768-10',
  name: 'Błyszczące etykiety poliimidowe ESD Brady UltraTemp B-768 na rolce 76 mm',
  seoTitle: 'Brady B-768 — poliimid ESD na płytki do i6100, i7100, i7500',
  seoDescription: 'Błyszczące etykiety poliimidowe Brady UltraTemp B-768 do i6100, i7100 i i7500: rozpraszają ładunki ESD, do 300 °C. PN: THT-38-768-10, THT-70-768-20, 176358.',
  shortDescription: 'Brady UltraTemp B-768 to cienki, błyszczący poliimid z klejem rozpraszającym ładunki elektrostatyczne, w 26 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'UltraTemp B-768 to cienki poliimid o grubości 0,078 mm, w kolorze białym, z połyskiem. Zarówno klej, jak i podkład odprowadzają ładunki elektrostatyczne. Klej ma rezystywność powierzchniową od 10⁴ do 10¹¹ Ω, zgodnie z zaleceniem ANSI/ESD S541-2008. Wzmocniona warstwa wierzchnia wytrzymuje powtarzane mycie. Reflow ani podgrzewanie nie są potrzebne, żeby nadruk był czytelny. Etykiety znakują płytki oraz komponenty.\n\nRodzina liczy 26 numerów. Rolki z kwadratami 6,35 mm mają po 20 000 sztuk w siedmiu pasmach, a najszersza liczy 50,8 mm szerokości. Cztery numery (THT-42-718-10, THT-103-718-10, THT-45-718-10 oraz THT-59-718-10) mają materiał B-718; ostatni z nich to opakowanie 10 000 sztuk.\n\nTemperatura pracy mieści się między −80 a 300 °C. Etykiety znoszą korozję, wilgoć, chemikalia i ścieranie. Znak UL Recognised w zakresie UL 969 dotyczy nadruku taśmami R6300 albo bezhalogenowymi R6000, a zgodność z MIL-STD-202G obejmuje metodę 215K. Do drukowania zaleca się taśmę R6302; w i7500 stosuje się i75-R6302.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-glossy-electrostatic-dissipative-1-mil-polyimide-circuit-board-labels-cps-4363570',
  images: [
    '/images/products/brady/tht-38-768-10.png',
    '/images/products/brady/tht-103-768-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych Brady THT-38-768-10 9,53 × 9,53 mm w siedmiu rzędach',
    'Rolka białych etykiet poliimidowych Brady THT-103-768-10 25,4 × 6,35 mm odwinięta pod kątem',
  ],
  ...powiazane(POLIIMID_768),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-768; cztery numery z materiałem B-718' },
    { name: 'Typ materiału', value: 'poliimid rozpraszający ładunki elektrostatyczne (ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, rozpraszający ładunki elektrostatyczne' },
    { name: 'Grubość', value: '0,078 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 50,8 mm, wysokość od 4,75 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_768)}, zależnie od wersji` },
    ...opakowania(POLIIMID_768),
    { name: 'Normy', value: 'UL Recognised (UL 969, plik MH17154) przy nadruku taśmami R6300 i R6000 bezhalogenowymi; MIL-STD-202G (metoda 215K); ANSI/ESD S541-2008 (rezystywność kleju od 10⁴ do 10¹¹ Ω)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6302 (seria R6300); do i7500: i75-R6302' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_768) },
  ],
  variants: POLIIMID_768.map(([pn, w, h, szt, rzedy, , opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliimidowa ESD ${MATERIAL_B718.includes(pn) ? 'B-718' : 'B-768'} ${wym(w, h)} mm, ${sztuk(szt)} szt.${opak ? ' w opakowaniu' : ''}`,
    attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy, Materiał: MATERIAL_B718.includes(pn) ? 'B-718' : 'B-768' },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '50,8 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajdrobniejsze etykiety leżą w siedmiu rzędach, a długie paski w jednym.',
    Materiał: 'Oznaczenie materiału Brady podane przy numerze.\n\nWiększość numerów to B-768, a cztery mają oznaczenie B-718.',
  },
  faq: [
    { question: 'Co znaczy, że etykiety B-768 rozpraszają ładunki?', answer: 'Klej i podkład odprowadzają ładunki elektrostatyczne zamiast je gromadzić. Rezystywność powierzchniowa kleju mieści się w zakresie od 10⁴ do 10¹¹ Ω, zalecanym w ANSI/ESD S541-2008.' },
    { question: 'Do jakiego montażu pasuje materiał B-768?', answer: 'Do SMT i THT, na stronie górnej i dolnej płytki, także z elementami wrażliwymi na ESD. Etykiety nakleja się po zakończeniu procesu.' },
    { question: 'Jaką taśmą drukować etykiety B-768?', answer: 'Zaleca się R6302 z serii R6300, a do i7500 i75-R6302. Znak UL 969 obowiązuje przy taśmach R6300 i bezhalogenowych R6000. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Etykiety na płytkach drukowanych z podzespołami wrażliwymi na ESD', 'Znakowanie komponentów', 'Płytki myte wielokrotnie w ostrych warunkach'],
}

// ---------------------------------------------------------------------------
// Matowy biały poliimid B-729 (cps-4392542)
// ---------------------------------------------------------------------------

const POLIIMID_729: Wiersz[] = [
  ['THT-104-729-20', '8.00', '4.50', '20000', '6', '615'],
  ['THT-38-729-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-15-729-2.5', '50.80', '6.35', '2500', '1', '615'],
  ['THT-96-729-10', '12.70', '6.99', '10000', '4', '615'],
  ['THT-97-729-10', '12.70', '5.08', '10000', '1', '615'],
  ['132505', '76.20', '6.35', '2500', '1', '615'],
  ['THT-14-729-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-47-729-10', '16.51', '5.08', '10000', '1', '615'],
  ['THT-60-729-10', '38.10', '3.18', '10000', '1', '615'],
  ['THT-1-729-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-46-729-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-43-729-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-103-729-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-45-729-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-40-729-10', '34.93', '6.35', '10000', '2', '615'],
  ['THT-70-729-20', '6.35', '6.35', '20000', '7', '615'],
  ['132503', '50.80', '6.35', '10000', '1', '615'],
  ['THT-59-729-10', '25.40', '12.70', '10000', '1', '615', 'P'],
]

export const bradyTHTPoliimid729: Product = {
  ...wspolneTHT,
  id: 'brady-tht-104-729-20',
  slug: 'brady-tht-104-729-20',
  name: 'Matowe białe etykiety poliimidowe Brady UltraTemp B-729 na rolce 76 mm',
  seoTitle: 'Brady B-729 — matowy poliimid na płytki, i6100, i7100, i7500',
  seoDescription: 'Matowe białe etykiety poliimidowe Brady UltraTemp B-729 do i6100, i7100 i i7500: lutowanie na fali, 0,086 mm. PN: THT-104-729-20, THT-38-729-10, THT-1-729-10.',
  shortDescription: 'Brady UltraTemp B-729 to biały, matowy poliimid o niskim profilu do płytek drukowanych, w 18 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-729 to matowy, biały poliimid o niskim profilu, gruby na 0,086 mm. Etykieta oznacza płytki drukowane, komponenty i urządzenia. Dobrze znosi ostre topniki, lutowanie na fali i wszystkie powszechne metody czyszczenia. Klej to trwały akryl. Po zakończeniu procesu można jej używać przy montażu SMT oraz THT, z obu stron płytki.\n\nRodzina ma 18 numerów. Rolka etykiet 8 × 4,5 mm liczy 20 000 sztuk w sześciu rzędach. Taką samą liczbę sztuk mają kwadraty 6,35 mm, ale w siedmiu rzędach. Najszersza etykieta (76,2 mm) występuje po 2500 sztuk na rolce. Opakowanie THT-59-729-10 zawiera 10 000 sztuk w formacie 25,4 × 12,7 mm.\n\nDolna granica pracy to −70 °C, górna 300 °C. UV, warunki atmosferyczne, wilgoć, korozja, chemikalia i ścieranie nie niszczą folii. Materiał ma wpis UL Recognised. Nadruk wykonuje się taśmą R6002 z serii R6000HF, a w i7500 taśmą i75-R6002.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-white-1-mil-polyimide-circuit-board-labels-cps-4392542',
  images: [
    '/images/products/brady/tht-104-729-20.png',
    '/images/products/brady/tht-15-729-2-5.png',
  ],
  imageDescriptions: [
    'Rolka matowych białych etykiet poliimidowych Brady THT-104-729-20 8 × 4,5 mm z odwiniętym paskiem',
    'Rolka matowych białych etykiet poliimidowych Brady THT-15-729-2.5 50,8 × 6,35 mm',
  ],
  ...powiazane(POLIIMID_729),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-729' },
    { name: 'Typ materiału', value: 'poliimid o niskim profilu, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,086 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, lutowanie na fali' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 76,2 mm, wysokość od 3,18 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_729)}, zależnie od wersji` },
    ...opakowania(POLIIMID_729),
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_729) },
  ],
  variants: warianty(POLIIMID_729, 'biała matowa etykieta poliimidowa B-729', { rzedy: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '76,2 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajdrobniejsze etykiety leżą w siedmiu rzędach, a paski 50,8 i 76,2 mm w jednym.',
  },
  faq: [
    { question: 'Czym B-729 różni się od innych białych poliimidów?', answer: 'Ma matowe wykończenie i niski profil, bo folia ma 0,086 mm. Materiał opisano jako odporny na ostre topniki, lutowanie na fali oraz powszechne metody czyszczenia.' },
    { question: 'Na której stronie płytki można naklejać etykiety B-729?', answer: 'Na górnej i dolnej, przy montażu SMT i THT. Etykiety nakleja się po zakończeniu procesu.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-729?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 i75-R6002. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie płytek drukowanych', 'Znakowanie komponentów i urządzeń', 'Płytki lutowane na fali'],
}

// ---------------------------------------------------------------------------
// Matowy poliimid ESD B-719 (cps-4363569)
// ---------------------------------------------------------------------------

const POLIIMID_719: Wiersz[] = [
  ['THT-38-719-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-97-719-10', '12.70', '5.08', '10000', '1', '615'],
  ['134318', '6.35', '6.35', '20000', '7', '615'],
  ['THT-16-719-2.5', '76.20', '6.35', '2500', '1', '615'],
  ['THT-2-719-10', '22.86', '6.35', '10000', '3', '615'],
  ['THT-49-719-10', '22.86', '6.35', '10000', '1', '615'],
  ['THT-14-719-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-47-719-10', '16.51', '5.08', '10000', '1', '615'],
  ['THT-12-719-10', '12.70', '11.10', '10000', '5', '615'],
  ['THT-60-719-10', '38.10', '3.18', '10000', '1', '615'],
  ['THT-1-719-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-46-719-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-42-719-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-43-719-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-103-719-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-45-719-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-29-719-10', '31.75', '9.53', '10000', '2', '615'],
  ['THT-3-719-10', '25.40', '9.53', '10000', '3', '615'],
  ['THT-58-719-10', '25.40', '9.53', '10000', '1', '615'],
  ['THT-5-719-10', '25.40', '12.70', '10000', '3', '615'],
  ['THT-59-719-10', '25.40', '12.70', '10000', '1', '615', 'P'],
  ['THT-71-719-20', '8.00', '8.00', '20000', '6', '615'],
  ['THT-48-719-10', '50.80', '6.35', '10000', '1', '615'],
  ['THT-99-719-10', '12.70', '12.70', '10000', '1', '615', 'P'],
]

export const bradyTHTPoliimid719: Product = {
  ...wspolneTHT,
  id: 'brady-tht-38-719-10',
  slug: 'brady-tht-38-719-10',
  name: 'Matowe etykiety poliimidowe ESD Brady UltraTemp B-719 na rolce 76 mm',
  seoTitle: 'Brady B-719 — matowy poliimid ESD, i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety poliimidowe ESD Brady UltraTemp B-719 do i6100, i7100 i i7500: niski profil, klej rozpraszający ładunki. PN: THT-38-719-10, 134318.',
  shortDescription: 'Brady UltraTemp B-719 to matowy poliimid o niskim profilu z klejem rozpraszającym ładunki elektrostatyczne, w 24 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'UltraTemp B-719 jest białym, matowym poliimidem o niskim profilu i grubości 0,084 mm. Znakuje płytki drukowane. Klej rozprasza ładunki elektrostatyczne, a folia znosi agresywne mycie po lutowaniu. Etykietę nakleja się po zakończeniu procesu na płytkach z montażem SMT i THT.\n\nW rodzinie jest 24 numery. Najdrobniejszy format, kwadrat 6,35 mm, wypełnia rolkę 20 000 sztuk i siedem rzędów, a kwadrat 8 mm, też w liczbie 20 000, sześć rzędów. Najszerszy format, 76,2 mm, jest dostępny po 2500 sztuk. Numery THT-59-719-10 i THT-99-719-10 są opakowaniami po 10 000 etykiet.\n\nZakres pracy sięga od −70 °C aż po 300 °C, a folia znosi chemikalia, płyny i wysoką temperaturę. Dodatkowo potwierdzono MIL-STD-202G w odniesieniu do metody 215K oraz ANSI/ESD S541-2008; materiał ma też znak UL Recognised. Taśma R6002 (seria R6000HF) pasuje do i6100 i i7100, a i75-R6002 do i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-electrostatic-dissipative-1-mil-polyimide-circuit-board-labels-cps-4363569',
  images: [
    '/images/products/brady/tht-38-719-10.png',
    '/images/products/brady/tht-103-719-10.png',
  ],
  imageDescriptions: [
    'Rolka matowych białych etykiet poliimidowych ESD Brady THT-38-719-10 9,53 × 9,53 mm',
    'Rolka matowych białych etykiet poliimidowych ESD Brady THT-103-719-10 25,4 × 6,35 mm z odwiniętym paskiem',
  ],
  ...powiazane(POLIIMID_719),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-719' },
    { name: 'Typ materiału', value: 'poliimid o niskim profilu, rozpraszający ładunki elektrostatyczne (ESD)' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, rozpraszający ładunki elektrostatyczne' },
    { name: 'Grubość', value: '0,084 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'chemikalia, płyny, wysoka temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 76,2 mm, wysokość od 3,18 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_719)}, zależnie od wersji` },
    ...opakowania(POLIIMID_719),
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (metoda 215K), ANSI/ESD S541-2008 (rezystywność kleju od 10⁴ do 10¹¹ Ω)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_719) },
  ],
  variants: warianty(POLIIMID_719, 'biała matowa etykieta poliimidowa ESD B-719', { rzedy: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '76,2 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 6,35 × 6,35 mm leżą w siedmiu rzędach, a paski 50,8 i 76,2 mm w jednym.',
  },
  faq: [
    { question: 'Czym B-719 różni się od błyszczących poliimidów ESD?', answer: 'B-719 jest matowy i ma grubość 0,084 mm, a B-768 oraz B-767 są błyszczące. Zakres pracy B-719 to od −70 do 300 °C.' },
    { question: 'Czy etykiety B-719 pasują do płytek z montażem SMT?', answer: 'Tak. Materiał jest opisany jako zgodny z SMT i THT, na stronie górnej i dolnej. Etykietę nakleja się po zakończeniu procesu.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-719?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 i75-R6002. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Płytki drukowane z elementami wrażliwymi na ESD', 'Etykiety o niskim profilu po montażu SMT i THT', 'Mycie płytek w trudnych warunkach'],
}

// ---------------------------------------------------------------------------
// Matowy biały poliimid B-728 (cps-4392538)
// ---------------------------------------------------------------------------

const POLIIMID_728: Wiersz[] = [
  ['THT-96-728-10', '12.70', '6.99', '10000', '4', '615'],
  ['THT-97-728-10', '12.70', '5.08', '10000', '1', '615'],
  ['139884', '16.51', '5.08', '10000', '1', '615'],
  ['THT-14-728-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-46-728-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-1-728-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-43-728-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-70-728-20', '6.35', '6.35', '20000', '7', '615'],
  ['THT-99-728-10', '12.70', '12.70', '10000', '1', '615', 'P'],
]

export const bradyTHTPoliimid728: Product = {
  ...wspolneTHT,
  id: 'brady-tht-96-728-10',
  slug: 'brady-tht-96-728-10',
  name: 'Białe matowe etykiety poliimidowe Brady UltraTemp B-728 na rolce 76 mm',
  seoTitle: 'Brady B-728 — matowy poliimid na płytki, i6100, i7100, i7500',
  seoDescription: 'Białe matowe etykiety poliimidowe Brady UltraTemp B-728 do i6100, i7100 i i7500: lutowanie na fali, 0,112 mm. PN: THT-96-728-10, THT-70-728-20, 139884.',
  shortDescription: 'Brady UltraTemp B-728 to biały, matowy poliimid z grubszą folią 0,112 mm do płytek drukowanych, w dziewięciu numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'UltraTemp B-728 to matowy poliimid w kolorze białym, w wersji 2 mil: folia ma 0,112 mm. Etykiety oznaczają płytki drukowane, komponenty i urządzenia. Klej akrylowy jest trwały. Opisano go jako bardzo odpornego na agresywne topniki i środowisko lutowania na fali; znosi też każdą powszechnie stosowaną metodę mycia.\n\nRodzina liczy dziewięć numerów. Kwadrat 6,35 mm to rolka z 20 000 sztuk, ułożonych obok siebie w siedmiu pasmach. Największa, 31,75 × 6,35 mm, ma 10 000 sztuk w jednym rzędzie. Opakowanie THT-99-728-10 mieści 10 000 etykiet o wymiarze 12,7 × 12,7 mm.\n\nFolia pracuje w temperaturze do 300 °C, a spodnią granicą jest −70 °C. Na trwałość folii nie wpływają warunki atmosferyczne, UV, wilgoć, ścieranie, chemikalia ani korozja. Dopuszczenia to UL Recognised oraz MIL-STD-202G, notice 12. Nadruk wykonuje taśma R6002, seria R6000HF; w i7500 oznaczenie i75-R6002.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-white-2-mil-polyimide-circuit-board-labels-cps-4392538',
  images: [
    '/images/products/brady/tht-99-728-10.png',
    '/images/products/brady/tht-96-728-10.png',
  ],
  imageDescriptions: [
    'Dwie rolki matowych białych etykiet poliimidowych Brady THT-99-728-10 12,7 × 12,7 mm z odwiniętymi paskami',
    'Rolka matowych białych etykiet poliimidowych Brady THT-96-728-10 12,7 × 6,99 mm w czterech rzędach',
  ],
  ...powiazane(POLIIMID_728),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-728' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, lutowanie na fali' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 31,75 mm, wysokość od 5,08 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_728)}, zależnie od wersji` },
    ...opakowania(POLIIMID_728),
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_728) },
  ],
  variants: warianty(POLIIMID_728, 'biała matowa etykieta poliimidowa B-728', { rzedy: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '31,75 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 6,35 × 6,35 mm leżą w siedmiu rzędach, a paski 31,75 × 6,35 mm w jednym.',
  },
  faq: [
    { question: 'Czym B-728 różni się od cieńszego B-729?', answer: 'B-728 ma folię 0,112 mm, a B-729 ma 0,086 mm i niski profil. Oba są matowe, białe i pracują od −70 do 300 °C.' },
    { question: 'Czy etykiety B-728 znoszą lutowanie na fali?', answer: 'Tak. Materiał opisano jako bardzo odporny na ostre topniki i lutowanie na fali oraz na wszystkie powszechnie stosowane metody czyszczenia.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-728?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 i75-R6002. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie płytek drukowanych', 'Znakowanie komponentów i urządzeń', 'Płytki lutowane na fali i myte w ostrych środkach'],
}

// ---------------------------------------------------------------------------
// Błyszczący poliimid ESD B-767 (cps-4363568); część numerów ma grubość 0,107 mm albo oznaczenie 717 / 797
// ---------------------------------------------------------------------------

const POLIIMID_767: Wiersz[] = [
  ['THT-97-767-10', '12.70', '5.08', '10000', '1', '-15'],
  ['134246', '9.53', '9.53', '10000', '7', '615'],
  ['THT-38-767-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-47-767-10', '16.51', '5.08', '10000', '1', '-15'],
  ['THT-14-767-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-96-767-10', '12.70', '6.99', '10000', '4', '615'],
  ['THT-46-767-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-103-767-10', '25.40', '6.35', '10000', '1', '615'],
  ['134244', '19.05', '6.35', '10000', '4', '615'],
  ['THT-1-767-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-42-717-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-42-767-10', '25.40', '4.75', '10000', '1', '615'],
  ['THT-43-767-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-60-767-10', '38.10', '3.18', '10000', '1', '615'],
  ['THT-99-767-10', '12.70', '12.70', '10000', '1', '-15', 'P'],
  ['THT-45-767-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-70-767-20', '6.35', '6.35', '20000', '7', '615'],
  ['THT-72-797-10', '44.45', '6.35', '10000', '1', '615'],
  ['THT-48-767-10', '50.80', '6.35', '10000', '1', '615'],
]
const GRUBOSC_0107 = ['134246', '134244', 'THT-42-717-10']

export const bradyTHTPoliimid767: Product = {
  ...wspolneTHT,
  id: 'brady-tht-97-767-10',
  slug: 'brady-tht-97-767-10',
  name: 'Białe błyszczące etykiety poliimidowe ESD Brady B-767 na rolce 76 mm',
  seoTitle: 'Brady B-767 — błyszczący poliimid ESD, i6100, i7100, i7500',
  seoDescription: 'Białe błyszczące etykiety poliimidowe ESD Brady B-767 do i6100, i7100 i i7500: klej i podkład rozpraszają ładunki. PN: THT-97-767-10, THT-38-767-10.',
  shortDescription: 'Brady B-767 to biały, błyszczący poliimid z klejem i podkładem rozpraszającymi ładunki elektrostatyczne, w 19 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-767 to biały poliimid z połyskiem, niskoprofilowy, w wersji 2 mil. Klej oraz podkład mają właściwości rozpraszające ładunki ESD, a rezystywność kleju odpowiada zaleceniu normy ESD S541. Wzmocniona warstwa wierzchnia służy płytkom mytym wielokrotnie w trudnych warunkach. Nadruk nie potrzebuje reflow ani wygrzewania, by pozostać czytelnym.\n\nW karcie jest 19 numerów. Rolki 10 000 sztuk mają formaty od 9,53 × 9,53 do 50,8 × 6,35 mm, a format 6,35 × 6,35 mm ma 20 000 sztuk. Opakowanie THT-99-767-10 zawiera 10 000 kwadratowych etykiet 12,7 mm. Trzy numery (134246, 134244 i THT-42-717-10) mają folię 0,107 mm zamiast 0,104 mm. Numer THT-72-797-10 ma w oznaczeniu 797.\n\nGranice pracy to −80 °C i 300 °C. Płyny, chemikalia, ścieranie i wilgoć nie uszkadzają etykiety. Znak UL 969 odnosi się do nadruku taśmami R6300 lub bezhalogenowymi R6000, a spełniona jest także metoda 215K normy MIL-STD-202G. Zaleca się taśmę R6306, a do i7500 i75-R6306.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-glossy-electrostatic-dissipative-2-mil-polyimide-circuit-board-labels-cps-4363568',
  images: [
    '/images/products/brady/tht-99-767-10.png',
    '/images/products/brady/tht-14-767-10.png',
  ],
  imageDescriptions: [
    'Dwie rolki białych błyszczących etykiet poliimidowych ESD Brady THT-99-767-10 12,7 × 12,7 mm',
    'Rolka białych błyszczących etykiet poliimidowych ESD Brady THT-14-767-10 16,51 × 5,08 mm w czterech rzędach',
  ],
  ...powiazane(POLIIMID_767),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-767' },
    { name: 'Typ materiału', value: 'poliimid rozpraszający ładunki elektrostatyczne (ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, rozpraszający ładunki elektrostatyczne' },
    { name: 'Grubość', value: '0,104 mm; numery 134246, 134244 i THT-42-717-10: 0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, płyny, korozja, wilgoć, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 50,8 mm, wysokość od 3,18 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_767)}, zależnie od wersji` },
    ...opakowania(POLIIMID_767),
    { name: 'Normy', value: 'UL Recognised (UL 969, plik MH17154) przy nadruku taśmami R6300 i R6000 bezhalogenowymi; MIL-STD-202G (metoda 215K); ANSI/ESD S541-2008 (rezystywność kleju od 10⁴ do 10¹¹ Ω)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6306 (seria R6300); do i7500: i75-R6306' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_767) },
    ...uwagiZgodnosci(POLIIMID_767),
  ],
  variants: warianty(POLIIMID_767, 'biała etykieta poliimidowa ESD B-767', { rzedy: true, drukarki: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '50,8 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 6,35 × 6,35 mm leżą w siedmiu rzędach, a długie paski w jednym.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Czym B-767 różni się od B-768?', answer: 'B-767 ma folię 0,104 mm i występuje w wersji 2 mil, a B-768 ma 0,078 mm. Oba są błyszczące, białe i rozpraszają ładunki elektrostatyczne.' },
    { question: 'Jaką rezystywność ma klej B-767?', answer: 'Rezystywność powierzchniowa kleju mieści się w zakresie od 10⁴ do 10¹¹ Ω, zalecanym w ANSI/ESD S541-2008 dla rozpraszających opakowań ESD.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-767?', answer: 'Zaleca się R6306 z serii R6300, a do i7500 i75-R6306. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500); część numerów nie ma i6100, co opisano w uwagach o zgodności.' },
  ],
  applications: ['Etykiety na płytkach z elementami wrażliwymi na ESD', 'Znakowanie komponentów i sprzętu', 'Płytki myte wielokrotnie w trudnych warunkach'],
}

// ---------------------------------------------------------------------------
// Błyszczący poliimid ESD B-717 (pid-tht-45-717-10 + pid-tht-60-717-10)
// ---------------------------------------------------------------------------

const POLIIMID_717: Wiersz[] = [
  ['THT-45-717-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-60-717-10', '38.10', '3.18', '10000', '1', '615'],
  ['THT-103-717-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-59-717-10', '25.40', '12.70', '10000', '1', '615'],
]

export const bradyTHTPoliimid717: Product = {
  ...wspolneTHT,
  id: 'brady-tht-45-717-10',
  slug: 'brady-tht-45-717-10',
  updatedAt: '2026-11-15',
  name: 'Białe błyszczące etykiety poliimidowe ESD Brady UltraTemp B-717 na rolce 76 mm',
  seoTitle: 'Brady B-717 — błyszczący poliimid ESD, i6100, i7100, i7500',
  seoDescription: 'Białe etykiety poliimidowe ESD Brady UltraTemp B-717 do i6100, i7100 i i7500: klej rozpraszający ładunki. PN: THT-45-717-10, THT-60-717-10, THT-103-717-10.',
  shortDescription: 'Brady UltraTemp B-717 to biały, błyszczący poliimid z klejem rozpraszającym ładunki elektrostatyczne, w czterech formatach o szerokości 25,4 i 38,1 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'UltraTemp B-717 jest białym poliimidem z połyskiem, o folii 0,107 mm. Klej akrylowy odprowadza ładunki elektrostatyczne. Etykiety znakują płytki drukowane i znoszą agresywne mycie topnika. Materiał dopuszczono do SMT i THT, a naklejanie następuje po zakończeniu procesu.\n\nKarta obejmuje cztery numery. THT-45-717-10 to etykieta 38,1 × 6,35 mm, a THT-60-717-10 ma wymiar 38,1 × 3,18 mm. Numer THT-103-717-10 mierzy 25,4 × 6,35 mm, a THT-59-717-10 25,4 × 12,7 mm. Wszystkie liczą 10 000 sztuk na rolce i leżą w jednym rzędzie. Dla dwóch pierwszych numerów odstęp pionowy między etykietami wynosi odpowiednio 8,89 i 5,72 mm, a szerokość podkładu 43,18 mm.\n\nPrzedział temperatury obejmuje −70 °C oraz 300 °C jako wartości skrajne. Chemikalia, płyny i ścieranie nie uszkadzają folii, podobnie jak korozja i wilgoć. Znak UL Recognised oraz zgodność z MIL-STD-202G potwierdzono. Nadruk wykonuje się taśmą R6006 (seria R6000HF); w i7500 stosuje się i75-R6006.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-static-dissipative-polyimide-labels-pid-tht-45-717-10',
  images: [
    '/images/products/brady/tht-45-717-10.png',
    '/images/products/brady/tht-60-717-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych ESD Brady THT-45-717-10 38,1 × 6,35 mm',
    'Rolka białych błyszczących etykiet poliimidowych ESD Brady THT-60-717-10 38,1 × 3,18 mm',
  ],
  ...powiazane(POLIIMID_717),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-717' },
    { name: 'Typ materiału', value: 'poliimid rozpraszający ładunki elektrostatyczne (ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, rozpraszający ładunki elektrostatyczne' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, płyny, korozja, wilgoć, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '38,1 × 6,35 / 38,1 × 3,18 / 25,4 × 6,35 / 25,4 × 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '10 000' },
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (metoda 215K), ANSI/ESD S541-2008 (rezystywność kleju od 10⁴ do 10¹¹ Ω)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6006 (seria R6000HF); do i7500: i75-R6006' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_717) },
    { name: 'Numery artykułów Brady', value: 'THT-45-717-10: 134249; THT-60-717-10: 134253; THT-103-717-10: 134242; THT-59-717-10: 134252' },
  ],
  variants: warianty(POLIIMID_717, 'biała etykieta poliimidowa ESD B-717'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba sztuk na rolce.\n\nSzerokość wynosi 38,1 albo 25,4 mm, a wysokość od 3,18 do 12,7 mm.',
  },
  faq: [
    { question: 'Czym różnią się numery w tej karcie?', answer: 'Wymiarem etykiety: THT-45-717-10 ma 38,1 × 6,35 mm, THT-60-717-10 ma 38,1 × 3,18 mm, THT-103-717-10 ma 25,4 × 6,35 mm, a THT-59-717-10 ma 25,4 × 12,7 mm. Materiał, liczba sztuk na rolce i jeden rząd są takie same.' },
    { question: 'Jaką taśmą drukować etykiety B-717?', answer: 'Zaleca się R6006 z serii R6000HF, a do i7500 i75-R6006. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Czy etykiety B-717 pasują do płytek SMT?', answer: 'Tak. Materiał jest zgodny z SMT na stronie górnej i dolnej oraz z THT po obu stronach. Etykiety nakleja się po zakończeniu procesu.' },
  ],
  applications: ['Płytki drukowane z elementami wrażliwymi na ESD', 'Wąskie oznaczenia na krawędzi płytki', 'Płytki myte w trudnych warunkach'],
}

// ---------------------------------------------------------------------------
// Pojedyncze numery: B-727 (pid-tht-12-727-10), B-7727 (pid-196747) i B-7727 Clean Liner Technology (pid-196750)
// ---------------------------------------------------------------------------

const POLIIMID_727: Wiersz[] = [['THT-12-727-10', '12.70', '11.10', '10000', '5', '-1-']]

export const bradyTHTPoliimid727: Product = {
  ...wspolneTHT,
  id: 'brady-tht-12-727-10',
  slug: 'brady-tht-12-727-10',
  name: 'Białe błyszczące etykiety poliimidowe Brady UltraTemp B-727 12,7 × 11,1 mm na rolce 76 mm',
  seoTitle: 'Brady B-727 — etykiety poliimidowe na płytki do drukarki i7100',
  seoDescription: 'Białe błyszczące etykiety poliimidowe Brady UltraTemp B-727 do drukarki i7100: topniki, lutowanie na fali, temperatura do 300 °C. PN: THT-12-727-10.',
  shortDescription: 'Brady THT-12-727-10 to białe, błyszczące etykiety poliimidowe 12,7 × 11,1 mm, 10 000 sztuk na rolce. Do drukarki Brady i7100.',
  description: 'UltraTemp B-727 to poliimid w kolorze białym, z połyskiem, o folii 0,112 mm. Klej akrylowy, trwały, łączy się z powierzchniami gładkimi. Etykieta znakuje płytki drukowane, komponenty i urządzenia oraz służy do oznaczeń wskazujących temperaturę. Materiał opisuje się jako wyjątkowo odporny na topniki i lutowanie falowe oraz na każdą powszechnie stosowaną metodę czyszczenia.\n\nNumer THT-12-727-10 oznacza etykietę 12,7 × 11,1 mm. Rolka mieści 10 000 sztuk w pięciu rzędach. Odstęp poziomy między etykietami to 16,81 mm, pionowy 13,64 mm, a szerokość podkładu 85,09 mm.\n\nGranice temperatury to −70 °C i 300 °C. Materiał odpiera UV, wilgoć, korozję, chemikalia i ścieranie. Pasuje też do SMT i THT, strona górna i dolna. Ma znak UL Recognised. Do nadruku zaleca się taśmę R6002 z serii R6000HF. Etykietę drukuje tylko i7100.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-labels-pid-tht-12-727-10',
  images: [
    '/images/products/brady/tht-12-727-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych Brady THT-12-727-10 12,7 × 11,1 mm w pięciu rzędach',
  ],
  ...powiazane(POLIIMID_727),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-727' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, lutowanie na fali' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '12,7 × 11,1 mm' },
    { name: 'Liczba sztuk na rolce', value: '10 000' },
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K), bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_727) },
    { name: 'Part Number', value: 'THT-12-727-10' },
    { name: 'Numer artykułu Brady', value: '132488' },
  ],
  faq: [
    { question: 'Do jakiej drukarki pasują etykiety THT-12-727-10?', answer: 'Do przemysłowej [Brady i7100](/produkt/brady-i7100). Na liście zgodnych drukarek tego numeru nie ma i6100 ani i7500.' },
    { question: 'Do czego służą etykiety B-727?', answer: 'Do znakowania płytek drukowanych, komponentów i urządzeń oraz do oznaczeń wskazujących temperaturę. Materiał pasuje do SMT i THT, po obu stronach płytki.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-727?', answer: 'Zaleca się taśmę R6002 z serii R6000HF.' },
  ],
  applications: ['Oznaczanie płytek drukowanych', 'Znakowanie komponentów i urządzeń', 'Etykiety wskazujące temperaturę'],
}

const POLIIMID_7727: Wiersz[] = [['THT-209-7727-10', '6.35', '6.35', '10000', '1', '-15']]

export const bradyTHTPoliimid7727: Product = {
  ...wspolneTHT,
  id: 'brady-tht-209-7727-10',
  slug: 'brady-tht-209-7727-10',
  name: 'Białe błyszczące etykiety poliimidowe do automatycznego dozowania Brady UltraTemp B-7727 6,35 × 6,35 mm na rolce 76 mm',
  seoTitle: 'Brady B-7727 — etykiety poliimidowe 6,35 × 6,35, i7100, i7500',
  seoDescription: 'Białe błyszczące etykiety poliimidowe Brady UltraTemp B-7727 do drukarek i7100 i i7500, do automatycznego dozowania na płytki, do 300 °C. PN: THT-209-7727-10.',
  shortDescription: 'Brady THT-209-7727-10 to białe, błyszczące etykiety poliimidowe 6,35 × 6,35 mm do automatycznego dozowania, 10 000 sztuk na rolce. Do drukarek Brady i7100 i i7500.',
  description: 'Etykieta B-7727 z serii UltraTemp ma folię poliimidową, białą i błyszczącą, o grubości 0,101 mm. Jest przeznaczona do automatycznego dozowania w maszynie Brady PAM (Printer Applicator Machine) oraz w maszynach Hover Davis do dozowania etykiet. Znakuje płytki drukowane po zakończeniu procesu, a pasuje do technologii SMT oraz THT.\n\nNumer THT-209-7727-10 to kwadrat 6,35 × 6,35 mm w jednym rzędzie, z 10 000 sztuk na rolce. To pojedynczy numer, bez wariantów rozmiaru. Odstęp pionowy między etykietami wynosi 10,16 mm, a szerokość podkładu 25 mm.\n\nDopuszczalna temperatura pracy wynosi −70 °C na dole i 300 °C na górze, a folia dobrze znosi wilgoć i zimno. Etykieta uzyskała znak UL Recognised, a wykonano ją bez związków dibutylocyny i dioktylocyny. Do nadruku służą taśmy z serii R6000HF. Etykiety drukują i7100 oraz i7500; i6100 nie ma na liście zgodnych drukarek tego numeru.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-labels-pid-196747',
  images: [
    '/images/products/brady/tht-209-7727-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych Brady THT-209-7727-10 6,35 × 6,35 mm na szpuli do automatycznego dozowania',
  ],
  ...powiazane(POLIIMID_7727),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce do automatycznego dozowania, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-7727' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,101 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'wilgoć, niska temperatura, ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '6,35 × 6,35 mm' },
    { name: 'Liczba sztuk na rolce', value: '10 000' },
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K), bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_7727) },
    { name: 'Part Number', value: 'THT-209-7727-10' },
    { name: 'Numer artykułu Brady', value: '196747' },
  ],
  faq: [
    { question: 'Do jakich maszyn przeznaczone są etykiety THT-209-7727-10?', answer: 'Są przeznaczone do automatycznego dozowania w maszynie Brady PAM (Printer Applicator Machine) oraz w maszynach Hover Davis do dozowania etykiet.' },
    { question: 'Jakie drukarki obsługują etykiety B-7727?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Numer THT-209-7727-10 nie ma i6100 na liście zgodnych drukarek.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7727?', answer: 'Zaleca się taśmy z serii R6000HF.' },
  ],
  applications: ['Automatyczne dozowanie etykiet na płytki drukowane', 'Oznaczanie płytek po montażu SMT i THT', 'Drobne oznaczenia 6,35 × 6,35 mm'],
}

const POLIIMID_CLT: Wiersz[] = [['THTCLT-01-7727-5', '5.08', '5.08', '5000', '1', '-15']]

export const bradyTHTPoliimidClt: Product = {
  ...wspolneTHT,
  id: 'brady-thtclt-01-7727-5',
  slug: 'brady-thtclt-01-7727-5',
  name: 'Białe etykiety poliimidowe Brady UltraTemp B-7727 Clean Liner Technology 5,08 × 5,08 mm na rolce 76 mm',
  seoTitle: 'Brady B-7727 Clean Liner Technology — poliimid, i7100, i7500',
  seoDescription: 'Białe etykiety poliimidowe Brady UltraTemp B-7727 Clean Liner Technology 5,08 × 5,08 mm do drukarek i7100 i i7500, do 300 °C. PN: THTCLT-01-7727-5.',
  shortDescription: 'Brady THTCLT-01-7727-5 to białe etykiety poliimidowe Clean Liner Technology 5,08 × 5,08 mm, 5000 sztuk na rolce. Do drukarek Brady i7100 i i7500.',
  description: 'THTCLT-01-7727-5 to najmniejsza etykieta w tej grupie: kwadrat 5,08 × 5,08 mm z białego, błyszczącego poliimidu UltraTemp B-7727. Wariant Clean Liner Technology jest przeznaczony do płytek drukowanych, a jego folia ma grubość 0,101 mm. Do dozowania automatycznego służą maszyny Brady PAM i Hover Davis. Naklejanie następuje po zakończeniu procesu, przy montażu SMT i THT.\n\nRolka zawiera 5000 sztuk ułożonych pojedynczo. Etykiety leżą co 7,99 mm w pionie, na podkładzie o szerokości 25 mm. Karta opisuje jeden numer, o numerze artykułu Brady 196750.\n\nGórna granica pracy to 300 °C, a dolna −70 °C; materiał znosi wilgoć i niskie temperatury. Spełnia MIL-STD-202G, nie zawiera ani dibutylocyny, ani dioktylocyny i uzyskała znak UL Recognised. Nadruk wykonuje się taśmami z serii R6000HF. Drukują ją i7100 oraz i7500, bez i6100.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-labels-clean-liner-technology-pid-196750',
  images: [
    '/images/products/brady/thtclt-01-7727-5.png',
  ],
  imageDescriptions: [
    'Rolka białych etykiet poliimidowych Brady THTCLT-01-7727-5 5,08 × 5,08 mm na szpuli z odwiniętym paskiem',
  ],
  ...powiazane(POLIIMID_CLT),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce Clean Liner Technology, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-7727' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,101 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'wilgoć, niska temperatura, ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '5,08 × 5,08 mm' },
    { name: 'Liczba sztuk na rolce', value: '5000' },
    { name: 'Normy', value: 'UL Recognised, MIL-STD-202G (notice 12, metoda 215K), bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_CLT) },
    { name: 'Part Number', value: 'THTCLT-01-7727-5' },
    { name: 'Numer artykułu Brady', value: '196750' },
  ],
  faq: [
    { question: 'Jaki rozmiar mają etykiety THTCLT-01-7727-5?', answer: 'Etykieta jest kwadratem 5,08 × 5,08 mm. Na rolce jest 5000 sztuk, w jednym rzędzie.' },
    { question: 'Do jakich maszyn są przeznaczone etykiety Clean Liner Technology?', answer: 'Do maszyny Brady PAM (Printer Applicator Machine) oraz do maszyn Hover Davis do dozowania etykiet.' },
    { question: 'Którą drukarką drukuje się te etykiety?', answer: 'Drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Numer THTCLT-01-7727-5 nie ma i6100 na liście zgodnych drukarek.' },
  ],
  applications: ['Najmniejsze oznaczenia na płytkach drukowanych', 'Automatyczne dozowanie po montażu SMT i THT', 'Znakowanie płytek odpornych na wilgoć i zimno'],
}

// ---------------------------------------------------------------------------
// Błyszczący poliester ESD WorkHorse B-473 (cps-4364571)
// ---------------------------------------------------------------------------

const POLIESTER_473: Wiersz[] = [
  ['THT-11-473-10', '6.35', '6.35', '10000', '12', '-15'],
  ['THT-36-473-10', '12.70', '5.08', '10000', '5', '-15'],
  ['THT-97-473-10', '12.70', '5.08', '10000', '1', '-15'],
  ['THT-57-473-10', '17.78', '9.53', '10000', '4', '-15'],
  ['THT-1-473-10', '19.05', '6.35', '10000', '4', '-15'],
  ['THT-14-473-10', '16.51', '5.08', '10000', '4', '-15'],
  ['THT-47-473-10', '16.51', '5.08', '10000', '1', '-15'],
  ['THT-70-473-20', '6.35', '6.35', '20000', '7', '-15'],
  ['THT-96-473-10', '12.70', '6.99', '10000', '4', '-15'],
  ['THT-38-473-10', '9.53', '9.53', '10000', '7', '-15'],
  ['THT-12-473-10', '12.70', '11.10', '10000', '5', '-15'],
  ['THT-2-473-10', '22.86', '6.35', '10000', '3', '-15'],
  ['THT-49-473-10', '22.86', '6.35', '10000', '1', '-15'],
  ['THT-99-473-10', '12.70', '12.70', '10000', '1', '-15', 'P'],
  ['THT-46-473-10', '19.05', '6.35', '10000', '1', '-15'],
  ['THT-13-473-10', '31.75', '6.35', '10000', '2', '615'],
  ['THT-3-473-10', '25.40', '9.53', '10000', '3', '615'],
  ['THT-43-473-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-4-473-10', '38.10', '6.35', '10000', '2', '615'],
  ['THT-45-473-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-5-473-10', '25.40', '12.70', '10000', '3', '615'],
  ['THT-59-473-10', '25.40', '12.70', '10000', '1', '615', 'P'],
  ['THT-48-473-10', '50.80', '6.35', '10000', '1', '615'],
  ['THT-58-473-10', '25.40', '9.53', '10000', '1', '615'],
]

export const bradyTHTPoliester473: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1-473-10',
  slug: 'brady-tht-1-473-10',
  name: 'Białe błyszczące etykiety poliestrowe ESD Brady WorkHorse B-473 na rolce 76 mm',
  seoTitle: 'Brady WorkHorse B-473 — poliester ESD, i6100, i7100, i7500',
  seoDescription: 'Białe etykiety poliestrowe ESD Brady WorkHorse B-473 do i6100, i7100 i i7500: THT strona górna, do 180 °C. PN: THT-11-473-10, THT-13-473-10, THT-70-473-20.',
  shortDescription: 'Brady WorkHorse B-473 to biały, błyszczący poliester z klejem rozpraszającym ładunki elektrostatyczne, w 24 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Materiałem etykiet B-473 jest biały poliester z połyskiem, o grubości 0,09 mm. Klej i podkład rozpraszają ładunki elektrostatyczne, a materiał należy do linii WorkHorse. Służy do znakowania płytek drukowanych i instalacji elektrycznych oraz do ogólnej identyfikacji. Zakres montażu jest wąski: etykieta pasuje do THT, wyłącznie po stronie górnej płytki i po zakończeniu procesu. Do SMT oraz na stronę dolną jej nie stosuje się, a w bardzo wysokich temperaturach zaleca się próbę.\n\nRodzina liczy 24 numery. Najdrobniejsza etykieta to kwadrat 6,35 mm w dwunastu pasmach, a najszersze są paski 50,8 mm. Rolki mają zwykle 10 000 sztuk; wyjątkiem jest THT-70-473-20, z 20 000 sztuk. Opakowaniami są THT-99-473-10 i THT-59-473-10, po 10 000 etykiet.\n\nFolia znosi temperatury od −40 °C do 180 °C. Odporność obejmuje UV, warunki atmosferyczne, korozję, wilgoć, chemikalia, rozpuszczalniki oraz paliwa i oleje. Dopuszczenia: UL Recognised oraz akceptacja CSA. Do nadruku zaleca się R6002 (seria R6000HF), a w i7500 i75-R6002.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-glossy-electrostatic-dissipative-polyester-circuit-board-labels-cps-4364571',
  images: [
    '/images/products/brady/tht-1-473-10.png',
    '/images/products/brady/tht-70-473-20.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliestrowych ESD Brady THT-1-473-10 19,05 × 6,35 mm w czterech rzędach',
    'Rolka białych błyszczących etykiet poliestrowych ESD Brady THT-70-473-20 6,35 × 6,35 mm w siedmiu rzędach',
  ],
  ...powiazane(POLIESTER_473),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-473' },
    { name: 'Typ materiału', value: 'poliester rozpraszający ładunki elektrostatyczne (ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, rozpraszający ładunki elektrostatyczne; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,09 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 180 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, rozpuszczalniki, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, ścieranie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 50,8 mm, wysokość od 5,08 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIESTER_473)}, zależnie od wersji` },
    ...opakowania(POLIESTER_473),
    { name: 'Montaż na płytce', value: 'THT, strona górna, po zakończeniu procesu; bez SMT i bez strony dolnej' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja), ANSI/ESD S541-2008 (rezystywność powierzchniowa w zalecanym zakresie)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIESTER_473) },
    ...uwagiZgodnosci(POLIESTER_473),
  ],
  variants: warianty(POLIESTER_473, 'biała etykieta poliestrowa ESD B-473', { rzedy: true, drukarki: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '50,8 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajdrobniejsze etykiety leżą w dwunastu rzędach, a długie paski w jednym.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Czy etykiety B-473 pasują do montażu SMT?', answer: 'Nie. Materiał jest przeznaczony wyłącznie do THT na stronie górnej płytki. W bardzo wysokich temperaturach zaleca się wcześniejszą próbę.' },
    { question: 'Co znaczy, że B-473 rozprasza ładunki?', answer: 'Klej i podkład odprowadzają ładunki elektrostatyczne. Rezystywność powierzchniowa mieści się w zakresie zalecanym w ANSI/ESD S541-2008 dla rozpraszających materiałów opakowaniowych.' },
    { question: 'Które drukarki obsługują etykiety B-473?', answer: 'Numery z kolumny z i6100 drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Pozostałe pasują tylko do i7100 i i7500.' },
  ],
  applications: ['Płytki drukowane z elementami THT, strona górna', 'Oznaczanie w instalacjach elektrycznych', 'Ogólna identyfikacja w środowisku wrażliwym na ESD'],
}

// ---------------------------------------------------------------------------
// Błyszczący poliimid B-777 (cps-4402002); zgodność z danych: i7100 i i7500
// ---------------------------------------------------------------------------

const POLIIMID_777: Wiersz[] = [
  ['THT-208-777-10', '5.08', '5.08', '10000', '1', '-15'],
  ['THT-209-777-10', '6.35', '6.35', '10000', '1', '-15', 'P'],
  ['THT-210-777-10', '9.53', '9.53', '10000', '1', '-15', 'P'],
  ['THT-212-777-10', '19.05', '6.35', '10000', '1', '-15'],
]

export const bradyTHTPoliimid777: Product = {
  ...wspolneTHT,
  id: 'brady-tht-208-777-10',
  slug: 'brady-tht-208-777-10',
  name: 'Białe błyszczące etykiety poliimidowe Brady UltraTemp B-777 na rolce 76 mm',
  seoTitle: 'Brady B-777 — etykiety poliimidowe na płytki do i7100, i7500',
  seoDescription: 'Białe etykiety poliimidowe Brady UltraTemp B-777 do drukarek i7100 i i7500: mycie topnika, odporność chemiczna, do 300 °C. PN: THT-208-777-10, THT-212-777-10.',
  shortDescription: 'Brady UltraTemp B-777 to biały, błyszczący poliimid odporny na chemikalia i ciepło, w czterech małych formatach. Do drukarek Brady i7100 i i7500.',
  description: 'Poliimid B-777 jest biały i błyszczący, a jego folia ma 0,1041 mm. Materiał przeznaczono do znakowania płytek drukowanych. Etykieta jest odporna na chemikalia i ciepło, a klej akrylowy jest trwały. Do czytelności nadruku nie potrzeba reflow ani podgrzewania wstępnego, dlatego etykiety pasują do płytek poddawanych wielokrotnemu myciu w trudnych warunkach.\n\nKarta ma cztery numery, wszystkie po 10 000 sztuk: kwadraty o bokach 5,08 mm, 6,35 mm i 9,53 mm oraz pasek 19,05 × 6,35 mm. Numery THT-209-777-10 i THT-210-777-10 są opakowaniami, a THT-208-777-10 i THT-212-777-10 pojedynczymi rolkami.\n\nFolia pracuje między −70 a 300 °C i odpiera ścieranie, korozję, wilgoć oraz warunki atmosferyczne. Przy nadruku taśmami R6300 spełnia wymagania testu rozpuszczalników z MIL-STD-202G (215K); znak UL 969 obowiązuje przy tej samej taśmie (plik UL MH25991). Pasują do niej taśmy z serii R6300.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polyimide-labels-cps-4402002',
  images: [
    '/images/products/brady/tht-212-777-10.png',
    '/images/products/brady/tht-209-777-10.png',
  ],
  imageDescriptions: [
    'Rolka białych błyszczących etykiet poliimidowych Brady THT-212-777-10 19,05 × 6,35 mm',
    'Rolki białych błyszczących etykiet poliimidowych Brady THT-209-777-10 6,35 × 6,35 mm na wspólnym uchwycie',
  ],
  ...powiazane(POLIIMID_777),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-777' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,1041 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, warunki atmosferyczne, ciepło' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '5,08 × 5,08 / 6,35 × 6,35 / 9,53 × 9,53 / 19,05 × 6,35 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '10 000' },
    ...opakowania(POLIIMID_777),
    { name: 'Normy', value: 'UL Recognised (UL 969, plik MH25991) przy nadruku taśmą R6300; MIL-STD-202G (metoda 215K, odporność na rozpuszczalniki) z taśmami R6300' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6300' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_777) },
  ],
  variants: warianty(POLIIMID_777, 'biała etykieta poliimidowa B-777'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 5,08 × 5,08 mm, a największa 19,05 × 6,35 mm.',
  },
  faq: [
    { question: 'Z jaką taśmą barwiącą pasują etykiety B-777?', answer: 'Z taśmami serii R6300. Przy nadruku taśmą R6300 materiał spełnia wymagania testu odporności na rozpuszczalniki MIL-STD-202G, metoda 215K.' },
    { question: 'Czy etykiety B-777 trzeba wygrzewać po wydruku?', answer: 'Nie. Do czytelności nadruku nie potrzeba reflow ani wstępnego podgrzewania, więc materiał nadaje się do płytek myjących wielokrotnie w trudnych warunkach.' },
    { question: 'Którą drukarką drukuje się etykiety B-777?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Na liście zgodnych drukarek tych numerów nie ma i6100.' },
  ],
  applications: ['Znakowanie płytek drukowanych po montażu', 'Płytki myte wielokrotnie w trudnych warunkach', 'Bardzo małe oznaczenia kwadratowe'],
}

// ---------------------------------------------------------------------------
// Matowy bursztynowy poliimid B-724 (cps-4392521)
// ---------------------------------------------------------------------------

const POLIIMID_724: Wiersz[] = [
  ['THT-38-724-10', '9.53', '9.53', '10000', '7', '615'],
  ['THT-11-724-10', '6.35', '6.35', '10000', '12', '615'],
  ['THT-47-724-10', '16.51', '5.08', '10000', '1', '-15'],
  ['THT-14-724-10', '16.51', '5.08', '10000', '4', '615'],
  ['THT-1-724-10', '19.05', '6.35', '10000', '4', '615'],
  ['THT-46-724-10', '19.05', '6.35', '10000', '1', '615'],
  ['THT-2-724-10', '22.86', '6.35', '10000', '3', '615'],
  ['THT-103-724-10', '25.40', '6.35', '10000', '1', '615'],
  ['THT-49-724-10', '22.86', '6.35', '10000', '1', '615'],
  ['THT-51-724-10', '25.40', '6.35', '10000', '3', '615'],
  ['THT-41-724-10', '25.40', '4.75', '10000', '3', '615'],
  ['THT-12-724-10', '12.70', '11.10', '10000', '5', '615'],
  ['THT-13-724-10', '31.75', '6.35', '10000', '2', '615'],
  ['THT-28-724-10', '38.10', '3.18', '10000', '2', '615'],
  ['THT-4-724-10', '38.10', '6.35', '10000', '2', '615'],
  ['THT-43-724-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-44-724-10', '34.93', '6.35', '10000', '1', '615'],
  ['THT-45-724-10', '38.10', '6.35', '10000', '1', '615'],
  ['THT-29-724-10', '31.75', '9.53', '10000', '2', '615'],
  ['THT-3-724-10', '25.40', '9.53', '10000', '3', '615'],
  ['THT-48-724-10', '50.80', '6.35', '10000', '1', '615'],
  ['THT-57-724-10', '17.78', '9.53', '10000', '4', '615'],
  ['THT-50-724-10', '19.05', '19.05', '10000', '4', '615'],
  ['THT-5-724-10', '25.40', '12.70', '10000', '3', '615'],
  ['THT-15-724-2.5', '50.80', '6.35', '2500', '1', '615'],
  ['THT-16-724-2.5', '76.20', '6.35', '2500', '1', '615'],
]

export const bradyTHTPoliimid724: Product = {
  ...wspolneTHT,
  id: 'brady-tht-14-724-10',
  slug: 'brady-tht-14-724-10',
  updatedAt: '2026-11-15',
  name: 'Matowe bursztynowe etykiety poliimidowe na płytki drukowane Brady B-724 na rolce 76 mm',
  seoTitle: 'Brady B-724 — bursztynowy poliimid na płytki, i6100, i7100',
  seoDescription: 'Matowe bursztynowe etykiety poliimidowe Brady B-724 do i6100, i7100 i i7500: lutowanie na fali, 0,112 mm. PN: THT-14-724-10, THT-38-724-10, THT-50-724-10.',
  shortDescription: 'Brady B-724 to matowy poliimid w kolorze bursztynowym do znakowania płytek drukowanych, w 26 numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-724 to poliimid w kolorze bursztynowym, o wykończeniu matowym i grubości 0,112 mm. Do powierzchni gładkich klej akrylowy przylega trwale. Materiał znosi agresywne mycie topnika oraz lutowanie na fali. Etykiety oznaczają płytki drukowane i są odporne na ciepło.\n\nW karcie jest 26 numerów. Rolki mają po 10 000 sztuk, z wyjątkiem THT-15-724-2.5 i THT-16-724-2.5, które mają po 2500. Kwadrat 6,35 mm leży w dwunastu rzędach, a kwadrat 9,53 mm w siedmiu. Najszersza etykieta ma 76,2 mm. Największy format to kwadrat 19,05 mm w czterech rzędach.\n\nDolny limit pracy to −70 °C, górny 300 °C. Ścieranie, chemikalia, korozja, wilgoć i warunki atmosferyczne mu nie szkodzą. Numer THT-47-724-10 pasuje tylko do i7100 i i7500, a pozostałe numery do wszystkich trzech drukarek. Szerokości zaczynają się od 6,35 mm, a wysokości mieszczą się między 3,18 a 19,05 mm.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-amber-polyimide-circuit-board-labels-cps-4392521',
  images: [
    '/images/products/brady/tht-14-724-10.png',
    '/images/products/brady/tht-38-724-10.png',
  ],
  imageDescriptions: [
    'Rolka bursztynowych matowych etykiet poliimidowych Brady THT-14-724-10 16,51 × 5,08 mm w czterech rzędach',
    'Rolka bursztynowych matowych etykiet poliimidowych Brady THT-38-724-10 9,53 × 9,53 mm w siedmiu rzędach',
  ],
  ...powiazane(POLIIMID_724),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-724' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, lutowanie na fali, warunki atmosferyczne, ciepło' },
    { name: 'Kolor', value: 'bursztynowy' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 76,2 mm, wysokość od 3,18 do 19,05 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: `${listaSztuk(POLIIMID_724)}, zależnie od wersji` },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_724) },
    ...uwagiZgodnosci(POLIIMID_724),
  ],
  variants: warianty(POLIIMID_724, 'bursztynowa etykieta poliimidowa B-724', { rzedy: true, drukarki: true }),
  variantAttributeTooltips: {
    Rozmiar: TOOLTIP_ROZMIAR('6,35 × 6,35', '76,2 × 6,35'),
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajdrobniejsze etykiety leżą w dwunastu rzędach, a długie paski w jednym.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Jaki kolor mają etykiety B-724?', answer: 'Są bursztynowe, a wykończenie jest matowe. Folia ma 0,112 mm grubości.' },
    { question: 'Jakie temperatury znosi materiał B-724?', answer: 'Od −70 do 300 °C. Etykiety wytrzymują lutowanie na fali oraz agresywne mycie topnika.' },
    { question: 'Które drukarki obsługują etykiety B-724?', answer: 'Większość numerów drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Numer THT-47-724-10 pasuje tylko do i7100 i i7500.' },
  ],
  applications: ['Oznaczanie płytek drukowanych', 'Płytki lutowane na fali', 'Etykiety w kolorze bursztynowym'],
}

// ---------------------------------------------------------------------------
// Błyszczący jasnozielony poliimid B-776 (cps-4357898); bez THT-15-776-2.5 (brak zgodności z drukarką w danych)
// ---------------------------------------------------------------------------

const POLIIMID_776: Wiersz[] = [
  ['THT-14-776-10', '16.51', '5.08', '10000', '4', '-15'],
  ['THT-1-776-10', '19.05', '6.35', '10000', '4', '-15'],
  ['THT-2-776-10', '22.86', '6.35', '10000', '3', '-15'],
  ['THT-49-776-10', '22.86', '6.35', '10000', '1', '-15'],
  ['THT-43-776-10', '31.75', '6.35', '10000', '1', '615'],
  ['THT-59-776-10', '25.40', '12.70', '10000', '1', '615', 'P'],
]

export const bradyTHTPoliimid776: Product = {
  ...wspolneTHT,
  id: 'brady-tht-14-776-10',
  slug: 'brady-tht-14-776-10',
  name: 'Jasnozielone błyszczące etykiety poliimidowe Brady UltraTemp B-776 na rolce 76 mm',
  seoTitle: 'Brady B-776 — jasnozielony poliimid na płytki, i6100, i7100',
  seoDescription: 'Jasnozielone etykiety poliimidowe Brady UltraTemp B-776 do i6100, i7100 i i7500: połysk, do 300 °C. PN: THT-14-776-10, THT-1-776-10, THT-43-776-10.',
  shortDescription: 'Brady UltraTemp B-776 to jasnozielony, błyszczący poliimid do znakowania płytek drukowanych, w sześciu numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'UltraTemp B-776 to poliimid w jasnozielonym kolorze, z połyskiem, o grubości 0,112 mm. Trwały klej akrylowy łączy etykietę z podłożem. Folia jest odporna na mycie topnika w trudnych warunkach i na wysoką temperaturę. Etykiety znakują płytki drukowane.\n\nKarta zawiera sześć numerów; każdy ma 10 000 sztuk w rolce lub w opakowaniu. Cztery formaty mają szerokość od 16,51 do 22,86 mm i leżą w jednym do czterech rzędów, jeden ma 31,75 mm szerokości, a ostatni jest opakowaniem etykiet o wymiarze 25,4 × 12,7 mm.\n\nZimno do −70 °C i ciepło do 300 °C nie uszkadzają materiału. Folia nie przyjmuje szkód od ścierania, chemikaliów, korozji i wilgoci. Dla normy UL 969 złożono wniosek, który jest w toku. Dla tego materiału nie wskazano zalecanej taśmy barwiącej.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-glossy-light-green-polyimide-circuit-board-labels-cps-4357898',
  images: [
    '/images/products/brady/tht-14-776-10.png',
    '/images/products/brady/tht-2-776-10.png',
  ],
  imageDescriptions: [
    'Rolka jasnozielonych błyszczących etykiet poliimidowych Brady THT-14-776-10 16,51 × 5,08 mm w czterech rzędach',
    'Rolka jasnozielonych błyszczących etykiet poliimidowych Brady THT-2-776-10 22,86 × 6,35 mm w trzech rzędach',
  ],
  ...powiazane(POLIIMID_776),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-776' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, temperatura' },
    { name: 'Kolor', value: 'jasnozielony' },
    { name: 'Wymiary etykiety', value: 'szerokość od 16,51 do 31,75 mm, wysokość od 5,08 do 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '10 000' },
    ...opakowania(POLIIMID_776),
    { name: 'Normy', value: 'UL 969: wniosek w toku' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIIMID_776) },
    ...uwagiZgodnosci(POLIIMID_776),
  ],
  variants: warianty(POLIIMID_776, 'jasnozielona etykieta poliimidowa B-776', { rzedy: true, drukarki: true }),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 16,51 × 5,08 mm, a największa 31,75 × 6,35 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 16,51 × 5,08 mm i 19,05 × 6,35 mm leżą w czterech rzędach, a 31,75 × 6,35 mm w jednym.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Jaki kolor i wykończenie mają etykiety B-776?', answer: 'Są jasnozielone i błyszczące. Folia poliimidowa ma 0,112 mm grubości.' },
    { question: 'Jaką temperaturę wytrzymuje materiał B-776?', answer: 'Od −70 do 300 °C. Folia znosi też mycie topnika w trudnych warunkach.' },
    { question: 'Które drukarki obsługują etykiety B-776?', answer: 'Numery THT-43-776-10 i THT-59-776-10 drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Pozostałe pasują tylko do i7100 i i7500.' },
  ],
  applications: ['Oznaczanie płytek drukowanych', 'Płytki myte w trudnych warunkach', 'Etykiety w kolorze jasnozielonym'],
}

// ---------------------------------------------------------------------------
// Matowy poliester WorkHorse B-459 (cps-4367743)
// ---------------------------------------------------------------------------

// Dane producenta podają dla tych numerów tylko szerokość etykiety i liczbę sztuk.
const POLIESTER_459: [string, string, string, Kod][] = [
  ['THT-14-459-10', '16.51', '10000', '-15'],
  ['THT-1-459-10', '19.05', '10000', '-15'],
  ['THT-19-459-1', '76.20', '1000', '615'],
  ['THT-5-459-10', '25.40', '10000', '615'],
]
const POLIESTER_459_WIERSZE: Wiersz[] = POLIESTER_459.map(([pn, w, szt, kod]) => [pn, w, '0', szt, '1', kod])

export const bradyTHTPoliester459: Product = {
  ...wspolneTHT,
  id: 'brady-tht-14-459-10',
  slug: 'brady-tht-14-459-10',
  name: 'Matowe białe etykiety poliestrowe na płytki i kody kreskowe Brady WorkHorse B-459 na rolce 76 mm',
  seoTitle: 'Brady WorkHorse B-459 — matowy poliester, i6100, i7100, i7500',
  seoDescription: 'Matowe białe etykiety poliestrowe Brady WorkHorse B-459 do i6100, i7100 i i7500: THT strona górna, kontrola zapasów. PN: THT-14-459-10, THT-5-459-10.',
  shortDescription: 'Brady WorkHorse B-459 to biały, matowy poliester do znakowania komponentów i kontroli zapasów, w czterech szerokościach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'WorkHorse B-459 to biały poliester o wykończeniu matowym, grubości 0,079 mm i z trwałym klejem akrylowym do powierzchni gładkich. Służy do znakowania komponentów i urządzeń oraz do etykiet inwentaryzacyjnych i kontrolnych. Na płytce dopuszcza się go wyłącznie w technologii THT od strony górnej; naklejanie następuje po zakończeniu procesu. Do SMT i na stronę dolną nie jest przeznaczony, a przy bardzo wysokich temperaturach zaleca się wcześniejszą próbę.\n\nKarta zawiera cztery numery, które różnią się szerokością: 16,51, 19,05, 25,4 i 76,2 mm. Trzy numery to rolki 10 000 sztuk, a najszerszy numer ma 1000 sztuk. Dla THT-14-459-10 podano wymiar 16,51 × 5,08 mm i cztery rzędy.\n\nZakres temperatury roboczej: od −40 °C do 100 °C. Folia znosi UV, wilgoć, warunki atmosferyczne, ścieranie, chemikalia, paliwa oraz oleje. Materiał ma znak UL Recognised. Zaleca się R6002, czyli taśmę serii R6000HF; dla i7500 podano i75-R6002.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-white-polyester-barcode-circuit-board-labels-cps-4367743',
  images: [
    '/images/products/brady/tht-1-459-10.png',
    '/images/products/brady/tht-5-459-10.png',
  ],
  imageDescriptions: [
    'Rolka białych matowych etykiet poliestrowych Brady THT-1-459-10 o szerokości 19,05 mm',
    'Rolka białych matowych etykiet poliestrowych Brady THT-5-459-10 o szerokości 25,4 mm',
  ],
  ...powiazane(POLIESTER_459_WIERSZE),
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-459' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,079 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość 16,51 / 19,05 / 25,4 / 76,2 mm; THT-14-459-10: 16,51 × 5,08 mm' },
    { name: 'Liczba sztuk na rolce', value: '10 000 / 1000, zależnie od wersji' },
    { name: 'Montaż na płytce', value: 'THT, strona górna, po zakończeniu procesu; bez SMT i bez strony dolnej' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: zgodneDrukarki(POLIESTER_459_WIERSZE) },
    ...uwagiZgodnosci(POLIESTER_459_WIERSZE),
  ],
  variants: POLIESTER_459.map(([pn, w, szt, kod]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała matowa etykieta poliestrowa B-459 o szerokości ${mm(w)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: pn === 'THT-14-459-10' ? rozmiar(w, '5.08', szt) : `szer. ${mm(w)} mm, ${sztuk(szt)} szt.`, Drukarki: NAZWY_DRUKAREK[kod] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce.\n\nDla większości numerów podano szerokość etykiety, od 16,51 do 76,2 mm.',
    Drukarki: TOOLTIP_DRUKARKI,
  },
  faq: [
    { question: 'Czy etykiety B-459 pasują do montażu SMT?', answer: 'Nie. Materiał jest przeznaczony do THT na stronie górnej płytki, po zakończeniu procesu. W bardzo wysokich temperaturach zaleca się próbę.' },
    { question: 'Do czego służą etykiety B-459?', answer: 'Do znakowania komponentów i urządzeń oraz do etykiet inwentaryzacyjnych i kontrolnych. Matowa powierzchnia przyjmuje nadruk termotransferowy.' },
    { question: 'Które drukarki obsługują etykiety B-459?', answer: 'Numery THT-19-459-1 i THT-5-459-10 drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Pozostałe pasują tylko do i7100 i i7500.' },
  ],
  applications: ['Znakowanie komponentów i urządzeń', 'Etykiety inwentaryzacyjne i kontrolne', 'Płytki z elementami THT, strona górna'],
}

export const bradyTHTElektronika: Product[] = [
  bradyTHTPoliimid797,
  bradyTHTPoliimid768,
  bradyTHTPoliimid729,
  bradyTHTPoliimid719,
  bradyTHTPoliimid728,
  bradyTHTPoliimid767,
  bradyTHTPoliimid717,
  bradyTHTPoliimid727,
  bradyTHTPoliimid7727,
  bradyTHTPoliimidClt,
  bradyTHTPoliester473,
  bradyTHTPoliimid777,
  bradyTHTPoliimid724,
  bradyTHTPoliimid776,
  bradyTHTPoliester459,
]

export const bradyTHTElektronikaSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-tht-11-797-10': 'elektronika',
  'brady-tht-38-768-10': 'elektronika',
  'brady-tht-104-729-20': 'elektronika',
  'brady-tht-38-719-10': 'elektronika',
  'brady-tht-96-728-10': 'elektronika',
  'brady-tht-97-767-10': 'elektronika',
  'brady-tht-45-717-10': 'elektronika',
  'brady-tht-12-727-10': 'elektronika',
  'brady-tht-209-7727-10': 'elektronika',
  'brady-thtclt-01-7727-5': 'elektronika',
  'brady-tht-1-473-10': 'elektronika',
  'brady-tht-208-777-10': 'elektronika',
  'brady-tht-14-724-10': 'elektronika',
  'brady-tht-14-776-10': 'elektronika',
  'brady-tht-14-459-10': 'elektronika',
}
