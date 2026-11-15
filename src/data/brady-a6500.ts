import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Drukarka z aplikatorem owijek Brady Wraptor A6500 (WRAPTOR-A6500-EU, WRAPTOR-A6500-FO), części zamienne
// oraz materiały WRAP- (owijki z winylu B-427, etykiety z tkaniny nylonowej B-499, owijki z poliimidu B-472).
// Taśma R4300 na gilzie 25,4 mm to istniejąca karta brady-r4300 (brady-tht-tasmy.ts). Brady nie ma cen ani
// stanów w /api/stock, więc karty są na zapytanie (quoteOnly). 15.11.2026.

export const bradyA6500: Product = {
  id: 'brady-a6500',
  slug: 'brady-a6500',
  name: 'Brady Wraptor A6500',
  seoH1: 'Brady Wraptor A6500',
  seoTitle: 'Brady Wraptor A6500 — drukarka z aplikatorem owijek, praca 24/7',
  seoDescription: 'Brady Wraptor A6500 drukuje i owija etykiety na przewodach Ø 1,52–15,24 mm w ok. 5 s, 300 dpi, 7000 owijek dziennie. PN: WRAPTOR-A6500-EU, WRAPTOR-A6500-FO.',
  shortDescription: 'Brady Wraptor A6500 — stacjonarna drukarka z aplikatorem owijek na przewody o średnicy od 1,52 do 15,24 mm, z cyklem około 5 sekund i pracą 24/7. Wersja Fiber Optic ma miękkie szczęki do przewodów światłowodowych.',
  description: 'Brady Wraptor A6500 to stacjonarna drukarka z aplikatorem do automatycznego oznaczania przewodów owijkami. Po włożeniu przewodu w szczęki urządzenie drukuje etykietę w 300 dpi, a owijarka nawija ją na izolację. Druk i owinięcie zajmują około 5 sekund. Owijki przylegają ściśle, a nierówne nałożenie, pęcherze i zmarszczki zdarzają się rzadko.\n\nWersja WRAPTOR-A6500-EU obsługuje bez regulacji przewody o średnicy 1,52–15,24 mm; odmiana WRAPTOR-A6500-FO ma miękkie szczęki, które nie wgniatają i nie rysują przewodów światłowodowych, w zakresie średnic 1,19–10,92 mm. Mechanizm jest w pełni elektryczny, bez pneumatyki, więc pracuje stosunkowo cicho.\n\nDrukarka pracuje na owijkach WRAP- (szerokość do 50,8 mm, wysokość do 76,2 mm) z winylu samolaminującego, tkaniny nylonowej i poliimidu. Funkcja Zero Queue usuwa potrzebę wcześniejszego druku etykiet, więc nie zostaje nadmiar wydruków z serii. Tryb oszczędzania taśmy ogranicza jej zużycie. Zadania zapisuje się w pamięci 32 GB. Oprogramowanie współpracuje z maszynami Schleuniger do zdejmowania izolacji, a złącze PLC i port lampki stanu ułatwiają włączenie urządzenia w linię produkcyjną. Urządzenie jest przeznaczone do 7000 owijek dziennie w pracy ciągłej.',
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'drukarki-do-oznaczania-kabli'],
  manufacturerId: 'brady',
  sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-wire-id-printer-applicator-uk-pid-wraptor-a6500-eu',
  quoteOnly: true,
  availability: 'unavailable',
  images: [
    '/images/products/brady/wraptor-a6500-eu.png',
    '/images/products/brady/wraptor-a6500-eu-zestaw.png',
    '/images/products/brady/wraptor-a6500-otwarta.png',
    '/images/products/brady/wraptor-a6500-fo.png',
    '/images/products/brady/wraptor-a6500-fo-zestaw.png',
    '/images/products/brady-wraptor-a6500-owijanie-przewodu.webp',
    '/images/products/brady-wraptor-a6500-przewod-w-szczekach.webp',
    '/images/products/brady-wraptor-a6500-ekran-dotykowy.webp',
    '/images/products/brady-wraptor-a6500-drzwi-przednie.webp',
    '/images/products/brady-wraptor-a6500-czerwony-przewod.webp',
  ],
  imageDescriptions: [
    'Brady Wraptor A6500 obrócona w prawo — jasnoszara obudowa z niebieskim frontem, ekran dotykowy i przezroczysta osłona szczęk',
    'Brady Wraptor A6500 z zawartością zestawu: przewód zasilający, kabel USB, klucze, pamięć USB i broszura oprogramowania',
    'Brady Wraptor A6500 z uniesionymi drzwiami bocznymi; widoczna rolka owijek i mechanizm druku',
    'Brady Wraptor A6500 Fiber Optic z przodu, z ekranem dotykowym i napisem Fiber Optic na obudowie',
    'Brady Wraptor A6500 Fiber Optic z zestawem: rolka owijek, taśma barwiąca, przewody, klucz i pamięć USB',
    'Dłonie trzymają przewód z białą owijką przy szczękach drukarki Brady Wraptor A6500',
    'Przewód włożony w szczęki pod przezroczystą osłoną drukarki Brady Wraptor A6500',
    'Palec wybiera zadanie na ekranie dotykowym drukarki Brady Wraptor A6500',
    'Dłoń otwiera przezroczyste drzwi przednie drukarki Brady Wraptor A6500',
    'Czerwony przewód z owijką w szczękach drukarki Brady Wraptor A6500 przy blacie warsztatowym',
  ],
  tags: ['produkcja'],
  isNew: true,
  isBestseller: false,
  applications: [
    'Owijki na przewody przy produkcji wiązek kablowych',
    'Oznaczanie przewodów na liniach z maszynami do zdejmowania izolacji',
    'Oznaczanie kabli teleinformatycznych i elektrycznych',
    'Owijki na przewody światłowodowe (wersja FO)',
  ],
  specifications: [
    { name: 'Typ urządzenia', value: 'Stacjonarna drukarka termotransferowa z aplikatorem owijek na przewody i kable' },
    { name: 'Technologia druku', value: 'Termotransfer' },
    { name: 'Rozdzielczość druku', value: '300 dpi (11,8 punktu/mm)' },
    { name: 'Czas cyklu', value: 'ok. 5 s (druk i owinięcie)' },
    { name: 'Średnica przewodu', value: 'WRAPTOR-A6500-EU: od 1,52 do 15,24 mm, bez regulacji; WRAPTOR-A6500-FO: od 1,19 do 10,92 mm' },
    { name: 'Szerokość etykiety', value: 'od 12,7 do 50,8 mm' },
    { name: 'Wysokość etykiety', value: 'od 19,05 do 76,2 mm' },
    { name: 'Maks. szerokość druku', value: '50,8 mm' },
    { name: 'Maks. wysokość nadruku', value: '41,3 mm' },
    { name: 'Materiały', value: 'owijki WRAP-: winyl samolaminujący B-427, tkanina nylonowa B-499, poliimid B-472' },
    { name: 'Taśma barwiąca', value: 'R4300 na gilzie 25,4 mm: R4311-25X300/O (25,4 mm), R4302-60X300/O (60 mm); średnica rolki do 68,58 mm; szerokość taśmy dobiera się do szerokości etykiety' },
    { name: 'Funkcje', value: 'Zero Queue (bez wcześniejszego druku serii etykiet), oszczędzanie taśmy, napęd elektryczny bez pneumatyki' },
    { name: 'Zalecane użycie', value: 'do 7000 owijek dziennie; praca 24 godziny na dobę, 7 dni w tygodniu' },
    { name: 'Wyświetlacz', value: 'kolorowy ekran dotykowy LCD' },
    { name: 'Pamięć', value: '32 GB, rozszerzenie przez pamięć USB (FAT, FAT32, exFAT)' },
    { name: 'Łączność', value: 'USB-B do komputera, porty USB-A, Ethernet; WRAPTOR-A6500-FO: także RS-232 i wejścia/wyjścia I/O' },
    { name: 'Porty do automatyki', value: 'złącze zdalnego trybu PLC; port lampki stanu (czerwony — błąd, żółty — praca, zielony — gotowość); współpraca z urządzeniami Schleuniger do zdejmowania izolacji' },
    { name: 'Druk bez komputera', value: 'tak, z plików w pamięci drukarki lub na pamięci USB' },
    { name: 'Język drukarki', value: 'emulacja ZPL Brady; Brady Script Emulator for ZPL (akcesorium M-SCRIPT-ADAPT-INT)' },
    { name: 'Kody kreskowe', value: 'Code 128, Code 39, Code 93, EAN-13, EAN-8, Interleaved 2 of 5, MSI, UPC-A, UPC-E, Codablock A, Codablock F, Data Matrix, QR' },
    { name: 'Czcionki', value: 'Arial, Arial 65, Courier New, Tahoma, Times New Roman' },
    { name: 'Oprogramowanie', value: 'Brady Workstation Product and Wire ID Suite; sterownik Windows do programów innych firm' },
    { name: 'Systemy operacyjne', value: 'Windows 7, 8, 10' },
    { name: 'Bezpieczeństwo', value: 'otwarcie przednich lub bocznych drzwi zatrzymuje mechanizm druku i owijania; przy otwartych drzwiach bocznych działa tylko silnik podawania etykiet' },
    { name: 'Zasilanie', value: '100–240 V AC, 50/60 Hz, 2 A; bezpiecznik zwłoczny 3 A, 5 × 20 mm' },
    { name: 'Temperatura pracy', value: 'od 10 do 40 °C' },
    { name: 'Wilgotność pracy', value: 'od 20 do 80%, bez kondensacji' },
    { name: 'Temperatura przechowywania', value: 'od 0 do 60 °C (wilgotność 10–90%)' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '368,3 × 450,9 × 571,5 mm' },
    { name: 'Masa', value: '34 kg' },
    { name: 'Konserwacja', value: 'czyszczenie głowicy, rolek, czujników i filtra wentylatora; smarowanie szyny ślizgowej i piasty owijarki; wymiana piankowej pryzmy owijarki' },
    { name: 'Normy', value: 'CE (2014/35/UE, 2014/30/UE, 2011/65/UE, 2015/863/UE), EN/IEC 60950-1, UL 60950-1, RoHS, WEEE' },
    { name: 'Gwarancja', value: '1 rok' },
    { name: 'Zawartość opakowania', value: 'WRAPTOR-A6500-EU: drukarka z aplikatorem, Brady Workstation Product and Wire ID, sterownik, kabel USB, przewód zasilający, rolka owijek WRAP-4-427, taśma R4302; WRAPTOR-A6500-FO: drukarka z aplikatorem, taśma R4302 i rolka etykiet WRAP-4-417 założone w drukarce, klucz 7/16", kabel USB, pamięć USB, przewód zasilający, kod do pobrania Product and Wire ID Suite, raport z testu OTDR' },
    { name: 'Akcesoria i części', value: 'filtr wentylatora WRAPTOR-FILTER, zestaw serwisowy A6500-SERVICE-KIT (FO), drzwi przednie WRPTR-A6500-FRTDR, drzwi boczne WRPTR-A6500-SPLTDR, pryzma owijarki WRAPTOR-VBLK, sprężyny A6500-SPRING, zespół głowicy drukującej, Brady Script Emulator for ZPL, zestaw czyszczący PCK-6' },
    { name: 'Numery artykułów Brady', value: 'WRAPTOR-A6500-EU: 149244; WRAPTOR-A6500-FO: 152226' },
  ],
  variants: [
    { partNumber: 'WRAPTOR-A6500-EU', name: 'Brady Wraptor A6500 — drukarka z aplikatorem owijek', attributes: { Wersja: 'Standardowa', 'Ø przewodu': '1,52–15,24 mm' }, availability: 'unavailable' },
    { partNumber: 'WRAPTOR-A6500-FO', name: 'Brady Wraptor A6500 Fiber Optic — drukarka z aplikatorem owijek do światłowodów', attributes: { Wersja: 'Fiber Optic', 'Ø przewodu': '1,19–10,92 mm' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Wersja: 'Rodzaj szczęk, które trzymają przewód w czasie owijania.\n\nStandardowa — przewody miedziane i kable do 15,24 mm.\n\nFiber Optic — miękkie szczęki do przewodów światłowodowych; dodatkowo złącza RS-232 i I/O oraz raport z testu OTDR w zestawie.',
    'Ø przewodu': 'Zakres średnicy przewodu razem z izolacją.\n\nRozmiar owijki WRAP- dobiera się do średnicy przewodu. Wersja Fiber Optic obsługuje przewody do 10,92 mm.',
  },
  faq: [
    { question: 'Jakie przewody owija Brady Wraptor A6500?', answer: 'Wersja WRAPTOR-A6500-EU owija przewody o średnicy od 1,52 do 15,24 mm bez regulacji. Wersja WRAPTOR-A6500-FO obsługuje przewody od 1,19 do 10,92 mm, także światłowodowe. Rozmiar owijki dobiera się do przewodu, np. [owijka WRAP-4-427](/produkt/brady-wrap-1-427) 25,40 × 38,10 mm pasuje do przewodów od 4,06 do 8,13 mm.' },
    { question: 'Jakie owijki i taśmy pasują do Brady Wraptor A6500?', answer: 'Owijki serii WRAP-: z winylu samolaminującego [B-427](/produkt/brady-wrap-1-427), z tkaniny nylonowej [B-499](/produkt/brady-wrap-7-499) i z poliimidu [B-472](/produkt/brady-wrap-1-472). Taśma barwiąca to czarna [R4300 na gilzie 25,4 mm](/produkt/brady-r4300): R4311 o szerokości 25,4 mm albo R4302 o szerokości 60 mm. W zestawie są rolka WRAP-4-427 i taśma R4302.' },
    { question: 'Czym różni się Wraptor A6500 od Wraptor A6200?', answer: 'Wraptor A6500 obsługuje przewody do 15,24 mm i owijki do 50,8 mm szerokości, owija w około 5 sekund i jest przeznaczona do 7000 owijek dziennie w pracy ciągłej. [Brady Wraptor A6200](/produkt/brady-a6200) to kompaktowe urządzenie do przewodów do 6,35 mm i 500 owinięć dziennie, z taśmą w kasecie.' },
    { question: 'Co daje funkcja Zero Queue w Wraptor A6500?', answer: 'Zero Queue usuwa potrzebę wcześniejszego druku etykiet. Nie drukuje się całej serii z góry, więc w porównaniu z zadaniami seryjnymi zostaje mało albo wcale niepotrzebnych etykiet. Tryb oszczędzania taśmy dodatkowo ogranicza zużycie taśmy barwiącej.' },
    { question: 'Czym różni się wersja Fiber Optic Wraptor A6500?', answer: 'WRAPTOR-A6500-FO ma miękkie szczęki, które nie wgniatają, nie rysują i nie uszkadzają przewodów światłowodowych, a straty sygnału po owinięciu są minimalne. Obsługuje przewody od 1,19 do 10,92 mm, ma złącza RS-232 i I/O, a do drukarki dołączony jest raport z testu OTDR. Wkładki szczęk i podkładkę owijarki wymienia się zestawem [A6500-SERVICE-KIT](/produkt/brady-a6500-service-kit).' },
  ],
  compatibleAccessories: ['brady-wrap-1-427', 'brady-wrap-7-499', 'brady-wrap-1-472', 'brady-r4300'],
  relatedAccessories: [
    'brady-wraptor-filter',
    'brady-wraptor-vblk',
    'brady-a6500-spring',
    'brady-wraptor-prnthd-060704',
    'brady-wrptr-a6500-frtdr',
    'brady-wrptr-a6500-spltdr',
    'brady-a6500-service-kit',
    'brady-m-script-adapt-int',
    'brady-pck-6',
  ],
  relatedProducts: ['brady-a5500', 'brady-a6200', 'brady-i7100'],
  downloads: [
    { name: 'Karta katalogowa Brady Wraptor A6500 z materiałami (PL)', type: 'datasheet', url: '/downloads/brady-wraptor-a6500-karta-katalogowa.pdf', size: '488 KB' },
    { name: 'Instrukcja obsługi Brady Wraptor A6500 (PL)', type: 'manual', url: '/downloads/brady-wraptor-a6500-instrukcja-obslugi.pdf', size: '12 MB' },
    { name: 'Zautomatyzowana identyfikacja kabli — broszura Brady (PL)', type: 'datasheet', url: '/downloads/brady-automatyczna-identyfikacja-kabli-broszura.pdf', size: '2,9 MB' },
    { name: 'Brady Workstation — pobieranie programu', type: 'software', url: 'https://workstation.bradyid.com/pl/updates', size: 'Online' },
  ],
  createdAt: '2026-11-15',
  updatedAt: '2026-11-15',
}

// ---------------------------------------------------------------------------
// Części zamienne i akcesoria Wraptor A6500
// ---------------------------------------------------------------------------

type Czesc = Pick<Product, 'id' | 'name' | 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'images' | 'imageDescriptions' | 'specifications' | 'applications' | 'relatedAccessories' | 'relatedProducts' | 'faq'> & { sameAs: string }

const czesci: Czesc[] = [
  {
    id: 'brady-wraptor-vblk',
    name: 'Piankowa pryzma owijarki Brady WRAPTOR-VBLK do Wraptor A6500',
    seoTitle: 'Brady WRAPTOR-VBLK — piankowa pryzma owijarki Wraptor A6500',
    seoDescription: 'Zapasowa piankowa pryzma owijarki Brady WRAPTOR-VBLK (V-block) do drukarki z aplikatorem Wraptor A6500: docisk owijki do przewodu. Nr art. 60703.',
    shortDescription: 'Brady WRAPTOR-VBLK — zapasowa piankowa pryzma owijarki (V-block) do drukarki z aplikatorem owijek Brady Wraptor A6500. Element mechanizmu, który dociska owijkę do przewodu.',
    description: 'Brady WRAPTOR-VBLK to piankowa pryzma owijarki, nazywana też V-blokiem, do drukarki Wraptor A6500. Pianka w brązowej powłoce jest osadzona w odkuwce owijarki, która owija etykietę wokół przewodu. Zużytą pryzmę wymienia się na nową.\n\nPrzed wymianą mechanizm cofa się poleceniem ładowania materiału, a drukarkę wyłącza i odłącza od zasilania. Po otwarciu przezroczystej osłony owijarkę obraca się otworem do góry i odkręca wspornik ustalający. Starą pryzmę wysuwa się razem z odkuwką, zakłada nową i montuje moduł tak, aby występy odkuwki trafiły w otwory ramy prowadnika.',
    images: ['/images/products/brady/wraptor-vblk.png'],
    imageDescriptions: ['Piankowa pryzma owijarki Brady WRAPTOR-VBLK w brązowej powłoce na metalowej podstawie'],
    specifications: [
      { name: 'Part Number', value: 'WRAPTOR-VBLK' },
      { name: 'Numer artykułu Brady', value: '60703' },
      { name: 'Typ', value: 'Piankowa pryzma owijarki (V-block), część zamienna' },
      { name: 'Kolor', value: 'brązowy' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
    ],
    applications: ['Wymiana zużytej pryzmy owijarki', 'Przywrócenie równego docisku owijki do przewodu'],
    relatedAccessories: ['brady-a6500-spring'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Kiedy wymienić pryzmę owijarki w Wraptor A6500?', answer: 'Gdy owijka nie jest nakładana prawidłowo mimo czystej i nasmarowanej piasty owijarki, a pianka jest zużyta. Pryzmę wymienia się po otwarciu przezroczystej osłony [Brady Wraptor A6500](/produkt/brady-a6500), przy wyłączonym zasilaniu.' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-wrap-printer-applicator-spare-wrapper-v-block-replacement-pid-y389517',
  },
  {
    id: 'brady-a6500-spring',
    name: 'Sprężyny pryzmy owijarki Brady A6500-SPRING do Wraptor A6500',
    seoTitle: 'Brady A6500-SPRING — sprężyny pryzmy owijarki Wraptor A6500',
    seoDescription: 'Zapasowe sprężyny Brady A6500-SPRING do mechanizmu pryzmy owijarki (V-block) drukarki z aplikatorem owijek Wraptor A6500. Srebrne, stalowe. Nr art. 170134.',
    shortDescription: 'Brady A6500-SPRING — zapasowe sprężyny do sprężynowego mechanizmu pryzmy owijarki w drukarce z aplikatorem owijek Brady Wraptor A6500.',
    description: 'Brady A6500-SPRING to zapasowe sprężyny do pryzmy owijarki (V-bloku) w drukarce Wraptor A6500. Sprężyny należą do sprężynowego mechanizmu owijarki, w którym osadzona jest piankowa pryzma.\n\nOpakowanie zawiera sprężyny w kolorze srebrnym. Wymienia się je przy obsłudze owijarki, razem z pryzmą WRAPTOR-VBLK albo osobno.',
    images: ['/images/products/brady/a6500-spring.png'],
    imageDescriptions: ['Dwie srebrne sprężyny Brady A6500-SPRING: stożkowa i walcowa'],
    specifications: [
      { name: 'Part Number', value: 'A6500-SPRING' },
      { name: 'Numer artykułu Brady', value: '170134' },
      { name: 'Typ', value: 'Sprężyny pryzmy owijarki (V-block), część zamienna' },
      { name: 'Kolor', value: 'srebrny' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
    ],
    applications: ['Naprawa mechanizmu pryzmy owijarki', 'Zapas części do obsługi owijarki'],
    relatedAccessories: ['brady-wraptor-vblk'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Do czego służą sprężyny A6500-SPRING?', answer: 'Do sprężynowego mechanizmu pryzmy owijarki w [Brady Wraptor A6500](/produkt/brady-a6500). W tym mechanizmie osadzona jest piankowa pryzma owijarki WRAPTOR-VBLK.' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-replacement-v-block-springs-pid-170134',
  },
  {
    id: 'brady-wraptor-prnthd-060704',
    name: 'Zespół głowicy drukującej Brady 060704 do Wraptor A6500',
    seoTitle: 'Brady 060704 — zespół głowicy drukującej do Wraptor A6500',
    seoDescription: 'Zespół głowicy drukującej Brady 060704 (SERV ASSY, PRINTHEAD, WAM) do drukarki z aplikatorem owijek Wraptor A6500: głowica 300 dpi z płytką i przewodami.',
    shortDescription: 'Brady 060704 — zapasowy zespół głowicy drukującej do drukarki z aplikatorem owijek Brady Wraptor A6500. Głowica z płytką drukowaną i taśmami połączeniowymi.',
    description: 'Brady 060704 to zapasowy zespół głowicy drukującej do drukarki Wraptor A6500. Zespół obejmuje głowicę na metalowym wsporniku, zieloną płytkę drukowaną i taśmy połączeniowe. Wymiana jest potrzebna, gdy głowica jest zużyta lub uszkodzona i czyszczenie nie poprawia wydruku.\n\nWymianę zaczyna się od cofnięcia zespołu drukującego (polecenie Załaduj materiał eksploatacyjny) i wyłączenia zasilania. Następnie przez drzwi boczne wyjmuje się etykiety i taśmę, a stary zespół odkręca kluczami imbusowymi 7/64" i 5/32". Śruba i podkładka przydają się do montażu nowego zespołu.',
    images: ['/images/products/brady/wraptor-prnthd.png', '/images/products/brady/wraptor-prnthd-v2.png'],
    imageDescriptions: [
      'Zespół głowicy drukującej Brady 060704 z zieloną płytką drukowaną i metalowym wspornikiem głowicy',
      'Zespół głowicy drukującej Brady 060704 widziany z drugiej strony, z taśmami połączeniowymi',
    ],
    specifications: [
      { name: 'Part Number', value: 'SERV ASSY,PRINTHEAD,WAM' },
      { name: 'Numer artykułu Brady', value: '060704' },
      { name: 'Typ', value: 'Zespół głowicy drukującej, część zamienna' },
      { name: 'Narzędzia do wymiany', value: 'klucze imbusowe 7/64" i 5/32"' },
      { name: 'Kolor', value: 'zielony (płytka drukowana)' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
    ],
    applications: ['Wymiana zużytej głowicy drukującej', 'Naprawa drukarki po uszkodzeniu głowicy'],
    relatedAccessories: ['brady-pck-6'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Jak wymienić głowicę w Brady Wraptor A6500?', answer: 'Mechanizm cofa się poleceniem ładowania materiału, drukarkę wyłącza i odłącza od zasilania, a po otwarciu drzwi bocznych wyjmuje etykiety i taśmę. Zespół głowicy odkręca się kluczami imbusowymi 7/64" i 5/32". Głowicę [Brady Wraptor A6500](/produkt/brady-a6500) czyści się wacikami z zestawu PCK-6.' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-wrap-printer-applicator-printhead-replacement-kit-pid-060704',
  },
  {
    id: 'brady-wrptr-a6500-frtdr',
    name: 'Drzwi przednie Brady WRPTR-A6500-FRTDR do Wraptor A6500',
    seoTitle: 'Brady WRPTR-A6500-FRTDR — przezroczyste drzwi przednie A6500',
    seoDescription: 'Zapasowe przezroczyste drzwi przednie Brady WRPTR-A6500-FRTDR do drukarki z aplikatorem Wraptor A6500: osłona szczęk i owijarki. Nr art. 149255.',
    shortDescription: 'Brady WRPTR-A6500-FRTDR — zapasowe przezroczyste drzwi przednie, czyli osłona szczęk i owijarki drukarki z aplikatorem owijek Brady Wraptor A6500.',
    description: 'Brady WRPTR-A6500-FRTDR to zapasowe drzwi przednie do drukarki Wraptor A6500. Przezroczysta plastikowa osłona zakrywa szczęki i owijarkę, a operator widzi przez nią przewód w czasie owijania. Po otwarciu drzwi urządzenie zatrzymuje wszystkie ruchome części.\n\nW zestawie są osłona, metalowa listwa mocująca i śruby. Pękniętą lub porysowaną osłonę wymienia się na nową, aby zachować działanie zabezpieczenia.',
    images: ['/images/products/brady/wrptr-a6500-frtdr.png'],
    imageDescriptions: ['Przezroczyste drzwi przednie Brady WRPTR-A6500-FRTDR z metalową listwą i śrubami'],
    specifications: [
      { name: 'Part Number', value: 'WRPTR-A6500-FRTDR' },
      { name: 'Numer artykułu Brady', value: '149255' },
      { name: 'Typ', value: 'Przezroczyste drzwi przednie (osłona szczęk), część zamienna' },
      { name: 'Zawartość', value: 'osłona, listwa mocująca, śruby' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
    ],
    applications: ['Wymiana pękniętej lub porysowanej osłony szczęk'],
    relatedAccessories: ['brady-wrptr-a6500-spltdr'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Czy Wraptor A6500 może pracować bez drzwi przednich?', answer: 'Nie. Przezroczyste drzwi chronią przed ruchomymi częściami owijarki, a ich otwarcie zatrzymuje mechanizm [Brady Wraptor A6500](/produkt/brady-a6500). Mechanizmów automatycznego zatrzymania nie wolno wyłączać.' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-front-door-clear-pid-wrptr-a6500-frtdr',
  },
  {
    id: 'brady-wrptr-a6500-spltdr',
    name: 'Drzwi boczne Brady WRPTR-A6500-SPLTDR do Wraptor A6500',
    seoTitle: 'Brady WRPTR-A6500-SPLTDR — drzwi boczne do Wraptor A6500',
    seoDescription: 'Zapasowe dzielone drzwi boczne Brady WRPTR-A6500-SPLTDR z dwoma oknami podglądu do drukarki z aplikatorem owijek Wraptor A6500, jasnoszare. Nr art. 149252.',
    shortDescription: 'Brady WRPTR-A6500-SPLTDR — zapasowe dzielone drzwi boczne z oknami do drukarki z aplikatorem owijek Brady Wraptor A6500.',
    description: 'Brady WRPTR-A6500-SPLTDR to zapasowe drzwi boczne do drukarki Wraptor A6500. Jasnoszary panel w kształcie litery L ma dwa okna, przez które przy zamkniętych drzwiach widać przesuw etykiet i taśmy.\n\nDrzwi boczne podnosi się przy ładowaniu etykiet i taśmy. Ich otwarcie zatrzymuje mechanizm druku i owijania; pracuje wtedy tylko silnik podawania etykiet. Uszkodzony panel wymienia się na nowy.',
    images: ['/images/products/brady/wrptr-a6500-spltdr.png'],
    imageDescriptions: ['Jasnoszare drzwi boczne Brady WRPTR-A6500-SPLTDR w kształcie litery L z dwoma oknami'],
    specifications: [
      { name: 'Part Number', value: 'WRPTR-A6500-SPLTDR' },
      { name: 'Numer artykułu Brady', value: '149252' },
      { name: 'Typ', value: 'Dzielone drzwi boczne z oknami, część zamienna' },
      { name: 'Kolor', value: 'jasnoszary' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
    ],
    applications: ['Wymiana uszkodzonych drzwi bocznych'],
    relatedAccessories: ['brady-wrptr-a6500-frtdr'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Co się dzieje po otwarciu drzwi bocznych Wraptor A6500?', answer: 'Ruchome części mechanizmu druku i owijania zatrzymują się. Silnik podawania etykiet nadal pracuje, dzięki czemu można załadować etykiety do [Brady Wraptor A6500](/produkt/brady-a6500).' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-split-side-door-pid-wrptr-a6500-spltdr',
  },
  {
    id: 'brady-a6500-service-kit',
    name: 'Zestaw serwisowy Brady A6500-SERVICE-KIT do Wraptor A6500 Fiber Optic',
    seoTitle: 'Brady A6500-SERVICE-KIT — zestaw serwisowy do Wraptor A6500 FO',
    seoDescription: 'Zestaw serwisowy Brady A6500-SERVICE-KIT do Wraptor A6500 Fiber Optic: podkładka owijarki i 4 wkładki do każdej szczęki, górnej i dolnej. Nr art. 175463.',
    shortDescription: 'Brady A6500-SERVICE-KIT — zestaw części eksploatacyjnych do drukarki Brady Wraptor A6500 Fiber Optic: podkładka owijarki i wkładki do miękkich szczęk.',
    description: 'Brady A6500-SERVICE-KIT to zestaw części eksploatacyjnych do drukarki Wraptor A6500 w wersji Fiber Optic. Zawiera podkładkę owijarki oraz po 4 wkładki do górnej i dolnej szczęki. Miękkie wkładki chronią przewody światłowodowe przed wgnieceniem i zarysowaniem.\n\nZużyte wkładki i podkładkę wymienia się na nowe, aby zachować delikatny chwyt przewodu. Podkładka ma wymiary 57,15 × 31,75 × 6,35 mm.',
    images: ['/images/products/brady/a6500-service-kit.png'],
    imageDescriptions: ['Czerwona podkładka owijarki i cztery czarne wkładki szczęk z zestawu Brady A6500-SERVICE-KIT'],
    specifications: [
      { name: 'Part Number', value: 'A6500-SERVICE-KIT' },
      { name: 'Numer artykułu Brady', value: '175463' },
      { name: 'Typ', value: 'Zestaw serwisowy: podkładka owijarki i wkładki szczęk' },
      { name: 'Zawartość', value: 'podkładka owijarki, 4 wkładki do górnej i do dolnej szczęki' },
      { name: 'Wymiary podkładki', value: '57,15 × 31,75 × 6,35 mm' },
      { name: 'Zgodne drukarki', value: 'Wraptor A6500 Fiber Optic (WRAPTOR-A6500-FO)' },
    ],
    applications: ['Wymiana zużytych wkładek miękkich szczęk', 'Obsługa drukarki do przewodów światłowodowych'],
    relatedAccessories: ['brady-wraptor-vblk'],
    relatedProducts: ['brady-a6500'],
    faq: [
      { question: 'Do której wersji Wraptor A6500 pasuje A6500-SERVICE-KIT?', answer: 'Do wersji Fiber Optic (WRAPTOR-A6500-FO) z miękkimi szczękami. Zestaw zawiera podkładkę owijarki i po 4 wkładki do górnej i dolnej szczęki [Brady Wraptor A6500](/produkt/brady-a6500).' },
    ],
    sameAs: 'https://www.brady.eu/label-printers/wraptor-a6500-fibre-optic-service-kit-pid-a6500-service-kit',
  },
]

export const bradyA6500Akcesoria: Product[] = czesci.map((czesc): Product => ({
  ...czesc,
  slug: czesc.id,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'brady',
  quoteOnly: true,
  availability: 'unavailable',
  tags: ['produkcja'],
  isNew: true,
  isBestseller: false,
  compatibleAccessories: [],
  downloads: [],
  createdAt: '2026-11-15',
  updatedAt: '2026-11-15',
}))

// ---------------------------------------------------------------------------
// Owijki WRAP- do Wraptor A6500
// ---------------------------------------------------------------------------

const wspolneWrap: typeof wspolneM6 = {
  ...wspolneM6,
  relatedProducts: ['brady-a6500'],
  createdAt: '2026-11-15',
  updatedAt: '2026-11-15',
}

// [PN, rozmiar, zakres przewodu, liczba na rolce]
type Wrap = [string, string, string, string]

const wariantyWrap = (wiersze: Wrap[], opis: string) =>
  wiersze.map(([pn, rozmiar, przewod, sztuk]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${opis} ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, 'Ø przewodu': przewod, 'Na rolce': sztuk } as Record<string, string>,
    availability: 'unavailable' as const,
  }))

// Winyl B-427 (cps-3069295). WRAP-6-427: górna granica przewodu ograniczona do 15,24 mm (maks. średnica drukarki).
const WRAP_427: Wrap[] = [
  ['WRAP-1-427', '12,70 × 19,05 mm', '2,00–3,00 mm', '6 800 szt.'],
  ['WRAP-11-427', '12,70 × 38,10 mm', '4,00–8,10 mm', '3 600 szt.'],
  ['WRAP-2-427', '25,40 × 25,40 mm', '2,70–5,10 mm', '5 300 szt.'],
  ['WRAP-3-427', '25,40 × 31,75 mm', '3,40–6,10 mm', '4 300 szt.'],
  ['WRAP-4-427', '25,40 × 38,10 mm', '4,06–8,13 mm', '3 600 szt.'],
  ['WRAP-10-427', '25,40 × 57,15 mm', '6,10–12,10 mm', '2 500 szt.'],
  ['WRAP-5-427', '38,10 × 63,50 mm', '6,70–14,20 mm', '2 200 szt.'],
  ['WRAP-12-427', '50,80 × 38,10 mm', '4,06–8,13 mm', '3 600 szt.'],
  ['WRAP-6-427', '50,80 × 76,20 mm', '8,10–15,24 mm', '1 900 szt.'],
]

export const bradyWrapWinyl: Product = {
  ...wspolneWrap,
  id: 'brady-wrap-1-427',
  slug: 'brady-wrap-1-427',
  name: 'Owijki samolaminujące Brady WRAP z winylu B-427 do Wraptor A6500',
  seoTitle: 'Brady WRAP-427 — owijki samolaminujące do Wraptor A6500',
  seoDescription: 'Samolaminujące owijki winylowe Brady B-427 do drukarki Wraptor A6500: 9 rozmiarów do 50,80 × 76,20 mm, przewody 2,00–15,24 mm. PN: WRAP-1-427, WRAP-4-427.',
  shortDescription: 'Brady WRAP-427 — samolaminujące owijki z winylu B-427 w 9 rozmiarach, od 12,70 × 19,05 do 50,80 × 76,20 mm, po 1 900–6 800 sztuk na rolce. Do drukarki z aplikatorem Brady Wraptor A6500.',
  description: 'Owijki WRAP-427 łączą białą strefę nadruku z przezroczystą częścią, która po owinięciu przykrywa napis. Winyl B-427 (0,102 mm) jest matowy, samogasnący i trudnopalny. Trwały klej akrylowy nadaje się do podłoży gładkich oraz chropowatych. Owijki opierają się wodzie, olejowi, chemikaliom, wilgoci i pogodzie, a nadruk dobrze znosi ścieranie i rozmazywanie.\n\nMateriał pracuje od −70 do 70 °C i nadaje się do zamrażarek oraz ciekłego azotu. Przy nadruku taśmami R4300 i R6200 ma uznanie UL969 (plik MH17154); wersję z tym uznaniem trzeba zaznaczyć w zamówieniu.\n\nDziewięć rozmiarów to szerokości 12,70, 25,40, 38,10 i 50,80 mm przy wysokościach 19,05–76,20 mm. Najmniejsza owijka WRAP-1-427 obejmuje przewody 2,00–3,00 mm, a największa WRAP-6-427 przewody od 8,10 mm do maksimum drukarki. Rolka mieści od 1 900 do 6 800 sztuk. Rolkę WRAP-4-427 dołącza się do drukarki WRAPTOR-A6500-EU.',
  sameAs: 'https://www.brady.eu/labels/self-laminating-vinyl-wrap-around-labels-for-a6500-printer-applicator-cps-3069295',
  images: ['/images/products/brady/wrap-1-427.png', '/images/products/brady/wrap-6-427.png', '/images/products/brady-wraptor-a6500-czerwony-przewod.webp'],
  imageDescriptions: [
    'Rolka owijek Brady WRAP-1-427 na szpuli z czarną piastą i wysuniętym paskiem etykiet',
    'Szeroka rolka owijek Brady WRAP-6-427 50,80 × 76,20 mm na szpuli',
    'Czerwony przewód z owijką w szczękach drukarki Brady Wraptor A6500',
  ],
  specifications: [
    { name: 'Typ', value: 'Samolaminujące owijki na przewody, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-427 (winyl samolaminujący)' },
    { name: 'Właściwości', value: 'samolaminujący, samogasnący, trudnopalny' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 70 °C; zamrażarka, ciekły azot' },
    { name: 'Odporność', value: 'woda, olej, chemikalia, wilgoć, warunki atmosferyczne; nadruk odporny na ścieranie i rozmazywanie' },
    { name: 'Wymiary etykiety', value: 'szerokość od 12,70 do 50,80 mm, wysokość od 19,05 do 76,20 mm' },
    { name: 'Pole nadruku', value: 'od 12,70 × 9,53 do 50,80 × 25,40 mm, zależnie od rozmiaru' },
    { name: 'Zakres średnicy przewodu', value: 'od 2,00 do 15,24 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 1 900 do 6 800' },
    { name: 'Normy', value: 'UL969 (plik MH17154) przy nadruku taśmami R4300 i R6200; wersję z uznaniem UL wskazuje się w zamówieniu' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: R4311 (25,4 mm) do owijek o szerokości do 25,40 mm, R4302 (60 mm) do szerszych' },
    { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
  ],
  variants: wariantyWrap(WRAP_427, 'owijka winylowa B-427'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość owijki.\n\nOwijki WRAP-427 mają od 12,70 × 19,05 do 50,80 × 76,20 mm.',
    'Ø przewodu': 'Zakres średnicy przewodu razem z izolacją dla danego rozmiaru.\n\nNp. WRAP-2-427 obejmuje przewody od 2,70 do 5,10 mm, a WRAP-10-427 przewody od 6,10 do 12,10 mm.',
    'Na rolce': 'Liczba owijek na jednej rolce.\n\nOd 1 900 sztuk przy największym rozmiarze do 6 800 przy najmniejszym.',
  },
  faq: [
    { question: 'Którą owijkę WRAP-427 wybrać do przewodu 10 mm?', answer: 'WRAP-10-427 (25,40 × 57,15 mm, przewody 6,10–12,10 mm) albo WRAP-5-427 (38,10 × 63,50 mm, przewody 6,70–14,20 mm). Szersza owijka mieści większe pole nadruku. Obie drukuje i owija [Brady Wraptor A6500](/produkt/brady-a6500).' },
    { question: 'Jaką taśmą drukuje się owijki WRAP-427?', answer: 'Czarną taśmą [R4300 na gilzie 25,4 mm](/produkt/brady-r4300). Do owijek o szerokości 12,70 i 25,40 mm zaleca się R4311 (25,4 mm), a do szerokości 38,10 i 50,80 mm R4302 (60 mm).' },
  ],
  applications: ['Oznaczanie przewodów w wiązkach kablowych', 'Owijki na kable teleinformatyczne i elektryczne', 'Oznaczenia przewodów w laboratoriach'],
}

// Tkanina nylonowa B-499 (cps-3069296)
const WRAP_499: Wrap[] = [
  ['WRAP-7-499', '12,70 × 19,05 mm', '1,52–5,06 mm', '4 500 szt.'],
  ['WRAP-13-499', '25,40 × 25,40 mm', '2,69–7,09 mm', '4 100 szt.'],
  ['WRAP-8-499', '25,40 × 38,10 mm', '4,04–11,13 mm', '2 800 szt.'],
  ['WRAP-9-499', '50,80 × 50,80 mm', '5,39–15,16 mm', '2 100 szt.'],
]

export const bradyWrapNylon: Product = {
  ...wspolneWrap,
  id: 'brady-wrap-7-499',
  slug: 'brady-wrap-7-499',
  name: 'Etykiety z tkaniny nylonowej Brady WRAP B-499 do Wraptor A6500',
  seoTitle: 'Brady WRAP-499 — etykiety nylonowe do drukarki Wraptor A6500',
  seoDescription: 'Etykiety Brady B-499 z tkaniny nylonowej do drukarki Wraptor A6500: cienkie, mocny klej, autoklaw, od −40 do 90 °C. PN: WRAP-7-499, WRAP-8-499, WRAP-9-499.',
  shortDescription: 'Brady WRAP-499 — białe etykiety z tkaniny nylonowej B-499 o niskim profilu i dużej przyczepności, w 4 rozmiarach do 50,80 × 50,80 mm. Do drukarki z aplikatorem Brady Wraptor A6500.',
  description: 'WRAP-499 to etykiety z białej tkaniny nylonowej B-499 o grubości 0,166 mm, z matowym wykończeniem. Mają niski profil na przewodzie i klej akrylowy o dużej sile przylegania, skuteczny także na teksturowanych podłożach i tworzywach o niskiej energii powierzchniowej. Etykieta nie ma przezroczystej części laminującej; nadruk powstaje na całej tkaninie.\n\nTkanina znosi autoklaw, zamrażarkę i ciekły azot; działa w temperaturach od −40 do 90 °C. Nie szkodzi jej ścieranie, chemikalia, wilgoć, promienie UV ani warunki atmosferyczne. Biała wersja spełnia wymóg braku halogenów (DIN VDE 0472-815) i jest uznana przez UL oraz CSA.\n\nCztery rozmiary obejmują przewody od 1,52 do 15,16 mm: od małej etykiety WRAP-7-499 (12,70 × 19,05 mm) po kwadratową WRAP-9-499 (50,80 × 50,80 mm). Rolka ma od 2 100 do 4 500 sztuk. Etykiety oznaczają przewody, komponenty, urządzenia elektryczne, próbki w laboratorium i lokalizacje w magazynie.',
  sameAs: 'https://www.brady.eu/labels/aggressive-adhesive-multi-purpose-nylon-labels-for-a6500-printer-applicator-cps-3069296',
  images: ['/images/products/brady/wrap-7-499.png', '/images/products/brady/wrap-9-499.png'],
  imageDescriptions: [
    'Rolka etykiet nylonowych Brady WRAP-7-499 na szpuli z wysuniętym paskiem',
    'Szeroka rolka etykiet nylonowych Brady WRAP-9-499 50,80 × 50,80 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Etykiety owijane na przewody z tkaniny nylonowej, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-499 (tkanina nylonowa)' },
    { name: 'Właściwości', value: 'niski profil, autoklawowalna, do przechowywania kriogenicznego, bezhalogenowa' },
    { name: 'Wykończenie', value: 'matowe, białe' },
    { name: 'Klej', value: 'trwały, akrylowy, o dużej przyczepności; do powierzchni gładkich, teksturowanych i o niskiej energii powierzchniowej' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C; autoklaw, zamrażarka, ciekły azot' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, niska temperatura, UV, warunki atmosferyczne' },
    { name: 'Wymiary etykiety', value: 'od 12,70 × 19,05 do 50,80 × 50,80 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 1,52 do 15,16 mm, zależnie od rozmiaru' },
    { name: 'Liczba sztuk na rolce', value: 'od 2 100 do 4 500' },
    { name: 'Normy', value: 'bezhalogenowa (DIN VDE 0472 część 815), UL Recognised, CSA Accepted (materiał biały)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: R4311 (25,4 mm) do etykiet o szerokości do 25,40 mm, R4302 (60 mm) do WRAP-9-499' },
    { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
  ],
  variants: wariantyWrap(WRAP_499, 'etykieta nylonowa B-499'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość etykiety.\n\nEtykiety WRAP-499 mają cztery rozmiary, od 12,70 × 19,05 do 50,80 × 50,80 mm.',
    'Ø przewodu': 'Zakres średnicy przewodu razem z izolacją dla danego rozmiaru.\n\nNp. WRAP-13-499 obejmuje przewody od 2,69 do 7,09 mm, a WRAP-8-499 przewody od 4,04 do 11,13 mm.',
    'Na rolce': 'Liczba etykiet na jednej rolce.\n\nOd 2 100 do 4 500 sztuk, zależnie od rozmiaru.',
  },
  faq: [
    { question: 'Kiedy wybrać etykiety nylonowe WRAP-499 zamiast owijek WRAP-427?', answer: 'Gdy etykieta ma przejść autoklaw albo pracować do 90 °C, oraz gdy potrzebny jest niski profil na przewodzie. [Owijki WRAP-427](/produkt/brady-wrap-1-427) chronią nadruk przezroczystą warstwą, a WRAP-499 mają nadruk na całej tkaninie.' },
  ],
  applications: ['Oznaczanie przewodów i komponentów elektrycznych', 'Etykiety odporne na autoklaw', 'Oznaczenia w laboratoriach i magazynach'],
}

// Poliimid B-472 (cps-3069297)
const WRAP_472: Wrap[] = [
  ['WRAP-1-472', '12,70 × 19,05 mm', '3,30–8,13 mm', '6 800 szt.'],
  ['WRAP-6-472', '50,80 × 76,20 mm', '3,30–8,13 mm', '1 900 szt.'],
]

export const bradyWrapPoliimid: Product = {
  ...wspolneWrap,
  id: 'brady-wrap-1-472',
  slug: 'brady-wrap-1-472',
  name: 'Owijki z poliimidu Brady WRAP B-472 do Wraptor A6500',
  seoTitle: 'Brady WRAP-472 — trudnopalne owijki z poliimidu do A6500',
  seoDescription: 'Trudnopalne owijki Brady UltraTemp B-472 z poliimidu do drukarki z aplikatorem Wraptor A6500: od −70 do 100 °C, samogasnące. PN: WRAP-1-472, WRAP-6-472.',
  shortDescription: 'Brady WRAP-472 — trudnopalne owijki z poliimidu B-472 (UltraTemp), odporne na ścieranie, chemikalia i promienie UV, w 2 rozmiarach. Do drukarki z aplikatorem Brady Wraptor A6500.',
  description: 'WRAP-472 to owijki z poliimidu B-472 z linii UltraTemp. Materiał o grubości 0,081 mm jest trudnopalny i samogasnący, ma matowe wykończenie, a trwały klej akrylowy przeznaczono na podłoża gładkie i szorstkie. Etykieta owija się wokół przewodu i sama się laminuje.\n\nOwijki pracują w zakresie −70…100 °C. Owijkom nie szkodzi ścieranie, chemikalia, korozja, wilgoć ani promieniowanie UV. Nadaje się do oznaczania przewodów w instalacjach elektrycznych, teleinformatycznych i telekomunikacyjnych.\n\nSą dwa rozmiary: mała owijka WRAP-1-472 (12,70 × 19,05 mm, pole nadruku 12,70 × 9,53 mm, 6 800 sztuk na rolce) i duża WRAP-6-472 (50,80 × 76,20 mm, pole nadruku 50,80 × 40,64 mm, 1 900 sztuk). Do nadruku zaleca się taśmę R4311 dla małej i R4302 dla dużej owijki.',
  sameAs: 'https://www.brady.eu/labels/wraptor-flame-retardant-polyimide-labels-cps-3069297',
  images: ['/images/products/brady/wrap-1-472.png', '/images/products/brady/wrap-6-472.png'],
  imageDescriptions: [
    'Rolka owijek z poliimidu Brady WRAP-1-472 na szpuli z czarną piastą',
    'Rolka szerokich owijek Brady WRAP-6-472 50,80 × 76,20 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Owijki na przewody z poliimidu, samolaminujące, nadruk termotransferowy' },
    { name: 'Materiał', value: 'B-472 (poliimid), linia UltraTemp' },
    { name: 'Właściwości', value: 'trudnopalny, samogasnący' },
    { name: 'Wykończenie', value: 'matowe, białe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich i chropowatych' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 100 °C' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV' },
    { name: 'Wymiary etykiety', value: '12,70 × 19,05 mm (WRAP-1-472) i 50,80 × 76,20 mm (WRAP-6-472)' },
    { name: 'Pole nadruku', value: '12,70 × 9,53 mm i 50,80 × 40,64 mm' },
    { name: 'Zakres średnicy przewodu', value: 'od 3,30 do 8,13 mm' },
    { name: 'Liczba sztuk na rolce', value: '6 800 (WRAP-1-472), 1 900 (WRAP-6-472)' },
    { name: 'Zalecana taśma barwiąca', value: 'R4300: R4311 (WRAP-1-472), R4302 (WRAP-6-472); serie taśm dla materiału: R2000, R4300, R6200' },
    { name: 'Zgodne drukarki', value: 'Wraptor A6500' },
  ],
  variants: wariantyWrap(WRAP_472, 'owijka z poliimidu B-472'),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i wysokość owijki.\n\nWRAP-1-472 ma 12,70 × 19,05 mm, a WRAP-6-472 50,80 × 76,20 mm.',
    'Ø przewodu': 'Zakres średnicy przewodu razem z izolacją.\n\nOba rozmiary owijek WRAP-472 mają podany zakres od 3,30 do 8,13 mm.',
    'Na rolce': 'Liczba owijek na jednej rolce.\n\nWRAP-1-472: 6 800 sztuk, WRAP-6-472: 1 900 sztuk.',
  },
  faq: [
    { question: 'Do czego służą owijki z poliimidu WRAP-472?', answer: 'Do przewodów, które pracują w wyższej temperaturze, do 100 °C, i potrzebują materiału trudnopalnego i samogasnącego. Owijki drukuje i nakłada [Brady Wraptor A6500](/produkt/brady-a6500).' },
  ],
  applications: ['Trudnopalne oznaczenia przewodów', 'Owijki do przewodów pracujących do 100 °C'],
}

export const bradyWrapMaterialy: Product[] = [bradyWrapWinyl, bradyWrapNylon, bradyWrapPoliimid]

export const BRADY_WRAP_NYLON_IDS = new Set(['brady-wrap-7-499'])
export const BRADY_WRAP_POLIIMID_IDS = new Set(['brady-wrap-1-472'])
