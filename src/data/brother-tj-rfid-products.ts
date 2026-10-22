import type { Product } from './products'

const manual = '/downloads/brother-tj-rfid-instrukcja-en.pdf'
const ids = ['brother-tj-4021tnr', 'brother-tj-4121tnr']

type TjCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications'>

const tjCopy: Record<string, TjCopy> = {
  'TJ-4021TNR': {
    seoTitle: 'Brother TJ-4021TNR — drukarka RFID UHF 203 dpi',
    seoDescription: 'Brother TJ-4021TNR – przemysłowa drukarka RFID UHF 203 dpi. Druk 107 mm do 254 mm/s, etykiety na metal do 1,0 mm, rolka 203,2 mm, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do etykiet magazynowych i wysyłkowych. Druk do 107 mm z prędkością do 254 mm/s, rolka do 203,2 mm, taśma 450 m.',
    description: `Brother TJ-4021TNR to przemysłowa drukarka RFID UHF z głowicą 203 dpi i anteną o stałym położeniu przy szczelinie wyjściowej materiału. Koduje etykiety EPC Gen2 zgodne z ISO 18000-6C w paśmie EU 866–868 MHz. Drukuje z prędkością do 254 mm/s i przyjmuje rolki o średnicy do 203,2 mm.

## Antena przy szczelinie RFID Tear Cover

Materiał RFID przechodzi przez szczelinę osłony RFID Tear Cover. Stała antena obsługuje wiele typów wkładek. Po kalibracji materiału uruchamia się kalibrację RFID z ekranu dotykowego lub poleceniem RFIDDETECT. Kalibracja może trwać kilka minut. Zielony ekran oznacza wynik poprawny, a czerwony błąd.

## Etykiety na metal do 1,0 mm

Zwykły materiał może mieć 0,06–0,28 mm grubości. Etykiety RFID na metal mogą mieć do 1,0 mm. Szerokość materiału RFID wynosi 25,4–116 mm. Przy rozstawie wkładek poniżej 25,4 mm drukarka może cofać materiał. Przy etykietach dłuższych niż 25,4 mm wkładka powinna leżeć ponad 12,7 mm od krawędzi natarcia.

## Zasilacz 90 W w obudowie

Zasilacz jest wbudowany w drukarkę. W pudełku są przewód zasilający, przewód USB i gilza. Złącza to USB 2.0 typu B, USB Host do klawiatury lub skanera, RS-232 i Ethernet 10/100. Wi-Fi 802.11a/b/g/n zapewnia opcjonalny [moduł PA-WI-002](/produkt/brother-modul-wifi-pa-wi-002). Obcinacz i odklejak serii TJ nie są przeznaczone do etykiet RFID.

[Brother TJ-4121TNR](/produkt/brother-tj-4121tnr) ma głowicę 300 dpi i drukuje do 177,8 mm/s.`,
    faq: [
      { question: 'Gdzie TJ-4021TNR ma antenę RFID?', answer: 'Przy szczelinie wyjściowej materiału. To antena o stałym położeniu. Materiał prowadzi się przez szczelinę osłony RFID Tear Cover.' },
      { question: 'Jak gruba może być etykieta na metal w TJ-4021TNR?', answer: 'Do 1,0 mm. Dla zwykłego materiału zakres wynosi 0,06–0,28 mm. Przed zakupem większej partii etykiety RFID należy przetestować w drukarce.' },
      { question: 'Czy TJ-4021TNR wymaga zewnętrznego zasilacza?', answer: 'Nie. Zasilacz 100–240 V AC o mocy 90 W jest wbudowany. W pudełku jest przewód zasilający.' },
    ],
    applications: ['Kodowanie etykiet RFID na metal do 1,0 mm', 'Przemysłowy druk etykiet UHF z rolki 203,2 mm'],
  },
  'TJ-4121TNR': {
    seoTitle: 'Brother TJ-4121TNR — drukarka RFID UHF 300 dpi',
    seoDescription: 'Brother TJ-4121TNR – przemysłowa drukarka RFID UHF 300 dpi. Druk 105,7 mm do 177,8 mm/s, stała antena, etykiety na metal do 1,0 mm, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem. Druk do 105,7 mm z prędkością do 177,8 mm/s, ekran dotykowy 3,5 cala.',
    description: `Brother TJ-4121TNR to przemysłowa drukarka RFID UHF z głowicą 300 dpi. Służy do etykiet, na których obok zakodowanego numeru EPC jest drobny tekst lub mały kod 2D. Drukuje na szerokości 105,7 mm z prędkością do 177,8 mm/s.

## Kalibracja RFID z ekranu 3,5 cala

Na kolorowym ekranie dotykowym kalibrację uruchamia ścieżka Menu, Interface, RFID, Tag Calibration. Kalibracja ustala typ układu, moc zapisu i odczytu oraz pozycję programowania. Wcześniej wykonuje się kalibrację czujnika materiału. Po zakończeniu procedury wartości kalibracji zapisuje się w drukarce.

## Taśma 450 m z warstwą barwiącą na zewnątrz

W wersji RFID taśma musi mieć warstwę barwiącą na zewnątrz nawoju. Rolka taśmy ma do 450 m długości i do 81,3 mm średnicy, na gilzie 25,4 mm. Szerokość taśmy wynosi 40–110 mm i powinna przekraczać szerokość materiału. Materiał RFID może mieć 25,4–116 mm szerokości, a rolka do 203,2 mm średnicy.

## Wydruk do 11 430 mm

Pojedynczy wydruk może mieć do 11 430 mm długości. Etykiety RFID na metal mogą mieć do 1,0 mm grubości. Drukarka przyjmuje polecenia FBPL-EZD, zgodne z EPL II, ZPL II i DPL, oraz FBPL-EZS, zgodne z EPL II, ZPL II i SBPL. Wi-Fi wymaga opcjonalnego [modułu PA-WI-002](/produkt/brother-modul-wifi-pa-wi-002).

Ten sam koder i szybszą głowicę 203 dpi ma [Brother TJ-4021TNR](/produkt/brother-tj-4021tnr), drukująca do 254 mm/s.`,
    faq: [
      { question: 'Jaką taśmę przyjmuje TJ-4121TNR?', answer: 'Taśmę do 450 m na gilzie 25,4 mm, o szerokości 40–110 mm, z warstwą barwiącą na zewnątrz. Taśma z warstwą do wewnątrz pasuje tylko do wersji bez RFID.' },
      { question: 'Czym TJ-4121TNR różni się od TJ-4121TN?', answer: 'Wersja TNR ma koder UHF RFID i antenę przy szczelinie wyjściowej. Jest głębsza o 7 mm, 443 zamiast 436 mm, i cięższa: 9,9 kg zamiast 9,4 kg.' },
      { question: 'Jaki moduł dodaje Wi-Fi do TJ-4121TNR?', answer: 'Moduł PA-WI-002 z Wi-Fi 802.11a/b/g/n. Montuje się go w gnieździe rozszerzeń Wi-Fi drukarki.' },
    ],
    applications: ['Etykiety UHF 300 dpi z drobnym opisem wyrobu', 'Kodowanie etykiet RFID z taśmą 450 m'],
  },
}

export const brotherTjRfidProducts: Product[] = [
  { model: 'TJ-4021TNR', pn: 'TJ4021TNRZ1', dpi: 203, width: '107', speed: '254', length: '25 400', ordinary: 'brother-tj-4021tn', other: ids[1] },
  { model: 'TJ-4121TNR', pn: 'TJ4121TNRZ1', dpi: 300, width: '105,7', speed: '177,8', length: '11 430', ordinary: 'brother-tj-4121tn', other: ids[0] },
].map(({ model, pn, dpi, width, speed, length, ordinary, other }) => {
  const slug = `brother-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `Brother ${model}`, seoH1: `Brother ${model}`,
    ...tjCopy[model],
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
    compatibleAccessories: [], relatedAccessories: ['brother-tj-wifi', 'brother-tj-cutter', 'brother-tj-peeler'],
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
