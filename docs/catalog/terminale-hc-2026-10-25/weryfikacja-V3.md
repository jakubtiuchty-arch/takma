# Weryfikacja V3 po wdrożeniu: Zebra HC20 / HC25 / HC50 / HC55, 8 akcesoriów HC, zdania o Zebrze w kategorii (25.10.2026)

Zakres: strony produkcyjne https://www.takma.com.pl (wdrożenie bebc732c), porównane zdanie po zdaniu z dokumentami Zebry. Tekst stron pobrany Playwrightem po pełnym załadowaniu (rozwinięte specyfikacje, FAQ, akcesoria „Pokaż pozostałe”, dymki atrybutów odczytane z DOM), zrzuty 1440 px: `$SP/hc4/weryfikacja/<slug>.txt|.png|.json`, kategoria: `$SP/hc4/weryfikacja-v3kat/`. Raportów Z1 i audytu R nie przyjmowano jako dowodu — każdą pozycję sprawdzono w dokumencie.

## Źródła

| Skrót | Dokument |
|---|---|
| SS | Zebra HC2X/HC5X Product Spec Sheet EN 05/14/2025 (= `public/downloads/zebra-hc2x-hc5x-karta-katalogowa-en.pdf`, 449 632 B, identyczny z kopią źródłową); s. 1 — wygląd i bateria, s. 2 — funkcje, s. 3 — specyfikacja, s. 4 — WWAN, gwarancja, przypisy |
| SS-PL | Ta sama karta po polsku, 05/14/2025 (`zebra-hc2x-hc5x-karta-katalogowa-pl.pdf`, 506 315 B) |
| AG | HC2X/HC5X Healthcare Accessories Guide, Revised July 2026 (`zebra-hc2x-hc5x-przewodnik-akcesoriow-en.pdf`); s. 3 stacje, s. 4 uchwyt i bateria, s. 5 ładowarka, s. 7 zasilacze i przewody, s. 8 przewody sieciowe, s. 10 klips, pasek, zaślepka, s. 11 Connect Cradle |
| CL | Sanitize for Safety — Cleaning and disinfecting guidelines for Zebra healthcare mobile computers and tablets, 08/05/2024 (`zebra-terminale-hc-czyszczenie-i-dezynfekcja-en.pdf`); s. 2 zasady, s. 3 lista środków, s. 4 instrukcje, s. 5 UV-C |
| ZP | zebra.com/us/en: strony HC20, HC25, HC50, HC55 (opis, „Commonly Used For”, kolor Healthcare Blue, „In the Box”) |
| AV | zebra.com „Supported Android Versions”: HC20/HC25/HC50/HC55 — obecnie A13, A14, A15; ostateczna A16 |
| D1 / D2 | Jarltech i The Barcode Warehouse — tylko opisy PN (skaner, pamięć, GMS, ROW, MDNA) |
| API | `https://www.takma.com.pl/api/stock`, dwa wywołania 25.10.2026 ok. 17:40, wyniki identyczne |

## Wyniki ogólne
- Ceny i dostępność na 12 kartach = API (drugie wywołanie): HC20 3626,40 (EU 291), HC25 3683,88 / 3503,63, HC50 5691,59, HC55 5943,95, plany OneCare Essential 3/5 lat 1179,79 / 1966,29 (`servicePlanPrice`), akcesoria jak w tabelach niżej. SAC-HC2L5L-4SCHG: API `on-order` (0 szt., 28 w dostawie) — strona pokazuje „Niedostępny”, „W drodze: 28 szt.”, bez koszyka, „Zapytaj o produkt” (etykieta `on-order` = „Niedostępny” to logika całej strony).
- JSON-LD: ProductGroup/Product z marką Zebra, sku = mpn = PN, cena brutto i `InStock` zgodne z API; 4SCHG `OutOfStock` zgodnie z brakiem stanu. Nazwy wariantów w JSON-LD mają postać „Zebra HC20 HC20 Wi-Fi 6…” — ten sam wzór co w innych kartach HC (nazwa produktu + nazwa wariantu), bez zmian.
- Linki: 40 unikalnych odnośników z treści 12 kart (karty, kategorie, 4 PDF, serwis-zebry.pl) — wszystkie 200. PDF: 494 KB / 439 KB / 873 KB / 2,0 MB — rozmiary zgodne z plikami.
- Zdjęcia: HC20 przód z ikoną Wi-Fi 6, HC25 przód z ikoną 5G (bez przedniego aparatu), HC50 dwa ujęcia z przednim aparatem i ikoną Wi-Fi 6E, HC55 przód z przednim aparatem i 5G; tył `hc20_2` = tył HC20/HC50 z aparatem, czerwonym przyciskiem i pokrywą baterii. Galerie przełączają się (4 / 2 / 3 / 2 miniatury). Akcesoria: zdjęcia pokazują właściwe produkty i kolory (niebieska bateria, klips, pasek, zaślepki; białe stacje i ładowarka). Skali zdjęć głównych nie zmieniano (decyzja właściciela).
- Tabela wariantów i strona bez poziomego przewijania przy 1440 / 1280 / 1024 / 390 px.
- Instrukcja PL na serwis-zebry.pl dla HC20/HC25/HC50/HC55 nie istnieje (404) — brak linku jest prawidłowy.

## 1. zebra-hc20

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Nazwa, H1, seoTitle | Zebra HC20; „terminal mobilny dla służby zdrowia, Wi-Fi 6” | SS s. 2 („HC20 (Wi-Fi 6)”) | zgodne |
| shortDescription / meta | Wi-Fi 6, SE4720 z zielonym celownikiem, przycisk alarmowy, obudowa przygotowana do dezynfekcji; meta ucięta po 160 znakach („…przygotowana do…”) | SS s. 1–3 | treść zgodna; **poprawione**: skrócony shortDescription, żeby meta nie urywała zdania |
| seoDescription | szpitale, przychodnie, opieka domowa; Wi-Fi 6, SE4720, przycisk, dezynfekcja; PN na końcu | SS s. 1 („hospitals and clinics to patient homes”) | zgodne |
| Opis ak. 1 | kieszonkowy; personel medyczny i niemedyczny (pielęgniarki, lekarze, technicy laboratoryjni i farmaceutyczni, opiekunowie domowi, służby techniczne i żywienie); Wi-Fi 6 w placówce; SE4720 — opaski, fiolki, materiały, sprzęt, tace; kody uszkodzone | SS s. 1 („pocketable”), s. 3 Markets and Applications, s. 2 „Flexible Options…”, „staff who work inside your facility” | zgodne |
| Opis ak. 2 | Healthcare Blue; tworzywa dla ochrony zdrowia; wyprofilowane powierzchnie i dolne listwy; zaślepka USB-C i szczeliny; ekran w cienkich rękawiczkach | ZP (kolor), SS s. 1, SS-PL („dolne listwy ochronne”) | zgodne |
| Opis ak. 3 | czerwony przycisk z tyłu; numer albo aplikacja; sekwencja aktywacji; PTT/PBX z Workcloud | SS s. 1, s. 2 i przypis 6; AG s. 10 („duress button on the back”) | zgodne |
| Opis ak. 4 | DNA Professional; Wi-Fi 6E i Workstation Connect z licencją Enterprise; „Baterię 3800 mAh można ładować dowolnym przewodem USB-C”; wspólne akcesoria | SS s. 4 (Zebra DNA, przypisy 5 i 7), s. 1 („any standard USB-C charge cable”, „One Set of Accessories”) | **nieprecyzyjne** (ładuje się terminal, nie sama bateria) — poprawione |
| Specyfikacja (31 wierszy) | Android GMS A13–A15 / A16; Qualcomm 5430 6 rdzeni 2,1 GHz; 6/64 GB, microSD 2 TB; 6,0" 1080 × 2160, 450 nitów, LED, Gorilla Glass; dotyk w rękawiczkach; SE4720, okno Gorilla Glass; 16 MP; przyciski; Red Duress Button; powiadomienia; audio; WLAN 802.11 a…mc 2×2, Wi-Fi 6E z licencją; WPA3/OWE/802.11r/CCKM/OKC; BT 5.2 kl. 2 BLE; NFC; USB 3.1 C dół host/klient + zaślepka; 3800 mAh / 14,63 Wh BLE, PowerPrecision, szybkie ładowanie; czujniki (ciśnienie — wybrane konfiguracje); IP68/IP65; 1,25 m MIL-STD-810H −10…50°C; 500 × 0,5 m; ESD ±15/±8 kV; −10…50 / −40…70°C, 5–95%; 165 × 76,3 × 12,5 mm, 239 g; 30+ środków; Workcloud; DNA; RoHS/REACH; 1 rok | SS s. 3–4, AV, AG s. 10 (zaślepka), D1/D2 (GMS) | zgodne (każda liczba i jednostka) |
| Wariant | WLMT0-H20B6BCJ1-A6: SE4720, Wi-Fi 6 | D1, D2 („SE4720 barcode scanner… GMS, ROW”) | zgodne |
| Dymki | Skaner: SE4720 białe oświetlenie, zielony celownik; Łączność: Wi-Fi 6, 6E z licencją, bez modemu | SS s. 2–3, przypis 5 | zgodne |
| Zastosowania | dokumentacja i identyfikacja pacjenta; przy łóżku; opieka domowa; komunikacja PTT/PBX/wiadomości; gospodarka materiałowa | ZP „Commonly Used For”, SS s. 2 | zgodne |
| Porównanie (7 wierszy × 4 modele) | łączność, RAM/Flash, skaner (HC25 też bez), aparaty, hot swap do 60 s, DNA, masa | SS s. 3–4, przypisy 2, 3, 5 | zgodne |
| FAQ 1 | przycisk na tylnej ściance, programowalny, numer/aplikacja, sekwencja, pasek zostawia dostęp | SS s. 1, AG s. 10 | zgodne |
| FAQ 2 | Wi-Fi 6 fabrycznie, 6E z licencją, ta sama licencja dla Workstation Connect, bez modemu | SS przypisy 5, 7 | zgodne |
| FAQ 3 | zaślepka przed czyszczeniem, odłączenie zasilania, chusteczka/wilgotna ściereczka bez rozpylania; składniki aktywne | CL s. 2 i 4 | zgodne |
| FAQ 4 | true hot swap tylko HC50/HC55 (60 s); bateria wymienna; 4SCHG i 2S1D1B | SS przypis 2, AG s. 3 i 5 | zgodne |
| FAQ 5 | A13, A14, A15, ostatnia A16; LifeGuard; Zero Touch | AV, SS s. 2 | zgodne |
| FAQ 6 | PBX z Workcloud; PTT Express przez Wi-Fi; Enterprise Voice; tłumienie szumów AI | SS s. 2–3, przypis 6 | zgodne |
| FAQ 7 | HC50 (6E, 8/128, 5 MP, hot swap), HC25 (5G), CT37 HC z N6700, Memor 12 HC | SS; karta CT37 HC (V1) | zgodne |
| Zdjęcia (alt) | przód z ikoną Wi-Fi; tył z aparatem, przyciskiem i baterią; dwa ujęcia boczne | obejrzane pliki | zgodne |
| Pliki | karta PL, karta EN, czyszczenie, przewodnik akcesoriów | — | zgodne, 200 |
| Akcesoria (12) | 8 akcesoriów HC + CRD-TC2L-1SNWS-01, CBL-TC5X-USBC2A-01, PWR-WUA5V12W0EU, BRKT-SCRD-SMRK-01 | AG s. 3–5, 7, 10–11 | zgodne |

## 2. zebra-hc25

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Nazwa, seoTitle, short, seoDescription | 5G i Wi-Fi 6, nano SIM, eSIM, GNSS dwupasmowy, ze skanerem lub bez; opieka domowa, transport, między budynkami; 2 PN | SS s. 3–4, przypis 3; ZP | zgodne |
| Opis ak. 1 | personel w szpitalu, w dojazdach i między obiektami; 5G jako zapasowe łącze; prywatne i hybrydowe 5G | ZP HC25 („5G backup”, „hospitals, traveling to patient homes, or moving between medical facilities”), SS s. 2 | zgodne |
| Opis ak. 2 | nano SIM + eSIM; GNSS L1 i L5; PTT Pro przez Wi-Fi i komórkę; VoLTE | SS s. 3–4 | zgodne |
| Opis ak. 3 | dwie konfiguracje 6/64 GB; B — SE4720; D — bez skanera, odczyt aparatem 16 MP z oprogramowaniem | D1, D2, SS przypisy 3–4 | zgodne |
| Opis ak. 4 | obudowa do dezynfekcji, przycisk z tyłu, DNA Professional, 6E i WS Connect z licencją | SS, AG s. 10 | zgodne |
| Specyfikacja | jak HC20 + WWAN ROW (5G n1/2/3/5/7/8/20/28/38/40/41/66/71/77/78; 4G 19 pasm; 3G; 2G), NSA/SA, LTE-A, CA, VoLTE, DSDS, sieci prywatne, 1 nano SIM + 1 eSIM, GNSS L1+L5, a-GPS, XTRA; „Odczyt kodów” wersji D | SS s. 3–4, przypis 4 | zgodne (etykieta „WWAN (Europa)” = pasma „Rest of World”, PN w wersji ROW wg D2) |
| Warianty i dymki | B: SE4720; D: „Brak (aparat)”; łączność 5G + Wi-Fi 6 | D1, D2, SS | zgodne |
| Zastosowania | opieka domowa, między budynkami, transport pacjentów, dokumentacja przez 5G, hospicjum, PTT | ZP, SS s. 3 Markets | zgodne |
| FAQ 1–2, 4–5 | różnica konfiguracji; pasma ROW, 19 pasm LTE; Workstation Connect z licencją, porty CRD-TC2L-1SNWS-01, zasilanie osobno; klips i pasek (przygotowane do dezynfekcji, nie razem) | D1/D2, SS s. 4, AG s. 10–11, SS-PL s. 1 | zgodne |
| FAQ 3 | „Do jednoczesnego korzystania z dwóch profili służą nano SIM i eSIM w trybie DSDS” | SS s. 4 („Dual SIM / Dual Standby”) | **nieprecyzyjne** (DSDS to gotowość obu kart, nie jednoczesne korzystanie) — poprawione |
| FAQ 6 | „Terminale innych marek z 5G … to Memor 17 HC i RS38H” | karty CT37 HC (wersja 5G), Memor 17 HC, RS38H | **niezgodne** (pominięty CT37 HC 5G przy wyliczeniu wyczerpującym) — poprawione |
| Zdjęcia, pliki, akcesoria, JSON-LD | przód z ikoną 5G; tył serii; 4 PDF; 12 akcesoriów; 2 warianty | jw. | zgodne |

## 3. zebra-hc50

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Nazwa, seoTitle, short, seoDescription | Wi-Fi 6E, przedni 5 MP do telemedycyny/telekonsultacji, 8/128 GB, SE4720, wymiana baterii bez wyłączania | SS s. 2–3, ZP | zgodne |
| Opis ak. 1 | szpitale i przychodnie w zasięgu Wi-Fi 6E; 5 MP — konsultacje z lekarzami i farmaceutami; 16 MP — rany | SS s. 2 | zgodne |
| Opis ak. 2 | true hot swap do 60 s; połączenia, powiadomienia, dane; PowerPrecision | SS s. 1, przypis 2 | zgodne |
| Opis ak. 3 | 8/128 GB; aplikacje graficzne (parametry życiowe, badania obrazowe, schematy); UDI i wycofany sprzęt | SS s. 2 | zgodne |
| Specyfikacja | jak HC20, z: 8/128 GB; aparaty 16 + 5 MP; WLAN 6E 2,4/5/6 GHz, do 2402 Mb/s w 5 i 6 GHz; hot swap 60 s; 242 g; DNA Enterprise bez opłaty | SS s. 3–4 | zgodne |
| Wariant, dymki | WLMT0-H50D8BBK1-A6: SE4720, Wi-Fi 6E; trzy pasma | D1, D2, SS | zgodne |
| Zastosowania | telekonsultacje, identyfikacja i leki przy łóżku, UDI, parametry i obrazy, rany, Workstation Connect | SS s. 2, ZP | zgodne |
| FAQ 1–7 | przedni aparat; hot swap z BTRY-HC2L5L-2XMAXB; DNA Enterprise i Workstation Connect bez licencji; UDI; czyszczenie (zaślepka, bez wybielacza na stacjach, UV-C i przebarwienia); gwarancja 1 rok + OneCare Essential 3/5 lat; alternatywy | SS s. 2–4 i przypis 7, CL s. 2–5, API (plany) | zgodne |
| Zdjęcia (alt) | dwa ujęcia przodu pod kątem (prawa / lewa krawędź, 5 MP, Wi-Fi 6E), tył | obejrzane pliki | zgodne |
| Plany OneCare | Z1AE-HC50XX-3C00 / -5C00 | SS s. 4 („OneCare Essential/Select (HC50/HC55)”), API | zgodne |

## 4. zebra-hc55

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Nazwa, seoTitle, short, seoDescription | 5G + Wi-Fi 6E, przedni 5 MP, SE4720, 8/128 GB, hot swap, nano SIM + eSIM; opieka domowa, telemedycyna, domy opieki | ZP HC55, SS | zgodne |
| Opis ak. 1–4 | placówka + opieka domowa, telemedycyna, domy opieki, kampusy; 5G NSA/SA, LTE-A, VoLTE, sieci prywatne/hybrydowe, nano SIM + eSIM, GNSS L1+L5; SE4720 przyjazny pacjentowi; 8/128 GB; hot swap; DNA Enterprise bez opłaty; dezynfekcja; przycisk z tyłu | ZP, SS s. 2–4, AG s. 10 | zgodne |
| Specyfikacja | jak HC25 + 8/128 GB, 16 + 5 MP, Wi-Fi 6E, hot swap, 242 g, DNA Enterprise | SS s. 3–4 | zgodne |
| Wariant, dymki | WCMTB-H55D8BBK1-A6: SE4720, 5G + Wi-Fi 6E | D1, D2 | zgodne |
| Zastosowania | opieka domowa, domy opieki, kampusy, ratownictwo i transport, wideokonsultacje, identyfikacja SE4720 | ZP, SS s. 3 Markets („Paramedics”, „Patient transport”) | zgodne |
| FAQ 1, 3–5 | HC55 vs HC50; Device Tracker i licencje SW-BLE-DT-SP-1YR/3YR; stacje przyjmują terminal z klipsem lub paskiem, zasilacz osobno; Android A13–A15 / A16, GMS, Zero Touch, LifeGuard | SS, AG s. 3–4, AV | zgodne |
| FAQ 2 | pasma ROW, NSA/SA, LTE-A, VoLTE, sieci prywatne; „nano SIM i eSIM mogą być aktywne jednocześnie (DSDS)” | SS s. 4 | **nieprecyzyjne** (Dual Standby) — poprawione |
| FAQ 6 | „Wśród innych marek terminale 5G … to CT37 HC (5G) i RS38H” | karty Memor 17 HC, CT37 HC, RS38H | **niezgodne** (pominięty Memor 17 HC 5G) — poprawione |
| Zdjęcia, pliki, akcesoria, plany OneCare, JSON-LD | przód z 5 MP i 5G; tył serii; 4 PDF; 12 akcesoriów; Z1AE-HC55XX-3C00 / -5C00 | jw., API | zgodne |

## 5–12. Akcesoria HC

| Karta (PN) | Element | Na stronie | Dokument | Wynik |
|---|---|---|---|---|
| zebra-bateria-hc20-hc50 (BTRY-HC2L5L-2XMAXB), 363,72 zł, EU 221 | opis, specyfikacja, zastosowania, meta | PowerPrecision 3800 mAh / 14,63 Wh, niebieska, ogniwa premium o dłuższym cyklu, BLE i Device Tracker (licencje 1Y/3Y osobno), hot swap 60 s w HC50/HC55, ładowanie 4SCHG i 2S1D1B | AG s. 4–5, SS s. 3 i przypis 2 | zgodne |
| zebra-stacja-dokujaca-1slot-hc20-hc50 (CRD-HC2L5L-BS1CO), 406,81 zł, EU 151 | opis, „Wymagane”, specyfikacja | tylko ładowanie, bez transmisji; 0–80% < 2 h 20 min; z paskiem lub klipsem; PWR-WUA5V12W0EU + CBL-TC5X-USBC2A-01 osobno; biurko/dyżurka | AG s. 3 i 7, SS s. 1 | zgodne |
| zebra-stacja-dokujaca-2slot-hc20-hc50 (CRD-HC2L5L-2S1D1B), 1252,79 zł, EU 482 | opis, „Wymagane”, specyfikacja | 1 terminal + 1 bateria; 0–80% < 1 h 20 min; bateria 0–90% < 4 h; PWR-BGA12V50W0WW, CBL-DC-388A1-01, 50-16000-220R | AG s. 3, 7–8 | zgodne |
| jw. | seoTitle | „— terminal i bateria HC20 / HC50” | AG s. 3 (HC2X / HC5X) | **nieprecyzyjne** (pomija HC25, HC55) — poprawione |
| zebra-stacja-dokujaca-5slot-hc20-hc50 (CRD-HC2L5L-BS5CO), 2358,14 zł, EU 242 | opis, „Wymagane”, opcja | do 5 terminali, tylko ładowanie, 0–80% < 1 h 20 min, z paskiem/klipsem, ściana lub rack 19" z BRKT-SCRD-SMRK-01; PWR-BGA12V108W0WW, CBL-DC-381A1-01, 50-16000-220R | AG s. 3–4, 7–8 | zgodne |
| zebra-ladowarka-4-baterii-hc20-hc50 (SAC-HC2L5L-4SCHG), 1403,13 zł, 0 szt. + 28 w dostawie | opis, „Wymagane”, opcja, status | biała, 4 baterie, 0–90% < 4 h, samodzielnie lub 4 na uchwycie; zasilanie jak 2S1D1B; „Niedostępny / W drodze: 28 szt.”, bez koszyka | AG s. 5, 7; API `on-order` | zgodne |
| zebra-klips-do-noszenia-hc20-hc50 (SG-HC2L5L-CLIP-01), 140,62 zł, EU 448 | opis, specyfikacja | mocowany na górze, obrót 162°, niebieska obudowa przygotowana do dezynfekcji, nie z paskiem, mieści się w stacjach, element eksploatacyjny | AG s. 10 i s. 3 | zgodne |
| zebra-pasek-na-reke-hc20-hc50 (SG-HC2L5L-HSTRP-01), 220,10 zł, EU 478 | opis, specyfikacja | nasadka górna + dolny zaczep, dostęp do przycisku z tyłu, zgodny ze stacjami, kolejność zdejmowania przy wymianie baterii, eksploatacyjny, nie z klipsem | AG s. 10 | zgodne |
| jw. | zastosowanie | „Pewne trzymanie terminala podczas skanowania” | AG s. 10 — brak | **brak w dokumencie** — zastąpione „Trzymanie terminala w dłoni z dostępem do przycisku alarmowego” |
| zebra-zaslepka-usb-c-hc20-hc50 (SG-HC2L5L-USBCADP5), 18,30 zł, EU 21 | opis, specyfikacja, pliki | 5 niebieskich zaślepek zamiennych, dolna krawędź, wkładana przed czyszczeniem, szczeliny i patogeny, eksploatacyjna | AG s. 10, CL s. 4, SS s. 1 | zgodne |
| jw. | zdanie o zestawie | „Jedna sztuka jest dołączana do każdego terminala” | AG s. 10: „One plug should be included with each device”; ZP „In the Box”: terminal, Regulatory Guide, Quick Start Guide | **nieprecyzyjne** — zmienione na „Każdy terminal powinien mieć jedną zaślepkę” |

Wszystkie 8 kart: nazwa, H1, seoTitle/seoDescription z PN, JSON-LD (Zebra, sku = PN, cena, dostępność) zgodne z API; przewodnik akcesoriów 200; zdjęcia właściwych produktów.

## 13. /terminale-dla-sluzby-zdrowia — komórki i zdania o Zebrze

| Element | Na stronie | Dokument | Wynik |
|---|---|---|---|
| Ak. „Czym różni się…” | tworzywa dla ochrony zdrowia, ponad 30 środków, zaślepka USB-C | SS s. 1 i 4 | zgodne |
| Ak. 2 | czerwony przycisk w obudowie HC2X/HC5X; SE4720 białe oświetlenie, zielony celownik | SS s. 1–3 | zgodne |
| Tabela — 4 wiersze Zebra (model, łączność, skaner, obudowa, alarm, bateria) | HC20: Wi-Fi 6 (6E z licencją), 6/64, 16 MP, SE4720, 3800 mAh, dowolny USB-C; HC25: 5G + Wi-Fi 6, nano SIM + eSIM, wersja bez skanera; HC50: Wi-Fi 6E, 8/128, 5 MP, hot swap; HC55: 5G + Wi-Fi 6E, nano SIM + eSIM, hot swap | SS s. 1–4, przypisy 2–5 | zgodne |
| Notka pod tabelą | 6", NFC, aparat tylny, IP65/IP68, roczna gwarancja; Workstation Connect w HC20/HC25 z licencją | SS s. 3–4, przypis 7 | zgodne |
| Poradnik (7 punktów) | Wi-Fi: HC20/HC50; 5G: HC25/HC55; 450 nitów; rękawiczki; sekwencja przeciw fałszywym alarmom; hot swap 60 s HC50/HC55, HC20/HC25 bez; jeden zestaw akcesoriów; Connect Cradle | SS, AG | zgodne |
| Obudowa, czyszczenie, upadki | osobny dokument ze środkami; zaślepka USB-C; MIL-STD-810H, 1,25 m | SS s. 3–4 („Cleaning and Disinfecting Fact Sheet”), CL | zgodne |
| Zastosowania, „Co sprawdzić”, porównania | PBX z Workcloud; 5G w HC25/HC55; licencja WS Connect HC20/HC25; HC20 vs HC50; prywatne sieci 5G HC25/HC55 | SS s. 2–4 | zgodne |
| FAQ: przycisk, środki, bateria, telefon, gwarancja | HC2X/HC5X 30+ środków; przycisk programowalny; 60 s; PTT/PBX; OneCare SV dla HC20/HC25, Essential/Select dla HC50/HC55, w sklepie Essential 3/5 lat | SS s. 1–4 | zgodne |
| FAQ „Czy terminal czyta kody z opasek?” | „Każdy model w tej kategorii ma wbudowany skaner 1D/2D” | SS przypis 3, D1/D2 (WCMTB-H25B6DCJ1-A6 bez skanera) | **niezgodne** dla HC25 — poprawione (dopisana wersja HC25 bez skanera z odczytem aparatem) |
| Filtry | Tylko Wi-Fi: HC20, HC50; Wi-Fi + 5G: HC25, HC55; przycisk w obudowie: 4 × Zebra | SS | zgodne |

## Poprawki (commit na gałęzi `weryfikacja/zebra-hc-v3`)
1. `zebra-hc20` opis: „Terminal z baterią 3800 mAh można ładować dowolnym standardowym przewodem USB-C” (było: „Baterię … można ładować”).
2. `zebra-hc20` shortDescription bez „z zielonym celownikiem” (142 znaki) — meta description i opis JSON-LD nie urywają się w połowie zdania.
3. `zebra-hc25` FAQ o sieci prywatnej: „Karta nano SIM i eSIM pracują w trybie Dual SIM / Dual Standby” (bez „jednoczesnego korzystania”).
4. `zebra-hc25` FAQ „Alternatywy”: dopisany Honeywell CT37 HC (wersja 5G).
5. `zebra-hc55` FAQ o sieciach: „Obie karty, nano SIM i eSIM, obsługują tryb Dual SIM / Dual Standby” (bez „aktywne jednocześnie”).
6. `zebra-hc55` FAQ „Alternatywy”: dopisany Datalogic Memor 17 HC.
7. `zebra-stacja-dokujaca-2slot-hc20-hc50` seoTitle: „… (terminal i bateria) do HC20 / HC25 / HC50 / HC55”.
8. `zebra-pasek-na-reke-hc20-hc50` zastosowanie zgodne z przewodnikiem: „Trzymanie terminala w dłoni z dostępem do przycisku alarmowego”.
9. `zebra-zaslepka-usb-c-hc20-hc50` opis: „Każdy terminal powinien mieć jedną zaślepkę” (zamiast deklaracji, że jest w zestawie).
10. `healthcare-terminal-category.ts` FAQ o opaskach: skaner we wszystkich modelach z zastrzeżeniem wersji HC25 bez skanera.

Kontrola: `porownaj-opisy.py` (`products.ts`, prefiks `zebra-`, pola description / shortDescription / seoDescription / faq) — liczba par z powtórzeniami bez zmian, karty HC20–HC55 bez wspólnych 6-gramów; nowe zdania sprawdzone także względem `honeywell-hc-terminals.ts`, `datalogic-hc-terminals.ts`, `cipherlab-products.ts` i `healthcare-terminal-category.ts`. `npx tsc --noEmit` i `npx next build` bez błędów.

## Sprawy dla właściciela (bez zmian w tej gałęzi)
- Meta description kart Zebra-terminali budowana jest z shortDescription i ceny („Od 3503,63 zł netto.”) — mechanizm `page.tsx` dla wszystkich terminali Zebra, poza zakresem treści kart.
- Dymek OneCare (`ServicePlansBox.tsx`, wspólny dla wszystkich kart Zebra) obiecuje „wymianę urządzenia” i naprawę w 3 dni robocze dla Essential — warto sprawdzić z warunkami Zebra OneCare.
- Karta `zebra-tc201-crd-tc2l-1snws-01` (Connect Cradle, polecana przy HC2X/HC5X) w nazwie i opisie wymienia tylko TC22 / TC27 / TC201; przewodnik AG s. 11 potwierdza ją dla HC2X/HC5X z przewodem DC CBL-DC-388A2-01.
- Zdjęcia 7 akcesoriów HC mają 586 × 592 px (zaślepka 800 × 800); obraz poprawny, ale poza standardem 800 × 800.
- Baner serwis-zebry.pl (alt i nagłówek w kategorii) używa słowa „autoryzowany” — komponent wspólny.
