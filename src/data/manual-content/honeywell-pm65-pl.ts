import type { PolishManual } from '@/data/manuals'

export const honeywellPm65Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze szerokoformatowej przemysłowej drukarki etykiet Honeywell PM65 po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie nośnika 6" i taśmy termotransferowej, kalibrację i ustawienia druku, po konfigurację sieci, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PM65 to **szerokoformatowa drukarka przemysłowa** w **metalowej obudowie**, zbudowana na platformie **Printer Edge** i przeznaczona do dużych nakładów oraz pracy ciągłej. Jej cechą wyróżniającą jest obsługa nośnika o szerokości do **6 cali (152 mm)**. Drukuje **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy). Dostępna jest w wersji z kolorowym **dotykowym ekranem LCD 3,5"** i pełną nawigacją oraz w wersji ikonowej (Icon) ze wskaźnikami **LED i jednym przyciskiem**. Każda drukarka ma zintegrowane **USB**, **RS-232** i **Ethernet**, a opcjonalnie moduł bezprzewodowy z **Wi-Fi 6** i **Bluetooth 5.2**.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu. Aby uruchomić drukarkę:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'naciśnij włącznik zasilania;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator startowy**;',
          'na modelu z ekranem dotykowym wykonaj kroki kreatora — ustawisz m.in. datę, godzinę i sposób dostępu do menu (Menu Access).',
        ] },
        { type: 'p', text: 'Kreator startowy pojawia się przy pierwszym włączeniu oraz po każdym przywróceniu ustawień fabrycznych — jako jedyny nie da się go uruchomić później z menu głównego. Po jego zakończeniu drukarka przechodzi w tryb gotowości, w którym masz dostęp do menu głównego i możesz wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Na panelu przednim wersji dotykowej znajduje się **kolorowy ekran LCD 3,5"** obsługujący dotyk palcem, w rękawicy lub rysikiem, oraz fizyczny przycisk **Print** (drukowania/wysuwu). Po zakończeniu startu pojawia się **ekran gotowości** (Ready); domyślnie pasek informacyjny u dołu pokazuje aktywny język drukarki i jej adres IP, a po zainstalowaniu zegara czasu rzeczywistego (RTC) także godzinę i datę. Zawartość ekranu można dostosować.' },
        { type: 'p', text: 'Pasek stanu u góry zawiera ikony: **menu główne**, **komunikacja**, **informacje o drukarce**, a także stan **Wi-Fi** i **Bluetooth** (ikona Wi-Fi pojawia się tylko z zainstalowanym modułem bezprzewodowym). Dotknięcie ikony menu otwiera **menu główne** z sekcjami: Programy, Ustawienia, Narzędzia (Tools), Kreatory (Wizards) i Ustawienia druku (Print Settings). Sekcja Programy pojawia się tylko dla języków Fingerprint, Direct Protocol i DPL. Pamiętaj, że drukarka nie drukuje, gdy wyświetlone jest menu — aby drukować, wróć na ekran gotowości.' },
        { type: 'p', text: 'Wersja ikonowa (Icon) nie ma ekranu — jej stanem sterują podświetlane ikony **LED** i pojedynczy przycisk. Czerwone ikony sygnalizują brak nośnika lub taśmy, podniesioną głowicę, przegrzanie głowicy lub błąd konfiguracji; biała ikona Pause oznacza wstrzymanie, a bursztynowa ikona Maintenance — osiągnięcie progu konserwacji. Konfigurację tego modelu wykonuje się programem **PrintSet 5** z komputera.' },
      ],
    },
    {
      title: 'Przycisk Print (drukowania/wysuwu)',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print** służy do wysuwania nośnika, wstrzymywania zadań, kalibracji i druku testowego. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa nośnik (a przy włączonej funkcji ponownego druku — drukuje ostatnie zadanie); **przytrzymanie** uruchamia kalibrację czujników nośnika;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'w stanie błędu — naciśnięcie wysuwa nośnik;',
          'podczas startu — przytrzymanie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych.',
        ] },
        { type: 'p', text: 'Domyślnie przytrzymanie przycisku w stanie gotowości uruchamia **inteligentną kalibrację (Smart Calibration)**; zachowanie to można zmienić w ustawieniach.' },
      ],
    },
    {
      title: 'Ładowanie etykiet (nośnika)',
      blocks: [
        { type: 'p', text: 'PM65 drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — samoprzylepnych z podkładem lub bez kleju, z przerwami między etykietami albo z **czarnym znacznikiem**. Dzięki szerokiej ścieżce obsłuży nośnik o szerokości do **6 cali (do 177,8 mm)**. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę nośnika;',
          'obróć **dźwignię podnoszenia głowicy** w lewo, by unieść głowicę;',
          'nałóż rolkę na piastę podającą i dosuń ją do wewnętrznej ściany drukarki;',
          'przeprowadź nośnik przez mechanizm druku;',
          'dopasuj **prowadnice nośnika** oraz prowadnicę napinającą (dancer) do szerokości materiału i wyważ docisk głowicy;',
          'ustaw czujnik przerwy/czarnego znacznika pokrętłem regulacji tak, aby jego **niebieska dioda** wypadła na środku nośnika;',
          'obróć dźwignię głowicy w prawo, aż zatrzaśnie się głowica;',
          'po zamknięciu głowicy nośnik zostanie wysunięty automatycznie, a następnie zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Uwaga: listwa odrywania ma **ostre krawędzie** — trzymaj z dala palce. Drukarka obsługuje też **media składane (fanfold)** ustawione za drukarką lub pod nią; nośnik wprowadza się wówczas przez szczelinę z tyłu lub od spodu obudowy.' },
      ],
    },
    {
      title: 'Tryby wydawania etykiet: odrywanie, odklejanie, obcinanie',
      blocks: [
        { type: 'p', text: 'Tryb wydawania ustawia się w **Ustawienia → Drukowanie → Media → Tryb druku (Print Mode)**; domyślnym jest odrywanie. Zależnie od zainstalowanych modułów dostępne są:' },
        { type: 'list', items: [
          '**odrywanie (tear-off)** — wydruki odrywasz ręcznie z przodu drukarki na listwie odrywania;',
          '**odklejanie/nawijanie (peel off / rewind)** — moduł odklejający oddziela etykietę od podkładu, a drukarka czeka z kolejną etykietą, aż pobierzesz gotową; siłę odklejania reguluje opcja **Peel Strength** (domyślnie Low, w razie problemów Medium lub High);',
          '**obcinanie (cutter)** — z zainstalowanym obcinaczem każda etykieta jest automatycznie odcinana po wydruku; opcjonalny pojemnik mieści do **20** etykiet.',
        ] },
        { type: 'p', text: 'Uwaga: obcinaczem nie wolno ciąć materiału samoprzylepnego (klej zalepia ostrze) — przy materiale z podkładem obcinaj wyłącznie podkład. W trybie odklejania najlepiej sprawdzają się etykiety bez perforacji.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak taśmy (ribbonu) dopasowanej do etykiet. PM65 obsługuje taśmy o szerokości do **6,8 cala (172,7 mm)** i długości do **450 m**, nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**. Stosuj taśmę szerszą od etykiet — chroni to głowicę przed bezpośrednim kontaktem z nośnikiem.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia taśmy, połóż ją na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę nośnika;',
          'obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę;',
          'nałóż rolkę taśmy na piastę podającą zgodnie z kierunkiem nawinięcia — taśmę ink-out nawiniętą zgodnie z ruchem wskazówek zegara, taśmę ink-in przeciwnie;',
          'przeprowadź taśmę przez mechanizm druku — w PM65 poprowadź ją **za wałkiem prowadzącym** — i wyciągnij około **20 cm (8 cali)** początku taśmy;',
          'przymocuj początek taśmy do **rozkładanego rdzenia odbiorczego** (collapsible core) na piaście nawijającej;',
          'obracaj piastę nawijającą w lewo, aż taśma się napręży i będzie przechodzić bez fałd;',
          'obróć dźwignię głowicy w prawo, aby zamknąć głowicę.',
        ] },
        { type: 'p', text: 'PM65 ma powiększony **rozkładany rdzeń odbiorczy**, który ułatwia zdejmowanie zużytej taśmy. Przy wymianie rolki **przerwij lub urwij** taśmę przed piastą odbiorczą (nigdy nie tnij jej na samej piaście — grozi to jej uszkodzeniem), pociągnij pokrętło zwalniające rdzeń i zsuń zużytą taśmę. Po założeniu taśmy ustaw drukarkę na tryb termotransferowy (patrz kolejna sekcja).' },
      ],
    },
    {
      title: 'Tryb termotransferowy a termiczny',
      blocks: [
        { type: 'p', text: 'PM65 może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku: druk z taśmą jest trwalszy, druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny.' },
        { type: 'p', text: 'Metodę druku ustawisz w **Ustawienia → Drukowanie → Media**, wybierając **No Ribbon (DT)** lub **Ribbon (TTR)**. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się ostrzeżenie **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Regulacja docisku i wyważenia głowicy',
      blocks: [
        { type: 'p', text: 'Docisk głowicy (printhead pressure) reguluje się **śrubokrętem płaskim na śrubie dociskowej**, gdy zmieniasz grubość nośnika lub gdy taśma zaczyna się marszczyć. Obrót w prawo zwiększa docisk (ciemniejszy wydruk), obrót w lewo zmniejsza go (jaśniejszy wydruk). Nie ustawiaj większego docisku niż to konieczne — przyspiesza on zużycie głowicy.' },
        { type: 'p', text: 'Docisk jest fabrycznie wyważony dla nośnika pełnej szerokości. Dla materiału węższego niż **102 mm (4 cale)** wyreguluj **wyważenie głowicy (balance bar)**: po podniesieniu głowicy naciśnij szarą część listwy wyważającej i przesuń ją **na zewnątrz dla szerszego nośnika, do środka dla węższego**. Niewyważona głowica daje jaśniejszy wydruk po jednej stronie, ślizganie nośnika i taśmy, marszczenie taśmy albo zbaczanie materiału na bok.' },
      ],
    },
    {
      title: 'Kalibracja nośnika i ekranu dotykowego',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet i taśmy skalibruj czujniki nośnika, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print** na ekranie gotowości; pełną kalibrację uruchomisz kreatorem **Menu główne → Kreatory → Kalibracja → Media**, który skalibruje wszystkie czujniki i pokaże bieżące ustawienia druku. Osobne kreatory obejmują czujnik pobrania etykiety oraz datę i godzinę.' },
        { type: 'p', text: 'Czujnik przerwy między etykietami jest **transmisyjny** (prześwietla nośnik), a czujnik czarnego znacznika — **odblaskowy**; oba mają niebieską diodę, której pozycję ustawia się pokrętłem regulacji (w lewo czujnik przesuwa się na zewnątrz, w prawo do środka). W PM65 zakres pracy czujnika zatrzymania etykiety sięga **6 cali (152 mm)**.' },
        { type: 'p', text: 'Ekran dotykowy skalibrujesz kreatorem **Kreatory → Kalibracja → Ekran** lub ze strony WWW drukarki (**Services → Screen Calibration**). Po uruchomieniu dotykaj pojawiającego się kwadratu — typowo **pięć dotknięć**, po jednym w każdym rogu i jedno na środku — aż drukarka wyda sygnał dźwiękowy.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość i zaczernienie',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w **Ustawienia → Drukowanie → Print Quality**. PM65 występuje w rozdzielczości **203 dpi i 300 dpi** i drukuje z prędkością do **12 cali/s (305 mm/s) przy 203 dpi** oraz do **10 cali/s (254 mm/s) przy 300 dpi**. Najważniejsze ustawienia to metoda druku (DT/TTR), czułość nośnika (Media Sensitivity, domyślnie High), **zaczernienie (Darkness)** w zakresie 1–100 (domyślnie 55) oraz **kontrast (Contrast)** od −10% do +10% co 2% (domyślnie 0%).' },
        { type: 'p', text: 'Zbyt niskie zaczernienie daje blady wydruk, zbyt wysokie — rozlewanie się druku i marszczenie taśmy; dobierz wartości do nośnika i taśmy. Jeśli treść wydruku jest ściśnięta, zmniejsz prędkość druku lub popraw docisk głowicy.' },
        { type: 'p', text: 'Po założeniu nośnika warto wydrukować **etykietę testową**: **Menu główne → Narzędzia → etykiety testowe (Test Labels)**. Potwierdza ona poprawność instalacji i jakość druku.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PM65 ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**, a opcjonalnie moduł bezprzewodowy. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — połącz port urządzenia USB z tyłu drukarki z komputerem; zainstaluj sterownik Honeywell dla Windows (po podłączeniu Windows zwykle wykrywa drukarkę). Do jednego komputera podłączaj tylko jedną drukarkę;',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera (domyślnie 115200 b/s, 8 bitów, brak parzystości, 1 bit stopu);',
          '**sieciowo** — przez Ethernet lub łączność bezprzewodową (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Z przodu i z tyłu PM65 znajdują się też porty **USB host** — podłączysz do nich pamięć USB (jedna partycja, **FAT16/FAT32**), klawiaturę lub skaner kodów. Pamięcią USB zarządzasz z menu **Narzędzia → USB Menu**.' },
      ],
    },
    {
      title: 'Sieć: Ethernet, Wi-Fi i Bluetooth',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki. Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w **lewym dolnym rogu ekranu**. Bez DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja → Ethernet → IPv4/IPv6**. Drukarka obsługuje też **Gigabit Ethernet** (domyślnie wyłączony).' },
        { type: 'p', text: 'Łączność **Wi-Fi** i **Bluetooth** wymaga zainstalowanego opcjonalnego modułu bezprzewodowego. Wi-Fi skonfigurujesz z menu (**Ustawienia → Komunikacja → Wireless 802.11**), kreatorem na ekranie gotowości albo ze strony WWW; w sieci bez DHCP ustawienia trzeba wprowadzić programem **PrintSet 5** przez USB. Bluetooth włączysz na ekranie dotykowym (wykryj drukarkę, potwierdź klucz numeryczny), a w modelu ikonowym — przytrzymując przycisk Feed przez ponad 2 sekundy przy podniesionej głowicy.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz jej adres IP, kliknij Login i zaloguj się (domyślnie użytkownik **admin**, hasło **pass** — po zalogowaniu zmień hasło). Ustawienia sieciowe wymagają zalogowania jako **itadmin**.' },
      ],
    },
    {
      title: 'Sterowniki i narzędzia konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Do poprawnej pracy z komputerem zainstaluj **sterownik Honeywell dla Windows**, pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany.' },
        { type: 'p', text: 'Drukarkę skonfigurujesz na kilka sposobów: ze **strony WWW**, z **menu głównego** na ekranie dotykowym, aplikacją **PrintSet 5** (komputer) lub **Print Set MC** (urządzenia mobilne), albo **komendami programistycznymi** wysyłanymi przez połączenie szeregowe lub sieciowe (np. polecenie SETUP w języku Fingerprint — wymaga zalogowania jako itadmin).' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie nośnika (osobny profil dla każdego typu etykiet). Profile zapisujesz i wczytujesz z menu **Narzędzia → Profile** lub ze strony WWW; nazwa profilu może mieć do **16 znaków**. W profilu **nie są zapisywane**: adres IP (IPv4/IPv6), kalibracja czujnika zatrzymania etykiety oraz dane zdalnego hosta i portu dla połączeń raw TCP.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'PM65 obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense** (automatyczne rozpoznawanie języka), **Fingerprint (FP)**, **Direct Protocol (DP)**, **IPL**, **ZSim** (symulacja **ZPL-II** i nowszych), **DPL** (Datamax), **Smart Printing (C#)** oraz **bezpośredni druk plików PDF**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL, a do projektowania własnych etykiet z poziomu drukarki — Fingerprint. Język zmienisz ze strony WWW (**Configure → System Settings → General → Command Language**) lub w menu głównym (**Ustawienia → System Settings → General → Command Language**); po zmianie uruchom drukarkę ponownie. Domyślnym ustawieniem jest Autosense.' },
        { type: 'p', text: 'Możliwości drukarki rozszerzają narzędzia Honeywell — m.in. **PrintSet 5** do konfiguracji i wgrywania zasobów oraz **Operational Intelligence** do zdalnego zarządzania flotą i optymalizacji druku.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru nośnika',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy drukującej wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie nośnika**. Przed czyszczeniem **odłącz drukarkę od zasilania** i odczekaj, aż głowica i silnik ostygną.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz pokrywę nośnika;',
          'wyjmij nośnik i taśmę (jeśli są założone);',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę, unieś głowicę i odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz; osad z wałka dociskowego lub listwy odrywania usuń patyczkiem z alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem nośnik i taśmę, zamknij pokrywę, podłącz zasilanie i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Górna i dolna prowadnica nośnika są przezroczyste, by światło czujnika przechodziło przez przerwy i znaczniki — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju, przecierając miękką, niestrzępiącą się szmatką z alkoholem izopropylowym. Alkohol izopropylowy jest łatwopalny — używaj go ostrożnie. Nigdy nie usuwaj przyklejonych etykiet ostrymi narzędziami — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, nośnika i taśmy, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę: wyłącz drukarkę i odłącz zasilanie, otwórz pokrywę, wyjmij nośnik i taśmę, unieś głowicę dźwignią. Odłącz **magnetyczne ramię dociskowe** od mocowania głowicy i przy wyjmowaniu głowicy **odłącz od niej dwa kable**. Nową głowicę montujesz w odwrotnej kolejności — najpierw podłącz oba kable, wsuń mocowanie tak, by metalowe ramiona objęły drążek ramienia dociskowego, ponownie zamocuj ramię magnetyczne i opuść głowicę dźwignią.' },
        { type: 'p', text: 'Drukarka pozwala także wymienić **wałek dociskowy (platen roller)**: po podniesieniu głowicy obróć zatrzask wałka w prawo, wysuń stary wałek, wsuń nowy i zablokuj zatrzask obrotem w lewo. Przed każdą wymianą części serwisowych zawsze odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Konserwacja i czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Regularnie utrzymuj drukarkę w czystości — czyste wnętrze i obudowa ograniczają przedostawanie się kurzu do mechanizmu. Czyścić można głowicę, wałek dociskowy, prowadnice nośnika, tor nośnika oraz obudowę.' },
        { type: 'list', items: [
          'przed czyszczeniem zawsze odłącz przewód zasilający;',
          'nigdy nie spryskuj drukarki wodą i chroń ją przed wilgocią; w środowisku przemysłowym przy myciu pomieszczenia wodą z węża wynieś drukarkę lub starannie ją osłoń;',
          'do obudowy używaj miękkiej szmatki zwilżonej wodą lub łagodnym detergentem;',
          'stosuj wyłącznie zalecane środki czyszczące;',
          'nigdy nie wprowadzaj do drukarki ostrych ani spiczastych przedmiotów.',
        ] },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub nośnik; **Ribbon Low** — średnica taśmy spadła poniżej progu, wymień rolkę;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted** — opuść głowicę; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik;',
          '**Clean Printhead / Replace Printhead / Faulty Dot** — osiągnięto próg licznika (odometru): wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź czułość nośnika, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Wydruk ciemniejszy po jednej stronie popraw, wyważając głowicę. Ciemne smugi wzdłuż toru nośnika lub białe pionowe linie świadczą o zabrudzonej albo zużytej głowicy — wyczyść ją lub wymień. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę.' },
        { type: 'p', text: 'Marszczenie taśmy popraw, regulując **napięcie taśmy** listwą napinającą (śruba w prawo obniża listwę i zmniejsza napięcie, w lewo podnosi i zwiększa), prowadnicę krawędziową oraz docisk i wyważenie głowicy. Rwanie taśmy zwykle wynika z błędnego założenia — przeładuj ją prawidłowo.' },
      ],
    },
    {
      title: 'Powiadomienia konserwacyjne i statystyki',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **powiadomienia konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami. Progi i treść powiadomień ustawisz na stronie WWW w **Configure → System Settings → Maintenance Alerts**, a sposób powiadamiania w **System Settings → General → Alert Notification Method** (domyślnie SNMP + e-mail). Wśród progów są m.in. liczniki głowicy, **Clean Printhead**, **Replace Printhead**, liczba uszkodzonych punktów oraz minimalna średnica taśmy (Ribbon Low Diameter).' },
        { type: 'p', text: 'Na stronie WWW, w zakładce **System Information**, znajdziesz przydatne dane i statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, konfigurację i numery seryjne, stan pamięci flash i RAM, informacje o głowicy i taśmie, interfejsach sieciowych (MAC, TCP/IP, Bluetooth, 802.11) oraz o zainstalowanych czcionkach, kodach kreskowych i obrazach. Osobno dostępny jest **licznik (odometr)**, który pokazuje zużycie głowicy względem progów alertów — dzięki niemu zaplanujesz czyszczenie i wymianę głowicy, zanim spadnie jakość druku.' },
      ],
    },
    {
      title: 'Ruchomy sprzęg anteny RFID (tylko PM65)',
      blocks: [
        { type: 'p', text: 'PM65 wyposażono w **ruchomy sprzęg anteny RFID**, pozwalający dopasować położenie anteny do szerokości nośnika RFID i pozycji wkładki UHF. Dla nośnika szerszego niż 4 cale przesuń antenę tak, by wkładka UHF znalazła się naprzeciw anteny.' },
        { type: 'p', text: 'Sprzęg ma trzy położenia: skrajne lewe (domyślne), środkowe i skrajne prawe. Dla etykiet do 2,5 cala stosuj położenie lewe, do 4 cali — lewe lub środkowe, a do 6 cali — lewe, środkowe lub prawe. Aby przesunąć sprzęg, wyjmij wałek dociskowy, chwyć złącze sprzęgu i ustaw je w wymaganym położeniu, po czym załóż wałek z powrotem. Ustawienia RFID konfigurujesz w **Ustawienia → Drukowanie → RFID** lub kreatorem **Kreatory → Kalibracja → RFID**.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) i ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę, otwórz pokrywę nośnika i unieś głowicę dźwignią; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny (w modelu ikonowym — gdy świecą ostatnie dwie diody). Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz ze strony WWW, programem PrintSet 5, przez Operational Intelligence lub najprościej z **pamięci USB**.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB:' },
        { type: 'list', ordered: true, items: [
          'skopiuj plik aktualizacji do **katalogu głównego** pamięci USB (najlepiej, by nie było tam innych plików);',
          'wyłącz drukarkę;',
          'włóż pamięć do portu USB host;',
          'uruchom drukarkę ponownie — pojawi się komunikat o trwającej aktualizacji (może potrwać kilka minut);',
          'po zakończeniu wyjmij pamięć USB.',
        ] },
        { type: 'p', text: 'Podczas aktualizacji **nie wysyłaj danych do drukarki ani jej nie wyłączaj**. Po zakończeniu zaleca się przywrócić ustawienia domyślne i ponownie skalibrować czujniki nośnika.' },
      ],
    },
  ],
}
