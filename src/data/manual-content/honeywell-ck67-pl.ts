import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell CK67 po polsku.
 * Opracowanie TAKMA na podstawie oficjalnej dokumentacji producenta (User Guide,
 * 136 stron) — własnym głosem, w skondensowanej, praktycznej formie.
 */
export const honeywellCk67Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze terminala Honeywell CK67 po polsku — fizyczna klawiatura, spusty skanowania, skaner dalekiego zasięgu, sieci, bateria i konserwacja.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'CK67 dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go **minimum 3 godziny** w zgodnej ładowarce lub stacji z serii CK65/CK3. Praca podczas ładowania wydłuża czas pełnego naładowania.' },
        { type: 'p', text: 'Aby włączyć urządzenie, **przytrzymaj przycisk zasilania przez około 3 sekundy** i puść. Przy pierwszym starcie pojawi się ekran powitalny — wybierz język i naciśnij „Start", a następnie przejdź konfigurację ręcznie albo zeskanuj kod konfiguracyjny, co przyspiesza wdrożenie wielu sztuk jednocześnie (aplikacja Wi-Fi Staging).' },
        { type: 'p', text: 'Terminal można też ładować kablem **USB typu C** od komputera-hosta. Źródło musi dostarczać co najmniej **5 V i 0,5 A** — jeśli terminal pobiera więcej prądu, niż dostarcza źródło, ładowanie nie ruszy.' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'CK67 zasila wymienny akumulator litowo-jonowy (model CK65-BTSC; pasują też baterie ze starszego CK65). Gdy poziom baterii jest niski, naładuj ją w terminalu albo wymień na naładowaną.' },
        { type: 'p', text: 'CK67 obsługuje **wymianę na gorąco (hot-swap)** — bez wyłączania urządzenia. Wbudowana bateria podtrzymująca zasila wtedy ekran, Wi-Fi i uruchomione aplikacje. Aby hot-swap się udał:' },
        { type: 'list', items: [
          'wewnętrzna bateria podtrzymująca musi być naładowana (rozładowuje się przy wielu wymianach pod rząd lub w skrajnych temperaturach);',
          'włóż naładowaną baterię **w ciągu 60 sekund** od wyjęcia poprzedniej;',
          'nie wkładaj ani nie wyjmuj karty microSD w trakcie wymiany;',
          'jeśli wymienisz baterię podczas rozmowy telefonicznej, połączenie zostanie przerwane.',
        ] },
        { type: 'p', text: 'Wyjmowanie baterii: wyłącz terminal lub rozpocznij hot-swap, zwolnij jeden koniec paska na dłoń, dociśnij zatrzask baterii w jej stronę i unieś baterię. Wkładanie: włóż naładowaną baterię pod kątem, dociśnij ją, aż zatrzask kliknie, załóż pasek i — jeśli terminal był wyłączony — naciśnij zasilanie.' },
        { type: 'p', text: 'Jeśli bateria podtrzymująca się wyczerpie, terminal wyłączy się i możesz stracić niezapisane dane — po włożeniu baterii włącz go ponownie. Stan, poziom i kondycję baterii sprawdzisz w **Ustawieniach → Bateria** lub w **Honeywell Settings → Battery Optimizer**. Baterię wymieniaj zwykle co dwa lata albo gdy jej kondycja spadnie poniżej 70%. Akumulatorów nie otwieraj, nie zgniataj, nie nagrzewaj powyżej 60°C i nie wrzucaj do ognia; utylizuj zgodnie z przepisami.' },
      ],
    },
    {
      title: 'Blokada ekranu i Face Unlock',
      blocks: [
        { type: 'p', text: 'Blokada ekranu włącza się automatycznie po każdym włączeniu terminala i po wybudzeniu z uśpienia. Domyślne odblokowanie przesunięciem palca **nie chroni** danych — zaraz po wdrożeniu ustaw mocniejszą blokadę w **Ustawienia → Bezpieczeństwo i prywatność → Blokada ekranu**. Zalecane jest **hasło** (cyfry, znaki specjalne, różna wielkość liter); dostępne są też wzór i PIN.' },
        { type: 'p', text: 'CK67 obsługuje **rozpoznawanie twarzy (Face Unlock)** przednim aparatem. Aby odblokować: naciśnij zasilanie, a gdy na dole ekranu pojawi się uśmiechnięta ikona twarzy, trzymaj terminal przed twarzą, aż się odblokuje. Przy włączonym Face Unlock musisz mieć ustawioną metodę zapasową (PIN, wzór lub hasło), której terminal wymaga po każdym włączeniu i restarcie. Twarz skonfigurujesz w **Bezpieczeństwo i prywatność → Odblokowanie urządzenia → Face Unlock**; można dodać kilka obrazów twarzy.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Po starcie pojawia się ekran główny. **Pasek stanu** u góry pokazuje powiadomienia po lewej oraz stan sieci, Wi-Fi i baterii po prawej. Listę wszystkich aplikacji otworzysz, **przesuwając palcem w górę od dołu ekranu**. Przeciągnięcie w dół rozwija powiadomienia, a **dwukrotne** przeciągnięcie w dół — szybkie ustawienia (Wi-Fi, Bluetooth, latarka, Nie przeszkadzać).' },
        { type: 'p', text: 'Pod tacką ulubionych są wirtualne przyciski **Wstecz**, **Ekran główny** i **Ostatnie aplikacje**. Ekran główny i tackę ulubionych dostosujesz, przeciągając i upuszczając ikony; możesz dodać kolejne panele oraz widżety. Pamiętaj o ustawieniu poprawnej strefy czasowej (**Ustawienia → System → Data i godzina**).' },
        { type: 'p', text: 'Dla pracy w rękawicach wybierz profil ekranu dotykowego w **Honeywell Settings → Touch Screen Profile** (np. tryb „Glove enhance" dla rękawic, „Stylus", „Rain" w deszczu). Maksymalna grubość rękawicy dla reakcji ekranu to 2 mm.' },
      ],
    },
    {
      title: 'Fizyczna klawiatura i klawisze modyfikatorów',
      blocks: [
        { type: 'p', text: 'CK67 dostępny jest z różnymi układami fizycznej klawiatury: alfanumerycznymi (51- i 53-klawiszowy) oraz numerycznymi (38-, 42- i 31-klawiszowy duży numeryczny). Wszystkie modele mają dwa klawisze modyfikatorów — **pomarańczowy** i **niebieski** — do wpisywania znaków alternatywnych, symboli i funkcji opisanych na klawiszach i nakładce klawiatury.' },
        { type: 'p', text: 'Diody u dołu klawiatury sygnalizują aktywny modyfikator: pomarańczowa świeci, gdy włączony jest klawisz pomarańczowy, zielona — gdy niebieski. Modyfikator można **zablokować** (np. by pisać same symbole), naciskając go **dwukrotnie szybko po sobie**; ponowne naciśnięcie odblokowuje.' },
        { type: 'p', text: 'Wpisywanie znaków różni się układem:' },
        { type: 'list', items: [
          'klawiatury alfanumeryczne (51/53): literę lub cyfrę wpisujesz wprost; symbol — naciskając najpierw modyfikator, potem klawisz; w układzie 53-klawiszowym jest osobny klawisz **Shift** oraz klawisz **Diament** dający wirtualną klawiaturę z dziewięcioma dodatkowymi znakami;',
          'klawiatury numeryczne (38/42): cyfrę wpisujesz wprost, literę — przez modyfikator pomarańczowy lub niebieski; w pasku stanu pojawia się wskaźnik „a" (tryb liter) i „A" (Shift / Caps Lock);',
          'duża klawiatura numeryczna (31): litery wpisujesz, naciskając klawisz od jednego do czterech razy szybko po sobie, w zależności od położenia znaku na klawiszu.',
        ] },
        { type: 'p', text: 'Caps Lock włączasz odpowiednią sekwencją (np. pomarańczowy + dedykowany klawisz, albo dwukrotny Shift w układzie 53). Klawiatury numeryczne mają też klawisze pomocnicze **F1–F12**, które razem z modyfikatorem dają nawet 24 dodatkowe funkcje.' },
      ],
    },
    {
      title: 'Przyciski nawigacji, spusty skanowania i przemapowanie',
      blocks: [
        { type: 'p', text: 'Po bokach obudowy znajdują się sprzętowe **spusty skanowania**. Skaner wyzwalasz, naciskając przycisk skanowania **prawy, lewy lub przedni** — wszystkie są domyślnie skonfigurowane do wyzwalania imagera. Zależnie od modelu dostępne są też klawisze programowalne (domyślnie np. Push-to-Talk do zestawu słuchawkowego), klawisz **FldExit** (field exit) oraz klawisze strzałek.' },
        { type: 'p', text: 'Działanie przycisków możesz dowolnie **przemapować**: spustów lewego i prawego, przycisku aparatu oraz wirtualnych przycisków Wstecz, Ekran główny, Ostatnie i Szukaj. Wejdź w **Honeywell Settings → Keyremap**, dodaj wpis (+), naciśnij przycisk do przemapowania i przypisz mu: funkcję klawiszową, aplikację, akcję (Intent/Broadcast), polecenie powłoki ADB lub własny tekst.' },
        { type: 'p', text: 'Aby przywrócić fabryczne działanie przycisku, w **Honeywell Settings → Keyremap** dotknij ikony czyszczenia, zaznacz wybrane przyciski (lub „All Select") i naciśnij „Delete".' },
      ],
    },
    {
      title: 'Pamięć microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD** (obsługa do 2 TB, zgodność SDXC/SDHC/SDIO) zwiększysz pamięć lub zainstalujesz oprogramowanie. Honeywell zaleca przemysłowe karty SLC dla najlepszej wydajności i trwałości. Kartę sformatuj przed pierwszym użyciem.' },
        { type: 'p', text: 'Aby włożyć kartę: zapisz pliki i zamknij aplikacje, przytrzymaj zasilanie i wybierz „Wyłącz", zwolnij pasek i **wyjmij baterię**, zdejmij klapkę gniazda microSD, otwórz uchwyt karty, włóż kartę stykami do góry, zamknij uchwyt, załóż klapkę, baterię i pasek, a na końcu włącz terminal.' },
        { type: 'p', text: 'Pliki przeniesiesz przez kabel **USB typu C** (Hi-Speed USB 2.0, do 480 Mb/s). Przesyłanie jest domyślnie wyłączone — po podłączeniu do komputera przeciągnij pasek powiadomień w dół, dotknij dwukrotnie powiadomienia systemu Android i wybierz tryb **File Transfer** lub **PTP**, a potem operuj plikami w menedżerze plików komputera (na Macu użyj Android File Transfer).' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'Wbudowany skaner (imager) jest domyślnie włączony i czyta kody **dookólnie (360°)**, a wiązka celownicza pomaga wycelować. Przed pracą warto w **Honeywell Settings → Scanning → Internal Scanner** włączyć tylko te symbologie, których faktycznie używasz — krótsza lista przyspiesza odczyt.' },
        { type: 'p', text: 'Aby zeskanować kod:' },
        { type: 'list', ordered: true, items: [
          'wyceluj okienko skanera w kod (dla najlepszego odczytu pod lekkim kątem, by uniknąć odbić);',
          'naciśnij i przytrzymaj dowolny spust skanowania (prawy, lewy lub przedni);',
          'nakieruj wiązkę celowniczą tak, by **cały kod** mieścił się w ramce oświetlenia;',
          'puść spust, gdy terminal piknie, a dioda statusu skanera mignie — odczytana wartość trafi do aktywnej aplikacji.',
        ] },
        { type: 'p', text: 'Poprawny odczyt sygnalizuje **zielona dioda Good Read**, dźwięk i opcjonalnie wibracja; czerwona dioda oznacza nieudany odczyt (sprawdź, czy włączona jest właściwa symbologia). Funkcja **scan wedge** wstawia odczytaną wartość do pola tekstowego tak, jakbyś ją wpisał z klawiatury. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo").' },
      ],
    },
    {
      title: 'Skaner FlexRange — odczyt z dużej odległości',
      blocks: [
        { type: 'p', text: 'CK67 można zamówić z imagerem **FlexRange XLR** (oznaczenie S0803-LR) o wyjątkowo szerokim zakresie ostrości — od kodów tuż przy okienku po etykiety na najwyższych regałach. Gwarantowany odczyt sięga kodu **100 mils Code 39 z ok. 20 m**, a w warunkach typowych nawet ponad **26 m**. To czyni go idealnym do magazynów wysokiego składowania, gdzie operator skanuje paletę bez schodzenia z wózka.' },
        { type: 'p', text: 'W ofercie są też imagery o mniejszym zasięgu (standardowy S0703-SR i FlexRange S0803-FR). Niezależnie od wariantu zasada jest ta sama: wyceluj wiązkę w kod i przytrzymaj spust, aż terminal potwierdzi odczyt. Przy odczycie z bardzo dużej odległości ustabilizuj urządzenie, by wiązka spokojnie spoczęła na właściwym kodzie.' },
      ],
    },
    {
      title: 'Ustawienia skanera, spustu i profile',
      blocks: [
        { type: 'p', text: 'Zachowanie skanera dostosujesz w **Honeywell Settings → Scanning → Internal Scanner**: włączane symbologie, prefiksy i sufiksy danych, obsługa kodów URL (Launch Browser), Scan-to-Intent oraz reguły dekodowania (np. „Poor Quality 1D" dla zniszczonych kodów, tryb DPM dla kodów grawerowanych, skanowanie wielokodowe Multicode Scan).' },
        { type: 'p', text: 'W **Trigger Settings** ustawisz pracę spustów skanowania, m.in. **tryb wyzwalania**: „One Shot" (jeden odczyt), „Continuous" (ciągły), „Read on release" (odczyt po puszczeniu) oraz „Read on second trigger press". Dostępny jest też **tryb prezentacyjny** (Presentation Mode) — skaner sam wykrywa kod podsunięty pod okienko. W **Notification Settings** włączysz lub wyłączysz sygnał Good Read / Bad Read oraz wibrację.' },
        { type: 'p', text: 'Dla różnych aplikacji twórz **profile ustawień skanowania** — każdy z własną konfiguracją, przypisaną do wskazanej aplikacji. Profil dodasz ikoną (+), a usuniesz, przytrzymując go na liście i wybierając „Delete". Jeśli używasz **skanera Bluetooth** (np. pierścieniowego), sparuj go i edytuj jego profil w sekcji „Bluetooth Scanner". Gdy potrzebujesz przycisku na ekranie, włącz **cyfrowy przycisk skanowania** w „Digital Scan Button" — ustalisz jego rozmiar, kolor, przezroczystość, położenie i listę aplikacji, w których ma się pojawiać.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'CK67 z odpowiednim imagerem potrafi odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach czy polach formularzy. Funkcję **Smart OCR** włączysz w **Honeywell Settings → Scanning → Internal Scanner → profil → OCR Settings → Enable OCR**.' },
        { type: 'p', text: 'W ustawieniach OCR ustalisz m.in. tryb wyniku (cała linia lub blok tekstu), rozmiar i kształt okna skanowania, liczbę powtórzeń odczytu (redukuje błędy) oraz czy zwracać jeden wynik, czy listę do wyboru. Wyniki uporządkujesz regułami **regex** — możesz korzystać z gotowych wzorców (numer telefonu, kod pocztowy, sama liczba itp.) lub dodać własne. Konfigurację OCR można wdrożyć masowo narzędziem EZConfig.' },
        { type: 'p', text: 'Smart OCR działa w 60-dniowym okresie próbnym; dłuższe użycie wymaga licencji od Honeywell. Jeśli licencji brak, menu „OCR Settings" się nie pojawi.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'CK67 ma dwa kolorowe aparaty: tylny **13 Mpix** (ze stabilizacją obrazu wideo i lampą błyskową) oraz przedni **8 Mpix** (bez lampy, używany m.in. do Face Unlock). Zdjęcie wykonasz aplikacją Aparat — wybierz tryb „Photo" lub „ProMode" (ręczna kontrola ISO, ekspozycji, balansu bieli i ostrości), wykadruj na ekranie i naciśnij spust migawki. Dostępne są tryby HDR i filtry kolorów.' },
        { type: 'p', text: 'Wideo nagrasz w trybie „Video" lub „HFR" (wyższa liczba klatek); w trakcie możesz przybliżać obraz gestem rozsuwania palców, włączać dźwięk i lampę (tylko tylny aparat) oraz robić zdjęcia. Diody lampy wykorzystasz też jako **latarkę** — wystarczy włączyć ikonę latarki w szybkich ustawieniach.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'CK67 wyposażono w radio **Wi-Fi 6E** (802.11 a/b/g/n/ac/ax, 2x2 MU-MIMO). Radio jest domyślnie wyłączone. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem;',
          'wybierz sieć z listy; jeśli jej nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj hasło/dane i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci terminal łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (siła sygnału, prędkość, częstotliwość, zabezpieczenia), a ikona ołówka pozwala je edytować. W razie problemów użyj funkcji **Fix Connectivity** (restart podsystemu Wi-Fi bez kasowania zapisanych sieci). Zaawansowane parametry radia 802.11 znajdziesz w **Honeywell Wi-Fi Settings**; w razie potrzeby skonfigurujesz też serwer proxy dla wybranej sieci.' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'CK67 obsługuje **Bluetooth 5.3** z trybem Low Energy (BLE). Aby sparować urządzenie (drukarkę, zestaw słuchawkowy, skaner pierścieniowy):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"**;',
          'wskaż urządzenie z listy, zweryfikuj zgodność kodu PIN po obu stronach (lub wpisz PIN) i naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Po sparowaniu możesz połączyć się ręcznie, dotykając urządzenia na liście „Sparowane". Nazwę terminala zmienisz w **Połączone urządzenia → Preferencje połączeń → Bluetooth → Nazwa urządzenia**, a sparowane urządzenie przemianujesz lub usuniesz („Forget") w sekcji „Zapisane urządzenia".' },
      ],
    },
    {
      title: 'Ethernet, VPN i bezpieczeństwo sieci',
      blocks: [
        { type: 'p', text: 'Przez stację **CK67 Ethernet Home Base** lub **Net Base** terminal łączy się z siecią **Ethernet** — wstaw go w stację i wejdź w **Ustawienia → Sieć i internet → Ethernet** (połączenie jest domyślnie włączone, domyślnie z DHCP; w razie potrzeby ustawisz adres statyczny).' },
        { type: 'p', text: 'Terminal obsługuje też połączenia **VPN** (dodajesz i edytujesz profile w Ustawieniach — wymagana jest wcześniej ustawiona blokada ekranu). Sieci bezprzewodowe zabezpieczysz protokołami **WPA3 / WPA2 / WPA / 802.1x** (zalecane WPA3 z PSK lub 802.1x). Do uwierzytelniania 802.1x i TLS wczytasz **certyfikaty** cyfrowe (X.509 .crt/.cer lub magazyny .p12/.pfx) w **Bezpieczeństwo i prywatność → Szyfrowanie i dane logowania → Zainstaluj certyfikat**.' },
      ],
    },
    {
      title: 'NFC',
      blocks: [
        { type: 'p', text: 'Każdy CK67 ma wbudowane **NFC**, domyślnie włączone. Aby odczytać tag, przyłóż go w pobliże anteny NFC z tyłu obudowy. Terminal działa jako czytnik/zapis tagów, w trybie peer-to-peer oraz w emulacji karty (np. portfele cyfrowe, Google Pay).' },
        { type: 'p', text: 'NFC wyłączysz w **Ustawienia → Połączone urządzenia → Preferencje połączeń → NFC**. Uwaga: do szyfrowania łącza NFC z użyciem karty UICC kartę instaluje się w **gnieździe SIM 1**.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz klawiszami głośności na klawiaturze (oznaczonymi na niebiesko lub pomarańczowo — użyj modyfikatora i odpowiedniego klawisza), a po otwarciu menu szybkiej regulacji ustawisz osobno multimedia, połączenia, dzwonek, powiadomienia, alarmy oraz **głośność piknięcia skanera** (Scanbeep).' },
        { type: 'p', text: '**Tryb wibracji** włączysz, naciskając modyfikator, a następnie jednocześnie odpowiedni klawisz oraz przycisk zasilania. Dla ciszy bez zakłóceń użyj trybu **Nie przeszkadzać** (z szybkich ustawień lub z harmonogramem w ustawieniach dźwięku). Pełne opcje dźwięku i wibracji znajdziesz w **Ustawienia → Dźwięk i wibracja**.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Honeywell udostępnia łatki, aktualizacje bezpieczeństwa i nowe wersje systemu w ramach usług Honeywell Edge; dostępność zależy od daty zakupu, statusu gwarancji i umowy serwisowej. Pliki pobierzesz z portalu **honeywell.com/PSSsoftware-downloads** (wymagane konto i narzędzie Honeywell Download Manager).' },
        { type: 'p', text: 'Aktualizację instalujesz funkcją **AutoInstall**: wgraj plik (*.zip lub *.apk) do folderu „honeywell\\autoinstall" w pamięci wewnętrznej lub na karcie microSD i w **Honeywell Settings → Provisioning mode → AutoInstall Settings** upewnij się, że AutoInstall jest włączony. **Przez cały czas instalacji terminal musi mieć zasilanie — nie wyjmuj baterii**, bo może to uszkodzić system. Warto też regularnie sprawdzać powiadomienia o cyberbezpieczeństwie producenta.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, przytrzymaj zasilanie do menu i wybierz „Restart". Gdy ekran dotykowy nie reaguje, **przytrzymaj zasilanie około 8 sekund** — terminal uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety w **Ustawienia → System → Opcje resetowania** — każdy **kasuje dane**, więc to ostateczność:' },
        { type: 'list', items: [
          '**Enterprise data reset** — czyści dane z pamięci wewnętrznej, zostawiając dane na karcie IPSM;',
          '**Erase all data (reset fabryczny)** — kasuje wszystkie dane z pamięci wewnętrznej i karty IPSM, przywracając stan fabryczny.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię konta Google, przygotuj hasło/PIN/wzór blokady ekranu, podłącz zasilanie lub naładuj baterię i zapewnij dostęp do internetu. Po resecie fabrycznym, jeśli na terminalu było konto Google, do dalszej pracy potrzebne będą jego dane logowania. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj 24 godziny.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'CK67 jest ultrawytrzymały, z klasą szczelności **IP68**, ale przy czyszczeniu zachowaj ostrożność. Brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub skaner czyta gorzej (listę dopuszczonych środków podaje producent na stronie produktu).' },
        { type: 'list', items: [
          'nie zanurzaj terminala w wodzie ani w płynie czyszczącym;',
          'nie używaj ściernych chusteczek ani ściereczek na okienku skanera i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach;',
          'przed włożeniem do ładowarki lub stacji upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
        { type: 'p', text: 'Napraw i modernizacji nie wykonuj samodzielnie — terminal serwisuje wyłącznie autoryzowany punkt serwisowy.' },
      ],
    },
  ],
}
