import type { PolishManual } from '@/data/manuals'

export const honeywellPx940Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przemysłowej drukarki etykiet wysokiej precyzji Honeywell PX940 po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej oraz metody druku TT/DT, po wbudowany weryfikator kodów kreskowych, kalibrację, wymianę głowicy, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i podłączenie zasilania',
      blocks: [
        { type: 'p', text: 'PX940 to **przemysłowa** drukarka etykiet wysokiej wydajności, dostępna w dwóch odmianach: **PX940A** (wersja produktywna z przednim czujnikiem mediów) oraz **PX940V** (wersja z wbudowanym **weryfikatorem kodów kreskowych**, który skanuje każdy wydrukowany kod). Drukuje **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy), z prędkością do **14 ips (ok. 350 mm/s)**. Drukarka cechuje się bardzo wysoką dokładnością pozycjonowania druku, dostępna jest w rozdzielczościach **203, 300 i 600 dpi**, ma wytrzymałą obudowę i kolorowy dotykowy ekran. Wbudowane interfejsy to **USB**, **RS-232** i **Ethernet**; opcjonalnie obsługuje moduł **Wi-Fi (802.11)** oraz Bluetooth.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu. Aby uruchomić ją po raz pierwszy:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'naciśnij włącznik zasilania — na ekranie pojawi się pasek postępu, a po nim **kreator startowy (Startup Wizard)**;',
          'wykonaj kroki kreatora na ekranie dotykowym, by skonfigurować podstawowe parametry pracy.',
        ] },
        { type: 'p', text: 'Kreator startowy pojawia się przy pierwszym włączeniu drukarki oraz po przywróceniu ustawień fabrycznych. Po jego zakończeniu drukarka przechodzi w tryb gotowości (**Ready**), w którym masz dostęp do menu głównego i możesz wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Na panelu przednim znajduje się **3,5-calowy w pełni dotykowy ekran**, który reaguje na dotyk palcem, w rękawiczce lub rysikiem. Po zakończeniu startu pojawia się **ekran gotowości (Ready)**, na którym domyślnie widać aktualny język drukarki oraz jej adres IP; czas i datę zobaczysz tylko, gdy zainstalowano zegar czasu rzeczywistego (**RTC**). Wygląd ekranu można dostosować, a nawet podmienić obraz tła (plik **background_idle.png** o rozdzielczości **320 × 240 px**).' },
        { type: 'p', text: 'Pasek stanu u góry ekranu zawiera ikony: **menu główne**, **komunikacja**, **informacje o drukarce** oraz **Bluetooth**; ikona **Wi-Fi** pojawia się tylko, gdy zainstalowano opcjonalny moduł bezprzewodowy. Ikoną **menu głównego** przełączasz między ekranem gotowości a menu, w którym dostępne są sekcje: **Ustawienia (Settings)**, **Narzędzia (Tools)**, **Kreatory (Wizards)** oraz **Programy (Programs)** — ta ostatnia pojawia się tylko, gdy językiem drukarki jest Fingerprint lub Direct Protocol. Uwaga: drukarka nie drukuje, gdy na ekranie otwarte jest menu główne — wróć na ekran gotowości, aby rozpocząć druk.' },
        { type: 'p', text: 'Dla najczęściej używanych funkcji (profili, aplikacji, etykiet testowych, kreatorów) możesz utworzyć **skróty (Quick Choices)** w **Narzędzia → Quick Choices → Add**. Skróty zastępują menu główne menu szybkiego wyboru, w którym menu główne pozostaje pierwszą pozycją.' },
      ],
    },
    {
      title: 'Przycisk Print i tryby pracy',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print** służy do wysuwania mediów, wstrzymywania zadań i druku. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — naciśnięcie wysuwa medium (a przy włączonej funkcji powtórnego druku ponownie drukuje ostatnie zadanie); **przytrzymanie** uruchamia kalibrację czujników mediów;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'podczas startu — naciśnięcie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych;',
          'w stanie błędu — naciśnięcie wysuwa medium.',
        ] },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów) i tryb odrywania',
      blocks: [
        { type: 'p', text: 'PX940 drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — samoprzylepnych z podkładem lub bez kleju, z **przerwami (gap)** albo z **czarnym znacznikiem (black mark)**, z perforacją lub bez. Sposób zakładania zależy od trybu pracy i zainstalowanych opcji. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów i zdejmij płytkę nawijania (jeśli jest zamontowana);',
          'obróć **dźwignię podnoszenia głowicy** w lewo (przeciwnie do ruchu wskazówek zegara), by unieść głowicę oraz ramię czujnika lub weryfikatora;',
          'nałóż rolkę mediów na piastę podającą i dosuń ją do oporu o wewnętrzną ściankę drukarki;',
          'przeprowadź medium przez mechanizm druku i dalej przez **przedni czujnik (PX940A)** lub **moduł weryfikatora (PX940V)**;',
          'dopasuj prowadnicę krawędziową i prowadnicę napinającą (dancer guide) tak, by materiał był prowadzony bez luzu;',
          'obróć dźwignię głowicy w prawo (zgodnie z ruchem wskazówek zegara), by opuścić i zablokować głowicę oraz ramię czujnika/weryfikatora;',
          'naciśnij przycisk **Print**, by wysunąć medium, a następnie wyreguluj czujnik przerwy i czarnego znacznika tak, by jego niebieska dioda LED pokrywała się ze środkiem materiału;',
          'zamknij pokrywę mediów.',
        ] },
        { type: 'p', text: 'Prowadnica mediów przy głowicy ułatwia zakładanie — przed wsunięciem materiału warto przesunąć ją maksymalnie w prawo. Drukarka obsługuje też **media składane (fanfold)** podawane z tyłu albo przez dolną szczelinę dostępową.' },
      ],
    },
    {
      title: 'Tryby wydawania etykiet: nawijanie i odklejanie',
      blocks: [
        { type: 'p', text: 'Oprócz odrywania PX940 obsługuje dwa tryby wykorzystujące wewnętrzny nawijak (zależnie od zainstalowanych modułów):' },
        { type: 'list', items: [
          '**wewnętrzne nawijanie (rewind)** — zadrukowane etykiety wraz z podkładem są nawijane wewnątrz drukarki na nawijak; po założeniu mediów (kroki 1–9 jak przy odrywaniu) zamontuj płytkę nawijania, przeprowadź materiał wokół nawijaka, dociśnij pokrętło **Rewind/Liner Take-Up** do pozycji zamkniętej, a następnie wybierz **Settings → Printing → Media → Printing Mode → Rewind**;',
          '**odklejanie (peel-off / self-strip)** — moduł oddziela etykietę od podkładu zaraz po wydruku, a sam podkład jest nawijany na nawijak; po założeniu mediów wsuń podkład w szczelinę między dyspenserem a wałkiem, napręż go, dociśnij pokrętło Rewind/Liner Take-Up i wybierz **Settings → Printing → Media → Printing Mode → Peel-Off**.',
        ] },
      ],
    },
    {
      title: 'Ładowanie i wyjmowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet. PX940 obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**. Aby sprawdzić kierunek nawinięcia, połóż taśmę na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów i obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę;',
          'nasuń rolkę taśmy na szpulę podającą — taśmę nawiniętą barwą na zewnątrz (ink-out) układaj nawinięciem **zgodnym z ruchem wskazówek zegara**, a nawiniętą barwą do wewnątrz (ink-in) **przeciwnie do ruchu wskazówek zegara**;',
          'przeprowadź taśmę przez mechanizm druku i wyciągnij około **20 cm (8 cali)** początku taśmy;',
          'obróć szpulę nawijającą taśmę w lewo, aż taśma się napręży i będzie przebiegać przez mechanizm bez zmarszczek;',
          'zamknij pokrywę mediów.',
        ] },
        { type: 'p', text: 'Zużytą taśmę zdejmuj przy każdej wymianie rolki. Po założeniu taśmy ustaw drukarkę na tryb termotransferowy — jeśli pozostanie w trybie termicznym, pojawi się alert **Ribbon Installed**.' },
      ],
    },
    {
      title: 'Metody druku: termotransferowy a termiczny bezpośredni',
      blocks: [
        { type: 'p', text: 'PX940 może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku: druk z taśmą daje wydruk trwalszy i odporniejszy na chemikalia, ciepło i światło, natomiast druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny i wymaga etykiet termoczułych.' },
        { type: 'p', text: 'Metodę druku ustawisz w kreatorze **Media Setup** (Kreatory → Drukowanie), wybierając **DT** lub **TTR** wraz z szerokością, długością i marginesem (X-margin), wartościami Start/Stop Adjust oraz prędkością druku. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Wbudowany weryfikator kodów kreskowych (PX940V)',
      blocks: [
        { type: 'p', text: 'W wersji **PX940V** drukarka ma wbudowany **weryfikator**, który skanuje każdy wydrukowany kod kreskowy i potwierdza jego czytelność, zapewniając bezbłędny druk kodów. Gdy etykieta nie spełnia kryteriów, drukarka automatycznie ją unieważnia (nadrukowuje wzór **VOID**) i — zależnie od ustawień — drukuje ją ponownie. Funkcję uruchamia odpowiednia **licencja** instalowana z poziomu **Tools → USB Menu → Install Verifier License**. Weryfikator konfigurujesz ze strony WWW drukarki albo z panelu dotykowego.' },
        { type: 'p', text: 'Najważniejsze ustawienia weryfikacji (**Verifier**):' },
        { type: 'list', items: [
          '**Verification Type** — typ weryfikacji: None (brak), **Read/No Read** (sprawdza tylko czytelność) lub **ISO 15415/15416** (pełna ocena jakości w skali ANSI);',
          '**Passing Grade** — minimalna ocena zaliczająca przy weryfikacji ISO; ocena 0.0 (F) jest najniższa, a domyślna i zalecana przez normę to **1.5 (C)**;',
          '**Aperture** — rozmiar apertury (w milsach) dobierany automatycznie wg normy; zmieniaj tylko, gdy wymaga tego aplikacja nadrzędna;',
          '**Retries** — maksymalna liczba ponownych wydruków po niepowodzeniu (działa przy akcji Void and Reprint);',
          '**Verification Failure Action** — reakcja na niezaliczoną etykietę (patrz niżej);',
          '**Save Failed Label Images** — zapis obrazów wadliwych etykiet (do **100** plików JPG w pamięci nieulotnej, potem najstarszy jest nadpisywany);',
          '**Void Pattern** — wzór nadrukowywany na unieważnionej etykiecie.',
        ] },
        { type: 'p', text: 'Dostępne reakcje na niezaliczoną weryfikację (**Verification Failure Action**): **Void and Reprint** — unieważnia wadliwą etykietę i drukuje ją ponownie (do wyczerpania limitu prób); **Void and Print Next** — unieważnia i przechodzi do kolejnej etykiety; **Pause for User Action** — wstrzymuje druk i czeka na decyzję operatora; **Ignore and Continue** — bez unieważniania, zapisuje wynik i drukuje dalej. Uwaga: unieważnianie (VOID) **nie działa w trybie odklejania (peel-off)**.' },
        { type: 'p', text: 'Weryfikator obsługuje kody **1D** (m.in. Code 39, Code 128, EAN-8/13, EAN-128, UPC-A/E, Interleaved 2 of 5, ITF-14) oraz **2D** (Data Matrix, ISBT Data Matrix), w orientacji pionowej i poziomej. Minimalny rozmiar kodu 1D to **10 milsów**, a 2D — **15 milsów**; na jednej etykiecie można zweryfikować do **32 kodów**, a maksymalna długość weryfikacji to **12 cali**. Zalecana maksymalna prędkość druku z weryfikacją to **4 ips** (dla 203 i 300 dpi) oraz **2 ips** (dla 600 dpi).' },
      ],
    },
    {
      title: 'Raporty i statystyki weryfikacji',
      blocks: [
        { type: 'p', text: 'Każda zweryfikowana etykieta może mieć **raport indywidualny** w formacie XML — zawiera typ kodu, jego rozmiar, zakodowane dane, ocenę ANSI oraz szczegółowe parametry oceny (m.in. kontrast symbolu, modulację, defekty, dekodowalność). Z zakresu raportów indywidualnych powstaje **raport zbiorczy** z liczbą zweryfikowanych etykiet, liczbą i odsetkiem niezaliczonych. Pliki raportów i obrazy wadliwych etykiet pobierzesz przez **pamięć USB**, **FTP** lub **stronę WWW** drukarki.' },
        { type: 'p', text: 'Bieżące wyniki podejrzysz na stronie WWW w **System Information → Statistics → Verification Results** (liczba zweryfikowanych etykiet, wskaźniki niepowodzeń). W języku Fingerprint podsumowanie zwraca polecenie **VERIFIER RESULT [PRINT]** — może je też wydrukować na etykiecie. Domyślną bazę weryfikacji i obrazy wadliwych etykiet skasujesz w **Webpage → Services → Restore Defaults → Verification Files**, by zwolnić pamięć.' },
      ],
    },
    {
      title: 'Kalibracja weryfikatora',
      blocks: [
        { type: 'p', text: 'Kalibracja utrzymuje dokładność weryfikatora przy skanowaniu obrazu i jest zwykle wykonywana fabrycznie. Do kalibracji służy dedykowana **karta kalibracyjna** — postępuj zgodnie z instrukcjami na jej opakowaniu i chroń ją przed uszkodzeniem. Aby skalibrować weryfikator:' },
        { type: 'list', ordered: true, items: [
          'otwórz ramię weryfikatora oraz ramię głowicy i wyjmij z toru mediów wszelkie etykiety i taśmę;',
          'wyczyść głowicę, wałek dociskowy i szybkę weryfikatora miękką, niestrzępiącą się szmatką z alkoholem izopropylowym;',
          'ułóż kartę kalibracyjną w torze mediów zgodnie z opisem na karcie — trzy strzałki (chevrony) wskazują orientację, a napis „FRONT" ma znaleźć się na zewnątrz weryfikatora;',
          'wyrównaj czarną linię karty z listwą odrywania (tear bar), wykorzystując wycięcie w kształcie rombu na czarnej linii;',
          'dosuń kartę równo do grzbietu drukarki, opierając ją o prowadnicę mediów;',
          'zamknij ramię weryfikatora, a następnie ramię głowicy;',
          'na panelu dotykowym wybierz **Wizards → Calibration → Verifier**, naciśnij NEXT i poczekaj, aż karta przesunie się tam i z powrotem;',
          'po zakończeniu panel pokaże wynik (zaliczona lub niezaliczona).',
        ] },
      ],
    },
    {
      title: 'Kalibracja mediów i ekranu',
      blocks: [
        { type: 'p', text: 'Pełną kalibrację czujników mediów uruchomisz z kreatora: **Menu główne → Kreatory (Wizards) → Calibration → Media** — kalibruje wszystkie czujniki mediów i pokazuje bieżące ustawienia druku. Jeśli zainstalowano opcjonalny czujnik pobrania etykiety (**Label Taken Sensor**) lub dyspenser, użyj kreatora **Wizards → Calibration → Label Taken Sensor**, najlepiej przy każdej zmianie mediów lub przeniesieniu drukarki w inne otoczenie.' },
        { type: 'p', text: '**Ekran dotykowy** skalibrujesz ze strony WWW (**Services → Screen Calibration**) lub kreatorem **Wizards → Calibration → Screen**. Typowa kalibracja polega na pięciu dotknięciach — po jednym w każdym narożniku i jednym na środku ekranu — aż drukarka wyda sygnał dźwiękowy.' },
        { type: 'p', text: 'Po założeniu mediów warto wydrukować **etykietę testową**: **Menu główne → Narzędzia (Tools) → Test Labels**. Jeśli jakość jest niska, skorzystaj z kreatora **Wizards → Printing → Print Quality**, który drukuje serię etykiet do porównania.' },
      ],
    },
    {
      title: 'Regulacja docisku głowicy i czujnika mediów',
      blocks: [
        { type: 'p', text: 'Docisk głowicy reguluj, gdy zmieniasz grubość mediów, gdy wydruk jest jaśniejszy po jednej stronie albo gdy taśma zaczyna się marszczyć. Pokrętłem docisku: obrót w prawo zwiększa docisk i przyciemnia wydruk, obrót w lewo zmniejsza docisk i rozjaśnia wydruk. Oznaczenia na regulatorze to **„L"** (lekki docisk), **„M"** (średni) i **„H"** (mocny). Nie ustawiaj większego docisku niż to konieczne, bo przyspiesza on zużycie głowicy.' },
        { type: 'p', text: 'Drukarka jest fabrycznie ustawiona na pełną szerokość mediów. Przy materiałach węższych niż **4 cale (102 mm)** wyreguluj **regulatory dociskowe (toggle)** tak, by docisk na materiale był równomierny — przy wąskich mediach ustaw wewnętrzny regulator po lewej krawędzi materiału, a zewnętrzny przesuń w prawo i zmniejsz na nim docisk. Źle wyważona głowica objawia się jaśniejszym wydrukiem po jednej stronie, ślizganiem się mediów lub taśmy oraz przesuwaniem materiału na boki.' },
        { type: 'p', text: '**Czujnik przerwy i czarnego znacznika** to fotokomórka sterująca podawaniem mediów: czujnik przerwy (transmisyjny) wykrywa odstępy między etykietami, a czujnik czarnego znacznika (odbiciowy) wykrywa znaczniki na materiale ciągłym. Pozycję regulujesz pokrętłem: obrót w lewo przesuwa czujnik na zewnątrz, w prawo — do środka drukarki. Czujnik zawiera **niebieską diodę LED**, która prześwietla medium i pomaga ustawić go na wysokości przerw lub znaczników.' },
      ],
    },
    {
      title: 'Podłączenie do komputera i porty USB host',
      blocks: [
        { type: 'p', text: 'PX940 ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — najpierw zainstaluj sterownik (InterDriver), a po wyświetleniu monitu połącz port urządzenia USB z tyłu drukarki z komputerem; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator (nie trzeba ustawiać żadnych parametrów USB);',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera; w razie potrzeby dostosuj parametry portu COM do ustawień drukarki;',
          '**sieciowo** — przez Ethernet lub Wi-Fi (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Drukarka ma też porty **USB host** (z przodu i z tyłu). Podłączysz do nich: pamięć USB (jedna partycja, **FAT16/FAT32**) do wgrywania aplikacji, czcionek, obrazów i firmware oraz zapisu plików konfiguracji; klawiaturę (do wysyłania poleceń Fingerprint lub wprowadzania danych w aplikacji Smart Printing); skaner kodów współpracujący z aplikacją Smart Printing. Dostępne są też przejściówki USB–RS-232 oraz USB–LPT.' },
      ],
    },
    {
      title: 'Konfiguracja sieci: Ethernet, Wi-Fi i Bluetooth',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki przy wyłączonym zasilaniu, a następnie włącz drukarkę. Domyślnie pobiera ona adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez serwera DHCP ustaw statyczny adres ręcznie w **Settings → Communications → Ethernet → IPv4/IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP, stronę WWW, obsługę alertów oraz komunikację przez Telnet i sterownik InterDriver.' },
        { type: 'p', text: 'Połączenie **Wi-Fi (Wireless 802.11)** wymaga zainstalowanego opcjonalnego modułu radiowego. W sieciach z uwierzytelnianiem wgraj **certyfikaty zabezpieczeń** przez FTP do katalogu /home/user/certificates/public, zainstaluj je skryptem certinstall, a następnie wskaż plik .pem do użycia ze strony WWW, z panelu lub w programie **PrintSet 5**. **Bluetooth** skonfigurujesz w **Settings → Communications → Bluetooth** lub ze strony WWW — przydaje się przy łączeniu z komputerem mobilnym.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz adres IP drukarki, kliknij Login i zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass** — po zalogowaniu zmień je). Dostęp do menu na ekranie można zawęzić kodem PIN lub całkiem wyłączyć w **System Settings → Display → Menu Access**.' },
      ],
    },
    {
      title: 'Sterowniki, języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'Do pracy z aplikacjami Windows zainstaluj **sterownik Honeywell (InterDriver)**, pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany do poprawnej pracy.' },
        { type: 'p', text: 'PX940 obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense** (automatyczne rozpoznawanie języka etykieta po etykiecie), **Fingerprint (FP)** — domyślny język i podstawa aplikacji Smart Printing, **Direct Protocol (DP)**, **IPL** (Intermec Printer Language, tylko 203 i 300 dpi), **ZSim** (symulacja **ZPL-II** i nowszych) oraz **DSim** (symulacja Datamax/DPL).' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DSim, dla plików IPL — IPL, a do projektowania własnych etykiet z poziomu drukarki — Fingerprint. Język zmienisz w menu głównym (**Settings → System Settings → General → Command Language**) lub ze strony WWW (**Configure → System Settings → General**); po zmianie uruchom drukarkę ponownie. W środowisku z jednym językiem zaleca się ustawienie go na stałe zamiast trybu Autosense.' },
        { type: 'p', text: 'Możliwości drukarki rozszerza narzędzie **PrintSet 5** do konfiguracji oraz wgrywania czcionek, obrazów i aplikacji. Czcionki, obrazy, formaty i formularze WWW można też wgrywać bezpośrednio ze strony WWW drukarki (zakładka **Manage**) albo z pamięci USB, umieszczając pliki w odpowiednich katalogach (np. /fonts, /images, /apps). Część aplikacji może wymagać licencji.' },
      ],
    },
    {
      title: 'Profile drukarki i kopiowanie konfiguracji',
      blocks: [
        { type: 'p', text: 'Bieżące ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla materiału ciągłego i osobny dla etykiet z przerwami). Profile zapisujesz i wczytujesz z menu **Narzędzia (Tools) → Profiles** (opcja **Create** zapisuje, **Load** wczytuje; nazwa do **16 znaków**) albo ze strony WWW (przycisk **Save As Profile** i lista profili w zakładce **Manage**).' },
        { type: 'p', text: 'W profilu nie są zapisywane dane charakterystyczne dla danego egzemplarza i sieci: adres IP (IPv4/IPv6), ustawienia kalibracji czujnika zatrzymania etykiety oraz dane zdalnego komputera łączącego się przez surowe TCP. Profil można przenieść na inną drukarkę poleceniami programistycznymi (profile zmieniające ustawienia komunikacji wymagają uprawnień itadmin). Z pamięci USB można też zainstalować lub wyeksportować plik konfiguracji **.xml** (**Tools → USB Menu → Configuration**).' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, mediów i taśmy, energii podawanej na głowicę, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki. Aby wymienić głowicę:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz pokrywę mediów i wyjmij medium oraz taśmę;',
          'obróć dźwignię podnoszenia głowicy w lewo, by ją unieść, i opuść przedni czujnik (PX940A) lub moduł weryfikatora (PX940V);',
          'przesuń wewnętrzny i zewnętrzny regulator dociskowy na środek głowicy i odkręć śrubokrętem śruby z lewej i prawej strony;',
          'odłącz **dwa kable** od głowicy, wyjmując ją z drukarki;',
          'podłącz oba kable do nowej głowicy, wsuń ją w uchwyt i dokręć obie śruby;',
          'zablokuj z powrotem moduł czujnika lub weryfikatora, załóż medium i taśmę, opuść głowicę i zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Zużyty lub uszkodzony **wałek dociskowy (platen roller)** wymienisz po podniesieniu głowicy i odsunięciu modułu czujnika/weryfikatora: obróć zatrzask wałka zgodnie z ruchem wskazówek zegara, wyjmij wałek, wsuń nowy i ponownie zablokuj zatrzaskiem. Przed każdą wymianą części odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy, czujnika i weryfikatora',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Przed czyszczeniem **wyłącz drukarkę i odłącz ją od zasilania**. Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz od zasilania, otwórz pokrywę mediów i wyjmij medium oraz taśmę;',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz wsunięcie i wyciągnięcie karty;',
          'uporczywy osad z wałka dociskowego lub listwy odrywania usuń patyczkiem zwilżonym alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem medium i taśmę, zamknij pokrywę i włącz zasilanie.',
        ] },
        { type: 'p', text: 'W modelu **PX940A** czyść dodatkowo **przedni czujnik**: górną i dolną część osłaniają przezroczyste powierzchnie, przez które przechodzi światło czujnika przerwy i znacznika — unieś ramię czujnika i przetrzyj je miękką, niestrzępiącą się szmatką z alkoholem izopropylowym. W modelu **PX940V** w ten sam sposób czyść **szybkę weryfikatora**, by zachować dokładność weryfikacji. Tor mediów (obie przezroczyste prowadnice) czyść kartą lub szmatką z alkoholem, a obudowę — miękką szmatką zwilżoną wodą lub łagodnym detergentem. Nigdy nie spryskuj drukarki wodą ani nie wprowadzaj do niej ostrych przedmiotów.' },
      ],
    },
    {
      title: 'Alerty konserwacyjne i statystyki',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** trzech typów (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę **SNMP** albo oboma kanałami naraz. Progi ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a metodę powiadamiania w **System Settings → General → Alert Notification Method**.' },
        { type: 'p', text: 'Na stronie WWW znajdziesz też **licznik (odometr)** pokazujący zużycie głowicy i porównujący bieżące wartości z progami alertów, co pozwala zaplanować czyszczenie i wymianę głowicy, zanim spadnie jakość druku. W zakładce **System Information → Statistics** dostępne są statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, dane o głowicy i taśmie, urządzeniach we/wy, adresie MAC i sieci (TCP/IP, Bluetooth, 802.11) oraz o zainstalowanych czcionkach, kodach i obrazach.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Typowe komunikaty błędów i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium; **Ribbon Low / Media Low** — średnica rolki spadła poniżej progu, wymień ją;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted / Front Arm Lifted** — opuść głowicę lub przednie ramię;',
          '**Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik (LTS);',
          '**Clean Printhead / Replace Printhead / Faulty Dot** — osiągnięto próg licznika lub liczbę uszkodzonych punktów: wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Alerty weryfikatora (PX940V): **Calibration Failed** — wyczyść szybkę weryfikatora i wyrównaj kartę kalibracyjną z listwą odrywania; **Verification Failed** — sprawdź jakość wydruku, wyczyść szybkę i skalibruj weryfikator; **Verifier Calibration Required / Expired** — wykonaj (powtórną) kalibrację kartą; **Verifier is not functioning** — sprawdź, czy zainstalowano licencję i czy typ weryfikacji jest ustawiony na Read/No Read lub ISO 15415/15416; przy unieważnianiu poprawnych etykiet podnieś próg zaliczenia (Passing Grade); niskie oceny popraw, używając jaśniejszych, niebłyszczących mediów i zwiększając kontrast oraz docisk głowicy.' },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Ciemne linie wzdłuż toru mediów lub białe pionowe linie świadczą o zabrudzonej albo zużytej głowicy. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Marszczenie taśmy popraw, sprawdzając kierunek nawinięcia (ink-in/ink-out), zmniejszając zaczernienie, regulując prowadnicę krawędziową, docisk głowicy oraz **napięcie taśmy** (śruba listwy napinającej: w prawo obniża listwę i zmniejsza napięcie, w lewo podnosi i zwiększa). Przy problemach z siecią sprawdź, czy kabel nie jest krzyżowy, a jeśli druk przez wirtualny port COM zatrzymuje się bez błędów — wyłącz obsługę dwukierunkową we właściwościach drukarki.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **Menu głównego**: **Narzędzia (Tools) → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) oraz ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę i otwórz pokrywę mediów, dźwignią unieś głowicę; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny — wszystkie ustawienia zostaną przywrócone. Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz ze **strony WWW** (zakładka **Services → Firmware Upgrade**), z **pamięci USB** lub programem **PrintSet 5**.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB:' },
        { type: 'list', ordered: true, items: [
          'skopiuj plik aktualizacji do **katalogu głównego** pamięci USB (najlepiej, by nie było tam innych plików);',
          'wyłącz drukarkę;',
          'włóż pamięć do portu USB host;',
          'uruchom drukarkę ponownie — pojawi się komunikat o trwającej aktualizacji (może potrwać kilka minut);',
          'po zakończeniu wyjmij pamięć USB.',
        ] },
        { type: 'p', text: 'Podczas aktualizacji **nie wysyłaj danych do drukarki ani jej nie wyłączaj**. Po zakończeniu zaleca się przywrócić ustawienia domyślne i ponownie skalibrować czujniki mediów.' },
      ],
    },
  ],
}
