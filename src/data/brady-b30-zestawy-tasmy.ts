import type { Product } from './products'
import { wspolneB30 } from './brady-b30-wspolne'

// Zestawy materiałów B30 i taśmy barwiące B30-R… do drukarek S3100, S3700 i i3300 (także starsze BBP3x i S3000).
// Zestawy: jedna karta z jednym PN. Taśmy: jedna karta na serię; kolory serii R10000 jako warianty.
// Taśmy B30 nie pasują do drukarek przenośnych M610/M710 (kasety M61 i M7-R) i odwrotnie. 14.11.2026.

const DRUKARKI_ZESTAWOW_B30 = 'S3100, S3700, i3300, i4311, i5300, BBP30, BBP31, BBP33, BBP35, BBP37'
const DRUKARKI_TASM_B30 = 'S3100, S3700, S3000, i3300, i4311, i5300, BBP30, BBP31, BBP33, BBP35, BBP37'

const specyfikacjaZestawu = (pn: string, art: string, zawartosc: string, kolory: string, zastosowanie: string, dodatkowe: { name: string; value: string }[] = []) => [
  { name: 'Part Number', value: pn },
  { name: 'Numer artykułu Brady', value: art },
  { name: 'Typ', value: 'Zestaw materiałów B30 z taśmami barwiącymi' },
  { name: 'Zawartość zestawu', value: zawartosc },
  { name: 'Kolory', value: kolory },
  { name: 'Zastosowanie', value: zastosowanie },
  ...dodatkowe,
  { name: 'Zgodne drukarki', value: DRUKARKI_ZESTAWOW_B30 },
]

const specyfikacjaTasmy = (pn: string, art: string, seria: string, kolor: string, grubosc: string, wlasciwosci: string, odpornosc: string, opcje: { typ?: string; materialy?: string; temperatura?: boolean; drukarki?: string } = {}) => [
  { name: 'Part Number', value: pn },
  { name: 'Numer artykułu Brady', value: art },
  { name: 'Typ', value: 'Kaseta z taśmą barwiącą do druku termotransferowego' },
  { name: 'Seria', value: seria },
  ...(opcje.typ ? [{ name: 'Typ materiału', value: opcje.typ }] : []),
  { name: 'Kolor', value: kolor },
  { name: 'Szerokość taśmy', value: '110 mm' },
  { name: 'Długość taśmy', value: '60 m' },
  ...(grubosc ? [{ name: 'Grubość', value: grubosc }] : []),
  ...(wlasciwosci ? [{ name: 'Właściwości', value: wlasciwosci }] : []),
  ...(odpornosc ? [{ name: 'Odporność', value: odpornosc }] : []),
  ...(opcje.temperatura === false ? [] : [{ name: 'Temperatura pracy', value: 'od 5 do 35 °C' }]),
  ...(opcje.materialy ? [{ name: 'Zalecane materiały etykiet', value: opcje.materialy }] : []),
  { name: 'Zgodne drukarki', value: opcje.drukarki ?? DRUKARKI_TASM_B30 },
]

// ---------------------------------------------------------------------------
// Zestawy materiałów
// ---------------------------------------------------------------------------

export const bradyB30FloorKit: Product = {
  ...wspolneB30,
  id: 'brady-b30-floor-kit',
  slug: 'brady-b30-floor-kit',
  name: 'Zestaw Brady B30-FLOOR-KIT — oznaczanie podłóg: dwie taśmy, laminat B-634 i taśma barwiąca do S3100 i S3700',
  seoTitle: 'Brady B30-FLOOR-KIT — zestaw do oznaczania podłóg, S3100 i S3700',
  seoDescription: 'Zestaw Brady B30-FLOOR-KIT do oznaczeń podłogowych: biała i żółta taśma, laminat B-634 i taśma R6000HF do S3100, S3700 i BBP3x. PN: B30-FLOOR-KIT, B30-R6000HF.',
  shortDescription: 'Brady B30-FLOOR-KIT to komplet do wykonania własnych oznaczeń na podłodze: dwie rolki taśmy, rolka laminatu B-634 i czarna taśma barwiąca. Napisy drukuje się na miejscu. Do drukarek Brady S3100 i S3700.',
  description: 'B30-FLOOR-KIT umożliwia samodzielne przygotowanie oznaczeń podłogowych z dowolnym napisem. W zestawie są dwie rolki taśmy do oznaczania podłóg: biała (B30C-4000-483WT-KT) i żółta (B30C-4000-483YL-KT). Treść drukuje się w drukarce serii B30, a gotowy znak przykleja się do posadzki. Znak powstaje wtedy, gdy jest potrzebny. Największy wydruk z S3100 ma 101,6 mm szerokości i 1,5 m długości.\n\nDo kompletu należy osobna rolka laminatu OVERLam B-634. Laminat jest poliestrowy, a rolka ma wymiary 101,6 mm × 30,48 m. Zabezpiecza on nadruk na podłodze. Do wykonania napisów dołączono czarną bezhalogenową taśmę barwiącą B30-R6000HF. Po jej zużyciu kasetę zamawia się osobno.\n\nZestaw ma trzy kolory materiałów: bezbarwny laminat oraz taśmy białą i żółtą. Numer artykułu Brady to 199986. Komplet pasuje do S3100 i S3700, do przemysłowych i3300, i4311 i i5300 oraz do starszych modeli BBP30–BBP37.',
  sameAs: 'https://www.brady.eu/labels/floor-marking-kit-for-bbp35-bbp37-s3xxx-i3300-printers-pid-b30-floor-kit',
  images: ['/images/products/brady/b30-floor-kit.png'],
  imageDescriptions: ['Zestaw Brady B30-FLOOR-KIT: żółta i biała taśma do oznaczania podłóg, dwie rolki laminatu i kaseta z czarną taśmą barwiącą'],
  specifications: specyfikacjaZestawu(
    'B30-FLOOR-KIT',
    '199986',
    'taśma B30C-4000-483WT-KT (biała), taśma B30C-4000-483YL-KT (żółta), laminat OVERLam B-634 101,6 mm × 30,48 m, taśma barwiąca B30-R6000HF',
    'bezbarwny, biały, żółty',
    'oznaczanie podłóg',
    [{ name: 'Laminat', value: 'poliestrowy OVERLam B-634, osobna rolka chroniąca nadruk' }],
  ),
  faq: [
    { question: 'Po co w zestawie B30-FLOOR-KIT jest laminat B-634?', answer: 'Laminat chroni nadruk na podłodze. To osobna rolka laminatu poliestrowego, 101,6 mm × 30,48 m, którą nakłada się na wydrukowany znak.' },
    { question: 'Czy w zestawie jest taśma barwiąca?', answer: 'Tak. Komplet zawiera czarną taśmę barwiącą B30-R6000HF. Kolejne kasety zamawia się osobno.' },
    { question: 'Do jakiej drukarki jest ten zestaw?', answer: 'Do [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700), a także do przemysłowych [Brady i3300](/produkt/brady-i3300), [Brady i4311](/produkt/brady-i4311) i i5300. Obsługują go również starsze BBP30, BBP31, BBP33, BBP35 i BBP37. Do drukarek przenośnych serii M6 i M7 zestaw nie pasuje.' },
  ],
  applications: ['Oznaczanie podłóg', 'Własne napisy i znaki na posadzce'],
}

export const bradyB30ClpKit: Product = {
  ...wspolneB30,
  id: 'brady-b30-clp-kit',
  slug: 'brady-b30-clp-kit',
  name: 'Zestaw Brady B30-CLP-KIT — etykiety GHS/CLP z nadrukiem i taśma barwiąca do S3100 i S3700',
  seoTitle: 'Brady B30-CLP-KIT — zestaw etykiet GHS/CLP do S3100 i S3700',
  seoDescription: 'Zestaw Brady B30-CLP-KIT: trzy rolki etykiet GHS/CLP z czerwonym nadrukiem i taśma R10000 do S3100 i S3700. PN: B30-CLP-KIT, B30-260-7569-CLP4B, B30-R10000.',
  shortDescription: 'Brady B30-CLP-KIT zawiera trzy rolki etykiet GHS/CLP z czerwonym nadrukiem fabrycznym i kasetę z taśmą barwiącą R10000. Ułatwia przygotowanie etykiet chemicznych. Do drukarek Brady S3100 i S3700.',
  description: 'Zestaw B30-CLP-KIT ułatwia dostosowanie etykiet chemikaliów do rozporządzenia CLP 1272/2008 i systemu GHS. Etykiety mają czerwony nadruk fabryczny, a ich treść uzupełnia się w drukarce serii B30 w dowolnym momencie. Drukarka S3100 ma w pamięci szablony oraz symbole GHS/CLP, więc projekt etykiety powstaje na jej ekranie. Na etykiecie GHS/CLP umieszcza się piktogramy zagrożeń, hasło ostrzegawcze, zwroty o zagrożeniach i dane dostawcy.\n\nW zestawie są trzy rolki etykiet: B30-260-7569-CLP4B, B30-261-7569-CLP4B i B30-262-7569-CLP4B. Czwartym elementem jest kaseta B30-R10000 z czarną taśmą, którą drukuje się dane substancji. Etykiety są czerwone i białe.\n\nNumer artykułu Brady to 195961. Zestaw działa z S3100, z S3700 i z przemysłową i3300, a także z i4311 i i5300. Ze starszych drukarek obsługują go modele BBP30–BBP37. Drukarki przenośne Brady mają inne materiały, więc ten komplet do nich nie pasuje.',
  sameAs: 'https://www.brady.eu/labels/pre-printed-ghs-clp-chemical-labels-kit-for-bbp3x-printers-pid-b30-clp-kit',
  images: ['/images/products/brady/b30-clp-kit.png'],
  imageDescriptions: ['Zestaw Brady B30-CLP-KIT: trzy rolki białych etykiet z czerwonymi ramkami piktogramów GHS i kaseta z czarną taśmą barwiącą'],
  specifications: specyfikacjaZestawu(
    'B30-CLP-KIT',
    '195961',
    'etykiety B30-260-7569-CLP4B, B30-261-7569-CLP4B i B30-262-7569-CLP4B (po jednej rolce), taśma barwiąca B30-R10000',
    'czerwony, biały',
    'oznaczanie substancji chemicznych (identyfikacja zagrożeń)',
    [
      { name: 'Nadruk fabryczny', value: 'etykiety GHS/CLP z czerwonym nadrukiem' },
      { name: 'Normy', value: 'rozporządzenie CLP 1272/2008, system GHS' },
    ],
  ),
  faq: [
    { question: 'Co jest w zestawie B30-CLP-KIT?', answer: 'Trzy rolki etykiet GHS/CLP z nadrukiem fabrycznym (B30-260-7569-CLP4B, B30-261-7569-CLP4B i B30-262-7569-CLP4B) oraz jedna kaseta z taśmą barwiącą B30-R10000.' },
    { question: 'Jakie przepisy dotyczą etykiet z zestawu?', answer: 'Zestaw służy do etykiet zgodnych z rozporządzeniem CLP 1272/2008 i systemem GHS. Treść etykiety, np. nazwę substancji, drukuje się w drukarce [Brady S3100](/produkt/brady-s3100) lub [Brady S3700](/produkt/brady-s3700) albo w starszym modelu serii BBP3x.' },
  ],
  applications: ['Etykiety chemikaliów GHS/CLP', 'Oznaczanie zagrożeń w laboratorium i magazynie'],
}

export const bradyB30SafetyKit: Product = {
  ...wspolneB30,
  id: 'brady-b30-safety-kit',
  slug: 'brady-b30-safety-kit',
  name: 'Zestaw Brady B30-SAFETY-KIT — znaki bezpieczeństwa i Lean: dwie taśmy i pięć taśm barwiących do S3100 i S3700',
  seoTitle: 'Brady B30-SAFETY-KIT — zestaw do znaków BHP, S3100 i S3700',
  seoDescription: 'Zestaw Brady B30-SAFETY-KIT: żółta i biała taśma B30C-4000-595 oraz pięć taśm R10000 do znaków BHP i Lean w S3100 i S3700. PN: B30-SAFETY-KIT, B30-R10000.',
  shortDescription: 'Brady B30-SAFETY-KIT to komplet do drukowania znaków bezpieczeństwa i oznaczeń Lean na miejscu. Zawiera dwie rolki taśmy i pięć kaset z taśmą barwiącą. Do drukarek Brady S3100 i S3700.',
  description: 'B30-SAFETY-KIT pozwala wykonywać trwałe znaki bezpieczeństwa i oznaczenia usprawniające pracę, czyli oznaczenia Lean, bezpośrednio w zakładzie. Zestaw składa się z dwóch rolek taśmy ciągłej oraz pięciu taśm barwiących. Kolor napisu można więc dobrać do koloru znaku, ponieważ S3100 drukuje jednym kolorem naraz. Do znaku wstawia się symbole zapisane w pamięci S3100, np. ostrzegawcze i ochrony osobistej.\n\nRolki B30C-4000-595 są żółta (-YL) i biała (-WT). Taśmy barwiące należą do serii R10000: czarna (B30-R10000), niebieska (-BL), czerwona (-RD), zielona (-GN) i żółta (-YL). Zestaw obejmuje więc materiały w wielu kolorach.\n\nNumer artykułu Brady to 195963, a zakres zastosowania to identyfikacja obiektu. Zgodne z zestawem są S3100 i S3700 oraz przemysłowe i3300, i4311 i i5300; ze starszych modele od BBP30 do BBP37.',
  sameAs: 'https://www.brady.eu/labels/general-safety-kit-for-bbp3x-printers-pid-b30-safety-kit',
  images: ['/images/products/brady/b30-safety-kit.png'],
  imageDescriptions: ['Zestaw Brady B30-SAFETY-KIT: biała i żółta rolka taśmy oraz pięć kaset z taśmą barwiącą w kolorach czarnym, czerwonym, niebieskim, żółtym i zielonym'],
  specifications: specyfikacjaZestawu(
    'B30-SAFETY-KIT',
    '195963',
    'taśma B30C-4000-595-YL (żółta), taśma B30C-4000-595-WT (biała), taśmy barwiące B30-R10000 (czarna), B30-R10000-BL, B30-R10000-RD, B30-R10000-GN, B30-R10000-YL',
    'wiele kolorów: żółty i biały (taśmy), czarny, niebieski, czerwony, zielony i żółty (nadruk)',
    'identyfikacja obiektu, znaki bezpieczeństwa i oznaczenia Lean',
  ),
  faq: [
    { question: 'Jakie kolory nadruku są w zestawie B30-SAFETY-KIT?', answer: 'Pięć: czarny (B30-R10000), niebieski, czerwony, zielony i żółty. Taśmy ciągłe w zestawie są w kolorze żółtym i białym.' },
    { question: 'Czy zestaw nadaje się do drukarek przenośnych?', answer: 'Nie. Zestaw jest do drukarek z materiałami B30, takich jak [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700). Drukarki M610 i M710 używają innych kaset.' },
  ],
  applications: ['Znaki bezpieczeństwa drukowane na miejscu', 'Oznaczenia Lean', 'Identyfikacja obiektu'],
}

export const bradyB30PmKit: Product = {
  ...wspolneB30,
  id: 'brady-b30-pm-kit',
  slug: 'brady-b30-pm-kit',
  name: 'Zestaw Brady B30-PM-KIT — oznaczanie rur: sześć kolorowych taśm i trzy taśmy barwiące do S3100 i S3700',
  seoTitle: 'Brady B30-PM-KIT — zestaw do oznaczania rur, S3100 i S3700',
  seoDescription: 'Zestaw Brady B30-PM-KIT do oznaczania rur i zaworów: sześć taśm B30C-4000-595 i taśmy R10000 do S3100 i S3700. PN: B30-PM-KIT, B30-R10000-WT, B30-R10000.',
  shortDescription: 'Brady B30-PM-KIT zawiera sześć kolorowych taśm ciągłych i trzy kasety z taśmą barwiącą do wykonania własnych oznaczeń rur i zaworów. Do drukarek Brady S3100 i S3700.',
  description: 'B30-PM-KIT służy do wykonywania oznaczeń rurociągów zgodnie z najnowszą normą oznaczania rur. Zestaw pozwala wydrukować własne znaczniki rur i zaworów w drukarce Brady, kiedy tylko są potrzebne, bez zamawiania gotowych etykiet. Drukarka S3100 ma w pamięci gotowy szablon oznaczeń rur.\n\nW komplecie jest sześć rolek taśmy B30C-4000-595 w kolorach żółtym, niebieskim, czerwonym, zielonym, brązowym i fioletowym (końcówki YL, BL, RD, GN, BR i PL). Do nadruku służą trzy kasety serii R10000: biała (B30-R10000-WT) i dwie czarne (B30-R10000). Białą taśmą drukuje się na ciemnych rolkach, a czarną na jasnych.\n\nNumer artykułu Brady to 195962, a zastosowanie to oznaczanie rur i zaworów. Zestaw obsługują S3100, S3700 oraz starsze drukarki B30 z listy w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/pipe-marking-kit-for-bbp3x-printers-pid-b30-pm-kit',
  images: ['/images/products/brady/b30-pm-kit.png'],
  imageDescriptions: ['Zestaw Brady B30-PM-KIT: sześć rolek kolorowej taśmy do oznaczania rur oraz kasety z białą i czarną taśmą barwiącą'],
  specifications: specyfikacjaZestawu(
    'B30-PM-KIT',
    '195962',
    'taśmy B30C-4000-595 w kolorach: żółtym (-YL), niebieskim (-BL), czerwonym (-RD), zielonym (-GN), brązowym (-BR) i fioletowym (-PL); taśma barwiąca B30-R10000-WT (biała) i dwie taśmy B30-R10000 (czarne)',
    'wiele kolorów: żółty, niebieski, czerwony, zielony, brązowy, fioletowy (taśmy), biały i czarny (nadruk)',
    'oznaczanie rur i zaworów',
  ),
  faq: [
    { question: 'Jakie kolory taśm są w zestawie B30-PM-KIT?', answer: 'Żółty, niebieski, czerwony, zielony, brązowy i fioletowy. Do nadruku dołączono białą taśmę barwiącą i dwie czarne.' },
    { question: 'Czy zestaw jest do wszystkich drukarek Brady?', answer: 'Nie. Pasuje do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700), [Brady i3300](/produkt/brady-i3300), [Brady i4311](/produkt/brady-i4311), i5300 oraz do starszych BBP30–BBP37. Drukarki przenośne M610 i M710 nie obsługują kaset B30.' },
  ],
  applications: ['Oznaczanie rur i zaworów', 'Znaczniki rurociągów'],
}

export const bradyB30RigidSignKit: Product = {
  ...wspolneB30,
  id: 'brady-b30-rigid-sign-kit',
  slug: 'brady-b30-rigid-sign-kit',
  name: 'Zestaw Brady B30-RIGID SIGN-KIT — panel z wkładkami do sztywnych znaków, taśma i taśmy barwiące do S3100 i S3700',
  seoTitle: 'Brady B30-RIGID SIGN-KIT — sztywne znaki, S3100 i S3700',
  seoDescription: 'Zestaw Brady B30-RIGID SIGN-KIT: panel 296 × 650 mm z wkładkami A5, taśma i taśmy R10000 do znaków w S3100 i S3700. PN: B30-RIGID SIGN-KIT, B30C-4000-7569-WT.',
  shortDescription: 'Brady B30-RIGID SIGN-KIT to panel z wkładkami do sztywnych znaków bezpieczeństwa wraz z rolką taśmy i pięcioma taśmami barwiącymi. Znaki drukuje się na miejscu. Do drukarek Brady S3100 i S3700.',
  description: 'Panel z wkładkami (suwakami) to miejsce na maksymalnie cztery znaki informacyjne w obiekcie. Takie znaki przekazują pracownikom i gościom komunikaty o bezpieczeństwie, a ich treść łatwo zmienić lub dostosować do miejsca. B30-RIGID SIGN-KIT zawiera cały zestaw do wykonania sztywnego znaku w zakładzie.\n\nW komplecie jest pusta tablica 296 × 650 mm (szer. × wys.), cztery puste wkładki A5 do suwaków, pusty suwak tytułowy oraz rolka taśmy B30C-4000-7569-WT. Taśmy barwiące to seria R10000: czarna (B30-R10000), niebieska, czerwona, żółta i zielona. Napisy i symbole wykonuje się w drukarce S3100 lub S3700.\n\nCzęści zestawu zamawia się też osobno. Numer artykułu Brady to 195964. Przeznaczenie: S3100, S3700 i starsze modele z listy w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/rigid-signs-panel-kit-for-bbp3x-printers-pid-195964',
  images: ['/images/products/brady/b30-rigid-sign-kit.png'],
  imageDescriptions: ['Zestaw Brady B30-RIGID SIGN-KIT: panel z czterema znakami bezpieczeństwa, rolka białej taśmy i pięć kaset z taśmą barwiącą'],
  specifications: specyfikacjaZestawu(
    'B30-RIGID SIGN-KIT',
    '195964',
    'taśma B30C-4000-7569-WT (biała), taśmy barwiące B30-R10000 (czarna), B30-R10000-BL, B30-R10000-RD, B30-R10000-YL, B30-R10000-GN, pusta tablica 296 × 650 mm (szer. × wys.), 4 puste wkładki A5 do suwaków, 1 pusty suwak tytułowy',
    'wiele kolorów: biały (taśma), czarny, niebieski, czerwony, żółty i zielony (nadruk)',
    'identyfikacja obiektu, sztywne znaki bezpieczeństwa',
    [{ name: 'Wymiary tablicy', value: '296 × 650 mm (szer. × wys.)' }],
  ),
  faq: [
    { question: 'Ile znaków mieści panel z zestawu B30-RIGID SIGN-KIT?', answer: 'Panel mieści do czterech znaków. W komplecie są cztery puste wkładki A5 do suwaków i jeden pusty suwak tytułowy.' },
    { question: 'Czy części zestawu można dokupić osobno?', answer: 'Tak. Części zestawu, czyli tablicę, wkładki, suwak, taśmę i kasety, zamawia się też osobno.' },
    { question: 'Do jakiej drukarki jest ten zestaw?', answer: 'Znaki drukuje się w [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) lub [Brady i3300](/produkt/brady-i3300). Zgodne są też starsze modele serii BBP3x. Drukarki przenośne M610 i M710 nie pasują.' },
  ],
  applications: ['Sztywne znaki bezpieczeństwa w obiekcie', 'Tablice z komunikatami dla pracowników i gości'],
}

// ---------------------------------------------------------------------------
// Taśmy barwiące B30
// ---------------------------------------------------------------------------

export const bradyB30R6000HF: Product = {
  ...wspolneB30,
  id: 'brady-b30-r6000hf',
  slug: 'brady-b30-r6000hf',
  name: 'Taśma barwiąca Brady B30-R6000HF seria R6000HF do S3100 i S3700',
  seoTitle: 'Brady B30-R6000HF — czarna taśma barwiąca do S3100 i S3700',
  seoDescription: 'Czarna bezhalogenowa taśma barwiąca Brady B30-R6000HF, 110 mm × 60 m, odporna na rozmazanie, do drukarek S3100, S3700 i BBP3x. PN: B30-R6000HF. Nr art. 118093.',
  shortDescription: 'Brady B30-R6000HF to kaseta z czarną bezhalogenową taśmą barwiącą, 110 mm × 60 m. Taśma wchodzi w skład wersji S3100 z materiałami F&B. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B30-R6000HF to bezhalogenowa taśma barwiąca R6000 w kolorze czarnym. Wydruk nie rozmazuje się i zachowuje czytelność przez lata, w zakładzie przemysłowym oraz na zewnątrz. Ta sama kaseta jest dołączona do drukarki S3100 w wersji F&B i do zestawu B30-FLOOR-KIT do oznaczania podłóg.\n\nRolka ma 60 m długości, 110 mm szerokości i 0,008 mm grubości. Taśmy R4300, R6200 i R6400 są cieńsze, bo mają po 0,0045 mm. Szerokość 110 mm obejmuje materiały do 101,6 mm, czyli największą szerokość druku S3100. Kolor druku jest jeden: czarny.\n\nS3100 drukuje jednym kolorem, który wynika z założonej taśmy. Drukarka rozpoznaje kasetę i pokazuje na ekranie jej kolor oraz pozostałą ilość. Nie trzeba przewlekać taśmy ani kalibrować drukarki. Pracuje w temperaturze 5–35 °C. Kasetę zakłada się w S3100, S3700 lub i3300. Przyjmują ją także i4311 i i5300 oraz starsze S3000 i modele serii BBP3x.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r6000hf',
  images: ['/images/products/brady/b30-r6000hf.png'],
  imageDescriptions: ['Kaseta Brady B30-R6000HF z czarną bezhalogenową taśmą barwiącą do drukarek serii B30'],
  specifications: specyfikacjaTasmy('B30-R6000HF', '118093', 'R6000HF (bezhalogenowa)', 'czarny', '0,008 mm', 'bezhalogenowa', ''),
  faq: [
    { question: 'Czy taśma B30-R6000HF jest w zestawie z drukarką S3100?', answer: 'Tak, w wersji z materiałami F&B. [Brady S3100](/produkt/brady-s3100) w tym wariancie ma czarną taśmę B30-R6000HF razem z dwiema taśmami ToughWash. Kolejne kasety zamawia się osobno.' },
    { question: 'Czy ta taśma pasuje do drukarek przenośnych, np. M610 lub M710?', answer: 'Nie. Taśmy B30 pasują tylko do drukarek z materiałami B30: S3100, S3700, S3000, i3300 i do starszych BBP30–BBP37. Drukarki M610 i M710 mają własne kasety.' },
  ],
  applications: ['Znaki i etykiety w zakładzie przemysłowym', 'Oznaczenia do pracy na zewnątrz'],
}

export const bradyB30R4300: Product = {
  ...wspolneB30,
  id: 'brady-b30-r4300',
  slug: 'brady-b30-r4300',
  name: 'Taśma barwiąca Brady B30-R4300 seria R4300 do S3100 i S3700',
  seoTitle: 'Brady B30-R4300 — czarna taśma barwiąca R4300 do S3100 i S3700',
  seoDescription: 'Czarna taśma barwiąca Brady B30-R4300, poliestrowa, 110 mm × 60 m, odporna na chemikalia i rozmazanie, do S3100 i S3700. PN: B30-R4300. Nr art. 118094.',
  shortDescription: 'Brady B30-R4300 to kaseta z czarną taśmą barwiącą serii R4300 na nośniku poliestrowym, 110 mm × 60 m. Nadruk jest odporny na chemikalia i rozmazanie. Do drukarek Brady S3100 i S3700.',
  description: 'Kaseta B30-R4300 zawiera czarną taśmę barwiącą serii R4300 na nośniku poliestrowym. Taśma jest bezhalogenowa. Napis wykonany tą taśmą nie rozmazuje się i wytrzymuje kontakt z chemikaliami, a w warunkach przemysłowych i na zewnątrz pozostaje czytelny przez lata.\n\nNa rolce jest 60 m pasa barwiącego o szerokości 110 mm. Warstwa barwiąca ma 0,0045 mm grubości, czyli jest cieńsza niż w R6000HF (0,008 mm). Kolor jest czarny, a numer artykułu Brady to 118094. Taśma barwiąca ma osobną kasetę, niezależną od kasety z materiałem B30, B30C lub B30EP.\n\nKasetę wkłada się bez przewlekania i bez kalibracji. Pełna lista zgodnych drukarek, od S3100 i S3700 po starsze BBP3x, jest w specyfikacji. Drukarki przenośne Brady mają własne taśmy, więc kasety B30 do nich nie pasują.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r4300',
  images: ['/images/products/brady/b30-r4300.png'],
  imageDescriptions: ['Kaseta Brady B30-R4300 z czarną taśmą barwiącą serii R4300 do drukarek serii B30'],
  specifications: specyfikacjaTasmy('B30-R4300', '118094', 'R4300', 'czarny', '0,0045 mm', 'bezhalogenowa', 'chemikalia, rozmazanie', { typ: 'poliester' }),
  faq: [
    { question: 'Z czego jest wykonana taśma R4300?', answer: 'Taśma jest poliestrowa i bezhalogenowa. Ma grubość 0,0045 mm, 110 mm szerokości i 60 m długości.' },
    { question: 'Czy B30-R4300 można założyć do Brady M610 lub M710?', answer: 'Nie. Kaseta B30 działa tylko w drukarkach z materiałami B30, takich jak [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700). W M610 i M710 stosuje się kasety z oznaczeniami M61 i M7-R.' },
  ],
  applications: ['Znaki i etykiety odporne na chemikalia', 'Oznaczenia w zakładzie i na zewnątrz'],
}

export const bradyB30R6000OC: Product = {
  ...wspolneB30,
  relatedProducts: ['brady-s3100', 'brady-s3700', 'brady-i3300'],
  id: 'brady-b30-r6000oc',
  slug: 'brady-b30-r6000oc',
  name: 'Taśma barwiąca Brady B30-R6000OC seria R6000 — czarny nadruk na ochrowym B-595 do S3100 i S3700',
  seoTitle: 'Brady B30-R6000OC — czarna taśma barwiąca do S3100 i S3700',
  seoDescription: 'Czarna taśma barwiąca Brady B30-R6000OC seria R6000 do druku na ochrowym B-595, 110 mm × 60 m, do S3100, S3700 i BBP3x. PN: B30-R6000OC. Nr art. 146045.',
  shortDescription: 'Brady B30-R6000OC to kaseta z czarną taśmą barwiącą serii R6000, 110 mm × 60 m, do druku na materiale B-595 w kolorze ochry. Do drukarek Brady S3100 i S3700.',
  description: 'Kaseta B30-R6000OC jest przeznaczona do materiału B-595 w kolorze ochry. Zawiera taśmę R6000 w kolorze czarnym, więc ciemny napis dobrze widać na jasnym, ochrowym tle. Wydruk jest odporny na ciepło, zarysowanie i rozpuszczalniki.\n\nSzerokość taśmy to 110 mm, długość 60 m, a kolor jest jeden: czarny. Numer artykułu Brady to 146045. Barwa nadruku w S3100 zależy od założonej taśmy, dlatego na ochrze drukuje się czarną kasetą z tej serii. Głowica drukarki ma rozdzielczość 300 dpi.\n\nTaśmę barwiącą dobiera się do materiału etykiety, więc do ochry B-595 przewidziano osobną kasetę. Na liście zgodnych drukarek są S3100, S3700, S3000, i3300, i5300 i BBP30–BBP37; nie ma na niej i4311. Kasety B30 nie pasują do drukarek przenośnych Brady.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-to-print-ochre-b-595-on-bbp3x-s3xxx-i3300-printers-pid-b30-r6000oc',
  images: ['/images/products/brady/b30-r6000oc.png'],
  imageDescriptions: ['Kaseta Brady B30-R6000OC z czarną taśmą barwiącą serii R6000 do druku na ochrowym materiale B-595'],
  specifications: specyfikacjaTasmy('B30-R6000OC', '146045', 'R6000', 'czarny', '', '', 'ciepło, zarysowanie, rozpuszczalniki', {
    temperatura: false,
    materialy: 'B-595 w kolorze ochry',
    drukarki: 'S3100, S3700, S3000, i3300, i5300, BBP30, BBP31, BBP33, BBP35, BBP37',
  }),
  faq: [
    { question: 'Na jakim materiale drukuje się taśmą B30-R6000OC?', answer: 'Na materiale B-595 w kolorze ochry. Czarna taśma daje kontrast z jasnym, ochrowym tłem etykiety lub taśmy ciągłej.' },
    { question: 'Czy taśma B30-R6000OC pasuje do drukarek przenośnych?', answer: 'Nie. To taśma serii B30 do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i starszych drukarek z materiałami B30. Do M610 i M710 służą inne kasety.' },
  ],
  applications: ['Druk na materiale B-595 w kolorze ochry', 'Znaki i oznaczenia odporne na ciepło i rozpuszczalniki'],
}

export const bradyB30R4400WT: Product = {
  ...wspolneB30,
  id: 'brady-b30-r4400-wt',
  slug: 'brady-b30-r4400-wt',
  name: 'Taśma barwiąca Brady B30-R4400-WT seria R4400 do S3100 i S3700',
  seoTitle: 'Brady B30-R4400-WT — biała taśma barwiąca R4400 do S3100 i S3700',
  seoDescription: 'Biała taśma barwiąca Brady B30-R4400-WT, 110 mm × 60 m, do jasnych napisów na ciemnym tle w drukarkach S3100 i S3700. PN: B30-R4400-WT. Nr art. 118097.',
  shortDescription: 'Brady B30-R4400-WT to kaseta z białą taśmą barwiącą serii R4400, 110 mm × 60 m. Biały nadruk daje kontrast na ciemnym tle. Do drukarek Brady S3100 i S3700.',
  description: 'W kasecie B30-R4400-WT jest biała taśma barwiąca serii R4400. Drukuje się nią jasne napisy, które wyraźnie odcinają się od ciemnego tła etykiety lub taśmy ciągłej. Taśma jest odporna na rozmazanie. Jasny wydruk wytrzymuje wiele lat pracy w halach i na zewnątrz.\n\nWymiary taśmy: szerokość 110 mm, długość 60 m, grubość 0,0045 mm. Końcówka -WT w numerze PN oznacza kolor biały. Numer artykułu Brady to 118097. Biały napis w S3100 powstaje tylko z białej taśmy, bo drukarka nie miesza kolorów.\n\nKaseta zmienia się szybko: nie ma przewlekania taśmy ani kalibracji. Temperatura pracy: 5–35 °C. Kaseta R4400 współpracuje z S3100 i S3700, z modelami BBP30–BBP37 i S3000 oraz z i3300, i4311 i i5300. Biała taśma do drukarek M610 i M710 ma inną kasetę, więc ta kaseta do nich nie pasuje.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/white-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r4400-wt',
  images: ['/images/products/brady/b30-r4400-wt.png'],
  imageDescriptions: ['Kaseta Brady B30-R4400-WT z białą taśmą barwiącą serii R4400 do drukarek serii B30'],
  specifications: specyfikacjaTasmy('B30-R4400-WT', '118097', 'R4400', 'biały', '0,0045 mm', '', ''),
  faq: [
    { question: 'Kiedy stosuje się białą taśmę barwiącą B30-R4400-WT?', answer: 'Gdy napis ma być jasny na ciemnym tle etykiety lub taśmy ciągłej. Taśma pasuje do [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) i do starszych drukarek B30.' },
    { question: 'Czy białą taśmę B30 można zastosować w Brady M610 lub M710?', answer: 'Nie. Taśmy B30 działają tylko w drukarkach z materiałami B30. Drukarki przenośne M610 i M710 mają osobne kasety z białą taśmą.' },
  ],
  applications: ['Biały napis na ciemnych etykietach', 'Znaki o odwróconym kontraście'],
}

export const bradyB30R6600: Product = {
  ...wspolneB30,
  id: 'brady-b30-r6600',
  slug: 'brady-b30-r6600',
  name: 'Taśma barwiąca Brady B30-R6600 seria R6600 do S3100 i S3700',
  seoTitle: 'Brady B30-R6600 — czarna taśma R6600 do koszulek, S3100 i S3700',
  seoDescription: 'Czarna taśma barwiąca Brady B30-R6600 do koszulek B-342, B-7641, B-7642 i B-7646, 110 mm × 60 m, do S3100 i S3700. PN: B30-R6600. Nr art. 118095.',
  shortDescription: 'Brady B30-R6600 to kaseta z czarną taśmą barwiącą serii R6600, 110 mm × 60 m, do druku na koszulkach termokurczliwych Brady. Do drukarek Brady S3100 i S3700.',
  description: 'Seria R6600 to żywiczna taśma termotransferowa o dużej odporności na rozpuszczalniki i tarcie. Jest dobrana do koszulek termokurczliwych Brady, w tym materiałów B-342 i B-7646 oraz B-7641 i B-7642. Taśma nie zawiera halogenów, a nadruk jest odporny także na olej napędowy.\n\nKaseta B30-R6600 mieści czarną taśmę o szerokości 110 mm i długości 60 m. Taśma ma 0,0045 mm grubości. Numer artykułu Brady: 118095. Koszulki i taśma barwiąca są w osobnych kasetach. S3100 drukuje termotransferowo, więc barwnik z taśmy przechodzi na koszulkę.\n\nDo wymiany nie jest potrzebna kalibracja. Przeznaczono ją dla S3100 i S3700, ale zadziała także w S3000, i3300, i4311, i5300 oraz BBP30–BBP37. W drukarkach M610 i M710 koszulki drukuje się taśmami z oznaczeniami M61 i M7-R.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r6600',
  images: ['/images/products/brady/b30-r6600.png'],
  imageDescriptions: ['Kaseta Brady B30-R6600 z czarną taśmą barwiącą serii R6600 do koszulek termokurczliwych'],
  specifications: specyfikacjaTasmy('B30-R6600', '118095', 'R6600', 'czarny', '0,0045 mm', 'bezhalogenowa, formuła żywiczna', 'olej napędowy, rozpuszczalniki, tarcie', {
    materialy: 'koszulki termokurczliwe B-342, B-7641, B-7642 i B-7646',
  }),
  faq: [
    { question: 'Jakie koszulki można drukować taśmą B30-R6600?', answer: 'Koszulki termokurczliwe Brady, m.in. z materiałów B-342, B-7641, B-7642 i B-7646. Taśma jest odporna na rozpuszczalniki i tarcie.' },
    { question: 'Czy taśma R6600 w kasecie B30 pasuje do drukarek M610 i M710?', answer: 'Nie. Kaseta B30 działa w [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700) oraz w starszych drukarkach z materiałami B30. Drukarki przenośne mają własne kasety.' },
  ],
  applications: ['Koszulki termokurczliwe na przewody', 'Oznaczenia odporne na olej napędowy'],
}

export const bradyB30R6200: Product = {
  ...wspolneB30,
  id: 'brady-b30-r6200',
  slug: 'brady-b30-r6200',
  name: 'Taśma barwiąca Brady B30-R6200 seria R6200 do S3100 i S3700',
  seoTitle: 'Brady B30-R6200 — czarna taśma barwiąca R6200 do S3100 i S3700',
  seoDescription: 'Czarna taśma barwiąca Brady B30-R6200, 110 mm × 60 m, odporna na chemikalia, ciepło, zarysowanie i rozmazanie, do S3100 i S3700. PN: B30-R6200. Nr art. 143119.',
  shortDescription: 'Brady B30-R6200 to kaseta z czarną bezhalogenową taśmą barwiącą serii R6200, 110 mm × 60 m. Nadruk znosi ciepło, chemikalia i zarysowanie. Do drukarek Brady S3100 i S3700.',
  description: 'Taśma R6200 drukuje na czarno i ma pięć cech ochronnych: odporność na chemikalia, wysoką temperaturę, zarysowanie i rozmazanie oraz brak halogenów. Dzięki temu napis zostaje czytelny na znakach narażonych na ciepło i zarysowanie.\n\nNumer artykułu Brady to 143119. Taśma jest czarna i ma wymiary 110 mm × 60 m, a jej grubość to 0,0045 mm. Ponieważ drukarka S3100 drukuje jednym kolorem, kaseta B30-R6200 daje zawsze czarny napis. Głowica S3100 drukuje z prędkością 76 mm/s.\n\nB30-R6200 stosuje się w drukarkach do materiałów B30. Kasetę wkłada się do otwartej drukarki. Kasetę przyjmują S3100, S3700 i starszy model S3000. Zgodne są też i3300, i4311, i5300 oraz modele BBP30–BBP37. Do drukarek przenośnych Brady nie jest przeznaczona.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r6200',
  images: ['/images/products/brady/b30-r6200.png'],
  imageDescriptions: ['Kaseta Brady B30-R6200 z czarną bezhalogenową taśmą barwiącą serii R6200'],
  specifications: specyfikacjaTasmy('B30-R6200', '143119', 'R6200', 'czarny', '0,0045 mm', 'bezhalogenowa', 'chemikalia, wysoka temperatura, zarysowanie, rozmazanie'),
  faq: [
    { question: 'Na co jest odporny nadruk z taśmy B30-R6200?', answer: 'Na chemikalia, wysoką temperaturę, zarysowanie i rozmazanie. Taśma nie zawiera halogenów.' },
    { question: 'Czy B30-R6200 można stosować w drukarkach przenośnych Brady?', answer: 'Nie. Taśmy B30 są do drukarek z materiałami B30, np. [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700). Modele M610 i M710 przyjmują inne kasety.' },
  ],
  applications: ['Znaki odporne na ciepło i chemikalia', 'Etykiety narażone na zarysowanie'],
}

export const bradyB30R6300: Product = {
  ...wspolneB30,
  relatedProducts: ['brady-i3300', 'brady-i4311', 'brady-s3700'],
  id: 'brady-b30-r6300',
  slug: 'brady-b30-r6300',
  name: 'Taśma barwiąca Brady B30-R6300 seria R6300 do i3300 i S3700',
  seoTitle: 'Brady B30-R6300 — bezhalogenowa taśma barwiąca do i3300 i S3700',
  seoDescription: 'Czarna bezhalogenowa taśma barwiąca Brady B30-R6300, 109,98 mm × 60,96 m, odporna na chemikalia, mycie i ciepło, do i3300 i S3700. PN: B30-R6300.',
  shortDescription: 'Brady B30-R6300 to kaseta z czarną, bezhalogenową taśmą żywiczną serii R6300 do przemysłowej i3300 i do S3700. Nadruk znosi chemikalia, rozpuszczalniki, mycie i wysoką temperaturę.',
  description: 'B30-R6300 zawiera czarną, żywiczną taśmę barwiącą bez halogenów, zamkniętą w kasecie serii B30. Nadruk z tej taśmy wytrzymuje kontakt z chemikaliami, płynami i rozpuszczalnikami, czyszczenie, mycie wodą oraz wysoką temperaturę. Brady zaleca ją między innymi do etykiet z poliimidu na płytki drukowane i do części materiałów B33.\n\nRolka ma 60,96 m długości i 109,98 mm szerokości, a sama taśma 0,0045 mm grubości. Kasetę z układem Smart Cell zakłada się w drukarce jednym ruchem, bez przewlekania i kalibracji. Drukarka odczytuje jej numer i pokazuje, ile taśmy zostało.\n\nTaśmę przyjmują przemysłowe drukarki i3300, i4311 i i5300, a także S3700 oraz starsza BBP33. Drukarka S3100 nie jest na liście zgodnych urządzeń. Zakres temperatury przechowywania i pracy kasety to 5–35 °C.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/b30-series-r6300-halogen-free-printer-ribbon-black-pid-b30-r6300',
  images: ['/images/products/brady/b30-r6300.png'],
  imageDescriptions: ['Kaseta z czarną taśmą barwiącą Brady serii B30 w przezroczystej obudowie'],
  specifications: specyfikacjaTasmy('B30-R6300', '152848', 'R6300', 'czarny', '0,0045 mm', 'bezhalogenowa, formuła żywiczna', 'chemikalia, płyny, rozpuszczalniki, czyszczenie, mycie, wysoka temperatura', { drukarki: 'i3300, i4311, i5300, S3700, BBP33' }).map((s) => s.name === 'Szerokość taśmy' ? { name: s.name, value: '109,98 mm' } : s.name === 'Długość taśmy' ? { name: s.name, value: '60,96 m' } : s),
  faq: [
    { question: 'Do jakich etykiet przeznaczona jest taśma B30-R6300?', answer: 'Do etykiet, które mają znosić chemikalia, mycie i wysoką temperaturę, np. z poliimidu na płytki drukowane. Brady wskazuje ją jako zalecaną dla części materiałów B33 do [Brady i3300](/produkt/brady-i3300).' },
    { question: 'Czy B30-R6300 pasuje do Brady S3100?', answer: 'Nie, S3100 nie ma jej na liście zgodnych drukarek. Kasetę przyjmują i3300, i4311, i5300, [Brady S3700](/produkt/brady-s3700) i BBP33.' },
  ],
  applications: ['Etykiety z poliimidu na płytki drukowane', 'Oznaczenia narażone na chemikalia i mycie'],
}

export const bradyB30R6400: Product = {
  ...wspolneB30,
  id: 'brady-b30-r6400',
  slug: 'brady-b30-r6400',
  name: 'Taśma barwiąca Brady B30-R6400 seria R6400 do S3100 i S3700',
  seoTitle: 'Brady B30-R6400 — czarna taśma barwiąca R6400 do S3100 i S3700',
  seoDescription: 'Czarna taśma barwiąca Brady B30-R6400, 110 mm × 60 m, odporna na ścieranie i chemikalia, bez halogenów, do S3100 i S3700. PN: B30-R6400. Nr art. 143118.',
  shortDescription: 'Brady B30-R6400 to kaseta z czarną bezhalogenową taśmą barwiącą serii R6400, 110 mm × 60 m, o wysokiej odporności na ścieranie. Do drukarek Brady S3100 i S3700.',
  description: 'Seria R6400 wyróżnia się odpornością nadruku na ścieranie. Taśma jest odporna także na chemikalia i nie zawiera halogenów. Napisy wykonane taśmą B30-R6400 nie ścierają się podczas codziennej pracy, co ma znaczenie na znakach narażonych na tarcie.\n\nW kasecie jest czarna taśma długości 60 m i szerokości 110 mm. Grubość taśmy: 0,0045 mm. Po założeniu kasety ekran S3100 pokazuje jej kolor i ilość taśmy, która została. Numer artykułu Brady: 143118.\n\nKasetę B30-R6400 wymienia się bez kalibracji i bez przewlekania. Taśma jest przeznaczona do drukarek S3100 i S3700. Pasuje również do S3000, i3300, i4311, i5300 oraz do całej serii BBP3x, czyli BBP30, BBP31, BBP33, BBP35 i BBP37.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r6400',
  images: ['/images/products/brady/b30-r6400.png'],
  imageDescriptions: ['Kaseta Brady B30-R6400 z czarną bezhalogenową taśmą barwiącą serii R6400'],
  specifications: specyfikacjaTasmy('B30-R6400', '143118', 'R6400', 'czarny', '0,0045 mm', 'bezhalogenowa', 'ścieranie, chemikalia'),
  faq: [
    { question: 'Czym wyróżnia się taśma B30-R6400?', answer: 'Odpornością nadruku na ścieranie. Taśma jest też odporna na chemikalia i nie zawiera halogenów.' },
    { question: 'Czy taśma B30-R6400 działa w drukarkach M610 i M710?', answer: 'Nie. Pasuje tylko do drukarek z materiałami B30: [Brady S3100](/produkt/brady-s3100), [Brady S3700](/produkt/brady-s3700), [Brady i3300](/produkt/brady-i3300) oraz do starszych S3000 i BBP3x. Modele M610 i M710 mają osobne kasety.' },
  ],
  applications: ['Znaki narażone na tarcie', 'Oznaczenia odporne na ścieranie'],
}

export const bradyB30R6700WT: Product = {
  ...wspolneB30,
  relatedProducts: ['brady-s3100', 'brady-i3300', 'brady-i4311'],
  id: 'brady-b30-r6700-wt',
  slug: 'brady-b30-r6700-wt',
  name: 'Taśma barwiąca Brady B30-R6700-WT seria R6700 do S3100',
  seoTitle: 'Brady B30-R6700-WT — biała taśma R6700 do koszulek, S3100',
  seoDescription: 'Biała taśma barwiąca Brady B30-R6700-WT seria R6700 do czarnych materiałów PermaSleeve, 110 mm × 60 m, do S3100 i BBP3x. PN: B30-R6700-WT. Nr art. 133357.',
  shortDescription: 'Brady B30-R6700-WT to kaseta z białą taśmą barwiącą serii R6700, 110 mm × 60 m, do druku na czarnych materiałach PermaSleeve. Do drukarki Brady S3100.',
  description: 'Biała taśma barwiąca R6700 drukuje na czarnych materiałach PermaSleeve. Ma wysoką odporność na zarysowanie, rozmazanie i agresywne chemikalia, a nie zawiera halogenów. Jasny nadruk na ciemnych koszulkach jest dobrze widoczny z daleka.\n\nKaseta B30-R6700-WT (artykuł Brady 133357) zawiera biały pas barwiący (110 mm × 60 m), a grubość taśmy to 0,0045 mm. Taśma barwiąca jest osobną kasetą, którą zamawia się obok kasety z materiałem. Na czarnym tle S3100 daje jasny napis tylko z taśmy białej.\n\nMontaż w drukarce nie wymaga kalibracji. Dopuszczalna temperatura pracy to 5–35 °C. Kaseta współpracuje z S3100, S3000, i3300, i4311, i5300 oraz z modelami BBP30–BBP37. Lista zgodnych drukarek nie obejmuje S3700. Drukarki przenośne Brady mają inne kasety.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/white-heavy-duty-print-ribbon-for-bbp3x-s3xxx-i3300-printers-pid-b30-r6700-wt',
  images: ['/images/products/brady/b30-r6700-wt.png'],
  imageDescriptions: ['Kaseta Brady B30-R6700-WT z białą taśmą barwiącą serii R6700 do czarnych koszulek PermaSleeve'],
  specifications: specyfikacjaTasmy('B30-R6700-WT', '133357', 'R6700', 'biały', '0,0045 mm', 'bezhalogenowa', 'chemikalia, zarysowanie, rozmazanie', {
    materialy: 'czarne materiały PermaSleeve',
    drukarki: 'BBP30, BBP31, BBP33, BBP35, BBP37, i3300, i4311, i5300, S3000, S3100',
  }),
  faq: [
    { question: 'Na jakich materiałach drukuje się białą taśmą B30-R6700-WT?', answer: 'Na czarnych materiałach PermaSleeve. Biały nadruk jest odporny na zarysowanie, rozmazanie i agresywne chemikalia.' },
    { question: 'Czy taśma B30-R6700-WT pasuje do Brady M710?', answer: 'Nie. To kaseta B30 do [Brady S3100](/produkt/brady-s3100) i [Brady i3300](/produkt/brady-i3300) oraz do [Brady i4311](/produkt/brady-i4311) i i5300, a ze starszych do S3000 i BBP30–BBP37. Drukarki M610 i M710 używają osobnych kaset.' },
  ],
  applications: ['Biały nadruk na czarnych koszulkach PermaSleeve', 'Oznaczenia odporne na chemikalia'],
}

export const bradyB30R10000: Product = {
  ...wspolneB30,
  id: 'brady-b30-r10000',
  slug: 'brady-b30-r10000',
  name: 'Taśma barwiąca Brady B30-R10000 seria R10000 w ośmiu kolorach do S3100 i S3700',
  seoTitle: 'Brady B30-R10000 — kolorowe taśmy barwiące do S3100 i S3700',
  seoDescription: 'Taśmy barwiące Brady seria R10000 do S3100 i S3700 w ośmiu kolorach, 110 mm × 60 m: znaki i oznaczenia rur. PN: B30-R10000, B30-R10000-WT, B30-R10000-RD.',
  shortDescription: 'Brady B30-R10000 to kasety z taśmą barwiącą serii R10000 w ośmiu kolorach, 110 mm × 60 m. Kolor nadruku dobiera się do materiału etykiety. Do drukarek Brady S3100 i S3700.',
  description: 'Seria R10000 obejmuje taśmy barwiące o ośmiu kolorach nadruku: czarnym, białym, czerwonym, żółtym, zielonym, niebieskim, pomarańczowym i purpurowym (magenta). Drukarka S3100 drukuje jednym kolorem naraz, więc barwę napisu wyznacza założona kaseta. Barwę kasety wybiera się tak, aby napis kontrastował z materiałem.\n\nKażda kaseta zawiera 60 m taśmy o szerokości 110 mm i grubości 0,0057 mm. Wersja purpurowa (B30-R10000-MA) jest odporna na zarysowanie i rozpuszczalniki. Czarne i kolorowe kasety R10000 są częścią zestawów B30-CLP-KIT, B30-SAFETY-KIT, B30-PM-KIT i B30-RIGID SIGN-KIT.\n\nTaśmy tej serii pasują do S3100 i S3700 oraz do starszych drukarek z materiałami B30, wymienionych w specyfikacji. Drukarki przenośne M610 i M710 używają osobnych kaset M61 i M7-R. Numery artykułów Brady dla każdego koloru są w specyfikacji.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/b30-series-r10000-printer-ribbon-cps-3089489',
  images: ['/images/products/brady/b30-r10000.png', '/images/products/brady/b30-r10000-wt.png', '/images/products/brady/b30-r10000-bl.png'],
  imageDescriptions: [
    'Kaseta Brady B30-R10000 z czarną taśmą barwiącą serii R10000 do drukarek serii B30',
    'Kaseta Brady B30-R10000-WT z białą taśmą barwiącą serii R10000',
    'Kaseta Brady B30-R10000-BL z niebieską taśmą barwiącą serii R10000',
  ],
  specifications: [
    { name: 'Typ', value: 'Kasety z taśmą barwiącą do druku termotransferowego' },
    { name: 'Seria', value: 'R10000' },
    { name: 'Kolory', value: 'czarny, biały, czerwony, żółty, zielony, niebieski, pomarańczowy, purpurowy (magenta)' },
    { name: 'Szerokość taśmy', value: '110 mm' },
    { name: 'Długość taśmy', value: '60 m' },
    { name: 'Grubość', value: '0,0057 mm' },
    { name: 'Odporność', value: 'wersja purpurowa: zarysowanie, rozpuszczalniki' },
    { name: 'Zgodne drukarki', value: DRUKARKI_TASM_B30 },
    { name: 'Numery artykułów Brady', value: 'B30-R10000: 118084; B30-R10000-WT: 118090; B30-R10000-RD: 118089; B30-R10000-YL: 118091; B30-R10000-GN: 118086; B30-R10000-BL: 118085; B30-R10000-OR: 118088; B30-R10000-MA: 118087' },
  ],
  variants: [
    { partNumber: 'B30-R10000', name: 'Brady B30-R10000 — czarna taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Czarny' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-WT', name: 'Brady B30-R10000-WT — biała taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Biały' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-RD', name: 'Brady B30-R10000-RD — czerwona taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Czerwony' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-YL', name: 'Brady B30-R10000-YL — żółta taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Żółty' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-GN', name: 'Brady B30-R10000-GN — zielona taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Zielony' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-BL', name: 'Brady B30-R10000-BL — niebieska taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Niebieski' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-OR', name: 'Brady B30-R10000-OR — pomarańczowa taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Pomarańczowy' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-MA', name: 'Brady B30-R10000-MA — purpurowa taśma barwiąca 110 mm × 60 m', attributes: { Kolor: 'Purpurowy (magenta)' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Kolor: 'Kolor nadruku z kasety R10000.\n\nCzarny i biały nadruk dobiera się do jasnego albo ciemnego materiału. Czerwony, żółty, zielony i niebieski występują w zestawach znaków bezpieczeństwa i oznaczeń rur. Dostępne są też pomarańczowy i purpurowy.',
  },
  faq: [
    { question: 'Jakie kolory ma taśma R10000 do Brady S3100?', answer: 'Osiem: czarny, biały, czerwony, żółty, zielony, niebieski, pomarańczowy i purpurowy (magenta). Każda kaseta ma 60 m taśmy o szerokości 110 mm. Taśmy pasują do drukarek [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700).' },
    { question: 'W których zestawach B30 są taśmy R10000?', answer: 'W B30-CLP-KIT (czarna), B30-SAFETY-KIT (czarna, niebieska, czerwona, zielona i żółta), B30-PM-KIT (biała i dwie czarne) oraz B30-RIGID SIGN-KIT (czarna, niebieska, czerwona, żółta i zielona).' },
    { question: 'Czy taśmy R10000 w kasetach B30 pasują do drukarek M610 i M710?', answer: 'Nie. Taśmy B30 są tylko do drukarek z materiałami B30, takich jak S3100, S3700, S3000, i3300 i starsze BBP3x. Drukarki przenośne mają osobne kasety.' },
  ],
  applications: ['Kolorowe znaki bezpieczeństwa', 'Oznaczenia rur i zaworów', 'Etykiety GHS/CLP'],
}

const bradyB30Zestawy: Product[] = [bradyB30FloorKit, bradyB30ClpKit, bradyB30SafetyKit, bradyB30PmKit, bradyB30RigidSignKit]

const bradyB30Tasmy: Product[] = [
  bradyB30R10000,
  bradyB30R6000HF,
  bradyB30R4300,
  bradyB30R6000OC,
  bradyB30R4400WT,
  bradyB30R6600,
  bradyB30R6200,
  bradyB30R6300,
  bradyB30R6400,
  bradyB30R6700WT,
]

export const bradyB30ZestawyTasmy: Product[] = [...bradyB30Zestawy, ...bradyB30Tasmy]

export const bradyB30ZestawyTasmySekcje: Record<string, 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'> = {
  ...Object.fromEntries(bradyB30Zestawy.map((p) => [p.id, 'zestawy' as const])),
  ...Object.fromEntries(bradyB30Tasmy.map((p) => [p.id, 'tasmy' as const])),
}
