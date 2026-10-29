import type { Product } from './products'

// Terminale Unitech EA660, EA530 i EA530 UHF (29.10.2026). Warianty tylko dla PN z ceną w /api/stock;
// priceFrom to wartość startowa, ceny i stany na karcie aktualizuje API.
// Dokumentacja: docs/catalog/unitech-terminale-2026-10-29/U1.md

const ZASILACZ_EU = '[Zasilacz USB-C z szybkim ładowaniem, wtyczka EU (1010-900074G)](/produkt/unitech-ea-zasilacz-usb-c-eu)'

const EA660_DATASHEET = { name: 'Karta katalogowa Unitech EA660 (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ea660-karta-katalogowa-en.pdf', size: '1,3 MB' }
const EA660_MANUAL = { name: 'Instrukcja obsługi Unitech EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-instrukcja-en.pdf', size: '4,7 MB' }
const EA660_ACCESSORIES = { name: 'Katalog akcesoriów Unitech EA660 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea660-akcesoria-en.pdf', size: '1,6 MB' }
const EA530_DATASHEET = { name: 'Karta katalogowa Unitech EA530 (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ea530-karta-katalogowa-en.pdf', size: '1,7 MB' }
const EA530_UHF_DATASHEET = { name: 'Karta katalogowa Unitech EA530 UHF (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ea530-uhf-karta-katalogowa-en.pdf', size: '1,7 MB' }
const EA530_MANUAL = { name: 'Instrukcja obsługi Unitech EA530 i EA530 UHF (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea530-instrukcja-en.pdf', size: '4,6 MB' }
const EA530_ACCESSORIES = { name: 'Katalog akcesoriów Unitech EA530 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ea530-akcesoria-en.pdf', size: '1,8 MB' }

const ea660: Product = {
  id: 'unitech-ea660',
  slug: 'unitech-ea660',
  name: 'Unitech EA660',
  seoH1: 'Unitech EA660',
  seoTitle: 'Terminal mobilny Unitech EA660 6″ z Androidem 15, Wi-Fi 6E i opcją 5G',
  seoDescription: 'Terminal mobilny Unitech EA660: ekran 6″ 630 nitów, Android 15, Wi-Fi 6E, opcja 5G i skaner do 12 m. Kolektor danych i smartfon przemysłowy EA660 Unitech. PN: EA660-N56CUM3G, EA660-N5NFUM3G, EA660-L56CUM3G, EA660-L5NFUM3G.',
  shortDescription: 'Unitech EA660 — terminal mobilny z ekranem 6″ Full HD+ o jasności 630 nitów, Wi-Fi 6E, opcją 5G z eSIM i opcjonalnym silnikiem skanującym do 12 m.',
  description: `Unitech EA660 to terminal mobilny z ekranem 6″ Full HD+ (2160 × 1080) o jasności 630 nitów. Szkło Corning Gorilla Glass Victus chroni ekran, który reaguje na dotyk w rękawicach (3 mm), rysik 5,5 mm i mokry palec.

Kody 1D i 2D odczytuje imager 2D. W ofercie są wersje ze standardowym silnikiem skanującym oraz z opcjonalnym silnikiem do odczytu z odległości do 12 m. Producent przeznacza go do pracy z bliska i z daleka w handlu i logistyce.

Wersje 5G mają modem 5G z eSIM i kartą nano SIM, obsługują połączenia głosowe i SMS oraz odbierają sygnał GNSS na pasmach L1 i L5. Wersje tylko z Wi-Fi 6E nie mają modułu SIM ani GPS.

Baterię 3,87 V / 5000 mAh z certyfikatem UL wymienia się bez wyłączania terminala. Stacja dokująca z portem HDMI umożliwia pracę przy zewnętrznym monitorze.

Terminal jest przeznaczony do handlu, gastronomii i hotelarstwa, logistyki oraz ochrony zdrowia. Fabryczny Android 15 z certyfikatami GMS i AER ma przewidzianą aktualizację do wersji 17. Gwarancja producenta w naszej ofercie trwa 12 miesięcy.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- ${ZASILACZ_EU}

Przewód USB-C jest w zestawie, a zasilacza nie ma. Zasilacz z szybkim ładowaniem ładuje terminal do pełna w 4 godziny.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: [],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/EA660',
  priceFrom: 2882.4,
  availability: 'on-order',
  images: [
    '/images/products/EA660-N56CUM3G.png',
    '/images/products/EA660-N56CUM3G-2.png',
    '/images/products/EA660-N56CUM3G-3.png',
  ],
  imageDescriptions: [
    'Unitech EA660 — widok z przodu, ekran 6 cali i przyciski skanowania po bokach obudowy',
    'Unitech EA660 — tył obudowy z aparatem, stykami pogo i pokrywą baterii',
    'Unitech EA660 — widok z przodu pod kątem, przycisk skanowania na boku obudowy',
  ],
  tags: ['retail', 'logistyka', 'healthcare'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 15 (aktualizacja do Androida 17), certyfikaty GMS i AER' },
    { name: 'Procesor', value: 'Qualcomm Snapdragon 4490, 64-bitowy, 8 rdzeni, do 2,4 GHz' },
    { name: 'Pamięć RAM / Flash', value: '6 GB lub 8 GB RAM (zależnie od wersji), 128 GB Flash UFS; microSD do 1 TB' },
    { name: 'Wyświetlacz', value: '6″, 18:9, Full HD+ (2160 × 1080), 630 nitów; Corning Gorilla Glass Victus; obsługa rękawic (3 mm), rysika 5,5 mm i mokrych palców' },
    { name: 'Skaner', value: 'Imager 2D, kody 1D i 2D; silnik standardowy albo opcjonalny silnik dalekiego zasięgu do odczytu z odległości do 12 m, zależnie od PN' },
    { name: 'NFC / HF RFID', value: '13,56 MHz; ISO 14443 A/B, ISO 15693, MIFARE, FeliCa (ISO/IEC 18092)' },
    { name: 'Aparaty', value: 'Tylny 16 MP z autofokusem i lampą; przedni 5 MP' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), IEEE 802.11 a/b/g/n/ac/ax/d/e/h/i/k/r/v, 2×2 MU-MIMO, DBS, szybki roaming 802.11r' },
    { name: 'Łączność', value: 'Bluetooth 5.2 BLE; wersje 5G: 5G NR i LTE, eSIM i nano SIM, dane, SMS i połączenia głosowe' },
    { name: 'GNSS', value: 'GPS, GLONASS, Galileo, BeiDou, QZSS, L1 + L5, A-GPS, XTRA (wersje 5G)' },
    { name: 'Złącza', value: 'USB 3.1 typ C z OTG; Ethernet i USB host przez stację; styki pogo z tyłu (uchwyt pistoletowy) i na dole (ładowanie w stacji)' },
    { name: 'Przyciski', value: '5: przycisk programowalny, dwa przyciski skanowania, głośność góra/dół, zasilanie' },
    { name: 'Audio', value: 'Głośnik do 104 dB (4 kHz, 10 cm), dwa mikrofony z redukcją szumów, Smart PA' },
    { name: 'Bateria', value: '3,87 V, 5000 mAh Li-ion, certyfikat UL; wymiana bez wyłączania (warm swap)' },
    { name: 'Klasa szczelności', value: 'IP65 i IP68' },
    { name: 'Odporność na upadki', value: 'Upadki z 1,5 m na beton wg MIL-STD-810H; 1,8 m w etui. Test bębnowy: 600 upadków z 0,5 m, w etui 1000 upadków z 1 m' },
    { name: 'Temperatura pracy', value: '-20°C do +55°C' },
    { name: 'Temperatura przechowywania', value: '-40°C do +70°C (bez baterii)' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
    { name: 'Wymiary', value: '162,9 × 77 × 14,9 mm' },
    { name: 'Masa', value: '270 g ±1,5% z baterią (zależnie od konfiguracji)' },
    { name: 'Zarządzanie urządzeniami', value: 'SOTI, VMware, MoboLink; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher, USS, KeyRemap, SDK' },
    { name: 'Zawartość zestawu', value: 'Terminal, bateria, przewód USB-C, skrócona instrukcja; zasilacz sprzedawany osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: [
    'Handel: sprawdzanie stanów i zamówienia dla klientów',
    'Gastronomia i hotelarstwo',
    'Logistyka i magazyny, w tym odczyt etykiet z dużej odległości',
    'Ochrona zdrowia',
  ],
  variants: [
    {
      partNumber: 'EA660-N56CUM3G',
      name: 'EA660-N56CUM3G, Wi-Fi 6E, skaner standardowy',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Standardowy' },
      priceFrom: 2882.4,
      availability: 'on-order',
    },
    {
      partNumber: 'EA660-N5NFUM3G',
      name: 'EA660-N5NFUM3G, Wi-Fi 6E, 5G, skaner standardowy',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Skaner': 'Standardowy' },
      priceFrom: 3204.14,
      availability: 'on-order',
    },
    {
      partNumber: 'EA660-L56CUM3G',
      name: 'EA660-L56CUM3G, Wi-Fi 6E, skaner do 12 m',
      attributes: { 'Łączność': 'Wi-Fi 6E', 'Skaner': 'Dalekiego zasięgu (do 12 m)' },
      priceFrom: 4189.28,
      availability: 'on-order',
    },
    {
      partNumber: 'EA660-L5NFUM3G',
      name: 'EA660-L5NFUM3G, Wi-Fi 6E, 5G, skaner do 12 m',
      attributes: { 'Łączność': 'Wi-Fi 6E + 5G', 'Skaner': 'Dalekiego zasięgu (do 12 m)' },
      priceFrom: 4586.84,
      availability: 'on-order',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sposób połączenia EA660 z siecią. Każda wersja ma Wi-Fi 6E i Bluetooth 5.2.\n\n• Wi-Fi 6E — praca w sieci firmowej w pasmach 2,4, 5 i 6 GHz. Ta wersja nie ma gniazda SIM ani GPS.\n\n• Wi-Fi 6E + 5G — dodatkowo 5G i LTE z eSIM lub kartą nano SIM, połączenia głosowe i SMS oraz GPS z L1 + L5.',
    'Skaner': 'Silnik skanujący EA660. Obie wersje czytają kody 1D i 2D.\n\n• Standardowy — odczyt z typowej odległości roboczej.\n\n• Dalekiego zasięgu (do 12 m) — opcjonalny silnik do odczytu z bliska i z daleka, np. etykiet na wysokich regałach.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-ea-zasilacz-usb-c-eu',
    'unitech-ea660-etui',
    'unitech-ea660-uchwyt-pistoletowy',
    'unitech-ea660-bateria',
    'unitech-ea-stacja-1-slot',
    'unitech-ea-stacja-1-slot-usb',
    'unitech-ea-stacja-1-slot-ethernet',
    'unitech-ea-stacja-5-slot',
    'unitech-ea-stacja-5-slot-ethernet',
    'unitech-ea660-stacja-4-4',
    'unitech-ea660-ladowarka-baterii',
    'unitech-ea-stacja-dokujaca',
    'unitech-ea660-szklo-ochronne',
    'unitech-ea-pasek-na-dlon',
    'unitech-ea660-smycz',
    'unitech-rysik-5-5-mm',
    'unitech-ea-przewod-usb-c',
    'unitech-ea-uchwyt-samochodowy',
    'unitech-rp300',
    'unitech-rp300-adapter-ea660',
    'unitech-rp902',
  ],
  relatedProducts: ['unitech-ea530', 'bluebird-s20', 'bluebird-s50', 'cipherlab-rs38'],
  downloads: [EA660_DATASHEET, EA660_MANUAL, EA660_ACCESSORIES],
  faq: [
    {
      question: 'Czym różnią się wersje Unitech EA660 w ofercie?',
      answer: 'Wersje różnią się łącznością i silnikiem skanującym. Każda ma Wi-Fi 6E; wersje oznaczone 5G mają dodatkowo modem 5G, eSIM, nano SIM i GPS. Silnik standardowy służy do odczytu z mniejszej odległości, a silnik dalekiego zasięgu z odległości do 12 m.',
    },
    {
      question: 'Jakie sieci komórkowe obsługuje EA660 w wersji 5G?',
      answer: 'Modem obsługuje 5G NR (m.in. n1, n3, n7, n8, n20, n28, n38, n78), LTE, WCDMA i GSM. Terminal ma eSIM i gniazdo nano SIM, a przełączenie sieci eSIM odbywa się po połączeniu z Wi-Fi przez kod QR lub kod aktywacyjny. Wersja tylko z Wi-Fi nie ma modułu SIM.',
    },
    {
      question: 'Z jakiej odległości EA660 odczytuje kody kreskowe?',
      answer: 'Wersje z silnikiem dalekiego zasięgu odczytują kody z odległości do 12 m. Wersje ze standardowym silnikiem służą do odczytu z mniejszej odległości. Rodzaj silnika podaje tabela wariantów.',
    },
    {
      question: 'Czy do EA660 potrzebny jest zasilacz?',
      answer: 'Tak. W zestawie jest przewód USB-C, ale nie ma zasilacza. Do ładowania służy [zasilacz USB-C z szybkim ładowaniem](/produkt/unitech-ea-zasilacz-usb-c-eu). Pełne naładowanie tym zasilaczem trwa do 4 godzin.',
    },
    {
      question: 'Jakie stacje ładujące pasują do EA660?',
      answer: 'Do EA660 są stacje 1-slot ([ładująca](/produkt/unitech-ea-stacja-1-slot), [USB](/produkt/unitech-ea-stacja-1-slot-usb) i [Ethernet](/produkt/unitech-ea-stacja-1-slot-ethernet)), [stacja 5-slot](/produkt/unitech-ea-stacja-5-slot), [stacja na 4 terminale i 4 baterie](/produkt/unitech-ea660-stacja-4-4) oraz [stacja dokująca](/produkt/unitech-ea-stacja-dokujaca). Przed włożeniem terminala w etui lub z uchwytem pistoletowym wyjmuje się wkładkę ze stacji 1-slot i 5-slot.',
    },
    {
      question: 'Czy do EA660 można dołączyć czytnik UHF RFID?',
      answer: 'Tak. Terminal ma styki pogo z tyłu, do których montuje się uchwyt. Czytnik [Unitech RP300](/produkt/unitech-rp300) o zasięgu do 25 m łączy się z EA660 przez [adapter](/produkt/unitech-rp300-adapter-ea660). EA660 nie ma wbudowanego czytnika UHF.',
    },
    {
      question: 'Jak aktualizuje się system w EA660?',
      answer: 'EA660 ma fabrycznie Androida 15 z możliwością aktualizacji do Androida 17. Aktualizację oprogramowania sprzętowego pobiera się przez serwer FOTA albo z pliku OTA ZIP zapisanego w pamięci terminala, a aplikacja System Update Center sprawdza dostępne wersje.',
    },
    {
      question: 'Jaka jest alternatywa dla Unitech EA660?',
      answer: 'Lżejszy terminal z ekranem 6″ HD+, wersją 4G LTE i baterią quick-release to [Unitech EA530](/produkt/unitech-ea530). Wbudowany czytnik UHF RFID ma [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Pozostałe terminale są w kategorii [terminale mobilne](/terminale-mobilne).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

const ea530: Product = {
  id: 'unitech-ea530',
  slug: 'unitech-ea530',
  name: 'Unitech EA530',
  seoH1: 'Unitech EA530',
  seoTitle: 'Terminal mobilny Unitech EA530 6″ z Androidem 15, 4G i Wi-Fi 6E',
  seoDescription: 'Terminal mobilny Unitech EA530: Android 15, 4G LTE lub Wi-Fi 6E, bateria 4250 mAh wymieniana bez wyłączania, masa 242 g. Kolektor danych i smartfon przemysłowy EA530 Unitech. PN: EA530-NA6CUM3G, EA530-NALFUM3G.',
  shortDescription: 'Unitech EA530 — lekki terminal mobilny 6″ (242 g) z baterią 4250 mAh wymienianą bez wyłączania, 4G LTE lub Wi-Fi 6E oraz odczytem kodów DPM.',
  description: `Unitech EA530 to terminal mobilny z baterią 4250 mAh typu quick-release. Baterię z pokrywą, wykonaną jako jedna część, wymienia się bez wyłączania terminala (warm swap). Wymiana w trakcie pracy dotyczy standardowych wersji 4G i tylko z Wi-Fi. Wersja z czytnikiem UHF jest osobnym modelem: [Unitech EA530 UHF](/produkt/unitech-ea530-uhf).

Obudowa ma wymiary 161 × 76,8 × 14,15 mm i waży 242 g (±1%). Ekran 6″ HD+ (1440 × 720) o jasności 500 nitów obsługuje rysik, rękawice i mokre palce.

Terminal jest dostępny w wersji 4G LTE oraz w wersji tylko z Wi-Fi 6E. Wersja 4G ma eSIM i gniazdo nano SIM; moduł SIM i GPS występują wyłącznie w niej.

Skaner czyta kody 1D i 2D, w tym DPM (10 mil), oraz kody na ekranach telefonów i na papierze, w dowolnej orientacji. Do odczytu znaczników UHF z odległości do 25 m producent przewiduje współpracę z czytnikiem [Unitech RP300](/produkt/unitech-rp300).

Producent kieruje EA530 do handlu i logistyki, a z czytnikiem RP300 także do śledzenia zapasów i majątku, również w serwisie w terenie. System Android 15 ma certyfikat GMS i możliwość aktualizacji do Androida 17. Okres gwarancji wynosi 12 miesięcy.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- ${ZASILACZ_EU}

Zestaw nie zawiera zasilacza; w pudełku są terminal, bateria, przewód USB-C i skrócona instrukcja.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: [],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/EA530',
  priceFrom: 2166.48,
  availability: 'available',
  images: [
    '/images/products/EA530-NA6CUM3G.png',
    '/images/products/EA530-NA6CUM3G-2.png',
    '/images/products/EA530-NA6CUM3G-3.png',
  ],
  imageDescriptions: [
    'Unitech EA530 — widok z przodu, ekran 6 cali HD+',
    'Unitech EA530 — tył obudowy z aparatem, stykami pogo i baterią z pokrywą',
    'Unitech EA530 — widok z przodu pod kątem, przyciski skanowania na bokach obudowy',
  ],
  tags: ['retail', 'logistyka', 'magazyn'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 15 (aktualizacja do Androida 17), certyfikat GMS' },
    { name: 'Procesor', value: '8 rdzeni, 2,2 GHz' },
    { name: 'Pamięć RAM / Flash', value: '6 GB RAM, 64 GB Flash; microSD do 1 TB' },
    { name: 'Wyświetlacz', value: '6″ HD+ (1440 × 720), 500 nitów; Corning Gorilla Glass; obsługa rysika, rękawic i mokrych palców' },
    { name: 'Skaner', value: 'Imager 2D, kody 1D i 2D, w tym DPM (10 mil); odczyt z ekranów telefonów i z papieru w dowolnej orientacji' },
    { name: 'NFC / HF RFID', value: '13,56 MHz; ISO 14443 A/B, ISO 15693, MIFARE, FeliCa (ISO/IEC 18092)' },
    { name: 'Aparaty', value: 'Tylny 16 MP z autofokusem i lampą; przedni 8 MP' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), IEEE 802.11 a/b/g/n/ac/ax/d/e/h/i/k/r/u/w/v, DBS' },
    { name: 'Łączność', value: 'Bluetooth 5.2 BLE; wersje 4G: LTE FDD B1/2/3/4/5/7/8/12/17/19/20/28a&b/66, LTE TDD B38/39/40/41, eSIM i nano SIM' },
    { name: 'GNSS', value: 'GPS, BeiDou, GLONASS, Galileo, A-GPS (wersje 4G)' },
    { name: 'Złącza', value: 'USB 2.0 typ C z OTG; styki pogo z tyłu (uchwyt pistoletowy) i na dole (ładowanie w stacji)' },
    { name: 'Przyciski', value: '6: przycisk programowalny, dwa przyciski skanowania, głośność góra/dół, zasilanie' },
    { name: 'Audio', value: 'Głośnik 95 dB (10 cm), dwa mikrofony z redukcją szumów, Smart PA' },
    { name: 'Bateria', value: '4250 mAh Li-Polymer, bateria z pokrywą w jednej części; wymiana bez wyłączania (warm swap) w wersjach 4G i tylko z Wi-Fi' },
    { name: 'Klasa szczelności', value: 'IP65 i IP68' },
    { name: 'Odporność na upadki', value: 'Upadki z 1,5 m; 1,8 m w etui. Test bębnowy: 600 upadków z 0,5 m' },
    { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    { name: 'Temperatura przechowywania', value: '-30°C do +70°C (bez baterii)' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
    { name: 'Wymiary', value: '161 × 76,8 × 14,15 mm' },
    { name: 'Masa', value: '242 g ±1% z baterią' },
    { name: 'Zarządzanie urządzeniami', value: 'SOTI, VMware, MoboLink; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher, USS, KeyRemap, SDK' },
    { name: 'Zawartość zestawu', value: 'Terminal, bateria, przewód USB-C, skrócona instrukcja; zasilacz sprzedawany osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: [
    'Handel: odczyt kodów z etykiet i ekranów telefonów',
    'Logistyka',
    'Śledzenie zapasów i majątku z czytnikiem RP300 (UHF do 25 m)',
  ],
  variants: [
    {
      partNumber: 'EA530-NA6CUM3G',
      name: 'EA530-NA6CUM3G, Wi-Fi 6E',
      attributes: { 'Łączność': 'Wi-Fi 6E' },
      priceFrom: 2166.48,
      availability: 'available',
    },
    {
      partNumber: 'EA530-NALFUM3G',
      name: 'EA530-NALFUM3G, Wi-Fi 6E, 4G LTE',
      attributes: { 'Łączność': 'Wi-Fi 6E + 4G LTE' },
      priceFrom: 2201.54,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'Łączność': 'Sposób połączenia EA530 z siecią. Każda wersja ma Wi-Fi 6E i Bluetooth 5.2.\n\n• Wi-Fi 6E — praca w budynku, bez SIM i GPS.\n\n• Wi-Fi 6E + 4G LTE — dodatkowo LTE z eSIM lub kartą nano SIM oraz GPS do pracy w terenie.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-ea-zasilacz-usb-c-eu',
    'unitech-ea530-etui',
    'unitech-ea530-uchwyt-pistoletowy',
    'unitech-ea-stacja-1-slot',
    'unitech-ea530-bateria',
    'unitech-ea-stacja-1-slot-usb',
    'unitech-ea-stacja-1-slot-ethernet',
    'unitech-ea-stacja-5-slot',
    'unitech-ea-stacja-5-slot-ethernet',
    'unitech-ea530-ladowarka-baterii',
    'unitech-ea-stacja-dokujaca',
    'unitech-ea530-szklo-ochronne',
    'unitech-ea-pasek-na-dlon',
    'unitech-rysik-5-5-mm',
    'unitech-ea-przewod-usb-c',
    'unitech-ea-uchwyt-samochodowy',
    'unitech-rp300',
    'unitech-rp300-adapter-ea530',
    'unitech-rp902',
  ],
  relatedProducts: ['unitech-ea660', 'bluebird-s20', 'bluebird-s10', 'cipherlab-rs38'],
  downloads: [EA530_DATASHEET, EA530_MANUAL, EA530_ACCESSORIES],
  faq: [
    {
      question: 'Które wersje Unitech EA530 mają baterię wymienianą bez wyłączania?',
      answer: 'Wymianę bez wyłączania (warm swap) obsługują standardowe wersje 4G i tylko z Wi-Fi. Bateria 4250 mAh stanowi jedną część z pokrywą i wymienia się ją jednym ruchem. Model [EA530 UHF](/produkt/unitech-ea530-uhf) tej funkcji nie obsługuje.',
    },
    {
      question: 'Czy wersja EA530 tylko z Wi-Fi ma GPS i SIM?',
      answer: 'Nie. Moduł 4G, GPS oraz gniazda eSIM i nano SIM mają tylko wersje 4G LTE. Wersja tylko z Wi-Fi 6E łączy się z siecią firmową i nadaje się do pracy w budynku.',
    },
    {
      question: 'Czy EA530 odczyta kody DPM i kody z ekranów telefonów?',
      answer: 'Tak. Skaner obsługuje kody DPM (10 mil) i odczytuje kody na ekranach telefonów oraz na papierze w dowolnej orientacji. Czyta też wszystkie popularne kody 1D i 2D.',
    },
    {
      question: 'Czy EA530 odczytuje znaczniki UHF RFID?',
      answer: 'EA530 nie ma wbudowanego czytnika UHF, tylko moduł NFC. Znaczniki UHF odczyta z odległości do 25 m razem z czytnikiem [Unitech RP300](/produkt/unitech-rp300) i [adapterem do EA530](/produkt/unitech-rp300-adapter-ea530). Wbudowany UHF ma model [EA530 UHF](/produkt/unitech-ea530-uhf).',
    },
    {
      question: 'Jakie systemy zarządzania urządzeniami obsługuje EA530?',
      answer: 'EA530 współpracuje z systemami SOTI, VMware i MoboLink. Terminal ma też narzędzia Unitech: StageGO do konfiguracji na podstawie kodów kreskowych, OEMConfig dla zewnętrznych systemów MDM i Enterprise Launcher, który ogranicza dostęp do systemu Android.',
    },
    {
      question: 'Jak ładować Unitech EA530?',
      answer: 'Przewód USB-C należy do zestawu, a [zasilacz USB-C](/produkt/unitech-ea-zasilacz-usb-c-eu) z wtyczką EU kupuje się osobno. Terminal ładuje się do pełna w 4 godziny. Zapasowe baterie ładuje [ładowarka 4 baterii](/produkt/unitech-ea530-ladowarka-baterii).',
    },
    {
      question: 'Czy EA530 pasuje do stacji ładującej razem z etui albo uchwytem pistoletowym?',
      answer: 'Tak. W stacji 1-slot lub 5-slot zdejmuje się wkładkę i wsuwa terminal w [etui](/produkt/unitech-ea530-etui) albo z [uchwytem pistoletowym](/produkt/unitech-ea530-uchwyt-pistoletowy). Etui zwiększa odporność na upadki do 1,8 m.',
    },
    {
      question: 'Jaka jest alternatywa dla Unitech EA530?',
      answer: 'Terminal z ekranem Full HD+ o jasności 630 nitów, baterią 5000 mAh i opcją 5G to [Unitech EA660](/produkt/unitech-ea660). Terminal z czytnikiem UHF RFID to [Unitech EA530 UHF](/produkt/unitech-ea530-uhf). Pozostałe modele są w kategorii [terminale mobilne](/terminale-mobilne).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

const ea530Uhf: Product = {
  id: 'unitech-ea530-uhf',
  slug: 'unitech-ea530-uhf',
  name: 'Unitech EA530 UHF',
  seoH1: 'Unitech EA530 UHF',
  seoTitle: 'Terminal z czytnikiem UHF RFID Unitech EA530 UHF z Androidem 15 i 4G',
  seoDescription: 'Terminal z czytnikiem UHF RFID Unitech EA530 UHF: Impinj E310, odczyt do 1,8 m, skaner 1D/2D, 4G LTE, Wi-Fi 6E, Android 15. Kolektor danych z RFID, smartfon przemysłowy EA530 UHF Unitech. PN: EA530-YALFTM3G.',
  shortDescription: 'Unitech EA530 UHF — terminal mobilny z wbudowanym czytnikiem UHF RFID (Impinj E310, do 1,8 m), skanerem 1D/2D, 4G LTE i aplikacją TagAccess.',
  description: `Unitech EA530 UHF to terminal mobilny, który odczytuje kody kreskowe 1D i 2D, znaczniki HF/NFC i znaczniki UHF RFID w jednym urządzeniu. Czytnik UHF z układem Impinj E310 pracuje na odległość do 1,8 m. Unitech produkuje go w wersjach na pasmo 865–868 MHz (EU) i 902–928 MHz (US).

Funkcje RFID działają razem ze standardowym uchwytem pistoletowym. Producent przeznacza je do inwentaryzacji i śledzenia majątku w handlu, logistyce i serwisie w terenie.

Aplikacja TagAccess obsługuje inwentaryzację, odczyt i zapis znaczników, blokowanie (Lock), dezaktywację (Kill) i wyszukiwanie znacznika (Find). Funkcja Data Wedge wpisuje odczytany znacznik tak, jakby pochodził z klawiatury. Aplikacja pracuje na operacjach EPC i SGTIN.

Bateria 4250 mAh stanowi jedną część z pokrywą. W tym modelu nie ma wymiany baterii bez wyłączania terminala. Łączność zapewniają 4G LTE (eSIM i gniazdo nano SIM) oraz Wi-Fi 6E, a system to Android 15 z certyfikatem GMS. Zasięg odczytu UHF do 25 m, potrzebny przy wysokich regałach i w magazynach, daje współpraca z czytnikiem [Unitech RP300](/produkt/unitech-rp300). Producent objął terminal 12-miesięczną gwarancją.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- ${ZASILACZ_EU}

Do terminala dołączono baterię, przewód USB-C i skróconą instrukcję. Zasilacz kupuje się osobno.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: [],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/EA530_UHF',
  priceFrom: 2636.56,
  availability: 'available',
  images: [
    '/images/products/EA530-YALFTM3G.png',
    '/images/products/EA530-YALFTM3G-2.png',
    '/images/products/EA530-YALFTM3G-3.png',
  ],
  imageDescriptions: [
    'Unitech EA530 UHF — widok z przodu, ekran 6 cali HD+',
    'Unitech EA530 UHF — tył obudowy z aparatem, stykami pogo i baterią z pokrywą',
    'Unitech EA530 UHF — widok z przodu pod kątem, przyciski skanowania na bokach obudowy',
  ],
  tags: ['magazyn', 'logistyka', 'retail'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'System operacyjny', value: 'Android 15 (aktualizacja do Androida 17), certyfikat GMS' },
    { name: 'Procesor', value: '8 rdzeni, 2,2 GHz' },
    { name: 'Pamięć RAM / Flash', value: '6 GB RAM, 64 GB Flash; microSD do 1 TB' },
    { name: 'Wyświetlacz', value: '6″ HD+ (1440 × 720), 500 nitów; Corning Gorilla Glass; obsługa rysika, rękawic i mokrych palców' },
    { name: 'Skaner', value: 'Imager 2D, kody 1D i 2D, w tym DPM (10 mil)' },
    { name: 'UHF RFID', value: 'Układ Impinj E310, odczyt do 1,8 m; wersje na pasmo 865–868 MHz (EU) lub 902–928 MHz (US); aplikacja TagAccess' },
    { name: 'NFC / HF RFID', value: '13,56 MHz; ISO 14443 A/B, ISO 15693, MIFARE, FeliCa (ISO/IEC 18092)' },
    { name: 'Aparaty', value: 'Tylny 16 MP z autofokusem i lampą; przedni 8 MP' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6E (2,4 / 5 / 6 GHz), IEEE 802.11 a/b/g/n/ac/ax/d/e/h/i/k/r/u/w/v, DBS' },
    { name: 'Łączność', value: 'Bluetooth 5.2 BLE; 4G LTE FDD B1/2/3/4/5/7/8/12/17/19/20/28a&b/66, LTE TDD B38/39/40/41; eSIM i nano SIM' },
    { name: 'GNSS', value: 'GPS, BeiDou, GLONASS, Galileo, A-GPS' },
    { name: 'Złącza', value: 'USB 2.0 typ C z OTG; styki pogo z tyłu (uchwyt pistoletowy) i na dole (ładowanie w stacji)' },
    { name: 'Przyciski', value: '6: przycisk programowalny, dwa przyciski skanowania, głośność góra/dół, zasilanie' },
    { name: 'Audio', value: 'Głośnik 95 dB (10 cm), dwa mikrofony z redukcją szumów, Smart PA' },
    { name: 'Bateria', value: '4250 mAh Li-Polymer, bateria z pokrywą w jednej części; bez wymiany bez wyłączania (warm swap)' },
    { name: 'Klasa szczelności', value: 'IP65 i IP68' },
    { name: 'Odporność na upadki', value: 'Upadki z 1,5 m; 1,8 m w etui. Test bębnowy: 600 upadków z 0,5 m' },
    { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    { name: 'Temperatura przechowywania', value: '-30°C do +70°C (bez baterii)' },
    { name: 'Temperatura ładowania', value: '0°C do +45°C' },
    { name: 'Wymiary', value: '161 × 76,8 × 14,15 mm' },
    { name: 'Masa', value: '242 g ±1% z baterią' },
    { name: 'Zarządzanie urządzeniami', value: 'SOTI, VMware, MoboLink; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher, USS, KeyRemap, SDK' },
    { name: 'Zawartość zestawu', value: 'Terminal, bateria, przewód USB-C, skrócona instrukcja; zasilacz sprzedawany osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: [
    'Inwentaryzacja towarów ze znacznikami UHF',
    'Śledzenie majątku i wyposażenia',
    'Odczyt z wysokich regałów z czytnikiem RP300 (do 25 m)',
    'Serwis w terenie',
  ],
  variants: [
    {
      partNumber: 'EA530-YALFTM3G',
      name: 'EA530-YALFTM3G, UHF RFID, 4G LTE, Wi-Fi 6E',
      attributes: {},
      priceFrom: 2636.56,
      availability: 'available',
    },
  ],
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-ea-zasilacz-usb-c-eu',
    'unitech-ea530-uchwyt-pistoletowy',
    'unitech-ea530-etui',
    'unitech-ea-stacja-1-slot',
    'unitech-ea530-bateria',
    'unitech-ea-stacja-1-slot-usb',
    'unitech-ea-stacja-1-slot-ethernet',
    'unitech-ea-stacja-5-slot',
    'unitech-ea-stacja-5-slot-ethernet',
    'unitech-ea530-ladowarka-baterii',
    'unitech-ea-stacja-dokujaca',
    'unitech-ea530-szklo-ochronne',
    'unitech-ea-pasek-na-dlon',
    'unitech-rysik-5-5-mm',
    'unitech-ea-przewod-usb-c',
    'unitech-ea-uchwyt-samochodowy',
    'unitech-rp300',
    'unitech-rp300-adapter-ea530',
  ],
  relatedProducts: ['unitech-ea530', 'bluebird-s10-rfid', 'newland-mt93-megattera-pro-uhf', 'zebra-tc22r'],
  downloads: [EA530_UHF_DATASHEET, EA530_MANUAL, EA530_ACCESSORIES],
  faq: [
    {
      question: 'Jakie pasmo UHF ma Unitech EA530 UHF?',
      answer: 'Czytnik UHF w EA530 UHF występuje w wersjach na pasmo 865–868 MHz (EU) i 902–928 MHz (US). Przed zamówieniem prosimy o kontakt: potwierdzimy pasmo dla PN EA530-YALFTM3G.',
    },
    {
      question: 'Jaki zasięg odczytu ma wbudowany czytnik UHF?',
      answer: 'Czytnik z układem Impinj E310 odczytuje znaczniki z odległości do 1,8 m. Większy zasięg, do 25 m, uzyskuje się po dołączeniu czytnika [Unitech RP300](/produkt/unitech-rp300) przez [adapter do EA530](/produkt/unitech-rp300-adapter-ea530).',
    },
    {
      question: 'Co potrafi aplikacja TagAccess?',
      answer: 'TagAccess obsługuje inwentaryzację, odczyt i zapis, blokowanie (Lock), dezaktywację (Kill) i wyszukiwanie znacznika (Find). Data Wedge wpisuje odczytane dane jak z klawiatury. Aplikacja dopasowuje też GTIN do kodu odczytanego aparatem terminala.',
    },
    {
      question: 'Czy w EA530 UHF można wymienić baterię bez wyłączania terminala?',
      answer: 'Nie. Model UHF nie obsługuje wymiany baterii bez wyłączania (warm swap). Baterię 4250 mAh można wymienić, ale terminal trzeba wcześniej wyłączyć.',
    },
    {
      question: 'Czy dostępna jest wersja EA530 UHF tylko z Wi-Fi?',
      answer: 'W ofercie nie. Wersję UHF tylko z Wi-Fi Unitech sprzedaje wyłącznie w Japonii. Oferowany PN EA530-YALFTM3G ma 4G LTE, Wi-Fi 6E i UHF.',
    },
    {
      question: 'Czy EA530 UHF odczytuje także kody kreskowe i NFC?',
      answer: 'Tak. Imager 2D czyta kody 1D i 2D, w tym DPM (10 mil). Moduł HF/NFC na paśmie 13,56 MHz obsługuje karty MIFARE i FeliCa oraz normy ISO 14443 i ISO 15693. Kod kreskowy i znacznik UHF odczytuje się tym samym urządzeniem.',
    },
    {
      question: 'Z jakim uchwytem pistoletowym współpracuje EA530 UHF?',
      answer: 'Funkcje RFID działają ze standardowym uchwytem pistoletowym. Do EA530 UHF pasuje [uchwyt pistoletowy EA530](/produkt/unitech-ea530-uchwyt-pistoletowy), który łączy się z terminalem przez styki pogo na tylnej ściance.',
    },
    {
      question: 'Jakie są alternatywy dla terminala EA530 UHF?',
      answer: 'Terminal bez wbudowanego UHF i z wymianą baterii bez wyłączania to [Unitech EA530](/produkt/unitech-ea530). Inne terminale z UHF RFID są w kategorii [terminale RFID](/terminale-rfid).',
    },
  ],
  createdAt: '2026-10-29',
  updatedAt: '2026-10-29',
}

export const unitechTerminalProducts: Product[] = [ea660, ea530, ea530Uhf]
