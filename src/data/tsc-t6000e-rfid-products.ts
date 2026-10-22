import type { Product } from './products'

const ids = ['tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid', 'tsc-printronix-t6604e-rfid']
const datasheet = '/downloads/tsc-printronix-t6000e-karta-produktu-en.pdf'
const support = 'https://emea.tscprinters.com/en/products/t6000e-series-4-inch-enterprise-industrial-rfid-printers'

type T6Copy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq' | 'applications' | 'specifications'>

const t6Copy: Record<string, T6Copy> = {
  T6204e: {
    seoTitle: 'Printronix T6204e RFID — drukarka RFID UHF 203 dpi',
    seoDescription: 'TSC Printronix T6204e RFID – przemysłowa drukarka RFID UHF 203 dpi. Druk 104 mm do 355,6 mm/s, znaczniki na metal do 2,2 mm, taśma 450 m.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do dużych serii etykiet logistycznych. Druk do 104 mm z prędkością do 355,6 mm/s, taśma barwiąca do 450 m.',
    description: `TSC Printronix T6204e RFID to 4-calowa drukarka RFID UHF z głowicą 203 dpi. Drukuje z prędkością do 355,6 mm/s, czyli 14 cali/s, i koduje etykiety w tym samym przebiegu. Seria T6000e jest przeznaczona do druku do 10 000 etykiet dziennie.

## Etykiety, zawieszki i znaczniki na metal do 2,2 mm

Koder obsługuje pasywne wkładki RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Oprócz etykiet koduje znaczniki na metal o grubości do 2,2 mm, zawieszki na rośliny, opaski i znaczniki pojemników zwrotnych. Najmniejszy odstęp między wkładkami to 15,9 mm. Etykietę z nieudanym zapisem drukarka przekreśla i drukuje ponownie.

## Odklejanie i ODV-2D tylko w wersji 4-calowej

Dla RFID opcje odklejania z nawijaniem i nawijania partii etykiet są dostępne tylko w modelu 4-calowym. Weryfikator ODV-2D ocenia kody 1D i 2D zgodnie z ISO 15415, 15416 i 15426. Z nim drukarka drukuje, koduje RFID i kontroluje kody w jednym przebiegu. PN T6E2R4-2100-02 nie ma tych opcji i pracuje w trybie odrywania.

## Materiał 25,4–114,3 mm i rolka 209 mm

Materiał ma 25,4–114,3 mm szerokości i 0,06–0,268 mm grubości. Rolka ma do 209 mm średnicy na gilzie 38,1–76,2 mm. Taśma 450 m pracuje na gilzie 25,4 mm. Standardowe porty to RS-232, USB i Ethernet 10/100. Wi-Fi 802.11a/b/g/n/ac zapewnia [moduł Printronix](/produkt/printronix-wifi-p220015-901).

Wersja 300 dpi, [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid), drukuje do 304,8 mm/s.`,
    faq: [
      { question: 'Jak gruby znacznik na metal zakoduje T6204e RFID?', answer: 'Do 2,2 mm. Zwykły materiał ma 0,06–0,268 mm grubości. Drukarka koduje też zawieszki, opaski i znaczniki pojemników zwrotnych.' },
      { question: 'Czy do T6204e RFID można dodać weryfikator kodów?', answer: 'Tak. Weryfikator ODV-2D jest opcją modeli 4-calowych. Ocenia każdy kod 1D i 2D, a etykietę ze złym kodem cofa i przekreśla.' },
      { question: 'Ile etykiet dziennie przewidziano dla serii T6000e?', answer: 'Do 10 000 etykiet dziennie. Model 203 dpi jest w serii najszybszy: drukuje do 355,6 mm/s.' },
    ],
    applications: ['Kodowanie etykiet UHF w dużych seriach logistycznych', 'Znaczniki RFID na metal do 2,2 mm'],
    specifications: [
      { name: 'Part Number', value: 'T6E2R4-2100-02' },
      { name: 'Rozdzielczość', value: '203 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość nadruku', value: 'do 355,6 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '25,4–114,3 mm' },
      { name: 'Rolka materiału', value: 'Do 209 mm; gilza 38,1–76,2 mm' },
      { name: 'Materiały RFID', value: 'Etykiety standardowe, znaczniki na metal do 2,2 mm i inne konstrukcje znaczników' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25,4–114,3 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Brak w pokazanym PN; opcja dla modeli 4-calowych' },
      { name: 'Temperatura pracy', value: 'Od −5 do 40°C, wilgotność 10–90%' },
    ],
  },
  T6304e: {
    seoTitle: 'Printronix T6304e RFID — drukarka RFID UHF 300 dpi',
    seoDescription: 'TSC Printronix T6304e RFID – przemysłowa drukarka RFID UHF 300 dpi. Druk 104 mm do 304,8 mm/s, języki PGL i ZGL, znaczniki na metal do 2,2 mm.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych i oznaczeń części. Druk do 104 mm, prędkość do 304,8 mm/s, taśma do 450 m.',
    description: `TSC Printronix T6304e RFID to drukarka RFID UHF z głowicą 300 dpi i szerokością nadruku 104 mm. Drukuje do 304,8 mm/s, czyli 12 cali/s. Drukuje i koduje etykiety, zawieszki oraz znaczniki UHF w zakładach produkcyjnych i magazynach.

## Polecenia RFID w PGL, ZGL, STGL i MGL

Drukarka przyjmuje polecenia RFID w czterech językach: PGL, ZGL, STGL i MGL. Do samego nadruku obsługuje też VGL, TGL, IGL, DGL, IEGL i EGL. Opcjonalnie dostępne są IPDS i PostScript. Każda zakodowana etykieta jest rejestrowana, a drukarka śledzi odsetek błędów.

## PrintNet Enterprise i karta QCMC

PrintNet Enterprise pozwala zdalnie przesyłać konfiguracje i oprogramowanie do jednej drukarki lub grupy. Wysyła też alerty o błędach e-mailem lub SMS-em. Karta pamięci QCMC przyspiesza konfigurację drukarki. Głowica jest mocowana zatrzaskowo, a pamięć obejmuje 512 MB RAM i 128 MB Flash z gniazdem kart SD 4–32 GB.

## Etykieta od 6,35 mm przy odrywaniu

Przy pracy ciągłej i odrywaniu etykieta może mieć od 6,35 mm długości. Przy odklejaniu i obcinaniu minimum wynosi 25,4 mm, a maksimum 2515 mm. Materiał ma 25,4–114,3 mm szerokości. Taśma do 450 m może mieć 25,4–114,3 mm szerokości. Znaczniki na metal mogą mieć do 2,2 mm.

Szybsza wersja 203 dpi, [T6204e RFID](/produkt/tsc-printronix-t6204e-rfid), drukuje do 355,6 mm/s.`,
    faq: [
      { question: 'W jakich językach T6304e RFID przyjmuje polecenia kodowania?', answer: 'W PGL, ZGL, STGL i MGL. ZGL to emulacja języka ZPL.' },
      { question: 'Jaka jest najkrótsza etykieta dla T6304e RFID?', answer: '6,35 mm w trybie ciągłym i przy odrywaniu. Przy odklejaniu i obcinaniu minimum wynosi 25,4 mm. Maksymalna długość to 2515 mm.' },
      { question: 'W jakiej temperaturze pracuje T6304e RFID?', answer: 'Od −5 do 40°C przy wilgotności 10–90% bez kondensacji. Dokładny zakres może zawęzić użyty materiał.' },
    ],
    applications: ['Etykiety UHF 300 dpi z kontrolą kodów ODV-2D', 'Kodowanie zawieszek i opasek RFID'],
    specifications: [
      { name: 'Part Number', value: 'T6E3R4-2100-02' },
      { name: 'Rozdzielczość', value: '300 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość nadruku', value: 'do 304,8 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '25,4–114,3 mm' },
      { name: 'Rolka materiału', value: 'Do 209 mm; gilza 38,1–76,2 mm' },
      { name: 'Materiały RFID', value: 'Etykiety standardowe, znaczniki na metal do 2,2 mm i inne konstrukcje znaczników' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25,4–114,3 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Brak w pokazanym PN; opcja dla modeli 4-calowych' },
      { name: 'Temperatura pracy', value: 'Od −5 do 40°C, wilgotność 10–90%' },
    ],
  },
  T6604e: {
    seoTitle: 'Printronix T6604e RFID — drukarka RFID UHF 600 dpi',
    seoDescription: 'TSC Printronix T6604e RFID – przemysłowa drukarka RFID UHF 600 dpi. Druk 104 mm do 152,4 mm/s, małe etykiety na płytki PCB, znaczniki na metal do 2,2 mm.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 600 dpi do bardzo małych etykiet i mikrokodów 2D. Druk do 104 mm z prędkością do 152,4 mm/s.',
    description: `TSC Printronix T6604e RFID to drukarka RFID UHF z głowicą 600 dpi. W serii T6000e rozdzielczość 600 dpi jest dostępna tylko w modelu 4-calowym. Drukarka przygotowuje małe etykiety z wkładką UHF, w tym etykiety na zespoły płytek PCB.

## 600 dpi do tekstu, kodów i znaków azjatyckich

Głowica 600 dpi odwzorowuje drobny tekst, kody kreskowe, grafikę i szczegółowe znaki azjatyckie. Prędkość wynosi do 152,4 mm/s, czyli 6 cali/s. Szerokość nadruku to 104 mm. Głowica jest wymienna.

## Mała etykieta z rozstawem 15,9 mm

Minimalny rozstaw wkładek wynosi 15,9 mm. Przy odrywaniu etykieta może mieć od 6,35 mm długości. Obsługiwane są pasywne wkładki RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Liczniki rejestrują etykiety poprawne i przekreślone.

## T6E6R4-2100-02 i opcje 4-calowe

PN T6E6R4-2100-02 ma porty RS-232, USB i Ethernet 10/100 oraz tryb odrywania. Opcje obejmują Wi-Fi 802.11a/b/g/n/ac, port równoległy, GPIO i weryfikator ODV-2D. Zasilacz przyjmuje 90–240 V AC przy 48–62 Hz. Drukarka waży 16,7 kg.

Przy etykietach ze zwykłym tekstem szybsza jest [T6304e RFID](/produkt/tsc-printronix-t6304e-rfid), drukująca do 304,8 mm/s.`,
    faq: [
      { question: 'Czy T6604e RFID występuje w wersji 6-calowej?', answer: 'Nie. Głowica 600 dpi jest dostępna tylko w modelach 4-calowych T6000e. Wersje 6-calowe mają 203 lub 300 dpi.' },
      { question: 'Jak szybko drukuje T6604e RFID?', answer: 'Do 152,4 mm/s, czyli 6 cali/s. Wersje 4-calowe 203 i 300 dpi drukują do 355,6 i 304,8 mm/s.' },
      { question: 'Jakie wymiary ma T6604e RFID?', answer: '297,2 × 330,2 × 520,7 mm (szerokość × wysokość × głębokość). Drukarka waży 16,7 kg.' },
    ],
    applications: ['Małe etykiety RFID 600 dpi na płytki PCB', 'Etykiety UHF z mikrotekstem w elektronice'],
    specifications: [
      { name: 'Part Number', value: 'T6E6R4-2100-02' },
      { name: 'Rozdzielczość', value: '600 dpi' },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: '104 mm' },
      { name: 'Prędkość nadruku', value: 'do 152,4 mm/s; kodowanie zależy od materiału i danych' },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagana zgodna wkładka i kalibracja' },
      { name: 'Szerokość materiału', value: '25,4–114,3 mm' },
      { name: 'Rolka materiału', value: 'Do 209 mm; gilza 38,1–76,2 mm' },
      { name: 'Materiały RFID', value: 'Etykiety standardowe, znaczniki na metal do 2,2 mm i inne konstrukcje znaczników' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 25,4–114,3 mm; gilza 25,4 mm' },
      { name: 'Łączność', value: 'USB, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie' },
      { name: 'Wyświetlacz', value: 'Kolorowy 3,5 cala z przyciskami' },
      { name: 'Pamięć', value: '512 MB RAM i 128 MB Flash' },
      { name: 'Polecenia RFID', value: 'PGL, ZGL, STGL, MGL' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i nawijaka w tym PN' },
      { name: 'Weryfikator kodów ODV-2D', value: 'Brak w pokazanym PN; opcja dla modeli 4-calowych' },
      { name: 'Temperatura pracy', value: 'Od −5 do 40°C, wilgotność 10–90%' },
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
    variants: [{ partNumber: pn, name: `${dpi} dpi, RFID, EU, Ethernet`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie T6204e, T6304e i T6604e RFID', models: [
      { name: 'T6204e RFID', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'do 355,6 mm/s' } },
      { name: 'T6304e RFID', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Prędkość nadruku': 'do 304,8 mm/s' } },
      { name: 'T6604e RFID', slug: ids[2], highlight: dpi === 600, specs: { 'Rozdzielczość': '600 dpi', 'Prędkość nadruku': 'do 152,4 mm/s' } },
    ] },
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
