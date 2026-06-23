import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi wytrzymałego tabletu Honeywell ScanPal EDA10A po polsku.
 */
export const honeywellEda10aPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze wytrzymałego tabletu Honeywell ScanPal EDA10A po polsku — od pierwszego uruchomienia i baterii, przez skanowanie, sieci i akcesoria, po aktualizacje, resety i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'EDA10A dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go **minimum 5,5 godziny** ładowarką lub stacją dokującą z serii EDA10A. Praca podczas ładowania wydłuża czas pełnego naładowania.' },
        { type: 'p', text: 'Aby włączyć tablet, **przytrzymaj przycisk zasilania przez około 3 sekundy**, aż zaświeci się zielona dioda zasilania. Nie naciskaj przycisku wielokrotnie i nie podłączaj zasilacza ani nie dotykaj ekranu, dopóki tablet się nie uruchomi.' },
        { type: 'p', text: 'Przy pierwszym starcie pojawi się ekran powitalny — wybierz język i naciśnij „Start". Konfigurację przeprowadzisz ręcznie w kreatorze (Wi-Fi, data i strefa czasowa, nazwa urządzenia, zabezpieczenia) albo szybciej, skanując kod konfiguracyjny. Po zakończeniu wdrożenia ekran powitalny już się nie pojawia, a tryb provisioningu wyłącza się automatycznie.' },
        { type: 'p', text: 'Tablet możesz też ładować kablem **USB-C** z komputera — źródło musi dostarczać co najmniej 5 V i 0,5 A, w przeciwnym razie ładowanie się nie rozpocznie.' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'Tablet zasila wymienna bateria litowo-jonowa BAT-EDA10A. Gdy poziom jest niski, naładuj baterię w tablecie lub wymień ją na naładowaną. EDA10A obsługuje **hot-swap** — wymianę bez wyłączania urządzenia.' },
        { type: 'p', text: 'Hot-swap działa, jeśli tablet był włączony **co najmniej 4 minuty**, a nową baterię włożysz **w ciągu 30 sekund** od wyjęcia poprzedniej. Przed wymianą naciśnij przycisk zasilania, aby wygasić ekran — pozostawienie włączonego ekranu skraca czas na wymianę.' },
        { type: 'p', text: 'Aby wymienić baterię: wyłącz tablet lub wygaś ekran przyciskiem zasilania, zwolnij pasek na rękę (jeśli jest), zdejmij pokrywę baterii, przesuń zatrzaski w pozycję odblokowaną, pociągnij za zakładkę i wyjmij baterię. Naładowaną włóż, zablokuj zatrzaskami, załóż pokrywę i naciśnij zasilanie.' },
        { type: 'p', text: 'Stan, poziom i kondycję baterii sprawdzisz w Ustawieniach → Bateria oraz w Ustawieniach Honeywell → Battery Optimizer i aplikacji BattMon. Baterię warto wymieniać okresowo — zwykle co dwa lata lub gdy kondycja spadnie poniżej 70%. Bateria BAT-EDA10A ma trwałość rzędu 500 cykli ładowania; na ok. 6 miesięcy przed końcem cyklu życia tablet wyświetli stosowne ostrzeżenie.' },
        { type: 'p', text: 'Bezpieczeństwo: nie otwieraj, nie zgniataj, nie nagrzewaj baterii powyżej 60°C ani nie wrzucaj do ognia. Nie używaj baterii zdeformowanej, spuchniętej lub przebarwionej. Dla maksymalnej trwałości ładuj w zakresie 0–45°C, a przechowuj w 20°C z ładunkiem 30–50%. Gdy nie potrzebujesz łączności, włącz **tryb samolotowy**, aby oszczędzać energię.' },
      ],
    },
    {
      title: 'Blokada ekranu i zabezpieczenia',
      blocks: [
        { type: 'p', text: 'Blokada ekranu uruchamia się automatycznie przy każdym włączeniu tabletu i po wybudzeniu z uśpienia. Domyślne **przesunięcie palcem (Swipe)** nie chroni przed dostępem osób niepowołanych, dlatego zaraz po wdrożeniu ustaw mocniejszą blokadę.' },
        { type: 'p', text: 'Zalecane jest **hasło** — najlepiej silne (cyfry, znaki specjalne, różna wielkość liter). Blokadę zmienisz w Ustawieniach → Bezpieczeństwo i prywatność → Odblokowanie urządzenia, wybierając Brak, Przesunięcie, Wzór, PIN lub Hasło.' },
        { type: 'p', text: 'W tej samej sekcji włączysz dodatkowe zabezpieczenia: skanowanie Play Protect, lokalizowanie zgubionego sprzętu przez Find My Device (wymaga konta Google), szyfrowanie i poświadczenia, przypinanie aplikacji oraz kontrolę powiadomień na ekranie blokady.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Po uruchomieniu pojawia się ekran główny z paskiem stanu i powiadomień u góry, paskiem wyszukiwania Google, panelami ekranu głównego oraz tacką ulubionych i przyciskami nawigacji na dole. Listę wszystkich aplikacji otworzysz, przesuwając palcem **w górę od dołu ekranu**.' },
        { type: 'p', text: 'Przyciski nawigacji to Wstecz, Ekran główny i Ostatnie aplikacje. Przeciągnięcie w dół od góry rozwija powiadomienia, a kolejne przeciągnięcie — **szybkie ustawienia** (Wi-Fi, Bluetooth, latarka, jasność). Pasek stanu pokazuje ikony sieci, baterii i powiadomień.' },
        { type: 'p', text: 'Tablet ma boczne przyciski skanowania oraz tylny przycisk dotykowy skanowania (domyślnie wyłączony — włączysz go w Ustawieniach Honeywell → Touch Key lub z szybkich ustawień). Przyciski boczne i wirtualne można **przemapować** na inne funkcje, aplikacje, komendy lub tekst w Ustawieniach Honeywell → Keyremap, a w razie potrzeby przywrócić domyślne działanie. W Ustawieniach Honeywell → Key WakeUp wybierzesz przyciski wybudzające tablet ze snu.' },
        { type: 'p', text: 'Ekran główny i tackę ulubionych dostosujesz, przeciągając ikony aplikacji, tworząc foldery i dodając widżety. Jeśli pracujesz w rękawicach, włącz **tryb rękawic** w Ustawieniach Honeywell → Glove Mode (maks. grubość rękawicy 2 mm). Pamiętaj też o ustawieniu prawidłowej strefy czasowej.' },
      ],
    },
    {
      title: 'Karta microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD** zwiększysz pamięć lub zainstalujesz oprogramowanie — gniazdo obsługuje karty SDXC/SDHC do 2 TB. Honeywell zaleca przemysłowe karty SLC dla najlepszej wydajności i trwałości. Przed pierwszym użyciem sformatuj kartę.' },
        { type: 'p', text: 'Kartę microSD (a w modelach WWAN również kartę nano-SIM) instaluje się w gnieździe pod baterią. **Przed wyjęciem lub włożeniem karty zawsze wyłącz tablet.**' },
        { type: 'p', text: 'Pliki przeniesiesz, podłączając tablet do komputera kablem **USB-C** (obsługiwany jest tryb USB 3.0 do 640 Mb/s). Przesyłanie plików jest domyślnie wyłączone — po podłączeniu przeciągnij pasek powiadomień w dół, dotknij dwukrotnie powiadomienia systemu Android i wybierz **File Transfer** lub PTP. Następnie skopiuj pliki z poziomu menedżera plików na komputerze (na Macu użyj aplikacji Android File Transfer).' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'W zależności od modelu EDA10A skanuje wbudowanym skanerem 2D (imager **S0703-SR**) albo aparatem tylnym — aktywne jest tylko jedno rozwiązanie. Modele ze skanerem czytają kody **dookólnie (360°)** i mają wiązkę celowniczą; modele bez skanera używają aparatu tylnego, który celuje za pomocą podglądu na ekranie (tryb wyzwalania ustaw na „One shot with preview").' },
        { type: 'p', text: 'Aby zeskanować skanerem: nakieruj okienko skanera na kod, przytrzymaj prawy lub lewy przycisk skanowania (albo dotknij tylnego przycisku), wyśrodkuj wiązkę celowniczą na kodzie i zwolnij przycisk, gdy tablet wyda sygnał dźwiękowy. Dane trafią do aktywnej aplikacji dzięki funkcji **scan wedge**, która wstawia wartość jak z klawiatury.' },
        { type: 'p', text: 'Poprawny odczyt potwierdza zielone mignięcie diody Good Read oraz dźwięk i opcjonalna wibracja. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo"). Jeśli kod się nie skanuje, prawdopodobnie odpowiednia symbologia jest wyłączona — nie wszystkie są aktywne domyślnie.' },
        { type: 'p', text: 'Ustawienia skanera zmienisz w Ustawieniach Honeywell → Scanning → Internal Scanner → profil Default: symbologie, prefiksy/sufiksy, ustawienia dekodowania, wyzwalania i sygnalizacji odczytu. Dla różnych aplikacji utworzysz osobne **profile skanowania**, aktywowane automatycznie, a ustawienia w każdej chwili przywrócisz do domyślnych. Można też sparować i konfigurować zewnętrzny **skaner Bluetooth**. Jeśli wolisz wyzwalacz na ekranie, włącz w Ustawieniach Honeywell opcjonalny przycisk Digital Scan Button.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'Modele ze wbudowanym skanerem potrafią odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach czy polach formularzy. Funkcję **Smart OCR** włączysz w Ustawieniach Honeywell → Scanning → Internal Scanner → profil Default → OCR Settings → Enable OCR.' },
        { type: 'p', text: 'Smart OCR wymaga licencji; urządzenia z obsługą OCR mają 60-dniową licencję próbną, a po jej wygaśnięciu opcja OCR Settings przestaje być widoczna. Zalecana odległość skanowania tekstu to 6–30 cm.' },
        { type: 'p', text: 'Wyniki można filtrować regułami **regex** — z gotowych wzorców (numery, telefony, kody pocztowe) lub własnych, z opcją porządkowania sekwencji i kolejności wyników. Konfigurację OCR wdrożysz masowo na inne urządzenia narzędziem EZConfig.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'EDA10A ma dwa aparaty: **16 Mpix z tyłu** (z nagrywaniem wideo 4K, stabilizacją obrazu i zaawansowaną kontrolą ekspozycji) oraz **8 Mpix z przodu**. Zdjęcia i nagrania robisz aplikacją Aparat z tacki ulubionych, a oglądasz w aplikacji Zdjęcia; domyślnie zapisują się w pamięci wewnętrznej w folderze DCIM/Camera.' },
        { type: 'p', text: 'Zoom regulujesz gestem zsuwania/rozsuwania dwóch palców na ekranie. W ustawieniach aparatu dostosujesz m.in. filtry kolorów, lampę błyskową (tylko aparat tylny), rozmiar i jakość zdjęcia, tryb HDR oraz ProMode (ręczna kontrola ISO, balansu bieli i ostrości). Diody aparatu tylnego użyjesz jako **latarki** z poziomu szybkich ustawień.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Tablet ma radio Wi-Fi 802.11 a/b/g/n/ac/r/k/mc/ax (Wi-Fi 6), domyślnie wyłączone. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem — pojawi się lista wykrytych sieci;',
          'wybierz sieć z listy; jeśli jej nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj wymagane dane (hasło, klucz lub certyfikat) i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci tablet łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (status, siła sygnału, prędkość, częstotliwość, zabezpieczenie). Zbędną sieć usuniesz, przytrzymując jej nazwę i wybierając „Zapomnij". Dodatkowe opcje korporacyjne znajdziesz w **Honeywell Wi-Fi Settings**, a w razie problemów pomocna jest funkcja Fix Connectivity, która restartuje radio bez kasowania zapisanych sieci.' },
      ],
    },
    {
      title: 'Sieć komórkowa: nano-SIM i eSIM',
      blocks: [
        { type: 'p', text: 'Telefon i transmisja danych komórkowych działają tylko na modelach **WWAN (EDA10A-1)** z radiem 5G/komórkowym. Modele te mają gniazdo karty **nano-SIM** oraz wbudowaną kartę **eSIM** — dostępność opcji zależy od modelu i operatora. Modele WWAN mają też odbiornik GPS (GPS, GLONASS, Galileo, BeiDou).' },
        { type: 'p', text: 'Aktywacja przez **eSIM**: otwórz aplikację eSIM Toolkit i pobierz profil operatora, skanując kod QR (lub wpisując kod aktywacyjny), a następnie włącz profil. Do eSIM można pobrać wiele profili, ale aktywny może być tylko jeden. Dane APN większości operatorów są wbudowane; jeśli brakuje Twojego, wpisz je ręcznie w Ustawieniach → Sieć i internet → Plan komórkowy.' },
        { type: 'p', text: 'Aktywacja przez **nano-SIM**: wyłącz tablet, wyjmij baterię, wysuń tackę karty, włóż kartę stykami do dołu, wsuń tackę z powrotem, włóż baterię i włącz tablet. Następnie postępuj zgodnie ze wskazówkami operatora.' },
        { type: 'p', text: 'Gdy aktywne są jednocześnie nano-SIM i eSIM, tablet pracuje w trybie **Dual SIM Dual Standby (DSDS)** — możesz mieć dwa numery (np. służbowy i prywatny) i wybierać, która karta obsługuje połączenia czy wiadomości, w Ustawieniach → Sieć i internet → Sieć komórkowa. Połączenia wykonujesz z aplikacji telefonu; **połączenia alarmowe** (np. 112) działają nawet bez karty SIM. W trakcie rozmowy możesz przełączać aplikacje.' },
      ],
    },
    {
      title: 'Bluetooth i NFC',
      blocks: [
        { type: 'p', text: 'Tablet ma radio **Bluetooth 5.1** z obsługą Bluetooth Low Energy (BLE). Aby sparować urządzenie (zestaw słuchawkowy, drukarkę, skaner):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"** — pojawi się lista urządzeń;',
          'wskaż urządzenie i potwierdź; zweryfikuj zgodność kodu PIN po obu stronach (lub wpisz PIN), a następnie naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Po sparowaniu możesz łączyć się ręcznie, a w menu połączonych urządzeń przemianować tablet, zmienić nazwę sparowanego urządzenia, udostępnić mu dostęp albo je odłączyć („Zapomnij").' },
        { type: 'p', text: 'Tablet obsługuje też **NFC** (domyślnie włączone) — odczyt i zapis tagów, tryb peer-to-peer oraz emulację karty (np. płatności). Aby odczytać tag, zbliż go do oznaczonego miejsca anteny NFC z tyłu obudowy. NFC włączysz i wyłączysz w Ustawieniach → Połączone urządzenia → Preferencje połączeń → NFC.' },
      ],
    },
    {
      title: 'Ethernet, VPN i bezpieczeństwo sieci',
      blocks: [
        { type: 'p', text: 'Przez stację dokującą Display Dock tablet łączy się z siecią **Ethernet** — umieść go w stacji, a w Ustawieniach → Sieć i internet → Ethernet ustawienie jest domyślnie włączone (DHCP lub statyczny adres IP). Tablet obsługuje też połączenia **VPN** oraz **tethering** (udostępnianie danych komórkowych przez USB, Bluetooth, Wi-Fi lub Ethernet).' },
        { type: 'p', text: 'W sieciach firmowych Honeywell zaleca zabezpieczenie **WPA3** z SAE (Personal) lub 802.1x (Enterprise). Aby użyć 802.1x, wgraj na tablet certyfikat główny (i certyfikat użytkownika dla TLS). Certyfikaty instaluje się w Ustawieniach → Bezpieczeństwo i prywatność → Więcej ustawień → Szyfrowanie i poświadczenia; obsługiwane są formaty .crt/.cer oraz magazyny .p12/.pfx. Certyfikaty można później wyłączyć lub usunąć.' },
      ],
    },
    {
      title: 'Akcesoria: stacje, paski, klawiatura, rysik',
      blocks: [
        { type: 'p', text: 'Tablet jest dostarczany ze standardową baterią i kablem USB-C; pozostałe akcesoria zamawia się osobno. Do ładowania i komunikacji służą m.in. **stacja dokująca pojedyncza**, **stacja Display Dock** (z wyjściem do monitora i Ethernetu), **stacja samochodowa**, a także bazy do ładowania wielu baterii lub urządzeń jednocześnie.' },
        { type: 'p', text: 'Do wygodnego trzymania i ochrony dostępne są: **obrotowy pasek na rękę**, **pasek na ramię**, **etui (futerał)**, **gumowy ochraniacz (boot)**, **folia ochronna ekranu** oraz **uchwyt VESA**. Do precyzyjnej obsługi ekranu przewidziano **rysik z linką zabezpieczającą**.' },
        { type: 'p', text: 'Po zadokowaniu tabletu w stacji Display Dock ustawienia zewnętrznego ekranu (orientację, rozdzielczość, gęstość, tryb wyświetlania) oraz zachowanie myszy skonfigurujesz w Ustawieniach Honeywell → Display Dock.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz przyciskiem na górze tabletu lub w Ustawieniach → Dźwięk i wibracje, osobno dla multimediów, rozmów, dzwonka, powiadomień i alarmów. Tam też ustawisz dzwonek, wibracje, tryb Nie przeszkadzać oraz dźwięki blokady ekranu i ładowania. Aby uniknąć uszkodzenia słuchu, nie słuchaj długo na wysokim poziomie głośności.' },
        { type: 'p', text: 'Powiadomieniami zarządzasz w panelu rozwijanym z góry ekranu — dotknij, by otworzyć aplikację, użyj szybkiej odpowiedzi albo przesuń w bok, by odrzucić. W Ustawieniach → Powiadomienia skonfigurujesz powiadomienia poszczególnych aplikacji, historię, dymki rozmów, powiadomienia na ekranie blokady oraz sygnalizację świetlną.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Honeywell zaleca utrzymywanie aktualnego systemu i aplikacji ze względów bezpieczeństwa. Aktualizacje (*.zip lub *.apk) instaluje się funkcją **AutoInstall**: włącz tryb provisioningu w Ustawieniach Honeywell → Provisioning mode, zapisz plik w folderze honeywell/autoinstall (w pamięci wewnętrznej lub na karcie IPSM), upewnij się, że AutoInstall jest włączony, i uruchom Packages Update. Po zakończeniu wyłącz tryb provisioningu.' },
        { type: 'p', text: 'Alternatywnie zainstalujesz aktualizację z **karty microSD** (folder honeywell/autoinstall w katalogu głównym karty), a pakiety OTA — aplikacją **HUpgrader**, która pokazuje też aktualnie zainstalowaną wersję OTA.' },
        { type: 'p', text: 'Niektóre aktualizacje wymagają **ponownego uruchomienia** tabletu. W trakcie instalacji tablet musi mieć stałe zasilanie — **nie wyjmuj baterii podczas aktualizacji**, bo może to zdestabilizować urządzenie.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, zamknij aplikacje, przytrzymaj zasilanie do menu i wybierz „Uruchom ponownie". Gdy ekran nie reaguje, **przytrzymaj zasilanie ok. 8 sekund** — tablet uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety — każdy **kasuje dane**, więc to ostateczność (mogą być też zablokowane przez administratora):' },
        { type: 'list', items: [
          '**Enterprise data reset** (Ustawienia → System → Reset) — czyści dane z pamięci wewnętrznej, zostawiając kartę IPSM;',
          '**Reset fabryczny** (Erase all data) — kasuje wszystkie dane i ustawienia, w tym pamięć wewnętrzną i kartę IPSM.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię danych na koncie Google, przygotuj hasło/PIN/wzór blokady ekranu oraz login i hasło konta Google (bez nich nie użyjesz tabletu po resecie fabrycznym), podłącz zasilanie lub naładuj baterię i upewnij się, że masz połączenie z internetem. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj 24 godziny. W tej samej sekcji znajdziesz też resety węższe: ustawień sieci komórkowej, Bluetooth i Wi-Fi oraz preferencji aplikacji.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'EDA10A ma klasę szczelności **IP65** i nie wymaga specjalnej konserwacji, ale brudne okienko skanera lub aparatu pogarsza odczyt — czyść je, gdy są widocznie zabrudzone. Obudowę, okienka i ekran czyść miękką szmatką zwilżoną wodą; sam ekran dotykowy można też czyścić alkoholem izopropylowym 70%.' },
        { type: 'list', items: [
          'nie zanurzaj tabletu w płynie;',
          'nie używaj ściernych chusteczek ani ściereczek na okienkach i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach — mogą uszkodzić powłokę;',
          'przed włożeniem do stacji lub ładowarki upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Napraw i modernizacji nie wykonuje się samodzielnie — może je przeprowadzać wyłącznie autoryzowany serwis.' },
      ],
    },
  ],
}
