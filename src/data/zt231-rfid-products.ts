import type { Product } from './products'
import { zt231RfidAccessoryIds } from './zt231-rfid-accessories'

// Dwa fabryczne PN EU/ROW, model 1111130 w Zebra Solutions Pathway, 15.10.2026.
export const zt231RfidProduct: Product = {
  id: 'zebra-zt231-rfid', slug: 'zebra-zt231-rfid', name: 'Zebra ZT231 RFID', seoH1: 'Zebra ZT231 RFID',
  seoTitle: 'Zebra ZT231 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZT231 RFID – przemysłowa drukarka RFID UHF 203 lub 300 dpi z modułem RE40. Druk 104 mm do 305 mm/s, zegar RTC, Ethernet i Bluetooth LE.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT231 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203 i 300 dpi, druk do 104 mm i ekran dotykowy 4,3 cala.',
  description: `Zebra ZT231 RFID to przemysłowa drukarka RFID UHF z modułem Zebra RE40, w metalowej ramie i obudowie. Obsługuje znaczniki RFID RAIN zgodne z ISO/IEC 18000-63 i EPC Gen 2 v2.1. Kreatory i automatyczna kalibracja materiału pozwalają zacząć pracę bez testów wstępnych.

## 203 dpi do 305 mm/s, 300 dpi do 203 mm/s

Wersja ZT23142-T0E00CFZ ma 203 dpi i drukuje do 304,8 mm/s, czyli 12 cali/s. Wersja ZT23143-T0E00CFZ ma 300 dpi i drukuje do 203,2 mm/s, czyli 8 cali/s. Szerokość nadruku wynosi 104 mm. Maksymalna długość wydruku to 3988 mm przy 203 dpi i 1854 mm przy 300 dpi.

## Minimalna długość etykiety 13, 18 lub 25 mm

Etykieta z podkładem może mieć od 18 mm przy odrywaniu, od 25 mm przy obcinaniu i od 13 mm przy odklejaniu. Materiał ma 19,4–114 mm szerokości i 0,076–0,25 mm grubości. Rolka ma do 203 mm na gilzie 76 mm albo do 152 mm na gilzie 25 mm. Taśma do 450 m ma 40–110 mm szerokości.

## BLE, RTC i opcje montowane u klienta

Standardowo drukarka ma USB 2.0, RS-232, Ethernet 10/100, USB Host, Bluetooth Low Energy i zegar RTC. Karta Wi-Fi 802.11ac, odklejak bez nawijaka i obcinacz są opcjami montowanymi u klienta. Odklejak z nawijakiem podkładu montuje się tylko fabrycznie. Do druku bez komputera służy klawiatura z wyświetlaczem ZKDU.

[Zebra ZT411 RFID](/produkt/zebra-zt411-rfid) drukuje szybciej, do 356 mm/s, i ma wersję do etykiet na metal.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zt231_1_s.png', '/images/products/zt231_2_s.png', '/images/products/zt231_3_s.png'],
  imageDescriptions: ['Zebra ZT231 RFID — widok z lewej strony i ekran dotykowy', 'Zebra ZT231 RFID — widok z prawej strony z wysuniętą etykietą', 'Zebra ZT231 RFID — widok z przodu'],
  tags: ['magazyn', 'produkcja', 'logistyka'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'do 305 mm/s (203 dpi) lub 203 mm/s (300 dpi)', szerokoscDruku: 'do 104 mm', szerokoscEtykiet: '19,4–114 mm' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Moduł RFID', value: 'Zebra RE40; fabryczny, Global z wyłączeniem USA, Kanady i Japonii' },
    { name: 'Technologia RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Prędkość nadruku', value: 'do 305 mm/s (203 dpi) lub 203 mm/s (300 dpi); kodowanie zależy od materiału i danych' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Szerokość mediów', value: '19,4–114 mm' },
    { name: 'Grubość mediów', value: '0,076–0,25 mm' },
    { name: 'Rolka etykiet', value: 'do 203 mm na gilzie 76 mm lub do 152 mm na gilzie 25 mm' },
    { name: 'Minimalny format RFID', value: 'Zależy od wkładki i materiału; wymaga sprawdzenia oraz kalibracji' },
    { name: 'Minimalna długość etykiety', value: '18 mm (odrywanie), 25 mm (obcinanie), 13 mm (odklejanie)' },
    { name: 'Taśma barwiąca', value: 'do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100, Bluetooth Low Energy' },
    { name: 'Zegar RTC', value: 'Tak' },
    { name: 'Wi-Fi', value: 'Opcjonalne 802.11ac; pokazane PN nie mają fabrycznego Wi-Fi' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; obcinacz i odklejak jako osobne akcesoria' },
    { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
    { name: 'System i języki', value: 'Link-OS, ZPL i ZPL II; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '432 × 241 × 279 mm' },
    { name: 'Masa', value: '9,1 kg w wersji bazowej' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
    { name: 'Temperatura pracy', value: '5–40°C przy druku termotransferowym; 0–40°C przy druku termicznym bezpośrednim' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK' },
  ],
  variants: [
    { partNumber: 'ZT23142-T0E00CFZ', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT23143-T0E00CFZ', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: { 'Rozdzielczość': 'Określa szczegółowość nadruku. Nie określa zasięgu RFID. Pozostałe wyposażenie obu pokazanych PN jest wspólne.' },
  applications: ['Etykiety RFID wymagane przez sieci handlowe', 'Etykietowanie dawek jednostkowych z kodowaniem UHF'],
  compatibleAccessories: [], relatedAccessories: zt231RfidAccessoryIds,
  faq: [
    { question: 'Jaka jest najkrótsza etykieta dla ZT231 RFID?', answer: '13 mm przy odklejaniu, 18 mm przy odrywaniu i 25 mm przy obcinaniu, łącznie z podkładem. Wymiary etykiety RFID zależą też od wkładki.' },
    { question: 'Czy ZT231 RFID ma zegar czasu rzeczywistego?', answer: 'Tak, zegar RTC jest wyposażeniem standardowym. Drukarka ma też Bluetooth Low Energy, USB Host i Ethernet 10/100.' },
    { question: 'Ile waży ZT231 RFID?', answer: '9,1 kg w wersji podstawowej i 10,9 kg z nawijakiem podkładu. Wymiary podstawowe to 432 × 241 × 279 mm.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZT231 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zt231-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZT231 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt231-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja ZT231 i ZT231R (EN)', type: 'manual', url: 'https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/zt231-ug-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie ZT231 RFID', type: 'driver', url: 'https://www.zebra.com/ap/en/support-downloads/printers/passive-rfid/zt231-rfid.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt231', 'zebra-zt411-rfid', 'zebra-zd621r'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/spec-sheets/printers/industrial/zt231-rfid.html',
}
