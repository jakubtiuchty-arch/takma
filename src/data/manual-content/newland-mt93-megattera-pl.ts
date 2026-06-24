import type { PolishManual } from '@/data/manuals'

export const newlandMt93MegatteraPl: PolishManual = {
  updatedAt: '2026-06-24',
  intro:
    'Najważniejsze informacje o obsłudze dotykowego terminala Newland MT93 Megattera Standard z systemem Android — od pierwszego uruchomienia i ładowania, przez karty SIM i microSD, skanowanie i konfigurację czytnika w aplikacji ScanSettings, po sieci, listę dozwolonych aplikacji, aktualizacje i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'Po włożeniu karty SIM i baterii oraz pełnym naładowaniu MT93 możesz włączyć terminal. **Przytrzymaj przycisk zasilania po prawej stronie obudowy**, aż pojawi się logo Android — inicjalizacja potrwa chwilę, zanim wyświetli się ekran główny.' },
        { type: 'p', text: 'Terminal ładujesz, podłączając go do gniazda zasilania dołączonym zasilaczem sieciowym albo kablem USB. Gdy poziom baterii spadnie poniżej **5%**, pełne naładowanie wyłączonego lub uśpionego terminala trwa około **3 godzin**. **Przed pierwszym użyciem ładuj baterię przez co najmniej 6 godzin.**' },
        { type: 'p', text: 'Stan ładowania sygnalizują diody na obudowie:' },
        { type: 'list', items: [
          '**niebieska dioda świeci** — bateria w pełni naładowana;',
          '**czerwona dioda świeci** — ładowanie w toku;',
          '**czerwona dioda miga** — ostrzeżenie o niskim poziomie baterii;',
          '**niebieska dioda miga** — przychodzące połączenie lub wiadomość.',
        ] },
        { type: 'p', text: 'Jeśli bateria zostanie całkowicie rozładowana, **naładuj terminal przez 15 minut przed ponownym włączeniem** przyciskiem zasilania. Podczas ładowania temperatura w pomieszczeniu musi przekraczać 0°C — w niższej terminal wstrzyma ładowanie ze względów bezpieczeństwa.' },
      ],
    },
    {
      title: 'Instalacja i wyjmowanie baterii',
      blocks: [
        { type: 'p', text: 'Aby włożyć baterię, przesuń zatrzask pokrywy baterii w położenie odblokowane i zdejmij pokrywę. Włóż baterię do komory tak, aby jej metalowe styki były skierowane w dół i pokrywały się ze stykami wewnątrz terminala.' },
        { type: 'p', text: 'Aby wyjąć baterię, przytrzymaj przycisk zasilania przez 5 sekund i wybierz „Wyłącz", aby wyłączyć terminal. Następnie przesuń zatrzask pokrywy w położenie odblokowane, zdejmij pokrywę i wyjmij baterię.' },
        { type: 'p', text: 'Do ładowania samej baterii poza terminalem służy osobna stacja na akumulator, a stacje dokujące można łączyć w zestaw do **czterech sztuk** — taki zestaw wymaga zasilacza 19 V / 3,2 A (kupowanego osobno).' },
      ],
    },
    {
      title: 'Karty SIM i microSD',
      blocks: [
        { type: 'p', text: 'MT93 obsługuje wyłącznie karty **nano-SIM** (12,3 × 8,8 × 0,7 mm) — większe formaty SIM i micro-SIM nie pasują do tacki.' },
        { type: 'p', text: 'Aby zainstalować kartę: przesuń zatrzask pokrywy baterii w położenie odblokowane i zdejmij pokrywę, wysuń tackę ze slotu SIM, włóż kartę nano-SIM (lub kartę microSD) do gniazda na tacce, a następnie delikatnie wsuń tackę do oporu, aż się zatrzaśnie.' },
      ],
    },
    {
      title: 'Włączanie, blokowanie i podstawy ekranu',
      blocks: [
        { type: 'p', text: 'Przycisk zasilania po prawej stronie obudowy obsługuje najważniejsze operacje:' },
        { type: 'list', items: [
          '**włączenie** — przytrzymaj zasilanie do pojawienia się logo Android;',
          '**ponowne uruchomienie** — przytrzymaj zasilanie do pojawienia się okna i wybierz „Uruchom ponownie";',
          '**wyłączenie** — przytrzymaj zasilanie i wybierz „Wyłącz";',
          '**blokada** — krótko naciśnij zasilanie; terminal blokuje się też automatycznie i przechodzi w uśpienie po ustawionym czasie bezczynności;',
          '**odblokowanie** — krótko naciśnij zasilanie, a następnie przesuń ekran palcem od dołu do góry i odblokuj wybranym wcześniej sposobem.',
        ] },
        { type: 'p', text: 'Sposób blokady ekranu (brak, wzór, PIN, hasło) ustawisz w **Ustawienia → Zabezpieczenia → Blokada ekranu**.' },
        { type: 'p', text: 'Ekran główny przeglądasz, przesuwając w lewo lub w prawo, a aplikację otwierasz jej stuknięciem. Listę wszystkich aplikacji wyświetlasz, przesuwając ekran palcem od dołu do góry. Aby umieścić ikonę aplikacji na ekranie głównym, przytrzymaj ją na liście i przeciągnij w wolne miejsce. Przeciągnięcie ikony na ekranie głównym do „X Usuń" zdejmuje tylko skrót, nie usuwając samej aplikacji.' },
      ],
    },
    {
      title: 'Pasek stanu i ikony powiadomień',
      blocks: [
        { type: 'p', text: 'Ikony w pasku stanu u góry ekranu informują o pracy terminala — między innymi o sile sygnału, ładowaniu baterii, włączonym Wi-Fi (WLAN) i Bluetooth, połączeniu i debugowaniu USB, trybie samolotowym, aktywnym tetheringu i punkcie dostępu, ustalaniu pozycji (GPS), trybie oszczędzania energii, trybie „Nie przeszkadzać", włączonej wibracji oraz o nieodebranych połączeniach i nowych wiadomościach.' },
      ],
    },
    {
      title: 'Połączenie z komputerem i przenoszenie plików (MTP)',
      blocks: [
        { type: 'p', text: 'Aby przenieść pliki między terminalem a komputerem:' },
        { type: 'list', ordered: true, items: [
          'połącz port USB Type-C w MT93 z komputerem dołączonym kablem USB;',
          'włącz terminal, otwórz pasek powiadomień (przesuń ekran palcem od góry do dołu), stuknij „Android System", a następnie „Ładowanie tego urządzenia przez USB, stuknij, aby uzyskać więcej opcji";',
          'wybierz tryb **„Przesyłanie plików"**, a w komputerze odszukaj nowy napęd MT93 i otwórz go, aby zarządzać plikami.',
        ] },
      ],
    },
    {
      title: 'Instalowanie i usuwanie aplikacji',
      blocks: [
        { type: 'p', text: 'Nową aplikację zainstalujesz na kilka sposobów:' },
        { type: 'list', items: [
          'pobierając plik **APK** ze sklepu z aplikacjami i instalując go;',
          'kopiując pakiet instalacyjny na kartę **microSD** lub przez komputer, a następnie uruchamiając go w menedżerze plików;',
          'instalując aplikacje Newland za pomocą narzędzia NInstaller zainstalowanego na komputerze.',
        ] },
        { type: 'p', text: 'Aplikację usuniesz, przesuwając ekran palcem od dołu do góry do listy aplikacji, przytrzymując jej ikonę aż do pojawienia się „Informacje o aplikacji" i wybierając „Odinstaluj". Aplikacji wbudowanych w system nie da się odinstalować.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'Przy odczycie **kodu 1D** dobierz kąt i odległość tak, aby wiązka celownicza była mniej więcej **8 mm dłuższa niż sam kod** — wtedy obejmuje go w całości.' },
        { type: 'p', text: 'Przy odczycie **kodu 2D** skieruj lampkę celowniczą MT93 na środek kodu i przesuwaj terminal, aż znajdziesz właściwą odległość odczytu. Najlepsze kąty skanowania to: odchylenie poziome (skew) poniżej 45° (najlepiej 0°), pochylenie (pitch) poniżej 45° (najlepiej 5–20°) oraz obrót (roll) w dowolnym zakresie 0–360°.' },
      ],
    },
    {
      title: 'Aplikacja ScanSettings — konfiguracja czytnika',
      blocks: [
        { type: 'p', text: 'Skaner MT93 konfigurujesz w aplikacji **ScanSettings**, otwieranej z ekranu głównego. To w niej pozycją „Enable scan" włączasz i wyłączasz odczyt oraz ustawiasz wszystkie parametry pracy czytnika pod własne potrzeby.' },
        { type: 'p', text: 'Skanowanie wyzwalają boczne klawisze skanowania po lewej i prawej stronie obudowy oraz spust rękojeści pistoletowej, jeśli jest dołączona — każdy z nich włączasz i wyłączasz osobno. Dostępne są cztery **tryby skanowania**:' },
        { type: 'list', items: [
          '**Level** — odczyt trwa, dopóki trzymasz wciśnięty klawisz skanowania;',
          '**Continuous** — ciągły odczyt kolejnych kodów, z parametrem odstępu między sesjami (scan interval);',
          '**Pulse** — sesja odczytu trwa do upływu wyznaczonego czasu;',
          '**Delay** (odczyt po zwolnieniu) — celujesz przy wciśniętym klawiszu, a odczyt zaczyna się po jego zwolnieniu; zalecany razem z odczytem obszaru centralnego (Acuscan), gdy kody leżą blisko siebie.',
        ] },
        { type: 'p', text: 'W ScanSettings ustawisz też **prefiks i sufiks** (wartości szesnastkowe, np. „0A" to znak nowej linii, „0D" — powrót karetki), sygnalizację poprawnego odczytu (dźwięk, wibracja, niebieska dioda) oraz kodowanie znaków (AUTO, UTF-8, GBK, ISO-8859-1, windows-1251 lub inne).' },
        { type: 'p', text: 'Funkcja edycji danych (Data Edit) pozwala przetworzyć odczytany kod skryptem — wczytanym z pliku w terminalu albo zeskanowanym jako kod 2D. W sekcji symbologii włączasz i wyłączasz poszczególne kody 1D i 2D oraz ustawiasz parametry zaawansowane: poziom bezpieczeństwa odczytu, odczyt wielu kodów naraz (Multiple Barcodes), redukcję szumów, poziom ekspozycji i oświetlenia, plan oszczędzania energii (czytnik gasnie po 3 sekundach w trybie Power Saving lub po 15 sekundach w trybie High-performance) oraz odczyt dokumentów paszportowych OCR zgodnych z ICAO Doc 9303 (TD1/TD2/TD3).' },
      ],
    },
    {
      title: 'Tryby wyjścia danych skanera',
      blocks: [
        { type: 'p', text: 'W aplikacji ScanSettings wybierzesz jeden z trzech sposobów przekazywania zeskanowanych danych:' },
        { type: 'list', items: [
          '**Symulacja klawiatury (Simulate keystroke)** — dane trafiają do bufora klawiatury, jakby zostały wpisane ręcznie; możesz ustawić odstęp 0–100 ms między znakami;',
          '**Wyjście przez API (Output via API)** — aplikacja odbiera dane jako komunikat systemowy (broadcast) z określoną akcją i wartością EXTRA;',
          '**Wpisanie wprost w polu tekstowym (Fill in EditText directly)** — dane pojawiają się w bieżącym położeniu kursora.',
        ] },
        { type: 'p', text: 'Dodatkowo opcja nadpisywania czyści pole tekstowe przed wstawieniem nowego odczytu (przy symulacji klawiatury i wpisywaniu w polu tekstowym), opcja wysyłania zdarzenia Enter dodaje klawisz Enter po każdym kodzie, a funkcja klawiatury wirtualnej pozwala wysłać akcję typu „done", „search" czy „previous".' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'Zanim użyjesz urządzenia Bluetooth z MT93, najpierw je sparuj:' },
        { type: 'list', ordered: true, items: [
          'ustaw urządzenie Bluetooth jako widoczne dla MT93;',
          'wejdź w **Ustawienia → Połączone urządzenia → Preferencje połączeń → Bluetooth** i włącz Bluetooth, aby wyszukać dostępne urządzenia;',
          'wybierz urządzenie z wyników wyszukiwania, aby je sparować;',
          'jeśli pojawi się prośba, wpisz kod parowania i potwierdź, albo — gdy kod podawany jest automatycznie — stuknij „Paruj".',
        ] },
        { type: 'p', text: 'Sparowane urządzenie zmienisz lub rozłączysz, stukając jego nazwę: edytujesz nazwę („Zmień nazwę") albo usuwasz powiązanie („Zapomnij"). Połączenie działa lepiej, gdy między urządzeniami nie ma przeszkód.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Aby połączyć się z siecią Wi-Fi:' },
        { type: 'list', ordered: true, items: [
          'wejdź w **Ustawienia → Sieć i internet → Internet → Wi-Fi** i włącz Wi-Fi, aby terminal wyszukał dostępne sieci;',
          'wybierz sieć z listy i wpisz hasło;',
          'stuknij „Połącz".',
        ] },
        { type: 'p', text: 'Parametry połączenia, taryfę (Metered), serwer proxy oraz ustawienia IP zmienisz, wykonując dwa pierwsze kroki, a następnie wybierając „Opcje zaawansowane". Adres IP możesz pobierać automatycznie (DHCP — usługa musi być włączona w routerze) albo wpisać ręcznie jako statyczny, zgodny z zakresem adresów routera.' },
        { type: 'p', text: 'Nową sieć dodasz w **Sieć i internet → Internet → Dodaj sieć** — przez zeskanowanie kodu QR albo ręcznie, podając nazwę sieci, typ zabezpieczeń (m.in. WEP, WPA/WPA2-Personal, WPA3-Personal, WPA3-Enterprise) i hasło. W preferencjach Wi-Fi możesz też włączyć automatyczne łączenie z zapisanymi sieciami oraz powiadomienia o sieciach publicznych.' },
      ],
    },
    {
      title: 'Sieć komórkowa i dane mobilne',
      blocks: [
        { type: 'p', text: 'Aby korzystać z internetu przez sieć komórkową, w MT93 musi być zainstalowana karta SIM. Terminal obsługuje sieci **4G, 3G i 2G**. Gdy Wi-Fi jest niedostępne lub wyłączone, terminal łączy się z internetem przez dane komórkowe.' },
        { type: 'p', text: 'Dane mobilne włączysz, otwierając listę skrótów (przesuń ekran od góry do dołu) i stukając kafelek sieci komórkowej, albo wybierając **Ustawienia → Sieć i internet** i włączając „Sieć komórkowa".' },
        { type: 'p', text: 'Jeśli mimo aktywnych danych nie ma połączenia z internetem, popraw ustawienia **APN**: wejdź w **Ustawienia → Sieć i internet → Sieć komórkowa → Zaawansowane → Nazwy punktów dostępu**, dodaj nowy wpis (ikona w prawym górnym rogu lub stuknięcie operatora) i wprowadź parametry APN otrzymane od operatora. Po zapisaniu wróć klawiszem powrotu i wybierz dodany APN.' },
      ],
    },
    {
      title: 'Aparat, GPS i NFC',
      blocks: [
        { type: 'p', text: 'Aparat uruchamiasz aplikacją Camera. Przyciskami na ekranie przełączasz między kamerą przednią a tylną, włączasz lampę błyskową oraz robisz zdjęcie lub nagrywasz film, a w ustawieniach aparatu dostosujesz między innymi tryb sceny, samowyzwalacz, rozmiar zdjęcia, balans bieli, ISO i redukcję migotania.' },
        { type: 'p', text: 'Lokalizację (GPS) włączasz w **Ustawienia → Lokalizacja**.' },
        { type: 'p', text: 'Aby włączyć **NFC**, wejdź w **Ustawienia → Połączone urządzenia → Preferencje połączeń → NFC** i włącz tę funkcję. Następnie możesz zainstalować aplikację do obsługi tagów NFC, by je odczytywać i zapisywać.' },
      ],
    },
    {
      title: 'Whitelist Manager — lista dozwolonych aplikacji',
      blocks: [
        { type: 'p', text: 'Aplikacja **Whitelist Manager** pozwala określić, które aplikacje użytkownik może zainstalować na MT93 — to praktyczne narzędzie do ograniczenia terminala wyłącznie do programów potrzebnych w pracy.' },
        { type: 'p', text: 'Aby z niej skorzystać, otwórz Whitelist Manager z ekranu głównego, wpisz hasło (domyślne: **112233**) i stuknij „Login", a następnie skonfiguruj listę dozwolonych aplikacji według potrzeb.' },
      ],
    },
    {
      title: 'Aktualizacja systemu',
      blocks: [
        { type: 'p', text: 'System aktualizujesz na dwa sposoby. **Aktualizacja online**: otwórz aplikację aktualizacji systemu i stuknij „Sprawdź aktualizacje" (terminal musi być połączony z siecią).' },
        { type: 'p', text: '**Aktualizacja lokalna**: skopiuj plik aktualizacji (ZIP) do pamięci terminala lub na kartę microSD przez kabel USB w trybie przesyłania plików, otwórz ekran aktualizacji systemu, wybierz w prawym górnym rogu „Aktualizacja lokalna" (dla karty: „Pamięć zewnętrzna"), wskaż plik ZIP i wybierz „NEXTREBOOT" albo „UPDATE".' },
        { type: 'p', text: 'Do aktualizacji używaj wyłącznie narzędzi i plików dostarczonych przez producenta. Wgrywanie cudzego oprogramowania (ROM) lub łamanie zabezpieczeń grozi awarią, utratą danych i utratą gwarancji.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'W Ustawieniach dostosujesz datę i czas (System → Data i czas), jasność, ciemny motyw i tryb nocny (Wyświetlacz), dzwonki i dźwięki powiadomień (Dźwięk) oraz język i metodę wprowadzania (System → Języki i wprowadzanie).' },
        { type: 'p', text: '**Reset fabryczny** wykonasz przez **Ustawienia → System → Opcje resetowania → „Usuń wszystkie dane (przywróć dane fabryczne)"**. Operacja kasuje wszystkie dane osobiste z pamięci wewnętrznej (np. muzykę i zdjęcia), więc traktuj ją jako ostateczność.' },
      ],
    },
    {
      title: 'Konserwacja i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Używaj wyłącznie dołączonego zasilacza i baterii Newland. Bateria wytrzymuje ponad **500 cykli** ładowania i rozładowania — gdy czas pracy znacznie się skróci, wymień ją na nową. Nie doładowuj w pełni naładowanej baterii i nie wrzucaj baterii do ognia; baterii spuchniętej lub uszkodzonej natychmiast przestań używać, a zużyte oddawaj do recyklingu.' },
        { type: 'p', text: 'Najlepsza temperatura ładowania to **5–45°C**; poniżej 0°C terminal nie ładuje. Przy dłuższym przechowywaniu wyłącz terminal i doładowuj go co najmniej raz na pół roku, najlepiej utrzymując poziom baterii w zakresie 30–50%.' },
        { type: 'p', text: 'Czyść terminal wyłącznie suchą, miękką ściereczką — wilgotna ściereczka, benzen, rozcieńczalnik czy inne lotne chemikalia mogą uszkodzić obudowę. Regularnie czyść okienko skanera (nie dotykaj go palcami), nie naciskaj ekranu dotykowego ostrymi przedmiotami i nie kładź terminala ekranem do dołu.' },
        { type: 'p', text: 'Typowe problemy i ich rozwiązania:' },
        { type: 'list', items: [
          'dioda ładowania nie świeci — upewnij się, że zasilacz jest poprawnie podłączony;',
          'ładowanie zatrzymane lub powolne w niskiej temperaturze — przenieś terminal do cieplejszego otoczenia i ładuj ponownie;',
          'wyraźnie krótki czas pracy baterii — sprawdź i doładuj baterię, a jeśli problem trwa, skontaktuj się z serwisem;',
          'brak komunikacji USB — sprawdź pewność połączenia kabla i czystość gniazda USB;',
          'brak obrazu na ekranie — upewnij się, że terminal jest włączony i naładowany; w trybie uśpienia obudź go przyciskiem zasilania;',
          'terminal się nie włącza — naładuj go przez chwilę dołączonym zasilaczem i włącz ponownie;',
          'zawieszenie systemu — może je powodować pobrana aplikacja lub nagła utrata zasilania; **przytrzymaj przycisk zasilania przez 10 sekund** i uruchom terminal ponownie.',
        ] },
        { type: 'p', text: 'Gdy terminal nie włącza się po nagłej utracie zasilania, wyjmij i ponownie włóż baterię, aby go zresetować. Nie rozbieraj terminala ani akcesoriów samodzielnie — naprawy wykonują wyłącznie autoryzowane serwisy. W razie przegrzania, dymu lub nietypowego zapachu podczas ładowania natychmiast odłącz zasilanie i skontaktuj się z serwisem.' },
      ],
    },
  ],
}
