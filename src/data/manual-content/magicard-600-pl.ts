import type { PolishManual } from '../manuals'

/**
 * Skrócona instrukcja Magicard 600 / 600 Duo po polsku. Opracowana na podstawie User Guide 1.06
 * (public/instrukcje/magicard-600-ug-en.pdf). Linki wewnętrzne w składni [tekst](/sciezka).
 */
export const magicard600Pl: PolishManual = {
  updatedAt: '2026-09-11',
  intro:
    'Najważniejsze rzeczy z instrukcji drukarki Magicard 600 zebrane w jednym miejscu: gdzie ją postawić, jak wgrać sterownik w Windows i na Macu, jakie taśmy i karty do niej pasują, jak podłączyć ją przez Wi-Fi albo Ethernet, jak sterować nią z przeglądarki, jak ją czyścić i co oznaczają kody błędów na wyświetlaczu.',
  sections: [
    {
      title: 'Dane techniczne w skrócie',
      blocks: [
        {
          type: 'list',
          items: [
            '**Rozdzielczość:** 300 dpi, 256 poziomów koloru.',
            '**Czas druku:** karta kolorowa (YMCKO) około 18 s, karta jednokolorowa (K) około 5 s, licząc od kliknięcia do wyjścia karty.',
            '**Podajnik:** 100 kart o grubości 0,76 mm. Odbiornik z przodu mieści 70 kart.',
            '**Karty:** CR80 i CR79 z PVC, grubość od 0,5 do 1,27 mm.',
            '**Złącza:** USB 2.0, Ethernet 10/100 i Wi-Fi 2,4 GHz (moduł USB w komplecie). Pod spodem gniazdo linki Kensington.',
            '**Zasilanie:** zasilacz 100–240 V, 90 W.',
            '**Systemy:** Windows 8.1, 10 i 11, Windows Server 2008–2016, macOS od 10.9, Linux.',
            '**Opcje:** koder pasków magnetycznych HiCo/LoCo (ISO 7811), znak wodny HoloKote z miejscem na dziesięć własnych wzorów, druk dwustronny.',
          ],
        },
        {
          type: 'p',
          text: '[Magicard 600 Duo](/produkt/magicard-600-duo) z naszej oferty ma druk dwustronny włączony od razu. Jednostronna wersja 600 wymaga klucza, o którym piszemy w rozdziale o rozszerzeniach. Wszystkie modele Magicard porównasz na [stronie marki](/drukarki-kart-magicard).',
        },
      ],
    },
    {
      title: 'Gdzie postawić drukarkę',
      blocks: [
        { type: 'p', text: 'Zwykłe biuro w zupełności wystarczy. Kilka rzeczy ma jednak znaczenie dla jakości druku i żywotności głowicy:' },
        {
          type: 'list',
          items: [
            'bez bezpośredniego słońca,',
            'temperatura od 10 do 30 °C, wilgotność od 20 do 70 %,',
            'z dala od środków chemicznych i kurzu (pył osiada na kartach i trafia pod głowicę),',
            'miejsce na otwarcie pokrywy od góry, na kable z tyłu i na przepływ powietrza wokół obudowy,',
            'przy pracy przez Wi-Fi z dala od kuchenki mikrofalowej, telefonów bezprzewodowych 2,4 GHz i innych źródeł zakłóceń.',
          ],
        },
      ],
    },
    {
      title: 'Budowa drukarki',
      blocks: [
        { type: 'p', text: 'Z przodu jest kolorowy wyświetlacz LCD z przyciskami i odbiornik na gotowe karty (70 sztuk). Z tyłu stoi podajnik na czyste karty (100 sztuk). Pod pokrywą znajdziesz:' },
        {
          type: 'list',
          items: [
            '**głowicę drukującą** – nie dotykaj jej palcami, tylko pisakiem czyszczącym,',
            '**pomarańczowy wałek** – zbiera kurz z karty wchodzącej z podajnika, myje się go wilgotną szmatką,',
            '**niebieski wałek** – ma klejącą powierzchnię i przejmuje brud z pomarańczowego; wymienia się go przy każdej taśmie,',
            '**czujnik taśmy** – rozpoznaje kolor panelu i znacznik RFID na rolce,',
            '**moduł obracania karty (flipper)** – odwraca kartę do druku drugiej strony.',
          ],
        },
        { type: 'p', text: 'Na panelu tylnym są gniazda zasilania 24 V, Ethernet, USB 2.0 oraz osobne gniazdo USB na moduł Wi-Fi. Używaj wyłącznie modułu dostarczonego z drukarką. Z innym drukarka pokaże „No Dongle”.' },
      ],
    },
    {
      title: 'Menu na wyświetlaczu',
      blocks: [
        { type: 'p', text: 'Przyciski pod wyświetlaczem prowadzą po dwóch menu. Menu użytkownika przydaje się na co dzień:' },
        {
          type: 'list',
          items: [
            '**Clean Rollers** – uruchamia czyszczenie wałków kartą czyszczącą (opis w rozdziale o czyszczeniu).',
            '**Hand Feed Mode** – podawanie kart pojedynczo z przodu zamiast z tylnego podajnika. Domyślnie wyłączone.',
            '**Print Test** – wydruk testowy, dobry na pierwszą próbę po instalacji.',
            '**Mag Test** – tylko z koderem magnetycznym: drukarka zapisuje dane na pasku i od razu je odczytuje.',
            '**More → Standby Time** – po ilu minutach drukarka ma przejść w tryb czuwania: 15, 60, 600 albo nigdy.',
            '**More → Network Info** – osobno dla Wired i WiFi: adres IP, DHCP, maska, brama i adres MAC. Tu też włącza się i wyłącza Wi-Fi.',
            '**More → Dye Film Info** – typ założonej taśmy i procent zużycia.',
            '**More → Cards Printed, Serial Number, Software Info** – licznik kart, numer seryjny i wersja oprogramowania. Te trzy rzeczy podaj, gdy zgłaszasz usterkę.',
            '**More → Reboot Printer** – restart bez wyciągania wtyczki.',
          ],
        },
        {
          type: 'p',
          text: 'Menu serwisowe (Turn Rollers, Calibrate, Soak Test, Sensor Test) służy do diagnozy. Bez wyraźnej potrzeby nie zmieniaj w nim niczego. Wyjątek: **Calibrate** wykonuje się po wyjęciu taśmy, gdy drukarka nie rozpoznaje paneli koloru (błąd 5:2).',
        },
      ],
    },
    {
      title: 'Sterownik w Windows',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Wejdź na magicard.com, w zakładce Support wybierz model 600, a potem Drivers and Downloads → Magicard Windows Printer Driver.',
            'Pobierz plik .exe z sekcji Downloads and attachments.',
            'Przed uruchomieniem instalatora **odłącz kabel USB** od komputera. Instalator sam poprosi o podłączenie w odpowiednim momencie.',
            'Przejdź przez kolejne ekrany. Po zakończeniu drukarka pojawi się w Panelu sterowania → Urządzenia i drukarki.',
            'Kliknij ikonę prawym przyciskiem i wybierz Preferencje drukowania. Tam są wszystkie ustawienia druku; producent opisuje je w osobnym przewodniku po sterowniku na stronie wsparcia.',
          ],
        },
        {
          type: 'p',
          text: 'Działy IT, które instalują sterownik zdalnie albo przez zasady grupy, mają do dyspozycji osobną paczkę „bare driver files” bez instalatora. Jest na stronie wsparcia Magicard obok wersji .exe.',
        },
      ],
    },
    {
      title: 'Sterownik na Macu i w Linuksie',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Na stronie wsparcia Magicard przy modelu 600 wybierz MacOS Printer Driver. Zobaczysz dwie ikony: jabłko (macOS) i pingwin (Linux).',
            'Zanim pobierzesz wersję na Maca, sprawdź w menu Apple → Ten Mac, czy komputer ma procesor Intel, czy Apple Silicon (ARM). Sterowniki są dwa i trzeba wybrać właściwy.',
            'Otwórz pobrany instalator z folderu Pobrane: Dalej → Zainstaluj → hasło administratora → Zamknij.',
            'W Ustawieniach systemowych → Drukarki i skanery dodaj Magicard 600.',
          ],
        },
        {
          type: 'p',
          text: 'Ustawienia sieciowe i domyślne parametry na Macu edytuje się przez interfejs CUPS pod adresem localhost:631. Jeśli przeglądarka pokaże, że interfejs jest wyłączony, wpisz w Terminalu **cupsctl WebInterface=yes** i wróć do tego adresu.',
        },
      ],
    },
    {
      title: 'Taśmy',
      blocks: [
        {
          type: 'p',
          text: 'Magicard 600 przyjmuje wyłącznie taśmy z oznaczeniem **MB**. Taśmy MC są do modelu 300, a MA1000K to taśmy jednokolorowe wspólne dla całej serii. Drukarka czyta znacznik RFID na rolce, więc po założeniu taśmy niczego nie ustawiasz w menu.',
        },
        {
          type: 'list',
          items: [
            '[MB300YMCKO](/produkt/magicard-tasma-ymcko-600-300-wydrukow-mb300ymcko-s) – kolor z warstwą ochronną, 300 kart. Podstawowa taśma do identyfikatorów ze zdjęciem.',
            'MB200YMCKO – ta sama taśma na 200 kart, dla mniejszych nakładów.',
            '[MB250YMCKOK](/produkt/magicard-tasma-ymckok-600-250-mb250ymckok-s) – kolor z przodu i czarny z tyłu, 250 kart. Do druku dwustronnego: zdjęcie z przodu, regulamin albo kod z tyłu.',
            '[MB600KO](/produkt/magicard-tasma-czarna-overlay-600-mb600ko-s) – czarny druk z warstwą ochronną, 600 kart. Do kart z samym tekstem i kodem.',
            '[MA1000K](/produkt/magicard-tasma-monochromatyczna-czarna-ma1000k-black) – 1000 kart w jednym kolorze: czarny, czerwony, niebieski, zielony, srebrny, złoty, biały albo [warstwa zdrapki](/produkt/magicard-tasma-scratch-off-ma1000k-scratch).',
          ],
        },
        {
          type: 'p',
          text: 'Kod regionu ma znaczenie: taśmy dla Europy mają końcówkę /3. Taśma z rynku amerykańskiego (/2) nie zadziała i drukarka pokaże błąd 6:2. Do każdej oryginalnej taśmy dołączony jest nowy niebieski wałek czyszczący. Wszystkie taśmy do drukarek kart są w [osobnej kategorii](/tasmy-do-drukarek-kart).',
        },
      ],
    },
    {
      title: 'Karty',
      blocks: [
        {
          type: 'p',
          text: 'Standard to karta CR80 (85,7 × 54 mm) o grubości 0,76 mm. Drukarka przyjmuje karty od 0,5 do 1,27 mm. Karty spoza tego zakresu grożą zacięciem albo uszkodzeniem mechanizmu, którego gwarancja może nie objąć. Kart w podajniku ma być od 10 do 100, przed włożeniem przekartkuj plik. Karty PVC, karty zbliżeniowe Unique i MIFARE oraz karty NFC są w kategorii [Karty PVC](/karty-pvc).',
        },
        {
          type: 'list',
          items: [
            '**Karty z paskiem magnetycznym** wkładaj do podajnika paskiem w dół, po lewej stronie (patrząc od przodu drukarki). Kodowanie ustawia się w programie do projektowania kart albo w sterowniku.',
            '**Karty zbliżeniowe** ([Unique 125 kHz](/produkt/karta-unique-iso-unqe1), [MIFARE 1K](/produkt/karta-mifare-1k-iso-mfrc1), DESFire) muszą być w wersji do zadruku bezpośredniego, z gładką powierzchnią ISO. Takie są karty z naszej oferty.',
            '**Karty samoprzylepne** kupuj sprawdzone. Kiepskie powodują słaby obraz, zacięcia i zrywanie taśmy.',
            '**Karty wielokrotnego zapisu** mają jedną stronę matową. Drukuje się na niej bez taśmy, tylko ciepłem głowicy, w jednym kolorze. Wytrzymują do około 500 cykli.',
          ],
        },
      ],
    },
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Podłącz zasilacz i włącz drukarkę. Poczekaj, aż zakończy inicjalizację i pokaże ekran główny.',
            'Otwórz pokrywę i załóż taśmę. Zdejmij papierową osłonę z niebieskiego wałka, żeby odsłonić klejącą warstwę.',
            'Przekartkuj karty, żeby się nie sklejały, i włóż je do tylnego podajnika: od 10 do 100 sztuk.',
            'Zainstaluj sterownik (rozdziały wyżej) i podłącz kabel USB, gdy instalator o to poprosi.',
            'Z menu drukarki uruchom **Print Test**. Jeśli wydruk jest równy i bez smug, drukarka jest gotowa.',
          ],
        },
        {
          type: 'p',
          text: 'Do projektowania identyfikatorów Magicard udostępnia bezpłatny program [Magicard HUB](/produkt/magicard-hub): szablony, zdjęcia, kody kreskowe i baza osób w jednym miejscu.',
        },
      ],
    },
    {
      title: 'Podłączenie przez Wi-Fi',
      blocks: [
        {
          type: 'p',
          text: 'Włóż moduł Wi-Fi do gniazda z tyłu drukarki. Konfigurację robi się z komputera podłączonego kablem USB:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'W Urządzeniach i drukarkach kliknij Magicard 600 prawym przyciskiem → Właściwości drukarki → zakładka Network → przycisk WiFi.',
            'Kliknij Next. Komputer nawiąże połączenie z drukarką i pokaże listę wykrytych sieci. Wybierz swoją i kliknij Advanced, potem Next.',
            'Zaznacz **Use Static Network Settings** i wpisz adres IP, maskę, bramę i serwer DNS z Twojej sieci. Producent zaleca stałe ustawienia dla drukarek sieciowych.',
            'Wpisz hasło do sieci Wi-Fi i kliknij Connect. Po nawiązaniu połączenia pola ustawień zszarzeją. Kliknij OK, Next i Finish.',
            'Drukarka pojawi się w Urządzeniach i drukarkach jako osobna pozycja z dopiskiem WiFi. Adres sprawdzisz w menu drukarki: More → Network Info → WiFi.',
          ],
        },
        {
          type: 'p',
          text: 'Jeśli połączenie nie działa, sprawdź, czy moduł jest wsunięty do końca i czy to moduł z kompletu. Adres przypisany do portu widać w zakładce Porty we właściwościach drukarki.',
        },
      ],
    },
    {
      title: 'Podłączenie kablem (Ethernet)',
      blocks: [
        {
          type: 'p',
          text: 'Adres sieciowy ustawia się przez sterownik, więc na czas konfiguracji drukarka musi być podpięta kablem USB. Potem USB można odłączyć.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'W Urządzeniach i drukarkach kliknij Magicard 600 prawym przyciskiem → Preferencje drukowania → Printer Status. Musi być „connected”. Bez połączenia dalsze kroki nie zadziałają.',
            'Zamknij okno stanu. Ponownie prawym przyciskiem → Właściwości drukarki → zakładka Network → przycisk Ethernet.',
            'Zaznacz **Use Static Network settings** i wpisz adres IP, maskę i bramę z Twojej sieci.',
            'Kliknij OK. Podłącz kabel LAN do gniazda z tyłu i wyłącz drukarkę z zasilania na chwilę, żeby przyjęła ustawienia.',
            'Po uruchomieniu sprawdź adres w menu: More → Network Info → Wired → IP Address.',
          ],
        },
      ],
    },
    {
      title: 'Sterowanie z przeglądarki (Clix)',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka podłączona do sieci ma własny panel WWW. Wpisz w pasku adresu http:// i adres IP drukarki (na przykład http://192.168.1.2) z komputera, tabletu albo telefonu w tej samej sieci. Bez instalowania czegokolwiek.',
        },
        {
          type: 'list',
          items: [
            '**stan taśmy** – typ i procent zużycia,',
            '**Clean Rollers** – czyszczenie wałków (ktoś musi stać przy drukarce i włożyć kartę czyszczącą),',
            '**Hand Feed** – przełączanie podawania z przodu,',
            '**Print Test** – karta testowa „Setup” z ustawieniami albo „Skew” z siatką do sprawdzenia głowicy,',
            '**Holokote** – wybór jednego z wgranych wzorów,',
            '**Settings** – czas czuwania i opis lokalizacji drukarki; panel ma osiem języków.',
          ],
        },
        {
          type: 'p',
          text: 'W Settings → Advanced są ustawienia drukarki, statystyki (licznik kart, paneli i czyszczeń) i diagnostyka czujników. Zaglądaj tam tylko, gdy stoisz przy drukarce. Niewłaściwa zmiana w tym menu może ją uszkodzić.',
        },
      ],
    },
    {
      title: 'Druk dwustronny i własny HoloKote',
      blocks: [
        {
          type: 'p',
          text: 'Jednostronną wersję 600 rozszerza się do druku dwustronnego kluczem elektronicznym, bez wizyty serwisu. Zamawia się go po zarejestrowaniu drukarki na stronie wsparcia Magicard (potrzebny numer seryjny z menu Serial Number): Your Account → rejestracja → Choose a Support option → Upgrade to double-sided → akceptacja warunków → Place Order. Po opłaceniu klucz przychodzi w formie elektronicznej do wgrania do drukarki. Nasza [600 Duo](/produkt/magicard-600-duo) ma to od razu.',
        },
        {
          type: 'p',
          text: 'Tak samo działa HoloKote, czyli własny znak wodny nadrukowany warstwą ochronną, na przykład logo szkoły albo firmy. Model 600 ma dziesięć miejsc na wzory. Zamówienie składa się z Preferencji drukowania: zakładka Printer → Printer Upgrade(s) → Order Holokote. Gotowy wzór (plik .jfif) wgrywa się przyciskiem Manage Holokote i przypisuje do jednego z miejsc.',
        },
        {
          type: 'p',
          text: 'Jeśli wolisz, żebyśmy załatwili rozszerzenie za Ciebie, [napisz do nas](/kontakt) i podaj numer seryjny drukarki.',
        },
      ],
    },
    {
      title: 'Czyszczenie',
      blocks: [
        {
          type: 'p',
          text: 'Czyść drukarkę co 700 kart albo przy każdej wymianie taśmy, w zależności od tego, co nastąpi pierwsze. Brud pod głowicą to najczęstsza przyczyna białych kresek na kartach i przedwczesnego zużycia głowicy. Potrzebny jest [zestaw czyszczący 3633-0053](/produkt/magicard-zestaw-czyszczacy-3633-0053): dziesięć kart czyszczących i pisak z alkoholem izopropylowym.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Wałki:** w menu wybierz Clean Rollers, wyjmij karty z podajnika i taśmę, a gdy drukarka poprosi, włóż kartę czyszczącą. Drukarka przeciągnie ją przez mechanizm.',
            '**Głowica:** przeciągnij końcówkę pisaka kilka razy wzdłuż listwy drukującej. Po czyszczeniu nie dotykaj jej palcami. Samą końcówkę pisaka czyści się o zużytą, suchą kartę czyszczącą.',
            '**Pomarańczowy wałek:** wyjmij, przemyj wilgotną szmatką, wysusz i włóż z powrotem. Nie wyrzucaj go.',
            '**Niebieski wałek:** otwórz pokrywę, wyjmij stary wałek (trzymają go dwa zatrzaski), wysuń z niego metalowy pręt i wsuń go w nowy wałek. Włóż nowy wałek do drukarki i dopiero wtedy pociągnij za języczek, żeby zdjąć papierową osłonę. Zamknij pokrywę.',
          ],
        },
        {
          type: 'p',
          text: 'Nowy niebieski wałek jest w każdym opakowaniu oryginalnej taśmy. Zapasowy komplet pięciu wałków z prętem ma numer 3633-0054.',
        },
      ],
    },
    {
      title: 'Kody błędów na wyświetlaczu',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka pokazuje błąd jako parę liczb, na przykład 5:7. Pierwsza liczba mówi, czego dotyczy problem, druga wskazuje dokładny moment, w którym wystąpił. Do rozwiązania zwykle wystarczy pierwsza.',
        },
        {
          type: 'list',
          items: [
            '**1 – Lid opened.** Pokrywa otwarta w trakcie pracy. Zamknij ją i powtórz wydruk.',
            '**2 – Out of cards.** Podajnik pusty albo karta nie doszła do czujnika. Dołóż kart i sprawdź, czy nie skleiły się ze sobą.',
            '**3 – No hand feed.** Włączony tryb podawania ręcznego, a karta nie została włożona z przodu. Włóż kartę albo wyłącz Hand Feed Mode.',
            '**4 – Card jam.** Karta utknęła między czujnikami. Otwórz pokrywę, wyjmij kartę i sprawdź grubość kart w podajniku (0,5–1,27 mm).',
            '**5 – Out of film.** Taśma skończona albo zerwana (5:0, 5:7, 5:8). Kod 5:2 oznacza, że drukarka nie znajduje paneli koloru: wyjmij taśmę i uruchom Calibrate w menu serwisowym. Kod 5:4 to taśma, na której licznik wydruków doszedł do zera.',
            '**6 – Film invalid.** Drukarka nie akceptuje taśmy. 6:0 i 6:1 to nieczytelny znacznik RFID, 6:2 to zły region (taśma /2 zamiast /3), 6:3–6:5 to niezgodny kod dealera, projektu albo klasy taśmy. Załóż inną rolkę.',
            '**7 – Remove film.** Operacja wymaga wyjęcia taśmy (na przykład kalibracja). Wyjmij ją i powtórz.',
            '**8 – Cam jam** i **9 – Flip jam.** Mechanizm docisku głowicy albo moduł obracania nie doszedł do pozycji. Sprawdź, czy nic nie blokuje ruchu, i zrestartuj drukarkę. Jeśli wraca, to sprawa dla serwisu.',
            '**10 – File invalid.** Uszkodzone zadanie druku. Wyślij je ponownie, a przy powtórce zaktualizuj oprogramowanie drukarki (firmware).',
            '**11 – Software outdated.** Założona taśma jest nowsza niż oprogramowanie drukarki. Wgraj aktualny firmware ze strony Magicard.',
            '**12 – Sensor failure.** Czujniki zadziałały w złej kolejności przy podawaniu karty z podajnika albo ręcznie. Wyjmij kartę i spróbuj ponownie.',
            '**13 – Internal error.** Błąd elektroniki albo głowicy. Zrestartuj drukarkę, potem zaktualizuj firmware. Jeśli to nie pomaga, [zgłoś usterkę do serwisu](/serwis/magicard) i podaj numer seryjny, wersję oprogramowania i pełny kod błędu.',
          ],
        },
      ],
    },
  ],
}
