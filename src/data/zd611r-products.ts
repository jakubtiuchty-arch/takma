import type { Product } from './products'
import { zd611rAccessoryIds } from './zd611r-accessories'

// Dwa standardowe PN EU/ROW, model 1025997 w Solutions Pathway, 15.10.2026.
export const zd611rProduct: Product = {
  id: 'zebra-zd611r', slug: 'zebra-zd611r', name: 'Zebra ZD611R', seoH1: 'Zebra ZD611R',
  seoTitle: 'Zebra ZD611R — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Zebra ZD611R: 2-calowa biurkowa drukarka i koder RAIN UHF 203 lub 300 dpi do wąskich etykiet 15–60 mm. Ethernet, ekran dotykowy 4,3 cala.',
  shortDescription: 'Biurkowa drukarka Zebra ZD611R drukuje i koduje wąskie etykiety RAIN UHF RFID. Wersje 203 i 300 dpi, Ethernet oraz ekran dotykowy 4,3 cala.',
  description: `Zebra ZD611R to biurkowa drukarka i koder wąskich etykiet RAIN UHF RFID. Wykonuje nadruk i zapisuje identyfikator w układzie elektronicznym etykiety.

## RFID na małym stanowisku pracy

ZD611R należy do klasy drukarek 2-calowych. Obsługuje materiał o szerokości 15–60 mm. Obudowa ma 138,7 mm szerokości. Model służy do przygotowania oznaczeń produktów, pojemników i wyposażenia, gdy etykieta nie wymaga szerokiego nadruku.

Wbudowany moduł Zebra RE40 obsługuje EPC UHF Gen2 v2.1, ISO/IEC 18000-63 i RAIN RFID. Adaptive Encoding ułatwia kalibrację kodowania. Minimalny odstęp kolejnych wkładek wynosi 16 mm dla zgodnego materiału. Przed wdrożeniem sprawdź zapis i odczyt etykiety na docelowym przedmiocie.

Drukarka sprawdza etykietę w swoim torze materiałów. Do radiowej inwentaryzacji towarów na półkach potrzebujesz osobnego czytnika UHF RFID oraz oprogramowania. Sam nadruk kodu kreskowego nie zastępuje zapisu identyfikatora EPC.

## Warianty 203 i 300 dpi

ZD6A122-T0EER2EZ ma rozdzielczość 203 dpi. Drukuje z prędkością do 203 mm/s i szerokością do 56 mm. ZD6A123-T0EER2EZ ma 300 dpi. Drukuje z prędkością do 152 mm/s i szerokością do 54 mm. Prędkość kodowania zależy także od etykiety, danych i ustawień.

Wybierz 300 dpi do drobnego tekstu i niewielkich kodów. Wersja 203 dpi umożliwia szybszy nadruk. Rozdzielczość wpływa na szczegółowość nadruku, a nie zasięg odczytu RFID. Oba oferowane PN mają fabryczny koder UHF, kolorowy ekran dotykowy 4,3 cala oraz przewody zasilające EU i UK.

## Etykiety i taśma 74 m

Druk termotransferowy wymaga taśmy barwiącej o długości 74 m i szerokości 33–58 mm, na gilzie 12,7 mm. Taśma powinna osłaniać całą szerokość zadrukowywanego materiału. ZD611R nie korzysta z taśmy 300 m stosowanej w szerszych modelach.

Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy. W obu metodach kodowanie wymaga etykiety z wkładką RFID. Maksymalna średnica rolki wynosi 127 mm. Standardowe średnice wewnętrzne gilz to 12,7 i 25,4 mm. Większe gilzy wymagają zgodnych adapterów.

## Łączność i obsługa

Oba PN mają USB 2.0, USB Host oraz Ethernet. Bluetooth Low Energy 5 służy do konfiguracji i nie zastępuje połączenia do drukowania. Oferowane PN nie mają fabrycznego Wi-Fi ani RS-232. Łączność można rozbudować zgodnym modułem. Przed montażem RS-232 sprawdź zajęcie gniazda interfejsu oraz potrzebę zachowania Ethernetu.

Ekran dotykowy pokazuje ustawienia, stan drukarki i wskazówki dotyczące materiałów. Link-OS oraz narzędzia Zebra DNA wspierają konfigurację i zarządzanie. Przed integracją z WMS lub ERP ustal format EPC, źródło danych i obsługę błędnych etykiet.

## Akcesoria i dobór modelu

Dobierz odklejak P1117258-230 albo obcinacz P1117258-231 do sposobu odbioru etykiet. Obcinacz musi ciąć materiał między wkładkami RFID. Głowicę i wałek dociskowy dobierz do rozdzielczości urządzenia. Części wersji termicznej ZD611d nie zastępują części ZD611R.

ZD611R ma fabryczny koder RFID. Zwykła ZD611t bez takiego kodera wykonuje wyłącznie nadruk. Jeśli potrzebujesz szerszych etykiet RFID, sprawdź [Zebra ZD621R](/produkt/zebra-zd621r). Etykiety, taśma oraz dodatkowe moduły są sprzedawane osobno.

## Dostępność i gwarancja

Sprzedaż PN ZD6A122-T0EER2EZ i ZD6A123-T0EER2EZ kończy się 1 stycznia 2027 r. Ostatnie wysyłki zaplanowano na 31 stycznia 2027 r., do wyczerpania zapasów. Przed zamówieniem potwierdź możliwość realizacji.

Gwarancja na drukarkę w regionie EMEA wynosi 36 miesięcy dla urządzeń kupionych po 1 kwietnia 2024 r. Głowica ma odrębny limit: 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
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
    { name: 'W zestawie', value: 'Drukarka z koderem RFID, zasilacz, przewody EU i UK, przewód USB, gilza odbiorcza taśmy 12,7 mm, skrócona instrukcja' },
    { name: 'Gwarancja EMEA', value: 'Drukarka: 36 miesięcy dla zakupu po 1 kwietnia 2024 r.; głowica: 12 miesięcy lub milion cali druku' },
    { name: 'Koniec sprzedaży oferowanych PN', value: '1 stycznia 2027 r.; ostatnia wysyłka 31 stycznia 2027 r., do wyczerpania zapasów' },
  ],
  variants: [
    { partNumber: 'ZD6A122-T0EER2EZ', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': 'do 56 mm', 'Prędkość druku': 'do 203 mm/s' }, availability: 'unavailable' },
    { partNumber: 'ZD6A123-T0EER2EZ', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': 'do 54 mm', 'Prędkość druku': 'do 152 mm/s' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: { 'Prędkość druku': 'Maksymalna prędkość nadruku. Wydajność zadania RFID zależy również od etykiety, ilości danych i kalibracji.' },
  applications: ['Druk i kodowanie wąskich etykiet RFID na produkty', 'Oznaczanie pojemników i wyposażenia', 'Przygotowanie identyfikatorów EPC przy stanowisku pracy'],
  compatibleAccessories: [], relatedAccessories: zd611rAccessoryIds,
  faq: [
    { question: 'Czym ZD611R różni się od ZD611t?', answer: 'ZD611R ma fabryczny moduł RE40 do kodowania etykiet RAIN UHF RFID. Zwykła ZD611t bez tego modułu wykonuje tylko nadruk. Sama etykieta z wkładką RFID nie dodaje drukarce funkcji kodowania.' },
    { question: 'Kiedy wybrać ZD611R zamiast ZD621R?', answer: 'Wybierz ZD611R do wąskich etykiet i małego stanowiska. Obsługuje materiał 15–60 mm. Jeśli potrzebujesz szerszych etykiet, wybierz ZD621R. ZD611R ma taśmę 74 m, a ZD621R obsługuje także taśmę 300 m.' },
    { question: 'Czy obie rozdzielczości mają tę samą szerokość druku?', answer: 'Nie. Wersja 203 dpi drukuje do 56 mm, a wersja 300 dpi do 54 mm. Szerokość materiału może wynosić do 60 mm. Obszar nadruku musi mieścić się w limicie wybranego wariantu.' },
    { question: 'Czy ZD611R ma Wi-Fi i Bluetooth do drukowania?', answer: 'Oferowane PN nie mają fabrycznego Wi-Fi. Mają Ethernet, USB i USB Host. BLE 5 służy do konfiguracji. Do drukowania bezprzewodowego potrzebujesz zgodnego modułu Wi-Fi i Bluetooth.' },
    { question: 'Czy drukarka wymaga taśmy barwiącej?', answer: 'Druk termotransferowy wymaga taśmy 74 m, o szerokości 33–58 mm, na gilzie 12,7 mm. Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy. Obie metody kodowania wymagają etykiety z wkładką RFID.' },
    { question: 'Czy ZD611R odczyta towary na regale?', answer: 'Nie. ZD611R zapisuje i sprawdza wkładkę podczas wydruku. Do inwentaryzacji radiowej potrzebujesz osobnego czytnika UHF RFID oraz oprogramowania.' },
    { question: 'Czy podane PN będą nadal dostępne?', answer: 'Zakończenie sprzedaży ZD6A122-T0EER2EZ i ZD6A123-T0EER2EZ zaplanowano na 1 stycznia 2027 r. Ostatnie wysyłki mają nastąpić do 31 stycznia 2027 r., do wyczerpania zapasów. Przed zakupem potwierdź możliwość realizacji.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZD621R / ZD611R (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Akcesoria do ZD611R (EN) — strona 9', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/desktop-printer-guide-accessory-en-us.pdf#page=9', size: 'PDF' },
    { name: 'Katalog części ZD611R (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/manual/zd611r-manual-parts-catalog-en-us.pdf', size: 'PDF' },
    { name: 'Instrukcja obsługi ZD611R (EN)', type: 'manual', url: 'https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/zd611r-ug-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie Zebra ZD611R', type: 'driver', url: 'https://www.zebra.com/gb/en/support-downloads/printers/desktop/zd611.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zd621r', 'zebra-zt231-rfid', 'zebra-zd411t'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/gb/en/products/printers/desktop/zd600-series/zd611r.html',
}
