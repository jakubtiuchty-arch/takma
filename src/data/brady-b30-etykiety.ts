import type { Product } from './products'
import { wspolneB30 } from './brady-b30-wspolne'

// Etykiety wykrawane, znaki, etykiety wypukłe B30EP i zawieszki Brady B30 do drukarki S3100 (także starsze BBP3x, S3000, S3700, i3300, i4311, i5300).
// Jedna karta na rodzinę materiału z brady.eu; rozmiary i wersje nadruku jako warianty. 14.11.2026.

const DRUKARKI_B30 = 'S3100, S3000, S3700, i3300, i4311, i5300; starsze BBP30, BBP31, BBP33, BBP35, BBP37'

const KOLORY: Record<string, string> = {
  WT: 'Biały',
  YL: 'Żółty',
  RD: 'Czerwony',
  GN: 'Zielony',
  SL: 'Srebrny',
  BK: 'Czarny',
}

// ---------------------------------------------------------------------------
// GHS/CLP z fabrycznym nadrukiem rombów — winyl B-7569 (cps-3069346)
// ---------------------------------------------------------------------------

// [PN, nr art.]
const GHS_CLP: [string, string][] = [
  ['B30-18-7569-CLP4C', '149209'], ['B30-260-7569-CLP1', '121633'], ['B30-260-7569-CLP2', '121634'], ['B30-260-7569-CLP3A', '121635'],
  ['B30-260-7569-CLP3B', '121636'], ['B30-260-7569-CLP4A', '121637'], ['B30-260-7569-CLP4B', '121638'], ['B30-261-7569-CLP1', '121639'],
  ['B30-261-7569-CLP2', '121640'], ['B30-261-7569-CLP3A', '121641'], ['B30-261-7569-CLP3B', '121642'], ['B30-261-7569-CLP4A', '121643'],
  ['B30-261-7569-CLP4B', '121644'], ['B30-262-7569-CLP1', '121645'], ['B30-262-7569-CLP2', '121646'], ['B30-262-7569-CLP3A', '121647'],
  ['B30-262-7569-CLP3B', '121648'], ['B30-262-7569-CLP4A', '121649'], ['B30-262-7569-CLP4B', '121650'],
]

// Człon PN → [wymiar etykiety, sztuk na rolce]
const GHS_CLP_ROZMIAR: Record<string, [string, string]> = {
  '18': ['76,2 × 25,4 mm', '1000'],
  '260': ['84,99 × 55 mm', '340'],
  '261': ['110 × 75 mm', '270'],
  '262': ['154,99 × 104,98 mm', '200'],
}

const GHS_CLP_ROMBY: Record<string, string> = {
  CLP1: '1 romb',
  CLP2: '2 romby',
  CLP3A: '3 romby, układ A',
  CLP3B: '3 romby, układ B',
  CLP4A: '4 romby, układ A',
  CLP4B: '4 romby, układ B',
  CLP4C: '4 romby, układ C',
}

export const bradyB30GhsClp: Product = {
  ...wspolneB30,
  id: 'brady-b30-260-7569-clp1',
  slug: 'brady-b30-260-7569-clp1',
  name: 'Etykiety winylowe GHS/CLP z nadrukowanymi rombami Brady B30-260-7569-CLP1 — materiał B30 do S3100',
  seoTitle: 'Brady B30-260-7569-CLP1 — etykiety GHS/CLP do S3100',
  seoDescription: 'Etykiety winylowe Brady B-7569 do S3100 z czerwonymi rombami pod piktogramy GHS/CLP, 19 wersji. PN: B30-260-7569-CLP1, B30-261-7569-CLP4B, B30-262-7569-CLP3A.',
  shortDescription: 'Brady B30-260-7569-CLP1 i 18 innych wersji błyszczących etykiet winylowych z czerwonymi rombami na piktogramy GHS/CLP, w czterech rozmiarach. Do drukarki Brady S3100.',
  description: 'Etykiety B-7569 wykonano z trwałej folii winylowej z błyszczącą powierzchnią i trwałym klejem akrylowym. Na białym tle jest fabrycznie nadrukowany czerwony obrys rombów. Romby tworzą ramki na piktogramy zagrożeń GHS/CLP. Pozostałe pole etykiety zapełnia się w drukarce. Etykiety oznaczają pojemniki z substancjami niebezpiecznymi, instalacje elektryczne i obiekty w zakładzie.\n\nRolki mają cztery rozmiary. Najmniejszy to 76,2 × 25,4 mm (1000 szt.). Kolejne mają 84,99 × 55 mm (340 szt.) i 110 × 75 mm (270 szt.). Największy to 154,99 × 104,98 mm (200 szt.). Wersje różnią się liczbą rombów, od jednego do czterech. Litera w numerze oznacza ich ułożenie na etykiecie. Najmniejszy rozmiar jest dostępny tylko z czterema rombami w układzie C.\n\nFolia znosi wilgoć, chemikalia i częste dotykanie. Etykiety nakleja się od 10 °C, a naklejone wytrzymują temperatury od −20 do 75 °C. Na zewnątrz etykieta wytrzymuje średnio do 3 lat. Materiał spełnia wymagania BS 5609:1986, sekcje 2 i 3. Wydruk wymaga osobno zakupionej taśmy barwiącej B30-R10000. Kaseta pasuje do S3100. Zgodne są też starsze drukarki z rodziny BBP3x, a pełną listę podano w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-pre-printed-ghs-clp-chemical-labels-cps-3069346',
  images: [
    '/images/products/brady/b30-260-7569-clp3a.png',
    '/images/products/brady/b30-261-7569-clp4b.png',
    '/images/products/brady/b30-18-7569-clp4c.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-260-7569-CLP3A z rolką białych etykiet o wymiarach 84,99 × 55 mm i trzema czerwonymi rombami na każdej',
    'Kaseta Brady B30-261-7569-CLP4B z rolką etykiet 110 × 75 mm i czterema czerwonymi rombami ułożonymi w kwadrat',
    'Kaseta Brady B30-18-7569-CLP4C z rolką wąskich etykiet 76,2 × 25,4 mm z czterema czerwonymi rombami na lewym końcu',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi na rolce, z fabrycznym nadrukiem rombów, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7569' },
    { name: 'Typ materiału', value: 'winyl' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −20 do 75 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'wewnątrz i na zewnątrz (średnio do 3 lat)' },
    { name: 'Odporność', value: 'wilgoć, chemikalia, obsługa' },
    { name: 'Kolor', value: 'czerwony nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '76,2 × 25,4 mm; 84,99 × 55 mm; 110 × 75 mm; 154,99 × 104,98 mm' },
    { name: 'Liczba sztuk na rolce', value: '1000 (76,2 × 25,4 mm); 340 (84,99 × 55 mm); 270 (110 × 75 mm); 200 (154,99 × 104,98 mm)' },
    { name: 'Nadruk fabryczny', value: 'od 1 do 4 czerwonych rombów na piktogramy GHS/CLP; układ A, B albo C' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: GHS_CLP.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: GHS_CLP.map(([pn, art]) => {
    const [, rozm, kod] = pn.match(/^B30-(\d+)-7569-(CLP\w+)$/) as RegExpMatchArray
    const [wymiar, szt] = GHS_CLP_ROZMIAR[rozm]
    return {
      partNumber: pn,
      name: `Brady ${pn} — etykiety GHS/CLP ${wymiar}, ${GHS_CLP_ROMBY[kod]}, ${szt} szt. na rolce (art. ${art})`,
      attributes: {
        Rozmiar: `${wymiar}, ${szt} szt.`,
        Romby: GHS_CLP_ROMBY[kod],
      },
      availability: 'unavailable' as const,
    }
  }),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba etykiet na rolce.\n\nNajwiększa etykieta ma 154,99 × 104,98 mm (200 szt.), a najmniejsza 76,2 × 25,4 mm (1000 szt.).',
    Romby: 'Liczba i ułożenie czerwonych rombów nadrukowanych fabrycznie. Romby to ramki na piktogramy zagrożeń GHS/CLP.\n\nLitera A, B albo C po liczbie oznacza ułożenie rombów, np. w rzędzie albo w kwadracie.',
  },
  faq: [
    { question: 'Co oznacza końcówka CLP1–CLP4C w numerze etykiety?', answer: 'Cyfra podaje liczbę czerwonych rombów nadrukowanych na etykiecie, od jednego do czterech. Litera A, B albo C oznacza ich ułożenie. Wersję CLP4C ma tylko najmniejsza etykieta 76,2 × 25,4 mm.' },
    { question: 'Czy do etykiet GHS/CLP potrzebna jest osobna taśma barwiąca?', answer: 'Tak. Kaseta zawiera same etykiety. Do wydruku zaleca się taśmę barwiącą B30-R10000 w osobnej kasecie.' },
    { question: 'Do jakiej drukarki pasują etykiety B-7569?', answer: 'Do drukarki [Brady S3100](/produkt/brady-s3100) oraz starszych modeli S3000, S3700, i3300, i4311, i5300, BBP30, BBP31, BBP33, BBP35 i BBP37.' },
  ],
  applications: ['Oznaczanie substancji i mieszanin niebezpiecznych zgodnie z GHS/CLP', 'Identyfikacja zagrożeń na pojemnikach i opakowaniach', 'Oznaczenia w zakładzie i na instalacjach elektrycznych'],
}

// ---------------------------------------------------------------------------
// Wypukłe etykiety prostokątne B30EP — poliester B-593 (cps-3069360)
// ---------------------------------------------------------------------------

// [PN, nr art.]; wymiar i liczba sztuk według członu PN B30EP-<człon>-593-<kolor>
const WYPUKLE_593: [string, string][] = [
  ['B30EP-171-593-WT', '118015'], ['B30EP-171-593-YL', '118017'], ['B30EP-171-593-RD', '118016'], ['B30EP-171-593-GN', '118018'], ['B30EP-171-593-SL', '118019'], ['B30EP-171-593-BK', '118020'],
  ['B30EP-172-593-WT', '118021'], ['B30EP-172-593-YL', '118023'], ['B30EP-172-593-RD', '118022'], ['B30EP-172-593-GN', '118024'], ['B30EP-172-593-SL', '118025'], ['B30EP-172-593-BK', '118026'],
  ['B30EP-173-593-WT', '118027'], ['B30EP-173-593-YL', '118029'], ['B30EP-173-593-RD', '118028'], ['B30EP-173-593-GN', '118030'], ['B30EP-173-593-SL', '118031'], ['B30EP-173-593-BK', '118032'],
  ['B30EP-174-593-WT', '118033'], ['B30EP-174-593-YL', '118035'], ['B30EP-174-593-RD', '118034'], ['B30EP-174-593-GN', '118036'], ['B30EP-174-593-SL', '118037'], ['B30EP-174-593-BK', '118038'],
  ['B30EP-175-593-WT', '118039'], ['B30EP-175-593-YL', '118040'], ['B30EP-175-593-GN', '118041'], ['B30EP-175-593-BK', '118042'],
  ['B30EP-176-593-WT', '118043'], ['B30EP-176-593-YL', '118044'], ['B30EP-176-593-GN', '118045'], ['B30EP-176-593-BK', '118046'],
  ['B30EP-177-593-WT', '118047'], ['B30EP-177-593-YL', '118048'], ['B30EP-177-593-GN', '118049'], ['B30EP-177-593-BK', '118050'],
]

const WYPUKLE_593_ROZMIAR: Record<string, [string, string]> = {
  '171': ['26,92 × 12,45 mm', '500'],
  '172': ['44,96 × 15 mm', '450'],
  '173': ['50,8 × 25,4 mm', '300'],
  '174': ['101,6 × 25,4 mm', '300'],
  '175': ['76,2 × 19,05 mm', '375'],
  '176': ['76,2 × 25,4 mm', '300'],
  '177': ['76,2 × 63,5 mm', '125'],
}

// Zalecana taśma barwiąca zależy od koloru etykiety: czarna z białą taśmą, biała, żółta i srebrna z R6000, czerwona i zielona z obiema.
const WYPUKLE_593_TASMA: Record<string, string> = {
  BK: 'R4400-WT',
  WT: 'R6000',
  YL: 'R6000',
  SL: 'R6000',
  RD: 'R4400-WT lub R6000',
  GN: 'R4400-WT lub R6000',
}

export const bradyB30Wypukle593: Product = {
  ...wspolneB30,
  id: 'brady-b30ep-171-593-wt',
  slug: 'brady-b30ep-171-593-wt',
  name: 'Wypukłe etykiety prostokątne Brady B30EP-171-593-WT — materiał B30EP do S3100',
  seoTitle: 'Brady B30EP-171-593-WT — wypukłe etykiety do S3100',
  seoDescription: 'Wypukłe etykiety poliestrowe Brady B30EP B-593 do S3100: 7 rozmiarów, 6 kolorów, grubość 0,65 mm. PN: B30EP-171-593-WT, B30EP-174-593-BK, B30EP-177-593-YL.',
  shortDescription: 'Brady B30EP-171-593-WT i 35 innych wersji wypukłych etykiet poliestrowych B-593 w siedmiu rozmiarach, w sześciu kolorach. Do drukarki Brady S3100.',
  description: 'Wypukłe etykiety B-593 to poliestrowe tabliczki o grubości 0,65 mm na piankowym kleju akrylowym. Wystają ponad powierzchnię jak grawerowana tabliczka, a ich powierzchnia jest błyszcząca. Oznacza się nimi panele krosowe, zewnętrzne przyciski, przełączniki i punkty połączeń wewnątrz urządzeń. Po wydruku znaków alfanumerycznych etykieta służy też jako tabliczka znamionowa albo numer seryjny. Mocny klej i odporność na rozpuszczalniki pozwalają zastąpić tabliczki grawerowane.\n\nDostępnych jest siedem prostokątnych rozmiarów. Najmniejszy ma 26,92 × 12,45 mm i 500 sztuk na rolce. Największe to 101,6 × 25,4 mm (300 szt.) oraz 76,2 × 63,5 mm (125 szt.). Etykiety występują w kolorach białym, żółtym, czerwonym, zielonym, srebrnym i czarnym. Rozmiary o szerokości 76,2 mm nie mają wersji czerwonej ani srebrnej.\n\nTabliczki znoszą ścieranie, chemikalia, korozję i wilgoć, a pracują w zakresie od −20 do 100 °C. Mają uznanie UL i cUL. Do czarnych etykiet zaleca się białą taśmę barwiącą B30-R4400-WT. Etykiety białe, żółte i srebrne drukuje się taśmą B30-R6000, a czerwone i zielone dowolną z nich. Kasety B30EP współpracują z S3100 i ze starszymi modelami opisanymi w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-raised-profile-rectangular-labels-cps-3069360',
  images: [
    '/images/products/brady/b30ep-171-593-rd.png',
    '/images/products/brady/b30ep-174-593-bk.png',
    '/images/products/brady/b30ep-177-593-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30EP-171-593-RD z rolką małych czerwonych wypukłych etykiet 26,92 × 12,45 mm',
    'Kaseta Brady B30EP-174-593-BK z rolką czarnych wypukłych etykiet 101,6 × 25,4 mm',
    'Kaseta Brady B30EP-177-593-YL z rolką żółtych wypukłych etykiet 76,2 × 63,5 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wypukłymi etykietami wykrawanymi (B30EP), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-593' },
    { name: 'Typ materiału', value: 'poliester, etykieta wypukła' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, na piance' },
    { name: 'Grubość', value: '0,65 mm' },
    { name: 'Temperatura pracy', value: 'od −20 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, rozpuszczalniki' },
    { name: 'Kolory', value: 'biały, żółty, czerwony, zielony, srebrny, czarny' },
    { name: 'Wymiary etykiety', value: '26,92 × 12,45 mm; 44,96 × 15 mm; 50,8 × 25,4 mm; 76,2 × 19,05 mm; 76,2 × 25,4 mm; 76,2 × 63,5 mm; 101,6 × 25,4 mm' },
    { name: 'Liczba sztuk na rolce', value: '500 (26,92 × 12,45 mm); 450 (44,96 × 15 mm); 375 (76,2 × 19,05 mm); 300 (50,8 × 25,4, 76,2 × 25,4 i 101,6 × 25,4 mm); 125 (76,2 × 63,5 mm)' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4400-WT (etykiety czarne); B30-R6000 (białe, żółte, srebrne); B30-R4400-WT albo B30-R6000 (czerwone, zielone)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: WYPUKLE_593.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WYPUKLE_593.map(([pn, art]) => {
    const [, rozm, kolor] = pn.match(/^B30EP-(\d+)-593-(\w+)$/) as RegExpMatchArray
    const [wymiar, szt] = WYPUKLE_593_ROZMIAR[rozm]
    return {
      partNumber: pn,
      name: `Brady ${pn} — wypukła etykieta ${wymiar}, kolor ${KOLORY[kolor].toLowerCase()}, ${szt} szt. na rolce (art. ${art})`,
      attributes: {
        Rozmiar: `${wymiar}, ${szt} szt.`,
        Kolor: KOLORY[kolor],
        Taśma: WYPUKLE_593_TASMA[kolor],
      },
      availability: 'unavailable' as const,
    }
  }),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 26,92 × 12,45 mm (500 szt.), a największa 76,2 × 63,5 mm (125 szt.).',
    Kolor: 'Kolor wypukłej tabliczki.\n\nWiększość rozmiarów jest dostępna w sześciu kolorach. Rozmiary 76,2 mm nie mają wersji czerwonej ani srebrnej.',
    Taśma: 'Zalecana taśma barwiąca, kupowana osobno w kasecie B30.\n\nR4400-WT jest białą taśmą do etykiet czarnych, a R6000 taśmą do etykiet jasnych.',
  },
  faq: [
    { question: 'Czym wypukła etykieta B30EP różni się od zwykłej etykiety wykrawanej?', answer: 'Ma grubość 0,65 mm i piankowy klej, dlatego wystaje ponad powierzchnię jak grawerowana tabliczka. Nadaje się na przyciski, przełączniki, panele krosowe i tabliczki znamionowe.' },
    { question: 'Jaką taśmę barwiącą wybrać do czarnych etykiet B30EP?', answer: 'Do czarnych etykiet zaleca się białą taśmę B30-R4400-WT. Etykiety białe, żółte i srebrne drukuje się taśmą B30-R6000, a czerwone i zielone dowolną z nich.' },
    { question: 'Czy te etykiety pasują do drukarki Brady S3100?', answer: 'Tak. Kasety B30EP są przeznaczone do drukarki [Brady S3100](/produkt/brady-s3100) oraz starszych modeli S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37.' },
  ],
  applications: ['Panele krosowe i punkty połączeń w szafach', 'Przyciski zewnętrzne i przełączniki', 'Tabliczki znamionowe i numery seryjne'],
}

// ---------------------------------------------------------------------------
// Wypukłe etykiety na przyciski B30EP — poliester B-593 (cps-3069361)
// B30EP-170-593-GN: brak odpowiedzi brady.eu (404), pominięty.
// ---------------------------------------------------------------------------

const WYPUKLE_PRZYCISKI_593: [string, string][] = [
  ['B30EP-167-593-WT', '118051'], ['B30EP-167-593-YL', '118053'], ['B30EP-167-593-RD', '118052'], ['B30EP-167-593-GN', '118054'], ['B30EP-167-593-BK', '118055'],
  ['B30EP-167U-593-WT', '118056'], ['B30EP-167U-593-YL', '118058'], ['B30EP-167U-593-RD', '118057'], ['B30EP-167U-593-GN', '118059'], ['B30EP-167U-593-BK', '118060'],
  ['B30EP-168-593-WT', '118061'], ['B30EP-168-593-YL', '118063'], ['B30EP-168-593-RD', '118062'], ['B30EP-168-593-GN', '118064'], ['B30EP-168-593-BK', '118065'],
  ['B30EP-169-593-WT', '118066'], ['B30EP-169-593-YL', '118068'], ['B30EP-169-593-RD', '118067'], ['B30EP-169-593-GN', '118069'], ['B30EP-169-593-BK', '118070'],
  ['B30EP-170-593-WT', '118071'], ['B30EP-170-593-YL', '118073'], ['B30EP-170-593-RD', '118072'], ['B30EP-170-593-BK', '118075'],
]

const WYPUKLE_PRZYCISKI_ROZMIAR: Record<string, [string, string]> = {
  '167': ['30,48 × 38,1 mm', '200'],
  '167U': ['30,48 × 38,1 mm', '200'],
  '168': ['30,48 × 48,26 mm', '180'],
  '169': ['45,72 × 45,72 mm', '190'],
  '170': ['60,96 × 60,96 mm', '145'],
}

export const bradyB30WypuklePrzyciski593: Product = {
  ...wspolneB30,
  id: 'brady-b30ep-167-593-wt',
  slug: 'brady-b30ep-167-593-wt',
  name: 'Wypukłe etykiety na przyciski Brady B30EP-167-593-WT — materiał B30EP do S3100',
  seoTitle: 'Brady B30EP-167-593-WT — etykiety na przyciski do S3100',
  seoDescription: 'Wypukłe tabliczki poliestrowe Brady B30EP z otworem na przycisk do S3100: 4 rozmiary, 5 kolorów. PN: B30EP-167-593-WT, B30EP-167U-593-BK, B30EP-170-593-YL.',
  shortDescription: 'Brady B30EP-167-593-WT i 23 inne wersje wypukłych tabliczek B-593 z otworem pod przycisk, w czterech rozmiarach i pięciu kolorach. Do drukarki Brady S3100.',
  description: 'Etykiety na przyciski to wypukłe tabliczki z poliestru B-593 z wykrojonym otworem. Otwór obejmuje przycisk albo przełącznik na panelu, a tabliczka opisuje jego funkcję. Piankowy klej akrylowy trzyma ją na powierzchni, a grubość 0,65 mm nadaje wygląd tabliczki grawerowanej. Opis drukuje się w drukarce na kolorowym tle. Tabliczki pasują do zewnętrznych przycisków, przełączników i podobnych elementów sterowania.\n\nRolki mają cztery rozmiary. Dwa mniejsze to 30,48 × 38,1 mm (200 szt.) i 30,48 × 48,26 mm (180 szt.). Dwa większe to 45,72 × 45,72 mm (190 szt.) i 60,96 × 60,96 mm (145 szt.). Rozmiar 30,48 × 38,1 mm występuje w dwóch wersjach. Zwykła ma otwór z wcięciem, a wersja z literą U ma otwór okrągły, bez wcięcia. Tabliczki są białe, żółte, czerwone, zielone albo czarne. Największy rozmiar nie ma wersji zielonej.\n\nTabliczki nie reagują na wilgoć, korozję, chemikalia ani tarcie. Znoszą zakres od −20 do 100 °C. Wyrób ma uznanie UL oraz cUL. Do czarnych tabliczek zaleca się białą taśmę B30-R4400-WT. Kolory biały i żółty wymagają taśmy B30-R6000. W czerwonych i zielonych można użyć obu taśm. Z S3100 współpracują też starsze drukarki BBP3x opisane w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-raised-profile-push-button-labels-cps-3069361',
  images: [
    '/images/products/brady/b30ep-167-593-yl.png',
    '/images/products/brady/b30ep-167u-593-bk.png',
    '/images/products/brady/b30ep-170-593-wt.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30EP-167-593-YL z rolką żółtych wypukłych tabliczek z okrągłym otworem z wcięciem',
    'Kaseta Brady B30EP-167U-593-BK z rolką czarnych tabliczek z okrągłym otworem bez wcięcia',
    'Kaseta Brady B30EP-170-593-WT z rolką dużych białych kwadratowych tabliczek 60,96 × 60,96 mm z otworem na przycisk',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wypukłymi etykietami wykrawanymi na przyciski (B30EP), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-593' },
    { name: 'Typ materiału', value: 'poliester, etykieta wypukła z otworem na przycisk' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, na piance' },
    { name: 'Grubość', value: '0,65 mm' },
    { name: 'Temperatura pracy', value: 'od −20 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć' },
    { name: 'Kolory', value: 'biały, żółty, czerwony, zielony, czarny' },
    { name: 'Wymiary etykiety', value: '30,48 × 38,1 mm; 30,48 × 48,26 mm; 45,72 × 45,72 mm; 60,96 × 60,96 mm' },
    { name: 'Liczba sztuk na rolce', value: '200 (30,48 × 38,1 mm); 180 (30,48 × 48,26 mm); 190 (45,72 × 45,72 mm); 145 (60,96 × 60,96 mm)' },
    { name: 'Otwór', value: 'okrągły z wcięciem; w wersji B30EP-167U okrągły bez wcięcia' },
    { name: 'Normy', value: 'UL Recognised, cUL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4400-WT (etykiety czarne); B30-R6000 (białe i żółte); B30-R4400-WT albo B30-R6000 (czerwone, zielone)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: WYPUKLE_PRZYCISKI_593.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WYPUKLE_PRZYCISKI_593.map(([pn, art]) => {
    const [, rozm, kolor] = pn.match(/^B30EP-(\w+)-593-(\w+)$/) as RegExpMatchArray
    const [wymiar, szt] = WYPUKLE_PRZYCISKI_ROZMIAR[rozm]
    return {
      partNumber: pn,
      name: `Brady ${pn} — wypukła etykieta na przycisk ${wymiar}, kolor ${KOLORY[kolor].toLowerCase()}, ${szt} szt. na rolce (art. ${art})`,
      attributes: {
        Rozmiar: `${wymiar}, ${szt} szt.`,
        Kolor: KOLORY[kolor],
        Otwór: rozm === '167U' ? 'bez wcięcia' : 'z wcięciem',
      },
      availability: 'unavailable' as const,
    }
  }),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej tabliczki i liczba tabliczek na rolce.\n\nNajmniejsza ma 30,48 × 38,1 mm (200 szt.), a największa 60,96 × 60,96 mm (145 szt.).',
    Kolor: 'Kolor tła tabliczki.\n\nKażdy rozmiar jest dostępny jako biały, żółty, czerwony i czarny. Zielony jest w trzech mniejszych rozmiarach.',
    Otwór: 'Kształt otworu na przycisk.\n\nOtwór okrągły z wcięciem ma większość wersji. Wersje z literą U w numerze mają otwór okrągły bez wcięcia.',
  },
  faq: [
    { question: 'Czym wersja B30EP-167U różni się od B30EP-167?', answer: 'Obie mają wymiary 30,48 × 38,1 mm i po 200 sztuk na rolce. Zwykła wersja ma okrągły otwór z wcięciem, a wersja U ma otwór okrągły bez wcięcia.' },
    { question: 'Do czego służą wypukłe etykiety na przyciski?', answer: 'Tabliczka z otworem obejmuje przycisk albo przełącznik i opisuje jego funkcję. Jest wypukła jak tabliczka grawerowana, a trzyma się na piankowym kleju akrylowym.' },
    { question: 'Z jakimi drukarkami współpracują kasety B30EP?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37.' },
  ],
  applications: ['Opisy przycisków sterowniczych na panelach', 'Oznaczenia przełączników na szafach i pulpitach', 'Zamiennik grawerowanych tabliczek'],
}

// ---------------------------------------------------------------------------
// Zawieszki bezpieczeństwa z poliestru do nadruku — B-851, bez nadruku fabrycznego (cps-5465258)
// ---------------------------------------------------------------------------

const ZAWIESZKI_KOLOROWE: [string, string][] = [
  ['B30-255-851-WT', '176270'], ['B30-255-851-YL', '176262'], ['B30-255-851-OR', '176265'],
  ['B30-255-851-RD', '176264'], ['B30-255-851-GN', '176263'], ['B30-255-851-BL', '176266'],
]

const KOLORY_ZAWIESZEK: Record<string, string> = { ...KOLORY, OR: 'Pomarańczowy', BL: 'Niebieski' }

export const bradyB30ZawieszkiKolorowe: Product = {
  ...wspolneB30,
  id: 'brady-b30-255-851-wt',
  slug: 'brady-b30-255-851-wt',
  name: 'Zawieszki bezpieczeństwa z poliestru do nadruku Brady B30-255-851-WT — materiał B30 do S3100',
  seoTitle: 'Brady B30-255-851-WT — zawieszki bezpieczeństwa do S3100',
  seoDescription: 'Kolorowe zawieszki poliestrowe Brady B-851 do S3100, 82,55 × 146,05 mm, 6 kolorów, 100 szt. na rolce. PN: B30-255-851-WT, B30-255-851-YL, B30-255-851-RD.',
  shortDescription: 'Brady B30-255-851-WT i 5 innych wersji kolorowych zawieszek bezpieczeństwa z poliestru B-851, sztywnych, z miejscem na własny nadruk. Do drukarki Brady S3100.',
  description: 'Zawieszki z poliestru B-851 są sztywne i mają grubość 0,25 mm. Występują w jednolitych kolorach, bez nadruku fabrycznego, i mają otwór do zawieszenia. Własny komunikat drukuje się na jednej stronie, np. ostrzeżenie o niebezpiecznym stanie urządzenia. Chropowata powierzchnia przyjmuje też pismo ręczne, więc na zawieszce można złożyć podpis, wpisać datę i dodać uwagi. Kolor służy do oznaczania sprzętu, zespołów, działów i obszarów.\n\nZawieszka ma wymiary 82,55 × 146,05 mm, a pole nadruku 82,55 × 102,11 mm. Rolka zawiera 100 sztuk. Wybiera się spośród sześciu kolorów: białego, żółtego, pomarańczowego, czerwonego, zielonego i niebieskiego. Każdy kolor ma te same wymiary i ten sam materiał.\n\nPoliester trwa dłużej niż zawieszka z tektury i znosi wilgoć, smary oraz brud. Odpiera też ścieranie i chemikalia. Temperaturą pracy zawieszki jest przedział od −40 do 100 °C. Siła zrywająca przekracza wymagane przez OSHA 22,5 kg (50 funtów) dla urządzeń do oznakowania blokad. Wymagania OSHA 1910.145(f) są spełnione, gdy na zawieszce wydrukuje się wymagane hasło sygnałowe i główny komunikat. Nadruk wykonuje się taśmą barwiącą B30-R10000 w odrębnej kasecie. Zawieszki pasują do S3100 i do starszych drukarek z listy w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/printable-polyester-safety-tags-for-b30-printers-cps-5465258',
  images: [
    '/images/products/brady/b30-255-851-yl.png',
    '/images/products/brady/b30-255-851-bl.png',
    '/images/products/brady/b30-255-851-rd.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-255-851-YL z rolką żółtych zawieszek i dwiema gotowymi zawieszkami z otworem',
    'Kaseta Brady B30-255-851-BL z rolką niebieskich zawieszek i dwiema gotowymi zawieszkami z otworem',
    'Kaseta Brady B30-255-851-RD z rolką czerwonych zawieszek i dwiema gotowymi zawieszkami z otworem',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z zawieszkami wykrawanymi (B30), bez nadruku fabrycznego i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-851' },
    { name: 'Typ materiału', value: 'poliester, sztywny' },
    { name: 'Grubość', value: '0,25 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'wilgoć, smary, brud, ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, czerwony, zielony, niebieski' },
    { name: 'Wymiary zawieszki', value: '82,55 × 146,05 mm' },
    { name: 'Pole nadruku', value: '82,55 × 102,11 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po wydrukowaniu wymaganego hasła sygnałowego i głównego komunikatu' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_KOLOROWE.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_KOLOROWE.map(([pn, art]) => {
    const kolor = pn.split('-').pop() as string
    return {
      partNumber: pn,
      name: `Brady ${pn} — zawieszka ${KOLORY_ZAWIESZEK[kolor].toLowerCase()} 82,55 × 146,05 mm, 100 szt. na rolce (art. ${art})`,
      attributes: { Kolor: KOLORY_ZAWIESZEK[kolor] },
      availability: 'unavailable' as const,
    }
  }),
  variantAttributeTooltips: {
    Kolor: 'Kolor całej zawieszki.\n\nWszystkie sześć kolorów ma te same wymiary 82,55 × 146,05 mm i po 100 sztuk na rolce. Kolor pozwala oznaczać sprzęt, zespoły i działy.',
  },
  faq: [
    { question: 'Czy zawieszki B30-255-851 mają nadruk fabryczny?', answer: 'Nie. Zawieszki są jednolicie kolorowe, a całą treść, razem z hasłem sygnałowym, drukuje się w drukarce. Zawieszki z fabrycznym nagłówkiem OSHA albo ANSI są osobnym produktem.' },
    { question: 'Czy na zawieszce można pisać ręcznie?', answer: 'Tak. Chropowata powierzchnia pozwala dopisać podpis, datę i uwagi, a nadruk zajmuje jedną stronę.' },
    { question: 'Z jaką drukarką pracują te zawieszki?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Zawieszki ostrzegawcze z własnym hasłem sygnałowym', 'Oznaczanie kolorami sprzętu, zespołów i działów', 'Zawieszki inspekcyjne i inwentaryzacyjne'],
}

// ---------------------------------------------------------------------------
// Puste etykiety winylowe na znaki B-595, wszystkie warunki pogodowe (cps-3069254)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar (szer. × wys.), sztuk na rolce, kolor]
const WINYL_595_PUSTE: [string, string, string, string, string][] = [
  ['B30-242-595-BLNKWT', '142196', '28,58 × 72,39 mm', '300', 'Biały'],
  ['B30-219-595-BLNKWT', '142197', '57,15 × 97,79 mm', '250', 'Biały'],
  ['B30-241-595-BLNKWT', '142195', '76,2 × 57,15 mm', '300', 'Biały'],
  ['B30-25-595-BLNKWT', '142194', '152,4 × 101,6 mm', '175', 'Biały'],
  ['B30-241-595-BLNKYL', '142199', '57,15 × 76,2 mm', '300', 'Żółty'],
  ['B30-25-595-BLNKYL', '142198', '101,6 × 152,4 mm', '175', 'Żółty'],
]

export const bradyB30Winyl595Puste: Product = {
  ...wspolneB30,
  id: 'brady-b30-25-595-blnkwt',
  slug: 'brady-b30-25-595-blnkwt',
  name: 'Puste etykiety winylowe na znaki Brady B30-25-595-BLNKWT — materiał B30 do S3100',
  seoTitle: 'Brady B30-25-595-BLNKWT — puste etykiety winylowe do S3100',
  seoDescription: 'Puste etykiety winylowe Brady B-595 do S3100, bardzo mocny klej, na zewnątrz 8–10 lat, 6 wersji. PN: B30-25-595-BLNKWT, B30-241-595-BLNKWT, B30-25-595-BLNKYL.',
  shortDescription: 'Brady B30-25-595-BLNKWT i 5 innych wersji pustych etykiet winylowych B-595 z bardzo mocnym klejem, białych i żółtych, na znaki i oznaczenia. Do drukarki Brady S3100.',
  description: 'Etykiety B-595 wykonano z winylu o niewielkim skurczu, z bardzo mocnym klejem akrylowym i błyszczącą powierzchnią. Są puste, więc wzór powstaje w drukarce. Dobrze trzymają się trudnych podłoży: malowanych pustaków i drewna, tworzyw o fakturze, rur w papierowej osłonie oraz obudów wydmuchiwanych. Służą do oznaczania rur, urządzeń, półek, znaków bezpieczeństwa i instalacji elektrycznych, także w brudnym otoczeniu i na zewnątrz.\n\nSześć wersji różni się wymiarami i kolorem. Białe etykiety mają 28,58 × 72,39 mm, 57,15 × 97,79 mm, 76,2 × 57,15 mm albo 152,4 × 101,6 mm. Żółte mają 57,15 × 76,2 mm albo 101,6 × 152,4 mm. Rolka zawiera od 175 do 300 sztuk, zależnie od wersji.\n\nWinyl nie boi się chemikaliów, smarów, olejów, mgły solnej, środków czystości ani brudu przemysłowego. Na zewnątrz wytrzymuje średnio od 8 do 10 lat. Gotowa etykieta przetrwa od −40 do 82 °C. Przykleić ją można nawet przy −18 °C. Wyrób ma zgodność z BS 5609:1986 w sekcji 2 i w sekcji 3. Zalecana taśma barwiąca to B30-R10000, a kaseta mieści się w S3100 i w starszych drukarkach z listy w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-pre-cut-blank-sign-labels-cps-3069254',
  images: [
    '/images/products/brady/b30-25-595-blnkwt.png',
    '/images/products/brady/b30-25-595-blnkyl.png',
    '/images/products/brady/b30-241-595-blnkyl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-25-595-BLNKWT z rolką dużych białych etykiet 152,4 × 101,6 mm',
    'Kaseta Brady B30-25-595-BLNKYL z rolką dużych żółtych etykiet 101,6 × 152,4 mm',
    'Kaseta Brady B30-241-595-BLNKYL z rolką żółtych etykiet 57,15 × 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z pustymi etykietami wykrawanymi, bez nadruku fabrycznego i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl o niewielkim skurczu' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, bardzo mocny; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Warunki pracy', value: 'wewnątrz i na zewnątrz (średnio 8–10 lat)' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje i smary, woda, mgła solna, środki czystości' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '28,58 × 72,39 mm; 57,15 × 97,79 mm; 76,2 × 57,15 mm; 152,4 × 101,6 mm (białe); 57,15 × 76,2 mm; 101,6 × 152,4 mm (żółte)' },
    { name: 'Liczba sztuk na rolce', value: '300 (28,58 × 72,39, 76,2 × 57,15 i 57,15 × 76,2 mm); 250 (57,15 × 97,79 mm); 175 (152,4 × 101,6 i 101,6 × 152,4 mm)' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: WINYL_595_PUSTE.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_595_PUSTE.map(([pn, art, wymiar, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — pusta etykieta winylowa ${wymiar}, kolor ${kolor.toLowerCase()}, ${szt} szt. na rolce (art. ${art})`,
    attributes: {
      Rozmiar: `${wymiar}, ${szt} szt.`,
      Kolor: kolor,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 28,58 × 72,39 mm (300 szt.), a największe 152,4 × 101,6 mm i 101,6 × 152,4 mm (175 szt.).',
    Kolor: 'Kolor folii winylowej.\n\nDostępne są wersje białe w czterech rozmiarach i żółte w dwóch.',
  },
  faq: [
    { question: 'Do jakich powierzchni nadają się etykiety B-595?', answer: 'Do gładkich i chropowatych, także malowanych pustaków, drewna, tworzyw o fakturze, rur w papierowej osłonie i obudów wydmuchiwanych. Klej jest bardzo mocny i trwały.' },
    { question: 'Ile lat etykiety wytrzymują na zewnątrz?', answer: 'Średnio od 8 do 10 lat. Pracują w temperaturze od −40 do 82 °C, a naklejanie jest możliwe od −18 °C.' },
    { question: 'Z jaką drukarką pracują puste etykiety B-595?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Znaki bezpieczeństwa i oznaczenia ostrzegawcze', 'Oznaczanie rur, zaworów i urządzeń', 'Etykiety na półki oraz instalacje elektryczne'],
}

// ---------------------------------------------------------------------------
// Puste etykiety winylowe B-7569 (cps-3079471); zgodność bez i4311
// ---------------------------------------------------------------------------

const DRUKARKI_B30_BEZ_I4311 = 'S3100, S3000, S3700, i3300, i5300; starsze BBP30, BBP31, BBP33, BBP35, BBP37'

// [PN, nr art., wymiar (szer. × wys.), sztuk na rolce, kolor]
const WINYL_7569_PUSTE: [string, string, string, string, string][] = [
  ['B30-242-7569-WT', '120932', '28,58 × 72 mm', '300', 'Biały'],
  ['B30-219-7569-WT', '120933', '57 × 98 mm', '250', 'Biały'],
  ['B30-241-7569-WT', '120931', '57 × 75 mm', '300', 'Biały'],
  ['B30-25-7569-WT', '120930', '101 × 152 mm', '175', 'Biały'],
  ['B30-241-7569-YL', '120935', '57 × 75 mm', '300', 'Żółty'],
  ['B30-25-7569-YL', '120934', '101 × 152 mm', '175', 'Żółty'],
]

export const bradyB30Winyl7569Puste: Product = {
  ...wspolneB30,
  id: 'brady-b30-25-7569-wt',
  slug: 'brady-b30-25-7569-wt',
  name: 'Puste etykiety winylowe Brady B30-25-7569-WT — materiał B30 do S3100',
  seoTitle: 'Brady B30-25-7569-WT — puste etykiety winylowe do S3100',
  seoDescription: 'Puste etykiety winylowe Brady B-7569 do S3100, białe i żółte, 4 rozmiary, 6 wersji, mocny klej akrylowy. PN: B30-25-7569-WT, B30-219-7569-WT, B30-241-7569-YL.',
  shortDescription: 'Brady B30-25-7569-WT i 5 innych wersji pustych etykiet winylowych B-7569, białych i żółtych, w czterech rozmiarach. Do drukarki Brady S3100.',
  description: 'B-7569 to błyszczący winyl standardowej jakości z mocnym klejem akrylowym. Etykiety są puste i nie mają nadruku fabrycznego, więc cały wzór powstaje w drukarce. Trwały klej dobrze przylega do powierzchni gładkich i chropowatych. Nadają się do oznaczania instalacji elektrycznych i obiektów w zakładzie, do informacji o zagrożeniach oraz do znaków bezpieczeństwa.\n\nW tej karcie jest sześć wersji. Białe etykiety mają rozmiary 28,58 × 72 mm, 57 × 98 mm, 57 × 75 mm i 101 × 152 mm. Żółte występują w rozmiarach 57 × 75 mm i 101 × 152 mm. Na rolce mieści się od 175 do 300 sztuk. Folia ma grubość 0,102 mm.\n\nEtykiety można naklejać od 10 °C, a naklejone znoszą od −20 do 75 °C. Wyrób spełnia BS 5609:1986: zarówno sekcję 2, jak i sekcję 3. Do wydruku służy osobna taśma barwiąca B30-R10000 w odrębnej kasecie. Produkt przeznaczono do drukarki S3100 oraz do wcześniejszych modeli wymienionych w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/pre-cut-blank-labels-for-bbp3x-s3xxx-i3300-printers-cps-3079471',
  images: [
    '/images/products/brady/b30-219-7569-wt.png',
    '/images/products/brady/b30-242-7569-wt.png',
    '/images/products/brady/b30-25-7569-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-219-7569-WT z rolką białych pustych etykiet 57 × 98 mm',
    'Kaseta Brady B30-242-7569-WT z rolką wąskich białych etykiet 28,58 × 72 mm',
    'Kaseta Brady B30-25-7569-YL z rolką dużych żółtych etykiet 101 × 152 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z pustymi etykietami wykrawanymi, bez nadruku fabrycznego i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7569' },
    { name: 'Typ materiału', value: 'winyl' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −20 do 75 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Wymiary etykiety', value: '28,58 × 72 mm; 57 × 98 mm; 57 × 75 mm; 101 × 152 mm' },
    { name: 'Liczba sztuk na rolce', value: '300 (28,58 × 72 i 57 × 75 mm); 250 (57 × 98 mm); 175 (101 × 152 mm)' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30_BEZ_I4311 },
    { name: 'Numery artykułów Brady', value: WINYL_7569_PUSTE.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: WINYL_7569_PUSTE.map(([pn, art, wymiar, szt, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — pusta etykieta winylowa ${wymiar}, kolor ${kolor.toLowerCase()}, ${szt} szt. na rolce (art. ${art})`,
    attributes: {
      Rozmiar: `${wymiar}, ${szt} szt.`,
      Kolor: kolor,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 28,58 × 72 mm (300 szt.), a największa 101 × 152 mm (175 szt.).',
    Kolor: 'Kolor folii winylowej.\n\nBiałe etykiety są dostępne w czterech rozmiarach, a żółte w dwóch.',
  },
  faq: [
    { question: 'Czym puste etykiety B-7569 różnią się od etykiet GHS/CLP z tego samego winylu?', answer: 'Tu etykiety są puste, a w wersjach GHS/CLP na etykiecie są fabrycznie nadrukowane czerwone romby. Materiał, klej i temperatura pracy są takie same.' },
    { question: 'Ile pustych etykiet B-7569 mieści się na rolce?', answer: 'Zależy od rozmiaru: 175 sztuk (101 × 152 mm), 250 sztuk (57 × 98 mm) albo 300 sztuk (28,58 × 72 mm i 57 × 75 mm).' },
    { question: 'Jakie drukarki obsługują te etykiety?', answer: 'Drukarkę [Brady S3100](/produkt/brady-s3100) oraz starsze modele S3000, S3700, i3300, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Znaki bezpieczeństwa i informacje o zagrożeniach', 'Oznaczenia instalacji elektrycznych', 'Identyfikacja obiektów w zakładzie'],
}

// ---------------------------------------------------------------------------
// Etykiety z nadrukowanym rombem Right-to-know — winyl B-595 (cps-3069362)
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar (szer. × wys.), sztuk na rolce, nadruk]
const RIGHT_TO_KNOW: [string, string, string, string, string][] = [
  ['B30-244-595-NFPA', '142041', '57,15 × 57,15 mm', '365', 'Romb NFPA'],
  ['B30-244-595-HMIG', '142045', '57,15 × 57,15 mm', '365', 'Paski HMIG'],
  ['B30-244-595-CB', '142040', '57,15 × 57,15 mm', '365', 'Paski CB'],
  ['B30-245-595-NFPA', '142044', '101,6 × 57,15 mm', '240', 'Romb NFPA'],
  ['B30-245-595-CB', '142043', '101,6 × 57,15 mm', '240', 'Paski CB'],
  ['B30-246-595-HMIG', '142046', '76,2 × 28,58 mm', '300', 'Paski HMIG z liniami'],
  ['B30-246-595-NFR', '142047', '76,2 × 28,58 mm', '300', 'Romb NFPA z liniami'],
  ['B30-263-595-NFPA', '142037', '158,75 × 101,6 mm', '170', 'Romb NFPA'],
]

export const bradyB30RightToKnow: Product = {
  ...wspolneB30,
  id: 'brady-b30-244-595-nfpa',
  slug: 'brady-b30-244-595-nfpa',
  name: 'Etykiety winylowe z nadrukowanym rombem Right-to-know Brady B30-244-595-NFPA — materiał B30 do S3100',
  seoTitle: 'Brady B30-244-595-NFPA — etykiety Right-to-know do S3100',
  seoDescription: 'Etykiety winylowe Brady B-595 do S3100 z nadrukowanym rombem NFPA albo paskami HMIG i CB, 8 wersji. PN: B30-244-595-NFPA, B30-245-595-CB, B30-263-595-NFPA.',
  shortDescription: 'Brady B30-244-595-NFPA i 7 innych wersji etykiet winylowych z fabrycznie nadrukowanym rombem NFPA albo paskami HMIG i CB, do oznaczania chemikaliów. Do drukarki Brady S3100.',
  description: 'Etykiety Right-to-know służą do oznaczania zagrożeń, które stwarzają substancje chemiczne. Na białym tle nadrukowano fabrycznie kolorowe pola: niebieskie, czerwone i żółte. Resztę dodaje się w drukarce jednym przebiegiem czarnego nadruku, więc powstaje pięciokolorowa etykieta chemiczna. Podłoże stanowi błyszczący winyl B-595 z bardzo mocnym klejem akrylowym. Taka etykieta trzyma się też na chropowatych, brudnych i zewnętrznych powierzchniach.\n\nMożna wybrać jeden z czterech wzorów. Romb NFPA ma niebieskie, czerwone, żółte i białe pole. Paski HMIG zawierają białe kółka, a paski CB białe prostokąty. Wersje z liniami mają dodatkową ramkę na opis. Rozmiary rozciągają się od 76,2 × 28,58 mm do 158,75 × 101,6 mm, a rolka mieści od 170 do 365 etykiet.\n\nWinyl odpiera chemikalia, smary, oleje, mgłę solną, środki czystości i brud. Znosi temperatury z przedziału od −40 do 82 °C. Klej wiąże już przy −18 °C. Wymagania BS 5609:1986 są spełnione. Zalecana jest taśma barwiąca B30-R10000, którą kupuje się osobno. Kaseta nadaje się do S3100 i do wcześniejszych modeli z listy w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/pre-printed-right-to-know-chemical-labels-cps-3069362',
  images: [
    '/images/products/brady/b30-263-595-nfpa.png',
    '/images/products/brady/b30-244-595-hmig.png',
    '/images/products/brady/b30-246-595-nfr.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-263-595-NFPA z rolką dużych białych etykiet 158,75 × 101,6 mm i nadrukowanym rombem NFPA',
    'Kaseta Brady B30-244-595-HMIG z rolką etykiet z niebieskim, czerwonym i żółtym paskiem oraz białymi kółkami',
    'Kaseta Brady B30-246-595-NFR z rolką wąskich etykiet z rombem NFPA i liniami do opisu',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi z fabrycznym nadrukiem Right-to-know, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl o niewielkim skurczu' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, bardzo mocny; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje i smary, woda, mgła solna, środki czystości' },
    { name: 'Kolor', value: 'niebieski, czerwony i żółty nadruk na białym tle' },
    { name: 'Wymiary etykiety', value: '57,15 × 57,15 mm; 101,6 × 57,15 mm; 76,2 × 28,58 mm; 158,75 × 101,6 mm' },
    { name: 'Liczba sztuk na rolce', value: '365 (57,15 × 57,15 mm); 240 (101,6 × 57,15 mm); 300 (76,2 × 28,58 mm); 170 (158,75 × 101,6 mm)' },
    { name: 'Nadruk fabryczny', value: 'romb NFPA; paski HMIG z białymi kółkami; paski CB z białymi prostokątami; romb NFPA albo paski HMIG z liniami na opis' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: RIGHT_TO_KNOW.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: RIGHT_TO_KNOW.map(([pn, art, wymiar, szt, nadruk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta Right-to-know ${wymiar}, nadruk: ${nadruk.toLowerCase()}, ${szt} szt. na rolce (art. ${art})`,
    attributes: {
      Rozmiar: `${wymiar}, ${szt} szt.`,
      Nadruk: nadruk,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 76,2 × 28,58 mm (300 szt.), a największa 158,75 × 101,6 mm (170 szt.).',
    Nadruk: 'Wzór nadrukowany fabrycznie.\n\nRomb NFPA ma cztery kolorowe pola. Paski HMIG i CB są niebieskie, czerwone i żółte, z białymi kółkami albo prostokątami. Dopisek „z liniami” oznacza ramkę z liniami na opis.',
  },
  faq: [
    { question: 'Co daje fabryczny nadruk na etykietach Right-to-know?', answer: 'Kolorowe pola są już na etykiecie. Drukarka dodaje tylko czarny nadruk w jednym przebiegu, więc powstaje pięciokolorowa etykieta chemiczna.' },
    { question: 'Czym różnią się wzory NFPA, HMIG i CB?', answer: 'Romb NFPA ma niebieskie, czerwone, żółte i białe pole. Paski HMIG mają białe kółka, a paski CB białe prostokąty. Wersje z liniami dają miejsce na opis.' },
    { question: 'Do jakiej drukarki pasują te etykiety?', answer: 'Do drukarki [Brady S3100](/produkt/brady-s3100) oraz starszych modeli S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Etykiety z rombem NFPA na pojemnikach z chemikaliami', 'Oznaczenia zagrożeń w magazynie i laboratorium', 'Znakowanie substancji w zakładzie produkcyjnym'],
}

// ---------------------------------------------------------------------------
// Etykiety winylowe z fabrycznie nadrukowanym nagłówkiem znaku — B-595 (cps-3069349)
// Pominięte: B30-241-595-OSHADA (wycofany), B30-25-595-OSHACA (brak odpowiedzi brady.eu, 404).
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar (szer. × wys.), sztuk na rolce, nadruk]
const NAGLOWKI_595: [string, string, string, string, string][] = [
  ['B30-241-595-ANSIDA', '142183', '76,2 × 57,15 mm', '300', 'ANSI DANGER'],
  ['B30-241-595-ANSICA', '142185', '76,2 × 57,15 mm', '300', 'ANSI CAUTION'],
  ['B30-241-595-ANSIWA', '142187', '76,2 × 57,15 mm', '300', 'ANSI WARNING'],
  ['B30-241-595-ANSINO', '142189', '76,2 × 57,15 mm', '300', 'ANSI NOTICE'],
  ['B30-241-595-OSHACA', '142193', '76,2 × 57,15 mm', '300', 'OSHA CAUTION'],
  ['B30-25-595-ANSIDA', '142182', '152,4 × 101,6 mm', '175', 'ANSI DANGER'],
  ['B30-25-595-ANSICA', '142184', '152,4 × 101,6 mm', '175', 'ANSI CAUTION'],
  ['B30-25-595-ANSIWA', '142186', '152,4 × 101,6 mm', '175', 'ANSI WARNING'],
  ['B30-25-595-ANSINO', '142188', '152,4 × 101,6 mm', '175', 'ANSI NOTICE'],
  ['B30-25-595-OSHADA', '142190', '152,4 × 101,6 mm', '175', 'OSHA DANGER'],
]

export const bradyB30Naglowki595: Product = {
  ...wspolneB30,
  id: 'brady-b30-25-595-ansida',
  slug: 'brady-b30-25-595-ansida',
  name: 'Etykiety winylowe z nadrukowanym nagłówkiem znaku Brady B30-25-595-ANSIDA — materiał B30 do S3100',
  seoTitle: 'Brady B30-25-595-ANSIDA — etykiety z nagłówkiem do S3100',
  seoDescription: 'Etykiety winylowe Brady B-595 do S3100 z nagłówkiem ANSI i OSHA: DANGER, CAUTION, WARNING, NOTICE. PN: B30-25-595-ANSIDA, B30-241-595-OSHACA.',
  shortDescription: 'Brady B30-25-595-ANSIDA i 9 innych wersji etykiet winylowych z fabrycznym nagłówkiem znaku w standardach ANSI i OSHA, w dwóch rozmiarach. Do drukarki Brady S3100.',
  description: 'Na etykietach z nagłówkiem jeden brzeg zajmuje fabryczny pasek z hasłem sygnałowym. Pasek jest kolorowy, a pozostałe pole drukarka wypełnia czarną taśmą w jednym przejściu. W ten sposób powstaje wielokolorowy znak bez drukarki kolorowej. Podłoże to błyszczący, giętki winyl B-595 o małym skurczu, na bardzo mocnym kleju akrylowym. Znaki trafiają na rury, urządzenia, półki, szafy elektryczne i inne obiekty zakładu.\n\nNagłówki pochodzą ze standardów amerykańskich ANSI i OSHA. ANSI ma cztery hasła: DANGER (niebezpieczeństwo) z czerwonym paskiem, CAUTION (ostrożnie) z żółtym, WARNING (ostrzeżenie) z pomarańczowym i NOTICE (informacja) z niebieskim. W OSHA jest DANGER z czerwono-czarną owalną ramką oraz CAUTION na żółtym tle. Etykiety mają dwa rozmiary: 152,4 × 101,6 mm (175 szt. na rolce) i 76,2 × 57,15 mm (300 szt.).\n\nMateriał znosi kontakt z chemikaliami, smarami, olejami, mgłą solną, środkami czystości i zabrudzeniami przemysłowymi. Etykieta znosi zakres temperatury od −40 do 82 °C; przy −18 °C klej nadal przylega. Norma BS 5609:1986 jest spełniona w sekcjach 2 i 3. Zaleca się osobną taśmę barwiącą B30-R10000. Kasety pasują do S3100 oraz do starszych drukarek wymienionych w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-pre-printed-pre-cut-vinyl-blank-sign-headers-cps-3069349',
  images: [
    '/images/products/brady/b30-25-595-ansida.png',
    '/images/products/brady/b30-241-595-oshaca.png',
    '/images/products/brady/b30-25-595-oshada.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-25-595-ANSIDA z rolką białych etykiet 152,4 × 101,6 mm z czerwonym nagłówkiem DANGER',
    'Kaseta Brady B30-241-595-OSHACA z rolką żółtych etykiet 76,2 × 57,15 mm z czarnym nagłówkiem CAUTION',
    'Kaseta Brady B30-25-595-OSHADA z rolką białych etykiet z czerwono-czarną owalną ramką DANGER',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi z fabrycznym nagłówkiem znaku, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl o niewielkim skurczu' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, bardzo mocny' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Odporność', value: 'chemikalia, smary i oleje, mgła solna, środki czystości, brud przemysłowy' },
    { name: 'Kolory', value: 'czerwony na białym (ANSI DANGER); czarny i żółty na białym (ANSI CAUTION); czarny i pomarańczowy na białym (ANSI WARNING); niebieski na białym (ANSI NOTICE); czarny i czerwony na białym (OSHA DANGER); czarny na żółtym (OSHA CAUTION)' },
    { name: 'Wymiary etykiety', value: '76,2 × 57,15 mm; 152,4 × 101,6 mm' },
    { name: 'Pole nadruku', value: '76,2 × 41,28 mm (etykieta 76,2 × 57,15 mm); 152,4 × 73,03 mm (etykieta 152,4 × 101,6 mm)' },
    { name: 'Liczba sztuk na rolce', value: '300 (76,2 × 57,15 mm); 175 (152,4 × 101,6 mm)' },
    { name: 'Nadruk fabryczny', value: 'nagłówek znaku: ANSI DANGER, CAUTION, WARNING, NOTICE oraz OSHA DANGER i CAUTION' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: NAGLOWKI_595.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: NAGLOWKI_595.map(([pn, art, wymiar, szt, nadruk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — etykieta winylowa ${wymiar} z nagłówkiem ${nadruk}, ${szt} szt. na rolce (art. ${art})`,
    attributes: {
      Rozmiar: `${wymiar}, ${szt} szt.`,
      Nadruk: nadruk,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nDuża etykieta ma 152,4 × 101,6 mm (175 szt.), a mała 76,2 × 57,15 mm (300 szt.).',
    Nadruk: 'Standard i hasło nagłówka nadrukowanego fabrycznie.\n\nANSI i OSHA to standardy amerykańskie. DANGER oznacza niebezpieczeństwo, CAUTION ostrożność, WARNING ostrzeżenie, a NOTICE informację.',
  },
  faq: [
    { question: 'Co oznaczają hasła DANGER, CAUTION, WARNING i NOTICE?', answer: 'DANGER to niebezpieczeństwo, CAUTION to ostrożność, WARNING to ostrzeżenie, a NOTICE to informacja. Każde hasło ma własny kolor paska w standardzie ANSI.' },
    { question: 'Dlaczego nagłówek jest nadrukowany fabrycznie?', answer: 'Kolorowy pasek jest już na etykiecie, więc drukarka dodaje tylko czarną treść w jednym przebiegu. Powstaje wielokolorowy znak bez drukarki kolorowej.' },
    { question: 'Z jaką drukarką pracują te etykiety?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Znaki bezpieczeństwa z hasłem ANSI albo OSHA', 'Oznaczenia ostrzegawcze na urządzeniach i instalacjach', 'Znaki na rurach, półkach i szafach elektrycznych'],
}

// ---------------------------------------------------------------------------
// Metalizowane etykiety poliestrowe Defender B-438, z zabezpieczeniem przed zdjęciem (cps-3069359)
// W rodzinie jest też taśma ciągła B30C-3000-438; karta w sekcji „etykiety”.
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar lub opis, forma, sztuk na rolce]
const METALIZOWANE_438: [string, string, string, string, string][] = [
  ['B30-17-438', '118076', '50,8 × 25,4 mm', 'Etykiety wykrawane', '1225'],
  ['B30-18-438', '118077', '76,2 × 25,4 mm', 'Etykiety wykrawane', '1225'],
  ['B30-222-438', '118078', '76,2 × 50,8 mm', 'Etykiety wykrawane', '650'],
  ['B30C-3000-438', '118014', 'ciągła 76,2 mm × 30,48 m', 'Taśma ciągła', ''],
]

export const bradyB30Metalizowane438: Product = {
  ...wspolneB30,
  id: 'brady-b30-17-438',
  slug: 'brady-b30-17-438',
  name: 'Metalizowane etykiety poliestrowe z zabezpieczeniem przed zdjęciem Defender Brady B30-17-438 — materiał B30 do S3100',
  seoTitle: 'Brady B30-17-438 — metalizowane etykiety Defender do S3100',
  seoDescription: 'Metalizowane etykiety Brady Defender B-438 do S3100 z zabezpieczeniem przed zdjęciem: 3 rozmiary i taśma ciągła. PN: B30-17-438, B30-222-438, B30C-3000-438.',
  shortDescription: 'Brady B30-17-438 i 3 inne wersje srebrnych etykiet poliestrowych Defender B-438, które po zdjęciu zostawiają ślad w kształcie szachownicy. Do drukarki Brady S3100.',
  description: 'Metalizowany poliester B-438 o nazwie handlowej Defender zabezpiecza etykietę przed zdjęciem. Klej jest trwały, a przy próbie odklejenia na podłożu zostaje ślad w układzie szachownicy. Etykiety są srebrne i matowe. Pełnią rolę tabliczek znamionowych i seryjnych, które wymagają odporności oraz ochrony przed usunięciem. Używa się ich także do znakowania produktów, śledzenia zasobów, identyfikacji ogólnej i oznaczania płytek drukowanych.\n\nDostępne są trzy rozmiary etykiet wykrojonych. Rolka rozmiarów 50,8 × 25,4 mm oraz 76,2 × 25,4 mm mieści po 1225 sztuk. Rolka rozmiaru 76,2 × 50,8 mm mieści 650 sztuk. Dochodzi taśma ciągła: 76,2 mm szerokości i 30,48 m długości. Folia ma grubość 0,085 mm. Etykiety nakleja się na powierzchnie gładkie. Przed naklejeniem należy je dotykać jak najmniej, ponieważ wzór szachownicy może wystąpić przedwcześnie.\n\nMateriał znosi rozpuszczalniki, wilgoć, promieniowanie UV, wpływ pogody i zmienne temperatury od −40 do 40 °C. Wyrób ma akceptację CSA oraz uznanie UL. Zalecana taśma barwiąca to B30-R4300. Etykiety B-438 współpracują z drukarką S3100, a listę starszych modeli podano w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-metallised-polyester-labels-cps-3069359',
  images: [
    '/images/products/brady/b30-17-438.png',
    '/images/products/brady/b30-222-438.png',
    '/images/products/brady/b30c-3000-438.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-17-438 z rolką srebrnych metalizowanych etykiet 50,8 × 25,4 mm',
    'Kaseta Brady B30-222-438 z rolką srebrnych metalizowanych etykiet 76,2 × 50,8 mm',
    'Kaseta Brady B30C-3000-438 z rolką srebrnej metalizowanej taśmy ciągłej o szerokości 76,2 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi (B30) albo z taśmą ciągłą (B30C), bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-438' },
    { name: 'Typ materiału', value: 'metalizowany poliester z zabezpieczeniem przed zdjęciem (Defender)' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały; po zdjęciu etykiety zostaje ślad w układzie szachownicy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,085 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 40 °C' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: '50,8 × 25,4 mm; 76,2 × 25,4 mm; 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1225 (50,8 × 25,4 i 76,2 × 25,4 mm); 650 (76,2 × 50,8 mm)' },
    { name: 'Szerokość i długość taśmy', value: 'ciągła 76,2 mm × 30,48 m (B30C-3000-438)' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: METALIZOWANE_438.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METALIZOWANE_438.map(([pn, art, wymiar, forma, szt]) => ({
    partNumber: pn,
    name: pn.startsWith('B30C')
      ? `Brady ${pn} — srebrna taśma ciągła Defender ${wymiar} (art. ${art})`
      : `Brady ${pn} — srebrna etykieta Defender ${wymiar}, ${szt} szt. na rolce (art. ${art})`,
    attributes: {
      Rozmiar: szt ? `${wymiar}, ${szt} szt.` : wymiar,
      Forma: forma,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary jednej etykiety i liczba etykiet na rolce albo szerokość i długość taśmy ciągłej.\n\nNajmniejsza etykieta ma 50,8 × 25,4 mm, a taśma ciągła ma 76,2 mm szerokości i 30,48 m długości.',
    Forma: 'Sposób dostarczenia materiału.\n\nEtykiety wykrawane mają stały rozmiar. Taśma ciągła pozwala drukować etykiety o długości zależnej od projektu.',
  },
  faq: [
    { question: 'Na czym polega zabezpieczenie Defender w etykietach B-438?', answer: 'Klej jest trwały, a po zdjęciu etykiety na podłożu zostaje ślad w układzie szachownicy. Dzięki temu widać, że etykietę próbowano usunąć.' },
    { question: 'Dlaczego metalizowanych etykiet nie należy dotykać przed naklejeniem?', answer: 'Zbyt częste dotykanie może przedwcześnie odsłonić wzór szachownicy. Etykietę należy chwytać jak najrzadziej i nakleić od razu na gładkie podłoże.' },
    { question: 'Jaka drukarka obsługuje etykiety B-438?', answer: 'Drukarka [Brady S3100](/produkt/brady-s3100) oraz starsze modele S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R4300.' },
  ],
  applications: ['Tabliczki znamionowe i seryjne z ochroną przed usunięciem', 'Śledzenie zasobów i znakowanie produktów', 'Oznaczanie płytek drukowanych'],
}

// ---------------------------------------------------------------------------
// Metalizowane etykiety poliestrowe B-7563, satynowe (cps-3079463); B30-135-7563 wycofany, pominięty
// ---------------------------------------------------------------------------

// [PN, nr art., wymiar (szer. × wys.), sztuk na rolce]
const METALIZOWANE_7563: [string, string, string, string][] = [
  ['B30-17-7563', '710790', '50,8 × 25,4 mm', '1226'],
  ['B30-7-7563', '710792', '69,85 × 31,75 mm', '1003'],
  ['B30-222-7563', '710791', '76,2 × 50,8 mm', '649'],
]

export const bradyB30Metalizowane7563: Product = {
  ...wspolneB30,
  id: 'brady-b30-17-7563',
  slug: 'brady-b30-17-7563',
  name: 'Metalizowane etykiety poliestrowe Brady B30-17-7563 — materiał B30 do S3100',
  seoTitle: 'Brady B30-17-7563 — metalizowane etykiety poliestrowe do S3100',
  seoDescription: 'Srebrne satynowe etykiety z metalizowanego poliestru Brady B-7563 do S3100, do 135 °C, 3 rozmiary. PN: B30-17-7563, B30-7-7563, B30-222-7563.',
  shortDescription: 'Brady B30-17-7563 i 2 inne rozmiary srebrnych etykiet z metalizowanego poliestru B-7563 o satynowym wykończeniu, odpornych do 135 °C. Do drukarki Brady S3100.',
  description: 'Etykiety B-7563 wykonano z metalizowanego poliestru w kolorze srebrnym. Powierzchnia jest satynowa, a folia ma grubość 0,075 mm i trwały klej akrylowy. Metaliczny wygląd przypomina tabliczkę metalową, dlatego materiał stosuje się do identyfikacji ogólnej i do oznaczania zasobów, na przykład sprzętu i wyposażenia.\n\nKażda wersja jest prostokątna i pozbawiona wzoru fabrycznego, a treść dodaje się wyłącznie w drukarce. Rolki zawierają etykiety w trzech rozmiarach. Są to 50,8 × 25,4 mm (1226 szt.), 69,85 × 31,75 mm (1003 szt.) i 76,2 × 50,8 mm (649 szt.). Duża liczba sztuk na rolce sprawia, że jedna kaseta wystarcza na długą serię etykiet, na przykład przy oznaczaniu całego parku maszynowego.\n\nPoliester pracuje w szerokim zakresie temperatury, od −40 do 135 °C, więc znosi także wysokie temperatury. Wyrób ma uznanie UL. Do druku służy taśma barwiąca B30-R6000 w osobnej kasecie. Materiał pasuje do S3100 oraz do wcześniejszych drukarek z serii BBP3x, a także do S3000, S3700, i3300 i i5300.',
  sameAs: 'https://www.brady.eu/labels/metallised-polyester-labels-for-bbp33-i3300-printers-cps-3079463',
  images: ['/images/products/brady/b30-222-7563.png'],
  imageDescriptions: [
    'Kaseta Brady B30-222-7563 z rolką srebrnych metalizowanych etykiet 76,2 × 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z etykietami wykrawanymi, bez nadruku fabrycznego i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7563' },
    { name: 'Typ materiału', value: 'metalizowany poliester' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,075 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 135 °C' },
    { name: 'Kolor', value: 'srebrny' },
    { name: 'Wymiary etykiety', value: '50,8 × 25,4 mm; 69,85 × 31,75 mm; 76,2 × 50,8 mm' },
    { name: 'Liczba sztuk na rolce', value: '1226 (50,8 × 25,4 mm); 1003 (69,85 × 31,75 mm); 649 (76,2 × 50,8 mm)' },
    { name: 'Normy', value: 'UL Recognised' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30_BEZ_I4311 },
    { name: 'Numery artykułów Brady', value: METALIZOWANE_7563.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: METALIZOWANE_7563.map(([pn, art, wymiar, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — srebrna etykieta metalizowana ${wymiar}, ${szt} szt. na rolce (art. ${art})`,
    attributes: { Rozmiar: `${wymiar}, ${szt} szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość jednej etykiety oraz liczba etykiet na rolce.\n\nNajmniejsza etykieta ma 50,8 × 25,4 mm (1226 szt.), a największa 76,2 × 50,8 mm (649 szt.).',
  },
  faq: [
    { question: 'Do jakiej temperatury nadają się etykiety B-7563?', answer: 'Poliester pracuje od −40 do 135 °C. Folia ma satynowe wykończenie i srebrny, metaliczny kolor.' },
    { question: 'Czy etykiety B-7563 mają nadruk fabryczny?', answer: 'Nie. Etykiety są puste, a cały wzór drukuje się w drukarce taśmą barwiącą B30-R6000.' },
    { question: 'Z jakimi drukarkami współpracują te etykiety?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i5300 i BBP30–BBP37.' },
  ],
  applications: ['Identyfikacja ogólna sprzętu i wyposażenia', 'Śledzenie zasobów', 'Etykiety odporne na wysoką temperaturę'],
}

// ---------------------------------------------------------------------------
// Zawieszki LOTO (blokada i oznakowanie) z nadrukiem OSHA i ANSI — poliester B-851
// Rodziny: cps-4453848, cps-4453855, cps-4453964 oraz pojedyncze pid-b30-255-851-{ansica, ansidf, ost-bk, ansida, ansidb, oshada}.
// Numery B30-255-851OSHADSB i B30-255-851OSHADSF bez myślnika — tak podaje brady.eu.
// ---------------------------------------------------------------------------

const TYL_PODPIS = 'Signed Reverse Side'
const TYL_ZDJECIE = 'Unauthorised Removal'

// [PN, nr art., nadruk (standard i hasło), przód, tył]
const ZAWIESZKI_LOTO: [string, string, string, string, string][] = [
  ['B30-255-851-OSHADA', '176268', 'OSHA DANGER', 'nagłówek', 'pusty'],
  ['B30-255-851-OSHADB', '176253', 'OSHA DANGER', 'nagłówek', TYL_ZDJECIE],
  ['B30-255-851-OSHADF', '176258', 'OSHA DANGER', 'nagłówek', TYL_PODPIS],
  ['B30-255-851-OST-BK', '176261', 'OSHA DANGER', 'nagłówek, ramka w pasy', 'pusty'],
  ['B30-255-851OSHADSB', '176251', 'OSHA DANGER', 'nagłówek, ramka w pasy', TYL_ZDJECIE],
  ['B30-255-851OSHADSF', '176256', 'OSHA DANGER', 'nagłówek, ramka w pasy', TYL_PODPIS],
  ['B30-255-851-WHT-B', '176255', 'OSHA DANGER', 'pusty', TYL_ZDJECIE],
  ['B30-255-851-WHT-F', '176260', 'OSHA DANGER', 'pusty', TYL_PODPIS],
  ['B30-255-851-ANSIDA', '176267', 'ANSI DANGER', 'nagłówek', 'pusty'],
  ['B30-255-851-ANSIDB', '176252', 'ANSI DANGER', 'nagłówek', TYL_ZDJECIE],
  ['B30-255-851-ANSIDF', '176257', 'ANSI DANGER', 'nagłówek', TYL_PODPIS],
  ['B30-255-851-ANSICA', '176269', 'ANSI CAUTION', 'nagłówek', 'pusty'],
]

export const bradyB30ZawieszkiLoto: Product = {
  ...wspolneB30,
  id: 'brady-b30-255-851-oshadf',
  slug: 'brady-b30-255-851-oshadf',
  name: 'Zawieszki LOTO do blokady i oznakowania z nadrukiem OSHA i ANSI Brady B30-255-851-OSHADF — materiał B30 do S3100',
  seoTitle: 'Brady B30-255-851-OSHADF — zawieszki LOTO do S3100',
  seoDescription: 'Zawieszki LOTO Brady B-851 z nadrukiem OSHA i ANSI do S3100: DANGER i CAUTION, tył pusty lub z nadrukiem, 12 wersji. PN: B30-255-851-OSHADF, B30-255-851-ANSIDA.',
  shortDescription: 'Brady B30-255-851-OSHADF i 11 innych wersji sztywnych zawieszek LOTO z poliestru B-851 z nagłówkiem w amerykańskich standardach OSHA i ANSI. Do drukarki Brady S3100.',
  description: 'Zawieszki LOTO oznaczają urządzenia zabezpieczone blokadą (lockout/tagout) i ostrzegają przed niebezpiecznym stanem maszyny. Wykonano je ze sztywnego poliestru B-851. Mają fabrycznie nadrukowany nagłówek w jednym z dwóch standardów amerykańskich: OSHA albo ANSI. Hasło to DANGER (niebezpieczeństwo) albo CAUTION (ostrożnie). Resztę przodu dodaje się w drukarce, a chropowata powierzchnia przyjmuje też podpis, datę i uwagi.\n\nZawieszka mierzy 82,55 × 146,05 mm; pole nadruku zajmuje w niej 82,55 × 102,11 mm. Na rolce jest 100 sztuk. Wersje różnią się standardem nagłówka, wyglądem przodu i tyłem. Przód ma zwykły nagłówek, nagłówek z ramką w pasy albo jest pusty. Tył jest czysty lub zadrukowany. Napis „Unauthorised Removal” ostrzega przed zdjęciem zawieszki przez osobę nieupoważnioną. Napis „Signed Reverse Side” wskazuje, że zdjąć ją może tylko osoba, która się podpisała.\n\nPoliester wytrzymuje obciążenie wyższe niż 22,5 kg (50 funtów), wymagane przez OSHA dla zawieszek blokujących, a także zakres temperatury od −40 do 100 °C. Aby spełnić OSHA 1910.145(f), na zawieszce trzeba wydrukować hasło sygnałowe i główny komunikat. Należy użyć taśmy barwiącej B30-R10000, kupowanej osobno.',
  sameAs: 'https://www.brady.eu/labels/loto-tags-osha-danger-printable-front-preprinted-back-for-b30-printers-cps-4453848',
  images: [
    '/images/products/brady/b30-255-851-oshadb.png',
    '/images/products/brady/b30-255-851-ost-bk.png',
    '/images/products/brady/b30-255-851-ansica.png',
  ],
  imageDescriptions: [
    'Kaseta Brady B30-255-851-OSHADB z rolką białych zawieszek z nagłówkiem OSHA DANGER oraz zawieszki z przodu i z tyłu z nadrukiem „Unauthorised Removal”',
    'Kaseta Brady B30-255-851-OST-BK z rolką zawieszek z nagłówkiem OSHA DANGER i czerwono-białą ramką w pasy oraz gotowa zawieszka',
    'Kaseta Brady B30-255-851-ANSICA z rolką zawieszek z żółtym nagłówkiem ANSI CAUTION oraz gotowa zawieszka',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z zawieszkami wykrawanymi (B30) z fabrycznym nagłówkiem, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-851' },
    { name: 'Typ materiału', value: 'poliester, sztywny' },
    { name: 'Grubość', value: '0,25 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, smary, brud' },
    { name: 'Kolory', value: 'czerwony, czarny i żółty na białym, zależnie od wersji' },
    { name: 'Wymiary zawieszki', value: '82,55 × 146,05 mm' },
    { name: 'Pole nadruku', value: '82,55 × 102,11 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Nadruk fabryczny', value: 'nagłówek OSHA DANGER, ANSI DANGER albo ANSI CAUTION; wersje z ramką w pasy; tył pusty albo z nadrukiem „Signed Reverse Side” lub „Unauthorised Removal”' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po wydrukowaniu wymaganego hasła sygnałowego i głównego komunikatu' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_LOTO.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_LOTO.map(([pn, art, nadruk, przod, tyl]) => ({
    partNumber: pn,
    name: `Brady ${pn} — zawieszka LOTO ${nadruk}, przód: ${przod}, tył: ${tyl}, 100 szt. na rolce (art. ${art})`,
    attributes: {
      Nadruk: nadruk,
      Przód: przod,
      Tył: tyl,
    },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Nadruk: 'Amerykański standard i hasło sygnałowe nagłówka.\n\nOSHA DANGER i ANSI DANGER oznaczają niebezpieczeństwo, a ANSI CAUTION ostrożność. Wersje z tylnym nadrukiem OSHA mają nagłówek na odwrocie.',
    Przód: 'Wygląd przodu zawieszki.\n\nNagłówek zajmuje górną część. Ramka w pasy otacza pole nadruku, a przód pusty jest całkowicie do własnego nadruku.',
    Tył: 'Odwrotna strona zawieszki.\n\nPusty tył służy do pisania. „Unauthorised Removal” ostrzega przed zdjęciem przez osobę nieupoważnioną, a „Signed Reverse Side” oznacza, że zdjąć zawieszkę może tylko jej podpisujący.',
  },
  faq: [
    { question: 'Co oznaczają standardy OSHA i ANSI na zawieszkach?', answer: 'To amerykańskie standardy wyglądu nagłówka zawieszki. Hasło DANGER oznacza niebezpieczeństwo, a CAUTION ostrożność. Zawieszka spełnia OSHA 1910.145(f) po wydrukowaniu wymaganego hasła sygnałowego i głównego komunikatu.' },
    { question: 'Czym różni się zawieszka z pustym tyłem od zawieszki z nadrukiem na odwrocie?', answer: 'Pusty tył służy do pisania. Zadrukowany tył ma gotowy komunikat o zablokowaniu źródła energii i o zasadach zdejmowania zawieszki: „Unauthorised Removal” albo „Signed Reverse Side”.' },
    { question: 'Z jaką drukarką pracują zawieszki LOTO B-851?', answer: 'Z drukarką [Brady S3100](/produkt/brady-s3100) oraz starszymi modelami S3000, S3700, i3300, i4311, i5300 i BBP30–BBP37. Zalecana taśma barwiąca to B30-R10000.' },
  ],
  applications: ['Zawieszki blokady i oznakowania (LOTO) na maszynach', 'Zawieszki ostrzegawcze OSHA i ANSI z własnym tekstem', 'Zawieszki inspekcyjne i znakowanie Lean/5S'],
}

// ---------------------------------------------------------------------------
// KONIEC KART
// ---------------------------------------------------------------------------

export const bradyB30Etykiety: Product[] = [
  bradyB30GhsClp,
  bradyB30Wypukle593,
  bradyB30WypuklePrzyciski593,
  bradyB30ZawieszkiKolorowe,
  bradyB30Winyl595Puste,
  bradyB30Winyl7569Puste,
  bradyB30RightToKnow,
  bradyB30Naglowki595,
  bradyB30Metalizowane438,
  bradyB30Metalizowane7563,
  bradyB30ZawieszkiLoto,
]

export const bradyB30EtykietySekcje: Record<string, 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'> = Object.fromEntries(
  bradyB30Etykiety.map((p) => [p.id, 'etykiety' as const]),
)
