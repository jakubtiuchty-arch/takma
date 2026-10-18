import type { Product } from './products'

const datasheet = 'https://www.brother.pl/-/media/product-downloads/devices/label-printers/td/td-series-datasheet/karta_produktu_td-4t-high-step-models.pdf'
const userGuide = '/downloads/td-4650tnwb_4750tnwb_4650tnwbr_4750tnwbr_eng_ug_06.pdf'
const modelIds = ['brother-td-4650tnwbr', 'brother-td-4750tnwbr']

type TdCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const tdCopy: Record<string, TdCopy> = {
  'TD-4650TNWBR': {
    seoTitle: 'Brother TD-4650TNWBR — drukarka RFID UHF 203 dpi',
    seoDescription: 'Brother TD-4650TNWBR: biurkowa drukarka i koder UHF RFID 203 dpi. Druk 108 mm z prędkością 203 mm/s, Wi-Fi, Bluetooth, Ethernet i taśma 300 m.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 203 dpi z Wi-Fi, Bluetooth i Ethernetem. Druk do 108 mm z prędkością do 203 mm/s, taśma barwiąca do 300 m.',
    description: `Brother TD-4650TNWBR to biurkowa drukarka 4-calowa z wbudowanym koderem UHF RFID i głowicą 203 dpi. Ma w standardzie Wi-Fi, Bluetooth i Ethernet. Sprawdzi się przy kasie, na zapleczu sklepu, w małym magazynie i w dziale administracji wyposażenia.

## Etykiety towarów i wyposażenia

Głowica 203 dpi drukuje 8 punktów na milimetr. Ta rozdzielczość wystarcza do etykiet z kodem EAN, numerem inwentarzowym i krótkim opisem. TD-4650TNWBR drukuje z prędkością do 203 mm/s na szerokości do 108 mm. To najszybszy model RFID w biurkowej serii TD-4T.

Drobny tekst i małe kody 2D lepiej wydrukuje [Brother TD-4750TNWBR](/produkt/brother-td-4750tnwbr) z głowicą 300 dpi. Koder RFID jest w obu modelach taki sam.

## Zapis danych RFID

Koder obsługuje etykiety UHF EPC Gen2 zgodne z ISO 18000-63. W Polsce ustaw region EU, czyli pasmo 866–868 MHz. Najmniejszy rozstaw etykiet RFID wynosi 15,875 mm. Po każdej zmianie typu etykiety uruchom kalibrację RFID. Kalibracja ustawia położenie anteny oraz moc zapisu i odczytu.

Drukarka sprawdza zapis i może zakodować etykietę ponownie. Wtedy druk zatrzymuje się na chwilę. Polecenia RFID przygotujesz w języku FBPL-EZD, który emuluje EPL, ZPL i DPL.

## Łączność bez dodatkowych modułów

TD-4650TNWBR ma USB 2.0, USB Host, RS-232, Ethernet 10/100, Wi-Fi 802.11a/b/g/n i Bluetooth. Nie trzeba dokupować modułu sieciowego. Kolorowy wyświetlacz LCD 2,3 cala pokazuje stan drukarki i ustawienia.

W pudełku są drukarka, zasilacz, przewód zasilający, przewód USB i skrócona instrukcja.

## Materiał i rozbudowa

Materiał może mieć 20–112 mm szerokości i 0,06–0,19 mm grubości. Rolka wewnętrzna ma do 127 mm średnicy na gilzie 25,4 lub 38,1 mm. Taśma barwiąca ma do 300 m i 40–110 mm szerokości. Rolkę o średnicy do 203,2 mm podasz z tyłu drukarki przez [uchwyt Brother PA-RH-001](/produkt/brother-uchwyt-rolki-pa-rh-001).

Obcinak PA-CU-003 i odklejak PA-LP-004 nie współpracują z etykietami RFID. W dziale [etykiety RFID](/etykiety-rfid-zebra) są rolki z wkładką UHF. Przed zamówieniem podaj nam szerokość etykiety i średnicę gilzy. Dobierzemy rolkę do TD-4650TNWBR i położenie wkładki.

Wersje TD-4650TN i TD-4650TNWB na karcie [Brother TD-4T](/produkt/brother-td-4t) drukują bez kodowania RFID.`,
    faq: [
      { question: 'Czy TD-4650TNWBR ma Wi-Fi w standardzie?', answer: 'Tak. Ma Wi-Fi 802.11a/b/g/n, Bluetooth i Ethernet 10/100 oraz USB i RS-232. Nie trzeba dokupować modułu.' },
      { question: 'Czy TD-4650TNWB bez litery R koduje RFID?', answer: 'Nie. Koder UHF RFID mają tylko wersje z końcówką R: TD-4650TNWBR i TD-4750TNWBR.' },
      { question: 'Jakie pasmo RFID wybrać w Polsce?', answer: 'Region EU, czyli 866–868 MHz. Ustawienie Global 902–928 MHz jest przeznaczone dla innych regionów.' },
      { question: 'Czy do TD-4650TNWBR pasuje większa rolka?', answer: 'Tak, z zewnętrznym uchwytem PA-RH-001. Uchwyt podaje rolkę o średnicy do 203,2 mm przez tylną szczelinę. Wewnątrz mieści się rolka do 127 mm.' },
      { question: 'Czy obcinak PA-CU-003 działa z etykietami RFID?', answer: 'Nie. Obcinak PA-CU-003 i odklejak PA-LP-004 służą do zwykłych etykiet. Ich montaż wykonuje autoryzowany sprzedawca Brother.' },
    ],
  },
  'TD-4750TNWBR': {
    seoTitle: 'Brother TD-4750TNWBR — drukarka RFID UHF 300 dpi',
    seoDescription: 'Brother TD-4750TNWBR: biurkowa drukarka i koder UHF RFID 300 dpi do etykiet z drobnym tekstem i kodami 2D. Druk 105,7 mm, Wi-Fi i Bluetooth.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 300 dpi do etykiet z drobnym tekstem i małymi kodami 2D. Druk do 105,7 mm z prędkością do 152 mm/s, Wi-Fi, Bluetooth i Ethernet.',
    description: `Brother TD-4750TNWBR łączy biurkową obudowę serii TD-4T, głowicę 300 dpi i koder UHF RFID. Wybierz ją do etykiet, które oprócz identyfikatora EPC mają drobny opis, skład, numer partii albo mały kod QR.

## Precyzyjny nadruk na małej etykiecie

Głowica ma 11,8 punktu na milimetr. Punkt ma ok. 0,085 mm, więc drobne znaki i moduły kodu 2D mają czyste krawędzie. Ta rozdzielczość pasuje do metek odzieżowych, etykiet kosmetyków, etykiet aptecznych i oznaczeń sprzętu medycznego lub laboratoryjnego.

Szerokość nadruku wynosi 105,7 mm, a prędkość do 152 mm/s. Do etykiet z dużym kodem kreskowym wystarczy [TD-4650TNWBR](/produkt/brother-td-4650tnwbr) z głowicą 203 dpi. Drukuje szybciej, do 203 mm/s.

## Kodowanie i kalibracja

TD-4750TNWBR koduje etykiety UHF EPC Gen2 (ISO 18000-63) w paśmie EU 866–868 MHz. Wkładki mogą występować co 15,875 mm. Kalibracja RFID ustawia antenę i moc zapisu. Uruchom ją po założeniu każdego nowego typu etykiety. Nie projektuj małego kodu 2D nad układem wkładki. Nierówna powierzchnia nad układem pogarsza nadruk.

Szablony przygotujesz w FBPL-EZD z emulacją EPL, ZPL i DPL. Zadanie musi zawierać polecenia zapisu RFID.

## Wyposażenie i zestaw

- USB 2.0, USB Host, RS-232 i Ethernet 10/100,
- Wi-Fi 802.11a/b/g/n i Bluetooth,
- kolorowy wyświetlacz LCD 2,3 cala,
- w zestawie zasilacz, przewód zasilający, przewód USB i skrócona instrukcja.

## Rolki i taśmy

Szerokość materiału wynosi 20–112 mm, a grubość 0,06–0,19 mm. Wewnętrzna rolka ma do 127 mm średnicy. [Uchwyt PA-RH-001](/produkt/brother-uchwyt-rolki-pa-rh-001) pozwala podawać rolkę do 203,2 mm z tyłu drukarki. Taśma barwiąca ma do 300 m długości. Do drobnego tekstu na folii wybierz taśmę żywiczną.

Etykiety z wkładką UHF znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Prześlij nam projekt etykiety przed zamówieniem. Dobierzemy rolkę do TD-4750TNWBR tak, aby wkładka nie leżała pod drobnym nadrukiem.

Obcinak PA-CU-003 i odklejak PA-LP-004 nie są przeznaczone do etykiet RFID. Bez kodera RFID drukuje [Brother TD-4750TNWB](/produkt/brother-td-4t).`,
    faq: [
      { question: 'Kiedy wybrać TD-4750TNWBR zamiast TD-4650TNWBR?', answer: 'Gdy etykieta ma drobny tekst, mały kod 2D lub logo. TD-4750TNWBR ma 300 dpi, a TD-4650TNWBR 203 dpi. Model 203 dpi drukuje szybciej: 203 mm/s zamiast 152 mm/s.' },
      { question: 'Czy 300 dpi wydłuża zasięg odczytu etykiety?', answer: 'Nie. Zasięg zależy od wkładki, czytnika i przedmiotu. Rozdzielczość wpływa tylko na jakość nadruku.' },
      { question: 'Czy TD-4750TNWBR nada się do metek w sklepie odzieżowym?', answer: 'Tak. Drukuje drobny tekst i kody na metkach oraz koduje w nich wkładki UHF. Prześlij nam wzór metki. Dobierzemy materiał z wkładką i taśmę.' },
      { question: 'Czy zwykły wydruk PDF zakoduje etykietę RFID?', answer: 'Nie. Zapis wymaga poleceń kodowania RFID w szablonie. Nadrukowany kod kreskowy lub QR nie zapisuje danych we wkładce.' },
      { question: 'Jak gruby materiał przyjmie TD-4750TNWBR?', answer: 'Materiał o grubości 0,06–0,19 mm i szerokości 20–112 mm. Rolka wewnętrzna może mieć do 127 mm średnicy.' },
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
    specifications: [
      { name: 'Typ urządzenia', value: 'Biurkowa drukarka i koder etykiet UHF RFID' },
      { name: 'RFID', value: 'UHF EPC Gen2 / ISO 18000-63; pasmo EU 866–868 MHz; koder wbudowany' },
      { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
      { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie może zmniejszyć wydajność` },
      { name: 'Szerokość materiału', value: '20–112 mm' },
      { name: 'Średnica rolki wewnętrznej', value: 'do 127 mm' },
      { name: 'Gilza rolki wewnętrznej', value: '25,4 lub 38,1 mm' },
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
