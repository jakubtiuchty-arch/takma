# SEO, AEO i GEO — CipherLab, Epson, BIXOLON

Data: 21.10.2026. Zakres: 183 karty produktów i 8 stron kategorii lub producenta. Zmiany treści lub metadanych: 116 kart. Strony kategorii sprawdzone: /epson, /terminale-cipherlab, /drukarki-etykiet-bixolon, /drukarki-pos, /mobilne-drukarki-paragonow, /kolorowe-drukarki-etykiet, /tusze-do-kolorowych-drukarek, /etykiety-do-kolorowych-drukarek.

## Ustalenia

Crawl przed zmianą: wszystkie 191 adresów odpowiadały 200, miały jeden H1, metadane i canonical. Nie było identycznych tytułów ani metaopisów. To nie wyklucza nakładania się intencji wyszukiwania. Nie korzystano z danych zapytań i wyświetleń Google Search Console, więc nie potwierdzamy utraty pozycji wskutek kanibalizacji.

Największe problemy treściowe:

- /epson powielał temat kategorii ColorWorks, mimo rozszerzonej oferty POS i urządzeń mobilnych.
- Opisy niektórych bliskich rodzin różniły się głównie nazwą; powtarzały ogólne sekcje o wyposażeniu zamiast objaśniać wybór modelu.
- 33 metaopisy tuszów i materiałów urywały się w połowie słowa lub oznaczenia drukarki.
- Starsze treści ColorWorks zawierały nieograniczone obietnice odporności, zgodności ZPL, zastosowań żywnościowych i kosztów. Pojawiały się też nieaktualizowane ceny w tekstach.
- CollectionPage strony producenta miało liczbę produktów i markę przypisane do niewłaściwego poziomu grafu oraz datę modyfikacji wyliczaną przy każdym odczycie.

## Rozdzielenie intencji

| Strona lub rodzina | Główny zakres |
| --- | --- |
| /epson | Przegląd oferty marki: ColorWorks, POS, modele mobilne, materiały |
| /kolorowe-drukarki-etykiet | Wybór i porównanie drukarek do kolorowych etykiet |
| /tusze-do-kolorowych-drukarek | Dobór rodziny SJIC, koloru, bk/mk i pojemnika |
| /etykiety-do-kolorowych-drukarek | Dobór materiału, wymiarów i parametrów rolki |
| /drukarki-pos | Porównanie technologii i urządzeń do stałego stanowiska |
| /mobilne-drukarki-paragonow | Potwierdzenia z urządzenia zasilanego baterią |
| /terminale-cipherlab | Porównanie dotykowych RS i klawiaturowych RK |
| /drukarki-etykiet-bixolon | Porównanie drukarek etykiet, technologii i formy pracy |
| RS38 / RS38H | Standardowa konfiguracja / wykonanie do ochrony zdrowia |
| RK96 / Cold Storage | Standardowy terminal / podgrzewanie i bateria do mroźni |
| XD5 / XD5 II | Osobne generacje i osobne PN |
| XD5-40t / XD5-40tR; XT5 / XT5 RFID | Druk bez kodera / kodowanie UHF |
| TM-U220IIB / IID | Gilotyna / brak automatycznej gilotyny |
| TM-L90 / LF | Standardowy materiał / zgodny materiał bez podkładu |
| ColorWorks C3500 / D3800e / C4000e | 720 × 360 dpi / tusz barwnikowy / pigment i 1200 × 1200 dpi |
| ColorWorks C6000 / C6500 / C8000e | 108 mm Ae/Pe / 212 mm / 108 mm do 300 mm/s |
| Tusze i materiały — karty PN | Konkretny kolor, rozmiar, nawój lub pojemność; nie ogólna intencja kategorii |

Nie scalano odrębnych modeli ani PN. Nie zmieniano adresów i przekierowań. Parametry ?pn zachowują canonical strony rodziny.

## Wprowadzone poprawki

- Konkretne metaopisy z cechą modelu, bez obietnic stałej ceny lub stanu. Pełne zdania w materiałach i tuszach, z PN zamiast uciętych nazw.
- Unikalne opisy sześciu ColorWorks, śródtytuły i odpowiedzi na pytania o wybór. Oddzielono maksymalną jakość od trybu maksymalnej prędkości.
- Porównania bliskich rodzin i linki opisujące rzeczywistą różnicę. Zredukowano powtarzalne sekcje szablonowe.
- Strona Epson pełni rolę przeglądu marki. Kategorie materiałowe opisują dobór materiałów; porównanie urządzeń pozostaje w kategorii drukarek.
- Usunięto niepotwierdzoną uniwersalną obsługę ZPL w C3500 i zapewnienia, że każdy szablon działa bez zmian. Usunięto nieograniczone zapewnienia wodoodporności i trwałości z materiałów oraz tuszów.
- Nie dopisywano nowej zgodności materiałów i akcesoriów. Zmieniono tylko nadmiernie ogólne zapewnienia.
- Product/ProductGroup ColorWorks i BIXOLON RFID otrzymują model, kategorię i właściwości techniczne. Jedna konfiguracja jest Product z PN; kilka pozostaje grupą. Brak ceny w danych źródłowych nie tworzy sztucznej oferty.
- Liczba pozycji należy do ItemList, a marka strony producenta do about. Data modyfikacji Epson pochodzi z daty redakcji treści.
- Na zmienianych stronach Epson usunięto dodatkowe Speakable, HowTo i FAQPage. Pytania oraz instrukcje dla klienta pozostały widoczne. Nie deklarujemy kwalifikacji sklepu do wyników rozszerzonych FAQ lub HowTo.
- Daty updatedAt zmienionych kart i data strony Epson w sitemapie odpowiadają redakcji treści.
- Opisy aktualizacji kategorii CipherLab/BIXOLON nie sugerują, że data redakcji jest datą sprawdzenia cen.

## Źródła robocze

Parametry istniejących konfiguracji i pobrane instrukcje producentów w repozytorium. W szczególności:

- https://www.cipherlab.com/en/product-c56007/Android.html
- https://www.cipherlab.com/files/CipherLab_Full-Line_Product_Brochure-EN.pdf
- https://www.epson.eu/en_EU/products/printers/colour-label-printer/colorworks-cw-c8000e-%28bk%29/p/46713
- https://www.epson.pl/pl_PL/produkty/drukarki/kolorowa-drukarka-etykiet/colorworks-c3500-%28incl-nicelabel-download%29/p/13675
- public/downloads/epson-colorworks-c6000-karta-katalogowa-pl.pdf — obejmuje rolki 4, 6 i 8 cali; nie usunięto tej informacji.
- public/instrukcje/epson-colorworks-c3500-trg-en.pdf
- public/instrukcje/epson-colorworks-c6000-c6500-trg-en.pdf
- Wcześniejsze audyty katalogu BIXOLON, Epson POS i CipherLab w docs/catalog.

## Walidacja

- TypeScript i sprawdzenie różnic bez błędów.
- Kontrola 183 rekordów: linki produktowe prowadzą do istniejących modeli; zdjęcia, opisy zdjęć, warianty PN, akcesoria i dokumenty niezmienione.
- Próby schematu Product/ProductGroup dla ColorWorks, RFID BIXOLON i CipherLab; bez wymyślonych cen przy pustych stanach źródłowych.
- Lokalny crawl 15 reprezentatywnych stron: 200, pojedynczy H1, canonical i unikalne metadane.
- Porównanie układu przed publikacją: zachowane komponenty, pola zdjęć i style. W kategorii ColorWorks trzy pola zdjęć mają 293,66 × 220,24 px (4:3); źródłowy obiekt zajmuje ok. 69–71% wysokości obrazu. Pliki zdjęć pozostają niezmienione.
- Publikacja wyłącznie z Gita na claude/takma-frontend-build-RrM9E. Po publikacji ponowny crawl 191 adresów, kontrola wyglądu i panelu /admin/etykiety-na-magazynie.

## Dalsza obserwacja

Po ponownym indeksowaniu porównać w Search Console zapytania i strony dla wyżej wymienionych par. Zmiana wyświetlanych adresów lub podział kliknięć przy tym samym zapytaniu pozwoli ocenić faktyczną kanibalizację. Nie ma podstaw do obietnicy określonej pozycji ani cytowania przez systemy AI.
