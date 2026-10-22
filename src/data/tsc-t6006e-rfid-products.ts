import type { Product } from './products'

const ids = ['tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-6-inch-enterprise-industrial-rfid-printers'

type T66Copy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications' | 'specifications'>

const t66Copy: Record<string, T66Copy> = {
  T6206e: {
    seoTitle: 'Printronix T6206e RFID — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC Printronix T6206e RFID – 6-calowa drukarka RFID UHF 203 dpi. Nadruk 166,4 mm do 304,8 mm/s, materiał 50,8–172,7 mm, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do szerokich etykiet paletowych i kartonowych. Druk do 166,4 mm z prędkością do 304,8 mm/s.',
    description: `TSC Printronix T6206e RFID to 6-calowa drukarka RFID UHF z głowicą 203 dpi. Pole nadruku ma 166,4 mm szerokości. Drukarka koduje wkładki RAIN UHF w etykietach na kartony i palety, najczęściej stosowanych w łańcuchu dostaw.

## Szeroki materiał od 50,8 mm

Materiał ma 50,8–172,7 mm szerokości, a taśma mieści się w tym samym zakresie. Etykieta musi mieć co najmniej 25,4 mm długości we wszystkich trybach. Maksymalna długość wynosi 2515 mm. Średnica rolki sięga 209 mm, a gilza ma 38,1–76,2 mm. Taśma do 450 m pracuje na gilzie 25,4 mm.

## Bez ODV-2D i odklejania w wersji 6-calowej RFID

Opcje odklejania z nawijaniem i nawijania partii są dla RFID dostępne tylko w modelu 4-calowym. Weryfikator ODV-2D nie występuje w modelach 6-calowych. Model 6-calowy może mieć obcinacz Heavy Duty Cutter. PN T6E2R6-2100-02 pracuje w trybie odrywania.

## 304,8 mm/s w ramie z odlewu aluminium

Drukarka drukuje do 304,8 mm/s, czyli 12 cali/s. Ma ramę z odlewu aluminium i metalowe drzwi. Waży 18,1 kg, a jej wymiary to 340,4 × 330,2 × 520,7 mm. Złącza standardowe to RS-232, USB i Ethernet 10/100.

Ten sam format z głowicą 300 dpi ma [T6306e RFID](/produkt/tsc-printronix-t6306e-rfid), drukująca do 254 mm/s.`,
    faq: [
      { question: 'Czy T6206e RFID ma opcję weryfikatora ODV-2D?', answer: 'Nie. Weryfikator ODV-2D jest dostępny tylko w modelach 4-calowych, takich jak T6204e RFID.' },
      { question: 'Jaka jest najkrótsza etykieta dla T6206e RFID?', answer: '25,4 mm, niezależnie od trybu pracy. Rozstaw wkładek RFID może wynosić od 15,9 mm.' },
      { question: 'Czy T6206e RFID wydrukuje etykietę A5 w poprzek?', answer: 'Tak. Etykieta A5 ma 148 mm szerokości, a pole nadruku 166,4 mm. Materiał z podkładem może mieć do 172,7 mm.' },
    ],
    applications: ['Kodowanie etykiet RFID 6-calowych na kartony i palety', 'Szerokie etykiety UHF o nadruku 166,4 mm'],
    specifications: [
      { name: 'Part Number', value: 'T6E2R6-2100-02' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '166,4 mm' },
      { name: 'Prędkość nadruku', value: 'do 304,8 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '50,8–172,7 mm' },
      { name: 'Rolka materiału', value: 'Do 209 mm; gilza 38,1–76,2 mm' },
      { name: 'Materiały RFID', value: 'Etykiety standardowe, znaczniki na metal do 2,2 mm i inne konstrukcje znaczników' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 50,8–172,7 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Niedostępny w modelach 6-calowych' },
      { name: 'Temperatura pracy', value: 'Od −5 do 40°C, wilgotność 10–90%' },
    ],
  },
  T6306e: {
    seoTitle: 'Printronix T6306e RFID — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC Printronix T6306e RFID – 6-calowa drukarka RFID UHF 300 dpi. Nadruk 166,4 mm do 254 mm/s, znaczniki na metal do 2,2 mm, rolka do 209 mm.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do szerokich etykiet z drobnym tekstem, piktogramami i grafiką. Druk do 166,4 mm z prędkością do 254 mm/s.',
    description: `TSC Printronix T6306e RFID to 6-calowa drukarka RFID UHF z głowicą 300 dpi. Łączy pole nadruku 166,4 mm z rozdzielczością 11,8 punktu na milimetr. Drukuje do 254 mm/s, czyli 10 cali/s.

## 300 dpi na szerokim formacie

Rozdzielczość 300 dpi służy do szerokich etykiet z drobnym tekstem i grafiką. W serii T6000e wersje 6-calowe nie mają głowicy 600 dpi. Materiał ma 50,8–172,7 mm szerokości i 0,06–0,268 mm grubości. Etykieta musi mieć co najmniej 25,4 mm długości.

## Zapis weryfikowany przy każdej etykiecie

Koder zapisuje wkładki RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Obsługuje etykiety standardowe i znaczniki na metal do 2,2 mm. Po nieudanym zapisie drukarka przekreśla etykietę i drukuje następną. Liczniki pokazują liczbę dobrych i przekreślonych etykiet.

## PrintNet Enterprise i SOTI Connect

PrintNet Enterprise pokazuje stan drukarek na jednym panelu i wysyła alerty e-mail lub SMS. Pozwala zdalnie zablokować panel przedni i generuje raporty produkcji. Drukarka współpracuje też z SOTI Connect. Karta SD może mieć 4–32 GB.

Wersja 203 dpi, [T6206e RFID](/produkt/tsc-printronix-t6206e-rfid), drukuje szerokie etykiety szybciej, do 304,8 mm/s.`,
    faq: [
      { question: 'Czym T6306e RFID różni się od T6206e RFID?', answer: 'Rozdzielczością i prędkością. T6306e RFID ma 300 dpi i drukuje do 254 mm/s. T6206e RFID ma 203 dpi i drukuje do 304,8 mm/s.' },
      { question: 'Jak zdalnie zarządzać T6306e RFID?', answer: 'Przez PrintNet Enterprise lub SOTI Connect. PrintNet Enterprise wysyła alerty o błędach i generuje raporty produkcji.' },
      { question: 'Ile waży T6306e RFID?', answer: '18,1 kg. Wymiary wynoszą 340,4 × 330,2 × 520,7 mm (szerokość × wysokość × głębokość).' },
    ],
    applications: ['Szerokie etykiety UHF 300 dpi z tekstem i grafiką', 'Kodowanie znaczników RFID pojemników zwrotnych'],
    specifications: [
      { name: 'Part Number', value: 'T6E3R6-2100-02' },
      { name: 'Rozdzielczość', value: '300 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '166,4 mm' },
      { name: 'Prędkość nadruku', value: 'do 254 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '50,8–172,7 mm' },
      { name: 'Rolka materiału', value: 'Do 209 mm; gilza 38,1–76,2 mm' },
      { name: 'Materiały RFID', value: 'Etykiety standardowe, znaczniki na metal do 2,2 mm i inne konstrukcje znaczników' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 50,8–172,7 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Niedostępny w modelach 6-calowych' },
      { name: 'Temperatura pracy', value: 'Od −5 do 40°C, wilgotność 10–90%' },
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
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6206e RFID i T6306e RFID', models: [
      { name: 'T6206e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'T6306e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 254 mm/s' } },
    ] },
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
