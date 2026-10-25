import type { BartenderScreen } from './BartenderStoryContent'
export type LoftwareEdition = 'designer' | 'essentials' | 'business'
type LoftwareStoryData = {
  name: string; eyebrow: string; line: string; intro: string; facts: [string, string][];
  heading: string; text: string; features: [string, string][]; screens: BartenderScreen[];
  processHeading: string; steps: [string, string][]; license: string; licenseText: string; limit: string;
}
const webDesigner: BartenderScreen = {
  title: 'Web Designer', heading: 'Ułóż etykietę w przeglądarce.',
  text: 'Dodaj tekst, grafikę i kody kreskowe. Połącz pola z danymi produktu, sprawdź podgląd i zapisz projekt w Control Center.',
  image: 'web-designer.png', alt: 'Loftware Web Designer — projekt etykiety z polami danych, kodem Data Matrix i kodem kreskowym',
}
const accessRoles: BartenderScreen = {
  title: 'Uprawnienia', heading: 'Ustal, kto projektuje, a kto drukuje.',
  text: 'Przypisz użytkownikom role odpowiadające ich zadaniom. Operator otrzymuje dostęp do dokumentów i funkcji potrzebnych na jego stanowisku.',
  image: 'roles.jpg', alt: 'Loftware Control Center — lista ról i uprawnień użytkowników',
}
const connected: BartenderScreen = {
  title: 'Druk w firmie', heading: 'Połącz firmowe dane z drukiem.',
  text: 'Ustal, z którego systemu pochodzą dane produktu i gdzie ma powstać etykieta. Skonfiguruj integrację oraz połączenie z drukarkami.',
  image: 'connected-printing.png', alt: 'Loftware — ilustracja połączenia infrastruktury serwerowej ze stanowiskami pracy',
}
export const loftwareStories: Record<LoftwareEdition, LoftwareStoryData> = {
  designer: {
    name: 'Cloud Designer', eyebrow: 'PROJEKTOWANIE ETYKIET W CHMURZE',
    line: 'Zaprojektuj raz.\nDrukuj z firmowych danych.',
    intro: 'Przygotuj etykiety produktowe i magazynowe w przeglądarce lub na komputerze z Windows. Przechowuj projekty na koncie firmy w chmurze.',
    facts: [['Web Designer', 'Projektowanie w przeglądarce'], ['Desktop Designer', 'Edytor dla Windows'], ['1–10', 'Drukarek w licencji'], ['Control Center', 'Wspólne pliki etykiet']],
    heading: 'Projektuj w przeglądarce\nlub w aplikacji Windows.',
    text: 'Otwórz etykietę w Web Designer albo w programie Desktop Designer. Oba edytory korzystają z tego samego pliku zapisanego w Control Center.',
    features: [['Dane z plików i baz', 'Wstawiaj wartości z Excela, plików tekstowych, baz SQL i innych obsługiwanych źródeł. Połącz pola etykiety z wybranym źródłem.'], ['Projekty na koncie firmy', 'Zapisuj etykiety w chmurze i udostępniaj je uprawnionym użytkownikom. Pliki są dostępne z połączonych stanowisk.'], ['Druk bez edytowania projektu', 'W Loftware Print operator wybiera etykietę i uruchamia druk. Nie musi otwierać dokumentu w edytorze.']],
    screens: [webDesigner],
    processHeading: 'Przygotuj wzór.\nPołącz dane. Drukuj.',
    steps: [['Zaprojektuj układ', 'Ustaw wymiary etykiety i rozmieszczenie pól. Dobierz kod kreskowy, tekst oraz grafikę.'], ['Podłącz źródło danych', 'Przypisz wartości produktu do pól na etykiecie i sprawdź wynik w podglądzie.'], ['Udostępnij dokument', 'Zapisz projekt w Control Center. Skonfiguruj Desktop Designer oraz drukarki na komputerach używanych do druku.']],
    license: 'Zacznij od jednej drukarki.\nDodawaj kolejne.',
    licenseText: 'Roczna subskrypcja podstawowa obejmuje jedną drukarkę. Każde rozszerzenie dodaje kolejną do aktywnej licencji. Designer obsługuje łącznie do 10 drukarek.',
    limit: 'Do aplikacji z formularzami PowerForms i druku przez Loftware Web Client wybierz Essentials. Cloud API i zarządzanie drukarkami są dostępne od Business.',
  },
  essentials: {
    name: 'Cloud Essentials', eyebrow: 'FORMULARZE DRUKU DLA OPERATORÓW',
    line: 'Wybierz produkt.\nWydrukuj właściwą etykietę.',
    intro: 'Przygotuj operatorom ekran do wyboru produktu, wpisania numeru partii i zlecenia druku. Zarządzaj dokumentami i dostępem do nich z jednego miejsca.',
    facts: [['PowerForms', 'Formularze dla stanowisk'], ['Web Client', 'Uruchamianie aplikacji druku'], ['2–20', 'Drukarek w licencji'], ['Role', 'Dostęp według zadań']],
    heading: 'Dopasuj formularz\ndo pracy operatora.',
    text: 'W Designer PowerForms przygotujesz aplikację z polami, listami wyboru i przyciskami. Operator wskazuje produkt, podaje potrzebne dane i zleca druk.',
    features: [['Formularze PowerForms', 'Zbuduj ekran odpowiadający zadaniu: wybór artykułu, numer partii lub liczba etykiet. Uruchamiaj go w Loftware Print albo Web Client.'], ['Kontrola dostępu', 'Przydziel role użytkownikom i korzystaj z domyślnego procesu zatwierdzania. Udostępniaj na stanowiskach właściwe dokumenty.'], ['Dane z lokalnego systemu', 'Przekazuj dane z lokalnej aplikacji do druku etykiet. Essentials obejmuje integracje jednokierunkowe; połączenie trzeba skonfigurować.']],
    screens: [webDesigner, accessRoles],
    processHeading: 'Przygotuj formularz.\nUłatw pracę operatorowi.',
    steps: [['Przygotuj dokumenty', 'Utwórz szablony etykiet i połącz je z danymi używanymi na stanowisku.'], ['Zbuduj formularz', 'W PowerForms wybierz pola i czynności potrzebne operatorowi. Sprawdź działanie na docelowym stanowisku.'], ['Udostępnij aplikację', 'Nadaj użytkownikom dostęp i skonfiguruj Loftware Print lub cienkiego klienta Web Client.']],
    license: 'Zacznij od 2 drukarek.\nRozbuduj do 20.',
    licenseText: 'Roczna subskrypcja podstawowa obejmuje do 2 drukarek. Dodawaj kolejne urządzenia pojedynczo, do łącznego limitu 20. Rozszerzenia wymagają aktywnej subskrypcji.',
    limit: 'Cloud SQL i wydłużona historia druku są dodatkowymi opcjami. Rozszerzenie drukarki lub opcja wymaga aktywnej subskrypcji podstawowej.',
  },
  business: {
    name: 'Cloud Business', eyebrow: 'ETYKIETY POŁĄCZONE Z SYSTEMAMI FIRMY',
    line: 'Dane z systemu.\nEtykiety na produkcję.',
    intro: 'Uruchamiaj druk na podstawie danych z aplikacji firmy. Zarządzaj drukarkami, wersjami dokumentów i dostępem użytkowników w Control Center.',
    facts: [['Cloud API', 'Integracje z aplikacjami'], ['Drukarki', 'Centralne zarządzanie'], ['Analityka', 'Informacje o drukowaniu'], ['Small / Large', 'Dobór zakresu licencji']],
    heading: 'Połącz źródła danych,\nszablony i drukarki.',
    text: 'Business obejmuje funkcje Essentials i dodaje narzędzia do zarządzania drukiem oraz integracje z systemami lokalnymi i chmurowymi. Dobierz konfigurację do przepływu danych w firmie.',
    features: [['Integracje i Cloud API', 'Połącz druk z systemem, który obsługuje zamówienia, magazyn lub produkcję. Podczas wdrożenia ustal sposób wymiany danych i obsługę błędów.'], ['Zarządzanie drukarkami', 'Sprawdzaj urządzenia i analizuj druk. Zgodne drukarki chmurowe mogą odbierać zadania bez sterownika na lokalnym komputerze.'], ['Kontrola dokumentów', 'Ustal obieg zatwierdzania i role użytkowników. System Change and Transport wspiera przenoszenie zmian między przygotowanymi środowiskami.']],
    screens: [connected, accessRoles, webDesigner],
    processHeading: 'Dane z aplikacji.\nEtykiety na stanowiskach.',
    steps: [['Ustal przepływ danych', 'Określ, który system dostarcza dane produktu, kiedy ma powstać etykieta i gdzie będzie drukowana.'], ['Połącz systemy', 'Skonfiguruj integrację, wybór dokumentów i komunikację z drukarkami. Przygotuj reakcję na niepełne dane lub błąd druku.'], ['Wprowadź zasady pracy', 'Nadaj role użytkownikom, ustal zatwierdzanie zmian i sprawdź cały proces przed uruchomieniem.']],
    license: 'Dobierz wersję\ndo skali wdrożenia.',
    licenseText: 'Business Small obejmuje do 3 drukarek, a Business Large do 50. Wersję Small można rozszerzać o pojedyncze drukarki. Wycenę przygotujemy po ustaleniu zakresu wdrożenia.',
    limit: 'Integracje SAP i Oracle, instalacja hybrydowa oraz dodatkowe środowiska mogą wymagać osobnych opcji. Przed wyceną ustalimy potrzebne moduły i zakres prac.',
  },
}
