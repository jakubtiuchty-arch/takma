import type { Product } from './products'

const ids = ['tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-6-inch-enterprise-industrial-rfid-printers'

type T66Copy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const t66Copy: Record<string, T66Copy> = {
  T6206e: {
    seoTitle: 'Printronix T6206e RFID — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC Printronix T6206e RFID: 6-calowa drukarka i koder UHF 203 dpi do etykiet paletowych A5. Druk 166,4 mm z prędkością 304,8 mm/s, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do szerokich etykiet paletowych i kartonowych. Druk do 166,4 mm z prędkością do 304,8 mm/s.',
    description: `TSC Printronix T6206e RFID drukuje etykiety o szerokości do 166,4 mm i koduje w nich wkładki UHF. To 6-calowa wersja serii T6000e z głowicą 203 dpi. Wybierz ją do etykiet paletowych, etykiet na duże kartony i oznaczeń pojemników zwrotnych.

## Szeroka etykieta logistyczna z RFID

Szerokość nadruku 166,4 mm mieści etykietę paletową w formacie A5, ułożoną krótszym bokiem w poprzek. Na takiej etykiecie zmieścisz kilka kodów GS1-128, adres i dane przesyłki. Rozdzielczość 203 dpi, czyli 8 punktów na milimetr, wystarcza do kodów kreskowych czytanych z odległości. Drukarka pracuje z prędkością do 304,8 mm/s.

Materiał może mieć 50,8–172,7 mm szerokości. Długość etykiety musi wynosić co najmniej 25,4 mm. Taśma barwiąca ma do 450 m długości. Jej szerokość mieści się w tym samym zakresie co szerokość materiału.

## Koder UHF w wersji 6-calowej

Koder zapisuje pasywne wkładki RAIN UHF (EPC Gen2 v2, ISO 18000-63). Minimalny rozstaw wkładek wynosi 15,9 mm. Drukarka sprawdza zapis i przekreśla etykietę, której nie udało się zakodować. Zgodne etykiety na metal wymagają doboru wkładki i ustawień anteny.

## Co ma PN T6E2R6-2100-02

- koder UHF RFID i przewód zasilający EU,
- USB, RS-232 i Ethernet 10/100,
- kolorowy wyświetlacz 3,5 cala z przyciskami,
- ręczne odrywanie etykiet.

Wersje 6-calowe z RFID nie mają opcji odklejania z nawijaniem ani weryfikatora ODV-2D. Jeśli potrzebujesz tych funkcji, wybierz model 4-calowy, np. [T6204e RFID](/produkt/tsc-printronix-t6204e-rfid). Wi-Fi dodasz [modułem P220015-901](/produkt/printronix-wifi-p220015-901).

Do szerokich etykiet z drobnym tekstem wybierz [T6306e RFID](/produkt/tsc-printronix-t6306e-rfid) z głowicą 300 dpi.`,
    faq: [
      { question: 'Czy T6206e RFID wydrukuje etykietę paletową A5?', answer: 'Tak. Szerokość nadruku wynosi 166,4 mm, więc etykieta A5 o szerokości 148 mm mieści się w polu druku. Materiał może mieć do 172,7 mm szerokości.' },
      { question: 'Czy T6206e RFID ma odklejak lub weryfikator ODV-2D?', answer: 'Nie. W 6-calowych modelach RFID nie ma opcji odklejania z nawijaniem ani ODV-2D. Te funkcje są dostępne w modelach 4-calowych, np. T6204e RFID.' },
      { question: 'Jaka jest najkrótsza etykieta dla T6206e RFID?', answer: 'Materiał musi mieć co najmniej 25,4 mm długości. Rozstaw wkładek RFID może wynosić od 15,9 mm.' },
      { question: 'Czy T6206e RFID przyjmie głowicę 4-calową?', answer: 'Nie. T6206e RFID wymaga 6-calowej głowicy 203 dpi P220360-001. Przy zamówieniu podaj numer seryjny drukarki.' },
    ],
  },
  T6306e: {
    seoTitle: 'Printronix T6306e RFID — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC Printronix T6306e RFID: 6-calowa drukarka i koder UHF 300 dpi do szerokich etykiet z drobnym tekstem i grafiką. Druk 166,4 mm, 254 mm/s.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do szerokich etykiet z drobnym tekstem, piktogramami i grafiką. Druk do 166,4 mm z prędkością do 254 mm/s.',
    description: `TSC Printronix T6306e RFID łączy szerokość druku 166,4 mm z rozdzielczością 300 dpi. Wybierz ją, gdy szeroka etykieta zawiera dużo drobnego tekstu albo grafikę, a oprócz nadruku musi mieć zakodowany identyfikator EPC.

## Szeroka etykieta z drobnym nadrukiem

Przykładem są etykiety na beczki i kanistry z piktogramami i opisem zagrożeń, etykiety wyrobów z tabelą parametrów oraz karty identyfikacyjne dużych pojemników. Głowica 300 dpi ma 11,8 punktu na milimetr. Cienkie linie piktogramów i drobny tekst zachowują wyraźne krawędzie.

Prędkość wynosi do 254 mm/s. Do prostych etykiet paletowych z dużymi kodami szybsza jest [T6206e RFID](/produkt/tsc-printronix-t6206e-rfid) z głowicą 203 dpi.

## Kodowanie etykiet UHF

T6306e RFID koduje wkładki RAIN UHF zgodne z EPC Gen2 v2 i ISO 18000-63. Każdy zapis jest weryfikowany. Etykieta z błędem zostaje przekreślona, a drukarka drukuje następną. Liczniki pokazują liczbę dobrych i odrzuconych etykiet.

Materiał ma szerokość 50,8–172,7 mm, a etykieta co najmniej 25,4 mm długości. Przy etykietach chemicznych liczy się odporność nadruku. Dobierz etykietę foliową i taśmę żywiczną do warunków przechowywania. Taśma może mieć do 450 m długości.

## Konfiguracja T6E3R6-2100-02

Drukarka ma koder UHF RFID, USB, RS-232, Ethernet 10/100 i przewód zasilający EU. Kolorowy wyświetlacz 3,5 cala z przyciskami służy do ustawień. Etykiety odbiera się przez odrywanie. Wi-Fi wymaga [modułu P220015-901](/produkt/printronix-wifi-p220015-901).

W wersji 6-calowej z RFID nie ma odklejania z nawijaniem ani weryfikatora ODV-2D. Polecenia RFID przyjmuje w językach PGL, ZGL, STGL i MGL. Do węższych etykiet z drobnym nadrukiem sprawdź [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid).`,
    faq: [
      { question: 'Kiedy wybrać T6306e RFID zamiast T6206e RFID?', answer: 'Gdy szeroka etykieta ma drobny tekst, piktogramy lub grafikę. T6306e RFID ma 300 dpi i drukuje do 254 mm/s. T6206e RFID ma 203 dpi i drukuje do 304,8 mm/s.' },
      { question: 'Czy T6306e RFID nadaje się do etykiet na beczki z chemikaliami?', answer: 'Tak, jeśli dobierzesz odporną etykietę i taśmę. Opisz nam warunki przechowywania i powierzchnię opakowania. Dobierzemy materiał z wkładką UHF i taśmę żywiczną.' },
      { question: 'Czy do T6306e RFID pasuje głowica z modelu 4-calowego?', answer: 'Nie. T6306e RFID wymaga głowicy 6-calowej 300 dpi P220361-001. Przy zamówieniu podaj numer seryjny drukarki.' },
      { question: 'Jakie języki drukarki obsługuje T6306e RFID?', answer: 'PGL, ZGL, STGL i MGL. Polecenia kodowania RFID są dostępne w tych językach.' },
    ],
  },
}

export const tscT6006eRfidProducts: Product[] = [
  { model: 'T6206e', pn: 'T6E2R6-2100-02', dpi: 203, speed: '304,8', other: ids[1] },
  { model: 'T6306e', pn: 'T6E3R6-2100-02', dpi: 300, speed: '254', other: ids[0] },
].map(({ model, pn, dpi, speed, other }) => {
  const slug = `tsc-printronix-${model.toLowerCase()}-rfid`
  return {
    id: slug, slug, name: `TSC Printronix ${model} RFID`, seoH1: `TSC Printronix ${model} RFID`,
    ...t66Copy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'logistyka', 'produkcja'], images: ['/images/products/printronix-t6006e-rfid.png'], imageDescriptions: [`Printronix ${model} RFID — przemysłowa drukarka 6 cali z wyświetlaczem i wysuniętą etykietą`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: '166,4 mm' },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od materiału i danych` },
      { name: 'RFID', value: 'RAIN UHF, EPC Gen2 v2 / ISO 18000-63; konfiguracja EU' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '50,8–172,7 mm' },
      { name: 'Materiały RFID', value: 'Zgodne etykiety standardowe i na metal; dobór wkładki i grubości do konfiguracji' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 50,8–172,7 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Niedostępny w opisanej wersji 6-calowej' },
    ],
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6206e RFID i T6306e RFID', models: [
      { name: 'T6206e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'T6306e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 254 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Oznaczanie pojemników i wyposażenia', 'Przygotowanie oznaczeń do procesów produkcyjnych i logistycznych'],
    compatibleAccessories: [], relatedAccessories: ['printronix-t6000e-wifi', `printronix-t6006e-head-${dpi}-rfid`],
    downloads: [{ name: 'Karta katalogowa T6000e i RFID (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcje, sterowniki i wsparcie TSC Printronix', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'zebra-zt421-rfid'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})

export const tscT6006eRfidAccessories: Product[] = [
  { dpi: 203, pn: 'P220360-001', model: 'T6206e', printer: ids[0] },
  { dpi: 300, pn: 'P220361-001', model: 'T6306e', printer: ids[1] },
].map(({ dpi, pn, model, printer }): Product => ({
  id: `printronix-t6006e-head-${dpi}-rfid`, slug: `printronix-glowica-6-cali-${pn.toLowerCase()}`, name: `Głowica Printronix ${model} ${dpi} dpi — 6 cali`,
  shortDescription: `Głowica ${pn}, ${dpi} dpi, do 6-calowych drukarek T6000e, w tym ${model} RFID. Dobór wymaga sprawdzenia wersji i numeru seryjnego.`,
  description: `Printronix ${pn} to głowica drukująca ${dpi} dpi do 6-calowych drukarek T6000e, w tym odpowiedniej wersji ${model} RFID. Pasuje do serii T6000e oraz V2/V3 po potwierdzeniu wersji sprzętowej i numeru seryjnego. Nie zastępuje głowicy 4-calowej ani części o innej rozdzielczości. Głowica wykonuje nadruk i nie dodaje kodera RFID. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Wymianę zleć serwisowi.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'produkcja'],
  images: ['/images/products/printronix-6-inch-printhead.webp'], imageDescriptions: [`Głowica Printronix ${pn}, ${dpi} dpi, do T6000e 6 cali — zdjęcie poglądowe`],
  specifications: [{ name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Szerokość', value: '6 cali' }, { name: 'Zgodność', value: `${model}, w tym RFID; T6000e/V2/V3; potwierdź wersję i numer seryjny` }],
  applications: ['Serwis drukarki T6000e 6 cali'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: [printer], downloads: [], createdAt: '2026-10-16',
}))
