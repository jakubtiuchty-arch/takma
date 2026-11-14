import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Koszulki termokurczliwe PermaSleeve, koszulki Heatex i Rapido, wkładki DuraSleeve, zawieszki kablowe, zawieszka polietylenowa
// i flagi QuickFlag Brady B33 / B33D do przemysłowej drukarki BradyPrinter i3300 (także BBP33). 14.11.2026.

const DRUKARKI_B33 = 'i3300, BBP33, i4311, i5300'

const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty', BK: 'Czarny', RD: 'Czerwony', BL: 'Niebieski', GN: 'Zielony', OR: 'Pomarańczowy' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', YL: 'żółta', BK: 'czarna', RD: 'czerwona', BL: 'niebieska', GN: 'zielona', OR: 'pomarańczowa' }

// ---------------------------------------------------------------------------
// Zawieszka z polietylenu B-7597 (pid-b33-7597w-2050), jeden PN
// ---------------------------------------------------------------------------

export const bradyB33Zawieszka7597: Product = {
  ...wspolneB33,
  id: 'brady-b33-7597w-2050',
  slug: 'brady-b33-7597w-2050',
  name: 'Zawieszki z polietylenu Brady B-7597 do drukarki i3300',
  seoTitle: 'Brady B-7597 — zawieszki polietylenowe do drukarki i3300',
  seoDescription: 'Zawieszki Brady B-7597 do drukarki Brady i3300: biały polietylen, 50,8 × 12,7 mm, 2000 szt., od −40 do 100 °C. PN: B33-7597W-2050, nr art. 361701.',
  shortDescription: 'Brady B33-7597W-2050 to biała zawieszka z polietylenu o wymiarach 50,8 × 12,7 mm, 2000 sztuk na rolce. Do drukarki Brady i3300.',
  description: 'Brady B33-7597W-2050 to zawieszka z białego polietylenu B-7597, przeznaczona do znakowania przewodów i kabli. Powierzchnia jest matowa i przyjmuje nadruk termotransferowy. Materiał służy do oznaczeń elektrycznych i kablowych. W tej rodzinie jest tylko jedna wersja, więc nie trzeba wybierać rozmiaru. Numer artykułu Brady to 361701. Zawieszki są wyłącznie białe, więc nie trzeba wybierać koloru.\n\nKażda zawieszka ma 50,8 mm długości i 12,7 mm wysokości. Na rolce znajduje się 2000 sztuk. Grubość folii to 0,201 mm, a kształt zawieszki jest prostokątny. Etykiety leżą w jednym rzędzie na nośniku o szerokości 60,8 mm, a odstęp między nimi na rolce wynosi 16,72 mm.\n\nPolietylen jest odporny na wilgoć, promieniowanie UV i niską temperaturę. Przy −40 °C nie traci właściwości, a górną granicą pracy jest 100 °C. Materiał bezhalogenowy nie zawiera fluoru, chloru, bromu ani jodu; potwierdza to część 815 normy DIN VDE 0472. Taśmę barwiącą B30-R4300 zaleca się do nadruku. Kompatybilne są i3300, BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/polyethylene-tag-for-bbp33-i3300-printers-pid-b33-7597w-2050',
  images: ['/images/products/brady/b33-7597w-2050.png'],
  imageDescriptions: ['Rysunek rolki Brady B33-7597W-2050 z białymi zawieszkami z polietylenu ułożonymi w jednym rzędzie na nośniku'],
  specifications: [
    { name: 'Part Number', value: 'B33-7597W-2050' },
    { name: 'Numer artykułu Brady', value: '361701' },
    { name: 'Typ', value: 'Rolka zawieszek B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7597' },
    { name: 'Typ materiału', value: 'polietylen, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'wilgoć, promieniowanie UV, niska temperatura' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Grubość', value: '0,201 mm' },
    { name: 'Wymiary etykiety', value: '50,8 × 12,7 mm' },
    { name: 'Liczba sztuk', value: '2000' },
    { name: 'Normy', value: 'bezhalogenowy, DIN VDE 0472, część 815' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
  ],
  faq: [
    { question: 'W jakim zakresie temperatur pracuje zawieszka B33-7597W-2050?', answer: 'Od −40 do 100 °C. Polietylen B-7597 jest odporny na wilgoć i promieniowanie UV.' },
    { question: 'Czy materiał B-7597 zawiera halogeny?', answer: 'Nie. Materiał jest bezhalogenowy i spełnia DIN VDE 0472, część 815.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszek B-7597?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Zawieszki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Zawieszki na przewodach i kablach', 'Oznaczanie instalacji elektrycznych'],
}

// ---------------------------------------------------------------------------
// PermaSleeve dwustronne B-342 (cps-3069382); bez czterech PN, których Brady nie udostępnia (…-250/375/500/1000-2-342BK)
// ---------------------------------------------------------------------------

// [PN, nr art., sztuk, wysokość mm, przewód od, przewód do, kolor]
const PERMASLEEVE_342_D: [string, string, string, string, string, string, string][] = [
  ['B33D-94-2-342', '143019', '1000', '4,62', '0,58', '2,03', 'WT'],
  ['B33D-94-2-342YL', '143020', '1000', '4,62', '0,58', '2,03', 'YL'],
  ['B33D-94-2-342BK', '142935', '1000', '4,62', '0,58', '2,03', 'BK'],
  ['B33D-125-2-342', '143021', '1000', '5,97', '1,17', '2,79', 'WT'],
  ['B33D-125-2-342YL', '143022', '1000', '5,97', '1,17', '2,79', 'YL'],
  ['B33D-125-2-342BK', '142921', '1000', '5,97', '1,17', '2,79', 'BK'],
  ['B33D-187-2-342', '143023', '750', '8,51', '1,57', '3,81', 'WT'],
  ['B33D-187-2-342YL', '143024', '750', '8,51', '1,57', '3,81', 'YL'],
  ['B33D-187-2-342BK', '142923', '750', '8,51', '1,57', '3,81', 'BK'],
  ['B33D-250-2-342', '143025', '500', '11,15', '2,39', '5,46', 'WT'],
  ['B33D-250-2-342YL', '143026', '500', '11,15', '2,39', '5,46', 'YL'],
  ['B33D-375-2-342', '143027', '500', '16,38', '3,18', '8,13', 'WT'],
  ['B33D-375-2-342YL', '143028', '500', '16,38', '3,18', '8,13', 'YL'],
  ['B33D-500-2-342', '143029', '350', '21,62', '4,75', '11,43', 'WT'],
  ['B33D-500-2-342YL', '143030', '350', '21,62', '4,75', '11,43', 'YL'],
  ['B33D-750-2-342', '143031', '250', '31,75', '6,35', '17,78', 'WT'],
  ['B33D-750-2-342YL', '142928', '250', '31,75', '6,35', '17,78', 'YL'],
  ['B33D-750-2-342BK', '142929', '250', '31,75', '6,35', '17,78', 'BK'],
  ['B33D-1000-2-342', '142937', '250', '42,16', '8,46', '24,13', 'WT'],
  ['B33D-1000-2-342YL', '142933', '250', '42,16', '8,46', '24,13', 'YL'],
  ['B33D-1500-2-342', '142989', '150', '61,8', '12,7', '36,83', 'WT'],
  ['B33D-1500-2-342YL', '142990', '150', '61,8', '12,7', '36,83', 'YL'],
  ['B33D-1500-2-342BK', '142988', '150', '61,8', '12,7', '36,83', 'BK'],
]

export const bradyB33PermaSleeve342Dwustronne: Product = {
  ...wspolneB33,
  id: 'brady-b33d-125-2-342',
  slug: 'brady-b33d-125-2-342',
  name: 'Dwustronne koszulki termokurczliwe Brady PermaSleeve B-342 do drukarki i3300',
  seoTitle: 'Brady PermaSleeve B-342 — koszulki dwustronne do drukarki i3300',
  seoDescription: 'Koszulki Brady PermaSleeve B-342 do drukarki Brady i3300: poliolefina 3:1, nadruk po obu stronach, od −55 do 135 °C. PN: B33D-125-2-342, B33D-750-2-342YL.',
  shortDescription: 'Brady PermaSleeve B-342 to dwustronnie drukowane koszulki termokurczliwe 3:1 z poliolefiny, dla przewodów od 0,58 do 36,83 mm. Do drukarki Brady i3300.',
  description: 'PermaSleeve B-342 to koszulki z poliolefiny, które po ogrzaniu kurczą się w stosunku 3:1, czyli do jednej trzeciej pierwotnej średnicy. Obkurczona koszulka ściśle przylega do przewodu, chroni izolację i zapewnia trwałe oznaczenie. Nadruk nie blednie i nie rozmazuje się. W tej wersji drukuje się obie strony koszulki. Materiał jest matowy i trudnopalny.\n\nWszystkie koszulki mają jednakową długość 50,8 mm i różnią się średnicą. Najmniejsze pasują do przewodów od 0,58 mm, największe do przewodów o średnicy do 36,83 mm, co odpowiada zakresowi od 28 AWG do 2000 MCM. Dostępne są w kolorach białym, żółtym i czarnym, przy czym czarne występują tylko w pięciu rozmiarach. W opakowaniu mieści się od 150 do 1000 koszulek, zależnie od rozmiaru.\n\nZakres temperatur zaczyna się od −55 °C, a kończy na 135 °C. Normy SAE oraz uznanie UL wymieniono w specyfikacji. Białe i żółte koszulki drukuje się taśmą barwiącą B30-R4300, czarne taśmą B30-R6700-WT. Rolki przyjmują drukarki i3300, BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permasleeve-double-sided-polyolefin-wire-marking-sleeves-cps-3069382',
  images: [
    '/images/products/brady/b33d-125-2-342.png',
    '/images/products/brady/b33d-125-2-342yl.png',
    '/images/products/brady/b33d-125-2-342bk.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33D-125-2-342 na uchwycie z białymi koszulkami termokurczliwymi PermaSleeve ułożonymi na nośniku',
    'Rolka Brady B33D-125-2-342YL z żółtymi koszulkami termokurczliwymi PermaSleeve',
    'Rolka Brady B33D-125-2-342BK z czarnymi koszulkami termokurczliwymi PermaSleeve',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych B33D, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'po obu stronach koszulki, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty, czarny' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, wysokość od 4,62 do 61,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 150 do 1000 w opakowaniu, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,58 do 36,83 mm (28 AWG – 2000 MCM)' },
    { name: 'Normy', value: 'SAE AS-81531; SAE-AMS-DTL-23053/5 (klasa 1); UL 224 (uznanie UL); MIL-STD-202; RoHS' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300 (białe i żółte), B30-R6700-WT (czarne)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASLEEVE_342_D.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASLEEVE_342_D.map(([pn, , szt, wys, od, do_, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} koszulka PermaSleeve na przewód Ø ${od}–${do_} mm`,
    attributes: { Rozmiar: `50,8 × ${wys} mm, ${szt} szt.`, Przewód: `Ø ${od}–${do_} mm`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk w opakowaniu.\n\nDługość wynosi zawsze 50,8 mm, a drugi wymiar rośnie od 4,62 do 61,8 mm.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy sięgają od 0,58 do 36,83 mm, więc rodzina obejmuje i cienkie żyły, i grube kable.',
    Kolor: 'Kolor koszulki.\n\nBiałe i żółte drukuje się taśmą B30-R4300, a czarne taśmą B30-R6700-WT.',
  },
  faq: [
    { question: 'Na jakie przewody pasują koszulki PermaSleeve B-342?', answer: 'Zależnie od rozmiaru, na przewody o średnicy od 0,58 do 36,83 mm. Koszulka kurczy się w stosunku 3:1, więc przylega do izolacji po ogrzaniu.' },
    { question: 'Co oznacza, że koszulki są dwustronne?', answer: 'Nadruk można wykonać po obu stronach koszulki. Wersja jednostronna ma nadruk po jednej stronie.' },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek B-342?', answer: 'Do białych i żółtych zaleca się B30-R4300, a do czarnych B30-R6700-WT. Koszulki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie elektryczne', 'Oznaczanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// QuickFlag B-483A — flagi na kable ze zwężanym ogonem klejącym (cps-4578482)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm, szerokość pola nadruku mm]
const QUICKFLAG_483: [string, string, string, string][] = [
  ['B33-360-483', '174927', '25,4', '25,4'],
  ['B33-361-483', '174928', '48,26', '48,26'],
]

export const bradyB33QuickFlag483: Product = {
  ...wspolneB33,
  id: 'brady-b33-360-483',
  slug: 'brady-b33-360-483',
  name: 'Flagi kablowe Brady QuickFlag B-483A do drukarki i3300',
  seoTitle: 'Brady QuickFlag B-483A — flagi na kable do drukarki i3300',
  seoDescription: 'Flagi Brady QuickFlag B-483A do drukarki Brady i3300: poliester ze zwężanym ogonem klejącym, 1500 szt., od −40 do 120 °C. PN: B33-360-483, B33-361-483.',
  shortDescription: 'Brady QuickFlag B-483A to poliestrowe flagi na przewody i kable ze zwężanym ogonem klejącym, 1500 sztuk na rolce. Do drukarki Brady i3300.',
  description: 'QuickFlag B-483A to flagi do znakowania przewodów i kabli, wykonane z poliestru. Pole nadruku nie ma kleju, a klejący ogon owija się wokół przewodu. Ogon jest zwężany, dlatego brzegi flagi pokrywają się równo i nie odsłaniają kleju. Flagę zakłada się szybciej, a rzadziej trzeba ją przewijać. Kształt flagi przypomina piramidę. Nadają się też do kabli komunikacyjnych, w tym CAT 6.\n\nRolka zawiera 1500 flag ułożonych w dwóch rzędach. Pole nadruku ma wysokość 25,4 mm i szerokość 25,4 albo 48,26 mm. Cała flaga ma wysokość 50,8 mm. Poliester ma kolor biały, wykończenie błyszczące i grubość 0,102 mm.\n\nNa ogonie znajduje się bardzo mocny klej kauczukowy, który wiąże trwale także z powierzchniami chropowatymi i o niskiej energii powierzchniowej. Poliester znosi ścieranie, paliwo, olej, wodę i rozpuszczalniki. Zakres temperatur obejmuje od −40 do 120 °C. Flagi mają uznanie UL (UL 969) oraz akceptację CSA i spełniają RoHS. Nadruk wykonuje taśma barwiąca B30-R6000, kupowana osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-quickflag-tapered-wire-cable-flag-labels-cps-4578482',
  images: [
    '/images/products/brady/b33-360-483.png',
    '/images/products/brady/b33-361-483.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-360-483 na uchwycie z wysuniętym paskiem białych flag QuickFlag o szerokości pola nadruku 25,4 mm',
    'Rolka Brady B33-361-483 na uchwycie z wysuniętym paskiem białych flag QuickFlag o szerokości pola nadruku 48,26 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka flag kablowych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'QuickFlag B-483A' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; na ogonie flagi' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, korozja, wilgoć, UV, warunki atmosferyczne, chemikalia, paliwo i olej' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Wymiary etykiety', value: '25,4 × 50,8 mm lub 48,26 × 50,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '1500' },
    { name: 'Normy', value: 'UL 969 (uznanie UL); CSA; RoHS 2011/65/UE (zmiana 2015/863)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: QUICKFLAG_483.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: QUICKFLAG_483.map(([pn, , szer, pole]) => ({
    partNumber: pn,
    name: `Brady ${pn} — flagi QuickFlag ${szer} × 50,8 mm`,
    attributes: { Rozmiar: `${szer} × 50,8 mm, 1500 szt.`, 'Pole nadruku': `${pole} × 25,4 mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary całej flagi razem z ogonem klejącym oraz liczba sztuk na rolce.\n\nWysokość flagi wynosi 50,8 mm, a szerokość 25,4 albo 48,26 mm.',
    'Pole nadruku': 'Część flagi bez kleju, na której powstaje opis.\n\nWysokość pola to 25,4 mm, a szerokość odpowiada szerokości flagi.',
  },
  faq: [
    { question: 'Dlaczego ogon flagi QuickFlag jest zwężany?', answer: 'Zwężony ogon owija się na przewodzie bez niedopasowanych krawędzi i bez odsłoniętego kleju. Dzięki temu flagę zakłada się szybciej.' },
    { question: 'Jakie normy spełniają flagi B-483A?', answer: 'Mają uznanie UL (UL 969) oraz akceptację CSA. Spełniają też RoHS 2011/65/UE.' },
    { question: 'Jaką taśmę barwiącą zamówić do flag QuickFlag?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Flagi drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Flagi na przewodach i kablach', 'Oznaczanie kabli komunikacyjnych, w tym CAT 6', 'Znakowanie elektryczne'],
}

// ---------------------------------------------------------------------------
// Zawieszki kablowe B-7643 (cps-3079453); bez B33-75x25-7643-BK, którego Brady nie udostępnia
// ---------------------------------------------------------------------------

// rozmiar → [szerokość, wysokość, sztuk na rolce]
const ROZMIARY_7643: Record<string, [string, string, string]> = {
  '60x10': ['60', '10', '750'],
  '75x10': ['75', '10', '750'],
  '75x15': ['75', '15', '500'],
  '75x25': ['75', '25', '250'],
}

// [rozmiar, kolor, nr art.]
const ZAWIESZKI_7643: [string, string, string][] = [
  ['60x10', 'WT', '197481'], ['60x10', 'YL', '197482'], ['60x10', 'GN', '197483'], ['60x10', 'RD', '197484'], ['60x10', 'OR', '197485'], ['60x10', 'BK', '197486'], ['60x10', 'BL', '197487'],
  ['75x10', 'WT', '197488'], ['75x10', 'YL', '197489'], ['75x10', 'GN', '197490'], ['75x10', 'RD', '197491'], ['75x10', 'OR', '197492'], ['75x10', 'BK', '197493'], ['75x10', 'BL', '197494'],
  ['75x15', 'WT', '197495'], ['75x15', 'YL', '197496'], ['75x15', 'GN', '197497'], ['75x15', 'RD', '197498'], ['75x15', 'OR', '197499'], ['75x15', 'BK', '197500'], ['75x15', 'BL', '197501'],
  ['75x25', 'WT', '197503'], ['75x25', 'YL', '197504'], ['75x25', 'GN', '197505'], ['75x25', 'RD', '197506'], ['75x25', 'OR', '197507'], ['75x25', 'BL', '197509'],
]

export const bradyB33ZawieszkiKablowe7643: Product = {
  ...wspolneB33,
  id: 'brady-b33-75x15-7643-wt',
  slug: 'brady-b33-75x15-7643-wt',
  name: 'Zawieszki kablowe z poliuretanu Brady B-7643 do drukarki i3300',
  seoTitle: 'Brady B-7643 — zawieszki kablowe z poliuretanu do i3300',
  seoDescription: 'Zawieszki kablowe Brady B-7643 do drukarki Brady i3300: poliuretan bezhalogenowy, 4 otwory, 7 kolorów, 4 rozmiary. PN: B33-75x15-7643-WT, B33-60x10-7643-YL.',
  shortDescription: 'Brady B-7643 to bezhalogenowe zawieszki kablowe z poliuretanu z czterema otworami, w czterech rozmiarach i siedmiu kolorach. Do drukarki Brady i3300.',
  description: 'Zawieszki B-7643 wykonano z termoplastycznego poliuretanu polieterowego. Materiał jest bezhalogenowy i ma matową powierzchnię. Zawieszki oznaczają przewody i kable, w tym kable komunikacyjne w sieciach danych i telekomunikacji. Każda ma cztery owalne otwory o wymiarach 5 × 2 mm.\n\nZawieszki występują w czterech rozmiarach: 60 × 10, 75 × 10, 75 × 15 i 75 × 25 mm. Im wyższa zawieszka, tym mniej sztuk na rolce: od 750 do 250. Format 75 × 25 mm daje najwięcej miejsca na opis, a 60 × 10 mm najmniej. Kolory to biały, żółty, czerwony, niebieski, zielony i pomarańczowy. Czarny występuje w trzech pierwszych rozmiarach.\n\nGrubość folii wynosi 0,45 mm. Zawieszki nie zmieniają właściwości w przedziale od −40 do 90 °C. Poliuretan toleruje ścieranie, kontakt z chemikaliami i wilgoć. Zgodnie z IEC 61249-2-21 materiał uznaje się za wolny od halogenów. Do białych i kolorowych zawieszek pasuje kaseta B30-R6000, do czarnych B30-R4400-WT. Czerwone zawieszki obsługują i3300, i4311 i i5300, pozostałe także BBP33.',
  sameAs: 'https://www.brady.eu/labels/b-7643-cable-tags-for-bbp33-i3300-printers-cps-3079453',
  images: [
    '/images/products/brady/b33-75x15-7643-wt.png',
    '/images/products/brady/b33-75x25-7643-yl.png',
    '/images/products/brady/b33-75x15-7643-bk.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-75x15-7643-WT na uchwycie z wysuniętym paskiem białych zawieszek kablowych z owalnymi otworami',
    'Rolka Brady B33-75x25-7643-YL z żółtymi zawieszkami kablowymi o wymiarach 75 × 25 mm',
    'Rolka Brady B33-75x15-7643-BK z czarnymi zawieszkami kablowymi o wymiarach 75 × 15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały, żółty, czerwony, niebieski, zielony, pomarańczowy, czarny' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wymiary etykiety', value: '60 × 10, 75 × 10, 75 × 15 lub 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '750, 500 lub 250 na rolce, zależnie od rozmiaru' },
    { name: 'Otwory', value: '4 otwory owalne 5 × 2 mm' },
    { name: 'Normy', value: 'wymagania IEC 61249-2-21 (2003-11) dla materiałów bezhalogenowych' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (zawieszki białe i kolorowe), B30-R4400-WT (czarne)' },
    { name: 'Zgodne drukarki', value: 'i3300, i4311, i5300; BBP33 (poza zawieszkami czerwonymi)' },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_7643.map(([rozm, kol, art]) => `B33-${rozm}-7643-${kol}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_7643.map(([rozm, kol]) => {
    const [szer, wys, szt] = ROZMIARY_7643[rozm]
    return {
      partNumber: `B33-${rozm}-7643-${kol}`,
      name: `Brady B33-${rozm}-7643-${kol} — ${KOLORY_ZENSKIE[kol]} zawieszka kablowa ${szer} × ${wys} mm`,
      attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Kolor: KOLORY[kol] },
      availability: 'unavailable' as const,
    }
  }),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej zawieszki oraz liczba sztuk na rolce.\n\nIm wyższa zawieszka, tym mniej sztuk mieści się na rolce: 750, 500 albo 250.',
    Kolor: 'Kolor poliuretanu.\n\nDostępnych jest siedem kolorów. Czarny nie jest dostępny w rozmiarze 75 × 25 mm.',
  },
  faq: [
    { question: 'Czy zawieszki B-7643 zawierają halogeny?', answer: 'Nie. Poliuretan jest bezhalogenowy i spełnia wymagania IEC 61249-2-21 dla takich materiałów.' },
    { question: 'Ile otworów mają zawieszki B-7643?', answer: 'Cztery owalne otwory o wymiarach 5 × 2 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszek B-7643?', answer: 'Do zawieszek białych i kolorowych zaleca się B30-R6000, a do czarnych B30-R4400-WT. Drukuje je przemysłowa [Brady i3300](/produkt/brady-i3300). Czerwonych zawieszek nie drukuje się w BBP33.' },
  ],
  applications: ['Zawieszki na kablach i przewodach', 'Oznaczanie kabli komunikacyjnych w sieciach danych i telekomunikacji'],
}

// ---------------------------------------------------------------------------
// Flagi polipropylenowe WorkHorse B-425A (cps-4362869)
// ---------------------------------------------------------------------------

export const bradyB33FlagiPolipropylenowe425: Product = {
  ...wspolneB33,
  id: 'brady-b33fp-01-425',
  slug: 'brady-b33fp-01-425',
  name: 'Flagi polipropylenowe Brady WorkHorse B-425A do drukarki i3300',
  seoTitle: 'Brady WorkHorse B-425A — flagi polipropylenowe do i3300',
  seoDescription: 'Flagi Brady WorkHorse B-425A do drukarki Brady i3300: biały polipropylen, 30 × 20 mm, 1000 szt., od −70 °C, do zamrażarek. PN: B33FP-01-425, B33FT-01-425.',
  shortDescription: 'Brady WorkHorse B-425A to białe flagi z polipropylenu o wymiarach 30 × 20 mm, 1000 sztuk w opakowaniu, odporne na niskie temperatury. Do drukarki Brady i3300.',
  description: 'Flagi B-425A wykonano z białego polipropylenu o matowej powierzchni. Materiał należy do linii WorkHorse i jest odporny na rozpuszczalniki. Flaga ma pole opisu oraz ogon o długości 20 mm, którym oklejany jest przewód. Klej akrylowy wiąże trwale z powierzchniami gładkimi.\n\nObie wersje mają wymiary 30 × 20 mm i po 1000 sztuk w opakowaniu. Różnią się układem na nośniku: jedna ma jeden rząd flag, druga dwa rzędy. Flagi pasują do przewodów o średnicy do 5,4 mm. Służą także do oznaczania komponentów, urządzeń i próbek laboratoryjnych oraz do etykiet z kodami kreskowymi.\n\nFolia jest cienka: 0,1143 mm. W zamrażarce flagi zachowują właściwości od −70 °C, a w cieple do 130 °C. Odporność na rozpuszczalniki i niskie temperatury pozwala oznaczać także próbki w zamrażarkach. Etykiety znoszą ścieranie, chemikalia, wilgoć, paliwo i olej. Atesty to uznanie UL i akceptacja CSA, a materiał nie zawiera halogenów. Do druku służy kaseta z taśmą barwiącą B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polypropylene-flag-labels-cps-4362869',
  images: [
    '/images/products/brady/b33ft-01-425.png',
    '/images/products/brady/b33fp-01-425.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33FT-01-425 na uchwycie z wysuniętym paskiem białych flag polipropylenowych ułożonych w dwóch rzędach',
    'Rysunek rolki Brady B33FP-01-425 z białymi flagami polipropylenowymi ułożonymi w jednym rzędzie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka flag B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-425A' },
    { name: 'Typ materiału', value: 'polipropylen, odporny na rozpuszczalniki' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, paliwo, olej, rozpuszczalniki' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Grubość', value: '0,1143 mm' },
    { name: 'Wymiary etykiety', value: '30 × 20 mm' },
    { name: 'Liczba sztuk', value: '1000' },
    { name: 'Zakres średnicy przewodu', value: 'do 5,4 mm' },
    { name: 'Normy', value: 'UL (uznanie); CSA; bezhalogenowy, DIN VDE 0472, część 815' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: 'B33FP-01-425: 361733; B33FT-01-425: 361734' },
  ],
  variants: [
    {
      partNumber: 'B33FP-01-425',
      name: 'Brady B33FP-01-425 — flagi polipropylenowe 30 × 20 mm, jeden rząd na nośniku',
      attributes: { Rozmiar: '30 × 20 mm, 1000 szt.', Układ: '1 rząd' },
      availability: 'unavailable' as const,
    },
    {
      partNumber: 'B33FT-01-425',
      name: 'Brady B33FT-01-425 — flagi polipropylenowe 30 × 20 mm, dwa rzędy na nośniku',
      attributes: { Rozmiar: '30 × 20 mm, 1000 szt.', Układ: '2 rzędy' },
      availability: 'unavailable' as const,
    },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary flagi oraz liczba sztuk w opakowaniu.\n\nObie wersje mają 30 × 20 mm i 1000 sztuk.',
    Układ: 'Liczba flag obok siebie na szerokości nośnika.\n\nJeden rząd odpowiada nośnikowi o szerokości 55,88 mm, dwa rzędy nośnikowi 69 mm.',
  },
  faq: [
    { question: 'Czy flagi B-425A nadają się do zamrażarek?', answer: 'Tak. Zakres temperatur pracy zaczyna się od −70 °C. Polipropylen jest też odporny na wilgoć, olej i rozpuszczalniki.' },
    { question: 'Na jaki przewód pasują flagi B33FP-01-425 i B33FT-01-425?', answer: 'Na przewody o średnicy do 5,4 mm. Ogon flagi ma 20 mm długości, a klej akrylowy wiąże z powierzchniami gładkimi.' },
    { question: 'Jaką taśmę barwiącą zamówić do flag B-425A?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Flagi drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Flagi na przewodach i kablach', 'Oznaczanie komponentów, urządzeń i próbek laboratoryjnych', 'Znakowanie w zamrażarkach'],
}

// ---------------------------------------------------------------------------
// PermaSleeve jednostronne B-342 (cps-3069386); bez B33-1500-2-342BK (wycofany) i trzech PN bez danych u producenta (…-1000-2-342YL-2, …-1000-2-342-2, …-1500-2-342-2)
// ---------------------------------------------------------------------------

// [PN, nr art., sztuk, długość koszulki mm, wysokość mm, przewód od, przewód do, kolor]
const PERMASLEEVE_342_J: [string, string, string, string, string, string, string, string][] = [
  ['B33-94-2-342', '142926', '1000', '50,8', '4,62', '0,58', '2,03', 'WT'],
  ['B33-94-2-342YL', '142932', '1000', '50,8', '4,62', '0,58', '2,03', 'YL'],
  ['B33-94-2-342-2', '133978', '2000', '25,4', '4,62', '0,58', '2,03', 'WT'],
  ['B33-94-2-342YL-2', '133979', '2000', '25,4', '4,62', '0,58', '2,03', 'YL'],
  ['B33-125-2-342', '143034', '1000', '50,8', '5,97', '1,17', '2,79', 'WT'],
  ['B33-125-2-342YL', '143035', '1000', '50,8', '5,97', '1,17', '2,79', 'YL'],
  ['B33-125-2-342-2', '133784', '2000', '25,4', '5,97', '1,17', '2,79', 'WT'],
  ['B33-125-2-342YL-2', '133785', '2000', '25,4', '5,97', '1,17', '2,79', 'YL'],
  ['B33-187-2-342', '143036', '750', '50,8', '8,51', '1,57', '3,81', 'WT'],
  ['B33-187-2-342YL', '143037', '750', '50,8', '8,51', '1,57', '3,81', 'YL'],
  ['B33-187-2-342-2', '142944', '1500', '25,4', '8,51', '1,57', '3,81', 'WT'],
  ['B33-250-2-342', '143038', '500', '50,8', '11,15', '2,39', '5,46', 'WT'],
  ['B33-250-2-342YL', '142930', '500', '50,8', '11,15', '2,39', '5,46', 'YL'],
  ['B33-250-2-342-2', '142945', '1000', '25,4', '11,15', '2,39', '5,46', 'WT'],
  ['B33-375-2-342', '143039', '500', '50,8', '16,38', '3,18', '8,13', 'WT'],
  ['B33-375-2-342YL', '142931', '500', '50,8', '16,38', '3,18', '8,13', 'YL'],
  ['B33-375-2-342-2', '142946', '1000', '25,4', '16,38', '3,18', '8,13', 'WT'],
  ['B33-500-2-342', '143040', '350', '50,8', '21,62', '4,75', '11,43', 'WT'],
  ['B33-500-2-342YL', '142927', '350', '50,8', '21,62', '4,75', '11,43', 'YL'],
  ['B33-500-2-342-2', '133879', '700', '25,4', '21,62', '4,75', '11,43', 'WT'],
  ['B33-500-2-342YL-2', '133880', '700', '25,4', '21,62', '4,75', '11,43', 'YL'],
  ['B33-750-2-342', '143041', '250', '50,8', '31,75', '6,35', '17,78', 'WT'],
  ['B33-750-2-342YL', '142934', '250', '50,8', '31,75', '6,35', '17,78', 'YL'],
  ['B33-1000-2-342', '143032', '250', '50,8', '42,16', '8,46', '24,13', 'WT'],
  ['B33-1000-2-342YL', '143033', '250', '50,8', '42,16', '8,46', '24,13', 'YL'],
  ['B33-1500-2-342', '142992', '150', '50,8', '61,8', '12,7', '36,83', 'WT'],
  ['B33-1500-2-342YL', '142993', '150', '50,8', '61,8', '12,7', '36,83', 'YL'],
  ['B33-1500-2-342YL-2', '133809', '300', '25,4', '61,8', '12,7', '36,83', 'YL'],
]

export const bradyB33PermaSleeve342Jednostronne: Product = {
  ...wspolneB33,
  id: 'brady-b33-125-2-342',
  slug: 'brady-b33-125-2-342',
  name: 'Jednostronne koszulki termokurczliwe Brady PermaSleeve B-342 do drukarki i3300',
  seoTitle: 'Brady PermaSleeve B-342 — koszulki jednostronne do drukarki i3300',
  seoDescription: 'Koszulki Brady PermaSleeve B-342 do drukarki Brady i3300: poliolefina 3:1, nadruk jednostronny, 25,4 lub 50,8 mm. PN: B33-125-2-342, B33-750-2-342YL.',
  shortDescription: 'Brady PermaSleeve B-342 w wersji jednostronnej to białe i żółte koszulki termokurczliwe 3:1 o długości 25,4 lub 50,8 mm, na przewody od 0,58 do 36,83 mm. Do drukarki Brady i3300.',
  description: 'Koszulki PermaSleeve B-342 w wersji jednostronnej wykonano z poliolefiny, która kurczy się pod wpływem ciepła w stosunku 3:1. Nadruk znajduje się tylko na jednej stronie koszulki. Po obkurczeniu materiał ściśle obejmuje izolację przewodu. Folia jest matowa, trudnopalna oraz odporna na blaknięcie i rozmazywanie.\n\nRodzina obejmuje koszulki o dwóch długościach: 50,8 i 25,4 mm. Krótsze układają się na nośniku w dwóch rzędach, dłuższe w jednym. Dłuższa koszulka daje więcej miejsca na opis, a krótsza pozwala zmieścić na rolce więcej sztuk. Średnice przewodów, na które pasują, zaczynają się od 0,58 mm i sięgają 36,83 mm. Kolory to biały i żółty. Opakowanie zawiera od 150 do 2000 koszulek. Zakres przewodu dla danej koszulki podaje tabela wariantów.\n\nKoszulki pracują w przedziale temperatur od −55 do 135 °C. Wymagane normy lotnicze SAE i uznanie UL podano w specyfikacji. Do każdej wersji pasuje taśma barwiąca B30-R4300. Wydruk wykonają: i3300, a ze starszych urządzeń BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permasleeve-single-sided-polyolefin-wire-marking-sleeves-cps-3069386',
  images: [
    '/images/products/brady/b33-125-2-342.png',
    '/images/products/brady/b33-750-2-342yl.png',
    '/images/products/brady/b33-125-2-342-2.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-125-2-342 na uchwycie z białymi koszulkami termokurczliwymi PermaSleeve o długości 50,8 mm',
    'Rolka Brady B33-750-2-342YL z żółtymi koszulkami termokurczliwymi PermaSleeve na przewody grube',
    'Rolka Brady B33-125-2-342-2 z białymi koszulkami o długości 25,4 mm, ułożonymi w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve B-342' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 3:1, trudnopalna' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'po jednej stronie koszulki, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 135 °C' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'długość 25,4 lub 50,8 mm, wysokość od 4,62 do 61,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 150 do 2000 w opakowaniu, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,58 do 36,83 mm (28 AWG – 2000 MCM)' },
    { name: 'Normy', value: 'SAE AS-81531; SAE-AMS-DTL-23053/5 (klasa 1); UL 224 (uznanie UL); MIL-STD-202; RoHS' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASLEEVE_342_J.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASLEEVE_342_J.map(([pn, , szt, dl, wys, od, do_, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} koszulka PermaSleeve ${dl} mm na przewód Ø ${od}–${do_} mm`,
    attributes: { Rozmiar: `${dl} × ${wys} mm, ${szt} szt.`, Przewód: `Ø ${od}–${do_} mm`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk w opakowaniu.\n\nDługość wynosi 25,4 albo 50,8 mm, a drugi wymiar rośnie od 4,62 do 61,8 mm.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy sięgają od 0,58 do 36,83 mm.',
    Kolor: 'Kolor koszulki.\n\nDostępne są wersje białe i żółte.',
  },
  faq: [
    { question: 'Czym różnią się koszulki B33-125-2-342 i B33-125-2-342-2?', answer: 'Długością i układem na nośniku. Wersja z końcówką -2 ma 25,4 mm długości i leży w dwóch rzędach, a pozostałe mają 50,8 mm i leżą w jednym.' },
    { question: 'Po ilu stronach można drukować na koszulkach B-342 w tej wersji?', answer: 'Po jednej. Wersja dwustronna ma nadruk po obu stronach koszulki.' },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek B-342?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Koszulki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie elektryczne', 'Oznaczanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Zawieszki kablowe do transportu szynowego B-348 (cps-3079466); bez B33-7525-348-YL, którego Brady nie udostępnia
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm, wysokość mm, sztuk na rolce, kolor]
const ZAWIESZKI_348: [string, string, string, string, string, string][] = [
  ['B33-6010-348-WT', '198711', '60', '10', '750', 'WT'],
  ['B33-6010-348-YL', '198715', '60', '10', '750', 'YL'],
  ['B33-7510-348-WT', '198712', '75', '10', '750', 'WT'],
  ['B33-7510-348-YL', '198716', '75', '10', '750', 'YL'],
  ['B33-7515-348-WT', '198713', '75', '15', '500', 'WT'],
  ['B33-7515-348-YL', '198717', '75', '15', '500', 'YL'],
  ['B33-7525-348-WT', '198714', '75', '25', '250', 'WT'],
]

export const bradyB33ZawieszkiTransportSzynowy348: Product = {
  ...wspolneB33,
  id: 'brady-b33-6010-348-wt',
  slug: 'brady-b33-6010-348-wt',
  name: 'Zawieszki kablowe do transportu szynowego Brady B-348 do drukarki i3300',
  seoTitle: 'Brady B-348 — zawieszki kablowe do transportu szynowego i3300',
  seoDescription: 'Zawieszki kablowe Brady B-348 do drukarki Brady i3300: poliolefina o niskiej emisji dymu, EN 45545-2, HL3, 4 rozmiary. PN: B33-6010-348-WT, B33-7515-348-YL.',
  shortDescription: 'Brady B-348 to bezhalogenowe zawieszki kablowe z poliolefiny o niskiej emisji dymu dla transportu szynowego, w czterech rozmiarach, białe i żółte. Do drukarki Brady i3300.',
  description: 'Zawieszki B-348 służą do znakowania kabli i przewodów w transporcie szynowym oraz w okablowaniu teleinformatycznym. Wykonano je z poliolefiny o niskiej emisji dymu, bez halogenów. Powierzchnia jest matowa. W każdej zawieszce wycięto po cztery owalne otwory, każdy 5 × 2 mm.\n\nDo wyboru są cztery formaty, od 60 × 10 do 75 × 25 mm, w kolorze białym lub żółtym. Rolka mieści 750, 500 albo 250 zawieszek, zależnie od wysokości, a nośnik ma szerokość 60 lub 75 mm. Żółtej zawieszki w formacie 75 × 25 mm nie ma w ofercie. Nazwa Mass Transit odnosi się do transportu zbiorowego. Obie barwy mają te same wymiary i właściwości.\n\nMateriał spełnia wymagania normy EN 45545-2 dla pojazdów szynowych: wymaganie 24, kategoria HL3. Niska emisja dymu ogranicza zadymienie podczas pożaru. Dopuszczalna temperatura mieści się w granicach od −55 do 105 °C. Nadruk wykonuje się kasetą z taśmą barwiącą B30-R6000. Zawieszki drukują i3300 oraz starsze BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/mass-transit-cable-tag-for-bbp33-i3300-printers-cps-3079466',
  images: [
    '/images/products/brady/b33-6010-348-wt.png',
    '/images/products/brady/b33-7515-348-wt.png',
    '/images/products/brady/b33-7510-348-yl.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-6010-348-WT na uchwycie z wysuniętym paskiem białych zawieszek kablowych o wymiarach 60 × 10 mm',
    'Rolka Brady B33-7515-348-WT z białymi zawieszkami kablowymi o wymiarach 75 × 15 mm',
    'Rolka Brady B33-7510-348-YL z żółtymi zawieszkami kablowymi o wymiarach 75 × 10 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-348' },
    { name: 'Typ materiału', value: 'poliolefina o niskiej emisji dymu, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '60 × 10, 75 × 10, 75 × 15 lub 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '750, 500 lub 250 na rolce, zależnie od rozmiaru' },
    { name: 'Otwory', value: '4 otwory owalne 5 × 2 mm' },
    { name: 'Normy', value: 'EN 45545-2, wymaganie 24, kategoria pojazdu HL3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_348.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_348.map(([pn, , szer, wys, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} zawieszka kablowa ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej zawieszki oraz liczba sztuk na rolce.\n\nWysokość 10 mm daje 750 sztuk, 15 mm daje 500, a 25 mm daje 250.',
    Kolor: 'Kolor poliolefiny.\n\nZawieszki są białe albo żółte. Żółty nie jest dostępny w rozmiarze 75 × 25 mm.',
  },
  faq: [
    { question: 'Jakie wymagania dla pojazdów szynowych spełniają zawieszki B-348?', answer: 'Materiał spełnia EN 45545-2, wymaganie 24, dla kategorii pojazdu HL3. Jest bezhalogenowy i wydziela mało dymu.' },
    { question: 'Ile otworów mają zawieszki B-348?', answer: 'Cztery owalne otwory o wymiarach 5 × 2 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszek B-348?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Zawieszki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie kabli w transporcie szynowym', 'Oznaczanie kabli w sieciach danych i telekomunikacji'],
}

// ---------------------------------------------------------------------------
// PermaSleeve HX B-7642 (cps-3069383); bez siedmiu PN, których Brady nie udostępnia (B33D-187/250/375/500/750/2000-2-7642, B33-2000-2-7642)
// ---------------------------------------------------------------------------

// [PN, nr art., sztuk, wysokość mm, przewód od, przewód do, nadruk]
const PERMASLEEVE_HX: [string, string, string, string, string, string, 'J' | 'D'][] = [
  ['B33-94-2-7642', '142897', '500', '4,62', '1,19', '2,03', 'J'],
  ['B33D-94-2-7642', '142907', '500', '4,62', '1,19', '2,03', 'D'],
  ['B33-125-2-7642', '142898', '500', '5,97', '1,57', '2,79', 'J'],
  ['B33D-125-2-7642', '142908', '500', '5,97', '1,57', '2,79', 'D'],
  ['B33-187-2-7642', '142899', '450', '8,51', '2,39', '3,81', 'J'],
  ['B33-250-2-7642', '142900', '400', '11,15', '3,18', '5,46', 'J'],
  ['B33-375-2-7642', '142901', '250', '16,38', '4,78', '8,13', 'J'],
  ['B33-500-2-7642', '142902', '225', '21,62', '6,35', '11,43', 'J'],
  ['B33-750-2-7642', '142903', '150', '31,75', '9,53', '17,78', 'J'],
  ['B33-1000-2-7642', '142904', '150', '42,16', '12,7', '24,13', 'J'],
  ['B33D-1000-2-7642', '142914', '150', '42,16', '12,7', '24,13', 'D'],
  ['B33-1500-2-7642', '142905', '50', '61,8', '19,05', '36,83', 'J'],
  ['B33D-1500-2-7642', '142915', '50', '61,8', '19,05', '36,83', 'D'],
]

export const bradyB33PermaSleeveHX: Product = {
  ...wspolneB33,
  id: 'brady-b33-94-2-7642',
  slug: 'brady-b33-94-2-7642',
  name: 'Koszulki termokurczliwe Brady PermaSleeve HX B-7642 do drukarki i3300',
  seoTitle: 'Brady PermaSleeve HX B-7642 — koszulki 2:1 do drukarki i3300',
  seoDescription: 'Koszulki Brady PermaSleeve HX B-7642 do drukarki Brady i3300: poliolefina 2:1, od −40 do 120 °C. PN: B33-94-2-7642, B33D-125-2-7642, B33-750-2-7642.',
  shortDescription: 'Brady PermaSleeve HX B-7642 to białe, elastyczne koszulki termokurczliwe 2:1 z poliolefiny, na przewody od 1,19 do 36,83 mm. Do drukarki Brady i3300.',
  description: 'PermaSleeve HX B-7642 to elastyczne koszulki z poliolefiny, które kurczą się w stosunku 2:1. Oznacza to, że po ogrzaniu średnica koszulki maleje o połowę. Są trudnopalne i przystosowane do wyższych temperatur pracy. Dostarcza się je w formie płaskiej na nośniku, w rolce przeznaczonej dla drukarek sterowanych komputerowo. Powierzchnia jest matowa, a kolor biały.\n\nWszystkie koszulki mają 50,8 mm długości. Średnice przewodów mieszczą się między 1,19 a 36,83 mm. Wersje z literą D w numerze drukuje się po obu stronach, pozostałe po jednej. Liczba sztuk w opakowaniu waha się od 50 do 500.\n\nKoszulki znoszą temperatury od −40 do 120 °C. Poliolefina gaśnie sama po odsunięciu płomienia, jest odporna na chemikalia i korozję, wilgoć, UV oraz pogodę. Spełnione są normy SAE dla koszulek w klasach 1 i 3, a wykonano też badania ASTM E162 i E662 (wykaz w specyfikacji). Zalecana jest taśma barwiąca B30-R4300. Obsługują je i3300, BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permasleeve-hx-polyolefin-wire-marking-sleeves-cps-3069383',
  images: [
    '/images/products/brady/b33-94-2-7642.png',
    '/images/products/brady/b33-750-2-7642.png',
    '/images/products/brady/b33d-125-2-7642.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-94-2-7642 na uchwycie z białymi koszulkami termokurczliwymi PermaSleeve HX o wysokości 4,62 mm',
    'Rolka Brady B33-750-2-7642 z białymi koszulkami PermaSleeve HX na przewody grube',
    'Rolka Brady B33D-125-2-7642 z białymi koszulkami PermaSleeve HX do nadruku dwustronnego',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve HX B-7642' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'po jednej stronie (B33) lub po obu stronach (B33D), termotransfer' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, wysokość od 4,62 do 61,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 50 do 500 w opakowaniu, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,19 do 36,83 mm (24 AWG – 2000 MCM)' },
    { name: 'Normy', value: 'SAE-AMS-DTL-23053/5 (klasy 1 i 3); SAE AS-81531; badania ASTM E162 i ASTM E662' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASLEEVE_HX.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASLEEVE_HX.map(([pn, , szt, wys, od, do_, nadruk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała koszulka PermaSleeve HX na przewód Ø ${od}–${do_} mm, nadruk ${nadruk === 'D' ? 'dwustronny' : 'jednostronny'}`,
    attributes: { Rozmiar: `50,8 × ${wys} mm, ${szt} szt.`, Przewód: `Ø ${od}–${do_} mm`, Nadruk: nadruk === 'D' ? 'Dwustronny' : 'Jednostronny' },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk w opakowaniu.\n\nDługość wynosi zawsze 50,8 mm, a drugi wymiar rośnie od 4,62 do 61,8 mm.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy sięgają od 1,19 do 36,83 mm.',
    Nadruk: 'Liczba stron koszulki, na których drukarka umieszcza opis.\n\nWersje B33D mają nadruk dwustronny, a B33 jednostronny.',
  },
  faq: [
    { question: 'Czym różni się PermaSleeve HX od koszulek 3:1?', answer: 'Koszulki HX kurczą się w stosunku 2:1 i pracują w zakresie od −40 do 120 °C. Poliolefina jest samogasnąca i elastyczna.' },
    { question: 'Jakie normy spełniają koszulki B-7642?', answer: 'SAE AS-81531 i SAE-AMS-DTL-23053/5 w klasach 1 i 3. Materiał przeszedł też badania ASTM E162 i ASTM E662.' },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek HX?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Koszulki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie elektryczne', 'Oznaczanie przewodów i kabli'],
}

// ---------------------------------------------------------------------------
// Heatex — oznaczniki kabli B-7643 (cps-3079456)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm, wysokość mm, sztuk na rolce, kolor]
const HEATEX_7643: [string, string, string, string, string, string][] = [
  ['B33-6010-7643-WT', '195554', '60', '10', '500', 'WT'],
  ['B33-6010-7643-YL', '195555', '60', '10', '500', 'YL'],
  ['B33-7510-7643-WT', '195556', '75', '10', '500', 'WT'],
  ['B33-7510-7643-YL', '195557', '75', '10', '500', 'YL'],
  ['B33-7515-7643-WT', '195558', '75', '15', '500', 'WT'],
  ['B33-7515-7643-YL', '195559', '75', '15', '500', 'YL'],
  ['B33-7525-7643-WT', '195560', '75', '25', '250', 'WT'],
  ['B33-7525-7643-YL', '195561', '75', '25', '250', 'YL'],
]

export const bradyB33HeatexOznaczniki7643: Product = {
  ...wspolneB33,
  id: 'brady-b33-6010-7643-wt',
  slug: 'brady-b33-6010-7643-wt',
  name: 'Oznaczniki kabli Brady Heatex B-7643 do drukarki i3300',
  seoTitle: 'Brady Heatex B-7643 — oznaczniki kabli do drukarki i3300',
  seoDescription: 'Oznaczniki kabli Brady Heatex B-7643 do drukarki Brady i3300: poliuretan bezhalogenowy, 4 otwory, biały i żółty. PN: B33-6010-7643-WT, B33-7515-7643-YL.',
  shortDescription: 'Brady Heatex B-7643 to bezhalogenowe oznaczniki kabli z poliuretanu w czterech rozmiarach, białe i żółte, po 4 otwory. Do drukarki Brady i3300.',
  description: 'Oznaczniki kabli Heatex wyróżniają przewody w kablach elektrycznych i teleinformatycznych. Folia z poliuretanu termoplastycznego (typ polieterowy) jest matowa i wolna od halogenów. Cztery owalne otwory, każdy o wymiarach 5 × 2 mm, znajdują się w każdym oznaczniku.\n\nOferta obejmuje osiem wersji: cztery formaty o szerokości 60 lub 75 mm i wysokości od 10 do 25 mm, w bieli i żółci. Każdy format jest dostępny w obu kolorach, więc wybór sprowadza się do wymiaru i barwy. Rolka mieści 500 oznaczników, a przy wysokości 25 mm o połowę mniej. Materiał i grubość folii są jednakowe w każdej wersji. Nośnik ma szerokość 108,97 mm.\n\nGrubość folii to 0,45 mm. Oznaczniki wytrzymują ścieranie, wilgoć i chemikalia, a temperatura robocza sięga od −40 do 90 °C. Wymagania IEC 61249-2-21 (wydanie z listopada 2003) dotyczące halogenów są spełnione. Opis powstaje w druku termotransferowym. Taśma B30-R6000 pasuje do obu kolorów. Obsługują ją i3300 oraz BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/heatex-cable-markers-for-bbp33-i3300-printers-cps-3079456',
  images: [
    '/images/products/brady/b33-6010-7643-wt.png',
    '/images/products/brady/b33-7515-7643-yl.png',
    '/images/products/brady/b33-7525-7643-wt.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-6010-7643-WT na uchwycie z białymi oznacznikami kabli Heatex o wymiarach 60 × 10 mm',
    'Rolka Brady B33-7515-7643-YL z żółtymi oznacznikami kabli Heatex o wymiarach 75 × 15 mm',
    'Rolka Brady B33-7525-7643-WT z białymi oznacznikami kabli Heatex o wymiarach 75 × 25 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka oznaczników kabli B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Heatex B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy, bezhalogenowy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wymiary etykiety', value: '60 × 10, 75 × 10, 75 × 15 lub 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '500 lub 250 na rolce, zależnie od rozmiaru' },
    { name: 'Otwory', value: '4 otwory owalne 5 × 2 mm' },
    { name: 'Normy', value: 'wymagania IEC 61249-2-21 (2003-11) dla materiałów bezhalogenowych' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: HEATEX_7643.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: HEATEX_7643.map(([pn, , szer, wys, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} oznacznik kabli Heatex ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednego oznacznika oraz liczba sztuk na rolce.\n\nFormat 75 × 25 mm ma 250 sztuk, pozostałe po 500.',
    Kolor: 'Kolor poliuretanu.\n\nKażdy format jest dostępny jako biały i żółty.',
  },
  faq: [
    { question: 'Czy oznaczniki Heatex B-7643 zawierają halogeny?', answer: 'Nie. Poliuretan jest bezhalogenowy i spełnia wymagania IEC 61249-2-21.' },
    { question: 'Ile otworów mają oznaczniki Heatex?', answer: 'Cztery owalne otwory o wymiarach 5 × 2 mm.' },
    { question: 'Jaką taśmę barwiącą zamówić do oznaczników Heatex?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Oznaczniki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Znakowanie kabli w sieciach danych i telekomunikacji'],
}

// ---------------------------------------------------------------------------
// Zawieszki kablowe z poliestru B-7598 (cps-3079454); bez dwóch wycofanych PN (…-75x25-7598-SV, …-75x25-7598-BL)
// i ośmiu PN bez danych u producenta (w tym wszystkich srebrnych)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm, wysokość mm, pole nadruku mm, sztuk na rolce, kolor]
const ZAWIESZKI_7598: [string, string, string, string, string, string, string][] = [
  ['B33-60x10-7598-WT', '197539', '60', '10', '40', '1000', 'WT'],
  ['B33-60x10-7598-YL', '197540', '60', '10', '40', '1000', 'YL'],
  ['B33-60x10-7598-GN', '197541', '60', '10', '40', '1000', 'GN'],
  ['B33-60x10-7598-RD', '197542', '60', '10', '40', '1000', 'RD'],
  ['B33-60x10-7598-BK', '197544', '60', '10', '40', '1000', 'BK'],
  ['B33-60x10-7598-BL', '197545', '60', '10', '40', '1000', 'BL'],
  ['B33-75x10-7598-WT', '197546', '75', '10', '55', '1000', 'WT'],
  ['B33-75x10-7598-YL', '197547', '75', '10', '55', '1000', 'YL'],
  ['B33-75x10-7598-BL', '197552', '75', '10', '55', '1000', 'BL'],
  ['B33-75x15-7598-WT', '197553', '75', '15', '55', '1000', 'WT'],
  ['B33-75x15-7598-YL', '197554', '75', '15', '55', '1000', 'YL'],
  ['B33-75x15-7598-RD', '197556', '75', '15', '55', '1000', 'RD'],
  ['B33-75x15-7598-BK', '197558', '75', '15', '55', '1000', 'BK'],
  ['B33-75x15-7598-BL', '197559', '75', '15', '55', '1000', 'BL'],
  ['B33-75x25-7598-WT', '197560', '75', '25', '55', '500', 'WT'],
  ['B33-75x25-7598-YL', '197561', '75', '25', '55', '500', 'YL'],
  ['B33-75x25-7598-GN', '197562', '75', '25', '55', '500', 'GN'],
  ['B33-75x25-7598-BK', '197565', '75', '25', '55', '500', 'BK'],
]

export const bradyB33ZawieszkiPoliester7598: Product = {
  ...wspolneB33,
  id: 'brady-b33-60x10-7598-wt',
  slug: 'brady-b33-60x10-7598-wt',
  name: 'Poliestrowe zawieszki kablowe Brady B-7598 do drukarki i3300',
  seoTitle: 'Brady B-7598 — poliestrowe zawieszki kablowe do drukarki i3300',
  seoDescription: 'Poliestrowe zawieszki kablowe Brady B-7598 do drukarki Brady i3300: połysk, 4 otwory, 6 kolorów, 4 rozmiary. PN: B33-60x10-7598-WT, B33-75x15-7598-YL.',
  shortDescription: 'Brady B-7598 to błyszczące zawieszki kablowe z poliestru z czterema otworami, w czterech rozmiarach i sześciu kolorach. Do drukarki Brady i3300.',
  description: 'Zawieszki B-7598 mają połysk i 0,20 mm grubości, a materiałem jest poliester. Oznaczają kable w telekomunikacji i transmisji danych oraz zwykłe przewody. Otwory są owalne, jest ich cztery, a każdy mierzy 5 × 2 mm.\n\nSzerokość zawieszki wynosi 60 lub 75 mm, a wysokość 10, 15 albo 25 mm. Pole nadruku zajmuje 40 mm w zawieszkach 60 mm oraz 55 mm w zawieszkach 75 mm. Kolory to biały, żółty, zielony, niebieski, czerwony i czarny, ale nie każdy występuje w każdym rozmiarze. Czarny występuje w trzech formatach (bez 75 × 10 mm), a niebieski także w trzech (bez 75 × 25 mm). Rolka ma 1000 zawieszek; wyjątkiem jest format 75 × 25 mm, gdzie jest ich 500.\n\nPoliester pozostaje sprawny w przedziale od −40 do 100 °C. Bezhalogenowe są tylko wersje białe i czarne (IEC 61249-2-21). Czarne zawieszki drukuje się taśmą barwiącą B30-R4400-WT, pozostałe taśmą B30-R6000. Wydruk obsługują i3300, BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/polyester-cable-tag-for-bbp33-i3300-printers-cps-3079454',
  images: [
    '/images/products/brady/b33-60x10-7598-wt.png',
    '/images/products/brady/b33-75x15-7598-yl.png',
    '/images/products/brady/b33-75x25-7598-bk.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-60x10-7598-WT na uchwycie z wysuniętym paskiem białych zawieszek kablowych z poliestru o wymiarach 60 × 10 mm',
    'Rolka Brady B33-75x15-7598-YL z żółtymi zawieszkami kablowymi z poliestru o wymiarach 75 × 15 mm',
    'Rolka Brady B33-75x25-7598-BK z czarnymi zawieszkami kablowymi z poliestru o wymiarach 75 × 25 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zawieszek kablowych B33, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolor', value: 'biały, żółty, zielony, niebieski, czerwony, czarny' },
    { name: 'Grubość', value: '0,20 mm' },
    { name: 'Wymiary etykiety', value: '60 × 10, 75 × 10, 75 × 15 lub 75 × 25 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: '1000 lub 500 na rolce, zależnie od rozmiaru' },
    { name: 'Otwory', value: '4 otwory owalne 5 × 2 mm' },
    { name: 'Normy', value: 'wersje białe i czarne bezhalogenowe, IEC 61249-2-21 (2003-11)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (zawieszki białe i kolorowe), B30-R4400-WT (czarne)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_7598.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_7598.map(([pn, , szer, wys, pole, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} zawieszka kablowa z poliestru ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, 'Pole nadruku': `${pole} × ${wys} mm`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej zawieszki oraz liczba sztuk na rolce.\n\nFormat 75 × 25 mm ma 500 sztuk, pozostałe po 1000.',
    'Pole nadruku': 'Część zawieszki, na której powstaje opis. Reszta zajmuje otwory.\n\nW zawieszkach o szerokości 60 mm pole ma 40 mm, a w zawieszkach 75 mm ma 55 mm.',
    Kolor: 'Kolor poliestru.\n\nNie każdy kolor jest dostępny w każdym rozmiarze. Czarny występuje w formatach 60 × 10, 75 × 15 i 75 × 25 mm.',
  },
  faq: [
    { question: 'Które zawieszki B-7598 są bezhalogenowe?', answer: 'Wersje białe i czarne spełniają IEC 61249-2-21. Pozostałe kolory nie mają takiego potwierdzenia.' },
    { question: 'W jakim zakresie temperatur pracują poliestrowe zawieszki B-7598?', answer: 'Od −40 do 100 °C. Folia ma 0,20 mm grubości i błyszczącą powierzchnię.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszek B-7598?', answer: 'Do białych i kolorowych zaleca się B30-R6000, a do czarnych B30-R4400-WT. Zawieszki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Zawieszki na kablach i przewodach', 'Oznaczanie kabli w sieciach danych i telekomunikacji'],
}

// ---------------------------------------------------------------------------
// PermaSleeve LSZH B-7641 (cps-3069385); bez trzech PN, których Brady nie udostępnia (B33D-94-2-7641Y, B33D-750-2-7641, B33D-1000-2-7641)
// ---------------------------------------------------------------------------

// [PN, nr art., sztuk, wysokość mm, przewód od, przewód do, kolor]
const PERMASLEEVE_LSZH: [string, string, string, string, string, string, string][] = [
  ['B33D-94-2-7641', '140928', '500', '4,62', '1,19', '2,03', 'WT'],
  ['B33D-125-2-7641', '140929', '500', '5,97', '1,57', '2,79', 'WT'],
  ['B33D-125-2-7641Y', '140920', '500', '5,97', '1,57', '2,79', 'YL'],
  ['B33D-187-2-7641', '140930', '450', '8,51', '2,39', '3,81', 'WT'],
  ['B33D-187-2-7641Y', '140921', '450', '8,51', '2,39', '3,81', 'YL'],
  ['B33D-250-2-7641', '140931', '400', '11,15', '3,18', '5,46', 'WT'],
  ['B33D-250-2-7641Y', '140922', '400', '11,15', '3,18', '5,46', 'YL'],
  ['B33D-375-2-7641', '140932', '250', '16,38', '4,78', '8,13', 'WT'],
  ['B33D-375-2-7641Y', '140923', '250', '16,38', '4,78', '8,13', 'YL'],
  ['B33D-500-2-7641', '140933', '225', '21,62', '6,35', '11,43', 'WT'],
  ['B33D-500-2-7641Y', '140924', '225', '21,62', '6,35', '11,43', 'YL'],
  ['B33D-750-2-7641Y', '140925', '150', '31,75', '9,53', '17,78', 'YL'],
  ['B33D-1000-2-7641Y', '140926', '150', '42,16', '12,7', '24,13', 'YL'],
  ['B33D-1500-2-7641', '140936', '50', '61,8', '19,05', '36,83', 'WT'],
  ['B33D-1500-2-7641Y', '140927', '50', '61,8', '19,05', '36,83', 'YL'],
]

export const bradyB33PermaSleeveLSZH: Product = {
  ...wspolneB33,
  id: 'brady-b33d-94-2-7641',
  slug: 'brady-b33d-94-2-7641',
  name: 'Bezhalogenowe koszulki termokurczliwe Brady PermaSleeve LSZH B-7641 do drukarki i3300',
  seoTitle: 'Brady PermaSleeve LSZH B-7641 — koszulki bezhalogenowe do i3300',
  seoDescription: 'Koszulki Brady PermaSleeve LSZH B-7641 do drukarki Brady i3300: bezhalogenowe, niska emisja dymu, 2:1, EN 45545-2. PN: B33D-94-2-7641, B33D-375-2-7641Y.',
  shortDescription: 'Brady PermaSleeve LSZH B-7641 to białe i żółte koszulki termokurczliwe 2:1 o niskiej emisji dymu, bez halogenów, na przewody od 1,19 do 36,83 mm. Do drukarki Brady i3300.',
  description: 'PermaSleeve B-7641 to koszulki o niskiej emisji dymu i bez halogenów, stosowane tam, gdzie liczy się bezpieczeństwo pożarowe. Elastyczna poliolefina jest samogasnąca i kurczy się w stosunku 2:1, czyli o połowę średnicy. Nadruk wykonuje się po obu stronach koszulki. Powierzchnia jest matowa.\n\nWszystkie koszulki mają długość 50,8 mm, a obsługiwany zakres średnic przewodu to 1,19–36,83 mm, od 24 AWG do 2000 MCM. Występują w kolorze białym i żółtym. Wersje biała i żółta mają takie same wymiary i różnią się tylko kolorem. Opakowanie zawiera od 50 do 500 sztuk, zależnie od rozmiaru. Niskie zadymienie ma znaczenie w pojazdach szynowych, do których odnoszą się normy wymienione poniżej.\n\nDla pojazdów szynowych materiał odpowiada normie BS 6853 (kategoria 1A) oraz EN 45545-2 (HL3, wymaganie 24). Zakres temperatur obejmuje od −55 do 105 °C. Odporność dotyczy także korozji, wilgoci, promieniowania UV, warunków pogodowych i chemikaliów. Zaleca się bezhalogenową taśmę barwiącą B30-R6000. Koszulki drukują i3300, BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permasleeve-low-smoke-zero-halogen-polyolefin-wire-marking-sleeves-cps-3069385',
  images: [
    '/images/products/brady/b33d-94-2-7641.png',
    '/images/products/brady/b33d-375-2-7641y.png',
    '/images/products/brady/b33d-500-2-7641.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33D-94-2-7641 na uchwycie z białymi koszulkami termokurczliwymi PermaSleeve LSZH o wysokości 4,62 mm',
    'Rolka Brady B33D-375-2-7641Y z żółtymi koszulkami PermaSleeve LSZH na przewody średnie',
    'Rolka Brady B33D-500-2-7641 z białymi koszulkami PermaSleeve LSZH na przewody grubsze',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych B33D, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve LSZH B-7641' },
    { name: 'Typ materiału', value: 'poliolefina termokurczliwa 2:1, niska emisja dymu, bezhalogenowa, samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'po obu stronach koszulki, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 105 °C' },
    { name: 'Odporność', value: 'chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, wysokość od 4,62 do 61,8 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 50 do 500 na rolce, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,19 do 36,83 mm (24 AWG – 2000 MCM)' },
    { name: 'Normy', value: 'BS 6853 (1999), kategoria pojazdu 1A; EN 45545-2, wymaganie 24, kategoria pojazdu HL3; bezhalogenowy' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASLEEVE_LSZH.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASLEEVE_LSZH.map(([pn, , szt, wys, od, do_, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} koszulka PermaSleeve LSZH na przewód Ø ${od}–${do_} mm`,
    attributes: { Rozmiar: `50,8 × ${wys} mm, ${szt} szt.`, Przewód: `Ø ${od}–${do_} mm`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk na rolce.\n\nDługość wynosi zawsze 50,8 mm, a drugi wymiar rośnie od 4,62 do 61,8 mm.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy sięgają od 1,19 do 36,83 mm.',
    Kolor: 'Kolor poliolefiny.\n\nNie każdy rozmiar występuje w obu kolorach. Najmniejszy jest tylko biały, a trzy średnie tylko żółte.',
  },
  faq: [
    { question: 'Co oznacza skrót LSZH w nazwie koszulek?', answer: 'To materiał o niskiej emisji dymu i bez halogenów. Spala się z minimalnym wydzielaniem dymu, dlatego stosuje się go tam, gdzie ważne jest bezpieczeństwo pożarowe.' },
    { question: 'Jakie normy dla pojazdów szynowych spełniają koszulki B-7641?', answer: 'BS 6853 (1999) dla kategorii pojazdu 1A oraz EN 45545-2, wymaganie 24, dla kategorii HL3.' },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek LSZH?', answer: 'Zaleca się bezhalogenową taśmę barwiącą B30-R6000. Koszulki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Oznaczanie przewodów i kabli tam, gdzie wymagane są materiały bezhalogenowe', 'Znakowanie elektryczne'],
}

// ---------------------------------------------------------------------------
// PermaSleeve wysokotemperaturowe PVDF B-345 (cps-3069384)
// ---------------------------------------------------------------------------

// [PN, nr art., sztuk, wysokość mm, przewód od, przewód do, skurcz]
const PERMASLEEVE_PVDF: [string, string, string, string, string, string, string][] = [
  ['B33D-94-2-345', '142987', '1000', '4,62', '0,8', '2,03', '3:1'],
  ['B33D-125-2-345', '142973', '1000', '5,97', '1,57', '2,79', '2:1'],
  ['B33D-187-2-345', '142977', '750', '8,51', '2,39', '3,81', '2:1'],
  ['B33D-250-2-345', '142979', '500', '11,15', '3,18', '5,46', '2:1'],
  ['B33D-375-2-345', '142981', '500', '16,38', '4,75', '8,13', '2:1'],
  ['B33D-500-2-345', '142983', '350', '21,62', '6,35', '11,43', '2:1'],
  ['B33D-750-2-345', '142985', '250', '31,75', '9,53', '17,78', '2:1'],
]

export const bradyB33PermaSleevePVDF345: Product = {
  ...wspolneB33,
  id: 'brady-b33d-94-2-345',
  slug: 'brady-b33d-94-2-345',
  name: 'Wysokotemperaturowe koszulki termokurczliwe Brady PermaSleeve PVDF B-345 do drukarki i3300',
  seoTitle: 'Brady PermaSleeve PVDF B-345 — koszulki do 225 °C do i3300',
  seoDescription: 'Koszulki Brady PermaSleeve PVDF B-345 do drukarki Brady i3300: do 225 °C, niskie odgazowanie, nadruk dwustronny. PN: B33D-94-2-345, B33D-250-2-345.',
  shortDescription: 'Brady PermaSleeve PVDF B-345 to białe koszulki termokurczliwe z fluorku poliwinylidenu na przewody od 0,8 do 17,78 mm, odporne do 225 °C. Do drukarki Brady i3300.',
  description: 'PermaSleeve B-345 to koszulki z fluorku poliwinylidenu (PVDF), opracowane na potrzeby wysokiej temperatury oraz zastosowań próżniowych, w których materiał uwalnia bardzo mało gazów. PVDF to tworzywo fluorowe, które dobrze znosi ciepło i agresywne chemikalia. Skurcz wynosi 2:1, a w najmniejszym rozmiarze 3:1. Opis drukuje się z obu stron koszulki i nie blednie, a materiał jest matowy i trudnopalny.\n\nW rodzinie jest siedem rozmiarów. Wszystkie koszulki są białe i mają długość 50,8 mm. Obejmują przewody od 0,8 do 17,78 mm, czyli od 26 AWG do 0000 AWG, a na rolce jest 250–1000 sztuk, zależnie od rozmiaru. Najmniejszy rozmiar o wysokości 4,62 mm przeznaczono dla cienkich żył.\n\nMateriał pracuje od −55 do 225 °C. Wytrzymuje paliwa, smary i mocne rozpuszczalniki czyszczące. Niskie odgazowanie w próżni odpowiada wymaganiu NASA SP-R-0022A. Pozostałe normy, w tym SAE i MIL, podano w specyfikacji. Do druku odpowiada kaseta B30-R6000, a w drukarkach i3300, BBP33, i4311 oraz i5300 działają wszystkie rozmiary.',
  sameAs: 'https://www.brady.eu/labels/b33-series-permasleeve-high-temp-pvdf-wire-marking-sleeves-cps-3069384',
  images: [
    '/images/products/brady/b33d-94-2-345.png',
    '/images/products/brady/b33d-250-2-345.png',
    '/images/products/brady/b33d-750-2-345.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33D-94-2-345 na uchwycie z białymi koszulkami PermaSleeve PVDF o wysokości 4,62 mm',
    'Rolka Brady B33D-250-2-345 z białymi koszulkami PermaSleeve PVDF na przewody średnie',
    'Rolka Brady B33D-750-2-345 z białymi koszulkami PermaSleeve PVDF na przewody grube',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka koszulek termokurczliwych B33D, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaSleeve PVDF B-345' },
    { name: 'Typ materiału', value: 'wysokotemperaturowy fluorek poliwinylidenu (PVDF), termokurczliwy, trudnopalny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Nadruk', value: 'po obu stronach koszulki, termotransfer' },
    { name: 'Temperatura pracy', value: 'od −55 do 225 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'długość 50,8 mm, wysokość od 4,62 do 31,75 mm, zależnie od wersji' },
    { name: 'Liczba sztuk', value: 'od 250 do 1000 na rolce, zależnie od wersji' },
    { name: 'Zakres średnicy przewodu', value: 'od 0,8 do 17,78 mm (26 AWG – 0000 AWG)' },
    { name: 'Stopień skurczu', value: '2:1; 3:1 dla najmniejszego rozmiaru' },
    { name: 'Normy', value: 'MIL-STD-202G, metoda 215K; NASA SP-R-0022A (odgazowanie w próżni); SAE AS-81531; SAE-AMS-DTL-23053/18 (klasa 2); badania ASTM E162 i ASTM E662; RoHS; uznanie UL' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: PERMASLEEVE_PVDF.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASLEEVE_PVDF.map(([pn, , szt, wys, od, do_, skurcz]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biała koszulka PermaSleeve PVDF na przewód Ø ${od}–${do_} mm`,
    attributes: { Rozmiar: `50,8 × ${wys} mm, ${szt} szt.`, Przewód: `Ø ${od}–${do_} mm`, Skurcz: skurcz },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej koszulki w stanie płaskim oraz liczba sztuk w opakowaniu.\n\nDługość wynosi zawsze 50,8 mm, a drugi wymiar rośnie od 4,62 do 31,75 mm.',
    Przewód: 'Średnica przewodu, na którym koszulka ma się obkurczyć.\n\nZakresy sięgają od 0,8 do 17,78 mm.',
    Skurcz: 'Stosunek średnicy przed skurczem do średnicy po skurczu.\n\nWiększość rozmiarów kurczy się 2:1, a najmniejszy 3:1.',
  },
  faq: [
    { question: 'Do jakiej temperatury można stosować koszulki PermaSleeve PVDF B-345?', answer: 'Od −55 do 225 °C. To najwyższy zakres wśród koszulek B33 w tej ofercie.' },
    { question: 'Co oznacza niskie odgazowanie koszulek B-345?', answer: 'Materiał uwalnia bardzo mało gazów w próżni i spełnia wymagania NASA SP-R-0022A. Dzięki temu nadaje się do zastosowań próżniowych.' },
    { question: 'Jaką taśmę barwiącą zamówić do koszulek PVDF?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Koszulki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Znakowanie przewodów w wysokiej temperaturze', 'Oznaczanie przewodów w zastosowaniach próżniowych', 'Znakowanie elektryczne'],
}

// ---------------------------------------------------------------------------
// Rapido — oznaczniki przewodów B-7599 (cps-3079455)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm, wysokość mm, pole nadruku mm, otwór mm]
const RAPIDO_7599: [string, string, string, string, string, string][] = [
  ['B33R-01-7599-YL', '196252', '23', '5,2', '13,1 × 5,2', '3,9 × 2,4'],
  ['B33R-02-7599-YL', '196253', '23', '5,2', '16,1 × 5,2', '4,9 × 3,5'],
  ['B33R-03-7599-YL', '196254', '25', '5,7', '11,2 × 4,2', '5,9 × 4,2'],
]

export const bradyB33Rapido7599: Product = {
  ...wspolneB33,
  id: 'brady-b33r-01-7599-yl',
  slug: 'brady-b33r-01-7599-yl',
  name: 'Oznaczniki przewodów z polietylenu Brady Rapido B-7599 do drukarki i3300',
  seoTitle: 'Brady Rapido B-7599 — oznaczniki przewodów do drukarki i3300',
  seoDescription: 'Oznaczniki przewodów Brady Rapido B-7599 do drukarki Brady i3300: żółty polietylen, 2 otwory, 2500 szt., 3 wersje. PN: B33R-01-7599-YL, B33R-02-7599-YL.',
  shortDescription: 'Brady Rapido B-7599 to żółte oznaczniki przewodów z polietylenu z dwoma otworami, w trzech wersjach po 2500 sztuk. Do drukarki Brady i3300.',
  description: 'Oznaczniki Rapido wycięto z żółtego polietylenu B-7599. Folia jest matowa, a jej grubość to 0,25 mm. Przeznaczono je do przewodów i kabli oraz do okablowania sieci teleinformatycznych. Dwa otwory w każdym oznaczniku mają kształt dziurki od klucza. Nadruk powstaje termotransferem. Żółty jest jedynym kolorem tej rodziny.\n\nSą trzy wersje z tego samego materiału, każda po 2500 sztuk na rolce. Pierwsze dwie mierzą 23 × 5,2 mm, trzecia 25 × 5,7 mm. Szerokość pola opisu wynosi odpowiednio 13,1, 16,1 i 11,2 mm, więc najkrótsze pole mieści mniej znaków niż najdłuższe. Wysokość pola to 5,2 mm w dwóch pierwszych wersjach i 4,2 mm w trzeciej. Otwory rosną od 3,9 × 2,4 mm do 5,9 × 4,2 mm. Nośnik ma od 35,9 do 38 mm szerokości.\n\nOdporność obejmuje wilgoć oraz UV. Zakres roboczy to od −40 do 50 °C. Oznaczniki wydrukują i3300, BBP33, i4311 i i5300; wykorzystuje się w nich taśmę barwiącą B30-R4300 lub B30-R6200.',
  sameAs: 'https://www.brady.eu/labels/rapido-wire-marking-sleeves-for-bbp33-i3300-printers-cps-3079455',
  images: ['/images/products/brady/b33r-01-7599-yl.png'],
  imageDescriptions: ['Rolka Brady B33R-01-7599-YL na uchwycie z paskiem żółtych oznaczników Rapido z dwoma otworami; obok oznacznik założony na przewód'],
  specifications: [
    { name: 'Typ', value: 'Rolka oznaczników przewodów B33R, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Rapido B-7599' },
    { name: 'Typ materiału', value: 'polietylen' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Temperatura pracy', value: 'od −40 do 50 °C' },
    { name: 'Odporność', value: 'wilgoć, promieniowanie UV' },
    { name: 'Kolor', value: 'żółty' },
    { name: 'Grubość', value: '0,25 mm' },
    { name: 'Wymiary etykiety', value: '23 × 5,2 mm (B33R-01, B33R-02) lub 25 × 5,7 mm (B33R-03)' },
    { name: 'Liczba sztuk', value: '2500' },
    { name: 'Otwory', value: '2 otwory w kształcie dziurki od klucza' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300 lub B30-R6200' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B33 },
    { name: 'Numery artykułów Brady', value: RAPIDO_7599.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: RAPIDO_7599.map(([pn, , szer, wys, pole, otwor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — żółty oznacznik przewodów Rapido ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, 2500 szt.`, 'Pole nadruku': `${pole} mm`, Otwór: `${otwor} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednego oznacznika oraz liczba sztuk na rolce.\n\nDwie wersje mają 23 × 5,2 mm, a trzecia 25 × 5,7 mm. Rolka mieści 2500 sztuk.',
    'Pole nadruku': 'Część oznacznika, na której powstaje opis.\n\nPole ma od 11,2 do 16,1 mm szerokości.',
    Otwór: 'Wymiary otworu w kształcie dziurki od klucza.\n\nOtwór ma od 3,9 × 2,4 mm w najmniejszej wersji do 5,9 × 4,2 mm w największej.',
  },
  faq: [
    { question: 'Ile sztuk oznaczników Rapido jest na rolce?', answer: 'W każdej wersji 2500 sztuk. Oznaczniki mają po dwa otwory w kształcie dziurki od klucza.' },
    { question: 'W jakich temperaturach pracują oznaczniki Rapido B-7599?', answer: 'Od −40 do 50 °C. Polietylen jest odporny na wilgoć i promieniowanie UV.' },
    { question: 'Jaką taśmę barwiącą zamówić do oznaczników Rapido?', answer: 'Do nadruku pasuje taśma barwiąca B30-R4300 albo B30-R6200. Oznaczniki drukuje przemysłowa [Brady i3300](/produkt/brady-i3300). Obsługują je też BBP33, i4311 i i5300.' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Znakowanie kabli w sieciach danych i telekomunikacji'],
}

export const bradyB33KoszulkiZawieszki: Product[] = [bradyB33PermaSleeve342Dwustronne, bradyB33PermaSleeve342Jednostronne, bradyB33PermaSleeveHX, bradyB33PermaSleeveLSZH, bradyB33PermaSleevePVDF345, bradyB33ZawieszkiKablowe7643, bradyB33HeatexOznaczniki7643, bradyB33Rapido7599, bradyB33ZawieszkiPoliester7598, bradyB33ZawieszkiTransportSzynowy348, bradyB33Zawieszka7597, bradyB33QuickFlag483, bradyB33FlagiPolipropylenowe425]

export const bradyB33KoszulkiZawieszkiSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = {
  'brady-b33d-125-2-342': 'przewody',
  'brady-b33-125-2-342': 'przewody',
  'brady-b33-94-2-7642': 'przewody',
  'brady-b33d-94-2-7641': 'przewody',
  'brady-b33d-94-2-345': 'przewody',
  'brady-b33-75x15-7643-wt': 'przewody',
  'brady-b33-6010-7643-wt': 'przewody',
  'brady-b33r-01-7599-yl': 'przewody',
  'brady-b33-60x10-7598-wt': 'przewody',
  'brady-b33-6010-348-wt': 'przewody',
  'brady-b33-7597w-2050': 'przewody',
  'brady-b33-360-483': 'przewody',
  'brady-b33fp-01-425': 'przewody',
}
