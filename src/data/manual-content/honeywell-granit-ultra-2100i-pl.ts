import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi przewodowego skanera przemysłowego
 * Honeywell Granit Ultra 2100i (warianty SR i XR) po polsku.
 */
export const honeywellGranitUltra2100iPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przewodowego skanera przemysłowego Honeywell Granit Ultra 2100i po polsku — od podłączenia i wyboru interfejsu, przez celowanie, tryby pracy i konfigurację kodami, po konserwację, rozwiązywanie problemów i aktualizacje.',
  sections: [
    {
      title: 'Granit Ultra 2100i: czym jest i czym różnią się warianty SR i XR',
      blocks: [
        { type: 'p', text: 'Granit Ultra 2100i to **przewodowy, ręczny skaner przemysłowy** typu area-imaging, czytający kody **1D i 2D**. Jest zaprojektowany do najtrudniejszych warunków: znosi **upadki z 3 m**, 7500 przewrotów z 1 m, pracę w temperaturze od **-30°C do 50°C** oraz ma szczelność **IP65/IP68**. Wyróżnia się szybkim odczytem nawet uszkodzonych i niskiej jakości kodów.' },
        { type: 'p', text: 'Skaner występuje w dwóch wariantach zasięgu, które różnią się przede wszystkim odległością odczytu:' },
        { type: 'list', items: [
          '**SR (Standard Range)** — optymalny do skanowania z bliska (near-field) kodów 1D i 2D, gdy liczy się duża prędkość i krótki dystans roboczy;',
          '**XR (Expanded/Extended Range)** — czyta z bliska i ze średniej odległości (near i mid-field), co pozwala sięgać po kody bardziej oddalone, np. na wyższych regałach czy z odległości wyciągniętej ręki.',
        ] },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze podłączenie skanera',
      blocks: [
        { type: 'p', text: 'Granit Ultra 2100i jest urządzeniem przewodowym — pracuje od razu po podłączeniu kablem, nie ma baterii ani łączności bezprzewodowej. Przy montażu kabla **dociśnij wtyk mocno do skanera**, nasuń płytkę blokującą na podstawę złącza i dokręć śrubę.' },
        { type: 'p', text: 'Bardzo ważne: na końcu kabla komunikacyjnego musi być założony **czerwony pierścień (O-ring)**. Po włożeniu kabla pierścień powinien zniknąć w gnieździe — to warunek poprawnego montażu i zachowania szczelności **IP65/IP68**.' },
        { type: 'p', text: 'Skaner jest fabrycznie zaprogramowany pod najczęstsze ustawienia terminala i komunikacji. Domyślny interfejs po podłączeniu kablem USB to **emulacja klawiatury USB (USB PC Keyboard)**, a do danych dodawany jest znak końca **CR (Enter)**. Jeśli te ustawienia są wystarczające, możesz od razu zacząć skanować.' },
      ],
    },
    {
      title: 'Wybór interfejsu: USB, RS-232 i emulacja klawiatury',
      blocks: [
        { type: 'p', text: 'Interfejs ustawia się **zeskanowaniem odpowiedniego kodu konfiguracyjnego** z instrukcji producenta (Plug and Play). Najczęściej używane warianty to:' },
        { type: 'list', items: [
          '**USB PC Keyboard (emulacja klawiatury)** — skaner wpisze odczytane dane tak, jakby były wpisane z klawiatury; nie wymaga sterowników. To ustawienie domyślne dla połączenia USB;',
          '**USB HID** — tryb urządzenia HID dla aplikacji oczekujących danych w tym standardzie;',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy; kod ustawiający ten interfejs konfiguruje też domyślnie prędkość transmisji oraz format danych i dodaje znaki końca CR i LF;',
          '**Keyboard Wedge** — skaner wpięty między klawiaturę a komputer, podający dane jak klawiatura PC.',
        ] },
        { type: 'p', text: 'Przy interfejsie RS-232 możesz osobno dopasować parametry transmisji: **prędkość (baud rate), liczbę bitów danych, bity stopu i parzystość, handshake oraz limity czasu (timeout)**. Wszystkie te wartości zmienia się odpowiednimi kodami konfiguracyjnymi.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie (różnica SR vs XR)',
      blocks: [
        { type: 'p', text: 'Skaner ma celownik rzutujący **jasną, zieloną wiązkę celowniczą**, która odpowiada poziomemu polu widzenia. Nakieruj wiązkę na kod, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu.' },
        { type: 'p', text: 'Dobierz odległość do wariantu skanera. Model **SR** najlepiej sprawdza się przy odczycie z bliska; w razie potrzeby czytania z większego dystansu sięgnij po wariant **XR**, który obejmuje też zakres średni. Pamiętaj, że na jakość odczytu wpływa wielkość i jakość kodu — większe kody czyta się z większej odległości.' },
        { type: 'p', text: 'Jeśli kody znajdują się blisko siebie, użyteczne jest **centrowanie (Centering)** — zawęża pole odczytu tak, by skaner czytał tylko kod celowo wskazany wiązką, a nie sąsiedni.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny, prezentacyjny i ciągły',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Ręczny (spustowy)** — ustawienie domyślne; skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu. Najlepszy do typowej pracy w dłoni;',
          '**Prezentacyjny (w stojaku)** — skaner sam wykrywa obecność kodu w polu widzenia i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner;',
          '**Streaming Presentation** — odmiana trybu prezentacyjnego z ciągłym skanowaniem;',
          '**Serial Trigger** — wyzwalanie odczytu komendą z hosta zamiast spustu (wymaga interfejsu szeregowego lub odpowiedniego trybu USB).',
        ] },
        { type: 'p', text: 'W trybie prezentacyjnym wykrywanie kodu domyślnie wykorzystuje światło otoczenia i podświetlenie skanera. Celownik **LED przygasa 30 sekund po odczycie**; można ustawić jego natychmiastowe wygaszenie. Gdy kody leżą blisko siebie, włącz **Presentation Centering**, by skaner czytał tylko kod w wyznaczonym oknie.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod „Set Custom Defaults", potem wszystkie wybrane ustawienia, a na końcu „Save Custom Defaults". Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Activate Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne, kasując wszelkie modyfikacje.',
        ] },
        { type: 'p', text: 'Jeśli zależy Ci, by skaner czytał wyłącznie kody danych, a nie kody menu, dostępne są ustawienia **Menu Barcode Security** zabezpieczające przed przypadkową rekonfiguracją.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Granit Ultra 2100i obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
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
        { type: 'p', text: 'Sufiks możesz przypisać do **wszystkich symbologii naraz** albo tylko do wybranej. Dostępne są też kody do **usunięcia jednego lub wszystkich** prefiksów i sufiksów. Jeśli pracujesz w trybie emulacji klawiatury, dla znaków sterujących ASCII zalecany jest tryb Windows.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper, dioda Good Read i wibracja',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza sygnałem dźwiękowym, diodą oraz wibracją. Każdy z tych elementów można dostroić kodami konfiguracyjnymi:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność, wysokość tonu i długość sygnału;',
          '**Number of Beeps** — liczba sygnałów po poprawnym odczycie oraz przy błędzie;',
          '**LED – Good Read** — zachowanie diody potwierdzającej odczyt;',
          '**Vibrate – Good Read** — potwierdzenie wibracją, przydatne w głośnym otoczeniu;',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
      ],
    },
    {
      title: 'Odczyt trudnych kodów i znakowania DPM',
      blocks: [
        { type: 'p', text: 'Skaner radzi sobie z kodami uszkodzonymi i niskiej jakości, ale jeśli odczyt sprawia trudność, sprawdź najpierw, czy kod nie jest rozmazany, porysowany, z ubytkami albo pokryty szronem lub kroplami wody, oraz czy dana symbologia jest w skanerze włączona.' },
        { type: 'p', text: 'Dla bezpośredniego znakowania części **DPM (Direct Part Marking)** dostępne są dedykowane tryby dekodowania, domyślnie wyłączone:' },
        { type: 'list', items: [
          '**Dotpeen DPM Decoding** — dla kodów wybijanych punktowo (dot-peen);',
          '**Reflective (Etched) DPM Decoding** — dla kodów grawerowanych/trawionych na powierzchniach odbijających światło.',
        ] },
        { type: 'p', text: 'Włącz odpowiedni tryb DPM tylko wtedy, gdy faktycznie czytasz takie oznaczenia — pozostawienie ustawienia domyślnego (DPM wyłączone) przyspiesza odczyt typowych kodów drukowanych.' },
      ],
    },
    {
      title: 'Konfiguracja z komputera (EZConfig)',
      blocks: [
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig**. Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC, w tym podgląd odczytanych danych w oknie testowym oraz zapis i wczytywanie całych zestawów parametrów.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia ze strony producenta, zainstaluj ją na komputerze, podłącz skaner, a następnie otwórz EZConfig i wprowadź ustawienia. To wygodny sposób na powtarzalne wdrożenie tej samej konfiguracji na wielu urządzeniach.' },
      ],
    },
    {
      title: 'Czyszczenie okienka i obudowy',
      blocks: [
        { type: 'p', text: 'Zabrudzone okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie brudne lub gdy skaner czyta gorzej. Obudowę i okienko przecieraj **miękką ściereczką zwilżoną wodą lub łagodnym roztworem detergentu**. Po użyciu detergentu przetrzyj jeszcze raz ściereczką zwilżoną samą wodą, by usunąć resztki środka.' },
        { type: 'list', items: [
          'nie zanurzaj skanera w płynie czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku — porysują je;',
          'nigdy nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienku — mogą uszkodzić powłokę lub okienko;',
          'przed podłączeniem skanera do akcesoriów ładujących lub innych urządzeń upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
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
        { type: 'p', text: 'Gdy kod pojawia się na ekranie hosta, ale trzeba go ręcznie zatwierdzić klawiszem (Enter lub Tab) — zaprogramuj odpowiedni **sufiks** (np. CR), aby skaner sam dodawał ten znak. Jeśli nie masz pewności, jakie ustawienia są aktywne, przywróć **ustawienia fabryczne**.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Oprogramowanie układowe (firmware) skanera aktualizuje się z komputera za pomocą narzędzia **EZConfig**, które pozwala pobrać i wgrać nową wersję firmware do podłączonego urządzenia. W trakcie aktualizacji nie odłączaj skanera od komputera.' },
        { type: 'p', text: 'Aktualne oprogramowanie i pełną dokumentację skanera znajdziesz u producenta oraz przez TAKMA.' },
      ],
    },
  ],
}
