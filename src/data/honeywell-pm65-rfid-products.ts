import type { Product } from './products'

export const pm65RfidAccessorySlugs = [
  'honeywell-pm65-glowica-203dpi', 'honeywell-pm65-walek-dociskowy',
  'honeywell-pm65-modul-wifi', 'honeywell-pm65-odklejak', 'honeywell-pm65-skladany-rdzen',
]

export const honeywellPm65RfidProducts: Product[] = [{
  id: 'honeywell-pm65-rfid', slug: 'honeywell-pm65-rfid', name: 'Honeywell PM65 RFID', seoH1: 'Honeywell PM65 RFID',
  seoTitle: 'Honeywell PM65 RFID — drukarka UHF EU 6 cali, 203 dpi | TAKMA',
  seoDescription: 'Honeywell PM65 RFID, PN PM65A1000EU30202: UHF EU, 203 dpi, druk do 167,4 mm, ekran dotykowy i nawijak. Sprawdź ofertę i zgodne akcesoria.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID EU do szerokich etykiet. Wariant 203 dpi drukuje do 167,4 mm. Ma ekran dotykowy, Ethernet, RTC, nawijak i czujnik pobrania etykiety.',
  description: `Honeywell PM65 RFID drukuje szerokie etykiety i zapisuje dane w ich układach UHF. Służy do znakowania kartonów, palet i wyposażenia. Ta karta obejmuje fabryczną konfigurację RFID dla Europy.

## Fabryczne RFID EU — PM65A1000EU30202

PN PM65A1000EU30202 ma głowicę 203 dpi, koder UHF EU, USB, RS-232 i Ethernet. Zawiera ekran dotykowy, zegar RTC, stały uchwyt rolki, nawijak i czujnik pobrania etykiety LTS. Przewód zasilający EU jest częścią zestawu.

Moduł RFID jest już zamontowany. Nie trzeba zamawiać go ponownie. Wersje NA i CN mają inne ustawienia regionalne. Do pracy w Polsce wybierz konfigurację EU.

## Szerokie etykiety z nadrukiem i identyfikatorem EPC

Maksymalna szerokość nadruku wynosi 167,4 mm. Pozwala umieścić tekst, kody kreskowe i oznaczenia logistyczne na jednej szerokiej etykiecie. Prędkość nadruku sięga 300 mm/s. Kodowanie RFID i właściwości materiału mogą wymagać wolniejszej pracy.

Zadanie druku musi zawierać polecenia zapisu RFID. Sam PDF nie koduje układu etykiety. Powiąż identyfikator EPC z rekordem w WMS lub ERP. Do odczytu gotowych oznaczeń w magazynie potrzebujesz osobnego czytnika UHF.

Po zmianie rolki wykonaj kalibrację materiału i kodowania. Sprawdź zapis oraz odczyt na docelowym opakowaniu. Metal, ciecz i położenie wkładki wpływają na zasięg. Dobór etykiety wymaga testu; sama szerokość rolki nie potwierdza zgodności RFID.

## Materiał i taśmy barwiące

PM65 obsługuje materiał o szerokości około 51–178 mm. Maksymalna średnica rolki wynosi 213 mm, a średnica gilzy 38–76 mm. Minimalna długość etykiety RFID wynosi 25,4 mm. Sprawdź także położenie anteny i wymagania podawania z odklejaniem.

Wersja termotransferowa przyjmuje taśmę do 450 m, o szerokości 50,8–172,7 mm, na gilzie 25,4 mm. Obsługuje barwnik po wewnętrznej lub zewnętrznej stronie taśmy. Dobierz szerokość taśmy do materiału. Druk termiczny bezpośredni wymaga odpowiedniej etykiety i nie używa taśmy barwiącej.

## Łączność i integracja

Pokazany PN ma USB, RS-232 i Ethernet 10/100 Mb/s. Wi-Fi i Bluetooth wymagają osobnego modułu PM65-WL-ROW. Ten zestaw dodaje Wi-Fi 6 i Bluetooth 5.2. Nie należy przypisywać łączności bezprzewodowej podstawowej konfiguracji z tej karty.

Fingerprint, Direct Protocol, IPL, ZSim2 i DPL umożliwiają przygotowanie zadań z systemu nadrzędnego. Sprawdź zgodność poleceń kodowania przed migracją z innej drukarki. C# Smart Printing obsługuje odpowiednio przygotowane aplikacje uruchamiane na urządzeniu.

## Zestaw, akcesoria i części zamienne

Drukarka ma fabryczny nawijak, LTS oraz przewód zasilający EU. Etykiety RFID, taśmę barwiącą i przewód danych dobierz osobno. Nie dokupuj nawijaka ani kodera jako elementów wymaganych do tego PN.

Głowica PM65-TPH-203 jest częścią zamienną do wersji 203 dpi. Wałek PM65-PR i składany rdzeń PM65-CC służą do wymiany zużytych elementów. Rdzeń umożliwia nawijanie bez gilzy i zwiększa pojemność odbioru taśmy. Nie jest adapterem rolki wejściowej.

Odklejak PM65-LD służy do podawania etykiet z mocnym klejem. Wymaga nawijaka, który ten PN ma fabrycznie. Przed zakupem części lub rozbudową podaj numer seryjny drukarki. Sprawdź podawanie docelowej etykiety RFID w wybranym trybie pracy.

## Gwarancja

Gwarancja fabryczna na drukarkę wynosi 1 rok. Umowy serwisowe są osobnymi usługami. Części zużywające się podlegają odrębnym warunkom producenta.

Do samego nadruku sprawdź [Honeywell PM65](/produkt/honeywell-pm65). Węższe etykiety obsługuje [Honeywell PM45 RFID](/produkt/honeywell-pm45-rfid). Porównaj także [Zebra ZT421 RFID](/produkt/zebra-zt421-rfid) i [Zebra ZT620 RFID](/produkt/zebra-zt620-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'honeywell',
  images: ['/images/products/PM65_1.png'],
  imageDescriptions: ['Honeywell PM65 RFID — drukarka 6-calowa z ekranem dotykowym, widok pod kątem'],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203 dpi', predkoscDruku: 'Do 300 mm/s; kodowanie zależy od materiału', szerokoscDruku: 'Do 167,4 mm', szerokoscEtykiet: 'Około 51–178 mm; RFID wymaga doboru wkładki' },
  variants: [
    { partNumber: 'PM65A1000EU30202', name: '203 dpi, UHF EU, Ethernet, nawijak + LTS', attributes: {}, availability: 'unavailable' },
  ],
  specifications: [
    { name: 'Part Number', value: 'PM65A1000EU30202' },
    { name: 'RFID', value: 'Fabryczny koder UHF EU; EPC Gen2 / ISO/IEC 18000-63' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 167,4 mm' },
    { name: 'Prędkość nadruku', value: 'Do 300 mm/s; kodowanie i materiał mogą ograniczyć prędkość' },
    { name: 'Wyposażenie', value: 'Ekran dotykowy, RTC, stały uchwyt rolki, nawijak, LTS' },
    { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100 Mb/s; Wi-Fi i Bluetooth po rozbudowie' },
    { name: 'Materiał', value: 'Szerokość około 51–178 mm; średnica rolki do 213 mm; gilza 38–76 mm' },
    { name: 'Minimalna długość etykiety RFID', value: '25,4 mm; położenie wkładki wymaga sprawdzenia' },
    { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 50,8–172,7 mm; gilza 25,4 mm; barwnik do wewnątrz lub na zewnątrz' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash' },
    { name: 'Wymiary', value: '350 × 484 × 292 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '13,7 kg' },
    { name: 'Przewód zasilający', value: 'EU w zestawie z PN PM65A1000EU30202' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej; części zużywające się na odrębnych warunkach' },
  ],
  compatibleAccessories: [], relatedAccessories: pm65RfidAccessorySlugs,
  applications: ['Druk i kodowanie szerokich etykiet UHF na kartony i palety', 'Identyfikacja wyposażenia', 'Powiązanie identyfikatora EPC z WMS lub ERP'],
  faq: [
    { question: 'Czy każda Honeywell PM65 ma RFID?', answer: 'Nie. Ta karta obejmuje PN PM65A1000EU30202 z fabrycznym UHF EU. Zwykła PM65 wymaga zgodnego zestawu do rozbudowy.' },
    { question: 'Czy do tej drukarki trzeba dokupić moduł RFID?', answer: 'Nie. PN PM65A1000EU30202 ma już koder UHF EU, nawijak i czujnik pobrania etykiety.' },
    { question: 'Czy zestaw zawiera przewód zasilający EU?', answer: 'Tak. Konfiguracja PM65A1000EU30202 zawiera przewód zasilający EU. Materiały eksploatacyjne i przewód danych dobierz osobno.' },
    { question: 'Czy PM65A1000EU30202 ma Wi-Fi?', answer: 'Ma połączenia przewodowe: USB, RS-232 i Ethernet. Wi-Fi 6 oraz Bluetooth 5.2 wymagają osobnego zestawu PM65-WL-ROW.' },
    { question: 'Jaką głowicę dobrać do tej wersji PM65 RFID?', answer: 'Wersja 203 dpi używa głowicy PM65-TPH-203. Głowica 300 dpi nie jest bezpośrednim zamiennikiem bez sprawdzenia konfiguracji urządzenia.' },
  ],
  downloads: [
    { name: 'Karta katalogowa PM45 / PM65 (EN)', type: 'datasheet', url: '/downloads/honeywell-pm45-pm65-karta-en.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów PM45 / PM65 (EN)', type: 'manual', url: '/downloads/honeywell-pm45-pm65-akcesoria-en.pdf', size: 'PDF' },
    { name: 'Instrukcja obsługi PM45 / PM65 (EN)', type: 'manual', url: '/instrukcje/honeywell-pm45-65-ug-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i pliki PM65', type: 'driver', url: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm65-industrial-printer', size: 'Online' },
  ],
  relatedProducts: ['honeywell-pm45-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid'],
  sameAs: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm65-industrial-printer', createdAt: '2026-10-16',
}]
