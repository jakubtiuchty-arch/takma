import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie oficjalnego „CW-C6000 Series/CW-C6500 Series/
// CW-D6000 Series/CW-D6500 Series Przewodnik użytkownika" (Epson, 122 strony, M00123506 PL)
// oraz „CW-C6000/C6500 Technical Reference Guide" (EN, rev. P, 416 stron).
// Wybrane i przepisane pod model 4-calowy: numeracja wersji, wybór czerni, nośniki do 112 mm,
// wersje Ae i Pe, podawanie z zewnątrz, tusze SJIC36P, zbiornik SJMB6000/6500, kontrola dysz,
// czyszczenie okresowe, ustawienia sterownika, kody kreskowe, port EXT I/O, SAP i ZPL II.

export const epsonColorworksC6000Pl: PolishManual = {
  updatedAt: '2026-09-20',
  intro:
    'Najważniejsze z obsługi Epson ColorWorks C6000 po polsku: jak odczytać wersję z numeru modelu, wybór czarnego tuszu przy pierwszym uruchomieniu, jaki papier wchodzi do 4-calowej maszyny, zakładanie rolki i składanki, praca z odwijakiem i nawijakiem, wymiana wkładów SJIC36P i zbiornika SJMB6000/6500, kontrola dysz i czyszczenie okresowe, ustawienia sterownika, port sterujący aplikatorem, integracja z SAP oraz komunikaty i zacięcia.',
  sections: [
    {
      title: 'Co mówi numer modelu',
      blocks: [
        {
          type: 'p',
          text: 'Epson opisuje całą rodzinę jednym zestawem liter, więc z samego numeru na obudowie da się odczytać, co stoi na stole. Weźmy **CW-C6000Ae**:',
        },
        {
          type: 'list',
          items: [
            '**C** — tusz pigmentowy (litera **D** oznaczałaby tusz barwnikowy, czyli serię D6000).',
            '**0** — model 4-calowy (**5** to model 8-calowy, czyli C6500).',
            '**A** — gilotyna, czyli Auto Cutter (**P** to odklejak, czyli Peeler).',
          ],
        },
        {
          type: 'p',
          text: 'Ostatnia litera to rynek i generacja wkładów: **Ae** i **Pe** biorą tusze **SJIC36P**, starsze **Au** i **Pu** — SJIC35P. Numery C6010–C6050 to warianty z innymi seriami wkładów (SJIC36P–SJIC40P) sprzedawane na innych rynkach. Przed zamówieniem tuszu warto sprawdzić numer, bo wkłady nie są zamienne.',
        },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i wybór czerni',
      blocks: [
        {
          type: 'p',
          text: 'Przy pierwszym włączeniu drukarka pyta o język, datę i godzinę, a potem o rzecz, której później nie zmienisz: **czy czarny tusz ma być błyszczący (BK), czy matowy (MK)**. Po zamontowaniu wkładów i rozpoczęciu napełniania głowicy wybór jest ostateczny.',
        },
        {
          type: 'p',
          text: 'Od tej decyzji zależy lista papierów, na których drukarka umie drukować:',
        },
        {
          type: 'list',
          items: [
            '**Czerń matowa (MK)**: papier zwykły, papier matowy, nośniki syntetyczne, papier teksturowany.',
            '**Czerń błyszcząca (BK)**: papier matowy, nośniki syntetyczne, papier błyszczący, folia błyszcząca przezroczysta, papier o wysokim połysku.',
            'Wspólne dla obu: papier matowy i syntetyki. Papier zwykły i teksturowany wchodzą tylko przy MK, papier błyszczący i folia tylko przy BK.',
          ],
        },
        {
          type: 'p',
          text: 'Napełnianie głowicy po zamontowaniu wkładów trwa około **19 minut**. Przez ten czas nie wolno otwierać żadnej pokrywy ani wyłączać zasilania — przerwanie ładowania zużywa dużo tuszu i potrafi skończyć się wymianą wkładów albo zbiornika jeszcze przed pierwszym wydrukiem.',
        },
        {
          type: 'youtube',
          id: 'IL2g3yWFtqE',
          caption: 'Pierwsze napełnianie układu tuszem (film Epsona, po angielsku)',
        },
        {
          type: 'p',
          text: 'Praktycznie: **MK** bierze się do etykiet logistycznych i produkcyjnych na papierze zwykłym i matowym, **BK** tam, gdzie etykieta ma wyglądać jak z drukarni — połysk, głęboka czerń, zdjęcie produktu. Przy wymianie wkładu czarnego trzeba włożyć ten sam typ; po włożeniu drugiego drukarka po prostu nie ruszy.',
        },
      ],
    },
    {
      title: 'Jaki papier wchodzi do C6000',
      blocks: [
        {
          type: 'list',
          items: [
            'Szerokość podkładu **25,4–112 mm**, szerokość etykiety **21,4–108 mm**.',
            'Długość etykiety **8–609,6 mm**; przy automatycznym cięciu minimum rośnie do **15 mm**.',
            'Odstęp między etykietami **2–6 mm** (przy cięciu od 2,5 mm), odpad po bokach 2 ± 0,5 mm.',
            'Grubość nośnika **0,12–0,24 mm**, zaokrąglenie narożnika etykiety do 1,5 mm.',
            'Rolka: rdzeń **76,2 mm** (3 cale), średnica zewnętrzna **do 203,2 mm** (8 cali), nawinięta **stroną zadrukowaną na zewnątrz**.',
            'W wersji z odklejakiem (Pe) podkład musi mieć co najmniej **50,8 mm** — węższych rolek mechanizm nie obsłuży.',
          ],
        },
        {
          type: 'p',
          text: 'Czego nie zakładać: **papieru termicznego** (nie ma powleczenia pod tusz), arkuszy A4 i podobnych, papieru sklejanego taśmą, nośnika z dziurkami lub wycięciami w podkładzie oraz **podkładu przezroczystego** — czujnik nie rozpozna przerwy między etykietami.',
        },
        {
          type: 'p',
          text: 'Dwie rzeczy, które producent powtarza w instrukcji, a które w praktyce kosztują rolkę: **nie przyklejaj końca wstęgi do rdzenia**, bo drukarka nie wykryje końca papieru i zmarnuje kilkanaście etykiet, oraz trzymaj nośnik płasko — syntetyk na podkładzie papierowym i podkład z laminatem polietylenowym zwijają się przy zmianie wilgotności, a pofalowana wstęga ociera o głowicę.',
        },
      ],
    },
    {
      title: 'Budowa i panel',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu są cztery pokrywy: przednia (do zacięć), pokrywa wkładów z tuszem — lewa na czarny i magentę, prawa na cyjan i żółty, pokrywa zbiornika na zużyty atrament i pokrywa papieru. W wersji Pe dochodzi piąta: pokrywa mechanizmu ściągania etykiet z czujnikiem, który sprawdza, czy odklejona etykieta została zabrana.',
        },
        {
          type: 'p',
          text: 'Pokrywę papieru otwiera się dźwignią z przodu (zakładanie rolki, wymiana zbiornika, czyszczenie, zacięcia) albo dźwignią z tyłu (podawanie z zewnątrz). W środku: ruchoma prowadnica z niebieską dźwignią, dźwignia zwalniania rolek dociskowych i jednostka prowadnicy, którą odsuwa się przy czyszczeniu rolki podajnika. Z tyłu gniazdo zasilania, USB, port LAN 1000BASE-T, złącze **EXT I/F (D-sub25)** i otwór wentylacyjny, przed którym trzeba zostawić **co najmniej 10 cm** wolnego miejsca.',
        },
        {
          type: 'p',
          text: 'Panel to ekran, trzy diody (zasilanie, Status, Pause) i przyciski. Dwa warto znać od pierwszego dnia: **Back Feed** cofa wstęgę tak, żeby dało się wyjąć papier, a **Pause** kasuje stan wstrzymania po błędzie. W wersji Ae jest jeszcze **Cut**, w wersji Pe — **Peeler Reset**, który odblokowuje drukowanie, gdy czujnik uparcie widzi etykietę w szczelinie.',
        },
        {
          type: 'p',
          text: 'Wersję oprogramowania sprawdzisz w **Menu – Stan drukarki/Drukowanie – Wersja firmware** albo na arkuszu stanu. Epson wymienia firmware TS05JC, TS06JC, TS26JC, TS19K2, TS25K3 i TS21K5 jako wersje do bezwzględnej aktualizacji.',
        },
      ],
    },
    {
      title: 'Zakładanie rolki od wewnątrz',
      blocks: [
        {
          type: 'p',
          text: 'Najpierw sprawdź na panelu, czy **Źródło nośnika** jest ustawione na **Wewnętrzne**. Pokrywę papieru otwieraj dopiero po tym, jak na ekranie pojawi się ekran główny — otwarta wcześniej potrafi rozstroić ładowanie papieru.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Wyjmij trzpień z drukarki, trzymając go obiema rękami.',
            'Nałóż rolkę na trzpień zgodnie z kierunkiem nawinięcia narysowanym na trzpieniu i dosuń kołnierz tak, żeby nie było luzu.',
            'Włóż trzpień z powrotem, pasując oba końce w uchwyty.',
            'Ściśnij niebieską dźwignię i odsuń ruchomą prowadnicę do prawej strony.',
            'Przeciągnij papier wzdłuż lewej prowadnicy, wygładź go dłonią i dosuń ruchomą prowadnicę do krawędzi — bez luzu, ale i bez zaciskania.',
            'Wsuwaj wstęgę do podajnika, aż drukarka sama zacznie podawać papier.',
            'Obróć trzpień, żeby naciągnąć wstęgę, zamknij pokrywę i naciśnij **Pause**.',
          ],
        },
        {
          type: 'p',
          text: 'Nie wsuwaj samego podkładu bez etykiet — drukarka go nie wykryje i nie uruchomi podawania. Źle dosunięta prowadnica to najczęstsza przyczyna przesuniętego wydruku i zacięć.',
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
          text: 'Rolkę zakłada się tak samo jak w wersji z gilotyną, ale po naciągnięciu wstęgi dochodzi kilka kroków. Przytrzymaj **Feed**, aż krawędź papieru dotknie blatu, zerwij wysunięte etykiety, otwórz pokrywę mechanizmu ściągania i przeciągnij sam podkład przez szczelinę odklejaka. Przed zamknięciem pokrywy dosuń papier do wypustki prowadzącej — musi leżeć dokładnie wzdłuż niej, inaczej etykiety zaczną schodzić krzywo. Na koniec naciągnij wstęgę i naciśnij **Pause**.',
        },
        {
          type: 'p',
          text: 'W wersji Pe nie podasz składanki z zewnątrz — odklejak pracuje tylko z rolką zakładaną od wewnątrz. Mechanizm ściągania zbiera klej i pył papierowy, dlatego producent zaleca **czyszczenie go codziennie**.',
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
          text: 'Wersja Ae przyjmuje papier także od tyłu. Przełącz **Źródło nośnika** na **Podawanie od tyłu**, wyjmij trzpień, ustaw stos składanki **co najmniej 100 mm** za drukarką, pionowo względem podajnika, i przeciągnij papier wzdłuż prawej prowadnicy. Stos nie może zwijać się przy samej drukarce — odkształcony papier kończy się zacięciem albo pogorszeniem wydruku.',
        },
        {
          type: 'youtube',
          id: 'qsyUyxUdh8w',
          caption: 'Podawanie papieru z zewnątrz drukarki (film Epsona, po angielsku)',
        },
        {
          type: 'p',
          text: 'Do dużych rolek podawanych z zewnątrz potrzebny jest własny odwijak i nawijak — Epson ich nie dostarcza, ale podaje warunki, w jakich drukarka pracuje poprawnie:',
        },
        {
          type: 'list',
          items: [
            'Naprężenie wstęgi po stronie odwijaka **do 2 N**; po stronie nawijaka też do 2 N, a przy nawijaniu samego podkładu w wersji Pe — **do 1 N**.',
            'Kąt podawania z odwijaka **15–30°**, kąt wyprowadzenia do nawijaka **0–20°** (w wersji Pe etykieta do 45°, a podkład nawijany pod **45–90°**).',
            'Rdzeń na odwijaku o średnicy zewnętrznej **co najmniej 82 mm**; unikaj zwijania papieru o promieniu poniżej 1,5 cala i w kierunku przeciwnym do nawinięcia rolki.',
            'Maksymalna prędkość podawania zależy od jakości druku: **508 mm/s** przy Max Speed i Speed, 254 mm/s przy Normal, 127 mm/s przy Quality i 25,4 mm/s przy Max Quality.',
          ],
        },
        {
          type: 'p',
          text: 'Naprężenie musi być stabilne — wahania psują dokładność podawania bardziej niż sama jego wartość. Odwijak i nawijak ustawia się tak, żeby papier wchodził i wychodził prosto; jeśli wstęga skręca już przed drukarką, trzeba poprawić ustawienie urządzeń, a nie prowadnic.',
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
            'Otwórz lewą pokrywę wkładów (czarny i magenta) albo prawą (cyjan i żółty).',
            'Naciśnij dźwignię w dół i wyjmij zużyty wkład.',
            'Wyjmij nowy wkład z opakowania i **wstrząśnij nim**: poziomo, o około 5 cm w obie strony, mniej więcej 15 razy w ciągu 5 sekund.',
            'Wsuń wkład w gniazdo i zamknij pokrywę.',
          ],
        },
        {
          type: 'p',
          text: 'Wkład czarny wymieniaj zawsze na ten sam typ czerni. Po włożeniu drugiego typu drukarka nie będzie działać — to nie jest ostrzeżenie o gorszej jakości, tylko blokada.',
        },
        {
          type: 'p',
          text: 'Kilka rzeczy z instrukcji, o które klienci pytają najczęściej. Drukarka przerywa pracę, zanim wkład opróżni się do zera, żeby nie wpuścić powietrza do głowicy — resztka tuszu w zużytym wkładzie jest normą. Każdy montaż wkładu zużywa trochę tuszu na sprawdzenie układu, więc nie warto wyjmować wkładów „na próbę". Tusz schodzi też przy druku samej czerni, bo konserwacja głowicy obejmuje wszystkie kolory. Wkład otwarty zużyj w ciągu **sześciu miesięcy**, a termin z opakowania traktuj poważnie: stary tusz to gorsze kryjące pola i słabsze kody.',
        },
      ],
    },
    {
      title: 'Zbiornik na zużyty atrament SJMB6000/6500',
      blocks: [
        {
          type: 'p',
          text: 'Zbiornik zbiera tusz z czyszczeń głowicy. Stan sprawdzisz na ekranie głównym; najpierw pojawia się ostrzeżenie o zbliżającym się końcu, potem komunikat o konieczności wymiany. Wymiana to otwarcie pokrywy papieru i pokrywy zbiornika, wyjęcie starego, włożenie nowego i zamknięcie pokryw. Zużyty zapakuj w worek dołączony do nowego.',
        },
        {
          type: 'p',
          text: 'Ten sam numer **SJMB6000/6500** pasuje do C6000, C6500 oraz do serii D6000 i D6500 — nowy zbiornik możesz włożyć do każdej z tych drukarek. Ale **zbiornika już używanego nie przekładaj do innej serii**: producent wprost ostrzega, że wpłynie to na jego działanie.',
        },
      ],
    },
    {
      title: 'Sprawdzanie dysz i czyszczenie głowicy',
      blocks: [
        {
          type: 'p',
          text: 'Białe smugi, blade kolory albo pogorszone kody zaczynaj od wzoru sprawdzania dysz: **Menu – Konserwacja – Spr. dyszy głow. druk.** Ten sam wzór wydrukujesz z zakładki **Printer Utilities** w sterowniku albo z **Web Config** (Konserwacja – Wzór sprawdz. dyszy druk.).',
        },
        {
          type: 'p',
          text: 'Jeśli we wzorze brakuje kresek, uruchom **Czyszcz. głow. druk.** Dopiero gdy to nie pomoże, sięgnij po **Czyszczenie zaawansowane** — zużywa wyraźnie więcej tusz i nie ma sensu uruchamiać go „na wszelki wypadek". W trakcie czyszczenia nie wyłączaj drukarki i nie otwieraj pokryw. Przy niskim poziomie tuszu czyszczenie w ogóle nie ruszy.',
        },
        {
          type: 'p',
          text: 'Do **Web Config** logujesz się przez przeglądarkę: nazwa użytkownika pusta lub dowolna, hasło to wartość z pola **PASSWORD** na naklejce z tyłu drukarki.',
        },
      ],
    },
    {
      title: 'Automatyczna kontrola dysz',
      blocks: [
        {
          type: 'p',
          text: 'C6000 sama sprawdza dysze — Epson nazywa to Nozzle Verification Technology. Kontrola uruchamia się po włączeniu drukarki, po zamknięciu pokrywy po zacięciu, o godzinie czyszczenia okresowego oraz **co zadaną liczbę wydruków**. Jeśli liczba zatkanych dysz przekroczy próg, na ekranie pojawia się komunikat i drukarka może od razu wyczyścić głowicę.',
        },
        {
          type: 'list',
          items: [
            '**Interwał kontroli**: od 1 do 13 000 wydruków, fabrycznie **500**. Licznik zeruje się po każdej kontroli i po wyłączeniu drukarki.',
            '**Próg zatkania**: od 0 do 16 dysz łącznie dla wszystkich czterech kolorów, fabrycznie **6**.',
            '**Automatyczne czyszczenie po kontroli**: fabrycznie włączone. Wyłączone zostawia sam komunikat.',
            '**Druk zastępczy**: przy zatkaniu poniżej progu drukarka dokłada brakujące krople sąsiednimi dyszami — maksymalnie za 16 dysz, ale nie poradzi sobie, gdy zatkane dysze leżą obok siebie.',
          ],
        },
        {
          type: 'p',
          text: 'Dwie rzeczy warto wiedzieć, zanim ktoś potraktuje to jako gwarancję jakości. Czyszczenie obejmuje **całą głowicę**, nie pojedynczy kolor, i za każdym razem zużywa tusz. A druk zastępczy korzysta z informacji zebranych na starcie zadania — dysza, która zatka się w trakcie długiej serii, nie zostanie podmieniona.',
        },
      ],
    },
    {
      title: 'Czyszczenie okresowe o zadanej godzinie',
      blocks: [
        {
          type: 'p',
          text: 'Niezależnie od kontroli dysz drukarka czyści głowicę okresowo. Zabieg trwa **3–14 minut** i przez ten czas nie da się drukować, dlatego godzinę startu ustawia się ręcznie (fabrycznie 00:00, z dokładnością do minuty). O wyznaczonej porze czyszczenie rusza tylko wtedy, gdy drukarka jest włączona i sama uzna je za potrzebne.',
        },
        {
          type: 'list',
          items: [
            'Drukarka pracuje całą dobę — ustaw godzinę na czas bez druku, na przykład w środku nocy.',
            'Drukarka jest codziennie wyłączana — ustaw porę, gdy jest wyłączona; czyszczenie wykona się przy najbliższym włączeniu. Można też ustawić przerwę obiadową.',
            'Czyszczenie nie ruszy przy zbyt niskim poziomie tuszu albo zapełnionym zbiorniku; wykona się przy następnym włączeniu.',
            'Godzina ustawiona bliżej niż 10 minut od bieżącej zadziała dopiero **24 godziny później**.',
          ],
        },
      ],
    },
    {
      title: 'Czyszczenie mechaniki',
      blocks: [
        {
          type: 'p',
          text: 'Obudowę przecieraj suchą albo lekko zwilżoną ściereczką — bez alkoholu, benzyny, rozcieńczalnika i rozpuszczalników ketonowych, bo odkształcają plastik i gumę. Wnętrze czyści się przy wyłączonym zasilaniu i wyjętym papierze.',
        },
        {
          type: 'list',
          items: [
            '**Nóż (wersja Ae)** — klej z etykiet tępi nieruchome ostrze. Zeskrob osad płaskim śrubokrętem o końcówce **1,8–3,0 mm**, prowadząc od obu końców ku środkowi, z końcówką opartą o dno szczeliny wysuwania.',
            '**Mechanizm ściągania (wersja Pe)** — rolkę przetrzyj płatkiem z alkoholem, najlepiej codziennie.',
            '**Prowadnice papieru i płyta dociskowa** — płatek z alkoholem; na płycie czyść tylko pole wskazane w instrukcji, po podniesieniu uchwytu na papier.',
            '**Rolka podajnika i rolka przytrzymująca** — wyłącznie **klejącą stroną etykiety**. Przyłóż etykietę, powoli odrywaj i obracaj rolkę ręką, aż zejdzie pył i klej. Inne materiały uszkadzają powierzchnię rolki.',
          ],
        },
        {
          type: 'p',
          text: 'Rolkę podajnika producent zaleca czyścić **raz w tygodniu** — to najprostszy sposób na zamazane wydruki i powtarzające się zacięcia.',
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
          text: 'Komunikaty „Nie można wykryć papieru rolkowego", „Nie można wykryć składanki" i „Kalibracja nie powiodła się" mówią o jednym: ustawienie **Wykrywanie nośnika** nie pasuje do założonego papieru. Do wyboru są trzy tryby — wykrywanie odstępu (fabryczny), wykrywanie czarnego znacznika i brak wykrywania.',
        },
        {
          type: 'p',
          text: 'Jeśli po zmianie trybu i ponownym założeniu papieru błąd wraca, sprawdź parametry samych znaczników: czarny znacznik ma sięgać **co najmniej 18,4 mm** od krawędzi bazowej, mieć **4–25,4 mm** długości i zostawiać przynajmniej 4 mm czystego miejsca na etykiecie. Przy etykietach wykrojonych o nietypowym kształcie, które lubią odchodzić od podkładu w środku drukarki, trzeba użyć **czujników odstępu** — ich ustawianie opisuje Technical Reference Guide.',
        },
        {
          type: 'p',
          text: 'Pierwszą etykietę na wstędze ustaw co najmniej **1,5 mm** od krawędzi podkładu, a pozycję cięcia co najmniej **1,7 mm** od znacznika następnej etykiety.',
        },
      ],
    },
    {
      title: 'Ustawienia sterownika, które realnie zmieniają wydruk',
      blocks: [
        {
          type: 'p',
          text: 'Jeśli ustawienia na panelu i w sterowniku się różnią, **wygrywa sterownik**. Poniżej pola, które najczęściej decydują o tym, czy wydruk wygląda tak, jak powinien.',
        },
        {
          type: 'list',
          items: [
            '**Media Coating Type** — typ powleczenia nośnika. Ustawiony niezgodnie z papierem daje smugi, rozmazany tusz albo blady wydruk. Lista zależy od czerni: przy MK papier zwykły, matowy, syntetyk i teksturowany, przy BK papier matowy, syntetyk, błyszczący, folia i wysoki połysk.',
            '**Print Quality** — zmienia się automatycznie po zmianie typu nośnika. Na papierze zwykłym i matowym wybór to Max Speed (300 × 600 dpi), Speed i Normal (600 × 600) oraz Quality (600 × 1200). Na błyszczącym i folii dochodzi **Max Quality 1200 × 1200 dpi**, a Max Speed znika.',
            '**Left & Right gap** — margines boczny, fabrycznie 2 mm. Wartości powyżej 2 mm zwiększają ryzyko zacięcia.',
            '**Settings For Paper Handling After Print** — co drukarka robi po wydruku. W wersji Ae: cięcie po ostatniej etykiecie, po wskazanej etykiecie, po ostatniej stronie kompletu albo zatrzymanie bez cięcia. W wersji Pe: ręczne zdjęcie etykiety, automatyczne albo nawinięcie.',
            '**Media Hold Pressure** — docisk papieru, automatyczny albo ręczny w skali 1–10. Warto go ruszyć przy cienkich i bardzo sztywnych nośnikach.',
            '**Banner Printing** — etykiety dłuższe niż 609 mm. Drukarka dzieli je na strony po maksymalnie 609 mm i składa bez przerwy, do **3000 mm** długości. Na łączeniach widać przejście.',
          ],
        },
        {
          type: 'p',
          text: 'Etykiety krótsze niż **15 mm** nie dają się ciąć automatycznie — przy takim ustawieniu drukarka sama zmienia odstęp cięcia na co drugą etykietę, żeby nie zablokować noża.',
        },
      ],
    },
    {
      title: 'Kody kreskowe: moduł i klasa ANSI',
      blocks: [
        {
          type: 'p',
          text: 'Epson podaje minimalne wielkości modułu, przy których kod wychodzi w klasie **ANSI C lub wyższej**. Najważniejszy wniosek jest jeden: **papier zwykły wypada wyraźnie gorzej niż powlekany**.',
        },
        {
          type: 'list',
          items: [
            'Przy 300 dpi kody liniowe (Code 39, Code 128, GS1-128, ITF, Codabar, Code 93, GS1 DataBar) potrzebują modułu **3** na papierze matowym, syntetyku, błyszczącym, folii i wysokim połysku — w obu orientacjach.',
            'Na **papierze zwykłym** ten sam kod wymaga modułu **4** w układzie poziomym i **5** w pionowym, i osiąga tylko klasę D.',
            'Przy 600 dpi moduł rośnie do **5** dla kodów poziomych i 5–6 dla pionowych na nośnikach powlekanych, a na papierze zwykłym do 7 i 10.',
            'Kody piętrowe (PDF417, MicroPDF, GS1 DataBar Stacked) przy 300 dpi to moduł **3** na powlekanych i **5** na papierze zwykłym.',
          ],
        },
        {
          type: 'p',
          text: 'Pułapka, która potrafi zająć pół dnia: przy ustawieniu **Rotation Settings** na **Normal** albo **Rotate 270 Degrees** kod kreskowy w ogóle się nie wydrukuje. Kodów QR, Micro QR i MaxiCode nie da się obrócić ani przełączyć w orientację poziomą z zakładki Options.',
        },
      ],
    },
    {
      title: 'Port EXT I/O: sterowanie aplikatorem',
      blocks: [
        {
          type: 'p',
          text: 'Złącze **D-sub25** z tyłu drukarki to nie serwisowy relikt, tylko wejście i wyjście dla automatyki. Dzięki niemu C6000 wpina się w aplikator etykiet albo sterownik linii bez pośrednictwa komputera.',
        },
        {
          type: 'list',
          items: [
            'Sygnały wyjściowe: koniec wydruku, gotowość danych, wykrycie brakujących punktów, konserwacja głowicy, gotowość drukarki, ostrzeżenie, błąd i pauza, niski poziom tuszu, koniec tuszu, koniec papieru.',
            'Sygnały wejściowe: pauza, czyszczenie głowicy, sprawdzenie brakujących punktów, podanie papieru, start wydruku i ponowny wydruk.',
            'Każdy sygnał ma własne ustawienie poziomu (niski, wysoki, impuls) i domyślnie jest wyłączony.',
          ],
        },
        {
          type: 'p',
          text: 'W wersji Pe dochodzi tryb druku **Peel-Off for Auto Labeler**, w którym drukarka podaje etykietę pod aplikator i czeka na sygnał, zamiast wysuwać ją do ręcznego zdjęcia. Pozycję odklejania da się przesunąć w zakresie ±10,8 mm, osobno dla naklejania ręcznego i maszynowego.',
        },
      ],
    },
    {
      title: 'Zamiast monochromatycznej drukarki ZPL II',
      blocks: [
        {
          type: 'p',
          text: 'C6000 rozumie **ESC/Label** i **ZPL II**, więc da się nią zastąpić czarno-białą drukarkę etykiet bez przepisywania aplikacji. Sterownik ma osobne okno ustawień zamiany: wybierasz rozdzielczość starej drukarki, włączasz tryb monochromatyczny i korygujesz położenie wydruku.',
        },
        {
          type: 'p',
          text: 'Konkret z instrukcji: jeśli stara drukarka miała **203 dpi**, wybierz **200 dpi** i ustaw **−1,5** w przesunięciu pionowym i poziomym. Przy identycznej rozdzielczości obie wartości zostają na zerze. Nowej drukarce nadaj ten sam adres IP co starej — aplikacja nie zauważy zmiany.',
        },
        {
          type: 'p',
          text: 'Największa zmiana dotyczy jednak nie sterownika, tylko sposobu pracy. Do C6000 można **wgrać obraz PNG i drukować go pod danymi** przychodzącymi z systemu. Kto dotąd kupował rolki zadrukowane kolorem w drukarni i dodrukowywał na nich czarne dane, wgrywa ten sam projekt jako tło, zakłada czysty nośnik i robi jednym przebiegiem to, co wcześniej wymagało dwóch — bez zmiany danych i systemu po stronie komputera.',
        },
      ],
    },
    {
      title: 'Sieć, SAP i systemy nadrzędne',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka ma LAN 1000BASE-T (wymagana skrętka ekranowana) i USB 2.0. Ustawienia sieciowe wprowadza się z panelu, przez EpsonNet Config albo Web Config; raport połączenia sieciowego i arkusz stanu drukuje się z **Menu – Stan drukarki/Drukowanie**. Drukarka obsługuje też chmurę **Loftware Cloud** — komunikat „Drukarka nie może się połączyć z usługą w chmurze" dotyczy właśnie tego połączenia.',
        },
        {
          type: 'p',
          text: 'Do SAP C6000 wpina się na trzy sposoby i — w odróżnieniu od modeli biurkowych — obsługuje wszystkie trzy:',
        },
        {
          type: 'list',
          items: [
            '**Direct printing** — druk wprost z systemu SAP, bez komputera pośredniczącego. Ponieważ językiem drukarki jest ESC/Label, którego standardowy sterownik SAP nie zna, potrzebne są dwa pliki Epsona: Device type **YEPCW6X.PRI** i sterownik ABAP. Instalację opisują noty **SAP 2867759** i **1103422**.',
            '**Indirect printing** — dane idą przez komputer z Windows ze sterownikiem Epsona i oprogramowaniem Sprint albo SAP LPD. Prościej we wdrożeniu, ale wolniej i z dodatkowym punktem awarii.',
            '**High Volume Printing** — do etykiet GHS z piktogramami, dane z modułów EHS i GLM przez serwer WWI. Epson dostarcza wtyczkę do sterownika HVP.',
          ],
        },
        {
          type: 'p',
          text: 'Poza Windows jest też sterownik dla **macOS** i **Linuksa** (przez CUPS, z narzędziem Epson Label Printer Utility). W samej drukarce można zapisać obrazy, szablony i czcionki, więc część zadań da się drukować bez aplikacji po stronie komputera.',
        },
      ],
    },
    {
      title: 'Komunikaty na panelu',
      blocks: [
        {
          type: 'list',
          items: [
            '**Błąd podawania papieru** — papier nie zgadza się z ustawieniami Źródło nośnika i Forma nośnika. Zmień papier albo ustawienia.',
            '**Nie można wykryć papieru rolkowego / składanki** — nie pasuje ustawienie Wykrywanie nośnika.',
            '**Zarejestrowany rozmiar papieru może różnić się od ustawienia drukowania** — obszar wydruku nie mieści się na założonym nośniku.',
            '**Kalibracja nie powiodła się** — czujnik nie rozpoznaje etykiet. Jeśli nie pomaga ponowne założenie, papier jest poza możliwościami czujnika.',
            '**Niedostęp.** — naciśnięto **Cut** w miejscu, w którym papier jest już odcięty. Wysuń wstęgę przyciskiem Feed.',
            '**Pojemnik z tuszem nie został prawidłowo zainstalowany / Nie można rozpoz. pojemnika z tuszem** — wyjmij i włóż wkład ponownie, potem wymień na nowy.',
            '**Te pojemniki z tuszem są nieodpowiednie** — wkład nie pasuje do tego numeru modelu drukarki.',
            '**Pojemnik konserwacyjny jest zużyty** — wymień zbiornik SJMB6000/6500.',
            '**Usuń etykietę** (wersja Pe) — zabierz etykietę z mechanizmu ściągania; jeśli komunikat zostaje, naciśnij **Peeler Reset**.',
            '**Jakość druku może się pogorszyć, ponieważ są zatkane dysze** — wykonaj czyszczenie głowicy.',
            '**Błąd drukarki** z kodem — wyłącz drukarkę, sprawdź zacięcie i ciała obce przy szczelinie, włącz ponownie. Jeśli kod wraca, podaj go serwisowi.',
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
            '**Białe poziome smugi** — zatkane dysze. Wzór sprawdzania dysz, potem czyszczenie głowicy.',
            '**Białe pionowe plamy (wersja Ae)** — wydrukowane etykiety zostały cofnięte i rolki porysowały zadruk. Zdarza się przy trybie zatrzymania w pozycji cięcia lub odklejania, gdy etykiet nie zabiera się po każdym zadaniu. Zmień tryb druku albo odbieraj wydruki na bieżąco.',
            '**Białe lub czarne smugi** — źle założony papier albo typ powleczenia w sterowniku inny niż faktyczny nośnik.',
            '**Nieprawidłowe kolory po przenosinach** — po transporcie kolory potrafią się zmieszać w głowicy. Pomaga czyszczenie głowicy.',
            '**Wydruk ucieka na bok** — prowadnica nie dosunięta do krawędzi papieru, a w wersji Pe papier nieustawiony wzdłuż wypustki pod pokrywą odklejaka.',
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
            'Otwórz pokrywę papieru i podnieś **dźwignię zwalniania** — zwolni rolki dociskowe.',
            'Wyciągnij papier z podajnika, opuść dźwignię i zamknij wszystkie pokrywy.',
            'Naciśnij **Pause**, żeby skasować błąd, i załaduj papier od nowa.',
          ],
        },
        {
          type: 'p',
          text: 'Po usunięciu zacięcia sprawdź, czy w środku nie zostały etykiety albo klej. Resztki są najczęstszą przyczyną serii kolejnych zacięć i spadku jakości wydruku — wtedy trzeba wyczyścić wnętrze, a nie tylko wyjąć papier.',
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
            'Prędkość przy 300 × 600 dpi: **156 mm/s** na szerokości 25,4 mm i **119 mm/s** na szerokości 101,6 mm. Przy 600 × 600 dpi odpowiednio 125 i 75 mm/s (tryb Szybkość) albo 63 i 48 mm/s (Normalny), przy 600 × 1200 dpi — 27 i 18 mm/s, przy 1200 × 1200 dpi — 11 i 8 mm/s.',
            'Interfejsy: LAN 1000BASE-T/100BASE-TX/10BASE-T, USB 2.0 High-Speed, EXT I/F D-sub25.',
            'Wymiary **326 × 340 × 565 mm** (wys. × szer. × gł.), masa **22,5 kg** w wersji Ae i **22,8 kg** w wersji Pe.',
            'Zasilanie 100–240 V, 50–60 Hz, 0,9 A. Pobór mocy: ok. 38,6 W przy pracy, 5,82 W w gotowości (230 V).',
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
            'Zapasowy **uchwyt na papier C6000** (220 × 206 × 220 mm, 0,65 kg) — rolkę zakłada się na niego wcześniej, więc wymiana nośnika schodzi do kilkunastu sekund. Ma sens tam, gdzie zmienia się formaty albo materiał kilka razy dziennie.',
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
