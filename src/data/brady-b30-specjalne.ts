import type { Product } from './products'
import { wspolneB30 } from './brady-b30-wspolne'

// Materiały specjalne Brady B30 / B30C do S3100: poliimid, Tedlar (PVF), taśma magnetyczna, odblaskowa, ToughStripe,
// papier rozpuszczalny w wodzie, ToughWash (także wykrywalny przez wykrywacze metali) i zawieszki z poliestru. 14.11.2026.

// ---------------------------------------------------------------------------
// Tedlar B-437 — taśma samogasnąca do przewodów (pid-b30c-4000-437), jeden PN
// ---------------------------------------------------------------------------

export const bradyB30Tedlar437: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-437',
  slug: 'brady-b30c-4000-437',
  name: 'Taśma ciągła z folii PVF Brady Tedlar B30C-4000-437 — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady Tedlar B30C-4000-437 — taśma samogasnąca do S3100 i S3700',
  seoDescription: 'Taśma ciągła Brady Tedlar B-437 do S3100 i S3700: folia PVF, samogasnąca, od −70 do 135 °C, 101,6 mm × 45,72 m. PN: B30C-4000-437, nr art. 143579.',
  shortDescription: 'Brady Tedlar B30C-4000-437 to biała, samogasnąca taśma ciągła z folii PVF o wymiarach 101,6 mm × 45,72 m, do znakowania przewodów i kabli. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B30C-4000-437 to taśma ciągła z folii poliwinylofluorkowej (PVF), znanej pod nazwą handlową Tedlar. Folia jest biała i matowa, a trwały klej akrylowy wiąże zarówno z powierzchniami gładkimi, jak i chropowatymi. Materiał jest samogasnący, co oznacza, że nie podtrzymuje palenia po odsunięciu płomienia. Opracowano go do znakowania przewodów i kabli, także w postaci owijki na przewodzie.\n\nRolka ma szerokość 101,6 mm i długość 45,72 m, a folia ma grubość 0,091 mm. Rozmiar etykiety ustawia się w oprogramowaniu przed drukiem. Folia jest też trudnopalna, nadaje się do trudnych warunków pracy i służy do oznaczania komponentów, urządzeń oraz instalacji elektrycznych.\n\nFolia znosi trudne warunki pracy. Zakres temperatur wynosi od −70 do 135 °C. Norma MIL-M-87958 opisuje samoprzylepne znaczniki przewodów i kabli, a ta folia jest z nią zgodna. Nadruk wykonuje taśma barwiąca B30-R4300, kupowana osobno. Rolkę Tedlar ładuje się do S3100 albo S3700, ale także do modeli S3000, i3300, i4311, i5300, BBP35 i BBP37.',
  sameAs: 'https://www.brady.eu/labels/pvf-tape-for-bbp35-bbp37-s3xxx-i3300-printers-pid-b30c-4000-437',
  images: ['/images/products/brady/b30c-4000-437.png'],
  imageDescriptions: ['Rolka Brady B30C-4000-437 na uchwycie z wysuniętym paskiem białej taśmy z folii Tedlar o szerokości 101,6 mm'],
  specifications: [
    { name: 'Part Number', value: 'B30C-4000-437' },
    { name: 'Numer artykułu Brady', value: '143579' },
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Tedlar B-437' },
    { name: 'Typ materiału', value: 'folia poliwinylofluorkowa (PVF), samogasnąca' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,091 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 135 °C' },
    { name: 'Szerokość taśmy', value: '101,6 mm' },
    { name: 'Długość taśmy', value: '45,72 m' },
    { name: 'Normy', value: 'MIL-M-87958 (znaczniki przewodów i kabli)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, i4311, i5300, BBP35, BBP37' },
  ],
  faq: [
    { question: 'Co oznacza, że folia Tedlar B-437 jest samogasnąca?', answer: 'Materiał nie podtrzymuje palenia po odsunięciu źródła ognia. Dlatego nadaje się do oznaczania przewodów i miejsc, w których wymagana jest taka właściwość.' },
    { question: 'W jakim zakresie temperatur pracuje taśma B30C-4000-437?', answer: 'Od −70 do 135 °C. Folia jest matowa, a klej akrylowy wiąże z powierzchniami gładkimi i chropowatymi.' },
    { question: 'Jaką taśmę barwiącą zamówić do taśmy Tedlar?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze drukarki serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Znakowanie przewodów i kabli', 'Owijki na przewodach', 'Oznaczanie elementów elektrycznych i urządzeń'],
}

// ---------------------------------------------------------------------------
// Taśma magnetyczna B-509 (cps-3069352)
// ---------------------------------------------------------------------------

const DRUKARKI_B30 = 'S3100, S3700, S3000, i3300, i4311, i5300, BBP30, BBP31, BBP33, BBP35, BBP37'

// [PN, nr art., szerokość, kolor]
const MAGNETYCZNA_509: [string, string, string, string][] = [
  ['B30C-4250-509-WT', '117916', '107,95', 'WT'],
  ['B30C-2500-509-WT', '117917', '63,5', 'WT'],
  ['B30C-4250-509-YL', '117918', '107,95', 'YL'],
  ['B30C-2500-509-YL', '117919', '63,5', 'YL'],
]

const KOLORY: Record<string, string> = { WT: 'Biały', YL: 'Żółty', OR: 'Pomarańczowy', SL: 'Srebrny' }
const KOLORY_ZENSKIE: Record<string, string> = { WT: 'biała', YL: 'żółta', OR: 'pomarańczowa', SL: 'srebrna' }

export const bradyB30Magnetyczna509: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4250-509-wt',
  slug: 'brady-b30c-4250-509-wt',
  name: 'Taśma magnetyczna Brady B30C-4250-509-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4250-509-WT — taśma magnetyczna do S3100 i S3700',
  seoDescription: 'Taśma magnetyczna Brady B-509 do S3100 i S3700, bez kleju, wielokrotnego użytku: 63,5 i 107,95 mm × 7,62 m. PN: B30C-4250-509-WT, B30C-2500-509-YL.',
  shortDescription: 'Brady B30C-4250-509-WT i trzy inne rolki magnetycznej taśmy B-509 o szerokości 63,5 lub 107,95 mm, białe albo żółte, bez kleju. Do drukarek Brady S3100 i S3700.',
  description: 'Magnetyczna taśma B-509 jest wykonana z poliestru i nie ma kleju. Etykieta trzyma się dzięki magnesowi, więc można ją przestawić lub zdjąć i użyć ponownie. Takie oznaczenia pasują do półek, regałów i szuflad, na których zawartość często się zmienia. Materiał pomaga wdrażać metody lean i 5S i nadaje się też do znakowania ogólnego oraz oznaczeń bezpieczeństwa. Nadruk wykonuje się termotransferem.\n\nRolka mieści 7,62 m taśmy. Szerokość wynosi 63,5 mm albo 107,95 mm, a kolor jest biały lub żółty. Folia ma 0,457 mm grubości i matową powierzchnię. Wszystkie cztery wersje różnią się tylko szerokością oraz kolorem. Długość każdej etykiety zależy od projektu, bo rolka nie ma podziałów.\n\nNa wolnym powietrzu taśma zachowuje trwałość średnio przez 3–5 lat. Nie szkodzą jej woda, olej, ścieranie, łagodne chemikalia ani umiarkowane ciepło. Taśma pracuje w temperaturach od −18 do 70 °C. Kasetę z taśmą barwiącą B30-R10000 kupuje się osobno. Rolki pasują do S3100 i S3700, do starszej S3000, a także do i3300, i4311, i5300 oraz do pięciu modeli BBP (30, 31, 33, 35 i 37).',
  sameAs: 'https://www.brady.eu/labels/b30-series-magnetic-labels-cps-3069352',
  images: [
    '/images/products/brady/b30c-4250-509-wt.png',
    '/images/products/brady/b30c-2500-509-yl.png',
    '/images/products/brady/b30c-4250-509-yl.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4250-509-WT na uchwycie z wysuniętym paskiem białej taśmy magnetycznej o szerokości 107,95 mm',
    'Rolka Brady B30C-2500-509-YL z żółtą taśmą magnetyczną o szerokości 63,5 mm',
    'Rolka Brady B30C-4250-509-YL z żółtą taśmą magnetyczną o szerokości 107,95 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-509' },
    { name: 'Typ materiału', value: 'poliester magnetyczny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'brak; materiał magnetyczny' },
    { name: 'Grubość', value: '0,457 mm' },
    { name: 'Temperatura pracy', value: 'od −18 do 70 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz średnio 3–5 lat' },
    { name: 'Odporność', value: 'ścieranie, łagodne chemikalia, olej, woda, umiarkowane ciepło' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy', value: '63,5 / 107,95 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '7,62 m' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: MAGNETYCZNA_509.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: MAGNETYCZNA_509.map(([pn, , szer, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} taśma magnetyczna ${szer} mm × 7,62 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 7,62 m`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 63,5 albo 107,95 mm, a na rolce jest 7,62 m materiału.',
    Kolor: 'Kolor magnetycznej folii poliestrowej.\n\nKażda szerokość jest dostępna jako biała i żółta.',
  },
  faq: [
    { question: 'Dlaczego taśma magnetyczna B-509 nie ma kleju?', answer: 'Etykieta trzyma się dzięki magnesowi. Można ją zdjąć, przestawić i użyć ponownie, na przykład na półkach i regałach przy metodzie 5S.' },
    { question: 'Jak długo taśma B-509 służy na zewnątrz?', answer: 'Średnio od 3 do 5 lat. Zakres temperatur pracy to od −18 do 70 °C, a materiał znosi olej, wodę i łagodne chemikalia.' },
    { question: 'Jaką taśmę barwiącą zamówić do taśmy magnetycznej?', answer: 'Zaleca się taśmę barwiącą B30-R10000. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze modele serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Półki, regały i szuflady z oznaczeniami do przestawiania', 'Wdrażanie metod lean i 5S', 'Znakowanie ogólne i oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// ToughStripe B-483A — taśma do oznaczania podłóg z folią ochronną B-634 (cps-3069353); bez wycofanych PN
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, kolor, taśma barwiąca]
const R6000 = 'B30-R6000'
const R4400 = 'B30-R4400-WT'
const TOUGHSTRIPE: [string, string, string, string, string][] = [
  ['B30C-1125-483WT-KT', '139950', '28,58', 'WT', R6000],
  ['B30C-1125-483YL-KT', '139946', '28,58', 'YL', R6000],
  ['B30C-1125-483RD-KT', '139942', '28,58', 'RD', R4400],
  ['B30C-1125-483GN-KT', '139936', '28,58', 'GN', R4400],
  ['B30C-1125-483BL-KT', '139939', '28,58', 'BL', R4400],
  ['B30C-2250-483WT-KT', '139949', '57,15', 'WT', R6000],
  ['B30C-2250-483YL-KT', '139945', '57,15', 'YL', R6000],
  ['B30C-2250-483OR-KT', '139929', '57,15', 'OR', R6000],
  ['B30C-2250-483RD-KT', '139941', '57,15', 'RD', R4400],
  ['B30C-2250-483GN-KT', '139935', '57,15', 'GN', R4400],
  ['B30C-2250-483BL-KT', '139938', '57,15', 'BL', R4400],
  ['B30C-2250-483BK-KT', '139932', '57,15', 'BK', R4400],
  ['B30C-3000-483WT-KT', '139948', '76,2', 'WT', R6000],
  ['B30C-3000-483YL-KT', '139944', '76,2', 'YL', R6000],
  ['B30C-4000-483WT-KT', '139947', '101,6', 'WT', R6000],
  ['B30C-4000-483YL-KT', '139943', '101,6', 'YL', R6000],
  ['B30C-4000-483OR-KT', '139928', '101,6', 'OR', R6000],
  ['B30C-4000-483RD-KT', '139940', '101,6', 'RD', R4400],
  ['B30C-4000-483GN-KT', '139934', '101,6', 'GN', R4400],
  ['B30C-4000-483BL-KT', '139937', '101,6', 'BL', R4400],
]

const KOLORY_ZENSKIE_TS: Record<string, string> = { WT: 'biała', YL: 'żółta', OR: 'pomarańczowa', RD: 'czerwona', GN: 'zielona', BL: 'niebieska', BK: 'czarna' }
const KOLORY_TS: Record<string, string> = { WT: 'Biały', YL: 'Żółty', OR: 'Pomarańczowy', RD: 'Czerwony', GN: 'Zielony', BL: 'Niebieski', BK: 'Czarny' }

export const bradyB30ToughStripe: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-483wt-kt',
  slug: 'brady-b30c-4000-483wt-kt',
  name: 'Taśma do oznaczania podłóg Brady ToughStripe B30C-4000-483WT-KT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady ToughStripe B30C-4000-483WT-KT — do podłóg, S3100 i S3700',
  seoDescription: 'Taśma do oznaczania podłóg Brady ToughStripe do S3100 i S3700: poliester z folią ochronną, 28,58–101,6 mm. PN: B30C-4000-483WT-KT, B30C-2250-483RD-KT.',
  shortDescription: 'Brady ToughStripe B30C-4000-483WT-KT i 19 innych wersji taśmy do oznaczania podłóg z poliestru B-483A z folią ochronną, w siedmiu kolorach. Do drukarek Brady S3100 i S3700.',
  description: 'Brady ToughStripe to zestaw do znakowania podłóg: rolka taśmy z poliestru B-483A i rolka folii ochronnej z poliestru B-634. Taśma ma trwały klej kauczukowy, który mocno przylega do podłóg o niskiej energii powierzchniowej, jeśli położy się na niej dołączoną folię. Błyszczący poliester drukuje się termotransferem. Pokryte folią oznaczenie znosi ruch wózków widłowych. Zestaw służy do wyznaczania stref, oznaczeń bezpieczeństwa oraz stanowisk w metodach lean i 5S, a także do ogólnej identyfikacji.\n\nTaśma ma 30,48 m długości i grubość 0,203 mm. Szerokość mieści się między 28,58 a 101,6 mm, w czterech wersjach. Kolory to czerwony, pomarańczowy, żółty, zielony, niebieski, biały oraz czarny, przy czym nie każdy kolor wchodzi w każdą szerokość.\n\nTaśma jest przeznaczona do pracy w temperaturach od −18 do 54 °C. Zestaw ma zatwierdzenie UL oraz akceptację CSA. Do białej, żółtej i pomarańczowej taśmy zaleca się taśmę barwiącą B30-R6000, a do czerwonej, zielonej, niebieskiej i czarnej B30-R4400-WT. Taśmę barwiącą kupuje się osobno. Do druku służą S3100 i S3700.',
  sameAs: 'https://www.brady.eu/labels/b30-series-toughstripe-printable-floor-marking-tape-cps-3069353',
  images: [
    '/images/products/brady/b30c-4000-483wt-kt.png',
    '/images/products/brady/b30c-4000-483yl-kt.png',
    '/images/products/brady/b30c-4000-483rd-kt.png',
  ],
  imageDescriptions: [
    'Zestaw Brady ToughStripe B30C-4000-483WT-KT: rolka białej taśmy 101,6 mm na uchwycie i rolka folii ochronnej',
    'Zestaw Brady ToughStripe B30C-4000-483YL-KT: rolka żółtej taśmy 101,6 mm i rolka folii ochronnej',
    'Zestaw Brady ToughStripe B30C-4000-483RD-KT: rolka czerwonej taśmy 101,6 mm i rolka folii ochronnej',
  ],
  specifications: [
    { name: 'Typ', value: 'Zestaw: rolka taśmy ciągłej B30C do oznaczania podłóg i rolka folii ochronnej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughStripe B-483A (poliester) z folią ochronną z poliestru B-634' },
    { name: 'Typ materiału', value: 'poliester z nakładką poliestrową' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, kauczukowy; do podłóg o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,203 mm' },
    { name: 'Temperatura pracy', value: 'od −18 do 54 °C' },
    { name: 'Odporność', value: 'ruch wózków widłowych (z folią ochronną)' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, czerwony, zielony, niebieski, czarny' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Normy', value: 'UL (zatwierdzenie), CSA (akceptacja)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000 (biała, żółta, pomarańczowa); B30-R4400-WT (czerwona, zielona, niebieska, czarna)' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, i4311, i5300, BBP35, BBP37' },
    { name: 'Numery artykułów Brady', value: TOUGHSTRIPE.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TOUGHSTRIPE.map(([pn, , szer, kolor, tasma]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE_TS[kolor]} taśma do oznaczania podłóg ${szer} mm × 30,48 m z folią ochronną`,
    // Miękki dywiz w „Pomarańczowy”: zapas szerokości tabeli przy 1024 px (nazwy wariantów bez zmian).
    attributes: { Rozmiar: `ciągła ${szer} mm × 30,48 m`, Kolor: KOLORY_TS[kolor].replace('Pomarańczowy', 'Poma\u00ADrań\u00ADczowy'), Barwiąca: tasma },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 28,58, 57,15, 76,2 albo 101,6 mm. Każda taśma ma 30,48 m.',
    Kolor: 'Kolor taśmy do oznaczania podłóg.\n\nDostępne są kolory: biały, żółty, pomarańczowy, czerwony, zielony, niebieski i czarny. Szerokość 76,2 mm występuje tylko jako biała i żółta.',
    Barwiąca: 'Taśma barwiąca zalecana do danego koloru.\n\nDo białej, żółtej i pomarańczowej taśmy zaleca się B30-R6000, a do czerwonej, zielonej, niebieskiej i czarnej B30-R4400-WT.',
  },
  faq: [
    { question: 'Do czego służy folia ochronna w zestawie ToughStripe?', answer: 'Folia z poliestru B-634 wchodzi w skład zestawu. Z folią taśma dobrze przylega do podłóg o niskiej energii powierzchniowej i znosi ruch wózków widłowych.' },
    { question: 'Jaką taśmę barwiącą zamówić do taśmy ToughStripe?', answer: 'Do białej, żółtej i pomarańczowej zaleca się B30-R6000, a do czerwonej, zielonej, niebieskiej i czarnej B30-R4400-WT. Taśmę drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700).' },
    { question: 'W jakich temperaturach można używać taśmy ToughStripe?', answer: 'Od −18 do 54 °C. Klej jest trwały, kauczukowy, a powierzchnia poliestru błyszcząca.' },
  ],
  applications: ['Oznaczanie podłóg i stref', 'Wdrażanie metod lean i 5S', 'Oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// Papier rozpuszczalny w wodzie B-403 (cps-3079468)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość]
const PAPIER_403: [string, string, string][] = [
  ['B30C-1125-403-WT', '149268', '28,58'],
  ['B30C-2250-403-WT', '149269', '57,15'],
  ['B30C-3000-403-WT', '149270', '76,2'],
  ['B30C-4000-403-WT', '149271', '101,6'],
]

export const bradyB30Papier403: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-403-wt',
  slug: 'brady-b30c-4000-403-wt',
  name: 'Papier rozpuszczalny w wodzie Brady B30C-4000-403-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-403-WT — papier wodorozpuszczalny, S3100 i S3700',
  seoDescription: 'Papier Brady B-403 rozpuszczalny w wodzie do S3100 i S3700: 28,58–101,6 mm × 30,48 m, do 100 °C. PN: B30C-1125-403-WT, B30C-2250-403-WT, B30C-4000-403-WT.',
  shortDescription: 'Brady B30C-4000-403-WT i trzy inne rolki białego papieru B-403, który razem z klejem rozpuszcza się w wodzie. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-403 to biały papier rozpuszczalny w wodzie, z klejem akrylowym, który także się rozpuszcza. Etykieta jest usuwalna: można ją zdjąć z podłoża przez zmoczenie, więc papier nadaje się do oznaczeń, które mają zniknąć po użyciu. Taśmę stosuje się w laboratoriach i magazynach, do śledzenia środków trwałych oraz do znakowania ogólnego. Powierzchnia jest matowa, a klej wiąże z gładkimi powierzchniami, dlatego podłoże powinno być gładkie.\n\nRolka ma 30,48 m taśmy ciągłej. Rolki mają cztery szerokości: najwęższa to 28,58 mm, a najszersza 101,6 mm. Papier ma 0,0762 mm grubości i zawsze jest biały. Wersje różnią się wyłącznie szerokością rolki, a każda zawiera tyle samo materiału. Długość etykiety wybiera się przy projektowaniu wydruku.\n\nPapier znosi temperatury od −70 do 100 °C. Taśmę barwiącą B30-R4300 sprzedaje się w osobnej kasecie. Papier drukuje się w S3100 i S3700, w drukarkach BBP o numerach 30, 31, 33, 35 oraz 37 i w modelach i3300, i4311, i5300 oraz S3000.',
  sameAs: 'https://www.brady.eu/labels/dissolvable-paper-tape-for-bbp3x-s3xxx-i3300-printers-cps-3079468',
  images: [
    '/images/products/brady/b30c-4000-403-wt.png',
    '/images/products/brady/b30c-1125-403-wt.png',
    '/images/products/brady/b30c-2250-403-wt.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4000-403-WT na uchwycie z wysuniętym paskiem białego papieru rozpuszczalnego w wodzie 101,6 mm',
    'Rolka Brady B30C-1125-403-WT z wąskim paskiem białego papieru 28,58 mm',
    'Rolka Brady B30C-2250-403-WT z białym papierem rozpuszczalnym w wodzie 57,15 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-403' },
    { name: 'Typ materiału', value: 'papier rozpuszczalny w wodzie' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'akrylowy, rozpuszczalny w wodzie; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'etykieta usuwalna, rozpuszczalna w wodzie' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 76,2 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '30,48 m' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: PAPIER_403.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: PAPIER_403.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biały papier rozpuszczalny w wodzie ${szer} mm × 30,48 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 30,48 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 28,58, 57,15, 76,2 albo 101,6 mm. Na każdej rolce jest 30,48 m białego papieru.',
  },
  faq: [
    { question: 'Co dzieje się z etykietą B-403 w kontakcie z wodą?', answer: 'Papier i klej rozpuszczają się w wodzie. Dzięki temu etykietę można usunąć z podłoża, na przykład w laboratorium.' },
    { question: 'Jaki zakres temperatur obejmuje papier B-403?', answer: 'Od −70 do 100 °C. Klej akrylowy wiąże z powierzchniami gładkimi, a wykończenie papieru jest matowe.' },
    { question: 'Jaką taśmę barwiącą zamówić do papieru B-403?', answer: 'Zaleca się B30-R4300. Taśmę drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze modele serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Znakowanie laboratoryjne', 'Oznaczanie w magazynie', 'Śledzenie środków trwałych'],
}

// ---------------------------------------------------------------------------
// ToughWash B-855 — taśma ciągła (cps-3069351) i etykiety wykrawane CAUTION / WARNING (cps-3079461); bez wycofanego B30-25-855-DANG
// ---------------------------------------------------------------------------

const DRUKARKI_855 = 'S3100, S3700, S3000, i3300, i4311, BBP30, BBP31, BBP33, BBP35, BBP37'

// [PN, nr art., szerokość, kolor]
const TOUGHWASH_855_CIAGLE: [string, string, string, string][] = [
  ['B30C-1125-855-WT', '711229', '28,58', 'WT'],
  ['B30C-1125-855-YL', '711228', '28,58', 'YL'],
  ['B30C-2250-855-WT', '711225', '57,15', 'WT'],
  ['B30C-2250-855-YL', '711224', '57,15', 'YL'],
  ['B30C-4000-855-WT', '711227', '101,6', 'WT'],
  ['B30C-4000-855-YL', '711226', '101,6', 'YL'],
]

export const bradyB30ToughWash855: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-855-yl',
  slug: 'brady-b30c-4000-855-yl',
  name: 'Taśma i etykiety odporne na mycie Brady ToughWash B30C-4000-855-YL — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady ToughWash B30C-4000-855-YL — na mycie do S3100 i S3700',
  seoDescription: 'Brady ToughWash B-855 do S3100 i S3700: taśma 15,24 m i etykiety CAUTION lub WARNING, odporne na mycie, do 110 °C. PN: B30C-4000-855-YL, B30-25-855-CAUT.',
  shortDescription: 'Brady ToughWash B30C-4000-855-YL i siedem innych wersji matowego poliestru B-855: taśma ciągła oraz etykiety CAUTION i WARNING, odporne na mycie w zakładach spożywczych. Do drukarek Brady S3100 i S3700.',
  description: 'ToughWash B-855 to matowa folia poliestrowa na trwałym kleju akrylowym, wykonana dla przemysłu spożywczego i napojów. Nadruk pozostaje czytelny po wielu myciach, także w wysokiej temperaturze i przy mocnych środkach chemicznych. Próbę mycia przeprowadzono gorącą wodą (do 80 °C) przy ciśnieniu sięgającym 1500 PSI, czyli około 103 bar. Służy do znakowania obiektów i miejsc pracy oraz do oznaczeń bezpieczeństwa.\n\nKarta obejmuje dwie formy. W formie taśmy ciągłej na rolce nawinięto 15,24 m materiału. Szerokości to 28,58, 57,15 oraz 101,6 mm, a kolory biały i żółty. Etykiety wykrawane mają 101,6 × 152,4 mm i po 100 sztuk na rolce. Na białym tle noszą fabryczny nagłówek CAUTION (ostrożnie) albo WARNING (ostrzeżenie), a pole nadruku wynosi 70 × 146 mm. Poliester ma 0,178 mm grubości.\n\nMateriał znosi temperatury od −40 do 110 °C, a naklejać go można od 4 °C na podłoża gładkie. Jest odporny na ścieranie, chemikalia i mycie. Kasetę z taśmą barwiącą B30-R6000 kupuje się osobno. Rolkę B-855 obsługują S3100 i S3700 oraz pozostałe drukarki z listy zgodności w specyfikacji.',
  sameAs: 'https://www.brady.eu/labels/b30-series-toughwash-washdown-resistant-labels-cps-3069351',
  images: [
    '/images/products/brady/b30c-4000-855-yl.png',
    '/images/products/brady/b30-25-855-caut.png',
    '/images/products/brady/b30-25-855-warn.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4000-855-YL na uchwycie z wysuniętym paskiem żółtej taśmy ToughWash 101,6 mm',
    'Rolka etykiet Brady B30-25-855-CAUT z białymi etykietami i żółtym nagłówkiem CAUTION',
    'Rolka etykiet Brady B30-25-855-WARN z białymi etykietami i pomarańczowym nagłówkiem WARNING',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C albo etykiet wykrawanych B30, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughWash B-855' },
    { name: 'Typ materiału', value: 'poliester odporny na mycie' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,178 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 110 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Warunki pracy', value: 'mycie wodą do 80 °C pod ciśnieniem do 1500 PSI' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, mycie' },
    { name: 'Kolory', value: 'biały, żółty (taśma ciągła); biały z nagłówkiem czarno-żółtym lub czarno-pomarańczowym (etykiety)' },
    { name: 'Szerokość i długość taśmy', value: '28,58 / 57,15 / 101,6 mm × 15,24 m (taśma ciągła)' },
    { name: 'Wymiary etykiety', value: '101,6 × 152,4 mm (etykiety wykrawane)' },
    { name: 'Pole nadruku', value: '70 × 146 mm (etykiety wykrawane)' },
    { name: 'Liczba sztuk na rolce', value: '100 (etykiety wykrawane)' },
    { name: 'Nadruk fabryczny', value: 'nagłówek CAUTION lub WARNING (etykiety wykrawane)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_855 },
    { name: 'Numery artykułów Brady', value: `${TOUGHWASH_855_CIAGLE.map(([pn, art]) => `${pn}: ${art}`).join('; ')}; B30-25-855-CAUT: 711232; B30-25-855-WARN: 711230` },
  ],
  variants: [
    ...TOUGHWASH_855_CIAGLE.map(([pn, , szer, kolor]) => ({
      partNumber: pn,
      name: `Brady ToughWash ${pn} — ${KOLORY_ZENSKIE[kolor]} taśma ciągła ${szer} mm × 15,24 m`,
      attributes: { Rozmiar: `ciągła ${szer} mm × 15,24 m`, Kolor: KOLORY[kolor] },
      availability: 'unavailable' as const,
    })),
    { partNumber: 'B30-25-855-CAUT', name: 'Brady ToughWash B30-25-855-CAUT — 100 białych etykiet 101,6 × 152,4 mm z nagłówkiem CAUTION', attributes: { Rozmiar: '101,6 × 152,4 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'CAUTION (żółty)' }, availability: 'unavailable' },
    { partNumber: 'B30-25-855-WARN', name: 'Brady ToughWash B30-25-855-WARN — 100 białych etykiet 101,6 × 152,4 mm z nagłówkiem WARNING', attributes: { Rozmiar: '101,6 × 152,4 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'WARNING (pomarańczowy)' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej albo wymiary etykiety wykrawanej.\n\nTaśma ma 15,24 m długości. Etykiety mają 101,6 × 152,4 mm i jest ich 100 na rolce.',
    Kolor: 'Kolor poliestru B-855.\n\nTaśma ciągła jest biała albo żółta. Etykiety wykrawane są białe i mają kolorowy nagłówek.',
    Nadruk: 'Nagłówek wydrukowany fabrycznie na etykiecie.\n\nCAUTION znaczy ostrożnie i ma czarny napis na żółtym tle. WARNING znaczy ostrzeżenie i ma czarny napis na pomarańczowym tle.',
  },
  faq: [
    { question: 'Jakie mycie wytrzymuje materiał ToughWash B-855?', answer: 'Materiał sprawdzono w temperaturze mycia do 80 °C i przy ciśnieniu do 1500 PSI, czyli około 103 bar. Temperatura użytkowania wynosi od −40 do 110 °C.' },
    { question: 'Czym taśma ciągła różni się od etykiet CAUTION i WARNING?', answer: 'Z taśmy ciągłej drukarka wykonuje etykiety o ustawionej długości. Etykiety wykrawane mają stały rozmiar 101,6 × 152,4 mm i fabryczny nagłówek.' },
    { question: 'Jaką taśmę barwiącą zamówić do materiału B-855?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze modele serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Oznaczenia w zakładach spożywczych i napojów', 'Znakowanie obiektów i miejsc pracy', 'Oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// Poliimid UltraTemp B-797 i B-724 (cps-3079467); bez wycofanego B30C-4000-727
// ---------------------------------------------------------------------------

export const bradyB30Poliimid: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-797',
  slug: 'brady-b30c-4000-797',
  name: 'Taśma poliimidowa Brady UltraTemp B30C-4000-797 — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady UltraTemp B30C-4000-797 — taśma poliimidowa, S3100 i S3700',
  seoDescription: 'Taśma poliimidowa Brady UltraTemp do S3100 i S3700 na płytki drukowane: do 300 °C, 101,6 mm × 39,62 m. PN: B30C-4000-797 (biała), B30C-4000-724 (bursztynowa).',
  shortDescription: 'Brady UltraTemp B30C-4000-797 i B30C-4000-724 to taśmy poliimidowe 101,6 mm × 39,62 m do oznaczania płytek drukowanych i podzespołów, odporne na wysoką temperaturę. Do drukarek Brady S3100 i S3700.',
  description: 'Taśmy poliimidowe UltraTemp służą do znakowania płytek drukowanych i podzespołów elektronicznych. Poliimid pracuje do 300 °C, więc oznaczenie przeżywa lutowanie oraz agresywne mycie topnika. Trwały klej akrylowy wiąże z powierzchniami gładkimi. Materiał nadaje się też do ogólnej identyfikacji.\n\nB-797 to biały, błyszczący poliimid o grubości 0,104 mm. Ma wzmocnioną powłokę wierzchnią, jest odporny na rozmazywanie, korozję, wilgoć i ciepło, a do czytelności nadruku nie wymaga wygrzewania. B-724 to bursztynowy, matowy poliimid o grubości 0,112 mm, odporny na lutowanie na fali, korozję i warunki atmosferyczne. Obie rolki mają 39,62 m długości i 101,6 mm szerokości.\n\nDolna granica temperatury wynosi −80 °C dla B-797 i −70 °C dla B-724. B-797 jest uznany przez UL i nie zawiera dibutylocyny ani dioktylocyny. Oba materiały mają zgodność z wymaganiem MIL-STD-202G (Notice 12, metoda 215K). Dla B-797 zaleca się taśmę barwiącą B30-R6300, a dla B-724 taśmę B30-R4300. Rolki obsługują S3100 i S3700, BBP35 i BBP37, a także S3000 i i3300 oraz modele i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/polyimide-tape-for-bbp35-bbp37-s3xxx-i3300-printers-cps-3079467',
  images: [
    '/images/products/brady/b30c-4000-797.png',
    '/images/products/brady/b30c-4000-724.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4000-797 na uchwycie z wysuniętym paskiem białej taśmy poliimidowej 101,6 mm',
    'Rolka Brady B30C-4000-724 z bursztynową taśmą poliimidową 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'UltraTemp B-797 (biały); B-724 (bursztynowy)' },
    { name: 'Typ materiału', value: 'poliimid, odporny na mycie topnika' },
    { name: 'Wykończenie', value: 'błyszczące (B-797); matowe (B-724)' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,104 mm (B-797); 0,112 mm (B-724)' },
    { name: 'Temperatura pracy', value: 'od −80 do 300 °C (B-797); od −70 do 300 °C (B-724)' },
    { name: 'Odporność', value: 'B-797: ścieranie, chemikalia, korozja, ciepło, wilgoć; B-724: ścieranie, chemikalia, korozja, wilgoć, lutowanie na fali, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały (B-797), bursztynowy (B-724)' },
    { name: 'Szerokość taśmy', value: '101,6 mm' },
    { name: 'Długość taśmy', value: '39,62 m' },
    { name: 'Normy', value: 'MIL-STD-202G, Notice 12, metoda 215K; B-797: UL Recognised, bez dibutylocyny i dioktylocyny; B-724: SAE AS81531 (znakowanie materiałów izolacji elektrycznej)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6300 (B-797); B30-R4300 (B-724)' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, i4311, i5300, BBP35, BBP37' },
    { name: 'Numery artykułów Brady', value: 'B30C-4000-797: 176424; B30C-4000-724: 145296' },
  ],
  variants: [
    { partNumber: 'B30C-4000-797', name: 'Brady UltraTemp B30C-4000-797 — biała błyszcząca taśma poliimidowa B-797 101,6 mm × 39,62 m', attributes: { Materiał: 'B-797', Kolor: 'Biały', Wykończenie: 'Błyszczące' }, availability: 'unavailable' },
    { partNumber: 'B30C-4000-724', name: 'Brady UltraTemp B30C-4000-724 — bursztynowa matowa taśma poliimidowa B-724 101,6 mm × 39,62 m', attributes: { Materiał: 'B-724', Kolor: 'Bursztynowy', Wykończenie: 'Matowe' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Materiał: 'Symbol materiału Brady.\n\nB-797 ma wzmocnioną powłokę wierzchnią i jest odporny na rozmazywanie. B-724 jest standardową taśmą odporną na lutowanie na fali.',
    Kolor: 'Kolor poliimidu.\n\nB-797 jest biały, a B-724 bursztynowy. Obie rolki mają 101,6 mm szerokości i 39,62 m długości.',
    Wykończenie: 'Wygląd powierzchni taśmy.\n\nB-797 jest błyszczący, a B-724 matowy.',
  },
  faq: [
    { question: 'Czym różnią się materiały B-797 i B-724?', answer: 'B-797 jest biały i błyszczący, z wzmocnioną powłoką wierzchnią. B-724 jest bursztynowy i matowy, a jego odporność obejmuje lutowanie na fali. Zalecane taśmy barwiące to B30-R6300 i B30-R4300.' },
    { question: 'Do czego służy taśma poliimidowa UltraTemp?', answer: 'Do znakowania płytek drukowanych i podzespołów elektronicznych oraz do ogólnej identyfikacji. Poliimid znosi temperatury do 300 °C.' },
    { question: 'Do jakich drukarek pasują rolki UltraTemp?', answer: 'Do [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz do modeli S3000, i3300, i4311, i5300, BBP35 i BBP37.' },
  ],
  applications: ['Znakowanie płytek drukowanych', 'Oznaczanie podzespołów po lutowaniu', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Taśma odblaskowa B-584 (cps-3069355)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, kolor]
const ODBLASKOWA_584: [string, string, string, string][] = [
  ['B30C-1125-584-YL', '118002', '28,58', 'YL'],
  ['B30C-1125-584-OR', '117996', '28,58', 'OR'],
  ['B30C-1125-584-SL', '117999', '28,58', 'SL'],
  ['B30C-2250-584-YL', '118001', '57,15', 'YL'],
  ['B30C-2250-584-OR', '117995', '57,15', 'OR'],
  ['B30C-2250-584-SL', '117998', '57,15', 'SL'],
  ['B30C-4000-584-YL', '118000', '101,6', 'YL'],
  ['B30C-4000-584-OR', '117994', '101,6', 'OR'],
  ['B30C-4000-584-SL', '117997', '101,6', 'SL'],
]

export const bradyB30Odblaskowa584: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4000-584-yl',
  slug: 'brady-b30c-4000-584-yl',
  name: 'Taśma odblaskowa Brady B30C-4000-584-YL — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4000-584-YL — taśma odblaskowa do S3100 i S3700',
  seoDescription: 'Taśma odblaskowa Brady B-584 do S3100 i S3700: żółta, pomarańczowa, srebrna, 28,58–101,6 mm × 15,24 m. PN: B30C-4000-584-YL, B30C-2250-584-OR, B30C-1125-584-SL.',
  shortDescription: 'Brady B30C-4000-584-YL i osiem innych wersji odblaskowej taśmy B-584 w kolorze żółtym, pomarańczowym albo srebrnym, o szerokości od 28,58 do 101,6 mm. Do drukarek Brady S3100 i S3700.',
  description: 'Folia odblaskowa B-584 jaśnieje, gdy padnie na nią światło latarki albo reflektora, bo odbija promienie z powrotem do ich źródła. Takie oznaczenia pasują wszędzie tam, gdzie liczy się widoczność: na narzędziach, kaskach ochronnych, obudowach instalacji, słupach i postumentach, sprzęcie na dachach, regałach i półkach. Powierzchnia jest błyszcząca, a trwały klej akrylowy wiąże z podłożem gładkim. Folia służy też do oznaczania wyposażenia i obiektów oraz do znaków bezpieczeństwa.\n\nW rolce jest 15,24 m folii, której grubość to 0,14 mm. Szerokości taśmy to 28,58 mm, 57,15 mm i 101,6 mm. Kolor jest żółty, pomarańczowy albo srebrny. Wersje różnią się tylko szerokością i kolorem. Etykiety o dowolnej długości powstają z ciągłej rolki zgodnie z projektem nadruku.\n\nOdblaskowość folii odpowiada specyfikacji federalnej L-S-300. Na zewnątrz taśma wytrzymuje średnio 4–6 lat. Zakres jej temperatur to od −40 do 70 °C, przy czym naklejanie zaczyna się od 10 °C. Odpiera ścieranie i chemikalia. Nadruk wymaga taśmy barwiącej B30-R10000, kupowanej w osobnej kasecie. Kasetę z folią można włożyć do S3100 albo S3700.',
  sameAs: 'https://www.brady.eu/labels/b30-series-retro-reflective-labels-cps-3069355',
  images: [
    '/images/products/brady/b30c-4000-584-yl.png',
    '/images/products/brady/b30c-4000-584-sl.png',
    '/images/products/brady/b30c-4000-584-or.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4000-584-YL na uchwycie z wysuniętym paskiem żółtej taśmy odblaskowej 101,6 mm',
    'Rolka Brady B30C-4000-584-SL ze srebrną taśmą odblaskową 101,6 mm',
    'Rolka Brady B30C-4000-584-OR z pomarańczową taśmą odblaskową 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-584' },
    { name: 'Typ materiału', value: 'taśma odblaskowa (retrorefleksyjna)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,14 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz średnio 4–6 lat' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'żółty, pomarańczowy, srebrny' },
    { name: 'Szerokość taśmy', value: '28,58 / 57,15 / 101,6 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Normy', value: 'Federal Specification L-S-300 (odblaskowość)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: ODBLASKOWA_584.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ODBLASKOWA_584.map(([pn, , szer, kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${KOLORY_ZENSKIE[kolor]} taśma odblaskowa ${szer} mm × 15,24 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 15,24 m`, Kolor: KOLORY[kolor] },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy ciągłej.\n\nSzerokość wynosi 28,58, 57,15 albo 101,6 mm, a rolka zawiera 15,24 m folii.',
    Kolor: 'Kolor folii odblaskowej.\n\nKażda szerokość jest dostępna jako żółta, pomarańczowa i srebrna.',
  },
  faq: [
    { question: 'Co oznacza, że folia B-584 jest odblaskowa?', answer: 'Folia odbija padające światło z powrotem w stronę jego źródła. Oznaczenie wyraźnie świeci w świetle latarki lub reflektora.' },
    { question: 'Jak długo taśma B-584 służy na zewnątrz?', answer: 'Średnio od 4 do 6 lat. Zakres temperatur pracy to od −40 do 70 °C, a naklejać ją można od 10 °C na powierzchnie gładkie.' },
    { question: 'Jaką taśmę barwiącą zamówić do taśmy odblaskowej?', answer: 'Zaleca się taśmę barwiącą B30-R10000. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze modele serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Narzędzia, kaski i sprzęt na budowie', 'Obudowy, słupy i sprzęt na dachach', 'Regały i półki'],
}

// ---------------------------------------------------------------------------
// ToughWash B-854 wykrywalny przez wykrywacze metali — etykiety CAUTION / WARNING / DANGER (cps-3079462) i taśma ciągła (pid-b30c-4000-854-yl)
// ---------------------------------------------------------------------------

export const bradyB30ToughWash854: Product = {
  ...wspolneB30,
  id: 'brady-b30-25-854-warn',
  slug: 'brady-b30-25-854-warn',
  name: 'Etykiety i taśma wykrywalne przez wykrywacze metali Brady ToughWash B30-25-854-WARN — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady ToughWash B30-25-854-WARN — wykrywalne do S3100 i S3700',
  seoDescription: 'Brady ToughWash B-854 do S3100 i S3700, wykrywalny wykrywaczami metali: CAUTION, WARNING, DANGER. PN: B30-25-854-WARN, B30-25-854-DANG, B30C-4000-854-YL.',
  shortDescription: 'Brady ToughWash B30-25-854-WARN i trzy inne wersje poliestru B-854, wykrywalnego przez wykrywacze metali i odpornego na mycie: etykiety CAUTION, WARNING, DANGER oraz żółta taśma ciągła. Do drukarek Brady S3100 i S3700.',
  description: 'ToughWash B-854 jest matową folią poliestrową na kleju akrylowym, wykrywalną przez dostępne w handlu wykrywacze metali. Materiał przeznaczono dla branży spożywczej i napojowej. Konstrukcja wytrzymuje mycie wodą o temperaturze do 80 °C przy ciśnieniu do 1500 PSI. Etykiety służą do oznaczania obiektów i miejsc pracy, do znaków bezpieczeństwa oraz do identyfikacji procesów w produkcji żywności.\n\nTrzy wersje to etykiety wykrawane 101,6 × 152,4 mm, w liczbie 100 na rolce. Białe pole zdobi fabryczny nagłówek: żółty CAUTION, pomarańczowy WARNING albo czerwony DANGER. Znaczą one kolejno ostrożność, ostrzeżenie i niebezpieczeństwo. Pole nadruku ma 70 × 146 mm. Czwarta wersja to żółta taśma ciągła, 101,6 mm × 15,24 m. Poliester ma 0,229 mm grubości.\n\nMateriał znosi od −40 do 110 °C, natomiast naklejanie zaczyna się przy 4 °C. Opiera się ścieraniu, chemikaliom i myciu. Do wydruku służy taśma barwiąca B30-R6000, której nie ma w zestawie. Wykrywalność dotyczy zarówno etykiet, jak i taśmy ciągłej. Zgodne z etykietami są S3100 i S3700, a pozostałe modele wymienia specyfikacja.',
  sameAs: 'https://www.brady.eu/labels/toughwash-metal-detectable-material-for-bbp3x-s3xxx-i3300-printers-cps-3079462',
  images: [
    '/images/products/brady/b30-25-854-warn.png',
    '/images/products/brady/b30-25-854-dang.png',
    '/images/products/brady/b30c-4000-854-yl.png',
  ],
  imageDescriptions: [
    'Rolka etykiet Brady B30-25-854-WARN z białymi etykietami i pomarańczowym nagłówkiem WARNING',
    'Rolka etykiet Brady B30-25-854-DANG z białymi etykietami i czerwonym nagłówkiem DANGER',
    'Rolka Brady B30C-4000-854-YL z paskiem żółtej taśmy ciągłej ToughWash 101,6 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych B30 albo taśmy ciągłej B30C, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'ToughWash B-854' },
    { name: 'Typ materiału', value: 'poliester wykrywalny przez wykrywacze metali, odporny na mycie' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,229 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 110 °C' },
    { name: 'Temperatura naklejania', value: 'od 4 °C' },
    { name: 'Warunki pracy', value: 'mycie wodą do 80 °C pod ciśnieniem do 1500 PSI' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, mycie' },
    { name: 'Kolory', value: 'biały z nagłówkiem żółtym, pomarańczowym lub czerwonym (etykiety); żółty (taśma ciągła)' },
    { name: 'Wymiary etykiety', value: '101,6 × 152,4 mm (etykiety wykrawane)' },
    { name: 'Pole nadruku', value: '70 × 146 mm (etykiety wykrawane)' },
    { name: 'Liczba sztuk na rolce', value: '100 (etykiety wykrawane)' },
    { name: 'Szerokość i długość taśmy', value: '101,6 mm × 15,24 m (taśma ciągła)' },
    { name: 'Nadruk fabryczny', value: 'nagłówek CAUTION, WARNING lub DANGER (etykiety wykrawane)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6000' },
    { name: 'Zgodne drukarki', value: 'S3100, S3700, S3000, i3300, BBP30, BBP31, BBP33, BBP35, BBP37; taśma ciągła także i4311 i i5300' },
    { name: 'Numery artykułów Brady', value: 'B30-25-854-CAUT: 711251; B30-25-854-WARN: 711248; B30-25-854-DANG: 711250; B30C-4000-854-YL: 133119' },
  ],
  variants: [
    { partNumber: 'B30-25-854-CAUT', name: 'Brady ToughWash B30-25-854-CAUT — 100 białych etykiet 101,6 × 152,4 mm z nagłówkiem CAUTION', attributes: { Rozmiar: '101,6 × 152,4 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'CAUTION (żółty)' }, availability: 'unavailable' },
    { partNumber: 'B30-25-854-WARN', name: 'Brady ToughWash B30-25-854-WARN — 100 białych etykiet 101,6 × 152,4 mm z nagłówkiem WARNING', attributes: { Rozmiar: '101,6 × 152,4 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'WARNING (pomarańczowy)' }, availability: 'unavailable' },
    { partNumber: 'B30-25-854-DANG', name: 'Brady ToughWash B30-25-854-DANG — 100 białych etykiet 101,6 × 152,4 mm z nagłówkiem DANGER', attributes: { Rozmiar: '101,6 × 152,4 mm, 100 szt.', Kolor: 'Biały', Nadruk: 'DANGER (czerwony)' }, availability: 'unavailable' },
    { partNumber: 'B30C-4000-854-YL', name: 'Brady ToughWash B30C-4000-854-YL — żółta taśma ciągła 101,6 mm × 15,24 m', attributes: { Rozmiar: 'ciągła 101,6 mm × 15,24 m', Kolor: 'Żółty' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety wykrawanej albo szerokość i długość taśmy ciągłej.\n\nEtykiety mają 101,6 × 152,4 mm i jest ich 100 na rolce. Taśma ciągła ma 15,24 m długości.',
    Kolor: 'Kolor poliestru B-854.\n\nEtykiety wykrawane są białe z kolorowym nagłówkiem, a taśma ciągła jest żółta.',
    Nadruk: 'Nagłówek wydrukowany fabrycznie na etykiecie.\n\nCAUTION znaczy ostrożnie, WARNING ostrzeżenie, a DANGER niebezpieczeństwo. Kolor w nawiasie to kolor nagłówka.',
  },
  faq: [
    { question: 'Co oznacza, że materiał B-854 jest wykrywalny?', answer: 'Poliester można wykryć wykrywaczami metali dostępnymi w handlu. Materiał przeznaczono dla przemysłu spożywczego i napojów.' },
    { question: 'Jakie mycie wytrzymuje materiał ToughWash B-854?', answer: 'Mycie wodą o temperaturze do 80 °C i ciśnieniu do 1500 PSI, czyli około 103 bar. Temperatura użytkowania wynosi od −40 do 110 °C.' },
    { question: 'Jaka taśma barwiąca pasuje do materiału B-854?', answer: 'Zaleca się taśmę barwiącą B30-R6000. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700).' },
  ],
  applications: ['Oznaczanie w zakładach spożywczych i napojów', 'Znaki bezpieczeństwa i oznaczenia obiektów', 'Identyfikacja ogólna'],
}

// ---------------------------------------------------------------------------
// Zawieszki z mocnego poliestru B-551 (cps-3069350)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość]
const ZAWIESZKI_551: [string, string, string][] = [
  ['B30C-2500-551-WT', '118013', '63,5'],
  ['B30C-3250-551-WT', '118012', '82,55'],
  ['B30C-4250-551-WT', '118011', '107,19'],
]

export const bradyB30Zawieszki551: Product = {
  ...wspolneB30,
  id: 'brady-b30c-4250-551-wt',
  slug: 'brady-b30c-4250-551-wt',
  name: 'Materiał na zawieszki z mocnego poliestru Brady B30C-4250-551-WT — materiał B30 do S3100 i S3700',
  seoTitle: 'Brady B30C-4250-551-WT — zawieszki z poliestru do S3100 i S3700',
  seoDescription: 'Materiał na zawieszki Brady B-551 do S3100 i S3700: sztywny poliester bez kleju, 63,5–107,19 mm, OSHA 1910.145. PN: B30C-2500-551-WT, B30C-4250-551-WT.',
  shortDescription: 'Brady B30C-4250-551-WT i dwie inne rolki sztywnego, białego poliestru B-551 bez kleju, z którego drukuje się zawieszki ostrzegawcze i blokady. Do drukarek Brady S3100 i S3700.',
  description: 'Brady B-551 to biały, półsztywny poliester bez warstwy kleju, przeznaczony na zawieszki. Z rolki drukuje się własne zawieszki bezpieczeństwa i blokad oraz zawieszki ogólnego użytku, w tym zawieszki zapobiegające wypadkom. Materiał łatwo się dziurkuje, więc otwór na zawieszenie wykonuje się dziurkaczem. Gotowa zawieszka ostrzega na miejscu o niebezpiecznym stanie urządzenia lub instalacji. Rolki służą do oznaczeń elektrycznych, a także do identyfikacji obiektów, do znakowania ogólnego i do znaków bezpieczeństwa.\n\nRolka zawiera 15,24 m materiału o grubości 0,348 mm. Szerokość wynosi 63,5, 82,55 albo 107,19 mm. Wszystkie wersje są białe, a zawieszka nie jest samoprzylepna. Długość zawieszki ustawia się w projekcie wydruku.\n\nZawieszka spełnia wymagania OSHA 1910.145(f) dla znaków zapobiegających wypadkom, jeśli nadrukuje się wymagane słowo sygnałowe i główny komunikat. Poliester odpiera ścieranie i działanie chemikaliów, a temperatura pracy mieści się między −40 a 89 °C. Do nadruku służy B30-R10000, czyli taśma barwiąca z osobnej kasety. Specyfikacja podaje zgodność z S3100, S3700 i innymi modelami z listy.',
  sameAs: 'https://www.brady.eu/labels/b30-series-heavy-duty-polyester-tags-cps-3069350',
  images: [
    '/images/products/brady/b30c-4250-551-wt.png',
    '/images/products/brady/b30c-2500-551-wt.png',
    '/images/products/brady/b30c-3250-551-wt.png',
  ],
  imageDescriptions: [
    'Rolka Brady B30C-4250-551-WT na uchwycie z paskiem białego poliestru na zawieszki o szerokości 107,19 mm',
    'Rolka Brady B30C-2500-551-WT z białym poliestrem na zawieszki o szerokości 63,5 mm',
    'Rolka Brady B30C-3250-551-WT z białym poliestrem na zawieszki o szerokości 82,55 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka materiału na zawieszki B30C, bez kleju i bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-551' },
    { name: 'Typ materiału', value: 'poliester sztywny (półsztywny), na zawieszki' },
    { name: 'Klej', value: 'brak' },
    { name: 'Grubość', value: '0,348 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 89 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Szerokość taśmy', value: '63,5 / 82,55 / 107,19 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Normy', value: 'OSHA 1910.145(f) po nadrukowaniu wymaganego słowa sygnałowego i głównego komunikatu' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R10000' },
    { name: 'Zgodne drukarki', value: DRUKARKI_B30 },
    { name: 'Numery artykułów Brady', value: ZAWIESZKI_551.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ZAWIESZKI_551.map(([pn, , szer]) => ({
    partNumber: pn,
    name: `Brady ${pn} — biały materiał na zawieszki ${szer} mm × 15,24 m`,
    attributes: { Rozmiar: `ciągła ${szer} mm × 15,24 m` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość rolki materiału na zawieszki.\n\nSzerokość wynosi 63,5, 82,55 albo 107,19 mm, a rolka zawiera 15,24 m poliestru.',
  },
  faq: [
    { question: 'Czy materiał B-551 ma klej?', answer: 'Nie. To półsztywny poliester bez kleju, przeznaczony na zawieszki. Otwór do zawieszenia wykonuje się dziurkaczem.' },
    { question: 'Czy zawieszki z materiału B-551 spełniają wymagania OSHA?', answer: 'Spełniają OSHA 1910.145(f), jeśli wydrukuje się na nich wymagane słowo sygnałowe i główny komunikat.' },
    { question: 'Jaką taśmę barwiącą zamówić do zawieszek B-551?', answer: 'Zaleca się taśmę barwiącą B30-R10000. Materiał drukują [Brady S3100](/produkt/brady-s3100) i [Brady S3700](/produkt/brady-s3700) oraz starsze modele serii BBP3x, S3000 i i3300.' },
  ],
  applications: ['Zawieszki bezpieczeństwa i blokady', 'Zawieszki ostrzegawcze o niebezpiecznych stanach', 'Zawieszki ogólnego użytku'],
}

export const bradyB30Specjalne: Product[] = [bradyB30Tedlar437, bradyB30Magnetyczna509, bradyB30ToughStripe, bradyB30Papier403, bradyB30ToughWash855, bradyB30Poliimid, bradyB30Odblaskowa584, bradyB30ToughWash854, bradyB30Zawieszki551]

export const bradyB30SpecjalneSekcje: Record<string, 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'> = {
  'brady-b30c-4000-437': 'ciagle',
  'brady-b30c-4250-509-wt': 'ciagle',
  'brady-b30c-4000-483wt-kt': 'ciagle',
  'brady-b30c-4000-403-wt': 'ciagle',
  'brady-b30c-4000-855-yl': 'ciagle',
  'brady-b30c-4000-797': 'ciagle',
  'brady-b30c-4000-584-yl': 'ciagle',
  'brady-b30-25-854-warn': 'etykiety',
  'brady-b30c-4250-551-wt': 'etykiety',
}
