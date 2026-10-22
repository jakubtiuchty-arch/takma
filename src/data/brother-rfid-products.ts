import type { Product } from './products'

const datasheet = 'https://www.brother.pl/-/media/product-downloads/devices/label-printers/td/td-series-datasheet/karta_produktu_td-4t-high-step-models.pdf'
const userGuide = '/downloads/td-4650tnwb_4750tnwb_4650tnwbr_4750tnwbr_eng_ug_06.pdf'
const modelIds = ['brother-td-4650tnwbr', 'brother-td-4750tnwbr']

type TdCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications' | 'specifications'>

const tdCopy: Record<string, TdCopy> = {
  'TD-4650TNWBR': {
    seoTitle: 'Brother TD-4650TNWBR — drukarka RFID UHF 203 dpi',
    seoDescription: 'Brother TD-4650TNWBR – biurkowa drukarka RFID UHF 203 dpi. Druk 108 mm do 203 mm/s, Wi-Fi, Bluetooth 5.0 i Ethernet w standardzie, antena z suwakiem.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 203 dpi z Wi-Fi, Bluetooth i Ethernetem. Druk do 108 mm z prędkością do 203 mm/s, taśma barwiąca do 300 m.',
    description: `Brother TD-4650TNWBR to biurkowa drukarka RFID UHF z głowicą 203 dpi i koderem EPC Gen2 zgodnym z ISO 18000-63. Drukuje etykiety o szerokości do 108 mm z prędkością do 203,2 mm/s. Wi-Fi, Bluetooth i Ethernet są wbudowane, więc drukarka nie wymaga modułów sieciowych.

## Suwak Antenna Slide i kalibracja RFID

Antenę ustawia się ręcznie. Po otwarciu pokrywy komory rolki suwak Antenna Slide przesuwa się tak, aby wskaźnik pozycji znalazł się na wysokości pętli anteny we wkładce. Następnie wykonuje się kalibrację materiału, a po niej kalibrację RFID. Kalibracja RFID wyznacza typ układu, moc zapisu i odczytu oraz miejsce kodowania na etykiecie. Należy ją powtórzyć po każdej zmianie typu etykiety.

## Rozstaw wkładek a tempo kodowania etykiet RFID

Najmniejszy rozstaw wkładek wynosi 15,875 mm. Przy rozstawie poniżej 25,4 mm drukarka może cofać materiał podczas kodowania i drukuje wolniej. Wkładki powinny leżeć na środku szerokości etykiety, w tym samym miejscu na każdej etykiecie. Koder obsługuje pasmo EU 866–868 MHz i Global 902–928 MHz.

## Materiał 20–112 mm i komplet złączy

Materiał RFID może mieć 20–112 mm szerokości i 0,06–0,19 mm grubości. Wewnątrz mieści się rolka do 127 mm. Rolkę do 203,2 mm podaje przez tylną szczelinę [zewnętrzny uchwyt rolki](/produkt/brother-uchwyt-rolki-pa-rh-001). Złącza obejmują USB 2.0, USB Host, RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n i Bluetooth 5.0 z BLE. Obcinacz i odklejak z oferty Brother nie są przeznaczone do etykiet RFID.

[Brother TD-4750TNWBR](/produkt/brother-td-4750tnwbr) ma głowicę 300 dpi i drukuje do 152,4 mm/s.`,
    faq: [
      { question: 'Jak ustawia się antenę w TD-4650TNWBR?', answer: 'Suwakiem Antenna Slide w komorze rolki. Wskaźnik pozycji ustawia się na wysokości pętli anteny we wkładce. Pętla leży zwykle nad układem lub pod nim, a w niektórych etykietach z boku.' },
      { question: 'Co jest w pudełku z TD-4650TNWBR?', answer: 'Drukarka, zewnętrzny zasilacz, przewód zasilający, przewód USB, gilza taśmy 25,4 mm i dwa trzpienie taśmy. Etykiety RFID i taśmę barwiącą zamawia się osobno.' },
      { question: 'Czy obcinacz pasuje do etykiet RFID w TD-4650TNWBR?', answer: 'Nie. Obcinacz i odklejak do tej serii nie współpracują z etykietami RFID. Ich montaż wykonuje autoryzowany sprzedawca Brother.' },
    ],
    applications: ['Kodowanie etykiet UHF z ręcznym ustawieniem anteny', 'Biurkowe etykiety RFID z łącznością Wi-Fi i Bluetooth'],
    specifications: [
      { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder etykiet UHF RFID' },
      { name: 'RFID', value: 'UHF EPC Gen2 / ISO 18000-63; pasmo EU 866–868 MHz; koder wbudowany' },
      { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Szerokość druku', value: '108 mm' },
      { name: 'Prędkość nadruku', value: 'do 203 mm/s; kodowanie może zmniejszyć wydajność' },
      { name: 'Szerokość materiału', value: '20–112 mm' },
      { name: 'Średnica rolki wewnętrznej', value: 'do 127 mm' },
      { name: 'Gilza rolki wewnętrznej', value: '25,4 lub 38,1 mm' },
      { name: 'Taśma barwiąca', value: 'do 300 m; szerokość 40–110 mm' },
      { name: 'Minimalny rozstaw etykiet RFID', value: '15,875 mm (0,625 cala); wymagana zgodność wkładki i kalibracja' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n, Bluetooth' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD 2,3 cala' },
      { name: 'Polecenia drukarki', value: 'FBPL-EZD: EPL, ZPL, ZPL II, DPL' },
      { name: 'Wymiary (szer. × gł. × wys.)', value: '219 × 284 × 191 mm' },
      { name: 'Masa', value: '3 kg' },
      { name: 'Temperatura pracy', value: '5–40°C' },
      { name: 'W zestawie', value: 'Drukarka, zewnętrzny zasilacz, przewód zasilający, przewód USB, gilza taśmy 25,4 mm i 2 trzpienie taśmy' },
    ],
  },
  'TD-4750TNWBR': {
    seoTitle: 'Brother TD-4750TNWBR — drukarka RFID UHF 300 dpi',
    seoDescription: 'Brother TD-4750TNWBR – biurkowa drukarka RFID UHF 300 dpi do drobnego nadruku. Druk 105,7 mm do 152 mm/s, Wi-Fi, Bluetooth 5.0, Ethernet, taśma 300 m.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 300 dpi do etykiet z drobnym tekstem i małymi kodami 2D. Druk do 105,7 mm z prędkością do 152 mm/s, Wi-Fi, Bluetooth i Ethernet.',
    description: `Brother TD-4750TNWBR to drukarka RFID UHF w biurkowej obudowie serii TD-4T, z głowicą 300 dpi. Głowica ma 11,8 punktu na milimetr. Ta rozdzielczość służy do etykiet z wkładką UHF, na których jest drobny tekst lub mały kod 2D.

## Antena ustawiana przed kalibracją

Pozycję anteny wybiera się na podstawie budowy etykiety. Pętla anteny leży zwykle bezpośrednio nad układem lub pod nim. Zielony suwak Antenna Slide w komorze rolki przesuwa się do tej pozycji na numerowanej podziałce. Kalibracja RFID ustala potem typ układu, moce zapisu i odczytu oraz pozycję programowania. Samego położenia anteny kalibracja nie zmienia.

## 11 430 mm wydruku i taśma 110 lub 300 m

Maksymalna długość wydruku wynosi 11 430 mm. Szerokość nadruku to 105,7 mm, a prędkość do 152,4 mm/s. Taśma o długości 300 m pracuje na gilzie 25,4 mm, a taśma 110 m na gilzie 12,7 mm. W obu przypadkach warstwa barwiąca jest na zewnątrz. Szerokość taśmy wynosi 40–110 mm.

## Wi-Fi, Bluetooth i dwa języki poleceń

Drukarka ma USB 2.0, port RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n i Bluetooth 5.0 w profilach SPP i GATT. Do portu USB Host podłącza się klawiaturę, skaner lub pamięć USB. Szablony przyjmuje w FBPL-EZD, zgodnym z EPL II, ZPL II i DPL, albo w FBPL-EZS, zgodnym z EPL II, ZPL II i SBPL.

Szybsza wersja 203 dpi, [Brother TD-4650TNWBR](/produkt/brother-td-4650tnwbr), drukuje do 203,2 mm/s.`,
    faq: [
      { question: 'Jak długą etykietę wydrukuje TD-4750TNWBR?', answer: 'Do 11 430 mm na jednym wydruku. Wersja 203 dpi, TD-4650TNWBR, drukuje do 25 400 mm.' },
      { question: 'Co ustala kalibracja RFID w TD-4750TNWBR?', answer: 'Typ układu, moc zapisu i odczytu oraz miejsce kodowania na etykiecie. Antenę ustawia się wcześniej ręcznie, suwakiem Antenna Slide.' },
      { question: 'Jaki rozstaw wkładek zapewnia płynną pracę TD-4750TNWBR?', answer: 'Powyżej 25,4 mm. Przy mniejszym rozstawie drukarka może cofać materiał i drukuje wolniej. Minimalny rozstaw wynosi 15,875 mm.' },
    ],
    applications: ['Etykiety RFID z małym kodem 2D i drobnym tekstem', 'Kodowanie etykiet UHF 300 dpi na stanowisku biurowym'],
    specifications: [
      { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder etykiet UHF RFID' },
      { name: 'RFID', value: 'UHF EPC Gen2 / ISO 18000-63; pasmo EU 866–868 MHz; koder wbudowany' },
      { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
      { name: 'Rozdzielczość', value: '300 dpi' },
      { name: 'Szerokość druku', value: '105,7 mm' },
      { name: 'Prędkość nadruku', value: 'do 152 mm/s; kodowanie może zmniejszyć wydajność' },
      { name: 'Szerokość materiału', value: '20–112 mm' },
      { name: 'Średnica rolki wewnętrznej', value: 'do 127 mm' },
      { name: 'Gilza rolki wewnętrznej', value: '25,4 lub 38,1 mm' },
      { name: 'Taśma barwiąca', value: 'do 300 m; szerokość 40–110 mm' },
      { name: 'Minimalny rozstaw etykiet RFID', value: '15,875 mm (0,625 cala); wymagana zgodność wkładki i kalibracja' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n, Bluetooth' },
      { name: 'Wyświetlacz', value: 'Kolorowy LCD 2,3 cala' },
      { name: 'Polecenia drukarki', value: 'FBPL-EZD: EPL, ZPL, ZPL II, DPL' },
      { name: 'Wymiary (szer. × gł. × wys.)', value: '219 × 284 × 191 mm' },
      { name: 'Masa', value: '3 kg' },
      { name: 'Temperatura pracy', value: '5–40°C' },
      { name: 'W zestawie', value: 'Drukarka, zewnętrzny zasilacz, przewód zasilający, przewód USB, gilza taśmy 25,4 mm i 2 trzpienie taśmy' },
    ],
  },
}

export const brotherRfidProducts: Product[] = [
  { model: 'TD-4650TNWBR', code: 'TD4650TNWBRZ1', dpi: 203, width: '108', speed: '203', otherSlug: modelIds[1] },
  { model: 'TD-4750TNWBR', code: 'TD4750TNWBRZ1', dpi: 300, width: '105,7', speed: '152', otherSlug: modelIds[0] },
].map(({ model, code, dpi, width, speed, otherSlug }) => {
  const slug = `brother-${model.toLowerCase()}`
  const supportId = `lptd${dpi === 203 ? '4650' : '4750'}tnwbreuk`
  return {
    id: slug, slug, name: `Brother ${model}`, seoH1: `Brother ${model}`,
    ...tdCopy[model],
    categoryId: 'drukarki-etykiet', manufacturerId: 'brother',
    subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
    images: [dpi === 203 ? '/images/products/td-4650tnwbr-right-framed.webp' : `/images/products/${model.toLowerCase()}-framed.webp`],
    imageDescriptions: [`Brother ${model} — biurkowa drukarka UHF RFID, widok z przodu i z lewego boku`],
    tags: ['magazyn', 'retail', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie UHF RFID', rozdzielczosc: `${dpi} dpi`, predkoscDruku: `do ${speed} mm/s`, szerokoscDruku: `do ${width} mm`, szerokoscEtykiet: '20–112 mm' },
    variants: [{ partNumber: code, name: `${model} — ${dpi} dpi, UHF RFID`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie biurkowych drukarek RFID Brother', models: [
      { name: 'TD-4650TNWBR', slug: modelIds[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '108 mm', 'Prędkość nadruku': 'do 203 mm/s' } },
      { name: 'TD-4750TNWBR', slug: modelIds[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 152 mm/s' } },
    ] },
    compatibleAccessories: [], relatedAccessories: ['brother-td4t-roll-holder', 'brother-td4t-cutter', 'brother-td4t-peeler'],
    downloads: [
      { name: 'Karta katalogowa TD-4650TNWBR / TD-4750TNWBR (PL)', type: 'datasheet', url: datasheet, size: 'PDF' },
      { name: 'Instrukcja obsługi i ustawiania RFID (EN)', type: 'manual', url: userGuide, size: '4,5 MB' },
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
  downloads: [
    { name: 'Karta katalogowa TD-4T z akcesoriami (PL)', type: 'datasheet', url: datasheet, size: 'PDF' },
    { name: 'Instrukcja TD-4T — montaż zewnętrznego uchwytu rolki (EN)', type: 'manual', url: `${userGuide}#page=18`, size: '4,5 MB' },
  ],
  createdAt: '2026-10-16', sameAs: 'https://store.brother.pl/accessories/td/parh001',
}]
