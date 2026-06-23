import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi bezprzewodowego skanera kodów
 * Honeywell Xenon Ultra 1962 (retail/healthcare) po polsku.
 */
export const honeywellXenonUltra1962Pl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze bezprzewodowego skanera kodów Honeywell Xenon Ultra 1962 po polsku — od pierwszego ładowania, baterii i bazy, przez parowanie Bluetooth, tryb wsadowy, skanowanie i tryby pracy, po ustawienia Healthcare, konfigurację, dezynfekcję i rozwiązywanie problemów.',
  sections: [
    {
      title: 'Xenon Ultra 1962: czym jest i do czego służy',
      blocks: [
        { type: 'p', text: 'Xenon Ultra 1962 to **bezprzewodowy, uniwersalny skaner ręczny** typu area-imaging, który czyta kody **1D i 2D**. To skaner klasy premium do codziennej pracy w **handlu (retail)** i **ochronie zdrowia (healthcare)** — sprawdza się przy kasach, w aptekach, w rejestracjach, na oddziałach szpitalnych oraz w lekkich magazynach. Nie jest to skaner ultrawytrzymały przemysłowy: stawia na uniwersalność, wygodę i precyzję odczytu, a nie na pracę w najtrudniejszych warunkach hali produkcyjnej.' },
        { type: 'p', text: 'Skaner łączy się ze światem przez **Bluetooth**, zasilany jest **wymienną baterią litowo-jonową** zabudowaną w rękojeści, a dane przekazuje do hosta przez **bazę ładująco-komunikacyjną (cradle)** lub bezpośrednio do urządzenia Bluetooth. W ofercie występuje też wariant z bezobsługowym superkondensatorem (battery-free), ładowanym wyłącznie w bazie Xenon Ultra.' },
        { type: 'p', text: 'Dla placówek medycznych przewidziano osobny wariant **Healthcare** z obudową odporną na środki dezynfekujące oraz zestawem cichych ustawień — opisanych w dalszej części tej instrukcji.' },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Skaner jest dostarczany z baterią naładowaną tylko częściowo. Przed pierwszym użyciem **ładuj baterię przez co najmniej 4 godziny**, aby uzyskać pełną wydajność pracy.' },
        { type: 'p', text: 'Aby przygotować zestaw bezprzewodowy do pracy: podłącz zasilacz do spodu bazy i do gniazdka, następnie wepnij kabel komunikacyjny do spodu bazy i do hosta, a na końcu **włóż skaner do bazy** — skaner automatycznie połączy się z bazą i zacznie się ładować.' },
        { type: 'p', text: 'Jeśli baza jest zasilana przez kabel komunikacyjny (np. USB), a nie z osobnego zasilacza, prąd ładowania jest mniejszy, a czas ładowania dłuższy. Szybsze ładowanie zapewnia port USB zgodny ze standardem BC1.2 lub zewnętrzny zasilacz podłączony do bazy.' },
      ],
    },
    {
      title: 'Bateria: zalecenia, kondycja i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'Skaner zasila wymienna **bateria litowo-jonowa** zabudowana w rękojeści (model BAT-SCN11 lub BAT-SCN11WC, 3,7 V DC, 7,4 Wh). Ogniwa litowo-jonowe można doładowywać bez pełnego rozładowania i używać bez pełnego naładowania — nie wymagają „treningu" ani cykli kondycjonowania.' },
        { type: 'list', items: [
          'gdy host nie jest używany, zostaw bazę podłączoną do zasilania, by skaner był stale gotowy do pracy;',
          'uszkodzoną baterię wymień natychmiast — może uszkodzić skaner;',
          'unikaj upuszczania baterii i skanera; przy podejrzeniu uszkodzenia lub przerywanego ładowania oddaj urządzenie do autoryzowanego serwisu;',
          'bateria z czasem się zużywa — wymień ją, gdy przestaje utrzymywać odpowiedni poziom naładowania; przyjmuje się okresową wymianę, zwykle co około dwa lata;',
          'stosuj wyłącznie oryginalne baterie Honeywell — użycie zamiennika może spowodować uszkodzenia nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Ze względów bezpieczeństwa nie wrzucaj baterii do ognia i nie nagrzewaj jej, nie przechowuj i nie przenoś razem z metalowymi przedmiotami, nie zwieraj styków, nie narażaj na kontakt z wodą, nie przebijaj, nie deformuj ani nie rozbieraj ogniwa. Zużytą baterię oddaj do recyklingu zgodnie z lokalnymi przepisami.' },
        { type: 'p', text: 'Wariant z **superkondensatorem (battery-free)** nie ma wymiennego ogniwa — energię gromadzi wbudowany superkondensator, który trzeba naładować przed pierwszym użyciem i doładowywać, odkładając skaner do bazy po pracy. Można go ładować wyłącznie bazą Xenon Ultra.' },
      ],
    },
    {
      title: 'Baza/cradle: ładowanie, komunikacja i podłączenie do hosta',
      blocks: [
        { type: 'p', text: 'Bezprzewodowa baza ładująco-komunikacyjna (cradle) jest pomostem między skanerem a hostem. Zawiera moduł interfejsu oraz **moduł radiowy RF**, który wymienia dane między skanerem a hostem; po stronie hosta baza obsługuje też menu konfiguracyjne, wskaźniki oraz autotest po włączeniu. Baza jest jednocześnie ładowarką baterii (lub superkondensatora) skanera. Występuje w wersji prezentacyjnej (Presentation CCB) i poziomej (Horizontal CCB).' },
        { type: 'p', text: 'Bazę można podłączyć do komputera albo terminala na kilka sposobów — w zależności od posiadanego kabla:' },
        { type: 'list', items: [
          '**USB** — najczęstsze połączenie z komputerem; po podłączeniu sprawdź działanie, skanując dowolny kod (domyślnie skaner zgłasza się jako klawiatura USB);',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy; interfejs programuje się domyślnie na 115 200 bodów, 8 bitów danych, bez parzystości, 1 bit stopu;',
          '**Keyboard Wedge** — baza wpięta między klawiaturę a komputer, podająca dane jak klawiatura PC (przed podłączeniem kabla wyłącz zasilanie); domyślnie dodawany jest sufiks CR.',
        ] },
        { type: 'p', text: 'Stan ładowania w bazie sygnalizuje dioda: **zielona „oddychająca"** = trwa ładowanie, **zielona ciągła** = ładowanie zakończone. W przypadku skanera z superkondensatorem dioda baterii podczas pobytu w bazie pozostaje wygaszona.' },
        { type: 'p', text: 'Dioda komunikacji bazy: **wygaszona** = stan uśpienia USB, **czerwona mrugająca** = baza włączona, brak połączonego skanera, **zielona mrugająca** = baza włączona ze skanerem, **zielone krótkie błyski seriami** = trwa przesyłanie danych.' },
      ],
    },
    {
      title: 'Parowanie skanera z bazą i tryby łączenia',
      blocks: [
        { type: 'p', text: 'Najprościej skaner łączy się z bazą przez **włożenie go do bazy** — oprogramowanie sprawdza poziom naładowania, wykrywa skaner i tworzy łącze zależnie od wybranego trybu. Przy pierwszym połączeniu oba urządzenia wydają krótki sygnał (chirp) w chwili nawiązania łącza radiowego; przy kolejnych połączeniach skaner nie sygnalizuje tego dodatkowo. Aby sprawdzić, czy łącze powstało poprawnie, zeskanuj dowolny kod — zielony błysk diody i sygnał poprawnego odczytu oznaczają udane połączenie.' },
        { type: 'p', text: 'Dostępne są dwa tryby ładowania w bazie:' },
        { type: 'list', items: [
          '**Charge and Link Mode (ładowanie i łączenie)** — skaner włożony do bazy ładuje się i jednocześnie tworzy łącze (ustawienie domyślne);',
          '**Charge Only Mode (tylko ładowanie)** — skaner w bazie tylko się ładuje, bez tworzenia łącza; przydatne, gdy skaner jest przypisany do punktu Access Point lub innego urządzenia Bluetooth, a chcesz go tylko doładować bez zrywania istniejącego łącza.',
        ] },
        { type: 'p', text: 'Dla różnych zastosowań przewidziano dwa profile łącza: **Open Link Mode** (domyślny — nowy skaner włożony do bazy przejmuje łącze, a poprzedni jest odłączany) oraz **Locked Link Mode** (łącze zablokowane — inne skanery wstawione do bazy tylko się ładują, ale się nie łączą).' },
        { type: 'p', text: 'Jeśli musisz zastąpić zgubiony lub uszkodzony skaner przypisany do bazy, zeskanuj nowym skanerem kod **Override Locked Scanner** i włóż go do bazy — stare łącze zostanie skasowane, a nowy skaner przypisany. Aby ręcznie odłączyć skaner, użyj kodu **Unlink Scanner**.' },
        { type: 'p', text: 'Ważne: gdy skaner pracuje w zestawie z bazą (lub punktem dostępowym Access Point), część ustawień menu jest przechowywana po stronie bazy, dlatego podczas konfiguracji skaner musi być z nią połączony.' },
      ],
    },
    {
      title: 'Parowanie Bluetooth z komputerem, tabletem lub telefonem',
      blocks: [
        { type: 'p', text: 'Skaner może pracować nie tylko z bazą, ale i bezpośrednio z innymi urządzeniami **Bluetooth** — komputerami, laptopami i tabletami — tak, że odczytane dane pojawiają się na ekranie jak wpisane z klawiatury. Aby sparować skaner bezpośrednio z urządzeniem jako klawiaturę:' },
        { type: 'list', ordered: true, items: [
          'zeskanuj kod **Bluetooth HID Keyboard Connect**;',
          'na komputerze, tablecie lub telefonie włącz wyszukiwanie urządzeń Bluetooth (zgodnie z instrukcją tego urządzenia);',
          'wybierz nazwę skanera z listy — część urządzeń sparuje się automatycznie i wyświetli komunikat o powodzeniu;',
          'jeśli urządzenie poprosi o PIN, zeskanuj go w ciągu 60 sekund: wczytaj kod **Bluetooth PIN Code**, następnie kody cyfr PIN-u i na końcu kod zapisu (Save). Domyślny PIN skanera to 1234; można go zmienić.',
        ] },
        { type: 'p', text: 'Wygodniejsze jest **Bluetooth Secure Simple Pairing (SSP)**, które pozwala połączyć się bezpiecznie bez podawania PIN-u (dostępne przy Bluetooth 2.1 i nowszych; domyślnie włączone). SSP wyłącz tylko wtedy, gdy łączysz się z urządzeniem o starszej wersji Bluetooth.' },
        { type: 'p', text: 'Dostępne jest też połączenie szeregowe Bluetooth (kod **Non-Base BT Connection** dla PC i laptopów) oraz tryby pracy z urządzeniami **Bluetooth Low Energy (BLE)** — kod **HID BLE Connect** dla urządzeń klawiaturowych BLE oraz **Serial BLE Connect** dla dwukierunkowej komunikacji szeregowej.' },
        { type: 'p', text: 'Po połączeniu skanera bezpośrednio z iPadem, telefonem lub laptopem możesz przełączać klawiaturę ekranową urządzenia szybkim podwójnym pociągnięciem spustu. Aby skaner mógł znów rozmawiać z bazą, najpierw odłącz go od urządzenia kodem **Bluetooth HID Keyboard Disconnect**, a potem włóż go z powrotem do bazy (lub zeskanuj kod łączenia bazy).' },
      ],
    },
    {
      title: 'Praca poza zasięgiem i tryb wsadowy (batch)',
      blocks: [
        { type: 'p', text: 'Skaner cały czas utrzymuje łączność z bazą lub punktem Access Point, nawet gdy nie przesyła danych. Gdy przez kilka sekund nie może się z nią komunikować, jest **poza zasięgiem** — próba odczytu kodu kończy się wówczas sygnałem błędu (dane nie dotarły do bazy ani hosta), a baza i skaner mogą dodatkowo uruchomić alarm dźwiękowy (**Out-of-Range Alarm**) o ustawianym czasie trwania. Po powrocie w zasięg skaner odtwarza łącze, co potwierdza pojedynczy sygnał po wczytaniu tablicy parametrów.' },
        { type: 'p', text: 'Aby pracować z dala od bazy bez utraty danych, włącz **tryb wsadowy (Batch Mode)**, który zapisuje odczyty w pamięci skanera. Dostępne są trzy warianty:' },
        { type: 'list', items: [
          '**Automatic Batch Mode** — zapisuje odczyty tylko wtedy, gdy skaner jest poza zasięgiem, i automatycznie przesyła je do bazy po powrocie w zasięg;',
          '**Inventory Batch Mode** — zapisuje odczyty niezależnie od zasięgu; dane przesyłasz, wkładając skaner do bazy lub skanując kod **Transmit Inventory Records**, po czym pamięć jest czyszczona;',
          '**Persistent Batch Mode** — jak tryb inwentaryzacyjny, ale po przesłaniu dane pozostają w pamięci skanera (czyścisz je kodem **Clear All Codes**).',
        ] },
        { type: 'p', text: 'Dane wsadowe można przechowywać w pamięci Flash (domyślnie — zachowywane po wyłączeniu skanera) lub RAM. Gdy bufor się zapełni, kolejne odczyty wywołują sygnał błędu, dopóki danych nie prześlesz do bazy. Tryb wsadowy może też podawać liczbę powtórzeń tego samego kodu (Batch Mode Quantity), zamiast wielokrotnie powtarzać te same dane.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie',
      blocks: [
        { type: 'p', text: 'Skaner ma celownik rzutujący **jasną zieloną wiązkę celującą**, która odpowiada poziomemu polu widzenia. Nakieruj wiązkę na środek kodu, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu. Skaner można obracać i ustawiać pod dowolnym kątem; ważne, by cały kod mieścił się w polu widzenia.' },
        { type: 'p', text: 'Na odległość odczytu wpływa wielkość i jakość kodu — większe i dobrze wydrukowane kody czyta się z dalszej odległości. Gdy kody znajdują się blisko siebie, włącz **centrowanie (Presentation Centering)**, aby skaner czytał tylko kod celowo wskazany środkiem wiązki.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny, prezentacyjny i w stojaku',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Manual Trigger (ręczny, spustowy)** — skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu; najlepszy do typowej pracy w dłoni;',
          '**Presentation Mode (prezentacyjny)** — skaner sam wykrywa kod w polu widzenia i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner;',
          '**Streaming Presentation** — podświetlenie pozostaje stale włączone, a skaner czyta każdy kod wprowadzony w pole widzenia; dla poprawnej pracy skaner powinien stać w bazie lub odpowiednim stojaku;',
          '**In-Stand Sensor / Streaming Presentation In-Stand** — skaner po włożeniu do stojaka samoczynnie przechodzi w tryb prezentacyjny, a po wyjęciu wraca do trybu ręcznego.',
        ] },
        { type: 'p', text: 'Tryby prezentacyjne i stojakowe to praca „bez rąk" (hands free). Aby oszczędzać baterię, skaner po okresie bezczynności przechodzi w tryb obniżonego poboru mocy; skaner w bazie podczas ładowania nie przechodzi w ten stan. Po uśpieniu naciśnij spust, by go wybudzić.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodów cyfr i kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod rozpoczynający zapis (Set Custom Defaults), potem wszystkie wybrane ustawienia, a na końcu kod **Save Custom Defaults**. Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Reset the Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne (zeskanuj Remove Custom Defaults, potem Activate Defaults), kasując wszelkie modyfikacje i wyłączając wtyczki.',
        ] },
        { type: 'p', text: 'Uwaga przy zestawie z bazą: zeskanowanie kodu zapisu ustawień własnych lub przywracającego może też rozłączyć skaner i bazę — aby odtworzyć łącze, włóż skaner z powrotem do bazy. Jeśli skaner ma czytać wyłącznie kody danych, a nie kody menu, zabezpiecz go ustawieniami zabezpieczenia kodów menu (Menu Barcode Security).' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Xenon Ultra 1962 obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe. To pełne pokrycie potrzeb handlu i ochrony zdrowia — od kodów na opakowaniach po kody na opaskach pacjentów i opakowaniach leków.' },
        { type: 'p', text: 'Każdą symbologię można **włączyć lub wyłączyć** osobnym kodem konfiguracyjnym. Wyłączenie nieużywanych symbologii ogranicza ryzyko błędnych odczytów i przyspiesza pracę. Dla wybranych kodów dostępne są też dodatkowe opcje, np. weryfikacja sumy kontrolnej czy zakres dozwolonej długości.' },
      ],
    },
    {
      title: 'Prefiks, sufiks i znaki końca (Enter, Tab)',
      blocks: [
        { type: 'p', text: 'Do odczytanych danych skaner może dołączać **prefiks** (na początku) i **sufiks** (na końcu). Najczęściej dodaje się sufiks ze znakiem końca, by host od razu zatwierdzał dane:' },
        { type: 'list', items: [
          '**CR (Enter / karetka)** — przejście do kolejnego pola lub zatwierdzenie, jak naciśnięcie klawisza Enter;',
          '**Tab** — przeskok do następnego pola formularza;',
          'możliwe jest też dodanie pary **CR i LF** (typowe dla interfejsu RS-232).',
        ] },
        { type: 'p', text: 'Sufiks możesz przypisać do **wszystkich symbologii naraz** albo tylko do wybranej. Dostępne są też kody do **usunięcia jednego lub wszystkich** prefiksów i sufiksów.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper, dioda Good Read i wibracja',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza **zielonym błyskiem diody i sygnałem dźwiękowym**, a jeśli tak ustawisz — także **wibracją**. W zestawie bezprzewodowym potwierdzenie oznacza zarazem, że baza lub Access Point odebrały dane — system zapewnia dwukierunkową komunikację. Jeśli skaner nie ma pewności, że dane dotarły, sygnalizuje błąd; należy wtedy sprawdzić, czy host je przyjął. Każdy z elementów sygnalizacji można dostroić kodami:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność, wysokość tonu i długość sygnału;',
          '**Number of Beeps** — liczba sygnałów po poprawnym odczycie oraz przy błędzie;',
          '**LED – Good Read** — zachowanie diody potwierdzającej odczyt;',
          '**Vibrate – Good Read** — potwierdzenie wibracją, przydatne w głośnym otoczeniu (domyślnie wyłączone; długość wibracji 100–2000 ms);',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
        { type: 'p', text: 'Baza ma przycisk **Find My** (wywołanie): naciśnięcie go sprawia, że przypisane skanery zaczynają piszczeć, co ułatwia odnalezienie zgubionego skanera. Sygnał wyłączysz, naciskając spust pisczącego skanera lub przycisk Find My po raz drugi.' },
        { type: 'p', text: 'Poziom naładowania sygnalizuje dioda baterii: **zielona** = 70–100%, **bursztynowa** = 31–69%, **czerwona** = 6–30%, **mrugająca czerwona** = poniżej 5%.' },
      ],
    },
    {
      title: 'Ustawienia Healthcare (wariant medyczny)',
      blocks: [
        { type: 'p', text: 'Wariant Healthcare (model 1962h) ma dedykowane ustawienia poprawiające pracę w placówkach ochrony zdrowia — przede wszystkim **ciche tryby pracy**, które nie zakłócają spokoju pacjentów. Ustawienia te są obsługiwane przez skaner i bazę Healthcare.' },
        { type: 'p', text: 'Najszybciej cisze włączysz kodami łączonymi, które jednym kodem konfigurują skaner i bazę:' },
        { type: 'list', items: [
          '**Silent Mode with Flashing LED** — całkowicie wycisza skaner i bazę (sygnały odczytu, rozruchu i łączenia); poprawny odczyt sygnalizuje 5-krotny błysk diody i celownika (zielony — dobry, czerwony — błędny);',
          '**Silent Mode with Long LED** — jak wyżej, ale po odczycie dioda i celownik świecą światłem ciągłym przez 1 sekundę;',
          '**Nighttime Mode (tryb nocny)** — wycisza bazę i rozruch, a skaner przy odczycie wydaje bardzo cichy sygnał;',
          '**Daytime Mode (tryb dzienny)** — wszystkie dźwięki pozostają włączone, ale na niskiej głośności.',
        ] },
        { type: 'p', text: 'Gdy dźwięki są wyciszone, możesz wzmocnić sygnalizację wzrokową: ustaw **liczbę błysków diody** (1, 5, 10 lub 25), **tempo migania** (wolne, średnie, szybkie) albo **świecenie ciągłe** diody przez 1, 3 lub 5 sekund po odczycie zamiast pojedynczego błysku.' },
        { type: 'p', text: 'Niezależnie od głośności skanowania można też regulować głośność wywołania **Find My** oraz głośność **alarmu poza zasięgiem (Out-of-Range Alarm)** dla bazy i skanera, a także kolor diody łączenia (zielona z dźwiękiem lub czerwona bez dźwięku). Aby przywrócić domyślne dźwięki, użyj kodu Reset the Custom Defaults.' },
      ],
    },
    {
      title: 'Konfiguracja z komputera (EZConfig)',
      blocks: [
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig for Scanning**. Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC (przez bazę): zmianę parametrów, zapis i wczytywanie całych zestawów konfiguracji, a nawet utworzenie pojedynczego kodu zawierającego całą konfigurację, który można rozesłać do innych lokalizacji.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia ze strony producenta, zainstaluj ją na komputerze, podłącz bazę ze skanerem, a następnie otwórz EZConfig i wprowadź ustawienia. To wygodny sposób na powtarzalne wdrożenie tej samej konfiguracji na wielu urządzeniach.' },
      ],
    },
    {
      title: 'Czyszczenie i dezynfekcja okienka oraz obudowy',
      blocks: [
        { type: 'p', text: 'Zabrudzone okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie brudne lub gdy skaner czyta gorzej. Obudowę i okienko skanera oraz bazy przecieraj **miękką ściereczką zwilżoną wodą lub łagodnym roztworem detergentu**. Po użyciu detergentu przetrzyj jeszcze raz ściereczką zwilżoną samą wodą, by usunąć resztki środka.' },
        { type: 'list', items: [
          'nie zanurzaj skanera w płynie czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku — porysują je;',
          'nigdy nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienku — mogą uszkodzić powłokę lub okienko;',
          'przed włożeniem skanera do bazy upewnij się, że styki skanera i bazy są suche — wilgoć na stykach może spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Skaner ma obudowę **odporną na środki dezynfekujące (disinfectant-ready)** w wersji ogólnej (general-purpose) oraz medycznej (healthcare). Do dezynfekcji takiej obudowy stosuj wyłącznie środki dopuszczone w odpowiednim przewodniku czyszczenia obudowy odpornej na dezynfekcję dla swojego wariantu — pozwoli to uniknąć uszkodzenia powłoki przez agresywne preparaty.' },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw — pomaga ponowne nawiązanie łącza przez włożenie skanera do bazy.' },
        { type: 'p', text: 'Gdy skaner nie reaguje lub nie świeci celownik, sprawdź, czy:' },
        { type: 'list', items: [
          'bateria jest naładowana (włóż skaner do bazy i poczekaj na ładowanie) — niski poziom sygnalizuje mrugająca czerwona dioda;',
          'baza jest poprawnie podłączona i zasilona oraz czy skaner jest z nią połączony;',
          'skaner nie znalazł się poza zasięgiem — przy próbie odczytu poza zasięgiem usłyszysz sygnał błędu;',
          'spust działa, a skaner nie jest w trybie obniżonego poboru mocy (naciśnij spust, by go wybudzić).',
        ] },
        { type: 'p', text: 'Gdy skaner słabo czyta kody, sprawdź, czy nie są one rozmazane, porysowane lub z ubytkami oraz czy dana symbologia jest włączona. Gdy kod pojawia się na ekranie hosta, ale trzeba go ręcznie zatwierdzać klawiszem — zaprogramuj odpowiedni **sufiks** (np. CR). Jeśli nie masz pewności, jakie ustawienia są aktywne, przywróć ustawienia fabryczne.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Oprogramowanie układowe (firmware) skanera aktualizuje się z komputera za pomocą narzędzia **EZConfig for Scanning**, które pozwala pobrać i wgrać nową wersję firmware do skanera podłączonego przez bazę. W trakcie aktualizacji nie odłączaj bazy od komputera ani nie wyjmuj skanera.' },
        { type: 'p', text: 'Aktualne oprogramowanie i pełną dokumentację skanera znajdziesz u producenta oraz przez TAKMA.' },
      ],
    },
  ],
}
