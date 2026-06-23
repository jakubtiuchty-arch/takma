import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi przewodowego skanera kodów kreskowych
 * Honeywell Xenon Ultra 1960 (1960g) po polsku.
 */
export const honeywellXenonUltra1960Pl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze przewodowego, uniwersalnego skanera ręcznego Honeywell Xenon Ultra 1960g po polsku — od podłączenia i wyboru interfejsu, przez celowanie, tryby pracy, konfigurację kodami i ustawienia healthcare, po konserwację, rozwiązywanie problemów i aktualizacje.',
  sections: [
    {
      title: 'Xenon Ultra 1960g: czym jest i do czego służy',
      blocks: [
        { type: 'p', text: 'Xenon Ultra 1960g to **przewodowy, ręczny skaner area-imaging** czytający kody **1D i 2D**. To uniwersalne urządzenie klasy premium do handlu (retail) i ochrony zdrowia (healthcare) — sprawdza się na kasach, w aptekach, szpitalach, recepcjach i lekkich magazynach. Łączy szybki odczyt kodów liniowych i dwuwymiarowych z wygodą pracy w dłoni i na stojaku.' },
        { type: 'p', text: 'Model 1960g jest urządzeniem **przewodowym** — pracuje od razu po podłączeniu kablem do komputera lub terminala, nie ma baterii, ładowania ani łączności bezprzewodowej. Skaner jest fabrycznie zaprogramowany pod najczęstsze ustawienia terminala i komunikacji; jeśli trzeba je zmienić, robi się to przez zeskanowanie odpowiednich kodów konfiguracyjnych.' },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze podłączenie skanera',
      blocks: [
        { type: 'p', text: 'Podłącz kabel komunikacyjny najpierw do skanera, a potem do komputera. Wtyk wchodzi w gniazdo tylko w jednej pozycji i zatrzaskuje się elastycznym zaczepem. Po prawidłowym połączeniu skaner wyda sygnał dźwiękowy.' },
        { type: 'p', text: 'Najprostszym wariantem jest podłączenie kablem **USB**. Skaner domyślnie pracuje wtedy jako **emulacja klawiatury USB (USB PC Keyboard)** i nie wymaga sterowników. Jeśli to ustawienie jest wystarczające, możesz od razu zacząć skanować — sprawdź działanie, czytając dowolny przykładowy kod.' },
        { type: 'p', text: 'W razie potrzeby zasilacz zamawia się osobno; przy typowym połączeniu USB skaner zasila się z portu komputera.' },
      ],
    },
    {
      title: 'Wybór interfejsu: USB, RS-232 i emulacja klawiatury',
      blocks: [
        { type: 'p', text: 'Interfejs ustawia się **zeskanowaniem odpowiedniego kodu konfiguracyjnego**. Najczęściej używane warianty to:' },
        { type: 'list', items: [
          '**USB PC Keyboard (emulacja klawiatury)** — skaner wpisuje odczytane dane tak, jakby były wpisane z klawiatury; nie wymaga sterowników. To ustawienie domyślne dla połączenia USB;',
          '**USB Serial (wirtualny port COM)** — skaner zgłasza się jako port szeregowy, co jest wygodne dla aplikacji odbierających dane z COM;',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez fizyczny port szeregowy; ten interfejs ustawia domyślnie **115 200 bodów, 8 bitów danych, brak parzystości i 1 bit stopu** oraz dodaje znak końca;',
          '**Keyboard Wedge** — skaner wpięty między klawiaturę a komputer, podający dane jak klawiatura PC (przed podłączeniem kabla klawiatury wyłącz zasilanie terminala).',
        ] },
        { type: 'p', text: 'Przy interfejsie RS-232 możesz osobno dopasować parametry transmisji: **prędkość (baud rate), liczbę bitów danych, bity stopu i parzystość, handshake oraz limity czasu (timeout)**. Wszystkie te wartości zmienia się odpowiednimi kodami konfiguracyjnymi.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie',
      blocks: [
        { type: 'p', text: 'Skaner rzutuje **jasną, zieloną wiązkę celowniczą**, która odpowiada poziomemu polu widzenia. Nakieruj wiązkę na środek kodu, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu. Wiązki nie trzeba ustawiać idealnie poziomo; kod odczyta się przy dowolnym jej obrocie.' },
        { type: 'p', text: 'Na jakość odczytu wpływa wielkość i jakość kodu — większe i czyste kody czyta się z większej odległości. Jeśli kody znajdują się blisko siebie, użyteczne jest **centrowanie (Centering)** — zawęża pole odczytu tak, by skaner czytał tylko kod celowo wskazany wiązką, a nie sąsiedni.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny, prezentacyjny i ciągły',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Ręczny (spustowy)** — ustawienie domyślne; skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu. Dostępne są dwa warianty: **Normal** (dobra prędkość i największy zasięg roboczy) oraz **Enhanced** (najwyższa prędkość przy nieco krótszym zasięgu);',
          '**Prezentacyjny (w stojaku)** — skaner sam wykrywa obecność kodu w polu widzenia i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner;',
          '**Streaming Presentation** — odmiana trybu prezentacyjnego z ciągłym skanowaniem, gotowa od razu do odczytu;',
          '**Serial Trigger** — wyzwalanie odczytu komendą z hosta zamiast spustu (wymaga interfejsu szeregowego lub odpowiedniego trybu USB).',
        ] },
        { type: 'p', text: 'Dzięki **czujnikowi stojaka (In-Stand Sensor)** skaner może automatycznie przełączać się w tryb prezentacyjny po odłożeniu na stojak i wracać do trybu ręcznego po podniesieniu. Przydatny jest też **Trigger Toggle** — kilkukrotne szybkie naciśnięcie spustu przełącza skaner w tryb obrazowania lub centrowania, a po wykonaniu czynności wraca do skanowania.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące**. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save) lub cyfr z tablicy programującej.' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod „Set Custom Defaults", potem wszystkie wybrane ustawienia, a na końcu „Save Custom Defaults". Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Activate Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne, kasując wszelkie modyfikacje.',
        ] },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Xenon Ultra 1960g obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 39, Code 128, EAN/UPC, Interleaved 2 of 5, GS1 DataBar), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
        { type: 'p', text: 'Każdą symbologię można **włączyć lub wyłączyć** osobnym kodem konfiguracyjnym. Wyłączenie nieużywanych symbologii ogranicza ryzyko błędnych odczytów i przyspiesza pracę. Dla wybranych kodów dostępne są też dodatkowe opcje, np. weryfikacja sumy kontrolnej czy zakres dozwolonej długości komunikatu.' },
      ],
    },
    {
      title: 'Prefiks, sufiks i znaki końca (Enter, Tab)',
      blocks: [
        { type: 'p', text: 'Do odczytanych danych skaner może dołączać **prefiks** (na początku) i **sufiks** (na końcu). Najczęściej dodaje się sufiks ze znakiem końca, by host od razu zatwierdzał dane:' },
        { type: 'list', items: [
          '**CR (Enter / karetka)** — zatwierdzenie lub przejście do kolejnego pola, jak naciśnięcie klawisza Enter; sufiks CR jest dodawany domyślnie przy połączeniu USB i Keyboard Wedge;',
          '**Tab** — przeskok do następnego pola formularza;',
          'możliwe jest też dodanie pary **CR i LF** (typowej dla interfejsu RS-232).',
        ] },
        { type: 'p', text: 'Sufiks możesz przypisać do **wszystkich symbologii naraz** albo tylko do wybranej. Dostępne są też kody do **usunięcia jednego lub wszystkich** prefiksów i sufiksów.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper i dioda Good Read',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza sygnałem dźwiękowym i diodą. Każdy z tych elementów można dostroić kodami konfiguracyjnymi:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność (Low, Medium, High, Off), wysokość tonu i długość sygnału;',
          '**Number of Beeps – Good Read** — liczba sygnałów po poprawnym odczycie (1–9); tyle samo razy mignie też dioda;',
          '**LED – Good Read** — dioda potwierdzająca odczyt, którą można włączyć lub wyłączyć;',
          '**Trigger Click** — opcjonalny słyszalny klik przy każdym naciśnięciu spustu;',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
      ],
    },
    {
      title: 'Ustawienia healthcare i tryby ciche',
      blocks: [
        { type: 'p', text: 'W placówkach ochrony zdrowia skaner powinien działać dyskretnie, by nie zakłócać spokoju pacjentów. Wariant healthcare ma obniżoną domyślną głośność beepera i zestaw **trybów cichych**, które ustawia się pojedynczym kodem łączonym (combination code):' },
        { type: 'list', items: [
          '**Silent Mode with Flashing LED** — całkowite wyciszenie wszystkich dźwięków; po odczycie dioda i celownik migają pięć razy (zielono = odczyt poprawny, czerwono = błędny);',
          '**Silent Mode with Long LED** — pełne wyciszenie z potwierdzeniem w postaci diody świecącej ciągle przez 1 sekundę po odczycie;',
          '**Nighttime Mode (tryb nocny)** — wycisza pozostałe dźwięki, a poprawny odczyt potwierdza bardzo cichym sygnałem;',
          '**Daytime Mode (tryb dzienny)** — pozostawia wszystkie dźwięki włączone, ale na niskiej głośności.',
        ] },
        { type: 'p', text: 'Gdy beeper jest wyciszony, można dodatkowo ustawić **liczbę i sposób migania diody** jako wizualne potwierdzenie odczytu. Aby wrócić do domyślnej sygnalizacji dźwiękowej, przywróć ustawienia.' },
      ],
    },
    {
      title: 'Obudowa odporna na dezynfekcję (DRH)',
      blocks: [
        { type: 'p', text: 'Skaner ma zewnętrzną obudowę z tworzywa odpornego na agresywne środki czyszczące — w wariancie **odpornym na dezynfekcję (DRH, Disinfectant-Ready Housing)** wytrzymuje wielokrotne przecieranie preparatami dezynfekującymi, co jest kluczowe w szpitalach, przychodniach i aptekach.' },
        { type: 'p', text: 'Do takich modeli stosuj wyłącznie środki dopuszczone do dezynfekcji obudów DRH i trzymaj się zaleceń producenta dotyczących doboru preparatów oraz częstotliwości czyszczenia — pozwala to zachować odporność powłoki i przejrzystość okienka przez cały okres eksploatacji.' },
      ],
    },
    {
      title: 'Konfiguracja z komputera (EZConfig)',
      blocks: [
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig for Scanning**. Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC, w tym podgląd odczytanych danych w oknie testowym oraz zapis i wczytywanie całych zestawów parametrów.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia ze strony producenta, zainstaluj ją na komputerze, podłącz skaner i otwórz program, a następnie wprowadź ustawienia. To wygodny sposób na powtarzalne wdrożenie tej samej konfiguracji na wielu urządzeniach.' },
      ],
    },
    {
      title: 'Czyszczenie i dezynfekcja okienka oraz obudowy',
      blocks: [
        { type: 'p', text: 'Zabrudzone okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie brudne lub gdy skaner czyta gorzej. Obudowę i okienko przecieraj **miękką ściereczką zwilżoną wodą lub łagodnym roztworem detergentu**. Po użyciu detergentu przetrzyj jeszcze raz ściereczką zwilżoną samą wodą, by usunąć resztki środka.' },
        { type: 'list', items: [
          'nie zanurzaj skanera w wodzie ani w płynie czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku — porysują je;',
          'nigdy nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienku — mogą uszkodzić powłokę lub okienko;',
          'przed podłączeniem skanera do innych urządzeń upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
      ],
    },
    {
      title: 'Wymiana kabla',
      blocks: [
        { type: 'p', text: 'Standardowy kabel jest podłączony do skanera złączem modułowym i jest przystosowany do wymiany w terenie. Regularnie sprawdzaj kabel i wtyk pod kątem zużycia — uszkodzony przewód lub złącze może zakłócać pracę skanera.' },
        { type: 'p', text: 'Aby wymienić kabel: wyłącz zasilanie hosta, odłącz kabel od terminala, a następnie odblokuj złącze. Na spodzie rękojeści znajduje się mały otwór zwalniający (cable release) — wsuń w niego wyprostowany koniec spinacza i naciśnij, by zwolnić zaczep, po czym wyciągnij wtyk. Nowy kabel wciśnij mocno aż do zatrzaśnięcia; wchodzi tylko w jednej pozycji. Przy zamawianiu podawaj numer części oryginalnego kabla.' },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw.' },
        { type: 'p', text: 'Gdy celownik się nie świeci, sprawdź, czy:' },
        { type: 'list', items: [
          'kabel jest poprawnie i mocno podłączony;',
          'host ma włączone zasilanie (gdy nie korzystasz z zasilania zewnętrznego);',
          'spust działa.',
        ] },
        { type: 'p', text: 'Gdy skaner słabo czyta kody, sprawdź, czy kody nie są rozmazane, porysowane lub z ubytkami, czy nie pokrywa ich szron lub woda oraz czy dana symbologia jest w skanerze włączona.' },
        { type: 'p', text: 'Gdy kod pojawia się na ekranie hosta, ale trzeba go ręcznie zatwierdzić klawiszem (Enter lub Tab), zaprogramuj odpowiedni **sufiks** (np. CR), aby skaner sam dodawał ten znak. Jeśli nie masz pewności, jakie ustawienia są aktywne, przywróć **ustawienia fabryczne**.' },
      ],
    },
    {
      title: 'Naprawy i aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Oprogramowanie układowe (firmware) skanera aktualizuje się z komputera za pomocą narzędzia **EZConfig**, które pozwala pobrać i wgrać nową wersję do podłączonego urządzenia. W trakcie aktualizacji nie odłączaj skanera od komputera.' },
        { type: 'p', text: 'Napraw i modyfikacji sprzętowych nie wykonuje się samodzielnie — powinien je przeprowadzać wyłącznie autoryzowany serwis. Aktualne oprogramowanie i pełną dokumentację skanera znajdziesz u producenta oraz przez TAKMA.' },
      ],
    },
  ],
}
