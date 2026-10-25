import type { Product } from './products'

// Drukarki dla służby zdrowia innych producentów: Honeywell PC45d Healthcare i Citizen CL-H300SV (25.10.2026).
// Tylko PN w wersji EU z ceną w /api/stock (wywołanie z 25.10.2026); priceFrom to wartość startowa, kartę aktualizuje API.
// Źródła, konfiguracje PN, decyzje i rozbieżności dokumentów: docs/catalog/hc-producenci-2026-10-25/J3.md.

const pc45dHc: Product = {
  id: 'honeywell-pc45d-hc',
  slug: 'honeywell-pc45d-hc',
  name: 'Honeywell PC45d Healthcare',
  seoH1: 'Honeywell PC45d Healthcare',
  shortDescription: 'Honeywell PC45d Healthcare — biała drukarka termiczna 4" dla służby zdrowia: obudowa i złącza przygotowane do dezynfekcji, ekran dotykowy 3,5", Ethernet.',
  seoTitle: 'Honeywell PC45d Healthcare — drukarka etykiet dla służby zdrowia',
  seoDescription: 'Szpitalna drukarka etykiet Honeywell PC45d Healthcare: druk termiczny 4", 203 dpi, etykiety próbek laboratoryjnych i leków, opaski identyfikacyjne pacjentów. Drukarka Honeywell PC45d HC, PC45d Healthcare Honeywell. PN: PC45D100000200.',
  description: `Honeywell PC45d Healthcare to 4-calowa drukarka do druku termicznego w wersji przeznaczonej dla placówek ochrony zdrowia. Służy do oznaczania próbek laboratoryjnych i leków oraz do drukowania opasek identyfikujących pacjentów. Nie używa taśmy barwiącej.

Wersja Healthcare ma białą obudowę. Obudowę i złącza zaprojektowano do częstego kontaktu ze środkami czyszczącymi i dezynfekującymi, które placówki stosują na stanowiskach pracy.

Drukarkę obsługuje się z kolorowego ekranu dotykowego 3,5 cala. Rozdzielczość 203 dpi pozwala osiągnąć 203 mm/s, a pole wydruku ma do 108 mm szerokości. Przyjmuje rolki materiału o średnicy do 127 mm. Platforma Honeywell Printer Edge szyfruje dane przesyłane do drukarki, co pomaga chronić poufność danych pacjentów. Honeywell Operational Intelligence umożliwia zdalną diagnostykę w czasie rzeczywistym i śledzenie wydajności druku.

Konfiguracja PC45D100000200 ma Ethernet, USB i USB Host. Wi-Fi 6 i Bluetooth 5.2 można dodać zestawem 205-190-012. Odklejak i obcinarka dla tej wersji mają własne numery katalogowe Healthcare. Przewód zasilający nie wchodzi w skład tego numeru. Gwarancja producenta wynosi 2 lata.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'honeywell',
  priceFrom: 2527.22,
  images: [
    '/images/products/PC45D100000200.png',
    '/images/products/PC45D100000200-2.png',
    '/images/products/PC45D100000200-3.png',
    '/images/products/PC45D100000200-4.png',
  ],
  imageDescriptions: [
    'Honeywell PC45d Healthcare — biała drukarka etykiet, widok pod kątem z przodu i z boku, ekran dotykowy i szczelina wydruku',
    'Honeywell PC45d Healthcare — widok z przodu: kolorowy ekran dotykowy 3,5" i przycisk drukowania',
    'Honeywell PC45d Healthcare z zamontowanym odklejakiem, widok pod kątem (odklejak sprzedawany osobno)',
    'Honeywell PC45d Healthcare — widok z boku: przycisk otwierania pokrywy i włącznik zasilania',
  ],
  tags: ['healthcare'],
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (8 punktów/mm)',
    predkoscDruku: 'Do 203 mm/s (8 ips)',
    szerokoscDruku: 'Do 108 mm',
    szerokoscEtykiet: 'Do 118 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka etykiet w wersji dla ochrony zdrowia' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: '51–203 mm/s (2–8 ips)' },
    { name: 'Szerokość druku', value: 'Do 108 mm' },
    { name: 'Cechy wersji Healthcare', value: 'Biała obudowa; obudowa i złącza przygotowane do dezynfekcji, zaprojektowane do częstego kontaktu ze środkami czyszczącymi' },
    { name: 'Szerokość materiału', value: 'Do 118 mm' },
    { name: 'Rolka materiału', value: 'Średnica zewnętrzna do 127 mm; gilza 12,7, 25,4 lub 38,1 mm' },
    { name: 'Grubość materiału', value: '0,06–0,20 mm' },
    { name: 'Minimalna długość etykiety', value: '6,35 mm' },
    { name: 'Rodzaje materiałów', value: 'Opaski na rękę, kartoniki, papier paragonowy, etykiety z podkładem i bez podkładu (linerless), etykiety z czarnym znacznikiem lub przerwą' },
    { name: 'Wykrywanie materiału', value: 'Przerwa, wycięcie, czarny znacznik, materiał ciągły; opcjonalnie czujnik niskiego poziomu materiału' },
    { name: 'Panel obsługi', value: 'Kolorowy ekran dotykowy LCD 3,5" (320 × 240), przycisk Print/Feed, dioda gotowości' },
    { name: 'Interfejsy w PC45D100000200', value: 'Ethernet 10/100 Mb/s, USB 2.0 Device, USB 2.0 Host' },
    { name: 'Łączność opcjonalna', value: 'Port szeregowy RS-232 (do 115,2 kb/s); zestaw 205-190-012: Wi-Fi 6 (802.11a/b/g/n/ac/ax), Bluetooth 5.2 i pasywny tag NFC' },
    { name: 'Bezpieczeństwo', value: 'Honeywell Printer Edge: szyfrowanie danych, bezpieczny kanał druku Secure Net1 i bezpieczny kanał konfiguracji; WPA/WPA2/WPA3 (Personal i Enterprise) przy Wi-Fi' },
    { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash' },
    { name: 'Języki drukarki', value: 'Fingerprint, Direct Protocol, IPL, ZSim2 (ZPL-II), DPL, XML (SAP AII, Oracle WMS), PDF; aplikacje C# na drukarce' },
    { name: 'Zarządzanie', value: 'Honeywell Operational Intelligence, PrintSet 5, interfejs WWW' },
    { name: 'Opcje', value: 'Odklejak z czujnikiem pobrania etykiety, obcinarka do etykiet z podkładem i bez podkładu, czujnik niskiego poziomu materiału, zewnętrzny uchwyt rolki, RFID UHF, modem komórkowy' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '168 × 181,3 × 215,6 mm' },
    { name: 'Waga', value: '1,8 kg' },
    { name: 'Zasilanie', value: 'Zasilacz: wejście 100–240 V AC, 50–60 Hz, 1,5 A; wyjście 24 V DC, 3,15 A' },
    { name: 'Temperatura pracy', value: '0–45°C' },
    { name: 'Temperatura przechowywania', value: '−20–60°C' },
    { name: 'Wilgotność', value: '10–90% (bez kondensacji)' },
    { name: 'Zgodność z normami', value: 'RoHS, CE (EN 55032 klasa B), FCC klasa B, ENERGY STAR 3.2' },
    { name: 'W zestawie', value: 'Drukarka, zasilacz, przewód USB, etykieta testowa, dokumenty zgodności' },
    { name: 'Przewód zasilający', value: 'Brak w zestawie z PC45D100000200; zamawiany osobno' },
    { name: 'Gwarancja', value: '2 lata' },
  ],
  applications: [
    'Etykiety na próbki laboratoryjne',
    'Etykiety leków z dawkowaniem i zaleceniami',
    'Opaski identyfikacyjne dla pacjentów',
  ],
  variants: [
    {
      partNumber: 'PC45D100000200',
      name: '203 dpi, USB + Ethernet, ekran dotykowy',
      attributes: {},
      priceFrom: 2527.22,
      availability: 'on-order',
    },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['honeywell-printhead-pc45-203', 'honeywell-platen-roller-pc45d'],
  faq: [
    {
      question: 'Czym Honeywell PC45d Healthcare różni się od zwykłej PC45d?',
      answer: 'Wersja Healthcare ma białą obudowę, a obudowa i złącza są przygotowane do częstej dezynfekcji. Parametry druku i ekran dotykowy są takie same jak w [Honeywell PC45d](/produkt/honeywell-pc45d). Głowica 225-783-001 i wałek dociskowy 205-187-002 pasują do obu wersji. Odklejak (205-189-001) oraz obcinarka (205-189-006 z tacką 205-191-007) mają osobne numery dla wersji Healthcare.',
    },
    {
      question: 'Jakimi środkami można czyścić obudowę PC45d Healthcare?',
      answer: 'Obudowę drukarki PC45 przygotowaną do dezynfekcji można przecierać m.in. chusteczkami z alkoholem izopropylowym 70% (IPA 70), podchlorynem sodu o stężeniu poniżej 6%, chusteczkami Sani-Cloth Plus, Sani-Cloth HB i Super Sani-Cloth oraz środkiem Virex II 256. Na czas czyszczenia PC45d Healthcare wyłącza się i odłącza od niej zasilanie. Środek nanosi się na ściereczkę i przeciera tylko zewnętrzne powierzchnie z tworzywa; płyn nie może zbierać się przy złączach, a metalowe styki i złącza nie powinny mieć z nim kontaktu. Częstotliwość czyszczenia i czas działania środka określają procedury placówki oraz producent środka.',
    },
    {
      question: 'Czy PC45d Healthcare drukuje opaski dla pacjentów?',
      answer: 'Tak. Opaski na rękę są wśród obsługiwanych materiałów, obok etykiet laboratoryjnych i etykiet leków. Opaska powinna być termiczna, o szerokości do 118 mm i grubości od 0,06 do 0,20 mm.',
    },
    {
      question: 'Jak dodać Wi-Fi i Bluetooth do PC45D100000200?',
      answer: 'PC45D100000200 ma Ethernet 10/100, USB i USB Host. Łączność bezprzewodową zapewnia zestaw 205-190-012 w wersji Rest of World: Wi-Fi 6 (802.11ax), Bluetooth 5.2 i pasywny tag NFC. Zestaw 205-190-011 jest przeznaczony dla Ameryki Północnej.',
    },
    {
      question: 'Czy w zestawie jest przewód zasilający?',
      answer: 'Nie. W pudełku są drukarka, zasilacz 24 V, przewód USB i etykieta testowa. Przewód sieciowy do zasilacza trzeba zamówić osobno. Drukarkę podłącza się do gniazda z uziemieniem.',
    },
    {
      question: 'Jak PC45d Healthcare chroni dane wysyłane do druku?',
      answer: 'Platforma Honeywell Printer Edge szyfruje dane przesyłane do drukarki i ogranicza dostęp osób nieuprawnionych. Drukarka ma bezpieczny kanał druku Secure Net1 i osobny bezpieczny kanał konfiguracji. Dział IT może zdalnie zarządzać drukarkami i instalować aktualizacje.',
    },
    {
      question: 'Jakie są alternatywy dla Honeywell PC45d Healthcare?',
      answer: 'Zamiast PC45d Healthcare można wybrać inną drukarkę 4" dla placówek medycznych: [Zebra ZD421-HC](/produkt/zebra-zd421-hc) i [Zebra ZD621-HC](/produkt/zebra-zd621-hc) w wersjach termicznych i termotransferowych, [Citizen CL-H300SV](/produkt/citizen-cl-h300sv) z obudową z tworzywa antybakteryjnego, [SATO CT4-LX-HC](/produkt/sato-ct4-lx-hc), [TSC TH240THC](/produkt/tsc-th240thc) albo [TSC DH240THC](/produkt/tsc-dh240thc). Porównanie wszystkich modeli zawiera [przegląd drukarek dla szpitali](/drukarki-dla-sluzby-zdrowia).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa Honeywell PC45d Healthcare (EN)', type: 'datasheet', url: '/downloads/honeywell/honeywell-pc45-healthcare-karta-katalogowa-en.pdf', size: '132 KB' },
    { name: 'Instrukcja szybkiego uruchomienia PC45d / PC45t (PL)', type: 'manual', url: '/instrukcje/honeywell-pc45-qs-pl.pdf', size: '2,1 MB' },
    { name: 'Instrukcja obsługi PC45 (EN)', type: 'manual', url: '/instrukcje/honeywell-pc45-ug-en.pdf', size: '6,9 MB' },
    { name: 'Przewodnik akcesoriów PC45 (EN)', type: 'pdf', url: '/downloads/honeywell/honeywell-pc45-akcesoria-en.pdf', size: '712 KB' },
  ],
  relatedProducts: ['zebra-zd421-hc', 'zebra-zd621-hc', 'citizen-cl-h300sv', 'tsc-dh240thc', 'tsc-th240thc', 'sato-ct4-lx-hc', 'honeywell-pc45d'],
  createdAt: '2026-10-25',
  sameAs: 'https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/desktop-printers/pc45d-healthcare-direct-thermal-desktop-printer',
}

const clH300sv: Product = {
  id: 'citizen-cl-h300sv',
  slug: 'citizen-cl-h300sv',
  name: 'Citizen CL-H300SV',
  seoH1: 'Citizen CL-H300SV',
  shortDescription: 'Citizen CL-H300SV — 4-calowa drukarka etykiet z białą obudową antybakteryjną (znak SIAA, ISO 22196), przygotowaną do dezynfekcji.',
  seoTitle: 'Citizen CL-H300SV — drukarka etykiet z obudową antybakteryjną',
  seoDescription: 'Drukarka etykiet Citizen CL-H300SV dla służby zdrowia i aptek: obudowa z jonami srebra, druk termiczny 4", 203 dpi, opaski i etykiety na próbki. Drukarka termiczna Citizen CL-H300SV, CL-H300SV Citizen. PN: CLH300SVXEWNXXA.',
  description: `Citizen CL-H300SV to 4-calowa biurkowa drukarka etykiet z samoochronną obudową. Tworzywo zawiera jony srebra i hamuje rozwój bakterii. Drukarka ma znak SIAA, potwierdzający spełnienie normy ISO 22196. Obudowę zaprojektowano także z myślą o odporności na agresywne środki dezynfekcyjne.

Citizen przeznacza ten model dla ochrony zdrowia, aptek, hotelarstwa, kuchni i handlu. W placówce medycznej drukuje opaski dla pacjentów i etykiety na próbki. Obudowa ma prostą bryłę bez trudno dostępnych zagłębień, dlatego łatwo się ją czyści. Mała podstawa mieści się na ciasnym stanowisku.

Druk jest termiczny i nie wymaga taśmy barwiącej. Głowica 203 dpi pozwala drukować z prędkością do 200 mm/s. Szerokość wydruku sięga 104 mm, a materiał może mieć 25–118 mm szerokości. Mechanizm Hi-Lift otwiera komorę materiału, a ClickClose ją zamyka.

Ta konfiguracja ma białą obudowę i port USB. Gniazdo karty interfejsu przyjmuje opcjonalnie Ethernet, Wi-Fi, Bluetooth, RS-232 lub USB Host z LAN. Dzięki Cross-Emulation drukarka sama rozpoznaje polecenia ZPL2 oraz DMX. Citizen udziela 2 lat gwarancji, a na głowicę 6 miesięcy albo 30 km druku.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-dla-sluzby-zdrowia', 'biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  manufacturerId: 'citizen',
  priceFrom: 1166.42,
  images: [
    '/images/products/CLH300SVXEWNXXA.png',
    '/images/products/CLH300SVXEWNXXA-2.png',
    '/images/products/CLH300SVXEWNXXA-3.png',
    '/images/products/CLH300SVXEWNXXA-4.png',
    '/images/products/CLH300SVXEWNXXA-5.png',
  ],
  imageDescriptions: [
    'Citizen CL-H300SV — biała drukarka etykiet, widok pod kątem z przodu i z boku, szczelina wydruku i panel z jednym przyciskiem',
    'Citizen CL-H300SV — widok z przodu: szczelina wydruku z listwą do odrywania, diody stanu i przycisk',
    'Citizen CL-H300SV z otwartą pokrywą Hi-Lift: głowica, wałek i niebieskie prowadnice rolki',
    'Citizen CL-H300SV — widok z tyłu: szczelina na składankę, port USB, port zasilania urządzeń USB, gniazdo DC 24 V, włącznik i zaślepka gniazda karty interfejsu',
    'Citizen CL-H300SV z wydrukowanymi małymi etykietami medycznymi z kodami kreskowymi, widok pod kątem',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termiczny (bez taśmy barwiącej)',
    rozdzielczosc: '203 dpi (8 punktów/mm)',
    predkoscDruku: 'Do 200 mm/s (8 ips)',
    szerokoscDruku: 'Do 104 mm',
    szerokoscEtykiet: '25–118 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka etykiet z obudową antybakteryjną' },
    { name: 'Metoda druku', value: 'Termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 200 mm/s (8 ips)' },
    { name: 'Szerokość druku', value: 'Do 104 mm' },
    { name: 'Obudowa', value: 'Biała; tworzywo z jonami srebra, hamujące rozwój bakterii; znak SIAA zgodny z ISO 22196; obudowa przygotowana do dezynfekcji' },
    { name: 'Szerokość materiału', value: '25–118 mm' },
    { name: 'Grubość materiału', value: '63,5–190 µm' },
    { name: 'Rolka materiału', value: 'Średnica zewnętrzna do 127 mm; gilza 25,4 lub 38,1 mm' },
    { name: 'Rodzaje materiałów', value: 'Rolka lub składanka: etykiety wycinane, etykiety ciągłe, kartoniki, bilety' },
    { name: 'Czujniki materiału', value: 'Przesuwane czujniki przerwy i czarnego znacznika' },
    { name: 'Interfejs standardowy', value: 'USB 2.0 Full Speed' },
    { name: 'Karty interfejsu (opcja)', value: 'RS-232C, Bluetooth, Ethernet 10/100, Wi-Fi z Ethernetem, USB Host z LAN' },
    { name: 'Port zasilania urządzeń USB', value: '5 V DC, maks. 2,1 A' },
    { name: 'Emulacje', value: 'Cross-Emulation (automatyczne przełączanie Zebra ZPL2 i Datamax DMX), Eltron EPL2, interpreter CBI BASIC' },
    { name: 'Pamięć', value: 'Flash 16 MB (4 MB dla użytkownika), SDRAM 32 MB (4 MB dla użytkownika)' },
    { name: 'Panel obsługi', value: 'Jeden przycisk, diody stanu, sygnał dźwiękowy; górna i dolna listwa do odrywania' },
    { name: 'Zasilanie', value: 'Zasilacz sieciowy: wejście 100–240 V AC, 50/60 Hz; wyjście 24 V DC, 2,5 A' },
    { name: 'Wymiary (szer. × gł. × wys.)', value: '170 × 207 × 151,3 mm' },
    { name: 'Waga', value: '2,0 kg' },
    { name: 'Warunki pracy', value: 'Praca 0–40°C, druk 5–35°C; wilgotność 30–80% (bez kondensacji)' },
    { name: 'Warunki przechowywania', value: '−20–60°C; wilgotność 5–85% (bez kondensacji)' },
    { name: 'Zgodność z normami', value: 'EN 62368-1, EN 55032 klasa B, EN 55035, FCC klasa B, RoHS, ENERGY STAR' },
    { name: 'W zestawie', value: 'Drukarka, zasilacz sieciowy, przewód zasilający, oś i prowadnica rolki, przewód USB, skrócona instrukcja' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 6 miesięcy lub 30 km druku' },
  ],
  applications: [
    'Opaski identyfikacyjne dla pacjentów',
    'Etykiety na próbki',
    'Etykiety w aptece',
    'Etykiety zamówień i świeżej żywności w gastronomii',
    'Etykiety w hotelarstwie i handlu',
  ],
  variants: [
    {
      partNumber: 'CLH300SVXEWNXXA',
      name: 'Biała obudowa, USB, bez obcinarki',
      attributes: {},
      priceFrom: 1166.42,
      availability: 'available',
    },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Co oznacza obudowa antybakteryjna w Citizen CL-H300SV?',
      answer: 'Tworzywo obudowy zawiera jony srebra, które hamują rozwój bakterii na powierzchni drukarki. Drukarka ma znak SIAA potwierdzający spełnienie normy ISO 22196. Obudowa jest też przygotowana do dezynfekcji i odporna na agresywne środki dezynfekcyjne.',
    },
    {
      question: 'Jak czyścić CL-H300SV?',
      answer: 'Powierzchnię obudowy przeciera się miękką ściereczką lub wacikiem z niewielką ilością alkoholu etylowego. Nie wolno używać benzenu, acetonu, rozcieńczalnika ani innych rozpuszczalników. Środków chemicznych nie rozpyla się na drukarkę, a płyn nie może się na nią rozlać.',
    },
    {
      question: 'Czym CL-H300SV różni się od Citizen CL-E300?',
      answer: 'CL-H300SV powstała na bazie CL-E300EX. Ma białą obudowę z tworzywa antybakteryjnego i znakiem SIAA. W standardzie ma USB oraz gniazdo opcjonalnej karty interfejsu. [Citizen CL-E300](/produkt/citizen-cl-e300) ma fabrycznie Ethernet, USB i RS-232. Obie są drukarkami termicznymi 203 dpi o prędkości do 200 mm/s.',
    },
    {
      question: 'Czy CL-H300SV drukuje opaski dla pacjentów?',
      answer: 'Tak. Opaski dla pacjentów i etykiety na próbki są wśród zastosowań drukarki w ochronie zdrowia. Drukarka przyjmuje termiczne opaski o szerokości 25–118 mm; grubość materiału nie może przekroczyć 190 µm.',
    },
    {
      question: 'Jak podłączyć CL-H300SV do sieci szpitalnej?',
      answer: 'Konfiguracja CLH300SVXEWNXXA ma port USB. Do pracy w sieci potrzebna jest opcjonalna karta interfejsu: Ethernet, Wi-Fi z Ethernetem albo USB Host z LAN. Dostępne są także karty Bluetooth i RS-232C. Karty sieciowe obsługują druk XML.',
    },
    {
      question: 'Czy CL-H300SV przyjmie dane z systemu przygotowanego pod drukarki Zebra?',
      answer: 'Tak. Funkcja Cross-Emulation sama rozpoznaje język danych i przełącza drukarkę między Zebra ZPL2 a Datamax DMX. Obsługiwane są też Eltron EPL2 i interpreter CBI BASIC. Sterowniki są dostępne dla systemów Windows, Linux i macOS.',
    },
    {
      question: 'Jakie są alternatywy dla Citizen CL-H300SV?',
      answer: 'Podobną klasę urządzeń reprezentują: [Honeywell PC45d Healthcare](/produkt/honeywell-pc45d-hc) z obudową przygotowaną do dezynfekcji i ekranem dotykowym, [Zebra ZD421-HC](/produkt/zebra-zd421-hc), [Zebra ZD621-HC](/produkt/zebra-zd621-hc), [TSC DH240THC](/produkt/tsc-dh240thc), [TSC TH240THC](/produkt/tsc-th240thc) oraz [SATO CT4-LX-HC](/produkt/sato-ct4-lx-hc). Ich parametry zestawia [kategoria drukarek medycznych](/drukarki-dla-sluzby-zdrowia).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa Citizen CL-H300SV (PL)', type: 'datasheet', url: '/downloads/citizen-cl-h300sv-datasheet-pl.pdf', size: '258 KB' },
    { name: 'Karta katalogowa Citizen CL-H300SV (EN)', type: 'datasheet', url: '/downloads/citizen-cl-h300sv-datasheet-en.pdf', size: '219 KB' },
    { name: 'Instrukcja obsługi CL-H300SV (EN)', type: 'manual', url: '/downloads/citizen-cl-h300sv-instrukcja-en.pdf', size: '7,8 MB' },
  ],
  relatedProducts: ['honeywell-pc45d-hc', 'zebra-zd421-hc', 'zebra-zd621-hc', 'tsc-dh240thc', 'tsc-th240thc', 'sato-ct4-lx-hc', 'citizen-cl-e300'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.citizen-systems.com/en/products/printer/label/cl-h300sv',
}

// Integracja w products.ts dołącza tę listę do katalogu i rozdziela karty do podkategorii według `subcategoryIds`.
export const honeywellCitizenHcProducts: Product[] = [pc45dHc, clH300sv]
