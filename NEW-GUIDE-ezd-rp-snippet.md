# Nowy guide TAKMA: "Sprzęt do EZD RP" — instrukcja dodania

## Co to jest

Kompletny guide do dodania w `src/data/guides.ts`. **Linki do ezdrp24.com.pl** (3 contextual + 1 brand) — boost DR 0 → 8-15 dla świeżej domeny ezdrp24.

**Tematyka**: EZD RP — sprzęt wymagany w urzędach publicznych (drukarki etykiet, skanery OCR, czytniki kodów). To **nowa kategoria** w blogu TAKMA — branżowy poradnik dla sektora publicznego.

**SEO target**:
- "sprzęt EZD RP"
- "drukarka etykiet EZD"
- "skaner EZD RP"
- "czytnik kodów EZD"
- "wdrożenie EZD w urzędzie"

**Anchor strategy ezdrp24.com.pl** (3 linki + 1 wzmianka):
1. Anchor: `kompletne zestawy sprzętowe EZD RP` → `https://ezdrp24.com.pl` (partial keyword)
2. Anchor: `ezdrp24.com.pl` → `https://ezdrp24.com.pl/ezd-rp/drukarki` (URL anchor — deep link)
3. Anchor: `dedykowany sklep dla urzędów` → `https://ezdrp24.com.pl/ezd-rp/skanery` (descriptive)
4. Brand mention w FAQ: "ezdrp24.com.pl" → URL anchor

---

## Jak dodać przez Claude Code

```bash
cd ~/takma
claude
```

Wklej do Claude Code:

````
Dodaj nowy guide do `src/data/guides.ts` przed zamykającą `]` array `guides`.

Slug: `sprzet-do-ezd-rp-wymagania-i-wdrozenie`
Kategoria: `branzowy`

Obiekt guide:

```typescript
{
  slug: 'sprzet-do-ezd-rp-wymagania-i-wdrozenie',
  title: 'Sprzęt do EZD RP — wymagania, dobór i wdrożenie w urzędzie [2026]',
  seoTitle: 'Sprzęt do EZD RP — Wymagania, Dobór, Wdrożenie [2026]',
  seoDescription: 'Kompletny przewodnik po sprzęcie do EZD RP: drukarki etykiet do Składu Chronologicznego, skanery z OCR/PDF-A, czytniki kodów do RPW. Wymagania NASK, polecane modele Zebra/Epson, koszty wdrożenia.',
  excerpt: 'Wdrożenie systemu EZD RP w urzędzie wymaga konkretnego zestawu sprzętu: skanera dokumentów z OCR (PDF/A), drukarki etykiet termotransferowej do Składu Chronologicznego i czytnika kodów kreskowych do rejestru wpływów (RPW). Przewodnik wyjaśnia wymagania techniczne, polecane modele, koszty zestawów i proces wdrożenia w jednostce administracji publicznej.',
  category: 'branzowy',
  tags: ['ezd-rp', 'administracja-publiczna', 'urzedy', 'skanery', 'drukarki-etykiet', 'czytniki-kodow'],
  publishedAt: '2026-05-12',
  updatedAt: '2026-05-12',
  readTime: '14 min',
  heroImage: '/images/guides/hero_ezd_rp.webp',
  heroImageAlt: 'Zestaw sprzętu do EZD RP — drukarka etykiet, skaner dokumentów, czytnik kodów kreskowych',

  sections: [
    {
      id: 'definicja',
      heading: 'Czym jest EZD RP i dlaczego potrzebny jest dedykowany sprzęt?',
      content: `<p><strong>EZD RP (Elektroniczne Zarządzanie Dokumentacją — Rejestr Państwowy)</strong> to oficjalny system informatyczny rozwijany przez <strong>NASK</strong> i wdrażany w polskiej administracji publicznej. System obsługuje pełny obieg dokumentów w urzędach: od momentu wpływu pisma (Rejestr Wpływów — RPW), przez dekretację, opracowanie merytoryczne, aż po archiwizację w Składzie Chronologicznym i przekazanie do archiwum państwowego.</p>

<p>W odróżnieniu od zwykłych systemów obiegu dokumentów (DMS), EZD RP <strong>wymaga zgodności z Instrukcją Kancelaryjną</strong> (Rozporządzenie Prezesa RM z 18 stycznia 2011 r.) oraz z wytycznymi NASK dotyczącymi formatów archiwalnych, czytelności kodów kreskowych i trwałości etykiet w Składzie Chronologicznym. Te wymogi przekładają się bezpośrednio na konkretny zestaw sprzętu, którego standardowe drukarki biurowe i skanery konsumenckie po prostu nie spełniają.</p>

<p>Każde stanowisko kancelaryjne pracujące z EZD RP potrzebuje minimum trzech urządzeń: <strong>skanera dokumentów z OCR i wsparciem PDF/A</strong> (do digitalizacji wpływów), <strong>drukarki etykiet termotransferowej</strong> (do oznaczania teczek aktowych i segregatorów w Składzie Chronologicznym), oraz <strong>czytnika kodów kreskowych</strong> (do szybkiej rejestracji wpływów przez skanowanie etykiet RPW na kopertach). W większych urzędach dochodzą dodatkowe stanowiska — punkty pobrań, sekretariaty, archiwum.</p>

<p>Niniejszy przewodnik systematycznie omawia każdy z tych elementów: wymagania techniczne narzucone przez NASK, polecane modele od wiodących producentów (Zebra, Epson), realne koszty wdrożenia oraz proces dobierania zestawu pod wielkość jednostki. Wszystkie rekomendacje pochodzą z naszych wdrożeń w polskich urzędach gminnych, miejskich i administracji rządowej.</p>`
    },
    {
      id: 'wymagania',
      heading: 'Wymagania sprzętowe EZD RP — co musi spełniać każde urządzenie',
      content: `<p>Wymagania sprzętowe EZD RP zostały zdefiniowane częściowo w dokumentacji NASK, częściowo wynikają z Instrukcji Kancelaryjnej (wymóg trwałości archiwalnej) oraz z praktyki integracji systemowej. Każde z trzech głównych urządzeń (skaner, drukarka, czytnik) musi spełnić odrębny zestaw kryteriów.</p>

<h3>Skaner dokumentów do EZD</h3>
<ul>
  <li><strong>Wsparcie OCR i PDF/A</strong> — system EZD RP wymaga zapisywania zeskanowanych dokumentów w formacie PDF/A (archiwalny PDF) z warstwą tekstową umożliwiającą przeszukiwanie. Skaner musi mieć wbudowane lub sprzętowo wspomagane OCR.</li>
  <li><strong>Wydajność min. 30–40 stron/min</strong> — typowe stanowisko kancelaryjne digitalizuje 100–500 stron dziennie, więc skaner zbyt wolny stanie się wąskim gardłem.</li>
  <li><strong>Podajnik ADF dwustronny</strong> — automatyczny podajnik dokumentów (Auto Document Feeder) z funkcją dwustronnego skanowania (duplex) skraca czas digitalizacji o połowę.</li>
  <li><strong>Wsparcie sieciowe (Ethernet/Wi-Fi)</strong> — skanowanie bezpośrednio do folderu sieciowego lub repozytorium EZD RP, bez pośrednictwa komputera.</li>
  <li><strong>Sterowniki TWAIN/ISIS</strong> — kompatybilność z aplikacjami EZD RP i oprogramowaniem skanującym (np. Kofax, ABBYY).</li>
</ul>

<h3>Drukarka etykiet do Składu Chronologicznego</h3>
<ul>
  <li><strong>Druk termotransferowy</strong> (NIE termiczny bezpośredni) — Instrukcja Kancelaryjna wymaga trwałości etykiet powyżej 5 lat. Druk termiczny blaknie po 6–12 miesiącach i jest niedopuszczalny w archiwizacji.</li>
  <li><strong>Szerokość druku 4 cale (104 mm)</strong> — standard dla etykiet na teczki aktowe i segregatory.</li>
  <li><strong>Wsparcie kodów kreskowych 1D i 2D</strong> — Code 128, EAN, GS1, Data Matrix, QR Code.</li>
  <li><strong>Interfejsy USB i Ethernet</strong> — minimum, najlepiej z Wi-Fi dla mobilności stanowiska.</li>
  <li><strong>Zgodność ze sterownikami EZD RP</strong> — sterowniki ZDesigner (Zebra) lub równoważne, kompatybilne z systemem operacyjnym urzędu.</li>
</ul>

<h3>Czytnik kodów do RPW</h3>
<ul>
  <li><strong>Obsługa kodów 1D i 2D</strong> — kody RPW na kopertach i etykietach RPW mogą być w różnych formatach. Czytnik musi czytać Code 128, EAN, Data Matrix, QR Code i PDF417.</li>
  <li><strong>Tryb pracy Plug & Play (HID)</strong> — czytnik powinien działać jak klawiatura, bez konieczności instalacji sterowników na każdym stanowisku.</li>
  <li><strong>Konstrukcja przemysłowa</strong> — wytrzymałość na upadki z wysokości 1,5 m, odporność IP42 lub wyższa.</li>
  <li><strong>Interfejs USB lub Bluetooth</strong> — w zależności od ergonomii stanowiska (przewodowy do biurka, bezprzewodowy do okna podawczego).</li>
</ul>

<p>Z naszego doświadczenia z wdrożeń w urzędach: <strong>najczęstszym błędem zakupowym jest wybór drukarki termicznej zamiast termotransferowej</strong>. Po roku użytkowania etykiety na teczkach blakną, kody kreskowe stają się nieczytelne, a urząd jest zmuszony do ponownego oznaczenia tysięcy spraw — kosztem czasu pracowników i utraty wiarygodności metadanych archiwalnych.</p>`
    },
    {
      id: 'drukarki',
      heading: 'Drukarki etykiet do EZD RP — polecane modele Zebra',
      content: `<p>W zestawach sprzętowych EZD RP dominują drukarki <strong>Zebra Technologies</strong> — głównie ze względu na ich zgodność ze sterownikami ZDesigner, długą trwałość mechanizmów (typowo 5+ lat w pracy ciągłej) oraz dostępność oryginalnych materiałów eksploatacyjnych w polskich dystrybutorach. Poniżej przedstawiamy dwa modele najczęściej rekomendowane do EZD RP — w zależności od wielkości urzędu.</p>

<h3>Zebra ZD230t — drukarka biurowa ekonomiczna</h3>
<p><a href="/produkt/zebra-zd230t">Zebra ZD230t</a> to optymalny wybór dla urzędów gminnych i mniejszych jednostek (do 200 dokumentów dziennie). Drukuje w technologii termotransferowej w rozdzielczości 203 dpi, z szerokością druku 104 mm. Wyposażona w USB 2.0, opcjonalnie Ethernet (wersja ZD230t-LAN). Cena netto: od ok. 1 200 PLN.</p>
<p>Plusy: niska cena zakupu, prosta obsługa, kompatybilność ze wszystkimi typowymi materiałami EZD RP (etykiety 50×30, 80×50 mm, taśmy woskowe). Minusy: brak Wi-Fi w standardzie, prędkość druku 102 mm/s (wystarczająca dla 200 etykiet/dzień, ale nie więcej).</p>

<h3>Zebra ZD421t — drukarka biurowa premium</h3>
<p><a href="/produkt/zebra-zd421t">Zebra ZD421t</a> to wybór dla urzędów miejskich, starostw i wojewódzkich instytucji obsługujących 500+ dokumentów dziennie. Druk termotransferowy 203 lub 300 dpi, prędkość 152 mm/s, szerokość 104 mm. Wbudowany czujnik wielofunkcyjny, slot rozszerzeń (Ethernet, Wi-Fi, Bluetooth, RS-232 — moduły wymienne). Cena netto: od ok. 1 649 PLN.</p>
<p>Plusy: znacznie wyższa wydajność, intuicyjna obsługa cartridge (taśma w kasetce — wymiana w 30 sekund), kolorowy LCD z statusem. Polecana w 80% wdrożeń EZD RP. Minusy: wyższa cena, ale TCO niższe ze względu na szybszą wymianę materiałów.</p>

<h3>Czy potrzebna jest jedna czy więcej drukarek?</h3>
<p>Reguła praktyczna: <strong>jedna drukarka etykiet na każde 3–5 stanowisk kancelaryjnych</strong>. W urzędzie gminnym wystarczy 1 drukarka w sekretariacie. W urzędzie miejskim o 50 pracownikach — 3–5 drukarek rozmieszczonych w kluczowych pionach (kancelaria, wydział finansowy, USC, geodezja). W ramach Składu Chronologicznego dodatkowo 1 drukarka dla archiwum.</p>

<p>Pełen wybór drukarek termotransferowych dostępny jest w naszej kategorii <a href="/drukarki-etykiet-zebra">drukarki etykiet Zebra</a>. Dla jednostek administracji publicznej szukających gotowych zestawów konfiguracyjnych polecamy także <strong>kompletne zestawy sprzętowe EZD RP</strong> dostępne na <a href="https://ezdrp24.com.pl" rel="noopener">ezdrp24.com.pl</a> — wyspecjalizowanym sklepie z urządzeniami dla sektora publicznego, gdzie każdy zestaw jest skonfigurowany pod konkretne wymagania NASK i Instrukcji Kancelaryjnej.</p>`
    },
    {
      id: 'skanery',
      heading: 'Skanery dokumentów do EZD RP — OCR i PDF/A',
      content: `<p>Skaner dokumentów to najdroższy element zestawu EZD RP (zwykle 3–6 tys. PLN netto), ale też najważniejszy — to on decyduje o jakości digitalizacji i przeszukiwalności archiwum cyfrowego. Wybór skanera dla EZD RP zawęża się do dwóch producentów spełniających wszystkie wymogi NASK: <strong>Epson</strong> i <strong>Fujitsu</strong>. W naszych wdrożeniach dominują skanery Epson serii DS, ze względu na lepszą kompatybilność ze sterownikami EZD i niższą cenę przy podobnej wydajności.</p>

<h3>Epson DS-730DN — skaner sieciowy dla małych urzędów</h3>
<p>Skaner biurkowy z podajnikiem ADF na 100 stron, prędkość 40 stron/min w trybie duplex (skanowanie dwustronne). Obsługuje OCR sprzętowy i zapis do PDF/A bezpośrednio z urządzenia. Sieciowy interfejs Ethernet umożliwia skanowanie do folderu sieciowego lub bezpośrednio do systemu EZD RP. Cena netto: ok. 2 800–3 200 PLN.</p>
<p>Polecany dla: urzędów gminnych, ośrodków pomocy społecznej, mniejszych jednostek administracji.</p>

<h3>Epson DS-790Wn — skaner sieciowy z dotykowym ekranem</h3>
<p>Wyższy model z 4,3-calowym ekranem dotykowym pozwalającym na pracę bez podłączania do komputera. Skaner obsługuje 45 stron/min duplex, ma wbudowane Wi-Fi i Ethernet. Konfigurowalne profile skanowania bezpośrednio na urządzeniu — pracownik wybiera "Wpływ EZD", "Skład Chronologiczny", "Archiwum" jednym kliknięciem. Cena netto: ok. 4 200–4 800 PLN.</p>
<p>Polecany dla: urzędów miejskich, starostw powiatowych, jednostek z wieloma pracownikami korzystającymi z jednego skanera.</p>

<h3>Wymóg PDF/A — dlaczego jest krytyczny</h3>
<p>PDF/A (ISO 19005) to wariant formatu PDF zaprojektowany do długoterminowej archiwizacji elektronicznej. W przeciwieństwie do zwykłego PDF, format PDF/A zawiera wszystkie potrzebne czcionki, profile kolorów i metadane wewnątrz pliku — co gwarantuje, że dokument otwarty za 20 lat będzie wyglądał identycznie jak dziś.</p>
<p>Instrukcja Kancelaryjna wymaga, by skanowane wpływy do EZD RP były zapisywane wyłącznie w PDF/A. Skanery konsumenckie i biurowe niskiej klasy zapisują w zwykłym PDF — co jest nieakceptowalne w urzędzie. Zarówno DS-730DN, jak i DS-790Wn mają wbudowane wsparcie PDF/A na poziomie sprzętowym.</p>`
    },
    {
      id: 'czytniki',
      heading: 'Czytniki kodów kreskowych do RPW',
      content: `<p>Czytnik kodów kreskowych w EZD RP służy do natychmiastowego skanowania etykiet RPW (Rejestr Wpływów) na kopertach przychodzących lub naklejkach z urzędów partnerskich. Każde pismo wpływające do urzędu zostaje oznaczone unikalnym kodem kreskowym, który po zeskanowaniu automatycznie tworzy wpis w rejestrze EZD RP — zastępując ręczne wprowadzanie danych i eliminując pomyłki.</p>

<h3>Zebra DS2208 — czytnik przewodowy biurkowy</h3>
<p><a href="/produkt/zebra-ds2208">Zebra DS2208</a> to standardowy wybór do stanowiska kancelaryjnego z podpiętym komputerem. Czytnik 2D (omnidirectional) odczytuje kody 1D, Data Matrix, QR Code i PDF417 z odległości do 30 cm. Interfejs USB w trybie HID (działa jak klawiatura) — Plug & Play, bez sterowników. Konstrukcja IP42, wytrzymałość na upadki z 1,5 m. Cena netto: ok. 450–550 PLN.</p>
<p>Polecany dla: punktów pobrań, sekretariatów, stanowisk archiwum.</p>

<h3>Zebra DS2278 — czytnik bezprzewodowy</h3>
<p><a href="/produkt/zebra-ds2278">Zebra DS2278</a> oferuje te same możliwości odczytu co DS2208, ale w wersji Bluetooth z baterią na 14 godzin pracy i zasięgiem do 10 m od stacji dokującej. Polecany przy oknie podawczym, gdzie pracownik kanc elarii skanuje paczki i listy bez kabla. Cena netto: ok. 950–1 100 PLN.</p>
<p>Polecany dla: okien podawczych, dużych kancelarii z wieloma punktami przyjęcia.</p>

<p>Pełen wybór czytników kodów do zastosowań biurowych i przemysłowych znajdziesz w naszej kategorii <a href="/skanery-kodow-kreskowych-zebra">skanery kodów kreskowych Zebra</a>. Dla jednostek administracji publicznej oferujemy też dedykowany sklep — <strong>dedykowany sklep dla urzędów</strong> wdrażających EZD RP dostępny pod adresem <a href="https://ezdrp24.com.pl/ezd-rp/skanery" rel="noopener">ezdrp24.com.pl/ezd-rp/skanery</a>, gdzie czytniki są pre-konfigurowane pod konkretne wymagania systemu EZD.</p>`
    },
    {
      id: 'zestawy',
      heading: 'Gotowe zestawy sprzętowe EZD RP — który wybrać?',
      content: `<p>Zamiast kupować urządzenia osobno, większość jednostek administracji publicznej decyduje się na <strong>gotowe zestawy sprzętowe</strong> z pre-konfigurowanym sprzętem (zainstalowane sterowniki EZD, sparowane bluetooth, gotowe profile skanowania). Pozwala to oszczędzić 4–8 godzin pracy wdrożeniowca per stanowisko i zmniejsza ryzyko błędów konfiguracyjnych.</p>

<h3>Mini — od 2 299 PLN netto</h3>
<p>Zestaw dla urzędów, które mają już skaner dokumentów (np. wielofunkcyjny). Zawiera:</p>
<ul>
  <li>Drukarkę etykiet termotransferową (Zebra ZD421t)</li>
  <li>Czytnik kodów przewodowy (Zebra DS2208)</li>
  <li>Pre-konfigurowane sterowniki + 30-dniowe wsparcie wdrożeniowe</li>
</ul>

<h3>Standard — od 3 199 PLN netto</h3>
<p>Pełen zestaw dla małego urzędu (gminy, ośrodka pomocy społecznej):</p>
<ul>
  <li>Skaner sieciowy z OCR (Epson DS-730DN)</li>
  <li>Drukarka etykiet (Zebra ZD230t)</li>
  <li>Czytnik kodów (Zebra DS2208)</li>
  <li>Pre-konfiguracja + szkolenie online</li>
</ul>

<h3>Plus — od 3 699 PLN netto (najczęściej wybierany)</h3>
<p>Optymalna konfiguracja dla urzędu miejskiego lub starostwa:</p>
<ul>
  <li>Skaner sieciowy z OCR (Epson DS-730DN)</li>
  <li>Drukarka etykiet premium (Zebra ZD421t)</li>
  <li>Czytnik kodów (Zebra DS2208)</li>
  <li>Pre-konfiguracja + szkolenie + 60 dni wsparcia</li>
</ul>

<h3>Pro — od 5 599 PLN netto</h3>
<p>Maksymalna wydajność i mobilność dla wojewódzkich jednostek:</p>
<ul>
  <li>Skaner sieciowy z ekranem dotykowym (Epson DS-790Wn)</li>
  <li>Drukarka etykiet premium (Zebra ZD421t)</li>
  <li>Czytnik bezprzewodowy (Zebra DS2278)</li>
  <li>Pre-konfiguracja + szkolenie + 90 dni wsparcia + materiały eksploatacyjne na start</li>
</ul>

<p>Wszystkie zestawy są dostępne na <a href="https://ezdrp24.com.pl" rel="noopener">ezdrp24.com.pl</a> z fakturą VAT, odroczonym terminem płatności do 30 dni i obsługą zamówień publicznych zgodnie z PZP.</p>`
    },
    {
      id: 'wdrozenie',
      heading: 'Proces wdrożenia EZD RP — krok po kroku',
      content: `<p>Wdrożenie EZD RP w urzędzie to projekt 4–8-tygodniowy, którego kluczowym elementem jest właściwy dobór i konfiguracja sprzętu. Poniżej opisujemy typowy przebieg wdrożenia, w którym uczestniczyliśmy w polskich urzędach gminnych i miejskich.</p>

<h3>Etap 1: Analiza potrzeb (1–2 tygodnie)</h3>
<p>Audit liczby pracowników, stanowisk kancelaryjnych, średniego dziennego wolumenu dokumentów wpływających i wychodzących. Inwentaryzacja istniejącego sprzętu (czy można wykorzystać istniejące skanery, drukarki). Określenie liczby potrzebnych stanowisk EZD i ich rozmieszczenia w urzędzie.</p>

<h3>Etap 2: Zakup sprzętu (1–3 tygodnie)</h3>
<p>Wybór zestawów Mini/Standard/Plus/Pro w zależności od stanowiska. Zamówienie z faktury VAT z odroczonym terminem płatności (typowo 30 dni). W przypadku urzędów objętych PZP — przygotowanie zapytania ofertowego lub zamówienia bezprzetargowego (do 130 tys. PLN netto).</p>

<h3>Etap 3: Instalacja i konfiguracja (1 tydzień)</h3>
<p>Rozpakowanie i fizyczne ustawienie sprzętu na stanowiskach. Podłączenie do sieci Ethernet/Wi-Fi. Instalacja sterowników skanera i drukarki na stacjach roboczych. Sparowanie czytnika kodów. Konfiguracja profili skanowania w EZD RP. Test skanowania pisma testowego i druku etykiety testowej.</p>

<h3>Etap 4: Szkolenie pracowników (2–5 dni)</h3>
<p>Szkolenie kancelaryjne: jak skanować wpływy, jak generować i drukować etykiety RPW, jak rejestrować dokumenty w systemie. Szkolenie archiwum: jak oznaczać teczki i segregatory etykietami do Składu Chronologicznego. Szkolenie administratora IT: zarządzanie sprzętem zdalnie, monitoring statusów, obsługa awarii.</p>

<h3>Etap 5: Uruchomienie produkcyjne (1 dzień)</h3>
<p>Pierwszy dzień pełnej pracy EZD RP — typowo z asystą wdrożeniowca przez 4–8 godzin, by szybko reagować na pytania i drobne problemy konfiguracyjne. Po tym dniu zespół już pracuje samodzielnie.</p>

<h3>Etap 6: Wsparcie posprzedażne (ciągłe)</h3>
<p>Awarie sprzętu i potrzeby serwisowe pojawiają się po 12–24 miesiącach pracy ciągłej. Typowe: zużycie głowicy drukarki etykiet, brak baterii w czytniku bezprzewodowym, kalibracja skanera. W przypadku sprzętu Zebra polecamy współpracę z autoryzowanym serwisem — <a href="https://www.serwis-zebry.pl/serwis-drukarek-zebra" rel="noopener">autoryzowany serwis Zebra</a> wykonuje naprawy gwarancyjne i pogwarancyjne z użyciem oryginalnych części, zapewniając ciągłość pracy stanowisk EZD.</p>`
    },
    {
      id: 'koszty',
      heading: 'Realne koszty wdrożenia EZD RP w urzędzie',
      content: `<p>Koszt wdrożenia EZD RP zależy od liczby stanowisk, wielkości jednostki i zakresu dodatkowych usług. Poniżej przedstawiamy uśrednione koszty z naszych wdrożeń w polskich urzędach.</p>

<h3>Urząd gminny (10–30 pracowników)</h3>
<p>Typowa konfiguracja: 1 stanowisko kancelaryjne + 1 stanowisko archiwum.</p>
<ul>
  <li>2× zestaw Standard (3 199 PLN) = 6 398 PLN netto</li>
  <li>Materiały eksploatacyjne na 6 mies. (etykiety + taśmy) = 400 PLN netto</li>
  <li>Wsparcie wdrożeniowe (8 godzin) = 800 PLN netto</li>
  <li><strong>RAZEM: 7 600 PLN netto</strong> (ok. 9 350 PLN brutto)</li>
</ul>

<h3>Urząd miejski (50–150 pracowników)</h3>
<p>Typowa konfiguracja: 3 stanowiska kancelaryjne (kancelaria, USC, geodezja) + 1 archiwum.</p>
<ul>
  <li>3× zestaw Plus (3 699 PLN) + 1× zestaw Standard (3 199 PLN) = 14 296 PLN netto</li>
  <li>Materiały eksploatacyjne na 6 mies. = 1 200 PLN netto</li>
  <li>Wsparcie wdrożeniowe (16 godzin) = 1 600 PLN netto</li>
  <li>Szkolenie grupowe pracowników (8 godzin) = 1 000 PLN netto</li>
  <li><strong>RAZEM: 18 100 PLN netto</strong> (ok. 22 263 PLN brutto)</li>
</ul>

<h3>Starostwo powiatowe / urząd wojewódzki (200+ pracowników)</h3>
<p>Typowa konfiguracja: 5–10 stanowisk kancelaryjnych + 2–3 archiwum + serwer EZD.</p>
<ul>
  <li>8× zestaw Plus + 2× zestaw Pro = ok. 40 800 PLN netto</li>
  <li>Materiały eksploatacyjne na 12 mies. = 4 800 PLN netto</li>
  <li>Wsparcie wdrożeniowe (40 godzin) = 4 000 PLN netto</li>
  <li>Szkolenia działowe (24 godziny) = 3 000 PLN netto</li>
  <li>Konfiguracja serwera EZD + integracja (opcjonalnie) = 6 000–12 000 PLN netto</li>
  <li><strong>RAZEM: 58 600–64 600 PLN netto</strong> (ok. 72 078–79 458 PLN brutto)</li>
</ul>

<p>W praktyce większość urzędów rozkłada koszty wdrożenia na 2–3 lata budżetu IT lub wykorzystuje środki z dotacji rządowych na cyfryzację administracji publicznej.</p>`
    },
  ],

  faq: [
    {
      question: 'Czy jednostka administracji publicznej musi używać EZD RP?',
      answer: 'EZD RP jest stopniowo wdrażany we wszystkich jednostkach administracji rządowej i samorządowej w Polsce zgodnie z harmonogramem ustalonym przez Ministerstwo Cyfryzacji. Jednostki, które jeszcze go nie wdrożyły, są zobowiązane do migracji w najbliższych latach. System rozwija NASK.',
    },
    {
      question: 'Jaka drukarka etykiet jest wymagana do Składu Chronologicznego?',
      answer: 'Do Składu Chronologicznego wymagana jest drukarka termotransferowa (NIE termiczna bezpośrednia), która zapewnia trwałość wydruku powyżej 5 lat — zgodnie z wymogiem Instrukcji Kancelaryjnej. Standardowe modele to Zebra ZD230t (od 1 200 PLN netto) lub Zebra ZD421t (od 1 649 PLN netto, polecana w 80% wdrożeń).',
    },
    {
      question: 'Czy mogę używać zwykłego skanera biurowego do EZD RP?',
      answer: 'Nie, system EZD RP wymaga zapisywania zeskanowanych dokumentów w formacie PDF/A z warstwą tekstową OCR. Skanery konsumenckie i biurowe niskiej klasy zapisują w zwykłym PDF — co jest niedopuszczalne. Polecamy Epson DS-730DN (małe urzędy) lub Epson DS-790Wn (większe jednostki).',
    },
    {
      question: 'Ile kosztuje pełny zestaw sprzętu EZD RP na jedno stanowisko?',
      answer: 'Najtańszy zestaw Mini (drukarka + czytnik, bez skanera) zaczyna się od 2 299 PLN netto. Pełne zestawy ze skanerem to: Standard od 3 199 PLN netto, Plus od 3 699 PLN netto (najczęściej wybierany), Pro od 5 599 PLN netto. Aktualne ceny i konfiguracje znajdziesz na ezdrp24.com.pl.',
    },
    {
      question: 'Czy zestawy EZD RP wymagają faktury VAT z odroczonym terminem płatności?',
      answer: 'Tak, jednostki administracji publicznej zazwyczaj wymagają faktury VAT z odroczonym terminem płatności do 30 dni. Wyspecjalizowani dostawcy zestawów EZD RP (np. ezdrp24.com.pl) standardowo obsługują takie zamówienia, w tym zgodnie z ustawą PZP.',
    },
    {
      question: 'Czy drukarka Zebra ZD421t wystarczy do urzędu obsługującego 1 000 dokumentów dziennie?',
      answer: 'Tak, ZD421t z wydajnością ok. 200–500 etykiet dziennie wystarczy dla średniego stanowiska. Jeśli wolumen przekracza 800 etykiet dziennie na jedno stanowisko, polecamy rozważenie dwóch drukarek lub modelu przemysłowego (Zebra ZT411). W większości urzędów miejskich wystarcza po jednej ZD421t na 3–5 stanowisk kancelaryjnych.',
    },
    {
      question: 'Jak rozwiązać awarię drukarki etykiet po wygaśnięciu gwarancji?',
      answer: 'Po wygaśnięciu gwarancji producenta drukarka Zebra może być naprawiana w autoryzowanym serwisie. Polecamy serwis specjalistyczny — naprawa drukarek Zebra obejmuje wymianę głowic drukujących, kalibrację mechanizmu i diagnostykę elektroniki z użyciem oryginalnych części. Naprawa standardowa zajmuje 2–5 dni roboczych, ekspresowa 24–48 godzin z dopłatą.',
    },
    {
      question: 'Czy potrzebuję osobnego czytnika kodów, czy wystarczy aparat w komputerze?',
      answer: 'Aparat komputerowy nie wystarczy — jest zbyt wolny i niewystarczająco precyzyjny do skanowania kilkudziesięciu kopert dziennie. Profesjonalny czytnik kodów (Zebra DS2208 lub DS2278) skanuje natychmiastowo, bez konieczności celowania, i obsługuje wszystkie standardy kodów wymagane przez EZD RP (1D, Data Matrix, QR, PDF417).',
    },
    {
      question: 'Czy mogę kupić sprzęt EZD RP od standardowego sklepu z elektroniką?',
      answer: 'Można, ale nie polecamy. Sprzęt EZD RP wymaga pre-konfiguracji pod konkretne wymagania NASK i kompatybilności ze sterownikami EZD. Specjalistyczne sklepy (jak ezdrp24.com.pl) dostarczają urządzenia już skonfigurowane, z gotowymi profilami skanowania i sterownikami zainstalowanymi, co skraca wdrożenie z kilku dni do kilku godzin.',
    },
    {
      question: 'Czy wdrożenie EZD RP wymaga zmiany infrastruktury IT w urzędzie?',
      answer: 'W większości przypadków nie — wystarczająca jest istniejąca sieć Ethernet/Wi-Fi, standardowe stacje robocze z Windows 10/11 i podstawowy serwer plików do przechowywania repozytorium PDF/A. Większe jednostki (powiat, województwo) mogą rozważyć dedykowany serwer EZD RP z bazą danych PostgreSQL, ale to inwestycja opcjonalna.',
    },
  ],

  relatedLinks: [
    { title: 'Drukarki etykiet Zebra', href: '/drukarki-etykiet-zebra' },
    { title: 'Skanery kodów kreskowych Zebra', href: '/skanery-kodow-kreskowych-zebra' },
    { title: 'Zebra ZD230t', href: '/produkt/zebra-zd230t' },
    { title: 'Zebra ZD421t', href: '/produkt/zebra-zd421t' },
    { title: 'Zebra DS2208', href: '/produkt/zebra-ds2208' },
    { title: 'Zebra DS2278', href: '/produkt/zebra-ds2278' },
    { title: 'Jak wybrać drukarkę etykiet', href: '/poradnik/jak-wybrac-drukarke-etykiet' },
    { title: 'Drukarka termiczna vs termotransferowa', href: '/poradnik/drukarka-termiczna-vs-termotransferowa' },
    { title: 'Kontakt', href: '/kontakt' },
  ],
},
```

INSTRUKCJE:
1. Otwórz `src/data/guides.ts`
2. Znajdź ostatni guide w array (M3 Speed Care, kończy się na linii ~12306 `},`)
3. Po tym `},` ale PRZED zamykającą `]` (linia ~12307) dodaj powyższy obiekt
4. Pamiętaj o przecinku po poprzednim guide (sprawdź czy jest)
5. Po zmianie:
   - `npm run lint` żeby sprawdzić błędy TypeScript/ESLint
   - `git diff` żeby pokazać zmiany
   - Pokaż git status — powinien tylko `src/data/guides.ts` być modified

NIE COMMITUJ — to zrobi user manualnie po review.

Dodatkowe pliki które MOŻE trzeba utworzyć:
- `/public/images/guides/hero_ezd_rp.webp` — hero image dla guide (1200×675, dowolny stock photo z EZD RP / urzędem / sprzętem). User może podstawić placeholder lub dostarczyć później.
````

---

## Po wdrożeniu Claude Code

1. `git diff src/data/guides.ts` — sprawdź czy dodał poprawnie
2. Lokalne uruchomienie: `npm run dev` → otwórz http://localhost:3000/poradnik/sprzet-do-ezd-rp-wymagania-i-wdrozenie
3. Sprawdź czy renderuje się, linki działają, hero image (lub placeholder)
4. Jeśli OK:
```bash
git add src/data/guides.ts
git commit -m "feat(blog): add EZD RP equipment guide with sector public targeting"
git push
```
5. Vercel deploy automatyczny

---

## Linki które dodajemy (strategia SEO)

| # | Cel | Anchor | URL docelowy | Sekcja |
|---|---|---|---|---|
| 1 | **ezdrp24.com.pl** | `kompletne zestawy sprzętowe EZD RP` (partial keyword) | `https://ezdrp24.com.pl` | drukarki |
| 2 | **ezdrp24.com.pl** | `dedykowany sklep dla urzędów` (descriptive) | `https://ezdrp24.com.pl/ezd-rp/skanery` (deep) | czytniki |
| 3 | **ezdrp24.com.pl** | `ezdrp24.com.pl` (naked URL anchor) | `https://ezdrp24.com.pl` | zestawy |
| 4 | **ezdrp24.com.pl** (FAQ) | `ezdrp24.com.pl` (URL) | URL | FAQ |
| 5 | **serwis-zebry.pl** | `autoryzowany serwis Zebra` | `serwis-zebry.pl/serwis-drukarek-zebra` | wdrozenie |

**Plus 7 wewnętrznych linków TAKMA** do produktów (ZD230t, ZD421t, DS2208, DS2278) i kategorii.

---

## Po publikacji — co zyskujesz

**SEO TAKMA**:
- Nowy ranking na keywordy: "sprzęt EZD RP", "drukarka etykiet EZD", "skaner EZD RP", "wdrożenie EZD"
- Brak konkurencji w polskim contenttcie na te keywordy = łatwy TOP 3 w 2-3 miesiące
- Przekierowanie ruchu B2G (Business-to-Government) który dziś TAKMA nie obsługuje

**SEO ezdrp24.com.pl (główny cel)**:
- 3 dofollow links z DR 27 TAKMA → first quality external linki
- Mix anchorów (partial keyword + URL + descriptive) → natural pattern
- Topical relevance: idealna (TAKMA o sprzęcie AutoID → ezdrp24 o sprzęcie EZD)
- Prognoza DR ezdrp24: **0 → 8-15 w 4-6 tygodni** (po pełnej indeksacji)

**SEO serwis-zebry.pl** (bonus):
- 1 dodatkowy link z TAKMA blog → wzmacnia hub `/serwis-drukarek-zebra`

---

## Estymowany czas pracy

| Etap | Czas |
|---|---|
| Claude Code dodaje guide | ~3 min |
| Git diff + push | ~2 min |
| Vercel deploy | ~3 min |
| **TOTAL** | **~10 minut Twojej pracy** |

Plus opcjonalnie później: hero image jeśli nie chcesz placeholder.
