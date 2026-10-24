# SUNMI FLEX 3 KDS — lokalny landing

Weryfikacja 24.10.2026:
- https://www.sunmi.com/en/flex-3-kds/ — kierunek wizualny, zdjęcia i filmy producenta.
- https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/lg/ — oryginalne zdjęcia; lokalne WebP zachowują nazwy źródłowe.
- https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/video/tvc-en.mp4 — pełna prezentacja; tvc-poster.mp4 — ruchomy podgląd.
- https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/video/p5-1-en.mp4 — film odporności/czyszczenia; p5-1-poster.mp4 — podgląd.
- public/datasheets/sunmi-flex-3-kds.pdf — specyfikacja rozmiarów.
- docs/catalog/sunmi-flex-3-kds-2026-10-22/audit.md i src/data/sunmi-products.ts — numery PN, zawartość zestawu, zgodność akcesoriów i rozbieżności źródeł.

Filmy przekodowano do H.264 1600 px z faststart i zachowaniem dźwięku w pełnych prezentacjach. Podglądy wyciszone, respektują preferencję ograniczonego ruchu i zatrzymują się poza ekranem. Kliknięcie odtwarza pełny film z natywnym sterowaniem.

Dane: 15,6″ — P11050019, 250 nitów, 6 rdzeni, wbudowane PoE, zasilacz i VESA w zestawie. 18,5″ — P11050016, 400 nitów, 8 rdzeni. 22″ (21,5″) — P11050010, 400 nitów, 8 rdzeni. W obu większych PoE przez opcjonalny C12004010. Ramię C14004115 tylko 18,5″, stojak C14004138 18,5″/22″. Funkcje obsługi zamówień zależą od programu KDS i integracji. Nie wprowadzono twierdzeń o zanurzeniu, myciu ciśnieniowym ani odporności wykraczającej poza IP55.

Weryfikacja lokalna: lint obu komponentów, przełączanie 15,6″/18,5″/22″ i zgodność PN/parametrów; pełny film odtwarzany w przeglądarce; brak przepełnienia poziomego przy 390 px; brak brakujących kotwic. Główna galeria, ceny, stany i dane wariantów niezmienione.
