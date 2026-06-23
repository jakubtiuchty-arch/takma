import type { PolishManual } from '@/data/manuals'

export const honeywellPx65Pl: PolishManual = {
  updatedAt: '2026-06-23',
  intro:
    'Najważniejsze informacje o obsłudze przemysłowej, szerokoformatowej drukarki etykiet Honeywell PX65 po polsku — od pierwszego uruchomienia i podłączenia, przez zakładanie nośnika 6 cali i taśmy termotransferowej, kalibrację i ustawienia druku, po konfigurację sieci, RFID, wymianę głowicy QuickMount, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie i podłączenie zasilania',
      blocks: [
        { type: 'p', text: 'PX65 to **przemysłowa drukarka etykiet klasy heavy-duty** o **metalowej, całkowicie zamkniętej konstrukcji**, przeznaczona do druku **24/7** w trudnych warunkach przemysłowych i dużych nakładów. Obsługuje nośnik o szerokości druku do **6 cali (152 mm)**, drukuje **termotransferowo** (z taśmą/ribbonem) oraz **termicznie bezpośrednio** (bez taśmy) z prędkością do **12 cali/s**. Wyróżnia ją wysoki stopień ochrony **IP64** oraz masa około **12,6 kg**, dzięki czemu sprawdza się na hali produkcyjnej i w magazynie. Drukarka ma kolorowy, dotykowy ekran **LCD** z pełną nawigacją oraz zintegrowane interfejsy **USB**, **RS-232** i **Ethernet** (Wi-Fi opcjonalnie).' },
        { type: 'p', text: 'Ustaw drukarkę na stabilnym, równym podłożu i upewnij się, że włącznik jest w pozycji wyłączonej. Aby ją uruchomić:' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód zasilający do gniazda z tyłu drukarki, a drugi koniec do gniazdka sieciowego **z uziemieniem**;',
          'naciśnij włącznik zasilania;',
          'poczekaj, aż na ekranie pojawi się pasek postępu, a po nim **kreator startowy (Startup Wizard)**;',
          'wykonaj kroki kreatora, aby skonfigurować podstawowe parametry pracy — m.in. datę i godzinę;',
          'uruchom kolejny kreator, aby ustawić więcej parametrów, albo przejdź do ekranu gotowości (Ready).',
        ] },
        { type: 'p', text: 'Kreator startowy pojawia się przy pierwszym włączeniu oraz po każdym przywróceniu ustawień fabrycznych. Jeśli wystąpi sytuacja uniemożliwiająca druk, **wskaźnik gotowości do pracy (Ready-to-Work) miga**.' },
      ],
    },
    {
      title: 'Ekran dotykowy i panel przedni',
      blocks: [
        { type: 'p', text: 'Na panelu przednim znajdują się: kolorowy ekran dotykowy **LCD**, wskaźnik gotowości do pracy (Ready-to-Work), przyciski nawigacyjne oraz przycisk **Print/Feed**. Po zakończeniu startu pojawia się **ekran gotowości (Ready)**, na którym domyślnie widać aktywny język drukarki — można go dostosować i wyświetlać inne informacje.' },
        { type: 'p', text: 'Pasek stanu u góry ekranu zawiera ikony: **informacje o drukarce** (po dotknięciu pokazuje podstawowe dane) oraz **stan komunikacji** (miga, gdy przez połączenie przewodowe przepływają dane). Wskaźnik gotowości świeci, gdy drukarka jest gotowa do druku; miga, gdy nie jest gotowa; gaśnie, gdy jest wyłączona, nie komunikuje się lub trwa start albo aktualizacja firmware.' },
        { type: 'p', text: 'Przycisk **Menu/Home** przełącza między ekranem gotowości a **menu głównym**. Menu główne zawiera sekcje: **Settings (Ustawienia)**, **Tools (Narzędzia)**, **Wizards (Kreatory)** oraz **Programs (Programy)** — przy czym pozycja Programs pojawia się tylko wtedy, gdy językiem drukarki jest Fingerprint. Krzyżak nawigacyjny służy do podświetlania pozycji, przycisk Enter zatwierdza wybór, a przycisk Wstecz wraca do poprzedniego menu lub zatrzymuje aplikację Fingerprint. Gdy menu główne jest otwarte, drukarka nie drukuje.' },
      ],
    },
    {
      title: 'Przycisk Print/Feed i tryby startowe',
      blocks: [
        { type: 'p', text: 'Fizyczny przycisk **Print/Feed** służy do wysuwania nośnika, wstrzymywania zadań i druku. Jego działanie zależy od stanu drukarki:' },
        { type: 'list', items: [
          'na ekranie gotowości — krótkie naciśnięcie wysuwa nośnik; jeśli włączona jest funkcja powtórnego druku, naciśnięcie ponawia ostatnie zadanie; **przytrzymanie** uruchamia kalibrację czujników nośnika;',
          'podczas druku — naciśnięcie zatrzymuje lub wstrzymuje pracę po dokończeniu bieżącej etykiety;',
          'w trybie pauzy — naciśnięcie wznawia druk;',
          'w stanie błędu — naciśnięcie wysuwa nośnik;',
          'podczas startu — naciśnięcie wchodzi w tryb kalibracji lub (przy podniesionej głowicy) uruchamia przywracanie ustawień domyślnych.',
        ] },
        { type: 'p', text: 'Domyślnymi działaniami startowymi steruje funkcja Smart Calibration, dostępna m.in. dla zdarzeń **Power Up Action** (po włączeniu zasilania), **Head Down Action** (po opuszczeniu głowicy) oraz **Hold Print/Feed Button** (przytrzymanie przycisku Print/Feed).' },
      ],
    },
    {
      title: 'Ładowanie nośnika do druku z odrywaniem (tear-off)',
      blocks: [
        { type: 'p', text: 'PX65 drukuje na etykietach, biletach, przywieszkach i materiałach ciągłych w różnej postaci — samoprzylepnych z podkładem, bez kleju, z przerwami albo z **czarnym znacznikiem**. Sposób zakładania zależy od trybu pracy. W trybie **odrywania (tear-off, prosty tor)** wydruki odrywasz ręcznie na listwie odrywania. Aby założyć rolkę:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i otwórz drzwi przednie oraz pokrywę nośnika;',
          'pociągnij w dół **dźwignię blokującą (locking handle)** — to krok charakterystyczny dla PX65;',
          'unieś głowicę, obracając **dźwignię podnoszenia głowicy** w lewo (przeciwnie do ruchu wskazówek zegara);',
          'zdejmij pusty rdzeń z piasty podającej; jeśli używasz rolki z rdzeniem **76 mm (3 cale)**, załóż na piastę odpowiednią przejściówkę;',
          'nałóż nową rolkę na piastę podającą i dosuń ją do oporu;',
          'poprowadź nośnik pod **napinaczem (slack absorber)** w stronę mechanizmu druku, a następnie przez zespół druku do oporu;',
          'opuść głowicę, obracając dźwignię w prawo (zgodnie z ruchem wskazówek zegara);',
          'unieś z powrotem dźwignię blokującą (PX65);',
          'dopasuj **czerwone prowadnice krawędziowe** tak, by nośnik prowadził się z minimalnym luzem;',
          'zamknij drzwi przednie i pokrywę nośnika, upewniając się, że nośnik wychodzi szczeliną w drzwiach przednich.',
        ] },
        { type: 'p', text: 'W trybie odrywania można dodatkowo zainstalować opcjonalny **czujnik pobrania etykiety (Label Taken Sensor)**, dzięki któremu kolejna kopia nie wydrukuje się, dopóki nie odbierzesz poprzedniej.' },
      ],
    },
    {
      title: 'Tryby wydawania: odklejanie, obcinanie, nawijanie, podajnik zewnętrzny',
      blocks: [
        { type: 'p', text: 'PX65 obsługuje kilka trybów wydawania, zależnie od zainstalowanych opcji:' },
        { type: 'list', items: [
          '**odklejanie (peel-off, self-strip)** — etykiety samoprzylepne są oddzielane od podkładu zaraz po wydruku; wymaga opcjonalnego zespołu odklejającego, dotyczy tylko etykiet z podkładem i nie współpracuje z prowadnicą nośnika składanego; po wyciągnięciu ok. **40 cm (15 cali)** etykiet zdejmuje się je z podkładu, prowadzi podkład wokół listwy odrywania z powrotem pod zespół druku i mocuje czerwonym zaciskiem na piaście nawijającej;',
          '**obcinanie (cut-off)** — z zainstalowanym obcinaczem nośnik jest automatycznie odcinany ok. **37 mm (1,5 cala)** przed linią druku; przeznaczony do papierowych materiałów ciągłych i podkładu między etykietami (nie do cięcia przez sam klej); montaż obcinacza wymaga zdjęcia drzwi przednich;',
          '**nawijanie wewnętrzne (internal batch takeup)** — zadrukowane etykiety lub bilety są nawijane wewnątrz drukarki; wymaga fabrycznie montowanego modułu nawijającego, który mieści **30–40%** pełnej rolki; listwę odrywania zastępuje się wówczas płytą prowadzącą;',
          '**podajnik zewnętrzny (external supply)** — nośnik składany (fanfold) podaje się od tyłu, najlepiej z opcjonalną prowadnicą regulowaną do szerokości od **40 mm (1,57 cala)**.',
        ] },
        { type: 'p', text: 'Uwaga: krawędzie obcinacza obracają się po włączeniu i restarcie drukarki — trzymaj z dala palce, podczas pracy zostaw obcinacz zamknięty, a przed czyszczeniem odłącz zasilanie. Nigdy nie podłączaj ani nie odłączaj obcinacza przy włączonej drukarce.' },
      ],
    },
    {
      title: 'Ładowanie taśmy termotransferowej (ribbon)',
      blocks: [
        { type: 'p', text: 'Druk termotransferowy daje wydruk **trwalszy i odporniejszy** na oleje, chemikalia, ciepło i światło słoneczne niż druk termiczny — wymaga jednak założenia taśmy (ribbonu) dopasowanej do używanych etykiet. PX65 obsługuje taśmy nawinięte stroną barwiącą **do wewnątrz (ink-in)** lub **na zewnątrz (ink-out)**.' },
        { type: 'p', text: 'Aby sprawdzić kierunek nawinięcia, połóż taśmę na kartce i zarysuj ją ostrym przedmiotem — jeśli na papierze pojawi się ślad, taśma jest nawinięta barwą na zewnątrz (ink-out).' },
        { type: 'p', text: 'Aby założyć taśmę:' },
        { type: 'list', ordered: true, items: [
          'otwórz drzwi przednie i pokrywę nośnika, a następnie pociągnij w dół dźwignię blokującą (PX65);',
          'unieś głowicę, obracając dźwignię podnoszenia głowicy w lewo;',
          'zdejmij resztki taśmy i pusty rdzeń z piasty podającej taśmę;',
          'dopasuj **szpulę podającą taśmę** do jej szerokości — dla taśmy **55–60 mm** zatrzaśnij szpulę w pierwszym (wewnętrznym) rowku, dla **88–90 mm** w drugim, a dla **110 mm** w trzecim (zewnętrznym) rowku;',
          'nasuń rolkę taśmy na szpulę podającą, poprowadź taśmę przez zespół druku i wyciągnij około **20 cm (8 cali)** jej początku;',
          'nie zwalniając taśmy, obróć dźwignię głowicy w prawo, by opuścić głowicę i zablokować taśmę;',
          'nałóż początkowy rdzeń kartonowy na **piastę nawijającą** (podczas druku obraca się ona w lewo);',
          'unieś ponownie głowicę i nawijaj taśmę, aż przezroczysty początek (leader) przejdzie pod głowicą, a taśma się napręży;',
          'opuść głowicę, unieś z powrotem dźwignię blokującą (PX65) i zamknij drzwi przednie oraz pokrywę nośnika.',
        ] },
        { type: 'p', text: 'Po założeniu taśmy ustaw drukarkę na tryb termotransferowy (patrz kolejna sekcja). Dobierz typ taśmy do rodzaju powierzchni etykiety — to klucz do trwałego, czystego wydruku.' },
      ],
    },
    {
      title: 'Metody druku: termotransferowy a termiczny bezpośredni',
      blocks: [
        { type: 'p', text: 'PX65 może drukować w trybie **termotransferowym (TTR)** — z taśmą, albo **termicznym bezpośrednim (DT)** — bez taśmy, na nośniku czułym na ciepło. Tryb dobierasz do rodzaju etykiet i wymaganej trwałości: druk z taśmą jest trwalszy i odporniejszy na czynniki zewnętrzne, druk termiczny bezpośredni nie wymaga materiału eksploatacyjnego, ale wydruk jest mniej odporny.' },
        { type: 'p', text: 'Metodę druku ustawisz najszybciej kreatorem **Media Setup** (Menu główne → Wizards → Printing → Media Setup), wybierając **DT** lub **TTR** wraz z szerokością, długością i marginesem (X) nośnika oraz prędkością druku. Jeśli drukarka jest skonfigurowana na druk termiczny, a w środku znajduje się taśma, pojawi się alert **Ribbon Installed** — wówczas wyjmij taśmę albo przełącz drukarkę na tryb termotransferowy.' },
      ],
    },
    {
      title: 'Smart Calibration i kreatory kalibracji',
      blocks: [
        { type: 'p', text: 'Po założeniu nośnika i taśmy skalibruj czujniki, by drukarka prawidłowo rozpoznawała **przerwy między etykietami** lub **czarne znaczniki**. PX65 ma funkcję **Smart Calibration**, która automatycznie wykrywa typ nośnika (przerwa, czarny znacznik lub materiał ciągły), rozpoznaje metodę druku (z taśmą lub bez) i kalibruje długość etykiety — dzięki temu zużywa mniej materiału na konfigurację.' },
        { type: 'p', text: 'Smart Calibration jest dostępna jako działanie domyślne m.in. dla zdarzeń **Power Up Action**, **Head Down Action** oraz **Hold Print/Feed Button** — najprościej więc **przytrzymać przycisk Print/Feed** na ekranie gotowości. Pełną kalibrację uruchomisz też kreatorem **Wizards → Calibration → Media**, który skalibruje czujnik zatrzymania etykiety i pokaże bieżące ustawienia druku.' },
        { type: 'p', text: 'Jeśli zainstalowano opcjonalny czujnik pobrania etykiety lub podajnik etykiet, użyj kreatora **Wizards → Calibration → Label Taken Sensor** — najlepiej przy każdej zmianie nośnika lub po przeniesieniu drukarki do innego otoczenia. Datę i godzinę skalibrujesz kreatorem **Date & Time**.' },
      ],
    },
    {
      title: 'Regulacja ramienia dociskowego i czujnika zatrzymania',
      blocks: [
        { type: 'p', text: 'Drukarka jest fabrycznie ustawiona pod pełną szerokość nośnika. Dla węższego materiału wyreguluj **ramię dociskowe (pressure arm)**, by docisk rozkładał się równomiernie — źle ustawione ramię daje jaśniejszy wydruk po jednej stronie toru nośnika.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę, otwórz drzwi przednie i pokrywę nośnika, w razie potrzeby wyjmij taśmę;',
          'poluzuj pokrętło mocujące ramię dociskowe;',
          'przesuwaj ramię (chwytając je przy pokrętle, nie przy końcówce) do wewnątrz lub na zewnątrz, aż strzałka na końcówce znajdzie się na środku nośnika;',
          'dokręć pokrętło, dopasuj prowadnice krawędziowe, w razie potrzeby załóż taśmę i zamknij drzwi oraz pokrywę.',
        ] },
        { type: 'p', text: 'Czujnik zatrzymania etykiety / czarnego znacznika (**Label Stop Sensor, LSS**) musi być wyrównany z przerwami, wycięciami lub znacznikami nośnika. Przesuwa się go bocznie od wewnętrznej krawędzi toru do **50 mm (1,96 cala)** na zewnątrz (linia środkowa pełnej szerokości) za pomocą **śruby regulacyjnej**: obrót w prawo przesuwa czujnik do środka, w lewo — na zewnątrz. Przy podniesionej głowicy sprawdź od przodu, czy punkt detekcji pokrywa się ze środkiem przerw lub znaczników; pomocne są podziałki co **1 cm** na dolnej płycie prowadzącej, szczególnie przy czarnych znacznikach.' },
      ],
    },
    {
      title: 'Ustawienia druku: prędkość, kontrast i docisk głowicy',
      blocks: [
        { type: 'p', text: 'Parametry druku zmienisz w **Settings → ...** lub najszybciej kreatorem **Media Setup**. Najważniejsze to: typ nośnika i metoda druku (DT/TTR), szerokość i długość etykiety, margines (**X-start**), wartości Start/Stop Adjust, prędkość druku oraz **kontrast/zaczernienie (darkness)**.' },
        { type: 'p', text: 'Zbyt niski kontrast daje blady wydruk, zbyt wysoki — rozlewanie się druku i marszczenie taśmy; dobierz wartość do nośnika i taśmy. Jeśli treść wydruku jest ściśnięta, zmniejsz prędkość druku. Najlepsze ustawienie szybko wskaże kreator **Wizards → Printing → Print Quality**, który drukuje serię etykiet do porównania.' },
        { type: 'p', text: 'Docisk głowicy (printhead pressure) reguluje się **pokrętłem** przy zmianie grubości nośnika: obrót w prawo zwiększa docisk i przyciemnia wydruk **(+)**, obrót w lewo zmniejsza go i rozjaśnia **(−)**. Nie ustawiaj większego docisku niż to konieczne — przyspiesza on zużycie głowicy. Aby wrócić do ustawienia fabrycznego, dokręć pokrętło maksymalnie **(+)**, a następnie poluzuj je o **cztery pełne obroty (−)**. Po założeniu nośnika wydrukuj **etykietę testową** (Menu główne → Tools → Test Labels), aby potwierdzić poprawność instalacji i jakość druku.' },
      ],
    },
    {
      title: 'Podłączenie do komputera',
      blocks: [
        { type: 'p', text: 'PX65 ma wbudowane interfejsy **USB**, **RS-232** i **Ethernet**, a opcjonalnie **Wi-Fi**. Do komputera podłączysz drukarkę na kilka sposobów:' },
        { type: 'list', items: [
          '**USB** — najpierw zainstaluj sterownik (InterDriver), a po wyświetleniu monitu połącz port urządzenia USB z tyłu drukarki z komputerem; do jednego komputera podłączaj tylko jedną drukarkę, bezpośrednio lub przez koncentrator (nie trzeba ustawiać żadnych parametrów USB);',
          '**szeregowo (RS-232)** — kablem DB9–DB9 między gniazdem drukarki a portem COM komputera; w razie potrzeby dopasuj konfigurację portu szeregowego komputera do drukarki;',
          '**sieciowo** — przez Ethernet lub Wi-Fi (patrz kolejna sekcja).',
        ] },
        { type: 'p', text: 'Drukarka ma też porty **USB host**, do których podłączysz: pamięć USB (jedna partycja, **FAT16/FAT32** — do wgrywania aplikacji, czcionek, obrazów, profili i aktualizacji firmware), klawiaturę (do wysyłania poleceń Fingerprint) lub skaner kodów współpracujący z aplikacją Smart Printing.' },
      ],
    },
    {
      title: 'Konfiguracja sieci: Ethernet i Wi-Fi',
      blocks: [
        { type: 'p', text: 'Do **sieci Ethernet** podłącz kabel do portu z tyłu drukarki (obsługiwane **10/100 Mb/s**). Drukarka domyślnie pobiera adres IP z sieci (**DHCP**) — po starcie adres IP pojawia się w lewym dolnym rogu ekranu. Bez serwera DHCP ustaw statyczny adres ręcznie w **Settings → Communications → Ethernet → IPv4 lub IPv6**. Połączenie sieciowe udostępnia m.in. serwer FTP, stronę WWW, obsługę alertów oraz komunikację przez Telnet i InterDriver.' },
        { type: 'p', text: 'Połączenie **Wi-Fi** wymaga zainstalowanej opcjonalnej karty radiowej **802.11**. W sieciach z zabezpieczeniami możesz wgrać **certyfikaty uwierzytelniające**: ustaw datę i godzinę, prześlij certyfikat przez FTP do katalogu certyfikatów, a następnie zainstaluj go skryptem **certinstall.sh** przez sesję Telnet i wskaż plik **.pem** do zabezpieczenia.' },
        { type: 'p', text: 'Większość ustawień konfiguruje się wygodnie przez **stronę WWW drukarki**: w przeglądarce wpisz adres IP drukarki, kliknij Login i zaloguj się (domyślnie użytkownik **itadmin**, hasło **pass** — po zalogowaniu zmień je).' },
      ],
    },
    {
      title: 'Sterowniki i narzędzia konfiguracyjne',
      blocks: [
        { type: 'p', text: 'Aby używać drukarki z aplikacjami Windows, zainstaluj **sterownik Honeywell (InterDriver)** pobrany z portalu pomocy technicznej Honeywell (Software → Printers → Printer Software and Drivers → Print Drivers). Choć Windows potrafi wykryć drukarkę po podłączeniu przez USB, sterownik i tak jest wymagany do poprawnej pracy.' },
        { type: 'p', text: 'Ustawienia drukarki przeglądasz i zmieniasz na cztery sposoby: ze **strony WWW**, z **menu głównego** na ekranie dotykowym, aplikacją **PrintSet 5** albo **komendami programistycznymi** wysyłanymi przez połączenie szeregowe lub sieciowe. Oprogramowanie do projektowania etykiet oraz sterowniki pobierzesz z portalu Honeywell (sps.honeywell.com).' },
      ],
    },
    {
      title: 'RFID UHF',
      blocks: [
        { type: 'p', text: 'PX65 może zostać wyposażona w opcjonalny **moduł RFID** (płyta interfejsu RFID), pozwalający kodować inteligentne etykiety podczas druku. Nośnik z wszytym znacznikiem RFID jest nieco grubszy w miejscu chipa, co może wpływać na jakość druku.' },
        { type: 'p', text: 'Aby uzyskać najlepsze efekty: po założeniu nośnika RFID **zrestartuj drukarkę** lub uruchom TESTFEED, by rozpoznała typ nośnika; w razie potrzeby skoryguj zmienną **TAGADJUST**, aby etykiety były właściwie wyrównane z anteną; w miarę możliwości unikaj druku na najgrubszej części etykiety. Do etykiet termotransferowych RFID używaj wysokiej jakości taśmy.' },
        { type: 'p', text: 'W języku **Fingerprint** rozpocznij od kontrastu (darkness) ustawionego na **65** i czułości nośnika **High**, a do zapisu znaczników Gen 2 poleceniem TAG FIELD ustaw parzyste wartości parametrów start i length. W języku **IPL** rozpocznij od czułości **565** i również stosuj parzyste wartości start/length przy zapisie znaczników Gen 2.' },
      ],
    },
    {
      title: 'Języki drukarki, ZPL-II i Smart Printing (C#)',
      blocks: [
        { type: 'p', text: 'PX65 obsługuje wiele języków drukarki i symulatorów, dzięki czemu można ją wpiąć w istniejące środowisko bez zmian po stronie systemu nadrzędnego. Dostępne są: **Autosense** (automatyczne rozpoznawanie języka etykieta po etykiecie, z wykrywaniem DP, ZSim i DPL), **Fingerprint (FP)**, **Direct Protocol (DP)**, **IPL**, **ZSim** (symulacja **ZPL-II** i nowszych programów Zebra), **DPL** (Datamax) oraz **Smart Printing (C#)**.' },
        { type: 'p', text: 'Jeśli wysyłasz do drukarki pliki etykiet w **ZPL-II**, ustaw język na **ZSim**; dla plików Datamax wybierz DPL, dla plików IPL — IPL, a do projektowania własnych etykiet z poziomu drukarki — Fingerprint. **Smart Printing (C#)** pozwala uruchamiać aplikacje druku bezpośrednio na drukarce, bez połączenia z komputerem; aby uruchamiać je samodzielnie, wybierz Fingerprint jako język drukarki.' },
        { type: 'p', text: 'Język zmienisz w Menu głównym (**Settings → System Settings → General → Command Language**) lub ze strony WWW (Configure → System Settings → General); po zmianie uruchom drukarkę ponownie. Domyślnym ustawieniem jest **Autosense**, ale w środowisku korzystającym z jednego języka zaleca się ustawić go na stałe — zapewnia to lepszą zgodność. Możliwości drukarki rozszerza narzędzie **PrintSet 5** do konfiguracji i wgrywania zasobów.' },
      ],
    },
    {
      title: 'Wymiana głowicy QuickMount i wałka',
      blocks: [
        { type: 'p', text: 'Głowica drukująca zużywa się z czasem przez ciągłe nagrzewanie i stygnięcie — tempo zależy od rodzaju wydruków, nośnika i taśmy, energii podawanej na głowicę, prędkości druku oraz temperatury otoczenia. PX65 ma głowicę w systemie **QuickMount**: uchwyt głowicy trzyma się na **magnesie w ramieniu dociskowym**, dzięki czemu wymiana nie wymaga narzędzi. Firmware wykrywa nową głowicę przy ponownym uruchomieniu drukarki.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i otwórz drzwi przednie oraz pokrywę nośnika;',
          'pociągnij w dół dźwignię blokującą (PX65);',
          'unieś głowicę, obracając dźwignię podnoszenia głowicy w lewo, i wyjmij nośnik oraz taśmę;',
          'odciągnij uchwyt głowicy od magnesu w ramieniu dociskowym;',
          'odczep zaczepy uchwytu głowicy od wałka i wysuń głowicę na tyle, na ile pozwalają kable;',
          'odłącz **dwa kable** od głowicy (chwytaj za złącza, nie za kable; zwróć uwagę na zatrzask wewnętrznego złącza);',
          'podłącz oba kable do nowej głowicy i zaczep jej uchwyt na wałku, dbając, by kable nie blokowały mechanizmu;',
          'obróć dźwignię głowicy w prawo, aż magnes pochwyci uchwyt, unieś dźwignię blokującą (PX65), załóż nowy nośnik i taśmę.',
        ] },
        { type: 'p', text: 'Przed każdą wymianą części serwisowych odłącz przewód zasilający i nie wkładaj palców do mechanizmu druku przy włączonym zasilaniu.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy i toru nośnika',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie głowicy wydłuża jej żywotność i utrzymuje jakość druku — czyść głowicę **przy każdej wymianie nośnika**. Przed czyszczeniem **wyłącz drukarkę i odłącz ją od zasilania**.' },
        { type: 'p', text: 'Czyszczenie głowicy kartą czyszczącą:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz zasilanie, otwórz drzwi przednie i pokrywę nośnika;',
          'unieś głowicę, obracając dźwignię podnoszenia głowicy w lewo, i wyjmij nośnik oraz taśmę;',
          'wsuń większą część **karty czyszczącej** pod głowicę i opuść głowicę;',
          'wyciągnij kartę i unieś głowicę, a następnie odczekaj około **30 sekund**, aż płyn rozpuści zabrudzenia;',
          'powtórz czyszczenie, a w razie potrzeby użyj świeżej karty;',
          'uporczywy osad z wałka dociskowego lub listwy odrywania usuń patyczkiem nasączonym alkoholem izopropylowym;',
          'po wyschnięciu części załóż z powrotem nośnik i taśmę.',
        ] },
        { type: 'p', text: 'Czujnik zatrzymania etykiety jest zakryty dwiema przezroczystymi prowadnicami, przez które przechodzi światło czujnika — utrzymuj je wolne od kurzu, przyklejonych etykiet i resztek kleju. Jeśli drukarka zaczyna wysuwać etykiety nieprawidłowo, wyciągnij górną prowadnicę, sprawdź, czy nie blokuje jej zabrudzenie, i przetrzyj obie prowadnice kartą czyszczącą lub miękką szmatką z alkoholem izopropylowym, uważając, by ich nie zarysować. Nigdy nie używaj ostrych narzędzi do usuwania przyklejonych etykiet — głowica i wałki są delikatne.' },
      ],
    },
    {
      title: 'Konserwacja i czyszczenie obudowy',
      blocks: [
        { type: 'p', text: 'Aby utrzymać drukarkę w dobrej kondycji, czyść ją regularnie. Czyścić można głowicę, prowadnice nośnika oraz obudowę.' },
        { type: 'list', items: [
          'przed czyszczeniem zawsze odłącz przewód zasilający;',
          'nigdy nie spryskuj drukarki wodą i chroń ją przed wodą podczas mycia pomieszczeń;',
          'do obudowy używaj miękkiej szmatki lekko zwilżonej wodą lub łagodnym detergentem;',
          'stosuj wyłącznie zalecane środki czyszczące — alkohol izopropylowy jest łatwopalny, używaj go ostrożnie;',
          'nigdy nie wprowadzaj do drukarki ostrych ani spiczastych przedmiotów.',
        ] },
        { type: 'p', text: 'Prowadnice czujnika zatrzymania etykiety są przezroczyste; aby je wyczyścić, wyciągnij górną prowadnicę i (po naciśnięciu zatrzasku) dolną, przetrzyj je kartą czyszczącą lub szmatką z alkoholem izopropylowym, a po wyschnięciu załóż z powrotem.' },
      ],
    },
    {
      title: 'Komunikaty i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Drukarka może wysyłać **alerty konserwacyjne** (błędy, ostrzeżenia, informacje) na adres e-mail, jako pułapkę SNMP albo oboma kanałami — progi ustawisz na stronie WWW w **System Settings → Maintenance Alerts**, a sposób powiadamiania w **System Settings → General → Alert Notification Method**.' },
        { type: 'p', text: 'Typowe komunikaty i reakcje:' },
        { type: 'list', items: [
          '**Out of Ribbon / Out of Media** — załóż taśmę lub nośnik; **Ribbon Low / Media Low** — średnica rolki spadła poniżej progu, wymień materiał;',
          '**Ribbon Installed** — drukarka jest w trybie termicznym, a założono taśmę: wyjmij taśmę lub przełącz na tryb termotransferowy;',
          '**Printhead Lifted / Front Arm Lifted** — opuść głowicę lub ramię przednie; **Printhead Not Detected** — sprawdź montaż głowicy i podłączenie kabli;',
          '**Printhead Too Hot** — głowica się przegrzała, poczekaj na automatyczne wznowienie druku;',
          '**Label Not Taken** — etykieta zasłania czujnik pobrania: usuń ją lub skalibruj czujnik (LTS);',
          '**Clean Printhead / Replace Printhead / Faulty Dot** — osiągnięto próg licznika lub liczbę uszkodzonych punktów: wyczyść lub wymień głowicę.',
        ] },
        { type: 'p', text: 'Gdy wydruk jest blady — sprawdź ustawienie jakości nośnika, zwiększ kontrast lub docisk głowicy, a w ostateczności wymień głowicę. Jaśniejszy wydruk po jednej stronie popraw, regulując ramię dociskowe. Ciemne linie wzdłuż toru nośnika oznaczają zabrudzoną głowicę, a białe pionowe linie — zabrudzoną lub uszkodzoną głowicę: wyczyść ją lub wymień. Gdy nic nie drukuje się na materiale termotransferowym — strona barwiąca taśmy jest skierowana w złą stronę: przeładuj taśmę. Marszczenie lub rwanie taśmy popraw, sprawdzając kierunek nawinięcia (ink-in/ink-out), zmniejszając kontrast, regulując prowadnicę krawędziową, docisk i pozycję dźwigni oraz **napięcie taśmy** (śruba listwy napinającej: w prawo obniża listwę i zmniejsza napięcie, w lewo podnosi i zwiększa).' },
      ],
    },
    {
      title: 'Statystyki i licznik (odometr)',
      blocks: [
        { type: 'p', text: 'Na stronie WWW, w zakładce **System Information**, znajdziesz przydatne dane i statystyki: czas pracy i obciążenie procesora, wersje firmware i jądra, konfigurację i numery seryjne, stan pamięci flash i RAM, informacje o głowicy i taśmie, urządzeniach we/wy, adresie MAC i ustawieniach TCP/IP oraz o zainstalowanych czcionkach, kodach kreskowych i obrazach.' },
        { type: 'p', text: 'Osobno dostępny jest **licznik (odometr)** — pokazuje zużycie głowicy i porównuje bieżące wartości z progami alertów konserwacyjnych. Dzięki niemu zaplanujesz czyszczenie i wymianę głowicy, zanim spadnie jakość druku.' },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Ustawienia fabryczne przywrócisz na trzy sposoby. Ze **strony WWW**: zaloguj się i wybierz **Services → Restore Defaults**, zaznacz grupy ustawień do przywrócenia (ustawienia sieci, pliki użytkownika, ustawienia systemowe) i kliknij Restore, a następnie zrestartuj drukarkę.' },
        { type: 'p', text: 'Z **Menu głównego**: **Tools → Restore Defaults** — domyślnie zaznaczone są wszystkie grupy; możesz zachować ustawienia sieci, pliki użytkownika (aplikacje, czcionki) lub ustawienia systemowe, odznaczając odpowiednie pola, po czym potwierdzić i zrestartować drukarkę.' },
        { type: 'p', text: '**Reset sprzętowy**: wyłącz drukarkę i otwórz pokrywę nośnika, unieś głowicę dźwignią; włącz drukarkę, **przytrzymując przycisk Feed**, i zwolnij go, gdy pasek stanu jest niemal pełny — wszystkie ustawienia zostaną przywrócone. Na koniec opuść głowicę i zamknij pokrywę.' },
      ],
    },
    {
      title: 'Aktualizacja firmware',
      blocks: [
        { type: 'p', text: 'Sprawdzaj okresowo aktualizacje firmware — najnowsza wersja jest dostępna w portalu pomocy technicznej Honeywell (Software → Printers → Industrial). Firmware zaktualizujesz ze **strony WWW** (Services → Firmware Upgrade → wskaż plik → Upgrade), z **pamięci USB** albo programem **PrintSet 5**.' },
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
