import type { Product } from './products'

export const zt610RfidAccessoryIds = [
  'zebra-cutter-zt610',
  'zebra-rewind-zt610',
  'zebra-wifi6-p1083320-037g',
  'zebra-platen-zt610',
  'zebra-printhead-zt610-203',
  'zebra-printhead-zt610-300',
  'zebra-printhead-zt610-600',
  'zebra-module-wifi-zt111',
  'zebra-keyboard-zkdu',
  'zebra-usb-cable-zd621r',
  'zebra-cleaning-pens-zd621r',
  'zebra-cleaning-swabs-zd621r',
]

export const zt610RfidAccessorySlugs = [
  'zebra-gilotyna-zt610', 'zebra-nawijak-wewnetrzny-zt610',
  'zebra-walek-dociskowy-zt610', 'zebra-glowica-203dpi-zt610',
  'zebra-glowica-300dpi-zt610', 'zebra-glowica-600dpi-zt610',
]

// Fabryczne konfiguracje EU/ROW z katalogu Solutions Pathway, model 203889, 15.10.2026.
// Ceny i stany po PN pobiera istniejąca integracja dystrybucji; bez cen statycznych.
export const zt610RfidProduct: Product = {
  id: 'zebra-zt610-rfid',
  slug: 'zebra-zt610-rfid',
  name: 'Zebra ZT610 RFID',
  seoH1: 'Zebra ZT610 RFID',
  seoTitle: 'Zebra ZT610 RFID — drukarka RFID UHF 203–600 dpi',
  seoDescription: 'Zebra ZT610 RFID – przemysłowa drukarka RFID UHF 203, 300 lub 600 dpi. Druk 104 mm do 356 mm/s, Gigabit Ethernet, 1 GB RAM, ekran dotykowy 4,3 cala.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT610 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203, 300 i 600 dpi, szerokość druku do 104 mm.',
  description: `Zebra ZT610 RFID to 4-calowa przemysłowa drukarka RFID UHF z głowicą 203, 300 lub 600 dpi. Kodowanie obejmuje znaczniki EPC Gen 2 v2.1, ISO/IEC 18000-63 i RFID RAIN. Metalowa obudowa ma składaną pokrywę z dużym przezroczystym oknem.

## Wkładki co 16 mm lub gęściej

Drukarka koduje wkładki rozmieszczone co 16 mm lub ciaśniej. Gęstsze rozmieszczenie zmniejsza zużycie materiału i liczbę wymian rolek. Kodowanie adaptacyjne samo dobiera optymalne ustawienia zapisu. Narzędzia monitorowania zadań RFID śledzą wyniki.

## 600 dpi tylko w ZT610

Rozdzielczość 600 dpi ma w serii ZT600 tylko model 4-calowy. Maksymalna prędkość wynosi 356 mm/s. Długość ciągłego wydruku to 3810 mm przy 203 dpi, 3302 mm przy 300 dpi i 762 mm przy 600 dpi. Materiał ma 25,4–114 mm szerokości przy odrywaniu i obcinaniu.

## 1 GB RAM i Gigabit Ethernet

Drukarka ma 1 GB RAM i 2 GB pamięci Flash. Złącza to USB 2.0, RS-232, Gigabit Ethernet i Bluetooth 4.0. Dwa wolne gniazda przyjmują Wi-Fi, port równoległy, Ethernet lub interfejs aplikatora. Zasilacz przyjmuje 90–265 V AC. Drukarka waży 22,7 kg.

[Zebra ZT620 RFID](/produkt/zebra-zt620-rfid) drukuje do 168 mm szerokości, ale bez opcji 600 dpi.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'zebra',
  images: ['/images/products/zt610_1_s.png', '/images/products/zt610_2_s.png', '/images/products/zt610_3_s.png'],
  imageDescriptions: [
    'Zebra ZT610 RFID — drukarka przemysłowa, widok z lewej strony',
    'Zebra ZT610 RFID — widok z prawej strony i okno komory materiałów',
    'Zebra ZT610 RFID — widok z przodu z kolorowym ekranem',
  ],
  tags: ['produkcja', 'magazyn', 'logistyka'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203, 300 lub 600 dpi',
    predkoscDruku: 'do 356 mm/s (203 dpi), 305 mm/s (300 dpi), 152 mm/s (600 dpi)',
    szerokoscDruku: 'do 104 mm',
    szerokoscEtykiet: '25,4–114 mm przy odrywaniu',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID; fabryczny moduł RFID EU/ROW' },
    { name: 'Rozdzielczość', value: '203, 300 lub 600 dpi — zależnie od PN' },
    { name: 'Prędkość nadruku', value: 'do 356 mm/s (203 dpi), 305 mm/s (300 dpi), 152 mm/s (600 dpi); kodowanie zależy od etykiety i danych' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Szerokość mediów', value: '25,4–114 mm przy odrywaniu i cięciu; 25,4–108 mm przy odklejaniu i nawijaniu' },
    { name: 'Odstęp wkładek RFID', value: '16 mm lub mniej dla zgodnych wkładek; wymaga doboru i kalibracji materiału' },
    { name: 'Grubość mediów', value: '0,058–0,25 mm' },
    { name: 'Rolka etykiet', value: 'Średnica do 203 mm, gilza 76 mm' },
    { name: 'Taśma barwiąca', value: 'do 450 m; szerokość 51–110 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Gigabit Ethernet, Bluetooth 4.0' },
    { name: 'Wi-Fi', value: 'Opcjonalne; pokazane PN nie mają fabrycznego Wi-Fi' },
    { name: 'Pamięć', value: '1 GB RAM i 2 GB Flash' },
    { name: 'System i języki', value: 'Link-OS, ZPL i ZPL II, XML; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '505 × 268,2 × 395,68 mm' },
    { name: 'Masa', value: '22,7 kg' },
    { name: 'Zasilanie', value: '90–265 V AC, 47–63 Hz' },
    { name: 'Temperatura pracy', value: '5–40°C przy druku termotransferowym; 0–40°C przy druku termicznym bezpośrednim' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK; etykiety, taśma i przewód interfejsu sprzedawane osobno' },
  ],
  variants: [
    { partNumber: 'ZT61042-T0E01C0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT61043-T0E01C0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT61046-T0E01C0Z', name: '600 dpi — RFID', attributes: { 'Rozdzielczość': '600 dpi' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Dotyczy jakości nadruku. Nie określa zasięgu RFID. Rozdzielczość 600 dpi ma w serii ZT600 tylko model ZT610.',
  },
  applications: ['Etykiety RFID 600 dpi w produkcji', 'Kodowanie gęsto rozmieszczonych wkładek UHF'],
  compatibleAccessories: [],
  relatedAccessories: zt610RfidAccessoryIds,
  faq: [
    { question: 'Jak długi wydruk ciągły wykona ZT610 RFID?', answer: '3810 mm przy 203 dpi, 3302 mm przy 300 dpi i 762 mm przy 600 dpi.' },
    { question: 'Jak ciasno mogą leżeć wkładki dla ZT610 RFID?', answer: 'Co 16 mm lub bliżej, zależnie od wkładki. Mniejszy rozstaw pozwala zmieścić więcej etykiet na rolce.' },
    { question: 'Jakie opcje odbioru etykiet ma ZT610 RFID?', answer: 'Nawijak wewnętrzny zwija pełną rolkę etykiet na rdzeń 76 mm albo podkład przy odklejaniu. Obcinak gilotynowy ma tacę odbiorczą. Oba elementy zamawia się osobno.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZT610 / ZT620 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zt600-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZT600 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt600-series-rfid-specification-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Katalog części ZT600 (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/fact-sheet/zt600-series-parts-catalog-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja obsługi ZT610 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt610/instrukcja-po-polsku', size: 'Online' },
    { name: 'Sterowniki i wsparcie Zebra ZT610', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt610.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt610', 'zebra-zt411-rfid', 'zebra-zd621r'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/printers/industrial/zt600-series/zt610-rfid.html',
}
