# Zdjęcia TC22R i EM45 RFID — biblioteka Zebra

Aktualizacja 18.10.2026. Źródło: zalogowana biblioteka partnera Zebra Media Library. Pełny wykaz źródeł i plików wynikowych: [photo-sources.json](photo-sources.json).

## Zakres

- TC22R: 12 unikalnych widoków urządzenia. Wersje PNG/TIFF i odpowiedniki tych samych ujęć z cieniem nie są powielane jako kolejne perspektywy.
- EM45 RFID: 34 ujęcia produktowe, w tym dwa zestawy renderów, zbliżenia, widoki złączy i przykładowe ekrany aplikacji.
- Materiały zastosowań, filmy i zdjęcia samych akcesoriów z wyników wyszukiwania nie są mieszane ze zdjęciami produktu w tych galeriach.
- Pierwsze zdjęcie TC22R pokazuje pojedyncze urządzenie od strony ekranu z uchwytem RFID. EM45 RFID pokazuje pojedynczy terminal z przodu.
- Przykładowe ekrany aplikacji są tak nazwane w altach. Nie zmieniono zakresu zestawu, licencji ani opisu funkcji.

## Przygotowanie

Pobrano internetowe rendycje fotografii z oficjalnej biblioteki. Imagen dostosował marginesy do pionowej proporcji 1:2. Zachowano konstrukcję, perspektywę i kompozycję ujęcia. Zbliżenia pozostały zbliżeniami. Po kontroli zapisano pliki WebP. Każda fotografia ma osobny opis alternatywny po polsku.

Nie zmieniano komponentów, układu, cen, PN ani kompatybilności akcesoriów.

## Pomiar względem kart wzorcowych

Na wspólnej stronie `/terminale-mobilne` pola zdjęć TC22R, EM45 RFID, MC3300x i MC3400 mają około 298,7 × 224 px w tym samym widoku przeglądarki. Porównano także widoczny produkt, a nie tylko kontener.

Poniżej proporcje widocznej sylwetki względem obrazu przy progu różnicy od bieli 30/255. Iloczyn szerokości i wysokości opisuje pole ramki obejmującej produkt. Różne kształty mają różne wymiary, ale zbliżone pole i wagę wizualną.

| Plik | Obraz | Szerokość | Wysokość | Pole ramki |
|---|---|---|---|---|
| zebra-mc3300x_1.png | 600 × 1200 | 0.708 | 0.906 | 0.642 |
| zebra-mc3400_1.png | 600 × 1200 | 0.682 | 0.924 | 0.630 |
| tc22r-left-view-media-v2.webp | 887 × 1774 | 0.929 | 0.660 | 0.613 |
| em45-rfid-original-front-media-v2.webp | 887 × 1774 | 0.780 | 0.816 | 0.637 |

Kontrola: TypeScript, ESLint, zgodność danych produktu poza galerią, komplet plików, liczba zdjęć i altów, załadowanie wszystkich zdjęć w przeglądarce, wybór miniatur, przejście z ostatniego zdjęcia do pierwszego, porównanie wizualne na liście terminali. Publikacja wyłącznie z commita na gałęzi produkcyjnej.
