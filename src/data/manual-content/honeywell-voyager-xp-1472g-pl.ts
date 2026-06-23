import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi bezprzewodowego skanera kodów
 * Honeywell Voyager XP 1472g (retail) po polsku.
 */
export const honeywellVoyagerXp1472gPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze bezprzewodowego skanera kodów Honeywell Voyager XP 1472g po polsku — od pierwszego ładowania, baterii i bazy, przez parowanie Bluetooth, tryb wsadowy, skanowanie i tryby pracy, po konfigurację, czyszczenie i rozwiązywanie problemów.',
  sections: [
    {
      title: 'Voyager XP 1472g: czym jest i do czego służy',
      blocks: [
        { type: 'p', text: 'Voyager XP 1472g to **bezprzewodowy, uniwersalny skaner ręczny** typu area-imaging, który czyta kody **1D i 2D**. To skaner klasy handlowej (retail) do codziennej pracy — sprawdza się przy kasach, w punktach obsługi, w aptekach i biurach oraz w lekkich zastosowaniach magazynowych. Nie jest to skaner przemysłowy ani ultrawytrzymały: stawia na wygodę pracy bez kabla, precyzję odczytu i swobodę ruchu, a nie na pracę w najtrudniejszych warunkach hali produkcyjnej.' },
        { type: 'p', text: 'Skaner łączy się ze światem przez **Bluetooth**, zasilany jest **wymienną baterią litowo-jonową** zabudowaną w rękojeści, a dane przekazuje do hosta przez **bazę ładująco-komunikacyjną (cradle)** lub bezpośrednio do urządzenia Bluetooth. Wersja oznaczona 147Xg2D czyta kody PDF oraz dwuwymiarowe; wersja 147Xg1D czyta wyłącznie kody liniowe — przed zakupem warto sprawdzić, którego wariantu potrzebujesz.' },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie, i czy zawartość opakowania zgadza się z zamówieniem. Wszelkie szkody powstałe w transporcie od razu zgłoś przewoźnikowi. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Skaner jest dostarczany z baterią naładowaną tylko częściowo (ok. 30–60%). Przed pierwszym użyciem **ładuj baterię przez co najmniej 4 godziny**, aby uzyskać pełną wydajność pracy.' },
        { type: 'p', text: 'Aby przygotować zestaw bezprzewodowy do pracy: podłącz bazę do zasilania i do hosta przy odłączonym zasilaniu komputera, włącz komputer dopiero po pełnym podłączeniu bazy, a następnie **włóż skaner do bazy** — skaner zostanie wykryty, połączy się z bazą i zacznie się ładować. Zieloną diodą baza sygnalizuje, że bateria skanera się ładuje.' },
        { type: 'p', text: 'Bateria ładuje się, gdy skaner stoi w bazie. Bazę zasilaj wyłącznie odpowiednim źródłem zasilania (LPS lub klasy 2) o napięciu 5–5,2 V DC i prądzie 1 A. Jeśli baza jest zasilana przez kabel komunikacyjny (np. USB), a nie z osobnego zasilacza wpiętego do portu pomocniczego, prąd ładowania jest mniejszy, a czas ładowania dłuższy.' },
      ],
    },
    {
      title: 'Bateria: zalecenia, kondycja i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'Skaner zasila wymienna **bateria litowo-jonowa** zabudowana w rękojeści (model BAT-SCN01, 3,7 V DC, 7,4 Wh). Ogniwa litowo-jonowe można doładowywać bez pełnego rozładowania i używać bez pełnego naładowania — nie wymagają „treningu" ani cykli kondycjonowania.' },
        { type: 'list', items: [
          'gdy host nie jest używany, zostaw bazę podłączoną do zasilania, by skaner był stale gotowy do pracy;',
          'uszkodzoną baterię wymień natychmiast — może uszkodzić skaner;',
          'bateria z czasem się zużywa — wymień ją, gdy przestaje utrzymywać odpowiedni poziom naładowania;',
          'jeśli nie masz pewności, czy bateria lub ładowarka działają poprawnie, oddaj urządzenie do autoryzowanego serwisu;',
          'stosuj wyłącznie oryginalne baterie litowo-jonowe Honeywell (model BAT-SCN01) — użycie zamiennika grozi uszkodzeniem nieobjętym gwarancją.',
        ] },
        { type: 'p', text: 'Ze względów bezpieczeństwa istnieje ryzyko wybuchu przy nieprawidłowej wymianie ogniwa — wymieniaj baterię wyłącznie na typ zalecany przez producenta. Zużytą baterię oddaj do recyklingu zgodnie z lokalnymi przepisami.' },
      ],
    },
    {
      title: 'Baza/cradle: ładowanie, komunikacja i podłączenie do hosta',
      blocks: [
        { type: 'p', text: 'Bezprzewodowa baza ładująco-komunikacyjna (cradle CCB01-010BT-V1N) jest pomostem między skanerem a hostem. Zawiera moduł interfejsu oraz **moduł radiowy RF**, który wymienia dane między skanerem a hostem; po stronie hosta baza obsługuje też menu konfiguracyjne, wskaźniki oraz autotest po włączeniu. Baza jest jednocześnie ładowarką baterii skanera.' },
        { type: 'p', text: 'Bazę można podłączyć do komputera albo terminala na kilka sposobów — w zależności od posiadanego kabla:' },
        { type: 'list', items: [
          '**USB** — najczęstsze połączenie z komputerem; po podłączeniu sprawdź działanie, skanując dowolny kod (domyślnie skaner zgłasza się jako klawiatura USB);',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy; kod interfejsu RS-232 dodatkowo programuje sufiks z karetką (CR). Parametry transmisji (prędkość, liczbę bitów danych, parzystość, bity stopu) ustawia się osobnymi kodami;',
          '**Keyboard Wedge** — baza wpięta między klawiaturę a komputer, podająca dane jak klawiatura PC; przed podłączeniem kabla wyłącz zasilanie hosta, a do danych dodawany jest sufiks CR.',
        ] },
        { type: 'p', text: 'Podczas podłączania bazy zadbaj, by kable były ułożone w prowadnicach na spodzie obudowy i by baza stała płasko na stacji roboczej. Po pełnym podłączeniu włącz host i sprawdź działanie zestawu, skanując przykładowy kod z końca instrukcji producenta.' },
        { type: 'p', text: 'Możesz też zdecydować, czy skaner ma skanować, stojąc w bazie: **Scanning in Cradle On** (domyślnie — można skanować w bazie), **Scanning in Cradle Off** (skanowanie tylko poza bazą) lub **Shut Down Scanner in Cradle** (skaner w bazie wyłącza się). Sposób ładowania z bazy ustawiają kody **Base Charge Off**, **External or Interface Cable Power** (domyślny), **External Power Only** oraz **USB or External Power**.' },
      ],
    },
    {
      title: 'Parowanie skanera z bazą i tryby łączenia',
      blocks: [
        { type: 'p', text: 'Najprościej skaner łączy się z bazą przez **włożenie go do bazy** — oprogramowanie sprawdza poziom naładowania, wykrywa skaner i tworzy łącze zależnie od wybranego trybu. Przy pierwszym połączeniu oba urządzenia wydają krótki sygnał (chirp) w chwili nawiązania łącza radiowego; przy kolejnych połączeniach skaner nie sygnalizuje tego dodatkowo. Aby sprawdzić, czy łącze powstało poprawnie, zeskanuj dowolny kod — pojedynczy sygnał poprawnego odczytu i zielona dioda oznaczają udane połączenie; sygnał błędu i czerwona dioda — że łącze nie powstało.' },
        { type: 'p', text: 'Skaner można też połączyć z punktem dostępowym **Access Point**: po podłączeniu go do komputera zeskanuj kod łączenia umieszczony na punkcie — skaner potwierdzi połączenie krótkim sygnałem i zielonym błyskiem diody.' },
        { type: 'p', text: 'Dostępne są dwa tryby pobytu skanera w bazie:' },
        { type: 'list', items: [
          '**Charge and Link Mode (ładowanie i łączenie)** — skaner włożony do bazy ładuje się i jednocześnie tworzy łącze (ustawienie domyślne);',
          '**Charge Only Mode (tylko ładowanie)** — skaner w bazie tylko się ładuje, bez tworzenia łącza; przydatne, gdy skaner jest przypisany do punktu Access Point lub innego urządzenia Bluetooth, a chcesz go tylko doładować bez zrywania istniejącego łącza.',
        ] },
        { type: 'p', text: 'Dla różnych zastosowań przewidziano też dwa profile łącza: **Open Link Mode** (domyślny — nowy skaner włożony do bazy przejmuje łącze, a poprzedni jest odłączany) oraz **Locked Link Mode** (łącze zablokowane — inne skanery wstawione do bazy tylko się ładują, ale się nie łączą).' },
        { type: 'p', text: 'Jeśli musisz zastąpić zgubiony lub uszkodzony skaner przypisany do bazy, zeskanuj nowym skanerem kod **Override Locked Scanner** i włóż go do bazy (lub zeskanuj kod łączenia Access Pointa) — stare łącze zostanie skasowane, a nowy skaner przypisany. Aby ręcznie odłączyć skaner, użyj kodu **Unlink Scanner**.' },
        { type: 'p', text: 'Ważne: gdy skaner pracuje w zestawie z bazą lub punktem Access Point, część ustawień menu jest przechowywana po stronie bazy, dlatego podczas konfiguracji skaner musi być z nią połączony. W trybie bez bazy ustawienia zapisuje sam skaner.' },
      ],
    },
    {
      title: 'Parowanie Bluetooth z komputerem, tabletem lub telefonem',
      blocks: [
        { type: 'p', text: 'Skaner może pracować nie tylko z bazą, ale i bezpośrednio z innymi urządzeniami **Bluetooth** — komputerami, laptopami i tabletami — tak, że odczytane dane pojawiają się na ekranie jak wpisane z klawiatury. Komunikacja radiowa działa w standardzie Bluetooth z adaptacyjnym przeskakiwaniem częstotliwości (AFH), w wolnym paśmie ISM, a zasięg między skanerem a bazą (Bluetooth Class 2) sięga około 10 m, zależnie od otoczenia.' },
        { type: 'p', text: 'Aby sparować skaner bezpośrednio z urządzeniem jako klawiaturę:' },
        { type: 'list', ordered: true, items: [
          'zeskanuj kod **Bluetooth HID Keyboard Connect**;',
          'na komputerze, laptopie lub tablecie włącz wyszukiwanie urządzeń Bluetooth (zgodnie z instrukcją tego urządzenia);',
          'wybierz nazwę skanera z listy — część urządzeń sparuje się automatycznie i wyświetli komunikat o powodzeniu;',
          'jeśli urządzenie poprosi o PIN, zeskanuj go w ciągu 60 sekund: wczytaj kod **Bluetooth PIN Code**, następnie kody cyfr PIN-u, a na końcu kod zapisu (Save).',
        ] },
        { type: 'p', text: 'Wygodniejsze jest **Bluetooth Secure Simple Pairing (SSP)**, które pozwala połączyć się bezpiecznie bez podawania PIN-u (dostępne przy Bluetooth 2.1 i nowszych; domyślnie włączone). SSP wyłącz tylko wtedy, gdy łączysz się z urządzeniem o starszej, niezgodnej wersji Bluetooth.' },
        { type: 'p', text: 'Dostępne jest też połączenie szeregowe Bluetooth dla komputerów i laptopów (**Bluetooth Serial Port**). Po sparowaniu i naładowaniu baterii możesz zacząć skanować; działanie potwierdź, czytając przykładowy kod. Aby skaner mógł znów rozmawiać z bazą, najpierw odłącz go od urządzenia kodem **Bluetooth HID Keyboard Disconnect**, a potem włóż go z powrotem do bazy.' },
      ],
    },
    {
      title: 'Praca poza zasięgiem i tryb wsadowy (batch)',
      blocks: [
        { type: 'p', text: 'Skaner cały czas utrzymuje łączność z bazą lub punktem Access Point, nawet gdy nie przesyła danych. Gdy przez kilka sekund nie może się z nią komunikować, jest **poza zasięgiem** — próba odczytu kodu kończy się wówczas sygnałem błędu (dane nie dotarły do bazy ani hosta), a baza może dodatkowo uruchomić alarm dźwiękowy (**Out-of-Range Alarm**). Po powrocie w zasięg skaner odtwarza łącze, co potwierdza pojedynczy sygnał po wczytaniu tablicy parametrów.' },
        { type: 'p', text: 'Aby pracować z dala od bazy bez utraty danych, włącz **tryb wsadowy (Batch Mode)**, który zapisuje odczyty w pamięci skanera (przy pracy poza zasięgiem przechowa około 5000 kodów typu UPC; inne symbologie mogą się różnić). Tryb wsadowy obsługują baza CCB oraz Access Point. Dostępne są trzy warianty:' },
        { type: 'list', items: [
          '**Automatic Batch Mode** — zapisuje odczyty tylko wtedy, gdy skaner jest poza zasięgiem, i automatycznie przesyła je do bazy po powrocie w zasięg;',
          '**Inventory Batch Mode** — zapisuje odczyty niezależnie od zasięgu; dane przesyłasz, wkładając skaner do bazy lub skanując kod **Transmit Inventory Records**, po czym pamięć jest czyszczona;',
          '**Persistent Batch Mode** — jak tryb inwentaryzacyjny, ale po przesłaniu dane pozostają w pamięci skanera (czyścisz je kodem **Clear All Codes**).',
        ] },
        { type: 'p', text: 'Gdy bufor pamięci się zapełni, kolejne odczyty wywołują sygnał błędu, dopóki danych nie prześlesz do bazy. W trybie wsadowym po próbie odczytu bez łączności usłyszysz krótkie buczenie zamiast sygnału błędu komunikacji; po nawiązaniu łącza skaner wyda serię sygnałów w trakcie przesyłania danych. Domyślnie tryb wsadowy jest wyłączony (Batch Mode Off).' },
      ],
    },
    {
      title: 'Skanowanie i celowanie',
      blocks: [
        { type: 'p', text: 'Skaner ma celownik rzutujący jasną wiązkę celującą odpowiadającą polu widzenia. Nakieruj wiązkę na środek kodu, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu. Skaner można obracać i ustawiać pod dowolnym kątem; ważne, by cały kod mieścił się w polu widzenia.' },
        { type: 'p', text: 'Na odległość odczytu wpływa wielkość i jakość kodu — większe i dobrze wydrukowane kody czyta się z dalszej odległości. Wersja 2D (147Xg2D) czyta kody PDF i dwuwymiarowe; wersja 1D (147Xg1D) odczytuje wyłącznie kody liniowe.' },
      ],
    },
    {
      title: 'Tryby pracy: ręczny i prezentacyjny',
      blocks: [
        { type: 'p', text: 'Tryb pracy ustawisz kodem konfiguracyjnym, zależnie od stanowiska:' },
        { type: 'list', items: [
          '**Manual Trigger (ręczny, spustowy)** — skaner czyta po naciśnięciu spustu i kończy po odczycie kodu lub zwolnieniu spustu; najlepszy do typowej pracy w dłoni;',
          '**Presentation Mode (prezentacyjny)** — skaner sam wykrywa kod w polu widzenia, korzystając ze światła otoczenia, i czyta bez naciskania spustu; idealny do pracy bez użycia rąk, gdy podsuwasz towar pod skaner;',
          '**Triggered Presentation Mode** — odmiana trybu prezentacyjnego uruchamiana spustem, łącząca wygodę pracy bez rąk z kontrolą startu odczytu.',
        ] },
        { type: 'p', text: 'Tryb prezentacyjny działa poprawnie tylko przy dostatecznym oświetleniu pomieszczenia. Uwaga: gdy bezprzewodowa baza pracuje w trybie prezentacyjnym, bateria skanera ładuje się tylko wtedy, gdy do portu pomocniczego bazy podłączysz osobny zasilacz.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner jest fabrycznie zaprogramowany pod najczęstsze ustawienia terminala i komunikacji. Jeśli chcesz je zmienić, **skanuj kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodów cyfr i kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod rozpoczynający zapis, potem wszystkie wybrane ustawienia, a na końcu kod zapisu ustawień własnych. Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Reset the Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne, kasując wszelkie modyfikacje.',
        ] },
        { type: 'p', text: 'Uwaga przy zestawie z bazą: zeskanowanie kodu zapisu ustawień własnych lub przywracającego może też rozłączyć skaner i bazę — aby odtworzyć łącze, włóż skaner z powrotem do bazy. W przypadku punktu Access Point ponownie zeskanuj jego kod łączenia.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Voyager XP 1472g obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5) oraz, w wersji 2D, kody dwuwymiarowe (np. QR Code, Data Matrix, PDF417, Aztec). To pełne pokrycie potrzeb handlu — od kodów na opakowaniach po kody na paragonach i dokumentach.' },
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
        { type: 'p', text: 'Sufiks możesz przypisać do **wszystkich symbologii naraz** (np. kodem dodającym CR do wszystkich symbologii) albo tylko do wybranej. Dostępne są też kody do **usunięcia jednego lub wszystkich** prefiksów i sufiksów.' },
      ],
    },
    {
      title: 'Sygnalizacja odczytu: beeper, głośność i dioda Good Read',
      blocks: [
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza **zielonym błyskiem diody i sygnałem dźwiękowym**. W zestawie bezprzewodowym potwierdzenie oznacza zarazem, że baza lub Access Point odebrały dane (ACK) — system zapewnia dwukierunkową komunikację. Jeśli skaner nie ma pewności, że dane dotarły, sygnalizuje błąd; należy wtedy sprawdzić, czy host je przyjął. Każdy z elementów sygnalizacji można dostroić kodami:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć;',
          '**Beeper Volume – Good Read** — głośność sygnału poprawnego odczytu;',
          '**Number of Beeps – Good Read** oraz **Number of Beeps – Error** — liczba sygnałów po poprawnym odczycie i przy błędzie;',
          '**LED – Good Read** — zachowanie diody potwierdzającej odczyt;',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
        { type: 'p', text: 'Baza ma przycisk wywołania **Page**: naciśnięcie go sprawia, że przypisane skanery zaczynają piszczeć (trzy krótkie i jeden długi sygnał), co ułatwia odnalezienie zgubionego skanera. Sygnał wyłączysz, naciskając spust piszczącego skanera lub przycisk Page po raz drugi. Funkcję tę można wyłączyć kodem **Page Mode Off**.' },
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
      title: 'Czyszczenie okienka i obudowy',
      blocks: [
        { type: 'p', text: 'Zabrudzone okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie brudne lub gdy skaner czyta gorzej. Skaner ma obudowę odporną na środki dezynfekujące; do jej czyszczenia i dezynfekcji stosuj wyłącznie środki dopuszczone w przewodniku czyszczenia obudowy odpornej na dezynfekcję dla swojego wariantu, dostępnym na stronie produktu.' },
        { type: 'list', items: [
          'nie zanurzaj skanera w wodzie ani w roztworze czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku — porysują je;',
          'nigdy nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienku — mogą uszkodzić powłokę lub okienko;',
          'przed włożeniem skanera do bazy lub innych akcesoriów ładujących upewnij się, że wszystkie elementy są suche — wilgoć na stykach może spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Sprawdzaj też kabel interfejsu i złącze pod kątem zużycia lub uszkodzeń — mocno zużyty kabel albo uszkodzone złącze może zakłócać pracę bazy. Kabel w bazie jest wymienny; po wymianę zgłoś się do dystrybutora, podając numer oryginalnego kabla.' },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw — pomaga ponowne nawiązanie łącza przez włożenie skanera do bazy.' },
        { type: 'p', text: 'Gdy skaner nie reaguje lub nie świeci celownik, sprawdź, czy:' },
        { type: 'list', items: [
          'bateria jest naładowana (włóż skaner do bazy i poczekaj na ładowanie);',
          'baza jest poprawnie podłączona i zasilona oraz czy skaner jest z nią połączony (pojedynczy sygnał i zielona dioda po odczycie potwierdzają łącze);',
          'skaner nie znalazł się poza zasięgiem — przy próbie odczytu poza zasięgiem usłyszysz sygnał błędu, a baza może uruchomić alarm;',
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
