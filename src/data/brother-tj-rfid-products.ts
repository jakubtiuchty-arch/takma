import type { Product } from './products'

const manual = '/downloads/brother-tj-rfid-instrukcja-en.pdf'
const ids = ['brother-tj-4021tnr', 'brother-tj-4121tnr']

export const brotherTjRfidProducts: Product[] = [
  { model: 'TJ-4021TNR', pn: 'TJ4021TNRZ1', dpi: 203, width: '107', speed: '254', length: '25 400', ordinary: 'brother-tj-4021tn', other: ids[1] },
  { model: 'TJ-4121TNR', pn: 'TJ4121TNRZ1', dpi: 300, width: '105,7', speed: '177,8', length: '11 430', ordinary: 'brother-tj-4121tn', other: ids[0] },
].map(({ model, pn, dpi, width, speed, length, ordinary, other }) => {
  const slug = `brother-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `Brother ${model}`, seoH1: `Brother ${model}`,
    seoTitle: `Brother ${model} — przemysłowa drukarka RFID ${dpi} dpi | TAKMA`,
    seoDescription: `Brother ${model}: druk i kodowanie UHF RFID, ${dpi} dpi, szerokość ${width} mm. Ethernet, ekran dotykowy, taśma 450 m. Sprawdź cenę, stan i akcesoria.`,
    shortDescription: `Przemysłowa drukarka UHF RFID ${dpi} dpi. Druk do ${width} mm, ekran dotykowy 3,5 cala, Ethernet i taśma barwiąca do 450 m. Wi-Fi jako opcja.`,
    description: `Brother ${model} to przemysłowa drukarka etykiet z wbudowanym koderem UHF RFID. Drukuje tekst i kody oraz zapisuje dane w układzie zgodnej etykiety.

## ${dpi === 203 ? 'RFID do oznaczania towarów i opakowań' : 'Nadruk 300 dpi i kodowanie RFID'}

${dpi === 203 ? 'Rozdzielczość 203 dpi służy do druku etykiet towarów, opakowań i pojemników. Maksymalna prędkość nadruku wynosi 254 mm/s, a szerokość 107 mm.' : 'Rozdzielczość 300 dpi pozwala drukować drobniejszy tekst i szczegółowe kody. Maksymalna prędkość nadruku wynosi 177,8 mm/s, a szerokość 105,7 mm.'} Prędkość kodowania RFID zależy od materiału, ilości danych i ustawień. Rozdzielczość druku nie określa zasięgu odczytu radiowego.

## Wbudowany koder UHF RFID

Drukarka obsługuje etykiety EPC UHF Gen2. Dla pracy w Polsce stosuj ustawienia regionalne EU 866–868 MHz. Minimalny rozstaw etykiet RFID wynosi 15,875 mm.

Dobierz położenie wkładki RFID, szerokość materiału i format rolki. Po założeniu nowego materiału wykonaj kalibrację podawania oraz RFID. Sprawdź zapis danych i odczyt na docelowym przedmiocie przed zakupem większej partii etykiet.

Model obsługuje zgodne etykiety RFID na metal o grubości do 1,0 mm. Sam limit grubości nie potwierdza zgodności każdej etykiety na metal. Znaczenie mają także wkładka, podkład i ustawienia kodowania.

## Rolki do 203,2 mm i taśma 450 m

Szerokość materiału RFID wynosi 25,4–116 mm. Drukarka mieści rolki o średnicy zewnętrznej do 203,2 mm, na gilzie 25,4–76,2 mm.

Druk termotransferowy wymaga taśmy barwiącej. Urządzenie obsługuje taśmy do 450 m, o szerokości 40–110 mm, z warstwą barwiącą na zewnątrz. Taśma powinna być szersza od materiału.

Druk termiczny bezpośredni wymaga materiału termoczułego i nie wymaga taśmy. Etykiety bez wkładki RFID można zadrukować, ale nie można w nich zapisać danych radiowych. Materiały są sprzedawane osobno.

## Ekran dotykowy i połączenie z systemem

Kolorowy ekran dotykowy 3,5 cala umożliwia konfigurację drukarki. Standardowe interfejsy to USB, USB Host, RS-232 i Ethernet 10/100. Wi-Fi wymaga osobno kupowanego modułu [Brother PA-WI-002](/produkt/brother-modul-wifi-pa-wi-002).

Obsługa języków FBPL, EPL, ZPL i DPL ułatwia przygotowanie szablonów. Integracja z WMS lub ERP wymaga również poleceń zapisu RFID i powiązania identyfikatora EPC z towarem. Sam wydruk pliku PDF nie koduje etykiety.

## Akcesoria i zwykła wersja TJ

Obcinak PA-CU-004 i odklejak PA-LP-005 służą do zwykłych etykiet. Nie są zgodne z etykietami RFID. Montaż akcesoriów zleć autoryzowanemu sprzedawcy Brother.

Jeśli potrzebujesz wyłącznie nadruku, sprawdź [Brother ${model.replace('TNR', 'TN')}](/produkt/${ordinary}). Wersja TN nie ma kodera RFID. ${dpi === 203 ? 'Do drobniejszego nadruku wybierz [TJ-4121TNR](/produkt/brother-tj-4121tnr) z rozdzielczością 300 dpi.' : 'Jeśli priorytetem jest szybszy nadruk, sprawdź [TJ-4021TNR](/produkt/brother-tj-4021tnr) z rozdzielczością 203 dpi.'}`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'brother',
    images: ['/images/products/brother-tj-rfid-framed.webp'], imageDescriptions: [`Brother ${model} — przemysłowa drukarka RFID z ekranem dotykowym i przednią osłoną toru RFID`],
    tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie RFID zależy od materiału i ustawień` },
      { name: 'Maksymalna długość druku', value: `${length} mm` },
      { name: 'RFID', value: 'UHF EPC Gen2 / ISO 18000-6C; pasmo EU 866–868 MHz' },
      { name: 'Minimalny rozstaw RFID', value: '15,875 mm' },
      { name: 'Szerokość materiału RFID', value: '25,4–116 mm' },
      { name: 'Grubość materiału', value: '0,06–0,28 mm; zgodne etykiety RFID na metal do 1,0 mm' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm; warstwa barwiąca na zewnątrz' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie przez PA-WI-002' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Polecenia drukarki', value: 'FBPL-EZD / FBPL-EZS: emulacje EPL, ZPL, DPL lub SBPL' },
      { name: 'Wymiary (szer. × gł. × wys.)', value: '248 × 443 × 274 mm' }, { name: 'Masa', value: '9,9 kg' },
      { name: 'Temperatura pracy', value: '0–40°C' },
    ],
    variants: [{ partNumber: pn, name: `${model} — ${dpi} dpi, UHF RFID`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie przemysłowych drukarek RFID Brother TJ', models: [
      { name: 'TJ-4021TNR', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '107 mm', 'Prędkość nadruku': 'do 254 mm/s' } },
      { name: 'TJ-4121TNR', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 177,8 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Identyfikacja pojemników i wyposażenia', 'Przygotowanie etykiet do procesów magazynowych i produkcyjnych'],
    compatibleAccessories: [], relatedAccessories: ['brother-tj-wifi', 'brother-tj-cutter', 'brother-tj-peeler'],
    faq: [
      { question: `Czy Brother ${model} ma wbudowane RFID?`, answer: `Tak. PN ${pn} obejmuje koder UHF RFID. Zwykły model ${model.replace('TNR', 'TN')} nie ma tego kodera.` },
      { question: 'Czy Wi-Fi jest w zestawie?', answer: 'Nie. Standard obejmuje Ethernet, USB, USB Host i RS-232. Wi-Fi wymaga osobno kupowanego modułu PA-WI-002.' },
      { question: 'Czy obsługuje etykiety RFID na metal?', answer: 'Tak, zgodne etykiety na metal mogą mieć grubość do 1,0 mm. Trzeba sprawdzić wkładkę, format rolki i kalibrację. Limit grubości nie oznacza zgodności każdego materiału.' },
      { question: 'Czy obcinak i odklejak działają z etykietami RFID?', answer: 'Nie. PA-CU-004 i PA-LP-005 nie są zgodne z etykietami RFID. Służą do zwykłych etykiet i wymagają montażu przez autoryzowanego sprzedawcę.' },
      { question: 'Czy drukarka może odczytywać towary na półkach?', answer: 'Nie służy do takiej inwentaryzacji. Przygotowuje i koduje etykiety w swoim torze materiałów. Do odczytu towarów na półkach potrzebujesz osobnego czytnika UHF RFID oraz oprogramowania.' },
    ],
    downloads: [
      { name: 'Instrukcja obsługi i kalibracji RFID Brother TJ (EN)', type: 'manual', url: manual, size: 'PDF' },
      { name: `Sterowniki i wsparcie Brother ${model}`, type: 'driver', url: `https://support.brother.com/g/b/producttop.aspx?c=eu_ot&lang=en&prod=lptj${dpi === 203 ? '4021' : '4121'}tnreuk`, size: 'Online' },
    ],
    relatedProducts: [other, ordinary, 'zebra-zt231-rfid', 'zebra-zt411-rfid'], createdAt: '2026-10-16',
  } satisfies Product
})

export const brotherTjAdditionalAccessories: Product[] = [{
  id: 'brother-tj-wifi', slug: 'brother-modul-wifi-pa-wi-002', name: 'Moduł Wi-Fi Brother PA-WI-002',
  shortDescription: 'Moduł Wi-Fi 802.11a/b/g/n do drukarek Brother TJ, w tym TJ-4021TNR i TJ-4121TNR. Sprzedawany osobno.',
  description: 'Brother PA-WI-002 dodaje połączenie Wi-Fi do zgodnej drukarki Brother TJ. Obsługuje sieci IEEE 802.11a/b/g/n. Pasuje do TJ-4020TN, TJ-4021TN, TJ-4120TN, TJ-4121TN, TJ-4021TNR i TJ-4121TNR. Moduł nie dodaje kodera RFID. Wersje TNR mają ten koder fabrycznie. Montaż i konfigurację zleć autoryzowanemu sprzedawcy Brother. Drukarka jest sprzedawana osobno.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'brother',
  images: ['/images/products/PAWI002.png'], imageDescriptions: ['Brother PA-WI-002 — moduł Wi-Fi do drukarek przemysłowych TJ'],
  specifications: [{ name: 'Part Number', value: 'PAWI002' }, { name: 'Model', value: 'PA-WI-002' }, { name: 'Standard Wi-Fi', value: 'IEEE 802.11a/b/g/n' }, { name: 'Zgodność', value: 'TJ-4020TN, TJ-4021TN, TJ-4120TN, TJ-4121TN, TJ-4021TNR, TJ-4121TNR' }],
  applications: ['Połączenie drukarki TJ z siecią Wi-Fi'], tags: ['magazyn', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: ids,
  downloads: [{ name: 'Karta produktu Brother PA-WI-002', type: 'datasheet', url: '/downloads/brother-pa-wi-002-karta-produktu.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}]
