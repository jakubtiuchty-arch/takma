import type { PolishManual } from '@/data/manuals'

export const honeywellPc45tPl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze biurkowej drukarki etykiet Honeywell PC45t po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, ustawienia druku i sieci, po konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PC45t to kompaktowa drukarka **termotransferowa** (drukuje z użyciem taśmy/ribbonu), z pełnodotykowym ekranem **LCD 3,5"** i prędkością do **8 cali/s** (203 dpi) lub 6 cali/s (300 dpi). Przed pierwszym uruchomieniem ustaw drukarkę na stabilnym blacie i upewnij się, że włącznik zasilania jest w pozycji wyłączonej.' },
        { type: 'p', text: 'Aby uruchomić drukarkę:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'przełącz włącznik zasilania w pozycję włączoną;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator startowy**;',
          'wykonaj kroki kreatora na ekranie dotykowym — m.in. ustawisz datę, godzinę i sposób dostępu do menu.',
        ] },
        { type: 'p', text: 'Podczas startu wybierasz **metodę dostępu do menu**. Domyślnie wszystkie menu są dostępne; możesz włączyć dostęp za **kodem PIN** albo całkowicie zablokować menu, jeśli chcesz chronić ustawienia przed zmianą.' },
      ],
    },
    {
      title: 'Ekran dotykowy 3,5" i panel',
      blocks: [
        { type: 'p', text: 'Pełnodotykowy ekran **LCD 3,5"** obsługuje dotyk palcem, w rękawiczce oraz rysikiem. Po zakończeniu startu pojawia się **ekran gotowości** (Ready), na którym pasek informacyjny u dołu domyślnie pokazuje aktywny język drukarki i adres IP — można go dostosować.' },
        { type: 'p', text: 'Pasek stanu u góry ekranu zawiera ikony: **Menu główne**, informacje o komunikacji, informacje o drukarce, stan **Wi-Fi** oraz **Bluetooth**, a także przycisk powrotu. Stuknięcie ikony Menu głównego otwiera sekcje: Programy, Ustawienia, Narzędzia, Kreatory i Ustawienia druku.' },
        { type: 'p', text: 'Drukarka ma też **wygaszacz (Sleep Timer)** — po 15 minutach bezczynności wygasza ekran i przechodzi w tryb oszczędzania energii, a budzi się automatycznie po odebraniu zadania. Zaleca się pozostawienie tego ustawienia domyślnego; wyłączenie wygaszania może skrócić żywotność ekranu i nie jest objęte gwarancją.' },
      ],
    },
    {
      title: 'Przycisk Print/Feed',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print/Feed** służy do wysuwania mediów, wstrzymywania zadań, kalibracji i testowego druku. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa medium; **przytrzymanie** uruchamia kalibrację czujników mediów;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'podczas startu — **przytrzymanie** wchodzi w tryb kalibracji lub (przy podniesionej głowicy) przywraca ustawienia domyślne.',
        ] },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'PC45t drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych. Aby założyć rolkę do druku z odrywaniem (tear-off):' },
        { type: 'list', ordered: true, items: [
          'pociągnij zatrzaski ku przodowi drukarki i unieś pokrywę;',
          'podnieś dźwignię blokującą prowadnice rolki;',
          'rozsuń uchwyty rolki i włóż rolkę mediów między nie;',
          'dosuń uchwyty tak, by przylegały do boków rolki, i opuść dźwignię, blokując uchwyty;',
          'jeśli używasz mediów z wycięciami lub **czarnym znacznikiem**, ustaw czujnik etykiet tak, by wycięcia/znaczniki przechodziły nad nim;',
          'przeprowadź medium **przez prowadnice mediów** i wysuń przed front drukarki; szerokość prowadnic dopasuj, przesuwając je do krawędzi materiału;',
          'zamknij pokrywę, aż zatrzaśnie się na miejscu.',
        ] },
        { type: 'p', text: 'Po pociągnięciu mediów do przodu sprawdź, czy rolka swobodnie się obraca i nie opiera o podstawę. Dużych rolek (do **8 cali** średnicy) możesz używać z zewnątrz — wprowadź materiał przez **tylny otwór podawania mediów** i poprowadź go tak jak rolkę wewnętrzną.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet. PC45t obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia taśmy, połóż ją na kartce i zarysuj ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'pociągnij zatrzaski ku przodowi i otwórz pokrywę drukarki;',
          'umieść rolkę taśmy między **tylnymi uchwytami taśmy**; taśma powinna schodzić z rolki we właściwym kierunku zależnie od typu nawinięcia;',
          'załóż **pusty rdzeń odbiorczy** między przednimi uchwytami rdzenia;',
          'przymocuj początek taśmy do rdzenia odbiorczego;',
          'obróć **pokrętło naciągu**, aby zlikwidować luz taśmy;',
          'ustaw **przełącznik wyboru taśmy** w pozycji odpowiadającej nawinięciu — Ink-in lub Ink-out;',
          'zamknij pokrywę, aż zatrzaśnie się na miejscu.',
        ] },
        { type: 'p', text: 'Do węższych taśm lub rdzeni bez wycięć służy opcjonalny **adapter rdzenia taśmy** (0,5 cala), montowany zarówno na rdzeniu podającym, jak i odbiorczym. Po założeniu taśmy ustaw drukarkę na tryb termotransferowy (patrz kolejna sekcja).' },
      ],
    },
    {
      title: 'Tryb termotransferowy a termiczny',
      blocks: [
        { type: 'p', text: 'PC45t może drukować w trybie termotransferowym (z taśmą, oznaczany **TTR**) albo termicznym bezpośrednim (**DT**, bez taśmy). Tryb dobierasz do rodzaju etykiet i wymaganej trwałości wydruku.' },
        { type: 'p', text: 'Aby skonfigurować druk z taśmą, w **Menu głównym** wybierz **Ustawienia → Drukowanie → Media → Metoda druku → Taśma (TTR)** i zapisz zmianę. Jeśli drukarka jest ustawiona na druk termiczny, a w środku znajduje się taśma, pojawi się komunikat **„Ribbon Installed"** — wówczas wyjmij taśmę albo przełącz drukarkę w tryb termotransferowy.' },
      ],
    },
    {
      title: 'Kalibracja mediów',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet i taśmy skalibruj czujniki mediów, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print/Feed** na ekranie gotowości.' },
        { type: 'p', text: 'Pełną kalibrację uruchomisz też z poziomu kreatorów: **Menu główne → Kreatory → Kalibracja → Media**. Kreator skalibruje wszystkie czujniki mediów i pokaże bieżące ustawienia druku. Dostępne są również kreatory kalibracji czujnika pobrania etykiety (przy podajniku etykiet) oraz ekranu dotykowego.' },
        { type: 'p', text: 'Po założeniu mediów warto wydrukować **etykietę testową**: **Menu główne → Narzędzia → Etykiety testowe**. Potwierdza ona poprawność instalacji i podaje ważne informacje o drukarce. Jeśli jakość jest niska, użyj kreatora **Kreatory → Drukowanie → Jakość druku**.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość, zaczernienie, cięcie',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w **Ustawienia → Drukowanie**. Najważniejsze to: typ mediów i metoda druku (DT/TTR), szerokość i długość etykiety, margines (X-start), prędkość druku oraz **kontrast/zaczernienie**. Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku; dobierz wartość do mediów i taśmy.' },
        { type: 'p', text: 'Drukarka obsługuje trzy tryby wydawania etykiet:' },
        { type: 'list', items: [
          '**odrywanie (tear-off)** — etykiety odrywasz ręcznie z przodu drukarki;',
          '**obcinanie (cut-off)** — z zainstalowanym **obcinaczem** każda etykieta jest automatycznie odcinana po wydruku; w opcjach Cutter Control wybierz tryb **Automatic** i zapisz;',
          '**podawanie z podajnika** — z czujnikiem pobrania etykiety drukarka czeka na zabranie wydruku.',
        ] },
        { type: 'p', text: 'Uwaga: obcinacza nie wolno używać do cięcia warstw klejących ani miękkich materiałów, które mogą przykleić się do ostrzy i unieruchomić mechanizm.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PC45t ma wbudowane interfejsy **USB** i **Ethernet**, a opcjonalnie **Bluetooth**, port szeregowy RS-232 i **Wi-Fi**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — połącz port urządzenia USB z tyłu drukarki z komputerem; Windows wykryje drukarkę, ale do poprawnej pracy zainstaluj sterownik;',
          '**szeregowo** — kablem RS-232 (DB9–DB9) między gniazdem drukarki a portem COM komputera;',
          '**Bluetooth** — włącz Bluetooth, wyszukaj drukarkę na komputerze lub urządzeniu mobilnym i potwierdź żądanie parowania na drukarce oraz na urządzeniu.',
        ] },
        { type: 'p', text: 'Z przodu i z tyłu drukarki znajdują się też porty **USB host** — podłączysz do nich pamięć USB (jedna partycja, FAT16/FAT32), klawiaturę lub skaner kodów.' },
      ],
    },
    {
      title: 'Sieć: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki. Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez DHCP ustaw statyczny adres ręcznie w **Ustawienia → Komunikacja → Ethernet → IPv4/IPv6**.' },
        { type: 'p', text: 'Połączenie **Wi-Fi** wymaga zainstalowanego modułu bezprzewodowego. Skonfigurujesz je z Menu głównego (**Ustawienia → Komunikacja → Wireless 802.11**), kreatorem **Wireless 802.1x** lub z poziomu strony WWW drukarki. W sieciach z zabezpieczeniami możesz wgrać **certyfikaty uwierzytelniające** przez połączenie FTP/SFTP.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się też wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz `https://` i adres IP drukarki, a następnie zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass** — po zalogowaniu zmień je).' },
      ],
    },
    {
      title: 'Sterowniki i narzędzia konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Do poprawnej pracy z komputerem zainstaluj **sterownik Honeywell dla Windows** (InterDriver), pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi automatycznie wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany.' },
        { type: 'p', text: 'Drukarkę skonfigurujesz na kilka sposobów: ze strony WWW, z Menu głównego na ekranie, aplikacją **PrintSet 5** (komputer) lub **Print Set MC** (aplikacja mobilna na iOS/Android), a także **komendami programistycznymi** przez połączenie szeregowe lub sieciowe.' },
        { type: 'p', text: 'Aktualne ustawienia można zapisać jako **profil drukarki** i wczytywać w dowolnej chwili — przydaje się to przy częstej zmianie mediów (osobny profil dla każdego typu etykiet). Profile zapisujesz i wczytujesz ze strony WWW lub z menu **Narzędzia → Profile**.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL',
      blocks: [
        { type: 'p', text: 'PC45t obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są m.in.: **Fingerprint (FP)**, **Direct Protocol (DP)**, **ESim** (symulacja Eltron/EPL), **IPL**, **ZSim** (symulacja **ZPL**, ZPL II i nowsze), **DPL** (Datamax), **Smart Printing (C#)** oraz bezpośredni druk plików **PDF**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL**, ustaw język na **ZSim**; dla plików EPL wybierz ESim, a dla Datamax — DPL. Język zmienisz ze strony WWW (**System Settings → General → Command Language**) lub w Menu głównym (**Ustawienia → System Settings → General → Command Language**); po zmianie uruchom drukarkę ponownie.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru mediów',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy drukującej wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Przed czyszczeniem **odłącz drukarkę od zasilania** i odczekaj, aż głowica ostygnie.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania, otwórz pokrywę;',
          'wyjmij medium i taśmę (jeśli są założone);',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz; uporczywy osad z wałka lub listwy odrywania usuń patyczkiem z alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem medium i taśmę, zamknij pokrywę, podłącz zasilanie i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Górna i dolna prowadnica mediów są przezroczyste, by światło czujników przechodziło przez przerwy i znaczniki — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju, przecierając kartą lub miękką szmatką z alkoholem izopropylowym. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem — tempo zależy od rodzaju wydruków, mediów i taśmy, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'p', text: 'Aby wymienić głowicę: wyłącz drukarkę i odłącz zasilanie, unieś pokrywę, wyjmij medium i taśmę, rozsuń zatrzaski głowicy, aż wysunie się do przodu, a następnie ostrożnie wysuń głowicę z mechanizmu (pozostaje ona połączona kablem taśmowym, który należy odłączyć). Drukarka pozwala także na wymianę **wałka dociskowego (platen roller)**.' },
        { type: 'p', text: 'Przed montażem części serwisowych zawsze odłącz przewód zasilający od gniazdka. Nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Konserwacja i czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Regularnie utrzymuj drukarkę w czystości — czyste wnętrze i obudowa ograniczają przedostawanie się kurzu do mechanizmu. Czyścić można głowicę, wałek dociskowy, prowadnice mediów, tor mediów oraz obudowę.' },
        { type: 'list', items: [
          'przed czyszczeniem zawsze odłącz przewód zasilający;',
          'nigdy nie spryskuj drukarki wodą i chroń ją przed wilgocią przy sprzątaniu pomieszczenia;',
          'do obudowy używaj miękkiej szmatki zwilżonej wodą lub łagodnym detergentem;',
          'stosuj wyłącznie zalecane środki czyszczące — alkohol izopropylowy jest łatwopalny, używaj go ostrożnie;',
          'ostrza obcinacza czyść kilkoma warstwami szmatki z alkoholem izopropylowym, uważając na krawędzie tnące.',
        ] },
        { type: 'p', text: 'Wybrane wersje PC45t mają obudowę odporną na środki dezynfekujące (**disinfectant-ready**) — przeznaczoną m.in. do zastosowań medycznych; obowiązują dla nich osobne wytyczne czyszczenia.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oba kanały — progi i sposób powiadamiania ustawisz na stronie WWW w **System Settings → Maintenance Alerts**.' },
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub medium;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted** — opuść głowicę; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabla;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Clean Printhead / Replace Printhead** — osiągnięto próg konserwacji: wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości mediów, zwiększ kontrast lub docisk głowicy. Gdy nic się nie drukuje na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Taśma marszczy się lub rwie — przeładuj ją prawidłowo i dopasuj prowadnicę krawędziową.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Z **Menu głównego**: **Narzędzia → Restore Defaults** — możesz zachować lub skasować ustawienia sieci, pliki użytkownika i ustawienia systemowe, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz, które grupy ustawień przywrócić (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę i otwórz pokrywę mediów, włącz ją **przytrzymując przycisk Feed** i zwolnij go, gdy pasek stanu jest prawie pełny — wszystkie ustawienia zostaną przywrócone.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz ze **strony WWW** drukarki, z **pamięci USB**, aplikacją **PrintSet 5** lub przez **Honeywell Operational Intelligence**.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB: skopiuj plik aktualizacji do katalogu głównego pamięci (najlepiej, by nie było tam innych plików), wyłącz drukarkę, włóż pamięć do portu USB host i uruchom drukarkę ponownie — pojawi się komunikat o trwającej aktualizacji (może potrwać kilka minut), po czym wyjmij pamięć.' },
        { type: 'p', text: 'Podczas aktualizacji **nie wysyłaj danych do drukarki ani jej nie wyłączaj**. Po zakończeniu zaleca się przywrócić ustawienia domyślne i ponownie skalibrować czujniki mediów.' },
      ],
    },
  ],
}
