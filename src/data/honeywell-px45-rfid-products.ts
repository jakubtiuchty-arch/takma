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
  seoDescription: 'Honeywell PX45 RFID: przemysłowa drukarka i koder UHF 203 lub 300 dpi. Druk 110 mm z prędkością 300 mm/s, Ethernet, wersja 300 dpi z Wi-Fi.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do etykiet 4-calowych. Wersja 203 dpi z Ethernetem albo 300 dpi z Ethernetem i Wi-Fi. Druk do 110 mm z prędkością do 300 mm/s.',
  description: `Honeywell PX45 RFID to 4-calowa drukarka przemysłowa z fabrycznym koderem UHF. Drukuje etykiety produktowe, wysyłkowe i kartonowe oraz zapisuje w nich identyfikator EPC. Ma obrotowy uchwyt materiału i klawiaturę z ekranem LCD.

## Dwa PN, dwie rozdzielczości

- PX45A00EU0000200 — głowica 203 dpi, Ethernet, bez Wi-Fi.
- PX45A02EU0000300 — głowica 300 dpi, Ethernet i Wi-Fi 802.11a/b/g/n/ac.

Obie rozdzielczości drukują z prędkością do 300 mm/s. Głowica 203 dpi wystarcza do kodów kreskowych na kartonach i etykietach wysyłkowych. Głowica 300 dpi drukuje 11,8 punktu na milimetr, więc lepiej odwzorowuje drobny tekst i małe kody 2D. Szerokość nadruku wynosi 110 mm w termotransferze i 112 mm w druku termicznym bezpośrednim.

Każdy PN ma koder UHF EU, ekran LCD 2,36 cala z klawiaturą, zegar RTC i odrywanie etykiet. W zestawie są przewody zasilające EU i US.

## Kodowanie etykiet UHF

Koder obsługuje etykiety UHF EPC Gen2. Najkrótsza etykieta RFID ma 50,8 mm. Zadanie wysyłane do drukarki musi zawierać polecenia zapisu RFID. Po zmianie rodzaju etykiet wykonaj kalibrację podawania i RFID.

Do pracy w Polsce wybierz wersję EU. Wersja NA ma inny moduł RFID, na pasmo 915 MHz. Moduł 50147010-002 jest już zamontowany w obu PN, więc nie kupujesz go osobno.

## Materiały

PX45 przyjmuje materiał o szerokości 25,4–120 mm i rolkę do 213 mm na gilzie 38–76 mm. Taśma barwiąca ma do 450 m na gilzie 25,4 mm. Rolki etykiet znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam format etykiety i rodzaj powierzchni. Dobierzemy rolkę do PX45 RFID, z wkładką w miejscu zgodnym z anteną.

## Języki i rozbudowa

Drukarka obsługuje Fingerprint, Direct Protocol, IPL, ZSim2 i DPL. ZSim2 ułatwia przeniesienie szablonów z drukarek Zebra. Aplikacje C# Smart Printing mogą działać bezpośrednio na drukarce.

Wersję 203 dpi rozbudujesz o Wi-Fi zestawem 50147002-002. Montaż wykonuje autoryzowany technik. Wewnętrzny nawijak z czujnikiem pobrania etykiety montuje się tylko fabrycznie. Jeśli go potrzebujesz, zapytaj nas o tę konfigurację przed zamówieniem.

Części zamienne: głowica 1-040082-900 (203 dpi), głowica 1-040083-900 (300 dpi), wałek 1-040230-93 i gilotyna 1-041574-900. Gilotyna musi ciąć między wkładkami RFID. Drukarka ma 1 rok gwarancji fabrycznej.

Do etykiet szerszych niż 112 mm wybierz [Honeywell PX65 RFID](/produkt/honeywell-px65-rfid). Bez kodera RFID drukuje [Honeywell PX45](/produkt/honeywell-px45). Porównaj też [Zebra ZT411 RFID](/produkt/zebra-zt411-rfid).`,
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
    { name: 'Gwarancja', value: '1 rok gwarancji fabrycznej; części zużywające się na odrębnych warunkach' },
  ],
  compatibleAccessories: [], relatedAccessories: [...honeywellPx45RfidAccessories.map(a => a.id), 'honeywell-px65-wifi-row'],
  applications: ['Druk i kodowanie etykiet UHF na produkty i kartony', 'Identyfikacja wyposażenia', 'Powiązanie EPC z WMS lub ERP'],
  faq: [
    { question: 'Która wersja PX45 RFID ma Wi-Fi?', answer: 'PX45A02EU0000300, czyli wersja 300 dpi. Ma Ethernet i Wi-Fi 802.11a/b/g/n/ac. Wersja 203 dpi PX45A00EU0000200 łączy się przez Ethernet, USB i RS-232.' },
    { question: 'Jaka jest najkrótsza etykieta RFID dla PX45?', answer: '50,8 mm. Krótszych etykiet RFID drukarka nie obsługuje. Szerokość materiału może wynosić 25,4–120 mm.' },
    { question: 'Czy zwykłą PX45 można przerobić na wersję RFID?', answer: 'Tak, zestawem 50147010-002 dla Europy. Montaż wykonuje autoryzowany technik. Wersje PX45A00EU0000200 i PX45A02EU0000300 mają ten moduł fabrycznie.' },
    { question: 'Czy do PX45 RFID można dołożyć nawijak?', answer: 'Wewnętrzny nawijak z czujnikiem pobrania etykiety montuje się tylko fabrycznie. Zapytaj nas o tę konfigurację przed zamówieniem.' },
    { question: 'Czy gilotyna 1-041574-900 tnie etykiety RFID?', answer: 'Tak, jeśli linia cięcia przebiega między wkładkami. Ostrze nie może przecinać anteny ani układu. Podaj nam rozstaw etykiet, a ustawimy cięcie.' },
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
