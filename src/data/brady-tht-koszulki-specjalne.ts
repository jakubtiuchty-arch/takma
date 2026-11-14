import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Koszulki wysokotemperaturowe (B-345), odporne na olej napędowy (B-7646), koszulki LSZH z komórką i75 (B-7641)
// i wkładki DuraSleeve (B-7697) na rolkach z gilzą 76 mm do drukarek Brady i6100, i7100 i i7500.
// Jedna karta na materiał z brady.eu, PN jako warianty. 14.11.2026.

const DRUKARKI: Record<string, { nazwa: string; slug: string }> = {
  '6': { nazwa: 'i6100', slug: 'brady-i6100' },
  '1': { nazwa: 'i7100', slug: 'brady-i7100' },
  '5': { nazwa: 'i7500', slug: 'brady-i7500' },
}
const KODY_DRUKAREK = ['6', '1', '5']

const wyliczenie = (elementy: string[]) => (elementy.length > 1 ? `${elementy.slice(0, -1).join(', ')} i ${elementy[elementy.length - 1]}` : elementy[0])

const listaDrukarek = (kody: string) =>
  wyliczenie(KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => `Brady ${DRUKARKI[k].nazwa}`)).replace(/ i Brady /, ' i ').replace(/, Brady /g, ', ')

const linkiDrukarek = (kody: string) =>
  wyliczenie(KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => `[Brady ${DRUKARKI[k].nazwa}](/produkt/${DRUKARKI[k].slug})`))

const relatedProducts = (kody: string) => KODY_DRUKAREK.filter((k) => kody.includes(k)).map((k) => DRUKARKI[k].slug)

// Kody drukarek rodziny to suma kodów jej PN; PN spoza podzbioru trafiają do pozycji „Uwagi o zgodności”.
const kodyRodziny = (wiersze: { pn: string; drukarki: string }[]) => KODY_DRUKAREK.filter((k) => wiersze.some((w) => w.drukarki.includes(k))).join('')

const uwagiZgodnosci = (wiersze: { pn: string; drukarki: string }[]) => {
  const kody = kodyRodziny(wiersze)
  const opisy = KODY_DRUKAREK.filter((k) => kody.includes(k)).flatMap((k) => {
    const pasuja = wiersze.filter((w) => w.drukarki.includes(k)).map((w) => w.pn)
    const nie = wiersze.filter((w) => !w.drukarki.includes(k)).map((w) => w.pn)
    if (nie.length === 0) return []
    return [pasuja.length <= nie.length ? `${DRUKARKI[k].nazwa}: tylko PN ${pasuja.join(', ')}` : `${DRUKARKI[k].nazwa}: bez PN ${nie.join(', ')}`]
  })
  return opisy.length ? [{ name: 'Uwagi o zgodności', value: opisy.join('; ') }] : []
}

const liczba = (n: number) => (n >= 10000 ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : String(n))

// ---------------------------------------------------------------------------
// Koszulki wysokotemperaturowe PermaSleeve z PVDF B-345 (pid-2ht-…, pid-3ht-094-…)
// ---------------------------------------------------------------------------

// [PN, nr art., średnica koszulki, wysokość pola nadruku, sztuk na rolce, zakres przewodu, AWG, kolor, drukarki]
type WierszHT = { pn: string; art: string; srednica: string; wysokosc: string; szt: number; przewod: string; awg: string; kolor: 'WT' | 'BK'; drukarki: string }
const HT_345: WierszHT[] = [
  { pn: '3HT-094-2-WT-S', art: '114309', srednica: '2,39', wysokosc: '4,62', szt: 500, przewod: '0,80–2,03', awg: '26–20', kolor: 'WT', drukarki: '15' },
  { pn: '2HT-125-2-WT-S', art: '114314', srednica: '3,18', wysokosc: '5,97', szt: 500, przewod: '1,57–2,79', awg: '20–16', kolor: 'WT', drukarki: '615' },
  { pn: '2HT-187-2-WT-S', art: '114319', srednica: '4,75', wysokosc: '8,51', szt: 500, przewod: '2,39–3,81', awg: '16–10', kolor: 'WT', drukarki: '615' },
  { pn: '2HT-250-2-WT-S', art: '114324', srednica: '6,35', wysokosc: '11,15', szt: 500, przewod: '3,18–5,46', awg: '12–8', kolor: 'WT', drukarki: '615' },
  { pn: '2HT-375-2-WT-S', art: '114329', srednica: '9,53', wysokosc: '16,38', szt: 250, przewod: '4,75–8,13', awg: '8–4', kolor: 'WT', drukarki: '615' },
  { pn: '2HT-375-2-BK-S', art: '114332', srednica: '9,53', wysokosc: '16,38', szt: 250, przewod: '4,75–8,13', awg: '8–4', kolor: 'BK', drukarki: '615' },
  { pn: '2HT-500-2-WT-S', art: '114334', srednica: '12,70', wysokosc: '21,62', szt: 250, przewod: '6,35–11,43', awg: '6–1', kolor: 'WT', drukarki: '615' },
]
const KODY_HT = kodyRodziny(HT_345)

export const bradyTHTPermaSleeveHT: Product = {
  ...wspolneTHT,
  id: 'brady-2ht-125-2-wt-s',
  slug: 'brady-2ht-125-2-wt-s',
  name: 'Koszulki termokurczliwe Brady PermaSleeve High Temperature B-345 z PVDF na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-345 — koszulki do 225 °C, i6100, i7100',
  seoDescription: 'Koszulki Brady PermaSleeve High Temperature B-345 do drukarek Brady i6100, i7100 i i7500: PVDF, do 225 °C. PN: 2HT-125-2-WT-S, 2HT-375-2-BK-S.',
  shortDescription: 'Brady PermaSleeve B-345 to koszulki z fluorku poliwinylidenu na przewody od 0,80 do 11,43 mm, odporne na temperaturę do 225 °C. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki B-345 wykonano z fluorku poliwinylidenu (PVDF), tworzywa o podwyższonej odporności termicznej. Materiał jest matowy, trudnopalny i termokurczliwy. Drukarka termotransferowa nadrukowuje opis na obu stronach koszulki. Koszulki znakują przewody w układach elektrycznych oraz okablowaniu urządzeń.\n\nSiedem wersji obejmuje średnice koszulek od 2,39 do 12,70 mm. Pasują do nich przewody o średnicy od 0,80 do 11,43 mm (26–1 AWG). We wszystkich wersjach długość koszulki to 50,8 mm. Rolka mieści 500 sztuk przy średnicach do 6,35 mm i 250 sztuk przy większych. Rozmiar 9,53 mm jest dostępny w bieli i czerni, pozostałe tylko w bieli.\n\nKoszulka znosi temperatury od −55 do 225 °C. Normy materiału: SAE-AMS-DTL-23053/18 w klasie 2, SAE AS-81531 i wymaganie MIL-STD-202G dla metody 215K. Dodatkowo obowiązuje NASA SP-R-0022A, dotycząca wydzielania gazów. Białe koszulki drukuje się taśmą barwiącą R6600, czarne taśmą R4400-WT. Taśmę kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/high-temperature-permasleeve-wire-marking-sleeves-pid-2ht-125-2-wt-s',
  relatedProducts: relatedProducts(KODY_HT),
  images: [
    '/images/products/brady/2ht-125-2-wt-s.png',
    '/images/products/brady/2ht-375-2-bk-s.png',
  ],
  imageDescriptions: [
    'Rolka Brady 2HT-125-2-WT-S z białymi koszulkami termokurczliwymi PermaSleeve High Temperature na nośniku z perforacją',
    'Arkusz nośnika Brady 2HT-375-2-BK-S z dwiema czarnymi koszulkami termokurczliwymi PermaSleeve High Temperature',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-345' },
    { name: 'Typ materiału', value: 'fluorek poliwinylidenu (PVDF) termokurczliwy, trudnopalny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 225 °C' },
    { name: 'Kolor', value: 'biały; czarny (tylko Ø 9,53 mm)' },
    { name: 'Średnica koszulki', value: 'od 2,39 do 12,70 mm, zależnie od wersji' },
    { name: 'Skurcz', value: '2:1; 3:1 dla średnicy 2,39 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,80 do 11,43 mm (26 AWG – 1 AWG), zależnie od wersji' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, wysokość od 4,62 do 21,62 mm' },
    { name: 'Liczba sztuk na rolce', value: '500 albo 250, zależnie od wersji' },
    { name: 'Normy', value: 'MIL-STD-202G, metoda 215K; SAE AS-81531; SAE-AMS-DTL-23053/18 (klasa 2); NASA SP-R-0022A (wydzielanie gazów)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6000, IP-R6600) do koszulek białych; R4400-WT (i75-R4400-WT, IP-R4400-WT) do czarnych' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_HT) },
    ...uwagiZgodnosci(HT_345),
    { name: 'Numery artykułów Brady', value: HT_345.map((w) => `${w.pn}: ${w.art}`).join('; ') },
  ],
  variants: HT_345.map((w) => ({
    partNumber: w.pn,
    name: `Brady ${w.pn} — ${w.kolor === 'BK' ? 'czarna' : 'biała'} koszulka termokurczliwa PermaSleeve B-345 Ø ${w.srednica} × 50,8 mm`,
    attributes: {
      Rozmiar: `Ø ${w.srednica} × 50,8 mm, ${w.szt} szt.`,
      Przewód: `Ø ${w.przewod} mm`,
      Kolor: w.kolor === 'BK' ? 'Czarny' : 'Biały',
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koszulki przed obkurczeniem, jej długość i liczba sztuk na rolce.\n\nKażda koszulka ma 50,8 mm długości, a rolki liczą 250 albo 500 sztuk.',
    Przewód: 'Zakres średnicy przewodu, który obejmuje koszulka po obkurczeniu.\n\nZakresy rosną od 0,80–2,03 mm do 6,35–11,43 mm.',
    Kolor: 'Kolor koszulki.\n\nCzarna wersja występuje tylko w średnicy 9,53 mm, reszta jest biała.',
  },
  faq: [
    { question: 'Jakie przewody oznacza się koszulkami B-345?', answer: 'Przewody o średnicy od 0,80 do 11,43 mm (26–1 AWG). Rozmiar koszulki dobiera się tak, aby jego zakres obejmował średnicę izolacji.' },
    { question: 'Do jakiej temperatury wytrzymują koszulki B-345?', answer: `Zakres pracy to od −55 do 225 °C. Koszulki drukują drukarki ${linkiDrukarek(KODY_HT)}.` },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek B-345?', answer: 'Do białych koszulek zaleca się taśmę R6600, a w drukarce i7500 także i75-R6000. Do czarnych koszulek zaleca się taśmę R4400-WT, w drukarce i7500 i75-R4400-WT.' },
  ],
  applications: ['Oznaczanie przewodów narażonych na wysoką temperaturę', 'Znakowanie okablowania elektrycznego', 'Identyfikacja przewodów 26–1 AWG'],
}

// ---------------------------------------------------------------------------
// Koszulki PermaSleeve B-7646 odporne na olej napędowy (cps-5255315, cps-5255324, cps-5255340, cps-5257024)
// ---------------------------------------------------------------------------

// [PN, średnica koszulki, długość, sztuk na rolce, zakres przewodu, drukarki]
type WierszDPS = { pn: string; srednica: string; dlugosc: string; szt: number; przewod?: string; drukarki: string }
const DPS_7646: WierszDPS[] = [
  { pn: '621994', srednica: '3,18', dlugosc: '12,7', szt: 10000, drukarki: '15' },
  { pn: '621992', srednica: '3,18', dlugosc: '25,4', szt: 5000, drukarki: '615' },
  { pn: '620612', srednica: '4,75', dlugosc: '50,8', szt: 2500, przewod: '1,57–3,81', drukarki: '615' },
  { pn: '621995', srednica: '4,75', dlugosc: '25,4', szt: 5000, przewod: '1,57–3,81', drukarki: '615' },
  { pn: '620613', srednica: '6,35', dlugosc: '50,8', szt: 2500, przewod: '2,39–5,46', drukarki: '615' },
  { pn: '621998', srednica: '6,35', dlugosc: '25,4', szt: 5000, przewod: '2,39–5,46', drukarki: '615' },
  { pn: '620615', srednica: '12,70', dlugosc: '50,8', szt: 500, przewod: '4,75–11,43', drukarki: '615' },
  { pn: '621989', srednica: '12,70', dlugosc: '25,4', szt: 1000, przewod: '4,75–11,43', drukarki: '615' },
  { pn: '622548', srednica: '19,10', dlugosc: '50,8', szt: 500, przewod: '6,00–19,10', drukarki: '65' },
  { pn: '622549', srednica: '19,10', dlugosc: '25,4', szt: 1000, przewod: '6,00–19,10', drukarki: '65' },
]
const KODY_DPS = kodyRodziny(DPS_7646)

export const bradyTHTPermaSleeveDiesel: Product = {
  ...wspolneTHT,
  id: 'brady-620612',
  slug: 'brady-620612',
  name: 'Koszulki termokurczliwe Brady PermaSleeve B-7646 odporne na olej napędowy na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve B-7646 — koszulki odporne na olej napędowy',
  seoDescription: 'Żółte koszulki termokurczliwe Brady PermaSleeve B-7646 odporne na olej napędowy do drukarek Brady i6100, i7100 i i7500. PN: 620612, 620613, 620615, 622548.',
  shortDescription: 'Brady PermaSleeve B-7646 to żółte koszulki z poliolefiny odpornej na olej napędowy, w średnicach od 3,18 do 19,10 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki B-7646 wykonano z poliolefiny odpornej na olej napędowy. Materiał jest żółty i matowy, a jego grubość wynosi 0,521 mm. Skurcz koszulki wynosi 3:1. Koszulki oznaczają przewody i kable elektryczne. Nadruk termotransferowy powstaje po obu stronach.\n\nDostępnych jest pięć średnic: 3,18, 4,75, 6,35, 12,70 i 19,10 mm. Zwykle koszulka jest długa (50,8 mm) albo krótka (25,4 mm), a Ø 3,18 mm występuje w długościach 25,4 i 12,7 mm. Krótsza wersja daje na rolce więcej sztuk, od 1000 do 10 000. Przewody od 1,57 do 3,81 mm pasują do Ø 4,75 mm, a od 4,75 do 11,43 mm do Ø 12,70 mm. Największa koszulka obejmuje przewody do 19,10 mm.\n\nZakres temperatur obejmuje przedział od −55 do 135 °C. Koszulka znosi wilgoć, korozję, UV, wpływ pogody i działanie chemikaliów. Normy: MIL-STD-202G (metoda 215K), NF F 00-608 (typ A i H) i SAE AS-81531. Taśma barwiąca R6600 jest zalecana i sprzedawana osobno.',
  sameAs: 'https://www.brady.eu/labels/permasleeve-diesel-resistant-wire-marking-sleeves-475-mm-diameter-for-76-mm-core-printers-cps-5255315',
  relatedProducts: relatedProducts(KODY_DPS),
  images: [
    '/images/products/brady/620612.png',
    '/images/products/brady/622548.png',
  ],
  imageDescriptions: [
    'Rolka Brady 620612 z żółtymi koszulkami termokurczliwymi PermaSleeve odpornymi na olej napędowy na nośniku z perforacją',
    'Rolka Brady 622548 z żółtymi koszulkami PermaSleeve Ø 19,10 mm wysuniętymi na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7646' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, odporna na olej napędowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'dwustronny, termotransfer' },
    { name: 'Grubość', value: '0,521 mm' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Odporność', value: 'olej napędowy, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'żółty' },
    { name: 'Średnica koszulki', value: '3,18 / 4,75 / 6,35 / 12,70 / 19,10 mm, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,57 do 19,10 mm, zależnie od wersji (bez danych dla Ø 3,18 mm)' },
    { name: 'Wymiary etykiety', value: 'długość 12,7 / 25,4 / 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: 'od 500 do 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'MIL-STD-202G, metoda 215K; NF F 00-608 (typ A i H); SAE AS-81531' },
    { name: 'Zalecana taśma barwiąca', value: 'R6600 (i75-R6600)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_DPS) },
    ...uwagiZgodnosci(DPS_7646),
  ],
  variants: DPS_7646.map((w) => ({
    partNumber: w.pn,
    name: `Brady ${w.pn} — koszulka termokurczliwa PermaSleeve B-7646 odporna na olej napędowy Ø ${w.srednica} × ${w.dlugosc} mm, ${liczba(w.szt)} szt.`,
    attributes: {
      Rozmiar: `${w.srednica} × ${w.dlugosc} mm, ${liczba(w.szt)} szt.`,
      ...(w.przewod ? { Przewód: `Ø ${w.przewod} mm` } : {}),
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koszulki przed obkurczeniem, jej długość (w tej kolejności) i liczba sztuk na rolce.\n\nKrótsza koszulka daje na rolce więcej sztuk niż dłuższa o tej samej średnicy.',
    Przewód: 'Zakres średnicy przewodu, który obejmuje koszulka po obkurczeniu.\n\nZakresy rosną od 1,57–3,81 mm do 6,00–19,10 mm. Dla Ø 3,18 mm zakresu nie podano.',
  },
  faq: [
    { question: 'Czy koszulki B-7646 są odporne na olej napędowy?', answer: 'Tak. Poliolefina tego typu jest odporna na olej napędowy, a oprócz tego na chemikalia, korozję, wilgoć i promieniowanie UV.' },
    { question: 'Którą drukarką drukuje się koszulki B-7646?', answer: `Zgodne drukarki to ${linkiDrukarek(KODY_DPS)}. Koszulki Ø 19,10 mm nie pasują do drukarki Brady i7100.` },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek B-7646?', answer: 'Zaleca się taśmę barwiącą R6600, a w drukarce i7500 odpowiednik i75-R6600. Taśmę kupuje się osobno.' },
  ],
  applications: ['Znakowanie przewodów narażonych na olej napędowy', 'Oznaczanie okablowania pojazdów i maszyn', 'Identyfikacja kabli narażonych na chemikalia'],
}

// ---------------------------------------------------------------------------
// Koszulki PermaSleeve LSZH B-7641 z komórką inteligentną i75 (cps-5066965)
// ---------------------------------------------------------------------------

// [PN, sztuk na rolce, nadruk (J jednostronny, D dwustronny), średnica, długość, kolor, drukarki]
type WierszLSZH = { pn: string; szt: number; nadruk: 'J' | 'D'; srednica: '4,75' | '6,35'; dlugosc: string; kolor: string; drukarki: string }
const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty', RD: 'Czerwony', BL: 'Niebieski' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', YL: 'żółta', RD: 'czerwona', BL: 'niebieska' }
const w4 = (pn: string, szt: number, nadruk: 'J' | 'D', dlugosc: string, kolor: string): WierszLSZH => ({ pn, szt, nadruk, srednica: '4,75', dlugosc, kolor, drukarki: '615' })
const w6 = (pn: string, szt: number, nadruk: 'J' | 'D', dlugosc: string, kolor: string): WierszLSZH => ({ pn, szt, nadruk, srednica: '6,35', dlugosc, kolor, drukarki: '615' })
const LSZH_I75: WierszLSZH[] = [
  w4('LSZH-187-150-YL-M', 1000, 'J', '38,1', 'YL'),
  w4('LSZH-187-2-WT-M', 1000, 'J', '50,8', 'WT'),
  w4('LSZH-187-2-YL-M', 1000, 'J', '50,8', 'YL'),
  w4('LSZH-187-150-W-M-2', 2000, 'J', '19,05', 'WT'),
  w4('LSZH-187-150-Y-M-2', 2000, 'J', '19,05', 'YL'),
  w4('LSZH-187-2-RD-M-2', 2000, 'J', '25,4', 'RD'),
  w4('LSZH-187-2-WT-M-2', 2000, 'J', '25,4', 'WT'),
  w4('LSZH-187-2-YL-M-2', 2000, 'J', '25,4', 'YL'),
  w4('LSZH-187-2-WT-M-3', 3000, 'J', '17,02', 'WT'),
  w4('LSZH-187-2-YL-M-3', 3000, 'J', '17,02', 'YL'),
  w4('LSZH-187-2-WT-M-4', 4000, 'J', '12,7', 'WT'),
  w4('LSZH-187-2-YL-M-4', 4000, 'J', '12,7', 'YL'),
  w4('2LSZH-187-2-WT-M', 1000, 'D', '50,8', 'WT'),
  w4('2LSZH-187-2-YL-M', 1000, 'D', '50,8', 'YL'),
  w4('2LSZH-187-2-RD-M-2', 2000, 'D', '25,4', 'RD'),
  w4('2LSZH-187-2-WT-M-2', 2000, 'D', '25,4', 'WT'),
  w4('2LSZH-187-2-YL-M-2', 2000, 'D', '25,4', 'YL'),
  w4('2LSZH-187-2-WT-M-3', 3000, 'D', '17,02', 'WT'),
  w4('2LSZH-187-2-YL-M-3', 3000, 'D', '17,02', 'YL'),
  w4('2LSZH-187-2-WT-M-4', 4000, 'D', '12,7', 'WT'),
  w4('2LSZH-187-2-YL-M-4', 4000, 'D', '12,7', 'YL'),
  w6('LSZH-250-150-WT-M', 1000, 'J', '38,1', 'WT'),
  w6('LSZH-250-150-YL-M', 1000, 'J', '38,1', 'YL'),
  w6('LSZH-250-2-RD-M', 1000, 'J', '25,4', 'RD'),
  w6('LSZH-250-2-WT-M', 1000, 'J', '50,8', 'WT'),
  w6('LSZH-250-2-YL-M', 1000, 'J', '50,8', 'YL'),
  w6('LSZH-250-150-W-M-2', 2000, 'J', '19,05', 'WT'),
  w6('LSZH-250-150-Y-M-2', 2000, 'J', '19,05', 'YL'),
  w6('LSZH-250-2-WT-M-2', 2000, 'J', '25,4', 'WT'),
  w6('LSZH-250-2-YL-M-2', 2000, 'J', '25,4', 'YL'),
  w6('LSZH-250-2-WT-M-3', 3000, 'J', '17,02', 'WT'),
  w6('LSZH-250-2-YL-M-3', 3000, 'J', '17,02', 'YL'),
  w6('LSZH-250-2-WT-M-4', 4000, 'J', '12,7', 'WT'),
  w6('LSZH-250-2-YL-M-4', 4000, 'J', '12,7', 'YL'),
  w6('2LSZH-250-2-BL-M', 1000, 'D', '25,4', 'BL'),
  w6('2LSZH-250-2-WT-M', 1000, 'D', '50,8', 'WT'),
  w6('2LSZH-250-2-YL-M', 1000, 'D', '50,8', 'YL'),
  w6('2LSZH-250-2-WT-M-2', 2000, 'D', '25,4', 'WT'),
  w6('2LSZH-250-2-YL-M-2', 2000, 'D', '25,4', 'YL'),
  w6('2LSZH-250-2-WT-M-3', 3000, 'D', '17,02', 'WT'),
  w6('2LSZH-250-2-YL-M-3', 3000, 'D', '17,02', 'YL'),
  w6('2LSZH-250-2-WT-M-4', 4000, 'D', '12,7', 'WT'),
  w6('2LSZH-250-2-YL-M-4', 4000, 'D', '12,7', 'YL'),
]
const KODY_LSZH = kodyRodziny(LSZH_I75)

export const bradyTHTPermaSleeveLszhI75: Product = {
  ...wspolneTHT,
  id: 'brady-lszh-187-150-yl-m',
  slug: 'brady-lszh-187-150-yl-m',
  name: 'Koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 z komórką inteligentną i75 na rolce 76 mm',
  seoTitle: 'Brady PermaSleeve LSZH B-7641 — koszulki i75, i6100, i7100',
  seoDescription: 'Bezhalogenowe koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 z komórką i75 do drukarek Brady i6100, i7100 i i7500. PN: LSZH-187-2-WT-M, 2LSZH-250-2-YL-M.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 to bezhalogenowe koszulki o niskiej emisji dymu, z komórką inteligentną rozpoznawaną przez drukarkę i7500. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Koszulki LSZH z oznaczeniem M mają komórkę inteligentną serii i75. Drukarka i7500 rozpoznaje taką rolkę sama. Nie wymaga kalibracji, nie marnuje pustych koszulek i nie trzeba ustawiać prędkości, temperatury ani czujnika. Pierwsza koszulka jest drukowana poprawnie. Materiał B-7641 to poliolefina trudnopalna, samogasnąca, bezhalogenowa i emitująca mało dymu.\n\nŚrednica koszulki to 4,75 albo 6,35 mm, a długość wynosi 12,7–50,8 mm. Rolka zawiera od 1000 do 4000 sztuk. Kolory to biały, żółty i czerwony, a w średnicy 6,35 mm także niebieski. Występuje nadruk jednostronny albo dwustronny (oznaczenie 2LSZH). Koszulka Ø 4,75 mm obejmuje przewody 2,39–3,84 mm (16–10 AWG).\n\nMateriał znosi od −55 do 105 °C. Skurcz wynosi 2:1, powierzchnia jest matowa, a koszulka odporna na chemikalia, korozję, wilgoć, UV oraz pogodę. Zalecane taśmy barwiące to R6002 i R6602, a taśma bezhalogenowa to R6007. Taśmę kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/heat-shrink-sleeve-for-i7500-label-printer-cps-5066965',
  relatedProducts: relatedProducts(KODY_LSZH),
  images: [
    '/images/products/brady/lszh-187-2-wt-m.png',
    '/images/products/brady/lszh-187-2-rd-m-2.png',
  ],
  imageDescriptions: [
    'Pudełko Brady LSZH-187-2-WT-M z rolką białych koszulek termokurczliwych PermaSleeve LSZH i wysuniętym nośnikiem',
    'Pudełko Brady LSZH-187-2-RD-M-2 z rolką czerwonych koszulek termokurczliwych PermaSleeve LSZH',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych PermaSleeve z komórką i75, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, bezhalogenowa, o niskiej emisji dymu, trudnopalna, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'jednostronny albo dwustronny, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały, żółty, czerwony, niebieski (tylko Ø 6,35 mm)' },
    { name: 'Średnica koszulki', value: '4,75 / 6,35 mm' },
    { name: 'Zakres średnicy przewodu', value: 'Ø 4,75 mm: od 2,39 do 3,84 mm (16 AWG – 10 AWG)' },
    { name: 'Wymiary etykiety', value: 'długość od 12,7 do 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 1000 do 4000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002, R6602 (i75-R6002, i75-R6602); bezhalogenowa R6007 (i75-R6007)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_LSZH) },
    ...uwagiZgodnosci(LSZH_I75),
  ],
  variants: LSZH_I75.map((w) => ({
    partNumber: w.pn,
    name: `Brady ${w.pn} — ${KOLORY_ZENSKIE[w.kolor]} koszulka PermaSleeve LSZH B-7641 Ø ${w.srednica} × ${w.dlugosc} mm, nadruk ${w.nadruk === 'D' ? 'dwustronny' : 'jednostronny'}`,
    attributes: {
      Rozmiar: `Ø ${w.srednica} × ${w.dlugosc} mm, ${w.szt} szt.`,
      Nadruk: w.nadruk === 'D' ? 'Dwustronny' : 'Jednostronny',
      Kolor: KOLORY[w.kolor],
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Średnica koszulki przed obkurczeniem, jej długość i liczba sztuk na rolce.\n\nŚrednice to 4,75 i 6,35 mm, a rolki liczą od 1000 do 4000 sztuk.',
    Nadruk: 'Liczba stron koszulki, na których drukarka umieszcza nadruk.\n\nWersje 2LSZH mają nadruk dwustronny, pozostałe jednostronny.',
    Kolor: 'Kolor koszulki.\n\nBiały i żółty występują w obu średnicach, a niebieski tylko w koszulce Ø 6,35 mm.',
  },
  faq: [
    { question: 'Co daje komórka inteligentna i75 w koszulkach LSZH?', answer: 'Drukarka Brady i7500 rozpoznaje rolkę automatycznie. Nie trzeba kalibracji ani ustawiania prędkości, ciepła i czujnika, a pierwsza koszulka drukuje się poprawnie.' },
    { question: 'Jakie drukarki obsługują koszulki B-7641 z oznaczeniem M?', answer: `Zgodne drukarki to ${linkiDrukarek(KODY_LSZH)}. Rozpoznawanie rolki bez kalibracji dotyczy drukarki i7500.` },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek LSZH B-7641?', answer: 'Zaleca się taśmy R6002 i R6602, a taśma bezhalogenowa to R6007. W drukarce i7500 stosuje się wersje i75-R6002, i75-R6602 i i75-R6007.' },
  ],
  applications: ['Znakowanie przewodów w obiektach o podwyższonych wymaganiach przeciwpożarowych', 'Oznaczanie okablowania teletechnicznego i elektrycznego', 'Identyfikacja przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Sztywne wkładki DuraSleeve z poliestru B-7697 (cps-4372016)
// ---------------------------------------------------------------------------

// [PN, szerokość, sztuk na rolce, kolor, drukarki]
type WierszDS = { pn: string; szer: string; szt: number; kolor: 'WT' | 'YL'; drukarki: string }
const DS_7697: WierszDS[] = [
  { pn: '198733', szer: '10', szt: 5000, kolor: 'WT', drukarki: '15' },
  { pn: '198734', szer: '12', szt: 5000, kolor: 'WT', drukarki: '15' },
  { pn: '198735', szer: '16', szt: 5000, kolor: 'WT', drukarki: '15' },
  { pn: '622070', szer: '16', szt: 10000, kolor: 'YL', drukarki: '15' },
  { pn: '198736', szer: '23', szt: 5000, kolor: 'WT', drukarki: '15' },
  { pn: '620567', szer: '23', szt: 4000, kolor: 'WT', drukarki: '15' },
  { pn: '622071', szer: '30', szt: 10000, kolor: 'YL', drukarki: '15' },
  { pn: '198737', szer: '30,63', szt: 5000, kolor: 'WT', drukarki: '15' },
]
const KODY_DS = kodyRodziny(DS_7697)

export const bradyTHTDuraSleeveSztywne: Product = {
  ...wspolneTHT,
  id: 'brady-198733',
  slug: 'brady-198733',
  name: 'Sztywne wkładki DuraSleeve Brady B-7697 do znakowania przewodów na rolce 76 mm',
  seoTitle: 'Brady DuraSleeve B-7697 — sztywne wkładki do i7100, i7500',
  seoDescription: 'Sztywne wkładki Brady DuraSleeve B-7697 z poliestru do znakowania przewodów, do drukarek Brady i7100 i i7500: od −40 do 120 °C. PN: 198733, 198735, 622070.',
  shortDescription: 'Brady DuraSleeve B-7697 to sztywne wkładki z poliestru do znakowania przewodów, w szerokościach od 10 do 30,63 mm. Do drukarek Brady i7100 i i7500.',
  description: 'Wkładki B-7697 służą do znakowania przewodów w instalacjach elektrycznych, telekomunikacyjnych i teletechnicznych. Wykonano je ze sztywnego poliestru o grubości 0,35 mm i matowej powierzchni. Każda wkładka ma kształt prostokąta. Opis przewodu nanosi na nią drukarka termotransferowa.\n\nWysokość wkładki wynosi 4,4 mm, a szerokość od 10 do 30,63 mm. Na rolce znajduje się 4000–10 000 wkładek. Większość PN jest biała, a dwa żółte mają szerokość 16 i 30 mm. W wersji 198733 na szerokości nośnika leżą dwie wkładki obok siebie. Szerokość wstęgi wynosi tam 56 mm, a skok pionowy 11,46 mm. Wkładka mierzy tam 10 × 4,4 mm, a rolka jest dostępna w bieli.\n\nTemperatura pracy poliestru wynosi od −40 do 120 °C. Taśmy barwiące do tego materiału pochodzą z serii R4300 i R6200 i są sprzedawane osobno.',
  sameAs: 'https://www.brady.eu/labels/rigid-durasleeve-wire-marking-labels-for-thermal-transfer-printers-cps-4372016',
  relatedProducts: relatedProducts(KODY_DS),
  images: [
    '/images/products/brady/198735.png',
  ],
  imageDescriptions: [
    'Rolka białych sztywnych wkładek DuraSleeve Brady B-7697 z wysuniętym nośnikiem z wycięciami',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka sztywnych wkładek DuraSleeve, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7697' },
    { name: 'Typ materiału', value: 'poliester sztywny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,35 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'szerokość od 10 do 30,63 mm, wysokość 4,4 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 4000 do 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'serie R4300 i R6200' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: listaDrukarek(KODY_DS) },
    ...uwagiZgodnosci(DS_7697),
  ],
  variants: DS_7697.map((w) => ({
    partNumber: w.pn,
    name: `Brady ${w.pn} — ${w.kolor === 'YL' ? 'żółta' : 'biała'} sztywna wkładka DuraSleeve B-7697 ${w.szer} × 4,4 mm, ${liczba(w.szt)} szt.`,
    attributes: {
      Rozmiar: `${w.szer} × 4,4 mm, ${liczba(w.szt)} szt.`,
      Kolor: w.kolor === 'YL' ? 'Żółty' : 'Biały',
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość wkładki oraz liczba sztuk na rolce.\n\nSzerokości mieszczą się w przedziale od 10 do 30,63 mm, a rolki liczą od 4000 do 10 000 sztuk.',
    Kolor: 'Kolor wkładki.\n\nŻółte są dwa PN o szerokości 16 i 30 mm, pozostałe są białe.',
  },
  faq: [
    { question: 'Do czego służą sztywne wkładki DuraSleeve B-7697?', answer: 'Do znakowania przewodów w instalacjach elektrycznych i telekomunikacyjnych. Opis drukuje się na wkładce termotransferowo, a materiałem jest sztywny poliester o grubości 0,35 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do wkładek B-7697?', answer: `Zaleca się taśmy z serii R4300 i R6200. Wkładki drukują drukarki ${linkiDrukarek(KODY_DS)}.` },
  ],
  applications: ['Znakowanie przewodów w instalacjach elektrycznych', 'Oznaczanie okablowania elektrycznego i teletechnicznego'],
}

// ---------------------------------------------------------------------------
// Eksport: wszystkie karty tego pliku
// ---------------------------------------------------------------------------

export const bradyTHTKoszulkiSpecjalne: Product[] = [
  bradyTHTPermaSleeveHT,
  bradyTHTPermaSleeveDiesel,
  bradyTHTPermaSleeveLszhI75,
  bradyTHTDuraSleeveSztywne,
]

export const bradyTHTKoszulkiSpecjalneSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-2ht-125-2-wt-s': 'przewody',
  'brady-620612': 'przewody',
  'brady-lszh-187-150-yl-m': 'przewody',
  'brady-198733': 'przewody',
}
