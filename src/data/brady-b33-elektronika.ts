import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Materiały Brady B33 do przemysłowej drukarki BradyPrinter i3300 (także BBP33): poliimid na płytki drukowane,
// poliimid antystatyczny (ESD) i odporny na ciepło. Taśma barwiąca w osobnej kasecie serii B30. 14.11.2026.

// ---------------------------------------------------------------------------
// Standardowy poliimid B-797 — siedem PN w jednej karcie (pid-b33-43-797 i sześć pokrewnych)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const POLIIMID_797: [string, string, string, string, string, string][] = [
  ['B33-340-797', '176422', '9,53', '9,53', '10000', '7'],
  ['B33-149-797', '176418', '12,70', '12,70', '5000', '4'],
  ['B33-2-797', '176416', '22,86', '6,35', '5000', '3'],
  ['B33-49-797', '176406', '22,86', '6,35', '5000', '1'],
  ['B33-58-797', '176403', '25,40', '9,53', '4000', '1'],
  ['B33-43-797', '176402', '31,75', '6,35', '5000', '1'],
  ['B33-72-797', '176417', '44,45', '6,35', '5000', '1'],
]

const SZTUK = (n: string) => `${n} szt.`

export const bradyB33Poliimid797: Product = {
  ...wspolneB33,
  id: 'brady-b33-43-797',
  slug: 'brady-b33-43-797',
  name: 'Etykiety z poliimidu na płytki drukowane Brady B-797 do drukarki i3300',
  seoTitle: 'Brady B-797 — etykiety z poliimidu na PCB do drukarki i3300',
  seoDescription: 'Etykiety z poliimidu Brady B-797 do drukarki Brady i3300: białe, błyszczące, do 300 °C, siedem rozmiarów. PN: B33-43-797, B33-149-797, B33-72-797.',
  shortDescription: 'Brady B33-43-797 i sześć innych rozmiarów białych, błyszczących etykiet z poliimidu B-797 do płytek drukowanych i elementów elektronicznych. Do drukarki Brady i3300.',
  description: 'Etykiety B-797 są wykonane z białego, błyszczącego poliimidu. Akrylowy klej o stałej przyczepności wytrzymuje intensywne mycie oraz środki czyszczące używane w produkcji elektroniki. Warstwa wierzchnia chroni nadruk podczas kolejnych płukań płytki. Etykietę nakleja się na gładką powierzchnię płytki, na jej stronie górnej albo dolnej, obok układów SMT oraz elementów przewlekanych. Nadruk jest czytelny bez lutowania rozpływowego i bez wstępnego podgrzewania.\n\nSiedem wersji różni się wielkością: najmniejsza to kwadrat o boku 9,53 mm, a najdłuższa ma 44,45 × 6,35 mm. W opakowaniu mieści się zwykle 5000 etykiet. Wyjątek stanowią wersje 25,40 × 9,53 mm (4000 sztuk) oraz 9,53 × 9,53 mm (10 000 sztuk). Na części rolek etykiety biegną w kilku rzędach, nawet w siedmiu obok siebie.\n\nFolia ma grubość 0,104 mm i znosi temperatury od −80 do 300 °C, dlatego przechodzi lutowanie na fali. Odpiera ścieranie, chemikalia, korozję, ciepło i wilgoć. Materiał ma uznanie UL, odpowiada wymaganiom MIL-STD-202G (metoda 215K), a w składzie nie ma związków dibutylocyny ani dioktylocyny. Nadruk powstaje z kasety barwiącej B30-R6300, dobieranej osobno.',
  sameAs: 'https://www.brady.eu/labels/standard-polyimide-labels-for-bbp33-i3300-printers-pid-b33-43-797',
  images: [
    '/images/products/brady/b33-43-797.png',
    '/images/products/brady/b33-149-797.png',
    '/images/products/brady/b33-72-797.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-43-797 na uchwycie z paskiem białych, prostokątnych etykiet z poliimidu',
    'Rolka Brady B33-149-797 z białymi kwadratowymi etykietami z poliimidu ułożonymi w kilku rzędach',
    'Rolka Brady B33-72-797 na uchwycie z długimi, białymi etykietami z poliimidu',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-797' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, ciepło, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 9,53 × 9,53 mm do 44,45 × 6,35 mm, zależnie od wersji' },
    { name: 'Rdzeń rolki', value: '50,8 mm' },
    { name: 'Normy', value: 'UL, MIL-STD-202G metoda 215K, bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIIMID_797.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIIMID_797.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 9,53 × 9,53 mm, a największa 44,45 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWersje o jednakowym wymiarze 22,86 × 6,35 mm różnią się właśnie tym: jedna ma trzy etykiety w rzędzie, druga jedną.',
  },
  faq: [
    { question: 'Czy etykiety B-797 znoszą lutowanie na fali?', answer: 'Tak. Poliimid wytrzymuje temperatury do 300 °C, a klej i warstwa wierzchnia są przystosowane do wielokrotnego mycia płytek.' },
    { question: 'Czy nadruk wymaga lutowania rozpływowego lub wstępnego podgrzewania?', answer: 'Nie. Nadruk pozostaje czytelny bez lutowania rozpływowego i bez podgrzewania wstępnego.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-797?', answer: 'Zaleca się taśmę barwiącą B30-R6300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych', 'Oznaczanie elementów elektronicznych i urządzeń'],
}

// ---------------------------------------------------------------------------
// Antystatyczny poliimid matowy B-719, 1 mil (cps-3069377); bez B33-341-719 (tylko i5300) i B33-2-719 (brak strony)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const ESD_719: [string, string, string, string, string, string][] = [
  ['B33-70-719', '153179', '6,35', '6,35', '20000', '7'],
  ['B33-340-719', '152832', '9,53', '9,53', '10000', '7'],
  ['B33-12-719', '153181', '12,70', '11,10', '10000', '5'],
  ['B33-1-719', '153175', '19,05', '6,35', '10000', '4'],
  ['B33-46-719', '133875', '19,05', '6,35', '5000', '1'],
  ['B33-51-719', '153178', '25,40', '6,35', '10000', '3'],
  ['B33-103-719', '153180', '25,40', '6,35', '4000', '1'],
  ['B33-5-719', '153182', '25,40', '12,70', '7000', '3'],
  ['B33-43-719', '134344', '31,75', '6,35', '5000', '1'],
  ['B33-13-719', '153177', '31,75', '6,35', '7000', '2'],
  ['B33-4-719', '153176', '38,10', '6,35', '8000', '2'],
]

export const bradyB33Esd719: Product = {
  ...wspolneB33,
  id: 'brady-b33-43-719',
  slug: 'brady-b33-43-719',
  name: 'Antystatyczne etykiety z poliimidu Brady B-719, matowe, do drukarki i3300',
  seoTitle: 'Brady B-719 — antystatyczne etykiety z poliimidu do i3300',
  seoDescription: 'Matowe etykiety antystatyczne Brady B-719 z poliimidu do drukarki Brady i3300: 0,084 mm, do 300 °C, 11 rozmiarów. PN: B33-43-719, B33-46-719, B33-4-719.',
  shortDescription: 'Brady B33-43-719 i dziesięć innych rozmiarów białych, matowych etykiet z antystatycznego poliimidu B-719 do płytek drukowanych. Do drukarki Brady i3300.',
  description: 'B-719 to cienki, matowy poliimid w kolorze białym. Znakuje się nim płytki drukowane oraz podzespoły jeszcze przed obróbką. Klej oraz podkład mają właściwości antystatyczne, czyli rozpraszają ładunki elektrostatyczne. Rezystywność powierzchniowa mieści się w zakresie zalecanym przez normę ANSI/ESD S541-2008 dla rozpraszających materiałów opakowaniowych ESD. Etykiety znoszą lutowanie falowe oraz powtarzane mycie agresywnymi środkami. Nadruk wykonuje się termotransferem, a kleić je można na wierzchu i na spodzie płytki, przy elementach SMT oraz przewlekanych.\n\nKatalog obejmuje jedenaście rozmiarów. Najmniejsza wersja jest kwadratem 6,35 mm, a największa ma 38,10 × 6,35 mm. Liczba etykiet w opakowaniu waha się od 4000 do 20 000. Obok siebie mieści się od jednej do siedmiu etykiet. Kilka rozmiarów występuje w dwóch wersjach, które różnią się liczbą sztuk i rzędów.\n\nFolia ma grubość 0,084 mm, a dopuszczalna temperatura mieści się między −70 a 300 °C. Odporność obejmuje chemikalia, ciecze oraz wysokie temperatury. Ma uznanie UL i spełnia wymagania MIL-STD-202G (metoda 215K). Zalecana jest kaseta barwiąca B30-R6000, zamawiana osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-matt-1-mil-static-dissipative-polyimide-labels-cps-3069377',
  images: [
    '/images/products/brady/b33-43-719.png',
    '/images/products/brady/b33-46-719.png',
    '/images/products/brady/b33-13-719.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-43-719 na uchwycie z paskiem białych, matowych etykiet z antystatycznego poliimidu',
    'Rolka Brady B33-46-719 z białymi etykietami o wymiarach 19,05 × 6,35 mm na czarnym uchwycie',
    'Rolka Brady B33-13-719 z dwoma rzędami białych etykiet 31,75 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-719' },
    { name: 'Typ materiału', value: 'poliimid antystatyczny (rozpraszający ładunki ESD)' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, antystatyczny' },
    { name: 'Grubość', value: '0,084 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'chemikalia, ciecze, wysoka temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'ANSI/ESD S541-2008, MIL-STD-202G metoda 215K, UL' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ESD_719.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ESD_719.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, matowa etykieta antystatyczna ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nW tej rodzinie jest to od jednej do siedmiu etykiet.',
  },
  faq: [
    { question: 'Co oznacza, że etykiety B-719 są antystatyczne?', answer: 'Klej i podkład rozpraszają ładunki elektrostatyczne. Rezystywność powierzchniowa mieści się w zakresie zalecanym przez ANSI/ESD S541-2008 dla rozpraszających materiałów ESD.' },
    { question: 'Jaką grubość i temperaturę pracy ma materiał B-719?', answer: 'Folia ma 0,084 mm grubości i pracuje w zakresie od −70 do 300 °C. Powierzchnia jest matowa, a nadruk wykonuje się termotransferem.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-719?', answer: 'Zaleca się kasetę B30-R6000, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych przed lutowaniem', 'Oznaczanie podzespołów wrażliwych na ładunki elektrostatyczne'],
}

// ---------------------------------------------------------------------------
// Antystatyczny poliimid błyszczący B-767, 2 mil (cps-3069376); bez wycofanych B33-103-717 i B33-46-717
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk (puste = niepewna dana), etykiet w rzędzie]
const ESD_767: [string, string, string, string, string, string][] = [
  ['B33-340-767', '176423', '9,53', '9,53', '10000', '7'],
  ['B33-12-767', '176387', '12,70', '11,10', '10000', '5'],
  ['B33-46-767', '176409', '19,05', '6,35', '', '1'],
  ['B33-51-767', '176385', '25,40', '6,35', '10000', '3'],
  ['B33-103-767', '176408', '25,40', '6,35', '5000', '1'],
  ['B33-5-767', '176388', '25,40', '12,70', '7000', '3'],
  ['B33-43-767', '176399', '31,75', '6,35', '5000', '1'],
]

export const bradyB33Esd767: Product = {
  ...wspolneB33,
  id: 'brady-b33-43-767',
  slug: 'brady-b33-43-767',
  name: 'Antystatyczne etykiety z poliimidu Brady B-767, błyszczące, do drukarki i3300',
  seoTitle: 'Brady B-767 — błyszczące etykiety ESD z poliimidu do i3300',
  seoDescription: 'Błyszczące etykiety antystatyczne Brady B-767 z poliimidu do drukarki Brady i3300: 0,104 mm, od −80 do 300 °C, 7 wersji. PN: B33-43-767, B33-51-767, B33-5-767.',
  shortDescription: 'Brady B33-43-767 i sześć innych wersji białych, błyszczących etykiet z antystatycznego poliimidu B-767 do płytek drukowanych. Do drukarki Brady i3300.',
  description: 'Etykiety B-767 mają białą, błyszczącą powierzchnię z poliimidu. Rozpraszanie ładunków elektrostatycznych zapewniają dwa elementy: klej i podkład. Warstwa kleju ma rezystywność w przedziale 10⁴–10¹¹ Ω, zgodnie z zaleceniem normy ANSI/ESD S541-2008 dotyczącym rozpraszających opakowań ESD. Etykietę nakleja się na płytkę po procesie, po stronie montażu SMT i elementów przewlekanych, od góry oraz od spodu.\n\nSiedem wersji tworzy sześć rozmiarów. Najmniejsza wersja ma kształt kwadratu o wymiarze 9,53 mm, a największa mierzy 31,75 × 6,35 mm. Rozmiar 25,40 × 6,35 mm występuje dwukrotnie, z trzema etykietami w rzędzie albo z jedną. Opakowania liczą zwykle 5000, 7000 albo 10 000 etykiet. Poszczególne wersje różnią się wymiarem etykiety oraz liczbą rzędów na rolce.\n\nGrubość materiału wynosi 0,104 mm, a zakres temperatur sięga od −80 do 300 °C. Folia znosi ścieranie, chemikalia, płyny oraz wilgoć. Uznanie UL 969 dotyczy nadruku taśmami barwiącymi serii R6300 i R6000 bez halogenów. Zachowana jest też norma MIL-STD-202G, metoda 215K. W pierwszej kolejności poleca się kasetę B30-R6300. Nadruk wykonuje się termotransferem.',
  sameAs: 'https://www.brady.eu/labels/b33-series-glossy-2-mil-static-dissipative-polyimide-labels-cps-3069376',
  images: [
    '/images/products/brady/b33-43-767.png',
    '/images/products/brady/b33-12-767.png',
    '/images/products/brady/b33-340-767.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-43-767 na uchwycie z paskiem białych etykiet z antystatycznego poliimidu',
    'Rolka Brady B33-12-767 z białymi etykietami w pięciu rzędach na szerokości rolki',
    'Rolka Brady B33-340-767 z drobnymi, kwadratowymi etykietami z poliimidu',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-767' },
    { name: 'Typ materiału', value: 'poliimid antystatyczny (rozpraszający ładunki ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, antystatyczny' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, płyny, wilgoć, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 9,53 × 9,53 mm do 31,75 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL 969 (nadruk taśmami R6300 i R6000), MIL-STD-202G metoda 215K, ANSI/ESD S541-2008' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ESD_767.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ESD_767.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, błyszcząca etykieta antystatyczna ${szer} × ${wys} mm`,
    attributes: { Rozmiar: sztuk ? `${szer} × ${wys} mm, ${SZTUK(sztuk)}` : `${szer} × ${wys} mm`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 9,53 × 9,53 mm, a największa 31,75 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nW tej rodzinie wynosi od jednej do siedmiu.',
  },
  faq: [
    { question: 'Jaką rezystywność powierzchniową ma klej etykiet B-767?', answer: 'Od 10⁴ do 10¹¹ Ω. Wartość mieści się w przedziale zalecanym przez ANSI/ESD S541-2008 dla rozpraszających materiałów ESD.' },
    { question: 'Kiedy obowiązuje uznanie UL 969 dla materiału B-767?', answer: 'Gdy nadruk wykonano taśmą barwiącą serii R6300 albo R6000 bez halogenów.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-767?', answer: 'Zaleca się kasetę B30-R6300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych po procesie produkcyjnym', 'Oznaczanie komponentów przy montażu SMT i przewlekanym'],
}

// ---------------------------------------------------------------------------
// Poliimid B-797 odporny na ciepło (cps-4725659); bez B33-12-797 (brak strony w bazie Brady)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const CIEPLO_797: [string, string, string, string, string, string][] = [
  ['B33-70-797', '176374', '6,35', '6,35', '20000', '7'],
  ['B33-71-797', '176375', '8,00', '8,00', '20000', '6'],
  ['B33-51-797', '176373', '25,40', '6,35', '10000', '3'],
  ['B33-3-797', '176376', '25,40', '9,53', '10000', '3'],
  ['B33-5-797', '176378', '25,40', '12,70', '7000', '3'],
  ['B33-13-797', '176371', '31,75', '6,35', '5000', '2'],
  ['B33-4-797', '176370', '38,10', '6,35', '10000', '2'],
  ['B33-45-797', '176366', '38,10', '6,35', '5000', '1'],
  ['B33-15-797', '176372', '50,80', '6,35', '3200', '1'],
]

export const bradyB33Cieplo797: Product = {
  ...wspolneB33,
  id: 'brady-b33-51-797',
  slug: 'brady-b33-51-797',
  name: 'Etykiety z poliimidu odporne na ciepło Brady B-797 do drukarki i3300',
  seoTitle: 'Brady B-797 — etykiety z poliimidu odporne na ciepło do i3300',
  seoDescription: 'Odporne na ciepło etykiety Brady B-797 z poliimidu do drukarki Brady i3300: od −80 do 300 °C, 9 wersji. PN: B33-51-797, B33-70-797, B33-45-797, B33-15-797.',
  shortDescription: 'Brady B33-51-797 i osiem innych wersji białych, błyszczących etykiet z poliimidu B-797, odpornych na lutowanie na fali i mycie płytek. Do drukarki Brady i3300.',
  description: 'Odporne na ciepło etykiety B-797 wykonano z białego poliimidu o błyszczącej powierzchni, z myślą o producentach płytek drukowanych i elektroniki. Nadruk termotransferowy nie rozmazuje się. Wzmocniona powłoka wierzchnia chroni zapis na płytkach, które wielokrotnie przechodzą mycie w ostrych warunkach, a klej znosi agresywne środki czyszczące. Czytelny nadruk nie wymaga wstępnego podgrzewania ani lutowania rozpływowego.\n\nDziewięć wersji obejmuje rozmiary między kwadratem 6,35 mm a paskiem 50,80 × 6,35 mm. Opakowanie mieści od 3200 do 20 000 etykiet. Najwięcej, bo siedem etykiet obok siebie, niesie rolka z kwadratem 6,35 mm, a najdłuższa etykieta biegnie pojedynczo. Rozmiar 38,10 × 6,35 mm istnieje w dwóch wersjach: z dwiema etykietami w rzędzie i z jedną.\n\nPoliimid ma odporność na wilgoć, ciepło, korozję, chemikalia oraz ścieranie. Folia o grubości 0,104 mm wytrzymuje temperatury w przedziale od −80 do 300 °C. Etykiety nakleja się na gładkie podłoże. Materiał jest wolny od dibutylocyny i dioktylocyny. Ma uznanie UL, a dla MIL-STD-202G, metoda 215K, wymagania są zachowane. Zalecaną taśmą jest B30-R6300.',
  sameAs: 'https://www.brady.eu/labels/heat-resistant-polyimide-labels-for-b33-printers-cps-4725659',
  images: [
    '/images/products/brady/b33-51-797.png',
    '/images/products/brady/b33-70-797.png',
    '/images/products/brady/b33-71-797.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-51-797 na uchwycie z białymi etykietami z poliimidu ułożonymi w trzech rzędach',
    'Rolka Brady B33-70-797 z drobnymi, białymi kwadratowymi etykietami z poliimidu',
    'Rolka Brady B33-71-797 z białymi kwadratowymi etykietami o boku 8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-797' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, ciepło, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 50,80 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL, MIL-STD-202G metoda 215K, bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: CIEPLO_797.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: CIEPLO_797.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta z poliimidu odporna na ciepło ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a najdłuższa 50,80 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nNa rolkach z kwadratem 6,35 mm jest ich siedem, a przy etykiecie 50,80 mm tylko jedna.',
  },
  faq: [
    { question: 'Czy nadruk na etykietach B-797 rozmazuje się?', answer: 'Nie. Poliimid jest odporny na rozmazywanie, a wzmocniona powłoka wierzchnia chroni zapis podczas wielokrotnego mycia płytek.' },
    { question: 'Do jakiej temperatury można używać etykiet odpornych na ciepło B-797?', answer: 'Zakres pracy wynosi od −80 do 300 °C. Dzięki temu etykiety przechodzą lutowanie na fali.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-797?', answer: 'Zaleca się taśmę B30-R6300, dobieraną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300), a także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych przed lutowaniem na fali', 'Oznaczanie płytek myjonych w trudnych warunkach'],
}

// ---------------------------------------------------------------------------
// Poliimid ESD B-767 do drukarek B33 (cps-4725658 + pid-b33-45-767) — ten sam materiał, jedna karta
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const ESD_RDZEN_767: [string, string, string, string, string, string][] = [
  ['B33-1-767', '176380', '19,05', '6,35', '10000', '4'],
  ['B33-2-767', '176381', '22,86', '6,35', '10000', '3'],
  ['B33-13-767', '176384', '31,75', '6,35', '7000', '2'],
  ['B33-4-767', '176382', '38,10', '6,35', '8000', '2'],
  ['B33-45-767', '176367', '38,10', '6,35', '5000', '1'],
]

export const bradyB33EsdRdzen767: Product = {
  ...wspolneB33,
  id: 'brady-b33-45-767',
  slug: 'brady-b33-45-767',
  name: 'Etykiety ESD z poliimidu Brady B-767 do drukarek serii B33 i i3300',
  seoTitle: 'Brady B-767 — etykiety ESD z poliimidu do drukarki i3300',
  seoDescription: 'Etykiety ESD Brady B-767 z poliimidu do drukarki Brady i3300: wysokość 6,35 mm, rzędy 1–4, do 300 °C, 5 wersji. PN: B33-45-767, B33-1-767, B33-13-767.',
  shortDescription: 'Brady B33-45-767 i cztery inne wersje białych etykiet ESD z poliimidu B-767 o wysokości 6,35 mm, do płytek drukowanych. Do drukarki Brady i3300.',
  description: 'Etykiety ESD B-767 powstały z myślą o produkcji płytek drukowanych i elektroniki. Poliimid z antystatycznym klejem i podkładem rozprasza ładunki, a przy tym znosi lutowanie na fali oraz wielokrotne mycie w ostrych warunkach. Wzmocniona powłoka wierzchnia utrzymuje nadruk na płytkach po takim myciu. Do czytelnego zapisu nie trzeba ani lutowania rozpływowego, ani podgrzewania wstępnego.\n\nWszystkie wersje mają wysokość 6,35 mm. Zmienia się szerokość: 19,05; 22,86; 31,75 oraz 38,10 mm, przy czym ta ostatnia ma dwie opcje, z dwoma rzędami albo z jednym. W opakowaniu znajduje się od 5000 do 10 000 sztuk. Materiał można kleić po stronie SMT i na elementach przewlekanych, z góry oraz od dołu płytki.\n\nGrubość folii to 0,104 mm. Zakres temperatur obejmuje przedział −80…300 °C. Odporność dotyczy ścierania, chemikaliów, płynów i wilgoci, a także niskiej oraz wysokiej temperatury. Zgodność z MIL-STD-202G (metoda 215K) oraz uznanie UL 969 przy taśmach R6300 i R6000 bez halogenów są potwierdzone. Zalecana taśma barwiąca to B30-R6300.',
  sameAs: 'https://www.brady.eu/labels/electrostatic-dissipative-esd-polyimide-labels-for-b33-core-printers-cps-4725658',
  images: [
    '/images/products/brady/b33-45-767.png',
    '/images/products/brady/b33-4-767.png',
    '/images/products/brady/b33-13-767.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-45-767 na uchwycie z pojedynczym rzędem białych etykiet ESD z poliimidu',
    'Rolka Brady B33-4-767 z białymi etykietami ESD o szerokości 38,10 mm ułożonymi w dwóch rzędach',
    'Rolka Brady B33-13-767 z białymi, prostokątnymi etykietami ESD z poliimidu',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-767' },
    { name: 'Typ materiału', value: 'poliimid antystatyczny (rozpraszający ładunki ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, antystatyczny' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, płyny, wilgoć, wysoka i niska temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'wysokość 6,35 mm, szerokość od 19,05 do 38,10 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL 969 (nadruk taśmami R6300 i R6000), MIL-STD-202G metoda 215K, ANSI/ESD S541-2008' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ESD_RDZEN_767.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ESD_RDZEN_767.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta ESD z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nWysokość wynosi zawsze 6,35 mm, a szerokość od 19,05 do 38,10 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do czterech. Wersje o szerokości 38,10 mm mają dwie etykiety albo jedną.',
  },
  faq: [
    { question: 'Czy etykiety ESD B-767 wymagają lutowania rozpływowego przed odczytem nadruku?', answer: 'Nie. Nadruk jest czytelny bez lutowania rozpływowego i bez wstępnego podgrzewania płytki.' },
    { question: 'Na której stronie płytki można naklejać etykiety B-767?', answer: 'Na obu. Materiał jest przewidziany do montażu SMT i elementów przewlekanych, z góry oraz od spodu płytki.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet ESD B-767?', answer: 'Zaleca się kasetę B30-R6300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych w produkcji elektroniki', 'Oznaczanie elementów po lutowaniu i myciu'],
}

// ---------------------------------------------------------------------------
// Poliimid matowy biały B-728, 2 mil, na płytki drukowane (cps-4297063); bez B33-341-728 (tylko i5300)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const MATOWY_728: [string, string, string, string, string, string][] = [
  ['B33-70-728', '153217', '6,35', '6,35', '20000', '7'],
  ['B33-340-728', '153219', '9,53', '9,53', '10000', '7'],
  ['B33-12-728', '153213', '12,70', '11,10', '10000', '5'],
  ['B33-1-728', '153209', '19,05', '6,35', '10000', '4'],
  ['B33-2-728', '153210', '22,86', '6,35', '10000', '3'],
  ['B33-51-728', '153216', '25,40', '6,35', '10000', '3'],
  ['B33-103-728', '153218', '25,40', '6,35', '4000', '1'],
  ['B33-5-728', '153212', '25,40', '12,70', '7000', '3'],
  ['B33-13-728', '153214', '31,75', '6,35', '7000', '2'],
  ['B33-43-728', '153215', '31,75', '6,35', '4000', '1'],
  ['B33-4-728', '153211', '38,10', '6,35', '8000', '2'],
]

export const bradyB33Matowy728: Product = {
  ...wspolneB33,
  id: 'brady-b33-1-728',
  slug: 'brady-b33-1-728',
  name: 'Matowe etykiety z poliimidu na płytki drukowane Brady B-728 (2 mil) do drukarki i3300',
  seoTitle: 'Brady B-728 — matowe etykiety z poliimidu na PCB do i3300',
  seoDescription: 'Matowe etykiety z poliimidu Brady B-728 na płytki drukowane, do drukarki Brady i3300: 0,112 mm, do 300 °C, 11 wersji. PN: B33-1-728, B33-70-728, B33-4-728.',
  shortDescription: 'Brady B33-1-728 i dziesięć innych wersji białych, matowych etykiet z poliimidu B-728 do znakowania płytek drukowanych. Do drukarki Brady i3300.',
  description: 'B-728 to biały poliimid o matowej powierzchni, przeznaczony do oznaczania płytek drukowanych i komponentów przed procesem produkcyjnym. Klej o podwyższonej wytrzymałości dobrano do ekstremalnych procedur mycia i do chemikaliów czyszczących. Etykiety nadają się też do automatycznych aplikatorów. Producent podaje odporność na ostre zmywanie topnika. Nadruk powstaje termotransferem.\n\nDo wyboru jest jedenaście wersji. Najmniejsza ma bok 6,35 mm, a największa mierzy 38,10 × 6,35 mm. Opakowanie zawiera 4000, 7000, 8000, 10 000 albo 20 000 etykiet. Wymiary 25,40 × 6,35 mm oraz 31,75 × 6,35 mm mają po dwie wersje: wielorzędową oraz jednorzędową. Siedem etykiet obok siebie mieści się w wersjach o boku 6,35 oraz 9,53 mm.\n\nFolia o grubości 0,112 mm działa w przedziale temperatur od −70 do 300 °C. Poliimid znosi promieniowanie UV i czynniki atmosferyczne, a także wilgoć, korozję, chemikalia i tarcie. Materiał ma uznanie UL; wymagania MIL-STD-202G w metodzie 215K są zachowane. Do nadruku potrzebna jest taśma barwiąca B30-R6000, zamawiana osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-matte-white-2-mil-polyimide-circuit-board-labels-cps-4297063',
  images: [
    '/images/products/brady/b33-4-728.png',
    '/images/products/brady/b33-70-728.png',
    '/images/products/brady/b33-103-728.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-4-728 na uchwycie z białymi, matowymi etykietami z poliimidu w dwóch rzędach',
    'Rolka Brady B33-70-728 z drobnymi, kwadratowymi etykietami z poliimidu ułożonymi w siedmiu rzędach',
    'Rolka Brady B33-103-728 z pojedynczym rzędem białych etykiet 25,40 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-728' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, czynniki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL, MIL-STD-202G metoda 215K' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: MATOWY_728.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MATOWY_728.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, matowa etykieta z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do siedmiu. Rolki z jedną etykietą w rzędzie mają wąski pas materiału.',
  },
  faq: [
    { question: 'Czy etykiety B-728 nadają się do automatycznych aplikatorów?', answer: 'Tak. Klej jest dobrany do mycia w ekstremalnych procedurach i do użycia w automatycznych aplikatorach etykiet.' },
    { question: 'Jaką grubość i temperaturę pracy ma materiał B-728?', answer: 'Folia ma 0,112 mm grubości. Zakres pracy wynosi od −70 do 300 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-728?', answer: 'Zaleca się kasetę B30-R6000, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych przed procesem', 'Oznaczanie komponentów w liniach z automatycznym naklejaniem'],
}

// ---------------------------------------------------------------------------
// Antystatyczny poliimid błyszczący B-768 / B-718, 1 mil (cps-3069375); bez B33-1-718 i B33-49-718 (wycofane) oraz PN bez strony
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie, materiał]
const ESD_768: [string, string, string, string, string, string, string][] = [
  ['B33-340-768', '176421', '9,53', '9,53', '10000', '7', 'B-768'],
  ['B33-1-768', '176411', '19,05', '6,35', '5000', '4', 'B-768'],
  ['B33-46-718', '133874', '19,05', '6,35', '5000', '1', 'B-718'],
  ['B33-45-768', '176412', '38,10', '6,35', '5000', '1', 'B-768'],
]

export const bradyB33Esd768: Product = {
  ...wspolneB33,
  id: 'brady-b33-1-768',
  slug: 'brady-b33-1-768',
  name: 'Cienkie antystatyczne etykiety z poliimidu Brady B-768 (1 mil) do drukarki i3300',
  seoTitle: 'Brady B-768 — cienkie etykiety ESD z poliimidu do i3300',
  seoDescription: 'Cienkie, błyszczące etykiety antystatyczne Brady B-768 z poliimidu do drukarki Brady i3300: 0,078 mm, do 300 °C. PN: B33-1-768, B33-340-768, B33-45-768.',
  shortDescription: 'Brady B33-1-768 i trzy inne wersje cienkich, białych, błyszczących etykiet z antystatycznego poliimidu B-768 i B-718. Do drukarki Brady i3300.',
  description: 'Etykiety B-768 wykonano z cienkiego poliimidu o błyszczącej, białej powierzchni. Klej oraz podkład rozpraszają ładunki elektrostatyczne, a rezystywność powierzchniowa kleju zawiera się w przedziale 10⁴–10¹¹ Ω z normy ANSI/ESD S541-2008. Etykieta ma niski profil. Można ją kleić na górnej i dolnej powierzchni płytki, również obok elementów przewlekanych.\n\nKarta zawiera cztery wersje: kwadrat 9,53 × 9,53 mm z siedmioma etykietami w rzędzie, dwie etykiety 19,05 × 6,35 mm (w rzędzie czterech lub pojedynczo) oraz pas 38,10 × 6,35 mm. W opakowaniu jest 5000 sztuk, a dla najmniejszego kwadratu 10 000. Wersja B33-46-718 wykonana jest z materiału B-718.\n\nB-768 ma grubość 0,078 mm, a zakres pracy od −80 do 300 °C. B-718 jest nieco grubsza, 0,084 mm, a jej dolna granica to −70 °C. Folie są odporne na wilgoć, korozję, chemikalia oraz tarcie. UL 969 obowiązuje przy nadruku taśmami R6300 i R6000 bez halogenów, a MIL-STD-202G (metoda 215K) jest zachowana. Zaleca się taśmę B30-R6300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-glossy-1-mil-static-dissipative-polyimide-labels-cps-3069375',
  images: [
    '/images/products/brady/b33-1-768.png',
    '/images/products/brady/b33-340-768.png',
    '/images/products/brady/b33-45-768.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-1-768 na uchwycie z długim paskiem białych, błyszczących etykiet z poliimidu',
    'Rolka Brady B33-340-768 z drobnymi, białymi kwadratowymi etykietami z poliimidu',
    'Rolka Brady B33-45-768 na uchwycie z pojedynczym rzędem białych etykiet 38,10 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-768 (wersja B33-46-718: B-718)' },
    { name: 'Typ materiału', value: 'poliimid antystatyczny (rozpraszający ładunki ESD)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, antystatyczny' },
    { name: 'Grubość', value: '0,078 mm (B-768), 0,084 mm (B-718)' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C (B-768), od −70 do 300 °C (B-718)' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 9,53 × 9,53 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL 969 (nadruk taśmami R6300 i R6000), MIL-STD-202G metoda 215K, ANSI/ESD S541-2008' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: ESD_768.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ESD_768.map(([pn, , szer, wys, sztuk, wRzedzie, mat]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, błyszcząca etykieta antystatyczna ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie, Materiał: mat },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 9,53 × 9,53 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do siedmiu.',
    Materiał: 'Oznaczenie folii poliimidowej.\n\nB-768 ma 0,078 mm grubości i pracuje od −80 °C. B-718 ma 0,084 mm grubości i pracuje od −70 °C.',
  },
  faq: [
    { question: 'Czym różni się materiał B-768 od B-718?', answer: 'B-768 ma 0,078 mm grubości i dolną granicę pracy −80 °C. B-718 ma 0,084 mm i −70 °C. Obie folie są błyszczące i antystatyczne.' },
    { question: 'Kiedy obowiązuje uznanie UL 969 dla etykiet B-768?', answer: 'Gdy nadruk wykonano taśmą barwiącą serii R6300 albo R6000 bez halogenów.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-768?', answer: 'Zaleca się kasetę B30-R6300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie cienkich płytek drukowanych o niskim profilu', 'Oznaczanie komponentów wrażliwych na ładunki elektrostatyczne'],
}

// ---------------------------------------------------------------------------
// Poliimid błyszczący B-777 na płytki bez lutowania rozpływowego (cps-4297065); bez B33-340-777 i B33-341-777 (brak stron)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const BLYSZCZACY_777: [string, string, string, string, string, string][] = [
  ['B33-70-777', '153287', '6,35', '6,35', '20000', '7'],
  ['B33-12-777', '153290', '12,70', '11,10', '10000', '5'],
  ['B33-1-777', '153281', '19,05', '6,35', '10000', '4'],
  ['B33-2-777', '153282', '22,86', '6,35', '10000', '3'],
  ['B33-51-777', '153286', '25,40', '6,35', '10000', '3'],
  ['B33-103-777', '153288', '25,40', '6,35', '4000', '1'],
  ['B33-5-777', '153291', '25,40', '12,70', '7000', '3'],
  ['B33-13-777', '153284', '31,75', '6,35', '7000', '2'],
  ['B33-43-777', '153285', '31,75', '6,35', '4000', '1'],
  ['B33-4-777', '153283', '38,10', '6,35', '8000', '2'],
]

export const bradyB33Blyszczacy777: Product = {
  ...wspolneB33,
  id: 'brady-b33-1-777',
  slug: 'brady-b33-1-777',
  name: 'Błyszczące etykiety z poliimidu na płytki drukowane Brady B-777 do drukarki i3300',
  seoTitle: 'Brady B-777 — błyszczące etykiety z poliimidu na PCB do i3300',
  seoDescription: 'Błyszczące etykiety z poliimidu Brady B-777 na płytki drukowane, bez lutowania rozpływowego, do drukarki Brady i3300. PN: B33-1-777, B33-70-777, B33-4-777.',
  shortDescription: 'Brady B33-1-777 i dziewięć innych wersji białych, błyszczących etykiet z poliimidu B-777 na płytki drukowane. Do drukarki Brady i3300.',
  description: 'Etykiety B-777 przeznaczono do identyfikacji płytek i podzespołów elektronicznych przed procesem produkcyjnym. Błyszczący, biały poliimid zachowuje czytelny nadruk bez lutowania rozpływowego i bez podgrzewania wstępnego. Sprawdza się przy płytkach myjonych w ciężkich warunkach, bo wytrzymuje wiele takich cykli. Etykieta jest też odporna na zmywanie topnika w trudnych warunkach. Nadruk wykonuje się termotransferem. Kasety R6300 pozwalają uzyskać nadruk zgodny z testem odporności na rozpuszczalniki MIL-STD-202G, metoda 215K.\n\nTen sam materiał występuje w dziesięciu rozmiarach. Najwęższa wersja ma 6,35 mm, a najszersza 38,10 mm. Liczba sztuk w opakowaniu wynosi 4000, 7000, 8000, 10 000 lub 20 000. Etykiety o jednakowych wymiarach różnią się czasem liczbą rzędów na rolce. Najwięcej, siedem etykiet w rzędzie, mieści kwadrat 6,35 mm.\n\nFolia ma 0,104 mm grubości. Najniższa temperatura pracy to −70 °C, najwyższa 300 °C. Folia jest odporna na wilgoć, korozję, chemikalia, tarcie i pogodę. Klej akrylowy jest trwały, a sama etykieta odporna chemicznie i cieplnie. Taśmą barwiącą do tych etykiet jest B30-R6300, zamawiana oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/b33-series-glossy-white-polyimide-non-reflow-circuit-board-labels-cps-4297065',
  images: [
    '/images/products/brady/b33-1-777.png',
    '/images/products/brady/b33-12-777.png',
    '/images/products/brady/b33-43-777.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-1-777 na uchwycie z białymi, błyszczącymi etykietami z poliimidu w czterech rzędach',
    'Rolka Brady B33-12-777 z białymi etykietami 12,70 × 11,10 mm ułożonymi w pięciu rzędach',
    'Rolka Brady B33-43-777 na uchwycie z pojedynczym rzędem białych etykiet',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-777' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, czynniki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'MIL-STD-202G metoda 215K (test odporności na rozpuszczalniki) przy nadruku taśmą R6300' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: BLYSZCZACY_777.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: BLYSZCZACY_777.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, błyszcząca etykieta z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do siedmiu.',
  },
  faq: [
    { question: 'Czy etykiety B-777 wymagają lutowania rozpływowego lub podgrzewania?', answer: 'Nie. Nadruk pozostaje czytelny bez lutowania rozpływowego i bez wstępnego podgrzewania.' },
    { question: 'Którą taśmą barwiącą spełnia się test odporności na rozpuszczalniki?', answer: 'Test MIL-STD-202G, metoda 215K, dotyczy nadruku wykonanego kasetą B30-R6300, kupowaną osobno.' },
    { question: 'Jaka drukarka obsługuje etykiety B-777?', answer: 'Przemysłowa [Brady i3300](/produkt/brady-i3300). Materiał drukują także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych przed obróbką', 'Oznaczanie płytek myjonych w ciężkich warunkach'],
}

// ---------------------------------------------------------------------------
// Poliimid biały B-797 w czterech rozmiarach (cps-3069396)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const BIALY_797: [string, string, string, string, string, string][] = [
  ['B33-11-797', '176405', '6,35', '6,35', '5000', '12'],
  ['B33-1-797', '176401', '19,05', '6,35', '5000', '4'],
  ['B33-103-797', '176400', '25,40', '6,35', '5000', '1'],
  ['B33-59-797', '176404', '25,40', '12,70', '2500', '1'],
]

export const bradyB33Bialy797: Product = {
  ...wspolneB33,
  id: 'brady-b33-1-797',
  slug: 'brady-b33-1-797',
  name: 'Białe etykiety z poliimidu Brady B-797 do znakowania elektroniki do drukarki i3300',
  seoTitle: 'Brady B-797 — białe etykiety z poliimidu do elektroniki i3300',
  seoDescription: 'Białe etykiety z poliimidu Brady B-797 do elektroniki, do drukarki Brady i3300: 4 rozmiary, do 300 °C. PN: B33-1-797, B33-11-797, B33-59-797.',
  shortDescription: 'Brady B33-1-797 i trzy inne rozmiary białych, błyszczących etykiet z poliimidu B-797 do płytek drukowanych i podzespołów. Do drukarki Brady i3300.',
  description: 'Białe etykiety B-797 mają błyszczącą powierzchnię z poliimidu i przyjmują nadruk termotransferowy. Klej akrylowy wytrzymuje ekstremalne cykle mycia oraz chemikalia czyszczące, więc etykiety dobrze działają w automatycznych aplikatorach. Znakuje się nimi płytki drukowane i podzespoły elektroniczne jeszcze przed obróbką, także przed lutowaniem na fali. Zmywanie topnika w ostrych warunkach nie niszczy etykiet. Nakleja się je po obu stronach płytki, także przy elementach przewlekanych.\n\nW tej karcie są cztery rozmiary. Kwadrat o boku 6,35 mm ma dwanaście etykiet w rzędzie, a etykieta 19,05 × 6,35 mm cztery. Wersje 25,40 × 6,35 mm i 25,40 × 12,70 mm biegną pojedynczo. Trzy pierwsze rozmiary pakowane są po 5000 sztuk, największy po 2500.\n\nPoliimid ma 0,104 mm grubości i zachowuje właściwości od −80 aż do 300 °C. Ścieranie, korozja, chemikalia, ciepło i wilgoć mu nie szkodzą. W składzie brak dibutylocyny oraz dioktylocyny. Dotrzymano zarówno wymogu UL, jak i testu 215K z normy MIL-STD-202G. Nadruk wykonuje się taśmą B30-R6300, zamawianą w osobnej pozycji.',
  sameAs: 'https://www.brady.eu/labels/b33-series-white-polyimide-labels-cps-3069396',
  images: [
    '/images/products/brady/b33-11-797.png',
    '/images/products/brady/b33-59-797.png',
    '/images/products/brady/b33-103-797.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-11-797 na uchwycie z długim paskiem białych etykiet z poliimidu',
    'Rolka Brady B33-59-797 z białymi, szerokimi etykietami z poliimidu',
    'Rolka Brady B33-103-797 na uchwycie z pojedynczym rzędem białych etykiet',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-797' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,104 mm' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, ciepło, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 25,40 × 12,70 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL, MIL-STD-202G metoda 215K, bez dibutylocyny i dioktylocyny' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: BIALY_797.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: BIALY_797.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała etykieta z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 25,40 × 12,70 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nKwadrat 6,35 mm ma ich dwanaście, a dwa największe rozmiary po jednej.',
  },
  faq: [
    { question: 'Czy etykiety B-797 pasują do automatycznych aplikatorów?', answer: 'Tak. Klej jest przystosowany do ekstremalnych procedur mycia i do użycia w automatycznych aplikatorach.' },
    { question: 'Czy materiał B-797 zawiera dibutylocynę lub dioktylocynę?', answer: 'Nie. Materiał jest wolny od obu związków, ma uznanie UL i spełnia test MIL-STD-202G, metoda 215K.' },
    { question: 'Jaką taśmę barwiącą zamówić do białych etykiet B-797?', answer: 'Zaleca się taśmę B30-R6300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych i podzespołów', 'Oznaczanie elementów w liniach z automatycznym naklejaniem'],
}

// ---------------------------------------------------------------------------
// Poliimid matowy biały B-729, 1 mil, na płytki drukowane (cps-4297064); bez B33-341-729 (tylko i5300)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const MATOWY_729: [string, string, string, string, string, string][] = [
  ['B33-70-729', '153230', '6,35', '6,35', '20000', '7'],
  ['B33-340-729', '153232', '9,53', '9,53', '10000', '7'],
  ['B33-12-729', '153225', '12,70', '11,10', '10000', '5'],
  ['B33-1-729', '153221', '19,05', '6,35', '10000', '4'],
  ['B33-2-729', '153222', '22,86', '6,35', '10000', '3'],
  ['B33-51-729', '153229', '25,40', '6,35', '10000', '3'],
  ['B33-103-729', '153231', '25,40', '6,35', '4000', '1'],
  ['B33-5-729', '153224', '25,40', '12,70', '7000', '3'],
  ['B33-13-729', '153226', '31,75', '6,35', '7000', '2'],
  ['B33-43-729', '153228', '31,75', '6,35', '4000', '1'],
  ['B33-4-729', '153223', '38,10', '6,35', '8000', '2'],
]

export const bradyB33Matowy729: Product = {
  ...wspolneB33,
  id: 'brady-b33-1-729',
  slug: 'brady-b33-1-729',
  name: 'Cienkie matowe etykiety z poliimidu na płytki drukowane Brady B-729 (1 mil) do drukarki i3300',
  seoTitle: 'Brady B-729 — cienkie matowe etykiety z poliimidu do i3300',
  seoDescription: 'Cienkie, matowe etykiety z poliimidu Brady B-729 na płytki drukowane, do drukarki Brady i3300: 0,086 mm, do 300 °C. PN: B33-1-729, B33-70-729, B33-4-729.',
  shortDescription: 'Brady B33-1-729 i dziesięć innych wersji białych, matowych etykiet z cienkiego poliimidu B-729 do płytek drukowanych. Do drukarki Brady i3300.',
  description: 'B-729 to poliimid o niskim profilu: folia o grubości 0,086 mm, przeznaczona do procesów wymagających cienkich lub lekkich etykiet. Biała, matowa powierzchnia przyjmuje nadruk termotransferowy, a do drukowania potrzebna jest taśma barwiąca. Dodatkowo etykieta znosi ostre zmywanie topnika. Wytrzymały klej akrylowy zniesie intensywne mycie, a materiał poradzi sobie z lutowaniem na fali.\n\nRodzina liczy jedenaście wersji, a skrajne wymiary to bok 6,35 mm i szerokość 38,10 mm. Szerokość rolki zajmuje od jednego do siedmiu pasów etykiet. Opakowanie mieści od 4000 do 20 000 sztuk. Dwa wymiary występują w parach wersji, różniących się liczbą pasów. Po siedem pasów obok siebie mają dwa najmniejsze kwadraty.\n\nEtykiety pracują w temperaturach od −70 do 300 °C. Odporność obejmuje promieniowanie UV, wilgoć, korozję, tarcie, chemikalia i wpływ pogody. Wymogi UL są spełnione, podobnie jak metoda 215K z MIL-STD-202G. Nadruk powstaje z kasety B30-R6000, którą dobiera się osobno. Etykieta o niskim profilu jest cienka i lekka.',
  sameAs: 'https://www.brady.eu/labels/b33-series-matte-white-1-mil-polyimide-circuit-board-labels-cps-4297064',
  images: [
    '/images/products/brady/b33-43-729.png',
    '/images/products/brady/b33-2-729.png',
    '/images/products/brady/b33-12-729.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-43-729 na uchwycie z białymi, matowymi etykietami z cienkiego poliimidu',
    'Rolka Brady B33-2-729 z białymi etykietami 22,86 × 6,35 mm w trzech rzędach',
    'Rolka Brady B33-12-729 z białymi etykietami 12,70 × 11,10 mm ułożonymi w pięciu rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-729' },
    { name: 'Typ materiału', value: 'poliimid o niskim profilu' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,086 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, czynniki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 6,35 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'UL, MIL-STD-202G metoda 215K' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: MATOWY_729.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MATOWY_729.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała, matowa etykieta z cienkiego poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 6,35 × 6,35 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do siedmiu.',
  },
  faq: [
    { question: 'Dlaczego etykiety B-729 nazywa się cienkimi?', answer: 'Folia ma 0,086 mm grubości i niski profil. Producent przewidział ją do procesów, które wymagają cienkich lub lekkich etykiet.' },
    { question: 'Jaki zakres temperatur znosi materiał B-729?', answer: 'Od −70 do 300 °C. Etykiety przechodzą lutowanie na fali i wielokrotne mycie płytek.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-729?', answer: 'Zaleca się kasetę B30-R6000, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych o ograniczonej grubości', 'Oznaczanie lekkich komponentów elektronicznych'],
}

// ---------------------------------------------------------------------------
// Poliimid bursztynowy B-724 (cps-3069365); bez B33-341/342/344-724 (tylko i5300) oraz B33-1/43/149-724 (brak stron)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, etykiet w rzędzie]
const BURSZTYNOWY_724: [string, string, string, string, string, string][] = [
  ['B33-340-724', '152911', '9,53', '9,53', '10000', '7'],
  ['B33-12-724', '152912', '12,70', '11,10', '10000', '5'],
  ['B33-46-724', '133872', '19,05', '6,35', '5000', '1'],
  ['B33-2-724', '140723', '22,86', '6,35', '5000', '3'],
  ['B33-51-724', '152909', '25,40', '6,35', '10000', '3'],
  ['B33-103-724', '152910', '25,40', '6,35', '4000', '1'],
  ['B33-5-724', '152913', '25,40', '12,70', '7000', '3'],
  ['B33-13-724', '152908', '31,75', '6,35', '7000', '2'],
  ['B33-4-724', '140724', '38,10', '6,35', '5000', '2'],
]

export const bradyB33Bursztynowy724: Product = {
  ...wspolneB33,
  id: 'brady-b33-12-724',
  slug: 'brady-b33-12-724',
  name: 'Bursztynowe etykiety z poliimidu Brady B-724 na płytki drukowane do drukarki i3300',
  seoTitle: 'Brady B-724 — bursztynowe etykiety z poliimidu do drukarki i3300',
  seoDescription: 'Bursztynowe etykiety z poliimidu Brady B-724 na płytki, do drukarki Brady i3300: lutowanie na fali, do 300 °C, 9 wersji. PN: B33-12-724, B33-5-724.',
  shortDescription: 'Brady B33-12-724 i osiem innych wersji bursztynowych, matowych etykiet z poliimidu B-724 do płytek drukowanych. Do drukarki Brady i3300.',
  description: 'Bursztynowy poliimid B-724 ma matową powierzchnię. Klej akrylowy o dużej wytrzymałości znosi ekstremalne procedury mycia i środki czyszczące używane przy produkcji płytek drukowanych. Materiał przechodzi wielokrotne, ostre płukanie, a podczas lutowania pozostaje na płytce, zarówno po stronie górnej, jak i dolnej. Nakleja się go na gładkie powierzchnie. Znosi także ostre zmywanie topnika z płytki. Nadruk wykonuje się termotransferem.\n\nDo wyboru jest dziewięć wersji. Najdrobniejsza to kwadrat 9,53 mm, najszersza ma 38,10 mm. Rzędy liczą od jednej do siedmiu etykiet, a opakowanie mieści od 4000 do 10 000 sztuk. Etykiety o długości 25,40 mm i wysokości 6,35 mm można kupić w dwóch układach: po trzy obok siebie lub pojedynczo.\n\nFolia ma grubość 0,112 mm i wytrzymuje temperatury od −70 do 300 °C. Materiał nie ulega ścieraniu, chemikaliom, korozji, wilgoci, fali lutowniczej ani pogodzie. Przy nadruku taśmą serii R4300 dotrzymany jest wymóg SAE AS81531 (znakowanie izolacji elektrycznej), a także MIL-STD-202G, metoda 215K. Kasetę B30-R4300 poleca się do nadruku.',
  sameAs: 'https://www.brady.eu/labels/b33-series-amber-polyimide-labels-cps-3069365',
  images: [
    '/images/products/brady/b33-12-724.png',
    '/images/products/brady/b33-5-724.png',
    '/images/products/brady/b33-46-724.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-12-724 na uchwycie z bursztynowymi, prostokątnymi etykietami z poliimidu w pięciu rzędach',
    'Rolka Brady B33-5-724 z bursztynowymi etykietami 25,40 × 12,70 mm w trzech rzędach',
    'Rolka Brady B33-46-724 na uchwycie z pojedynczym rzędem bursztynowych etykiet 19,05 × 6,35 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-724' },
    { name: 'Typ materiału', value: 'poliimid' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,112 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 300 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, lutowanie na fali, czynniki atmosferyczne' },
    { name: 'Kolor', value: 'bursztynowy' },
    { name: 'Wymiary etykiety', value: 'od 9,53 × 9,53 mm do 38,10 × 6,35 mm, zależnie od wersji' },
    { name: 'Normy', value: 'MIL-STD-202G metoda 215K, SAE AS81531 (znakowanie izolacji elektrycznej, nadruk taśmą serii R4300)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: BURSZTYNOWY_724.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: BURSZTYNOWY_724.map(([pn, , szer, wys, sztuk, wRzedzie]) => ({
    partNumber: pn,
    name: `Brady ${pn} — bursztynowa etykieta z poliimidu ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${SZTUK(sztuk)}`, 'W rzędzie': wRzedzie },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość pojedynczej etykiety oraz liczba etykiet w opakowaniu.\n\nNajmniejsza etykieta ma 9,53 × 9,53 mm, a największa 38,10 × 6,35 mm.',
    'W rzędzie': 'Liczba etykiet ułożonych obok siebie na szerokości rolki.\n\nWynosi od jednej do siedmiu.',
  },
  faq: [
    { question: 'Czy bursztynowe etykiety B-724 wytrzymują lutowanie na fali?', answer: 'Tak. Poliimid zostaje na płytce w procesie lutowania, po stronie górnej i dolnej, i znosi wielokrotne mycie.' },
    { question: 'Do czego odnosi się norma SAE AS81531 przy etykietach B-724?', answer: 'Dotyczy znakowania izolacji elektrycznej. Wymaganie jest spełnione, gdy nadruk wykonano taśmą barwiącą serii R4300.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-724?', answer: 'Zaleca się kasetę B30-R4300, kupowaną osobno. Etykiety drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Współpracują z nią także BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie płytek drukowanych przechodzących lutowanie na fali', 'Oznaczanie komponentów elektronicznych po lutowaniu i myciu'],
}

export const bradyB33Elektronika: Product[] = [
  bradyB33Esd719,
  bradyB33Esd768,
  bradyB33Esd767,
  bradyB33EsdRdzen767,
  bradyB33Cieplo797,
  bradyB33Matowy728,
  bradyB33Matowy729,
  bradyB33Blyszczacy777,
  bradyB33Bursztynowy724,
  bradyB33Bialy797,
  bradyB33Poliimid797,
]

export const bradyB33ElektronikaSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = {
  'brady-b33-43-719': 'elektronika',
  'brady-b33-1-768': 'elektronika',
  'brady-b33-43-767': 'elektronika',
  'brady-b33-45-767': 'elektronika',
  'brady-b33-51-797': 'elektronika',
  'brady-b33-1-728': 'elektronika',
  'brady-b33-1-729': 'elektronika',
  'brady-b33-1-777': 'elektronika',
  'brady-b33-12-724': 'elektronika',
  'brady-b33-1-797': 'elektronika',
  'brady-b33-43-797': 'elektronika',
}
