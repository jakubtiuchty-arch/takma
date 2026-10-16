import type { Product } from './products'

const parts = [
  { key: 'glowica-203dpi', pn: '1-040082-900', name: 'Głowica 203 dpi do Honeywell PX45', image: 'head', match: 'PX45 203 dpi', description: 'Głowica 1-040082-900 zastępuje zużytą głowicę 203 dpi w Honeywell PX45, także w wersji RFID. Nie jest bezpośrednim zamiennikiem głowicy 300 dpi. Przed zakupem sprawdź rozdzielczość i numer seryjny drukarki.' },
  { key: 'glowica-300dpi', pn: '1-040083-900', name: 'Głowica 300 dpi do Honeywell PX45', image: 'head', match: 'PX45 300 dpi', description: 'Głowica 1-040083-900 zastępuje zużytą głowicę 300 dpi w Honeywell PX45, także w wersji RFID. Nie służy do samodzielnej zmiany rozdzielczości drukarki 203 dpi. Przed zakupem sprawdź konfigurację urządzenia.' },
  { key: 'walek-dociskowy', pn: '1-040230-93', name: 'Wałek dociskowy do Honeywell PX45', image: 'roller', match: 'PX45 203 i 300 dpi', description: 'Wałek dociskowy 1-040230-93 do Honeywell PX45, także w wersji RFID. Dociska materiał do głowicy drukującej. Zestaw zawiera łożyska. Przed wymianą sprawdź numer seryjny urządzenia.' },
  { key: 'gilotyna', pn: '1-041574-900', name: 'Gilotyna do Honeywell PX45', image: 'cutter', match: 'PX45; materiał i tryb cięcia wymagają doboru', description: 'Gilotyna 1-041574-900 do Honeywell PX45. Przy etykietach RFID ustaw cięcie między wkładkami. Ostrze nie może przecinać anteny ani układu elektronicznego. Przed montażem sprawdź grubość materiału, odstęp między etykietami i wyposażenie drukarki.' },
]

export const honeywellPx45RfidAccessories: Product[] = parts.map(a => ({
  id: `honeywell-px45-${a.key}`, slug: `honeywell-px45-${a.key}`, name: a.name,
  shortDescription: a.description.split('. ')[0] + '.',
  description: a.description + '\n\nPasuje do zgodnej wersji [Honeywell PX45](/produkt/honeywell-px45) i [Honeywell PX45 RFID](/produkt/honeywell-px45-rfid).',
  seoTitle: `${a.name} — ${a.pn} | TAKMA`,
  seoDescription: a.description.split('. ')[0] + '. Sprawdź cenę, dostępność i zgodność z drukarką.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'honeywell',
  images: [`/images/products/honeywell-px45-${a.image}.webp`],
  imageDescriptions: [`${a.name}, PN ${a.pn} — widok poglądowy części`],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.match }],
  applications: ['Serwis lub rozbudowa zgodnej konfiguracji PX45'],
  compatibleAccessories: [], relatedAccessories: [], relatedProducts: ['honeywell-px45-rfid', 'honeywell-px45'],
  downloads: [{ name: 'Konfiguracje i akcesoria PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-konfiguracje-en.pdf', size: 'PDF' }],
  createdAt: '2026-10-16',
}))

export const honeywellPx45RfidProducts: Product[] = [{
  id: 'honeywell-px45-rfid', slug: 'honeywell-px45-rfid', name: 'Honeywell PX45 RFID', seoH1: 'Honeywell PX45 RFID',
  seoTitle: 'Honeywell PX45 RFID — drukarka UHF EU 203 i 300 dpi | TAKMA',
  seoDescription: 'Honeywell PX45 RFID: europejskie wersje 203 i 300 dpi, druk do 110 mm TT lub 112 mm DT, Ethernet i fabryczny koder UHF. Sprawdź ceny, stany, wersję z Wi-Fi i zgodne akcesoria.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID EU do etykiet produktowych i logistycznych. Wersje 203 i 300 dpi drukują do 110 mm TT lub 112 mm DT. Oba PN mają Ethernet, USB, RS-232 i przewód zasilający EU.',
  description: `Honeywell PX45 RFID drukuje etykiety produktowe i logistyczne oraz zapisuje dane w ich układach UHF. Służy do znakowania kartonów, palet i wyposażenia. Ta oferta obejmuje fabryczne konfiguracje RFID dla Europy.

## Dwa europejskie PN z fabrycznym RFID

PX45A00EU0000200 ma głowicę 203 dpi. PX45A02EU0000300 ma głowicę 300 dpi. Oba warianty mają koder UHF EU, ekran LCD 2,36 cala z klawiaturą, zegar RTC i obrotowy uchwyt materiału. W zestawie są przewody zasilające EU i US.

RFID jest już zamontowane. Nie trzeba dokupować modułu 50147010-002. Wersja NA ma inne ustawienia regionalne i nie jest zamiennikiem konfiguracji EU do pracy w Polsce.

Pokazane PN mają standardowy odbiór etykiety przez odrywanie. Nie zawierają fabrycznej gilotyny ani odklejaka z nawijakiem. Wewnętrzny nawijak z LTS jest opcją fabryczną; nie należy traktować go jako dowolnej późniejszej rozbudowy.

## Nadruk i kodowanie EPC

Maksymalna szerokość nadruku wynosi 110 mm w termotransferze i 112 mm w druku termicznym bezpośrednim. Obie rozdzielczości drukują z prędkością do 300 mm/s. Kodowanie RFID i właściwości materiału mogą wymagać wolniejszej pracy. Wersję 203 dpi wybierz do standardowych oznaczeń. Wersja 300 dpi pozwala drukować drobniejszy tekst i grafikę.

Koder obsługuje etykiety UHF EPC Gen2. Zadanie musi zawierać polecenia zapisu danych RFID. Sam plik PDF nie zapisuje identyfikatora EPC. Powiąż EPC z rekordem produktu lub opakowania w WMS albo ERP. Do odczytu oznaczeń w magazynie potrzebujesz osobnego czytnika UHF.

Po zmianie materiału wykonaj kalibrację podawania i RFID. Sprawdź zapis oraz odczyt na docelowym przedmiocie. Metal, ciecz i położenie wkładki wpływają na wynik. Sama zgodność szerokości rolki nie potwierdza zgodności etykiety RFID.

## Etykiety, rolki i taśmy

PX45 obsługuje materiał o szerokości 25,4–120 mm. Maksymalna średnica rolki wynosi 213 mm, a średnica gilzy 38–76 mm. Dobierz także grubość materiału, położenie anteny i odstęp między wkładkami.

Termotransfer wymaga taśmy barwiącej. Drukarka przyjmuje taśmy do 450 m na gilzie 25,4 mm. Dobierz szerokość i rodzaj taśmy do etykiety. Druk termiczny bezpośredni wymaga odpowiedniego materiału i nie używa taśmy barwiącej.

## Łączność i integracja

Oba PN mają Ethernet, USB Device, USB Host i RS-232. PX45A00EU0000200 nie ma fabrycznego Wi-Fi. PX45A02EU0000300 ma Wi-Fi 802.11a/b/g/n/ac w wersji ROW. Zestaw 50147002-002 służy do rozbudowy wersji bez Wi-Fi; montaż wymaga autoryzowanego technika.

Fingerprint, Direct Protocol, IPL, ZSim2 i DPL umożliwiają przygotowanie zadań z systemu nadrzędnego. Sprawdź zgodność poleceń kodowania przed migracją. C# Smart Printing obsługuje odpowiednio przygotowane aplikacje uruchamiane na urządzeniu.

## Akcesoria i części zamienne

Głowica 1-040082-900 pasuje do wersji 203 dpi. Głowica 1-040083-900 pasuje do wersji 300 dpi. Nie zamieniaj rozdzielczości bez sprawdzenia konfiguracji. Wałek 1-040230-93 jest częścią zamienną do PX45. Te elementy służą do serwisu; sprawna drukarka ma je już zamontowane.

Gilotyna 1-041574-900 wymaga doboru do materiału. Przy RFID ustaw cięcie między wkładkami. Nie przecinaj anteny ani układu etykiety. Przed zakupem części lub rozbudowy podaj numer seryjny drukarki.

Etykiety RFID, taśmę barwiącą i przewód danych dobierz osobno. Przewód zasilający EU jest częścią obu pokazanych konfiguracji.

## Gwarancja

Gwarancja fabryczna na drukarkę wynosi 1 rok. Części zużywające się podlegają odrębnym warunkom producenta. Umowy serwisowe są osobnymi usługami.

Do samego nadruku sprawdź [Honeywell PX45](/produkt/honeywell-px45). Do szerszych etykiet sprawdź [Honeywell PX65 RFID](/produkt/honeywell-px65-rfid). W klasie czterocalowej porównaj [Honeywell PM45 RFID](/produkt/honeywell-pm45-rfid) i [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'honeywell',
  images: ['/images/products/honeywell-px45-rfid-final.webp', '/images/products/PX45_1.png', '/images/products/PX45_3.png'],
  imageDescriptions: ['Honeywell PX45 RFID — drukarka przemysłowa z ekranem i klawiaturą, widok pod kątem z lewym bokiem', 'Honeywell PX45 RFID — widok pod kątem z prawym bokiem', 'Honeywell PX45 RFID — widok z przodu, ekran LCD i klawiatura'],
  tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID EU', rozdzielczosc: '203 lub 300 dpi', predkoscDruku: 'Do 300 mm/s; kodowanie zależy od materiału', szerokoscDruku: 'Do 110 mm TT / 112 mm DT', szerokoscEtykiet: '25,4–120 mm; RFID wymaga doboru wkładki' },
  variants: [
    { partNumber: 'PX45A00EU0000200', name: '203 dpi, UHF EU, Ethernet', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi': 'Brak' }, availability: 'unavailable' },
    { partNumber: 'PX45A02EU0000300', name: '300 dpi, UHF EU, Ethernet + Wi-Fi ROW', attributes: { 'Rozdzielczość': '300 dpi', 'Wi-Fi': '802.11a/b/g/n/ac' }, availability: 'unavailable' },
  ],
  specifications: [
    { name: 'RFID', value: 'Fabryczny koder UHF EU; etykiety EPC Gen2' },
    { name: 'Rozdzielczość', value: '203 lub 300 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 110 mm TT / 112 mm DT' },
    { name: 'Prędkość nadruku', value: 'Do 300 mm/s w obu rozdzielczościach; kodowanie może ograniczyć prędkość' },
    { name: 'Odbiór etykiety', value: 'Odrywanie; bez fabrycznej gilotyny i nawijaka w pokazanych PN' },
    { name: 'Panel', value: 'LCD 2,36 cala z klawiaturą; zegar RTC' },
    { name: 'Łączność', value: 'USB Device, USB Host, RS-232, Ethernet' },
    { name: 'Wi-Fi', value: 'Fabryczne w PX45A02EU0000300; dla PX45A00EU0000200 opcjonalny zestaw ROW 50147002-002' },
    { name: 'Materiał', value: 'Szerokość 25,4–120 mm; rolka do 213 mm; gilza 38–76 mm' },
    { name: 'Taśma barwiąca', value: 'Do 450 m; gilza 25,4 mm; dobór do etykiety' },
    { name: 'Pamięć', value: '256 MB RAM; 512 MB Flash' },
    
    { name: 'Zasilanie', value: 'Przewody EU i US w zestawie obu PN' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej; części zużywające się na odrębnych warunkach' },
  ],
  compatibleAccessories: [], relatedAccessories: [...honeywellPx45RfidAccessories.map(a => a.id), 'honeywell-px65-wifi-row'],
  applications: ['Druk i kodowanie etykiet UHF na produkty i kartony', 'Identyfikacja wyposażenia', 'Powiązanie EPC z WMS lub ERP'],
  faq: [
    { question: 'Czy każda Honeywell PX45 ma RFID?', answer: 'Nie. Ta karta obejmuje PX45A00EU0000200 i PX45A02EU0000300 z fabrycznym UHF EU. Zwykła PX45 wymaga doboru zgodnej konfiguracji lub modułu.' },
    { question: 'Czym różnią się dwa PN PX45 RFID?', answer: 'PX45A00EU0000200 ma 203 dpi i Ethernet, bez fabrycznego Wi-Fi. PX45A02EU0000300 ma 300 dpi, Ethernet oraz Wi-Fi ROW. Oba PN mają UHF RFID EU, RTC i przewody zasilające EU oraz US.' },
    { question: 'Czy moduł RFID i przewód zasilający trzeba kupić osobno?', answer: 'Nie. Oba pokazane PN mają fabryczny koder UHF EU i przewód zasilający EU. Materiały eksploatacyjne i przewód danych dobierz osobno.' },
    { question: 'Czy te warianty mają Wi-Fi?', answer: 'Wersja PX45A02EU0000300 ma fabryczne Wi-Fi ROW. PX45A00EU0000200 nie ma Wi-Fi. Do rozbudowy tej wersji służy zestaw 50147002-002, montowany przez autoryzowanego technika.' },
    { question: 'Czy można ciąć etykiety RFID?', answer: 'Tak, po doborze gilotyny i materiału. Linia cięcia musi przebiegać między wkładkami RFID. Nie wolno przecinać anteny ani układu elektronicznego.' },
  ],
  downloads: [
    { name: 'Karta katalogowa PX45 / PX65 (EN)', type: 'datasheet', url: '/downloads/sps-ppr-px45-px65-series-printers-datasheet-en.pdf', size: 'PDF' },
    { name: 'Konfiguracje i akcesoria PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-konfiguracje-en.pdf', size: 'PDF' },
    { name: 'Montaż interfejsów i akcesoriów PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-akcesoria-en.pdf', size: 'PDF' },
    { name: 'Skrócona instrukcja PX45 (EN)', type: 'manual', url: '/downloads/sps-ppr-px45-en-qs.pdf', size: 'PDF' },
    { name: 'Sterowniki i pliki PX45', type: 'driver', url: 'https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/px45-industrial-printer', size: 'Online' },
  ],
  relatedProducts: ['honeywell-px65-rfid', 'honeywell-pm45-rfid', 'zebra-zt411-rfid'],
  sameAs: 'https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/px45-industrial-printer', createdAt: '2026-10-16',
}]
