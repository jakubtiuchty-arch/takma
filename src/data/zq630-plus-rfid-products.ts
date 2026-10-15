import type { Product } from './products'

// Aktywna konfiguracja EU Group E v2: Solutions Pathway, model 1238638, 15.10.2026.
export const zq630RfidAccessoryIds = [
  'zebra-ac-adapter-zq5', 'zebra-battery-zq630', 'zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5',
  'zebra-zq630-ethernet-cradle', 'zebra-zq630-charger-6', 'zebra-zq630-vehicle-cradle', 'zebra-zq630-handi-mount', 'zebra-zq630-cart-mount',
  'zebra-car-charger-zq5', 'zebra-usb-cable-zq610', 'zebra-cable-db9-zq610', 'zebra-belt-clip-zq610',
  'zebra-cleaning-pens-zd621r',
]

const additions = [
  { id: 'zebra-zq630-ethernet-cradle', slug: 'zebra-stacja-ethernet-p1050667-020', pn: 'P1050667-020', name: 'Stacja Ethernet EU Zebra ZQ630 / ZQ630 Plus', image: 'P1050667-020-framed.webp', description: 'Stacja Zebra P1050667-020 ładuje baterię w drukarce ZQ630 lub ZQ630 Plus, także wersji RFID. Łączy drukarkę z siecią Ethernet 10/100 do komunikacji i zdalnego zarządzania. Zestaw obejmuje zasilacz i przewód sieciowy EU. Drukarka jest sprzedawana osobno. Zdjęcie przedstawia stację i zasilacz, bez regionalnego przewodu sieciowego.' },
  { id: 'zebra-zq630-charger-6', slug: 'zebra-ladowarka-6-baterii-sac-mpp-6bcheu1-01', pn: 'SAC-MPP-6BCHEU1-01', name: 'Ładowarka 6 baterii Zebra ZQ500 / ZQ600', image: 'SAC-MPP-6BCHEU1-01.webp', description: 'Zestaw Zebra SAC-MPP-6BCHEU1-01 ładuje do sześciu zgodnych baterii PowerPrecision+ jednocześnie. Obejmuje dwie ładowarki 3-gniazdowe, zasilacz, przewód rozdzielający Y i przewód sieciowy EU. Pasuje do baterii ZQ630 Plus, także wersji RFID, oraz zgodnych baterii serii ZQ500 i ZQ600. Baterie są sprzedawane osobno.' },
  { id: 'zebra-zq630-vehicle-cradle', slug: 'zebra-stacja-pojazdowa-p1050667-026', pn: 'P1050667-026', name: 'Stacja pojazdowa Zebra ZQ630 / ZQ630 Plus', image: 'P1050667-026.webp', description: 'Stacja Zebra P1050667-026 mocuje drukarkę ZQ630 lub ZQ630 Plus, także wersję RFID, w pojeździe albo na wózku widłowym. Zestaw obejmuje przetwornicę zasilania 15–60 V DC. Stacja ładuje baterię w drukarce. Drukarka i opcjonalne ramię montażowe RAM są sprzedawane osobno. Przed montażem sprawdź napięcie instalacji i miejsce pracy urządzenia.' },
  { id: 'zebra-zq630-handi-mount', slug: 'zebra-uchwyt-handi-mount-p1050667-032', pn: 'P1050667-032', name: 'Uchwyt Zebra Handi-Mount z podstawą do ZQ630', image: 'P1050667-032.webp', description: 'Uchwyt Zebra P1050667-032 mocuje drukarkę ZQ630 lub ZQ630 Plus, także wersję RFID, na ramieniu RAM. Zestaw obejmuje podstawę montażową. Umożliwia ustawienie położenia drukarki na stałym stanowisku. Drukarka pokazana na zdjęciu nie jest częścią zestawu. Uchwyt nie zastępuje zasilacza ani stacji ładującej.' },
  { id: 'zebra-zq630-cart-mount', slug: 'zebra-uchwyt-wozka-mnt-mpp-crtmnt1-01', pn: 'MNT-MPP-CRTMNT1-01', name: 'Uchwyt do wózka Zebra ZQ630 / ZQ630 Plus', image: 'MNT-MPP-CRTMNT1-01.webp', description: 'Uchwyt Zebra MNT-MPP-CRTMNT1-01 mocuje drukarkę ZQ630 lub ZQ630 Plus, także wersję RFID, do zgodnej konstrukcji wózka, regału lub wózka widłowego. Przed montażem sprawdź średnicę elementu mocującego, udźwig i miejsce na wymianę rolki. Drukarka oraz zasilanie są sprzedawane osobno.' },
]

export const zq630RfidAdditionalAccessories: Product[] = additions.map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`, shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  images: [`/images/products/${a.image}`], imageDescriptions: [`${a.name} — ${a.pn}${a.id === 'zebra-zq630-handi-mount' ? '; drukarka na zdjęciu jest sprzedawana osobno' : ''}`],
  tags: ['magazyn', 'logistyka'], availability: 'unavailable', isNew: false, isBestseller: false,
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Kompatybilność', value: 'Zebra ZQ630, ZQ630 Plus, ZQ630 RFID i ZQ630 Plus RFID; zgodnie z przeznaczeniem zestawu' }],
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zq630-plus-rfid', 'zebra-zq630-plus'],
  downloads: [{ name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf', size: 'PDF' }],
  createdAt: '2026-10-15',
}))

export const zq630RfidExistingAccessorySlugs = [
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-6800mah-zq630-plus', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-zasilacz-samochodowy-zq5', 'zebra-kabel-usb-zq610',
  'zebra-kabel-db9-zq610', 'zebra-klips-paska-zq610',
]

export const zq630PlusRfidProduct: Product = {
  id: 'zebra-zq630-plus-rfid', slug: 'zebra-zq630-plus-rfid', name: 'Zebra ZQ630 Plus RFID', seoH1: 'Zebra ZQ630 Plus RFID',
  seoTitle: 'Zebra ZQ630 Plus RFID — mobilna drukarka i koder UHF',
  seoDescription: 'Zebra ZQ630 Plus RFID v2 drukuje i koduje etykiety UHF przy towarze. PN ZQ63-RUXAE16-00, Wi-Fi 6, Bluetooth 5.3. Sprawdź cenę i akcesoria w TAKMA.',
  shortDescription: 'Mobilna drukarka Zebra ZQ630 Plus RFID v2 drukuje i koduje etykiety RAIN UHF przy towarze. Druk do 104 mm, Wi-Fi 6 i Bluetooth 5.3.',
  description: `Zebra ZQ630 Plus RFID to mobilna drukarka i koder etykiet RAIN UHF RFID. Przygotowuje nadruk i zapisuje identyfikator w etykiecie bezpośrednio przy towarze.

## Druk i kodowanie w miejscu pracy

Drukarka służy do oznaczania produktów, kartonów, pojemników oraz wyposażenia. Możesz nosić ją przy sobie albo zamontować na zgodnym wózku. Identyfikator EPC zapisany w etykiecie powiąż z rekordem w systemie magazynowym. Do integracji ustal źródło danych, format identyfikatora i obsługę błędnego kodowania.

Wbudowany moduł obsługuje UHF EPC Gen2, ISO/IEC 18000-63 i RAIN RFID. Aktualna wersja v2 obsługuje także Gen2X. Adaptacyjne kodowanie ułatwia kalibrację. Dla zgodnych materiałów minimalny odstęp kolejnych wkładek wynosi 16 mm. Przed wdrożeniem sprawdź zapis i odczyt wybranej etykiety na docelowej powierzchni.

Drukarka koduje i sprawdza etykietę w swoim torze materiałów. Do radiowego odczytu towarów na półkach potrzebujesz osobnego czytnika UHF RFID oraz oprogramowania.

## Aktualny PN v2 z Wi-Fi 6

Ta oferta obejmuje ZQ63-RUXAE16-00: wersję v2 dla grupy regionalnej E, z angielskimi czcionkami i kodowaniem RFID. Ma Wi-Fi 6, Bluetooth 5.3, wałek do etykiet z podkładem oraz gilzę 19 mm. Pasek na ramię i klips do paska są częścią konfiguracji. Starszy PN ZQ63-RUXAE14-00 został wycofany.

Wi-Fi 6 obsługuje pasma 2,4 i 5 GHz. Bluetooth umożliwia bezpośrednie połączenie ze zgodnym terminalem lub komputerem. NFC Print Touch ułatwia parowanie; nie służy do kodowania etykiet UHF. Ethernet 10/100 wymaga osobnej [stacji P1050667-020](/produkt/zebra-stacja-ethernet-p1050667-020).

## Etykiety RFID z czarnym znacznikiem

ZQ630 Plus RFID wymaga materiału z czarnym znacznikiem. Nie wykrywa przerw między etykietami. Nie przenoś automatycznie rolek dobranych do zwykłej ZQ630 Plus. Sprawdź położenie znacznika, wkładkę RFID, szerokość materiału i format rolki.

Drukarka wykonuje nadruk termiczny bezpośredni, bez taśmy barwiącej. Ma 203 dpi i drukuje z prędkością do 115 mm/s. Kodowanie może zmniejszyć wydajność zadania. Maksymalna szerokość nadruku wynosi 104 mm, a szerokość materiału 51–112 mm. Rolka może mieć średnicę do 66 mm. Oferowany PN ma gilzę 19 mm i nie jest wersją linerless.

## Bateria, ekran i warunki pracy

Wymienna bateria PowerPrecision+ ma nominalnie 6600 mAh i 47,5 Wh. Ekran kolorowy 288 × 240 px pokazuje stan baterii, połączeń i druku. Link-OS oraz narzędzia Zebra DNA wspierają konfigurację i zarządzanie urządzeniem.

Drukarka waży około 1,1 kg z baterią. Ma klasę IP54 i toleruje wielokrotne upadki z 1,83 m na beton. Zakres temperatury pracy wynosi od −20 do 50°C. Dobierz etykietę termiczną do warunków użytkowania i wymaganej trwałości nadruku.

## Ładowanie i akcesoria

Aby ładować baterię w drukarce z sieci, potrzebujesz [zasilacza EU P1031365-042](/produkt/zebra-zasilacz-ac-zq5-zq6). Możesz też ładować wyjętą baterię w zgodnej ładowarce 1-, 3- lub 6-gniazdowej. Zasilacz sieciowy, ładowarki i etykiety dobierz osobno. Sam przewód USB służy do komunikacji i nie zastępuje zasilacza do ładowania tej drukarki.

Do montażu w pojeździe dobierz stację i zasilanie zgodne z napięciem instalacji. Stacja P1050667-026 zawiera przetwornicę 15–60 V DC. Uchwyt Handi-Mount P1050667-032 zawiera podstawę; drukarka pokazana na jego zdjęciu jest sprzedawana osobno.

Jeśli potrzebujesz wyłącznie nadruku bez kodowania RFID, sprawdź [Zebra ZQ630 Plus](/produkt/zebra-zq630-plus). Jeśli drukarka ma pozostać na biurku, porównaj [Zebra ZD621R](/produkt/zebra-zd621r).

## Gwarancja

Gwarancja na drukarkę wynosi 12 miesięcy. Głowica w regionie EMEA ma ochronę przez 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej. Bateria ma 12 miesięcy gwarancji.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zq630-plus-rfid-framed.webp'], imageDescriptions: ['Zebra ZQ630 Plus RFID — mobilna drukarka z oznaczeniem UHF RFID, widok pod kątem'],
  tags: ['magazyn', 'logistyka', 'retail'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 dpi', predkoscDruku: 'do 115 mm/s', szerokoscDruku: 'do 104 mm', szerokoscEtykiet: '51–112 mm; materiał z czarnym znacznikiem' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Mobilna drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Oferowany PN', value: 'ZQ63-RUXAE16-00 — v2, grupa regionalna E' },
    { name: 'RFID', value: 'UHF EPC Gen2, Gen2X (v2), ISO/IEC 18000-63, RAIN RFID' },
    { name: 'Rodzaj druku', value: 'Termiczny bezpośredni; bez taśmy barwiącej' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Prędkość nadruku', value: 'do 115 mm/s; kodowanie może zmniejszyć wydajność' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Materiał', value: 'Szerokość 51–112 mm; etykiety na podkładzie z czarnym znacznikiem; brak wykrywania przerw' },
    { name: 'Rolka', value: 'Średnica do 66 mm; gilza 19 mm w oferowanym PN' },
    { name: 'Odstęp wkładek RFID', value: 'Od 16 mm dla zgodnego materiału, po kalibracji' },
    { name: 'Łączność bezprzewodowa', value: 'Wi-Fi 6 802.11ax (2,4/5 GHz), Bluetooth 5.3' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0 Mini-B, RS-232C; Ethernet 10/100 przez opcjonalną stację' },
    { name: 'NFC', value: 'Print Touch do parowania; nie jest koderem NFC' },
    { name: 'Bateria', value: 'PowerPrecision+ Li-Ion, nominalnie 6600 mAh, 47,5 Wh; wymienna' },
    { name: 'Ekran', value: 'Kolorowy LCD, 288 × 240 px' },
    { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; CPCL, EPL, ZPL' },
    { name: 'Klasa ochrony', value: 'IP54' },
    { name: 'Odporność na upadki', value: 'Wielokrotne upadki z 1,83 m na beton' },
    { name: 'Temperatura pracy', value: '−20 do 50°C' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '187 × 165 × 82,5 mm' },
    { name: 'Masa z baterią', value: 'Około 1,1 kg' },
    { name: 'W zestawie', value: 'Drukarka RFID v2 z baterią, pasek na ramię, klips do paska; gilza 19 mm' },
    { name: 'Do kupienia osobno', value: 'Zasilacz do ładowania lub ładowarka baterii, etykiety RFID, dodatkowe stacje i uchwyty' },
    { name: 'Gwarancja', value: 'Drukarka i bateria: 12 miesięcy; głowica EMEA: 12 miesięcy lub milion cali druku' },
  ],
  variants: [{ partNumber: 'ZQ63-RUXAE16-00', name: 'v2 — Wi-Fi 6, Bluetooth 5.3, RFID', attributes: {}, availability: 'unavailable' }],
  applications: ['Druk i kodowanie etykiet RFID przy towarze', 'Oznaczanie kartonów i pojemników w magazynie', 'Przygotowanie etykiet EPC podczas przyjęć i wydań', 'Druk mobilny przy stanowisku na wózku'],
  compatibleAccessories: [], relatedAccessories: zq630RfidAccessoryIds,
  faq: [
    { question: 'Czym ZQ630 Plus RFID różni się od zwykłej ZQ630 Plus?', answer: 'Wersja RFID ma koder UHF do zapisu i kontroli układu etykiety. Zwykła ZQ630 Plus wykonuje nadruk. Wersja RFID wymaga czarnego znacznika na materiale i nie wykrywa przerw między etykietami.' },
    { question: 'Jaki PN obejmuje ta oferta?', answer: 'Oferujemy ZQ63-RUXAE16-00: aktualną wersję v2, grupę regionalną E, Wi-Fi 6, Bluetooth 5.3, wałek do materiału z podkładem i gilzę 19 mm. Starszy ZQ63-RUXAE14-00 jest wycofany.' },
    { question: 'Czy mogę użyć zwykłej rolki etykiet z przerwą?', answer: 'Nie dobieraj jej wyłącznie na podstawie wymiarów. ZQ630 Plus RFID wymaga materiału z czarnym znacznikiem i nie wykrywa przerw. Do kodowania potrzebna jest dodatkowo zgodna wkładka RFID. Sprawdź materiał i wykonaj kalibrację.' },
    { question: 'Czy ta drukarka wymaga taśmy barwiącej?', answer: 'Nie. Drukuje termicznie bezpośrednio na materiale termoczułym. Kodowanie UHF wymaga etykiety z wkładką RFID. Oferowany PN jest wersją do materiału na podkładzie, a nie linerless.' },
    { question: 'Czy zasilacz jest w komplecie?', answer: 'Zasilacz do ładowania dobierz osobno, np. P1031365-042 z przewodem EU. Alternatywą jest zgodna ładowarka wyjętej baterii. Pasek na ramię i klips do paska są częścią oferowanego PN.' },
    { question: 'Czy ZQ630 Plus RFID odczyta całą półkę?', answer: 'Nie. Drukarka koduje i sprawdza etykietę podczas jej przygotowania. Do radiowej inwentaryzacji towarów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    { question: 'Czy mogę użyć sterowników ze starej ZQ630 RFID?', answer: 'Wersja Plus wymaga odpowiednich sterowników i oprogramowania dla ZQ630 Plus RFID. Pobierz je z działu wsparcia tego modelu. Nie zakładaj zgodności plików dla wcześniejszej ZQ630 RFID.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZQ630 Plus RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq600-series-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ630 Plus RFID', type: 'driver', url: 'https://www.zebra.com/gb/en/support-downloads/printers/passive-rfid/zq630-rfid-plus.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq630-plus', 'zebra-zd621r', 'zebra-zt231-rfid'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/printers/mobile/zq600-series/zq630-rfid-plus.html',
}
