import type { Product } from './products'

const datasheet = 'https://www.brother.pl/-/media/product-downloads/devices/label-printers/td/td-series-datasheet/karta_produktu_td-4t-high-step-models.pdf'
const accessoryGuide = 'https://www.brother.eu/-/media/product-downloads/devices/nordics/eu_en/cheat-sheets/td-series-cheatsheet.pdf'
const modelIds = ['brother-td-4650tnwbr', 'brother-td-4750tnwbr']

export const brotherRfidProducts: Product[] = [
  { model: 'TD-4650TNWBR', code: 'TD4650TNWBRZ1', dpi: 203, width: '108', speed: '203', other: 'TD-4750TNWBR', otherSlug: modelIds[1] },
  { model: 'TD-4750TNWBR', code: 'TD4750TNWBRZ1', dpi: 300, width: '105,7', speed: '152', other: 'TD-4650TNWBR', otherSlug: modelIds[0] },
].map(({ model, code, dpi, width, speed, other, otherSlug }) => {
  const slug = `brother-${model.toLowerCase()}`
  const supportId = `lptd${dpi === 203 ? '4650' : '4750'}tnwbreuk`
  return {
    id: slug, slug, name: `Brother ${model}`, seoH1: `Brother ${model}`,
    seoTitle: `Brother ${model} — drukarka RFID ${dpi} dpi | TAKMA`,
    seoDescription: `Brother ${model}: biurkowa drukarka UHF RFID ${dpi} dpi. Druk do ${width} mm, Wi-Fi, Bluetooth i Ethernet. Sprawdź cenę, stan oraz akcesoria.`,
    shortDescription: `Biurkowa drukarka Brother ${model} drukuje i koduje etykiety UHF RFID. Rozdzielczość ${dpi} dpi, Wi-Fi, Bluetooth, Ethernet i taśma do 300 m.`,
    description: `Brother ${model} to biurkowa drukarka etykiet z wbudowanym koderem UHF RFID i rozdzielczością ${dpi} dpi. Wykonuje nadruk i zapisuje dane w układzie zgodnej etykiety.

## ${dpi === 203 ? 'RFID do oznaczania produktów i opakowań' : 'RFID z nadrukiem drobnego tekstu i kodów'}

${dpi === 203 ? 'Wersja 203 dpi służy do przygotowania etykiet produktów, opakowań oraz wyposażenia. Drukuje z prędkością do 203 mm/s i szerokością do 108 mm. Jeśli potrzebujesz drobniejszego nadruku, sprawdź [Brother TD-4750TNWBR](/produkt/brother-td-4750tnwbr) z rozdzielczością 300 dpi.' : 'Wersja 300 dpi pozwala przygotować drobniejszy tekst i kody na etykietach produktów lub wyposażenia. Drukuje z prędkością do 152 mm/s i szerokością do 105,7 mm. Jeśli priorytetem jest szybszy nadruk, sprawdź [Brother TD-4650TNWBR](/produkt/brother-td-4650tnwbr) z rozdzielczością 203 dpi.'}

Rozdzielczość określa szczegółowość nadruku. Nie określa zasięgu odczytu RFID. Wydajność kodowania zależy również od etykiety, ilości danych i ustawień.

## Wbudowany koder UHF RFID

Model ${model} obsługuje etykiety UHF RFID Gen2. Minimalny rozstaw kolejnych etykiet RFID wynosi 15,875 mm. Dobierz także rozmiar wkładki, jej położenie i format rolki.

Po zmianie typu etykiet wykonaj kalibrację RFID. Ustawienie anteny i mocy musi odpowiadać wybranemu materiałowi. Przed rozpoczęciem serii sprawdź zapisany identyfikator oraz jego odczyt na oznaczonym przedmiocie.

Do inwentaryzacji radiowej potrzebujesz osobnego czytnika UHF RFID oraz oprogramowania. Drukarka przygotowuje etykiety i sprawdza je w swoim torze materiałów. Nie zastępuje czytnika magazynowego ani kodera kart NFC.

## Materiały i taśma barwiąca

Drukarka obsługuje materiał o szerokości 20–112 mm oraz wewnętrzne rolki o średnicy do 127 mm. Druk termotransferowy wymaga taśmy barwiącej. Obsługiwane taśmy mają do 300 m długości i 40–110 mm szerokości.

Druk termiczny bezpośredni wymaga etykiet termoczułych i nie wymaga taśmy. W obu metodach zapis RFID wymaga etykiety z odpowiednią wkładką. Zwykła etykieta bez wkładki pozwala jedynie na nadruk. Etykiety i taśmy są sprzedawane osobno.

## Łączność i obsługa stanowiska

USB, USB Host, RS-232, Ethernet, Wi-Fi oraz Bluetooth pozwalają dobrać sposób połączenia do stanowiska pracy. Kolorowy wyświetlacz LCD 2,3 cala umożliwia konfigurację urządzenia i kontrolę ustawień.

Język FBPL-EZD obsługuje emulacje EPL, ZPL, ZPL II i DPL. Przed integracją z WMS lub ERP sprawdź szablon nadruku oraz polecenia kodowania RFID. Sam wydruk pliku PDF z kodem kreskowym nie zapisuje danych w układzie RFID.

## Akcesoria i różnica względem TD-4T bez RFID

Zewnętrzny uchwyt [Brother PA-RH-001](/produkt/brother-uchwyt-rolki-pa-rh-001) umożliwia podawanie większej rolki z tyłu drukarki. Sprawdź przy tym zgodność materiału RFID z torem prowadzenia.

Obcinak PA-CU-003 i odklejak PA-LP-004 są akcesoriami do zwykłych etykiet. Brother nie zaleca używania ich z etykietami RFID. Montaż tych modułów zleć sprzedawcy lub serwisowi.

PN ${code} oznacza wersję z wbudowanym koderem RFID. Warianty TN i TNWB na karcie [Brother TD-4T](/produkt/brother-td-4t) wykonują nadruk bez kodowania RFID. Wybierz wersję TNWBR, jeśli chcesz zapisywać identyfikatory radiowe.`,
    categoryId: 'drukarki-etykiet', manufacturerId: 'brother',
    subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
    images: [`/images/products/${model.toLowerCase()}-framed.webp`],
    imageDescriptions: [`Brother ${model} — biurkowa drukarka UHF RFID, widok pod kątem`],
    tags: ['magazyn', 'retail', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie UHF RFID', rozdzielczosc: `${dpi} dpi`, predkoscDruku: `do ${speed} mm/s`, szerokoscDruku: `do ${width} mm`, szerokoscEtykiet: '20–112 mm' },
    specifications: [
      { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder etykiet UHF RFID' },
      { name: 'RFID', value: 'UHF, etykiety Gen2; koder wbudowany' },
      { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
      { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie może zmniejszyć wydajność` },
      { name: 'Szerokość materiału', value: '20–112 mm' },
      { name: 'Średnica rolki wewnętrznej', value: 'do 127 mm' },
      { name: 'Gilza rolki wewnętrznej', value: '25,4–38,1 mm' },
      { name: 'Taśma barwiąca', value: 'do 300 m; szerokość 40–110 mm' },
      { name: 'Minimalny rozstaw etykiet RFID', value: '15,875 mm (0,625 cala); wymagana zgodność wkładki i kalibracja' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n, Bluetooth' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD 2,3 cala' },
      { name: 'Pamięć', value: '128 MB RAM i 128 MB Flash' },
      { name: 'Polecenia drukarki', value: 'FBPL-EZD: EPL, ZPL, ZPL II, DPL' },
      { name: 'Wymiary (szer. × gł. × wys.)', value: '219 × 284 × 191 mm' },
      { name: 'Masa', value: '3 kg' },
      { name: 'Temperatura pracy', value: '5–40°C' },
      { name: 'W zestawie', value: 'Drukarka, zasilacz, przewód zasilający, przewód USB i skrócona instrukcja' },
    ],
    variants: [{ partNumber: code, name: `${model} — ${dpi} dpi, UHF RFID`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie biurkowych drukarek RFID Brother', models: [
      { name: 'TD-4650TNWBR', slug: modelIds[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '108 mm', 'Prędkość nadruku': 'do 203 mm/s' } },
      { name: 'TD-4750TNWBR', slug: modelIds[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 152 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na produkty i opakowania', 'Oznaczanie wyposażenia identyfikatorem EPC', 'Przygotowanie etykiet do procesów magazynowych i handlowych'],
    compatibleAccessories: [], relatedAccessories: ['brother-td4t-roll-holder', 'brother-td4t-cutter', 'brother-td4t-peeler'],
    faq: [
      { question: `Czy Brother ${model} ma wbudowane RFID?`, answer: `Tak. PN ${code} obejmuje koder UHF RFID do zgodnych etykiet Gen2. Wersje TN i TNWB bez końcówki R nie mają tego kodera.` },
      { question: `Czym ${model} różni się od ${other}?`, answer: dpi === 203 ? 'TD-4650TNWBR ma 203 dpi, druk do 108 mm i prędkość do 203 mm/s. TD-4750TNWBR ma 300 dpi, druk do 105,7 mm i prędkość do 152 mm/s. Oba modele kodują etykiety UHF RFID.' : 'TD-4750TNWBR ma 300 dpi do drobniejszego nadruku. TD-4650TNWBR ma 203 dpi i wyższą maksymalną prędkość nadruku. Rozdzielczość nie określa zasięgu odczytu RFID.' },
      { question: 'Czy zwykły wydruk PDF koduje etykietę RFID?', answer: 'Nie. Zapis wymaga poleceń kodowania RFID i zgodnego oprogramowania. Nadrukowany kod kreskowy lub QR nie potwierdza zapisu danych radiowych.' },
      { question: 'Czy można używać obcinaka i odklejaka z etykietami RFID?', answer: 'Brother nie zaleca używania PA-CU-003 ani PA-LP-004 z etykietami RFID. Te akcesoria służą do zwykłych etykiet. Do materiałów RFID stosuj odpowiedni tor podawania i odbioru.' },
      { question: 'Jak dobrać etykiety RFID do tej drukarki?', answer: 'Sprawdź technologię UHF Gen2, szerokość materiału 20–112 mm, format rolki, położenie wkładki i rozstaw etykiet. Po zmianie materiału wykonaj kalibrację. Przed zakupem większej partii potwierdź zapis oraz odczyt na docelowym przedmiocie.' },
      { question: 'Czy drukarka służy do radiowej inwentaryzacji magazynu?', answer: 'Nie. Przygotowuje i koduje etykiety w torze materiałów. Do odczytu oznaczonych towarów na półkach potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
    ],
    downloads: [
      { name: 'Karta katalogowa TD-4650TNWBR / TD-4750TNWBR (PL)', type: 'datasheet', url: datasheet, size: 'PDF' },
      { name: 'Instrukcja obsługi i ustawiania RFID (EN)', type: 'manual', url: '/downloads/td-4650tnwb_4750tnwb_4650tnwbr_4750tnwbr_eng_ug_06.pdf', size: '4,5 MB' },
      { name: 'Akcesoria do serii TD i ograniczenia RFID (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' },
      { name: `Sterowniki i wsparcie Brother ${model}`, type: 'driver', url: `https://support.brother.com/g/b/producttop.aspx?c=pl&lang=pl&prod=${supportId}`, size: 'Online' },
      { name: 'Warunki rozszerzonej gwarancji Brother w Polsce', type: 'pdf', url: 'https://www.brother.pl/-/media/pdf/cee/pl/regulamin-rozszerzonej-gwarancji-042026.pdf', size: 'PDF' },
    ],
    relatedProducts: [otherSlug, 'zebra-zd621r', 'brother-td-4t'], createdAt: '2026-10-16',
    sameAs: `https://store.brother.pl/devices/label-printer/td/${model.toLowerCase().replaceAll('-', '')}`,
  } satisfies Product
})

export const brotherRfidAdditionalAccessories: Product[] = [{
  id: 'brother-td4t-roll-holder', slug: 'brother-uchwyt-rolki-pa-rh-001', name: 'Uchwyt rolki Brother PA-RH-001',
  shortDescription: 'Zewnętrzny uchwyt rolki Brother PA-RH-001 do drukarek TD-4T, w tym TD-4650TNWBR i TD-4750TNWBR.',
  description: 'Brother PA-RH-001 to zewnętrzny uchwyt rolki materiału do drukarek TD-4T. Podaje materiał przez tylną szczelinę drukarki i pozwala korzystać z większej rolki. Pasuje do TD-4420TN, TD-4520TN, TD-4650TNWB, TD-4750TNWB, TD-4650TNWBR i TD-4750TNWBR. Uchwyt jest sprzedawany osobno. Drukarka i materiał nie są częścią zestawu. Przy etykietach RFID sprawdź zgodność wkładki, położenie anteny i kalibrację urządzenia.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'brother',
  images: ['/images/products/brother-pa-rh-001.webp'], imageDescriptions: ['Brother PA-RH-001 — zewnętrzny uchwyt rolki do drukarek TD-4T'],
  specifications: [{ name: 'Part Number', value: 'PARH001' }, { name: 'Model', value: 'PA-RH-001' }, { name: 'Zgodność', value: 'TD-4420TN, TD-4520TN, TD-4650TNWB, TD-4750TNWB, TD-4650TNWBR, TD-4750TNWBR' }],
  applications: ['Podawanie materiału z zewnętrznej rolki'], tags: ['magazyn', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [...modelIds, 'brother-td-4t'],
  downloads: [{ name: 'Katalog akcesoriów Brother TD (EN)', type: 'pdf', url: accessoryGuide, size: 'PDF' }],
  createdAt: '2026-10-16', sameAs: 'https://store.brother.pl/accessories/td/parh001',
}]
