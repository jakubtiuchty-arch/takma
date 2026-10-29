# Kontrola V7 po wdrożeniu: Unitech EA660, EA530, EA530 UHF, 26 akcesoriów, RP300, adaptery, RP902, `/terminale-unitech` (29–30.10.2026)

Sprawdzono strony produkcyjne https://www.takma.com.pl (wdrożenie z commita b6060737), a nie dokumentację agentów. Gałąź poprawek: `weryfikacja/unitech-v7` z `origin/claude/takma-frontend-build-RrM9E` (b6060737).

Skróty źródeł: **DS660** = `EA660_RevU_A15.pdf` (08/26 Rev.U), **DS530** = `EA530_RevC_EN.pdf` (09/26 Rev.C), **DS530UHF** = `EA530UHF_RevC.pdf` (06/26 Rev.C), **UM660** / **UM530** = instrukcje obsługi (V1.4 / V1.0), **ACC660** / **ACC530** = przewodniki akcesoriów (09.2026), **ARK660** / **ARK530** = arkusze akcesoriów z ute.com, **QSG-…** = skrócone instrukcje akcesoriów, **DS-RP300** (07/26 Rev.D), **QSG-RP300** (V1.4), **ACC-RP300** (05.2026), **DS-RP902** (04/23 Rev.C), **QSG-RP902** (V1.6), **WWW** = strony produktów ute.com (gwarancja 12 mies.).

## Metoda

1. Playwright na produkcji (`wait_until='load'` + 3 s, odrzucenie zgód): 33 karty i strony `/terminale-unitech`, `/terminale-rfid`. Rozwinięte „Pokaż niedostępne warianty”, „Pokaż wszystkie” w specyfikacji, „Co jest w kartonie?”, FAQ, „Pokaż pozostałe”; dymki odczytane po najechaniu. Zapis: `scratchpad/ute/weryfikacja-V7/strony/`.
2. Skrypt porównał każde zdanie opisu, każdy wiersz specyfikacji, FAQ i alt zdjęć z danymi źródłowymi: tekst produkcji = dane z b6060737 (różni się tylko `shortDescription`, którego karta nie wyświetla, i blok „Wymagane”, który strona pokazuje jako osobną ramkę). Zdania porównano z dokumentami ręcznie.
3. Ceny i dostępność: produkcyjne `/api/stock`, 2 wywołania po 38 PN, wyniki identyczne (zapisane tylko ceny sprzedaży, stany, dostępność).
4. Pliki do pobrania (21), linki wewnętrzne (92), filtry (logika `FilterableProductGrid` na danych), układ przy 1440/1280/1024/390 px, zdjęcia (arkusz 47 zdjęć, powiększenia portów stacji, stacji dokującej i RP902).

## Wyniki per karta

Status: **Z** = zgodne, **N** = niezgodne (poprawione na gałęzi), **U** = uwaga bez zmiany.

### Terminale

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| unitech-ea660 | Ekran, procesor, pamięć, skaner, NFC, aparaty, Wi-Fi, GNSS, złącza, przyciski, audio, bateria, IP, upadki i bęben, 3 temperatury, wymiary, masa, MDM, zestaw | 24 wiersze specyfikacji | DS660 „Specifications”, UM660 1.1 i tabele „5G Ver. only” | Z |
| unitech-ea660 | Opis, akapit 2 | „Producent przeznacza go do pracy z bliska i z daleka…” | DS660 „Premier Barcode Reading Distance” | N (styl: przypisanie producentowi) → „Ten silnik odczytuje kody z bliska i z daleka, co ułatwia pracę w handlu i logistyce.” |
| unitech-ea660 | Blok „Wymagane” | „ładuje terminal do pełna w 4 godziny” | UM660 1.4.3 „within 4 hours” | N → „w ciągu 4 godzin” |
| unitech-ea660 | Warianty, dymki „Łączność” i „Skaner”, FAQ ×8, zastosowania | 4 PN, 2 dymki | DS660, UM660 (WWAN/GPS/SIM „5G Ver. only”), DS660 „Software Solution” (FOTA, OTA ZIP) | Z |
| unitech-ea660 | Cena, dostępność, JSON-LD | 4 × on-order („W drodze”), „Niedostępny”, bez koszyka; JSON-LD OutOfStock, cena brutto = API × 1,23 | API | Z (on-order wyświetla się jako „Niedostępny” w całym sklepie) |
| unitech-ea660 | Zdjęcia ×3 i alt | przód, tył z pogo, przód pod kątem | zdjęcia | Z |
| unitech-ea530 | Specyfikacja (25 wierszy), warianty, dymek, zastosowania | — | DS530, UM530 („4G Ver. Only”, rozdz. 1.1) | Z |
| unitech-ea530 | Opis, akapit 4 | „…producent przewiduje współpracę z czytnikiem Unitech RP300” | DS530 „compatible with the RP300” | N (styl) → „Znaczniki UHF z odległości do 25 m terminal odczytuje razem z czytnikiem Unitech RP300.” |
| unitech-ea530 | Opis, akapit 5 | „Producent kieruje EA530 do handlu i logistyki…” | DS530 s. 1 | N (styl) → „EA530 jest przeznaczony do handlu i logistyki…” |
| unitech-ea530 | FAQ „Czy wersja tylko z Wi-Fi ma GPS i SIM?” | „gniazda eSIM i nano SIM” | DS530 „1 eSIM, 1 Nano SIM” (eSIM to nie gniazdo) | N → „Moduł 4G, GPS, eSIM i gniazdo nano SIM…” |
| unitech-ea530 | FAQ „Jak ładować” | „do pełna w 4 godziny” | UM530 „within 4 hours” | N → „w ciągu 4 godzin” |
| unitech-ea530 | Cena, dostępność, JSON-LD | 2 PN dostępne (EU 54 / 318), koszyk | API | Z |
| unitech-ea530-uhf | Specyfikacja, FAQ ×8 (pasmo, 1,8 m, TagAccess z GTIN z aparatu, brak warm swap, Wi-Fi tylko w Japonii, NFC, uchwyt) | — | DS530UHF, UM530 2.1 i przypis „UHF Wi-Fi Version… only in Japan” | Z |
| unitech-ea530-uhf | Opis, akapit 2 | „Producent przeznacza je do inwentaryzacji…” | DS530UHF | N (styl) → „Są przeznaczone do inwentaryzacji…” |
| unitech-ea530-uhf | Filtr „Sieć komórkowa” na `/terminale-unitech` i `/terminale-mobilne` | „Tylko Wi-Fi” liczył EA530 UHF (licznik 3 zamiast 2) | Jedyny PN EA530-YALFTM3G ma 4G LTE | N → osobny wiersz specyfikacji „SIM: eSIM i gniazdo nano SIM” (reguła `notSpecs: ['WWAN', 'SIM']`); EA530 UHF tylko w „Wi-Fi + LTE/5G” |
| unitech-ea530-uhf | Zdjęcia | te same pliki co EA530 (identyczne MD5) | obudowa identyczna (DS530UHF) | U (znane z audytu 1) |

### Akcesoria EA (26)

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| Wszystkie 26 | PN, nazwa, zgodność z EA660 / EA530 / EA530 UHF, zawartość zestawu, bloki „Wymagane” | — | ACC660, ACC530, ARK660/530, QSG | Z |
| Wszystkie 26 | Cena i dostępność | `priceFrom`/`availability` = API (2 wywołania); 5500-900115G on-order bez koszyka; 8 PN niedostępnych bez koszyka | API | Z |
| Wszystkie 26 | JSON-LD | cena brutto = API × 1,23, InStock/OutOfStock zgodnie ze statusem | — | Z |
| Wszystkie 26 | Pliki do pobrania | 200, rozmiary = pliki oficjalne (1,6 / 1,8 MB, 967 / 808 / 790 / 928 / 752 / 621 / 532 / 799 KB) | `scratchpad/ute/oficjalne/` (te same bajty) | Z |
| unitech-ea-stacja-1-slot | Wymagania dla zasilacza zastępczego | „obsługiwać napięcia 5 V / 3 A, 9 V / 2 A lub 12 V / 1,5 A” | QSG-1S Charging V1.1: „Support 5V/3A, 9V/2A, and 12V/1.5A segment charging” | N → „obsługiwać ładowanie 5 V / 3 A, 9 V / 2 A i 12 V / 1,5 A” |
| unitech-ea-stacja-1-slot-usb | Opis portów | „Pierwszy (Charging Port) służy do zasilania, a drugi jest portem danych.” | QSG-1S USB/Ethernet „USB-C Charging Port”, „USB-C Port”; na zdjęciu symbole zasilania i USB | N (angielska etykieta z instrukcji) → „Port oznaczony symbolem zasilania doprowadza zasilanie, a port z symbolem USB przesyła dane.” |
| unitech-ea-stacja-1-slot-usb / -ethernet | Porty z tyłu na zdjęciu | 2 × USB-C / USB-C, Ethernet, USB-A, USB-C | QSG-1S USB/Ethernet „Rear View” | Z |
| unitech-ea660-ladowarka-baterii | Blok „Wymagane” | „Zasilacz ładowarki ma gniazdo DC” | QSG-EA660 4S Battery Charger „Product View”: DC Power Port jest w ładowarce | N → „Wtyk zasilacza wchodzi do gniazda DC ładowarki…” |
| unitech-ea660-stacja-4-4 | Opis | „Dla EA530 Unitech przewiduje osobną stację tego typu.” | ACC530 (5000-900154G) | N (styl) → „Do EA530 służy osobna stacja tego typu.” |
| unitech-ea-uchwyt-samochodowy | Opis | „Podstawa jest obrotowa.” powtarzało zdanie o obrotowej podstawie | ACC660/530 s. 7 | N (powtórzenie) → zdanie usunięte |
| unitech-ea660-szklo-ochronne, unitech-ea530-szklo-ochronne | Opis | `6"` | zapis na kartach terminali `6″` | N (styl) → `6″` |
| unitech-ea-stacja-dokujaca | Złącza i alt | HDMI, Ethernet, 4 × USB, DC; zdjęcie tyłu: USB, Ethernet, DC, 3 × USB z boku | QSG-Docking V1.2 „Product View” (③ USB, ⑥ USB ×3, ⑦ HDMI na boku) | Z |
| unitech-ea-stacja-5-slot-ethernet | Zdjęcie | ten sam plik co 5000-900132G (identyczne MD5); z przodu nie widać diody Ethernet | QSG-5S „Dual-Color Ethernet Status LED” | U (alt prawdziwy, brak osobnego zdjęcia wersji Ethernet) |
| unitech-ea-zasilacz-usb-c-eu | PN zasilacza EU dla EA660 | 1010-900074G | ACC660: 1010-900062G; ACC530 i ARK660: 1010-900074G | U (A15 z audytu 1, decyzja właściciela) |
| unitech-ea-pasek-na-dlon, unitech-ea660-bateria | „Przed wymianą baterii zdejmuje się klips paska”, „bez narzędzi”, „bez naklejek w komorze” | — | UM660 1.4, UM530 (NOTE) | Z |
| Pozostałe akcesoria | Opisy, specyfikacje, alt (każde zdjęcie obejrzane) | — | ACC/QSG, zdjęcia | Z |

### RP300, adaptery, RP902

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| unitech-rp300 | Impinj E710, Gen2X, 25 m, 7000 mAh, BT 5.3 SPP/HID/iAP2, NFC, IP65, 1,5 m, −20…+50°C, 172,02 × 81 × 156,36 mm, 564 g, zestaw (bateria, smycz, 5 znaczników, karta QR), ładowanie terminala Android, bez ładowania iOS | — | DS-RP300, QSG-RP300 | Z |
| unitech-rp300 | Forma 2. osoby w opisie i FAQ | „Wybierz go”, „sprawdź”, „Nie stosuj”, „dobierz”, „zamów”, „Możesz”, „możesz wykorzystać”, „porównaj”, „znajdziesz”, „sprawdź drukarki” | standard języka TAKMA | N → formy bezosobowe (9 zdań opisu, 2 odpowiedzi FAQ) |
| unitech-rp300-adapter-ea660 | Opis | „Dobierz go…”, „Montaż wykonaj według instrukcji RP300.” | QSG-RP300 „Installing and Removing the EA660”, ACC-RP300 s. 3 | N → bezosobowo; dopisane kroki montażu z QSG (styki pogo po zdjęciu górnej pokrywy, 4 śruby w narożnikach, port USB-C terminala do złącza adaptera, górny element na 2 śruby) i link do adaptera EA530 |
| unitech-rp300-adapter-ea660, -ea530 | Alt | „— widok produktu” | zdjęcia: adapter + górny / dolny element mocujący + śruby | N → alt opisowy |
| unitech-rp300-adapter-ea530 | Zestaw, folia przed montażem | — | ACC-RP300 s. 3, QSG-RP300 | Z |
| unitech-rp902 | EPC C1G2 / ISO 18000-6C, 2 m, 27 dBm, antena liniowa, BT 5.0 HID/SPP/BLE, 0,96″, 3 przyciski, 1150 mAh 3,7 V, IP65, 1,2 m, −10…+50°C, 109 × 51 × 28 mm, 106 g, zestaw | — | DS-RP902, QSG-RP902 | Z |
| unitech-rp902 | Współpraca z EA660/EA530 | „Odczyty z RP902 może przyjmować także terminal Unitech EA660 lub EA530…” | ARK660, ARK530 | Z |
| unitech-rp902 | Forma 2. osoby | „sprawdź”, „dobierz”, „wykorzystaj”, „dobierz osobno”, „Jeśli chcesz… wybierz”, „możesz wykorzystać”, „Wybierz RP902”, „znajdziesz”, FAQ „potrzebujesz” | standard języka TAKMA | N → formy bezosobowe |
| unitech-rp902 | Alt zdjęcia 1 | „— widok produktu” | zdjęcie: przód z wyświetlaczem i przyciskami | N → „widok z przodu: wyświetlacz 0,96 cala i przyciski” |
| RP300, adaptery, RP902 | Ceny, JSON-LD | strona i JSON-LD pokazują cenę z API (np. RP300 2316,56 zł netto); `priceFrom` w danych sprzed 29.10 (np. 2304,17) to tylko wartość startowa | API | U (logika cen bez zmian) |
| RP300, RP902 | `shortDescription`/`seoDescription` | wezwania „Porównaj…”, „Sprawdź cenę…” | — | U (metadane, bez zmian) |

### Strony kategorii

| Strona | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| /terminale-unitech | Definicja, tabela modeli, „Jak wybrać”, „Co sprawdzić” | — | DS660, DS530, DS530UHF, QSG stacji | Z |
| /terminale-unitech | „Handel i gastronomia” | „EA660 i EA530 sprawdzają stany, przyjmują zamówienia…” (gastronomia także dla EA530) | DS660: retail, hospitality, logistics, healthcare; DS530: retail, logistics | N → gastronomia, hotelarstwo i zamówienia tylko przy EA660 |
| /terminale-unitech | „EA660 czy EA530?” | „EA530 ma… modem 4G LTE” | EA530-NA6CUM3G jest tylko z Wi-Fi | N → „wersję z modemem 4G LTE” |
| /terminale-unitech | „EA530 czy EA530 UHF?” | „EA530… współpracuje z czytnikiem RP300” (sugeruje, że UHF nie) | DS530UHF: „compatible with the RP300… up to 25 meters” | N → oba modele z RP300 do 25 m; EA530 odczytuje UHF tylko z RP300 |
| /terminale-unitech | FAQ 5G/4G | „EA530 i EA530 UHF mają modem 4G LTE” | jw. | N → „Modem 4G LTE ma EA530 w wersji 4G oraz EA530 UHF.” |
| /terminale-unitech | FAQ zasilacz | „do pełna w 4 godziny” | UM660/UM530 „within 4 hours” | N → „w ciągu 4 godzin” |
| /terminale-unitech | Filtry | Sieć: „Tylko Wi-Fi 3” (błąd, patrz EA530 UHF); Skaner: standardowy 3, daleki 1; IP65/IP68: 3/3; Mroźnia: brak EA; Wi-Fi 5: brak EA | DS | N (Sieć, poprawione) / Z |
| /terminale-unitech, /terminale-mobilne | Filtr „Odporność na upadki 1,8 m” | wszystkie 3 terminale (1,8 m w etui) | DS: 1,5 m, 1,8 m w etui | U (ta sama konwencja co Bluebird i inne karty „1,8 m z bootem”) |
| /terminale-mobilne | Producent | 3 terminale EA w „Unitech”; RP300 i RP902 poza siatką | — | Z |
| /terminale-rfid | Opis EA530 UHF | „Impinj E310… do 1,8 m, skaner 1D/2D i modem 4G LTE” | DS530UHF | Z |
| /terminale-rfid | Filtry | „Producent” ma tylko wartość Zebra; „Łączność komórkowa” nie obejmuje EA530 UHF (ani Bluebird S10 RFID, Newland MT93) | — | U (definicja w `category-filters.ts`, poza zakresem kart EA) |

## Kontrola techniczna (produkcja)

- 35 stron: 200. Linki wewnętrzne z tych stron: 92, wszystkie 200. Pliki do pobrania: 21, wszystkie 200, rozmiary zgodne z deklarowanymi.
- Przewijanie poziome: brak na 33 kartach przy 390 px oraz na EA660, EA530, EA530 UHF, RP300 przy 1440/1280/1024 px. Tabela wariantów po „Pokaż niedostępne warianty”: scrollWidth = clientWidth (1216 / 1216 / 960 / 358).
- Akcesoria na kartach terminali: 4 zdjęcia 286 × 215 px, „Pokaż pozostałe” → 21 / 19 / 18, „Zwiń” → 4.
- Kafle `/terminale-unitech`: 299 × 224 px, tak samo jak `/terminale-bluebird` i `/terminale-cipherlab`.
- API: 2 wywołania po 38 PN, wyniki identyczne; `priceFrom` i `availability` kart EA i 26 akcesoriów = API.
- Zrzuty: `scratchpad/ute/weryfikacja-V7/zrzuty/`, teksty stron: `strony/`, arkusz zdjęć: `arkusz-zdjec.jpg`.

## Poprawki na gałęzi `weryfikacja/unitech-v7`

1. `unitech-terminal-products.ts`: EA660 (2), EA530 (4), EA530 UHF (opis + wiersz „SIM” dla filtra).
2. `unitech-terminal-accessories.ts`: stacja 1-slot, stacja USB, ładowarka EA660, stacja 4+4, uchwyt samochodowy, szkła EA660 i EA530.
3. `unitech-category.ts`: FAQ ×2, „Handel i gastronomia”, porównania ×2.
4. `unitech-rp300-products.ts`: RP300 (forma bezosobowa), adapter EA660 (opis i alt), adapter EA530 (alt).
5. `unitech-rp902-products.ts`: forma bezosobowa, alt zdjęcia 1.

Bez zmian logiki cen i dostępności. Unikalność (`porownaj-opisy.py`, pola description, shortDescription, seoDescription, faq): bez nowych par; w opisach 68 par zamiast 71 (pozostały listy nazw modeli „Unitech EA530 i Unitech EA530 UHF”).

## Do decyzji właściciela

1. Zasilacz EU dla EA660: 1010-900074G w ofercie, ACC660 podaje 1010-900062G (jak w audycie 1, A15).
2. Pasmo UHF EA530-YALFTM3G: karta prosi o kontakt przed zamówieniem (jak w audycie 1).
3. Filtry `/terminale-rfid`: dodać producentów Unitech, Bluebird, Newland i objąć ich modele filtrem łączności.
4. Osobne zdjęcie stacji 5-gniazdowej z Ethernetem (5000-900134G), jeśli Unitech je udostępni.
