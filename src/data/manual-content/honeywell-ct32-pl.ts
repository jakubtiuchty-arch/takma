import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell CT32 po polsku.
 * Opracowanie TAKMA na podstawie oficjalnej dokumentacji producenta (User Guide,
 * 116 stron) — własnym głosem, w skondensowanej, praktycznej formie.
 */
export const honeywellCt32Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze terminala Honeywell CT32 po polsku — od pierwszego uruchomienia, przez skanowanie, telefon i sieci, po aktualizacje, resety i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'CT32 dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go w ładowarce lub stacji z serii CT32 przez **minimum 3,5 godziny**. Praca podczas ładowania wydłuża czas pełnego naładowania.' },
        { type: 'p', text: 'Można też ładować przez **złącze USB Type-C** z komputera — źródło musi dostarczać co najmniej 5 V i 0,5 A. Jeśli terminal pobiera więcej prądu, niż dostarcza źródło, ładowanie nie nastąpi.' },
        { type: 'p', text: 'Aby włączyć urządzenie po włożeniu naładowanej baterii, **przytrzymaj przycisk zasilania przez około 3 sekundy** i puść. Przy pierwszym starcie pojawia się ekran powitalny — przejdź konfigurację w kreatorze (język, Wi-Fi, data i godzina, nazwa, zabezpieczenia) albo zeskanuj kod konfiguracyjny, co przyspiesza wdrożenie wielu sztuk jednocześnie.' },
      ],
    },
    {
      title: 'Bateria: wymiana i kondycja',
      blocks: [
        { type: 'p', text: 'CT32 zasilany jest wymienną baterią litowo-jonową **BAT-EDA52** (w wersjach amerykańskich EDA52-BAT-US). Honeywell zaleca utrzymywanie naładowanej baterii, aby zapobiec utracie danych, oraz wymianę baterii zwykle co dwa lata lub gdy jej kondycja spadnie poniżej 70%.' },
        { type: 'p', text: 'Wymiana baterii wymaga **wyłączenia terminala** (przytrzymaj zasilanie i wybierz „Wyłącz"). Następnie zwolnij pasek na dłoń, odblokuj pokrywę baterii — przytrzymaj mały przycisk na zatrzasku i przesuń zatrzask w prawo — zdejmij pokrywę i wyjmij baterię, podważając ją za zaczepy u dołu.' },
        { type: 'p', text: 'Wkładając naładowaną baterię, najpierw wprowadź jej górną krawędź, aby spasować styki, załóż pokrywę, przesuń zatrzask w lewo, przypnij pasek na dłoń i naciśnij zasilanie. Stan, poziom i kondycję baterii sprawdzisz w Ustawieniach (Bateria) oraz w aplikacjach Honeywell (Battery Optimizer, BattMon).' },
        { type: 'p', text: 'Zasady bezpieczeństwa: baterii litowo-jonowych nie otwieraj, nie zgniataj, nie nagrzewaj powyżej 60°C i nie wrzucaj do ognia. Nie używaj baterii zniekształconej, spuchniętej, przebarwionej lub zbyt gorącej — wymień ją i zutylizuj zgodnie z przepisami. Dla maksymalnej trwałości ładuj i przechowuj baterię w temperaturze 20–25°C, a przy dłuższym składowaniu trzymaj ją z ładunkiem 30–50%.' },
      ],
    },
    {
      title: 'Blokada ekranu i Face Unlock',
      blocks: [
        { type: 'p', text: 'Blokada ekranu uruchamia się automatycznie przy każdym włączeniu terminala oraz po wybudzeniu z trybu uśpienia. Domyślne ustawienie (przesunięcie palcem) nie chroni danych — zaraz po wdrożeniu ustaw mocniejszą blokadę w **Ustawienia → Zabezpieczenia → Blokada ekranu**. Zalecane jest silne hasło (cyfry, znaki specjalne, różna wielkość liter).' },
        { type: 'p', text: 'CT32 obsługuje **Face Unlock** — odblokowanie przednim aparatem przez rozpoznawanie twarzy. Aby odblokować: naciśnij zasilanie, a gdy na dole ekranu pojawi się uśmiechnięta ikona twarzy, trzymaj aparat naprzeciw twarzy, aż terminal się odblokuje. Jeśli twarz nie zostanie rozpoznana, pojawi się smutna ikona — stuknij ją, aby spróbować ponownie.' },
        { type: 'p', text: 'Face Unlock konfigurujesz w **Ustawienia → Zabezpieczenia → Face Unlock**; zawsze wymaga zapasowej metody (PIN, wzór lub hasło), której musisz użyć po włączeniu lub restarcie urządzenia. Funkcja działa początkowo w okresie próbnym; do dalszego korzystania z niej potrzebna jest licencja. Twarze usuniesz, kasując zapisane obrazy lub zdejmując blokadę ekranu.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Po uruchomieniu pojawia się ekran główny z paskiem stanu i powiadomień u góry, paskiem wyszukiwania Google, panelem ekranu głównego, tacką ulubionych oraz wirtualnymi przyciskami nawigacji (Wstecz, Ekran główny, Ostatnie aplikacje). Listę wszystkich aplikacji otworzysz, **przesuwając palcem w górę od dołu ekranu**.' },
        { type: 'p', text: 'Przeciągnięcie w dół od góry rozwija **powiadomienia**, a ponowne — **szybkie ustawienia** (Wi-Fi, Bluetooth, latarka, jasność, tryb Nie przeszkadzać). Po rozwinięciu możesz przesuwać w bok, by zobaczyć kolejne kafelki. Ekran obsługujesz gestami: stuknięcie, przytrzymanie, przeciąganie, przesunięcie, dwukrotne stuknięcie oraz zsuwanie i rozsuwanie dwóch palców do powiększania.' },
        { type: 'p', text: 'Ekran główny i tackę ulubionych można dostosować (skróty, foldery, widżety, tapeta). Boczne przyciski skanowania oraz głośności można **przemapować** na inne funkcje, aplikacje, polecenia lub tekst w **Ustawienia → Honeywell Settings → Keyremap** i w razie potrzeby przywrócić domyślne działanie. Datę i godzinę terminal pobiera z sieci; strefę czasową ustawisz ręcznie w **Ustawienia → System → Data i godzina**.' },
      ],
    },
    {
      title: 'Pamięć microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD** (zgodną z SDXC/SDHC/SDIO, o pojemności do **2 TB**) zwiększysz pamięć lub zainstalujesz oprogramowanie. Honeywell zaleca przemysłowe karty SLC dla najlepszej wydajności i trwałości; kartę sformatuj przed pierwszym użyciem.' },
        { type: 'p', text: 'Aby włożyć kartę: zapisz pliki, zamknij aplikacje, wyłącz terminal i wyjmij baterię, następnie wysuń tackę gniazda kart, umieść kartę microSD, wsuń tackę z powrotem i włóż baterię. To samo gniazdo mieści kartę nano-SIM.' },
        { type: 'p', text: 'Pliki przenosisz przez kabel **USB Type-C** (obsługiwane USB 3.0, do 5 Gb/s, oraz USB OTG). Przesyłanie plików jest domyślnie wyłączone — po podłączeniu do komputera przeciągnij w dół, dwukrotnie stuknij powiadomienie systemu Android i wybierz **Przesyłanie plików** lub **PTP** (przesyłanie zdjęć). Na komputerze z systemem macOS użyj programu Android File Transfer.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'Wbudowany skaner (imager Honeywell S0703) jest domyślnie włączony. Czyta kody **dookólnie (360°)**, a wiązka celownicza pomaga wycelować. Aby zeskanować kod: nakieruj okienko skanera na kod (najlepiej pod lekkim kątem, by uniknąć odbić), przytrzymaj boczny przycisk skanowania, wyśrodkuj wiązkę na kodzie i zwolnij przycisk po sygnale dźwiękowym oraz krótkim zaświeceniu diody Good Read. Wartość trafia do pola w aktywnej aplikacji tak, jakby była wpisana z klawiatury (funkcja **scan wedge**).' },
        { type: 'p', text: 'Dioda **Good Read** sygnalizuje wynik: zielona — poprawny odczyt, migająca zielona — przetwarzanie lub uruchamianie skanera, czerwona — niepowodzenie (sprawdź wtedy, czy włączona jest właściwa symbologia). Nie wszystkie symbologie są aktywne domyślnie — m.in. EAN-8, EAN-13, Code 39, Code 128, Interleaved 2 of 5, QR Code, DataMatrix, Aztec i PDF 417 są włączone, a np. GS1 DataBar, MSI czy kody pocztowe trzeba włączyć.' },
        { type: 'p', text: 'Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo"). Jeśli aplikacja wymaga przycisku ekranowego, włącz **Digital Scan Button** w **Honeywell Settings** — możesz dostosować jego rozmiar, kolor, przezroczystość, położenie oraz aplikacje, w których się pojawia.' },
      ],
    },
    {
      title: 'Ustawienia skanera i profile',
      blocks: [
        { type: 'p', text: 'Zachowanie skanera dostosujesz w **Ustawienia → Honeywell Settings → Scanning → Internal Scanner**. Dla wydajności zostaw włączone tylko te symbologie, których faktycznie używasz — krótsza lista przyspiesza odczyt. W ustawieniach przetwarzania danych skonfigurujesz prefiksy i sufiksy, zestaw znaków oraz obsługę kodów z adresem URL.' },
        { type: 'p', text: 'W ustawieniach dekodowania dostosujesz odczyt kodów gęstych lub słabej jakości: czułość dekodera, limit czasu, tryb dla uszkodzonych kodów 1D, dekodowanie odwrócone (inverse), region zainteresowania (ROI), skanowanie wielokodowe (Multicode) oraz priorytet symbologii. Ustawienia wyzwalania pozwalają wybrać tryb pracy przycisku (jeden strzał, ciągły, odczyt po zwolnieniu, odczyt po drugim naciśnięciu) i tryb prezentacyjny.' },
        { type: 'p', text: 'Dla różnych aplikacji twórz **profile ustawień skanowania** — każdy z własną konfiguracją i powiązaniem z aplikacją. Profile dodajesz i usuwasz w ekranie Internal Scanner, a ustawienia w każdej chwili przywrócisz do domyślnych. Można też sparować i skonfigurować **skaner Bluetooth** przez aplikację Scanner Edge.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'CT32 potrafi odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach, numerach telefonów czy polach formularzy. Funkcję **Smart OCR** włączysz w **Honeywell Settings → Scanning → Internal Scanner → profil → OCR Settings → Enable OCR**. Urządzenia ze Smart OCR mają 60-dniową licencję próbną; do dalszej pracy potrzebna jest licencja, a bez niej menu OCR się nie wyświetla.' },
        { type: 'p', text: 'W ustawieniach OCR określisz m.in. tryb przechwytywania (linia lub blok), rozmiar i kształt okna skanowania, liczbę powtórzeń odczytu oraz to, czy zwracany jest jeden, czy wiele wyników. Tekst skanujesz jak kod — z **odległości około 6–30 cm**: nakieruj okienko na tekst pod lekkim kątem, przytrzymaj przycisk skanowania i zwolnij po sygnale; odczytany tekst trafi do pola w aktywnej aplikacji.' },
        { type: 'p', text: 'Wyniki porządkujesz regułami **regex** w zakładce Result Regex — dostępne są gotowe wzorce (m.in. numer telefonu, kod pocztowy, sam ciąg cyfr czy liter) oraz własne, walidowane na bieżąco wyrażenia. Reguły można łączyć, ustawiać ich kolejność, a gotową konfigurację wdrożyć masowo na inne urządzenia narzędziem EZConfig.' },
      ],
    },
    {
      title: 'Telefon: SIM, eSIM i połączenia',
      blocks: [
        { type: 'p', text: 'Funkcje telefonu działają wyłącznie w wersjach z modemem WWAN (CT32X1) i są tam domyślnie włączone. Terminal obsługuje jedno gniazdo **nano-SIM** oraz **eSIM**, a po aktywacji obu kart pracuje w trybie **Dual SIM Dual Standby (DSDS)** — np. z numerem firmowym i prywatnym jednocześnie, z wyborem karty do połączeń, wiadomości i transmisji danych w **Ustawienia → Sieć i internet → Sieć komórkowa**.' },
        { type: 'p', text: 'eSIM aktywujesz w aplikacji **eSIM Toolkit**, skanując kod QR od operatora lub wpisując kod ręcznie; na eSIM można pobrać wiele profili, ale aktywny może być tylko jeden. Kartę nano-SIM instalujesz po wyłączeniu terminala i wyjęciu baterii — umieść ją w tacce gniazda stykami do dołu, włóż baterię i uruchom urządzenie, a następnie dokończ aktywację u operatora.' },
        { type: 'p', text: 'Połączenia wykonujesz z aplikacji telefonu (klawiatura, kontakty, szybkie wybieranie, ostatnie połączenia). Połączenie odbierasz, przeciągając ikonę — możesz je też odrzucić do poczty głosowej lub odpowiedzieć wiadomością. W trakcie rozmowy możesz przełączać aplikacje (ikona telefonu pozostaje na pasku stanu). Połączenia **alarmowe** (np. 112) działają nawet bez karty SIM.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'CT32 ma dwa aparaty: tylny **13 Mpix** i przedni **8 Mpix**, oba z nagrywaniem wideo w **4K**, stabilizacją obrazu i zaawansowaną kontrolą ekspozycji. Zdjęcia i nagrania zapisują się w pamięci wewnętrznej w folderze DCIM\\Camera i przeglądasz je w aplikacji Zdjęcia.' },
        { type: 'p', text: 'Otwórz aplikację Aparat z tacki ulubionych. Między aparatem przednim a tylnym przełączysz się jedną ikoną, a powiększenie ustawisz, zsuwając i rozsuwając dwa palce. Aparat sam ustawia ostrość (możesz ją zmienić, stukając ekran) i w razie potrzeby włącza lampę (tylko aparat tylny). Zdjęcie zrobisz przyciskiem migawki lub przyciskiem głośności; w ustawieniach dostępny jest m.in. tryb HDR i filtry kolorów.' },
        { type: 'p', text: 'Diodę tylnego aparatu możesz wykorzystać jako **latarkę** — stuknij kafelek latarki w szybkich ustawieniach. Latarka działa tylko przy zamkniętej aplikacji aparatu.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'CT32 łączy się z sieciami **Wi-Fi 802.11 a/b/g/n/ac/ax** (Wi-Fi 6). Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem;',
          'wybierz sieć z listy; jeśli jej nie ma, przewiń na koniec i użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj wymagane dane (hasło, klucz lub certyfikat) i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci terminal łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (status, siła sygnału, prędkość, częstotliwość, zabezpieczenia), a przytrzymanie pozwala wybrać „Zapomnij". Dla każdej sieci możesz osobno skonfigurować **serwer proxy**, a zaawansowane parametry radia znajdziesz w **Honeywell Wi-Fi Settings**. Przy problemach z łącznością użyj funkcji **Fix Connectivity**, która restartuje podsystem Wi-Fi bez kasowania zapisanych sieci.' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'CT32 komunikuje się z innymi urządzeniami przez **Bluetooth 5.3** z obsługą Bluetooth Low Energy. Aby sparować urządzenie (drukarkę, zestaw słuchawkowy, skaner pierścieniowy):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"** — pojawi się lista wykrytych urządzeń;',
          'wskaż urządzenie i potwierdź — zweryfikuj zgodność kodu PIN po obu stronach lub wpisz wymagany PIN, a następnie naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Sparowane urządzenia widać w sekcji zapisanych urządzeń. W każdej chwili możesz je przemianować, włączyć udostępnianie kontaktów i historii połączeń albo rozłączyć je przez „Zapomnij". Nazwę samego terminala (ułatwiającą jego rozpoznanie) zmienisz w ustawieniach Bluetooth.' },
      ],
    },
    {
      title: 'Ethernet, VPN i bezpieczeństwo sieci',
      blocks: [
        { type: 'p', text: 'Przez stację dokującą (Net Base, Ethernet Home Base) terminal łączy się z siecią **Ethernet** — włączysz ją w **Ustawienia → Sieć i internet → Ethernet**. Mobilne połączenie danych możesz też udostępnić innym urządzeniom przez **tethering** (USB lub Bluetooth) albo uruchamiając hotspot Wi-Fi.' },
        { type: 'p', text: 'CT32 obsługuje **wirtualne sieci prywatne (VPN)**. Najpierw włącz blokadę ekranu, następnie w **Ustawienia → Sieć i internet → VPN** dodaj profil z danymi od administratora, zapisz go i połącz się, podając wymagane poświadczenia. Po połączeniu na pasku stanu pojawia się ikona VPN; rozłączysz się, stukając powiadomienie.' },
        { type: 'p', text: 'W sieciach bezprzewodowych dostępne są zabezpieczenia **WPA3, WPA2, WPA i 802.1x** — Honeywell zaleca WPA3 z SAE (Personal) lub 802.1x (Enterprise). Do uwierzytelniania 802.1x wgraj certyfikaty: w **Ustawienia → Zabezpieczenia → Szyfrowanie i poświadczenia → Zainstaluj certyfikat** wybierz typ (CA, użytkownika/VPN lub Wi-Fi). Android obsługuje certyfikaty X.509 (.crt, .cer) oraz magazyny kluczy PKCS#12 (.p12, .pfx). Zaufane certyfikaty systemowe można wyłączyć, a certyfikaty użytkownika usunąć.' },
      ],
    },
    {
      title: 'NFC i płatności zbliżeniowe',
      blocks: [
        { type: 'p', text: 'CT32 obsługuje krótkozasięgową komunikację **NFC** — odczyt i zapis tagów, tryb peer-to-peer oraz emulację karty zbliżeniowej. Aby odczytać tag, przyłóż go w pobliże anteny NFC z tyłu terminala. NFC jest domyślnie włączone; przełącznik znajdziesz w **Ustawienia → Połączone urządzenia → Preferencje połączeń → NFC**.' },
        { type: 'p', text: 'W trybie emulacji karty można korzystać z **płatności zbliżeniowych** — po zainstalowaniu odpowiedniej aplikacji (np. portfela cyfrowego lub Google Pay) ze Sklepu Play. Transakcje finansowe wymagające wysokiego poziomu bezpieczeństwa korzystają z bezpiecznego elementu zapewniającego chronione środowisko dla danych i aplikacji.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz **przyciskami na lewym boku** lub w menu, które otwiera ich naciśnięcie — osobno dla multimediów, połączeń, dzwonka, alarmów i sygnału skanera. Wszystkie te ustawienia oraz dzwonki, wibracje i sygnały odczytu skanera znajdziesz w **Ustawienia → Dźwięk i wibracje**.' },
        { type: 'p', text: 'Tryb wibracji szybko włączysz, naciskając jednocześnie przycisk **zwiększania głośności i zasilania**. Gdy potrzebujesz ciszy, użyj trybu **Nie przeszkadzać** z kafelka w szybkich ustawieniach — możesz też ustawić jego harmonogram. Powiadomienia przeglądasz, przeciągając ekran w dół: stuknięcie otwiera aplikację, przesunięcie w bok je odrzuca, a przeciągnięcie odsłania opcje (m.in. wyciszenie danego źródła).' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Aktualne i bezpieczne oprogramowanie to podstawa cyberbezpieczeństwa. Aktualizacje systemu i firmware instalujesz na kilka sposobów: automatycznie przez **AutoInstall** (pliki *.zip lub *.apk w folderze honeywell\\autoinstall), z **karty microSD**, lub aktualizacjami **OTA** przez aplikację **HUpgrader**, która sama wyszukuje i instaluje aktualizacje systemu z serwera.' },
        { type: 'p', text: 'Do ręcznej instalacji włącz **Provisioning mode** (w Honeywell Settings) — bez niego skanowanie kodów konfiguracyjnych i foldery autoinstall są niedostępne ze względów bezpieczeństwa. Przez **cały czas instalacji terminal musi mieć zasilanie** — nie wyjmuj baterii, bo system może stać się niestabilny. Po zakończeniu wyłącz Provisioning mode.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, zamknij aplikacje, przytrzymaj zasilanie do menu i wybierz „Uruchom ponownie". Gdy ekran dotykowy nie reaguje, **przytrzymaj zasilanie przez około 8 sekund** — terminal uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety w **Ustawienia → System → Zaawansowane → Opcje resetowania** — każdy **kasuje dane**, więc to ostateczność:' },
        { type: 'list', items: [
          '**Enterprise data reset** — czyści dane z pamięci wewnętrznej, pozostawiając dane na karcie IPSM;',
          '**Reset fabryczny** — kasuje wszystkie dane z pamięci wewnętrznej i karty IPSM, przywracając stan fabryczny.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię danych na koncie Google, przygotuj hasło/PIN/wzór blokady ekranu, zapewnij połączenie z internetem oraz podłącz zasilanie lub naładuj baterię. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj 24 godziny. Pamiętaj, że po resecie fabrycznym terminal z dodanym kontem Google poprosi o nazwę użytkownika i hasło tego konta — to zabezpieczenie przed nieuprawnionym użyciem.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'CT32 nie wymaga specjalnej konserwacji, ale brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub skaner czyta gorzej. Listę dopuszczonych środków czyszczących znajdziesz na stronie produktu producenta. Napraw i modernizacji nie wykonuj samodzielnie — przeprowadza je wyłącznie autoryzowany serwis.' },
        { type: 'p', text: 'CT32 ma wysoką klasę szczelności **IP68**, ale przy czyszczeniu zachowaj ostrożność:' },
        { type: 'list', items: [
          'nie zanurzaj terminala w płynie czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku skanera i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie ani okienkach — mogą uszkodzić powłokę;',
          'przed włożeniem do ładowarki lub stacji upewnij się, że wszystkie elementy są suche — łączenie mokrych podzespołów może spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
      ],
    },
  ],
}
