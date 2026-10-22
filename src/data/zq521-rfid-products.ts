import type { Product } from './products'

const accessoryGuide = 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf'

export const zq521RfidAccessoryIds = [
  'zebra-ac-adapter-zq5', 'zebra-battery-zq5-standard', 'zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5',
  'zebra-battery-zq5-extended', 'zebra-soft-case-zq521', 'zebra-exoskeleton-zq521', 'zebra-zq630-charger-6',
  'zebra-zq5-vehicle-cradle', 'zebra-zq5-power-station-4', 'zebra-zq5-rugged-strap', 'zebra-zq5-mounting-plate',
  'zebra-usb-cable-zq5', 'zebra-car-charger-zq5', 'zebra-cleaning-pens-zd621r',
]

const additions = [
  { id: 'zebra-zq5-vehicle-cradle', slug: 'zebra-stacja-pojazdowa-p1063406-062', pn: 'P1063406-062', name: 'Stacja pojazdowa Zebra ZQ500', image: 'P1063406-062-framed.webp', description: 'Stacja Zebra P1063406-062 mocuje i ładuje jedną drukarkę serii ZQ500, także ZQ521 RFID. Pasuje do wersji z baterią standardową lub rozszerzoną oraz z egzoszkieletem. Aby korzystać ze stacji, potrzebujesz osobnego zasilacza sieciowego albo adaptera pojazdowego zgodnego z napięciem instalacji. Ramię RAM do montażu w pojeździe dobierz osobno. Drukarka i zasilacz nie są częścią zestawu.' },
  { id: 'zebra-zq5-power-station-4', slug: 'zebra-stacja-4-drukarek-p1063406-053', pn: 'P1063406-053', name: 'Stacja ładująca 4 drukarki Zebra ZQ500 EU', image: 'P1063406-053.webp', description: 'Stacja Zebra P1063406-053 ładuje do czterech drukarek serii ZQ500 jednocześnie, także ZQ521 RFID. Obsługuje baterie standardowe i rozszerzone oraz drukarki w egzoszkielecie. Zestaw obejmuje zasilacz i przewód europejski typu C. Drukarki widoczne na zdjęciu są sprzedawane osobno.' },
  { id: 'zebra-zq5-rugged-strap', slug: 'zebra-pasek-na-ramie-p1063406-035', pn: 'P1063406-035', name: 'Wzmocniony pasek na ramię Zebra ZQ500', image: 'P1063406-035.webp', description: 'Pasek Zebra P1063406-035 służy do noszenia drukarki serii ZQ500 na ramieniu, także modelu ZQ521 RFID. Ma metalowe zaczepy i długość 56 cali, około 142 cm. Drukarka jest sprzedawana osobno.' },
  { id: 'zebra-zq5-mounting-plate', slug: 'zebra-plyta-montazowa-p1063406-042', pn: 'P1063406-042', name: 'Płyta montażowa Zebra ZQ500', image: 'P1063406-042-framed.webp', description: 'Płyta Zebra P1063406-042 umożliwia stałe zamocowanie drukarki serii ZQ500 na zgodnym ramieniu RAM. Pasuje także do ZQ521 RFID. Ramię RAM, drukarka i zasilanie są sprzedawane osobno. Płyta nie jest potrzebna przy użyciu stacji pojazdowej P1063406-062 z ramieniem RAM. Nie zastępuje stacji ładującej.' },
]

export const zq521RfidAdditionalAccessories: Product[] = additions.map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`, shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  images: [`/images/products/${a.image}`], imageDescriptions: [`${a.name} — ${a.pn}${a.pn === 'P1063406-053' ? '; drukarki na zdjęciu są sprzedawane osobno' : ''}`],
  tags: ['magazyn', 'logistyka'], availability: 'unavailable', isNew: false, isBestseller: false,
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Kompatybilność', value: 'Zebra ZQ510, ZQ511, ZQ520, ZQ521, także wersje RFID' }],
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zq521-rfid', 'zebra-zq511-rfid', 'zebra-zq521', 'zebra-zq511'],
  downloads: [{ name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' }], createdAt: '2026-10-15',
}))

export const zq521RfidExistingAccessorySlugs = [
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-3250mah-zq511-zq521', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-bateria-6500mah-zq511-zq521', 'zebra-etui-pasek-zq521',
  'zebra-egzoszkielet-zq521', 'zebra-ladowarka-6-baterii-sac-mpp-6bcheu1-01', 'zebra-kabel-usb-twist-lock-zq5-zq6',
  'zebra-zasilacz-samochodowy-zq5', 'zebra-pisaki-czyszczace-105950-035',
]

export const zq521RfidProduct: Product = {
  id: 'zebra-zq521-rfid', slug: 'zebra-zq521-rfid', name: 'Zebra ZQ521 RFID', seoH1: 'Zebra ZQ521 RFID',
  seoTitle: 'Zebra ZQ521 RFID — drukarka RFID UHF 203 dpi',
  seoDescription: 'Zebra ZQ521 RFID – mobilna drukarka RFID UHF 203 dpi. Nadruk 104 mm, materiał 50,8–113 mm z czarnym znacznikiem, rolka 57 mm, Wi-Fi i Bluetooth 4.1.',
  shortDescription: 'Mobilna drukarka i koder RAIN UHF RFID. Druk do 104 mm, Wi-Fi 802.11ac, Bluetooth 4.1, bateria 3250 mAh i obudowa IP54.',
  description: `Zebra ZQ521 RFID to 4-calowa mobilna drukarka RFID UHF w obudowie IP54. Drukuje termicznie bezpośrednio na szerokości 104 mm i koduje znaczniki RAIN RFID zgodne z ISO/IEC 18000-63. Z baterią standardową waży 0,79 kg.

## Materiał 50,8–113 mm i rolka 57 mm

Szerokość materiału wynosi 50,8–113 mm, a rolka może mieć 57 mm średnicy. Czujnik czarnego znacznika ma stałe, środkowe położenie. Wersja RFID nie wykrywa przerw, dlatego materiał musi mieć czarny znacznik. Etykiety mogą mieć do 0,16 mm grubości, a paragony i zawieszki do 0,14 mm.

## Wi-Fi 802.11ac, Bluetooth 4.1 i Print Touch

Drukarka ma Wi-Fi 802.11ac w pasmach 2,4 i 5 GHz oraz Bluetooth 4.1 w trybie Classic i BLE. Obsługuje szybki roaming 802.11r. Zebra Print Touch paruje drukarkę z urządzeniem z NFC jednym dotknięciem. Łączność działa z systemami Android, iOS i Windows Mobile.

## Tryb kompensacji w niskich temperaturach

Tryb kompensacji w niskich temperaturach dostosowuje prędkość druku do otoczenia. Drukarka pracuje od −20 do 55°C, a ładuje się w zakresie 0–40°C. Bateria PowerPrecision+ ma 3250 mAh, opcjonalnie 6500 mAh. [Egzoszkielet do ZQ521](/produkt/zebra-egzoszkielet-zq521) zwiększa odporność na upadki do 3 m.

Mobilna [Zebra ZQ630 Plus RFID](/produkt/zebra-zq630-plus-rfid) przyjmuje rolkę do 66 mm i ma baterię 6600 mAh.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zq521-rfid-framed.webp'], imageDescriptions: ['Zebra ZQ521 RFID — mobilna drukarka z oznaczeniem UHF RFID, widok pod kątem'],
  tags: ['magazyn', 'logistyka', 'outdoor', 'retail'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 dpi', predkoscDruku: 'do 127 mm/s z Draft Mode', szerokoscDruku: 'do 104 mm', szerokoscEtykiet: '50,8–113 mm; czarny znacznik' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Mobilna drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Oferowany PN', value: 'ZQ52-BUW030E-00 — EMEA, bateria standardowa' },
    { name: 'RFID', value: 'UHF EPC Gen2 v2, ISO/IEC 18000-63, RAIN RFID; Adaptive Encoding' },
    { name: 'Rodzaj druku', value: 'Termiczny bezpośredni; bez taśmy barwiącej' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Prędkość nadruku', value: 'do 127 mm/s z Draft Mode; kodowanie może zmniejszyć wydajność' },
    { name: 'Materiał', value: 'Szerokość 50,8–113 mm; grubość 0,058–0,16 mm; czarny znacznik; brak wykrywania przerw' },
    { name: 'Średnica rolki', value: 'do 57 mm' },
    { name: 'Długość wydruku', value: 'Do 990 mm' },
    { name: 'Odstęp wkładek RFID', value: 'Od 16 mm dla zgodnych etykiet po kalibracji' },
    { name: 'Łączność', value: 'Wi-Fi 802.11ac 2,4/5 GHz, Bluetooth 4.1 Classic i BLE' },
    { name: 'USB', value: 'USB 2.0 On-The-Go, 12 Mb/s; złącze micro-B' },
    { name: 'NFC', value: 'Print Touch do parowania; bez kodowania NFC' },
    { name: 'Bateria standardowa', value: 'PowerPrecision+ Li-Ion, nominalnie 3250 mAh; wymienna' },
    { name: 'Bateria opcjonalna', value: '6500 mAh' },
    { name: 'Ekran', value: 'LCD z ikonami stanu' },
    { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash; użytkownik: 8 MB RAM i 64 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; CPCL, ZPL, ZBI 2.x' },
    { name: 'Klasa ochrony', value: 'IP54; IP65 z opcjonalnym egzoszkieletem' },
    { name: 'Odporność na upadki', value: '2 m na beton; do 3 m z egzoszkieletem' },
    { name: 'Temperatura pracy', value: '−20 do 55°C' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '158 × 155 × 67 mm' },
    { name: 'Masa z baterią standardową', value: 'Około 0,79 kg' },
    { name: 'W zestawie', value: 'Drukarka z koderem RFID, bateria standardowa, klips do paska' },
    { name: 'Do kupienia osobno', value: 'Zasilacz lub ładowarka baterii, etykiety RFID i dodatkowe wyposażenie' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata od daty wysyłki; bateria 1 rok; głowica 6 miesięcy' },
  ],
  variants: [{ partNumber: 'ZQ52-BUW030E-00', name: 'RFID — Wi-Fi, Bluetooth, bateria, EMEA', attributes: {}, availability: 'unavailable' }],
  applications: ['Etykiety RFID na palety w transporcie i dostawach', 'Oznaczanie niezgodności RFID na terenie sklepu'],
  compatibleAccessories: [], relatedAccessories: zq521RfidAccessoryIds,
  faq: [
    { question: 'Jaka jest maksymalna grubość materiału dla ZQ521 RFID?', answer: '0,16 mm dla etykiet i 0,14 mm dla zawieszek oraz paragonów. Minimalna grubość wynosi 0,058 mm.' },
    { question: 'Jak ZQ521 RFID pracuje w niskiej temperaturze?', answer: 'Zakres pracy zaczyna się od −20°C. Tryb kompensacji w niskich temperaturach równoważy prędkość druku, aby poprawić nadruk w zimnym otoczeniu.' },
    { question: 'Jak sparować ZQ521 RFID z telefonem?', answer: 'Przez Zebra Print Touch: telefon z NFC dotyka drukarki. Parowanie Bluetooth uruchamia się wtedy automatycznie, a telefon może otworzyć strony pomocy.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZQ511 / ZQ521 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zq511-zq521-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZQ511/ZQ521 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq511-zq521-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ521', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/mobile/zq521.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq521', 'zebra-zq630-plus-rfid', 'zebra-zd621r'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/mobile/zq500/zq521-rfid.html',
}
