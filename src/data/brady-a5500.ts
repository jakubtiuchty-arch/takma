import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Drukarka z aplikatorem etykiet flagowych Brady A5500 (A5500-EU, A5500-EU-WIFI, A5500-FO), filtr wentylatora
// oraz materiały serii A55 (etykiety flagowe B-424, B-425, B-437, B-483, QuickFlag) i taśmy barwiące SSR.
// Jedna karta na rodzinę materiału z brady.eu, PN jako warianty. Brady nie ma cen ani stanów w /api/stock,
// więc karty są na zapytanie (quoteOnly). 15.11.2026.

export const bradyA5500: Product = {
  id: 'brady-a5500',
  slug: 'brady-a5500',
  name: 'Brady A5500',
  seoH1: 'Brady A5500',
  seoTitle: 'Brady A5500 — drukarka i aplikator flag na przewody i kable',
  seoDescription: 'Brady A5500 — drukarka z aplikatorem etykiet flagowych na przewody Ø 1,52–15,24 mm: druk 300 dpi i nałożenie flagi w ok. 5 s. PN: A5500-EU, A5500-FO.',
  shortDescription: 'Brady A5500 — drukarka z aplikatorem etykiet flagowych na przewody i kable. Drukuje flagę w 300 dpi i nakłada ją na przewód o średnicy od 1,52 do 15,24 mm w ok. 5 s. Wersje z Wi-Fi i do przewodów światłowodowych.',
  description: 'Brady A5500 (BradyPrinter A5500) to stacjonarna drukarka z aplikatorem, która w jednym cyklu drukuje etykietę flagową i nakłada ją na przewód. Operator wkłada przewód w szczęki, a urządzenie drukuje flagę w rozdzielczości 300 dpi i owija ją wokół izolacji. Cykl druku i nałożenia trwa około 5 sekund. Flagi mają równe krawędzie, bez zmarszczek i przekrzywień. Urządzenie jest przeznaczone do pracy 24 godziny na dobę i do 7000 flag dziennie.\n\nWersje A5500-EU i A5500-EU-WIFI obsługują bez przezbrajania przewody Ø 1,52–15,24 mm. Wersja A5500-FO ma miękkie szczęki do przewodów światłowodowych o średnicy od 1,19 do 9,65 mm. Szczęki nie wgniatają i nie rysują przewodu.\n\nDrukarka pracuje na etykietach serii A55 (szerokość maks. 50,8 mm) i taśmach barwiących o długości 300 m. Etykiety przyjmuje przez USB i Ethernet, a wersja A5500-EU-WIFI także przez Wi-Fi. Zadania przechowuje w pamięci wewnętrznej (32 GB) albo na nośniku USB, więc seria flag nie wymaga komputera przy stanowisku. Skaner kodów kreskowych podłączony przez USB wybiera plik etykiety. Złącze zdalnego trybu PLC łączy urządzenie z systemami automatyki innych firm, a port stanu obsługuje lampkę sygnalizacyjną.',
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'drukarki-do-oznaczania-kabli'],
  manufacturerId: 'brady',
  sameAs: 'https://www.brady.eu/label-printers/bradyprinter-a5500-flag-printer-applicator-emea-pid-151187',
  quoteOnly: true,
  availability: 'unavailable',
  images: [
    '/images/products/brady/a5500-eu.png',
    '/images/products/brady/a5500-eu-zestaw.png',
    '/images/products/brady/a5500-otwarta.png',
    '/images/products/brady/a5500-fo.png',
    '/images/products/brady-a5500-flagowanie-przewodu.webp',
    '/images/products/brady-a5500-stanowisko-pracy.webp',
    '/images/products/brady-a5500-szczeki-i-oslona.webp',
    '/images/products/brady-a5500-skanowanie-flagi.webp',
    '/images/products/brady-a5500-fo-swiatlowod.webp',
    '/images/products/brady-a5500-tasma-w-drukarce.webp',
  ],
  imageDescriptions: [
    'Brady A5500 obrócona w prawo — niebiesko-szara obudowa, kolorowy ekran dotykowy i przezroczysta osłona szczęk aplikatora',
    'Brady A5500 z zawartością zestawu: rolka etykiet A55, taśma barwiąca, kabel USB, przewód zasilający, pamięć USB i klucz',
    'Brady A5500 z podniesioną pokrywą boczną; widoczna rolka etykiet, wentylator i mechanizm druku',
    'Brady A5500 Fiber Optic z przodu — ekran dotykowy, szczęki z miękkimi wkładkami i napis Fiber Optic na obudowie',
    'Zielono-żółty przewód z białą flagą z nadrukiem w szczękach Brady A5500; nad nim ekran dotykowy z menu',
    'Pracownica przy stole z laptopem wkłada przewód w szczęki drukarki Brady A5500; obok szpule czerwonego i zielonego przewodu',
    'Dłonie wkładają czerwony przewód w szczęki drukarki Brady A5500 pod podniesioną przezroczystą osłoną',
    'Pracownik skanuje ręcznym czytnikiem flagę z kodem 2D na czerwonym przewodzie obok drukarki Brady A5500',
    'Przewód światłowodowy z białą flagą wychodzący ze szczęk drukarki Brady A5500 Fiber Optic',
    'Wnętrze drukarki Brady A5500 z czarną taśmą barwiącą założoną na trzpienie i żółtymi pokrętłami',
  ],
  tags: ['produkcja'],
  isNew: true,
  isBestseller: false,
  applications: [
    'Oznaczanie przewodów przy produkcji wiązek kablowych',
    'Flagi na kable w szafach sterowniczych i rozdzielnicach',
    'Oznaczenia kabli teleinformatycznych',
    'Flagi na przewodach światłowodowych (A5500-FO)',
    'Seryjne oznaczniki z kodami kreskowymi i QR',
  ],
  specifications: [
    { name: 'Typ urządzenia', value: 'Stacjonarna drukarka termotransferowa z aplikatorem etykiet flagowych na przewody i kable' },
    { name: 'Technologia druku', value: 'Termotransfer' },
    { name: 'Rozdzielczość druku', value: '300 dpi (11,8 punktu/mm)' },
    { name: 'Prędkość druku', value: '76 mm/s' },
    { name: 'Czas cyklu', value: 'ok. 5 s (druk i nałożenie flagi)' },
    { name: 'Kolor druku', value: 'jednokolorowy, kolor zależy od taśmy barwiącej' },
    { name: 'Średnica przewodu', value: 'A5500-EU i A5500-EU-WIFI: od 1,52 do 15,24 mm z izolacją, bez przezbrajania; A5500-FO: od 1,19 do 9,65 mm' },
    { name: 'Szerokość etykiety', value: 'do 50,8 mm (etykiety A55 od 12,7 do 50,8 mm)' },
    { name: 'Wysokość etykiety', value: 'od 19,05 do 101,6 mm (A5500-FO: od 38,1 mm)' },
    { name: 'Maks. szerokość druku', value: '50,8 mm' },
    { name: 'Maksymalna długość wydruku', value: '101,6 mm' },
    { name: 'Materiały', value: 'etykiety flagowe A55: papier B-424, polipropylen B-425, polifluorek winylu B-437, poliester B-483, flagi QuickFlag z poliestru B-483' },
    { name: 'Taśma barwiąca', value: 'R4300 (SSR4302, SSR4306), R6000 bezhalogenowa (SSR6002, SSR6006), R6100 (SSR6102); długość 300 m' },
    { name: 'Zalecane użycie', value: 'do 7000 flag dziennie; praca 24 godziny na dobę, 7 dni w tygodniu' },
    { name: 'Wyświetlacz', value: 'kolorowy ekran dotykowy, 1024 × 800 pikseli' },
    { name: 'Pamięć', value: '32 GB, rozszerzenie przez pamięć USB (FAT, FAT32, exFAT)' },
    { name: 'Łączność', value: 'USB-B do komputera, porty USB-A, Ethernet; A5500-EU-WIFI: także Wi-Fi; A5500-FO: także RS-232 i wejścia/wyjścia I/O' },
    { name: 'Porty do automatyki', value: 'złącze zdalnego trybu PLC; port lampki stanu (czerwony — błąd, żółty — praca, zielony — gotowość)' },
    { name: 'Druk bez komputera', value: 'tak, z plików w pamięci drukarki lub na pamięci USB; wybór pliku skanerem kodów kreskowych USB' },
    { name: 'Język drukarki', value: 'emulacja ZPL Brady; Brady Script Emulator for ZPL (akcesorium M-SCRIPT-ADAPT-INT)' },
    { name: 'Kody kreskowe', value: 'kody 1D (liniowe) i 2D' },
    { name: 'Czcionki', value: 'Arial, Arial 65, Courier New, Tahoma, Times New Roman' },
    { name: 'Oprogramowanie', value: 'Brady Workstation Product and Wire ID Suite; sterownik Windows do programów innych firm' },
    { name: 'Systemy operacyjne', value: 'Windows 7, 8, 10' },
    { name: 'Bezpieczeństwo', value: 'przezroczyste drzwi przednie nad szczękami; po ich otwarciu ruchome części zatrzymują się' },
    { name: 'Zasilanie', value: '100–240 V AC, 50/60 Hz, 2 A; bezpiecznik zwłoczny 3 A, 5 × 20 mm' },
    { name: 'Temperatura pracy', value: 'od 10 do 40 °C' },
    { name: 'Wilgotność pracy', value: 'od 20 do 80%, bez kondensacji' },
    { name: 'Temperatura przechowywania', value: 'od 0 do 60 °C (wilgotność 10–90%)' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '383,54 × 452,12 × 604,52 mm' },
    { name: 'Masa', value: '34 kg' },
    { name: 'Konserwacja', value: 'czyszczenie filtra wentylatora z tyłu obudowy; kontrola smarowania szyny ślizgowej i innych części co 6–12 miesięcy' },
    { name: 'Normy', value: 'CE (2014/35/UE, 2014/30/UE, 2011/65/UE, 2015/863/UE), EN/IEC 60950-1, UL 60950-1, RoHS, WEEE' },
    { name: 'Gwarancja', value: '1 rok' },
    { name: 'Zawartość opakowania', value: 'A5500-EU i A5500-EU-WIFI: drukarka z aplikatorem, Brady Workstation Product and Wire ID Suite, sterownik, kabel USB, przewód zasilający, rolka etykiet A55-4-483, taśma SSR6002; A5500-FO: drukarka z aplikatorem, rolka A55-4-483 i taśma R6000 założone w drukarce, klucz 7/16", kabel USB, pamięć USB, przewód zasilający, kod do pobrania Product and Wire ID Suite, raport z testu OTDR' },
    { name: 'Akcesoria opcjonalne', value: 'filtr wentylatora WRAPTOR-FILTER (60711), Brady Script Emulator for ZPL (M-SCRIPT-ADAPT-INT), zestaw czyszczący PCK-6' },
    { name: 'Numery artykułów Brady', value: 'A5500-EU: 151187; A5500-EU-WIFI: 151186; A5500-FO: 170480' },
  ],
  variants: [
    { partNumber: 'A5500-EU', name: 'Brady A5500 — drukarka z aplikatorem flag', attributes: { Wersja: 'Standardowa', 'Ø przewodu': '1,52–15,24 mm' }, availability: 'unavailable' },
    { partNumber: 'A5500-EU-WIFI', name: 'Brady A5500 z Wi-Fi — drukarka z aplikatorem flag', attributes: { Wersja: 'Standardowa', 'Ø przewodu': '1,52–15,24 mm', 'Wi-Fi': 'Tak' }, availability: 'unavailable' },
    { partNumber: 'A5500-FO', name: 'Brady A5500 Fiber Optic — drukarka z aplikatorem flag do światłowodów', attributes: { Wersja: 'Fiber Optic', 'Ø przewodu': '1,19–9,65 mm' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Wersja: 'Rodzaj szczęk, które trzymają przewód podczas nakładania flagi.\n\nStandardowa — szczęki do przewodów miedzianych i kabli o średnicy do 15,24 mm.\n\nFiber Optic — miękkie szczęki do przewodów światłowodowych, które nie wgniatają i nie rysują przewodu; dodatkowe złącza RS-232 i I/O, raport z testu OTDR w zestawie.',
    'Ø przewodu': 'Zakres średnicy przewodu razem z izolacją.\n\nA5500 nie wymaga przezbrajania w całym zakresie. Rozmiar etykiety A55 dobiera się do średnicy przewodu.',
    'Wi-Fi': 'Moduł sieci bezprzewodowej.\n\nA5500-EU-WIFI przyjmuje zadania druku także przez Wi-Fi, poza USB i Ethernetem.',
  },
  faq: [
    { question: 'Jakie przewody oznacza Brady A5500?', answer: 'Wersje A5500-EU i A5500-EU-WIFI nakładają flagi na przewody o średnicy od 1,52 do 15,24 mm razem z izolacją, bez przezbrajania. Przewód o większej średnicy może zablokować mechanizm. Wersja A5500-FO obsługuje przewody od 1,19 do 9,65 mm. Każda etykieta A55 ma podany zakres średnicy, np. [etykiety A55-483](/produkt/brady-a55-1-483) o wysokości 38,10 mm pasują do przewodów od 1,52 do 4,83 mm.' },
    { question: 'Jakie etykiety i taśmy pasują do Brady A5500?', answer: 'Etykiety flagowe serii A55: papier B-424, polipropylen B-425, polifluorek winylu B-437, poliester B-483 i flagi [QuickFlag](/produkt/brady-a55-24-483) ze zwężanym ogonem. Taśmy barwiące to [R6000 HF](/produkt/brady-ssr6006) do poliestru, [R4300](/produkt/brady-ssr4302) do papieru, polipropylenu i PVF oraz [R6100](/produkt/brady-ssr6102) do papieru. W zestawie z drukarką są rolka A55-4-483 i taśma SSR6002.' },
    { question: 'Czym różni się Brady A5500-FO od A5500-EU?', answer: 'A5500-FO ma miękkie szczęki do przewodów światłowodowych, które nie wgniatają i nie rysują przewodu. Obsługuje przewody od 1,19 do 9,65 mm i etykiety o wysokości od 38,1 mm. Ma dodatkowe złącza RS-232 i I/O, a w zestawie jest raport z testu OTDR. A5500-EU obsługuje przewody od 1,52 do 15,24 mm i etykiety od 19,05 mm.' },
    { question: 'Czy Brady A5500 drukuje bez komputera?', answer: 'Tak. Pliki etykiet zapisuje się w pamięci drukarki (32 GB) albo na pamięci USB. Operator wybiera zadanie na ekranie dotykowym albo skanuje kod kreskowy z nazwą pliku skanerem USB. Pliki .prn można też zaimportować z pamięci USB.' },
    { question: 'Jak połączyć Brady A5500 z linią produkcyjną?', answer: 'Z tyłu drukarki jest złącze zdalnego trybu PLC i port lampki stanu: czerwone światło oznacza błąd, żółte pracę, a zielone gotowość. Drukarka przyjmuje zadania przez USB i Ethernet. Systemy, które drukują w języku ZPL, mogą korzystać z emulacji ZPL Brady albo akcesorium [Brady Script Emulator for ZPL](/produkt/brady-m-script-adapt-int).' },
  ],
  compatibleAccessories: [
    'brady-a55-24-483',
    'brady-a55-1-483',
    'brady-a55-1-424',
    'brady-a55-1-425',
    'brady-a55-1-437',
    'brady-ssr6006',
    'brady-ssr4302',
    'brady-ssr6102',
  ],
  relatedAccessories: ['brady-wraptor-filter', 'brady-m-script-adapt-int', 'brady-pck-6'],
  relatedProducts: ['brady-i7100', 'brady-i6100', 'brady-i7500'],
  downloads: [
    { name: 'Karta katalogowa Brady A5500 (PL)', type: 'datasheet', url: '/downloads/brady-a5500-karta-katalogowa.pdf', size: '232 KB' },
    { name: 'Instrukcja obsługi Brady A5500 (PL)', type: 'manual', url: '/downloads/brady-a5500-instrukcja-obslugi.pdf', size: '11 MB' },
    { name: 'Brady Workstation — pobieranie programu', type: 'software', url: 'https://workstation.bradyid.com/pl/updates', size: 'Online' },
  ],
  createdAt: '2026-11-15',
  updatedAt: '2026-11-15',
}

// ---------------------------------------------------------------------------
// Akcesoria A5500
// ---------------------------------------------------------------------------

export const bradyA5500Akcesoria: Product[] = [
  {
    id: 'brady-wraptor-filter',
    slug: 'brady-wraptor-filter',
    name: 'Filtr wentylatora Brady WRAPTOR-FILTER do drukarki A5500 i Wraptor A6500',
    seoTitle: 'Brady WRAPTOR-FILTER — filtr wentylatora do A5500 i A6500',
    seoDescription: 'Zapasowe filtry wentylatora Brady WRAPTOR-FILTER do drukarki z aplikatorem flag A5500 oraz Wraptor i Wraptor A6500: 5 czarnych wkładek. Nr art. 60711.',
    shortDescription: 'Brady WRAPTOR-FILTER — zapasowe wkładki filtra wentylatora do drukarki z aplikatorem flag Brady A5500 oraz urządzeń Wraptor i Wraptor A6500. W opakowaniu jest 5 czarnych wkładek.',
    description: 'Brady WRAPTOR-FILTER to zapasowe wkładki filtra do wentylatora z tyłu drukarki A5500. Na filtrze zbiera się kurz z powietrza, które przepływa przez wentylator. Wentylator pracuje przez cały czas, gdy drukarka jest włączona, i chłodzi mechanizmy robocze.\n\nZebrany kurz trzeba regularnie usuwać. Aby wyczyścić filtr, zdejmuje się kratkę wentylatora i wyjmuje wkładkę. Wkładkę przedmuchuje się czystym powietrzem albo myje łagodnym detergentem i suszy. Potem zakłada się suchy filtr i zatrzaskuje kratkę. Zużytą wkładkę zastępuje się nową z opakowania.\n\nW opakowaniu jest 5 czarnych wkładek. Filtr pasuje do drukarki z aplikatorem flag A5500 oraz do urządzeń Wraptor i Wraptor A6500, które drukują i nakładają owijki.',
    categoryId: 'akcesoria',
    subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
    manufacturerId: 'brady',
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-bradyprinter-a5500-spare-replacement-filter-pid-60711',
    quoteOnly: true,
    availability: 'unavailable',
    images: ['/images/products/brady/wraptor-filter.png', '/images/products/brady-a5500-filtr-wentylatora.webp'],
    imageDescriptions: [
      'Czarna gąbkowa wkładka filtra wentylatora Brady WRAPTOR-FILTER',
      'Dłonie zdejmują kratkę z filtrem z wentylatora na tylnej ścianie drukarki Brady',
    ],
    tags: ['produkcja'],
    isNew: true,
    isBestseller: false,
    specifications: [
      { name: 'Part Number', value: 'WRAPTOR-FILTER' },
      { name: 'Numer artykułu Brady', value: '60711' },
      { name: 'Typ', value: 'Wkładka filtra wentylatora (część zamienna)' },
      { name: 'Liczba w opakowaniu', value: '5 szt.' },
      { name: 'Kolor', value: 'czarny' },
      { name: 'Czyszczenie', value: 'przedmuchanie czystym powietrzem albo mycie łagodnym detergentem i suszenie' },
      { name: 'Zgodne drukarki', value: 'A5500, Wraptor, Wraptor A6500' },
    ],
    applications: ['Wymiana zabrudzonego filtra wentylatora w drukarce A5500', 'Zapas filtrów do urządzeń Wraptor i Wraptor A6500'],
    compatibleAccessories: [],
    relatedAccessories: ['brady-pck-6'],
    relatedProducts: ['brady-a5500'],
    faq: [
      { question: 'Jak wyczyścić filtr wentylatora w Brady A5500?', answer: 'Należy zdjąć kratkę wentylatora z tyłu [Brady A5500](/produkt/brady-a5500) i wyjąć filtr. Filtr przedmuchuje się czystym powietrzem albo myje łagodnym detergentem i zostawia do wyschnięcia. Suchy filtr wkłada się z powrotem i zatrzaskuje kratkę.' },
    ],
    downloads: [],
    createdAt: '2026-11-15',
    updatedAt: '2026-11-15',
  },
]

// ---------------------------------------------------------------------------
// Materiały A55 i taśmy barwiące do A5500
// ---------------------------------------------------------------------------

const wspolneA55: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-a5500'],
  createdAt: '2026-11-15',
  updatedAt: '2026-11-15',
}

// [PN, rozmiar szer. × wys., zakres średnicy przewodu, liczba sztuk na rolce]
type Etykieta = [string, string, string, string]

const wariantyEtykiet = (wiersze: Etykieta[], opis: string) =>
  wiersze.map(([pn, rozmiar, przewod, sztuk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${opis} ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Ø przewodu': przewod, 'Na rolce': sztuk } as Record<string, string>,
    availability: 'unavailable' as const,
  }))

const ROZMIAR_TOOLTIP = (zakres: string) => `Szerokość i wysokość etykiety flagowej.\n\n${zakres}`
const PRZEWOD_TOOLTIP = (przyklad: string) => `Zakres średnicy przewodu razem z izolacją, dla którego A5500 nakłada ten rozmiar flagi.\n\n${przyklad}`
const ROLKA_TOOLTIP = (zakres: string) => `Liczba etykiet na jednej rolce.\n\n${zakres}`

// QuickFlag B-483 (cps-4961620): [PN, rozmiar, przewód, sztuk, pole nadruku, kształt]
const QUICKFLAG: [string, string, string, string, string, string][] = [
  ['A55-22-483', '12,70 × 44,45 mm', '1,52–4,83 mm', '3 100 szt.', '12,7 × 22,2 mm', 'trapezowy'],
  ['A55-26-483', '19,05 × 44,45 mm', '1,52–4,83 mm', '3 100 szt.', '19,1 × 22,2 mm', 'w kształcie V'],
  ['A55-15-483', '25,40 × 44,45 mm', '1,52–4,83 mm', '3 100 szt.', '25,4 × 22,2 mm', 'trapezowy'],
  ['A55-23-483', '25,40 × 50,80 mm', '1,52–6,35 mm', '2 800 szt.', '25,4 × 25,4 mm', 'trapezowy'],
  ['A55-18-483', '25,40 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.', '25,4 × 31,8 mm', 'trapezowy'],
  ['A55-24-483', '25,40 × 76,20 mm', '8,13–15,24 mm', '1 900 szt.', '25,4 × 38,1 mm', 'trapezowy'],
  ['A55-16-483', '38,10 × 44,45 mm', '1,52–4,83 mm', '3 100 szt.', '38,1 × 22,2 mm', 'trapezowy'],
  ['A55-19-483', '38,10 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.', '38,1 × 31,8 mm', 'trapezowy'],
  ['A55-27-483', '48,26 × 50,80 mm', '1,52–6,35 mm', '2 800 szt.', '48,3 × 25,4 mm', 'w kształcie V'],
  ['A55-17-483', '50,80 × 44,45 mm', '1,52–4,83 mm', '3 100 szt.', '50,8 × 22,2 mm', 'trapezowy'],
  ['A55-25-483', '50,80 × 50,80 mm', '1,52–6,35 mm', '2 800 szt.', '50,8 × 25,4 mm', 'w kształcie V'],
  ['A55-20-483', '50,80 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.', '50,8 × 31,8 mm', 'trapezowy'],
  ['A55-21-483', '50,80 × 76,20 mm', '12,70–15,24 mm', '1 900 szt.', '50,8 × 38,1 mm', 'trapezowy'],
]

export const bradyA55QuickFlag: Product = {
  ...wspolneA55,
  id: 'brady-a55-24-483',
  slug: 'brady-a55-24-483',
  name: 'Etykiety flagowe Brady QuickFlag A55 z poliestru B-483 do drukarki A5500',
  seoTitle: 'Brady QuickFlag A55 — flagi kablowe z poliestru do A5500',
  seoDescription: 'Flagi kablowe Brady QuickFlag z poliestru B-483 do drukarki z aplikatorem A5500: pole nadruku bez kleju i zwężany ogon. PN: A55-24-483, A55-15-483, A55-21-483.',
  shortDescription: 'Brady QuickFlag A55 — białe flagi kablowe z poliestru B-483 z polem nadruku bez kleju i zwężanym ogonem z klejem, w 13 rozmiarach. Do drukarki z aplikatorem Brady A5500.',
  description: 'QuickFlag to etykieta flagowa z dwiema strefami. Jednostronne pole nadruku jest wolne od kleju, natomiast ogon owijany wokół przewodu zwęża się i ma warstwę kleju. Taki kształt daje flagę bez rozjechanych krawędzi i bez odsłoniętego kleju. Nie trzeba wyrównywać brzegów, więc poprawek i zmarnowanych flag jest mniej.\n\nFlagi wykonano z białego poliestru B-483 z połyskiem, grubość wynosi 0,102 mm. Kauczukowy klej o bardzo dużej przyczepności trzyma na stałe, także na izolacji o fakturze i o niskiej energii powierzchniowej. Flaga pracuje w przedziale −40…120 °C i znosi ścieranie, paliwa, olej, wodę oraz promieniowanie UV. Ma uznanie UL (UL Recognised) i akceptację CSA (CSA Accepted).\n\nRodzina liczy 13 numerów: szerokość od 12,70 do 50,80 mm, wysokość od 44,45 do 76,20 mm, pole nadruku od 12,7 × 22,2 do 50,8 × 38,1 mm. Zakres przewodu określono dla każdego rozmiaru: najmniejsze flagi pasują od Ø 1,52 mm, największe do Ø 15,24 mm. Nadruk wykonuje się bezhalogenową taśmą R6000 — SSR6006 dla flag węższych niż 48 mm, SSR6002 dla dwóch najszerszych formatów (48,26 oraz 50,80 mm).',
  sameAs: 'https://www.brady.eu/labels/quickflag-tapered-wire-cable-flag-labels-for-a5500-printer-cps-4961620',
  images: ['/images/products/brady/a55-24-483.png', '/images/products/brady/a55-15-483-flagi.png'],
  imageDescriptions: [
    'Rolka Brady A55-24-483 QuickFlag na szpuli z wysuniętym paskiem białych flag kablowych',
    'Pasek flag QuickFlag A55-15-483 z polem nadruku i zwężanym ogonem z klejem',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety flagowe na przewody ze zwężanym ogonem z klejem, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-483 (poliester), nazwa handlowa ToughBond' },
    { name: 'Budowa flagi', value: 'jednostronne pole nadruku bez kleju; zwężany ogon z klejem owijany wokół przewodu' },
    { name: 'Wykończenie', value: 'błyszczące, białe' },
    { name: 'Klej', value: 'trwały, kauczukowy, o bardzo dużej przyczepności; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, paliwa, olej, rozpuszczalniki, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 50,80 mm, wysokość od 44,45 do 76,20 mm' },
    { name: 'Pole nadruku', value: 'od 12,7 × 22,2 do 50,8 × 38,1 mm, zależnie od rozmiaru' },
    { name: 'Kształt flagi', value: 'trapezowy; A55-25-483, A55-26-483 i A55-27-483 w kształcie V' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk', value: 'od 1 900 do 3 100 w opakowaniu' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 bezhalogenowa: SSR6006 (40 mm) do etykiet o szerokości do 38,10 mm; SSR6002 (60 mm) do etykiet 48,26 i 50,80 mm' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: QUICKFLAG.map(([pn, rozmiar, przewod, sztuk, pole, ksztalt]) => ({
    partNumber: pn,
    name: `Brady ${pn} QuickFlag — flaga kablowa ${rozmiar}${ksztalt === 'w kształcie V' ? ', w kształcie V' : ''}`,
    attributes: { Rozmiar: rozmiar, Nadruk: pole, 'Ø przewodu': przewod, Sztuk: sztuk } as Record<string, string>,
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: ROZMIAR_TOOLTIP('QuickFlag ma od 12,70 × 44,45 do 50,80 × 76,20 mm.'),
    Nadruk: 'Wymiary pola nadruku, czyli części flagi bez kleju, na której A5500 drukuje tekst i kody.\n\nNajmniejsze pole ma 12,7 × 22,2 mm, największe 50,8 × 38,1 mm.',
    'Ø przewodu': PRZEWOD_TOOLTIP('Np. A55-15-483 pasuje do przewodów od 1,52 do 4,83 mm, a A55-24-483 do przewodów od 8,13 do 15,24 mm.'),
    Sztuk: 'Liczba flag QuickFlag w opakowaniu.\n\nOd 1 900 do 3 100 sztuk, zależnie od rozmiaru.',
  },
  faq: [
    { question: 'Czym QuickFlag różni się od zwykłej etykiety flagowej A55?', answer: 'Pole nadruku QuickFlag nie ma kleju, a klej jest tylko na zwężanym ogonie owijanym wokół przewodu. Brzegi flagi nie muszą się pokrywać, więc nie ma rozjechanych krawędzi ani odsłoniętego kleju. Zwykłe [etykiety A55-483](/produkt/brady-a55-1-483) są prostokątne i mają klej na całej powierzchni.' },
    { question: 'Którą taśmą drukuje się flagi QuickFlag?', answer: 'Bezhalogenową taśmą żywiczną R6000: [SSR6006](/produkt/brady-ssr6006) o szerokości 40 mm do flag do 38,10 mm i SSR6002 o szerokości 60 mm do flag 48,26 i 50,80 mm. Flagi drukuje i nakłada [Brady A5500](/produkt/brady-a5500).' },
  ],
  applications: ['Flagi na przewody w wiązkach kablowych', 'Oznaczanie kabli teleinformatycznych i elektrycznych', 'Kody kreskowe na przewodach'],
}

// Poliester B-483 (cps-4326125)
const A55_483: Etykieta[] = [
  ['A55-10-483', '12,70 × 38,10 mm', '1,52–4,83 mm', '3 600 szt.'],
  ['A55-14-483', '19,05 × 38,10 mm', '1,52–4,83 mm', '3 600 szt.'],
  ['A55-1-483', '25,40 × 38,10 mm', '1,52–4,83 mm', '3 600 szt.'],
  ['A55-11-483', '25,40 × 50,80 mm', '1,52–6,35 mm', '2 800 szt.'],
  ['A55-4-483', '25,40 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.'],
  ['A55-12-483', '25,40 × 76,20 mm', '8,13–15,24 mm', '1 900 szt.'],
  ['A55-2-483', '38,10 × 38,10 mm', '1,52–4,83 mm', '3 600 szt.'],
  ['A55-5-483', '38,10 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.'],
  ['A55-3-483', '50,80 × 38,10 mm', '1,52–4,83 mm', '3 600 szt.'],
  ['A55-13-483', '50,80 × 50,80 mm', '1,52–6,35 mm', '2 800 szt.'],
  ['A55-6-483', '50,80 × 63,50 mm', '3,30–12,70 mm', '2 200 szt.'],
  ['A55-7-483', '50,80 × 76,20 mm', '12,70–15,24 mm', '1 900 szt.'],
]

export const bradyA55Poliester: Product = {
  ...wspolneA55,
  id: 'brady-a55-1-483',
  slug: 'brady-a55-1-483',
  name: 'Etykiety flagowe Brady A55 z poliestru B-483 do drukarki A5500',
  seoTitle: 'Brady A55-483 — poliestrowe etykiety flagowe do drukarki A5500',
  seoDescription: 'Poliestrowe etykiety flagowe Brady B-483 do drukarki z aplikatorem A5500: klej ToughBond, od −40 do 120 °C, 12 rozmiarów. PN: A55-1-483, A55-4-483, A55-7-483.',
  shortDescription: 'Brady A55-483 — białe, błyszczące etykiety flagowe z poliestru B-483 z klejem ToughBond, w 12 rozmiarach od 12,70 × 38,10 do 50,80 × 76,20 mm. Do drukarki z aplikatorem Brady A5500.',
  description: 'Seria A55-483 to prostokątne etykiety flagowe z błyszczącego poliestru B-483 (0,102 mm). Klej ToughBond na bazie kauczuku przylega trwale do gładkich, szorstkich i trudnych powierzchni o niskiej energii. Poliester wytrzymuje kontakt z chemikaliami, wilgoć, promienie UV, warunki zewnętrzne, ścieranie i korozję. Etykiety wytrzymują od −40 do 120 °C.\n\nRolka A55-4-483 (25,40 × 63,50 mm) wchodzi w skład zestawu drukarki A5500. Seria ma 12 rozmiarów, od 12,70 × 38,10 do 50,80 × 76,20 mm, po 1 900–3 600 etykiet na rolce. Najniższe flagi obejmują przewody od 1,52 mm, a najwyższe do 15,24 mm. Etykiety są uznane przez UL (UL Recognised) i zaakceptowane przez CSA.\n\nDo nadruku służy bezhalogenowa taśma żywiczna R6000. Taśma SSR6006 (40 mm) wystarcza dla etykiet 12,70–38,10 mm, a SSR6002 (60 mm) dla etykiet szerokich na 50,80 mm. Typowe zastosowania to oznaczenia elektryczne i teleinformatyczne, kody kreskowe, ewidencja sprzętu i inspekcje.',
  sameAs: 'https://www.brady.eu/labels/polyester-thermal-transfer-printable-labels-for-bradyprinter-a5500-cps-4326125',
  images: ['/images/products/brady/a55-4-483.png', '/images/products/brady/a55-4-483-pasek.png'],
  imageDescriptions: [
    'Rolka Brady A55-4-483 na szpuli z wysuniętym paskiem białych poliestrowych etykiet flagowych',
    'Pasek etykiet A55-4-483 25,40 × 63,50 mm z wycięciami na brzegu podkładu',
  ],
  specifications: [
    { name: 'Typ', value: 'Prostokątne etykiety flagowe na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-483 (poliester), nazwa handlowa ToughBond' },
    { name: 'Wykończenie', value: 'błyszczące, białe' },
    { name: 'Klej', value: 'trwały, kauczukowy, o dużej przyczepności; do powierzchni gładkich, chropowatych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 120 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 50,80 mm, wysokość od 38,10 do 76,20 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 1 900 do 3 600' },
    { name: 'Normy', value: 'UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'R6000 bezhalogenowa: SSR6006 (40 mm) do etykiet o szerokości do 38,10 mm; SSR6002 (60 mm) do etykiet 50,80 mm' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: wariantyEtykiet(A55_483, 'poliestrowa etykieta flagowa'),
  variantAttributeTooltips: {
    Rozmiar: ROZMIAR_TOOLTIP('W tej serii od 12,70 × 38,10 do 50,80 × 76,20 mm.'),
    'Ø przewodu': PRZEWOD_TOOLTIP('Etykiety o wysokości 38,10 mm pasują do przewodów od 1,52 do 4,83 mm, a A55-7-483 do przewodów od 12,70 do 15,24 mm.'),
    'Na rolce': ROLKA_TOOLTIP('Od 1 900 do 3 600 sztuk, zależnie od rozmiaru.'),
  },
  faq: [
    { question: 'Która etykieta A55-483 jest w zestawie z drukarką A5500?', answer: 'Rolka A55-4-483 o wymiarach 25,40 × 63,50 mm, z 2 200 etykietami. Pasuje do przewodów o średnicy od 3,30 do 12,70 mm. Razem z nią w opakowaniu [Brady A5500](/produkt/brady-a5500) jest taśma SSR6002.' },
    { question: 'Jaką taśmą drukuje się etykiety A55-483?', answer: 'Bezhalogenową taśmą żywiczną R6000. Do etykiet o szerokości do 38,10 mm pasuje [SSR6006](/produkt/brady-ssr6006) (40 mm), a do etykiet 50,80 mm SSR6002 (60 mm).' },
  ],
  applications: ['Oznaczenia elektryczne i teleinformatyczne', 'Kody kreskowe i ewidencja sprzętu', 'Oznaczenia przewodów narażonych na UV i warunki zewnętrzne'],
}

// Papier B-424 (cps-4326122)
const A55_424: Etykieta[] = [
  ['A55-1-424', '25,40 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-11-424', '25,40 × 50,80 mm', '1,52–8,13 mm', '3 000 szt.'],
  ['A55-4-424', '25,40 × 63,50 mm', '3,30–8,13 mm', '2 400 szt.'],
  ['A55-12-424', '25,40 × 76,20 mm', '8,13–15,24 mm', '2 000 szt.'],
  ['A55-2-424', '38,10 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-5-424', '38,10 × 63,50 mm', '3,30–4,83 mm', '2 400 szt.'],
  ['A55-3-424', '50,80 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-13-424', '50,80 × 50,80 mm', '1,52–6,35 mm', '3 000 szt.'],
  ['A55-6-424', '50,80 × 63,50 mm', '3,30–9,65 mm', '2 400 szt.'],
  ['A55-7-424', '50,80 × 76,20 mm', '8,13–15,24 mm', '2 000 szt.'],
]

export const bradyA55Papier: Product = {
  ...wspolneA55,
  id: 'brady-a55-1-424',
  slug: 'brady-a55-1-424',
  name: 'Papierowe etykiety flagowe Brady A55 B-424 do drukarki A5500',
  seoTitle: 'Brady A55-424 — papierowe etykiety flagowe do drukarki A5500',
  seoDescription: 'Papierowe etykiety flagowe Brady B-424 do drukarki z aplikatorem A5500: matowe, klej kauczukowy, do zamrażarki, 10 rozmiarów. PN: A55-1-424, A55-4-424.',
  shortDescription: 'Brady A55-424 — matowe papierowe etykiety flagowe B-424 w 10 rozmiarach, od 25,40 × 38,10 do 50,80 × 76,20 mm, po 2 000–3 800 sztuk na rolce. Do drukarki z aplikatorem Brady A5500.',
  description: 'Etykiety A55-424 powstają z białego, matowego papieru B-424 o grubości 0,089 mm. Klej kauczukowy z linii ToughBond łączy się na stałe z gładką izolacją przewodu. Papier wytrzymuje pracę w zamrażarce, a jego zakres temperatury sięga od −40 do 180 °C. Wykończenie jest matowe, a materiał jest przeznaczony do gładkich powierzchni.\n\nW ofercie jest 10 rozmiarów: szerokość 25,40, 38,10 lub 50,80 mm i wysokość od 38,10 do 76,20 mm. Rolka mieści od 2 000 do 3 800 flag. Zakres średnicy przewodu zależy od wysokości etykiety: niskie flagi pasują od 1,52 mm, a wysokie A55-7-424 i A55-12-424 do 15,24 mm.\n\nPapier B-424 zadrukowuje się taśmą woskowo-żywiczną R4300 lub R6100. Rolki o szerokości 25,40 lub 38,10 mm można drukować taśmą SSR4306 (40 mm). Taśmy 60 mm, SSR4302 i SSR6102, obsługują każdy rozmiar. Na flagach drukuje się kody kreskowe, opisy elektryczne i oznaczenia ogólne.',
  sameAs: 'https://www.brady.eu/labels/paper-thermal-transfer-printable-labels-for-bradyprinter-a5500-cps-4326122',
  images: ['/images/products/brady/a55-2-424.png', '/images/products/brady/a55-2-424-pasek.png'],
  imageDescriptions: [
    'Szpula z rolką białych etykiet flagowych Brady A55 i wysuniętym paskiem etykiet 38,10 × 38,10 mm',
    'Pasek kwadratowych etykiet flagowych A55 38,10 × 38,10 mm na podkładzie z wycięciami',
  ],
  specifications: [
    { name: 'Typ', value: 'Prostokątne etykiety flagowe na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-424 (papier), nazwa handlowa ToughBond' },
    { name: 'Wykończenie', value: 'matowe, białe' },
    { name: 'Klej', value: 'trwały, kauczukowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,089 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 180 °C; nadaje się do zamrażarki' },
    { name: 'Wymiary etykiety', value: 'szerokość 25,40, 38,10 lub 50,80 mm; wysokość od 38,10 do 76,20 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 2 000 do 3 800' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: SSR4306 (40 mm) do etykiet o szerokości do 38,10 mm, SSR4302 (60 mm) do wszystkich; R6100: SSR6102 (60 mm)' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: wariantyEtykiet(A55_424, 'papierowa etykieta flagowa'),
  variantAttributeTooltips: {
    Rozmiar: ROZMIAR_TOOLTIP('Papier B-424 ma rozmiary od 25,40 × 38,10 do 50,80 × 76,20 mm.'),
    'Ø przewodu': PRZEWOD_TOOLTIP('A55-1-424 pasuje do przewodów od 1,52 do 4,83 mm, a A55-12-424 do przewodów od 8,13 do 15,24 mm.'),
    'Na rolce': ROLKA_TOOLTIP('Papier B-424: od 2 000 do 3 800 sztuk.'),
  },
  faq: [
    { question: 'Jaką taśmę wybrać do papierowych etykiet A55-424?', answer: 'Taśmę woskowo-żywiczną [R4300](/produkt/brady-ssr4302) albo [R6100](/produkt/brady-ssr6102). Do etykiet o szerokości 50,80 mm potrzebna jest taśma 60 mm: SSR4302 albo SSR6102. Etykiety do 38,10 mm szerokości można drukować także węższą taśmą SSR4306.' },
    { question: 'Czy etykiety A55-424 nadają się do niskich temperatur?', answer: 'Tak. Papier B-424 pracuje w zakresie od −40 do 180 °C i nadaje się do zamrażarki. Klej kauczukowy jest przeznaczony do gładkich powierzchni.' },
  ],
  applications: ['Kody kreskowe na przewodach', 'Oznaczenia elektryczne', 'Ogólne oznaczanie kabli'],
}

// Polipropylen B-425 (cps-4326126). A55-2-425: zakres przewodu jak w pozostałych etykietach o wysokości 38,10 mm.
const A55_425: Etykieta[] = [
  ['A55-1-425', '25,40 × 38,10 mm', '1,52–4,83 mm', '3 300 szt.'],
  ['A55-11-425', '25,40 × 50,80 mm', '1,52–6,35 mm', '2 500 szt.'],
  ['A55-4-425', '25,40 × 63,50 mm', '3,30–9,65 mm', '2 000 szt.'],
  ['A55-12-425', '25,40 × 76,20 mm', '8,13–15,24 mm', '1 700 szt.'],
  ['A55-2-425', '38,10 × 38,10 mm', '1,52–4,83 mm', '3 300 szt.'],
  ['A55-5-425', '38,10 × 63,50 mm', '3,30–8,13 mm', '2 000 szt.'],
  ['A55-3-425', '50,80 × 38,10 mm', '1,52–4,83 mm', '3 300 szt.'],
  ['A55-13-425', '50,80 × 50,80 mm', '1,52–8,13 mm', '2 500 szt.'],
  ['A55-6-425', '50,80 × 63,50 mm', '3,30–8,13 mm', '2 000 szt.'],
  ['A55-7-425', '50,80 × 76,20 mm', '8,13–12,70 mm', '1 700 szt.'],
]

export const bradyA55Polipropylen: Product = {
  ...wspolneA55,
  id: 'brady-a55-1-425',
  slug: 'brady-a55-1-425',
  name: 'Etykiety flagowe Brady A55 z polipropylenu B-425 do drukarki A5500',
  seoTitle: 'Brady A55-425 — polipropylenowe etykiety flagowe do A5500',
  seoDescription: 'Polipropylenowe etykiety flagowe Brady B-425 do drukarki z aplikatorem A5500: bezhalogenowe, od −70 do 130 °C, odporne na paliwa. PN: A55-1-425, A55-7-425.',
  shortDescription: 'Brady A55-425 — matowe etykiety flagowe z bezhalogenowego polipropylenu B-425 z klejem akrylowym, odporne na paliwa i oleje, w 10 rozmiarach. Do drukarki z aplikatorem Brady A5500.',
  description: 'A55-425 to flagi z białego, matowego polipropylenu B-425 (0,1143 mm). Akrylowy klej zapewnia trwałe połączenie z gładkimi powierzchniami. Materiał jest wolny od halogenów zgodnie z normą DIN VDE 0472-815 i spełnia wymagania UL Recognised i CSA Accepted. Etykieta znosi paliwa, oleje, rozpuszczalniki i chemikalia, a także ścieranie i wilgoć. Folia działa w zakresie −70…130 °C, także w zamrażarce.\n\nRodzina obejmuje dziesięć formatów: najmniejszy 25,40 × 38,10 mm, największy 50,80 × 76,20 mm; na rolce jest od 1 700 do 3 300 sztuk. Flagi wysokie na 38,10 mm pasują do przewodów od 1,52 do 4,83 mm, a A55-12-425 (wysokość 76,20 mm) obejmuje przewody 8,13–15,24 mm.\n\nDo nadruku stosuje się taśmę R4300. Węższa SSR4306 wystarcza do flag węższych niż 50 mm, a szersza SSR4302 również do 50,80 mm. Flagi oznaczają przewody i kable, sprzęt teleinformatyczny, komponenty oraz zasoby w ewidencji.',
  sameAs: 'https://www.brady.eu/labels/polypropylene-thermal-transfer-printable-labels-for-bradyprinter-a5500-cps-4326126',
  images: ['/images/products/brady/a55-1-425.png', '/images/products/brady/a55-1-425-pasek.png'],
  imageDescriptions: [
    'Rolka etykiet flagowych Brady A55 25,40 × 38,10 mm na szpuli z gwiaździstą piastą',
    'Pasek białych etykiet flagowych A55 25,40 × 38,10 mm na podkładzie z wycięciami',
  ],
  specifications: [
    { name: 'Typ', value: 'Prostokątne etykiety flagowe na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-425 (polipropylen)' },
    { name: 'Wykończenie', value: 'matowe, białe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,1143 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 130 °C; nadaje się do zamrażarki' },
    { name: 'Odporność', value: 'paliwa, oleje, rozpuszczalniki, chemikalia, ścieranie, wilgoć, niska temperatura' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,40 do 50,80 mm, wysokość od 38,10 do 76,20 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 1 700 do 3 300' },
    { name: 'Normy', value: 'bezhalogenowy (DIN VDE 0472 część 815), UL Recognised, CSA Accepted' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: SSR4306 (40 mm) do etykiet o szerokości do 38,10 mm, SSR4302 (60 mm) do wszystkich' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: wariantyEtykiet(A55_425, 'polipropylenowa etykieta flagowa'),
  variantAttributeTooltips: {
    Rozmiar: ROZMIAR_TOOLTIP('Polipropylen B-425 występuje w rozmiarach od 25,40 × 38,10 do 50,80 × 76,20 mm.'),
    'Ø przewodu': PRZEWOD_TOOLTIP('A55-1-425 obejmuje przewody od 1,52 do 4,83 mm, a A55-7-425 przewody od 8,13 do 12,70 mm.'),
    'Na rolce': ROLKA_TOOLTIP('Polipropylen B-425: od 1 700 do 3 300 sztuk.'),
  },
  faq: [
    { question: 'Czy etykiety A55-425 są bezhalogenowe?', answer: 'Tak. Polipropylen B-425 jest bezhalogenowy według DIN VDE 0472 część 815. Etykiety drukuje się bezhalogenową taśmą [R4300](/produkt/brady-ssr4302).' },
    { question: 'Kiedy wybrać polipropylen A55-425 zamiast papieru A55-424?', answer: 'Gdy flaga ma kontakt z paliwem, olejem, rozpuszczalnikami lub chemikaliami albo pracuje w temperaturze do −70 °C. Polipropylen B-425 jest odporny na te substancje i pracuje od −70 °C, a papier B-424 od −40 °C.' },
  ],
  applications: ['Oznaczanie przewodów narażonych na paliwa i oleje', 'Flagi bezhalogenowe w instalacjach elektrycznych', 'Ewidencja komponentów i zasobów'],
}

// Polifluorek winylu B-437 (cps-4326124)
const A55_437: Etykieta[] = [
  ['A55-1-437', '25,40 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-11-437', '25,40 × 50,80 mm', '1,52–6,35 mm', '3 000 szt.'],
  ['A55-4-437', '25,40 × 63,50 mm', '3,30–12,70 mm', '2 400 szt.'],
  ['A55-12-437', '25,40 × 76,20 mm', '8,13–15,24 mm', '2 000 szt.'],
  ['A55-2-437', '38,10 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-5-437', '38,10 × 63,50 mm', '3,30–9,65 mm', '2 400 szt.'],
  ['A55-3-437', '50,80 × 38,10 mm', '1,52–4,83 mm', '3 800 szt.'],
  ['A55-13-437', '50,80 × 50,80 mm', '1,52–8,13 mm', '3 000 szt.'],
  ['A55-6-437', '50,80 × 63,50 mm', '3,30–9,65 mm', '2 400 szt.'],
  ['A55-7-437', '50,80 × 76,20 mm', '8,13–15,24 mm', '2 000 szt.'],
]

export const bradyA55Pvf: Product = {
  ...wspolneA55,
  id: 'brady-a55-1-437',
  slug: 'brady-a55-1-437',
  name: 'Etykiety flagowe Brady A55 z polifluorku winylu B-437 do drukarki A5500',
  seoTitle: 'Brady A55-437 — etykiety flagowe z PVF do drukarki A5500',
  seoDescription: 'Etykiety flagowe Brady B-437 z polifluorku winylu (PVF) do drukarki z aplikatorem A5500: samogasnące, MIL-M-87958, od −70 do 135 °C. PN: A55-1-437, A55-7-437.',
  shortDescription: 'Brady A55-437 — samogasnące etykiety flagowe z polifluorku winylu B-437 zgodne z MIL-M-87958, w 10 rozmiarach od 25,40 × 38,10 do 50,80 × 76,20 mm. Do drukarki z aplikatorem Brady A5500.',
  description: 'Seria A55-437 wykorzystuje folię z polifluorku winylu (PVF) B-437 o grubości 0,091 mm. Folia jest trudnopalna i samogasnąca. Oznaczniki spełniają specyfikację MIL-M-87958, która dotyczy samoprzylepnego znakowania przewodów i kabli. Akrylowy klej o trwałym wiązaniu trzyma się zarówno gładkich, jak i chropowatych podłoży. Zakres temperatury pracy to −70…135 °C.\n\nDostępnych jest 10 rozmiarów; największy, A55-7-437, ma 50,80 × 76,20 mm. Rolka liczy 2 000–3 800 etykiet. Zakres przewodów zależy od rozmiaru, np. A55-4-437 obejmuje Ø 3,30–12,70 mm. Materiał zawiera substancję z listy kandydackiej REACH (SVHC).\n\nNadruk wykonuje się taśmą woskowo-żywiczną R4300. SSR4306 (40 mm) drukuje na wszystkich rozmiarach poza szerokością 50,80 mm, którą obsługuje SSR4302 (60 mm). Etykiety B-437 oznaczają przewody, płytki drukowane, komponenty i urządzenia elektryczne.',
  sameAs: 'https://www.brady.eu/labels/polyvinylfluoride-thermal-transfer-printable-labels-for-bradyprinter-a5500-cps-4326124',
  images: ['/images/products/brady/a55-13-437.png', '/images/products/brady/a55-13-437-pasek.png'],
  imageDescriptions: [
    'Rolka Brady A55-13-437 z kwadratowymi etykietami flagowymi 50,80 × 50,80 mm na szpuli',
    'Pasek etykiet A55-13-437 50,80 × 50,80 mm z wycięciami na górnym brzegu podkładu',
  ],
  specifications: [
    { name: 'Typ', value: 'Prostokątne etykiety flagowe na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-437 (polifluorek winylu, PVF)' },
    { name: 'Właściwości', value: 'trudnopalny, samogasnący' },
    { name: 'Wykończenie', value: 'matowe, białe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,091 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 135 °C' },
    { name: 'Wymiary etykiety', value: 'szerokość od 25,40 do 50,80 mm, wysokość od 38,10 do 76,20 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 2 000 do 3 800' },
    { name: 'Normy', value: 'MIL-M-87958 (samoprzylepne oznaczniki przewodów i kabli)' },
    { name: 'REACH', value: 'zawiera substancję z listy kandydackiej (SVHC)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: SSR4306 (40 mm) do etykiet o szerokości do 38,10 mm, SSR4302 (60 mm) do wszystkich' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: wariantyEtykiet(A55_437, 'etykieta flagowa z PVF'),
  variantAttributeTooltips: {
    Rozmiar: ROZMIAR_TOOLTIP('Folia PVF B-437 ma 10 rozmiarów, od 25,40 × 38,10 do 50,80 × 76,20 mm.'),
    'Ø przewodu': PRZEWOD_TOOLTIP('A55-4-437 obejmuje przewody od 3,30 do 12,70 mm, a A55-12-437 przewody od 8,13 do 15,24 mm.'),
    'Na rolce': ROLKA_TOOLTIP('Folia PVF B-437: od 2 000 do 3 800 sztuk.'),
  },
  faq: [
    { question: 'Do czego służą etykiety flagowe A55-437 z PVF?', answer: 'Do oznaczania przewodów, płytek drukowanych, komponentów i urządzeń elektrycznych, gdy potrzebny jest materiał samogasnący. Etykiety spełniają specyfikację MIL-M-87958 i pracują od −70 do 135 °C.' },
    { question: 'Jaką taśmą drukuje się etykiety A55-437?', answer: 'Taśmą woskowo-żywiczną [R4300](/produkt/brady-ssr4302): SSR4306 do etykiet o szerokości do 38,10 mm albo SSR4302 do wszystkich rozmiarów. Etykiety drukuje i nakłada [Brady A5500](/produkt/brady-a5500).' },
  ],
  applications: ['Samogasnące oznaczenia przewodów', 'Oznaczanie płytek drukowanych i komponentów', 'Oznaczenia zgodne z MIL-M-87958'],
}

// ---------------------------------------------------------------------------
// Taśmy barwiące do A5500 (rolka 300 m, gilza 21,08 mm)
// ---------------------------------------------------------------------------

const wariantTasmy = (pn: string, szer: string, opis: string) => ({
  partNumber: pn,
  name: `Brady ${pn} — ${opis} ${szer} mm × 300 m`,
  attributes: { Rozmiar: `${szer} mm × 300 m` } as Record<string, string>,
  availability: 'unavailable' as const,
})

const TASMA_ROZMIAR_TOOLTIP = (opis: string) => `Szerokość taśmy barwiącej i długość nawiniętej taśmy.\n\n${opis}`

export const bradySsrR4300: Product = {
  ...wspolneA55,
  id: 'brady-ssr4302',
  slug: 'brady-ssr4302',
  name: 'Taśma barwiąca Brady R4300 SSR4302 i SSR4306 do drukarki A5500',
  seoTitle: 'Brady SSR4302, SSR4306 — taśma R4300 do drukarki A5500',
  seoDescription: 'Czarna taśma barwiąca Brady R4300 do drukarki A5500: wosk z żywicą, bezhalogenowa, 40 lub 60 mm × 300 m, do etykiet B-424, B-425, B-437. PN: SSR4302, SSR4306.',
  shortDescription: 'Brady R4300 (SSR4302, SSR4306) — czarna, bezhalogenowa taśma barwiąca woskowo-żywiczna, 300 m, szerokość 40 lub 60 mm. Do drukarki z aplikatorem Brady A5500.',
  description: 'Taśma R4300 do drukarki A5500 ma formułę woskowo-żywiczną i daje czarny nadruk. Jest bezhalogenowa, a grubość warstwy wynosi 0,0045 mm. Rolka zawiera 300 m taśmy na gilzie o średnicy 21,08 mm, z farbą po zewnętrznej stronie.\n\nSą dwie szerokości. Węższa wersja, SSR4306, ma 40 mm i pasuje do etykiet A55 do 38,10 mm. Wersja SSR4302 ma 60 mm i nadaje się również do etykiet 50,80 mm. Taśmę zaleca się do papieru B-424, polipropylenu B-425 i polifluorku winylu B-437. Zakres temperatury stosowania to 5–35 °C.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-4300-series-thermal-transfer-printer-ribbon-for-bradyprinter-a5500-cps-4398887',
  images: ['/images/products/brady/ssr6002.png', '/images/products/brady/ssr6006.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady 60 mm do drukarki A5500 z rozwiniętym pasem taśmy',
    'Węższa rolka czarnej taśmy barwiącej Brady 40 mm do drukarki A5500',
  ],
  specifications: [
    { name: 'Typ', value: 'Taśma barwiąca do druku termotransferowego' },
    { name: 'Seria', value: 'R4300' },
    { name: 'Formuła taśmy', value: 'woskowo-żywiczna' },
    { name: 'Kolor', value: 'czarny' },
    { name: 'Szerokość taśmy', value: '40 mm (SSR4306) lub 60 mm (SSR4302)' },
    { name: 'Długość taśmy', value: '300 m' },
    { name: 'Grubość', value: '0,0045 mm' },
    { name: 'Właściwości', value: 'bezhalogenowa' },
    { name: 'Warstwa barwiąca', value: 'na zewnątrz rolki' },
    { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
    { name: 'Zalecane materiały', value: 'etykiety A55 z papieru B-424, polipropylenu B-425 i polifluorku winylu B-437' },
    { name: 'Gilza', value: '21,08 mm, otwarta' },
    { name: 'Zgodne drukarki', value: 'A5500' },
    { name: 'Numery artykułów Brady', value: 'SSR4302: 150706; SSR4306: 150707' },
  ],
  variants: [
    wariantTasmy('SSR4306', '40', 'czarna taśma barwiąca R4300'),
    wariantTasmy('SSR4302', '60', 'czarna taśma barwiąca R4300'),
  ],
  variantAttributeTooltips: {
    Rozmiar: TASMA_ROZMIAR_TOOLTIP('Taśma 40 mm obsługuje etykiety A55 o szerokości do 38,10 mm, a taśma 60 mm wszystkie rozmiary do 50,80 mm.'),
  },
  faq: [
    { question: 'Którą szerokość taśmy R4300 wybrać do A5500?', answer: 'SSR4306 (40 mm) wystarcza do etykiet o szerokości do 38,10 mm. Do etykiet 50,80 mm potrzebna jest SSR4302 (60 mm), która obsługuje też węższe rozmiary.' },
    { question: 'Do jakich etykiet A55 pasuje taśma R4300?', answer: 'Do papierowych [A55-424](/produkt/brady-a55-1-424), polipropylenowych [A55-425](/produkt/brady-a55-1-425) i etykiet z PVF [A55-437](/produkt/brady-a55-1-437). Do poliestru B-483 zaleca się taśmę R6000 HF.' },
  ],
  applications: ['Nadruk na papierowych etykietach flagowych', 'Nadruk na flagach z polipropylenu i PVF'],
}

export const bradySsrR6000: Product = {
  ...wspolneA55,
  id: 'brady-ssr6006',
  slug: 'brady-ssr6006',
  name: 'Taśma barwiąca Brady R6000 HF SSR6006 i SSR6002 do drukarki A5500',
  seoTitle: 'Brady SSR6006, SSR6002 — taśma R6000 HF do drukarki A5500',
  seoDescription: 'Czarna żywiczna taśma barwiąca Brady R6000 HF do drukarki A5500: bezhalogenowa, 40 lub 60 mm × 300 m, do poliestru B-483 i QuickFlag. PN: SSR6006, SSR6002.',
  shortDescription: 'Brady R6000 HF (SSR6006, SSR6002) — czarna, bezhalogenowa taśma żywiczna, 300 m, szerokość 40 lub 60 mm. Do poliestrowych etykiet A55-483 i flag QuickFlag w drukarce Brady A5500.',
  description: 'R6000 HF to żywiczna taśma barwiąca bez halogenów, przeznaczona do poliestru B-483 w drukarce A5500. Pasuje do prostokątnych etykiet A55-483 i do flag QuickFlag. Nośnik taśmy jest poliestrowy, a całość ma grubość 0,008 mm. Wydruk ma kolor czarny.\n\nWęższa rolka SSR6006 (40 mm) obsługuje flagi do 38,10 mm, a szersza SSR6002 (60 mm) flagi 48,26 i 50,80 mm. SSR6002 trafia też do opakowania drukarki A5500-EU. Każda rolka ma 300 m, gilzę 21,08 mm i farbę na zewnątrz. Zalecana temperatura stosowania: 5–35 °C.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-6000-series-halogen-free-thermal-transfer-printer-ribbon-for-bradyprinter-a5500-cps-4398890',
  images: ['/images/products/brady/ssr6006.png', '/images/products/brady/ssr6002.png'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady SSR6006 o szerokości 40 mm z odwiniętym pasem',
    'Rolka czarnej taśmy barwiącej Brady SSR6002 o szerokości 60 mm z rozwiniętym pasem',
  ],
  specifications: [
    { name: 'Typ', value: 'Taśma barwiąca do druku termotransferowego' },
    { name: 'Seria', value: 'R6000 HF (bezhalogenowa)' },
    { name: 'Formuła taśmy', value: 'żywiczna' },
    { name: 'Typ materiału', value: 'poliester (nośnik taśmy)' },
    { name: 'Kolor', value: 'czarny' },
    { name: 'Szerokość taśmy', value: '40 mm (SSR6006) lub 60 mm (SSR6002)' },
    { name: 'Długość taśmy', value: '300 m' },
    { name: 'Grubość', value: '0,008 mm' },
    { name: 'Właściwości', value: 'bezhalogenowa' },
    { name: 'Warstwa barwiąca', value: 'na zewnątrz rolki' },
    { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
    { name: 'Zalecane materiały', value: 'poliester B-483: etykiety A55-483 i flagi QuickFlag' },
    { name: 'Gilza', value: '21,08 mm, otwarta' },
    { name: 'Zgodne drukarki', value: 'A5500' },
    { name: 'Numery artykułów Brady', value: 'SSR6002: 150709; SSR6006: 150710' },
  ],
  variants: [
    wariantTasmy('SSR6006', '40', 'czarna taśma barwiąca R6000 HF'),
    wariantTasmy('SSR6002', '60', 'czarna taśma barwiąca R6000 HF'),
  ],
  variantAttributeTooltips: {
    Rozmiar: TASMA_ROZMIAR_TOOLTIP('SSR6006 (40 mm) — etykiety B-483 do 38,10 mm szerokości. SSR6002 (60 mm) — etykiety 48,26 i 50,80 mm.'),
  },
  faq: [
    { question: 'Która taśma jest w zestawie z Brady A5500?', answer: 'Rolka SSR6002 (60 mm × 300 m) z serii R6000 HF. Razem z nią w opakowaniu [Brady A5500](/produkt/brady-a5500) jest rolka etykiet A55-4-483.' },
    { question: 'Do jakich etykiet służy taśma R6000 HF?', answer: 'Do etykiet z poliestru B-483: prostokątnych [A55-483](/produkt/brady-a55-1-483) i flag [QuickFlag](/produkt/brady-a55-24-483). Węższa SSR6006 obsługuje etykiety do 38,10 mm, a SSR6002 szersze.' },
  ],
  applications: ['Nadruk na poliestrowych etykietach flagowych', 'Nadruk na flagach QuickFlag'],
}

export const bradySsrR6100: Product = {
  ...wspolneA55,
  id: 'brady-ssr6102',
  slug: 'brady-ssr6102',
  name: 'Taśma barwiąca Brady R6100 SSR6102 do papierowych etykiet w drukarce A5500',
  seoTitle: 'Brady SSR6102 — taśma barwiąca R6100 do drukarki A5500',
  seoDescription: 'Czarna taśma barwiąca Brady SSR6102 serii R6100 do drukarki z aplikatorem A5500: wosk z żywicą, 60 mm × 300 m, odporna na zarysowania, do papieru B-424.',
  shortDescription: 'Brady SSR6102 — czarna taśma barwiąca R6100 o formule woskowo-żywicznej, 60 mm × 300 m, odporna na zarysowania i rozmazanie. Do papierowych etykiet A55-424 w drukarce Brady A5500.',
  description: 'SSR6102 to taśma serii R6100 o szerokości 60 mm i długości 300 m. Formuła woskowo-żywiczna daje czarny nadruk odporny na zarysowania i rozmazanie. Taśma jest nawinięta na rdzeń przeznaczony do drukarki A5500, a farba jest po zewnętrznej stronie rolki.\n\nTaśmę zaleca się do papierowych etykiet flagowych A55-424 z materiału B-424, we wszystkich szerokościach od 25,40 do 50,80 mm. Do etykiet z poliestru, polipropylenu i PVF stosuje się inne serie taśm: R6000 HF albo R4300.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/black-6100-series-thermal-transfer-printer-ribbon-for-bradyprinter-a5500-pid-ssr6102',
  images: ['/images/products/brady/ssr6002.png', '/images/products/brady-a5500-tasma-w-drukarce.webp'],
  imageDescriptions: [
    'Rolka czarnej taśmy barwiącej Brady 60 mm do drukarki A5500',
    'Czarna taśma barwiąca założona na trzpienie wewnątrz drukarki Brady A5500',
  ],
  specifications: [
    { name: 'Part Number', value: 'SSR6102' },
    { name: 'Numer artykułu Brady', value: '151810' },
    { name: 'Typ', value: 'Taśma barwiąca do druku termotransferowego' },
    { name: 'Seria', value: 'R6100' },
    { name: 'Formuła taśmy', value: 'woskowo-żywiczna' },
    { name: 'Kolor', value: 'czarny' },
    { name: 'Szerokość taśmy', value: '60 mm' },
    { name: 'Długość taśmy', value: '300 m' },
    { name: 'Odporność', value: 'zarysowania, rozmazanie' },
    { name: 'Warstwa barwiąca', value: 'na zewnątrz rolki' },
    { name: 'Zalecane materiały', value: 'etykiety A55 z papieru B-424' },
    { name: 'Gilza', value: 'rdzeń do drukarki A5500' },
    { name: 'Zgodne drukarki', value: 'A5500' },
  ],
  variants: [wariantTasmy('SSR6102', '60', 'czarna taśma barwiąca R6100')],
  variantAttributeTooltips: {
    Rozmiar: TASMA_ROZMIAR_TOOLTIP('SSR6102 ma 60 mm i obsługuje papierowe etykiety A55 o każdej szerokości, do 50,80 mm.'),
  },
  faq: [
    { question: 'Czy taśma SSR6102 pasuje do etykiet poliestrowych A55?', answer: 'SSR6102 zaleca się do papierowych etykiet [A55-424](/produkt/brady-a55-1-424). Do poliestru B-483 zaleca się taśmę [R6000 HF](/produkt/brady-ssr6006), a do polipropylenu i PVF taśmę R4300.' },
  ],
  applications: ['Nadruk odporny na zarysowania na papierowych etykietach flagowych'],
}

export const bradyA55Materialy: Product[] = [
  bradyA55QuickFlag,
  bradyA55Poliester,
  bradyA55Papier,
  bradyA55Polipropylen,
  bradyA55Pvf,
  bradySsrR6000,
  bradySsrR4300,
  bradySsrR6100,
]

export const BRADY_A55_FLAGI_IDS = new Set(['brady-a55-24-483'])
export const BRADY_A55_TASMY_IDS = new Set(['brady-ssr6006', 'brady-ssr4302', 'brady-ssr6102'])
