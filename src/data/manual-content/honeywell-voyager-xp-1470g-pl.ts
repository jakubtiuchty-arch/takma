import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi przewodowego skanera kodów kreskowych
 * Honeywell Voyager XP 1470g po polsku.
 */
export const honeywellVoyagerXp1470gPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przewodowego skanera Honeywell Voyager XP 1470g po polsku — od podłączenia i wyboru interfejsu, przez celowanie, tryby pracy i konfigurację kodami, po sygnalizację odczytu, konserwację, rozwiązywanie problemów i aktualizacje.',
  sections: [
    {
      title: 'Voyager XP 1470g: czym jest skaner',
      blocks: [
        { type: 'p', text: 'Voyager XP 1470g to **przewodowy, ręczny skaner area-imaging**, czytający kody **1D i 2D** (wersja 1D obsługuje wyłącznie kody liniowe, wersja 2D dodatkowo kody dwuwymiarowe, np. QR i Data Matrix). To uniwersalny skaner klasy handlowej — sprawdza się przy kasach, w sklepach, biurach, na recepcji, w punktach obsługi oraz w lekkich zadaniach magazynowych.' },
        { type: 'p', text: 'Skaner jest fabrycznie zaprogramowany pod najczęstsze ustawienia terminala i komunikacji, więc w typowym zastosowaniu działa od razu po podłączeniu. Jeśli potrzebujesz zmienić ustawienia, robisz to, **skanując kody konfiguracyjne** z instrukcji producenta.' },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze podłączenie skanera',
      blocks: [
        { type: 'p', text: 'Voyager XP 1470g jest urządzeniem przewodowym — pracuje od razu po podłączeniu kablem komunikacyjnym do komputera lub terminala. Podłącz **najpierw kabel do skanera, a następnie do komputera**; po prawidłowym podłączeniu skaner sygnalizuje gotowość dźwiękiem.' },
        { type: 'p', text: 'Po podłączeniu zweryfikuj działanie, skanując dowolny przykładowy kod — skaner powinien odpowiedzieć pojedynczym sygnałem dźwiękowym. Domyślnym interfejsem po podłączeniu kablem USB jest **emulacja klawiatury USB (USB PC Keyboard)**: skaner wpisuje odczytane dane tak, jakby pochodziły z klawiatury, bez instalowania sterowników.' },
      ],
    },
    {
      title: 'Wybór interfejsu: USB, RS-232 i emulacja klawiatury',
      blocks: [
        { type: 'p', text: 'Interfejs ustawia się **zeskanowaniem odpowiedniego kodu konfiguracyjnego** z instrukcji producenta. Najczęściej używane warianty to:' },
        { type: 'list', items: [
          '**USB PC Keyboard (emulacja klawiatury)** — skaner wpisze odczytane dane tak, jak z klawiatury, bez sterowników; to ustawienie domyślne dla połączenia USB;',
          '**USB HID** oraz **USB Serial** — tryby USB dla aplikacji oczekujących danych w tych standardach;',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy; kod ustawiający ten interfejs konfiguruje też domyślnie **115 200 bodów, 8 bitów danych, brak parzystości, 1 bit stopu**, dodaje znaki końca CR i LF oraz przełącza skaner w tryb spustowy;',
          '**Keyboard Wedge** — skaner wpięty między klawiaturę a komputer, podający dane jak klawiatura PC (domyślnie układ amerykański, z dodawanym znakiem końca CR).',
        ] },
        { type: 'p', text: 'Przy interfejsie RS-232 możesz osobno dopasować parametry transmisji: **prędkość (baud rate), liczbę bitów danych, bity stopu i parzystość, handshake oraz limity czasu (timeout)**. Wszystkie te wartości zmienia się odpowiednimi kodami konfiguracyjnymi. Skaner obsługuje również interfejs RS-485 do terminali POS firmy IBM.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie',
      blocks: [
        { type: 'p', text: 'Skaner rzutuje **jasny, czerwony punkt celowniczy**, który odpowiada poziomemu polu widzenia. Wyśrodkuj punkt na kodzie (może być on przesunięty w dowolnym kierunku — wystarczy, że obejmuje kod), naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu.' },
        { type: 'p', text: 'Punkt celowniczy jest mniejszy, gdy skaner jest bliżej kodu, i większy, gdy jest dalej. Kody o drobnych elementach (mała wartość mil) czytaj z bliska, a kody o większych elementach — z nieco większej odległości. Dobierz odległość, trzymając skaner w wygodnym dystansie od kodu.' },
        { type: 'p', text: 'Jeśli kod jest silnie odblaskowy (np. zalaminowany), pochyl go o **15–18°**, aby uniknąć niepożądanych odbić utrudniających odczyt.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny, prezentacyjny i ciągły',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Ręczny (spustowy)** — ustawienie domyślne; skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu. Najlepszy do typowej pracy w dłoni;',
          '**Prezentacyjny (w stojaku)** — skaner wykrywa obecność kodu w polu widzenia za pomocą światła otoczenia i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner. Wymaga odpowiedniego poziomu oświetlenia pomieszczenia;',
          '**Triggered Presentation** — odmiana trybu prezentacyjnego, w której obecność obiektu wykrywana jest światłem (domyślnie światłem otoczenia i podświetleniem skanera);',
          '**Serial Trigger** — wyzwalanie odczytu komendą z hosta zamiast spustu; w tym trybie można też ustawić limit czasu (Read Time-Out, domyślnie 30 000 ms), po którym skaner się wyłącza.',
        ] },
        { type: 'p', text: 'Funkcja **In-Stand Sensor (czujnik stojaka)** wykrywa wyjęcie skanera ze stojaka: po włożeniu do stojaka skaner przechodzi w tryb prezentacyjny, a po wyjęciu — w tryb spustowy (domyślnie włączona). W trybach bezdotykowych naciśnięcie spustu chwilowo przełącza skaner w tryb ręczny; po upływie czasu **Hands Free Time-Out** (domyślnie 5 000 ms) skaner wraca do trybu bezdotykowego.' },
        { type: 'p', text: 'Gdy kody leżą blisko siebie, włącz **Presentation Centering** — zawęża pole odczytu tak, by skaner czytał wyłącznie kod w wyznaczonym oknie, a nie sąsiedni. Odpowiednikiem dla pracy w dłoni jest funkcja **Centering**.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod „Set Custom Defaults", potem wszystkie wybrane ustawienia, a na końcu „Save Custom Defaults". Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz, zmieniając pojedyncze opcje bez utraty pozostałych.' },
        { type: 'p', text: 'Do przywracania ustawień służą:' },
        { type: 'list', items: [
          '**Activate Custom Defaults** — przywraca zapisane ustawienia własne; zalecany dla większości użytkowników. Jeśli nie zapisano ustawień własnych, przywraca ustawienia fabryczne;',
          '**Remove Custom Defaults + Activate Defaults** — kasuje ustawienia własne i przywraca pełne ustawienia fabryczne, usuwając wszelkie modyfikacje.',
        ] },
        { type: 'p', text: 'Jeśli zależy Ci, by ograniczyć możliwość zmiany konfiguracji, dostępne są ustawienia **Menu Barcode Security** zabezpieczające skaner przed przypadkowym przeprogramowaniem kodami menu.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Voyager XP 1470g obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 39, Code 128, EAN/UPC, Interleaved 2 of 5, GS1-128), a w wersji 2D także kody dwuwymiarowe (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
        { type: 'p', text: 'Każdą symbologię można **włączyć lub wyłączyć** osobnym kodem konfiguracyjnym. Wyłączenie nieużywanych symbologii ogranicza ryzyko błędnych odczytów i przyspiesza pracę. Dla wybranych kodów dostępne są dodatkowe opcje, np. weryfikacja sumy kontrolnej czy zakres dozwolonej długości.' },
      ],
    },
    {
      title: 'Prefiks, sufiks i znaki końca (Enter, Tab)',
      blocks: [
        { type: 'p', text: 'Do odczytanych danych skaner może dołączać **prefiks** (na początku) i **sufiks** (na końcu), tworząc tzw. ciąg komunikatu. Domyślnie prefiks i sufiks są puste; najczęściej dodaje się sufiks ze znakiem końca, by host od razu zatwierdzał dane:' },
        { type: 'list', items: [
          '**CR (Enter / karetka)** — przejście do kolejnego pola lub zatwierdzenie, jak naciśnięcie klawisza Enter;',
          '**Tab** — przeskok do następnego pola formularza;',
          'możliwe jest też dodanie pary **CR i LF** (typowe dla interfejsu RS-232).',
        ] },
        { type: 'p', text: 'Prefiks lub sufiks można przypisać do **wszystkich symbologii naraz** (kod „99") albo tylko do wybranej — wówczas posługujesz się dwucyfrową wartością szesnastkową danej symbologii. Dostępny jest też wygodny kod **Add CR Suffix — All Symbologies**, który kasuje bieżące sufiksy i ustawia znak końca CR dla wszystkich symbologii. Pojedyncze lub wszystkie prefiksy i sufiksy można też usunąć osobnymi kodami.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper i dioda Good Read',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza sygnałem dźwiękowym i diodą. Każdy element można dostroić kodami konfiguracyjnymi:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume – Good Read** — głośność sygnału (Low, Medium, High, Off; domyślnie High);',
          '**Beeper Pitch – Good Read** — wysokość tonu sygnału (domyślnie Medium);',
          '**Number of Beeps – Good Read / Error** — liczba sygnałów i błysków diody po poprawnym odczycie oraz przy błędzie (1–9, domyślnie 1; dźwięk i dioda są zsynchronizowane);',
          '**Good Read Delay** — minimalny odstęp przed odczytem kolejnego kodu (domyślnie brak opóźnienia), zapobiegający podwójnemu skanowaniu; dostępne wartości od krótkiego (500 ms) po długie (1 500 ms) lub własne.',
        ] },
      ],
    },
    {
      title: 'Odczyt z ekranów telefonów i kodów słabej jakości',
      blocks: [
        { type: 'p', text: 'Do odczytu kodów z ekranów telefonów i innych wyświetlaczy LED służy tryb **Mobile Phone Read Mode** — skaner zostaje wtedy zoptymalizowany pod ekrany, choć skanowanie kodów drukowanych może być nieco wolniejsze. Tryb wyłączysz, skanując kod trybu ręcznego (Manual Trigger Mode).' },
        { type: 'p', text: 'Dla kodów uszkodzonych lub słabo wydrukowanych dostępne są dedykowane ustawienia, domyślnie wyłączone:' },
        { type: 'list', items: [
          '**Poor Quality 1D Reading** — poprawia odczyt zniszczonych kodów liniowych (kosztem nieco wolniejszej reakcji na kody dobrej jakości; nie wpływa na kody 2D);',
          '**Poor Quality PDF Reading** — poprawia odczyt uszkodzonych kodów PDF, łącząc informacje z wielu obrazów (nie wpływa na kody 1D).',
        ] },
        { type: 'p', text: 'Włączaj te tryby tylko wtedy, gdy faktycznie czytasz takie kody — domyślne ustawienia przyspieszają odczyt typowych kodów drukowanych.' },
      ],
    },
    {
      title: 'Konfiguracja z komputera (EZConfig)',
      blocks: [
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig for Scanning**. Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC, w tym zmianę parametrów, tworzenie i drukowanie kodów programujących oraz zapis i wczytywanie całych zestawów ustawień.' },
        { type: 'p', text: 'Zapisaną konfigurację można wysłać e-mailem lub zamienić na pojedynczy kod kreskowy zawierający wszystkie ustawienia — wystarczy, że użytkownik w innej lokalizacji go zeskanuje, by wczytać tę samą konfigurację. To wygodny sposób na powtarzalne wdrożenie identycznych ustawień na wielu urządzeniach.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia ze strony producenta, zainstaluj ją na komputerze, podłącz skaner, a następnie otwórz EZConfig i wprowadź ustawienia.' },
      ],
    },
    {
      title: 'Czyszczenie okienka i obudowy',
      blocks: [
        { type: 'p', text: 'Skaner nie wymaga szczególnej konserwacji, ale zabrudzone okienko pogarsza odczyt — czyść je, gdy jest widocznie brudne lub gdy skaner czyta gorzej.' },
        { type: 'list', items: [
          'nie zanurzaj skanera w wodzie ani w roztworze czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku — porysują je;',
          'nigdy nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienku — mogą uszkodzić powłokę lub okienko;',
          'przed podłączeniem skanera do akcesoriów ładujących lub innych urządzeń upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Okresowo sprawdzaj też kabel i wtyk pod kątem zużycia lub uszkodzeń — mocno zużyty kabel albo uszkodzone złącze mogą zakłócać pracę skanera. Kabel jest wymienny w terenie; zamów zamiennik u producenta lub autoryzowanego dystrybutora.' },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw.' },
        { type: 'p', text: 'Gdy celownik się nie świeci, sprawdź, czy:' },
        { type: 'list', items: [
          'kabel jest poprawnie podłączony;',
          'host ma włączone zasilanie (gdy nie korzystasz z zasilania zewnętrznego);',
          'spust działa.',
        ] },
        { type: 'p', text: 'Gdy skaner słabo czyta kody, sprawdź, czy kody nie są rozmazane, porysowane ani z ubytkami, czy nie pokrywa ich szron lub krople wody oraz czy dana symbologia jest w skanerze włączona.' },
        { type: 'p', text: 'Gdy kod pojawia się na ekranie hosta, ale trzeba go ręcznie zatwierdzić klawiszem (Enter lub Tab) — zaprogramuj odpowiedni **sufiks** (np. CR), aby skaner sam dodawał ten znak. Jeśli nie masz pewności, jakie ustawienia są aktywne, przywróć **ustawienia fabryczne**.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Oprogramowanie układowe (firmware) skanera aktualizuje się z komputera za pomocą narzędzia **EZConfig for Scanning**, które pozwala pobrać i wgrać nową wersję do podłączonego urządzenia. W trakcie aktualizacji nie odłączaj skanera od komputera.' },
        { type: 'p', text: 'Aktualne oprogramowanie i pełną dokumentację skanera znajdziesz u producenta oraz przez TAKMA.' },
      ],
    },
  ],
}
