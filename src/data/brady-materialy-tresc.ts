import type { SubcategoryRichContent } from './subcategory-content'

// Treść pod siatką trzech podkategorii materiałów Brady z największym popytem (audyt SEO 15.11.2026):
// oznaczniki przewodów (480/mies.), koszulki termokurczliwe (1900) i etykiety znamionowe (480).
// Fakty wyłącznie z kart produktów tych podkategorii (materiał B-, temperatura pracy, normy, zgodność).
// Linki w FAQ jako <a href> — szablon zamienia je w FAQPage na pełne adresy.

export const bradyOznacznikiTresc: SubcategoryRichContent = {
  updatedAt: '2026-11-15',
  sectionHeadings: {
    technicalDeepDive: 'Normy i odporność materiałów',
    useCases: 'Gdzie stosuje się oznaczniki Brady',
    comparisons: 'Owijka, flaga czy zawieszka?',
  },
  definition: {
    heading: 'Czym są oznaczniki przewodów i kabli Brady?',
    content: 'Oznacznik przewodu to etykieta, zawieszka albo wkładka z opisem obwodu, numeru przewodu lub punktu podłączenia. Oznaczniki Brady powstają na drukarce termotransferowej. Każdy opis może więc mieć inny tekst, numer kolejny albo kod kreskowy.\n\nW tej kategorii są owijki samolaminujące, flagi, zawieszki, etykiety na listwy zaciskowe, wkładki DuraSleeve i materiał BradyGrip na opaski VELCRO. Materiały występują w kasetach do drukarek przenośnych oraz na rolkach do drukarek stacjonarnych i aplikatorów. Koszulki nasuwane przed montażem końcówki opisuje osobna kategoria: [koszulki termokurczliwe Brady](/koszulki-termokurczliwe-brady).',
  },
  comparisonTable: {
    heading: 'Rodzaje oznaczników przewodów',
    intro: 'Rodzaj oznacznika zależy od sposobu mocowania i od miejsca, z którego opis ma być czytany. Nazwa rodzaju jest linkiem do przykładowej karty produktu.',
    modelColumn: 'Rodzaj',
    columns: ['Sposób mocowania', 'Materiały'],
    rows: [
      { model: 'Owijka samolaminująca', href: '/produkt/brady-m6-31-427', cells: ['Pole nadruku owija się wokół przewodu. Przezroczysty pas laminatu zakrywa wydruk.', 'winyl B-427 (od −70 do 70 °C), winyl B-417 z mocniejszym klejem, PVF Tedlar B-642, poliester B-461'] },
      { model: 'Owijka obrotowa', href: '/produkt/brady-m6-203-427-ro', cells: ['Złożona owijka obraca się swobodnie na przewodzie i nie zostawia kleju na izolacji.', 'winyl B-427'] },
      { model: 'Flaga kablowa', href: '/produkt/brady-m6-214-483', cells: ['Etykieta owija przewód, a jej końce sklejają się w odstającą flagę z polem na tekst albo kod kreskowy.', 'poliester QuickFlag B-483A (od −40 do 120 °C), polipropylen WorkHorse B-425A i B-425D (do 130 °C)'] },
      { model: 'Zawieszka kablowa', href: '/produkt/brady-tht-7525-7643-yl', cells: ['Zawieszkę z otworami mocuje się do przewodu albo wiązki.', 'poliuretan B-7643, poliolefina B-348, poliester B-7598, polietylen B-109 i Rapido B-7599, Nomex B-508'] },
      { model: 'Etykieta na listwę zaciskową', href: '/produkt/brady-m21-499-tb', cells: ['Wąska etykieta opisuje zaciski w rozdzielnicy.', 'tkanina nylonowa B-499, tkanina winylowa CleanLift B-498, winyl B-7696'] },
      { model: 'Wkładka DuraSleeve', href: '/produkt/brady-m6-15-390', cells: ['Po wydruku wkładka trafia do przezroczystego nośnika z PVC zakładanego na przewód.', 'polipropylen B-390, poliester B-7697'] },
      { model: 'BradyGrip', href: '/produkt/brady-m4c-500-414', cells: ['Materiał bez kleju, z haczykami VELCRO. Łączy się z opaską na rzep wokół wiązki.', 'poliester B-414 (od −40 do 50 °C)'] },
    ],
  },
  buyingGuide: {
    heading: 'Jak dobrać oznacznik do przewodu?',
    items: [
      'Średnica przewodu — rozmiar oznacznika dobiera się do zakresu średnic podanego na karcie. Przykładowo owijki obrotowe M6-203-427-RO pasują do przewodów od 2,01 do 10,11 mm.',
      'Temperatura pracy — owijki z winylu B-427 pracują od −70 do 70 °C. Folia PVF Tedlar B-437 znosi 135 °C, a flagi z polipropylenu B-425A i B-425D 130 °C.',
      'Materiał bezhalogenowy — bez halogenów są zawieszki z poliolefiny B-348 i poliuretanu B-7643 oraz etykiety z tkaniny nylonowej B-499 w wersji białej.',
      'Powierzchnia izolacji — klej akrylowy owijki B-427 trzyma się izolacji gładkiej i szorstkiej. Owijki B-417 mają klej o zwiększonej przyczepności.',
      'Seria drukarki — kasety M21 pasują do M210 i M211. Kasety M4 obsługują M410, M510 i M511, a kasety M5 tylko M510 i M511. Kasety M6 są do M610 i M611, kasety M7 do M710.',
      'Rolki do drukarek stacjonarnych — rolki B33 obsługują i3300, i4311 i i5300. Większość rolek z gilzą 76 mm pasuje do i6100, i7100 i i7500, ale zawieszki B-508 i B-7649 tylko do i7100 i i7500.',
    ],
  },
  expertAuthority: '',
  technicalDeepDive: 'Jeśli materiał ma normy albo uznania, podaje je wiersz „Normy” na karcie. Bezhalogenowość potwierdza tam IEC 61249-2-21 (zawieszki B-7643) albo DIN VDE 0472 część 815 (m.in. B-499 i B-390). Zawieszki B-348 spełniają EN 45545-2 (wymaganie R24, kategoria HL3), czyli normę dla pojazdów szynowych.\n\nUznanie UL 969 dotyczy materiału razem z taśmą barwiącą. Owijki B-427 mają je przy nadruku taśmami serii R4300 i R6200, a owijki B-417 przy taśmach R4300 i R7950. Instalacja z wymaganiem UL wymaga więc zgodnego zestawu materiału i taśmy.',
  useCases: [
    { title: 'Rozdzielnice i szafy sterownicze', description: 'Owijki i flagi opisują przewody przy zaciskach. Listwy zaciskowe opisują etykiety z nylonu B-499 i tkaniny winylowej CleanLift B-498.' },
    { title: 'Okablowanie strukturalne', description: 'Owijka obrotowa obywa się bez elementów mocujących, więc nie uszkadza skrętek Cat 5 i Cat 6 ani światłowodów. BradyGrip opisuje wiązki spięte opaskami VELCRO.' },
    { title: 'Produkcja i utrzymanie ruchu', description: 'Zawieszki B-7643 z poliuretanu wytrzymują ścieranie oraz chemikalia. Zawieszki z polietylenu B-7649 wykrywa detektor metali.' },
  ],
  uniqueInsights: {
    heading: 'Na co zwrócić uwagę przy zamówieniu',
    items: [
      { title: 'Kasety M6 w drukarce M710', text: 'Drukarka M710 przyjmuje większość kaset M6 po założeniu adaptera materiałów. Wyjątkiem są m.in. zawieszki B-348 w kasetach M6, dlatego zgodność podaje wiersz „Zgodne drukarki”.' },
      { title: 'Taśma w kasecie', text: 'Kasety M21, M4 i M5 mają taśmę barwiącą w środku. Do kaset M6 i M7 oraz do rolek taśmę zamawia się osobno.' },
      { title: 'Kolor pola nadruku', text: 'W rodzinie B-427 w kasetach M6 pole nadruku ma do dziewięciu kolorów. Pełną paletę ma 10 rozmiarów, a pozostałe są białe, część także żółta.' },
    ],
  },
  comparisons: [
    { title: 'Owijka czy flaga?', verdict: 'Opis wokół izolacji — owijka. Kod kreskowy do skanowania — flaga.', content: 'Owijka otacza przewód, więc napis widać z kilku stron. Flaga odstaje od przewodu i ma płaskie pole nadruku, na którym skaner odczyta kod kreskowy. Flagi QuickFlag mają zwężony koniec z klejem, dlatego brzegi gotowej flagi pokrywają się równo.' },
    { title: 'Etykieta czy zawieszka?', verdict: 'Pojedynczy przewód — etykieta. Wiązka albo kabel narażony na ścieranie — zawieszka.', content: 'Etykietę przykleja się bezpośrednio do izolacji. Zawieszka mocowana przez otwory nie potrzebuje kleju na przewodzie. Jej materiał można dobrać do warunków, np. poliuretan B-7643 do ścierania albo poliolefinę B-348 do pojazdów szynowych.' },
  ],
  faq: [
    { question: 'Jakie oznaczniki kablowe drukuje drukarka Brady?', answer: 'Drukarki Brady drukują owijki samolaminujące, flagi, zawieszki, etykiety na listwy zaciskowe, wkładki DuraSleeve i koszulki termokurczliwe. Dostępny rodzaj materiału zależy od serii drukarki. Przegląd modeli zawiera kategoria <a href="/drukarki-do-oznaczania-kabli">drukarki do oznaczania kabli</a>.' },
    { question: 'Która owijka wytrzyma zamrażarkę i ciekły azot?', answer: 'Karty owijek z winylu B-427 i B-417 podają pracę w zamrażarce i ciekłym azocie. Najszerszy zakres temperatury, od −196 do 110 °C, mają owijki z poliestru B-461, które znoszą też autoklaw. Etykiety na probówki i fiolki są w kategorii <a href="/etykiety-laboratoryjne-brady">etykiety laboratoryjne Brady</a>.' },
    { question: 'Czy oznaczniki Brady nadają się do pojazdów szynowych?', answer: 'Tak. Zawieszki z poliolefiny B-348 są bezhalogenowe i wydzielają mało dymu. Spełniają wymagania EN 45545-2 dla kategorii HL3. Ten materiał jest w kasetach M6, w materiale BM, na rolkach B33 oraz na rolkach 76 mm.' },
    { question: 'Czy w kasecie z oznacznikami jest taśma barwiąca?', answer: 'To zależy od serii. Taśmę mają w środku kasety M21 do M210 i M211 oraz kasety M4 i M5. Kasety M6 i M7 oraz rolki do drukarek i3300, i5300 i i7500 jej nie mają. Numer zalecanej taśmy podaje karta materiału, a pełna lista jest w kategorii <a href="/tasmy-barwiace-brady">taśmy barwiące Brady</a>.' },
    { question: 'Czy oznacznik można odkleić i przykleić ponownie?', answer: 'Do ponownego przyklejania przeznaczono tkaninę winylową CleanLift B-498. Minimalna temperatura naklejania tego materiału to 10 °C. Owijki B-427 i flagi QuickFlag mają klej trwały.' },
    { question: 'Czym różni się owijka obrotowa od zwykłej owijki?', answer: 'Zwykła owijka przykleja się do izolacji. Owijka obrotowa po złożeniu obraca się na przewodzie, więc opis można odczytać z każdej strony. Izolacja pozostaje wolna od kleju.' },
  ],
  howToSteps: [],
}

export const bradyKoszulkiTresc: SubcategoryRichContent = {
  updatedAt: '2026-11-15',
  sectionHeadings: {
    howToSteps: 'Jak oznaczyć przewód koszulką termokurczliwą?',
  },
  definition: {
    heading: 'Koszulki termokurczliwe z nadrukiem do drukarek Brady',
    content: 'Koszulka termokurczliwa, nazywana też rurką termokurczliwą, to odcinek rurki z poliolefiny albo PVDF. Koszulki Brady PermaSleeve mają matową powierzchnię do druku termotransferowego. Opis drukuje się na płaskiej koszulce, zanim trafi na przewód.\n\nPo ogrzaniu koszulka zmniejsza średnicę i przylega do izolacji na całym obwodzie. Oznaczenie zostaje na swoim miejscu także przy układaniu przewodu w korytkach i szafach. Koszulki występują jako odcinki na podkładzie, w kasetach i na rolkach, a część rodzin także jako koszulka ciągła.',
  },
  comparisonTable: {
    heading: 'Materiały koszulek PermaSleeve',
    intro: 'Materiał określa skurcz, temperaturę pracy i normy. Oznaczenie materiału jest linkiem do jednej z kart.',
    modelColumn: 'Materiał',
    columns: ['Skurcz', 'Temperatura pracy', 'Cechy i normy'],
    rows: [
      { model: 'B-342', href: '/produkt/brady-m6-375-1-342-wt', cells: ['3:1', 'od −55 do 135 °C', 'poliolefina trudnopalna; SAE-AMS-DTL-23053/5 (klasa 1), UL 224'] },
      { model: 'B-312', href: '/produkt/brady-bm-250-1-312', cells: ['3:1', 'od −55 do 135 °C', 'poliolefina klasy komercyjnej; uznanie UL 224'] },
      { model: 'LSZH B-7641', href: '/produkt/brady-lszh-125-2-wt-s', cells: ['2:1', 'od −55 do 105 °C', 'bezhalogenowa, niska emisja dymu; EN 45545-2 (HL3), BS 6853 (kategoria 1A)'] },
      { model: 'Heatex B-7642', href: '/produkt/brady-hx-125-2-wt', cells: ['2:1', 'od −40 do 120 °C', 'poliolefina samogasnąca'] },
      { model: 'B-7646', href: '/produkt/brady-620612', cells: ['3:1', 'od −55 do 135 °C', 'odporna na olej napędowy'] },
      { model: 'PVDF B-345', href: '/produkt/brady-2ht-125-2-wt-s', cells: ['2:1 (3:1 przy Ø 2,39 mm)', 'od −55 do 225 °C', 'trudnopalny; SAE-AMS-DTL-23053/18 (klasa 2)'] },
    ],
  },
  buyingGuide: {
    heading: 'Jak dobrać koszulkę termokurczliwą do drukarki?',
    items: [
      'Średnica przewodu — karta podaje dla każdego rozmiaru zakres średnic w milimetrach i AWG. Koszulki w tej kategorii obejmują przewody od 0,58 do 49,53 mm.',
      'Warunki instalacji — do instalacji ogólnych służy B-342. Tam, gdzie wymagany jest materiał bezhalogenowy, stosuje się LSZH B-7641. Najwyższą temperaturę znosi PVDF B-345.',
      'Odcinki czy koszulka ciągła — odcinki mają stałą długość, np. 50,8 mm w rolkach B33D z materiałem B-342. Koszulka ciągła B-7641 i B-7642 na rolkach 110 i 109 m pasuje do drukarek i7100 i i7500. Rolkę montuje się poza drukarką, a w i7500 koszulkę drukuje się w trybie ręcznym.',
      'Druk z dwóch stron — wersje B33D oraz 2HX-125-2-WT-2 przyjmują nadruk po obu stronach koszulki. Opis widać wtedy z dwóch stron przewodu.',
      'Kolor — większość rozmiarów jest biała albo żółta. Część rodzin ma też koszulki czarne, niebieskie, czerwone i w innych kolorach.',
    ],
  },
  expertAuthority: '',
  technicalDeepDive: '',
  useCases: [],
  uniqueInsights: {
    heading: 'Jak czytać numery koszulek',
    items: [
      { title: 'Średnica w numerze PN', text: 'Liczba w numerze PN to średnica koszulki w tysięcznych cala. Przykładowo PS-125 ma 3,18 mm, a PS-375 9,53 mm.' },
      { title: 'Zgodność z i6100', text: 'Część rozmiarów na rolkach 76 mm nie pasuje do i6100, np. 3PS-187-2-YL-4. Wyjątki podaje wiersz „Uwagi o zgodności” na karcie.' },
      { title: 'Czarne koszulki', text: 'Do czarnych koszulek służy osobna taśma, np. M61-R6710-WT do kaset M6 albo M7-R6700-WT do M710.' },
    ],
  },
  comparisons: [],
  howToSteps: [
    { name: 'Pomiar przewodu', text: 'Średnicę mierzy się na izolacji przewodu. Rozmiar koszulki wybiera się tak, aby ta średnica mieściła się w zakresie z karty.' },
    { name: 'Druk opisu', text: 'Opis drukuje się na płaskiej koszulce, przed obkurczeniem. Taśmę barwiącą dobiera się według karty koszulki. W kasetach M21, M4 i M5 taśma jest już zamontowana.' },
    { name: 'Nasunięcie na przewód', text: 'Po wydruku odcinek odkleja się od podkładu i przesuwa na przewód. Końcówkę zaciska się dopiero potem.' },
    { name: 'Obkurczenie', text: 'Koszulkę ogrzewa się opalarką, aż przylgnie do izolacji na całym obwodzie.' },
  ],
  faq: [
    { question: 'Czy koszulka termokurczliwa to to samo co rurka termokurczliwa?', answer: 'Tak, to dwie nazwy tego samego wyrobu. W tej kategorii są koszulki do druku na drukarkach Brady, w kasetach i na rolkach. Rurek do obkurczania bez nadruku tu nie ma.' },
    { question: 'Co oznacza skurcz 2:1 i 3:1?', answer: 'Koszulka 2:1 po ogrzaniu zmniejsza średnicę o połowę, a koszulka 3:1 do jednej trzeciej. Przy skurczu 3:1 jeden rozmiar obejmuje przewody o większej różnicy średnic.' },
    { question: 'Która koszulka jest bezhalogenowa?', answer: 'Bezhalogenowe są koszulki PermaSleeve LSZH B-7641. Wydzielają mało dymu i spełniają EN 45545-2 (kategoria HL3) oraz BS 6853 (kategoria pojazdu 1A). Pracują od −55 do 105 °C.' },
    { question: 'Jaka koszulka wytrzyma wysoką temperaturę?', answer: 'Koszulki PermaSleeve B-345 z PVDF pracują od −55 do 225 °C i spełniają SAE-AMS-DTL-23053/18 (klasa 2). Ten materiał jest dostępny jako kaseta M6-250-1-345-WT, rolka B33D-94-2-345 i rolka 2HT-125-2-WT-S.' },
    { question: 'Czy koszulki są odporne na olej napędowy?', answer: 'Do kontaktu z olejem napędowym przeznaczono koszulki PermaSleeve B-7646 ze skurczem 3:1. Odporność pozostałych materiałów na chemikalia, wilgoć i UV podaje karta produktu.' },
    { question: 'Na jakiej drukarce Brady wydrukować koszulki termokurczliwe?', answer: 'Koszulki drukują <a href="/produkt/brady-m210">M210</a> i M211, M410, M510 i <a href="/produkt/brady-m511">M511</a>, <a href="/produkt/brady-m610">M610</a>, M611 i M710, a także <a href="/produkt/brady-i3300">i3300</a>, i4311, i5300, i6100, i7100 i <a href="/produkt/brady-i7500">i7500</a>. Każda seria ma własny format kaset albo rolek.' },
  ],
}

export const bradyPrzemysloweTresc: SubcategoryRichContent = {
  updatedAt: '2026-11-15',
  sectionHeadings: {
    useCases: 'Zastosowania',
    comparisons: 'Porównanie materiałów',
  },
  definition: {
    heading: 'Czym są etykiety znamionowe i przemysłowe?',
    content: 'Etykieta znamionowa opisuje urządzenie: model, numer seryjny i dane techniczne. Na maszynach i szafach zastępuje grawerowaną tabliczkę. Etykiety znamionowe Brady powstają na poliestrze metalizowanym MetaLabel, białym poliestrze ToughBond i WorkHorse oraz na wypukłym materiale B-7593.\n\nDo etykiet przemysłowych należą też plomby Defender, etykiety GHS/CLP na pojemniki z chemikaliami, taśmy do znaków, taśmy odblaskowe, fotoluminescencyjne taśmy BradyGlo oraz zawieszki LOTO. Materiały do drukarek atramentowych J7300 i J4000 drukuje się w kolorze, bez taśmy barwiącej.',
  },
  comparisonTable: {
    heading: 'Materiały według zastosowania',
    intro: 'Zakres temperatury dotyczy pracy etykiety po naklejeniu. Każdy wiersz prowadzi do karty materiału.',
    modelColumn: 'Zastosowanie',
    columns: ['Materiał', 'Temperatura pracy'],
    rows: [
      { model: 'Etykieta znamionowa', href: '/produkt/brady-m6-17-428', cells: ['MetaLabel B-428, poliester metalizowany', 'od −40 do 120 °C'] },
      { model: 'Zamiennik tabliczki grawerowanej', href: '/produkt/brady-m6-10-7593-wt', cells: ['B-7593, poliester na piance polietylenowej', 'od −40 do 100 °C'] },
      { model: 'Wysoka temperatura', href: '/produkt/brady-m6-2-797', cells: ['UltraTemp B-797, poliimid', 'od −80 do 300 °C'] },
      { model: 'Plomba VOID', href: '/produkt/brady-tht-53-7576-3', cells: ['Defender B-7576, poliester metalizowany', 'od −70 do 100 °C'] },
      { model: 'Plomba krusząca się', href: '/produkt/brady-m6-17-351', cells: ['Defender B-351, winyl', 'od −40 do 80 °C'] },
      { model: 'Etykieta GHS/CLP', href: '/produkt/brady-b30-260-7569-clp1', cells: ['B-7569, winyl z nadrukowanymi rombami', 'od −20 do 75 °C'] },
      { model: 'Odporność na mycie', href: '/produkt/brady-m7-222-855', cells: ['ToughWash B-855, poliester', 'od −40 do 110 °C'] },
      { model: 'Oznakowanie podłóg', href: '/produkt/brady-b30c-4000-483wt-kt', cells: ['ToughStripe B-483A z laminatem B-634', 'od −18 do 54 °C'] },
      { model: 'Znaki świecące w ciemności', href: '/produkt/brady-bm7c-1000-582', cells: ['BradyGlo B-582, poliester fotoluminescencyjny', 'od −40 do 80 °C'] },
      { model: 'Etykieta morska BS 5609', href: '/produkt/brady-j-262-2585', cells: ['B-2585, polipropylen do druku atramentowego', 'od −40 do 60 °C'] },
    ],
  },
  buyingGuide: {
    heading: 'Jak dobrać etykietę przemysłową?',
    items: [
      'Podłoże — na powierzchnie chropowate przeznaczono przezroczysty poliester ToughBond B-432, a na zakrzywione elastyczny poliester B-484A. Na rury ze stali nierdzewnej służy poliester B-569, który zawiera mało halogenków.',
      'Temperatura — biały poliester WorkHorse B-423 wytrzymuje od −70 do 110 °C, a B-8591 do 180 °C. Poliimid UltraTemp B-724 i B-797 znosi 300 °C.',
      'Ochrona nadruku — laminat PermaShield z przezroczystego poliestru B-966 zakrywa wydruk. Etykiety One Step Protect B-711 i B-712 drukuje się od spodu przezroczystej folii.',
      'Usuwanie etykiety — etykiety CleanLift B-449 i B-533 są usuwalne, a papier CleanLift B-408 można przykleić ponownie. Plomby Defender działają odwrotnie i pokazują próbę zdjęcia.',
      'Technika druku — drukarki termotransferowe wymagają taśmy barwiącej, np. B30-R6000 do S3100 i S3700. Drukarki atramentowe J7300 i J4000 drukują w kolorze na materiałach do druku atramentowego, np. winylu B-2595.',
    ],
  },
  expertAuthority: '',
  technicalDeepDive: '',
  useCases: [
    { title: 'Maszyny i rozdzielnice', description: 'Metalizowane etykiety MetaLabel i wypukły materiał B-7593 opisują urządzenia i panele. Wypukłe etykiety B-593 mają wersję z otworem na przycisk.' },
    { title: 'Magazyny chemikaliów', description: 'Na etykietach GHS/CLP czerwone romby są wydrukowane fabrycznie. Resztę treści drukuje drukarka na materiale B-7569 albo na rolkach z papieru i polipropylenu.' },
    { title: 'Bezpieczeństwo pracy', description: 'Zawieszki LOTO z poliestru B-851 służą do blokady i oznakowania maszyn. Taśmy odblaskowe B-584 i świecące w ciemności BradyGlo służą do oznaczeń widocznych przy słabym świetle.' },
  ],
  uniqueInsights: {
    heading: 'Przed zamówieniem',
    items: [
      { title: 'Etykiety wykrawane i taśma ciągła', text: 'Etykieta wykrawana ma stały format. Na taśmie ciągłej, np. z winylu B-595 do pracy na zewnątrz, długość znaku ustala się przy druku.' },
      { title: 'Temperatura naklejania', text: 'Zakres temperatury pracy nie jest temperaturą naklejania. Do naklejania w niskiej temperaturze przeznaczono poliester B-549.' },
      { title: 'Materiały z recyklingu', text: 'Poliester B-618 ma minimum 25% surowca z recyklingu. Do drukarek atramentowych przeznaczono B-2618 z dodatkiem PET z recyklingu.' },
    ],
  },
  comparisons: [
    { title: 'Plomba krusząca się czy VOID?', verdict: 'Fragmenty etykiety na podłożu — winyl Defender B-351. Napis VOID na podłożu — poliester Defender B-7576.', content: 'Kruchy winyl B-351 rozpada się przy próbie zerwania, a na powierzchni zostają kawałki plomby. Po zdjęciu poliestru B-7576 na podłożu zostaje napis VOID. Plomba B-351 trzyma się podłoża gładkiego i chropowatego, a B-7576 wymaga gładkiego.' },
    { title: 'Etykieta metalizowana czy wypukła?', verdict: 'Płaska etykieta z danymi i kodem — MetaLabel B-428. Wygląd tabliczki grawerowanej — B-7593.', content: 'MetaLabel B-428 to poliester metalizowany o grubości 0,122 mm. Materiał B-7593 ma 0,65 mm, bo poliester jest naklejony na piankę polietylenową. Po naklejeniu wystaje ponad podłoże.' },
  ],
  faq: [
    { question: 'Na czym drukuje się etykiety znamionowe?', answer: 'Najczęściej na poliestrze metalizowanym MetaLabel, np. B-428, B-434A albo B-435A, lub na białym poliestrze B-423 i B-483A. Laminat PermaShield dodatkowo chroni nadruk. Wygląd tabliczki grawerowanej daje wypukły materiał B-7593.' },
    { question: 'Czy drukarka Brady drukuje etykiety CLP?', answer: 'Tak. Etykiety GHS/CLP z czerwonymi rombami są na materiale B30 do <a href="/produkt/brady-s3100">S3100</a> i S3700, w kasetach M7 do <a href="/produkt/brady-m710">M710</a> oraz na rolkach z gilzą 76 mm. Etykiety morskie BS 5609 z polipropylenu B-2585 drukuje w kolorze <a href="/produkt/brady-j7300">J7300</a> i J4000.' },
    { question: 'Jaka etykieta wytrzyma 300 °C?', answer: 'Etykiety z poliimidu UltraTemp. Biały B-797 działa w zakresie od −80 do 300 °C, a bursztynowy B-724 od −70 do 300 °C. Etykiety do elektroniki są w kategorii <a href="/etykiety-na-plytki-drukowane-brady">etykiety na płytki drukowane Brady</a>.' },
    { question: 'Czy etykiety przemysłowe Brady wymagają taśmy barwiącej?', answer: 'Drukarki termotransferowe drukują z taśmą. Kasety M21, M4 i M5 zawierają taśmę, a do S3100, S3700, M610 i M710 kupuje się ją osobno. Drukarki atramentowe J7300 i J4000 używają kaset z tuszem, opisanych w kategorii <a href="/tusze-brady">tusze do drukarek Brady</a>.' },
    { question: 'Czy można wydrukować taśmę do oznakowania podłóg?', answer: 'Tak. Taśma ToughStripe z poliestru B-483A z laminatem B-634 jest na materiale B30 do S3100 i S3700 oraz w kasetach M7 do M710. Pracuje od −18 do 54 °C.' },
    { question: 'Jakie etykiety są odporne na mycie?', answer: 'Etykiety ToughWash z poliestru B-855 pracują od −40 do 110 °C i są odporne na mycie. Materiał B-854 jest dodatkowo wykrywalny przez wykrywacze metali. Do drukarek atramentowych przeznaczono ToughWash B-2855.' },
  ],
  howToSteps: [],
}
