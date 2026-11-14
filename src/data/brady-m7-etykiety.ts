import type { Product, ProductVariant } from './products'
import { wspolneM7 } from './brady-m7-wspolne'

// Materiały Brady tylko do drukarki M710: taśmy ciągłe M7C z poliestru B-483A (ToughStripe), B-549, B-569,
// z polipropylenu B-529 i z winylu B-530, etykieta z rombami GHS (B-7569) oraz zawieszki bezpieczeństwa (B-851).
// Kaseta M7 nie ma taśmy barwiącej — jest ona w osobnej kasecie M7-R. Jedna karta = jedna rodzina materiału. 14.11.2026.

const DRUKARKI_M7 = 'M710, BMP71'
const DRUKARKI_M710 = 'M710'

// [numer artykułu Brady, PN, szerokość w mm, kolor]
type Tasma = [string, string, string, string?]

const KOLORY_TASMY: Record<string, string> = {
  Biały: 'biała',
  Czarny: 'czarna',
  Żółty: 'żółta',
  Czerwony: 'czerwona',
  Pomarańczowy: 'pomarańczowa',
  Zielony: 'zielona',
  Niebieski: 'niebieska',
}

const ciagla = (marka: string, [, pn, szerokosc, kolor]: Tasma, extra: Record<string, string> = {}): ProductVariant => ({
  partNumber: pn,
  name: `Brady ${marka}${pn} — taśma ciągła ${szerokosc} mm × 15,24 m${kolor ? `, ${KOLORY_TASMY[kolor]}` : ''}`,
  attributes: { Rozmiar: `ciągła ${szerokosc} mm × 15,24 m`, ...(kolor ? { Kolor: kolor === 'Pomarańczowy' ? 'Poma\u00ADrań\u00ADczowy' : kolor } : {}), ...extra },
  availability: 'unavailable',
})

const numeryArtykulow = (lista: Tasma[]) => lista.map(([art, pn]) => `${pn}: ${art}`).join('; ')

// ToughStripe B-483A z laminatem B-634 — zestawy podłogowe 25,4 i 50,8 mm w siedmiu kolorach
const TOUGHSTRIPE: Tasma[] = [
  ['173436', 'M7-1000-483-WT-KT', '25,4', 'Biały'],
  ['173441', 'M7-1000-483-BK-KT', '25,4', 'Czarny'],
  ['173435', 'M7-1000-483-YL-KT', '25,4', 'Żółty'],
  ['173437', 'M7-1000-483-RD-KT', '25,4', 'Czerwony'],
  ['173438', 'M7-1000-483-OR-KT', '25,4', 'Pomarańczowy'],
  ['173439', 'M7-1000-483-GN-KT', '25,4', 'Zielony'],
  ['173440', 'M7-1000-483-BL-KT', '25,4', 'Niebieski'],
  ['173388', 'M7-2000-483-WT-KT', '50,8', 'Biały'],
  ['173393', 'M7-2000-483-BK-KT', '50,8', 'Czarny'],
  ['173387', 'M7-2000-483-YL-KT', '50,8', 'Żółty'],
  ['173389', 'M7-2000-483-RD-KT', '50,8', 'Czerwony'],
  ['173390', 'M7-2000-483-OR-KT', '50,8', 'Pomarańczowy'],
  ['173391', 'M7-2000-483-GN-KT', '50,8', 'Zielony'],
  ['173392', 'M7-2000-483-BL-KT', '50,8', 'Niebieski'],
]

const tasmaBarwiacaToughStripe = (kolor?: string) =>
  kolor === 'Biały' ? 'M7-R6000' : kolor === 'Czarny' ? 'M7-R4400-WT' : 'M7-R4400-WT, M7-R6000'

export const bradyM7ToughStripe: Product = {
  ...wspolneM7,
  id: 'brady-m7-1000-483-wt-kt',
  slug: 'brady-m7-1000-483-wt-kt',
  name: 'Taśma podłogowa z laminatem Brady ToughStripe M7-1000-483-WT-KT — kasety M7 do M710',
  seoTitle: 'Brady ToughStripe M7-1000-483-WT-KT — taśma podłogowa do M710',
  seoDescription: 'Taśma podłogowa Brady ToughStripe do M710: poliester B-483A z laminatem, 7 kolorów, 15,24 m. PN: M7-1000-483-WT-KT, M7-2000-483-BK-KT, M7-1000-483-YL-KT.',
  shortDescription: 'Brady ToughStripe M7-1000-483-WT-KT i 13 innych zestawów zawierają taśmę podłogową z poliestru B-483A z laminatem B-634, w siedmiu kolorach. Do drukarki Brady M710.',
  description: 'Brady ToughStripe to zestaw do tworzenia oznaczeń na podłogach. Tworzą go taśma z błyszczącego poliestru B-483A oraz laminat z poliestru B-634. Spód taśmy pokrywa trwały klej kauczukowy o bardzo dużej przyczepności. Wiąże on z gładką, szorstką i silnie teksturowaną powierzchnią, a także z podłożami o niskiej energii powierzchniowej. Całość powstaje w trzech krokach: wydruk, ułożenie na posadzce i naklejenie laminatu.\n\nTaśma ciągła ma 15,24 m długości. Są dwie szerokości: wąska 25,4 mm i szeroka 50,8 mm. Taśma występuje w siedmiu kolorach: biały, czarny, żółty, czerwony, pomarańczowy, zielony i niebieski. Razem z laminatem zestaw ma 0,203 mm grubości. Znakuje się nim podłogi, a także wykonuje ogólne oznaczenia, etykiety w programach Lean i 5S oraz oznaczenia bezpieczeństwa.\n\nZestaw znosi ścieranie, kontakt z chemikaliami i korozję, a także wilgoć, UV i pogodę. Zakres temperatur zestawu wynosi od −18 do 54 °C. Materiał ma uznanie UL oraz akceptację CSA. Białą taśmę drukuje się taśmą barwiącą M7-R6000, a czarną białym nadrukiem z M7-R4400-WT. Kolorowe taśmy przyjmują obie. Zestaw działa w drukarkach M710 oraz BMP71. Drukarki M610 i M611 go nie obsługują.',
  sameAs: 'https://www.brady.eu/labels/cps-4554324',
  images: [
    '/images/products/brady/m7-1000-483-wt-kt.png',
    '/images/products/brady/m7-2000-483-bk-kt.png',
    '/images/products/brady/m7-1000-483-yl-kt.png',
  ],
  imageDescriptions: [
    'Zestaw Brady ToughStripe M7-1000-483-WT-KT: rolka laminatu i kaseta z białą taśmą podłogową 25,4 mm na uchwycie',
    'Zestaw Brady ToughStripe M7-2000-483-BK-KT: rolka laminatu i kaseta z czarną taśmą podłogową 50,8 mm',
    'Zestaw Brady ToughStripe M7-1000-483-YL-KT: rolka laminatu i kaseta z żółtą taśmą podłogową 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą do znakowania podłóg i laminat, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughStripe B-483A z laminatem z poliestru B-634' },
    { name: 'Typ materiału', value: 'poliester z laminatem poliestrowym' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Grubość', value: '0,203 mm (zestaw z laminatem)' },
    { name: 'Klej', value: 'trwały, kauczukowy, bardzo mocny; do powierzchni gładkich, szorstkich, silnie teksturowanych i o niskiej energii powierzchniowej' },
    { name: 'Temperatura pracy', value: 'od −18 do 54 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały, czarny, żółty, czerwony, pomarańczowy, zielony, niebieski' },
    { name: 'Szerokość taśmy ciągłej', value: '25,4 / 50,8 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'uznanie UL, akceptacja CSA' },
    { name: 'Zalecana taśma barwiąca', value: 'taśma biała: M7-R6000; taśma czarna: M7-R4400-WT; taśmy kolorowe: M7-R4400-WT albo M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(TOUGHSTRIPE) },
  ],
  variants: TOUGHSTRIPE.map((t) => ciagla('ToughStripe ', t, { Taśma: tasmaBarwiacaToughStripe(t[3]) })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej w zestawie.\n\nTaśma ma szerokość 25,4 albo 50,8 mm. Wszystkie zestawy mają po 15,24 m taśmy.',
    Kolor: 'Kolor taśmy podłogowej. Napis drukuje się na tej taśmie, a na wierzch nakleja laminat.\n\nKażdy z siedmiu kolorów jest w obu szerokościach.',
    Taśma: 'Zalecana kaseta z taśmą barwiącą do nadruku; kupuje się ją osobno.\n\nBiała taśma wymaga czarnego nadruku, a czarna białego. Na taśmach kolorowych można użyć obu.',
  },
  faq: [
    { question: 'Z czego składa się zestaw ToughStripe?', answer: 'Z taśmy ToughStripe z poliestru B-483A i laminatu z poliestru B-634. Taśmę drukuje się w drukarce i układa na podłodze. Na wierzch nakleja się laminat. Taśma barwiąca jest osobną kasetą.' },
    { question: 'Jaka taśma barwiąca pasuje do taśm ToughStripe?', answer: 'Do białej taśmy służy M7-R6000 z czarnym nadrukiem. Do czarnej służy M7-R4400-WT z białym nadrukiem. Na taśmach kolorowych można użyć obu. Obie kasety pasują do [Brady M710](/produkt/brady-m710).' },
    { question: 'Czy zestaw ToughStripe pasuje do drukarki Brady M610?', answer: 'Nie. Kasety M7 działają w M710 i starszej BMP71. Drukarki M610 i M611 pracują z kasetami M6.' },
  ],
  applications: ['Znakowanie podłóg', 'Oznaczenia w programach Lean i 5S', 'Oznaczenia bezpieczeństwa'],
}

// Taśma z polipropylenu B-529 — dwie szerokości
const POLIPROPYLEN_529: Tasma[] = [
  ['173291', 'M7C-1000-529', '25,4'],
  ['173260', 'M7C-2000-529', '50,8'],
]

export const bradyM7Polipropylen529: Product = {
  ...wspolneM7,
  id: 'brady-m7c-1000-529',
  slug: 'brady-m7c-1000-529',
  name: 'Taśma polipropylenowa Brady M7C-1000-529 — kasety M7 do M710',
  seoTitle: 'Brady M7C-1000-529 — taśma polipropylenowa B-529 do M710',
  seoDescription: 'Błyszcząca taśma polipropylenowa Brady B-529 do M710, do użytku wewnątrz budynków: 25,4 lub 50,8 mm × 15,24 m, od −40 do 100 °C. PN: M7C-1000-529, M7C-2000-529.',
  shortDescription: 'Brady M7C-1000-529 i M7C-2000-529 to kasety z białą, błyszczącą taśmą polipropylenową B-529 do oznaczeń wewnątrz budynków. Do drukarki Brady M710.',
  description: 'B-529 to ekonomiczny materiał do codziennego znakowania. Wykonano go z białego, błyszczącego polipropylenu o grubości 0,089 mm. Spód pokrywa trwały klej akrylowy o dużej przyczepności, który trzyma się powierzchni gładkich i teksturowanych. Taśma służy do użytku wewnątrz budynków. Na zewnątrz nie zaleca się jej stosować. Napisy i kody powstają w druku termotransferowym.\n\nW kasecie M7C zwinięto 15,24 m taśmy ciągłej. Szerokość 25,4 mm i szerokość 50,8 mm mają osobne numery. Wybór szerokości zależy od wielkości napisu. Taśma nadaje się do oznaczeń obiektów, etykiet ogólnych i oznaczeń bezpieczeństwa. Kaseta nie zawiera taśmy barwiącej, którą kupuje się osobno w kasecie M7-R.\n\nOdporność obejmuje ścieranie i chemikalia. Granice temperatury pracy to −40 °C oraz 100 °C. Przy temperaturze podłoża poniżej 10 °C taśmy nie należy naklejać. Do nadruku nadaje się taśma barwiąca M7-R6000, bezhalogenowa i odporna na rozpuszczalniki oraz zarysowania. Kasety wchodzą do M710 i BMP71 bez adaptera. Drukarki M610 i M611 ich nie obsługują.',
  sameAs: 'https://www.brady.eu/labels/multi-purpose-gloss-polypropylene-label-tape-for-m710-printers-cps-4554340',
  images: [
    '/images/products/brady/m7c-1000-529.png',
    '/images/products/brady/m7c-2000-529.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-1000-529 na uchwycie z wysuniętą białą taśmą polipropylenową 25,4 mm',
    'Kaseta Brady M7C-2000-529 na uchwycie z wysuniętą białą taśmą polipropylenową 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'polipropylen B-529' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Grubość', value: '0,089 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do powierzchni gładkich i teksturowanych' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy ciągłej', value: '25,4 / 50,8 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zastosowanie', value: 'wnętrza; nie zaleca się użycia na zewnątrz' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(POLIPROPYLEN_529) },
  ],
  variants: POLIPROPYLEN_529.map((t) => ciagla('', t)),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nTaśma ma szerokość 25,4 albo 50,8 mm. Obie wersje mają po 15,24 m taśmy w kasecie.',
  },
  faq: [
    { question: 'Czy taśmę B-529 można stosować na zewnątrz?', answer: 'Nie. Taśma jest przeznaczona do wnętrz, a na zewnątrz nie zaleca się jej stosować.' },
    { question: 'W jakiej temperaturze można naklejać taśmę B-529?', answer: 'Naklejanie wymaga temperatury co najmniej 10 °C. Naklejona taśma pracuje od −40 do 100 °C.' },
    { question: 'Jaka taśma barwiąca pasuje do B-529?', answer: 'Zalecana jest taśma M7-R6000. Kasety M7C pasują do [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczenia obiektów wewnątrz budynków', 'Etykiety ogólne', 'Oznaczenia bezpieczeństwa'],
}

// Taśma z poliestru B-549 do naklejania w niskiej temperaturze
const POLIESTER_549: Tasma[] = [
  ['170427', 'M7C-1000-549-WT', '25,4', 'Biały'],
  ['170428', 'M7C-1000-549-YL', '25,4', 'Żółty'],
  ['170429', 'M7C-2000-549-WT', '50,8', 'Biały'],
  ['170430', 'M7C-2000-549-YL', '50,8', 'Żółty'],
]

export const bradyM7Poliester549: Product = {
  ...wspolneM7,
  id: 'brady-m7c-1000-549-wt',
  slug: 'brady-m7c-1000-549-wt',
  name: 'Taśma poliestrowa do naklejania w niskiej temperaturze Brady M7C-1000-549-WT — kasety M7 do M710',
  seoTitle: 'Brady M7C-1000-549-WT — taśma poliestrowa na zimno do M710',
  seoDescription: 'Taśma poliestrowa Brady B-549 do M710, do naklejania na zimne powierzchnie do −23 °C. PN: M7C-1000-549-WT, M7C-1000-549-YL, M7C-2000-549-WT, M7C-2000-549-YL.',
  shortDescription: 'Brady M7C-1000-549-WT i 3 inne kasety zawierają błyszczącą taśmę poliestrową B-549, którą można naklejać na powierzchnie zimne do −23 °C. Do drukarki Brady M710.',
  description: 'Materiał B-549 to poliester z błyszczącą powierzchnią, gruby na 0,076 mm. Można go naklejać na bardzo zimne powierzchnie, nawet o temperaturze −23 °C. Spodnia strona ma trwały klej akrylowy, a wydruk wykonuje się termotransferowo. Taśma jest przeznaczona do chłodni, komór chłodniczych, zamrażarek i laboratoriów. Znosi tam łagodne chemikalia, olej i wodę.\n\nZ taśmy robi się etykiety do ewidencji majątku, do oznaczania urządzeń i podzespołów oraz do kontroli i inwentaryzacji. Kaseta M7C zawiera 15,24 m ciągłej taśmy. Dostępna jest w wersjach o szerokości 25,4 mm, a także 50,8 mm, i w kolorach białym i żółtym. Każda wersja ma osobny numer, a szersza mieści większy napis.\n\nPo naklejeniu etykieta znosi chłód do −40 °C oraz nagrzanie do 100 °C. Taśma przylega do powierzchni gładkich. Obie wersje kolorystyczne mają te same parametry użytkowe. Kaseta M7C nie zawiera taśmy barwiącej. Zalecane są kasety z taśmą barwiącą M7-R10000 lub M7-R6000. Taśma M7-R10000 jest odporna na rozpuszczalniki i zarysowania, a M7-R6000 jest bezhalogenowa. Do M610 i M611 ta kaseta nie pasuje. Pasuje do M710.',
  sameAs: 'https://www.brady.eu/labels/cold-temperature-application-multi-purpose-polyester-label-tape-for-m710-printer-cps-4554342',
  images: [
    '/images/products/brady/m7c-1000-549-wt.png',
    '/images/products/brady/m7c-1000-549-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-1000-549-WT na uchwycie z wysuniętą białą taśmą poliestrową 25,4 mm',
    'Kaseta Brady M7C-1000-549-YL na uchwycie z wysuniętą żółtą taśmą poliestrową 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'poliester B-549' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'od −23 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, chłodnia' },
    { name: 'Odporność', value: 'łagodne chemikalia, olej, woda' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy ciągłej', value: '25,4 / 50,8 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000 albo M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M710 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(POLIESTER_549) },
  ],
  variants: POLIESTER_549.map((t) => ciagla('', t)),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzersza taśma, 50,8 mm, mieści większy napis. Każda kaseta ma 15,24 m taśmy.',
    Kolor: 'Kolor taśmy.\n\nTaśma jest biała albo żółta, w obu szerokościach.',
  },
  faq: [
    { question: 'Do jakiej temperatury można naklejać taśmę B-549?', answer: 'Taśmę można naklejać na powierzchnie zimne do −23 °C. Po naklejeniu znosi od −40 do 100 °C.' },
    { question: 'Gdzie stosuje się taśmę B-549?', answer: 'W chłodniach, komorach chłodniczych, zamrażarkach i laboratoriach. Taśma znosi tam łagodne chemikalia, olej i wodę.' },
    { question: 'Jaka taśma barwiąca pasuje do B-549?', answer: 'Zalecane są taśmy M7-R10000 i M7-R6000. Kasety M7C pasują do [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczenia w chłodniach i zamrażarkach', 'Etykiety w laboratoriach', 'Ewidencja majątku i oznaczanie urządzeń'],
}

// Taśma z poliestru B-569 o niskiej zawartości halogenków
const POLIESTER_569: Tasma[] = [
  ['170431', 'M7C-1000-569-WT', '25,4', 'Biały'],
  ['170433', 'M7C-1000-569-YL', '25,4', 'Żółty'],
  ['170435', 'M7C-1000-569-BL', '25,4', 'Niebieski'],
  ['170437', 'M7C-1000-569-GN', '25,4', 'Zielony'],
  ['170439', 'M7C-1000-569-RD', '25,4', 'Czerwony'],
  ['170432', 'M7C-2000-569-WT', '50,8', 'Biały'],
  ['170434', 'M7C-2000-569-YL', '50,8', 'Żółty'],
  ['170436', 'M7C-2000-569-BL', '50,8', 'Niebieski'],
  ['170438', 'M7C-2000-569-GN', '50,8', 'Zielony'],
  ['170440', 'M7C-2000-569-RD', '50,8', 'Czerwony'],
]

export const bradyM7Poliester569: Product = {
  ...wspolneM7,
  id: 'brady-m7c-1000-569-wt',
  slug: 'brady-m7c-1000-569-wt',
  name: 'Taśma poliestrowa o niskiej zawartości halogenków Brady M7C-1000-569-WT — kasety M7 do M710',
  seoTitle: 'Brady M7C-1000-569-WT — poliester niskohalogenowy do M710',
  seoDescription: 'Taśma poliestrowa Brady B-569 o niskiej zawartości halogenków do M710, do rur i zaworów. PN: M7C-1000-569-WT, M7C-1000-569-YL, M7C-2000-569-RD.',
  shortDescription: 'Brady M7C-1000-569-WT i 9 innych kaset zawiera ultragładką taśmę poliestrową B-569 o niskiej zawartości halogenków, w pięciu kolorach. Do drukarki Brady M710.',
  description: 'B-569 to ultragładki poliester o niskiej zawartości halogenków. Trwały klej akrylowy znajduje się na spodzie materiału, a nadruk powstaje metodą termotransferową. Taśma służy do znakowania rur i zaworów ze stali nierdzewnej w trudnych środowiskach. Przylega do podłoży gładkich.\n\nDługość taśmy ciągłej w kasecie M7C wynosi 15,24 m, a grubość 0,076 mm. Taśma występuje w pięciu kolorach: białym, żółtym, niebieskim, zielonym i czerwonym. Kolor i szerokość, 25,4 lub 50,8 mm, wyznaczają osobny numer. Znakuje się nią rury, zawory, urządzenia, podzespoły elektryczne i strefy magazynowe. Pasuje też do oznaczeń w programach Lean i 5S.\n\nPoliester opiera się ścieraniu i chemikaliom. Znosi także olej oraz wodę. Naklejać go można od −18 °C. Zakres roboczy po naklejeniu rozciąga się od −40 do 100 °C, także w zamrażarce. Do nadruku służą taśmy barwiące M7-R10000 i M7-R6000, kupowane osobno. Taśma M7-R6000 nie zawiera halogenów. Każdy kolor ma te same parametry użytkowe. Kaseta działa w M710. Drukarki M610 i M611 jej nie obsługują.',
  sameAs: 'https://www.brady.eu/labels/low-halide-multi-purpose-polyester-label-tape-for-m710-printer-cps-4554343',
  images: [
    '/images/products/brady/m7c-2000-569-wt.png',
    '/images/products/brady/m7c-2000-569-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-2000-569-WT na uchwycie z wysuniętą białą taśmą poliestrową 50,8 mm',
    'Kaseta Brady M7C-2000-569-YL na uchwycie z wysuniętą żółtą taśmą poliestrową 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'poliester B-569, o niskiej zawartości halogenków' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,076 mm' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, trudne środowiska' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda' },
    { name: 'Kolory', value: 'biały, żółty, niebieski, zielony, czerwony' },
    { name: 'Szerokość taśmy ciągłej', value: '25,4 / 50,8 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000 albo M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M710 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(POLIESTER_569) },
  ],
  variants: POLIESTER_569.map((t) => ciagla('', t)),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nTaśma ma szerokość 25,4 albo 50,8 mm. Kasety mają po 15,24 m taśmy.',
    Kolor: 'Kolor taśmy.\n\nDostępne są kolory biały, żółty, niebieski, zielony i czerwony. Każdy występuje w obu szerokościach.',
  },
  faq: [
    { question: 'Do czego służy taśma poliestrowa B-569?', answer: 'Do znakowania rur i zaworów ze stali nierdzewnej, urządzeń oraz podzespołów elektrycznych. Nadaje się też do oznaczeń stref magazynowych i do programów Lean i 5S.' },
    { question: 'Czy taśmę B-569 można naklejać na zimne powierzchnie?', answer: 'Tak. Najniższa temperatura naklejania to −18 °C. Naklejona taśma pracuje od −40 do 100 °C.' },
    { question: 'Jaka taśma barwiąca pasuje do B-569?', answer: 'Zalecane są taśmy M7-R10000 i M7-R6000. Kasety M7C pasują do [Brady M710](/produkt/brady-m710).' },
  ],
  applications: ['Oznaczanie rur i zaworów', 'Oznaczenia urządzeń i podzespołów elektrycznych', 'Oznaczenia stref w programach Lean i 5S'],
}

// Taśma winylowa B-530 z plombą kruszącą się przy zdjęciu
const WINYL_530: Tasma[] = [
  ['173223', 'M7C-500-530', '12,7'],
  ['173290', 'M7C-1000-530', '25,4'],
  ['173259', 'M7C-2000-530', '50,8'],
]

export const bradyM7Winyl530: Product = {
  ...wspolneM7,
  id: 'brady-m7c-1000-530',
  slug: 'brady-m7c-1000-530',
  name: 'Taśma winylowa z plombą kruszącą się Brady M7C-1000-530 — kasety M7 do M710',
  seoTitle: 'Brady M7C-1000-530 — winylowa taśma plombująca do M710',
  seoDescription: 'Taśma winylowa Brady B-530, która po zdjęciu rozpada się na kawałki, do M710: 12,7, 25,4 i 50,8 mm × 15,24 m. PN: M7C-500-530, M7C-1000-530, M7C-2000-530.',
  shortDescription: 'Brady M7C-500-530, M7C-1000-530 i M7C-2000-530 to kasety z białą taśmą winylową B-530, która po zdjęciu rozpada się na małe kawałki. Do drukarki Brady M710.',
  description: 'B-530 to cienka folia winylowa z zabezpieczeniem przed odklejaniem. Po zdjęciu etykieta rozpada się na drobne kawałki. Usunięcie jej w całości jest żmudne, więc folia zniechęca do zrywania i zostawia ślad ingerencji. Folia jest biała, błyszcząca i ma trwały klej akrylowy. Nadruk powstaje termotransferowo.\n\nTaśma o grubości 0,06 mm ma w kasecie M7C długość 15,24 m. Wąska ma 12,7 mm, średnia 25,4 mm, a szeroka 50,8 mm, każda z osobnym numerem. Taśma przydaje się do znakowania środków trwałych oraz do oznaczeń obiektów, ogólnych i bezpieczeństwa. Wybiera się ją tam, gdzie oznaczenie ma odstraszać od usuwania. Szersza taśma mieści więcej tekstu, a wąska pasuje do małych elementów.\n\nFolia przylega do powierzchni gładkich i teksturowanych. Wytrzymuje ścieranie i chemikalia. Znosi mróz do −40 °C i ciepło do 90 °C. Przy naklejaniu podłoże powinno mieć co najmniej 10 °C. Przeciętna trwałość na zewnątrz to 3–5 lat. Zalecana jest taśma barwiąca M7-R6000, kupowana osobno. Taśma działa w M710 oraz w starszej BMP71.',
  sameAs: 'https://www.brady.eu/labels/destructible-tamper-evident-vinyl-label-tape-for-m710-printers-cps-4554341',
  images: [
    '/images/products/brady/m7c-1000-530.png',
    '/images/products/brady/m7c-2000-530.png',
    '/images/products/brady/m7c-500-530.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M7C-1000-530 na uchwycie z wysuniętą białą taśmą winylową 25,4 mm',
    'Kaseta Brady M7C-2000-530 na uchwycie z wysuniętą białą taśmą winylową 50,8 mm',
    'Kaseta Brady M7C-500-530 na uchwycie z wąską białą taśmą winylową 12,7 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'winyl B-530, niszczący się przy zdjęciu' },
    { name: 'Typ materiału', value: 'winyl odporny na manipulacje' },
    { name: 'Grubość', value: '0,06 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i teksturowanych' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, próby usunięcia etykiety' },
    { name: 'Trwałość na zewnątrz', value: 'średnio od 3 do 5 lat' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy ciągłej', value: '12,7 / 25,4 / 50,8 mm' },
    { name: 'Długość taśmy ciągłej', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(WINYL_530) },
  ],
  variants: WINYL_530.map((t) => ciagla('', t)),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nWąska taśma, 12,7 mm, pasuje do małych urządzeń. Taśma 50,8 mm mieści duży napis. Każda kaseta ma 15,24 m taśmy.',
  },
  faq: [
    { question: 'Jak działa plomba z winylu B-530?', answer: 'Po odklejeniu folia rozpada się na małe kawałki. Usunięcie etykiety w całości jest żmudne, a ślad po próbie jej zdjęcia widać.' },
    { question: 'Do czego stosuje się taśmę B-530?', answer: 'Do oznaczania środków trwałych i tam, gdzie oznaczenie ma odstraszać od usuwania. Nadaje się też do oznaczeń obiektów, ogólnych i bezpieczeństwa.' },
    { question: 'Jaka taśma barwiąca pasuje do B-530?', answer: 'Zalecana jest taśma M7-R6000. Kasety M7C pasują do [Brady M710](/produkt/brady-m710) i BMP71.' },
  ],
  applications: ['Oznaczanie środków trwałych', 'Oznaczenia zabezpieczone przed usuwaniem', 'Oznaczenia obiektów i bezpieczeństwa'],
}

// Etykieta z nadrukowanymi rombami GHS/CLP (B-7569) — jeden numer, karta bez wariantów
export const bradyM7Ghs7569: Product = {
  ...wspolneM7,
  id: 'brady-m7-37-7569-clp4b',
  slug: 'brady-m7-37-7569-clp4b',
  name: 'Etykiety z rombami GHS Brady M7-37-7569-CLP4B — kaseta M7 do M710',
  seoTitle: 'Brady M7-37-7569-CLP4B — etykiety z rombem GHS do M710',
  seoDescription: 'Kaseta Brady M7-37-7569-CLP4B: etykiety z winylu B-7569 z nadrukowanymi czerwonymi rombami GHS/CLP, 76,2 × 48,26 mm, 100 sztuk, do M710. Nr art. 177765.',
  shortDescription: 'Brady M7-37-7569-CLP4B to kaseta ze 100 etykietami z winylu B-7569 z nadrukowanymi czerwonymi rombami GHS, 76,2 × 48,26 mm. Do drukarki Brady M710.',
  description: 'Brady M7-37-7569-CLP4B to kaseta z etykietami z elastycznego winylu B-7569. Na etykiecie są nadrukowane czerwone romby. Zgodnie z oznaczeniami GHS/CLP symbol ma czerwoną ramkę w kształcie rombu na białym tle. Pozostałą treść drukarka dodaje w tym samym przebiegu, więc wielobarwna etykieta powstaje od razu. Rozporządzenie CLP obowiązuje w Unii Europejskiej od stycznia 2009 roku.\n\nKaseta zawiera 100 etykiet; każda ma 76,2 mm szerokości i 48,26 mm wysokości. Etykiety oznaczają pojemniki i opakowania z substancjami niebezpiecznymi. Służą też do oznaczania obiektów i do komunikacji o zagrożeniach.\n\nWarstwa winylu jest gruba na 0,102 mm i błyszcząca. Etykieta przylega do powierzchni gładkich dzięki trwałemu klejowi akrylowemu. Znosi wilgoć, chemikalia i dotyk, a przeciętnie wytrzymuje do trzech lat na zewnątrz. Najniższa temperatura naklejania wynosi 10 °C. Zakres temperatur pracy to od −20 do 75 °C. Materiał ma certyfikat BS 5609 oraz zgodność z RoHS. Do wydruku trzeba dokupić taśmę barwiącą M7-R10000 w osobnej kasecie. Kaseta działa w M710 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/pre-print-ghs-diamond-label-for-m710-printers-pid-m7-37-7569-clp4',
  images: ['/images/products/brady/m7-37-7569-clp4b.png'],
  imageDescriptions: ['Kaseta Brady M7-37-7569-CLP4B na uchwycie z wysuniętym paskiem białych etykiet z czerwonymi rombami GHS'],
  specifications: [
    { name: 'Part Number', value: 'M7-37-7569-CLP4B' },
    { name: 'Numer artykułu Brady', value: '177765' },
    { name: 'Typ', value: 'Kaseta z etykietami z nadrukowanymi czerwonymi rombami GHS/CLP, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'winyl B-7569' },
    { name: 'Typ materiału', value: 'winyl' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −20 do 75 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Odporność', value: 'wilgoć, chemikalia, dotyk' },
    { name: 'Trwałość na zewnątrz', value: 'średnio do 3 lat' },
    { name: 'Kolor', value: 'czerwony nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '76,2 × 48,26 mm' },
    { name: 'Liczba sztuk w kasecie', value: '100' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3; RoHS 2011/65/EU (2015/863)' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
  ],
  faq: [
    { question: 'Czym są romby na etykiecie M7-37-7569-CLP4B?', answer: 'To nadrukowane czerwone ramki w kształcie rombu na białym tle, zgodne z oznaczeniami GHS/CLP. Pozostałą treść etykiety dodaje się w drukarce.' },
    { question: 'Jaka taśma barwiąca jest potrzebna do tej etykiety?', answer: 'Zalecana jest taśma M7-R10000. Kaseta pasuje do [Brady M710](/produkt/brady-m710) i starszej BMP71.' },
    { question: 'Czy etykieta pasuje do drukarek Brady M610 i M611?', answer: 'Nie. Kasety M7 nie pasują do M610 ani M611. Te drukarki pracują z kasetami M6.' },
  ],
  applications: ['Oznaczanie pojemników i opakowań z substancjami niebezpiecznymi', 'Oznaczenia GHS i chemiczne', 'Komunikacja o zagrożeniach'],
}

// Zawieszki bezpieczeństwa z poliestru B-851 do nadruku i pisania ręcznego — jeden numer, karta bez wariantów
export const bradyM7ZawieszkiBezpieczenstwa851: Product = {
  ...wspolneM7,
  id: 'brady-m7-215-851-wt',
  slug: 'brady-m7-215-851-wt',
  name: 'Zawieszki bezpieczeństwa z poliestru Brady M7-215-851-WT — kaseta M7 do M710',
  seoTitle: 'Brady M7-215-851-WT — zawieszki bezpieczeństwa do M710',
  seoDescription: 'Kaseta Brady M7-215-851-WT: 75 białych zawieszek bezpieczeństwa z poliestru B-851 do nadruku i pisania ręcznego, 50,8 × 88,9 mm, do M710. Nr art. 178399.',
  shortDescription: 'Brady M7-215-851-WT to kaseta z 75 sztywnymi zawieszkami bezpieczeństwa z poliestru B-851 do nadruku i pisania ręcznego, 50,8 × 88,9 mm. Do drukarki Brady M710.',
  description: 'Brady M7-215-851-WT to kaseta z białymi zawieszkami bezpieczeństwa z poliestru B-851. Poliester jest sztywny, a jego grubość wynosi 0,25 mm. Zawieszki ostrzegają o zagrożeniach w miejscu, gdzie one występują. Drukuje się po jednej stronie. Informacje można dopisać ręcznie w dowolnym miejscu. Zawieszkę można przygotować na miejscu, od razu po stwierdzeniu zagrożenia.\n\nZawieszka ma wymiary 50,8 × 88,9 mm, a pole nadruku 44,45 × 69,85 mm. W kasecie jest 75 sztuk. Teksturowana powierzchnia przyjmuje podpisy, daty i dodatkowe polecenia. Zawieszki oznaczają urządzenia i obiekty oraz służą przy pracach konserwacyjnych.\n\nPoliester znosi ścieranie, chemikalia, wilgoć, tłuszcz i zabrudzenia, także na zewnątrz. Granice użytkowania to −40 °C i 100 °C. Siła zrywająca przekracza wymóg OSHA 23 kg dla urządzeń tagout. Po nadrukowaniu wymaganego słowa ostrzegawczego i głównego komunikatu zawieszka spełnia OSHA 1910.145(f). Kasetę M7-R10000 z taśmą barwiącą kupuje się osobno. Ta taśma barwiąca ma dużą odporność na rozpuszczalniki i zarysowania. Zawieszki pasują do M710 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/safety-tags-polyester-printable-blank-for-m710-printers-pid-m7-215-851-wt',
  images: ['/images/products/brady/m7-215-851-wt.png'],
  imageDescriptions: ['Białe zawieszki bezpieczeństwa Brady M7-215-851-WT z otworami: stos zawieszek, pojedyncza zawieszka i elementy kasety'],
  specifications: [
    { name: 'Part Number', value: 'M7-215-851-WT' },
    { name: 'Numer artykułu Brady', value: '178399' },
    { name: 'Typ', value: 'Kaseta z zawieszkami bezpieczeństwa do nadruku i pisania ręcznego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'poliester B-851' },
    { name: 'Typ materiału', value: 'poliester, sztywny, o dużej wytrzymałości' },
    { name: 'Grubość', value: '0,25 mm' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zawieszki', value: '50,8 × 88,9 mm' },
    { name: 'Pole nadruku', value: '44,45 × 69,85 mm' },
    { name: 'Liczba sztuk w kasecie', value: '75' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, tłuszcz, zabrudzenia; trwałość na zewnątrz' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po nadrukowaniu wymaganego słowa ostrzegawczego i głównego komunikatu; wytrzymałość na zrywanie powyżej 23 kg' },
    { name: 'Zalecana taśma barwiąca', value: 'M7-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M7 },
  ],
  faq: [
    { question: 'Czy na zawieszkach M7-215-851-WT można pisać ręcznie?', answer: 'Tak. Nadruk wykonuje się po jednej stronie, a informacje można dopisać w dowolnym miejscu. Teksturowana powierzchnia przyjmuje podpisy, daty i dodatkowe polecenia.' },
    { question: 'Czy zawieszki spełniają wymagania OSHA?', answer: 'Tak, pod warunkiem nadrukowania wymaganego słowa ostrzegawczego i głównego komunikatu. Spełniają wtedy OSHA 1910.145(f). Wytrzymałość na zrywanie przekracza 23 kg.' },
    { question: 'Jaka taśma barwiąca jest potrzebna do zawieszek?', answer: 'Zalecana jest taśma M7-R10000. Kaseta pasuje do [Brady M710](/produkt/brady-m710) i starszej BMP71.' },
  ],
  applications: ['Zawieszki ostrzegawcze i bezpieczeństwa', 'Oznaczanie urządzeń przy pracach konserwacyjnych', 'Oznaczenia obiektów'],
}

export const bradyM7Etykiety: Product[] = [
  bradyM7ToughStripe,
  bradyM7Polipropylen529,
  bradyM7Poliester549,
  bradyM7Poliester569,
  bradyM7Winyl530,
  bradyM7Ghs7569,
  bradyM7ZawieszkiBezpieczenstwa851,
]

export const bradyM7EtykietySekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = {
  'brady-m7-1000-483-wt-kt': 'ogolne',
  'brady-m7c-1000-529': 'ogolne',
  'brady-m7c-1000-549-wt': 'ogolne',
  'brady-m7c-1000-569-wt': 'ogolne',
  'brady-m7c-1000-530': 'ogolne',
  'brady-m7-37-7569-clp4b': 'ogolne',
  'brady-m7-215-851-wt': 'ogolne',
}
