# Audyt B — ZQ6 Plus-HC, akcesoria HC, Z-Band Direct, `/drukarki-etykiet-apteka`, ZQ610 Plus / ZQ620 Plus (25.10.2026)

Dokument roboczy, nie jest treścią dla klienta. Gałąź `audyt/hc-b` (baza `produkt/hc-opaski`, 9dbdd82c).

`$SP` = `/private/tmp/claude-501/-Users-jakubtiuchty-takma/ac3db9fd-eaa6-4337-bc62-04cc01b87260/scratchpad`

## Źródła

| Skrót | Dokument | Plik / adres | Data |
|---|---|---|---|
| K-HC | ZQ6 Healthcare Series spec sheet EN | `$SP/hc/src/zq600-series-hc-spec-sheet-en-us.txt` | 01/07/2026 |
| K-ZQ6 | ZQ6 (ZQ600 Plus) spec sheet PL | `public/datasheets/zq600-series-spec-sheet-pl-pl.pdf` → `$SP/hc/src/audit/zq600-plus-spec-pl.txt` | 01/07/2026 |
| P | Mobile Printer Accessory Guide | `$SP/hc/src/mobile-printer-accessory-guide-en-us.txt` | 03/2026 |
| S610 / S620 | Strony Zebry PL ZQ610 Plus-HC, ZQ620 Plus-HC (opis, zawartość opakowania, „Zastępuje”) | `$SP/hc/src/zq61x-plus-hc-page.txt` | 10/2026 |
| WG | Zebra Wristband Solutions Guide (en-gb), pobrany 25.10 | `$SP/hc/src/audit/wristband-solutions-guide-en-gb.pdf/.txt` | 04/09/2026 |
| ZB | Z-Band Direct spec sheet (ZBAND-FS) | `$SP/hc/src/z-band-direct-spec-sheet-en-us.txt` | 01/15/2025 |
| K-ZD | Karty HC ZD411/ZD421/ZD611/ZD621 (03/2024), ZD510-HC (10/2025), UG ZD510 | `$SP/hc/src/*-hc-spec-sheet-en-us.txt`, `zd510-ug-en.txt` | |
| D | Dystrybutorzy (tylko fakty o PN): zebrasklep.pl (prod4519/4520/4526), zpsstore.com, advanced-automationinc.com, spartanpos.com, ERS, Bechtle | `$SP/hc/h3-web/`, `$SP/hc/src/audit/web/` | 25.10.2026 |

## Ustalenia i poprawki

| ID | Karta | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| B-01 | zebra-zq620-plus-hc | faq[0] | „Baterię, zasilacz, stację Ethernet, pasek … oraz klipsy wersja HC ma własne … Do ZQ620 Plus-HC wybieraj baterię i zasilacz…” | stacja Ethernet pasuje w wersji standardowej i z zasilaczem IEC 60601; „przeznaczone są bateria i zasilacz w wersji Healthcare” | P s. 9 (l. 428–439: P1031365-035 zgodna z ZQ610 Plus HC / ZQ620 Plus HC) | SPRZECZNE (+ forma 2. os.) |
| B-02 | zebra-zq620-plus-hc | faq[4] | IQ Color „automatycznie oznaczają próbki pilne (STAT)” | „automatyzują oznaczanie próbek pilnych (STAT)” | K-HC s. 4 l. 206 („Automate the identification of STAT specimens”) | NIEPRECYZYJNE |
| B-03 | zebra-zasilacz-iec60601-zq6-hc-p1065668-010 | shortDescription, description, specifications | „30 W”, „przewód sieciowy z wtyczką EU (typ C) w zestawie” | „wersja z wtyczką EU”; spec. „Wersja regionalna: EU”; bez mocy | P s. 9 l. 373–381 (PN regionalne); moc i przewód tylko u jednego dystrybutora (Delfi), ERS bez mocy | SPOZA |
| B-04 | zebra-zasilanie-sieciowe-hc-chg-mpp-bepsac1-2 | shortDescription | „…ZQ620 Plus-HC lub ZQ600 Plus” (seria obejmuje ZQ630 Plus, niezgodny) | „…ZQ610 Plus lub ZQ620 Plus” | P s. 7 l. 296–305 | NIEPRECYZYJNE |
| B-05 | zebra-zq620-plus-hc | description | „Drukuje w rozdzielczości 203 dpi z prędkością do 115 mm/s.” (6-gramy wspólne z ZQ210/ZQ310 Plus) | „Rozdzielczość druku to 203 dpi, a prędkość sięga 115 mm/s.” | `porownaj-opisy.py` | STYL |
| B-06 | zebra-cable-db9-zq610 (P1031365-053) | specifications „Kompatybilność” | „ZQ610, ZQ610 Plus, QLn220, ZQ610 Plus-HC, ZQ620 Plus-HC” | pełna lista z przewodnika (ZQ6 Plus, ZQ6 Plus HC, ZQ6, ZQ6 HC, QLn, QLn HC) | P s. 12 l. 670–682 | NIEPRECYZYJNE |
| B-07 | zebra-zband-direct-infant | specifications | „Badanie MR” | „Rezonans magnetyczny (MR)” — karta nie opisuje badania, tylko „considered to be MR safe” | ZB s. 2 („Regulatory and compliance”) | NIEPRECYZYJNE |
| B-08 | /drukarki-etykiet-apteka | definition | „Oznaczeń dokumentacji pacjenta i wyposażenia — ZD411-HC i ZD611-HC” | „… ZD411-HC, ZD421-HC, ZD611-HC i ZD621-HC” | K-ZD: ZD421-HC l. 128–129, ZD621-HC l. 130–131 („Patient record labels”, „Asset labels”) | NIEPRECYZYJNE |
| B-09 | zebra-zq610-plus | seoTitle, seoDescription | „premium 2" Wi-Fi 6 \| od 3 256 zł”; „BT 5.3 … od 3 256 zł netto” (oferowane PN mają BT 4.2 / Wi-Fi 5 + BT 4.2) | bez ceny i superlatyw; kombinacje fraz; PN obu wariantów | AGENTS.md, K-ZQ6 (Łączność) | STYL / SPRZECZNE |
| B-10 | zebra-zq610-plus | description | akapit „to najlepszy wybór dla handlu…” | usunięty (kolejny akapit zaczyna się od nazwy modelu) | — | STYL |
| B-11 | zebra-zq610-plus | description | „flagowa … waga zaledwie 600 g czynią ją jedną z najlżejszych … na rynku” | „Ma wymiary 170,9 × 91,4 × 72,4 mm i waży z baterią 600 g.” | K-ZQ6 (Wymiary, Waga) | STYL |
| B-12 | zebra-zq610-plus | specifications „Gwarancja” | „2 lata (bateria: 1 rok, głowica: 6 mies.)” | „12 miesięcy od daty wysyłki” | K-ZQ6 „Gwarancja na produkty”: 1 rok od daty wysyłki | SPRZECZNE |
| B-13 | zebra-zq610-plus | faq (odporność) | „upadek z 1,52 m … Nie posiada certyfikatu MIL-STD — dla wymagań wojskowych polecamy ZQ511/ZQ521…” | „wielokrotne upadki z 1,52 m”; bez zdania o MIL-STD | K-ZQ6 (MIL-STD nie występuje) | SPOZA |
| B-14 | zebra-zq610-plus | faq (etykiety) | „o szerokości 15–56 mm” | „25–55,4 mm” | K-ZQ6 „Szerokość podłoży” | SPRZECZNE |
| B-15 | zebra-zq610-plus | faq (serwis) | „autoryzowany partner Zebra” | „partner Zebra” | zasada TAKMA / brief | STYL |
| B-16 | zebra-zq610-plus | editorialReview | „najlepsza mobilna drukarka 2-calowa na rynku” | „mobilna drukarka 2-calowa dla handlu detalicznego i serwisu” | — | STYL |
| B-17 | zebra-zq610-plus | downloads | `…/zebra-zq610-plus/instrukcja-po-polsku` (HTTP 404) | `…/zebra-zq610plus/…` (HTTP 200) | curl 25.10 | SPRZECZNE |
| B-18 | zebra-zq610-plus | relatedProducts | ZQ310 Plus, ZQ620 Plus (3"), ZQ210 | + ZQ610 Plus-HC, bez ZQ620 Plus | reguła: drukarki mobilne tylko tej samej szerokości | NIEPRECYZYJNE |
| B-19 | zebra-zq610-plus | description | „Specyfikacja techniczna zgodna z danymi producenta (zebra.com).” | usunięte | AGENTS.md (bez notatek o źródłach) | STYL |
| B-20 | zebra-zq610-plus | faq (ZQ610 Plus vs ZQ511) | „ZQ511 ma certyfikat MIL-STD-810G. ZQ610 Plus jest idealna do…” | „ZQ610 Plus służy głównie do metek cenowych i pokwitowań, a ZQ511 do…” | — | STYL / SPOZA |
| B-21 | zebra-zq620-plus | seoTitle, seoDescription | „\| od 3 621 zł”, „od 3 621 zł netto” | bez ceny; kombinacje fraz; PN 4 wariantów | AGENTS.md | STYL |
| B-22 | zebra-zq620-plus | description | „najlepszy wybór … z Wi-Fi 6E i Bluetooth 5.3” | akapit usunięty | K-ZQ6: moduł Wi-Fi 6 (802.11ax); „6/6E” dotyczy modernizacji sieci, nie drukarki | SPRZECZNE |
| B-23 | zebra-zq620-plus | specifications | „Test tumble: 500 upadków obrotowych”, „Certyfikat wojskowy: MIL-STD-810G” | usunięte | K-ZQ6 (brak obu) | SPOZA |
| B-24 | zebra-zq620-plus | specifications „Gwarancja” | „2 lata (bateria: 1 rok, głowica: 6 mies.)” | „12 miesięcy od daty wysyłki” | K-ZQ6 | SPRZECZNE |
| B-25 | zebra-zq620-plus | faq (odporność) | „certyfikat MIL-STD-810G … plus 500 upadków obrotowych (tumble)” | „wielokrotne upadki z 1,52 m” | K-ZQ6 | SPOZA |
| B-26 | zebra-zq620-plus | faq (ZQ620 vs ZQ610) | „…i posiada certyfikat MIL-STD-810G” | usunięte | K-ZQ6 | SPOZA |
| B-27 | zebra-zq620-plus | editorialReview | „optymalny wybór … certyfikat MIL-STD-810G … zapewniają niezawodność” | „mobilna drukarka 3-calowa … Kolorowy wyświetlacz LCD, IP54 i opcja Wi-Fi 6 ułatwiają pracę w terenie” | K-ZQ6 | SPOZA / STYL |
| B-28 | zebra-zq620-plus | downloads | `…/zebra-zq620-plus/…` (404) | `…/zebra-zq620plus/…` (200) | curl 25.10 | SPRZECZNE |
| B-29 | zebra-zq620-plus | relatedProducts | ZQ511, ZQ320 Plus, ZQ610 Plus (2"), ZQ630 Plus (4") | ZQ620 Plus-HC, ZQ511, ZQ320 Plus, ZQ220 Plus | reguła szerokości | NIEPRECYZYJNE |
| B-30 | zebra-zq620-plus | description, faq (linerless) | „redukuje odpady o 40%”, „ok. 40% … więcej etykiet na rolce” | „Wariant ZQ62-AUWBE14-00 drukuje na etykietach bez podkładu”; „nie mają podkładu, który trzeba wyrzucić” | K-ZQ6 (brak liczb) | SPOZA |
| B-31 | zebra-zq620-plus | faq (serwis) | „autoryzowany partner Zebra” | „partner Zebra” | brief | STYL |
| B-32 | zebra-zq620-plus | description | „Specyfikacja techniczna zgodna z danymi producenta (zebra.com).” | usunięte | AGENTS.md | STYL |
| B-33 | zebra-zq620-plus | faq (kurier) | „to idealna drukarka dla kurierów” | „służy kurierom do drukowania…” | — | STYL |

Liczba ustaleń: SPRZECZNE 7 (B-01, B-12, B-14, B-17, B-22, B-24, B-28), NIEPRECYZYJNE 7 (B-02, B-04, B-06, B-07, B-08, B-18, B-29), SPOZA 7 (B-03, B-13, B-23, B-25, B-26, B-27, B-30), STYL 12.

## Sprawdzone bez uwag

**ZQ610 Plus-HC / ZQ620 Plus-HC** (zdanie po zdaniu z K-HC, S, P):
- name, shortDescription, seoTitle, seoDescription (bez cen, marka + model, PN na końcu).
- description: 2"/3" DT dla ochrony zdrowia; próbki przy łóżku pacjenta, bank krwi, worki z krwią i mleko matki (S610/S620 „Opis”, K-HC „Markets”); „Zastępuje ZQ610/ZQ620 Healthcare” (S); tworzywa „medical-grade, disinfectant-ready … cleaned between each use” (K-HC s. 2); 0,6 / 0,73 kg; klips w zestawie (S „Zawartość opakowania”: drukarka, instrukcja szybkiego uruchomienia, przewodnik regulacyjny, akumulator, klips); 203 dpi, 48/72 mm, 115 mm/s, rolka 55,9/66 mm, materiał 25–55,4 / 25–79 mm; czujnik obecności etykiety; uśpienie i wybudzanie przez Wi-Fi i BT; wyświetlacz 288 × 240 zmienia kolor (np. „latch open”); IP54, wielokrotne upadki 1,52 m; bateria 3250 mAh 23,4 Wh, wbudowana ładowarka; zgodność wsteczna z akcesoriami QLn; stacja Ethernet: aktualizacja firmware i monitorowanie baterii.
- IEC 60601: wszędzie przypisane zasilaczowi / zestawowi BEPSAC, nigdzie drukarce (K-HC s. 3, P s. 7, 9). Bez UV i bez uszczelnionych przycisków przy ZQ6 HC (karta tego nie podaje) — poprawnie.
- specifications: każdy wiersz z K-HC (łączność, zabezpieczenia, interfejsy USB Mini-B / RS-232C 14-pin, NFC, pamięć, procesor, języki, zarządzanie, kody, czcionki, temperatury 0–50 °C / −25–65 °C, wilgotność, wymiary, normy, FIPS); gwarancja 12 miesięcy od daty wysyłki (K-HC „Product Warranty”). Gilza 19 mm — zgodna z konfiguracją PN („Linered platen, 0.75" core”), linerless pominięty świadomie (wałek z podkładem we wszystkich PN HC).
- Warianty i atrybuty: ZQ61-HUXAE04-00 = Wi-Fi 6 + BT 5.3 (Zebra DAM `0017/zq61-huxae04-00-…-zq610-plus-hc.png` z plakietką Wi-Fi 6, HTTP 200; kod `X` = „Wi-Fi 6 Dual Radio (802.11AX / BT5.x)” w ZQ62-HUXAE04-00 (zebrasklep prod4526) i ZQ61-HUXA004-00 (PTS Mobile, zpsstore, Barcode Factory)); ZQ61-HUFAE04-00 = BT 4.x (zebrasklep prod4520, industry-electronics.de), wersja 4.2 z K-HC; ZQ62-HUXAE04-00 = Wi-Fi 6 + BT 5.x (zebrasklep prod4526). Dostępność wg API 24.10 (0 szt. → unavailable).
- variantAttributeTooltips, faq (poza B-01, B-02), applications — z K-HC i P; „druk z systemu szpitalnego przez sieć” tylko ogólnie, bez certyfikacji systemów.
- imageDescriptions — obejrzane wszystkie 12 zdjęć (arkusz `$SP/hc/audit-b/s1.jpg`): kąty, etykiety z przykładowymi danymi, zestaw z baterią i klipsem (ZQ620 -5), grupa ZQ620 z lewej / ZQ610 z prawej — opisy pasują.
- downloads: karta HC PL lokalnie (209 040 B = 204 KB), instrukcje `zebra-zq610plus` / `zebra-zq620plus` (200), `/sterowniki` (200); sameAs (200).
- relatedAccessories: każdy PN ma w P zgodność z ZQ610 Plus HC / ZQ620 Plus HC (bateria s. 5, ładowarki 1/3/6 s. 6, BEPSAC s. 7, zasilacz i stacja s. 9, pasek i klipsy s. 12, przewody USB P1031365-055 i DB9 P1031365-053 s. 12–13). relatedProducts: 2" z 2", 3" z 3".

**Akcesoria HC**: bateria BTRY-MPP-34MAHC1-01 (P s. 5; zgodność z ZQ6 Plus HC, ZQ6 HC, QLn HC; „polled and managed”), stacja P1065668-025 (P s. 9; K-HC s. 3: 10/100 auto-sense, ładowanie w drukarce, druk w stacji, diody, zarządzanie także drukarkami BT), pasek P1065668-021 (61 in = 155 cm, disinfectant-ready, pętla, haczyki osobno), klipsy P1099875-057 (20 szt., „ZQ6 Healthcare”; standardowe P1031365-028), BEPSAC1-2 / BEPSAC2-01 (IEC60601, sale pacjentów, wózki i biurka, przewód do przodu / obrócony 180° do tyłu, przewód 46629 EU osobno, zgodność łącznie z ZQ511/ZQ521/ZQ521R). Zmienione karty ładowarek 1/3/6-gn. i przewodu USB — zgodne z P. Zdjęcia akcesoriów obejrzane (`$SP/hc/audit-b/s2.jpg`); P1065668-025 ma logo zastępcze (brak zdjęcia w źródłach).

**Z-Band Direct** (10006995K, 10006999K, 10006998K):
- PN i wymiary: WG s. 7 (adult 1" × 11" 25 × 279 mm, pediatric 1" × 7" 25 × 178 mm, infant 1" × 6" 25 × 152 mm); kolory -RK, -2K … -7K; UltraSoft 10015358K (1" × 6"), Newborn 10035439K (19 × 195 mm, regulowany).
- Liczba opasek w kartridżu: Zebra nie podaje jej w WG ani w ZB. Potwierdzona długim opisem Zebry u trzech dystrybutorów: 10006995K — 200 (zpsstore, advanced-automation); 10006999K — 300 (zpsstore, advanced-automation, spartanpos); 10006998K — 350 (zpsstore, advanced-automation, spartanpos); 6 kartridży w opakowaniu we wszystkich. Wartości na kartach (200/300/350, 1200/1800/2100) — bez zmian.
- Materiał, powłoka srebrowa, zapięcie (bez ponownego zapięcia), nacięcia, testy (woda 40 °C 6 h, IPA 70/91% 50×, Purell 50×, betadyna 100×, >1000× sucha tkanina, 45 lbf), −40–60 °C po 24 h, lateks/BPA, MR safe, „Test in Your Application” dla alkoholu/amoniaku/wybielacza, chip w kartridżu (rozmiar, zaczernienie, prędkość) — ZB, WG s. 5. Opisy zdjęć pasują (kartridż z chipem, stos kartridży, opaski z nadrukiem; „zdjęcie poglądowe”).

**/drukarki-etykiet-apteka**: cechy HC (tworzywa do dezynfekcji, UV w ZD411/421/611/621-HC i ZD510-HC, IEC 60601-1 zasilacza, uszczelnione przyciski w ZD411/421/611/621-HC, biała kolorystyka, bateria 2750 mAh) — K-ZD; zastosowania per model (recepty, próbki, worki z krwią i IV tylko ZD421/ZD621-HC, opaski — „Patient ID wristband(s)” w kartach ZD4/ZD6 HC); szerokości 56/48/108 mm; 203/300 dpi; termotransfer w ZD421/611/621-HC (ZD411-HC tylko DT); ZD510-HC szerokości 19,05/25,4/30,16 mm, przechowywanie 0–21 °C 35–50% RH, ładowanie od góry; przewodnik „Guide To Disinfecting and Cleaning Zebra Healthcare Printers” (UG ZD510 l. 3008); PrintSecure, taśma TT z danymi (ZB, K-ZD411). Bez cen, bez FMD/GMP/RODO/HIPAA, bez nazw programów.

## Rozbieżności źródeł

1. Strona PL ZQ610 Plus-HC wymienia opcję Wi-Fi 5 (802.11ac) + BT 4.2 (PN ZQ61-HUWAE04-00), karta 01/2026 i „Najważniejsze funkcje” tej samej strony — tylko Wi-Fi 6 + BT 5.3 albo BT 4.x. Na karcie sklepu brak tego PN (bez ceny w API) — bez wpływu.
2. Bluetooth samodzielnego modułu: K-HC „4.2”, strony Zebry i opisy PN „4.x” — przyjęto 4.2.
3. Złącze USB: K-HC EN „Mini-B”, karta ZQ6 PL „micro-B” — przyjęto Mini-B (EN rozstrzyga).
4. Z-Band Direct: klej „rubber” (tekst) vs „acrylic” (tabela); przechowywanie 22 °C / 50% RH (ZB) vs 0–21 °C / 35–50% RH (karta ZD510-HC, kartridż); metodyka testów opisana dla „Z-Band Comfort”. Treść kart nie podaje rodzaju kleju; przechowywanie wg karty drukarki.
5. Delfi podaje dla 10006998K „300 pc(s)” przy opisie „350/roll”; trzech innych dystrybutorów z opisem Zebry — 350.
6. Moc zasilacza P1065668-010 („30W”) tylko u Delfi; Zebra i ERS bez mocy — usunięto (B-03).

## Otwarte kwestie (poza poprawkami)

- ZQ61-HUXAE14-00 (cena 3960,54 zł, 0 szt.) nadal pominięty — opis Zebry nie potwierdza paska na ramię (jak H3).
- Karty ZQ610 Plus / ZQ620 Plus nadal zawierają nieudokumentowane liczby, których brief nie obejmował: liczba etykiet na baterii, czas ładowania, „wydłuża żywotność baterii o 30%”, koszty eksploatacji w FAQ, tabela porównawcza z kolumną „Cena od” (wzorzec w 343 miejscach katalogu), wspólne 6-gramy z ZQ210/ZQ220 Plus/ZQ310 Plus/ZQ320 Plus (szablon sprzed HC). Proponowane osobne przepisanie obu kart z karty ZQ6.
- `zebra-cable-db9-zq610` w opisie nadal „Pasuje także do ZQ630 Plus RFID” — poza zakresem HC, niesprawdzane.
- Stacja P1065668-025: logo zastępcze; Jarltech: wycofanie do 01.01.2027.

## Testy

- `porownaj-opisy.py` (n = 6; description, shortDescription, seoDescription, faq) na `zebra-hc-zq6-products.ts` i Z-Band: 0 par; krzyżowo z kartami ZQ/ZD (połączony plik): karty HC — 0 par po B-05.
- `npx tsc --noEmit` — 0 błędów; `npx next build` — sukces (w logu tylko znane błędy Prisma `/api/stock` bez lokalnej bazy).
- `next start -p 3222`: 15 kart i strona apteki — HTTP 200, także zmienione akcesoria ZQ (slugi `zebra-ladowarka-1-gniazdowa-zq5-zq6`, `zebra-kabel-usb-zq610`, `zebra-kabel-db9-zq610`) i oba PDF. Tabela wariantów ZQ610/ZQ620 Plus-HC i Plus: scrollWidth = clientWidth przy 1440 (1216), 1280 (1216), 1024 (960); strona bez poziomego przewijania przy 390. Zrzuty: `$SP/hc/shots-audyt-B/`. Na stronach ZQ610/ZQ620 Plus widać jeszcze „najlepszy wybór” i MIL-STD z danych kart powiązanych (ZQ210, ZQ220 Plus, ZQ310 Plus, ZQ320 Plus) — poza zakresem.
