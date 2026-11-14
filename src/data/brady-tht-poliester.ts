import type { Product } from './products'
import { wspolneTHT } from './brady-tht-wspolne'

// Etykiety i taśmy poliestrowe Brady na rolkach z gilzą 76 mm (serie THT, THTPNP, THTTL) do drukarek i6100, i7100 i i7500:
// ogólne, znamionowe, metalizowane i przezroczyste. Jedna karta na materiał (B-xxx), wykrojone etykiety i taśma ciągła jako warianty. 14.11.2026.

// Wymiar z danych producenta (np. '50.80') na zapis polski ('50,8').
const mm = (v: string) => String(parseFloat(v)).replace('.', ',')
const sztuk = (n: string) => (Number(n) >= 10000 ? `${Number(n) / 1000} 000` : n)
const wym = (w: string, h: string) => `${mm(w)} × ${mm(h)}`
// Wartość atrybutu wariantu ma się mieścić w 28 znakach; przy najdłuższych zapisach pomijamy jednostkę.
const rozmiar = (w: string, h: string, n: string) => {
  const pelny = `${wym(w, h)} mm, ${sztuk(n)} szt.`
  return pelny.length > 28 ? `${wym(w, h)}, ${sztuk(n)} szt.` : pelny
}
const ciagla = (w: string) => `ciągła ${mm(w)} mm × 91,44 m`

// ---------------------------------------------------------------------------
// WorkHorse B-423, białe i żółte etykiety wykrojone (cps-4363443)
// ---------------------------------------------------------------------------

const KOLORY_423: Record<string, string> = { W: 'Biały', Y: 'Żółty' }

// Numery, których nie obsługuje i6100 (reszta rodziny pasuje do i6100, i7100 i i7500), oraz numery bez i7500.
const BEZ_I6100_423 = ['THT-11-423-10', 'THT-57-423-10', 'THT-97-423-10', 'THT-1-423-10', 'THT-14-423-10', 'THT-47-423-10', 'THT-38-423-10', 'THT-12-423-10', 'THT-2-423-10', 'THT-49-423-10', 'THT-46-423-10', 'THT-41-423-10', 'THT-42-423-10', 'THT-50-423-10']
const BEZ_I7500_423 = ['THT-22-423-2', '030145', 'THT-24-423-1']

// [PN, szerokość, wysokość, sztuk na rolce, rzędów, kolor]
const WORKHORSE_423: [string, string, string, string, string, string][] = [
  ['THT-11-423-10', '6.35', '6.35', '10000', '12', 'W'],
  ['THT-36-423-10', '12.70', '5.08', '10000', '5', 'W'],
  ['THT-57-423-10', '17.78', '9.53', '10000', '4', 'W'],
  ['THT-97-423-10', '12.70', '5.08', '10000', '1', 'W'],
  ['THT-1-423-10', '19.05', '6.35', '10000', '4', 'W'],
  ['THT-14-423-10', '16.51', '5.08', '10000', '4', 'W'],
  ['THT-47-423-10', '16.51', '5.08', '10000', '1', 'W'],
  ['THT-38-423-10', '9.53', '9.53', '10000', '7', 'W'],
  ['THT-53-423-3', '50.80', '12.70', '3000', '1', 'W'],
  ['THT-12-423-10', '12.70', '11.10', '10000', '5', 'W'],
  ['THT-2-423-10', '22.86', '6.35', '10000', '3', 'W'],
  ['THT-49-423-10', '22.86', '6.35', '10000', '1', 'W'],
  ['THT-51-423-10', '25.40', '6.35', '10000', '3', 'W'],
  ['THT-46-423-10', '19.05', '6.35', '10000', '1', 'W'],
  ['THT-13-423-10', '31.75', '6.35', '10000', '2', 'W'],
  ['THT-3-423-10', '25.40', '9.53', '10000', '3', 'W'],
  ['THT-43-423-10', '31.75', '6.35', '10000', '1', 'W'],
  ['THT-103-423-10', '25.40', '6.35', '10000', '1', 'W'],
  ['THT-28-423-10', '38.10', '3.18', '10000', '2', 'W'],
  ['THT-4-423-10', '38.10', '6.35', '10000', '2', 'W'],
  ['THT-41-423-10', '25.40', '4.75', '10000', '3', 'W'],
  ['THT-42-423-10', '25.40', '4.75', '10000', '1', 'W'],
  ['THT-40-423-10', '34.93', '6.35', '10000', '2', 'W'],
  ['THT-44-423-10', '34.93', '6.35', '10000', '1', 'W'],
  ['THT-45-423-10', '38.10', '6.35', '10000', '1', 'W'],
  ['THT-29-423-10', '31.75', '9.53', '10000', '2', 'W'],
  ['THT-17-423-3', '50.80', '25.40', '3000', '1', 'W'],
  ['THT-19-423-1', '76.20', '50.80', '1000', '1', 'W'],
  ['THT-19-423-1-YL', '76.20', '50.80', '1000', '1', 'Y'],
  ['THT-17-423-3-YL', '50.80', '25.40', '3000', '1', 'Y'],
  ['THT-31-423-10', '27.94', '9.65', '10000', '2', 'W'],
  ['THT-5-423-10', '25.40', '12.70', '10000', '3', 'W'],
  ['THT-5-423-10-YL', '25.40', '12.70', '10000', '3', 'Y'],
  ['THT-50-423-10', '19.05', '19.05', '10000', '4', 'W'],
  ['THT-59-423-10', '25.40', '12.70', '10000', '1', 'W'],
  ['THT-48-423-10', '50.80', '6.35', '10000', '1', 'W'],
  ['THT-55-423-1', '101.60', '50.80', '1000', '1', 'W'],
  ['THT-55-423-1-YL', '101.60', '50.80', '1000', '1', 'Y'],
  ['THT-37-423-10', '38.10', '12.70', '10000', '2', 'W'],
  ['THT-37-423-10-YL', '38.10', '12.70', '10000', '2', 'Y'],
  ['THT-79-423-10', '50.80', '10.16', '10000', '1', 'W'],
  ['THT-18-423-3', '76.20', '25.40', '3000', '1', 'W'],
  ['THT-18-423-3-YL', '76.20', '25.40', '3000', '1', 'Y'],
  ['THT-7-423-3', '69.85', '31.75', '3000', '1', 'W'],
  ['THT-6-423-10', '38.10', '19.05', '10000', '2', 'W'],
  ['THT-6-423-10-YL', '38.10', '19.05', '10000', '2', 'Y'],
  ['THT-22-423-2', '31.75', '19.05', '2000', '2', 'W'],
  ['030145', '50.80', '25.40', '2000', '1', 'W'],
  ['THT-24-423-1', '69.85', '44.45', '1000', '1', 'W'],
]

export const bradyTHTWorkhorse423: Product = {
  ...wspolneTHT,
  id: 'brady-tht-11-423-10',
  slug: 'brady-tht-11-423-10',
  name: 'Białe etykiety poliestrowe Brady WorkHorse B-423 na rolce 76 mm',
  seoTitle: 'Brady WorkHorse B-423 — etykiety poliestrowe, i6100, i7100',
  seoDescription: 'Etykiety poliestrowe Brady WorkHorse B-423 do i6100, i7100 i i7500: kody kreskowe, komponenty, autoklaw. PN: THT-11-423-10, THT-18-423-3, THT-5-423-10-YL.',
  shortDescription: 'Brady WorkHorse B-423 to błyszczące etykiety poliestrowe z klejem akrylowym, białe i żółte, w 49 numerach katalogowych. Do drukarek Brady i7100 i i7500, w większości także i6100.',
  description: 'Poliester WorkHorse B-423 ma kolor biały, a jego powierzchnia jest błyszcząca. Klej akrylowy jest trwały i trafia na podłoża gładkie. Materiał jest wolny od halogenów. Etykiety trafiają na komponenty, sprzęt i towar, gdzie potrzebny jest kod kreskowy, numer inwentarzowy albo zwykła identyfikacja. W technologii SMT materiał nie pracuje. Przy montażu przewlekanym THT dopuszczono go na stronie górnej, po zakończeniu procesu.\n\nOferta liczy 49 numerów. Najwęższe etykiety mają 6,35 mm szerokości, a najszersze 101,6 mm; wysokość waha się między 3,18 a 50,8 mm. Rolki z najdrobniejszymi etykietami zawierają po 10 000 sztuk w kilku rzędach; najgęstszy układ ma dwanaście rzędów. Formaty duże, takie jak 101,6 × 50,8 mm, mają 1000 sztuk w jednym rzędzie. Siedem numerów jest żółtych, pozostałe białe.\n\nTemperatura pracy sięga od −70 do 110 °C. Dopuszcza się ją w autoklawie, w zamrażarce i w wodzie podgrzanej do 100 °C, a etykieta odpiera też promieniowanie UV, korozję, wilgoć, chemikalia i ścieranie. Atesty UL Recognised oraz CSA dotyczą wersji białej. Do wydruku zaleca się taśmę R6002 (seria R6000HF).',
  sameAs: 'https://www.brady.eu/labels/harsh-environment-multi-purpose-polyester-labels-for-76-mm-core-printers-cps-4363443',
  images: [
    '/images/products/brady/tht-18-423-3.png',
    '/images/products/brady/tht-11-423-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-18-423-3 z białymi błyszczącymi etykietami poliestrowymi 76,2 × 25,4 mm',
    'Rolka Brady THT-11-423-10 z drobnymi białymi etykietami poliestrowymi 6,35 × 6,35 mm w kilku rzędach',
  ],
    specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-423' },
    { name: 'Typ materiału', value: 'poliester, bez halogenów' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka, kąpiel wodna 100 °C' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'szerokość od 6,35 do 101,6 mm, wysokość od 3,18 do 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 2000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja), DIN VDE 0472 część 815 (bez halogenów); dotyczy koloru białego' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i7100, i7500; i6100 (większość numerów)' },
    { name: 'Uwagi o zgodności', value: `i6100: nie pasują numery ${BEZ_I6100_423.join(', ')}. i7500: nie pasują numery ${BEZ_I7500_423.join(', ')}. Pozostałe numery pasują do i6100, i7100 i i7500.` },
  ],
  variants: WORKHORSE_423.map(([pn, w, h, szt, rzedy, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${kolor === 'Y' ? 'żółta' : 'biała'} etykieta poliestrowa B-423 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: rozmiar(w, h, szt), Kolor: KOLORY_423[kolor], Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 101,6 × 50,8 mm.',
    Kolor: 'Kolor poliestru.\n\nWiększość rozmiarów jest biała, a siedem ma żółtą wersję.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nNajdrobniejsze etykiety leżą w dwunastu rzędach, a duże formaty w jednym.',
  },
  faq: [
    { question: 'Do czego służą etykiety WorkHorse B-423?', answer: 'Do znakowania komponentów i urządzeń, kodów kreskowych, ogólnej identyfikacji i kontroli zapasów. Na płytkach drukowanych dopuszcza się je przy elementach przewlekanych THT, po zakończeniu procesu. Do technologii SMT nie nadają się.' },
    { question: 'Jakie warunki znosi materiał B-423?', answer: 'Pracuje od −70 do 110 °C i wytrzymuje autoklaw, zamrażarkę oraz kąpiel wodną 100 °C. Jest odporny na ścieranie, chemikalia, korozję, wilgoć i promieniowanie UV.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-423?', answer: 'Zaleca się taśmę R6002 z serii R6000HF, a do i7500 oznaczenie i75-R6002. Etykiety drukują [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500), a większość numerów także [Brady i6100](/produkt/brady-i6100). Wyjątki wymienia pozycja „Uwagi o zgodności” w specyfikacji.' },
  ],
  applications: ['Kody kreskowe i oznaczanie komponentów', 'Ogólna identyfikacja i kontrola zapasów', 'Etykiety przy elementach przewlekanych THT, strona górna'],
}

// ---------------------------------------------------------------------------
// WorkHorse B-423, taśma ciągła (cps-4370422)
// ---------------------------------------------------------------------------

// [PN, szerokość taśmy]
const TASMA_423: [string, string][] = [
  ['THT-106-423', '50.80'],
  ['THT-21-423', '76.20'],
]

export const bradyTHTTasma423: Product = {
  ...wspolneTHT,
  id: 'brady-tht-106-423',
  slug: 'brady-tht-106-423',
  name: 'Białe poliestrowe taśmy ciągłe Brady WorkHorse B-423 na rolce 76 mm',
  seoTitle: 'Brady B-423 — taśma ciągła z poliestru do i6100, i7100, i7500',
  seoDescription: 'Biała taśma ciągła z poliestru Brady WorkHorse B-423 do drukarek i6100, i7100 i i7500, 91,44 m na rolce, od −70 do 110 °C. PN: THT-106-423, THT-21-423.',
  shortDescription: 'Brady WorkHorse B-423 to biała taśma ciągła z błyszczącego poliestru, w szerokościach 50,8 i 76,2 mm. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Ta taśma to ciągły pas białego poliestru WorkHorse B-423, bez wykrojów i przerw. O długości etykiety decyduje zadanie wydruku, a nie wykrój. Folia lśni, a klej akrylowy, trwały, przylega do podłoży gładkich. W materiale nie ma halogenów. Taśma znakuje urządzenia, komponenty i płytki drukowane, a także służy do kodów kreskowych i kontroli zapasów.\n\nDo wyboru są dwie szerokości: 50,8 oraz 76,2 mm. W obu przypadkach rolka ma 91,44 m. Ponieważ taśma nie ma wykrojów, rozmiar etykiety zmienia się bez wymiany materiału.\n\nFolia ma 0,076 mm grubości. Granice temperatury to −70 i 110 °C. Taśma odpiera paliwa i oleje, chemikalia, korozję, wilgoć, promieniowanie UV, pogodę i ścieranie, a także przechodzi cykl autoklawu, zamrożenie i kąpiel w wodzie 100 °C. Dla koloru białego obowiązują atesty UL Recognised i CSA; wolność od halogenów odnosi się do DIN VDE 0472 (część 815). Taśmą barwiącą jest R6002 (seria R6000HF).',
  sameAs: 'https://www.brady.eu/labels/harsh-environment-multi-purpose-polyester-label-tape-for-76-mm-core-printers-cps-4370422',
  images: [
    '/images/products/brady/tht-106-423.png',
    '/images/products/brady/tht-21-423.png',
  ],
  imageDescriptions: [
    'Rolka białej poliestrowej taśmy ciągłej Brady THT-106-423 o szerokości 50,8 mm z odwiniętym końcem',
    'Rolka białej poliestrowej taśmy ciągłej Brady THT-21-423 o szerokości 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Taśma ciągła na rolce, bez wykrojów i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-423' },
    { name: 'Typ materiału', value: 'poliester, bez halogenów' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka, kąpiel wodna 100 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '50,8 / 76,2 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja), DIN VDE 0472 część 815 (bez halogenów); dotyczy koloru białego' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: TASMA_423.map(([pn, szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała taśma ciągła poliestrowa B-423 ${mm(szer)} mm × 91,44 m`,
    attributes: { Rozmiar: ciagla(szer) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nObie wersje mają 91,44 m na rolce i różnią się szerokością: 50,8 albo 76,2 mm.',
  },
  faq: [
    { question: 'Czym taśma ciągła różni się od etykiet wykrojonych B-423?', answer: 'Taśma nie ma wykrojów, więc długość etykiety wynika z ustawień zadania wydruku. Materiał, klej i odporność są takie same jak w etykietach WorkHorse B-423.' },
    { question: 'Jaką taśmę barwiącą zamówić do taśmy B-423?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 oznaczenie i75-R6002. Taśmę drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Jakie warunki znosi taśma B-423?', answer: 'Zakres temperatur pracy to od −70 do 110 °C. Taśma wytrzymuje autoklaw, zamrażarkę i kąpiel wodną 100 °C oraz paliwa, oleje i chemikalia.' },
  ],
  applications: ['Etykiety o dowolnej długości na urządzeniach i komponentach', 'Kody kreskowe i kontrola zapasów', 'Oznaczanie płytek drukowanych'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-486B, metalizowany poliester z klejem kauczukowym (cps-4372006 + pid-tht-21-486)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, rzędów]
const METALABEL_486: [string, string, string, string, string][] = [
  ['THT-53-486-3', '50.80', '12.70', '3000', '1'],
  ['THT-19-486-1', '76.20', '50.80', '1000', '1'],
  ['THT-17-486-3', '50.80', '25.40', '3000', '1'],
  ['THT-18-486-3', '76.20', '25.40', '3000', '1'],
  ['THT-5-486-10', '25.40', '12.70', '10000', '3'],
  ['THT-59-486-10', '25.40', '12.70', '10000', '1'],
  ['THT-7-486-3', '69.85', '31.75', '3000', '1'],
  ['THT-37-486-10', '38.10', '12.70', '10000', '2'],
  ['THT-6-486-10', '38.10', '19.05', '10000', '2'],
]

export const bradyTHTMetalabel486: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-486-3',
  slug: 'brady-tht-53-486-3',
  name: 'Metalizowane etykiety poliestrowe Brady MetaLabel B-486B na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-486B — metalizowany poliester, i6100, i7100',
  seoDescription: 'Metalizowane etykiety Brady MetaLabel B-486B do drukarek i6100, i7100 i i7500: klej kauczukowy, lakier proszkowy, do 120 °C. PN: THT-53-486-3, THT-19-486-1.',
  shortDescription: 'Brady MetaLabel B-486B to matowy, metalizowany poliester z bardzo mocnym klejem kauczukowym, w 9 formatach wykrojonych i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Folia B-486B z linii MetaLabel jest matowym, jasnoszarym poliestrem z metalicznym wyglądem. Wyróżnia ją bardzo mocny klej kauczukowy, opracowany z myślą o powierzchniach malowanych proszkowo. Przylega również do podłoży szorstkich oraz takich, których energia powierzchniowa jest niska. Etykiety trafiają na sprzęt i komponenty, na środki trwałe objęte ewidencją oraz tam, gdzie wystarcza zwykła identyfikacja i inwentaryzacja.\n\nNa rolce z etykietami wykrojonymi mieści się 1000, 3000 lub 10 000 sztuk, zależnie od formatu. W formatach wykrojonych skrajne wymiary to 25,4 × 12,7 oraz 76,2 × 50,8 mm. Małe etykiety układają się w dwóch lub trzech rzędach. Osobny numer, THT-21-486, to taśma ciągła: szerokość 76,2 mm, długość 91,44 m na rolce.\n\nFolia jest gruba na 0,142 mm. Zachowuje właściwości, gdy temperatura spada do −40 °C i gdy rośnie do 120 °C. Odporność obejmuje ścieranie, rozpuszczalniki, chemikalia, paliwa i oleje. Materiał uzyskał zatwierdzenia UL Recognised i CSA. Do etykiet pasuje taśma barwiąca R4302, do taśmy ciągłej R4300 (seria R4300).',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-metallised-high-adhesion-matt-polyester-labels-cps-4372006',
  images: [
    '/images/products/brady/tht-53-486-3.png',
    '/images/products/brady/tht-37-486-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-53-486-3 z jasnoszarymi metalizowanymi etykietami poliestrowymi 50,8 × 12,7 mm',
    'Rolka Brady THT-37-486-10 z drobnymi metalizowanymi etykietami poliestrowymi 38,1 × 12,7 mm w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-486B' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,142 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, rozpuszczalniki i chemikalia, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 76,2 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4302 (etykiety), R4300 (taśma ciągła); do i7500: i75-R4302, i75-R4300' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...METALABEL_486.map(([pn, w, h, szt, rzedy]) => ({
      partNumber: pn,
      name: `Brady ${pn} — metalizowana etykieta poliestrowa B-486B ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-486',
      name: 'Brady THT-21-486 — metalizowana taśma ciągła poliestrowa B-486B 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20'), Rzędów: '1' },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety albo szerokość i długość taśmy ciągłej.\n\nWykrojone etykiety mają od 25,4 × 12,7 do 76,2 × 50,8 mm, a taśma ciągła 76,2 mm × 91,44 m.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 25,4 × 12,7 mm występują w układzie trzech rzędów albo jednego.',
  },
  faq: [
    { question: 'Na jakich powierzchniach trzyma etykieta B-486B?', answer: 'Klej kauczukowy jest bardzo mocny i trzyma na powierzchniach malowanych proszkowo, chropowatych, silnie fakturowanych oraz o niskiej energii powierzchniowej.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-486B?', answer: 'Do etykiet wykrojonych zaleca się R4302, a do taśmy ciągłej R4300. Do i7500 oznaczenia mają przedrostek i75-. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
    { question: 'Jaki zakres temperatur obejmuje materiał B-486B?', answer: 'Etykieta pracuje od −40 do 120 °C. Materiał ma grubość 0,142 mm i odpiera paliwa, oleje, rozpuszczalniki oraz ścieranie.' },
  ],
  applications: ['Etykiety na powierzchniach malowanych proszkowo', 'Ewidencja środków trwałych i kontrola zapasów', 'Oznaczanie sprzętu i komponentów'],
}

// ---------------------------------------------------------------------------
// WorkHorse B-8591, poliester na zewnątrz w czterech kolorach (cps-4324980)
// ---------------------------------------------------------------------------

const KOLORY_8591: Record<string, string> = { BK: 'Czarny', SL: 'Srebrny', WT: 'Biały', YL: 'Żółty' }
const KOLORY_8591_ZENSKIE: Record<string, string> = { BK: 'czarna', SL: 'srebrna', WT: 'biała', YL: 'żółta' }

// [rodzaj wykroju w PN, szerokość, wysokość, sztuk na rolce]
const FORMATY_8591: [string, string, string, string][] = [
  ['17-8591-3', '50.80', '25.40', '3000'],
  ['19-8591-1', '76.20', '50.80', '1000'],
  ['5-8591-10', '25.40', '12.70', '10000'],
  ['18-8591-3', '76.20', '25.40', '3000'],
  ['6-8591-10', '38.10', '19.05', '10000'],
]
const KOLORY_8591_KOLEJNOSC = ['BK', 'SL', 'WT', 'YL']

export const bradyTHTWorkhorse8591: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-8591-3-bk',
  slug: 'brady-tht-17-8591-3-bk',
  name: 'Poliestrowe etykiety odporne na warunki atmosferyczne Brady WorkHorse B-8591 na rolce 76 mm',
  seoTitle: 'Brady B-8591 — etykiety poliestrowe na zewnątrz, i6100, i7100',
  seoDescription: 'Etykiety poliestrowe Brady B-8591 do i6100, i7100 i i7500: UV, pogoda, od −70 do 180 °C, 4 kolory. PN: THT-17-8591-3-BK, THT-18-8591-3-SL, THT-6-8591-10-YL.',
  shortDescription: 'Brady B-8591 to błyszczące etykiety poliestrowe odporne na UV i pogodę, w czterech kolorach i pięciu formatach, 20 numerów katalogowych. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-8591 to poliester przeznaczony do pracy na zewnątrz. Błyszcząca folia znosi promieniowanie UV, pogodę, płyny i ścieranie, a klej akrylowy utrzymuje ją na podłożach gładkich, szorstkich i silnie fakturowanych, także tych o niskiej energii powierzchniowej. Zastosowania to kody kreskowe, urządzenia i komponenty, sieci telekomunikacyjne oraz oznaczanie obiektów.\n\nPięć formatów występuje w czterech kolorach: czarnym, srebrnym, białym i żółtym, co daje 20 numerów. Najdrobniejsza z nich (25,4 × 12,7 mm) liczy 10 000 sztuk na rolce, największa (76,2 × 50,8 mm) tysiąc. Format nie zmienia materiału ani kleju, więc kolor wybiera się niezależnie od rozmiaru.\n\nGrubość folii to 0,109 mm. Dolna granica temperatury wynosi −70 °C, a górna 180 °C. Do etykiet czarnych zaleca się taśmę barwiącą R4400-WT; w i7500 działa jej odmiana i75-R4400-WT.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-weather-resistant-polyester-outdoor-labels-cps-4324980',
  images: [
    '/images/products/brady/tht-17-8591-3-bk.png',
    '/images/products/brady/tht-18-8591-3-sl.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-17-8591-3-BK z czarnymi błyszczącymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady THT-18-8591-3-SL ze srebrnymi etykietami poliestrowymi 76,2 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-8591' },
    { name: 'Typ materiału', value: 'poliester odporny na warunki atmosferyczne' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,109 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 180 °C' },
    { name: 'Odporność', value: 'promieniowanie UV, warunki atmosferyczne, płyny, ścieranie' },
    { name: 'Kolor', value: 'czarny, srebrny, biały, żółty' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 / 38,1 × 19,05 / 50,8 × 25,4 / 76,2 × 25,4 / 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wymiaru' },
    { name: 'Zalecana taśma barwiąca', value: 'R4400-WT (etykiety czarne); do i7500: i75-R4400-WT' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: FORMATY_8591.flatMap(([kod, w, h, szt]) =>
    KOLORY_8591_KOLEJNOSC.map((kolor) => {
      const pn = `THT-${kod}-${kolor}`
      return {
        partNumber: pn,
        name: `Brady ${pn} — ${KOLORY_8591_ZENSKIE[kolor]} etykieta poliestrowa B-8591 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
        attributes: { Rozmiar: rozmiar(w, h, szt), Kolor: KOLORY_8591[kolor] },
        availability: 'unavailable' as const,
      }
    }),
  ),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety oraz liczba sztuk na rolce.\n\nPięć formatów ma od 1000 do 10 000 etykiet na rolce.',
    Kolor: 'Kolor poliestru.\n\nKażdy format jest dostępny jako czarny, srebrny, biały i żółty.',
  },
  faq: [
    { question: 'Czy etykiety B-8591 nadają się na zewnątrz?', answer: 'Tak. Materiał odpiera promieniowanie UV, wpływ pogody, płyny i ścieranie, a zakres jego pracy to od −70 do 180 °C.' },
    { question: 'W jakich kolorach i formatach są etykiety B-8591?', answer: 'Pięć formatów, od 25,4 × 12,7 do 76,2 × 50,8 mm, występuje w kolorach czarnym, srebrnym, białym i żółtym.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-8591?', answer: 'Do etykiet czarnych zaleca się R4400-WT. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie urządzeń i komponentów na zewnątrz', 'Kody kreskowe i kontrola zapasów', 'Identyfikacja obiektów i sieci telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-434A, srebrny błyszczący poliester metalizowany (cps-4392503 + pid-tht-21-434)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const METALABEL_434: [string, string, string, string][] = [
  ['THT-19-434-1', '76.20', '50.80', '1000'],
  ['THT-55-434-1', '101.60', '50.80', '1000'],
  ['030283', '76.20', '25.40', '3000'],
  ['THT-5-434-10', '25.40', '12.70', '10000'],
  ['THT-17-434-3', '50.80', '25.40', '3000'],
  ['THT-37-434-10', '38.10', '12.70', '10000'],
  ['THT-6-434-10', '38.10', '19.05', '10000'],
]

export const bradyTHTMetalabel434: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-434-1',
  slug: 'brady-tht-19-434-1',
  name: 'Srebrne błyszczące etykiety metalizowane Brady MetaLabel B-434A na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-434A — srebrny poliester, i6100, i7100, i7500',
  seoDescription: 'Srebrne etykiety poliestrowe Brady MetaLabel B-434A do i6100, i7100 i i7500: połysk, do 130 °C, ewidencja. PN: THT-19-434-1, THT-5-434-10, THT-21-434.',
  shortDescription: 'Brady MetaLabel B-434A to srebrny, błyszczący poliester metalizowany z klejem akrylowym, w siedmiu formatach wykrojonych i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'MetaLabel B-434A to srebrny poliester o błyszczącej, metalicznej powierzchni. Klej akrylowy, trwały, chwyta podłoża gładkie i chropowate. Etykiety znakują środki trwałe, ułatwiają ogólną identyfikację i kontrolę zapasów, a taśma ciągła służy także do oznaczania komponentów i sprzętu.\n\nWykrojonych formatów jest siedem. Etykiety o wysokości 12,7 mm mają po 10 000 sztuk na rolce, a te o wysokości 50,8 mm po 1000; największa mierzy 101,6 × 50,8 mm, najmniejsza 25,4 × 12,7 mm. Taśma ciągła THT-21-434 liczy 91,44 m przy szerokości 76,2 mm. Ona oraz etykieta THT-55-434-1 nie współpracują z drukarką i6100.\n\nFolia o grubości 0,102 mm pracuje między −70 a 130 °C. Odporność obejmuje ścieranie, wilgoć, promieniowanie UV i pogodę oraz paliwa, oleje, rozpuszczalniki i chemikalia. Zatwierdzenia obejmują UL Recognised oraz CSA. Wydruk wykonuje taśma barwiąca R6002 (seria R6000HF).',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-metallised-glossy-polyester-2-mil-adhesive-labels-cps-4392503',
  images: [
    '/images/products/brady/tht-19-434-1.png',
    '/images/products/brady/tht-5-434-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-19-434-1 ze srebrnymi błyszczącymi etykietami poliestrowymi 76,2 × 50,8 mm',
    'Rolka Brady THT-5-434-10 z drobnymi srebrnymi etykietami poliestrowymi 25,4 × 12,7 mm w kilku rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-434A' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć, UV, warunki atmosferyczne, paliwa i oleje, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 101,6 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'Numery THT-55-434-1 i THT-21-434 nie mają i6100 na liście zgodnych drukarek; pasują do i7100 i i7500. Pozostałe numery pasują do i6100, i7100 i i7500.' },
  ],
  variants: [
    ...METALABEL_434.map(([pn, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — srebrna etykieta metalizowana B-434A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt) },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-434',
      name: 'Brady THT-21-434 — srebrna taśma ciągła metalizowana B-434A 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20') },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 101,6 × 50,8 mm.',
  },
  faq: [
    { question: 'Do czego służą srebrne etykiety MetaLabel B-434A?', answer: 'Do ewidencji środków trwałych, ogólnej identyfikacji i kontroli zapasów. Taśma ciągła znakuje też komponenty i sprzęt.' },
    { question: 'Czy wszystkie numery B-434A pasują do każdej drukarki?', answer: 'Numery THT-55-434-1 i THT-21-434 pasują do [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Pozostałe drukuje także [Brady i6100](/produkt/brady-i6100).' },
    { question: 'Jaką taśmę barwiącą zamówić do B-434A?', answer: 'Zaleca się R6002 z serii R6000HF. Do i7500 oznaczenie to i75-R6002. Materiał pracuje od −70 do 130 °C.' },
  ],
  applications: ['Ewidencja środków trwałych', 'Ogólna identyfikacja i kontrola zapasów', 'Oznaczanie komponentów i sprzętu taśmą ciągłą'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-428, etykiety znamionowe i na płytki drukowane (cps-4367732 + pid-030152)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const METALABEL_428: [string, string, string, string][] = [
  ['THT-53-428-3', '50.80', '12.70', '3000'],
  ['THT-12-428-10', '12.70', '11.10', '10000'],
  ['THT-19-428-1', '76.20', '50.80', '1000'],
  ['THT-17-428-3', '50.80', '25.40', '3000'],
  ['THT-55-428-1', '101.60', '50.80', '1000'],
  ['THT-3-428-10', '25.40', '9.53', '10000'],
  ['THT-18-428-3', '76.20', '25.40', '3000'],
  ['THT-22-428-2', '31.75', '19.05', '2000'],
  ['THT-7-428-3', '69.85', '31.75', '3000'],
  ['THT-5-428-10', '25.40', '12.70', '10000'],
  ['THT-23-428-2', '50.80', '25.40', '2000'],
  ['THT-24-428-1', '69.85', '44.45', '1000'],
  ['030109', '38.10', '19.05', '10000'],
  ['030213', '38.10', '12.70', '10000'],
]

export const bradyTHTMetalabel428: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-428-3',
  slug: 'brady-tht-53-428-3',
  name: 'Metalizowane etykiety znamionowe i na płytki drukowane Brady MetaLabel B-428 na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-428 — etykiety znamionowe i PCB, i6100, i7100',
  seoDescription: 'Matowe etykiety metalizowane Brady MetaLabel B-428 do i6100, i7100 i i7500: tabliczki znamionowe, PCB. PN: THT-53-428-3, THT-19-428-1, THT-21-428.',
  shortDescription: 'Brady MetaLabel B-428 to matowy poliester metalizowany na tabliczki znamionowe i płytki drukowane, w 14 formatach wykrojonych i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'MetaLabel B-428 jest matowym poliestrem metalizowanym w jasnoszarym kolorze. Z takich etykiet powstają tabliczki znamionowe, oznaczenia płytek drukowanych i komponentów oraz opisy urządzeń telekomunikacyjnych. Trwały klej akrylowy dobrano do powierzchni gładkich, a materiał nie zawiera halogenów. Z technologią SMT etykieta nie współpracuje. Przy elementach THT stosuje się ją po zakończeniu procesu, na stronie górnej.\n\nRolka zawiera od 1000 do 10 000 etykiet, zależnie od formatu, a formatów jest czternaście: najmniejszy mierzy 12,7 × 11,1 mm, największy 101,6 × 50,8 mm. Ofertę uzupełnia taśma ciągła THT-21-428 (pas 76,2 mm, rolka 91,44 m), która znakuje także szafy, panele, kody kreskowe i instalacje elektryczne.\n\nEtykieta wytrzymuje autoklaw i zamrażarkę, kontakt z paliwami, olejami i rozpuszczalnikami oraz temperatury sięgające 120 °C na górze i −40 °C na dole. Atesty obejmują UL Recognised, AGA i CSA, a brak halogenów jest zgodny z DIN VDE 0472. Do wydruku zaleca się taśmę barwiącą R4300.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-metallised-matt-polyester-rating-plate-pcb-labels-cps-4367732',
  images: [
    '/images/products/brady/tht-22-428-2.png',
    '/images/products/brady/tht-12-428-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-22-428-2 z jasnoszarymi metalizowanymi etykietami znamionowymi 31,75 × 19,05 mm',
    'Rolka Brady THT-12-428-10 z drobnymi metalizowanymi etykietami 12,7 × 11,1 mm w kilku rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-428' },
    { name: 'Typ materiału', value: 'poliester metalizowany, bez halogenów' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'paliwa i oleje, rozpuszczalniki i chemikalia, wysoka i niska temperatura; autoklaw, zamrażarka' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 11,1 do 101,6 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 2000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, AGA, CSA (akceptacja), DIN VDE 0472 część 815 (bez halogenów)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (seria R4300, R7950); do i7500: i75-R4300' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...METALABEL_428.map(([pn, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — metalizowana etykieta znamionowa B-428 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt) },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-428',
      name: 'Brady THT-21-428 — metalizowana taśma ciągła B-428 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20') },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają od 12,7 × 11,1 do 101,6 × 50,8 mm.',
  },
  faq: [
    { question: 'Do czego służą etykiety MetaLabel B-428?', answer: 'Do tabliczek znamionowych, oznaczania płytek drukowanych i komponentów oraz urządzeń w sieciach telekomunikacyjnych. Taśma ciągła znakuje też szafy, panele i instalacje elektryczne.' },
    { question: 'Czy etykiety B-428 pasują do technologii SMT?', answer: 'Nie. Przy elementach przewlekanych THT dopuszcza się je od strony górnej, po zakończeniu procesu. W bardzo wysokiej temperaturze zaleca się wcześniejsze sprawdzenie materiału.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-428?', answer: 'Zaleca się R4300, a do i7500 oznaczenie i75-R4300. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Tabliczki znamionowe urządzeń', 'Oznaczanie płytek drukowanych i komponentów', 'Etykiety w telekomunikacji i na panelach'],
}

// ---------------------------------------------------------------------------
// WorkHorse B-8117, czarny matowy poliester (cps-4363516)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const WORKHORSE_8117: [string, string, string, string][] = [
  ['THT-17-8117-3', '50.80', '25.40', '3000'],
  ['THT-19-8117-1', '76.20', '50.80', '1000'],
  ['THT-5-8117-10', '25.40', '12.70', '10000'],
  ['THT-18-8117-3', '76.20', '25.40', '3000'],
  ['THT-6-8117-10', '38.10', '19.05', '10000'],
]

export const bradyTHTWorkhorse8117: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-8117-3',
  slug: 'brady-tht-17-8117-3',
  name: 'Matowe etykiety poliestrowe Brady WorkHorse B-8117 na rolce 76 mm',
  seoTitle: 'Brady B-8117 — matowe etykiety poliestrowe, i6100, i7100, i7500',
  seoDescription: 'Matowe etykiety poliestrowe Brady WorkHorse B-8117 do i6100, i7100 i i7500: autoklaw, od −80 do 120 °C. PN: THT-17-8117-3, THT-19-8117-1, THT-5-8117-10.',
  shortDescription: 'Brady WorkHorse B-8117 to matowe etykiety poliestrowe z klejem kauczukowym w pięciu formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-8117 to czarny, matowy poliester z trwałym klejem kauczukowym do powierzchni gładkich. Dobrze znosi płyny, więc nadaje się też na butelki, szalki i kolby laboratoryjne. Poza laboratorium służy do ewidencji środków trwałych i ogólnej identyfikacji. Na płytkach drukowanych można go stosować po zakończeniu procesu, od strony górnej przy elementach THT; do technologii SMT nie pasuje.\n\nW ofercie jest pięć formatów. Pięć formatów rozpiętych między 25,4 × 12,7 i 76,2 × 50,8 (wymiary w mm). Drobne etykiety zwijają się po 10 000 na rolkę, średnie po 3000, a największe po 1000.\n\nGrubość folii wynosi 0,0889 mm, a zakres pracy sięga od −80 do 120 °C. Materiał przechodzi sterylizację w autoklawie, mrożenie i kąpiel w gorącej wodzie. Odpiera ścieranie, paliwa i oleje, wilgoć, UV i pogodę. Zatwierdzenie to UL Recognised. Do wydruku zaleca się taśmę R6802-WT; w i7500 stosuje się odmianę i75-R6802-WT.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-matt-general-purpose-polyester-labels-cps-4363516',
  images: [
    '/images/products/brady/tht-17-8117-3.png',
    '/images/products/brady/tht-19-8117-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-17-8117-3 z czarnymi matowymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady THT-19-8117-1 z czarnymi matowymi etykietami poliestrowymi 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-8117' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0889 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, płyny, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka, kąpiel wodna 100 °C' },
    { name: 'Kolor', value: 'czarny' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 / 38,1 × 19,05 / 50,8 × 25,4 / 76,2 × 25,4 / 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wymiaru' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6802-WT (serie R4400W, R6800); do i7500: i75-R6802-WT' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: WORKHORSE_8117.map(([pn, w, h, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — czarna matowa etykieta poliestrowa B-8117 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: rozmiar(w, h, szt) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 76,2 × 50,8 mm.',
  },
  faq: [
    { question: 'Dlaczego do etykiet B-8117 zaleca się białą taśmę barwiącą?', answer: 'Etykieta ma czarny kolor, więc nadruk musi być jasny. Zaleca się taśmę R6802-WT, a do i7500 jej wersję i75-R6802-WT.' },
    { question: 'Czy etykiety B-8117 wytrzymują autoklaw i zamrażarkę?', answer: 'Tak. Materiał znosi autoklaw, zamrażarkę i kąpiel wodną 100 °C, a jego zakres pracy to od −80 do 120 °C.' },
    { question: 'Jakie drukarki obsługują etykiety B-8117?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Ewidencja środków trwałych i ogólna identyfikacja', 'Etykiety na butelki, szalki i kolby laboratoryjne', 'Oznaczanie płytek drukowanych przy elementach THT'],
}

// ---------------------------------------------------------------------------
// ToughBond B-483A, biały błyszczący poliester z klejem kauczukowym (cps-4372004 + pid-tht-21-483)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, rzędów]
const TOUGHBOND_483: [string, string, string, string, string][] = [
  ['THT-17-483-3', '50.80', '25.40', '3000', '1'],
  ['THT-19-483-1', '76.20', '50.80', '1000', '1'],
  ['THT-5-483-10', '25.40', '12.70', '10000', '3'],
  ['THT-59-483-10', '25.40', '12.70', '10000', '1'],
  ['THT-55-483-1', '101.60', '50.80', '1000', '1'],
  ['THT-37-483-10', '38.10', '12.70', '10000', '2'],
  ['THT-18-483-3', '76.20', '25.40', '3000', '1'],
  ['THT-7-483-3', '69.85', '31.75', '3000', '1'],
  ['THT-76-483-1', '101.60', '76.20', '1000', '1'],
]

export const bradyTHTToughBond483: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-483-3',
  slug: 'brady-tht-17-483-3',
  name: 'Białe etykiety poliestrowe Brady ToughBond B-483A z klejem kauczukowym na rolce 76 mm',
  seoTitle: 'Brady ToughBond B-483A — etykiety z klejem kauczukowym, i6100',
  seoDescription: 'Białe etykiety poliestrowe Brady ToughBond B-483A do i6100, i7100 i i7500: klej kauczukowy, do 120 °C. PN: THT-17-483-3, THT-19-483-1, THT-21-483.',
  shortDescription: 'Brady ToughBond B-483A to białe, błyszczące etykiety poliestrowe o bardzo wysokiej przyczepności, w 9 formatach i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Etykieta ToughBond B-483A powstaje z białego poliestru z połyskiem. Jej klej kauczukowy ma bardzo wysoką przyczepność i jest przeznaczony do powierzchni malowanych proszkowo. Klej trzyma także na podłożach szorstkich, silnie fakturowanych oraz na trudnych tworzywach. Etykiety trafiają na urządzenia i komponenty, instalacje elektryczne i telekomunikacyjne, a także na kody kreskowe.\n\nUkład w jednym albo w trzech rzędach dotyczy najmniejszego formatu, czyli 25,4 × 12,7 mm. Wykrojonych formatów jest dziewięć, a największy mierzy 101,6 × 76,2 mm. Do kompletu należy taśma ciągła THT-21-483 (rolka 91,44 m, szerokość 76,2 mm). Na rolce jest odpowiednio 10 000, 3000 albo 1000 etykiet, zależnie od wysokości.\n\nFolia grubości 0,102 mm zachowuje właściwości od −40 aż do 120 °C. Wytrzymuje ścieranie, chemikalia, korozję, wilgoć oraz UV, a także paliwa i oleje. UL Recognised i CSA to jej atesty. Do etykiet zaleca się taśmę R6000, a do taśmy ciągłej R6002.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-high-adhesion-glossy-polyester-rubber-adhesive-labels-cps-4372004',
  images: [
    '/images/products/brady/tht-5-483-10.png',
    '/images/products/brady/tht-17-483-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-5-483-10 z białymi etykietami poliestrowymi 25,4 × 12,7 mm w trzech rzędach',
    'Rolka Brady THT-17-483-3 z białymi błyszczącymi etykietami poliestrowymi 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-483A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy, o bardzo wysokiej przyczepności; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (etykiety), R6002 (taśma ciągła); do i7500: i75-R6000, i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...TOUGHBOND_483.map(([pn, w, h, szt, rzedy]) => ({
      partNumber: pn,
      name: `Brady ${pn} — biała etykieta poliestrowa B-483A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-483',
      name: 'Brady THT-21-483 — biała taśma ciągła poliestrowa B-483A 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20'), Rzędów: '1' },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 101,6 × 76,2 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nFormat 25,4 × 12,7 mm ma wersje w jednym i w trzech rzędach.',
  },
  faq: [
    { question: 'Na jakich podłożach trzyma etykieta ToughBond B-483A?', answer: 'Klej kauczukowy wiąże z powierzchniami gładkimi, chropowatymi, silnie fakturowanymi i o niskiej energii powierzchniowej oraz z lakierem proszkowym.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-483A?', answer: 'Do etykiet wykrojonych zaleca się R6000, a do taśmy ciągłej R6002. Do i7500 służą oznaczenia i75-R6000 i i75-R6002.' },
    { question: 'Jakie drukarki obsługują etykiety B-483A?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zakres pracy materiału to od −40 do 120 °C.' },
  ],
  applications: ['Oznaczanie urządzeń na powierzchniach malowanych proszkowo', 'Instalacje elektryczne i telekomunikacyjne', 'Kody kreskowe i ewidencja środków trwałych'],
}

// ---------------------------------------------------------------------------
// Print and Protect, poliester z laminatem (cps-4402025)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, materiał]
const PRINT_PROTECT: [string, string, string, string, string][] = [
  ['620471', '50.80', '25.40', '1000', 'Poliester z laminatem'],
  ['THTPNP-434-7564-1', '50.80', '25.40', '1000', 'Metalizowany z laminatem'],
  ['620470', '20.00', '30.00', '2000', 'Poliester z laminatem'],
  ['620472', '50.00', '75.00', '1000', 'Poliester z laminatem'],
  ['620475', '50.00', '75.00', '1000', 'Metalizowany z laminatem'],
]

export const bradyTHTPrintProtect: Product = {
  ...wspolneTHT,
  id: 'brady-620471',
  slug: 'brady-620471',
  name: 'Etykiety poliestrowe z laminatem Brady Print and Protect B-483A na rolce 76 mm',
  seoTitle: 'Brady Print and Protect — etykiety z laminatem, i6100, i7100',
  seoDescription: 'Etykiety poliestrowe z laminatem Brady Print and Protect do i6100, i7100 i i7500: ochrona nadruku, do 120 °C. PN: 620471, 620470, THTPNP-434-7564-1.',
  shortDescription: 'Brady Print and Protect to etykiety poliestrowe z laminatem chroniącym nadruk, białe i metalizowane, w pięciu numerach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'Print and Protect to połączenie etykiety poliestrowej B-483A z laminatem poliestrowym B-7552, który przykrywa nadruk. Całość odpiera ścieranie i rozpuszczalniki. Klej kauczukowy jest bardzo mocny i dobrany do powierzchni malowanych proszkowo. Materiał nie zawiera halogenów. Etykiety pasują do kodów kreskowych, oznaczania urządzeń i komponentów, instalacji elektrycznych oraz telekomunikacyjnych, a także do ewidencji.\n\nDostępnych jest pięć numerów. Trzy to biały poliester, dwa to poliester metalizowany. Formaty mają 20 × 30, 50,8 × 25,4 lub 50 × 75 mm, a rolka liczy od 1000 do 2000 sztuk.\n\nGrubość etykiety z laminatem to 0,175 mm, a przedział temperatur obejmuje −29 °C i 120 °C. Materiał odpiera ścieranie, rozpuszczalniki i chemikalia oraz zachowuje trwałość w warunkach zewnętrznych. Zaleca się taśmę barwiącą R6000 z serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-print-protect-labels-cps-4402025',
  images: [
    '/images/products/brady/thtpnp-434-7564-1.png',
    '/images/products/brady/620471.png',
  ],
  imageDescriptions: [
    'Rolka Brady THTPNP-434-7564-1 z metalizowanymi etykietami 50,8 × 25,4 mm pokrytymi laminatem',
    'Rolka Brady 620471 z białymi etykietami poliestrowymi z laminatem 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone z laminatem na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-483A z laminatem poliestrowym B-7552' },
    { name: 'Typ materiału', value: 'poliester z laminatem poliestrowym; dwie wersje z poliestru metalizowanego; bez halogenów' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; do powierzchni malowanych proszkowo' },
    { name: 'Grubość', value: '0,175 mm' },
    { name: 'Temperatura pracy', value: 'od −29 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki i chemikalia, warunki zewnętrzne' },
    { name: 'Wymiary etykiety', value: '20 × 30 / 50,8 × 25,4 / 50 × 75 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 2000, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (serie R4900, R6000HF)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: PRINT_PROTECT.map(([pn, w, h, szt, mat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta Print and Protect ${wym(w, h)} mm, ${sztuk(szt)} szt., ${mat.toLowerCase()}`,
    attributes: { Rozmiar: rozmiar(w, h, szt), Materiał: mat },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce.\n\nEtykiety mają 20 × 30, 50,8 × 25,4 albo 50 × 75 mm.',
    Materiał: 'Rodzaj poliestru pod laminatem.\n\nTrzy numery to biały poliester, a dwa to poliester metalizowany. Wszystkie mają laminat poliestrowy.',
  },
  faq: [
    { question: 'Do czego służy laminat w etykietach Print and Protect?', answer: 'Laminat poliestrowy B-7552 przykrywa nadruk i chroni go przed ścieraniem, rozpuszczalnikami i chemikaliami.' },
    { question: 'Czym różnią się numery 620471 i THTPNP-434-7564-1?', answer: 'Oba mają format 50,8 × 25,4 mm i 1000 sztuk na rolce. Pierwszy jest z białego poliestru, drugi z poliestru metalizowanego.' },
    { question: 'Jakie drukarki obsługują etykiety Print and Protect?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Zaleca się taśmę barwiącą R6000.' },
  ],
  applications: ['Etykiety z chronionym nadrukiem na urządzeniach', 'Instalacje elektryczne i telekomunikacyjne', 'Kody kreskowe i ewidencja środków trwałych'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-413, satynowy srebrny poliester z klejem akrylowym (cps-4372008 + cps-4371786)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const METALABEL_413: [string, string, string, string][] = [
  ['THT-53-413-3', '50.80', '12.70', '3000'],
  ['THT-12-413-10', '12.70', '11.10', '10000'],
  ['THT-19-413-1', '76.20', '50.80', '1000'],
  ['THT-17-413-3', '50.80', '25.40', '3000'],
  ['THT-1-413-10', '19.05', '6.35', '10000'],
  ['THT-3-413-10', '25.40', '9.53', '10000'],
  ['THT-18-413-3', '76.20', '25.40', '3000'],
  ['THT-55-413-1', '101.60', '50.80', '1000'],
  ['THT-7-413-3', '69.85', '31.75', '3000'],
  ['THT-5-413-10', '25.40', '12.70', '10000'],
  ['THT-37-413-10', '38.10', '12.70', '10000'],
  ['THT-6-413-10', '38.10', '19.05', '10000'],
]
// [PN, szerokość taśmy ciągłej]
const TASMA_413: [string, string][] = [
  ['THT-106-413', '50.80'],
  ['THT-21-413', '76.20'],
  ['THT-107-413', '101.60'],
]

export const bradyTHTMetalabel413: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-413-3',
  slug: 'brady-tht-53-413-3',
  name: 'Satynowe srebrne etykiety poliestrowe Brady MetaLabel B-413 na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-413 — satynowy srebrny poliester, i6100, i7100',
  seoDescription: 'Satynowe srebrne etykiety Brady MetaLabel B-413 do i6100, i7100 i i7500: klej akrylowy, do 110 °C, taśma ciągła. PN: THT-53-413-3, THT-19-413-1, THT-21-413.',
  shortDescription: 'Brady MetaLabel B-413 to satynowy, srebrny poliester z klejem akrylowym, w 12 formatach wykrojonych i trzech szerokościach taśmy ciągłej. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'MetaLabel B-413 to poliester o satynowym wykończeniu i metalicznym wyglądzie, w jasnoszarym kolorze. Do gładkich podłoży przeznaczono tu trwały klej akrylowy; polietylen i polipropylen nie są zalecane. Etykiety oznaczają komponenty i sprzęt oraz służą jako kody kreskowe i ogólna identyfikacja. Taśma ciągła przydaje się także do kontroli zapasów.\n\nWśród dwunastu formatów wykrojonych najdrobniejszy jest szeroki na 19,05 mm i wysoki na 6,35 mm, najobszerniejszy ma wymiar 101,6 na 50,8 mm. Rolki liczą 10 000, 3000 lub 1000 sztuk, w zależności od wysokości. Taśmy ciągłe mają trzy warianty szerokości (50,8 / 76,2 / 101,6 mm) i po 91,44 m na rolce.\n\nGrubość materiału to 0,086 mm, a jego zakres pracy wynosi od −70 do 110 °C. Chroni przed ścieraniem, chemikaliami, korozją i wilgocią, wytrzymuje też kontakt z paliwami i olejami. Zaleca się taśmę R6000 do etykiet oraz R6007 do taśmy ciągłej. Znaki jakości to UL Recognised i cUL.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-satin-silver-polyester-acrylic-adhesive-labels-cps-4372008',
  images: [
    '/images/products/brady/tht-1-413-10.png',
    '/images/products/brady/tht-53-413-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1-413-10 ze srebrnymi satynowymi etykietami 19,05 × 6,35 mm w kilku rzędach',
    'Rolka Brady THT-53-413-3 z jasnoszarymi satynowymi etykietami poliestrowymi 50,8 × 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-413' },
    { name: 'Typ materiału', value: 'poliester, wygląd metaliczny' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, nie do polietylenu i polipropylenu' },
    { name: 'Grubość', value: '0,086 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, paliwa i oleje, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'od 19,05 × 6,35 do 101,6 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '50,8 / 76,2 / 101,6 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (etykiety), R6007 (taśma ciągła); do i7500: i75-R6000, i75-R6007' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...METALABEL_413.map(([pn, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — satynowa etykieta poliestrowa B-413 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt) },
      availability: 'unavailable' as const,
    })),
    ...TASMA_413.map(([pn, szer]) => ({
      partNumber: pn,
      name: `Brady ${pn} — satynowa taśma ciągła poliestrowa B-413 ${mm(szer)} mm × 91,44 m`,
      attributes: { Rozmiar: ciagla(szer) },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 19,05 × 6,35 mm, a taśma ciągła do 101,6 mm szerokości.',
  },
  faq: [
    { question: 'Na jakich powierzchniach nie należy stosować B-413?', answer: 'Materiał nie jest zalecany do podłoży o niskiej energii powierzchniowej, takich jak polietylen i polipropylen. Klej akrylowy jest przeznaczony do powierzchni gładkich.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-413?', answer: 'Do etykiet wykrojonych zaleca się R6000, a do taśmy ciągłej R6007. Do i7500 oznaczenia mają przedrostek i75-.' },
    { question: 'Jakie drukarki obsługują etykiety B-413?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie komponentów i sprzętu', 'Kody kreskowe i ogólna identyfikacja', 'Kontrola zapasów na taśmie ciągłej'],
}

// ---------------------------------------------------------------------------
// ToughBond B-422, biały poliester z klejem akrylowym (cps-4372001); THT-36-422-10 bez i6100
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, rzędów]
const TOUGHBOND_422: [string, string, string, string, string][] = [
  ['THT-36-422-10', '12.70', '5.08', '10000', '5'],
  ['THT-17-422-3', '50.80', '25.40', '3000', '1'],
  ['THT-19-422-1', '76.20', '50.80', '1000', '1'],
  ['THT-5-422-10', '25.40', '12.70', '10000', '3'],
  ['THT-18-422-3', '76.20', '25.40', '3000', '1'],
  ['THT-102-422-10', '38.10', '9.53', '10000', '1'],
  ['THT-147-422-10', '38.10', '9.53', '10000', '2'],
  ['THT-7-422-3', '69.85', '31.75', '3000', '1'],
  ['THT-76-422-1', '101.60', '76.20', '1000', '1'],
]

export const bradyTHTToughBond422: Product = {
  ...wspolneTHT,
  id: 'brady-tht-36-422-10',
  slug: 'brady-tht-36-422-10',
  name: 'Białe etykiety poliestrowe Brady ToughBond B-422 z klejem akrylowym na rolce 76 mm',
  seoTitle: 'Brady ToughBond B-422 — etykiety z poliestru, i6100, i7100',
  seoDescription: 'Białe etykiety poliestrowe Brady ToughBond B-422 do i6100, i7100 i i7500: mocny klej akrylowy, bez halogenów. PN: THT-36-422-10, THT-17-422-3, THT-76-422-1.',
  shortDescription: 'Brady ToughBond B-422 to białe, błyszczące etykiety poliestrowe bez halogenów, z mocnym klejem akrylowym, w 9 numerach katalogowych. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'ToughBond B-422 to biały, błyszczący poliester bez halogenów, z mocnym klejem akrylowym. Klej łączy się z powierzchniami gładkimi, chropowatymi i fakturowanymi. Zastosowania obejmują kody kreskowe, środki trwałe, komponenty i sprzęt, a także sieci telekomunikacyjne. Przy elementach THT dopuszczalna jest górna strona płytki; technologia SMT odpada.\n\nDziewięć numerów obejmuje formaty od 12,7 × 5,08 do 101,6 × 76,2 mm. Najmniejsze etykiety leżą w pięciu rzędach, a duże w jednym. Rolka mieści 10 000, 3000 lub 1000 etykiet, zależnie od wysokości.\n\nGrubość folii wynosi 0,102 mm, a temperatura pracy kończy się na 100 °C u góry i −40 °C u dołu. Etykiety wytrzymują ścieranie, paliwa, oleje, rozpuszczalniki, korozję i wilgoć, a UV i pogoda im nie szkodzą. Atesty to UL Recognised oraz CSA. Zalecana jest taśma R6002 z serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-high-adhesion-glossy-polyester-acrylic-adhesive-labels-cps-4372001',
  images: [
    '/images/products/brady/tht-5-422-10.png',
    '/images/products/brady/tht-102-422-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-5-422-10 z białymi etykietami poliestrowymi 25,4 × 12,7 mm w trzech rzędach',
    'Wąska rolka Brady THT-102-422-10 z białymi etykietami poliestrowymi 38,1 × 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-422' },
    { name: 'Typ materiału', value: 'poliester, bez halogenów' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych i fakturowanych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, rozpuszczalniki i chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 5,08 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'i6100: nie pasuje numer THT-36-422-10; pasuje do i7100 i i7500. Pozostałe numery pasują do i6100, i7100 i i7500.' },
  ],
  variants: TOUGHBOND_422.map(([pn, w, h, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa B-422 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 12,7 × 5,08 mm, a największa 101,6 × 76,2 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 5,08 mm leżą w pięciu rzędach, a duże formaty w jednym.',
  },
  faq: [
    { question: 'Do czego służą etykiety ToughBond B-422?', answer: 'Do ewidencji środków trwałych, kodów kreskowych, oznaczania komponentów i sprzętu oraz sieci telekomunikacyjnych. Przy elementach THT dopuszcza się je od strony górnej płytki.' },
    { question: 'Jaki zakres temperatur obejmuje B-422?', answer: 'Etykieta pracuje od −40 do 100 °C. Materiał odpiera ścieranie, paliwa, oleje, rozpuszczalniki i promieniowanie UV.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-422?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 oznaczenie i75-R6002. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Numer THT-36-422-10 nie pasuje do i6100.' },
  ],
  applications: ['Ewidencja środków trwałych i kody kreskowe', 'Oznaczanie komponentów i sprzętu', 'Etykiety w sieciach telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-435A, srebrny błyszczący poliester metalizowany (cps-4372488); THT-12-435-10 i THT-1-435-10 bez i6100
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, rzędów]
const METALABEL_435: [string, string, string, string, string][] = [
  ['THT-12-435-10', '12.70', '11.10', '10000', '5'],
  ['THT-19-435-1', '76.20', '50.80', '1000', '1'],
  ['THT-55-435-1', '101.60', '50.80', '1000', '1'],
  ['THT-1-435-10', '19.05', '6.35', '10000', '4'],
  ['THT-5-435-10', '25.40', '12.70', '10000', '3'],
  ['THT-18-435-3', '76.20', '25.40', '3000', '1'],
]

export const bradyTHTMetalabel435: Product = {
  ...wspolneTHT,
  id: 'brady-tht-12-435-10',
  slug: 'brady-tht-12-435-10',
  name: 'Srebrne metalizowane etykiety znamionowe Brady MetaLabel B-435A na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-435A — etykiety znamionowe, i6100, i7100',
  seoDescription: 'Srebrne etykiety znamionowe Brady MetaLabel B-435A do i6100, i7100 i i7500: odporne na rozpuszczalniki. PN: THT-12-435-10, THT-19-435-1, THT-5-435-10.',
  shortDescription: 'Brady MetaLabel B-435A to srebrne, błyszczące etykiety znamionowe z poliestru metalizowanego, w 6 formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'MetaLabel B-435A to srebrny poliester metalizowany, błyszczący i cienki, z trwałym klejem akrylowym. Wyróżnia go odporność na rozpuszczalniki. Klej wiąże z podłożami gładkimi i chropowatymi. Etykiety pełnią rolę tabliczek znamionowych, oznaczają płytki drukowane i komponenty, ewidencjonują środki trwałe i identyfikują ogólnie. Przy elementach THT mogą leżeć na stronie górnej; technologia SMT je wyklucza.\n\nSześć formatów: 12,7 × 11,1; 19,05 × 6,35; 25,4 × 12,7; 76,2 × 25,4; 76,2 × 50,8; 101,6 × 50,8 mm. Rolka z najmniejszymi zawiera 10 000 sztuk, z największymi 1000.\n\nFolia ma tylko 0,0762 mm grubości. Zakres temperatur sięga od −70 do 130 °C, a materiał odpiera ścieranie, wilgoć, UV, pogodę i chemikalia oraz paliwa z olejami. UL Recognised i CSA to jego atesty. Dla wydruku przewidziano taśmę barwiącą R6002, należącą do serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-metallised-glossy-polyester-rating-plate-labels-cps-4372488',
  images: [
    '/images/products/brady/tht-1-435-10.png',
    '/images/products/brady/tht-12-435-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-1-435-10 z drobnymi srebrnymi etykietami 19,05 × 6,35 mm w czterech rzędach',
    'Rolka Brady THT-12-435-10 ze srebrnymi etykietami znamionowymi 12,7 × 11,1 mm w pięciu rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-435A' },
    { name: 'Typ materiału', value: 'poliester metalizowany' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'rozpuszczalniki i chemikalia, ścieranie, wilgoć, UV, warunki atmosferyczne, paliwa i oleje' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: '12,7 × 11,1 / 19,05 × 6,35 / 25,4 × 12,7 / 76,2 × 25,4 / 76,2 × 50,8 / 101,6 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wymiaru' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'i6100: nie pasują numery THT-12-435-10 i THT-1-435-10; pasują do i7100 i i7500. Pozostałe numery pasują do i6100, i7100 i i7500.' },
  ],
  variants: METALABEL_435.map(([pn, w, h, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — srebrna etykieta metalizowana B-435A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 19,05 × 6,35 mm, a największa 101,6 × 50,8 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 11,1 mm leżą w pięciu rzędach, a 19,05 × 6,35 mm w czterech.',
  },
  faq: [
    { question: 'W czym B-435A wyróżnia się wśród etykiet metalizowanych?', answer: 'Materiał wyróżnia odporność na rozpuszczalniki. Folia ma tylko 0,0762 mm grubości i pracuje od −70 do 130 °C.' },
    { question: 'Czy etykiety B-435A nadają się na płytki drukowane?', answer: 'Dopuszcza się je przy elementach przewlekanych THT, od strony górnej, po zakończeniu procesu. Do technologii SMT nie nadają się.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-435A?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 oznaczenie i75-R6002. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500). Numery THT-12-435-10 i THT-1-435-10 nie pasują do i6100.' },
  ],
  applications: ['Tabliczki znamionowe urządzeń', 'Oznaczanie płytek drukowanych i komponentów', 'Ewidencja środków trwałych'],
}

// ---------------------------------------------------------------------------
// ToughBond B-489A, ultramocny matowy poliester (cps-4372007 + pid-tht-21-489)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce, rzędów]
const TOUGHBOND_489: [string, string, string, string, string][] = [
  ['THT-19-489-1', '76.20', '50.80', '1000', '1'],
  ['THT-59-489-10', '25.40', '12.70', '10000', '1'],
  ['THT-5-489-10', '25.40', '12.70', '10000', '3'],
  ['THT-55-489-1', '101.60', '50.80', '1000', '1'],
  ['THT-37-489-10', '38.10', '12.70', '10000', '2'],
  ['THT-17-489-3', '50.80', '25.40', '3000', '1'],
  ['THT-7-489-3', '69.85', '31.75', '3000', '1'],
  ['THT-18-489-3', '76.20', '25.40', '3000', '1'],
  ['THT-76-489-1', '101.60', '76.20', '1000', '1'],
]

export const bradyTHTToughBond489: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-489-1',
  slug: 'brady-tht-19-489-1',
  name: 'Białe matowe etykiety poliestrowe Brady ToughBond B-489A o bardzo mocnym kleju na rolce 76 mm',
  seoTitle: 'Brady ToughBond B-489A — matowy poliester, i6100, i7100, i7500',
  seoDescription: 'Białe matowe etykiety poliestrowe Brady ToughBond B-489A do i6100, i7100 i i7500: bardzo mocny klej, do 120 °C. PN: THT-19-489-1, THT-37-489-10, THT-21-489.',
  shortDescription: 'Brady ToughBond B-489A to białe, matowe etykiety poliestrowe z ultramocnym klejem kauczukowym, w 9 formatach i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-489A to matowy poliester w kolorze białym, z kauczukowym klejem o ultramocnej przyczepności. Folia ma 0,1295 mm. Klej trzyma na lakierze proszkowym, na podłożach gładkich i chropowatych oraz na tworzywach o niskiej energii powierzchniowej. Etykiety trafiają na kody kreskowe, sprzęt, komponenty, instalacje elektryczne i telekomunikacyjne, do ewidencji środków trwałych i kontroli zapasów.\n\nDziewięć formatów wykrojonych liczy kolejno rozmiary, od najmniejszego 25,4 × 12,7 mm do największego 101,6 × 76,2 mm. Dla formatu 25,4 × 12,7 mm przewidziano układ w jednym lub w trzech rzędach. Dołącza do nich THT-21-489: taśma ciągła, której szerokość wynosi 76,2 mm, a długość 91,44 m.\n\nMateriał wytrzymuje temperatury pomiędzy −40 i 120 °C. Jest odporny na ścieranie, rozpuszczalniki, chemikalia, paliwa, oleje, korozję, wilgoć, UV i pogodę. Atesty: UL Recognised, CSA. Taśma barwiąca R4300 (serie R4300 i R7950) jest zalecana do wydruku.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-ultra-aggressive-matt-polyester-general-identification-labels-cps-4372007',
  images: [
    '/images/products/brady/tht-19-489-1.png',
    '/images/products/brady/tht-37-489-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-19-489-1 z białymi matowymi etykietami poliestrowymi 76,2 × 50,8 mm',
    'Rolka Brady THT-37-489-10 z białymi matowymi etykietami poliestrowymi 38,1 × 12,7 mm w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-489A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy, ultramocny; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,1295 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, rozpuszczalniki i chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300 (seria R4300, R7950); do i7500: i75-R4300' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...TOUGHBOND_489.map(([pn, w, h, szt, rzedy]) => ({
      partNumber: pn,
      name: `Brady ${pn} — biała matowa etykieta poliestrowa B-489A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt), Rzędów: rzedy },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-489',
      name: 'Brady THT-21-489 — biała matowa taśma ciągła poliestrowa B-489A 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20'), Rzędów: '1' },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 101,6 × 76,2 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nFormat 25,4 × 12,7 mm ma wersje w jednym i w trzech rzędach.',
  },
  faq: [
    { question: 'Czym wyróżnia się B-489A?', answer: 'Ma matową powierzchnię, grubość 0,1295 mm i ultramocny klej kauczukowy. Trzyma także na lakierze proszkowym i tworzywach o niskiej energii powierzchniowej.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-489A?', answer: 'Zaleca się R4300, a do i7500 oznaczenie i75-R4300. Do etykiet pasują też serie R4300 i R7950.' },
    { question: 'Jakie drukarki obsługują etykiety B-489A?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Etykiety na lakierze proszkowym i tworzywach trudnych do oklejania', 'Instalacje elektryczne i telekomunikacyjne', 'Kody kreskowe i kontrola zapasów'],
}

// ---------------------------------------------------------------------------
// WorkHorse B-430, przezroczysty poliester (cps-4364288 + pid-tht-21-430)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]; w danych kolumna wysokości poprzedza kolumnę szerokości
const WORKHORSE_430: [string, string, string, string][] = [
  ['THTTL-5-430', '39.00', '5.08', '1000'],
  ['THTTL-6-430', '49.00', '11.10', '1000'],
  ['THTTL-4-430', '37.00', '21.00', '2000'],
  ['THT-19-430-1', '76.20', '50.80', '1000'],
  ['THT-17-430-3', '50.80', '25.40', '3000'],
  ['THTTL-1-430', '11.00', '74.00', '5000'],
  ['THT-39-430-10', '25.40', '12.70', '10000'],
  ['THT-18-430-3', '76.20', '25.40', '3000'],
  ['THTTL-3-430', '21.00', '129.00', '3000'],
]

export const bradyTHTWorkhorse430: Product = {
  ...wspolneTHT,
  id: 'brady-tht-17-430-3',
  slug: 'brady-tht-17-430-3',
  name: 'Przezroczyste etykiety poliestrowe Brady WorkHorse B-430 na rolce 76 mm',
  seoTitle: 'Brady WorkHorse B-430 — przezroczysty poliester, i6100, i7100',
  seoDescription: 'Przezroczyste etykiety poliestrowe Brady WorkHorse B-430 do i6100, i7100 i i7500: autoklaw, od −70 do 100 °C. PN: THT-17-430-3, THT-18-430-3, THT-21-430.',
  shortDescription: 'Brady WorkHorse B-430 to przezroczysty, błyszczący poliester z mocnym klejem akrylowym, w 9 formatach wykrojonych i jako taśma ciągła. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'B-430 to przezroczysty, optycznie czysty poliester z połyskiem i odpornością na autoklaw. Trwały klej akrylowy wiąże z gładkimi podłożami. Przez etykietę widać to, co jest pod nią, a to przydaje się przy opisach znamionowych, płytkach drukowanych i komponentach. Materiał służy też do kodów kreskowych, instalacji elektrycznych i sieci telekomunikacyjnych oraz butelki, szalki i kolby w laboratorium.\n\nDziewięć formatów wykrojonych ma na rolce od 1000 aż do 10 000 sztuk, zależnie od kształtu. Są wśród nich popularne rozmiary, jak 76,2 × 50,8 mm oraz 50,8 × 25,4 mm, a obok nich kształty nietypowe: 11 × 74 mm i 21 × 129 mm. THT-21-430 jest taśmą ciągłą; rolka ma 91,44 m, a pas 76,2 mm szerokości.\n\nFolia, gruba na 0,076 mm, pracuje od −70 do 100 °C i znosi autoklaw, zamrażarkę oraz kąpiel wodną 100 °C. Ma zatwierdzenia UL Recognised oraz CSA. Do taśmy ciągłej zaleca się taśmę barwiącą R6002, a do etykiet wykrojonych serię R6000HF.',
  sameAs: 'https://www.brady.eu/labels/harsh-environment-multi-purpose-clear-polyester-labels-for-76-mm-core-printers-cps-4364288',
  images: [
    '/images/products/brady/tht-17-430-3.png',
    '/images/products/brady/tht-18-430-3.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-17-430-3 z przezroczystymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady THT-18-430-3 z przezroczystymi etykietami poliestrowymi 76,2 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-430' },
    { name: 'Typ materiału', value: 'poliester optycznie przezroczysty, odporny na autoklaw' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka, kąpiel wodna 100 °C' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary etykiety', value: 'od 25,4 × 12,7 do 76,2 × 50,8 mm oraz formaty 39 × 5,08, 49 × 11,1, 37 × 21, 11 × 74 i 21 × 129 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 2000 / 3000 / 5000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '76,2 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (taśma ciągła); etykiety wykrojone: seria R6000HF; do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...WORKHORSE_430.map(([pn, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — przezroczysta etykieta poliestrowa B-430 ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt) },
      availability: 'unavailable' as const,
    })),
    {
      partNumber: 'THT-21-430',
      name: 'Brady THT-21-430 — przezroczysta taśma ciągła poliestrowa B-430 76,2 mm × 91,44 m',
      attributes: { Rozmiar: ciagla('76.20') },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nPrzy numerach THTTL etykiety mają nietypowe proporcje, np. 11 × 74 mm.',
  },
  faq: [
    { question: 'Do czego służą przezroczyste etykiety B-430?', answer: 'Do oznaczania tabliczek znamionowych, płytek drukowanych i komponentów tak, by opisy pod etykietą pozostały widoczne. Opisano go także do butelek, szalek i kolb laboratoryjnych.' },
    { question: 'Czy etykiety B-430 wytrzymują autoklaw?', answer: 'Tak. Materiał znosi autoklaw, zamrażarkę i kąpiel wodną 100 °C, a zakres jego pracy to od −70 do 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-430?', answer: 'Do taśmy ciągłej zaleca się R6002, a do etykiet wykrojonych serię R6000HF. Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie tabliczek i płytek bez zasłaniania opisów', 'Etykiety na butelki, szalki i kolby laboratoryjne', 'Kody kreskowe i instalacje elektryczne'],
}

// ---------------------------------------------------------------------------
// MetaLabel B-480A, satynowy srebrny poliester z klejem kauczukowym (cps-4372002 + cps-4372003)
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const METALABEL_480: [string, string, string, string][] = [
  ['THT-53-480-3', '50.80', '12.70', '3000'],
  ['THT-19-480-1', '76.20', '50.80', '1000'],
  ['THT-17-480-3', '50.80', '25.40', '3000'],
  ['THT-55-480-1', '101.60', '50.80', '1000'],
  ['THT-1-480-10', '19.05', '6.35', '10000'],
  ['THT-18-480-3', '76.20', '25.40', '3000'],
  ['THT-3-480-10', '25.40', '9.53', '10000'],
  ['THT-7-480-3', '69.85', '31.75', '3000'],
  ['THT-5-480-10', '25.40', '12.70', '10000'],
  ['THT-37-480-10', '38.10', '12.70', '10000'],
  ['THT-6-480-10', '38.10', '19.05', '10000'],
]
// [PN, szerokość taśmy ciągłej]
const TASMA_480: [string, string][] = [
  ['THT-106-480', '50.80'],
  ['THT-21-480', '76.20'],
  ['THT-107-480CA', '101.60'],
]

export const bradyTHTMetalabel480: Product = {
  ...wspolneTHT,
  id: 'brady-tht-53-480-3',
  slug: 'brady-tht-53-480-3',
  name: 'Satynowe srebrne etykiety poliestrowe z klejem kauczukowym Brady MetaLabel B-480A na rolce 76 mm',
  seoTitle: 'Brady MetaLabel B-480A — satynowy poliester, i6100, i7100, i7500',
  seoDescription: 'Satynowe srebrne etykiety Brady MetaLabel B-480A do i6100, i7100 i i7500: klej kauczukowy, lakier proszkowy. PN: THT-53-480-3, THT-19-480-1, THT-21-480.',
  shortDescription: 'Brady MetaLabel B-480A to satynowy, srebrny poliester z bardzo mocnym klejem kauczukowym, w 11 formatach wykrojonych i trzech szerokościach taśmy ciągłej. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'MetaLabel B-480A to satynowa folia poliestrowa o metalicznym wyglądzie i jasnoszarym kolorze, z bardzo mocnym klejem kauczukowym. Klej jest dobrany do podłoży gładkich, a całość przeznaczona do powierzchni malowanych proszkowo. Etykiety znakują komponenty i sprzęt oraz służą do ogólnej identyfikacji. Taśma ciągła obsługuje także kody kreskowe i kontrolę zapasów.\n\nJedenaście formatów wykrojonych waha się od etykiety o wymiarach 19,05 × 6,35 mm po etykietę 101,6 × 50,8 mm. W zależności od wysokości na rolce mieści się 1000, 3000 albo 10 000 etykiet. Taśma ciągła dostępna jest w trzech wariantach: 50,8; 76,2 oraz 101,6 mm, a rolka liczy 91,44 m.\n\nFolia ma 0,112 mm grubości. Użyteczny przedział temperatur obejmuje −70 °C i 110 °C. Materiał znosi ścieranie, chemikalia, korozję, wilgoć i pogodę oraz paliwa i oleje. Zatwierdzenia: UL Recognised i cUL. Zalecana jest taśma barwiąca R6000, w i7500 i75-R6000.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-satin-silver-polyester-rubber-adhesive-labels-cps-4372002',
  images: [
    '/images/products/brady/tht-53-480-3.png',
    '/images/products/brady/tht-37-480-10.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-53-480-3 z jasnoszarymi satynowymi etykietami poliestrowymi 50,8 × 12,7 mm',
    'Rolka Brady THT-37-480-10 z satynowymi etykietami poliestrowymi 38,1 × 12,7 mm w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone albo taśma ciągła na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'MetaLabel B-480A' },
    { name: 'Typ materiału', value: 'poliester, wygląd metaliczny' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, warunki atmosferyczne, paliwa i oleje' },
    { name: 'Kolor', value: 'jasnoszary' },
    { name: 'Wymiary etykiety', value: 'od 19,05 × 6,35 do 101,6 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wersji' },
    { name: 'Szerokość i długość taśmy ciągłej', value: '50,8 / 76,2 / 101,6 mm × 91,44 m' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 (seria R6000HF); do i7500: i75-R6000' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
  ],
  variants: [
    ...METALABEL_480.map(([pn, w, h, szt]) => ({
      partNumber: pn,
      name: `Brady ${pn} — satynowa etykieta poliestrowa B-480A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
      attributes: { Rozmiar: rozmiar(w, h, szt) },
      availability: 'unavailable' as const,
    })),
    ...TASMA_480.map(([pn, szer]) => ({
      partNumber: pn,
      name: `Brady ${pn} — satynowa taśma ciągła poliestrowa B-480A ${mm(szer)} mm × 91,44 m`,
      attributes: { Rozmiar: ciagla(szer) },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 19,05 × 6,35 mm, a taśma ciągła do 101,6 mm szerokości.',
  },
  faq: [
    { question: 'Czym B-480A różni się od B-413?', answer: 'B-480A ma klej kauczukowy i grubość 0,112 mm, a B-413 klej akrylowy i grubość 0,086 mm. Oba materiały są satynowe i srebrne, a zakres pracy wynosi od −70 do 110 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do B-480A?', answer: 'Zaleca się R6000 z serii R6000HF, a do i7500 oznaczenie i75-R6000.' },
    { question: 'Jakie drukarki obsługują etykiety B-480A?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Oznaczanie komponentów i sprzętu', 'Ogólna identyfikacja i kody kreskowe', 'Kontrola zapasów na taśmie ciągłej'],
}

// ---------------------------------------------------------------------------
// ToughBond B-432, przezroczysty poliester, pojedynczy PN (pid-tht-19-432-1)
// ---------------------------------------------------------------------------

export const bradyTHTToughBond432: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-432-1',
  slug: 'brady-tht-19-432-1',
  name: 'Przezroczyste etykiety poliestrowe Brady ToughBond B-432 76,2 × 50,8 mm na rolce 76 mm',
  seoTitle: 'Brady ToughBond B-432 — przezroczyste etykiety, i6100, i7100',
  seoDescription: 'Przezroczyste etykiety poliestrowe Brady ToughBond B-432 do i6100, i7100 i i7500: kody kreskowe, autoklaw, lakier proszkowy. PN: THT-19-432-1.',
  shortDescription: 'Brady THT-19-432-1 to przezroczyste etykiety poliestrowe 76,2 × 50,8 mm z mocnym klejem akrylowym, 1000 sztuk na rolce. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'ToughBond B-432 to przezroczysty, błyszczący poliester z mocnym klejem akrylowym. Klej trzyma na powierzchniach gładkich i chropowatych, także malowanych proszkowo, a folia dobrze znosi wilgoć. Etykieta nadaje się do kodów kreskowych, znakowania komponentów i sprzętu, ogólnej identyfikacji i kontroli zapasów, a także do laboratoryjnych butelek, szalek i kolb.\n\nNumer THT-19-432-1 oznacza etykietę o wymiarach 76,2 × 50,8 mm; rolka zawiera 1000 sztuk. Karta obejmuje jeden numer, bez wariantów rozmiaru. Wydruk wykonuje się na przezroczystej folii, więc kolor podłoża pozostaje widoczny przez etykietę.\n\nGrubość tej folii to 0,102 mm; wolno ją stosować w temperaturach od −40 do 100 °C. Poza autoklawem i zamrażarką znosi też korozję, UV, pogodę, paliwa z olejami, chemikalia oraz rozpuszczalniki i ścieranie. Atesty UL Recognised i CSA potwierdzono dla tej etykiety. Taśmę barwiącą dobiera się z serii R6000HF; zaleca się R6002.',
  sameAs: 'https://www.brady.eu/labels/thermal-transfer-printable-labels-pid-tht-19-432-1',
  images: [
    '/images/products/brady/tht-19-432-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-19-432-1 z przezroczystymi etykietami poliestrowymi 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-432' },
    { name: 'Typ materiału', value: 'poliester przezroczysty' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, rozpuszczalniki i chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary etykiety', value: '76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'R6002 (seria R6000HF); do i7500: i75-R6002' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Part Number', value: 'THT-19-432-1' },
    { name: 'Numer artykułu Brady', value: '014949' },
  ],
  faq: [
    { question: 'Czym B-432 różni się od przezroczystego B-430?', answer: 'B-432 jest grubsze (0,102 mm) i pracuje od −40 do 100 °C. Etykiety mają dużą przyczepność i są przeznaczone także do lakieru proszkowego.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-432?', answer: 'Zaleca się R6002 z serii R6000HF, a do i7500 oznaczenie i75-R6002.' },
    { question: 'Jakie drukarki obsługują etykiety B-432?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500).' },
  ],
  applications: ['Kody kreskowe na etykiecie bez zasłaniania podłoża', 'Oznaczanie komponentów i sprzętu', 'Etykiety na butelki, szalki i kolby laboratoryjne'],
}

// ---------------------------------------------------------------------------
// ToughBond B-484A, elastyczny poliester do powierzchni zakrzywionych (cps-4372005); THT-19-484-1 bez i6100
// ---------------------------------------------------------------------------

// [PN, szerokość, wysokość, sztuk na rolce]
const TOUGHBOND_484: [string, string, string, string][] = [
  ['THT-19-484-1', '76.20', '50.80', '1000'],
  ['THT-17-484-3', '50.80', '25.40', '3000'],
  ['THT-5-484-10', '25.40', '12.70', '10000'],
  ['THT-55-484-1', '101.60', '50.80', '1000'],
  ['THT-18-484-3', '76.20', '25.40', '3000'],
]

export const bradyTHTToughBond484: Product = {
  ...wspolneTHT,
  id: 'brady-tht-19-484-1',
  slug: 'brady-tht-19-484-1',
  name: 'Elastyczne etykiety poliestrowe do powierzchni zakrzywionych Brady ToughBond B-484A na rolce 76 mm',
  seoTitle: 'Brady ToughBond B-484A — etykiety na krzywizny, i6100, i7100',
  seoDescription: 'Cienkie etykiety poliestrowe Brady ToughBond B-484A do i6100, i7100 i i7500: powierzchnie zakrzywione, kauczukowy klej. PN: THT-19-484-1, THT-17-484-3.',
  shortDescription: 'Brady ToughBond B-484A to cienkie, elastyczne etykiety poliestrowe z klejem kauczukowym do powierzchni zakrzywionych i skośnych, w pięciu formatach. Do drukarek Brady i6100, i7100 i i7500.',
  description: 'ToughBond B-484A to biały, błyszczący poliester o niskim profilu: folia ma tylko 0,076 mm. Dzięki temu dobrze układa się na powierzchniach zakrzywionych i skośnych. Klej kauczukowy o ultramocnej przyczepności trzyma na lakierze proszkowym, a także na podłożach chropowatych, silnie fakturowanych i trudnych tworzywach. Zastosowania to kody kreskowe, płytki drukowane, komponenty, środki trwałe i ogólna identyfikacja.\n\nDostępne formaty to 25,4 × 12,7, 50,8 × 25,4, 76,2 × 25,4, 76,2 × 50,8 oraz 101,6 × 50,8 (wszystkie w mm). Największy ma 1000 sztuk na rolce, najmniejszy 10 000, a pozostałe po 3000 lub 1000.\n\nMateriał zachowuje właściwości między −40 a 120 °C i odpiera pogodę, UV, wilgoć, korozję, chemikalia, rozpuszczalniki, paliwa i oleje oraz ścieranie. Zatwierdzeniem jest UL Recognised. Zalecana taśma barwiąca należy do serii R6000HF.',
  sameAs: 'https://www.brady.eu/labels/76-mm-core-flexible-polyester-curved-surface-labels-cps-4372005',
  images: [
    '/images/products/brady/tht-19-484-1.png',
  ],
  imageDescriptions: [
    'Rolka Brady THT-19-484-1 z białymi błyszczącymi etykietami poliestrowymi 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-484A' },
    { name: 'Typ materiału', value: 'poliester o niskim profilu' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy, ultramocny; do powierzchni gładkich, chropowatych, silnie fakturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa i oleje, rozpuszczalniki i chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 / 50,8 × 25,4 / 76,2 × 25,4 / 76,2 × 50,8 / 101,6 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 / 3000 / 10 000, zależnie od wymiaru' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'seria R6000HF' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'i6100, i7100, i7500' },
    { name: 'Uwagi o zgodności', value: 'i6100: nie pasuje numer THT-19-484-1; pasuje do i7100 i i7500. Pozostałe numery pasują do i6100, i7100 i i7500.' },
  ],
  variants: TOUGHBOND_484.map(([pn, w, h, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała elastyczna etykieta poliestrowa B-484A ${wym(w, h)} mm, ${sztuk(szt)} szt.`,
    attributes: { Rozmiar: rozmiar(w, h, szt) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 101,6 × 50,8 mm.',
  },
  faq: [
    { question: 'Dlaczego B-484A nadaje się na powierzchnie zakrzywione?', answer: 'Folia ma niski profil i grubość 0,076 mm, więc układa się na krzywiznach i skosach. Klej kauczukowy jest ultramocny.' },
    { question: 'Jaki zakres temperatur obejmuje B-484A?', answer: 'Etykieta pracuje od −40 do 120 °C. Materiał odpiera paliwa, oleje, rozpuszczalniki, ścieranie i promieniowanie UV.' },
    { question: 'Jakie drukarki obsługują etykiety B-484A?', answer: 'Etykiety drukują [Brady i6100](/produkt/brady-i6100), [Brady i7100](/produkt/brady-i7100) i [Brady i7500](/produkt/brady-i7500); numer THT-19-484-1 nie pasuje do i6100. Zalecana taśma barwiąca należy do serii R6000HF.' },
  ],
  applications: ['Etykiety na powierzchniach zakrzywionych i skośnych', 'Oznaczanie płytek drukowanych i komponentów', 'Ewidencja środków trwałych i kody kreskowe'],
}

// ---------------------------------------------------------------------------
// Eksport: wszystkie karty tego pliku
// ---------------------------------------------------------------------------

export const bradyTHTPoliester: Product[] = [
  bradyTHTWorkhorse423,
  bradyTHTTasma423,
  bradyTHTMetalabel486,
  bradyTHTWorkhorse8591,
  bradyTHTMetalabel434,
  bradyTHTMetalabel428,
  bradyTHTWorkhorse8117,
  bradyTHTToughBond483,
  bradyTHTPrintProtect,
  bradyTHTMetalabel413,
  bradyTHTToughBond422,
  bradyTHTMetalabel435,
  bradyTHTToughBond489,
  bradyTHTWorkhorse430,
  bradyTHTMetalabel480,
  bradyTHTToughBond432,
  bradyTHTToughBond484,
]

export const bradyTHTPoliesterSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne' | 'rfid'> = Object.fromEntries(
  bradyTHTPoliester.map((p) => [p.id, 'ogolne' as const]),
)
