import type { PolishManual } from '../manuals'

/**
 * Skrócona instrukcja Magicard Pronto100 po polsku. Opracowana na podstawie User Guide 1.05
 * (public/instrukcje/magicard-pronto100-ug-en.pdf). Linki wewnętrzne w składni [tekst](/sciezka).
 */
export const magicardPronto100Pl: PolishManual = {
  updatedAt: '2026-09-11',
  intro:
    'Pronto100 nie ma wyświetlacza: wszystko załatwia jeden przycisk i trzy diody. Ta instrukcja tłumaczy, co znaczą ich sygnały, jak wgrać sterownik w Windows i na Macu, jaką taśmę i karty kupić, jak podłączyć drukarkę do sieci i jak ją czyścić, żeby głowica wytrzymała lata.',
  sections: [
    {
      title: 'Dane techniczne w skrócie',
      blocks: [
        {
          type: 'list',
          items: [
            '**Rozdzielczość:** 300 dpi, 256 poziomów koloru.',
            '**Czas druku:** karta kolorowa około 18 s, karta jednokolorowa około 5 s.',
            '**Podajnik:** 50 kart o grubości 0,76 mm. Odbiornik z przodu mieści też 50 kart.',
            '**Karty:** CR80 i CR79 z PVC, grubość od 0,5 do 1,27 mm.',
            '**Złącza:** USB 2.0 i Ethernet 10/100. Z tyłu wnęka na linkę Kensington.',
            '**Wymiary i masa:** 255 × 180 × 208 mm, 2,9 kg.',
            '**Zasilanie:** zasilacz 100–240 V, 90 W.',
            '**Systemy:** Windows 8.1, 10 i 11, Windows Server 2008–2016, macOS od 10.9, Linux.',
            '**Zabezpieczenia wydruku:** znak wodny HoloKote (trzy wzory) i HoloPatch.',
            '**Gwarancja:** 3 lata na drukarkę i głowicę.',
          ],
        },
        {
          type: 'p',
          text: 'Cena i dostępność są na [karcie Magicard Pronto100](/produkt/magicard-pronto100). To najmniejszy model Magicard w naszej ofercie. Przy większych nakładach albo druku dwustronnym sprawdź [Magicard 300](/produkt/magicard-300) i [Magicard 600 Duo](/produkt/magicard-600-duo).',
        },
      ],
    },
    {
      title: 'Zanim zaczniesz',
      blocks: [
        {
          type: 'list',
          items: [
            'Trzymaj drukarkę z dala od kurzu. Karty i napoczętą taśmę chowaj do opakowania, bo każdy pyłek zostaje na wydruku.',
            'Kart w podajniku ma być od 10 do 50. Przed włożeniem przekartkuj plik, żeby się nie sklejały.',
            'Karty spoza zakresu 0,5–1,27 mm zacinają mechanizm, a taka usterka nie podlega gwarancji.',
            'Projekt karty przygotuj w rozmiarze 1016 × 642 px (85,6 × 54 mm), wtedy druk sięga do krawędzi.',
            'Nie dotykaj listwy głowicy palcami. Tłuszcz ze skóry skraca jej życie.',
            'Przed transportem wyjmij taśmę i karty, a drukarkę zapakuj do oryginalnego kartonu.',
          ],
        },
      ],
    },
    {
      title: 'Budowa drukarki',
      blocks: [
        {
          type: 'p',
          text: 'Z przodu jest panel z przyciskiem i diodami oraz odbiornik na gotowe karty. Z tyłu stoi podajnik na czyste karty. Pokrywę otwiera się zatrzaskiem na obudowie. Na panelu tylnym znajdziesz włącznik zasilania, gniazdo zasilacza 24 V, USB 2.0 i Ethernet.',
        },
      ],
    },
    {
      title: 'Przycisk i diody',
      blocks: [
        {
          type: 'p',
          text: 'Jeden przycisk obsługuje wszystkie funkcje. Liczy się, jak długo i ile razy go naciśniesz:',
        },
        {
          type: 'list',
          items: [
            '**Tryb czuwania:** przytrzymaj około 2 s. Krótkie naciśnięcie budzi drukarkę.',
            '**Wyłączenie:** przytrzymaj około 8 s. Krótkie naciśnięcie włącza ponownie.',
            '**Karta testowa:** przy założonej taśmie i zamkniętej pokrywie naciśnij 4 razy szybko po sobie. Przycisk zacznie migać.',
            '**Kalibracja (Soak):** przy wyjętej taśmie i zamkniętej pokrywie naciśnij 4 razy.',
            '**Czyszczenie:** przy otwartej pokrywie naciśnij 2 razy szybko po sobie.',
            '**Anulowanie błędu:** jedno krótkie naciśnięcie przerywa bieżącą operację.',
          ],
        },
        { type: 'p', text: 'Dioda zasilania mówi, co drukarka robi:' },
        {
          type: 'list',
          items: [
            '**świeci ciągle** – gotowa do pracy,',
            '**krótki błysk co 6 s** – czuwanie,',
            '**miga co sekundę** – drukuje albo pracuje,',
            '**podwójne uderzenie co sekundę** – trwa kalibracja,',
            '**miga, a dioda informacyjna miga szybciej** – czeka na kartę czyszczącą,',
            '**miga, a dioda informacyjna świeci ciągle** – trwa czyszczenie,',
            '**miga równo z diodą informacyjną** – trwa aktualizacja oprogramowania; nie wyłączaj zasilania.',
          ],
        },
        { type: 'p', text: 'Pozostałe diody wskazują rodzaj problemu (dokładny kod pokazuje sterownik na komputerze):' },
        {
          type: 'list',
          items: [
            '**dioda nośnika świeci ciągle** – problem z kartami: pusty podajnik albo zacięcie,',
            '**dioda nośnika miga** – problem z taśmą: skończona, zerwana, zły region albo nieczytelny znacznik,',
            '**dioda informacyjna świeci ciągle** – błąd ogólny, na przykład otwarta pokrywa albo uszkodzone zadanie druku,',
            '**dioda informacyjna miga** – błąd krytyczny: elektronika, silnik, brak głowicy; zrestartuj drukarkę, a gdy wraca, [zgłoś usterkę](/kontakt),',
            '**dioda czyszczenia miga równo** – drukarka przekroczyła termin czyszczenia (kod 27).',
          ],
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
            'Wejdź na magicard.com, w zakładce Support wybierz Pronto100, a potem Drivers and Downloads → Magicard Windows Printer Driver.',
            'Pobierz plik .exe z sekcji Downloads and attachments.',
            'Przed uruchomieniem instalatora **odłącz kabel USB** od komputera. Instalator sam poprosi o podłączenie w odpowiednim momencie.',
            'Przejdź przez kolejne ekrany. Po zakończeniu drukarka pojawi się w Panelu sterowania → Urządzenia i drukarki.',
            'Kliknij ikonę prawym przyciskiem i wybierz Preferencje drukowania. Tam są wszystkie ustawienia druku; producent opisuje je w osobnym przewodniku po sterowniku na stronie wsparcia.',
          ],
        },
        {
          type: 'p',
          text: 'Działy IT, które instalują sterownik zdalnie, mają do dyspozycji osobną paczkę „bare driver files” bez instalatora. Jest na stronie wsparcia Magicard obok wersji .exe.',
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
            'Na stronie wsparcia Magicard przy modelu Pronto100 wybierz MacOS Printer Driver. Zobaczysz dwie ikony: jabłko (macOS) i pingwin (Linux).',
            'Zanim pobierzesz wersję na Maca, sprawdź w menu Apple → Ten Mac, czy komputer ma procesor Intel, czy Apple Silicon (ARM). Sterowniki są dwa.',
            'Otwórz pobrany instalator z folderu Pobrane: Dalej → Zainstaluj → hasło administratora → Zamknij.',
            'W Ustawieniach systemowych → Drukarki i skanery dodaj Pronto100.',
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
          text: 'Pronto100 przyjmuje wyłącznie taśmy z oznaczeniem **MD**. Taśmy MC i MB z większych modeli nie pasują. Drukarka czyta znacznik RFID na rolce, więc po założeniu taśmy niczego nie ustawiasz.',
        },
        {
          type: 'list',
          items: [
            '[MD100YMCKO](/produkt/magicard-tasma-ymcko-pronto100-100) – kolor z warstwą ochronną, 100 kart. Podstawowa taśma do identyfikatorów ze zdjęciem.',
            '[Taśma kolorowa na 200 kart](/produkt/magicard-tasma-ymcko-pronto100-200) – wersja z naszej oferty z dwa razy dłuższą rolką.',
            '[MA1000K](/produkt/magicard-tasma-monochromatyczna-czarna-ma1000k-black) – 1000 kart w jednym kolorze: czarny, czerwony, niebieski, zielony, srebrny, złoty, biały albo [warstwa zdrapki](/produkt/magicard-tasma-scratch-off-ma1000k-scratch).',
          ],
        },
        {
          type: 'p',
          text: 'Kod regionu ma znaczenie: taśmy dla Europy mają końcówkę /3. Taśma z rynku amerykańskiego (/2) nie zadziała. Wszystkie taśmy do drukarek kart są w [osobnej kategorii](/tasmy-do-drukarek-kart).',
        },
      ],
    },
    {
      title: 'Karty',
      blocks: [
        {
          type: 'p',
          text: 'Standard to karta CR80 (85,7 × 54 mm) o grubości 0,76 mm. Karty PVC, karty zbliżeniowe Unique i MIFARE oraz karty NFC są w kategorii [Karty PVC](/karty-pvc). Dla powtarzalnych wydruków trzymaj się jednej partii dobrych kart.',
        },
        {
          type: 'list',
          items: [
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
            'Podłącz zasilacz i włącz drukarkę przełącznikiem z tyłu. Poczekaj, aż dioda zasilania zaświeci ciągłym światłem.',
            'Otwórz pokrywę i załóż taśmę.',
            'Przekartkuj karty, żeby się nie sklejały, i włóż je do tylnego podajnika: od 10 do 50 sztuk.',
            'Zainstaluj sterownik (rozdziały wyżej) i podłącz kabel USB, gdy instalator o to poprosi.',
            'Zamknij pokrywę i naciśnij przycisk 4 razy szybko po sobie. Wyjdzie karta testowa. Jeśli jest równa i bez smug, drukarka jest gotowa.',
          ],
        },
        {
          type: 'p',
          text: 'Do projektowania identyfikatorów Magicard udostępnia bezpłatny program [Magicard HUB](/produkt/magicard-hub): szablony, zdjęcia, kody kreskowe i baza osób w jednym miejscu.',
        },
      ],
    },
    {
      title: 'Podłączenie do sieci (Ethernet)',
      blocks: [
        {
          type: 'p',
          text: 'Drukarka w sieci musi mieć stały adres IP. Ustawia się go przez sterownik, więc na czas konfiguracji Pronto100 musi być podpięta kablem USB. Potem USB można odłączyć.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'W Urządzeniach i drukarkach kliknij Pronto100 prawym przyciskiem → Preferencje drukowania → Printer Status. Musi być „connected”.',
            'Zamknij okno stanu. Ponownie prawym przyciskiem → Właściwości drukarki → zakładka Network → przycisk Ethernet.',
            'Zaznacz **Use Static Network settings** i wpisz adres IP, maskę i bramę z Twojej sieci.',
            'Kliknij OK. Podłącz kabel LAN do gniazda z tyłu i wyłącz drukarkę z zasilania na chwilę, żeby przyjęła ustawienia.',
          ],
        },
        {
          type: 'p',
          text: 'Po podłączeniu do sieci drukarką da się sterować z przeglądarki. Wpisz w pasku adresu http:// i adres IP drukarki (na przykład http://192.168.1.2). Otworzy się panel Clix: stan taśmy, czyszczenie wałków, podawanie ręczne, karta testowa, wybór wzoru HoloKote, czas czuwania i statystyki. Menu Advanced zostaw w spokoju, chyba że stoisz przy drukarce i wiesz, co zmieniasz.',
        },
      ],
    },
    {
      title: 'Czyszczenie',
      blocks: [
        {
          type: 'p',
          text: 'Czyść drukarkę co 700 kart albo przy każdej wymianie taśmy, w zależności od tego, co nastąpi pierwsze. Brud pod głowicą to najczęstsza przyczyna białych kresek na kartach. Potrzebny jest [zestaw czyszczący E9100](/produkt/magicard-zestaw-czyszczacy-pronto100-e9100): dziesięć kart czyszczących i pisak z alkoholem izopropylowym.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Wałki:** otwórz pokrywę i naciśnij przycisk 2 razy szybko po sobie. Gdy dioda zasilania i dioda informacyjna zaczną migać, włóż kartę czyszczącą. Drukarka przeciągnie ją przez mechanizm.',
            '**Głowica:** przeciągnij końcówkę pisaka kilka razy wzdłuż listwy drukującej. Po czyszczeniu nie dotykaj jej palcami. Samą końcówkę pisaka czyści się o zużytą, suchą kartę czyszczącą.',
          ],
        },
      ],
    },
    {
      title: 'Kody błędów',
      blocks: [
        {
          type: 'p',
          text: 'Diody pokazują tylko grupę problemu. Dokładny kod, na przykład 5:7, wyświetla sterownik na komputerze. Pierwsza liczba mówi, czego dotyczy błąd, druga wskazuje moment, w którym wystąpił.',
        },
        {
          type: 'list',
          items: [
            '**1 – Lid opened.** Pokrywa otwarta w trakcie pracy. Zamknij ją i powtórz wydruk.',
            '**2 – Out of cards.** Podajnik pusty albo karta nie doszła do czujnika. Dołóż kart i sprawdź, czy nie skleiły się ze sobą.',
            '**3 – No hand feed.** Włączony tryb podawania ręcznego, a karta nie została włożona z przodu. Włóż kartę albo wyłącz Hand Feed w Clix.',
            '**4 – Card jam.** Karta utknęła między czujnikami. Otwórz pokrywę, wyjmij kartę i sprawdź grubość kart w podajniku (0,5–1,27 mm).',
            '**5 – Out of film.** Taśma skończona albo zerwana (5:0, 5:7, 5:8). Kod 5:2 oznacza, że drukarka nie znajduje paneli koloru: wyjmij taśmę i uruchom kalibrację czterema naciśnięciami przycisku. Kod 5:4 to taśma, na której licznik wydruków doszedł do zera.',
            '**6 – Film invalid.** Drukarka nie akceptuje taśmy. 6:0 i 6:1 to nieczytelny znacznik RFID, 6:2 to zły region (taśma /2 zamiast /3), 6:3–6:5 to niezgodny kod dealera, projektu albo klasy taśmy. Załóż inną rolkę.',
            '**7 – Remove film.** Operacja wymaga wyjęcia taśmy (na przykład kalibracja). Wyjmij ją i powtórz.',
            '**8 – Cam jam.** Mechanizm docisku głowicy nie doszedł do pozycji. Sprawdź, czy nic nie blokuje ruchu, i zrestartuj drukarkę.',
            '**10 – File invalid.** Uszkodzone zadanie druku. Wyślij je ponownie, a przy powtórce zaktualizuj oprogramowanie drukarki (firmware).',
            '**11 – Software outdated.** Założona taśma jest nowsza niż oprogramowanie drukarki. Wgraj aktualny firmware ze strony Magicard.',
            '**12 – Sensor failure.** Czujniki zadziałały w złej kolejności przy podawaniu karty z podajnika albo ręcznie. Wyjmij kartę i spróbuj ponownie.',
            '**13 – Internal error, 26 – Motor fault, 28 – No printhead.** Błąd elektroniki, silnika albo głowicy. Zrestartuj drukarkę, potem zaktualizuj firmware. Jeśli to nie pomaga, [zgłoś usterkę do serwisu](/serwis/magicard) i podaj numer seryjny oraz pełny kod błędu.',
            '**17, 18 – Upgrade invalid / not auth.** Plik aktualizacji jest uszkodzony albo wystawiony na inną drukarkę. Pobierz go ponownie ze swojego konta Magicard.',
            '**24 – Film no colour.** Wysłano kolorowy projekt, a w drukarce jest taśma jednokolorowa. Załóż taśmę MD100YMCKO albo przełącz projekt na druk czarny.',
            '**27 – Clean required.** Drukarka przekroczyła termin czyszczenia. Przeprowadź czyszczenie z rozdziału wyżej.',
          ],
        },
      ],
    },
  ],
}
