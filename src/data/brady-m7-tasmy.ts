import type { Product } from './products'
import { wspolneM7 } from './brady-m7-wspolne'

// Taśmy barwiące Brady M7-R… do drukarki M710 (i starszej BMP71). Jedna karta na serię; kolory jako warianty.
// Taśmy M61 do M610/M611 nie pasują do M710 i odwrotnie. 14.11.2026.

const DRUKARKI_TASM_M7 = 'M710, BMP71'

const specyfikacjaTasmy = (pn: string, art: string, seria: string, kolor: string, szerokosc: string, dlugosc: string, grubosc: string, wlasciwosci: string, odpornosc: string, materialy?: string) => [
  { name: 'Part Number', value: pn },
  { name: 'Numer artykułu Brady', value: art },
  { name: 'Typ', value: 'Kaseta z taśmą barwiącą do druku termotransferowego' },
  { name: 'Seria', value: seria },
  { name: 'Kolor', value: kolor },
  { name: 'Szerokość taśmy', value: szerokosc },
  { name: 'Długość taśmy', value: dlugosc },
  { name: 'Grubość', value: grubosc },
  ...(wlasciwosci ? [{ name: 'Właściwości', value: wlasciwosci }] : []),
  { name: 'Odporność', value: odpornosc },
  { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
  ...(materialy ? [{ name: 'Zalecane materiały etykiet', value: materialy }] : []),
  { name: 'Zgodne drukarki', value: DRUKARKI_TASM_M7 },
]

export const bradyM7R4300: Product = {
  ...wspolneM7,
  id: 'brady-m7-r4300',
  slug: 'brady-m7-r4300',
  name: 'Taśma barwiąca Brady M7-R4300 seria R4300 do M710',
  seoTitle: 'Brady M7-R4300 — czarna taśma barwiąca R4300 do M710',
  seoDescription: 'Czarna taśma barwiąca Brady M7-R4300 seria R4300 do drukarki M710: 50 mm × 45,72 m, do matowych i szorstkich etykiet B-427 i B-499, bez halogenów. PN: M7-R4300.',
  shortDescription: 'Brady M7-R4300 to kaseta z czarną taśmą barwiącą serii R4300, 50 mm × 45,72 m. Nadaje się do etykiet o matowej lub szorstkiej powierzchni. Do drukarki Brady M710.',
  description: 'W kasecie Brady M7-R4300 znajduje się czarna taśma R4300 do drukarki etykiet M710. Taśma nie zawiera halogenów. Na właściwym materiale Brady wydruk jest odporny na rozmazanie i chemikalia.\n\nSeria R4300 jest przeznaczona do papieru i folii o matowej lub szorstkiej powierzchni. Przykładami są samolaminujące owijki winylowe B-427 i etykiety z płótna nylonowego B-499.\n\nTaśmy w kasecie wystarcza na 45,72 m druku. Ma ona 50 mm szerokości i 0,0045 mm grubości. Wkładanie kasety do drukarki odbywa się bez przewlekania taśmy i bez kalibracji, a wymiana trwa kilka sekund.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r4300-series-printer-ribbon-for-m710-bmp71-pid-m7-r4300',
  images: ['/images/products/brady/m7-r4300.png'],
  imageDescriptions: ['Kaseta Brady M7-R4300 z czarną taśmą barwiącą serii R4300 do drukarki M710'],
  specifications: specyfikacjaTasmy('M7-R4300', '173193', 'R4300', 'czarny', '50 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'chemikalia, rozmazanie', 'B-427 (owijki samolaminujące), B-499 (płótno nylonowe) i inne materiały matowe lub szorstkie'),
  faq: [
    { question: 'Czy taśma M7-R4300 pasuje do drukarki Brady M610?', answer: 'Nie. Taśmy z numerem M7-R są tylko do [Brady M710](/produkt/brady-m710) i BMP71. Do M610 i M611 służy taśma tej samej serii w kasecie M61: [M61-R4310](/produkt/brady-m61-r4310).' },
    { question: 'Do jakich etykiet stosuje się taśmę R4300?', answer: 'Do etykiet z papieru i folii o matowej albo szorstkiej powierzchni, np. owijek samolaminujących B-427 i etykiet nylonowych B-499.' },
  ],
  applications: ['Owijki samolaminujące na przewody', 'Etykiety z płótna nylonowego', 'Etykiety papierowe'],
}

export const bradyM7R6000: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6000',
  slug: 'brady-m7-r6000',
  name: 'Taśma barwiąca Brady M7-R6000 seria R6000 do M710',
  seoTitle: 'Brady M7-R6000 — czarna taśma barwiąca R6000 do M710',
  seoDescription: 'Czarna taśma barwiąca Brady M7-R6000 seria R6000 (wersja bezhalogenowa) do drukarki M710: 50 mm × 45,72 m, odporna na rozpuszczalniki, zarysowanie i temperaturę. PN: M7-R6000.',
  shortDescription: 'Brady M7-R6000 to kaseta z czarną taśmą barwiącą serii R6000 w wersji bezhalogenowej, 50 mm × 45,72 m. Ta taśma jest w zestawie z drukarką. Do drukarki Brady M710.',
  description: 'Brady M7-R6000 to czarna taśma serii R6000 w bezhalogenowym wykonaniu. Formuła żywiczna daje trwały nadruk, który znosi rozpuszczalniki, zarysowanie i wysoką temperaturę. Napisy pozostają czytelne przez lata w zakładzie i na zewnątrz.\n\nR6000 to taśma uniwersalna do oznaczania przewodów, paneli i innych elementów instalacji. Kaseta M7-R6000 trafia do klienta razem z drukarką M710 i rolką taśmy winylowej M7C-1000-595-WT.\n\nWymiary: szerokość 50 mm, długość 45,72 m, grubość 0,008 mm. Kaseta wchodzi do drukarki od razu, bez przewlekania i kalibracji.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6000-series-printer-ribbon-for-m710-bmp71-pid-m7-r6000',
  images: ['/images/products/brady/m7-r6000.png'],
  imageDescriptions: ['Kaseta Brady M7-R6000 z czarną taśmą barwiącą serii R6000 do drukarki M710'],
  specifications: specyfikacjaTasmy('M7-R6000', '173191', 'R6000 (wersja bezhalogenowa)', 'czarny', '50 mm', '45,72 m', '0,008 mm', 'bezhalogenowa', 'rozpuszczalniki, zarysowanie, wysoka temperatura', 'm.in. taśma winylowa B-595 z zestawu drukarki'),
  faq: [
    { question: 'Czy taśma M7-R6000 jest w zestawie z Brady M710?', answer: 'Tak. [Brady M710](/produkt/brady-m710) ma w zestawie kasetę M7-R6000 i rolkę taśmy winylowej M7C-1000-595-WT. Kolejne kasety zamawia się osobno.' },
    { question: 'Czym różni się M7-R6000 od M61-R6010?', answer: 'To ta sama seria R6000 w kasetach do różnych drukarek. M7-R6000 pasuje do M710 i BMP71, a [M61-R6010](/produkt/brady-m61-r6010) do M610, M611 i BMP61. Kaseta M7 ma też dłuższą taśmę: 45,72 m zamiast 22,86 m.' },
  ],
  applications: ['Oznaczenia przewodów i paneli', 'Etykiety winylowe do pracy na zewnątrz', 'Oznaczenia w zakładzie przemysłowym'],
}

export const bradyM7R6600: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6600',
  slug: 'brady-m7-r6600',
  name: 'Taśma barwiąca Brady M7-R6600 seria R6600 do M710',
  seoTitle: 'Brady M7-R6600 — taśma barwiąca R6600 do koszulek, M710',
  seoDescription: 'Czarna taśma barwiąca Brady M7-R6600 seria R6600 do drukarki M710: druk na koszulkach termokurczliwych B-342 i B-7641, odporna na rozpuszczalniki i olej napędowy. PN: M7-R6600.',
  shortDescription: 'Brady M7-R6600 to kaseta z czarną taśmą barwiącą serii R6600, 50 mm × 45,72 m, do druku na koszulkach termokurczliwych. Do drukarki Brady M710.',
  description: 'Kaseta Brady M7-R6600 mieści czarną taśmę serii R6600 do drukarki M710. Żywiczny barwnik tworzy nadruk odporny na rozpuszczalniki, tarcie i olej napędowy. Taśma nie zawiera halogenów.\n\nSeria R6600 służy przede wszystkim do druku na koszulkach termokurczliwych Brady. Pasuje do materiałów B-342, B-7641, B-7642, B-7646 i B-7647, m.in. do koszulek PermaSleeve.\n\nDługość taśmy wynosi 45,72 m, szerokość 50 mm, a grubość 0,0045 mm. Kasetę wymienia się bez kalibracji drukarki.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6600-series-printer-ribbon-for-m710-bmp71-pid-m7-r6600',
  images: ['/images/products/brady/m7-r6600.png'],
  imageDescriptions: ['Kaseta Brady M7-R6600 z czarną taśmą barwiącą serii R6600 do koszulek termokurczliwych'],
  specifications: specyfikacjaTasmy('M7-R6600', '173188', 'R6600', 'czarny', '50 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'rozpuszczalniki, tarcie, olej napędowy', 'koszulki termokurczliwe B-342, B-7641, B-7642, B-7646, B-7647'),
  faq: [
    { question: 'Jaką taśmę wybrać do koszulek PermaSleeve w Brady M710?', answer: 'Do białych i żółtych koszulek termokurczliwych B-342 służy czarna taśma M7-R6600. Na czarnych koszulkach drukuje się białą taśmą [M7-R6700-WT](/produkt/brady-m7-r6700-wt).' },
    { question: 'Czy taśma M7-R6600 pasuje do Brady M610?', answer: 'Nie. Do [Brady M710](/produkt/brady-m710) i BMP71 służą taśmy M7-R. Do M610 i M611 jest taśma tej serii w kasecie M61: [M61-R6610](/produkt/brady-m61-r6610).' },
  ],
  applications: ['Koszulki termokurczliwe na przewody', 'Oznaczenia odporne na olej napędowy'],
}

export const bradyM7R4400: Product = {
  ...wspolneM7,
  id: 'brady-m7-r4400-wt',
  slug: 'brady-m7-r4400-wt',
  name: 'Taśma barwiąca Brady M7-R4400-WT seria R4400 do M710',
  seoTitle: 'Brady M7-R4400-WT — biała taśma barwiąca R4400 do M710',
  seoDescription: 'Biała taśma barwiąca Brady M7-R4400-WT seria R4400 do drukarki M710: 50 mm × 45,72 m, do błyszczących etykiet B-423 i B-483, odporna na temperaturę i rozpuszczalniki. PN: M7-R4400-WT.',
  shortDescription: 'Brady M7-R4400-WT to kaseta z białą taśmą barwiącą serii R4400, 50 mm × 45,72 m, do gładkich i błyszczących etykiet. Do drukarki Brady M710.',
  description: 'Kaseta Brady M7-R4400-WT drukuje na biało. Zawiera taśmę serii R4400 do drukarki M710. Biały nadruk jest czytelny na ciemnych polach etykiet, a żywiczna formuła chroni go przed rozpuszczalnikami, zarysowaniem i wysoką temperaturą.\n\nTaśmę R4400 dobiera się do błyszczących albo bardzo gładkich materiałów. Przykładem są etykiety poliestrowe B-423 i etykiety z bardzo mocnym klejem B-483.\n\nNa rdzeniu kasety nawinięto 45,72 m taśmy. Jej szerokość wynosi 50 mm. Grubość taśmy R4400 to 0,0045 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r4400-series-printer-ribbon-for-m710-bmp71-pid-m7-r4400-wt',
  images: ['/images/products/brady/m7-r4400-wt.png'],
  imageDescriptions: ['Kaseta Brady M7-R4400-WT z białą taśmą barwiącą serii R4400 do drukarki M710'],
  specifications: specyfikacjaTasmy('M7-R4400-WT', '173192', 'R4400', 'biały', '50 mm', '45,72 m', '0,0045 mm', '', 'rozpuszczalniki, zarysowanie, wysoka temperatura', 'B-423 (poliester), B-483 (poliester z bardzo mocnym klejem) i inne materiały błyszczące lub gładkie'),
  faq: [
    { question: 'Kiedy stosuje się białą taśmę M7-R4400-WT?', answer: 'Gdy etykieta ma ciemne pole nadruku, np. niebieskie albo czarne, a jej powierzchnia jest gładka lub błyszcząca. Taśma pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
    { question: 'Czy M7-R4400-WT pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 służy biała taśma R4400 w kasecie M61: [M61-R4410-WT](/produkt/brady-m61-r4410-bl).' },
  ],
  applications: ['Biały nadruk na ciemnych etykietach', 'Etykiety poliestrowe o błyszczącej powierzchni'],
}

export const bradyM7R6200: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6200',
  slug: 'brady-m7-r6200',
  name: 'Taśma barwiąca Brady M7-R6200 seria R6200 do M710',
  seoTitle: 'Brady M7-R6200 — czarna taśma barwiąca R6200 do M710',
  seoDescription: 'Czarna taśma barwiąca Brady M7-R6200 seria R6200 do drukarki M710: 50 mm × 45,72 m, do etykiet B-498 i B-486, odporna na zarysowanie, temperaturę i chemikalia. PN: M7-R6200.',
  shortDescription: 'Brady M7-R6200 to kaseta z czarną taśmą barwiącą serii R6200, 50 mm × 45,72 m, do błyszczących i półmatowych etykiet. Do drukarki Brady M710.',
  description: 'Seria R6200 w kasecie Brady M7-R6200 to czarna taśma barwiąca do drukarki M710. Nadruk znosi zarysowanie, rozmazanie, wysoką temperaturę i chemikalia. W składzie taśmy nie ma halogenów.\n\nR6200 dobiera się do materiałów błyszczących, gładkich i półmatowych. Przykładami są etykiety z płótna winylowego do przeklejania B-498 i metalizowane etykiety poliestrowe B-486.\n\nW kasecie R6200 jest 45,72 m materiału barwiącego przy szerokości 50 mm. Grubość warstwy to 0,0045 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6200-series-printer-ribbon-for-m710-bmp71-pid-m7-r6200',
  images: ['/images/products/brady/m7-r6200.png'],
  imageDescriptions: ['Kaseta Brady M7-R6200 z czarną taśmą barwiącą serii R6200 do drukarki M710'],
  specifications: specyfikacjaTasmy('M7-R6200', '173190', 'R6200', 'czarny', '50 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'chemikalia, wysoka temperatura, zarysowanie, rozmazanie', 'B-498 (płótno winylowe), B-486 (poliester metalizowany) i inne materiały błyszczące, gładkie lub półmatowe'),
  faq: [
    { question: 'Do jakich etykiet stosuje się taśmę M7-R6200?', answer: 'Do etykiet o powierzchni błyszczącej, gładkiej albo półmatowej, np. płótna winylowego B-498 i metalizowanego poliestru B-486. Taśma pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
    { question: 'Czy M7-R6200 pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 jest czarna taśma R6200 w kasecie M61: [M61-R6210](/produkt/brady-m61-r6210).' },
  ],
  applications: ['Etykiety z płótna winylowego', 'Metalizowane etykiety na urządzenia'],
}

export const bradyM7R6300: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6300',
  slug: 'brady-m7-r6300',
  name: 'Taśma barwiąca Brady M7-R6300 seria R6300 do M710',
  seoTitle: 'Brady M7-R6300 — bezhalogenowa taśma barwiąca R6300 do M710',
  seoDescription: 'Czarna bezhalogenowa taśma barwiąca Brady M7-R6300 seria R6300 do drukarki M710: 50,8 mm × 45,72 m, do oznaczeń przewodów i paneli w zakładzie i na zewnątrz. PN: M7-R6300.',
  shortDescription: 'Brady M7-R6300 to kaseta z czarną, bezhalogenową taśmą barwiącą serii R6300, 50,8 mm × 45,72 m. Do drukarki Brady M710.',
  description: 'Brady M7-R6300 to czarna taśma barwiąca serii R6300 bez halogenów. Kaseta pasuje do drukarki M710. Żywiczny barwnik daje wyraźny nadruk, odporny na rozpuszczalniki i zarysowanie.\n\nTaśma służy do oznaczeń przewodów, paneli i innych elementów wyposażenia przemysłowego. Napisy zachowują czytelność w halach produkcyjnych i w warunkach zewnętrznych.\n\nTa taśma jest nieco szersza od pozostałych taśm M7: ma 50,8 mm. Długość nawoju to 45,72 m, a grubość 0,0045 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/r6300-series-halogen-free-ribbon-for-m7-printers-pid-m7-r6300',
  images: ['/images/products/brady/m7-r6300.png'],
  imageDescriptions: ['Kaseta Brady M7-R6300 z czarną, bezhalogenową taśmą barwiącą serii R6300'],
  specifications: specyfikacjaTasmy('M7-R6300', '176976', 'R6300', 'czarny', '50,8 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'rozpuszczalniki, zarysowanie'),
  faq: [
    { question: 'Czy taśma M7-R6300 zawiera halogeny?', answer: 'Nie. Seria R6300 jest bezhalogenowa. Kaseta pasuje do drukarki [Brady M710](/produkt/brady-m710) i BMP71.' },
    { question: 'Czy M7-R6300 pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 jest taśma R6300 w kasecie M61: [M61-R6310](/produkt/brady-m61-r6310).' },
  ],
  applications: ['Oznaczenia przewodów bez halogenów', 'Oznaczenia paneli i wyposażenia'],
}

export const bradyM7R6400: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6400',
  slug: 'brady-m7-r6400',
  name: 'Taśma barwiąca Brady M7-R6400 seria R6400 do M710',
  seoTitle: 'Brady M7-R6400 — taśma barwiąca R6400 do etykiet lab, M710',
  seoDescription: 'Czarna taśma barwiąca Brady M7-R6400 seria R6400 do drukarki M710: odporna na chemikalia i ścieranie, do etykiet laboratoryjnych B-492 i B-481, 50 mm × 45,72 m. PN: M7-R6400.',
  shortDescription: 'Brady M7-R6400 to kaseta z czarną taśmą barwiącą serii R6400, 50 mm × 45,72 m, odporną na chemikalia i ścieranie. Do drukarki Brady M710.',
  description: 'Kaseta Brady M7-R6400 zawiera czarną taśmę barwiącą serii R6400 do drukarki M710. Nadruk wytrzymuje kontakt z chemikaliami i ścieranie. Taśma nie zawiera halogenów.\n\nSeria R6400 jest przeznaczona do materiałów odpornych na chemikalia. Typowe zastosowanie to etykiety laboratoryjne FreezerBondz B-492 na zamrożone powierzchnie i etykiety poliestrowe B-481 do barwienia szkiełek.\n\nKaseta R6400 mieści 45,72 m taśmy szerokiej na 50 mm, o grubości 0,0045 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6400-series-printer-ribbon-for-m710-bmp71-pid-m7-r6400',
  images: ['/images/products/brady/m7-r6400.png'],
  imageDescriptions: ['Kaseta Brady M7-R6400 z czarną taśmą barwiącą serii R6400 do etykiet laboratoryjnych'],
  specifications: specyfikacjaTasmy('M7-R6400', '173189', 'R6400', 'czarny', '50 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'chemikalia, ścieranie', 'B-492 (FreezerBondz), B-481 (StainerBondz) i inne materiały odporne na chemikalia'),
  faq: [
    { question: 'Jaką taśmę wybrać do etykiet laboratoryjnych w Brady M710?', answer: 'Do etykiet odpornych na chemikalia, np. FreezerBondz B-492 i StainerBondz B-481, służy taśma M7-R6400. Pasuje do drukarki [Brady M710](/produkt/brady-m710).' },
    { question: 'Czy M7-R6400 pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 jest taśma R6400 w kasecie M61: [M61-R6410](/produkt/brady-m61-r6410).' },
  ],
  applications: ['Etykiety laboratoryjne na fiolki i probówki', 'Etykiety na szkiełka barwione w laboratorium'],
}

export const bradyM7R6700: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6700-wt',
  slug: 'brady-m7-r6700-wt',
  name: 'Taśma barwiąca Brady M7-R6700-WT seria R6700 do M710',
  seoTitle: 'Brady M7-R6700-WT — biała taśma do czarnych koszulek, M710',
  seoDescription: 'Biała taśma barwiąca Brady M7-R6700-WT seria R6700 do drukarki M710: nadruk na czarnych koszulkach termokurczliwych B-342 i B-344, 50 mm × 45,72 m. PN: M7-R6700-WT.',
  shortDescription: 'Brady M7-R6700-WT to kaseta z białą taśmą barwiącą serii R6700, 50 mm × 45,72 m, do ciemnych koszulek termokurczliwych. Do drukarki Brady M710.',
  description: 'Seria R6700 w kasecie Brady M7-R6700-WT to biała taśma do drukarki M710. Barwnik żywiczno-woskowy tworzy biały napis, który dobrze znosi chemikalia, zarysowania i rozmazywanie. W składzie nie ma halogenów.\n\nKasetę stosuje się do ciemnych koszulek termokurczliwych, np. do czarnych oznaczników PermaSleeve B-342 i B-344.\n\nDługość nawoju w kasecie: 45,72 m. Taśma R6700 ma 50 mm szerokości i grubość 0,0045 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6700-series-printer-ribbon-for-m710-bmp71-pid-m7-r6700-wt',
  images: ['/images/products/brady/m7-r6700-wt.png'],
  imageDescriptions: ['Kaseta Brady M7-R6700-WT z białą taśmą barwiącą serii R6700 do czarnych koszulek'],
  specifications: specyfikacjaTasmy('M7-R6700-WT', '173187', 'R6700', 'biały', '50 mm', '45,72 m', '0,0045 mm', 'bezhalogenowa', 'chemikalia, zarysowanie, rozmazanie', 'czarne koszulki termokurczliwe B-342 i B-344'),
  faq: [
    { question: 'Czym drukuje się na czarnych koszulkach w Brady M710?', answer: 'Białą taśmą M7-R6700-WT, przeznaczoną do czarnych koszulek PermaSleeve B-342 i B-344. Do koszulek wysokotemperaturowych B-345 służy biała taśma [M7-R6800-WT](/produkt/brady-m7-r6800-wt).' },
    { question: 'Czy M7-R6700-WT pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 jest biała taśma R6700 w kasecie M61: [M61-R6710-WT](/produkt/brady-m61-r6710-wt).' },
  ],
  applications: ['Biały nadruk na czarnych koszulkach termokurczliwych', 'Oznaczenia przewodów w ciemnej izolacji'],
}

export const bradyM7R6800: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6800-wt',
  slug: 'brady-m7-r6800-wt',
  name: 'Taśma barwiąca Brady M7-R6800-WT seria R6800 do M710',
  seoTitle: 'Brady M7-R6800-WT — biała taśma R6800 do koszulek B-345, M710',
  seoDescription: 'Biała żywiczna taśma barwiąca Brady M7-R6800-WT seria R6800 do drukarki M710: do czarnych koszulek PermaSleeve B-345, odporna na rozpuszczalniki, 50 mm × 36,58 m. PN: M7-R6800-WT.',
  shortDescription: 'Brady M7-R6800-WT to kaseta z białą, żywiczną taśmą barwiącą serii R6800, 50 mm × 36,58 m, do czarnych koszulek wysokotemperaturowych. Do drukarki Brady M710.',
  description: 'W kasecie Brady M7-R6800-WT jest biała, żywiczna taśma serii R6800. Biały nadruk dobrze znosi rozpuszczalniki, zarysowanie i rozmazywanie. Taśma jest bezhalogenowa i pasuje do drukarki M710.\n\nSeria R6800 jest przeznaczona do czarnych koszulek termokurczliwych PermaSleeve B-345, które pracują w wysokiej temperaturze.\n\nTaśma R6800 jest krótsza i grubsza niż inne taśmy M7: ma 36,58 m długości i 0,0057 mm grubości przy szerokości 50 mm.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6800-series-printer-ribbon-for-m710-bmp71-pid-m7-r6800-wt',
  images: ['/images/products/brady/m7-r6800-wt.png'],
  imageDescriptions: ['Kaseta Brady M7-R6800-WT z białą, żywiczną taśmą barwiącą serii R6800'],
  specifications: specyfikacjaTasmy('M7-R6800-WT', '173185', 'R6800', 'biały', '50 mm', '36,58 m', '0,0057 mm', 'bezhalogenowa', 'rozpuszczalniki, zarysowanie, rozmazanie', 'czarne koszulki termokurczliwe wysokotemperaturowe B-345'),
  faq: [
    { question: 'Do jakich koszulek służy taśma M7-R6800-WT?', answer: 'Do czarnych koszulek termokurczliwych PermaSleeve B-345 do wysokiej temperatury. Do czarnych koszulek B-342 i B-344 jest biała taśma [M7-R6700-WT](/produkt/brady-m7-r6700-wt). Obie pasują do [Brady M710](/produkt/brady-m710).' },
    { question: 'Czy M7-R6800-WT pasuje do Brady M610?', answer: 'Nie. Do M610 i M611 jest biała taśma R6800 w kasecie M61: [M61-R6810-WT](/produkt/brady-m61-r6810-wt).' },
  ],
  applications: ['Biały nadruk na koszulkach wysokotemperaturowych', 'Oznaczenia przewodów w ciemnej izolacji'],
}

export const bradyM7R10000: Product = {
  ...wspolneM7,
  id: 'brady-m7-r10000',
  slug: 'brady-m7-r10000',
  name: 'Taśma barwiąca Brady M7-R10000 seria R10000 do M710',
  seoTitle: 'Brady M7-R10000 — kolorowe taśmy barwiące R10000 do M710',
  seoDescription: 'Taśmy barwiące Brady seria R10000 do drukarki M710 w 6 kolorach, 50 mm × 45,72 m: oznaczenia rur, zaworów i znaki w zakładzie. PN: M7-R10000, M7-R10000-RD, M7-R10000-BL.',
  shortDescription: 'Brady M7-R10000 to kasety z taśmą barwiącą serii R10000 w sześciu kolorach: czarnym, czerwonym, niebieskim, żółtym, zielonym i białym. Do drukarki Brady M710.',
  description: 'Seria R10000 to taśmy barwiące do oznaczeń w zakładzie przemysłowym i na zewnątrz. Brady przeznacza je do oznaczania rur i zaworów, oznaczeń bezpieczeństwa w obiekcie oraz etykiet ogólnych. Nadruk się nie rozmazuje i jest odporny na rozpuszczalniki oraz zarysowanie.\n\nSeria obejmuje sześć kolorów nadruku. M7-R10000 drukuje na czarno, a wersje z końcówkami -RD, -BL, -YL, -GN i -WT — na czerwono, niebiesko, żółto, zielono i biało. Kolor taśmy dobiera się do koloru etykiety, tak aby napis był kontrastowy.\n\nW każdym kolorze kaseta zawiera 45,72 m taśmy. Szerokość wynosi 50 mm, grubość 0,0057 mm. Wymiana kasety w drukarce M710 trwa ok. 5 sekund i nie wymaga przewlekania ani kalibracji.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r10000-series-printer-ribbon-cps-4558234',
  images: ['/images/products/brady/m7-r10000.png', '/images/products/brady/m7-r10000-rd.png'],
  imageDescriptions: ['Kaseta Brady M7-R10000 z czarną taśmą barwiącą serii R10000', 'Kaseta Brady M7-R10000-RD z czerwoną taśmą barwiącą serii R10000'],
  specifications: [
    { name: 'Typ', value: 'Kasety z taśmą barwiącą do druku termotransferowego' },
    { name: 'Seria', value: 'R10000' },
    { name: 'Kolory', value: 'czarny, czerwony, niebieski, żółty, zielony, biały' },
    { name: 'Szerokość taśmy', value: '50 mm' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Grubość', value: '0,0057 mm' },
    { name: 'Odporność', value: 'rozpuszczalniki, zarysowanie, rozmazanie' },
    { name: 'Zastosowania', value: 'oznaczenia rur i zaworów, oznaczenia bezpieczeństwa w obiekcie, etykiety ogólne' },
    { name: 'Zgodne drukarki', value: DRUKARKI_TASM_M7 },
    { name: 'Numery artykułów Brady', value: 'M7-R10000: 173199; M7-R10000-RD: 173196; M7-R10000-BL: 173198; M7-R10000-YL: 173194; M7-R10000-GN: 173197; M7-R10000-WT: 173195' },
  ],
  variants: [
    { partNumber: 'M7-R10000', name: 'Brady M7-R10000 — czarna taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Czarny' }, availability: 'unavailable' },
    { partNumber: 'M7-R10000-RD', name: 'Brady M7-R10000-RD — czerwona taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Czerwony' }, availability: 'unavailable' },
    { partNumber: 'M7-R10000-BL', name: 'Brady M7-R10000-BL — niebieska taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Niebieski' }, availability: 'unavailable' },
    { partNumber: 'M7-R10000-YL', name: 'Brady M7-R10000-YL — żółta taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Żółty' }, availability: 'unavailable' },
    { partNumber: 'M7-R10000-GN', name: 'Brady M7-R10000-GN — zielona taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Zielony' }, availability: 'unavailable' },
    { partNumber: 'M7-R10000-WT', name: 'Brady M7-R10000-WT — biała taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Biały' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Kolor: 'Kolor nadruku z kasety R10000 do drukarki M710.\n\nCzarny i biały nadruk sprawdza się na etykietach w jasnych i ciemnych kolorach. Kolory czerwony, żółty, zielony i niebieski służą m.in. do oznaczeń bezpieczeństwa i rurociągów.',
  },
  faq: [
    { question: 'Do czego służą kolorowe taśmy R10000 w Brady M710?', answer: 'Do oznaczeń rur, zaworów, znaków bezpieczeństwa i etykiet ogólnych w zakładzie i na zewnątrz. Kolor nadruku dobiera się do koloru etykiety. Taśmy pasują do drukarki [Brady M710](/produkt/brady-m710) i BMP71.' },
    { question: 'Czy taśmy M7-R10000 pasują do Brady M610?', answer: 'Nie. Do M610 i M611 jest seria R10000 w kasetach M61: [M61-R10010](/produkt/brady-m61-r10010).' },
  ],
  applications: ['Oznaczenia rur i zaworów', 'Kolorowe znaki bezpieczeństwa', 'Etykiety do pracy na zewnątrz'],
}

export const bradyM7R6900: Product = {
  ...wspolneM7,
  id: 'brady-m7-r6900-rd',
  slug: 'brady-m7-r6900-rd',
  name: 'Taśma barwiąca Brady M7-R6900-RD seria R6900 do M710',
  seoTitle: 'Brady M7-R6900 — kolorowe taśmy barwiące R6900 do M710',
  seoDescription: 'Kolorowe taśmy barwiące Brady seria R6900 do drukarki M710: czerwona, purpurowa, żółta, zielona i niebieska, do błyszczących etykiet, odporne na blaknięcie. PN: M7-R6900-RD, M7-R6900-BL.',
  shortDescription: 'Brady M7-R6900-RD i pozostałe kasety serii R6900 zawierają kolorowe taśmy barwiące do błyszczących i gładkich etykiet. Nadruk nie blaknie. Do drukarki Brady M710.',
  description: 'Taśmy R6900 drukują jednym kolorem na błyszczących lub gładkich materiałach etykiet i tabliczek. Na właściwym materiale Brady napis wytrzymuje rozpuszczalniki i zarysowanie, a kolor nie blaknie. Dzięki temu kolor zostaje wyraźny także na oznaczeniach wystawionych na światło.\n\nSeria ma pięć kolorów: czerwony (M7-R6900-RD), purpurowy (M7-R6900-MA), żółty (M7-R6900-YL), zielony (M7-R6900-GN) i niebieski (M7-R6900-BL). Kolorowy nadruk wyróżnia ostrzeżenia, grupy obwodów albo oznaczenia stref.\n\nTaśma R6900 ma 0,0057 mm grubości i 50 mm szerokości. Na rdzeniu jest jej 45,72 m. Kasety R6900 pasują do drukarki M710 i starszej BMP71.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/m710-r6900-series-printer-ribbon-cps-4558235',
  images: ['/images/products/brady/m7-r6900-rd.png', '/images/products/brady/m7-r6900-bl.png'],
  imageDescriptions: ['Kaseta Brady M7-R6900-RD z czerwoną taśmą barwiącą serii R6900', 'Kaseta Brady M7-R6900-BL z niebieską taśmą barwiącą serii R6900'],
  specifications: [
    { name: 'Typ', value: 'Kasety z taśmą barwiącą do druku termotransferowego' },
    { name: 'Seria', value: 'R6900' },
    { name: 'Kolory', value: 'czerwony, purpurowy, żółty, zielony, niebieski' },
    { name: 'Szerokość taśmy', value: '50 mm' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Grubość', value: '0,0057 mm' },
    { name: 'Odporność', value: 'rozpuszczalniki, zarysowanie, blaknięcie' },
    { name: 'Zalecane materiały etykiet', value: 'materiały błyszczące lub gładkie, także na tabliczki' },
    { name: 'Zgodne drukarki', value: DRUKARKI_TASM_M7 },
    { name: 'Numery artykułów Brady', value: 'M7-R6900-RD: 173181; M7-R6900-MA: 173182; M7-R6900-YL: 173180; M7-R6900-GN: 173183; M7-R6900-BL: 173184' },
  ],
  variants: [
    { partNumber: 'M7-R6900-RD', name: 'Brady M7-R6900-RD — czerwona taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Czerwony' }, availability: 'unavailable' },
    { partNumber: 'M7-R6900-MA', name: 'Brady M7-R6900-MA — purpurowa taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Purpurowy' }, availability: 'unavailable' },
    { partNumber: 'M7-R6900-YL', name: 'Brady M7-R6900-YL — żółta taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Żółty' }, availability: 'unavailable' },
    { partNumber: 'M7-R6900-GN', name: 'Brady M7-R6900-GN — zielona taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Zielony' }, availability: 'unavailable' },
    { partNumber: 'M7-R6900-BL', name: 'Brady M7-R6900-BL — niebieska taśma barwiąca 50 mm × 45,72 m', attributes: { Kolor: 'Niebieski' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Kolor: 'Kolor nadruku z kasety R6900.\n\nSeria ma pięć kolorów, w tym purpurowy (magenta). Wszystkie kasety mają taśmę 50 mm × 45,72 m o tej samej odporności na blaknięcie.',
  },
  faq: [
    { question: 'Na jakich etykietach drukuje się taśmą R6900?', answer: 'Na błyszczących lub gładkich materiałach etykiet i tabliczek. Kolorowy nadruk jest odporny na rozpuszczalniki, zarysowanie i blaknięcie. Kasety pasują do [Brady M710](/produkt/brady-m710).' },
    { question: 'Czym różni się seria R6900 od R10000?', answer: 'R6900 jest przeznaczona do materiałów błyszczących i gładkich i ma kolor purpurowy. [R10000](/produkt/brady-m7-r10000) ma czarny i biały kolor i jest przeznaczona do oznaczeń rur, zaworów i znaków w obiekcie.' },
  ],
  applications: ['Kolorowe oznaczenia na błyszczących etykietach', 'Tabliczki i oznaczenia stref'],
}

export const bradyM7Tasmy: Product[] = [
  bradyM7R4300,
  bradyM7R6000,
  bradyM7R6600,
  bradyM7R4400,
  bradyM7R6200,
  bradyM7R6300,
  bradyM7R6400,
  bradyM7R6700,
  bradyM7R6800,
  bradyM7R10000,
  bradyM7R6900,
]

export const bradyM7TasmySekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = Object.fromEntries(bradyM7Tasmy.map((p) => [p.id, 'tasmy' as const]))
