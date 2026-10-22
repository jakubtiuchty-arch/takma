import type { Product } from './products'

export const pm45RfidAccessorySlugs = [
  'honeywell-pm45-glowica-203dpi', 'honeywell-pm45-glowica-300dpi',
  'honeywell-pm45-walek-dociskowy', 'honeywell-pm45-modul-wifi-bt', 'honeywell-pm45-adapter-rdzeni',
]

export const honeywellPm45RfidProducts: Product[] = [{
  id: 'honeywell-pm45-rfid', slug: 'honeywell-pm45-rfid', name: 'Honeywell PM45 RFID', seoH1: 'Honeywell PM45 RFID',
  seoTitle: 'Honeywell PM45 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Honeywell PM45 RFID – przemysłowa drukarka RFID UHF 203 lub 300 dpi. Druk do 350 mm/s, rolka 213 mm, taśma 450 m, wersja z Wi-Fi 6 i Bluetooth 5.1.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID. Dwa warianty: 203 dpi z Ethernetem lub 300 dpi z Wi-Fi 6 i Bluetooth 5.1. Oba mają ekran dotykowy, nawijak i czujnik pobrania etykiety.',
  description: `Honeywell PM45 RFID to przemysłowa drukarka RFID UHF z pełnym ekranem dotykowym. Koduje wkładki zgodne z EPC Gen 2 V2.1, ISO/IEC 18000-63 i RAIN RFID oraz drukuje etykiety o szerokości do 108 mm. Moduł radiowy jest skonfigurowany zgodnie z lokalnymi przepisami UHF, w tym ETSI.

## PM45A1000EU30200 i PM45A1200EU30300

PM45A1000EU30200 ma głowicę 203 dpi i drukuje do 350 mm/s. PM45A1200EU30300 ma 300 dpi i drukuje do 300 mm/s. Obie wersje mają Ethernet 10/100, USB 2.0 Device, USB 2.0 Host i RS-232. Wersja 300 dpi ma dodatkowo Wi-Fi 802.11a/b/g/n/ac/ax i Bluetooth 5.1. Dokładność pozycji nadruku wynosi ±0,5 mm.

## Etykieta RFID od 25,4 mm

Najkrótsza etykieta RFID ma 25,4 mm. Materiał ma 19–114 mm szerokości i 2,4–10,4 mil grubości. Rolka może mieć do 213 mm średnicy na gilzie 38–76 mm. Pojedynczy wydruk ma do 4,8 m przy 203 dpi i do 2,2 m przy 300 dpi. Taśmy do 450 m mogą mieć warstwę barwiącą do wewnątrz lub na zewnątrz.

## Fingerprint, ZSim2 i aplikacje C#

Języki poleceń to Fingerprint, Direct Protocol, IPL, ZSim2 (ZPL-II) i DPL. Aplikacje C# mogą działać na drukarce bez komputera. Przewodu zasilającego nie ma w żadnym z dwóch PN; wersja EU ma numer 1-974027-025. Zwykłą PM45 można rozbudować o RFID zestawem EU 50180233-001 montowanym na miejscu.

[Honeywell PX45 RFID](/produkt/honeywell-px45-rfid) wymaga etykiety RFID o długości co najmniej 50,8 mm.`,
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
    { name: 'RFID', value: 'UHF EPC Gen 2 V2.1, ISO/IEC 18000-63, RAIN RFID; fabryczny moduł w obu PN; radio zgodne z lokalnymi przepisami UHF, w tym ETSI' },
    { name: 'Szerokość druku', value: '108 mm przy 203 dpi; 105,7 mm przy 300 dpi' },
    { name: 'Prędkość nadruku', value: 'Do 350 mm/s przy 203 dpi; do 300 mm/s przy 300 dpi; kodowanie może ograniczyć prędkość' },
    { name: 'Obsługa etykiet', value: 'Nawijak i czujnik pobrania etykiety LTS; wspólne dla obu PN' },
    { name: 'Wyświetlacz', value: 'Ekran dotykowy (Full Touch UI)' },
    { name: 'Materiał', value: 'Szerokość 19–114 mm; średnica rolki do 213 mm; gilza 38–76 mm; RFID wymaga doboru wkładki' },
    { name: 'Minimalna długość etykiety RFID', value: '25,4 mm' },
    { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 21,6–110 mm; gilza 25 mm; barwnik do wewnątrz lub na zewnątrz' },
    { name: 'Łączność', value: 'USB 2.0 Device, USB 2.0 Host, RS-232, Ethernet 10/100 Mb/s; Wi-Fi 802.11a/b/g/n/ac/ax i Bluetooth 5.1 w PM45A1200EU30300' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash' },
    { name: 'Wymiary', value: '284 × 483 × 295 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '12,1 kg' },
    { name: 'Przewód zasilający', value: 'Brak w obu PN; przewód EU 1-974027-025 zamawia się osobno' },
  ],
  compatibleAccessories: [], relatedAccessories: pm45RfidAccessorySlugs,
  applications: ['Kodowanie krótkich etykiet RFID od 25,4 mm', 'Przemysłowe etykiety UHF z nawijaniem i czujnikiem LTS'],
  faq: [
    { question: 'Który wariant PM45 RFID ma Wi-Fi 6?', answer: 'PM45A1200EU30300 z głowicą 300 dpi. Ma Wi-Fi 802.11a/b/g/n/ac/ax i Bluetooth 5.1. PM45A1000EU30200 łączy się przez Ethernet, USB i RS-232.' },
    { question: 'Jaka jest najkrótsza etykieta RFID dla PM45 RFID?', answer: '25,4 mm. Bez kodowania RFID, przy odrywaniu i nawijaniu, drukarka obsługuje materiał od 6,4 mm.' },
    { question: 'Czy zwykłą PM45 można przerobić na wersję RFID?', answer: 'Tak. Zestaw 50180233-001 to moduł UHF na Europę do montażu na miejscu. Oba PN z tej oferty mają RFID fabrycznie.' },
  ],
  downloads: [
    { name: 'Karta katalogowa PM45 / PM65 (EN)', type: 'datasheet', url: '/downloads/honeywell-pm45-pm65-karta-en.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów PM45 / PM65 (EN)', type: 'manual', url: '/downloads/honeywell-pm45-pm65-akcesoria-en.pdf', size: 'PDF' },
    { name: 'Instrukcje i sterowniki PM45', type: 'driver', url: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer', size: 'Online' },
  ],
  relatedProducts: ['honeywell-pm45', 'zebra-zt411-rfid', 'zebra-zt610-rfid'],
  sameAs: 'https://automation.honeywell.com/us/en/products/productivity-solutions/printers/industrial-printers/pm45-industrial-printer', createdAt: '2026-10-16',
}]
