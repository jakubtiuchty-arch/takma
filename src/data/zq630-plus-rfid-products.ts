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
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-6600mah-zq630-plus', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-zasilacz-samochodowy-zq5', 'zebra-kabel-usb-zq610',
  'zebra-kabel-db9-zq610', 'zebra-klips-paska-zq610',
]

export const zq630PlusRfidProduct: Product = {
  id: 'zebra-zq630-plus-rfid', slug: 'zebra-zq630-plus-rfid', name: 'Zebra ZQ630 Plus RFID', seoH1: 'Zebra ZQ630 Plus RFID',
  seoTitle: 'Zebra ZQ630 Plus RFID — drukarka RFID UHF 203 dpi',
  seoDescription: 'Zebra ZQ630 Plus RFID – mobilna drukarka RFID UHF 203 dpi z obsługą Gen2X. Nadruk 104 mm, Wi-Fi 6 i Bluetooth 5.3, bateria 6600 mAh, IP54.',
  shortDescription: 'Mobilna drukarka Zebra ZQ630 Plus RFID v2 drukuje i koduje etykiety RAIN UHF przy towarze. Druk do 104 mm, Wi-Fi 6 i Bluetooth 5.3.',
  description: `Zebra ZQ630 Plus RFID to mobilna drukarka RFID UHF z kolorowym wyświetlaczem 288 × 240 pikseli. Koduje znaczniki zgodne z EPC Gen 2 V2, ISO/IEC 18000-63 i RAIN RFID oraz obsługuje Gen2X. Drukuje termicznie bezpośrednio na szerokości do 104 mm z prędkością do 115 mm/s.

## Kalibracja RFID raz dla typu materiału

Kodowanie adaptacyjne usuwa złożone wytyczne rozmieszczenia wkładek. Kalibrację RFID wykonuje się raz dla danego typu materiału, bez powtarzania przy kolejnej rolce tego samego typu. Wkładki mogą występować co 16 mm. Obsługiwane standardy danych to między innymi SGTIN-96, DSGTIN+, GS1 TDS 2.0 i RAIN ISO CIN.

## Wi-Fi 6 z Bluetooth 5.3 i Ethernet przez stację

Moduł ZebraNet Wi-Fi 6 (802.11ax) pracuje w pasmach 2,4 i 5 GHz i równolegle obsługuje Bluetooth 5.3. Wspiera WPA3 oraz roaming 802.11k, 802.11v i 802.11r. Ethernet 10/100 jest dostępny przez [stację dokującą Ethernet](/produkt/zebra-stacja-ethernet-p1050667-020), która ładuje też baterię. Przewodowo drukarka łączy się przez USB 2.0 ze złączem Mini-B lub 14-stykowy port RS-232C.

## Rolka 66 mm na gilzie 19 lub 34,9 mm

Rolka ma do 66 mm średnicy, na gilzie 19 lub 34,9 mm. Materiał z podkładem ma 51–112 mm szerokości. Wersja RFID wymaga czarnego znacznika i nie wykrywa przerw. Tryb odklejania z czujnikiem obecności etykiety wydaje etykiety po jednej. Bateria PowerPrecision+ ma 6600 mAh i 47,5 Wh, a ładowarka jest wbudowana.

[Zebra ZQ521 RFID](/produkt/zebra-zq521-rfid) drukuje do 127 mm/s w trybie Draft, ale ma baterię 3250 mAh.`,
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
    { name: 'Długość wydruku', value: '12,7–813 mm' },
    { name: 'Materiał', value: 'Szerokość 51–112 mm; etykiety na podkładzie z czarnym znacznikiem; brak wykrywania przerw' },
    { name: 'Rolka', value: 'Średnica do 66 mm; gilza 19 lub 34,9 mm; w oferowanym PN 19 mm' },
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
    { name: 'Gwarancja', value: 'Drukarka: 1 rok od daty wysyłki' },
  ],
  variants: [{ partNumber: 'ZQ63-RUXAE16-00', name: 'v2 — Wi-Fi 6, Bluetooth 5.3, RFID', attributes: {}, availability: 'unavailable' }],
  applications: ['Kodowanie znaczników Gen2X w drukarce mobilnej', 'Etykiety RFID na skrzynie i palety z wózka widłowego'],
  compatibleAccessories: [], relatedAccessories: zq630RfidAccessoryIds,
  faq: [
    { question: 'Czy ZQ630 Plus RFID obsługuje Gen2X?', answer: 'Tak. Drukarka koduje znaczniki EPC Gen 2 V2 i obsługuje Gen2X. Oferowany PN ZQ63-RUXAE16-00 to wersja v2.' },
    { question: 'Jak podłączyć ZQ630 Plus RFID do sieci przewodowej?', answer: 'Przez stację dokującą z portem Ethernet 10/100 Mb/s. Stacja ładuje baterię w drukarce, a dział IT może przez nią zdalnie aktualizować oprogramowanie.' },
    { question: 'Na jakiej gilzie musi być rolka do ZQ630 Plus RFID?', answer: 'Na gilzie 19 mm lub 34,9 mm, przy średnicy rolki do 66 mm. Oferowany PN ma gilzę 19 mm.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZQ630 Plus RFID (EN)', type: 'datasheet', url: '/datasheets/zebra-zq600-rfid-karta-en.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZQ630 Plus RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq600-series-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ630 Plus RFID', type: 'driver', url: 'https://www.zebra.com/gb/en/support-downloads/printers/passive-rfid/zq630-rfid-plus.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq630-plus', 'zebra-zd621r', 'zebra-zt231-rfid'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/printers/mobile/zq600-series/zq630-rfid-plus.html',
}
