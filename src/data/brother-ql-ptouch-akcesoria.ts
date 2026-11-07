import type { Product } from './products'

// Akcesoria Brother do etykieciarek P-touch: zasilacze, akumulatory, ostrze, futerały i adapter RS-232C.
// Ceny i stany przychodzą na żywo po numerze z wiersza „Part Number”, jak na kartach drukarek
// w brother-ql-ptouch.ts, dlatego karty nie mają priceFrom.

type Akcesorium = Pick<Product, 'id' | 'name' | 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'images' | 'imageDescriptions' | 'tags' | 'specifications' | 'applications' | 'relatedAccessories' | 'relatedProducts' | 'faq'> & { sameAs?: string }

const akcesoria: Akcesorium[] = [
  {
    id: 'brother-ad-24es',
    name: 'Zasilacz Brother AD-24ES',
    seoTitle: 'Brother AD-24ES',
    seoDescription: 'Zasilacz sieciowy Brother AD-24ES 9 V do etykieciarek P-touch PT-H105, PT-H110, PT-D200BW, PT-D210, PT-E110 i PT-P300BT zamiast 6 baterii AAA.',
    shortDescription: 'Zasilacz sieciowy 9 V do etykieciarek Brother P-touch na 6 baterii AAA: PT-H105, PT-H110, PT-D200BW, PT-D210, PT-E110 i PT-P300BT. Wersja z wtyczką EU ma numer AD-24ESEU.',
    description: `Brother AD-24ES to zasilacz sieciowy 9 V do etykieciarek P-touch. Z zasilaczem etykieciarka pracuje z gniazdka, bez 6 baterii AAA. Zasilacz pasuje do modeli PT-H105, PT-H110, PT-D200BW, PT-D210, PT-E110 i PT-P300BT. Numer AD-24ESEU oznacza wersję z wtyczką europejską.

## Zestawy z zasilaczem i bez zasilacza

PT-H105, PT-H110 i PT-P300BT są sprzedawane bez zasilacza. Zestawy PT-D200BWVP, PT-D210VP i PT-E110VP mają zasilacz AD-24ES w pudełku. Wersje PT-D200BW, PT-D210 i PT-E110 bez oznaczenia VP nie mają zasilacza. Do tych wersji zasilacz zamawia się osobno.`,
    images: ['/images/products/brother/ad-24es-1.png'],
    imageDescriptions: ['Brother AD-24ES — zasilacz sieciowy z przewodem, widok z przodu'],
    tags: ['retail'],
    specifications: [
      { name: 'Part Number', value: 'AD24ESEU' },
      { name: 'Model', value: 'AD-24ES' },
      { name: 'Typ', value: 'Zasilacz sieciowy' },
      { name: 'Napięcie wyjściowe', value: '9 V' },
      { name: 'Wtyczka', value: 'Europejska (AD-24ESEU)' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-H105, PT-H110, PT-D200BW, PT-D210, PT-E110, PT-P300BT' },
    ],
    applications: ['Zasilanie etykieciarki P-touch z sieci zamiast z baterii AAA'],
    relatedAccessories: ['brother-tc-4'],
    relatedProducts: ['brother-pt-h105', 'brother-pt-h110', 'brother-pt-d200bw', 'brother-pt-d210', 'brother-pt-e110', 'brother-pt-p300bt'],
    faq: [
      { question: 'Czy zasilacz AD-24ES jest dołączony do etykieciarki?', answer: 'Tylko w zestawach z oznaczeniem VP: PT-D200BWVP, PT-D210VP i PT-E110VP. Modele PT-H105, PT-H110 i PT-P300BT oraz wersje bez VP pracują na bateriach AAA, a zasilacz jest dla nich opcją.' },
      { question: 'Jakie napięcie podaje AD-24ES?', answer: 'Napięcie wyjściowe zasilacza wynosi 9 V.' },
    ],
    sameAs: 'https://store.brother.pl/accessories/adapter/ad24eseu',
  },
  {
    id: 'brother-ba-e001',
    name: 'Akumulator Brother BA-E001',
    seoTitle: 'Brother BA-E001',
    seoDescription: 'Akumulator Brother BA-E001 Li-ion 7,2 V do P-touch PT-H500, PT-E310BT, PT-E560BT i PT-P750W. Zamienny do serii E, opcjonalny do H500 i P750W.',
    shortDescription: 'Akumulator litowo-jonowy 7,2 V do etykieciarek Brother P-touch PT-H500, PT-E310BT, PT-E560BT i PT-P750W. Do PT-E310BT i PT-E560BT to akumulator zamienny, do PT-H500 i PT-P750W opcja zasilania bez sieci.',
    description: `Brother BA-E001 to akumulator litowo-jonowy 7,2 V do etykieciarek P-touch. Pasuje do modeli PT-H500, PT-E310BT, PT-E560BT i PT-P750W. Z akumulatorem etykieciarka drukuje bez podłączenia do sieci.

## Akumulator zamienny do PT-E310BT i PT-E560BT

Zestawy PT-E310BTVP i PT-E560BTVP zawierają akumulator BA-E001. Ta karta to akumulator zamienny. Obie drukarki drukują tylko z zainstalowanym akumulatorem, także przy pracy z zasilaczem. Akumulator ładuje się w drukarce. Z [zasilaczem USB-PD PA-AD-004](/produkt/brother-pa-ad-004) pełne ładowanie trwa ok. 3 godzin. Temperatura otoczenia podczas ładowania powinna wynosić 10–35 °C.

## Akumulator opcjonalny do PT-H500 i PT-P750W

Do PT-H500 i PT-P750W akumulator nie jest dołączony. PT-H500 bez akumulatora pracuje na 6 bateriach AA. PT-P750W ładuje akumulator w drukarce przez zasilacz AD-E001. Pełne ładowanie w PT-P750W trwa do 6 godzin.`,
    images: ['/images/products/brother/ba-e001-1.png'],
    imageDescriptions: ['Brother BA-E001 — akumulator, widok pod kątem'],
    tags: ['produkcja'],
    specifications: [
      { name: 'Part Number', value: 'BAE001' },
      { name: 'Model', value: 'BA-E001' },
      { name: 'Typ', value: 'Akumulator litowo-jonowy' },
      { name: 'Napięcie', value: '7,2 V' },
      { name: 'Ładowanie', value: 'W drukarce; ok. 3 godz. z zasilaczem PA-AD-004 (PT-E310BT, PT-E560BT), do 6 godz. z zasilaczem AD-E001 (PT-P750W)' },
      { name: 'Temperatura ładowania', value: '10–35 °C (PT-E310BT, PT-E560BT)' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-H500, PT-E310BT, PT-E560BT, PT-P750W' },
    ],
    applications: ['Akumulator zamienny do PT-E310BT i PT-E560BT', 'Praca PT-H500 i PT-P750W bez zasilania z sieci'],
    relatedAccessories: ['brother-pa-ad-004'],
    relatedProducts: ['brother-pt-h500', 'brother-pt-e310bt', 'brother-pt-e560bt', 'brother-pt-p750w'],
    faq: [
      { question: 'Czy BA-E001 jest w zestawie z PT-E310BT i PT-E560BT?', answer: 'Tak. Drukarka ma w pudełku jeden akumulator BA-E001. Drugi akumulator zamawia się jako część zamienną.' },
      { question: 'Czy PT-H500 i PT-P750W mają akumulator w zestawie?', answer: 'Nie. W obu modelach BA-E001 jest wyposażeniem opcjonalnym. PT-P750W ma w zestawie zasilacz AD-E001, który ładuje akumulator w drukarce.' },
    ],
    sameAs: 'https://store.brother.pl/accessories/battery/bae001',
  },
  {
    id: 'brother-tc-4',
    name: 'Ostrze obcinaka Brother TC-4',
    seoTitle: 'Brother TC-4',
    seoDescription: 'Ostrze Brother TC-4: zapasowe ostrze ręcznego obcinaka taśmy TZe do etykieciarek P-touch PT-H105, PT-H110, PT-D200BW, PT-D210 i PT-E110.',
    shortDescription: 'Zapasowe ostrze ręcznego obcinaka taśmy do etykieciarek Brother P-touch PT-H105, PT-H110, PT-D200BW, PT-D210 i PT-E110.',
    description: `Brother TC-4 to zapasowe ostrze ręcznego obcinaka taśmy w etykieciarkach P-touch. Pasuje do modeli PT-H105, PT-H110, PT-D200BW, PT-D210 i PT-E110. Nowe ostrze zastępuje ostrze, które się stępiło.

Ręczny obcinak odcina etykietę od taśmy TZe po wydruku. Ostrze obcinaka w tych modelach jest wymienne. Zapasowe ostrze TC-4 nie wchodzi w skład zestawu etykieciarki.`,
    images: ['/images/products/brother/tc-4-1.png'],
    imageDescriptions: ['Brother TC-4 — ostrze obcinaka z osłoną, widok z przodu'],
    tags: ['retail'],
    specifications: [
      { name: 'Part Number', value: 'TC4' },
      { name: 'Model', value: 'TC-4' },
      { name: 'Typ', value: 'Ostrze ręcznego obcinaka taśmy' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-H105, PT-H110, PT-D200BW, PT-D210, PT-E110' },
    ],
    applications: ['Wymiana stępionego ostrza obcinaka taśmy'],
    relatedAccessories: ['brother-ad-24es'],
    relatedProducts: ['brother-pt-h105', 'brother-pt-h110', 'brother-pt-d200bw', 'brother-pt-d210', 'brother-pt-e110'],
    faq: [
      { question: 'Do których etykieciarek pasuje ostrze TC-4?', answer: 'Do Brother P-touch PT-H105, PT-H110, PT-D200BW, PT-D210 i PT-E110. Wszystkie te modele mają ręczny obcinak z wymiennym ostrzem.' },
    ],
  },
  {
    id: 'brother-pa-ad-004',
    name: 'Zasilacz USB-C Brother PA-AD-004',
    seoTitle: 'Brother PA-AD-004',
    seoDescription: 'Zasilacz Brother PA-AD-004 USB-C PD 30 W z przewodem 1,5 m do P-touch PT-E310BT i PT-E560BT oraz skanerów ADS-1300 i ADS-1800W.',
    shortDescription: 'Zasilacz USB Type-C z USB Power Delivery, 30 W, z przewodem 1,5 m. Do etykieciarek Brother P-touch PT-E310BT i PT-E560BT oraz skanerów ADS-1300 i ADS-1800W.',
    description: `Brother PA-AD-004 to zasilacz USB Type-C z obsługą USB Power Delivery. Ma moc 30 W i przewód o długości 1,5 m. Do etykieciarek PT-E310BT i PT-E560BT dostarcza napięcie 12 V. Zasilacz pasuje też do skanerów dokumentów Brother ADS-1300 i ADS-1800W. Numer PA-AD-004EU oznacza wersję z wtyczką europejską.

## Praca i ładowanie z sieci

Zestawy PT-E310BTVP i PT-E560BTVP nie zawierają zasilacza. Zasilacz ładuje [akumulator BA-E001](/produkt/brother-ba-e001) w drukarce w ok. 3 godziny. Ładowanie przewodem USB-C z komputera trwa dłużej. Przy pracy z zasilaczem akumulator musi być zainstalowany w drukarce.

## Prędkość druku

Z zasilaczem PT-E560BT drukuje z prędkością do 30 mm/s. Na samym akumulatorze PT-E560BT drukuje do 20 mm/s. PT-E310BT drukuje do 20 mm/s przy obu źródłach zasilania.`,
    // Zbliżenie zamiast pełnego zdjęcia: jedyne pełne zdjęcie producenta pokazuje wtyczkę brytyjską, a karta dotyczy wersji EU.
    images: ['/images/products/brother/pa-ad-004-1.png'],
    imageDescriptions: ['Brother PA-AD-004 — zasilacz z przewodem USB Type-C, zbliżenie'],
    tags: ['produkcja'],
    specifications: [
      { name: 'Part Number', value: 'PAAD004EU' },
      { name: 'Model', value: 'PA-AD-004' },
      { name: 'Typ', value: 'Zasilacz USB Type-C (USB Power Delivery)' },
      { name: 'Moc', value: '30 W' },
      { name: 'Napięcie dla etykieciarki', value: '12 V' },
      { name: 'Zasilanie', value: '100–240 V AC, 50/60 Hz' },
      { name: 'Przewód', value: 'USB Type-C, 1,5 m' },
      { name: 'Wtyczka', value: 'Europejska (PA-AD-004EU)' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-E310BT, PT-E560BT; skanery Brother ADS-1300, ADS-1800W' },
    ],
    applications: ['Druk z sieci i ładowanie akumulatora BA-E001 w PT-E310BT i PT-E560BT'],
    relatedAccessories: ['brother-ba-e001'],
    relatedProducts: ['brother-pt-e310bt', 'brother-pt-e560bt'],
    faq: [
      { question: 'Czy PA-AD-004 jest w zestawie PT-E310BTVP lub PT-E560BTVP?', answer: 'Nie. Zasilacz jest sprzedawany osobno. W pudełku drukarki jest akumulator BA-E001 i przewód USB-C.' },
      { question: 'Czy PT-E560BT drukuje szybciej z zasilaczem?', answer: 'Tak. Z PA-AD-004 prędkość druku wynosi do 30 mm/s, a z akumulatora do 20 mm/s.' },
    ],
  },
  {
    id: 'brother-pa-bt-005',
    name: 'Akumulator Brother PA-BT-005',
    seoTitle: 'Brother PA-BT-005',
    seoDescription: 'Akumulator Brother PA-BT-005 Li-ion 3,6 V do P-touch PT-P710BT (CUBE Plus) i PT-E720BT. Zamienny akumulator, ładowanie w drukarce przez USB.',
    shortDescription: 'Zamienny akumulator litowo-jonowy 3,6 V do drukarek etykiet Brother P-touch PT-P710BT i PT-E720BT. Ładowanie w drukarce przez port USB.',
    description: `Brother PA-BT-005 to akumulator litowo-jonowy 3,6 V do drukarek etykiet P-touch PT-P710BT i PT-E720BT. Zestaw każdej z tych drukarek zawiera akumulator PA-BT-005, zamontowany w drukarce. Na tej karcie jest akumulator zamienny do obu modeli.

## Ładowanie przez port USB

Akumulator ładuje się w drukarce przez port USB. Prąd może pochodzić z komputera albo z ładowarki USB 5 V DC, 0,5 A. Ładowarka USB nie wchodzi w skład zestawu drukarki. Ładowanie jest możliwe w temperaturze od 10 do 35 °C.

## Wydajność w PT-P710BT

W PT-P710BT pełne naładowanie wystarcza na wydruk 5–6 kaset z taśmą. Akumulator jest przewidziany na 500 cykli ładowania.`,
    images: ['/images/products/brother/pa-bt-005-1.png', '/images/products/brother/pa-bt-005-2.png', '/images/products/brother/pa-bt-005-3.png'],
    imageDescriptions: ['Brother PA-BT-005 — akumulator, widok pod kątem', 'Brother PA-BT-005 — akumulator, widok z przodu', 'Brother PA-BT-005 — akumulator, strona z tabliczką znamionową'],
    tags: ['retail'],
    specifications: [
      { name: 'Part Number', value: 'PABT005' },
      { name: 'Model', value: 'PA-BT-005' },
      { name: 'Typ', value: 'Akumulator litowo-jonowy' },
      { name: 'Napięcie', value: '3,6 V' },
      { name: 'Ładowanie', value: 'W drukarce przez port USB, z komputera lub ładowarki USB 5 V DC, 0,5 A' },
      { name: 'Temperatura ładowania', value: '10–35 °C' },
      { name: 'Cykle ładowania', value: '500 (PT-P710BT)' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-P710BT, PT-E720BT' },
    ],
    applications: ['Akumulator zamienny do PT-P710BT i PT-E720BT'],
    relatedAccessories: [],
    relatedProducts: ['brother-pt-p710bt', 'brother-pt-e720bt'],
    faq: [
      { question: 'Czy PA-BT-005 jest w zestawie z PT-P710BT i PT-E720BT?', answer: 'Tak. Obie drukarki mają w pudełku wbudowany akumulator PA-BT-005. Osobny akumulator zastępuje zużyty egzemplarz.' },
      { question: 'Czym ładuje się PA-BT-005?', answer: 'Przewodem USB podłączonym do komputera lub ładowarki USB 5 V DC, 0,5 A. Akumulator pozostaje w drukarce podczas ładowania.' },
    ],
  },
  {
    id: 'brother-pa-bt-003',
    name: 'Akumulator Brother PA-BT-003',
    seoTitle: 'Brother PA-BT-003',
    seoDescription: 'Akumulator Brother PA-BT-003 Li-ion 1750 mAh do P-touch PT-P910BT i PT-E920BT. Zamienny akumulator, ładowanie w drukarce z USB 5 V, min. 0,5 A.',
    shortDescription: 'Zamienny akumulator litowo-jonowy 1750 mAh do drukarek etykiet Brother P-touch PT-P910BT i PT-E920BT. Ładowanie w drukarce z komputera lub zasilacza USB.',
    description: `Brother PA-BT-003 to akumulator litowo-jonowy 1750 mAh do drukarek etykiet P-touch PT-P910BT i PT-E920BT. Obie drukarki mają akumulator PA-BT-003 w zestawie. W PT-P910BT akumulator jest fabrycznie zainstalowany. Ta karta dotyczy akumulatora zamiennego.

## Ładowanie w drukarce

Akumulator ładuje się w drukarce z komputera albo z zasilacza USB. Zasilacz USB musi dawać 5 V DC i co najmniej 0,5 A. Zasilacz USB nie jest dołączony do drukarki. Akumulator ładuje się w zakresie temperatur 10–35 °C. Do PT-P910BT należy stosować wyłącznie akumulator PA-BT-003.`,
    images: ['/images/products/brother/pa-bt-003-1.png'],
    imageDescriptions: ['Brother PA-BT-003 — akumulator, widok z przodu'],
    tags: ['retail'],
    specifications: [
      { name: 'Part Number', value: 'PABT003' },
      { name: 'Model', value: 'PA-BT-003' },
      { name: 'Typ', value: 'Akumulator litowo-jonowy' },
      { name: 'Pojemność', value: '1750 mAh' },
      { name: 'Ładowanie', value: 'W drukarce przez USB, 5 V DC, min. 0,5 A' },
      { name: 'Temperatura ładowania', value: '10–35 °C' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-P910BT, PT-E920BT' },
    ],
    applications: ['Akumulator zamienny do PT-P910BT i PT-E920BT'],
    relatedAccessories: [],
    relatedProducts: ['brother-pt-p910bt', 'brother-pt-e920bt'],
    faq: [
      { question: 'Czy PT-P910BT i PT-E920BT mają akumulator w zestawie?', answer: 'Tak, każda z tych drukarek ma w pudełku jeden akumulator PA-BT-003. Akumulator z tej karty jest sprzedawany osobno jako zamienny.' },
      { question: 'Czy do PT-P910BT pasuje inny akumulator?', answer: 'Nie. PT-P910BT jest przeznaczona tylko do akumulatora PA-BT-003.' },
    ],
  },
  {
    id: 'brother-bpa-cc7-700',
    name: 'Futerał Brother BPA-CC7-700',
    seoTitle: 'Brother BPA-CC7-700',
    seoDescription: 'Futerał Brother BPA-CC7-700 do drukarki etykiet P-touch CUBE Pro PT-E720BT. Torba ochronna z paskiem na ramię do noszenia drukarki podczas pracy.',
    shortDescription: 'Futerał ochronny z paskiem na ramię do drukarki etykiet Brother P-touch CUBE Pro PT-E720BT.',
    description: `Brother BPA-CC7-700 to futerał ochronny do drukarki etykiet P-touch CUBE Pro PT-E720BT. Torba futerału ma zintegrowany pasek na ramię. Torba chroni drukarkę, a pasek pozwala nosić ją na ramieniu. Drukarka pozostaje pod ręką podczas pracy.

Futerał jest dopasowany do PT-E720BT. Do PT-E920BT jest przeznaczony [futerał BPA-CC9-900](/produkt/brother-bpa-cc9-900). Drukarka jest sprzedawana osobno.`,
    images: ['/images/products/brother/bpa-cc7-700-1.png', '/images/products/brother/bpa-cc7-700-2.png'],
    imageDescriptions: ['Brother BPA-CC7-700 — futerał z paskiem na ramię, widok z góry', 'Brother BPA-CC7-700 — futerał z drukarką w środku, okienko na kasetę'],
    tags: ['produkcja'],
    specifications: [
      { name: 'Part Number', value: 'BPA-CC7-700' },
      { name: 'Model', value: 'BPA-CC7-700' },
      { name: 'Typ', value: 'Futerał ochronny z paskiem na ramię' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-E720BT' },
    ],
    applications: ['Noszenie i ochrona drukarki PT-E720BT podczas pracy'],
    relatedAccessories: [],
    relatedProducts: ['brother-pt-e720bt'],
    faq: [
      { question: 'Do której drukarki pasuje BPA-CC7-700?', answer: 'Do Brother P-touch PT-E720BT. Do PT-E920BT pasuje futerał BPA-CC9-900.' },
    ],
    sameAs: 'https://store.brother.pl/accessories/labelprinters/bpacc7700',
  },
  {
    id: 'brother-bpa-cc9-900',
    name: 'Futerał Brother BPA-CC9-900',
    seoTitle: 'Brother BPA-CC9-900',
    seoDescription: 'Futerał Brother BPA-CC9-900: torba ochronna z paskiem na ramię do drukarki etykiet P-touch CUBE Pro PT-E920BT. Drukarka pod ręką podczas pracy.',
    shortDescription: 'Torba ochronna z paskiem na ramię, przeznaczona do drukarki etykiet Brother P-touch CUBE Pro PT-E920BT.',
    description: `Brother BPA-CC9-900 to torba ochronna z paskiem na ramię do drukarki P-touch CUBE Pro PT-E920BT. Pasek jest zintegrowany z torbą. W torbie drukarka jest chroniona i dostępna podczas pracy.

Ten model futerału jest przeznaczony do PT-E920BT. Wersja do PT-E720BT to [futerał BPA-CC7-700](/produkt/brother-bpa-cc7-700). Futerał nie zawiera drukarki.`,
    images: ['/images/products/brother/bpa-cc9-900-1.png', '/images/products/brother/bpa-cc9-900-2.png'],
    imageDescriptions: ['Brother BPA-CC9-900 — futerał z paskiem na ramię, widok z góry', 'Brother BPA-CC9-900 — futerał z drukarką w środku, okienko na kasetę'],
    tags: ['produkcja'],
    specifications: [
      { name: 'Part Number', value: 'BPA-CC9-900' },
      { name: 'Model', value: 'BPA-CC9-900' },
      { name: 'Typ', value: 'Futerał ochronny z paskiem na ramię' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-E920BT' },
    ],
    applications: ['Noszenie i ochrona drukarki PT-E920BT podczas pracy'],
    relatedAccessories: [],
    relatedProducts: ['brother-pt-e920bt'],
    faq: [
      { question: 'Czy BPA-CC9-900 pasuje do PT-E720BT?', answer: 'Nie. BPA-CC9-900 jest przeznaczony do PT-E920BT. Do PT-E720BT służy futerał BPA-CC7-700.' },
    ],
    sameAs: 'https://store.brother.pl/accessories/labelprinters/bpacc9900',
  },
  {
    id: 'brother-pa-sca-001',
    name: 'Adapter szeregowy Brother PA-SCA-001',
    seoTitle: 'Brother PA-SCA-001',
    seoDescription: 'Adapter Brother PA-SCA-001 RJ25 – DB9M do P-touch PT-P900Wc i PT-P950NW. Skaner kodów lub waga przez RS-232C w trybie P-touch Template.',
    shortDescription: 'Adapter RJ25 na DB9M do portu szeregowego drukarek etykiet Brother P-touch PT-P900Wc i PT-P950NW. Służy do podłączenia skanera kodów lub wagi przez RS-232C.',
    description: `Brother PA-SCA-001 to adapter portu szeregowego do drukarek etykiet P-touch PT-P900Wc i PT-P950NW. Zamienia gniazdo RJ25 drukarki na złącze D-sub 9-pin męskie (DB9M). Przez adapter drukarka łączy się z urządzeniem RS-232C.

## Skaner lub waga w trybie P-touch Template

Adapter służy do podłączenia skanera kodów kreskowych lub wagi. Drukarka obsługuje te urządzenia w trybie P-touch Template. Interfejs szeregowy nie działa ze sterownikami drukarki dla Windows i Mac.

## Przewód i ustawienia

Przewód szeregowy RS-232C nie wchodzi w skład zestawu. Przewód może mieć najwyżej 2,0 m długości. Domyślne ustawienia portu to 9600 bit/s, brak parzystości, 8 bitów danych i sterowanie DTR.`,
    images: ['/images/products/brother/pa-sca-001-1.png'],
    imageDescriptions: ['Brother PA-SCA-001 — adapter szeregowy RJ25 – DB9M, widok pod kątem'],
    tags: ['magazyn', 'produkcja'],
    specifications: [
      { name: 'Part Number', value: 'PASCA001' },
      { name: 'Model', value: 'PA-SCA-001' },
      { name: 'Typ', value: 'Adapter portu szeregowego' },
      { name: 'Złącza', value: 'RJ25 (drukarka) – D-sub 9-pin męskie (DB9M)' },
      { name: 'Interfejs', value: 'RS-232C' },
      { name: 'Ustawienia domyślne', value: '9600 bit/s, bez parzystości, 8 bitów danych, sterowanie DTR' },
      { name: 'Maks. długość przewodu RS-232C', value: '2,0 m (przewód poza zestawem)' },
      { name: 'Kompatybilność', value: 'Brother P-touch PT-P900Wc, PT-P950NW' },
    ],
    applications: ['Podłączenie skanera kodów lub wagi do drukarki w trybie P-touch Template'],
    relatedAccessories: [],
    relatedProducts: ['brother-pt-p900wc', 'brother-pt-p950nw'],
    faq: [
      { question: 'Do czego służy adapter PA-SCA-001?', answer: 'Łączy drukarkę PT-P900Wc lub PT-P950NW ze skanerem kodów kreskowych albo wagą przez RS-232C. Drukarka pracuje wtedy w trybie P-touch Template.' },
      { question: 'Czy przewód RS-232C jest w zestawie?', answer: 'Nie. Przewód szeregowy dobiera się osobno, o długości do 2,0 m.' },
    ],
  },
]

export const brotherQlPtouchAccessories: Product[] = akcesoria.map((akcesorium) => ({
  ...akcesorium,
  slug: akcesorium.id,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-drukarek-etykiet'],
  manufacturerId: 'brother',
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  compatibleAccessories: [],
  downloads: [],
  createdAt: '2026-11-07',
  updatedAt: '2026-11-07',
}))
