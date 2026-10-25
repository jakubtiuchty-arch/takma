export type BartenderEdition = 'starter' | 'professional' | 'automation' | 'enterprise' | 'cloud'
export type BartenderScreen = { title: string; heading: string; text: string; image: string; alt: string }
type Story = {
  name: string; line: string; intro: string; eyebrow: string; facts: [string, string][];
  heading: string; text: string; motion: 'design' | 'manage' | 'print'; features: [string, string][];
  screens: BartenderScreen[]; steps: [string, string][]; license: string; licenseText: string; limitation: string;
}
const templates: BartenderScreen = { title: 'Szablony', heading: 'Zacznij od gotowego układu.', text: 'Wybierz szablon z biblioteki i dopasuj pola do swojej etykiety. Możesz też utworzyć dokument od początku.', image: 'templates.jpg', alt: 'BarTender — biblioteka szablonów etykiet z filtrem branży' }
const mobile: BartenderScreen = { title: 'Druk mobilny', heading: 'Zlecaj druk przy stanowisku pracy.', text: 'Wybierz dokument i drukarkę w przeglądarce lub aplikacji mobilnej. Druk zdalny wymaga skonfigurowanego środowiska BarTender.', image: 'mobile.jpg', alt: 'BarTender — wybór etykiet i drukarek na urządzeniach mobilnych' }
const forms: BartenderScreen = { title: 'Formularze druku', heading: 'Prowadź operatora przez druk.', text: 'W Intelligent Form Builder przygotujesz formularz powiązany z szablonami etykiet. Operator wprowadza dane i zleca druk w przeglądarce.', image: 'forms.jpg', alt: 'BarTender — Intelligent Form Builder do projektowania formularzy druku' }
const workflow: BartenderScreen = { title: 'Zatwierdzanie', heading: 'Ustal, kto zatwierdza zmianę.', text: 'Workflow Designer pozwala określić kolejne etapy obiegu dokumentu. Zespół pracuje na zatwierdzonych wersjach szablonów.', image: 'workflow.jpg', alt: 'BarTender — Workflow Designer ze schematem zatwierdzania dokumentu' }
const cloudDesigner: BartenderScreen = { title: 'Projektant w przeglądarce', heading: 'Ułóż etykietę w przeglądarce.', text: 'BarTender Cloud Designer pozwala tworzyć etykiety w przeglądarce. Dokumenty przechowujesz na koncie firmowym w chmurze.', image: 'cloud-designer.jpg', alt: 'BarTender Cloud Designer — projektowanie etykiety magazynowej w przeglądarce' }
export const bartenderStories: Record<BartenderEdition, Story> = {
  starter: {
    name: 'Starter', eyebrow: 'PROJEKTOWANIE I DRUK ETYKIET', line: 'Etykiety produktowe.\nDane prosto z Excela.',
    intro: 'Przygotuj etykiety cenowe, produktowe i magazynowe. Wstaw dane z Excela lub CSV i drukuj z jednego komputera.',
    facts: [['1 komputer', 'Licencja Workstation'], ['Bez limitu', 'Liczba drukarek'], ['Excel i CSV', 'Dane do etykiet'], ['Windows', 'Instalacja lokalna']],
    heading: 'Od listy produktów\ndo gotowych etykiet.', text: 'Ułóż tekst, grafikę i kod kreskowy. Połącz pola z danymi w pliku, wybierz rekordy i wydrukuj potrzebną liczbę etykiet.', motion: 'print',
    features: [['Gotowe szablony', 'Skorzystaj z biblioteki ponad 400 szablonów albo przygotuj własny układ.'], ['Kody 1D i 2D', 'Dobierz kod do produktu, lokalizacji lub dokumentu. Program obsługuje ponad 100 symbologii.'], ['Daty i numery seryjne', 'Dodawaj datę, godzinę i prostą numerację seryjną bez ręcznej zmiany każdego projektu.']],
    screens: [templates], steps: [['Przygotuj dane', 'Zapisz produkty, oznaczenia i inne wartości w pliku Excel albo CSV.'], ['Połącz pola', 'Przypisz kolumny do pól na etykiecie i sprawdź układ w podglądzie.'], ['Wydrukuj wybrane pozycje', 'Wskaż rekordy, liczbę kopii oraz drukarkę podłączoną lokalnie lub w sieci.']],
    license: 'Jedno stanowisko.\nDowolna liczba drukarek.', licenseText: 'Workstation obejmuje jednego użytkownika na jednym komputerze. Wybierz subskrypcję na 1, 3 albo 5 lat, ze standardowym wsparciem i aktualizacjami.', limitation: 'Potrzebujesz baz SQL, RFID lub formularzy wprowadzania danych? Wybierz Professional. Integracje uruchamiające druk z ERP i WMS wymagają Automation lub Enterprise.',
  },
  professional: {
    name: 'Professional', eyebrow: 'ETYKIETY Z DANYMI ZMIENNYMI', line: 'Jeden projekt.\nWiele produktów.',
    intro: 'Twórz etykiety z danymi z baz i plików. Korzystaj z dynamicznych szablonów, formularzy wprowadzania danych i kodowania RFID.',
    facts: [['20+', 'Gotowych źródeł danych'], ['RFID', 'Kodowanie znaczników'], ['Formularze', 'Wprowadzanie danych'], ['2 modele', 'Workstation lub drukarki']],
    heading: 'Jeden szablon dla całej\nrodziny produktów.', text: 'Intelligent Templates pozwalają sterować treścią i układem etykiety na podstawie danych. Ogranicz liczbę osobnych projektów dla podobnych produktów.', motion: 'design',
    features: [['Połączenia z bazami', 'Połącz etykiety z bazą SQL, arkuszem lub innym obsługiwanym źródłem. Program może również zapisywać dane w bazie SQL.'], ['Formularze operatora', 'Wybieraj rekordy, wpisuj wartości i przyjmuj dane ze skanera lub wagi. Reguły sprawdzają dane przed drukiem.'], ['Druk i RFID', 'Przygotuj etykietę z kodem kreskowym i danymi dla znacznika RFID. Kodowanie wymaga zgodnej drukarki i materiału.']],
    screens: [mobile, templates], steps: [['Wskaż źródło', 'Połącz szablon z plikiem lub bazą danych używaną w firmie.'], ['Zbuduj reguły', 'Ustaw warstwy, pola zmienne i formularz potrzebny operatorowi.'], ['Udostępnij druk', 'Skonfiguruj druk lokalny lub zdalny i sprawdź etykietę na docelowej drukarce.']],
    license: 'Wybierz stanowisko\nlub liczbę drukarek.', licenseText: 'Workstation obejmuje jednego użytkownika i jeden komputer bez limitu drukarek. Licencja na drukarki pozwala korzystać z wielu stanowisk w ramach wybranego limitu urządzeń.', limitation: 'Jeśli druk ma uruchamiać się automatycznie po zleceniu z ERP lub WMS, wybierz Automation. Professional służy do projektowania i druku obsługiwanego przez użytkownika.',
  },
  automation: {
    name: 'Automation', eyebrow: 'DRUK URUCHAMIANY Z SYSTEMÓW FIRMY', line: 'Zlecenie z systemu.\nEtykieta bez przepisywania.',
    intro: 'Drukuj etykiety na podstawie zamówień i zleceń produkcyjnych. Połącz BarTender z ERP, WMS lub MES przez API, pliki albo inne obsługiwane zdarzenia.',
    facts: [['REST API', 'Połączenie z aplikacją'], ['File Drop', 'Druk po dodaniu pliku'], ['70+', 'Akcji integracji'], ['Na drukarki', 'Model licencji']],
    heading: 'System przekazuje dane.\nBarTender zleca druk.', text: 'W Integration Builder ustalasz, co ma uruchomić druk i dokąd trafi etykieta. Dane zamówienia wypełniają pola wybranego szablonu.', motion: 'print',
    features: [['ERP, WMS i MES', 'Dobierz sposób wymiany danych z dostawcą systemu. Do wyboru są m.in. REST API, File Drop, e-mail i TCP/IP.'], ['Formularze w przeglądarce', 'Intelligent Forms prowadzą operatora przez wybór danych i szablonu. Formularze przygotujesz bez pisania kodu.'], ['Funkcje Professional', 'Korzystaj z dynamicznych szablonów, połączeń z bazami i RFID. Ponowny druk z historii obejmuje 7 dni.']],
    screens: [forms, mobile], steps: [['Odbierz zdarzenie', 'System zapisuje plik, wywołuje API albo przekazuje dane inną skonfigurowaną drogą.'], ['Sprawdź i przypisz', 'Integracja przetwarza wartości oraz dobiera szablon i drukarkę zgodnie z regułami.'], ['Uruchom druk', 'Etykieta trafia na wskazane urządzenie. Ustal również obsługę błędów i ponownych zleceń.']],
    license: 'Wspólna licencja\nna firmowe drukarki.', licenseText: 'Dobierz subskrypcję na 2, 5, 10 lub 20 drukarek. Liczba użytkowników i stanowisk w sieci nie jest ograniczona. W sklepie wybierzesz okres 1 roku lub 3 lat.', limitation: 'Integracja wymaga konfiguracji po stronie BarTender i systemu firmy. Repozytorium Librarian, obieg zatwierdzania dokumentów i pełny audyt są dostępne w Enterprise.',
  },
  enterprise: {
    name: 'Enterprise', eyebrow: 'ZARZĄDZANIE ETYKIETAMI W ORGANIZACJI', line: 'Zatwierdzony wzór.\nWłaściwa etykieta.',
    intro: 'Zarządzaj wersjami szablonów, uprawnieniami i obiegiem zatwierdzania. Rejestruj działania użytkowników w jednym środowisku.',
    facts: [['Librarian', 'Repozytorium dokumentów'], ['Workflow', 'Zatwierdzanie zmian'], ['Audyt', 'Rejestrowanie zdarzeń'], ['Failover', 'Obsługa ciągłości druku']],
    heading: 'Od projektu\ndo zatwierdzonej wersji.', text: 'Przechowuj szablony w Librarian. Określ etapy akceptacji w Workflow Designer i udostępnij zespołowi wersję przeznaczoną do druku.', motion: 'manage',
    features: [['Wersje i uprawnienia', 'Kontroluj zmiany dokumentów i dostęp do funkcji według ról. Ogranicz użycie niezatwierdzonych projektów.'], ['Historia działań', 'Rejestruj zdarzenia bez limitu liczby zapisów. Wymagaj podpisu elektronicznego przy wskazanych czynnościach.'], ['Ciągłość pracy', 'Skonfiguruj przełączanie zadań na inną drukarkę i zapasowy serwer licencji. Funkcje te wymagają przygotowania środowiska.']],
    screens: [workflow, forms], steps: [['Przygotuj zmianę', 'Projektant zapisuje nową wersję dokumentu w centralnym repozytorium.'], ['Przeprowadź akceptację', 'Wyznaczone osoby sprawdzają szablon według ustalonego obiegu.'], ['Udostępnij zespołowi', 'Operatorzy otrzymują dostęp do właściwych dokumentów, a system zapisuje zdarzenia.']],
    license: 'Ustal zasady pracy.\nDobierz zakres wdrożenia.', licenseText: 'Enterprise wyceniamy indywidualnie. Wybierz liczbę drukarek i określ zasady zatwierdzania, role użytkowników oraz systemy wymagające integracji.', limitation: 'Funkcje audytu i podpisów wspierają procedury firmy. Ich wdrożenie wymaga konfiguracji, ustalenia uprawnień i sprawdzenia działania procesu.',
  },
  cloud: {
    name: 'Cloud', eyebrow: 'PROJEKTOWANIE I DRUK W CHMURZE', line: 'Projektuj online.\nDrukuj w wielu lokalizacjach.',
    intro: 'Udostępniaj firmowe szablony zespołom w różnych lokalizacjach. Projektuj etykiety i zlecaj druk w przeglądarce.',
    facts: [['Przeglądarka', 'Projektowanie i zlecanie druku'], ['Bez limitu', 'Liczba użytkowników'], ['3 plany', 'Essentials, Automation, Enterprise'], ['Subskrypcja', 'Licencja na drukarki']],
    heading: 'Jedna biblioteka etykiet.\nDla całego zespołu.', text: 'Zapisuj szablony na koncie firmy i określ, kto może z nich korzystać. Projektant i panel druku działają w przeglądarce.', motion: 'design',
    features: [['Essentials', 'Projektowanie w Cloud Designer, połączenia z danymi, formularze wprowadzania danych i centralne przechowywanie dokumentów.'], ['Automation', 'Integracje REST API i File Drop, Workflow Designer, przestrzenie zespołów i formularze druku w przeglądarce.'], ['Enterprise', 'Gotowe konektory druku z systemów biznesowych. Zakres wdrożenia i cenę tego planu ustalamy indywidualnie.']],
    screens: [cloudDesigner, { title: 'Panel konta', heading: 'Sprawdzaj aktywność druku.', text: 'Sprawdź liczbę wydruków i wróć do ostatnio używanych dokumentów. Widok panelu zależy od planu i uprawnień użytkownika.', image: 'dashboard.jpg', alt: 'BarTender Cloud — panel konta ze statystykami i ostatnimi dokumentami' }],
    steps: [['Przygotuj konto', 'Dodaj użytkowników i dokumenty. Ustal ich dostęp do szablonów i drukarek.'], ['Połącz drukarki', 'Skonfiguruj Print Gateway albo obsługiwany sposób bezpośredniego druku z chmury, zależnie od planu i modelu drukarki.'], ['Projektuj i drukuj', 'Pracuj w przeglądarce. Połączenia z systemem firmy skonfiguruj w planie, który obejmuje integracje.']],
    license: 'Dobierz plan\ni liczbę drukarek.', licenseText: 'Essentials i Automation są dostępne jako roczne subskrypcje na drukarki. Użytkownicy nie mają osobnego limitu. Plan Enterprise wyceniamy na zapytanie.', limitation: 'Usługa wymaga połączenia z internetem. Do wielu drukarek potrzebny jest lokalny Print Gateway. Bezpośredni druk z chmury zależy od zgodności urządzenia i planu.',
  },
}
