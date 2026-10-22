# Komputery POS SUNMI — zgodność z kartami katalogowymi (22.10.2026)

Dokumentacja robocza. Nie publikować w treści dla klientów.

## Źródła

- SUNMI T3: karta katalogowa `public/datasheets/sunmi-t3.pdf` (T3 Family - T3).
- SUNMI T3 80 mm: przedpremierowa karta SUNMI „T3 80MM” z dopiskiem „Upcoming” i zastrzeżeniem, że parametry mogą się zmienić. PDF-u nie publikujemy; na karcie produktu zostaje karta T3.
- SUNMI T3 PRO i T3 PRO MAX: `public/datasheets/sunmi-t3-pro.pdf`, `public/datasheets/sunmi-t3-pro-max.pdf`.
- SUNMI D3: `public/datasheets/sunmi-d3.pdf` (modele F153A/B/C) i strona produktu SUNMI („Built-in NFC on the secondary display”).
- SUNMI D3 PRO: `public/datasheets/sunmi-d3-pro.pdf` (model F3510).
- Pamięć D3 P01300033: Jarltech, BarCodeSite i Cash Register Store podają 3 GB RAM / 32 GB; ERS podaje 4 GB / 64 GB. Karta SUNMI dopuszcza obie konfiguracje.
- Porty RJ: karty D3 i D3 PRO („RJ11 serial port”, „RJ12 cash drawer port”), film SUNMI o T3 i opisy sprzedawców.

## Decyzje

- RJ12 = port szuflady kasowej, RJ11 = port szeregowy we wszystkich sześciu kartach.
- D3 (P01300033) = 3 GB RAM / 32 GB, microSD do 1 TB. Filtr „Pamięć RAM” ma wartości 3, 4 i 6 GB.
- NFC D3 jest w ekranie klienta 10,1" z zestawu.
- Ekran klienta D3 PRO (C02020005) zakłada się na ramię podstawy, od strony klienta, i podłącza przez USB (plug-and-play). Usunięte „nie wymaga montażu”.
- Porównania modeli tylko parametrami podanymi w obu kartach: bez LAN 1 Gb/s jako różnicy T3 PRO wobec T3 (karta T3 podaje tylko RJ45) i bez drukarki Seiko jako różnicy T3 PRO MAX wobec T3 80 mm (obie mają Seiko).
- „Zarządzanie: SUNMI DMP” dodane we wszystkich sześciu kartach, bo każda karta katalogowa ma logo „Compatible with SUNMI DMP”. D3 PRO dodatkowo „Deploy remotely”.

## Zmiany na kartach

- Wszystkie komputery: porty RJ12/RJ11 w specyfikacji, opisach i FAQ; FAQ o szufladzie bez zdania o braku listy zgodnych szuflad; wiersz „Akcesoria opcjonalne” z kart; wiersz „Zarządzanie” (DMP).
- T3: procesor Qualcomm Kryo 265; korpus z metalu odlewanego ciśnieniowo; P01280007 bez 4G i GPS; FAQ o ekranie klienta (treść ustawia program sprzedaży).
- T3 80 mm (karta T3 80MM): drukarka Seiko z gilotyną, rolka do 80 mm, trwałość 150 km, LAN 1 Gb/s, zasilacz 100–240 V AC / 1,7 A, wymiary 369 × 374 × 206 mm, masa 3,6 / 6,5 kg, przycisk Download, dioda zasilania, Kryo 265; usunięte czujniki i wilgotność (brak w karcie T3 80MM); korpus z metalu odlewanego ciśnieniowo (jak w karcie).
- T3 PRO i T3 PRO MAX: model L15B1 / L15A1; nazwy wariantów „SUNMI OS (Android 13), bez usług Google” i „SUNMI OS (Android 13) z usługami Google (GMS)”; dymek GMS bez PN; przycisk Download i dioda zasilania; personalizacja obudowy na zapytanie; MAX „150 km wydruku”.
- Ekrany C02020003 i C02020004: nazwy „do T3 PRO i T3 PRO MAX”; filtr akcesoriów `^Ekran klienta` nadal je obejmuje. Poprawiony opis zdjęcia C02020004 i P01240002-8.
- D3: 3 GB / 32 GB; NFC w ekranie klienta; procesor 4 × A72 do 2,2 GHz i 4 × A53 do 1,8 GHz, AI 6 TOPS; certyfikaty CE, RoHS, FCC, CB, CCC; przycisk zasilania z niebieską diodą i przycisk Download; zastosowania z karty.
- D3 PRO: montaż ekranu klienta na ramieniu podstawy; czytnik linii papilarnych odblokowuje komputer i loguje do SUNMI One ID; NFC tylko w ekranie klienta; port micro USB do debugowania; porównanie z D3 bez „oba 4/64 GB” i bez kontrastu obudowy; opis zdjęcia od spodu bez otworów montażowych.
- C02020005: montaż na ramieniu podstawy, NFC „Tap on Glass”.
- Kategoria `/komputery-pos`, filtry i `public/llms.txt`: te same poprawki (pamięć D3, NFC D3, Seiko w obu modelach z drukarką, porównania T3 / T3 PRO, montaż C02020005, port RJ12, treść ekranu klienta).

## Do potwierdzenia

- T3 80 mm: dane z karty przedpremierowej. Po premierze sprawdzić ostateczną kartę SUNMI.
- Pamięć D3: przy kolejnej dostawie sprawdzić konfigurację na urządzeniu (3/32 lub 4/64).
