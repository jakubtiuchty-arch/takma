# TC201: przywrócenie aktualnej dostępności, 8 października 2026

## Przyczyna
Produkcja z porannego wdrożenia ZT610 zawierała starszą listę 7 wariantów TC201 oraz starszą politykę cache (24 h oferty, 7 dni Jarltech). Integracja na żywo zwróciła 109 szt. TC2010-0S3P6BA00-A6, podczas gdy /api/stock używało porannego wpisu 0 szt. Brakowało również dostępnego TC201G-3S3P6BE00-A6 (464 szt. podczas kontroli).

## Zmiana
- Przywrócono 13 wariantów z wcześniej zweryfikowanego katalogu, w tym wersje A6 zamiast błędnego TR.
- TC201: maksymalnie godzina ważności obu cache. Stare zero i stary stan dodatni uruchamiają sprawdzenie na żywo.
- Potwierdzone odpowiedzi Jarltech i wynik zbiorczy zapisywane przed odpowiedzią dla TC201.
- TC201 dodany do wspólnego odczytu ofert w HTML, metadata i JSON-LD.
- Ogólny synchronizator pomija TC201. Dedykowany cron odświeża model o 15. minucie każdej godziny.
- Cena: potwierdzony koszt u dostawcy z zapasem + 10%.

## Weryfikacja
Test regresji scripts/test-tc201-stock.cjs: stare zero, stary stan dodatni, dostawa bez zapasu, wybór kosztu z dostępnego źródła, narzut, zapis cache i limit ważności. Kontrola TypeScript po wygenerowaniu klienta Prisma.
