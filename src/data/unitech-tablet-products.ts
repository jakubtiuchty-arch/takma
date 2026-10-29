import type { Product } from './products'

// Tablety Unitech RT112, RT112 Windows i TB170 Plus (29.10.2026). Warianty tylko dla PN z ceną w /api/stock;
// priceFrom to wartość startowa, ceny i stany na karcie aktualizuje API. Poza LIVE_OFFER_SLUGS, jak tablety Bluebird i Getac.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U4.md

const PRZEWOD_EU = '[Przewód sieciowy EU Unitech, IEC C5, 1,8 m (1550-905940G)](/produkt/unitech-przewod-sieciowy-eu-c5)'

const RT112_DATASHEET = { name: 'Karta katalogowa Unitech RT112 z modemem 5G (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-rt112-karta-katalogowa-en.pdf', size: '1,7 MB' }
const RT112_DATASHEET_WIFI = { name: 'Karta katalogowa Unitech RT112, wersja Wi-Fi (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-rt112-wifi-karta-katalogowa-en.pdf', size: '1,6 MB' }
const RT112_ACCESSORIES = { name: 'Katalog akcesoriów Unitech RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-akcesoria-en.pdf', size: '774 KB' }
const RT112_MANUAL = { name: 'Instrukcja obsługi Unitech RT112 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-instrukcja-en.pdf', size: '4,4 MB' }
const RT112W_DATASHEET = { name: 'Karta katalogowa Unitech RT112 Windows z modemem 5G (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-rt112-windows-karta-katalogowa-en.pdf', size: '700 KB' }
const RT112W_DATASHEET_WIFI = { name: 'Karta katalogowa Unitech RT112 Windows, wersja Wi-Fi (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-rt112-windows-wifi-karta-katalogowa-en.pdf', size: '889 KB' }
const RT112W_ACCESSORIES = { name: 'Katalog akcesoriów Unitech RT112 Windows (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-windows-akcesoria-en.pdf', size: '1,0 MB' }
const RT112W_MANUAL = { name: 'Instrukcja obsługi Unitech RT112 Windows (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-rt112-windows-instrukcja-en.pdf', size: '1,7 MB' }
const TB170_DATASHEET = { name: 'Karta katalogowa Unitech TB170 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-tb170-plus-karta-katalogowa-en.pdf', size: '1,4 MB' }
const TB170_MANUAL = { name: 'Instrukcja obsługi Unitech TB170 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-tb170-plus-instrukcja-en.pdf', size: '1,6 MB' }

const rt112: Product = {
  id: 'unitech-rt112',
  slug: 'unitech-rt112',
  name: 'Unitech RT112',
  seoH1: 'Unitech RT112',
  seoTitle: 'Tablet przemysłowy Unitech RT112 10,1″ z Androidem 13, opcja 5G, IP67',
  seoDescription: 'Tablet przemysłowy Unitech RT112: ekran 10,1″, Android 13 z GMS i AER, Wi-Fi 6E lub 5G, opcjonalny skaner 2D, NFC, IP67 i wymienna bateria 8800 mAh. Tablet wzmocniony i tablet ze skanerem kodów RT112 Unitech. PN: RT112-0A6FUMDG, RT112-QA6FUMDG, RT112-0ANFUMDG, RT112-QANFUMDG.',
  shortDescription: 'Unitech RT112 — tablet przemysłowy 10,1″ z Androidem 13, Wi-Fi 6E lub 5G, opcjonalnym skanerem 2D i NFC; wymienna bateria 8800 mAh, obudowa IP67.',
  description: `Unitech RT112 to tablet z Androidem 13 dla pracowników, którzy skanują towar i od razu sprawdzają jego stan w systemie firmy albo składają zamówienie online dla klienta. Producent wskazuje zastosowania w magazynie, handlu, logistyce, produkcji, transporcie i serwisie w terenie.

System ma certyfikaty Google GMS i Android Enterprise Recommended, a producent przewiduje aktualizację do Androida 16. Procesor Qualcomm 5430 należy do platformy 5G IoT o długim cyklu życia.

Wersje ze skanerem czytają kody 1D i 2D, także Dot Code, Grid Matrix i Han Xin, oraz kody pocztowe. Moduł HF/NFC obsługuje ISO 14443, ISO 15693, MIFARE i FeliCa. Aparat 13 MP współpracuje z Google ARCore i Depth API.

Wersje 5G przesyłają dane, SMS i głos, także przez VoNR, oraz odbierają sygnał GNSS. Bateria 8800 mAh jest wymienna, a funkcja Battery Care ogranicza jej ładowanie do 80% lub 50%, co według producenta wydłuża trwałość. Do noszenia tabletu służą obrotowy pasek na dłoń i pasek na ramię.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- ${PRZEWOD_EU}

W zestawie są tablet, bateria, zasilacz USB-C i skrócona instrukcja. Przewodu sieciowego w zestawie nie ma.`,
  categoryId: 'tablety-przemyslowe',
  subcategoryIds: ['tablety-przemyslowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/RT112',
  priceFrom: 3274.54,
  availability: 'available',
  images: [
    '/images/products/RT112-QANFUMDG.png',
    '/images/products/RT112-QANFUMDG-2.png',
    '/images/products/RT112-QANFUMDG-3.png',
    '/images/products/RT112-QANFUMDG-4.png',
  ],
  imageDescriptions: [
    'Unitech RT112 — widok z przodu, ekran 10,1 cala z Androidem w poziomie',
    'Unitech RT112 — widok z przodu pod kątem, przyciski na prawej krawędzi obudowy',
    'Unitech RT112 — tył obudowy z aparatem, żółtym oknem skanera i logo unitech',
    'Unitech RT112 — tył obudowy pod kątem, pokrywa baterii i okno skanera',
  ],
  tags: ['magazyn', 'logistyka', 'retail'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 13 z usługami Google (GMS) i certyfikatem Android Enterprise Recommended (AER); aktualizacja do Androida 16' },
    { name: 'Procesor', value: 'Qualcomm Snapdragon 5430, 64-bitowy, 6 rdzeni do 2,1 GHz; Qualcomm AI Engine 6. generacji; Qualcomm TEE' },
    { name: 'Pamięć RAM / Flash', value: '6 GB / 128 GB; gniazdo microSD' },
    { name: 'Wyświetlacz', value: '10,1″ 1920 × 1200, LCD, 450 nitów, Gorilla Glass' },
    { name: 'Ekran dotykowy', value: 'Pojemnościowy, wielodotykowy; obsługa rysika, rękawic o grubości do 4 mm i mokrego palca' },
    { name: 'Skaner', value: 'Opcjonalny, zależnie od wersji: silnik 2D w górnej krawędzi; kody 1D, 2D i pocztowe; dwa przyciski skanowania' },
    { name: 'NFC / HF RFID', value: 'ISO 14443-4 (typ A i B), ISO 15693, MIFARE, FeliCa (ISO/IEC 18092)' },
    { name: 'Aparaty', value: 'Tylny 13 MP z autofokusem, lampą LED, Google ARCore i Depth API; przedni 5 MP ze stałą ogniskową' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), Dual-Band Simultaneous (DBS), IEEE 802.11a/b/g/n/ac/ax/d/e/h/i/k/r/v, 2×2 MU-MIMO' },
    { name: 'Bluetooth', value: '5.2' },
    { name: 'Łączność komórkowa', value: 'Wersje 5G: 5G FR1 Sub-6 GHz (n1, n2, n3, n5, n28, n41, n48, n66, n71, n77, n78, n79; 4×4 MIMO), 4G LTE, 3G i 2G; dane, SMS i głos; VoNR; gniazdo nano-SIM' },
    { name: 'GNSS', value: 'Wersje 5G: GPS, BeiDou, GLONASS, Galileo, QZSS, SBAS' },
    { name: 'Porty', value: 'USB 3.1 typ C z DisplayPort Alt Mode; złącze POGO; gniazdo microSD; gniazdo nano-SIM w wersjach 5G' },
    { name: 'Przyciski', value: '6: zasilanie, głośność +/−, dwa przyciski skanowania, jeden przycisk programowalny' },
    { name: 'Audio', value: 'Dwa głośniki, dwa mikrofony z redukcją szumów i tła' },
    { name: 'Czujniki', value: 'Żyroskop, akcelerometr, kompas elektroniczny, czujnik światła i czujnik zbliżeniowy' },
    { name: 'Bateria', value: 'Wymienna, 8800 mAh; pełne ładowanie w około 4 godziny; limit ładowania 80% lub 50% (Battery Care)' },
    { name: 'Klasa szczelności', value: 'IP67 (zanurzenie na głębokość 1 m do 30 minut)' },
    { name: 'Odporność na upadki', value: '1,5 m na beton; MIL-STD-810H, Method 516.8, Procedure IV' },
    { name: 'Temperatura pracy', value: 'Od −20°C do +55°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C (bez baterii)' },
    { name: 'Wilgotność', value: '5%–95% bez kondensacji' },
    { name: 'Wymiary', value: '260 × 165 × 12 mm' },
    { name: 'Masa', value: '690 g' },
    { name: 'Zarządzanie i oprogramowanie', value: 'AirWatch, SOTI, Ivanti Wavelink, MoboLink; StageGO, OEMConfig, Enterprise Launcher, BatteryInfo, USS, USS Camera, KeyRemap, TagAccess; SDK' },
    { name: 'Zawartość zestawu', value: 'Tablet, bateria, zasilacz USB-C, skrócona instrukcja; przewód sieciowy sprzedawany osobno' },
    { name: 'Certyfikaty', value: 'CE, UKCA, RoHS, REACH' },
    { name: 'Gwarancja', value: '12 miesięcy' },
    { name: 'Part Number', value: 'RT112-0A6FUMDG, RT112-QA6FUMDG, RT112-0ANFUMDG, RT112-QANFUMDG' },
  ],
  applications: [
    'Skanowanie towaru i sprawdzanie stanów w systemie magazynowym',
    'Zamówienia online dla klientów w handlu',
    'Magazyn i logistyka',
    'Produkcja, transport i serwis w terenie',
  ],
  variants: [
    {
      partNumber: 'RT112-0A6FUMDG',
      name: 'RT112 — Wi-Fi 6E, bez skanera, 6/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Bez skanera' },
      priceFrom: 3274.54,
      availability: 'available',
    },
    {
      partNumber: 'RT112-QA6FUMDG',
      name: 'RT112 — Wi-Fi 6E, skaner 2D, 6/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Skaner 2D' },
      priceFrom: 3562.48,
      availability: 'available',
    },
    {
      partNumber: 'RT112-0ANFUMDG',
      name: 'RT112 — 5G, Wi-Fi 6E, bez skanera, 6/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E, 5G, GNSS', 'Skaner': 'Bez skanera' },
      priceFrom: 3772.25,
      availability: 'available',
    },
    {
      partNumber: 'RT112-QANFUMDG',
      name: 'RT112 — 5G, Wi-Fi 6E, skaner 2D, 6/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E, 5G, GNSS', 'Skaner': 'Skaner 2D' },
      priceFrom: 4060.16,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sieci, z którymi RT112 łączy się bez dodatkowych akcesoriów. Każda wersja ma Wi-Fi 6E i Bluetooth 5.2.\n\n• 5G — modem Sub-6 GHz z obsługą 4G, 3G i 2G, gniazdo nano-SIM, dane, SMS i głos (VoNR).\n\n• GNSS — odbiornik GPS, BeiDou, GLONASS, Galileo, QZSS i SBAS; tylko w wersjach 5G.',
    'Skaner': 'Silnik skanujący znajduje się w górnej krawędzi tabletu.\n\n• Skaner 2D — czyta kody 1D, 2D i pocztowe; ustawienia w aplikacji USS.\n\n• Bez skanera — kody można odczytać aparatem w aplikacji USS Camera.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-przewod-sieciowy-eu-c5',
    'unitech-rt112-bateria',
    'unitech-rt112-stacja-biurkowa',
    'unitech-rt112-pasek-na-dlon',
    'unitech-rt112-uchwyt-samochodowy-usb',
    'unitech-rt112-uchwyt-samochodowy',
    'unitech-rt112-szklo-ochronne',
    'unitech-rt112-pasek-na-ramie',
    'unitech-rt112-rysik',
    'unitech-rp300-zasilacz-45w',
    'unitech-tablet-plyta-vesa',
    'unitech-tablet-uchwyt-pos',
    'ram-b-166-202u',
  ],
  relatedProducts: ['bluebird-t30', 'honeywell-eda10a', 'honeywell-rt10a', 'getac-zx10-g2', 'brady-rt710'],
  downloads: [RT112_DATASHEET, RT112_DATASHEET_WIFI, RT112_ACCESSORIES, RT112_MANUAL],
  faq: [
    {
      question: 'Czy do Unitech RT112 trzeba dokupić przewód sieciowy?',
      answer: 'Tak. W zestawie jest zasilacz USB-C, ale nie ma przewodu do gniazda sieciowego. Do europejskiego gniazda służy [przewód EU 1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5).',
    },
    {
      question: 'Czym różnią się wersje RT112 w ofercie?',
      answer: 'Różnice dotyczą dwóch cech. Silnik skanujący 2D mają RT112-QA6FUMDG i RT112-QANFUMDG, a modem 5G z GNSS i gniazdem nano-SIM RT112-0ANFUMDG i RT112-QANFUMDG. Pozostałe parametry są wspólne: Android 13, Wi-Fi 6E, NFC oraz pamięć 6 GB RAM, 128 GB Flash.',
    },
    {
      question: 'Jak długo pracuje bateria RT112 i jak ją wymienić?',
      answer: 'Producent podaje do 17 godzin pracy na jednym ładowaniu, zależnie od funkcji i środowiska. Aby wymienić baterię, przesuń w górę cztery zatrzaski pokrywy, zdejmij pokrywę, przytrzymaj zatrzask u dołu i unieś baterię za pasek. Zapasową baterię opisuje karta [baterii 8800 mAh](/produkt/unitech-rt112-bateria).',
    },
    {
      question: 'Do czego służy limit ładowania w RT112?',
      answer: 'Funkcja Battery Care w ustawieniach baterii pozwala przerwać ładowanie na poziomie 80% albo 50%. Producent zaleca niższy limit przy częstym ładowaniu, a przy długim przechowywaniu stan naładowania około 50%.',
    },
    {
      question: 'Czy RT112 bez skanera może czytać kody kreskowe?',
      answer: 'Tak, aplikacja USS Camera odczytuje kody aparatem tabletu i przekazuje dane do aplikacji jak wpis z klawiatury. Konfiguracja skanera w wersjach z silnikiem 2D odbywa się w aplikacji USS.',
    },
    {
      question: 'Czy RT112 obsługuje połączenia głosowe w sieci 5G?',
      answer: 'Tak. Producent potwierdza obsługę VoNR (Voice over New Radio), która poprawia jakość dźwięku i skraca opóźnienie rozmowy w sieci 5G. Funkcja dotyczy wersji z modemem 5G.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech RT112?',
      answer: 'Windows 11 w tej samej obudowie oferuje [Unitech RT112 Windows](/produkt/unitech-rt112-windows). Tablety z Androidem i ekranem 10,1″ innych marek to [Bluebird T30](/produkt/bluebird-t30), [Honeywell RT10A](/produkt/honeywell-rt10a), [Getac ZX10 G2](/produkt/getac-zx10-g2) i [Brady RT710](/produkt/brady-rt710). Pełny wybór jest w kategorii [tablety przemysłowe](/tablety-przemyslowe).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

const rt112Windows: Product = {
  id: 'unitech-rt112-windows',
  slug: 'unitech-rt112-windows',
  name: 'Unitech RT112 Windows',
  seoH1: 'Unitech RT112 Windows',
  seoTitle: 'Tablet przemysłowy Unitech RT112 Windows 10,1″, Windows 11 na ARM, IP67',
  seoDescription: 'Tablet przemysłowy Unitech RT112 Windows: Windows 11 IoT Enterprise LTSC na ARM, ekran 10,1″, procesor Qualcomm 6490, 8 GB RAM, IP67, opcja 5G z eSIM i skaner 2D. Tablet z Windows 11 i tablet wzmocniony RT112 Windows Unitech. PN: RT112-0D6FUMDG, RT112-QD6FUMDG, RT112-0DNFUMDG, RT112-QDNFUMDG.',
  shortDescription: 'Unitech RT112 Windows — tablet przemysłowy 10,1″ z Windows 11 na ARM, pracą bez baterii przy zasilaniu przez styki POGO, opcją 5G z eSIM i skanerem 2D; IP67, 690 g.',
  description: `Unitech RT112 Windows łączy pełny system Windows 11 z obudową o grubości 12 mm, masie 690 g i klasie IP67. System to Windows 11 IoT Enterprise LTSC dla architektury Arm64 (Windows on Arm), a procesor Qualcomm 6490 współpracuje z pamięcią 8 GB RAM i 128 GB Flash. Producent wskazuje zastosowania: kasy POS, hotelarstwo, opieka nad pacjentem, magazyn i produkcja.

Tablet działa także bez baterii, jeśli zasilanie dochodzi przez styki POGO. Producent zaleca ten tryb w kioskach, na liniach produkcyjnych i w pojazdach oraz wskazuje stację biurkową i uchwyt samochodowy jako źródła zasilania. Unika się wtedy zużycia baterii przy ciągłym ładowaniu w wysokiej temperaturze.

Wersja 5G ma eSIM i gniazdo nano-SIM, a sieć eSIM zmienia się kodem QR lub kodem aktywacyjnym przez Wi-Fi. Opcjonalny silnik 2D czyta według producenta kody z odległości do 10 m; jego ustawienia są w aplikacji ScanBridge. Ekran ma fabrycznie naklejoną osłonę.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- ${PRZEWOD_EU}

W zestawie są tablet, bateria, zasilacz USB-C i skrócona instrukcja. Przewodu sieciowego w zestawie nie ma.`,
  categoryId: 'tablety-przemyslowe',
  subcategoryIds: ['tablety-przemyslowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/RT112windows',
  priceFrom: 4030.52,
  availability: 'available',
  images: [
    '/images/products/RT112-QD6FUMDG.png',
    '/images/products/RT112-QD6FUMDG-2.png',
    '/images/products/RT112-QD6FUMDG-3.png',
  ],
  imageDescriptions: [
    'Unitech RT112 Windows — widok z przodu, ekran 10,1 cala z pulpitem Windows 11',
    'Unitech RT112 Windows — widok z przodu pod kątem, ekran z pulpitem Windows 11',
    'Unitech RT112 Windows — tył obudowy z aparatem, oknem skanera i oznaczeniem Windows on Arm',
  ],
  tags: ['retail', 'produkcja', 'healthcare'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Windows 11 IoT Enterprise LTSC 2024 (Entry) dla Arm64 (Windows on Arm); bez Microsoft Store i aplikacji Aparat' },
    { name: 'Procesor', value: 'Qualcomm 6490, 64-bitowy, do 2,7 GHz; Qualcomm AI Engine 6. generacji; Qualcomm TEE' },
    { name: 'Pamięć RAM / Flash', value: '8 GB / 128 GB' },
    { name: 'Wyświetlacz', value: '10,1″ 1920 × 1200, LCD, 450 nitów, Gorilla Glass; osłona ekranu naklejona fabrycznie' },
    { name: 'Ekran dotykowy', value: 'Pojemnościowy, wielodotykowy; obsługa rysika, rękawic o grubości do 4 mm i mokrego palca' },
    { name: 'Skaner', value: 'Opcjonalny, zależnie od wersji: silnik 2D do odczytu kodów 1D, 2D i pocztowych z odległości do 10 m; konfiguracja w aplikacji ScanBridge' },
    { name: 'Aparaty', value: 'Tylny 13 MP z autofokusem i lampą LED; przedni 5 MP ze stałą ogniskową' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), Dual-Band Simultaneous (DBS), IEEE 802.11a/b/g/n/ac/ax/d/e/h/i/k/r/v, 2×2 MU-MIMO' },
    { name: 'Bluetooth', value: '5.2' },
    { name: 'Łączność komórkowa', value: 'Wersje 5G: 5G FR1 Sub-6 GHz (n1, n2, n3, n5, n28, n41, n48, n66, n71, n77, n78, n79; 4×4 MIMO), 4G LTE, 3G i 2G; dane, SMS i głos; eSIM i nano-SIM' },
    { name: 'GNSS', value: 'Wersje 5G: GPS, BeiDou, GLONASS, Galileo, QZSS, SBAS' },
    { name: 'Porty', value: 'USB 3.1 typ C z DisplayPort Alt Mode; złącze POGO; eSIM, gniazdo nano-SIM i gniazdo microSD w wersjach 5G' },
    { name: 'Przyciski', value: '6: zasilanie, głośność +/−, dwa przyciski skanowania, jeden przycisk programowalny' },
    { name: 'Audio', value: 'Dwa głośniki, dwa mikrofony z redukcją szumów i tła' },
    { name: 'Czujniki', value: 'Żyroskop, akcelerometr, kompas elektroniczny, czujnik światła i czujnik zbliżeniowy' },
    { name: 'Bateria', value: 'Wymienna, 8800 mAh; tryb pracy bez baterii przy zasilaniu przez styki POGO' },
    { name: 'Klasa szczelności', value: 'IP67 (zanurzenie na głębokość 1 m do 30 minut)' },
    { name: 'Odporność na upadki', value: '1,5 m na beton; MIL-STD-810H, Method 516.8, Procedure IV' },
    { name: 'Temperatura pracy', value: 'Od −20°C do +55°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C (bez baterii)' },
    { name: 'Wilgotność', value: '5%–95% bez kondensacji' },
    { name: 'Wymiary', value: '260 × 165 × 12 mm' },
    { name: 'Masa', value: '690 g' },
    { name: 'Oprogramowanie', value: 'ScanBridge: aplikacja do konfiguracji skanera, wbudowana w tablet' },
    { name: 'Zawartość zestawu', value: 'Tablet z naklejoną osłoną ekranu, bateria, zasilacz USB-C, skrócona instrukcja; przewód sieciowy sprzedawany osobno' },
    { name: 'Certyfikaty', value: 'CE, UKCA, RoHS, REACH' },
    { name: 'Gwarancja', value: '12 miesięcy' },
    { name: 'Part Number', value: 'RT112-0D6FUMDG, RT112-QD6FUMDG, RT112-0DNFUMDG, RT112-QDNFUMDG' },
  ],
  applications: [
    'Kasy POS i obsługa gości w hotelarstwie',
    'Opieka nad pacjentem',
    'Magazyn i produkcja',
    'Kioski i stanowiska stałe zasilane przez styki POGO',
  ],
  variants: [
    {
      partNumber: 'RT112-0D6FUMDG',
      name: 'RT112 Windows — Wi-Fi 6E, bez skanera, 8/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Bez skanera' },
      priceFrom: 4030.52,
      availability: 'unavailable',
    },
    {
      partNumber: 'RT112-QD6FUMDG',
      name: 'RT112 Windows — Wi-Fi 6E, skaner 2D, 8/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Skaner 2D (do 10 m)' },
      priceFrom: 4407.43,
      availability: 'available',
    },
    {
      partNumber: 'RT112-0DNFUMDG',
      name: 'RT112 Windows — 5G, Wi-Fi 6E, bez skanera, 8/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E, 5G, eSIM, GNSS', 'Skaner': 'Bez skanera' },
      priceFrom: 4487.58,
      availability: 'on-order',
    },
    {
      partNumber: 'RT112-QDNFUMDG',
      name: 'RT112 Windows — 5G, Wi-Fi 6E, skaner 2D, 8/128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E, 5G, eSIM, GNSS', 'Skaner': 'Skaner 2D (do 10 m)' },
      priceFrom: 4864.49,
      availability: 'unavailable',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sieci, z którymi RT112 Windows łączy się bez dodatkowych akcesoriów. Każda wersja ma Wi-Fi 6E i Bluetooth 5.2.\n\n• 5G — modem Sub-6 GHz z obsługą 4G, 3G i 2G oraz gniazdo nano-SIM; dane, SMS i głos.\n\n• eSIM — profil sieci zmienia się kodem QR lub kodem aktywacyjnym przez Wi-Fi; tylko w wersjach 5G.\n\n• GNSS — odbiornik GPS, BeiDou, GLONASS, Galileo, QZSS i SBAS; tylko w wersjach 5G.',
    'Skaner': 'Silnik skanujący znajduje się w górnej krawędzi tabletu. Ustawienia kodów i znaków końca danych są w aplikacji ScanBridge.\n\n• Skaner 2D (do 10 m) — silnik opcjonalny; według producenta czyta kody z odległości do 10 m.\n\n• Bez skanera — tablet do programów Windows; kody czyta zewnętrzny skaner.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-przewod-sieciowy-eu-c5',
    'unitech-rt112-bateria',
    'unitech-rt112-stacja-biurkowa',
    'unitech-rt112-pasek-na-dlon',
    'unitech-rt112-uchwyt-samochodowy-usb',
    'unitech-rt112-uchwyt-samochodowy',
    'unitech-rt112-szklo-ochronne',
    'unitech-rt112-pasek-na-ramie',
    'unitech-rt112-rysik',
    'unitech-rp300-zasilacz-45w',
    'unitech-tablet-plyta-vesa',
    'unitech-tablet-uchwyt-pos',
    'ram-b-166-202u',
  ],
  relatedProducts: ['unitech-tb170-plus', 'honeywell-rt10w', 'zebra-et60w', 'getac-ux10-g5'],
  downloads: [RT112W_DATASHEET, RT112W_DATASHEET_WIFI, RT112W_ACCESSORIES, RT112W_MANUAL],
  faq: [
    {
      question: 'Czy Unitech RT112 Windows ma moduł NFC?',
      answer: 'Nie. Producent podaje, że wersja z Windows nie obsługuje NFC. Moduł HF/NFC ma tablet z Androidem: [Unitech RT112](/produkt/unitech-rt112).',
    },
    {
      question: 'Jakiego systemu używa RT112 Windows i czego w nim brakuje?',
      answer: 'Tablet ma Windows 11 IoT Enterprise LTSC 2024 (Entry) dla Arm64. System LTSC jest przeznaczony do stabilnych instalacji i nie zawiera Microsoft Store, Cortany ani aplikacji konsumenckich; aplikacji Aparat też brak. Microsoft Edge zwykle jest dostępny. Windows Hello z rozpoznawaniem twarzy nie działa, bo wymaga kamery IR.',
    },
    {
      question: 'Jak działa tryb pracy bez baterii?',
      answer: 'Tablet włącza się i pracuje normalnie bez baterii, jeśli ma stabilne zasilanie przez styki POGO. Na stanowiskach stałych służy do tego [stacja biurkowa](/produkt/unitech-rt112-stacja-biurkowa), a w wózkach widłowych i ciężarówkach [uchwyt samochodowy](/produkt/unitech-rt112-uchwyt-samochodowy-usb). Producent zaleca uchwyt zamiast przewodu USB, który może się poluzować od drgań.',
    },
    {
      question: 'Czym różnią się wersje RT112 Windows w ofercie?',
      answer: 'Wersje Wi-Fi, RT112-0D6FUMDG i RT112-QD6FUMDG, nie mają modułu komórkowego. Wersje 5G, RT112-0DNFUMDG i RT112-QDNFUMDG, mają eSIM, gniazdo nano-SIM, microSD i odbiornik GNSS. Silnik skanujący 2D jest w RT112-QD6FUMDG i RT112-QDNFUMDG. Każda wersja ma 8 GB RAM i 128 GB Flash.',
    },
    {
      question: 'Gdzie ustawia się znak końca danych po skanowaniu?',
      answer: 'W aplikacji ScanBridge: Start, Wszystkie aplikacje, Unitech, ScanBridge, Profile Manage, Data Editing Options, Basic, Terminator. Tam wybiera się znak CR dodawany na końcu zeskanowanych danych.',
    },
    {
      question: 'Czy do zasilacza RT112 Windows potrzebny jest osobny przewód?',
      answer: 'Tak, zestaw zawiera zasilacz USB-C bez przewodu do gniazda sieciowego. Producent wymienia przewody EU, UK i US jako akcesoria opcjonalne; dla gniazda europejskiego służy [przewód 1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5).',
    },
    {
      question: 'Jakie są alternatywy dla Unitech RT112 Windows?',
      answer: 'Procesor Intel, port RJ45 i baterię hot swap ma [Unitech TB170 Plus](/produkt/unitech-tb170-plus). Windows na ekranie 10,1″ proponują też [Honeywell RT10W](/produkt/honeywell-rt10w), [Zebra ET60W](/produkt/zebra-et60w) i [Getac UX10 G5](/produkt/getac-ux10-g5).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

const tb170Plus: Product = {
  id: 'unitech-tb170-plus',
  slug: 'unitech-tb170-plus',
  name: 'Unitech TB170 Plus',
  seoH1: 'Unitech TB170 Plus',
  seoTitle: 'Tablet przemysłowy Unitech TB170 Plus 10,1″ z Windows 11, ekran 800 nitów, hot swap',
  seoDescription: 'Tablet przemysłowy Unitech TB170 Plus: Windows 11 IoT Enterprise LTSC, Intel N200, ekran 10,1″ 800 nitów, bateria hot swap, RJ45, IP65, opcja skanera 1D/2D i 4G LTE. Tablet wzmocniony TB170 Plus Unitech z Windows 11. PN: TB170-0D62RMNG, TB170-0DL2RMNG, TB170-QDL2RMNG.',
  shortDescription: 'Unitech TB170 Plus — tablet przemysłowy 10,1″ z Windows 11, procesorem Intel N200, ekranem 800 nitów, portami USB, HDMI i RJ45 oraz baterią wymienianą bez wyłączania.',
  description: `Unitech TB170 Plus to tablet z Windows 11 IoT Enterprise LTSC na procesorze Intel Alder Lake-N N200, który producent kieruje do produkcji, serwisu w terenie i magazynów. Ma 8 GB pamięci LPDDR5, dysk SSD 256 GB i moduł TPM 2.0.

Złącza odpowiadają wyposażeniu komputera: USB-A, USB-C z DisplayPort i zasilaniem Power Delivery, Gigabit Ethernet RJ45 z obsługą PXE, micro HDMI, czytnik microSDXC i gniazdo audio. Gniazdo Kensington umożliwia zabezpieczenie tabletu zamkiem.

Ekran IPS 10,1″ o jasności 800 nitów jest czytelny w słońcu i obsługuje dotyk 10-punktowy w rękawicach oraz na mokro. Opcjonalne pióro Digitizer Pen z dwoma przyciskami, prawym klikiem i gumką, służy do notatek, podpisów i adnotacji.

Bateria 7,68 V / 4300 mAh jest typu hot-swappable, a bateria podtrzymująca ma 142 mAh. Wersje różnią się czytnikiem kodów 1D/2D w górnej krawędzi i modemem 4G LTE. Wymienna płyta montażowa z tyłu przyjmuje podpórkę, a stacje biurkowa i pojazdowa służą do pracy na stałym stanowisku.`,
  categoryId: 'tablety-przemyslowe',
  subcategoryIds: ['tablety-przemyslowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/TB170Plus',
  priceFrom: 9210.32,
  availability: 'available',
  images: [
    '/images/products/TB170-QDL2RMNG.png',
    '/images/products/TB170-QDL2RMNG-2.png',
    '/images/products/TB170-QDL2RMNG-3.png',
    '/images/products/TB170-QDL2RMNG-4.png',
  ],
  imageDescriptions: [
    'Unitech TB170 Plus — widok z przodu, ekran 10,1 cala z pulpitem Windows 11 i diodami stanu',
    'Unitech TB170 Plus — widok z przodu pod kątem, ekran z pulpitem Windows 11',
    'Unitech TB170 Plus — widok pod kątem od dołu, złącze dokujące na dolnej krawędzi',
    'Unitech TB170 Plus — tył obudowy z płytą montażową i baterią',
  ],
  tags: ['produkcja', 'magazyn', 'logistyka'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Windows 11 IoT Enterprise LTSC' },
    { name: 'Procesor', value: 'Intel Alder Lake-N N200' },
    { name: 'Pamięć RAM / SSD', value: '8 GB LPDDR5 / 256 GB SSD' },
    { name: 'Zabezpieczenia', value: 'Moduł TPM 2.0' },
    { name: 'Wyświetlacz', value: '10,1″ 1920 × 1200, IPS, 800 nitów, czytelny w słońcu' },
    { name: 'Ekran dotykowy', value: 'Dotyk 10-punktowy; tryb rękawic i mokrego ekranu; obsługa pióra Digitizer Pen MPP 2.0' },
    { name: 'Skaner', value: 'Opcjonalny, zależnie od wersji: czytnik kodów 1D/2D w górnej krawędzi; klawisz F1 jest domyślnie jego spustem' },
    { name: 'Aparaty', value: 'Przedni 2 MP; tylny 8 MP z autofokusem i lampą' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax), 2×2 MIMO' },
    { name: 'Bluetooth', value: '5.3' },
    { name: 'Łączność komórkowa', value: 'Wersje 4G LTE: modem Quectel EM060K-GL; gniazdo nano-SIM' },
    { name: 'GNSS', value: 'GPS, GLONASS, Galileo' },
    { name: 'Czujniki', value: '9-osiowy czujnik MEMS (akcelerometr, kompas elektroniczny, żyroskop), czujnik światła, czujnik zbliżeniowy' },
    { name: 'Porty', value: 'USB 3.1 typ A; USB 3.1 typ C 10 Gb/s z DisplayPort i zasilaniem PD; Gigabit Ethernet RJ45 z PXE; micro HDMI; czytnik microSDXC; gniazdo audio 3,5 mm; złącze POGO; złącze stacji dokującej; wymienne gniazdo DC; gniazdo Kensington' },
    { name: 'Przyciski', value: '5: zasilanie, głośność +/−, dwa przyciski programowalne (F1 i F2)' },
    { name: 'Audio', value: 'Mikrofon, głośnik i gniazdo audio 3,5 mm' },
    { name: 'Bateria', value: 'Hot-swappable, 7,68 V, 4300 mAh (32 Wh); bateria podtrzymująca 7,4 V, 142 mAh (1,05 Wh)' },
    { name: 'Klasa szczelności', value: 'IP65' },
    { name: 'Odporność na upadki', value: '1,5 m na beton; MIL-STD-810G' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +60°C' },
    { name: 'Wilgotność', value: '5%–95%' },
    { name: 'Wymiary', value: '283 × 192 × 15 mm' },
    { name: 'Masa', value: '990 g' },
    { name: 'Zawartość zestawu', value: 'Tablet z płytą montażową, bateria, zasilacz AC/DC, skrócona instrukcja; bez przewodu sieciowego EU i UK' },
    { name: 'Certyfikaty', value: 'CE' },
    { name: 'Gwarancja', value: '12 miesięcy' },
    { name: 'Part Number', value: 'TB170-0D62RMNG, TB170-0DL2RMNG, TB170-QDL2RMNG' },
  ],
  applications: [
    'Produkcja i serwis w terenie',
    'Magazyny i logistyka',
    'Notatki, podpisy i adnotacje piórem',
    'Stanowiska stałe ze stacją biurkową lub pojazdową',
  ],
  variants: [
    {
      partNumber: 'TB170-0D62RMNG',
      name: 'TB170 Plus — Wi-Fi 6E, bez skanera, 8 GB / 256 GB SSD',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Bez skanera' },
      priceFrom: 9210.32,
      availability: 'available',
    },
    {
      partNumber: 'TB170-0DL2RMNG',
      name: 'TB170 Plus — Wi-Fi 6E, 4G LTE, bez skanera, 8 GB / 256 GB SSD',
      attributes: { 'Łączność': 'Wi-Fi 6E, 4G LTE', 'Skaner': 'Bez skanera' },
      priceFrom: 10211.38,
      availability: 'unavailable',
    },
    {
      partNumber: 'TB170-QDL2RMNG',
      name: 'TB170 Plus — Wi-Fi 6E, 4G LTE, skaner 1D/2D, 8 GB / 256 GB SSD',
      attributes: { 'Łączność': 'Wi-Fi 6E, 4G LTE', 'Skaner': 'Skaner 1D/2D' },
      priceFrom: 11021.22,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sieci, z którymi TB170 Plus łączy się bez dodatkowych akcesoriów. Każda wersja ma Wi-Fi 6E z 2×2 MIMO i Bluetooth 5.3.\n\n• Wi-Fi 6E — wersja bez modemu komórkowego; sieć przewodowa przez port RJ45 z PXE.\n\n• 4G LTE — modem Quectel EM060K-GL i gniazdo nano-SIM.',
    'Skaner': 'Czytnik kodów w górnej krawędzi tabletu; klawisz F1 jest domyślnie jego spustem.\n\n• Skaner 1D/2D — wbudowany czytnik kodów kreskowych.\n\n• Bez skanera — klawisz F1 można zaprogramować do innej funkcji.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-tb170-plus-bateria',
    'unitech-tb170-plus-pioro',
    'unitech-tb170-plus-stacja-biurkowa',
    'unitech-tb170-plus-ladowarka-baterii',
    'unitech-tb170-plus-stacja-pojazdowa',
    'unitech-tb170-plus-zasilacz-pojazdowy',
    'unitech-tb170-plus-pasek-na-dlon',
    'unitech-tb170-plus-pasek-na-ramie',
    'unitech-tb170-plus-raczka',
    'unitech-tb170-plus-podporka',
    'unitech-tb170-plus-uchwyt-vesa',
    'unitech-tablet-plyta-vesa',
    'unitech-tablet-uchwyt-pos',
    'unitech-tb170-plus-zasilacz-65w',
  ],
  relatedProducts: ['unitech-rt112-windows', 'honeywell-rt10w', 'zebra-et60w', 'getac-ux10-g5'],
  downloads: [TB170_DATASHEET, TB170_MANUAL],
  faq: [
    {
      question: 'Czy zestaw TB170 Plus zawiera przewód do gniazda sieciowego?',
      answer: 'Nie. Zestaw europejski ma zasilacz AC/DC bez przewodu sieciowego EU i UK. Przewody 3-pin EU, US i UK producent wymienia jako osobne akcesoria. Zapasowy zasilacz opisuje karta [zasilacza 65 W](/produkt/unitech-tb170-plus-zasilacz-65w).',
    },
    {
      question: 'Czym różnią się wersje TB170 Plus w ofercie?',
      answer: 'Czytnik kodów 1D/2D ma TB170-QDL2RMNG. Modem 4G LTE mają TB170-0DL2RMNG i TB170-QDL2RMNG, a TB170-0D62RMNG łączy się tylko przez Wi-Fi 6E. Wspólne są Windows 11, procesor Intel N200, pamięć 8 GB RAM, dysk 256 GB SSD i Bluetooth 5.3.',
    },
    {
      question: 'Jak wymienić baterię TB170 Plus bez wyłączania tabletu?',
      answer: 'Bateria 4300 mAh jest typu hot-swappable, więc wymiana nie przerywa pracy. Po włożeniu nowej baterii trzeba zablokować zatrzask na tylnej ściance, bo bez tego ekran się nie włączy. Zapasową baterię opisuje karta [baterii 4300 mAh](/produkt/unitech-tb170-plus-bateria).',
    },
    {
      question: 'Jakie opcje pamięci ma TB170 Plus?',
      answer: 'Wersje w ofercie mają 8 GB RAM i dysk 256 GB. Producent podaje też opcje z 16 GB RAM oraz dyskiem 512 GB lub 1 TB. Takich konfiguracji nie ma w ofercie; o ich dostępność można zapytać.',
    },
    {
      question: 'Czy TB170 Plus można zasilać przez port USB-C?',
      answer: 'Tak. Port USB-C 10 Gb/s przyjmuje zasilanie Power Delivery o mocy 65 W i obsługuje wyjście obrazu DisplayPort. Tablet może też pobierać energię z powerbanku, jeśli jego moc spełnia minimalne wymagania.',
    },
    {
      question: 'Co można zamontować na płycie montażowej z tyłu tabletu?',
      answer: 'Płytę odkręca się śrubokrętem, a do niej mocuje się [podpórkę](/produkt/unitech-tb170-plus-podporka) albo uchwyt snap mount 4070-900015G. Do stałego mocowania producent przewiduje także [płytę VESA](/produkt/unitech-tablet-plyta-vesa) i [uchwyt POS](/produkt/unitech-tablet-uchwyt-pos), zgodne z TB170 Plus.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech TB170 Plus?',
      answer: 'Obudowę IP67 i Windows 11 na ARM łączy [Unitech RT112 Windows](/produkt/unitech-rt112-windows). Z innych marek tablet Windows z ekranem 10,1″ mają [Honeywell RT10W](/produkt/honeywell-rt10w), [Zebra ET60W](/produkt/zebra-et60w) oraz [Getac UX10 G5](/produkt/getac-ux10-g5). Zestawienie wszystkich modeli jest w kategorii [tablety przemysłowe](/tablety-przemyslowe).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

export const unitechTabletProducts: Product[] = [rt112, rt112Windows, tb170Plus]
