import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi wytrzymałego tabletu Honeywell RT10W (Windows) po polsku.
 */
export const honeywellRt10wPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze wytrzymałego tabletu Honeywell RT10W z systemem Windows 10 IoT Enterprise po polsku — od pierwszego uruchomienia i baterii, przez skanowanie, sieci i akcesoria, po aktualizacje, odzyskiwanie systemu i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'RT10W dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go w pełni — całkowicie rozładowana bateria ładuje się **około 6 godzin**. Praca podczas ładowania wydłuża czas pełnego naładowania, dlatego pierwsze uruchomienie najlepiej przeprowadzić przy podłączonym zasilaniu sieciowym. Baterię możesz ładować zarówno w tablecie, jak i osobno przed włożeniem.' },
        { type: 'p', text: 'Aby włączyć tablet, **przytrzymaj przycisk zasilania przez około 3 sekundy**, aż zaświeci się niebieska dioda zasilania. Nie naciskaj przycisku wielokrotnie i nie podłączaj zasilacza ani nie dotykaj ekranu, przycisków czy klawiatury, dopóki nie zgaśnie dioda aktywności dysku.' },
        { type: 'p', text: 'Przy pierwszym starcie pojawi się ekran powitalny systemu Windows. Palcem lub rysikiem wybierz region, dotknij „Tak" i przejdź przez kolejne kroki kreatora konfiguracji (sieć, konto, ustawienia regionalne). Po zakończeniu konfiguracji ekran powitalny już się nie pojawia.' },
        { type: 'p', text: 'Jeśli w trakcie konfiguracji systemu Windows nastąpi przerwa w zasilaniu, do menu odzyskiwania wejdziesz, **naciskając przycisk Fn1** podczas uruchamiania tabletu.' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'Tablet zasila wymienna bateria litowo-jonowa — w wersji standardowej (RT10-BAT-STD1) lub o zwiększonej pojemności (RT10-BAT-EXT1). Gdy poziom jest niski, naładuj baterię w tablecie lub wymień ją na naładowaną. Honeywell zaleca utrzymywanie baterii naładowanej, aby zapobiec utracie danych.' },
        { type: 'p', text: 'RT10W obsługuje **hot-swap** — wymianę baterii bez wyłączania tabletu. Umożliwia to wbudowana, niewymienna bateria podtrzymująca, ładowana razem z baterią główną. Gdy jest w pełni naładowana, podtrzymuje pracę tabletu **do 5 minut** na czas wymiany.' },
        { type: 'p', text: 'Aby przeprowadzić hot-swap: naciśnij przycisk Menu lub dotknij dwukrotnie, aby otworzyć aplikację **HotTab**, wybierz **Setting** i sprawdź poziom baterii podtrzymującej. Jeśli wynosi co najmniej średni, wyjmij baterię główną; w przeciwnym razie najpierw doładuj tablet. Następnie włóż nową, w pełni naładowaną baterię do komory.' },
        { type: 'p', text: 'Stan baterii głównej i podtrzymującej sprawdzisz w aplikacji HotTab → Setting, a także w Ustawieniach Windows → System → Bateria. O stanie informuje też dioda baterii: pomarańczowa — ładowanie, zielona — naładowana, ciągła czerwona — niski poziom (poniżej 10%), migająca czerwona — trwa hot-swap.' },
        { type: 'p', text: 'Bateria podtrzymująca: doładowuj ją co dwa miesiące, aby utrzymać kondycję i zapobiec nadmiernemu rozładowaniu. Dla trwałości baterii głównej ładuj ją w zakresie **0–45°C**; przy przechowywaniu dłuższym niż 3 miesiące ładuj w 15–35°C, a magazynuj w 25°C z ładunkiem ok. 50%.' },
        { type: 'p', text: 'Bezpieczeństwo: nie otwieraj, nie zgniataj, nie przebijaj baterii ani nie wrzucaj jej do ognia. Nie przechowuj w temperaturze powyżej 60°C (np. w nagrzanym samochodzie). Nie zwieraj styków i trzymaj baterię z dala od metalowych przedmiotów. Nie zanurzaj jej w wodzie, nie wkładaj obcych przedmiotów i nie lutuj styków. Gdy łączność jest zbędna, włącz **tryb samolotowy** (Ustawienia → Sieć i internet → Tryb samolotowy), aby oszczędzać energię. Przed włożeniem baterii upewnij się, że wszystkie elementy są suche.' },
      ],
    },
    {
      title: 'Włączanie, wyłączanie i tryb uśpienia',
      blocks: [
        { type: 'p', text: 'Tablet włączysz, **przytrzymując przycisk zasilania przez około 3 sekundy**. Aby go wyłączyć, dotknij przycisku Start, a następnie ikony zasilania i wybierz „Zamknij".' },
        { type: 'p', text: '**Tryb uśpienia** automatycznie wygasza ekran i blokuje tablet po określonym czasie bezczynności, oszczędzając energię. Uśpienie włączysz ręcznie z menu zasilania (Start → zasilanie → Uśpij). Aby wybudzić tablet, naciśnij i zwolnij przycisk zasilania, a następnie odblokuj ekran.' },
        { type: 'p', text: 'Czas, po którym ekran przechodzi w uśpienie, ustawisz w Ustawieniach Windows → Personalizacja → Ekran blokady → Ustawienia limitu czasu ekranu.' },
      ],
    },
    {
      title: 'Logowanie, blokada ekranu i kod PIN',
      blocks: [
        { type: 'p', text: 'Po każdym włączeniu tabletu trzeba go odblokować — **przesuń palcem w górę od dołu ekranu**. Domyślne odblokowanie przesunięciem nie chroni jednak przed dostępem osób niepowołanych, dlatego zaraz po wdrożeniu ustaw mocniejsze zabezpieczenie.' },
        { type: 'p', text: 'Zalecane jest ustawienie **kodu PIN**: dotknij przycisku Start → Ustawienia → Konta → Opcje logowania, kliknij „Dodaj" w sekcji PIN, podaj hasło konta, a następnie wpisz i potwierdź nowy PIN.' },
        { type: 'p', text: 'RT10W jest fabrycznie skonfigurowany z kontem administratora o nazwie **Administrator** i domyślnie loguje się na nie automatycznie przy starcie Windows. Jeśli przypiszesz hasło do tego konta, po wylogowaniu trzeba je wpisywać ręcznie; po ponownym uruchomieniu tablet zawsze wraca do konta Administrator. Gdy tablet należy do domeny, system prosi o poświadczenia przy starcie lub logowaniu. Tworząc dodatkowe konta, nie używaj znaku „#" w nazwie konta.' },
      ],
    },
    {
      title: 'Interfejs Windows i nawigacja',
      blocks: [
        { type: 'p', text: 'Po uruchomieniu pojawia się ekran główny systemu Windows 10 IoT Enterprise z paskiem stanu — ikony po prawej stronie pokazują stan połączeń bezprzewodowych i sieci oraz datę, godzinę i poziom baterii. Standardowe opcje konfiguracji Windows są dostępne w zasobniku systemowym (czas, data, głośność) oraz w Panelu sterowania i aplikacji Ustawienia.' },
        { type: 'p', text: 'Ekranem obsługujesz się gestami: dotknięcie (wybór i wywołanie klawiatury ekranowej), dotknięcie z przytrzymaniem, przeciąganie (np. przesuwanie skrótów), przesunięcie, dwukrotne dotknięcie (powiększenie) oraz zsuwanie/rozsuwanie dwóch palców (zmiana powiększenia). Posługuj się palcem lub dołączonym rysikiem.' },
        { type: 'p', text: 'Tablet ma sprzętowe przyciski Fn1 i Fn2 oraz przycisk Menu i przycisk głośności/jasności. **Fn1 domyślnie otwiera przeglądarkę, a Fn2 uruchamia aparat**; przycisk Menu pokazuje lub ukrywa interfejs HotTab. Funkcje przycisków Fn1 i Fn2 (osobno dla krótkiego i długiego naciśnięcia) przemapujesz w HotTab → Setting, wybierając aplikację z listy lub wskazując plik wykonywalny.' },
        { type: 'p', text: 'Aplikacja **HotTab** steruje głównymi funkcjami tabletu i działa w tle po starcie Windows. Jej interfejs wywołasz przyciskiem Menu lub dwukrotnym dotknięciem na ekranie głównym. W HotTab skonfigurujesz do 8 skrótów do aplikacji, ustawienia aparatu, włączanie i wyłączanie podzespołów (Device ON/OFF) oraz informacje i ustawienia urządzenia (Setting).' },
        { type: 'p', text: 'Boczny przycisk głośności/jasności jest dwufunkcyjny — w HotTab → Setting przełączysz go między regulacją głośności a regulacją jasności (pomarańczowa ikona wskazuje aktywną funkcję). Tam też włącza się i wyłącza czujnik światła, który automatycznie dostosowuje podświetlenie ekranu.' },
      ],
    },
    {
      title: 'Profile ekranu dotykowego',
      blocks: [
        { type: 'p', text: 'Ekran obsługuje **10-punktowy dotyk wielopunktowy** i pozwala dobrać profil dotyku do warunków pracy. Profil wybierzesz w HotTab → Device ON/OFF → Touch Set.' },
        { type: 'p', text: 'Dostępne tryby: **Hand/Rain** (domyślny) — odrzuca fałszywy dotyk od kropli wody, a po jej usunięciu przyjmuje dotyk rysika, gołego palca lub rysika z gumową końcówką; **Stylus** — dla rysika aktywnego lub pasywnego z cienką końcówką (z odrzucaniem dotyku dłoni); **Glove** — do obsługi w rękawicach (maks. grubość rękawicy **1,1 mm**), gumową końcówką rysika lub gołym palcem.' },
        { type: 'p', text: 'Zmianę profilu dotyku można też przypisać do długiego naciśnięcia przycisku funkcyjnego (Fn1/Fn2).' },
      ],
    },
    {
      title: 'Karta microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD** zwiększysz pamięć lub zainstalujesz oprogramowanie — gniazdo obsługuje karty microSDXC (do 2 TB). Honeywell zaleca przemysłowe karty SLC dla najlepszej wydajności i trwałości. Przed pierwszym użyciem sformatuj kartę.' },
        { type: 'p', text: '**Przed włożeniem lub wyjęciem karty microSD (a w modelach WWAN również karty micro-SIM) zawsze wyłącz tablet.** Gniazdo karty microSD znajduje się w panelu wejścia/wyjścia, pod pokrywą I/O.' },
        { type: 'p', text: 'Pliki przeniesiesz, podłączając tablet do komputera kablem przez port **USB-C** lub USB-A. Po podłączeniu skopiuj pliki w Eksploratorze plików Windows. Zdjęcia i nagrania domyślnie zapisują się w folderze C:\\Webcam.' },
      ],
    },
    {
      title: 'Skanowanie kodów wbudowanym skanerem 2D',
      blocks: [
        { type: 'p', text: 'RT10W czyta kody kreskowe 1D i 2D, kody złożone oraz pocztowe wbudowanym skanerem (imagerem), pracującym **dookólnie (360°)**. W zależności od modelu jest to imager **N6703-SR** o standardowym zasięgu albo **N6803-FR (FlexRange)**, który czyta zarówno z bliska, jak i z większej odległości. Skaner potrafi też zarejestrować czarno-biały obraz, np. podpis. Nie patrz w wiązkę celowniczą imagera.' },
        { type: 'p', text: 'Aby zeskanować kod: nakieruj tablet na kod, **naciśnij przycisk Fn2**, wyśrodkuj wiązkę celowniczą na kodzie i zwolnij przycisk po odczycie.' },
        { type: 'p', text: 'Ustawienia imagera zmienisz aplikacją **EZConfig for Scanning** (narzędzie Honeywell dla Windows z edytorem XML i odczytem kodów konfiguracyjnych). Uruchom aplikację, dotknij CONNECTED DEVICE, by wykryć imager, a następnie CONFIGURE DEVICE, by pobrać jego konfigurację.' },
        { type: 'list', items: [
          '**Tryb skanowania** (zakładka Input/Output Settings → Device Settings): Manual Trigger (domyślny — skanowanie po naciśnięciu, w wariancie Normal lub Enhanced), Presentation Mode (wykrywa kod podstawiony pod skaner), Snap and Ship (przesyła obraz z pominięciem dekodera) oraz Streaming Presentation;',
          '**Symbologie** (zakładka Symbologies): włączasz i wyłączasz poszczególne typy kodów — ograniczenie listy aktywnych symbologii przyspiesza skanowanie;',
          'zmiany zapisujesz przyciskiem **Save to Device**, a w razie potrzeby przywracasz domyślne ustawienia skanera przyciskiem **RESET TO DEFAULT**.',
        ] },
        { type: 'p', text: 'Zeskanowane dane trafiają do aktywnej aplikacji dzięki **wirtualnemu wedge** (Virtual Wedge), którego parametry ustawia się w Panelu sterowania → Enterprise Settings (np. tryb przekazywania danych i tabela kodowania).' },
      ],
    },
    {
      title: 'Aparat',
      blocks: [
        { type: 'p', text: 'RT10W ma **8-megapikselowy aparat kolorowy z lampą błyskową** z tyłu obudowy oraz 2-megapikselową kamerę z przodu. Zdjęcia i nagrania wykonujesz aplikacją **HotTabCam**, którą otworzysz dwukrotnym dotknięciem ikony na ekranie głównym lub z poziomu HotTab.' },
        { type: 'p', text: 'Najpierw upewnij się, że aparat jest włączony: HotTab → Device ON/OFF → Camera (pomarańczowa ikona oznacza aktywny aparat). Bez tego HotTabCam się nie uruchomi.' },
        { type: 'p', text: 'Aby zrobić zdjęcie: ustaw kadr, dotknij ekranu, by wyostrzyć obraz, i naciśnij przycisk migawki. Wideo nagrasz, dotykając Video Record (ponowne dotknięcie kończy nagrywanie). W ustawieniach aplikacji dostosujesz format zdjęcia (domyślnie 4:3), rozdzielczość nagrania, jakość zdjęcia, tryb lampy błyskowej (włączona, automatyczna, wyłączona) oraz miejsce zapisu plików; przyciskiem przełączania zmienisz aparat tylny na przedni.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Tablet ma radio Wi-Fi 802.11 a/b/g/h/n/ac, domyślnie wyłączone. Przed połączeniem ustal protokół zabezpieczeń sieci i wymagane poświadczenia. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'dotknij ikony sieci na pasku zadań Windows — pojawi się lista dostępnych sieci;',
          'wskaż nazwę sieci i dotknij „Połącz";',
          'jeśli sieć jest zabezpieczona, podaj wymagane dane (np. klucz lub hasło) i dotknij „Dalej".',
        ] },
        { type: 'p', text: '**Sieć ukrytą** dodasz w Ustawieniach → Sieć i internet → Wi-Fi → Zarządzaj znanymi sieciami → Dodaj nową sieć: wpisz nazwę (uwzględnia wielkość liter), wybierz typ zabezpieczeń, podaj poświadczenia, zaznacz łączenie nawet gdy sieć nie rozgłasza nazwy i zapisz.' },
        { type: 'p', text: 'W zaawansowanych właściwościach karty Wi-Fi (Ustawienia → Sieć i internet → Wi-Fi → Zmień opcje karty → Właściwości karty → Konfiguruj → Zaawansowane) ręcznie wybierzesz pasmo radia (802.11a/b/g) oraz dostosujesz **agresywność roamingu** między punktami dostępu.' },
      ],
    },
    {
      title: 'Sieć komórkowa: micro-SIM i GPS (modele WWAN)',
      blocks: [
        { type: 'p', text: 'Funkcje telefoniczne i transmisja danych komórkowych działają tylko na modelach **WWAN** (oznaczenie RT10WL10) z radiem komórkowym. Modele te mają gniazdo karty **micro-SIM** pod osobną pokrywą oraz wbudowany odbiornik **GPS** do lokalizacji.' },
        { type: 'p', text: 'Aby włożyć kartę micro-SIM: **wyłącz tablet**, otwórz pokrywę gniazda SIM, włóż kartę zgodnie z oznaczeniem na obudowie i zamknij pokrywę, a następnie włącz tablet. Ustawienia danych komórkowych, w tym hotspot, znajdziesz w Ustawieniach → Sieć i internet.' },
        { type: 'p', text: 'GPS włączasz i wyłączasz w HotTab → Device ON/OFF → GPS. Po zadokowaniu w stacji samochodowej możesz przełączyć tablet z anteny wewnętrznej na **zewnętrzną antenę GPS** podłączoną do stacji przez złącze SMA — w HotTab → Device ON/OFF dotknij opcji GPS External Antenna (pomarańczowa ikona oznacza użycie anteny zewnętrznej).' },
      ],
    },
    {
      title: 'Bluetooth i drukowanie',
      blocks: [
        { type: 'p', text: 'Tablet komunikuje się z innymi urządzeniami przez **Bluetooth**; radio jest domyślnie wyłączone i trzeba je włączyć przed wyszukaniem urządzeń. Stan radia Bluetooth zachowuje się po zwykłym restarcie, ale po resecie fabrycznym trzeba odtworzyć parowania.' },
        { type: 'p', text: 'Aby sparować urządzenie:' },
        { type: 'list', ordered: true, items: [
          'wejdź w Ustawienia → Urządzenia → Bluetooth i inne urządzenia;',
          'włącz Bluetooth przełącznikiem i dotknij „Dodaj urządzenie Bluetooth lub inne";',
          'wybierz Bluetooth — pojawi się lista wykrywanych urządzeń;',
          'wskaż urządzenie, a jeśli wymaga kodu PIN, porównaj kody po obu stronach i wybierz „Połącz" lub wpisz PIN i potwierdź (dla drukarek i zestawów słuchawkowych domyślny PIN to często 1234 lub 0000).',
        ] },
        { type: 'p', text: 'Sparowane urządzenie odłączysz w tym samym miejscu, wskazując je w sekcji urządzeń i wybierając „Usuń urządzenie".' },
        { type: 'p', text: 'Do drukowania bezprzewodowego służy aplet **Bluetooth Printing** w Panelu sterowania, obsługujący drukarki Honeywell (m.in. PR2, PR3, PB31, PB21, PB42, PB50). Skanery Bluetooth podłączysz apletem **Bluetooth Scanning** (opcje Quick Connect, Search, Manual lub Previous Devices) — parametry skanerów zewnętrznych konfiguruj zawsze w Panelu sterowania → Enterprise Settings, a nie z ikony Bluetooth w zasobniku systemowym.' },
      ],
    },
    {
      title: 'Sieć Ethernet, VPN i zabezpieczenia',
      blocks: [
        { type: 'p', text: 'Przez stację dokującą z portem Ethernet tablet łączy się z siecią przewodową — domyślnie pobiera adres IP automatycznie (DHCP), więc zwykle wystarczy podłączyć stację do sieci i umieścić w niej tablet.' },
        { type: 'p', text: 'Tablet obsługuje też połączenia **VPN**. Profil dodasz w Ustawieniach → Sieć i internet → VPN → Dodaj połączenie VPN: wskaż dostawcę, wpisz nazwę połączenia, adres serwera i typ VPN (PPTP, L2TP/IPsec z certyfikatem lub kluczem współdzielonym, SSTP, IKEv2), a następnie zapisz.' },
        { type: 'p', text: 'W sieciach firmowych Honeywell zaleca zabezpieczenie **WPA2** z PSK (Personal) lub 802.1x (Enterprise); obsługiwane są też WPA, LEAP i WEP. Aby użyć 802.1x, wgraj na tablet certyfikat główny (a dla TLS także certyfikat użytkownika). Certyfikaty instalujesz przez przeglądarkę Microsoft Edge, z załącznika e-mail (formaty .cer, .p7b, .pem, .pfx) lub przez system MDM. Certyfikat można usunąć dopiero po ponownym uruchomieniu tabletu.' },
      ],
    },
    {
      title: 'Akcesoria: stacje, paski, klawiatura, rysik',
      blocks: [
        { type: 'p', text: 'Tablet jest dostarczany z baterią standardową i rysikiem; pozostałe akcesoria zamawia się osobno. Do ładowania, łączności i montażu służą m.in. **stacja biurkowa**, **stacja Ethernet**, **stacja samochodowa** oraz akcesoria do noszenia (paski i futerały). RT10W ma też opcjonalny port rozszerzeń do połączenia USB/RS232.' },
        { type: 'p', text: 'Rysikiem precyzyjnie obsłużysz ekran dotykowy. Przy pracy w stacji samochodowej dostępna jest funkcja **wygaszania ekranu w czasie jazdy (ZoomZone)** — w Panelu sterowania → ZoomZone ustawisz reakcję na wykryty ruch (wygaszenie, zamrożenie obrazu lub wyświetlenie wybranego obszaru), metodę wykrywania ruchu (przez skrzynkę wygaszania podłączoną do portu COM1 lub COM2) oraz opóźnienia reakcji.' },
      ],
    },
    {
      title: 'Dźwięk i ustawienia regionalne',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz bocznym przyciskiem głośności/jasności (po przełączeniu go na regulację głośności w HotTab → Setting) lub suwakiem w Panelu sterowania → Sounds albo ikoną głośności na pasku zadań. Szczegółowe ustawienia dźwięku znajdziesz w Ustawieniach → System → Dźwięk.' },
        { type: 'p', text: 'Datę, godzinę i strefę czasową ustawisz w Ustawieniach → Czas i język → Data i godzina (domyślnie tablet pobiera je automatycznie z sieci). Dodatkowy język systemu dodasz w Ustawieniach → Czas i język → Region i język — wymaga to dostępu do internetu, by pobrać pakiet językowy; po instalacji ustaw język jako domyślny i uruchom tablet ponownie.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania i systemu',
      blocks: [
        { type: 'p', text: 'Honeywell zaleca utrzymywanie aktualnego systemu i aplikacji ze względów bezpieczeństwa. Aktualizacje systemu Windows sprawdzisz w Ustawieniach → Aktualizacja i zabezpieczenia — gdy opcja sprawdzania aktualizacji jest aktywna, wyświetli się status oprogramowania; w przeciwnym razie zaznacz ją, a tablet sprawdzi dostępność najnowszej wersji.' },
        { type: 'p', text: 'Sterowniki, aplikacje Honeywell i obrazy systemu pobierzesz z portalu wsparcia Honeywell (honeywell.com/PSSsoftware-downloads). Wymaga to założenia konta i zainstalowania narzędzia Honeywell Download Manager. Honeywell oferuje też łatki i aktualizacje w ramach usług Honeywell Edge.' },
        { type: 'p', text: 'Informacje o oprogramowaniu i sprzęcie (wersje BIOS, EC, HotTab, systemu, numer seryjny i nazwa modelu) sprawdzisz w HotTab → Setting, a wersje firmware i dane sieciowe — w Panelu sterowania → About.' },
      ],
    },
    {
      title: 'Restart, tryb awaryjny i odzyskiwanie systemu',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, zamknij aplikacje, dotknij przycisku Start → zasilanie → Uruchom ponownie. Gdy ekran nie reaguje, **przytrzymaj przycisk zasilania przez około 6 sekund**, aby wyłączyć tablet.' },
        { type: 'p', text: '**Tryb awaryjny** (do dalszej diagnostyki, z ograniczonymi sterownikami): Ustawienia → Aktualizacja i zabezpieczenia → Odzyskiwanie → Uruchom ponownie teraz, następnie Rozwiązywanie problemów → Opcje zaawansowane → Ustawienia uruchamiania → Uruchom ponownie, a po restarcie wybierz 4 (lub F4) dla trybu awaryjnego albo 5 (lub F5) dla trybu awaryjnego z obsługą sieci.' },
        { type: 'p', text: '**Przywrócenie ustawień fabrycznych (one-key recovery)**: RT10W ma dedykowaną partycję odzyskiwania na dysku. Proces **kasuje wszystkie dane użytkownika**, więc najpierw wykonaj kopię zapasową. Podłącz zasilacz i nie odłączaj go w trakcie, włącz tablet, a gdy pojawi się ekran startowy Honeywell, **naciśnij i zwolnij przycisk Fn1** (lub F6 na zewnętrznej klawiaturze USB), aby uruchomić Kreatora odzyskiwania, dotknij Recovery i potwierdź Yes. Po zakończeniu tablet wyłączy się automatycznie.' },
        { type: 'p', text: 'Aby **odzyskać lub zaktualizować system Windows z pliku .iso** Honeywell, potrzebujesz koncentratora USB lub stacji dokującej, klawiatury USB oraz pustego nośnika USB (min. 16 GB). Pobierz obraz ISO z portalu wsparcia i przygotuj **rozruchowy** nośnik USB osobnym programem (samo skopiowanie pliku nie wystarczy), nazwij nośnik „RDVD", podłącz klawiaturę i nośnik, włącz tablet, naciśnij ESC podczas startu, w Boot Managerze wybierz nośnik USB i uruchom Kreatora odzyskiwania.' },
        { type: 'p', text: 'RT10W obsługuje też **rozruch sieciowy PXE** — wymaga serwera z plikami instalacyjnymi i przewodowego połączenia. Włącz tablet, a gdy pojawi się ekran startowy Honeywell, **przytrzymaj przycisk Menu** (lub F7 na klawiaturze USB); tablet połączy się z serwerem PXE i uruchomi z niego system. Jeśli serwer nie zostanie znaleziony w ciągu 30 sekund, tablet uruchomi się domyślną metodą.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'RT10W ma klasę szczelności **IP65** (odporność na pył i wodę) i nie wymaga szczególnej konserwacji. Obudowę, okienko skanera, okienko aparatu i ekran dotykowy czyść miękką ściereczką zwilżoną wodą; ekran można też przetrzeć ściereczką z **70-procentowym alkoholem izopropylowym**. Brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub gdy skaner pracuje gorzej.' },
        { type: 'list', items: [
          'nie zanurzaj tabletu w wodzie;',
          'nie używaj ściernych chusteczek ani ściereczek na okienkach i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach — mogą uszkodzić powłokę, okienka i ekran;',
          'przed włożeniem do stacji lub ładowarki upewnij się, że wszystkie elementy są suche.',
        ] },
        { type: 'p', text: 'Napraw i modernizacji nie wykonuje się samodzielnie — może je przeprowadzać wyłącznie autoryzowany serwis.' },
      ],
    },
  ],
}
