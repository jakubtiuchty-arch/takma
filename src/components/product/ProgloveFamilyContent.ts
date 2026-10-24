export type ProgloveModel = 'mark-3' | 'mark-basic' | 'mark-display' | 'leo' | 'mai'
export type ProgloveChoice = { title: string; heading: string; text: string; detail: string; image?: string; value?: string; pn?: string }
type FamilyContent = {
 name: string; hero: string; line: string; intro: string; facts: [string,string][]; movie: string;
 workTitle: string; workText: string; workPhoto: string; features: [string,string][];
 battery: string; charge: string; protection: string; temperature: string; mass: string;
 connect: string; final: string; choices?: ProgloveChoice[];
}
export const progloveContent: Record<ProgloveModel,FamilyContent> = {
 'mark-3': {
  name:'MARK 3',hero:'mark3-benefits-build-to-wear',line:'Etykiety na towarze\ni oznaczenia na regale.',
  intro:'MARK 3 nosisz na dłoni i używasz do odczytu kodów z różnych odległości. Układ Multi Range sprawdza się przy kompletacji, przyjęciach i obsłudze palet.',
  facts:[['Multi Range','Zakres roboczy ok. 10 cm–6 m'],['39 g','Masa skanera'],['IP65','Ochrona przed pyłem i wodą'],['od −20°C','Temperatura pracy']],movie:'MARK3-scanner_1',
  workTitle:'Jeden skaner do etykiet\nna paczkach i regałach.',
  workText:'Nie każda etykieta znajduje się tuż przy dłoni. MARK 3 odczytuje kody z bliska i z większej odległości, więc możesz używać go przy różnych zadaniach magazynowych.',
  workPhoto:'mark3-device-background',
  features:[['Kompletacja i pakowanie','Odczytuj etykiety produktów oraz paczek podczas przygotowywania zamówienia.'],['Przyjęcia i obsługa palet','Skanuj etykiety logistyczne i oznaczenia lokalizacji w magazynie.'],['Produkcja i montaż','Rejestruj części i kolejne etapy pracy w połączonym systemie.']],
  battery:'ok. 12 000 skanów',charge:'2 h',protection:'IP65',temperature:'−20 do +50°C',mass:'39 g',
  connect:'Połącz MARK 3 przez Bluetooth z Androidem lub iOS. Tryb HID przekazuje odczytane kody podobnie jak klawiatura. Android obsługuje też INSIGHT Mobile, a iOS — ProGlove SDK. Do komputera z USB dobierz Gateway.',
  final:'Podaj rodzaj i wielkość kodów oraz odległość, z której chcesz je odczytywać. Sprawdzimy, czy MARK 3 pasuje do Twoich zadań.',
 },
 'mark-basic': {
  name:'MARK Basic',hero:'mark-basic-image',line:'Skanowanie towaru\nbez sięgania po skaner.',
  intro:'MARK Basic mocujesz na dłoni i uruchamiasz spustem w mocowaniu. Wybierz wersję do odczytu z bliska albo do pracy ze zmienną odległością od kodu.',
  facts:[['2 wersje','Standard Range i Multi Range'],['ok. 8000','Skanów na ładowaniu'],['39–40 g','Zależnie od wersji'],['IP54','Klasa ochrony obudowy']],movie:'mark-basic-hero-section-video-1920X1040',
  workTitle:'Do pakowania, inwentaryzacji\ni codziennej pracy w magazynie.',
  workText:'Skaner pozostaje w mocowaniu, gdy chwytasz i przekładasz produkty. Nie musisz odkładać go na blat po każdej etykiecie.',workPhoto:'mark-basic-2-tab-image-2-big',
  features:[['Pakowanie zamówień','Sprawdzaj kody produktów przed zamknięciem paczki.'],['Inwentaryzacja','Odczytuj etykiety i przekazuj kody do aplikacji używanej podczas liczenia towaru.'],['Przyjęcia i wydania','Rejestruj produkty oraz lokalizacje bez trzymania skanera w dłoni.']],
  battery:'ok. 8000 skanów',charge:'2 h',protection:'IP54',temperature:'0 do +50°C',mass:'39–40 g',
  connect:'MARK Basic łączy się przez Bluetooth z Androidem lub iOS. W trybie HID wpisuje odczytane kody do aplikacji. Dodatkowe funkcje udostępnia INSIGHT Mobile na Androidzie lub ProGlove SDK na iOS. Do połączenia z komputerem przez USB potrzebujesz Gateway.',
  final:'Opisz swoje etykiety i typową odległość odczytu. Pomożemy wybrać Standard Range albo Multi Range i dobrać mocowanie.',
  choices:[
   {title:'Standard Range',pn:'M007',heading:'Do częstych odczytów z bliska.',text:'Wersja do etykiet na produktach, które trzymasz lub masz przed sobą. Celownik LED pomaga wskazać właściwy kod.',value:'ok. 10–90 cm',detail:'Orientacyjny zakres roboczy. Przykład: Code 39, 20 mil — około 4–92 cm.'},
   {title:'Multi Range',pn:'M011',heading:'Do pracy z różnymi odległościami.',text:'Wersja do etykiet na towarze i regałach. Ma celownik laserowy i większy zakres roboczy.',value:'ok. 10–250 cm',detail:'Orientacyjny zakres roboczy. Przykład: Code 128, 15 mil — około 18–165 cm.'},
  ],
 },
 'mark-display': {
  name:'MARK Display',hero:'mark-display-benefits-accuracy',line:'Lokalizacja i ilość\nna ekranie przy dłoni.',
  intro:'MARK Display łączy skaner kodów z ekranem e-paper. Po integracji z Twoim systemem wyświetla pracownikowi informacje potrzebne do wykonania zadania.',
  facts:[['1,54″','Ekran e-paper'],['48 g','Masa skanera'],['ok. 7500','Skanów na ładowaniu'],['IP54','Klasa ochrony obudowy']],movie:'MARK-Display-scanner_1',
  workTitle:'Sprawdź, skąd pobrać towar\ni ile sztuk przygotować.',
  workText:'Na ekranie możesz pokazać lokalizację, numer artykułu, ilość lub komunikat z aplikacji magazynowej. Treść ekranu przesyła zintegrowany system.',workPhoto:'display-about-device-image',
  features:[['Lokalizacja','Pracownik widzi oznaczenie miejsca, do którego ma podejść.'],['Artykuł i ilość','Ekran może wyświetlić kod produktu oraz liczbę sztuk do pobrania.'],['Kolejny krok','Po obsłużeniu odczytu aplikacja może przesłać następne zadanie lub komunikat.']],
  battery:'ok. 7500 skanów',charge:'2 h',protection:'IP54',temperature:'0 do +45°C',mass:'48 g',
  connect:'MARK Display wymaga integracji. Z Androidem współpracuje przez INSIGHT Mobile, z iOS przez ProGlove SDK, a z komputerem przez Gateway. Nie działa jako zwykła klawiatura Bluetooth HID. Wyświetlanie zadań wymaga przesyłania danych z Twojej aplikacji.',
  final:'Podaj nazwę systemu magazynowego i informacje, które chcesz wyświetlać na dłoni. Pomożemy sprawdzić sposób integracji i dobrać wersję skanera.',
  choices:[
   {title:'Standard Range',pn:'M008',heading:'Do odczytu etykiet z bliska.',text:'Celownik LED i odczyt kodów na produktach znajdujących się przy dłoni.',value:'ok. 4–92 cm',detail:'Przykładowy zakres dla kodu Code 39 o module 20 mil.'},
   {title:'Mid Range',pn:'M006',heading:'Do etykiet w większej odległości.',text:'Celownik laserowy pomaga wskazać kod podczas kompletacji i innych zadań logistycznych.',value:'ok. 5–137 cm',detail:'Przykładowy zakres dla tego samego kodu Code 39 o module 20 mil.'},
  ],
 },
 leo:{
  name:'LEO',hero:'leo-benefit-image-1',line:'Lekki skaner\ndo etykiet z bliska.',
  intro:'LEO waży 35 g i odczytuje kody 1D oraz 2D. Sprawdza się przy pakowaniu, liczeniu towaru i przygotowywaniu zamówień.',
  facts:[['35 g','Masa skanera'],['1 h','Pełne ładowanie w stacji'],['ok. 4000','Skanów na ładowaniu'],['1D i 2D','Kody kreskowe i QR']],movie:'MARK-Leo-scanner_1',
  workTitle:'Odczytuj kody\npodczas pakowania i liczenia towaru.',
  workText:'LEO mocujesz na dłoni i uruchamiasz przyciskiem w mocowaniu. Możesz przekładać produkty, a skaner pozostaje na swoim miejscu.',workPhoto:'leo-about-device-image',
  features:[['Pakowanie przesyłek','Odczytuj kody produktów przed włożeniem ich do paczki.'],['Inwentaryzacja','Przesyłaj kody do aplikacji, w której zapisujesz wyniki liczenia.'],['Zamówienia do odbioru','Sprawdzaj etykiety podczas kompletowania zakupów klienta.']],
  battery:'ok. 4000 skanów',charge:'1 h',protection:'IP43',temperature:'0 do +50°C',mass:'35 g',
  connect:'LEO łączy się przez Bluetooth z Androidem lub iOS. Tryb HID przekazuje kody podobnie jak klawiatura. Na Androidzie możesz też użyć INSIGHT Mobile, a na iOS — ProGlove SDK. Komputer z USB wymaga bramki Gateway.',
  final:'LEO jest przeznaczony do odczytów z bliska. Podaj rodzaj i wielkość etykiet oraz używaną aplikację — pomożemy sprawdzić, czy ten model będzie odpowiedni.',
 },
 mai:{
  name:'MAI',hero:'mai-section-eight-image-one',line:'Zadania, odczyty i potwierdzenia\nna ekranie przy dłoni.',
  intro:'MAI łączy skaner Multi Range z kolorowym ekranem dotykowym i czterema przyciskami. Połącz urządzenie z systemem, aby wyświetlać zadania i rejestrować odpowiedzi pracownika.',
  facts:[['1,95″','Kolorowy ekran dotykowy'],['Wi-Fi 6','Praca bez telefonu po integracji'],['Multi Range','Orientacyjnie 5 cm–6 m'],['68 g','Masa urządzenia']],movie:'mai-section-one-v2',
  workTitle:'Sprawdź zadanie\ni potwierdź je na ekranie.',
  workText:'Pracownik może odczytać lokalizację, skanować produkt, poprawić liczbę sztuk lub zgłosić brak towaru. Dostępne działania zależą od konfiguracji i integracji.',workPhoto:'mai-section-six-image',
  features:[['Ekran dotykowy','Kolorowe pola i komunikaty pokazują informacje potrzebne przy danym zadaniu.'],['Cztery przyciski','Funkcje przycisków możesz dopasować do obsługiwanego procesu.'],['Odczyt kodów','Skanowanie uruchomisz spustem w opasce, przypisanym przyciskiem albo z ekranu.']],
  battery:'1250 mAh',charge:'ok. 2 h',protection:'IP65',temperature:'−10 do +50°C',mass:'68 g',
  connect:'MAI może łączyć się z systemem bezpośrednio przez Wi-Fi 6 w pasmach 2,4 i 5 GHz. Może też pracować przez Bluetooth z Androidem (INSIGHT Mobile), iOS (SDK) lub bramką Gateway. Każdy sposób pracy wymaga odpowiedniej konfiguracji i integracji z aplikacją.',
  final:'Opisz, jakie zadania pracownik ma wykonywać na MAI i z jakiego systemu korzystasz. Pomożemy określić sposób integracji oraz dobrać opaskę i stację Gen 2.',
  choices:[
   {title:'Pobieranie towaru',heading:'Lokalizacja, produkt i liczba sztuk.',text:'Pokaż pracownikowi miejsce pobrania, oznaczenie artykułu i wymaganą ilość. Kolejne informacje przesyła Twój system.',detail:'Układ ekranu można dopasować do zadania.',image:'mai-section-eight-image-one'},
   {title:'Zmiana ilości',heading:'Potwierdź lub popraw ilość.',text:'Pracownik może wpisać liczbę sztuk na ekranie, zamiast sięgać po osobny terminal.',detail:'Obsługa danych wymaga integracji z aplikacją.',image:'mai-section-eight-image-two'},
   {title:'Zgłoszenie problemu',heading:'Zgłoś brak towaru lub inną niezgodność.',text:'Przycisk na ekranie może przekazać do systemu informację o pustej lokalizacji albo problemie z produktem.',detail:'Rodzaje zgłoszeń ustalasz w konfiguracji procesu.',image:'mai-section-eight-image-three'},
   {title:'Wpisywanie danych',heading:'Wprowadź dane bez dodatkowego urządzenia.',text:'Klawiatura ekranowa pozwala wpisać informacje wymagane przez aplikację, np. dane logowania.',detail:'Zakres dostępnych pól zależy od aplikacji.',image:'mai-section-eight-image-four'},
   {title:'Kolejne zamówienie',heading:'Przejdź do następnego zadania.',text:'Po zakończeniu pracy aplikacja może wyświetlić podsumowanie lub listę kolejnych zamówień.',detail:'Widoki i przejścia wymagają skonfigurowania w systemie.',image:'mai-section-eight-image-five'},
  ],
 },
}
