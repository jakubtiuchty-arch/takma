# Newland MT95 Kambur Pro III — przegląd języka, SEO, AEO i GEO

Data: 4 października 2026 r. Zakres: karta `/produkt/newland-mt95-kambur-pro-iii`, PN `NLS-MT9557-W5`.

## Wynik i wykonane zmiany

Opis odpowiada polskiej adaptacji zasad ASD-STE100 zapisanej w `docs/standard-jezyka.md`. Nie jest to deklaracja formalnej zgodności z ASD-STE100: standard określa kontrolowany język angielski. Pierwsze zdanie identyfikuje produkt i jego zastosowanie. Opis zawiera krótkie zdania, konkretne parametry i spójne nazwy elementów. Warunki użycia sieci komórkowej oraz zawartość zestawu są podane wprost. Instrukcje są oddzielone od informacji o opcjonalnych akcesoriach.

Zmiany:

1. Krótki opis i metadane mają pełne zdania. Rozdzielono akapity o pamięci, łączności, ekranie i odporności.
2. Usunięto porównania z TC22 i TC501 z opisu i FAQ. Porównanie parametrów pozostaje w tabeli. Karty podobnych terminali nadal stanowią zwykłe linki do produktów.
3. FAQ otrzymało bezpośrednie odpowiedzi o zastosowaniu terminala i odczytywanych kodach.
4. Usunięto podwójną kropkę z opisu wariantu w JSON-LD. Funkcja wspólna dla produktów zachowuje pojedyncze znaki kończące zdania.
5. Istniejący `llms.txt` uzupełniono o fakty i adres Pro III. Nie zmieniono polityki dostępu robotów.

Parametry i zawartość zestawu sprawdzono w dokumentacji producenta. Zachowano baterię 5100 mAh, moc ładowania do 18 W oraz plan aktualizacji bezpieczeństwa do IV kwartału 2029 r. Nie dodano obietnicy aktualizacji do kolejnej wersji Androida.

## Warunki publikacji

Wynik: 12/12 sprawdzonych warunków spełnionych. Jest to lista kontrolna wdrożenia, nie ocena pozycji w Google ani prawdopodobieństwa cytowania przez AI.

| Warunek | Wynik | Dowód |
|---|---|---|
| Dostępność karty | Spełniony | Produkcyjny HTTP 200 przed zmianą; ponowna kontrola po wdrożeniu |
| Samodzielny canonical | Spełniony | `https://www.takma.com.pl/produkt/newland-mt95-kambur-pro-iii` |
| Indeksowalność techniczna | Spełniony | `index, follow`; brak blokady ścieżki produktu w robots.txt |
| Sitemap | Spełniony | Adres obecny w `/sitemap.xml`; data aktualizacji 2026-10-04 |
| Tytuł i opis meta | Spełniony | Tytuł 53 znaki; opis 141 znaków; bez porównań z Zebrą |
| Nagłówki | Spełniony | Jeden H1 z nazwą produktu; opis podzielony na tematyczne nagłówki |
| Treść dostępna w HTML | Spełniony | Opis, tabela porównania, FAQ i JSON-LD są renderowane na serwerze |
| Język | Spełniony | Zdania opisu, krótkiego opisu i odpowiedzi FAQ mieszczą się w celu 25 słów; polskie znaki i NFC sprawdzone |
| Rzetelność danych | Spełniony | PN, bateria, system, skaner, łączność, odporność i zestaw zgodne ze źródłami Newland |
| Dane strukturalne | Spełniony | ProductGroup z jednym wariantem; marka Newland, MPN, PLN, cena brutto i data końca promocji |
| Bezpośrednie odpowiedzi | Spełniony | Sześć pytań: sieć, zestaw, bateria, zastosowanie, kody, dobór akcesoriów |
| Linki i materiały | Spełniony | Kategorie, producent, porównanie, akcesoria, PDF i instrukcja; brak nowych przypadkowych linków |

Tytuł: `Newland MT95 Kambur Pro III — terminal 5G, 2D | TAKMA`.

Opis meta: `Newland MT95 Kambur Pro III to terminal 5G ze skanerem 2D i Androidem 15. Zestaw zawiera zasilacz i przewód USB-C. Sprawdź cenę i dostępność.`

Przy sprawdzeniu oferta zawierała cenę 2814,99 zł netto / 3462,44 zł brutto, PLN, InStock i `priceValidUntil: 2027-03-31`. Cena i stan pochodzą z mechanizmu danych sklepu; nie zapisano ich w opisach jako stałych obietnic. Schematy obejmują Organization, WebSite, ProductGroup, BreadcrumbList, WebPage i FAQPage. Pytania i odpowiedzi odpowiadają treści karty.

Zdjęcia mają opisowe teksty alternatywne i zapisane wymiary. Galeria korzysta z optymalizacji Next Image i wskazania priorytetu dla głównego zdjęcia. Zachowano rozmiar i kadrowanie po wcześniejszych zmianach. To nie jest pomiar Core Web Vitals.

## AEO i GEO

Fragment otwierający opis daje samodzielną odpowiedź: czym jest terminal, gdzie jest używany, jakie kody odczytuje i po co ma 5G. FAQ odpowiada na konkretne pytania bez odsyłania klienta do długiej instrukcji. Nazwy modeli i PN pozwalają odróżnić Pro III od Pro II. Tabela przechowuje porównanie z alternatywnymi urządzeniami bez powtarzania go w opisach.

| Powierzchnia | Dostęp techniczny | Co pozostaje niezmierzone |
|---|---|---|
| Google Search / AI Overviews / AI Mode | Treść w HTML, indeksowalna ścieżka, canonical, sitemap i dane produktu | Faktyczne indeksowanie, pozycje i wykorzystanie w odpowiedziach AI |
| ChatGPT Search | Robots.txt dopuszcza OAI-SearchBot i ChatGPT-User; treść w HTML | Faktyczne pobranie i cytowanie |
| Perplexity | Robots.txt dopuszcza PerplexityBot; treść w HTML | Faktyczne pobranie i cytowanie |
| Pozostałe systemy | Treść nie wymaga wykonania JavaScript do odczytu podstawowych danych | Indywidualne zasady indeksów i obecność w odpowiedziach |

Nie zmieniano zgód dla robotów treningowych. Sam dostęp robota nie dowodzi obecności produktu w jego indeksie.

Google nie wymaga osobnej „optymalizacji GEO”, specjalnych schematów ani plików dla AI. Aktualizacja `llms.txt` służy spójności istniejącego katalogu informacji. Google informuje, że obecność tego pliku nie poprawia ani nie obniża widoczności w Search i funkcjach AI.

FAQ pomaga klientom i zapewnia bezpośrednie odpowiedzi. Nie obiecuje rozszerzonego wyniku FAQ w Google: według aktualnej dokumentacji taki wynik nie pojawia się od 7 maja 2026 r. Istniejące FAQPage pozostawiono zgodne z widoczną treścią.

Nie wykonano pomiarów z GSC, CrUX, konkurencyjnych pozycji, zewnętrznych wzmianek ani cytowań AI. Nie zgłoszono prośby o indeksowanie w GSC. Wynik przeglądu oznacza poprawne przygotowanie treści i warunków technicznych.

## Walidacja

- `node scripts/test-newland-accessories.cjs`: poprawność produktu, PN, powiązań, zestawu, grafiki, promocji, danych oferty i nowych warunków językowych.
- `npx tsc --noEmit --incremental false`: kontrola typów.
- `git diff --check`: kontrola białych znaków zmian.
- Kontrola HTML: canonical, H1, title/meta, SSR, brak porównań w opisie i FAQ, zachowana tabela oraz spójne schematy.
- Przegląd w przeglądarce: opis i rozwinięta odpowiedź o odczytywanych kodach.
- Po wdrożeniu: powtórna kontrola produkcyjnego HTML, `llms.txt` i zrzut widocznej karty.

Pliki dowodowe przed/po, logi testów, manifest wdrożenia i zrzut strony są przechowywane w ignorowanym katalogu `work/mt95-kambur-pro-iii/newland-content-review` głównego repozytorium.

## Źródła

- [Newland — MT95 Kambur Pro III](https://www.newland-id.com/en/products/mobile-computers/mt95-kambur-pro-iii): parametry i wariant zestawu.
- [Newland — Android roadmap](https://www.newland-id.com/en/support/android-roadmap-for-newland-devices/): Android 15, GMS, AER i Q4 2029 dla poprawek bezpieczeństwa.
- [ASD — About STE](https://www.asd-ste100.org/about_STE.html): zakres językowy standardu.
- [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): wymagania dla Search i funkcji AI.
- [Google — Search documentation updates](https://developers.google.com/search/updates): zmiany FAQ z maja/czerwca 2026 r. oraz informacja o llms.txt z czerwca 2026 r.
- [Google — Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product-snippet): dane produktu i oferty.
