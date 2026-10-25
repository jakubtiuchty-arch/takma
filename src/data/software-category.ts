import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

// Podkategorie oprogramowania (25.10.2026): programy do etykiet (BarTender, Loftware Cloud) i programy do kart
// (Zebra CardStudio, Magicard HUB). Karty z bartender-products.ts i loftware-products.ts trafiają do
// „Programy do etykiet” przez pętlę `subcategoryIds` w products.ts. Fakty według stron i dokumentów producentów
// (BarTender: pricing i technical specifications; Loftware: pomoc Loftware Cloud i arkusz porównania edycji).
// Dokumentacja: docs/catalog/oprogramowanie-2026-10-25/L2.md

export const labelSoftwareCategory: Subcategory = {
  id: 'programy-do-etykiet',
  slug: 'programy-do-etykiet',
  name: 'Programy do etykiet',
  parentCategoryId: 'oprogramowanie',
  description: 'Programy do projektowania i drukowania etykiet z kodami kreskowymi: BarTender instalowany w Windows lub w chmurze oraz Loftware Cloud (NiceLabel). Licencje elektroniczne.',
  seoTitle: 'Programy do etykiet BarTender i Loftware NiceLabel — licencje',
  seoDescription: 'Program do drukowania etykiet BarTender (Starter, Professional, Automation, Enterprise, Cloud) i Loftware Cloud (NiceLabel). Licencja na stanowisko lub na drukarki, subskrypcja.',
  longDescription: 'Program do etykiet służy do projektowania etykiet z tekstem, grafiką i kodami kreskowymi oraz do drukowania ich na [drukarkach etykiet](/drukarki-etykiet). Dane do etykiet program pobiera z arkuszy, plików tekstowych i baz danych, a wydruk wysyła przez sterownik drukarki. Używa się go w magazynie, na produkcji, w laboratorium i przy wysyłce. Licencję liczy się według stanowisk albo drukarek, więc przed zakupem trzeba ustalić, na ilu drukarkach firma drukuje. Do kart plastikowych służą [programy do kart](/programy-do-kart).',
  icon: 'code',
  productIds: [],
  productCount: 0,
}

export const cardSoftwareCategory: Subcategory = {
  id: 'programy-do-kart',
  slug: 'programy-do-kart',
  name: 'Programy do kart',
  parentCategoryId: 'oprogramowanie',
  description: 'Programy do projektowania i drukowania kart plastikowych na drukarkach kart Zebra i Magicard.',
  seoTitle: 'Programy do kart plastikowych — Zebra CardStudio, Magicard HUB',
  seoDescription: 'Program do projektowania i drukowania kart plastikowych: Zebra CardStudio 2.0 (licencja Classic, Standard, Professional, Enterprise) i bezpłatny Magicard HUB do drukarek Magicard.',
  longDescription: 'Program do kart służy do projektowania identyfikatorów, legitymacji i kart dostępu oraz do drukowania ich na [drukarkach kart](/drukarki-kart). Na projekcie umieszcza się zdjęcie, logo, tekst i kody, a dane osób program pobiera z listy lub bazy danych. Wyższe wersje programów kodują też pasek magnetyczny albo chip karty, jeśli drukarka ma odpowiedni koder. Każdy program obsługuje drukarki swojego producenta. Do etykiet służą [programy do etykiet](/programy-do-etykiet).',
  icon: 'code',
  productIds: ['zebra-cardstudio', 'magicard-hub'],
  productCount: 2,
}

export const labelSoftwareContent: SubcategoryRichContent = {
  updatedAt: '2026-10-25',
  sectionHeadings: {
    expertAuthority: 'Jak pomagamy wybrać licencję',
    technicalDeepDive: 'Licencje, drukarki i wymagania',
    useCases: 'Zastosowania',
    howToSteps: 'Jak dobrać program do etykiet?',
  },
  definition: {
    heading: 'Czym różnią się BarTender i Loftware Cloud?',
    content: 'BarTender firmy Seagull Software ma cztery edycje instalowane w Windows: Starter, Professional, Automation i Enterprise. Osobno działa BarTender Cloud, który otwiera się w przeglądarce. Edycje Windows wymagają 64-bitowego systemu Windows 10, Windows 11 albo Windows Server 2016–2025. Wszystkie licencje BarTender są sprzedawane w umowach rocznych.\n\nLoftware Cloud, dawniej NiceLabel, działa w modelu oprogramowania jako usługi. Pliki etykiet, użytkownicy i drukarki są zapisane w panelu Loftware Control Center w chmurze. Etykiety projektuje się w przeglądarce w Web Designer albo w programie Desktop Designer w Windows. Komputery muszą mieć stały dostęp do internetu.',
  },
  comparisonTable: {
    heading: 'Porównanie programów do etykiet',
    intro: 'Główne różnice edycji według producentów. Warianty licencji, liczby drukarek i numery PN są podane na kartach produktów.',
    columns: ['Gdzie działa', 'Licencja', 'Formularze i integracje'],
    rows: [
      { model: 'BarTender Starter', href: '/produkt/bartender-starter', role: 'Podstawowe projektowanie i druk', cells: ['Windows', 'Na stanowisko: 1 użytkownik, 1 komputer, drukarki bez limitu', 'Dane z Excela i plików CSV; bez formularzy i RFID'] },
      { model: 'BarTender Professional', href: '/produkt/bartender-professional', role: 'Szablony Intelligent Templates i RFID', cells: ['Windows', 'Na stanowisko albo na liczbę drukarek', 'Formularze wprowadzania danych, ponad 20 źródeł danych, kodowanie RFID'] },
      { model: 'BarTender Automation', href: '/produkt/bartender-automation', role: 'Druk uruchamiany przez inne systemy', cells: ['Windows', 'Na liczbę drukarek, użytkownicy bez limitu', 'Integracje REST API, File Drop, e-mail, TCP/IP; .NET SDK'] },
      { model: 'BarTender Enterprise', href: '/produkt/bartender-enterprise', role: 'Kontrola wersji i audyt', cells: ['Windows', 'Na liczbę drukarek, użytkownicy bez limitu', 'Funkcje Automation oraz repozytorium dokumentów, wersje, ścieżka audytu, podpisy elektroniczne'] },
      { model: 'BarTender Cloud', href: '/produkt/bartender-cloud', role: 'Projektowanie i druk w przeglądarce', cells: ['Przeglądarka', 'Na liczbę drukarek, użytkownicy bez limitu', 'Formularze; w wersjach Automation i Enterprise integracje REST API i File Drop'] },
      { model: 'Loftware Cloud Designer', href: '/produkt/loftware-cloud-designer', role: 'Projektowanie i druk z chmury', cells: ['Przeglądarka i Windows', 'Miejsca drukarek: 1–10, komputery bez limitu w domenie', 'Formularze druku; bez integracji'] },
      { model: 'Loftware Cloud Essentials', href: '/produkt/loftware-cloud-essentials', role: 'Formularze dla operatorów', cells: ['Przeglądarka i Windows', 'Miejsca drukarek: 2–20', 'Designer PowerForms, Web Client, jednokierunkowa integracja z systemami lokalnymi'] },
      { model: 'Loftware Cloud Business', href: '/produkt/loftware-cloud-business', role: 'Druk w wielu lokalizacjach, na zapytanie', cells: ['Przeglądarka i Windows', 'Small do 3 drukarek, Large do 50', 'Integracje z systemami w chmurze i lokalnymi, Cloud API, drukarki chmurowe'] },
    ],
    note: 'BarTender Workstation, czyli licencja na stanowisko, jest dostępna tylko w edycjach Starter i Professional. W Loftware Cloud każda drukarka, także wirtualna PDF, zajmuje jedno miejsce w licencji.',
  },
  buyingGuide: {
    heading: 'Jak wybrać program do etykiet?',
    items: [
      'Liczba drukarek i użytkowników — jeden pracownik przy jednym komputerze może mieć licencję BarTender na stanowisko, z dowolną liczbą drukarek. Gdy etykiety drukuje kilka osób z różnych komputerów, potrzebna jest licencja na liczbę drukarek: BarTender Professional, Automation, Enterprise albo Loftware Cloud.',
      'Program w firmie czy w chmurze — BarTender Starter, Professional, Automation i Enterprise instaluje się w Windows. BarTender Cloud i Loftware Cloud przechowują szablony w chmurze, a projektuje się w nich w przeglądarce.',
      'Formularze dla operatorów — jeśli operator ma tylko wpisać dane i wydrukować etykietę, potrzebne są formularze: BarTender Professional albo Loftware Cloud Essentials.',
      'Integracja z systemem firmy — druk uruchamiany przez system ERP lub WMS wymaga BarTender Automation lub Enterprise, planów BarTender Cloud Automation lub Enterprise albo Loftware Cloud Business.',
      'Kontrola zmian — wersje dokumentów i ścieżkę audytu ma BarTender Enterprise, a kontrolę wersji także BarTender Cloud. W Loftware Cloud proces zatwierdzania zmian jest dostępny od edycji Essentials.',
    ],
  },
  expertAuthority: 'TAKMA od 2002 roku dostarcza firmom drukarki etykiet i materiały do nich. Przy wyborze programu pytamy o liczbę drukarek i stanowisk, źródła danych, potrzebę formularzy oraz system, z którego mają przychodzić dane do druku. Na tej podstawie dobieramy edycję i liczbę drukarek w licencji.',
  technicalDeepDive: 'BarTender w licencji na drukarki kontroluje liczbę używanych drukarek przez usługę licencji BarTender Licensing Service. Usługę instaluje się co najmniej na jednym komputerze w sieci. Drukarki mogą być podłączone lokalnie albo pracować w sieci LAN lub WAN. Licencja na stanowisko obejmuje jednego użytkownika i jeden komputer, a liczba drukarek nie jest ograniczona. Każda nowa licencja BarTender obejmuje co najmniej rok standardowego wsparcia z aktualizacjami. Wyjątkiem jest BarTender Cloud Essentials, który ma poziom wsparcia Essential. BarTender korzysta ze sterowników Drivers by Seagull, których producent udostępnia ponad 12 000.\n\nLoftware Cloud liczy miejsca drukarek. Każda drukarka fizyczna lub wirtualna, na którą program wysyła wydruk, zajmuje jedno miejsce. Program można uruchomić na dowolnej liczbie komputerów w jednej domenie, z jednym kluczem licencji. Loftware udostępnia bezpłatne sterowniki Windows do ponad 4500 modeli drukarek. Program Desktop Designer wymaga Windows 11 lub Windows Server 2016–2025, 8 GB RAM, 20 GB miejsca na dysku i .NET Framework 4.7.2.\n\nObie firmy dostarczają licencje elektronicznie. BarTender wysyła kod, który w portalu klienta wymienia się na klucz produktu. Loftware wysyła e-mailem zaproszenie do konta Loftware Cloud. Do zamówienia potrzebne są nazwa firmy licencjobiorcy i adres e-mail użytkownika licencji.',
  useCases: [
    { title: 'Etykiety wysyłkowe i logistyczne', description: 'Druk etykiet z danymi z arkusza lub bazy, z kodami 1D i 2D, na drukarkach w magazynie i przy pakowaniu.' },
    { title: 'Etykiety produktów na produkcji', description: 'Formularz dla operatora linii: wpisanie danych partii i druk etykiety bez otwierania szablonu.' },
    { title: 'Druk z systemu firmy', description: 'Etykiety drukowane automatycznie po zdarzeniu w systemie ERP lub WMS, przez integrację lub API programu.' },
    { title: 'Kodowanie RFID', description: 'Zapis danych w wkładce RFID podczas druku na drukarce RFID. W BarTender od edycji Professional.' },
  ],
  uniqueInsights: {
    heading: 'Na co zwrócić uwagę przy licencji',
    items: [
      { title: 'Drukarka wirtualna też się liczy', text: 'W Loftware Cloud miejsce w licencji zajmuje także drukarka PDF albo XPS. Warto doliczyć ją do liczby drukarek.' },
      { title: 'Stanowisko to jeden komputer', text: 'Licencja BarTender Workstation działa na jednym komputerze dla jednego użytkownika. Drugi komputer wymaga drugiej licencji albo licencji na drukarki.' },
      { title: 'Rozszerzenie wymaga subskrypcji podstawowej', text: 'Pozycje „dodatkowa drukarka” rozszerzają istniejącą subskrypcję. Nie działają samodzielnie.' },
      { title: 'Internet przy Loftware Cloud', text: 'Komputery z programem Desktop Designer muszą mieć połączenie z Loftware Control Center. Bez internetu program nie drukuje.' },
    ],
  },
  faq: [
    {
      question: 'Czym różni się licencja na stanowisko od licencji na drukarki?',
      answer: 'Licencja na stanowisko (BarTender Workstation) obejmuje jednego użytkownika i jeden komputer, a liczba drukarek nie jest ograniczona. Licencja na drukarki ogranicza liczbę drukarek, a liczba użytkowników jest bez limitu. Loftware Cloud stosuje tylko licencję na miejsca drukarek.',
    },
    {
      question: 'Jak otrzymam licencję po zamówieniu?',
      answer: 'Licencje są elektroniczne i przychodzą e-mailem na adres użytkownika licencji podany w zamówieniu. BarTender przesyła kod do wymiany na klucz produktu w portalu klienta. Loftware przesyła zaproszenie do konta Loftware Cloud.',
    },
    {
      question: 'Czy można dokupić drukarki do istniejącej licencji?',
      answer: 'Tak. Do licencji na drukarki dokupuje się kolejne drukarki, a pozycje te są dostępne na kartach produktów. Przedłużenie subskrypcji i zmianę edycji wyceniamy na zapytanie.',
    },
    {
      question: 'Czy program do etykiet obsłuży drukarkę Zebra, Honeywell lub TSC?',
      answer: 'Tak. BarTender korzysta ze sterowników Drivers by Seagull, a Loftware udostępnia własne sterowniki Windows. Oba zestawy sterowników obejmują drukarki Zebra, Honeywell, TSC, SATO, Citizen, Brother, Epson i BIXOLON.',
    },
    {
      question: 'Który program wybrać do druku z systemu ERP lub WMS?',
      answer: 'Integracje z systemami firmy mają BarTender Automation i Enterprise, plany BarTender Cloud Automation i Enterprise oraz Loftware Cloud Business. Loftware Cloud Essentials przekazuje dane z systemów lokalnych do druku tylko w jednym kierunku.',
    },
  ],
  comparisons: [],
  howToSteps: [
    { name: 'Policz drukarki i stanowiska', text: 'Ustal, na ilu drukarkach i z ilu komputerów firma drukuje etykiety, łącznie z drukarkami wirtualnymi PDF.' },
    { name: 'Wybierz miejsce pracy programu', text: 'Zdecyduj, czy program ma działać na komputerach w firmie, czy w chmurze z dostępem przez przeglądarkę.' },
    { name: 'Określ źródła danych i integracje', text: 'Sprawdź, skąd pochodzą dane do etykiet i czy druk ma uruchamiać inny system.' },
    { name: 'Dobierz edycję i liczbę drukarek', text: 'Na tej podstawie wybierz edycję i liczbę drukarek w licencji. Przy zamówieniu podaj firmę i e-mail użytkownika licencji.' },
  ],
}
