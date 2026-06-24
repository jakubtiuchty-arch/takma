import type { PolishManual } from '@/data/manuals'

export const newlandN7CachalotProIiPl: PolishManual = {
  updatedAt: '2026-06-24',
  intro:
    'Najważniejsze informacje o obsłudze terminala Newland N7 Cachalot Pro II z systemem Android — od pierwszego uruchomienia i ładowania, przez instalację kart, skanowanie i konfigurację czytnika w aplikacji ScanSettings, po sieci, aktualizacje i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Po włożeniu karty SIM i baterii oraz pełnym naładowaniu N7 możesz włączyć terminal. **Przytrzymaj przycisk zasilania przez około 3 sekundy**, aż pojawi się logo Android — inicjalizacja potrwa chwilę, zanim wyświetli się ekran główny.' },
        { type: 'p', text: 'Terminal ładujesz, podłączając go do gniazda zasilania dołączonym zasilaczem sieciowym lub kablem USB. Diody na obudowie sygnalizują stan: zielona oznacza pełne naładowanie, czerwona — ładowanie w toku, a stale migająca czerwona — ostrzeżenie o niskim poziomie baterii.' },
        { type: 'p', text: 'Działanie poziomu baterii warto znać na pamięć:' },
        { type: 'list', items: [
          'przy **20%** ikona baterii w pasku powiadomień zaczyna migać;',
          'przy **10%** terminal sygnalizuje to dźwiękiem i komunikatem;',
          'gdy bateria się wyczerpie, terminal wyda sygnał i wyłączy się automatycznie.',
        ] },
        { type: 'p', text: 'Jeśli bateria zostanie całkowicie rozładowana, **naładuj terminal przez około 15 minut przed ponownym włączeniem** przyciskiem zasilania.' },
      ],
    },
    {
      title: 'Instalacja baterii',
      blocks: [
        { type: 'p', text: 'Aby włożyć baterię: przesuń zatrzask pokrywy baterii w położenie odblokowane i zdejmij pokrywę. Włóż baterię do komory tak, aby jej styki metalowe były skierowane w dół i pokrywały się ze stykami wewnątrz terminala. Załóż pokrywę i przesuń zatrzask w położenie zablokowane.' },
        { type: 'p', text: 'Aby wyjąć baterię: przytrzymaj przycisk zasilania przez 2 sekundy i wybierz „Wyłącz", aby wyłączyć terminal. Następnie przesuń zatrzask pokrywy w położenie odblokowane, zdejmij pokrywę i wyjmij baterię.' },
      ],
    },
    {
      title: 'Instalacja karty SIM i microSD',
      blocks: [
        { type: 'p', text: 'N7 ma **dwa sloty na karty** (slot 1 i slot 2). Obsługują kombinację dwóch kart nano-SIM albo nano-SIM i karty microSD. Karta microSD może mieć pojemność do 128 GB, a **oba sloty obsługują sieci 2G, 3G i 4G**.' },
        { type: 'p', text: 'Aby zainstalować kartę: otwórz osłonę slotu SIM/microSD i wysuń tackę ze slotu. Włóż kartę do odpowiedniego gniazda na tacce stykami metalowymi skierowanymi w dół, a następnie delikatnie wsuń tackę do oporu, aż się zatrzaśnie, i zamknij osłonę.' },
        { type: 'p', text: 'Aby wyjąć kartę: otwórz osłonę slotu i wysuń tackę za pomocą dołączonego bolca (szpilki), po czym wyjmij kartę.' },
      ],
    },
    {
      title: 'Podstawy systemu Android i przycisk zasilania',
      blocks: [
        { type: 'p', text: 'Przycisk zasilania obsługuje najważniejsze operacje:' },
        { type: 'list', items: [
          '**ponowne uruchomienie** — przytrzymaj zasilanie do pojawienia się okna i wybierz „Uruchom ponownie";',
          '**wyłączenie** — przytrzymaj zasilanie i wybierz „Wyłącz";',
          '**zrzut ekranu** — przytrzymaj zasilanie i wybierz „Zrzut ekranu";',
          '**blokada** — krótko naciśnij zasilanie; terminal blokuje się też automatycznie po ustawionym czasie bezczynności;',
          '**odblokowanie** — krótko naciśnij zasilanie, a następnie przesuń ekran palcem od dołu do góry jednym płynnym ruchem.',
        ] },
        { type: 'p', text: 'Gdy terminal się zawiesi i nie reaguje, **przytrzymaj przycisk zasilania przez ponad 10 sekund**, aby wymusić ponowne uruchomienie.' },
        { type: 'p', text: 'Ekran główny przeglądasz, przesuwając w lewo lub w prawo, a powrót do niego zapewnia przycisk ekranu głównego. Listę wszystkich aplikacji otwierasz, przesuwając ekran główny palcem od dołu do góry. Aby umieścić ikonę aplikacji na ekranie głównym, przytrzymaj ją na liście i przeciągnij w wolne miejsce.' },
      ],
    },
    {
      title: 'Pasek stanu i powiadomienia',
      blocks: [
        { type: 'p', text: 'Ikony w pasku stanu u góry ekranu informują o pracy terminala — między innymi o sile sygnału, stanie baterii, trybie przesyłania danych, włączonym Bluetooth i Wi-Fi, aktywnej sieci komórkowej, trwającym połączeniu, trybie samolotowym oraz przesyłaniu i pobieraniu danych.' },
        { type: 'p', text: 'Pasek powiadomień otwierasz, przesuwając ekran główny palcem od góry do dołu. Łączy on listę skrótów oraz opcje USB. Na liście skrótów włączasz i wyłączasz funkcje takie jak Wi-Fi, Bluetooth czy latarka, a w opcjach USB ustawiasz preferencje połączenia USB oraz debugowanie USB.' },
      ],
    },
    {
      title: 'Klawisze i fizyczna klawiatura',
      blocks: [
        { type: 'p', text: 'N7 wyposażono w **fizyczną klawiaturę** z klawiszami nawigacyjnymi (góra/dół/lewo/prawo), klawiszem skanowania, klawiszem ekranu głównego, klawiszem kasowania, klawiszami numerycznymi, klawiszem przełączania funkcji, klawiszem zmiany metody wprowadzania, klawiszem Enter, klawiszem powrotu oraz klawiszem zdefiniowanym przez użytkownika. Skanowanie wyzwalają trzy klawisze: przedni klawisz skanowania oraz boczne klawisze lewy i prawy.' },
        { type: 'p', text: 'Aplikacja **Key Map** pozwala przemapować klawisze terminala na inny klawisz lub na skrót uruchamiający aplikację. Po jej otwarciu wybierz klawisz, wskaż docelowy klawisz (zakładka „keys") albo aplikację (zakładka „apps"). Opcja „Clear All Remap" przywraca ustawienia domyślne.' },
      ],
    },
    {
      title: 'Połączenie z komputerem i przenoszenie plików (MTP)',
      blocks: [
        { type: 'p', text: 'Aby przenieść pliki między terminalem a komputerem:' },
        { type: 'list', ordered: true, items: [
          'połącz port USB w N7 z komputerem dołączonym kablem USB;',
          'włącz terminal, otwórz pasek powiadomień (przesuń od góry), stuknij „Ładowanie urządzenia przez USB", a potem „Stuknij, aby uzyskać więcej opcji";',
          'wybierz tryb **„Przesyłanie plików"**, a w komputerze odszukaj nowy napęd N7 i otwórz go, aby zarządzać plikami.',
        ] },
        { type: 'p', text: 'Jeśli komputer nie wykrywa napędu N7, włącz tryb dewelopera: wejdź w **Ustawienia → Informacje o telefonie** i stuknij „Numer kompilacji" **cztery razy**, a następnie w **System → Zaawansowane → Opcje programisty** włącz **debugowanie USB** i potwierdź. W razie potrzeby zaktualizuj sterownik **MTP** w Menedżerze urządzeń komputera, wskazując „MTP USB Device".' },
      ],
    },
    {
      title: 'Instalowanie i usuwanie aplikacji',
      blocks: [
        { type: 'p', text: 'Nową aplikację zainstalujesz na kilka sposobów:' },
        { type: 'list', items: [
          'pobierając plik **APK** ze sklepu z aplikacjami i instalując go;',
          'kopiując pakiet instalacyjny na kartę **microSD** lub przez komputer, a następnie uruchamiając go w menedżerze plików;',
          'korzystając z asystenta mobilnego zainstalowanego na komputerze.',
        ] },
        { type: 'p', text: 'Jeśli przy instalacji pojawi się komunikat o blokadzie aplikacji z nieznanego źródła, stuknij „Ustawienia", włącz opcję „Zezwalaj z tego źródła" i ponów instalację.' },
        { type: 'p', text: 'Aplikację usuniesz, przytrzymując jej ikonę na liście aplikacji aż do pojawienia się kosza i przeciągając ją do niego, albo wybierając **Ustawienia → Aplikacje → wybrana aplikacja → „Odinstaluj"**.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'Przy odczycie **kodu 1D** dobierz kąt i odległość tak, aby wiązka celownicza była mniej więcej **8 mm dłuższa niż sam kod** — wtedy obejmuje go w całości.' },
        { type: 'p', text: 'Przy odczycie **kodu 2D** skieruj lampkę celowniczą N7 na środek kodu i przesuwaj terminal, aż znajdziesz właściwą odległość odczytu. Najlepsze kąty skanowania to: odchylenie poziome (skew) poniżej 45° (najlepiej 0°), pochylenie (pitch) poniżej 45° (najlepiej 5–20°) oraz obrót (roll) w dowolnym zakresie 0–360°.' },
      ],
    },
    {
      title: 'Aplikacja ScanSettings — konfiguracja czytnika',
      blocks: [
        { type: 'p', text: 'Skaner N7 konfigurujesz w aplikacji **ScanSettings**, otwieranej z ekranu głównego. To w niej włączasz i wyłączasz odczyt (pozycja „Enable scan") oraz ustawiasz wszystkie parametry pracy czytnika pod własne potrzeby.' },
        { type: 'p', text: 'Tryb wyzwalania określa, które klawisze uruchamiają skanowanie — przedni klawisz skanowania, boczne klawisze (lewy/prawy) oraz spust rękojeści pistoletowej, jeśli jest dołączona. Dostępne są cztery **tryby skanowania**:' },
        { type: 'list', items: [
          '**Level** — odczyt trwa, dopóki trzymasz wciśnięty spust;',
          '**Continuous** — ciągły odczyt kolejnych kodów, z parametrem odstępu między sesjami;',
          '**Pulse** — sesja odczytu trwa do upływu wyznaczonego czasu;',
          '**Delay** (odczyt po zwolnieniu) — celujesz przy wciśniętym spuście, a odczyt zaczyna się po jego zwolnieniu; zalecany razem z odczytem obszaru centralnego, gdy kody leżą blisko siebie.',
        ] },
        { type: 'p', text: 'W ScanSettings ustawisz też **prefiks i sufiks** (wartości szesnastkowe, np. „0A" to znak nowej linii, „0D" — powrót karetki), sygnalizację poprawnego odczytu (dźwięk, wibracja, niebieska dioda), kodowanie znaków (AUTO, UTF-8, GBK, ISO-8859-1 lub inne), edycję danych skryptem oraz włączane symbologie kodów 1D i 2D wraz z ustawieniami zaawansowanymi (m.in. Acuscan, redukcja szumów, plan oszczędzania energii, odczyt OCR dokumentów paszportowych).' },
      ],
    },
    {
      title: 'Tryby wyjścia danych skanera',
      blocks: [
        { type: 'p', text: 'W aplikacji ScanSettings wybierzesz jeden z trzech sposobów przekazywania zeskanowanych danych:' },
        { type: 'list', items: [
          '**Symulacja klawiatury (keystroke)** — dane trafiają do bufora klawiatury, jakby zostały wpisane ręcznie; możesz ustawić odstęp 0–100 ms między znakami;',
          '**Wyjście przez API (broadcast/intent)** — aplikacja odbiera dane jako komunikat systemowy (broadcast);',
          '**Wpisanie wprost w polu tekstowym** — dane pojawiają się w bieżącym położeniu kursora.',
        ] },
        { type: 'p', text: 'Dodatkowo opcja nadpisywania czyści pole tekstowe przed wstawieniem nowego odczytu (przy symulacji klawiatury i wpisywaniu w polu tekstowym), opcja wysyłania zdarzenia Enter dodaje klawisz Enter po każdym kodzie, a funkcja klawiatury wirtualnej pozwala wysłać akcję typu „done", „search" czy „previous".' },
      ],
    },
    {
      title: 'NFC',
      blocks: [
        { type: 'p', text: 'Aby włączyć **NFC**, wejdź w **Ustawienia → Połączone urządzenia → Preferencje połączeń** i włącz „NFC". Następnie możesz zainstalować aplikację do obsługi tagów, by je odczytywać i zapisywać.' },
        { type: 'p', text: 'Najlepszy obszar odczytu NFC w N7 znajduje się **z tyłu, na pokrywie baterii** — to tam przykładaj tagi i karty.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Aby połączyć się z siecią Wi-Fi:' },
        { type: 'list', ordered: true, items: [
          'wejdź w **Ustawienia → Sieć i internet → Wi-Fi** i włącz Wi-Fi, aby terminal wyszukał dostępne sieci;',
          'wybierz sieć z listy i wpisz hasło;',
          'stuknij „Połącz".',
        ] },
        { type: 'p', text: 'Ustawienia adresu IP zmienisz, wykonując dwa pierwsze kroki łączenia z siecią, a następnie wybierając „Opcje zaawansowane → DHCP" i żądaną opcję.' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'Zanim użyjesz urządzenia Bluetooth z N7, najpierw je sparuj:' },
        { type: 'list', ordered: true, items: [
          'ustaw urządzenie Bluetooth jako widoczne dla N7;',
          'wejdź w **Ustawienia → Połączone urządzenia → Preferencje połączeń → Bluetooth** i włącz Bluetooth, aby wyszukać dostępne urządzenia;',
          'wybierz urządzenie z wyników wyszukiwania, aby je sparować;',
          'jeśli pojawi się prośba, wpisz kod parowania i potwierdź, albo — gdy kod podawany jest automatycznie — stuknij „Paruj".',
        ] },
        { type: 'p', text: 'Sparowane urządzenie zmienisz lub rozłączysz, stukając ikonę obok jego nazwy: edytujesz nazwę („Zmień nazwę") albo usuwasz powiązanie („Zapomnij"). Połączenie działa lepiej, gdy między urządzeniami nie ma przeszkód.' },
      ],
    },
    {
      title: 'Sieć komórkowa i dane mobilne',
      blocks: [
        { type: 'p', text: 'Aby korzystać z internetu przez sieć komórkową, w N7 musi być zainstalowana karta SIM. **Oba sloty obsługują sieci 4G**, a gdy włożone są dwie karty, terminal poprosi o wybór karty do transmisji danych. W ustawieniach kart SIM sprawdzisz informacje o operatorze i aktywujesz karty, a dla połączeń i wiadomości ustawisz kartę domyślną lub wybór za każdym razem.' },
        { type: 'p', text: 'Dane mobilne włączysz, otwierając pasek skrótów (przesuń ekran od góry) i stukając kafelek danych komórkowych, albo wybierając **Ustawienia → Sieć i internet → Sieć komórkowa** i włączając „Dane mobilne".' },
        { type: 'p', text: 'Jeśli mimo aktywnych danych nie ma połączenia z internetem, popraw ustawienia **APN**: wejdź w **Ustawienia → Sieć i internet → Sieć komórkowa → Zaawansowane → Nazwy punktów dostępu**, dodaj nowy wpis (ikona w prawym górnym rogu lub stuknięcie operatora) i wprowadź parametry APN otrzymane od operatora. Po zapisaniu wróć klawiszem powrotu i wybierz dodany APN.' },
      ],
    },
    {
      title: 'Aktualizacja systemu',
      blocks: [
        { type: 'p', text: 'System aktualizujesz na dwa sposoby. **Aktualizacja online**: otwórz aplikację aktualizacji systemu i stuknij „Sprawdź aktualizacje" — terminal musi być połączony z siecią.' },
        { type: 'p', text: '**Aktualizacja lokalna**: skopiuj plik aktualizacji (ZIP) do pamięci terminala lub na kartę microSD przez kabel USB w trybie przesyłania plików, otwórz ekran aktualizacji systemu, wybierz w prawym górnym rogu „Aktualizacja lokalna" (dla karty: „Pamięć zewnętrzna"), wskaż plik ZIP i wybierz „NEXTREBOOT" albo „UPDATE".' },
        { type: 'p', text: 'Do aktualizacji używaj wyłącznie narzędzi i plików dostarczonych przez producenta. Wgrywanie cudzego oprogramowania (ROM) lub łamanie zabezpieczeń grozi awarią, utratą danych i utratą gwarancji.' },
      ],
    },
    {
      title: 'Inne ustawienia i przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'W Ustawieniach dostosujesz jasność i tapetę (Wyświetlacz), zarządzanie aplikacjami i pamięcią (Aplikacje i powiadomienia), lokalizację (włączenie GPS), blokadę ekranu (brak, przesunięcie, wzór, PIN lub hasło), język i metodę wprowadzania oraz datę i czas (przy ręcznym ustawianiu najpierw wyłącz „Używaj czasu z sieci"). W sekcji „Informacje o telefonie" sprawdzisz dane takie jak IMEI, numer seryjny i adres MAC.' },
        { type: 'p', text: 'W wersjach z baterią podtrzymującą funkcja „Battery backup" (System → Misc Setting) pozwala bezpiecznie wymienić baterię główną bez utraty danych — po jej włączeniu zdjęcie pokrywy przełącza system w tryb uśpienia.' },
        { type: 'p', text: '**Reset fabryczny** wykonasz przez **System → Zaawansowane → Opcje resetowania → „Usuń wszystkie dane (przywróć dane fabryczne)"**. Operacja kasuje wszystkie dane osobiste z pamięci wewnętrznej, więc traktuj ją jako ostateczność.' },
      ],
    },
    {
      title: 'Konserwacja i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Używaj wyłącznie dołączonego zasilacza i baterii. Bateria wytrzymuje ponad **500 cykli** ładowania i rozładowania — gdy czas pracy znacznie się skróci, wymień ją na nową. Nie doładowuj w pełni naładowanej baterii i nie wrzucaj baterii do ognia; zużyte oddawaj do recyklingu.' },
        { type: 'p', text: 'Przed czyszczeniem wyłącz terminal i odłącz go od ładowarki. Obudowę i okienko skanera czyść miękką, antystatyczną ściereczką; nie stosuj detergentów ani środków chemicznych (np. alkoholu, benzenu). Baterię przechowuj w temperaturze od -20°C do 60°C, a ładuj w temperaturze otoczenia od 0°C do 45°C.' },
        { type: 'p', text: 'Typowe problemy i ich rozwiązania:' },
        { type: 'list', items: [
          'terminal się nie włącza — sprawdź baterię; jeśli jest rozładowana, **ładuj 15 minut przed włączeniem**, a wadliwą baterię wymień i upewnij się, że jest poprawnie włożona;',
          'brak wiązki celowniczej lub brak odczytu mimo wiązki — uruchom terminal ponownie; jeśli okienko skanera jest pęknięte, zgłoś się do serwisu;',
          'błędna reakcja na klawisze lub zawieszanie systemu — sprawdź, czy nie powoduje tego aplikacja innej firmy, ewentualnie przywróć ustawienia fabryczne lub zaktualizuj system;',
          'brak obrazu na ekranie — upewnij się, że terminal jest włączony i naładowany; w trybie uśpienia obudź go przyciskiem zasilania.',
        ] },
        { type: 'p', text: 'Nie rozbieraj terminala ani akcesoriów samodzielnie — naprawy wykonują wyłącznie autoryzowane serwisy. W razie przegrzania, dymu lub nietypowego zapachu podczas ładowania natychmiast odłącz zasilanie i skontaktuj się z serwisem.' },
      ],
    },
  ],
}
