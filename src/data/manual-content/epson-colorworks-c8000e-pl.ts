import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie oficjalnego „CW-C8000 Series Przewodnik
// użytkownika" (Epson, 106 stron, M00156101 PL) oraz „CW-C8000 Series Technical Reference
// Guide" (EN, rev. G, 407 stron). Zakres pod maszynę ze stałą głowicą liniową: wybór czerni,
// nośniki i znaczniki z otworami, ładowanie rolki i składanki, przewijarka TU-RC8000,
// pakiety atramentowe SJIC48P, zbiornik SJMB7500, kontrola dysz, prześwit głowica–nośnik,
// czyszczenie, kody kreskowe, sieć i SAP, komunikaty, zacięcia i dane techniczne.

export const epsonColorworksC8000ePl: PolishManual = {
  updatedAt: '2026-09-20',
  intro:
    'Najważniejsze z obsługi Epson ColorWorks C8000e po polsku: co wynika ze stałej głowicy liniowej, wybór czarnego tuszu przy pierwszym uruchomieniu, dopuszczalne nośniki razem ze znacznikami z otworami, ładowanie rolki i składanki, praca z przewijarką, wymiana pakietów atramentowych SJIC48P i zbiornika SJMB7500, kontrola dysz i czyszczenie okresowe, prześwit głowica–nośnik, ustawienia sterownika, integracja z SAP oraz komunikaty, zacięcia i dane techniczne.',
  sections: [
    {
      title: 'Czym C8000e różni się od reszty ColorWorks',
      blocks: [
        {
          type: 'p',
          text: 'To nie jest powiększony C6000. Różnica siedzi w głowicy i zmienia sposób pracy z maszyną.',
        },
        {
          type: 'list',
          items: [
            '**Głowica jest stała i liniowa** — pokrywa całą szerokość druku naraz, zamiast jeździć nad papierem. Stąd **300 mm/s**, czyli tempo drukarki jednokolorowej.',
            'Rozdzielczość to **600 × 1200 dpi** i tylko tyle — nie ma tu trybu 1200 × 1200 znanego z C4000e i C6000. Przy stałej głowicy liczy się przepustowość, nie maksymalna gęstość kropli.',
            'Tusz siedzi w **workach po 480 ml**, wkładanych do wysuwanych kaset, a nie we wkładach. Worek otwarty wytrzymuje **rok**, nie sześć miesięcy.',
            'Drukarka waży **35 kg** i ma **USB SuperSpeed** zamiast USB 2.0.',
            'Na ekranie drukarki są **instrukcje obsługi krok po kroku** — ładowanie papieru, wymiana worka, czyszczenie. To pierwsza rzecz, po którą sięga operator na zmianie.',
          ],
        },
        {
          type: 'p',
          text: 'Konsekwencja stałej głowicy, o której warto wiedzieć od początku: nierówność koloru na szerokości wstęgi koryguje się osobną procedurą (**Adjust Uneven Colors**), a nie czyszczeniem. Po transporcie maszyny to zwykle pierwszy zabieg, jeśli kody kreskowe zaczynają schodzić z klasy.',
        },
        {
          type: 'youtube',
          id: '2RTgICUK_LU',
          caption: 'Ustawienie drukarki po rozpakowaniu (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Pierwsze uruchomienie i wybór czerni',
      blocks: [
        {
          type: 'p',
          text: 'Po ustawieniu języka, daty i godziny drukarka pyta, którego czarnego tuszu będzie używać: **błyszczącego (BK)** czy **matowego (MK)**. Po wybraniu i napełnieniu układu atramentem zmiana nie jest możliwa.',
        },
        {
          type: 'list',
          items: [
            '**Czerń matowa (MK)**: papier zwykły, papier matowy, papier teksturowany, nośniki syntetyczne.',
            '**Czerń błyszcząca (BK)**: papier matowy, syntetyki, papier błyszczący, folia błyszcząca przezroczysta, papier o wysokim połysku.',
            'Papier matowy i syntetyk działają z obiema czerniami. Zwykły i teksturowany tylko z MK, błyszczący i folia tylko z BK.',
          ],
        },
        {
          type: 'p',
          text: 'Przy wymianie worka z czarnym tuszem trzeba włożyć ten sam typ czerni — po włożeniu drugiego drukarka nie ruszy. W trakcie pobierania atramentu (dioda zasilania miga) nie wolno otwierać pokryw ani wyłączać maszyny.',
        },
      ],
    },
    {
      title: 'Jaki papier wchodzi do C8000e',
      blocks: [
        {
          type: 'list',
          items: [
            'Szerokość podkładu **25,4–112 mm** z rolki i **50–112 mm** ze składanki, szerokość etykiety **21,4–108 mm** (ze składanki od 46 mm).',
            'Odstęp między etykietami **3–6 mm** — węższy niż w C6000, gdzie zaczynał się od 2 mm. Kalibracja nie zadziała przy odstępie powyżej 6 mm.',
            'Długość etykiety **8–1016 mm**, czyli do 40 cali. Znaczniki z otworami: 8–300 mm.',
            'Rolka: rdzeń **76,2 mm** (3 cale), średnica zewnętrzna **do 203,2 mm** (8 cali).',
            'Grubość nośnika zależy od rodzaju: zwykłe etykiety i papier ciągły **0,084–0,240 mm**, znaczniki grubsze — do 0,59 mm przy znacznikach z układem RFID.',
          ],
        },
        {
          type: 'p',
          text: 'C8000e obsługuje trzy sposoby wykrywania nośnika: **odstęp między etykietami**, **czarny znacznik** i — czego nie ma w modelach z serii C6000 — **otwory, otwory podłużne i wycięcia** w papierze (tryb Tag). Dzięki temu drukuje na zawieszkach i biletach, które w innych maszynach trzeba by przerabiać.',
        },
        {
          type: 'p',
          text: 'Czego nie zakładać: papieru termicznego, arkuszy formatu A i B, papieru sklejanego taśmą oraz papieru przyklejonego taśmą do rdzenia rolki. Jeśli koniec rolki trzyma się rdzenia na taśmie dwustronnej, drukować się da, ale kilku ostatnich etykiet drukarka nie wykorzysta. Etykiety krótsze niż **25,4 mm** przy automatycznym cięciu potrafią przywierać do ostrza.',
        },
      ],
    },
    {
      title: 'Budowa, panel i instrukcje na ekranie',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu trzy pokrywy: górna (zacięcia i czyszczenie), pokrywa pakietów atramentowych (worki i zbiornik na zużyty atrament) oraz pokrywa papieru. Po lewej stronie pokrywa złącza przewijarki, po prawej wszystkie złącza: zasilanie, USB typu B, port LAN, **EXT I/F** do sterowania automatyką, port USB A wyłącznie pod adapter Wi-Fi **OT-WL06** i otwór wentylacyjny, przed którym trzeba zostawić **co najmniej 10 cm**.',
        },
        {
          type: 'p',
          text: 'W środku: cztery kasety na pakiety atramentowe, zbiornik na zużyty atrament, wrzeciono z kołnierzem na rolkę, ruchoma prowadnica z niebieską dźwignią i uchwyty papieru, które trzymają wstęgę płasko.',
        },
        {
          type: 'p',
          text: 'Na panelu poza ekranem i diodami są dwa przyciski, których nazwy łatwo pomylić: **(wsuń)** podaje papier o jedną etykietę albo 25,4 mm, a **(wysuń)** wysuwa wstęgę z drukarki przy wymianie nośnika. Do tego **(cięcie)**, **(anuluj)** i **(wstrzymaj)**, który kasuje stan wstrzymania po błędzie.',
        },
        {
          type: 'p',
          text: 'Najbardziej praktyczna rzecz w tej maszynie nie jest wymieniona w specyfikacji: pod przyciskiem **? (Pomoc) – Sposób obsługi…** drukarka pokazuje na ekranie animowane instrukcje — załadowanie nośnika, wymiana worka z tuszem, wymiana zbiornika, czyszczenie prowadnic i rolek. Operator nie musi szukać instrukcji ani dzwonić do działu IT.',
        },
      ],
    },
    {
      title: 'Zakładanie rolki',
      blocks: [
        {
          type: 'p',
          text: 'Pokrywę papieru otwieraj dopiero po tym, jak na ekranie pojawi się ekran główny — otwarta wcześniej rozstraja ładowanie.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Zdejmij kołnierz z wrzeciona, ściskając jego dźwignie.',
            'Nasuń rolkę na wrzeciono do oporu i wróć kołnierzem tak, żeby dotykał rolki bez luzu.',
            'Obróć kołnierz w prawo, aż krawędź papieru zejdzie w dół, i wysuń około **300 mm** wstęgi.',
            'Podnieś uchwyty papieru, a ruchomą prowadnicę odsuń maksymalnie do siebie niebieską dźwignią.',
            'Ułóż papier wzdłuż prowadnicy i wyrównaj krawędź ze znacznikiem na ścieżce. Krawędź nie może być pofałdowana, naderwana ani z odklejającą się etykietą.',
            'Przytrzymaj wstęgę dłonią na płasko i dosuń ruchomą prowadnicę do krawędzi — bez luzu i bez zaciskania.',
            'Wsuń krawędź w szczelinę; papier zostanie pobrany automatycznie.',
            'Opuść uchwyty papieru, naciągnij wstęgę kołnierzem, zamknij pokrywę i naciśnij **(wstrzymaj)**.',
          ],
        },
        {
          type: 'youtube',
          id: 'pBz2Jm4wvm8',
          caption: 'Zakładanie rolki i składanki (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Zakładanie składanki',
      blocks: [
        {
          type: 'p',
          text: 'Składankę podaje się z zewnątrz, ale — inaczej niż w C6000 — stos stoi **po prawej stronie drukarki**, a nie za nią. Kroki wewnątrz maszyny są te same: uchwyty papieru do góry, prowadnica odsunięta, papier wzdłuż prowadnicy, dosunięcie ruchomej prowadnicy, wsunięcie krawędzi w szczelinę, uchwyty w dół.',
        },
        {
          type: 'p',
          text: 'Stos ustaw **co najmniej 15 mm** od drukarki i tak, żeby papier wchodził do szczeliny w linii prostej. Składanka nie może zwijać się tuż przy maszynie — odkształcony papier kończy się zacięciem albo pogorszeniem wydruku.',
        },
      ],
    },
    {
      title: 'Przewijarka TU-RC8000 i odbiór wydruku',
      blocks: [
        {
          type: 'p',
          text: 'Zadrukowaną wstęgę można nawijać z powrotem na rolkę opcjonalną przewijarką **TU-RC8000** (293 × 403 × 222 mm, 4,25 kg). Podłącza się ją po lewej stronie drukarki: otwiera się pokrywę złącza, ustawia przewijarkę na tym samym blacie i wsuwa element połączeniowy prosto w gniazdo. Papier przeciąga się przez przewijarkę po wysunięciu około **800 mm** wstęgi przyciskiem (wsuń).',
        },
        {
          type: 'p',
          text: 'Jedna rzecz, która w tej maszynie zaskakuje i bywa przyczyną zacięcia: **przed każdym zadaniem drukarka cofa wstęgę**, żeby ustawić początek druku na kolejnej etykiecie. Jeśli maszyna stoi daleko od komputera, operator nie wie, kiedy to nastąpi. Dlatego zanim dotkniesz wysuniętego papieru — zakładasz go na przewijarkę albo odrywasz składankę po perforacji — **naciśnij (wstrzymaj)** albo użyj przycisku cięcia. Papieru w trakcie druku nie wolno dotykać.',
        },
        {
          type: 'p',
          text: 'Wydruk musi wychodzić ze szczeliny prosto. Jeśli coś go zagina albo blokuje, druk wychodzi zniekształcony.',
        },
      ],
    },
    {
      title: 'Wymiana pakietów atramentowych SJIC48P',
      blocks: [
        {
          type: 'p',
          text: 'Instrukcję krok po kroku pokaże sama drukarka: **? (Pomoc) – Sposób obsługi… – Wymień pojemnik z tuszem**.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Otwórz pokrywę pakietów atramentowych.',
            'Wyjmij kasetę obiema rękami — nie ściskaj samego worka, bo tusz się rozleje.',
            'Unieś zużyty pakiet za uchwyt i wyjmij go z kasety, a na jego miejsce włóż nowy.',
            'Trzymając kasetę obiema rękami, **potrząśnij nią w górę i w dół pod kątem około 60°, mniej więcej 10 razy w ciągu 10 sekund**.',
            'Sprawdź, czy kolor worka zgadza się z oznaczeniem przy szczelinie, i wsuń kasetę do oporu.',
            'Zamknij pokrywę i naciśnij **(wstrzymaj)**.',
          ],
        },
        {
          type: 'p',
          text: 'C8000e bierze worki **SJIC48P** (BK albo MK, C, M, Y) — te same co CW-C8010. Inne numery należą do pozostałych wersji serii: SJIC47P do CW-C8000u, SJIC51P do C8030, SJIC52P do C8040 i C8050. Nie są zamienne. Pakiet zużyj w ciągu **roku od zamontowania** i trzech lat od produkcji; poniżej −20 °C tusz w worku potrafi zamarznąć.',
        },
      ],
    },
    {
      title: 'Zbiornik na zużyty atrament SJMB7500',
      blocks: [
        {
          type: 'p',
          text: 'Zbiornik zbiera tusz z czyszczeń głowicy i siedzi za tą samą pokrywą co worki. Wymiana: wysuń stary, zapakuj go w dołączony worek, wciśnij nowy oznaczeniem do góry, zamknij pokrywę i naciśnij **(wstrzymaj)**. Drukarka najpierw ostrzega, że zbliża się koniec eksploatacji, a dopiero potem blokuje pracę.',
        },
        {
          type: 'p',
          text: 'Numer to **SJMB7500** — wspólny z ColorWorks C7500. Przy niemal pełnym zbiorniku drukarka nie uruchomi czyszczenia głowicy, choć wszystkie inne funkcje zostają dostępne.',
        },
      ],
    },
    {
      title: 'Sprawdzanie dysz i czyszczenie głowicy',
      blocks: [
        {
          type: 'p',
          text: 'Wzór sprawdzania dysz wydrukujesz z panelu (**Menu – Konserwacja – Spr. dyszy głow. druk.**), z zakładki **Printer Utilities** w sterowniku albo z **WebConfig**. Wzór dopasowuje się do szerokości papieru ustawionej w drukarce.',
        },
        {
          type: 'p',
          text: 'Do wydruku wzoru nadaje się papier ciągły, etykieta pełnostronicowa albo etykieta wykrojona o długości **co najmniej 112 mm**. Na krótszej część wzoru wyląduje na podkładzie, a przy znacznikach z otworami — na płycie dociskowej.',
        },
        {
          type: 'p',
          text: 'Braki we wzorze to sygnał do **Czyszcz. głow. druk.** Jeśli po trzech próbach nic się nie poprawia, dopiero wtedy sięgnij po **Czyszczenie zaawansowane** — zużywa dużo więcej tuszu. W trakcie czyszczenia nie wyłączaj drukarki i nie otwieraj pokryw. Przy zbyt niskim poziomie tuszu albo zapełnionym zbiorniku czyszczenie się nie uruchomi.',
        },
      ],
    },
    {
      title: 'Automatyczna kontrola dysz',
      blocks: [
        {
          type: 'p',
          text: 'C8000e sam sprawdza dysze i potrafi dopiąć brakujące krople sąsiednimi — ale ustawienia różnią się od tych z C6000 i warto je przejrzeć przed uruchomieniem produkcji.',
        },
        {
          type: 'list',
          items: [
            '**Kontrola w trakcie druku jest fabrycznie wyłączona.** Po włączeniu ustawia się interwał od 1 do **25 000** wydruków (domyślnie 500).',
            '**Próg zatkania** — domyślnie **6** dysz.',
            '**Czyszczenie po wykryciu**: włączone, włączone poza drukowaniem (czyści po zakończeniu zadania) albo wyłączone.',
            '**Reakcja na przekroczenie progu**: drukarka domyślnie **drukuje dalej** i tylko informuje; można ustawić zatrzymanie w stan wstrzymania.',
            '**Druk zastępczy** dokłada brakujące krople sąsiednimi dyszami, maksymalnie za 16 dysz.',
          ],
        },
        {
          type: 'p',
          text: 'Dwa zastrzeżenia producenta. Druk zastępczy opiera się na pomiarze z początku zadania, więc dysza zatkana w trakcie długiej serii nie zostanie podmieniona. A na **papierze o wysokim połysku i na folii błyszczącej** uzupełnianie kropli bywa niepełne — na takim nośniku trzeba sprawdzić wydruk, zanim maszyna pojedzie z produkcją.',
        },
        {
          type: 'p',
          text: 'W odróżnieniu od modeli z przesuwną głowicą C8000e czyści tylko te głowice i kolory, w których wykrył zatkanie, a nie zawsze komplet — przy czterech osobnych głowicach to realna oszczędność tuszu.',
        },
      ],
    },
    {
      title: 'Czyszczenie okresowe o zadanej godzinie',
      blocks: [
        {
          type: 'p',
          text: 'Czyszczenie okresowe trwa **4–9 minut** i blokuje drukowanie, więc godzinę startu ustawia się pod rytm zakładu (fabrycznie 0:00, z dokładnością do minuty). O wyznaczonej porze zabieg rusza tylko wtedy, gdy drukarka jest włączona i sama uzna go za potrzebny. Godzina ustawiona bliżej niż 10 minut od bieżącej zadziała dopiero **24 godziny później**.',
        },
      ],
    },
    {
      title: 'Czyszczenie mechaniki',
      blocks: [
        {
          type: 'p',
          text: 'W tej maszynie środek czyszczący zależy od części i pomylenie ich potrafi zniszczyć element. Obudowę przecieraj suchą albo lekko zwilżoną ściereczką, bez alkoholu, benzyny, rozcieńczalnika, trichloroetylenu i rozpuszczalników ketonowych.',
        },
        {
          type: 'p',
          text: '**Nóż automatyczny — alkohol.** Etykiety, pył i klej tępią nieruchome ostrze. Usuwa się je patyczkiem kosmetycznym nasączonym alkoholem, prowadząc od obu końców ku środkowi, przy wyjętym papierze i odłączonym zasilaniu.',
        },
        {
          type: 'p',
          text: '**Prowadnice papieru — woda.** Miękka ściereczka zwilżona wodą i dokładnie wyciśnięta. Alkoholu i rozpuszczalników tu nie wolno używać. Instrukcję pokaże panel: **? (Pomoc) – Sposób obsługi… – Oczyść prowadnicę papieru**.',
        },
        {
          type: 'p',
          text: '**Rolki przytrzymujące papier — alkohol.** Po odchyleniu dźwigni i otwarciu górnej pokrywy zbiera się z nich klej i pył patyczkiem z alkoholem. Panel prowadzi krok po kroku przez **Oczyść rolkę przytrzymującą papier**.',
        },
        {
          type: 'p',
          text: '**Wykrywacz odstępu (strona emitująca światło) — woda.** Tusz, pył albo klej na przezroczystej płytce sprawiają, że papier nie jest pobierany albo wyjeżdża z błędem braku odstępu. Płytkę czyści się patyczkiem zwilżonym wodą, po podniesieniu pokrywy szczeliny wprowadzania papieru. Po czyszczeniu ścieżka papieru musi być sucha.',
        },
        {
          type: 'p',
          text: '**Płyta dociskowa — woda.** Miękka ściereczka albo patyczek; uważaj, żeby nie zostawić na płycie włókien.',
        },
        {
          type: 'youtube',
          id: 'UVvtb6JQAb8',
          caption: 'Czyszczenie drukarki (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Prześwit głowica–nośnik',
      blocks: [
        {
          type: 'p',
          text: 'Odległość głowicy od papieru ustawia się w czterech krokach — to ustawienie decyduje o tym, czy maszyna poradzi sobie z grubą zawieszką albo cienką folią.',
        },
        {
          type: 'list',
          items: [
            '**1** — około 0,11 mm: papier ciągły o wysokim połysku.',
            '**2** — do 0,24 mm: zwykłe etykiety i papier ciągły (ustawienie fabryczne).',
            '**3** — do 0,32 mm: znaczniki bez RFID.',
            '**4** — do 0,59 mm: znaczniki z układem RFID.',
          ],
        },
        {
          type: 'p',
          text: 'Zasada jest prosta: **rozmyty albo podwójny wydruk** to sygnał, żeby zejść o krok niżej, a **papier brudzony tuszem od ocierania o głowicę** — żeby podnieść o krok. Jeśli to nie pomaga, zostaje jeszcze **Media Hold Pressure**, czyli siła podciśnienia płyty dociskowej, w skali 1–10.',
        },
      ],
    },
    {
      title: 'Kiedy drukarka nie widzi etykiet',
      blocks: [
        {
          type: 'p',
          text: 'Komunikaty „Nie można wykryć papieru wybranego w Wykrywanie nośnika" i „Kalibracja nie powiodła się" znaczą, że tryb wykrywania nie pasuje do założonego nośnika. Do wyboru są cztery: odstęp, czarny znacznik, otwór w znaczniku i brak wykrywania.',
        },
        {
          type: 'p',
          text: 'Zanim zaczniesz szukać głębiej, sprawdź trzy rzeczy: czy **odstęp między etykietami nie przekracza 6 mm** (przy większym kalibracja jest niemożliwa), czy **zaczepy regulacyjne obu czujników — emitującego i odbierającego światło — stoją w tym samym położeniu**, i czy przezroczysta płytka wykrywacza nie jest zabrudzona. Dopiero potem zostaje kalibracja z **Menu – Konserwacja – Kalibracja** i regulacja czułości czujników opisana w Technical Reference Guide.',
        },
        {
          type: 'p',
          text: 'Osobny przypadek to komunikat o nieprawidłowo załadowanym papierze przy samym końcu rolki — drukarka potrafi nie rozpoznać, że nośnik się skończył. Wtedy trzeba sprawdzić, jak wygląda końcówka wstęgi przy rdzeniu.',
        },
      ],
    },
    {
      title: 'Ustawienia sterownika, które realnie zmieniają wydruk',
      blocks: [
        {
          type: 'p',
          text: 'Jeśli ustawienia panelu, PrinterSetting albo WebConfig różnią się od sterownika, obowiązuje **sterownik**.',
        },
        {
          type: 'list',
          items: [
            '**Media Form** — siedem wariantów, z **Tag (hole detection)** włącznie. Wybór przesądza, czym drukarka mierzy początek etykiety.',
            '**Width** 21,4–112 mm, **Length** do **1016 mm** (dla znaczników do 300 mm). Fabrycznie stoi 108 × 152,4 mm.',
            '**Gap Between Labels** 3–6 mm, fabrycznie 3 mm.',
            '**Left and Right Gap** 0–6 mm, a dla znaczników osobno lewy i prawy margines do 30 mm. Producent zaleca **nie schodzić poniżej 2 mm** — tusz zaczyna osadzać się wewnątrz drukarki i brudzić wydruki.',
            '**Media Coating Type** — typ powleczenia, od którego zależy dobór jakości; lista zależy od wybranej czerni.',
            '**Settings For Paper Handling After Print** — cięcie po ostatniej stronie, po wskazanej stronie, po komplecie albo zatrzymanie bez cięcia.',
            '**Banding Reduction** (−3 do 7) koryguje gęstość tuszu, gdy widać pasy koloru. Na papierze o wysokim połysku i folii błyszczącej ta korekta bywa nieskuteczna.',
          ],
        },
        {
          type: 'p',
          text: 'Do tego dochodzą dwa zabiegi, których nie ma w modelach z przesuwną głowicą: **Adjust Uneven Colors** wyrównuje kolor na szerokości wstęgi (do wydruku wzoru potrzeba pola co najmniej 50 × 25 mm), a **Bar Width Adjustment** zwęża kreski kodu, gdy tusz wsiąka w papier i rozlewa je ponad dopuszczalną szerokość.',
        },
        {
          type: 'youtube',
          id: 'd-G4M-BsKEM',
          caption: 'Konfiguracja sterownika w Windows (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'l0mzYOGICjE',
          caption: 'Konfiguracja sterownika w macOS (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Kody kreskowe: moduł i klasa ANSI',
      blocks: [
        {
          type: 'p',
          text: 'C8000e drukuje w 600 dpi, więc tabela modułów jest jedna i prostsza niż w modelach wielorozdzielczościowych. Dla klasy **ANSI C lub wyższej**:',
        },
        {
          type: 'list',
          items: [
            'Code 39, Codabar, Code 93, Code 128 i GS1-128: moduł **5** w układzie poziomym na każdym nośniku, **5** w pionowym na papierze matowym, syntetyku, błyszczącym, folii i wysokim połysku, ale **6** na papierze zwykłym i teksturowanym.',
            'ITF i GS1 DataBar: moduł **6** niezależnie od orientacji i nośnika.',
          ],
        },
        {
          type: 'p',
          text: 'Trzy rzeczy z instrukcji, które ratują klasę kodu. Tusz wsiąkający w papier pogrubia kreski — zwężenie ich funkcją **Bar Width Adjustment** zwykle podnosi ocenę. Wstrząsy przy transporcie albo montażu potrafią obniżyć osiąganą klasę i wtedy pomaga **Adjust Uneven Colors**. I pułapka ustawień: przy **Rotation Settings** ustawionym na **Normal** albo **Rotate 270 Degrees** kod w ogóle się nie wydrukuje.',
        },
      ],
    },
    {
      title: 'Sieć, SAP i systemy nadrzędne',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka ma LAN **1000BASE-T** (wymagana skrętka ekranowana kategorii 5e lub wyższej), **USB SuperSpeed** i gniazdo USB A pod adapter Wi-Fi **OT-WL06**. Ustawienia sieciowe wprowadza się z panelu albo przez WebConfig; raport połączenia i arkusz stanu drukuje się z **Menu – Stan drukarki/Drukowanie** na nośniku od 101,6 × 152,4 mm wzwyż. Obsługiwana jest chmura **Loftware Cloud**.',
        },
        {
          type: 'p',
          text: 'Jeśli połączenie sieciowe jest niestabilne, drukarka sama podpowiada przyczynę: **IEEE 802.3az (Energy Efficient Ethernet)**. Wyłącza się je po stronie komputera i drukarki, w WebConfig w zakładce ustawień sieciowych.',
        },
        {
          type: 'p',
          text: 'Z SAP-em C8000e pracuje na trzy sposoby, tak samo jak C6000 i C6500:',
        },
        {
          type: 'list',
          items: [
            '**Direct printing** — wprost z systemu SAP. Językiem drukarki jest ESC/Label, którego standardowy sterownik SAP nie zna, więc potrzebne są pliki Epsona: Device type **YEPCW6X.PRI** i sterownik ABAP. Instalację opisują noty **SAP 2867759** i **1103422**.',
            '**Indirect printing** — przez komputer z Windows ze sterownikiem Epsona i oprogramowaniem Sprint albo SAP LPD.',
            '**High Volume Printing** — etykiety GHS z piktogramami, dane z modułów EHS i GLM przez serwer WWI, z wtyczką Epsona do sterownika HVP.',
          ],
        },
        {
          type: 'p',
          text: 'Poza Windows dostępne są sterowniki dla **macOS** i **Linuksa** (CUPS plus Epson Label Printer Utility), a drukarka rozumie też **ZPL II**, więc da się nią zastąpić czarno-białą drukarkę etykiet bez przepisywania aplikacji. W pamięci maszyny można zapisać obrazy, szablony i czcionki — obraz PNG drukowany pod danymi zastępuje rolki zadrukowane wcześniej w drukarni. Sygnały portu **EXT I/F** opisuje osobny dokument Epsona, „CW-C8000 Series External I/O Technical Reference Guide".',
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
            '**Nie można wykryć papieru wybranego w „Wykrywanie nośnika"** — zmień tryb wykrywania albo nośnik.',
            '**Rozmiar ładowanego nośnika nie odpowiada ustawieniom układu** — obszar wydruku nie mieści się na papierze.',
            '**Nie wykryto etykiet** — wyjmij papier i załaduj go ponownie; drukarka zaproponuje instrukcję na ekranie.',
            '**Kalibracja nie powiodła się** — nośnik poza możliwościami czujnika albo odstęp większy niż 6 mm.',
            '**Niedostęp.** — naciśnięto przycisk cięcia tam, gdzie papier jest już odcięty. Wysuń wstęgę przyciskiem (wsuń).',
            '**Pakiet atramentowy nie jest prawidłowo zainstalowany / Nie można rozpoz. pakietu** — wyjmij i włóż pakiet ponownie, potem wymień na nowy.',
            '**Zainstalowany pakiet atramentowy jest niezgodny z tą drukarką** — worek z innej wersji serii.',
            '**Pojemnik konserwacyjny jest zużyty** — wymień zbiornik SJMB7500.',
            '**Jakość druku może się pogorszyć, ponieważ nie można wykryć stanu dyszy** — wyłączona automatyczna kontrola dysz.',
            '**Komunikacja pomiędzy siecią i drukarką jest niestabilna** — wyłącz IEEE 802.3az.',
            '**Żądanie konserwacji / Koniec przydatności serwisowej części** z kodem — część do wymiany przez serwis; drugiego komunikatu nie da się skasować, drukowanie zostaje zablokowane.',
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
            '**Białe pionowe smugi na szerokość papieru** — zadrukowany papier został cofnięty i docisnęły go rolki. Oddzielaj wydruk przyciskiem cięcia albo zmień tryb w Settings For Paper Handling After Print na inny niż zatrzymanie bez cięcia.',
            '**Białe poziome smugi wzdłuż kierunku druku** — zatkane dysze. Wzór sprawdzania dysz, czyszczenie głowicy, a po trzech nieskutecznych próbach czyszczenie zaawansowane.',
            '**Białe albo czarne pasy** — źle dobrana korekta **Banding Reduction**.',
            '**Nieprawidłowe kolory po przenosinach** — po transporcie kolory potrafią się zmieszać w głowicy; pomaga czyszczenie.',
            '**Rozmyty wydruk, podwójne znaki, przesunięta pozycja** — prowadnica nie dosunięta do krawędzi, źle ustawiony prześwit głowica–nośnik albo potrzebna korekta **Adjust Uneven Colors**.',
            '**Papier poplamiony tuszem** — za mały docisk płyty (**Media Hold Pressure**) albo za mały prześwit głowicy.',
            '**Papier wjeżdża i wyjeżdża z błędem** — tryb wykrywania nośnika nie odpowiada papierowi.',
            '**Papier założony, ale nie jest pobierany** — zaczepy obu czujników w różnych położeniach; ustaw je tak samo i uruchom regulację czujnika wykrywania nośnika.',
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
            'Otwórz pokrywę papieru, przesuń dźwignię do tyłu i otwórz górną pokrywę.',
            'Podnieś uchwyty papieru i odsuń ruchomą prowadnicę maksymalnie do siebie.',
            'Podnieś jednostkę dociskową za zaczep i sprawdź, czy nie zostały na niej etykiety.',
            'Podnieś pokrywę szczeliny podawania papieru i sprawdź to samo.',
            'Odetnij papier ręcznie i wycofaj go, uważając na tusz.',
            'Odetnij wstęgę przy rolkach przytrzymujących i usuń resztkę.',
            'Zwiń papier, obracając kołnierz w prawo, aż krawędź przejdzie przez szczelinę wprowadzania.',
            'Zamknij obie pokrywy i naciśnij **(wstrzymaj)**.',
          ],
        },
        {
          type: 'p',
          text: 'Procedura dla składanki różni się tylko końcówką — nie ma zwijania na rolkę. Po wyjęciu papieru sprawdź, czy w środku nie zostały etykiety albo klej; resztki są najczęstszą przyczyną serii kolejnych zacięć. Jeśli zacięcia się powtarzają, wyczyść prowadnice papieru i rolki przytrzymujące.',
        },
      ],
    },
    {
      title: 'Dane techniczne',
      blocks: [
        {
          type: 'list',
          items: [
            'Liniowy druk atramentowy czterokolorowy (CMY-K), tusz pigmentowy na bazie wody, pakiety **SJIC48P** po 480 ml.',
            'Rozdzielczość **600 × 1200 dpi**, prędkość **150 albo 300 mm/s**, szerokość druku do 108 mm.',
            'Interfejsy: LAN 1000BASE-T/100BASE-TX/10BASE-T, USB SuperSpeed, EXT I/F, opcjonalne Wi-Fi przez adapter OT-WL06.',
            'Wymiary **420 × 620 × 392 mm** (wys. × szer. × gł.), masa **około 35 kg**.',
            'Zasilanie 100–240 V, 1,4 A. Pobór mocy: ok. **83 W** przy pracy, 3,32 W w gotowości, 0,41 W po wyłączeniu.',
            'Praca w temperaturze **5–35 °C** przy wilgotności 20–80 %; druk kodów kreskowych od **15 °C**. Głośność ok. **57 dB**, z podłączoną przewijarką 60 dB.',
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
            'Pakiety atramentowe **SJIC48P-BK** albo **SJIC48P-MK**, **SJIC48P-C**, **SJIC48P-M**, **SJIC48P-Y** po 480 ml. Okres użytkowania: rok od zamontowania, trzy lata od produkcji.',
            'Zbiornik na zużyty atrament **SJMB7500**.',
            'Przewijarka **TU-RC8000** — nawija zadrukowaną wstęgę z powrotem na rolkę.',
            'Adapter bezprzewodowej sieci LAN **OT-WL06** do portu USB A.',
          ],
        },
        {
          type: 'p',
          text: 'Pakiety i zbiornik oddaj do utylizacji zgodnie z przepisami. Kalibracja kolorów drukarki jest robiona pod oryginalny tusz, a uszkodzenia wynikające z użycia nieoryginalnych materiałów Epson wyłącza z gwarancji.',
        },
      ],
    },
  ],
}
