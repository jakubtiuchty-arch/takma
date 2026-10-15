# Sidebar drukarek RFID — 15.10.2026

Dodano wyłącznie konfigurację `categoryFilters['drukarki-rfid']`. Istniejący `SubcategoryPage` wybiera `FilterableProductGrid`, z checkboxami, licznikami, łączeniem warunków, czyszczeniem i mobilną szufladą. Bez nowego komponentu i zmian w kartach, zdjęciach lub integracji cen.

## Dane i zakres

Filtry bazują na podkategoriach i parametrach dziesięciu modeli już zweryfikowanych w katalogu. `specNameMatches` obsługuje także „Rozdzielczość oferowanych wariantów” w ZT411. Opisy filtrów wyjaśniają dobór konkretnego PN, różnice rozdzielczości ZD611R oraz wymóg wersji On-Metal dla grubszych Silverline.

- Rodzaj: biurkowe 2, przemysłowe 5, mobilne 3.
- Rozdzielczość: 203 dpi 10, 300 dpi 7, 600 dpi 1.
- Szerokość: 54–56 mm 1, 72 mm 1, 104–108 mm 6, 168 mm 2.
- Metoda: termiczna bez taśmy 10, termotransferowa 7.
- Wersja do etykiet na metal: tylko ZT411 RFID z wyraźnym warunkiem wybrania wersji On-Metal, a nie standardowego PN.

Nie dodano filtra ceny ani dostępności opartego na statycznym katalogu: te modele korzystają z ofert na żywo i nie mają statycznego `priceFrom`. Liczniki oznaczają modele, nie liczbę wariantów PN.

## Kontrola przed publikacją

Wzorzec: `/przemyslowe-drukarki-etykiet`. Sidebar 240 px, szerokość karty 293,66 px. Te same wartości na RFID; pole obrazu 293,66 × 220,24 px, ta sama grafika i sposób jej skalowania. Brak przewijania poziomego. Nie zmieniano plików zdjęć, więc udział produktu w źródłowym kadrze pozostał bez zmian.

Przeglądarka lokalna:
- Mobilne → ZQ630 Plus, ZQ521, ZQ511; po dodaniu 4 cali zostają ZQ630 Plus i ZQ521.
- Przemysłowe + 6 cali + 300 dpi → ZT421 i ZT620.
- 600 dpi → ZT610.
- Wersja On-Metal → ZT411.
- Czyszczenie przywraca wszystkie 10 modeli.
- Telefon 390 × 844: otwarcie szuflady, wybór biurkowych, „Pokaż 2”, ZD621R i ZD611R, ponowne otwarcie i czyszczenie. Bez przewijania poziomego. Przywrócono domyślny rozmiar widoku.

TypeScript zakończony poprawnie. Pierwszy odczyt typów zbiegał się z odtwarzaniem `.next` przez serwer deweloperski; ponowiono go po zakończeniu generowania plików. Lokalna baza i połączenia do dystrybutorów były wyłączone; odczyt ofert w przeglądarce przekierowano na publiczne API sklepu. Wdrożenie wyłącznie przez commit i push na `claude/takma-frontend-build-RrM9E`.
