import type { PolishManual } from '@/data/manuals'

export const honeywellPd45sPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze półprzemysłowej drukarki etykiet Honeywell PD45S po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, regulację głowicy, ustawienia druku i sieci, po konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PD45S to **półprzemysłowa** drukarka etykiet drukująca **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy). Seria obejmuje dwa warianty panelu: **PD45S0C** z kolorowym **dotykowym ekranem LCD 3,5"** i pełną nawigacją oraz **PD45S0F** z prostszym ekranem **LCD i fizycznymi przyciskami nawigacyjnymi**. Każda drukarka ma zintegrowane **USB**, **RS-232** i **Ethernet**; moduł **Wi-Fi** jest opcjonalny.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu i upewnij się, że włącznik z tyłu jest w pozycji wyłączonej. Aby uruchomić drukarkę:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'przełącz włącznik zasilania w pozycję włączoną;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator startowy**;',
          'wykonaj kroki kreatora startowego — ustawisz w nim podstawowe parametry pracy drukarki.',
        ] },
        { type: 'p', text: 'Kreator startowy pojawia się przy pierwszym włączeniu oraz po każdym przywróceniu ustawień fabrycznych. Po jego zakończeniu drukarka przechodzi w tryb gotowości (Ready), w którym masz dostęp do menu głównego i możesz wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Panel przedni i ekran dotykowy (PD45S0C oraz PD45S0F)',
      blocks: [
        { type: 'p', text: 'Na panelu przednim znajdują się: ekran, wskaźnik gotowości do pracy (Ready-to-Work), przycisk **Print/Feed** oraz — w wariancie PD45S0F — przyciski nawigacyjne. Model **PD45S0C** ma kolorowy **dotykowy ekran LCD 3,5"**, którym sterujesz drukarką bezpośrednio dotykiem. Model **PD45S0F** ma prostszy ekran **LCD**, a po menu poruszasz się **przyciskami nawigacyjnymi**.' },
        { type: 'p', text: 'Po zakończeniu startu pojawia się **ekran gotowości** (Ready). Domyślnie widać na nim aktywny język drukarki, a na PD45S0F dodatkowo adres IP (oraz datę i godzinę, jeśli zainstalowano zegar czasu rzeczywistego). Zawartość ekranu można dostosować, łącznie z obrazem tła.' },
        { type: 'p', text: 'Pasek stanu u góry ekranu zawiera ikony: **informacje o drukarce** (po dotknięciu pokazuje podstawowe dane) oraz **stan komunikacji** (miga, gdy przez połączenie przewodowe przepływają dane). Ikona stanu **Wi-Fi** pojawia się wyłącznie po zainstalowaniu opcjonalnego modułu bezprzewodowego.' },
      ],
    },
    {
      title: 'Menu główne i nawigacja',
      blocks: [
        { type: 'p', text: 'Na ekranie gotowości dotknij (lub na PD45S0F naciśnij) ikonę **Menu główne**. Menu dzieli się na cztery sekcje:' },
        { type: 'list', items: [
          '**Programy (Programs)** — lista programów zainstalowanych w drukarce; sekcja widoczna tylko wtedy, gdy językiem drukarki jest Fingerprint lub Direct Protocol;',
          '**Ustawienia (Settings)** — przegląd i zmiana wszystkich parametrów drukarki;',
          '**Narzędzia (Tools)** — wydruk etykiet testowych, obsługa pamięci USB, przywracanie ustawień fabrycznych oraz zapis i wczytywanie profili;',
          '**Kreatory (Wizards)** — pomocnicy do konfiguracji druku i komunikacji oraz do kalibracji czujników mediów.',
        ] },
        { type: 'p', text: 'Do poruszania się służą przyciski paska stanu: powrót do menu głównego, cofnięcie o jeden poziom, powrót na ekran gotowości oraz przewijanie opcji w obrębie menu. Drukarka **nie drukuje** w czasie, gdy wyświetlone jest menu główne — aby wznowić druk, wróć na ekran gotowości. Jeśli utworzysz skróty menu, miejsce menu głównego zajmie menu **Quick Choices** (Szybki wybór).' },
      ],
    },
    {
      title: 'Przycisk Print/Feed',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print/Feed** służy do wysuwania mediów, wstrzymywania zadań, kalibracji i druku testowego. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'podczas startu — naciśnięcie wchodzi w tryb kalibracji, a przy podniesionej głowicy uruchamia przywracanie ustawień domyślnych;',
          'na ekranie gotowości — krótkie naciśnięcie wysuwa medium; **przytrzymanie** uruchamia kalibrację czujników mediów; jeśli włączono funkcję ponownego druku, naciśnięcie powtarza ostatnie zadanie;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'w stanie błędu — naciśnięcie wysuwa medium.',
        ] },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'PD45S drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — zarówno samoprzylepnych z podkładem, jak i bez kleju, z przerwami albo z **czarnym znacznikiem**. Sposób zakładania zależy od trybu pracy i zainstalowanych opcji. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'zdejmij dźwignię uchwytu rolki, nałóż rolkę na piastę podającą i dosuń ją do wewnętrznej ściany drukarki;',
          'załóż z powrotem dźwignię w pozycji pionowej i dokręć śrubę, aby zablokować rolkę na piaście;',
          'obróć **dźwignię podnoszenia głowicy** w lewo, by unieść głowicę i ramię przednie;',
          'przeprowadź medium przez mechanizm druku i pod ramieniem przednim;',
          'dopasuj **prowadnice mediów** oraz prowadnicę napinającą (dancer) do szerokości materiału;',
          'obróć dźwignię głowicy w prawo, by zamknąć głowicę i opuścić ramię przednie aż do zatrzaśnięcia;',
          'naciśnij Print/Feed, aby wysunąć medium, i zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Prowadnica mediów przy głowicy ułatwia podawanie — na czas zakładania warto odsunąć ją maksymalnie w prawo, a po wprowadzeniu materiału dosunąć do jego krawędzi. Drukarka obsługuje też **media składane (fanfold)** podawane od tyłu lub od spodu; przed ich założeniem nałóż pusty rdzeń na piastę nawijającą i ustaw dźwignię podającą w pozycji pionowej, dokręcając śrubę.' },
      ],
    },
    {
      title: 'Tryby wydawania etykiet: odrywanie, odklejanie z nawijaniem, obcinanie',
      blocks: [
        { type: 'p', text: 'PD45S obsługuje kilka trybów wydawania etykiet, zależnie od zainstalowanych modułów:' },
        { type: 'list', items: [
          '**odrywanie (tear-off)** — wydruki odrywasz ręcznie z przodu drukarki na listwie odrywania; tryb przeznaczony dla mediów z perforacją;',
          '**odklejanie i nawijanie (peel and rewind)** — moduł odklejający oddziela etykietę od podkładu, a podkład jest nawijany na piastę nawijającą; po założeniu mediów wybierz w **Menu główne → Ustawienia → Drukowanie (Printing) → Media → Tryb druku (Printing Mode)** opcję **Rewind**;',
          '**obcinanie (cutter)** — z zainstalowanym obcinaczem każda etykieta jest automatycznie odcinana po wydruku; medium prowadzi się przez płytę i mechanizm obcinacza.',
        ] },
        { type: 'p', text: 'Uwaga: listwa odrywania ma **ostre krawędzie** — trzymaj z dala palce i inne części ciała. Przy otwartej pokrywie odsłonięte są ruchome elementy; przed pracą zamknij pokrywę. W trybie nawijania zaleca się stosowanie etykiet **bez perforacji**.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet oraz ustawienia drukarki na pracę termotransferową. PD45S obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia taśmy, połóż ją na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę i ramię przednie;',
          'nałóż **pusty rdzeń odbiorczy** na piastę nawijającą taśmę;',
          'załóż rolkę taśmy zgodnie z kierunkiem nawinięcia — taśmę ink-out nawiniętą zgodnie z ruchem wskazówek zegara, taśmę ink-in przeciwnie do ruchu wskazówek zegara;',
          'przeprowadź taśmę przez mechanizm druku i wyciągnij około **20 cm (8 cali)** początku taśmy;',
          'przymocuj początek taśmy do rdzenia odbiorczego;',
          'obracaj piastę nawijającą w lewo, aż taśma się napręży i będzie przechodzić bez fałd;',
          'zamknij pokrywę mediów.',
        ] },
        { type: 'p', text: 'Zużytą taśmę zdejmuj przy każdej zmianie rolki: **przerwij lub urwij** ją przed piastą odbiorczą i zsuń z piasty. Nie przecinaj taśmy na samej piaście — grozi to jej uszkodzeniem. Jeśli taśma jest węższa niż głowica, zdejmuj jej resztki także przy każdej zmianie mediów.' },
      ],
    },
    {
      title: 'Metoda druku: termotransferowa a termiczna',
      blocks: [
        { type: 'p', text: 'PD45S może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku: druk z taśmą jest trwalszy i odporniejszy, druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny i z czasem może blaknąć.' },
        { type: 'p', text: 'Metodę druku ustawisz najprościej kreatorem **Kreatory → Drukowanie → Media Setup**, wybierając **DT** lub **TTR** — w tym samym kreatorze ustawisz też szerokość, długość i margines (X-margin) etykiety oraz prędkość druku. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Regulacja docisku głowicy i pozycji dźwigni',
      blocks: [
        { type: 'p', text: 'Docisk głowicy (printhead pressure) reguluje się **pokrętłem palcem**, gdy zmieniasz grubość mediów lub gdy taśma zaczyna się marszczyć. Obrót w prawo zwiększa docisk (ciemniejszy wydruk), obrót w lewo zmniejsza go (jaśniejszy wydruk). Nie ustawiaj większego docisku niż to konieczne — przyspiesza on zużycie głowicy. Na dźwigni najwyższy znacznik oznacza docisk lekki, środkowy — średni, najniższy — wysoki.' },
        { type: 'p', text: 'Drukarka jest fabrycznie wyregulowana na media o pełnej szerokości. Dla mediów węższych niż **102 mm (4 cale)** wyreguluj **pozycję dźwigni dociskowych (toggle)**, aby docisk rozkładał się równomiernie. Niewyważona głowica powoduje jaśniejszy wydruk po jednej stronie, ślizganie się mediów i taśmy, marszczenie taśmy albo przesuwanie się materiału na boki.' },
        { type: 'list', items: [
          'cienkie media lub druk termiczny (DT) — zmniejsz docisk obu dźwigni;',
          'grube media — zwiększ docisk obu dźwigni;',
          'jaśniejszy druk po lewej lub prawej stronie — zwiększ docisk po odpowiedniej stronie;',
          'materiał ucieka w bok — zwiększ docisk po stronie, w którą medium się przesuwa, lub zmniejsz po przeciwnej;',
          'media bardzo wąskie (poniżej 2 cali) — przesuń lewą dźwignię na środek materiału i zmniejsz docisk prawej.',
        ] },
      ],
    },
    {
      title: 'Kalibracja mediów i ekranu dotykowego',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet i taśmy skalibruj czujniki mediów, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print/Feed** na ekranie gotowości; pełną kalibrację uruchomisz kreatorem **Menu główne → Kreatory → Kalibracja → Media**, który skalibruje wszystkie czujniki i pokaże bieżące ustawienia druku.' },
        { type: 'p', text: 'Czujnik przerwy między etykietami jest **transmisyjny** (prześwietla medium), a czujnik czarnego znacznika — **odblaskowy** (wykrywa znaczniki na materiale ciągłym). Pozycję czujnika ustawia się **pokrętłem regulacji** w torze mediów — wbudowana niebieska dioda LED świeci na tyle mocno, że pomaga ustalić właściwe położenie czujnika względem przerw lub znaczników. Jeśli zainstalowano opcjonalny czujnik pobrania etykiety (podajnik), skalibruj go kreatorem **Kreatory → Kalibracja → Czujnik pobrania etykiety (Label Taken Sensor)** — najlepiej przy każdej zmianie mediów lub po przeniesieniu drukarki.' },
        { type: 'p', text: 'Ekran dotykowy (PD45S0C) skalibrujesz kreatorem **Kreatory → Kalibracja → Ekran (Screen)** lub ze strony WWW drukarki (**Services → Screen Calibration**). Typowa kalibracja to **pięć dotknięć** — po jednym w każdym rogu i jedno na środku ekranu; po jej zakończeniu drukarka wraca na ekran gotowości.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość i zaczernienie',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w **Ustawienia → Drukowanie (Printing)** lub kreatorem **Media Setup**. Najważniejsze to: typ mediów i metoda druku (DT/TTR), szerokość i długość etykiety, margines (**X-margin**), prędkość druku oraz **kontrast/zaczernienie (darkness)**. PD45S drukuje z prędkością do około **250 mm/s**, a dysponuje **256 MB RAM**, co pozwala obsługiwać złożone etykiety i wgrane zasoby.' },
        { type: 'p', text: 'Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku i marszczenie taśmy; dobierz wartość do mediów i taśmy. Jeśli treść wydruku jest ściśnięta, zmniejsz prędkość druku lub popraw docisk głowicy. Najlepsze ustawienie jakości szybko wskaże kreator **Kreatory → Drukowanie → Jakość druku (Print Quality)**, który drukuje serię etykiet do porównania.' },
        { type: 'p', text: 'Po założeniu mediów warto wydrukować **etykietę testową**: **Menu główne → Narzędzia → Etykiety testowe (Test Labels)**. Potwierdza ona poprawność instalacji i jakość druku; jeśli jakość jest niska, użyj kreatora jakości druku.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PD45S ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**, a opcjonalnie **Wi-Fi**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — najpierw zainstaluj sterownik (InterDriver), a po wyświetleniu monitu połącz port urządzenia USB z tyłu drukarki z komputerem; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator (dla USB nie trzeba ustawiać żadnych parametrów);',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera; pozwala wysyłać polecenia bezpośrednio przez połączenie terminalowe;',
          '**sieciowo** — przez Ethernet lub Wi-Fi (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Z przodu i z tyłu drukarki znajdują się też porty **USB host** — podłączysz do nich pamięć USB (jedna partycja, **FAT16/FAT32**), klawiaturę (do wysyłania poleceń Fingerprint) lub skaner kodów współpracujący z aplikacją Smart Printing. Pamięć USB służy do wgrywania czcionek, obrazów, aplikacji, formatów i plików konfiguracyjnych, a także do aktualizacji firmware.' },
      ],
    },
    {
      title: 'Sieć: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki (port 10/100 Mbps). Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja (Communications) → Ethernet → IPv4/IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP/SFTP, stronę WWW, połączenie terminalowe (Telnet / Raw TCP) oraz obsługę alertów.' },
        { type: 'p', text: 'Połączenie **Wi-Fi** wymaga zainstalowanego opcjonalnego modułu bezprzewodowego. Skonfigurujesz je z menu głównego (**Ustawienia → Komunikacja → Wireless 802.11**), kreatorem Wireless 802.11 albo ze strony WWW drukarki; w sieci bez DHCP ustawienia Wi-Fi trzeba wprowadzić programem **PrintSet 5** przez USB. W sieciach z zabezpieczeniami możesz wgrać **certyfikaty uwierzytelniające** przez połączenie FTP/SFTP do katalogu /home/user/certificates/public, a następnie zainstalować je poleceniem certinstall.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz adres IP drukarki, kliknij Login i zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass** — po zalogowaniu zmień je).' },
      ],
    },
    {
      title: 'Sterowniki i narzędzia konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Do poprawnej pracy z komputerem zainstaluj **sterownik Honeywell dla Windows** (InterDriver), pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany do prawidłowej współpracy z aplikacjami.' },
        { type: 'p', text: 'Drukarkę skonfigurujesz na cztery sposoby: ze **strony WWW**, z **menu głównego** na ekranie, aplikacją **PrintSet 5** albo **komendami programistycznymi** wysyłanymi przez połączenie szeregowe lub sieciowe (np. polecenie SETUP w języku Fingerprint — wymaga zalogowania jako itadmin). Strukturę menu (Printing, System Settings, Alert, Communications) zachowano taką samą niezależnie od interfejsu. Dostęp do menu na panelu można ograniczyć kodem PIN albo całkowicie zablokować w **Ustawienia → System Settings → Display → Menu Access**.' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla każdego typu etykiet). Profile zapisujesz i wczytujesz z menu **Narzędzia → Profile** lub ze strony WWW. Adres IP, kalibracja czujnika zatrzymania etykiety oraz dane zdalnego hosta nie są zapisywane w profilu. Dla najczęściej używanych profili, programów, etykiet testowych i kreatorów możesz utworzyć **skróty menu (Quick Choices)**.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'PD45S obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense** (automatyczne rozpoznawanie języka etykieta po etykiecie), **Fingerprint (FP)**, **Direct Protocol (DP)**, **IPL**, **ZSim** (symulacja **ZPL-II** i nowszych), **DPL** (Datamax) oraz **Smart Printing (C#)**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL; przy pracy z oprogramowaniem do kodów kreskowych wygodny jest Direct Protocol; a do projektowania własnych etykiet i aplikacji z poziomu drukarki — Fingerprint. Język zmienisz ze strony WWW (**System Settings → General → Command Language**) lub w menu głównym (**Ustawienia → System Settings → General**); po zmianie uruchom drukarkę ponownie. Domyślnym ustawieniem jest Autosense, który nie obsługuje strumienia IPL.' },
        { type: 'p', text: 'Możliwości drukarki rozszerzają narzędzia Honeywell — m.in. **PrintSet 5** do konfiguracji i wgrywania zasobów oraz aplikacje pobierane z portalu producenta; część z nich może wymagać licencji.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru mediów',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy drukującej wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Przed czyszczeniem **odłącz drukarkę od zasilania** i odczekaj, aż głowica i silnik ostygną.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz pokrywę mediów;',
          'wyjmij medium i taśmę (jeśli są założone);',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz; uporczywy osad z wałka dociskowego lub listwy odrywania usuń patyczkiem z alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem medium i taśmę, zamknij pokrywę, podłącz zasilanie i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Górny i dolny element czujnika przedniego oraz prowadnice mediów są przezroczyste, by światło czujnika przechodziło przez przerwy i znaczniki — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju, przecierając je miękką, niestrzępiącą się szmatką z alkoholem izopropylowym. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, mediów i taśmy, energii dostarczanej do głowicy, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę: wyłącz drukarkę i odłącz zasilanie, otwórz pokrywę, wyjmij medium i taśmę, unieś głowicę dźwignią, opuść czujnik przedni i przesuń dźwignie dociskowe (toggle) na środek głowicy. Następnie odkręć śrubokrętem lewą i prawą śrubę, ostrożnie wysuń głowicę ku sobie i **odłącz od niej dwa kable**. Nową głowicę montujesz w odwrotnej kolejności — najpierw podłącz dwa kable, wsuń głowicę w mocowanie, zamknij dźwignię, dokręć śruby i zatrzaśnij moduł czujnika przedniego.' },
        { type: 'p', text: 'Drukarka pozwala także wymienić **wałek dociskowy (platen roller)**: po podniesieniu głowicy wyciągnij pokrętło czujnika przedniego na zewnątrz i opuść czujnik ku przodowi, obróć zatrzask wałka w prawo, by go odłączyć, wysuń stary wałek, wsuń nowy i zablokuj zatrzask obrotem w lewo. Przed każdą wymianą części serwisowych zawsze odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Konserwacja i czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Regularnie utrzymuj drukarkę w czystości — czyste wnętrze i obudowa ograniczają przedostawanie się kurzu do mechanizmu. Czyścić można głowicę, wałek dociskowy, prowadnice mediów, tor mediów oraz obudowę.' },
        { type: 'list', items: [
          'przed czyszczeniem zawsze odłącz przewód zasilający;',
          'nigdy nie spryskuj drukarki wodą i chroń ją przed wilgocią; w środowisku przemysłowym przy myciu pomieszczenia wodą z węża wynieś drukarkę lub starannie ją osłoń;',
          'do obudowy używaj miękkiej szmatki zwilżonej wodą lub łagodnym detergentem;',
          'stosuj wyłącznie zalecane środki czyszczące — alkohol izopropylowy jest łatwopalny, używaj go ostrożnie;',
          'nigdy nie wprowadzaj do drukarki ostrych ani spiczastych przedmiotów.',
        ] },
        { type: 'p', text: 'Górny i dolny element czujnika przedniego są przezroczyste; unieś ramię czujnika i przetrzyj obie powierzchnie miękką szmatką z alkoholem izopropylowym, a po wyschnięciu zamknij czujnik. Tor mediów wyczyść, wsuwając między prowadnice kartę czyszczącą lub miękką szmatkę z alkoholem i odczekując około 30 sekund.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami — progi i sposób powiadamiania ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a metodę powiadomień w **System Settings → General → Alert Notification Method**.' },
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium; **Ribbon Low** — średnica taśmy spadła poniżej ustawionego progu, wymień rolkę;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted / Front Arm Lifted** — opuść głowicę lub ramię przednie; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik;',
          '**Faulty Dot / Replace Printhead / Clean Printhead** — osiągnięto próg licznika (odometru): wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Ciemne smugi wzdłuż toru mediów lub białe pionowe linie świadczą o zabrudzonej albo zużytej głowicy — wyczyść ją lub wymień. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Marszczenie taśmy ogranicz, zmniejszając zaczernienie, dopasowując prowadnicę krawędziową i docisk głowicy oraz regulując **napięcie taśmy** (śruba listwy napinającej: w prawo obniża listwę i zmniejsza napięcie, w lewo podnosi i zwiększa).' },
      ],
    },
    {
      title: 'Bieżące dane i statystyki drukarki',
      blocks: [
        { type: 'p', text: 'Na stronie WWW, w zakładce **System Information**, znajdziesz przydatne dane i statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, konfigurację i numery seryjne, stan pamięci flash i RAM, informacje o głowicy i taśmie, urządzeniach we/wy, adresie MAC i ustawieniach TCP/IP oraz o zainstalowanych czcionkach, kodach kreskowych i obrazach.' },
        { type: 'p', text: 'Osobno dostępny jest **licznik (odometr)** — pokazuje zużycie głowicy i porównuje bieżące wartości z progami alertów konserwacyjnych. Dzięki niemu zaplanujesz czyszczenie i wymianę głowicy, zanim spadnie jakość druku.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) oraz ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę, otwórz pokrywę mediów i unieś głowicę dźwignią; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny — wszystkie ustawienia zostaną przywrócone. Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz najprościej z **pamięci USB**.' },
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
