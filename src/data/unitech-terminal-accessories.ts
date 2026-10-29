import type { Product } from './products'

// Akcesoria do terminali Unitech EA660, EA530 i EA530 UHF (29.10.2026).
// Karty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Zgodność wg przewodników akcesoriów EA660 i EA530 (09.2026) oraz skróconych instrukcji stacji, etui i uchwytu.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U2.md

const EA660 = 'unitech-ea660'
const EA530 = 'unitech-ea530'
const EA530_UHF = 'unitech-ea530-uhf'
const TERMINALE_EA = [EA660, EA530, EA530_UHF]
const TERMINALE_EA530 = [EA530, EA530_UHF]
const TAGI: Product['tags'] = ['retail', 'magazyn', 'logistyka']

const KATALOG_EA660 = { name: 'Katalog akcesoriów Unitech EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-akcesoria-en.pdf', size: '1,6 MB' }
const KATALOG_EA530 = { name: 'Katalog akcesoriów Unitech EA530 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea530-akcesoria-en.pdf', size: '1,8 MB' }
const KATALOGI_EA = [KATALOG_EA660, KATALOG_EA530]
const QSG_STACJA_1_LADUJACA = { name: 'Skrócona instrukcja stacji 1-gniazdowej do ładowania (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-stacja-1-gniazdo-ladujaca-skrocona-instrukcja-en.pdf', size: '967 KB' }
const QSG_STACJA_1_USB_ETHERNET = { name: 'Skrócona instrukcja stacji 1-gniazdowych USB i Ethernet (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-stacja-1-gniazdo-usb-ethernet-skrocona-instrukcja-en.pdf', size: '808 KB' }
const QSG_STACJA_5 = { name: 'Skrócona instrukcja stacji 5-gniazdowych do ładowania i Ethernet (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-stacja-5-gniazd-skrocona-instrukcja-en.pdf', size: '790 KB' }
const QSG_STACJA_DOKUJACA = { name: 'Skrócona instrukcja stacji dokującej (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-stacja-dokujaca-skrocona-instrukcja-en.pdf', size: '928 KB' }
const QSG_STACJA_4_4 = { name: 'Skrócona instrukcja stacji na 4 terminale i 4 baterie EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-stacja-4-4-skrocona-instrukcja-en.pdf', size: '752 KB' }
const QSG_LADOWARKA_EA660 = { name: 'Skrócona instrukcja ładowarki 4 baterii EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-ladowarka-baterii-skrocona-instrukcja-en.pdf', size: '621 KB' }
const QSG_ETUI_EA660 = { name: 'Skrócona instrukcja etui ochronnego EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-etui-skrocona-instrukcja-en.pdf', size: '532 KB' }
const QSG_UCHWYT_EA660 = { name: 'Skrócona instrukcja uchwytu pistoletowego EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-uchwyt-pistoletowy-skrocona-instrukcja-en.pdf', size: '799 KB' }

// Stacje 1-gniazdowe korzystają z zasilacza i przewodu USB-C terminala. Przewód jest w opakowaniu terminala, zasilacz nie.
const ZASILACZ_USB_C = `**Wymagane — sprzedawane osobno**

- [Zasilacz Unitech EA660 i EA530, wtyczka EU (1010-900074G)](/produkt/unitech-ea-zasilacz-usb-c-eu)

`
const PRZEWOD_SIECIOWY_C13 = `**Wymagane — sprzedawane osobno**

- [Przewód zasilający EU Unitech, wtyk Schuko – złącze C13 (1550-602333G)](/produkt/unitech-przewod-zasilajacy-eu-3pin)

`

const zasilaczUsbC: Product = {
  id: 'unitech-ea-zasilacz-usb-c-eu',
  slug: 'unitech-ea-zasilacz-usb-c-eu',
  name: 'Zasilacz Unitech EA660 i EA530, wtyczka EU (1010-900074G)',
  seoH1: 'Zasilacz Unitech EA660 i EA530, wtyczka EU',
  shortDescription: 'Zasilacz Unitech 1010-900074G z wtyczką EU do terminali EA660, EA530 i EA530 UHF: szybkie ładowanie przez przewód USB-C, zasila też stacje 1-gniazdowe.',
  seoTitle: 'Zasilacz Unitech 1010-900074G do EA660, EA530 i EA530 UHF',
  seoDescription: 'Zasilacz Unitech 1010-900074G z wtyczką EU i szybkim ładowaniem do terminali mobilnych Unitech EA660, EA530 oraz EA530 UHF i do stacji 1-gniazdowych. Zasilacz do terminala Unitech EA660, zasilacz Unitech EA530. PN: 1010-900074G.',
  description: `Zasilacz 1010-900074G ma wtyczkę europejską i szybkie ładowanie Quick Charge. Terminal podłącza się do niego przewodem USB-C. W opakowaniu [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf) są bateria, przewód USB-C i skrócona instrukcja. Zasilacza w nich nie ma.

Ten zasilacz z przewodem USB-C zasila także stacje 1-gniazdowe: [ładującą](/produkt/unitech-ea-stacja-1-slot), [z portem USB](/produkt/unitech-ea-stacja-1-slot-usb) i [z Ethernetem](/produkt/unitech-ea-stacja-1-slot-ethernet). Dla stacji Unitech zaleca zasilacz oryginalny. Zamiennik musi mieć moc min. 15 W i funkcję szybkiego ładowania.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 82.76,
  images: ['/images/products/1010-900074G.png'],
  imageDescriptions: ['Zasilacz Unitech 1010-900074G z wtyczką EU — czarny zasilacz widziany od strony wtyczki, na obudowie widoczne oznaczenie CE'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900074G' },
    { name: 'Typ', value: 'Zasilacz sieciowy z szybkim ładowaniem' },
    { name: 'Wtyczka', value: 'EU' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Połączenie z terminalem', value: 'Przewód USB-C (1550-905908G)' },
    { name: 'Stacje', value: '1-gniazdowe: 5000-900129G, 5000-900130G, 5000-900131G' },
  ],
  applications: ['Ładowanie terminala przy stanowisku pracy'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-przewod-usb-c', 'unitech-ea-stacja-1-slot', 'unitech-ea-stacja-1-slot-usb', 'unitech-ea-stacja-1-slot-ethernet'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const przewodUsbC: Product = {
  id: 'unitech-ea-przewod-usb-c',
  slug: 'unitech-ea-przewod-usb-c',
  name: 'Przewód USB 3.0 typ C Unitech EA660 i EA530 (1550-905908G)',
  seoH1: 'Przewód USB 3.0 typ C Unitech EA660 i EA530',
  shortDescription: 'Przewód Unitech 1550-905908G, USB 3.0 typ C, do terminali EA660, EA530 i EA530 UHF oraz stacji 1-gniazdowych: ładowanie przez zasilacz z szybkim ładowaniem.',
  seoTitle: 'Przewód USB-C Unitech 1550-905908G do EA660 i EA530',
  seoDescription: 'Przewód USB 3.0 typ C Unitech 1550-905908G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF oraz stacji 1-gniazdowych, z obsługą szybkiego ładowania. Przewód USB-C do Unitech EA660, kabel do Unitech EA530. PN: 1550-905908G.',
  description: `Przewód 1550-905908G ma standard USB 3.0 i złącza USB-A oraz USB-C. Łączy zasilacz z terminalem albo ze stacją 1-gniazdową i obsługuje szybkie ładowanie. Sprzedawany osobno służy jako przewód zapasowy albo drugi przewód przy stanowisku ładowania z [zasilaczem 1010-900074G](/produkt/unitech-ea-zasilacz-usb-c-eu).

Terminale [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf) mają przewód USB-C w opakowaniu. Stacje 1-gniazdowe korzystają z takiego samego przewodu i zasilacza jak terminal.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 58.26,
  images: ['/images/products/1550-905908G.png'],
  imageDescriptions: ['Przewód USB 3.0 typ C Unitech 1550-905908G — wtyk USB-A i wtyk USB-C na czarnym przewodzie'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1550-905908G' },
    { name: 'Typ', value: 'Przewód USB 3.0, złącze typu C' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF; stacje 1-gniazdowe' },
    { name: 'Ładowanie', value: 'Z obsługą szybkiego ładowania' },
  ],
  applications: ['Zapasowy przewód do ładowania terminala'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-zasilacz-usb-c-eu', 'unitech-ea-stacja-1-slot'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const pasekNaDlon: Product = {
  id: 'unitech-ea-pasek-na-dlon',
  slug: 'unitech-ea-pasek-na-dlon',
  name: 'Pasek na dłoń ze stałym ramieniem Unitech EA660 i EA530 (5400-900052G)',
  seoH1: 'Pasek na dłoń ze stałym ramieniem Unitech EA660 i EA530',
  shortDescription: 'Pasek na dłoń Unitech 5400-900052G ze stałym ramieniem mocującym do terminali EA660, EA530 i EA530 UHF; sprzedawany w osobnym opakowaniu.',
  seoTitle: 'Pasek na dłoń Unitech 5400-900052G do EA660 i EA530',
  seoDescription: 'Pasek na dłoń ze stałym ramieniem Unitech 5400-900052G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF. Pasek do Unitech EA660, pasek na rękę Unitech EA530. PN: 5400-900052G.',
  description: `Pasek 5400-900052G zakłada się na dłoń, a stałe ramię mocuje go w punkcie mocowania paska na terminalu. Pasuje do [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Jest sprzedawany w osobnym opakowaniu.

Terminal z paskiem można ładować w stacjach bez zdejmowania paska, jeśli w stacji jest standardowa wkładka. Przed wymianą baterii zdejmuje się klips paska.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 78.36,
  images: ['/images/products/5400-900052G.png', '/images/products/5400-900052G-2.png'],
  imageDescriptions: [
    'Pasek na dłoń Unitech 5400-900052G na terminalu EA660 — tył terminala z paskiem i klipsem mocującym',
    'Pasek na dłoń Unitech 5400-900052G na terminalu EA530 — tył terminala z paskiem i klipsem mocującym',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900052G' },
    { name: 'Typ', value: 'Pasek na dłoń ze stałym ramieniem, osobne opakowanie' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
  ],
  applications: ['Praca z terminalem trzymanym na dłoni'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea660-etui', 'unitech-ea530-etui', 'unitech-ea660-uchwyt-pistoletowy', 'unitech-ea530-uchwyt-pistoletowy'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacja1Ladujaca: Product = {
  id: 'unitech-ea-stacja-1-slot',
  slug: 'unitech-ea-stacja-1-slot',
  name: 'Stacja ładująca 1-gniazdowa Unitech EA660 i EA530 (5000-900129G)',
  seoH1: 'Stacja ładująca 1-gniazdowa Unitech EA660 i EA530',
  shortDescription: 'Stacja ładująca Unitech 5000-900129G do jednego terminala EA660, EA530 lub EA530 UHF: ładowanie przez styki, zasilanie przez port USB-C.',
  seoTitle: 'Stacja ładująca Unitech 5000-900129G do EA660 i EA530',
  seoDescription: 'Stacja ładująca 1-gniazdowa Unitech 5000-900129G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF, zasilanie USB-C, zasilacz i przewód osobno. Stacja Unitech EA660, stacja ładująca Unitech EA530. PN: 5000-900129G.',
  description: `Stacja 5000-900129G ładuje jeden terminal przez styki na jego spodzie. Służy tylko do ładowania i nie ma gniazda na baterię zapasową. Zasilanie doprowadza się do portu USB-C stacji. Zielona dioda z przodu pokazuje, że stacja ma zasilanie, a stan ładowania widać na terminalu.

Terminal wchodzi do stacji z paskiem na dłoń i bez niego. Gdy ma etui lub uchwyt pistoletowy, wkładkę stacji zdejmuje się przed ładowaniem. Wkładkę zakłada się z powrotem, aż zaskoczy. Unitech zaleca zasilacz oryginalny. Zamienny powinien mieć co najmniej 15 W i obsługiwać napięcia 5 V / 3 A, 9 V / 2 A lub 12 V / 1,5 A.

## Co jest potrzebne do użycia?

${ZASILACZ_USB_C}W zestawie jest sama stacja z wkładką. Stację zasila przewód USB-C z opakowania terminala; [zapasowy przewód 1550-905908G](/produkt/unitech-ea-przewod-usb-c) jest dostępny osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 151.76,
  images: ['/images/products/5000-900129G.png', '/images/products/5000-900129G-2.png'],
  imageDescriptions: [
    'Stacja 1-gniazdowa Unitech 5000-900129G — widok na gniazdo terminala i wkładkę stacji',
    'Stacja 1-gniazdowa Unitech 5000-900129G — stacja bez terminala z powiększeniem styków ładowania oraz stacja z terminalem EA660',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900129G' },
    { name: 'Typ', value: 'Stacja ładująca, 1 terminal, bez gniazda na baterię' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Zasilanie', value: 'Port USB-C; zasilacz z szybkim ładowaniem, min. 15 W' },
    { name: 'W zestawie', value: 'Stacja z wkładką zdejmowaną' },
    { name: 'Terminal w etui lub z uchwytem pistoletowym', value: 'Po zdjęciu wkładki' },
  ],
  applications: ['Ładowanie terminala odkładanego na biurku lub przy kasie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-zasilacz-usb-c-eu', 'unitech-ea-przewod-usb-c', 'unitech-ea-stacja-1-slot-usb', 'unitech-ea-stacja-1-slot-ethernet'],
  downloads: [QSG_STACJA_1_LADUJACA, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacja1Usb: Product = {
  id: 'unitech-ea-stacja-1-slot-usb',
  slug: 'unitech-ea-stacja-1-slot-usb',
  name: 'Stacja 1-gniazdowa z portem USB Unitech EA660 i EA530 (5000-900130G)',
  seoH1: 'Stacja 1-gniazdowa z portem USB Unitech EA660 i EA530',
  shortDescription: 'Stacja Unitech 5000-900130G z portem USB-C do jednego terminala EA660, EA530 lub EA530 UHF; w zestawie wkładki do obu modeli.',
  seoTitle: 'Stacja z portem USB Unitech 5000-900130G do EA660 i EA530',
  seoDescription: 'Stacja 1-gniazdowa z portem USB Unitech 5000-900130G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF: ładowanie i port USB-C, wkładki do EA660 i EA530. Stacja USB Unitech EA660, stacja Unitech EA530. PN: 5000-900130G.',
  description: `Stacja 5000-900130G ładuje jeden terminal i ma na tylnej ściance dwa porty USB-C. Pierwszy (Charging Port) służy do zasilania, a drugi jest portem danych. EA660 może przez tę stację pracować w trybie USB host.

Fabrycznie w stacji jest wkładka do [Unitech EA660](/produkt/unitech-ea660). Do [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf) dołączono osobną wkładkę, którą trzeba wymienić przed użyciem. Gdy terminal ma etui albo uchwyt pistoletowy, wkładkę trzeba zdjąć.

## Co jest potrzebne do użycia?

${ZASILACZ_USB_C}W pudełku jest stacja i dwie wkładki. Zasilacza ani przewodu USB-C w nim nie ma; do zasilania stacji wystarczy przewód z zestawu terminala.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 313.42,
  images: ['/images/products/5000-900130G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa z portem USB Unitech 5000-900130G — terminal EA660 w stacji oraz stacja od tyłu z dwoma portami USB-C'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900130G' },
    { name: 'Typ', value: 'Stacja 1-gniazdowa z portem USB' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Porty z tyłu', value: '2 × USB-C: zasilanie i dane' },
    { name: 'W zestawie', value: 'Stacja z wkładką EA660 oraz wkładka EA530' },
    { name: 'Zasilanie', value: 'Port USB-C; zasilacz i przewód osobno' },
  ],
  applications: ['Ładowanie terminala przy stanowisku z połączeniem USB'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-zasilacz-usb-c-eu', 'unitech-ea-przewod-usb-c', 'unitech-ea-stacja-1-slot', 'unitech-ea-stacja-1-slot-ethernet'],
  downloads: [QSG_STACJA_1_USB_ETHERNET, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacja1Ethernet: Product = {
  id: 'unitech-ea-stacja-1-slot-ethernet',
  slug: 'unitech-ea-stacja-1-slot-ethernet',
  name: 'Stacja 1-gniazdowa z Ethernetem Unitech EA660 i EA530 (5000-900131G)',
  seoH1: 'Stacja 1-gniazdowa z Ethernetem Unitech EA660 i EA530',
  shortDescription: 'Stacja Unitech 5000-900131G z gniazdem Ethernet do jednego terminala EA660, EA530 lub EA530 UHF; ładowanie, port USB i USB-C.',
  seoTitle: 'Stacja z Ethernetem Unitech 5000-900131G do EA660 i EA530',
  seoDescription: 'Stacja 1-gniazdowa z Ethernetem Unitech 5000-900131G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF: gniazdo Ethernet, port USB, port USB-C i ładowanie. Stacja Ethernet Unitech EA660. PN: 5000-900131G.',
  description: `Stacja 5000-900131G ma z tyłu gniazdo Ethernet, port USB, port USB-C do danych i port USB-C do zasilania. Przez tę stację EA660 korzysta z sieci przewodowej i trybu USB host.

W opakowaniu są stacja z założoną wkładką do [Unitech EA660](/produkt/unitech-ea660) i jedna wkładka do [Unitech EA530](/produkt/unitech-ea530) oraz [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Przed pierwszym użyciem trzeba sprawdzić, czy wkładka pasuje do modelu terminala.

## Co jest potrzebne do użycia?

${ZASILACZ_USB_C}Stacja nie ma w zestawie elementów zasilania. Przewód USB-C dołączony do terminala łączy ją z zasilaczem.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 401.13,
  images: ['/images/products/5000-900131G.png'],
  imageDescriptions: ['Stacja 1-gniazdowa z Ethernetem Unitech 5000-900131G — terminal EA660 w stacji oraz stacja od tyłu z gniazdem Ethernet i portami USB'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900131G' },
    { name: 'Typ', value: 'Stacja 1-gniazdowa z Ethernetem' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Porty z tyłu', value: 'Ethernet, USB, 2 × USB-C: zasilanie i dane' },
    { name: 'W zestawie', value: 'Stacja z wkładką EA660 oraz wkładka EA530' },
    { name: 'Zasilanie', value: 'Port USB-C; zasilacz i przewód osobno' },
  ],
  applications: ['Ładowanie i połączenie z siecią przewodową przy stanowisku stałym'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-zasilacz-usb-c-eu', 'unitech-ea-przewod-usb-c', 'unitech-ea-stacja-1-slot', 'unitech-ea-stacja-1-slot-usb'],
  downloads: [QSG_STACJA_1_USB_ETHERNET, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacja5: Product = {
  id: 'unitech-ea-stacja-5-slot',
  slug: 'unitech-ea-stacja-5-slot',
  name: 'Stacja ładująca 5-gniazdowa Unitech EA660 i EA530 (5000-900132G)',
  seoH1: 'Stacja ładująca 5-gniazdowa Unitech EA660 i EA530',
  shortDescription: 'Stacja ładująca Unitech 5000-900132G na pięć terminali EA660, EA530 lub EA530 UHF. Zasilacz dołączony, przewód do gniazdka kupowany osobno.',
  seoTitle: 'Stacja 5-gniazdowa Unitech 5000-900132G do EA660 i EA530',
  seoDescription: 'Stacja ładująca 5-gniazdowa Unitech 5000-900132G z zasilaczem w pudełku ładuje naraz pięć terminali Unitech EA660, EA530 i EA530 UHF. Stacja 5-slot Unitech EA660, stacja Unitech EA530. PN: 5000-900132G.',
  description: `Stacja 5000-900132G ładuje pięć terminali jednocześnie. Zestaw obejmuje stację z założonymi wkładkami do EA660, pięć wkładek do EA530 i zasilacz 12 V / 5 A, który podłącza się do gniazda DC. Każde gniazdo ma własną wkładkę. Gniazdo przyjmie też terminal w etui lub z uchwytem; wtedy wkładkę tego gniazda zdejmuje się.

Zielona dioda zasilania świeci, gdy stacja ma napięcie. Dioda ta nie zmienia stanu po włożeniu terminala, a postęp ładowania pokazuje sam terminal. Stacja przyjmuje [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf), także z paskiem na dłoń.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Przewodu do gniazdka nie ma w pudełku. Unitech oferuje go w wersjach US, EU i UK.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 1225.58,
  images: ['/images/products/5000-900132G.png'],
  imageDescriptions: ['Stacja 5-gniazdowa Unitech 5000-900132G — pięć terminali EA660 w gniazdach stacji'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900132G' },
    { name: 'Typ', value: 'Stacja ładująca, 5 terminali, tylko ładowanie' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'W zestawie', value: 'Stacja z wkładkami EA660, 5 wkładek EA530, zasilacz 12 V / 5 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Ładowanie floty terminali po zmianie roboczej'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a', 'unitech-ea-stacja-5-slot-ethernet'],
  downloads: [QSG_STACJA_5, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacja5Ethernet: Product = {
  id: 'unitech-ea-stacja-5-slot-ethernet',
  slug: 'unitech-ea-stacja-5-slot-ethernet',
  name: 'Stacja 5-gniazdowa z Ethernetem Unitech EA660 i EA530 (5000-900134G)',
  seoH1: 'Stacja 5-gniazdowa z Ethernetem Unitech EA660 i EA530',
  shortDescription: 'Stacja Unitech 5000-900134G łączy ładowanie pięciu terminali EA660, EA530 lub EA530 UHF z portem Ethernet. Przewód sieciowy nie wchodzi w skład zestawu.',
  seoTitle: 'Stacja z Ethernetem Unitech 5000-900134G do EA660 i EA530',
  seoDescription: 'Stacja 5-gniazdowa z Ethernetem Unitech 5000-900134G do ładowania pięciu terminali Unitech EA660, EA530 i EA530 UHF, z zasilaczem 12 V / 5 A. Stacja Ethernet Unitech EA660. PN: 5000-900134G.',
  description: `Stacja 5000-900134G łączy ładowanie pięciu terminali z portem Ethernet. Ma dwukolorową diodę stanu sieci: czerwone światło oznacza podłączony terminal, a migające niebieskie — połączenie danych przez Ethernet. Dioda zasilania świeci na zielono, gdy stacja jest zasilana.

W pudełku są: stacja, pięć wkładek do [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf) oraz zasilacz 12 V / 5 A. Wkładki do [Unitech EA660](/produkt/unitech-ea660) są już w stacji. Wkładka musi odpowiadać modelowi terminala, a po jej zdjęciu gniazdo obsługuje urządzenie w etui lub z uchwytem.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Zasilacz stacji jest w zestawie, a przewodu do gniazdka brak.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 2225.95,
  images: ['/images/products/5000-900134G.png'],
  imageDescriptions: ['Stacja 5-gniazdowa z Ethernetem Unitech 5000-900134G — pięć terminali EA660 w gniazdach stacji'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900134G' },
    { name: 'Typ', value: 'Stacja 5-gniazdowa z portem Ethernet' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Dioda sieci', value: 'Czerwona: terminal podłączony; migająca niebieska: połączenie danych Ethernet' },
    { name: 'W zestawie', value: 'Stacja z wkładkami EA660, 5 wkładek EA530, zasilacz 12 V / 5 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Ładowanie terminali z łącznością przewodową w punkcie wydawania sprzętu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-12v-5a', 'unitech-ea-stacja-5-slot'],
  downloads: [QSG_STACJA_5, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const stacjaDokujaca: Product = {
  id: 'unitech-ea-stacja-dokujaca',
  slug: 'unitech-ea-stacja-dokujaca',
  name: 'Stacja dokująca Unitech EA660 i EA530 (5000-900142G)',
  seoH1: 'Stacja dokująca Unitech EA660 i EA530',
  shortDescription: 'Stacja dokująca Unitech 5000-900142G do EA660, EA530 i EA530 UHF: ładowanie i tryb biurkowy z zewnętrznym monitorem, HDMI, Ethernet i cztery porty USB.',
  seoTitle: 'Stacja dokująca Unitech 5000-900142G do EA660 i EA530',
  seoDescription: 'Stacja dokująca Unitech 5000-900142G do terminali mobilnych Unitech EA660, EA530 i EA530 UHF: tryb biurkowy, monitor przez HDMI, Ethernet, porty USB, zasilacz 5 V / 6 A w zestawie. Stacja dokująca Unitech EA660. PN: 5000-900142G.',
  description: `Stacja dokująca 5000-900142G łączy ładowanie z trybem biurkowym: terminal włożony do stacji może pracować na zewnętrznym monitorze. Stacja ma złącze HDMI, gniazdo Ethernet i cztery porty USB. Zestaw obejmuje stację z dwiema wkładkami oraz zasilacz 5 V / 6 A.

Wkładka „EA660” jest przeznaczona do terminala bez etui, także z paskiem na dłoń. Wkładka „EA660-B” pasuje do terminala w etui oraz z uchwytem pistoletowym. Wkładkę zdejmuje się, ściskając jej końce i unosząc ją do góry.

Przed włożeniem terminala stacja musi być zasilana i połączona z monitorem przez HDMI. W [Unitech EA530](/produkt/unitech-ea530) aplikacja DisplayLink jest wbudowana, a w [Unitech EA660](/produkt/unitech-ea660) instaluje się ją z pliku APK. Do trybu biurkowego służy aplikacja StageGO: kod QR skanuje się przed włożeniem terminala.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Zasilacz 5 V / 6 A jest w zestawie, przewód do gniazdka — osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 2453.32,
  images: ['/images/products/5000-900142G.png', '/images/products/5000-900142G-2.png'],
  imageDescriptions: [
    'Stacja dokująca Unitech 5000-900142G — widok z przodu na gniazdo terminala z wkładką EA660-B',
    'Stacja dokująca Unitech 5000-900142G — widok od strony złączy: USB, Ethernet, gniazdo zasilania i kolejne porty USB',
  ],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900142G' },
    { name: 'Typ', value: 'Stacja dokująca z trybem biurkowym' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'Złącza', value: 'HDMI, Ethernet, 4 × USB, gniazdo zasilania DC' },
    { name: 'W zestawie', value: 'Stacja z wkładkami „EA660” i „EA660-B”, zasilacz 5 V / 6 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Stanowisko biurkowe z terminalem i monitorem na zapleczu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-zasilacz-stacji-dokujacej', 'unitech-ea660-etui', 'unitech-ea530-etui'],
  downloads: [QSG_STACJA_DOKUJACA, ...KATALOGI_EA],
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const zasilaczStacjiDokujacej: Product = {
  id: 'unitech-ea-zasilacz-stacji-dokujacej',
  slug: 'unitech-ea-zasilacz-stacji-dokujacej',
  name: 'Zasilacz 5 V / 6 A do stacji dokującej Unitech (1010-900043G)',
  seoH1: 'Zasilacz 5 V / 6 A do stacji dokującej Unitech',
  shortDescription: 'Zasilacz Unitech 1010-900043G, 5 V / 6 A, do stacji dokującej 5000-900142G terminali EA660, EA530 i EA530 UHF; część zamienna.',
  seoTitle: 'Zasilacz 5 V / 6 A Unitech 1010-900043G do stacji dokującej',
  seoDescription: 'Zasilacz 5 V / 6 A Unitech 1010-900043G do stacji dokującej 5000-900142G terminali mobilnych Unitech EA660, EA530 i EA530 UHF. Zasilacz stacji dokującej Unitech EA660. PN: 1010-900043G.',
  description: `Zasilacz 1010-900043G ma parametry 5 V / 6 A i zasila [stację dokującą 5000-900142G](/produkt/unitech-ea-stacja-dokujaca). Taki zasilacz jest już w pudełku stacji, więc ten numer służy jako część zamienna.

Zasilacz nie zastępuje przewodu sieciowego. Do gniazdka potrzebny jest [przewód 1550-602333G](/produkt/unitech-przewod-zasilajacy-eu-3pin). Stację obsługują terminale [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 167.48,
  images: ['/images/products/1010-900043G.png'],
  imageDescriptions: ['Zasilacz 5 V / 6 A Unitech 1010-900043G — czarny zasilacz z przewodem DC zakończonym wtykiem i gniazdem przewodu sieciowego'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900043G' },
    { name: 'Typ', value: 'Zasilacz do stacji dokującej' },
    { name: 'Napięcie i prąd', value: '5 V / 6 A' },
    { name: 'Zgodność', value: 'Stacja dokująca 5000-900142G' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Wymiana zasilacza stacji dokującej'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-stacja-dokujaca', 'unitech-przewod-zasilajacy-eu-3pin'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const zasilacz12v: Product = {
  id: 'unitech-ea-zasilacz-12v-5a',
  slug: 'unitech-ea-zasilacz-12v-5a',
  name: 'Zasilacz 12 V / 5 A do stacji wielogniazdowych Unitech (1010-900068G)',
  seoH1: 'Zasilacz 12 V / 5 A do stacji wielogniazdowych Unitech',
  shortDescription: 'Zasilacz Unitech 1010-900068G, 12 V / 5 A: część zamienna dla wielogniazdowych stacji i ładowarek baterii EA660 oraz EA530.',
  seoTitle: 'Zasilacz 12 V / 5 A Unitech 1010-900068G do stacji i ładowarek',
  seoDescription: 'Zasilacz 12 V / 5 A Unitech 1010-900068G do wielogniazdowych stacji i ładowarek baterii terminali mobilnych Unitech EA660, EA530 i EA530 UHF. Zasilacz stacji Unitech EA660. PN: 1010-900068G.',
  description: `Zasilacz 1010-900068G, 12 V / 5 A, zasila stacje wielogniazdowe do terminali Unitech: [5-gniazdową do ładowania](/produkt/unitech-ea-stacja-5-slot), [5-gniazdową z Ethernetem](/produkt/unitech-ea-stacja-5-slot-ethernet), [stację 4+4 do EA660](/produkt/unitech-ea660-stacja-4-4) i ładowarki baterii: [do EA660](/produkt/unitech-ea660-ladowarka-baterii) oraz [do EA530](/produkt/unitech-ea530-ladowarka-baterii).

Każde z tych urządzeń ma taki zasilacz w pudełku. Osobny numer jest potrzebny po uszkodzeniu zasilacza. Zasilacz podłącza się do gniazda DC urządzenia, a do sieci łączy go [przewód 1550-602333G](/produkt/unitech-przewod-zasilajacy-eu-3pin).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 108.15,
  images: ['/images/products/1010-900068G.png'],
  imageDescriptions: ['Zasilacz 12 V / 5 A Unitech 1010-900068G — czarny zasilacz z przewodem DC, ferrytem i gniazdem przewodu sieciowego'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1010-900068G' },
    { name: 'Typ', value: 'Zasilacz do stacji wielogniazdowych' },
    { name: 'Napięcie i prąd', value: '12 V / 5 A' },
    { name: 'Zgodność', value: 'Stacje 5000-900132G, 5000-900134G, 5000-900133G; ładowarki baterii 5100-900037G, 5100-900042G' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Wymiana zasilacza stacji lub ładowarki baterii'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea-stacja-5-slot', 'unitech-ea660-stacja-4-4'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const przewodZasilajacyEu: Product = {
  id: 'unitech-przewod-zasilajacy-eu-3pin',
  slug: 'unitech-przewod-zasilajacy-eu-3pin',
  name: 'Przewód zasilający EU Unitech, wtyk Schuko – złącze C13 (1550-602333G)',
  seoH1: 'Przewód zasilający EU Unitech, wtyk Schuko – złącze C13',
  shortDescription: 'Przewód Unitech 1550-602333G ze wtykiem Schuko i złączem IEC C13; łączy z gniazdkiem zasilacze stacji 5-gniazdowych, dokującej i ładowarek.',
  seoTitle: 'Przewód zasilający EU Unitech 1550-602333G, złącze C13',
  seoDescription: 'Przewód zasilający EU Unitech 1550-602333G z wtykiem Schuko i złączem IEC C13 do stacji i ładowarek terminali mobilnych Unitech EA660, EA530 i EA530 UHF. Przewód sieciowy Unitech EA660. PN: 1550-602333G.',
  description: `Przewód 1550-602333G ma po jednej stronie europejski wtyk z uziemieniem Schuko, a po drugiej gniazdo IEC C13. Łączy z siecią zasilacz [stacji 5-gniazdowych](/produkt/unitech-ea-stacja-5-slot), [stacji 4+4 do EA660](/produkt/unitech-ea660-stacja-4-4), [ładowarek 4 baterii](/produkt/unitech-ea660-ladowarka-baterii) i [stacji dokującej](/produkt/unitech-ea-stacja-dokujaca). Te urządzenia mają zasilacz w zestawie, a przewodu nie.

Przewód występuje w wersjach dla USA, Wielkiej Brytanii i Unii Europejskiej; ten numer to wersja EU. Przewód [1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5) ma złącze C5 i należy do zasilacza czytnika RP300, więc do stacji EA nie pasuje.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 30.32,
  images: ['/images/products/1550-602333G.png'],
  imageDescriptions: ['Przewód zasilający EU Unitech 1550-602333G — wtyk Schuko po jednej stronie i gniazdo IEC C13 po drugiej'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1550-602333G' },
    { name: 'Typ', value: 'Przewód sieciowy, 3 piny' },
    { name: 'Wtyk', value: 'EU, Schuko' },
    { name: 'Złącze', value: 'IEC C13' },
    { name: 'Zgodność', value: 'Stacje 5000-900132G, 5000-900134G, 5000-900133G, 5000-900142G; ładowarki baterii 5100-900037G, 5100-900042G' },
  ],
  applications: ['Podłączenie zasilacza stacji lub ładowarki do gniazdka'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-stacja-5-slot', 'unitech-ea-stacja-dokujaca', 'unitech-ea-zasilacz-12v-5a', 'unitech-przewod-sieciowy-eu-c5'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const uchwytSamochodowy: Product = {
  id: 'unitech-ea-uchwyt-samochodowy',
  slug: 'unitech-ea-uchwyt-samochodowy',
  name: 'Uchwyt samochodowy Unitech EA660 i EA530 (5000-66C0001G)',
  seoH1: 'Uchwyt samochodowy Unitech EA660 i EA530',
  shortDescription: 'Uchwyt samochodowy Unitech 5000-66C0001G do terminali EA660, EA530 i EA530 UHF: uchwyt aktywny z przewodem zasilającym, obrotową podstawą i elementami montażowymi.',
  seoTitle: 'Uchwyt samochodowy Unitech 5000-66C0001G do EA660 i EA530',
  seoDescription: 'Uchwyt samochodowy Unitech 5000-66C0001G (vehicle cradle) do terminali mobilnych Unitech EA660, EA530 i EA530 UHF, z przewodem zasilającym i obrotową podstawą. Uchwyt do auta Unitech EA660. PN: 5000-66C0001G.',
  description: `Uchwyt 5000-66C0001G mocuje terminal w pojeździe. Jest uchwytem aktywnym, czyli zasila terminal przewodem, który łączy się z gniazdem w pojeździe. W zestawie są uchwyt, przewód zasilający, obrotowa podstawa i elementy montażowe. Terminal nie wchodzi w skład zestawu.

Uchwyt współpracuje z [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Podstawa jest obrotowa.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 468.14,
  images: ['/images/products/5000-66C0001G.png'],
  imageDescriptions: ['Uchwyt samochodowy Unitech 5000-66C0001G — uchwyt z włożonym terminalem i przewodem zasilającym z wtykiem do gniazda w pojeździe'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-66C0001G' },
    { name: 'Typ', value: 'Uchwyt samochodowy aktywny' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
    { name: 'W zestawie', value: 'Uchwyt aktywny, przewód zasilający, obrotowa podstawa, elementy montażowe' },
  ],
  applications: ['Praca z terminalem w kabinie pojazdu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-pasek-na-dlon', 'unitech-ea-przewod-usb-c'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const rysik: Product = {
  id: 'unitech-rysik-5-5-mm',
  slug: 'unitech-rysik-5-5-mm',
  name: 'Rysik 5,5 mm Unitech EA660 i EA530 (386534G)',
  seoH1: 'Rysik 5,5 mm Unitech EA660 i EA530',
  shortDescription: 'Rysik Unitech 386534G, 5,5 mm, do ekranów dotykowych terminali EA660, EA530 i EA530 UHF.',
  seoTitle: 'Rysik 5,5 mm Unitech 386534G do EA660 i EA530',
  seoDescription: 'Rysik 5,5 mm Unitech 386534G do ekranów dotykowych terminali mobilnych Unitech EA660, EA530 i EA530 UHF. Rysik do Unitech EA660, rysik Unitech EA530. PN: 386534G.',
  description: `Rysik 386534G ma końcówkę 5,5 mm. Takiego rysika używa się na ekranach [Unitech EA660](/produkt/unitech-ea660), [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Ekrany tych terminali obsługują też rękawice i mokre palce.

Do rysika Unitech oferuje osobną linkę spiralną, która nie jest częścią tego zestawu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 39.99,
  images: ['/images/products/386534G.png'],
  imageDescriptions: ['Rysik 5,5 mm Unitech 386534G — czarny rysik z końcówką do ekranu dotykowego i klipsem'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '386534G' },
    { name: 'Typ', value: 'Rysik, końcówka 5,5 mm' },
    { name: 'Zgodność', value: 'Unitech EA660, EA530, EA530 UHF' },
  ],
  applications: ['Dokładne wskazywanie elementów na ekranie dotykowym'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-pasek-na-dlon', 'unitech-ea660-szklo-ochronne', 'unitech-ea530-szklo-ochronne'],
  downloads: KATALOGI_EA,
  relatedProducts: TERMINALE_EA,
  createdAt: '2026-10-29',
}

const bateriaEa660: Product = {
  id: 'unitech-ea660-bateria',
  slug: 'unitech-ea660-bateria',
  name: 'Bateria 5000 mAh Unitech EA660 (1400-900074G)',
  seoH1: 'Bateria 5000 mAh Unitech EA660',
  shortDescription: 'Bateria Unitech 1400-900074G, 3,87 V i 5000 mAh, do terminala EA660: wymiana bez wyłączania terminala, certyfikat UL.',
  seoTitle: 'Bateria Unitech 1400-900074G 5000 mAh do EA660',
  seoDescription: 'Bateria Unitech 1400-900074G, 3,87 V, 5000 mAh, do terminala mobilnego Unitech EA660, z wymianą warm swap i certyfikatem UL. Bateria Unitech EA660, akumulator do EA660 Unitech. PN: 1400-900074G.',
  description: `Bateria 1400-900074G ma napięcie 3,87 V i pojemność 5000 mAh. To bateria Li-ion z certyfikatem UL. Terminal [Unitech EA660](/produkt/unitech-ea660) umożliwia jej wymianę bez wyłączania urządzenia (warm swap). W zestawie terminala jest jedna bateria; ta służy jako zapasowa lub wymienna.

Baterię wyjmuje się ręcznie, bez narzędzi, po zdjęciu pokrywy. W komorze baterii nie wolno umieszczać naklejek ani oznaczeń, ponieważ mogą pogorszyć szczelność i odporność na upadki. Baterie ładuje [ładowarka 4 baterii](/produkt/unitech-ea660-ladowarka-baterii) oraz [stacja 4+4](/produkt/unitech-ea660-stacja-4-4).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 235.1,
  images: ['/images/products/1400-900074G.png'],
  imageDescriptions: ['Bateria 5000 mAh Unitech 1400-900074G do EA660 — płaska bateria z etykietą znamionową'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900074G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Napięcie i pojemność', value: '3,87 V, 5000 mAh' },
    { name: 'Typ', value: 'Li-ion, certyfikat UL' },
    { name: 'Wymiana', value: 'Bez wyłączania terminala (warm swap)' },
  ],
  applications: ['Wymiana baterii w terminalu w trakcie zmiany'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea660-ladowarka-baterii', 'unitech-ea660-stacja-4-4'],
  downloads: [KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const etuiEa660: Product = {
  id: 'unitech-ea660-etui',
  slug: 'unitech-ea660-etui',
  name: 'Etui ochronne Unitech EA660 (3210-900040G)',
  seoH1: 'Etui ochronne Unitech EA660',
  shortDescription: 'Etui ochronne Unitech 3210-900040G do terminala EA660: upadki z 1,8 m i test przewrotów 1000 upadków z 1 m.',
  seoTitle: 'Etui ochronne Unitech 3210-900040G do EA660',
  seoDescription: 'Etui ochronne (boot case) Unitech 3210-900040G do EA660: upadki z 1,8 m i 1000 przewrotów z 1 m. Etui do Unitech EA660, osłona Unitech EA660. PN: 3210-900040G.',
  description: `Etui 3210-900040G zakłada się na [Unitech EA660](/produkt/unitech-ea660). Z etui terminal wytrzymuje upadki z wysokości 1,8 m na beton, a bez etui 1,5 m. Test przewrotów obejmuje z etui 1000 upadków z 1 m, bez etui 600 upadków z 0,5 m.

Terminal wkłada się najpierw dolną krawędzią, a następnie dociska górne narożniki. Zdejmuje się go, pchając i wysuwając od góry. Przed ładowaniem terminala w etui wkładkę stacji zdejmuje się. W [stacji dokującej](/produkt/unitech-ea-stacja-dokujaca) terminal w etui obsługuje wkładka „EA660-B”.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 75.66,
  images: ['/images/products/3210-900040G.png', '/images/products/3210-900040G-2.png'],
  imageDescriptions: [
    'Etui ochronne Unitech 3210-900040G do EA660 — terminal od tyłu obok osobnego etui z otworem na aparat',
    'Etui ochronne Unitech 3210-900040G do EA660 — drugie ujęcie z tyłu terminala i etui',
  ],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900040G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Upadek na beton', value: '1,8 m z etui (bez etui 1,5 m)' },
    { name: 'Przewroty', value: 'Z etui 1000 upadków z 1 m' },
    { name: 'Stacje', value: 'Wkładka zdjęta; w stacji dokującej wkładka „EA660-B”' },
  ],
  applications: ['Ochrona terminala w pracy z częstym ryzykiem upadku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea660-szklo-ochronne', 'unitech-ea-pasek-na-dlon', 'unitech-ea-stacja-dokujaca'],
  downloads: [QSG_ETUI_EA660, KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const uchwytEa660: Product = {
  id: 'unitech-ea660-uchwyt-pistoletowy',
  slug: 'unitech-ea660-uchwyt-pistoletowy',
  name: 'Uchwyt pistoletowy Unitech EA660 (5500-900108G)',
  seoH1: 'Uchwyt pistoletowy Unitech EA660',
  shortDescription: 'Uchwyt pistoletowy Unitech 5500-900108G do terminala EA660; pasek na nadgarstek w opakowaniu, połączenie przez styki pogo.',
  seoTitle: 'Uchwyt pistoletowy Unitech 5500-900108G do EA660',
  seoDescription: 'Uchwyt pistoletowy (gun grip) Unitech 5500-900108G do terminala EA660; w opakowaniu pasek na nadgarstek. Uchwyt pistoletowy Unitech EA660. PN: 5500-900108G.',
  description: `Uchwyt 5500-900108G zmienia [Unitech EA660](/produkt/unitech-ea660) w urządzenie pistoletowe. Łączy się z terminalem przez styki pogo na jego tylnej ściance. W opakowaniu są uchwyt i pasek na nadgarstek.

Przed montażem zdejmuje się z terminala czarną folię. Terminal wsuwa się w uchwyt pod kątem około 45 stopni i dociska. Wyjmuje się go, pchając od tyłu i wysuwając do góry. Do ładowania terminala w uchwycie służą stacje 1-gniazdowe, 4+4 i 5-gniazdowe po zdjęciu wkładki oraz [stacja dokująca](/produkt/unitech-ea-stacja-dokujaca) z wkładką „EA660-B”.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 266.73,
  images: ['/images/products/5500-900108G.png'],
  imageDescriptions: ['Uchwyt pistoletowy Unitech 5500-900108G z terminalem EA660 — widok pod kątem od góry'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5500-900108G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Połączenie', value: 'Styki pogo na tylnej ściance terminala' },
    { name: 'W opakowaniu', value: 'Uchwyt pistoletowy, pasek na nadgarstek' },
  ],
  applications: ['Częste skanowanie kodów z wysokości wyciągniętej ręki'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea660-etui', 'unitech-ea-stacja-dokujaca', 'unitech-ea660-stacja-4-4'],
  downloads: [QSG_UCHWYT_EA660, KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const szkloEa660: Product = {
  id: 'unitech-ea660-szklo-ochronne',
  slug: 'unitech-ea660-szklo-ochronne',
  name: 'Szkło ochronne 9H Unitech EA660, 10 szt. (5400-900062G)',
  seoH1: 'Szkło ochronne 9H Unitech EA660, 10 szt.',
  shortDescription: 'Szkło ochronne 9H Unitech 5400-900062G do ekranu terminala EA660; opakowanie zawiera 10 sztuk.',
  seoTitle: 'Szkło ochronne 9H Unitech 5400-900062G do EA660, 10 szt.',
  seoDescription: 'Szkło ochronne 9H Unitech 5400-900062G do ekranu EA660, 10 sztuk w opakowaniu. Szkło hartowane do Unitech EA660. PN: 5400-900062G.',
  description: `Opakowanie 5400-900062G zawiera 10 szkieł ochronnych o twardości 9H do ekranu 6" [Unitech EA660](/produkt/unitech-ea660). Ekran terminala ma szkło Corning Gorilla Glass Victus, a szkło ochronne tworzy na nim dodatkową warstwę.

Cena dotyczy całego opakowania, nie pojedynczego szkła. Szkło do EA530 ma inny numer: [5400-900078G](/produkt/unitech-ea530-szklo-ochronne).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 307,
  images: ['/images/products/5400-900062G.png'],
  imageDescriptions: ['Szkło ochronne 9H Unitech 5400-900062G — terminal EA660 z przezroczystym szkłem ochronnym obok ekranu'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900062G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Rodzaj', value: 'Szkło ochronne 9H' },
    { name: 'W opakowaniu', value: '10 szt.' },
  ],
  applications: ['Zabezpieczenie ekranów terminali w całej flocie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea660-etui', 'unitech-rysik-5-5-mm'],
  downloads: [KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const smyczEa660: Product = {
  id: 'unitech-ea660-smycz',
  slug: 'unitech-ea660-smycz',
  name: 'Smycz na nadgarstek Unitech EA660 (385892G)',
  seoH1: 'Smycz na nadgarstek Unitech EA660',
  shortDescription: 'Smycz na nadgarstek Unitech 385892G do terminala EA660 (Wrist Lanyard).',
  seoTitle: 'Smycz na nadgarstek Unitech 385892G do EA660',
  seoDescription: 'Smycz na nadgarstek Unitech 385892G (Wrist Lanyard) do terminala mobilnego Unitech EA660. Smycz do Unitech EA660. PN: 385892G.',
  description: `Smycz 385892G to pleciony pasek z pętlą do noszenia [Unitech EA660](/produkt/unitech-ea660) na nadgarstku. Nie jest paskiem na dłoń ze stałym ramieniem. Ten ma numer [5400-900052G](/produkt/unitech-ea-pasek-na-dlon).

Uchwyt pistoletowy [5500-900108G](/produkt/unitech-ea660-uchwyt-pistoletowy) ma własny pasek na nadgarstek w opakowaniu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 10.44,
  images: ['/images/products/385892G.png'],
  imageDescriptions: ['Smycz na nadgarstek Unitech 385892G — czarny pleciony pasek z pętlą na końcu'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '385892G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Typ', value: 'Smycz na nadgarstek (Wrist Lanyard)' },
  ],
  applications: ['Noszenie terminala na nadgarstku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea-pasek-na-dlon', 'unitech-ea660-uchwyt-pistoletowy'],
  downloads: [KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const stacja44Ea660: Product = {
  id: 'unitech-ea660-stacja-4-4',
  slug: 'unitech-ea660-stacja-4-4',
  name: 'Stacja ładująca Unitech EA660: 4 terminale i 4 baterie (5000-900133G)',
  seoH1: 'Stacja ładująca Unitech EA660: 4 terminale i 4 baterie',
  shortDescription: 'Stacja Unitech 5000-900133G do EA660: cztery gniazda na terminale i cztery komory na baterie. Zasilacz jest w komplecie, a przewód sieciowy wymaga zamówienia.',
  seoTitle: 'Stacja Unitech 5000-900133G do EA660: 4 terminale i 4 baterie',
  seoDescription: 'Stacja ładująca Unitech 5000-900133G do terminali mobilnych Unitech EA660: cztery gniazda na terminale i cztery komory na baterie, zasilacz 12 V / 5 A w zestawie. Stacja 4+4 Unitech EA660. PN: 5000-900133G.',
  description: `Stacja 5000-900133G ma cztery gniazda na terminale [Unitech EA660](/produkt/unitech-ea660) i cztery komory na [baterie 5000 mAh](/produkt/unitech-ea660-bateria). Ładuje oba rodzaje urządzeń jednocześnie. Dla EA530 Unitech przewiduje osobną stację tego typu.

W pudełku są stacja z wkładkami i zasilacz 12 V / 5 A. Baterii i terminali nie ma w zestawie. Baterię kładzie się tak, aby nazwa modelu i pasek baterii były po lewej stronie. Czerwona dioda baterii oznacza ładowanie, zielona pełne naładowanie, a brak światła brak wykrytej baterii. Terminal pracujący w etui albo z uchwytem pistoletowym wymaga zdjętej wkładki gniazda.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Zasilacz stacji jest w komplecie, przewodu sieciowego nie ma.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 1388.79,
  images: ['/images/products/5000-900133G.png'],
  imageDescriptions: ['Stacja Unitech 5000-900133G do EA660 — cztery terminale w gniazdach i cztery baterie w komorach po lewej stronie'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5000-900133G' },
    { name: 'Kompatybilność', value: 'Unitech EA660' },
    { name: 'Liczba gniazd', value: '4 terminale + 4 baterie' },
    { name: 'W zestawie', value: 'Stacja z wkładkami, zasilacz 12 V / 5 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Ładowanie terminali i zapasowych baterii w jednym miejscu'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea660-bateria', 'unitech-ea660-ladowarka-baterii'],
  downloads: [QSG_STACJA_4_4, KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const ladowarkaEa660: Product = {
  id: 'unitech-ea660-ladowarka-baterii',
  slug: 'unitech-ea660-ladowarka-baterii',
  name: 'Ładowarka 4 baterii Unitech EA660 (5100-900037G)',
  seoH1: 'Ładowarka 4 baterii Unitech EA660',
  shortDescription: 'Ładowarka Unitech 5100-900037G na cztery baterie 5000 mAh terminala EA660, z zasilaczem w komplecie.',
  seoTitle: 'Ładowarka 4 baterii Unitech 5100-900037G do EA660',
  seoDescription: 'Ładowarka czterech baterii Unitech 5100-900037G do terminala mobilnego Unitech EA660, zasilacz 12 V / 5 A dołączony. Ładowarka baterii Unitech EA660, ładowarka 4-slot Unitech. PN: 5100-900037G.',
  description: `Ładowarka 5100-900037G ładuje cztery [baterie 1400-900074G](/produkt/unitech-ea660-bateria) do [Unitech EA660](/produkt/unitech-ea660). Wykrywa baterię po jej włożeniu i sama rozpoczyna ładowanie. Baterię wkłada się nazwą modelu i paskiem w lewą stronę.

Dioda stanu ładowania świeci na czerwono podczas ładowania i na zielono po naładowaniu. Gdy baterii nie wykryto, dioda jest wygaszona. Pudełko zawiera ładowarkę oraz zasilacz 12 V / 5 A, ale nie baterie.

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Zasilacz ładowarki ma gniazdo DC, a przewód sieciowy kupuje się osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 972.19,
  images: ['/images/products/5100-900037G.png'],
  imageDescriptions: ['Ładowarka 4 baterii Unitech 5100-900037G do EA660 — ładowarka z czterema bateriami włożonymi w komory'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5100-900037G' },
    { name: 'Kompatybilność', value: 'Unitech EA660; bateria 1400-900074G' },
    { name: 'Liczba komór', value: '4 baterie' },
    { name: 'Sygnalizacja', value: 'Czerwona: ładowanie; zielona: naładowana; brak światła: brak baterii' },
    { name: 'W zestawie', value: 'Ładowarka, zasilacz 12 V / 5 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Ładowanie zapasowych baterii poza terminalem'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea660-bateria', 'unitech-ea660-stacja-4-4'],
  downloads: [QSG_LADOWARKA_EA660, KATALOG_EA660],
  relatedProducts: [EA660],
  createdAt: '2026-10-29',
}

const bateriaEa530: Product = {
  id: 'unitech-ea530-bateria',
  slug: 'unitech-ea530-bateria',
  name: 'Bateria 4250 mAh Unitech EA530 (1400-900081G)',
  seoH1: 'Bateria 4250 mAh Unitech EA530',
  shortDescription: 'Bateria Unitech 1400-900081G, 3,85 V i 4250 mAh, do terminali EA530 i EA530 UHF; bateria połączona z pokrywą w jednym elemencie.',
  seoTitle: 'Bateria Unitech 1400-900081G 4250 mAh do EA530 i EA530 UHF',
  seoDescription: 'Bateria Unitech 1400-900081G, 3,85 V, 4250 mAh, do terminali mobilnych Unitech EA530 i EA530 UHF, z szybką wymianą quick-release. Bateria Unitech EA530, akumulator do EA530. PN: 1400-900081G.',
  description: `Bateria 1400-900081G ma napięcie 3,85 V i pojemność 4250 mAh. Jest to bateria Li-Polymer połączona z pokrywą w jednym elemencie, więc wymienia się ją razem z pokrywą (quick-release). Pasuje do [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf).

Wymiana bez wyłączania terminala (warm swap) dotyczy standardowych wersji z 4G i Wi-Fi. Wersja UHF tej funkcji nie obsługuje. Baterie ładuje [ładowarka 4 baterii 5100-900042G](/produkt/unitech-ea530-ladowarka-baterii).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 160.22,
  images: ['/images/products/1400-900081G.png'],
  imageDescriptions: ['Bateria 4250 mAh Unitech 1400-900081G do EA530 — bateria z pokrywą w jednym elemencie, widoczne styki'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '1400-900081G' },
    { name: 'Kompatybilność', value: 'Unitech EA530, EA530 UHF' },
    { name: 'Napięcie i pojemność', value: '3,85 V, 4250 mAh' },
    { name: 'Typ', value: 'Li-Polymer, bateria z pokrywą w jednym elemencie (quick-release)' },
    { name: 'Wymiana bez wyłączania terminala', value: 'Wersje z 4G i Wi-Fi; EA530 UHF — nie' },
  ],
  applications: ['Bateria zapasowa do terminala na dłuższą zmianę'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea530-ladowarka-baterii', 'unitech-ea530-etui'],
  downloads: [KATALOG_EA530],
  relatedProducts: TERMINALE_EA530,
  createdAt: '2026-10-29',
}

const etuiEa530: Product = {
  id: 'unitech-ea530-etui',
  slug: 'unitech-ea530-etui',
  name: 'Etui ochronne Unitech EA530 (3210-900050G)',
  seoH1: 'Etui ochronne Unitech EA530',
  shortDescription: 'Etui ochronne Unitech 3210-900050G do terminali EA530 i EA530 UHF: odporność na upadki z 1,8 m.',
  seoTitle: 'Etui ochronne Unitech 3210-900050G do EA530 i EA530 UHF',
  seoDescription: 'Etui ochronne Unitech 3210-900050G dla terminali EA530 i EA530 UHF podnosi odporność z 1,5 do 1,8 m. Etui Unitech EA530, osłona terminala EA530. PN: 3210-900050G.',
  description: `Etui 3210-900050G zwiększa odporność [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf) na upadki z 1,5 m do 1,8 m. Ma otwór na aparat w tylnej ściance.

W stacjach ładujących z wkładką zdejmowaną terminal w etui wymaga zdjęcia tej wkładki. W [stacji dokującej](/produkt/unitech-ea-stacja-dokujaca) pracuje wtedy z wkładką „EA660-B”. Etui do EA660 ma inny numer: [3210-900040G](/produkt/unitech-ea660-etui).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 46.08,
  images: ['/images/products/3210-900050G.png'],
  imageDescriptions: ['Etui ochronne Unitech 3210-900050G do EA530 — terminal od tyłu obok osobnego etui z otworem na aparat'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3210-900050G' },
    { name: 'Kompatybilność', value: 'Unitech EA530, EA530 UHF' },
    { name: 'Upadek na beton', value: '1,8 m z etui (bez etui 1,5 m)' },
    { name: 'Stacje', value: 'Wkładka zdjęta; w stacji dokującej wkładka „EA660-B”' },
  ],
  applications: ['Ochrona terminala w pracy z częstym ryzykiem upadku'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea530-szklo-ochronne', 'unitech-ea-pasek-na-dlon', 'unitech-ea-stacja-dokujaca'],
  downloads: [KATALOG_EA530],
  relatedProducts: TERMINALE_EA530,
  createdAt: '2026-10-29',
}

const uchwytEa530: Product = {
  id: 'unitech-ea530-uchwyt-pistoletowy',
  slug: 'unitech-ea530-uchwyt-pistoletowy',
  name: 'Uchwyt pistoletowy Unitech EA530 (5500-900115G)',
  seoH1: 'Uchwyt pistoletowy Unitech EA530',
  shortDescription: 'Uchwyt pistoletowy Unitech 5500-900115G do EA530 i EA530 UHF; dołączony pasek na nadgarstek, terminal łączy się stykami na tylnej ściance.',
  seoTitle: 'Uchwyt pistoletowy Unitech 5500-900115G do EA530 i EA530 UHF',
  seoDescription: 'Uchwyt pistoletowy Unitech 5500-900115G dla EA530 i EA530 UHF wraz z paskiem na nadgarstek. Gun grip Unitech EA530. PN: 5500-900115G.',
  description: `Uchwyt 5500-900115G przeznaczony jest do [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Terminal łączy się z nim przez styki pogo na tylnej ściance. W opakowaniu jest pasek na nadgarstek do tego uchwytu.

Z EA530 UHF w uchwycie kody kreskowe i znaczniki RFID odczytuje się jednym urządzeniem. Do ładowania terminala w uchwycie wkładkę stacji zdejmuje się. Uchwyt do EA660 ma inny numer: [5500-900108G](/produkt/unitech-ea660-uchwyt-pistoletowy).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 246.04,
  images: ['/images/products/5500-900115G.png', '/images/products/5500-900115G-2.png', '/images/products/5500-900115G-3.png'],
  imageDescriptions: [
    'Uchwyt pistoletowy Unitech 5500-900115G z terminalem EA530 — widok pod kątem z góry',
    'Uchwyt pistoletowy Unitech 5500-900115G z terminalem EA530 — widok z boku, spust i przyciski terminala',
    'Uchwyt pistoletowy Unitech 5500-900115G z terminalem EA530 — widok pod kątem z przodu',
  ],
  tags: TAGI,
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5500-900115G' },
    { name: 'Kompatybilność', value: 'Unitech EA530, EA530 UHF' },
    { name: 'Połączenie', value: 'Styki pogo na tylnej ściance terminala' },
    { name: 'W opakowaniu', value: 'Uchwyt pistoletowy, pasek na nadgarstek' },
  ],
  applications: ['Skanowanie kodów i znaczników RFID jedną ręką'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea530-etui', 'unitech-ea-stacja-dokujaca', 'unitech-ea-pasek-na-dlon'],
  downloads: [KATALOG_EA530],
  relatedProducts: TERMINALE_EA530,
  createdAt: '2026-10-29',
}

const szkloEa530: Product = {
  id: 'unitech-ea530-szklo-ochronne',
  slug: 'unitech-ea530-szklo-ochronne',
  name: 'Szkło ochronne 9H Unitech EA530, 10 szt. (5400-900078G)',
  seoH1: 'Szkło ochronne 9H Unitech EA530, 10 szt.',
  shortDescription: 'Szkło ochronne 9H Unitech 5400-900078G do ekranu terminali EA530 i EA530 UHF; opakowanie zawiera 10 sztuk.',
  seoTitle: 'Szkło 9H Unitech 5400-900078G do EA530 i EA530 UHF (10 szt.)',
  seoDescription: 'Opakowanie 10 szkieł ochronnych 9H Unitech 5400-900078G do ekranu terminali EA530 i EA530 UHF. Folia ochronna Unitech EA530. PN: 5400-900078G.',
  description: `Opakowanie 5400-900078G zawiera 10 szkieł ochronnych 9H do ekranu 6" HD+ terminali [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf).

Cena dotyczy całego opakowania. Szkło ochronne do EA660 ma osobny numer: [5400-900062G](/produkt/unitech-ea660-szklo-ochronne).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 283.21,
  images: ['/images/products/5400-900078G.png'],
  imageDescriptions: ['Szkło ochronne 9H Unitech 5400-900078G — terminal EA530 z przezroczystym szkłem ochronnym obok ekranu'],
  tags: TAGI,
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5400-900078G' },
    { name: 'Kompatybilność', value: 'Unitech EA530, EA530 UHF' },
    { name: 'Rodzaj', value: 'Szkło ochronne 9H' },
    { name: 'W opakowaniu', value: '10 szt.' },
  ],
  applications: ['Zabezpieczenie ekranów terminali w całej flocie'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ea530-etui', 'unitech-rysik-5-5-mm'],
  downloads: [KATALOG_EA530],
  relatedProducts: TERMINALE_EA530,
  createdAt: '2026-10-29',
}

const ladowarkaEa530: Product = {
  id: 'unitech-ea530-ladowarka-baterii',
  slug: 'unitech-ea530-ladowarka-baterii',
  name: 'Ładowarka 4 baterii Unitech EA530 (5100-900042G)',
  seoH1: 'Ładowarka 4 baterii Unitech EA530',
  shortDescription: 'Ładowarka Unitech 5100-900042G na cztery baterie 4250 mAh terminali EA530 i EA530 UHF; przewód sieciowy kupuje się osobno.',
  seoTitle: 'Ładowarka 4 baterii Unitech 5100-900042G do EA530 i EA530 UHF',
  seoDescription: 'Ładowarka 4 baterii Unitech 5100-900042G do EA530 i EA530 UHF z zasilaczem 12 V / 5 A; baterie ładuje w czterech komorach. Ładowarka baterii Unitech EA530. PN: 5100-900042G.',
  description: `Ładowarka 5100-900042G ma cztery komory na [baterie 1400-900081G](/produkt/unitech-ea530-bateria) do [Unitech EA530](/produkt/unitech-ea530) i [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Do ładowarki dołączony jest zasilacz 12 V / 5 A; baterii w komplecie brak.

Dla baterii terminala EA660 służy inna ładowarka: [5100-900037G](/produkt/unitech-ea660-ladowarka-baterii).

## Co jest potrzebne do użycia?

${PRZEWOD_SIECIOWY_C13}Przewód łączy zasilacz ładowarki z gniazdem sieciowym; w pudełku go nie ma.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'unitech',
  priceFrom: 836.2,
  images: ['/images/products/5100-900042G.png'],
  imageDescriptions: ['Ładowarka 4 baterii Unitech 5100-900042G do EA530 — ładowarka z czterema komorami na baterie, baterie pokazane poglądowo'],
  tags: TAGI,
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '5100-900042G' },
    { name: 'Kompatybilność', value: 'Unitech EA530, EA530 UHF; bateria 1400-900081G' },
    { name: 'Liczba komór', value: '4 baterie' },
    { name: 'W zestawie', value: 'Ładowarka, zasilacz 12 V / 5 A' },
    { name: 'Przewód sieciowy', value: 'Sprzedawany osobno (EU: 1550-602333G)' },
  ],
  applications: ['Ładowanie zapasowych baterii terminali poza urządzeniem'],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-przewod-zasilajacy-eu-3pin', 'unitech-ea530-bateria'],
  downloads: [KATALOG_EA530],
  relatedProducts: TERMINALE_EA530,
  createdAt: '2026-10-29',
}

// Akcesoria w jednej liście: integracja w products.ts rozdziela je do podkategorii według `subcategoryIds`.
export const unitechTerminalAccessories: Product[] = [
  zasilaczUsbC,
  przewodUsbC,
  pasekNaDlon,
  stacja1Ladujaca,
  stacja1Usb,
  stacja1Ethernet,
  stacja5,
  stacja5Ethernet,
  stacjaDokujaca,
  zasilaczStacjiDokujacej,
  zasilacz12v,
  przewodZasilajacyEu,
  uchwytSamochodowy,
  rysik,
  bateriaEa660,
  etuiEa660,
  uchwytEa660,
  szkloEa660,
  smyczEa660,
  stacja44Ea660,
  ladowarkaEa660,
  bateriaEa530,
  etuiEa530,
  uchwytEa530,
  szkloEa530,
  ladowarkaEa530,
]
