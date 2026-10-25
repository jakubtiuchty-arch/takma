import type { Product } from './products'

// BarTender (Seagull Software): 5 kart licencji — Starter, Professional, Automation, Enterprise, Cloud (25.10.2026).
// Warianty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Enterprise i plan Cloud Enterprise: tylko „Zapytaj o cenę” (decyzja właściciela 25.10.2026).
// Źródła, zawartość SKU, decyzje i pominięte SKU: docs/catalog/oprogramowanie-2026-10-25/L1.md.

const BT_EDYCJE = ['bartender-starter', 'bartender-professional', 'bartender-automation', 'bartender-enterprise', 'bartender-cloud']
const LOFTWARE = ['loftware-cloud-designer', 'loftware-cloud-essentials', 'loftware-cloud-business']
const powiazane = (slug: string) => [...BT_EDYCJE.filter((s) => s !== slug), ...LOFTWARE]

const BT_WYMAGANIA: Product['specifications'] = [
  { name: 'System operacyjny', value: 'Windows 10 i 11; Windows Server 2016, 2019, 2022 i 2025; tylko wersje 64-bitowe' },
  { name: 'Pamięć i dysk (minimum)', value: '8 GB RAM, 20 GB wolnego miejsca na dysku' },
  { name: 'Rozdzielczość ekranu', value: 'Minimum 1024 × 768, zalecana 1920 × 1080' },
  { name: '.NET Framework', value: '4.8 lub nowszy (instalator BarTender doinstalowuje brakujące składniki)' },
  { name: 'Języki interfejsu', value: '21 języków, w tym polski' },
]

const BT_DOSTAWA = { name: 'Dostarczenie licencji', value: 'Elektronicznie: kod Redemption Code e-mailem, wymiana na Product Key Code w BarTender Customer Portal, aktywacja w programie' }

const BT_LICENCJA_NA_DRUKARKI = { name: 'Licencjonowanie na drukarki (EN)', type: 'manual' as const, url: '/downloads/bartender/bartender-licencja-na-drukarki-en.pdf', size: '424 KB' }
const BT_AKTYWACJA = { name: 'Aktywacja programu BarTender (EN)', type: 'manual' as const, url: '/downloads/bartender/bartender-aktywacja-en.pdf', size: '258 KB' }

// ============================================
// BARTENDER STARTER
// ============================================

const starter: Product = {
  id: 'bartender-starter',
  slug: 'bartender-starter',
  name: 'BarTender Starter',
  seoH1: 'BarTender Starter',
  shortDescription: 'BarTender Starter — program do projektowania i drukowania etykiet na jednym stanowisku: licencja Workstation, drukarki bez limitu, subskrypcja na 1, 3 lub 5 lat.',
  seoTitle: 'BarTender Starter — program do etykiet, licencja Workstation',
  seoDescription: 'BarTender Starter: program do drukowania etykiet z kodami kreskowymi na jeden komputer, drukarki bez limitu, dane z Excel i CSV. Licencja BarTender Starter, subskrypcja 1, 3 lub 5 lat. PN: BTS-WS-SUB-1YR, BTS-WS-SUB-3YR, BTS-WS-SUB-5YR.',
  description: `BarTender Starter to podstawowa edycja programu do projektowania i drukowania etykiet firmy Seagull Software. Licencja Workstation obejmuje jednego użytkownika na jednym komputerze z systemem Windows. Liczba drukarek nie jest ograniczona. Drukarki mogą być podłączone do komputera albo pracować w sieci LAN lub WAN.

Program zawiera bibliotekę ponad 400 gotowych szablonów oraz kreatory, które prowadzą przez utworzenie dokumentu krok po kroku. Starter obsługuje ponad 100 symbologii kodów kreskowych 1D i 2D, grafikę w ponad 70 formatach, tabele i siatki, druk dwustronny oraz druk w pełnym kolorze.

Dane do etykiet Starter pobiera z plików Excel i CSV. Program nadaje proste numery seryjne, wstawia datę i godzinę w chwili druku i pozwala wybrać rekordy filtrem przed wydrukiem. Ta edycja nie obejmuje Intelligent Templates, kodowania RFID ani formularzy wprowadzania danych.

Subskrypcja trwa 1, 3 albo 5 lat. Cena obejmuje standardowe wsparcie producenta (Standard Maintenance & Support) z dostępem do aktualizacji programu. BarTender Starter jest licencją elektroniczną: kod licencji trafia e-mailem na adres użytkownika licencji.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'bartender',
  licenseDelivery: 'email',
  priceFrom: 751.44,
  images: ['/images/products/BTS-WS-SUB-1YR.png', '/images/products/bartender-12.png'],
  imageDescriptions: [
    'BarTender Starter — wybór szablonu etykiety z biblioteki BarTender, filtr według branży: motoryzacja, przemysł, life sciences, edukacja',
    'BarTender 12 — grafika producenta „What’s New in BarTender 12” z numerem wersji',
  ],
  tags: [],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Producent', value: 'Seagull Software' },
    { name: 'Wersja', value: 'BarTender 12' },
    { name: 'Edycja', value: 'Starter' },
    { name: 'Model licencji', value: 'Subskrypcja Workstation' },
    { name: 'Użytkownicy', value: '1 użytkownik na 1 komputerze' },
    { name: 'Drukarki', value: 'Bez limitu: lokalne i sieciowe (LAN, WAN)' },
    { name: 'Okres subskrypcji', value: '1, 3 lub 5 lat' },
    { name: 'Wsparcie', value: 'Standard Maintenance & Support w cenie' },
    { name: 'Projektowanie', value: 'Ponad 400 gotowych szablonów, kreatory dokumentów, ponad 100 symbologii kodów 1D i 2D, grafika w ponad 70 formatach, druk dwustronny, pełny kolor' },
    { name: 'Źródła danych', value: 'Pliki Excel i CSV; prosta numeracja seryjna; data i godzina z chwili druku' },
    { name: 'Druk', value: 'Drivers by Seagull, druk na żądanie i seryjny, podgląd wydruku, eksport obrazu w ponad 35 formatach' },
    { name: 'Nie obejmuje', value: 'Intelligent Templates, kodowanie RFID, formularze wprowadzania danych, połączenia z bazami SQL' },
    ...BT_WYMAGANIA,
    BT_DOSTAWA,
  ],
  applications: [
    'Etykiety produktowe i magazynowe z jednego stanowiska',
    'Etykiety z kodami kreskowymi z listy w Excel lub CSV',
    'Etykiety z numeracją seryjną i datą druku',
    'Etykiety według gotowych szablonów branżowych',
  ],
  variants: [
    { partNumber: 'BTS-WS-SUB-1YR', name: 'BarTender Starter — Workstation, subskrypcja 1 rok', attributes: { 'Okres': '1 rok' }, priceFrom: 751.44, availability: 'available' },
    { partNumber: 'BTS-WS-SUB-3YR', name: 'BarTender Starter — Workstation, subskrypcja 3 lata', attributes: { 'Okres': '3 lata' }, priceFrom: 2254.33, availability: 'available' },
    { partNumber: 'BTS-WS-SUB-5YR', name: 'BarTender Starter — Workstation, subskrypcja 5 lat', attributes: { 'Okres': '5 lat' }, priceFrom: 3757.2, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Okres': 'Czas, na jaki licencja BarTender Starter działa na jednym komputerze.\n\nW całym okresie obowiązuje standardowe wsparcie producenta z aktualizacjami.\n\nWarianty 3 i 5 lat nie wymagają corocznego odnawiania.',
  },
  compatibleAccessories: [],
  relatedProducts: powiazane('bartender-starter'),
  faq: [
    {
      question: 'Co oznacza licencja Workstation w BarTender Starter?',
      answer: 'Licencja Workstation pozwala jednemu użytkownikowi pracować w programie na jednym komputerze lub w jednej instalacji BarTender. Z tego stanowiska można drukować na dowolnej liczbie drukarek, także sieciowych. Druga osoba na innym komputerze potrzebuje osobnej licencji.',
    },
    {
      question: 'Czego nie ma w BarTender Starter w porównaniu z Professional?',
      answer: 'Starter łączy się tylko z plikami Excel i CSV. Nie ma Intelligent Templates (warstw i selektora szablonów), kodowania RFID, formularzy wprowadzania danych ani zapisu do baz SQL. Te funkcje zawiera [BarTender Professional](/produkt/bartender-professional), dostępny także jako licencja Workstation.',
    },
    {
      question: 'Jak otrzymam licencję po złożeniu zamówienia?',
      answer: 'W zamówieniu podaje się nazwę firmy i adres e-mail użytkownika licencji. Na ten adres trafia kod Redemption Code. Użytkownik wymienia go w BarTender Customer Portal na klucz Product Key Code, pobiera instalator i aktywuje program kluczem.',
    },
    {
      question: 'Co się dzieje po upływie okresu subskrypcji Starter?',
      answer: 'Według umowy licencyjnej Seagull Software subskrypcja przedłuża się automatycznie o 12 miesięcy, jeśli klient nie złoży pisemnego wypowiedzenia na 90 dni przed końcem okresu. Klienci z Europejskiego Obszaru Gospodarczego mogą wypowiedzieć subskrypcję wcześniej, z 60-dniowym wyprzedzeniem. W sprawie przedłużenia lub zmiany edycji prosimy o zapytanie.',
    },
    {
      question: 'Czy BarTender Starter obsłuży drukarkę Zebra, Brother albo TSC?',
      answer: 'Tak. Program drukuje przez sterowniki Drivers by Seagull, których producent udostępnia ponad 12 000. Obejmują one m.in. drukarki Zebra, Honeywell, TSC, SATO, Citizen, Brother, Epson, Bixolon i Brady.',
    },
    {
      question: 'Czy BarTender można sprawdzić przed zakupem?',
      answer: 'Seagull Software udostępnia bezpłatną 30-dniową wersję próbną ze wszystkimi funkcjami programu. Pobiera się ją ze [strony producenta](https://www.bartendersoftware.com/product/free-trial).',
    },
  ],
  downloads: [
    { name: 'Nowości w BarTender 12.1 (EN)', type: 'pdf', url: '/downloads/bartender/bartender-12-1-nowosci-en.pdf', size: '630 KB' },
    { name: 'Drivers by Seagull — sterowniki drukarek (EN)', type: 'driver', url: '/downloads/bartender/drivers-by-seagull-en.pdf', size: '254 KB' },
    BT_AKTYWACJA,
  ],
  createdAt: '2026-10-25',
  sameAs: 'https://www.bartendersoftware.com/product/pricing',
}

// ============================================
// BARTENDER PROFESSIONAL
// ============================================

const professional: Product = {
  id: 'bartender-professional',
  slug: 'bartender-professional',
  name: 'BarTender Professional',
  seoH1: 'BarTender Professional',
  shortDescription: 'BarTender Professional — program do etykiet z danymi zmiennymi: Intelligent Templates, kodowanie RFID, bazy SQL i formularze. Licencja Workstation albo na 2, 5 lub 10 drukarek.',
  seoTitle: 'BarTender Professional — licencja i subskrypcja programu do etykiet',
  seoDescription: 'BarTender Professional: program do drukowania etykiet z Intelligent Templates, RFID, bazami SQL i formularzami. Licencja BarTender Professional Workstation lub na drukarki, subskrypcja 1–5 lat. PN: BTP-WS-SUB-1YR, BTP-WS-SUB-3YR, BTP-WS-SUB-5YR, BTP-2-SUB-1YR, BTP-5-SUB-1YR, BTP-10-SUB-1YR, BTP-2-SUB-3YR, BTP-5-SUB-3YR, BTP-10-SUB-3YR, BTP-PRT-SUB-1YR, BTP-PRT-SUB-3YR.',
  description: `BarTender Professional to wersja programu Seagull Software dla firm, które drukują etykiety na podstawie danych zmiennych. Jest dostępna w dwóch modelach licencji. Wariant Workstation przeznaczony jest dla jednej osoby pracującej na jednym komputerze, z dowolną liczbą drukarek. Licencja na drukarki obejmuje 2, 5 lub 10 drukarek i nie ogranicza liczby użytkowników.

Główną funkcją edycji są Intelligent Templates. Szablon z warstwami i selektorem szablonów zastępuje wiele podobnych projektów, a dane decydują, które elementy pojawią się na wydruku. Program wykrywa i kadruje twarze na zdjęciach, a obiekty szablonu można modyfikować skryptami.

Professional łączy się z ponad 20 skonfigurowanymi źródłami danych i zapisuje dane zwrotnie do baz SQL. Numeracja może być alfanumeryczna, szesnastkowa lub według własnego wzorca. Formularze wprowadzania danych przyjmują wartości ze skanera i wagi. Edycja koduje znaczniki RFID i umożliwia zdalny druk przez przeglądarkę, także bez sterownika na urządzeniu użytkownika.

Uprawnienia oparte na rolach i hasła chronią dokumenty oraz druk. Wsparcie Standard Maintenance & Support jest w cenie subskrypcji.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'bartender',
  licenseDelivery: 'email',
  priceFrom: 1129.22,
  images: ['/images/products/BTP-WS-SUB-1YR.png', '/images/products/bartender-12.png'],
  imageDescriptions: [
    'BarTender Professional — druk zdalny na smartfonie: konsola druku z dokumentami etykiet i ustawienia drukarek sieciowych',
    'BarTender 12 — grafika producenta „What’s New in BarTender 12” z numerem wersji',
  ],
  tags: [],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Producent', value: 'Seagull Software' },
    { name: 'Wersja', value: 'BarTender 12' },
    { name: 'Edycja', value: 'Professional' },
    { name: 'Model licencji', value: 'Subskrypcja Workstation albo subskrypcja na drukarki (licencja aplikacji z określoną liczbą drukarek)' },
    { name: 'Użytkownicy', value: 'Workstation: 1 użytkownik na 1 komputerze; licencja na drukarki: bez limitu' },
    { name: 'Drukarki', value: 'Workstation: bez limitu; licencja na drukarki: 2, 5 lub 10, rozszerzenie o kolejne drukarki' },
    { name: 'Okres subskrypcji', value: 'Workstation: 1, 3 lub 5 lat; licencja na drukarki: 1 rok lub 3 lata' },
    { name: 'Wsparcie', value: 'Standard Maintenance & Support w cenie; Premium Maintenance & Support jako opcja' },
    { name: 'Szablony', value: 'Intelligent Templates: warstwy, selektor szablonów, konsolidacja szablonów; wykrywanie i kadrowanie twarzy; skrypty obiektów' },
    { name: 'Źródła danych', value: 'Ponad 20 skonfigurowanych źródeł danych, zapis zwrotny do SQL, tabele baz w szablonie, kreator bazy danych, skrypty Visual Basic' },
    { name: 'Numeracja', value: 'Alfanumeryczna, szesnastkowa i według własnych wzorców' },
    { name: 'Formularze', value: 'Formularze wprowadzania danych: wybór rekordów, dane ze skanera i wagi, zdjęcia, walidacja danych' },
    { name: 'Druk i kodowanie', value: 'Kodowanie RFID, zdalny druk przez przeglądarkę, druk zdalny bez sterownika, Drivers by Seagull' },
    { name: 'Bezpieczeństwo', value: 'Uprawnienia oparte na rolach, ochrona dokumentów i druku hasłem' },
    { name: 'Baza systemowa', value: 'Microsoft SQL Server 2012 lub nowszy dla funkcji System Database i History Explorer; SQL Server 2025 Express w pakiecie' },
    ...BT_WYMAGANIA,
    BT_DOSTAWA,
  ],
  applications: [
    'Etykiety produktowe z wieloma wariantami z jednego szablonu',
    'Etykiety z danymi z baz SQL i systemów firmy',
    'Kodowanie etykiet RFID',
    'Stanowiska druku z formularzem, skanerem i wagą',
    'Identyfikatory ze zdjęciem kadrowanym automatycznie',
  ],
  variants: [
    { partNumber: 'BTP-WS-SUB-1YR', name: 'BarTender Professional — Workstation, subskrypcja 1 rok', attributes: { 'Licencja': 'Workstation', 'Drukarki': 'Bez limitu', 'Okres': '1 rok' }, priceFrom: 1129.22, availability: 'available' },
    { partNumber: 'BTP-WS-SUB-3YR', name: 'BarTender Professional — Workstation, subskrypcja 3 lata', attributes: { 'Licencja': 'Workstation', 'Drukarki': 'Bez limitu', 'Okres': '3 lata' }, priceFrom: 3387.65, availability: 'available' },
    { partNumber: 'BTP-WS-SUB-5YR', name: 'BarTender Professional — Workstation, subskrypcja 5 lat', attributes: { 'Licencja': 'Workstation', 'Drukarki': 'Bez limitu', 'Okres': '5 lat' }, priceFrom: 5646.08, availability: 'available' },
    { partNumber: 'BTP-2-SUB-1YR', name: 'BarTender Professional — licencja na 2 drukarki, 1 rok', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '2', 'Okres': '1 rok' }, priceFrom: 1383.8, availability: 'available' },
    { partNumber: 'BTP-5-SUB-1YR', name: 'BarTender Professional — licencja na 5 drukarek, 1 rok', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '5', 'Okres': '1 rok' }, priceFrom: 2554.08, availability: 'available' },
    { partNumber: 'BTP-10-SUB-1YR', name: 'BarTender Professional — licencja na 10 drukarek, 1 rok', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '10', 'Okres': '1 rok' }, priceFrom: 4504.54, availability: 'available' },
    { partNumber: 'BTP-2-SUB-3YR', name: 'BarTender Professional — licencja na 2 drukarki, 3 lata', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '2', 'Okres': '3 lata' }, priceFrom: 4151.41, availability: 'available' },
    { partNumber: 'BTP-5-SUB-3YR', name: 'BarTender Professional — licencja na 5 drukarek, 3 lata', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '5', 'Okres': '3 lata' }, priceFrom: 7662.25, availability: 'available' },
    { partNumber: 'BTP-10-SUB-3YR', name: 'BarTender Professional — licencja na 10 drukarek, 3 lata', attributes: { 'Licencja': 'Na drukarki', 'Drukarki': '10', 'Okres': '3 lata' }, priceFrom: 13513.63, availability: 'available' },
    { partNumber: 'BTP-PRT-SUB-1YR', name: 'BarTender Professional — dodatkowa drukarka, 1 rok', attributes: { 'Licencja': 'Dodatkowa drukarka', 'Drukarki': '+1', 'Okres': '1 rok' }, priceFrom: 390.09, availability: 'available' },
    { partNumber: 'BTP-PRT-SUB-3YR', name: 'BarTender Professional — dodatkowa drukarka, 3 lata', attributes: { 'Licencja': 'Dodatkowa drukarka', 'Drukarki': '+1', 'Okres': '3 lata' }, priceFrom: 1170.28, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Licencja': 'Sposób liczenia licencji BarTender Professional.\n\nWorkstation — jeden użytkownik na jednym komputerze, drukarki bez limitu.\n\nNa drukarki — określona liczba drukarek, dowolna liczba użytkowników w sieci.\n\nDodatkowa drukarka — rozszerzenie posiadanej licencji Professional na drukarki.',
    'Drukarki': 'Liczba drukarek, na których licencja pozwala drukować w tym samym czasie.\n\nDrukarka zwalnia miejsce w licencji po 7 dniach bez wydruku.\n\n+1 — jedna drukarka więcej w posiadanej licencji.',
    'Okres': 'Czas obowiązywania subskrypcji Professional ze standardowym wsparciem producenta.\n\nWorkstation: 1, 3 lub 5 lat; licencja na drukarki: 1 rok lub 3 lata.',
  },
  compatibleAccessories: [],
  relatedProducts: powiazane('bartender-professional'),
  faq: [
    {
      question: 'Licencja Workstation czy na drukarki — którą wybrać?',
      answer: 'Workstation wystarcza, gdy etykiety projektuje i drukuje jedna osoba na jednym komputerze, nawet na wielu drukarkach. Licencja na drukarki pasuje do firm, w których kilka stanowisk drukuje na wspólnych drukarkach: liczba użytkowników i instalacji w sieci jest wtedy nieograniczona, a limit dotyczy drukarek.',
    },
    {
      question: 'Jak BarTender liczy drukarki w licencji Professional?',
      answer: 'Usługa BarTender Licensing Service w sieci zapisuje każdą drukarkę, na którą wysłano wydruk. Drukarka znika z listy po 7 dniach bez użycia. Przy chwilowym przekroczeniu limitu, np. przy wymianie drukarek, licencja może wejść w 30-dniowy okres przejściowy, ale producent nie gwarantuje go za każdym razem.',
    },
    {
      question: 'Jak dokupić drukarkę do posiadanej licencji?',
      answer: 'Służy do tego wariant „Dodatkowa drukarka” (BTP-PRT-SUB-1YR lub BTP-PRT-SUB-3YR). Rozszerza on istniejącą licencję Professional na drukarki o jedną drukarkę, a jego okres dopasowuje się do subskrypcji licencji głównej. Licencja Workstation nie wymaga dokupowania drukarek.',
    },
    {
      question: 'Do czego służą Intelligent Templates?',
      answer: 'Intelligent Templates łączą wiele podobnych etykiet w jeden szablon. Warstwy i reguły pokazują albo ukrywają elementy zależnie od danych, np. logo marki, ostrzeżenia lub język tekstu. Dzięki temu z jednego pliku powstają tysiące odmian etykiety.',
    },
    {
      question: 'Jakie dane trzeba podać przy zamówieniu Professional?',
      answer: 'Licencja jest rejestrowana na firmę użytkownika, dlatego zamówienie wymaga nazwy firmy i adresu e-mail osoby, która zarejestruje licencję. Na ten adres przychodzi kod Redemption Code. W BarTender Customer Portal kod zamienia się na klucz aktywacyjny Product Key Code.',
    },
    {
      question: 'Jak wygląda odnowienie subskrypcji Professional?',
      answer: 'Umowa licencyjna producenta przewiduje automatyczne przedłużenie o kolejne 12 miesięcy, chyba że klient pisemnie wypowie subskrypcję 90 dni przed jej końcem. W Europejskim Obszarze Gospodarczym obowiązuje także możliwość wcześniejszego wypowiedzenia z 60-dniowym wyprzedzeniem. Przedłużenie i zmianę edycji wyceniamy na zapytanie.',
    },
    {
      question: 'Czy do BarTender Professional potrzebny jest SQL Server?',
      answer: 'Do samego projektowania i druku nie. Funkcje BarTender System Database i History Explorer wymagają Microsoft SQL Server 2012 lub nowszego, w wersji Express lub pełnej. Instalator BarTender zawiera SQL Server 2025 Express.',
    },
  ],
  downloads: [
    { name: 'Intelligent Templates — przewodnik (EN)', type: 'manual', url: '/downloads/bartender/bartender-intelligent-templates-en.pdf', size: '764 KB' },
    { name: 'Print Portal — druk przez przeglądarkę (EN)', type: 'manual', url: '/downloads/bartender/bartender-print-portal-en.pdf', size: '744 KB' },
    BT_LICENCJA_NA_DRUKARKI,
    BT_AKTYWACJA,
  ],
  createdAt: '2026-10-25',
  sameAs: 'https://www.bartendersoftware.com/product/pricing',
}

// ============================================
// BARTENDER AUTOMATION
// ============================================

const automation: Product = {
  id: 'bartender-automation',
  slug: 'bartender-automation',
  name: 'BarTender Automation',
  seoH1: 'BarTender Automation',
  shortDescription: 'BarTender Automation — program do etykiet z integracjami: druk z ERP i WMS przez REST API, File Drop, e-mail lub TCP/IP. Licencja na 2, 5, 10 lub 20 drukarek, użytkownicy bez limitu.',
  seoTitle: 'BarTender Automation — automatyczny druk etykiet z ERP i WMS',
  seoDescription: 'BarTender Automation: program do drukowania etykiet uruchamianego z systemów ERP i WMS, REST API, File Drop, .NET SDK, Intelligent Forms. Licencja BarTender Automation na drukarki, subskrypcja 1 rok lub 3 lata. PN: BTA-2-SUB-1YR, BTA-5-SUB-1YR, BTA-10-SUB-1YR, BTA-20-SUB-1YR, BTA-2-SUB-3YR, BTA-5-SUB-3YR, BTA-PRT-SUB-1YR, BTA-PRT-SUB-3YR.',
  description: `W edycji BarTender Automation druk etykiet uruchamiają inne systemy firmy, np. ERP, WMS albo sterowanie linii produkcyjnej. Limit licencji dotyczy drukarek: 2, 5, 10 lub 20. Liczba użytkowników i stanowisk w sieci nie jest ograniczona.

Integracje konfiguruje się bez pisania kodu. Zadanie druku może wywołać plik zapisany w folderze (File Drop), wiadomość e-mail, połączenie TCP/IP, wywołanie REST API albo zmiana w monitorowanej bazie danych. Do dyspozycji jest ponad 70 akcji, np. druk dokumentu albo zapytanie do bazy. Programiści mogą korzystać z .NET SDK i BarTender REST API.

Automation zawiera funkcje edycji Professional, w tym Intelligent Templates, kodowanie RFID i formularze wprowadzania danych. Dodatkowo obsługuje szablony w języku drukarki oraz ponowny druk etykiet z historii obejmującej 7 dni. W subskrypcji dostępne są Intelligent Forms: formularze druku otwierane w przeglądarce i budowane metodą przeciągnij i upuść.

Subskrypcja trwa 1 rok albo 3 lata i obejmuje standardowe wsparcie producenta. Licencję można rozszerzać o kolejne drukarki.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'bartender',
  licenseDelivery: 'email',
  priceFrom: 2172.2,
  images: ['/images/products/BTA-2-SUB-1YR.png', '/images/products/BTA-2-SUB-1YR-2.png'],
  imageDescriptions: [
    'BarTender Automation — Intelligent Form Builder: kreator formularza druku z polami tekstowymi, listą wyboru i przypisanym szablonem etykiety',
    'BarTender Automation — okno BarTender File Drop z listą plików zamówień CSV przekazanych do druku na drukarkach Zebra',
  ],
  tags: [],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Producent', value: 'Seagull Software' },
    { name: 'Wersja', value: 'BarTender 12' },
    { name: 'Edycja', value: 'Automation' },
    { name: 'Model licencji', value: 'Subskrypcja na drukarki (licencja aplikacji z określoną liczbą drukarek)' },
    { name: 'Użytkownicy', value: 'Bez limitu' },
    { name: 'Drukarki', value: '2, 5, 10 lub 20; rozszerzenie o kolejne drukarki' },
    { name: 'Okres subskrypcji', value: '1 rok lub 3 lata' },
    { name: 'Wsparcie', value: 'Standard Maintenance & Support w cenie; Premium Maintenance & Support jako opcja' },
    { name: 'Integracje', value: 'REST API, File Drop, e-mail, gniazdo TCP/IP, monitorowanie bazy danych, dane strukturalne; ponad 70 akcji integracji' },
    { name: 'Dla programistów', value: '.NET SDK, BarTender REST API' },
    { name: 'Formularze', value: 'Formularze wprowadzania danych; w subskrypcji Intelligent Forms — formularze druku w przeglądarce z kreatorem bez kodowania' },
    { name: 'Druk', value: 'Szablony w języku drukarki, ponowny druk z historii 7 dni, kodowanie RFID, zdalny druk przez przeglądarkę, Drivers by Seagull' },
    { name: 'Szablony i dane', value: 'Intelligent Templates, ponad 20 źródeł danych, zapis zwrotny do SQL, skrypty Visual Basic' },
    { name: 'Baza systemowa', value: 'Microsoft SQL Server 2012 lub nowszy dla System Database, History Explorer i Reprint Console; SQL Server 2025 Express w pakiecie' },
    ...BT_WYMAGANIA,
    BT_DOSTAWA,
  ],
  applications: [
    'Druk etykiet wysyłkowych uruchamiany z systemu WMS',
    'Etykiety produkcyjne drukowane na sygnał z ERP',
    'Druk z plików CSV, XML lub JSON zapisywanych w folderze',
    'Formularze druku w przeglądarce dla stanowisk magazynowych',
    'Integracje własnych aplikacji przez REST API i .NET SDK',
  ],
  variants: [
    { partNumber: 'BTA-2-SUB-1YR', name: 'BarTender Automation — licencja na 2 drukarki, 1 rok', attributes: { 'Drukarki': '2', 'Okres': '1 rok' }, priceFrom: 2172.2, availability: 'available' },
    { partNumber: 'BTA-5-SUB-1YR', name: 'BarTender Automation — licencja na 5 drukarek, 1 rok', attributes: { 'Drukarki': '5', 'Okres': '1 rok' }, priceFrom: 4130.87, availability: 'available' },
    { partNumber: 'BTA-10-SUB-1YR', name: 'BarTender Automation — licencja na 10 drukarek, 1 rok', attributes: { 'Drukarki': '10', 'Okres': '1 rok' }, priceFrom: 7395.33, availability: 'available' },
    { partNumber: 'BTA-20-SUB-1YR', name: 'BarTender Automation — licencja na 20 drukarek, 1 rok', attributes: { 'Drukarki': '20', 'Okres': '1 rok' }, priceFrom: 13924.26, availability: 'available' },
    { partNumber: 'BTA-2-SUB-3YR', name: 'BarTender Automation — licencja na 2 drukarki, 3 lata', attributes: { 'Drukarki': '2', 'Okres': '3 lata' }, priceFrom: 6516.6, availability: 'available' },
    { partNumber: 'BTA-5-SUB-3YR', name: 'BarTender Automation — licencja na 5 drukarek, 3 lata', attributes: { 'Drukarki': '5', 'Okres': '3 lata' }, priceFrom: 12392.63, availability: 'available' },
    { partNumber: 'BTA-PRT-SUB-1YR', name: 'BarTender Automation — dodatkowa drukarka, 1 rok', attributes: { 'Drukarki': '+1', 'Okres': '1 rok' }, priceFrom: 652.89, availability: 'available' },
    { partNumber: 'BTA-PRT-SUB-3YR', name: 'BarTender Automation — dodatkowa drukarka, 3 lata', attributes: { 'Drukarki': '+1', 'Okres': '3 lata' }, priceFrom: 1958.67, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Drukarki': 'Limit drukarek licencji Automation; użytkowników i stanowisk może być dowolnie wiele.\n\n2, 5, 10, 20 — licencja aplikacji z tą liczbą drukarek.\n\n+1 — rozszerzenie posiadanej licencji Automation o jedną drukarkę.',
    'Okres': 'Długość subskrypcji Automation, w tym standardowego wsparcia i aktualizacji.\n\nIntelligent Forms działają tylko w licencji subskrypcyjnej.',
  },
  compatibleAccessories: [],
  relatedProducts: powiazane('bartender-automation'),
  faq: [
    {
      question: 'Jak BarTender Automation drukuje etykiety z systemu ERP lub WMS?',
      answer: 'Najprostsza metoda to File Drop: system zapisuje plik CSV, XML lub JSON w wybranym folderze, a BarTender drukuje na jego podstawie właściwą etykietę. Inne wyzwalacze to REST API, wiadomość e-mail, połączenie TCP/IP i zmiana rekordu w monitorowanej bazie danych. Integracje buduje się w programie Integration Builder, bez programowania.',
    },
    {
      question: 'Czym Automation różni się od Professional?',
      answer: 'Professional drukuje na polecenie użytkownika. Automation dodaje integracje z systemami firmy, .NET SDK, BarTender REST API, szablony w języku drukarki, ponowny druk z historii 7 dni i formularze Intelligent Forms. Automation nie ma licencji Workstation, tylko licencję na drukarki.',
    },
    {
      question: 'Czym są Intelligent Forms?',
      answer: 'To formularze druku otwierane w przeglądarce. Operator wpisuje dane raz, a formularz wybiera i drukuje odpowiedni szablon etykiety, bez otwierania pliku. Formularz buduje się w kreatorze metodą przeciągnij i upuść. Funkcja jest dostępna wyłącznie w licencjach subskrypcyjnych.',
    },
    {
      question: 'Co zrobić, gdy liczba drukarek wzrośnie?',
      answer: 'Licencję rozszerza się wariantem „+1” (BTA-PRT-SUB-1YR lub BTA-PRT-SUB-3YR), osobno dla każdej nowej drukarki. Okres dodatkowej drukarki jest wyrównany do subskrypcji licencji głównej. Drukarka nieużywana przez 7 dni przestaje być liczona w limicie.',
    },
    {
      question: 'Jak przebiega dostawa i aktywacja licencji Automation?',
      answer: 'Licencja ma formę elektroniczną i jest przypisana do licencjobiorcy, którego firmę i e-mail podaje się w zamówieniu. Kod Redemption Code przychodzi e-mailem; po wymianie w BarTender Customer Portal powstaje Product Key Code. Klucz aktywuje się na komputerze z usługą BarTender Licensing Service, którą łączą się wszystkie stanowiska w sieci.',
    },
    {
      question: 'Czy subskrypcja Automation odnawia się sama?',
      answer: 'Tak, według umowy licencyjnej Seagull Software. Po zakończeniu okresu subskrypcja trwa dalej przez 12 miesięcy, chyba że licencjobiorca wypowie ją pisemnie z 90-dniowym wyprzedzeniem. W EOG dostępne jest wcześniejsze wypowiedzenie z wyprzedzeniem 60 dni. O przedłużenie albo zmianę edycji prosimy pytać przed końcem okresu.',
    },
  ],
  downloads: [
    { name: 'Integration Builder — przewodnik (EN)', type: 'manual', url: '/downloads/bartender/bartender-integration-builder-en.pdf', size: '449 KB' },
    { name: 'Nowości w BarTender 12.0 (EN)', type: 'pdf', url: '/downloads/bartender/bartender-12-0-nowosci-en.pdf', size: '648 KB' },
    BT_LICENCJA_NA_DRUKARKI,
  ],
  createdAt: '2026-10-25',
  sameAs: 'https://www.bartendersoftware.com/product/pricing',
}

// ============================================
// BARTENDER ENTERPRISE (tylko na zapytanie)
// ============================================

const enterprise: Product = {
  id: 'bartender-enterprise',
  slug: 'bartender-enterprise',
  name: 'BarTender Enterprise',
  seoH1: 'BarTender Enterprise',
  shortDescription: 'BarTender Enterprise — program do etykiet z kontrolą zmian: Librarian, zatwierdzanie szablonów, dziennik audytu, podpisy elektroniczne i failover drukarek. Licencja na 3–20 drukarek, wycena na zapytanie.',
  seoTitle: 'BarTender Enterprise — zarządzanie etykietami, audyt i wersje',
  seoDescription: 'BarTender Enterprise: program do etykiet z repozytorium Librarian, Workflow Designer, dziennikiem audytu, podpisami elektronicznymi i zapasowym serwerem licencji. Licencja BarTender Enterprise na drukarki, subskrypcja, cena na zapytanie. PN: BTE-3-SUB-1YR, BTE-5-SUB-1YR, BTE-10-SUB-1YR, BTE-20-SUB-1YR, BTE-PRT-SUB-1YR.',
  description: `BarTender Enterprise to edycja programu do etykiet Seagull Software dla organizacji, które muszą kontrolować zmiany w szablonach i rejestrować działania użytkowników. Licencja jest przypisana do liczby drukarek (3, 5, 10 lub 20) i nie ogranicza liczby użytkowników.

Dokumenty i pliki przechowuje centralne repozytorium Librarian, które zapisuje kolejne wersje. Workflow Designer określa etapy zatwierdzania szablonu, zanim trafi on do produkcji. Dostęp do funkcji wyznaczają uprawnienia oparte na rolach. Dziennik audytu rejestruje zdarzenia w systemie. Podpisy elektroniczne wymagają podania danych logowania przy wybranych czynnościach, a dokumenty można szyfrować.

Ciągłość druku wspierają przełączanie zadań na inną drukarkę (printer failover) i zapasowy serwer licencji. Enterprise synchronizuje treści między instalacją lokalną a BarTender Cloud. Edycja ma integracje znane z Automation oraz Print Portal REST API, zaawansowane globalne pola bazy danych i bibliotekę wielojęzycznych tekstów Phrase Library.

Wdrożenie Enterprise zależy od liczby drukarek, lokalizacji i systemów do połączenia, dlatego tę edycję wyceniamy indywidualnie.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'bartender',
  licenseDelivery: 'email',
  quoteOnly: true,
  images: ['/images/products/BTE-3-SUB-1YR.png', '/images/products/BTE-3-SUB-1YR-2.png'],
  imageDescriptions: [
    'BarTender Enterprise — Workflow Designer: schemat zatwierdzania dokumentu „Default Approval Flow” z etapami projektu i akceptacji',
    'BarTender Enterprise — pracownik zakładu przy laptopie z otwartym przepływem zatwierdzania szablonów etykiet',
  ],
  tags: [],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Producent', value: 'Seagull Software' },
    { name: 'Wersja', value: 'BarTender 12' },
    { name: 'Edycja', value: 'Enterprise' },
    { name: 'Model licencji', value: 'Subskrypcja na drukarki (licencja aplikacji z określoną liczbą drukarek)' },
    { name: 'Użytkownicy', value: 'Bez limitu' },
    { name: 'Drukarki', value: '3, 5, 10 lub 20; rozszerzenie o kolejne drukarki' },
    { name: 'Okres subskrypcji', value: '1 rok; inne okresy na zapytanie' },
    { name: 'Wsparcie', value: 'Standard Maintenance & Support w cenie; Premium Maintenance & Support jako opcja' },
    { name: 'Zarządzanie dokumentami', value: 'Repozytorium Librarian z kontrolą wersji, Workflow Designer, uprawnienia oparte na rolach' },
    { name: 'Audyt i bezpieczeństwo', value: 'Dziennik audytu systemu, podpisy elektroniczne, szyfrowanie dokumentów' },
    { name: 'Ciągłość działania', value: 'Printer failover, zapasowy serwer licencji' },
    { name: 'Integracje', value: 'REST API, File Drop, e-mail, TCP/IP, monitorowanie bazy danych, .NET SDK, BarTender REST API, Print Portal REST API' },
    { name: 'Dane', value: 'Zaawansowane globalne pola bazy danych, Phrase Library — biblioteka wielojęzycznych tekstów' },
    { name: 'Chmura', value: 'Synchronizacja treści między instalacją lokalną a BarTender Cloud' },
    { name: 'Baza systemowa', value: 'Microsoft SQL Server 2012 lub nowszy dla System Database, Librarian, History Explorer i Reprint Console; SQL Server 2025 Express w pakiecie' },
    ...BT_WYMAGANIA,
    BT_DOSTAWA,
  ],
  applications: [
    'Zatwierdzanie i wersjonowanie szablonów etykiet',
    'Etykietowanie z dziennikiem audytu i podpisem elektronicznym',
    'Druk w wielu zakładach z jednego repozytorium szablonów',
    'Linie produkcyjne z drukarką zapasową',
  ],
  variants: [
    { partNumber: 'BTE-3-SUB-1YR', name: 'BarTender Enterprise — licencja na 3 drukarki, 1 rok', attributes: { 'Drukarki': '3' }, availability: 'available' },
    { partNumber: 'BTE-5-SUB-1YR', name: 'BarTender Enterprise — licencja na 5 drukarek, 1 rok', attributes: { 'Drukarki': '5' }, availability: 'available' },
    { partNumber: 'BTE-10-SUB-1YR', name: 'BarTender Enterprise — licencja na 10 drukarek, 1 rok', attributes: { 'Drukarki': '10' }, availability: 'available' },
    { partNumber: 'BTE-20-SUB-1YR', name: 'BarTender Enterprise — licencja na 20 drukarek, 1 rok', attributes: { 'Drukarki': '20' }, availability: 'available' },
    { partNumber: 'BTE-PRT-SUB-1YR', name: 'BarTender Enterprise — dodatkowa drukarka, 1 rok', attributes: { 'Drukarki': '+1' }, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Drukarki': 'Liczba drukarek objętych roczną licencją Enterprise; liczba użytkowników jest nieograniczona.\n\n+1 — kolejna drukarka do posiadanej licencji Enterprise, w okresie licencji głównej.',
  },
  compatibleAccessories: [],
  relatedProducts: powiazane('bartender-enterprise'),
  faq: [
    {
      question: 'Dlaczego BarTender Enterprise nie ma ceny w sklepie?',
      answer: 'Producent nie publikuje ceny tej edycji. Konfiguracja zależy od liczby drukarek, zakładów, integracji i potrzebnego wsparcia, dlatego przygotowujemy ofertę na zapytanie. Zapytanie powinno zawierać liczbę drukarek, lokalizacji i systemów do połączenia.',
    },
    {
      question: 'Co zapewnia Librarian w BarTender Enterprise?',
      answer: 'Librarian to wspólne repozytorium dokumentów BarTender, obrazów i innych plików. Zapisuje kolejne wersje z informacją, kto i kiedy wprowadził zmianę, i pozwala wrócić do wcześniejszej wersji. Stany plików i przejścia między nimi określa przepływ zatwierdzania.',
    },
    {
      question: 'Czym Enterprise różni się od Automation?',
      answer: 'Obie edycje mają te same integracje. Enterprise dodaje Librarian, Workflow Designer, uprawnienia oparte na rolach, dziennik audytu, podpisy elektroniczne, szyfrowanie dokumentów, printer failover, zapasowy serwer licencji, Print Portal REST API i synchronizację z BarTender Cloud. Bez tych funkcji wystarcza [BarTender Automation](/produkt/bartender-automation).',
    },
    {
      question: 'Co się stanie, gdy serwer licencji BarTender będzie niedostępny?',
      answer: 'Po utracie połączenia z BarTender Licensing Service program działa jeszcze przez 72 godziny, aby administrator mógł usunąć awarię. Enterprise pozwala dodatkowo skonfigurować zapasowy serwer licencji, który przejmuje tę funkcję.',
    },
    {
      question: 'Jakie dane są potrzebne do zamówienia licencji Enterprise?',
      answer: 'Do oferty i zamówienia potrzebne są nazwa firmy licencjobiorcy oraz adres e-mail osoby, która zarejestruje licencję w BarTender Customer Portal. Kod licencji przychodzi na ten adres e-mail.',
    },
  ],
  downloads: [
    { name: 'Librarian — przewodnik (EN)', type: 'manual', url: '/downloads/bartender/bartender-librarian-en.pdf', size: '520 KB' },
    { name: 'Bezpieczeństwo systemu BarTender (EN)', type: 'manual', url: '/downloads/bartender/bartender-bezpieczenstwo-systemu-en.pdf', size: '502 KB' },
    BT_LICENCJA_NA_DRUKARKI,
  ],
  createdAt: '2026-10-25',
  sameAs: 'https://www.bartendersoftware.com/product/pricing',
}

// ============================================
// BARTENDER CLOUD (Essentials, Automation; Enterprise na zapytanie)
// ============================================

const cloud: Product = {
  id: 'bartender-cloud',
  slug: 'bartender-cloud',
  name: 'BarTender Cloud',
  seoH1: 'BarTender Cloud',
  shortDescription: 'BarTender Cloud — program do etykiet w chmurze: projektowanie i druk w przeglądarce, użytkownicy bez limitu. Plany Essentials i Automation na 1–20 drukarek, roczna subskrypcja.',
  seoTitle: 'BarTender Cloud — program do etykiet w chmurze, subskrypcja',
  seoDescription: 'BarTender Cloud: program do drukowania etykiet w przeglądarce, plany Essentials, Automation i Enterprise, REST API, File Drop, druk bez sterownika na Zebra i TSC. Subskrypcja BarTender Cloud na drukarki. PN: BTC-1-ESS-SUB-1YR, BTC-2-ESS-SUB-1YR, BTC-5-ESS-SUB-1YR, BTC-2-AUT-SUB-1YR, BTC-3-AUT-SUB-1YR, BTC-5-AUT-SUB-1YR, BTC-20-AUT-SUB-1YR, BTC-10-ENT-SUB-1YR, BTC-ENT-PRT-SUB-1YR.',
  description: `BarTender Cloud to program do etykiet Seagull Software w modelu usługi w chmurze (SaaS). Projektowanie, przechowywanie dokumentów i zlecanie druku odbywają się w przeglądarce, bez instalowania programu BarTender na komputerach użytkowników. Przy pierwszym wydruku instaluje się usługę Print Gateway, która wykrywa podłączone drukarki. Sklep oferuje subskrypcje roczne liczone według drukarek, a liczba użytkowników nie jest ograniczona.

Plan Essentials zawiera BarTender Cloud Designer, Intelligent Templates, kodowanie RFID, generowanie PDF i formularze wprowadzania danych. Dokumenty są przechowywane centralnie, z historią zmian i uprawnieniami według ról. Konto ma 2 GB przestrzeni.

Plan Automation dodaje integracje REST API i File Drop, Workflow Designer, przestrzenie Cloud Spaces oraz formularze druku w przeglądarce. Pozwala też drukować na drukarkach Zebra i TSC bezpośrednio z chmury, bez sterownika. Konto ma 5 GB przestrzeni.

Plan Enterprise dodaje gotowe konektory druku z systemów ERP i logowanie jednokrotne (SSO); ten plan wyceniamy na zapytanie. Producent deklaruje dostępność usługi na poziomie 99,99% oraz certyfikację SOC Type 2 i ISO 27001.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'bartender',
  licenseDelivery: 'email',
  priceFrom: 1478.25,
  images: [
    '/images/products/BTC-1-ESS-SUB-1YR.png',
    '/images/products/BTC-1-ESS-SUB-1YR-2.png',
    '/images/products/BTC-1-ESS-SUB-1YR-3.png',
  ],
  imageDescriptions: [
    'BarTender Cloud — strona startowa konta w przeglądarce: statystyki druku z 30 dni i lista ostatnio drukowanych dokumentów',
    'BarTender Cloud — kreator nowego dokumentu z szablonu: wybór źródła danych, m.in. Azure SQL, Microsoft Excel, Google Sheets i SAP HANA',
    'BarTender Cloud Designer — projekt etykiety logistycznej z kodami kreskowymi na monitorze w magazynie',
  ],
  tags: [],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Producent', value: 'Seagull Software' },
    { name: 'Usługa', value: 'BarTender Cloud (SaaS), dostęp przez przeglądarkę' },
    { name: 'Plany', value: 'Essentials, Automation, Enterprise' },
    { name: 'Model licencji', value: 'Roczna subskrypcja liczona według drukarek' },
    { name: 'Użytkownicy', value: 'Bez limitu' },
    { name: 'Drukarki', value: 'Essentials: 1, 2 lub 5; Automation: 2, 3, 5 lub 20; Enterprise: od 10, rozszerzenie o kolejne drukarki' },
    { name: 'Przestrzeń konta', value: 'Essentials: 2 GB; Automation i Enterprise: 5 GB' },
    { name: 'Wsparcie', value: 'Essentials: poziom Essential; Automation i Enterprise: poziom Standard, opcja Premium' },
    { name: 'Projektowanie', value: 'BarTender Cloud Designer, ponad 400 szablonów, ponad 100 symbologii kodów 1D i 2D, Intelligent Templates, Template Assistant, Font Manager' },
    { name: 'Dane', value: 'Połączenia z bazami danych w chmurze i plikami lokalnymi, przesyłanie plików Excel, CSV i TXT, tabele baz w szablonie, zaawansowana numeracja' },
    { name: 'Druk', value: 'Usługa Print Gateway, Drivers by Seagull, kodowanie RFID, generowanie PDF, druk zdalny; Automation i Enterprise: druk bezpośrednio z chmury na drukarki Zebra i TSC' },
    { name: 'Integracje', value: 'Automation i Enterprise: REST API, File Drop; Enterprise: gotowe konektory druku z ERP' },
    { name: 'Zarządzanie', value: 'Centralne dokumenty, historia zmian, uprawnienia według ról; Automation i Enterprise: Workflow Designer, Cloud Spaces' },
    { name: 'Logowanie jednokrotne (SSO)', value: 'Plan Enterprise' },
    { name: 'Dostępność i bezpieczeństwo', value: 'Dostępność 99,99%, certyfikacja SOC Type 2 i ISO 27001' },
    { name: 'Dostarczenie licencji', value: 'Elektronicznie, na adres e-mail użytkownika licencji podany w zamówieniu' },
  ],
  applications: [
    'Druk etykiet w wielu lokalizacjach bez serwera w firmie',
    'Udostępnianie szablonów dostawcom i zespołom zdalnym',
    'Druk z plików i systemów firmy przez REST API i File Drop',
    'Druk z chmury na drukarki Zebra i TSC bez sterownika',
  ],
  variants: [
    { partNumber: 'BTC-1-ESS-SUB-1YR', name: 'BarTender Cloud Essentials — 1 drukarka, 1 rok', attributes: { 'Plan': 'Essentials', 'Drukarki': '1' }, priceFrom: 1478.25, availability: 'available' },
    { partNumber: 'BTC-2-ESS-SUB-1YR', name: 'BarTender Cloud Essentials — 2 drukarki, 1 rok', attributes: { 'Plan': 'Essentials', 'Drukarki': '2' }, priceFrom: 2184.52, availability: 'available' },
    { partNumber: 'BTC-5-ESS-SUB-1YR', name: 'BarTender Cloud Essentials — 5 drukarek, 1 rok', attributes: { 'Plan': 'Essentials', 'Drukarki': '5' }, priceFrom: 4303.34, availability: 'available' },
    { partNumber: 'BTC-2-AUT-SUB-1YR', name: 'BarTender Cloud Automation — 2 drukarki, 1 rok', attributes: { 'Plan': 'Automation', 'Drukarki': '2' }, priceFrom: 6841, availability: 'available' },
    { partNumber: 'BTC-3-AUT-SUB-1YR', name: 'BarTender Cloud Automation — 3 drukarki, 1 rok', attributes: { 'Plan': 'Automation', 'Drukarki': '3' }, priceFrom: 8697.02, availability: 'available' },
    { partNumber: 'BTC-5-AUT-SUB-1YR', name: 'BarTender Cloud Automation — 5 drukarek, 1 rok', attributes: { 'Plan': 'Automation', 'Drukarki': '5' }, priceFrom: 12409.06, availability: 'available' },
    { partNumber: 'BTC-20-AUT-SUB-1YR', name: 'BarTender Cloud Automation — 20 drukarek, 1 rok', attributes: { 'Plan': 'Automation', 'Drukarki': '20' }, priceFrom: 40249.36, availability: 'available' },
    { partNumber: 'BTC-10-ENT-SUB-1YR', name: 'BarTender Cloud Enterprise — 10 drukarek, 1 rok', attributes: { 'Plan': 'Enterprise', 'Drukarki': '10' }, availability: 'available', quoteOnly: true },
    { partNumber: 'BTC-ENT-PRT-SUB-1YR', name: 'BarTender Cloud Enterprise — dodatkowa drukarka, 1 rok', attributes: { 'Plan': 'Enterprise', 'Drukarki': '+1' }, availability: 'available', quoteOnly: true },
  ],
  variantAttributeTooltips: {
    'Plan': 'Zakres funkcji subskrypcji BarTender Cloud.\n\nEssentials — projektowanie w przeglądarce, Intelligent Templates, RFID, 2 GB.\n\nAutomation — dodatkowo REST API, File Drop, druk z chmury na Zebra i TSC, 5 GB.\n\nEnterprise — dodatkowo konektory ERP i SSO, wycena na zapytanie.',
    'Drukarki': 'Liczba drukarek w rocznej subskrypcji BarTender Cloud; użytkowników może być dowolnie wielu.\n\n+1 — kolejna drukarka do planu Enterprise.',
  },
  compatibleAccessories: [],
  relatedProducts: powiazane('bartender-cloud'),
  faq: [
    {
      question: 'Który plan BarTender Cloud wybrać?',
      answer: 'Essentials wystarcza do projektowania etykiet i drukowania ich z przeglądarki, z centralnym przechowywaniem dokumentów. Automation jest potrzebny, gdy druk ma uruchamiać inny system przez REST API lub pliki File Drop, oraz do druku z chmury na drukarki Zebra i TSC bez sterownika. Enterprise dodaje konektory ERP i SSO.',
    },
    {
      question: 'Czy BarTender Cloud wymaga instalacji czegokolwiek?',
      answer: 'Projektowanie i obsługa konta działają w przeglądarce. Przy pierwszym druku BarTender Cloud prosi o instalację usługi Print Gateway, która wykrywa drukarki i korzysta z wbudowanych sterowników Drivers by Seagull. W planach Automation i Enterprise drukarki Zebra i TSC można podłączyć do chmury bezpośrednio, bez sterownika i usługi pośredniczącej.',
    },
    {
      question: 'Czym BarTender Cloud różni się od BarTender instalowanego lokalnie?',
      answer: 'Wersja w chmurze nie wymaga serwera w firmie, a aktualizacje producent wdraża sam. Wersje lokalne Starter, Professional, Automation i Enterprise działają na komputerach z Windows i mogą drukować bez stałego połączenia z internetem. Lokalnie dostępna jest też licencja Workstation, której BarTender Cloud nie oferuje.',
    },
    {
      question: 'Jak liczone są drukarki i użytkownicy w BarTender Cloud?',
      answer: 'Subskrypcja określa liczbę drukarek: 1, 2 lub 5 w Essentials oraz 2, 3, 5 lub 20 w Automation. Użytkowników konta może być dowolnie wielu, także spoza firmy, np. dostawców drukujących etykiety według udostępnionych szablonów.',
    },
    {
      question: 'Jakie dane są potrzebne do zamówienia BarTender Cloud?',
      answer: 'Subskrypcja jest przypisywana do firmy i administratora konta. Zamówienie musi zawierać nazwę firmy oraz adres e-mail użytkownika licencji, na który trafią dane licencji.',
    },
    {
      question: 'Czy subskrypcja BarTender Cloud przedłuża się automatycznie?',
      answer: 'Warunki licencji Seagull Software przewidują przedłużenie o 12 miesięcy, jeśli subskrypcja nie zostanie wypowiedziana pisemnie co najmniej 90 dni przed jej wygaśnięciem. Klienci z EOG mogą zakończyć subskrypcję wcześniej, po 60-dniowym okresie wypowiedzenia. Zmianę planu lub liczby drukarek wyceniamy na zapytanie.',
    },
    {
      question: 'Czy BarTender Cloud ma wersję próbną?',
      answer: 'Na stronie BarTender Cloud producent udostępnia formularz prośby o wersję próbną. Szczegóły podaje [strona producenta](https://www.bartendersoftware.com/product/cloud).',
    },
  ],
  downloads: [
    { name: 'Pierwsze kroki w BarTender Cloud (EN)', type: 'manual', url: '/downloads/bartender/bartender-cloud-pierwsze-kroki-en.pdf', size: '731 KB' },
    { name: 'Nowości w BarTender 12.1 (EN)', type: 'pdf', url: '/downloads/bartender/bartender-12-1-nowosci-en.pdf', size: '630 KB' },
  ],
  createdAt: '2026-10-25',
  sameAs: 'https://www.bartendersoftware.com/product/cloud',
}

export const bartenderProducts: Product[] = [starter, professional, automation, enterprise, cloud]
