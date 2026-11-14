import type { Product } from './products'
import { wspolneJ7300 } from './brady-j7300-wspolne'

// Etykiety ogólne i przemysłowe Brady do kolorowej drukarki atramentowej BradyJet J7300 (materiały J- i JC-):
// winyl B-2595, PermaShield, winyl do wielokrotnego przyklejania, papier, papier rozpuszczalny w wodzie, etykiety magnetyczne. 14.11.2026.

// ---------------------------------------------------------------------------
// Winyl B-2595 (cps-4854371 i okrągłe cps-4854373): taśmy JC- oraz etykiety wykrawane J-
// ---------------------------------------------------------------------------

// [PN, nr art., kształt, rozmiar]
const WINYL_2595: [string, string, string, string][] = [
  ['JC-1125-2595', '176580', 'Taśma ciągła', 'ciągła 28,58 mm × 45,72 m'],
  ['JC-2250-2595', '176581', 'Taśma ciągła', 'ciągła 57,15 mm × 45,72 m'],
  ['JC-3000-2595', '176582', 'Taśma ciągła', 'ciągła 76,2 mm × 45,72 m'],
  ['JC-4000-2595', '170458', 'Taśma ciągła', 'ciągła 101,6 mm × 45,72 m'],
  ['J-388-2595', '170476', 'Okrągła', 'Ø 25,4 mm, 500 szt.'],
  ['J-389-2595', '176630', 'Okrągła', 'Ø 38,1 mm, 500 szt.'],
  ['J-390-2595', '170477', 'Okrągła', 'Ø 50,8 mm, 500 szt.'],
  ['J-179-2595', '170459', 'Kwadratowa', '25,4 × 25,4 mm, 1000 szt.'],
  ['J-386-2595', '176626', 'Kwadratowa', '38,1 × 38,1 mm, 1000 szt.'],
  ['J-387-2595', '176627', 'Kwadratowa', '50,8 × 50,8 mm, 500 szt.'],
  ['J-18-2595', '176602', 'Prostokątna', '76,2 × 25,4 mm, 1000 szt.'],
  ['J-372-2595', '176628', 'Prostokątna', '73,03 × 38,1 mm, 1000 szt.'],
  ['J-373-2595', '176629', 'Prostokątna', '98,43 × 48,26 mm, 500 szt.'],
  ['J-260-2595', '176601', 'Prostokątna', '55,12 × 85,09 mm, 500 szt.'],
  ['J-261-2595', '176603', 'Prostokątna', '74,93 × 109,98 mm, 300 szt.'],
  ['J-262-2595', '176604', 'Prostokątna', '104,9 × 154,94 mm, 250 szt.'],
]

const RODZAJ_2595: Record<string, string> = {
  'Taśma ciągła': 'taśma winylowa',
  Okrągła: 'okrągłe etykiety winylowe',
  Kwadratowa: 'kwadratowe etykiety winylowe',
  Prostokątna: 'prostokątne etykiety winylowe',
}

export const bradyJ7300Winyl2595: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-4000-2595',
  slug: 'brady-jc-4000-2595',
  name: 'Etykiety winylowe Brady B-2595 do drukarki J7300',
  seoTitle: 'Brady B-2595 — etykiety winylowe do drukarki J7300',
  seoDescription: 'Winyl Brady B-2595 do BradyJet J7300: taśmy ciągłe oraz etykiety okrągłe, kwadratowe i prostokątne, od −40 do 60 °C. PN: JC-4000-2595, J-389-2595, J-262-2595.',
  shortDescription: 'Biały, matowy winyl Brady B-2595 w 16 wersjach: taśmy ciągłe oraz etykiety okrągłe, kwadratowe i prostokątne. Do drukarki Brady J7300.',
  description: 'Brady B-2595 to biały, matowy winyl ogólnego przeznaczenia do druku atramentowego. Powłoka wierzchnia poprawia trwałość i odwzorowanie kolorów. Folia mało się kurczy, a trwały klej akrylowy wiąże się z powierzchniami gładkimi i chropowatymi. Etykieta służy do dwóch lat na zewnątrz, a w pomieszczeniach dłużej. Materiał stosuje się do oznaczania rur i zaworów, urządzeń, miejsc składowania i pojemników oraz do etykiet OSHA/ANSI, GHS, blokad i środków ochrony indywidualnej.\n\nRodzina obejmuje 16 wersji. Cztery z nich to taśmy ciągłe, szerokie od 28,58 do 101,6 mm, na rolkach po 45,72 m. Pozostałe to etykiety wykrawane: trzy okrągłe o średnicach 25,4 mm, 38,1 mm i 50,8 mm, trzy kwadratowe oraz sześć prostokątnych, z których największa ma 104,9 × 154,94 mm. Rolka mieści od 250 do 1000 etykiet.\n\nFolia ma grubość 0,135 mm. Gotowa etykieta wytrzymuje od −40 °C do 60 °C, a przykleja się ją przy −18 °C lub cieplej. Materiał znosi ścieranie, olej, alkohol, rozpuszczalniki i chemikalia oraz światło jarzeniowe i UV w pomieszczeniach. Tusze J7300 wiążą się z powłoką i chronią nadruk przed rozmazaniem. Etykiety okrągłe przeznaczono do użytku wewnętrznego, na przykład do oznaczania manometrów i wskaźników maszyn w metodzie Lean i 5S.',
  sameAs: 'https://www.brady.eu/labels/vinyl-labels-for-bradyjet-j7300-colour-label-printer-cps-4854371',
  images: [
    '/images/products/brady/jc-4000-2595.png',
    '/images/products/brady/j-387-2595.png',
    '/images/products/brady/j-389-2595.png',
  ],
  imageDescriptions: [
    'Rolka Brady JC-4000-2595 w niebieskiej kasecie z wysuniętą białą taśmą winylową o szerokości 101,6 mm',
    'Rolka Brady J-387-2595 z białymi, kwadratowymi etykietami winylowymi 50,8 × 50,8 mm na pasku',
    'Rolka Brady J-389-2595 z białymi, okrągłymi etykietami winylowymi o średnicy 38,1 mm na pasku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej JC- albo etykiet wykrawanych J- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-2595' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego, mało kurczliwy' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,135 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, olej, rozpuszczalniki i chemikalia, praca na zewnątrz' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'okrągłe Ø 25,4–50,8 mm; kwadratowe 25,4–50,8 mm; prostokątne od 76,2 × 25,4 do 104,9 × 154,94 mm; taśma ciągła 28,58–101,6 mm × 45,72 m' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000 etykiet; taśma ciągła: 1 rolka' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: WINYL_2595.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_2595.map(([pn, , ksztalt, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${RODZAJ_2595[ksztalt]} ${rozmiar} do J7300`,
    attributes: { Kształt: ksztalt, Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Kształt: 'Forma materiału na rolce.\n\nTaśma ciągła jest bez podziałów. Etykiety wykrawane są okrągłe, kwadratowe albo prostokątne.',
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nWymiar etykiet okrągłych podano jako średnicę (Ø).',
  },
  faq: [
    { question: 'Jak długo etykiety B-2595 wytrzymują na zewnątrz?', answer: 'Do dwóch lat na zewnątrz, a w pomieszczeniach dłużej. Etykiety okrągłe przeznaczono do użytku wewnętrznego.' },
    { question: 'Na jakich powierzchniach trzyma się winyl B-2595?', answer: 'Trwały klej akrylowy wiąże się z powierzchniami gładkimi oraz chropowatymi. Naklejać można od −18 °C, a gotowa etykieta pracuje od −40 do 60 °C.' },
    { question: 'Którą drukarką drukuje się etykiety B-2595?', answer: 'Etykiety drukuje [Brady J7300](/produkt/brady-j7300) tuszami CMY i K. Układ LabelSense rozpoznaje rolkę i ustawia etykietę automatycznie.' },
  ],
  applications: ['Oznaczanie rur, zaworów i urządzeń', 'Etykiety OSHA/ANSI, GHS i blokad', 'Manometry i wskaźniki maszyn w metodzie Lean i 5S'],
}

// ---------------------------------------------------------------------------
// Winyl All Weather z trwałym klejem B-2595 (cps-5452399), etykiety wykrawane J-
// ---------------------------------------------------------------------------

// [PN, nr art., kształt, rozmiar]
const ALL_WEATHER: [string, string, string, string][] = [
  ['J-395-2595', '178811', 'Kwadratowa', '19,99 × 19,99 mm, 1000 szt.'],
  ['J-393-2595', '178812', 'Prostokątna', '82,55 × 28,58 mm, 1000 szt.'],
  ['J-394-2595', '178813', 'Prostokątna', '101,6 × 57,15 mm, 500 szt.'],
]

export const bradyJ7300AllWeather: Product = {
  ...wspolneJ7300,
  id: 'brady-j-394-2595',
  slug: 'brady-j-394-2595',
  name: 'Etykiety winylowe All Weather z trwałym klejem Brady B-2595 do drukarki J7300',
  seoTitle: 'Brady B-2595 All Weather — etykiety winylowe do drukarki J7300',
  seoDescription: 'Etykiety winylowe Brady B-2595 All Weather do BradyJet J7300: trwały klej, praca na zewnątrz, od −40 do 60 °C. PN: J-395-2595, J-393-2595, J-394-2595.',
  shortDescription: 'Białe, matowe etykiety winylowe Brady All Weather z trwałym klejem akrylowym, w trzech rozmiarach wykrawanych. Do drukarki Brady J7300.',
  description: 'Etykiety Brady All Weather to biały, matowy winyl B-2595 w wersji do druku atramentowego. Specjalna powłoka wierzchnia chroni nadruk i oddaje kolory, a folia mało się kurczy. Trwały klej akrylowy utrzymuje je na gładkich powierzchniach także na wolnym powietrzu. Etykiety pasują do urządzeń, kłódek i kart blokad, opakowań z substancjami chemicznymi oraz do oznaczania stanów magazynowych i kontroli.\n\nEtykiety są wykrawane i mają trzy rozmiary. Dwa z nich mają po 1000 sztuk na rolce: kwadratowy 19,99 × 19,99 mm i prostokątny 82,55 × 28,58 mm. Trzeci, prostokątny 101,6 × 57,15 mm, ma 500 sztuk. Rolka z największym rozmiarem zawiera o połowę mniej etykiet niż pozostałe.\n\nGrubość folii wynosi 0,135 mm. Etykieta pracuje poniżej zera aż do −40 °C i znosi 60 °C, a naklejanie dozwolone jest od −18 °C. Materiał znosi ścieranie oraz działanie rozpuszczalników i chemikaliów. Przetestowano go także na kontakt z cieczami i alkoholem. Nadruk w pełnym kolorze powstaje z tuszy drukarki J7300. Dane rolki trafiają do drukarki dzięki układowi Smart Cell.',
  sameAs: 'https://www.brady.eu/labels/all-weather-permanent-adhesive-vinyl-labels-for-j7300-inkjet-printer-cps-5452399',
  images: [
    '/images/products/brady/j-394-2595.png',
    '/images/products/brady/j-393-2595.png',
    '/images/products/brady/j-395-2595.png',
  ],
  imageDescriptions: [
    'Rolka Brady J-394-2595 w niebieskiej kasecie z białymi, prostokątnymi etykietami winylowymi 101,6 × 57,15 mm na pasku',
    'Rolka Brady J-393-2595 z białymi, wąskimi etykietami winylowymi 82,55 × 28,58 mm na pasku',
    'Rolka Brady J-395-2595 z małymi, białymi, kwadratowymi etykietami winylowymi 19,99 × 19,99 mm na pasku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych J- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-2595' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,135 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki i chemikalia, praca na zewnątrz' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '19,99 × 19,99 mm, 82,55 × 28,58 mm, 101,6 × 57,15 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1000 albo 500, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: ALL_WEATHER.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ALL_WEATHER.map(([pn, , ksztalt, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${ksztalt === 'Kwadratowa' ? 'kwadratowe' : 'prostokątne'} etykiety winylowe All Weather ${rozmiar} do J7300`,
    attributes: { Kształt: ksztalt, Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Kształt: 'Kształt wykrawanej etykiety.\n\nNajmniejsza etykieta jest kwadratowa, a dwie pozostałe prostokątne.',
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 19,99 × 19,99 mm, a największa 101,6 × 57,15 mm.',
  },
  faq: [
    { question: 'Czym różnią się etykiety All Weather od standardowego winylu B-2595?', answer: 'Materiał jest ten sam. All Weather obejmuje trzy rozmiary wykrawanych etykiet z trwałym klejem: 19,99 × 19,99 mm, 82,55 × 28,58 mm i 101,6 × 57,15 mm.' },
    { question: 'W jakiej temperaturze pracują etykiety All Weather?', answer: 'Od −40 do 60 °C. Naklejać je należy od −18 °C, na powierzchniach gładkich.' },
    { question: 'Jaką drukarką drukuje się etykiety All Weather?', answer: 'Etykiety drukuje [Brady J7300](/produkt/brady-j7300) tuszami CMY i K z kaset P-CMY-1 i P-K-1.' },
  ],
  applications: ['Oznaczanie urządzeń, kłódek i kart blokad', 'Etykiety GHS na opakowaniach z chemikaliami', 'Oznaczenia kontroli i stanów magazynowych'],
}

// ---------------------------------------------------------------------------
// PermaShield: winyl B-2595 z nakładką poliestrową (cps-4854372), etykiety wykrawane JPSL-
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta mm, sztuk, nakładka mm]
const PERMASHIELD: [string, string, string, string, string][] = [
  ['JPSL-18-2595', '176648', '76,2 × 25,4', '750', '88,9 × 38,1'],
  ['JPSL-260-2595', '176655', '55,12 × 85,09', '300', '67,82 × 97,79'],
  ['JPSL-261-2595', '176657', '74,93 × 109,98', '250', '87,63 × 122,68'],
]

export const bradyJ7300Permashield: Product = {
  ...wspolneJ7300,
  id: 'brady-jpsl-260-2595',
  slug: 'brady-jpsl-260-2595',
  name: 'Etykiety winylowe z nakładką Brady PermaShield B-2595 do drukarki J7300',
  seoTitle: 'Brady PermaShield B-2595 — winyl z nakładką do drukarki J7300',
  seoDescription: 'Etykiety Brady PermaShield do BradyJet J7300: winyl B-2595 z nakładką poliestrową odporną na rozpuszczalniki i mycie. PN: JPSL-18-2595, JPSL-260-2595.',
  shortDescription: 'Zestaw Brady PermaShield z wykrawaną etykietą winylową i pasującą przezroczystą nakładką z poliestru, w trzech rozmiarach. Do drukarki Brady J7300.',
  description: 'Brady PermaShield to zestaw dwóch elementów: drukowanej etykiety winylowej i pasującej do niej przezroczystej nakładki z poliestru. Etykietę drukuje się i przykleja do powierzchni, a następnie zakrywa nakładką. Nakładka chroni nadruk przed rozpuszczalnikami, czynnikami zewnętrznymi oraz myciem w przemyśle spożywczym i napojów. Dzięki temu oznaczenia zachowują trwałość nawet w najtrudniejszych środowiskach.\n\nEtykiety są wykrawane i dostępne w trzech rozmiarach: 76,2 × 25,4 mm (750 sztuk), 55,12 × 85,09 mm (300 sztuk) oraz 74,93 × 109,98 mm (250 sztuk). Nakładka każdego rozmiaru jest nieco większa od etykiety i zachodzi na jej krawędzie. Obie części zestawu mają dopasowane wymiary, więc nie trzeba ich osobno przycinać.\n\nFolia winylowa ma matowe wykończenie i klej akrylowy do powierzchni gładkich oraz chropowatych. Razem z nakładką grubość wynosi 0,237 mm. Całość znosi ścieranie, promieniowanie UV, słońce, wilgoć i częste czyszczenie. Praca jest możliwa od −40 do 60 °C. Etykiety ze zdjęciem pracownika często umieszcza się na kłódkach blokad. Nadruk w pełnym kolorze wykonuje J7300.',
  sameAs: 'https://www.brady.eu/labels/permashield-vinyl-labels-overlaminate-for-bradyjet-j7300-colour-label-printer-cps-4854372',
  images: [
    '/images/products/brady/jpsl-260-2595.png',
    '/images/products/brady/jpsl-261-2595.png',
    '/images/products/brady/jpsl-18-2595.png',
  ],
  imageDescriptions: [
    'Rolka Brady JPSL-260-2595 w niebieskiej kasecie z białymi, wykrawanymi etykietami PermaShield 55,12 × 85,09 mm',
    'Rolka Brady JPSL-261-2595 z dużymi, białymi etykietami PermaShield 74,93 × 109,98 mm na pasku',
    'Rolka Brady JPSL-18-2595 z wąskimi, białymi etykietami PermaShield 76,2 × 25,4 mm na pasku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych J- z nakładką, do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'PermaShield: winyl B-2595 z nakładką poliestrową' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego, przezroczysta nakładka z poliestru' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,237 mm (etykieta z nakładką)' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki i chemikalia, UV i słońce, warunki pogodowe, mycie i częste czyszczenie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '76,2 × 25,4 mm, 55,12 × 85,09 mm, 74,93 × 109,98 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '750, 300 albo 250, zależnie od wersji' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: PERMASHIELD.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PERMASHIELD.map(([pn, , etykieta, sztuk, nakladka]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykiety PermaShield ${etykieta} mm z nakładką do J7300`,
    attributes: { Rozmiar: `${etykieta} mm, ${sztuk} szt.`, Nakładka: `${nakladka} mm` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary wykrawanej etykiety winylowej i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 76,2 × 25,4 mm, a największa 74,93 × 109,98 mm.',
    Nakładka: 'Wymiary przezroczystej nakładki z poliestru, która zakrywa nadruk.\n\nNakładka jest większa od etykiety o kilkanaście milimetrów.',
  },
  faq: [
    { question: 'Co zawiera zestaw PermaShield?', answer: 'Zestaw obejmuje wykrawaną etykietę winylową do druku atramentowego i pasującą przezroczystą nakładkę z poliestru. Po wydrukowaniu i naklejeniu etykiety nakłada się na nią nakładkę.' },
    { question: 'Przed czym nakładka chroni etykietę?', answer: 'Nakładka chroni nadruk przed rozpuszczalnikami, czynnikami zewnętrznymi oraz myciem w przemyśle spożywczym i napojów. Etykieta znosi też UV, słońce i częste czyszczenie.' },
    { question: 'Jaką drukarką drukuje się etykiety PermaShield?', answer: 'Etykiety drukuje [Brady J7300](/produkt/brady-j7300) w pełnym kolorze. Układ LabelSense rozpoznaje rolkę i ustawia etykietę automatycznie.' },
  ],
  applications: ['Zdjęcia pracowników na kłódkach blokad', 'Etykiety w strefach mycia i przemyśle spożywczym', 'Oznaczenia narażone na rozpuszczalniki i warunki zewnętrzne'],
}

// ---------------------------------------------------------------------------
// Winyl do wielokrotnego przyklejania B-2581 (cps-4854383), taśmy ciągłe JC-
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm]
const WINYL_2581: [string, string, string][] = [
  ['JC-1125-2581', '170455', '28,58'],
  ['JC-2250-2581', '170456', '57,15'],
  ['JC-4000-2581', '170457', '101,6'],
]

export const bradyJ7300Winyl2581: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-4000-2581',
  slug: 'brady-jc-4000-2581',
  name: 'Etykiety winylowe do wielokrotnego przyklejania Brady B-2581 do drukarki J7300',
  seoTitle: 'Brady B-2581 — winyl do wielokrotnego przyklejania do J7300',
  seoDescription: 'Winyl Brady B-2581 do wielokrotnego przyklejania do BradyJet J7300: taśma 28,58, 57,15 i 101,6 mm × 45,72 m, od −40 do 60 °C. PN: JC-4000-2581, JC-2250-2581.',
  shortDescription: 'Biała, matowa taśma winylowa Brady B-2581 z klejem, który pozwala zdjąć etykietę i przykleić ją ponownie. Szerokości 28,58, 57,15 i 101,6 mm, długość 45,72 m. Do drukarki Brady J7300.',
  description: 'Brady B-2581 to biały, matowy winyl do druku atramentowego z klejem akrylowym, który umożliwia ponowne przyklejanie. Etykietę można zdjąć i przełożyć w inne miejsce. Na powierzchni nie zostają ślady kleju ani uszkodzenia. Elastyczny materiał opracowano do miejsc, w których oznaczenia często się zmieniają: regałów, pojemników i stref składowania.\n\nMateriał występuje jako taśma ciągła w trzech szerokościach, od wąskiej (28,58 mm) przez średnią (57,15 mm) po szeroką (101,6 mm). Rolka zawiera 45,72 m taśmy. Format etykiety projektuje się w oprogramowaniu tuż przed drukiem, więc jedna rolka obsługuje różne formaty. Klej pasuje do powierzchni gładkich. Ustawienie materiału w drukarce odbywa się automatycznie.\n\nGrubość folii to 0,137 mm. Jest odporna na ścieranie oraz na rozpuszczalniki i chemikalia. Etykieta znosi mróz −40 °C i upał 60 °C, a nakleja się ją od 10 °C. Materiał dobrze znosi niskie temperatury. Pełny kolor drukuje się tuszami CMY i K drukarki J7300. Układ LabelSense przekazuje do drukarki dane rolki i ustawia parametry etykiety.',
  sameAs: 'https://www.brady.eu/labels/repositionable-vinyl-labels-for-bradyjet-j7300-colour-label-printer-cps-4854383',
  images: [
    '/images/products/brady/jc-4000-2581.png',
    '/images/products/brady/jc-2250-2581.png',
    '/images/products/brady/jc-1125-2581.png',
  ],
  imageDescriptions: [
    'Rolka Brady JC-4000-2581 w niebieskiej kasecie z wysuniętą białą taśmą winylową o szerokości 101,6 mm',
    'Rolka Brady JC-2250-2581 z białą taśmą winylową o szerokości 57,15 mm i chipem Smart Cell na kasecie',
    'Rolka Brady JC-1125-2581 z wąską, białą taśmą winylową o szerokości 28,58 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej JC- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-2581' },
    { name: 'Typ materiału', value: 'winyl do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'akrylowy, do wielokrotnego przyklejania; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,137 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki i chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Liczba sztuk na rolce', value: '1 rolka' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne kasety z tuszem', value: 'P-CMY-1, P-K-1' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: WINYL_2581.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_2581.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — taśma winylowa do wielokrotnego przyklejania ${szer} mm × 45,72 m do J7300`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 45,72 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nRolka ma 45,72 m. Szerokość wynosi 28,58, 57,15 albo 101,6 mm.',
  },
  faq: [
    { question: 'Czy etykiety B-2581 zostawiają ślady kleju po zdjęciu?', answer: 'Nie. Klej umożliwia zdjęcie i ponowne przyklejenie etykiety bez śladów kleju i bez uszkodzenia powierzchni. Klej pasuje do powierzchni gładkich.' },
    { question: 'Jakie kasety z tuszem są potrzebne do taśmy B-2581?', answer: 'Do druku potrzebne są kasety P-CMY-1 i P-K-1. Taśmę drukuje [Brady J7300](/produkt/brady-j7300), a układ LabelSense rozpoznaje rolkę automatycznie.' },
    { question: 'W jakiej temperaturze pracuje i nakleja się taśmę B-2581?', answer: 'Gotowa etykieta pracuje w temperaturze od −40 do 60 °C. Naklejać ją należy od 10 °C.' },
  ],
  applications: ['Oznaczenia regałów, pojemników i miejsc składowania', 'Etykiety Lean i 5S', 'Oznaczanie półproduktów w toku produkcji'],
}

// ---------------------------------------------------------------------------
// Papier rozpuszczalny w wodzie B-403 (cps-4854380): taśmy JC- i etykiety wykrawane J-
// ---------------------------------------------------------------------------

// [PN, nr art., forma, rozmiar]
const PAPIER_403: [string, string, string, string][] = [
  ['JC-1125-403', '176583', 'Taśma ciągła', 'ciągła 28,58 mm × 45,72 m'],
  ['JC-2250-403', '170460', 'Taśma ciągła', 'ciągła 57,15 mm × 45,72 m'],
  ['J-17-403', '170461', 'Etykiety wykrawane', '50,8 × 25,4 mm, 1000 szt.'],
  ['J-19-403', '176605', 'Etykiety wykrawane', '76,2 × 50,8 mm, 750 szt.'],
  ['J-55-403', '170462', 'Etykiety wykrawane', '101,6 × 50,8 mm, 750 szt.'],
]

export const bradyJ7300Papier403: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-2250-403',
  slug: 'brady-jc-2250-403',
  name: 'Etykiety papierowe rozpuszczalne w wodzie Brady B-403 do drukarki J7300',
  seoTitle: 'Brady B-403 — papier rozpuszczalny w wodzie do drukarki J7300',
  seoDescription: 'Papier rozpuszczalny w wodzie Brady B-403 do BradyJet J7300: etykieta znika w ciepłej wodzie w 30 s, od −70 do 100 °C. PN: JC-2250-403, J-19-403, J-55-403.',
  shortDescription: 'Biały papier Brady B-403 z klejem rozpuszczalnym w wodzie, jako taśma ciągła lub etykiety wykrawane. Etykieta i klej znikają w ciepłej wodzie w 30 sekund. Do drukarki Brady J7300.',
  description: 'Brady B-403 to biały, matowy papier, który rozpuszcza się w wodzie razem z klejem. Po zanurzeniu w ciepłej wodzie etykieta i klej znikają w ciągu 30 sekund. Powierzchnia pozostaje czysta, bez resztek. Papier jest samoprzylepny i bardzo łatwo go nakleić. Taki materiał skraca zdejmowanie oznaczeń z naczyń i elementów używanych wielokrotnie, a także ułatwia konserwację filtrów i odpływów.\n\nPapier występuje w pięciu wersjach. Dwie taśmy ciągłe mają 28,58 i 57,15 mm szerokości oraz 45,72 m długości. Trzy rozmiary etykiet wykrawanych są prostokątne: najmniejsza, 50,8 × 25,4 mm, trafia na rolki po 1000 sztuk, a rozmiary 76,2 × 50,8 mm i 101,6 × 50,8 mm na rolki po 750 sztuk.\n\nGrubość papieru to 0,0762 mm, a zakres użytkowania obejmuje od −70 do 100 °C. Znosi ścieranie oraz wilgoć, a etykiety wykrawane dobrze znoszą też niskie temperatury. Materiał spełnia wymagania RoHS (dyrektywa 2011/65/EU, uzupełniona 2015/863). Kolorowy nadruk wykonuje się tuszami J7300, a układ LabelSense przyspiesza zmianę rolki.',
  sameAs: 'https://www.brady.eu/labels/water-soluble-paper-labels-for-bradyjet-j7300-colour-label-printer-cps-4854380',
  images: [
    '/images/products/brady/jc-2250-403.png',
    '/images/products/brady/j-55-403.png',
    '/images/products/brady/j-19-403.png',
  ],
  imageDescriptions: [
    'Rolka Brady JC-2250-403 w niebieskiej kasecie z wysuniętą białą taśmą papierową o szerokości 57,15 mm',
    'Rolka Brady J-55-403 z białymi, prostokątnymi etykietami papierowymi 101,6 × 50,8 mm na pasku',
    'Rolka Brady J-19-403 z białymi, prostokątnymi etykietami papierowymi 76,2 × 50,8 mm na pasku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej JC- albo etykiet wykrawanych J- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-403' },
    { name: 'Typ materiału', value: 'papier rozpuszczalny w wodzie' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'akrylowy, rozpuszczalny w wodzie; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '50,8 × 25,4 mm, 76,2 × 50,8 mm, 101,6 × 50,8 mm; taśma ciągła 28,58 i 57,15 mm × 45,72 m' },
    { name: 'Liczba sztuk na rolce', value: '1000 albo 750 etykiet; taśma ciągła: 1 rolka' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Normy', value: 'RoHS 2011/65/EU (uzupełniona 2015/863)' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: PAPIER_403.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PAPIER_403.map(([pn, , forma, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — papier rozpuszczalny w wodzie, ${rozmiar} do J7300`,
    attributes: { Forma: forma, Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Forma: 'Sposób dostarczenia materiału.\n\nTaśma ciągła ma długość 45,72 m. Etykiety wykrawane są prostokątne.',
    Rozmiar: 'Wymiary etykiety albo szerokość i długość taśmy.\n\nTaśma ciągła ma 45,72 m. Etykiety wykrawane mają 750 albo 1000 sztuk na rolce.',
  },
  faq: [
    { question: 'Jak zdjąć etykietę papierową B-403?', answer: 'Etykietę wystarczy zwilżyć ciepłą wodą. Papier i klej rozpuszczają się całkowicie w ciągu 30 sekund, bez uszkodzenia powierzchni i bez resztek.' },
    { question: 'Do jakich naczyń nadaje się papier B-403?', answer: 'Dane Brady podają zastosowanie na butelkach, szalkach i kolbach. Papier pracuje w temperaturach od −70 do 100 °C.' },
    { question: 'Jaką drukarką drukuje się papier B-403?', answer: 'Papier drukuje [Brady J7300](/produkt/brady-j7300) tuszami CMY i K. Układ LabelSense rozpoznaje rolkę i ustawia etykietę automatycznie.' },
  ],
  applications: ['Naczynia laboratoryjne: butelki, szalki i kolby', 'Oznaczenia tymczasowe i śledzenie majątku', 'Oznaczanie półproduktów w toku produkcji'],
}

// ---------------------------------------------------------------------------
// Papier B-2550 (cps-4854379 i taśma papierowa cps-5452402): taśmy JC- oraz etykiety wykrawane J-
// ---------------------------------------------------------------------------

// [PN, nr art., kształt, rozmiar]
const PAPIER_2550: [string, string, string, string][] = [
  ['JC-1125-2550', '176587', 'Taśma ciągła', 'ciągła 28,58 mm × 45,72 m'],
  ['JC-2250-2550', '176588', 'Taśma ciągła', 'ciągła 57,15 mm × 45,72 m'],
  ['JC-4000-2550', '170471', 'Taśma ciągła', 'ciągła 101,6 mm × 45,72 m'],
  ['J-18-2550', '170472', 'Prostokątna', '76,2 × 25,4 mm, 1000 szt.'],
  ['J-19-2550', '176621', 'Prostokątna', '76,2 × 50,8 mm, 750 szt.'],
  ['J-55-2550', '178814', 'Prostokątna', '101,6 × 50,8 mm, 750 szt.'],
  ['J-77-2550', '178815', 'Kwadratowa', '101,6 × 101,6 mm, 300 szt.'],
  ['J-261-2550', '176622', 'Prostokątna', '74,93 × 109,98 mm, 300 szt.'],
  ['J-262-2550', '176623', 'Prostokątna', '104,9 × 154,94 mm, 250 szt.'],
]

const RODZAJ_2550: Record<string, string> = {
  'Taśma ciągła': 'taśma papierowa',
  Prostokątna: 'prostokątne etykiety papierowe',
  Kwadratowa: 'kwadratowe etykiety papierowe',
}

export const bradyJ7300Papier2550: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-4000-2550',
  slug: 'brady-jc-4000-2550',
  name: 'Etykiety papierowe Brady B-2550 do drukarki J7300',
  seoTitle: 'Brady B-2550 — etykiety papierowe do drukarki J7300',
  seoDescription: 'Papier Brady B-2550 do BradyJet J7300: ekonomiczne etykiety z trwałym klejem, taśmy ciągłe i etykiety wykrawane. PN: JC-4000-2550, J-19-2550, J-77-2550.',
  shortDescription: 'Biały, matowy papier Brady B-2550 z trwałym klejem akrylowym w dziewięciu wersjach: taśmy ciągłe i etykiety wykrawane. Do drukarki Brady J7300.',
  description: 'Brady B-2550 to biały, matowy papier do druku atramentowego, przeznaczony do ekonomicznego znakowania w lekkich warunkach pracy. Nadruk ma wysoki kontrast i nie rozmazuje się, więc papier nadaje się do kodów kreskowych. Mocny, trwały klej akrylowy przylega do powierzchni płaskich i zakrzywionych, także kartonu, tworzywa i metalu. Papier stosuje się do znakowania półek, pojemników i miejsc składowania oraz w kontroli jakości, na przykład do oznaczania daty i godziny.\n\nRodzina obejmuje dziewięć wersji. Trzy z nich to taśmy ciągłe po 45,72 m a ich szerokość rośnie w trzech stopniach, od 28,58 mm do 101,6 mm. Sześć pozostałych to etykiety wykrawane, po 250–1000 sztuk na rolce; skrajne wymiary to etykieta 76,2 × 25,4 mm i etykieta 104,9 × 154,94 mm. Długość etykiety na taśmie ciągłej wyznacza oprogramowanie.\n\nPapier ma grubość 0,12 mm. W zakresie od −40 do 60 °C zachowuje właściwości, a przyklejać go można od −28 °C. Druk w pełnym kolorze wykonują tusze drukarki J7300. Układ Smart Cell przekazuje do drukarki dane rolki, co skraca zmianę materiału.',
  sameAs: 'https://www.brady.eu/labels/paper-labels-for-bradyjet-j7300-colour-label-printer-cps-4854379',
  images: [
    '/images/products/brady/jc-4000-2550.png',
    '/images/products/brady/j-77-2550.png',
    '/images/products/brady/j-261-2550.png',
  ],
  imageDescriptions: [
    'Rolka Brady JC-4000-2550 w niebieskiej kasecie z wysuniętą białą taśmą papierową o szerokości 101,6 mm',
    'Rolka Brady J-77-2550 z białymi, kwadratowymi etykietami papierowymi 101,6 × 101,6 mm na pasku',
    'Rolka Brady J-261-2550 z białymi, prostokątnymi etykietami papierowymi 74,93 × 109,98 mm na pasku',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej JC- albo etykiet wykrawanych J- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-2550' },
    { name: 'Typ materiału', value: 'papier do druku atramentowego' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,12 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Temperatura naklejania', value: 'od −28 °C' },
    { name: 'Odporność', value: 'rozmazywanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 76,2 × 25,4 do 104,9 × 154,94 mm; taśma ciągła 28,58–101,6 mm × 45,72 m' },
    { name: 'Liczba sztuk na rolce', value: 'od 250 do 1000 etykiet; taśma ciągła: 1 rolka' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: PAPIER_2550.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PAPIER_2550.map(([pn, , ksztalt, rozmiar]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${RODZAJ_2550[ksztalt]} ${rozmiar} do J7300`,
    attributes: { Kształt: ksztalt, Rozmiar: rozmiar },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Kształt: 'Forma materiału na rolce.\n\nTaśma ciągła jest bez podziałów. Etykiety wykrawane są prostokątne albo kwadratowe.',
    Rozmiar: 'Wymiary etykiety i liczba sztuk na rolce albo szerokość i długość taśmy ciągłej.\n\nTaśma ciągła ma 45,72 m długości.',
  },
  faq: [
    { question: 'Do czego służy papier B-2550?', answer: 'Do ekonomicznego znakowania w lekkich warunkach pracy: kodów kreskowych, oznaczeń półek i pojemników oraz kontroli jakości. Nadruk ma wysoki kontrast i nie rozmazuje się.' },
    { question: 'Na jakich powierzchniach trzyma się papier B-2550?', answer: 'Trwały klej akrylowy mocno wiąże się z powierzchniami płaskimi i zakrzywionymi, na przykład z kartonem, tworzywem i metalem. Naklejać można od −28 °C.' },
    { question: 'Jakie kasety z tuszem są potrzebne do papieru B-2550?', answer: 'Potrzebne są kasety P-CMY-1 i P-K-1. Papier drukuje [Brady J7300](/produkt/brady-j7300), a układ Smart Cell rozpoznaje rolkę.' },
  ],
  applications: ['Etykiety z kodami kreskowymi', 'Oznaczanie półek, pojemników i miejsc składowania', 'Kontrola jakości: oznaczanie daty i godziny'],
}

// ---------------------------------------------------------------------------
// Etykiety magnetyczne B-2509 (cps-4854384), taśmy JC-
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość mm]
const MAGNETYCZNE_2509: [string, string, string][] = [
  ['JC-2500-2509', '170450', '63,5'],
  ['JC-4250-2509', '170451', '107,95'],
]

export const bradyJ7300Magnetyczne2509: Product = {
  ...wspolneJ7300,
  id: 'brady-jc-4250-2509',
  slug: 'brady-jc-4250-2509',
  name: 'Etykiety magnetyczne Brady B-2509 do drukarki J7300',
  seoTitle: 'Brady B-2509 — etykiety magnetyczne do drukarki J7300',
  seoDescription: 'Magnetyczny poliester Brady B-2509 do BradyJet J7300: etykiety bez kleju, które można zdjąć i przestawić. PN: JC-2500-2509, JC-4250-2509; 7,62 m.',
  shortDescription: 'Biała, matowa taśma magnetyczna Brady B-2509 bez kleju, o szerokości 63,5 lub 107,95 mm i długości 7,62 m. Do drukarki Brady J7300.',
  description: 'Brady B-2509 to biały, matowy poliester magnetyczny do druku atramentowego. Materiał nie ma kleju, więc etykietę można zdjąć i przestawić bez śladów na powierzchni. Przy częstej zmianie oznaczeń to najprostszy i najszybszy sposób etykietowania. Etykiety magnetyczne ułatwiają wizualne zarządzanie miejscem pracy, zwiększają wydajność i ograniczają pomyłki. Można je wykorzystywać wielokrotnie. Takie oznaczenia dobrze pasują do regałów magazynowych, pojemników i półek, a także do metody Lean i 5S.\n\nTaśma ciągła magnetyczna ma na rolce 7,62 m materiału. Szerokość wynosi 63,5 albo 107,95 mm. Wymiar etykiety wzdłuż taśmy określa się w programie do etykiet. Magnes trzyma się powierzchni gładkich, przede wszystkim metalowych. Ponieważ materiał jest ciągły, jedna rolka obsłuży oznaczenia o różnej długości, a każde z nich można później przestawić.\n\nMateriał jest zdejmowalny, a folia ma grubość 0,53 mm. Znosi ścieranie, olej, wodę, łagodne chemikalia i umiarkowane ciepło. Materiał użytkuje się od −40 do 60 °C. Pełny kolor drukuje się tuszami drukarki J7300. Układ LabelSense łączy rolkę z drukarką i ustawia etykietę automatycznie.',
  sameAs: 'https://www.brady.eu/labels/magnetic-labels-for-bradyjet-j7300-colour-label-printer-cps-4854384',
  images: [
    '/images/products/brady/jc-4250-2509.png',
    '/images/products/brady/jc-2500-2509.png',
  ],
  imageDescriptions: [
    'Rolka Brady JC-4250-2509 w niebieskiej kasecie z wysuniętą białą taśmą magnetyczną o szerokości 107,95 mm',
    'Rolka Brady JC-2500-2509 z białą taśmą magnetyczną o szerokości 63,5 mm i chipem Smart Cell na kasecie',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej JC- do druku atramentowego, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-2509' },
    { name: 'Typ materiału', value: 'poliester magnetyczny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; materiał magnetyczny, do powierzchni gładkich' },
    { name: 'Grubość', value: '0,53 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 60 °C' },
    { name: 'Odporność', value: 'ścieranie, rozpuszczalniki i chemikalia, olej, woda, umiarkowane ciepło' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '63,5 / 107,95 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '7,62 m' },
    { name: 'Liczba sztuk na rolce', value: '1 rolka' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: MAGNETYCZNE_2509.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MAGNETYCZNE_2509.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — taśma magnetyczna ${szer} mm × 7,62 m do J7300`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 7,62 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nRolka ma 7,62 m. Szerokość wynosi 63,5 albo 107,95 mm.',
  },
  faq: [
    { question: 'Dlaczego etykiety magnetyczne B-2509 nie mają kleju?', answer: 'Etykieta trzyma się dzięki magnesowi. Można ją zdjąć i przestawić bez śladów kleju i bez uszkodzenia powierzchni.' },
    { question: 'Na jakich powierzchniach trzymają się etykiety B-2509?', answer: 'Na gładkich powierzchniach metalowych, na przykład na półkach, regałach i pojemnikach. Zakres temperatur pracy to od −40 do 60 °C.' },
    { question: 'Jakie kasety z tuszem są potrzebne do taśmy B-2509?', answer: 'Potrzebne są kasety P-CMY-1 i P-K-1. Taśmę drukuje [Brady J7300](/produkt/brady-j7300) w pełnym kolorze.' },
  ],
  applications: ['Regały magazynowe, pojemniki i półki', 'Oznaczenia wielokrotnego użytku w metodzie Lean i 5S', 'Oznaczanie zapasów i kontrola inwentaryzacyjna'],
}

export const bradyJ7300Ogolne: Product[] = [
  bradyJ7300Winyl2595,
  bradyJ7300AllWeather,
  bradyJ7300Permashield,
  bradyJ7300Winyl2581,
  bradyJ7300Papier403,
  bradyJ7300Papier2550,
  bradyJ7300Magnetyczne2509,
]

export const bradyJ7300OgolneSekcje: Record<string, 'ogolne' | 'lab' | 'zawieszki'> = Object.fromEntries(
  bradyJ7300Ogolne.map((p) => [p.id, 'ogolne' as const]),
)
