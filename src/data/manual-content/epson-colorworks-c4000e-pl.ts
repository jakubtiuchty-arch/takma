import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie oficjalnego „CW-C4000 Series Przewodnik użytkownika”
// (Epson, 92 strony) oraz „CW-C4000 Series Technical Reference Guide” (EN, rev. L).
// Zakres: wybór czerni przy pierwszym uruchomieniu, nośniki, zakładanie papieru, przysłony,
// tusze SJIC42P i zbiornik SJMB4000, czyszczenie głowicy i noża, automatyczna kontrola dysz,
// kalibracja czujników, ustawienia sterownika, komunikaty, problemy z jakością i dane techniczne.

export const epsonColorworksC4000ePl: PolishManual = {
  updatedAt: '2026-09-20',
  intro:
    'Najważniejsze z obsługi Epson ColorWorks C4000e po polsku: wybór czarnego tuszu przy pierwszym uruchomieniu i jego skutki, jaki papier wolno założyć, zakładanie rolki i składanki, przysłony na płycie dociskowej, wymiana wkładów SJIC42P i zbiornika SJMB4000, czyszczenie głowicy i noża, kontrola dysz, kalibracja czujników oraz komunikaty i problemy z wydrukiem.',
  sections: [
    {
      title: 'Wybór czerni przy pierwszym uruchomieniu',
      blocks: [
        {
          type: 'p',
          text: 'Najważniejsza decyzja przy tej drukarce zapada raz i nie da się jej cofnąć. Przy pierwszym włączeniu C4000e pyta, którego czarnego tuszu będzie używać: **BK (czarny błyszczący)** czy **MK (czarny matowy)**. Po wyborze i napełnieniu głowicy zmiana nie jest możliwa.',
        },
        {
          type: 'p',
          text: 'Wybór przesądza, na czym drukarka będzie umiała drukować — i to nie jest niuans, tylko dwie różne listy nośników:',
        },
        {
          type: 'list',
          items: [
            '**Tylko z czernią matową (MK)**: papier zwykły, papier teksturowany, opaski na nadgarstek.',
            '**Tylko z czernią błyszczącą (BK)**: papier błyszczący, papier o wysokim połysku, przezroczysta folia błyszcząca.',
            '**Obie wersje**: papier matowy i nośniki syntetyczne.',
          ],
        },
        {
          type: 'p',
          text: 'W praktyce: **MK** bierze się do etykiet logistycznych, magazynowych i produktowych na papierze matowym, **BK** do etykiet, które mają wyglądać jak z drukarni, na papierze błyszczącym. Jeśli nie wiesz, co będziesz drukować za rok, MK obsługuje szerszy zestaw papierów.',
        },
        {
          type: 'youtube',
          id: 'uNNfAog6HYI',
          caption: 'Rozpakowanie i pierwsze uruchomienie CW-C4000 (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Jakiego papieru nie wolno zakładać',
      blocks: [
        {
          type: 'list',
          items: [
            '**Papier termiczny** — nie ma powleczenia pod tusz, nadruk się rozmazuje.',
            '**Papier sklejony taśmą** albo przymocowany taśmą do rdzenia rolki.',
            '**Arkusze formatu A i B** — drukarka pracuje na rolce albo składance.',
            '**Podkład przezroczysty** — czujnik nie rozpozna przerwy między etykietami.',
          ],
        },
        {
          type: 'p',
          text: 'Zakres nośnika: etykiety wykrojone z rolki od **25,4 do 112 mm** szerokości papieru (etykieta 21,4–108 mm), ze składanki od 50 mm, odstęp między etykietami **2–6 mm**. Etykiety krótsze niż 10 mm przy automatycznym cięciu potrafią przywierać do ostrza.',
        },
      ],
    },
    {
      title: 'Budowa i panel',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu: dźwignia zwalniania przedniej pokrywy, pokrywa wkładów, pokrywa zbiornika na zużyty atrament i prowadnice wysuwania papieru z dźwignią blokady. W środku prowadnice rolki i **przysłony na płycie dociskowej**. Z tyłu prowadnice składanki i tylna pokrywa, a obok złącza: zasilanie, LAN, USB typu B i USB typu A na adapter Wi-Fi OT-WL06.',
        },
        {
          type: 'p',
          text: 'Wersję oprogramowania sprawdzisz na panelu: **Menu – Stan drukarki/Drukowanie – Wersja firmware**, albo drukując arkusz stanu. Warto to zrobić przed zgłoszeniem usterki — część problemów znika po aktualizacji.',
        },
      ],
    },
    {
      title: 'Zakładanie papieru',
      blocks: [
        {
          type: 'p',
          text: 'Rolkę zakłada się od przodu: dźwignia zwalniania otwiera pokrywę, prowadnice rolki ustawia się na szerokość papieru i blokuje, początek wstęgi wsuwa do oporu. Potem ustaw **prowadnice wysuwania** z przodu, bo bez nich odcięta etykieta przesuwa się na bok.',
        },
        {
          type: 'p',
          text: 'Składankę podaje się od tyłu, przez tylną pokrywę, z prowadnicą podawania umieszczoną wewnątrz przedniej pokrywy. Stos musi stać prosto za drukarką, a perforacja być wyprostowana — zgięcie bywa odczytywane jako krawędź etykiety.',
        },
        {
          type: 'youtube',
          id: 'DYLoZk-yVfk',
          caption: 'Zakładanie rolki etykiet (film Epsona, po angielsku)',
        },
        {
          type: 'youtube',
          id: 'ciXpC9SunA4',
          caption: 'Zakładanie papieru składanego (film Epsona, po angielsku)',
        },
      ],
    },
    {
      title: 'Przysłony na płycie dociskowej',
      blocks: [
        {
          type: 'p',
          text: 'Przysłony odsysają papier do płyty. Te, które przy danej szerokości nośnika powinny być zamknięte, przy otwartych powodują **białe smugi przy krawędziach** i **zamazany wydruk** — strumień powietrza zaburza lot kropli. Ustawienie jest opisane na naklejce w środku drukarki i trzeba je poprawiać po każdej zmianie szerokości papieru.',
        },
      ],
    },
    {
      title: 'Wymiana wkładów SJIC42P',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Otwórz pokrywę wkładów.',
            'Naciśnij dźwignię w dół i wyjmij zużyty wkład.',
            '**Wstrząśnij nowym wkładem** — poziomo, o około 5 cm w obie strony, 15 razy w ciągu 5 sekund.',
            'Wyjmij wkład z worka, nie dotykając styków ani otworu podawania tuszu.',
            'Wciśnij go za oznaczenie **Push**, aż kliknie.',
            'Zamknij pokrywę.',
          ],
        },
        {
          type: 'p',
          text: 'Tusz jest **pigmentowy**, więc nadruk znosi wodę i tarcie. Wkład ma 6 miesięcy od zamontowania i 3 lata od produkcji. Drukarka pracuje jeszcze po ostrzeżeniu o niskim poziomie; wymiany wymaga dopiero komunikat o pustym wkładzie.',
        },
        {
          type: 'p',
          text: 'Uwaga przy zakupie z zagranicy: numery są różne dla wersji regionalnych i kolejnych modeli serii. Do **CW-C4000e** pasuje [SJIC42P](/tusze-do-kolorowych-drukarek), do amerykańskiej CW-C4000u — SJIC41P, a modele C4020 do C4050 mają jeszcze inne rodziny. Nie są wymienne.',
        },
      ],
    },
    {
      title: 'Zbiornik na zużyty atrament SJMB4000',
      blocks: [
        {
          type: 'p',
          text: 'Zbiornik zbiera tusz z czyszczenia dysz — to materiał eksploatacyjny, nie awaria. Wymienia się go bez narzędzi: otwórz pokrywę, wyjmij stary do worka z opakowania nowego, wsuń nowy do oporu, zamknij pokrywę i naciśnij przycisk wstrzymania.',
        },
        {
          type: 'p',
          text: 'Przy okazji wymiany warto wyczyścić płytę dociskową — ściereczka i płatki są w opakowaniu nowego zbiornika. Ten sam SJMB4000 pasuje do [D3800e](/produkt/epson-colorworks-d3800e).',
        },
      ],
    },
    {
      title: 'Sprawdzanie dysz i czyszczenie głowicy',
      blocks: [
        {
          type: 'p',
          text: 'Białe poziome smugi to prawie zawsze zatkane dysze, nie zużyta głowica. Wydrukuj **wzór sprawdzania dysz**, zobacz, których kolorów brakuje, i dopiero wtedy uruchom czyszczenie z panelu. Po przenosinach drukarki pomieszane kolory też usuwa czyszczenie — to skutek wibracji w transporcie.',
        },
        {
          type: 'p',
          text: 'Każdy cykl zużywa tusz i zapełnia zbiornik na zużyty atrament, więc nie ma sensu powtarzać go w nieskończoność. Gdy po dwóch cyklach koloru nadal brakuje, głowica wymaga płukania w [serwisie](/serwis-kolorowych-drukarek-epson).',
        },
      ],
    },
    {
      title: 'Automatyczna kontrola dysz',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka sama sprawdza dysze: przy włączeniu, po zamknięciu pokrywy po zacięciu papieru, przed zaplanowanym czyszczeniem i co zadaną liczbę wydruków. Gdy wynik przekroczy próg, uruchamia czyszczenie i powtarza test, a przy trwałym zatkaniu **drukuje zastępczo sąsiednimi dyszami**, żeby nie zostawić białej linii w kodzie kreskowym.',
        },
        {
          type: 'p',
          text: 'Mechanizm nie wykrywa wszystkiego — pojedyncze brakujące krople potrafią przejść. Przy wydrukach, od których dużo zależy, producent zaleca czcionki o wysokości co najmniej 3 punktów i pozostawienie fabrycznych ustawień kontroli dysz. Osobno można ustawić **czyszczenie okresowe o konkretnej godzinie**; trwa od 4 do 17 minut, więc ustawia się je poza czasem druku.',
        },
      ],
    },
    {
      title: 'Czyszczenie noża i płyty dociskowej',
      blocks: [
        {
          type: 'p',
          text: 'Nóż tnie gorzej, gdy osiądzie na nim klej z etykiet. Czyszczenie wygląda tak:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Wyłącz drukarkę i wyjmij wtyczkę z gniazdka.',
            'Otwórz przednią pokrywę i wyjmij papier.',
            'Usuń klej z nieruchomego ostrza po stronie przedniej pokrywy, płatkiem nasączonym alkoholem.',
          ],
        },
        {
          type: 'p',
          text: 'Ostrza nie wolno dotykać palcem — łatwo się skaleczyć. Nie używaj benzyny, rozcieńczalnika, trichloroetylenu ani rozpuszczalników ketonowych, bo niszczą plastik i gumę, i nie pryskaj alkoholem bezpośrednio na nóż.',
        },
      ],
    },
    {
      title: 'Kiedy drukarka nie widzi etykiet',
      blocks: [
        {
          type: 'p',
          text: 'W drukarce są dwa czujniki: jeden wykrywa krawędź etykiety, drugi czarny znacznik. Przy nietypowym nośniku zamiast zmieniać papier przestaw czułość: **[Menu] – [Maintenance] – [Calibration]**, najpierw **Simple Media Detect** (szybka korekta progu), a dopiero potem **Media Detect** (czułość obu czujników). Kalibracja nie zadziała, gdy odstęp między etykietami przekracza 6 mm.',
        },
      ],
    },
    {
      title: 'Ustawienia sterownika, które zmieniają wydruk',
      blocks: [
        {
          type: 'list',
          items: [
            '**Media Coating Type** — musi zgadzać się z rzeczywistym nośnikiem, inaczej pojawiają się smugi.',
            '**Print Quality** — od 300 × 600 dpi po 1200 × 1200 dpi; im wyżej, tym wolniej, bo drukarka kładzie więcej kropli.',
            '**Ink Profile** i **Ratio of Black to Composite** — gęstość tuszu i udział czarnego wkładu w czerni.',
            '**Bar Width Adjustment** — korekta grubości kresek, gdy skaner ma problem z odczytem.',
            '**Media Hold Pressure** i czas schnięcia — przy cienkich i błyszczących nośnikach.',
            '**Zachowanie po wydruku** — odciąć po ostatniej etykiecie, na wskazanej etykiecie albo nie ciąć wcale.',
          ],
        },
        {
          type: 'p',
          text: 'Pułapka przy kilku stanowiskach: zmiany w **Preferencjach drukowania** dotyczą tylko zalogowanego użytkownika. Żeby objęły wszystkich, trzeba użyć **Domyślnych ustawień drukowania** na karcie Zaawansowane.',
        },
      ],
    },
    {
      title: 'Komunikaty i problemy z jakością',
      blocks: [
        {
          type: 'list',
          items: [
            '**Błąd podawania papieru** — nośnik nie zgadza się z ustawieniami Źródło nośnika i Forma nośnika.',
            '**Nie można wykryć papieru** — czujnik szuka przerwy, a w drukarce leży papier ciągły (albo odwrotnie).',
            '**Kalibracja nie powiodła się** — metoda wykrywania nie pasuje do nośnika albo odstęp przekracza 6 mm.',
            '**Białe poziome smugi** — zatkane dysze; test dysz i czyszczenie.',
            '**Smugi przy krawędziach, zamazany wydruk** — źle ustawione przysłony.',
            '**Wydruk ucieka na bok** — prowadnice nie trzymają krawędzi albo rolka nie jest wyśrodkowana.',
            '**Papier poplamiony tuszem** — zabrudzona płyta dociskowa.',
          ],
        },
        {
          type: 'p',
          text: 'Uwaga o kodach kreskowych: producent podaje dla nich węższy zakres temperatury, **15–35 °C**, podczas gdy zwykły druk działa od 5 °C. W chłodnej hali kod potrafi nie przejść weryfikacji, choć etykieta wygląda dobrze.',
        },
      ],
    },
    {
      title: 'Dane techniczne',
      blocks: [
        {
          type: 'list',
          items: [
            'Druk: atramentowy szeregowy, cztery kolory, tusz **pigmentowy**.',
            'Rozdzielczość: 300 × 600, 600 × 600, 600 × 1200 i 1200 × 1200 dpi.',
            'Prędkość przy pasie 101,6 mm: 100 / 70 / 48 / 18 / 8 mm/s zależnie od trybu jakości.',
            'Nóż automatyczny: pełne cięcie.',
            'Interfejsy: Ethernet **1000BASE-T**, USB 2.0 High-Speed, opcjonalnie Wi-Fi OT-WL06.',
            'Zasilanie: zasilacz M248B, 42 V DC, 1,38 A. Pobór: ok. 28,2 W w pracy, 2,6 W w gotowości, 0,13 W po wyłączeniu.',
            'Wymiary: 310 × 283 × 285 mm, waga ok. 13 kg.',
            'Warunki pracy: 5–35 °C (kody kreskowe 15–35 °C), wilgotność 20–80 %.',
            'Opcje: kaseta na papier OT-PT40, adapter Wi-Fi OT-WL06.',
          ],
        },
      ],
    },
  ],
}
