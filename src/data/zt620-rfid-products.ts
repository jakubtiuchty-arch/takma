import type { Product } from './products'

export const zt620RfidAccessoryIds = [
  'zebra-cutter-zt620',
  'zebra-rewind-zt620',
  'zebra-wifi6-p1083320-037g',
  'zebra-platen-zt620',
  'zebra-printhead-zt620-203',
  'zebra-printhead-zt620-300',
  'zebra-module-wifi-zt111',
  'zebra-applicator-p1083320-038',
  'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r',
  'zebra-cleaning-pens-zd621r',
  'zebra-cleaning-swabs-zd621r',
]

export const zt620RfidAccessorySlugs = [
  'zebra-gilotyna-zt620', 'zebra-nawijak-wewnetrzny-zt620',
  'zebra-walek-dociskowy-zt620', 'zebra-glowica-203dpi-zt620',
  'zebra-glowica-300dpi-zt620',
]

// Standard Configurations EU/ROW: Solutions Pathway, model 203890, 15.10.2026.
// Ceny i stany pobiera integracja dystrybucji po PN, bez cen statycznych.
export const zt620RfidProduct: Product = {
  id: 'zebra-zt620-rfid', slug: 'zebra-zt620-rfid',
  name: 'Zebra ZT620 RFID', seoH1: 'Zebra ZT620 RFID',
  seoTitle: 'Zebra ZT620 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZT620 RFID – 6-calowa drukarka RFID UHF 203 lub 300 dpi. Nadruk do 168 mm z prędkością do 305 mm/s, Gigabit Ethernet i metalowa obudowa.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT620 RFID do druku i kodowania szerokich etykiet RAIN UHF. Druk do 168 mm, 203 lub 300 dpi, Gigabit Ethernet.',
  description: `Zebra ZT620 RFID to przemysłowa drukarka RFID UHF w klasie 6 cali, z polem nadruku 168 mm. Koduje znaczniki EPC Gen 2 v2.1 zgodne z ISO/IEC 18000-63 i RFID RAIN. Drukuje z prędkością do 305 mm/s.

## ZT62062-T0E01C0Z i ZT62063-T0E01C0Z

Każda z nich ma fabryczny koder RFID i tryb odrywania etykiet. ZT62062-T0E01C0Z ma głowicę 203 dpi, a ZT62063-T0E01C0Z głowicę 300 dpi. Wydruk ciągły ma do 3810 mm przy 203 dpi i do 2540 mm przy 300 dpi. W serii ZT600 koder RFID można też zamontować samodzielnie w drukarce bez RFID.

## Materiał do 178 mm

Przy odrywaniu i obcinaniu materiał ma 51–178 mm szerokości. Przy odklejaniu i nawijaniu zakres wynosi 51–171 mm. Taśma do 450 m ma 51–174 mm szerokości i gilzę 25,4 mm. Rolka może mieć 203 mm średnicy na gilzie 76 mm, a grubość materiału wynosi 0,058–0,25 mm.

## Trwała blokada pamięci ATA Spec 2000

Drukarka obsługuje trwałą blokadę pamięci użytkownika zgodną z ATA Spec 2000. Wspiera też serializację opartą na układach wielu dostawców. Ma 1 GB RAM, 2 GB Flash, Gigabit Ethernet, RS-232, USB 2.0 i Bluetooth 4.0. Waży 26 kg.

Węższa [Zebra ZT610 RFID](/produkt/zebra-zt610-rfid) drukuje do 104 mm, ale jako jedyna w serii ma głowicę 600 dpi.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'zebra',
  images: ['/images/products/zt620_1_D_s.png'],
  imageDescriptions: [
    'Zebra ZT620 RFID — przemysłowa drukarka i koder etykiet, widok z lewej strony',
  ],
  tags: ['produkcja', 'magazyn', 'logistyka'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203 lub 300 dpi',
    predkoscDruku: 'do 305 mm/s (203 dpi) lub 203 mm/s (300 dpi)',
    szerokoscDruku: 'do 168 mm', szerokoscEtykiet: '51–178 mm przy odrywaniu',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID; fabryczny moduł Global ROW' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Prędkość nadruku', value: 'do 305 mm/s (203 dpi), 203 mm/s (300 dpi); wydajność kodowania zależy od materiału i danych' },
    { name: 'Szerokość druku', value: 'do 168 mm' },
    { name: 'Szerokość mediów', value: '51–178 mm przy odrywaniu i cięciu; 51–171 mm przy odklejaniu i nawijaniu' },
    { name: 'Odstęp wkładek RFID', value: '16 mm lub mniej dla zgodnych wkładek; wymaga doboru i kalibracji materiału' },
    { name: 'Grubość mediów', value: '0,058–0,25 mm' },
    { name: 'Rolka etykiet', value: 'Średnica do 203 mm; gilza 76 mm' },
    { name: 'Taśma barwiąca', value: 'Długość do 450 m; szerokość 51–174 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Gigabit Ethernet, Bluetooth 4.0' },
    { name: 'Wi-Fi', value: 'Opcjonalne; oferowane PN nie mają fabrycznego Wi-Fi' },
    { name: 'Odbiór etykiet w oferowanych PN', value: 'Ręczne odrywanie; bez fabrycznego obcinacza i nawijaka' },
    { name: 'Pamięć', value: '1 GB RAM i 2 GB Flash' },
    { name: 'System i języki', value: 'Link-OS, ZPL, ZPL II, XML; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '505 × 341,45 × 395,68 mm' },
    { name: 'Masa', value: '26 kg' },
    { name: 'Zasilanie', value: '90–265 V AC, 47–63 Hz' },
    { name: 'Temperatura pracy', value: '5–40°C przy druku termotransferowym; 0–40°C przy druku termicznym bezpośrednim' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z fabrycznym RFID Global ROW oraz przewody zasilające EU i UK' },
  ],
  variants: [
    { partNumber: 'ZT62062-T0E01C0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość druku': 'do 305 mm/s' }, availability: 'unavailable' },
    { partNumber: 'ZT62063-T0E01C0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Prędkość druku': 'do 203 mm/s' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Prędkość druku': 'Maksymalna prędkość nadruku: 12 ips przy 203 dpi i 8 ips przy 300 dpi. Kodowanie RFID może zmniejszyć wydajność zadania.',
  },
  applications: ['Szerokie etykiety UHF z trwałą blokadą pamięci', 'Kodowanie etykiet RFID 6-calowych w centrach dystrybucji'],
  compatibleAccessories: [], relatedAccessories: zt620RfidAccessoryIds,
  faq: [
    { question: 'Czy ZT620 RFID występuje w wersji 600 dpi?', answer: 'Nie. Głowica 600 dpi jest dostępna tylko w ZT610. ZT620 RFID ma 203 lub 300 dpi.' },
    { question: 'Jak szeroka może być etykieta w ZT620 RFID?', answer: 'Materiał może mieć do 178 mm przy odrywaniu i obcinaniu oraz do 171 mm przy odklejaniu. Pole nadruku ma 168 mm.' },
    { question: 'Jakie zasilanie przyjmuje ZT620 RFID?', answer: '90–265 V AC przy 47–63 Hz. Zasilacz ma moc 250 W i certyfikat ENERGY STAR.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZT610 / ZT620 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zt600-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZT600 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt600-series-rfid-specification-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Katalog części ZT600 (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/fact-sheet/zt600-series-parts-catalog-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja obsługi ZT620 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt620/instrukcja-po-polsku', size: 'Online' },
    { name: 'Sterowniki i wsparcie Zebra ZT620', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt620.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt620', 'zebra-zt610-rfid', 'zebra-zt421-rfid', 'zebra-zt411-rfid'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/industrial/zt600-series/zt620-rfid.html',
}
