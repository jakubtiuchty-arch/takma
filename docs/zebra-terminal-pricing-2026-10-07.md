# Ceny terminali Zebra — 7 października 2026

## Zakres

23 modele i 223 unikalne numery PN w kategorii terminali mobilnych Zebra.
TC201: 13 wariantów; konfiguracja WWAN A6 zastępuje wcześniej wpisany numer TR.

## Reguła ceny

Cena sprzedaży netto = potwierdzony koszt zakupu × 1,10, zaokrąglony do dwóch miejsc.
Jest to narzut 10% na koszt, zgodnie z poleceniem „koszt zakupu + 10%”.
Najpierw porównujemy wiarygodne oferty dostawców z zapasem danej konfiguracji.
Gdy żaden dostawca nie ma zapasu, porównujemy pozostałe potwierdzone oferty.
Ingram: koszt PLN. BlueStar i Jarltech: koszt EUR przeliczany bieżącym kursem NBP.
Dla kontroli z 7 października: EUR/PLN 4,3797.

## Wynik i odświeżanie

215 PN z potwierdzoną ceną; 8 bez ceny u sprawdzonych dystrybutorów:

- MC330L-SL2EG4RW
- MC330L-SL4EG4RW
- MC220J-2A3S2RW
- KT-MC220J-2A3S2RW
- KT-MC220K-2B3S3RW
- MC27BJ-2A3S2RW
- MC27BK-4B3S3RW
- KT-MC27BJ-2A3S2RW

Brak oferty nie uruchamia zastępczej ceny innego PN. Karta, warianty i dane strukturalne korzystają z tego samego odczytu.
Cache terminali jest ważny najwyżej godzinę. Stary koszt Jarltech nie jest podstawą nowej ceny.
Pełny synchronizator terminali działa o 04:00 i 11:00 UTC (w październiku 06:00 i 13:00 w Polsce).
Ogólny synchronizator pomija terminale, aby nie nadpisać ich wyniku wielodniowym cache dostawcy.
Błędy pozycji Ingram w zapytaniu zbiorczym uruchamiają sprawdzenie brakujących PN osobno.

## Kontrola

- Test regresji: świeżość cache, stary koszt dostawcy, cena ze źródła z zapasem, narzut i brak oferty.
- Test Ingram: błędny PN w batchu nie ukrywa poprawnego PN.
- Test istniejącej integracji Newland: zachowana obsługa jej stanów.
- Kompilacja Next.js i kontrola TypeScript.

Pełne odpowiedzi dostawców i koszty zakupu pozostają w lokalnym raporcie roboczym; nie są publikowane w repozytorium.
