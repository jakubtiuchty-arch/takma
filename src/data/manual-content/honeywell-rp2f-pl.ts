import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell RP2f po polsku.
 * Praktyczne kompendium obsługi mobilnej, zasilanej baterią drukarki etykiet
 * i paragonów z drukiem termicznym bezpośrednim — własnym głosem, w skondensowanej formie.
 */
export const honeywellRp2fPl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze mobilnej drukarki Honeywell RP2f po polsku — od pierwszego uruchomienia i baterii, przez ładowanie nośnika, druk termiczny i łączność Bluetooth oraz Wi-Fi, po konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i ładowanie baterii',
      blocks: [
        { type: 'p', text: 'RP2f to przenośna drukarka 2-calowa z **drukiem termicznym bezpośrednim** — obraz powstaje przez nagrzewanie termoczułego nośnika, bez taśmy barwiącej. Maksymalna szerokość druku to **48 mm**, a urządzenie zasila wymienna **bateria litowo-jonowa**, dzięki czemu pracuje w terenie, w magazynie i w pojeździe.' },
        { type: 'p', text: 'Baterie wysyłane są naładowane tylko częściowo. Przed pierwszym użyciem naładuj baterię przez **co najmniej 4 godziny**, aby uzyskać pełną wydajność. Do drukowania potrzebujesz osobno kupowanego zasilacza dobranego do Twojego regionu, nośnika oraz — przy połączeniu przewodowym — standardowego kabla USB **Mini-B do USB-A**.' },
        { type: 'list', ordered: true, items: [
          'włóż baterię do drukarki (patrz sekcja o baterii);',
          'podłącz zasilacz do gniazda zasilania w drukarce;',
          'podłącz przewód sieciowy do zasilacza i do gniazdka;',
          'poczekaj na pełne naładowanie — przy ładowaniu dioda baterii świeci ciągłym zielonym po osiągnięciu 100%.',
        ] },
        { type: 'p', text: 'Drukowanie przy podłączonym zasilaczu skraca żywotność baterii i **nie jest zalecane** — używaj zasilacza głównie do ładowania.' },
      ],
    },
    {
      title: 'Bateria — wkładanie, ładowanie i hot-swap',
      blocks: [
        { type: 'p', text: 'Zasilanie zapewnia akumulator litowo-jonowy. Przy wkładaniu wyrównaj zatrzask zwalniający po tej samej stronie co styki ładowania i dociśnij baterię, aż **zatrzask kliknie** w pozycji roboczej.' },
        { type: 'p', text: 'Gdy poziom naładowania spadnie do krytycznego, drukarka przerywa druk i **kolejkuje zadania**. Wymień wtedy baterię, by dokończyć kolejkę. Drukarka utrzymuje gotowość bez baterii przez **co najmniej 20 sekund** — to okno na wymianę w trybie **hot-swap**, bez utraty połączenia i bez restartu. Jeśli bateria nie zostanie wymieniona, zanim rozładuje się superkondensator, zakolejkowane zadania przepadną.' },
        { type: 'p', text: 'Aby wymienić baterię: wyjmij zużytą i włóż nową aż do zatrzaśnięcia. Stosuj wyłącznie baterie Honeywell — inne mogą spowodować uszkodzenia nieobjęte gwarancją. Baterii nie wrzucaj do ognia, nie zwieraj styków, nie przebijaj ani nie rozbieraj; przed włożeniem do drukarki upewnij się, że wszystkie elementy są suche.' },
      ],
    },
    {
      title: 'Kondycja baterii i wskaźnik naładowania',
      blocks: [
        { type: 'p', text: 'Sama bateria ma **przycisk testowy (TEST)**, który pokazuje jej stan bez włączania drukarki.' },
        { type: 'p', text: 'Krótkie naciśnięcie przycisku testowego zapala wskaźnik **kondycji (Health Status)**, sygnalizujący liczbę cykli ładowania:' },
        { type: 'list', items: [
          'zielony — **1–400** cykli (bateria w dobrej kondycji);',
          'bursztynowy — **400–500** cykli;',
          'czerwony — **500–999** cykli (czas na wymianę).',
        ] },
        { type: 'p', text: 'Przytrzymanie przycisku testowego **dłużej niż 5 sekund** włącza wskaźnik poziomu naładowania (gas gauge): cztery zielone segmenty pokazują kolejno przedziały **0–9%, 10–39%, 40–79% i 80–100%**.' },
        { type: 'p', text: 'Pełny obraz — zasilanie zewnętrzne, procent naładowania, stan zdrowia i temperaturę — odczytasz też na stronie WWW drukarki (zakładka **System Information → Statistics → Supply**).' },
      ],
    },
    {
      title: 'Włączanie i panel przedni',
      blocks: [
        { type: 'p', text: 'Panel przedni to wyświetlacz diodowy oraz **dwa przyciski**: On/Off (zasilanie) i Media/Feed (wysuw). Diody pokazują stan drukarki, baterii, Bluetooth i Wi-Fi.' },
        { type: 'p', text: 'Działanie przycisku **On/Off**:' },
        { type: 'list', items: [
          'naciśnięcie o dowolnej długości przy wyłączonej drukarce — **włącza** ją (rozruch trwa około 25 sekund);',
          'krótkie naciśnięcie — wejście lub wyjście z **trybu uśpienia**;',
          'przytrzymanie przez **3 sekundy** i zwolnienie, gdy dioda mignie na czerwono — **wyłącza** drukarkę.',
        ] },
        { type: 'p', text: 'Działanie przycisku **Media/Feed** (gdy brak nośnika, przycisk miga na czerwono):' },
        { type: 'list', items: [
          'krótkie naciśnięcie w bezczynności — wysuwa ok. **10 cm** nośnika ciągłego lub ustawia początek następnej etykiety przy nośniku z przerwami / czarnym znacznikiem;',
          'krótkie naciśnięcie podczas druku — **wstrzymuje** lub wznawia zadanie;',
          'przytrzymanie **2 sekundy** w bezczynności — **kalibracja nośnika**;',
          'przytrzymanie **3 sekundy** w pauzie — **anulowanie** bieżącego zadania i powrót do stanu bezczynności;',
          'przytrzymanie **ponad 10 sekund**, aż ruszy druk — wydruk **etykiety konfiguracyjnej**.',
        ] },
      ],
    },
    {
      title: 'Diody stanu',
      blocks: [
        { type: 'p', text: 'Gdy **wszystkie diody migają na czerwono**, temperatura otoczenia jest zbyt wysoka lub zbyt niska, by drukować — zakres pracy to 0–40 °C dla ładowania i do 55 °C dla samego druku.' },
        { type: 'list', items: [
          '**Zasilanie** — ciągły zielony: gotowość do druku; migający zielony: rozruch; migający czerwony: wyłączanie;',
          '**Bateria (bez ładowania)** — zgaszona: naładowana powyżej połowy; migający bursztynowy: 10–30%; migający czerwony: 10% lub mniej;',
          '**Bateria (podczas ładowania)** — ciągły zielony: 100%; pulsujący zielony: 30% i więcej; pulsujący bursztynowy: do 30%; pulsujący czerwony: poniżej 10%;',
          '**Bluetooth** — zgaszony: radio wyłączone lub brak połączenia; ciągły niebieski: połączony; migający niebieski: trwa transmisja danych;',
          '**Wi-Fi** — zgaszony: radio wyłączone lub brak połączenia; biały: włączony i połączony;',
          '**Feed** — zgaszony: gotowość; migający czerwony: brak nośnika; migający biały: transmisja danych.',
        ] },
        { type: 'p', text: 'Sygnały dźwiękowe: **jeden sygnał** oznacza podłączenie lub odłączenie zasilacza, gotowość, tryb błędu albo odebranie żądania parowania Bluetooth; **trzy krótkie sygnały** — niski poziom baterii lub jej brak.' },
      ],
    },
    {
      title: 'Ładowanie nośnika (etykiety i papier)',
      blocks: [
        { type: 'p', text: 'RP2f drukuje na rolkach etykiet, przywieszek i papieru paragonowego. Aby założyć nośnik:' },
        { type: 'list', ordered: true, items: [
          'naciśnij zatrzask blokady i unieś pokrywę drukarki;',
          'rozsuń i przytrzymaj uchwyty nośnika;',
          'ułóż rolkę zgodnie z kierunkiem nawinięcia i włóż ją do drukarki;',
          'pozwól uchwytom dosunąć się do boków rolki i dociśnij pokrywę, aż się zatrzaśnie;',
          'w razie potrzeby przytrzymaj przycisk Media, by **skalibrować czujnik nośnika**.',
        ] },
        { type: 'p', text: 'Nośnika **nie wyciągaj siłą** — żeby go usunąć, unieś go z drukarki. Gwałtowne wyrywanie może wywołać przepięcie groźne dla elektroniki płyty głównej.' },
        { type: 'p', text: 'Parametry nośnika RP2f: szerokość rolki **25–57 mm**, maksymalna szerokość druku **48 mm**, średnica rolki do **58 mm**, gilza o średnicy wewnętrznej **10,16 mm, 19 mm lub 25,4 mm**, grubość nośnika **0,05–0,16 mm**.' },
      ],
    },
    {
      title: 'Druk termiczny bezpośredni i kalibracja',
      blocks: [
        { type: 'p', text: 'Drukarka pracuje w technologii **termicznej bezpośredniej (No Ribbon / DT)** — domyślny tryb druku nie wymaga taśmy barwiącej. Domyślny typ nośnika to etykiety z przerwami (Media With Gaps); obsługiwany jest też nośnik ciągły oraz z czarnym znacznikiem.' },
        { type: 'p', text: 'Po każdej zmianie nośnika warto przeprowadzić **kalibrację czujnika**, by drukarka prawidłowo rozpoznawała początek etykiety. Uruchomisz ją na dwa sposoby: przytrzymując przycisk **Feed**, albo ze strony WWW (**Services → Media Calibration** — kliknij niebieski przycisk Media Calibration i poczekaj na komunikat o zakończeniu).' },
        { type: 'p', text: 'Po założeniu nośnika wydrukuj **etykietę testową**, by sprawdzić poprawność montażu i odczytać podstawowe dane drukarki. Wydruk testowy zlecisz z aplikacji PrintSet 5, Print Set MC lub ze strony WWW (**Services → Print Test Labels**, wybierz typ i kliknij Print).' },
      ],
    },
    {
      title: 'Łączność Bluetooth (parowanie)',
      blocks: [
        { type: 'p', text: 'RP2f łączy się z komputerem lub urządzeniem mobilnym przez **Bluetooth**. Postępuj zgodnie z instrukcją parowania na swoim urządzeniu: wyszukaj drukarkę na liście dostępnych, wybierz ją i nawiąż połączenie, a następnie w razie potrzeby dostosuj ustawienia Bluetooth drukarki.' },
        { type: 'p', text: 'Telefon z systemem Android sparujesz też dotykiem przez **NFC (Tap and Pair)**:' },
        { type: 'list', ordered: true, items: [
          'połóż telefon na drukarce;',
          'telefon rozpozna drukarkę i zaproponuje parowanie;',
          'potwierdź parowanie w ustawieniach Bluetooth telefonu;',
          'po odebraniu żądania ikona Bluetooth na drukarce miga przez 30 sekund (drukarka raz pikuje);',
          'naciśnij raz przycisk **Feed**, by dokończyć parowanie — ikona przestanie migać.',
        ] },
        { type: 'p', text: 'Jeśli przez 30 sekund nie naciśniesz Feed, parowanie zostanie anulowane; naciśnięcie przycisku zasilania anuluje je natychmiast. Do druku z telefonu pobierz aplikację **Print Service by Honeywell** ze sklepu Google Play. Ustawienia Bluetooth zmienisz w PrintSet 5 lub na stronie WWW (**Configure → Communications → Bluetooth**).' },
      ],
    },
    {
      title: 'Łączność Wi-Fi (WPA3)',
      blocks: [
        { type: 'p', text: 'Drukarka obsługuje sieć bezprzewodową **Wi-Fi (802.11)** z nowoczesnymi zabezpieczeniami **WPA3** oraz starszymi protokołami WLAN. Domyślnie pobiera adres IP przez **DHCP**.' },
        { type: 'p', text: 'Wi-Fi skonfigurujesz z aplikacji **PrintSet 5** (przez kabel USB) lub ze strony WWW drukarki:' },
        { type: 'list', ordered: true, items: [
          'połącz drukarkę z siecią i ustal jej adres IP;',
          'w przeglądarce wpisz **https://** i adres IP drukarki, kliknij Login i zaloguj się;',
          'wybierz **Configure → Communications → Wireless 802.11**;',
          'ustaw pasmo, nazwę sieci (SSID), typ sieci i zabezpieczenia, a następnie kliknij Save.',
        ] },
        { type: 'p', text: 'W sieci bez DHCP ustawienia Wi-Fi można przekazać poleceniami przez terminal. W sieciach firmowych z uwierzytelnianiem certyfikatami najpierw ustaw poprawną datę i godzinę, prześlij certyfikat przez **FTP/SFTP** do katalogu `/home/user/certificates/public`, a potem zainstaluj go skryptem `certinstall.sh`. Zalecane jest włączenie weryfikacji certyfikatu serwera (Validate Certificate → Yes).' },
      ],
    },
    {
      title: 'Połączenie USB i pamięć USB',
      blocks: [
        { type: 'p', text: 'Do połączenia przewodowego z komputerem użyj kabla **Mini-B do USB-A**. Interfejs USB działa w systemie Windows 10 i nowszym; do poprawnej pracy zainstaluj sterownik Honeywell. Domyślna klasa USB to **Composite (CDC/Printer Class)** — na niektórych urządzeniach przenośnych trzeba ją zmienić, by nawiązać połączenie.' },
        { type: 'p', text: 'Domyślnie włączony jest **wirtualny port COM (Virtual COM)** — po podłączeniu kabla USB urządzenie szeregowe pojawia się automatycznie w Menedżerze urządzeń, bez instalowania sterowników. W PrintSet 5 wybierz wtedy **Serial Port / Virtual COM** jako typ połączenia i wskaż aktywny port.' },
        { type: 'p', text: 'Przez kabel **USB OTG** drukarka może pracować jako host dla pamięci USB, skanera lub klawiatury. Pamięć USB musi mieć jedną partycję w formacie **FAT16 lub FAT32**; po skopiowaniu plików do odpowiednich katalogów (np. `/fonts`, `/forms`, `/firmware`) i ponownym uruchomieniu drukarki instalują się one automatycznie.' },
      ],
    },
    {
      title: 'Konfiguracja: strona WWW, PrintSet i aplikacje',
      blocks: [
        { type: 'p', text: 'Ustawienia drukarki obejrzysz i zmienisz na kilka sposobów: poleceniami programowymi, przyciskiem Media, aplikacjami **PrintSet 5** i **Print Set MC** (do pobrania ze sklepu App Store lub Google Play) oraz przez wbudowaną **stronę WWW**.' },
        { type: 'p', text: 'Aby otworzyć stronę WWW, wpisz w przeglądarce **https://** i adres IP drukarki. Domyślnie połączenie korzysta z HTTPS — jeśli nie zainstalowano certyfikatów, pojawi się ostrzeżenie, które można pominąć i przejść dalej. Zaloguj się danymi domyślnymi: użytkownik **itadmin**, hasło **pass** (po pierwszym logowaniu można je zmienić). W sekcji **Configure** dostępne są ustawienia komunikacji, druku, systemu, alertów, usług sieciowych oraz języków.' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać je w razie potrzeby — przydatne przy częstej zmianie typu nośnika. W profilu nie są zapamiętywane adresy IP ani ustawienia kalibracji czujnika etykiet. Plik konfiguracji (.xml) wyeksportujesz na pamięć USB i wgrasz na inne drukarki. Drukarką zarządza też **Honeywell Operational Intelligence** w chmurze.' },
      ],
    },
    {
      title: 'Języki druku (ZPL, CPCL i inne)',
      blocks: [
        { type: 'p', text: 'RP2f rozumie wiele języków poleceń i symulatorów, dzięki czemu przyjmuje gotowe formaty z różnych systemów bez zmian po stronie hosta:' },
        { type: 'list', items: [
          '**ZSim** — symulator języka Zebra (ZPL II i nowsze); wybierz go, gdy wysyłasz pliki ZPL;',
          '**CSim** — symulator języka CPCL; wybierz go dla plików CPCL;',
          '**DPL** — interpretuje strumienie Datamax;',
          '**Fingerprint** i **Direct Protocol (DP)** — własne języki Honeywell (DP ma intuicyjną, opisową składnię);',
          '**IPL**, **Smart Printing (C#)**, **bezpośredni druk PDF** oraz **EZ-Print**.',
        ] },
        { type: 'p', text: 'Język zmienisz na stronie WWW (sekcja **Configure → Languages**) albo przyciskiem **Media**: włącz drukarkę z nośnikiem i przed zakończeniem rozruchu przytrzymaj przycisk Media; zwolnij go, gdy ruszy nośnik; gdy wydrukuje się etykieta z żądanym językiem, naciśnij i zwolnij Media — język zostanie ustawiony.' },
      ],
    },
    {
      title: 'Akcesoria do noszenia',
      blocks: [
        { type: 'p', text: 'RP2f jest pomyślana do pracy w ruchu i ma komplet akcesoriów ułatwiających noszenie:' },
        { type: 'list', items: [
          '**Klips na pasek** — dołączony do drukarki; obrotowe mocowanie pozwala drukarce odchylać się, gdy się schylasz lub wsiadasz do pojazdu;',
          '**Pasek na ramię / na dłoń** — z wytrzymałymi zatrzaskami; mają ograniczoną wytrzymałość na zerwanie (nie są atestowanymi pasami bezpieczeństwa) i odpinają się przy mocnym szarpnięciu — nie używaj ich do montażu ani zawieszania drukarki na stałe;',
          '**Szlufka na pasek** — mocowanie na rzep, również z obrotowym łącznikiem;',
          '**Pokrowiec (Soft Case)** — chroni drukarkę w trudnym, zapylonym lub deszczowym otoczeniu, zabezpieczając przed wodą z każdej strony i drobnym pyłem.',
        ] },
        { type: 'p', text: 'Drukarki w pokrowcu **nigdy nie ładuj, gdy jest mokra** — grozi to zwarciem. Jeśli woda dostała się do środka, wyjmij baterię i pozostaw urządzenie do wyschnięcia na kilka dni. Stosuj akcesoria i zasilacze Honeywell — inne mogą spowodować uszkodzenia nieobjęte gwarancją.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i wałka',
      blocks: [
        { type: 'p', text: 'Spadek jakości druku — niezgodne kody kreskowe, ubytki i smugi — najczęściej oznacza osad na głowicy. Nieusunięty skraca jej żywotność lub prowadzi do awarii. Zalecany harmonogram czyszczenia:' },
        { type: 'list', items: [
          '**głowica, wałek dociskowy, wałek odklejający, wałek pokrywy** — co **3–5 rolek** nośnika;',
          '**czujnik nośnika** — sprężonym powietrzem, **co miesiąc**;',
          '**wnętrze** — sprężonym powietrzem, w miarę potrzeby.',
        ] },
        { type: 'p', text: 'W modelach standardowych głowicę czyść **kartą czyszczącą**: otwórz drukarkę, wyjmij nośnik, otwórz klapkę składanki na spodzie, wsuń kartę i zamknij pokrywę, a następnie kilkukrotnie naciśnij przycisk Feed, by przepuścić kartę. Resztki usuwaj patyczkiem z alkoholem izopropylowym. W modelach bez podkładu (linerless) używaj **pisaków czyszczących** do elementów stykających się z klejem — nie stosuj ich jednak na wałku dociskowym ani na czujnikach.' },
      ],
    },
    {
      title: 'Zegar czasu rzeczywistego (RTC)',
      blocks: [
        { type: 'p', text: 'Drukarka ma **zegar czasu rzeczywistego (RTC)** zasilany z wbudowanego, ładowalnego ogniwa pastylkowego. Dopóki w drukarce jest naładowana bateria główna, zegar utrzymuje czas.' },
        { type: 'p', text: 'Po wyjęciu baterii głównej ustawienie czasu jest zachowywane przez **6 miesięcy**. Po tym czasie godzina zostaje utracona i po przywróceniu zasilania trzeba ją ustawić ponownie.' },
      ],
    },
    {
      title: 'Diagnostyka i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Statystyki pracy — czas działania, wersje firmware, konfigurację, numery seryjne, informacje o głowicy i baterii, sieci oraz odometr głowicy — sprawdzisz na stronie WWW w zakładce **System Information**. Po usunięciu usterki naciśnij przycisk Media, by skasować alarm.' },
        { type: 'list', items: [
          '**Słaba jakość druku** — wyczyść głowicę; dopasuj zaczernienie (Darkness) i prędkość druku w PrintSet 5, na stronie WWW lub poleceniami; jeśli to nie pomaga, głowica może być uszkodzona;',
          '**Drukarka zgłasza brak nośnika mimo założonej rolki** — czujnik mógł się zakurzyć; przedmuchaj go sprężonym powietrzem;',
          '**Drukarka nie drukuje lub podaje kilka etykiet naraz** — sprawdź poprawność założenia nośnika i wykonaj kalibrację;',
          '**Drukarka nie drukuje ani nie podaje nośnika** — gdy dioda baterii świeci ciągłym bursztynowym, naładowanie jest zbyt niskie; poczekaj, aż zaświeci ciągłym zielonym;',
          '**Drukarka pomija co drugą etykietę** — etykieta sformatowana zbyt blisko górnej krawędzi; zostaw u góry ok. 0,5 mm marginesu (8 rzędów punktów) i wykonaj kalibrację;',
          '**Druk jaśnieje po prawej stronie** — pokrywa nie jest dociśnięta; zatrzaśnij ją;',
          '**Drukarka nie włącza się** — naładuj baterię.',
        ] },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia domyślne przywrócisz przyciskiem Feed bez wchodzenia w menu:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę;',
          'otwórz pokrywę nośnika;',
          'włącz drukarkę;',
          'gdy dioda zasilania zacznie migać na zielono, przytrzymaj przycisk **Feed**, aż dioda zacznie migać na bursztynowo;',
          'zwolnij przycisk — ustawienia są przywrócone.',
        ] },
        { type: 'p', text: 'Ustawienia domyślne przywrócisz też ze strony WWW: w sekcji **Configure** na danej stronie ustawień kliknij **Default Settings**, by zresetować jej parametry.' },
      ],
    },
    {
      title: 'Aktualizacja oprogramowania układowego',
      blocks: [
        { type: 'p', text: 'Warto okresowo sprawdzać aktualizacje **oprogramowania układowego (firmware)** — to element dbałości o bezpieczeństwo urządzenia. Najnowszą wersję pobierzesz z portalu pomocy producenta (ścieżka: Software → Printers → Mobile - Portable → RP2f RP4f → Current → Firmware). Firmware wgrasz przez stronę WWW, PrintSet 5, Print Set MC, pamięć USB lub Honeywell Operational Intelligence.' },
        { type: 'p', text: 'Ze **strony WWW**: zaloguj się, otwórz **Services → Firmware Upgrade** (zobaczysz bieżącą wersję), wskaż plik aktualizacji przez Browse i kliknij Upgrade. Z **pamięci USB**: skopiuj plik do katalogu głównego pamięci (najlepiej bez innych plików), wyłącz drukarkę, podłącz pamięć kablem USB OTG i uruchom drukarkę ponownie — aktualizacja wykona się automatycznie. Po aktualizacji **przywróć ustawienia domyślne i ponownie skalibruj czujnik nośnika**.' },
      ],
    },
  ],
}
