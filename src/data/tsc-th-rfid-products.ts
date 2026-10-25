import type { Product } from './products'

const ids = ['tsc-th240r', 'tsc-th340r']
// Wersje HC 4" (tsc-hc-products.ts): moduły radiowe i uchwyt rolki wspólne z serią TH240/DH240.
const hcIds = ['tsc-th240thc', 'tsc-dh240thc']
const modelNames: Record<string, string> = { 'tsc-th240r': 'TH240R', 'tsc-th340r': 'TH340R', 'tsc-th240thc': 'TH240THC / TH340THC', 'tsc-dh240thc': 'DH240THC / DH340THC' }
const support = 'https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers'
const datasheet = '/downloads/tsc-th-dh-karta-produktu-en.pdf'
const manual = '/downloads/tsc-th-dh-instrukcja-en.pdf'
const sharedAccessories = ['tsc-th-wifi', 'tsc-th-bluetooth', 'tsc-th-roll-holder']

export const tscThRfidAccessories: Product[] = [
  {
    id: 'tsc-th-wifi', slug: 'tsc-modul-wifi-sp-th240-0041', pn: 'SP-TH240-0041', image: 'wifi',
    name: 'Moduł Wi-Fi i Bluetooth TSC TH240 EU',
    description: 'TSC SP-TH240-0041 to moduł Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0 w wersji EU/EMEA. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R, a także do wersji dla ochrony zdrowia TH240THC, TH340THC, DH240THC i DH340THC. Służy do rozbudowy wariantu bez łączności radiowej. Warianty TH240R-A001-0102 i TH340R-A001-0102 oraz wersje HC z końcówką PN 0102 mają już Wi-Fi z Bluetooth, więc nie wymagają tego modułu. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno. Nie kupuj jednocześnie osobnego modułu Bluetooth do tego samego gniazda.',
    printers: [...ids, ...hcIds],
  },
  {
    id: 'tsc-th-bluetooth', slug: 'tsc-modul-bluetooth-sp-th240-0044', pn: 'SP-TH240-0044', image: 'bluetooth',
    name: 'Moduł Bluetooth TSC TH240',
    description: 'TSC SP-TH240-0044 to moduł Bluetooth 5.0 do serii TH240 i TH340, w tym TH240R oraz TH340R, a także do wersji dla ochrony zdrowia TH240THC, TH340THC, DH240THC i DH340THC. Umożliwia rozbudowę wariantu bez łączności radiowej. Nie dodaje Wi-Fi. Jest alternatywą dla modułu Wi-Fi z Bluetooth SP-TH240-0041. Warianty z fabrycznym Wi-Fi i Bluetooth nie wymagają tej części. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.',
    printers: [...ids, ...hcIds],
  },
  {
    id: 'tsc-th-roll-holder', slug: 'tsc-uchwyt-rolki-op-com-0002', pn: 'OP-COM-0002', image: 'holder',
    name: 'Zewnętrzny uchwyt rolki TSC — gilza 3 cale',
    description: 'TSC OP-COM-0002 to zewnętrzny uchwyt rolki etykiet ze szpindlem do gilzy 76,2 mm, czyli 3 cale. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R, a także do wersji dla ochrony zdrowia TH240THC, TH340THC, DH240THC i DH340THC. Ustawia się go za drukarką, a materiał podaje przez wejście zewnętrzne. Przed użyciem etykiet RFID sprawdź prowadzenie podkładu i kalibrację wkładki. Uchwyt nie jest napędzanym nawijakiem. Drukarka i rolka etykiet są sprzedawane osobno.',
    printers: [...ids, ...hcIds],
  },
  {
    id: 'tsc-th-head-203', slug: 'tsc-glowica-ph-th240-0001', pn: 'PH-TH240-0001', image: 'head203',
    name: 'Głowica TSC TH240R — 203 dpi',
    description: 'TSC PH-TH240-0001 to moduł głowicy drukującej 203 dpi do serii TH240, w tym TH240R. Jest częścią zamienną do urządzenia o tej rozdzielczości. Nie zastępuje głowicy 300 dpi do TH340R. Przed zakupem podaj model i numer seryjny drukarki. Zestaw obejmuje jedną głowicę. Głowica wykonuje nadruk i nie dodaje kodera RFID. Wymianę zleć serwisowi.',
    printers: [ids[0]],
  },
  {
    id: 'tsc-th-head-300', slug: 'tsc-glowica-ph-th240-0002', pn: 'PH-TH240-0002', image: 'head300',
    name: 'Głowica TSC TH340R — 300 dpi',
    description: 'TSC PH-TH240-0002 to moduł głowicy drukującej 300 dpi do serii TH340, w tym TH340R. Jest częścią zamienną do urządzenia o tej rozdzielczości. Nie zastępuje głowicy 203 dpi do TH240R. Przed zakupem podaj model i numer seryjny drukarki. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Głowica wykonuje nadruk i nie dodaje kodera RFID. Wymianę zleć serwisowi.',
    printers: [ids[1]],
  },
].map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`, shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  seoTitle: `${a.name} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Sprawdź zgodność, cenę, dostępność i wyposażenie w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'retail'],
  images: [`/images/products/tsc-th-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}${a.image === 'head300' ? '; zdjęcie poglądowe' : ''}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.printers.map(id => modelNames[id]).join(', ') }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: a.printers,
  downloads: [{ name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }], createdAt: '2026-10-16',
}))

type ThCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications' | 'specifications'>

const thCopy: Record<string, ThCopy> = {
  TH240R: {
    seoTitle: 'TSC TH240R — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC TH240R – biurkowa drukarka RFID UHF 203 dpi. Druk 108 mm do 203 mm/s, ekran dotykowy 3,5 cala, etykiety na metal do 1,35 mm i Ethernet.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 203 dpi do etykiet logistycznych i oznaczeń towarów. Druk do 108 mm z prędkością do 203 mm/s, ekran dotykowy 3,5 cala, Ethernet.',
    description: `TSC TH240R to biurkowa drukarka RFID UHF z głowicą 203 dpi i kolorowym ekranem dotykowym 3,5 cala. Koduje etykiety RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Drukuje do 203 mm/s na szerokości 108 mm.

## Wewnętrzna antena wielopozycyjna pod materiałem

Fabryczny koder ma wewnętrzną antenę wielopozycyjną umieszczoną pod materiałem. Minimalny odstęp kolejnych wkładek to 15,9 mm. Wybrane etykiety na metal do 1,35 mm drukarka obsługuje tylko w trybie odrywania. Etykietę z błędem kodowania przekreśla na odcinku co najmniej 1 cala. Licznik RFID osobno zlicza etykiety dobre i błędne.

## TH240R-A001-0002 i TH240R-A001-0102

Wersja -0002 ma porty RS-232, Ethernet 10/100, USB Host i USB 2.0. Wersja -0102 ma dodatkowo Wi-Fi 802.11a/b/g/n/ac i Bluetooth. Do wersji przewodowej dealer montuje [moduł Wi-Fi z Bluetooth 5.0](/produkt/tsc-modul-wifi-sp-th240-0041) albo [moduł Bluetooth 5.0](/produkt/tsc-modul-bluetooth-sp-th240-0044). Pamięć 128 MB Flash można rozszerzyć kartą microSD do 512 GB.

## Rolka 127 mm i taśma 300 m

Wewnątrz mieści się rolka o średnicy 127 mm na gilzie 25,4–38,1 mm. Materiał ma 15–120 mm szerokości i 0,06–0,19 mm grubości. Taśma ma 300 m na gilzie 25,4 mm albo 110 m na gilzie 12,7 mm. W zestawie są dwa trzpienie taśmy 25,4 mm, gilza taśmy i adapter do materiału 120 mm. [Uchwyt zewnętrzny](/produkt/tsc-uchwyt-rolki-op-com-0002) podaje rolkę spoza obudowy.

[TSC TH340R](/produkt/tsc-th340r) ma głowicę 300 dpi i drukuje do 152 mm/s.`,
    faq: [
      { question: 'Gdzie TH240R ma antenę RFID?', answer: 'Wewnątrz, pod materiałem. To antena wielopozycyjna montowana fabrycznie. Zestawy dealerskie dla drukarek bez RFID używają anteny zewnętrznej.' },
      { question: 'Czy TH240R koduje etykiety na metal?', answer: 'Tak, wybrane etykiety do 1,35 mm grubości. Działa to tylko w trybie odrywania.' },
      { question: 'Jak rozszerzyć pamięć TH240R?', answer: 'Kartą microSD do 512 GB w systemie plików FAT32 lub exFAT. Wbudowana pamięć ma 128 MB Flash i 128 MB SDRAM.' },
    ],
    applications: ['Biurkowe kodowanie etykiet UHF z anteną wielopozycyjną', 'Etykiety RFID na metal do 1,35 mm przy biurku'],
    specifications: [
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '108 mm' },
      { name: 'Prędkość nadruku', value: 'do 203 mm/s; kodowanie zależy od wkładki i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; wewnętrzna antena wielopozycyjna pod materiałem; bez HF/NFC w tych PN' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagany dobór wkładki i kalibracja' },
      { name: 'Etykiety na metal', value: 'Wybrane etykiety do 1,35 mm; tylko w trybie odrywania' },
      { name: 'Szerokość materiału', value: '15–120 mm; dobór RFID zależy od wkładki' },
      { name: 'Rolka wewnętrzna', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
      { name: 'Taśma barwiąca', value: 'Do 300 m na gilzie 25,4 mm lub do 110 m na gilzie 12,7 mm; szerokość 40–110 mm' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth zależnie od PN' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Pamięć', value: '128 MB SDRAM i 128 MB Flash; czytnik microSD do 512 GB' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka w pokazanych PN' },
      { name: 'W zestawie', value: 'Zasilacz, przewód zasilający EU, przewód USB, skrócona instrukcja, 2 trzpienie taśmy 25,4 mm, gilza taśmy 25,4 mm, adapter do materiału 120 mm' },
      { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
    ],
  },
  TH340R: {
    seoTitle: 'TSC TH340R — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC TH340R – biurkowa drukarka RFID UHF 300 dpi. Druk 105,7 mm do 152 mm/s, wydruk do 11 430 mm, etykiety na metal do 1,35 mm i Ethernet.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem i małymi kodami 2D. Druk do 105,7 mm z prędkością do 152 mm/s, ekran dotykowy 3,5 cala.',
    description: `TSC TH340R to biurkowa drukarka RFID UHF z głowicą 300 dpi, czyli 12 punktów na milimetr. Drukuje na szerokości 105,7 mm z prędkością do 152 mm/s. Obudowa typu clamshell ma podwójne ścianki z tworzywa.

## Kodowanie RFID w trakcie druku

Funkcja Encode During Print zapisuje wkładkę w czasie nadruku. Koder obsługuje etykiety standardowe, wybrane etykiety na metal i inne konstrukcje znaczników. Etykiety na metal mogą mieć do 1,35 mm grubości przy odrywaniu. Polecenia RFID drukarka przyjmuje w TSPL i ZPL. Automatyczna kalibracja ułatwia rozpoczęcie pracy z nowym materiałem.

## Wydruk do 11 430 mm i kody rMQR

Etykieta może mieć 5–11 430 mm długości. Materiał ma 15–120 mm szerokości, a rolka do 127 mm średnicy. Taśma ma 40–110 mm szerokości i do 300 m długości. Drukarka obsługuje kody 2D, w tym DataMatrix, QR i rMQR.

## TH340R-A001-0002 i TH340R-A001-0102

Pierwsza wersja łączy się przez Ethernet 10/100, RS-232, USB Host i USB 2.0. Druga ma dodatkowo Wi-Fi 802.11a/b/g/n/ac i Bluetooth. Obie mają zegar RTC i zewnętrzny zasilacz 90 W. Język TSPL-EZD jest zgodny z EPL, ZPL, ZPL II i DPL.

Szybsza [TSC TH240R](/produkt/tsc-th240r) z głowicą 203 dpi drukuje do 203 mm/s i do 25 400 mm długości.`,
    faq: [
      { question: 'Jak długą etykietę wydrukuje TH340R?', answer: 'Od 5 do 11 430 mm. Wersja 203 dpi, TH240R, drukuje do 25 400 mm.' },
      { question: 'Czy TH340R obsłuży rolkę większą niż 127 mm?', answer: 'Tak, z zewnętrznym uchwytem rolki, który jest opcją użytkownika. Wewnątrz obudowy mieści się rolka do 127 mm.' },
      { question: 'Jakie zasilanie ma TH340R?', answer: 'Zewnętrzny zasilacz 100–240 V AC z wyjściem 24 V, 3,75 A i mocą 90 W. Zasilacz jest w zestawie.' },
    ],
    applications: ['Etykiety UHF 300 dpi z kodami 2D na stanowisku', 'Kodowanie etykiet RFID w trakcie druku w biurze magazynu'],
    specifications: [
      { name: 'Rozdzielczość', value: '300 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '105,7 mm' },
      { name: 'Prędkość nadruku', value: 'do 152 mm/s; kodowanie zależy od wkładki i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; wewnętrzna antena wielopozycyjna pod materiałem; bez HF/NFC w tych PN' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagany dobór wkładki i kalibracja' },
      { name: 'Etykiety na metal', value: 'Wybrane etykiety do 1,35 mm; tylko w trybie odrywania' },
      { name: 'Szerokość materiału', value: '15–120 mm; dobór RFID zależy od wkładki' },
      { name: 'Rolka wewnętrzna', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
      { name: 'Taśma barwiąca', value: 'Do 300 m na gilzie 25,4 mm lub do 110 m na gilzie 12,7 mm; szerokość 40–110 mm' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth zależnie od PN' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Pamięć', value: '128 MB SDRAM i 128 MB Flash; czytnik microSD do 512 GB' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka w pokazanych PN' },
      { name: 'W zestawie', value: 'Zasilacz, przewód zasilający EU, przewód USB, skrócona instrukcja, 2 trzpienie taśmy 25,4 mm, gilza taśmy 25,4 mm, adapter do materiału 120 mm' },
      { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
    ],
  },
}

export const tscThRfidProducts: Product[] = [
  { model: 'TH240R', dpi: 203, width: '108', speed: '203', headId: 'tsc-th-head-203', other: ids[1] },
  { model: 'TH340R', dpi: 300, width: '105,7', speed: '152', headId: 'tsc-th-head-300', other: ids[0] },
].map(({ model, dpi, width, speed, headId, other }) => {
  const slug = `tsc-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `TSC ${model}`, seoH1: `TSC ${model}`,
    ...thCopy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'retail', 'logistyka'], images: ['/images/products/tsc-th-rfid-main.webp'],
    imageDescriptions: [`TSC ${model} — drukarka biurkowa w obudowie z ekranem dotykowym, widok pod kątem`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: `${dpi} dpi`, szerokoscDruku: `${width} mm`, predkoscDruku: `do ${speed} mm/s; RFID zależy od materiału`, szerokoscEtykiet: '15–120 mm' },
    variants: [
      { partNumber: `${model}-A001-0002`, name: `${dpi} dpi, EU — Ethernet`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet' }, availability: 'unavailable' },
      { partNumber: `${model}-A001-0102`, name: `${dpi} dpi, EU — Wi-Fi i Bluetooth`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet, Wi-Fi + Bluetooth' }, availability: 'unavailable' },
    ],
    comparison: { title: 'Porównanie TH240R i TH340R', models: [
      { name: 'TH240R', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '108 mm', 'Prędkość nadruku': 'do 203 mm/s' } },
      { name: 'TH340R', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 152 mm/s' } },
    ] },
    compatibleAccessories: [], relatedAccessories: [...sharedAccessories, headId],
    downloads: [{ name: 'Karta serii TH/DH (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }, { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'zebra-zd621r', 'brother-td-4650tnwbr', 'tsc-mb241tr'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})
