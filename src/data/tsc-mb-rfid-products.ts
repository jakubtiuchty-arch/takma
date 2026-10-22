import type { Product } from './products'

const ids = ['tsc-mb241tr', 'tsc-mb341tr']
const manual = '/downloads/tsc-mb241-instrukcja-en.pdf'
const datasheet = '/downloads/tsc-mb241-karta-produktu-en.pdf'

type MbCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications' | 'specifications'>

const mbCopy: Record<string, MbCopy> = {
  MB241TR: {
    seoTitle: 'TSC MB241TR — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC MB241TR – przemysłowa drukarka RFID UHF 203 dpi. Druk 107 mm do 304,8 mm/s, etykiety na metal do 1,65 mm, rolka 203,2 mm, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi. Druk do 107 mm z prędkością do 304,8 mm/s, rolka do 203,2 mm, taśma 450 m i ekran dotykowy 3,5 cala.',
    description: `TSC MB241TR to przemysłowa drukarka RFID UHF z głowicą 203 dpi i kolorowym ekranem dotykowym 3,5 cala. Koduje etykiety RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63 podczas druku. Składane drzwi komory materiału zmniejszają potrzebną przestrzeń roboczą o 24%.

## Antena nad materiałem i przekreślanie całej etykiety

Antena zewnętrzna ma stałe położenie nad materiałem. Wkładki mogą występować co 15,9 mm. Drukarka obsługuje etykiety standardowe, inne konstrukcje znaczników oraz etykiety na metal do 1,65 mm grubości. Etykietę z błędem kodowania przekreśla w całości. Ta funkcja działa w drukarkach z RFID z fabryki, dla etykiet do 6 cali.

## Odrywanie, a obcinak z zestawu RFID cutter upgrade kit

Konfiguracja MB241TR-A001-0202 ma koder RFID i ręczne odrywanie etykiet. Obcinak do pracy z RFID dealer montuje jako zestaw RFID cutter upgrade kit. Zwykła gilotyna z serii MB nie zastępuje tego zestawu. Fabrycznie seria jest też dostępna w wersji RFID z obcinakiem.

## Rolka 203,2 mm i taśma 450 m

Rolka może mieć do 203,2 mm średnicy na gilzie 25,4–76,2 mm. Taśma ma do 450 m długości i 40–110 mm szerokości, z warstwą barwiącą na zewnątrz lub do wewnątrz. Drukarka ma USB 2.0, USB Host, RS-232, Ethernet 10/100 i zegar RTC. [Moduł Wi-Fi z Bluetooth 5.0](/produkt/tsc-modul-wifi-bluetooth) jest opcją dealerską i wyklucza port GPIO.

[TSC MB341TR](/produkt/tsc-mb341tr) ma głowicę 300 dpi i drukuje do 228,6 mm/s.`,
    faq: [
      { question: 'Czy do MB241TR można zamontować obcinak?', answer: 'Tak, jako zestaw RFID cutter upgrade kit montowany u dealera. Zwykła gilotyna z serii MB do tego nie służy. Fabrycznie dostępna jest też wersja RFID z obcinakiem.' },
      { question: 'Jak gruba może być etykieta RFID na metal w MB241TR?', answer: 'Do 1,65 mm. Zwykły materiał ma 0,06–0,28 mm grubości i 20–120 mm szerokości.' },
      { question: 'Co MB241TR robi z etykietą, której nie zakodowała?', answer: 'Przekreśla całą etykietę. Funkcja działa w drukarkach z RFID z fabryki, dla etykiet do 6 cali. Licznik RFID rejestruje etykiety dobre i błędne.' },
    ],
    applications: ['Kodowanie etykiet RFID na metal do 1,65 mm', 'Etykiety UHF 203 dpi na stanowisku pakowania'],
    specifications: [
      { name: 'Part Number', value: 'MB241TR-A001-0202' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '107 mm' },
      { name: 'Prędkość nadruku', value: 'do 304,8 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena zewnętrzna o stałym położeniu nad materiałem' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; obcinak do RFID jako zestaw dealerski RFID cutter upgrade kit' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm' },
      { name: 'Grubość materiału', value: '0,06–0,28 mm; etykiety RFID na metal do 1,65 mm' },
      { name: 'Szerokość materiału', value: '20–120 mm; wymagana zgodność wkładki RFID i kalibracja' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi z Bluetooth 5.0 lub Bluetooth 5.0 jako opcje dealerskie (moduł bezprzewodowy albo GPIO)' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Zegar RTC', value: 'Tak' },
      { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
      { name: 'Polecenia', value: 'TSPL-EZD; kodowanie RFID przez TSPL / ZPL' },
      { name: 'Temperatura pracy', value: '0–40°C' },
      { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 25 km lub 12 miesięcy; wałek 50 km lub 12 miesięcy — decyduje wcześniejszy limit' },
    ],
  },
  MB341TR: {
    seoTitle: 'TSC MB341TR — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC MB341TR – przemysłowa drukarka RFID UHF 300 dpi. Druk 105,7 mm do 228,6 mm/s, wydruk do 11 430 mm, etykiety na metal do 1,65 mm, ekran dotykowy.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem. Druk do 105,7 mm z prędkością do 228,6 mm/s, ekran dotykowy.',
    description: `TSC MB341TR to przemysłowa drukarka RFID UHF z głowicą 300 dpi, czyli 12 punktów na milimetr. Drukuje na szerokości 105,7 mm z prędkością do 228,6 mm/s. Funkcja Encode During Print koduje wkładkę RAIN UHF w trakcie nadruku.

## 300 dpi przy wydruku do 11 430 mm

Pojedyncza etykieta może mieć 5–11 430 mm długości. Materiał ma 20–120 mm szerokości i 0,06–0,28 mm grubości. Docisk głowicy i linię grzania reguluje się w kilku punktach, co pomaga utrzymać równy nadruk. Mechanizm druku jest w całości metalowy i osadzony na metalowej ramie.

## Rozstaw 15,9 mm i licznik etykiet RFID

Wkładki RFID mogą leżeć w odstępach od 15,9 mm. Etykiety RFID na metal mogą mieć do 1,65 mm grubości. Licznik RFID zapisuje liczbę etykiet poprawnych i błędnych. Polecenia kodowania drukarka przyjmuje w TSPL i ZPL. Szablony obsługuje też język TSPL-EZD z emulacją EPL, ZPL, ZPL II i DPL.

## Konfiguracja MB341TR-A001-0202

Ta wersja ma koder RFID i ręczne odrywanie. Zestaw RFID cutter upgrade kit dodaje obcinak do pracy z RFID i montuje go dealer. Standardowo ma porty RS-232, Ethernet 10/100, USB Host i USB 2.0. Zasilacz 90 W jest wbudowany w obudowę.

Szybsza [TSC MB241TR](/produkt/tsc-mb241tr) z głowicą 203 dpi drukuje do 304,8 mm/s.`,
    faq: [
      { question: 'Jak długą etykietę wydrukuje TSC MB341TR?', answer: 'Od 5 do 11 430 mm. Wersja 203 dpi, MB241TR, drukuje etykiety do 25 400 mm.' },
      { question: 'Czy MB341TR można rozbudować o Wi-Fi?', answer: 'Tak. Dealer montuje moduł Wi-Fi 802.11a/b/g/n/ac z Bluetooth 5.0. Moduł bezprzewodowy i port GPIO wykluczają się nawzajem.' },
      { question: 'W jakich językach MB341TR przyjmuje polecenia RFID?', answer: 'W TSPL i ZPL. Język drukarki TSPL-EZD emuluje też EPL, ZPL II i DPL.' },
    ],
    applications: ['Etykiety UHF 300 dpi do znakowania wyrobów', 'Kodowanie etykiet RFID dla produkcji w toku'],
    specifications: [
      { name: 'Part Number', value: 'MB341TR-A001-0202' },
      { name: 'Rozdzielczość', value: '300 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '105,7 mm' },
      { name: 'Prędkość nadruku', value: 'do 228,6 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena zewnętrzna o stałym położeniu nad materiałem' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; obcinak do RFID jako zestaw dealerski RFID cutter upgrade kit' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm' },
      { name: 'Grubość materiału', value: '0,06–0,28 mm; etykiety RFID na metal do 1,65 mm' },
      { name: 'Szerokość materiału', value: '20–120 mm; wymagana zgodność wkładki RFID i kalibracja' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi z Bluetooth 5.0 lub Bluetooth 5.0 jako opcje dealerskie (moduł bezprzewodowy albo GPIO)' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Zegar RTC', value: 'Tak' },
      { name: 'Pamięć', value: '256 MB SDRAM i 256 MB Flash' },
      { name: 'Polecenia', value: 'TSPL-EZD; kodowanie RFID przez TSPL / ZPL' },
      { name: 'Temperatura pracy', value: '0–40°C' },
      { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 25 km lub 12 miesięcy; wałek 50 km lub 12 miesięcy — decyduje wcześniejszy limit' },
    ],
  },
}

export const tscMbRfidProducts: Product[] = [
  { model: 'MB241TR', pn: 'MB241TR-A001-0202', dpi: 203, width: '107', speed: '304,8', head: 'tsc-printhead-mb241t-203', ordinary: 'tsc-mb241t', other: ids[1] },
  { model: 'MB341TR', pn: 'MB341TR-A001-0202', dpi: 300, width: '105,7', speed: '228,6', head: 'tsc-printhead-mb341t-300', ordinary: 'tsc-mb341t', other: ids[0] },
].map(({ model, pn, dpi, width, speed, head, ordinary, other }) => {
  const slug = `tsc-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `TSC ${model}`, seoH1: `TSC ${model}`,
    ...mbCopy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/tsc-mb-rfid-framed.webp'], imageDescriptions: [`TSC ${model} — drukarka RFID z ekranem dotykowym i przednią osłoną anteny`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, ręczne odrywanie`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie TSC MB241TR i MB341TR', models: [
      { name: 'MB241TR', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '107 mm', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'MB341TR', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 228,6 mm/s' } },
    ] },
    compatibleAccessories: [], relatedAccessories: ['tsc-wifi-bt-module', head],
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
