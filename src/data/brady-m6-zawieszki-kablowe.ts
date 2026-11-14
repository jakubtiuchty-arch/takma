import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Zawieszki kablowe Brady z poliestru B-7598 i poliuretanu B-7643 do M610 i M611: kasety M6 oraz rolki BM
// (luzem, także 2 w rzędzie). Mocowane opaskami kablowymi, bez taśmy barwiącej w kasecie. 14.11.2026.

const DRUKARKI_M6 = 'Brady M610, M611, M710; starsze BMP61 i BMP71'

// Kolor zawieszki: [nazwa w tabeli wersji, forma w nazwie wersji].
const KOLORY: Record<string, [string, string]> = {
  WT: ['Biały', 'białe'],
  YL: ['Żółty', 'żółte'],
  BL: ['Niebieski', 'niebieskie'],
  RD: ['Czerwony', 'czerwone'],
  GN: ['Zielony', 'zielone'],
  OR: ['Pomarańczowy', 'pomarańczowe'],
  BK: ['Czarny', 'czarne'],
  SV: ['Srebrny', 'srebrne'],
}

// [PN, numer artykułu Brady, szerokość mm, długość mm, sztuk na rolce, kolor]
type Zawieszka = [string, string, string, string, number, string]

function warianty(rows: Zawieszka[], kolumny: ('Rozmiar' | 'Kolor')[], drukarka?: string) {
  return rows.map(([pn, , w, h, qty, kolor]) => {
    const attributes: Record<string, string> = {}
    if (kolumny.includes('Rozmiar')) attributes.Rozmiar = `${w} × ${h} mm, ${qty} szt.`
    if (kolumny.includes('Kolor')) attributes.Kolor = KOLORY[kolor][0]
    if (drukarka) attributes.Drukarka = drukarka
    return {
      partNumber: pn,
      name: `Brady ${pn} — ${qty} zawieszek ${w} × ${h} mm, ${KOLORY[kolor][1]}`,
      attributes,
      availability: 'unavailable' as const,
    }
  })
}

const numeryArtykulow = (rows: Zawieszka[]) => rows.map(([pn, art]) => `${pn}: ${art}`).join('; ')

// B-7598, rolki BM bez podkładu w sześciu kolorach (białe w osobnej rodzinie BM-…-7598-WT).
const BM_7598_KOLOROWE: Zawieszka[] = [
  ['BM-25X75-7598-YL', '312169', '25', '75', 250, 'YL'],
  ['BM-25X75-7598-BL', '312164', '25', '75', 250, 'BL'],
  ['BM-25X75-7598-RD', '312166', '25', '75', 250, 'RD'],
  ['BM-25X75-7598-GN', '312165', '25', '75', 250, 'GN'],
  ['BM-25X75-7598-SV', '312167', '25', '75', 250, 'SV'],
  ['BM-25X75-7598-BK', '312163', '25', '75', 250, 'BK'],
  ['BM-15X75-7598-YL', '312162', '15', '75', 250, 'YL'],
  ['BM-15X75-7598-BL', '312157', '15', '75', 250, 'BL'],
  ['BM-15X75-7598-RD', '312159', '15', '75', 250, 'RD'],
  ['BM-15X75-7598-GN', '312158', '15', '75', 250, 'GN'],
  ['BM-15X75-7598-SV', '312160', '15', '75', 250, 'SV'],
  ['BM-15X75-7598-BK', '312156', '15', '75', 250, 'BK'],
  ['BM-10X75-7598-YL', '312155', '10', '75', 250, 'YL'],
  ['BM-10X75-7598-BL', '312150', '10', '75', 250, 'BL'],
  ['BM-10X75-7598-RD', '312152', '10', '75', 250, 'RD'],
  ['BM-10X75-7598-GN', '312151', '10', '75', 250, 'GN'],
  ['BM-10X75-7598-SV', '312153', '10', '75', 250, 'SV'],
  ['BM-10X75-7598-BK', '312149', '10', '75', 250, 'BK'],
  ['BM-10X60-7598-YL', '312148', '10', '60', 500, 'YL'],
  ['BM-10X60-7598-BL', '312143', '10', '60', 500, 'BL'],
  ['BM-10X60-7598-RD', '312145', '10', '60', 500, 'RD'],
  ['BM-10X60-7598-GN', '312144', '10', '60', 500, 'GN'],
  ['BM-10X60-7598-SV', '312146', '10', '60', 500, 'SV'],
  ['BM-10X60-7598-BK', '312142', '10', '60', 500, 'BK'],
]

export const bradyM6ZawieszkiPoliesterBmKolorowe: Product = {
  ...wspolneM6,
  id: 'brady-bm-25x75-7598-yl',
  slug: 'brady-bm-25x75-7598-yl',
  name: 'Zawieszki kablowe z poliestru bez podkładu Brady BM-25X75-7598-YL — materiał BM do M610 i M611',
  seoTitle: 'Brady BM-25X75-7598-YL — zawieszki z poliestru luzem do M610',
  seoDescription: 'Kolorowe zawieszki Brady z poliestru B-7598 bez podkładu, rolki BM po 250–500 szt., od −40 do 100 °C. PN: BM-25X75-7598-YL, BM-10X60-7598-RD, BM-15X75-7598-BL.',
  shortDescription: 'Brady BM-25X75-7598-YL i 23 inne rolki BM zawierają kolorowe zawieszki kablowe z poliestru B-7598 bez podkładu, w sześciu kolorach. Do drukarek Brady M610 i M611.',
  description: 'Brady BM-25X75-7598-YL to materiał luzem z rodziny B-7598, czyli kolorowe zawieszki kablowe z poliestru. Taśma z zawieszkami nie ma podkładu. Gotową zawieszkę przypina się do kabla opaskami przez otwory na jej końcach. Błyszczący poliester ma grubość 0,2 mm. Zawieszki oznaczają przewody elektryczne i okablowanie teleinformatyczne, także na zewnątrz budynków.\n\nNa jednej rolce BM jest od 250 do 500 zawieszek. Zawieszki 10 × 60 mm są po 500 sztuk. Trzy rozmiary o długości 75 mm, czyli o szerokości 10, 15 i 25 mm, są po 250 sztuk. Każdy z czterech rozmiarów występuje w sześciu kolorach: żółtym, niebieskim, czerwonym, zielonym, srebrnym i czarnym. Białe zawieszki z tego materiału mają osobną kartę z rolkami BM.\n\nPoliester B-7598 zachowuje czytelny nadruk na zewnątrz do 10 lat. Zawieszki z B-7598 wytrzymują od −40 do 100 °C. Zawieszki srebrne i czarne spełniają wymagania normy IEC 61249-2-21 dla materiałów bezhalogenowych. Na zawieszkach kolorowych drukuje się taśmą M61-R6010. Czarne zawieszki wymagają białej taśmy M61-R4410-WT. Materiał pasuje do drukarek M610, M611 i M710 oraz do starszych BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/bulk-linerless-polyester-cable-tag-for-m710-bmp71-m610-bmp61-m611-cps-4556440',
  images: [
    '/images/products/brady/bm-25x75-7598-yl.png',
    '/images/products/brady/bm-10x60-7598-rd.png',
    '/images/products/brady/bm-15x75-7598-bl.png',
    '/images/products/brady/bm-10x75-7598-bk.png',
  ],
  imageDescriptions: [
    'Kartonowy podajnik z rolką żółtych zawieszek Brady BM-25X75-7598-YL i jedną zawieszką 25 × 75 mm',
    'Rolka czerwonych zawieszek Brady BM-10X60-7598-RD w podajniku z wąskim paskiem 10 × 60 mm',
    'Niebieskie zawieszki 15 × 75 mm Brady BM-15X75-7598-BL wysunięte z kartonu',
    'Czarne zawieszki Brady BM-10X75-7598-BK z otworami na opaski kablowe',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM luzem: rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester bez podkładu' },
    { name: 'Grubość', value: '0,2 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolory', value: 'żółty, niebieski, czerwony, zielony, srebrny, czarny' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 15 × 75 / 25 × 75 mm' },
    { name: 'Liczba sztuk na rolce', value: '500 (10 × 60 mm) albo 250 (pozostałe rozmiary)' },
    { name: 'Format', value: 'zawieszki wykrawane na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe) — zawieszki srebrne i czarne' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (zawieszki kolorowe), M61-R4410-WT (zawieszki czarne); do M710: M7-R6000, M7-R4400-WT' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(BM_7598_KOLOROWE) },
  ],
  variants: warianty(BM_7598_KOLOROWE, ['Rozmiar', 'Kolor']),
  variantAttributeTooltips: {
    Rozmiar: 'Rozmiar zawieszki oraz ile sztuk mieści rolka BM.\n\nNajkrótsze zawieszki, 10 × 60 mm, są po 500 sztuk. Pozostałe trzy rozmiary mają długość 75 mm i są po 250 sztuk.',
    Kolor: 'Kolor poliestru, z którego jest zawieszka.\n\nKażdy rozmiar ma sześć kolorów. Czarne zawieszki zadrukowuje biała taśma serii R4400, pozostałe kolory taśma serii R6000HF.',
  },
  faq: [
    { question: 'Czym różni się rolka BM od kasety M6 z poliestru B-7598?', answer: 'Rolka BM ma 250 albo 500 zawieszek. W kasecie M6 z tym samym poliestrem jest 100 zawieszek. Rolka BM nadaje się do dużych serii oznaczeń.' },
    { question: 'Jaką taśmą barwiącą drukować na czarnych zawieszkach B-7598?', answer: 'Białą taśmą M61-R4410-WT. Odpowiednikiem dla M710 jest M7-R4400-WT.' },
    { question: 'Jak długo nadruk na zawieszce B-7598 jest czytelny na zewnątrz?', answer: 'Do 10 lat. Mróz do −40 °C ani ciepło do 100 °C nie uszkadzają poliestru.' },
  ],
  applications: ['Oznaczanie kabli w instalacjach zewnętrznych', 'Okablowanie teleinformatyczne', 'Kodowanie przewodów kolorem'],
}

export const bradyM6ZawieszkaPoliester10x60: Product = {
  ...wspolneM6,
  id: 'brady-m6-10x60-7598-wt',
  slug: 'brady-m6-10x60-7598-wt',
  name: 'Zawieszki kablowe z poliestru bez podkładu Brady M6-10x60-7598-WT — kaseta M6 do M610 i M611',
  seoTitle: 'Brady M6-10x60-7598-WT — zawieszki z poliestru do M610',
  seoDescription: 'Kaseta Brady M6-10x60-7598-WT: 100 białych zawieszek 10 × 60 mm z poliestru B-7598 bez podkładu, nadruk czytelny na zewnątrz do 10 lat. PN: M6-10x60-7598-WT.',
  shortDescription: 'Brady M6-10x60-7598-WT to kaseta ze 100 białymi zawieszkami kablowymi 10 × 60 mm z poliestru B-7598 bez podkładu. Do drukarek Brady M610 i M611.',
  description: 'Kaseta Brady M6-10x60-7598-WT zawiera 100 białych zawieszek kablowych z poliestru B-7598. Materiał nie ma podkładu. Zawieszkę zakłada się na przewód i mocuje opaską kablową. Powierzchnia jest błyszcząca, a grubość materiału wynosi 0,2 mm. Taśma barwiąca nie jest częścią tej kasety. Trzeba ją włożyć do drukarki w osobnej kasecie M61.\n\nZawieszka ma 10 mm szerokości i 60 mm długości. Pole nadruku zajmuje 10 × 40 mm. Na obu końcach zawieszki są otwory na opaski. Ten numer obejmuje jeden rozmiar i jeden kolor. Żółte zawieszki tego samego rozmiaru oraz większe rozmiary są w rodzinie kaset M6 z poliestru B-7598.\n\nPoliester B-7598 przeznaczono do oznaczeń kabli na zewnątrz budynków. Nadruk na nim pozostaje czytelny do 10 lat. Zawieszki z tej kasety można stosować od −40 do 100 °C. Biały poliester spełnia wymagania IEC 61249-2-21 dla materiałów bez halogenów. Do nadruku służy taśma barwiąca M61-R6010, a w drukarce M710 taśma M7-R6000. Kaseta pasuje do M610 i M611. Działa także w M710, BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/linerless-polyester-cable-tag-for-m611-m610-pid-m6-10x60-7598-wt',
  images: [
    '/images/products/brady/m6-10x75-7598-wt.png',
    '/images/products/brady/m6-10x60-7598-wt.png',
  ],
  imageDescriptions: [
    'Rolka białych zawieszek z poliestru B-7598 o szerokości 10 mm na uchwycie kasety M6',
    'Rysunek kasety Brady M6-10x60-7598-WT z paskiem zawieszek i otworami na opaski kablowe',
  ],
  specifications: [
    { name: 'Part Number', value: 'M6-10x60-7598-WT' },
    { name: 'Numer artykułu Brady', value: '312052' },
    { name: 'Typ', value: 'Kaseta z zawieszkami kablowymi, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester bez podkładu' },
    { name: 'Grubość', value: '0,2 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zawieszki', value: '10 × 60 mm' },
    { name: 'Pole nadruku', value: '10 × 40 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Format', value: 'zawieszki wykrawane w kasecie M6' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (seria R4400 albo R6000HF); do M710: M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
  ],
  faq: [
    { question: 'Czy kaseta M6-10x60-7598-WT zawiera taśmę barwiącą?', answer: 'Nie. Taśma barwiąca jest w osobnej kasecie M61. Do tych zawieszek zaleca się taśmę M61-R6010.' },
    { question: 'Jaką część zawieszki 10 × 60 mm można zadrukować?', answer: 'Pole nadruku ma 10 × 40 mm. Końce zawieszki mają otwory na opaski kablowe.' },
    { question: 'Czy kaseta działa w drukarce Brady M710?', answer: 'Tak. W M710 do nadruku służy taśma M7-R6000. Kaseta pasuje również do [Brady M610](/produkt/brady-m610) i M611.' },
  ],
  applications: ['Oznaczanie cienkich kabli', 'Okablowanie sieci teleinformatycznych', 'Przewody w instalacjach zewnętrznych'],
}

// B-7643, rolki BM bez podkładu, dwie zawieszki 15 × 75 mm obok siebie.
const BM_7643_2_15X75: Zawieszka[] = [
  ['BM-15X75-2-7643-YL', '322588', '15', '75', 500, 'YL'],
  ['BM-15X75-2-7643-WT', '322587', '15', '75', 500, 'WT'],
]

export const bradyM6ZawieszkiPoliuretan2x15: Product = {
  ...wspolneM6,
  id: 'brady-bm-15x75-2-7643-yl',
  slug: 'brady-bm-15x75-2-7643-yl',
  name: 'Zawieszki kablowe z poliuretanu bez podkładu, 2 w rzędzie, Brady BM-15X75-2-7643-YL — materiał BM do M610 i M611',
  seoTitle: 'Brady BM-15X75-2-7643-YL — zawieszki PU 2 w rzędzie do M610',
  seoDescription: 'Zawieszki Brady z poliuretanu B-7643 bez podkładu, 2 w rzędzie, 15 × 75 mm, 500 szt. na rolce, bezhalogenowe. PN: BM-15X75-2-7643-YL, BM-15X75-2-7643-WT.',
  shortDescription: 'Brady BM-15X75-2-7643-YL i BM-15X75-2-7643-WT to rolki zawieszek kablowych z poliuretanu B-7643 bez podkładu, drukowanych parami w układzie 2 w rzędzie, żółtych albo białych. Do drukarek Brady M610 i M611.',
  description: 'Materiał Brady BM-15X75-2-7643-YL zawiera zawieszki kablowe z poliuretanu B-7643, ułożone po dwie obok siebie. Drukarka zadrukowuje obie zawieszki z rzędu w jednym przejściu. Dzięki temu na jedną zawieszkę zużywa się mniej taśmy barwiącej. Materiał jest bez podkładu. Termoplastyczny poliuretan polieterowy ma grubość 0,45 mm i matową powierzchnię.\n\nRodzina ma jeden rozmiar zawieszki: 15 × 75 mm. Pole nadruku ma 15 × 55 mm. Na rolce jest 500 zawieszek. Do wyboru są zawieszki żółte i białe. Żółte przyjmują nadruk taśmą serii R4400 albo R6000HF. Na białych drukuje tylko seria R6000HF. Węższe zawieszki 10 mm w tym samym układzie mają osobną kartę.\n\nPoliuretan B-7643 nie zawiera dodanych halogenów. W czasie pożaru wydziela mało dymu. Materiał znosi ścieranie, chemikalia, olej i wodę. Nie traci właściwości w wilgotnym otoczeniu. Zawieszka zachowuje właściwości przy temperaturze otoczenia od −40 do 90 °C. Zalecana taśma barwiąca to M61-R6010, a do M710 — M7-R6000. Rolkę stosuje się w M610, M611 i M710 oraz w BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/linerless-polyurethane-cable-tags-2-across-for-bmp61-bmp71-m610-m611-m710-cps-5143235',
  images: [
    '/images/products/brady/bm-15x75-2-7643-yl.png',
    '/images/products/brady/bm-15x75-2-7643-wt.png',
  ],
  imageDescriptions: [
    'Pudełko z rolką żółtych zawieszek Brady BM-15X75-2-7643-YL ułożonych po dwie w rzędzie',
    'Rolka białych zawieszek Brady BM-15X75-2-7643-WT wysunięta z pudełka',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM: rolka zawieszek kablowych 2 w rzędzie, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy bez podkładu, bezhalogenowy' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda, wilgoć' },
    { name: 'Kolory', value: 'żółty, biały' },
    { name: 'Wymiary zawieszki', value: '15 × 75 mm' },
    { name: 'Pole nadruku', value: '15 × 55 mm' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Format', value: 'zawieszki wykrawane, 2 w rzędzie, na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010; do M710: M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(BM_7643_2_15X75) },
  ],
  variants: warianty(BM_7643_2_15X75, ['Kolor']),
  variantAttributeTooltips: {
    Kolor: 'Kolor poliuretanu, z którego jest zawieszka.\n\nObie wersje mają ten sam rozmiar 15 × 75 mm i po 500 sztuk na rolce. Białe zawieszki zadrukowuje tylko taśma serii R6000HF.',
  },
  faq: [
    { question: 'Co oznacza układ 2 w rzędzie?', answer: 'Na szerokości taśmy są dwie zawieszki obok siebie. Drukarka zadrukowuje je w jednym przejściu, więc zużywa mniej taśmy barwiącej na jedną zawieszkę.' },
    { question: 'Na co jest odporny poliuretan B-7643?', answer: 'Na ścieranie, chemikalia, olej, wodę i wilgoć. Nie zawiera dodanych halogenów. Pracuje w mrozie do −40 °C i w cieple do 90 °C.' },
  ],
  applications: ['Oznaczanie kabli w szafach i rozdzielnicach', 'Okablowanie teleinformatyczne', 'Duże serie oznaczeń przewodów'],
}

// B-7643, rolki BM, dwie zawieszki o szerokości 10 mm obok siebie.
const BM_7643_2_10MM: Zawieszka[] = [
  ['BM-10X60-2-7643-WT', '322571', '10', '60', 500, 'WT'],
  ['BM-10X60-2-7643-YL', '322572', '10', '60', 500, 'YL'],
  ['BM-10X75-2-7643-WT', '322573', '10', '75', 500, 'WT'],
  ['BM-10X75-2-7643-YL', '322574', '10', '75', 500, 'YL'],
]

export const bradyM6ZawieszkiPoliuretan2x10: Product = {
  ...wspolneM6,
  id: 'brady-bm-10x60-2-7643-wt',
  slug: 'brady-bm-10x60-2-7643-wt',
  name: 'Zawieszki kablowe z poliuretanu, 2 w rzędzie, Brady BM-10X60-2-7643-WT — materiał BM do M610 i M611',
  seoTitle: 'Brady BM-10X60-2-7643-WT — zawieszki 2 w rzędzie do M610',
  seoDescription: 'Wąskie zawieszki Brady z poliuretanu B-7643, 2 w rzędzie, 10 × 60 i 10 × 75 mm, 500 szt. PN: BM-10X60-2-7643-WT, BM-10X75-2-7643-YL, BM-10X60-2-7643-YL.',
  shortDescription: 'Brady BM-10X60-2-7643-WT oraz trzy pozostałe rolki BM mają wąskie zawieszki kablowe z poliuretanu B-7643, po dwie w rzędzie. Do drukarek Brady M610 i M611.',
  description: 'Brady BM-10X60-2-7643-WT to rolka wąskich zawieszek z poliuretanu B-7643 w układzie 2 w rzędzie. Na szerokości taśmy leżą dwie zawieszki o szerokości 10 mm. Jeden przebieg drukarki daje dwa opisy, co ogranicza zużycie taśmy barwiącej. Matowy materiał ma 0,45 mm grubości. Zawieszki przeznaczono do kabli i okablowania sieciowego.\n\nW rodzinie są cztery numery. Zawieszki mają szerokość 10 mm i długość 60 albo 75 mm. Zawieszka 10 × 60 mm ma pole nadruku 10 × 40 mm. Każda długość jest biała albo żółta. Rolka mieści 500 sztuk. Szersze zawieszki 15 × 75 mm w tym samym układzie opisuje osobna karta.\n\nPoliuretan polieterowy jest wolny od dodanych halogenów (IEC 61249-2-21). Olej, woda i chemikalia nie niszczą materiału. Zawieszka jest też odporna na ścieranie i wilgoć. Wytrzymuje temperaturę od −40 do 90 °C. Białe zawieszki zadrukowuje się taśmą serii R6000HF. Żółte przyjmują nadruk taśmą R4400 albo R6000HF. Zalecana kaseta z taśmą to M61-R6010. Materiał obsługują M610, M611, M710, BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/polyurethane-cable-tag-2-across-for-m611-m610-m710-cps-5143249',
  images: [
    '/images/products/brady/bm-10x60-2-7643-wt.png',
    '/images/products/brady/bm-10x60-2-7643-yl.png',
  ],
  imageDescriptions: [
    'Pudełko z rolką białych zawieszek Brady BM-10X60-2-7643-WT i paskiem z dwiema zawieszkami w rzędzie',
    'Żółte zawieszki Brady BM-10X60-2-7643-YL ułożone parami na pasku wysuniętym z pudełka',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM: rolka zawieszek kablowych 2 w rzędzie, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy, bezhalogenowy' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda, wilgoć' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 mm' },
    { name: 'Pole nadruku', value: '10 × 40 mm (zawieszka 10 × 60 mm)' },
    { name: 'Liczba sztuk na rolce', value: '500' },
    { name: 'Format', value: 'zawieszki wykrawane, 2 w rzędzie, na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010; do M710: M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(BM_7643_2_10MM) },
  ],
  variants: warianty(BM_7643_2_10MM, ['Rozmiar', 'Kolor']),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość × długość jednej zawieszki i liczba zawieszek na rolce.\n\nWszystkie wersje mają szerokość 10 mm i 500 sztuk na rolce. Różnią się długością: 60 albo 75 mm.',
    Kolor: 'Kolor zawieszki z poliuretanu.\n\nBiałą wersję zadrukowuje taśma serii R6000HF. Żółta przyjmuje także taśmę serii R4400.',
  },
  faq: [
    { question: 'Jaką długość zawieszki 10 mm wybrać?', answer: 'Zawieszka 10 × 60 mm ma pole nadruku 10 × 40 mm. Wersja 10 × 75 mm jest dłuższa o 15 mm. Obie długości są białe albo żółte.' },
    { question: 'Dlaczego zawieszki są po dwie w rzędzie?', answer: 'Drukarka zadrukowuje dwie zawieszki naraz. Na jedną zawieszkę zużywa się wtedy mniej taśmy barwiącej.' },
  ],
  applications: ['Oznaczanie kabli sieciowych', 'Przewody w szafach sterowniczych', 'Oznaczenia w miejscach narażonych na olej i chemikalia'],
}

// B-7643, rolki BM luzem z numerami kończącymi się na -L, biały i żółty.
const BM_7643_L: Zawieszka[] = [
  ['BM-10x60-7643-WT-L', '312195', '10', '60', 250, 'WT'],
  ['BM-10x60-7643-YL-L', '312196', '10', '60', 250, 'YL'],
  ['BM-10x75-7643-WT-L', '312197', '10', '75', 250, 'WT'],
  ['BM-10x75-7643-YL-L', '312198', '10', '75', 250, 'YL'],
  ['BM-25x75-7643-WT-L', '312199', '25', '75', 250, 'WT'],
  ['BM-25x75-7643-YL-L', '312200', '25', '75', 250, 'YL'],
]

export const bradyM6ZawieszkiPoliuretanBmL: Product = {
  ...wspolneM6,
  id: 'brady-bm-10x60-7643-wt-l',
  slug: 'brady-bm-10x60-7643-wt-l',
  name: 'Zawieszki kablowe z poliuretanu luzem Brady BM-10x60-7643-WT-L — materiał BM do M610 i M611',
  seoTitle: 'Brady BM-10x60-7643-WT-L — zawieszki z poliuretanu do M610',
  seoDescription: 'Białe i żółte zawieszki Brady z poliuretanu B-7643 luzem, 250 szt. na rolce BM. PN: BM-10x60-7643-WT-L, BM-10x75-7643-YL-L, BM-25x75-7643-WT-L.',
  shortDescription: 'Brady BM-10x60-7643-WT-L i pięć innych rolek BM zawierają białe albo żółte zawieszki kablowe z poliuretanu B-7643 luzem, 250 sztuk na rolce. Do drukarek Brady M610 i M611.',
  description: 'Rolka Brady BM-10x60-7643-WT-L to materiał luzem: 250 zawieszek z poliuretanu B-7643. Materiał jest termoplastycznym poliuretanem polieterowym o grubości 0,45 mm. Powierzchnia zawieszki jest matowa. Na kablu zawieszkę utrzymują opaski przełożone przez otwory. Taśmę barwiącą zakłada się w osobnej kasecie M61.\n\nRodzina ma trzy rozmiary: 10 × 60, 10 × 75 i 25 × 75 mm. Każdy rozmiar jest biały albo żółty. Numery tej rodziny kończą się literą L. Kolorowe zawieszki z tego samego poliuretanu w szerokości 15 albo 25 mm są w osobnej rodzinie rolek BM. Kasety M6 z B-7643 mają po 50 zawieszek.\n\nB-7643 nie zawiera dodanych halogenów. Podczas pożaru wydziela niewiele dymu. Zawieszki są odporne na wodę, olej, chemikalia, wilgoć i ścieranie. Najniższa temperatura pracy to −40 °C, najwyższa 90 °C. Do nadruku służy taśma M61-R6010. W drukarce M710 stosuje się taśmę M7-R6000. Białe zawieszki wymagają taśmy serii R6000HF. Z rolek korzystają drukarki M610, M611 i M710. Obsługują je również BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/bulk-polyurethane-cable-tag-for-m710-m610-m611-cps-4556439',
  images: [
    '/images/products/brady/bm-10x60-7643-wt-l.png',
    '/images/products/brady/bm-25x75-7643-yl-l.png',
    '/images/products/brady/bm-10x75-7643-yl-l.png',
  ],
  imageDescriptions: [
    'Pudełko z rolką białych zawieszek Brady BM-10x60-7643-WT-L i wysuniętym paskiem',
    'Rolka żółtych zawieszek 25 × 75 mm Brady BM-25x75-7643-YL-L w pudełku',
    'Wąskie żółte zawieszki Brady BM-10x75-7643-YL-L wysunięte z pudełka',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM luzem: rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy, bezhalogenowy' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda, wilgoć' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 25 × 75 mm' },
    { name: 'Liczba sztuk na rolce', value: '250' },
    { name: 'Format', value: 'zawieszki wykrawane na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010; do M710: M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(BM_7643_L) },
  ],
  variants: warianty(BM_7643_L, ['Rozmiar', 'Kolor']),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość zawieszki oraz zawartość rolki.\n\nKażda rolka ma 250 zawieszek. Najszersza zawieszka ma 25 × 75 mm, najkrótsza 10 × 60 mm.',
    Kolor: 'Kolor materiału zawieszki.\n\nW tej rodzinie są tylko zawieszki białe i żółte. Na białych drukuje taśma serii R6000HF.',
  },
  faq: [
    { question: 'Czym ta rodzina różni się od kolorowych rolek BM z poliuretanu B-7643?', answer: 'Ta rodzina ma zawieszki białe i żółte w rozmiarach 10 × 60, 10 × 75 i 25 × 75 mm. Kolorowe rolki mają siedem kolorów w rozmiarach 15 × 75 i 25 × 75 mm.' },
    { question: 'Ile zawieszek jest na rolce BM-10x60-7643-WT-L?', answer: '250 sztuk. Tyle samo mają pozostałe rolki w tej rodzinie.' },
  ],
  applications: ['Oznaczanie kabli zasilających i sterowniczych', 'Okablowanie teleinformatyczne', 'Przewody narażone na olej i wilgoć'],
}

// B-7643, rolki BM luzem w siedmiu kolorach, szerokość 15 albo 25 mm.
const BM_7643_KOLOROWE: Zawieszka[] = [
  ['BM-15x75-7643-BL', '312171', '15', '75', 250, 'BL'],
  ['BM-15x75-7643-WT', '312175', '15', '75', 250, 'WT'],
  ['BM-15x75-7643-YL', '312176', '15', '75', 250, 'YL'],
  ['BM-15x75-7643-OR', '312173', '15', '75', 250, 'OR'],
  ['BM-15x75-7643-RD', '312174', '15', '75', 250, 'RD'],
  ['BM-15x75-7643-GN', '312172', '15', '75', 250, 'GN'],
  ['BM-15x75-7643-BK', '312170', '15', '75', 250, 'BK'],
  ['BM-25x75-7643-BL', '312178', '25', '75', 250, 'BL'],
  ['BM-25x75-7643-WT', '312182', '25', '75', 250, 'WT'],
  ['BM-25x75-7643-YL', '312183', '25', '75', 250, 'YL'],
  ['BM-25x75-7643-OR', '312180', '25', '75', 250, 'OR'],
  ['BM-25x75-7643-RD', '312181', '25', '75', 250, 'RD'],
  ['BM-25x75-7643-GN', '312179', '25', '75', 250, 'GN'],
  ['BM-25x75-7643-BK', '312177', '25', '75', 250, 'BK'],
]

// B-7643, rolki BM luzem w siedmiu kolorach, szerokość 10 mm (rodzina M710 z brady.eu cps-4556420).
const BM_7643_10MM: Zawieszka[] = [
  ['BM-10x60-7643-BL', '311960', '10', '60', 250, 'BL'],
  ['BM-10x60-7643-WT', '311964', '10', '60', 250, 'WT'],
  ['BM-10x60-7643-YL', '311965', '10', '60', 250, 'YL'],
  ['BM-10x60-7643-OR', '311962', '10', '60', 250, 'OR'],
  ['BM-10x60-7643-RD', '311963', '10', '60', 250, 'RD'],
  ['BM-10x60-7643-GN', '311961', '10', '60', 250, 'GN'],
  ['BM-10x60-7643-BK', '311959', '10', '60', 250, 'BK'],
  ['BM-10x75-7643-BL', '311967', '10', '75', 250, 'BL'],
  ['BM-10x75-7643-WT', '311971', '10', '75', 250, 'WT'],
  ['BM-10x75-7643-YL', '311972', '10', '75', 250, 'YL'],
  ['BM-10x75-7643-OR', '311969', '10', '75', 250, 'OR'],
  ['BM-10x75-7643-RD', '311970', '10', '75', 250, 'RD'],
  ['BM-10x75-7643-GN', '311968', '10', '75', 250, 'GN'],
  ['BM-10x75-7643-BK', '311966', '10', '75', 250, 'BK'],
]

export const bradyM6ZawieszkiPoliuretanBmKolorowe: Product = {
  ...wspolneM6,
  id: 'brady-bm-15x75-7643-bl',
  slug: 'brady-bm-15x75-7643-bl',
  name: 'Zawieszki z poliuretanu luzem Brady BM-15x75-7643-BL — materiał BM do M610, M611 i M710',
  seoTitle: 'Brady BM-15x75-7643-BL — kolorowe zawieszki PU luzem do M610',
  seoDescription: 'Zawieszki Brady z poliuretanu B-7643 luzem do M610 i M710: 7 kolorów, 10, 15, 25 mm, 250 szt. PN: BM-15x75-7643-BL, BM-10x60-7643-OR, BM-25x75-7643-BK.',
  shortDescription: 'Brady BM-15x75-7643-BL i 27 innych rolek BM zawierają zawieszki z poliuretanu B-7643 w siedmiu kolorach i czterech rozmiarach, po 250 sztuk. Rolki BM pasują do drukarek Brady M610, M611 i M710.',
  description: 'Brady BM-15x75-7643-BL to niebieskie zawieszki kablowe z poliuretanu B-7643, nawinięte luzem na rolkę. Rodzina obejmuje siedem kolorów zawieszek. Kolor ułatwia rozróżnienie grup przewodów. Matowy materiał ma grubość 0,45 mm. Zawieszkę mocuje się na kablu opaskami, przez otwory w jej końcach.\n\nZawieszki mają szerokość 10, 15 albo 25 mm. Wersje 15 × 75 i 25 × 75 mm mają pole nadruku 55 mm długości. Zawieszki 10 mm występują w dwóch długościach: 10 × 60 mm z polem nadruku 10 × 40 mm i 10 × 75 mm z polem 10 × 55 mm. Rolka zawiera 250 sztuk. Dostępne kolory to niebieski, biały, żółty, pomarańczowy, czerwony, zielony i czarny. Każdy kolor występuje w czterech rozmiarach. Białe i żółte zawieszki 10 mm z numerami kończącymi się na -L należą do osobnej rodziny rolek BM.\n\nMateriał nie ma dodanych halogenów. Spełnia wymagania normy IEC 61249-2-21. Jest odporny na oleje, wodę i ścieranie. Znosi też chemikalia oraz wilgotne otoczenie. Materiał wytrzymuje ujemną temperaturę do −40 °C i dodatnią do 90 °C. Materiał luzem pasuje do M610 i M611, a także do M710 bez adaptera. Obsługują go też starsze BMP61 i BMP71. Taśmę barwiącą zamawia się osobno: do M610 i M611 jest to M61-R6010, do M710 M7-R6000. Na czarnych zawieszkach drukuje biała taśma M61-R4410-WT, a w M710 M7-R4400-WT.',
  sameAs: 'https://www.brady.eu/labels/m710-m610-m611-polyurethane-tags-bulk-cps-4556426',
  images: [
    '/images/products/brady/bm-15x75-7643-bl.png',
    '/images/products/brady/bm-25x75-7643-or.png',
    '/images/products/brady/bm-15x75-7643-bk.png',
  ],
  imageDescriptions: [
    'Kartonowy podajnik z rolką niebieskich zawieszek Brady BM-15x75-7643-BL i jedną zawieszką',
    'Pomarańczowe zawieszki 25 × 75 mm Brady BM-25x75-7643-OR wysunięte z kartonu',
    'Rolka czarnych zawieszek Brady BM-15x75-7643-BK w kartonowym podajniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM luzem: rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy, bezhalogenowy' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda, wilgoć' },
    { name: 'Kolory', value: 'niebieski, biały, żółty, pomarańczowy, czerwony, zielony, czarny' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 15 × 75 / 25 × 75 mm' },
    { name: 'Pole nadruku', value: '10 × 40 mm (zawieszka 10 × 60 mm), 10 × 55, 15 × 55 albo 25 × 55 mm' },
    { name: 'Liczba sztuk na rolce', value: '250' },
    { name: 'Format', value: 'zawieszki wykrawane na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (zawieszki kolorowe i białe), M61-R4410-WT (zawieszki czarne); do M710: M7-R6000, M7-R4400-WT' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow([...BM_7643_KOLOROWE, ...BM_7643_10MM]) },
  ],
  variants: [
    ...warianty(BM_7643_KOLOROWE, ['Rozmiar', 'Kolor']),
    ...warianty(BM_7643_10MM, ['Rozmiar', 'Kolor']),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary kolorowej zawieszki z poliuretanu i ilość sztuk na jednej rolce.\n\nZawieszka ma 10, 15 albo 25 mm szerokości. Długość wynosi 75 mm, a w wersji 10 × 60 mm 60 mm. Pole nadruku ma 55 mm długości, w zawieszce 10 × 60 mm 40 mm.',
    Kolor: 'Kolor poliuretanu zawieszki.\n\nSiedem kolorów pozwala oznaczyć różne grupy przewodów. Na czarnym poliuretanie drukuje biała taśma, na pozostałych kolorach taśma serii R6000HF.',
  },
  faq: [
    { question: 'Jaką taśmą drukować na czarnych zawieszkach z poliuretanu?', answer: 'Białą taśmą M61-R4410-WT. Do drukarki M710 służy taśma M7-R4400-WT.' },
    { question: 'Ile miejsca na nadruk mają zawieszki z poliuretanu?', answer: 'Zawieszka 25 × 75 mm ma pole nadruku 25 × 55 mm, a zawieszka 15 × 75 mm pole 15 × 55 mm. W zawieszce 10 × 75 mm pole ma 10 × 55 mm, a w najkrótszej, 10 × 60 mm, 10 × 40 mm.' },
    { question: 'Czy rolki BM-7643 pasują do drukarki M710?', answer: 'Tak, bez adaptera materiałów. Rolki BM pasują do [Brady M610](/produkt/brady-m610), M611 i M710. W M710 zalecana jest taśma M7-R6000, a do czarnych zawieszek biała taśma M7-R4400-WT.' },
    { question: 'Czy zawieszki B-7643 są bezhalogenowe?', answer: 'Tak. Materiał nie ma dodanych halogenów i spełnia wymagania IEC 61249-2-21.' },
  ],
  applications: ['Kodowanie kabli kolorem', 'Okablowanie teleinformatyczne', 'Instalacje, w których liczy się mała emisja dymu'],
}

// B-7643 (TPU), kasety M6 po 50 zawieszek.
const M6_7643: Zawieszka[] = [
  ['M6-25x75-7643-OR', '312087', '25', '75', 50, 'OR'],
  ['M6-25x75-7643-RD', '312088', '25', '75', 50, 'RD'],
  ['M6-25x75-7643-BL', '312085', '25', '75', 50, 'BL'],
  ['M6-25x75-7643-GN', '312086', '25', '75', 50, 'GN'],
  ['M6-25x75-7643-YL', '312090', '25', '75', 50, 'YL'],
  ['M6-25x75-7643-WT', '312089', '25', '75', 50, 'WT'],
  ['M6-25x75-7643-BK', '312084', '25', '75', 50, 'BK'],
  ['M6-15x75-7643-WT', '312065', '15', '75', 50, 'WT'],
  ['M6-15x75-7643-YL', '312066', '15', '75', 50, 'YL'],
  ['M6-10X75-7643-WT', '316397', '10', '75', 50, 'WT'],
  ['M6-10X75-7643-YL', '316398', '10', '75', 50, 'YL'],
  ['M6-10X60-7643-WT', '316395', '10', '60', 50, 'WT'],
  ['M6-10X60-7643-YL', '316396', '10', '60', 50, 'YL'],
]

export const bradyM6ZawieszkiTpu: Product = {
  ...wspolneM6,
  id: 'brady-m6-25x75-7643-or',
  slug: 'brady-m6-25x75-7643-or',
  name: 'Zawieszki z termoplastycznego poliuretanu (TPU) Brady M6-25x75-7643-OR — kasety M6 do M610 i M611',
  seoTitle: 'Brady M6-25x75-7643-OR — zawieszki z TPU do M610',
  seoDescription: 'Zawieszki Brady z TPU B-7643 w kasetach M6: 50 szt., od 10 × 60 do 25 × 75 mm, 7 kolorów. PN: M6-25x75-7643-OR, M6-10X60-7643-YL, M6-25x75-7643-WT.',
  shortDescription: 'Brady M6-25x75-7643-OR i 12 innych kaset M6 zawierają po 50 zawieszek z termoplastycznego poliuretanu (TPU) B-7643. Do drukarek Brady M610 i M611.',
  description: 'Kasety Brady M6-25x75-7643-OR i pozostałe z tej rodziny zawierają zawieszki z termoplastycznego poliuretanu polieterowego (TPU) B-7643. W jednej kasecie jest 50 zawieszek. Kaseta mieści tylko materiał. Do nadruku potrzebna jest osobna kaseta M61 z taśmą barwiącą. Matowy TPU ma grubość 0,45 mm.\n\nRodzina ma 13 numerów. Pełną paletę siedmiu kolorów ma rozmiar 25 × 75 mm: pomarańczowy, czerwony, niebieski, zielony, żółty, biały i czarny. Na takiej zawieszce nadruk zajmuje obszar 25 × 55 mm. Węższe zawieszki, 15 × 75, 10 × 75 i 10 × 60 mm, są białe albo żółte. Zawieszka 15 × 75 mm ma pole nadruku 15 × 55 mm, a zawieszka 10 × 60 mm pole 10 × 40 mm.\n\nTPU nie ma dodanych halogenów, zgodnie z wymaganiami IEC 61249-2-21. Zawieszki są odporne na ścieranie i chemikalia. Wilgoć nie osłabia materiału. Zakres pracy TPU obejmuje temperatury od −40 do 90 °C. Czarne zawieszki wymagają taśmy M61-R4410-WT, a pozostałe kolory taśmy M61-R6010. Do M710 służą taśmy M7-R4400-WT i M7-R6000. Z kasetami współpracują M610, M611 i M710, a także BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/m610-m611-thermoplastic-polyether-polyurethane-tags-cps-5287283',
  images: [
    '/images/products/brady/m6-25x75-7643-or.png',
    '/images/products/brady/m6-25x75-7643-bl.png',
    '/images/products/brady/m6-25x75-7643-wt.png',
    '/images/products/brady/m6-10x60-7643-yl.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M6-25x75-7643-OR z rolką pomarańczowych zawieszek i wysuniętym paskiem',
    'Rolka niebieskich zawieszek 25 × 75 mm Brady M6-25x75-7643-BL na uchwycie kasety',
    'Białe zawieszki Brady M6-25x75-7643-WT na uchwycie kasety M6',
    'Rolka żółtych zawieszek Brady M6-10X60-7643-YL z otworami na opaski kablowe',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z zawieszkami kablowymi, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7643' },
    { name: 'Typ materiału', value: 'termoplastyczny poliuretan polieterowy (TPU), bezhalogenowy' },
    { name: 'Grubość', value: '0,45 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć' },
    { name: 'Kolory', value: '25 × 75 mm: pomarańczowy, czerwony, niebieski, zielony, żółty, biały, czarny; pozostałe rozmiary: biały, żółty' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 15 × 75 / 25 × 75 mm' },
    { name: 'Pole nadruku', value: '25 × 55 mm (25 × 75), 15 × 55 mm (15 × 75), 10 × 40 mm (10 × 60)' },
    { name: 'Liczba sztuk na rolce', value: '50' },
    { name: 'Format', value: 'zawieszki wykrawane w kasecie M6' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (zawieszki kolorowe i białe), M61-R4410-WT (zawieszki czarne); do M710: M7-R6000, M7-R4400-WT' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(M6_7643) },
  ],
  variants: warianty(M6_7643, ['Rozmiar', 'Kolor']),
  variantAttributeTooltips: {
    Rozmiar: 'Format zawieszki (szerokość na długość) i zawartość kasety M6.\n\nW kasecie jest zawsze 50 sztuk. Rozmiar 25 × 75 mm ma najwięcej kolorów.',
    Kolor: 'Kolor TPU, z którego wykonano zawieszkę.\n\nPięć dodatkowych kolorów jest tylko w rozmiarze 25 × 75 mm. Czarna zawieszka potrzebuje białej taśmy serii R4400.',
  },
  faq: [
    { question: 'Ile zawieszek jest w kasecie M6 z TPU B-7643?', answer: '50 sztuk w każdej kasecie, niezależnie od rozmiaru i koloru.' },
    { question: 'Które rozmiary zawieszek z TPU są kolorowe?', answer: 'Tylko 25 × 75 mm, w siedmiu kolorach. Węższe zawieszki są białe albo żółte.' },
    { question: 'Czy kaseta zawiera taśmę barwiącą?', answer: 'Nie. Taśmę wkłada się do [Brady M610](/produkt/brady-m610) w osobnej kasecie M61, na przykład M61-R6010.' },
  ],
  applications: ['Oznaczanie kabli i wiązek przewodów', 'Okablowanie teleinformatyczne', 'Kodowanie obwodów kolorem'],
}

// B-7598, kasety M6 po 100 zawieszek.
const M6_7598: Zawieszka[] = [
  ['M6-25x75-B7598-RD', '312080', '25', '75', 100, 'RD'],
  ['M6-25x75-B7598-GN', '312079', '25', '75', 100, 'GN'],
  ['M6-25x75-B7598-YL', '312083', '25', '75', 100, 'YL'],
  ['M6-25x75-B7598-BL', '312078', '25', '75', 100, 'BL'],
  ['M6-25x75-B7598-WT', '312082', '25', '75', 100, 'WT'],
  ['M6-25x75-B7598-BK', '312077', '25', '75', 100, 'BK'],
  ['M6-25x75-B7598-SV', '312081', '25', '75', 100, 'SV'],
  ['M6-15x75-7598-WT', '312063', '15', '75', 100, 'WT'],
  ['M6-15x75-7598-YL', '312064', '15', '75', 100, 'YL'],
  ['M6-10x75-7598-WT', '312054', '10', '75', 100, 'WT'],
  ['M6-10x75-7598-YL', '312055', '10', '75', 100, 'YL'],
  ['M6-10x60-7598-YL', '312053', '10', '60', 100, 'YL'],
]

export const bradyM6ZawieszkiPoliester: Product = {
  ...wspolneM6,
  id: 'brady-m6-25x75-b7598-rd',
  slug: 'brady-m6-25x75-b7598-rd',
  name: 'Zawieszki z poliestru Brady M6-25x75-B7598-RD — kasety M6 do M610 i M611',
  seoTitle: 'Brady M6-25x75-B7598-RD — zawieszki z poliestru do M610',
  seoDescription: 'Kasety Brady M6 ze 100 zawieszkami z poliestru B-7598, 7 kolorów, czytelne na zewnątrz do 10 lat. PN: M6-25x75-B7598-RD, M6-10x75-7598-YL, M6-25x75-B7598-SV.',
  shortDescription: 'Brady M6-25x75-B7598-RD i 11 innych kaset M6 zawierają po 100 zawieszek z błyszczącego poliestru B-7598 do oznaczeń na zewnątrz. Do drukarek Brady M610 i M611.',
  description: 'Kasety Brady M6-25x75-B7598-RD zawierają zawieszki kablowe z błyszczącego poliestru B-7598. Poliester ma 0,2 mm grubości. Zawieszki opisują przewody i kable teleinformatyczne. Stosuje się je także w instalacjach na zewnątrz. W kasecie jest 100 zawieszek, bez taśmy barwiącej.\n\nNa najszerszej zawieszce, 25 × 75 mm, można zadrukować obszar 25 × 55 mm. Ten rozmiar jest w siedmiu kolorach: czerwonym, zielonym, żółtym, niebieskim, białym, czarnym i srebrnym. Zawieszki 15 × 75 i 10 × 75 mm mają pole nadruku o długości 55 mm i są białe albo żółte. Zawieszka 10 × 60 mm z polem 10 × 40 mm jest w tej rodzinie żółta. Jej białą wersję opisuje osobna karta.\n\nNapis na poliestrze B-7598 pozostaje czytelny na zewnątrz nawet przez 10 lat. Poliester znosi temperaturę od −40 do 100 °C. Białe, czarne i srebrne zawieszki są bezhalogenowe (IEC 61249-2-21). Taśma M61-R4410-WT drukuje na czarnych zawieszkach, a M61-R6010 na pozostałych. Kasety pasują do M610, M611 i M710. Działają też w starszych BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/m610-m611-polyester-tags-cps-4556436',
  images: [
    '/images/products/brady/m6-25x75-b7598-rd.png',
    '/images/products/brady/m6-10x75-7598-yl.png',
    '/images/products/brady/m6-25x75-b7598-sv.png',
    '/images/products/brady/m6-25x75-b7598-wt.png',
  ],
  imageDescriptions: [
    'Kaseta Brady M6-25x75-B7598-RD z rolką czerwonych zawieszek z poliestru',
    'Wąskie żółte zawieszki 10 × 75 mm Brady M6-10x75-7598-YL na uchwycie kasety',
    'Rolka srebrnych zawieszek Brady M6-25x75-B7598-SV z wysuniętym paskiem',
    'Kaseta Brady M6-25x75-B7598-WT z białymi zawieszkami 25 × 75 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z zawieszkami kablowymi, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,2 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolory', value: '25 × 75 mm: czerwony, zielony, żółty, niebieski, biały, czarny, srebrny; 15 × 75 i 10 × 75 mm: biały, żółty; 10 × 60 mm: żółty' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 15 × 75 / 25 × 75 mm' },
    { name: 'Pole nadruku', value: '25 × 55 / 15 × 55 / 10 × 55 / 10 × 40 mm' },
    { name: 'Liczba sztuk na rolce', value: '100' },
    { name: 'Format', value: 'zawieszki wykrawane w kasecie M6' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe) — zawieszki białe, czarne i srebrne' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (zawieszki kolorowe i białe), M61-R4410-WT (zawieszki czarne); do M710: M7-R6000, M7-R4400-WT' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(M6_7598) },
  ],
  variants: warianty(M6_7598, ['Rozmiar', 'Kolor']),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary zawieszki w kasecie oraz ich ilość.\n\nWszystkie kasety mają po 100 sztuk. Zawieszki 75 mm mają pole nadruku długości 55 mm, a zawieszka 60 mm — 40 mm.',
    Kolor: 'Kolor poliestru zawieszki.\n\nSiedem kolorów ma tylko rozmiar 25 × 75 mm. Na czarnym poliestrze drukuje biała taśma serii R4400.',
  },
  faq: [
    { question: 'Czy zawieszki z poliestru B-7598 nadają się na zewnątrz?', answer: 'Tak. Nadruk pozostaje czytelny na zewnątrz do 10 lat. Poliester zachowuje właściwości od −40 do 100 °C.' },
    { question: 'Gdzie znaleźć białą poliestrową zawieszkę 10 × 60 mm?', answer: 'Ma osobną kartę z kasetą M6-10x60-7598-WT. W tej rodzinie ten rozmiar występuje tylko w kolorze żółtym.' },
    { question: 'Czy kasety pasują do Brady M710?', answer: 'Tak. W M710 stosuje się taśmy M7-R6000 albo M7-R4400-WT. Kasety pasują też do [Brady M610](/produkt/brady-m610) i M611.' },
  ],
  applications: ['Oznaczanie kabli na zewnątrz budynków', 'Okablowanie teleinformatyczne', 'Kodowanie przewodów kolorem'],
}

// B-7598, rolki BM luzem, tylko biały.
const BM_7598_BIALE: Zawieszka[] = [
  ['BM-25X75-7598-WT', '312168', '25', '75', 250, 'WT'],
  ['BM-15X75-7598-WT', '312161', '15', '75', 250, 'WT'],
  ['BM-10X75-7598-WT', '312154', '10', '75', 250, 'WT'],
  ['BM-10X60-7598-WT', '312147', '10', '60', 500, 'WT'],
]

export const bradyM6ZawieszkiPoliesterBmBiale: Product = {
  ...wspolneM6,
  id: 'brady-bm-25x75-7598-wt',
  slug: 'brady-bm-25x75-7598-wt',
  name: 'Zawieszki z poliestru luzem Brady BM-25X75-7598-WT — materiał BM do M610 i M611',
  seoTitle: 'Brady BM-25X75-7598-WT — białe zawieszki z poliestru do M610',
  seoDescription: 'Białe zawieszki Brady z poliestru B-7598 na rolkach BM, 250–500 szt., od −40 do 100 °C, bezhalogenowe. PN: BM-25X75-7598-WT, BM-10X60-7598-WT, BM-15X75-7598-WT.',
  shortDescription: 'Brady BM-25X75-7598-WT i trzy inne rolki BM zawierają białe zawieszki z poliestru B-7598 luzem, w czterech rozmiarach. Do drukarek Brady M610 i M611.',
  description: 'Brady BM-25X75-7598-WT to białe zawieszki z poliestru B-7598 na rolce luzem. Poliester ma błyszczące wykończenie i grubość 0,2 mm. Rodzina obejmuje cztery rozmiary w jednym kolorze. Rolkę BM zakłada się w drukarce razem z osobną kasetą taśmy barwiącej M61.\n\nSzerokość zawieszki to 10, 15 albo 25 mm. Zawieszki o szerokości 10 mm mają długość 60 albo 75 mm. Szersze zawieszki mają długość 75 mm. Rozmiar 10 × 60 mm jest po 500 sztuk na rolce, pozostałe po 250. Kolorowe zawieszki z tego samego poliestru, bez podkładu, opisuje osobna karta rolek BM.\n\nPoliester B-7598 zaprojektowano do oznaczania kabli na zewnątrz. Czytelność nadruku utrzymuje się do 10 lat. Dolna granica temperatury pracy to −40 °C, a górna 100 °C. Białe zawieszki spełniają wymagania IEC 61249-2-21 dla materiałów bezhalogenowych. Do nadruku stosuje się taśmy serii R4400 albo R6000HF. Zalecane kasety z taśmą to M61-R6010 oraz M7-R6000 do M710. Rolkę BM-25X75-7598-WT i pozostałe z rodziny obsługują M610, M611 i M710, a z wcześniejszych modeli BMP61 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/m710-m610-m611-polyester-tags-bulk-cps-4556428',
  images: [
    '/images/products/brady/bm-25x75-7598-wt.png',
    '/images/products/brady/bm-10x60-7598-wt.png',
    '/images/products/brady/bm-15x75-7598-wt.png',
  ],
  imageDescriptions: [
    'Kartonowy podajnik z rolką białych zawieszek Brady BM-25X75-7598-WT i jedną zawieszką 25 × 75 mm',
    'Wąski pasek białych zawieszek 10 × 60 mm Brady BM-10X60-7598-WT wysunięty z kartonu',
    'Rolka białych zawieszek 15 × 75 mm Brady BM-15X75-7598-WT w podajniku',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał BM luzem: rolka zawieszek kablowych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7598' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,2 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Mocowanie', value: 'opaskami kablowymi przez otwory w zawieszce' },
    { name: 'Temperatura pracy', value: 'od −40 do 100 °C' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zawieszki', value: '10 × 60 / 10 × 75 / 15 × 75 / 25 × 75 mm' },
    { name: 'Liczba sztuk na rolce', value: '500 (10 × 60 mm) albo 250 (pozostałe rozmiary)' },
    { name: 'Format', value: 'zawieszki wykrawane na rolce BM' },
    { name: 'Normy', value: 'IEC 61249-2-21 (bezhalogenowe)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (seria R4400 albo R6000HF); do M710: M7-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M6 },
    { name: 'Numery artykułów Brady', value: numeryArtykulow(BM_7598_BIALE) },
  ],
  variants: warianty(BM_7598_BIALE, ['Rozmiar']),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość × długość białej zawieszki i liczba sztuk na rolce BM.\n\nNajwięcej sztuk, 500, mieści rolka najkrótszych zawieszek 10 × 60 mm. Pozostałe rolki mają po 250.',
  },
  faq: [
    { question: 'Ile białych zawieszek jest na rolce BM z poliestru B-7598?', answer: 'Rolka z zawieszkami 10 × 60 mm ma 500 sztuk. Na rolkach z dłuższymi zawieszkami, 75 mm, jest po 250 sztuk.' },
    { question: 'Gdzie są kolorowe zawieszki z poliestru B-7598 na rolkach BM?', answer: 'W osobnej rodzinie rolek BM bez podkładu. Ma ona te same cztery rozmiary w sześciu kolorach.' },
  ],
  applications: ['Oznaczanie kabli w instalacjach zewnętrznych', 'Duże serie oznaczeń przewodów', 'Okablowanie teleinformatyczne'],
}

export const bradyM6ZawieszkiKablowe: Product[] = [
  bradyM6ZawieszkiPoliester,
  bradyM6ZawieszkaPoliester10x60,
  bradyM6ZawieszkiTpu,
  bradyM6ZawieszkiPoliesterBmKolorowe,
  bradyM6ZawieszkiPoliesterBmBiale,
  bradyM6ZawieszkiPoliuretanBmKolorowe,
  bradyM6ZawieszkiPoliuretanBmL,
  bradyM6ZawieszkiPoliuretan2x15,
  bradyM6ZawieszkiPoliuretan2x10,
]

export const bradyM6ZawieszkiKabloweSekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = {
  'brady-m6-25x75-b7598-rd': 'kable',
  'brady-m6-10x60-7598-wt': 'kable',
  'brady-m6-25x75-7643-or': 'kable',
  'brady-bm-25x75-7598-yl': 'kable',
  'brady-bm-25x75-7598-wt': 'kable',
  'brady-bm-15x75-7643-bl': 'kable',
  'brady-bm-10x60-7643-wt-l': 'kable',
  'brady-bm-15x75-2-7643-yl': 'kable',
  'brady-bm-10x60-2-7643-wt': 'kable',
}
