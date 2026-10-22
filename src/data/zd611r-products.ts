import type { Product } from './products'
import { zd611rAccessoryIds } from './zd611r-accessories'

// Dwa standardowe PN EU/ROW, model 1025997 w Solutions Pathway, 15.10.2026.
export const zd611rProduct: Product = {
  id: 'zebra-zd611r', slug: 'zebra-zd611r', name: 'Zebra ZD611R', seoH1: 'Zebra ZD611R',
  seoTitle: 'Zebra ZD611R — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZD611R – 2-calowa biurkowa drukarka RFID UHF 203 lub 300 dpi. Moduł RE40, materiał 15–60 mm, odstęp wkładek 16 mm, ekran dotykowy 4,3 cala.',
  shortDescription: 'Biurkowa drukarka Zebra ZD611R drukuje i koduje wąskie etykiety RAIN UHF RFID. Wersje 203 i 300 dpi, Ethernet oraz ekran dotykowy 4,3 cala.',
  description: `Zebra ZD611R to 2-calowa biurkowa drukarka RFID UHF z czytnikiem i koderem Zebra RE40. Koduje wąskie etykiety zgodne z EPC Gen 2 v2.1, ISO/IEC 18000-63 i RAIN RFID. Obudowa ma 138,7 mm szerokości, a drukarka waży 1,629 kg.

## Wąski materiał 15–60 mm

Materiał może mieć 15–60 mm szerokości. Wersja 203 dpi drukuje do 56 mm szerokości z prędkością do 203 mm/s. Wersja 300 dpi drukuje do 54 mm szerokości z prędkością do 152 mm/s. Etykieta może mieć 6,35–991 mm długości, a wkładki mogą występować co 16 mm.

## Taśma 74 m i rolka 127 mm

ZD611R pracuje z taśmą 74 m na gilzie 12,7 mm, o szerokości 33–58 mm. Rolka materiału ma do 127 mm średnicy. Standardowe gilzy mają 12,7 i 25,4 mm, a gilzy 38,1, 50,8 i 76,2 mm wymagają adapterów. W trybie odrywania materiał może mieć 0,06–0,19 mm grubości.

## Ethernet, BLE 5 i opcjonalny port szeregowy

Drukarka ma Ethernet, USB 2.0, USB Host i zegar RTC. Bluetooth Low Energy 5 służy tylko do aplikacji Zebra do konfiguracji drukarki. Port szeregowy jest w ZD611R opcją. Moduł Wi-Fi 802.11ax z Bluetooth 5.3 montuje się fabrycznie, a moduł Wi-Fi 802.11ac z Bluetooth 4.1 także u klienta. Odklejak z czujnikiem obecności etykiety i obcinacz można zamontować fabrycznie lub później.

4-calowa [Zebra ZD621R](/produkt/zebra-zd621r) przyjmuje materiał do 118 mm i ma port szeregowy w standardzie.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zd611r-framed.webp'],
  imageDescriptions: ['Zebra ZD611R — biurkowa drukarka RFID do wąskich etykiet, widok z przodu pod kątem'],
  tags: ['magazyn', 'retail', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'do 203 mm/s (203 dpi) lub 152 mm/s (300 dpi)',
    szerokoscDruku: 'do 56 mm (203 dpi) lub 54 mm (300 dpi)', szerokoscEtykiet: '15–60 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder wąskich etykiet RAIN UHF RFID' },
    { name: 'RFID', value: 'Zebra RE40; EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Szerokość druku', value: '56 mm (203 dpi), 54 mm (300 dpi)' },
    { name: 'Prędkość nadruku', value: 'do 203 mm/s (203 dpi), 152 mm/s (300 dpi); kodowanie może zmniejszyć wydajność' },
    { name: 'Szerokość mediów', value: '15–60 mm' },
    { name: 'Rolka etykiet', value: 'Średnica do 127 mm; gilza 12,7 lub 25,4 mm; większe gilzy z adapterami' },
    { name: 'Taśma barwiąca', value: '74 m; szerokość 33–58 mm; gilza 12,7 mm' },
    { name: 'Odstęp wkładek RFID', value: 'Od 16 mm dla zgodnego materiału; wymagana kalibracja' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy LCD 4,3 cala, 480 × 272 px' },
    { name: 'Interfejsy oferowanych PN', value: 'USB 2.0, USB Host, Ethernet, BLE 5 do konfiguracji; bez fabrycznego Wi-Fi i RS-232' },
    { name: 'Odbiór etykiet', value: 'Ręczne odrywanie; odklejak i obcinacz opcjonalnie' },
    { name: 'Pamięć', value: '512 MB Flash i 256 MB SDRAM' },
    { name: 'System i języki', value: 'Link-OS, ZPL II, EPL 2' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '242,9 × 138,7 × 169,2 mm' },
    { name: 'Masa', value: '1,629 kg' },
    { name: 'Temperatura pracy', value: '4,4–41°C' },
    { name: 'W zestawie', value: 'Drukarka z koderem RFID, zasilacz, przewody EU i UK, przewód USB, gilza odbiorcza taśmy 12,7 mm, skrócona instrukcja' },
    { name: 'Gwarancja', value: 'Co najmniej 2 lata od daty wysyłki; warunki zależą od regionu' },
    { name: 'Koniec sprzedaży oferowanych PN', value: '1 stycznia 2027 r.; ostatnia wysyłka 31 stycznia 2027 r., do wyczerpania zapasów' },
  ],
  variants: [
    { partNumber: 'ZD6A122-T0EER2EZ', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': 'do 56 mm', 'Prędkość druku': 'do 203 mm/s' }, availability: 'unavailable' },
    { partNumber: 'ZD6A123-T0EER2EZ', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': 'do 54 mm', 'Prędkość druku': 'do 152 mm/s' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: { 'Prędkość druku': 'Maksymalna prędkość nadruku. Wydajność zadania RFID zależy również od etykiety, ilości danych i kalibracji.' },
  applications: ['Wąskie etykiety RFID od 15 do 60 mm', 'Opaski RFID na rękę dla pacjentów i gości imprez'],
  compatibleAccessories: [], relatedAccessories: zd611rAccessoryIds,
  faq: [
    { question: 'Do czego służy Bluetooth Low Energy w ZD611R?', answer: 'Tylko do aplikacji Zebra do konfiguracji drukarki na Androidzie i iOS. Do druku służą Ethernet i USB albo opcjonalny moduł Wi-Fi z Bluetooth.' },
    { question: 'Czy podane PN ZD611R będą nadal dostępne?', answer: 'Sprzedaż ZD6A122-T0EER2EZ i ZD6A123-T0EER2EZ kończy się 1 stycznia 2027 r. Ostatnie wysyłki zaplanowano do 31 stycznia 2027 r., do wyczerpania zapasów.' },
    { question: 'Czy ZD611R może pracować na baterii?', answer: 'Tak, z opcjonalną baterią 2750 mAh. Bateria pozwala drukować z maksymalną prędkością i obsługuje wszystkie opcje materiałów.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZD611R / ZD621R RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zd600-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZD621R / ZD611R (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Akcesoria do ZD611R (EN) — strona 9', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/desktop-printer-guide-accessory-en-us.pdf#page=9', size: 'PDF' },
    { name: 'Katalog części ZD611R (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/manual/zd611r-manual-parts-catalog-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja obsługi ZD611R (EN)', type: 'manual', url: 'https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/zd611r-ug-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie Zebra ZD611R', type: 'driver', url: 'https://www.zebra.com/gb/en/support-downloads/printers/desktop/zd611.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zd621r', 'zebra-zt231-rfid', 'zebra-zd411t'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/gb/en/products/printers/desktop/zd600-series/zd611r.html',
}
