# TSL 3138 — weryfikacja 20.10.2026

## Zakres

Dodano wyłącznie rekomendowany dostępny PN 3138-ES1-EU: ETSI Lower Band 865–868 MHz, skaner 1D/2D i Power Handle USB-C. Nie dodano trzech niedostępnych konfiguracji ani modelu 3128. Jeden PN nie potrzebuje tabeli porównania wariantów. Nowy model w kategorii Uchwyty RFID, wszystkie pięć modeli Zebra pozostają na początku.

## Źródła parametrów

- https://www.tsl.com/products/3138/
- Aktualna karta katalogowa pobrana w przeglądarce z https://www.tsl.com/download-manager/3138-datasheet/?wpdmdl=54232 : v1.22, 16.10.2026, 7 stron. Zapisana bez zmian jako /datasheets/tsl-3138-en.pdf.
- Uwaga robocza: statyczny https://www.tsl.com/wp-content/uploads/3138-UHF-RFID-Reader-Datasheet.pdf zwraca starszą v1.12. Nie użyto jej jako publikowanego PDF. Ilustracje akcesoriów tej samej konstrukcji posłużyły jako referencje zdjęć.
- https://www.tsl.com/wp-content/uploads/3138-Ordering-Information.pdf : v1.01, 20.06.2025, 3 strony. Zapisana bez zmian jako /instrukcje/tsl-3138-wyposazenie-en.pdf.
- Ochrona IP54, upadki 1,2 m w temperaturze pokojowej; nie przenosimy IP67 i 1,8 m z 3166.
- Impinj E710, do 1200 znaczników/s, nominalny zasięg odczytu 9 m / zapisu 4 m zależny od znacznika i warunków, 32 GB pamięci, Bluetooth 4.2, waga 550 g, wymiary 158 × 98 × 170 mm, Power Handle 7,3 V / 25,4 Wh.
- Gwarancja: 12 miesięcy przy prawidłowym użytkowaniu i bez modyfikacji. Najnowsza karta nie wskazuje początku okresu w tym zdaniu, więc nie dopisujemy daty wysyłki do treści.

## Zgodność i zawartość

- PN USB-C zawiera czytnik, Power Handle i przewód USB-C. Zasilacz osobno.
- USBC-PSU-KIT45: zasilacz 45 W USB-C PD, wtyki EU/UK/US/AU. Ładowanie wymaga min. 30 W PD.
- 31PH-01: zapasowy Power Handle USB-C z przewodem USB-C.
- 31-HS-01: opcjonalny moduł podtrzymania zasilania podczas zmiany Power Handle. Nie jest główną baterią ani ładowarką.
- Nie podpięto 3138-CRD-01-KIT: ten zestaw służy do Power Handle ze stykami 8-Way Power Pins, a nie do oferowanego uchwytu USB-C.
- Nie podpinamy adapterów terminali bez potwierdzonego konkretnego PN i modelu. Zgodności Datalogic/Zebra nie przenosimy automatycznie na TSL.
- Potwierdzenie akcesoriów: aktualna karta, strona 5; https://www.tsl.com/products/31x8-power-handle/ , https://www.tsl.com/products/hot-swap/ , https://www.tsl.com/products/45w-psu/ .

## Dystrybucja

Odpytano BlueStar, Ingram i Jarltech. Wszystkie cztery PN mają ceny w BlueStar; brak ofert w pozostałych źródłach. Ceny sprzedaży PLN i stany w stock-check-2026-10-20.json. 5 sztuk czytnika fizycznie, zapasowy Power Handle i Hot Swap po 0, zasilacz 0 fizycznie + 5 w dostawie. Nie prezentujemy dostaw jako fizycznej dostępności. Wspólne API stock aktualizuje karty, metadane i dane strukturalne.

## Zdjęcia

Źródła głównego i frontowego zdjęcia:
- https://www.tsl.com/wp-content/uploads/3138-UHF-RFID-Reader-Main-Image.jpg
- https://www.tsl.com/wp-content/uploads/3138-UHF-RFID-Reader-Front-View-2D-imager.jpg

Referencje akcesoriów: fotografie Power Handle i Hot Swap z karty katalogowej (strona akcesoriów) oraz fotografia zestawu zasilacza z Ordering Information (strona 2). Imagen poprawił ostrość i marginesy, zachowując konstrukcję, porty, styki oraz kolory. Sprawdzono cztery wymienne wtyki zasilacza. Główne zdjęcie nie zawiera telefonu, adaptera ani stacji.

Przy oknie 1280 px pole główne ma 584 × 584 px, tak samo jak TSL 3166 i Datalogic 3138. TSL 3138 zajmuje 65,9% wysokości i 63,6% szerokości (TSL 3166: 59,5% / 60%; Datalogic: 77,2% / 79,3%). To celowo skromniejsza skala niż duża karta Datalogic. Pomiar ciemnych pikseli bez białych marginesów w image-measurements.json.

Akcesoria zachowują wspólny format 4:3 i normalizację obiektu do 66% pola. Trzy produkty w jednym wspólnym dziale. Linki tekstowe: niebieskie, font-weight 600, bez podkreślenia. Bez nowych komponentów lub wzorców układu.

## Weryfikacja

Sprawdzono lokalne karty, linki produktowe, producenta, kolejność 9 uchwytów, pliki PDF, ceny/stany, Product JSON-LD dla PN oraz TypeScript i ESLint. Widok magazynu nadal przekierowuje niezalogowanego użytkownika do /admin/login.
