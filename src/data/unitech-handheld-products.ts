import type { Product } from './products'

// Terminale Unitech HT730 Plus i HT330 z klawiaturą (29.10.2026). Warianty tylko dla PN z ceną w /api/stock;
// priceFrom to wartość startowa, ceny i stany na karcie aktualizuje API.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U3.md

const HT730_DATASHEET = { name: 'Karta katalogowa Unitech HT730 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ht730-plus-karta-katalogowa-en.pdf', size: '1,9 MB' }
const HT730_WIFI_DATASHEET = { name: 'Karta katalogowa Unitech HT730 Plus Wi-Fi (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ht730-plus-wifi-karta-katalogowa-en.pdf', size: '2,0 MB' }
const HT730_MANUAL_29 = { name: 'Instrukcja obsługi Unitech HT730 Plus, 29 klawiszy (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-29-instrukcja-en.pdf', size: '4,6 MB' }
const HT730_MANUAL_38 = { name: 'Instrukcja obsługi Unitech HT730 Plus, 38 klawiszy (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-38-instrukcja-en.pdf', size: '4,6 MB' }
const HT730_MANUAL_47 = { name: 'Instrukcja obsługi Unitech HT730 Plus, 47 klawiszy (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-47-instrukcja-en.pdf', size: '4,5 MB' }
const HT730_ACCESSORIES = { name: 'Katalog akcesoriów Unitech HT730 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht730-plus-akcesoria-en.pdf', size: '1,2 MB' }
const HT330_DATASHEET = { name: 'Karta katalogowa Unitech HT330 (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ht330-karta-katalogowa-en.pdf', size: '1,2 MB' }
const HT330_WIFI_DATASHEET = { name: 'Karta katalogowa Unitech HT330 Wi-Fi (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ht330-wifi-karta-katalogowa-en.pdf', size: '1,1 MB' }
const HT330_MANUAL = { name: 'Instrukcja obsługi Unitech HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-instrukcja-en.pdf', size: '3,7 MB' }
const HT330_WIFI_MANUAL = { name: 'Instrukcja obsługi Unitech HT330 Wi-Fi (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-wifi-instrukcja-en.pdf', size: '3,5 MB' }
const HT330_ACCESSORIES = { name: 'Katalog akcesoriów Unitech HT330 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ht330-akcesoria-en.pdf', size: '1,4 MB' }

const ht730Plus: Product = {
  id: 'unitech-ht730-plus',
  slug: 'unitech-ht730-plus',
  name: 'Unitech HT730 Plus',
  seoH1: 'Unitech HT730 Plus',
  seoTitle: 'Terminal Unitech HT730 Plus z klawiaturą, Android 14, 5G i Wi-Fi 6E',
  seoDescription: 'Terminal mobilny z klawiaturą Unitech HT730 Plus: ekran 4″, Android 14, Wi-Fi 6E lub 5G z eSIM, wersje z grzałką do −30°C i z silnikiem do 32 m. Kolektor danych HT730 Plus Unitech. PN: HT730-NJ6122BG, HT730-NJ61U2BG, HT730-NH6122BG, HT730-NH61U2BG, HT730-NJN122BG, HT730-NJN1U2BG, HT730-LJ6122BG, HT730-LJ61U2BG, HT730-LJ6142BG, HT730-LJN122BG, HT730-LJN1U2BG.',
  shortDescription: 'Unitech HT730 Plus — terminal mobilny z klawiaturą i ekranem 4″, Wi-Fi 6E lub 5G, z wersjami z silnikiem do 32 m i grzałką do −30°C.',
  description: `Unitech HT730 Plus (2nd Gen) to terminal mobilny z klawiaturą, zaprojektowany do obsługi jedną ręką w magazynie, logistyce i serwisie w terenie. Pracuje pod Androidem 14 z certyfikatami GMS i AER, z możliwością aktualizacji do Androida 16, na procesorze Qualcomm Snapdragon 4490.

W wersjach z silnikiem skanującym dalekiego zasięgu producent podaje odczyt kodów z odległości do 32 m. Skaner jest pochylony o 30° dla wygodnej pozycji dłoni. Odczytuje kody jednowymiarowe i dwuwymiarowe, między innymi DotCode, a także znaki OCR: OCR-A, OCR-B i E13B.

Wersje z grzałką działają w zakresie temperatur −30°C…+50°C. Moduł grzewczy zapobiega skraplaniu się pary wodnej, a producent wskazuje chłodnie, dystrybucję żywności i logistykę farmaceutyczną.

Wersje 5G mają eSIM oraz gniazdo micro SIM, a wszystkie wersje Wi-Fi 6E. Klawiatura ma 29, 38 lub 47 klawiszy, przy czym 47 klawiszy występuje tylko w wersjach z Wi-Fi. Po wyjęciu baterii 6700 mAh aplikacje pozostają aktywne do 1 minuty. Obudowa IP65 / IP67 wytrzymuje upadki z 1,8 m, a z osłoną z 2,4 m. Gwarancja obejmuje 12 miesięcy.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Zasilacz USB-C, wtyczka EU (1010-900074G)](/produkt/unitech-ea-zasilacz-usb-c-eu)
- [Przewód USB 3.0 typ C (1550-905908G)](/produkt/unitech-ea-przewod-usb-c)

W zestawie są terminal, bateria, pasek na dłoń i skrócona instrukcja; osłona zależy od modelu. Przewodu USB-C ani zasilacza w zestawie nie ma. Terminal można też ładować w [stacji 1-gniazdowej](/produkt/unitech-ht730-plus-stacja-1-slot), która ma zasilacz w opakowaniu, a przewód sieciowy osobno.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: [],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/HT730Plus',
  priceFrom: 3451.43,
  availability: 'available',
  images: [
    '/images/products/HT730-NJ6122BG.png',
    '/images/products/HT730-NJ6122BG-2.png',
    '/images/products/HT730-NJ6122BG-3.png',
    '/images/products/HT730-NJ6122BG-4.png',
  ],
  imageDescriptions: [
    'Unitech HT730 Plus — widok z przodu, ekran 4 cale i klawiatura 29-klawiszowa',
    'Unitech HT730 Plus — widok z przodu pod kątem, przycisk skanowania z boku obudowy',
    'Unitech HT730 Plus — tył obudowy z baterią i okienkiem skanera u góry',
    'Unitech HT730 Plus — trzy układy klawiatury obok siebie: 29, 38 i 47 klawiszy',
  ],
  tags: ['magazyn', 'logistyka', 'produkcja'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 14 (aktualizacja do Androida 16), certyfikaty GMS i AER' },
    { name: 'Procesor', value: 'Qualcomm Snapdragon 4490, 64-bitowy, 8 rdzeni, do 2,4 GHz' },
    { name: 'Pamięć RAM / Flash', value: '6 GB RAM, 128 GB UFS; microSD (SD, SDHC, SDXC) do 256 GB' },
    { name: 'Wyświetlacz', value: '4″ TFT-LCD WVGA (800 × 480), 400 nitów; ekran pojemnościowy z obsługą rękawic do 4 mm, mokrego ekranu i rysika 3 mm' },
    { name: 'Klawiatura', value: '29 klawiszy numerycznych, 38 klawiszy numerycznych z funkcyjnymi albo 47 klawiszy (tylko wersje z Wi-Fi), zależnie od PN; lewy i prawy przycisk skanowania' },
    { name: 'Skaner', value: 'Zebra SE4770 (standardowy zasięg) albo SE5880 (daleki zasięg, do 32 m), zależnie od PN; pochylenie 30°; kody 1D, 2D, DotCode, pocztowe i OCR (OCR-A, OCR-B, E13B)' },
    { name: 'NFC / HF RFID', value: '13,56 MHz; ISO 14443 A/B, ISO 15693, NFC, MIFARE, FeliCa' },
    { name: 'Aparat', value: 'Tylny 16 MP z autofokusem i lampą LED; ARCore' },
    { name: 'WLAN', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), IEEE 802.11 a/b/g/n/ac/d/h/i/k/r/v/ax, MIMO 2×2, DBS, szybki roaming; WPA3, WPA2; w pasmach 5150–5350 MHz i 5945–6425 MHz tylko w pomieszczeniach' },
    { name: 'WWAN', value: 'Wersje 5G: 5G NR Sub-6 GHz (m.in. n1, n3, n7, n8, n20, n28, n38, n78), 4G LTE, 3G i 2G; połączenia głosowe' },
    { name: 'SIM', value: 'Wersje 5G: micro SIM i eSIM' },
    { name: 'Bluetooth', value: 'Bluetooth 5.2' },
    { name: 'GNSS', value: 'Wersje 5G: GPS, GLONASS, Galileo, BeiDou, L1 + L5' },
    { name: 'Złącza', value: 'USB-C do komputera; styki pogo z OTG do stacji' },
    { name: 'Audio', value: 'Głośnik 2 W (105 dB z 10 cm, Smart PA), dwa mikrofony z redukcją szumów' },
    { name: 'Bateria', value: '3,6 V, 6700 mAh; po wyjęciu baterii aplikacje pozostają aktywne do 1 minuty' },
    { name: 'Klasa szczelności', value: 'IP65 / IP67' },
    { name: 'Odporność na upadki', value: '1,8 m; 2,4 m z osłoną' },
    { name: 'Temperatura pracy', value: '-20°C do +50°C; wersja z grzałką -30°C do +50°C' },
    { name: 'Temperatura przechowywania', value: '-30°C do +70°C bez baterii' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
    { name: 'Wymiary', value: '195 × 72 × 34 mm' },
    { name: 'Masa', value: '395 g z baterią' },
    { name: 'Zarządzanie urządzeniami', value: 'MoboLink; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher, USS, KeyRemap, SDK' },
    { name: 'Zawartość zestawu', value: 'Terminal (osłona zależnie od modelu), bateria, pasek na dłoń, skrócona instrukcja; przewód USB-C i zasilacz sprzedawane osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: [
    'Magazyny i logistyka, w tym odczyt etykiet z dużej odległości',
    'Serwis w terenie',
    'Produkcja',
    'Chłodnie, dystrybucja żywności i logistyka farmaceutyczna (wersja z grzałką)',
  ],
  variants: [
    {
      partNumber: 'HT730-NJ6122BG',
      name: 'HT730-NJ6122BG, Wi-Fi 6E, 29 klawiszy, SE4770',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '29', 'Skaner': 'SE4770' },
      priceFrom: 3459.6,
      availability: 'on-order',
    },
    {
      partNumber: 'HT730-NJ61U2BG',
      name: 'HT730-NJ61U2BG, Wi-Fi 6E, 38 klawiszy, SE4770',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '38', 'Skaner': 'SE4770' },
      priceFrom: 3451.43,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-NH6122BG',
      name: 'HT730-NH6122BG, Wi-Fi 6E, 29 klawiszy, SE4770, z grzałką',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '29', 'Skaner': 'SE4770', 'Grzałka': 'Tak' },
      priceFrom: 3908.49,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-NH61U2BG',
      name: 'HT730-NH61U2BG, Wi-Fi 6E, 38 klawiszy, SE4770, z grzałką',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '38', 'Skaner': 'SE4770', 'Grzałka': 'Tak' },
      priceFrom: 4050.49,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-NJN122BG',
      name: 'HT730-NJN122BG, Wi-Fi 6E, 5G, 29 klawiszy, SE4770',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Klawisze': '29', 'Skaner': 'SE4770' },
      priceFrom: 3923,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-NJN1U2BG',
      name: 'HT730-NJN1U2BG, Wi-Fi 6E, 5G, 38 klawiszy, SE4770',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Klawisze': '38', 'Skaner': 'SE4770' },
      priceFrom: 3913.95,
      availability: 'available',
    },
    {
      partNumber: 'HT730-LJ6122BG',
      name: 'HT730-LJ6122BG, Wi-Fi 6E, 29 klawiszy, SE5880',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '29', 'Skaner': 'SE5880, do 32 m' },
      priceFrom: 5319.28,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-LJ61U2BG',
      name: 'HT730-LJ61U2BG, Wi-Fi 6E, 38 klawiszy, SE5880',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '38', 'Skaner': 'SE5880, do 32 m' },
      priceFrom: 5310.82,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-LJ6142BG',
      name: 'HT730-LJ6142BG, Wi-Fi 6E, 47 klawiszy, SE5880',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Klawisze': '47', 'Skaner': 'SE5880, do 32 m' },
      priceFrom: 5328.81,
      availability: 'on-order',
    },
    {
      partNumber: 'HT730-LJN122BG',
      name: 'HT730-LJN122BG, Wi-Fi 6E, 5G, 29 klawiszy, SE5880',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Klawisze': '29', 'Skaner': 'SE5880, do 32 m' },
      priceFrom: 5627.09,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT730-LJN1U2BG',
      name: 'HT730-LJN1U2BG, Wi-Fi 6E, 5G, 38 klawiszy, SE5880',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Klawisze': '38', 'Skaner': 'SE5880, do 32 m' },
      priceFrom: 5618.83,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sposób połączenia HT730 Plus z siecią. Każda wersja ma Wi-Fi 6E i Bluetooth 5.2.\n\n• Wi-Fi 6E — praca w sieci firmowej w pasmach 2,4, 5 i 6 GHz; ta wersja nie ma gniazda SIM ani GPS.\n\n• Wi-Fi 6E + 5G — dodatkowo 5G i LTE z eSIM lub kartą micro SIM, połączenia głosowe i GPS z L1 + L5.',
    'Klawisze': 'Liczba fizycznych klawiszy pod ekranem.\n\n• 29 — klawiatura numeryczna.\n\n• 38 — klawiatura numeryczna z klawiszami funkcyjnymi.\n\n• 47 — klawiatura z literami; tylko w wersjach z Wi-Fi.',
    'Skaner': 'Silnik skanujący HT730 Plus, pochylony o 30°; czyta kody 1D i 2D.\n\n• SE4770 — silnik standardowego zasięgu.\n\n• SE5880 — silnik dalekiego zasięgu; producent podaje odczyt z odległości do 32 m.',
    'Grzałka': 'Wersja do pracy w chłodni i mroźni.\n\n• Moduł grzewczy zapobiega skraplaniu się pary wodnej; praca w zakresie od -30°C do +50°C.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-ea-zasilacz-usb-c-eu',
    'unitech-ea-przewod-usb-c',
    'unitech-ht730-plus-uchwyt-pistoletowy',
    'unitech-ht730-plus-bateria',
    'unitech-ht730-plus-stacja-1-slot',
    'unitech-ht730-plus-stacja-1-slot-usb',
    'unitech-ht730-plus-stacja-1-slot-ethernet',
    'unitech-ht730-plus-stacja-4-slot',
    'unitech-ht730-plus-stacja-4-slot-ethernet',
    'unitech-ht730-plus-ladowarka-baterii',
    'unitech-ht730-plus-szklo-ochronne',
    'unitech-ht730-plus-oslona-se4770',
    'unitech-ht730-plus-oslona-dalekiego-zasiegu',
    'unitech-ht730-plus-pasek-na-dlon',
    'unitech-rysik-z-linka',
    'unitech-przewod-zasilajacy-eu-3pin',
    'unitech-ea-zasilacz-stacji-dokujacej',
    'unitech-ea-zasilacz-12v-5a',
    'unitech-rp902',
  ],
  relatedProducts: ['unitech-ht330', 'bluebird-ek430', 'cipherlab-rk26', 'honeywell-ck62', 'zebra-mc2200'],
  downloads: [HT730_DATASHEET, HT730_WIFI_DATASHEET, HT730_MANUAL_29, HT730_MANUAL_38, HT730_MANUAL_47, HT730_ACCESSORIES],
  faq: [
    {
      question: 'Czym różnią się wersje Unitech HT730 Plus w ofercie?',
      answer: 'Różnice dotyczą łączności, klawiatury, silnika skanującego i grzałki. Wi-Fi 6E mają wszystkie wersje, a modem 5G z eSIM, gniazdem micro SIM i GPS tylko wersje oznaczone 5G. Klawiatura ma 29, 38 lub 47 klawiszy, a 47 klawiszy jest tylko w wersjach z Wi-Fi. Silnik SE4770 ma standardowy zasięg, a SE5880 daleki. Wersje HT730-NH… mają grzałkę do pracy w mroźni.',
    },
    {
      question: 'Z jakiej odległości HT730 Plus odczytuje kody kreskowe?',
      answer: 'Wersje z silnikiem SE5880 (PN HT730-LJ…) odczytują kody z odległości do 32 m, według danych producenta. Wersje z silnikiem SE4770 (PN HT730-NJ… i HT730-NH…) mają standardowy zasięg. Skaner jest pochylony o 30°.',
    },
    {
      question: 'Czy HT730 Plus pracuje w chłodni i mroźni?',
      answer: 'Tak, w wersjach z grzałką (PN HT730-NH6122BG i HT730-NH61U2BG). Pracują w temperaturze od -30°C do +50°C, a moduł grzewczy zapobiega skraplaniu się pary wodnej. Wersje bez grzałki pracują od -20°C do +50°C. Do wersji z grzałką pasuje [uchwyt pistoletowy](/produkt/unitech-ht730-plus-uchwyt-pistoletowy), a osłony do niskich temperatur są osobne dla [silnika standardowego](/produkt/unitech-ht730-plus-oslona-se4770) i [dalekiego zasięgu](/produkt/unitech-ht730-plus-oslona-dalekiego-zasiegu).',
    },
    {
      question: 'Jakie sieci komórkowe obsługuje HT730 Plus w wersji 5G?',
      answer: 'Modem pracuje w sieciach 5G NR Sub-6 GHz, LTE, 3G i 2G i obsługuje połączenia głosowe. W terminalu są eSIM oraz gniazdo micro SIM. Sieć eSIM zmienia się po połączeniu z Wi-Fi: skanuje się kod QR albo wpisuje kod aktywacyjny. Wersje tylko z Wi-Fi 6E nie mają modułu SIM ani GPS.',
    },
    {
      question: 'Czy do HT730 Plus potrzebny jest zasilacz i przewód USB-C?',
      answer: 'Tak. W zestawie nie ma ani zasilacza, ani przewodu USB-C. Potrzebne są [zasilacz USB-C z wtyczką EU](/produkt/unitech-ea-zasilacz-usb-c-eu) i [przewód USB 3.0 typ C](/produkt/unitech-ea-przewod-usb-c). Producent zaleca oryginalny przewód i zasilacz Unitech.',
    },
    {
      question: 'Jakie stacje i ładowarki pasują do HT730 Plus?',
      answer: 'Do HT730 Plus są stacje 1-gniazdowe ([ładująca](/produkt/unitech-ht730-plus-stacja-1-slot), [USB](/produkt/unitech-ht730-plus-stacja-1-slot-usb) i [Ethernet](/produkt/unitech-ht730-plus-stacja-1-slot-ethernet)), stacje 4-gniazdowe ([ładująca](/produkt/unitech-ht730-plus-stacja-4-slot) i [Ethernet](/produkt/unitech-ht730-plus-stacja-4-slot-ethernet)) oraz [ładowarka 4 baterii](/produkt/unitech-ht730-plus-ladowarka-baterii). Zasilacz jest w opakowaniu każdego z nich, a przewód sieciowy sprzedawany jest osobno.',
    },
    {
      question: 'Jak wywołać klawiaturę ekranową w HT730 Plus?',
      answer: 'Przy polu wymagającym wpisania liczby lub tekstu klawisz P1 wywołuje klawiaturę ekranową, a ponowne naciśnięcie ją chowa. Jeśli taka funkcja nie jest potrzebna, w aplikacji KeyRemap zmienia się akcję klawisza PROG_1.',
    },
    {
      question: 'Jaka jest alternatywa dla Unitech HT730 Plus?',
      answer: 'Lżejszy terminal z baterią na ponad 20 godzin pracy i wersją 4G LTE to [Unitech HT330](/produkt/unitech-ht330). Porównanie z terminalami z klawiaturą innych producentów umożliwia kategoria [terminale mobilne](/terminale-mobilne).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

const ht330: Product = {
  id: 'unitech-ht330',
  slug: 'unitech-ht330',
  name: 'Unitech HT330',
  seoH1: 'Unitech HT330',
  seoTitle: 'Terminal Unitech HT330 z klawiaturą, Android 12, bateria na 20 godzin',
  seoDescription: 'Terminal mobilny z klawiaturą Unitech HT330: ekran 4″, 32 klawisze, Android 12, bateria 5200 mAh na ponad 20 godzin, masa 295 g. Kolektor danych HT330 Unitech. PN: HT330-QA62UM3G, HT330-NAL2UM3G.',
  shortDescription: 'Unitech HT330 — lekki terminal mobilny z klawiaturą 32 klawisze, baterią 5200 mAh na ponad 20 godzin pracy i wersją 4G LTE lub tylko z Wi-Fi.',
  description: `Unitech HT330 (2nd Gen) to terminal z klawiaturą, który producent opisuje jako urządzenie na całą zmianę pracy. Wymienna bateria 3,85 V / 5200 mAh zapewnia według karty katalogowej ponad 20 godzin pracy, na przykład przy intensywnej inwentaryzacji, a ładowanie do pełna trwa 4,5 godziny.

Obudowa waży 295 g z baterią. Pod ekranem 4″ jest 32 klawisze z podświetleniem: cyfry, klawisze funkcyjne i kierunkowe. Skaner jest pochylony o 25°. Silnik zależy od wersji: wersja 4G LTE ma silnik Zebra SE4710, a wersja tylko z Wi-Fi silnik CM30.

Terminal ma klasę IP67, wytrzymuje upadki z 1,5 m (z etui z 1,8 m) i pracuje w temperaturze od −20°C do +60°C. Wersja 4G LTE ma dwa gniazda nano SIM i przedni aparat 5 MP. Android 12 z certyfikatem GMS współpracuje z systemami SOTI, Ivanti Wavelink, 42Gears i MoboLink.

Producent wymienia zastosowania w handlu, transporcie i logistyce oraz produkcji. Okres gwarancji producenta wynosi 12 miesięcy.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Zasilacz 5 V / 2 A (1010-900067G)](/produkt/unitech-rp902-zasilacz)

W zestawie są terminal, bateria, pasek na dłoń, przewód USB-C i skrócona instrukcja. Zasilacza w zestawie nie ma.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: [],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/HT330',
  priceFrom: 2078.35,
  availability: 'available',
  images: [
    '/images/products/HT330-QA62UM3G.png',
    '/images/products/HT330-QA62UM3G-2.png',
    '/images/products/HT330-QA62UM3G-3.png',
    '/images/products/HT330-QA62UM3G-4.png',
  ],
  imageDescriptions: [
    'Unitech HT330 — widok z przodu, ekran 4 cale i klawiatura 32-klawiszowa',
    'Unitech HT330 — widok z przodu pod kątem, klawiatura i ekran',
    'Unitech HT330 — tył obudowy z aparatem, głośnikiem, stykami pogo i pokrywą baterii',
    'Unitech HT330 — góra obudowy z oknem skanera, widok pod kątem',
  ],
  tags: ['retail', 'logistyka', 'produkcja'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 12, certyfikat GMS' },
    { name: 'Procesor', value: 'Ośmiordzeniowy, 2 GHz' },
    { name: 'Pamięć RAM / Flash', value: '3 GB RAM, 32 GB Flash; microSD do 256 GB' },
    { name: 'Wyświetlacz', value: '4″ WVGA (800 × 480), 450 nitów; ekran dotykowy wielopunktowy z obsługą rękawic i mokrych dłoni' },
    { name: 'Klawiatura', value: '32 klawisze z podświetleniem: cyfry, klawisze funkcyjne i kierunkowe' },
    { name: 'Skaner', value: 'Zebra SE4710 (wersja 4G LTE) albo CM30 (wersja tylko z Wi-Fi); pochylenie 25°; kody 1D i 2D' },
    { name: 'Aparaty', value: 'Tylny 13 MP z PDAF i lampą LED; przedni 5 MP (wersja 4G LTE)' },
    { name: 'WLAN', value: 'Wi-Fi 802.11 a/b/g/n/ac/d/e/h/i/j/k/r/v, 2,4 + 5 GHz, szybki roaming, hotspot' },
    { name: 'WWAN', value: 'Wersja 4G LTE: LTE FDD B1/2/3/4/5/7/8/12/17/20/28/66, LTE TDD B38/39/40/41, 3G WCDMA B1/2/4/5/8, 2G GSM B2/3/5/8' },
    { name: 'SIM', value: 'Wersja 4G LTE: dwa gniazda nano SIM' },
    { name: 'Bluetooth', value: 'Bluetooth 5' },
    { name: 'GNSS', value: 'Wersja 4G LTE: GPS / AGPS, GLONASS, BeiDou, Galileo' },
    { name: 'Złącza', value: 'USB-C 2.0 z OTG; styki pogo z tyłu (uchwyt pistoletowy) i na dole (ładowanie w stacji)' },
    { name: 'Audio', value: 'Głośnik 1 W (90 dB z 10 cm); dwa mikrofony (wersja 4G LTE) lub jeden (wersja tylko z Wi-Fi)' },
    { name: 'Bateria', value: '3,85 V, 5200 mAh Li-ion, wymienna; ponad 20 godzin pracy zależnie od środowiska; ładowanie do pełna ok. 4,5 godziny' },
    { name: 'Klasa szczelności', value: 'IP67' },
    { name: 'Odporność na upadki', value: '1,5 m; 1,8 m w etui; test bębnowy: 600 upadków z 0,5 m' },
    { name: 'Temperatura pracy', value: '-20°C do +60°C' },
    { name: 'Temperatura przechowywania', value: '-40°C do +70°C bez baterii' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
    { name: 'Wymiary', value: '185 × 70 × 23,8 mm' },
    { name: 'Masa', value: '295 g z baterią' },
    { name: 'Zarządzanie urządzeniami', value: 'SOTI, Ivanti Wavelink, 42Gears, MoboLink; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher, USS, KeyRemap, SDK' },
    { name: 'Zawartość zestawu', value: 'Terminal, bateria, pasek na dłoń, przewód USB-C, skrócona instrukcja; zasilacz sprzedawany osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: [
    'Handel i magazyn: sprawdzanie stanów i wysyłka',
    'Inwentaryzacja na całą zmianę',
    'Transport i logistyka',
    'Produkcja',
  ],
  variants: [
    {
      partNumber: 'HT330-QA62UM3G',
      name: 'HT330-QA62UM3G, Wi-Fi, CM30',
      attributes: { 'Łączność': 'Wi-Fi', 'Skaner': 'CM30' },
      priceFrom: 2078.35,
      availability: 'unavailable',
    },
    {
      partNumber: 'HT330-NAL2UM3G',
      name: 'HT330-NAL2UM3G, Wi-Fi, 4G LTE, SE4710',
      attributes: { 'Łączność': 'Wi-Fi + 4G LTE', 'Skaner': 'Zebra SE4710' },
      priceFrom: 2286.14,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sposób połączenia HT330 z siecią. Każda wersja ma Wi-Fi 802.11ac i Bluetooth 5.\n\n• Wi-Fi — sieć firmowa w pasmach 2,4 i 5 GHz.\n\n• Wi-Fi + 4G LTE — dodatkowo dwa gniazda nano SIM, GPS i przedni aparat 5 MP.',
    'Skaner': 'Silnik skanujący HT330, pochylony o 25°; czyta kody 1D i 2D.\n\n• Zebra SE4710 — w wersji z 4G LTE.\n\n• CM30 — w wersji tylko z Wi-Fi; minimalna długość kodów Code 39 i Codabar to 4 znaki.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-rp902-zasilacz',
    'unitech-ht330-etui',
    'unitech-ht330-uchwyt-pistoletowy',
    'unitech-ht330-bateria',
    'unitech-ht330-stacja-1-slot',
    'unitech-ht330-stacja-1-slot-usb',
    'unitech-ht330-ladowarka-baterii',
    'unitech-ht330-szklo-ochronne',
    'unitech-ht330-pasek-na-dlon',
    'unitech-rysik-z-linka',
    'unitech-przewod-zasilajacy-eu-3pin',
    'unitech-rp902-przewod-usb-c',
    'unitech-ht330-zasilacz-stacji',
    'unitech-ea-zasilacz-12v-5a',
    'unitech-rp902',
  ],
  relatedProducts: ['unitech-ht730-plus', 'bluebird-ek430', 'cipherlab-rk26', 'zebra-mc2200'],
  downloads: [HT330_DATASHEET, HT330_WIFI_DATASHEET, HT330_MANUAL, HT330_WIFI_MANUAL, HT330_ACCESSORIES],
  faq: [
    {
      question: 'Czym różnią się dwie wersje Unitech HT330?',
      answer: 'Wersja HT330-NAL2UM3G ma 4G LTE, dwa gniazda nano SIM, GPS, przedni aparat 5 MP, dwa mikrofony i silnik Zebra SE4710. Wersja HT330-QA62UM3G działa tylko w sieci Wi-Fi, ma jeden mikrofon i silnik CM30. Klawiatura, ekran, bateria i obudowa są w obu wersjach takie same.',
    },
    {
      question: 'Jak długo HT330 pracuje na jednej baterii?',
      answer: 'Karta katalogowa podaje ponad 20 godzin pracy na baterii 3,85 V / 5200 mAh, zależnie od środowiska. Ładowanie do pełna trwa około 4,5 godziny. Funkcja Battery Care pozwala ograniczyć ładowanie do 80% lub 50% pojemności. Zapasową baterię ładuje się w [stacji 1-gniazdowej](/produkt/unitech-ht330-stacja-1-slot) albo w [ładowarce 4 baterii](/produkt/unitech-ht330-ladowarka-baterii).',
    },
    {
      question: 'Jaki silnik skanujący ma HT330?',
      answer: 'Zależy od wersji: HT330-NAL2UM3G ma silnik Zebra SE4710, a HT330-QA62UM3G silnik CM30. Oba są pochylone o 25°. Silnik CM30 ma domyślną minimalną długość kodów Code 39 i Codabar równą 4 znaki i nie pozwala ustawić 3 lub mniej; dla takich kodów producent zaleca wersję 4G z silnikiem SE4710.',
    },
    {
      question: 'Czy do HT330 potrzebny jest zasilacz?',
      answer: 'Zasilacz trzeba dokupić: w opakowaniu terminala są bateria, pasek na dłoń i przewód USB-C. Przewodem ładuje się terminal przy pomocy [zasilacza 5 V / 2 A](/produkt/unitech-rp902-zasilacz). Stacje 1-gniazdowe mają własny zasilacz 12 V / 2 A w opakowaniu, a przewód sieciowy do nich kupuje się osobno.',
    },
    {
      question: 'Jakie stacje i uchwyty pasują do HT330?',
      answer: 'Do HT330 są [stacja ładująca](/produkt/unitech-ht330-stacja-1-slot) i [stacja USB](/produkt/unitech-ht330-stacja-1-slot-usb) z gniazdem na zapasową baterię, [ładowarka 4 baterii](/produkt/unitech-ht330-ladowarka-baterii), [etui](/produkt/unitech-ht330-etui) oraz [uchwyt pistoletowy](/produkt/unitech-ht330-uchwyt-pistoletowy), przeznaczony dla terminala bez etui. Przed ładowaniem w etui lub z uchwytem zdejmuje się wyjmowaną pokrywę stacji.',
    },
    {
      question: 'Jak działa rysik 1979-900003G w HT330?',
      answer: 'Producent podaje, że rysik [1979-900003G](/produkt/unitech-rysik-z-linka) działa po włączeniu trybu rękawic w ustawieniach dostępności terminala (Settings → Accessibility → Glove Mode). W trybie zwykłego dotyku rysik nie jest rozpoznawany.',
    },
    {
      question: 'Jaka jest alternatywa dla Unitech HT330?',
      answer: 'Terminal z silnikiem dalekiego zasięgu, wersją z grzałką do mroźni i 5G to [Unitech HT730 Plus](/produkt/unitech-ht730-plus). Pozostałe terminale z klawiaturą są w kategorii [terminale mobilne](/terminale-mobilne).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

export const unitechHandheldProducts: Product[] = [ht730Plus, ht330]
