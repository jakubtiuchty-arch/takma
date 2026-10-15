import type { Product } from './products'

// RFID-specific serialized heads, Solutions Pathway model 1111130, 15.10.2026.
export const zt231RfidAdditionalAccessories: Product[] = [
  ...([['203', 'P1123335-156'], ['300', 'P1123335-157']] as const).map(([dpi, pn]) => ({
    id: `zebra-zt231-rfid-printhead-${pn.toLowerCase()}`,
    slug: `zebra-glowica-zt231-rfid-${pn.toLowerCase()}`,
    name: `Głowica ${dpi} dpi Zebra ZT231 RFID — ${pn}`,
    shortDescription: `Głowica ${dpi} dpi do drukarki Zebra ZT231R RFID. Dobierz część do rozdzielczości i wersji urządzenia.`,
    description: `Głowica Zebra ${pn} służy do druku w rozdzielczości ${dpi} dpi w drukarce ZT231R RFID. Jest częścią z indywidualnym numerem seryjnym. Nie dobieraj jej wyłącznie po nazwie ZT231. Przed wymianą sprawdź rozdzielczość, wersję RFID i numer seryjny drukarki. Sama wymiana głowicy nie służy do zmiany rozdzielczości urządzenia.`,
    images: [pn === 'P1123335-156' ? '/images/products/P1123335-156-framed.png' : `/images/products/${pn}.jpg`],
    specifications: [{ name: 'Part Number', value: pn }, { name: 'Kompatybilność', value: `Zebra ZT231R RFID, ${dpi} dpi` }, { name: 'Rozdzielczość', value: `${dpi} dpi` }],
  })),
  {
    id: 'zebra-applicator-zt231-p1123335-025',
    slug: 'zebra-interfejs-aplikatora-zt231-p1123335-025',
    name: 'Interfejs aplikatora Zebra ZT231 — P1123335-025',
    shortDescription: 'Karta interfejsu aplikatora do Zebra ZT231, także wersji RFID. Służy do integracji drukarki z zewnętrznym układem sterowania.',
    description: 'Interfejs Zebra P1123335-025 umożliwia połączenie drukarki ZT231 z zewnętrznym układem sterowania aplikatora. Pasuje także do ZT231 RFID. Jest kartą rozszerzeń, a nie kompletnym aplikatorem etykiet. Integracja wymaga zgodnego sterowania, przewodów i konfiguracji sygnałów. Elementy te dobierz osobno do stanowiska.',
    images: ['/images/products/P1123335-025.jpg'],
    specifications: [{ name: 'Part Number', value: 'P1123335-025' }, { name: 'Kompatybilność', value: 'Zebra ZT231, ZT231 RFID' }, { name: 'Typ', value: 'Karta interfejsu aplikatora' }],
  },
].map(item => ({
  ...item, seoTitle: item.name,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'zebra',
  imageDescriptions: [item.name], tags: ['magazyn', 'produkcja'],
  availability: 'unavailable', isNew: false, isBestseller: false,
  applications: [], compatibleAccessories: [], relatedAccessories: ['zebra-zt231-rfid'], downloads: [], createdAt: '2026-10-15',
}))

export const zt231RfidAccessoryIds = [
  'zebra-cutter-zt111', 'zebra-dispenser-zt111', 'zebra-module-wifi-zt111', 'zebra-platen-roller-zt111',
  'zebra-zt231-rfid-printhead-p1123335-156', 'zebra-zt231-rfid-printhead-p1123335-157',
  'zebra-applicator-zt231-p1123335-025', 'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r', 'zebra-cleaning-pens-zd621r', 'zebra-cleaning-swabs-zd621r',
]

export const zt231RfidExistingAccessorySlugs = [
  'zebra-gilotyna-zt111-zt231', 'zebra-dyspenser-zt111-zt231', 'zebra-walek-dociskowy-zt220-zt230-zt231',
]
