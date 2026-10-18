import type { Product } from './products'
import { zt231RfidAccessoryIds } from './zt231-rfid-accessories'

// Dwa fabryczne PN EU/ROW, model 1111130 w Zebra Solutions Pathway, 15.10.2026.
export const zt231RfidProduct: Product = {
  id: 'zebra-zt231-rfid', slug: 'zebra-zt231-rfid', name: 'Zebra ZT231 RFID', seoH1: 'Zebra ZT231 RFID',
  seoTitle: 'Zebra ZT231 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZT231 RFID: przemysłowa drukarka i koder RAIN UHF 203 lub 300 dpi. Druk 104 mm do 305 mm/s, moduł RE40, ekran dotykowy 4,3 cala, Ethernet.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT231 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203 i 300 dpi, druk do 104 mm i ekran dotykowy 4,3 cala.',
  description: `Zebra ZT231 RFID to przemysłowa drukarka i koder etykiet RAIN UHF RFID. Drukuje tekst, grafikę i kody kreskowe oraz zapisuje dane w układzie elektronicznym etykiety. Służy do przygotowania oznaczeń produktów, opakowań i pojemników.

## Kodowanie RAIN UHF RFID

Wbudowany moduł Zebra RE40 obsługuje etykiety zgodne z EPC UHF Gen2 v2.1 i ISO/IEC 18000-63. Adaptacyjne kodowanie dobiera ustawienia do zgodnej wkładki RFID. Kalibrację materiału i RFID wykonaj przed rozpoczęciem pracy oraz po zmianie typu etykiet.

Minimalny format etykiety RFID zależy od jej wkładki, położenia anteny i konstrukcji materiału. Nadruk i zapis RFID to dwie osobne operacje. Przed wdrożeniem wydrukuj serię próbną i sprawdź odczyt na docelowym produkcie.

## Dwa warianty z fabrycznym RFID

PN ZT23142-T0E00CFZ ma rozdzielczość 203 dpi. PN ZT23143-T0E00CFZ ma 300 dpi. Oba obejmują fabryczny moduł RFID w wersji Global, z wyłączeniem USA, Kanady i Japonii. Mają przewody zasilające EU i UK oraz tryb ręcznego odrywania etykiet.

Wybierz 203 dpi do większych oznaczeń logistycznych. Wersja 300 dpi pozwala drukować drobniejszy tekst oraz kody. Rozdzielczość określa szczegółowość nadruku, a nie zasięg odczytu RFID. Maksymalna prędkość nadruku wynosi 305 mm/s przy 203 dpi i 203 mm/s przy 300 dpi. Wydajność kodowania zależy od etykiety, danych i ustawień zadania.

## Materiały i obsługa drukarki

Szerokość druku wynosi do 104 mm. Drukarka obsługuje rolki o średnicy do 203 mm na gilzie 76 mm. Do druku termotransferowego potrzebujesz taśmy barwiącej o długości do 450 m i szerokości 40–110 mm. Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy. W obu metodach kodowanie wymaga zgodnej wkładki RFID.

Kolorowy ekran dotykowy 4,3 cala służy do ustawiania druku, materiału i RFID. Metalowa rama oraz składana pokrywa z oknem ułatwiają obsługę stanowiska. Etykiety i taśmę ładuje się z boku urządzenia.

## Łączność i integracja

Każdy pokazany PN ma USB 2.0, USB Host, RS-232, Ethernet 10/100 i Bluetooth Low Energy. Nie ma fabrycznego Wi-Fi. Opcjonalna karta P1083320-037C dodaje Wi-Fi 802.11ac. W ZT231 ta karta nie udostępnia Bluetooth 4.2.

Drukarka korzysta z Link-OS oraz poleceń ZPL i ZPL II. Integracja z WMS lub ERP wymaga przygotowania danych do nadruku, identyfikatora EPC i obsługi błędów kodowania. Do odczytu towarów na regale potrzebujesz osobnego czytnika UHF RFID i oprogramowania.

## Akcesoria i części zamienne

Obcinacz, odklejak, karta Wi-Fi i interfejs aplikatora są sprzedawane osobno. Obcinacz musi ciąć między wkładkami RFID. Odklejak P1123335-042 nie zawiera nawijaka podkładu. Wersję z nawijakiem podkładu dobiera się jako konfigurację fabryczną; nie ma jej w pokazanych PN.

Do wymiany głowicy w ZT231R dobierz P1123335-156 dla 203 dpi albo P1123335-157 dla 300 dpi. Przed zamówieniem głowicy podaj nam numer seryjny drukarki. Potwierdzimy zgodność z wersją RFID.

Jeśli potrzebujesz standardowego nadruku, sprawdź [Zebra ZT231](/produkt/zebra-zt231). Do większych obciążeń i innych konfiguracji RFID sprawdź [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid).

## Gwarancja

Gwarancja na drukarkę w regionie EMEA wynosi 24 miesiące. Dla obcinacza i części zużywających się wynosi 12 miesięcy. Dla głowicy obowiązuje 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
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
    { name: 'Taśma barwiąca', value: 'do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100, Bluetooth Low Energy' },
    { name: 'Wi-Fi', value: 'Opcjonalne 802.11ac; pokazane PN nie mają fabrycznego Wi-Fi' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; obcinacz i odklejak jako osobne akcesoria' },
    { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
    { name: 'System i języki', value: 'Link-OS, ZPL i ZPL II; ZBI 2.0 opcjonalnie' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '432 × 241 × 279 mm' },
    { name: 'Masa', value: '9,1 kg w wersji bazowej' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
    { name: 'Temperatura pracy', value: '5–40°C przy druku termotransferowym; 0–40°C przy druku termicznym bezpośrednim' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK' },
    { name: 'Gwarancja EMEA', value: 'Drukarka: 24 miesiące; obcinacz i części zużywające się: 12 miesięcy; głowica: 12 miesięcy lub milion cali druku' },
  ],
  variants: [
    { partNumber: 'ZT23142-T0E00CFZ', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'ZT23143-T0E00CFZ', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: { 'Rozdzielczość': 'Określa szczegółowość nadruku. Nie określa zasięgu RFID. Pozostałe wyposażenie obu pokazanych PN jest wspólne.' },
  applications: ['Druk i kodowanie etykiet RFID na produkty oraz opakowania', 'Oznaczanie części i pojemników na produkcji', 'Przygotowanie etykiet RFID do przyjęć i wysyłek', 'Oznaczanie wyposażenia zgodnymi etykietami UHF'],
  compatibleAccessories: [], relatedAccessories: zt231RfidAccessoryIds,
  faq: [
    { question: 'Czym ZT231 RFID różni się od zwykłej ZT231?', answer: 'ZT231 RFID ma fabryczny moduł RE40 do kodowania układu etykiety UHF. [Zwykła ZT231](/produkt/zebra-zt231) bez tego modułu wykonuje tylko nadruk.' },
    { question: 'Które numery PN są dostępne?', answer: 'ZT23142-T0E00CFZ ma 203 dpi, a ZT23143-T0E00CFZ ma 300 dpi. Oba mają RFID Global poza USA, Kanadą i Japonią, przewody EU i UK oraz ręczne odrywanie etykiet.' },
    { question: 'Czy te warianty mają Wi-Fi?', answer: 'Nie mają fabrycznego Wi-Fi. Każdy ma USB, USB Host, RS-232, Ethernet 10/100 i Bluetooth Low Energy. Karta P1083320-037C dodaje Wi-Fi 802.11ac; Bluetooth 4.2 tej karty nie jest dostępny w ZT231.' },
    { question: 'Czy mogę zamontować zwykłą głowicę ZT231?', answer: 'Do wersji RFID dobierz głowicę P1123335-156 dla 203 dpi lub P1123335-157 dla 300 dpi. Przed wymianą podaj nam numer seryjny drukarki. Sprawdzimy rozdzielczość i generację urządzenia.' },
    { question: 'Czy etykiety i taśma są w zestawie?', answer: 'Nie. Etykiety RFID, taśma barwiąca i akcesoria są sprzedawane osobno. Przy druku termicznym bezpośrednim taśma nie jest potrzebna. Etykieta musi mieć wkładkę RFID zgodną z drukarką.' },
    { question: 'Czy drukarka odczyta produkty na regale?', answer: 'Nie. Drukarka koduje etykietę podczas jej przygotowania. Do odczytu produktów na regale potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    { question: 'Czy odklejak ma nawijak podkładu?', answer: 'Odklejak P1123335-042 nie zawiera nawijaka podkładu. Wersję z nawijakiem dobiera się jako konfigurację fabryczną. Dostępne PN ZT23142-T0E00CFZ i ZT23143-T0E00CFZ jej nie mają.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZT231 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt231-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja ZT231 i ZT231R (EN)', type: 'manual', url: 'https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/zt231-ug-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie ZT231 RFID', type: 'driver', url: 'https://www.zebra.com/ap/en/support-downloads/printers/passive-rfid/zt231-rfid.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt231', 'zebra-zt411-rfid', 'zebra-zd621r'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/spec-sheets/printers/industrial/zt231-rfid.html',
}
