import type { Product } from './products'

const ids = ['tsc-mb241tr', 'tsc-mb341tr']
const manual = '/downloads/tsc-mb241-instrukcja-en.pdf'
const datasheet = '/downloads/tsc-mb241-karta-produktu-en.pdf'

export const tscMbRfidProducts: Product[] = [
  { model: 'MB241TR', pn: 'MB241TR-A001-0202', dpi: 203, width: '107', speed: '304,8', head: 'tsc-printhead-mb241t-203', ordinary: 'tsc-mb241t', other: ids[1] },
  { model: 'MB341TR', pn: 'MB341TR-A001-0202', dpi: 300, width: '105,7', speed: '228,6', head: 'tsc-printhead-mb341t-300', ordinary: 'tsc-mb341t', other: ids[0] },
].map(({ model, pn, dpi, width, speed, head, ordinary, other }) => {
  const slug = `tsc-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `TSC ${model}`, seoH1: `TSC ${model}`,
    seoTitle: `TSC ${model} — drukarka RFID ${dpi} dpi, EU | TAKMA`,
    seoDescription: `TSC ${model}: przemysłowa drukarka UHF RFID ${dpi} dpi w wersji EU. Ekran dotykowy, Ethernet, taśma 450 m. Sprawdź cenę, dostępność i akcesoria.`,
    shortDescription: `Przemysłowa drukarka UHF RFID ${dpi} dpi w wersji EU/EMEA. Druk do ${width} mm, ekran dotykowy 3,5 cala, Ethernet i ręczne odrywanie etykiet.`,
    description: `TSC ${model} to przemysłowa drukarka z wbudowanym koderem UHF RFID. Drukuje tekst i kody oraz zapisuje dane w układzie zgodnej etykiety. PN ${pn} oznacza wersję EU/EMEA z ręcznym odrywaniem etykiet.

## ${dpi === 203 ? 'RFID do etykiet towarów i opakowań' : 'Nadruk 300 dpi i kodowanie RFID'}

${dpi === 203 ? 'Model MB241TR ma rozdzielczość 203 dpi i maksymalną prędkość nadruku 304,8 mm/s. Szerokość druku wynosi do 107 mm. Służy do przygotowania oznaczeń produktów, opakowań i pojemników.' : 'Model MB341TR ma rozdzielczość 300 dpi do drobniejszego tekstu i szczegółowych kodów. Maksymalna prędkość nadruku wynosi 228,6 mm/s, a szerokość druku 105,7 mm.'}

Prędkość zadania RFID zależy także od etykiety, ilości danych i ustawień kodowania. Rozdzielczość druku nie określa zasięgu odczytu radiowego.

## Etykiety UHF RFID i materiały na metal

Koder obsługuje pasywne etykiety RAIN UHF, zgodne z EPC Gen2 v2 i ISO 18000-63. Minimalny rozstaw kolejnych etykiet wynosi 15,9 mm. Kalibrację materiału i RFID wykonaj przed rozpoczęciem serii oraz po zmianie materiału.

Pokazana konfiguracja z ręcznym odrywaniem obsługuje zgodne etykiety RFID na metal o grubości do 1,65 mm. Limit grubości nie potwierdza zgodności każdej etykiety. Dobierz wkładkę, jej położenie i format rolki. Przed zakupem większej partii sprawdź zapis i odczyt na docelowym przedmiocie.

## Rolki i taśmy barwiące

Seria MB241 obsługuje materiał o szerokości 20–120 mm, rolki o średnicy do 203,2 mm i gilzy 25,4–76,2 mm. Druk termotransferowy wymaga taśmy barwiącej. Urządzenie mieści taśmę do 450 m, o szerokości 40–110 mm.

Druk termiczny bezpośredni wymaga materiału termoczułego i nie wymaga taśmy. W obu metodach kodowanie RFID wymaga odpowiedniej wkładki. Etykiety i taśmy są sprzedawane osobno.

## Łączność i obsługa

Kolorowy ekran dotykowy 3,5 cala służy do konfiguracji materiału, druku i RFID. Standard obejmuje USB, USB Host, RS-232, Ethernet i zegar czasu rzeczywistego. Określenie Wi-Fi Ready oznacza przygotowanie do montażu modułu, a nie wbudowaną łączność bezprzewodową.

Opcjonalny [WF-COM-2002](/produkt/tsc-modul-wifi-bluetooth) dodaje Wi-Fi i Bluetooth. Jest sprzedawany osobno. Składana pokrywa ułatwia dostęp do materiałów przy ograniczonym miejscu z boku drukarki.

## Integracja i właściwe akcesoria

Drukarka korzysta z TSPL-EZD. Kodowanie RFID wymaga odpowiednich poleceń TSPL lub ZPL oraz zgodnego oprogramowania. Sam nadruk kodu kreskowego lub wydruk PDF nie zapisuje danych w układzie RFID.

Do serwisu dobierz głowicę ${dpi} dpi: ${dpi === 203 ? 'PH-MB240-0001' : 'PH-MB240-0002'}. Głowice o innej rozdzielczości nie są zamiennikami do prostego przełożenia. Pokazany PN nie zawiera obcinaka ani odklejaka. Wersja RFID z obcinakiem wymaga innej konfiguracji; nie zastępuje jej zwykła gilotyna MB.

Jeśli potrzebujesz wyłącznie nadruku, sprawdź [TSC ${model.replace('TR', 'T')}](/produkt/${ordinary}). ${dpi === 203 ? 'Do drobniejszego nadruku wybierz [MB341TR](/produkt/tsc-mb341tr) z rozdzielczością 300 dpi.' : 'Jeśli priorytetem jest szybszy nadruk, sprawdź [MB241TR](/produkt/tsc-mb241tr) z rozdzielczością 203 dpi.'}

## Gwarancja

Gwarancja na drukarkę wynosi 2 lata. Dla głowicy obowiązuje 12 miesięcy lub 25 km druku. Dla wałka dociskowego obowiązuje 12 miesięcy lub 50 km druku. Przy limitach czasu i przebiegu decyduje warunek, który wystąpi wcześniej.`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/tsc-mb-rfid-framed.webp'], imageDescriptions: [`TSC ${model} — drukarka RFID z ekranem dotykowym i przednią osłoną anteny`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU/EMEA' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm' },
      { name: 'Grubość materiału', value: 'Zwykłe etykiety 0,06–0,28 mm; zgodne RFID na metal do 1,65 mm w wersji z ręcznym odrywaniem' },
      { name: 'Szerokość materiału', value: '20–120 mm; wymagana zgodność wkładki RFID i kalibracja' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth opcjonalne' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
      { name: 'Polecenia', value: 'TSPL-EZD; kodowanie RFID przez TSPL / ZPL' },
      { name: 'Temperatura pracy', value: '0–40°C' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, ręczne odrywanie`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie TSC MB241TR i MB341TR', models: [
      { name: 'MB241TR', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '107 mm', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'MB341TR', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 228,6 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary i opakowania', 'Oznaczanie pojemników oraz wyposażenia', 'Przygotowanie etykiet do procesów magazynowych i produkcyjnych'],
    compatibleAccessories: [], relatedAccessories: ['tsc-wifi-bt-module', head],
    faq: [
      { question: `Czy TSC ${model} ma fabryczne RFID?`, answer: `Tak. PN ${pn} obejmuje koder UHF RFID w wersji EU/EMEA i ręczne odrywanie etykiet. Zwykłej wersji ${model.replace('TR', 'T')} bez potwierdzonego wyposażenia nie traktuj jako odpowiednika.` },
      { question: 'Czy Wi-Fi Ready oznacza Wi-Fi w zestawie?', answer: 'Nie. Potrzebny jest osobno kupowany moduł WF-COM-2002. Standard obejmuje Ethernet, USB, USB Host i RS-232.' },
      { question: 'Czy drukarka obsługuje etykiety RFID na metal?', answer: 'Pokazana konfiguracja z ręcznym odrywaniem obsługuje zgodne etykiety na metal do 1,65 mm grubości. Należy sprawdzić wkładkę, położenie anteny, format rolki i kalibrację. Limit nie dotyczy automatycznie wersji z obcinakiem.' },
      { question: 'Czy można dołożyć zwykły obcinak MB?', answer: 'Nie traktuj zwykłej gilotyny MB jako zamiennika modułu RFID z obcinakiem. Pokazany PN ma ręczne odrywanie. Inną konfigurację trzeba dobrać osobno.' },
      { question: 'Czy drukarka odczyta towary na półkach?', answer: 'Nie służy do radiowej inwentaryzacji regałów. Przygotowuje etykiety w swoim torze materiałów. Do odczytu towarów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    ],
    downloads: [{ name: 'Karta katalogowa serii MB241 (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcja obsługi serii MB241 z RFID (EN)', type: 'manual', url: manual, size: 'PDF' }, { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: 'https://emea.tscprinters.com/en/downloads', size: 'Online' }],
    relatedProducts: [other, ordinary, 'brother-tj-4021tnr', 'zebra-zt231-rfid'], createdAt: '2026-10-16',
  } satisfies Product
})

export const tscMbRfidAdditionalAccessories: Product[] = [{
  id: 'tsc-printhead-mb341t-300', slug: 'tsc-glowica-mb341t-300dpi', name: 'Głowica TSC MB341T / MB341TR 300 dpi',
  shortDescription: 'Głowica TSC PH-MB240-0002 o rozdzielczości 300 dpi do MB341T i MB341TR.',
  description: 'TSC PH-MB240-0002 to zamienna głowica drukująca 300 dpi do zgodnych drukarek serii MB, w tym MB341T i MB341TR. Nie pasuje jako bezpośredni zamiennik głowicy 203 dpi w MB241TR. Głowica wykonuje nadruk i nie dodaje funkcji RFID. Przed wymianą wyłącz drukarkę, odłącz zasilanie i poczekaj, aż głowica ostygnie. Montaż wykonaj zgodnie z instrukcją urządzenia.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc',
  tags: ['magazyn', 'produkcja'], images: ['/images/products/tsc-ph-mb240-0002.webp'], imageDescriptions: ['Głowica drukująca TSC PH-MB240-0002, 300 dpi do serii MB'],
  specifications: [{ name: 'Part Number', value: 'PH-MB240-0002' }, { name: 'Rozdzielczość', value: '300 dpi' }, { name: 'Zgodność', value: 'MB341T, MB341TR; odpowiednie modele serii MB o rozdzielczości 300 dpi' }],
  applications: ['Wymiana zużytej głowicy 300 dpi'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: ['tsc-mb341tr', 'tsc-mb341t'], downloads: [{ name: 'Instrukcja obsługi serii MB241 (EN)', type: 'manual', url: manual, size: 'PDF' }], createdAt: '2026-10-16',
}]
