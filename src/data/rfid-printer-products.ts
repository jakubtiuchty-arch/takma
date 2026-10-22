import { bixolonRfidProducts } from './bixolon-rfid-products'
import { honeywellPx45RfidProducts } from './honeywell-px45-rfid-products'
import { satoCl6nxPlusRfidProducts } from './sato-cl6nx-plus-rfid-products'
import { satoCl4nxPlusRfidProducts } from './sato-cl4nx-plus-rfid-products'
import { honeywellPx65RfidProducts } from './honeywell-px65-rfid-products'
import { honeywellPm45RfidProducts } from './honeywell-pm45-rfid-products'
import { satoCl6SxrRfidProducts } from './sato-cl6-sxr-rfid-products'
import { satoCl4SxrRfidProducts } from './sato-cl4-sxr-rfid-products'
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
  ...bixolonRfidProducts,
  ...satoCt4RfidProducts,
  ...satoCl4SxrRfidProducts,
  ...satoCl6SxrRfidProducts,
  ...satoCl4nxPlusRfidProducts,
  ...satoCl6nxPlusRfidProducts,
  ...honeywellPm45RfidProducts,
  ...honeywellPx65RfidProducts,
  ...honeywellPx45RfidProducts,
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
    seoTitle: 'Zebra ZD621R — drukarka RFID UHF 203/300 dpi',
    seoDescription: 'Zebra ZD621R – biurkowa drukarka RFID UHF 203 lub 300 dpi z modułem RE40. Druk do 108 mm, taśma 300 m, port szeregowy w standardzie, wersja z Wi-Fi 6.',
    description: `Zebra ZD621R to 4-calowa biurkowa drukarka RFID UHF z czytnikiem i koderem Zebra RE40. Obsługuje etykiety zgodne z EPC Gen 2 v2.1, ISO/IEC 18000-63 i RAIN RFID. Ramię kontrolujące przesuw materiału stabilizuje nadruk niezależnie od prędkości.

## Rejestr RFID i certyfikat w ponad 70 krajach

Kodowanie adaptacyjne upraszcza konfigurację i usuwa złożone wytyczne rozmieszczenia wkładek. Rejestr RFID zapisuje wszystkie dane RFID ze znacznikami czasu. Narzędzia monitorowania zadań śledzą wyniki kodowania. Wkładki mogą występować co 16 mm, a certyfikat RFID obejmuje ponad 70 krajów.

## Taśma 74 m lub 300 m

ZD621R przyjmuje taśmę 300 m na gilzie 25,4 mm albo 74 m na gilzie 12,7 mm. Szerokość taśmy wynosi 33–109,2 mm. Materiał ma 15–118 mm szerokości, a rolka do 127 mm średnicy. Wersja 203 dpi drukuje do 104 mm szerokości i 203 mm/s, a 300 dpi do 108 mm i 152 mm/s.

## Odklejak, obcinacz i Wi-Fi 6 w wariantach ZD6A14x

Port szeregowy, Ethernet, USB 2.0 i USB Host są w ZD621R standardowe. W ofercie są wersje do odrywania, z odklejakiem i z obcinaczem. Wariant ZD6A143-30ERR2EZ ma fabryczny moduł Wi-Fi 802.11ax z Bluetooth 5.3. Futerał ochronny nie pasuje do drukarki z obcinaczem lub odklejakiem.

Mniejsza [Zebra ZD611R](/produkt/zebra-zd611r) przyjmuje materiał do 60 mm i taśmę 74 m.`,
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
      { name: 'Odstęp wkładek RFID', value: 'Od 16 mm' },
      { name: 'Taśma barwiąca', value: '74 m (gilza 12,7 mm) lub 300 m (gilza 25,4 mm); szerokość 33–109,2 mm' },
      { name: 'Ekran', value: 'Dotykowy, kolorowy LCD 4,3 cala' },
      { name: 'Interfejsy standardowe', value: 'USB 2.0, USB Host, Ethernet, port szeregowy' },
      { name: 'Łączność opcjonalna', value: 'Wi-Fi 5 lub Wi-Fi 6 z Bluetooth — zależnie od PN' },
      { name: 'Wymiary', value: '267 × 202 × 192 mm' },
      { name: 'Masa', value: '2,5 kg' },
      { name: 'Temperatura pracy', value: '4,4–41°C' },
      { name: 'W zestawie', value: 'Drukarka wybranego wariantu, zasilacz, przewody zasilające EU i UK, przewód USB, gilzy odbiorcze taśmy 12,7 i 25,4 mm, skrócona instrukcja' },
      { name: 'Gwarancja', value: 'Co najmniej 2 lata od daty wysyłki; warunki zależą od regionu' },
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
    applications: ['Etykiety RFID na odzież i towar w sklepie', 'Kodowanie etykiet UHF z rejestrem danych RFID'],
    compatibleAccessories: [],
    relatedAccessories: zd621rAccessoryIds,
    faq: [
      { question: 'Który wariant ZD621R ma Wi-Fi?', answer: 'ZD6A143-30ERR2EZ z głowicą 300 dpi. Ma moduł Wi-Fi 802.11ax z Bluetooth 5.3. Pozostałe warianty używają BLE 5 tylko do konfiguracji.' },
      { question: 'Jaką taśmę przyjmuje ZD621R?', answer: 'Taśmę 300 m na gilzie 25,4 mm lub 74 m na gilzie 12,7 mm. Szerokość taśmy wynosi 33–109,2 mm. Gilzy odbiorcze obu rozmiarów są w zestawie.' },
      { question: 'Czy ZD621R pracuje bez zasilania sieciowego?', answer: 'Tak. Opcjonalna bateria 2750 mAh pozwala przewozić drukarkę na wózku i drukować w miejscu pracy.' },
    ],
    downloads: [
      { name: 'Karta katalogowa Zebra ZD611R / ZD621R RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zd600-rfid-karta-pl.pdf', size: 'PDF' },
      { name: 'Karta katalogowa ZD621R (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
      { name: 'Katalog akcesoriów do drukarek biurkowych Zebra (EN) — ZD621R, strona 6', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/desktop-printer-guide-accessory-en-us.pdf#page=6', size: '2,9 MB' },
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
