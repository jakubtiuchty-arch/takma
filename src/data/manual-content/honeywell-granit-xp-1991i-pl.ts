import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi bezprzewodowego skanera przemysłowego
 * Honeywell Granit XP 1991i (warianty SR i XR) po polsku.
 */
export const granitXp1991iPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze bezprzewodowego skanera przemysłowego Honeywell Granit XP 1991i (warianty zasięgu SR i XR) po polsku — od pierwszego ładowania i baterii, przez bazę, parowanie Bluetooth i celowanie, po konfigurację kodami, sygnalizację, konserwację i rozwiązywanie problemów.',
  sections: [
    {
      title: 'Granit XP 1991i: czym jest i czym różnią się warianty SR i XR',
      blocks: [
        { type: 'p', text: 'Granit XP 1991i to **bezprzewodowy, ultrawytrzymały skaner ręczny** typu area-imaging, czytający kody **1D i 2D**. Jest przeznaczony do najtrudniejszych warunków magazynowych i przemysłowych. Łączy się ze światem przez **Bluetooth**, zasilany jest **wymienną baterią litowo-jonową** zabudowaną w rękojeści, a dane przekazuje do hosta przez **bazę ładująco-komunikacyjną (cradle)** lub bezpośrednio do urządzenia Bluetooth.' },
        { type: 'p', text: 'Skaner występuje w dwóch wariantach zasięgu, które różnią się przede wszystkim odległością odczytu:' },
        { type: 'list', items: [
          '**SR (Standard Range)** — celownik rzutuje jasny punkt/krzyż wraz ze znacznikami narożnymi odpowiadającymi polu widzenia; optymalny do szybkiego odczytu kodów 1D i 2D z bliska;',
          '**XR (Expanded/Extended Range)** — celownik rzutuje punkt wskazujący środek pola widzenia; zapewnia rozszerzoną głębię ostrości, dzięki czemu czyta także kody bardziej oddalone, np. na wyższych regałach.',
        ] },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Skaner jest dostarczany z baterią naładowaną tylko częściowo. Przed pierwszym użyciem **ładuj baterię przez co najmniej 4 godziny**, aby uzyskać pełną wydajność pracy.' },
        { type: 'p', text: 'Baterię ładuje się, **wkładając skaner do bazy** podłączonej do odpowiedniego zasilania. Bazę zasilaj wyłącznie zasilaczem zgodnym z wymaganiami (źródło o ograniczonej mocy LPS lub klasy 2, **5–5,2 V DC, 1 A**).' },
        { type: 'p', text: 'Jeśli baza jest zasilana przez kabel komunikacyjny (np. USB), a nie z osobnego zasilacza w gnieździe pomocniczym, prąd ładowania jest mniejszy, a czas ładowania dłuższy. Aby skaner ładował się szybciej, podłącz do bazy zewnętrzny zasilacz.' },
      ],
    },
    {
      title: 'Bateria: zalecenia, kondycja i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'Skaner zasila wymienna **bateria litowo-jonowa** zabudowana w rękojeści. Ogniwa litowo-jonowe można doładowywać bez pełnego rozładowania i używać bez pełnego naładowania — nie wymagają „treningu" ani cykli kondycjonowania.' },
        { type: 'list', items: [
          'gdy host nie jest używany, zostaw bazę podłączoną do zasilania, by skaner był stale gotowy do pracy;',
          'uszkodzoną baterię wymień natychmiast — może uszkodzić skaner;',
          'bateria z czasem się zużywa; wymień ją, gdy przestaje utrzymywać odpowiedni poziom naładowania;',
          'stosuj wyłącznie oryginalne baterie Honeywell — użycie zamiennika może spowodować uszkodzenia nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Ze względów bezpieczeństwa nie wrzucaj baterii do ognia i nie nagrzewaj jej, nie przechowuj i nie przenoś razem z metalowymi przedmiotami, nie zwieraj styków, nie narażaj na kontakt z wodą, nie przebijaj, nie deformuj ani nie rozbieraj ogniwa. Zużytą baterię oddaj do recyklingu zgodnie z lokalnymi przepisami — nie wyrzucaj jej z odpadami komunalnymi i nie spalaj.' },
      ],
    },
    {
      title: 'Baza/cradle: ładowanie, komunikacja i podłączenie do hosta',
      blocks: [
        { type: 'p', text: 'Baza ładująco-komunikacyjna (cradle) jest pomostem między skanerem a hostem. Zawiera moduł interfejsu oraz **moduł radiowy RF**, który wymienia dane między skanerem a hostem; po stronie hosta baza obsługuje też menu, wskaźniki i autotest po włączeniu.' },
        { type: 'p', text: 'Bazę można podłączyć do komputera lub terminala na kilka sposobów — w zależności od posiadanego kabla:' },
        { type: 'list', items: [
          '**USB** — najczęstsze połączenie z komputerem; po podłączeniu sprawdź działanie, skanując dowolny kod;',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy; przy montażu poziomym ułóż kable w prowadnicach w spodzie bazy, by stała stabilnie;',
          '**Keyboard Wedge** — baza wpięta między klawiaturę a komputer, podająca dane jak klawiatura PC;',
          '**RS-485** — do terminali POS (np. IBM).',
        ] },
        { type: 'p', text: 'Wskaźniki bazy informują o jej stanie: dioda **świeci ciągle** — zasilanie włączone, system w spoczynku; **krótko mruga** — trwa przesyłanie danych; **zgaszona** — stan uśpienia USB. Stan ładowania sygnalizuje osobna dioda (np. zielona ciągła = 100%, żółte szybkie mruganie = poniżej 30%, nie skanuj). Wskaźnik zasilania bazy można włączyć lub wyłączyć kodem konfiguracyjnym.' },
      ],
    },
    {
      title: 'Parowanie skanera z bazą i tryby łączenia',
      blocks: [
        { type: 'p', text: 'Najprościej skaner łączy się z bazą przez **włożenie go do bazy** — oprogramowanie wykrywa skaner i tworzy łącze, a poprawne sparowanie potwierdza pojedynczy sygnał i niebieska ikona Bluetooth na bazie. Dostępne są dwa tryby łączenia:' },
        { type: 'list', items: [
          '**Open Link Mode (otwarty)** — ustawienie domyślne; każdy nowo włożony skaner przejmuje łącze, a poprzedni zostaje odłączony;',
          '**Locked Link Mode (zablokowany)** — łącze jest przypisane do jednego skanera; inny skaner włożony do bazy będzie się tylko ładował, ale nie połączy się, dopóki nie odłączysz pierwotnego skanera kodem **Unlink Scanner**.',
        ] },
        { type: 'p', text: 'Jeśli musisz zastąpić zgubiony lub uszkodzony skaner przypisany w trybie zablokowanym, zeskanuj nowym skanerem kod **Override Locked Scanner** i włóż go do bazy — stare łącze zostanie skasowane, a nowy skaner przypisany. Skaner można też sparować bezpośrednio z komputerem mobilnym Honeywell (kod EZPairing).' },
        { type: 'p', text: 'Ważne: gdy skaner pracuje w zestawie z bazą, **wszystkie ustawienia menu są przechowywane w bazie**, dlatego podczas konfiguracji skaner musi być z nią połączony. Skaner pracujący poza bazą przechowuje ustawienia samodzielnie.' },
      ],
    },
    {
      title: 'Parowanie Bluetooth z komputerem, tabletem lub telefonem',
      blocks: [
        { type: 'p', text: 'Skaner może pracować nie tylko z bazą, ale i bezpośrednio z innymi urządzeniami **Bluetooth** — komputerami, laptopami i tabletami — tak, że odczytane dane pojawiają się na ekranie jak wpisane z klawiatury. Aby sparować skaner bezpośrednio z urządzeniem:' },
        { type: 'list', ordered: true, items: [
          'zeskanuj kod **Bluetooth HID Keyboard Connect**;',
          'na komputerze, tablecie lub telefonie włącz wyszukiwanie urządzeń Bluetooth (zgodnie z instrukcją tego urządzenia);',
          'wybierz nazwę skanera z listy — część urządzeń sparuje się automatycznie i wyświetli komunikat o powodzeniu;',
          'jeśli urządzenie poprosi o PIN, w ciągu 60 sekund zeskanuj kod **Bluetooth PIN Code**, następnie kody cyfr PIN-u i na końcu **Save**.',
        ] },
        { type: 'p', text: 'Wygodniejsze jest **Bluetooth Secure Simple Pairing (SSP)** — domyślnie włączone — które pozwala połączyć się bezpiecznie bez podawania PIN-u (wymaga Bluetooth 2.1 lub nowszego). SSP wyłącz tylko wtedy, gdy łączysz się z urządzeniem o niezgodnej wersji Bluetooth.' },
        { type: 'p', text: 'Po sparowaniu z tabletem lub telefonem klawiaturę ekranową urządzenia włączasz i wyłączasz **podwójnym, szybkim naciśnięciem spustu**. Aby skaner mógł znów rozmawiać z bazą, najpierw odłącz go od urządzenia kodem **Bluetooth HID Keyboard Disconnect**, a potem zeskanuj kod łączący na bazie.' },
      ],
    },
    {
      title: 'Praca poza zasięgiem i tryb wsadowy (batch)',
      blocks: [
        { type: 'p', text: 'Bazy zapewniają zasięg do około **100 m (klasa 1) lub 10 m (klasa 2)** od skanera, zależnie od otoczenia. Skaner cały czas utrzymuje łączność z bazą, nawet gdy nie przesyła danych. Gdy traci łączność, jest **poza zasięgiem** — próba odczytu kodu kończy się wówczas sygnałem błędu, a baza może dodatkowo uruchomić alarm dźwiękowy (Out-of-Range Alarm; czas trwania i typ dźwięku ustawia się kodami). Po powrocie w zasięg skaner odtwarza łącze, co potwierdza pojedynczy sygnał.' },
        { type: 'p', text: 'Aby pracować z dala od bazy bez utraty danych, włącz **tryb wsadowy (Batch Mode)**, który zapisuje odczyty w pamięci skanera. Dostępne są warianty:' },
        { type: 'list', items: [
          '**Automatic Batch Mode** — zapisuje odczyty tylko, gdy skaner jest poza zasięgiem, i wysyła je automatycznie po powrocie w zasięg;',
          '**Inventory Batch Mode** — zapisuje odczyty niezależnie od zasięgu (np. podczas inwentaryzacji); dane wysyłasz, wkładając skaner do bazy lub kodem **Transmit Inventory Records**, po czym pamięć skanera jest czyszczona;',
          '**Persistent Batch Mode** — jak tryb inwentaryzacyjny, ale dane pozostają w skanerze po wysyłce (można je wysłać wielokrotnie); pamięć czyści się kodem **Clear All Codes**.',
        ] },
        { type: 'p', text: 'Skaner przechowa w pamięci wsadowej około 500 kodów (dla typowych kodów U.P.C.). Gdy bufor się zapełni, kolejne odczyty wywołują sygnał błędu — trzeba wtedy najpierw przesłać zgromadzone dane. Tryb wsadowy działa z bazą CCB Honeywell oraz z Access Pointem.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie (różnica SR vs XR)',
      blocks: [
        { type: 'p', text: 'Nakieruj celownik na kod, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu. Skaner można obracać i ustawiać pod dowolnym kątem; ważne, by cały kod mieścił się w polu widzenia.' },
        { type: 'p', text: 'Sposób celowania zależy od wariantu: w modelu **SR** celownik rzutuje punkt/krzyż wraz ze znacznikami narożnymi — wyśrodkuj go na kodzie tak, by cały kod znalazł się między narożnikami. W modelu **XR** celownik rzutuje sam punkt wskazujący środek pola widzenia — wyśrodkuj go na kodzie. Wariant **XR** ma rozszerzoną głębię ostrości, więc sięgnij po niego, gdy trzeba czytać kody z większej odległości.' },
        { type: 'p', text: 'Pamiętaj, że na odległość odczytu wpływa wielkość i jakość kodu — większe i dobrze wydrukowane kody czyta się z dalszej odległości. Gdy kody znajdują się blisko siebie, włącz **centrowanie (Centering)**, aby skaner czytał tylko kod celowo wskazany wiązką.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny i prezentacyjny',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Ręczny (spustowy)** — skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu; najlepszy do typowej pracy w dłoni;',
          '**Prezentacyjny / Streaming Presentation** — skaner sam wykrywa kod w polu widzenia i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner ustawiony w bazie lub na stojaku;',
          '**Serial Trigger** — wyzwalanie odczytu komendą z hosta zamiast spustu.',
        ] },
        { type: 'p', text: 'Aby oszczędzać baterię, skaner po okresie bezczynności przechodzi w tryb obniżonego poboru mocy (domyślnie po 3600 sekundach; czas ustawia się kodem). Skaner w bazie podczas ładowania nie przechodzi w ten tryb. Po uśpieniu naciśnij spust — usłyszysz sygnały rozruchu, po czym po krótkiej chwili (czas na połączenie radia) skaner będzie gotowy do pracy.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod „Set Custom Defaults", potem wszystkie wybrane ustawienia, a na końcu kod zapisu. Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Reset the Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne, kasując wszelkie modyfikacje.',
        ] },
        { type: 'p', text: 'Uwaga przy zestawie z bazą: zeskanowanie kodu przywracającego powoduje też rozłączenie skanera i bazy — aby odtworzyć łącze, włóż skaner z powrotem do bazy. Jeśli skaner ma czytać wyłącznie kody danych, a nie kody menu, zabezpiecz go ustawieniami **Menu Barcode Security**.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Granit XP 1991i obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
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
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza **zielonym błyskiem diody i sygnałem dźwiękowym**, a jeśli tak ustawisz — także **wibracją**. W zestawie bezprzewodowym potwierdzenie oznacza zarazem, że baza lub Access Point odebrały dane (system zapewnia dwukierunkową komunikację). Każdy z elementów sygnalizacji można dostroić kodami:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność, wysokość tonu i długość sygnału;',
          '**Number of Beeps** — liczba sygnałów po poprawnym odczycie oraz przy błędzie;',
          '**LED – Good Read** — zachowanie diody potwierdzającej odczyt;',
          '**Vibrate – Good Read** — potwierdzenie wibracją, przydatne w głośnym otoczeniu;',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
        { type: 'p', text: 'Skaner i baza mają też przycisk **Page** (wywołanie): naciśnięcie go na bazie sprawia, że przypisane skanery zaczynają piszczeć, co ułatwia odnalezienie zgubionego skanera. Sygnał wyłączysz, naciskając spust pisczącego skanera lub przycisk Page po raz drugi.' },
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
        { type: 'p', text: 'Zamiast skanować pojedyncze kody, skaner można skonfigurować z komputera narzędziem **EZConfig**. Daje ono pełen zakres ustawień programowych dla skanera podłączonego do PC (przez bazę), w tym podgląd odczytanych danych w oknie testowym oraz zapis i wczytywanie całych zestawów parametrów.' },
        { type: 'p', text: 'Aby skonfigurować urządzenie przez EZConfig: pobierz aktualną wersję narzędzia ze strony producenta, zainstaluj ją na komputerze, podłącz bazę ze skanerem, a następnie otwórz EZConfig i wprowadź ustawienia. To wygodny sposób na powtarzalne wdrożenie tej samej konfiguracji na wielu urządzeniach.' },
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
          'przed włożeniem skanera do bazy upewnij się, że styki skanera i bazy są suche — wilgoć na stykach może spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw. Pomocny jest kod **Reset Scanner**, który ponownie uruchamia skaner i odtwarza łącze z bazą.' },
        { type: 'p', text: 'Gdy skaner nie reaguje lub nie świeci celownik, sprawdź, czy:' },
        { type: 'list', items: [
          'bateria jest naładowana (włóż skaner do bazy i poczekaj na ładowanie) — niski poziom sygnalizują błyski diody bez sygnału dźwiękowego;',
          'baza jest poprawnie podłączona i zasilona oraz czy skaner jest z nią połączony (świecąca niebieska ikona Bluetooth);',
          'skaner nie znalazł się poza zasięgiem — przy próbie odczytu poza zasięgiem usłyszysz sygnał błędu;',
          'spust działa, a skaner nie jest w trybie obniżonego poboru mocy (naciśnij spust, by go wybudzić).',
        ] },
        { type: 'p', text: 'Gdy skaner słabo czyta kody, sprawdź, czy nie są one rozmazane, porysowane lub z ubytkami, czy nie pokrywa ich szron lub woda oraz czy dana symbologia jest włączona. Gdy kod pojawia się na ekranie hosta, ale trzeba go ręcznie zatwierdzać klawiszem — zaprogramuj odpowiedni **sufiks** (np. CR). Jeśli nie masz pewności, jakie ustawienia są aktywne, przywróć ustawienia fabryczne.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Oprogramowanie układowe (firmware) skanera aktualizuje się z komputera za pomocą narzędzia **EZConfig**, które pozwala pobrać i wgrać nową wersję firmware do skanera podłączonego przez bazę. W trakcie aktualizacji nie odłączaj bazy od komputera ani nie wyjmuj skanera.' },
        { type: 'p', text: 'Aktualne oprogramowanie i pełną dokumentację skanera znajdziesz u producenta oraz przez TAKMA.' },
      ],
    },
  ],
}
