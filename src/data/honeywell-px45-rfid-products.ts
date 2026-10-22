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
  seoTitle: 'Honeywell PX45 RFID — drukarka RFID UHF 203/300 dpi',
  seoDescription: 'Honeywell PX45 RFID – przemysłowa drukarka RFID UHF 203 lub 300 dpi. Druk do 300 mm/s, materiał 25,4–120 mm, moduł EU 869 MHz, ekran z klawiaturą.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do etykiet 4-calowych. Wersja 203 dpi z Ethernetem albo 300 dpi z Ethernetem i Wi-Fi. Druk do 110 mm z prędkością do 300 mm/s.',
  description: `Honeywell PX45 RFID to 4-calowa drukarka RFID UHF w metalowej obudowie, z ekranem LCD 2,36 cala i klawiaturą. Koduje etykiety EPC Gen 2 V2.1 zgodne z ISO/IEC 18000-63. Drukuje z prędkością 100–300 mm/s przy 203 i 300 dpi.

## Moduł EU 869 MHz w PX45A00EU0000200

Konfiguracja PX45A00EU0000200 ma głowicę 203 dpi, Ethernet, moduł UHF RFID EU, obrotowy wieszak materiału i zegar RTC. W pudełku są przewody zasilające EU i US. Moduł EU pracuje na 869 MHz i jest też dostępny jako zestaw 50147010-002 do zwykłej PX45. Karty rozszerzeń montuje wyłącznie autoryzowany technik serwisu. Wariant PX45A02EU0000300 ma głowicę 300 dpi i Wi-Fi 802.11a/b/g/n/ac.

## Etykieta RFID od 50,8 mm

Najkrótsza etykieta RFID ma 50,8 mm. Szerokość materiału wynosi 25,4–120 mm, a grubość 2,4–10,0 mil. Rolka mieści się do 213 mm średnicy na gilzie 38–76 mm. Taśma do 450 m pracuje na gilzie 25 mm, z warstwą barwiącą do wewnątrz lub na zewnątrz. Nadruk ma 110 mm szerokości w termotransferze i 112 mm w druku termicznym.

## Głowica QuickMount i rozbudowa

Głowica ma mocowanie magnetyczne QuickMount. Nawijak z czujnikiem pobrania etykiety montuje się tylko fabrycznie. Gilotyna 1-041574-900 i karta Wi-Fi ROW 50147002-002 są dostępne jako zestawy. Drukarka przyjmuje Fingerprint, Direct Protocol, IPL, ZSim2 (ZPL-II) i DPL.

Szerszy nadruk, do 167,4 mm, ma [Honeywell PX65 RFID](/produkt/honeywell-px65-rfid).`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'honeywell',
  images: ['/images/products/honeywell-px45-rfid-aligned.webp', '/images/products/PX45_1.png', '/images/products/PX45_3.png'],
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
    { name: 'Masa', value: '12,61 kg' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej' },
  ],
  compatibleAccessories: [], relatedAccessories: [...honeywellPx45RfidAccessories.map(a => a.id), 'honeywell-px65-wifi-row'],
  applications: ['Kodowanie etykiet UHF 869 MHz w drukarce przemysłowej', 'Etykiety RFID 4-calowe od 50,8 mm długości'],
  faq: [
    { question: 'Na jakiej częstotliwości pracuje moduł RFID w PX45 RFID EU?', answer: '869 MHz. Wersja na Amerykę Północną ma inny moduł, 915 MHz. Radio serii obsługuje zakres 865–928 MHz zgodnie z lokalnymi przepisami.' },
    { question: 'Czy w PX45 RFID można ciąć etykiety?', answer: 'Tak, po montażu gilotyny 1-041574-900. Minimalna długość etykiety przy cięciu wynosi 25 mm, a etykiety RFID 50,8 mm.' },
    { question: 'Co jest w pudełku z PX45A00EU0000200?', answer: 'Drukarka, arkusz informacji o przepisach oraz przewody zasilające EU i US. Etykiety, taśmę i przewód danych zamawia się osobno.' },
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
