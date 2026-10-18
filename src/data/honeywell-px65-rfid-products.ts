import type { Product } from './products'

const parts = [
  { key: 'glowica-203dpi', pn: '1-040084-900', name: 'Głowica 203 dpi do Honeywell PX65', image: 'head', match: 'PX65 203 dpi', description: 'Głowica 1-040084-900 zastępuje zużytą głowicę 203 dpi w Honeywell PX65, także w wersji RFID. Nie jest bezpośrednim zamiennikiem głowicy 300 dpi. Przed zakupem sprawdź rozdzielczość i numer seryjny drukarki.' },
  { key: 'glowica-300dpi', pn: '1-040085-900', name: 'Głowica 300 dpi do Honeywell PX65', image: 'head', match: 'PX65 300 dpi', description: 'Głowica 1-040085-900 zastępuje zużytą głowicę 300 dpi w Honeywell PX65, także w wersji RFID. Nie służy do samodzielnej zmiany rozdzielczości drukarki 203 dpi. Przed zakupem sprawdź konfigurację urządzenia.' },
  { key: 'walek-dociskowy', pn: '1-010110-90', name: 'Wałek dociskowy do Honeywell PX65', image: 'roller', match: 'PX65 203 i 300 dpi', description: 'Wałek dociskowy 1-010110-90 do Honeywell PX65, także w wersji RFID. Dociska materiał do głowicy drukującej. Zestaw zawiera łożyska. Przed wymianą sprawdź numer seryjny urządzenia.' },
  { key: 'wifi-row', pn: '50147002-002', name: 'Moduł Wi-Fi ROW do Honeywell PX45 i PX65', image: 'wifi', match: 'PX45 i PX65; region ROW / Europa', description: 'Zestaw 50147002-002 dodaje Wi-Fi 802.11a/b/g/n/ac do Honeywell PX45 i PX65. W PX45A02EU0000300 Wi-Fi jest fabryczne; zestaw służy do wersji bez Wi-Fi. Wersja ROW jest przeznaczona do Europy i pozostałych obsługiwanych krajów poza Ameryką Północną. Montaż wewnątrz drukarki wymaga autoryzowanego technika. Przed zamówieniem sprawdź konfigurację i numer seryjny drukarki.' },
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
  compatibleAccessories: [], relatedAccessories: [], relatedProducts: a.key === 'wifi-row' ? ['honeywell-px65-rfid', 'honeywell-px65', 'honeywell-px45-rfid', 'honeywell-px45'] : ['honeywell-px65-rfid', 'honeywell-px65'],
  downloads: [{ name: 'Konfiguracje i akcesoria PX45 / PX65 (EN)', type: 'manual', url: '/downloads/honeywell-px45-px65-konfiguracje-en.pdf', size: 'PDF' }],
  createdAt: '2026-10-16',
}))

export const honeywellPx65RfidProducts: Product[] = [{
  id: 'honeywell-px65-rfid', slug: 'honeywell-px65-rfid', name: 'Honeywell PX65 RFID', seoH1: 'Honeywell PX65 RFID',
  seoTitle: 'Honeywell PX65 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Honeywell PX65 RFID: 6-calowa drukarka i koder UHF 203 lub 300 dpi do etykiet paletowych. Druk 167,4 mm z prędkością 225 mm/s, Ethernet, RS-232.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet paletowych i kartonowych. Wersje 203 i 300 dpi drukują do 167,4 mm z prędkością do 225 mm/s.',
  description: `Honeywell PX65 RFID drukuje i koduje etykiety o szerokości nadruku do 167,4 mm. To 6-calowa drukarka przemysłowa z fabrycznym koderem UHF. Wybierz ją do etykiet paletowych, etykiet na duże kartony i oznaczeń pojemników zwrotnych.

## Szeroka etykieta w jednym przebiegu

Pole nadruku 167,4 mm mieści etykietę paletową A5 ułożoną krótszym bokiem w poprzek. Materiał może mieć 76–170 mm szerokości. Na jednej etykiecie zmieścisz kilka kodów kreskowych, dane przesyłki i identyfikator EPC zapisany we wkładce. Drukarka pracuje z prędkością do 225 mm/s w obu rozdzielczościach.

PX65A00EU0000200 ma głowicę 203 dpi. Wystarcza do etykiet logistycznych czytanych skanerem z odległości. PX65A00EU0000300 ma 300 dpi i lepiej odwzorowuje drobny tekst, np. skład lub ostrzeżenia na etykiecie wyrobu.

## Co jest w obu wersjach

- koder UHF EU (moduł 50147012-002 zamontowany fabrycznie),
- ekran LCD 2,36 cala z klawiaturą i zegar RTC,
- obrotowy uchwyt materiału,
- Ethernet, USB Device, USB Host i RS-232,
- przewody zasilające EU i US.

Żaden z tych PN nie ma Wi-Fi. Zestaw ROW 50147002-002 dodaje Wi-Fi 802.11a/b/g/n/ac. Montuje go autoryzowany technik. Etykiety odbiera się przez odrywanie. Nawijak z czujnikiem pobrania etykiety montuje się tylko fabrycznie.

## Etykieta RFID w formacie 6 cali

Najkrótsza etykieta RFID ma 50,8 mm. Szeroka etykieta daje dużo miejsca na wkładkę, ale wkładka musi przejść nad anteną kodera. Po założeniu nowej rolki wykonaj kalibrację podawania i RFID. Wersja NA ma inny moduł, na pasmo 915 MHz. Do pracy w Polsce wybierz wersję EU.

Rolka może mieć do 213 mm średnicy na gilzie 38–76 mm, a taśma do 450 m. Etykiety RFID znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem przekaż nam wymiary etykiety paletowej. Dobierzemy rolkę do PX65 RFID i położenie wkładki.

## Serwis i części

Głowica 203 dpi ma numer 1-040084-900, a głowica 300 dpi 1-040085-900. Wałek dociskowy to 1-010110-90. Obcinacz 1-041584-900 musi ciąć materiał między wkładkami. Gwarancja fabryczna na drukarkę wynosi 1 rok.

Szablony przygotujesz w Fingerprint, Direct Protocol, IPL, ZSim2 lub DPL. Do etykiet 4-calowych wybierz [Honeywell PX45 RFID](/produkt/honeywell-px45-rfid). Bez kodera RFID drukuje [Honeywell PX65](/produkt/honeywell-px65). W klasie 6-calowej porównaj [Zebra ZT620 RFID](/produkt/zebra-zt620-rfid).`,
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
    { question: 'Czy PX65 RFID wydrukuje etykietę paletową A5?', answer: 'Tak. Szerokość nadruku wynosi 167,4 mm, więc etykieta o szerokości 148 mm mieści się w polu druku. Materiał może mieć do 170 mm szerokości.' },
    { question: 'Czym różnią się PX65A00EU0000200 i PX65A00EU0000300?', answer: 'Tylko rozdzielczością: 203 dpi lub 300 dpi. Obie wersje drukują do 225 mm/s i mają te same porty, koder UHF EU oraz przewody EU i US.' },
    { question: 'Czy PX65 RFID ma Wi-Fi?', answer: 'Nie fabrycznie. Wi-Fi dodaje zestaw ROW 50147002-002. Montaż wykonuje autoryzowany technik.' },
    { question: 'Jaka jest najwęższa etykieta dla PX65 RFID?', answer: 'Materiał musi mieć co najmniej 76 mm szerokości. Najkrótsza etykieta RFID ma 50,8 mm. Do węższych etykiet wybierz PX45 RFID.' },
    { question: 'Czym ciąć etykiety RFID w PX65?', answer: 'Obcinaczem 1-041584-900. Linia cięcia musi przebiegać między wkładkami RFID. Podaj nam rozstaw etykiet przed montażem.' },
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
