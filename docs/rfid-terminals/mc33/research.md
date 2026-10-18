# Zebra MC3330xR / MC3390xR — kontrola przed publikacją

Data: 2026-10-18. Źródła robocze; nie są częścią opisu dla klienta.

## Konfiguracje i zgodność

Podstawą PN jest Zebra MC3300xR Integration Guide, tabela 1, strony 7–9:
https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/mc3300xr-ig.pdf

- MC333U-GJ2EG4EU / GJ3EG4EU / GJ4EG4EU: SE4770, 29 / 38 / 47 klawiszy.
- MC339U-GE2EG4EU / GE3EG4EU / GE4EG4EU: SE4850, 29 / 38 / 47 klawiszy.
- MC339U-GF2EG4EU / GF3EG4EU / GF4EG4EU: SE4750MR, 29 / 38 / 47 klawiszy.
- Wspólne: GMS, 4 GB RAM / 32 GB Flash, ETSI. Wersje US/WR i zestawy -1SKT pominięte.
- Antena MC3330xR kołowa, MC3390xR liniowa. NFC nie jest UHF.
- Bateria fabryczna 7000 mAh, alternatywna BTRY-MC33-52MA-01 5200 mAh (tabela akcesoriów IG).
- Stacje, ładowarki, przewód USB, zasilanie, pasek i szkło: tabela akcesoriów IG i katalog MC3300R/xR. Nie podpięto osłon MC3400 ani baterii MC3X na podstawie podobnej nazwy.

Aktualne strony specyfikacji:
https://www.zebra.com/us/en/products/spec-sheets/rfid/rfid-handhelds/mc3330xr.html
https://www.zebra.com/us/en/products/spec-sheets/rfid/rfid-handhelds/mc3390xr.html

Starsze oryginalne PDF i aktualny HTML podają różne maksymalne zasięgi RFID (6 / 12 m, 18,2 / 29 m). Opisy nie deklarują liczbowego zasięgu. SE4750MR dla GF potwierdza tabela konfiguracji; ogólna strona modelu nie zastępuje parametrów konkretnego PN. Nie obiecano wersji Android z nowszych ogólnych stron.

## Dystrybucja

Sprawdzono Ingram, BlueStar i Jarltech przez istniejące integracje. Wszystkie dziewięć europejskich PN ma oferty. Fizyczny zapas: trzy MC3330xR i MC339U-GE4EG4EU. Pozostałe MC3390xR mają zero sztuk. Dostawy w drodze nie są zapasem fizycznym.

Przykładowy stan w chwili kontroli: MC333U-GJ3EG4EU — BlueStar 38, Jarltech 16; MC339U-GE4EG4EU — BlueStar 2 i 7 w drodze. Integracja wybiera dostawcę według istniejących reguł; dostępność na kartach korzysta z pól stockPL i stockDE. Pole totalStock zawiera także dostawy w drodze i nie służy do deklarowania fizycznego zapasu. Cena netto terminali: koszt wybranego dostawcy × 1,10, EUR według istniejącego kursu NBP. Karty i warianty korzystają z istniejącego katalogu PN i API /api/stock.

## Dokumenty i zdjęcia

Pochodzenie, SHA256 i datę dokumentów zapisano w document-sources.json. Karta MC3330xR obejmuje oryginalne strony 5–8 zestawienia Jarltech, bez zmian treści. Wszystkie linki klienta prowadzą do lokalnych PDF na TAKMA.

Zdjęcia i obróbka: photo-sources.json. Pomiar udziału obiektu: photo-measurements.json. Porównanie w przeglądarce przy 1440 px z MC3400 i TC53e-RFID: pole główne 584 × 584 px; zbliżona wysokość widocznego terminala. Nie zmieniono komponentu galerii ani kafelków.

## Weryfikacja

- TypeScript bez błędów; lint zmienionych plików bez ostrzeżeń.
- Obie karty: pojedynczy H1, unikalny metaopis/OG/Twitter, śródtytuły, ProductGroup.
- Tabela MC3330xR: klawiatura. MC3390xR: skaner i klawiatura.
- Akcesoria: 4 → 18 → 4, istniejący mechanizm; wszystkie identyfikatory i linki produktowe istnieją.
- Widok 390 px bez poziomego przepełnienia.
- Kategoria zawiera pięć modeli, w tym oba nowe.
- Sześć lokalnych PDF: HTTP 200, application/pdf, sygnatura %PDF-.
