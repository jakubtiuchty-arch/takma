# SUNMI T3 — nowa kategoria „Komputery POS”

Data: 2026-10-22. Zakres: kategoria `/komputery-pos`, podkategoria `/akcesoria-do-komputerow-pos`, karty SUNMI T3 i T3 80 mm oraz 5 akcesoriów. Nazwa kategorii według decyzji właściciela: „Komputery POS”, bo w Polsce „terminal POS” oznacza terminal płatniczy.

## Źródła

- Karta katalogowa SUNMI T3 (właściciel): `public/datasheets/sunmi-t3.pdf` — procesor, pamięć, ekran, złącza, łączność, NFC „Tap on screen”, czytnik linii papilarnych, zasilacz 24 V / 2,5 A, wymiary 373 × 176 × 314 mm, masa 3 kg / 5,5 kg, warunki pracy.
- Strona SUNMI T3 Family: https://www.sunmi.com/en/t3-family/ — ekran odchylany o 125°, NFC po obu stronach ekranu, papier 80 i 58 mm z prowadnicą, wyjmowany moduł drukarki, obudowa odlewana, ukryte przewody.
- Jarltech: https://www.jarltech.com/en/sunmi-t3 — PN P01280007 i P03180008 (GMS EDLA, Android 13), drukarka 80 mm do 250 mm/s, gwarancja 36 miesięcy, zestaw: zasilacz i przewód zasilający; ekrany C02020007 / C02020008 „fits for: T3, T3 80mm”, 12 miesięcy; zasilacz X09020039 „order separately: Power Cord (C13)”, 12 miesięcy.
- ERS: https://www.ers-online.co.uk/p14155/sunmi-t3-android-desktop-pos-terminal (warianty, szuflada MAX C06004004 w akcesoriach T3, 250 mm/s) i https://www.ers-online.co.uk/T3/accessories (C02020008, C02020007, X09020039, C20000094 „T3 80MM 58mm Paper Roll Support”).
- SUNMI MAX Cash Drawer: https://www.sunmi.com/en/max-cash-drawer_/ — wkład, przewód RJ12 6P4C 0,8 m, 9–24 V / 1 A, impuls 100–300 ms, zabezpieczenia, wymiary 430 × 457 × 88 mm, 5,8 kg, 10 kg, ≥ 1 000 000 otwarć, czujnik stanu, 0–45°C. Jarltech https://www.jarltech.com/en/sunmi-max-kassenlade — przewód RJ12 w zestawie, 12 miesięcy.
- Film SUNMI o rozpakowaniu T3 80MM (właściciel): zawartość zestawu (skrócona instrukcja, zasilacz, rolka papieru), porty z tyłu (USB-C, zasilanie, szuflada kasowa, 2 × USB, port szeregowy, LAN, USB do debugowania), gniazdo TF/SIM pod listwą ozdobną, porty micro USB przy ekranie, złącze stykowe ekranu dodatkowego z blokadą i USB-C, pokrywa drukarki z uchwytem; ekrany klienta w pudełku z przewodem i instrukcją.

## PN, ceny i stany (/api/stock, 22.10.2026)

| PN | Karta | Cena netto | Stan |
|---|---|---:|---|
| P01280007 | sunmi-t3 | 2788,97 | available (EU 106, w dostawie 82) |
| P03180008 | sunmi-t3-80mm | 3194,64 | available (EU 418) |
| C02020008 | sunmi-c02020008 | 828,25 | available (EU 531) |
| C02020007 | sunmi-c02020007 | 1301,53 | on-order (0, w dostawie 18, 11.11.2026) |
| C06004004 | sunmi-c06004004 | 287,36 | available (EU 84) |
| X09020039 | sunmi-x09020039 | 101,44 | available (EU 17) |
| C20000094 | sunmi-c20000094 | 40,56 | unavailable (0 / 0) |

## Zgodność i wyłączenia

- Wersje SUNMI OS (P01280005, P03180006) i 4G nie mają oferty w integracji; nie dodano ich.
- Ekrany C02020003 i C02020004 (T3 Pro) celowo pominięte.
- Bez kart: konwerter CPad C14004148 (sklep nie sprzedaje CPad), C20000097 (niejasne przeznaczenie), X09020676 i gwarancje rozszerzone (brak oferty), kamery i czytnik MSR (brak PN w UE).
- Szuflada Mini C06000022 nie jest powiązana z T3 (SUNMI nie potwierdza zgodności).
- Szuflada MAX: dodana także do `akcesoria-do-drukarek-etykiet` (jak Mini). Bez powiązania z NT220/NT320: strona SUNMI MAX, ERS (akcesoria NT320) i Jarltech nie podają tej zgodności.
- Zasilacz X09020039: Jarltech podaje „T3”, ERS wymienia go w akcesoriach rodziny T3. Zgodność z T3 80 mm przyjęta za briefem i parametrami 24 V / 2,5 A z karty T3 — do potwierdzenia u dystrybutora.
- MicroSD w T3 80 mm: filtr Jarltech pokazuje P03180008 „without” SD, ale film SUNMI T3 80MM pokazuje gniazdo TF; opis zostawia microSD dla obu modeli.
- Drukarka T3 80 mm: gilotyna i maksymalna średnica rolki nie są podane ani przez SUNMI, ani przez Jarltech i ERS; nie wpisano ich.

## Zdjęcia

- T3: rendery SUNMI „T3_单屏”, „T3_大小屏”, „T3_双大屏” (właściciel).
- T3 80 mm: rendery SUNMI T3 80 mm z karty https://barcodesite.eu/products/sunmi-t3-p03180008 (1200 × 1200, przezroczyste tło).
- Szuflada MAX: Jarltech `SUN_MAX_Cash-Drawer_black_left_shop.png`, SUNMI „Product Images.zip” ze strony MAX (widok z przodu), barcodesite.eu (szuflada otwarta, tło wycięte rembg).
- Ekrany klienta: brak zdjęcia samego ekranu w dobrej jakości (ERS 200 px, barcodesite plansza z logo); pierwsze zdjęcie zastępcze, drugie z renderów T3.
- Zasilacz i prowadnica: obraz zastępczy (brak źródła w dobrej jakości).

## Filmy

- `video/sunmi-t3-80mm-rozpakowanie.mp4` w Vercel Blob, napisy PL 38 cue.
- Filmy „Functions Demo Video T3 Family” 1–3 pominięte: powtarzają końcówkę filmu o rozpakowaniu (3:04–3:58) i pokazują T3 80 mm z drukarką.
