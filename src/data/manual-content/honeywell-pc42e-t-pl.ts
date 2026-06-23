import type { PolishManual } from '@/data/manuals'

export const honeywellPc42etPl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze ekonomicznej, biurkowej drukarki etykiet Honeywell PC42E-T po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie etykiet i taśmy termotransferowej, ustawienia druku i sieci, po konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'PC42E-T to lekka, niezawodna drukarka **termotransferowa** z klasy ekonomicznej, przeznaczona do druku około **1500 etykiet dziennie**. Drukuje z prędkością **6 cali/s** przy rozdzielczości 203 dpi lub **5 cali/s** przy 300 dpi i obsługuje media o szerokości od **25 do 114 mm** (1–4,5 cala). To prosty model bez ekranu — sterujesz nim **przyciskiem Print** i obserwujesz pojedynczą **diodę stanu (LED)**.' },
        { type: 'p', text: 'Przed pierwszym uruchomieniem ustaw drukarkę na stabilnym blacie i upewnij się, że włącznik zasilania jest wyłączony. Po założeniu mediów i taśmy podłącz zasilanie, włącz drukarkę, ustaw język drukarki i wydrukuj etykietę testową — to potwierdzi poprawność instalacji.' },
      ],
    },
    {
      title: 'Podłączenie zasilania',
      blocks: [
        { type: 'p', text: 'Używaj wyłącznie **zasilacza dołączonego do drukarki** — zastosowanie nieautoryzowanego zasilacza unieważnia gwarancję i może uszkodzić urządzenie. Gdy drukarka nie jest używana, wyłączaj ją.' },
        { type: 'list', ordered: true, items: [
          'podłącz zasilacz do gniazda zasilania z tyłu drukarki;',
          'podłącz zasilacz do sieci — po podłączeniu zielona dioda w złączu zasilacza zapala się i świeci stale;',
          'wciśnij **włącznik zasilania**, aby uruchomić drukarkę; podczas startu zielona dioda na drukarce zapala się i miga;',
          'gdy dioda zaświeci **stałym zielonym światłem**, drukarka jest gotowa do pracy.',
        ] },
      ],
    },
    {
      title: 'Panel: przycisk Print, przycisk ECO i dioda stanu',
      blocks: [
        { type: 'p', text: 'PC42E-T nie ma wyświetlacza. Z przodu obudowy znajdują się dwa przyciski — **Print** i **ECO** — oraz jedna **dioda stanu (LED)**, która kolorem i sposobem migania pokazuje, co dzieje się z drukarką.' },
        { type: 'p', text: 'Przycisk **Print** ma kilka funkcji zależnych od stanu drukarki:' },
        { type: 'list', items: [
          'krótkie naciśnięcie, gdy drukarka jest bezczynna — wysuwa medium do początku następnej etykiety;',
          'krótkie naciśnięcie podczas druku — wstrzymuje pracę; kolejne naciśnięcie wznawia druk;',
          '**przytrzymanie przez 2 sekundy** (gdy bezczynna) — drukuje kilka etykiet i kalibruje czujnik mediów (testfeed);',
          '**przytrzymanie przez 6 sekund** — wykonuje testfeed, a następnie drukuje etykietę konfiguracyjną;',
          '**przytrzymanie przez 3 sekundy** w trybie pauzy — anuluje zadanie i czyści bufor druku;',
          '**przytrzymanie podczas startu** — drukarka kalibruje media, drukuje etykietę konfiguracyjną i pozwala wybrać język drukarki.',
        ] },
        { type: 'p', text: 'Przycisk **ECO** włącza i wyłącza tryb **ECO** (oszczędny). Gdy świeci na zielono, tryb ECO jest włączony i drukarka stosuje **szybką kalibrację mediów** zużywającą minimalną długość etykiet. Gdy nie świeci, tryb ECO jest wyłączony i obowiązuje **wolna kalibracja** wykorzystująca długość kilku etykiet — przydatna, gdy drukarka ma trudności z rozpoznaniem przerw lub czarnych znaczników.' },
      ],
    },
    {
      title: 'Znaczenie diody stanu (LED)',
      blocks: [
        { type: 'p', text: 'Dioda stanu świeci na **zielono, pomarańczowo lub czerwono**, sygnalizując bieżący stan drukarki:' },
        { type: 'list', items: [
          '**zielona stała** — drukarka jest gotowa i czeka na zadanie;',
          '**zielona miga** — drukarka uruchamia się lub druk jest wstrzymany (naciśnij Print, by wznowić);',
          '**zielona miga szybko** — trwa komunikacja albo uruchamia się symulator (ZSim, ESim);',
          '**zielona miga wolno** — w trybie podawania z podajnika gotowa etykieta czeka w szczelinie i trzeba ją zabrać;',
          '**zielona miga od startu** — błąd pamięci; należy zaktualizować firmware;',
          '**pomarańczowa stała** — głowica jest zbyt gorąca; poczekaj, aż ostygnie i druk wznowi się sam;',
          '**pomarańczowa miga** — trwa aktualizacja firmware z pamięci USB; wyjmij pamięć dopiero, gdy dioda zaświeci stałym zielonym;',
          '**pomarańczowa miga wolno** — zadanie zawiera niezainstalowaną czcionkę lub element poza obszarem druku;',
          '**czerwona miga** — tryb błędu: brak taśmy, brak mediów, taśma założona przy trybie termicznym, podniesiona głowica, zacięcie albo niewykonana kalibracja (testfeed); po usunięciu usterki naciśnij Print;',
          '**czerwona i zielona migają na przemian** — usterka sprzętowa; oddaj drukarkę do serwisu Honeywell;',
          '**dioda zgaszona** — zasilanie jest wyłączone.',
        ] },
      ],
    },
    {
      title: 'Ładowanie etykiet (mediów)',
      blocks: [
        { type: 'p', text: 'Drukarka drukuje na etykietach, przywieszkach oraz materiałach ciągłych (paragonowych i z podkładem). Obsługuje media o szerokości **25–114 mm** i rolki do **127 mm (5 cali)** średnicy. W trybie odrywania (tear-off) etykiety odrywasz ręcznie ku górze o **listwę odrywającą**.' },
        { type: 'p', text: 'Aby założyć rolkę:' },
        { type: 'list', ordered: true, items: [
          'wciśnij zatrzaski pokrywy po obu stronach drukarki i otwórz pokrywę **do końca**, by nie opadła podczas zakładania;',
          'unieś blokadę na lewym uchwycie rolki i rozsuń uchwyty do szerokości rolki;',
          'włóż rolkę mediów między uchwyty;',
          'dosuń uchwyty tak, by przylegały do boków rolki, i opuść zatrzask, blokując je;',
          'wciśnij **oba przyciski blokujące**, aby otworzyć mechanizm druku i taśmy;',
          'ustaw czujnik mediów odpowiednio do rodzaju materiału — **czarny znacznik**, **przerwa (gap)** albo przywieszka tkaninowa — przesuwając zakładkę na środku czujnika;',
          'przeprowadź medium pod mechanizmem druku i taśmy do przodu drukarki;',
          'umieść medium między prowadnicami i dopasuj je do szerokości materiału tak, by leżał płasko;',
          'upewnij się, że medium wystaje poza obszar przed drukarką, opuść mechanizm i dociśnij, aż oba zatrzaski wskoczą na miejsce;',
          'zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Po założeniu mediów ustaw w drukarce metodę druku (termotransferowa lub termiczna), typ mediów oraz szerokość i długość etykiety, a następnie **przytrzymaj przycisk Print**, aby wydrukować etykietę testową.' },
      ],
    },
    {
      title: 'Media zewnętrzne (zza drukarki)',
      blocks: [
        { type: 'p', text: 'Zapas mediów — na przykład bilety lub przywieszki w składance (fan-fold) — możesz umieścić **za drukarką**. Materiał wprowadzasz do urządzenia przez **tylną szczelinę podawania mediów** i prowadzisz dalej tak samo jak rolkę zakładaną w środku, dopasowując prowadnice i czujnik. Zewnętrzny uchwyt mediów kupuje się osobno.' },
        { type: 'p', text: 'Chroń media przed bezpośrednim światłem słonecznym, kurzem i zabrudzeniami — obniżają one jakość wydruku i przyspieszają zużycie głowicy.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Do druku na mediach termotransferowych konieczna jest **taśma (ribbon)** dopasowana do materiału etykiety — właściwy dobór taśmy zapewnia najlepszą trwałość i jakość wydruku. PC42E-T obsługuje taśmy **wax, mid-range i resin**, o szerokości **25–110 mm**, na rdzeniach **0,5 cala lub 1 cal**.' },
        { type: 'p', text: 'Ważne: drukarka współpracuje wyłącznie z taśmą nawiniętą **barwą na zewnątrz (ink out)** — strona barwiąca (matowa) jest skierowana na zewnątrz rolki.' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'wciśnij zatrzaski pokrywy i otwórz pokrywę **do końca**;',
          'ustaw **przełączniki rdzenia taśmy** zależnie od średnicy rdzenia — dla rdzenia **0,5 cala** przełącznik w pozycji zewnętrznej, dla **1 cala** (lub przy użyciu adaptera rdzenia) w pozycji wewnętrznej; przełącznik przekręca się śrubokrętem krzyżakowym, przytrzymując pokrętło naciągu;',
          'wciśnij oba przyciski blokujące, aby otworzyć mechanizm druku i taśmy, i opuść osłonę taśmy;',
          'dla rdzenia 1 cala włóż **adapter rdzenia** w rolkę taśmy; jeśli medium jest wąskie, wyśrodkuj rolkę na adapterze;',
          'umieść rolkę taśmy między **tylnymi uchwytami** tak, by taśma schodziła z rolki we właściwym kierunku;',
          'załóż **pusty rdzeń odbiorczy** na adapter z przodu;',
          'przeciągnij taśmę nad głowicą i przymocuj jej początek do rdzenia odbiorczego (możesz użyć taśmy klejącej);',
          'zlikwiduj luz, dbając, by taśma nawijała się równo i gładko, i przekręć **pokrętło naciągu**, aż kliknie, blokując rdzeń odbiorczy;',
          'opuść mechanizm druku i taśmy, aż zatrzaśnie się na miejscu, i zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Po założeniu taśmy ustaw w drukarce **druk termotransferowy** oraz typ, szerokość i długość mediów, a następnie wydrukuj etykietę testową, przytrzymując przycisk Print.' },
      ],
    },
    {
      title: 'Druk termotransferowy a termiczny',
      blocks: [
        { type: 'p', text: 'PC42E-T obsługuje zarówno **druk termotransferowy** (z taśmą — trwalszy, odporniejszy wydruk), jak i **termiczny bezpośredni** (bez taśmy, na materiale czułym na ciepło). Metodę dobierasz do rodzaju etykiet i wymaganej trwałości; ustawiasz ją ze strony WWW drukarki lub w programie PrintSet 5, razem z typem mediów oraz ich szerokością i długością.' },
        { type: 'p', text: 'Jeśli drukarka jest ustawiona na druk termiczny, a wewnątrz znajduje się taśma, zgłosi błąd (czerwona miga) — wówczas wyjmij taśmę albo przełącz drukarkę na druk termotransferowy. Aby sprawdzić, czy medium jest termiczne, mocno przeciągnij po nim paznokciem — jeśli pojawi się czarna kreska, to materiał termiczny.' },
      ],
    },
    {
      title: 'Kalibracja mediów',
      blocks: [
        { type: 'p', text: 'Po założeniu etykiet (i taśmy) skalibruj czujnik mediów, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. Najprościej **przytrzymać przycisk Print przez około 2 sekundy**, gdy drukarka jest bezczynna — wydrukuje kilka etykiet i wykona kalibrację (testfeed).' },
        { type: 'p', text: 'Tempo kalibracji zależy od trybu ECO: z włączonym trybem ECO drukarka stosuje **szybką kalibrację** oszczędzającą media; z wyłączonym — **wolną kalibrację** zużywającą kilka etykiet, ale skuteczniejszą przy materiałach, na których trudno wykryć przerwy lub znaczniki. Jeśli kalibracja nie udaje się w trybie ECO, wyłącz go przyciskiem ECO i powtórz.' },
      ],
    },
    {
      title: 'Języki drukarki i ZPL',
      blocks: [
        { type: 'p', text: 'PC42E-T obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense**, bezpośredni druk plików **PDF**, **Direct Protocol (DP)**, **DPL** (Datamax), **ESim** (symulacja Eltron/EPL), **Fingerprint (FP)**, **IPL** oraz **ZSim** (symulacja **ZPL** II i nowszych).' },
        { type: 'p', text: 'Domyślnie aktywny jest **Autosense** — drukarka sama rozpoznaje język przychodzących danych etykieta po etykiecie (nie obsługuje strumienia IPL). Jeśli wysyłasz pliki w **ZPL**, ustaw **ZSim**; dla plików EPL wybierz ESim, a dla Datamax — DPL.' },
        { type: 'p', text: 'Język zmienisz na trzy sposoby: **przyciskiem Print**, ze strony WWW drukarki lub w programie PrintSet 5. Najprościej przyciskiem: wyłącz drukarkę, przytrzymaj **Print** i włącz urządzenie — drukarka skalibruje media, wydrukuje etykietę konfiguracyjną, a potem co 2 sekundy etykiety z kolejnymi językami; gdy wydrukuje się etykieta z żądanym językiem, naciśnij **Print**. Zmiana ze strony WWW lub PrintSet 5 wymaga ponownego uruchomienia drukarki.' },
      ],
    },
    {
      title: 'Etykiety testowe i konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Etykieta testowa (konfiguracyjna) pozwala sprawdzić jakość druku i odczytać konfigurację — w tym listę czcionek, obrazów i aplikacji w drukarce oraz **adres IP**. Możesz ją wydrukować na kilka sposobów:' },
        { type: 'list', items: [
          '**przy włączaniu** — przytrzymaj Print podczas startu; drukarka skalibruje media, wydrukuje etykietę konfiguracyjną i pozwoli wybrać język;',
          '**w stanie gotowości** — przytrzymaj Print, aż drukarka wysunie medium i wydrukuje etykietę konfiguracyjną;',
          'z poziomu **strony WWW** lub programu konfiguracyjnego.',
        ] },
        { type: 'p', text: 'Po podłączeniu przez Ethernet uzyskanie adresu IP trwa około 10 sekund. Jeśli na etykiecie widnieje adres **0.0.0.0**, odczekaj chwilę i wydrukuj kolejną.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'Aby korzystać z drukarki w aplikacjach Windows, zainstaluj na komputerze **sterownik Honeywell (InterDriver)**, pobrany z portalu pomocy technicznej Honeywell. Choć Windows potrafi wykryć drukarkę po podłączeniu przez **USB**, sterownik jest niezbędny do poprawnej pracy.' },
        { type: 'p', text: 'Drukarkę podłączysz do komputera na dwa sposoby:' },
        { type: 'list', items: [
          '**kablem USB** — połącz port urządzenia USB z tyłu drukarki z komputerem; dla połączenia USB nie trzeba ustawiać żadnych parametrów, wystarczy zainstalowany InterDriver;',
          '**kablem USB-szeregowym** — łączy port USB drukarki z portem szeregowym komputera.',
        ] },
        { type: 'p', text: 'Z tyłu drukarki znajduje się też **port USB host** — podłączysz do niego pamięć USB (jedna partycja, FAT16/FAT32), klawiaturę USB (komendy Fingerprint lub wprowadzanie danych) albo skaner kodów kreskowych do aplikacji Smart Printing.' },
      ],
    },
    {
      title: 'Sieć: Ethernet i komunikacja bezprzewodowa',
      blocks: [
        { type: 'p', text: 'PC42E-T można wyposażyć w **opcjonalny interfejs Ethernet**. Po jego instalacji podłącz kabel do portu Ethernet z tyłu drukarki — domyślnie urządzenie pobiera adres IP z sieci (**DHCP**). Połączenie sieciowe działa ze sterownikiem Honeywell, a komendy można też wysyłać bezpośrednio przez Telnet lub FTP.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i podłącz kabel Ethernet do portu z tyłu oraz do sieci;',
          'włącz drukarkę;',
          'w sieci bez DHCP ustaw adres ręcznie ze strony WWW lub w PrintSet 5: **Communications → Ethernet → IPv4/IPv6**;',
          'wydrukuj etykietę testową, aby odczytać adres IP drukarki.',
        ] },
        { type: 'p', text: 'Po zainstalowaniu opcjonalnego modułu można korzystać z **Wi-Fi** oraz **Bluetooth** — oba konfiguruje się ze strony WWW lub w PrintSet 5. W sieciach Wi-Fi z zabezpieczeniami 802.11 możesz wgrać **certyfikaty uwierzytelniające** przez połączenie FTP/Telnet i zainstalować je skryptem na drukarce.' },
      ],
    },
    {
      title: 'Konfiguracja: strona WWW i PrintSet 5',
      blocks: [
        { type: 'p', text: 'Większość ustawień sieciowych skonfigurujesz przez **stronę WWW drukarki** (wymaga interfejsu Ethernet): w przeglądarce wpisz **adres IP** drukarki, zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass**), a następnie w sekcji **Configure** zmień ustawienia komunikacji, druku, systemu i usług sieciowych i zapisz przyciskiem **Save**.' },
        { type: 'p', text: 'Alternatywą jest komputerowy program **Honeywell PrintSet 5** (do pobrania z portalu pomocy technicznej). Po zmianie ustawień kliknij **Save**, a potem **Printer → Apply**, aby przesłać konfigurację do drukarki. PrintSet 5 jest też jedynym sposobem konfiguracji Wi-Fi w sieciach bez DHCP — przez połączenie USB.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy drukującej',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy wydłuża jej żywotność i utrzymuje jakość druku. Zaleca się czyścić głowicę **przy każdej wymianie mediów**. Nigdy nie usuwaj przyklejonych etykiet ostrymi narzędziami — głowica jest delikatna i łatwo ją uszkodzić.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i **odłącz ją od zasilania**;',
          'otwórz pokrywę i mechanizm druku, wyjmij medium oraz taśmę (jeśli są założone);',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść mechanizm druku;',
          'wyciągnij kartę i unieś głowicę;',
          'odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'w razie potrzeby powtórz; uporczywy osad z wałka dociskowego lub listwy odrywającej usuń patyczkiem z **alkoholem izopropylowym**;',
          'po wyschnięciu części załóż z powrotem medium i taśmę, zamknij mechanizm i pokrywę, podłącz zasilanie i włącz drukarkę;',
          'wydrukuj etykietę testową, aby sprawdzić jakość druku.',
        ] },
      ],
    },
    {
      title: 'Wymiana głowicy drukującej',
      blocks: [
        { type: 'p', text: 'Głowica zużywa się z czasem — tempo zależy od rodzaju wydruków, mediów i taśmy, energii dostarczanej do głowicy, prędkości druku oraz temperatury otoczenia. Po wymianie firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki. Nigdy nie dotykaj powierzchni grzewczej głowicy.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i **odłącz przewód zasilający**;',
          'otwórz pokrywę i wciśnij oba przyciski blokujące, by otworzyć mechanizm druku i taśmy;',
          'przy druku termotransferowym wyjmij taśmę;',
          'wysuń zaczepy na końcach głowicy z uchwytów i odsuń głowicę od drukarki;',
          'odłącz kable na obu końcach głowicy i odkręć śrubokrętem krzyżakowym śrubę przewodu uziemiającego;',
          'wyjmij głowicę, a nową zamontuj w odwrotnej kolejności — podłącz kable, przykręć przewód uziemiający, zabezpiecz kabel w uchwytach i zatrzaśnij zaczepy;',
          'załóż taśmę (przy druku termotransferowym), zamknij mechanizm i pokrywę.',
        ] },
      ],
    },
    {
      title: 'Wałek dociskowy i czyszczenie wnętrza',
      blocks: [
        { type: 'p', text: 'Sprawdzaj **wałek dociskowy (platen roller)** pod kątem zabrudzeń przy każdym zakładaniu mediów i w razie potrzeby czyść go. Tak jak głowicy, nie czyść go ostrymi narzędziami.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz przewód zasilający, otwórz pokrywę i mechanizm druku, wyjmij medium oraz taśmę;',
          'wciśnij i przekręć do przodu **zatrzaski na końcach wałka**, a następnie unieś wałek, by go wyjąć;',
          'usuń resztki kleju patyczkiem zwilżonym alkoholem izopropylowym;',
          'zamontuj wałek w odwrotnej kolejności, opuść mechanizm druku, aż zatrzaski wskoczą na miejsce, i zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Aby utrzymać wnętrze w czystości, dbaj o czysty tor mediów oraz osłony czujników (mylar) — powinny być wolne od odcisków palców, tłuszczu, kurzu i brudu.' },
      ],
    },
    {
      title: 'Czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Czysta obudowa ogranicza przedostawanie się kurzu i drobin do wnętrza drukarki. Do czyszczenia używaj **miękkiej szmatki zwilżonej wodą lub łagodnym detergentem**; utrzymuj też w czystości powierzchnię wokół drukarki.' },
        { type: 'p', text: 'Nigdy nie spryskuj drukarki wodą. Jeśli sprzątasz pomieszczenie sprzętem rozpylającym, odsuń drukarkę lub osłoń ją przed strumieniem i wilgocią. Alkohol izopropylowy jest łatwopalny — używaj go ostrożnie.' },
      ],
    },
    {
      title: 'Rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Najczęstsze usterki i sposoby ich usunięcia:' },
        { type: 'list', items: [
          '**dioda zgaszona mimo włączonego zasilania** — sprawdź, czy złącza zasilacza są pewnie wpięte w drukarkę i gniazdko;',
          '**dioda zielona, ale drukarka nie podaje mediów** — upewnij się, że właściwy kabel sygnałowy jest pewnie wpięty w drukarkę i komputer;',
          '**drukuje tylko fragmenty etykiet** — domknij mechanizm druku i taśmy (oba zatrzaski mają kliknąć); sprawdź, czy etykieta nie zaczepiła się o głowicę, usuń ją i wyczyść głowicę;',
          '**słaba jakość druku** — wyczyść głowicę, dobierz taśmę do mediów i ustaw właściwe zaczernienie (darkness) dla danej kombinacji mediów i taśmy;',
          '**drukarka pracuje, ale nic nie drukuje (druk termiczny)** — upewnij się, że stroną czułą na ciepło medium jest zwrócone do głowicy i że to faktycznie materiał termiczny;',
          '**druk zatrzymuje się, dioda czerwona** — sprawdź status błędu w PrintSet 5; poszukaj zacięcia lub rozerwanej perforacji; przy błędzie „Printhead Lifted" mimo zamkniętej głowicy sprawdź, czy okrągła biała naklejka jest na miejscu po prawej stronie mechanizmu;',
          '**drukarka podaje lub drukuje, choć powinna się zatrzymać** — zaklejona etykieta może blokować czujnik przerwy; otwórz pokrywę, usuń etykietę i wyczyść głowicę.',
        ] },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Najprościej **przyciskiem Print**:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę;',
          'wciśnij zatrzaski pokrywy po obu stronach i otwórz pokrywę;',
          'wciśnij oba zatrzaski u góry, by otworzyć mechanizm druku i taśmy;',
          'włącz drukarkę;',
          'gdy dioda zacznie migać na zielono, **przytrzymaj Print**, aż dioda zgaśnie;',
          'sprawdź, czy media są założone poprawnie, zamknij mechanizm i pokrywę.',
        ] },
        { type: 'p', text: 'Ze **strony WWW**: **Services → Restore Defaults** — zaznacz grupy ustawień do przywrócenia (sieć, pliki użytkownika, ustawienia systemowe) i kliknij Restore; drukarka uruchomi się ponownie. To samo zrobisz w **PrintSet 5** za pomocą kreatora Factory Default Wizard.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell. Firmware zaktualizujesz ze **strony WWW** drukarki, w programie **PrintSet 5** (kreator Firmware Update Wizard) lub z **pamięci USB**.' },
        { type: 'p', text: 'Aktualizacja z pamięci USB:' },
        { type: 'list', ordered: true, items: [
          'upewnij się, że pamięć ma jedną partycję i jest sformatowana w **FAT16 lub FAT32**;',
          'skopiuj plik aktualizacji (zwykle w formacie .bin) do **katalogu głównego** pamięci;',
          'wyłącz drukarkę i włóż pamięć do portu USB host;',
          'włącz drukarkę — podczas wgrywania dioda **miga na pomarańczowo** (może to potrwać kilka minut);',
          'gdy dioda zaświeci **stałym zielonym światłem**, drukarka jest gotowa; wyjmij pamięć.',
        ] },
        { type: 'p', text: 'Podczas aktualizacji nie wysyłaj danych do drukarki ani jej nie wyłączaj.' },
      ],
    },
  ],
}
