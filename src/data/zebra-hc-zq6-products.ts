import type { Product } from './products'

// Zebra ZQ610 Plus-HC i ZQ620 Plus-HC (mobilne drukarki dla ochrony zdrowia) oraz akcesoria przeznaczone dla wersji HC.
// Konfiguracje PN: karta katalogowa ZQ6 HC (01.2026), przewodnik akcesoriów drukarek mobilnych (03.2026),
// opisy Zebry do PN u dystrybutorów; ceny i stany z /api/stock z 24.10.2026.
// ZQ61-HUXAE14-00 pominięty: cyfra „1” w innych PN oznacza pasek na ramię, ale opis Zebry tego PN go nie wymienia.
// Audyt: docs/catalog/zebra-hc-2026-10-25/H3.md
// ZQ61-HUWAE04-00 i ZQ62-HUWAE04-00 (Wi-Fi 5 + Bluetooth 4.2) dodane 25.10.2026: docs/catalog/hc-producenci-2026-10-25/J4.md

const SERIES_DATASHEET = { name: 'Karta katalogowa Zebra ZQ6 HC (PL)', type: 'datasheet' as const, url: '/datasheets/zq600-series-hc-spec-sheet-pl-pl.pdf', size: '204 KB' }

const zq610PlusHc: Product = {
  id: 'zebra-zq610-plus-hc',
  slug: 'zebra-zq610-plus-hc',
  name: 'Zebra ZQ610 Plus-HC',
  shortDescription: 'Zebra ZQ610 Plus-HC — mobilna drukarka termiczna 2" dla ochrony zdrowia: etykiety na próbki przy łóżku pacjenta, obudowa odporna na środki dezynfekcyjne, Wi-Fi 6 lub Bluetooth.',
  seoTitle: 'Zebra ZQ610 Plus-HC — mobilna drukarka etykiet 2" dla służby zdrowia',
  seoDescription: 'Drukarka mobilna Zebra ZQ610 Plus-HC do etykiet na próbki przy łóżku pacjenta: druk termiczny 48 mm, Wi-Fi 6, Wi-Fi 5 lub Bluetooth, tworzywa odporne na dezynfekcję. Drukarka etykiet Zebra ZQ610 Plus-HC, ZQ610 Plus-HC Zebra. PN: ZQ61-HUXAE04-00, ZQ61-HUWAE04-00, ZQ61-HUFAE04-00.',
  description: `Zebra ZQ610 Plus-HC to 2-calowa mobilna drukarka termiczna zaprojektowana dla ochrony zdrowia. Drukuje etykiety na próbki bezpośrednio przy łóżku pacjenta, w miejscu pobrania. Służy też do oznaczania w banku krwi. Zastępuje model ZQ610 Healthcare.

Obudowę wykonano z tworzyw klasy medycznej, odpornych na środki dezynfekcyjne. Drukarkę można bezpiecznie czyścić po każdym użyciu. Z baterią waży 0,6 kg, a klips do paska jest w zestawie, dlatego pracownik nosi ją przy sobie przez całą zmianę.

Rozdzielczość druku wynosi 203 dpi, szerokość do 48 mm, a prędkość do 115 mm/s. Rolka etykiet może mieć do 55,9 mm średnicy. Czujnik obecności etykiety pozwala wydawać etykiety pojedynczo w trybie odklejania.

W tabeli są trzy konfiguracje: z modułem Wi-Fi 6 i Bluetooth 5.3, z modułem Wi-Fi 5 (802.11ac) i Bluetooth 4.2 albo z samym Bluetooth 4.2. Bezczynna drukarka przechodzi w stan uśpienia i budzi się po otrzymaniu zadania druku przez Wi-Fi lub Bluetooth. Kolorowy wyświetlacz 288 × 240 pikseli zmienia kolor, gdy drukarka wymaga obsługi, np. po otwarciu pokrywy. Zasilacz zgodny z normą IEC 60601 jest sprzedawany osobno.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 3276.74,
  images: [
    '/images/products/ZQ61-HUXAE04-00.png',
    '/images/products/ZQ61-HUXAE04-00-2.png',
    '/images/products/ZQ61-HUXAE04-00-3.png',
    '/images/products/ZQ61-HUXAE04-00-4.png',
    '/images/products/ZQ61-HUXAE04-00-5.png',
    '/images/products/ZQ61-HUXAE04-00-6.png',
  ],
  imageDescriptions: [
    'Zebra ZQ610 Plus-HC — mobilna drukarka 2" w kolorystyce dla ochrony zdrowia, widok z przodu pod kątem, kolorowy wyświetlacz i przyciski nawigacji',
    'Zebra ZQ610 Plus-HC — widok z przodu: wyświetlacz, szczelina wydruku i pokrywa komory etykiet',
    'Zebra ZQ610 Plus-HC — widok pod kątem z drugiej strony',
    'Zebra ZQ610 Plus-HC z wydrukowaną etykietą na próbkę laboratoryjną (przykładowe dane), na wyświetlaczu stan gotowości',
    'Zebra ZQ610 Plus-HC z etykietą na próbkę w szczelinie wydruku — widok z przodu',
    'Zebra ZQ620 Plus-HC (z lewej, sprzedawana osobno) i ZQ610 Plus-HC — porównanie wielkości',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (8 punktów/mm)',
    predkoscDruku: 'Do 115 mm/s',
    szerokoscDruku: 'Do 48 mm',
    szerokoscEtykiet: '25–55,4 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '2-calowa mobilna drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 115 mm/s' },
    { name: 'Szerokość druku', value: 'Do 48 mm' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Tworzywa klasy medycznej odporne na środki dezynfekcyjne, w kolorystyce dla ochrony zdrowia; czyszczenie po każdym użyciu; akcesoria w wersji HC: bateria, zasilacz zgodny z IEC 60601, pasek na ramię, klipsy do paska' },
    { name: 'Szerokość materiału', value: '25–55,4 mm' },
    { name: 'Długość etykiety', value: '12,7–813 mm lub materiał ciągły' },
    { name: 'Rolka materiału', value: 'Średnica zewnętrzna do 55,9 mm; gilza 19 mm (0,75")' },
    { name: 'Grubość materiału', value: 'Kartoniki 0,058–0,140 mm (2,3–5,5 mil); etykiety 0,165 mm (6,5 mil)' },
    { name: 'Rodzaje materiałów', value: 'Etykiety i kartoniki wycinane, papier paragonowy; z przerwą lub czarnym znacznikiem' },
    { name: 'Czujniki materiału', value: 'Czarny znacznik i przerwa (czujniki w stałej pozycji centralnej); czujnik obecności etykiety' },
    { name: 'Obsługa materiału', value: 'Listwa do odrywania; tryb odklejania i podawania etykiet' },
    { name: 'Wyświetlacz', value: 'Kolorowy, 288 × 240 pikseli; zmiana koloru przy wstrzymaniu pracy lub błędzie; menu dostosowywane w WML' },
    { name: 'Przyciski', value: 'Nawigacja 5-kierunkowa, dwa przyciski definiowane programowo' },
    { name: 'Łączność w oferowanych PN', value: 'ZQ61-HUXAE04-00: Wi-Fi 6 (802.11ax) 2,4 i 5 GHz, antena MIMO, z jednoczesnym Bluetooth 5.3 (certyfikat BT SIG); ZQ61-HUWAE04-00: Wi-Fi 5 (802.11ac) z Bluetooth 4.2; ZQ61-HUFAE04-00: Bluetooth 4.2 (Classic i BLE)' },
    { name: 'Zabezpieczenia i roaming Wi-Fi 6', value: 'WPA3, WPA2, WPA; 802.1x; EAP-FAST, EAP-TTLS, EAP-TLS, PEAP, LEAP; szyfrowanie AES i TKIP; roaming 802.11r, 802.11k, 802.11v; buforowanie PMK, OKC' },
    { name: 'Bluetooth 4.2 (ZQ61-HUFAE04-00)', value: 'Classic i BLE; tryby zabezpieczeń 1–4; certyfikat „Made for iPod/iPhone/iPad”; Key Bonding' },
    { name: 'Zgodne systemy mobilne', value: 'Apple iOS, Android, Windows Mobile' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0 (12 Mb/s, złącze Mini-B); RS-232C, 14 styków, do 115,2 kb/s; Ethernet 10/100 przez stację' },
    { name: 'NFC', value: 'Zebra Print Touch: parowanie Bluetooth i strony pomocy' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash (128 MB dla użytkownika)' },
    { name: 'Procesor', value: '32-bitowy ARM, 400 MHz' },
    { name: 'System i języki', value: 'Link-OS; CPCL, EPL, ZPL, ZBI 2.0; XML' },
    { name: 'Zarządzanie', value: 'Mirror, SNMP, serwer WWW, Ivanti Avalanche, Printer Profile Manager Enterprise, Omnisaa Workspace ONE UEM, SOTI Connect, 42Gears' },
    { name: 'Kody 1D', value: 'Code 39, Code 93, UCC/EAN-128, Code 128, Codabar (NW-7), 2 z 5 przeplatany, UPC-A, UPC-E, EAN-8, EAN-13, rozszerzenia 2- i 5-cyfrowe' },
    { name: 'Kody 2D i pozostałe', value: 'PDF417, MicroPDF417, MaxiCode, QR Code, GS1 DataBar (RSS), Aztec, MSI/Plessey, FIM Postnet, Data Matrix, TLC39' },
    { name: 'Czcionki', value: '25 bitmapowych, 1 skalowalna (CG Triumvirate Bold Condensed); opcjonalnie zestawy znaków: chiński, japoński, koreański, tajski, wietnamski' },
    { name: 'Zasilanie', value: 'Wymienna bateria litowo-jonowa PowerPrecision+ 3250 mAh (nominalnie), 23,4 Wh; wbudowana ładowarka' },
    { name: 'Klasa szczelności', value: 'IP54' },
    { name: 'Odporność na upadki', value: 'Wielokrotne upadki z wysokości 1,52 m na beton' },
    { name: 'Temperatura pracy', value: '0–50 °C' },
    { name: 'Temperatura przechowywania', value: '−25–65 °C' },
    { name: 'Wilgotność', value: '10–90% bez kondensacji (praca i przechowywanie)' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '170,9 × 91,4 × 72,4 mm' },
    { name: 'Waga z baterią', value: '0,6 kg' },
    { name: 'Zgodność z normami', value: 'Emisje: FCC część 15, podczęść B, EN55022 klasa B, EN60950, EN55024, VCCI klasa B; odporność: EN55024, EN61000-4-2, -4-3, -4-4, -4-5; bezpieczeństwo: CE, TUV, CSA; ENERGY STAR' },
    { name: 'FIPS', value: 'Obsługa dostępna bezpłatnie jako oprogramowanie drukarki do pobrania' },
    { name: 'W zestawie', value: 'Drukarka, bateria, klips do paska, skrócona instrukcja, informacje o przepisach' },
    { name: 'Gwarancja', value: '12 miesięcy od daty wysyłki' },
  ],
  applications: [
    'Etykiety na próbki przy łóżku pacjenta',
    'Mobilne pobieranie próbek',
    'Zarządzanie bankiem krwi',
    'Etykietowanie pokarmu kobiecego',
  ],
  variants: [
    {
      partNumber: 'ZQ61-HUXAE04-00',
      name: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.3',
      attributes: { 'Wi-Fi': 'Wi-Fi 6', 'Bluetooth': '5.3' },
      priceFrom: 3749.97,
      availability: 'available',
    },
    {
      partNumber: 'ZQ61-HUWAE04-00',
      name: 'Wi-Fi 5 (802.11ac) + Bluetooth 4.2',
      attributes: { 'Wi-Fi': 'Wi-Fi 5', 'Bluetooth': '4.2' },
      priceFrom: 3962.86,
      availability: 'unavailable',
    },
    {
      partNumber: 'ZQ61-HUFAE04-00',
      name: 'Bluetooth 4.2',
      attributes: { 'Bluetooth': '4.2' },
      priceFrom: 3276.74,
      availability: 'unavailable',
    },
  ],
  variantAttributeTooltips: {
    'Wi-Fi': 'Moduł Wi-Fi zainstalowany fabrycznie — druk z systemu szpitalnego przez sieć placówki.\n\nWi-Fi 6 (802.11ax) — pasma 2,4 i 5 GHz, szybki roaming 802.11r, zabezpieczenia WPA3.\n\nWi-Fi 5 (802.11ac) — moduł dwuradiowy z Bluetooth 4.2.',
    'Bluetooth': 'Wersja Bluetooth w drukarce.\n\n5.3 — w module z Wi-Fi 6, działa równocześnie z siecią Wi-Fi.\n\n4.2 — w module z Wi-Fi 5 albo jako jedyny moduł radiowy (Classic i BLE) wersji bez Wi-Fi; parowanie przez NFC Print Touch.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'zebra-bateria-hc-btry-mpp-34mahc1-01',
    'zebra-zasilacz-iec60601-zq6-hc-p1065668-010',
    'zebra-stacja-ethernet-zq6-hc-p1065668-025',
    'zebra-charger-1slot-zq5',
    'zebra-charger-3slot-zq5',
    'zebra-zq630-charger-6',
    'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2',
    'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac2-01',
    'zebra-pasek-na-ramie-hc-p1065668-021',
    'zebra-klipsy-hc-zq6-p1099875-057',
    'zebra-usb-cable-zq610',
    'zebra-cable-db9-zq610',
  ],
  faq: [
    {
      question: 'Czym Zebra ZQ610 Plus-HC różni się od ZQ610 Plus?',
      answer: 'Wersja HC ma obudowę z tworzyw klasy medycznej odpornych na środki dezynfekcyjne i kolorystykę przeznaczoną dla ochrony zdrowia. Ma też własne akcesoria: baterię BTRY-MPP-34MAHC1-01, zasilacz zgodny z IEC 60601, pasek na ramię i klipsy do paska. Szerokość druku 48 mm, rozdzielczość 203 dpi i prędkość 115 mm/s są takie same jak w [Zebra ZQ610 Plus](/produkt/zebra-zq610-plus).',
    },
    {
      question: 'Który wariant wybrać: z Wi-Fi 6, z Wi-Fi 5 czy z Bluetooth?',
      answer: 'ZQ61-HUXAE04-00 łączy się z siecią Wi-Fi 6 placówki w pasmach 2,4 i 5 GHz i jednocześnie obsługuje Bluetooth 5.3. Taka drukarka odbiera zadania z systemu szpitalnego przez sieć. ZQ61-HUWAE04-00 pracuje w sieci Wi-Fi 5 (802.11ac) i ma Bluetooth 4.2. ZQ61-HUFAE04-00 ma tylko Bluetooth 4.2 i drukuje z terminala lub telefonu, z którym jest sparowana. Obie wersje można podłączyć do sieci przewodowej przez stację Ethernet.',
    },
    {
      question: 'Jak dezynfekować ZQ610 Plus-HC?',
      answer: 'Tworzywa obudowy są przygotowane na częstą dezynfekcję, więc drukarkę można czyścić między kolejnymi użyciami. Rodzaj środka i procedurę czyszczenia ustal na podstawie instrukcji Zebra oraz zasad higieny obowiązujących w placówce.',
    },
    {
      question: 'Jak ładować baterię ZQ610 Plus-HC?',
      answer: 'Bateria ładuje się w drukarce podłączonej do [zasilacza IEC 60601 (P1065668-010)](/produkt/zebra-zasilacz-iec60601-zq6-hc-p1065668-010) albo wstawionej do [stacji Ethernet (P1065668-025)](/produkt/zebra-stacja-ethernet-zq6-hc-p1065668-025). Zapasowe baterie ładują ładowarki 1-, 3- i 6-gniazdowe. Drukarkę na wózku lub biurku można zasilać bez baterii zestawem CHG-MPP-BEPSAC1-2 lub CHG-MPP-BEPSAC2-01.',
    },
    {
      question: 'Jakie etykiety pasują do ZQ610 Plus-HC?',
      answer: 'Drukarka przyjmuje materiał termiczny o szerokości 25–55,4 mm w rolce o średnicy do 55,9 mm. Obsługuje etykiety i kartoniki wycinane oraz papier paragonowy, z przerwą lub czarnym znacznikiem. Zebra oferuje do serii ZQ6 HC etykiety do oznaczania próbek z papieru i z polipropylenu odpornego na wilgoć.',
    },
    {
      question: 'Jaka gwarancja obejmuje ZQ610 Plus-HC?',
      answer: 'Zebra udziela 12 miesięcy gwarancji na wady wykonania i materiałów, liczonej od daty wysyłki. Kontrakty Zebra OneCare wydłużają ochronę i mogą obejmować przypadkowe uszkodzenia.',
    },
  ],
  downloads: [
    SERIES_DATASHEET,
    { name: 'Instrukcja obsługi ZQ610 Plus (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zq610plus/instrukcja-po-polsku', size: 'Online' },
    { name: 'Sterowniki Windows', type: 'software', url: 'https://www.serwis-zebry.pl/sterowniki', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq610-plus', 'zebra-zq310-plus', 'zebra-zq210'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/printers/mobile/zq600-series/zq610-plus-hc.html',
}

const zq620PlusHc: Product = {
  id: 'zebra-zq620-plus-hc',
  slug: 'zebra-zq620-plus-hc',
  name: 'Zebra ZQ620 Plus-HC',
  shortDescription: 'Zebra ZQ620 Plus-HC — mobilna drukarka termiczna 3" dla ochrony zdrowia: etykiety na worki z krwią i mleko matki w punkcie opieki, Wi-Fi 6 lub Wi-Fi 5 z Bluetooth.',
  seoTitle: 'Zebra ZQ620 Plus-HC — mobilna drukarka etykiet 3" dla szpitali',
  seoDescription: 'Mobilna drukarka Zebra ZQ620 Plus-HC dla szpitali: druk termiczny 72 mm, Wi-Fi 6 lub Wi-Fi 5 z Bluetooth, obudowa odporna na środki dezynfekcyjne, IP54. Drukarka szpitalna Zebra ZQ620 Plus-HC, drukarka etykiet ZQ620 Plus-HC Zebra. PN: ZQ62-HUXAE04-00, ZQ62-HUWAE04-00.',
  description: `Zebra ZQ620 Plus-HC to mobilna drukarka termiczna dla ochrony zdrowia z szerokością druku 72 mm (3 cale). Służy do oznaczania worków z krwią i pokarmu kobiecego w punkcie opieki. Drukarka obsługuje również mobilne pobieranie próbek. Zastępuje model ZQ620 Healthcare.

Przyjmuje materiał o szerokości 25–79 mm, a średnica rolki może wynosić do 66 mm. Rozdzielczość druku to 203 dpi, a prędkość sięga 115 mm/s. Obsługuje etykiety wycinane, kartoniki i papier paragonowy.

Konfiguracja ZQ62-HUXAE04-00 ma moduł Wi-Fi 6 (802.11ax) i jednocześnie działający Bluetooth 5.3. Moduł obsługuje szybki roaming 802.11r i zabezpieczenia WPA3. ZQ62-HUWAE04-00 łączy się przez Wi-Fi 5 (802.11ac), a Bluetooth ma w wersji 4.2. Po wstawieniu drukarki do stacji Ethernet dział IT może zdalnie aktualizować jej oprogramowanie i monitorować stan baterii.

Obudowa ma klasę szczelności IP54, a jej tworzywa znoszą regularną dezynfekcję. Drukarka wytrzymuje wielokrotne upadki z wysokości 1,52 m na beton i waży z baterią 0,73 kg. Wymienna bateria PowerPrecision+ 3250 mAh ładuje się w drukarce. Seria zachowuje zgodność wsteczną z akcesoriami QLn.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 4161.8,
  images: [
    '/images/products/ZQ62-HUXAE04-00.png',
    '/images/products/ZQ62-HUXAE04-00-2.png',
    '/images/products/ZQ62-HUXAE04-00-3.png',
    '/images/products/ZQ62-HUXAE04-00-4.png',
    '/images/products/ZQ62-HUXAE04-00-5.png',
    '/images/products/ZQ62-HUXAE04-00-6.png',
    '/images/products/ZQ62-HUXAE04-00-7.png',
  ],
  imageDescriptions: [
    'Zebra ZQ620 Plus-HC — mobilna drukarka 3" w kolorystyce dla ochrony zdrowia, widok z przodu pod kątem',
    'Zebra ZQ620 Plus-HC — widok z przodu: kolorowy wyświetlacz, przyciski nawigacji i szczelina wydruku',
    'Zebra ZQ620 Plus-HC z wydrukowaną etykietą na próbkę laboratoryjną (przykładowe dane) — widok pod kątem',
    'Zebra ZQ620 Plus-HC z etykietą w szczelinie wydruku, na wyświetlaczu stan gotowości — widok z przodu',
    'Zebra ZQ620 Plus-HC z baterią i klipsem do paska — elementy zestawu',
    'Zebra ZQ620 Plus-HC i ZQ610 Plus-HC (z prawej, sprzedawana osobno) — porównanie wielkości',
    'Zebra ZQ620 Plus-HC — widok pod kątem od prawego boku obudowy',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (8 punktów/mm)',
    predkoscDruku: 'Do 115 mm/s',
    szerokoscDruku: 'Do 72 mm',
    szerokoscEtykiet: '25–79 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '3-calowa mobilna drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 115 mm/s' },
    { name: 'Szerokość druku', value: 'Do 72 mm' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Tworzywa klasy medycznej odporne na środki dezynfekcyjne, w kolorystyce dla ochrony zdrowia; czyszczenie po każdym użyciu; akcesoria w wersji HC: bateria, zasilacz zgodny z IEC 60601, pasek na ramię, klipsy do paska' },
    { name: 'Szerokość materiału', value: '25–79 mm' },
    { name: 'Długość etykiety', value: '12,7–813 mm lub materiał ciągły' },
    { name: 'Rolka materiału', value: 'Średnica zewnętrzna do 66 mm; gilza 19 mm (0,75")' },
    { name: 'Grubość materiału', value: 'Kartoniki 0,058–0,140 mm (2,3–5,5 mil); etykiety 0,165 mm (6,5 mil)' },
    { name: 'Rodzaje materiałów', value: 'Etykiety i kartoniki wycinane, papier paragonowy; z przerwą lub czarnym znacznikiem' },
    { name: 'Czujniki materiału', value: 'Czarny znacznik i przerwa (czujniki w stałej pozycji centralnej); czujnik obecności etykiety' },
    { name: 'Obsługa materiału', value: 'Listwa do odrywania; tryb odklejania i podawania etykiet' },
    { name: 'Wyświetlacz', value: 'Kolorowy, 288 × 240 pikseli; zmiana koloru przy wstrzymaniu pracy lub błędzie; menu dostosowywane w WML' },
    { name: 'Przyciski', value: 'Nawigacja 5-kierunkowa, dwa przyciski definiowane programowo' },
    { name: 'Łączność w oferowanych PN', value: 'ZQ62-HUXAE04-00: Wi-Fi 6 (802.11ax) 2,4 i 5 GHz, antena MIMO, z jednoczesnym Bluetooth 5.3 (certyfikat BT SIG); ZQ62-HUWAE04-00: Wi-Fi 5 (802.11ac) z Bluetooth 4.2' },
    { name: 'Zgodne systemy mobilne', value: 'Apple iOS, Android, Windows Mobile' },
    { name: 'Zabezpieczenia i roaming Wi-Fi 6', value: 'WPA3, WPA2, WPA; 802.1x; EAP-FAST, EAP-TTLS, EAP-TLS, PEAP, LEAP; szyfrowanie AES i TKIP; roaming 802.11r, 802.11k, 802.11v; buforowanie PMK, OKC' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0 (12 Mb/s, złącze Mini-B); RS-232C, 14 styków, do 115,2 kb/s; Ethernet 10/100 przez stację' },
    { name: 'NFC', value: 'Zebra Print Touch: parowanie Bluetooth i strony pomocy' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash (128 MB dla użytkownika)' },
    { name: 'Procesor', value: '32-bitowy ARM, 400 MHz' },
    { name: 'System i języki', value: 'Link-OS; CPCL, EPL, ZPL, ZBI 2.0; XML' },
    { name: 'Zarządzanie', value: 'Mirror, SNMP, serwer WWW, Ivanti Avalanche, Printer Profile Manager Enterprise, Omnisaa Workspace ONE UEM, SOTI Connect, 42Gears' },
    { name: 'Kody 1D', value: 'Code 39, Code 93, UCC/EAN-128, Code 128, Codabar (NW-7), 2 z 5 przeplatany, UPC-A, UPC-E, EAN-8, EAN-13, rozszerzenia 2- i 5-cyfrowe' },
    { name: 'Kody 2D i pozostałe', value: 'PDF417, MicroPDF417, MaxiCode, QR Code, GS1 DataBar (RSS), Aztec, MSI/Plessey, FIM Postnet, Data Matrix, TLC39' },
    { name: 'Czcionki', value: '25 bitmapowych, 1 skalowalna (CG Triumvirate Bold Condensed); opcjonalnie zestawy znaków: chiński, japoński, koreański, tajski, wietnamski' },
    { name: 'Zasilanie', value: 'Wymienna bateria litowo-jonowa PowerPrecision+ 3250 mAh (nominalnie), 23,4 Wh; wbudowana ładowarka' },
    { name: 'Klasa szczelności', value: 'IP54' },
    { name: 'Odporność na upadki', value: 'Wielokrotne upadki z wysokości 1,52 m na beton' },
    { name: 'Temperatura pracy', value: '0–50 °C' },
    { name: 'Temperatura przechowywania', value: '−25–65 °C' },
    { name: 'Wilgotność', value: '10–90% bez kondensacji (praca i przechowywanie)' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '173,7 × 117,9 × 76,9 mm' },
    { name: 'Waga z baterią', value: '0,73 kg' },
    { name: 'Zgodność z normami', value: 'Emisje: FCC część 15, podczęść B, EN55022 klasa B, EN60950, EN55024, VCCI klasa B; odporność: EN55024, EN61000-4-2, -4-3, -4-4, -4-5; bezpieczeństwo: CE, TUV, CSA; ENERGY STAR' },
    { name: 'FIPS', value: 'Obsługa dostępna bezpłatnie jako oprogramowanie drukarki do pobrania' },
    { name: 'W zestawie', value: 'Drukarka, bateria, klips do paska, skrócona instrukcja, informacje o przepisach' },
    { name: 'Gwarancja', value: '12 miesięcy od daty wysyłki' },
  ],
  applications: [
    'Etykiety na worki z krwią',
    'Etykietowanie pokarmu kobiecego',
    'Mobilne pobieranie próbek',
    'Zarządzanie bankiem krwi',
  ],
  variants: [
    {
      partNumber: 'ZQ62-HUXAE04-00',
      name: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.3',
      attributes: { 'Wi-Fi': 'Wi-Fi 6', 'Bluetooth': '5.3' },
      priceFrom: 4161.8,
      availability: 'available',
    },
    {
      partNumber: 'ZQ62-HUWAE04-00',
      name: 'Wi-Fi 5 (802.11ac) + Bluetooth 4.2',
      attributes: { 'Wi-Fi': 'Wi-Fi 5', 'Bluetooth': '4.2' },
      priceFrom: 4398.1,
      availability: 'unavailable',
    },
  ],
  variantAttributeTooltips: {
    'Wi-Fi': 'Fabryczny moduł sieci bezprzewodowej ZQ620 Plus-HC.\n\nWi-Fi 6 (802.11ax) — antena MIMO, pasma 2,4 i 5 GHz; roaming 802.11k, 802.11v i 802.11r pomaga utrzymać połączenie, gdy personel przemieszcza się po placówce.\n\nWi-Fi 5 (802.11ac) — moduł dwuradiowy z Bluetooth 4.2.',
    'Bluetooth': 'Bluetooth w tym samym module co Wi-Fi.\n\n5.3 — w wersji z Wi-Fi 6, działa równocześnie z siecią Wi-Fi, np. do druku z terminala mobilnego.\n\n4.2 — w wersji z Wi-Fi 5. Parowanie ułatwia NFC Print Touch.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'zebra-bateria-hc-btry-mpp-34mahc1-01',
    'zebra-zasilacz-iec60601-zq6-hc-p1065668-010',
    'zebra-stacja-ethernet-zq6-hc-p1065668-025',
    'zebra-charger-1slot-zq5',
    'zebra-charger-3slot-zq5',
    'zebra-zq630-charger-6',
    'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2',
    'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac2-01',
    'zebra-pasek-na-ramie-hc-p1065668-021',
    'zebra-klipsy-hc-zq6-p1099875-057',
    'zebra-usb-cable-zq610',
    'zebra-cable-db9-zq610',
  ],
  faq: [
    {
      question: 'Które akcesoria do ZQ620 Plus pasują do wersji HC?',
      answer: 'Ładowarki baterii 1-, 3- i 6-gniazdowe, przewody USB i RS-232 oraz zestawy zasilania bez baterii są wspólne dla [Zebra ZQ620 Plus](/produkt/zebra-zq620-plus) i ZQ620 Plus-HC. Baterię, zasilacz sieciowy, pasek do noszenia na ramieniu oraz klipsy wersja HC ma własne, oznaczone jako Healthcare. Stacja Ethernet pasuje w wersji standardowej i w wersji z zasilaczem IEC 60601. Do ZQ620 Plus-HC przeznaczone są bateria i zasilacz w wersji Healthcare.',
    },
    {
      question: 'Czy ZQ620 Plus-HC można włączyć do sieci szpitala i zarządzać nią zdalnie?',
      answer: 'Tak. ZQ62-HUXAE04-00 pracuje w sieci Wi-Fi 6 i obsługuje uwierzytelnianie 802.1x, m.in. EAP-TLS i PEAP; ZQ62-HUWAE04-00 łączy się z siecią Wi-Fi 5. Narzędzia PrintSecure pozwalają skonfigurować bezpieczne połączenia i blokować nieautoryzowany dostęp. Drukarką można zarządzać w Printer Profile Manager Enterprise oraz w systemach Omnisaa Workspace ONE i SOTI Connect.',
    },
    {
      question: 'Jak nosić ZQ620 Plus-HC podczas obchodu?',
      answer: 'Klips do paska jest w zestawie. Do noszenia na ramieniu służy [pasek Healthcare P1065668-021](/produkt/zebra-pasek-na-ramie-hc-p1065668-021), przygotowany do dezynfekcji. Drukarki można używać w dowolnym położeniu.',
    },
    {
      question: 'Czy ZQ620 Plus-HC może pracować na wózku bez baterii?',
      answer: 'Tak. Zestawy CHG-MPP-BEPSAC1-2 i CHG-MPP-BEPSAC2-01 zastępują baterię i zasilają drukarkę z sieci. Ich zasilacz spełnia normę IEC 60601 i jest przeznaczony do sal pacjentów. Zestawy różnią się kierunkiem wyjścia przewodu, a przewód sieciowy EU (46629) zamawia się osobno.',
    },
    {
      question: 'Jakie materiały przyjmuje ZQ620 Plus-HC?',
      answer: 'Szerokość materiału wynosi od 25 do 79 mm, a długość etykiety od 12,7 do 813 mm. Średnica rolki może mieć do 66 mm. Zebra oferuje do tej serii etykiety IQ Color, które automatyzują oznaczanie próbek pilnych (STAT), oraz standardowe etykiety na próbki z papieru i polipropylenu.',
    },
    {
      question: 'Ile trwa gwarancja na ZQ620 Plus-HC?',
      answer: 'Gwarancja Zebra wynosi rok od daty wysyłki i dotyczy wad wykonania oraz materiałów. Usługi Zebra OneCare Essential i Select dodają m.in. całodobową pomoc techniczną i przyspieszoną wymianę urządzenia.',
    },
  ],
  downloads: [
    SERIES_DATASHEET,
    { name: 'Instrukcja obsługi ZQ620 Plus (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zq620plus/instrukcja-po-polsku', size: 'Online' },
    { name: 'Sterowniki Windows', type: 'software', url: 'https://www.serwis-zebry.pl/sterowniki', size: 'Online' },
  ],
  relatedProducts: ['tsc-alpha-30lhc', 'zebra-zq620-plus', 'zebra-zq511', 'zebra-zq320-plus', 'zebra-zq220-plus'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/printers/mobile/zq600-series/zq620-plus-hc.html',
}

// ---- Akcesoria w wersji dla ochrony zdrowia (PN z ceną w /api/stock, 24.10.2026) ----

const HC_PRINTERS = ['zebra-zq610-plus-hc', 'zebra-zq620-plus-hc']

const hcBattery: Product = {
  id: 'zebra-bateria-hc-btry-mpp-34mahc1-01',
  slug: 'zebra-bateria-hc-btry-mpp-34mahc1-01',
  name: 'Bateria Zebra Healthcare 3250 mAh do ZQ610 Plus-HC / ZQ620 Plus-HC — BTRY-MPP-34MAHC1-01',
  shortDescription: 'Bateria Zebra BTRY-MPP-34MAHC1-01 PowerPrecision+ 3250 mAh dla ochrony zdrowia, do mobilnych drukarek ZQ610 Plus-HC i ZQ620 Plus-HC.',
  description: `Bateria Zebra BTRY-MPP-34MAHC1-01 to bateria litowo-jonowa PowerPrecision+ w wersji dla ochrony zdrowia. Ma nominalnie 3250 mAh i 23,4 Wh. Pasuje do drukarek ZQ610 Plus-HC i ZQ620 Plus-HC oraz do starszych ZQ610 HC, ZQ620 HC, QLn220 HC i QLn320 HC.

Stan techniczny baterii można odczytać z drukarki lub z systemu zarządzania. Te dane pomagają wskazać baterię do wymiany, zanim zacznie ograniczać pracę. Baterię ładuje się w drukarce albo w zgodnej ładowarce 1-, 3- lub 6-gniazdowej. Do drukarek bez oznaczenia HC przeznaczona jest bateria BTRY-MPP-34MA1-01.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 461.01,
  images: ['/images/products/BTRY-MPP-34MAHC1-01.png'],
  imageDescriptions: ['Bateria Zebra Healthcare PowerPrecision+ 3250 mAh BTRY-MPP-34MAHC1-01 do ZQ610 Plus-HC i ZQ620 Plus-HC'],
  tags: ['healthcare'],
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'BTRY-MPP-34MAHC1-01' },
    { name: 'Typ', value: 'Bateria zapasowa Healthcare PowerPrecision+' },
    { name: 'Technologia', value: 'Litowo-jonowa' },
    { name: 'Pojemność', value: '3250 mAh (nominalnie)' },
    { name: 'Energia', value: '23,4 Wh' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC, QLn320 HC' },
  ],
  applications: ['Bateria zapasowa do wymiany w trakcie zmiany', 'Wymiana zużytej baterii'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5', 'zebra-zq630-charger-6'],
  downloads: [],
  relatedProducts: HC_PRINTERS,
  createdAt: '2026-10-25',
}

const hcAcAdapter: Product = {
  id: 'zebra-zasilacz-iec60601-zq6-hc-p1065668-010',
  slug: 'zebra-zasilacz-iec60601-zq6-hc-p1065668-010',
  name: 'Zasilacz Zebra IEC 60601 do ZQ610 Plus-HC / ZQ620 Plus-HC, EU — P1065668-010',
  shortDescription: 'Zasilacz Zebra P1065668-010 zgodny z normą IEC 60601 ładuje baterię w drukarce ZQ610 Plus-HC lub ZQ620 Plus-HC. Wersja z wtyczką EU.',
  description: `Zasilacz Zebra P1065668-010 podłącza mobilną drukarkę w wersji dla ochrony zdrowia do gniazda sieciowego i ładuje baterię w drukarce. Spełnia normę IEC 60601 i jest przeznaczony do stosowania w salach pacjentów. W czasie ładowania drukarka może drukować etykiety.

Zasilacz pasuje do ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC i QLn320 HC. Numer P1065668-010 oznacza wersję z wtyczką EU. Drukarka i bateria są sprzedawane osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 305.79,
  images: ['/images/products/P1065668-010.png'],
  imageDescriptions: ['Zasilacz Zebra IEC 60601 do drukarek mobilnych w wersji HC (zdjęcie poglądowe, bez przewodu sieciowego)'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'P1065668-010' },
    { name: 'Typ', value: 'Zasilacz sieciowy AC dla ochrony zdrowia' },
    { name: 'Norma', value: 'IEC 60601 (do stosowania w salach pacjentów)' },
    { name: 'Wersja regionalna', value: 'EU' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC, QLn320 HC' },
  ],
  applications: ['Ładowanie baterii w drukarce', 'Zasilanie drukarki w sali pacjenta'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-bateria-hc-btry-mpp-34mahc1-01', 'zebra-stacja-ethernet-zq6-hc-p1065668-025'],
  downloads: [],
  relatedProducts: HC_PRINTERS,
  createdAt: '2026-10-25',
}

// Brak zdjęcia stacji w publicznych źródłach — logo zastępcze.
const hcEthernetCradle: Product = {
  id: 'zebra-stacja-ethernet-zq6-hc-p1065668-025',
  slug: 'zebra-stacja-ethernet-zq6-hc-p1065668-025',
  name: 'Stacja Ethernet Zebra z zasilaczem IEC 60601 do ZQ610 Plus-HC / ZQ620 Plus-HC, EU — P1065668-025',
  shortDescription: 'Stacja Zebra P1065668-025 ładuje jedną drukarkę ZQ610 Plus-HC lub ZQ620 Plus-HC i łączy ją z siecią Ethernet. Zasilacz zgodny z IEC 60601 w zestawie.',
  description: `Stacja Zebra P1065668-025 ładuje jedną drukarkę ZQ610 Plus-HC lub ZQ620 Plus-HC i łączy ją z siecią Ethernet 10/100. Stacja stoi na blacie lub biurku. W zestawie jest zasilacz zgodny z normą IEC 60601. Bateria ładuje się w drukarce, a drukarka w stacji nadal drukuje.

Przez port Ethernet dział IT zarządza drukarką zdalnie. Może aktualizować oprogramowanie, szablony i czcionki, sprawdzać stan baterii oraz zmieniać klucze szyfrujące i certyfikaty. Dotyczy to także drukarek z samym Bluetooth. Diody stacji pokazują zasilanie i połączenie z siecią. Stacja pasuje też do ZQ610 HC, ZQ620 HC, QLn220 HC i QLn320 HC.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 902.33,
  images: ['/images/products/placeholder.svg'],
  imageDescriptions: ['Stacja Ethernet Zebra P1065668-025 z zasilaczem IEC 60601 do drukarek ZQ610 Plus-HC i ZQ620 Plus-HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'P1065668-025' },
    { name: 'Typ', value: 'Jednogniazdowa stacja ładująca z portem Ethernet' },
    { name: 'Sieć', value: 'Ethernet 10/100 Mb/s z automatycznym wykrywaniem prędkości' },
    { name: 'Zasilacz', value: 'W zestawie, zgodny z normą IEC 60601' },
    { name: 'Region', value: 'EU' },
    { name: 'Wskaźniki', value: 'Diody LED: zasilanie DC i połączenie Ethernet' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC, QLn320 HC' },
  ],
  applications: ['Ładowanie drukarki na stanowisku', 'Zdalne zarządzanie drukarką przez sieć przewodową'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-zasilacz-iec60601-zq6-hc-p1065668-010', 'zebra-bateria-hc-btry-mpp-34mahc1-01'],
  downloads: [],
  relatedProducts: HC_PRINTERS,
  createdAt: '2026-10-25',
}

const hcShoulderStrap: Product = {
  id: 'zebra-pasek-na-ramie-hc-p1065668-021',
  slug: 'zebra-pasek-na-ramie-hc-p1065668-021',
  name: 'Pasek na ramię Zebra Healthcare do ZQ610 Plus-HC / ZQ620 Plus-HC — P1065668-021',
  shortDescription: 'Pasek na ramię Zebra P1065668-021 przygotowany do dezynfekcji, do noszenia drukarki ZQ610 Plus-HC lub ZQ620 Plus-HC.',
  description: `Pasek Zebra P1065668-021 służy do noszenia mobilnej drukarki w wersji dla ochrony zdrowia na ramieniu. Wykonano go z materiału przygotowanego do dezynfekcji. Ma długość 155 cm (61 cali) i mocuje się do drukarki pętlą.

Pasek pasuje do ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC i QLn320 HC. Haczyki adaptera do mocowania paska są sprzedawane osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 122.22,
  images: ['/images/products/P1065668-021.png'],
  imageDescriptions: ['Pasek na ramię Zebra Healthcare P1065668-021 z nakładką na ramię i regulacją długości'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'P1065668-021' },
    { name: 'Typ', value: 'Pasek na ramię Healthcare' },
    { name: 'Długość', value: '155 cm (61 cali)' },
    { name: 'Mocowanie', value: 'Pętla; haczyki adaptera sprzedawane osobno' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC, QLn220 HC, QLn320 HC' },
  ],
  applications: ['Noszenie drukarki na ramieniu podczas obchodu'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-klipsy-hc-zq6-p1099875-057'],
  downloads: [],
  relatedProducts: HC_PRINTERS,
  createdAt: '2026-10-25',
}

const hcBeltClips: Product = {
  id: 'zebra-klipsy-hc-zq6-p1099875-057',
  slug: 'zebra-klipsy-hc-zq6-p1099875-057',
  name: 'Klipsy do paska Zebra ZQ6 Healthcare, 20 szt. — P1099875-057',
  shortDescription: 'Zebra P1099875-057: zapasowe klipsy do paska Healthcare do ZQ610 Plus-HC i ZQ620 Plus-HC, 20 sztuk w zestawie.',
  description: `Zestaw Zebra P1099875-057 to 20 klipsów do paska w wersji dla ochrony zdrowia, sprzedawanych jako części zapasowe. Klips pozwala nosić drukarkę ZQ610 Plus-HC lub ZQ620 Plus-HC przy pasku i drukować bez zdejmowania jej. Klipsy pasują też do ZQ610 HC i ZQ620 HC.

Jeden klips jest w zestawie z każdą drukarką. Zapasowe klipsy przydają się przy wymianie zużytych lub zagubionych. Do drukarek bez oznaczenia HC służą klipsy P1031365-028.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 120.77,
  images: ['/images/products/P1099875-057.png'],
  imageDescriptions: ['Klips do paska Zebra w wersji Healthcare do ZQ610 Plus-HC i ZQ620 Plus-HC (zdjęcie jednego klipsa; zestaw zawiera 20 szt.)'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'P1099875-057' },
    { name: 'Typ', value: 'Klips do paska ZQ6 Healthcare' },
    { name: 'Liczba w zestawie', value: '20 szt.' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 HC, ZQ620 HC' },
  ],
  applications: ['Wymiana zużytych lub zagubionych klipsów'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-pasek-na-ramie-hc-p1065668-021'],
  downloads: [],
  relatedProducts: HC_PRINTERS,
  createdAt: '2026-10-25',
}

const BEPSAC_PRINTERS = ['zebra-zq610-plus-hc', 'zebra-zq620-plus-hc', 'zebra-zq610-plus', 'zebra-zq620-plus', 'zebra-zq511', 'zebra-zq521']

const hcBatteryEliminatorFront: Product = {
  id: 'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2',
  slug: 'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2',
  name: 'Zasilanie sieciowe bez baterii Zebra IEC 60601, przewód do przodu — CHG-MPP-BEPSAC1-2',
  shortDescription: 'Zestaw Zebra CHG-MPP-BEPSAC1-2 zasila drukarkę ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 Plus lub ZQ620 Plus z sieci zamiast z baterii. Zasilacz zgodny z IEC 60601, przewód wychodzi do przodu.',
  description: `Zestaw Zebra CHG-MPP-BEPSAC1-2 zasila mobilną drukarkę bezpośrednio z sieci. Atrapę baterii wkłada się do drukarki w miejsce baterii, a zasilacz łączy ją z gniazdem sieciowym. Zasilacz spełnia normę IEC 60601 i jest przeznaczony do sal pacjentów. Zestaw służy do drukarek na wózkach medycznych i na biurkach, gdzie bateria nie jest potrzebna.

W tej wersji przewód wychodzi w stronę przodu drukarki. Zestaw pasuje do ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 Plus i ZQ620 Plus, a także do ZQ610, ZQ620, ZQ610 HC, ZQ620 HC, ZQ511, ZQ521 i ZQ521R. Drukarka widoczna na zdjęciu jest sprzedawana osobno.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- Przewód sieciowy Zebra EU (46629)

Dokup tylko te elementy, których jeszcze nie masz.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 552.7,
  images: ['/images/products/CHG-MPP-BEPSAC1-2.png'],
  imageDescriptions: ['Zestaw zasilania bez baterii Zebra CHG-MPP-BEPSAC1-2 podłączony do ZQ610 Plus-HC; przewód wychodzi do przodu drukarki (drukarka sprzedawana osobno)'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CHG-MPP-BEPSAC1-2' },
    { name: 'Typ', value: 'Atrapa baterii z zasilaczem sieciowym AC' },
    { name: 'Norma zasilacza', value: 'IEC 60601 (do stosowania w salach pacjentów)' },
    { name: 'Kierunek przewodu', value: 'W stronę przodu drukarki' },
    { name: 'Przewód sieciowy', value: 'Brak w zestawie; wersja EU: 46629 (sprzedawany osobno)' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 Plus, ZQ620 Plus, ZQ610, ZQ620, ZQ610 HC, ZQ620 HC, ZQ511, ZQ521, ZQ521R' },
  ],
  applications: ['Drukarka na wózku medycznym', 'Drukarka na biurku bez baterii'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac2-01'],
  downloads: [],
  relatedProducts: BEPSAC_PRINTERS,
  createdAt: '2026-10-25',
}

const hcBatteryEliminatorBack: Product = {
  id: 'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac2-01',
  slug: 'zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac2-01',
  name: 'Zasilanie sieciowe bez baterii Zebra IEC 60601, przewód do tyłu — CHG-MPP-BEPSAC2-01',
  shortDescription: 'Zestaw Zebra CHG-MPP-BEPSAC2-01 zastępuje baterię i zasila z gniazda sieciowego drukarkę ZQ610 Plus lub ZQ620 Plus, także w wersji HC. Zasilacz IEC 60601, przewód skierowany do tyłu.',
  description: `Zebra CHG-MPP-BEPSAC2-01 to atrapa baterii z zasilaczem sieciowym. Po jej włożeniu drukarka pracuje z gniazda sieciowego i nie zużywa baterii. Zasilacz ma zgodność z normą IEC 60601, dlatego można go używać w salach pacjentów. Takie zasilanie przewidziano dla drukarek ustawionych na wózku medycznym lub na biurku.

Przewód jest obrócony o 180° i wychodzi w stronę tyłu drukarki. Wersja z przewodem skierowanym do przodu ma numer CHG-MPP-BEPSAC1-2. Pasujące drukarki: ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 Plus, ZQ620 Plus, ZQ610, ZQ620, ZQ610 HC, ZQ620 HC, ZQ511, ZQ521 i ZQ521R. Drukarka na zdjęciu nie wchodzi w skład zestawu.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- Przewód sieciowy Zebra EU (46629)

Dokup tylko te elementy, których jeszcze nie masz.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'zebra',
  priceFrom: 552.7,
  images: ['/images/products/CHG-MPP-BEPSAC2-01.png'],
  imageDescriptions: ['Zestaw zasilania bez baterii Zebra CHG-MPP-BEPSAC2-01 podłączony do ZQ610 Plus-HC; przewód wychodzi do tyłu drukarki (drukarka sprzedawana osobno)'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CHG-MPP-BEPSAC2-01' },
    { name: 'Typ', value: 'Atrapa baterii z zasilaczem sieciowym AC' },
    { name: 'Norma zasilacza', value: 'IEC 60601 (do stosowania w salach pacjentów)' },
    { name: 'Kierunek przewodu', value: 'Obrócony o 180°, w stronę tyłu drukarki' },
    { name: 'Przewód sieciowy', value: 'Brak w zestawie; wersja EU: 46629 (sprzedawany osobno)' },
    { name: 'Kompatybilność', value: 'Zebra ZQ610 Plus-HC, ZQ620 Plus-HC, ZQ610 Plus, ZQ620 Plus, ZQ610, ZQ620, ZQ610 HC, ZQ620 HC, ZQ511, ZQ521, ZQ521R' },
  ],
  applications: ['Drukarka na wózku medycznym', 'Drukarka na biurku bez baterii'],
  compatibleAccessories: [],
  relatedAccessories: ['zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2'],
  downloads: [],
  relatedProducts: BEPSAC_PRINTERS,
  createdAt: '2026-10-25',
}

// Drukarki i akcesoria w jednej liście: integracja w products.ts dołącza ją do katalogu
// i rozdziela do podkategorii według `subcategoryIds`.
export const zebraHcZq6Products: Product[] = [
  zq610PlusHc,
  zq620PlusHc,
  hcBattery,
  hcAcAdapter,
  hcEthernetCradle,
  hcShoulderStrap,
  hcBeltClips,
  hcBatteryEliminatorFront,
  hcBatteryEliminatorBack,
]
