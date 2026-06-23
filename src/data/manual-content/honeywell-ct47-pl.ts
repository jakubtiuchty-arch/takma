import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell CT47 po polsku.
 * Opracowanie TAKMA na podstawie oficjalnej dokumentacji producenta (User Guide,
 * 130 stron) — własnym głosem, w skondensowanej, praktycznej formie.
 */
export const honeywellCt47Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze terminala Honeywell CT47 po polsku — od pierwszego uruchomienia, przez skanowanie, telefon i sieci, po aktualizacje, resety i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'CT47 trafia do Ciebie z baterią naładowaną tylko częściowo. Przed pierwszym użyciem ładuj go **co najmniej 3 godziny** w stacji lub ładowarce z serii CT40/CT45. Praca podczas ładowania wydłuża czas pełnego naładowania. Terminal można też ładować kablem przez **złącze USB-C** ze źródła dającego minimum 5 V i 0,5 A.' },
        { type: 'p', text: 'Aby włączyć urządzenie, **przytrzymaj przycisk zasilania przez około 3 sekundy** i puść. Przy pierwszym starcie pojawi się ekran powitalny — możesz przejść konfigurację w kreatorze (język, Wi-Fi, data i strefa czasowa, nazwa terminala, zabezpieczenia) albo zeskanować kod konfiguracyjny, co przyspiesza wdrożenie wielu sztuk jednocześnie (Wi-Fi Staging).' },
        { type: 'p', text: 'Po zakończeniu wstępnej konfiguracji ekran powitalny już się nie pojawia, a tryb provisioningu zostaje automatycznie wyłączony — instalacja aplikacji, certyfikatów i licencji przez skanowanie kodu jest wtedy zablokowana do czasu ponownego włączenia tego trybu w ustawieniach.' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'CT47 zasila wymienna bateria litowo-jonowa **CT4X-BTSC**. Gdy poziom jest niski, naładuj ją w terminalu lub wymień na naładowaną. Przy zamawianiu zapasowej kieruj się numerem katalogowym, a nie samym numerem modelu — numer konfiguracji znajdziesz na etykiecie w komorze baterii.' },
        { type: 'p', text: 'Terminal obsługuje wymianę baterii bez pełnego wyłączania dzięki **trybowi Swap Battery** (ciepła wymiana). Przełącza on urządzenie w stan oszczędzania energii, dzięki czemu można wyjąć baterię na krótką chwilę.' },
        { type: 'p', text: 'Aby wymienić baterię:' },
        { type: 'list', ordered: true, items: [
          'wyłącz terminal albo przytrzymaj zasilanie i wybierz **Swap Battery**;',
          'zwolnij pasek na dłoń;',
          'odblokuj baterię — przytrzymaj mały przycisk na zatrzasku i przesuń zatrzask w stronę ikony otwartej kłódki; bateria lekko się uniesie;',
          'wyjmij baterię, włóż naładowaną i ponownie zapnij pasek;',
          'naciśnij przycisk zasilania, aby wrócić do pracy.',
        ] },
        { type: 'p', text: 'Poziom naładowania pokazuje ikona baterii na pasku stanu oraz dioda statusu. Szczegóły — pozostały czas pracy, procent naładowania i kondycję baterii — sprawdzisz w **Ustawienia → Bateria**. Dla maksymalnej żywotności ładuj baterię w temperaturze 20–25°C, a przechowuj w 20°C przy naładowaniu 30–50%. Baterii nie otwieraj, nie zgniataj, nie nagrzewaj powyżej 60°C i utylizuj zgodnie z przepisami.' },
      ],
    },
    {
      title: 'Blokada ekranu, odcisk palca i Face Unlock',
      blocks: [
        { type: 'p', text: 'Blokada ekranu uruchamia się przy każdym włączeniu terminala i po wybudzeniu z uśpienia. Domyślne przesunięcie palcem nie chroni przed dostępem osób niepowołanych, dlatego zaraz po wdrożeniu ustaw mocniejszą blokadę. Zalecane jest **hasło** — najlepiej silne (cyfry, znaki specjalne, różna wielkość liter). Blokadę zmienisz w **Ustawienia → Zabezpieczenia → Blokada ekranu** (do wyboru: brak, przesunięcie, wzór, PIN, hasło).' },
        { type: 'p', text: 'CT47 ma **czytnik linii papilarnych** — odblokowanie odciskiem działa po przyłożeniu skonfigurowanego palca do czytnika. Obsługiwane jest też **Face Unlock** (rozpoznawanie twarzy przednim aparatem): naciśnij zasilanie, a gdy na dole ekranu pojawi się uśmiechnięta ikona twarzy, trzymaj terminal naprzeciw twarzy, aż się odblokuje. Po włączeniu odcisku lub twarzy i tak musisz mieć metodę zapasową (PIN, wzór lub hasło) — jest wymagana po włączeniu i po restarcie terminala.' },
        { type: 'p', text: 'Odcisk i twarz konfigurujesz oraz usuwasz w **Ustawienia → Zabezpieczenia → Odcisk palca / Face Unlock**. Można dodać kilka odcisków lub kilka obrazów twarzy.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Po starcie pojawia się ekran główny z paskiem powiadomień i stanu u góry, polem wyszukiwania, panelem ekranu głównego, tacką ulubionych aplikacji oraz wirtualnymi przyciskami nawigacji. Listę wszystkich aplikacji otworzysz, przesuwając palcem **w górę od dołu ekranu głównego**.' },
        { type: 'p', text: 'Pasek stanu pokazuje ikony sieci, baterii i powiadomień. Przeciągnięcie w dół rozwija powiadomienia, a ponowne — **szybkie ustawienia** (Wi-Fi, Bluetooth, latarka, jasność, tryb Nie przeszkadzać). Ekran główny i tackę ulubionych możesz dowolnie układać, tworzyć foldery i dodatkowe panele.' },
        { type: 'p', text: 'Fizyczne przyciski (skanowania, głośności) oraz wirtualne (Wstecz, Ekran główny, Ostatnie) można **przemapować** na inne funkcje, aplikacje, polecenia lub tekst w **Ustawienia → Honeywell Settings → Keyremap** — i w razie potrzeby przywrócić domyślne działanie. Dedykowanego przycisku Push-to-Talk nie da się przemapować.' },
        { type: 'p', text: 'Ekran ma czujnik światła i automatyczną jasność; można ją też ustawić ręcznie w **Ustawienia → Wyświetlacz**. Dla pracy w rękawicach, rysikiem, w deszczu lub z folią ochronną wybierz odpowiedni **profil dotyku** w **Ustawienia → Honeywell Settings → Touch Screen Profile** (maks. grubość rękawicy to 2 mm). Strefę czasową ustawisz w **Ustawienia → System → Data i godzina**.' },
      ],
    },
    {
      title: 'Pamięć microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD/microSDHC** zwiększysz pamięć lub zainstalujesz oprogramowanie. Honeywell zaleca karty przemysłowe SLC dla najlepszej wydajności i trwałości; przed pierwszym użyciem kartę sformatuj.' },
        { type: 'p', text: 'Aby włożyć kartę: zapisz pliki i zamknij aplikacje, przytrzymaj zasilanie i wybierz „Wyłącz", wyjmij baterię, podważ klapkę gniazda karty, włóż kartę do gniazda i zamknij klapkę (opcjonalnie zabezpiecz ją śrubą), a następnie włóż baterię z powrotem.' },
        { type: 'p', text: 'Pliki przeniesiesz przez **USB-C** (obsługa USB 3.0 do 5 Gb/s oraz USB OTG). Przesyłanie plików jest domyślnie wyłączone — po podłączeniu do komputera przeciągnij pasek powiadomień, dotknij powiadomienia systemu Android i wybierz **Przesyłanie plików** lub **PTP**. W systemie macOS użyj aplikacji Android File Transfer.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'CT47 występuje z wydajnymi skanerami Honeywell, w tym z modułem dalekiego zasięgu **FlexRange XLR** (czytanie kodów z odległości nawet kilkunastu do kilkudziesięciu metrów) oraz wersjami standardowymi. Skaner czyta kody **1D, 2D, złożone i pocztowe**, jest domyślnie włączony i pracuje na profilu domyślnym.' },
        { type: 'p', text: 'Aby zeskanować kod:' },
        { type: 'list', ordered: true, items: [
          'nakieruj okienko skanera na kod, najlepiej pod lekkim kątem, by uniknąć odbić;',
          'naciśnij i przytrzymaj dowolny przycisk skanowania;',
          'wyśrodkuj wiązkę celowniczą tak, by cały kod znalazł się w ramce oświetlenia;',
          'zwolnij przycisk, gdy terminal wyda sygnał, a **dioda Good Read** błyśnie na zielono.',
        ] },
        { type: 'p', text: 'Funkcja **scan wedge** wstawia odczytaną wartość do aktywnej aplikacji tak, jakby była wpisana z klawiatury — wystarczy najpierw ustawić kursor w polu tekstowym. Skanowanie obsługuje odczyt **dookólny (360°)**. Jeśli kod się nie czyta, prawdopodobnie nie jest włączona jego symbologia. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo").' },
      ],
    },
    {
      title: 'Ustawienia skanera i profile',
      blocks: [
        { type: 'p', text: 'Zachowanie skanera dostosujesz w **Ustawienia → Honeywell Settings → Scanning → Internal Scanner → Default profile**. Dostępne są grupy: przetwarzanie danych (prefiks/sufiks, zestaw znaków, znaki sterujące), symbologie, dekodowanie, ustawienia obrazu, wyzwalania, sygnalizacji oraz OCR. Ograniczenie listy aktywnych symbologii tylko do potrzebnych **przyspiesza skanowanie**.' },
        { type: 'p', text: 'Zmiany w profilu domyślnym obejmują wszystkie aplikacje bez przypisanego profilu. Dla różnych zadań twórz **osobne profile ustawień skanowania** — każdy z własną konfiguracją. Profile można dodawać i usuwać, a ustawienia w każdej chwili przywrócić do domyślnych (opcja „Restore all defaults").' },
        { type: 'p', text: 'Zamiast wewnętrznego skanera można sparować przez **Bluetooth** zewnętrzne urządzenie, np. skaner Granit 1990i/1991i — wówczas jego ustawienia zmienisz w gałęzi **Bluetooth Scanner**.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'CT47 potrafi odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach czy polach formularzy. Funkcję włączasz w **Ustawienia → Honeywell Settings → Scanning → Internal Scanner → Default profile → OCR Settings → Enable OCR**.' },
        { type: 'p', text: 'Smart OCR wymaga licencji — terminale są dostarczane z **60-dniową licencją próbną**; po jej wygaśnięciu pozycja „OCR Settings" znika, a skaner czyta wówczas wyłącznie kody. Wyniki można filtrować i porządkować regułami **regex** (zakładka „Result Regex"), a konfigurację wdrożyć masowo narzędziem EZConfig.' },
        { type: 'p', text: 'Zalecana odległość skanowania tekstu to **6–30 cm**. Procedura jest jak przy kodzie: nakieruj okienko na tekst, przytrzymaj przycisk skanowania, wyśrodkuj wiązkę i zwolnij przycisk po sygnale — odczytany tekst trafi do aktywnej aplikacji.' },
      ],
    },
    {
      title: 'Telefon: SIM, eSIM i połączenia',
      blocks: [
        { type: 'p', text: 'Funkcje telefoniczne działają w modelach z modemem (CT47X1N). Obsługują one **nano-SIM** oraz **eSIM**, a także **Dual SIM Dual Standby (DSDS)** — dwie karty aktywne jednocześnie, choć transmisję danych w danej chwili obsługuje tylko jedna. Modele WWAN mają dwa gniazda nano-SIM albo jedno gniazdo nano-SIM i eSIM (wtedy nano-SIM to SIM 1, a eSIM to SIM 2).' },
        { type: 'p', text: 'Kartę nano-SIM instalujesz po wyłączeniu terminala i wyjęciu baterii — podważ klapkę gniazda SIM, wsuń kartę, zamknij klapkę i włóż baterię. **eSIM** aktywujesz programowo: przypisz eSIM do SIM Slot 1, otwórz aplikację **Thales LPA**, zeskanuj kod QR od operatora i włącz pobrany profil (terminal musi być w zasięgu Wi-Fi).' },
        { type: 'p', text: 'Kartami zarządzasz w aplikacji **SIM Selection** — wybierasz aktywną kartę, włączasz DSDS (wymaga ponownego uruchomienia) i wybór operatora; zalecane ustawienie to **Auto**. Połączenia wykonujesz z aplikacji Telefonu (klawiatura, kontakty, ostatnie). Obsługiwane są połączenia **alarmowe** (np. 112, 911) nawet bez karty SIM oraz aplikacje **Push-to-Talk** uruchamiane dedykowanym przyciskiem. W trakcie rozmowy możesz przełączać aplikacje, choć transmisja danych może być wtedy ograniczona — głos ma priorytet.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'CT47 ma dwa aparaty: **13 Mpx z tyłu** i **8 Mpx z przodu**, oba z nagrywaniem wideo **4K** i stabilizacją obrazu. Zdjęcia i filmy zapisują się w pamięci wewnętrznej (folder DCIM\\Camera) i są dostępne w aplikacji Zdjęcia.' },
        { type: 'p', text: 'W aplikacji Aparat wybierzesz tryb **Photo** lub **ProMode** (ręczne ISO, ekspozycja, balans bieli, ostrość) oraz przełączysz aparat przedni/tylny. Zoom regulujesz gestem rozsuwania i zsuwania palców, dostępne są też tryby HDR, filtry kolorów i ustawienia zaawansowane. Lampa błyskowa działa tylko z aparatem tylnym.' },
        { type: 'p', text: 'Tylną diodę możesz wykorzystać jako **latarkę** — otwórz szybkie ustawienia i dotknij ikony latarki. Latarka działa, gdy aplikacja Aparat jest zamknięta.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Radio bezprzewodowe (z obsługą **Wi-Fi 6E**, standard 802.11 a/b/g/n/ac/ax) jest domyślnie wyłączone. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem;',
          'wybierz sieć z listy; jeśli jej nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj wymagane dane (hasło, klucz lub certyfikat) i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci terminal łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (stan, siła sygnału, prędkość, częstotliwość, zabezpieczenia) i pozwala edytować połączenie, ustawić serwer proxy lub usunąć sieć („Zapomnij"). Dodatkowe opcje korporacyjne radia znajdziesz w **Honeywell Wi-Fi Settings** (Ustawienia → Sieć i internet → Internet → Preferencje sieci).' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'CT47 komunikuje się z innymi urządzeniami przez **Bluetooth 5.2** z obsługą Bluetooth Low Energy. Aby sparować urządzenie (drukarkę, zestaw słuchawkowy, skaner pierścieniowy):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"**;',
          'wskaż urządzenie z listy i potwierdź — zweryfikuj zgodność kodu PIN po obu stronach lub wpisz wymagany PIN, a następnie naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Sparowane urządzenia możesz potem łączyć ręcznie, przemianować lub rozłączyć („Zapomnij") w tym samym menu. Nazwę samego terminala (widoczną przy parowaniu) zmienisz w **Połączone urządzenia → Preferencje połączeń → Bluetooth → Nazwa urządzenia**.' },
      ],
    },
    {
      title: 'Ethernet, VPN, tethering i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'Po umieszczeniu terminala w stacji **Ethernet Home Base** lub **Net Base** łączy się on z siecią przewodową — domyślnie z adresem przydzielanym przez DHCP, z opcją ustawienia adresu statycznego w **Ustawienia → Sieć i internet → Ethernet**. Połączenie internetowe można też udostępniać przez **tethering** (USB lub Bluetooth).' },
        { type: 'p', text: 'CT47 obsługuje **sieci VPN**. Profil VPN dodajesz w **Ustawienia → Sieć i internet → VPN** (wcześniej musi być włączona blokada ekranu), a po jego utworzeniu łączysz się w dowolnej chwili, podając ewentualne dane logowania.' },
        { type: 'p', text: 'W sieciach firmowych skonfigurujesz zabezpieczenia bezprzewodowe — obsługiwane są **WPA2, WPA i 802.1x**; Honeywell zaleca WPA2 z kluczem PSK (Personal) lub 802.1x (Enterprise). Dla 802.1x wgraj **certyfikat** (CA, użytkownika lub Wi-Fi) w **Ustawienia → Zabezpieczenia → Szyfrowanie i dane logowania → Zainstaluj certyfikat**. Certyfikaty użytkownika można usuwać, a systemowe wyłączać.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'CT47 ma podwójne głośniki i trzy mikrofony z redukcją szumów. Głośność regulujesz bocznym przyciskiem (osobno multimedia, połączenia, dzwonek i powiadomienia, alarmy) lub w **Ustawienia → Dźwięk**, gdzie ustawisz też dzwonki, dźwięki dotyku i ładowania oraz wibracje.' },
        { type: 'p', text: 'Jednoczesne naciśnięcie **głośność w górę (+) i zasilanie** szybko włącza **tryb wibracji**. Tryb **Nie przeszkadzać** wyciszysz z poziomu szybkich ustawień, a w pełnym menu zaplanujesz jego automatyczne włączanie i wyłączanie.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Aktualne i bezpieczne oprogramowanie to podstawa cyberbezpieczeństwa. Aktualizacje systemu instaluje się na kilka sposobów: aplikacją **HUpgrader** (pobieranie OTA ze zdalnego serwera oraz instalacja z pliku), funkcją **AutoInstall** (pliki *.zip/*.apk w folderze honeywell\\autoinstall) lub z **karty microSD**.' },
        { type: 'p', text: 'Przed instalacją z AutoInstall lub microSD włącz **tryb provisioningu** (Ustawienia → Honeywell Settings → Provisioning Mode), a po zakończeniu wyłącz go z powrotem. W trakcie aktualizacji **nie wyjmuj baterii i nie odłączaj zasilania** — terminal musi mieć energię przez cały proces, inaczej grozi niestabilnością. Część aktualizacji wymaga **ponownego uruchomienia**.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, przytrzymaj zasilanie do menu i wybierz „Uruchom ponownie". Gdy ekran dotykowy nie reaguje, **przytrzymaj zasilanie przez około 8 sekund** — terminal uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety w **Ustawienia → System → Opcje resetowania** — każdy **kasuje dane**, więc to ostateczność:' },
        { type: 'list', items: [
          '**Enterprise data reset** — czyści dane z pamięci wewnętrznej, zostawiając dane na karcie IPSM;',
          '**Reset fabryczny (Erase all data)** — przywraca stan fabryczny, kasując całą pamięć wewnętrzną i kartę IPSM.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię konta Google, przygotuj hasło/PIN/wzór blokady ekranu, zapewnij połączenie z internetem i podłącz zasilanie lub naładuj baterię. Jeśli niedawno zmieniałeś hasło konta Google, **odczekaj 24 godziny**. Po resecie fabrycznym terminal może wymagać podania danych konta Google przypisanego wcześniej do urządzenia (zabezpieczenie przed nieautoryzowanym użyciem).' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'CT47 nie wymaga szczególnej konserwacji, ale brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub skaner czyta gorzej. Obudowę, okienko skanera, okienko aparatu i ekran przecieraj miękką ściereczką zwilżoną wodą lub łagodnym roztworem detergentu, a po użyciu detergentu przetrzyj ponownie ściereczką zwilżoną samą wodą.' },
        { type: 'p', text: 'Przy czyszczeniu zachowaj ostrożność:' },
        { type: 'list', items: [
          'nie zanurzaj terminala w roztworze czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienkach i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie ani okienkach;',
          'przed włożeniem do ładowarki lub połączeniem z akcesoriami upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Napraw i modyfikacji nie wykonuj samodzielnie — powinien je przeprowadzać wyłącznie autoryzowany serwis.' },
      ],
    },
  ],
}
