# Kontrola V6 po wdrożeniu: TSC TL241 i TSC TL341 (osobne karty) oraz linki z DL241 (26.10.2026)

Zakres: strony produkcyjne `https://www.takma.com.pl/produkt/tsc-tl241` i `/produkt/tsc-tl341` (wdrożenie b050517a, karty rozdzielone 26.10.2026 z jednej karty „TSC TL241 / TL341”) oraz linki do nich z `/produkt/tsc-dl241`. Tekst po pełnym załadowaniu (Playwright, `load` + 3 s, rozwinięte „Pokaż niedostępne warianty”, „Co jest w kartonie?”, specyfikacja, FAQ; dymki PN i ceny). Porównanie zdanie po zdaniu z dokumentami TSC. Dokumentacja autora kart nie była podstawą oceny. Numerów CUT/PH/SP nie sprawdzano ponownie (zrobione w V5).

## Dokumenty odniesienia

| Dokument | Plik / adres | Uwagi |
|---|---|---|
| Karta katalogowa TL DL Series (EN), stopka 20240509 | `public/downloads/tsc/tsc-tl-dl-karta-katalogowa-en.pdf` (376 940 B, 3 s.) | kolumny TL240, TL340, TL241, TL341; osobna strona DL240/DL241 |
| Instrukcja TL240/DL240 Series (EN), 62 s. | `public/downloads/tsc/tsc-tl240-dl240-instrukcja-en.pdf` (3 678 141 B) | spec. 1.1, zawartość kartonu (rozdz. 2), TSC Console i TPH Care (rozdz. 6), czyszczenie (rozdz. 8), zgodność (rozdz. 9) |
| Strona serii TSC EMEA | https://emea.tscprinters.com/en/products/tl-dl-series-4-inch-performance-desktop-printers | curl 26.10.2026, HTTP 200; tabela 6 modeli, FAQ TSC Console, gilotyna TL |
| API cen i stanów | `/api/stock?pn=TL241-A001-0002,TL341-A001-0002,DL241-A001-0002` | 2 wywołania, wynik identyczny |

## Karta tsc-tl241 („TSC TL241”)

| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Nazwa, H1, title, seoTitle | TSC TL241; termotransferowa drukarka etykiet 4" 203 dpi | karta: TL241, 4-inch, 203 dpi, TT & DT | zgodne |
| Krótki opis, seoDescription | 4", TT i DT, 203 dpi, do 152 mm/s, 108 mm, USB 2.0 i Ethernet, TSPL-EZD zgodny z ZPL i EPL, okienko materiału, „seria TSC TL240”, PN na końcu | karta: kolumna TL241, Key Features; instrukcja: „TL240 Series” | zgodne |
| Opis, akapit 1 | biurkowa 4", codzienny druk, TT z taśmą lub DT; etykiety półkowe, wysyłkowe, przyjęcia towaru, produkty spożywcze | karta: wstęp, Applications | zgodne |
| Opis, akapit 2 | 203 dpi (8 punktów/mm), do 152 mm/s, 108 mm, etykieta 5–25 400 mm | karta: kolumna TL241 | zgodne |
| Opis, akapit 3 | automatyczne rozpoznanie języka; TSPL-EZD: ZPL, ZPL II, EPL, DPL; szablony bez zmian | karta: „automatically recognizes … without changing label templates” | zgodne |
| Opis, akapit 4 | USB 2.0, Ethernet 10/100, 128 MB Flash, 64 MB DRAM; TPH Care wykrywa uszkodzone punkty; TSC Console; głowica bez narzędzi; okienko; gilotyna od dealera | karta; instrukcja 6.3 | zgodne |
| Kluczowe parametry (5) | TT i DT; 203 dpi; do 152 mm/s; do 108 mm; 19–118 mm | karta | zgodne |
| Specyfikacja (37 wierszy) | rozdzielczość, prędkość, szerokość, długość 5–25 400 mm; taśma 300 m/OD 67/1" i 110 m/OD 40/0,5", farba na zewnątrz, 40–110 mm; materiał 19–118 mm, 0,06–0,19 mm, OD 127 mm, gilza 25,4 mm, 4 rodzaje; 4 czujniki; panel; USB 2.0 + Ethernet; 32-bit RISC; 128 MB/64 MB; RTC brak; TSPL-EZD; czcionki; kody 1D i 2D (pozycja po pozycji); obrót; ABS oraz ABS + PC; 211 × 164 × 279 mm; 2,0 kg; zasilanie; warunki pracy i przechowywania; certyfikaty x41; środowisko; gilotyna (dealer); zestaw; gwarancja | karta (kolumna TL241), instrukcja 1.1 („Real Time Clock Not available”, „1” paper core x1, 0.5” paper core x1”) | zgodne |
| „Co jest w kartonie?” (8 pozycji) | jak wiersz „W zestawie” | instrukcja 1.1 i rozdz. 2 | zgodne |
| Zastosowania (4) | półki i inwentaryzacja, wysyłka i przyjęcie towaru, produkty spożywcze, track and trace | karta: Applications | zgodne |
| Wariant | TL241-A001-0002 „TL241, 203 dpi, USB + Ethernet”, Niedostępny, „Powiadom” | API: found, 0 szt., unavailable; cena netto i brutto na stronie = API | zgodne |
| Przyciski | „Powiadom o dostępności”, „Zapytaj o produkt”; brak koszyka dla drukarki | zasada: unavailable = brak koszyka | zgodne |
| FAQ 1: TL241 a TL341 | 203/300 dpi, 152/102 mm/s, 108/105,6 mm, 25 400/11 430 mm; obudowa, interfejsy, pamięć i materiały wspólne; link do TL341 | karta: kolumny TL241 i TL341 | zgodne |
| FAQ 2: taśmy | farba na zewnątrz, 40–110 mm, 300 m/67 mm/1", 110 m/40 mm/0,5"; trzpienie i gilzy w zestawie | karta; instrukcja 1.1 | zgodne |
| FAQ 3: gilotyna | było: pytanie o „obcinarkę”, odpowiedź o gilotynie; „Inne opcje fabryczne … nie są dostępne” (sugeruje, że gilotyna jest opcją fabryczną) | instrukcja: Factory Options Not available, Dealer Options Guillotine cutter (full cut), User Options Not available | **niezgodne → poprawione** (pytanie „gilotynę”, zdanie o braku opcji fabrycznych i montowanych przez użytkownika) |
| FAQ 4: ZPL | TSPL-EZD: ZPL II, ZPL, DPL, EPL, automatyczne przełączanie; zalecenie wydruków testowych | karta | zgodne (zalecenie bez danych liczbowych) |
| FAQ 5: sieć | Ethernet 10/100 i USB 2.0; bez Wi-Fi i Bluetooth; TSC Console po IP, stan, ustawienia, firmware; TPH Care | instrukcja 6.2–6.4; FAQ TSC EMEA (firmware) | zgodne; „wadliwe punkty” zmienione na „uszkodzone punkty”, jak w opisie tej karty (jedna nazwa elementu) |
| FAQ 6: głowica | głowica i wałek bez narzędzi; odłączenie zasilania przed otwarciem pokrywy w celu naprawy; głowica 203 dpi | instrukcja: rozdz. 1 („toolless … printhead and platen roller replacement”), ostrzeżenie „Remove the power from AC inlet before opening the media cover for cleaning or repairing faults” | zgodne |
| FAQ 7: TL240 | bez Ethernetu, 16 MB Flash, bez CE; TL241: Ethernet, 128 MB, CE klasy A | karta: Memory, Interface, Safety Regulation x40/x41 | zgodne |
| FAQ 8: alternatywy | TL341, DL241, ZD421t, PC45t, PC42E-T, TD-4T | — | linki HTTP 200 |
| Alt zdjęć (3) | przód z okienkiem i przyciskiem z diodą; etykieta w szczelinie; otwarta pokrywa z taśmą i rolką | zdjęcia 800 × 800 PNG | zgodne |
| Pliki do pobrania | karta 368 KB, instrukcja 3,5 MB, strona TSC „Online” | HTTP 200; 376 940 B i 3 678 141 B | zgodne |
| JSON-LD Product | nazwa, opis, 3 zdjęcia, model TL241, sku/mpn, waga 2 kg, 7 parametrów, oferta 911.49 PLN OutOfStock; FAQPage 8 pytań; breadcrumb | treść strony, API | zgodne |
| Data aktualizacji | „Aktualizacja: 25 października 2026”, `dateModified` 2026-10-25, choć opis i FAQ napisano od nowa 26.10 | historia commitów (db229d08) | **niezgodne → poprawione** (`updatedAt: '2026-10-26'`) |

## Karta tsc-tl341 („TSC TL341”)

| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Nazwa, H1, title, seoTitle | TSC TL341; drukarka etykiet 4" 300 dpi, termotransfer | karta: TL341, 300 dpi | zgodne |
| Krótki opis, seoDescription | 4", 300 dpi, TT lub DT, do 102 mm/s, zadruk 105,6 mm, Ethernet 10/100 i USB 2.0, emulacja ZPL, PN na końcu | karta: kolumna TL341 | zgodne |
| Opis, akapit 1 | 4", 300 dpi (12 punktów/mm), TT lub DT; handel, transport i logistyka, branża spożywcza | karta: Resolution, Applications | zgodne |
| Opis, akapit 2 | 102 mm/s, 105,6 mm, etykieta 5–11 430 mm, materiał 19–118 mm | karta: kolumna TL341 | zgodne |
| Opis, akapit 3 | wykrywanie języka; EPL, DPL, ZPL, ZPL II w TSPL-EZD; projekty bez przeróbek | karta | zgodne |
| Opis, akapit 4 | USB 2.0, Ethernet 10/100, 128 MB Flash, 64 MB DRAM; TPH Care i TSC Console; głowica i wałek bez narzędzi; okienko; gilotyna od dealera | karta; instrukcja rozdz. 1 | zgodne |
| Kluczowe parametry (5) | TT i DT; 300 dpi; do 102 mm/s; do 105,6 mm; 19–118 mm | karta | zgodne |
| Specyfikacja | wiersze wspólne z TL241 + 300 dpi (12 punktów/mm), do 102 mm/s, do 105,6 mm, 5–11 430 mm | karta: kolumna TL341 (pozostałe wiersze jedna kolumna dla TL240–TL341, Memory/Interface/Safety dla x41) | zgodne |
| „Co jest w kartonie?”, zastosowania | 8 pozycji; 4 zastosowania | instrukcja 1.1, rozdz. 2; karta: Applications | zgodne |
| Wariant | TL341-A001-0002 „TL341, 300 dpi, USB + Ethernet”, Niedostępny, „Powiadom” | API: found, 0 szt., unavailable; cena netto i brutto na stronie = API | zgodne |
| FAQ 1: TL341 a TL241 | 300/203 dpi, 102/152 mm/s, 105,6/108 mm, 11 430/25 400 mm; wymiary, masa, porty, pamięć, materiały wspólne; link do TL241 | karta | zgodne |
| FAQ 2: taśma | 40–110 mm, farba na zewnątrz; 300 m/1"/67 mm, 110 m/0,5"/40 mm; po 2 trzpienie i po 1 gilzie papierowej | karta; instrukcja 1.1 | zgodne |
| FAQ 3: etykiety | 19–118 mm, 0,06–0,19 mm, nawinięcie na zewnątrz, gilza 25,4 mm, OD 127 mm; rodzaje; 5–11 430 mm | karta: Media Type „Continuous, die-cut, black mark, fan-fold” | **niezgodne → poprawione**: „papier z czarnym znacznikiem” zawężał „black mark” do papieru; teraz „materiał z czarnym znacznikiem” |
| FAQ 4: ZPL i EPL | emulacja ZPL, ZPL II, EPL, DPL; automatyczne wykrywanie | karta | zgodne |
| FAQ 5: złącza | USB 2.0 i Ethernet 10/100; bez Wi-Fi i Bluetooth; TSC Console: stan, konfiguracja, firmware | karta; instrukcja rozdz. 6; FAQ TSC EMEA | zgodne |
| FAQ 6: głowica | TPH Care skanuje głowicę; próg ostrzeżenia, strona testowa, Auto Protection domyślnie wyłączona; wymiana bez narzędzi; wyłączenie przed czyszczeniem | instrukcja 6.3 i 8.2 | zgodne |
| FAQ 7: gilotyna | opcja dealera, pełne cięcie; brak opcji fabrycznych i użytkownika | karta: Dealer Options; instrukcja 1.1 | zgodne |
| FAQ 8: TL340 | 300 dpi, bez Ethernetu, 16 MB Flash, bez CE; TL341 Ethernet, 128 MB, CE klasy A; link do DL241 | karta: x40/x41 | zgodne |
| Zdjęcia | 3 pliki PNG 800 × 800 — kopie ujęć TL241 (te same sumy MD5); bez widocznego oznaczenia modelu na obudowie | instrukcja: ta sama obudowa TL240 Series | zgodne |
| Alt zdjęć (3) | opisy własne TL341, zgodne z ujęciami | — | zgodne |
| Pliki do pobrania | jak TL241 | HTTP 200, realne rozmiary | zgodne |
| JSON-LD Product | model TL341, sku/mpn TL341-A001-0002, 300 dpi, 1961.33 PLN OutOfStock, `datePublished`/`dateModified` 2026-10-26; FAQPage 8 | treść strony, API | zgodne |
| Mapa witryny | `/produkt/tsc-tl341` w `sitemap.xml` | — | zgodne |

## Karta tsc-dl241 — tylko linki do TL

| Element | Na stronie | Ocena |
|---|---|---|
| FAQ „Czym TSC DL241 różni się od TL241?” | linki „TSC TL241” → `/produkt/tsc-tl241`, „TSC TL341” → `/produkt/tsc-tl341`; TL341 = 300 dpi, gilotyna do obu TL | zgodne (karta, instrukcja) |
| „Podobne drukarki” | TSC TL241 i TSC TL341 na pierwszych miejscach, ceny = API | zgodne |
| Data aktualizacji | FAQ zmienione 26.10, na stronie 25.10 | **poprawione** (`updatedAt: '2026-10-26'`) |

## Wygląd, kafle, zasady treści

- Kafle: TL241 i TL341 w `/drukarki-etykiet-tsc`, `/biurkowe-drukarki-etykiet`, `/termotransferowe-drukarki-etykiet` (oraz `/termiczne-drukarki-etykiet`, decyzja V5); DL241 w `/termiczne-drukarki-etykiet`, nie w termotransferowych. Pole zdjęcia 299 × 224 px, `object-contain`, jak Zebra ZD421t i Honeywell PC45d; produkt w kaflu TL341 = TL241 (ten sam plik).
- Górna część karty: zdjęcie 584 × 584 px, miniatury 80 × 80 px, H1 w tym samym miejscu co Honeywell PC45t; układ ceny, przycisków i „Co jest w kartonie?” jak w PC45t i ZD421t.
- Tabela wariantów (po „Pokaż niedostępne warianty”): bez poziomego przewijania przy 1440, 1280 i 1024 px (szerokość tabeli = szerokość kontenera); przy 390 px widok kart, strona bez przewijania w poziomie.
- Zasady treści: brak cen w treści, superlatyw, formy „Ty”, notatek o źródłach i słowa „autoryzowany” w kartach TL; unikalność (6-gramy) `description`, `shortDescription`, `seoDescription`, `faq`: 0 par z powtórzeniami (także po poprawkach). Opisy: TL241 152 słowa, TL341 179 słów.

## Poprawki w tym commicie (`src/data/tsc-tl-dl-products.ts`)

1. TL241 FAQ 3: pytanie „Czy do TL241 można zamontować gilotynę?”; zdanie „Inne opcje fabryczne i opcje montowane przez użytkownika nie są dostępne” zastąpione zdaniem „TSC nie przewiduje dla TL241 opcji fabrycznych ani zestawów montowanych przez użytkownika” (gilotyna jest opcją dealera, nie fabryczną).
2. TL241 FAQ 5: „wadliwe punkty” → „uszkodzone punkty” (ta sama nazwa co w opisie karty).
3. TL341 FAQ 3: „papier z czarnym znacznikiem” → „materiał z czarnym znacznikiem” (karta: „black mark”, bez ograniczenia do papieru).
4. TL241 i DL241: `updatedAt: '2026-10-26'` — data „Aktualizacja” i `dateModified` zgodne ze zmianą treści 26.10.

## Uwagi poza zakresem kart (bez zmian, do decyzji)

- **Etykiety na gilzie 76 mm w sekcjach materiałów kart biurkowych.** Sekcja „Etykiety termiczne” (`PrinterCompatibleLabels`, lista `DEFAULT_VARIANTS`) pokazuje na TL241, TL341 i DL241 rolki Zebra Z-Perform 1000D 3002908, 3002654, 3007096-T, 3005807, 3004996 i 3009508 — wszystkie na gilzie 76 mm (atrybut wariantu lub `label-core.ts`). Seria TL/DL przyjmuje gilzę 25,4 mm i rolkę do 127 mm. Komponent nie ma filtra gilzy, więc dotyczy to też innych drukarek biurkowych DT (np. ZD421d, PC45d). Sekcja „Etykiety foliowe termotransferowe” (`PrinterMaterialVariants`) pokazuje Z-Ultimate 3000T 880350-…/880386-…/880380-076 — w `label-core.ts` gilza 76 mm, ale filtr `requiredCore` czyta tylko atrybuty wariantu, a te warianty atrybutu gilzy nie mają; to samo widać na ZD421t i PC45t. Propozycja: filtr gilzy w `PrinterCompatibleLabels` i rezerwowe odczytanie `LABEL_CORE` w obu komponentach.
- Wspólne teksty komponentów z formą „Ty” („dokupujesz osobno”, „Potrzebujesz serwisu TSC?”, „Planujesz zakup większej ilości?”) występują na wszystkich kartach drukarek — bez zmian.
