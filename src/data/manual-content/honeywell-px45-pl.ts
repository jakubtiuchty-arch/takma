import type { PolishManual } from '@/data/manuals'

export const honeywellPx45Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przemysłowej drukarki etykiet Honeywell PX45 po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, kalibrację Smart Calibration i ustawienia druku, po wymianę głowicy QuickMount, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i podłączenie zasilania',
      blocks: [
        { type: 'p', text: 'PX45 to **przemysłowa** drukarka etykiet klasy premium w pełnej **metalowej obudowie**, zaprojektowana do dużych nakładów i pracy ciągłej w trudnych warunkach. Drukuje **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy), z maksymalną szerokością druku **4 cale (102 mm)** i prędkością do **12 ips (ok. 300 mm/s)**. Wyposażona jest w kolorowy dotykowy ekran **LCD** i zintegrowane interfejsy **USB**, **RS-232** oraz **Ethernet**; opcjonalnie obsługuje sieć bezprzewodową **Wi-Fi (802.11)**.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu i upewnij się, że włącznik z tyłu jest wyłączony. Aby uruchomić drukarkę po raz pierwszy:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'naciśnij włącznik zasilania — na ekranie pojawi się pasek postępu, a po nim **kreator startowy (Startup Wizard)**;',
          'wykonaj kroki kreatora, by skonfigurować podstawowe parametry pracy;',
          'uruchom kolejny kreator, aby ustawić więcej parametrów, albo przejdź na ekran gotowości (Ready).',
        ] },
        { type: 'p', text: 'Jeśli wystąpi sytuacja uniemożliwiająca druk, miga wskaźnik gotowości **Ready-to-Work**. Po zakończeniu startu drukarka przechodzi w tryb gotowości, w którym masz dostęp do menu głównego i możesz wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Na panelu przednim znajdują się: kolorowy dotykowy ekran **LCD**, wskaźnik gotowości **Ready-to-Work**, przycisk **Print/Feed** oraz przyciski nawigacyjne. Wskaźnik Ready-to-Work świeci, gdy drukarka jest gotowa do pracy; miga, gdy nie jest gotowa; gaśnie, gdy drukarka jest wyłączona, nie komunikuje się, trwa start lub aktualizacja firmware.' },
        { type: 'p', text: 'Po zakończeniu startu pojawia się **ekran gotowości (Ready)**, na którym domyślnie widać aktywny język drukarki — można go dostosować do innych informacji. Pasek stanu u góry ekranu zawiera ikony: **informacje o drukarce** (po dotknięciu pokazują podstawowe dane) oraz **stan komunikacji** (miga, gdy przez połączenie przewodowe przepływają dane).' },
        { type: 'p', text: 'Przycisk **Menu/Home** przełącza między ekranem gotowości a **menu głównym**, które zawiera sekcje: **Ustawienia (Settings)**, **Narzędzia (Tools)**, **Kreatory (Wizards)** oraz **Programy (Programs)** — ta ostatnia pojawia się tylko, gdy językiem drukarki jest Fingerprint. Strzałkami i przyciskiem Enter wybierasz pozycje i zapisujesz zmiany, a przyciskiem Back wracasz do poprzedniego menu. Uwaga: drukarka nie drukuje, gdy na ekranie otwarte jest menu główne.' },
      ],
    },
    {
      title: 'Przycisk Print/Feed i tryby startowe',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print/Feed** służy do wysuwania mediów, wstrzymywania zadań, kalibracji i druku. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa medium (a przy włączonej funkcji powtórnego druku ponownie drukuje ostatnie zadanie); **przytrzymanie** uruchamia kalibrację czujników mediów;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'podczas startu — naciśnięcie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych.',
        ] },
        { type: 'p', text: 'Działanie drukarki przy starcie i po zamknięciu mechanizmu można dostosować: parametry **Power Up Action** (akcja po włączeniu) oraz **Head Down Action** (akcja po opuszczeniu głowicy) pozwalają ustawić m.in. wysunięcie etykiety, druk etykiet konfiguracyjnych albo **Smart Calibration**. Przytrzymanie przycisku przez ponad **dwie sekundy** domyślnie uruchamia Smart Calibration.' },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'PX45 drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — zarówno samoprzylepnych z podkładem, jak i bez kleju, z **przerwami (gap)** albo z **czarnym znacznikiem (black mark)**, z perforacją lub bez. Sposób zakładania zależy od trybu pracy i zainstalowanych opcji. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i otwórz drzwiczki przednie oraz pokrywę mediów;',
          'obróć **dźwignię podnoszenia głowicy** w lewo (przeciwnie do ruchu wskazówek zegara), by unieść głowicę;',
          'zdejmij pusty rdzeń z piasty podającej; jeśli używasz rolki z rdzeniem **76 mm (3 cale)**, nałóż na piastę adapter 3-calowy;',
          'nałóż nową rolkę mediów na piastę podającą i dosuń ją do oporu;',
          'przeprowadź medium pod prowadnicą napinającą (slack absorber) i dalej do mechanizmu druku, wsuwając materiał do oporu;',
          'obróć dźwignię głowicy w prawo (zgodnie z ruchem wskazówek zegara), by opuścić i zablokować głowicę;',
          'dopasuj **czerwone prowadnice krawędziowe** tak, by materiał był prowadzony z minimalnym luzem;',
          'zamknij drzwiczki przednie i pokrywę mediów, prowadząc medium przez szczelinę w drzwiczkach.',
        ] },
        { type: 'p', text: 'Drukarka jest fabrycznie ustawiona na pełną szerokość mediów — przy węższych materiałach wyreguluj **ramię dociskowe (pressure arm)** tak, by jego strzałka znalazła się na środku materiału. Drukarka obsługuje też **media składane (fanfold)** z zewnętrznego podajnika ustawionego za drukarką; zaleca się stosowanie opcjonalnych **prowadnic fanfold**, regulowanych do szerokości materiału od **40 mm**.' },
      ],
    },
    {
      title: 'Tryby wydawania etykiet: odrywanie, odklejanie, nawijanie, obcinanie',
      blocks: [
        { type: 'p', text: 'PX45 obsługuje kilka trybów wydawania etykiet, zależnie od zainstalowanych modułów:' },
        { type: 'list', items: [
          '**odrywanie (tear-off / straight-through)** — wydruki odrywasz ręcznie z przodu drukarki na listwie odrywania (tear bar);',
          '**odklejanie (peel-off / self-strip)** — moduł odklejający oddziela etykietę od podkładu zaraz po wydruku, a podkład jest nawijany na wewnętrzną piastę odbiorczą; tryb wymaga opcjonalnego zespołu odklejającego i etykiet samoprzylepnych z podkładem;',
          '**wewnętrzne nawijanie partii (batch take-up)** — zadrukowane etykiety lub bilety są nawijane wewnątrz drukarki na piastę odbiorczą, która mieści **30–40%** pełnej rolki; tryb wymaga opcjonalnego, fabrycznie montowanego modułu nawijania;',
          '**obcinanie (cut-off)** — opcjonalny obcinacz odcina materiał ciągły lub podkład między etykietami, około **37 mm** przed linią druku; przeznaczony do mediów papierowych o grubości **60–175 µm** i wymaga zdjęcia drzwiczek przednich.',
        ] },
        { type: 'p', text: 'Uwaga: ostrze obcinacza obraca się przy włączaniu i restarcie drukarki — trzymaj palce z dala od krawędzi tnących, a obcinacza nie podłączaj ani nie odłączaj przy włączonym zasilaniu. W trybie odklejania zwracaj uwagę na sztywność i właściwości podkładu etykiet, a przy etykietach krótszych niż **25 mm** może spaść dokładność pozycjonowania.' },
      ],
    },
    {
      title: 'Ładowanie i wyjmowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na oleje, chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet. PX45 obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia taśmy, połóż ją na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out). Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz drzwiczki przednie i pokrywę mediów, a dźwignią podnoszenia głowicy (obrót w lewo) unieś głowicę;',
          'zdejmij niewykorzystaną taśmę i pusty rdzeń;',
          'dopasuj **szpulę podającą taśmę** do jej szerokości — dla taśmy **55–60 mm** ustaw szpulę w pierwszym (wewnętrznym) rowku, dla **88–90 mm** w drugim, a dla **110 mm** w trzecim (zewnętrznym);',
          'nasuń rolkę taśmy na szpulę podającą, przeprowadź taśmę przez mechanizm druku i wyciągnij około **20 cm (8 cali)** początku taśmy;',
          'nie puszczając taśmy, obróć dźwignię głowicy w prawo, by opuścić głowicę i zablokować taśmę;',
          'nałóż kartonowy rdzeń początku taśmy na **piastę nawijającą (rewind hub)** — podczas druku obraca się ona w lewo;',
          'unieś ponownie głowicę i nawijaj taśmę, aż przezroczysty początek (leader) minie głowicę i taśma się napręży;',
          'opuść głowicę, zamknij drzwiczki i pokrywę mediów.',
        ] },
        { type: 'p', text: 'Zużytą taśmę zdejmuj przy każdej wymianie rolki. Po założeniu taśmy ustaw drukarkę na tryb termotransferowy — jeśli pozostanie w trybie termicznym, pojawi się alert **Ribbon Installed**.' },
      ],
    },
    {
      title: 'Metody druku: termotransferowy a termiczny bezpośredni',
      blocks: [
        { type: 'p', text: 'PX45 może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku: druk z taśmą daje wydruk trwalszy i odporniejszy na oleje, chemikalia, ciepło i światło, druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny i wymaga etykiet termoczułych.' },
        { type: 'p', text: 'Metodę druku ustawisz w kreatorze **Media Setup** (Kreatory → Drukowanie) albo w **Ustawienia → Drukowanie → Media**, wybierając **DT** lub **TTR**. Najprościej skorzystać ze **Smart Calibration**, która sama wykrywa, czy w drukarce jest taśma, i odpowiednio dobiera metodę druku. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Smart Calibration i kreatory kalibracji',
      blocks: [
        { type: 'p', text: '**Smart Calibration** to funkcja, która automatycznie wykrywa **rodzaj mediów** (przerwa, czarny znacznik lub materiał ciągły), rozpoznaje **metodę druku** (z taśmą lub bez) i kalibruje długość etykiety. Dzięki temu ustawienie drukarki pochłania znacznie mniej materiału. Smart Calibration można przypisać do trzech działań: **Power Up Action** (po włączeniu drukarki), **Head Down Action** (po opuszczeniu głowicy) oraz **Hold Print/Feed Button** (przytrzymanie przycisku) — domyślnie jest dostępna w każdym z nich.' },
        { type: 'p', text: 'Pełną kalibrację mediów uruchomisz też z kreatorów: **Menu główne → Kreatory → Kalibracja → Media**, który kalibruje czujnik zatrzymania etykiety i pokazuje bieżące ustawienia druku. Jeśli zainstalowano opcjonalny czujnik pobrania etykiety (Label Taken Sensor) lub podajnik etykiet, użyj kreatora **Kreatory → Kalibracja → Label Taken Sensor** — najlepiej przy każdej zmianie mediów lub przeniesieniu drukarki w inne otoczenie.' },
        { type: 'p', text: 'Po założeniu mediów warto wydrukować **etykietę testową**: **Menu główne → Narzędzia → Test Labels**. Potwierdza ona poprawność instalacji i jakość druku.' },
      ],
    },
    {
      title: 'Regulacja czujnika i ramienia dociskowego',
      blocks: [
        { type: 'p', text: '**Czujnik zatrzymania / czarnego znacznika (LSS)** to fotokomórka sterująca podawaniem mediów — wykrywa przerwy, szczeliny lub czarne znaczniki, zależnie od ustawionego rodzaju mediów. Czujnik musi być wyrównany z przerwami albo znacznikami; przy etykietach o nieregularnym kształcie ustaw go na wysokości przednich końców etykiet.' },
        { type: 'p', text: 'Pozycję czujnika regulujesz **śrubokrętem płaskim**: obrót w prawo przesuwa czujnik ku środkowi, obrót w lewo — na zewnątrz (zakres do **50 mm** od wewnętrznej krawędzi toru mediów). Po regulacji spójrz na mechanizm druku z przodu przy podniesionej głowicy i upewnij się, że punkt detekcji pokrywa się ze środkiem przerw lub znaczników; pomocne są oznaczenia co **1 cm** na dolnej płycie prowadzącej.' },
        { type: 'p', text: 'Przy materiałach węższych niż pełna szerokość wyreguluj **ramię dociskowe (pressure arm)**: poluzuj pokrętło, przesuń ramię tak, by strzałka na jego końcu znalazła się na środku materiału, i dokręć pokrętło. Źle ustawione ramię objawia się słabszym wydrukiem po jednej stronie toru mediów.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość i zaczernienie',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w **Ustawienia → Drukowanie** lub kreatorem **Media Setup**. Najważniejsze to: typ mediów i metoda druku (DT/TTR), szerokość i długość etykiety, margines (**X-start**), wartości Start i Stop Adjust, prędkość druku oraz **kontrast/zaczernienie (darkness)**.' },
        { type: 'p', text: 'Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku i marszczenie taśmy; dobierz wartość do mediów i taśmy. Jeśli treść wydruku jest ściśnięta, zmniejsz prędkość druku. Najlepsze ustawienie jakości szybko wskaże kreator **Kreatory → Drukowanie → Print Quality**, który drukuje serię etykiet do porównania.' },
        { type: 'p', text: 'Niezależnie od ustawień programowych można wyregulować **docisk głowicy (printhead pressure)** pokrętłem — obrót w prawo zwiększa docisk i przyciemnia wydruk (+), obrót w lewo zmniejsza docisk i rozjaśnia wydruk (-). Nie ustawiaj większego docisku niż to konieczne, bo przyspiesza on zużycie głowicy. Aby wrócić do ustawienia fabrycznego, dokręć pokrętło do oporu (+), a następnie poluzuj je o **cztery pełne obroty** (-).' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PX45 ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**, a opcjonalnie **Wi-Fi (802.11)**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — najpierw zainstaluj sterownik (InterDriver), a po wyświetleniu monitu połącz port urządzenia USB z tyłu drukarki z komputerem; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator (nie trzeba ustawiać żadnych parametrów USB);',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera; w razie potrzeby dostosuj parametry portu COM do ustawień drukarki;',
          '**sieciowo** — przez Ethernet lub Wi-Fi (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Drukarka ma też porty **USB host** (z przodu i z tyłu) — podłączysz do nich pamięć USB (jedna partycja, **FAT16/FAT32**) do wgrywania aplikacji, czcionek, obrazów i firmware, klawiaturę (do wysyłania poleceń Fingerprint) lub skaner kodów współpracujący z aplikacją Smart Printing.' },
      ],
    },
    {
      title: 'Konfiguracja sieci: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki przy wyłączonym zasilaniu, a następnie włącz drukarkę. Domyślnie pobiera ona adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez serwera DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja → Ethernet → IPv4/IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP, stronę WWW, obsługę alertów oraz komunikację przez Telnet i sterownik InterDriver.' },
        { type: 'p', text: 'Połączenie **Wi-Fi (Wireless 802.11)** wymaga zainstalowanej opcjonalnej karty radiowej. Skonfigurujesz je z menu głównego (**Ustawienia → Komunikacja → Wireless 802.11**), ze strony WWW drukarki albo programem **PrintSet 5**. W sieciach z uwierzytelnianiem wgrasz **certyfikaty zabezpieczeń** przez połączenie FTP, a następnie zainstalujesz je skryptem certinstall i wskażesz plik .pem do użycia.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz adres IP drukarki, kliknij Login i zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass** — po zalogowaniu zmień je). Dostęp do menu na ekranie można zawęzić kodem PIN lub całkiem wyłączyć w **System Settings → Display → Menu Access**.' },
      ],
    },
    {
      title: 'Sterowniki, języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'Do pracy z aplikacjami Windows zainstaluj **sterownik Honeywell (InterDriver)**, pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany do poprawnej pracy.' },
        { type: 'p', text: 'PX45 obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense** (automatyczne rozpoznawanie języka etykieta po etykiecie), **Fingerprint (FP)**, **Direct Protocol (DP)**, **IPL** (Intermec Printer Language), **ZSim** (symulacja **ZPL-II** i nowszych), **DPL** (Datamax) oraz **Smart Printing (C#)**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL, dla plików IPL — IPL, a do projektowania własnych etykiet z poziomu drukarki — Fingerprint. Język zmienisz w menu głównym (**Ustawienia → System Settings → General → Command Language**) lub ze strony WWW (zakładka **Configure → System Settings → General**); po zmianie uruchom drukarkę ponownie. W środowisku, w którym używasz tylko jednego języka, zaleca się ustawienie go na stałe zamiast trybu Autosense.' },
        { type: 'p', text: 'Możliwości drukarki rozszerzają narzędzia Honeywell — przede wszystkim **PrintSet 5** do konfiguracji oraz wgrywania czcionek, obrazów i aplikacji, a także platforma do zdalnego zarządzania flotą urządzeń (Operational Intelligence). Część aplikacji może wymagać licencji. Czcionki, obrazy, formaty i formularze WWW można też wgrywać bezpośrednio ze strony WWW drukarki (zakładka Manage).' },
      ],
    },
    {
      title: 'Profile drukarki',
      blocks: [
        { type: 'p', text: 'Bieżące ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla materiału ciągłego i osobny dla etykiet z przerwami). Profile zapisujesz i wczytujesz z menu **Narzędzia → Profile** albo ze strony WWW (przycisk **Save As Profile** i lista **Profiles**).' },
        { type: 'p', text: 'W profilu nie są zapisywane niektóre dane charakterystyczne dla danego egzemplarza i sieci — m.in. ustawienia adresacji. Zapisany profil można też przenieść na inną drukarkę, wysyłając go poleceniami programistycznymi; profile zmieniające ustawienia komunikacji wymagają uprawnień itadmin.' },
      ],
    },
    {
      title: 'Druk na etykietach RFID UHF',
      blocks: [
        { type: 'p', text: 'PX45 w wariancie z **kartą interfejsu RFID** drukuje i koduje etykiety z transponderami **RFID UHF (Gen 2)**. Media z wszytym znacznikiem RFID są nieco grubsze w miejscu transpondera, co może wpływać na jakość druku — w miarę możliwości unikaj zadrukowywania najgrubszej części etykiety. Do etykiet RFID w druku termotransferowym używaj wysokiej jakości taśmy.' },
        { type: 'p', text: 'Aby uzyskać najlepszy efekt: po założeniu mediów RFID **uruchom drukarkę ponownie** lub wykonaj **TESTFEED**, by drukarka rozpoznała typ mediów. W razie potrzeby dopasuj zmienną **TAGADJUST**, aby etykiety były poprawnie ustawione względem anteny, a do zapisu znaczników Gen 2 (polecenie TAG FIELD) ustawiaj parametry początku i długości na liczby parzyste. W języku Fingerprint dla etykiet termotransferowych zacznij od zaczernienia ustawionego na **65** i czułości mediów na **High**, a w IPL od czułości **565** i dostosuj wartości do używanych mediów.' },
      ],
    },
    {
      title: 'Wymiana głowicy QuickMount i wałka',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, mediów i taśmy, energii podawanej na głowicę, prędkości druku oraz temperatury otoczenia. Mocowanie **QuickMount** sprawia, że głowicę wymienia się bez narzędzi: uchwyt głowicy trzymany jest **magnesem** w ramieniu dociskowym. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę, otwórz drzwiczki przednie i pokrywę mediów;',
          'obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę, i wyjmij medium oraz taśmę;',
          'odciągnij uchwyt głowicy od magnesu w ramieniu dociskowym;',
          'odczep zaczepy uchwytu od osi i wysuń głowicę na tyle, na ile pozwalają kable;',
          'odłącz **dwa kable** od głowicy — ciągnij za wtyki, nie za przewody, zwracając uwagę na zatrzask wewnętrznego złącza;',
          'podłącz oba kable do nowej głowicy, zaczep uchwyt na osi (uważając, by kable nie przeszkadzały) i obróć dźwignię w prawo, aż magnes zatrzyma uchwyt;',
          'załóż nowe medium i taśmę, a po starcie drukarki skalibruj czujniki.',
        ] },
        { type: 'p', text: 'Przed każdą wymianą części serwisowych odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru mediów',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy drukującej wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Przed czyszczeniem **wyłącz drukarkę i odłącz ją od zasilania**.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz drzwiczki przednie i pokrywę mediów;',
          'obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę, i wyjmij medium oraz taśmę;',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'powtórz wsunięcie i wyciągnięcie karty; w razie potrzeby użyj świeżej karty;',
          'uporczywy osad z wałka dociskowego lub listwy odrywania usuń patyczkiem zwilżonym alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem medium i taśmę.',
        ] },
        { type: 'p', text: 'Czujnik zatrzymania etykiety osłaniają dwie **przezroczyste prowadnice**, przez które przechodzi światło czujnika — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju. Jeśli drukarka zaczyna podawać etykiety nieprawidłowo, wysuń górną prowadnicę, sprawdź, czy nic nie przesłania wiązki światła, i w razie potrzeby przetrzyj prowadnice kartą czyszczącą lub miękką szmatką z alkoholem izopropylowym, uważając, by ich nie zarysować. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet.' },
      ],
    },
    {
      title: 'Konserwacja, alerty i czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Regularnie utrzymuj drukarkę w czystości — czyste wnętrze i obudowa ograniczają przedostawanie się kurzu do mechanizmu. Czyścić można głowicę, prowadnice mediów oraz obudowę.' },
        { type: 'list', items: [
          'przed czyszczeniem zawsze odłącz przewód zasilający;',
          'nigdy nie spryskuj drukarki wodą i chroń ją przed wilgocią, zwłaszcza przy myciu pomieszczenia;',
          'do obudowy używaj miękkiej szmatki lekko zwilżonej wodą lub łagodnym detergentem;',
          'stosuj wyłącznie zalecane środki czyszczące — alkohol izopropylowy jest łatwopalny, używaj go ostrożnie;',
          'nigdy nie wprowadzaj do drukarki ostrych ani spiczastych przedmiotów.',
        ] },
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami — progi ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a metodę powiadamiania w **System Settings → General → Alert Notification Method**. Na stronie WWW znajdziesz też **licznik (odometr)** pokazujący zużycie głowicy i porównujący bieżące wartości z progami alertów, co pozwala zaplanować czyszczenie i wymianę głowicy, zanim spadnie jakość druku. W zakładce **System Information** dostępne są też statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, dane o głowicy i taśmie, urządzeniach we/wy, adresie MAC i ustawieniach TCP/IP oraz o zainstalowanych czcionkach, kodach kreskowych i obrazach.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Typowe komunikaty błędów i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium; **Ribbon Low / Media Low** — średnica rolki spadła poniżej progu, wymień ją;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted / Front Arm Lifted** — opuść głowicę lub ramię przednie; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik (LTS);',
          '**Clean Printhead / Replace Printhead / Faulty Dot** — osiągnięto próg licznika lub liczbę uszkodzonych punktów: wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Ciemne linie wzdłuż toru mediów lub białe pionowe linie świadczą o zabrudzonej albo zużytej głowicy — wyczyść ją lub wymień. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Marszczenie lub rwanie taśmy popraw, sprawdzając kierunek nawinięcia (ink-in/ink-out), zmniejszając zaczernienie, regulując prowadnicę krawędziową, docisk głowicy i ramię dociskowe oraz **napięcie taśmy** (śruba listwy napinającej: w prawo obniża listwę i zmniejsza napięcie, w lewo podnosi i zwiększa).' },
        { type: 'p', text: 'Przy problemach z siecią sprawdź, czy kabel jest prawidłowo podłączony i czy nie jest to kabel krzyżowy, oraz czy komputer i drukarka są poprawnie skonfigurowane. Jeśli druk przez wirtualny port COM zatrzymuje się bez błędów, wyłącz obsługę dwukierunkową we właściwościach drukarki.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **Menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) oraz ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę i otwórz pokrywę mediów, dźwignią unieś głowicę; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny — wszystkie ustawienia zostaną przywrócone. Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz ze **strony WWW**, z **pamięci USB** lub programem **PrintSet 5**.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB:' },
        { type: 'list', ordered: true, items: [
          'skopiuj plik aktualizacji do **katalogu głównego** pamięci USB (najlepiej, by nie było tam innych plików);',
          'wyłącz drukarkę;',
          'włóż pamięć do portu USB host;',
          'uruchom drukarkę ponownie — pojawi się komunikat o trwającej aktualizacji (może potrwać kilka minut);',
          'po zakończeniu wyjmij pamięć USB.',
        ] },
        { type: 'p', text: 'Aktualizację ze strony WWW wykonasz po zalogowaniu w zakładce **Services → Firmware Upgrade** — wskaż plik i kliknij Upgrade. Podczas aktualizacji **nie wysyłaj danych do drukarki ani jej nie wyłączaj**. Po zakończeniu zaleca się przywrócić ustawienia domyślne i ponownie skalibrować czujniki mediów.' },
      ],
    },
  ],
}
