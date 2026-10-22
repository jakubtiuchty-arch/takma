import type { Product } from './products'
import { zt411RfidAccessoryIds } from './zt411-rfid-accessories'

// PN EU/ROW: Solutions Pathway, model 227842, 15.10.2026.
// Starsze SKU ...C0Z z oznaczeniem Pending End Of Sale nie są nową ofertą.
export const zt411RfidProduct: Product = {
  id: 'zebra-zt411-rfid',
  slug: 'zebra-zt411-rfid',
  name: 'Zebra ZT411 RFID',
  seoH1: 'Zebra ZT411 RFID',
  seoTitle: 'Zebra ZT411 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZT411 RFID – przemysłowa drukarka RFID UHF 203 lub 300 dpi. Druk 104 mm do 356 mm/s, odstęp wkładek 16 mm, wersja On-metal i Wi-Fi 6.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT411 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203 i 300 dpi, z Wi-Fi 6 albo w wersji On-metal do znaczników na metal.',
  description: `Zebra ZT411 RFID to 4-calowa przemysłowa drukarka RFID UHF w metalowej ramie ze składaną pokrywą. Koder zapisuje znaczniki EPC Gen 2 v2.1, ISO/IEC 18000-63 i RFID RAIN. Drukuje z prędkością do 356 mm/s na szerokości 104 mm.

## Etykiety od 16 mm i kodowanie adaptacyjne

Drukarka drukuje i koduje znaczniki z minimalnym odstępem 16 mm. Kodowanie adaptacyjne zastępuje złożone wytyczne rozmieszczenia wkładek. Różne położenia układu dają szeroki wybór materiałów. Drukarka obsługuje serializację MCS i trwałą blokadę pamięci użytkownika zgodną z ATA Spec 2000.

## Wersja On-metal do znaczników 1,5 mm

Warianty T5 On-metal przyjmują materiał o grubości do 1,5 mm. Standardowe warianty T0 obsługują 0,058–0,25 mm. Wersja On-metal służy do znaczników na sprzęt IT, narzędzia, wyposażenie i pojemniki zwrotne. Zestaw On-metal można też zamontować u klienta, z wyjątkiem modelu 600 dpi.

## Wi-Fi 6 i dwa wolne gniazda kart

Każdy wariant ma USB 2.0, RS-232, Ethernet 10/100, Bluetooth 4.1 i dwa porty USB Host. ZT41142-T0EG0G0Z ma fabryczne Wi-Fi 6 z Bluetooth 5.3. Dwa wolne gniazda przyjmują karty Wi-Fi, port równoległy, kartę Ethernet lub interfejs aplikatora. Nawijak pełnej rolki jest tylko opcją fabryczną. Rolka materiału ma do 203 mm średnicy, a taśma do 450 m.

6-calowa [Zebra ZT421 RFID](/produkt/zebra-zt421-rfid) drukuje do 168 mm szerokości, ale nie ma wersji On-metal.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'zebra',
  images: ['/images/products/zt411_1_s.png', '/images/products/zt411-rfid.jpg', '/images/products/zt411_3_s.png'],
  imageDescriptions: [
    'Zebra ZT411 RFID — drukarka przemysłowa z ekranem dotykowym',
    'Zebra ZT411 RFID — widok pod kątem, konfiguracja z odklejakiem',
    'Zebra ZT411 RFID — obudowa i komora materiałów drukarki',
  ],
  tags: ['magazyn', 'logistyka', 'produkcja'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203 lub 300 dpi',
    predkoscDruku: 'do 356 mm/s (203 dpi) lub 254 mm/s (300 dpi)',
    szerokoscDruku: 'do 104 mm',
    szerokoscEtykiet: '25,4–114 mm przy odrywaniu',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID; sprzęgacz w linii druku' },
    { name: 'Rozdzielczość oferowanych wariantów', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Prędkość druku', value: 'do 356 mm/s (203 dpi) lub 254 mm/s (300 dpi); prędkość kodowania zależy od etykiety i danych' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Szerokość mediów', value: '25,4–114 mm przy odrywaniu i cięciu; do 108 mm przy odklejaniu i nawijaniu' },
    { name: 'Minimalny odstęp wkładek RFID', value: '16 mm; wymaga doboru i kalibracji materiału' },
    { name: 'Grubość mediów', value: '0,058–0,25 mm; wersja T5 On-metal: do 1,5 mm' },
    { name: 'Średnica rolki etykiet', value: 'do 203 mm, gilza 76 mm' },
    { name: 'Taśma barwiąca', value: 'do 450 m; szerokość 51–110 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0, dwa porty USB Host, RS-232, Ethernet 10/100' },
    { name: 'Łączność bezprzewodowa', value: 'ZT41142-T0EG0G0Z: Wi-Fi 6 i Bluetooth 5.3; pozostałe PN: Bluetooth 4.1, bez fabrycznego Wi-Fi' },
    { name: 'Pamięć', value: '256 MB SDRAM i 512 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; ZPL i ZPL II; EPL i EPL2 tylko w wersji 203 dpi; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '495 × 269 × 324 mm' },
    { name: 'Masa', value: '16,33 kg' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK; etykiety i taśma sprzedawane osobno' },
  ],
  variants: [
    { partNumber: 'ZT41142-T0E00G0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41143-T0E00G0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41142-T0EG0G0Z', name: '203 dpi — RFID, Wi-Fi 6', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Wi-Fi 6, Bluetooth 5.3' }, availability: 'unavailable' },
    { partNumber: 'ZT41142-T5E00G0Z', name: '203 dpi — RFID On-metal', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'On-metal', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41143-T5E00G0Z', name: '300 dpi — RFID On-metal', attributes: { 'Rozdzielczość': '300 dpi', 'Wersja RFID': 'On-metal', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Wersja RFID': 'Standardowa przyjmuje materiał 0,058–0,25 mm. Wersja On-metal przyjmuje grubsze etykiety na metal, do 1,5 mm. Etykieta musi pasować do wersji drukarki.',
    'Łączność': 'Każdy PN ma także dwa porty USB Host. Fabryczne Wi-Fi 6 i Bluetooth 5.3 ma tylko ZT41142-T0EG0G0Z.',
  },
  applications: ['Znaczniki RFID na metal do 1,5 mm', 'Etykiety UHF na sprzęt IT i narzędzia'],
  compatibleAccessories: [],
  relatedAccessories: zt411RfidAccessoryIds,
  faq: [
    { question: 'Jak gruby materiał przyjmie ZT411 RFID On-metal?', answer: 'Do 1,5 mm. Warianty standardowe T0 przyjmują materiał 0,058–0,25 mm. Zestaw On-metal można zamontować u klienta, z wyjątkiem modelu 600 dpi.' },
    { question: 'Czy ZT411 RFID można podłączyć przez Wi-Fi 6?', answer: 'Tak. Wariant ZT41142-T0EG0G0Z ma fabryczny moduł Wi-Fi 6 z Bluetooth 5.3. W pozostałych wariantach moduł montuje się w jednym z dwóch wolnych gniazd.' },
    { question: 'Jakie języki programowania obsługuje ZT411 RFID?', answer: 'ZPL i ZPL II, a w wersji 203 dpi także EPL i EPL2. ZBI 2.0 jest opcjonalny.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZT411 / ZT421 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zt400-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZT400 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt400-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog głowic i akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki i instrukcje ZT411 RFID', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt411.html', size: 'Online' },
    { name: 'Instrukcja obsługi ZT411 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt411/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-zd621r', 'zebra-zt411'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/printers/industrial/zt400-series/zt411-rfid.html',
}
