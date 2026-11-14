import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Etykiety zabezpieczające, papierowe, polipropylenowe, nylonowe i specjalne Brady na rolkach z gilzą 76 mm do drukarek i6100, i7100 i i7500:
// Defender B-438, B-7576 i B-362, taśma nylonowa B-499, polipropylen B-425A, B-449 i B-7600, poliester B-533 i B-494, papier B-424, B-7610, B-403 i B-408,
// winyl B-439 i wskaźnik wody B-350. Jedna karta na rodzinę z brady.eu, PN jako warianty. Dane Brady przeczą sobie przy temperaturach
// (autoklaw i ciekły azot przy górnej granicy 90–100 °C), dlatego karty podają zakres temperatur i tylko te warunki, które go nie przekraczają. 14.11.2026.

const DRUKARKI = 'i6100, i7100, i7500'
const LINKI_DRUKAREK = '[Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500)'

const liczba = (n: number) => String(n).replace('.', ',')
const KOLORY_ZENSKIE: Record<string, string> = { Srebrny: 'srebrna', Biały: 'biała', Żółty: 'żółta', Przezroczysty: 'przezroczysta' }
const sztuki = (n: number) => (n >= 10000 ? `${Math.floor(n / 1000)} ${String(n % 1000).padStart(3, '0')}` : String(n))
const rozmiar = (szer: number, wys: number, szt: number) => `${liczba(szer)} × ${liczba(wys)} mm, ${sztuki(szt)} szt.`

// ---------------------------------------------------------------------------
// Etykiety zabezpieczające Defender B-438, wzór szachownicy (cps-4358221)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const SZACHOWNICA_438: [string, number, number, number][] = [
  ['THT-17-438-3', 50.8, 25.4, 3000],
  ['THT-19-438-1', 76.2, 50.8, 1000],
  ['THT-14-438-10', 16.51, 5.08, 10000],
  ['THT-1-438-10', 19.05, 6.35, 10000],
  ['THT-12-438-10', 12.7, 11.1, 10000],
  ['THT-18-438-3', 76.2, 25.4, 3000],
  ['THT-5-438-10', 25.4, 12.7, 10000],
]

export const bradyTHTSzachownica438: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-438-3',
  slug: 'brady-tht-17-438-3',
  name: 'Etykiety zabezpieczające z poliestru metalizowanego Brady Defender B-438 na rolce 76 mm',
  seoTitle: 'Brady B-438 — etykiety zabezpieczające do i6100, i7100, i7500',
  seoDescription: 'Srebrne etykiety zabezpieczające Brady Defender B-438 ze wzorem szachownicy do drukarek Brady i6100, i7100 i i7500. PN: THT-17-438-3, THT-19-438-1, THT-21-438.',
  shortDescription: 'Brady THT-17-438-3 to srebrna etykieta zabezpieczająca, która po zdjęciu zostawia wzór szachownicy. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Defender B-438 to metalizowany poliester o srebrnym, matowym wyglądzie i grubości 0,085 mm. Etykieta przykleja się do powierzchni gładkich. Po jej zdjęciu na podłożu zostaje wzór szachownicy, więc próba otwarcia jest widoczna. Etykiety zabezpieczają i identyfikują: znakują wyposażenie, inwentarz oraz płytki drukowane po lutowaniu, od strony górnej przy elementach przewlekanych (THT). Przy montażu powierzchniowym (SMT) materiał nie działa.\n\nW rodzinie jest siedem etykiet o szerokości 12,7–76,2 mm i wysokości 5,08–50,8 mm. Im mniejszy format, tym więcej etykiet nawinięto na rolkę, od 1000 do 10 000. Taśma ciągła THT-21-438 ma 91,44 m długości i szerokość 76,2 mm.\n\nGórna granica pracy etykiety to 40 °C, a dolna −40 °C. Wytrzymuje kontakt z paliwami, olejami, rozpuszczalnikami i chemikaliami oraz działanie wilgoci, UV i deszczu. CSA zaakceptowała materiał, a UL go uznała. Do nadruku wskazano taśmę R6000 (i75-R6000), zamawianą oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-tamper-evident-checkerboard-polyester-labels-cps-4358221',
  images: ['/images/products/brady/tht-17-438-3.png', '/images/products/brady/tht-19-438-1.png'],
  imageDescriptions: [
    'Rolka Brady THT-17-438-3 ze srebrnymi etykietami zabezpieczającymi B-438 i rozwiniętym paskiem na przodzie',
    'Rolka Brady THT-19-438-1 z dużymi srebrnymi etykietami 76,2 × 50,8 mm i rozwiniętym nośnikiem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet zabezpieczających, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Defender B-438' },
    { name: 'Typ materiału', value: 'poliester metalizowany, zabezpieczający przed manipulacją' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Grubość', value: '0,085 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 40 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, rozpuszczalniki, chemikalia, wilgoć, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Ślad po zdjęciu', value: 'wzór szachownicy' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'od 16,51 × 5,08 do 76,2 × 50,8 mm, zależnie od wersji; taśma ciągła 76,2 mm × 91,44 m' },
    { name: 'Liczba sztuk na rolce', value: '1000, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'CSA Accepted, UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (i75-R6000)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: [
    ...SZACHOWNICA_438.map(([pn, szer, wys, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — srebrna etykieta zabezpieczająca B-438 ${liczba(szer)} × ${liczba(wys)} mm`,
      attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-438',
      name: 'Brady THT-21-438 — srebrna taśma zabezpieczająca B-438 76,2 mm × 91,44 m',
      attributes: { Rozmiar: '76,2 mm × 91,44 m, taśma' } as Record<string, string>,
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 16,51 × 5,08 mm, a największa 76,2 × 50,8 mm. Jeden numer to taśma ciągła.',
  },
  faq: [
    { question: 'Jak działa zabezpieczenie etykiet B-438?', answer: 'Po zdjęciu etykiety na powierzchni zostaje wzór szachownicy. Ślad pokazuje, że ktoś otwierał opakowanie lub obudowę.' },
    { question: 'Czy etykiety B-438 nadają się do płytek drukowanych?', answer: 'Tak, po lutowaniu, od strony górnej przy montażu przewlekanym (THT). Do montażu powierzchniowego (SMT) materiał się nie nadaje.' },
    { question: 'Które drukarki drukują etykiety B-438?', answer: `Etykiety drukują ${LINKI_DRUKAREK}. Taśma barwiąca R6000 jest kupowana osobno.` },
  ],
  applications: ['Pieczętowanie opakowań i obudów', 'Znakowanie wyposażenia i inwentarza', 'Oznaczanie płytek drukowanych po lutowaniu'],
}

// ---------------------------------------------------------------------------
// Etykiety VOID Defender B-7576 i odmiany biała oraz przezroczysta (cps-4362967)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, kolor, w opakowaniu]
const VOID_7576: [string, number, number, number, string, boolean?][] = [
  ['THT-53-7576-3', 50.8, 12.7, 3000, 'Srebrny'],
  ['THT-19-7576-1', 76.2, 50.8, 1000, 'Srebrny'],
  ['THT-19-7546-1', 76.2, 50.8, 1000, 'Biały'],
  ['THT-17-7576-3', 50.8, 25.4, 3000, 'Srebrny'],
  ['THT-17-7546-3', 50.8, 25.4, 3000, 'Biały'],
  ['THT-18-7546-3', 76.2, 25.4, 3000, 'Biały'],
  ['THT-17-7566-3', 50.8, 25.4, 3000, 'Przezroczysty'],
  ['THT-18-7576-3', 76.2, 25.4, 3000, 'Srebrny'],
  ['THT-5-7546-10', 25.4, 12.7, 10000, 'Biały'],
  ['THT-59-7546-10', 25.4, 12.7, 10000, 'Biały', true],
  ['THT-147-7566-10', 38.1, 9.53, 10000, 'Przezroczysty'],
  ['020821', 69.85, 31.75, 3000, 'Srebrny'],
  ['THT-37-7576-10', 38.1, 12.7, 10000, 'Srebrny'],
  ['THT-7-7566-3', 69.85, 31.75, 3000, 'Przezroczysty'],
  ['THT-6-7576-10', 38.1, 19.05, 10000, 'Srebrny'],
]

export const bradyTHTVoid7576: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-7576-3',
  slug: 'brady-tht-53-7576-3',
  name: 'Etykiety zabezpieczające VOID z poliestru Brady Defender B-7576 na rolce 76 mm',
  seoTitle: 'Brady B-7576 — etykiety VOID do drukarek i6100, i7100, i7500',
  seoDescription: 'Etykiety VOID Brady Defender B-7576, srebrne, białe i przezroczyste, do drukarek Brady i6100, i7100 i i7500. PN: THT-53-7576-3, 020821, THT-17-7566-3.',
  shortDescription: 'Brady THT-53-7576-3 to etykieta VOID z metalizowanego poliestru, dostępna też w odmianie białej i przezroczystej. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykieta VOID z linii Defender zostawia na podłożu napis VOID, gdy ktoś ją zdejmie. Podstawowy materiał B-7576 to srebrny poliester z metalizacją, matowy i gruby na 0,071 mm. Klej jest akrylowy i trwały, a podłoże ma być gładkie. Oprócz niego rodzina obejmuje etykiety z poliestru białego i przezroczystego. Służą do plombowania towaru, oznaczeń inwentaryzacyjnych i kontrolnych oraz do identyfikacji ogólnej.\n\nPiętnaście numerów to trzy odmiany materiału: srebrna, biała i przezroczysta. Szerokość etykiet mieści się w granicach 25,4–76,2 mm. Liczba etykiet na rolce sięga od 1000 do 10 000. Część formatów układa etykiety w pary lub trójki obok siebie. Jeden numer, THT-59-7546-10, jest pakowany poza rolką.\n\nMetalizowana odmiana wytrzymuje zarówno −70 °C, jak i 100 °C. Naklejanie jest możliwe od 4 °C. Etykiety odpierają chemikalia, wilgoć, UV i pogodę, a materiał ma uznanie UL. Nadruk wykonuje taśma R6000 (i75-R6000), którą trzeba kupić oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-void-indicating-labels-cps-4362967',
  images: ['/images/products/brady/tht-53-7576-3.png', '/images/products/brady/tht-17-7566-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-53-7576-3 ze srebrnymi etykietami VOID i rozwiniętym paskiem na przodzie',
    'Rolka Brady THT-17-7566-3 z przezroczystymi etykietami VOID i nacięciami po bokach nośnika',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet zabezpieczających VOID, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Defender B-7576' },
    { name: 'Typ materiału', value: 'poliester metalizowany, zabezpieczający przed manipulacją; odmiany z poliestru białego i przezroczystego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,071 mm (wersja metalizowana)' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C (wersja metalizowana)' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Odporność', value: 'chemikalia, wilgoć, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Ślad po zdjęciu', value: 'napis VOID' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'srebrny, biały, przezroczysty' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 76,2 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (i75-R6000)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: VOID_7576.map(([pn, szer, wys, szt, kolor, opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} etykieta VOID ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt), Kolor: kolor, ...(opak ? { Forma: 'Opakowanie' } : {}) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 25,4 × 12,7 do 76,2 × 50,8 mm, a rolki liczą 1000, 3000 albo 10 000 sztuk.',
    Kolor: 'Kolor etykiety.\n\nSrebrny to poliester metalizowany. Biały i przezroczysty to poliester bez metalizacji.',
    Forma: 'Sposób dostawy etykiet.\n\nWiększość numerów dostarcza się na rolce. Jeden numer jest pakowany w opakowaniu.',
  },
  faq: [
    { question: 'Co zostaje na powierzchni po zdjęciu etykiety VOID?', answer: 'Napis VOID. Odciśnięty napis pokazuje, że etykietę zdejmowano.' },
    { question: 'W jakich kolorach występują etykiety B-7576?', answer: 'Srebrnym, białym i przezroczystym. Srebrna jest wersja metalizowana B-7576, a biała i przezroczysta to odmiany z poliestru.' },
    { question: 'Które drukarki obsługują etykiety VOID?', answer: `Etykiety drukują ${LINKI_DRUKAREK}. Zalecana taśma barwiąca R6000 jest kupowana osobno.` },
  ],
  applications: ['Plombowanie towaru i opakowań', 'Oznaczanie punktów kontroli i inwentaryzacji', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Etykiety zabezpieczające z metalizowanego winylu Defender B-362 (cps-4357637)
// ---------------------------------------------------------------------------

const WINYL_362: [string, number, number, number, boolean?][] = [
  ['146170', 50.8, 12.7, 3000],
  ['THT-17-362-3', 50.8, 25.4, 3000],
  ['THT-18-362-3', 76.2, 25.4, 3000],
  ['THT-5-362-10', 25.4, 12.7, 10000],
  ['THT-59-362-10', 25.4, 12.7, 10000, true],
  ['146173', 69.85, 31.75, 3000],
  ['THT-37-362-10', 38.1, 12.7, 10000],
  ['THT-6-362-10', 38.1, 19.05, 10000],
]

export const bradyTHTWinyl362: Product = {
  ...wspolneTHT,
  id: 'brady-146170',
  slug: 'brady-146170',
  name: 'Etykiety zabezpieczające z metalizowanego winylu Brady Defender B-362 na rolce 76 mm',
  seoTitle: 'Brady B-362 — etykiety z winylu do i6100, i7100, i7500',
  seoDescription: 'Błyszczące etykiety Brady Defender B-362 z metalizowanego winylu do drukarek Brady i6100, i7100 i i7500, odporne na manipulacje. PN: 146170, 146173.',
  shortDescription: 'Brady 146170 to srebrna etykieta winylowa, która przy zdzieraniu pęka na kawałki. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Defender B-362 to winyl z warstwą metalu, błyszczący i srebrny. Przy próbie zdarcia etykieta pęka i nie da się jej zdjąć w jednym kawałku. Grubość folii wynosi 0,064 mm. Klej akrylowy trzyma zarówno na podłożu gładkim, jak i szorstkim. Etykiety trafiają na podzespoły, urządzenia i zapasy oraz pełnią rolę plomb i znaków kontrolnych.\n\nOsiem numerów odpowiada siedmiu rozmiarom, bo jeden rozmiar (25,4 × 12,7 mm) wykonano w dwóch wersjach pakowania: na rolce i w opakowaniu. Szerokość etykiet mieści się między 25,4 a 76,2 mm, a wysokość między 12,7 a 31,75 mm. Wąskie formaty leżą na nośniku w dwóch lub trzech kolumnach. Rolka zawiera 3000 albo 10 000 etykiet.\n\nFolia nie traci właściwości przy −70 °C ani przy 80 °C; paliwa i oleje jej nie szkodzą. Do nadruku potrzebna jest taśma R6000 (i75-R6000), którą dokupuje się oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-tamper-resistant-metallised-vinyl-labels-cps-4357637',
  images: ['/images/products/brady/146170.png', '/images/products/brady/146173.png'],
  imageDescriptions: [
    'Rolka Brady 146170 ze srebrnymi etykietami z metalizowanego winylu i rozwiniętym paskiem na przodzie',
    'Rolka Brady 146173 z większymi srebrnymi etykietami zabezpieczającymi B-362',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet zabezpieczających, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Defender B-362' },
    { name: 'Typ materiału', value: 'winyl metalizowany, odporny na manipulacje' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,064 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 80 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, niskie temperatury' },
    { name: 'Zabezpieczenie', value: 'pęka przy zdzieraniu, nie schodzi w jednym kawałku' },
    { name: 'Powierzchnia', value: 'gładka, chropowata' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 76,2 × 25,4 mm oraz 69,85 × 31,75 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '3000 albo 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (i75-R6000)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: WINYL_362.map(([pn, szer, wys, szt, opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — srebrna etykieta winylowa B-362 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt), ...(opak ? { Forma: 'Opakowanie' } : {}) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary zaczynają się od 25,4 × 12,7 mm, a rolki liczą 3000 albo 10 000 etykiet.',
    Forma: 'Sposób dostawy etykiet.\n\nWiększość numerów dostarcza się na rolce. Jeden numer jest pakowany w opakowaniu.',
  },
  faq: [
    { question: 'Dlaczego etykiety B-362 chronią przed manipulacją?', answer: 'Metalizowany winyl pęka przy próbie zdarcia. Nie da się zdjąć etykiety w jednym kawałku i nakleić jej ponownie.' },
    { question: 'Do jakich powierzchni przykleja się B-362?', answer: 'Do gładkich oraz chropowatych. Klej akrylowy jest trwały, a materiał pracuje od −70 do 80 °C.' },
    { question: 'Które drukarki obsługują etykiety B-362?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Znakowanie podzespołów i urządzeń', 'Plomby i znaki kontrolne', 'Oznaczanie zapasów'],
}

// ---------------------------------------------------------------------------
// Taśma nylonowa z mocnym klejem B-499 (cps-4364330)
// ---------------------------------------------------------------------------

const TASMA_499: [string, number][] = [
  ['THT-500-499', 12.7],
  ['THT-750-499', 19.05],
  ['THT-1000-499', 25.4],
  ['THT-1500-499', 38.1],
]

export const bradyTHTTasma499: Product = {
  ...wspolneTHT,
  id: 'brady-tht-1000-499',
  slug: 'brady-tht-1000-499',
  name: 'Taśma nylonowa z mocnym klejem Brady B-499 na rolce 76 mm',
  seoTitle: 'Brady B-499 — taśma nylonowa do drukarek i6100, i7100, i7500',
  seoDescription: 'Biała taśma nylonowa Brady B-499 z mocnym klejem do drukarek Brady i6100, i7100 i i7500, szer. 12,7–38,1 mm. PN: THT-1000-499, THT-500-499, THT-1500-499.',
  shortDescription: 'Brady THT-1000-499 to biała taśma z tkaniny nylonowej na przewody, podzespoły i fiolki, w czterech szerokościach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Taśma B-499 to biała, matowa tkanina nylonowa o grubości 0,166 mm, wolna od halogenów. Mocny klej akrylowy chwyta podłoża gładkie, chropowate oraz silnie teksturowane, o niskiej energii powierzchniowej. Taśmą znakuje się przewody i kable, podzespoły, okablowanie elektryczne i teletechniczne, a w laboratorium fiolki i inne wyposażenie.\n\nKażdy numer to jedna rolka taśmy ciągłej. Szerokości zaczynają się od pół cala (12,7 mm) i sięgają półtora cala (38,1 mm). Rolka o szerokości 25,4 mm, czyli 1 cal, zawiera 30,48 m taśmy.\n\nTkanina nylonowa nie traci właściwości w mrozie do −40 °C ani w cieple do 90 °C, a ponadto znosi zamrażarkę. Nie boją się go ścieranie, chemikalia, wilgoć, UV ani pogoda. Brak halogenów potwierdza DIN VDE 0472 część 815; ta zgodność, akceptacja CSA i uznanie UL obejmują wyłącznie wersje białe. Do nadruku zaleca się R4902 (i75-R4902), osobny zakup.',
  sameAs: 'https://www.brady.eu/labels/aggressive-adhesive-multi-purpose-nylon-label-tape-for-76-mm-core-printers-cps-4364330',
  images: ['/images/products/brady/tht-1000-499.png', '/images/products/brady/tht-500-499.png'],
  imageDescriptions: [
    'Rolka białej taśmy nylonowej Brady THT-1000-499 o szerokości 25,4 mm z rozwiniętym końcem',
    'Rolka wąskiej białej taśmy nylonowej Brady THT-500-499 o szerokości 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'mocny, trwały, akrylowy' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, promieniowanie UV, warunki atmosferyczne, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka, chropowata, silnie teksturowana o niskiej energii powierzchniowej' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '12,7 / 19,05 / 25,4 / 38,1 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m (wersja 25,4 mm)' },
    { name: 'Liczba sztuk na rolce', value: '1' },
    { name: 'Normy', value: 'CSA Accepted, UL Recognised, bezhalogenowość wg DIN VDE 0472 część 815 (tylko wersje białe)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4902 (i75-R4902)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: TASMA_499.map(([pn, szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała taśma nylonowa B-499 szerokości ${liczba(szer)} mm`,
    attributes: { Szerokość: `${liczba(szer)} mm` } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy nylonowej.\n\nDo wyboru są cztery szerokości, od 12,7 do 38,1 mm. Każdy numer to jedna rolka.',
  },
  faq: [
    { question: 'Do jakich powierzchni nadaje się taśma B-499?', answer: 'Do gładkich, chropowatych i silnie teksturowanych o niskiej energii powierzchniowej. Klej akrylowy jest mocny i trwały.' },
    { question: 'Czy taśma B-499 zawiera halogeny?', answer: 'Nie. Tkanina nylonowa jest bezhalogenowa, a zgodność z DIN VDE 0472 część 815 dotyczy wersji białych.' },
    { question: 'Które drukarki obsługują taśmę B-499?', answer: `Taśmę drukują ${LINKI_DRUKAREK}. Taśma barwiąca R4902 jest kupowana osobno.` },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Oznaczanie instalacji elektrycznych i telekomunikacyjnych', 'Identyfikacja fiolek i wyposażenia laboratorium'],
}

// ---------------------------------------------------------------------------
// Etykiety polipropylenowe B-425A (cps-4367723)
// ---------------------------------------------------------------------------

const PP_425: [string, number, number, number][] = [
  ['030196', 25.4, 10, 10000],
  ['THT-5-425-10', 25.4, 12.7, 10000],
  ['THT-17-425-3', 50.8, 25.4, 3000],
  ['031323', 76.2, 25.4, 3000],
  ['THT-7-425-3', 69.85, 31.75, 3000],
  ['THT-19-425-1', 76.2, 50.8, 1000],
  ['THT-55-425-1', 101.6, 50.8, 1000],
  ['031327', 101.6, 76.2, 1000],
  ['THT-20-425-1', 76.2, 127, 1000],
]

export const bradyTHTPolipropylen425: Product = {
  ...wspolneTHT,
  id: 'brady-tht-5-425-10',
  slug: 'brady-tht-5-425-10',
  name: 'Etykiety polipropylenowe Brady B-425A na rolce 76 mm',
  seoTitle: 'Brady B-425A — etykiety z polipropylenu do i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety z polipropylenu Brady B-425A do drukarek Brady i6100, i7100 i i7500, odporne na rozpuszczalniki. PN: THT-5-425-10, THT-17-425-3, 030196.',
  shortDescription: 'Brady THT-5-425-10 to biała etykieta z polipropylenu na rolce, w dziewięciu rozmiarach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-425A to matowy polipropylen z folią o grubości 0,1143 mm. Trwały klej akrylowy łączy go z powierzchniami gładkimi, nawet w trudnych warunkach. Folia znosi rozpuszczalniki, paliwa, oleje, tarcie, chemikalia i wilgoć. Etykiety służą do identyfikacji ogólnej i znakowania w laboratorium, na przykład butelek, szalek i probówek.\n\nRodzina ma dziewięć numerów. Etykiety mają szerokość 25,4–101,6 mm i wysokość 10–127 mm. Rolki z dwoma najmniejszymi formatami liczą 10 000 sztuk, z trzema średnimi 3000, a z czterema największymi 1000. Numer 030196 należy do linii WorkHorse i ma materiał B-425D: grubość 0,1194 mm, zakres do −80 °C i brak halogenów. Dla niego wymieniono probówki 0,5 ml, wirówkowe, PCR i Eppendorf oraz płytki wielodołkowe.\n\nB-425A pracuje, gdy temperatura spada nawet do −70 °C albo rośnie do 130 °C; folia znosi mrożenie. Dla wersji 030196 podano serię taśm barwiących R6400. Taśmy kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polypropylene-general-identification-labels-cps-4367723',
  images: ['/images/products/brady/tht-5-425-10.png', '/images/products/brady/tht-17-425-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-5-425-10 z białymi, matowymi etykietami polipropylenowymi ułożonymi w trzech rzędach',
    'Rolka Brady THT-17-425-3 z białymi etykietami 50,8 × 25,4 mm i rozwiniętym końcem nośnika',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-425A (wersja 030196: WorkHorse B-425D)' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,1143 mm (wersja 030196: 0,1194 mm)' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C (wersja 030196: od −80 do 130 °C)' },
    { name: 'Odporność', value: 'rozpuszczalniki, paliwa i oleje, chemikalia, ścieranie, wilgoć' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 10 do 101,6 × 76,2 mm oraz 76,2 × 127 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'wersja 030196: CSA Accepted, UL Recognised, bezhalogenowość wg DIN VDE 0472 część 815' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6400 (wersja 030196)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: PP_425.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta polipropylenowa B-425A ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 25,4 × 10 do 101,6 × 76,2 mm, a rolki liczą 1000, 3000 albo 10 000 sztuk.',
  },
  faq: [
    { question: 'Czym różni się numer 030196 od pozostałych etykiet w rodzinie?', answer: 'Ma materiał WorkHorse B-425D, grubszy (0,1194 mm), z zakresem do −80 °C i bez halogenów. Jego etykieta mierzy 25,4 × 10 mm.' },
    { question: 'Na jakich próbkach można stosować etykiety B-425?', answer: 'Dla wersji 030196 wymieniono butelki, szalki, probówki PCR i Eppendorf, probówki wirówkowe i stożkowe oraz płytki wielodołkowe.' },
    { question: 'Które drukarki obsługują etykiety B-425A?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Identyfikacja próbek i probówek w laboratorium', 'Znakowanie opakowań i sprzętu', 'Oznaczanie w warunkach mrożenia'],
}

// ---------------------------------------------------------------------------
// Etykiety polipropylenowe usuwalne CleanLift B-449 (cps-4364322)
// ---------------------------------------------------------------------------

const PP_449: [string, number, number, number][] = [
  ['THT-6-449-3', 38.1, 19.05, 3000],
  ['THT-13-449-10', 31.75, 6.35, 10000],
  ['THT-17-449-3', 50.8, 25.4, 3000],
  ['THT-19-449-1', 76.2, 50.8, 1000],
  ['THT-5-449-10', 25.4, 12.7, 10000],
  ['THT-55-449-1', 101.6, 50.8, 1000],
  ['THT-18-449-3', 76.2, 25.4, 3000],
  ['THT-76-449-1', 101.6, 76.2, 1000],
]

export const bradyTHTUsuwalne449: Product = {
  ...wspolneTHT,
  id: 'brady-tht-6-449-3',
  slug: 'brady-tht-6-449-3',
  name: 'Usuwalne etykiety polipropylenowe Brady CleanLift B-449 na rolce 76 mm',
  seoTitle: 'Brady B-449 — usuwalne etykiety do i6100, i7100, i7500',
  seoDescription: 'Usuwalne etykiety z polipropylenu Brady CleanLift B-449 do drukarek Brady i6100, i7100 i i7500, osiem formatów. PN: THT-6-449-3, THT-17-449-3, THT-19-449-1.',
  shortDescription: 'Brady THT-6-449-3 to biała etykieta z polipropylenu z klejem usuwalnym, do oznaczeń tymczasowych. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykiety CleanLift B-449 łatwo schodzą z powierzchni dzięki usuwalnemu klejowi akrylowemu. Matowy, biały polipropylen ma grubość 0,112 mm. Najlepiej sprawdza się przy oznaczeniach tymczasowych, a na zewnątrz jej nie stosuje się. Etykiety służą do ewidencji sprzętu, kodów kreskowych i znakowania podzespołów, a także do ogólnej identyfikacji w laboratorium.\n\nOsiem numerów obejmuje etykiety o wysokości 6,35–76,2 mm. Rolki dwóch najdrobniejszych formatów mieszczą po 10 000 etykiet, trzech średnich po 3000, a trzech największych po 1000. Wersja szeroka na 38,1 mm ma na nośniku dwie etykiety w rzędzie. Numer THT-6-449-3 występuje też jako artykuł Brady 116392.\n\nMateriał pracuje między −70 a 90 °C, także w zamrażarce, i odpiera rozpuszczalniki. Do nadruku zaleca się taśmę R4300 (i75-R4300), kupowaną osobno. Etykieta nie jest przeznaczona do pracy na zewnątrz.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-removable-polypropylene-general-identification-labels-cps-4364322',
  images: ['/images/products/brady/tht-6-449-3.png', '/images/products/brady/tht-17-449-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-6-449-3 z białymi etykietami polipropylenowymi w dwóch rzędach i rozwiniętym paskiem',
    'Rolka Brady THT-17-449-3 z białymi etykietami CleanLift 50,8 × 25,4 mm na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet usuwalnych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'CleanLift B-449' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'usuwalny, akrylowy' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 90 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka; nie do użytku na zewnątrz' },
    { name: 'Odporność', value: 'rozpuszczalniki, niskie temperatury' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 31,75 × 6,35 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (i75-R4300)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: PP_449.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta usuwalna B-449 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 31,75 × 6,35 do 101,6 × 76,2 mm, a rolki liczą 1000, 3000 albo 10 000 sztuk.',
  },
  faq: [
    { question: 'Do czego służą etykiety B-449?', answer: 'Do oznaczeń tymczasowych. Klej akrylowy jest usuwalny, a materiał nie nadaje się do użytku na zewnątrz.' },
    { question: 'Jaki zakres temperatur znosi materiał B-449?', answer: 'Od −70 do 90 °C. Etykiety pracują także w zamrażarce.' },
    { question: 'Które drukarki obsługują etykiety B-449?', answer: `Etykiety drukują ${LINKI_DRUKAREK}. Taśma barwiąca R4300 jest kupowana osobno.` },
  ],
  applications: ['Oznaczenia tymczasowe sprzętu i podzespołów', 'Kody kreskowe i ewidencja', 'Ogólna identyfikacja w laboratorium'],
}

// ---------------------------------------------------------------------------
// Usuwalne błyszczące etykiety poliestrowe CleanLift B-533 (cps-4401957)
// ---------------------------------------------------------------------------

const POLIESTER_533: [string, number, number, number, boolean?][] = [
  ['THT-12-533-10', 12.7, 11.1, 10000],
  ['THT-13-533-10', 31.75, 6.35, 10000],
  ['THT-5-533-10', 25.4, 12.7, 10000],
  ['THT-59-533-10', 25.4, 12.7, 10000, true],
  ['THT-17-533-3', 50.8, 25.4, 3000],
  ['THT-18-533-3', 76.2, 25.4, 3000],
  ['THT-19-533-1', 76.2, 50.8, 1000],
]

export const bradyTHTUsuwalne533: Product = {
  ...wspolneTHT,
  id: 'brady-tht-12-533-10',
  slug: 'brady-tht-12-533-10',
  name: 'Usuwalne błyszczące etykiety poliestrowe Brady CleanLift B-533 na rolce 76 mm',
  seoTitle: 'Brady B-533 — usuwalne etykiety do drukarek i6100, i7100, i7500',
  seoDescription: 'Błyszczące etykiety poliestrowe Brady CleanLift B-533 z usuwalnym klejem do drukarek Brady i6100, i7100 i i7500. PN: THT-12-533-10, THT-17-533-3, THT-19-533-1.',
  shortDescription: 'Brady THT-12-533-10 to biała, błyszcząca etykieta poliestrowa z klejem usuwalnym, także na płytki drukowane. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'CleanLift B-533 to błyszczący poliester z usuwalnym klejem akrylowym. Folię wykonano o grubości 0,0762 mm, a podłoże powinno być gładkie. Etykiety wytrzymują paliwa, oleje, rozpuszczalniki i wysoką temperaturę. Materiał dopuszczono na płytkach drukowanych po zakończeniu procesu: strona górna przy montażu przewlekanym (THT) jest dozwolona, dolna nie. Do montażu powierzchniowego (SMT) materiał się nie nadaje. Przy ekstremalnie wysokich temperaturach wskazana jest próba.\n\nSiedem numerów różni się wielkością. Najdrobniejsza etykieta, 12,7 × 11,1 mm, leży po pięć w rzędzie. Największa to format 76,2 × 50,8 mm. Rolki mieszczą 1000, 3000 albo 10 000 sztuk, a numer THT-59-533-10 dostarcza się w opakowaniu. Numer THT-12-533-10 ma artykuł Brady 139555.\n\nPoliester pracuje między −70 a 100 °C. Zalecana jest taśma barwiąca R6002 (i75-R6002), stanowiąca osobny zakup.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-removable-glossy-polyester-labels-cps-4401957',
  images: ['/images/products/brady/tht-12-533-10.png', '/images/products/brady/tht-17-533-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-12-533-10 z małymi, błyszczącymi etykietami poliestrowymi w pięciu rzędach',
    'Rolka Brady THT-17-533-3 z błyszczącymi etykietami 50,8 × 25,4 mm na brązowej gilzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet usuwalnych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'CleanLift B-533' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'usuwalny, akrylowy' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, rozpuszczalniki i chemikalia, wysoka i niska temperatura' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Płytki drukowane', value: 'po procesie, THT od strony górnej; SMT niedozwolone' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 31,75 × 6,35 do 76,2 × 50,8 mm oraz 12,7 × 11,1 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (i75-R6002)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: POLIESTER_533.map(([pn, szer, wys, szt, opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta usuwalna B-533 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt), ...(opak ? { Forma: 'Opakowanie' } : {}) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 12,7 × 11,1 do 76,2 × 50,8 mm, a rolki liczą 1000, 3000 albo 10 000 sztuk.',
    Forma: 'Sposób dostawy etykiet.\n\nWiększość numerów dostarcza się na rolce. Jeden numer jest pakowany w opakowaniu.',
  },
  faq: [
    { question: 'Czy etykiety B-533 można stosować na płytkach drukowanych?', answer: 'Tak, po procesie, od strony górnej przy montażu przewlekanym (THT). Dolna strona i montaż powierzchniowy (SMT) są wykluczone.' },
    { question: 'Czy etykieta B-533 daje się zdjąć?', answer: 'Tak. Klej akrylowy jest usuwalny, a folia poliestrowa ma 0,0762 mm grubości.' },
    { question: 'Które drukarki obsługują etykiety B-533?', answer: `Etykiety drukują ${LINKI_DRUKAREK}. Taśma barwiąca R6002 jest kupowana osobno.` },
  ],
  applications: ['Oznaczanie płytek drukowanych po lutowaniu', 'Etykiety usuwalne na sprzęt i podzespoły', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Etykiety papierowe z klejem kauczukowym B-424 i taśma ciągła THT-21-424 (cps-4402022, pid-tht-21-424)
// ---------------------------------------------------------------------------

const PAPIER_424: [string, number, number, number][] = [
  ['THT-53-424-3', 50.8, 12.7, 3000],
  ['THT-17-424-3', 50.8, 25.4, 3000],
  ['THT-18-424-3', 76.2, 25.4, 3000],
  ['THT-7-424-3', 69.85, 31.75, 3000],
  ['THT-19-424-1', 76.2, 50.8, 1000],
  ['THT-55-424-1', 101.6, 50.8, 1000],
  ['THT-20-424-1', 76.2, 127, 1000],
]

export const bradyTHTPapier424: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-424-3',
  slug: 'brady-tht-53-424-3',
  name: 'Etykiety papierowe z klejem kauczukowym Brady B-424 na rolce 76 mm',
  seoTitle: 'Brady B-424 — etykiety papierowe do drukarek i6100, i7100, i7500',
  seoDescription: 'Białe etykiety papierowe Brady B-424 z klejem kauczukowym do drukarek Brady i6100, i7100 i i7500, także taśma ciągła. PN: THT-53-424-3, THT-21-424.',
  shortDescription: 'Brady THT-53-424-3 to biała etykieta papierowa z trwałym klejem kauczukowym oraz taśma ciągła THT-21-424. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-424 to biały papier z matową powierzchnią, gruby na 0,089 mm, ze stałym klejem kauczukowym do powierzchni gładkich. Nadruk jest kontrastowy i nie rozmazuje się. Etykiety trafiają na kody kreskowe, oznaczenia w elektryce i identyfikację ogólną, również w laboratorium.\n\nW rodzinie jest siedem etykiet. Najwęższe mają 50,8 mm, najszersze 101,6 mm, a najwyższa mierzy 127 mm. Rolki niższych formatów zawierają 3000 etykiet, a wyższych 1000. Numer THT-21-424 stanowi wyjątek: to taśma ciągła o długości 91,44 m i szerokości 76,2 mm, bez podziału na sztuki. Numer THT-53-424-3 ma artykuł Brady 030240, a taśma ciągła THT-21-424 artykuł 030141.\n\nPapier znosi temperatury od −40 do 180 °C i mrożenie. Etykiety drukuje się taśmą barwiącą R4300 (i75-R4300), a taśmę ciągłą taśmą R4307 (i75-R4307). Taśmy barwiące kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-paper-labels-rubber-adhesive-cps-4402022',
  images: ['/images/products/brady/tht-53-424-3.png', '/images/products/brady/tht-18-424-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-53-424-3 z białymi etykietami papierowymi 50,8 × 12,7 mm i rozwiniętym paskiem',
    'Rolka Brady THT-18-424-3 z białymi etykietami papierowymi 76,2 × 25,4 mm na nośniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet papierowych i taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-424' },
    { name: 'Typ materiału', value: 'papier' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy' },
    { name: 'Grubość', value: '0,089 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 180 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka' },
    { name: 'Odporność', value: 'rozmazanie nadruku; taśma ciągła dodatkowo: ścieranie, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 50,8 × 12,7 do 101,6 × 50,8 mm oraz 76,2 × 127 mm; taśma ciągła 76,2 mm × 91,44 m' },
    { name: 'Liczba sztuk na rolce', value: '1000 albo 3000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (i75-R4300); taśma ciągła: R4307 (i75-R4307)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: [
    ...PAPIER_424.map(([pn, szer, wys, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — biała etykieta papierowa B-424 ${liczba(szer)} × ${liczba(wys)} mm`,
      attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-424',
      name: 'Brady THT-21-424 — biała taśma papierowa ciągła B-424 76,2 mm × 91,44 m',
      attributes: { Rozmiar: '76,2 mm × 91,44 m, taśma' } as Record<string, string>,
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 50,8 × 12,7 do 101,6 × 50,8 mm. Jeden numer to taśma ciągła.',
  },
  faq: [
    { question: 'Jaki klej mają etykiety B-424?', answer: 'Trwały klej kauczukowy. Papier ma 0,089 mm grubości i przykleja się do powierzchni gładkich.' },
    { question: 'Czym jest numer THT-21-424?', answer: 'To taśma ciągła z tego samego papieru, szeroka na 76,2 mm i długa na 91,44 m. Do nadruku zaleca się dla niej taśmę barwiącą R4307.' },
    { question: 'Które drukarki obsługują etykiety B-424?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Kody kreskowe i etykiety magazynowe', 'Oznaczenia w elektryce', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Etykiety papierowe B-7610 w pudełkach (cps-4402447)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk w pudełku]
const PAPIER_7610: [string, number, number, number][] = [
  ['THT-104X56-7610', 104, 55.88, 4000],
  ['THT-108X159-7610', 108, 159, 3000],
  ['620366', 80, 50, 6000],
  ['800868', 108, 80, 6000],
]

export const bradyTHTPapier7610: Product = {
  ...wspolneTHT,
  id: 'brady-tht-104x56-7610',
  slug: 'brady-tht-104x56-7610',
  name: 'Etykiety papierowe Brady B-7610 do oznaczania zagrożeń na rolce 76 mm',
  seoTitle: 'Brady B-7610 — etykiety papierowe do i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety papierowe Brady B-7610 do informacji o zagrożeniach, drukarki Brady i6100, i7100 i i7500, cztery formaty. PN: THT-104X56-7610, 620366, 800868.',
  shortDescription: 'Brady THT-104X56-7610 to biała etykieta papierowa 104 × 55,88 mm do oznaczania zagrożeń, w czterech formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-7610 to biały papier z klejem akrylowym, matowy, o grubości 0,081 mm. Etykiety służą do oznaczania informacji o zagrożeniach. Powierzchnia dobrze znosi tarcie, wilgoć i niskie temperatury. Cztery formaty są duże: największy mierzy 108 × 159 mm.\n\nCztery numery mają wymiary 104 × 55,88, 108 × 159, 80 × 50 i 108 × 80 mm. Etykiety są pakowane w pudełka: 4000 sztuk dla wersji 104 × 55,88 mm, 3000 dla 108 × 159 mm, a po 6000 dla pozostałych dwóch. Dla wersji 104 × 55,88 mm podano ponadto 500 sztuk na rolce i numer artykułu Brady 800861.\n\nPapier pracuje od −40 do 50 °C. Do nadruku wskazano serię taśm barwiących R7950, kupowaną osobno. Wszystkie cztery numery pasują zarówno do i6100, jak i do i7100 oraz i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-paper-labels-cps-4402447',
  images: ['/images/products/brady/tht-108x159-7610.png', '/images/products/brady/800868.png'],
  imageDescriptions: [
    'Rolka Brady THT-108X159-7610 z dużymi białymi etykietami papierowymi i żółtą gilzą',
    'Rolka Brady 800868 z białymi etykietami papierowymi 108 × 80 mm rozwiniętymi na przodzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrawane w pudełkach, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7610' },
    { name: 'Typ materiału', value: 'papier' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, niskie temperatury' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '104 × 55,88 / 108 × 159 / 80 × 50 / 108 × 80 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w pudełku', value: '3000, 4000 albo 6000, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '500 (wersja 104 × 55,88 mm)' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R7950' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: PAPIER_7610.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta papierowa B-7610 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: `${liczba(szer)} × ${liczba(wys)} mm`, 'W pudełku': `${sztuki(szt)} szt.` } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nDo wyboru są cztery formaty, od 80 × 50 do 108 × 159 mm.',
    'W pudełku': 'Liczba etykiet w jednym pudełku.\n\nPudełka zawierają od 3000 do 6000 etykiet, zależnie od formatu.',
  },
  faq: [
    { question: 'W jakiej formie dostarcza się etykiety B-7610?', answer: 'W pudełkach po 3000–6000 sztuk. Dla wersji 104 × 55,88 mm podano też rolkę z 500 etykietami.' },
    { question: 'Do czego służą etykiety B-7610?', answer: 'Do oznaczania informacji o zagrożeniach. Papier ma 0,081 mm grubości i klej akrylowy.' },
    { question: 'Które drukarki obsługują etykiety B-7610?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Oznaczanie informacji o zagrożeniach', 'Etykiety dużych formatów na opakowania'],
}

// ---------------------------------------------------------------------------
// Przezroczyste etykiety kriogeniczne B-7600 (cps-4360047)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk, kształt, opakowanie]
const KRIO_7600: [string, number, number, number, string, boolean?][] = [
  ['THT-301-7600-3', 25.4, 9.53, 3000, 'Prostokąt'],
  ['THT-304-7600-3', 25.4, 9.53, 3000, 'Prostokąt i koło (zestaw)'],
  ['THT-306-7600-3', 25.4, 12.7, 3000, 'Prostokąt i koło (zestaw)'],
  ['THT-302-7600-3', 41.28, 15.24, 3000, 'Prostokąt'],
  ['THT-303-7600-3', 48.26, 25.4, 3000, 'Prostokąt'],
  ['THT-305-7600-3', 25.4, 25.4, 3000, 'Kwadrat'],
  ['THT-310-7600-10', 25.4, 12.7, 10000, 'Prostokąt', true],
]

export const bradyTHTKrio7600: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-301-7600-3',
  slug: 'brady-tht-301-7600-3',
  name: 'Przezroczyste etykiety kriogeniczne z polipropylenu Brady B-7600 na rolce 76 mm',
  seoTitle: 'Brady B-7600 — etykiety kriogeniczne do i6100, i7100, i7500',
  seoDescription: 'Przezroczyste etykiety kriogeniczne Brady B-7600 na probówki i fiolki do drukarek Brady i6100, i7100 i i7500, od −196 °C. PN: THT-301-7600-3, THT-303-7600-3.',
  shortDescription: 'Brady THT-301-7600-3 to przezroczysta etykieta z polipropylenu na fiolki i probówki, dla próbek w ciekłym azocie. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykiety B-7600 są całkowicie przezroczyste, dzięki czemu przez nie widać zawartość próbki. Wykonano je z błyszczącego polipropylenu o grubości 0,076 mm, na kleju akrylowym. Nadruk z kodami 1D i 2D odczytują skanery. Etykieta nie pęka, nie odkleja się i pozostaje czytelna po wielokrotnym zamrażaniu. Oznacza fiolki kriogeniczne, probówki oraz pudełka do przechowywania próbek.\n\nSiedem numerów obejmuje prostokąty, kwadrat oraz dwa zestawy prostokąta z kołem. Etykiety mają szerokość 25,4–48,26 mm i wysokość 9,53–25,4 mm. Rolki liczą 3000 sztuk albo zestawów, a THT-310-7600-10 pakuje się po 10 000 poza rolką. Numer THT-301-7600-3 ma artykuł Brady 302990, a jego etykiety leżą w dwóch rzędach.\n\nMateriał znosi od −196 do 120 °C: zamrażarkę, ciekły azot i łaźnię wodną 100 °C. Zaleca się taśmę barwiącą R6000HF; trzeba ją kupić oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-polypropylene-labels-cps-4360047',
  images: ['/images/products/brady/tht-301-7600-3.png', '/images/products/brady/tht-302-7600-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-301-7600-3 z przezroczystymi etykietami kriogenicznymi i nacięciami na nośniku',
    'Rolka Brady THT-302-7600-3 z przezroczystymi etykietami B-7600 o większym formacie i widoczną gilzą wewnątrz',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7600' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 120 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, ciekły azot, łaźnia wodna (100 °C)' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 9,53 do 48,26 × 25,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '3000; wersja THT-310-7600-10: 10 000 w opakowaniu' },
    { name: 'Probówki', value: 'fiolki kriogeniczne, probówki wirówkowe, stożkowe i PCR, Eppendorf; pojemność 0,5 ml' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: KRIO_7600.map(([pn, szer, wys, szt, ksztalt, opak]) => ({
    partNumber: pn,
    name: `Brady ${pn} — przezroczysta etykieta kriogeniczna B-7600 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt), Kształt: ksztalt, ...(opak ? { Forma: 'Opakowanie' } : {}) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk albo zestawów na rolce.\n\nRozmiary sięgają od 25,4 × 9,53 do 48,26 × 25,4 mm, a rolki liczą 3000 sztuk.',
    Kształt: 'Kształt etykiety albo zestawu.\n\nDwa numery to zestawy z prostokątem i kołem na jednej rolce, jeden to kwadrat 25,4 × 25,4 mm.',
    Forma: 'Sposób dostawy etykiet.\n\nWiększość numerów dostarcza się na rolce. Jeden numer jest pakowany w opakowaniu.',
  },
  faq: [
    { question: 'Dlaczego etykiety B-7600 są przezroczyste?', answer: 'Przez etykietę widać zawartość fiolki lub probówki. Pozwala to sprawdzić próbkę bez zdejmowania oznaczenia.' },
    { question: 'W jakich warunkach pracują etykiety B-7600?', answer: 'W ciekłym azocie, zamrażarce i łaźni wodnej 100 °C, w zakresie od −196 do 120 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7600?', answer: `Zaleca się taśmę R6000HF. Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Fiolki kriogeniczne i probówki w ciekłym azocie', 'Pudełka do przechowywania próbek', 'Identyfikacja próbek z odczytem kodów 1D i 2D'],
}

// ---------------------------------------------------------------------------
// Etykiety kriogeniczne z barwnym paskiem B-494 (cps-4366836)
// ---------------------------------------------------------------------------

const KRIO_494: [string, string][] = [
  ['THT-179-494-3-BL', 'Niebieski'],
  ['THT-179-494-3-GN', 'Zielony'],
  ['THT-179-494-3-OR', 'Pomarań\u00ADczowy'],
  ['THT-179-494-3-PK', 'Różowy'],
  ['THT-179-494-3-RD', 'Czerwony'],
  ['THT-179-494-3-YL', 'Żółty'],
]

export const bradyTHTKrio494: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-179-494-3-bl',
  slug: 'brady-tht-179-494-3-bl',
  name: 'Etykiety poliestrowe z barwnym paskiem Brady B-494 na rolce 76 mm',
  seoTitle: 'Brady B-494 — etykiety z paskiem do i6100, i7100, i7500',
  seoDescription: 'Białe etykiety poliestrowe Brady B-494 z barwnym paskiem na fiolki i probówki do drukarek Brady i6100, i7100 i i7500. PN: THT-179-494-3-BL, THT-179-494-3-YL.',
  shortDescription: 'Brady THT-179-494-3-BL to kwadratowa etykieta poliestrowa z niebieskim paskiem na probówki i fiolki, w sześciu kolorach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-494 to biały poliester z błyszczącą powierzchnią i barwnym paskiem w jednym z sześciu kolorów. Pasek pozwala sortować próbki wzrokiem. Warstwa poliestru ma 0,0762 mm, klej jest akrylowy, a materiał ma niski profil. Przeznaczono go do zastosowań w niskich temperaturach i do przechowywania kriogenicznego. Etykieta jest kwadratem o boku 25,4 mm; pole nadruku ma wysokość 22,23 mm, a resztę zajmuje pasek. Pasuje do dużych i stożkowych probówek oraz do fiolek 8 ml.\n\nSześć numerów odpowiada sześciu kolorom paska: niebieskiemu, zielonemu, pomarańczowemu, różowemu, czerwonemu i żółtemu. Każda rolka liczy 3000 etykiet, po jednej w rzędzie.\n\nGranice użytkowania to −196 °C na dole i 70 °C na górze. Etykieta znosi zamrażarkę i ciekły azot. Odpiera chemikalia i rozmazanie nadruku, a także skrajne temperatury. Zaleca się taśmę R6406 (i75-R6406) z serii R6400, kupowaną osobno.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-labels-cps-4366836',
  images: ['/images/products/brady/tht-179-494-3-bl.png', '/images/products/brady/tht-179-494-3-yl.png'],
  imageDescriptions: [
    'Rolka Brady THT-179-494-3-BL z białymi etykietami z niebieskim paskiem przy krawędzi',
    'Rolka Brady THT-179-494-3-YL z białymi etykietami z żółtym paskiem przy krawędzi',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych z barwnym paskiem, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-494' },
    { name: 'Typ materiału', value: 'poliester, niski profil' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 70 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, ciekły azot' },
    { name: 'Odporność', value: 'chemikalia, niskie i wysokie temperatury, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały z paskiem: niebieskim, zielonym, pomarańczowym, różowym, czerwonym albo żółtym' },
    { name: 'Wymiary etykiety', value: '25,4 × 25,4 mm; pole nadruku 25,4 × 22,23 mm' },
    { name: 'Liczba sztuk na rolce', value: '3000' },
    { name: 'Etykiet w rzędzie', value: '1' },
    { name: 'Probówki', value: 'duże i stożkowe, fiolki; pojemność 8 ml' },
    { name: 'Zalecana taśma barwiąca', value: 'R6406 (i75-R6406)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: KRIO_494.map(([pn, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta B-494 z paskiem w kolorze: ${kolor.toLowerCase()}`,
    attributes: { 'Kolor paska': kolor, Rozmiar: '25,4 × 25,4 mm, 3000 szt.' } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    'Kolor paska': 'Kolor paska na białej etykiecie.\n\nSześć kolorów, od niebieskiego po żółty, pozwala sortować próbki wzrokiem.',
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nEtykieta mierzy 25,4 × 25,4 mm, a rolka liczy 3000 sztuk.',
  },
  faq: [
    { question: 'Czym różnią się numery w tej rodzinie?', answer: 'Kolorem paska na białej etykiecie: niebieskim, zielonym, pomarańczowym, różowym, czerwonym albo żółtym. Materiał i rozmiar są takie same.' },
    { question: 'Jakie temperatury znosi materiał B-494?', answer: 'Od −196 do 70 °C. Etykieta pracuje w zamrażarce i w ciekłym azocie.' },
    { question: 'Które drukarki obsługują etykiety B-494?', answer: `Etykiety drukują ${LINKI_DRUKAREK}. Zalecana taśma R6406 jest kupowana osobno.` },
  ],
  applications: ['Fiolki i probówki z kodem barwnym', 'Próbki w zamrażarce i ciekłym azocie', 'Oznaczanie wyposażenia laboratorium'],
}

// ---------------------------------------------------------------------------
// Ciągła taśma winylowa kolorowa B-439 (cps-4960608)
// ---------------------------------------------------------------------------

// [PN, szerokość, kolor]
const WINYL_439: [string, number, string][] = [
  ['THTC-63-439WT', 63, 'Biały'],
  ['THTC-63-439YL', 63, 'Żółty'],
  ['THTC-110-439SL', 110, 'Srebrny'],
  ['THTC-110-439WT', 110, 'Biały'],
  ['THTC-110-439YL', 110, 'Żółty'],
]

export const bradyTHTWinyl439: Product = {
  ...wspolneTHT,
  id: 'brady-thtc-63-439wt',
  slug: 'brady-thtc-63-439wt',
  name: 'Ciągła taśma winylowa Brady WorkHorse B-439 na rolce 76 mm',
  seoTitle: 'Brady B-439 — taśma winylowa do drukarek i6100, i7100, i7500',
  seoDescription: 'Ciągła taśma winylowa Brady WorkHorse B-439, 63 i 110 mm szerokości, 40 m długości, do drukarek Brady i6100, i7100 i i7500. PN: THTC-63-439WT, THTC-110-439YL.',
  shortDescription: 'Brady THTC-63-439WT to biała taśma winylowa 63 mm × 40 m z mocnym klejem akrylowym, także w kolorze żółtym i srebrnym. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'WorkHorse B-439 to ciągły, kolorowy winyl, błyszczący, o grubości 0,107 mm. Agresywny klej akrylowy trzyma na podłożu gładkim i chropowatym. Taśma pracuje w trudnych warunkach, bo jest odporna na korozję, chemikalia, ścieranie, wilgoć, UV i pogodę. Znajduje zastosowanie przy kodach kreskowych, oznaczaniu podzespołów i urządzeń, w instalacjach elektrycznych i telekomunikacyjnych, przy inwentaryzacji oraz w laboratorium.\n\nRolka ma zawsze 40 m taśmy. Dostępne szerokości to 63 i 110 mm. Biały i żółty występują w obu szerokościach, a srebrny tylko w szerszej. Daje to pięć numerów, każdy po jednej rolce. Biała taśma 63 mm, THTC-63-439WT, ma numer artykułu Brady 310435.\n\nWinyl znosi temperatury między −70 a 80 °C oraz mrożenie. Dla taśmy podano serię taśm barwiących R6000HF, kupowaną osobno. Pięć numerów drukuje się zarówno na i6100, jak i na i7100 oraz i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-continuous-coloured-vinyl-tape-cps-4960608',
  images: ['/images/products/brady/thtc-63-439wt.png', '/images/products/brady/thtc-63-439yl.png'],
  imageDescriptions: [
    'Rolka białej taśmy winylowej Brady THTC-63-439WT o szerokości 63 mm z rozwiniętym końcem',
    'Rolka żółtej taśmy winylowej Brady THTC-63-439YL o szerokości 63 mm z rozwiniętym końcem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-439' },
    { name: 'Typ materiału', value: 'winyl' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'agresywny, trwały, akrylowy' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 80 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, promieniowanie UV, warunki atmosferyczne' },
    { name: 'Powierzchnia', value: 'gładka, chropowata' },
    { name: 'Kolor', value: 'biały, żółty, srebrny' },
    { name: 'Szerokość i długość taśmy', value: '63 mm × 40 m oraz 110 mm × 40 m, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: WINYL_439.map(([pn, szer, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} taśma winylowa B-439 ${szer} mm × 40 m`,
    attributes: { Rozmiar: `${szer} mm × 40 m`, Kolor: kolor } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy na rolce.\n\nTaśma występuje w dwóch szerokościach, 63 i 110 mm, i ma zawsze 40 m długości.',
    Kolor: 'Kolor taśmy.\n\nBiały i żółty dostępne są w obu szerokościach, a srebrny tylko w szerokości 110 mm.',
  },
  faq: [
    { question: 'Jakie szerokości i kolory taśmy B-439 są dostępne?', answer: 'Szerokości 63 i 110 mm, długość 40 m. Kolory: biały i żółty w obu szerokościach, srebrny tylko 110 mm.' },
    { question: 'Jakie temperatury znosi winyl B-439?', answer: 'Od −70 do 80 °C. Taśma pracuje także w zamrażarce.' },
    { question: 'Które drukarki obsługują taśmę B-439?', answer: `Taśmę drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Znakowanie urządzeń i podzespołów', 'Etykiety z kodami kreskowymi', 'Oznaczanie instalacji elektrycznych i telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// Papier rozpuszczalny w wodzie B-403: etykiety (cps-4362935) i taśmy ciągłe (cps-3069298)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk]
const ROZPUSZCZALNY_403: [string, number, number, number][] = [
  ['THT-141-403-3', 22.86, 22.86, 3000],
  ['THT-136-403-3', 38.1, 19.05, 3000],
  ['THT-17-403-3', 50.8, 25.4, 3000],
  ['THT-18-403-3', 76.2, 25.4, 3000],
  ['THT-19-403-1', 76.2, 50.8, 1000],
  ['THT-55-403-1', 101.6, 50.8, 1000],
]
// [PN, szerokość taśmy]
const ROZPUSZCZALNY_403_TASMY: [string, number][] = [
  ['THT-500-403', 12.7],
  ['THT-750-403', 19.05],
  ['THT-1000-403', 25.4],
  ['THT-1125-403-WT', 28.58],
  ['THT-1500-403', 38.1],
  ['THT-2000-403', 50.8],
  ['THT-2250-403-WT', 57.15],
  ['THT-4000-403-WT', 101.6],
]

export const bradyTHTRozpuszczalny403: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-403-1',
  slug: 'brady-tht-19-403-1',
  name: 'Etykiety i taśmy z papieru rozpuszczalnego w wodzie Brady B-403 na rolce 76 mm',
  seoTitle: 'Brady B-403 — papier rozpuszczalny w wodzie, i6100, i7100, i7500',
  seoDescription: 'Etykiety i taśmy Brady B-403 z papieru rozpuszczalnego w wodzie do drukarek Brady i6100, i7100 i i7500. PN: THT-19-403-1, THT-17-403-3, THT-1000-403.',
  shortDescription: 'Brady THT-19-403-1 to biała etykieta z papieru, który rozpuszcza się w wodzie wraz z klejem; w rodzinie są też taśmy ciągłe. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Papier B-403 rozpuszcza się w wodzie, a razem z nim klej akrylowy, więc na powierzchni nie zostaje klej. Materiał jest matowy, gruby na 0,0762 mm, usuwalny i przykleja się do powierzchni gładkich. Etykiety znajdują zastosowanie w laboratorium, w ewidencji majątku, przy oznaczaniu magazynu i do identyfikacji ogólnej.\n\nSześć numerów to etykiety. Dwa największe formaty liczą po 1000 etykiet na rolce, cztery mniejsze po 3000. Osiem dalszych numerów to taśmy ciągłe, po jednej rolce, o szerokości od pół cala do czterech cali. Taśmy współpracują z dozownikiem materiału Brady z odrywaniem podkładu przy prostych zadaniach. Numer THT-500-403 pasuje tylko do drukarek i7100 i i7500.\n\nTemperatura użytkowania mieści się między −70 a 100 °C. Dla etykiet zaleca się taśmy barwiące z serii R4300, a dla taśm ciągłych R4306 (i75-R4306). Taśmy barwiące kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/water-soluble-paper-labels-for-76-mm-core-printers-cps-4362935',
  images: ['/images/products/brady/tht-19-403-1.png', '/images/products/brady/tht-500-403.png'],
  imageDescriptions: [
    'Rolka Brady THT-19-403-1 z białymi etykietami z papieru rozpuszczalnego w wodzie 76,2 × 50,8 mm',
    'Rolka wąskiej białej taśmy Brady THT-500-403 z papieru rozpuszczalnego w wodzie o szerokości 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet i taśm ciągłych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-403' },
    { name: 'Typ materiału', value: 'papier rozpuszczalny w wodzie' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'rozpuszczalny, akrylowy; bez śladów kleju po rozpuszczeniu' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 22,86 × 22,86 do 101,6 × 50,8 mm; taśmy ciągłe o szerokości od 12,7 do 101,6 mm' },
    { name: 'Długość taśmy', value: '30,48 m (wersja 12,7 mm)' },
    { name: 'Liczba sztuk na rolce', value: '1000 albo 3000 etykiet, taśma: 1 rolka' },
    { name: 'Zalecana taśma barwiąca', value: 'etykiety: seria R4300; taśmy ciągłe: R4306 (i75-R4306)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'THT-500-403: tylko i7100 i i7500 (bez i6100)' },
  ],
  variants: [
    ...ROZPUSZCZALNY_403.map(([pn, szer, wys, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — biała etykieta z papieru rozpuszczalnego B-403 ${liczba(szer)} × ${liczba(wys)} mm`,
      attributes: { Rozmiar: rozmiar(szer, wys, szt), Forma: 'Etykiety' } as Record<string, string>,
      availability: 'unavailable' as const,
    })),
    ...ROZPUSZCZALNY_403_TASMY.map(([pn, szer]) => ({
      partNumber: pn,
      name: `Brady ${pn} — biała taśma z papieru rozpuszczalnego B-403 szerokości ${liczba(szer)} mm`,
      attributes: { Rozmiar: `szer. ${liczba(szer)} mm`, Forma: 'Taśma ciągła' } as Record<string, string>,
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce albo szerokość taśmy.\n\nEtykiety mają od 22,86 × 22,86 do 101,6 × 50,8 mm, taśmy od 12,7 do 101,6 mm szerokości.',
    Forma: 'Postać materiału na rolce.\n\nEtykiety są wykrawane, a taśma ciągła nie ma podziału na sztuki.',
  },
  faq: [
    { question: 'Co zostaje na powierzchni po rozpuszczeniu etykiety B-403?', answer: 'Nic. Papier rozpuszcza się w wodzie całkowicie razem z klejem akrylowym i nie zostawia śladów kleju.' },
    { question: 'Które numery B-403 nie pasują do drukarki i6100?', answer: 'Numer THT-500-403, taśma o szerokości 12,7 mm. Pasuje do i7100 i i7500. Pozostałe numery pasują do wszystkich trzech drukarek.' },
    { question: 'Które drukarki obsługują papier B-403?', answer: `Papier obsługują ${LINKI_DRUKAREK}, z wyjątkiem numeru THT-500-403, który nie pasuje do i6100.` },
  ],
  applications: ['Znakowanie próbek w laboratorium', 'Ewidencja majątku i oznaczanie magazynu', 'Etykiety do usunięcia przez umycie w wodzie'],
}

// ---------------------------------------------------------------------------
// Etykiety papierowe do ponownego przyklejania CleanLift B-408 (cps-4364502)
// ---------------------------------------------------------------------------

const PAPIER_408: [string, number, number, number][] = [
  ['THT-17-408-3', 50.8, 25.4, 3000],
  ['THT-18-408-3', 76.2, 25.4, 3000],
  ['THT-19-408-1', 76.2, 50.8, 1000],
  ['THT-55-408-1', 101.6, 50.8, 1000],
  ['THT-25-408-1', 101.6, 152.4, 1000],
  ['THT-78-408-1', 101.6, 165.1, 1000],
]

export const bradyTHTPapier408: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-408-1',
  slug: 'brady-tht-19-408-1',
  name: 'Etykiety papierowe do ponownego przyklejania Brady CleanLift B-408 na rolce 76 mm',
  seoTitle: 'Brady B-408 — etykiety do ponownego przyklejania, i6100, i7100',
  seoDescription: 'Papierowe etykiety Brady CleanLift B-408 do ponownego przyklejania, drukarki Brady i6100, i7100 i i7500. PN: THT-19-408-1, THT-17-408-3, THT-78-408-1.',
  shortDescription: 'Brady THT-19-408-1 to biała etykieta papierowa, którą można odkleić i przykleić ponownie, w sześciu formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'CleanLift B-408 to etykiety, które można odkleić i przykleić w innym miejscu. Biały papier jest matowy i gruby na 0,086 mm, a klej akrylowy usuwalny. Zmiana położenia nie wymaga nowej etykiety. Etykiety wykorzystuje się do kodów kreskowych i oznaczeń ogólnych tam, gdzie oznaczenie trzeba przesunąć. Na każdej rolce etykiety leżą pojedynczo.\n\nSześć numerów dzieli się na dwie grupy, zależnie od liczby etykiet na rolce. Dwa niższe formaty, wysokie na 25,4 mm, liczą po 3000 sztuk. Cztery wyższe, od 50,8 do 165,1 mm wysokości, liczą po 1000. Szerokość mieści się w granicach 50,8–101,6 mm. Numer THT-19-408-1 występuje także pod numerem artykułu 035657.\n\nPapier wytrzymuje temperatury do 70 °C. Do nadruku wskazano taśmę barwiącą R4302, którą nabywa się osobno. Sześć numerów obsługują trzy drukarki: i6100, i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-repositionable-paper-labels-cps-4364502',
  images: ['/images/products/brady/tht-18-408-3.png', '/images/products/brady/tht-17-408-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-18-408-3 z białymi etykietami papierowymi 76,2 × 25,4 mm do ponownego przyklejania',
    'Rolka Brady THT-17-408-3 z białymi etykietami papierowymi 50,8 × 25,4 mm i rozwiniętym paskiem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet do ponownego przyklejania, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'CleanLift B-408' },
    { name: 'Typ materiału', value: 'papier do ponownego przyklejania' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'usuwalny, akrylowy' },
    { name: 'Grubość', value: '0,086 mm' },
    { name: 'Temperatura pracy', value: 'do 70 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 50,8 × 25,4 do 101,6 × 165,1 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 albo 3000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: PAPIER_408.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta papierowa B-408 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 50,8 × 25,4 do 101,6 × 165,1 mm, a rolki liczą 1000 albo 3000 sztuk.',
  },
  faq: [
    { question: 'Czy etykietę B-408 można przykleić ponownie?', answer: 'Tak. Papier ma usuwalny klej akrylowy i można go odkleić oraz położyć w innym miejscu.' },
    { question: 'Do jakiej temperatury pracują etykiety B-408?', answer: 'Do 70 °C. Papier ma 0,086 mm grubości i matowe wykończenie.' },
    { question: 'Które drukarki obsługują etykiety B-408?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Kody kreskowe na towarze zmieniającym miejsce', 'Oznaczenia ogólne do przestawiania'],
}

// ---------------------------------------------------------------------------
// Etykiety wskazujące kontakt z wodą VisAlert B-350 (pid-tht-70-350-20), jeden PN
// ---------------------------------------------------------------------------

export const bradyTHTWoda350: Product = {
  ...wspolneTHT,
  id: 'brady-tht-70-350-20',
  slug: 'brady-tht-70-350-20',
  name: 'Etykiety wskazujące kontakt z wodą Brady VisAlert B-350 THT-70-350-20 na rolce 76 mm',
  seoTitle: 'Brady THT-70-350-20 — etykiety wskaźnikowe do i7100, i7500',
  seoDescription: 'Etykiety Brady VisAlert B-350 zmieniające kolor z białego na czerwony po kontakcie z wodą, do drukarek Brady i7100 i i7500. PN: THT-70-350-20, nr art. 080910.',
  shortDescription: 'Brady THT-70-350-20 to rolka 20 000 małych etykiet 6,35 × 6,35 mm, które po zamoczeniu czerwienieją. Do drukarek Brady i7100 i i7500.',
  relatedProducts: ['brady-i7100', 'brady-i7500'],
  description: 'VisAlert B-350 pokazuje kontakt z wodą. Gdy krawędzi etykiety dotknie roztwór wodny, biel zmienia się w czerwień, a zmiana jest trwała. Dzięki temu etykieta dokumentuje zamoczenie urządzenia lub opakowania. Materiałem jest błyszczący laminat poliestru z papierem o grubości 0,259 mm. Klej akrylowy trwale mocuje etykietę do podłoża gładkiego lub chropowatego. Etykieta oznacza zabezpieczenie i wskazuje kontakt z wodą.\n\nRolka THT-70-350-20 niesie 20 000 kwadratowych etykiet o boku 6,35 mm, po siedem w rzędzie. Szerokość wstęgi wynosi 60,2 mm, a skok w pionie 8,89 mm. Rolka ma numer artykułu Brady 080910.\n\nLaminat znosi temperatury od −70 do 90 °C, paliwa i oleje. UL uznał ten materiał. Drukuje się na nim taśmą R4900 (i75-R4900), zamawianą osobno. Etykiety pasują do drukarek i7100 i i7500.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-water-indicating-labels-pid-tht-70-350-20',
  images: ['/images/products/brady/tht-70-350-20.png'],
  imageDescriptions: [
    'Rolka Brady THT-70-350-20 z siatką małych, kwadratowych etykiet wskazujących kontakt z wodą',
  ],
  specifications: [
    { name: 'Part Number', value: 'THT-70-350-20' },
    { name: 'Numer artykułu Brady', value: '080910' },
    { name: 'Typ', value: 'Rolka etykiet wskaźnikowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'VisAlert B-350' },
    { name: 'Typ materiału', value: 'laminat poliestru i papieru, wskazujący kontakt z wodą' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,259 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 90 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, niskie temperatury' },
    { name: 'Działanie wskaźnika', value: 'trwała zmiana koloru z białego na czerwony po zetknięciu krawędzi z roztworem wodnym' },
    { name: 'Powierzchnia', value: 'gładka, chropowata' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '6,35 × 6,35 mm' },
    { name: 'Liczba etykiet w rzędzie', value: '7' },
    { name: 'Szerokość materiału', value: '60,2 mm' },
    { name: 'Liczba sztuk na rolce', value: '20 000' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R4900 (i75-R4900)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500' },
  ],
  faq: [
    { question: 'Jak działa etykieta VisAlert B-350?', answer: 'Po zetknięciu krawędzi z roztworem wodnym zmienia kolor z białego na czerwony. Zmiana jest trwała.' },
    { question: 'Ile etykiet jest na rolce THT-70-350-20?', answer: 'Dwadzieścia tysięcy. Każda etykieta mierzy 6,35 × 6,35 mm, a w rzędzie leży ich siedem.' },
    { question: 'Które drukarki obsługują etykiety THT-70-350-20?', answer: 'Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Drukarka i6100 nie jest wymieniona jako zgodna.' },
  ],
  applications: ['Kontrola kontaktu urządzeń z wodą', 'Znakowanie zabezpieczające'],
}

// ---------------------------------------------------------------------------
// Etykiety nylonowe z mocnym klejem B-499 (cps-4363509)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk lub zestawów, zestaw prostokąt + koło]
const NYLON_499: [string, number, number, number, boolean?][] = [
  ['THT-152-499-3', 25.4, 9.53, 3000],
  ['THT-163-499-3', 25.4, 9.53, 3000, true],
  ['THT-136-499-3', 38.1, 19.05, 3000],
  ['THT-151-499-3', 50.8, 6.35, 3000],
  ['THT-137-499-3', 50.8, 25.4, 3000],
  ['THT-125-499-3', 22.86, 12.7, 3000],
  ['THT-126-499-3', 22.86, 12.7, 3000, true],
  ['THT-69-499-3', 20.32, 36.5, 3000],
  ['THT-68-499-10', 12.7, 19.05, 10000],
]

export const bradyTHTNylon499: Product = {
  ...wspolneTHT,
  id: 'brady-tht-152-499-3',
  slug: 'brady-tht-152-499-3',
  name: 'Etykiety nylonowe z mocnym klejem Brady B-499 na rolce 76 mm',
  seoTitle: 'Brady B-499 — etykiety nylonowe do drukarek i6100, i7100, i7500',
  seoDescription: 'Białe etykiety nylonowe Brady B-499 z mocnym klejem do drukarek Brady i6100, i7100 i i7500, dziewięć wersji. PN: THT-152-499-3, THT-137-499-3, THT-136-499-3.',
  shortDescription: 'Brady THT-152-499-3 to biała etykieta z tkaniny nylonowej na przewody, podzespoły i fiolki; w rodzinie są też zestawy prostokąta z kołem. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykieta B-499 składa się z białej tkaniny nylonowej: matowej, bez halogenów, grubej na 0,166 mm. Etykiety oznaczają elementy wyposażenia, okablowanie, magazyn i towar. W laboratorium trafiają na butelki, szalki, kolby, duże i stożkowe probówki oraz fiolki. Mocny klej akrylowy utrzymuje je na podłożu gładkim, szorstkim albo teksturowanym, także o niskiej energii powierzchniowej.\n\nDziewięć numerów ma etykiety o szerokości 12,7–50,8 mm i wysokości 6,35–36,5 mm. Dwa numery to zestawy prostokąta z kołem. Osiem numerów nawinięto po 3000 sztuk albo zestawów, jeden po 10 000. Drukarka i6100 obsługuje pięć numerów: THT-136-499-3, THT-151-499-3, THT-152-499-3, THT-163-499-3 i THT-137-499-3. Pozostałe cztery pasują do i7100 i i7500.\n\nMateriał pracuje przy −40 °C i przy 90 °C, a także w zamrażarce; odpiera ścieranie, chemikalia, wilgoć, UV oraz pogodę. Akceptacja CSA, uznanie UL i zgodność halogenowa DIN VDE 0472 część 815 dotyczą materiału białego. Zalecana taśma barwiąca to R4306 (i75-R4306).',
  sameAs: 'https://www.brady.eu/labels/aggressive-adhesive-multi-purpose-nylon-labels-for-76-mm-core-printers-cps-4363509',
  images: ['/images/products/brady/tht-152-499-3.png', '/images/products/brady/tht-137-499-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-152-499-3 z białymi etykietami nylonowymi ułożonymi w dwóch rzędach na brązowej gilzie',
    'Rolka Brady THT-137-499-3 z dużymi białymi etykietami nylonowymi 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'mocny, trwały, akrylowy' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, promieniowanie UV, warunki atmosferyczne, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka, szorstka, teksturowana o niskiej energii powierzchniowej' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość 12,7–50,8 mm, wysokość 6,35–36,5 mm, zależnie od wersji; dwa numery to zestawy prostokąta z kołem' },
    { name: 'Liczba sztuk na rolce', value: '3000 albo 10 000, zależnie od wersji' },
    { name: 'Probówki', value: 'duże i stożkowe, fiolki; pojemność 0,5 ml' },
    { name: 'Normy', value: 'CSA Accepted, UL Recognised, bezhalogenowość wg DIN VDE 0472 część 815 (tylko materiał biały)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4306 (i75-R4306)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'i6100: tylko THT-136-499-3, THT-151-499-3, THT-152-499-3, THT-163-499-3 i THT-137-499-3; pozostałe numery: i7100 i i7500' },
  ],
  variants: NYLON_499.map(([pn, szer, wys, szt, zestaw]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała ${zestaw ? 'etykieta nylonowa B-499 w zestawie z kołem' : 'etykieta nylonowa B-499'} ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: zestaw ? `${liczba(szer)} × ${liczba(wys)} mm, ${sztuki(szt)} zest.` : rozmiar(szer, wys, szt), Kształt: zestaw ? 'Prostokąt i koło (zestaw)' : 'Prostokąt' } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk albo zestawów na rolce.\n\nRozmiary sięgają od 12,7 × 19,05 do 50,8 × 25,4 mm, a rolki liczą 3000 albo 10 000 sztuk.',
    Kształt: 'Kształt etykiety albo zestawu.\n\nDwa numery to zestawy z prostokątem i kołem na jednej rolce, pozostałe to prostokąty.',
  },
  faq: [
    { question: 'Które etykiety B-499 pasują do drukarki i6100?', answer: 'Pasuje pięć numerów: THT-136-499-3, THT-151-499-3, THT-152-499-3, THT-163-499-3 i THT-137-499-3. Pozostałe cztery pasują do i7100 i i7500.' },
    { question: 'Czy etykiety B-499 zawierają halogeny?', answer: 'Nie. Tkanina nylonowa jest bezhalogenowa, a zgodność z DIN VDE 0472 część 815 dotyczy materiału białego.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-499?', answer: `Zaleca się taśmę R4306 (i75-R4306). Etykiety drukują ${LINKI_DRUKAREK}, zależnie od numeru.` },
  ],
  applications: ['Znakowanie przewodów i elementów wyposażenia', 'Oznaczanie butelek, kolb i szalek laboratoryjnych', 'Etykiety magazynowe i towarowe'],
}

// ---------------------------------------------------------------------------
// Etykiety zabezpieczające z winylu Defender B-7351 (cps-4401985)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const WINYL_7351: [string, number, number, number][] = [
  ['THT-17-7351-3', 50.8, 25.4, 3000],
  ['THT-5-7351-10', 25.4, 12.7, 10000],
  ['THT-4-7351-10', 38.1, 6.35, 10000],
  ['THT-1-7351-10', 19.05, 6.35, 10000],
  ['THT-12-7351-10', 12.7, 11.1, 10000],
  ['THT-14-7351-10', 16.51, 5.08, 10000],
]

export const bradyTHTWinyl7351: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-7351-3',
  slug: 'brady-tht-17-7351-3',
  name: 'Etykiety zabezpieczające z winylu Brady Defender B-7351 na rolce 76 mm',
  seoTitle: 'Brady B-7351 — etykiety zabezpieczające do i6100, i7100, i7500',
  seoDescription: 'Satynowe etykiety winylowe Brady Defender B-7351 odporne na manipulacje do drukarek Brady i6100, i7100 i i7500. PN: THT-17-7351-3, THT-5-7351-10, THT-4-7351-10.',
  shortDescription: 'Brady THT-17-7351-3 to satynowa etykieta winylowa odporna na manipulacje, w kilku formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Defender B-7351 to winyl odporny na manipulacje, o satynowym wykończeniu i grubości 0,066 mm. Materiał pełni funkcję zabezpieczającą: etykieta ujawnia próbę ingerencji. Klej akrylowy jest trwały i trzyma na powierzchniach gładkich oraz chropowatych. Etykietę nakleja się od 4 °C, a materiał pracuje także w zamrażarce.\n\nW rodzinie jest sześć numerów. Najwęższa etykieta ma 12,7 mm, najszersza 50,8 mm, a wysokość mieści się w przedziale 5,08–25,4 mm. Pięć mniejszych formatów nawinięto po 10 000 sztuk, a wersję 50,8 × 25,4 mm po 3000. Ta ostatnia jest największym formatem rodziny. Do drukarki i6100 pasują numery THT-4-7351-10, THT-17-7351-3 i THT-5-7351-10. Drukarki i7100 oraz i7500 obsługują wszystkie sześć numerów.\n\nFolia wytrzymuje od −40 do 80 °C. Jest odporna na chemikalia, wilgoć, UV, warunki atmosferyczne i niskie temperatury.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-tamper-resistant-vinyl-labels-cps-4401985',
  images: ['/images/products/brady/tht-17-7351-3.png', '/images/products/brady/tht-1-7351-10.png'],
  imageDescriptions: [
    'Rolka Brady THT-17-7351-3 z białymi, satynowymi etykietami zabezpieczającymi z winylu i rozwiniętym paskiem na przodzie',
    'Rolka Brady THT-1-7351-10 z drobnymi etykietami zabezpieczającymi B-7351 i rozwiniętym paskiem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet zabezpieczających, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Defender B-7351' },
    { name: 'Typ materiału', value: 'winyl odporny na manipulacje' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,066 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka' },
    { name: 'Odporność', value: 'chemikalia, wilgoć, promieniowanie UV, warunki atmosferyczne, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka, chropowata' },
    { name: 'Wymiary etykiety', value: 'szerokość 12,7–50,8 mm, wysokość 5,08–25,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '3000 albo 10 000, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'i6100: tylko THT-4-7351-10, THT-17-7351-3 i THT-5-7351-10; pozostałe numery: i7100 i i7500' },
  ],
  variants: WINYL_7351.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta zabezpieczająca B-7351 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 12,7 × 11,1 do 50,8 × 25,4 mm, a rolki liczą 3000 albo 10 000 sztuk.',
  },
  faq: [
    { question: 'Które etykiety B-7351 pasują do drukarki i6100?', answer: 'Numery THT-4-7351-10, THT-17-7351-3 i THT-5-7351-10. Pozostałe numery obsługują i7100 i i7500.' },
    { question: 'Od jakiej temperatury można naklejać etykiety B-7351?', answer: 'Od 4 °C. Naklejona etykieta pracuje od −40 do 80 °C, także w zamrażarce.' },
    { question: 'Które drukarki obsługują etykiety B-7351?', answer: `Etykiety drukują ${LINKI_DRUKAREK}, zależnie od numeru.` },
  ],
  applications: ['Plombowanie opakowań i obudów', 'Znakowanie zabezpieczające urządzeń'],
}

// ---------------------------------------------------------------------------
// Etykiety GHS/CLP z nadrukowanymi rombami (cps-4358217)
// ---------------------------------------------------------------------------

// [PN, materiał, szerokość, sztuk na rolce, układ rombów]
const GHS_CLP: [string, string, number, number, string][] = [
  ['622302', 'Papier', 105, 500, '2 romby'],
  ['622305', 'Papier', 105, 500, '4A'],
  ['622295', 'Polipropylen', 105, 500, '1 romb'],
  ['622297', 'Polipropylen', 105, 500, '3A'],
  ['622298', 'Polipropylen', 105, 500, '3B'],
  ['622300', 'Polipropylen', 105, 500, '4B'],
  ['THTCLP-M-L2-7610-1', 'Papier', 75, 1000, '2 romby'],
  ['THTCLP-M-L3B-7610-1', 'Papier', 75, 1000, '3B'],
  ['THTCLP-M-L4B-7610-1', 'Papier', 75, 1000, '4B'],
  ['THTCLP-M-L3A-7594-1', 'Polipropylen', 75, 1000, '3A'],
  ['THTCLP-M-L3B-7594-1', 'Polipropylen', 75, 1000, '3B'],
  ['THTCLP-M-L4A-7594-1', 'Polipropylen', 75, 1000, '4A'],
  ['THTCLP-M-L4B-7594-1', 'Polipropylen', 75, 1000, '4B'],
  ['THTCLP-S-L1-7594-2', 'Polipropylen', 55, 2000, '1 romb'],
  ['THTCLP-S-L3A-7594-2', 'Polipropylen', 55, 2000, '3A'],
  ['THTCLP-S-L4B-7594-2', 'Polipropylen', 55, 2000, '4B'],
]

export const bradyTHTGhsClp: Product = {
  ...wspolneTHT,
  id: 'brady-thtclp-m-l2-7610-1',
  slug: 'brady-thtclp-m-l2-7610-1',
  name: 'Etykiety GHS/CLP z nadrukowanymi czerwonymi rombami Brady na rolce 76 mm',
  seoTitle: 'Brady etykiety GHS/CLP z rombami do i6100, i7100, i7500',
  seoDescription: 'Etykiety Brady GHS/CLP z czerwonymi rombami, papier B-7610 i polipropylen, do drukarek Brady i6100, i7100 i i7500. PN: THTCLP-M-L2-7610-1, 622295, 622302.',
  shortDescription: 'Brady THTCLP-M-L2-7610-1 to etykieta GHS/CLP z fabrycznie nadrukowanymi czerwonymi rombami, na papierze lub polipropylenie. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykiety GHS/CLP mają fabrycznie nadrukowane czerwone romby, które służą do oznaczania zagrożeń. Układ rombów to jeden romb, dwa romby albo układy 3A, 3B, 4A i 4B. Etykiety wykonano z papieru B-7610 albo z polipropylenu. Papier B-7610 jest matowy, gruby na 0,081 mm, z klejem akrylowym.\n\nRodzina liczy szesnaście numerów w trzech szerokościach. Etykiety o szerokości 105 mm nawinięto po 500 sztuk, 75 mm po 1000, a 55 mm po 2000. Wersje 55 mm występują tylko na polipropylenie i w układach rombów 1, 3A i 4B. Wersje 105 i 75 mm są dostępne na papierze i na polipropylenie.\n\nDla papieru obowiązuje zakres od −40 do 50 °C, a jego powierzchnia znosi ścieranie, wilgoć i chłód. Do papieru zaleca się serię taśm barwiących R7950, a do polipropylenu serię R6000HF. Taśmy kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-ghs-clp-labels-cps-4358217',
  images: ['/images/products/brady/thtclp-m-l2-7610-1.png', '/images/products/brady/thtclp-m-l3b-7594-1.png'],
  imageDescriptions: [
    'Rolka Brady THTCLP-M-L2-7610-1 z papierowymi etykietami z dwoma czerwonymi rombami GHS/CLP',
    'Rolka Brady THTCLP-M-L3B-7594-1 z polipropylenowymi etykietami z czerwonymi rombami GHS/CLP w układzie 3B',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet z nadrukowanymi rombami GHS/CLP, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'papier B-7610 albo polipropylen, zależnie od wersji' },
    { name: 'Typ materiału', value: 'papier, polipropylen' },
    { name: 'Wykończenie', value: 'matowe (papier)' },
    { name: 'Klej', value: 'trwały, akrylowy (papier)' },
    { name: 'Grubość', value: '0,081 mm (papier)' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C (papier)' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, niskie temperatury (papier)' },
    { name: 'Nadruk fabryczny', value: 'czerwone romby GHS/CLP: 1 romb, 2 romby, układy 3A, 3B, 4A i 4B' },
    { name: 'Szerokość etykiety', value: '55, 75 albo 105 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '500 (105 mm), 1000 (75 mm), 2000 (55 mm)' },
    { name: 'Zalecana taśma barwiąca', value: 'papier: seria R7950; polipropylen: seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
  ],
  variants: GHS_CLP.map(([pn, material, szer, szt, uklad]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta GHS/CLP na ${material === 'Papier' ? 'papierze' : 'polipropylenie'}, szerokość ${szer} mm, układ rombów ${uklad}`,
    attributes: { Materiał: material, Rozmiar: `szer. ${szer} mm, ${sztuki(szt)} szt.`, Romby: uklad } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Materiał: 'Rodzaj materiału etykiety.\n\nPapier B-7610 jest matowy. Polipropylen drukuje się taśmami z serii R6000HF.',
    Rozmiar: 'Szerokość etykiety i liczba sztuk na rolce.\n\nSzerokości 55, 75 i 105 mm mają odpowiednio 2000, 1000 i 500 sztuk na rolce.',
    Romby: 'Układ nadrukowanych czerwonych rombów GHS/CLP.\n\nDo wyboru są jeden romb, dwa romby oraz układy 3A, 3B, 4A i 4B.',
  },
  faq: [
    { question: 'Jakie układy rombów GHS/CLP są dostępne?', answer: 'Jeden romb, dwa romby oraz układy 3A, 3B, 4A i 4B. Romby są czerwone i nadrukowane fabrycznie.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet GHS/CLP?', answer: 'Do wersji papierowych zaleca się serię R7950, a do polipropylenowych serię R6000HF.' },
    { question: 'Które drukarki obsługują etykiety GHS/CLP?', answer: `Etykiety drukują ${LINKI_DRUKAREK}.` },
  ],
  applications: ['Oznaczanie substancji i mieszanin chemicznych', 'Etykiety zagrożeń na opakowaniach'],
}

// ---------------------------------------------------------------------------
// Satynowe etykiety poliestrowe B-8423 (cps-4402067, pid-xtht-18-8423-5, pid-xtht-17-8423-5, pid-tht-g2-8423-yl)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, kolor]
const POLIESTER_8423: [string, number, number, number, string][] = [
  ['XTHT-19-8423-3', 76.2, 50.8, 3000, 'Biały'],
  ['XTHT-55-8423-3', 101.6, 50.8, 3000, 'Biały'],
  ['XTHT-18-8423-5', 76.2, 25.4, 5000, 'Biały'],
  ['XTHT-17-8423-5', 50.8, 25.4, 5000, 'Biały'],
  ['THT-G2-8423-YL', 20, 7.95, 10000, 'Żółty'],
]

export const bradyTHTSatyna8423: Product = {
  ...wspolneTHT,
  id: 'brady-xtht-19-8423-3',
  slug: 'brady-xtht-19-8423-3',
  name: 'Satynowe etykiety poliestrowe Brady B-8423 na rolce 76 mm',
  seoTitle: 'Brady B-8423 — satynowe etykiety poliestrowe, i6100, i7100, i7500',
  seoDescription: 'Satynowe etykiety poliestrowe Brady B-8423 z mocnym klejem do drukarek Brady i6100, i7100 i i7500. PN: XTHT-19-8423-3, XTHT-17-8423-5, THT-G2-8423-YL.',
  shortDescription: 'Brady XTHT-19-8423-3 to biała etykieta z satynowego poliestru na kody kreskowe, płytki i laboratorium, także w wersji żółtej. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-8423 to satynowy poliester o grubości 0,071 mm, Klej jest mocny, trwały i akrylowy, więc etykieta wymaga gładkiego podłoża. Etykiety znakują majątek, magazyn i towar, niosą kody kreskowe, trafiają do laboratorium i oznaczają płytki drukowane. Żółta wersja, THT-G2-8423-YL, nadaje się na płytki po procesie, tylko na górną ich stronę przy montażu przewlekanym (THT). Strona dolna i montaż powierzchniowy (SMT) są wykluczone.\n\nPięć numerów obejmuje cztery białe formaty i jeden żółty. Etykiety białe mierzą 76,2 × 50,8, 101,6 × 50,8, 76,2 × 25,4 i 50,8 × 25,4 mm. Wersja żółta ma 20 × 7,95 mm, cztery etykiety w rzędzie i rolkę 10 000 sztuk. Rolki białych etykiet liczą 3000 albo 5000 sztuk.\n\nMateriał pracuje od −80 do 110 °C. Odpiera ścieranie, wilgoć i niskie temperatury. Zakres zgodnych drukarek zależy od numeru. Do nadruku dobiera się taśmy barwiące z serii R6000HF, R6200, R4400 lub R7961.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-satin-polyester-general-identification-labels-cps-4402067',
  images: ['/images/products/brady/xtht-19-8423-3.png', '/images/products/brady/xtht-17-8423-5.png'],
  imageDescriptions: [
    'Rolka Brady XTHT-19-8423-3 z białymi etykietami z satynowego poliestru 76,2 × 50,8 mm',
    'Rolka białych etykiet z satynowego poliestru B-8423 o wymiarach 50,8 × 25,4 mm z rozwiniętym końcem',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-8423' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'mocny, trwały, akrylowy' },
    { name: 'Grubość', value: '0,071 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 110 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Płytki drukowane', value: 'wersja THT-G2-8423-YL: po procesie, THT od strony górnej; SMT niedozwolone' },
    { name: 'Kolor', value: 'biały, żółty (THT-G2-8423-YL)' },
    { name: 'Wymiary etykiety', value: '76,2 × 50,8 / 101,6 × 50,8 / 76,2 × 25,4 / 50,8 × 25,4 / 20 × 7,95 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '3000, 5000 albo 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'serie R6000HF, R6200, R4400 i R7961, zależnie od numeru' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'XTHT-18-8423-5: tylko i7100; XTHT-17-8423-5: i6100 i i7100; THT-G2-8423-YL: i7100 i i7500; pozostałe numery: i6100, i7100 i i7500' },
  ],
  variants: POLIESTER_8423.map(([pn, szer, wys, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${kolor === 'Żółty' ? 'żółta' : 'biała'} etykieta satynowa B-8423 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt), Kolor: kolor } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nRozmiary sięgają od 20 × 7,95 do 101,6 × 50,8 mm, a rolki liczą 3000, 5000 albo 10 000 sztuk.',
    Kolor: 'Kolor etykiety.\n\nCztery numery są białe, a jeden, THT-G2-8423-YL, żółty.',
  },
  faq: [
    { question: 'Które etykiety B-8423 pasują do drukarki i6100?', answer: 'Numery XTHT-19-8423-3, XTHT-55-8423-3 i XTHT-17-8423-5. Numery XTHT-18-8423-5 i THT-G2-8423-YL nie pasują do i6100.' },
    { question: 'Czy żółte etykiety B-8423 nadają się na płytki drukowane?', answer: 'Tak, wersja THT-G2-8423-YL po procesie, od strony górnej przy montażu przewlekanym (THT). Montaż powierzchniowy (SMT) jest wykluczony.' },
    { question: 'Jaki zakres temperatur znosi materiał B-8423?', answer: `Od −80 do 110 °C. Etykiety drukują ${LINKI_DRUKAREK}, zależnie od numeru.` },
  ],
  applications: ['Znakowanie majątku, magazynu i towaru', 'Etykiety z kodami kreskowymi', 'Oznaczanie płytek drukowanych po lutowaniu'],
}

// ---------------------------------------------------------------------------
// Etykiety poliestrowe odporne na chemikalia StainerBondz B-488 (cps-5473025, pid-tht-199-488-3, cps-4363410)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const POLIESTER_488: [string, number, number, number][] = [
  ['THT-5-488-10', 25.4, 12.7, 10000],
  ['THT-17-488-3', 50.8, 25.4, 3000],
  ['THT-199-488-3', 26.67, 6.35, 3000],
  ['THT-1-488-10', 19.05, 6.35, 10000],
  ['THT-2-488-10', 22.86, 6.35, 10000],
  ['THT-14-488-10', 16.51, 5.08, 10000],
  ['THT-140-488-3', 19.05, 22.86, 3000],
  ['THT-141-488-3', 22.86, 22.86, 3000],
  ['THT-164-488-1', 22.86, 22.86, 1000],
  ['THT-195-488-3', 22.86, 9.53, 3000],
  ['THT-194-488-3', 22.86, 19.05, 3000],
  ['THT-164-488-3', 22.86, 22.86, 3000],
  ['THT-142-488-2.5', 63.5, 5.08, 2500],
]

export const bradyTHTPoliester488: Product = {
  ...wspolneTHT,
  tags: ['healthcare'],
  id: 'brady-tht-5-488-10',
  slug: 'brady-tht-5-488-10',
  name: 'Etykiety poliestrowe odporne na chemikalia Brady StainerBondz B-488 na rolce 76 mm',
  seoTitle: 'Brady B-488 — etykiety odporne na chemikalia, i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety poliestrowe Brady StainerBondz B-488 odporne na rozpuszczalniki do drukarek Brady i6100, i7100 i i7500. PN: THT-5-488-10, THT-17-488-3.',
  shortDescription: 'Brady THT-5-488-10 to biała, matowa etykieta poliestrowa odporna na rozpuszczalniki i chemikalia, w trzynastu formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'StainerBondz B-488 to biały, matowy poliester do oznaczeń, które stykają się z chemikaliami. Folia ma 0,0914 mm grubości. Trwały klej akrylowy wymaga podłoża gładkiego. Etykieta odpiera rozpuszczalniki, oleje i wodę, znosi niskie temperatury i nadaje się do autoklawu. Naklejać ją należy od 10 °C. Oznacza butelki, szalki i kolby, trafia do szpitali i laboratoriów, a także na kody kreskowe i do ewidencji.\n\nTrzynaście numerów ma szerokość od 16,51 do 63,5 mm i wysokość od 5,08 do 25,4 mm. Rolki liczą 1000, 2500, 3000 albo 10 000 sztuk. Zgodność z drukarkami zależy od numeru. Drukarka i7100 obsługuje wszystkie numery, i7500 osiem, a i6100 trzy: THT-5-488-10, THT-17-488-3 i THT-199-488-3.\n\nZakres pracy B-488 obejmuje −40…160 °C. Do nadruku zaleca się taśmę barwiącą R4300. Największą odporność na płyny procesowe daje seria R6400. Przy bardzo małych etykietach wynik zależy od szybkości druku, wielkości serii, ustawienia ciepła i układu nadruku, więc wskazana jest próba.',
  sameAs: 'https://www.brady.eu/labels/solvent-chemical-resistant-polyester-labels-for-76-mm-core-printers-cps-4363410',
  images: ['/images/products/brady/tht-140-488-3.png', '/images/products/brady/tht-194-488-3.png'],
  imageDescriptions: [
    'Rolka Brady THT-140-488-3 z białymi, matowymi etykietami poliestrowymi w dwóch rzędach',
    'Rolka Brady THT-194-488-3 z białymi etykietami StainerBondz o szerokości 22,86 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'StainerBondz B-488' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,0914 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 160 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'autoklaw' },
    { name: 'Odporność', value: 'rozpuszczalniki, chemikalia, oleje, woda, niskie temperatury' },
    { name: 'Powierzchnia', value: 'gładka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'szerokość 16,51–63,5 mm, wysokość 5,08–25,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000, 2500, 3000 albo 10 000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300; największa odporność na płyny procesowe: seria R6400' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: DRUKARKI },
    { name: 'Uwagi o zgodności', value: 'i7100: wszystkie numery; i6100: tylko THT-5-488-10, THT-17-488-3 i THT-199-488-3; i7500: bez THT-195-488-3, THT-164-488-3, THT-142-488-2.5, THT-194-488-3 i THT-199-488-3' },
  ],
  variants: POLIESTER_488.map(([pn, szer, wys, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa B-488 ${liczba(szer)} × ${liczba(wys)} mm`,
    attributes: { Rozmiar: rozmiar(szer, wys, szt) } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nSzerokość etykiety wynosi od 16,51 do 63,5 mm, a wysokość od 5,08 do 25,4 mm. Rolki liczą od 1000 do 10 000 sztuk.',
  },
  faq: [
    { question: 'Które etykiety B-488 pasują do drukarki i6100?', answer: 'Trzy numery: THT-5-488-10, THT-17-488-3 i THT-199-488-3. Drukarka i7100 obsługuje wszystkie numery rodziny.' },
    { question: 'Jaki zakres temperatur znosi materiał B-488?', answer: 'Od −40 do 160 °C. Etykiety naklejać można od 10 °C, a materiał nadaje się do autoklawu.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-488?', answer: `Zaleca się taśmę R4300, a dla największej odporności na płyny procesowe serię R6400. Etykiety drukują ${LINKI_DRUKAREK}, zależnie od numeru.` },
  ],
  applications: ['Butelki, szalki i kolby w laboratorium', 'Oznaczanie w szpitalach i laboratoriach', 'Kody kreskowe i ewidencja'],
}

export const bradyTHTSpecjalne: Product[] = [
  bradyTHTSzachownica438,
  bradyTHTVoid7576,
  bradyTHTWinyl362,
  bradyTHTTasma499,
  bradyTHTPolipropylen425,
  bradyTHTUsuwalne449,
  bradyTHTUsuwalne533,
  bradyTHTPapier424,
  bradyTHTPapier7610,
  bradyTHTKrio7600,
  bradyTHTKrio494,
  bradyTHTWinyl439,
  bradyTHTRozpuszczalny403,
  bradyTHTPapier408,
  bradyTHTNylon499,
  bradyTHTWinyl7351,
  bradyTHTGhsClp,
  bradyTHTSatyna8423,
  bradyTHTPoliester488,
  bradyTHTWoda350,
]

export const bradyTHTSpecjalneSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = {
  'brady-tht-17-438-3': 'ogolne',
  'brady-tht-53-7576-3': 'ogolne',
  'brady-146170': 'ogolne',
  'brady-tht-1000-499': 'ogolne',
  'brady-tht-5-425-10': 'ogolne',
  'brady-tht-6-449-3': 'ogolne',
  'brady-tht-12-533-10': 'ogolne',
  'brady-tht-53-424-3': 'ogolne',
  'brady-tht-104x56-7610': 'ogolne',
  'brady-tht-301-7600-3': 'lab',
  'brady-tht-179-494-3-bl': 'lab',
  'brady-thtc-63-439wt': 'ogolne',
  'brady-tht-19-403-1': 'ogolne',
  'brady-tht-19-408-1': 'ogolne',
  'brady-tht-152-499-3': 'ogolne',
  'brady-tht-17-7351-3': 'ogolne',
  'brady-thtclp-m-l2-7610-1': 'ogolne',
  'brady-xtht-19-8423-3': 'ogolne',
  'brady-tht-5-488-10': 'lab',
  'brady-tht-70-350-20': 'ogolne',
}
