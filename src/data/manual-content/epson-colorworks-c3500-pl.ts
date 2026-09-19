import type { PolishManual } from '@/data/manuals'

// Skrócona instrukcja po polsku na podstawie „TM-C3500 Technical Reference Guide” (Epson, rev. I).
// Zakres: obsługa codzienna, nośniki, tusze i pojemnik konserwacyjny, ustawienia w PrinterSetting,
// sieć, komunikaty na wyświetlaczu, problemy z jakością, czyszczenie, specyfikacja.

export const epsonColorworksC3500Pl: PolishManual = {
  updatedAt: '2026-09-19',
  intro:
    'Najważniejsze informacje o obsłudze kolorowej drukarki etykiet Epson ColorWorks C3500 (TM-C3500) po polsku: budowa i przyciski, pierwsze uruchomienie, zakładanie rolki i papieru składanego, wymiana wkładów z tuszem i pojemnika konserwacyjnego, ustawienia nośników i sieci, komunikaty na wyświetlaczu, czyszczenie oraz specyfikacja.',
  sections: [
    {
      title: 'Jak drukuje ColorWorks C3500',
      blocks: [
        { type: 'p', text: 'ColorWorks C3500 to biurkowa drukarka atramentowa do etykiet w pełnym kolorze. Drukuje czterema kolorami (**czarny, cyan, magenta, żółty**) z osobnych wkładów [SJIC22P](/tusze-do-kolorowych-drukarek) z tuszem **pigmentowym**, który po wyschnięciu nie rozmazuje się od wody. Rozdzielczość to **360 × 360 dpi** albo **720 × 360 dpi**, prędkość do **103 mm/s** przy szerokości druku 56 mm (85 mm/s przy 104 mm w trybie 360 dpi).' },
        { type: 'p', text: 'Drukarka przyjmuje **rolki** i **papier składany** (fanfold): papier ciągły, papier ciągły z czarnym znacznikiem, etykiety pełnostronicowe, etykiety wykrojone z przerwą (gap) lub z czarnym znacznikiem, także przezroczyste, oraz opaski. Czujniki wykrywają czarne znaczniki i przerwy między etykietami. Wbudowana **gilotyna** odcina każdą etykietę, a **USB 2.0** i **Ethernet** są w standardzie. Rolkę i wkłady wymienia się od przodu, bez przestawiania drukarki.' },
        { type: 'p', text: 'Trwałość według producenta: głowica **6 mld kropli na dyszę**, mechanizm podawania 1,5 mln stron (150 km zwykłego papieru, 75 km matowego), gilotyna 1,5 mln cięć na zwykłym papierze i 750 tys. na matowym, MTBF **88 000 godzin**.' },
      ],
    },
    {
      title: 'Budowa drukarki i panel',
      blocks: [
        { type: 'p', text: 'Z przodu znajdują się: **włącznik zasilania** (z nakładaną osłoną), **dźwignia zwalniająca** pokrywę rolki, **pokrywa rolki**, **pokrywa wkładów z tuszem**, prowadnica wyjścia papieru z blokadą, stolik i wysuwana **tacka na wydruki** oraz panel sterowania. Za pokrywą wkładów kryją się przełączniki **DIP** i przycisk regulacji kontrastu wyświetlacza. Pojemnik konserwacyjny ma własną pokrywę.' },
        { type: 'p', text: 'Panel: diody **Power**, **Status**, **Paper** i **Ink**, dwuwierszowy wyświetlacz **LCD** oraz przyciski **FEED** (podawanie), **CUT** (odcięcie) i **Cleaning** (czyszczenie głowicy). Pierwszy wiersz wyświetlacza pokazuje stan drukarki, drugi ikony poziomu każdego z czterech tuszy i zapełnienia pojemnika konserwacyjnego; litera **R** oznacza źródło nośnika ustawione na rolkę, **F** na papier składany.' },
        { type: 'p', text: 'Z tyłu, na dole, są złącza: **zasilanie** (dedykowany zasilacz), **USB**, **LAN** z diodą Link (świeci przy połączeniu z siecią, miga przy odbiorze danych), zaczep na kabel, przycisk **Status Sheet** oraz pokrywa i prowadnica papieru składanego.' },
      ],
    },
    {
      title: 'Przyciski: co robią',
      blocks: [
        { type: 'list', items: [
          '**Włącznik**: włącza drukarkę; przytrzymanie około 0,5 s wyłącza. Gdy przełącznik DIP 1 jest w pozycji ON, włącznik tylko resetuje drukarkę, a zasilanie steruje się z listwy lub rozdzielni.',
          '**FEED**: przy nośnikach ciągłych jedno naciśnięcie podaje 15 mm, przytrzymanie podaje papier do 6 s. Przy etykietach wykrojonych i nośnikach z czarnym znacznikiem podaje papier do pozycji startu druku. Po wybudzeniu z trybu oszczędzania wentylator płyty potrzebuje około 2 s, zanim papier ruszy.',
          '**CUT**: podaje papier do pozycji cięcia i odcina. Drukarka nie tnie dwa razy w tym samym miejscu, żeby nie zostawiać skrawków; od naciśnięcia do cięcia mijają około 2 s.',
          '**Cleaning**: przytrzymanie około **3 s** uruchamia czyszczenie głowicy. W sterowniku można ustawić, czy przycisk działa też w trakcie druku (druk zostaje przerwany, wyczyszczony i wznowiony) albo wyłączyć go całkiem.',
          '**Status Sheet** (z tyłu): drukuje arkusz z ustawieniami sieci. Włączenie drukarki z przytrzymanym przyciskiem przez co najmniej 20 s przywraca fabryczne ustawienia interfejsu LAN.',
          '**Kontrast LCD** (pod pokrywą wkładów): ustawienie zapisuje się w pamięci i zostaje po wyłączeniu.',
        ] },
      ],
    },
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'W pudełku są: drukarka, dedykowany zasilacz z kablem, komplet **czterech wkładów z tuszem**, **pojemnik konserwacyjny**, kabel USB, tacka na wydruki, prowadnica papieru składanego (zamocowana z tyłu na pokrywie), osłona włącznika, rolka etykiet na start, instrukcja i płyta z oprogramowaniem.' },
        { type: 'p', text: 'Miejsce pracy: drukarka musi stać **poziomo**, na stabilnym blacie, z dala od kurzu. Z przodu zostaw miejsce na pełne otwarcie pokrywy rolki i pokrywy wkładów, z tyłu co najmniej **10 cm**. Nie kładź na niej niczego cięższego niż 10 kg ani niczego, co wibruje. Kable nie mogą przechodzić pod obudową.' },
        { type: 'p', text: 'Instalacja na komputerze z Windows przebiega przez program **Install Navi** (z płyty lub ze strony Epson): drukarka ma być **wyłączona**, kreator instaluje sterownik, prowadzi przez podłączenie i pierwsze ładowanie tuszu, a na koniec drukuje stronę testową. Jeśli używasz rolki innej niż startowa, w kroku **Media Layout Creation** wybierz **Yes** i utwórz układ nośnika (rodzaj, szerokość, długość, jakość, cięcie). Po zapisaniu układu kreator prosi o restart drukarki.' },
        { type: 'p', text: 'Pierwsze ładowanie tuszu wypełnia dysze głowicy, więc z pierwszego kompletu wkładów wyjdzie mniej etykiet niż z kolejnych, a pojemnik konserwacyjny zapełni się szybciej. Drukarkę wyłączaj **tylko włącznikiem**: wtedy głowica zostaje zamknięta i tusz w niej nie zasycha. Wyrwanie kabla z prądu pomija tę czynność.' },
      ],
    },
    {
      title: 'Osłona włącznika i przełączniki DIP',
      blocks: [
        { type: 'p', text: 'Osłona włącznika chroni przed przypadkowym wyłączeniem. Można ją założyć w całości (włącznik zostaje niedostępny, zasilanie steruje się z zewnątrz, a przed założeniem trzeba ustawić **DIP 1 na ON**) albo najpierw przebić w niej otwór twardym, cienkim narzędziem i włączać drukarkę przez ten otwór. Otworu nie da się zrobić po założeniu osłony.' },
        { type: 'p', text: 'Przełączniki DIP znajdują się pod pokrywą wkładów, za osobną zaślepką. Zmieniaj je tylko przy **wyłączonym zasilaniu**, końcówką małego śrubokręta; nowe ustawienie działa po włączeniu drukarki.' },
        { type: 'list', items: [
          '**DIP 1**: OFF = włącznik włącza i wyłącza, ON = włącznik tylko resetuje.',
          '**DIP 2 i 4**: do użytku serwisowego, zostawić OFF.',
          '**DIP 5, 6, 7**: język wyświetlacza. Angielski to OFF, OFF, ON; są też niemiecki, francuski, włoski, hiszpański, portugalski, holenderski i japoński. Polskiego nie ma, komunikaty w tej instrukcji podajemy po angielsku, tak jak pokazuje je drukarka.',
          '**DIP 8**: głośność sygnału dźwiękowego, ON = głośno, OFF = cicho.',
        ] },
      ],
    },
    {
      title: 'Zakładanie rolki etykiet',
      blocks: [
        { type: 'p', text: 'Rolka wchodzi do komory od przodu, nadrukiem do góry. Kolejność:' },
        { type: 'list', ordered: true, items: [
          'naciśnij dźwignię zwalniającą i pociągnij ją do siebie, żeby otworzyć pokrywę rolki;',
          'odblokuj prowadnicę rolki, odsuń lewą prowadnicę i wsuń rolkę do oporu stroną do zadruku ku górze;',
          'zablokuj prowadnicę rolki;',
          'ustaw **przesłony na płycie** według szerokości papieru (tabela niżej);',
          'cienkim narzędziem zwolnij blokadę prowadnicy wyjścia, dosuń prowadnicę do szerokości rolki i zablokuj ją;',
          'zamknij pokrywę i włącz drukarkę; drukarka sama podaje papier, żeby zlikwidować luz. Na wyświetlaczu ma być litera **R**.',
        ] },
        { type: 'p', text: 'Przesłony na płycie (naklejka z instrukcją jest na górze obudowy) zamykają otwory ssące poza papierem. Źle ustawione przesłony to najczęstsza przyczyna białych linii, rozmazanych krawędzi i zabrudzonego papieru.' },
        { type: 'list', items: [
          'szerokość papieru lub podkładu od 30 do 62 mm: wszystkie przesłony zamknięte;',
          '62 do 79 mm: otwarte tylko najbardziej wewnętrzne;',
          '79 do 97 mm: otwarte dwa wewnętrzne rzędy;',
          '97 do 112 mm: otwarte trzy wewnętrzne rzędy;',
          '112 mm: wszystkie otwarte.',
        ] },
        { type: 'p', text: 'Papier ma wychodzić z prowadnicy wyjścia prosto. Jeśli coś go odchyla, wydruk może być zniekształcony. Tacka na wydruki zbiera kilka odciętych arkuszy papieru składanego; odcinków z rolki nie utrzyma.' },
      ],
    },
    {
      title: 'Papier składany (fanfold)',
      blocks: [
        { type: 'p', text: 'Papier składany podaje się od tyłu. Obsługiwane formy to etykiety wykrojone z czarnym znacznikiem lub z przerwą oraz papier ciągły z czarnym znacznikiem; szerokość 50–108 mm. Podkład papieru składanego jest grubszy niż w rolkach, więc czujnik przerwy między etykietami może wymagać regulacji (sekcja o ustawieniach).' },
        { type: 'p', text: 'Przełączenie z rolki na papier składany:' },
        { type: 'list', ordered: true, items: [
          'otwórz pokrywę rolki i wyjmij rolkę, włącz drukarkę;',
          'otwórz sterownik (**Devices and Printers → EPSON TM-C3500 → Printing Preferences**), zakładka **Printer Utilities**, przycisk **Printer Setting Utility**;',
          'w oknie **TM-C3500 PrinterSetting** ustaw **Media source: Fanfold paper**, potem rodzaj nośnika w **Media detection settings**, i kliknij **Apply Settings**;',
          'w zakładce **General** sterownika ustaw typ nośnika, jakość, układ (Media Layout) i cięcie po wydruku;',
          'wyłącz drukarkę: zmiana wykrywania nośnika zapisuje się w pamięci przy wyłączaniu;',
          'otwórz tylną pokrywę papieru składanego, zdejmij z niej prowadnicę i wsuń ją w rowek wewnątrz komory rolki;',
          'ustaw przesłony według szerokości papieru, zamknij pokrywę i włącz drukarkę; wyświetlacz pokaże **F**.',
        ] },
        { type: 'p', text: 'Stos papieru składanego ustaw prosto, co najmniej **40 mm** za tylną ścianką drukarki. Powrót na rolkę to ta sama procedura w drugą stronę: wyjmij papier, przestaw **Media source: Roll paper**, wyjmij prowadnicę z komory, załóż rolkę.' },
      ],
    },
    {
      title: 'Rodzaje nośników i ich wykrywanie',
      blocks: [
        { type: 'p', text: 'Drukarka musi wiedzieć, jak rozpoznawać początek etykiety. Ustawienie **Media detection settings** w PrinterSetting (**Basic Settings → Media Settings**) ma cztery warianty:' },
        { type: 'list', items: [
          '**Full-page label / Continuous paper / Transparent full-page label**: drukarka sprawdza tylko obecność papieru, nie pozycjonuje etykiety; tylko dla rolki;',
          '**Die-cut label (Blackmark)**: etykiety wykrojone pozycjonowane po czarnym znaczniku z tyłu podkładu;',
          '**Continuous paper (Blackmark)**: papier ciągły pozycjonowany po czarnym znaczniku;',
          '**Die-cut label (Gap) / Transparent die-cut label**: etykiety wykrojone pozycjonowane po przerwie między etykietami, wykrywanej w podczerwieni.',
        ] },
        { type: 'p', text: 'Zmianę zapisuje się kliknięciem **Apply Settings** i wyłączeniem drukarki. Jeśli papier nie pasuje do wybranego trybu, po załadowaniu drukarka podaje go i zgłasza **MEDIA FORM ERROR**. Gdy przerwy nie są wykrywane (grubszy podkład, nietypowy materiał), użyj regulacji czujnika (**Printer Adjustment → Sensor Adjustment → Adjust the Label Gap Detection Sensor**) albo przejdź na wykrywanie po czarnym znaczniku.' },
        { type: 'p', text: 'Wymiar etykiety ustawia się w sterowniku: **General → Print Settings → User Defined...**, nazwa układu, typ nośnika, szerokość i długość w mm, **Save**. Zapisany układ trafia na listę **Defined Media Layout**. Bez zaznaczenia **Borderless Printing** obszar druku jest mniejszy od etykiety o 1,5 mm z każdej strony; z opcją bez marginesów drukarka może zadrukować kawałek podkładu, więc projekt etykiety powinien mieć spad 1,5 mm.' },
      ],
    },
    {
      title: 'Wymiana wkładu z tuszem',
      blocks: [
        { type: 'p', text: 'Gdy któryś z czterech wkładów się skończy, świeci dioda **Ink**, a wyświetlacz pokazuje **REPLACE INK**. Wymienia się tylko ten kolor, którego brakuje. Kolejność:' },
        { type: 'list', ordered: true, items: [
          'przy włączonej drukarce opuść pokrywę wkładów do siebie i odczekaj **co najmniej 4 s**, aż mechanizm się zatrzyma; wyjęcie wkładu wcześniej grozi wytryśnięciem tuszu;',
          'powoli wciśnij zużyty wkład, żeby zwolnić blokadę, i wyciągnij go do siebie;',
          'nowy wkład potrząśnij w opakowaniu 4–5 razy, dopiero potem otwórz; nie ściskaj boków i nie potrząsaj zbyt mocno, bo tusz może wyciec;',
          'wsuń wkład etykietą do góry, powoli, aż zatrzaśnie się na miejscu;',
          'zamknij pokrywę; dioda Ink gaśnie i można drukować.',
        ] },
        { type: 'p', text: 'Zasady, które oszczędzają tusz i głowicę: nie dotykaj **chipu** na wkładzie; drukarka nie zadziała bez kompletu czterech wkładów, także przy druku samą czernią; wkład wyjęty i włożony ponownie działa, ale prawie pusty może już nie zostać przyjęty; każde włożenie i czyszczenie zużywa trochę tuszu ze wszystkich kolorów; wkład zużyj w ciągu **6 miesięcy** od otwarcia; wkłady przechowuj w chłodnym, ciemnym miejscu, a przyniesione z zimna ogrzej przez 3 godziny; przy transporcie drukarki wkłady zostają w środku. Tusze do C3500 znajdziesz w [kategorii tuszy](/tusze-do-kolorowych-drukarek).' },
      ],
    },
    {
      title: 'Wymiana pojemnika konserwacyjnego',
      blocks: [
        { type: 'p', text: 'Pojemnik konserwacyjny [SJMB3500](/produkt/epson-pojemnik-konserwacyjny-sjmb3500-c33s020580) zbiera tusz zużywany przy czyszczeniu głowicy i ładowaniu wkładów. Wyświetlacz uprzedza komunikatem **M/B NEAR FULL**, a przy **REPLACE MAINT B** drukarka zatrzymuje druk do wymiany. Przy pierwszym uruchomieniu pojemnik zapełnia się szybciej, bo ładowanie tuszu zużywa go więcej.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę;',
          'otwórz pokrywę pojemnika do siebie i wyciągnij zużyty pojemnik;',
          'włóż go do plastikowego worka dołączonego do nowego pojemnika i oddaj do utylizacji;',
          'powoli wsuń nowy pojemnik i zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Pojemnika nie rozbieraj, nie dotykaj jego chipu i nie używaj ponownie po dłuższym wyjęciu. Po wymianie producent zaleca wyczyścić płytę pod głowicą (opis w sekcji o czyszczeniu), używając ściereczki i patyczków z zestawu.' },
      ],
    },
    {
      title: 'Kontrola dysz i czyszczenie głowicy',
      blocks: [
        { type: 'p', text: 'Drukarka sama sprawdza, czy żadna dysza nie jest zatkana: przy włączeniu, po pauzie, co jakiś czas w trakcie ciągłego druku, po czyszczeniu głowicy, po zamknięciu każdej pokrywy i po wykryciu wstrząsu. Kontrola w trakcie długiego zadania przerywa druk na około **8 s**. Gdy wykryje brakujące kropki, uruchamia czyszczenie, które zużywa trochę tuszu.' },
        { type: 'p', text: 'Tryb kontroli ustawia się w PrinterSetting (**General → Printer Operation Settings → Nozzle Check Mode**):' },
        { type: 'list', items: [
          '**Anti-missing Dot Mode**: żadna brakująca kropka nie jest dopuszczalna, czyszczenie już przy jednej; do kodów kreskowych i drobnych fontów, gdzie liczy się każdy piksel;',
          '**Anti-missing Read Mode** (domyślny): dopuszcza jedną brakującą kropkę, czyści przy dwóch; chroni czytelność kodów;',
          '**Anti-missing Color Mode**: dopuszcza do 9 pojedynczych braków, czyści przy 3 kolejnych lub 10; chroni kolory;',
          '**No Missing Dot Detection Mode**: bez kontroli i automatycznego czyszczenia.',
        ] },
        { type: 'p', text: 'Ręczne czyszczenie: przytrzymaj przycisk **Cleaning** przez ponad 3 s. Gdy czyszczenie nie usuwa zatkania, wyświetlacz pokazuje **NOZZLE CLOGGED**; dopóki liczba braków mieści się w dopuszczalnej, drukarka drukuje dalej, powyżej zgłasza błąd i wymaga serwisu. System nie wykrywa stu procent przypadków, dlatego do kodów kreskowych Epson zaleca fonty o grubości co najmniej 3 kropek w pionie.' },
      ],
    },
    {
      title: 'Ustawienia w TM-C3500 PrinterSetting',
      blocks: [
        { type: 'p', text: 'Wszystkie ustawienia drukarki zmienia się z komputera: **Devices and Printers → EPSON TM-C3500 → Printing Preferences**, zakładka **Printer Utilities**, przycisk **Printer Setting Utility**. Każdą zmianę kończy **Apply Settings** i potwierdzenie wysłania do drukarki. Najczęściej używane:' },
        { type: 'list', items: [
          '**Paper Loading at Power-on** (General → Printer Operation Settings): co drukarka robi z papierem po włączeniu i po zamknięciu pokrywy: podaje do pozycji startu i odcina (domyślnie), podaje bez odcięcia albo nie rusza papieru.',
          '**Notification Settings** (Advanced Settings): sygnał dźwiękowy przy błędzie, dioda przy niskim poziomie tuszu oraz zgłaszanie błędu rozmiaru lub typu nośnika (domyślnie wyłączone; włącz, jeśli drukarka ma zatrzymać się na końcu rolki z zachowaniem zadania).',
          '**Panel Button Settings**: blokada przycisków FEED, CUT i Cleaning, np. w sklepie, gdzie drukarka stoi przy kasie.',
          '**Operating Time Settings**: czas pracy wentylatora płyty po wydruku (do 12 godzin) i czas oczekiwania na kolejne dane (do 15 s). Przy druku co kilka sekund drukarka bez tego zasypia i budzi się przy każdym zadaniu, co spowalnia pracę.',
          '**Paper Feed Adjustment** (Printer Adjustment): korekta pozycji cięcia i początku druku w pionie w zakresie −63…63 jednostek po 1/180 cala (około 0,14 mm), w poziomie −4…4. Wartość dodatnia przy cięciu przybliża cięcie do początku druku, ujemna oddala.',
          '**Sensor Adjustment**: kalibracja czujnika przerwy między etykietami i czujnika czarnego znacznika przy założonym papierze.',
          '**Print Head Alignment**: korekta druku dwukierunkowego (Bi-directional Printing Adjustment) i pasowania (Banding Adjustment), gdy pionowe i poziome linie się nie schodzą albo litery są rozmyte.',
        ] },
        { type: 'p', text: 'Ustawienia jakości są w samym sterowniku (**General → Print Settings**): typ nośnika, **Print Quality: Quality** oraz **Advanced → Banding Reduction** dla papieru innego niż zwykły; obie opcje zmniejszają paski kosztem prędkości. Zestaw ustawień (układ, jakość, cięcie) zapisuje się w **Favorite Setting**, a cały profil sterownika można wyeksportować do pliku BSF i wgrać na innym stanowisku.' },
      ],
    },
    {
      title: 'Sieć: adres IP i arkusz statusu',
      blocks: [
        { type: 'p', text: 'Fabrycznie drukarka ma adres **192.168.192.168** (tryb ręczny) albo pobiera adres automatycznie, zależnie od wersji; nazwa hosta to **EPSON** plus sześć ostatnich znaków adresu MAC. Sterownik nie śledzi zmian adresu, dlatego przy DHCP druk może przestać działać po zmianie adresu. Zalecany jest **stały adres IP**, ustawiany w Install Navi, EpsonNet Config albo EPSON Deployment Tool.' },
        { type: 'p', text: 'Aktualne ustawienia sieci wydrukujesz przyciskiem **Status Sheet** z tyłu drukarki. Włączenie drukarki z przytrzymanym tym przyciskiem przez co najmniej 20 s przywraca fabryczne ustawienia LAN. Jeśli EpsonNet Config nie widzi drukarki, zamknij program bez odświeżania, odczekaj 30 s i uruchom go ponownie; po kilku próbach sprawdź kabel i diodę Link przy gnieździe LAN.' },
      ],
    },
    {
      title: 'Komunikaty na wyświetlaczu',
      blocks: [
        { type: 'p', text: 'Stan drukarki pokazują diody i pierwszy wiersz wyświetlacza. Komunikaty pracy: **READY**, **INITIALIZING**, **PRINTING**, **INK CHARGING** (ładowanie tuszu), **WORKING**, **HEAD MAINTENANCE**. Komunikaty wymagające reakcji:' },
        { type: 'list', items: [
          '**MEDIA FORM ERROR**: papier nie pasuje do ustawionego wykrywania nośnika; załóż właściwy papier albo zmień Media detection settings.',
          '**MEDIA SIZE ERROR**: rozmiar papieru nie pasuje do obszaru druku; zmień papier albo układ nośnika.',
          '**PAPER JAM ERR 59**: w drukarce ustawionej na papier składany jest rolka (albo odwrotnie przy kodzie **81**); przestaw źródło nośnika.',
          '**PAPER JAM ERR** z kodami 01–0E, 44, 55–5C, 80: zacięcie; otwórz pokrywę, usuń cały papier z toru i załóż nośnik od nowa.',
          '**PAPER REMOVAL ER**: wsunięto papier składany, gdy poprzedni jeszcze tkwił w drukarce; wyciągnij resztkę z wyjścia i podaj papier od tyłu.',
          '**PAPER OUT** / **PAPER OUT ERROR**: brak papieru.',
          '**ROLL COVER OPEN**, **INK COVER OPEN**, **M/B COVER OPEN**: otwarta pokrywa rolki, wkładów lub pojemnika.',
          '**NO INK CARTRIDGE**, **NO MAINT BOX**: brak wkładu lub pojemnika.',
          '**INK READ ERROR**, **M/B READ ERROR**: drukarka nie odczytuje chipu; wyjmij i włóż ponownie, a gdy błąd wraca, wymień na nowy.',
          '**INK LOW**, **REPLACE INK**: kończy się tusz, wymień wkład; **M/B NEAR FULL**, **REPLACE MAINT B**: pojemnik konserwacyjny do wymiany.',
          '**NOZZLE CLOGGED**: zatkana dysza, której czyszczenie nie usuwa; sprawdź wydruk, przy nieakceptowalnej jakości zleć naprawę.',
          '**CUT UNAVAILABLE**: drukarka nie tnie drugi raz w tym samym miejscu; podaj papier.',
          '**PRINTER ERROR 7B / 7C**: za niska lub za wysoka temperatura otoczenia (praca 10–35 °C); włącz ponownie po wyrównaniu temperatury.',
          '**PRINTER ERROR** z innymi kodami: zacięcie, gilotyna, temperatura lub usterka; wyłącz, otwórz pokrywę rolki, usuń zacięty papier, załóż nośnik, włącz. Gdy błąd wraca, serwis.',
          '**SERVICE SOON**: podzespoły zbliżają się do końca żywotności; przygotuj wymianę drukarki. **SERVICE REQD.** (A0–A3): koniec żywotności, wymagana naprawa.',
        ] },
        { type: 'p', text: 'Sygnał dźwiękowy przy błędzie to trzy serie po 500 ms, powtarzane do usunięcia przyczyny; głośność zmienia DIP 8. Opis każdego komunikatu jest też w pomocy sterownika: przycisk **Help** w oknie sterownika, potem **Introduction → Error Recovery to LCD Display**.' },
      ],
    },
    {
      title: 'Problemy z jakością wydruku',
      blocks: [
        { type: 'list', items: [
          '**Blady wydruk, białe lub czarne linie**: wykonaj kontrolę dysz i czyszczenie głowicy (przycisk Cleaning 3 s); sprawdź przesłony na płycie (otwarte poza papierem wpuszczają powietrze i robią białe linie); sprawdź, czy typ nośnika w sterowniku zgadza się z papierem; wykonaj **Bi-directional Printing Adjustment** i **Banding Adjustment**; dla papieru innego niż zwykły włącz **Banding Reduction** i jakość **Quality**. Linii przy podawaniu co 25,4 mm nie da się usunąć całkiem.',
          '**Rozmyty wydruk, rozmyte krawędzie**: korekta druku dwukierunkowego; przesłony według szerokości papieru.',
          '**Papier źle załadowany**: rolkę załóż ponownie; stos papieru składanego ustaw prosto 40 mm od tylnej ścianki.',
          '**Zmieszane kolory po przeniesieniu drukarki**: wstrząsy po pierwszym ładowaniu tuszu mieszają kolory w głowicy; powtarzaj ręczne czyszczenie, aż kolory wrócą.',
          '**Kody kreskowe słabo czytelne**: przesłony, typ nośnika, rozdzielczość danych 360 dpi zgodna z drukarką, korekta szerokości kresek (kreska o piksel węższa, przerwa o piksel szersza; fonty kodów ze sterownika robią to same), profil tuszu w **Advanced → Ink Profile and Brightness Adjustment**.',
          '**Zabrudzony papier**: przesłony niedopasowane do szerokości unoszą papier pod głowicę; obce ciała na głowicy (czyszczenie); zbyt słabe przyssanie dla danego papieru (**Options → Platen Vacuum Manual Adjustment**).',
          '**Przesunięty druk**: układ nośnika w sterowniku inny niż papier; bez **Borderless Printing** obszar druku jest o 1,5 mm mniejszy z każdej strony; korekta pozycji w **Paper Feed Adjustment**.',
          '**Druk z boku przesunięty tuż po założeniu papieru**: papier nie leży centralnie w prowadnicach albo rolka się kończy; wyrównaj prowadnice albo podaj papier przed drukiem.',
          '**Po załadowaniu papier przejeżdża i jest błąd**: nośnik nie pasuje do wykrywania; przy etykietach z przerwą podkład musi przepuszczać podczerwień, a etykieta ją zatrzymywać; przy czarnym znaczniku znacznik musi pochłaniać podczerwień; skalibruj czujnik albo zmień metodę wykrywania. Jeśli drukarka wcześniej działała z tym papierem, czujnik może być uszkodzony.',
        ] },
        { type: 'p', text: 'Funkcji **Auto Fit Page** znanej z TM-C3400 w C3500 nie ma; ten sam efekt daje **Borderless Printing**, przy którym obszar druku równa się wymiarowi etykiety.' },
      ],
    },
    {
      title: 'Czyszczenie płyty i gilotyny',
      blocks: [
        { type: 'p', text: 'Płytę pod głowicą (platen) czyść przy każdej wymianie pojemnika konserwacyjnego, ściereczką z włókniny i patyczkami z zestawu pojemnika:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i wyjmij wtyczkę zasilacza z gniazdka;',
          'otwórz pokrywę rolki dźwignią i wyjmij papier;',
          'zetrzyj tusz z płyty ściereczką, a otwory i boki wyczyść patyczkami; zatkane otwory ssące trzeba udrożnić, inaczej tusz brudzi wnętrze i wydruki;',
          'zamknij pokrywę.',
        ] },
        { type: 'p', text: 'Bez wody i alkoholu na płycie. Nie przestawiaj przy tym przesłon i nie uszkodź trzech czujników na płycie. Tusz z płyty może pobrudzić ręce i papier.' },
        { type: 'p', text: 'Gilotyna: klej z etykiet osiada na nieruchomym ostrzu i cięcie staje się nierówne. Wyłącz drukarkę, odłącz zasilanie, otwórz pokrywę rolki, wyjmij papier i usuń klej z ostrza po stronie pokrywy patyczkiem, w razie potrzeby zwilżonym alkoholem. **Nie dotykaj ostrza palcami.**' },
      ],
    },
    {
      title: 'Test własny drukarki',
      blocks: [
        { type: 'p', text: 'Test własny wykrywa brakujące dysze i drukuje ustawienia bez komputera. Załóż etykiety, paragon lub papier ciągły o długości co najmniej **90 mm**, po czym włącz drukarkę z wciśniętym przyciskiem **FEED** (włącznik trzymaj, aż zaświeci dioda Power). Na wydruku są: wersja firmware, tryb kontroli dysz (Aamd, Aamr, Aamc, Anod), ustawienie wykrywania nośnika (Cnod, Cbmd, Cbmc, Cgap), wartości korekt pozycji cięcia i druku oraz licznik cięć.' },
      ],
    },
    {
      title: 'Specyfikacja',
      blocks: [
        { type: 'list', items: [
          '**Druk**: atramentowy piezoelektryczny, 4 kolory KCMY z osobnych wkładów, tusz pigmentowy; 360 × 360 dpi albo 720 × 360 dpi.',
          '**Prędkość** (360 dpi): 103 mm/s przy szerokości druku 56 mm, 96 mm/s przy 72 mm, 85 mm/s przy 104 mm; przy 720 × 360 dpi odpowiednio 52, 48 i 42 mm/s.',
          '**Obszar druku**: rolka 26–104 mm szerokości, papier składany 46–104 mm; marginesy 1,5 mm albo 0 mm przy Borderless Printing.',
          '**Nośniki**: rolka o średnicy zewnętrznej do 101,6 mm, rdzeń od 44,1 mm (matowe i błyszczące etykiety wykrojone od 56,8 mm), nawinięte zadrukiem na zewnątrz; podkład 30–112 mm, etykieta 25,4–108 mm, długość etykiety 8–1117,6 mm, przerwa 3–6 mm; grubość papieru 0,084–0,124 mm, etykiet 0,129–0,195 mm (błyszczące 0,184 mm); papier składany 50–108 mm; opaski 36 mm serii WB-S/M/L.',
          '**Gilotyna**: nożycowa, pełne cięcie.',
          '**Kody**: UPC-A/E, EAN-8/13, Code 39, ITF, Codabar, Code 93, Code 128, GS1-128, GS1 DataBar (Omnidirectional, Truncated, Limited, Expanded); 2D: PDF417, QR, MaxiCode, DataMatrix, Aztec, GS1 DataBar Stacked.',
          '**Interfejsy**: USB 2.0 High Speed, Ethernet 10Base-T/100Base-TX (kabel ekranowany, CAT5e lub lepszy).',
          '**Wkłady**: SJIC22P(K), (C), (M), (Y); trwałość 6 miesięcy od włożenia, 2 lata od produkcji. **Pojemnik konserwacyjny**: SJMB3500.',
          '**Zasilanie**: dedykowany zasilacz 100–240 V, 50/60 Hz; pobór około 30 W w pracy (szczyt 50 W), 2,5 W w czuwaniu, 0,3 W po wyłączeniu.',
          '**Warunki pracy**: 10–35 °C, wilgotność 20–80 % bez kondensacji; kody kreskowe 15–35 °C; przechowywanie z tuszem −20…40 °C (0–30 °C do 6 miesięcy). Hałas około 56 dB z gilotyną.',
          '**Wymiary i waga**: 310 × 283 × 261 mm (z rozłożoną tacką głębokość 465 mm), około 12 kg bez wkładów i rolki.',
          '**Systemy**: sterownik Windows (od XP do Windows 10 i Server 2003–2012 R2 w tej wersji dokumentacji; nowsze sterowniki są na stronie Epson), EPSON Status Monitor 3, Epson Inkjet Label Printer SDK.',
        ] },
      ],
    },
    {
      title: 'Materiały i pomoc w TAKMA',
      blocks: [
        { type: 'p', text: 'Do C3500 mamy [tusze SJIC22P i pojemnik SJMB3500](/tusze-do-kolorowych-drukarek) oraz [etykiety Epson Premium Matte, High Gloss i papier do biletów](/etykiety-do-kolorowych-drukarek) w rolkach ciągłych i wykrojonych. Sama drukarka jest na karcie [Epson ColorWorks C3500](/produkt/epson-colorworks-c3500). Pełna dokumentacja techniczna producenta (Technical Reference Guide, po angielsku) jest do pobrania na tej stronie; jeśli komunikat na wyświetlaczu nie znika po opisanych krokach, napisz do nas z numerem błędu, podpowiemy, czy to sprawa na serwis.' },
      ],
    },
  ],
}
