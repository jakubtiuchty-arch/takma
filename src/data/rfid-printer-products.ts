import { satoCt4RfidProducts } from './sato-ct4-rfid-products'
import { tscThRfidProducts } from './tsc-th-rfid-products'
import { tscAlpha40lRfidProduct } from './tsc-alpha40l-rfid-products'
import { tscT6006eRfidProducts } from './tsc-t6006e-rfid-products'
import { tscT6000eRfidProducts } from './tsc-t6000e-rfid-products'
import { tscMbRfidProducts } from './tsc-mb-rfid-products'
import { brotherTjRfidProducts } from './brother-tj-rfid-products'
import { brotherRfidProducts } from './brother-rfid-products'
import { zq511RfidProduct } from './zq511-rfid-products'
import { zq521RfidProduct } from './zq521-rfid-products'
import { zq630PlusRfidProduct } from './zq630-plus-rfid-products'
import type { Product } from './products'
import { zd611rProduct } from './zd611r-products'
import { zd621rAccessoryIds } from './zd621r-accessories'
import { zt411RfidProduct } from './zt411-rfid-products'
import { zt610RfidProduct } from './zt610-rfid-products'
import { zt231RfidProduct } from './zt231-rfid-products'
import { zt421RfidProduct } from './zt421-rfid-products'
import { zt620RfidProduct } from './zt620-rfid-products'

export const rfidPrinterProducts: Product[] = [
  ...satoCt4RfidProducts,
  ...tscThRfidProducts,
  tscAlpha40lRfidProduct,
  ...brotherRfidProducts,
  ...brotherTjRfidProducts,
  ...tscMbRfidProducts,
  ...tscT6000eRfidProducts,
  ...tscT6006eRfidProducts,
  {
    id: 'zebra-zd621r',
    slug: 'zebra-zd621r',
    name: 'Zebra ZD621R',
    seoH1: 'Zebra ZD621R',
    shortDescription: 'Biurkowa drukarka Zebra ZD621R drukuje i koduje etykiety RAIN UHF RFID. Ma ekran dotykowy i wersje 203 oraz 300 dpi.',
    seoTitle: 'Zebra ZD621R — biurkowa drukarka etykiet RFID',
    seoDescription: 'Zebra ZD621R drukuje i koduje etykiety RAIN UHF RFID. Wybierz 203 lub 300 dpi, etykiety i taśmę. Zapytaj TAKMA o konfigurację.',
    description: `Zebra ZD621R to biurkowa drukarka i koder etykiet RAIN UHF RFID o szerokości do 4 cali. Drukuje tekst i kody kreskowe oraz zapisuje dane w układzie zgodnej etykiety.

Wbudowany moduł Zebra RE40 obsługuje etykiety zgodne z EPC UHF Gen2 v2.1 i ISO/IEC 18000-63. Technologia Adaptive Encoding ułatwia kalibrację kodowania dla różnych wkładek RFID. Przed wdrożeniem sprawdź zapis i odczyt etykiety na docelowym produkcie.

ZD621R drukuje termotransferowo z taśmą barwiącą albo termicznie bezpośrednio na odpowiednim materiale. Wersja 203 dpi drukuje z prędkością do 203 mm/s i szerokością do 104 mm. Wersja 300 dpi drukuje z prędkością do 152 mm/s i szerokością do 108 mm.

Kolorowy ekran dotykowy 4,3 cala ułatwia ustawienie drukarki i kalibrację materiału. USB, USB Host, Ethernet i port szeregowy są standardowe. Łączność Wi-Fi zależy od konfiguracji. Dobierz numer PN, etykietę RFID i sposób kodowania do swojego systemu.

Wybierz wersję standardową, z odklejakiem albo z obcinaczem. Wariant ZD6A143-30ERR2EZ ma Wi-Fi 6 i Bluetooth 5.3. Pozostałe warianty w tabeli mają Bluetooth Low Energy do konfiguracji, bez fabrycznego Wi-Fi.

Akcesoria do rozbudowy obejmują moduł Wi-Fi, odklejak, obcinacz i adaptery gilz. Do pracy na baterii potrzebujesz baterii P1080383-603 oraz podstawy P1080383-600. Te dwa elementy są sprzedawane osobno. Głowicę i wałek dociskowy dobierz do rozdzielczości drukarki. Moduł Ethernet i RS-232 służy jako część zamienna, ponieważ te porty są już standardowe. Obcinacz musi ciąć materiał między wkładkami RFID.`,
    categoryId: 'drukarki-etykiet',
    subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
    manufacturerId: 'zebra',
    images: ['/images/products/zd621t_lcd_1_s.png', '/images/products/zd621t_lcd_2_s.png'],
    imageDescriptions: [
      'Drukarka Zebra ZD621R z ekranem dotykowym — widok pod kątem',
      'Drukarka RFID Zebra ZD621R z ekranem dotykowym, widok z przodu',
    ],
    tags: ['magazyn', 'logistyka', 'produkcja', 'retail'],
    availability: 'on-order',
    isNew: true,
    isBestseller: false,
    keyParams: {
      rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
      rozdzielczosc: '203 lub 300 dpi',
      predkoscDruku: 'do 203 mm/s (203 dpi) lub 152 mm/s (300 dpi)',
      szerokoscDruku: 'do 104 mm (203 dpi) lub 108 mm (300 dpi)',
      szerokoscEtykiet: '15–118 mm',
    },
    specifications: [
      { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder etykiet RAIN UHF RFID' },
      { name: 'Technologia RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID' },
      { name: 'Moduł RFID', value: 'Zebra RE40 z Adaptive Encoding' },
      { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
      { name: 'Rozdzielczość', value: '203 lub 300 dpi — zależnie od PN' },
      { name: 'Prędkość druku', value: 'do 203 mm/s (203 dpi) lub 152 mm/s (300 dpi)' },
      { name: 'Szerokość druku', value: '104 mm (203 dpi) lub 108 mm (300 dpi)' },
      { name: 'Szerokość mediów', value: '15–118 mm' },
      { name: 'Średnica rolki', value: 'do 127 mm' },
      { name: 'Taśma barwiąca', value: '74 m lub 300 m przy druku termotransferowym' },
      { name: 'Ekran', value: 'Dotykowy, kolorowy LCD 4,3 cala' },
      { name: 'Interfejsy standardowe', value: 'USB 2.0, USB Host, Ethernet, port szeregowy' },
      { name: 'Łączność opcjonalna', value: 'Wi-Fi 5 lub Wi-Fi 6 z Bluetooth — zależnie od PN' },
      { name: 'Wymiary', value: '267 × 202 × 192 mm' },
      { name: 'Masa', value: '2,5 kg' },
      { name: 'W zestawie', value: 'Drukarka wybranego wariantu, zasilacz, przewody zasilające EU i UK, przewód USB, gilzy odbiorcze taśmy 12,7 i 25,4 mm, skrócona instrukcja' },
    ],
    variants: [
      { partNumber: 'ZD6A142-30EFR2EZ', name: '203 dpi — standard', attributes: { 'Rozdzielczość': '203 dpi', 'Obsługa etykiet': 'Odrywanie', 'Łączność': 'USB, USB Host, Ethernet, RS-232, BLE 5' }, availability: 'unavailable' },
      { partNumber: 'ZD6A143-30EFR2EZ', name: '300 dpi — standard', attributes: { 'Rozdzielczość': '300 dpi', 'Obsługa etykiet': 'Odrywanie', 'Łączność': 'USB, USB Host, Ethernet, RS-232, BLE 5' }, availability: 'unavailable' },
      { partNumber: 'ZD6A143-30ERR2EZ', name: '300 dpi — Wi-Fi 6', attributes: { 'Rozdzielczość': '300 dpi', 'Obsługa etykiet': 'Odrywanie', 'Łączność': 'USB, USB Host, Ethernet, RS-232, Wi-Fi 6, Bluetooth 5.3' }, availability: 'unavailable' },
      { partNumber: 'ZD6A142-31EFR2EZ', name: '203 dpi — odklejak', attributes: { 'Rozdzielczość': '203 dpi', 'Obsługa etykiet': 'Odklejak', 'Łączność': 'USB, USB Host, Ethernet, RS-232, BLE 5' }, availability: 'unavailable' },
      { partNumber: 'ZD6A143-31EFR2EZ', name: '300 dpi — odklejak', attributes: { 'Rozdzielczość': '300 dpi', 'Obsługa etykiet': 'Odklejak', 'Łączność': 'USB, USB Host, Ethernet, RS-232, BLE 5' }, availability: 'unavailable' },
      { partNumber: 'ZD6A143-32EFR2EZ', name: '300 dpi — obcinacz', attributes: { 'Rozdzielczość': '300 dpi', 'Obsługa etykiet': 'Obcinacz', 'Łączność': 'USB, USB Host, Ethernet, RS-232, BLE 5' }, availability: 'unavailable' },
    ],
    variantAttributeTooltips: {
      'Obsługa etykiet': 'Odrywanie: ręczne oddzielenie wydruku. Odklejak: oddziela etykietę od podkładu. Obcinacz: odcina materiał. Nie wolno przecinać wkładki RFID.',
      'Łączność': 'BLE służy do konfiguracji i nie zastępuje Wi-Fi. Tylko PN ZD6A143-30ERR2EZ ma fabryczne Wi-Fi 6 i Bluetooth 5.3. Wszystkie pokazane warianty mają USB, USB Host, Ethernet i RS-232.',
    },
    applications: [
      'Druk i kodowanie etykiet RFID na towary oraz opakowania',
      'Oznaczanie pojemników i wyposażenia w magazynie',
      'Przygotowanie etykiet RFID do identyfikacji produktów w handlu',
    ],
    compatibleAccessories: [],
    relatedAccessories: zd621rAccessoryIds,
    faq: [
      {
        question: 'Czym ZD621R różni się od ZD621t?',
        answer: 'ZD621R ma wbudowany moduł Zebra RE40 do kodowania etykiet RAIN UHF RFID. ZD621t drukuje widoczną treść etykiety, ale nie koduje jej układu RFID. Jeśli potrzebujesz kodowania radiowego, wybierz model ZD621R.',
      },
      {
        question: 'Czy ZD621R odczyta etykiety RFID podczas inwentaryzacji?',
        answer: 'Nie. Drukarka koduje etykietę podczas jej przygotowania. Do odczytu towarów w magazynie potrzebujesz zgodnego czytnika RAIN UHF RFID i oprogramowania.',
      },
      {
        question: 'Jakie etykiety można kodować w ZD621R?',
        answer: 'Wybierz etykiety RAIN UHF RFID zgodne z drukarką, powierzchnią produktu i zakresem wymiarów urządzenia. Przed zakupem sprawdź rozmiar, położenie wkładki RFID i średnicę rolki. Zwykła etykieta bez układu RFID pozwala tylko na nadruk.',
      },
      {
        question: 'Czy ZD621R wymaga taśmy barwiącej?',
        answer: 'Do druku termotransferowego potrzebujesz taśmy barwiącej. Przy druku termicznym bezpośrednim użyj odpowiedniej etykiety termoczułej bez taśmy. W obu przypadkach kodowanie RFID wymaga etykiety z wkładką RFID.',
      },
      {
        question: 'Którą rozdzielczość wybrać: 203 czy 300 dpi?',
        answer: 'Wybierz 300 dpi, jeśli etykieta ma drobny tekst lub małe kody. Wersja 203 dpi drukuje szybciej. Rozdzielczość dotyczy nadruku i nie określa zasięgu odczytu RFID.',
      },
    ],
    downloads: [
      { name: 'Karta katalogowa ZD621R (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
      { name: 'Katalog akcesoriów do drukarek biurkowych Zebra (EN) — ZD621R, strona 6', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/desktop-printer-guide-accessory-en-us.pdf#page=6', size: '2 MB' },
      { name: 'Sterowniki i instrukcje ZD621', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/desktop/zd621.html', size: 'Online' },
    ],
    relatedProducts: ['zebra-zd621t'],
    createdAt: '2026-10-15',
    sameAs: 'https://www.zebra.com/ap/en/products/printers/desktop/zd600-series/zd621r.html',
  },
  zt411RfidProduct,
  zt610RfidProduct,
  zt231RfidProduct,
  zt421RfidProduct,
  zt620RfidProduct,
  zd611rProduct,
  zq630PlusRfidProduct,
  zq521RfidProduct,
  zq511RfidProduct,
]
