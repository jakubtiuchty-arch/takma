import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi wytrzymałego tabletu Honeywell RT10A po polsku.
 */
export const honeywellRt10aPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze wytrzymałego tabletu Honeywell RT10A po polsku — od pierwszego uruchomienia i baterii, przez skanowanie, sieci i akcesoria, po aktualizacje, resety i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'RT10A dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go w pełni ładowarką lub stacją z serii RT10A — całkowicie rozładowana bateria ładuje się **około 6 godzin**. Praca podczas ładowania wydłuża czas pełnego naładowania, dlatego pierwszego uruchomienia najlepiej dokonać przy podłączonym zasilaniu sieciowym.' },
        { type: 'p', text: 'Aby włączyć tablet, **przytrzymaj przycisk zasilania przez około 3 sekundy**, aż zaświeci się niebieska dioda zasilania. Nie naciskaj przycisku wielokrotnie i nie podłączaj zasilacza ani nie dotykaj ekranu czy przycisków, dopóki tablet się nie uruchomi.' },
        { type: 'p', text: 'Przy pierwszym starcie pojawi się ekran powitalny — wybierz język i naciśnij „Start". Konfigurację przeprowadzisz ręcznie w kreatorze (Wi-Fi, data i strefa czasowa, nazwa urządzenia, zabezpieczenia) albo szybciej, skanując kod konfiguracyjny. Po zakończeniu wdrożenia ekran powitalny już się nie pojawia, a tryb provisioningu wyłącza się automatycznie.' },
        { type: 'p', text: 'Do wdrożenia większej liczby tabletów posłuży aplikacja **Wi-Fi Staging** — jedno urządzenie pełni rolę serwera (hotspot HONEYWELL_WIFI_STAGING) i rozsyła konfigurację do tabletów-klientów ustawionych w odległości do 1 metra (obsługuje do 10 jednoczesnych połączeń).' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'Tablet zasila wymienna bateria litowo-jonowa — w wersji standardowej (RT10-BAT-STD1) lub o zwiększonej pojemności (RT10-BAT-EXT1). Gdy poziom jest niski, naładuj baterię w tablecie lub wymień ją na naładowaną. RT10A obsługuje **hot-swap** — wymianę bez wyłączania urządzenia.' },
        { type: 'p', text: 'Hot-swap działa, jeśli tablet był włączony **co najmniej 4 minuty**, a nową baterię włożysz **w ciągu 30 sekund** od wyjęcia poprzedniej. Aby przejść do trybu wymiany: zapisz pliki i zamknij aplikacje, przytrzymaj przycisk zasilania do pojawienia się menu, dotknij **Swap Battery** i postępuj zgodnie ze wskazówkami na ekranie — tablet przejdzie w stan niskiego poboru mocy na czas wymiany.' },
        { type: 'p', text: 'Aby wymienić baterię: odblokuj ją, przesuń przycisk zwalniania w stronę górnej krawędzi tabletu, unieś brzeg baterii i wyjmij. Naładowaną baterię włóż, dociśnij jej prawą krawędź, zablokuj zatrzaskiem i naciśnij przycisk zasilania.' },
        { type: 'p', text: 'Stan, poziom i kondycję baterii sprawdzisz w Ustawieniach → Bateria oraz w Ustawieniach Honeywell → Battery Optimizer i aplikacji BattMon. Baterię warto wymieniać okresowo — zwykle co dwa lata lub gdy kondycja spadnie poniżej 70%. Dla najlepszej trwałości ładuj w zakresie 0–45°C, a przechowuj w 25°C z ładunkiem ok. 50%.' },
        { type: 'p', text: 'Bezpieczeństwo: nie otwieraj, nie zgniataj, nie nagrzewaj baterii powyżej 60°C ani nie wrzucaj do ognia. Nie używaj baterii zdeformowanej, spuchniętej, przebarwionej lub zbyt gorącej w dotyku. Nie zanurzaj baterii w wodzie, nie wkładaj do niej obcych przedmiotów i nie lutuj jej styków. Gdy łączność jest niepotrzebna, włącz **tryb samolotowy**, aby oszczędzać energię. Przed włożeniem baterii do tabletu upewnij się, że wszystkie elementy są suche.' },
      ],
    },
    {
      title: 'Włączanie, blokada ekranu i zabezpieczenia',
      blocks: [
        { type: 'p', text: 'Blokada ekranu uruchamia się automatycznie przy każdym włączeniu tabletu i po wybudzeniu z uśpienia. Ekran odblokujesz, **przesuwając palcem w górę od dołu ekranu**. Domyślne przesunięcie (Swipe) nie chroni jednak przed dostępem osób niepowołanych, dlatego zaraz po wdrożeniu ustaw mocniejszą blokadę.' },
        { type: 'p', text: 'Zalecane jest **hasło** — najlepiej silne (cyfry, znaki specjalne, różna wielkość liter). Blokadę zmienisz w Ustawieniach → Bezpieczeństwo → Blokada ekranu, wybierając Brak, Przesunięcie, Wzór, PIN lub Hasło.' },
        { type: 'p', text: 'W sekcji Bezpieczeństwo włączysz dodatkowe zabezpieczenia: skanowanie Google Play Protect, lokalizowanie zgubionego sprzętu przez Find My Device, podgląd stanu szyfrowania i poświadczeń, Smart Lock (zaufane miejsca, urządzenia, rozpoznawanie głosu), zarządzanie aplikacjami administratora oraz przypinanie ekranu do wybranej aplikacji.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Po uruchomieniu pojawia się ekran główny z paskiem stanu i powiadomień u góry, paskiem wyszukiwania Google, panelami ekranu głównego oraz tacką ulubionych i przyciskami nawigacji na dole. Listę wszystkich aplikacji otworzysz, przesuwając palcem **w górę od dołu ekranu**.' },
        { type: 'p', text: 'Przyciski nawigacji to Wstecz, Ekran główny i Ostatnie aplikacje. Przeciągnięcie w dół od góry rozwija powiadomienia, a kolejne przeciągnięcie — **szybkie ustawienia** (Wi-Fi, Bluetooth, latarka, jasność). Pasek stanu pokazuje ikony sieci, baterii i powiadomień.' },
        { type: 'p', text: 'Tablet ma sprzętowe przyciski po bokach oraz przyciski funkcyjne Fn1 i Fn2 — domyślnie **Fn2 wyzwala skaner**. Przyciski (Fn przedni, Ekran główny, Fn tylny, Głośność +/–) można **przemapować** na inne funkcje, aplikacje, akcje (intencje), komendy lub tekst w Ustawieniach Honeywell → Keyremap, a w razie potrzeby przywrócić domyślne działanie. W Ustawieniach Honeywell → Key WakeUp wybierzesz przyciski wybudzające tablet ze snu (domyślnie Fn przedni i Ekran główny).' },
        { type: 'p', text: 'Ekran główny i tackę ulubionych dostosujesz, przeciągając ikony aplikacji, tworząc foldery i dodając widżety. Dla pracy w trudnych warunkach wybierz profil ekranu dotykowego w Ustawieniach Honeywell → Touch Screen Profile: **tryb rysika, palca, rękawic** (maks. grubość rękawicy 2 mm) lub **tryb wodoodporny**. W trybach rysika, palca i rękawic tablet sam dostosowuje się do wilgoci na ekranie (np. deszczu) i wraca do normalnej pracy po jego wyschnięciu. Pamiętaj też o ustawieniu prawidłowej strefy czasowej.' },
      ],
    },
    {
      title: 'Karta microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD** zwiększysz pamięć lub zainstalujesz oprogramowanie — gniazdo obsługuje karty microSDXC do 512 GB. Honeywell zaleca przemysłowe karty SLC dla najlepszej wydajności i trwałości. Przed pierwszym użyciem sformatuj kartę.' },
        { type: 'p', text: '**Przed wyjęciem lub włożeniem karty microSD (a w modelach WWAN również karty micro-SIM) zawsze wyłącz tablet.** Gniazdo karty microSD znajduje się przy złączach wejścia/wyjścia, a gniazdo karty SIM pod osobną pokrywą.' },
        { type: 'p', text: 'Pliki przeniesiesz, podłączając tablet do komputera kablem **USB-C** (obsługiwany jest tryb USB 3.0 do 640 Mb/s; tablet ma też port USB-A). Przesyłanie plików jest domyślnie wyłączone — po podłączeniu przeciągnij pasek powiadomień w dół, dotknij dwukrotnie powiadomienia systemu Android i wybierz **File Transfer** lub PTP. Następnie skopiuj pliki z poziomu menedżera plików na komputerze (na Macu użyj aplikacji Android File Transfer).' },
      ],
    },
    {
      title: 'Skanowanie kodów wbudowanym skanerem 2D',
      blocks: [
        { type: 'p', text: 'RT10A czyta kody kreskowe 1D i 2D, kody złożone oraz pocztowe wbudowanym skanerem (imagerem). W zależności od modelu jest to **N6703-SR (Standard Range)** o standardowym zasięgu albo **N6803-FR (FlexRange)** — który czyta zarówno blisko, jak i z dużej odległości (kody 100 mil nawet z kilku metrów). Skaner pracuje **dookólnie (360°)** i ma wiązkę celowniczą ułatwiającą trafianie w kod.' },
        { type: 'p', text: 'Aby zeskanować: nakieruj okienko skanera na kod (najlepiej pod lekkim kątem, by uniknąć odbić), przytrzymaj **przycisk Fn2** lub boczny przycisk skanowania, wyśrodkuj wiązkę celowniczą tak, by cały kod znalazł się w polu oświetlenia, i zwolnij przycisk, gdy tablet wyda sygnał dźwiękowy. Dane trafią do aktywnej aplikacji dzięki funkcji **scan wedge**, która wstawia wartość jak z klawiatury.' },
        { type: 'p', text: 'Poprawny odczyt potwierdza zielone mignięcie diody, dźwięk i opcjonalna wibracja. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo"). Jeśli kod się nie skanuje, prawdopodobnie odpowiednia symbologia jest wyłączona — nie wszystkie są aktywne domyślnie.' },
        { type: 'p', text: 'Ustawienia skanera zmienisz w Ustawieniach Honeywell → Scanning → Internal Scanner → profil Default: symbologie, przetwarzanie danych (prefiksy/sufiksy), dekodowanie, ustawienia imagera, wyzwalania i sygnalizacji odczytu. Ograniczenie listy aktywnych symbologii przyspiesza skanowanie. Dla różnych aplikacji utworzysz osobne **profile skanowania**, a ustawienia w każdej chwili przywrócisz do domyślnych. Jeśli wolisz wyzwalacz na ekranie, włącz w Ustawieniach Honeywell opcjonalny przycisk Digital Scan Button. Można też sparować zewnętrzny **skaner Bluetooth** za pomocą aplikacji Scanner Edge.' },
      ],
    },
    {
      title: 'Skaner RFID (model zależny)',
      blocks: [
        { type: 'p', text: 'RT10A można sparować z czytnikiem **RFID** Honeywell (np. IP30, IH25, IH40, IH45), tworząc mobilne rozwiązanie do odczytu tagów. Parowania dokonasz aplikacją RFID Discovery, a dane z tagów trafiają do aplikacji przez funkcję RFID wedge (musi być włączona).' },
        { type: 'p', text: 'Ustawienia czytnika zmienisz w Ustawieniach Honeywell → RFID — po wybraniu modelu czytnika i profilu Default dostępne są ustawienia czytnika, filtrów, wyzwalania (model zależne), sygnalizacji oraz przetwarzania danych. Dla różnych zastosowań utworzysz dodatkowe profile, a ustawienia przywrócisz do domyślnych jednym poleceniem.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'RT10A ma dwa aparaty: **13 Mpix z tyłu** (z lampą błyskową, nagrywaniem wideo 4K i stabilizacją obrazu) oraz **8 Mpix z przodu**. Zdjęcia i nagrania robisz aplikacją Aparat z tacki ulubionych, a oglądasz w aplikacji Zdjęcia; domyślnie zapisują się w pamięci wewnętrznej w folderze DCIM/Camera.' },
        { type: 'p', text: 'Zoom regulujesz gestem zsuwania/rozsuwania dwóch palców na ekranie. Zdjęcie zrobisz, dotykając spustu lub naciskając przycisk głośności. W ustawieniach aparatu dostosujesz m.in. filtry kolorów, lampę błyskową (tylko aparat tylny), rozmiar i jakość zdjęcia, tryb HDR oraz ProMode (ręczna kontrola ISO, balansu bieli i ostrości). Diody aparatu tylnego użyjesz jako **latarki** z poziomu szybkich ustawień.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Tablet ma radio Wi-Fi 802.11 a/b/g/n/ac, domyślnie wyłączone. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem — pojawi się lista wykrytych sieci;',
          'wybierz sieć z listy; jeśli jej nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj wymagane dane (hasło, klucz lub certyfikat) i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci tablet łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (status, siła sygnału, prędkość, częstotliwość, zabezpieczenie). Zbędną sieć usuniesz, przytrzymując jej nazwę i wybierając „Zapomnij", a po zmianie hasła użyjesz „Modyfikuj sieć". Dla każdej sieci można też osobno ustawić serwer proxy. Dodatkowe opcje korporacyjne znajdziesz w **Honeywell Wi-Fi Settings**, a w razie problemów pomocna jest funkcja Fix Connectivity, która restartuje radio bez kasowania zapisanych sieci.' },
      ],
    },
    {
      title: 'Sieć komórkowa: micro-SIM, eSIM i GPS (modele WWAN)',
      blocks: [
        { type: 'p', text: 'Telefon i transmisja danych komórkowych działają tylko na modelach **WWAN** (oznaczenie RT10AL1N) z radiem komórkowym. Modele te mają gniazdo karty **micro-SIM** pod osobną pokrywą oraz wbudowany odbiornik **GPS** (z anteną GPS w złączu dokowania), wykorzystywany do lokalizacji.' },
        { type: 'p', text: 'Aby włożyć kartę micro-SIM: **wyłącz tablet**, otwórz pokrywę gniazda SIM, włóż kartę zgodnie z oznaczeniem, zamknij pokrywę i włącz tablet. Następnie postępuj zgodnie ze wskazówkami operatora; w razie potrzeby uzupełnij dane APN w Ustawieniach → Sieć i internet.' },
        { type: 'p', text: 'Modele WWAN obsługują też kartę **eSIM** — profil operatora pobierzesz, skanując kod QR lub wpisując kod aktywacyjny, a następnie włączysz go w ustawieniach. Połączenia wykonujesz z aplikacji telefonu; w przypadku korzystania z karty UICC do szyfrowania NFC Secure Element kartę instaluje się w gnieździe SIM 1.' },
      ],
    },
    {
      title: 'Bluetooth i NFC',
      blocks: [
        { type: 'p', text: 'Tablet komunikuje się z innymi urządzeniami przez **Bluetooth**. Radio Bluetooth musi być włączone. Aby sparować urządzenie (zestaw słuchawkowy, drukarkę, skaner):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"** — pojawi się lista urządzeń;',
          'wskaż urządzenie i potwierdź; zweryfikuj zgodność kodu PIN po obu stronach (lub wpisz PIN), a następnie naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Po sparowaniu możesz łączyć się ręcznie, a w menu połączonych urządzeń przemianować tablet, zmienić nazwę sparowanego urządzenia, udostępnić mu dostęp albo je odłączyć („Zapomnij").' },
        { type: 'p', text: 'Wszystkie tablety RT10A obsługują **NFC** — odczyt i zapis tagów, tryb peer-to-peer (przesyłanie treści między urządzeniami) oraz emulację karty (np. płatności zbliżeniowe). Aby odczytać tag, zbliż go do tylnej części obudowy. NFC włączysz i wyłączysz w Ustawieniach → Połączone urządzenia → Preferencje połączeń → NFC.' },
      ],
    },
    {
      title: 'Ethernet, VPN i bezpieczeństwo sieci',
      blocks: [
        { type: 'p', text: 'Przez stację dokującą (Ethernet Home Base lub Net Base) tablet łączy się z siecią **Ethernet** — umieść go w stacji, a w Ustawieniach → Sieć i internet → Ethernet połączenie jest domyślnie włączone (DHCP lub statyczny adres IP). Tablet obsługuje też połączenia **VPN** (przed dodaniem profilu VPN włącz blokadę ekranu).' },
        { type: 'p', text: 'W sieciach firmowych Honeywell zaleca zabezpieczenie **WPA2** z PSK (Personal) lub 802.1x (Enterprise). Aby użyć 802.1x, wgraj na tablet certyfikat główny (i certyfikat użytkownika dla TLS). Certyfikaty instaluje się w Ustawieniach → Bezpieczeństwo → Szyfrowanie i poświadczenia; obsługiwane są formaty .crt/.cer oraz magazyny .p12/.pfx. Certyfikaty można później wyłączyć lub usunąć.' },
      ],
    },
    {
      title: 'Akcesoria: stacje, paski, klawiatura, rysik',
      blocks: [
        { type: 'p', text: 'Tablet jest dostarczany z baterią standardową i rysikiem; pozostałe akcesoria zamawia się osobno. Do ładowania i komunikacji służą m.in. **stacja dokująca biurkowa**, **stacja Ethernet Home Base** i **Net Base** (z połączeniem sieciowym), **stacja samochodowa** oraz bazy do ładowania wielu baterii lub urządzeń jednocześnie.' },
        { type: 'p', text: 'Do wygodnego trzymania i ochrony dostępne są akcesoria do noszenia (m.in. paski i futerały) oraz **rysik**, którym precyzyjnie obsłużysz ekran dotykowy. Pełną listę zgodnych akcesoriów znajdziesz w katalogu akcesoriów RT10.' },
        { type: 'p', text: 'Po zadokowaniu tabletu w stacji biurkowej ustawienia zewnętrznego ekranu (orientację, rozdzielczość, gęstość, tryb wyświetlania) oraz zachowanie myszy i dźwięku HDMI skonfigurujesz w Ustawieniach Honeywell → Display Dock. Przy pracy w stacji samochodowej dostępna jest funkcja **wygaszania ekranu w czasie jazdy** (Zoomzone) oraz ustawienia portów COM, m.in. dla zewnętrznego GPS.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz przyciskiem na obudowie lub w Ustawieniach → Dźwięk i wibracje, osobno dla multimediów, rozmów, dzwonka, powiadomień, dźwięku skanowania i alarmów. Tam też ustawisz dzwonek, wibracje i sprzężenie dotykowe, tryb Nie przeszkadzać oraz dźwięki blokady ekranu i ładowania. Aby uniknąć uszkodzenia słuchu, nie słuchaj długo na wysokim poziomie głośności.' },
        { type: 'p', text: 'Powiadomieniami zarządzasz w panelu rozwijanym z góry ekranu — dotknij, by otworzyć aplikację, użyj szybkiej odpowiedzi albo przesuń w bok, by odrzucić. W Ustawieniach → Powiadomienia skonfigurujesz powiadomienia poszczególnych aplikacji, historię, dymki rozmów, powiadomienia na ekranie blokady oraz sygnalizację świetlną.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Honeywell zaleca utrzymywanie aktualnego systemu i aplikacji ze względów bezpieczeństwa. Aktualizacje (*.zip lub *.apk) instaluje się funkcją **AutoInstall**: włącz tryb provisioningu w Ustawieniach Honeywell → Provisioning mode, zapisz plik w folderze honeywell/autoinstall (w pamięci wewnętrznej lub na karcie IPSM), upewnij się, że AutoInstall jest włączony, i uruchom Packages Update. Po zakończeniu wyłącz tryb provisioningu.' },
        { type: 'p', text: 'Alternatywnie zainstalujesz aktualizację z **karty microSD** (folder honeywell/autoinstall w katalogu głównym karty), a pakiety OTA — aplikacją **HUpgrader**, która umożliwia też ręczne wyszukanie aktualizacji i powrót do wcześniejszej wersji systemu.' },
        { type: 'p', text: 'W trakcie instalacji tablet musi mieć stałe zasilanie — **nie wyjmuj baterii podczas aktualizacji**, bo może to zdestabilizować urządzenie. Część aktualizacji wymaga ponownego uruchomienia, które tablet wykonuje automatycznie.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, zamknij aplikacje, przytrzymaj przycisk zasilania do pojawienia się menu i wybierz „Uruchom ponownie". Gdy ekran nie reaguje, **przytrzymaj zasilanie ok. 8 sekund** — tablet uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety — każdy **kasuje dane**, więc to ostateczność (mogą być też zablokowane przez administratora):' },
        { type: 'list', items: [
          '**Enterprise data reset** (Ustawienia → System → Reset) — czyści dane z pamięci wewnętrznej, zostawiając kartę IPSM;',
          '**Reset fabryczny** (Erase all data) — kasuje wszystkie dane i ustawienia, w tym pamięć wewnętrzną i kartę IPSM.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię danych na koncie Google, przygotuj hasło/PIN/wzór blokady ekranu oraz login i hasło konta Google (bez nich nie użyjesz tabletu po resecie fabrycznym), podłącz zasilanie lub naładuj baterię i upewnij się, że masz połączenie z internetem. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj 24 godziny. W tej samej sekcji znajdziesz też resety węższe: ustawień sieci (Wi-Fi, komórkowych i Bluetooth) oraz preferencji aplikacji.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'RT10A ma klasę szczelności **IP65** i nie wymaga specjalnej konserwacji, ale brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub gdy skaner pracuje gorzej. Stosuj wyłącznie środki czyszczące zatwierdzone przez producenta dla tego urządzenia.' },
        { type: 'list', items: [
          'nie zanurzaj tabletu w wodzie;',
          'nie używaj ściernych chusteczek ani ściereczek na okienkach i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach — mogą uszkodzić powłokę, okienka i ekran;',
          'przed włożeniem do stacji lub ładowarki upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Napraw i modernizacji nie wykonuje się samodzielnie — może je przeprowadzać wyłącznie autoryzowany serwis.' },
      ],
    },
  ],
}
