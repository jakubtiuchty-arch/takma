import type { Product } from './products'

export const pm45RfidAccessorySlugs = [
  'honeywell-pm45-glowica-203dpi', 'honeywell-pm45-glowica-300dpi',
  'honeywell-pm45-walek-dociskowy', 'honeywell-pm45-modul-wifi-bt', 'honeywell-pm45-adapter-rdzeni',
]

export const honeywellPm45RfidProducts: Product[] = [{
  id: 'honeywell-pm45-rfid', slug: 'honeywell-pm45-rfid', name: 'Honeywell PM45 RFID', seoH1: 'Honeywell PM45 RFID',
  seoTitle: 'Honeywell PM45 RFID — drukarka UHF EU 203 i 300 dpi | TAKMA',
  seoDescription: 'Honeywell PM45 RFID: fabryczne wersje UHF EU, 203 lub 300 dpi, nawijak i czujnik pobrania etykiety. Ceny, stany i zgodne akcesoria.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID dla Europy. Dwa warianty: 203 dpi z Ethernetem lub 300 dpi z Wi-Fi i Bluetooth. Oba mają ekran dotykowy, RTC, nawijak i czujnik pobrania etykiety.',
  description: `Honeywell PM45 RFID drukuje etykiety i zapisuje dane w układach UHF. Służy do znakowania produktów, opakowań i wyposażenia. Ta oferta obejmuje dwa fabryczne warianty RFID dla Europy.

## Dwa numery katalogowe RFID EU

PM45A1000EU30200 ma 203 dpi, USB, RS-232 i Ethernet. PM45A1200EU30300 ma 300 dpi oraz dodatkowo Wi-Fi i Bluetooth. Obie wersje mają kolorowy ekran dotykowy 3,5 cala, zegar RTC, stały uchwyt rolki, nawijak i czujnik pobrania etykiety LTS.

Kod EU w PN określa regionalny moduł UHF. Nie wybieraj wersji NA lub CN jako zamiennika europejskiej konfiguracji. Pokazane drukarki mają już RFID. Nie wymagają ponownego zakupu modułu 50180233-001.

## Nadruk i kodowanie w jednym zadaniu

Wersja 203 dpi drukuje na szerokości do 108 mm. Wersja 300 dpi drukuje do 105,7 mm. Maksymalna prędkość nadruku wynosi odpowiednio 350 i 300 mm/s. Zapis danych RFID, tryb pracy i materiał mogą wymagać niższej prędkości.

Zadanie musi zawierać polecenia kodowania. Sam plik PDF nie zapisuje EPC w układzie etykiety. Powiąż identyfikator z rekordem produktu lub opakowania w WMS albo ERP. Do odczytu oznaczeń na regałach potrzebujesz osobnego czytnika UHF.

Po zmianie materiału wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym przedmiocie. Położenie wkładki, metal i ciecz wpływają na wynik. Mechaniczny zakres drukarki nie potwierdza zgodności każdej etykiety RFID.

## Etykiety, rolki i taśmy

Pokazane wersje obsługują termotransfer oraz druk termiczny bezpośredni na właściwym materiale. Przy termotransferze dobierz taśmę do 450 m, o szerokości 25–110 mm, na gilzie 25 mm. Drukarka przyjmuje taśmy z barwnikiem po wewnętrznej i zewnętrznej stronie.

Szerokość materiału wynosi 19–114 mm. Maksymalna średnica rolki wynosi 213 mm, a gilza ma 38–76 mm. Minimalna długość etykiety RFID wynosi 25 mm. Sprawdź także położenie anteny i sposób podawania etykiety z odklejaniem.

## Łączność i obsługa

Ethernet pracuje z szybkością 10/100 Mb/s. Wariant PM45A1200EU30300 ma Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0. Nie ma w nim modemu LTE. Wyposażenia dostępnego w innych PM45 nie należy przypisywać tym PN.

Języki Fingerprint, Direct Protocol, IPL, ZSim2 i DPL ułatwiają przygotowanie zadań dla istniejącej aplikacji. Przed wdrożeniem sprawdź zgodność poleceń RFID. C# Smart Printing umożliwia uruchamianie odpowiednio przygotowanych aplikacji na drukarce.

## Zestaw i wymagane elementy

Pokazane PN nie zawierają przewodu zasilającego. Do pracy w Polsce dobierz przewód EU 1-974027-025. Etykiety RFID, taśma barwiąca i przewód danych wymagają osobnego doboru.

Głowica 50180236-001 pasuje do wersji 203 dpi. Wersja 300 dpi wymaga 50180237-001. Wałek 50180235-001 pasuje do PM45. Moduł 50174832-001 dodaje Wi-Fi i Bluetooth do wersji bez tej łączności. Wariant 300 dpi z tej karty ma ją już fabrycznie. Przed zakupem części podaj numer seryjny urządzenia.

## Gwarancja

Gwarancja fabryczna na drukarkę wynosi 1 rok. Płatne umowy serwisowe są osobnymi usługami. Dobierz zakres i okres ochrony do konkretnego PN. Części zużywające się podlegają odrębnym warunkom producenta.

Do nadruku bez kodowania radiowego sprawdź [Honeywell PM45](/produkt/honeywell-pm45). Porównaj także [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid) i [SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'honeywell',
  images: ['/images/products/PM45_1.png', '/images/products/PM45_2.png', '/images/products/PM45_3.png'],
  imageDescriptions: ['Honeywell PM45 RFID — drukarka z ekranem dotykowym, widok pod kątem', 'Honeywell PM45 RFID — obudowa i komora materiałów', 'Honeywell PM45 RFID — prawy bok z oknem komory materiałów'],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'Do 350 mm/s (203 dpi) lub 300 mm/s (300 dpi); RFID zależy od materiału', szerokoscDruku: '108 mm (203 dpi) / 105,7 mm (300 dpi)', szerokoscEtykiet: '19–114 mm; materiał RFID wymaga testu' },
  variants: [
    { partNumber: 'PM45A1000EU30200', name: '203 dpi, UHF EU, Ethernet', attributes: { 'Rozdzielczość': '203 dpi', 'Łączność': 'USB, RS-232, Ethernet' }, availability: 'unavailable' },
    { partNumber: 'PM45A1200EU30300', name: '300 dpi, UHF EU, Wi-Fi + Bluetooth', attributes: { 'Rozdzielczość': '300 dpi', 'Łączność': 'USB, RS-232, Ethernet, Wi-Fi, Bluetooth' }, availability: 'unavailable' },
  ],
  specifications: [
    { name: 'Rozdzielczość', value: '203 lub 300 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'RFID', value: 'UHF EU; fabryczny moduł w obu pokazanych PN' },
    { name: 'Szerokość druku', value: '108 mm przy 203 dpi; 105,7 mm przy 300 dpi' },
    { name: 'Prędkość nadruku', value: 'Do 350 mm/s przy 203 dpi; do 300 mm/s przy 300 dpi; kodowanie może ograniczyć prędkość' },
    { name: 'Obsługa etykiet', value: 'Nawijak i czujnik pobrania etykiety LTS; wspólne dla obu PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
    { name: 'Zegar RTC', value: 'Tak, w obu PN' },
    { name: 'Materiał', value: 'Szerokość 19–114 mm; średnica rolki do 213 mm; gilza 38–76 mm; RFID wymaga doboru wkładki' },
    { name: 'Minimalna długość etykiety RFID', value: '25 mm' },
    { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25–110 mm; gilza 25 mm; barwnik do wewnątrz lub na zewnątrz' },
    { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100 Mb/s; Wi-Fi i Bluetooth zależnie od PN' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash' },
    { name: 'Wymiary', value: '284 × 483 × 295 mm (szer. × gł. × wys.)' },
    { name: 'Przewód zasilający', value: 'Brak w obu PN; przewód EU 1-974027-025 dobierz osobno' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej; części zużywające się na odrębnych warunkach' },
  ],
  compatibleAccessories: [], relatedAccessories: pm45RfidAccessorySlugs,
  applications: ['Druk i kodowanie etykiet UHF na produkty i opakowania', 'Znakowanie wyposażenia', 'Identyfikacja powiązana z WMS lub ERP'],
  faq: [
    { question: 'Czy każda Honeywell PM45 ma RFID?', answer: 'Nie. Ta karta obejmuje dwa PN z fabrycznym UHF EU. Zwykła PM45 wymaga zgodnej konfiguracji lub osobnego zestawu RFID.' },
    { question: 'Czy moduł RFID trzeba kupić osobno?', answer: 'Nie dla PM45A1000EU30200 i PM45A1200EU30300. Oba mają fabryczne RFID EU.' },
    { question: 'Czy drukarka ma przewód zasilający?', answer: 'Nie. Pokazane PN nie zawierają przewodu. Do pracy w Polsce dobierz osobno przewód EU 1-974027-025.' },
    { question: 'Który wariant ma Wi-Fi i Bluetooth?', answer: 'PM45A1200EU30300, czyli wersja 300 dpi. Wersja 203 dpi PM45A1000EU30200 ma połączenia przewodowe.' },
  ],
  downloads: [
    { name: 'Karta katalogowa PM45 / PM65 (EN)', type: 'datasheet', url: '/downloads/honeywell-pm45-pm65-karta-en.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów PM45 / PM65 (EN)', type: 'manual', url: '/downloads/honeywell-pm45-pm65-akcesoria-en.pdf', size: 'PDF' },
    { name: 'Instrukcje i sterowniki PM45', type: 'driver', url: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer', size: 'Online' },
  ],
  relatedProducts: ['honeywell-pm45', 'zebra-zt411-rfid', 'zebra-zt610-rfid'],
  sameAs: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer', createdAt: '2026-10-16',
}]
