import type { PolishManual } from '@/data/manuals'

export const honeywellPm45Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze przemysłowej drukarki etykiet Honeywell PM45 po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, kalibrację i ustawienia druku, sieć, RFID i języki drukarki, po konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PM45 to **przemysłowa** drukarka etykiet 4" w **metalowej obudowie**, przeznaczona do dużych nakładów i pracy ciągłej. Drukuje **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy), z prędkością do **350 mm/s (14 cali/s)** dla rozdzielczości 203 dpi. Dostępne są wersje **203, 300, 406 i 600 dpi**, a interfejs występuje w dwóch odmianach: z **kolorowym ekranem dotykowym 3,5"** lub w wariancie ikonowym ze wskaźnikami **LED** (bez ekranu). Kompaktowy model nosi oznaczenie **PM45c**.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu. Aby ją uruchomić:' },
        { type: 'list', ordered: true, items: [
          'podłącz jeden koniec przewodu zasilającego z tyłu drukarki, a drugi do gniazdka sieciowego **z uziemieniem**;',
          'naciśnij włącznik z tyłu, by włączyć drukarkę;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator startowy**;',
          'na modelu z ekranem dotykowym przejdź kolejne kroki kreatora — ustawisz m.in. datę, godzinę i sposób dostępu do menu.',
        ] },
        { type: 'p', text: 'W trakcie kreatora startowego wybierasz **metodę dostępu do menu** — domyślnie wszystkie menu są dostępne; opcją Enable by PIN można ograniczyć dostęp kodem PIN lub wyłączyć go całkowicie. Kreator pojawia się przy pierwszym włączeniu oraz po każdym przywróceniu ustawień fabrycznych. Po jego zakończeniu drukarka przechodzi w tryb gotowości (Ready).' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Panel przedni z ekranem ma **dotykowy wyświetlacz 3,5"**, który reaguje na dotyk palcem, w rękawiczce oraz rysikiem. Po zakończeniu startu pojawia się **ekran gotowości (Ready)**; na pasku na dole domyślnie widać aktywny język drukarki i adres IP, a po zainstalowaniu zegara czasu rzeczywistego (RTC) także datę i godzinę. Tło ekranu można dostosować.' },
        { type: 'p', text: 'Na pasku stanu u góry ekranu znajdują się ikony: **menu główne**, **komunikacja**, **informacje o drukarce**, a po zainstalowaniu modułu bezprzewodowego również **Wi-Fi** i **Bluetooth**. Dotknięcie ikony menu otwiera **menu główne** z sekcjami: Programy, Ustawienia, Narzędzia (Tools), Kreatory (Wizards) i Ustawienia druku (Print Settings). Drukarka **nie drukuje, gdy wyświetlone jest menu główne** — wróć na ekran gotowości, by wznowić druk.' },
        { type: 'p', text: 'Model ikonowy (LED) nie ma ekranu — jego stanem sterują **diody LED** odpowiadające za komunikację, błędy mediów i taśmy, podniesioną lub przegrzaną głowicę, pauzę oraz alert konserwacyjny. Konfigurację tego modelu i wydruk etykiety testowej wykonuje się programem **PrintSet 5** z komputera.' },
      ],
    },
    {
      title: 'Przycisk Print',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print** służy do wysuwania mediów, wstrzymywania zadań, kalibracji i druku testowego. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa medium; jeśli włączona jest funkcja ponownego druku, naciśnięcie ponownie drukuje ostatnie zadanie; **przytrzymanie** uruchamia kalibrację czujników mediów;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'podczas startu — przytrzymanie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych.',
        ] },
        { type: 'p', text: 'Na modelu ikonowym etykietę testową wydrukujesz tak: włącz drukarkę i poczekaj, aż w sekwencji startowej zaświecą się dwie ostatnie diody (Printhead Hot i Maintenance), a następnie przytrzymaj przycisk Print przez ponad **2 sekundy**.' },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'PM45 drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — zarówno samoprzylepnych z podkładem, jak i bez kleju, z przerwami albo z **czarnym znacznikiem**. Sposób zakładania zależy od trybu pracy i zainstalowanych opcji. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'obróć **dźwignię podnoszenia głowicy** w lewo, by unieść głowicę;',
          'nałóż rolkę mediów na piastę podającą i dosuń ją do wewnętrznej ściany drukarki;',
          'przeprowadź medium przez mechanizm druku;',
          'dopasuj **prowadnice mediów** oraz prowadnicę napinającą (dancer), by utrzymać materiał na miejscu, i wyważ docisk głowicy;',
          'ustaw czujnik przerwy i czarnego znacznika pokrętłem tak, by **niebieska dioda czujnika** znalazła się na środku materiału;',
          'obróć dźwignię głowicy w prawo, by zamknąć głowicę — medium zostanie automatycznie wysunięte.',
        ] },
        { type: 'p', text: 'Drukarka obsługuje też **media składane (fanfold)** oraz rolki podawane z zewnętrznego źródła — materiał wprowadza się przez szczelinę z tyłu lub od spodu drukarki i prowadzi przez mechanizm druku. Po zamknięciu głowicy drukarka wykona czynność zdefiniowaną ustawieniem Head Down Action (inteligentna kalibracja).' },
      ],
    },
    {
      title: 'Tryby wydawania etykiet: odrywanie, odklejanie, nawijanie, obcinanie',
      blocks: [
        { type: 'p', text: 'PM45 obsługuje kilka trybów wydawania etykiet, zależnie od zainstalowanych modułów:' },
        { type: 'list', items: [
          '**odrywanie (tear-off)** — wydruki odrywasz ręcznie z przodu drukarki na listwie odrywania; tryb przeznaczony dla mediów z perforacją;',
          '**odklejanie (label dispenser)** — moduł odklejający z **czujnikiem pobrania etykiety** oddziela etykietę od podkładu i czeka, aż ją zdejmiesz, zanim wydrukuje kolejną; podkład prowadzi się przez szczelinę między modułem a wałkiem i wyprowadza spodem albo nawija na **wewnętrzną nawijarkę** (jeśli zainstalowana); siłę odklejania ustawisz w **Ustawienia → Drukowanie → Media → Peel Strength**;',
          '**obcinanie (cutter)** — z zainstalowanym obcinaczem każda etykieta jest odcinana zaraz po wydruku; medium prowadzi się przez szczelinę obcinacza, a w **Ustawienia → Drukowanie → Cutter** wybierasz tryb Automatic; opcjonalna tacka obcinacza mieści do **20 etykiet**.',
        ] },
        { type: 'p', text: 'Uwaga: listwa odrywania ma **ostre krawędzie** — trzymaj z dala palce. Obcinaczem nie tnij materiałów samoprzylepnych przez warstwę kleju — klej osadza się na ostrzu i może unieruchomić lub uszkodzić mechanizm; przy etykietach z klejem przecinaj wyłącznie sam podkład.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet. PM45 obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**. Stosuj taśmę **szerszą niż etykiety** — chroni to powierzchnię głowicy przed bezpośrednim kontaktem z materiałem.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia taśmy, połóż ją na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'obróć dźwignię podnoszenia głowicy w lewo, by unieść głowicę;',
          'nasuń rolkę taśmy na piastę podającą zgodnie z kierunkiem nawinięcia — dla taśmy ink-out nawiniętej zgodnie z ruchem wskazówek zegara, dla ink-in przeciwnie;',
          'przeprowadź taśmę przez mechanizm druku i wyciągnij około **20 cm (8 cali)** początku taśmy;',
          'obracaj **rozprężny rdzeń odbiorczy** w lewo, aż taśma się napręży i będzie przechodzić bez fałd;',
          'obróć dźwignię głowicy w prawo, by zablokować głowicę.',
        ] },
        { type: 'p', text: 'Przed nawinięciem upewnij się, że pokrętło na piaście odbiorczej jest **wciśnięte do końca** — dzięki temu pełną taśmę łatwo później zsuniesz. Zużytą taśmę zdejmuj przy każdej zmianie rolki: **przerwij lub urwij** ją przed piastą odbiorczą, pociągnij pokrętło zwalniające i zsuń taśmę. Nie przecinaj taśmy na samej piaście — grozi to jej uszkodzeniem. Po założeniu taśmy ustaw drukarkę na tryb termotransferowy.' },
      ],
    },
    {
      title: 'Tryb termotransferowy a termiczny',
      blocks: [
        { type: 'p', text: 'PM45 może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku: druk z taśmą jest trwalszy i odporniejszy, druk termiczny bezpośredni nie wymaga taśmy, ale wydruk z czasem blaknie.' },
        { type: 'p', text: 'Metodę druku ustawisz kreatorem **Kreatory → Drukowanie → Media Setup** (wybór DT lub TTR razem z szerokością, długością i marginesem etykiety oraz prędkością) lub w menu ustawień druku. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Etykieta testowa',
      blocks: [
        { type: 'p', text: 'Po założeniu mediów i taśmy wydrukuj **etykietę testową** — potwierdza poprawność instalacji i pokazuje ważne dane o drukarce. Na modelu z ekranem dotykowym: na ekranie gotowości otwórz **menu główne → Narzędzia → Test Labels (Etykiety testowe)**, wybierz żądaną etykietę i dotknij jej.' },
        { type: 'p', text: 'Jeśli jakość druku jest słaba, użyj kreatora **Kreatory → Drukowanie → Jakość druku (Print Quality)**, który drukuje serię etykiet do porównania i pomaga dobrać najlepsze ustawienie. Na modelu ikonowym etykietę testową drukuje się przyciskiem Print, jak opisano wcześniej.' },
      ],
    },
    {
      title: 'Kalibracja mediów i ekranu dotykowego',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet i taśmy skalibruj czujniki mediów, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print** na ekranie gotowości; pełną kalibrację uruchomisz kreatorem **Kreatory → Kalibracja → Media**, który skalibruje wszystkie czujniki i pokaże bieżące ustawienia druku.' },
        { type: 'p', text: 'Jeśli zainstalowano opcjonalny **czujnik pobrania etykiety (label taken sensor)** lub podajnik etykiet, użyj kreatora **Kreatory → Kalibracja → Label Taken Sensor** — najlepiej przy każdej zmianie mediów lub przeniesieniu drukarki do innego otoczenia.' },
        { type: 'p', text: 'Ekran dotykowy skalibrujesz kreatorem **Kreatory → Kalibracja → Ekran** lub ze strony WWW drukarki (**Services → Screen Calibration**). Po pojawieniu się kwadratu dotykaj go aż do sygnału dźwiękowego; typowa kalibracja to **pięć dotknięć** — po jednym w każdym rogu i jedno na środku ekranu. Czujnik przerwy między etykietami jest **transmisyjny** (prześwietla medium), a czujnik czarnego znacznika — **odblaskowy**; pozycję czujnika ustawia się pokrętłem regulacji, korzystając z **niebieskiej diody** czujnika.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość i zaczernienie',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w menu **Ustawienia → Drukowanie** lub kreatorem **Media Setup**. Najważniejsze to: typ mediów i metoda druku (DT/TTR), szerokość i długość etykiety, margines (**X-margin**), wartości Label Reset i Label Top Adjust, prędkość druku oraz **kontrast/zaczernienie (contrast)**.' },
        { type: 'p', text: 'Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku i marszczenie taśmy; dobierz wartość do mediów i taśmy. Jeśli wydruk jest blady, sprawdź też ustawienie jakości mediów oraz docisk głowicy. Najlepsze ustawienie szybko wskaże kreator **Print Quality**, który drukuje serię etykiet do porównania.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PM45 ma wbudowane interfejsy **USB**, **RS-232** i **Gigabit Ethernet**, a opcjonalnie moduł **Wi-Fi + Bluetooth** oraz **modem komórkowy LTE**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — połącz port urządzenia USB z tyłu drukarki z komputerem; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator; system Windows sam wykrywa drukarkę po podłączeniu;',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera;',
          '**przez Bluetooth** — na modelu z ekranem włącz Bluetooth, wyszukaj drukarkę na liście urządzeń komputera i potwierdź zgodny klucz numeryczny; na modelu ikonowym włącz tryb wykrywania, podnosząc głowicę i przytrzymując przycisk Feed dłużej niż 2 sekundy;',
          '**sieciowo** — przez Gigabit Ethernet, Wi-Fi lub LTE (patrz kolejne sekcje).',
        ] },
        { type: 'p', text: 'Drukarka ma też porty **USB host** (z tyłu, a w modelach PM45/PM65 także z przodu). Podłączysz do nich pamięć USB (jedna partycja, **FAT16/FAT32**), klawiaturę (do wysyłania poleceń Fingerprint) lub skaner kodów współpracujący z aplikacją Smart Printing; pamięcią USB można wgrywać aplikacje, czcionki, obrazy i pliki konfiguracyjne oraz wykonywać aktualizacje firmware.' },
      ],
    },
    {
      title: 'Sieć: Gigabit Ethernet, Wi-Fi i LTE',
      blocks: [
        { type: 'p', text: 'Do sieci **Gigabit Ethernet** podłącz kabel do portu z tyłu drukarki (na czas podłączania wyłącz drukarkę). Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja → Ethernet → IPv4/IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP/SFTP, stronę WWW, obsługę alertów oraz pracę z sterownikiem Honeywell dla Windows.' },
        { type: 'p', text: 'Połączenia **Wi-Fi** i **Bluetooth** wymagają zainstalowanego opcjonalnego modułu bezprzewodowego, a łączność **LTE** — opcjonalnego modemu komórkowego. Każde z tych połączeń skonfigurujesz z menu głównego (**Ustawienia → Komunikacja → Wireless 802.11 / Bluetooth / Cellular Modem**) albo ze strony WWW drukarki. W sieci Wi-Fi bez DHCP ustawienia trzeba wprowadzić programem **PrintSet 5** przez USB. W sieciach z zabezpieczeniami możesz wgrać **certyfikaty uwierzytelniające** przez połączenie FTP/SFTP i zainstalować je skryptem certinstall.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz **https://** i adres IP drukarki (domyślnie połączenie szyfrowane HTTPS), kliknij Login i zaloguj się (domyślnie użytkownik **admin**, hasło **pass** — po zalogowaniu zmień je). Można też zalogować się jako **User** bez hasła, z dostępem do ograniczonych funkcji.' },
      ],
    },
    {
      title: 'RFID UHF',
      blocks: [
        { type: 'p', text: 'PM45 z opcjonalnym **modułem RFID** drukuje i koduje etykiety z transponderami **UHF**. Etykiety RFID są nieco grubsze w miejscu wklejki, co może obniżać jakość druku — dla druku termotransferowego stosuj wówczas **wysokiej jakości taśmę barwiącą** i w miarę możliwości unikaj druku na najgrubszej części etykiety.' },
        { type: 'p', text: 'Aby uzyskać najlepsze rezultaty, uruchom kreator **Kreatory → Kalibracja → RFID** — dobierze optymalną pozycję transpondera (Tag Position) i moc wyjściową (Output Power) dla założonych mediów. W razie potrzeby skoryguj ręcznie zmienną RFID Tag Position, aby transponder znalazł się dokładnie nad anteną. Parametry RFID konfiguruje się także poleceniami w językach Fingerprint, IPL i ZSim.' },
        { type: 'p', text: 'Jeśli próbujesz zapisać transponder, a w drukarce nie ma modułu RFID, pojawi się alert **RFID Not installed** — do kodowania trzeba doposażyć drukarkę w moduł RFID.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'PM45 obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Direct Protocol (DP)**, **Fingerprint (FP)**, **IPL**, **ZSim** (symulacja **ZPL-II** i nowszych), **DPL** (Datamax), **Smart Printing (C#)** oraz bezpośredni **druk plików PDF**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL, a do projektowania własnych etykiet lub aplikacji uruchamianych na drukarce — Fingerprint. Język zmienisz ze strony WWW (**Configure → System Settings → General → Command Language**) lub w menu głównym (**Ustawienia → System Settings → General**); po zmianie uruchom drukarkę ponownie. Sekcja Programy w menu pojawia się tylko przy języku Fingerprint, Direct Protocol lub DPL.' },
        { type: 'p', text: 'Możliwości drukarki rozszerzają narzędzia Honeywell — m.in. **PrintSet 5** i **Print Set MC** do konfiguracji oraz **Operational Intelligence** do zdalnego zarządzania flotą i optymalizacji druku; część usług może wymagać licencji lub planu serwisowego.' },
      ],
    },
    {
      title: 'Konfiguracja i profile drukarki',
      blocks: [
        { type: 'p', text: 'Drukarkę skonfigurujesz na cztery sposoby: ze **strony WWW**, z **menu głównego** na ekranie dotykowym, aplikacją **PrintSet 5 / Print Set MC** albo **komendami programistycznymi** wysyłanymi przez połączenie szeregowe lub sieciowe. Do poprawnej pracy z komputerem zainstaluj **sterownik Honeywell dla Windows** — choć Windows wykrywa drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany.' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla każdego typu etykiet). Profile zapisujesz i wczytujesz z menu **Narzędzia → Profile** lub ze strony WWW; pliki konfiguracyjne można też wgrywać i eksportować przez pamięć USB. Możesz również utworzyć **skróty (Quick Choices)** zastępujące menu główne najczęściej używanymi pozycjami.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru mediów',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy drukującej wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Przed czyszczeniem **wyłącz drukarkę i odłącz ją od zasilania**, a głowicy i silnikowi pozwól ostygnąć.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz pokrywę mediów;',
          'wyjmij medium i taśmę (jeśli są założone);',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz; uporczywy osad z wałka dociskowego lub listwy odrywania usuń patyczkiem z alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem medium i taśmę, zamknij pokrywę, podłącz zasilanie i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Górna i dolna prowadnica mediów są **przezroczyste**, by światło czujnika przechodziło między nimi przez przerwy i znaczniki — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju, przecierając kartą czyszczącą lub miękką szmatką z alkoholem izopropylowym. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, mediów i taśmy, energii dostarczanej do głowicy, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę: wyłącz drukarkę i odłącz zasilanie, otwórz pokrywę, wyjmij medium i taśmę, unieś głowicę dźwignią. Odepnij **magnetyczne ramię dociskowe** od mocowania głowicy i odłącz od niej **dwa kable**, wysuwając głowicę z drukarki. Nową głowicę montujesz w odwrotnej kolejności — najpierw podłącz oba kable, wsuń mocowanie tak, by metalowe ramiona głowicy objęły belkę ramienia magnetycznego, i przypnij ramię.' },
        { type: 'p', text: 'Drukarka pozwala także wymienić **wałek dociskowy (platen roller)**: po podniesieniu głowicy obróć zatrzask wałka w prawo, wysuń stary wałek, wsuń nowy i zablokuj zatrzask obrotem w lewo. Przed każdą wymianą części serwisowych zawsze odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Regulacja docisku, wyważenia głowicy i napięcia taśmy',
      blocks: [
        { type: 'p', text: 'Drukarkę możesz wyregulować, by dopasować ją do mediów lub poprawić jakość druku. **Docisk głowicy** reguluje się śrubą, gdy zmieniasz grubość mediów, gdy wydruk jest jaśniejszy po jednej stronie albo gdy taśma zaczyna się marszczyć: obrót w prawo zwiększa docisk (ciemniejszy wydruk), w lewo zmniejsza go (jaśniejszy wydruk). Nie ustawiaj większego docisku niż to konieczne — przyspiesza on zużycie głowicy.' },
        { type: 'p', text: 'Drukarka jest fabrycznie wyważona pod **media pełnej szerokości (102 mm / 4 cale)**. Dla węższych mediów wyreguluj **wyważenie głowicy (printhead balance)** — naciśnij szarą część belki wyważającej i przesuń ją na zewnątrz dla szerszych, a do wewnątrz dla węższych mediów. Niewyważona głowica powoduje jaśniejszy wydruk po jednej stronie, ślizganie się mediów i taśmy, marszczenie taśmy albo przesuwanie się materiału na boki.' },
        { type: 'p', text: 'Jeśli taśma się marszczy, wyreguluj **listwę napinającą taśmę** dużym płaskim śrubokrętem: obrót śruby w prawo cofa listwę i zmniejsza napięcie, w lewo wysuwa ją i zwiększa napięcie.' },
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
        { type: 'p', text: 'Drukarka zawiera **baterię pastylkową, której użytkownik nie wymienia** — trzymaj urządzenie z dala od dzieci. Nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami — progi ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a metodę powiadamiania w **System Settings → General → Alert Notification Method**.' },
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium; **Ribbon Low** — średnica taśmy spadła poniżej progu, wymień rolkę;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted** — opuść głowicę; **Printhead Not Detected** — sprawdź montaż głowicy i pewność podłączenia kabla;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik;',
          '**Faulty Dot / Replace Printhead / Clean Printhead** — osiągnięto próg licznika: w zależności od komunikatu wyczyść lub wymień głowicę;',
          '**No RFID tag found** — drukarka nie wykrywa transpondera RFID.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Jaśniejszy druk po jednej stronie popraw wyważeniem głowicy. Słabe plamy na wydruku świadczą o zanieczyszczonych mediach albo niezgodnym zestawieniu taśmy z etykietami — wyczyść lub wymień media i upewnij się, że taśma i podłoże są dobrane do siebie. Marszczenie taśmy popraw, regulując docisk głowicy, wyważenie i napięcie taśmy.' },
      ],
    },
    {
      title: 'Bieżące dane i statystyki drukarki',
      blocks: [
        { type: 'p', text: 'Na stronie WWW, w zakładce **System Information**, znajdziesz przydatne dane i statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, konfigurację i numery seryjne, stan pamięci flash i RAM, informacje o głowicy i taśmie, urządzeniach we/wy, adresie MAC, ustawieniach TCP/IP, Bluetooth, 802.11 i modemie komórkowym oraz o zainstalowanych czcionkach, kodach kreskowych i obrazach.' },
        { type: 'p', text: 'Osobno dostępny jest **licznik (odometr)** — pokazuje zużycie głowicy i porównuje bieżące wartości z progami alertów konserwacyjnych. Dzięki niemu zaplanujesz czyszczenie i wymianę głowicy, zanim spadnie jakość druku.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) i ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę, otwórz pokrywę mediów i unieś głowicę dźwignią; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny (na modelu z ekranem) lub gdy świecą dwie ostatnie diody (na modelu ikonowym). Na koniec opuść głowicę i zamknij pokrywę. Na modelu ikonowym reset sprzętowy przywraca tylko część ustawień — pełne przywrócenie wykonaj programem PrintSet.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz na cztery sposoby: ze **strony WWW**, z **pamięci USB**, programem **PrintSet 5** lub przez **Operational Intelligence**.' },
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
