import type { Product } from './products'
import { wspolneM7 } from './brady-m7-wspolne'

// Materiały specjalne Brady tylko do drukarki M710: ToughWash B-854 i B-855 (odporne na mycie), taśma odblaskowa B-584,
// BradyGlo B-582 i B-526 (świecące w ciemności), magnetyczny poliester B-509. Bez kolumny „Drukarka” — wszystkie numery są do M710. 14.11.2026.

const DRUKARKI_M7 = 'M710, BMP71'

const KOLORY_ZENSKIE: Record<string, string> = { WT: 'białą', YL: 'żółtą', OR: 'pomarańczową' }
const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty', OR: 'Pomarańczowy' }

// ---------------------------------------------------------------------------
// B-584 — taśma odblaskowa do pracy na zewnątrz (cps-4554347): kasety M7C i materiał zbiorczy BMC
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, długość taśmy, forma]
const ODBLASKOWE_584: [string, string, string, string, 'kaseta' | 'zbiorczy'][] = [
  ['M7C-2000-584-YL', '176827', '50,8', '9,14', 'kaseta'],
  ['M7C-2000-584-OR', '176826', '50,8', '9,14', 'kaseta'],
  ['M7C-2000-584-WT', '176828', '50,8', '9,14', 'kaseta'],
  ['M7C-1000-584-WT', '176825', '25,4', '9,14', 'kaseta'],
  ['M7C-1000-584-YL', '176824', '25,4', '9,14', 'kaseta'],
  ['M7C-1000-584-OR', '176823', '25,4', '9,14', 'kaseta'],
  ['BMC-2000-584-YL', '174515', '50,8', '22,86', 'zbiorczy'],
  ['BMC-2000-584-OR', '174513', '50,8', '22,86', 'zbiorczy'],
  ['BMC-2000-584-WT', '174514', '50,8', '22,86', 'zbiorczy'],
  ['BMC-1000-584-WT', '174509', '25,4', '22,86', 'zbiorczy'],
  ['BMC-1000-584-YL', '174510', '25,4', '22,86', 'zbiorczy'],
  ['BMC-1000-584-OR', '174508', '25,4', '22,86', 'zbiorczy'],
]

const kodKoloru = (pn: string) => pn.split('-').pop() as string

export const bradyM7Odblaskowa584: Product = {
  ...wspolneM7,
  id: 'brady-m7c-2000-584-yl',
  slug: 'brady-m7c-2000-584-yl',
  name: 'Taśma odblaskowa Brady M7C-2000-584-YL — kasety M7 i materiał BM do M710',
  seoTitle: 'Brady M7C-2000-584-YL — taśma odblaskowa do M710',
  seoDescription: 'Taśma odblaskowa Brady B-584 do M710: 25,4 i 50,8 mm, kasety 9,14 m i rolki 22,86 m, 3 kolory. PN: M7C-2000-584-YL, M7C-1000-584-WT, BMC-1000-584-OR.',
  shortDescription: 'Brady M7C-2000-584-YL i 11 innych wersji odblaskowej taśmy B-584 w kasetach M7C oraz na dużych rolkach BMC, w kolorze białym, żółtym albo pomarańczowym. Do drukarki Brady M710.',
  description: 'Brady B-584 to folia odblaskowa z trwałym klejem akrylowym. Materiał jest retrorefleksyjny, czyli odbija padające światło z powrotem w stronę źródła. Oznaczenie wyraźnie błyszczy w świetle latarki lub reflektora. Taśmą znakuje się narzędzia, kaski ochronne, skrzynki instalacyjne, słupy, sprzęt na dachach i półki regałów. Powierzchnia jest błyszcząca, a klej wymaga podłoża gładkiego.\n\nTaśma występuje w dwóch formach. Kaseta M7C mieści 9,14 m taśmy, a materiał zbiorczy BMC to duża rolka o długości 22,86 m. W obu formach jest wariant węższy (25,4 mm) i szerszy (50,8 mm). Dostępne kolory to biały, żółty i pomarańczowy. Grubość folii wynosi 0,14 mm. Długość etykiety zależy od projektu wydruku.\n\nMateriał spełnia normę Federal Specification L-S-300 w zakresie odblaskowości. Średnio taśma przetrwa na wolnym powietrzu od 4 do 6 lat. Użytkowanie jest możliwe od −40 do 70 °C, a folia znosi ścieranie i chemikalia. Naklejanie jest możliwe od 10 °C. Dla kaset M7C zaleca się taśmę barwiącą M7-R10000, a dla rolek BMC taśmę M7-R6000. Taśma barwiąca jest osobnym produktem.',
  sameAs: 'https://www.brady.eu/labels/retro-reflective-all-weather-label-tape-bulk-for-m710-printers-cps-4554347',
  images: [
    '/images/products/brady/m7c-2000-584-yl.png',
    '/images/products/brady/m7c-1000-584-or.png',
    '/images/products/brady/bmc-2000-584-or.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-2000-584-YL na uchwycie z wysuniętym paskiem żółtej taśmy odblaskowej 50,8 mm',
    'Kaseta Brady M7C-1000-584-OR z pomarańczową taśmą odblaskową 25,4 mm',
    'Karton z podajnikiem i pomarańczową taśmą odblaskową Brady BMC-2000-584-OR o długości 22,86 m',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą (M7C) albo duża rolka materiału zbiorczego (BMC), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-584' },
    { name: 'Typ materiału', value: 'taśma odblaskowa (retrorefleksyjna)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,14 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz (średnio 4–6 lat)' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy' },
    { name: 'Szerokość taśmy', value: '25,4 / 50,8 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '9,14 m (kaseta M7C); 22,86 m (materiał zbiorczy BMC)' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'Federal Specification L-S-300 (odblaskowość)' },
    { name: 'Zalecane serie taśm barwiących', value: 'R10000 (kaseta M7C); R10000, R4400, R6000HF, R6900 (materiał BMC)' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000 (kaseta M7C); M7-R6000 (materiał BMC)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: ODBLASKOWE_584.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ODBLASKOWE_584.map(([pn, , szer, dl, forma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${forma === 'kaseta' ? 'kaseta z' : 'materiał zbiorczy z'} ${KOLORY_ZENSKIE[kodKoloru(pn)]} taśmą odblaskową ${szer} mm × ${dl} m`,
    attributes: {
      Rozmiar: `ciągła ${szer} mm × ${dl} m`,
      Kolor: KOLORY[kodKoloru(pn)],
      Forma: forma === 'kaseta' ? 'Kaseta M7C' : 'Materiał zbiorczy BMC',
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 25,4 albo 50,8 mm. Kaseta zawiera 9,14 m taśmy, a duża rolka 22,86 m.',
    Kolor: 'Kolor folii odblaskowej.\n\nKażda szerokość jest dostępna jako biała, żółta i pomarańczowa.',
    Forma: 'Sposób dostarczenia taśmy.\n\nKaseta M7C ma rolkę na uchwycie i pasuje bezpośrednio do drukarki. Materiał zbiorczy BMC to dłuższa rolka, którą dostarcza się w kartonie z podajnikiem.',
  },
  faq: [
    { question: 'Do czego służy odblaskowa taśma B-584?', answer: 'Do oznaczeń widocznych w świetle latarki lub reflektora. Taśmą znakuje się narzędzia, kaski, szafy zewnętrzne, słupy, sprzęt na dachach i półki regałów.' },
    { question: 'Czym kaseta M7C różni się od materiału BMC?', answer: 'Kaseta M7C zawiera 9,14 m taśmy, a rolka BMC 22,86 m. Szerokości i kolory są takie same. Do kaset zaleca się taśmę barwiącą M7-R10000, a do rolek BMC taśmę M7-R6000.' },
    { question: 'Do jakich drukarek pasuje taśma B-584 w tej wersji?', answer: 'Kasety M7C i rolki BMC są przeznaczone do drukarki [Brady M710](/produkt/brady-m710) oraz starszej BMP71.' },
  ],
  applications: ['Narzędzia i kaski na budowie', 'Szafy, słupy i sprzęt na zewnątrz', 'Regały i półki w magazynie'],
}

// ---------------------------------------------------------------------------
// ToughWash B-854 (metal detectable) — pojedynczy PN M7-222-854 (pid-m7-222-854) i rodzina BM7C (cps-4554364)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość taśmy, kolor]
const TOUGHWASH_854_BM7C: [string, string, string, string][] = [
  ['BM7C-1000-854-WT', '173458', '25,4', 'WT'],
  ['BM7C-1000-854-YL', '173459', '25,4', 'YL'],
  ['BM7C-2000-854-WT', '173468', '50,8', 'WT'],
  ['BM7C-2000-854-YL', '173469', '50,8', 'YL'],
]

export const bradyM7ToughWash854: Product = {
  ...wspolneM7,
  id: 'brady-m7-222-854',
  slug: 'brady-m7-222-854',
  name: 'Etykiety odporne na mycie, wykrywalne przez wykrywacze metali Brady ToughWash M7-222-854 — kaseta M7 i materiał BM7 do M710',
  seoTitle: 'Brady ToughWash M7-222-854 — etykiety wykrywalne do M710',
  seoDescription: 'Etykiety Brady ToughWash B-854 do M710 odporne na mycie, wykrywalne przez wykrywacze metali. PN: M7-222-854, BM7C-1000-854-WT, BM7C-2000-854-YL.',
  shortDescription: 'Brady ToughWash M7-222-854 i cztery rolki BM7C z poliestrem B-854, który wykrywają wykrywacze metali i który znosi mycie pod ciśnieniem w zakładach spożywczych. Do drukarki Brady M710.',
  description: 'ToughWash B-854 to poliestrowa folia z trwałym klejem akrylowym, którą opracowano dla zakładów przetwarzających żywność i napoje. Dostępne w handlu wykrywacze metali potrafią ją wykryć. Konstrukcja wytrzymuje trudne warunki mycia. Matowa powierzchnia nadaje się do znakowania obiektów, maszyn i miejsc prac utrzymania ruchu oraz do znaków bezpieczeństwa. Etykiety drukuje się na żądanie, w potrzebnej ilości.\n\nKaseta M7-222-854 mieści 200 białych etykiet o wymiarach 33,02 × 22,86 mm, wykrojonych w folii. Materiał zbiorczy BM7C jest taśmą ciągłą nawiniętą na rolkę 22,86 m. Taśma BM7C jest szeroka na 25,4 mm albo 50,8 mm. Dostępny kolor to biały albo żółty. Grubość folii wynosi 0,229 mm.\n\nEtykiety wytrzymują mycie w temperaturze do 80 °C pod ciśnieniem do 1500 PSI (około 103 bar). Użytkowanie jest możliwe w zakresie od −40 do 110 °C. Odporność obejmuje ścieranie, chemikalia i mycie. Klej wiąże z powierzchniami gładkimi, a naklejanie zaczyna się od 4 °C. Do druku trzeba mieć osobną kasetę z taśmą barwiącą: M7-R10000 do kasety i M7-R6000 do rolek BM7C.',
  sameAs: 'https://www.brady.eu/labels/toughwash-metal-detectable-washdown-resistant-label-tape-bulk-for-m710-printers-cps-4554364',
  images: [
    '/images/products/brady/m7-222-854.png',
    '/images/products/brady/bm7c-1000-854-wt.png',
    '/images/products/brady/bm7c-2000-854-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady ToughWash M7-222-854 na uchwycie z paskiem białych etykiet 33,02 × 22,86 mm',
    'Karton z podajnikiem i białą taśmą ciągłą Brady BM7C-1000-854-WT o szerokości 25,4 mm',
    'Karton z podajnikiem i żółtą taśmą ciągłą Brady BM7C-2000-854-YL o szerokości 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi (M7) albo duża rolka materiału zbiorczego z taśmą ciągłą (BM7C), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughWash B-854' },
    { name: 'Typ materiału', value: 'poliester wykrywalny przez wykrywacze metali, odporny na mycie' },
    { name: 'Grubość', value: '0,229 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 110 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Warunki pracy', value: 'mycie w temperaturze do 80 °C i pod ciśnieniem do 1500 PSI' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, mycie' },
    { name: 'Kolory', value: 'biały, żółty (rolki BM7C); biały (kaseta M7-222-854)' },
    { name: 'Wymiary etykiety', value: '33,02 × 22,86 mm (M7-222-854)' },
    { name: 'Liczba sztuk na rolce', value: '200 (M7-222-854)' },
    { name: 'Szerokość i długość taśmy', value: '25,4 / 50,8 mm × 22,86 m (BM7C)' },
    { name: 'Format', value: 'etykiety wykrawane (M7); taśma ciągła (BM7C)' },
    { name: 'Zalecane serie taśm barwiących', value: 'R10000 (M7-222-854); R6000HF (BM7C)' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000 (M7-222-854); M7-R6000 (BM7C)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: `M7-222-854: 177701; ${TOUGHWASH_854_BM7C.map(([pn, art]) => `${pn}: ${art}`).join('; ')}` },
  ],
  variants: [
    { partNumber: 'M7-222-854', name: 'Brady ToughWash M7-222-854 — kaseta z 200 białymi etykietami 33,02 × 22,86 mm', attributes: { Rozmiar: '33,02 × 22,86 mm, 200 szt.', Kolor: 'Biały', Forma: 'Kaseta M7' }, availability: 'unavailable' },
    ...TOUGHWASH_854_BM7C.map(([pn, , szer, kolor]) => ({
      partNumber: pn,
      name: `Brady ToughWash ${pn} — materiał zbiorczy z ${KOLORY_ZENSKIE[kolor]} taśmą ciągłą ${szer} mm × 22,86 m`,
      attributes: { Rozmiar: `ciągła ${szer} mm × 22,86 m`, Kolor: KOLORY[kolor], Forma: 'Materiał zbiorczy BM7C' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej albo szerokość i długość taśmy ciągłej.\n\nKaseta M7-222-854 ma 200 etykiet 33,02 × 22,86 mm. Rolki BM7C mają po 22,86 m taśmy o szerokości 25,4 albo 50,8 mm.',
    Kolor: 'Kolor folii poliestrowej B-854.\n\nKaseta z etykietami wykrawanymi jest biała. Rolki BM7C są białe albo żółte.',
    Forma: 'Sposób dostarczenia materiału.\n\nKaseta M7 zawiera gotowe etykiety wykrawane. Materiał zbiorczy BM7C to dłuższa rolka taśmy ciągłej, której długość ustawia się w drukarce.',
  },
  faq: [
    { question: 'Co oznacza, że etykieta B-854 jest wykrywalna?', answer: 'Folia ma właściwość wykrywalności: może ją wykryć wykrywacz metali dostępny w handlu. Materiał opracowano dla przetwórstwa żywności i napojów.' },
    { question: 'Jak wysokie ciśnienie i temperaturę wody znosi etykieta B-854?', answer: 'Mycie w temperaturze do 80 °C i pod ciśnieniem do 1500 PSI, czyli około 103 bar. Zakres temperatur użytkowania to od −40 do 110 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-854?', answer: 'Do kasety M7-222-854 zaleca się M7-R10000, a do rolek BM7C taśmę M7-R6000. Obie pasują do drukarki [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczanie w przetwórstwie żywności i napojów', 'Oznaczanie maszyn i obiektów', 'Znaki bezpieczeństwa i prace utrzymania ruchu'],
}

// ---------------------------------------------------------------------------
// ToughWash B-855 — pojedynczy PN M7-222-855 (pid-m7-222-855) i rodzina BM7C (cps-4554365)
// ---------------------------------------------------------------------------

const TOUGHWASH_855_BM7C: [string, string, string, string][] = [
  ['BM7C-1000-855-WT', '173460', '25,4', 'WT'],
  ['BM7C-1000-855-YL', '173461', '25,4', 'YL'],
  ['BM7C-2000-855-WT', '173473', '50,8', 'WT'],
  ['BM7C-2000-855-YL', '173474', '50,8', 'YL'],
]

export const bradyM7ToughWash855: Product = {
  ...wspolneM7,
  id: 'brady-m7-222-855',
  slug: 'brady-m7-222-855',
  name: 'Etykiety odporne na mycie Brady ToughWash M7-222-855 — kaseta M7 i materiał BM7 do M710',
  seoTitle: 'Brady ToughWash M7-222-855 — etykiety odporne na mycie do M710',
  seoDescription: 'Etykiety Brady ToughWash B-855 do M710 odporne na wielokrotne mycie, ciepło i chemikalia, od −40 do 110 °C. PN: M7-222-855, BM7C-1000-855-WT, BM7C-2000-855-YL.',
  shortDescription: 'Brady ToughWash M7-222-855 i cztery rolki BM7C z matowym poliestrem B-855, przeznaczonym do oznaczeń w miejscach często myjących się pod wysokim ciśnieniem. Do drukarki Brady M710.',
  description: 'Brady ToughWash B-855 to matowy poliester z klejem akrylowym, zaprojektowany na miejsca poddawane intensywnemu myciu. Materiał służy do oznaczeń bezpieczeństwa, znakowania obiektów i tablic informacyjnych w zakładach spożywczych. Nadruk pozostaje czytelny po wielu cyklach mycia. Etykiety przygotowano do druku na żądanie w przemyśle spożywczym i napojów.\n\nEtykiety w kasecie M7-222-855 mają 33,02 mm na 22,86 mm i jest ich 200, w kolorze białym. Materiał zbiorczy BM7C to taśma ciągła na rolce 22,86 m. Pierwsza wersja ma szerokość 25,4 mm, a druga 50,8 mm. Kolor taśmy to biały albo żółty, a grubość folii wynosi 0,178 mm. Na rolkach BM7C długość etykiety wybiera się w ustawieniach drukarki.\n\nEtykiety znoszą wysokie ciśnienie, ciepło, agresywne chemikalia i liczne cykle mycia. Granice temperatury użytkowania to −40 i 110 °C, a folia jest odporna na ścieranie. Klej wiąże z gładkimi powierzchniami od 4 °C. Do wydruku potrzebna jest kaseta z taśmą barwiącą, kupowana osobno. Zalecaną taśmą jest M7-R10000 dla kasety oraz M7-R6000 dla rolek BM7C. Materiał obsługuje drukarka M710.',
  sameAs: 'https://www.brady.eu/labels/toughwash-washdown-resistant-label-tape-bulk-for-m710-printers-cps-4554365',
  images: [
    '/images/products/brady/m7-222-855.png',
    '/images/products/brady/bm7c-1000-855-wt.png',
    '/images/products/brady/bm7c-2000-855-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady ToughWash M7-222-855 z paskiem białych etykiet wykrawanych 33,02 × 22,86 mm',
    'Karton z podajnikiem i białą taśmą ciągłą Brady BM7C-1000-855-WT o szerokości 25,4 mm',
    'Karton z podajnikiem i żółtą taśmą ciągłą Brady BM7C-2000-855-YL o szerokości 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi (M7) albo duża rolka materiału zbiorczego z taśmą ciągłą (BM7C), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughWash B-855' },
    { name: 'Typ materiału', value: 'poliester odporny na mycie' },
    { name: 'Grubość', value: '0,178 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 110 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Warunki pracy', value: 'wysokie ciśnienie, ciepło, agresywne chemikalia, liczne cykle mycia' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, mycie' },
    { name: 'Kolory', value: 'biały, żółty (rolki BM7C); biały (kaseta M7-222-855)' },
    { name: 'Wymiary etykiety', value: '33,02 × 22,86 mm (M7-222-855)' },
    { name: 'Liczba sztuk na rolce', value: '200 (M7-222-855)' },
    { name: 'Szerokość i długość taśmy', value: '25,4 / 50,8 mm × 22,86 m (BM7C)' },
    { name: 'Format', value: 'etykiety wykrawane (M7); taśma ciągła (BM7C)' },
    { name: 'Zalecane serie taśm barwiących', value: 'R10000 (M7-222-855); R6000HF (BM7C)' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000 (M7-222-855); M7-R6000 (BM7C)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: `M7-222-855: 177702; ${TOUGHWASH_855_BM7C.map(([pn, art]) => `${pn}: ${art}`).join('; ')}` },
  ],
  variants: [
    { partNumber: 'M7-222-855', name: 'Brady ToughWash M7-222-855 — kaseta z 200 białymi etykietami 33,02 × 22,86 mm', attributes: { Rozmiar: '33,02 × 22,86 mm, 200 szt.', Kolor: 'Biały', Forma: 'Kaseta M7' }, availability: 'unavailable' },
    ...TOUGHWASH_855_BM7C.map(([pn, , szer, kolor]) => ({
      partNumber: pn,
      name: `Brady ToughWash ${pn} — materiał zbiorczy z ${KOLORY_ZENSKIE[kolor]} taśmą ciągłą ${szer} mm × 22,86 m`,
      attributes: { Rozmiar: `ciągła ${szer} mm × 22,86 m`, Kolor: KOLORY[kolor], Forma: 'Materiał zbiorczy BM7C' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej albo szerokość i długość taśmy ciągłej.\n\nKaseta M7-222-855 zawiera 200 etykiet 33,02 × 22,86 mm. Rolki BM7C mają po 22,86 m taśmy o szerokości 25,4 albo 50,8 mm.',
    Kolor: 'Kolor poliestru B-855.\n\nKaseta z etykietami jest biała. Taśma na rolkach BM7C występuje w kolorze białym i żółtym.',
    Forma: 'Sposób dostarczenia materiału.\n\nKaseta M7 ma gotowe etykiety wykrawane, a materiał zbiorczy BM7C to większa rolka taśmy ciągłej w kartonie z podajnikiem.',
  },
  faq: [
    { question: 'Do jakich miejsc przeznaczona jest etykieta B-855?', answer: 'Do zakładów przetwórstwa żywności i napojów oraz innych miejsc, w których oznaczenia często się myje. Materiał znosi wysokie ciśnienie, ciepło i agresywne chemikalia.' },
    { question: 'Jaki zakres temperatur obejmuje materiał B-855?', answer: 'Od −40 do 110 °C. Klej akrylowy pozwala na naklejanie od 4 °C, a powierzchnia podłoża powinna być gładka.' },
    { question: 'Jaka taśma barwiąca pasuje do materiału B-855?', answer: 'Do kasety M7-222-855 zaleca się M7-R10000, a do rolek BM7C taśmę M7-R6000. Materiał drukuje [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczenia w zakładach spożywczych', 'Znaki bezpieczeństwa i oznaczenia obiektów', 'Maszyny i prace utrzymania ruchu'],
}

// ---------------------------------------------------------------------------
// BradyGlo B-582 — taśma świecąca w ciemności (cps-4554345)
// ---------------------------------------------------------------------------

export const bradyM7BradyGlo582: Product = {
  ...wspolneM7,
  id: 'brady-bm7c-1000-582',
  slug: 'brady-bm7c-1000-582',
  name: 'Taśma świecąca w ciemności Brady BradyGlo BM7C-1000-582 — materiał BM7 do M710',
  seoTitle: 'Brady BradyGlo BM7C-1000-582 — taśma świecąca do M710',
  seoDescription: 'Taśma fotoluminescencyjna Brady BradyGlo B-582 do drukarki M710: 25,4 i 50,8 mm × 22,86 m, świeci ponad 10 godzin. PN: BM7C-1000-582, BM7C-2000-582.',
  shortDescription: 'Brady BradyGlo BM7C-1000-582 i BM7C-2000-582 to rolki fotoluminescencyjnego poliestru B-582 o szerokości 25,4 i 50,8 mm, które świecą w ciemności po naładowaniu światłem. Do drukarki Brady M710.',
  description: 'BradyGlo B-582 to poliester fotoluminescencyjny, który po naładowaniu światłem świeci w ciemności. Materiał jest nietoksyczny i nieradioaktywny oraz nie stwarza zagrożenia wybuchem. Taśma służy do znaków wyjść i kierunku ewakuacji, a także do oznaczania alarmów pożarowych i gaśnic. Wykorzystuje się ją również w systemach kierunkowych na drogach ucieczki i ewakuacji.\n\nMateriał ma fotoluminescencyjny zielony kolor i grubość 0,20 mm. Na rolce BM7C jest 22,86 m taśmy ciągłej o szerokości 25,4 mm lub 50,8 mm. Do naładowania wystarcza 5 minut przy oświetleniu 1000 luksów. Czas świecenia przekracza 10 godzin. Długość wydruku wybiera się w projekcie etykiety.\n\nZakres temperatur użytkowania to od −40 do 80 °C, a ścieranie i chemikalia nie niszczą taśmy. Klej akrylowy wiąże z gładkimi powierzchniami, od 10 °C. Lista norm obejmuje m.in. ASTM E-162, ASTM E-648, DIN 67 510, IMO A.752(18) i OSHA 1910.37. Kaseta z taśmą barwiącą M7-R6000 jest osobnym produktem. Zalecane serie taśm barwiących to R4400, R6000HF i R6900. Materiał drukuje M710.',
  sameAs: 'https://www.brady.eu/labels/bradyglo-glow-in-the-dark-label-tape-bulk-for-m710-printers-cps-4554345',
  images: ['/images/products/brady/bm7c-1000-582.png'],
  imageDescriptions: ['Karton z podajnikiem i rolką taśmy Brady BradyGlo BM7C-1000-582 o szerokości 25,4 mm'],
  specifications: [
    { name: 'Typ', value: 'Duża rolka materiału zbiorczego z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'BradyGlo B-582' },
    { name: 'Typ materiału', value: 'poliester fotoluminescencyjny, nietoksyczny i nieradioaktywny' },
    { name: 'Grubość', value: '0,20 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Świecenie', value: 'ładowanie 5 minut przy 1000 luksów; czas świecenia ponad 10 godzin' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolor', value: 'zielony fotoluminescencyjny' },
    { name: 'Szerokość taśmy', value: '25,4 / 50,8 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '22,86 m' },
    { name: 'Format', value: 'taśma ciągła, materiał zbiorczy (BM7C)' },
    { name: 'Normy', value: 'ASTM E-162, ASTM E-2072-00 / ASTM E-2073-00, ASTM E-648, ASTM E-662, DIN 67 510 (części 1–4), IMO A.752(18), ISO/CD 15370, MSC.27(61), OSHA 1910.37' },
    { name: 'Zalecane serie taśm barwiących', value: 'R4400, R6000HF, R6900' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: 'BM7C-1000-582: 173457; BM7C-2000-582: 173462' },
  ],
  variants: [
    { partNumber: 'BM7C-1000-582', name: 'Brady BradyGlo BM7C-1000-582 — taśma ciągła 25,4 mm × 22,86 m', attributes: { Rozmiar: 'ciągła 25,4 mm × 22,86 m' }, availability: 'unavailable' },
    { partNumber: 'BM7C-2000-582', name: 'Brady BradyGlo BM7C-2000-582 — taśma ciągła 50,8 mm × 22,86 m', attributes: { Rozmiar: 'ciągła 50,8 mm × 22,86 m' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej na rolce.\n\nKażda rolka ma 22,86 m. Węższa taśma ma 25,4 mm, a szersza 50,8 mm.',
  },
  faq: [
    { question: 'Jak długo świeci taśma BradyGlo B-582?', answer: 'Ponad 10 godzin. Do naładowania wystarcza 5 minut przy oświetleniu 1000 luksów.' },
    { question: 'Czy materiał B-582 jest bezpieczny dla ludzi i otoczenia?', answer: 'Tak. Materiał jest nietoksyczny i nieradioaktywny oraz nie stwarza zagrożenia wybuchem.' },
    { question: 'Którą taśmę barwiącą dobrać do BradyGlo B-582?', answer: 'Zaleca się M7-R6000. Zalecane serie taśm barwiących to R4400, R6000HF i R6900. Materiał drukuje [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Znaki wyjść i kierunku ewakuacji', 'Oznaczenia alarmów pożarowych i gaśnic', 'Oznaczenia dróg ewakuacyjnych'],
}

// ---------------------------------------------------------------------------
// BradyGlo B-526 — taśma świecąca o wysokiej intensywności (cps-4554370)
// ---------------------------------------------------------------------------

export const bradyM7BradyGlo526: Product = {
  ...wspolneM7,
  id: 'brady-bm7c-1000-526',
  slug: 'brady-bm7c-1000-526',
  name: 'Taśma świecąca w ciemności o wysokiej intensywności Brady BradyGlo BM7C-1000-526 — materiał BM7 do M710',
  seoTitle: 'Brady BradyGlo BM7C-1000-526 — taśma świecąca do M710',
  seoDescription: 'Taśma Brady BradyGlo B-526 do M710 o wysokiej intensywności świecenia, 25,4 i 50,8 mm × 22,86 m, do klatek schodowych. PN: BM7C-1000-526, BM7C-2000-526.',
  shortDescription: 'Brady BradyGlo BM7C-1000-526 i BM7C-2000-526 to rolki białego poliestru B-526 o wysokiej intensywności świecenia, spełniające wymagania nowojorskiego Local Law 26. Do drukarki Brady M710.',
  description: 'BradyGlo B-526 to fotoluminescencyjny poliester o wysokiej intensywności świecenia. Materiał oznacza słabo oświetlone miejsca, zwłaszcza klatki schodowe i ciągi komunikacyjne w budynkach publicznych. Trwały klej akrylowy dobrze przylega do podłoża i zapewnia długotrwałe oznaczenie. Taśma służy też do znaków wyjść, oznaczania alarmów pożarowych i gaśnic oraz do systemów kierunkowych na drogach ewakuacji.\n\nRolka BM7C mieści 22,86 m białej taśmy ciągłej. Węższa wersja ma 25,4 mm, a szersza 50,8 mm. W ciemności taśma świeci do 10 godzin. Grubość materiału to 0,246 mm, a powierzchnia jest błyszcząca.\n\nMateriał spełnia wymagania RS 6-1 i RS 6-1A nowojorskiego prawa Local Law 26. Obejmują one fotoluminescencję, zmywalność, palność, wydzielanie gazów toksycznych i radioaktywność. Taśma ma też dopuszczenie MEA nr 467-06-M, które wydał Department of Buildings miasta Nowy Jork. Dolna granica temperatury użytkowania to −40 °C, a górna 60 °C. Zestaw wymaga osobnej kasety z taśmą barwiącą. Zalecana jest M7-R10000, a zalecane serie taśm barwiących to R10000 i R6000HF. Materiał drukuje M710.',
  sameAs: 'https://www.brady.eu/labels/bradyglo-high-intensity-glow-in-the-dark-labels-tape-bulk-for-m710-printer-cps-4554370',
  images: [
    '/images/products/brady/bm7c-2000-526.png',
    '/images/products/brady/bm7c-1000-526.png',
  ],
  imageDescriptions: [
    'Karton z podajnikiem i rolką taśmy Brady BradyGlo BM7C-2000-526 o szerokości 50,8 mm',
    'Karton z dozownikiem i rolką taśmy Brady BradyGlo BM7C-1000-526 o szerokości 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Duża rolka materiału zbiorczego z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'BradyGlo B-526' },
    { name: 'Typ materiału', value: 'poliester fotoluminescencyjny o wysokiej intensywności świecenia' },
    { name: 'Grubość', value: '0,246 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Świecenie', value: 'do 10 godzin' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '25,4 / 50,8 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '22,86 m' },
    { name: 'Format', value: 'taśma ciągła, materiał zbiorczy (BM7C)' },
    { name: 'Normy', value: 'New York Local Law 26, RS 6-1 i RS 6-1A; City of New York, Department of Buildings: MEA nr 467-06-M UV: 46-9-7' },
    { name: 'Zalecane serie taśm barwiących', value: 'R10000, R6000HF' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000' },
    { name: 'Zgodne drukarki', value: 'M710' },
    { name: 'Numery artykułów Brady', value: 'BM7C-1000-526: 173989; BM7C-2000-526: 173990' },
  ],
  variants: [
    { partNumber: 'BM7C-1000-526', name: 'Brady BradyGlo BM7C-1000-526 — taśma ciągła 25,4 mm × 22,86 m', attributes: { Rozmiar: 'ciągła 25,4 mm × 22,86 m' }, availability: 'unavailable' },
    { partNumber: 'BM7C-2000-526', name: 'Brady BradyGlo BM7C-2000-526 — taśma ciągła 50,8 mm × 22,86 m', attributes: { Rozmiar: 'ciągła 50,8 mm × 22,86 m' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej na rolce.\n\nObie rolki mają po 22,86 m taśmy. Szerokość wynosi 25,4 albo 50,8 mm.',
  },
  faq: [
    { question: 'Gdzie stosuje się taśmę BradyGlo B-526?', answer: 'Przede wszystkim w klatkach schodowych budynków publicznych oraz na drogach ewakuacji. Taśma oznacza też wyjścia, alarmy pożarowe i gaśnice.' },
    { question: 'Jakie wymagania spełnia materiał B-526?', answer: 'Wymagania RS 6-1 i RS 6-1A nowojorskiego Local Law 26, w tym fotoluminescencję, zmywalność, palność, wydzielanie gazów toksycznych i radioaktywność. Materiał ma też dopuszczenie MEA nr 467-06-M.' },
    { question: 'Jaką drukarkę i taśmę barwiącą dobrać do B-526?', answer: 'Rolki BM7C-1000-526 i BM7C-2000-526 są przeznaczone do drukarki [Brady M710](/produkt/brady-m710). Zalecana taśma barwiąca to M7-R10000.' },
  ],
  applications: ['Klatki schodowe w budynkach publicznych', 'Znaki wyjść i dróg ewakuacji', 'Oznaczenia alarmów pożarowych i gaśnic'],
}

// ---------------------------------------------------------------------------
// B-509 — magnetyczna taśma poliestrowa (cps-4554339)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, kolor]
const MAGNETYCZNE_509: [string, string, string, string][] = [
  ['BM7C-1000-509-WT', '173985', '25,4', 'WT'],
  ['BM7C-1000-509-YL', '173987', '25,4', 'YL'],
  ['BM7C-1800-509-WT', '173986', '45,72', 'WT'],
  ['BM7C-1800-509-YL', '173988', '45,72', 'YL'],
]

export const bradyM7Magnetyczna509: Product = {
  ...wspolneM7,
  id: 'brady-bm7c-1000-509-wt',
  slug: 'brady-bm7c-1000-509-wt',
  name: 'Magnetyczna taśma poliestrowa Brady BM7C-1000-509-WT — materiał BM7 do M710',
  seoTitle: 'Brady BM7C-1000-509-WT — taśma magnetyczna do M710',
  seoDescription: 'Magnetyczna taśma poliestrowa Brady B-509 do M710 bez kleju, wielokrotnego użytku: 25,4 i 45,72 mm × 7,62 m. PN: BM7C-1000-509-WT, BM7C-1800-509-YL.',
  shortDescription: 'Brady BM7C-1000-509-WT i trzy inne rolki magnetycznego poliestru B-509 bez kleju, białe albo żółte, do oznaczeń przestawianych i używanych ponownie. Do drukarki Brady M710.',
  description: 'Brady B-509 to magnetyczny poliester bez warstwy kleju, przeznaczony do oznaczeń, które trzeba zmieniać. Etykiety są magnetyczne, więc łatwo je przestawiać i używać ponownie. Brak kleju sprawia, że etykietę można zdjąć i umieścić w innym miejscu. Takie rozwiązanie pomaga przy metodzie 5S oraz w organizacji szczupłej produkcji (lean). Taśma nadaje się do oznaczania obiektów, znakowania ogólnego i oznaczeń bezpieczeństwa.\n\nNa rolce BM7C nawinięto 7,62 m taśmy. Dostępne szerokości to 25,4 mm i 45,72 mm, a kolory to biały i żółty. Grubość materiału to 0,457 mm, a powierzchnia jest matowa. Na taśmie drukuje się metodą termotransferu.\n\nNa zewnątrz taśma służy średnio od 3 do 5 lat. Znosi umiarkowane ciepło, łagodne chemikalia, olej i wodę. Zakres temperatur użytkowania to od −18 do 70 °C. Materiał opiera się ścieraniu. Nadruk wymaga kasety M7-R z taśmą barwiącą, kupowanej osobno. Zalecana jest taśma M7-R10000, a zalecane serie to R10000 i R6000HF. Rolki drukuje M710 oraz starsza BMP71.',
  sameAs: 'https://www.brady.eu/labels/magnetic-polyester-labels-tape-bulk-for-m71010-printer-cps-4554339',
  images: [
    '/images/products/brady/bm7c-1000-509-wt.png',
    '/images/products/brady/bm7c-1800-509-yl.png',
  ],
  imageDescriptions: [
    'Karton z podajnikiem i białą taśmą magnetyczną Brady BM7C-1000-509-WT o szerokości 25,4 mm',
    'Karton z podajnikiem i żółtą taśmą magnetyczną Brady BM7C-1800-509-YL o szerokości 45,72 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Duża rolka materiału zbiorczego z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-509' },
    { name: 'Typ materiału', value: 'poliester magnetyczny' },
    { name: 'Grubość', value: '0,457 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; materiał magnetyczny' },
    { name: 'Temperatura pracy', value: 'od −18 do 70 °C' },
    { name: 'Warunki pracy', value: 'umiarkowane ciepło, łagodne chemikalia, olej, woda; średnio 3–5 lat na zewnątrz' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy', value: '25,4 / 45,72 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '7,62 m' },
    { name: 'Format', value: 'taśma ciągła, materiał zbiorczy (BM7C)' },
    { name: 'Zalecane serie taśm barwiących', value: 'R10000, R6000HF' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: MAGNETYCZNE_509.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MAGNETYCZNE_509.map(([pn, , szer, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} taśma magnetyczna ${szer} mm × 7,62 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 7,62 m`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy magnetycznej na rolce.\n\nKażda rolka ma 7,62 m taśmy. Szerokość wynosi 25,4 albo 45,72 mm.',
    Kolor: 'Kolor poliestru magnetycznego B-509.\n\nObie szerokości są dostępne jako białe i żółte.',
  },
  faq: [
    { question: 'Dlaczego taśma B-509 nie ma kleju?', answer: 'Etykiety są magnetyczne. Dzięki temu można je przestawiać i używać ponownie, na przykład przy wdrażaniu metody 5S.' },
    { question: 'W jakich warunkach można używać taśmy B-509?', answer: 'W temperaturze od −18 do 70 °C. Materiał znosi umiarkowane ciepło, łagodne chemikalia, olej i wodę. Średnia trwałość na zewnątrz to od 3 do 5 lat.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-509?', answer: 'Zaleca się M7-R10000. Materiał jest przeznaczony do drukarki [Brady M710](/produkt/brady-m710) i starszej BMP71.' },
  ],
  applications: ['Oznaczenia przestawiane i wielokrotnego użytku', 'Wdrażanie metody 5S i lean', 'Oznaczanie obiektów i znaki bezpieczeństwa'],
}

export const bradyM7Specjalne: Product[] = [
  bradyM7ToughWash854,
  bradyM7ToughWash855,
  bradyM7Odblaskowa584,
  bradyM7Magnetyczna509,
  bradyM7BradyGlo582,
  bradyM7BradyGlo526,
]

export const bradyM7SpecjalneSekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = {
  'brady-m7-222-854': 'ogolne',
  'brady-m7-222-855': 'ogolne',
  'brady-m7c-2000-584-yl': 'ogolne',
  'brady-bm7c-1000-509-wt': 'ogolne',
  'brady-bm7c-1000-582': 'ogolne',
  'brady-bm7c-1000-526': 'ogolne',
}
