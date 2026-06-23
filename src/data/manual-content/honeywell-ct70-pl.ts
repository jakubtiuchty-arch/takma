import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell CT70 po polsku.
 * Opracowanie TAKMA na podstawie oficjalnej dokumentacji producenta (User Guide,
 * 136 stron) — własnym głosem, w skondensowanej, praktycznej formie.
 */
export const honeywellCt70Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze terminala Honeywell CT70 po polsku — od pierwszego uruchomienia, przez skanowanie, telefon i sieci, po aktualizacje, resety i konserwację.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie',
      blocks: [
        { type: 'p', text: 'CT70 dostarczany jest z baterią naładowaną tylko częściowo. Przed pierwszym użyciem naładuj go **minimum 3 godziny** w oryginalnej stacji lub ładowarce z serii CT70. Praca podczas ładowania wydłuża czas pełnego naładowania.' },
        { type: 'p', text: 'Aby włączyć urządzenie, **przytrzymaj przycisk zasilania przez około 3 sekundy** i puść. Przy pierwszym starcie pojawi się ekran powitalny — możesz przejść konfigurację w kreatorze albo zeskanować kod konfiguracyjny, co przyspiesza wdrożenie wielu sztuk jednocześnie (Wi-Fi Staging).' },
      ],
    },
    {
      title: 'Bateria: wymiana, hot-swap i kondycja',
      blocks: [
        { type: 'p', text: 'Gdy poziom baterii jest niski, naładuj ją w terminalu lub wymień na naładowaną. CT70 obsługuje **hot-swap** — wymianę bez wyłączania urządzenia. W trakcie wymiany wbudowane zasilanie awaryjne podtrzymuje ekran, Wi-Fi i uruchomione aplikacje.' },
        { type: 'p', text: 'Aby wymienić baterię: wyłącz terminal lub rozpocznij hot-swap, zwolnij pasek na dłoń, wciśnij zatrzaski po obu stronach baterii i wyjmij ją.' },
        { type: 'p', text: 'Zasady bezpiecznego hot-swapu:' },
        { type: 'list', items: [
          'włóż naładowaną baterię **w ciągu 60 sekund** od wyjęcia poprzedniej;',
          'nie wyjmuj ani nie wkładaj karty microSD lub nano-SIM podczas wymiany;',
          'jeśli pojawi się komunikat o niskim zasilaniu awaryjnym, przed kolejną wymianą odczekaj, aż zniknie.',
        ] },
        { type: 'p', text: 'Jeśli zasilanie awaryjne się wyczerpie, terminal wyłączy się i możesz stracić niezapisane dane — po włożeniu baterii włącz go ponownie przyciskiem zasilania. Stan, poziom i kondycję baterii sprawdzisz w ustawieniach; baterii litowo-jonowych nie otwieraj, nie zgniataj, nie nagrzewaj powyżej 60°C i utylizuj zgodnie z przepisami.' },
      ],
    },
    {
      title: 'Blokada ekranu i Face Unlock',
      blocks: [
        { type: 'p', text: 'Zaraz po wdrożeniu ustaw **blokadę ekranu**, by chronić dane. Zalecane jest hasło — najlepiej silne (cyfry, znaki specjalne, różna wielkość liter). Blokadę zmienisz w Ustawieniach zabezpieczeń.' },
        { type: 'p', text: 'CT70 obsługuje **Face Unlock** (rozpoznawanie twarzy przednim aparatem). Aby odblokować: naciśnij przycisk zasilania, a gdy na dole ekranu pojawi się ikona twarzy, trzymaj terminal w odległości **25–75 cm** od twarzy, aż się odblokuje. Face Unlock skonfigurujesz i usuniesz w ustawieniach zabezpieczeń.' },
      ],
    },
    {
      title: 'Interfejs Androida i nawigacja',
      blocks: [
        { type: 'p', text: 'Lista aplikacji: przesuń palcem **w górę od dołu ekranu głównego**. Pasek stanu u góry pokazuje ikony statusu (sieć, bateria, powiadomienia). Przeciągnięcie w dół rozwija powiadomienia, a kolejne — **szybkie ustawienia** (Wi-Fi, Bluetooth, latarka, jasność).' },
        { type: 'p', text: 'Ekran główny i tackę ulubionych można dostosować. Fizyczne przyciski (skanowania, funkcyjne) można **przemapować** na inne funkcje w ustawieniach Honeywell, a w razie potrzeby przywrócić ich domyślne działanie. Ustaw też prawidłową strefę czasową.' },
      ],
    },
    {
      title: 'Pamięć microSD i przenoszenie plików',
      blocks: [
        { type: 'p', text: 'Kartą **microSD/microSDHC** zwiększysz pamięć lub zainstalujesz oprogramowanie. Honeywell zaleca karty przemysłowe SLC dla najlepszej wydajności i trwałości. Kartę sformatuj przed pierwszym użyciem.' },
        { type: 'p', text: 'Aby włożyć kartę: zapisz pliki, zamknij aplikacje, przytrzymaj zasilanie i wybierz „Wyłącz", a następnie zainstaluj kartę zgodnie z instrukcją w komorze baterii.' },
        { type: 'p', text: 'Pliki przeniesiesz przez kabel **USB** — po podłączeniu do komputera wybierz na terminalu tryb przesyłania plików.' },
      ],
    },
    {
      title: 'Skanowanie kodów kreskowych',
      blocks: [
        { type: 'p', text: 'Wbudowany skaner (imager) jest domyślnie włączony. Czyta kody **dookólnie (360°)**, a wiązka celownicza pomaga wycelować. Aby zeskanować kod do pola tekstowego: otwórz pole tekstowe w aplikacji, nakieruj terminal i naciśnij przycisk skanowania — funkcja **scan wedge** wstawi wartość tak, jakby była wpisana z klawiatury.' },
        { type: 'p', text: 'Poprawny odczyt potwierdza **dioda Good Read** oraz sygnał dźwiękowy/wibracja. Do testów i sprawdzania symbologii służy aplikacja **Scan Demo**: lista aplikacji → „Demos" → „Scan Demo".' },
      ],
    },
    {
      title: 'Ustawienia skanera i profile',
      blocks: [
        { type: 'p', text: 'Zachowanie skanera dostosujesz w ustawieniach: włączane symbologie, prefiksy/sufiksy, tryb celownika, sygnalizacja odczytu. Można też skonfigurować **skaner Bluetooth** (np. pierścieniowy) sparowany z terminalem.' },
        { type: 'p', text: 'Dla różnych aplikacji twórz **profile ustawień skanowania** — każdy z własną konfiguracją, aktywowaną automatycznie dla danej aplikacji. Profile można dodawać i usuwać, a ustawienia w każdej chwili przywrócić do domyślnych.' },
      ],
    },
    {
      title: 'Smart OCR — odczyt tekstu',
      blocks: [
        { type: 'p', text: 'CT70 potrafi odczytywać **tekst (OCR)**, nie tylko kody — przydatne przy numerach seryjnych, datach czy polach formularzy. Funkcję **Smart OCR** włączysz i skonfigurujesz w ustawieniach skanera.' },
        { type: 'p', text: 'Wyniki można filtrować i porządkować regułami **regex** (własne wzorce, sekwencje, kolejność wyników), a konfigurację wdrożyć masowo narzędziem EZConfig.' },
      ],
    },
    {
      title: 'Telefon: SIM, eSIM i połączenia',
      blocks: [
        { type: 'p', text: 'Wersje z modemem obsługują **nano-SIM** oraz **eSIM**, a także **Dual SIM Dual Standby (DSDS)** — dwie karty jednocześnie z wyborem preferowanej do danych i automatycznym przełączaniem. Kartę nano-SIM instalujesz w komorze; eSIM aktywujesz programowo (przy DSDS możesz łączyć eSIM z nano-SIM).' },
        { type: 'p', text: 'Po aktywacji wybierz/ustaw SIM, sieć i uprawnienia. Połączenia wykonujesz z aplikacji telefonu; obsługiwane są połączenia **alarmowe** oraz aplikacje **Push-to-Talk**. W trakcie rozmowy możesz przełączać aplikacje.' },
      ],
    },
    {
      title: 'Aparat i latarka',
      blocks: [
        { type: 'p', text: 'CT70 ma kolorowy aparat do zdjęć i nagrań wideo z regulacją zoomu i ustawieniami jakości. Diody aparatu możesz wykorzystać jako **latarkę** z poziomu szybkich ustawień.' },
      ],
    },
    {
      title: 'Sieć Wi-Fi',
      blocks: [
        { type: 'p', text: 'Radio Wi-Fi (z obsługą standardu **Wi-Fi 7**) jest domyślnie wyłączone. Aby połączyć się z siecią:' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji (przesuń w górę od dołu ekranu);',
          'wejdź w **Ustawienia → Sieć i internet → Internet**;',
          'włącz **Wi-Fi** przełącznikiem;',
          'wybierz sieć z listy; jeśli jej nie ma, użyj „Dodaj sieć", wpisz nazwę (SSID) i wybierz zabezpieczenie;',
          'podaj hasło/dane i naciśnij „Połącz".',
        ] },
        { type: 'p', text: 'Po zapisaniu sieci terminal łączy się z nią automatycznie w zasięgu. Stuknięcie nazwy pokazuje szczegóły (siła sygnału, prędkość, częstotliwość, zabezpieczenia). Dodatkowe opcje korporacyjne znajdziesz w **Honeywell Wi-Fi Settings**.' },
      ],
    },
    {
      title: 'Bluetooth',
      blocks: [
        { type: 'p', text: 'Aby sparować urządzenie Bluetooth (drukarkę, headset, skaner pierścieniowy):' },
        { type: 'list', ordered: true, items: [
          'otwórz listę aplikacji;',
          'wejdź w **Ustawienia → Połączone urządzenia**;',
          'wybierz **„Sparuj nowe urządzenie"**;',
          'wskaż urządzenie z listy i potwierdź — zweryfikuj zgodność kodu PIN po obu stronach, a następnie naciśnij „Paruj".',
        ] },
        { type: 'p', text: 'Sparowane urządzenia możesz przemianować lub rozłączyć w tym samym menu.' },
      ],
    },
    {
      title: 'Ethernet, VPN i bezpieczeństwo sieci',
      blocks: [
        { type: 'p', text: 'Przez stację dokującą terminal łączy się z siecią **Ethernet**. Obsługiwane są też połączenia **VPN** oraz **tethering** (udostępnianie danych przez USB lub Bluetooth).' },
        { type: 'p', text: 'W sieciach firmowych skonfigurujesz zabezpieczenia bezprzewodowe i **certyfikaty** (np. EAP/WPA2-Enterprise). Do diagnostyki połączeń służy aplikacja WiFi Diagnostic.' },
      ],
    },
    {
      title: 'Dźwięk i powiadomienia',
      blocks: [
        { type: 'p', text: 'Głośność regulujesz przyciskami bocznymi lub w ustawieniach dźwięku (osobno multimedia, dzwonek, alarmy). Dostępny jest **tryb wibracji** oraz ustawienia sygnalizacji odczytu skanera.' },
      ],
    },
    {
      title: 'Aktualizacje oprogramowania',
      blocks: [
        { type: 'p', text: 'Aktualizacje systemu i firmware instaluje się z pliku (np. z karty microSD lub przez narzędzia zarządzania flotą). Niektóre aktualizacje wymagają **ponownego uruchomienia** terminala — w trakcie nie wyłączaj urządzenia. Aktualne oprogramowanie i dokumentacja są dostępne u producenta oraz przez TAKMA.' },
      ],
    },
    {
      title: 'Restart i przywracanie ustawień',
      blocks: [
        { type: 'p', text: '**Restart** (gdy aplikacja przestaje odpowiadać): zapisz pliki, przytrzymaj zasilanie do menu i wybierz „Uruchom ponownie". Gdy ekran nie reaguje, **przytrzymaj zasilanie ok. 8 sekund** — terminal uruchomi się ponownie.' },
        { type: 'p', text: 'Gdy restart nie pomaga, dostępne są resety — każdy **kasuje dane**, więc to ostateczność:' },
        { type: 'list', items: [
          '**Enterprise data reset** — czyści dane z pamięci wewnętrznej, zostawiając kartę IPSM;',
          '**Reset fabryczny** — kasuje wszystkie dane i ustawienia.',
        ] },
        { type: 'p', text: 'Przed resetem: wykonaj kopię konta Google, przygotuj hasło/PIN blokady ekranu i podłącz zasilanie lub naładuj baterię. Jeśli niedawno zmieniałeś hasło konta Google, odczekaj 24 godziny.' },
      ],
    },
    {
      title: 'Czyszczenie i konserwacja',
      blocks: [
        { type: 'p', text: 'Brudne okienko skanera pogarsza odczyt — czyść je, gdy jest widocznie zabrudzone lub skaner czyta gorzej. CT70 ma klasę szczelności **IP65/IP68**, ale przy czyszczeniu zachowaj ostrożność:' },
        { type: 'list', items: [
          'nie zanurzaj terminala w płynie czyszczącym;',
          'nie używaj ściernych chusteczek na okienku i ekranie (rysują);',
          'nie stosuj rozpuszczalników (np. acetonu) na obudowie i okienkach;',
          'przed włożeniem do ładowarki upewnij się, że wszystkie elementy są suche — mokre styki mogą spowodować uszkodzenie nieobjęte gwarancją.',
        ] },
      ],
    },
  ],
}
