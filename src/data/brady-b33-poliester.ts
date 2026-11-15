import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Etykiety i taśmy z poliestru Brady B33 / B33C / B33D / B33FP do BradyPrinter i3300 (także starsza BBP33):
// Workhorse, materiały odporne na pogodę, One Step Protect, PermaShield. Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.

// Numer pasujący tylko do drukarki i5300; pozostałe numery karty Workhorse B-423 drukują też i3300 oraz i4311.
const TYLKO_I5300 = new Set(['B33-343-423'])
const drukarka = (pn: string) => (TYLKO_I5300.has(pn) ? 'tylko i5300' : 'i3300, i4311, i5300')
const dopisekDrukarki = (pn: string) => (TYLKO_I5300.has(pn) ? ', tylko i5300' : '')

// ---------------------------------------------------------------------------
// Poliester odporny na warunki atmosferyczne B-8591 (cps-4297059)
// ---------------------------------------------------------------------------

const KOLORY_8591: Record<string, string> = { WT: 'Biały', BK: 'Czarny', YL: 'Żółty', SL: 'Srebrny' }
const KOLORY_8591_ZENSKIE: Record<string, string> = { WT: 'biała', BK: 'czarna', YL: 'żółta', SL: 'srebrna' }
const KOLORY_8591_N: Record<string, string> = { WT: 'biały', BK: 'czarny', YL: 'żółty', SL: 'srebrny' }

// [PN, nr art., szerokość taśmy ciągłej albo opis wykroju, kolor]
const CIAGLE_8591: [string, string, string, string][] = [
  ['B33C-2000-8591-WT', '152949', '50,8', 'WT'],
  ['B33C-2000-8591-BK', '152944', '50,8', 'BK'],
  ['B33C-2000-8591-YL', '152934', '50,8', 'YL'],
  ['B33C-2000-8591-SL', '152939', '50,8', 'SL'],
  ['B33C-3000-8591-WT', '151416', '76,2', 'WT'],
  ['B33C-3000-8591-BK', '151414', '76,2', 'BK'],
  ['B33C-3000-8591-YL', '151417', '76,2', 'YL'],
  ['B33C-3000-8591-SL', '151415', '76,2', 'SL'],
  ['B33C-4000-8591-WT', '151391', '101,6', 'WT'],
  ['B33C-4000-8591-BK', '151390', '101,6', 'BK'],
  ['B33C-4000-8591-YL', '151393', '101,6', 'YL'],
  ['B33C-4000-8591-SL', '151392', '101,6', 'SL'],
]

// [PN, nr art., wymiar etykiety, sztuk w pudełku, kolor]
const WYKROJONE_8591: [string, string, string, string, string][] = [
  ['B33-37-8591-WT', '152945', '38,1 × 12,7', '4000', 'WT'],
  ['B33-37-8591-BK', '152940', '38,1 × 12,7', '4000', 'BK'],
  ['B33-37-8591-YL', '152930', '38,1 × 12,7', '4000', 'YL'],
  ['B33-37-8591-SL', '152935', '38,1 × 12,7', '4000', 'SL'],
  ['B33-53-8591-WT', '152946', '50,8 × 12,7', '2500', 'WT'],
  ['B33-53-8591-BK', '152941', '50,8 × 12,7', '2500', 'BK'],
  ['B33-53-8591-YL', '152931', '50,8 × 12,7', '2500', 'YL'],
  ['B33-53-8591-SL', '152936', '50,8 × 12,7', '2500', 'SL'],
  ['B33-7-8591-WT', '152947', '69,85 × 31,75', '1000', 'WT'],
  ['B33-7-8591-BK', '152942', '69,85 × 31,75', '1000', 'BK'],
  ['B33-7-8591-YL', '152932', '69,85 × 31,75', '1000', 'YL'],
  ['B33-7-8591-SL', '152937', '69,85 × 31,75', '1000', 'SL'],
  ['B33-76-8591-WT', '152948', '101,6 × 76,2', '400', 'WT'],
  ['B33-76-8591-BK', '152943', '101,6 × 76,2', '400', 'BK'],
  ['B33-76-8591-YL', '152933', '101,6 × 76,2', '400', 'YL'],
  ['B33-76-8591-SL', '152938', '101,6 × 76,2', '400', 'SL'],
]

// Czarne etykiety drukuje się białą taśmą barwiącą, pozostałe kolory — B30-R6600.
const tasma8591 = (kolor: string) => (kolor === 'BK' ? 'B30-R4400-WT' : 'B30-R6600')

export const bradyB33Poliester8591: Product = {
  ...wspolneB33,
  id: 'brady-b33c-4000-8591-wt',
  slug: 'brady-b33c-4000-8591-wt',
  name: 'Poliestrowe etykiety odporne na warunki atmosferyczne Brady B-8591 do drukarki i3300',
  seoTitle: 'Brady B-8591 — etykiety poliestrowe na zewnątrz do drukarki i3300',
  seoDescription: 'Etykiety i taśma poliestrowa Brady B-8591 do i3300: 12 lat na zewnątrz, bez laminatu, od −70 do 180 °C. PN: B33C-4000-8591-WT, B33-76-8591-BK, B33-53-8591-YL.',
  shortDescription: 'Brady B-8591 to błyszczący poliester do oznaczeń na zewnątrz, w czterech kolorach, jako taśma ciągła i etykiety wykrojone, 28 numerów katalogowych. Do drukarki Brady i3300.',
  description: 'B-8591 to błyszczący poliester stworzony dla oznaczeń, które całymi latami stoją na słońcu i w deszczu. Na zewnątrz wytrzymuje ponad 12 lat. Promieniowanie UV, ścieranie i płyny mu nie szkodzą, dlatego nadruku nie trzeba przykrywać laminatem. Trwały klej akrylowy chwyta podłoże gładkie, chropowate oraz silnie fakturowane, także tworzywa trudne do oklejania. Materiał jest wolny od halogenów. Oznacza się nim kody kreskowe, komponenty i sprzęt, sieci telekomunikacyjne oraz obiekty.\n\nDostępne kolory to biały, czarny, żółty i srebrny. Rolka taśmy ciągłej liczy 30,48 m, a szerokość wybiera się spośród trzech wariantów. Etykiety wykrojone występują w czterech formatach: od wąskiego paska o wysokości 12,7 mm po duży prostokąt o szerokości 101,6 mm. W pudełku jest od 400 do 4000 sztuk, a wąski pasek leży w dwóch rzędach.\n\nFolia ma grubość 0,109 mm. Zakres roboczy: od −70 do 180 °C. Wersje białe, żółte i srebrne drukuje taśma barwiąca B30-R6600, a czarne taśma B30-R4400-WT, sprzedawana osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-weather-resistant-outdoor-polyester-labels-cps-4297059',
  images: [
    '/images/products/brady/b33c-4000-8591-wt.png',
    '/images/products/brady/b33c-3000-8591-yl.png',
    '/images/products/brady/b33-37-8591-sl.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33C-4000-8591-WT na uchwycie z wysuniętym paskiem białej taśmy poliestrowej o szerokości 101,6 mm',
    'Rolka Brady B33C-3000-8591-YL na uchwycie z żółtą taśmą poliestrową o szerokości 76,2 mm',
    'Pasek srebrnych etykiet wykrojonych Brady B33-37-8591-SL w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B33C albo etykiety wykrojone B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-8591' },
    { name: 'Typ materiału', value: 'poliester odporny na warunki atmosferyczne' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,109 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 180 °C' },
    { name: 'Odporność', value: 'promieniowanie UV, ścieranie, płyny; ponad 12 lat na zewnątrz' },
    { name: 'Kolory', value: 'biały, czarny, żółty, srebrny' },
    { name: 'Szerokość taśmy', value: '50,8 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Wymiary etykiety', value: '38,1 × 12,7 / 50,8 × 12,7 / 69,85 × 31,75 / 101,6 × 76,2 mm' },
    { name: 'Liczba sztuk', value: '4000 / 2500 / 1000 / 400 etykiet w pudełku, zależnie od wymiaru' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6600 (biała, żółta, srebrna); B30-R4400-WT (czarna)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: [...CIAGLE_8591, ...WYKROJONE_8591].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...CIAGLE_8591.map(([pn, , szer, kolor]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${KOLORY_8591_ZENSKIE[kolor]} taśma poliestrowa B-8591 ${szer} mm × 30,48 m`,
      attributes: { Rozmiar: `ciągła ${szer} mm × 30,48 m`, Kolor: KOLORY_8591[kolor], Barwiąca: tasma8591(kolor) },
      availability: 'unavailable' as const,
    })),
    ...WYKROJONE_8591.map(([pn, , wym, szt, kolor]) => ({
      partNumber: pn,
      name: `Brady ${pn} — ${KOLORY_8591_N[kolor]} wykrojona etykieta poliestrowa B-8591 ${wym} mm, ${szt} szt.`,
      attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Kolor: KOLORY_8591[kolor], Barwiąca: tasma8591(kolor) },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Forma materiału i jego wymiary.\n\nTaśma ciągła ma 30,48 m na rolce, a etykiety wykrojone są sprzedawane w pudełkach po 400–4000 sztuk.',
    Kolor: 'Kolor poliestru.\n\nKażdy rozmiar jest dostępny jako biały, czarny, żółty i srebrny.',
    Barwiąca: 'Taśma barwiąca zalecana do danego koloru.\n\nDo białych, żółtych i srebrnych etykiet zaleca się B30-R6600, a do czarnych B30-R4400-WT.',
  },
  faq: [
    { question: 'Czy etykiety B-8591 trzeba zabezpieczać laminatem?', answer: 'Nie. Poliester jest odporny na promieniowanie UV, ścieranie i płyny, więc nadruk termotransferowy zostaje bez osłony. Materiał wytrzymuje na zewnątrz ponad 12 lat.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-8591?', answer: 'Do białych, żółtych i srebrnych etykiet zaleca się B30-R6600, a do czarnych B30-R4400-WT. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
    { question: 'Na jakich powierzchniach trzyma etykieta B-8591?', answer: 'Trwały klej akrylowy wiąże z powierzchniami gładkimi i chropowatymi, a także z tworzywami o niskiej energii powierzchniowej. Zakres temperatur pracy to od −70 do 180 °C.' },
  ],
  applications: ['Oznaczanie urządzeń i komponentów na zewnątrz', 'Etykiety z kodami kreskowymi', 'Znakowanie obiektów i sieci telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// Workhorse — biały poliester B-423 (cps-3069367); bez B33C-3000-430 (przezroczysty, karta niżej)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const WORKHORSE_423: [string, string, string, string, string][] = [
  ['B33-11-423', '133774', '6,35 × 6,35', '15000', '12'],
  ['B33-340-423', '152830', '9,53 × 9,53', '10000', '7'],
  ['B33-343-423', '152844', '12,7 × 5,08', '10000', '5'],
  ['B33-149-423', '133801', '12,7 × 12,7', '5000', '4'],
  ['B33-46-423', '133871', '19,05 × 6,35', '5000', '1'],
  ['B33-1-423', '133788', '19,05 × 6,35', '5000', '4'],
  ['B33-49-423', '133877', '22,86 × 6,35', '5000', '1'],
  ['B33-103-423', '133769', '25,4 × 6,35', '5000', '1'],
  ['B33-3-423', '133852', '25,4 × 9,53', '5000', '3'],
  ['B33-5-423', '143076', '25,4 × 12,7', '5000', '3'],
  ['B33-43-423', '133864', '31,75 × 6,35', '5000', '1'],
  ['B33-29-423', '133845', '31,75 × 9,53', '5000', '2'],
  ['B33-45-423', '133868', '38,1 × 6,35', '5000', '1'],
  ['B33-72-423', '133961', '44,45 × 6,35', '5000', '1'],
  ['B33-53-423', '133882', '50,8 × 12,7', '2500', '1'],
  ['B33-17-423', '143087', '50,8 × 25,4', '1500', '1'],
  ['B33-7-423', '152994', '69,85 × 31,75', '1000', '1'],
  ['B33-18-423', '143081', '76,2 × 25,4', '1500', '1'],
  ['B33-19-423', '133827', '76,2 × 50,8', '500', '1'],
  ['B33-20-423', '152997', '76,2 × 127', '350', '1'],
  ['B33-55-423', '133893', '101,6 × 50,8', '750', '1'],
  ['B33-76-423', '152995', '101,6 × 76,2', '500', '1'],
  ['B33-161-423', '152996', '101,6 × 101,6', '450', '1'],
  ['B33-25-423', '152998', '101,6 × 152,4', '300', '1'],
]

export const bradyB33Workhorse423: Product = {
  ...wspolneB33,
  id: 'brady-b33-53-423',
  slug: 'brady-b33-53-423',
  updatedAt: '2026-11-15',
  name: 'Białe etykiety poliestrowe Brady Workhorse B-423 do drukarki i3300',
  seoTitle: 'Brady Workhorse B-423 — białe etykiety poliestrowe, i3300',
  seoDescription: 'Białe etykiety poliestrowe Brady Workhorse B-423 do i3300: płytki PCB, tabliczki, kody kreskowe, 24 rozmiary. PN: B33-53-423, B33-76-423, B33-11-423.',
  shortDescription: 'Brady Workhorse B-423 to białe etykiety z błyszczącego poliestru w 24 rozmiarach, od 6,35 × 6,35 do 101,6 × 152,4 mm. Do drukarki Brady i3300.',
  description: 'Workhorse B-423 jest białym poliestrem, cienkim (0,076 mm) i lśniącym. Klej akrylowy wiąże trwale z podłożem gładkim. Etykiety ułatwiają identyfikację płytek PCB i elementów elektronicznych. Drukuje się na nich także kody kreskowe, tabliczki znamionowe i oznaczenia paneli słonecznych. Trzy formaty opisano jako przydatne w laboratorium, na butelkach, szalkach i kolbach.\n\nDo wyboru są 24 formaty. Najmniejszy ma 6,35 mm z każdej strony, największy ma długość 152,4 mm. Rolki zawierają od 300 do 15 000 sztuk. Drobne etykiety leżą obok siebie w kilku rzędach, a drobiazg 6,35 mm aż w dwunastu. Liczbę rzędów pokazuje tabela. Dla małych formatów oznacza to wygodną, gęstą rolkę.\n\nMateriał pracuje od −70 do 110 °C. Odporność obejmuje wilgoć, korozję, UV, chemikalia, ścieranie i wpływ pogody. Uznanie UL, akceptacja CSA i brak halogenów (DIN VDE 0472-815) dotyczą koloru białego. Klej ma opis agresywnego, a materiał zaliczono do odpornych na wysoką temperaturę i do trudnych warunków pracy. Zaleca się taśmę B30-R6000, dobieraną osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-workhorse-white-polyester-labels-cps-3069367',
  images: [
    '/images/products/brady/b33-53-423.png',
    '/images/products/brady/b33-3-423.png',
    '/images/products/brady/b33-340-423.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-53-423 na uchwycie z białymi etykietami poliestrowymi 50,8 × 12,7 mm',
    'Rolka Brady B33-3-423 z białymi etykietami poliestrowymi 25,4 × 9,53 mm w trzech rzędach',
    'Rolka Brady B33-340-423 z drobnymi białymi etykietami poliestrowymi 9,53 × 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Workhorse B-423' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 do 101,6 × 152,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 300 do 15 000 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja), DIN VDE 0472 część 815 (bez halogenów); dotyczy koloru białego' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Uwagi o zgodności', value: 'B33-343-423: tylko i5300' },
    { name: 'Numery artykułów Brady', value: WORKHORSE_423.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WORKHORSE_423.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa B-423 ${wym} mm, ${szt} szt.${dopisekDrukarki(pn)}`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy, Drukarka: drukarka(pn) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 101,6 × 152,4 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 6,35 × 6,35 mm leżą w dwunastu rzędach, a duże formaty w jednym.',
    Drukarka: 'Drukarki B33, w których działa dany numer.\n\nEtykieta 12,7 × 5,08 mm (B33-343-423) pasuje tylko do i5300. Pozostałe rozmiary drukują i3300, i4311 oraz i5300.',
  },
  faq: [
    { question: 'Do czego służą białe etykiety Workhorse B-423?', answer: 'Do oznaczania płytek drukowanych i komponentów, tabliczek znamionowych, kodów kreskowych oraz paneli fotowoltaicznych. Trzy rozmiary mają też opis zastosowania na butelkach, szalkach i kolbach laboratoryjnych.' },
    { question: 'Jakie atesty mają etykiety B-423?', answer: 'Materiał ma znak UL Recognised i akceptację CSA. Spełnia też wymagania DIN VDE 0472 część 815 dla materiałów bez halogenów. Atesty dotyczą białego koloru.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-423?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Oznaczanie płytek drukowanych i komponentów', 'Tabliczki znamionowe i etykiety z kodami kreskowymi', 'Identyfikacja paneli fotowoltaicznych'],
}

// ---------------------------------------------------------------------------
// Etykiety poliestrowe laboratoryjne i kriogeniczne B-8423, B-488, B-461 (cps-3079473); bez B33-G2-8423YL (tylko BBP33 i i5300)
// ---------------------------------------------------------------------------

// [PN, nr art., materiał, wymiar etykiety, sztuk w pudełku, taśma barwiąca]
const LAB_POLIESTER: [string, string, string, string, string, string][] = [
  ['B33-600-8423', '361697', 'B-8423', '38,1 × 19,05', '2500', 'B30-R6000'],
  ['B33-104-8423', '361655', 'B-8423', '38,1 × 6,35', '2500', 'B30-R6000'],
  ['B33-13-8423', '361626', 'B-8423', '31,75 × 6,35', '2500', 'B30-R6000'],
  ['B33-101-8423', '361637', 'B-8423', '19,05 × 6,35', '2500', 'B30-R6000'],
  ['B33-12-8423', '361623', 'B-8423', '12,7 × 11,1', '2500', 'B30-R6000'],
  ['B33-635-488', '361687', 'B-488', '48,26 × 6,35', '2000', 'B30-R4300'],
  ['B33-616-488', '361676', 'B-488', '22,86 × 19,05', '3000', 'B30-R4300'],
  ['B33-617-488', '361677', 'B-488', '22,86 × 22,86', '3000', 'B30-R4300'],
  ['B33-642-461AW', '361691', 'B-461', '57,15 × 19,05', '2000', 'B30-R4300'],
  ['B33-636-461AW', '361688', 'B-461', '48,26 × 25,4', '2000', 'B30-R4300'],
  ['B33-650-461AW', '361693', 'B-461', '88,9 × 38,1', '2000', 'B30-R4300'],
]

export const bradyB33LabPoliester: Product = {
  ...wspolneB33,
  id: 'brady-b33-600-8423',
  slug: 'brady-b33-600-8423',
  name: 'Poliestrowe etykiety laboratoryjne i kriogeniczne Brady B-8423, B-488 i B-461 do drukarki i3300',
  seoTitle: 'Brady B-8423, B-488, B-461 — etykiety laboratoryjne, i3300',
  seoDescription: 'Etykiety poliestrowe Brady do i3300 na probówki, fiolki, szalki i płytki wielodołkowe, odporne na −196 °C i autoklaw. PN: B33-600-8423, B33-617-488.',
  shortDescription: 'Brady B33-600-8423 i 10 innych etykiet poliestrowych na probówki, fiolki, szalki i płytki drukowane, z trzech materiałów o różnej odporności na zimno i ciepło. Do drukarki Brady i3300.',
  description: 'W tej rodzinie są trzy matowe lub satynowe poliestry z trwałym klejem akrylowym, drukowane termotransferem. B-8423 jest satynowy i ma opis zastosowania na płytkach drukowanych z elementami przewlekanymi. B-488 jest matowy i przeznaczony do naczyń laboratoryjnych: butelek, szalek, kolb i płytek wielodołkowych. B-461 jest matowy, samolaminujący i owija się go wokół probówek, fiolek kriogenicznych oraz szkiełek.\n\nMateriał B-8423 (0,071 mm) znosi od −80 do 110 °C. Materiał B-488 (0,0914 mm) znosi od −40 do 160 °C i wymaga naklejania w temperaturze od 10 °C. Najcieńszy B-461 (0,048 mm) wytrzymuje od −196 do 110 °C, także w ciekłym azocie i w kąpieli wodnej 100 °C. Wszystkie trzy materiały można poddawać autoklawowaniu i zamrażaniu. Etykiety B-8423 leżą na rolce w dwóch do siedmiu rzędach.\n\nJedenaście rozmiarów mieści się między 12,7 × 11,1 a 88,9 × 38,1 mm. Pudełko zawiera 2000, 2500 albo 3000 etykiet. B-8423 drukuje taśma barwiąca B30-R6000, a pozostałe dwa materiały B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/polyester-labels-for-bbp33-i3300-printers-cps-3079473',
  images: [
    '/images/products/brady/b33-600-8423.png',
    '/images/products/brady/b33-617-488.png',
    '/images/products/brady/b33-104-8423.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-600-8423 na uchwycie z białymi satynowymi etykietami poliestrowymi 38,1 × 19,05 mm',
    'Rolka Brady B33-617-488 z białymi matowymi etykietami poliestrowymi 22,86 × 22,86 mm',
    'Rolka Brady B33-104-8423 z wąskimi białymi etykietami poliestrowymi 38,1 × 6,35 mm w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 w pudełku, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-8423, B-488, B-461 (zależnie od wersji)' },
    { name: 'Typ materiału', value: 'poliester, w tym samolaminujący (B-461)' },
    { name: 'Wykończenie', value: 'satynowe (B-8423), matowe (B-488, B-461)' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,071 mm (B-8423); 0,0914 mm (B-488); 0,048 mm (B-461)' },
    { name: 'Temperatura pracy', value: 'od −80 do 110 °C (B-8423); od −40 do 160 °C (B-488); od −196 do 110 °C (B-461)' },
    { name: 'Temperatura naklejania', value: 'od 10 °C (B-488)' },
    { name: 'Odporność', value: 'autoklaw i zamrażarka; B-461 także kąpiel wodna 100 °C i ciekły azot' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 11,1 do 88,9 × 38,1 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '2000 / 2500 / 3000 etykiet w pudełku, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (B-8423); B30-R4300 (B-488 i B-461)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: LAB_POLIESTER.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: LAB_POLIESTER.map(([pn, , mat, wym, szt, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa ${mat} ${wym} mm, ${szt} szt.`,
    attributes: { Materiał: mat, Rozmiar: `${wym} mm, ${szt} szt.`, Barwiąca: tasma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Materiał: 'Oznaczenie materiału Brady.\n\nB-8423 jest satynowy, B-488 matowy do naczyń laboratoryjnych, a B-461 samolaminujący do probówek i fiolek kriogenicznych.',
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk w pudełku.\n\nNajmniejsza etykieta ma 12,7 × 11,1 mm, a największa 88,9 × 38,1 mm.',
    Barwiąca: 'Taśma barwiąca zalecana do danego materiału.\n\nDo B-8423 zaleca się B30-R6000, a do B-488 i B-461 taśmę B30-R4300.',
  },
  faq: [
    { question: 'Którego materiału użyć do probówek i fiolek kriogenicznych?', answer: 'Do tego celu służy samolaminujący B-461. Wytrzymuje od −196 do 110 °C, w tym ciekły azot i kąpiel wodną 100 °C. Etykieta owija się wokół probówki.' },
    { question: 'Czym różni się B-488 od B-8423?', answer: 'B-488 jest matowy, grubszy i znosi do 160 °C. Jest przeznaczony do butelek, szalek i kolb. B-8423 jest satynowy i pracuje od −80 do 110 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do tych etykiet?', answer: 'Do B-8423 zaleca się B30-R6000, a do B-488 i B-461 taśmę B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Etykiety na probówki, fiolki kriogeniczne i szkiełka', 'Identyfikacja butelek, szalek, kolb i płytek wielodołkowych', 'Oznaczanie płytek drukowanych z elementami przewlekanymi'],
}

// ---------------------------------------------------------------------------
// Biały poliester ToughBond B-483A z klejem kauczukowym (cps-3069395)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const TOUGHBOND_483: [string, string, string, string, string][] = [
  ['B33-149-483', '133806', '12,7 × 12,7', '5000', '4'],
  ['B33-5-483', '143075', '25,4 × 12,7', '5000', '3'],
  ['B33-17-483', '143084', '50,8 × 25,4', '1500', '1'],
  ['B33-7-483', '133965', '69,85 × 31,75', '1000', '1'],
  ['B33-18-483', '143079', '76,2 × 25,4', '1500', '1'],
  ['B33-19-483', '142956', '76,2 × 50,8', '500', '1'],
  ['B33-55-483', '133897', '101,6 × 50,8', '750', '1'],
  ['B33-76-483', '152865', '101,6 × 76,2', '500', '1'],
]

export const bradyB33ToughBond483: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-483',
  slug: 'brady-b33-17-483',
  name: 'Białe etykiety poliestrowe Brady ToughBond B-483A z klejem kauczukowym do drukarki i3300',
  seoTitle: 'Brady ToughBond B-483A — etykiety z klejem kauczukowym, i3300',
  seoDescription: 'Białe etykiety poliestrowe Brady ToughBond B-483A do i3300: klej kauczukowy, metal i tworzywa, od −40 do 120 °C. PN: B33-17-483, B33-7-483, B33-76-483.',
  shortDescription: 'Brady ToughBond B-483A to białe etykiety z błyszczącego poliestru z bardzo mocnym klejem kauczukowym, w ośmiu rozmiarach. Do drukarki Brady i3300.',
  description: 'ToughBond B-483A to biały poliester z połyskiem. Jego trwały klej kauczukowy odznacza się bardzo wysoką przyczepnością. Mocuje się do podłoży gładkich, chropowatych i malowanych proszkowo, do metalu z fakturą oraz do plastików trudnych do oklejania. Etykiety identyfikują wyroby, sprzęt i komponenty, a także instalacje elektryczne i telekomunikacyjne. Znakuje się nimi towar w magazynie i przy inwentaryzacji.\n\nKarta obejmuje osiem formatów. Najdrobniejszy jest kwadrat o boku 12,7 mm, a jego pięć tysięcy leży na rolce w czterech rzędach. Największy wykrój daje pięćset sztuk na rolkę. Wszystkie etykiety mają kształt prostokąta. Wykrój w kształcie wąskiego prostokąta, o szerokości 25,4 mm, biegnie w trzech rzędach, a pozostałe formaty pojedynczo.\n\nFolia (0,102 mm) działa od −40 do 120 °C. Jest odporna na korozję, wilgoć, UV, pogodę, ścieranie i chemikalia. Znak UL Recognised oraz akceptacja CSA potwierdzają jej jakość. Do cech zalicza się agresywny klej, odporność na ciepło i na niskie temperatury. Taśmę barwiącą B30-R6000 poleca się do nadruku.',
  sameAs: 'https://www.brady.eu/labels/b33-series-white-polyester-permanent-rubber-based-adhesive-labels-cps-3069395',
  images: [
    '/images/products/brady/b33-17-483.png',
    '/images/products/brady/b33-5-483.png',
    '/images/products/brady/b33-55-483.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-483 na uchwycie z białymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady B33-5-483 z białymi etykietami poliestrowymi 25,4 × 12,7 mm w trzech rzędach',
    'Rolka Brady B33-55-483 z białymi etykietami poliestrowymi 101,6 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-483A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 12,7 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 500 do 5000 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: TOUGHBOND_483.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TOUGHBOND_483.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa B-483A ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 12,7 × 12,7 mm, a największa 101,6 × 76,2 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 12,7 mm leżą w czterech rzędach, a 25,4 × 12,7 mm w trzech.',
  },
  faq: [
    { question: 'Na jakie powierzchnie nadają się etykiety ToughBond B-483A?', answer: 'Kauczukowy klej wiąże z powierzchniami gładkimi, chropowatymi i malowanymi proszkowo. Trzyma się także metali o fakturze i tworzyw o niskiej energii powierzchniowej.' },
    { question: 'W jakich temperaturach pracuje B-483A?', answer: 'Od −40 do 120 °C. Poliester ma znak UL Recognised i akceptację CSA.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-483A?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Identyfikacja wyrobów i urządzeń na trudnych powierzchniach', 'Etykiety z kodami kreskowymi i numerami inwentarzowymi', 'Oznaczanie instalacji elektrycznych i telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// PermaShield B-423 — etykieta z laminatem B-966 (cps-4578483)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, wymiar laminatu, sztuk, rzędów na rolce]
const PERMASHIELD_423: [string, string, string, string, string, string][] = [
  ['B33-22-423', '152875', '31,75 × 19,05', '38,1 × 25,4', '2000', '2'],
  ['B33-23-423', '152874', '50,8 × 25,4', '57,15 × 31,75', '800', '1'],
  ['B33-24-423', '152876', '69,85 × 44,45', '76,2 × 50,8', '500', '1'],
]

export const bradyB33PermaShield423: Product = {
  ...wspolneB33,
  id: 'brady-b33-24-423',
  slug: 'brady-b33-24-423',
  name: 'Białe etykiety poliestrowe z laminatem Brady PermaShield B-423 do drukarki i3300',
  seoTitle: 'Brady PermaShield B-423 — etykiety poliestrowe z laminatem, i3300',
  seoDescription: 'Brady PermaShield B-423 do i3300: błyszczący biały poliester z przezroczystym laminatem B-966, od −70 do 110 °C. PN: B33-24-423, B33-23-423, B33-22-423.',
  shortDescription: 'Brady PermaShield B-423 to biała etykieta poliestrowa z dołączonym przezroczystym laminatem, w trzech rozmiarach, bez halogenów. Do drukarki Brady i3300.',
  description: 'PermaShield łączy w jednym wykroju dwa elementy: białą, błyszczącą etykietę z poliestru B-423 oraz przezroczysty laminat poliestrowy B-966, położony pod etykietą. Laminat jest wykonany z poliestru, tak jak etykieta. Zestaw drukuje się termotransferem, a po wydruku laminat osłania nadruk. Zestaw oznacza płytki drukowane i komponenty, tabliczki znamionowe, kody kreskowe oraz sprzęt w magazynie i podczas kontroli.\n\nDo wyboru są trzy rozmiary etykiety. Najmniejszy leży w dwóch rzędach i mieści 2000 sztuk, średni 800 sztuk, a największy 500 sztuk. Laminat zawsze przewyższa etykietę o 6,35 mm w obu kierunkach, dzięki czemu obejmuje całe pole nadruku. Jego wymiary podaje kolumna w tabeli. Największa etykieta mierzy 69,85 × 44,45 mm.\n\nCały zestaw ma grubość 0,15 mm. Klej jest akrylowy, a poliester działa w przedziale od −70 do 110 °C. Autoklaw i mrożenie też są dozwolone. Zgodność z DIN VDE 0472-815 oznacza brak halogenów. Materiał ma znak UL oraz akceptację CSA. Do druku trzeba mieć taśmę barwiącą B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permashield-glossy-white-polyester-labels-cps-4578483',
  images: [
    '/images/products/brady/b33-24-423.png',
    '/images/products/brady/b33-23-423.png',
    '/images/products/brady/b33-22-423.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-24-423 na uchwycie z białymi etykietami poliestrowymi PermaShield 69,85 × 44,45 mm',
    'Rolka Brady B33-23-423 z białymi etykietami poliestrowymi PermaShield 50,8 × 25,4 mm',
    'Rolka Brady B33-22-423 z białymi etykietami poliestrowymi PermaShield 31,75 × 19,05 mm w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 z przezroczystym laminatem na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaShield B-423 z laminatem B-966' },
    { name: 'Typ materiału', value: 'poliester z nakładką z poliestru' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,15 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 110 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw i zamrażarka' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '31,75 × 19,05 / 50,8 × 25,4 / 69,85 × 44,45 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '2000 / 800 / 500 zestawów na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL, CSA (akceptacja), DIN VDE 0472 część 815 (bez halogenów)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (wymagana do druku)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD_423.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD_423.map(([pn, , wym, lam, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta poliestrowa PermaShield B-423 ${wym} mm z laminatem ${lam} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Laminat: `${lam} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba zestawów na rolce.\n\nEtykiety mają od 31,75 × 19,05 do 69,85 × 44,45 mm.',
    Laminat: 'Wymiary przezroczystego laminatu B-966, który chroni nadruk.\n\nLaminat jest większy od etykiety o 6,35 mm w obu kierunkach.',
  },
  faq: [
    { question: 'Z czego składa się zestaw PermaShield?', answer: 'Z białej etykiety poliestrowej B-423 do nadruku i przezroczystego laminatu poliestrowego B-966, położonego pod etykietą. Laminat zakrywa nadruk i go chroni.' },
    { question: 'Czy do druku PermaShield potrzebna jest taśma barwiąca?', answer: 'Tak. Do druku wymagana jest taśma barwiąca B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
    { question: 'Jakie atesty ma PermaShield B-423?', answer: 'Materiał ma znak UL i akceptację CSA oraz spełnia DIN VDE 0472 część 815 dla materiałów bez halogenów. Pracuje od −70 do 110 °C.' },
  ],
  applications: ['Oznaczanie płytek drukowanych i komponentów', 'Tabliczki znamionowe i etykiety z kodami kreskowymi', 'Identyfikacja sprzętu z ochroną nadruku laminatem'],
}

// ---------------------------------------------------------------------------
// Etykiety kriogeniczne B-494 z kolorowym paskiem (cps-4359551)
// ---------------------------------------------------------------------------

const KOLORY_494: Record<string, string> = { GN: 'Zielony', RD: 'Czerwony', PK: 'Różowy', YL: 'Żółty', OR: 'Pomarańczowy', BL: 'Niebieski' }
const KOLORY_494_N: Record<string, string> = { GN: 'zielonym', RD: 'czerwonym', PK: 'różowym', YL: 'żółtym', OR: 'pomarańczowym', BL: 'niebieskim' }

// [PN, nr art., wymiar (etykiety), sztuk, kolor]
const KRIO_494: [string, string, string, string, string][] = [
  ['B33-302-494-BL', '307024', '41,28 × 15,24', '1500', 'BL'],
  ['B33-302-494-GN', '307023', '41,28 × 15,24', '1500', 'GN'],
  ['B33-302-494-OR', '307022', '41,28 × 15,24', '1500', 'OR'],
  ['B33-302-494-PK', '307021', '41,28 × 15,24', '1500', 'PK'],
  ['B33-302-494-RD', '307020', '41,28 × 15,24', '1500', 'RD'],
  ['B33-302-494-YL', '307019', '41,28 × 15,24', '1500', 'YL'],
  ['B33-304-494-BL', '307012', '25,4 × 9,53 + koło Ø 9,53', '1500', 'BL'],
  ['B33-304-494-GN', '307011', '25,4 × 9,53 + koło Ø 9,53', '1500', 'GN'],
  ['B33-304-494-OR', '307010', '25,4 × 9,53 + koło Ø 9,53', '1500', 'OR'],
  ['B33-304-494-PK', '307009', '25,4 × 9,53 + koło Ø 9,53', '1500', 'PK'],
  ['B33-304-494-RD', '307008', '25,4 × 9,53 + koło Ø 9,53', '1500', 'RD'],
  ['B33-304-494-YL', '307007', '25,4 × 9,53 + koło Ø 9,53', '1500', 'YL'],
  ['B33-310-494-BL', '307006', '25,4 × 12,7', '2500', 'BL'],
  ['B33-310-494-GN', '307005', '25,4 × 12,7', '2500', 'GN'],
  ['B33-310-494-OR', '307004', '25,4 × 12,7', '2500', 'OR'],
  ['B33-310-494-PK', '307003', '25,4 × 12,7', '2500', 'PK'],
  ['B33-310-494-RD', '307002', '25,4 × 12,7', '2500', 'RD'],
  ['B33-310-494-YL', '307001', '25,4 × 12,7', '2500', 'YL'],
]

export const bradyB33Kriogeniczne494: Product = {
  ...wspolneB33,
  id: 'brady-b33-302-494-gn',
  slug: 'brady-b33-302-494-gn',
  name: 'Kriogeniczne etykiety poliestrowe z kolorowym paskiem Brady B-494 do drukarki i3300',
  seoTitle: 'Brady B-494 — etykiety kriogeniczne na probówki do drukarki i3300',
  seoDescription: 'Etykiety poliestrowe Brady B-494 do i3300 na probówki i fiolki: ciekły azot do −196 °C, sześć kolorów paska. PN: B33-302-494-GN, B33-304-494-RD, B33-310-494-YL.',
  shortDescription: 'Brady B-494 to poliestrowe etykiety na probówki i fiolki z kolorowym paskiem, odporne na ciekły azot, w trzech formatach i sześciu kolorach. Do drukarki Brady i3300.',
  description: 'Brady B-494 to poliestrowa etykieta do identyfikowania próbek i śledzenia ich losu. Zostaje na swoim miejscu, a jej treść pozostaje czytelna nawet po zetknięciu z chemikaliami lub po zanurzeniu w ciekłym azocie. Kolorowy kod jest nadrukowany pod powierzchnią folii, więc nie blaknie ani nie rozmazuje się, a próbkę łatwo rozpoznać długo po wydruku. Etykieta ma kolorowy pasek nad białym polem opisu. Materiał opisano jako przeznaczony do niskich temperatur i do przechowywania kriogenicznego.\n\nKarta obejmuje trzy formaty w sześciu kolorach paska: zielonym, czerwonym, różowym, żółtym, pomarańczowym i niebieskim. Szersza etykieta (41,28 mm) pasuje do probówek 8 mL, a węższa do probówek 2 mL. Dotyczy to między innymi probówek wirówkowych, stożkowych, PCR i Eppendorf. Trzeci format to pasek wraz z kolorowym kółkiem Ø 9,53 mm naklejanym na wieczko fiolki.\n\nGrubość folii to 0,0762 mm, a profil jest niski. Materiał znosi temperatury od −196 do 70 °C, mrożenie i kąpiel wodną 100 °C. Odpiera chemikalia, skrajnie niskie i wysokie temperatury oraz rozmazanie. Dobór taśmy: B30-R6400, kupowana osobno.',
  sameAs: 'https://www.brady.eu/labels/polyester-labels-for-bbp33-i3300-printer-cps-4359551',
  images: [
    '/images/products/brady/b33-302-494-gn.png',
    '/images/products/brady/b33-304-494-rd.png',
    '/images/products/brady/b33-302-494-bl.png',
  ],
  imageDescriptions: [
    'Dwie etykiety Brady B33-302-494-GN z zielonym paskiem i białym polem nadruku na podkładzie',
    'Etykiety Brady B33-304-494-RD z czerwonym paskiem i czerwonymi kółkami na wieczka fiolek',
    'Dwie etykiety Brady B33-302-494-BL z niebieskim paskiem i białym polem nadruku na podkładzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 w pudełku, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-494' },
    { name: 'Typ materiału', value: 'poliester kriogeniczny, nadruk pod powierzchnią folii' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 70 °C' },
    { name: 'Odporność', value: 'ciekły azot, zamrażarka, kąpiel wodna 100 °C, chemikalia, rozmazanie' },
    { name: 'Kolor', value: 'biały z paskiem: zielonym, czerwonym, różowym, żółtym, pomarańczowym lub niebieskim' },
    { name: 'Wymiary etykiety', value: '41,28 × 15,24 / 25,4 × 12,7 / 25,4 × 9,53 mm z kółkiem Ø 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '1500 / 2500 etykiet w pudełku, zależnie od wersji' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: KRIO_494.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: KRIO_494.map(([pn, , wym, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta kriogeniczna z ${KOLORY_494_N[kolor]} paskiem ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm`, Kolor: KOLORY_494[kolor], Sztuk: szt },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość).\n\nFormat 41,28 × 15,24 mm jest do probówek 8 mL, a pozostałe do probówek 2 mL. Wersja z kółkiem ma dodatkowy znacznik Ø 9,53 mm na wieczko.',
    Kolor: 'Kolor paska nad białym polem opisu.\n\nKażdy format jest dostępny w sześciu kolorach: zielonym, czerwonym, różowym, żółtym, pomarańczowym i niebieskim.',
    Sztuk: 'Liczba etykiet w pudełku.\n\nFormat 25,4 × 12,7 mm ma 2500 sztuk, a pozostałe po 1500.',
  },
  faq: [
    { question: 'Czy etykiety B-494 nadają się do ciekłego azotu?', answer: 'Tak. Materiał pracuje od −196 do 70 °C i wytrzymuje mrożenie oraz kąpiel wodną 100 °C. Etykieta pozostaje przyklejona i czytelna.' },
    { question: 'Dlaczego kolorowy kod etykiety B-494 nie blaknie?', answer: 'Nadruk leży pod powierzchnią folii. Kolor nie blaknie ani się nie rozmazuje, więc próbkę można rozpoznać długo po wydruku.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-494?', answer: 'Zaleca się taśmę barwiącą B30-R6400. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Identyfikacja próbek w ciekłym azocie i zamrażarkach', 'Etykiety na probówki wirówkowe, stożkowe, PCR i Eppendorf', 'Kodowanie kolorem wieczek fiolek'],
}

// ---------------------------------------------------------------------------
// Ekologiczny matowy biały poliester B-618 (cps-4578484)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const EKO_618: [string, string, string, string, string][] = [
  ['B33-12-618', '153241', '12,7 × 11,1', '10000', '5'],
  ['B33-5-618', '153242', '25,4 × 12,7', '7000', '3'],
  ['B33-37-618', '153243', '38,1 × 12,7', '5000', '2'],
  ['B33-6-618', '153245', '38,1 × 19,05', '3300', '2'],
  ['B33-53-618', '153244', '50,8 × 12,7', '2500', '1'],
  ['B33-17-618', '153246', '50,8 × 25,4', '1500', '1'],
  ['B33-7-618', '153248', '69,85 × 31,75', '1000', '1'],
  ['B33-18-618', '153247', '76,2 × 25,4', '1500', '1'],
  ['B33-19-618', '153249', '76,2 × 50,8', '700', '1'],
  ['B33-55-618', '153250', '101,6 × 50,8', '750', '1'],
  ['B33-76-618', '153251', '101,6 × 76,2', '500', '1'],
]

export const bradyB33Eko618: Product = {
  ...wspolneB33,
  id: 'brady-b33-7-618',
  slug: 'brady-b33-7-618',
  name: 'Ekologiczne matowe białe etykiety poliestrowe Brady B-618 do drukarki i3300',
  seoTitle: 'Brady B-618 — matowe etykiety poliestrowe z recyklingu, i3300',
  seoDescription: 'Matowe białe etykiety poliestrowe Brady B-618 do i3300 z folii z recyklingu: tabliczki, kody kreskowe, 11 rozmiarów. PN: B33-7-618, B33-53-618, B33-76-618.',
  shortDescription: 'Brady B-618 to matowe białe etykiety z folii poliestrowej z dodatkiem PET z recyklingu, w 11 rozmiarach, na tabliczki i kody kreskowe. Do drukarki Brady i3300.',
  description: 'Etykiety Brady B-618 wykonano z matowego, białego poliestru. W folii znajduje się PET pochodzący z recyklingu. Materiał ma trwały klej akrylowy i dobrze przyjmuje kody kreskowe oraz grafikę, więc trafia na tabliczki znamionowe i do znakowania ogólnego. Oznacza też płytki drukowane po zakończeniu produkcji oraz sprzęt w inwentaryzacji. Materiał zaliczono do przeznaczonych do trudnych warunków pracy, a klej do trwałych. Wykroje są prostokątne.\n\nJedenaście formatów rozpoczyna się od drobiazgu o boku 12,7 mm, którego 10 000 sztuk leży na rolce w pięciu rzędach. Na przeciwnym końcu jest wykrój o szerokości 101,6 mm. Dwa formaty o szerokości 38,1 mm układają się w dwóch rzędach, a jeden z wąskich pasków w trzech rzędach i w liczbie 7000 sztuk na rolce.\n\nGrubość folii to 0,0711 mm, a przedział pracy to od −70 do 120 °C. Powierzchnia jest odporna na korozję, wilgoć i chemikalia. Materiał ma znak UL oraz cUL Recognised. Nadruk wymaga osobno kupowanej taśmy barwiącej B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-sustainable-matt-white-polyester-labels-cps-4578484',
  images: [
    '/images/products/brady/b33-7-618.png',
    '/images/products/brady/b33-76-618.png',
    '/images/products/brady/b33-12-618.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-7-618 na uchwycie z matowymi białymi etykietami poliestrowymi 69,85 × 31,75 mm',
    'Rolka Brady B33-76-618 z dużymi matowymi białymi etykietami poliestrowymi 101,6 × 76,2 mm',
    'Rolka Brady B33-12-618 z drobnymi matowymi białymi etykietami poliestrowymi 12,7 × 11,1 mm w pięciu rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-618' },
    { name: 'Typ materiału', value: 'poliester z dodatkiem PET z recyklingu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0711 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 11,1 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 500 do 10 000 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (wymagana do druku)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: EKO_618.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: EKO_618.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała matowa etykieta poliestrowa B-618 ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 12,7 × 11,1 mm, a największa 101,6 × 76,2 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 11,1 mm leżą w pięciu rzędach, a duże formaty w jednym.',
  },
  faq: [
    { question: 'Co oznacza, że etykiety B-618 są ekologiczne?', answer: 'Folia poliestrowa zawiera PET pochodzący z recyklingu. Etykieta jest matowa, biała i ma trwały klej akrylowy.' },
    { question: 'Do czego nadają się matowe etykiety B-618?', answer: 'Do tabliczek znamionowych i znakowania ogólnego z kodami kreskowymi oraz grafiką. Używa się ich także do oznaczania płytek drukowanych po procesie produkcji.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-618?', answer: 'Do druku wymagana jest taśma barwiąca B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Tabliczki znamionowe i etykiety z kodami kreskowymi', 'Oznaczanie płytek drukowanych po procesie produkcji', 'Znakowanie sprzętu i inwentaryzacja'],
}

// ---------------------------------------------------------------------------
// Elastyczny biały poliester ToughBond B-484A z klejem kauczukowym (cps-3069372)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const ELASTYCZNY_484: [string, string, string, string, string][] = [
  ['B33-125-484', '133786', '22,86 × 12,7', '1500', '1'],
  ['B33-5-484', '133892', '25,4 × 12,7', '5000', '3'],
  ['B33-136-484', '133787', '38,1 × 19,05', '1500', '1'],
  ['B33-17-484', '133816', '50,8 × 25,4', '1500', '1'],
  ['B33-18-484', '133824', '76,2 × 25,4', '1500', '1'],
  ['B33-19-484', '133830', '76,2 × 50,8', '500', '1'],
  ['B33-55-484', '153114', '101,6 × 50,8', '750', '1'],
  ['B33-161-484', '153115', '101,6 × 101,6', '350', '1'],
]

export const bradyB33Elastyczny484: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-484',
  slug: 'brady-b33-17-484',
  name: 'Elastyczne białe etykiety poliestrowe Brady ToughBond B-484A z klejem kauczukowym do drukarki i3300',
  seoTitle: 'Brady B-484A — elastyczne etykiety poliestrowe do drukarki i3300',
  seoDescription: 'Elastyczne białe etykiety poliestrowe Brady B-484A do i3300: klej kauczukowy, powierzchnie zakrzywione. PN: B33-17-484, B33-19-484, B33-161-484.',
  shortDescription: 'Brady B-484A to elastyczne białe etykiety poliestrowe z mocnym klejem kauczukowym, do oznaczania elementów w szafach sterowniczych, w ośmiu rozmiarach. Do drukarki Brady i3300.',
  description: 'ToughBond B-484A to cienki i giętki biały poliester z połyskiem. Trwały klej kauczukowy mocno trzyma na metalu z fakturą i na tworzywach o małej energii powierzchniowej. Giętka folia układa się na krawędziach, pod kątem i na łukach, a jej niski profil ledwo wystaje nad podłoże. Etykiety znakują wnętrze szaf, w tym silniki napędowe, elektrozawory, łączniki, sterowniki PLC, przekaźniki, szyny DIN i płyty montażowe.\n\nOsiem rozmiarów zaczyna się od wąskiego paska o szerokości 22,86 mm, a kończy na kwadracie o boku 101,6 mm. Kolejny pasek, szeroki na 25,4 mm, mieści się na rolce w liczbie 5000 sztuk, w trzech rzędach. Największy kwadrat daje 350 sztuk na rolkę.\n\nGrubość folii to 0,076 mm. Zachowuje sprawność od −40 do 120 °C. Nie boi się korozji, wilgoci, UV, pogody ani chemikaliów. Wśród cech wymieniono agresywny klej i odporność na ciepło. Materiał ma znak UL Recognised. Nadruk powstaje z taśmy barwiącej B30-R6000, którą kupuje się osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-flexible-white-polyester-permanent-rubber-based-adhesive-labels-cps-3069372',
  images: [
    '/images/products/brady/b33-125-484.png',
    '/images/products/brady/b33-136-484.png',
    '/images/products/brady/b33-125-484-2.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-125-484 na uchwycie z wąskimi białymi etykietami poliestrowymi 22,86 × 12,7 mm',
    'Rolka Brady B33-136-484 z białymi etykietami poliestrowymi 38,1 × 19,05 mm',
    'Arkusz z trzema białymi etykietami poliestrowymi Brady B-484A o zaokrąglonych rogach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-484A' },
    { name: 'Typ materiału', value: 'elastyczny poliester, niski profil' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 22,86 × 12,7 do 101,6 × 101,6 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 350 do 5000 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ELASTYCZNY_484.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ELASTYCZNY_484.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała elastyczna etykieta poliestrowa B-484A ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 22,86 × 12,7 mm, a największa 101,6 × 101,6 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 25,4 × 12,7 mm leżą w trzech rzędach, a pozostałe formaty w jednym.',
  },
  faq: [
    { question: 'Kiedy wybrać elastyczny poliester B-484A?', answer: 'Gdy etykieta trafia na krawędź, kąt albo zakrzywioną powierzchnię, na przykład na płytę montażową, szynę DIN lub obudowę przekaźnika. Cienka folia dobrze układa się na takim podłożu.' },
    { question: 'Na jakich powierzchniach trzyma etykieta B-484A?', answer: 'Kauczukowy klej wiąże z powierzchniami gładkimi i chropowatymi, z metalem o fakturze oraz z tworzywami o niskiej energii powierzchniowej. Temperatura pracy wynosi od −40 do 120 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-484A?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Oznaczanie elementów w szafach sterowniczych: szyny DIN, przekaźniki, sterowniki PLC', 'Etykiety na zakrzywionych i skośnych powierzchniach', 'Identyfikacja silników napędowych, łączników i elektrozaworów'],
}

// ---------------------------------------------------------------------------
// Przezroczysty poliester ToughBond B-432 z klejem akrylowym (cps-3069368)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const PRZEZROCZYSTY_432: [string, string, string, string, string][] = [
  ['B33-149-432', '133803', '12,7 × 12,7', '5000', '4'],
  ['B33-17-432', '143003', '50,8 × 25,4', '1500', '1'],
  ['B33-18-432', '143004', '76,2 × 25,4', '1500', '1'],
  ['B33-19-432', '143054', '76,2 × 50,8', '500', '1'],
]

export const bradyB33Przezroczysty432: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-432',
  slug: 'brady-b33-17-432',
  name: 'Przezroczyste etykiety poliestrowe Brady ToughBond B-432 z klejem akrylowym do drukarki i3300',
  seoTitle: 'Brady B-432 — przezroczyste etykiety poliestrowe, i3300',
  seoDescription: 'Przezroczyste etykiety poliestrowe Brady ToughBond B-432 do i3300: klej akrylowy, panele fotowoltaiczne, laboratorium. PN: B33-17-432, B33-19-432, B33-149-432.',
  shortDescription: 'Brady B-432 to przezroczyste etykiety z błyszczącego poliestru z mocnym klejem akrylowym, w czterech rozmiarach, do płytek drukowanych i paneli fotowoltaicznych. Do drukarki Brady i3300.',
  description: 'ToughBond B-432 to przezroczysty poliester z połyskiem i mocnym klejem akrylowym. Naklejony nie zasłania podłoża, więc oznaczany element pozostaje widoczny. Klej stworzono z myślą o powierzchniach lakierowanych proszkowo. Wiąże też z podłożem gładkim i chropowatym oraz dobrze znosi wilgoć. Etykiety oznaczają płytki PCB, komponenty, tabliczki, kody paskowe i panele fotowoltaiczne. Nadają się też do inwentaryzacji, oznaczania magazynu i instalacji elektrycznych. W opisie cech klej figuruje jako agresywny i trwały, a folia jako odporna na ciepło.\n\nKarta zawiera cztery rozmiary: najmniejszy kwadrat 12,7 mm (cztery rzędy, 5000 sztuk na rolkę) i trzy prostokąty, z których największy ma wysokość 50,8 mm. Prostokąty opisano także jako etykiety dla butelek, szalek i kolb w laboratorium.\n\nGrubość: 0,102 mm. Dopuszczalna temperatura sięga od −40 do 100 °C. Wytrzymuje autoklaw i zamrażarkę, a poza tym paliwa, oleje, ścieranie, rozpuszczalniki i chemikalia. Znak UL Recognised dopuszcza użycie na panelach fotowoltaicznych ze szkła, poliestru termoutwardzalnego lub PVF. Dochodzi akceptacja CSA. Do druku zaleca się osobno kupowaną taśmę B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-clear-polyester-permanent-acrylic-adhesive-labels-cps-3069368',
  images: [
    '/images/products/brady/b33-149-432.png',
    '/images/products/brady/b33-149-432-2.png',
    '/images/products/brady/b33-19-432.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-149-432 na uchwycie z przezroczystymi etykietami poliestrowymi 12,7 × 12,7 mm w czterech rzędach',
    'Arkusz z przezroczystymi etykietami poliestrowymi Brady B-432 12,7 × 12,7 mm',
    'Rolka Brady B33-19-432 na uchwycie z przezroczystymi etykietami poliestrowymi 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-432' },
    { name: 'Typ materiału', value: 'poliester do powierzchni chropowatych' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych i lakierowanych proszkowo' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw i zamrażarka' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary etykiety', value: '12,7 × 12,7 / 50,8 × 25,4 / 76,2 × 25,4 / 76,2 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '5000 / 1500 / 500 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised (w tym do paneli fotowoltaicznych), CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: PRZEZROCZYSTY_432.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PRZEZROCZYSTY_432.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — przezroczysta etykieta poliestrowa B-432 ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 12,7 × 12,7 mm, a największa 76,2 × 50,8 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 12,7 mm leżą w czterech rzędach, a pozostałe formaty w jednym.',
  },
  faq: [
    { question: 'Czy etykiety B-432 nadają się do paneli fotowoltaicznych?', answer: 'Tak. Znak UL Recognised obejmuje użycie na zewnątrz na szkle, poliestrze termoutwardzalnym i folii PVF. Taka etykieta oznacza panel fotowoltaiczny.' },
    { question: 'Na jakich powierzchniach trzyma etykieta B-432?', answer: 'Klej akrylowy jest przeznaczony do powierzchni lakierowanych proszkowo. Wiąże też z gładkimi i chropowatymi podłożami, a folia dobrze znosi wilgoć.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-432?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Identyfikacja paneli fotowoltaicznych', 'Oznaczanie płytek drukowanych i komponentów', 'Etykiety na szklanych i lakierowanych powierzchniach z widocznym tłem'],
}

// ---------------------------------------------------------------------------
// Workhorse — przezroczysty poliester B-430 (cps-3069366 + B33C-3000-430 z karty białej, bo to ten sam materiał)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w tabeli, nazwa wariantu bez PN]
const WORKHORSE_430: [string, string, string, string][] = [
  ['B33-5-430', '133887', '25,4 × 12,7 mm, 5000 szt.', 'przezroczysta etykieta poliestrowa B-430 25,4 × 12,7 mm, 5000 szt.'],
  ['B33-17-430', '142885', '50,8 × 25,4 mm, 1500 szt.', 'przezroczysta etykieta poliestrowa B-430 50,8 × 25,4 mm, 1500 szt.'],
  ['B33-18-430', '142886', '76,2 × 25,4 mm, 1500 szt.', 'przezroczysta etykieta poliestrowa B-430 76,2 × 25,4 mm, 1500 szt.'],
  ['B33C-3000-430', '153438', 'ciągła 76,2 mm × 30,48 m', 'przezroczysta taśma poliestrowa B-430 76,2 mm × 30,48 m'],
]

export const bradyB33Workhorse430: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-430',
  slug: 'brady-b33-17-430',
  name: 'Przezroczyste etykiety poliestrowe Brady Workhorse B-430 do drukarki i3300',
  seoTitle: 'Brady Workhorse B-430 — przezroczyste etykiety poliestrowe, i3300',
  seoDescription: 'Przezroczyste etykiety poliestrowe Brady Workhorse B-430 do i3300: kody kreskowe, autoklaw, od −70 do 100 °C. PN: B33-17-430, B33-5-430, B33C-3000-430.',
  shortDescription: 'Brady Workhorse B-430 to przezroczysty błyszczący poliester: trzy rozmiary etykiet wykrojonych i taśma ciągła 76,2 mm × 30,48 m. Do drukarki Brady i3300.',
  description: 'Workhorse B-430 jest przezroczystym poliestrem o wysokim połysku. Daje etykiety zbliżone jakością do tabliczek znamionowych. Nadrukowane napisy, symbole, logo i kody paskowe leżą na przejrzystym tle, które pozostaje widoczne. Trwały klej akrylowy trzyma na gładkich podłożach. Etykiety oznaczają płytki PCB, komponenty, okablowanie elektryczne i teleinformatyczne oraz wyposażenie podlegające inwentaryzacji.\n\nKarta zawiera cztery numery: trzy formaty wykrojone i jedną taśmę ciągłą. Najmniejsza etykieta daje 5000 sztuk na rolkę i biegnie w trzech rzędach. Taśma ciągła mierzy 30,48 m w długość, a jej szerokość to 76,2 mm. Dwa większe formaty opisano także jako etykiety na naczynia laboratoryjne: butelki, szalki i kolby.\n\nFolia ma 0,076 mm. Zniesie od −70 do 100 °C, autoklaw i mrożenie, a także kąpiel wodną o 100 °C. Nie szkodzą jej korozja, chemikalia, ścieranie, wilgoć ani UV. Folia jest optycznie przejrzysta i odporna na wysoką temperaturę. Materiał ma znaki UL Recognised i CSA. Do wydruku potrzebna jest osobno kupowana taśma B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-workhorse-clear-polyester-labels-cps-3069366',
  images: [
    '/images/products/brady/b33-5-430.png',
    '/images/products/brady/b33-18-430.png',
    '/images/products/brady/b33c-3000-430.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-5-430 na uchwycie z przezroczystymi etykietami poliestrowymi 25,4 × 12,7 mm',
    'Rolka Brady B33-18-430 z przezroczystymi etykietami poliestrowymi 76,2 × 25,4 mm',
    'Rolka Brady B33C-3000-430 na uchwycie z przezroczystą taśmą poliestrową o szerokości 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce oraz rolka taśmy ciągłej B33C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Workhorse B-430' },
    { name: 'Typ materiału', value: 'poliester przezroczysty, odporny na autoklaw' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne; autoklaw, zamrażarka, kąpiel wodna 100 °C' },
    { name: 'Kolor', value: 'przezroczysty' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 / 50,8 × 25,4 / 76,2 × 25,4 mm; taśma ciągła 76,2 mm × 30,48 m' },
    { name: 'Liczba sztuk', value: '5000 / 1500 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: WORKHORSE_430.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WORKHORSE_430.map(([pn, , rozmiar, opis]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${opis}`,
    attributes: { Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce albo wymiary taśmy ciągłej.\n\nTaśma ciągła ma 76,2 mm szerokości i 30,48 m długości.',
  },
  faq: [
    { question: 'Do czego służą przezroczyste etykiety Workhorse B-430?', answer: 'Do oznaczeń o jakości zbliżonej do tabliczek znamionowych, z kodami kreskowymi, tekstem, symbolami i logo. Widoczne zostaje tło oznaczanego elementu.' },
    { question: 'Czy etykiety B-430 wytrzymują autoklaw?', answer: 'Tak. Materiał znosi autoklawowanie, mrożenie i kąpiel wodną 100 °C. Zakres temperatur pracy to od −70 do 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-430?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Znakowanie płytek drukowanych i komponentów z widocznym tłem', 'Etykiety z kodami kreskowymi, symbolami i logo', 'Oznaczanie butelek, szalek i kolb w laboratorium'],
}

// ---------------------------------------------------------------------------
// One Step Protect B-711 / B-712 — przezroczyste, drukowane od spodu (cps-4427691 i cps-4427692: różnią się tylko obramowaniem)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, pole nadruku, obramowanie, materiał]
const ONE_STEP: [string, string, string, string, string, string][] = [
  ['B33-382-711', '176194', '25,4 × 19,05', '17,78 × 11,43', 'Przezroczyste', 'B-711'],
  ['B33-383-711', '176198', '50,8 × 25,4', '41,28 × 15,88', 'Przezroczyste', 'B-711'],
  ['B33-382-712', '176193', '25,4 × 19,05', '17,78 × 11,43', 'Białe', 'B-712'],
  ['B33-383-712', '176197', '50,8 × 25,4', '41,28 × 15,88', 'Białe', 'B-712'],
]

export const bradyB33OneStepProtect: Product = {
  ...wspolneB33,
  id: 'brady-b33-383-711',
  slug: 'brady-b33-383-711',
  name: 'Przezroczyste etykiety poliestrowe drukowane od spodu Brady One Step Protect B-711 i B-712 do drukarki i3300',
  seoTitle: 'Brady One Step Protect — etykiety przezroczyste, i3300',
  seoDescription: 'Przezroczyste etykiety poliestrowe Brady One Step Protect do i3300: nadruk od spodu, bez laminatu, od −80 do 100 °C. PN: B33-383-711, B33-382-711, B33-383-712.',
  shortDescription: 'Brady One Step Protect to przezroczyste etykiety poliestrowe drukowane od spodu, z przezroczystym albo białym obramowaniem klejącym, w dwóch rozmiarach. Do drukarki Brady i3300.',
  description: 'Brady One Step Protect to przezroczysta etykieta poliestrowa z nadrukiem po stronie kleju. Tekst i grafika są widoczne przez folię, a sama folia chroni je przed zarysowaniem i chemikaliami, więc laminat nie jest potrzebny. Tło oznaczanego elementu pozostaje widoczne. Obramowanie klejące jest przezroczyste (materiał B-711) lub białe (B-712). Etykiety nadają produktowi wygląd wysokiej jakości i służą do tabliczek znamionowych, etykiet firmowych i indywidualnych oraz identyfikacji wyrobów w elektronice, sprzęcie AGD i przemyśle.\n\nPudełko zawiera 750 etykiet. Do wyboru są dwa rozmiary w układzie poziomym: większa etykieta ma okno nadruku 41,28 × 15,88 mm, a mniejsza okno 17,78 × 11,43 mm. Wymiary całych etykiet podaje tabela. Wersje z obramowaniem białym i przezroczystym mają te same parametry.\n\nFolia ma grubość 0,178 mm i pracuje od −80 do 100 °C. Jest odporna na ścieranie, zarysowania, chemikalia, rozpuszczalniki i oleje. Materiał nie nadaje się do zastosowań SMT. Zalecana taśma barwiąca to B30-R6000, a dopuszczalna jest seria R6000HF.',
  sameAs: 'https://www.brady.eu/labels/one-step-protect-backside-printed-clear-polyester-labels-clear-adhesive-border-for-b33-printers-cps-4427691',
  images: [
    '/images/products/brady/b33-383-711.png',
    '/images/products/brady/b33-383-711-2.png',
    '/images/products/brady/b33-383-712.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-383-711 na uchwycie z przezroczystymi etykietami z przezroczystym obramowaniem klejącym 50,8 × 25,4 mm',
    'Pięć przezroczystych etykiet Brady One Step Protect z ramką klejącą i oknem na nadruk',
    'Rolka Brady B33-383-712 na uchwycie z przezroczystymi etykietami z białym obramowaniem klejącym 50,8 × 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 w pudełku, drukowane od spodu, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'One Step Protect B-711 (obramowanie przezroczyste) i B-712 (obramowanie białe)' },
    { name: 'Typ materiału', value: 'poliester przezroczysty' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,178 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, zarysowania, chemikalia, rozpuszczalniki, oleje, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'przezroczysty, obramowanie przezroczyste lub białe' },
    { name: 'Wymiary etykiety', value: '50,8 × 25,4 / 25,4 × 19,05 mm, zależnie od wersji' },
    { name: 'Pole nadruku', value: '41,28 × 15,88 / 17,78 × 11,43 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '750 etykiet w pudełku' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (dopuszczalna seria R6000HF)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ONE_STEP.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ONE_STEP.map(([pn, , wym, nadruk, ramka, mat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — przezroczysta etykieta poliestrowa ${mat} ${wym} mm z ${ramka === 'Białe' ? 'białym' : 'przezroczystym'} obramowaniem, 750 szt.`,
    attributes: { Rozmiar: `${wym} mm, 750 szt.`, Obramowanie: ramka, Nadruk: `${nadruk} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk w pudełku.\n\nDostępne są dwa rozmiary: 50,8 × 25,4 mm i 25,4 × 19,05 mm.',
    Obramowanie: 'Kolor obramowania z klejem wokół przezroczystego pola.\n\nB-711 ma obramowanie przezroczyste, a B-712 białe.',
    Nadruk: 'Wymiary pola nadruku na etykiecie.\n\nWiększa etykieta ma pole 41,28 × 15,88 mm, a mniejsza 17,78 × 11,43 mm.',
  },
  faq: [
    { question: 'Co oznacza nadruk od spodu w etykietach One Step Protect?', answer: 'Nadruk leży po stronie kleju i jest widoczny przez przezroczystą folię. Folia chroni go przed zarysowaniem i chemikaliami, więc laminat nie jest potrzebny.' },
    { question: 'Czym różnią się B-711 i B-712?', answer: 'Kolorem obramowania z klejem. B-711 ma obramowanie przezroczyste, a B-712 białe. Pozostałe parametry są takie same.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet One Step Protect?', answer: 'Zaleca się taśmę barwiącą B30-R6000, dopuszczalna jest seria R6000HF. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Tabliczki znamionowe i etykiety firmowe z widocznym tłem', 'Identyfikacja wyrobów w elektronice i sprzęcie AGD', 'Etykiety indywidualne z nadrukiem chronionym folią'],
}

// ---------------------------------------------------------------------------
// Matowy biały poliester ToughBond B-489A z klejem kauczukowym (cps-3069388)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar etykiety, sztuk, rzędów na rolce]
const MATOWY_489: [string, string, string, string, string][] = [
  ['B33-5-489', '143062', '25,4 × 12,7', '5000', '3'],
  ['B33-17-489', '142969', '50,8 × 25,4', '1500', '1'],
  ['B33-18-489', '143052', '76,2 × 25,4', '1500', '1'],
  ['B33-19-489', '142958', '76,2 × 50,8', '500', '1'],
]

export const bradyB33Matowy489: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-489',
  slug: 'brady-b33-17-489',
  name: 'Matowe białe etykiety poliestrowe Brady ToughBond B-489A z klejem kauczukowym do drukarki i3300',
  seoTitle: 'Brady B-489A — matowe etykiety poliestrowe do drukarki i3300',
  seoDescription: 'Matowe białe etykiety poliestrowe Brady B-489A do i3300: bardzo mocny klej kauczukowy, metal i tworzywa. PN: B33-17-489, B33-19-489, B33-5-489, B33-18-489.',
  shortDescription: 'Brady B-489A to matowe białe etykiety poliestrowe z bardzo mocnym klejem kauczukowym, do wnętrz, w czterech rozmiarach. Do drukarki Brady i3300.',
  description: 'Etykiety ToughBond B-489A wykonano z matowego, białego poliestru. Trwały klej kauczukowy jest bardzo mocny. Najlepiej pracuje w pomieszczeniach, na powierzchniach gładkich i silnie fakturowanych, także na metalu i na tworzywach sztucznych o słabej przyczepności. Etykiety oznaczają wyroby, służą do identyfikacji ogólnej w handlu i przemyśle, a także do kodów kreskowych, sprzętu i instalacji elektrycznych.\n\nW karcie są cztery formaty. Pasek najwęższy (25,4 mm) występuje w liczbie 5000 sztuk i biegnie w trzech rzędach. Dwie etykiety o szerokości 76,2 mm różnią się wysokością: 25,4 albo 50,8 mm. Etykieta wysoka na 25,4 mm i szeroka na 50,8 mm zawiera 1500 sztuk na rolce.\n\nFolia ma grubość 0,1295 mm. Dolna granica to −40 °C, górna 120 °C. Cechy materiału to agresywny klej, trwałość spoiny i odporność na ciepło. Opiera się paliwom, olejom, rozpuszczalnikom, ścieraniu, korozji, wilgoci oraz UV. Materiał ma atest UL Recognised i akceptację CSA. Rekomendowana taśma barwiąca to B30-R4300, nabywana oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polyester-permanent-rubber-based-adhesive-labels-cps-3069388',
  images: [
    '/images/products/brady/b33-17-489.png',
    '/images/products/brady/b33-19-489.png',
    '/images/products/brady/b33-5-489.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-489 na uchwycie z matowymi białymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady B33-19-489 z matowymi białymi etykietami poliestrowymi 76,2 × 50,8 mm',
    'Rolka Brady B33-5-489 z matowymi białymi etykietami poliestrowymi 25,4 × 12,7 mm w trzech rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-489A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,1295 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '25,4 × 12,7 / 50,8 × 25,4 / 76,2 × 25,4 / 76,2 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '5000 / 1500 / 500 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: MATOWY_489.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MATOWY_489.map(([pn, , wym, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała matowa etykieta poliestrowa B-489A ${wym} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${wym} mm, ${szt} szt.`, Rzędów: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 25,4 × 12,7 mm, a największa 76,2 × 50,8 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 25,4 × 12,7 mm leżą w trzech rzędach, a pozostałe formaty w jednym.',
  },
  faq: [
    { question: 'Gdzie najlepiej stosować etykiety B-489A?', answer: 'W pomieszczeniach, na powierzchniach gładkich i silnie fakturowanych. Klej kauczukowy trzyma też na metalu i na tworzywach o niskiej energii powierzchniowej.' },
    { question: 'Czym B-489A różni się od błyszczącego B-483A?', answer: 'B-489A ma matową powierzchnię i grubszą folię (0,1295 mm). Do druku zaleca się taśmę barwiącą B30-R4300, a nie B30-R6000.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-489A?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Oznaczanie wyrobów i identyfikacja ogólna wewnątrz pomieszczeń', 'Etykiety z kodami kreskowymi', 'Oznaczanie sprzętu i elementów elektrycznych'],
}

// ---------------------------------------------------------------------------
// Biały poliester ToughBond B-422 z klejem akrylowym (cps-3069394 + taśmy ciągłe z cps-3069269: ten sam materiał)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar w tabeli, rzędów (puste dla taśmy ciągłej), opis w nazwie]
const BIALY_422: [string, string, string, string, string][] = [
  ['B33C-312-422', '134003', 'ciągła 7,92 mm × 25,91 m', '', 'taśma ciągła 7,92 mm × 25,91 m'],
  ['B33C-375-422', '134004', 'ciągła 9,53 mm × 25,91 m', '', 'taśma ciągła 9,53 mm × 25,91 m'],
  ['B33-149-422', '133800', '12,7 × 12,7 mm, 5000 szt.', '4', 'etykieta 12,7 × 12,7 mm, 5000 szt.'],
  ['B33-5-422', '133886', '25,4 × 12,7 mm, 5000 szt.', '3', 'etykieta 25,4 × 12,7 mm, 5000 szt.'],
  ['B33-102-422', '133768', '38,1 × 9,4 mm, 2500 szt.', '1', 'etykieta 38,1 × 9,4 mm, 2500 szt.'],
  ['B33-147-422', '133797', '38,1 × 9,53 mm, 2500 szt.', '2', 'etykieta 38,1 × 9,53 mm, 2500 szt.'],
  ['B33-136-422', '133957', '38,1 × 19,05 mm, 1500 szt.', '1', 'etykieta 38,1 × 19,05 mm, 1500 szt.'],
  ['B33-17-422', '133815', '50,8 × 25,4 mm, 1500 szt.', '1', 'etykieta 50,8 × 25,4 mm, 1500 szt.'],
  ['B33-18-422', '133822', '76,2 × 25,4 mm, 1500 szt.', '1', 'etykieta 76,2 × 25,4 mm, 1500 szt.'],
  ['B33-19-422', '133826', '76,2 × 50,8 mm, 500 szt.', '1', 'etykieta 76,2 × 50,8 mm, 500 szt.'],
  ['B33-76-422', '133973', '101,6 × 76,2 mm, 500 szt.', '1', 'etykieta 101,6 × 76,2 mm, 500 szt.'],
]

export const bradyB33Bialy422: Product = {
  ...wspolneB33,
  id: 'brady-b33-17-422',
  slug: 'brady-b33-17-422',
  name: 'Białe etykiety i taśma poliestrowa Brady ToughBond B-422 z klejem akrylowym do drukarki i3300',
  seoTitle: 'Brady B-422 — białe etykiety poliestrowe, klej akrylowy, i3300',
  seoDescription: 'Białe etykiety i taśma poliestrowa Brady ToughBond B-422 do i3300: klej akrylowy, bez halogenów, od −40 do 100 °C. PN: B33-17-422, B33-19-422, B33C-375-422.',
  shortDescription: 'Brady ToughBond B-422 to biały błyszczący poliester z klejem akrylowym: dziewięć rozmiarów etykiet i dwie taśmy ciągłe, do znakowania ogólnego. Do drukarki Brady i3300.',
  description: 'Etykiety ToughBond B-422 wykonano z białego poliestru z połyskiem i klejem akrylowym, wszechstronnego w handlu i przemyśle. Klej trzyma na płaskich podłożach z fakturą oraz na farbie proszkowej, także na plastikach o niskiej przyczepności. Folia dobrze znosi liczne rozpuszczalniki i nie zawiera halogenów. Klej zaliczono do agresywnych, a materiał do odpornych na ciepło. Wszystkie wykroje są prostokątne. Służy do oznaczania majątku, kodów kreskowych, sprzętu telekomunikacyjnego i zapasów magazynowych.\n\nW karcie jest dziewięć etykiet wykrojonych i dwie rolki taśmy ciągłej o długości 25,91 m, szerokie na 7,92 albo 9,53 mm. Największy wykrój jest dwucalowy w pionie: 76,2 mm wysokości. Najliczniejsza rolka mieści 5000 sztuk w czterech rzędach. Dwa wykroje o szerokości 38,1 mm różnią się wysokością: odmiana 9,4 mm leży w jednym rzędzie, a 9,53 mm w dwóch.\n\nPrzy grubości 0,102 mm folia wytrzymuje od −40 do 100 °C. Opiera się ścieraniu, paliwom, olejom, rozpuszczalnikom, korozji, wilgoci, UV i pogodzie. Atest UL Recognised i akceptacja CSA potwierdzają jakość. Do nadruku wybiera się taśmę B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-white-polyester-permanent-acrylic-adhesive-labels-cps-3069394',
  images: [
    '/images/products/brady/b33-17-422.png',
    '/images/products/brady/b33-76-422.png',
    '/images/products/brady/b33c-375-422.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-17-422 na uchwycie z białymi etykietami poliestrowymi 50,8 × 25,4 mm',
    'Rolka Brady B33-76-422 z białymi etykietami poliestrowymi 101,6 × 76,2 mm',
    'Rolka Brady B33C-375-422 na uchwycie z wąską białą taśmą poliestrową o szerokości 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce oraz rolki taśmy ciągłej B33C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-422' },
    { name: 'Typ materiału', value: 'poliester, bez halogenów' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich, chropowatych i lakierowanych proszkowo' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne, rozpuszczalniki' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 12,7 × 12,7 do 101,6 × 76,2 mm, zależnie od wersji' },
    { name: 'Szerokość taśmy', value: '7,92 / 9,53 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '25,91 m' },
    { name: 'Liczba sztuk', value: 'od 500 do 5000 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: BIALY_422.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: BIALY_422.map(([pn, , rozmiar, rzedy, opis]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała ${opis.startsWith('taśma') ? 'taśma poliestrowa' : 'etykieta poliestrowa'} B-422 ${opis.replace(/^(taśma ciągła|etykieta) /, '')}`,
    attributes: (rzedy ? { Rozmiar: rozmiar, Rzędów: rzedy } : { Rozmiar: rozmiar }) as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety (szerokość × wysokość) i liczba sztuk na rolce albo wymiary taśmy ciągłej.\n\nTaśmy ciągłe mają 25,91 m długości i szerokość 7,92 lub 9,53 mm.',
    Rzędów: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 12,7 × 12,7 mm leżą w czterech rzędach, a 25,4 × 12,7 mm w trzech.',
  },
  faq: [
    { question: 'Na jakich powierzchniach trzyma etykieta B-422?', answer: 'Klej akrylowy wiąże z powierzchniami lakierowanymi proszkowo i płaskimi z fakturą, także z tworzywami o niskiej energii powierzchniowej. Zakres temperatur pracy to od −40 do 100 °C.' },
    { question: 'Czy B-422 jest dostępny jako taśma ciągła?', answer: 'Tak. Dostępne są dwie taśmy ciągłe o długości 25,91 m: szerokości 7,92 mm i 9,53 mm. Długość etykiety ustala się przy druku.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-422?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Materiał drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Znakowanie aktywów, komponentów i sprzętu', 'Etykiety z kodami kreskowymi i inwentaryzacja', 'Oznaczanie urządzeń telekomunikacyjnych'],
}

// ---------------------------------------------------------------------------
// Etykiety ostrzegawcze ANSI na poliestrze ToughBond B-483A (cps-4297067)
// ---------------------------------------------------------------------------

// [PN, nr art., bok etykiety, sztuk na rolce, nagłówek, kolor nadruku, pole zmiennego nadruku]
const OSTRZEGAWCZE_483: [string, string, string, string, string, string, string][] = [
  ['B33-184-483-ANSIDA', '152870', '76,2', '500', 'DANGER', 'Czerwony na białym', '76,2 × 47,63'],
  ['B33-184-483-ANSIWA', '152869', '76,2', '500', 'WARNING', 'Czarny i oranż', '76,2 × 47,63'],
  ['B33-161-483-ANSIDA', '152868', '101,6', '370', 'DANGER', 'Czerwony na białym', '101,6 × 73,03'],
  ['B33-161-483-ANSIWA', '152873', '101,6', '370', 'WARNING', 'Czarny i oranż', '101,6 × 73,03'],
]

export const bradyB33Ostrzegawcze483: Product = {
  ...wspolneB33,
  id: 'brady-b33-161-483-ansiwa',
  slug: 'brady-b33-161-483-ansiwa',
  name: 'Poliestrowe etykiety ostrzegawcze ANSI DANGER i WARNING Brady ToughBond B-483A do drukarki i3300',
  seoTitle: 'Brady B-483A — etykiety ostrzegawcze ANSI DANGER i WARNING, i3300',
  seoDescription: 'Etykiety ostrzegawcze ANSI DANGER i WARNING Brady B-483A do i3300: poliester z mocnym klejem kauczukowym. PN: B33-161-483-ANSIWA, B33-184-483-ANSIDA.',
  shortDescription: 'Brady B33-161-483-ANSIWA i trzy inne kwadratowe etykiety ostrzegawcze z nagłówkiem DANGER albo WARNING na poliestrze B-483A. Do drukarki Brady i3300.',
  description: 'Etykiety B33-161-483 i B33-184-483 mają nagłówek ostrzegawczy wykonany fabrycznie, po angielsku: DANGER (niebezpieczeństwo) w kolorze czerwonym albo WARNING (ostrzeżenie) w kolorach czarnym i pomarańczowym. Pod nagłówkiem leży białe pole, na którym drukarka dodaje treść ostrzeżenia. Podłożem jest ToughBond B-483A, błyszczący biały poliester z kauczukowym klejem o bardzo wysokiej przyczepności do metalu z fakturą i do tworzyw sztucznych trudnych do oklejania. Etykietę można naklejać na podłoża gładkie, chropowate, nierówne i malowane proszkowo.\n\nDostępne są dwa formaty kwadratowe. Większy ma bok 101,6 mm i 370 sztuk na rolce, a zmienny nadruk mieści się w polu o wysokości 73,03 mm. Mniejszy, o boku 76,2 mm, daje 500 sztuk na rolkę, a pole zmiennego nadruku ma 47,63 mm wysokości. Każdy format występuje w obu wersjach nagłówka, więc razem są cztery numery.\n\nFolia mierzy 0,102 mm w grubości i toleruje przedział od −40 do 120 °C, a ścieranie, kontakt z chemikaliami, korozja, wilgoć, UV i pogoda jej nie niszczą. Klej zaliczono do agresywnych, a folię do odpornych na ciepło i niskie temperatury. Atesty to UL Recognised i akceptacja CSA. Zmienne napisy powstają z taśmy B30-R6000.',
  sameAs: 'https://www.brady.eu/labels/b33-series-high-adhesion-glossy-polyester-preprinted-warning-labels-cps-4297067',
  images: [
    '/images/products/brady/b33-161-483-ansiwa.png',
    '/images/products/brady/b33-161-483-ansida.png',
    '/images/products/brady/b33-184-483-ansida.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-161-483-ANSIWA na uchwycie z białymi etykietami 101,6 × 101,6 mm i pomarańczowo-czarnym nagłówkiem WARNING',
    'Rolka Brady B33-161-483-ANSIDA z białymi etykietami 101,6 × 101,6 mm i czerwonym nagłówkiem DANGER',
    'Rolka Brady B33-184-483-ANSIDA z białymi etykietami 76,2 × 76,2 mm i czerwonym nagłówkiem DANGER',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety wykrojone B33 na rolce z nadrukiem fabrycznym, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughBond B-483A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały z nagłówkiem czerwonym (DANGER) albo czarnym i pomarańczowym (WARNING)' },
    { name: 'Nadruk fabryczny', value: 'nagłówek ANSI, język angielski: DANGER albo WARNING' },
    { name: 'Wymiary etykiety', value: '76,2 × 76,2 / 101,6 × 101,6 mm, zależnie od wersji' },
    { name: 'Pole nadruku', value: '76,2 × 47,63 / 101,6 × 73,03 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '500 / 370 etykiet na rolce, zależnie od wersji' },
    { name: 'Normy', value: 'UL Recognised, CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: OSTRZEGAWCZE_483.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: OSTRZEGAWCZE_483.map(([pn, , bok, szt, naglowek, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta ostrzegawcza ${naglowek} ${bok} × ${bok} mm, ${szt} szt.`,
    attributes: { Rozmiar: `${bok} × ${bok} mm, ${szt} szt.`, Nagłówek: naglowek, Kolor: kolor },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary kwadratowej etykiety i liczba sztuk na rolce.\n\nEtykieta 101,6 × 101,6 mm ma 370 sztuk na rolce, a 76,2 × 76,2 mm 500 sztuk.',
    Nagłówek: 'Napis wydrukowany fabrycznie nad białym polem.\n\nDANGER oznacza niebezpieczeństwo, a WARNING ostrzeżenie. Nagłówek jest w języku angielskim.',
    Kolor: 'Kolory nagłówka ostrzegawczego.\n\nDANGER ma kolor czerwony, a WARNING czarny i pomarańczowy.',
  },
  faq: [
    { question: 'Co jest wydrukowane fabrycznie na etykietach B-483A ANSI?', answer: 'Nagłówek ostrzegawczy po angielsku: DANGER (czerwony) albo WARNING (czarny i pomarańczowy). Resztę treści drukuje się na białym polu.' },
    { question: 'Jak duże jest pole do własnego nadruku?', answer: 'Na etykiecie 101,6 × 101,6 mm pole ma 101,6 × 73,03 mm, a na etykiecie 76,2 × 76,2 mm pole ma 76,2 × 47,63 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet ostrzegawczych B-483A?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300).' },
  ],
  applications: ['Ostrzeżenia na urządzeniach i instalacjach elektrycznych', 'Oznaczenia ANSI DANGER i WARNING z treścią drukowaną na miejscu', 'Etykiety na metalu z fakturą i na tworzywach sztucznych'],
}

// ---------------------------------------------------------------------------
// Eksport: wszystkie karty tego pliku
// ---------------------------------------------------------------------------

export const bradyB33Poliester: Product[] = [
  bradyB33Workhorse423,
  bradyB33Workhorse430,
  bradyB33Poliester8591,
  bradyB33Bialy422,
  bradyB33ToughBond483,
  bradyB33Elastyczny484,
  bradyB33Matowy489,
  bradyB33Przezroczysty432,
  bradyB33LabPoliester,
  bradyB33Kriogeniczne494,
  bradyB33Eko618,
  bradyB33PermaShield423,
  bradyB33OneStepProtect,
  bradyB33Ostrzegawcze483,
]

export const bradyB33PoliesterSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = Object.fromEntries(
  bradyB33Poliester.map((p) => [p.id, ['brady-b33-600-8423', 'brady-b33-302-494-gn'].includes(p.id) ? ('lab' as const) : ('ogolne' as const)]),
)
