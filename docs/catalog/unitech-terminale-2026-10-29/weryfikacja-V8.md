# Kontrola V8 po wdrożeniu: Unitech HT730 Plus, HT330, RT112, RT112 Windows, TB170 Plus, 45 akcesoriów, dopiski EA / RP300 / RP902, `/terminale-unitech`, `/tablety-unitech` (30.10.2026)

Sprawdzono strony produkcyjne https://www.takma.com.pl (wdrożenie z commita 6e7f5b5a), a nie dokumentację agentów i audytów (`U3.md`, `U4.md`, `audyt-2.md`). Gałąź poprawek: `weryfikacja/unitech-v8` z `origin/claude/takma-frontend-build-RrM9E` (6e7f5b5a).

Skróty źródeł (pliki w `scratchpad/ute2/oficjalne/` i `scratchpad/ute3/oficjalne/`):

- HT: **DS730** = `HT730Plus_Brochure_RevC_EN` (06/25 Rev.C, wersja 5G), **DS730W** = `HT730PlusWiFi_Brochure_RevC2_EN`, **UM730-29/38/47** = instrukcje HT730 Plus 29/38/47 klawiszy (V1.3 / V1.3 / V1.0), **ACC730** = `HT730Plus_Accessories_202607`, **DS330** = `HT330_Brochure_RevE_EN` (11/25), **DS330W** = `HT330WiFi_Brochure_RevG_EN`, **UM330** / **UM330W** = instrukcje HT330 (V1.8 / V1.9), **FAQ330** / **FAQ330W**, **ACC330** = `HT330_Accessories_20230801`, **QSG-…** = skrócone instrukcje stacji, ładowarek, uchwytów, etui i paska.
- Tablety: **DS-A5G**, **DS-AW** (RT112 Android 5G Rev.T / Wi-Fi Rev.S), **DS-W5G**, **DS-WW** (RT112 Windows 5G Rev.C / Wi-Fi Rev.B), **DS-T** (TB170 Plus Rev.D), **UM-A** (RT112 Series V2.0), **UM-W** (RT112 Windows V1.0), **UM-T** (TB170 Plus V1.1), **ACC-A** / **ACC-W** (katalogi akcesoriów RT112 2026/03 i RT112 Windows 2026/04), QSG i FAQ.
- **WWW** = strony produktów i arkusze akcesoriów ute.com (gwarancja 12 mies., „9H” szkła HT730 Plus, zgodność RP902 z HT). Konfiguracje PN: **ERS** (UK), **KL** (koncept-l.pl), **BF** (Barcode Factory), **Levata**, **AA** (Advanced Automation).

## Metoda

1. Playwright na produkcji (`wait_until='load'` + 3 s, odrzucenie zgód): 63 strony (5 kart głównych, 45 akcesoriów, 5 kart EA, 2 karty RP300, 3 karty RP902, `/terminale-unitech`, `/tablety-unitech`, `/terminale-mobilne`, `/tablety-przemyslowe`). Rozwinięte „Pokaż niedostępne warianty”, „Pokaż pozostałe”, akordeony i FAQ; dymki odczytane po najechaniu. Zapis: `scratchpad/ute/weryfikacja-V8/strony/`.
2. Skrypt `tools/zgodnosc.mts` porównał każde zdanie opisu, wiersz specyfikacji, FAQ, PN wariantów, nazwy plików i alt zdjęć z danymi z 6e7f5b5a: tekst produkcji = dane (różni się tylko blok „Wymagane”, który strona pokazuje jako osobną ramkę; jego zdania sprawdzono ręcznie). Zdania porównano z dokumentami ręcznie.
3. Ceny i dostępność: produkcyjne `/api/stock`, 2 przebiegi po 78 PN (paczki po 40), wyniki identyczne; zapisane tylko ceny sprzedaży, stany i dostępność.
4. Pliki do pobrania (HT: 20, tablety: 18), linki wewnętrzne (HT, EA, RP i strony kategorii: 245; tablety: 84), filtry (logika `FilterableProductGrid` na danych i liczniki na produkcji), układ przy 1440/1280/1024/390 px, zdjęcia (arkusz 33 zdjęć HT i RP902, powiększenie klawiatury, kadry głównych zdjęć).

Status: **Z** = zgodne, **N** = niezgodne (poprawione na gałęzi), **U** = uwaga bez zmiany.

## HT730 Plus i HT330

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| unitech-ht730-plus | System, procesor, pamięć, ekran (400 nitów, rękawice ≤ 4 mm, mokry ekran, rysik 3 mm), klawiatura 29/38/47 + spusty L/R, skaner (pochylenie 30°, 32 m, DotCode, pocztowe, OCR-A/B, E13B), NFC, aparat 16 MP + ARCore, WLAN 6E (WPA3/WPA2, praca tylko w pomieszczeniach w 5150–5350 i 5945–6425 MHz), 5G/LTE/3G/2G z głosem, micro SIM + eSIM, BT 5.2, GNSS L1 + L5, złącza, audio 2 W / 105 dB, bateria 3,6 V 6700 mAh i 1 min bez baterii, IP65/IP67, 1,8 / 2,4 m, 3 temperatury, 195 × 72 × 34 mm, 395 g, MDM, zestaw, gwarancja | 26 wierszy specyfikacji | DS730, DS730W, UM730-29 rozdz. 1.1, 1.4 (tabela „5G Ver. Only”, symbologie, uwaga o pasmach), WWW | Z |
| unitech-ht730-plus | 47 klawiszy tylko z Wi-Fi | opis, dymek, FAQ | UM730-47 bez WWAN/SIM/GPS; ERS i KL: HT730-LJ6142BG „Wi-Fi only, 47 keys” | Z |
| unitech-ht730-plus | Opis (5 akapitów), blok „Wymagane”, zastosowania | „2nd Gen”, Android 14 → 16, GMS i AER, chłodnie / żywność / farmacja, eSIM, zestaw bez przewodu USB-C i zasilacza, stacja 1-gniazdowa z zasilaczem bez przewodu | DS730 s. 1, UM730 1.1, QSG-1S HT730 V1.2, WWW („HT730 Plus (2nd Gen)”) | Z |
| unitech-ht730-plus | 11 wariantów i atrybuty | N/L = silnik standardowy / daleki, J/H = bez / z grzałką, 6/N = Wi-Fi / 5G, 22/U2/42 = 29/38/47 klawiszy | ERS (wszystkie 11 PN), KL (LJ6122BG, LJ61U2BG, LJ6142BG, LJN122BG oraz ten sam wzorzec liter dla NJ/NJN), BF (NJ6122BG, NJ61U2BG, LJ61U2BG) | Z (NH6122BG, NH61U2BG, NJN122BG, NJN1U2BG, LJN1U2BG wprost tylko ERS; wzorzec liter potwierdzony u KL) |
| unitech-ht730-plus | Dymki ×3, FAQ ×8 | eSIM przez Wi-Fi kodem QR, P1 i KeyRemap PROG_1, zalecane oryginalne przewód i zasilacz, uchwyt do wersji z grzałką, osobne osłony do silników | DS730, UM730-29 1.3 i 1.5.3, ACC730, WWW | Z |
| unitech-ht730-plus | Zdjęcia ×4 i alt | przód 29 klawiszy, kąt z bocznym spustem, tył z etykietą lasera, 3 układy klawiatury | zdjęcia | Z (4. zdjęcie: trzy terminale małe w kadrze, to zdjęcie poglądowe, nie główne) |
| unitech-ht330 | Specyfikacja (25 wierszy) | Android 12 GMS, 8 rdzeni 2 GHz, 3/32 GB, microSD 256 GB, 4″ 450 nitów, 32 klawisze, SE4710 / CM30 (25°), 13 MP PDAF + 5 MP (4G), Wi-Fi 802.11 a/b/g/n/ac/d/e/h/i/j/k/r/v, LTE FDD/TDD, 3G, 2G, 2 × nano SIM (4G), BT 5, GNSS w obu wersjach, USB-C 2.0 z OTG, pogo z tyłu i na dole, 1 W / 90 dB, 2 lub 1 mikrofon, 3,85 V 5200 mAh > 20 h, 4,5 h, IP67, 1,5 / 1,8 m, 600 × 0,5 m, −20…+60°C, −40…+70°C, 0…45°C, 185 × 70 × 23,8 mm, 295 g, MDM, zestaw | DS330, DS330W (brak przedniego aparatu i WWAN, jeden mikrofon, GPS jest), UM330 1.1 i 1.3, FAQ330 (25°), FAQ330W (CM30, Code 39 / Codabar min. 4) | Z |
| unitech-ht330 | Opis, „Wymagane”, FAQ ×7, dymki ×2 | pierwsze ładowanie, Battery Care 80/50%, rysik tylko w Glove Mode, pokrywa stacji przy etui i uchwycie, zasilacz 5 V / 2 A osobno | UM330 1.1 i 1.5, FAQ330, QSG-1S HT330 V1.3, ACC330 | Z |
| unitech-ht330 | Warianty | NAL2UM3G = Wi-Fi + 4G LTE, SE4710; QA62UM3G = tylko Wi-Fi, CM30 (Newland) | ERS, AA, Levata, KL; FAQ330W | Z; U: AA oznacza oba PN `…UM3G` jako EOL („refer to …TM3G”), PN `…TM3G` nie ma w API (znane z analizy) |
| unitech-ht330 | Zdjęcia ×4 i alt | przód, kąt, tył z aparatem i pogo, góra z oknem skanera | zdjęcia | Z |
| HT730 Plus, HT330 | Cena, dostępność, JSON-LD | ProductGroup, 11 i 2 oferty; cena brutto = API × 1,23; InStock tylko PN dostępne; HT730-NJ6122BG i -LJ6142BG on-order („W drodze: 12 / 1”, „Niedostępny”, „Powiadom”) | API: on-order = towar w dostawie (12 i 1 szt.), 0 szt. = unavailable | Z |

## Akcesoria HT (22)

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| Wszystkie 22 | PN, nazwa, zgodność z HT730 Plus / HT730 Plus UHF / HT330, zawartość opakowań, bloki „Wymagane” (przewód 1550-602333G) | — | ACC730, ACC330, WWW (arkusze akcesoriów), QSG | Z |
| Wszystkie 22 | Cena, dostępność, JSON-LD | `priceFrom` / `availability` = API; 1400-900067G on-order (22 szt. w dostawie); 13 PN niedostępnych bez koszyka; cena brutto w JSON-LD | API | Z |
| Wszystkie 22 | Pliki do pobrania (20 unikalnych) | 200; rozmiary deklarowane = realne (np. 1,8 MB = 1 914 450 B, 541 KB = 553 684 B) | bajty identyczne z plikami Unitech | Z |
| Wszystkie 22 | Alt zdjęć (31 zdjęć obejrzanych) | — | zdjęcia (szkło 5400-900069G: policzone 38 klawiszy) | Z |
| unitech-ht730-plus-stacja-1-slot / -usb / -ethernet | Gniazdo terminala i baterii, bateria pod kątem 45°, diody (niebieska stacji; czerwona / niebieska baterii; czerwona / zielona terminala), terminal w dolnej osłonie lub etui, porty (DC, USB-C, RJ45 lub USB 2.0), zasilacz 5 V / 6 A bez przewodu | — | QSG-1S HT730 V1.2 | Z |
| unitech-ht730-plus-stacja-4-slot / -ethernet, -ladowarka-baterii | Dwa sposoby ładowania z osłoną, zdejmowanie części kciukami, diody, porty LAN / WAN / zasilanie, zasilacz 12 V / 5 A, Cradle Hook | — | QSG-4S Cradle V1.3, QSG-4S Battery Charger V1.3 | Z |
| unitech-ht730-plus-uchwyt-pistoletowy | Zestaw, 4 śruby, pokrywa na haki, pasek przez otwory, demontaż | — | QSG Gun Grip V1.2, ACC730 („for cold storage/heater version”) | Z |
| unitech-ht730-plus-bateria | Wymiana bez narzędzi, zatrzask z obu stron, klips paska, naklejki w gnieździe | — | UM730-29 1.5 | Z |
| unitech-ht730-plus-szklo-ochronne | 9H, 10 szt. | — | WWW („9H Glass Screen Protector … 10pcs”) | Z |
| unitech-ht730-plus-szklo-ochronne | Ekran terminala | „…rękawice o grubości do 4 mm, mokre dłonie i rysik 3 mm” | DS730 „support wet resistance”; karta terminala: „mokrego ekranu” | N → „mokry ekran” |
| unitech-ht730-plus-oslona-standardowa / -dalekiego-zasiegu | Osłony zgodne z niskimi temperaturami, NJ/NH i LJ, 1,8 / 2,4 m | — | ACC730 („Low-Temp Compatible Bumper for Standard / Long Range Scan Engine”), DS730 | Z |
| unitech-ht330-stacja-1-slot / -usb, -zasilacz-stacji | Pokrywa (zdejmowanie, kliknięcie, strzałki), etui lub uchwyt bez pokrywy, diody, wkręt ≤ 3,0 mm, 12 V / 2 A 1010-900052G, przewody US/EU/UK opcjonalne | — | QSG-1S HT330 V1.3, FAQ330 | Z |
| unitech-ht330-ladowarka-baterii | Bateria nazwą i paskiem do góry, diody (zielona zasilania, czerwona / zielona / brak), zasilacz 12 V / 5 A 3-pin | — | QSG-4S HT330 V1.0, ACC330 | Z |
| unitech-ht330-etui, -uchwyt-pistoletowy, -pasek-na-dlon, -szklo-ochronne, -bateria | Montaż i demontaż, 1,8 / 1,5 m, pogo z tyłu, regulacja paska w 3 krokach, 386239G / 381357G / 5400-900040G, 401639G, 24 h przed pierwszym użyciem | — | QSG Boot Case, Gun Grip, Hand Strap V1.0; ACC330; WWW („Hand strap kit – set includes bracket, screws and hand strap”); UM330 | Z |
| unitech-rysik-z-linka | Rysik 3 mm w HT730 Plus, Glove Mode w HT330 | — | DS730, FAQ330 | Z |

## Dopiski HT i tabletów w kartach EA, RP300, RP902

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| unitech-ea-zasilacz-usb-c-eu (1010-900074G) | HT730 Plus bez zasilacza i przewodu, potrzebny też 1550-905908G | — | ACC730 („Adapter (US/EU/UK) for Terminal PN#1010-900074G EU”), UM730 1.1 | Z |
| unitech-ea-przewod-usb-c (1550-905908G) | Przewód USB 3.0 typ C do HT730 Plus kupowany osobno | — | ACC730, UM730 1.1 („Optional accessories: USB Type-C Cable”) | Z |
| unitech-ea-zasilacz-stacji-dokujacej (1010-900043G) | 5 V / 6 A do stacji 1-gniazdowych HT730 Plus 5000-900139G / -140G / -141G | — | ACC730 s. 4, QSG-1S HT730 | Z |
| unitech-ea-zasilacz-12v-5a (1010-900068G) | Stacje 4-gniazdowe HT730 Plus, ładowarki 5100-900040G i 5100-900035G | — | ACC730 s. 5, QSG-4S, ACC330 s. 6 | Z |
| unitech-przewod-zasilajacy-eu-3pin (1550-602333G) | Stacje i ładowarki HT730 Plus i HT330 (7 PN) | — | ACC730, ACC330, QSG stacji | Z |
| unitech-rp902-zasilacz (1010-900067G) | Ładuje HT330 przez przewód USB-C z zestawu | — | ACC330 („5V/2A Adaptor w/ universal plugs for terminal & cradle”), UM330 1.1 | Z |
| unitech-rp902-przewod-usb-c (1550-905919G) | Taki sam przewód w zestawie HT330 | — | ACC330 („USB 2.0 Type-C Cable PN#1550-905919G”) | Z |
| unitech-rp902-zasilacz, -przewod-usb-c | Alt zdjęcia | „— widok produktu” | zdjęcia: zasilacz z gniazdem USB-A i 4 wtyczkami; przewód USB-A / USB-C | N → alt opisowy; data aktualizacji 20.10 → 30.10 (karty mają dopisek HT330) |
| unitech-rp902 | „Odczyty z RP902 może przyjmować także … HT730 Plus lub HT330” | — | WWW (RP902 w arkuszach akcesoriów HT730 Plus i HT330) | Z |
| unitech-rp300-zasilacz-45w (1010-900072G) | Dopisek RT112 / RT112 Windows / stacja 5000-900124G | — | ACC-A/W, QSG Office Cradle | Z |
| unitech-rp300-zasilacz-45w | Forma 2. osoby | „Do gniazda sieciowego potrzebujesz…”, „Nie zastępuj go przewodem IEC C13.” | standard języka TAKMA | N → „potrzebny jest przewód…”, „Przewód IEC C13 do tego zasilacza nie pasuje.” |
| unitech-przewod-sieciowy-eu-c5 (1550-905940G) | `shortDescription`, `seoDescription` | tylko RP300 | specyfikacja i opis karty: RP300, RT112, RT112 Windows, TB170 Plus | N → dopisane tablety |
| unitech-rp300-zasilacz-45w, -przewod-sieciowy-eu-c5 | Alt zdjęcia | „— widok produktu” | zdjęcia: zasilacz z gniazdem C6 i przewodem USB-C; wtyczka z uziemieniem i złącze C5 | N → alt opisowy |

## `/terminale-unitech` (część HT)

| Element | Na stronie | Dokument | Status |
|---|---|---|---|
| Definicja, tabela modeli, „Jak wybrać”, „Który terminal do zadania”, „HT730 Plus czy HT330?”, „Co sprawdzić”, FAQ ×9 | HT730 Plus: 4″ 400 nitów, 32 m, 5G, grzałka −30…+50°C, 6700 mAh, aktywne 1 min, Android 14 → 16; HT330: 450 nitów, 295 g, 4G LTE, 5200 mAh > 20 h, 4,5 h; obie: brak zasilacza, HT730 Plus bez przewodu, RP902 przez Bluetooth, gwarancja 12 mies. | DS730, DS330, UM330, ACC730/330, WWW | Z |
| Akapit o terminalach z klawiaturą | „HT730 Plus i HT330 mają … złącze USB typu C z OTG” | DS730: „USB Type C Connector for PC; POGO PIN OTG connector for Cradle” (OTG HT730 Plus jest w stykach pogo); DS330: OTG przez USB-C | N → „złącze USB typu C i gniazdo microSD do 256 GB” |
| Filtry (liczniki na produkcji) | Klawiatura 2; 4–4,3″ 2; Wi-Fi + LTE/5G 5, Tylko Wi-Fi 4 (HT730 Plus i HT330 w obu); Mroźnia 1 (HT730 Plus); Wi-Fi 5 (ac) 1 (HT330); daleki zasięg 2; 2,4 m i więcej 1; IP67 2; cena do 3000 zł 4, 3000–6000 zł 1 | dane wariantów; wiersze „Łączność komórkowa” i „Karta SIM” (6e7f5b5a) | Z |
| `/terminale-mobilne` | Producent Unitech 5 (RP300 i RP902 poza siatką); HT730 Plus i HT330 w tych samych wartościach co na stronie marki | — | Z |

## Tablety, 23 akcesoria tabletów, `/tablety-unitech`

Sprawdzone zdanie po zdaniu z DS-A5G, DS-AW, DS-W5G, DS-WW, DS-T, UM-A, UM-W, UM-T, ACC-A, ACC-W, QSG i FAQ (szczegóły robocze: `scratchpad/ute/weryfikacja-V8/tablety-tabela.md`).

| Karta | Element | Na stronie | Dokument | Status |
|---|---|---|---|---|
| unitech-rt112 | Specyfikacja (system, Snapdragon 5430, 6/128 GB, 10,1″ 450 nitów, skaner 2D, NFC, aparaty, Wi-Fi 6E, BT 5.2, 5G z VoNR, GNSS tylko 5G, porty, 8800 mAh 4 h, IP67, 1,5 m, MIL-STD-810H, temperatury, 260 × 165 × 12 mm, 690 g), opis, „Wymagane”, FAQ ×7, dymki, 4 PN | — | DS-A5G, DS-AW, UM-A, QSG, FAQ RT112; PN: ERS i Levata | Z |
| unitech-rt112 | Alt 3. zdjęcia | „żółtym oknem skanera” | na zdjęciu żółta etykieta lasera na module skanera | N → „modułem skanera z żółtą etykietą ostrzegawczą lasera” |
| unitech-rt112-windows | Windows 11 IoT Enterprise LTSC 2024 Arm64, Qualcomm 6490, 8/128 GB, osłona naklejona, skaner do 10 m z ScanBridge, eSIM + nano-SIM, praca bez baterii, brak NFC, FAQ ×7, 4 PN | — | DS-W5G, DS-WW, UM-W, FAQ RT112 Windows; PN: Levata | Z (PN wprost u jednego dystrybutora, wzorzec liter jak RT112 Android) |
| unitech-rt112-windows | Alt 3. zdjęcia | „oknem skanera” | moduł skanera z etykietą lasera | N → jak RT112 |
| unitech-tb170-plus | Intel N200, 8 GB / 256 GB SSD, TPM 2.0, 800 nitów, MPP 2.0, skaner 1D/2D z F1, Wi-Fi 6E, BT 5.3, LTE EM060K-GL, porty z RJ45 PXE, hot swap 4300 mAh, IP65, 1,5 m, MIL-STD-810G, 283 × 192 × 15 mm, 990 g, 3 PN, FAQ ×7 | — | DS-T, UM-T, QSG, WWW; PN: ERS (3), Levata, POS Central | Z |
| unitech-tb170-plus | Dymek „Łączność” | RJ45 z PXE tylko przy wersji Wi-Fi | DS-T: RJ45 w każdej wersji | N → RJ45 w zdaniu o wszystkich wersjach |
| unitech-rt112-stacja-biurkowa | Wymagania dla innego zasilacza | „musi … mieć moc co najmniej 45 W” | QSG Office Cradle V1.4: PD i 12 V / 3 A wymagane, 45 W „recommended” | N → 45 W jako moc zalecana (opis i wiersz „Zasilanie”) |
| unitech-tablet-plyta-vesa | Śruby motylkowe | „ustawiają położenie płyty” | QSG VESA Plate V1.1, krok 1: łączą dwie części płyty w układzie RT112 albo TB170 Plus | N → poprawione |
| ram-b-166-202u | Zdanie z linkiem | po zamianie linku na PN znikała nazwa uchwytu, podany tylko jeden z dwóch uchwytów | QSG Vehicle Cradle: oba uchwyty zgodne z RAM Mount | N → „uchwyt samochodowy RT112 5000-900128G albo 5000-900125G” |
| Pozostałe 20 akcesoriów tabletów | PN, zgodność, zestawy, montaż, alt | — | ACC-A/W, QSG, UM-T, WWW | Z |
| Tablety i akcesoria | Pliki (18), linki (84) | 200, rozmiary bajtowe = pliki Unitech | — | Z |
| Tablety i akcesoria | Cena, dostępność | `priceFrom` / `availability` = API | API | Z |
| Tablety i akcesoria | JSON-LD | schemat statyczny: cena netto, on-order (RT112-0DNFUMDG, 5400-900060G, 1550-905940G) jako OutOfStock | karty tabletów Getac i Bluebird też nie są w `LIVE_OFFER_SLUGS` | U (logika cen bez zmian) |
| `/tablety-unitech` | Wstęp, „Jak wybrać”, tabela, zastosowania, „Co sprawdzić”, FAQ ×6 | — | DS-*, QSG, WWW, FAQ RT112 Windows | Z |
| `/tablety-unitech`, `/tablety-przemyslowe` | Filtry | Android 1 / Windows 2; skaner: wbudowany 3 i bez skanera 3; IP65 1 / IP67 2; producent Unitech 3 na stronie kategorii | dane wariantów | Z |

## Kontrola techniczna (produkcja)

- 63 strony: 200. Linki wewnętrzne: 245 (HT, EA, RP, kategorie) + 84 (tablety), wszystkie 200. Pliki do pobrania: 20 + 18, wszystkie 200, rozmiary zgodne z deklarowanymi i z plikami Unitech.
- Przewijanie poziome: brak na 59 kartach przy 390 px. Tabele wariantów po „Pokaż niedostępne warianty” (HT730 Plus: 11 PN): scrollWidth = clientWidth przy 1440 / 1280 / 1024 / 390 px (1216 / 1216 / 960 / 358) na HT730 Plus, HT330, RT112, RT112 Windows i TB170 Plus.
- Akcesoria na kartach głównych: 4 zdjęcia 286 × 215 px, „Pokaż pozostałe” → 19 (HT730 Plus), 15 (HT330), 13 / 13 / 15 (tablety), „Zwiń” → 4; tak samo jak EA660 (21 → 4).
- Galeria: HT 557 × 557 px jak EA660; tablety 584 × 584 px jak Getac F110 G7 i Bluebird T10. Kadry głównych zdjęć (udział produktu): HT730 Plus 68 × 88%, HT330 66 × 88% (EA660 85 × 88%, EK430 63 × 86%, CK62 70 × 90%); RT112 77 × 74%, TB170 Plus 75 × 80% (Getac ZX10 76 × 80%, Bluebird T10 82 × 78%).
- Kafle: 299 × 224 px na `/terminale-unitech`, `/terminale-mobilne`, `/terminale-bluebird`, `/terminale-cipherlab`, `/tablety-unitech`, `/tablety-getac`, `/tablety-bluebird`.
- API: 2 przebiegi po 78 PN, wyniki identyczne; ceny i dostępność kart = API; każde on-order ma towar w dostawie; każde 0 szt. bez dostawy = unavailable bez koszyka.
- Zrzuty: `scratchpad/ute/weryfikacja-V8/zrzuty/`, teksty stron: `strony/`, arkusz zdjęć HT: `arkusz-zdjec-ht.jpg`.

## Poprawki na gałęzi `weryfikacja/unitech-v8`

1. `unitech-category.ts`: akapit o terminalach z klawiaturą bez „z OTG” (OTG HT730 Plus jest w stykach pogo).
2. `unitech-handheld-accessories.ts`: szkło 5400-900069G, „mokre dłonie” → „mokry ekran”.
3. `unitech-rp902-products.ts`: alt zdjęć zasilacza 1010-900067G i przewodu 1550-905919G, `updatedAt` 30.10.
4. `unitech-rp300-products.ts`: zasilacz 1010-900072G (2 zdania bez drugiej osoby, alt), przewód 1550-905940G (`shortDescription` i `seoDescription` z tabletami, alt), `updatedAt` 30.10.
5. `unitech-tablet-products.ts`: alt 3. zdjęcia RT112 i RT112 Windows, dymek „Łączność” TB170 Plus.
6. `unitech-tablet-accessories.ts`: stacja 5000-900124G (zasilanie), płyta VESA 5400-900065G, RAM-B-166-202U.

Bez zmian logiki cen i dostępności. Pliki skanerów Unitech i wiersz WD200 Plus nie były zmieniane. `npx tsc --noEmit`: bez błędów; `npx next build`: zakończony powodzeniem.

## Do decyzji właściciela

1. „Co jest w kartonie?” w rodzinie Unitech (EA, HT, tablety): ostatnia pozycja „…; przewód USB-C i zasilacz sprzedawane osobno” (HT730 Plus) lub „…; przewód sieciowy sprzedawany osobno” ma zielony znacznik. Inne karty (np. Zebra WT) mają osobny wiersz „Elementy poza zestawem”. Zmiana dla całej rodziny.
2. HT330: AA oznacza HT330-NAL2UM3G i HT330-QA62UM3G jako EOL z następcami `…TM3G`, których nie ma w API (znane z analizy); HT330-QA62UM3G ma 0 szt.
3. TB170 Plus: GNSS bez ograniczenia do wersji LTE (DS-T, UM-T), POS Central pisze „Optional LTE & GPS”; temperatura ładowania w UM-T 0–40°C i w innym akapicie 10–45°C (na karcie 0–40°C).
4. Tablety Unitech poza `LIVE_OFFER_SLUGS` (jak Getac i Bluebird): JSON-LD z ceną netto; karty HT i EA mają cenę brutto. Ujednolicenie to zmiana logiki cen.
5. Konfiguracje PN wprost tylko u jednego dystrybutora: HT730-NH6122BG, -NH61U2BG, -NJN122BG, -NJN1U2BG, -LJN1U2BG (ERS), RT112 Windows (Levata), TB170-QDL2RMNG (ERS); wzorce liter spójne z PN potwierdzonymi u dwóch dystrybutorów.
