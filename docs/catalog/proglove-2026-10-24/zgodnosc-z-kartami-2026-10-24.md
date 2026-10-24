# ProGlove — zgodność opisów z kartami producenta (24.10.2026)

Dokument roboczy, nie jest treścią dla klientów. Poprawki według dwóch audytów tylko do odczytu: PS (6 skanerów, strona `/skanery-proglove`, podkategoria, `llms.txt`) i PA (29 akcesoriów). Stan wyjściowy: commit 6daa476c. Źródła i numery wierszy są w raportach audytów (`raport-PS-proglove-skanery.md`, `raport-PA-proglove-akcesoria.md` w scratchpadzie sesji).

Zmienione pliki: `src/data/proglove-products.ts`, `src/data/proglove-category.ts`. Podkategoria `skanery-pierscieniowe` w `products.ts`, linie ProGlove w `public/llms.txt` i wpis `proglove` w `manufacturers.ts` audyt uznał za zgodne, więc zostały bez zmian.

## 1. Wprowadzone poprawki

### Skanery i strona marki (PS)

| ID | Karta / miejsce | Zmiana |
|---|---|---|
| PS-01 | MAI: opis, specyfikacja „Bateria” | 1–2 zmiany przy połączeniu Bluetooth i pracy z ekranem, dotykiem i przyciskami |
| PS-02 | MARK Basic: `shortDescription`, specyfikacja „Zasięg odczytu”; FAQ LEO, MARK 3; także FAQ MARK 2 i MARK Basic, `useCases` i FAQ strony marki | 10–250 cm opisane jako zakres roboczy; w specyfikacji dodany odczyt Code 39 100 mil do ok. 5,8 m |
| PS-03 | Strona marki, FAQ o zasięgach | Standard Range: MARK Basic, MARK 2, MARK Display do ok. 90 cm, LEO do ok. 66 cm |
| PS-04 | Strona marki, `buyingGuide` | Mid Range z optymalnym zakresem ok. 30–150 cm |
| PS-05 | Strona marki, `uniqueInsights`; pośrednio `definition` | Brak własnego spustu dotyczy LEO i MARK; MAI: Hand Strap Gen 2, stacja Gen 2, skanowanie także przyciskiem lub ekranem |
| PS-06 | LEO i MARK Basic: opis; MARK 3: FAQ; specyfikacja „Połączenie z systemem” w LEO, MARK Basic, MARK 2, MARK 3 | INSIGHT Mobile tylko na Androidzie, na iOS ProGlove SDK |
| PS-07 | MARK 2: opis | „dwie cechy” zamienione na „przede wszystkim” |
| PS-08 | MARK 2: opis; strona marki, tabela modeli (`role`) | „klasyczny model serii MARK” zamiast „pierwotny model” (decyzja głównej sesji) |
| PS-09 | MARK Basic: `seoDescription` | 39–40 g |
| PS-10 | MAI: specyfikacja „Zasięg radiowy” | Zastrzeżenie o środowisku przemysłowym |
| PS-11 | Strona marki, `buyingGuide` | Chłodnia: MARK 2 lub MARK 3; na zewnątrz: MARK 3 z IP65; MAI IP65 od −10°C |
| PS-12 | Strona marki, FAQ o Gateway | INSIGHT Mobile (Android) lub SDK (iOS); MAI samodzielnie przez Wi-Fi, bez terminala |
| PS-13 | MARK 2: `applications` | „Kompletacja i paletyzacja” zamiast „sortowanie” |
| PS-14 | MARK 3: opis | „obsługuje wiele zastosowań” zamiast „zastępuje kilka różnych czytników” |
| PS-15 | MAI: specyfikacja „Połączenie z systemem” | Gateway i Gateway Plus z oprogramowaniem bramki 2.16.1 lub nowszym |
| PS-16 | MARK Display: FAQ o chłodni | Dopisany MAI: ekran i praca od −10°C |
| PS-S1 | MARK 3: FAQ o zasięgu | Bez „Producent podaje” |
| PS-S2 | MAI: FAQ o baterii | Bez „Producent podaje” |
| PS-S3 | MARK 2 (3 odpowiedzi FAQ), MARK Basic (FAQ), MARK 3 (opis, FAQ), MARK Display (FAQ), MAI (FAQ), strona marki (FAQ o gwarancji) | Przypisania „producent …” zamienione na fakty w formie bezosobowej |
| PS-S4 | MARK 3: FAQ o połączeniu | Nowe sformułowanie o Gateway, inne niż w opisie MARK Basic i LEO |

### Akcesoria (PA)

| ID | Karta | Zmiana |
|---|---|---|
| PA-01 | X001-A007 Gateway: specyfikacja „Kompatybilność”, opis | MARK Display przez Streams API; MAI z oprogramowaniem Gateway 2.16.1 lub nowszym |
| PA-02 | A009-EU Gateway Plus: specyfikacja „Kompatybilność”, opis | Jak PA-01, innym zdaniem (bez wspólnych fraz z kartą Gateway) |
| PA-03 | X001-A007: specyfikacja „Liczba skanerów”, opis | Do 5 skanerów jednocześnie |
| PA-04 | X001-A007: opis, specyfikacja „Zasięg radiowy” | Zasięg 70 m / 30–40 m dotyczy LEO, MARK Basic, MARK 2 i MARK 3; może być mniejszy przy ścianach, regałach, maszynach |
| PA-05 | A009-EU: opis, specyfikacja „Liczba skanerów” i „Zasięg radiowy” | Liczba skanerów zależy od warunków otoczenia; zastrzeżenie o zasięgu |
| PA-06 | C007-INT: opis, nowy wiersz specyfikacji „Temperatura ładowania” | Ładowanie skanerów od +5 do +40°C |
| PA-07 | C021-INT: opis | Bez Australii jako miejsca użycia; zestaw z wtykami międzynarodowymi; dopuszczenia radiowe MAI: EOG, Wielka Brytania, USA, Kanada (decyzja głównej sesji) |
| PA-08, PA-09 | G011-MIX-3, G011-R-10: specyfikacja „Pranie” | Dopisek „Hand Strap 1.4 i nowsze” (spójnie z opisem G011-R-10) |
| PA-10 | G006-LL-3: opis | „Za duże mocowanie szybciej się przeciera” |
| PA-11 | G006-ML-3: `seoDescription` | Spust z boku palca wskazującego |
| PA-12 | G006-MR-3: opis | Środek bezpieczny dla tkanin |
| PA-13 | C007-INT: `imageDescriptions` | Aluminiowa płyta montażowa zamiast szyny |
| PA-14 | C021-EU: specyfikacja „Zawartość zestawu”, opis | Przewód USB w zestawie |
| PA-15 | C021-INT: specyfikacja „Zawartość zestawu” | Przewód USB w zestawie |
| PA-16 | C006-INT: specyfikacja „Zawartość zestawu”, opis | Przewód USB w zestawie |
| PA-17 | G006-SL-3: opis | Zdanie o próbnym opakowaniu zastąpione zaleceniem przymierzenia |
| PA-18 | G006-ML-3: opis | Usunięte zdanie bez źródła („wystarczają na jedno stanowisko”) |
| PA-19 | G006-MR-3: `seoDescription` | Bez „najprostszy start” |
| PA-20 | G006-LL-10: opis | Zapas na wymianę zamiast „bez przestojów” |
| PA-21 | G008-LY-2: `applications` | „Okazjonalne skanowanie w sklepie”, bez kasy |
| PA-22 | G006-SL-10: opis | Bez „według producenta” |
| PA-23 | C007-INT: opis | Sposób montażu podany wprost: ściana (135 mm), szyna DIN, ramię monitora (75 mm), nie wyżej niż 2 m |

Razem: 20 ustaleń PS (16 merytorycznych i 4 STYL) oraz 23 ustalenia PA.

## 2. Zmiany poza wprost wskazanymi polami

- PS-02: ten sam skrót „do 250 cm” był w FAQ MARK 2 („Jakie są alternatywy”), FAQ MARK Basic („Którą wersję wybrać”), FAQ strony marki o zasięgach i `useCases` strony marki. Wszędzie jest teraz „zakres roboczy”.
- PS-06: błąd „Android i iOS: … INSIGHT Mobile” był też w specyfikacji „Połączenie z systemem” czterech skanerów (LEO, MARK Basic, MARK 2, MARK 3). Poprawione we wszystkich czterech.
- PS-05: `definition.content` strony marki dostało dopisek „(w MAI także przycisk lub ekran)”.
- Po poprawkach skrypt unikalności wykrył dwie nowe wspólne frazy w FAQ (LEO/MARK 2 i MARK 3/MARK Basic) oraz jedną w opisach stacji (C007-INT/C006-EU). Zdania napisano inaczej, sens bez zmian.

## 3. Ustalenia celowo pominięte lub zmienione względem raportu

- PA-07: raport proponował zostawić „wtykami UK, US i AU”. Zgodnie z decyzją głównej sesji opis mówi o wtykach międzynarodowych. Lista wtyków UK, US i AU zostaje w specyfikacji „Zawartość zestawu”, `shortDescription` i `seoDescription`, bo to zawartość zestawu (Levata), a nie obszar dopuszczeń. Do decyzji właściciela: czy usunąć „AU” także tam.
- PA-01: `seoDescription` Gateway („skanerów MARK, LEO i MAI”) bez zmian. MAI działa z Gateway po aktualizacji oprogramowania, a warunek jest w opisie i specyfikacji.
- PS-08: zamiast poprawki z raportu („najczęściej używany” jako `role`) jest „Klasyczny model serii MARK”, zgodnie z decyzją głównej sesji.
- Przypisania „producent …” w opisach akcesoriów (np. „Producent poleca Hand Strap…”, „Producent zabrania stosowania innych zasilaczy”, „Producent dopuszcza wyłącznie dołączony zasilacz”), ok. 16 zdań: raport PA nie zgłosił ich w sekcji STYL (zgłosił tylko „według producenta” w G006-SL-10), więc zostały. Do osobnej decyzji.
- Wspólne frazy między polami (np. opis jednej karty a FAQ innej) poza PS-S4: test unikalności porównuje pola osobno; zostały bez zmian.

## 4. Sprzeczności źródeł (bez zmian w treści)

1. **Reel w grupie „Mocowanie (jedno z)”:** nowa strona mocowań proglove.com (2026) pisze, że Reel łączy się z mocowaniem, a nie je zastępuje. Karty techniczne, instrukcja MARK i docs.proglove.com opisują Reel jako akcesorium z własnym przyciskiem spustu. Zgodnie z decyzją głównej sesji Reel zostaje w grupie „jedno z”.
2. **MARK Display i Gateway:** karta techniczna MARK Display i macierz w instrukcji MARK podają zgodność z Gateway. Wymagania systemowe Gateway i Gateway Plus w docs nie wymieniają MARK Display, a FAQ docs mówi o integracji przez Streams API. Karty TAKMA podają teraz „przez Streams API”. Przed obietnicą połączenia MARK Display z komputerem przez Gateway warto potwierdzić to u ProGlove lub BlueStar.
3. **MAI, zakres odczytu:** karta techniczna 5 cm–6 m, Quickstart 10–600 cm. Karta TAKMA: 5 cm (karta techniczna).
4. **MARK 3, masa:** karta techniczna i strona 39 g, docs 40 g. Karta TAKMA: 39 g.
5. **MARK 2 Standard Range:** stara ulotka 10–80 cm i 10 000 skanów; karta techniczna i strona ok. 90 cm i 12 000. Karta TAKMA: karta techniczna.
6. **Gateway Plus, prąd portu USB:** karta techniczna min. 500 mA przy 5 V, instrukcja MARK 5 V / min. 1 A. Karta Z001-001 podaje wartość z karty technicznej.

## 5. Kontrola

- `porownaj-opisy.py` (`--prefiks=proglove-`), pola `description`, `shortDescription`, `seoDescription`, `faq`: urządzenia 0 par; akcesoria 0 par w `shortDescription`, `seoDescription`, `faq`, a w `description` tylko listy modeli i nazwy (te same 210 par co przed zmianami, bez nowych fraz).
- Pełny tekst urządzeń (kopia skryptu bez ucinania przed „## Co jest potrzebne”) z opcją `--widoczny`: 0 par. Bez tej opcji 15 par, tylko listy „Wymagane”, tyle samo co przed zmianami.
- `npm run build` bez nowych błędów, `npx tsc --noEmit` bez błędów.
- `next start -p 3163`: 21 zmienionych kart, `/skanery-proglove` i `/skanery-kodow-kreskowych/pierscieniowe` zwracają 200. Nowe sformułowania są w HTML, a stare błędne już nie.
- Blok „Wymagane” porównany z produkcją sprzed zmiany: MARK 2, MAI, LEO (grupy „Mocowanie (jedno z)” i „Stacja ładująca (jedna z)” z tymi samymi PN), Gateway Plus A009-EU (grupa przewodów) oraz Bluebird S20 jako karta innej marki. Wszystkie identyczne.
- `role` w tabeli modeli strony marki nie jest wyświetlany w układzie `tabela` (tak samo na produkcji), więc zmiana PS-08 w tabeli jest widoczna tylko w danych.
