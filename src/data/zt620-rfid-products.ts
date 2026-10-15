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
  seoTitle: 'Zebra ZT620 RFID — przemysłowa drukarka i koder do 168 mm',
  seoDescription: 'Zebra ZT620 RFID drukuje i koduje szerokie etykiety RAIN UHF. Warianty 203 i 300 dpi, Gigabit Ethernet, ceny i dostępność. Sprawdź akcesoria w TAKMA.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT620 RFID do druku i kodowania szerokich etykiet RAIN UHF. Druk do 168 mm, 203 lub 300 dpi, Gigabit Ethernet.',
  description: `Zebra ZT620 RFID to przemysłowa drukarka i koder szerokich etykiet RAIN UHF RFID. Wykonuje nadruk do 168 mm i zapisuje dane w układzie elektronicznym etykiety.

## Szerokie etykiety RFID na kartony i palety

ZT620 RFID przygotowuje oznaczenia opakowań zbiorczych, palet, pojemników oraz wyrobów. Szeroki nadruk mieści dane logistyczne, tekst i kody kreskowe. Identyfikator EPC zapisany w etykiecie możesz powiązać z danymi w systemie WMS lub ERP. Samo połączenie drukarki z siecią nie zastępuje takiej integracji.

Wbudowany koder obsługuje EPC UHF Gen2 v2.1, ISO/IEC 18000-63 i RAIN RFID. Adaptacyjne kodowanie ułatwia kalibrację dla różnych wkładek. Dla zgodnych materiałów odstęp między wkładkami może wynosić 16 mm lub mniej. Przed wdrożeniem sprawdź zapis i odczyt etykiety na docelowym opakowaniu. Drukarka kontroluje etykietę w swoim torze materiałów. Do odczytu towarów na regale potrzebujesz osobnego czytnika UHF RFID.

## Dwa warianty z fabrycznym modułem RFID

ZT62062-T0E01C0Z ma rozdzielczość 203 dpi i drukuje z prędkością do 305 mm/s. ZT62063-T0E01C0Z ma 300 dpi i drukuje z prędkością do 203 mm/s. Oba PN obejmują koder RFID Global ROW, przewody zasilające EU i UK oraz ręczne odrywanie etykiet.

Wybierz 203 dpi do dużych kodów i standardowych oznaczeń logistycznych. Wersja 300 dpi umożliwia druk drobniejszego tekstu i bardziej szczegółowej grafiki. Rozdzielczość określa szczegółowość nadruku, a nie zasięg RFID. ZT620 RFID nie występuje w rozdzielczości 600 dpi. Jeśli potrzebujesz takiej rozdzielczości i wystarcza Ci nadruk do 104 mm, sprawdź [ZT610 RFID](/produkt/zebra-zt610-rfid).

## Materiały i obsługa szerokich rolek

Drukarka obsługuje druk termotransferowy oraz termiczny bezpośredni. Do termotransferu potrzebujesz taśmy barwiącej. Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy. W obu metodach kodowanie wymaga etykiety z wkładką RFID.

Przy odrywaniu i cięciu szerokość materiału wynosi 51–178 mm. Drukarka mieści rolkę o średnicy do 203 mm na gilzie 76 mm. Obsługuje taśmę o długości do 450 m i szerokości 51–174 mm. Dobierz materiał etykiety, taśmę i wkładkę RFID do powierzchni oraz warunków użytkowania. ZT620 RFID obsługuje materiał o grubości do 0,25 mm. Nie jest wersją On-metal do grubych etykiet przeznaczonych na metal.

## Stałe stanowisko w magazynie lub na produkcji

Metalowa rama, składana pokrywa i boczny załadunek ułatwiają obsługę materiałów na stałym stanowisku. ZT620 RFID waży 26 kg. Ma 1 GB RAM i 2 GB pamięci Flash. Kolorowy ekran 4,3 cala służy do konfiguracji oraz odczytu komunikatów drukarki.

Oba oferowane PN mają USB 2.0, USB Host, RS-232, Gigabit Ethernet i Bluetooth 4.0. Nie mają fabrycznego Wi-Fi. Łączność bezprzewodową możesz rozbudować przez moduł Wi-Fi 5 P1083320-037C albo Wi-Fi 6 P1083320-037G. Moduły są sprzedawane osobno. Link-OS i narzędzia Zebra DNA wspierają ustawianie oraz zarządzanie urządzeniem.

## Akcesoria i części zamienne

Dobierz obcinacz, nawijak wewnętrzny lub interfejs aplikatora do sposobu odbioru etykiet. Obcinacz P1083320-135 wymaga zgodnej konfiguracji i oprogramowania. Przy etykietach RFID ustaw cięcie między wkładkami. Nawijak P1083320-085 może zwijać gotowe etykiety albo podkład w trybie odklejania. Głowicę zamienną dobierz do rozdzielczości urządzenia. Wymiana samej głowicy nie służy do zmiany rozdzielczości.

Etykiety RFID, taśma barwiąca i dodatkowe moduły są sprzedawane osobno. Jeśli potrzebujesz tylko nadruku, sprawdź [Zebra ZT620](/produkt/zebra-zt620).

## Gwarancja

Gwarancja na drukarkę w regionie EMEA wynosi 24 miesiące. Obcinacz i części zużywające się mają ochronę ograniczoną do 12 miesięcy. Dla głowicy obowiązuje 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
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
    { name: 'Ekran', value: 'Kolorowy, 4,3 cala' },
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
    { name: 'Gwarancja EMEA', value: 'Drukarka: 24 miesiące; obcinacz i części zużywające się: 12 miesięcy; głowica: 12 miesięcy lub milion cali druku' },
  ],
  variants: [
    { partNumber: 'ZT62062-T0E01C0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość druku': 'do 305 mm/s' }, availability: 'unavailable' },
    { partNumber: 'ZT62063-T0E01C0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Prędkość druku': 'do 203 mm/s' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Prędkość druku': 'Maksymalna prędkość nadruku: 12 ips przy 203 dpi i 8 ips przy 300 dpi. Kodowanie RFID może zmniejszyć wydajność zadania.',
  },
  applications: ['Druk i kodowanie szerokich etykiet RFID na kartony oraz palety', 'Oznaczanie pojemników i opakowań zbiorczych na produkcji', 'Przygotowanie identyfikatorów EPC powiązanych z danymi WMS lub ERP', 'Znakowanie wyrobów zgodnymi etykietami RAIN UHF'],
  compatibleAccessories: [], relatedAccessories: zt620RfidAccessoryIds,
  faq: [
    { question: 'Czym ZT620 RFID różni się od zwykłej ZT620?', answer: 'ZT620 RFID ma fabryczny moduł do zapisu i odczytu układu etykiety podczas drukowania. Standardowe konfiguracje [ZT620](/produkt/zebra-zt620) bez tego modułu wykonują tylko nadruk. Dobierz wariant do potrzeby kodowania RFID.' },
    { question: 'Jakie PN obejmuje ta oferta?', answer: 'ZT62062-T0E01C0Z ma 203 dpi, a ZT62063-T0E01C0Z — 300 dpi. Oba PN obejmują fabryczne RFID Global ROW, przewody zasilające EU i UK oraz ręczne odrywanie etykiet. Nie mają fabrycznego Wi-Fi, obcinacza ani nawijaka.' },
    { question: 'Czy obie rozdzielczości drukują z tą samą prędkością?', answer: 'Nie. Wersja 203 dpi drukuje do 305 mm/s, czyli 12 ips. Wersja 300 dpi drukuje do 203 mm/s, czyli 8 ips. Rzeczywista wydajność kodowania zależy także od wkładki RFID, ilości danych i ustawień.' },
    { question: 'Kiedy wybrać ZT620 RFID zamiast ZT610 RFID?', answer: 'Wybierz ZT620 RFID, jeśli nadruk przekracza szerokość 104 mm. ZT620 RFID drukuje do 168 mm. ZT610 RFID drukuje do 104 mm i oferuje także rozdzielczość 600 dpi, której nie ma ZT620 RFID.' },
    { question: 'Czy drukarka ma Wi-Fi?', answer: 'Oferowane PN nie mają fabrycznego Wi-Fi. Mają Gigabit Ethernet, USB, USB Host, RS-232 i Bluetooth 4.0. Do rozbudowy dobierz moduł Wi-Fi 5 P1083320-037C albo Wi-Fi 6 P1083320-037G. Moduły są sprzedawane osobno.' },
    { question: 'Czy ZT620 RFID może drukować grube etykiety na metal?', answer: 'Ta drukarka obsługuje materiał o grubości do 0,25 mm. Nie jest wersją On-metal. Do grubych etykiet na metal sprawdź odpowiedni wariant [ZT411 RFID On-metal](/produkt/zebra-zt411-rfid) i potwierdź zgodność konkretnego materiału.' },
    { question: 'Czy drukarka odczyta całą półkę magazynową?', answer: 'Nie. Drukarka koduje i sprawdza etykietę w swoim torze materiałów. Do inwentaryzacji towarów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    { question: 'Czy nawijak i materiały są w zestawie?', answer: 'Nie. Nawijak, obcinacz, etykiety RFID, taśmę barwiącą i dodatkowe moduły dobierz osobno. Nawijak P1083320-085 obsługuje zwijanie etykiet albo podkładu w trybie odklejania. Do druku termicznego bezpośredniego nie potrzebujesz taśmy barwiącej.' },
  ],
  downloads: [
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
