import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell CK62 po polsku.
 * Opracowanie TAKMA na podstawie oficjalnej dokumentacji producenta (User Guide,
 * 114 stron) — własnym głosem, w skondensowanej, praktycznej formie.
 */
export const honeywellCk62Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze terminala Honeywell CK62 po polsku — fizyczna klawiatura, przyciski skanowania, odczyt kodów, sieci, bateria i konserwacja.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'CK62 dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem ładuj go **minimum 4 godziny** w oryginalnej ładowarce lub stacji z serii CK62. Praca podczas ładowania wydłuża czas pełnego naładowania.' },
        { type: 'p', text: 'Aby włączyć urządzenie, **przytrzymaj przycisk zasilania przez około 3 sekundy** i puść. Przy pierwszym starcie pojawi się ekran powitalny — wybierz język i naciśnij „Start".' },
        { type: 'p', text: 'Konfigurację możesz przejść ręcznie w kreatorze albo **zeskanować kod konfiguracyjny**, co przyspiesza wdrożenie wielu sztuk jednocześnie. W kreatorze ustawisz sieć Wi-Fi, datę, godzinę i strefę czasową, nazwę terminala oraz zabezpieczenia. Po zakończeniu wstępnej konfiguracji ekran powitalny znika, a tryb provisioningu wyłącza się automatycznie — od tej pory instalacja aplikacji, certyfikatów czy licencji przez skanowanie kodu jest zablokowana, dopóki nie włączysz trybu provisioningu ponownie.' },
      ],
    },
    {
      title: 'Bateria: ładowanie, wymiana i hot-swap',
      blocks: [
        { type: 'p', text: 'CK62 zasila wymienna bateria litowo-jonowa (model CK65-BTSC). Na żywotność baterii wpływają jasność ekranu, czas wygaszania, urządzenia wejściowe oraz skrajne temperatury. Gdy poziom jest niski, naładuj baterię w terminalu lub wymień na naładowaną.' },
        { type: 'p', text: 'CK62 obsługuje **hot-swap** — wymianę baterii bez wyłączania urządzenia — pod warunkiem, że terminal pracuje od co najmniej **4 minut**, a nową baterię włożysz **w ciągu 30 sekund** od wyjęcia poprzedniej.' },
        { type: 'p', text: 'Aby wymienić baterię:' },
        { type: 'list', ordered: true, items: [
          'zapisz pliki i zamknij aplikacje;',
          'przytrzymaj zasilanie i wybierz „Wyłącz" (lub rozpocznij hot-swap);',
          'jeśli założony jest pasek na dłoń, odepnij go u dołu terminala;',
          'przesuń zatrzask baterii w jej stronę, aby zwolnić blokadę;',
          'unieś krawędź baterii i wyjmij ją, a następnie włóż naładowaną i dociśnij dolną krawędź aż do zatrzaśnięcia.',
        ] },
        { type: 'p', text: 'Stan, poziom i kondycję baterii sprawdzisz w **Ustawieniach → Bateria** lub w **Honeywell Settings → Battery Optimizer** (oraz w aplikacji BattMon). Baterię wymieniaj okresowo — zwykle co dwa lata lub gdy jej kondycja spadnie poniżej 70%. Nie przechowuj baterii w temperaturze powyżej 45°C, nie używaj, gdy jest spuchnięta lub odkształcona, nie otwieraj, nie zgniataj, nie nagrzewaj powyżej 60°C i utylizuj zgodnie z lokalnymi przepisami.' },
      ],
    },
    {
      title: 'Blokada ekranu',
      blocks: [
        { type: 'p', text: 'Blokada ekranu uruchamia się automatycznie po każdym włączeniu terminala i po wybudzeniu ze stanu uśpienia. Aby odblokować, **przesuń palcem w górę od ikony kłódki** u dołu ekranu.' },
        { type: 'p', text: 'Domyślne ustawienie „Przesunięcie" nie chroni przed dostępem osób niepowołanych. Zaraz po wdrożeniu zmień blokadę na bezpieczniejszą — zalecane jest **hasło** (najlepiej silne: cyfry, znaki specjalne, różna wielkość liter). Otwórz **Ustawienia → Bezpieczeństwo i prywatność → Odblokowanie urządzenia → Blokada ekranu** i wybierz wzór, PIN lub hasło.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'CK62 pracuje pod Androidem (14) z dotykowym interfejsem. Po starcie pojawia się ekran główny z paskiem stanu u góry, paskiem wyszukiwania Google, panelami ekranu głównego i tacką ulubionych na dole. Listę wszystkich aplikacji otworzysz, **przesuwając palcem w górę od dołu ekranu**.' },
        { type: 'p', text: 'Przeciągnięcie w dół od góry ekranu rozwija panel powiadomień. **Drugie przeciągnięcie w dół** otwiera szybkie ustawienia (Wi-Fi, Bluetooth, latarka, jasność). Pasek stanu pokazuje ikony sieci, baterii, dźwięku oraz status klawiatury (np. blokada Caps).' },
        { type: 'p', text: 'Ekran obsługujesz gestami: stuknięcie, stuknięcie z przytrzymaniem, przeciąganie, machnięcie, powolne przesunięcie, dwukrotne stuknięcie (powiększenie) oraz zsuwanie i rozsuwanie dwóch palców. Ekran główny i tacka ulubionych są w pełni konfigurowalne. Ustaw też prawidłową strefę czasową w **Ustawienia → System → Data i godzina**.' },
      ],
    },
    {
      title: 'Fizyczna klawiatura i klawisze modyfikujące',
      blocks: [
        { type: 'p', text: 'CK62 jest dostępny w dwóch wersjach klawiatury fizycznej: **numerycznej z klawiszami funkcyjnymi** oraz **alfanumerycznej z klawiszami funkcyjnymi**. Klawiatura korzysta z kolorowych klawiszy modyfikujących (**pomarańczowy** i **niebieski**), które dają dostęp do wszystkich znaków, cyfr, symboli i funkcji opisanych na klawiszach i nakładce.' },
        { type: 'p', text: 'Każdy klawisz modyfikujący możesz **zablokować** — naciśnij go dwukrotnie szybko po sobie, aby pisać tylko symbole lub znaki specjalne; kolejne naciśnięcie odblokowuje modyfikator. Stan modyfikatora widać na pasku stanu.' },
        { type: 'p', text: 'Na klawiaturze numerycznej:' },
        { type: 'list', items: [
          'cyfrę wpisujesz jednym naciśnięciem odpowiedniego klawisza;',
          'małą literę: naciśnij raz pomarańczowy modyfikator (drugie naciśnięcie blokuje tryb literowy), a potem klawisz z literą zaznaczoną na pomarańczowo;',
          'wielkie litery: naciśnij pomarańczowy modyfikator dwukrotnie, aby zablokować tryb literowy, a potem klawisz Shift, aby włączyć Caps Lock — na pasku stanu pojawi się „A";',
          'znaki specjalne i funkcje opisane na niebiesko: naciśnij niebieski modyfikator, a następnie odpowiedni klawisz.',
        ] },
        { type: 'p', text: 'Na klawiaturze alfanumerycznej litery i cyfry wpisujesz bezpośrednio. Pojedynczą wielką literę uzyskasz, naciskając pomarańczowy modyfikator i klawisz Caps. Symbole (np. @, #) wpisujesz, naciskając najpierw pomarańczowy modyfikator, a funkcje opisane na niebiesko — przez niebieski modyfikator.' },
      ],
    },
    {
      title: 'Klawisze funkcyjne i przemapowanie przycisków',
      blocks: [
        { type: 'p', text: 'Klawiatura udostępnia konfigurowalne **klawisze funkcyjne F1–F20**. Klawisze F1–F10 (numeryczna) lub F1–F3 (alfanumeryczna) wywołujesz bezpośrednim naciśnięciem. Klawisze F11–F20 (numeryczna) lub F4–F20 (alfanumeryczna) oraz funkcje opisane na niebiesko uzyskasz, naciskając najpierw niebieski modyfikator, a potem właściwy klawisz.' },
        { type: 'p', text: 'Możesz **przemapować** działanie przycisków skanowania (lewy i prawy), wirtualnych przycisków Wstecz, Ekran główny i Ostatnie aplikacje oraz klawiszy F1–F20. Otwórz **Ustawienia → Honeywell Settings → Keyremap**, stuknij znak plus, naciśnij wybrany przycisk, a następnie przypisz mu: funkcję (Keys), aplikację (Apps), intencję/broadcast (Actions), polecenie powłoki ADB (Command) lub wpisywany tekst (Text). Domyślne działanie przycisków przywrócisz w tym samym menu ikoną czyszczenia.' },
      ],
    },
    {
      title: 'Pamięć microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD/microSDHC** (zgodną z SDXC/SDHC/SDIO, do 2 TB) zwiększysz pamięć lub zainstalujesz oprogramowanie. Honeywell zaleca karty przemysłowe SLC dla najlepszej wydajności i trwałości. Kartę **sformatuj przed pierwszym użyciem**.' },
        { type: 'p', text: 'Aby włożyć kartę: zapisz pliki, wyłącz terminal, wyjmij baterię, otwórz klapkę gniazda, przesuń uchwyt karty, unieś go, włóż kartę stykami na zewnątrz, zamknij i zablokuj uchwyt, zamknij klapkę i włóż baterię z powrotem.' },
        { type: 'p', text: 'Pliki przenosisz przez kabel **USB** (CK62 obsługuje USB 3.0 o szybkości do 4800 Mb/s). Domyślnie przesyłanie plików jest wyłączone — po podłączeniu do komputera przeciągnij w dół panel powiadomień, stuknij dwukrotnie powiadomienie systemu Android i wybierz **„Przesyłanie plików"** lub **PTP**. Na komputerze Mac użyj aplikacji Android File Transfer.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'CK62 wyposażony jest w wydajny imager Honeywell w jednej z dwóch wersji: **S0703-SR (standardowy zasięg)** lub **S0803-XLR FlexRange** o bardzo dużym zasięgu — odczyt kodów 100 mils sięga ponad **20 metrów**. Skaner jest domyślnie włączony, czyta kody 1D i 2D, kody złożone i pocztowe, a także obsługuje odczyt **dookólny (360°)**. Wiązka celownicza pomaga wycelować.' },
        { type: 'p', text: 'Aby zeskanować kod:' },
        { type: 'list', ordered: true, items: [
          'skieruj okienko skanera na kod (najlepiej pod lekkim kątem, by uniknąć odbić);',
          'naciśnij i przytrzymaj dowolny przycisk skanowania — **prawy, lewy lub przedni**;',
          'wyśrodkuj wiązkę celowniczą na kodzie tak, by cały kod mieścił się w ramce oświetlenia;',
          'zwolnij przycisk, gdy terminal zasygnalizuje odczyt dźwiękiem, a dioda statusu skanowania błyśnie — dane trafią do aktywnej aplikacji.',
        ] },
        { type: 'p', text: 'Poprawny odczyt potwierdza **dioda statusu skanowania** (zielony = sukces, czerwony = błąd, sprawdź wtedy włączone symbologie) oraz sygnał dźwiękowy. Funkcja **scan wedge** wstawia odczytaną wartość do pola tekstowego tak, jakby pochodziła z klawiatury. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo** (lista aplikacji → „Demos" → „Scan Demo"). Część symbologii (np. Code 39, Code 128, EAN, UPC, QR, DataMatrix, PDF 417, Aztec) jest włączona domyślnie — pozostałe trzeba włączyć w ustawieniach skanera.' },
      ],
    },
    {
      title: 'Ekranowy przycisk skanowania',
      blocks: [
        { type: 'p', text: 'Jeśli Twoja aplikacja wymaga skanowania bez użycia klawiszy, włącz **ekranowy (cyfrowy) przycisk skanowania** w **Ustawienia → Honeywell Settings → Digital Scan Button**. Po włączeniu możesz dostosować jego rozmiar, kolor (7 opcji), przezroczystość oraz położenie na ekranie, a także wybrać aplikacje, w których przycisk ma być widoczny.' },
        { type: 'p', text: 'Po skonfigurowaniu przycisk pojawia się w wybranych aplikacjach — stuknij go i przytrzymaj, aby uruchomić skaner i odczytać kod.' },
      ],
    },
    {
      title: 'Ustawienia skanera i profile',
      blocks: [
        { type: 'p', text: 'Zachowanie skanera dostosujesz w **Ustawienia → Honeywell Settings → Scanning → Internal Scanner → Default profile**. Zmiany w profilu domyślnym dotyczą wszystkich aplikacji bez przypisanego profilu. Dostępne grupy ustawień:' },
        { type: 'list', items: [
          '**Data Processing** — funkcja wedge, prefiks/sufiks, zestaw znaków, obsługa kodów URL i kodów scan-to-intent;',
          '**Symbology** — włączanie i wyłączanie poszczególnych symbologii (im krótsza lista aktywnych, tym szybsze skanowanie);',
          '**Decode** — odczyt kodów gęstych lub słabej jakości, tryb DPM (kody grawerowane), skanowanie wielu kodów jednocześnie (Multicode), preferowana symbologia;',
          '**Trigger** — działanie przycisków skanowania: tryb One Shot, ciągły, odczyt po zwolnieniu lub po drugim naciśnięciu, czas wygaszania, tryb prezentacyjny;',
          '**Notification** — sygnalizacja odczytu: dioda, dźwięk i wibracja.',
        ] },
        { type: 'p', text: 'Dla różnych aplikacji twórz **osobne profile skanowania** — każdy z własną konfiguracją aktywowaną automatycznie dla danej aplikacji. Profile dodajesz i usuwasz w sekcji Internal Scanner, a ustawienia w każdej chwili przywrócisz opcją „Restore all defaults". Z terminalem możesz też sparować **skaner Bluetooth** (np. Granit 1990i/1991i) i skonfigurować dla niego osobny profil.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'CK62 potrafi odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach, ilościach czy polach formularzy. Funkcję włączysz w **Ustawienia → Honeywell Settings → Scanning → Internal Scanner → Default profile → OCR Settings → Enable OCR**. Smart OCR wymaga licencji (urządzenie dostarczane jest z 60-dniową licencją próbną); bez aktywnej licencji menu OCR się nie pojawia.' },
        { type: 'p', text: 'Tekst skanujesz jak kod — przyciskiem skanowania, z zalecanej odległości **6–30 cm**, kierując wiązkę celowniczą na tekst. W ustawieniach OCR dobierzesz tryb wyniku (linia lub blok), rozmiar i kształt okna skanowania oraz sygnalizację.' },
        { type: 'p', text: 'Wyniki możesz filtrować i porządkować regułami **regex** (wbudowane wzorce, np. numer telefonu, kod pocztowy, sam numer, oraz własne reguły z testowaniem dopasowania). Tryby Sequence Regex i Results in Order pozwalają zwracać wiele wyników w określonej kolejności. Konfigurację OCR wdrożysz masowo narzędziem **EZConfig** (eksport pliku Datacollectionservice.xml).' },
      ],
    },
    {
      title: 'Telefon: SIM, eSIM i połączenia',
      blocks: [
        { type: 'p', text: 'Funkcje telefoniczne dostępne są wyłącznie w modelach **CK62X10 (WWAN)**. Obsługują **nano-SIM** oraz **eSIM**, a także tryb **Dual SIM Dual Standby (DSDS)** — dwie karty jednocześnie (np. numer służbowy i prywatny) z wyborem, której użyć do połączeń czy wiadomości. Ustawienia kart znajdziesz w **Ustawienia → Sieć i internet → Sieć komórkowa**.' },
        { type: 'p', text: 'eSIM aktywujesz aplikacją **eSIM Toolkit** — zeskanuj kod QR od operatora lub wpisz kod aktywacyjny ręcznie, a następnie włącz pobrany profil (jednocześnie aktywny może być tylko jeden profil). Kartę nano-SIM instalujesz po wyłączeniu terminala i wyjęciu baterii: otwórz klapkę gniazda, odblokuj uchwyt, włóż kartę stykami na zewnątrz, zablokuj uchwyt i zamknij klapkę.' },
        { type: 'p', text: 'Połączenia wykonujesz z aplikacji telefonu (klawiatura, kontakty, ulubione, ostatnie). **Połączenie alarmowe** wykonasz nawet bez karty SIM i bez odblokowania ekranu — przytrzymaj zasilanie i wybierz „Połączenie alarmowe" (numery m.in. 112, 911, 999). W trakcie rozmowy możesz przełączać aplikacje; ikona połączenia pozostaje wtedy na pasku stanu.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'CK62 ma **16-megapikselowy aparat kolorowy** z nagrywaniem wideo Full HD 1080p, stabilizacją obrazu i automatyczną regulacją ekspozycji. Obiektyw i lampa znajdują się z tyłu terminala. Zdjęcia i nagrania zapisują się w pamięci wewnętrznej w folderze DCIM\\Camera; przeglądasz je w aplikacji Zdjęcia.' },
        { type: 'p', text: 'Powiększenie obsługujesz gestem zsuwania i rozsuwania dwóch palców na ekranie. W aplikacji aparatu dostosujesz tryb (automatyczny lub ProMode), filtry kolorów oraz ustawienia lampy. Diody aparatu wykorzystasz jako **latarkę** — włączysz ją z poziomu szybkich ustawień.' },
      ],
    },
    {
      title: 'Sieci: Wi-Fi, Bluetooth, VPN i udostępnianie danych',
      blocks: [
        { type: 'p', text: 'Radio Wi-Fi (802.11 a/b/g/n/ac/**ax**, dwuzakresowe) jest domyślnie wyłączone. Aby połączyć się z siecią, wejdź w **Ustawienia → Sieć i internet → Internet**, włącz Wi-Fi i wybierz sieć z listy. Jeśli sieci nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID), wybierz zabezpieczenie i podaj dane, a następnie naciśnij „Połącz". Po zapisaniu terminal łączy się automatycznie w zasięgu; stuknięcie nazwy pokazuje szczegóły (siła sygnału, prędkość, częstotliwość, zabezpieczenia).' },
        { type: 'p', text: 'Zaawansowane opcje korporacyjne (w tym certyfikaty WPA2-Enterprise i ustawienia proxy) znajdziesz w **Honeywell Wi-Fi Settings** oraz w aplikacji WiFi Diagnostic. Gdy łączność szwankuje, użyj funkcji „Fix Connectivity" — restartuje ona podsystem Wi-Fi bez kasowania zapisanych sieci.' },
        { type: 'p', text: 'Urządzenie **Bluetooth** (v5.3 z BLE — drukarkę, zestaw słuchawkowy, skaner pierścieniowy) sparujesz w **Ustawienia → Połączone urządzenia → Sparuj nowe urządzenie**: wskaż urządzenie z listy, zweryfikuj zgodność kodu PIN po obu stronach i potwierdź parowanie. Sparowane urządzenia możesz przemianować lub rozłączyć w tym samym menu.' },
        { type: 'p', text: 'CK62 obsługuje też połączenia **VPN** (najpierw utwórz profil w Ustawienia → Sieć i internet → VPN; VPN wymaga ustawionej blokady ekranu) oraz **udostępnianie danych** — przez USB, Bluetooth lub jako przenośny hotspot Wi-Fi (Ustawienia → Sieć i internet → Hotspot i tethering).' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Ustawienia dźwięku znajdziesz w **Ustawienia → Dźwięk i wibracje**. Osobno regulujesz głośność multimediów, połączeń, dzwonka, powiadomień, alarmów oraz **sygnału skanowania (Scanbeep)**. Dostępny jest tryb „Nie przeszkadzać", napisy na żywo, wibracje i reakcje dotykowe.' },
        { type: 'p', text: 'Powiadomieniami zarządzasz w panelu powiadomień (przeciągnięcie w dół od góry ekranu) oraz w **Ustawienia → Powiadomienia** — tam ustawisz, które aplikacje mogą powiadamiać, jak wyświetlać powiadomienia na ekranie blokady oraz czy dioda ma migać przy nowych zdarzeniach.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Honeywell udostępnia poprawki, aktualizacje bezpieczeństwa i nowe wersje systemu w ramach usług Honeywell Edge (dostępność zależy od statusu gwarancji i umowy serwisowej). Pliki pobiera się z portalu Software Downloads, a aktualizacje warto instalować regularnie ze względów bezpieczeństwa.' },
        { type: 'p', text: 'Aktualizację instalujesz na trzy sposoby: **AutoInstall** (zapis pliku .zip lub .apk w folderze honeywell\\autoinstall przy włączonym trybie provisioningu), z **karty microSD** (plik w folderze \\honeywell\\autoinstall na karcie) albo aplikacją **HUpgrader**, która pobiera i instaluje aktualizacje OTA z serwera. **Podczas instalacji terminal musi mieć zasilanie — nie wyjmuj baterii**, bo może to uszkodzić oprogramowanie. Część aktualizacji wymaga ponownego uruchomienia.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, przytrzymaj zasilanie do pojawienia się menu i wybierz „Uruchom ponownie". Gdy ekran dotykowy nie reaguje, **przytrzymaj zasilanie przez około 8 sekund** — terminal uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety — każdy **kasuje dane**, więc to ostateczność:' },
        { type: 'list', items: [
          '**Enterprise data reset** — czyści dane z pamięci wewnętrznej, zostawiając zawartość karty IPSM;',
          '**Erase all data (reset fabryczny)** — kasuje wszystkie dane z pamięci wewnętrznej i karty IPSM, przywracając stan fabryczny.',
        ] },
        { type: 'p', text: 'Resety wykonujesz w **Ustawienia → System → Opcje resetowania**. Przed resetem: wykonaj kopię konta Google, przygotuj hasło/PIN/wzór blokady ekranu, podłącz zasilanie lub naładuj baterię i zapewnij połączenie z internetem. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj **24 godziny**. Pamiętaj, że po resecie fabrycznym terminal poprosi o login i hasło konta Google przypisanego do urządzenia.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'CK62 nie wymaga szczególnej konserwacji, ale brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub skaner czyta gorzej. Obudowę, okienko skanera, okienko aparatu i ekran przetrzyj **miękką ściereczką zwilżoną wodą lub łagodnym roztworem detergentu**; po użyciu detergentu zetrzyj resztki ściereczką zwilżoną samą wodą.' },
        { type: 'p', text: 'CK62 ma klasę szczelności **IP65**, ale przy czyszczeniu zachowaj ostrożność:' },
        { type: 'list', items: [
          'nie zanurzaj terminala w wodzie ani w roztworze czyszczącym;',
          'nie używaj ściernych chusteczek na okienkach i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach;',
          'przed włożeniem do ładowarki lub podłączeniem akcesoriów upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
      ],
    },
  ],
}
