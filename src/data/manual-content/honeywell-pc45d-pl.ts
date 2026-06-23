import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell PC45d po polsku.
 * Praktyczne kompendium obsługi biurkowej drukarki etykiet z drukiem
 * termicznym bezpośrednim — własnym głosem, w skondensowanej formie.
 */
export const honeywellPc45dPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze biurkowej drukarki etykiet Honeywell PC45d po polsku — od pierwszego uruchomienia i podłączenia, przez ładowanie nośnika, kalibrację i ustawienia druku, po sieć, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PC45d to kompaktowa drukarka etykiet z **drukiem termicznym bezpośrednim** — obraz powstaje przez nagrzewanie termoczułego nośnika, bez taśmy barwiącej. Drukuje z prędkością do **8 cali/s przy 203 dpi** lub do **6 cali/s przy 300 dpi** i obsługuje etykiety, bilety, przywieszki oraz nośnik ciągły.' },
        { type: 'p', text: 'Aby uruchomić drukarkę:' },
        { type: 'list', ordered: true, items: [
          'upewnij się, że wyłącznik zasilania jest w pozycji wyłączonej;',
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'włącz drukarkę wyłącznikiem zasilania;',
          'poczekaj, aż pojawi się pasek postępu, a po nim **kreator pierwszego uruchomienia**;',
          'przejdź kolejne kroki na ekranie dotykowym, by skonfigurować podstawowe ustawienia.',
        ] },
        { type: 'p', text: 'W trakcie kreatora drukarka pyta o **sposób dostępu do menu**. Domyślnie wszystkie menu są otwarte; możesz wymusić **PIN** lub całkowicie zablokować dostęp do menu.' },
      ],
    },
    {
      title: 'Ekran dotykowy i nawigacja',
      blocks: [
        { type: 'p', text: 'Panel przedni to pełnodotykowy ekran **LCD 3,5"**, obsługiwany palcem, dłonią w rękawiczce lub rysikiem. Po starcie pojawia się **ekran gotowości (Ready)**, na którym dolny pasek pokazuje domyślnie język poleceń drukarki i adres IP.' },
        { type: 'p', text: 'Górny pasek stanu zawiera ikony: **Menu główne**, **Komunikacja**, **Informacje o drukarce**, **Wi-Fi (802.11)** oraz **Bluetooth**. Stuknięcie ikony Menu głównego otwiera sekcje: Programs, Settings, Tools, Wizards oraz Print Settings. Ikona **Wstecz** cofa o poziom, a osobny przycisk wraca do ekranu gotowości.' },
        { type: 'p', text: 'Drukarka **nie drukuje, gdy wyświetlane jest Menu główne** — wróć do ekranu gotowości, aby wznowić zadania. Po określonym czasie bezczynności (domyślnie 15 minut) ekran gaśnie i drukarka przechodzi w **tryb uśpienia**; budzi się automatycznie po wysłaniu zadania. Zalecane jest pozostawienie czasu uśpienia bez zmian, bo wydłużanie go skraca żywotność wyświetlacza.' },
      ],
    },
    {
      title: 'Przycisk Print/Feed',
      blocks: [
        { type: 'p', text: 'Jeden fizyczny przycisk **Print/Feed** obsługuje większość czynności bez wchodzenia w menu. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'w stanie gotowości — krótkie naciśnięcie **wysuwa nośnik**, a przytrzymanie **kalibruje czujniki nośnika**;',
          'podczas druku — naciśnięcie **wstrzymuje** zadanie po dokończeniu bieżącej etykiety;',
          'w pauzie — naciśnięcie **wznawia** druk;',
          'przy starcie — przytrzymanie pozwala wejść w **tryb kalibracji** lub przywrócić ustawienia domyślne (gdy głowica jest podniesiona).',
        ] },
        { type: 'p', text: 'Jeśli włączona jest funkcja ponownego druku, krótkie naciśnięcie w stanie gotowości **przedrukowuje ostatnie zadanie**.' },
      ],
    },
    {
      title: 'Ładowanie etykiet (druk z odrywaniem)',
      blocks: [
        { type: 'p', text: 'Najprostszy tryb to **odrywanie (tear-off)** — gotowe etykiety odrywasz ręcznie z przodu drukarki. Nadaje się do nośnika ciągłego, etykiet samoprzylepnych na podkładzie oraz biletów z przerwami lub czarnymi znacznikami.' },
        { type: 'list', ordered: true, items: [
          'pociągnij zatrzaski do przodu i unieś pokrywę drukarki;',
          'podnieś dźwignię blokady prowadnic rolki;',
          'rozsuń uchwyty nośnika i włóż rolkę między nie;',
          'dosuń uchwyty tak, by przylegały do boków rolki, i opuść dźwignię blokady;',
          'jeśli używasz nośnika z nacięciami lub czarnym znacznikiem, przesuń **czujnik etykiet** tak, by nacięcia/znaczniki przechodziły nad nim;',
          'przeprowadź nośnik **pod prowadnicami końcówek (tip guides)** na uchwytach i wyciągnij go poza przód drukarki;',
          'zamknij pokrywę aż do zatrzaśnięcia, włącz drukarkę i ustaw parametry wysuwu.',
        ] },
        { type: 'p', text: 'Po założeniu rolki pociągnij nośnik do przodu, by upewnić się, że swobodnie się obraca i nie opiera o podstawę. Maksymalna szerokość rolki to **118 mm**, średnica rolki do **127 mm**, grubość nośnika **0,06–0,2 mm**.' },
      ],
    },
    {
      title: 'Nośnik z zewnętrznej podajni',
      blocks: [
        { type: 'p', text: 'Dużych rolek lub przywieszek (do ok. 200 mm średnicy) nie da się zmieścić w środku — podaj je z zewnątrz przez **tylny otwór podawania nośnika**.' },
        { type: 'list', ordered: true, items: [
          'ustaw rolkę za drukarką;',
          'wprowadź nośnik do drukarki przez tylny otwór podawania;',
          'załóż na uchwyt pustą gilzę, przeprowadź nośnik nad nią i przez prowadnice tak samo jak przy rolce wewnętrznej.',
        ] },
      ],
    },
    {
      title: 'Cięcie i nośnik bez podkładu (linerless)',
      blocks: [
        { type: 'p', text: 'PC45d może pracować z modułem obcinaka, w tym z **obcinakiem do nośnika bez podkładu (linerless)**. W trybie cięcia każda etykieta jest automatycznie odcinana zaraz po wydrukowaniu. Obcinaj wyłącznie nośnik ciągły bez kleju; w przypadku etykiet samoprzylepnych na podkładzie **przecinaj tylko podkład** — klej osadzony na ostrzach unieruchamia obcinak i może uszkodzić silnik.' },
        { type: 'p', text: 'Ładowanie nośnika do obcinaka:' },
        { type: 'list', ordered: true, items: [
          'unieś pokrywę i załóż rolkę jak przy odrywaniu (uchwyty dosunięte i zablokowane);',
          'przeprowadź nośnik pod prowadnicami końcówek;',
          'wprowadź go do szczeliny obcinaka i wyprowadź jego przodem;',
          'zamknij pokrywę i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Następnie włącz obcinanie: na ekranie gotowości otwórz Menu główne i wybierz **Settings → Printing → Cutter**, ustaw **Cutter Control → Automatic**, zapisz, a na koniec dostosuj parametry **Label Top Adjust** i **Label Rest Adjust**. Opcjonalna taca obcinaka mieści do 20 etykiet lub biletów.' },
      ],
    },
    {
      title: 'Kalibracja nośnika',
      blocks: [
        { type: 'p', text: 'Po każdej zmianie nośnika warto skalibrować czujniki, by drukarka prawidłowo rozpoznawała początek etykiety. Drukarka ma czujniki **przerwy między etykietami / nacięcia**, **czarnego znacznika** oraz podniesienia głowicy.' },
        { type: 'p', text: 'Kalibrację uruchomisz na dwa sposoby: szybko — **przytrzymując przycisk Print/Feed** w stanie gotowości, albo z kreatora: Menu główne → **Wizards → Calibration → Media**. Kreator skalibruje czujniki i pokaże bieżące ustawienia druku.' },
        { type: 'p', text: 'Z poziomu kreatorów wykonasz też kalibrację **ekranu dotykowego** (Screen) — dotykasz pojawiających się kwadratów (zwykle pięć dotknięć: rogi i środek), aż drukarka zasygnalizuje zakończenie.' },
      ],
    },
    {
      title: 'Wydruk testowy i jakość druku',
      blocks: [
        { type: 'p', text: 'Po założeniu nośnika wydrukuj **etykietę testową**, by potwierdzić poprawny montaż i odczytać podstawowe informacje o drukarce: Menu główne → **Tools → Test Labels**, wybierz typ etykiety i stuknij ją.' },
        { type: 'p', text: 'Jeśli jakość jest słaba, skorzystaj z kreatora **Wizards → Printing → Print Quality**, który wydrukuje serię etykiet i pomoże dobrać najlepsze ustawienie. Kluczowe parametry to **prędkość druku**, **kontrast/zaczernienie (darkness)**, **czułość nośnika (media sensitivity)** oraz docisk głowicy.' },
        { type: 'list', items: [
          'wydruk zbyt jasny — zwiększ kontrast lub docisk głowicy; w ostateczności wymień głowicę;',
          'wydruk zbyt ciemny lub rozlewający się — zmniejsz zaczernienie i kontrast, dopasuj ustawienie jakości do typu nośnika;',
          'treść ściśnięta — zmniejsz prędkość druku oraz czułość nośnika;',
          'białe pionowe linie — wyczyść głowicę; jeśli brakuje punktów, wymień głowicę.',
        ] },
      ],
    },
    {
      title: 'Podłączenie do komputera (USB, Serial, Bluetooth)',
      blocks: [
        { type: 'p', text: 'Drukarkę połączysz z komputerem przewodowo lub bezprzewodowo:' },
        { type: 'list', items: [
          '**USB** — podłącz drukarkę kablem do portu USB komputera. Łącz tylko jedną drukarkę (bezpośrednio lub przez koncentrator). Domyślnie działa tryb druku bezpośredniego; w razie potrzeby przełączysz go na **Virtual COM** w ustawieniach (po zmianie wymagany restart).',
          '**Serial (RS-232)** — kablem DB9–DB9 połącz tył drukarki z portem COM komputera (port szeregowy jest opcjonalny).',
          '**Bluetooth** — włącz Bluetooth na komputerze lub urządzeniu mobilnym, wyszukaj drukarkę i połącz; potwierdź parowanie stuknięciem **OK** po obu stronach. Inne urządzenia Bluetooth (klawiaturę, skaner) sparujesz przez kreator Bluetooth z ekranu gotowości.',
        ] },
        { type: 'p', text: 'Drukarka ma także **port USB host** (z przodu i z tyłu) do podłączenia klawiatury, skanera lub pamięci USB. Pamięć USB musi mieć jedną partycję sformatowaną w **FAT16 lub FAT32**.' },
      ],
    },
    {
      title: 'Sieć: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Złącze **Ethernet** ustawia drukarkę jako urządzenie sieciowe. Domyślnie pobiera adres IP z sieci przez **DHCP**:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę;',
          'podłącz kabel Ethernet do gniazda z tyłu drukarki i do sieci;',
          'włącz drukarkę — przy DHCP adres IP pojawi się w lewym dolnym rogu ekranu;',
          'w sieci bez DHCP ustaw adres ręcznie: Settings → Communications → Ethernet → IPv4 lub IPv6.',
        ] },
        { type: 'p', text: '**Wi-Fi** działa po zainstalowaniu opcjonalnego modułu bezprzewodowego. Konfigurację przeprowadzisz z Menu głównego (**Settings → Communications → Wireless 802.11**) lub z kreatora **Wireless 802.1x**, podając nazwę sieci (SSID) oraz zabezpieczenia (np. WPA/WPA2, WPA2-Enterprise). Zalecane jest też włączenie weryfikacji certyfikatu serwera. W sieciach firmowych certyfikaty uwierzytelniające wgrywa się przez FTP/SFTP i instaluje skryptem na drukarce.' },
      ],
    },
    {
      title: 'Strona WWW drukarki i sterowniki',
      blocks: [
        { type: 'p', text: 'Drukarka udostępnia wbudowaną **stronę WWW** do konfiguracji i diagnostyki. W przeglądarce wpisz **https://** i adres IP drukarki, kliknij Login i zaloguj się — domyślny użytkownik to **itadmin**, hasło **pass** (przy pierwszym logowaniu poprosi o jego zmianę). Po zalogowaniu w sekcji **Configure** zmienisz ustawienia komunikacji, druku, systemu, alertów, usług sieciowych i języka.' },
        { type: 'p', text: 'Do druku z komputera z systemem Windows zainstaluj **sterownik Honeywell (InterDriver)** pobrany ze stron pomocy producenta. Choć Windows wykrywa drukarkę po podłączeniu USB, sterownik i tak jest potrzebny do poprawnej pracy. Drukarką zarządzisz też aplikacjami **PrintSet 5** oraz **Print Set MC** (na iOS/Android).' },
      ],
    },
    {
      title: 'Języki drukarki (ZPL i inne)',
      blocks: [
        { type: 'p', text: 'PC45d rozumie wiele języków poleceń i symulatorów, dzięki czemu przyjmuje gotowe formaty z różnych systemów bez zmian po stronie hosta:' },
        { type: 'list', items: [
          '**ZSim** — symulator języka Zebra (ZPL II i nowsze); wybierz go, gdy wysyłasz pliki ZPL;',
          '**DPL** — interpretuje strumienie Datamax;',
          '**ESim** — symulator języka Eltron (EPL);',
          '**Fingerprint** i **Direct Protocol (DP)** — własne języki Honeywell (DP ma intuicyjną, opisową składnię);',
          '**IPL**, **Smart Printing (C#)** oraz **bezpośredni druk PDF**.',
        ] },
        { type: 'p', text: 'Język zmienisz na stronie WWW (**Configure → System Settings → General → Command Language**) lub na drukarce (**Settings → System Settings → General**). Po wyborze konieczny jest restart — drukarka uruchomi się w nowym języku.' },
      ],
    },
    {
      title: 'Profile, kopie i skróty',
      blocks: [
        { type: 'p', text: 'Aktualne ustawienia możesz zapisać jako **profil drukarki** i wczytywać je w razie potrzeby — przydatne, gdy często zmieniasz typy nośnika. Profile zapiszesz i wczytasz ze strony WWW lub z Menu głównego (**Tools → Profiles**). W profilu nie są zapamiętywane adresy IP ani ustawienia kalibracji czujnika etykiet.' },
        { type: 'p', text: 'Plik konfiguracji (.xml) możesz wyeksportować na pamięć USB i wgrać na inne drukarki. Z poziomu strony WWW oraz USB instalujesz też czcionki, obrazy, formaty i aplikacje. Dla najczęściej używanych pozycji utworzysz **skróty (Quick Choices)** — wtedy zamiast Menu głównego pojawia się menu skrótów.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i ścieżki nośnika',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy wydłuża jej żywotność i utrzymuje jakość druku. Czyść głowicę **przy każdej zmianie nośnika**. Zawsze najpierw odłącz zasilanie i odczekaj, aż głowica ostygnie.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania;',
          'otwórz pokrywę i wyjmij nośnik;',
          'wsuń kartę czyszczącą pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę;',
          'odczekaj około 30 sekund, aż płyn rozpuści zabrudzenia, i w razie potrzeby powtórz;',
          'resztki z wałka dociskowego lub listwy odrywającej usuń patyczkiem z alkoholem izopropylowym;',
          'po wyschnięciu załóż nośnik, zamknij pokrywę i włącz drukarkę.',
        ] },
        { type: 'p', text: 'Górna i dolna **prowadnica nośnika są przezroczyste** — między nimi przechodzi światło czujników przerwy i znacznika, dlatego utrzymuj je czyste z kurzu, naklejonych etykiet i kleju (czyść kartą lub miękką ściereczką z alkoholem izopropylowym). Obudowę przecieraj miękką ściereczką zwilżoną wodą lub łagodnym detergentem.' },
        { type: 'list', items: [
          'nigdy nie spryskuj drukarki wodą;',
          'nie wkładaj do środka ostrych ani spiczastych narzędzi;',
          'nie usuwaj zaklejonych etykiet ostrymi narzędziami — głowica i wałki są delikatne;',
          'stosuj wyłącznie zalecane środki czyszczące.',
        ] },
      ],
    },
    {
      title: 'Czyszczenie obcinaka',
      blocks: [
        { type: 'p', text: 'Obcinak (standardowy i linerless) utrzymuj wolny od kurzu, naklejonych etykiet i kleju:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz ją od zasilania;',
          'wyjmij moduł obcinaka z drukarki;',
          'do górnego ostrza dostaniesz się, otwierając przednią pokrywę obcinaka, a do dolnego — tylną klapkę;',
          'wyczyść ostrza miękką ściereczką zwilżoną alkoholem izopropylowym, uważając na ich ostre krawędzie;',
          'po wyschnięciu zamknij obcinak i zamontuj go z powrotem.',
        ] },
      ],
    },
    {
      title: 'Wymiana głowicy i wałka dociskowego',
      blocks: [
        { type: 'p', text: 'Głowica zużywa się z czasem przez cykle nagrzewania i stygnięcia; tempo zużycia zależy od rodzaju wydruków, nośnika, prędkości i temperatury otoczenia. Drukarka wykrywa nową głowicę po ponownym uruchomieniu.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz zasilanie, unieś pokrywę i wyjmij nośnik;',
          'rozsuń zatrzaski głowicy, aż wysunie się ona do przodu;',
          'ostrożnie wysuń głowicę — pozostaje połączona taśmą sygnałową;',
          'odłącz taśmę od starej głowicy i podłącz ją do nowej;',
          'wsuń nową głowicę w prowadnice, dociśnij na kołkach pozycjonujących i wyrównaj z pokrywą;',
          'zamknij pokrywę aż do zatrzaśnięcia.',
        ] },
        { type: 'p', text: 'Zużyty lub uszkodzony **wałek dociskowy (platen roller)** wymienia się po uniesieniu pokrywy: rozsuń zatrzaski wałka i odchyl je, wyjmij wałek, a następnie wsuń nowy i dociśnij zatrzaski, aż się zatrzasną.' },
      ],
    },
    {
      title: 'Diody, komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka sygnalizuje stan komunikatami i **alertami** (błędy, ostrzeżenia, informacje), które można wysyłać na adres e-mail lub jako pułapkę SNMP. Najczęstsze komunikaty i działania:' },
        { type: 'list', items: [
          '**Out of Media** — załóż nośnik;',
          '**Printhead Lifted** — opuść i zatrzaśnij głowicę;',
          '**Printhead Not Detected** — sprawdź montaż głowicy i pewność połączenia taśmy sygnałowej;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie;',
          '**Label Not Taken** — usuń etykietę zasłaniającą czujnik pobrania lub skalibruj ten czujnik;',
          '**Clean Printhead / Replace Printhead** — przekroczono próg licznika; wyczyść lub wymień głowicę;',
          '**Printer in Pause Mode** — naciśnij Print/Feed, aby wznowić.',
        ] },
        { type: 'p', text: 'Statystyki i przebieg (odometr głowicy, liczba wydruków, uszkodzone punkty) sprawdzisz na stronie WWW w zakładce **System Information**. Gdy połączenie sieciowe nie działa, sprawdź, czy kabel jest pewnie wpięty, a komputer i drukarka są poprawnie skonfigurowane dla tej samej sieci.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia domyślne przywrócisz na trzy sposoby. Ze **strony WWW** lub z **Menu głównego** (Tools → Restore Defaults) możesz wybrać, co zresetować: ustawienia sieci, pliki zainstalowane przez użytkownika oraz ustawienia systemowe. Zaznacz odpowiednie pola i potwierdź — po operacji drukarka się zrestartuje.' },
        { type: 'p', text: 'Dostępny jest też **reset sprzętowy**: wyłącz drukarkę, otwórz pokrywę nośnika, włącz drukarkę trzymając wciśnięty przycisk Feed i zwolnij go, gdy pasek stanu będzie niemal pełny — przywróci to wszystkie ustawienia.' },
      ],
    },
    {
      title: 'Aktualizacja oprogramowania układowego',
      blocks: [
        { type: 'p', text: 'Warto okresowo sprawdzać aktualizacje **oprogramowania układowego (firmware)**. Najnowszą wersję pobierzesz z portalu pomocy producenta, a wgrasz ją przez stronę WWW, pamięć USB, PrintSet 5 lub Honeywell Operational Intelligence.' },
        { type: 'p', text: 'Ze **strony WWW**: zaloguj się, otwórz **Services → Firmware Upgrade**, wskaż plik aktualizacji i kliknij Upgrade. Z **pamięci USB**: skopiuj plik aktualizacji do katalogu głównego pamięci (najlepiej bez innych plików), wyłącz drukarkę, włóż pamięć w port USB host i uruchom drukarkę — aktualizacja rozpocznie się automatycznie i może potrwać kilka minut. Po aktualizacji **nie wyłączaj drukarki**, a następnie przywróć ustawienia domyślne i ponownie skalibruj czujniki nośnika.' },
      ],
    },
  ],
}
