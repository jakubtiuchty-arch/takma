import type { Product } from './products'

// Akcesoria do terminali Unitech HT730 Plus i HT330 (29.10.2026).
// Karty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Zgodność wg przewodników akcesoriów HT730 Plus (2026/07) i HT330 (2023/08) oraz skróconych instrukcji stacji, ładowarek, etui i uchwytów.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U3.md

const HT730 = 'unitech-ht730-plus'
const HT330 = 'unitech-ht330'
const TAGI: Product['tags'] = ['retail', 'magazyn', 'logistyka']

const KATALOG_HT730 = { name: 'Katalog akcesoriów Unitech HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-akcesoria-en.pdf', size: '1,1 MB' }
const KATALOG_HT330 = { name: 'Katalog akcesoriów Unitech HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-akcesoria-en.pdf', size: '1,3 MB' }
const QSG_HT730_STACJA_1 = { name: 'Skrócona instrukcja stacji 1-gniazdowych HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-stacja-1-slot-skrocona-instrukcja-en.pdf', size: '719 KB' }
const QSG_HT730_STACJA_4 = { name: 'Skrócona instrukcja stacji 4-gniazdowych HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-stacja-4-slot-skrocona-instrukcja-en.pdf', size: '781 KB' }
const QSG_HT730_LADOWARKA = { name: 'Skrócona instrukcja ładowarki 4 baterii HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-ladowarka-baterii-skrocona-instrukcja-en.pdf', size: '673 KB' }
const QSG_HT730_UCHWYT = { name: 'Skrócona instrukcja uchwytu pistoletowego HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-uchwyt-pistoletowy-skrocona-instrukcja-en.pdf', size: '541 KB' }
const QSG_HT330_STACJA_1 = { name: 'Skrócona instrukcja stacji 1-gniazdowych HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-stacja-1-slot-skrocona-instrukcja-en.pdf', size: '647 KB' }
const QSG_HT330_LADOWARKA = { name: 'Skrócona instrukcja ładowarki 4 baterii HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-ladowarka-baterii-skrocona-instrukcja-en.pdf', size: '273 KB' }
const QSG_HT330_UCHWYT = { name: 'Skrócona instrukcja uchwytu pistoletowego HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-uchwyt-pistoletowy-skrocona-instrukcja-en.pdf', size: '629 KB' }
const QSG_HT330_ETUI = { name: 'Skrócona instrukcja etui ochronnego HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-etui-skrocona-instrukcja-en.pdf', size: '120 KB' }
const QSG_HT330_PASEK = { name: 'Skrócona instrukcja paska na dłoń HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-pasek-na-dlon-skrocona-instrukcja-en.pdf', size: '594 KB' }

const PRZEWOD_SIECIOWY_C13 = `**Wymagane — sprzedawane osobno**

- [Przewód zasilający EU Unitech, wtyk Schuko – złącze C13 (1550-602333G)](/produkt/unitech-przewod-zasilajacy-eu-3pin)

`

const bateriaHt730: Product = {
  id: 'unitech-ht730-plus-bateria',
  slug: 'unitech-ht730-plus-bateria',
  name: 'Bateria 6700 mAh Unitech HT730 Plus (1400-900082G)',
  seoH1: 'Bateria 6700 mAh Unitech HT730 Plus',
  shortDescription: 'Bateria Unitech 1400-900082G, 3,6 V i 6700 mAh, do terminala HT730 Plus: wymiana ręczna, bez narzędzi.',
  seoTitle: 'Bateria Unitech 1400-900082G 6700 mAh do HT730 Plus',
  seoDescription: 'Bateria Unitech 1400-900082G, 3,6 V, 6700 mAh, do Unitech HT730 Plus, czyli terminala z klawiaturą i skanerem. Bateria Unitech HT730 Plus, akumulator do kolektora danych HT730 Plus. PN: 1400-900082G.',
  description: `Bateria 1400-900082G ma napięcie 3,6 V i pojemność 6700 mAh. Jest baterią główną terminala [Unitech HT730 Plus](/produkt/unitech-ht730-plus), więc jako osobna pozycja służy za zapasową albo wymienną. Po jej wyjęciu aplikacje na terminalu pozostają aktywne do 1 minuty.

Baterię wymienia się ręcznie: zatrzask zwalniający chwyta się z obu stron i unosi, a nową baterię wsuwa się od dołu i dociska. Narzędzi nie używa się. Jeśli terminal ma założony pasek na dłoń, najpierw zdejmuje się klips paska. Naklejki, znaczniki i grawerunki w gnieździe baterii mogą pogorszyć szczelność, odporność na upadki oraz zakres temperatur pracy.

Baterie zapasowe ładują się w [stacjach 1-gniazdowych](/produkt/unitech-ht730-plus-stacja-1-slot) lub w [ładowarce 4 baterii](/produkt/unitech-ht730-plus-ladowarka-baterii).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 172.26,
  images: ['/images/products/1400-900082G.png'],
  imageDescriptions: ['Bateria 6700 mAh Unitech 1400-900082G do HT730 Plus — bateria widziana z góry i od spodu, ze stykami i zatrzaskiem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900082G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus' },
    { name: 'Napięcie i pojemność', value: '3,6 V, 6700 mAh' },
    { name: 'Aplikacje po wyjęciu baterii', value: 'Aktywne do 1 minuty' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
  ],
  applications: ['Zapasowa bateria przy pracy na kilka zmian'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-1-slot', 'unitech-ht730-plus-ladowarka-baterii'],
  downloads: [KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const uchwytHt730: Product = {
  id: 'unitech-ht730-plus-uchwyt-pistoletowy',
  slug: 'unitech-ht730-plus-uchwyt-pistoletowy',
  name: 'Uchwyt pistoletowy Unitech HT730 Plus (5500-900114G)',
  seoH1: 'Uchwyt pistoletowy Unitech HT730 Plus',
  shortDescription: 'Uchwyt pistoletowy Unitech 5500-900114G do terminala HT730 Plus, także w wersji z grzałką; pasek na nadgarstek, pokrywa ochronna i 4 śruby w opakowaniu.',
  seoTitle: 'Uchwyt pistoletowy Unitech 5500-900114G do HT730 Plus',
  seoDescription: 'Uchwyt pistoletowy (gun grip) Unitech 5500-900114G do terminala Unitech HT730 Plus, także w wersji do mroźni. Uchwyt pistoletowy Unitech HT730 Plus. PN: 5500-900114G.',
  description: `Uchwyt 5500-900114G montuje się na tylnej ściance terminala [Unitech HT730 Plus](/produkt/unitech-ht730-plus). Pasuje do wersji z grzałką, przeznaczonej do chłodni i mroźni, oraz do wersji pracującej w temperaturze pokojowej. Terminala w opakowaniu nie ma.

W opakowaniu są uchwyt, pasek na nadgarstek, pokrywa ochronna i cztery śruby. Uchwyt przykręca się do terminala od tyłu tymi czterema śrubami. Pokrywę zaczepia się hakami o rowki pod uchwytem, aż się zatrzaśnie. Pasek przewleka się przez otwory u dołu uchwytu. Demontaż zaczyna się od zdjęcia pokrywy, a potem odkręca się śruby wkrętakiem.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 224.47,
  images: ['/images/products/5500-900114G.png'],
  imageDescriptions: ['Uchwyt pistoletowy Unitech 5500-900114G z terminalem HT730 Plus — terminal na uchwycie trzymanym w dłoni, widok z boku'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5500-900114G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, w tym wersja z grzałką' },
    { name: 'W opakowaniu', value: 'Uchwyt pistoletowy, pasek na nadgarstek, pokrywa ochronna, 4 śruby' },
    { name: 'Mocowanie', value: '4 śruby od tyłu terminala' },
  ],
  applications: ['Skanowanie z uchwytem pistoletowym, także w chłodni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-oslona-standardowa', 'unitech-ht730-plus-szklo-ochronne', 'unitech-ht730-plus-pasek-na-dlon'],
  downloads: [QSG_HT730_UCHWYT, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const szkloHt730: Product = {
  id: 'unitech-ht730-plus-szklo-ochronne',
  slug: 'unitech-ht730-plus-szklo-ochronne',
  name: 'Szkło ochronne 9H Unitech HT730 Plus, 10 szt. (5400-900069G)',
  seoH1: 'Szkło ochronne 9H Unitech HT730 Plus, 10 szt.',
  shortDescription: 'Szkło ochronne 9H Unitech 5400-900069G do ekranu terminala HT730 Plus; opakowanie zawiera 10 sztuk.',
  seoTitle: 'Szkło ochronne Unitech 5400-900069G do HT730 Plus, 10 szt.',
  seoDescription: 'Szkło ochronne 9H Unitech 5400-900069G, 10 sztuk w opakowaniu, na ekran Unitech HT730 Plus. Szkło na ekran Unitech HT730 Plus. PN: 5400-900069G.',
  description: `Szkło 5400-900069G zabezpiecza ekran 4″ terminala [Unitech HT730 Plus](/produkt/unitech-ht730-plus). Szkło ma twardość 9H.

Jedno opakowanie zawiera 10 sztuk. Cena na karcie dotyczy całego opakowania, a nie pojedynczej sztuki.

Ekran terminala obsługuje rękawice o grubości do 4 mm, mokry ekran i rysik 3 mm.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 315.12,
  images: ['/images/products/5400-900069G.png'],
  imageDescriptions: ['Szkło ochronne 9H Unitech 5400-900069G do HT730 Plus — terminal z klawiaturą 38 klawiszy z przezroczystym szkłem nałożonym na ekran'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900069G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus' },
    { name: 'Twardość', value: '9H' },
    { name: 'Zawartość opakowania', value: '10 sztuk' },
  ],
  applications: ['Ochrona ekranu terminali w całej flocie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-oslona-standardowa', 'unitech-ht730-plus-uchwyt-pistoletowy'],
  downloads: [KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const pasekHt730: Product = {
  id: 'unitech-ht730-plus-pasek-na-dlon',
  slug: 'unitech-ht730-plus-pasek-na-dlon',
  name: 'Pasek na dłoń ze stałym ramieniem Unitech HT730 Plus (5400-900045G)',
  seoH1: 'Pasek na dłoń ze stałym ramieniem Unitech HT730 Plus',
  shortDescription: 'Pasek na dłoń Unitech 5400-900045G ze stałym ramieniem do terminala HT730 Plus, sprzedawany w osobnym opakowaniu.',
  seoTitle: 'Pasek na dłoń Unitech 5400-900045G do HT730 Plus',
  seoDescription: 'Pasek Unitech 5400-900045G na dłoń, z mocującym ramieniem stałym, przeznaczony do Unitech HT730 Plus. Pasek na rękę Unitech HT730 Plus. PN: 5400-900045G.',
  description: `Pasek 5400-900045G ma stałe ramię i leży w osobnym opakowaniu. Zaczepia się go o punkt mocowania paska z tyłu [Unitech HT730 Plus](/produkt/unitech-ht730-plus).

Pasek na dłoń jest również w zestawie terminala, więc ten numer służy do wymiany zużytego egzemplarza albo do wyposażenia dodatkowych urządzeń. Klips paska trzeba zdjąć przed wyjęciem baterii. Przy uchwycie pistoletowym stosuje się pasek na nadgarstek z opakowania [uchwytu 5500-900114G](/produkt/unitech-ht730-plus-uchwyt-pistoletowy).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 32.4,
  images: ['/images/products/5400-900045G.png', '/images/products/5400-900045G-2.png'],
  imageDescriptions: [
    'Pasek na dłoń Unitech 5400-900045G do HT730 Plus — tył terminala z założonym paskiem oraz osobno pasek z ramieniem mocującym',
    'Pasek na dłoń Unitech 5400-900045G na terminalu HT730 Plus — tył terminala trzymany w dłoni z założonym paskiem',
  ],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900045G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus' },
    { name: 'Typ', value: 'Pasek na dłoń ze stałym ramieniem, osobne opakowanie' },
  ],
  applications: ['Praca z terminalem trzymanym na dłoni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-uchwyt-pistoletowy', 'unitech-ht730-plus-bateria'],
  downloads: [KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const oslonaStandard: Product = {
  id: 'unitech-ht730-plus-oslona-standardowa',
  slug: 'unitech-ht730-plus-oslona-standardowa',
  name: 'Osłona do niskich temperatur Unitech HT730 Plus, silnik standardowy (5400-900080G)',
  seoH1: 'Osłona do niskich temperatur Unitech HT730 Plus, silnik standardowy',
  shortDescription: 'Osłona Unitech 5400-900080G dla HT730 Plus z silnikiem standardowego zasięgu, zgodna z niskimi temperaturami.',
  seoTitle: 'Osłona Unitech 5400-900080G do HT730 Plus, silnik standardowy',
  seoDescription: 'Osłona (bumper) Unitech 5400-900080G zgodna z niskimi temperaturami do terminala Unitech HT730 Plus z silnikiem standardowego zasięgu. Osłona do Unitech HT730 Plus. PN: 5400-900080G.',
  description: `Osłona 5400-900080G (ang. bumper) jest przeznaczona dla terminali [Unitech HT730 Plus](/produkt/unitech-ht730-plus) z silnikiem skanującym standardowego zasięgu, czyli wersji HT730-NJ… i HT730-NH…. Osłona jest zgodna z niskimi temperaturami.

Z osłoną terminal wytrzymuje upadki z 2,4 m, a bez niej z 1,8 m. Część wersji terminala ma osłonę już w zestawie, ponieważ zależy to od modelu. Ten numer jest potrzebny, gdy osłonę trzeba wymienić albo założyć na urządzenie sprzedane bez niej.

Do terminali z silnikiem dalekiego zasięgu służy osobna [osłona 5400-900081G](/produkt/unitech-ht730-plus-oslona-dalekiego-zasiegu).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 33.26,
  images: ['/images/products/5400-900080G.png'],
  imageDescriptions: ['Osłona Unitech 5400-900080G do HT730 Plus z silnikiem standardowym — tył terminala oraz osobno dwie części osłony i śruby'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900080G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus z silnikiem skanującym standardowego zasięgu (HT730-NJ…, HT730-NH…)' },
    { name: 'Typ', value: 'Osłona (bumper) zgodna z niskimi temperaturami' },
    { name: 'Odporność na upadki z osłoną', value: '2,4 m (bez osłony 1,8 m)' },
  ],
  applications: ['Ochrona terminala przed upadkami, także w chłodni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-oslona-dalekiego-zasiegu', 'unitech-ht730-plus-szklo-ochronne', 'unitech-ht730-plus-uchwyt-pistoletowy'],
  downloads: [KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const oslonaDalekiZasieg: Product = {
  id: 'unitech-ht730-plus-oslona-dalekiego-zasiegu',
  slug: 'unitech-ht730-plus-oslona-dalekiego-zasiegu',
  name: 'Osłona do niskich temperatur Unitech HT730 Plus, silnik dalekiego zasięgu (5400-900081G)',
  seoH1: 'Osłona do niskich temperatur Unitech HT730 Plus, silnik dalekiego zasięgu',
  shortDescription: 'Osłona Unitech 5400-900081G dla HT730 Plus z silnikiem dalekiego zasięgu do 32 m, zgodna z niskimi temperaturami.',
  seoTitle: 'Osłona Unitech 5400-900081G do HT730 Plus, daleki zasięg',
  seoDescription: 'Osłona (bumper) Unitech 5400-900081G zgodna z niskimi temperaturami, na wersję z silnikiem dalekiego zasięgu w Unitech HT730 Plus. Osłona Unitech HT730 Plus. PN: 5400-900081G.',
  description: `Osłona 5400-900081G (ang. bumper) jest przeznaczona dla wersji [Unitech HT730 Plus](/produkt/unitech-ht730-plus) wyposażonych w silnik dalekiego zasięgu (PN HT730-LJ…), czytający etykiety oddalone nawet o 32 m. Osłona jest zgodna z niskimi temperaturami i ma inny kształt niż osłona do silnika standardowego.

Osłona zwiększa dopuszczalną wysokość upadku terminala z 1,8 m do 2,4 m. W zestawie terminala jest ona zależnie od modelu, dlatego ten numer dobiera się według wersji silnika skanującego.

Do terminali z silnikiem standardowym pasuje [osłona 5400-900080G](/produkt/unitech-ht730-plus-oslona-standardowa).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 46.46,
  images: ['/images/products/5400-900081G.png'],
  imageDescriptions: ['Osłona Unitech 5400-900081G do HT730 Plus z silnikiem dalekiego zasięgu — terminal widziany z boku obok dwóch części osłony i śrub'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900081G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus z silnikiem skanującym dalekiego zasięgu (HT730-LJ…)' },
    { name: 'Typ', value: 'Osłona (bumper) zgodna z niskimi temperaturami' },
    { name: 'Odporność na upadki z osłoną', value: '2,4 m (bez osłony 1,8 m)' },
  ],
  applications: ['Ochrona terminala z silnikiem dalekiego zasięgu przed upadkami'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-oslona-standardowa', 'unitech-ht730-plus-szklo-ochronne', 'unitech-ht730-plus-uchwyt-pistoletowy'],
  downloads: [KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const stacja1Ht730: Product = {
  id: 'unitech-ht730-plus-stacja-1-slot',
  slug: 'unitech-ht730-plus-stacja-1-slot',
  name: 'Stacja ładująca 1-gniazdowa Unitech HT730 Plus (5000-900139G)',
  seoH1: 'Stacja ładująca 1-gniazdowa Unitech HT730 Plus',
  shortDescription: 'Stacja ładująca Unitech 5000-900139G na jeden terminal HT730 Plus z gniazdem na zapasową baterię; zasilacz 5 V / 6 A w komplecie.',
  seoTitle: 'Stacja ładująca Unitech 5000-900139G do HT730 Plus',
  seoDescription: 'Stacja ładująca 1-gniazdowa Unitech 5000-900139G z gniazdem na zapasową baterię dla Unitech HT730 Plus; zasilacz w zestawie. Stacja Unitech HT730 Plus. PN: 5000-900139G.',
  description: `Stacja 5000-900139G ma dwa gniazda: jedno ładuje terminal [Unitech HT730 Plus](/produkt/unitech-ht730-plus), drugie zapasową baterię. Służy tylko do ładowania. Pasuje także do wersji HT730 Plus UHF.

W opakowaniu są stacja i zasilacz 5 V / 6 A bez przewodu sieciowego. Do zasilania stacji zalecany jest zasilacz z zestawu. Terminal ładuje się w stacji z założoną dolną osłoną lub w etui. Baterię zakłada się pod kątem 45 stopni i dociska do kliknięcia.

Dioda stacji świeci na niebiesko po włączeniu zasilania. Dioda przy gnieździe baterii pokazuje ładowanie kolorem czerwonym, a pełne naładowanie niebieskim. Terminal sygnalizuje stan własną diodą: czerwona oznacza trwające ładowanie, zielona pełną baterię.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Zasilacz należy do zestawu; przewód sieciowy kupuje się osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 298.1,
  images: ['/images/products/5000-900139G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa Unitech 5000-900139G do HT730 Plus — stacja widziana z przodu i od tyłu z gniazdem terminala i gniazdem baterii'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900139G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Stacja ładująca, 1 terminal i 1 bateria zapasowa' },
    { name: 'Zasilacz w zestawie', value: '5 V / 6 A, bez przewodu sieciowego' },
    { name: 'Transmisja danych', value: 'Brak (stacje z danymi: USB 5000-900141G, Ethernet 5000-900140G)' },
  ],
  applications: ['Ładowanie terminala i baterii zapasowej przy stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-1-slot-usb', 'unitech-ht730-plus-stacja-1-slot-ethernet', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-stacji-dokujacej', 'unitech-ht730-plus-bateria'],
  downloads: [QSG_HT730_STACJA_1, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const stacja1UsbHt730: Product = {
  id: 'unitech-ht730-plus-stacja-1-slot-usb',
  slug: 'unitech-ht730-plus-stacja-1-slot-usb',
  name: 'Stacja 1-gniazdowa USB Unitech HT730 Plus (5000-900141G)',
  seoH1: 'Stacja 1-gniazdowa USB Unitech HT730 Plus',
  shortDescription: 'Stacja Unitech 5000-900141G na jeden terminal HT730 Plus: ładowanie, dane przez port USB-C i gniazdo na zapasową baterię.',
  seoTitle: 'Stacja USB Unitech 5000-900141G do HT730 Plus',
  seoDescription: 'Stacja 1-gniazdowa USB Unitech 5000-900141G: ładowanie oraz dane przez port USB-C, dla terminala Unitech HT730 Plus. Stacja USB Unitech HT730 Plus. PN: 5000-900141G.',
  description: `Stacja 5000-900141G ładuje terminal [Unitech HT730 Plus](/produkt/unitech-ht730-plus) przez gniazdo zasilania i jednocześnie przesyła dane przez port USB-C między terminalem a komputerem. Drugie gniazdo przyjmuje zapasową baterię.

Od [stacji ładującej 5000-900139G](/produkt/unitech-ht730-plus-stacja-1-slot) różni ją właśnie port USB-C do połączenia z komputerem. Stację zasila zasilacz z opakowania (5 V / 6 A), a kabel sieciowy kupuje się osobno.

Terminal wkłada się w dolnej osłonie lub w etui. Stacja przyjmuje także wersję HT730 Plus UHF.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Połączenie z komputerem wymaga osobnego przewodu USB-C.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 378.11,
  images: ['/images/products/5000-900141G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa USB Unitech 5000-900141G do HT730 Plus — stacja widziana z przodu i od tyłu z portem USB-C'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900141G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Stacja 1-gniazdowa z transmisją danych, 1 terminal i 1 bateria zapasowa' },
    { name: 'Transmisja danych', value: 'USB-C: terminal – komputer' },
    { name: 'Zasilacz w zestawie', value: '5 V / 6 A, bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie i synchronizacja terminala z komputerem'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-1-slot', 'unitech-ht730-plus-stacja-1-slot-ethernet', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-przewod-usb-c'],
  downloads: [QSG_HT730_STACJA_1, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const stacja1EthernetHt730: Product = {
  id: 'unitech-ht730-plus-stacja-1-slot-ethernet',
  slug: 'unitech-ht730-plus-stacja-1-slot-ethernet',
  name: 'Stacja 1-gniazdowa Ethernet Unitech HT730 Plus (5000-900140G)',
  seoH1: 'Stacja 1-gniazdowa Ethernet Unitech HT730 Plus',
  shortDescription: 'Stacja Unitech 5000-900140G do jednego terminala HT730 Plus: ładowanie, transmisja danych przez Ethernet (RJ45) lub USB 2.0 i gniazdo na zapasową baterię.',
  seoTitle: 'Stacja Ethernet Unitech 5000-900140G do HT730 Plus',
  seoDescription: 'Stacja 1-gniazdowa Ethernet Unitech 5000-900140G z portem RJ45 i USB 2.0 dla kolektora danych Unitech HT730 Plus. Stacja Ethernet Unitech HT730 Plus. PN: 5000-900140G.',
  description: `Stacja 5000-900140G łączy terminal [Unitech HT730 Plus](/produkt/unitech-ht730-plus) z siecią przewodową. Dane przesyła przez port Ethernet RJ45 albo przez port USB 2.0, a zasilanie doprowadza gniazdem DC. Drugie gniazdo ładuje zapasową baterię.

Stacje [ładująca](/produkt/unitech-ht730-plus-stacja-1-slot) i [USB](/produkt/unitech-ht730-plus-stacja-1-slot-usb) nie mają portu RJ45.

Do stacji dołączono zasilacz 5 V / 6 A; przewodu sieciowego brak. Współpracuje też z HT730 Plus UHF.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Do połączenia z siecią potrzebny jest przewód Ethernet z wtykiem RJ45.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 481.58,
  images: ['/images/products/5000-900140G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa Ethernet Unitech 5000-900140G do HT730 Plus — stacja widziana z przodu i od tyłu z portem RJ45 i portem USB'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900140G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Stacja 1-gniazdowa z Ethernetem, 1 terminal i 1 bateria zapasowa' },
    { name: 'Transmisja danych', value: 'Ethernet (RJ45) lub USB 2.0' },
    { name: 'Zasilacz w zestawie', value: '5 V / 6 A, bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie i połączenie terminala z siecią przewodową'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-1-slot', 'unitech-ht730-plus-stacja-1-slot-usb', 'unitech-przewod-zasilajacy-eu-3pin'],
  downloads: [QSG_HT730_STACJA_1, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const ladowarkaHt730: Product = {
  id: 'unitech-ht730-plus-ladowarka-baterii',
  slug: 'unitech-ht730-plus-ladowarka-baterii',
  name: 'Ładowarka 4 baterii Unitech HT730 Plus (5100-900040G)',
  seoH1: 'Ładowarka 4 baterii Unitech HT730 Plus',
  shortDescription: 'Ładowarka Unitech 5100-900040G na 4 baterie terminala HT730 Plus; zasilacz w komplecie, opcjonalne uchwyty montażowe.',
  seoTitle: 'Ładowarka 4 baterii Unitech 5100-900040G do HT730 Plus',
  seoDescription: 'Ładowarka 4 baterii Unitech 5100-900040G z zasilaczem w zestawie, na akumulatory Unitech HT730 Plus. Ładowarka baterii Unitech HT730 Plus. PN: 5100-900040G.',
  description: `Ładowarka 5100-900040G ładuje równocześnie cztery baterie [Unitech HT730 Plus](/produkt/unitech-ht730-plus). Ładowarka wykrywa włożoną baterię automatycznie i rozpoczyna ładowanie. Baterie [1400-900082G](/produkt/unitech-ht730-plus-bateria) kupuje się osobno.

Dioda zasilania świeci po podłączeniu zasilacza. Dioda przy gnieździe pokazuje stan: stałe czerwone światło oznacza ładowanie, a brak światła naładowaną baterię. Miganie na czerwono oznacza zasilanie bez włożonej baterii.

Zasilacz o parametrach 12 V / 5 A należy do zestawu, ale przewodu sieciowego nie ma. Po bokach ładowarki są porty na opcjonalne uchwyty montażowe (Cradle Hook), którymi przymocowuje się ją wkrętami.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Baterii ani terminala w zestawie nie ma.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 478.92,
  images: ['/images/products/5100-900040G.png'],
  imageDescriptions: ['Ładowarka 4 baterii Unitech 5100-900040G do HT730 Plus — płaska ładowarka z czterema gniazdami, w gniazdach baterie'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5100-900040G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Ładowarka 4 baterii' },
    { name: 'Zasilacz w zestawie', value: '12 V / 5 A, bez przewodu sieciowego' },
    { name: 'Opcjonalnie', value: 'Uchwyty montażowe (Cradle Hook)' },
  ],
  applications: ['Ładowanie baterii zapasowych dla kolejnych zmian'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-bateria', 'unitech-ht730-plus-stacja-4-slot', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a'],
  downloads: [QSG_HT730_LADOWARKA, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const stacja4Ht730: Product = {
  id: 'unitech-ht730-plus-stacja-4-slot',
  slug: 'unitech-ht730-plus-stacja-4-slot',
  name: 'Stacja ładująca 4-gniazdowa Unitech HT730 Plus (5000-900089G)',
  seoH1: 'Stacja ładująca 4-gniazdowa Unitech HT730 Plus',
  shortDescription: 'Stacja ładująca Unitech 5000-900089G na cztery terminale HT730 Plus, zasilacz w komplecie.',
  seoTitle: 'Stacja ładująca 4-gniazdowa Unitech 5000-900089G do HT730 Plus',
  seoDescription: 'Stacja ładująca 4-gniazdowa Unitech 5000-900089G na cztery terminale Unitech HT730 Plus, zasilacz w zestawie. Stacja wielogniazdowa Unitech HT730 Plus. PN: 5000-900089G.',
  description: `Stacja 5000-900089G ładuje jednocześnie do czterech terminali [Unitech HT730 Plus](/produkt/unitech-ht730-plus). Pasuje także do HT730 Plus UHF. Służy wyłącznie do ładowania, a o stanie naładowania informuje dioda na samym terminalu.

Terminal można ładować na dwa sposoby: bez osłony albo z osłoną po zdjęciu wyjmowanej części stacji. Wyjmowaną część zwalnia się, dociskając kciukiem oba jej końce, i podnosi się ją. Dioda zasilania stacji świeci na czerwono, gdy stacja jest włączona.

Stację dostarcza się z zasilaczem 12 V / 5 A, bez przewodu sieciowego. Wersja z portami sieciowymi to [stacja 5000-900091G](/produkt/unitech-ht730-plus-stacja-4-slot-ethernet).

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Terminali w zestawie nie ma.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 1145.66,
  images: ['/images/products/5000-900089G.png'],
  imageDescriptions: ['Stacja 4-gniazdowa Unitech 5000-900089G do HT730 Plus — stacja widziana z przodu i od tyłu, po cztery gniazda w rzędzie'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900089G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Stacja ładująca na 4 terminale' },
    { name: 'Terminal z osłoną', value: 'Po zdjęciu wyjmowanej części stacji' },
    { name: 'Zasilacz w zestawie', value: '12 V / 5 A, bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie kilku terminali odkładanych po zmianie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-4-slot-ethernet', 'unitech-ht730-plus-ladowarka-baterii', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a'],
  downloads: [QSG_HT730_STACJA_4, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const stacja4EthernetHt730: Product = {
  id: 'unitech-ht730-plus-stacja-4-slot-ethernet',
  slug: 'unitech-ht730-plus-stacja-4-slot-ethernet',
  name: 'Stacja 4-gniazdowa Ethernet Unitech HT730 Plus (5000-900091G)',
  seoH1: 'Stacja 4-gniazdowa Ethernet Unitech HT730 Plus',
  shortDescription: 'Stacja Unitech 5000-900091G na cztery terminale HT730 Plus z portami LAN i WAN, zasilacz w komplecie.',
  seoTitle: 'Stacja Ethernet 4-gniazdowa Unitech 5000-900091G do HT730 Plus',
  seoDescription: 'Stacja 4-gniazdowa Ethernet Unitech 5000-900091G z portami LAN i WAN dla czterech terminali Unitech HT730 Plus. Stacja sieciowa Unitech HT730 Plus. PN: 5000-900091G.',
  description: `Stacja 5000-900091G ma te same cztery gniazda na terminale [Unitech HT730 Plus](/produkt/unitech-ht730-plus) co [stacja ładująca 5000-900089G](/produkt/unitech-ht730-plus-stacja-4-slot) i dodatkowo obsługuje komunikację Ethernet.

Z tyłu są trzy porty. Port LAN łączy ją z kolejną stacją 4-gniazdową. Port WAN łączy ją z koncentratorem Ethernet. Do portu zasilania podłącza się zasilacz 12 V / 5 A z opakowania; przewodu sieciowego w nim nie ma. Niebieskie światło i migające czerwone na diodzie Ethernet oznaczają trwającą komunikację.

Terminal w osłonie wymaga zdjęcia wyjmowanej części stacji; bez osłony wkłada się go od razu. Stan ładowania pokazuje dioda terminala.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Sieć wymaga osobnego przewodu Ethernet.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 1374.81,
  images: ['/images/products/5000-900091G.png'],
  imageDescriptions: ['Stacja 4-gniazdowa Ethernet Unitech 5000-900091G do HT730 Plus — stacja widziana z przodu i od tyłu z portami LAN i WAN'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900091G' },
    { name: 'Kompatybilność', value: 'Unitech HT730 Plus, HT730 Plus UHF' },
    { name: 'Typ', value: 'Stacja na 4 terminale z Ethernetem' },
    { name: 'Porty', value: 'LAN (do kolejnej stacji), WAN (do koncentratora), zasilanie' },
    { name: 'Zasilacz w zestawie', value: '12 V / 5 A, bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie i połączenie kilku terminali z siecią przewodową'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-stacja-4-slot', 'unitech-ht730-plus-ladowarka-baterii', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a'],
  downloads: [QSG_HT730_STACJA_4, KATALOG_HT730],
  relatedProducts: [HT730],
  createdAt: '2026-10-29',
}

const bateriaHt330: Product = {
  id: 'unitech-ht330-bateria',
  slug: 'unitech-ht330-bateria',
  name: 'Bateria 5200 mAh Unitech HT330 (1400-900067G)',
  seoH1: 'Bateria 5200 mAh Unitech HT330',
  shortDescription: 'Bateria Unitech 1400-900067G, 3,85 V i 5200 mAh, do terminala HT330: ponad 20 godzin pracy, zależnie od środowiska.',
  seoTitle: 'Bateria Unitech 1400-900067G 5200 mAh do HT330',
  seoDescription: 'Bateria Unitech 1400-900067G, 3,85 V, 5200 mAh Li-ion, do Unitech HT330, kolektora danych z klawiaturą. Bateria Unitech HT330, akumulator do HT330 Unitech. PN: 1400-900067G.',
  description: `Bateria 1400-900067G to wymienny akumulator Li-ion 3,85 V o pojemności 5200 mAh do terminala [Unitech HT330](/produkt/unitech-ht330). Czas pracy przekracza 20 godzin, zależnie od środowiska, co wystarcza na całą zmianę, także przy intensywnym skanowaniu w czasie inwentaryzacji.

Terminal ładuje się do pełna w około 4,5 godziny, a przed pierwszym użyciem ładowanie trwa około 24 godzin. Funkcja Battery Care pozwala ograniczyć ładowanie do 80% lub 50% pojemności, co wydłuża żywotność baterii.

Do ładowania baterii zapasowych służą dodatkowe gniazdo [stacji 1-gniazdowej](/produkt/unitech-ht330-stacja-1-slot) oraz [ładowarka 4 baterii](/produkt/unitech-ht330-ladowarka-baterii).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 126.04,
  images: ['/images/products/1400-900067G.png'],
  imageDescriptions: ['Bateria 5200 mAh Unitech 1400-900067G do HT330 — płaska bateria z etykietą znamionową i oznaczeniami'],
  tags: TAGI,
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900067G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Napięcie i pojemność', value: '3,85 V, 5200 mAh' },
    { name: 'Typ', value: 'Li-ion, wymienna' },
    { name: 'Czas pracy', value: 'Ponad 20 godzin, zależnie od środowiska' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
  ],
  applications: ['Wymiana baterii przy pracy całozmianowej'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-stacja-1-slot', 'unitech-ht330-ladowarka-baterii'],
  downloads: [KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const etuiHt330: Product = {
  id: 'unitech-ht330-etui',
  slug: 'unitech-ht330-etui',
  name: 'Etui ochronne Unitech HT330 (3210-900035G)',
  seoH1: 'Etui ochronne Unitech HT330',
  shortDescription: 'Etui ochronne Unitech 3210-900035G do terminala HT330: upadki z 1,8 m zamiast 1,5 m.',
  seoTitle: 'Etui ochronne Unitech 3210-900035G do HT330',
  seoDescription: 'Etui ochronne (boot case) Unitech 3210-900035G dla Unitech HT330, upadki z 1,8 m. Etui do Unitech HT330, osłona Unitech HT330. PN: 3210-900035G.',
  description: `Etui 3210-900035G zakłada się na [Unitech HT330](/produkt/unitech-ht330). W etui terminal wytrzymuje upadek na beton z wysokości 1,8 m, a bez etui z 1,5 m.

Terminal wsuwa się w dolną część etui, a następnie zatrzaskuje oba górne narożniki. Zdejmuje się je, podważając jeden górny narożnik, a potem drugi, i wyciągając terminal.

[Uchwyt pistoletowy 5500-900100G](/produkt/unitech-ht330-uchwyt-pistoletowy) zakłada się na terminal bez etui. W [stacji 1-gniazdowej](/produkt/unitech-ht330-stacja-1-slot) etui wymaga zdjęcia wyjmowanej pokrywy.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 37.22,
  images: ['/images/products/3210-900035G.png'],
  imageDescriptions: ['Etui ochronne Unitech 3210-900035G do HT330 — tył terminala bez etui i etui z dużym otworem na aparat, głośnik i styki pogo'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900035G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Typ', value: 'Etui ochronne (boot case)' },
    { name: 'Upadek na beton', value: '1,8 m z etui (bez etui 1,5 m)' },
    { name: 'Stacja 1-gniazdowa', value: 'Po zdjęciu wyjmowanej pokrywy' },
  ],
  applications: ['Ochrona terminala przy ryzyku upadku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-szklo-ochronne', 'unitech-ht330-pasek-na-dlon', 'unitech-ht330-stacja-1-slot'],
  downloads: [QSG_HT330_ETUI, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const uchwytHt330: Product = {
  id: 'unitech-ht330-uchwyt-pistoletowy',
  slug: 'unitech-ht330-uchwyt-pistoletowy',
  name: 'Uchwyt pistoletowy Unitech HT330 (5500-900100G)',
  seoH1: 'Uchwyt pistoletowy Unitech HT330',
  shortDescription: 'Uchwyt pistoletowy Unitech 5500-900100G do terminala HT330 bez etui; połączenie przez styki pogo z tyłu terminala.',
  seoTitle: 'Uchwyt pistoletowy Unitech 5500-900100G do HT330',
  seoDescription: 'Uchwyt pistoletowy (gun grip) Unitech 5500-900100G dla Unitech HT330 użytkowanego bez etui. Uchwyt pistoletowy Unitech HT330. PN: 5500-900100G.',
  description: `Uchwyt 5500-900100G jest przeznaczony do terminala [Unitech HT330](/produkt/unitech-ht330) bez założonego etui. Terminal ma z tyłu styki pogo przeznaczone dla uchwytu pistoletowego.

Montaż polega na wsunięciu terminala w uchwyt aż do pełnego dopasowania. Demontaż: chwyta się dwa występy po bokach uchwytu, odgina je na zewnątrz i wypycha terminal do góry.

Terminal w uchwycie można ładować w [stacji 1-gniazdowej](/produkt/unitech-ht330-stacja-1-slot) po zdjęciu jej wyjmowanej pokrywy. Przed założeniem uchwytu zdejmuje się z terminala [etui 3210-900035G](/produkt/unitech-ht330-etui).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 177.57,
  images: ['/images/products/5500-900100G.png'],
  imageDescriptions: ['Uchwyt pistoletowy Unitech 5500-900100G z terminalem HT330 — terminal na uchwycie trzymanym w dłoni, widok z boku'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5500-900100G' },
    { name: 'Kompatybilność', value: 'Unitech HT330, terminal bez etui' },
    { name: 'Połączenie', value: 'Styki pogo z tyłu terminala' },
    { name: 'Stacja 1-gniazdowa', value: 'Po zdjęciu wyjmowanej pokrywy' },
  ],
  applications: ['Skanowanie z uchwytem pistoletowym'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-etui', 'unitech-ht330-stacja-1-slot', 'unitech-ht330-szklo-ochronne'],
  downloads: [QSG_HT330_UCHWYT, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const stacja1Ht330: Product = {
  id: 'unitech-ht330-stacja-1-slot',
  slug: 'unitech-ht330-stacja-1-slot',
  name: 'Stacja ładująca 1-gniazdowa Unitech HT330 (5000-900098G)',
  seoH1: 'Stacja ładująca 1-gniazdowa Unitech HT330',
  shortDescription: 'Stacja ładująca Unitech 5000-900098G na jeden terminal HT330, z miejscem na zapasową baterię; w komplecie zasilacz 12 V / 2 A.',
  seoTitle: 'Stacja ładująca Unitech 5000-900098G do HT330',
  seoDescription: 'Stacja ładująca 1-gniazdowa Unitech 5000-900098G z gniazdem na baterię i zasilaczem 12 V / 2 A w zestawie, dla Unitech HT330. Stacja Unitech HT330. PN: 5000-900098G.',
  description: `Stacja 5000-900098G ładuje jeden terminal [Unitech HT330](/produkt/unitech-ht330) przez styki na spodzie obudowy. Obok jest gniazdo na zapasową baterię. Stacja nie przesyła danych; do tego służy [stacja USB 5000-900099G](/produkt/unitech-ht330-stacja-1-slot-usb).

Terminal bez etui wchodzi do stacji z założoną wyjmowaną pokrywą. Gdy terminal ma etui lub uchwyt pistoletowy, pokrywę zdejmuje się przed ładowaniem, zginając jej rowki do środka i zsuwając ją w górę, a zakłada się z kliknięciem, dopasowując strzałki. Stację można przymocować do blatu wkrętem o średnicy do 3,0 mm.

Niebieska dioda zasilania oznacza włączoną stację. Dioda przy baterii jest czerwona w czasie ładowania, a po naładowaniu gaśnie.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}W opakowaniu jest zasilacz 12 V / 2 A.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 240.61,
  images: ['/images/products/5000-900098G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa Unitech 5000-900098G do HT330 — stacja widziana z góry i z przodu z gniazdem terminala i gniazdem baterii oraz zasilacz'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900098G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Typ', value: 'Stacja ładująca, 1 terminal i 1 bateria zapasowa' },
    { name: 'Zasilacz w zestawie', value: '12 V / 2 A (1010-900052G), bez przewodu sieciowego' },
    { name: 'Terminal w etui lub z uchwytem pistoletowym', value: 'Po zdjęciu wyjmowanej pokrywy' },
  ],
  applications: ['Ładowanie terminala i baterii zapasowej przy stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-stacja-1-slot-usb', 'unitech-ht330-zasilacz-stacji', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ht330-bateria'],
  downloads: [QSG_HT330_STACJA_1, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const stacja1UsbHt330: Product = {
  id: 'unitech-ht330-stacja-1-slot-usb',
  slug: 'unitech-ht330-stacja-1-slot-usb',
  name: 'Stacja 1-gniazdowa USB Unitech HT330 (5000-900099G)',
  seoH1: 'Stacja 1-gniazdowa USB Unitech HT330',
  shortDescription: 'Stacja Unitech 5000-900099G na jeden terminal HT330: ładowanie oraz wymiana danych z komputerem przez USB-C i gniazdo na baterię.',
  seoTitle: 'Stacja USB Unitech 5000-900099G do HT330',
  seoDescription: 'Stacja 1-gniazdowa USB Unitech 5000-900099G z portem USB-C do wymiany danych, dla kolektora danych Unitech HT330. Stacja USB Unitech HT330. PN: 5000-900099G.',
  description: `Stacja 5000-900099G różni się od [stacji ładującej 5000-900098G](/produkt/unitech-ht330-stacja-1-slot) portem USB-C, przez który terminal [Unitech HT330](/produkt/unitech-ht330) wymienia dane z komputerem. Zasilanie doprowadza się gniazdem DC, a drugie gniazdo przyjmuje zapasową baterię.

Obie stacje mają taki sam zestaw: wyjmowaną pokrywę i zasilacz 12 V / 2 A. Przewody sieciowe dla USA, UE i Wielkiej Brytanii są opcjonalne; przewód dla UE ma numer 1550-602333G.

Pokrywę zdejmuje się przed ładowaniem terminala w etui lub z uchwytem pistoletowym.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Dane trafiają do komputera przewodem USB-C, którego w stacji nie ma.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 254.93,
  images: ['/images/products/5000-900099G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa USB Unitech 5000-900099G do HT330 — stacja widziana z góry i z przodu z gniazdem terminala i portem USB-C oraz zasilacz'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900099G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Typ', value: 'Stacja 1-gniazdowa z transmisją danych, 1 terminal i 1 bateria zapasowa' },
    { name: 'Transmisja danych', value: 'USB-C: terminal – komputer' },
    { name: 'Zasilacz w zestawie', value: '12 V / 2 A (1010-900052G), bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie i synchronizacja terminala z komputerem'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-stacja-1-slot', 'unitech-ht330-zasilacz-stacji', 'unitech-przewod-zasilajacy-eu-3pin'],
  downloads: [QSG_HT330_STACJA_1, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const zasilaczStacjiHt330: Product = {
  id: 'unitech-ht330-zasilacz-stacji',
  slug: 'unitech-ht330-zasilacz-stacji',
  name: 'Zasilacz 12 V / 2 A do stacji 1-gniazdowych Unitech HT330 (1010-900052G)',
  seoH1: 'Zasilacz 12 V / 2 A do stacji 1-gniazdowych Unitech HT330',
  shortDescription: 'Zasilacz Unitech 1010-900052G, 12 V / 2 A, do stacji 1-gniazdowych terminala HT330; część zamienna.',
  seoTitle: 'Zasilacz 12 V / 2 A Unitech 1010-900052G do stacji HT330',
  seoDescription: 'Zasilacz 12 V / 2 A Unitech 1010-900052G do stacji 1-gniazdowych Unitech HT330. Zasilacz stacji Unitech HT330. PN: 1010-900052G.',
  description: `Zasilacz 1010-900052G ma parametry 12 V / 2 A i zasila stacje 1-gniazdowe terminala [Unitech HT330](/produkt/unitech-ht330): [ładującą](/produkt/unitech-ht330-stacja-1-slot) oraz [z portem USB](/produkt/unitech-ht330-stacja-1-slot-usb). Taki zasilacz jest już w opakowaniu każdej stacji, więc osobny numer służy do wymiany.

Zasilacz nie ma przewodu sieciowego. Do gniazdka łączy go [przewód 1550-602333G](/produkt/unitech-przewod-zasilajacy-eu-3pin). Do ładowania samego terminala przewodem USB-C służy inny zasilacz: [1010-900067G](/produkt/unitech-rp902-zasilacz).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 64.35,
  images: ['/images/products/1010-900052G.png'],
  imageDescriptions: ['Zasilacz 12 V / 2 A Unitech 1010-900052G — czarny zasilacz z gniazdem przewodu sieciowego i przewodem DC z wtykiem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900052G' },
    { name: 'Typ', value: 'Zasilacz do stacji 1-gniazdowych' },
    { name: 'Napięcie i prąd', value: '12 V / 2 A' },
    { name: 'Zgodność', value: 'Stacje 1-gniazdowe HT330: 5000-900098G, 5000-900099G' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Wymiana zasilacza stacji'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-stacja-1-slot', 'unitech-ht330-stacja-1-slot-usb', 'unitech-przewod-zasilajacy-eu-3pin'],
  downloads: [KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const ladowarkaHt330: Product = {
  id: 'unitech-ht330-ladowarka-baterii',
  slug: 'unitech-ht330-ladowarka-baterii',
  name: 'Ładowarka 4 baterii Unitech HT330 (5100-900035G)',
  seoH1: 'Ładowarka 4 baterii Unitech HT330',
  shortDescription: 'Ładowarka Unitech 5100-900035G na 4 baterie terminala HT330; w komplecie zasilacz z przewodem DC.',
  seoTitle: 'Ładowarka 4 baterii Unitech 5100-900035G do HT330',
  seoDescription: 'Ładowarka 4 baterii Unitech 5100-900035G wraz z zasilaczem, na akumulatory do Unitech HT330. Ładowarka baterii Unitech HT330. PN: 5100-900035G.',
  description: `Ładowarka 5100-900035G ładuje cztery baterie [Unitech HT330](/produkt/unitech-ht330) naraz. Baterię układa się w gnieździe nazwą modelu i paskiem do góry. Ładowarka rozpoznaje baterię i zaczyna ładowanie. Gdy rozpoznanie nie nastąpi, dioda nie świeci.

Dioda zasilania świeci się na zielono. Czerwona dioda ładowania wskazuje trwające ładowanie, zielona pełną baterię, a jej brak oznacza, że baterii nie wykryto. Baterii nie ma w zestawie. [Baterię 1400-900067G](/produkt/unitech-ht330-bateria) kupuje się osobno.

Zestaw obejmuje zasilacz 12 V / 5 A (3-pin); przewód sieciowy trzeba dokupić.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 967.31,
  images: ['/images/products/5100-900035G.png'],
  imageDescriptions: ['Ładowarka 4 baterii Unitech 5100-900035G do HT330 — płaska ładowarka z czterema gniazdami, w pierwszym gnieździe bateria'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5100-900035G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Typ', value: 'Ładowarka 4 baterii' },
    { name: 'Zasilacz w zestawie', value: '12 V / 5 A, bez przewodu sieciowego' },
  ],
  applications: ['Ładowanie baterii zapasowych przy stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-bateria', 'unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a'],
  downloads: [QSG_HT330_LADOWARKA, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const szkloHt330: Product = {
  id: 'unitech-ht330-szklo-ochronne',
  slug: 'unitech-ht330-szklo-ochronne',
  name: 'Szkło ochronne 9H Unitech HT330, 10 szt. (5400-900050G)',
  seoH1: 'Szkło ochronne 9H Unitech HT330, 10 szt.',
  shortDescription: 'Szkło ochronne 9H Unitech 5400-900050G do ekranu terminala HT330; 10 sztuk w opakowaniu.',
  seoTitle: 'Szkło ochronne Unitech 5400-900050G do HT330, 10 szt.',
  seoDescription: 'Szkło ochronne 9H Unitech 5400-900050G, opakowanie 10 sztuk, na ekran Unitech HT330. Szkło na ekran Unitech HT330. PN: 5400-900050G.',
  description: `Szkło 5400-900050G to szkło ochronne 9H do ekranu 4″ terminala [Unitech HT330](/produkt/unitech-ht330). W opakowaniu jest 10 sztuk, a cena na karcie dotyczy całego opakowania.

Pojedyncze szkło ma osobny numer 401639G, a w ofercie jest tylko opakowanie 10-sztukowe.

Wyświetlacz terminala obsługuje rękawice i mokre dłonie. Obudowę chroni osobno [etui 3210-900035G](/produkt/unitech-ht330-etui).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 415.29,
  images: ['/images/products/5400-900050G.png'],
  imageDescriptions: ['Szkło ochronne 9H Unitech 5400-900050G do HT330 — terminal z klawiaturą widziany z przodu, na ekranie przezroczyste szkło'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900050G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Twardość', value: '9H' },
    { name: 'Zawartość opakowania', value: '10 sztuk' },
  ],
  applications: ['Ochrona ekranu terminali w całej flocie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-etui', 'unitech-ht330-uchwyt-pistoletowy'],
  downloads: [KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const pasekHt330: Product = {
  id: 'unitech-ht330-pasek-na-dlon',
  slug: 'unitech-ht330-pasek-na-dlon',
  name: 'Pasek na dłoń Unitech HT330 (386185G)',
  seoH1: 'Pasek na dłoń Unitech HT330',
  shortDescription: 'Pasek na dłoń Unitech 386185G do terminala HT330 z regulacją obwodu dłoni; część zamienna.',
  seoTitle: 'Pasek na dłoń Unitech 386185G do HT330',
  seoDescription: 'Pasek na dłoń Unitech 386185G dla kolektora danych Unitech HT330. Pasek na rękę Unitech HT330. PN: 386185G.',
  description: `Pasek 386185G zakłada się na dłoń przy pracy z terminalem [Unitech HT330](/produkt/unitech-ht330). Pasek jest w zestawie terminala, więc osobny numer służy do wymiany zużytego egzemplarza.

Obwód paska reguluje się w trzech krokach: odrywa się jedną stronę paska, ściąga się jego środkową rozciągliwą część do uzyskania potrzebnego obwodu dłoni i przykleja się pasek z powrotem. Ramię mocujące (386239G) i śruby (381357G) mają osobne numery, a komplet z paskiem, ramieniem i śrubami ma numer 5400-900040G.

Terminal ma w tylnej części otwory na pasek.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 42.98,
  images: ['/images/products/386185G.png'],
  imageDescriptions: ['Pasek na dłoń Unitech 386185G na terminalu HT330 — tył terminala trzymany w dłoni z założonym paskiem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '386185G' },
    { name: 'Kompatybilność', value: 'Unitech HT330' },
    { name: 'Typ', value: 'Pasek na dłoń z regulacją obwodu' },
  ],
  applications: ['Praca z terminalem trzymanym na dłoni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht330-etui', 'unitech-ht330-uchwyt-pistoletowy'],
  downloads: [QSG_HT330_PASEK, KATALOG_HT330],
  relatedProducts: [HT330],
  createdAt: '2026-10-29',
}

const rysik: Product = {
  id: 'unitech-rysik-z-linka',
  slug: 'unitech-rysik-z-linka',
  name: 'Rysik z linką sprężynową Unitech HT730 Plus i HT330 (1979-900003G)',
  seoH1: 'Rysik z linką sprężynową Unitech HT730 Plus i HT330',
  shortDescription: 'Rysik Unitech 1979-900003G z linką sprężynową do terminali HT730 Plus i HT330.',
  seoTitle: 'Rysik Unitech 1979-900003G do HT730 Plus i HT330',
  seoDescription: 'Rysik z linką sprężynową Unitech 1979-900003G do terminali mobilnych z klawiaturą Unitech HT730 Plus i Unitech HT330. Rysik do Unitech HT730 Plus, rysik do Unitech HT330. PN: 1979-900003G.',
  description: `Rysik 1979-900003G ma linkę sprężynową (coil strap). Pasuje do terminali [HT730 Plus](/produkt/unitech-ht730-plus) i [HT330](/produkt/unitech-ht330).

Ekran HT730 Plus obsługuje rysik 3 mm. W HT330 rysik 1979-900003G działa tylko w trybie rękawic; w trybie zwykłego dotyku ekran go nie rozpoznaje. Tryb włącza się w Settings → Accessibility → Glove Mode.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 30.65,
  images: ['/images/products/1979-900003G.png'],
  imageDescriptions: ['Rysik Unitech 1979-900003G z linką sprężynową — rysik z gumową końcówką i skręconą linką zakończoną pętlą'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1979-900003G' },
    { name: 'Zgodność', value: 'Unitech HT730 Plus, HT330' },
    { name: 'Typ', value: 'Rysik z linką sprężynową' },
    { name: 'HT330: ustawienie ekranu', value: 'Tryb rękawic (Settings → Accessibility → Glove Mode)' },
  ],
  applications: ['Obsługa ekranu rysikiem'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ht730-plus-szklo-ochronne', 'unitech-ht330-szklo-ochronne'],
  downloads: [KATALOG_HT730, KATALOG_HT330],
  relatedProducts: [HT730, HT330],
  createdAt: '2026-10-29',
}

export const unitechHandheldAccessories: Product[] = [
  bateriaHt730,
  uchwytHt730,
  szkloHt730,
  pasekHt730,
  oslonaStandard,
  oslonaDalekiZasieg,
  stacja1Ht730,
  stacja1UsbHt730,
  stacja1EthernetHt730,
  ladowarkaHt730,
  stacja4Ht730,
  stacja4EthernetHt730,
  bateriaHt330,
  etuiHt330,
  uchwytHt330,
  stacja1Ht330,
  stacja1UsbHt330,
  zasilaczStacjiHt330,
  ladowarkaHt330,
  szkloHt330,
  pasekHt330,
  rysik,
]
