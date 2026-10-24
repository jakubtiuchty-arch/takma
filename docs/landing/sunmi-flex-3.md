# SUNMI FLEX 3 — landing lokalny, 24.10.2026

Źródła: https://www.sunmi.com/en/flex-3/ i lokalna karta katalogowa public/datasheets/sunmi-flex-3.pdf. Parametry oferowanych PN i zgodność stojaków: docs/catalog/sunmi-flex-3-2026-10-22/audit.md oraz src/data/sunmi-products.ts.

Media pochodzą z https://file.cdn.sunmi.com/newebsite/products/flex-3/lg/ i /video/. Nazwy zachowane, obrazy konwertowane do WebP, filmy H.264 do 1600 px. p1-bg-n to hero; p4-bg film obudowy odtwarzany raz; p10-1-1, p10-2-1-n, p10-3-1, p10-4-1 to cztery zastosowania z pętlą i pauzą; tvc-poster zapętlony zwiastun, tvc-en pełny film na żądanie. p11-1-2 przedstawia NFC na ekranie. Nie użyto p11-2-3 jako NFC, bo przedstawia rozpoznawanie twarzy.

Nie przeniesiono marketingowych maksimum 8/256 GB ani AI 13 TOPS na oferowane wersje. Nie reklamuje się grubości 17 mm jako całkowitej. Rozmiar handlowy 22″ ma faktyczną przekątną 21,5″. 15,6″: 4/64, 6 rdzeni 2,4 GHz, 250 nitów, Wi-Fi5/BT5. Pozostałe: 6/128, 8 rdzeni 2,7 GHz, IPS 400 nitów, Wi-Fi6E/BT5.2. Wszystkie Android13/SUNMIOS4, FullHD, IP54, NFC, VESA100.

Stojaki i moduły oddzielne, zgodność podana według audytu. Płatność NFC wymaga programu i operatora. Program kiosku musi współpracować z systemem sprzedaży. Brak deklaracji samodzielnych płatności bankowych przez moduł3w1.

Górna karta, ceny, dostępność, galeria, natywna tabela wariantów i akcesoria bez zmian. Publikacja wymaga odrębnego polecenia użytkownika.

Weryfikacja: ESLint nowych TSX i kontrola TypeScript ograniczona do nowych komponentów — poprawne. Pełny tsc zatrzymany po braku postępu (odczyty plików całego repo); nie traktowany jako zaliczony. Lokalne UI: cztery rozmiary, cztery zastosowania, odtwarzanie filmów readyState4 bez błędów, pełny film z kontrolkami. Mobile390px bez poziomego przewijania; zdjęcia stojaków wczytane. Screenshot outputs/sunmi-flex-3-local.png w katalogu rozmowy.
