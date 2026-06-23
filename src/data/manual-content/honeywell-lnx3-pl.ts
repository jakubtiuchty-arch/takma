import type { PolishManual } from '@/data/manuals'

/**
 * Skrócona instrukcja obsługi Honeywell LNX3 po polsku.
 * Praktyczne kompendium obsługi mobilnej drukarki etykiet 3" zasilanej wymienną baterią,
 * z drukiem termicznym bezpośrednim — własnym głosem, w skondensowanej formie.
 */
export const honeywellLnx3Pl: PolishManual = {
  updatedAt: '2026-06-22',
  intro:
    'Najważniejsze informacje o obsłudze mobilnej drukarki etykiet Honeywell LNX3 po polsku — od pierwszego uruchomienia, baterii i wyświetlacza, przez ładowanie nośnika i druk termiczny bezpośredni, po Bluetooth, Wi-Fi, NFC, konfigurację, konserwację, diagnostykę i aktualizacje.',
  sections: [
    {
      title: 'Pierwsze uruchomienie',
      blocks: [
        { type: 'p', text: 'LNX3 to lekka, wytrzymała drukarka mobilna do druku etykiet i paragonów w terenie. Pracuje techniką **druku termicznego bezpośredniego** — obraz powstaje przez nagrzewanie termoczułego nośnika, **bez taśmy barwiącej**. Drukuje na nośniku o szerokości do **80 mm**, osiąga prędkość do **127 mm/s (5 cali/s)** i komunikuje się przez **USB-C**, **Bluetooth** oraz **Wi-Fi** (w zależności od modelu), współpracując z urządzeniami z systemem Windows, iOS i Android.' },
        { type: 'p', text: 'Zanim zaczniesz drukować, przygotuj drukarkę do pracy:' },
        { type: 'list', ordered: true, items: [
          'rozpakuj zestaw i sprawdź, czy nic nie uszkodziło się w transporcie;',
          'zdejmij folię ochronną ze styków baterii i naładuj baterię (drukarka jest dostarczana z baterią częściowo naładowaną);',
          'załóż rolkę nośnika i ustaw szerokość papieru oraz typ nośnika w menu;',
          'połącz drukarkę z komputerem lub urządzeniem mobilnym przez USB-C, Bluetooth albo Wi-Fi;',
          'zainstaluj sterownik Windows oraz narzędzie konfiguracyjne YuShi Printer Tool.',
        ] },
        { type: 'p', text: 'Do połączenia kablowego służy dołączony przewód **USB-C na USB-A** — tym samym kablem przesyłasz dane i ładujesz drukarkę. Po włożeniu nośnika wydrukuj **stronę testową (Self Test Page)**, aby potwierdzić poprawny montaż i odczytać podstawowe dane urządzenia.' },
      ],
    },
    {
      title: 'Bateria — pierwsze ładowanie i bezpieczeństwo',
      blocks: [
        { type: 'p', text: 'LNX3 zasila wymienna, akumulatorowa **bateria litowo-jonowa o pojemności 2800 mAh**. Fabrycznie jest naładowana tylko częściowo, dlatego przed pierwszym użyciem ładuj ją **co najmniej 4 godziny**, aby uzyskać pełną wydajność. Przy pierwszym uruchomieniu pamiętaj, by najpierw zdjąć folię ochronną ze styków baterii.' },
        { type: 'p', text: 'Maksymalna temperatura pracy drukarki to **55°C**, ale **ładowanie** zasilaczem Honeywell jest ograniczone do **40°C** — ładuj w miejscu spełniającym ten warunek.' },
        { type: 'list', items: [
          'stosuj wyłącznie baterię modelu **LNX3-BAT** — przetestowano ją zgodnie z obowiązującymi normami bezpieczeństwa;',
          'nie wkładaj baterii do ognia, nie nagrzewaj jej powyżej **70°C** i nie przechowuj w temperaturze powyżej **60°C**;',
          'nie zwieraj styków, nie przebijaj, nie deformuj i nie rozbieraj baterii, nie lutuj do jej styków;',
          'nie zanurzaj baterii w wodzie ani nie wystawiaj jej na działanie wody;',
          'nie wyjmuj baterii podczas ładowania;',
          'przy dłuższym przechowywaniu drukarki wyjmij baterię i przechowuj ją osobno;',
          'zużyte baterie utylizuj zgodnie z lokalnymi przepisami, zaklejając wcześniej styki taśmą izolacyjną.',
        ] },
      ],
    },
    {
      title: 'Wkładanie i wymiana baterii (hot-swap)',
      blocks: [
        { type: 'p', text: 'Baterię wymienisz szybko, bez narzędzi — znajduje się z tyłu drukarki, pod obrotowym klipsem do paska.' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę;',
          'obróć klips do paska z tyłu obudowy, aby uzyskać dostęp do baterii;',
          'naciśnij zatrzask i wyjmij baterię;',
          'włóż baterię i dociśnij, aż zatrzask wyraźnie kliknie;',
          'obróć klips do paska z powrotem na miejsce.',
        ] },
        { type: 'p', text: 'LNX3 obsługuje **hot-swap** — baterię możesz wymienić w trakcie pracy, pod warunkiem że **włożysz naładowaną baterię w ciągu 60 sekund**. Dzięki temu wymieniasz ogniwa na zmianie bez przerywania pracy. Naładowanie baterii sprawdzisz na wyświetlaczu (ikona poziomu naładowania), a napięcie baterii odczytasz w menu **About**.' },
      ],
    },
    {
      title: 'Włączanie, przyciski i wyświetlacz',
      blocks: [
        { type: 'p', text: 'Interfejs LNX3 tworzą **kolorowy wyświetlacz LCD** oraz cztery przyciski: **On/Off** (zasilanie), **Feed** (wysuw nośnika) i przyciski nawigacyjne **Lewy** oraz **Prawy**. Wyświetlacz prowadzi przez menu i pokazuje bieżący stan drukarki.' },
        { type: 'list', items: [
          'naciśnięcie dowolnego przycisku, gdy drukarka śpi — **wybudza ją** i włącza wyświetlacz;',
          'naciśnięcie przycisku On/Off przy wyłączonej drukarce — **włącza** ją;',
          'przytrzymanie On/Off przy włączonej drukarce — **wyłącza** ją (drukarka nie wyłączy się, gdy jest podłączona do zasilania lub gdy menu jest aktywne);',
          'naciśnięcie Feed, gdy ekran jest bezczynny — **wysuwa nośnik** na długość etykiety lub papieru;',
          'przycisk **Lewy** otwiera menu główne i przewija opcje, przycisk **Prawy** przewija opcje i ustawienia;',
          'gdy ekran jest aktywny, działanie przycisków On/Off i Feed zależy od ikony pokazanej na wyświetlaczu (np. potwierdź, anuluj, dodaj, odejmij).',
        ] },
        { type: 'p', text: 'Drukarka sygnalizuje zdarzenia dźwiękiem — **dwa krótkie sygnały** oznaczają m.in. włączenie, zakończenie ładowania lub aktualizacji, otwarte drzwiczki nośnika, brak nośnika, niski poziom baterii albo błąd. Sygnał dźwiękowy włączysz lub wyłączysz w menu **Device Config → Buzzer Switch**.' },
      ],
    },
    {
      title: 'Ikony i wskaźnik stanu',
      blocks: [
        { type: 'p', text: 'Wyświetlacz pokazuje zestaw ikon opisujących stan drukarki: zasilanie, wysuw nośnika, menu, **poziom naładowania baterii**, ładowanie baterii, ostrzeżenie o niskim poziomie (poniżej 20%) i o rozładowaniu, sygnał zbliżającego się wyłączenia, brak nośnika, połączenie **Bluetooth**, połączenie **Wi-Fi**, otwarte drzwiczki nośnika oraz komunikaty błędów (przegrzanie, błąd kalibracji szwu, błąd uczenia nośnika).' },
        { type: 'p', text: 'Obok wyświetlacza znajduje się dioda stanu (Status LED). Świeci **na czerwono przy bezczynnym ekranie**, gdy drukarka jest w trybie uśpienia, oraz **na czerwono przy aktywnym ekranie**, gdy pojawi się alarm — na przykład otwarte drzwiczki nośnika, brak nośnika, niski poziom baterii lub błąd.' },
      ],
    },
    {
      title: 'Ładowanie nośnika (rolka etykiet)',
      blocks: [
        { type: 'p', text: 'LNX3 drukuje na rolkach termoczułych — stosuj wyłącznie oryginalny lub zatwierdzony nośnik. Trwałość paragonów zależy od jakości papieru termicznego, dlatego dobieraj papier o okresie trwałości odpowiednim do Twoich potrzeb archiwizacji.' },
        { type: 'list', ordered: true, items: [
          'naciśnij zatrzask, aby otworzyć drzwiczki nośnika;',
          'rozsuń i przytrzymaj uchwyty rolki, wsuwając nośnik zgodnie z oznaczeniem (stroną termoczułą do góry);',
          'pozwól, by uchwyty docisnęły się do boków rolki;',
          'dociśnij drzwiczki, aż się zatrzasną.',
        ] },
        { type: 'p', text: 'Jeśli wydruk wychodzi pusty, nośnik jest najprawdopodobniej założony odwrotnie — wyjmij go i włóż właściwą stroną. W menu możesz też ustawić, by papier automatycznie się wysuwał przy włączeniu drukarki (**Power On With Feed**) lub po zamknięciu drzwiczek (**Cover With Feed**).' },
      ],
    },
    {
      title: 'Ustawienia nośnika i jakość druku',
      blocks: [
        { type: 'p', text: 'Po każdej zmianie nośnika ustaw jego parametry w menu **Print Settings**, aby drukarka prawidłowo prowadziła i pozycjonowała materiał:' },
        { type: 'list', ordered: true, items: [
          'naciśnij dowolny przycisk, aby uaktywnić wyświetlacz, a następnie przyciskiem Lewym otwórz menu — domyślnie wskazuje na Print Settings;',
          'wejdź w Print Settings i przejdź do **PAPER WIDTH**, aby ustawić szerokość papieru (ustawienie Custom konfigurowalne w zakresie **43–80 mm**);',
          'przejdź do **MEDIA TYPE** i wybierz typ nośnika: paragon (Receipt), etykieta (Label) lub czarny znacznik (Black Mark);',
          'każdą zmianę zatwierdź odpowiednim przyciskiem.',
        ] },
        { type: 'p', text: 'O wyrazistość i czytelność kodów dba przede wszystkim **zaczernienie (Darkness)** — ustaw wartość gęstości druku w zakresie **1–15** (domyślnie 8) odpowiednio do nośnika. Prędkość druku (Speed) podawana jest w calach na sekundę (domyślnie 4). Gdy drukujesz na papierze kolorowym, zwiększ zaczernienie lub użyj papieru w jaśniejszym odcieniu.' },
      ],
    },
    {
      title: 'Druk termiczny bezpośredni',
      blocks: [
        { type: 'p', text: 'LNX3 drukuje techniką **termiczną bezpośrednią**, więc nie używa taśmy barwiącej — obraz powstaje wyłącznie przez nagrzewanie termoczułego nośnika. To rozwiązanie szybkie i bezobsługowe, ale wymaga papieru termicznego o odpowiedniej trwałości, ponieważ z czasem stare wydruki mogą blednąć. Papier przechowuj w temperaturze pokojowej (około 20°C).' },
        { type: 'p', text: 'Po założeniu nośnika sprawdź jakość, drukując **stronę testową**: uaktywnij wyświetlacz, otwórz menu przyciskiem Lewym, przejdź do **SELFTEST PAGE** i potwierdź. Wydruk zawiera m.in. numer modelu i numer seryjny, gęstość i prędkość druku, język poleceń, typ nośnika, szerokość papieru, temperaturę głowicy, napięcie baterii, rozdzielczość (DPI), przebieg druku oraz dane Bluetooth.' },
      ],
    },
    {
      title: 'Połączenie USB-C',
      blocks: [
        { type: 'p', text: 'LNX3 jest dostarczany ze standardowym przewodem **USB-C na USB-A**. Złączem **USB-C** zarówno przesyłasz dane, jak i ładujesz drukarkę.' },
        { type: 'list', ordered: true, items: [
          'podłącz przewód USB do drukarki i do portu USB w komputerze;',
          'włącz drukarkę;',
          'komputer powinien rozpoznać urządzenie i rozpocząć instalację sterownika; jeśli instalacja nie ruszy w systemie Windows, otwórz Urządzenia i drukarki w Panelu sterowania, wybierz „Dodaj drukarkę" i wskaż model.',
        ] },
        { type: 'p', text: 'W menu **Device Config → USB Device Type** ustalisz sposób komunikacji z komputerem — domyślnie drukarka pracuje jako drukarka USB, a do połączenia przez port szeregowy wybierz **USB Virtual COM Port**.' },
      ],
    },
    {
      title: 'Łączność Bluetooth (parowanie)',
      blocks: [
        { type: 'p', text: 'LNX3 łączy się bezprzewodowo przez **Bluetooth**. Aby sparować drukarkę z komputerem lub urządzeniem mobilnym, postępuj zgodnie z instrukcją parowania nowego urządzenia w systemie hosta — drukarka pojawi się na liście dostępnych urządzeń, wystarczy ją wybrać.' },
        { type: 'p', text: 'Kod PIN parowania podejrzysz na wyświetlaczu: uaktywnij ekran, otwórz menu przyciskiem Lewym, przejdź do menu **BLUETOOTH** i wybierz **Pin Code** (kod widnieje też na stronie testowej). W menu Bluetooth obejrzysz również adres MAC, nazwę drukarki do parowania, stan połączenia i wersję modułu, a także ustawisz widoczność (**Discoverable**) oraz obsługę wielu jednoczesnych połączeń (**Multi-Connection**).' },
      ],
    },
    {
      title: 'Parowanie dotykiem (NFC)',
      blocks: [
        { type: 'p', text: 'LNX3 ma wbudowany moduł **NFC** przeznaczony do szybkiego parowania Bluetooth. Telefon z **Androidem** sparujesz dotykiem — wystarczy zbliżyć go do oznaczonego pola NFC z tyłu drukarki, a urządzenie rozpozna drukarkę i zaproponuje połączenie Bluetooth. To najszybszy sposób połączenia w terenie, bez ręcznego wyszukiwania urządzeń.' },
      ],
    },
    {
      title: 'Wi-Fi i sieć bezprzewodowa',
      blocks: [
        { type: 'p', text: 'Modele z modułem bezprzewodowym (LNX-1) obsługują **Wi-Fi (802.11)** i mogą korzystać z różnych protokołów zabezpieczeń sieci. Aby skonfigurować sieć bezprzewodową, połącz drukarkę przez USB i użyj narzędzia **YuShi Printer Tool**.' },
        { type: 'p', text: 'Stan i parametry sieci obejrzysz w menu **WiFi** na wyświetlaczu — m.in. adres MAC, stan połączenia oraz tryb pracy: stacja (STA) lub punkt dostępowy (AP). W trybie stacji ustawisz **DHCP** (automatyczne pobieranie adresu IP), nazwę sieci **SSID**, typ zabezpieczeń (np. WPA, WPA2), adres IP, port (domyślnie **9100**), maskę podsieci i bramę. Tu też odczytasz adres IP potrzebny do otwarcia strony WWW drukarki.' },
      ],
    },
    {
      title: 'Konfiguracja: menu, YuShi i strona WWW',
      blocks: [
        { type: 'p', text: 'Ustawienia drukarki obejrzysz i zmienisz na cztery sposoby: z **menu na wyświetlaczu**, narzędziem **YuShi Printer Tool**, przez **stronę WWW** (zależnie od modelu) oraz **poleceniami programowymi**.' },
        { type: 'p', text: 'Menu na wyświetlaczu obejmuje sześć sekcji: **Print Settings** (szerokość papieru, zaczernienie, typ nośnika, prędkość, język poleceń), **Device Config** (tryb uśpienia, hasło, przywracanie ustawień fabrycznych i opcje dodatkowe), **Bluetooth**, **WiFi**, **About** (numer seryjny, wersja firmware, przebieg druku, napięcie baterii) oraz **Self Test Page**. Część ustawień można zabezpieczyć hasłem (**Device Config → Password**, domyślnie **9999**).' },
        { type: 'p', text: 'Stronę WWW (w modelach ją obsługujących) otworzysz, wpisując w przeglądarce **https://** i adres IP drukarki — drukarka musi być włączona i podłączona do sieci Wi-Fi. Z poziomu strony zmienisz ustawienia druku, konfigurację urządzenia, Bluetooth i Wi-Fi, a zmiany zatwierdzisz przyciskiem **SUBMIT**.' },
      ],
    },
    {
      title: 'Języki drukarki (ZPL, CPCL i inne)',
      blocks: [
        { type: 'p', text: 'LNX3 rozumie wiele języków poleceń, dzięki czemu przyjmuje gotowe formaty z różnych systemów bez zmian po stronie hosta. Język poleceń kontroluje konfigurację drukarki, zwracanie jej stanu oraz tworzenie etykiet i paragonów. Obsługiwane języki to:' },
        { type: 'list', items: [
          '**ZPL** — domyślny język poleceń drukarki;',
          '**CPCL**;',
          '**ESC/POS**;',
          '**XSIM**;',
          '**ESC/P**.',
        ] },
        { type: 'p', text: 'Język ustawisz w menu **Print Settings → Command Set** (domyślnie ZPL). Po szczegóły składni danego języka sięgnij do podręcznika poleceń dla wybranego standardu.' },
      ],
    },
    {
      title: 'Tryb uśpienia i klips do noszenia',
      blocks: [
        { type: 'p', text: 'LNX3 jest na tyle kompaktowa, że można ją nosić lub przypiąć przy sobie. Z tyłu obudowy znajduje się **obrotowy klips do paska** — pozwala drukarce swobodnie się przekręcać, gdy się schylasz lub poruszasz, a jego obrót odsłania komorę baterii.' },
        { type: 'p', text: 'Aby oszczędzać baterię, drukarka po określonym czasie bezczynności przechodzi w **tryb uśpienia**. Czas, po którym wyświetlacz gaśnie i drukarka zasypia, ustawisz w menu **Device Config → Sleep Mode Timeout** (domyślnie 99 sekund). Z uśpienia wybudzisz drukarkę naciśnięciem dowolnego przycisku.' },
      ],
    },
    {
      title: 'Czyszczenie głowicy, czujnika i wałka',
      blocks: [
        { type: 'p', text: 'Regularne czyszczenie utrzymuje jakość druku i wydłuża żywotność głowicy. Przed każdą konserwacją **wyłącz drukarkę i odłącz zasilanie**, a jeśli była niedawno używana — odczekaj, aż głowica całkowicie ostygnie. Nigdy nie wkładaj do drukarki ostrych przedmiotów i nie spryskuj jej wodą.' },
        { type: 'p', text: 'Czyszczenie głowicy:' },
        { type: 'list', ordered: true, items: [
          'wyłącz drukarkę i odłącz przewód zasilający, jeśli jest podłączony;',
          'odczekaj, aż głowica ostygnie, i wyjmij nośnik;',
          'przetrzyj głowicę miękkim, bawełnianym wacikiem zwilżonym **alkoholem etylowym**;',
          'gdy głowica całkowicie wyschnie, załóż nośnik i zamknij drzwiczki.',
        ] },
        { type: 'p', text: '**Czujnik nośnika** czyść miękką, bawełnianą ściereczką zwilżoną alkoholem etylowym, a **wałek dociskowy (gumowy)** — ściereczką zwilżoną łagodnym roztworem detergentu. W obu przypadkach przed założeniem nośnika poczekaj, aż element całkowicie wyschnie. Alkohol etylowy jest łatwopalny — stosuj go ostrożnie i tylko środki czyszczące wskazane przez producenta.' },
      ],
    },
    {
      title: 'Diagnostyka i rozwiązywanie problemów',
      blocks: [
        { type: 'p', text: 'Stan i statystyki drukarki (przebieg druku, dane sprzętu i firmware) sprawdzisz w menu **About**: uaktywnij wyświetlacz, otwórz menu przyciskiem Lewym, przejdź do **ABOUT** i przeglądaj opcje przyciskami nawigacyjnymi. Najczęstsze usterki i ich przyczyny:' },
        { type: 'list', items: [
          '**rozmyty, niewyraźny druk** — wyczyść głowicę i wałek dociskowy; przy papierze kolorowym zwiększ zaczernienie lub użyj jaśniejszego papieru;',
          '**głośny dźwięk podczas wysuwu nośnika** — wyczyść głowicę i wałek dociskowy;',
          '**drukarka co jakiś czas przerywa druk i sygnalizuje brak papieru** mimo założonej rolki — wyczyść czujnik nośnika;',
          '**brak sygnału dźwiękowego o końcu papieru** — wyczyść czujnik nośnika;',
          '**pusty wydruk** — nośnik jest założony odwrotnie; wyjmij go i włóż właściwą stroną;',
          '**stare wydruki blakną po kilku miesiącach** — użyj papieru termicznego o dłuższym okresie trwałości i przechowuj go w temperaturze pokojowej (około 20°C).',
        ] },
      ],
    },
    {
      title: 'Przywracanie ustawień fabrycznych',
      blocks: [
        { type: 'p', text: 'Przywrócenie ustawień fabrycznych kasuje wszystkie parametry i zapisane konfiguracje, przywracając drukarkę do stanu domyślnego. Reset wykonasz z menu na wyświetlaczu:' },
        { type: 'list', ordered: true, items: [
          'naciśnij dowolny przycisk, aby uaktywnić wyświetlacz, i przyciskiem Lewym otwórz menu główne;',
          'przyciskiem Prawym przejdź do **DEVICE CONFIG** i wejdź w to menu;',
          'przejdź do **Restore Factory** i wybierz tę opcję;',
          'potwierdź ponownie;',
          'jeśli włączone jest hasło, wprowadź je przyciskami nawigacyjnymi (domyślnie **9999**) i zatwierdź.',
        ] },
      ],
    },
    {
      title: 'Aktualizacja oprogramowania układowego',
      blocks: [
        { type: 'p', text: 'Warto okresowo sprawdzać aktualizacje **oprogramowania układowego (firmware)** — to element dbania o bezpieczeństwo drukarki. Bieżącą wersję firmware odczytasz w menu **About → Firmware Version**, a najnowszą wersję pobierzesz z portalu pobierania producenta (Software Downloads).' },
        { type: 'p', text: 'Najwygodniej wgrać aktualizację narzędziem **YuShi Printer Tool** (również dostępnym z portalu pobierania) po podłączeniu drukarki przez USB. Do korzystania z portalu potrzebne jest konto, a do pobierania — instalacja menedżera pobierania Honeywell (Honeywell Download Manager); część plików może wymagać podania daty zakupu lub numeru umowy serwisowej.' },
      ],
    },
  ],
}
