import type { Product } from './products'

// Terminal dla służby zdrowia Honeywell CT37 HC i akcesoria HC (25.10.2026).
// Warianty i akcesoria tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Źródła: karta katalogowa CT37 HC Rev C 09/25, strona CT37 HC, CT37 Configuration Guide Rev B 11/24 (sekcje Healthcare),
// przewodnik akcesoriów CT37 / CT37 HC Rev B 10/24. Dokumentacja: docs/catalog/terminale-hc-2026-10-25/T1.md

const PLACEHOLDER = '/images/products/placeholder.svg'
const CT37_HC = ['honeywell-ct37-hc']

const CT37_HC_DATASHEET = { name: 'Karta katalogowa Honeywell CT37 HC (EN)', type: 'datasheet' as const, url: '/downloads/honeywell/honeywell-ct37-hc-karta-katalogowa-en.pdf', size: '157 KB' }
const CT37_CONFIG_GUIDE = { name: 'Przewodnik konfiguracji i akcesoriów CT37, z sekcją Healthcare (EN)', type: 'manual' as const, url: '/instrukcje/honeywell-ct37-konfiguracja-en.pdf', size: '15,3 MB' }
const CT37_HC_SAME_AS = 'https://automation.honeywell.com/gb/en/products/productivity-solutions/mobile-computers/healthcare-computers/ct37-hc-handheld-computer'

const ct37Hc: Product = {
  id: 'honeywell-ct37-hc',
  slug: 'honeywell-ct37-hc',
  name: 'Honeywell CT37 HC',
  seoH1: 'Honeywell CT37 HC',
  shortDescription: 'Honeywell CT37 HC — terminal mobilny 6" dla służby zdrowia: biała obudowa przygotowana do dezynfekcji, skaner N6700, Wi-Fi 6E lub 5G, wymiana baterii bez wyłączania.',
  seoTitle: 'Honeywell CT37 HC — terminal mobilny dla służby zdrowia',
  seoDescription: 'Honeywell CT37 HC: terminal dla szpitali z obudową przygotowaną do dezynfekcji, skanerem N6700 do opasek pacjentów, Wi-Fi 6E lub 5G i baterią hot swap. Terminal mobilny Honeywell CT37 HC, komputer mobilny dla służby zdrowia, CT37 HC Honeywell. PN: CT37-X0N-56S10HG, CT37-X1N-56S10HG.',
  description: `Honeywell CT37 HC to lekki terminal mobilny z ekranem 6 cali, przygotowany dla personelu placówek ochrony zdrowia. Obudowa jest biała z niebieskimi akcentami. Obudowa i złącza są przygotowane do dezynfekcji: znoszą częsty kontakt ze środkami czyszczącymi zalecanymi w służbie zdrowia. Producent zatwierdził do tej obudowy 46 środków.

Wersja HC ma skaner Honeywell N6700 siódmej generacji z diodowym celownikiem. Odczytuje kody 1D i 2D, między innymi na opaskach pacjentów i fiolkach. Konstrukcja skanera ma zmniejszać zmęczenie przy odczycie małych etykiet, którymi identyfikuje się pacjenta i potwierdza podawane leczenie.

Akumulator 3846 mAh wymienia się bez wyłączania terminala. Do rozmów w zespole służą przycisk Push to Talk, głośnik i trzy mikrofony z redukcją szumów. Układ Secure Element oddziela przetwarzanie wrażliwych danych od pozostałych aplikacji.

Oferta obejmuje CT37-X0N-56S10HG z Wi-Fi 6E oraz CT37-X1N-56S10HG z modemem 5G i Wi-Fi 6E. Obie konfiguracje mają pamięć operacyjną 8 GB i pamięć flash 128 GB. Platforma Mobility Edge przewiduje kolejne wersje systemu Android, od 14 do 18. W zestawie są bateria i zaślepka portu USB-C. Stacje Universal Dock, ładowarka baterii, klips i pasek mają osobne wersje HC.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: ['terminale-mobilne', 'terminale-dla-sluzby-zdrowia'],
  manufacturerId: 'honeywell',
  priceFrom: 5644.53,
  images: [
    '/images/products/CT37-X0N-56S10HG-3.png',
    '/images/products/CT37-X0N-56S10HG-2.png',
    '/images/products/CT37-X0N-56S10HG.png',
    '/images/products/CT37-X0N-56S10HG-4.png',
  ],
  imageDescriptions: [
    'Honeywell CT37 HC — dwa terminale w białej obudowie HC: tył z oknem skanera i przód z ekranem',
    'Honeywell CT37 HC — tył białej obudowy z oknem skanera N6700, aparatem i pokrywą baterii',
    'Honeywell CT37 HC — biały terminal dla służby zdrowia, widok z przodu pod kątem na ekran 6 cali i niebieski przycisk skanowania',
    'Honeywell CT37 HC — ujęcie z góry na okno skanera z niebieską ramką, przycisk zasilania i złącza na spodzie',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  variantAttributeTooltips: {
    'Łączność': 'Sposób, w jaki CT37 HC łączy się z siecią.\n\nWi-Fi 6E — trzy pasma 2,4 / 5 / 6 GHz, praca w zasięgu sieci placówki; tylko ta wersja przyjmuje biały klips HC.\n\n5G + Wi-Fi 6E — dodatkowo 5G i LTE z eSIM i nano SIM oraz odbiornik GNSS.',
  },
  variants: [
    {
      partNumber: 'CT37-X0N-56S10HG',
      name: 'CT37 HC Wi-Fi 6E, N6700, 8 / 128 GB',
      attributes: { 'Łączność': 'Wi-Fi 6E' },
      priceFrom: 5644.53,
      availability: 'available',
    },
    {
      partNumber: 'CT37-X1N-56S10HG',
      name: 'CT37 HC 5G + Wi-Fi 6E, N6700, 8 / 128 GB',
      attributes: { 'Łączność': '5G + Wi-Fi 6E' },
      priceFrom: 6008.64,
      availability: 'available',
    },
  ],
  specifications: [
    { name: 'Wersja', value: 'Healthcare (kod obudowy H) — obudowa przygotowana do dezynfekcji (Disinfectant Ready Housing), kolor biały z niebieskimi akcentami' },
    { name: 'System operacyjny', value: 'Android (GMS); Honeywell gwarantuje każdą wersję od Androida 14 do 18, o ile Qualcomm potwierdzi wykonalność techniczną' },
    { name: 'Platforma', value: 'Honeywell Mobility Edge' },
    { name: 'Procesor', value: 'Qualcomm QCS4490 lub QCM4490, 8 rdzeni, do 2,4 GHz' },
    { name: 'Pamięć', value: '8 GB DDR5 RAM, 128 GB UFS 3.1; microSD do 2 TB' },
    { name: 'Wyświetlacz', value: '6,0" (15,2 cm) Full HD 2280 × 1080, podświetlenie LED 600 nitów, szkło Gorilla Glass' },
    { name: 'Panel dotykowy', value: 'Pojemnościowy, wielodotykowy; tryby pracy w rękawiczkach, z rysikiem i w deszczu; odrzucanie kropel wody w trybie z folią ochronną' },
    { name: 'Skaner', value: 'Honeywell N6700, 1D/2D, standardowy zasięg (0–1 m), zielony liniowy celownik LED' },
    { name: 'Aparaty', value: 'Tylny 13 MP, przedni 8 MP' },
    { name: 'Przyciski', value: 'Głośność, skanowanie z lewej i prawej strony, zasilanie, Push to Talk' },
    { name: 'Audio', value: 'PTT, gotowość do VoIP, głośnik, zgodność HAC, trzy mikrofony z redukcją szumów' },
    { name: 'WLAN', value: 'Wi-Fi 6E (certyfikat Wi-Fi 6E), IEEE 802.11 a/b/g/n/ac/d/h/i/r/k/v/w/mc/ax, 2×2 MU-MIMO, pasma 2,4 / 5 / 6 GHz' },
    { name: 'Zabezpieczenia WLAN', value: 'OWE, WEP, WPA / WPA2 / WPA3 (Personal i Enterprise); EAP: TLS, PEAP, TTLS, PWD, LEAP' },
    { name: 'WWAN (CT37-X1N-56S10HG)', value: '5G NR FR1 (NSA i SA), LTE, UMTS/HSPA+, GSM 900/1800; Dual SIM / Dual Standby, VoLTE, sieci prywatne LTE i 5G' },
    { name: 'SIM (CT37-X1N-56S10HG)', value: '1 × eSIM i 1 × nano SIM' },
    { name: 'GNSS (CT37-X1N-56S10HG)', value: 'GPS, GLONASS, Galileo, BeiDou, QZSS, NavIC; dwa pasma L1 i L5, a-GPS' },
    { name: 'Bluetooth', value: '5.3 i BLE, drugie radio BLE' },
    { name: 'NFC', value: 'ISO/IEC 14443 A/B, ISO/IEC 15693, MIFARE 1K/4K, MIFARE DESFire, Sony FeliCa, ISO/IEC 18092; płatności zbliżeniowe, ECP 1.0 i 2.0' },
    { name: 'Złącza', value: 'USB-C (USB 3.1, OTG) i płaskie złącze I/O; zgodność z platformą Universal Dock' },
    { name: 'Bateria', value: 'Li-Ion 3846 mAh z diagnostyką; wymiana bez wyłączania terminala do −10°C, poniżej −10°C wymiana z podtrzymaniem (warm swap)' },
    { name: 'Ładowanie', value: 'Quick Charge 4.0; pełne ładowanie w czasie poniżej 3 h' },
    { name: 'Czas pracy', value: 'Ponad 12 h na baterii standardowej (zależnie od zastosowania)' },
    { name: 'Czujniki', value: 'Oświetlenia, zbliżeniowy, akcelerometr, żyroskop, magnetometr, eCompass, czujnik Halla; barometr w wybranych SKU' },
    { name: 'Bezpieczeństwo', value: 'Secure Element (SE)' },
    { name: 'Klasa szczelności', value: 'IP65 i IP68 (niezależna certyfikacja)' },
    { name: 'Upadki na beton (MIL-STD-810H)', value: 'Temperatura pokojowa: 1,8 m, w osłonie 2,1 m; od −10°C do 50°C: 1,5 m, w osłonie 1,8 m; −20°C: 1,2 m, w osłonie 1,5 m' },
    { name: 'Przewroty (IEC 60068-2-32)', value: '1500 × 0,5 m bez osłony; 750 × 1,0 m w osłonie' },
    { name: 'ESD', value: '±15 kV w powietrzu, ±8 kV stykowo' },
    { name: 'Temperatura', value: 'Praca: od −20°C do 50°C; przechowywanie: od −30°C do 70°C; wilgotność 5–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '167,4 × 76,0 × 12,6 mm; 241 g z baterią' },
    { name: 'W zestawie', value: 'Terminal, bateria CT37-BTSC-002, zaślepka USB-C' },
    { name: 'Sprzedawane osobno', value: 'Przewód USB-C, pasek na rękę, rysik' },
    { name: 'Oprogramowanie', value: 'Honeywell Mobility Edge Utilities; Device Client Pack z licencją na rok; współpraca z Operational Intelligence, Smart Talk i Smart Pay' },
    { name: 'Gwarancja', value: '12 miesięcy (gwarancja fabryczna)' },
  ],
  applications: [
    'Identyfikacja pacjenta po kodzie na opasce',
    'Potwierdzanie leków i terapii przy łóżku pacjenta',
    'Odczyt kodów na fiolkach i małych etykietach',
    'Komunikacja głosowa personelu (PTT, VoIP)',
  ],
  compatibleAccessories: [],
  relatedAccessories: [
    'honeywell-ct37-5cb-uvn-hc0',
    'honeywell-ct37-qbc-hc0',
    'honeywell-ct37-db-uvn-hc0',
    'honeywell-ct37-btsc-002',
    'honeywell-ct37-hs-hc-3pk',
    'honeywell-ct37-5cb-uvb-hc0',
    'honeywell-ct37-clip-lan-hc',
    'honeywell-ct37-usbc-plug-5pk',
    'honeywell-ct37-pb-gry',
    'honeywell-ct37-sp-1pk',
    'honeywell-ct37-ucp-nhc',
    'honeywell-ct30p-ucp-bhc',
    'honeywell-3007-4683-001',
    'honeywell-ih45-cord-eu',
  ],
  faq: [
    {
      question: 'Czym Honeywell CT37 HC różni się od zwykłego CT37?',
      answer: 'Każda konfiguracja CT37 ma obudowę przygotowaną do dezynfekcji. Wersja HC ma skaner N6700, a [Honeywell CT37](/produkt/honeywell-ct37) ma skaner S0703, FlexRange S0803 albo nie ma skanera. CT37 HC jest biały z niebieskimi akcentami; biały CT37 do handlu ma akcenty szare. Z wersją HC dostarczana jest zaślepka USB-C, a pasek na rękę trzeba zamówić osobno. Uchwyt skanujący CT37-SH-UVN i CT37-SH-UVB nie pasuje do modelu HC. Pasek, klips, baterię, kubki i stacje Honeywell oferuje w osobnych wersjach HC.',
    },
    {
      question: 'Jak dezynfekować obudowę CT37 HC?',
      answer: 'Obudowę i złącza zaprojektowano do częstego kontaktu z zatwierdzonymi środkami czyszczącymi stosowanymi w ochronie zdrowia. Honeywell zatwierdził 46 takich środków i publikuje ich wykaz w przewodniku czyszczenia obudów Disinfectant Ready Housing. Szara osłona CT37-PB-GRY nie jest przygotowana do dezynfekcji. Do modelu HC producent zaleca zaślepkę portu USB-C CT37-USBC-PLUG-5PK.',
    },
    {
      question: 'Którą konfigurację CT37 HC wybrać: Wi-Fi czy 5G?',
      answer: 'CT37-X0N-56S10HG łączy się tylko przez Wi-Fi 6E i wystarcza w budynku z siecią bezprzewodową. CT37-X1N-56S10HG ma także modem 5G i LTE, miejsce na eSIM i nano SIM oraz odbiornik GNSS. Biały klips CT37-CLIP-LAN-HC pasuje wyłącznie do wersji z samym Wi-Fi.',
    },
    {
      question: 'Jakie stacje ładujące pasują do CT37 HC?',
      answer: 'Stacja 5-gniazdowa ładuje cztery terminale i cztery baterie: [CT37-5CB-UVN-HC0](/produkt/honeywell-ct37-5cb-uvn-hc0) przyjmuje terminal bez osłony, a [CT37-5CB-UVB-HC0](/produkt/honeywell-ct37-5cb-uvb-hc0) terminal w osłonie CT37-PB-GRY. [CT37-DB-UVN-HC0](/produkt/honeywell-ct37-db-uvn-hc0) ładuje jeden terminal i ma wyjście HDMI, Ethernet oraz porty USB. Same baterie ładuje [CT37-QBC-HC0](/produkt/honeywell-ct37-qbc-hc0). Zasilacz jest w każdym zestawie. Stacje 5-gniazdowe wymagają przewodu sieciowego ze złączem C5, pozostałe ze złączem C13.',
    },
    {
      question: 'Czy CT37 HC współpracuje z uchwytem RFID lub zestawem na przedramię?',
      answer: 'Adapter czytnika RFID IH45-BK-37S i zestaw wearable CT37-WS-KIT Honeywell przypisuje do zwykłego CT37, a nie do wersji HC. Uchwytu skanującego CT37-SH nie można używać z CT37 HC. Do noszenia terminala HC służą pasek na rękę CT37-HS-HC-3PK i, w wersji Wi-Fi, klips CT37-CLIP-LAN-HC.',
    },
    {
      question: 'Jak długo CT37 HC otrzyma aktualizacje i jaka jest gwarancja?',
      answer: 'Honeywell gwarantuje każdą wersję Androida od 14 do 18, z zastrzeżeniem potwierdzenia wykonalności technicznej przez Qualcomm. Gwarancja fabryczna obejmuje 12 miesięcy. Honeywell oferuje też trzyletnie kontrakty serwisowe Edge Services.',
    },
    {
      question: 'Jakie inne terminale dla służby zdrowia są w ofercie?',
      answer: 'Inne terminale dotykowe dla placówek medycznych to [Zebra HC50](/produkt/zebra-hc50) z Wi-Fi i [Zebra HC55](/produkt/zebra-hc55) z 5G, [Datalogic Memor 17 HC](/produkt/datalogic-memor-17-hc) oraz [CipherLab RS38H](/produkt/cipherlab-rs38h).',
    },
  ],
  downloads: [CT37_HC_DATASHEET, CT37_CONFIG_GUIDE],
  relatedProducts: ['zebra-hc50', 'zebra-hc55', 'datalogic-memor-17-hc', 'cipherlab-rs38h'],
  createdAt: '2026-10-25',
  sameAs: CT37_HC_SAME_AS,
}

// ---- Akcesoria HC (PN z ceną w /api/stock, 25.10.2026) ----

const CORD_C5_REQUIRED = `**Wymagane — sprzedawane osobno**

- [Przewód sieciowy EU Honeywell ze złączem C5 (3007-4683-001)](/produkt/honeywell-3007-4683-001)

`
const CORD_C13_REQUIRED = `**Wymagane — sprzedawane osobno**

- [Przewód sieciowy EU Honeywell IH45 / CT40 (77900508E)](/produkt/honeywell-ih45-cord-eu)

`

const fiveBayNonBooted: Product = {
  id: 'honeywell-ct37-5cb-uvn-hc0',
  slug: 'honeywell-ct37-5cb-uvn-hc0',
  name: 'Stacja 5-gniazdowa Honeywell CT37 HC bez osłony (CT37-5CB-UVN-HC0)',
  shortDescription: 'Honeywell CT37-5CB-UVN-HC0 — stacja Universal Dock w wersji HC: ładuje 4 terminale CT37 HC bez osłony i 4 baterie.',
  seoTitle: 'Stacja Honeywell CT37-5CB-UVN-HC0 do CT37 HC',
  seoDescription: 'Stacja ładująca Honeywell CT37-5CB-UVN-HC0 w wersji Healthcare: 4 gniazda na terminale CT37 HC lub CT30 XP bez osłony i ładowarka 4 baterii, zasilacz w zestawie. PN: CT37-5CB-UVN-HC0.',
  description: `Stacja CT37-5CB-UVN-HC0 jest wersją HC 5-gniazdowej podstawy Universal Dock. Ładuje jednocześnie cztery terminale [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) bez osłony i cztery baterie w piątym gnieździe. Pasuje także do terminali CT30 XP.

W zestawie są podstawa, cztery kubki CT37-UCP-NHC, kubek na baterie CT37-QBC-UCP-HC i zasilacz. Baterie nie są dołączone. Stacja nie przyjmuje terminala w osłonie CT37-PB-GRY.

## Co jest potrzebne do użycia?

${CORD_C5_REQUIRED}Przewód łączy zasilacz stacji z gniazdem sieciowym.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 2120.03,
  images: ['/images/products/CT37-5CB-UVN-HC0.png'],
  imageDescriptions: ['Stacja Honeywell w wersji HC: ładowarka czterech baterii i cztery gniazda Universal Dock na terminale'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-5CB-UVN-HC0' },
    { name: 'Typ', value: 'Stacja ładująca Universal Dock, 4 terminale + 4 baterie, tylko ładowanie' },
    { name: 'Terminale', value: 'Honeywell CT37 HC i CT30 XP bez osłony' },
    { name: 'W zestawie', value: '4 kubki CT37-UCP-NHC, kubek na baterie CT37-QBC-UCP-HC, zasilacz' },
    { name: 'Przewód sieciowy', value: 'Złącze C5, sprzedawany osobno (EU: 3007-4683-001)' },
  ],
  applications: ['Ładowanie terminali i zapasowych baterii na oddziale'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-3007-4683-001', 'honeywell-ct37-btsc-002', 'honeywell-ct37-ucp-nhc'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const fiveBayBooted: Product = {
  id: 'honeywell-ct37-5cb-uvb-hc0',
  slug: 'honeywell-ct37-5cb-uvb-hc0',
  name: 'Stacja 5-gniazdowa Honeywell CT37 HC do terminali w osłonie (CT37-5CB-UVB-HC0)',
  shortDescription: 'Honeywell CT37-5CB-UVB-HC0 — stacja HC na 4 terminale CT37 HC w osłonie CT37-PB-GRY i 4 baterie.',
  seoTitle: 'Stacja Honeywell CT37-5CB-UVB-HC0 do CT37 HC w osłonie',
  seoDescription: 'Honeywell CT37-5CB-UVB-HC0: stacja Universal Dock w wersji Healthcare do czterech terminali CT37 HC w osłonie i czterech baterii; zasilacz w zestawie, przewód C5 osobno. PN: CT37-5CB-UVB-HC0.',
  description: `CT37-5CB-UVB-HC0 to podstawa Universal Dock w wersji HC do terminali [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) założonych w szarą osłonę [CT37-PB-GRY](/produkt/honeywell-ct37-pb-gry). Ma cztery gniazda na terminale i gniazdo ładujące cztery baterie. Pasuje także do CT30 XP w osłonie.

Zestaw zawiera podstawę, cztery kubki CT30P-UCP-BHC, moduł do baterii CT37-QBC-UCP-HC oraz zasilacz. Baterii w zestawie nie ma.

## Co jest potrzebne do użycia?

${CORD_C5_REQUIRED}Do terminali bez osłony służy stacja [CT37-5CB-UVN-HC0](/produkt/honeywell-ct37-5cb-uvn-hc0).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 2120.03,
  images: ['/images/products/CT37-5CB-UVN-HC0.png'],
  imageDescriptions: ['Stacja 5-gniazdowa Honeywell w wersji HC z ładowarką baterii (zdjęcie poglądowe; wersja UVB ma kubki do terminali w osłonie)'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-5CB-UVB-HC0' },
    { name: 'Typ', value: 'Stacja ładująca Universal Dock, 4 terminale w osłonie + 4 baterie' },
    { name: 'Terminale', value: 'Honeywell CT37 HC i CT30 XP w osłonie' },
    { name: 'W zestawie', value: '4 kubki CT30P-UCP-BHC, kubek na baterie CT37-QBC-UCP-HC, zasilacz' },
    { name: 'Przewód sieciowy', value: 'Złącze C5, sprzedawany osobno (EU: 3007-4683-001)' },
  ],
  applications: ['Ładowanie terminali używanych w osłonie'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-3007-4683-001', 'honeywell-ct37-pb-gry', 'honeywell-ct30p-ucp-bhc'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const displayBase: Product = {
  id: 'honeywell-ct37-db-uvn-hc0',
  slug: 'honeywell-ct37-db-uvn-hc0',
  name: 'Stacja z wyjściem HDMI Honeywell CT37 HC (CT37-DB-UVN-HC0)',
  shortDescription: 'Honeywell CT37-DB-UVN-HC0 — stacja Display Base w wersji HC: ładowanie CT37 HC, HDMI, Ethernet i 3 porty USB.',
  seoTitle: 'Stacja Display Base Honeywell CT37-DB-UVN-HC0 do CT37 HC',
  seoDescription: 'Honeywell CT37-DB-UVN-HC0 Healthcare Display Dock: ładuje jeden terminal CT37 HC bez osłony, podłącza monitor HDMI, sieć Ethernet oraz klawiaturę i mysz USB. PN: CT37-DB-UVN-HC0.',
  description: `CT37-DB-UVN-HC0 to stacja Display Base w wersji HC na jeden terminal [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) bez osłony. Ładuje terminal i rozszerza jego złącza: z tyłu ma HDMI, Ethernet, port USB-A i gniazdo zasilania, z boku dwa porty USB-A.

Do stacji można podłączyć monitor, klawiaturę i mysz. Obsługuje tryby Primary i Mirror. Tryb Desktop wymaga dodatkowej licencji Device Client Pack. W zestawie są stacja, kubek CT37-UCP-NHC i zasilacz.

## Co jest potrzebne do użycia?

${CORD_C13_REQUIRED}Przewód ze złączem C13 podłącza zasilacz do sieci.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 1318.58,
  images: ['/images/products/CT37-DB-UVN-HC0.png'],
  imageDescriptions: ['Stacja Display Base Honeywell w wersji HC — biała podstawa z niebieskim paskiem i gniazdem Universal Dock'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-DB-UVN-HC0' },
    { name: 'Typ', value: 'Stacja Display Base: ładowanie jednego terminala, wyjście na monitor' },
    { name: 'Złącza', value: 'HDMI, Ethernet, 3 × USB-A' },
    { name: 'Terminale', value: 'Honeywell CT37 HC i CT30 XP bez osłony' },
    { name: 'W zestawie', value: 'Stacja, kubek CT37-UCP-NHC, zasilacz' },
    { name: 'Przewód sieciowy', value: 'Złącze C13, sprzedawany osobno (EU: 77900508E)' },
  ],
  applications: ['Praca na monitorze z klawiaturą i myszą', 'Ładowanie terminala na stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ih45-cord-eu', 'honeywell-ct37-ucp-nhc'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const quadBatteryCharger: Product = {
  id: 'honeywell-ct37-qbc-hc0',
  slug: 'honeywell-ct37-qbc-hc0',
  name: 'Ładowarka 4 baterii Honeywell CT37 HC (CT37-QBC-HC0)',
  shortDescription: 'Honeywell CT37-QBC-HC0 — ładowarka czterech baterii (Healthcare); ładuje baterie CT37 HC, CT37 oraz CT30 XP.',
  seoTitle: 'Ładowarka baterii Honeywell CT37-QBC-HC0 do CT37 HC',
  seoDescription: 'Honeywell CT37-QBC-HC0: ładowarka 4 baterii w wersji Healthcare, do baterii CT37 standardowych i rozszerzonych oraz CT30 XP; zasilacz w zestawie. PN: CT37-QBC-HC0.',
  description: `CT37-QBC-HC0 ładuje jednocześnie do czterech baterii. Obsługuje baterię [CT37-BTSC-002](/produkt/honeywell-ct37-btsc-002) terminala [Honeywell CT37 HC](/produkt/honeywell-ct37-hc), baterie CT37-BTSC-001 i CT37-BTEC-001 oraz baterie CT30 XP.

Zestaw zawiera ładowarkę i zasilacz. Baterie są sprzedawane osobno.

## Co jest potrzebne do użycia?

${CORD_C13_REQUIRED}Przewód ze złączem C13 podłącza zasilacz ładowarki do sieci.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 1173.17,
  images: ['/images/products/CT37-QBC-HC0.png'],
  imageDescriptions: ['Ładowarka czterech baterii Honeywell w wersji HC z włożoną białą baterią'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-QBC-HC0' },
    { name: 'Typ', value: 'Ładowarka baterii, 4 gniazda' },
    { name: 'Baterie', value: 'CT37-BTSC-002, CT37-BTSC-001, CT37-BTEC-001, CT30P-BTSC-001, CT30P-BTSC-002' },
    { name: 'W zestawie', value: 'Ładowarka i zasilacz' },
    { name: 'Przewód sieciowy', value: 'Złącze C13, sprzedawany osobno (EU: 77900508E)' },
  ],
  applications: ['Ładowanie zapasowych baterii między zmianami'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ih45-cord-eu', 'honeywell-ct37-btsc-002'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const battery: Product = {
  id: 'honeywell-ct37-btsc-002',
  slug: 'honeywell-ct37-btsc-002',
  name: 'Bateria 3846 mAh Honeywell CT37 HC (CT37-BTSC-002)',
  shortDescription: 'Honeywell CT37-BTSC-002 — standardowa bateria 3846 mAh do CT37 HC i białego CT37.',
  seoTitle: 'Bateria Honeywell CT37-BTSC-002 3846 mAh do CT37 HC',
  seoDescription: 'Bateria Honeywell CT37-BTSC-002 Healthcare: 3846 mAh, do terminali CT37 w konfiguracjach z kodem H (CT37 HC) i W (biały CT37). PN: CT37-BTSC-002.',
  description: `CT37-BTSC-002 to standardowa bateria 3846 mAh w wersji Healthcare. Pasuje do [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) oraz do białego CT37, czyli konfiguracji z literą H lub W na przedostatnim miejscu PN. Jedna bateria jest w zestawie z terminalem HC.

Opakowanie zawiera jedną baterię. Do konfiguracji z literą D służą baterie CT37-BTSC-001 i CT37-BTEC-001. Zapasowe baterie można ładować w [ładowarce CT37-QBC-HC0](/produkt/honeywell-ct37-qbc-hc0).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 285.36,
  images: [PLACEHOLDER],
  imageDescriptions: ['Bateria Honeywell CT37-BTSC-002 3846 mAh do CT37 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-BTSC-002' },
    { name: 'Typ', value: 'Bateria standardowa Li-Ion, 3846 mAh' },
    { name: 'Zgodność', value: 'Honeywell CT37 w konfiguracjach CT37-xxx-xxxxxHx i CT37-xxx-xxxxxWx' },
    { name: 'W opakowaniu', value: '1 szt.' },
  ],
  applications: ['Bateria zapasowa do pracy wielozmianowej'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ct37-qbc-hc0', 'honeywell-ct37-5cb-uvn-hc0'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: [...CT37_HC, 'honeywell-ct37'],
  createdAt: '2026-10-25',
}

const handStrap: Product = {
  id: 'honeywell-ct37-hs-hc-3pk',
  slug: 'honeywell-ct37-hs-hc-3pk',
  name: 'Pasek na rękę Honeywell CT37 HC, 3 szt. (CT37-HS-HC-3PK)',
  shortDescription: 'Honeywell CT37-HS-HC-3PK — szary pasek na rękę dla terminala CT37 HC, trzy sztuki w opakowaniu.',
  seoTitle: 'Pasek na rękę Honeywell CT37-HS-HC-3PK do CT37 HC',
  seoDescription: 'Szary pasek na rękę Honeywell CT37-HS-HC-3PK do terminala CT37 HC; trzy paski w opakowaniu. Czarny pasek CT37-HS-3PK nie pasuje do wersji HC. PN: CT37-HS-HC-3PK.',
  description: `CT37-HS-HC-3PK to szary pasek na rękę do [Honeywell CT37 HC](/produkt/honeywell-ct37-hc). Opakowanie zawiera trzy paski. Pasek nie jest dołączany do terminala HC.

Czarny pasek CT37-HS-3PK nie współpracuje z wersją HC. Paska nie można używać razem z klipsem CT37-CLIP-LAN-HC.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 196.76,
  images: [PLACEHOLDER],
  imageDescriptions: ['Szary pasek na rękę Honeywell CT37-HS-HC-3PK do CT37 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-HS-HC-3PK' },
    { name: 'Typ', value: 'Pasek na rękę, kolor szary' },
    { name: 'Zgodność', value: 'Honeywell CT37 HC' },
    { name: 'W opakowaniu', value: '3 szt.' },
  ],
  applications: ['Pewny chwyt terminala przy skanowaniu'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const carryClip: Product = {
  id: 'honeywell-ct37-clip-lan-hc',
  slug: 'honeywell-ct37-clip-lan-hc',
  name: 'Klips biały Honeywell CT37 HC Wi-Fi (CT37-CLIP-LAN-HC)',
  shortDescription: 'Honeywell CT37-CLIP-LAN-HC — biały klips do noszenia CT37 HC w wersji z samym Wi-Fi.',
  seoTitle: 'Klips Honeywell CT37-CLIP-LAN-HC do CT37 HC Wi-Fi',
  seoDescription: 'Biały klips Honeywell CT37-CLIP-LAN-HC Healthcare do CT37 HC w konfiguracji WLAN (CT37-X0N-56S10HG). Nie pasuje do wersji 5G. PN: CT37-CLIP-LAN-HC.',
  description: `CT37-CLIP-LAN-HC to biały klips do noszenia terminala [Honeywell CT37 HC](/produkt/honeywell-ct37-hc). Zatrzaskuje się na terminalu. W zestawie jest jeden klips.

Klips pasuje tylko do konfiguracji z samym Wi-Fi, czyli CT37-X0N-56S10HG; pasuje też do białego CT37 Wi-Fi. Nie pasuje do wersji 5G CT37-X1N-56S10HG. Nie współpracuje z osłoną CT37-PB-GRY ani z paskiem na rękę.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 24.98,
  images: [PLACEHOLDER],
  imageDescriptions: ['Biały klips Honeywell CT37-CLIP-LAN-HC do CT37 HC w wersji Wi-Fi'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-CLIP-LAN-HC' },
    { name: 'Typ', value: 'Klips do noszenia, kolor biały' },
    { name: 'Zgodność', value: 'CT37 w konfiguracji WLAN: CT37-X0N-xxxxxHx i CT37-X0N-xxxxxWx' },
    { name: 'Ograniczenia', value: 'Nie pasuje do wersji WWAN (5G), osłony CT37-PB-GRY ani paska na rękę' },
    { name: 'W zestawie', value: '1 szt.' },
  ],
  applications: ['Noszenie terminala przy odzieży'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const usbPlug: Product = {
  id: 'honeywell-ct37-usbc-plug-5pk',
  slug: 'honeywell-ct37-usbc-plug-5pk',
  name: 'Zaślepka USB-C Honeywell CT37 HC, 5 szt. (CT37-USBC-PLUG-5PK)',
  shortDescription: 'Honeywell CT37-USBC-PLUG-5PK — zaślepki portu USB-C w wersji Healthcare do CT37 HC, 5 szt.',
  seoTitle: 'Zaślepka USB-C Honeywell CT37-USBC-PLUG-5PK do CT37 HC',
  seoDescription: 'Zaślepka portu USB-C Honeywell CT37-USBC-PLUG-5PK Healthcare, zalecana do terminali CT37 HC; pięć sztuk w opakowaniu. PN: CT37-USBC-PLUG-5PK.',
  description: `CT37-USBC-PLUG-5PK to zestaw pięciu zaślepek portu USB-C. Honeywell zaleca je do konfiguracji CT37 z literą H, czyli do [Honeywell CT37 HC](/produkt/honeywell-ct37-hc).

Terminal HC ma w komplecie jedną zaślepkę, a to opakowanie służy jako zapas.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 24.1,
  images: [PLACEHOLDER],
  imageDescriptions: ['Zaślepki portu USB-C Honeywell CT37-USBC-PLUG-5PK do CT37 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-USBC-PLUG-5PK' },
    { name: 'Typ', value: 'Zaślepka portu USB-C' },
    { name: 'Zgodność', value: 'Zalecana do CT37-xxx-xxxxxHx (CT37 HC)' },
    { name: 'W opakowaniu', value: '5 szt.' },
  ],
  applications: ['Zapasowe zaślepki portu USB-C'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const greyBoot: Product = {
  id: 'honeywell-ct37-pb-gry',
  slug: 'honeywell-ct37-pb-gry',
  name: 'Osłona szara Honeywell CT37 (CT37-PB-GRY)',
  shortDescription: 'Honeywell CT37-PB-GRY — szara osłona ochronna do białego CT37 i CT37 HC, zgodna ze stacjami do terminali w osłonie.',
  seoTitle: 'Osłona Honeywell CT37-PB-GRY do CT37 HC i białego CT37',
  seoDescription: 'Szara osłona ochronna Honeywell CT37-PB-GRY, zalecana do CT37 HC i białego CT37, współpracuje ze stacjami dla urządzeń w osłonie (UVB). Osłona nie jest przygotowana do dezynfekcji. PN: CT37-PB-GRY.',
  description: `CT37-PB-GRY to szara osłona ochronna zalecana do [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) i do białego CT37. W osłonie terminal wytrzymuje upadki z większej wysokości: 2,1 m zamiast 1,8 m w temperaturze pokojowej.

Osłona nie jest przygotowana do dezynfekcji. Terminal w osłonie ładuje się w stacjach dla urządzeń w osłonie, np. [CT37-5CB-UVB-HC0](/produkt/honeywell-ct37-5cb-uvb-hc0). Osłona nie pasuje do CT30 XP i nie współpracuje z klipsem CT37-CLIP-LAN-HC.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 33.47,
  images: [PLACEHOLDER],
  imageDescriptions: ['Szara osłona ochronna Honeywell CT37-PB-GRY do CT37 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-PB-GRY' },
    { name: 'Typ', value: 'Osłona ochronna, kolor szary' },
    { name: 'Zalecana do', value: 'CT37-xxx-xxxxxHx (CT37 HC) i CT37-xxx-xxxxxWx (biały CT37)' },
    { name: 'Stacje', value: 'Universal Dock dla terminali w osłonie (CT30P-xx-UVB, CT37-xx-UVB)' },
    { name: 'Uwagi', value: 'Nie jest przygotowana do dezynfekcji; nie pasuje do CT30 XP' },
  ],
  applications: ['Dodatkowa ochrona terminala przed upadkami'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ct37-5cb-uvb-hc0', 'honeywell-ct30p-ucp-bhc'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: [...CT37_HC, 'honeywell-ct37'],
  createdAt: '2026-10-25',
}

const screenProtector: Product = {
  id: 'honeywell-ct37-sp-1pk',
  slug: 'honeywell-ct37-sp-1pk',
  name: 'Ochrona ekranu Honeywell CT37 (CT37-SP-1PK)',
  shortDescription: 'Honeywell CT37-SP-1PK — ochrona ekranu do CT37 i CT37 HC, działa z rysikiem.',
  seoTitle: 'Ochrona ekranu Honeywell CT37-SP-1PK do CT37 i CT37 HC',
  seoDescription: 'Ochrona ekranu Honeywell CT37-SP-1PK do terminali CT37 i CT37 HC; ekran z ochroną obsługuje rysik. Jedna sztuka w opakowaniu. PN: CT37-SP-1PK.',
  description: `CT37-SP-1PK chroni ekran 6 cali terminala [Honeywell CT37 HC](/produkt/honeywell-ct37-hc). Pasuje również do zwykłego CT37. Z założoną ochroną można używać rysika.

W opakowaniu jest jedna sztuka. W trybie pracy z ochroną ekranu panel dotykowy CT37 HC odrzuca krople wody.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 46.38,
  images: [PLACEHOLDER],
  imageDescriptions: ['Ochrona ekranu Honeywell CT37-SP-1PK do CT37 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-SP-1PK' },
    { name: 'Typ', value: 'Ochrona ekranu' },
    { name: 'Zgodność', value: 'Honeywell CT37 i CT37 HC' },
    { name: 'W opakowaniu', value: '1 szt.' },
  ],
  applications: ['Ochrona ekranu przed zarysowaniem'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: [...CT37_HC, 'honeywell-ct37'],
  createdAt: '2026-10-25',
}

const cupNonBooted: Product = {
  id: 'honeywell-ct37-ucp-nhc',
  slug: 'honeywell-ct37-ucp-nhc',
  name: 'Kubek Universal Dock Honeywell CT37 HC bez osłony (CT37-UCP-NHC)',
  shortDescription: 'Honeywell CT37-UCP-NHC — kubek Universal Dock w wersji HC do terminali CT37 HC i CT30 XP bez osłony.',
  seoTitle: 'Kubek Universal Dock Honeywell CT37-UCP-NHC do CT37 HC',
  seoDescription: 'Kubek Honeywell CT37-UCP-NHC Healthcare do stacji Universal Dock, dla terminali CT37 HC i CT30 XP bez osłony. Stacja i zasilacz sprzedawane osobno. PN: CT37-UCP-NHC.',
  description: `CT37-UCP-NHC to gniazdo (kubek) w wersji HC do stacji Universal Dock. Przyjmuje terminal [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) albo CT30 XP bez osłony.

Cztery takie kubki są w zestawie stacji [CT37-5CB-UVN-HC0](/produkt/honeywell-ct37-5cb-uvn-hc0), a jeden w stacji [CT37-DB-UVN-HC0](/produkt/honeywell-ct37-db-uvn-hc0). Stację, zasilacz i przewody zamawia się osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 115.65,
  images: [PLACEHOLDER],
  imageDescriptions: ['Kubek Universal Dock Honeywell CT37-UCP-NHC w wersji HC do terminala bez osłony'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT37-UCP-NHC' },
    { name: 'Typ', value: 'Kubek (gniazdo) stacji Universal Dock, wersja HC' },
    { name: 'Terminale', value: 'Honeywell CT37 HC i CT30 XP bez osłony' },
  ],
  applications: ['Wymiana gniazda w stacji Universal Dock'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ct37-5cb-uvn-hc0', 'honeywell-ct37-db-uvn-hc0'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const cupBooted: Product = {
  id: 'honeywell-ct30p-ucp-bhc',
  slug: 'honeywell-ct30p-ucp-bhc',
  name: 'Kubek Universal Dock Honeywell CT37 HC w osłonie (CT30P-UCP-BHC)',
  shortDescription: 'Honeywell CT30P-UCP-BHC — gniazdo stacji Universal Dock (Healthcare) na terminal CT37 HC lub CT30 XP założony w osłonę.',
  seoTitle: 'Kubek Universal Dock Honeywell CT30P-UCP-BHC do CT37 HC',
  seoDescription: 'Honeywell CT30P-UCP-BHC: gniazdo Healthcare stacji Universal Dock na terminal CT37 HC lub CT30 XP założony w osłonę CT37-PB-GRY. PN: CT30P-UCP-BHC.',
  description: `CT30P-UCP-BHC to kubek stacji Universal Dock w wersji HC dla terminali w osłonie. Przyjmuje [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) w osłonie [CT37-PB-GRY](/produkt/honeywell-ct37-pb-gry) oraz CT30 XP w osłonie.

Stacja [CT37-5CB-UVB-HC0](/produkt/honeywell-ct37-5cb-uvb-hc0) ma w zestawie cztery takie kubki. Kubek nie zawiera stacji, zasilacza ani przewodów.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 121.45,
  images: [PLACEHOLDER],
  imageDescriptions: ['Kubek Universal Dock Honeywell CT30P-UCP-BHC w wersji HC do terminala w osłonie'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CT30P-UCP-BHC' },
    { name: 'Typ', value: 'Kubek (gniazdo) stacji Universal Dock, wersja HC' },
    { name: 'Terminale', value: 'Honeywell CT37 HC w osłonie CT37-PB-GRY, CT30 XP w osłonie' },
  ],
  applications: ['Wymiana gniazda w stacji dla terminali w osłonie'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ct37-5cb-uvb-hc0', 'honeywell-ct37-pb-gry'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

const cordC5: Product = {
  id: 'honeywell-3007-4683-001',
  slug: 'honeywell-3007-4683-001',
  name: 'Przewód sieciowy EU Honeywell ze złączem C5 (3007-4683-001)',
  shortDescription: 'Honeywell 3007-4683-001 — europejski przewód sieciowy ze złączem C5 do zasilacza 5-gniazdowych stacji CT37 i CT37 HC.',
  seoTitle: 'Przewód sieciowy EU C5 Honeywell 3007-4683-001',
  seoDescription: 'Przewód zasilający Honeywell 3007-4683-001 z wtykiem europejskim i złączem C5, do zasilacza 5-gniazdowych stacji Universal Dock CT37 HC (CT37-5CB-UVN-HC0, CT37-5CB-UVB-HC0). PN: 3007-4683-001.',
  description: `Przewód 3007-4683-001 ma wtyk europejski i złącze C5. Podłącza do sieci zasilacz 5-gniazdowych stacji CT37, w tym stacji HC [CT37-5CB-UVN-HC0](/produkt/honeywell-ct37-5cb-uvn-hc0) i [CT37-5CB-UVB-HC0](/produkt/honeywell-ct37-5cb-uvb-hc0) do [Honeywell CT37 HC](/produkt/honeywell-ct37-hc).

Stacje mają zasilacz w zestawie, ale przewodu sieciowego nie. Stacja Display Base i ładowarka baterii wymagają innego przewodu, ze złączem C13.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'honeywell',
  priceFrom: 49.85,
  images: [PLACEHOLDER],
  imageDescriptions: ['Przewód sieciowy EU Honeywell 3007-4683-001 ze złączem C5'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '3007-4683-001' },
    { name: 'Typ', value: 'Przewód sieciowy, wtyk EU, złącze C5' },
    { name: 'Zgodność', value: 'Zasilacz 5-gniazdowych stacji CT37 (CT37-5CB-UVN-HC0, CT37-5CB-UVB-HC0)' },
  ],
  applications: ['Podłączenie zasilacza stacji 5-gniazdowej do sieci'],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-ct37-5cb-uvn-hc0', 'honeywell-ct37-5cb-uvb-hc0'],
  downloads: [CT37_CONFIG_GUIDE],
  relatedProducts: CT37_HC,
  createdAt: '2026-10-25',
}

// Terminal i akcesoria w jednej liście: integracja w products.ts dołącza ją do katalogu
// i rozdziela do podkategorii według `subcategoryIds`.
export const honeywellHcTerminals: Product[] = [
  ct37Hc,
  fiveBayNonBooted,
  fiveBayBooted,
  displayBase,
  quadBatteryCharger,
  battery,
  handStrap,
  carryClip,
  usbPlug,
  greyBoot,
  screenProtector,
  cupNonBooted,
  cupBooted,
  cordC5,
]
