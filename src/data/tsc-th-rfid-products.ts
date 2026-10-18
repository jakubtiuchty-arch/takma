import type { Product } from './products'

const ids = ['tsc-th240r', 'tsc-th340r']
const support = 'https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers'
const datasheet = '/downloads/tsc-th-dh-karta-produktu-en.pdf'
const manual = '/downloads/tsc-th-dh-instrukcja-en.pdf'
const sharedAccessories = ['tsc-th-wifi', 'tsc-th-bluetooth', 'tsc-th-roll-holder']

export const tscThRfidAccessories: Product[] = [
  {
    id: 'tsc-th-wifi', slug: 'tsc-modul-wifi-sp-th240-0041', pn: 'SP-TH240-0041', image: 'wifi',
    name: 'Moduł Wi-Fi i Bluetooth TSC TH240 EU',
    description: 'TSC SP-TH240-0041 to moduł Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0 w wersji EU/EMEA. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R. Służy do rozbudowy wariantu bez łączności radiowej. Warianty TH240R-A001-0102 i TH340R-A001-0102 mają już Wi-Fi z Bluetooth, więc nie wymagają tego modułu. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno. Nie kupuj jednocześnie osobnego modułu Bluetooth do tego samego gniazda.',
    printers: ids,
  },
  {
    id: 'tsc-th-bluetooth', slug: 'tsc-modul-bluetooth-sp-th240-0044', pn: 'SP-TH240-0044', image: 'bluetooth',
    name: 'Moduł Bluetooth TSC TH240',
    description: 'TSC SP-TH240-0044 to moduł Bluetooth 5.0 do serii TH240 i TH340, w tym TH240R oraz TH340R. Umożliwia rozbudowę wariantu bez łączności radiowej. Nie dodaje Wi-Fi. Jest alternatywą dla modułu Wi-Fi z Bluetooth SP-TH240-0041. Warianty z fabrycznym Wi-Fi i Bluetooth nie wymagają tej części. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.',
    printers: ids,
  },
  {
    id: 'tsc-th-roll-holder', slug: 'tsc-uchwyt-rolki-op-com-0002', pn: 'OP-COM-0002', image: 'holder',
    name: 'Zewnętrzny uchwyt rolki TSC — gilza 3 cale',
    description: 'TSC OP-COM-0002 to zewnętrzny uchwyt rolki etykiet ze szpindlem do gilzy 76,2 mm, czyli 3 cale. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R. Ustawia się go za drukarką, a materiał podaje przez wejście zewnętrzne. Przed użyciem etykiet RFID sprawdź prowadzenie podkładu i kalibrację wkładki. Uchwyt nie jest napędzanym nawijakiem. Drukarka i rolka etykiet są sprzedawane osobno.',
    printers: ids,
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
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.printers.map(id => id === ids[0] ? 'TH240R' : 'TH340R').join(', ') }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: a.printers,
  downloads: [{ name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }], createdAt: '2026-10-16',
}))

type ThCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const thCopy: Record<string, ThCopy> = {
  TH240R: {
    seoTitle: 'TSC TH240R — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC TH240R: biurkowa drukarka i koder UHF RFID 203 dpi. Druk do 108 mm z prędkością 203 mm/s, ekran dotykowy, wersje z Ethernetem lub Wi-Fi.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 203 dpi do etykiet logistycznych i oznaczeń towarów. Druk do 108 mm z prędkością do 203 mm/s, ekran dotykowy 3,5 cala, Ethernet.',
    description: `TSC TH240R to biurkowa drukarka z fabrycznym koderem UHF RFID i głowicą 203 dpi. Drukuje etykietę i w tym samym przebiegu zapisuje identyfikator EPC w jej wkładce. Pasuje na stanowisko przyjęć towaru, pakowania i na zaplecze sklepu.

## Kiedy wystarczy 203 dpi

Głowica 203 dpi ma 8 punktów na milimetr, więc jeden punkt ma ok. 0,125 mm. Taka rozdzielczość wystarcza do etykiet wysyłkowych, oznaczeń kartonów i pojemników oraz kodów EAN-13 i GS1-128 w typowej wielkości. TH240R drukuje z prędkością do 203 mm/s na szerokości do 108 mm. Jeden wydruk może mieć do 25 400 mm długości.

Na etykiecie z bardzo drobnym tekstem albo z małym kodem DataMatrix lepiej sprawdzi się [TSC TH340R](/produkt/tsc-th340r) z głowicą 300 dpi. Obie drukarki mają ten sam koder RFID, więc zasięg odczytu etykiety od rozdzielczości nie zależy.

## Zapis danych w etykiecie UHF

Koder obsługuje pasywne etykiety RAIN UHF w standardzie GS1 EPC Gen2 v2 i ISO 18000-63. Wkładki kolejnych etykiet mogą być oddalone o 15,9 mm. Po założeniu nowej rolki uruchom kalibrację podawania i RFID. Drukarka sprawdza każdy zapis i według ustawień oznacza etykietę z błędem kodowania.

Etykiety na metal o grubości do 1,35 mm obsługuje konfiguracja z anteną wewnętrzną i ręcznym odrywaniem. Szablon zadania musi zawierać polecenia RFID w TSPL lub ZPL. Bez nich drukarka wykona sam nadruk.

## Dwie wersje do wyboru

- TH240R-A001-0002 — USB, USB Host, RS-232 i Ethernet 10/100.
- TH240R-A001-0102 — te same porty oraz Wi-Fi 802.11a/b/g/n/ac i Bluetooth.

Obie wersje mają kolorowy ekran dotykowy 3,5 cala, zegar RTC, sygnalizator dźwiękowy i ręczne odrywanie etykiet. W pudełku są zasilacz, przewód zasilający EU, przewód USB i skrócona instrukcja.

## Rolka, taśma i rozbudowa

Wewnątrz mieści się rolka o średnicy do 127 mm na gilzie 25,4–38,1 mm. Szerokość materiału wynosi 15–120 mm. Taśma barwiąca może mieć 300 m na gilzie 25,4 mm albo 110 m na gilzie 12,7 mm. Większą rolkę podawaj z [uchwytu zewnętrznego OP-COM-0002](/produkt/tsc-uchwyt-rolki-op-com-0002) na gilzie 76,2 mm.

Wersję z Ethernetem rozbudujesz o Wi-Fi i Bluetooth [modułem SP-TH240-0041](/produkt/tsc-modul-wifi-sp-th240-0041) albo o sam Bluetooth [modułem SP-TH240-0044](/produkt/tsc-modul-bluetooth-sp-th240-0044). Wybierz jeden z nich.

Rolki RFID do TH240R są w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam szerokość etykiety i gilzę rolki. Dobierzemy materiał do TH240R i sprawdzimy położenie wkładki względem anteny.

## Gwarancja i głowica

Drukarka ma 3 lata gwarancji. Głowica jest objęta ochroną przez 12 miesięcy lub 25 km druku, a wałek przez 12 miesięcy lub 50 km. Obowiązuje limit osiągnięty wcześniej. Zamienna głowica 203 dpi ma numer PH-TH240-0001.

Do większej liczby etykiet dziennie porównaj przemysłową [TSC MB241TR](/produkt/tsc-mb241tr). W klasie biurkowej sprawdź też [Zebra ZD621R](/produkt/zebra-zd621r).`,
    faq: [
      { question: 'Czy TH240R nada się do etykiet wysyłkowych z kodem GS1-128?', answer: 'Tak. Rozdzielczość 203 dpi jest typowa dla etykiet logistycznych i kodów kreskowych na kartonach. TH240R drukuje je na szerokości do 108 mm i zapisuje identyfikator EPC we wkładce UHF.' },
      { question: 'Która wersja TH240R ma Wi-Fi?', answer: 'TH240R-A001-0102. Ma Wi-Fi 802.11a/b/g/n/ac, Bluetooth i porty przewodowe. TH240R-A001-0002 łączy się przez USB, RS-232 i Ethernet.' },
      { question: 'Jak długą etykietę wydrukuje TH240R?', answer: 'Do 25 400 mm na jednym wydruku. Wersja 300 dpi, TH340R, drukuje do 11 430 mm.' },
      { question: 'Czy do TH240R trzeba dokupić moduł RFID?', answer: 'Nie. Koder UHF jest fabrycznie zamontowany w obu wersjach. Potrzebujesz etykiet z wkładką UHF i szablonu z poleceniami kodowania.' },
      { question: 'Czy TH240R koduje etykiety na metal?', answer: 'Tak, etykiety o grubości do 1,35 mm, przy antenie wewnętrznej i ręcznym odrywaniu. Podaj nam typ etykiety i powierzchnię przedmiotu. Dobierzemy materiał i sprawdzimy kodowanie.' },
      { question: 'Jaki numer ma głowica do TH240R?', answer: 'Głowica 203 dpi PH-TH240-0001. Głowica 300 dpi PH-TH240-0002 pasuje do TH340R. Przy zamówieniu części podaj numer seryjny drukarki.' },
    ],
  },
  TH340R: {
    seoTitle: 'TSC TH340R — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC TH340R: biurkowa drukarka i koder UHF RFID 300 dpi do drobnego tekstu i małych kodów 2D. Druk do 105,7 mm, Ethernet, opcja z Wi-Fi i Bluetooth.',
    shortDescription: 'Biurkowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem i małymi kodami 2D. Druk do 105,7 mm z prędkością do 152 mm/s, ekran dotykowy 3,5 cala.',
    description: `TSC TH340R łączy głowicę 300 dpi z fabrycznym koderem UHF RFID. Wybierz ją do etykiet, na których obok identyfikatora EPC musi zmieścić się drobny tekst: skład, numer partii, data ważności albo mały kod QR.

## Co daje głowica 300 dpi

Rozdzielczość 300 dpi oznacza 11,8 punktu na milimetr. Punkt ma ok. 0,085 mm, czyli jest o jedną trzecią mniejszy niż przy 203 dpi. Krawędzie znaków i modułów kodu są wyraźniejsze. Ma to znaczenie przy metkach odzieżowych, etykietach kosmetyków, oznaczeniach podzespołów elektronicznych i probówek.

Szerokość nadruku wynosi 105,7 mm, a prędkość do 152 mm/s. Jeden wydruk może mieć do 11 430 mm długości. Do etykiet kartonowych z dużym kodem kreskowym wystarczy [TSC TH240R](/produkt/tsc-th240r): drukuje do 203 mm/s i ma ten sam koder.

## Jak przebiega kodowanie

TH340R zapisuje dane w pasywnych etykietach RAIN UHF (GS1 EPC Gen2 v2, ISO 18000-63). Najmniejszy rozstaw wkładek to 15,9 mm. Nie umieszczaj małego kodu 2D bezpośrednio nad układem wkładki. Nierówna powierzchnia nad układem pogarsza jakość nadruku. Po każdej zmianie rolki wykonaj kalibrację RFID.

Polecenia kodowania wysyłaj w TSPL lub ZPL. Drukarka weryfikuje zapis i oznacza etykietę, której nie udało się zakodować. Etykiety na metal do 1,35 mm wymagają anteny wewnętrznej i trybu ręcznego odrywania.

## Konfiguracje TH340R

TH340R-A001-0002 pracuje w sieci przewodowej: ma USB, USB Host, RS-232 i Ethernet 10/100. TH340R-A001-0102 ma dodatkowo Wi-Fi 802.11a/b/g/n/ac i Bluetooth. Każda wersja ma ekran dotykowy 3,5 cala, zegar RTC i ręczne odrywanie etykiet. Zasilacz, przewód zasilający EU i przewód USB są w zestawie.

Na stanowisko bez sieci przewodowej możesz też dokupić do wersji -0002 [moduł Wi-Fi z Bluetooth SP-TH240-0041](/produkt/tsc-modul-wifi-sp-th240-0041).

## Materiały do drobnego nadruku

Rolka wewnętrzna ma do 127 mm średnicy, materiał 15–120 mm szerokości. Przy druku termotransferowym drobny tekst wymaga gładkiej powierzchni etykiety i taśmy dobranej do materiału. Taśma ma szerokość 40–110 mm i długość do 300 m na gilzie 25,4 mm. Etykieta termiczna nie potrzebuje taśmy, ale nadruk na niej gorzej znosi światło i ciepło.

Ofertę materiałów znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem prześlij nam projekt etykiety. Dobierzemy rolkę do TH340R tak, aby wkładka nie leżała pod drobnym nadrukiem.

## Serwis

Gwarancja na drukarkę wynosi 3 lata. Głowica ma ochronę przez 12 miesięcy lub 25 km druku, a wałek przez 12 miesięcy lub 50 km. Decyduje wcześniejszy limit. Zamienna głowica 300 dpi ma numer PH-TH240-0002.

W tej samej klasie porównaj [SATO CT4-LX RFID](/produkt/sato-ct4-lx-rfid) z głowicą 305 dpi.`,
    faq: [
      { question: 'Kiedy wybrać TH340R zamiast TH240R?', answer: 'Gdy etykieta ma drobny tekst, mały kod 2D albo logo z cienkimi liniami. TH340R drukuje 11,8 punktu na milimetr, a TH240R 8 punktów. TH240R jest za to szybsza: 203 mm/s zamiast 152 mm/s.' },
      { question: 'Czy 300 dpi zwiększa zasięg odczytu RFID?', answer: 'Nie. Zasięg zależy od wkładki, anteny czytnika i powierzchni przedmiotu. Rozdzielczość wpływa tylko na jakość nadruku.' },
      { question: 'Czy TH340R ma obcinak albo odklejak?', answer: 'Nie. Obie wersje mają ręczne odrywanie etykiet. Jeśli potrzebujesz innego sposobu odbioru, opisz nam etykietę. Dobierzemy konfigurację, w której nóż nie przetnie wkładki.' },
      { question: 'Czy Wi-Fi można dodać później?', answer: 'Tak. Do TH340R-A001-0002 pasuje moduł Wi-Fi z Bluetooth SP-TH240-0041 albo moduł samego Bluetooth SP-TH240-0044. Montaż zleć serwisowi.' },
      { question: 'Jakie taśmy pasują do TH340R?', answer: 'Taśmy o szerokości 40–110 mm, do 300 m na gilzie 25,4 mm lub do 110 m na gilzie 12,7 mm. Do drobnego tekstu wybierz taśmę dobraną do powierzchni etykiety.' },
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
    specifications: [
      { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: `${width} mm` }, { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od wkładki i danych` },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; bez HF/NFC w tych PN' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagany dobór wkładki i kalibracja' },
      { name: 'Etykiety na metal', value: 'Wybrane materiały do 1,35 mm; antena wewnętrzna i ręczne odrywanie' },
      { name: 'Szerokość materiału', value: '15–120 mm; dobór RFID zależy od wkładki' }, { name: 'Rolka wewnętrzna', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
      { name: 'Taśma barwiąca', value: 'Do 300 m na gilzie 25,4 mm lub do 110 m na gilzie 12,7 mm; szerokość 40–110 mm' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth zależnie od PN' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' }, { name: 'Pamięć', value: '128 MB RAM i 128 MB Flash' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka w pokazanych PN' },
      { name: 'W zestawie', value: 'Zasilacz, przewód zasilający EU, przewód USB i skrócona instrukcja' },
      { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
    ],
    variants: [
      { partNumber: `${model}-A001-0002`, name: `${dpi} dpi, EU — Ethernet`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet' }, availability: 'unavailable' },
      { partNumber: `${model}-A001-0102`, name: `${dpi} dpi, EU — Wi-Fi i Bluetooth`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet, Wi-Fi + Bluetooth' }, availability: 'unavailable' },
    ],
    comparison: { title: 'Porównanie TH240R i TH340R', models: [
      { name: 'TH240R', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '108 mm', 'Prędkość nadruku': 'do 203 mm/s' } },
      { name: 'TH340R', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 152 mm/s' } },
    ] },
    compatibleAccessories: [], relatedAccessories: [...sharedAccessories, headId],
    applications: ['Druk i kodowanie etykiet UHF na towary i opakowania', 'Etykietowanie na stanowisku magazynowym i w sklepie', 'Przygotowanie oznaczeń wyposażenia'],
    downloads: [{ name: 'Karta serii TH/DH (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }, { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'zebra-zd621r', 'brother-td-4650tnwbr', 'tsc-mb241tr'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})
