# Kontrola V5 po wdrożeniu: TSC TL241 / TL341 i DL241 (25.10.2026)

Zakres: strony produkcyjne `https://www.takma.com.pl/produkt/tsc-tl241` i `/produkt/tsc-dl241` (wdrożenie 7dcfd574), tekst po pełnym załadowaniu (Playwright, `load` + 3 s, rozwinięte „Pokaż niedostępne warianty”, „Co jest w kartonie?”, specyfikacja, FAQ, dymek „Rozdzielczość”). Porównanie zdanie po zdaniu z dokumentami TSC. Dokumentacja poprzedniego agenta nie była podstawą oceny.

## Dokumenty odniesienia

| Dokument | Plik | Uwagi |
|---|---|---|
| Karta katalogowa TL DL Series (EN), stopka 20240509 | `public/downloads/tsc/tsc-tl-dl-karta-katalogowa-en.pdf` (376 940 B, 3 s.) | identyczna z kopią z fs.tscprinters.com (SHA-1 7b8d1504…) |
| Instrukcja TL240/DL240 Series (EN), 62 s., rewizja 21.03.2025 | `public/downloads/tsc/tsc-tl240-dl240-instrukcja-en.pdf` (3 678 141 B) | obejmuje TL240/TL340, TL241/TL341, DL240/DL241 |
| Strona serii TSC EMEA | https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers | pobrana curl 25.10.2026, HTTP 200; tabela 6 modeli, FAQ TSC Console, gilotyna serii TL |
| API cen i stanów | `https://www.takma.com.pl/api/stock?pn=TL241-A001-0002,TL341-A001-0002,DL241-A001-0002` | 2 wywołania, wynik identyczny |

## Karta tsc-tl241 („TSC TL241 / TL341”)

| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Nazwa, H1, seoTitle | TSC TL241 / TL341; termotransferowa drukarka etykiet 4" | karta: TL241, TL341, 4-inch, TT & DT | zgodne |
| Krótki opis | 4", TT i DT, 203/300 dpi, USB i Ethernet, TSPL-EZD zgodny z ZPL i EPL | karta: Resolution, Interface, Printer Language | zgodne |
| seoDescription | j.w., okienko materiału, „seria TSC TL240”, PN na końcu | instrukcja: „TL240 Series”; karta: media window | zgodne |
| Opis, akapit 1 | biurkowe 4", codzienny druk, TT z taśmą lub DT; etykiety półkowe, wysyłkowe, przyjęcia towaru, produkty spożywcze | karta: Key Features, Applications | zgodne |
| Opis, akapit 2 | automatyczne rozpoznanie języka; TSPL-EZD: ZPL, ZPL II, EPL, DPL; szablony bez zmian | karta: „automatically recognizes … without changing label templates”; TSPL-EZD (EPL, ZPL, ZPL II, DPL) | zgodne |
| Opis, akapit 3 | TL241: 203 dpi, 152 mm/s, 108 mm; TL341: 300 dpi, 102 mm/s, 105,6 mm; USB 2.0, Ethernet 10/100, 128 MB Flash | karta: kolumny TL241/TL341 | zgodne |
| Opis, akapit 4 | TPH Care, TSC Console, głowica bez narzędzi, okienko, gilotyna montowana przez dealera | karta: Key Features, Dealer Options | zgodne |
| Kluczowe parametry (5) | TT i DT; 203/300 dpi; 152/102 mm/s; 108/105,6 mm; 19–118 mm | karta | zgodne |
| Specyfikacja: rozdzielczość, prędkość, szerokość, długość etykiety | 8/12 punktów/mm; 152/102 mm/s; 108/105,6 mm; 5–25 400 / 5–11 430 mm | karta, instrukcja 1.1 | zgodne |
| Taśma | 300 m, OD 67 mm, gilza 1"; 110 m, OD 40 mm, gilza 0,5"; farba na zewnątrz; 40–110 mm | karta: Ribbon, Ribbon width | zgodne |
| Materiał | 19–118 mm; 0,06–0,19 mm; rolka 127 mm; gilza 25,4 mm; rodzaje (ciągły, wycinane, czarny znacznik, składanka, nawinięcie na zewnątrz) | karta: Media | zgodne (zapis jak w kartach TSC HC) |
| Czujniki, panel | 4 czujniki; włącznik, przycisk pauza/podawanie, LED 3 kolory | karta, instrukcja | zgodne |
| Interfejsy, procesor, pamięć, RTC | USB 2.0 + Ethernet 10/100; 32-bit RISC; 128 MB Flash, 64 MB DRAM; RTC brak | karta; instrukcja: „Real Time Clock (RTC) Not available” | zgodne |
| Język, czcionki, kody 1D/2D, obrót | TSPL-EZD; 8 bitmap + Monotype CG Triumvirate Bold Condensed; pełne listy; 0/90/180/270° | karta | zgodne (listy kodów sprawdzone pozycja po pozycji) |
| Obudowa, wymiary, waga | ABS oraz ABS + PC; 211 × 164 × 279 mm; 2,0 kg | karta | zgodne |
| Zasilanie, warunki pracy | 100–240 V AC 2,0 A 50–60 Hz; 24 V DC 2,0 A 48 W; 0–40°C 10–85%; −20–60°C 5–90% | karta | zgodne |
| Certyfikaty, środowisko | CB, FCC A, IC A, NOM, cTUVus, CE A, UKCA A, EAC, BIS, ISC, KC, Energy Star 3.2; RoHS, REACH, WEEE, China RoHS, opakowanie 100% recykling | karta (kolumna TL241/TL341) | zgodne |
| Opcje | gilotyna (cięcie pełne) montowana przez dealera | karta: Dealer Options; instrukcja: Factory/User Options Not available | zgodne |
| W zestawie / „Co jest w kartonie?” (8 pozycji) | skrócona instrukcja, USB, przewód zasilający, zasilacz, trzpień etykiet z 2 zaczepami, 2 trzpienie 1", 2 trzpienie 0,5", papierowe gilzy 1" i 0,5" | instrukcja 1.1 i rozdz. 2 (paper core 1" ×1, 0,5" ×1) | zgodne |
| Gwarancja | drukarka 2 lata; głowica 25 km / 12 mies.; wałek 50 km / 12 mies., co nastąpi wcześniej | karta: Limited Warranty | zgodne |
| Zastosowania (4) | półki i inwentaryzacja, wysyłka i przyjęcie towaru, produkty spożywcze, track and trace | karta: Applications | zgodne |
| Warianty | TL241-A001-0002 203 dpi; TL341-A001-0002 300 dpi; oba „Niedostępny”, „Powiadom” | API: found, 0 szt., unavailable; ceny netto 911,49 i 1961,33 zł = API | zgodne |
| Dymek „Rozdzielczość” | definicja + 203 dpi (152 mm/s, 108 mm, 25 400 mm) + 300 dpi (102 mm/s, 105,6 mm, 11 430 mm) | karta | zgodne |
| FAQ 1 (TL241 vs TL341) | różnica głowicy, prędkość, szerokość, długość; reszta wspólna | karta | zgodne |
| FAQ 2 (taśmy) | farba na zewnątrz, 40–110 mm, 300 m / 110 m, trzpienie i gilzy w zestawie | karta, instrukcja | zgodne |
| FAQ 3 (obcinarka) | gilotyna od dealera; brak opcji fabrycznych i użytkownika | instrukcja 1.1 | zgodne |
| FAQ 4 (ZPL) | TSPL-EZD, automatyczne przełączanie | karta | zgodne |
| FAQ 5 (sieć) | „Wersje z Wi-Fi lub Bluetooth nie są dostępne.” | dokumenty TSC nie podają tego; dystrybutorzy: TL240-A001-0101 „US TL240B, Bluetooth” (Levata), DL241-A001-010H „USB 2.0 + Ethernet + Bluetooth 4.2, US DL241B” (Barcode Factory) | **niezgodne → poprawione**: „Oferowana wersja nie ma Wi-Fi ani Bluetooth.” |
| FAQ 5 (TSC Console) | dodanie po IP, stan, ustawienia, firmware, TPH Care | instrukcja 6.2–6.3, FAQ TSC EMEA | zgodne |
| FAQ 6 (głowica) | głowica i wałek bez narzędzi; odłączyć zasilanie przed otwarciem do naprawy | instrukcja rozdz. 1 („toolless … printhead and platen roller replacement”) i ostrzeżenie „Remove the power from AC inlet before opening the media cover … repairing faults” | zgodne |
| FAQ 7 (TL240/TL340) | „odmiany wyposażone wyłącznie w USB” | karta: USB 2.0; wersje US z Bluetooth istnieją (j.w.) | **niezgodne → poprawione**: „odmiany bez portu Ethernet, z 16 MB pamięci Flash” |
| FAQ 8 (alternatywy) | DL241, ZD421t, PC45t, PC42E-T, TD-4T | linki 200 | zgodne |
| Alt zdjęcia 1 | „…okienko kontroli materiału w pokrywie i włącznik z diodą” | instrukcja 3.1: z przodu „LED indicator & Feed/Pause button”; włącznik z boku/z tyłu | **niezgodne → poprawione**: „przycisk podawania z diodą” |
| Alt zdjęć 2 i 3 | etykieta w szczelinie; otwarta pokrywa, głowica z taśmą, rolka | obraz | zgodne |
| Pliki do pobrania | karta 368 KB, instrukcja 3,5 MB, link „Sterowniki i wsparcie TSC” (Online) | HTTP 200; 376 940 B i 3 678 141 B; strona TSC 200 | zgodne |
| JSON-LD | Product, sku/mpn TL241-A001-0002, waga 2 kg, AggregateOffer 911,49–1961,33 PLN, OutOfStock, FAQPage | treść strony, API | zgodne |

## Karta tsc-dl241 („TSC DL241”)

| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Nazwa, H1, seoTitle | TSC DL241; termiczna drukarka etykiet 4" z Ethernetem | karta: DL241, Direct Thermal, Ethernet | zgodne |
| Krótki opis | bez taśmy, 203 dpi, 152 mm/s, Ethernet i USB 2.0, 1,1 kg | karta | zgodne |
| seoDescription | j.w., emulacja EPL, ZPL, DPL, „seria TSC DL240”, PN | karta, instrukcja: „DL240 Series” | zgodne |
| Opis, akapit 1 | DT, bez taśmy; wysyłka, przyjęcie dostaw, półki, paragony, śledzenie żywności | karta: Applications (Receipt Printing, Track and Trace) | zgodne |
| Opis, akapit 2 | 203 dpi, 152 mm/s, 108 mm, materiał 40–112 mm, etykieta 15 mm–25,4 m | karta | zgodne |
| Opis, akapit 3 | USB 2.0, Ethernet, TSC Console, TPH Care | karta, instrukcja 6.3 | zgodne |
| Opis, akapit 4 | jeden przycisk, dioda 3 kolory, głowica bez narzędzi, okienko, TSPL-EZD, opakowanie do recyklingu | karta, instrukcja rozdz. 5 | zgodne |
| Kluczowe parametry (5) | DT; 203 dpi; 152 mm/s; 108 mm; 40–112 mm | karta | zgodne |
| Specyfikacja (wszystkie wiersze) | 8 punktów/mm; 15–25 400 mm; 40–112 mm; 0,06–0,20 mm; 127 mm; 25,4 mm; 3 czujniki; panel; interfejsy; 32-bit RISC; 128 MB/64 MB; RTC brak; język, czcionki, kody, obrót; ABS oraz ABS + PC; 181 × 162 × 223 mm; 1,1 kg; zasilanie; warunki; certyfikaty (kolumna DL241); środowisko | karta, instrukcja 1.1 | zgodne |
| Opcje | brak opcji fabrycznych, dealera i użytkownika | instrukcja 1.1 (DL240 Series: wszystkie „Not available”); EMEA: Optional Cutter „-” | zgodne |
| W zestawie (5) | instrukcja, USB, przewód zasilający, zasilacz, trzpień z 2 zaczepami | karta, instrukcja rozdz. 2 | zgodne |
| Gwarancja | 2 lata; 25 km / 12 mies.; 50 km / 12 mies. | karta (sekcja DL) | zgodne |
| Wariant | DL241-A001-0002, bez atrybutów, „Niedostępny”, „Powiadom” | API: found, 0 szt., unavailable; 1497,57 zł netto = API | zgodne |
| FAQ 1–4, 6 | różnice z TL241; media; brak obcinarki i odklejaka; ZPL; TPH Care (przypomnienie, strona testowa, mniej przestojów) | karta, instrukcja 1.1 i 6.3 | zgodne |
| FAQ 5 (sieć) | „DL241 ma port Ethernet … i USB 2.0; nie ma Wi-Fi ani Bluetooth.” | karta: DL241 USB 2.0 + Ethernet; istnieje US DL241B z Bluetooth 4.2 (DL241-A001-010H) | **niezgodne (zbyt ogólne) → poprawione**: „DL241 w oferowanej wersji ma port Ethernet … Nie ma Wi-Fi ani Bluetooth.” |
| FAQ 5 (TSC Console) | prędkość i zaczernienie, kalibracja, czcionki, firmware | FAQ TSC EMEA | zgodne |
| FAQ 7 (DL240) | „łączy się tylko przez USB i ma 16 MB pamięci” | karta: 16 MB Flash + 64 MB DRAM; wersje z Bluetooth istnieją | **niezgodne → poprawione**: „nie ma portu Ethernet i ma 16 MB pamięci Flash” |
| FAQ 8 (alternatywy) | ZD421d, ZD230d, PC45d, TD-4D | linki 200 | zgodne |
| Alt zdjęcia 1 | „…zielone zatrzaski” | obraz: widoczna jedna zielona dźwignia; instrukcja 3.1: „Top cover release lever” | **nieprecyzyjne → poprawione**: „zielona dźwignia otwierania pokrywy” |
| Alt zdjęć 2 i 3 | etykieta ze szczeliny; otwarta pokrywa z rolką | obraz | zgodne |
| Pliki do pobrania, JSON-LD | jak w TL; waga 1,1 kg, Offer 1497,57 PLN OutOfStock | HTTP 200, API | zgodne |

## Kontrole wspólne

- **Ceny i dostępność:** API (2 wywołania) = strona = JSON-LD. Wszystkie 3 PN: 0 szt., `unavailable`; brak koszyka, są „Powiadom o dostępności” i „Zapytaj o produkt”. Uwaga do właściciela: TL241-A001-0002 jest tańszy od DL241-A001-0002 i ponad 2 razy tańszy od TL341 — wartość z API, logika cen bez zmian.
- **Kafle:** obie karty są w `/drukarki-etykiet-tsc`, `/biurkowe-drukarki-etykiet`, `/drukarki-etykiet`; TL w `/termotransferowe-drukarki-etykiet`, DL w `/termiczne-drukarki-etykiet`. TL jest też w `/termiczne-drukarki-etykiet` (jak karty TSC TH/DH HC z TT/DT; Zebra ZD421t i PC45t są tylko w termotransferowych) — pozostawione. Pole zdjęcia 299 × 224 px, `object-contain`, jak ZD421t i PC45d. Produkt w kaflu: TL 193 × 177 px, DL 192 × 184 px; ZD421t 203 × 184, PC45t 199 × 181, ZD421d 192 × 175, PC45d 194 × 180 — zgodne.
- **Karta produktu:** galeria 584 × 584 px i miniatury 80 × 80 px jak PC45t; zdjęcia 800 × 800 PNG, HTTP 200.
- **Tabela wariantów:** po „Pokaż niedostępne warianty” bez poziomego scrolla przy 1440/1280/1024 px (scrollWidth = clientWidth); 390 px — widok kart, brak scrolla strony.
- **Akcesoria:** brak kart akcesoriów (gilotyna i części bez potwierdzonego PN) — sekcja „Akcesoria” się nie pokazuje; materiały eksploatacyjne z komponentu wspólnego.
- **Zasady treści:** brak cen w treści, superlatyw, „autoryzowany”, notatek o źródłach; „zaczernienie” zamiast „darkness”. Unikalność (`porownaj-opisy.py`, 6-gramy, description/shortDescription/seoDescription/faq): 0 par w pliku i 0 par z 39 innymi kartami TSC po poprawkach.
- **Poza zakresem kart (komponenty wspólne):** „Bez etykiet i taśmy: dokupujesz osobno” (forma „Ty”, `src/app/produkt/[slug]/page.tsx`) i baner serwisu TSC — dotyczą wszystkich drukarek, bez zmian.

## Numery z API bez kart (tylko raport)

| PN | API | Co mówią dokumenty | Wniosek |
|---|---|---|---|
| CUT-TL240-0001 | found, 0 szt. | TSC EMEA: „TL Series 4-inch Guillotine Cutter” (pełne cięcie), zgodna z TL240/TL340/TL241/TL341 — bez PN. Wyszukiwanie PN: brak wyników u dystrybutorów. | Prawdopodobnie ta gilotyna (schemat jak CUT-TH240-0001, CUT-ML240-0001), ale żaden dokument nie wiąże PN z TL. Niepotwierdzone. |
| PH-TL240-0001 | found, 0 szt. | brak w dokumentach TSC i u dystrybutorów | Analogia do PH-TH240-0001 (203 dpi) i PH-TH240-0002 (300 dpi) — niepotwierdzone. Dla DL241 nie wiadomo. |
| PH-TL240-0002 | found, 0 szt. | j.w. | j.w. |
| SP-TL241-0001 | found, 0 szt. | Levata DE: „MAIN BOARD ASSY, TL241 (1SET/BOX)”, akcesorium modelu TL241; brak drugiego źródła | Płyta główna (część serwisowa) TL241; zgodność z TL341 i DL241 niepotwierdzona. Nie jest akcesorium dla klienta. |

## Poprawki (src/data/tsc-tl-dl-products.ts)

1. TL, alt zdjęcia 1: „włącznik z diodą” → „przycisk podawania z diodą”.
2. TL, FAQ 5: „Wersje z Wi-Fi lub Bluetooth nie są dostępne.” → „Oferowana wersja nie ma Wi-Fi ani Bluetooth.”
3. TL, FAQ 7: „odmiany wyposażone wyłącznie w USB” → „odmiany bez portu Ethernet”.
4. DL, alt zdjęcia 1: „zielone zatrzaski” → „zielona dźwignia otwierania pokrywy”.
5. DL, FAQ 5: zawężenie do oferowanej wersji, podział na dwa zdania.
6. DL, FAQ 7: „łączy się tylko przez USB i ma 16 MB pamięci” → „nie ma portu Ethernet i ma 16 MB pamięci Flash”; „ma też port Ethernet” → „ma port Ethernet”.

Weryfikacja: `npx tsc --noEmit` i `npx next build` w worktree `weryfikacja/tsc-tl-v5`. Bez pusha; zmiany trafią na produkcję po scaleniu do `claude/takma-frontend-build-RrM9E`.
