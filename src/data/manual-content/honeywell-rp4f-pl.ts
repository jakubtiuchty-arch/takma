import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell RP4f po polsku.
 * Praktyczne kompendium obsługi mobilnej drukarki etykiet 4" zasilanej baterią,
 * z drukiem termicznym bezpośrednim — własnym głosem, w skondensowanej formie.
 */
export const honeywellRp4fPl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze mobilnej drukarki etykiet Honeywell RP4f po polsku — od pierwszego uruchomienia i baterii, przez ładowanie nośnika i druk termiczny bezpośredni, po Bluetooth, Wi-Fi, konfigurację, noszenie, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'RP4f to przenośna drukarka etykiet do pracy w terenie z **drukiem termicznym bezpośrednim** — obraz powstaje przez nagrzewanie termoczułego nośnika, bez taśmy barwiącej. Drukuje na nośniku o szerokości druku do **104 mm (4,1")**, dzięki czemu obsługuje m.in. **etykiety kurierskie 100×150 mm**, paragony, przywieszki oraz nośnik ciągły. Komunikuje się przez **USB**, **Wi-Fi** i **Bluetooth**, więc łatwo łączy się z każdym systemem nadrzędnym.' },
        { type: 'p', text: 'Zanim zaczniesz drukować, przygotuj drukarkę do pracy:' },
        { type: 'list', ordered: true, items: [
          'rozpakuj zestaw i sprawdź, czy nic nie uszkodziło się w transporcie — uszkodzenia od razu zgłoś przewoźnikowi;',
          'włóż i naładuj baterię (zasilacz sieciowy o wartości znamionowej **12 V DC / 1,66 A** lub wyższej jest sprzedawany osobno);',
          'załóż rolkę nośnika i w razie potrzeby skalibruj czujnik;',
          'połącz drukarkę z komputerem lub urządzeniem mobilnym przez USB, Wi-Fi albo Bluetooth;',
          'zainstaluj sterownik Windows oraz aplikację konfiguracyjną producenta.',
        ] },
        { type: 'p', text: 'Do druku przez kabel potrzebny jest standardowy przewód **USB typu Mini-B na USB-A**. Temperatura pracy drukarki to **0–40°C**.' },
      ],
    },
    {
      title: 'Bateria — pierwsze ładowanie i zasady bezpieczeństwa',
      blocks: [
        { type: 'p', text: 'RP4f zasila wymienna, akumulatorowa **bateria litowo-jonowa**. Fabrycznie jest naładowana tylko częściowo, dlatego przed pierwszym użyciem ładuj ją **co najmniej 4 godziny**, aby uzyskać pełną wydajność.' },
        { type: 'p', text: 'Ładowanie krok po kroku:' },
        { type: 'list', ordered: true, items: [
          'włóż baterię do drukarki — zatrzask styków ładowania wskazuje właściwą stronę; dociśnij, aż zatrzask wyraźnie kliknie;',
          'podłącz zasilacz do gniazda zasilania drukarki;',
          'podłącz przewód sieciowy do zasilacza i do gniazdka.',
        ] },
        { type: 'p', text: 'Maksymalna temperatura pracy drukarki to **55°C**, ale **ładowanie** zasilaczem Honeywell jest ograniczone do **40°C** — ładuj w miejscu spełniającym ten warunek. Nie zalecamy drukowania przy stale podłączonym zasilaczu sieciowym, bo skraca to żywotność baterii.' },
        { type: 'list', items: [
          'używaj wyłącznie baterii i zasilaczy Honeywell — inne mogą spowodować uszkodzenia nieobjęte gwarancją;',
          'nie wkładaj baterii do ognia, nie nagrzewaj jej i nie przechowuj w pobliżu wysokich temperatur;',
          'nie zwieraj styków, nie przebijaj, nie deformuj i nie rozbieraj baterii;',
          'przed włożeniem baterii upewnij się, że wszystkie elementy są suche.',
        ] },
      ],
    },
    {
      title: 'Wymiana baterii i hot-swap',
      blocks: [
        { type: 'p', text: 'Gdy bateria osiągnie niski poziom, drukarka przerywa druk i **kolejkuje zadania**. To moment na wymianę baterii — po założeniu naładowanej drukarka dokończy zakolejkowane wydruki. Jeśli jednak rozładuje się też kondensator podtrzymujący (supercap), zanim wymienisz baterię, zakolejkowane zadania przepadną.' },
        { type: 'p', text: 'RP4f obsługuje **hot-swap**: po wyjęciu baterii drukarka utrzymuje się aktywna **przez co najmniej 20 sekund**, nie tracąc łączności ani nie wymagając ponownego uruchomienia. Dzięki temu wymieniasz ogniwa w trakcie zmiany bez przerywania pracy.' },
        { type: 'list', ordered: true, items: [
          'wyjmij rozładowaną baterię z drukarki;',
          'w ciągu kilkunastu sekund włóż naładowaną baterię i dociśnij, aż zatrzask kliknie;',
          'gdy potrzebujesz pracować dłużej z sieci, podłącz zasilacz do gniazda zasilania i do gniazdka (pamiętaj, że ciągła praca z zasilacza skraca żywotność baterii).',
        ] },
      ],
    },
    {
      title: 'Kondycja baterii i wskaźnik naładowania',
      blocks: [
        { type: 'p', text: 'Na obudowie baterii znajduje się **przycisk testowy**, którym sprawdzisz jej stan bez uruchamiania drukarki.' },
        { type: 'list', items: [
          '**kondycja (stan zużycia)** — krótko naciśnij przycisk testowy; dioda zaświeci się na **zielono** dla 1–400 cykli ładowania, **bursztynowo** dla 400–500 cykli i **czerwono** dla 500–999 cykli (bateria zbliża się do końca przydatności);',
          '**poziom naładowania** — przytrzymaj przycisk testowy **dłużej niż 5 sekund**; cztery zielone diody pokazują zapas energii w przedziałach 0–9%, 10–39%, 40–79% i 80–100%.',
        ] },
        { type: 'p', text: 'Pełniejsze dane (zasilanie zewnętrzne, pozostały procent, stan kondycji i temperaturę baterii) odczytasz na **stronie WWW drukarki** — po zalogowaniu otwórz zakładkę **System Information** i wybierz **Statistics → Supply**, gdzie obok danych głowicy pojawią się informacje o baterii.' },
      ],
    },
    {
      title: 'Włączanie i panel przedni',
      blocks: [
        { type: 'p', text: 'Panel przedni RP4f tworzą **wskaźniki diodowe (LED)** oraz dwa przyciski: **On/Off** (włączanie) i **Media/Feed** (wysuw nośnika). Diody sygnalizują stan drukarki, baterii, Bluetooth i Wi-Fi.' },
        { type: 'p', text: 'Przyciskiem **On/Off** sterujesz zasilaniem i trybem uśpienia:' },
        { type: 'list', items: [
          'naciśnięcie o dowolnej długości przy wyłączonej drukarce — **włącza** ją;',
          'krótkie naciśnięcie — **wejście lub wyjście z trybu uśpienia**;',
          'przytrzymanie przez około 3 sekundy i zwolnienie, gdy dioda mignie na czerwono — **wyłącza** drukarkę.',
        ] },
        { type: 'p', text: 'Najważniejsze sygnały diod: dioda On/Off świeci **stałym zielonym**, gdy drukarka jest gotowa, **miga zielono** przy starcie, a **miga czerwono** przy wyłączaniu. Dioda Bluetooth świeci **stałym niebieskim** po połączeniu i **miga niebiesko** podczas transmisji. Wskaźnik Wi-Fi świeci na **biało** po połączeniu z siecią. Jeśli **wszystkie diody migają czerwono**, oznacza to, że jest zbyt zimno lub zbyt gorąco, aby drukować.' },
      ],
    },
    {
      title: 'Przycisk Media/Feed',
      blocks: [
        { type: 'p', text: 'Przycisk **Media/Feed** wysuwa nośnik i obsługuje większość czynności bez podłączania komputera. Gdy w drukarce nie ma nośnika, miga na czerwono. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'krótkie naciśnięcie w stanie gotowości — **wysuwa nośnik** (przy nośniku ciągłym o około **10 cm**, a przy etykietach z przerwą lub czarnym znacznikiem do początku kolejnej etykiety);',
          'krótkie naciśnięcie podczas druku — **wstrzymuje lub wznawia** zadanie;',
          'przytrzymanie przez 2 sekundy w stanie gotowości — uruchamia **kalibrację nośnika**;',
          'przytrzymanie przez 3 sekundy w pauzie — **anuluje** bieżące zadanie i czyści kolejkę, po czym drukarka wraca do stanu gotowości;',
          'przytrzymanie powyżej 10 sekund, aż ruszy druk — drukuje **etykietę konfiguracyjną**.',
        ] },
        { type: 'p', text: 'Po usunięciu dowolnej usterki naciśnij przycisk Media/Feed, aby skasować alarm.' },
      ],
    },
    {
      title: 'Ładowanie nośnika (rolka etykiet)',
      blocks: [
        { type: 'p', text: 'RP4f drukuje na rolkach o szerokości **51–111 mm**, przy szerokości druku do **104 mm** — to właśnie format pod **etykiety kurierskie 100×150 mm**. Mieści rolki o średnicy zewnętrznej do **58 mm**, na gilzach o średnicy wewnętrznej **10,16 mm, 19 mm lub 25,4 mm**, a grubość nośnika to **0,05–0,16 mm**.' },
        { type: 'list', ordered: true, items: [
          'naciśnij blokadę zatrzasku i unieś pokrywę drukarki;',
          'rozsuń i przytrzymaj uchwyty nośnika;',
          'zorientuj rolkę zgodnie z oznaczeniami i włóż ją do drukarki;',
          'pozwól, by uchwyty docisnęły się do boków rolki, i dociśnij pokrywę aż do zatrzaśnięcia;',
          'jeśli trzeba, przytrzymaj przycisk Media/Feed, aby skalibrować czujnik nośnika.',
        ] },
        { type: 'p', text: 'Nigdy nie wyciągaj nośnika siłą do tyłu — aby go wyjąć, unieś go z drukarki. Gwałtowne wyrywanie nośnika może wywołać przepięcie i uszkodzić elementy płyty głównej.' },
      ],
    },
    {
      title: 'Nośnik z zewnętrznej podajni',
      blocks: [
        { type: 'p', text: 'Większe rolki podasz z zewnątrz, przez tylny otwór podawania nośnika — to rozwiązanie dostępne **wyłącznie w RP4f**.' },
        { type: 'list', ordered: true, items: [
          'naciśnij blokadę zatrzasku i unieś pokrywę drukarki;',
          'rozsuń i przytrzymaj uchwyty nośnika, a następnie zamontuj **przekładkę nośnika (media spacer)**;',
          'wprowadź nośnik przez zewnętrzny otwór podawania na spodzie i przeprowadź go przez drukarkę;',
          'w razie potrzeby przytrzymaj przycisk Media/Feed, aby skalibrować czujnik nośnika.',
        ] },
      ],
    },
    {
      title: 'Druk termiczny bezpośredni i jakość wydruku',
      blocks: [
        { type: 'p', text: 'RP4f drukuje techniką **termiczną bezpośrednią**, więc nie używa taśmy barwiącej — stosuj wyłącznie nośnik termoczuły. O wyrazistość i czytelność kodów dba kilka parametrów, przede wszystkim **zaczernienie (darkness/heat)** oraz **prędkość druku**. Dostosujesz je aplikacją PrintSet 5, na stronie WWW drukarki lub poleceniami z hosta.' },
        { type: 'p', text: 'Po założeniu nośnika wydrukuj **etykietę testową**, by potwierdzić poprawny montaż i odczytać podstawowe informacje o drukarce — zrobisz to z PrintSet 5, Print Set MC lub strony WWW (**Services → Print Test Labels**, wybierz typ etykiety i kliknij Print).' },
        { type: 'list', items: [
          'słaba jakość, smugi lub braki w druku — najczęściej zabrudzona głowica; wyczyść ją, a jeśli to nie pomoże, dobierz właściwe zaczernienie i prędkość do danego nośnika;',
          'druk zbyt jasny po prawej stronie etykiety — pokrywa nie jest zatrzaśnięta (zatrzaśnij ją) lub głowica jest źle ustawiona;',
          'pomijanie co drugiej etykiety — treść jest sformatowana zbyt blisko górnej krawędzi; zostaw u góry margines około **0,5 mm (8 rzędów punktów)**, a w razie potrzeby skalibruj nośnik.',
        ] },
      ],
    },
    {
      title: 'Kalibracja nośnika',
      blocks: [
        { type: 'p', text: 'Po każdej zmianie typu nośnika skalibruj czujnik, aby drukarka prawidłowo rozpoznawała początek etykiety oraz przerwy i czarne znaczniki. Najprościej **przytrzymać przycisk Media/Feed** — drukarka wykona kalibrację samodzielnie.' },
        { type: 'p', text: 'Kalibrację uruchomisz też ze **strony WWW**: po zalogowaniu otwórz **Services → Media Calibration** i kliknij przycisk Media Calibration; po zakończeniu pojawi się komunikat o ukończeniu. Ustawienia nośnika dostosujesz w **Configure → Printing → Media**.' },
      ],
    },
    {
      title: 'Łączność Bluetooth (parowanie)',
      blocks: [
        { type: 'p', text: 'RP4f łączy się bezprzewodowo przez **Bluetooth**. Aby sparować drukarkę z komputerem lub urządzeniem mobilnym, postępuj zgodnie z instrukcją parowania nowego urządzenia w systemie hosta — drukarka pojawi się na liście dostępnych urządzeń, wystarczy ją wybrać. Po nawiązaniu połączenia dostroisz ustawienia Bluetooth z PrintSet 5 lub ze strony WWW.' },
        { type: 'p', text: 'Telefon z **Androidem** sparujesz dotykiem przez **NFC (Tap and Pair)**:' },
        { type: 'list', ordered: true, items: [
          'połóż telefon na drukarce — telefon rozpozna ją i zaproponuje parowanie;',
          'potwierdź parowanie w ustawieniach Bluetooth telefonu;',
          'gdy ikona Bluetooth na drukarce zacznie migać (drukarka raz piśnie, czas na potwierdzenie to 30 sekund), naciśnij przycisk Feed, aby dokończyć parowanie — ikona przestanie migać;',
          'jeśli nie naciśniesz Feed w ciągu 30 sekund, parowanie zostanie anulowane (przyciskiem zasilania anulujesz je od razu).',
        ] },
        { type: 'p', text: 'Do druku z telefonu pobierz z Google Play aplikację **Print Service by Honeywell** lub skorzystaj z dowolnej aplikacji drukującej.' },
      ],
    },
    {
      title: 'Wi-Fi i konfiguracja sieci',
      blocks: [
        { type: 'p', text: 'RP4f obsługuje **Wi-Fi (802.11)** i może korzystać z różnych protokołów zabezpieczeń sieci bezprzewodowej. Domyślnie pobiera adres IP przez **DHCP**. Sieć skonfigurujesz aplikacją PrintSet 5 przez USB albo ze strony WWW; gdy w sieci nie ma DHCP, ustawienia Wi-Fi możesz wprowadzić poleceniami przez połączenie terminalowe.' },
        { type: 'p', text: 'Konfiguracja Wi-Fi ze strony WWW: po zalogowaniu otwórz **Configure → Communication → Wireless 802.11**, zmień ustawienia sieci (m.in. **nazwę sieci (SSID)** oraz zabezpieczenia, np. WPA2/AES z kluczem dzielonym o długości 8–64 znaków) i zapisz. Domyślne pasmo to 2,4 GHz, a typ sieci to Infrastructure.' },
        { type: 'p', text: 'W sieciach firmowych z uwierzytelnianiem **802.1x** zainstaluj **certyfikaty uwierzytelniające**: ustaw poprawną datę i godzinę, połącz się z drukarką przez FTP/SFTP, wgraj certyfikat do katalogu `/home/user/certificates/public`, a następnie zainstaluj go skryptem `certinstall.sh`. Plik certyfikatu wskaż później na stronie WWW lub w PrintSet 5.' },
      ],
    },
    {
      title: 'Konfiguracja: strona WWW, PrintSet i polecenia',
      blocks: [
        { type: 'p', text: 'Ustawienia drukarki obejrzysz i zmienisz na pięć sposobów: poleceniami programowymi, przyciskiem Media/Feed, aplikacjami **PrintSet 5** i **Print Set MC** oraz przez **stronę WWW**. PrintSet 5 i Print Set MC pobierzesz z App Store (iOS) lub Google Play (Android); to najwygodniejszy sposób pełnej konfiguracji.' },
        { type: 'p', text: 'Stronę WWW otworzysz w przeglądarce, wpisując **https://** i adres IP drukarki. Domyślnie strona działa po HTTPS, więc bez zainstalowanych certyfikatów przeglądarka pokaże ostrzeżenie — można je pominąć i przejść dalej. Po kliknięciu Login zaloguj się: domyślny użytkownik to **itadmin**, hasło **pass** (po zalogowaniu możesz je zmienić). Wpisanie samego **User** bez hasła daje dostęp do ograniczonych funkcji.' },
        { type: 'p', text: 'Po zalogowaniu w sekcji **Configure** zmienisz: komunikację (**Communications** — Wi-Fi, Bluetooth), nośnik i jakość druku (**Printing**), ustawienia ekranu, dźwięku i systemu (**System Settings**), wyzwalacze alertów (**Alerts**), usługi sieciowe — DNS, WINS, serwer poczty (**Network Services**) oraz ustawienia zależne od języka druku (**Languages**). Zmiany zatwierdzasz przyciskiem Save.' },
      ],
    },
    {
      title: 'Języki drukarki (ZPL, CPCL i inne)',
      blocks: [
        { type: 'p', text: 'RP4f rozumie wiele języków poleceń i symulatorów, dzięki czemu przyjmuje gotowe formaty z różnych systemów bez zmian po stronie hosta:' },
        { type: 'list', items: [
          '**ZSim** — symulator języka Zebra (**ZPL II** i nowsze); wybierz go, gdy wysyłasz pliki ZPL;',
          '**CSim** — symulator języka **CPCL**; wybierz go, gdy wysyłasz pliki CPCL;',
          '**DPL** — interpretuje strumienie Datamax, a **EZ-Print** to natywny protokół Datamax-O’Neil;',
          '**Fingerprint** i **Direct Protocol (DP)** — własne języki Honeywell (DP ma intuicyjną, opisową składnię);',
          '**IPL**, **Smart Printing (C#)** oraz **bezpośredni druk PDF**.',
        ] },
        { type: 'p', text: 'Język ustawisz na stronie WWW, w PrintSet 5 lub przyciskiem Media/Feed: włącz drukarkę i jeszcze przed zakończeniem startu przytrzymaj przycisk; zwolnij go, gdy ruszy nośnik, a gdy wydrukuje się etykieta z żądanym językiem — naciśnij i zwolnij przycisk, aby go zatwierdzić.' },
      ],
    },
    {
      title: 'Profile, pliki konfiguracji i pamięć USB',
      blocks: [
        { type: 'p', text: 'Aktualne ustawienia możesz zapisać jako **profil drukarki** i wczytywać go w razie potrzeby — przydatne, gdy często zmieniasz typy nośnika (np. osobny profil dla nośnika ciągłego i osobny dla etykiet z przerwą). Profile zapiszesz i aktywujesz ze strony WWW (**Configure → System Settings → General → Save As Profile**; wczytanie z zakładki **Manage → Profiles**). W profilu nie są zapamiętywane adresy IP ani ustawienia kalibracji czujnika etykiet.' },
        { type: 'p', text: 'Pełną konfigurację (.xml) wyeksportujesz i wgrasz ze strony WWW (**Manage → Configuration**), z PrintSet 5 lub z pamięci USB. Z pamięci USB instalujesz też czcionki, obrazy, formaty, aplikacje i profile — pliki układasz w odpowiednich katalogach (np. `/fonts`, `/forms`, `/profiles`), po czym drukarka instaluje je po ponownym uruchomieniu. Pamięć USB podłączasz przewodem **USB OTG**; musi mieć jedną partycję sformatowaną w **FAT16 lub FAT32**.' },
      ],
    },
    {
      title: 'Akcesoria do noszenia',
      blocks: [
        { type: 'p', text: 'RP4f zaprojektowano do pracy w ruchu, dlatego ma komplet akcesoriów ułatwiających noszenie:' },
        { type: 'list', items: [
          '**klips do paska** — dołączony do drukarki; obrotowe mocowanie pozwala drukarce się przekręcać, gdy się schylasz lub wsiadasz do pojazdu;',
          '**pasek na ramię i pasek na dłoń** — z wytrzymałymi zatrzaskami; mają ograniczoną siłę zrywania (gdy zostaną zahaczone i pociągnięte ponad zwykłe użycie, odpinają się), więc nie są atestowanymi pasami bezpieczeństwa i nie służą do trwałego zawieszania drukarki;',
          '**szlufka na pasek (belt loop)** — mocowana na rzep, pewnie utrzymuje drukarkę i również pozwala jej się obracać;',
          '**futerał ochronny (soft case)** — chroni drukarkę przed pyłem i wodą z każdej strony i można go łączyć z paskami oraz szlufką.',
        ] },
        { type: 'p', text: 'Pasów i zatrzasków z widocznymi śladami przeciążenia (białe pęknięcia w tworzywie) nie używaj — wymień je. Drukarki w mokrym futerale nigdy nie ładuj; wyjmij ją, osusz i dopiero potem podłącz zasilanie.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i wałka',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie utrzymuje jakość druku i wydłuża żywotność głowicy. **Głowicę, wałek dociskowy i rolkę odklejającą** czyść co **3–5 rolek nośnika**, **czujnik nośnika** — co miesiąc (sprężonym powietrzem), a wnętrze — w razie potrzeby. Spadek jakości (nieczytelne kody, braki w druku, smugi) zwykle wynika z osadu na głowicy.' },
        { type: 'p', text: 'Czyszczenie głowicy w modelu standardowym kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'otwórz drukarkę i wyjmij cały nośnik;',
          'otwórz klapkę nośnika składanego na spodzie drukarki;',
          'wsuń kartę czyszczącą przez klapkę i zamknij pokrywę;',
          'kilkukrotnie naciśnij przycisk Media/Feed, aby przeprowadzić kartę przez drukarkę — w razie potrzeby powtórz;',
          'załóż nośnik, zamknij drukarkę i wysuń nośnik przyciskiem Media/Feed.',
        ] },
        { type: 'p', text: 'Głowicę i wałek czyść kartą czyszczącą lub patyczkiem z **alkoholem izopropylowym**, a czujnik i wnętrze — sprężonym powietrzem. W modelach **bez podkładu (linerless)** oraz przy osadach kleju używaj **pisaków czyszczących** (mają plastikową skrobaczkę w nasadce na większe osady) — nie stosuj ich jednak na wałku dociskowym ani na czujnikach.' },
      ],
    },
    {
      title: 'Aktualizacja oprogramowania układowego',
      blocks: [
        { type: 'p', text: 'Warto okresowo sprawdzać aktualizacje **oprogramowania układowego (firmware)** — to element dbania o bezpieczeństwo drukarki. Najnowszą wersję pobierzesz z portalu pomocy producenta (ścieżka: Software → Printers → Mobile - Portable → RP2f RP4f → Current → Firmware), a wgrasz przez stronę WWW, PrintSet 5, Print Set MC, pamięć USB lub Honeywell Operational Intelligence.' },
        { type: 'p', text: 'Ze **strony WWW**: zaloguj się, otwórz **Services → Firmware Upgrade**, kliknij Browse, wskaż plik aktualizacji i kliknij Upgrade. Z **pamięci USB**: skopiuj plik aktualizacji do katalogu głównego pamięci (najlepiej bez innych plików), wyłącz drukarkę, podłącz pamięć przewodem **USB OTG** i uruchom drukarkę ponownie — aktualizacja przebiegnie automatycznie. Po aktualizacji **przywróć ustawienia domyślne i ponownie skalibruj czujnik nośnika**.' },
      ],
    },
    {
      title: 'Diagnostyka i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Stan i statystyki drukarki (czas pracy, wersje firmware, numery seryjne, dane głowicy i baterii, sieć, Bluetooth) sprawdzisz na stronie WWW w zakładce **System Information → Statistics**, a zużycie i przebieg głowicy względem progów alertów — w **Odometer**. Po usunięciu usterki naciśnij przycisk Media/Feed, aby skasować alarm.' },
        { type: 'list', items: [
          '**drukarka się nie włącza** — naładuj baterię;',
          '**drukarka nie drukuje i nie wysuwa nośnika** — gdy wskaźnik baterii świeci stałym pomarańczowym, naładowanie jest za niskie; poczekaj, aż zaświeci stałym zielonym;',
          '**komunikat o braku nośnika mimo założonej rolki** — czujnik zebrał kurz; przedmuchaj go sprężonym powietrzem;',
          '**drukarka nie drukuje lub wydaje kilka etykiet naraz** — źle założony nośnik albo brak kalibracji; sprawdź montaż i skalibruj nośnik;',
          '**nośnik przesuwa się na boki podczas druku** — dociśnij uchwyty do nośnika i ustaw przerwy/znaczniki w jednej linii z czujnikiem;',
          '**migający na pomarańczowo przycisk Media/Feed mimo prób naprawy** lub powtarzająca się usterka głowicy — zgłoś urządzenie do serwisu.',
        ] },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia domyślne przywrócisz ze strony WWW (przycisk Default Settings na danej stronie ustawień), z PrintSet 5 albo przyciskiem **Media/Feed**.' },
        { type: 'p', text: 'Reset przyciskiem: wyłącz drukarkę, otwórz pokrywę nośnika, włącz drukarkę, a gdy dioda zasilania zacznie migać na zielono, przytrzymaj przycisk **Feed**, aż dioda zacznie migać na pomarańczowo, i wtedy go zwolnij — drukarka wróci do ustawień domyślnych. Po przywróceniu ustawień ponownie skalibruj czujnik nośnika.' },
      ],
    },
  ],
}
