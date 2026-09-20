import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie oficjalnego „CW-C6000 Series/CW-C6500 Series/
// CW-D6000 Series/CW-D6500 Series Przewodnik użytkownika" (Epson, 122 strony, M00123506 PL)
// oraz „CW-C6000/C6500 Technical Reference Guide" (EN, rev. P, 416 stron).
// Wybrane i przepisane pod model 8-calowy: etykiety do 211,9 mm, rolka do 6 cali, prędkości przy
// pełnej szerokości, wersje Ae i Pe, wybór czerni, SJIC36P, SJMB6000/6500, kontrola dysz,
// czyszczenie okresowe, ustawienia sterownika, kody kreskowe, port EXT I/O, SAP i ZPL II.

export const epsonColorworksC6500Pl: PolishManual = {
  updatedAt: '2026-09-20',
  intro:
    'Najważniejsze z obsługi Epson ColorWorks C6500 po polsku: co zmienia szerokość 212 mm, jak odczytać wersję z numeru modelu, wybór czarnego tuszu przy pierwszym uruchomieniu, dopuszczalne nośniki i limit średnicy rolki, zakładanie papieru w wersji z gilotyną i z odklejakiem, praca z odwijakiem, wymiana wkładów SJIC36P i zbiornika SJMB6000/6500, kontrola dysz i czyszczenie okresowe, ustawienia sterownika, port sterujący aplikatorem, integracja z SAP oraz komunikaty i zacięcia.',
  sections: [
    {
      title: 'Co zmienia szerokość 8 cali',
      blocks: [
        {
          type: 'p',
          text: 'C6500 to mechanicznie ta sama drukarka co C6000, tylko w wersji na szeroką wstęgę. Panel, menu, tusze, zbiornik i procedury czyszczenia są wspólne. Różnice, które widać w codziennej pracy, są cztery.',
        },
        {
          type: 'list',
          items: [
            'Etykieta ma **21,4–211,9 mm** szerokości zamiast 21,4–108 mm, a podkład do **215,9 mm**.',
            'Rolka może mieć **najwyżej 152,4 mm (6 cali) średnicy** — mniej niż w węższym C6000, który przyjmuje 8 cali. Szeroka wstęga jest po prostu za ciężka. Nośnika starcza więc na krócej, niż wynikałoby z rozmiaru maszyny.',
            'Przy pełnej szerokości druku prędkość spada: **85 mm/s** w trybie najszybszym wobec 119 mm/s na czterech calach.',
            'Drukarka waży **25,5 kg** (Ae) albo **26,3 kg** (Pe) i Epson wprost pisze, że przenoszą ją dwie osoby.',
          ],
        },
        {
          type: 'p',
          text: 'Wersja z odklejakiem ma jeszcze jedno ograniczenie od dołu: podkład musi mieć co najmniej **50,8 mm**, a etykieta **46,8 mm**. Wąskich etykiet C6500 z odklejakiem nie zrobi — do tego jest C6000 albo model biurkowy.',
        },
      ],
    },
    {
      title: 'Co mówi numer modelu',
      blocks: [
        {
          type: 'p',
          text: 'Cała rodzina ma ten sam schemat oznaczeń. W **CW-C6500Ae**:',
        },
        {
          type: 'list',
          items: [
            '**C** — tusz pigmentowy (**D**, czyli seria D6500, oznacza tusz barwnikowy).',
            '**5** — model 8-calowy (**0** to model 4-calowy, czyli C6000).',
            '**A** — gilotyna, Auto Cutter (**P** to odklejak, Peeler).',
          ],
        },
        {
          type: 'p',
          text: 'Końcówka to generacja wkładów: **Ae** i **Pe** biorą **SJIC36P**, starsze **Au** i **Pu** — SJIC35P, a warianty C6510–C6550 z innych rynków kolejne serie do SJIC40P. Numer modelu sprawdź, zanim zamówisz tusz; wkłady nie są zamienne między seriami.',
        },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i wybór czerni',
      blocks: [
        {
          type: 'p',
          text: 'Po ustawieniu języka, daty i godziny drukarka zadaje pytanie, na które odpowiada się raz w życiu maszyny: **czerń błyszcząca (BK) czy matowa (MK)**. Po zamontowaniu wkładów i rozpoczęciu napełniania głowicy zmiana nie jest możliwa.',
        },
        {
          type: 'p',
          text: 'Wybór przesądza o liście dopuszczalnych nośników:',
        },
        {
          type: 'list',
          items: [
            '**MK** — papier zwykły, papier matowy, syntetyki, papier teksturowany.',
            '**BK** — papier matowy, syntetyki, papier błyszczący, folia błyszcząca przezroczysta, papier o wysokim połysku.',
            'Papier matowy i syntetyk działają z obiema czerniami. Papier zwykły i teksturowany tylko z MK, błyszczący i folia tylko z BK.',
          ],
        },
        {
          type: 'p',
          text: 'Przy typowym zastosowaniu C6500 — etykiety GHS na kanistry, oznaczenia beczek, opisy kartonów zbiorczych — najczęściej wychodzi **MK**: podłoże jest matowe albo syntetyczne, a etykieta ma być czytelna, nie efektowna. **BK** ma sens tam, gdzie szeroka etykieta jest jednocześnie etykietą handlową na błyszczącym papierze.',
        },
        {
          type: 'p',
          text: 'Napełnianie głowicy trwa około **19 minut**. Przez ten czas nie otwieraj pokryw i nie wyłączaj zasilania — przerwane ładowanie zużywa dużo tuszu i potrafi skończyć się wymianą wkładów albo zbiornika jeszcze przed pierwszym wydrukiem.',
        },
        {
          type: 'youtube',
          id: 'IL2g3yWFtqE',
          caption: 'Pierwsze napełnianie układu tuszem (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Jaki papier wchodzi do C6500',
      blocks: [
        {
          type: 'list',
          items: [
            'Szerokość podkładu **25,4–215,9 mm**, szerokość etykiety **21,4–211,9 mm**.',
            'W wersji z odklejakiem: podkład od **50,8 mm**, etykieta od **46,8 mm**.',
            'Długość etykiety **8–609,6 mm**; przy automatycznym cięciu minimum to **15 mm**.',
            'Odstęp między etykietami **2–6 mm**, odpad po bokach 2 ± 0,5 mm, zaokrąglenie narożnika do 1,5 mm.',
            'Grubość nośnika **0,12–0,24 mm**.',
            'Rolka: rdzeń **76,2 mm** (3 cale), średnica zewnętrzna **do 152,4 mm** (6 cali), nawinięta **stroną zadrukowaną na zewnątrz**.',
          ],
        },
        {
          type: 'p',
          text: 'Czego nie zakładać: papieru termicznego, arkuszy formatu A i B, papieru sklejanego taśmą, nośnika z dziurkami albo wycięciami w podkładzie oraz podkładu przezroczystego, którego czujnik nie odczyta.',
        },
        {
          type: 'p',
          text: 'Przy szerokiej wstędze dwa zalecenia producenta robią większą różnicę niż w modelach wąskich. **Nie przyklejaj końca papieru do rdzenia** — drukarka nie wykryje końca rolki i zmarnuje kilkanaście etykiet, a przy formacie 212 mm to już realny koszt. I pilnuj płaskości nośnika: syntetyk na podkładzie papierowym oraz podkład z laminatem polietylenowym pracują przy zmianach wilgotności, a im szersza wstęga, tym łatwiej falujący brzeg ociera o głowicę.',
        },
      ],
    },
    {
      title: 'Budowa i panel',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu: pokrywa przednia (zacięcia), dwie pokrywy wkładów — lewa na czarny i magentę, prawa na cyjan i żółty, pokrywa zbiornika na zużyty atrament i pokrywa papieru. W wersji Pe dochodzi pokrywa mechanizmu ściągania etykiet z czujnikiem sprawdzającym, czy odklejona etykieta została zabrana.',
        },
        {
          type: 'p',
          text: 'Pokrywę papieru otwiera się dźwignią z przodu (rolka, zbiornik, czyszczenie, zacięcia) albo dźwignią z tyłu (podawanie z zewnątrz). W środku ruchoma prowadnica z niebieską dźwignią, dźwignia zwalniania rolek dociskowych i odsuwana jednostka prowadnicy. Z tyłu zasilanie, USB, LAN 1000BASE-T, złącze **EXT I/F (D-sub25)** i otwór wentylacyjny — zostaw przed nim **co najmniej 10 cm**.',
        },
        {
          type: 'p',
          text: 'Na panelu poza ekranem i diodami (zasilanie, Status, Pause) są przyciski **Feed** i **Back Feed** do podawania i cofania wstęgi, **Pause** kasujący stan wstrzymania po błędzie, a zależnie od wersji **Cut** albo **Peeler Reset**. Wersję oprogramowania znajdziesz w **Menu – Stan drukarki/Drukowanie – Wersja firmware**; firmware TS05JC, TS06JC, TS26JC, TS19K2, TS25K3 i TS21K5 Epson zaleca zaktualizować.',
        },
      ],
    },
    {
      title: 'Zakładanie rolki od wewnątrz',
      blocks: [
        {
          type: 'p',
          text: 'Ustaw **Źródło nośnika** na **Wewnętrzne** i otwórz pokrywę papieru dopiero po pojawieniu się ekranu głównego. Otwarta wcześniej potrafi rozstroić ładowanie.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Wyjmij trzpień obiema rękami — przy sześciocalowej rolce to kilka kilogramów, więc rób to nad obudową, nie na wyciągniętych rękach.',
            'Nałóż rolkę zgodnie z kierunkiem nawinięcia narysowanym na trzpieniu i dosuń kołnierz bez luzu.',
            'Włóż trzpień z powrotem, pasując oba końce w uchwyty.',
            'Ściśnij niebieską dźwignię i odsuń ruchomą prowadnicę do prawej strony.',
            'Przeciągnij papier wzdłuż lewej prowadnicy, wygładź dłonią i dosuń ruchomą prowadnicę do krawędzi wstęgi — bez luzu i bez zaciskania.',
            'Wsuwaj wstęgę do podajnika, aż podawanie ruszy samo.',
            'Naciągnij papier, obracając trzpień, zamknij pokrywę i naciśnij **Pause**.',
          ],
        },
        {
          type: 'p',
          text: 'Na szerokim nośniku ustawienie prowadnicy jest ważniejsze niż gdziekolwiek indziej: kilka milimetrów luzu na 212 mm wstęgi przekłada się na wyraźnie ukośny wydruk i zacięcia. Samego podkładu bez etykiet drukarka nie wykryje i nie zacznie podawać.',
        },
        {
          type: 'youtube',
          id: 'ING_3NaSbz8',
          caption: 'Zakładanie rolki w wersji z gilotyną (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Wersja Pe: przewleczenie przez odklejak',
      blocks: [
        {
          type: 'p',
          text: 'Do miejsca naciągnięcia wstęgi procedura jest identyczna jak w wersji z gilotyną. Potem przytrzymaj **Feed**, aż krawędź papieru dotknie blatu, zerwij wysunięte etykiety, otwórz pokrywę mechanizmu ściągania i przeciągnij przez jego szczelinę sam podkład. Zanim zamkniesz pokrywę, dosuń papier dokładnie do wypustki prowadzącej — przy szerokiej etykiecie nierówne ułożenie od razu widać na wydruku. Na koniec naciągnij wstęgę i naciśnij **Pause**.',
        },
        {
          type: 'p',
          text: 'Wersja Pe pracuje wyłącznie z rolką zakładaną od wewnątrz; składanki z zewnątrz nie poda. Mechanizm ściągania zbiera klej i pył papierowy, więc producent zaleca **codzienne czyszczenie rolki**.',
        },
        {
          type: 'youtube',
          id: 'ZfKCHLq3cS8',
          caption: 'Zakładanie rolki w wersji z odklejakiem (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Podawanie z zewnątrz: składanka, odwijak, nawijak',
      blocks: [
        {
          type: 'p',
          text: 'Skoro rolka w środku ogranicza się do 6 cali, przy pracy ciągłej C6500 najczęściej pracuje z zewnętrznym odwijakiem. Przełącz **Źródło nośnika** na **Podawanie od tyłu**, wyjmij trzpień i ustaw źródło papieru **co najmniej 100 mm** za drukarką, prostopadle do podajnika. Składankę układa się pionowo i tak, żeby nie zwijała się przy samej drukarce.',
        },
        {
          type: 'youtube',
          id: 'qsyUyxUdh8w',
          caption: 'Podawanie papieru z zewnątrz drukarki (film Epsona, po angielsku)',
        },
        {
          type: 'p',
          text: 'Odwijaka i nawijaka Epson nie dostarcza, ale podaje warunki, przy których drukarka zachowuje dokładność podawania:',
        },
        {
          type: 'list',
          items: [
            'Naprężenie wstęgi po stronie odwijaka **do 2 N** i po stronie nawijaka **do 2 N**; przy nawijaniu samego podkładu w wersji Pe — **do 1 N**.',
            'Kąt podawania z odwijaka **15–30°**, wyprowadzenia do nawijaka **0–20°**; w wersji Pe etykieta odchodzi pod kątem do 45°, a podkład nawija się pod **45–90°**.',
            'Rdzeń na odwijaku o średnicy zewnętrznej **co najmniej 82 mm**; nie dopuszczaj do zwinięcia papieru o promieniu poniżej 1,5 cala ani w kierunku przeciwnym do nawinięcia rolki.',
            'Maksymalna prędkość podawania: **508 mm/s** przy jakości Max Speed i Speed, 254 mm/s przy Normal, 127 mm/s przy Quality, 25,4 mm/s przy Max Quality.',
          ],
        },
        {
          type: 'p',
          text: 'Stałe naprężenie jest ważniejsze od jego wartości — wahania psują podawanie bardziej niż mocniejszy, ale równy ciąg. Jeśli wstęga skręca jeszcze przed drukarką, poprawia się ustawienie odwijaka, nie prowadnic.',
        },
      ],
    },
    {
      title: 'Wymiana wkładów SJIC36P',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Otwórz lewą pokrywę wkładów (czarny, magenta) albo prawą (cyjan, żółty).',
            'Naciśnij dźwignię w dół i wyjmij zużyty wkład.',
            'Rozpakuj nowy i **wstrząśnij nim**: poziomo, o około 5 cm w obie strony, mniej więcej 15 razy w ciągu 5 sekund.',
            'Wsuń wkład w gniazdo i zamknij pokrywę.',
          ],
        },
        {
          type: 'p',
          text: 'Wkłady są te same co w C6000 — **SJIC36P** po 80 ml. Przy pełnej szerokości 212 mm schodzą jednak dwa razy szybciej niż na czterech calach, więc zapas liczy się w metrach kwadratowych nadruku, a nie w liczbie etykiet.',
        },
        {
          type: 'p',
          text: 'Wkład czarny zawsze wymieniaj na ten sam typ czerni — po włożeniu drugiego typu drukarka nie ruszy. Drukarka przerywa pracę, zanim wkład opróżni się do zera, żeby nie wpuścić powietrza do głowicy, więc resztka tuszu w zużytym wkładzie jest normalna. Każde wyjęcie i włożenie wkładu zużywa trochę tuszu na kontrolę układu. Otwarty wkład zużyj w ciągu **sześciu miesięcy**.',
        },
      ],
    },
    {
      title: 'Zbiornik na zużyty atrament SJMB6000/6500',
      blocks: [
        {
          type: 'p',
          text: 'Zbiornik zbiera tusz z czyszczeń głowicy; jego stan widać na ekranie głównym. Wymiana: otwórz pokrywę papieru, potem pokrywę zbiornika, wyjmij stary, włóż nowy, zamknij pokrywy. Zużyty zapakuj w worek dołączony do nowego.',
        },
        {
          type: 'p',
          text: 'Numer **SJMB6000/6500** jest wspólny dla C6000, C6500 oraz serii D6000 i D6500. Nowy zbiornik pasuje do każdej z nich, ale **używanego nie przekładaj między seriami** — producent ostrzega, że wpływa to na jego działanie.',
        },
      ],
    },
    {
      title: 'Sprawdzanie dysz i czyszczenie głowicy',
      blocks: [
        {
          type: 'p',
          text: 'Smugi, blade kolory i pogorszone kody zaczynaj od wzoru sprawdzania dysz: **Menu – Konserwacja – Spr. dyszy głow. druk.**, zakładka **Printer Utilities** w sterowniku albo **Web Config – Konserwacja – Wzór sprawdz. dyszy druk.**',
        },
        {
          type: 'p',
          text: 'Brakujące kreski we wzorze to sygnał do **Czyszcz. głow. druk.** Dopiero gdy to nie pomoże, uruchom **Czyszczenie zaawansowane** — zużywa dużo więcej tuszu. W trakcie czyszczenia nie wyłączaj drukarki i nie otwieraj pokryw; przy niskim poziomie tuszu czyszczenie się nie uruchomi.',
        },
        {
          type: 'p',
          text: 'Do **Web Config** logujesz się przez przeglądarkę: nazwa użytkownika pusta lub dowolna, hasło z pola **PASSWORD** na naklejce z tyłu drukarki.',
        },
      ],
    },
    {
      title: 'Automatyczna kontrola dysz',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka sama sprawdza dysze — po włączeniu, po zamknięciu pokrywy po zacięciu, o godzinie czyszczenia okresowego i **co zadaną liczbę wydruków**. Po przekroczeniu progu zatkania pokazuje komunikat i, jeśli tak ustawiono, od razu czyści głowicę.',
        },
        {
          type: 'list',
          items: [
            '**Interwał kontroli**: 1–13 000 wydruków, fabrycznie **500**. Licznik zeruje się po kontroli i po wyłączeniu drukarki.',
            '**Próg zatkania**: 0–16 dysz łącznie dla czterech kolorów, fabrycznie **6**.',
            '**Automatyczne czyszczenie po kontroli**: fabrycznie włączone.',
            '**Druk zastępczy**: brakujące krople dokładają sąsiednie dysze, maksymalnie za 16 dysz. Nie zadziała dobrze, gdy zatkane dysze sąsiadują ze sobą.',
          ],
        },
        {
          type: 'p',
          text: 'Przy szerokich etykietach z dużymi polami koloru warto skrócić interwał: im większe pokrycie, tym szybciej widać nawet pojedynczą zatkaną dyszę jako jasną linię przez całą wstęgę. Pamiętaj tylko, że czyszczenie obejmuje całą głowicę i za każdym razem zużywa tusz, a druk zastępczy opiera się na pomiarze z początku zadania — dysza zatkana w trakcie długiej serii nie zostanie podmieniona.',
        },
      ],
    },
    {
      title: 'Czyszczenie okresowe o zadanej godzinie',
      blocks: [
        {
          type: 'p',
          text: 'Czyszczenie okresowe trwa **3–14 minut** i blokuje drukowanie, dlatego godzinę startu ustawia się pod rytm pracy zakładu (fabrycznie 00:00, z dokładnością do minuty). O wyznaczonej porze zabieg rusza tylko wtedy, gdy drukarka jest włączona i sama uzna go za potrzebny.',
        },
        {
          type: 'list',
          items: [
            'Praca ciągła — ustaw godzinę na przerwę między zmianami albo środek nocy.',
            'Drukarka wyłączana na noc — ustaw porę, gdy jest wyłączona; czyszczenie wykona się przy najbliższym włączeniu.',
            'Nie ruszy przy zbyt niskim poziomie tuszu ani przy zapełnionym zbiorniku — przesunie się na następne włączenie.',
            'Godzina bliższa niż 10 minut od bieżącej zadziała dopiero **24 godziny później**.',
          ],
        },
      ],
    },
    {
      title: 'Czyszczenie mechaniki',
      blocks: [
        {
          type: 'p',
          text: 'Obudowę przecieraj suchą albo lekko zwilżoną ściereczką. Bez alkoholu, benzyny, rozcieńczalnika i rozpuszczalników ketonowych — odkształcają plastik i gumę. Wnętrze czyści się przy wyłączonym zasilaniu i wyjętym papierze.',
        },
        {
          type: 'list',
          items: [
            '**Nóż (wersja Ae)** — osad z kleju zeskrob płaskim śrubokrętem o końcówce **1,8–3,0 mm**, od obu końców ku środkowi, opierając końcówkę o dno szczeliny wysuwania. Przy 212 mm ostrza roboty jest więcej niż w modelach wąskich, więc nie skracaj tego zabiegu.',
            '**Mechanizm ściągania (wersja Pe)** — rolka, płatek z alkoholem, najlepiej codziennie.',
            '**Prowadnice papieru i płyta dociskowa** — płatek z alkoholem; na płycie czyść wyłącznie pole wskazane w instrukcji, po podniesieniu uchwytu na papier.',
            '**Rolka podajnika i rolka przytrzymująca** — tylko **klejącą stroną etykiety**: przyłóż, powoli odrywaj, obracaj rolkę ręką, aż zejdzie pył i klej. Inne materiały uszkadzają powierzchnię rolki.',
          ],
        },
        {
          type: 'p',
          text: 'Rolkę podajnika producent zaleca czyścić **raz w tygodniu**. To pierwsza rzecz do sprawdzenia przy zamazanych wydrukach i powtarzających się zacięciach.',
        },
        {
          type: 'youtube',
          id: 'vkf2puuW8k4',
          caption: 'Czyszczenie noża w wersji z gilotyną (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: '8yu7_egPL74',
          caption: 'Czyszczenie mechanizmu ściągania etykiet w wersji Pe (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'C06LvB3bE6U',
          caption: 'Czyszczenie płyty dociskowej (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'Ig2f5opUIpc',
          caption: 'Czyszczenie rolki podajnika papieru (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'O1bNKM3qJZg',
          caption: 'Czyszczenie rolki przytrzymującej papier (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'iXoz-g8EaSo',
          caption: 'Czyszczenie prowadnic papieru (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Kiedy drukarka nie widzi etykiet',
      blocks: [
        {
          type: 'p',
          text: 'Komunikaty „Nie można wykryć papieru rolkowego", „Nie można wykryć składanki" i „Kalibracja nie powiodła się" oznaczają rozjazd między ustawieniem **Wykrywanie nośnika** a założonym papierem. Tryby są trzy: wykrywanie odstępu (fabryczny), wykrywanie czarnego znacznika i brak wykrywania.',
        },
        {
          type: 'p',
          text: 'Jeśli błąd wraca po zmianie trybu, sprawdź same znaczniki: czarny znacznik musi sięgać **co najmniej 18,4 mm** od krawędzi bazowej, mieć **4–25,4 mm** długości i zostawiać minimum 4 mm czystego miejsca na etykiecie. Etykiety wykrojone o nietypowym kształcie, które potrafią odejść od podkładu w środku drukarki, wymagają ustawienia **czujników odstępu** — opisuje to Technical Reference Guide.',
        },
        {
          type: 'p',
          text: 'Pierwszą etykietę ustaw co najmniej **1,5 mm** od krawędzi podkładu, a pozycję cięcia co najmniej **0,7 mm** od krawędzi następnej etykiety.',
        },
      ],
    },
    {
      title: 'Ustawienia sterownika, które realnie zmieniają wydruk',
      blocks: [
        {
          type: 'p',
          text: 'Gdy ustawienia panelu i sterownika się różnią, obowiązują te ze **sterownika**. Pola, które najczęściej rozstrzygają o wyglądzie wydruku:',
        },
        {
          type: 'list',
          items: [
            '**Label width** — na C6500 ustawisz od 21,4 do **215,9 mm**; fabrycznie stoi na 108 mm, więc po pierwszym uruchomieniu trzeba je podnieść pod swój format.',
            '**Media Coating Type** — typ powleczenia. Niezgodny z papierem daje smugi, rozmazany tusz albo blady wydruk. Lista zależy od wybranej czerni.',
            '**Print Quality** — przestawia się samo po zmianie typu nośnika. Na papierze zwykłym i matowym: Max Speed (300 × 600 dpi), Speed i Normal (600 × 600), Quality (600 × 1200). Na błyszczącym i folii dochodzi **Max Quality 1200 × 1200 dpi**, znika Max Speed.',
            '**Left & Right gap** — margines boczny, fabrycznie 2 mm; powyżej tej wartości rośnie ryzyko zacięcia.',
            '**Settings For Paper Handling After Print** — w wersji Ae cięcie po ostatniej etykiecie, po wskazanej etykiecie, po ostatniej stronie kompletu albo zatrzymanie bez cięcia; w wersji Pe ręczne zdjęcie etykiety, automatyczne albo nawinięcie.',
            '**Media Hold Pressure** — docisk papieru, automatyczny albo ręczny 1–10. Przy szerokich i sztywnych nośnikach warto go ustawić ręcznie.',
            '**Banner Printing** — etykiety dłuższe niż 609 mm. Drukarka dzieli je na strony po maksymalnie 609 mm i łączy bez przerwy, do **3000 mm**. Na stykach widać przejście.',
          ],
        },
        {
          type: 'p',
          text: 'Etykiet krótszych niż **15 mm** nie da się ciąć automatycznie — drukarka sama zmienia wtedy odstęp cięcia na co drugą etykietę, żeby nie zablokować noża.',
        },
      ],
    },
    {
      title: 'Kody kreskowe: moduł i klasa ANSI',
      blocks: [
        {
          type: 'p',
          text: 'Epson podaje minimalne wielkości modułu dla klasy **ANSI C lub wyższej**. Reguła jest ta sama w całej serii: **papier zwykły wypada wyraźnie gorzej niż powlekany**, i to niezależnie od szerokości maszyny.',
        },
        {
          type: 'list',
          items: [
            'Przy 300 dpi kody liniowe (Code 39, Code 128, GS1-128, ITF, Codabar, Code 93, GS1 DataBar) wymagają modułu **3** na papierze matowym, syntetyku, błyszczącym, folii i wysokim połysku.',
            'Na **papierze zwykłym** ten sam kod potrzebuje modułu **4** poziomo i **5** pionowo, i osiąga najwyżej klasę D.',
            'Przy 600 dpi na nośnikach powlekanych moduł rośnie do **5** (poziomo) i 5–6 (pionowo), na papierze zwykłym do 7 i 10.',
            'Kody piętrowe (PDF417, MicroPDF, GS1 DataBar Stacked) przy 300 dpi: moduł **3** na powlekanych, **5** na papierze zwykłym.',
          ],
        },
        {
          type: 'p',
          text: 'Na szerokiej etykiecie kod zwykle ląduje z boku, przy krawędzi wstęgi — warto go wtedy sprawdzić czytnikiem po zmianie nośnika, bo to miejsce jest najbardziej czułe na ustawienie prowadnicy. I pamiętaj o pułapce ustawień: przy **Rotation Settings** ustawionym na **Normal** albo **Rotate 270 Degrees** kod w ogóle się nie wydrukuje, a kodów QR, Micro QR i MaxiCode nie da się obrócić z zakładki Options.',
        },
      ],
    },
    {
      title: 'Port EXT I/O: sterowanie aplikatorem',
      blocks: [
        {
          type: 'p',
          text: 'Złącze **D-sub25** z tyłu to wejście i wyjście dla automatyki — przez nie C6500 rozmawia z aplikatorem etykiet albo sterownikiem linii bez pośrednictwa komputera. Przy szerokich etykietach na kartony i beczki to najczęstszy sposób wpięcia drukarki w linię pakowania.',
        },
        {
          type: 'list',
          items: [
            'Sygnały wyjściowe: koniec wydruku, gotowość danych, wykrycie brakujących punktów, konserwacja głowicy, gotowość drukarki, ostrzeżenie, błąd i pauza, niski poziom tuszu, koniec tuszu, koniec papieru.',
            'Sygnały wejściowe: pauza, czyszczenie głowicy, sprawdzenie brakujących punktów, podanie papieru, start wydruku, ponowny wydruk.',
            'Każdy sygnał ma własne ustawienie poziomu (niski, wysoki, impuls) i domyślnie jest wyłączony.',
          ],
        },
        {
          type: 'p',
          text: 'W wersji Pe dochodzi tryb **Peel-Off for Auto Labeler**: drukarka podaje etykietę pod aplikator i czeka na sygnał zamiast wysuwać ją do ręcznego zdjęcia. Pozycję odklejania można przesunąć o ±10,8 mm, osobno dla naklejania ręcznego i maszynowego.',
        },
      ],
    },
    {
      title: 'Zamiast monochromatycznej drukarki ZPL II',
      blocks: [
        {
          type: 'p',
          text: 'C6500 rozumie **ESC/Label** i **ZPL II**, więc można nią zastąpić czarno-białą drukarkę etykiet bez przepisywania aplikacji. W sterowniku jest osobne okno zamiany: wybierasz rozdzielczość starej drukarki, włączasz tryb monochromatyczny i korygujesz położenie wydruku. Przy starej drukarce **203 dpi** wybierz **200 dpi** i wpisz **−1,5** w przesunięciu pionowym i poziomym; przy tej samej rozdzielczości zostaw zera. Nowej drukarce nadaj adres IP starej — system nie zauważy podmiany.',
        },
        {
          type: 'p',
          text: 'Ciekawsze jest to, co ta zamiana zmienia w procesie. Do drukarki wgrywa się **obraz PNG drukowany pod danymi** z systemu. Zakład, który dotąd zamawiał w drukarni szerokie rolki z kolorowym tłem i dodrukowywał na nich czarne dane, wgrywa to samo tło do drukarki, zakłada czysty nośnik i robi jednym przebiegiem to, co wcześniej wymagało dwóch — bez zmiany danych i systemu po stronie komputera. Przy formacie 212 mm oznacza to też koniec magazynowania wielu wzorów szerokiej wstęgi naraz.',
        },
      ],
    },
    {
      title: 'Sieć, SAP i systemy nadrzędne',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka ma LAN 1000BASE-T (skrętka ekranowana) i USB 2.0. Ustawienia sieciowe wprowadza się z panelu, przez EpsonNet Config albo Web Config; raport połączenia i arkusz stanu drukuje się z **Menu – Stan drukarki/Drukowanie**. Obsługiwana jest też chmura **Loftware Cloud** — komunikat „Drukarka nie może się połączyć z usługą w chmurze" dotyczy tego połączenia.',
        },
        {
          type: 'p',
          text: 'Z SAP-em C6500 pracuje na trzy sposoby i obsługuje wszystkie trzy, łącznie z drukiem bezpośrednim, którego modele biurkowe nie mają:',
        },
        {
          type: 'list',
          items: [
            '**Direct printing** — druk wprost z SAP, bez komputera pośredniczącego. Językiem drukarki jest ESC/Label, którego standardowy sterownik SAP nie zna, więc potrzebne są pliki Epsona: Device type **YEPCW6X.PRI** i sterownik ABAP. Instalację opisują noty **SAP 2867759** i **1103422**.',
            '**Indirect printing** — dane przechodzą przez komputer z Windows ze sterownikiem Epsona i oprogramowaniem Sprint albo SAP LPD. Łatwiejsze we wdrożeniu, ale wolniejsze.',
            '**High Volume Printing** — do etykiet GHS z piktogramami, dane z modułów EHS i GLM przez serwer WWI, z wtyczką Epsona do sterownika HVP. Dla C6500 to najczęstszy scenariusz: pełnowymiarowa etykieta ostrzegawcza na kanister albo beczkę.',
          ],
        },
        {
          type: 'p',
          text: 'Poza Windows dostępny jest sterownik dla **macOS** i **Linuksa** (CUPS plus Epson Label Printer Utility). W pamięci drukarki można zapisać obrazy, szablony i czcionki, więc część zadań da się drukować bez aplikacji po stronie komputera.',
        },
      ],
    },
    {
      title: 'Komunikaty na panelu',
      blocks: [
        {
          type: 'list',
          items: [
            '**Błąd podawania papieru** — papier nie zgadza się z ustawieniami Źródło nośnika i Forma nośnika.',
            '**Nie można wykryć papieru rolkowego / składanki** — nie pasuje ustawienie Wykrywanie nośnika.',
            '**Zarejestrowany rozmiar papieru może różnić się od ustawienia drukowania** — obszar wydruku nie mieści się na nośniku; przy C6500 najczęściej znaczy to, że w sterowniku została fabryczna szerokość 108 mm.',
            '**Kalibracja nie powiodła się** — czujnik nie rozpoznaje etykiet; jeśli ponowne założenie nie pomaga, papier jest poza możliwościami czujnika.',
            '**Niedostęp.** — naciśnięto **Cut** tam, gdzie papier jest już odcięty. Wysuń wstęgę przyciskiem Feed.',
            '**Pojemnik z tuszem nie został prawidłowo zainstalowany / Nie można rozpoz. pojemnika z tuszem** — wyjmij i włóż wkład ponownie, potem wymień na nowy.',
            '**Te pojemniki z tuszem są nieodpowiednie** — wkład nie pasuje do tego numeru modelu.',
            '**Pojemnik konserwacyjny jest zużyty** — wymień zbiornik SJMB6000/6500.',
            '**Usuń etykietę** (wersja Pe) — zabierz etykietę z mechanizmu ściągania; jeśli komunikat zostaje, naciśnij **Peeler Reset**.',
            '**Jakość druku może się pogorszyć, ponieważ są zatkane dysze** — wykonaj czyszczenie głowicy.',
            '**Błąd drukarki** z kodem — wyłącz drukarkę, sprawdź zacięcie i ciała obce przy szczelinie wysuwania, włącz ponownie. Jeśli kod wraca, podaj go serwisowi.',
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
            '**Białe poziome smugi** — zatkane dysze: wzór sprawdzania dysz, potem czyszczenie głowicy.',
            '**Białe pionowe plamy (wersja Ae)** — wydrukowane etykiety zostały cofnięte i rolki porysowały zadruk. Dzieje się przy trybie zatrzymania w pozycji cięcia lub odklejania, gdy etykiet nie zabiera się po każdym zadaniu.',
            '**Białe lub czarne smugi** — źle założony papier albo typ powleczenia w sterowniku inny niż faktyczny nośnik.',
            '**Nieprawidłowe kolory po przenosinach** — po transporcie kolory potrafią się zmieszać w głowicy; pomaga czyszczenie.',
            '**Wydruk ucieka na bok** — prowadnica nie dosunięta do krawędzi wstęgi; w wersji Pe papier nieustawiony wzdłuż wypustki pod pokrywą odklejaka. Na 212 mm widać to od razu.',
            '**Papier poplamiony tuszem** — niezgodny typ powleczenia albo ciała obce na głowicy.',
            '**Papier wjeżdża i wyjeżdża, drukarka zgłasza błąd** — ustawienie wykrywania nośnika nie odpowiada papierowi.',
            '**Dane idą, ale nic się nie drukuje (wersja Pe)** — czujnik ściągania etykiet oślepiony silnym światłem. Odsuń drukarkę od bezpośredniego słońca i naciśnij **Peeler Reset**.',
          ],
        },
      ],
    },
    {
      title: 'Zacięcia papieru',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'W wersji Pe otwórz pokrywę mechanizmu ściągania. Odetnij papier przy szczelinie wysuwania.',
            'Otwórz przednią pokrywę i usuń kawałki papieru z płyty dociskowej.',
            'Jeśli głowica nie stoi skrajnie po prawej, dociśnij ją i przesuń maksymalnie w prawo.',
            'Otwórz pokrywę papieru i podnieś **dźwignię zwalniania**, żeby zwolnić rolki dociskowe.',
            'Wyciągnij papier z podajnika, opuść dźwignię, zamknij wszystkie pokrywy.',
            'Naciśnij **Pause** i załaduj papier od nowa.',
          ],
        },
        {
          type: 'p',
          text: 'Po zacięciu sprawdź, czy w środku nie zostały etykiety albo klej — resztki są najczęstszą przyczyną serii kolejnych zacięć. Przy szerokiej wstędze warto przy okazji zerknąć na obie krawędzie płyty dociskowej, bo to tam najczęściej zostaje oderwany narożnik etykiety.',
        },
        {
          type: 'youtube',
          id: 'arZ_-Ve3pxA',
          caption: 'Usuwanie zaciętego papieru w wersji z gilotyną (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Dane techniczne',
      blocks: [
        {
          type: 'list',
          items: [
            'Druk atramentowy czterokolorowy, tusz pigmentowy, wkłady **SJIC36P** (BK/MK, C, M, Y) w wersjach Ae i Pe.',
            'Rozdzielczości: 300 × 600, 600 × 600, 600 × 1200 i 1200 × 1200 dpi.',
            'Prędkość przy 300 × 600 dpi: **156 mm/s** na 25,4 mm, **119 mm/s** na 101,6 mm i **85 mm/s** na pełnych 203,2 mm. Przy 600 × 600 dpi w trybie Szybkość: 125, 75 i 49 mm/s; w trybie Normalny: 63, 48 i 34 mm/s. Przy 600 × 1200 dpi: 27, 18 i 13 mm/s. Przy 1200 × 1200 dpi: 11, 8 i 6 mm/s.',
            'Interfejsy: LAN 1000BASE-T/100BASE-TX/10BASE-T, USB 2.0 High-Speed, EXT I/F D-sub25.',
            'Wymiary **326 × 444 × 515 mm** (wys. × szer. × gł.), masa **25,5 kg** w wersji Ae i **26,3 kg** w wersji Pe.',
            'Zasilanie 100–240 V, 50–60 Hz, 0,9 A. Pobór mocy: ok. 38,7 W przy pracy, 5,82 W w gotowości (230 V).',
            'Praca w temperaturze **5–35 °C** przy wilgotności 20–80 %; druk kodów kreskowych od **15 °C**. Głośność ok. 55 dB w wersji Ae i 60 dB w wersji Pe.',
          ],
        },
      ],
    },
    {
      title: 'Materiały eksploatacyjne i opcje',
      blocks: [
        {
          type: 'list',
          items: [
            'Wkłady **SJIC36P-BK** albo **SJIC36P-MK**, **SJIC36P-C**, **SJIC36P-M**, **SJIC36P-Y**. Okres użytkowania: 6 miesięcy od zamontowania, 3 lata od produkcji.',
            'Zbiornik na zużyty atrament **SJMB6000/6500**.',
            'Zapasowy **uchwyt na papier C6500** (175 × 310 × 175 mm, 0,65 kg) — rolkę nakłada się na niego przed zmianą, więc wymiana nośnika trwa kilkanaście sekund zamiast kilku minut. Przy sześciocalowych rolkach szerokiej wstęgi to zwykle najlepiej wydane pieniądze z całej listy opcji.',
          ],
        },
        {
          type: 'p',
          text: 'Wkłady i zbiornik oddaj do utylizacji zgodnie z przepisami. Uszkodzenia wynikające z użycia nieoryginalnych materiałów Epson wyłącza z gwarancji, a kalibracja kolorów drukarki jest robiona pod oryginalny tusz.',
        },
      ],
    },
  ],
}
