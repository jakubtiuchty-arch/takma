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
  seoDescription: 'Honeywell PX65 RFID – 6-calowa drukarka RFID UHF 203 lub 300 dpi. Nadruk 167,4 mm, materiał 76–170 mm, do 225 mm/s, moduł EU 869 MHz, Ethernet.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet paletowych i kartonowych. Wersje 203 i 300 dpi drukują do 167,4 mm z prędkością do 225 mm/s.',
  description: `Honeywell PX65 RFID to 6-calowa drukarka RFID UHF do szerokich etykiet na kartony i palety. Pole nadruku ma 167,4 mm szerokości, a materiał 76–170 mm. Moduł RFID koduje wkładki EPC Gen 2 V2.1 na częstotliwości 869 MHz, przewidzianej dla Europy.

## PX65A00EU0000200 i PX65A00EU0000300

Obie konfiguracje mają ekran LCD 2,36 cala z klawiaturą, Ethernet, obrotowy wieszak materiału i zegar RTC. Różnią się głowicą: 203 lub 300 dpi. Prędkość wynosi 100–225 mm/s w obu rozdzielczościach. W zestawie są przewody zasilające EU i US. Drukarka waży 14,1 kg.

## Szeroki materiał RFID na rolce 213 mm

Średnica rolki wynosi do 213 mm przy gilzie 38–76 mm. Grubość materiału wynosi 2,4–10,0 mil. Taśmy do 450 m mają maksymalnie 80 mm średnicy. Drukarka rozpoznaje przerwę, nacięcie, czarny znacznik i materiał ciągły. Ma też czujniki końca taśmy i podniesienia głowicy.

## Zestawy 1-041584-900 i 50147002-002

Obcinacz 1-041584-900 i karta Wi-Fi ROW 50147002-002 są dostępne jako zestawy. Kartę Wi-Fi montuje autoryzowany technik serwisu. Nawijak z czujnikiem pobrania etykiety jest tylko opcją fabryczną. Głowice zamienne to 1-040084-900 dla 203 dpi i 1-040085-900 dla 300 dpi.

Węższa [Honeywell PX45 RFID](/produkt/honeywell-px45-rfid) drukuje do 300 mm/s na szerokości do 112 mm.`,
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
    { name: 'Masa', value: '14,1 kg' },
    { name: 'Zasilanie', value: 'Przewody EU i US w zestawie obu PN' },
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej' },
  ],
  compatibleAccessories: [], relatedAccessories: honeywellPx65RfidAccessories.map(a => a.id),
  applications: ['Szerokie etykiety RFID na palety do 170 mm', 'Kodowanie etykiet UHF 6-calowych w logistyce'],
  faq: [
    { question: 'Jaki moduł RFID ma PX65 RFID w wersji EU?', answer: 'Moduł UHF 869 MHz, ten sam co w zestawie 50147012-002. Wersja na Amerykę Północną używa zestawu 915 MHz 50147011-002.' },
    { question: 'Jak wąski materiał przyjmie PX65 RFID?', answer: 'Materiał musi mieć co najmniej 76 mm szerokości. Maksymalna szerokość wynosi 170 mm. Węższe etykiety, od 25,4 mm, obsługuje PX45 RFID.' },
    { question: 'Czy PX65 RFID ma Wi-Fi?', answer: 'Nie fabrycznie. Wi-Fi 802.11a/b/g/n/ac dodaje karta ROW 50147002-002. Standardowe porty to Ethernet 10/100, USB Device, USB Host i RS-232.' },
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
