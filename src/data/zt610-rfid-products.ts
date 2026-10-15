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
  seoTitle: 'Zebra ZT610 RFID — drukarka i koder etykiet UHF',
  seoDescription: 'Zebra ZT610 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203, 300 i 600 dpi, druk do 104 mm. Sprawdź ceny, dostępność i akcesoria w TAKMA.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT610 RFID drukuje i koduje etykiety RAIN UHF. Wybierz 203, 300 lub 600 dpi. Szerokość druku wynosi do 104 mm.',
  description: `Zebra ZT610 RFID to przemysłowa drukarka i koder etykiet RAIN UHF RFID. Wykonuje nadruk oraz zapisuje dane w układzie elektronicznym etykiety. Służy do przygotowania oznaczeń towarów, opakowań, części i pojemników.

## Druk i kodowanie etykiet RAIN UHF

Wbudowany moduł RFID obsługuje EPC UHF Gen2 v2.1 i ISO/IEC 18000-63. Adaptacyjne kodowanie dobiera ustawienia do zgodnych wkładek RFID. Drukarka może obsługiwać wkładki rozmieszczone co 16 mm, a dla niektórych materiałów także gęściej. Minimalny rozmiar etykiety zależy od jej wkładki i konstrukcji. Przed wdrożeniem sprawdź zapis oraz odczyt na docelowym produkcie.

Drukarka sprawdza etykietę w swoim torze materiałów. Do odczytu oznaczonych towarów na regale potrzebujesz osobnego czytnika UHF RFID i oprogramowania. Model ten nie jest koderem kart NFC.

## Warianty 203, 300 i 600 dpi z fabrycznym RFID

Ta karta obejmuje trzy konfiguracje EU/ROW z fabrycznym modułem RFID. PN ZT61042-T0E01C0Z ma 203 dpi, ZT61043-T0E01C0Z ma 300 dpi, a ZT61046-T0E01C0Z ma 600 dpi. Każdy wariant ma tryb ręcznego odrywania etykiet. Obcinacz i nawijak są sprzedawane osobno.

Wybierz 203 dpi do większych oznaczeń logistycznych. Wersje 300 i 600 dpi umożliwiają druk drobniejszego tekstu oraz kodów. Rozdzielczość opisuje nadruk i nie określa zasięgu odczytu RFID. Wersji RFID 600 dpi nie należy utożsamiać z ZT610 Micro Label, która nie obsługuje RFID.

## Szerokość druku i materiały

Szerokość druku wynosi do 104 mm. Maksymalna prędkość nadruku wynosi 356 mm/s przy 203 dpi, 305 mm/s przy 300 dpi i 152 mm/s przy 600 dpi. Rzeczywista wydajność kodowania zależy od etykiety, ilości danych i ustawień zadania.

Drukarka mieści rolkę etykiet o średnicy do 203 mm na gilzie 76 mm. Obsługuje materiał o grubości 0,058–0,25 mm. Do druku termotransferowego potrzebujesz taśmy barwiącej o długości do 450 m. Druk termiczny bezpośredni wymaga odpowiednich etykiet termoczułych i nie wymaga taśmy. W obu metodach kodowanie wymaga etykiety z wkładką RFID.

## Łączność i obsługa stanowiska

Pokazane PN mają USB 2.0, USB Host, RS-232, Gigabit Ethernet oraz Bluetooth 4.0. Nie mają fabrycznego Wi-Fi. Opcjonalny moduł P1083320-037G dodaje Wi-Fi 6 i Bluetooth 5.3. Kolorowy ekran 4,3 cala służy do ustawiania drukarki. Link-OS i narzędzia Zebra DNA wspierają konfigurację oraz zarządzanie urządzeniem.

Metalowa obudowa ma składaną pokrywę i okno do kontroli materiałów. Boczne ładowanie ułatwia wymianę etykiet i taśmy. Drukarka waży 22,7 kg i wymaga stałego stanowiska pracy.

## Akcesoria i części zamienne

Dobierz obcinacz, wewnętrzny nawijak albo moduł Wi-Fi do organizacji stanowiska. Nawijak może zwijać gotowe etykiety lub podkład w trybie odklejania. Obcinacz musi ciąć między wkładkami RFID. Głowicę dobierz do rozdzielczości urządzenia. Wymiana samej głowicy nie służy do zmiany rozdzielczości.

Jeśli potrzebujesz tylko nadruku, sprawdź [Zebra ZT610](/produkt/zebra-zt610). Do grubszych etykiet przeznaczonych na metal sprawdź odpowiedni wariant [ZT411 RFID On-metal](/produkt/zebra-zt411-rfid).

## Gwarancja

Gwarancja na drukarkę w regionie EMEA wynosi 24 miesiące. Dla obcinacza i części zużywających się wynosi 12 miesięcy. Dla głowicy obowiązuje 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
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
    { name: 'Ekran', value: 'Kolorowy, 4,3 cala' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Gigabit Ethernet, Bluetooth 4.0' },
    { name: 'Wi-Fi', value: 'Opcjonalne; pokazane PN nie mają fabrycznego Wi-Fi' },
    { name: 'Pamięć', value: '1 GB RAM i 2 GB Flash' },
    { name: 'System i języki', value: 'Link-OS, ZPL i ZPL II, XML; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '505 × 268,2 × 395,68 mm' },
    { name: 'Masa', value: '22,7 kg' },
    { name: 'Zasilanie', value: '90–265 V AC, 47–63 Hz' },
    { name: 'Temperatura pracy', value: '5–40°C przy druku termotransferowym; 0–40°C przy druku termicznym bezpośrednim' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK; etykiety, taśma i przewód interfejsu sprzedawane osobno' },
    { name: 'Gwarancja EMEA', value: 'Drukarka: 24 miesiące; obcinacz i części zużywające się: 12 miesięcy; głowica: 12 miesięcy lub milion cali druku' },
  ],
  variants: [
    { partNumber: 'ZT61042-T0E01C0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT61043-T0E01C0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT61046-T0E01C0Z', name: '600 dpi — RFID', attributes: { 'Rozdzielczość': '600 dpi' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Rozdzielczość': 'Dotyczy jakości nadruku. Nie określa zasięgu RFID. Wersja RFID 600 dpi nie jest wersją Micro Label.',
  },
  applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Oznaczanie części i pojemników na produkcji', 'Przygotowanie etykiet RFID do śledzenia dostaw', 'Oznaczanie wyposażenia zgodnymi etykietami UHF'],
  compatibleAccessories: [],
  relatedAccessories: zt610RfidAccessoryIds,
  faq: [
    { question: 'Czym ZT610 RFID różni się od zwykłej ZT610?', answer: 'ZT610 RFID ma moduł do radiowego zapisu i odczytu układu etykiety podczas jej przygotowania. Ta karta obejmuje konfiguracje z fabrycznym RFID. [Zwykła ZT610](/produkt/zebra-zt610) bez takiego modułu wykonuje tylko nadruk.' },
    { question: 'Jakie numery PN obejmuje ta oferta?', answer: 'ZT61042-T0E01C0Z ma 203 dpi, ZT61043-T0E01C0Z ma 300 dpi, a ZT61046-T0E01C0Z ma 600 dpi. Są to konfiguracje EU/ROW z RFID, przewodami zasilającymi EU i UK oraz ręcznym odrywaniem etykiet.' },
    { question: 'Czy ZT610 RFID 600 dpi to wersja Micro Label?', answer: 'Nie. Wersja RFID 600 dpi drukuje i koduje zgodne etykiety UHF. ZT610 Micro Label z rodziny ZT61A służy do druku mikroetykiet i nie obsługuje RFID. Minimalny rozmiar etykiety RFID zależy od konkretnej wkładki i materiału.' },
    { question: 'Czy ZT610 RFID ma Wi-Fi?', answer: 'Pokazane PN nie mają fabrycznego Wi-Fi. Mają Ethernet, USB, USB Host, RS-232 i Bluetooth 4.0. Opcjonalny moduł P1083320-037G dodaje Wi-Fi 6 i Bluetooth 5.3.' },
    { question: 'Czy drukarka odczyta wszystkie produkty na półce?', answer: 'Nie. Drukarka koduje etykietę w swoim torze materiałów. Do inwentaryzacji oznaczonych produktów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    { question: 'Czy można użyć etykiet RFID na metal?', answer: 'Sprawdź konstrukcję i grubość konkretnej etykiety. ZT610 RFID obsługuje materiał do 0,25 mm. Do grubszych etykiet na metal sprawdź wersję [ZT411 RFID On-metal](/produkt/zebra-zt411-rfid), która obsługuje materiał do 1,5 mm.' },
    { question: 'Czy materiały i akcesoria są w zestawie?', answer: 'Etykiety RFID, taśma barwiąca, przewód interfejsu, obcinacz i nawijak są sprzedawane osobno. Do druku termicznego bezpośredniego nie potrzebujesz taśmy barwiącej. Głowicę zamienną dobierz do rozdzielczości drukarki.' },
  ],
  downloads: [
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
