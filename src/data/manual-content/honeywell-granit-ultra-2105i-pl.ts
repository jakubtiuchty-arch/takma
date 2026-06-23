import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi bezprzewodowego skanera przemysłowego
 * Honeywell Granit Ultra 2105i (warianty zasięgu SR i XR) po polsku.
 */
export const honeywellGranitUltra2105iPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze bezprzewodowego skanera przemysłowego Honeywell Granit Ultra 2105i (warianty zasięgu SR i XR) po polsku — od pierwszego ładowania i baterii, przez bazę, parowanie Bluetooth i celowanie, po konfigurację kodami, sygnalizację, konserwację i rozwiązywanie problemów.',
  sections: [
    {
      title: 'Granit Ultra 2105i: czym jest i czym różnią się warianty SR i XR',
      blocks: [
        { type: 'p', text: 'Granit Ultra 2105i to **bezprzewodowy, ultrawytrzymały skaner ręczny** typu area-imaging, czytający kody **1D i 2D**. Jest zaprojektowany do najtrudniejszych warunków magazynowych i przemysłowych — przetrwa upadki z 3 m, tysiące przewrotek, pracę w temperaturze od -20°C do 50°C oraz ma szczelność **IP65/68**. Łączy się ze światem przez **Bluetooth**, zasilany jest **wymienną baterią litowo-jonową** zabudowaną w rękojeści, a dane przekazuje do hosta przez **bazę ładująco-komunikacyjną (cradle)** lub bezpośrednio do urządzenia Bluetooth.' },
        { type: 'p', text: 'Skaner występuje w wariantach zasięgu, które różnią się przede wszystkim odległością i głębią ostrości odczytu:' },
        { type: 'list', items: [
          '**SR (Standard Range)** — optymalny do szybkiego odczytu kodów 1D i 2D w polu bliskim, czyli typowej pracy w dłoni i przy stanowisku;',
          '**XR (Expanded/Extended Range)** — przeznaczony do pola bliskiego i średniego; zapewnia rozszerzoną głębię ostrości, dzięki czemu czyta także kody bardziej oddalone, np. na wyższych regałach.',
        ] },
        { type: 'p', text: 'W rodzinie Granit Ultra występują też wersje **HD** (do gęstych kodów wysokiej rozdzielczości, nawet 2 mil) oraz **XLR** (zasięg rozszerzony, czyta kody Code 39 100 mil nawet z kilkunastu metrów). Jeśli nie masz pewności, który wariant masz, sprawdź oznaczenie na etykiecie skanera.' },
        { type: 'p', text: 'Po rozpakowaniu sprawdź, czy urządzenie nie uległo uszkodzeniu w transporcie i czy zawartość opakowania zgadza się z zamówieniem. Zachowaj karton — przyda się do przechowywania lub wysyłki.' },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Skaner jest dostarczany z baterią naładowaną tylko częściowo. Przed pierwszym użyciem **ładuj baterię przez co najmniej 4 godziny**, aby uzyskać pełną wydajność pracy.' },
        { type: 'p', text: 'Baterię ładuje się, **wkładając skaner do bazy** podłączonej do odpowiedniego zasilania. Bazę zasilaj wyłącznie zasilaczem zgodnym z wymaganiami (źródło o ograniczonej mocy LPS lub klasy 2, **5–5,2 V DC, 1 A**).' },
        { type: 'p', text: 'Jeśli baza jest zasilana przez kabel komunikacyjny (np. USB), a nie z osobnego zasilacza, prąd ładowania może być mniejszy, a czas ładowania dłuższy. Szybsze ładowanie zapewnia port USB zgodny ze standardem BC1.2 lub zewnętrzny zasilacz podłączony do bazy.' },
      ],
    },
    {
      title: 'Bateria: zalecenia, kondycja i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'Skaner zasila wymienna **bateria litowo-jonowa** zabudowana w rękojeści (model BAT-SCN11, 3,7 V DC). Ogniwa litowo-jonowe można doładowywać bez pełnego rozładowania i używać bez pełnego naładowania — nie wymagają „treningu" ani cykli kondycjonowania.' },
        { type: 'list', items: [
          'gdy host nie jest używany, zostaw bazę podłączoną do zasilania, by skaner był stale gotowy do pracy;',
          'uszkodzoną baterię wymień natychmiast — może uszkodzić skaner;',
          'unikaj upuszczania baterii i skanera; przy podejrzeniu uszkodzenia lub przerywanego ładowania oddaj urządzenie do autoryzowanego serwisu;',
          'bateria z czasem się zużywa — wymień ją, gdy przestaje utrzymywać odpowiedni poziom naładowania; przyjmuje się okresową wymianę, zwykle co około dwa lata;',
          'stosuj wyłącznie oryginalne baterie Honeywell — użycie zamiennika może spowodować uszkodzenia nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Aby wymienić baterię, odblokuj klapkę (dociśnij ją i przekręć zamek w pozycję otwartą), wyjmij ogniwo, włóż nowe i zamknij klapkę, przekręcając zamek w pozycję zablokowaną.' },
        { type: 'p', text: 'Ze względów bezpieczeństwa nie wrzucaj baterii do ognia i nie nagrzewaj jej, nie przechowuj i nie przenoś razem z metalowymi przedmiotami, nie zwieraj styków, nie narażaj na kontakt z wodą, nie przebijaj, nie deformuj ani nie rozbieraj ogniwa. Zużytą baterię oddaj do recyklingu zgodnie z lokalnymi przepisami.' },
      ],
    },
    {
      title: 'Baza/cradle: ładowanie, komunikacja i podłączenie do hosta',
      blocks: [
        { type: 'p', text: 'Bezprzewodowa baza ładująco-komunikacyjna (cradle) CCB23-100BT-07N jest pomostem między skanerem a hostem. Zawiera moduł interfejsu oraz **moduł radiowy RF**, który wymienia dane między skanerem a hostem; po stronie hosta baza obsługuje też menu konfiguracyjne, wskaźniki oraz autotest po włączeniu.' },
        { type: 'p', text: 'Bazę (lub skaner w wersji przewodowej) można podłączyć do komputera albo terminala na kilka sposobów — w zależności od posiadanego kabla:' },
        { type: 'list', items: [
          '**USB** — najczęstsze połączenie z komputerem; po podłączeniu sprawdź działanie, skanując dowolny kod (domyślnie skaner zgłasza się jako klawiatura USB);',
          '**RS-232 (port szeregowy)** — do podłączenia do hosta przez port szeregowy;',
          '**Keyboard Wedge** — baza wpięta między klawiaturę a komputer, podająca dane jak klawiatura PC (przed podłączeniem kabla wyłącz zasilanie);',
          '**RS-485** — do terminali POS (np. IBM).',
        ] },
        { type: 'p', text: 'Ważne dla szczelności: czerwony pierścień O-ring musi być prawidłowo nałożony na końcówkę kabla komunikacyjnego — po wpięciu kabla nie powinien być widoczny. Tylko wtedy zachowana jest klasa szczelności IP65/68.' },
        { type: 'p', text: 'Stan ładowania w bazie sygnalizuje dioda: **zielona ciągła** = 100%, **zielona mrugająca** = poniżej 100%, **żółta mrugająca** = 30–70%, **czerwona mrugająca** = poniżej 30%.' },
      ],
    },
    {
      title: 'Parowanie skanera z bazą i tryby łączenia',
      blocks: [
        { type: 'p', text: 'Najprościej skaner łączy się z bazą przez **włożenie go do bazy** — oprogramowanie sprawdza poziom naładowania, wykrywa skaner i tworzy łącze zależnie od wybranego trybu. Poprawne sparowanie potwierdza niebieska ikona Bluetooth: **miga** podczas łączenia, a po połączeniu **świeci ciągle**. Po wyjęciu skanera z bazy niebieska dioda świeci jeszcze przez 4 sekundy i gaśnie. Stan łącza możesz w każdej chwili sprawdzić, przytrzymując spust przez 3 sekundy — przy aktywnym łączu ikona Bluetooth zaświeci na 4 sekundy.' },
        { type: 'p', text: 'Dostępne są dwa tryby łączenia z bazą:' },
        { type: 'list', items: [
          '**Charge and Link Mode (ładowanie i łączenie)** — skaner włożony do bazy ładuje się i jednocześnie tworzy łącze;',
          '**Charge Only Mode (tylko ładowanie)** — skaner w bazie tylko się ładuje, bez tworzenia łącza; przydatne, gdy chcesz doładować skaner przypisany do innej bazy.',
        ] },
        { type: 'p', text: 'Jeśli musisz zastąpić zgubiony lub uszkodzony skaner przypisany do bazy, zeskanuj nowym skanerem kod **Override Locked Scanner** i włóż go do bazy — stare łącze zostanie skasowane, a nowy skaner przypisany.' },
        { type: 'p', text: 'Ważne: gdy skaner pracuje w zestawie z bazą (lub punktem dostępowym Access Point), **wszystkie ustawienia menu są przechowywane w bazie**, dlatego podczas konfiguracji skaner musi być z nią połączony. Skaner pracujący poza bazą przechowuje ustawienia samodzielnie.' },
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
          'jeśli urządzenie poprosi o PIN, zeskanuj kod zmiany PIN-u skanera, następnie kody cyfr PIN-u i na końcu kod zapisu (Save).',
        ] },
        { type: 'p', text: 'Wygodniejsze jest **Bluetooth Secure Simple Pairing (SSP)**, które pozwala połączyć się bezpiecznie bez podawania PIN-u. Dostępne jest też połączenie szeregowe Bluetooth (SPP) dla komputerów i laptopów oraz tryby pracy z urządzeniami **Bluetooth Low Energy (BLE)** — kod **HID BLE Connect** dla urządzeń klawiaturowych BLE oraz **Serial BLE Connect** dla dwukierunkowej komunikacji szeregowej. Aby skaner połączył się z urządzeniem BLE przez bazę, najpierw włóż go do bazy w celu zsynchronizowania komend.' },
        { type: 'p', text: 'Dostępne są też dwa profile zgodności: **Legacy Mode** (praca w SPP, ustawienie domyślne) oraz **Compatibility Mode** (praca z HID, SPP lub innymi profilami Bluetooth — profil trzeba ustawić ręcznie przed zeskanowaniem kodu). Aby skaner mógł znów rozmawiać z bazą, najpierw odłącz go od urządzenia kodem **Bluetooth HID Keyboard Disconnect**, a potem włóż go z powrotem do bazy.' },
        { type: 'p', text: 'Skaner można też sparować bezpośrednio z komputerem mobilnym Honeywell montowanym na wózku — wystarczy zeskanować kod **EZPairing** dostarczony z tym komputerem lub wyświetlony na jego ekranie.' },
      ],
    },
    {
      title: 'Praca poza zasięgiem i tryb wsadowy (batch)',
      blocks: [
        { type: 'p', text: 'Baza zapewnia zasięg do około **100 m (Bluetooth klasa 1) lub 10 m (klasa 2)** od skanera, zależnie od otoczenia. Skaner cały czas utrzymuje łączność z bazą lub punktem Access Point, nawet gdy nie przesyła danych. Gdy przez kilka sekund nie może się z nią komunikować, jest **poza zasięgiem** — próba odczytu kodu kończy się wówczas sygnałem błędu, a baza może dodatkowo uruchomić alarm dźwiękowy (Out-of-Range Alarm). Po powrocie w zasięg skaner odtwarza łącze, co potwierdza pojedynczy sygnał (po wczytaniu tablicy parametrów).' },
        { type: 'p', text: 'Aby pracować z dala od bazy bez utraty danych, włącz **tryb wsadowy (Batch Mode)**, który zapisuje odczyty w pamięci skanera. Skaner przechowa w pamięci wsadowej około **500 kodów** (dla typowych kodów U.P.C.; dla innych liczba może się różnić). W trybie wsadowym poza zasięgiem nie usłyszysz sygnału błędu komunikacji, lecz krótki brzęczyk przy naciśnięciu spustu, gdy radio nie działa; po odzyskaniu łączności skaner wydaje serię sygnałów w trakcie przesyłania danych do bazy.' },
      ],
    },
    {
      title: 'Skanowanie i celowanie (różnica SR vs XR)',
      blocks: [
        { type: 'p', text: 'Nakieruj celownik na kod, naciśnij spust i przytrzymaj — skaner czyta, dopóki nie odczyta kodu lub nie zwolnisz spustu. Skaner można obracać i ustawiać pod dowolnym kątem; ważne, by cały kod mieścił się w polu widzenia.' },
        { type: 'p', text: 'Sposób celowania zależy od wariantu: model **SR** jest dostrojony do odczytu z bliska, więc wyśrodkuj celownik na kodzie i czytaj z niedużej odległości. Model **XR** ma rozszerzoną głębię ostrości, więc sięgnij po niego, gdy trzeba czytać kody z większej odległości — także w polu średnim.' },
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
          '**Temporary Streaming Presentation** — chwilowe przejście w tryb prezentacyjny z ustawianym czasem oczekiwania (domyślnie 10 sekund), po którym podświetlenie gaśnie.',
        ] },
        { type: 'p', text: 'Aby oszczędzać baterię, skaner po okresie bezczynności przechodzi w tryb obniżonego poboru mocy (zarządza tym funkcja Flexible Power Management). Skaner w bazie podczas ładowania nie przechodzi w ten tryb. Po uśpieniu naciśnij spust — usłyszysz sygnały rozruchu, po czym po krótkiej chwili (czas na połączenie radia) skaner będzie gotowy do pracy.' },
      ],
    },
    {
      title: 'Konfiguracja kodami kreskowymi i przywracanie ustawień',
      blocks: [
        { type: 'p', text: 'Skaner konfiguruje się, **skanując kolejno kody programujące** z instrukcji producenta. Gwiazdka (*) przy opcji oznacza ustawienie fabryczne. Część ustawień wymaga po wybraniu wartości zeskanowania kodu zapisu (Save).' },
        { type: 'p', text: 'Możesz zapisać **własne ustawienia domyślne (Custom Defaults)**: zeskanuj kod rozpoczynający zapis, potem wszystkie wybrane ustawienia, a na końcu kod zapisu. Od tej pory będą to Twoje ustawienia bazowe, do których łatwo wrócisz.' },
        { type: 'p', text: 'Do przywracania ustawień służą dwa kody:' },
        { type: 'list', items: [
          '**Reset the Custom Defaults** — przywraca zapisane ustawienia własne (a jeśli ich nie ma, ustawienia fabryczne); zalecany dla większości użytkowników;',
          '**Reset the Factory Defaults** — przywraca pełne ustawienia fabryczne, kasując wszelkie modyfikacje.',
        ] },
        { type: 'p', text: 'Uwaga przy zestawie z bazą: zeskanowanie kodu przywracającego może też rozłączyć skaner i bazę — aby odtworzyć łącze, włóż skaner z powrotem do bazy. Jeśli skaner ma czytać wyłącznie kody danych, a nie kody menu, zabezpiecz go ustawieniami zabezpieczenia kodów menu.' },
      ],
    },
    {
      title: 'Symbologie 1D i 2D',
      blocks: [
        { type: 'p', text: 'Granit Ultra 2105i obsługuje szeroki zestaw symbologii — kody liniowe **1D** (m.in. Codabar, Code 11, Code 128, Code 39, EAN/UPC, Interleaved 2 of 5), kody **2D** (np. QR Code, Data Matrix, PDF417, Aztec) oraz kody pocztowe.' },
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
        { type: 'p', text: 'Poprawny odczyt skaner potwierdza **zielonym błyskiem diody i sygnałem dźwiękowym**, a jeśli tak ustawisz — także **wibracją**. W zestawie bezprzewodowym potwierdzenie oznacza zarazem, że baza lub Access Point odebrały dane — system zapewnia dwukierunkową komunikację i rozpoznaje potwierdzenie odbioru (ACK). Jeśli skaner nie ma pewności, że dane dotarły, sygnalizuje błąd; należy wtedy sprawdzić, czy host je przyjął. Każdy z elementów sygnalizacji można dostroić kodami:' },
        { type: 'list', items: [
          '**Beeper – Good Read** — dźwięk po poprawnym odczycie można włączyć lub wyłączyć (sygnały błędów i menu pozostają słyszalne);',
          '**Beeper Volume / Pitch / Duration** — głośność, wysokość tonu i długość sygnału;',
          '**Number of Beeps** — liczba sygnałów po poprawnym odczycie oraz przy błędzie;',
          '**LED – Good Read** — zachowanie diody potwierdzającej odczyt;',
          '**Vibrate – Good Read** — potwierdzenie wibracją, przydatne w głośnym otoczeniu;',
          '**Good Read Delay** — minimalny odstęp między kolejnymi odczytami tego samego kodu, zapobiegający podwójnemu skanowaniu.',
        ] },
        { type: 'p', text: 'Baza ma przycisk **Find My Device** (wywołanie): naciśnięcie go sprawia, że przypisane skanery zaczynają piszczeć (3 krótkie i 1 długi sygnał), co ułatwia odnalezienie zgubionego skanera. Sygnał wyłączysz, naciskając spust pisczącego skanera lub przycisk Find My Device po raz drugi.' },
        { type: 'p', text: 'Poziom naładowania poza bazą sprawdzisz, przytrzymując spust przez 5 sekund: dioda **zielona** = 70–100%, **bursztynowa** = 31–69%, **czerwona** = 6–30%, **mrugająca czerwona** = poniżej 5%. Gdy bateria spadnie poniżej 15%, skaner mruga czerwoną diodą i sygnalizuje to dźwiękiem.' },
      ],
    },
    {
      title: 'Odczyt trudnych kodów i znakowania DPM',
      blocks: [
        { type: 'p', text: 'Skaner radzi sobie z kodami uszkodzonymi i niskiej jakości, ale jeśli odczyt sprawia trudność, sprawdź najpierw, czy kod nie jest rozmazany, porysowany, z ubytkami albo pokryty szronem lub kroplami wody, oraz czy dana symbologia jest w skanerze włączona.' },
        { type: 'p', text: 'Skaner obsługuje też bezpośrednie znakowanie części **DPM (Direct Part Marking)** — kody wybijane punktowo (dot-peen) oraz grawerowane i trawione na powierzchniach metalowych. Tryby dekodowania DPM włączaj tylko wtedy, gdy faktycznie czytasz takie oznaczenia — pozostawienie ustawienia domyślnego przyspiesza odczyt typowych kodów drukowanych.' },
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
        { type: 'p', text: 'Skaner po włączeniu wykonuje automatyczny autotest. Jeśli pracuje nieprawidłowo, zacznij od podstaw. Pomocny jest kod **Reset Scanner**, który ponownie uruchamia skaner i odtwarza łącze z bazą lub punktem Access Point.' },
        { type: 'p', text: 'Gdy skaner nie reaguje lub nie świeci celownik, sprawdź, czy:' },
        { type: 'list', items: [
          'bateria jest naładowana (włóż skaner do bazy i poczekaj na ładowanie) — niski poziom sygnalizują mrugnięcia czerwonej diody i podwójny sygnał poniżej 15%;',
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
