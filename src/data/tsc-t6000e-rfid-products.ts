import type { Product } from './products'

const ids = ['tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'tsc-printronix-t6604e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-4-inch-enterprise-industrial-rfid-printers'

type T6Copy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const t6Copy: Record<string, T6Copy> = {
  T6204e: {
    seoTitle: 'Printronix T6204e RFID — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC Printronix T6204e RFID: przemysłowa drukarka i koder UHF 203 dpi. Druk 104 mm z prędkością 355,6 mm/s, taśma 450 m, Ethernet i RS-232.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do dużych serii etykiet logistycznych. Druk do 104 mm z prędkością do 355,6 mm/s, taśma barwiąca do 450 m.',
    description: `TSC Printronix T6204e RFID to najszybsza 4-calowa drukarka RFID w serii T6000e. Głowica 203 dpi drukuje do 355,6 mm/s, a koder UHF zapisuje identyfikator EPC w każdej etykiecie. Wybierz ją do etykiet wysyłkowych, kartonowych i paletowych drukowanych w dużych seriach.

## Wydajność przy etykietach logistycznych

Rozdzielczość 203 dpi daje 8 punktów na milimetr. Wystarcza do kodów GS1-128, SSCC i adresów na etykietach o szerokości do 104 mm. Taśma barwiąca o długości 450 m ogranicza liczbę przestojów na wymianę materiału.

PN T6E2R4-2100-02 ma koder UHF RFID, porty USB, RS-232 i Ethernet 10/100 oraz przewód zasilający EU. Etykiety odbierasz przez odrywanie.

## Kodowanie i kontrola zapisu

Koder obsługuje pasywne wkładki RAIN UHF (EPC Gen2 v2, ISO 18000-63) w rozstawie od 15,9 mm. Jeśli zapis się nie powiedzie, drukarka przekreśla etykietę i drukuje kolejną. Liczniki pokazują liczbę dobrych i odrzuconych etykiet, więc łatwo ocenić straty materiału w zmianie.

Polecenia RFID przyjmuje w językach PGL, ZGL, STGL i MGL. ZGL emuluje język ZPL i ułatwia przeniesienie szablonów z drukarek Zebra. Przed uruchomieniem produkcji wydrukuj serię próbną na docelowym materiale.

## Materiał, taśma i opcje

Szerokość materiału wynosi 25,4–114,3 mm, tak samo jak szerokość taśmy. Gilza taśmy ma 25,4 mm. Zgodne etykiety RFID na metal wymagają dobrania wkładki i ustawień anteny do konkretnego przedmiotu.

Do pracy w Wi-Fi dokup [moduł Printronix P220015-901](/produkt/printronix-wifi-p220015-901). W modelach 4-calowych dostępny jest też weryfikator kodów ODV-2D. To osobna opcja, której ten PN nie zawiera.

Do drobniejszego nadruku wybierz [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid) z głowicą 300 dpi. Do etykiet szerszych niż 104 mm sprawdź [T6206e RFID](/produkt/tsc-printronix-t6206e-rfid). Na mniejsze stanowisko wystarczy [TSC MB241TR](/produkt/tsc-mb241tr).`,
    faq: [
      { question: 'Dla kogo jest T6204e RFID?', answer: 'Dla magazynów i działów wysyłki, które drukują dużo etykiet logistycznych z kodem SSCC lub GS1-128. Model drukuje do 355,6 mm/s, najszybciej w 4-calowej serii T6000e.' },
      { question: 'Czy T6204e RFID oznacza etykiety z błędem kodowania?', answer: 'Tak. Etykietę, której nie udało się zakodować, drukarka przekreśla i drukuje ponownie. Liczniki zapisują liczbę poprawnych i odrzuconych etykiet.' },
      { question: 'Czy szablony z drukarki Zebra zadziałają na T6204e RFID?', answer: 'Drukarka ma emulację ZGL, zgodną z językiem ZPL. Przed wdrożeniem prześlij nam szablon z poleceniami RFID. Sprawdzimy, czy wymaga zmian.' },
      { question: 'Jaką głowicę zamówić do T6204e RFID?', answer: 'Głowica RFID 203 dpi P220357-001 do wersji V2/V3. Podaj numer seryjny drukarki, a sprawdzimy wersję sprzętową.' },
    ],
  },
  T6304e: {
    seoTitle: 'Printronix T6304e RFID — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC Printronix T6304e RFID: przemysłowa drukarka i koder UHF 300 dpi do etykiet produktowych i części. Druk 104 mm z prędkością 304,8 mm/s.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych i oznaczeń części. Druk do 104 mm, prędkość do 304,8 mm/s, taśma do 450 m.',
    description: `TSC Printronix T6304e RFID drukuje z rozdzielczością 300 dpi i koduje wkładki UHF. Wybierz ją, gdy na 4-calowej etykiecie obok identyfikatora EPC jest dużo tekstu, mały kod DataMatrix albo numer seryjny części.

## 300 dpi przy prędkości przemysłowej

Głowica ma 11,8 punktu na milimetr. Kod 2D o module 0,25 mm drukuje się z 3 punktów, a nie z 2, jak przy 203 dpi. Krawędzie są ostrzejsze, a skaner łatwiej odczytuje mały kod. Mimo wyższej rozdzielczości drukarka osiąga do 304,8 mm/s.

Ten model sprawdza się przy etykietach identyfikacyjnych części w produkcji, etykietach produktowych z opisem w kilku językach i przy oznaczeniach środków trwałych. Szerokość nadruku wynosi 104 mm.

## Etykiety UHF w obiegu produkcyjnym

T6304e RFID koduje pasywne etykiety RAIN UHF zgodne z EPC Gen2 v2 i ISO 18000-63. Odstęp kolejnych wkładek może wynosić 15,9 mm. Do oznaczania metalowych części dobierz etykietę na metal razem z ustawieniem anteny. Prześlij nam rysunek lub zdjęcie przedmiotu. Wskażemy materiał i miejsce naklejenia do testu.

Etykieta z nieudanym zapisem zostaje przekreślona i wydrukowana ponownie. Kodowanie obsługują języki PGL, ZGL, STGL i MGL.

## Wyposażenie T6E3R4-2100-02

Ten PN ma koder UHF RFID, USB, RS-232, Ethernet 10/100, kolorowy wyświetlacz 3,5 cala z przyciskami oraz przewód zasilający EU. Etykiety odbiera się przez odrywanie. Wi-Fi dodaje [moduł P220015-901](/produkt/printronix-wifi-p220015-901). Weryfikator ODV-2D do kontroli jakości kodów jest osobną opcją modeli 4-calowych.

Materiał może mieć 25,4–114,3 mm szerokości. Taśma ma do 450 m długości na gilzie 25,4 mm. Przy drobnym nadruku wybierz taśmę żywiczną lub woskowo-żywiczną dobraną do powierzchni etykiety.

Do szybkiego druku etykiet kartonowych wybierz [T6204e RFID](/produkt/tsc-printronix-t6204e-rfid). Do bardzo małych etykiet sprawdź [T6604e RFID](/produkt/tsc-printronix-t6604e-rfid) z głowicą 600 dpi.`,
    faq: [
      { question: 'Czym T6304e RFID różni się od T6204e RFID?', answer: 'Rozdzielczością i prędkością. T6304e RFID ma 300 dpi i drukuje do 304,8 mm/s. T6204e RFID ma 203 dpi i drukuje do 355,6 mm/s. Koder RFID i szerokość druku 104 mm są takie same.' },
      { question: 'Czy T6304e RFID nadaje się do oznaczania metalowych części?', answer: 'Tak, z etykietami RFID na metal. Przed zamówieniem przekaż nam zdjęcie części i miejsce naklejenia. Dobierzemy etykietę i sprawdzimy zapis oraz odczyt.' },
      { question: 'Czy weryfikator ODV-2D jest w zestawie?', answer: 'Nie. ODV-2D to osobna opcja modeli 4-calowych. PN T6E3R4-2100-02 ma koder RFID, Ethernet i ręczne odrywanie.' },
      { question: 'Jaka głowica pasuje do T6304e RFID?', answer: 'Głowica RFID 300 dpi P220358-001 do wersji V2/V3. Przy zamówieniu podaj numer seryjny drukarki.' },
    ],
  },
  T6604e: {
    seoTitle: 'Printronix T6604e RFID — drukarka RFID UHF 600 dpi',
    seoDescription: 'TSC Printronix T6604e RFID: przemysłowa drukarka i koder UHF 600 dpi do małych etykiet, mikrokodów 2D i drobnego tekstu. Druk 104 mm, 152,4 mm/s.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 600 dpi do bardzo małych etykiet i mikrokodów 2D. Druk do 104 mm z prędkością do 152,4 mm/s.',
    description: `TSC Printronix T6604e RFID ma głowicę 600 dpi, najdokładniejszą w serii T6000e. Służy do małych etykiet RFID, na których trzeba zmieścić czytelny tekst i kod 2D o bardzo małym module.

## Kiedy potrzebujesz 600 dpi

Głowica drukuje 23,6 punktu na milimetr. Jeden punkt ma ok. 0,042 mm. Taka rozdzielczość pozwala wydrukować mikrokod DataMatrix i czytelny tekst o wysokości ok. 1 mm. Stosuje się ją przy oznaczaniu elektroniki, wyrobów medycznych, biżuterii i próbek laboratoryjnych.

Prędkość wynosi do 152,4 mm/s, czyli mniej niż w wersjach 203 i 300 dpi. Szerokość nadruku pozostaje 104 mm. Jeśli etykieta ma zwykły kod kreskowy i kilka linii tekstu, szybsza będzie [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid).

## Mała etykieta z wkładką UHF

Mała etykieta zostawia mało miejsca na wkładkę i nadruk. Sprawdź, czy wkładka mieści się w obrysie etykiety. Mikrokodu nie drukuj bezpośrednio nad układem wkładki. Minimalny rozstaw wkładek wynosi 15,9 mm.

Koder obsługuje wkładki RAIN UHF zgodne z EPC Gen2 v2 i ISO 18000-63. Każdy zapis jest sprawdzany. Nieudana etykieta zostaje przekreślona, a drukarka drukuje następną. Przed serią przekaż nam projekt etykiety. Dobierzemy materiał i taśmę, a następnie wykonamy wydruk próbny.

## Materiały do druku 600 dpi

Przy tej rozdzielczości jakość nadruku zależy od gładkości powierzchni i rodzaju taśmy. Do etykiet foliowych zwykle wybiera się taśmę żywiczną. Drukarka przyjmuje taśmę do 450 m na gilzie 25,4 mm i materiał o szerokości 25,4–114,3 mm.

PN T6E6R4-2100-02 ma koder UHF, porty USB, RS-232 i Ethernet 10/100, wyświetlacz 3,5 cala oraz przewód zasilający EU. Etykiety odbiera się przez odrywanie. Wi-Fi dodaje osobny [moduł P220015-901](/produkt/printronix-wifi-p220015-901). Weryfikator ODV-2D jest dostępny jako osobna opcja.`,
    faq: [
      { question: 'Do jakich etykiet wybrać T6604e RFID?', answer: 'Do małych etykiet z mikrokodem 2D i drobnym tekstem, np. na elektronice, wyrobach medycznych i biżuterii. Głowica 600 dpi drukuje punkty o wielkości ok. 0,042 mm.' },
      { question: 'Czy T6604e RFID drukuje wolniej niż T6304e RFID?', answer: 'Tak. T6604e RFID drukuje do 152,4 mm/s, a T6304e RFID do 304,8 mm/s. Wyższą rozdzielczość wybierz tylko wtedy, gdy wymaga jej treść etykiety.' },
      { question: 'Jaka najmniejsza etykieta RFID zmieści się w T6604e RFID?', answer: 'Ogranicza ją wkładka UHF i rozstaw od 15,9 mm. Prześlij nam wymiary etykiety i projekt nadruku. Dobierzemy wkładkę, która zmieści się w obrysie.' },
      { question: 'Który numer głowicy pasuje do T6604e RFID?', answer: 'Głowica RFID 600 dpi P220359-001 do wersji V2/V3. Podaj numer seryjny drukarki, a potwierdzimy wersję sprzętową.' },
    ],
  },
}

export const tscT6000eRfidProducts: Product[] = [
  { model: 'T6204e', pn: 'T6E2R4-2100-02', dpi: 203, speed: '355,6' },
  { model: 'T6304e', pn: 'T6E3R4-2100-02', dpi: 300, speed: '304,8' },
  { model: 'T6604e', pn: 'T6E6R4-2100-02', dpi: 600, speed: '152,4' },
].map(({ model, pn, dpi, speed }) => {
  const slug = `tsc-printronix-${model.toLowerCase()}-rfid`
  return {
    id: slug, slug, name: `TSC Printronix ${model} RFID`, seoH1: `TSC Printronix ${model} RFID`,
    ...t6Copy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/printronix-t6000e-rfid.png'], imageDescriptions: [`Printronix ${model} RFID — przemysłowa drukarka 4 cale z wyświetlaczem i wysuniętą etykietą`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '25,4–114,3 mm' },
      { name: 'Materiały RFID', value: 'Zgodne etykiety standardowe i na metal; dobór wkładki i grubości do konfiguracji' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25,4–114,3 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Brak w pokazanym PN; opcja odrębna od RFID' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6204e, T6304e i T6604e RFID', models: [
      { name: 'T6204e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 355,6 mm/s' } },
      { name: 'T6304e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'T6604e RFID', slug: ids[2], highlight: dpi === 600, specs: { 'Rozdzielczość': '600 dpi', 'Prędkość nadruku': 'do 152,4 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Oznaczanie pojemników i wyposażenia', 'Przygotowanie oznaczeń do procesów produkcyjnych i logistycznych'],
    compatibleAccessories: [], relatedAccessories: ['printronix-t6000e-wifi', `printronix-t6000e-head-${dpi}-rfid`],
    downloads: [{ name: 'Karta katalogowa T6000e i RFID (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcje, sterowniki i wsparcie TSC Printronix', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [...ids.filter(id => id !== slug), 'tsc-mb241tr', 'tsc-mb341tr', 'zebra-zt411-rfid'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})

export const tscT6000eRfidAccessories: Product[] = [{
  id: 'printronix-t6000e-wifi', slug: 'printronix-wifi-p220015-901', name: 'Moduł Wi-Fi Printronix P220015-901',
  shortDescription: 'Zestaw Wi-Fi 802.11a/b/g/n/ac do drukarek Printronix T6000e, w tym wersji RFID.',
  description: 'Printronix P220015-901 to zestaw rozbudowy łączności Wi-Fi 802.11a/b/g/n/ac do serii T6000e. Pasuje także do T6204e RFID, T6304e RFID, T6604e RFID, T6206e RFID i T6306e RFID. Jest sprzedawany osobno. Montaż zleć serwisowi zgodnie z instrukcją urządzenia. Moduł nie dodaje kodera RFID ani weryfikatora ODV-2D. Drukarka nie jest częścią zestawu.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-p220015-901.webp'], imageDescriptions: ['Zestaw Wi-Fi Printronix P220015-901 — moduł, antena i elementy montażowe'],
  specifications: [{ name: 'Part Number', value: 'P220015-901' }, { name: 'Wi-Fi', value: '802.11a/b/g/n/ac' }, { name: 'Zgodność', value: 'Printronix T6000e 4 i 6 cali, w tym wersje RFID' }, { name: 'Montaż', value: 'Serwisowy' }],
  applications: ['Połączenie drukarki T6000e z siecią Wi-Fi'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [...ids, 'tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid'], downloads: [], createdAt: '2026-10-16',
}, ...[
  { dpi: 203, pn: 'P220357-001', model: 'T6204e', printer: ids[0] },
  { dpi: 300, pn: 'P220358-001', model: 'T6304e', printer: ids[1] },
  { dpi: 600, pn: 'P220359-001', model: 'T6604e', printer: ids[2] },
].map(({ dpi, pn, model, printer }): Product => ({
  id: `printronix-t6000e-head-${dpi}-rfid`, slug: `printronix-glowica-rfid-${pn.toLowerCase()}`, name: `Głowica Printronix ${model} RFID ${dpi} dpi — V2/V3`,
  shortDescription: `Głowica ${pn}, ${dpi} dpi, 4 cale, RFID do odpowiednich drukarek T6000e V2/V3. Przed zakupem sprawdź wersję sprzętową.`,
  description: `Printronix ${pn} to głowica drukująca ${dpi} dpi do 4-calowych drukarek T6000e RFID w wersji V2/V3, w tym odpowiedniej wersji ${model}. Przed zakupem podaj numer seryjny i potwierdź wersję sprzętową. Nie zastępuje głowicy o innej rozdzielczości ani części Non-RFID. Głowica wykonuje nadruk i nie dodaje kodera RFID. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Wymianę zleć serwisowi.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-rfid-printhead.webp'], imageDescriptions: [`Głowica Printronix ${pn} do T6000e RFID V2/V3 — zdjęcie poglądowe`],
  specifications: [{ name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Szerokość', value: '4 cale' }, { name: 'Zgodność', value: `${model} RFID w wersji V2/V3; wymagane potwierdzenie wersji i numeru seryjnego` }],
  applications: ['Serwis drukarki RFID T6000e V2/V3'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [printer], downloads: [], createdAt: '2026-10-16',
}))]
