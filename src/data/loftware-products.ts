import type { Product } from './products'

// Loftware Cloud (dawniej NiceLabel): subskrypcje Designer, Essentials i Business (25.10.2026).
// Warianty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, kartę aktualizuje API.
// Business jest na zapytanie (decyzja właściciela), dlatego karta ma quoteOnly i nie ma ceny.
// Źródła: pomoc Loftware Cloud (About Cloud Designer, How Licensing Works, System Requirements, wersja 25.9),
// Loftware Product Range Rebranding, arkusz „Edition comparison sheet” Loftware (04.2025).
// Dokumentacja: docs/catalog/oprogramowanie-2026-10-25/L2.md

const PORÓWNANIE_EDYCJI = { name: 'Porównanie edycji Loftware Cloud (EN)', type: 'pdf' as const, url: '/downloads/loftware/loftware-cloud-porownanie-edycji-en.pdf', size: '84 KB' }
const STEROWNIKI = { name: 'Sterowniki drukarek Loftware dla Windows', type: 'driver' as const, url: 'https://drivers.loftware.com/', size: 'Online' }
const LOFTWARE_CLOUD = 'https://www.loftware.com/products/loftware-cloud'

const designer: Product = {
  id: 'loftware-cloud-designer',
  slug: 'loftware-cloud-designer',
  name: 'Loftware Cloud Designer',
  shortDescription: 'Loftware Cloud Designer (NiceLabel) — roczna subskrypcja programu do etykiet w chmurze: Web Designer w przeglądarce, Desktop Designer dla Windows, od 1 do 10 drukarek.',
  seoTitle: 'Loftware Cloud Designer — program do etykiet w chmurze',
  seoDescription: 'Loftware Cloud Designer: subskrypcja programu do projektowania i drukowania etykiet w chmurze, 1–10 drukarek, Web Designer i Desktop Designer. Program do projektowania etykiet Loftware, NiceLabel Cloud Designer, licencja Loftware Cloud Designer, subskrypcja NiceLabel. PN: NSCDBA001Y, NSCDAD001Y.',
  description: `Loftware Cloud Designer to roczna subskrypcja programu do projektowania i drukowania etykiet w chmurze Loftware Cloud. Edycja jest przeznaczona dla małych i średnich firm, które drukują etykiety na kilku drukarkach.

Pliki etykiet są zapisane w Loftware Control Center, czyli w panelu otwieranym w przeglądarce. Etykietę projektuje się w Web Designer w przeglądarce albo w programie Loftware Desktop Designer na komputerze z Windows. Ten sam plik otwiera się w obu edytorach. Gotowe etykiety drukuje się także z aplikacji Loftware Print, bez otwierania projektu. Druk zdalny działa na każdej drukarce podłączonej do komputera z programem Desktop Designer.

Licencja obejmuje miejsca drukarek. Każda drukarka fizyczna lub wirtualna, np. PDF albo XPS, zajmuje jedno miejsce. Liczba komputerów i użytkowników w jednej domenie nie jest ograniczona. Subskrypcja NSCDBA001Y obejmuje jedną drukarkę, a każde rozszerzenie NSCDAD001Y dodaje kolejną, łącznie do 10.

Konto ma 1 GB miejsca na etykiety i jedno środowisko produkcyjne. Dane do etykiet program pobiera m.in. z Excela, plików tekstowych, SQL Server, Oracle, MySQL i Google Sheets. Po zakupie licencjobiorca otrzymuje zaproszenie e-mailem i loguje się kontem Microsoft albo Google.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'loftware',
  priceFrom: 566.67,
  licenseDelivery: 'email',
  images: ['/images/products/NSCDBA001Y.png'],
  imageDescriptions: [
    'Loftware Cloud Designer — Web Designer w przeglądarce: projekt etykiety produktu z kodem Data Matrix i kodem kreskowym, po lewej panel obiektów: tekst, kod kreskowy, kształty i obraz',
  ],
  tags: ['produkcja', 'logistyka'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  variantAttributeTooltips: {
    'Licencja': 'Pozycja subskrypcji Loftware Cloud Designer na 1 rok.\n\nSubskrypcja podstawowa — konto Control Center z Web Designer, Desktop Designer i Loftware Print oraz 1 drukarką.\n\nDodatkowa drukarka — rozszerzenie istniejącej subskrypcji Designer; nie działa bez subskrypcji podstawowej.',
    'Drukarki': 'Liczba miejsc drukarek, które dodaje pozycja.\n\nMiejsce zajmuje każda drukarka, na której program drukuje, także wirtualna PDF lub XPS.\n\nW edycji Designer można mieć łącznie do 10 drukarek.',
  },
  variants: [
    {
      partNumber: 'NSCDBA001Y',
      name: 'Loftware Cloud Designer — subskrypcja 1 rok, 1 drukarka',
      attributes: { 'Licencja': 'Subskrypcja podstawowa', 'Drukarki': '1' },
      priceFrom: 1478.25,
      availability: 'available',
    },
    {
      partNumber: 'NSCDAD001Y',
      name: 'Loftware Cloud Designer — dodatkowa drukarka, 1 rok',
      attributes: { 'Licencja': 'Dodatkowa drukarka', 'Drukarki': '+1' },
      priceFrom: 566.67,
      availability: 'available',
    },
  ],
  specifications: [
    { name: 'Producent', value: 'Loftware (marka NiceLabel)' },
    { name: 'Edycja', value: 'Loftware Cloud Designer' },
    { name: 'Model licencji', value: 'Subskrypcja na 1 rok, liczona miejscami drukarek' },
    { name: 'Drukarki', value: '1 w subskrypcji podstawowej, rozszerzenia po 1 drukarce, łącznie do 10' },
    { name: 'Komputery i użytkownicy', value: 'Bez limitu w jednej domenie, jeden klucz licencji dla wszystkich komputerów' },
    { name: 'Składniki', value: 'Loftware Control Center (chmura), Web Designer, Loftware Desktop Designer, Loftware Print; formularze druku w chmurze i na komputerze' },
    { name: 'Loftware Automation', value: 'Tylko wersja próbna instalowana z Desktop Designer; dalsze użycie wymaga wyższej edycji' },
    { name: 'Miejsce na etykiety', value: '1 GB w chmurze' },
    { name: 'Środowiska', value: '1, produkcyjne' },
    { name: 'Źródła danych', value: 'Excel, Access, SQL Server, pliki tekstowe, Oracle, MySQL, OLEDB, ODBC, Google Sheets, Excel w OneDrive' },
    { name: 'Logowanie', value: 'Konto Microsoft albo Google' },
    { name: 'Pomoc techniczna', value: 'Poziom Basic, kontakt e-mailem' },
    { name: 'System (Desktop Designer, Loftware Print)', value: 'Windows 11; Windows Server 2016, 2019, 2022, 2025 (bez Server Core i Nano Server); procesor x86' },
    { name: 'Wymagania sprzętowe', value: 'Minimum 8 GB RAM i 20 GB na dysku (zalecane 16 GB RAM i 40 GB SSD), ekran 1366 × 768, .NET Framework 4.7.2 lub nowszy' },
    { name: 'Sterowniki', value: 'Sterowniki drukarek Loftware w wersji 5 lub nowszej' },
    { name: 'Połączenie', value: 'Stały dostęp do internetu; komputery z Desktop Designer muszą być połączone z Control Center' },
    { name: 'Dostarczenie licencji', value: 'Zaproszenie e-mailem do konta Loftware Cloud' },
  ],
  applications: [
    'Projektowanie etykiet produktów i wysyłek w przeglądarce',
    'Druk etykiet z danych w Excelu i bazach SQL',
    'Wspólne szablony etykiet dla kilku komputerów',
    'Druk zdalny na drukarkach w innej lokalizacji',
  ],
  compatibleAccessories: [],
  relatedProducts: ['loftware-cloud-essentials', 'loftware-cloud-business', 'bartender-starter', 'bartender-professional', 'bartender-cloud'],
  faq: [
    {
      question: 'Czym Loftware Cloud Designer różni się od Loftware Cloud Essentials?',
      answer: 'Designer służy do projektowania i drukowania etykiet na 1–10 drukarkach. [Loftware Cloud Essentials](/produkt/loftware-cloud-essentials) obsługuje od 2 do 20 drukarek. Ma też Designer PowerForms do tworzenia formularzy, druk z przeglądarki przez Loftware Web Client, prostą integrację z lokalnymi systemami firmy oraz historię druku z 3 miesięcy.',
    },
    {
      question: 'Jak Loftware liczy drukarki w licencji?',
      answer: 'Licencja określa liczbę miejsc drukarek. Każda drukarka, na którą program wysyła wydruk, zajmuje jedno miejsce, także drukarka wirtualna PDF albo XPS. Jeśli firma regularnie używa większej liczby drukarek, potrzebne jest rozszerzenie NSCDAD001Y. Edycja Designer obsługuje łącznie do 10 drukarek.',
    },
    {
      question: 'Jak otrzymam licencję i jakie dane są potrzebne do zamówienia?',
      answer: 'Licencja jest elektroniczna. Po zamówieniu użytkownik licencji otrzymuje e-mailem zaproszenie do konta Loftware Cloud i loguje się kontem Microsoft albo Google. Do zamówienia potrzebne są nazwa firmy licencjobiorcy i adres e-mail osoby, która będzie zarządzać kontem.',
    },
    {
      question: 'Czy Loftware Cloud Designer działa bez internetu?',
      answer: 'Nie. Komputery z programem Desktop Designer muszą mieć połączenie z Loftware Control Center. Zapora sieciowa musi przepuszczać ruch wychodzący do adresu konta w domenie onnicelabel.com na porcie 443.',
    },
    {
      question: 'Jakie wymagania ma komputer z Desktop Designer?',
      answer: 'Desktop Designer działa w Windows 11 oraz Windows Server 2016–2025, na procesorze x86. Minimum to 8 GB RAM, 20 GB wolnego miejsca na dysku i .NET Framework 4.7.2. Przy kilku drukarkach i dużej liczbie wydruków producent zaleca 16 GB RAM i dysk SSD.',
    },
    {
      question: 'Z jakimi drukarkami współpracuje program?',
      answer: 'Loftware udostępnia bezpłatne sterowniki Windows do ponad 4500 modeli drukarek, w tym Zebra, Honeywell, TSC, SATO, Citizen, Brother, Epson, BIXOLON, Brady i Godex. Producent zaleca sterowniki Loftware w wersji 5 lub nowszej. Sterowniki są dostępne na stronie drivers.loftware.com.',
    },
    {
      question: 'Czy Designer automatycznie drukuje etykiety z systemu firmy?',
      answer: 'Nie. Loftware Automation, czyli druk uruchamiany zdarzeniami z innych systemów, można w tej edycji zainstalować tylko jako wersję próbną. Do stałej pracy z integracjami potrzebna jest wyższa edycja, np. Loftware Cloud Essentials albo Business.',
    },
    {
      question: 'Jakie są alternatywy dla Loftware Cloud Designer?',
      answer: 'Dla jednego stanowiska z programem instalowanym w Windows można wybrać [BarTender Starter](/produkt/bartender-starter). Jeśli potrzebne są formularze dla operatorów i więcej drukarek, odpowiednia jest [Loftware Cloud Essentials](/produkt/loftware-cloud-essentials). Pozostałe programy są w kategorii [programy do etykiet](/programy-do-etykiet).',
    },
  ],
  downloads: [PORÓWNANIE_EDYCJI, STEROWNIKI],
  createdAt: '2026-10-25',
  sameAs: LOFTWARE_CLOUD,
}

const essentials: Product = {
  id: 'loftware-cloud-essentials',
  slug: 'loftware-cloud-essentials',
  name: 'Loftware Cloud Essentials',
  shortDescription: 'Loftware Cloud Essentials (NiceLabel) — roczna subskrypcja do druku etykiet w chmurze z formularzami Designer PowerForms i drukiem z przeglądarki, od 2 do 20 drukarek.',
  seoTitle: 'Loftware Cloud Essentials — etykiety, formularze, 2–20 drukarek',
  seoDescription: 'Loftware Cloud Essentials: program do drukowania etykiet w chmurze z formularzami dla operatorów, Web Client i integracją z systemami firmy, 2–20 drukarek. Program do etykiet Loftware, NiceLabel Cloud Essentials, subskrypcja Loftware Cloud. PN: NSCEBS001M, NSCEAO001M, NSCEDB001M, NSCEPH001M.',
  description: `Loftware Cloud Essentials to roczna subskrypcja Loftware Cloud dla firm, w których etykiety drukują operatorzy w kilku miejscach i na kilku stanowiskach. Subskrypcja podstawowa NSCEBS001M obejmuje do 2 drukarek. Rozszerzenie NSCEAO001M dodaje kolejne drukarki, łącznie do 20.

Edycja zawiera wszystkie narzędzia Loftware Cloud Designer i dodaje kreator formularzy Designer PowerForms. Formularz pokazuje operatorowi tylko pola potrzebne do druku i ukrywa szczegóły techniczne szablonu. Formularze działają w aplikacji Loftware Print albo w przeglądarce, przez Loftware Web Client. Dzięki temu stanowisko druku nie wymaga instalacji programu do projektowania.

Integracja na poziomie Essentials przekazuje dane z systemów firmy zainstalowanych lokalnie do druku etykiet. Przepływ danych jest jednokierunkowy.

Nowe i zmienione dokumenty przechodzą przez jeden domyślny proces zatwierdzania. Uprawnienia przydziela się według ról użytkowników. Konto ma 1 GB na dokumenty, a historia druku obejmuje 3 miesiące. Pozycja NSCEDB001M dodaje bazę SQL w chmurze o pojemności 1 GB. Pozycja NSCEPH001M wydłuża historię druku do roku.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'loftware',
  priceFrom: 788.4,
  licenseDelivery: 'email',
  images: ['/images/products/NSCEBS001M.png', '/images/products/NSCDBA001Y.png'],
  imageDescriptions: [
    'Loftware Cloud Essentials — grafika Loftware Cloud: regały magazynowe z oznakowanymi pojemnikami i pracownik z wydrukowaną etykietą wysyłkową na kartonie',
    'Loftware Cloud Essentials — edytor Web Designer w przeglądarce z projektem etykiety produktu, kodem Data Matrix i kodem kreskowym',
  ],
  tags: ['produkcja', 'logistyka', 'magazyn'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  variantAttributeTooltips: {
    'Licencja': 'Rodzaj pozycji w subskrypcji Loftware Cloud Essentials na 1 rok.\n\nSubskrypcja podstawowa — konto Essentials z formularzami Designer PowerForms i Web Client.\n\nDodatkowa drukarka i opcja — rozszerzają istniejącą subskrypcję Essentials.',
    'Drukarki': 'Liczba miejsc drukarek w pozycji.\n\nSubskrypcja podstawowa obejmuje do 2 drukarek, a każde rozszerzenie dodaje 1.\n\nEssentials obsługuje łącznie do 20 drukarek.',
    'Dodatek': 'Opcja dokupowana do subskrypcji Essentials.\n\nBaza SQL w chmurze 1 GB — miejsce na własne dane do etykiet w Loftware Cloud.\n\nHistoria druku 1 rok — dłuższy okres przechowywania historii zamiast standardowych 3 miesięcy.',
  },
  variants: [
    {
      partNumber: 'NSCEBS001M',
      name: 'Loftware Cloud Essentials — subskrypcja 1 rok, do 2 drukarek',
      attributes: { 'Licencja': 'Subskrypcja podstawowa', 'Drukarki': 'do 2' },
      priceFrom: 3055.04,
      availability: 'available',
    },
    {
      partNumber: 'NSCEAO001M',
      name: 'Loftware Cloud Essentials — dodatkowa drukarka, 1 rok',
      attributes: { 'Licencja': 'Dodatkowa drukarka', 'Drukarki': '+1' },
      priceFrom: 788.4,
      availability: 'available',
    },
    {
      partNumber: 'NSCEDB001M',
      name: 'Loftware Cloud Essentials — baza SQL w chmurze 1 GB, 1 rok',
      attributes: { 'Licencja': 'Opcja', 'Dodatek': 'Baza SQL w chmurze 1 GB' },
      priceFrom: 2463.75,
      availability: 'available',
    },
    {
      partNumber: 'NSCEPH001M',
      name: 'Loftware Cloud Essentials — historia druku 1 rok',
      attributes: { 'Licencja': 'Opcja', 'Dodatek': 'Historia druku 1 rok' },
      priceFrom: 2463.75,
      availability: 'available',
    },
  ],
  specifications: [
    { name: 'Producent', value: 'Loftware (marka NiceLabel)' },
    { name: 'Edycja', value: 'Loftware Cloud Essentials' },
    { name: 'Model licencji', value: 'Subskrypcja na 1 rok, liczona miejscami drukarek' },
    { name: 'Drukarki', value: 'Do 2 w subskrypcji podstawowej, rozszerzenia po 1 drukarce, łącznie do 20' },
    { name: 'Komputery i użytkownicy', value: 'Bez limitu w jednej domenie, jeden klucz licencji' },
    { name: 'Projektowanie', value: 'Web Designer w przeglądarce i Loftware Desktop Designer w Windows' },
    { name: 'Formularze', value: 'Designer PowerForms (kreator aplikacji); uruchamianie w Loftware Print lub w przeglądarce przez Loftware Web Client' },
    { name: 'Druk przez przeglądarkę', value: 'Loftware Web Printing z Loftware Web Client' },
    { name: 'Integracje', value: 'Poziom Essentials: jednokierunkowe przekazywanie danych z lokalnych systemów firmy do druku' },
    { name: 'Zatwierdzanie i dostęp', value: 'Jeden domyślny proces zatwierdzania, uprawnienia według ról' },
    { name: 'Miejsce na dokumenty', value: '1 GB w chmurze' },
    { name: 'Historia druku', value: '3 miesiące; 1 rok z opcją NSCEPH001M' },
    { name: 'Baza danych w chmurze', value: 'Opcja NSCEDB001M: baza SQL 1 GB' },
    { name: 'Środowiska', value: '1, produkcyjne' },
    { name: 'Źródła danych', value: 'Excel, Access, SQL Server, pliki tekstowe, Oracle, MySQL, OLEDB, ODBC, Google Sheets, Excel w OneDrive' },
    { name: 'Pomoc techniczna', value: 'Poziom Basic (dostępny poziom Standard); e-mail i telefon w godzinach pracy biura regionalnego' },
    { name: 'System (aplikacje Windows)', value: 'Windows 11; Windows Server 2016, 2019, 2022, 2025 (bez Server Core i Nano Server); procesor x86; minimum 8 GB RAM i 20 GB na dysku' },
    { name: 'Przeglądarki', value: 'Aktualne wersje Edge, Chrome, Firefox lub Safari' },
    { name: 'Dostarczenie licencji', value: 'Zaproszenie e-mailem do konta Loftware Cloud, logowanie kontem Microsoft albo Google' },
  ],
  applications: [
    'Formularze druku dla operatorów linii i pakowania',
    'Druk etykiet z przeglądarki bez instalacji programu',
    'Przekazywanie danych z lokalnego systemu do druku',
    'Wspólne zatwierdzanie zmian w szablonach etykiet',
  ],
  compatibleAccessories: [],
  relatedProducts: ['loftware-cloud-designer', 'loftware-cloud-business', 'bartender-professional', 'bartender-automation', 'bartender-cloud'],
  faq: [
    {
      question: 'Co Loftware Cloud Essentials dodaje do edycji Designer?',
      answer: 'Essentials zawiera narzędzia [Loftware Cloud Designer](/produkt/loftware-cloud-designer). Nowe są: aplikacje formularzy budowane w Designer PowerForms, druk przez przeglądarkę w Loftware Web Client oraz integrację z lokalnymi systemami firmy. Historia druku obejmuje 3 miesiące. Liczba drukarek rośnie z 10 do 20.',
    },
    {
      question: 'Ile drukarek obejmuje subskrypcja i jak dodać kolejne?',
      answer: 'Subskrypcja podstawowa NSCEBS001M obejmuje do 2 drukarek. Każda pozycja NSCEAO001M dodaje jedną drukarkę, łącznie do 20. Każda drukarka fizyczna lub wirtualna, na której program drukuje, zajmuje jedno miejsce. Powyżej 20 drukarek potrzebna jest edycja [Loftware Cloud Business](/produkt/loftware-cloud-business).',
    },
    {
      question: 'Do czego służą formularze Designer PowerForms?',
      answer: 'Formularz to prosta aplikacja do druku. Operator widzi w niej tylko potrzebne pola, a szczegóły techniczne szablonu są ukryte. Formularz może też sterować zbieraniem danych i kolejnością druku. Formularz uruchamia się w Loftware Print na komputerze albo w przeglądarce przez Loftware Web Client.',
    },
    {
      question: 'Jakie opcje można dokupić do Essentials?',
      answer: 'W sklepie są dwie opcje: NSCEDB001M, czyli baza SQL w chmurze o pojemności 1 GB, oraz NSCEPH001M, czyli historia druku z okresu 1 roku. Producent oferuje też wsparcie na poziomie Standard i szkolenia Loftware Academy. Te pozycje wyceniamy na zapytanie.',
    },
    {
      question: 'Jak przebiega aktywacja po zakupie?',
      answer: 'W zamówieniu podaje się nazwę firmy licencjobiorcy i e-mail osoby zarządzającej kontem. Na ten adres Loftware wysyła zaproszenie do konta Loftware Cloud. Logowanie odbywa się kontem Microsoft albo Google, a dalsze osoby dodaje się w Control Center.',
    },
    {
      question: 'Czy stanowisko operatora potrzebuje programu Desktop Designer?',
      answer: 'Nie. Formularze można uruchomić w przeglądarce przez Loftware Web Client. Producent zaleca aktualne wersje Edge, Chrome, Firefox lub Safari. Aplikacje Windows, np. Loftware Print, wymagają Windows 11 lub Windows Server 2016–2025.',
    },
    {
      question: 'Jakie są alternatywy dla Loftware Cloud Essentials?',
      answer: 'Formularze dla operatorów ma też [BarTender Professional](/produkt/bartender-professional), instalowany w Windows. Integracje z systemami firmy oferuje [BarTender Automation](/produkt/bartender-automation). Przy większej liczbie drukarek i integracji z systemami w chmurze odpowiednia jest [Loftware Cloud Business](/produkt/loftware-cloud-business).',
    },
  ],
  downloads: [PORÓWNANIE_EDYCJI, STEROWNIKI],
  createdAt: '2026-10-25',
  sameAs: LOFTWARE_CLOUD,
}

const business: Product = {
  id: 'loftware-cloud-business',
  slug: 'loftware-cloud-business',
  name: 'Loftware Cloud Business',
  shortDescription: 'Loftware Cloud Business (NiceLabel) — subskrypcja do druku etykiet w wielu lokalizacjach: drukarki chmurowe, zarządzanie drukarkami, Cloud API. Wersje Small i Large, cena na zapytanie.',
  seoTitle: 'Loftware Cloud Business — system etykiet w chmurze, na zapytanie',
  seoDescription: 'Loftware Cloud Business: system do zarządzania drukiem etykiet w chmurze, drukarki chmurowe, analityka druku, Cloud API i integracje z systemami firmy. Wersje Small i Large. NiceLabel Cloud Business, licencja Loftware Cloud Business. PN: NSCBSM001M, NSCBSA001M, NSCBLX001M.',
  description: `Loftware Cloud Business to edycja Loftware Cloud dla firm, które drukują etykiety na wielu drukarkach i łączą druk z systemami biznesowymi w chmurze oraz w siedzibie firmy. Edycja ma dwie wielkości. Small (NSCBSM001M) obejmuje do 3 drukarek, a pozycja NSCBSA001M dodaje kolejne pojedynczo. Large (NSCBLX001M) obejmuje do 50 drukarek.

Business zawiera narzędzia edycji Essentials oraz funkcje do zarządzania drukiem w całej firmie. Drukarki chmurowe drukują bez sterownika i bez komputera pośredniczącego. W Control Center zarządza się drukarkami i przegląda analitykę druku. Cloud API udostępnia funkcje Loftware Cloud innym aplikacjom firmy. Integracje obejmują systemy w chmurze i systemy lokalne oraz synchronizację danych.

Szablony przechodzą przez procesy zatwierdzania, a zmiany przenosi się między środowiskami systemem Change and Transport. Dodatkowe środowiska są dostępne jako opcja. Użytkowników organizacji podłącza się przez Active Directory albo OpenID Connect. Konto ma 5 GB na etykiety, bazę Cloud SQL 5 GB i historię druku z 1 roku.

Cenę ustalamy po rozmowie o liczbie drukarek, lokalizacjach i potrzebnych integracjach.`,
  categoryId: 'oprogramowanie',
  subcategoryIds: ['programy-do-etykiet'],
  manufacturerId: 'loftware',
  quoteOnly: true,
  licenseDelivery: 'email',
  images: ['/images/products/NSCBSM001M.png', '/images/products/NSCDBA001Y.png'],
  imageDescriptions: [
    'Loftware Cloud Business — grafika Loftware: szafa serwerowa i zespół przy stanowiskach z monitorami, połączone świetlnymi liniami symbolizującymi druk w sieci firmy',
    'Loftware Cloud Business — edytor etykiet Web Designer w przeglądarce z projektem etykiety i panelem obiektów',
  ],
  tags: ['produkcja', 'logistyka', 'magazyn'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  variantAttributeTooltips: {
    'Wersja': 'Wielkość subskrypcji Loftware Cloud Business.\n\nSmall — dla kilku drukarek, rozbudowa o pojedyncze drukarki.\n\nLarge — dla floty do 50 drukarek w jednej subskrypcji.',
    'Licencja': 'Rodzaj pozycji w ofercie Business.\n\nSubskrypcja podstawowa — konto Business z wybraną liczbą drukarek.\n\nDodatkowa drukarka — rozszerzenie subskrypcji Small o jedno miejsce drukarki.',
    'Drukarki': 'Liczba miejsc drukarek w pozycji.\n\nSmall obejmuje do 3, Large do 50.\n\nMiejsce zajmuje także drukarka wirtualna, np. PDF.',
  },
  variants: [
    {
      partNumber: 'NSCBSM001M',
      quoteOnly: true,
      name: 'Loftware Cloud Business Small — subskrypcja, do 3 drukarek',
      attributes: { 'Wersja': 'Small', 'Licencja': 'Subskrypcja podstawowa', 'Drukarki': 'do 3' },
      availability: 'available',
    },
    {
      partNumber: 'NSCBSA001M',
      quoteOnly: true,
      name: 'Loftware Cloud Business Small — dodatkowa drukarka',
      attributes: { 'Wersja': 'Small', 'Licencja': 'Dodatkowa drukarka', 'Drukarki': '+1' },
      availability: 'available',
    },
    {
      partNumber: 'NSCBLX001M',
      quoteOnly: true,
      name: 'Loftware Cloud Business Large — subskrypcja, do 50 drukarek',
      attributes: { 'Wersja': 'Large', 'Licencja': 'Subskrypcja podstawowa', 'Drukarki': 'do 50' },
      availability: 'available',
    },
  ],
  specifications: [
    { name: 'Producent', value: 'Loftware (marka NiceLabel)' },
    { name: 'Edycja', value: 'Loftware Cloud Business, wersje Small i Large' },
    { name: 'Model licencji', value: 'Subskrypcja liczona miejscami drukarek' },
    { name: 'Drukarki', value: 'Small: do 3 i rozszerzenia po 1 drukarce; Large: do 50' },
    { name: 'Funkcje edycji Essentials', value: 'Web Designer, Desktop Designer, formularze Designer PowerForms, Loftware Web Printing' },
    { name: 'Drukarki chmurowe', value: 'Druk bez sterownika na drukarkach z obsługą Loftware Cloud' },
    { name: 'Zarządzanie drukiem', value: 'Zarządzanie drukarkami, analityka druku' },
    { name: 'Integracje', value: 'Systemy biznesowe w chmurze i lokalne, synchronizacja danych, Cloud API' },
    { name: 'Zatwierdzanie i zmiany', value: 'Procesy zatwierdzania, uprawnienia według ról, system Change and Transport' },
    { name: 'Środowiska', value: '1, produkcyjne; dodatkowe środowiska jako opcja' },
    { name: 'Użytkownicy organizacji', value: 'Integracja z Active Directory i OpenID Connect' },
    { name: 'Miejsce na etykiety', value: '5 GB w chmurze' },
    { name: 'Baza danych', value: 'Cloud SQL 5 GB w cenie; opcje 100 GB i 250 GB' },
    { name: 'Historia druku', value: '1 rok; opcja 5 lat' },
    { name: 'Pomoc techniczna', value: 'Poziom Standard (dostępny Premium); e-mail i telefon z priorytetem w godzinach pracy biura regionalnego' },
    { name: 'Opcje', value: 'Integracje SAP i Oracle, instalacja hybrydowa, Cloud Automation Service, dodatkowa przepustowość API, dodatkowe środowisko testowe, wsparcie Platinum, Loftware Academy' },
    { name: 'Dostarczenie licencji', value: 'Zaproszenie e-mailem do konta Loftware Cloud' },
  ],
  applications: [
    'Centralny druk etykiet w kilku zakładach i magazynach',
    'Druk z systemów ERP przez integracje i Cloud API',
    'Nadzór nad flotą drukarek i analityka druku',
    'Kontrolowane wdrażanie zmian w szablonach',
  ],
  compatibleAccessories: [],
  relatedProducts: ['loftware-cloud-essentials', 'loftware-cloud-designer', 'bartender-enterprise', 'bartender-cloud', 'bartender-automation'],
  faq: [
    {
      question: 'Dlaczego Loftware Cloud Business nie ma ceny na stronie?',
      answer: 'Koszt zależy od wersji Small albo Large, liczby drukarek i wybranych opcji, np. integracji SAP lub Oracle albo instalacji hybrydowej. Po rozmowie o lokalizacjach, drukarkach i systemach firmy przygotowujemy ofertę. Prośbę o wycenę można wysłać z tej strony.',
    },
    {
      question: 'Którą wersję wybrać: Small czy Large?',
      answer: 'Small obejmuje do 3 drukarek i rośnie o pojedyncze drukarki. Large obejmuje do 50 drukarek w jednej subskrypcji. Przy kilku zakładach z kilkunastoma drukarkami każdy wariant warto policzyć osobno.',
    },
    {
      question: 'Czym są drukarki chmurowe w Loftware Cloud?',
      answer: 'To drukarki, które łączą się bezpośrednio z Loftware Cloud i drukują bez sterownika Windows i bez komputera pośredniczącego. Drukarkę rejestruje się w Control Center. Sieć firmy musi zezwalać drukarce na połączenia wychodzące na portach 443 i 1434.',
    },
    {
      question: 'Jakie opcje można dodać do edycji Business?',
      answer: 'Producent oferuje gotowe integracje SAP i Oracle, instalację hybrydową, Cloud Automation Service, większą bazę SQL (100 albo 250 GB), historię druku z 5 lat, dodatkowe środowisko testowe, większą przepustowość API, wsparcie Platinum i szkolenia Loftware Academy.',
    },
    {
      question: 'Czym różnią się Loftware Cloud Compliance i Loftware Cloud Enterprise?',
      answer: 'Compliance jest przeznaczona dla branż regulowanych. Ma trzy środowiska: rozwojowe, testowe i produkcyjne, historię druku z 12 lat, pakiet przyspieszający walidację i roczny harmonogram wydań. Enterprise obsługuje wiele lokalizacji, dużą liczbę drukarek i instalację hybrydową z lokalnym Control Center. Obie edycje wyceniamy na zapytanie.',
    },
    {
      question: 'Jak wygląda uruchomienie konta po zamówieniu?',
      answer: 'Licencja jest elektroniczna. Zamówienie musi zawierać nazwę firmy licencjobiorcy oraz e-mail administratora konta. Na ten adres przychodzi zaproszenie do Loftware Cloud. Użytkowników organizacji można potem podłączyć przez Active Directory albo OpenID Connect.',
    },
    {
      question: 'Jakie są alternatywy dla Loftware Cloud Business?',
      answer: 'Przy programie instalowanym na serwerze firmy można rozważyć [BarTender Enterprise](/produkt/bartender-enterprise). Rozwiązanie w chmurze oferuje też [BarTender Cloud](/produkt/bartender-cloud). Przy mniejszej liczbie drukarek wystarcza [Loftware Cloud Essentials](/produkt/loftware-cloud-essentials).',
    },
  ],
  downloads: [PORÓWNANIE_EDYCJI, STEROWNIKI],
  createdAt: '2026-10-25',
  sameAs: LOFTWARE_CLOUD,
}

export const loftwareProducts: Product[] = [designer, essentials, business]
