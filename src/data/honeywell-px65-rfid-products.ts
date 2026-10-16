import type { Product } from './products'

const parts = [
  { key: 'glowica-203dpi', pn: '1-040084-900', name: 'Głowica 203 dpi do Honeywell PX65', image: 'head', match: 'PX65 203 dpi', description: 'Głowica 1-040084-900 zastępuje zużytą głowicę 203 dpi w Honeywell PX65, także w wersji RFID. Nie jest bezpośrednim zamiennikiem głowicy 300 dpi. Przed zakupem sprawdź rozdzielczość i numer seryjny drukarki.' },
  { key: 'glowica-300dpi', pn: '1-040085-900', name: 'Głowica 300 dpi do Honeywell PX65', image: 'head', match: 'PX65 300 dpi', description: 'Głowica 1-040085-900 zastępuje zużytą głowicę 300 dpi w Honeywell PX65, także w wersji RFID. Nie służy do samodzielnej zmiany rozdzielczości drukarki 203 dpi. Przed zakupem sprawdź konfigurację urządzenia.' },
  { key: 'walek-dociskowy', pn: '1-010110-90', name: 'Wałek dociskowy do Honeywell PX65', image: 'roller', match: 'PX65 203 i 300 dpi', description: 'Wałek dociskowy 1-010110-90 do Honeywell PX65, także w wersji RFID. Dociska materiał do głowicy drukującej. Zestaw zawiera łożyska. Przed wymianą sprawdź numer seryjny urządzenia.' },
  { key: 'wifi-row', pn: '50147002-002', name: 'Moduł Wi-Fi ROW do Honeywell PX65', image: 'wifi', match: 'PX65; region ROW / Europa', description: 'Zestaw 50147002-002 dodaje Wi-Fi 802.11a/b/g/n/ac do Honeywell PX65. Wersja ROW jest przeznaczona do Europy i pozostałych obsługiwanych krajów poza Ameryką Północną. Montaż wewnątrz drukarki wymaga autoryzowanego technika. Przed zamówieniem sprawdź konfigurację i numer seryjny drukarki.' },
  { key: 'obcinacz', pn: '1-041584-900', name: 'Obcinacz do Honeywell PX65', image: 'cutter', match: 'PX65; materiał i tryb cięcia wymagają doboru', description: 'Obcinacz 1-041584-900 do Honeywell PX65. Przy etykietach RFID ustaw cięcie między wkładkami. Ostrze nie może przecinać anteny ani układu elektronicznego. Przed montażem sprawdź grubość materiału, odstęp między etykietami i wyposażenie drukarki.' },
]

export const honeywellPx65RfidAccessories: Product[] = parts.map(a => ({
  id: `honeywell-px65-${a.key}`, slug: `honeywell-px65-${a.key}`, name: a.name,
  shortDescription: a.description.split('. ')[0] + '.',
  description: a.description + '\n\nPasuje do zgodnej wersji [Honeywell PX65](/produkt/honeywell-px65) i [Honeywell PX65 RFID](/produkt/honeywell-px65-rfid).',
  seoTitle: `${a.name} — ${a.pn} | TAKMA`,
  seoDescription: a.description.split('. ')[0] + '. Sprawdź cenę, dostępność i zgodność z drukarką.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'honeywell',
  images: [`/images/products/honeywell-px65-${a.image}.webp`],
  imageDescriptions: [`${a.name}, PN ${a.pn} — widok poglądowy części`],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.match }],
  applications: ['Serwis lub rozbudowa zgodnej konfiguracji PX65'],
  compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['honeywell-px65-rfid', 'honeywell-px65'],
  downloads: [{ name: 'Konfiguracje i akcesoria PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-konfiguracje-en.pdf', size: 'PDF' }],
  createdAt: '2026-10-16',
}))

export const honeywellPx65RfidProducts: Product[] = [{
  id: 'honeywell-px65-rfid', slug: 'honeywell-px65-rfid', name: 'Honeywell PX65 RFID', seoH1: 'Honeywell PX65 RFID',
  seoTitle: 'Honeywell PX65 RFID — drukarka UHF EU 203 i 300 dpi | TAKMA',
  seoDescription: 'Honeywell PX65 RFID: europejskie wersje 203 i 300 dpi, druk do 167,4 mm, Ethernet i fabryczny koder UHF. Sprawdź ceny, stany i zgodne akcesoria.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID EU do szerokich etykiet na kartony i palety. Wersje 203 i 300 dpi drukują do 167,4 mm. Oba PN mają Ethernet, USB, RS-232 i przewód zasilający EU.',
  description: `Honeywell PX65 RFID drukuje szerokie etykiety i zapisuje dane w ich układach UHF. Służy do znakowania kartonów, palet i wyposażenia. Ta oferta obejmuje fabryczne konfiguracje RFID dla Europy.

## Dwa europejskie PN z fabrycznym RFID

PX65A00EU0000200 ma głowicę 203 dpi. PX65A00EU0000300 ma głowicę 300 dpi. Oba warianty mają koder UHF EU, ekran LCD 2,36 cala z klawiaturą, zegar RTC i obrotowy uchwyt materiału. W zestawie są przewody zasilające EU i US.

RFID jest już zamontowane. Nie trzeba dokupować modułu 50147012-002. Wersja NA ma inne ustawienia regionalne i nie jest zamiennikiem konfiguracji EU do pracy w Polsce.

Pokazane PN mają standardowy odbiór etykiety przez odrywanie. Nie zawierają fabrycznego obcinacza ani odklejaka z nawijakiem. Wewnętrzny nawijak z LTS jest opcją fabryczną; nie należy traktować go jako dowolnej późniejszej rozbudowy.

## Szeroki nadruk i kodowanie EPC

Maksymalna szerokość nadruku wynosi 167,4 mm. Obie rozdzielczości drukują z prędkością do 225 mm/s. Kodowanie RFID i właściwości materiału mogą wymagać wolniejszej pracy. Wersję 203 dpi wybierz do standardowych oznaczeń. Wersja 300 dpi pozwala drukować drobniejszy tekst i grafikę.

Koder obsługuje etykiety UHF EPC Gen2. Zadanie musi zawierać polecenia zapisu danych RFID. Sam plik PDF nie zapisuje identyfikatora EPC. Powiąż EPC z rekordem produktu lub opakowania w WMS albo ERP. Do odczytu oznaczeń w magazynie potrzebujesz osobnego czytnika UHF.

Po zmianie materiału wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym przedmiocie. Metal, ciecz i położenie wkładki wpływają na wynik. Sama zgodność szerokości rolki nie potwierdza zgodności etykiety RFID.

## Etykiety, rolki i taśmy

PX65 obsługuje materiał o szerokości 76–170 mm. Maksymalna średnica rolki wynosi 213 mm, a średnica gilzy 38–76 mm. Dobierz także grubość materiału, położenie anteny i odstęp między wkładkami.

Termotransfer wymaga taśmy barwiącej. Drukarka przyjmuje taśmy do 450 m na gilzie 25,4 mm. Dobierz szerokość i rodzaj taśmy do etykiety. Druk termiczny bezpośredni wymaga odpowiedniego materiału i nie używa taśmy barwiącej.

## Łączność i integracja

Oba PN mają Ethernet 10/100 Mb/s, USB Device, USB Host i RS-232. Nie mają fabrycznego Wi-Fi. Zestaw ROW 50147002-002 dodaje Wi-Fi 802.11a/b/g/n/ac. Jego montaż wymaga autoryzowanego technika.

Fingerprint, Direct Protocol, IPL, ZSim2 i DPL umożliwiają przygotowanie zadań z systemu nadrzędnego. Sprawdź zgodność poleceń kodowania przed migracją. C# Smart Printing obsługuje odpowiednio przygotowane aplikacje uruchamiane na urządzeniu.

## Akcesoria i części zamienne

Głowica 1-040084-900 pasuje do wersji 203 dpi. Głowica 1-040085-900 pasuje do wersji 300 dpi. Nie zamieniaj rozdzielczości bez sprawdzenia konfiguracji. Wałek 1-010110-90 jest częścią zamienną do PX65. Te elementy służą do serwisu; sprawna drukarka ma je już zamontowane.

Obcinacz 1-041584-900 wymaga doboru do materiału. Przy RFID ustaw cięcie między wkładkami. Nie przecinaj anteny ani układu etykiety. Przed zakupem części lub rozbudowy podaj numer seryjny drukarki.

Etykiety RFID, taśmę barwiącą i przewód danych dobierz osobno. Przewód zasilający EU jest częścią obu pokazanych konfiguracji.

## Gwarancja

Gwarancja fabryczna na drukarkę wynosi 1 rok. Części zużywające się podlegają odrębnym warunkom producenta. Umowy serwisowe są osobnymi usługami.

Do samego nadruku sprawdź [Honeywell PX65](/produkt/honeywell-px65). Węższe etykiety obsługuje [Honeywell PM45 RFID](/produkt/honeywell-pm45-rfid). Porównaj także [Zebra ZT421 RFID](/produkt/zebra-zt421-rfid) i [Zebra ZT620 RFID](/produkt/zebra-zt620-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'honeywell',
  images: ['/images/products/PX65_2.png', '/images/products/PX65_1.png', '/images/products/PX65_3.png'],
  imageDescriptions: ['Honeywell PX65 RFID — drukarka przemysłowa z ekranem i klawiaturą, widok pod kątem z lewym bokiem', 'Honeywell PX65 RFID — widok z przodu, ekran LCD i klawiatura', 'Honeywell PX65 RFID — widok pod kątem z prawym bokiem'],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'available', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'Do 225 mm/s; kodowanie zależy od materiału', szerokoscDruku: 'Do 167,4 mm', szerokoscEtykiet: '76–170 mm; RFID wymaga doboru wkładki' },
  variants: [
    { partNumber: 'PX65A00EU0000200', name: '203 dpi, UHF EU', attributes: { 'Rozdzielczość': '203 dpi' }, availability: 'unavailable' },
    { partNumber: 'PX65A00EU0000300', name: '300 dpi, UHF EU', attributes: { 'Rozdzielczość': '300 dpi' }, availability: 'available' },
  ],
  specifications: [
    { name: 'RFID', value: 'Fabryczny koder UHF EU; etykiety EPC Gen2' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 167,4 mm' },
    { name: 'Prędkość nadruku', value: 'Do 225 mm/s w obu rozdzielczościach; kodowanie może ograniczyć prędkość' },
    { name: 'Odbiór etykiety', value: 'Odrywanie; bez fabrycznego obcinacza i nawijaka w pokazanych PN' },
    { name: 'Panel', value: 'LCD 2,36 cala z klawiaturą; zegar RTC' },
    { name: 'Łączność', value: 'USB Device, USB Host, RS-232, Ethernet 10/100 Mb/s' },
    { name: 'Wi-Fi', value: 'Po rozbudowie zestawem ROW 50147002-002; montaż przez autoryzowanego technika' },
    { name: 'Materiał', value: 'Szerokość 76–170 mm; rolka do 213 mm; gilza 38–76 mm' },
    { name: 'Taśma barwiąca', value: 'Do 450 m; gilza 25,4 mm; dobór do etykiety' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash' },
    { name: 'Wymiary', value: '335 × 482 × 238 mm (szer. × gł. × wys.)' },
    { name: 'Zasilanie', value: 'Przewody EU i US w zestawie obu PN' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej; części zużywające się na odrębnych warunkach' },
  ],
  compatibleAccessories: [], relatedAccessories: honeywellPx65RfidAccessories.map(a => a.id),
  applications: ['Druk i kodowanie szerokich etykiet UHF na kartony i palety', 'Identyfikacja wyposażenia', 'Powiązanie EPC z WMS lub ERP'],
  faq: [
    { question: 'Czy każda Honeywell PX65 ma RFID?', answer: 'Nie. Ta karta obejmuje PX65A00EU0000200 i PX65A00EU0000300 z fabrycznym UHF EU. Zwykła PX65 wymaga doboru zgodnej konfiguracji lub modułu.' },
    { question: 'Czym różnią się dwa PN PX65 RFID?', answer: 'PX65A00EU0000200 ma 203 dpi, a PX65A00EU0000300 ma 300 dpi. Pokazane wersje mają takie same porty, standardowy odbiór etykiety i przewody zasilające EU oraz US.' },
    { question: 'Czy moduł RFID i przewód zasilający trzeba kupić osobno?', answer: 'Nie. Oba pokazane PN mają fabryczny koder UHF EU i przewód zasilający EU. Materiały eksploatacyjne i przewód danych dobierz osobno.' },
    { question: 'Czy te warianty mają Wi-Fi?', answer: 'Nie mają fabrycznego Wi-Fi. Zestaw ROW 50147002-002 dodaje Wi-Fi 802.11a/b/g/n/ac. Montaż wymaga autoryzowanego technika.' },
    { question: 'Czy można ciąć etykiety RFID?', answer: 'Tak, po doborze obcinacza i materiału. Linia cięcia musi przebiegać między wkładkami RFID. Nie wolno przecinać anteny ani układu elektronicznego.' },
  ],
  downloads: [
    { name: 'Karta katalogowa PX45 / PX65 (EN)', type: 'datasheet', url: '/downloads/sps-ppr-px45-px65-series-printers-datasheet-en.pdf', size: 'PDF' },
    { name: 'Konfiguracje i akcesoria PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-konfiguracje-en.pdf', size: 'PDF' },
    { name: 'Montaż interfejsów i akcesoriów PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-akcesoria-en.pdf', size: 'PDF' },
    { name: 'Skrócona instrukcja PX65 (EN)', type: 'manual', url: '/downloads/sps-ppr-px65-en-qs.pdf', size: 'PDF' },
    { name: 'Sterowniki i pliki PX65', type: 'driver', url: 'https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/px65-industrial-printer', size: 'Online' },
  ],
  relatedProducts: ['honeywell-pm45-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid'],
  sameAs: 'https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/px65-industrial-printer', createdAt: '2026-10-16',
}]
