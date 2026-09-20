import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie oficjalnego „CW-D3800 Series Przewodnik użytkownika”
// (Epson, M10002100 PL, 90 stron) oraz „CW-D3800 Series Technical Reference Guide” (EN).
// Zakres: nośniki, budowa, zakładanie papieru, przysłony, tusze i zbiornik na zużyty atrament,
// czyszczenie i automatyczna kontrola dysz, kalibracja czujników, ustawienia sterownika, sieć,
// narzędzia i SAP, komunikaty z panelu, problemy z jakością, zacięcia i dane techniczne.

export const epsonColorworksD3800ePl: PolishManual = {
  updatedAt: '2026-09-20',
  intro:
    'Najważniejsze z obsługi Epson ColorWorks D3800e po polsku: jaki papier wolno założyć, a jakiego nie, zakładanie rolki i składanki, ustawienie przysłon na płycie dociskowej, wymiana wkładów SJIC57P i zbiornika na zużyty atrament SJMB4000, czyszczenie głowicy, automatyczna kontrola dysz, kalibracja czujników, ustawienia sterownika, integracja z siecią i SAP, komunikaty z panelu oraz typowe problemy z jakością wydruku.',
  sections: [
    {
      title: 'Czym D3800e różni się od innych ColorWorks',
      blocks: [
        {
          type: 'p',
          text: 'D3800e drukuje **tuszem barwnikowym**, a nie pigmentowym jak reszta serii. Daje przez to głębszą czerń i szerszą paletę na papierze błyszczącym, ale nadruk gorzej znosi wilgoć i długie działanie światła. Do etykiet chłodniczych, chemicznych i takich, które mają przetrwać miesiące na półce, właściwsza jest [C4000e](/produkt/epson-colorworks-c4000e) z tuszem pigmentowym.',
        },
        {
          type: 'p',
          text: 'Głowica PrecisionCore drukuje w **300 × 600**, **600 × 600** albo **600 × 1200 dpi**. Prędkość zależy od trybu i szerokości: przy pasie 101,6 mm to kolejno **100, 70, 48 i 18 mm/s**, a przy wąskiej etykiecie 25,4 mm nawet 124 mm/s. Drukarka waży 13 kg, ma **Ethernet 1000BASE-T**, USB 2.0 i gniazdo na opcjonalny adapter Wi-Fi OT-WL06.',
        },
      ],
    },
    {
      title: 'Jakiego papieru nie wolno zakładać',
      blocks: [
        {
          type: 'p',
          text: 'To najczęstsza przyczyna zgłoszeń serwisowych, więc zaczynamy od niej. Poniższe nośniki blokują się w torze albo zostawiają plamy tuszu:',
        },
        {
          type: 'list',
          items: [
            '**Papier termiczny** — nie ma powleczenia pod tusz, nadruk się rozmazuje.',
            '**Papier sklejony taśmą** albo przymocowany taśmą do rdzenia rolki.',
            '**Arkusze formatu A i B** — drukarka pracuje na rolce albo składance, nie na ciętych arkuszach.',
            '**Podkład przezroczysty** — czujnik nie rozpozna przerwy między etykietami.',
          ],
        },
        {
          type: 'p',
          text: 'Drukarka przyjmuje papier zwykły, matowy, błyszczący, syntetyczny, przezroczystą folię błyszczącą oraz opaski na nadgarstek. Etykiety krótsze niż **10 mm** przy cięciu automatycznym potrafią przywierać do ostrza — przy takich formatach lepiej wyłączyć gilotynę.',
        },
      ],
    },
    {
      title: 'Budowa i panel',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu: **dźwignia zwalniania** przedniej pokrywy, pokrywa wkładów z atramentem, pokrywa zbiornika na zużyty atrament oraz **prowadnice wysuwania papieru** z dźwignią blokady — dopasowuje się je do szerokości etykiety, żeby wydruk nie uciekał na bok.',
        },
        {
          type: 'p',
          text: 'W środku są prowadnice rolki z własną dźwignią blokady i **przysłony na płycie dociskowej**, które ustawia się pod szerokość papieru. Z tyłu: prowadnice składanki, prowadnica podawania i tylna pokrywa. Złącza to zasilanie, LAN, USB typu B, USB typu A na adapter Wi-Fi oraz uchwyt kablowy, przez który warto przeprowadzić przewód USB, żeby się nie wypinał.',
        },
        {
          type: 'list',
          items: [
            'Dioda **zasilania** — świeci przy włączonej drukarce, miga podczas druku i ładowania atramentu.',
            'Dioda **Status** — świeci albo miga, gdy jest błąd.',
            'Dioda **wstrzymania** — świeci albo miga, gdy druk jest zatrzymany.',
            'Przyciski: zasilanie, ekran główny, powrót, **cięcie**, strzałki i **OK** do poruszania się po menu.',
          ],
        },
      ],
    },
    {
      title: 'Przysłony na płycie dociskowej',
      blocks: [
        {
          type: 'p',
          text: 'Element, o którym najłatwiej zapomnieć, a który psuje wydruk. Przysłony odsysają papier do płyty; te, które przy danej szerokości nośnika powinny zostać zamknięte, przy otwartych powodują **białe smugi przy krawędziach** i **zamazany wydruk**, bo strumień powietrza zaburza lot kropli.',
        },
        {
          type: 'p',
          text: 'Ustawienie przysłon jest opisane na naklejce w środku drukarki — po każdej zmianie szerokości papieru trzeba je przestawić zgodnie z tą naklejką.',
        },
      ],
    },
    {
      title: 'Wymiana wkładów z atramentem',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Otwórz pokrywę wkładów z atramentem.',
            'Naciśnij dźwignię w dół i wyjmij zużyty wkład.',
            '**Wstrząśnij nowym wkładem**: trzymaj go poziomo i poruszaj o około 5 cm w obie strony, mniej więcej 15 razy w ciągu 5 sekund. Bez tego kolor potrafi wyjść blado.',
            'Wyjmij wkład z worka i nie dotykaj styków ani otworu podawania tuszu.',
            'Wciśnij wkład w gnieździe za oznaczenie **Push**, aż kliknie.',
            'Zamknij pokrywę.',
          ],
        },
        {
          type: 'p',
          text: 'Poziom tuszu widać na panelu i w komputerze. Drukarka pracuje jeszcze po ostrzeżeniu o niskim poziomie — wymiany wymaga dopiero komunikat o pustym wkładzie. Wkład ma **6 miesięcy od zamontowania** i 3 lata od produkcji, więc przy małym zużyciu opłaca się kupować pojedyncze kolory, a nie komplety na zapas.',
        },
      ],
    },
    {
      title: 'Zbiornik na zużyty atrament SJMB4000',
      blocks: [
        {
          type: 'p',
          text: 'Zbiornik zbiera tusz z czyszczenia dysz. To materiał eksploatacyjny, nie awaria — wymienia się go bez narzędzi i bez serwisu.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Otwórz pokrywę zbiornika.',
            'Wyjmij stary zbiornik i włóż go do worka dołączonego do nowego.',
            'Wsuń nowy zbiornik do oporu.',
            'Zamknij pokrywę i naciśnij przycisk wstrzymania.',
            'Sprawdź na ekranie głównym, czy drukarka jest gotowa.',
          ],
        },
        {
          type: 'p',
          text: 'Przy okazji wymiany warto **wyczyścić płytę dociskową** — ściereczka z włókniny i płatki są dołączone do nowego zbiornika. Ten sam zbiornik SJMB4000 pasuje do [C4000e](/produkt/epson-colorworks-c4000e).',
        },
      ],
    },
    {
      title: 'Sprawdzanie dysz i czyszczenie głowicy',
      blocks: [
        {
          type: 'p',
          text: 'Białe poziome smugi na wydruku prawie zawsze oznaczają zatkane dysze, nie zużytą głowicę. Kolejność jest prosta: **wydrukuj wzór sprawdzania dysz**, oceń, których kolorów brakuje, i dopiero wtedy uruchom czyszczenie głowicy z panelu.',
        },
        {
          type: 'p',
          text: 'Jeśli po przeniesieniu drukarki kolory wychodzą pomieszane, to też zadanie dla czyszczenia głowicy — wibracje w transporcie mieszają tusz w dyszach. Każde czyszczenie zużywa tusz i zapełnia zbiornik na zużyty atrament, więc nie ma sensu powtarzać go w nieskończoność. Gdy po dwóch cyklach nadal brakuje koloru, głowica wymaga płukania w serwisie.',
        },
        {
          type: 'p',
          text: 'Poza głowicą czyści się też **płytę dociskową**, **nóż gilotyny** i obudowę. Przy nożu i płycie pomaga ta sama zasada co przy dyszach: lepiej czyścić regularnie niż reagować dopiero na plamy na etykiecie.',
        },
      ],
    },
    {
      title: 'Automatyczna kontrola dysz',
      blocks: [
        {
          type: 'p',
          text: 'D3800e ma funkcję, o której łatwo nie wiedzieć, a która oszczędza sporo zmarnowanych etykiet: **sama sprawdza dysze**. Test uruchamia się przy włączeniu drukarki, po zamknięciu przedniej pokrywy po zacięciu papieru, tuż przed zaplanowanym czyszczeniem oraz co zadaną liczbę wydruków.',
        },
        {
          type: 'p',
          text: 'Gdy wynik przekroczy ustawiony próg, drukarka sama czyści głowicę i powtarza test. Jeśli zatkania nie da się usunąć, **drukuje zastępczo sąsiednimi dyszami**, żeby nie zostawić białej linii w kodzie kreskowym. W menu można włączyć i wyłączyć tę kontrolę, ustawić częstotliwość, próg i to, czy po teście ma iść czyszczenie.',
        },
        {
          type: 'p',
          text: 'Producent zaznacza, że mechanizm nie wykrywa wszystkiego — pojedyncze brakujące krople i skrzywione strugi tuszu potrafią przejść. Przy wydrukach, od których dużo zależy, zaleca czcionki o wysokości **co najmniej 3 punktów** i pozostawienie fabrycznych ustawień kontroli dysz.',
        },
      ],
    },
    {
      title: 'Czyszczenie okresowe o zadanej godzinie',
      blocks: [
        {
          type: 'p',
          text: 'Drukarkę można ustawić tak, żeby czyściła głowicę o konkretnej porze — to najprostszy sposób na problem zaschniętych dysz w firmie, która drukuje nieregularnie. Czyszczenie trwa **od 4 do 17 minut**, więc nie ustawiaj go w środku zmiany.',
        },
        {
          type: 'list',
          items: [
            'Drukarka pracuje całą dobę — ustaw czyszczenie na porę bez druku, na przykład w nocy.',
            'Drukarka jest codziennie wyłączana — ustaw godzinę, o której urządzenie jest wyłączone; czyszczenie ruszy przy następnym włączeniu.',
            'Jest stała przerwa obiadowa — ustaw ją na tę godzinę.',
          ],
        },
        {
          type: 'p',
          text: 'Czyszczenie nie ruszy, gdy drukarka jest wyłączona, gdy tuszu jest za mało albo gdy w zbiorniku na zużyty atrament zostało za mało miejsca. W każdym z tych wypadków odbędzie się przy kolejnym włączeniu. Godzina ustawiona bliżej niż 10 minut od bieżącej zadziała dopiero następnego dnia.',
        },
      ],
    },
    {
      title: 'Kiedy drukarka nie widzi etykiet',
      blocks: [
        {
          type: 'p',
          text: 'W urządzeniu są dwa czujniki: jeden szuka krawędzi etykiety, drugi czarnego znacznika. Nietypowy nośnik potrafi być dla nich nieczytelny — wtedy zamiast zmieniać papier warto najpierw przestawić czułość: **[Menu] – [Maintenance] – [Calibration]**.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Simple Media Detect** — zmienia sam próg wykrywania, trwa krótko. Od tego zacznij.',
            '**Media Detect** — reguluje czułość obu czujników i próg. Sięgaj po nią dopiero wtedy, gdy prosta kalibracja nie pomogła.',
          ],
        },
        {
          type: 'p',
          text: 'Przy składance wyprostuj perforację przed kalibracją — załamanie na zgięciu potrafi udawać krawędź etykiety.',
        },
      ],
    },
    {
      title: 'Ustawienia sterownika, które realnie zmieniają wydruk',
      blocks: [
        {
          type: 'p',
          text: 'Pod przyciskiem **Advanced** w sterowniku Windows kryje się kilka rzeczy, po które warto sięgnąć, zanim uzna się nośnik albo drukarkę za winnego:',
        },
        {
          type: 'list',
          items: [
            '**Ink Profile** — gęstość tuszu w górę albo w dół. Pierwszy krok przy zbyt bladym lub zalanym wydruku.',
            '**Ratio of Black to Composite** — ile czerni ma pochodzić z czarnego tuszu, a ile ze złożenia kolorów. Wpływa na wygląd czarnych pól i na zużycie wkładów.',
            '**Bar Width Adjustment** — korekta grubości kresek przy wbudowanych fontach kodów kreskowych, gdy skaner ma problem z odczytem.',
            '**Media Hold Pressure** — siła, z jaką płyta przyciąga papier. Do cienkich i sztywnych nośników ustawia się ją inaczej.',
            '**Drying time per head pass** — dodatkowy czas na wyschnięcie tuszu; ratuje przy smużeniu na papierze błyszczącym.',
            '**Bidirectional Printing** — druk w obie strony jest szybszy, jednokierunkowy dokładniejszy przy drobnych detalach.',
          ],
        },
        {
          type: 'p',
          text: 'Osobno ustawia się, **co drukarka robi z papierem po wydruku**: odciąć po ostatniej etykiecie, odciąć na wskazanej etykiecie, nie ciąć i zatrzymać w pozycji odklejania albo cięcia. Domyślnie drukarka nie tnie i zatrzymuje papier w pozycji cięcia.',
        },
        {
          type: 'p',
          text: 'Pułapka przy wdrożeniu na kilku stanowiskach: ustawienia zmienione w **Preferencjach drukowania** albo we właściwościach na karcie Ogólne dotyczą tylko zalogowanego użytkownika. Żeby objęły wszystkich, trzeba je zmienić w **Domyślnych ustawieniach drukowania** na karcie Zaawansowane.',
        },
      ],
    },
    {
      title: 'Sieć, narzędzia i integracja z systemem',
      blocks: [
        {
          type: 'p',
          text: 'Stan drukarki, ustawienia sieci i konserwację obsługuje **Web Config** — wystarczy przeglądarka i adres IP urządzenia. Flotą drukarek zarządza się przez **Epson Device Admin**, a druk z chmury obsługują **Epson Cloud Solution PORT** i **Loftware Cloud**. Sterowniki są na Windows, macOS i Linux.',
        },
        {
          type: 'p',
          text: 'Do sprawdzenia konfiguracji służy **arkusz stanu**: [Menu] – [General Settings] – [Network Settings] – [Network Status] – [Print Status Sheet]. Pokazuje wersję firmware, tryb druku i ustawienia wykrywania nośnika. Przy papierze ciągłym szerszym niż 101,6 mm arkusz zajmuje około 415 mm papieru, więc nie drukuj go na resztce rolki.',
        },
        {
          type: 'p',
          text: 'Ważne przy wdrożeniach **SAP**: D3800e obsługuje druk pośredni (Indirect) i wysokowolumenowy (High Volume), ale **nie obsługuje druku bezpośredniego (Direct)**, który jest standardową metodą w SAP. Jeśli integracja ma iść przez Direct printing, potrzebna jest [C6000 albo C6500](/kolorowe-drukarki-etykiet).',
        },
        {
          type: 'p',
          text: 'W produkcji przydaje się też **Lock Setting** — blokada panelu, która nie pozwala operatorowi zmienić ustawień nośnika czy jakości. Drukarka drukuje wtedy zawsze tak samo, niezależnie od tego, kto stoi przy niej na zmianie.',
        },
      ],
    },
    {
      title: 'Komunikaty na panelu',
      blocks: [
        {
          type: 'list',
          items: [
            '**Błąd podawania papieru** — załadowany nośnik nie zgadza się z ustawieniami Źródło nośnika i Forma nośnika w sterowniku. Zmień papier albo ustawienia.',
            '**Nie można wykryć papieru określonego w ustawieniu Wykrywanie nośnika** — czujnik szuka przerwy, a w drukarce leży papier ciągły (albo odwrotnie).',
            '**Kalibracja nie powiodła się** — metoda wykrywania nie pasuje do nośnika. Kalibracja nie zadziała też, gdy odstęp między etykietami przekracza **6 mm**.',
            '**Niedostęp** po naciśnięciu cięcia — papier jest już odcięty w tym miejscu. Podaj papier wydrukiem albo przyciskiem podawania.',
            '**Błąd konserwacji: pojemnik z tuszem nie został prawidłowo zainstalowany** — wkład siedzi krzywo albo jest pusty. Wyjmij go i wciśnij ponownie za oznaczenie Push.',
            '**Zacięcie papieru** — patrz kolejna sekcja.',
          ],
        },
      ],
    },
    {
      title: 'Problemy z jakością wydruku',
      blocks: [
        {
          type: 'list',
          items: [
            '**Białe poziome smugi** — zatkane dysze. Wydruk sprawdzający dysze, potem czyszczenie głowicy.',
            '**Białe albo czarne smugi** — źle założony papier albo ustawienie Media Coating Type w sterowniku niezgodne z materiałem.',
            '**Smugi przy krawędziach** i **zamazany wydruk** — otwarte przysłony, które przy tej szerokości papieru powinny być zamknięte.',
            '**Nieprawidłowe kolory** po przenosinach drukarki — czyszczenie głowicy.',
            '**Wydruk ucieka na bok** — prowadnice nie dociskają krawędzi papieru albo rolka nie jest wyśrodkowana.',
            '**Papier poplamiony tuszem** — zabrudzona płyta dociskowa; wyczyść ją ściereczką z zestawu dołączonego do zbiornika na zużyty atrament.',
          ],
        },
        {
          type: 'p',
          text: 'Osobna uwaga o kodach kreskowych: producent podaje dla nich węższy zakres temperatury pracy, **15–35 °C**, podczas gdy zwykły druk działa od 5 °C. W chłodnej hali kod potrafi nie przejść weryfikacji, choć etykieta wygląda dobrze.',
        },
      ],
    },
    {
      title: 'Zacięcia papieru',
      blocks: [
        {
          type: 'p',
          text: 'Instrukcja rozdziela dwie sytuacje: zablokowany **papier w rolkach** i zablokowaną **składankę**. W obu wypadkach wyłącz drukarkę, otwórz przednią pokrywę dźwignią zwalniania, wyjmij papier bez szarpania i sprawdź, czy w torze nie został skrawek etykiety albo kawałek podkładu.',
        },
        {
          type: 'p',
          text: 'Jeśli zacięcia wracają, sprawdź trzy rzeczy: czy etykiety nie odklejają się od podkładu w środku drukarki (zdarza się przy nietypowym wykrojeniu), czy prowadnice są ustawione na szerokość papieru i czy nośnik mieści się w dopuszczalnych parametrach.',
        },
      ],
    },
    {
      title: 'Dane techniczne',
      blocks: [
        {
          type: 'list',
          items: [
            'Druk: atramentowy szeregowy, cztery kolory, tusz **barwnikowy**.',
            'Rozdzielczość: 300 × 600, 600 × 600 i 600 × 1200 dpi.',
            'Prędkość przy pasie 101,6 mm: 100 / 70 / 48 / 18 mm/s zależnie od trybu jakości.',
            'Nóż automatyczny: pełne cięcie.',
            'Interfejsy: Ethernet **1000BASE-T**, USB 2.0 High-Speed, opcjonalnie Wi-Fi OT-WL06.',
            'Zasilanie: dedykowany zasilacz M248B, 42 V DC, 1,38 A. Pobór mocy: ok. 28,2 W w pracy, 2,6 W w gotowości, 0,13 W po wyłączeniu.',
            'Wymiary: 310 × 283 × 285 mm, waga ok. 13 kg.',
            'Warunki pracy: 5–35 °C (kody kreskowe 15–35 °C), wilgotność 20–80 % bez kondensacji, do 3000 m n.p.m.',
            'Głośność: do 58 dB.',
          ],
        },
      ],
    },
    {
      title: 'Materiały eksploatacyjne',
      blocks: [
        {
          type: 'p',
          text: 'Do europejskiej wersji **CW-D3800e** pasują wkłady [SJIC57P](/tusze-do-kolorowych-drukarek) w kolorach BK, C, M i Y oraz wersje SETUP dołączane do nowej drukarki. Wersja amerykańska CW-D3800u korzysta z SJIC56P — numery nie są zamienne, więc przy zamówieniu z zagranicznego sklepu warto to sprawdzić.',
        },
        {
          type: 'p',
          text: 'Zbiornik na zużyty atrament to **SJMB4000**. Z opcji producent wymienia kasetę na papier **OT-PT40** i adapter Wi-Fi **OT-WL06**. Epson odradza zamienniki: nie gwarantuje ich jakości, a naprawa uszkodzeń po nieoryginalnych materiałach nie wchodzi w zakres gwarancji.',
        },
      ],
    },
  ],
}
