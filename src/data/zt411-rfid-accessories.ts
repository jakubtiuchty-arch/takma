import type { Product } from './products'

// Potwierdzone akcesoria modelu 227842 w Zebra Solutions Pathway, 15.10.2026.
// Osobna karta odklejaka: P1105147-019 jest do ZT411, nie P1105147-020 (ZT421).
export const zt411RfidAdditionalAccessories: Product[] = [
  {
    id: 'zebra-peel-zt411-p1105147-019', slug: 'zebra-odklejak-zt411-p1105147-019',
    name: 'Odklejak Zebra ZT411 — P1105147-019',
    shortDescription: 'Odklejak do drukarki Zebra ZT411, także wersji RFID. Oddziela wydrukowaną etykietę od podkładu.',
    description: 'Odklejak Zebra P1105147-019 oddziela wydrukowaną etykietę od podkładu w drukarce ZT411. Może współpracować z opcjonalnym nawijakiem podkładu P1058930-052. Nawijak jest sprzedawany osobno. Do ZT411 wybierz PN P1105147-019; część P1105147-020 jest przeznaczona do ZT421. Przed montażem sprawdź konfigurację drukarki i sposób podawania wybranych etykiet RFID.',
    images: ['/images/products/P1105147-019.png'],
    specifications: [{ name: 'Part Number', value: 'P1105147-019' }, { name: 'Kompatybilność', value: 'Zebra ZT411, ZT411 RFID' }, { name: 'Typ', value: 'Odklejak etykiet; nawijak podkładu sprzedawany osobno' }],
  },
  {
    id: 'zebra-wifi6-p1083320-037g', slug: 'zebra-wifi6-p1083320-037g',
    name: 'Moduł Wi-Fi 6 Zebra — P1083320-037G',
    shortDescription: 'Moduł Wi-Fi 6 i Bluetooth 5.3 do drukarek Zebra ZT411, ZT421, ZT610 i ZT620. Wersja ROW do użytku w Europie.',
    description: 'Moduł Zebra P1083320-037G dodaje Wi-Fi 6 (802.11ax) i Bluetooth 5.3 do zgodnej drukarki ZT411, ZT421, ZT610 lub ZT620. Jest przeznaczony dla regionu ROW, z wyłączeniem USA, Kanady i Japonii. Przed montażem sprawdź wersję oprogramowania drukarki i dostępność gniazda rozszerzeń. Wariant ZT41142-T0EG0G0Z ma już fabryczne Wi-Fi 6 i nie wymaga dodatkowego modułu.',
    images: ['/images/products/P1083320-037G.jpg'],
    specifications: [{ name: 'Part Number', value: 'P1083320-037G' }, { name: 'Kompatybilność', value: 'Zebra ZT411 / ZT411 RFID, ZT421, ZT610, ZT620' }, { name: 'Łączność', value: 'Wi-Fi 6 (802.11ax), Bluetooth 5.3' }, { name: 'Region', value: 'ROW — poza USA, Kanadą i Japonią' }],
  },
  ...([['203', 'P1105147-304'], ['300', 'P1105147-306']] as const).map(([resolution, pn]) => ({
    id: `zebra-zt411-rfid-printhead-${pn.toLowerCase()}`, slug: `zebra-glowica-rfid-${pn.toLowerCase()}`,
    name: `Głowica ${resolution} dpi Zebra ZT411 RFID STRIPLINE — ${pn}`,
    shortDescription: `Głowica ${resolution} dpi do Zebra ZT411 RFID z układem STRIPLINE. Dobierz ją do generacji RFID i rozdzielczości drukarki.`,
    description: `Głowica Zebra ${pn} służy do druku w rozdzielczości ${resolution} dpi w ZT411 RFID z układem STRIPLINE. Nie jest uniwersalną głowicą do wszystkich wersji ZT411 ani głowicą do wersji On-metal. Przed zamówieniem sprawdź PN drukarki, typ układu RFID oraz rozdzielczość. Wymiana samej głowicy nie służy do zmiany rozdzielczości urządzenia.`,
    images: ['/images/products/P1105147-304.jpeg'],
    specifications: [{ name: 'Part Number', value: pn }, { name: 'Kompatybilność', value: `Zebra ZT411 RFID STRIPLINE, ${resolution} dpi; bez wersji On-metal` }, { name: 'Rozdzielczość', value: `${resolution} dpi` }],
  })),
].map(item => ({
  ...item,
  seoTitle: item.name,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  imageDescriptions: [item.name],
  tags: ['magazyn', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zt411-rfid'], downloads: [], createdAt: '2026-10-15',
}))

export const zt411RfidAccessoryIds = [
  'zebra-cutter-zt411',
  'zebra-peel-zt411-p1105147-019',
  'zebra-rewind-zt411',
  'zebra-wifi6-p1083320-037g',
  'zebra-module-wifi-zt111',
  'zebra-platen-zt411',
  'zebra-zt411-rfid-printhead-p1105147-304',
  'zebra-zt411-rfid-printhead-p1105147-306',
  'zebra-lpt-zt411',
  'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r',
  'zebra-cleaning-pens-zd621r',
  'zebra-cleaning-swabs-zd621r',
]

// Istniejące karty też otrzymują ceny serwerowe z API dystrybucji.
export const zt411RfidExistingAccessorySlugs = [
  'zebra-gilotyna-zt410-zt411', 'zebra-nawijak-podkladu-zt410-zt411',
  'zebra-modul-wifi-zt111-zt231-zt411-zt421-zt510-zt610-zt620',
  'zebra-walek-dociskowy-zt410-zt411', 'zebra-interfejs-lpt-zt410-zt411-zt420-zt421',
  'zebra-klawiatura-zkdu-001-00', 'zebra-przewod-usb-105850-006',
  'zebra-pisaki-czyszczace-105950-035', 'zebra-patyczki-czyszczace-47362',
]
