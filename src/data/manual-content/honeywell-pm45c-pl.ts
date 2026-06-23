import type { PolishManual } from '@/data/manuals'

export const honeywellPm45cPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze kompaktowej przemysłowej drukarki etykiet Honeywell PM45c po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, metody druku i kalibrację, po konfigurację sieci, języki ZPL-II, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PM45c to **kompaktowa** wersja przemysłowej drukarki etykiet 4" Honeywell, zbudowana na platformie Printer Edge w **metalowej obudowie**. Skrócona ścieżka nośnika i mniejsza obudowa zajmują mniej miejsca na stanowisku przy zachowaniu wytrzymałości serii PM45. Drukarka pracuje **termotransferowo (z taśmą)** oraz **termicznie bezpośrednio (bez taśmy)** i ma zintegrowane interfejsy **USB**, **RS-232** i **Ethernet** (Wi-Fi i Bluetooth opcjonalnie).' },
        { type: 'p', text: 'PM45c jest dostępna w dwóch wersjach panelu: z **dotykowym ekranem LCD 3,5"** lub z prostym panelem **ikon LED** (bez ekranu). W odróżnieniu od pełnowymiarowych modeli serii PM, kompaktowa PM45c **nie ma portu USB na panelu przednim** — port USB host znajduje się wyłącznie z tyłu drukarki.' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu i sprawdź, czy włącznik z tyłu jest wyłączony. Aby ją uruchomić:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'przełącz włącznik zasilania w pozycję włączoną;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator startowy**;',
          'na modelu z ekranem dotykowym wykonaj kroki kreatora — ustawisz m.in. datę, godzinę, podstawowe parametry pracy oraz sposób dostępu do menu.',
        ] },
        { type: 'p', text: 'Kreator startowy pojawia się przy pierwszym włączeniu oraz po każdym przywróceniu ustawień fabrycznych. Po jego zakończeniu drukarka przechodzi w tryb gotowości, w którym masz dostęp do menu głównego i możesz wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Wersja z wyświetlaczem ma **dotykowy ekran 3,5"**, który reaguje na palec, dłoń w rękawiczce i rysik. Na panelu znajduje się też przycisk **Print** (druk/wysuw) oraz wskaźnik gotowości do pracy. Po starcie pojawia się **ekran gotowości (Ready)** — domyślnie na pasku informacyjnym u dołu widać język drukarki i adres IP, a z zainstalowanym zegarem czasu rzeczywistego (RTC) także datę i godzinę.' },
        { type: 'p', text: 'Pasek stanu u góry ekranu zawiera ikony: **menu główne**, **komunikacja**, **informacje o drukarce**, a przy zainstalowanym module bezprzewodowym także **Wi-Fi** i **Bluetooth**. Dotknięcie ikony menu otwiera **menu główne** z sekcjami: Programy, Ustawienia, Narzędzia (Tools), Kreatory (Wizards) i Ustawienia druku (Print Settings). Gdy menu główne jest otwarte, drukarka nie drukuje — wróć na ekran gotowości, by wznowić pracę.' },
        { type: 'p', text: 'Wersja **z panelem ikon LED** nie ma ekranu — jej stan sygnalizują podświetlane ikony: komunikacja, Wi-Fi, Bluetooth, brak/błąd nośnika, problem konfiguracji, taśma, przegrzanie i podniesienie głowicy, pauza oraz konserwacja. Tę wersję konfiguruje się programem **PrintSet 5** z komputera.' },
      ],
    },
    {
      title: 'Przycisk Print',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print** służy do wysuwania mediów, wstrzymywania zadań, kalibracji i druku testowego. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa medium; przy włączonej funkcji powtórnego druku ponawia ostatnie zadanie; **przytrzymanie** uruchamia kalibrację czujników mediów;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'podczas startu — przytrzymanie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych.',
        ] },
        { type: 'p', text: 'Na wersji z ikonami LED etykietę testową wydrukujesz, przytrzymując przycisk **dłużej niż 2 sekundy**, gdy przy starcie podświetlone są dwie ostatnie ikony (przegrzanie głowicy i konserwacja).' },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'PM45c drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych — zarówno samoprzylepnych z podkładem, jak i bez kleju, z przerwami albo z **czarnym znacznikiem**. Kompaktowa obudowa mieści mniejszą rolkę niż modele pełnowymiarowe, dlatego rolkę zawsze dosuwaj do wewnętrznej ściany drukarki. Aby założyć rolkę do druku z **odrywaniem (tear-off)**:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'obróć **dźwignię podnoszenia głowicy** w lewo, by unieść głowicę;',
          'nałóż rolkę na piastę podającą (media supply hub) i dosuń ją do wewnętrznej ściany drukarki;',
          'przeprowadź medium przez mechanizm druku;',
          'dopasuj **prowadnice mediów** oraz prowadnicę napinającą (dancer) do szerokości materiału i wyrównaj docisk głowicy;',
          'wyreguluj czujnik przerwy i czarnego znacznika pokrętłem regulacji tak, by niebieska dioda czujnika znalazła się na środku materiału;',
          'obróć dźwignię głowicy w prawo, by ją zamknąć — po zablokowaniu głowicy medium wysunie się automatycznie;',
          'zamknij pokrywę mediów.',
        ] },
        { type: 'p', text: 'Drukarka obsługuje też **media składane (fanfold)** podawane od tyłu lub od spodu — wsuń materiał przez szczelinę z tyłu (lub w spodzie) i poprowadź go przez mechanizm druku, a po zamknięciu głowicy drukarka wykona działanie zdefiniowane w ustawieniu Head Down Action (kalibracja Smart).' },
      ],
    },
    {
      title: 'Tryby wydawania: odrywanie, odklejanie, obcinanie',
      blocks: [
        { type: 'p', text: 'PM45c obsługuje kilka trybów wydawania etykiet, zależnie od zainstalowanych modułów:' },
        { type: 'list', items: [
          '**odrywanie (tear-off)** — wydruki odrywasz ręcznie z przodu drukarki na listwie odrywania; tryb przeznaczony dla mediów z perforacją;',
          '**odklejanie z podajnikiem etykiet (label dispenser)** — moduł z czujnikiem pobrania oddziela etykietę od podkładu i wstrzymuje druk do czasu jej zdjęcia; podkład prowadzi się przez spód mechanizmu lub wokół wewnętrznej nawijarki (jeśli jest zainstalowana). Siłę odklejania ustawisz w **Ustawienia → Drukowanie → Media → Peel Strength**;',
          '**obcinanie (cutter)** — z zainstalowanym obcinaczem każda etykieta jest automatycznie odcinana po wydruku; medium prowadzi się przez szczelinę obcinacza. Po założeniu mediów ustaw **Ustawienia → Drukowanie → Cutter → Cutter Control → Automatic** oraz wartości Label Top Adjust i Label Rest Adjust.',
        ] },
        { type: 'p', text: 'Uwaga: listwa odrywania ma **ostre krawędzie** — trzymaj z dala palce. Obcinaczem nie tnij materiałów samoprzylepnych przez warstwę kleju — klej osadza się na ostrzu i może unieruchomić lub uszkodzić mechanizm; przecinaj wyłącznie podkład.' },
      ],
    },
    {
      title: 'Taśma termotransferowa: rodzaje i kierunek nawinięcia',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak taśmy (ribbonu) dopasowanej do używanych etykiet. PM45c obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**. Stosuj taśmę **szerszą niż etykiety**, aby nośnik termotransferowy nie stykał się bezpośrednio z głowicą i jej nie ścierał.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia, połóż taśmę na kartce i zarysuj ją ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
      ],
    },
    {
      title: 'Ładowanie taśmy (ribbon)',
      blocks: [
        { type: 'p', text: 'Aby założyć taśmę termotransferową:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę mediów;',
          'obróć dźwignię podnoszenia głowicy w lewo, by ją unieść;',
          'nasuń rolkę taśmy na piastę podającą taśmę (ribbon supply hub) zgodnie z kierunkiem nawinięcia — dla taśmy ink-out nawiniętej zgodnie z ruchem wskazówek zegara, dla ink-in przeciwnie;',
          'przeprowadź taśmę przez mechanizm druku i wyciągnij około **20 cm (8 cali)** jej początku;',
          'obracaj **rdzeń zwijalny piasty nawijającej (collapsible core)** w lewo, aż taśma się napręży i będzie przechodzić bez fałd;',
          'obróć dźwignię głowicy w prawo, by zablokować głowicę;',
          'przed zwijaniem upewnij się, że pokrętło piasty nawijającej jest do końca wciśnięte — ułatwi to późniejsze zdjęcie zużytej taśmy.',
        ] },
        { type: 'p', text: 'Po założeniu taśmy ustaw drukarkę na tryb termotransferowy (patrz kolejna sekcja).' },
      ],
    },
    {
      title: 'Wyjmowanie zużytej taśmy',
      blocks: [
        { type: 'p', text: 'Zużytą taśmę zdejmuj przy każdej zmianie rolki, a także przy każdej zmianie mediów, jeśli taśma jest węższa od głowicy:' },
        { type: 'list', ordered: true, items: [
          '**przerwij lub urwij** taśmę przed piastą nawijającą — nie przecinaj jej na samej piaście, bo grozi to jej uszkodzeniem;',
          'pociągnij pokrętło zwalniające taśmę (ribbon release knob) i zsuń zużytą taśmę z piasty nawijającej.',
        ] },
        { type: 'p', text: 'Nie ciągnij pokrętła zwalniającego, jeśli nie chcesz zdejmować taśmy — utrudni to późniejsze jej wyjęcie, gdy piasta będzie pełna.' },
      ],
    },
    {
      title: 'Tryb termotransferowy a termiczny',
      blocks: [
        { type: 'p', text: 'PM45c może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości: druk z taśmą jest trwalszy, druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny.' },
        { type: 'p', text: 'Metodę druku ustawisz w kreatorze **Media Setup** (Kreatory → Drukowanie → Media Setup) lub w **Ustawienia → Drukowanie → Media**, wybierając **DT** albo **TTR**. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Etykieta testowa i kalibracja mediów',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet i taśmy skalibruj czujniki mediów, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print** na ekranie gotowości; pełną kalibrację uruchomisz kreatorem **Kreatory → Kalibracja → Media**, który skalibruje wszystkie czujniki i pokaże bieżące ustawienia druku.' },
        { type: 'p', text: 'Czujnik przerwy między etykietami jest **transmisyjny** (prześwietla medium), a czujnik czarnego znacznika — **odblaskowy**; pozycję czujnika ustawia się pokrętłem regulacji (w prawo — do wewnątrz drukarki, w lewo — na zewnątrz). Niebieska dioda czujnika ma znaleźć się na środku materiału. Jeśli zainstalowano podajnik etykiet lub czujnik pobrania, skalibruj go kreatorem **Kreatory → Kalibracja → Label Taken Sensor** — najlepiej przy każdej zmianie mediów lub przeniesieniu drukarki.' },
        { type: 'p', text: 'Po założeniu mediów wydrukuj **etykietę testową**: **Menu główne → Narzędzia → Test Labels**, a następnie wybierz rodzaj etykiety. Potwierdza ona poprawność instalacji i jakość druku. Jeśli jakość jest niska, uruchom kreator **Kreatory → Drukowanie → Print Quality**.' },
      ],
    },
    {
      title: 'Kalibracja ekranu dotykowego',
      blocks: [
        { type: 'p', text: 'Ekran dotykowy PM45c skalibrujesz na dwa sposoby: kreatorem na drukarce (**Menu główne → Kreatory → Kalibracja → Screen**) albo ze strony WWW drukarki (**Services → Screen Calibration**), po czym wykonasz sekwencję dotknięć na panelu.' },
        { type: 'p', text: 'Typowa kalibracja to **pięć dotknięć** — po jednym w każdym rogu i jedno na środku ekranu. Dotykaj pojawiającego się kwadratu, aż drukarka wyemituje sygnał dźwiękowy; po zakończeniu ekran wraca na widok gotowości.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość i zaczernienie',
      blocks: [
        { type: 'p', text: 'PM45c drukuje z prędkością do **14 cali/s przy 203 dpi**, **12 cali/s przy 300 dpi**, **10 cali/s przy 406 dpi** oraz **6 cali/s przy 600 dpi** — rozdzielczość dobierasz do wymaganej szczegółowości kodów i grafik. Parametry druku zmienisz w **Ustawienia → Drukowanie** lub kreatorem **Media Setup**: typ mediów i metoda (DT/TTR), szerokość i długość etykiety, margines (**X-start**), wartości Label Reset i Label Top Adjust oraz prędkość i **kontrast/zaczernienie (darkness)**.' },
        { type: 'p', text: 'Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku i marszczenie taśmy; dobierz wartość do mediów i taśmy. Jeśli treść jest ściśnięta, zmniejsz prędkość druku lub popraw docisk głowicy. Najlepsze ustawienie jakości szybko wskaże kreator **Print Quality**, który drukuje serię etykiet do porównania.' },
      ],
    },
    {
      title: 'Regulacja docisku i wyważenia głowicy',
      blocks: [
        { type: 'p', text: 'Docisk głowicy (printhead pressure) reguluje się **śrubą** śrubokrętem płaskim, gdy zmieniasz grubość mediów lub gdy taśma zaczyna się marszczyć. Obrót w prawo zwiększa docisk (ciemniejszy wydruk), obrót w lewo zmniejsza go (jaśniejszy wydruk). Nie ustawiaj większego docisku niż to konieczne — przyspiesza on zużycie głowicy.' },
        { type: 'p', text: 'Drukarka jest fabrycznie ustawiona na media pełnej szerokości. Dla materiałów węższych niż **102 mm (4 cale)** wyreguluj **wyważenie głowicy (printhead balance)**: unieś głowicę, naciśnij szarą część ramienia wyważającego i przesuń je na zewnątrz dla szerszych mediów lub do wewnątrz dla węższych. Niewyważona głowica powoduje jaśniejszy wydruk po jednej stronie, ślizganie się mediów i taśmy, marszczenie taśmy albo przesuwanie się materiału na boki.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PM45c ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**, a opcjonalnie **Wi-Fi**, **Bluetooth** oraz modem komórkowy. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — połącz port urządzenia USB z tyłu drukarki z komputerem kablem USB typu A; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator (Windows wykryje drukarkę automatycznie);',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera;',
          '**Bluetooth** — po włączeniu modułu sparuj drukarkę z komputerem lub urządzeniem mobilnym (na ekranie pojawi się klucz do potwierdzenia);',
          '**sieciowo** — przez Ethernet lub Wi-Fi (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Z tyłu PM45c znajduje się **port USB host** (kompaktowa obudowa nie ma portu USB z przodu) — podłączysz do niego pamięć USB (jedna partycja, **FAT16/FAT32**), klawiaturę (do wysyłania poleceń Fingerprint) lub skaner kodów współpracujący z aplikacją Smart Printing.' },
      ],
    },
    {
      title: 'Sieć: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki. Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja → Ethernet → IPv4/IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP/SFTP, stronę WWW, obsługę alertów oraz połączenie terminalowe (Telnet).' },
        { type: 'p', text: 'Połączenie **Wi-Fi** wymaga zainstalowanego opcjonalnego modułu Wi-Fi+Bluetooth. Skonfigurujesz je z menu głównego (**Ustawienia → Komunikacja → Wireless 802.11**), kreatorem **Wireless 802.1x** albo ze strony WWW drukarki; w sieci bez DHCP ustawienia Wi-Fi trzeba wprowadzić programem **PrintSet 5** przez USB. W sieciach z zabezpieczeniami możesz wgrać **certyfikaty uwierzytelniające** przez połączenie FTP/SFTP do katalogu /home/user/certificates/public, a następnie zainstalować je skryptem certinstall.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz **https://** i adres IP drukarki, kliknij Login i zaloguj się (domyślnie użytkownik **admin**, hasło **pass** — po zalogowaniu zmień je). Strona WWW domyślnie wymaga protokołu HTTPS. Część ustawień sieciowych wymaga zalogowania jako **itadmin** (hasło **pass**).' },
      ],
    },
    {
      title: 'Sterowniki i narzędzia konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Sterownik drukarki jest częścią systemu Windows — po podłączeniu przez USB system wykrywa PM45c automatycznie; zadbaj jednak, by Windows był aktualny. Drukarkę skonfigurujesz na pięć sposobów: ze **strony WWW**, z **menu głównego** na ekranie (wersja z wyświetlaczem), aplikacją **PrintSet 5**, aplikacją mobilną **Print Set MC** albo **komendami programistycznymi** wysyłanymi przez połączenie szeregowe lub sieciowe (np. polecenie SETUP w języku Fingerprint — wymaga zalogowania jako itadmin).' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla każdego typu etykiet). Profile zapisujesz i wczytujesz z menu **Narzędzia → Profile** lub ze strony WWW; możesz też utworzyć skróty (Quick Choices), które zastępują menu główne. Adres IP, kalibracja czujnika zatrzymania etykiety oraz dane zdalnego hosta nie są zapisywane w profilu.' },
        { type: 'p', text: 'Czcionki, obrazy, aplikacje, formaty i formularze WWW wgrasz ze strony WWW (zakładka Manage) lub z pamięci USB, układając pliki w odpowiednich katalogach (m.in. /apps, /fonts, /forms, /images). Możliwości drukarki rozszerza też platforma **Honeywell Operational Intelligence** do zdalnego zarządzania flotą.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL-II',
      blocks: [
        { type: 'p', text: 'PM45c obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Fingerprint (FP)**, **Direct Protocol (DP)**, **IPL**, **ZSim** (symulacja **ZPL-II** i nowszych), **DPL** (Datamax), **Smart Printing (C#)** oraz **bezpośredni druk plików PDF**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL, dla plików IPL — IPL (obsługiwany przy 200, 300 i 406 dpi), a do projektowania własnych etykiet z poziomu drukarki — Fingerprint. Język zmienisz ze strony WWW (**Configure → System Settings → General → Command Language**) lub w menu głównym (**Ustawienia → System Settings → General**); po zmianie uruchom drukarkę ponownie.' },
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
        { type: 'p', text: 'Górna i dolna prowadnica mediów są **przezroczyste**, by światło czujnika przechodziło przez przerwy i znaczniki — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju, przecierając kartą czyszczącą lub miękką szmatką z alkoholem izopropylowym. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, mediów i taśmy, ilości energii podawanej na głowicę, prędkości druku oraz temperatury otoczenia. Firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę: wyłącz drukarkę i odłącz zasilanie, otwórz pokrywę, wyjmij medium i taśmę, unieś głowicę dźwignią. Następnie **odepnij magnetyczne ramię dociskowe** od mocowania głowicy i **odłącz dwa kable** od głowicy, wysuwając ją z drukarki. Nową głowicę montujesz w odwrotnej kolejności — najpierw podłącz oba kable, wsuń mocowanie tak, by metalowe ramiona głowicy objęły drążek ramienia magnetycznego, przypnij ramię, załóż media i opuść głowicę dźwignią.' },
        { type: 'p', text: 'Drukarka pozwala także wymienić **wałek dociskowy (platen roller)**: po podniesieniu głowicy obróć zatrzask wałka w prawo i wysuń stary wałek, a nowy wsuń i zablokuj zatrzaskiem obróconym w lewo. Przed każdą wymianą części serwisowych zawsze odłącz przewód zasilający.' },
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
        { type: 'p', text: 'Do czyszczenia toru mediów wsuń kartę czyszczącą lub miękką szmatkę z alkoholem izopropylowym między obie przezroczyste prowadnice, odczekaj około 30 sekund, a po wyschnięciu załóż z powrotem medium i taśmę.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami — progi ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a metodę powiadomień w **System Settings → General → Alert Notification Method**.' },
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium; **Ribbon Low** — średnica taśmy spadła poniżej progu, wymień rolkę;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted** — opuść głowicę; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie obu kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik;',
          '**Clean Printhead / Replace Printhead / Faulty Dot** — osiągnięto próg licznika (odometru): wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Ciemne smugi wzdłuż toru mediów lub białe pionowe linie świadczą o zabrudzonej albo zużytej głowicy — wyczyść ją lub wymień. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Marszczenie lub rwanie taśmy popraw, regulując docisk i wyważenie głowicy, prowadnicę krawędziową oraz **napięcie taśmy** (śruba listwy napinającej: w prawo cofa listwę i zmniejsza napięcie, w lewo wysuwa ją i zwiększa napięcie).' },
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
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) i ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę, otwórz pokrywę mediów i unieś głowicę dźwignią; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny (na wersji z ekranem) lub gdy świecą dwie ostatnie ikony (na wersji LED). Na wersji LED reset sprzętowy przywraca tylko część ustawień — pełne przywrócenie wykonaj programem PrintSet 5. Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell (ścieżka: Software → Printers → Industrial → PM65 PM45 PM45C → Current → Firmware). Firmware zaktualizujesz ze **strony WWW**, z **pamięci USB**, programem **PrintSet 5** albo przez platformę Operational Intelligence.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB:' },
        { type: 'list', ordered: true, items: [
          'skopiuj plik aktualizacji do **katalogu głównego** pamięci USB (najlepiej, by nie było tam innych plików);',
          'wyłącz drukarkę;',
          'włóż pamięć do tylnego portu USB host;',
          'uruchom drukarkę ponownie — pojawi się komunikat o trwającej aktualizacji (może potrwać kilka minut);',
          'po zakończeniu wyjmij pamięć USB.',
        ] },
        { type: 'p', text: 'Podczas aktualizacji **nie wysyłaj danych do drukarki ani jej nie wyłączaj**. Po zakończeniu zaleca się przywrócić ustawienia domyślne i ponownie skalibrować czujniki mediów.' },
      ],
    },
  ],
}
