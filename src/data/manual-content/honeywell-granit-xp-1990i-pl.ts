import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi przewodowego skanera kodów kreskowych
 * Honeywell Granit XP 1990i (warianty zasięgu SR i XR) po polsku.
 */
export const granitXp1990iPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przewodowego, przemysłowego skanera Honeywell Granit XP 1990i (warianty zasięgu SR i XR) po polsku — od podłączenia i wyboru interfejsu, przez celowanie, tryby pracy i konfigurację kodami, po konserwację, rozwiązywanie problemów i aktualizacje.',
  sections: [
    {
      title: 'Granit XP 1990i: czym jest i czym różnią się warianty SR i XR',
      blocks: [
        { type: 'p', text: 'Granit XP 1990i to **przewodowy, ręczny skaner przemysłowy** typu area-imaging, czytający kody **1D i 2D**. Jest zaprojektowany do najtrudniejszych warunków: znosi upadki i pracę w skrajnych temperaturach, ma szczelność **IP65/IP67** i bardzo dobrze czyta nawet uszkodzone oraz niskiej jakości kody.' },
        { type: 'p', text: 'Skaner występuje w dwóch wariantach zasięgu, które różnią się przede wszystkim odległością odczytu:' },
        { type: 'list', items: [
          '**SR (Standard Range)** — wariant do typowego skanowania z bliska (near-field) kodów 1D i 2D; najlepszy, gdy liczy się szybkość i krótki dystans roboczy;',
          '**XR (Extended Range)** — poza odczytem z bliska oferuje rozszerzony zasięg, sięgając kodów bardziej oddalonych (np. na regałach): czyta kody UPC do około **1,5 m**, a duże kody Code 39 (100 mil) nawet do około **10 m**.',
        ] },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze podłączenie skanera',
      blocks: [
        { type: 'p', text: 'Granit XP 1990i jest urządzeniem przewodowym — pracuje od razu po podłączeniu kablem, nie ma baterii ani łączności bezprzewodowej. Przy montażu kabla **dociśnij wtyk mocno do skanera**, nasuń płytkę blokującą na podstawę złącza i dokręć śrubę. Poprawny montaż zapewnia szczelność **IP65/IP67**.' },
        { type: 'p', text: 'Skaner jest fabrycznie zaprogramowany pod najczęstsze ustawienia terminala i komunikacji. Domyślny interfejs po podłączeniu kablem USB to **emulacja klawiatury USB (USB PC Keyboard)**, a do danych dodawany jest znak końca **CR (Enter)**. Jeśli te ustawienia są wystarczające, możesz od razu zacząć skanować.' },
        { type: 'p', text: 'Przy podłączaniu przez port szeregowy najpierw wyłącz zasilanie terminala/komputera, podłącz właściwy kabel do skanera, wepnij złącze do portu szeregowego i dokręć dwie śruby mocujące, a dopiero potem włącz zasilanie. Pamiętaj, że do danego typu hosta potrzebny jest odpowiedni kabel.' },
      ],
    },
    {
      title: 'Wybór interfejsu: USB, RS-232 i emulacja klawiatury',
      blocks: [
        { type: 'p', text: 'Interfejs ustawia się **zeskanowaniem odpowiedniego kodu konfiguracyjnego** z instrukcji producenta (Plug and Play). Najczęściej używane warianty to:' },
        { type: 'list', items: [
          '**USB PC Keyboard (emulacja klawiatury)** — skaner wpisuje odczytane dane tak, jakby były wpisane z klawiatury; nie wymaga sterowników. To ustawienie domyślne dla połączenia USB i dodaje sufiks CR;',
          '**USB HID** — tryb urządzenia HID dla aplikacji oczekujących danych w tym standardzie;',
          '**USB Serial** — emulacja portu szeregowego przez USB, przydatna przy aplikacjach pracujących na porcie COM;',
          '**RS-232 (port szeregowy)** — do połączenia z hostem przez fizyczny port szeregowy; kod ustawiający ten interfejs konfiguruje domyślnie prędkość transmisji (115 200 bps), format danych (8 bitów, brak parzystości, 1 bit stopu), dodaje znaki końca CR i LF oraz przełącza skaner w tryb spustowy;',
          '**Keyboard Wedge** — skaner wpięty między klawiaturę a komputer, podający dane jak klawiatura PC (domyślnie dodaje sufiks CR).',
        ] },
        { type: 'p', text: 'Przy interfejsie RS-232 możesz osobno dopasować parametry transmisji: **prędkość (baud rate), liczbę bitów danych, bity stopu i parzystość, handshake oraz limity czasu (timeout)**. Wszystkie te wartości zmienia się odpowiednimi kodami konfiguracyjnymi.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie (różnica SR vs XR)',
      blocks: [
        { type: 'p', text: 'Wariant **SR** rzutuje jasny, czerwony znak celowniczy (punkt/krzyż) wraz ze wskaźnikami narożnymi, które odpowiadają polu widzenia skanera. Wyśrodkuj znak na kodzie tak, by cały kod mieścił się między wskaźnikami narożnymi, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu.' },
        { type: 'p', text: 'Wariant **XR** rzutuje jasny, czerwony punkt odpowiadający środkowi pola widzenia. Punkt celowniczy ustaw centralnie na kodzie. Skaner można dowolnie obracać i pochylać — odczyt działa w każdym ułożeniu.' },
        { type: 'p', text: 'Dobierz odległość do wariantu skanera. Model **SR** najlepiej sprawdza się przy odczycie z bliska; gdy musisz czytać z większego dystansu (np. z regału, z wyciągniętej ręki), sięgnij po wariant **XR**. Pamiętaj, że na jakość odczytu wpływa wielkość i jakość kodu — większe kody czyta się z większej odległości.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny, prezentacyjny i ciągły',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Ręczny (spustowy)** — ustawienie domyślne; skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu. Dostępne są dwa warianty: **Normal** (dobra prędkość i największy zasięg roboczy) oraz **Enhanced** (najwyższa prędkość kosztem nieco mniejszego zasięgu);',
          '**Prezentacyjny** — skaner sam wykrywa obecność kodu w polu widzenia, korzystając ze światła otoczenia i podświetlenia, i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner. Tryb wymaga wystarczającego oświetlenia w pomieszczeniu;',
          '**Streaming Presentation** — odmiana trybu prezentacyjnego, w której podświetlenie jest włączone cały czas i nieustannie szuka kodów; również w wariantach Normal i Enhanced;',
          '**Serial Trigger (wyzwalanie szeregowe)** — odczyt uruchamiany komendą z hosta zamiast spustu; wymaga trybu szeregowego (RS-232 lub USB Serial).',
        ] },
        { type: 'p', text: 'Tryby prezentacyjne to tzw. praca bez użycia rąk (hands free). Jeśli w takim trybie naciśniesz spust, skaner tymczasowo przejdzie w tryb ręczny, a po upływie czasu **Hands Free Time-Out** (domyślnie 5 s bez kolejnego naciśnięcia) wróci do trybu prezentacyjnego.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save) z tablicy programującej.' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod „Set Custom Defaults", potem wszystkie wybrane ustawienia, a na końcu „Save Custom Defaults". Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień fabrycznych zeskanuj kolejno **„Remove Custom Defaults"**, a następnie **„Activate Defaults"** — to kasuje wszystkie modyfikacje i przywraca pełne ustawienia fabryczne (a także wyłącza dodatki/pluginy).' },
        { type: 'p', text: 'Jeśli zależy Ci, by skaner nie był przypadkowo przeprogramowany, dostępne są ustawienia **Menu Barcode Security**, które ograniczają możliwość skanowania kodów menu.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Granit XP 1990i obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
        { type: 'p', text: 'Każdą symbologię można **włączyć lub wyłączyć** osobnym kodem konfiguracyjnym. Wyłączenie nieużywanych symbologii ogranicza ryzyko błędnych odczytów i przyspiesza pracę. Dla wybranych kodów dostępne są też dodatkowe opcje, np. weryfikacja sumy kontrolnej czy zakres dozwolonej długości.' },
      ],
    },
    {
      title: 'Prefiks, sufiks i znaki końca (Enter, Tab)',
      blocks: [
        { type: 'p', text: 'Do odczytanych danych skaner może dołączać **prefiks** (na początku) i **sufiks** (na końcu). Najczęściej dodaje się sufiks ze znakiem końca, by host od razu zatwierdzał dane:' },
        { type: 'list', items: [
          '**CR (Enter / karetka)** — zatwierdzenie lub przejście do kolejnego pola, jak naciśnięcie klawisza Enter;',
          '**Tab** — przeskok do następnego pola formularza;',
          'możliwe jest też dodanie pary **CR i LF** (typowe dla interfejsu RS-232).',
        ] },
        { type: 'p', text: 'Sufiks możesz przypisać do **wszystkich symbologii naraz** albo tylko do wybranej. Dostępne są też kody do **usunięcia jednego lub wszystkich** prefiksów i sufiksów. Producent podaje gotowe sekwencje, np. dodanie sufiksu Tab lub CR do wszystkich symbologii.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper, dioda Good Read i wibracja',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza sygnałem dźwiękowym, zieloną diodą oraz (jeśli włączona) wibracją. Każdy z tych elementów można dostroić kodami konfiguracyjnymi:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność, wysokość tonu i długość sygnału;',
          '**Number of Beeps – Good Read** — liczba sygnałów po poprawnym odczycie oraz przy błędzie;',
          '**LED – Good Read** — zachowanie zielonej diody potwierdzającej odczyt;',
          '**Vibrate – Good Read** — potwierdzenie wibracją (domyślnie włączone: jedna wibracja po poprawnym odczycie, dłuższa przy nieudanym); przydatne w głośnym otoczeniu, można też ustawić czas trwania wibracji;',
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
        { type: 'p', text: 'Włącz odpowiedni tryb DPM tylko wtedy, gdy faktycznie czytasz takie oznaczenia — pozostawienie ustawienia domyślnego (DPM wyłączone) przyspiesza odczyt typowych kodów drukowanych. Przy precyzyjnym wybieraniu jednego kodu spośród wielu pomaga też tryb **Trigger Mode 11**, w którym naciśnięcie spustu zapala sam celownik, a zwolnienie uruchamia odczyt wskazanego kodu.' },
      ],
    },
    {
      title: 'Konfiguracja z komputera (EZConfig)',
      blocks: [
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig** (EZConfig for Scanning). Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC: zmianę parametrów, podgląd i zapis całych zestawów ustawień, a nawet wygenerowanie pojedynczego kodu zawierającego całą konfigurację, który można rozesłać i wczytać na innych urządzeniach.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia z portalu pobierania producenta, zainstaluj wersję instalacyjną (Setup), podłącz skaner, a następnie otwórz EZConfig i wprowadź ustawienia. To wygodny sposób na powtarzalne wdrożenie tej samej konfiguracji na wielu urządzeniach.' },
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
          'sprawdzaj też kabel i złącze — mocno zużyty kabel lub uszkodzone złącze może zakłócać pracę skanera.',
        ] },
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
