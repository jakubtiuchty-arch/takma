# Audyt P: Honeywell CT37 HC, akcesoria HC i podkategoria „Terminale dla służby zdrowia” (25.10.2026)

Gałąź `audyt/terminale-hc-p` (baza `integracja/terminale-hc`, 160f816f). Audyt niezależny: każde twierdzenie widoczne dla klienta porównane z dokumentem producenta. Teksty agentów T1/T3 i ich dokumentacja traktowane wyłącznie jako mapa.

## Źródła (stan 25.10.2026)

| Dokument | Plik / adres |
|---|---|
| Honeywell CT37 HC Mobile Computer Datasheet, Rev C 09/25 | `public/downloads/honeywell/honeywell-ct37-hc-karta-katalogowa-en.pdf` (kopia `hc4/src/honeywell/hon-ia-pss-ct37-hc-ds-en.*`) |
| Honeywell CT37 Configuration Guide (sekcje Healthcare, mapa PN, Appendix) | `public/instrukcje/honeywell-ct37-konfiguracja-en.pdf` (tekst `hc4/ct37-config.txt`) |
| CT37 / CT37 HC Accessories Guide, Rev B 10/24 | `hc4/src/honeywell/hon-ia-pss-ct37-accessories-guide-en.*` |
| Strona CT37 HC (GB) | automation.honeywell.com/gb/en/…/healthcare-computers/ct37-hc-handheld-computer (`hc4/src/honeywell/hw-ct37-hc-handheld-computer.*`) |
| Honeywell Healthcare Disinfectant-Ready Housing Application Brief, Rev E 10/22 | `hc4/src/honeywell/bluestar-copy_sps-ppr-healthcare-cleaning-guide.*` |
| Zebra HC2X/HC5X Product Spec Sheet, 05/14/2025 | `hc4/src/zebra/hc2x-hc5x-spec-sheet-en-us.pdf` (tekst `en.txt`) |
| Datalogic Memor 12-17 Healthcare datasheet, Rev A | `public/datasheets/datalogic-memor-12-17-hc-en.pdf`; strona `hc4/src/datalogic/dl-memor-12-17-hc-pd-1130.txt` |
| CipherLab RS38H brochure 09/2024 | `hc4/src/cipherlab/CipherLab_RS38H_Brochure_EN.pdf`; strona `rs38h.html` |
| CipherLab Mobile Computers — Cleaning and Disinfecting Guideline | cipherlab.com/en/a3-2388/Mobile-Computers.html (kopia `hc4/src/audit-p/cl/mc-cleaning.html`, pobrana 25.10) |
| Ceny i dostępność | `https://www.takma.com.pl/api/stock` — 2 wywołania 25.10 (`hc4/src/audit-p/api/call1.json`, `call2.json`) |

## Ustalenia i poprawki

| ID | Karta / miejsce | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| P-01 | honeywell-ct37-hc | imageDescriptions[0] | „…tył z oknem skanera i przód z ekranem” | „…tył z modułem aparatu i przód z ekranem” | zdjęcie `CT37-X0N-56S10HG-3.png`: okno skanera jest na górnej krawędzi, z tyłu niewidoczne | NIEPRECYZYJNE |
| P-02 | honeywell-ct37-hc | imageDescriptions[1] | „tył … z oknem skanera N6700, aparatem i pokrywą baterii” | „tył … z modułem aparatu i pokrywą baterii” | zdjęcie `CT37-X0N-56S10HG-2.png` | NIEPRECYZYJNE |
| P-03 | honeywell-ct37-hc | imageDescriptions[3] | „ujęcie z góry na okno skanera…, przycisk zasilania i złącza na spodzie” | „dwa terminale: górna krawędź z oknem skanera N6700 w niebieskiej ramce i przyciskiem zasilania, dolna krawędź z portem USB-C” | zdjęcie `CT37-X0N-56S10HG-4.png` (dwa urządzenia) | NIEPRECYZYJNE |
| P-04 | honeywell-ct37-hc | FAQ „Jak dezynfekować…” | „Honeywell zatwierdził 46 takich środków i publikuje ich wykaz w przewodniku czyszczenia obudów Disinfectant Ready Housing.” | „Honeywell zatwierdził dla obudowy CT37 HC 46 takich środków. Przed wdrożeniem należy porównać środki stosowane w placówce z aktualnym wykazem producenta.” | „46 approved solutions” — strona CT37 HC; Application Brief Rev E 10/22 (s. 3–4) nie wymienia CT37 HC, aktualny przewodnik jest niepubliczny | SPOZA |
| P-05 | honeywell-ct37-hc | FAQ „…aktualizacje i gwarancja” | „trzyletnie kontrakty serwisowe Edge Services” | „kontrakty serwisowe Edge Services Gold i Platinum na 3 lub 5 lat” | Configuration Guide, Honeywell Edge Services (SVCCT37-SG3N/-SG5N, -SP3N/-SP5N) | NIEPRECYZYJNE |
| P-06 | honeywell-ih45-cord-eu | priceFrom, updatedAt | 54.23, 2026-10-19 | 54.49 (API, oba wywołania), 2026-10-25 | `/api/stock?pn=77900508E` | SPRZECZNE (z API) |
| P-07 | honeywell-ct37 | FAQ „Czy CT37 nadaje się do środowisk wymagających dezynfekcji?” | „IP65 + IP68, więc znosi mycie i wilgoć… osobną wersję CT37 HC w obudowie HC” | „Każda konfiguracja CT37 ma obudowę przygotowaną do dezynfekcji (Disinfectant Ready Housing) i szczelność IP65 oraz IP68… CT37 HC: biała z niebieskimi akcentami, ze skanerem N6700 i z osobnymi akcesoriami HC” | Configuration Guide: mapa PN (D/H/W = DRH), Feature Overview; datasheet (IP65/IP68 nie oznacza odporności na mycie) | NIEPRECYZYJNE |
| P-08 | kategoria | definition (akapit 2) | „…albo gestem, a Honeywell CT37 HC ma przycisk PTT.” (PTT w zdaniu o alarmie) | „…albo gestem. Honeywell CT37 HC nie ma przycisku alarmowego, ma natomiast przycisk PTT.” | datasheet CT37 HC, „Hard keys”: głośność, skanowanie L/P, zasilanie, PTT | NIEPRECYZYJNE |
| P-09 | kategoria | comparisonTable.note | „„—” oznacza, że karta katalogowa nie wymienia przycisku alarmowego.” | „„—” oznacza brak przycisku alarmowego w obudowie.” | AGENTS.md (bez notatek o źródłach); fakt jak P-08 | STYL |
| P-10 | kategoria | tabela: Memor 12 HC, Memor 17 HC — Alarm; buyingGuide „Przycisk alarmowy” | „klips z czerwonym przyciskiem (94ACC0411)” | „klips z przyciskiem alarmowym” | Datalogic DS Rev A: „94ACC0411 Pocket clip w/ emergency button” (kolor nie podany) | SPOZA |
| P-11 | kategoria | technicalDeepDive (CipherLab) | „…ponad 24 środkami…, ale nie publikuje pełnej listy.” | „CipherLab publikuje wykaz zatwierdzonych środków wspólny dla RS35, RS36, RS38 i RS38H, m.in. roztwór alkoholu izopropylowego 70–91%, alkohol medyczny 75%, Sani-Cloth Plus i CaviWipes. RS38H przetestowano także ze sterylizacją światłem UV-C.” | cipherlab.com a3-2388: „List of Approved Cleaning and Disinfection Agents… (Applicable to RS35, RS36, RS38 and RS38H models only)”, poz. 003, 013, 019 i „Medicinal alcohol 75%” | SPRZECZNE |
| P-12 | kategoria | comparisons „Wi-Fi czy 5G” | „Modele z 5G obsługują również prywatne sieci LTE i 5G.” (w akapicie z Memor 17 HC) | „Prywatne sieci LTE i 5G obsługują Zebra HC25 i HC55, Honeywell CT37 HC w wersji 5G oraz CipherLab RS38H.” | Zebra „supports private networking (LTE/5G)”; Honeywell „Private network support in LTE and 5G-NR”; CipherLab „red privada (LTE/5G)” / strona „Supports private networking”; karta Datalogic nie deklaruje | SPOZA |
| P-13 | kategoria | comparisons HC20/HC50 — verdict | „HC20 do podstawowych zadań, HC50 do pracy z większą liczbą aplikacji…” | „HC20 ma 6 GB / 64 GB i Wi-Fi 6, HC50 — 8 GB / 128 GB, Wi-Fi 6E, przedni aparat do wideorozmów i wymianę baterii bez wyłączania.” | Zebra Spec Sheet: Memory, WLAN, Camera, footnote 2 | SPOZA (ocena bez źródła) |
| P-14 | kategoria | buyingGuide „Wymiana baterii”, FAQ „Czy baterię można wymienić…” | SafeSwap bez wyjaśnienia, w odpowiedzi „tak, bez wyłączania” | „SafeSwap, która chroni dane aplikacji przy wymianie baterii … tylko w Memor 17 HC 6 GB / 128 GB” | Datalogic DS: „Safe Swap for application data protection available on M17HC 6/128GB version only” | NIEPRECYZYJNE |
| P-15 | kategoria | technicalDeepDive (Datalogic) | „Datalogic wymienia w karcie Memor 12-17 HC m.in.” | „Datalogic dopuszcza dla Memor 12 HC i 17 HC m.in.” | AGENTS.md (bez notatek o źródłach) | STYL |
| P-16 | kategoria | useCases „Sprzęt i materiały medyczne” | „kodów UDI wyrobów medycznych” | „kodów UDI na sprzęcie medycznym” | brief „Służba zdrowia — szczególnie ostrożnie” (bez terminu „wyrób medyczny”) | STYL |
| P-17 | kategoria | buyingGuide „Praca przy biurku” | „Honeywell — stację CT37 z wyjściem HDMI i portem Ethernet” | „Honeywell oferuje stację Display Base CT37-DB-UVN-HC0 z wyjściem HDMI i portem Ethernet” (+ podział zdania 34 słów) | Configuration Guide, Healthcare Option 3; elementy buyingGuide nie renderują linków, więc PN bez linku | NIEPRECYZYJNE |
| P-18 | kategoria | longDescription (ost. zdanie), intro tabeli, expertAuthority, technicalDeepDive (zdanie 1–2), FAQ 1, 2, 4, howTo 4 | zdania z 6-gramami wspólnymi z `/skanery-dla-sluzby-zdrowia` (do 13 na zdanie) | przeredagowane; zostały tylko wspólne zwroty techniczne i nazwy działów | `ngram-kat.py` przed/po | STYL |
| P-19 | kategoria | definition (akapit 2) | jedno zdanie 33 słów o trzech skanerach | trzy zdania | docs/standard-jezyka.md | STYL |

## Sprawdzone bez uwag

- **honeywell-ct37-hc:** name, seoH1, shortDescription, seoTitle, seoDescription (PN na końcu), description (179 słów, zdania ≤ 25 słów; każde zdanie zgodne z datasheet / stroną / Configuration Guide), wszystkie 34 wiersze specyfikacji (wymiary, masa, ekran 6,0" 2280 × 1080 600 nitów, panel, N6700 0–1 m z zielonym liniowym celownikiem LED, aparaty 13/8 MP, przyciski, audio, WLAN/WWAN/GNSS/BT/NFC, złącza, bateria 3846 mAh z hot swap do −10°C, Quick Charge 4.0 < 3 h, 12+ h, czujniki, SE, IP65/IP68, upadki i przewroty, ESD, temperatury, zestaw, DCP 1 rok, gwarancja 12 mies.), variants (2 PN = konfiguracje z Configuration Guide), variantAttributeTooltips, applications, FAQ 1, 3, 4, 5, 7, downloads (pliki istnieją: 157 KB i 15,3 MB), relatedAccessories (wszystkie 14 potwierdzone dla CT37 Healthcare w Accessories Guide / Configuration Guide), relatedProducts (dotykowe 6" Android).
- **Akcesoria (13 kart + 77900508E):** nazwy, PN, shortDescription, seoTitle, seoDescription, opisy, specyfikacje, zgodność (H/W, WLAN-only klips, osłona szara „not disinfectant ready”, kubki NHC/BHC, przewody C5/C13), bloki „Wymagane” (5CB → 3007-4683-001 C5; DB i QBC → 77900508E C13), zdjęcia 5CB/DB/QBC (oficjalne rendery HC; DB z kubkiem z napisem CT30 — kubek wspólny CT37/CT30 XP).
- **Ceny i dostępność:** 16 PN — priceFrom i availability zgodne z drugim wywołaniem API (poza P-06).
- **Kategoria:** name, description, seoTitle, seoDescription, longDescription (fakty), productIds (8), wszystkie 40 komórek tabeli porównawczej (Zebra HC20/HC25/HC50/HC55 z Zebra Spec Sheet 05/2025: Wi-Fi 6 z 6E po licencji Enterprise, SE4720 z białym oświetleniem i zielonym celownikiem, „30+ wipes and disinfectants”, zaślepka USB-C, Red Duress Button, 3800 mAh, true hot swap HC50/HC55, dowolny przewód USB-C; Honeywell, Datalogic, CipherLab z ich kart), note (ekran 6", NFC, aparat tylny, IP65/IP68, gwarancja 1 rok — wszystkie cztery marki), buyingGuide (jasność 450/600/630 nitów, rękawiczki, sekwencja przeciw fałszywym alarmom, 60 s, Qi bez odsłoniętych styków — strona Datalogic HC), useCases, uniqueInsights, comparisons (3), FAQ (8), howToSteps, expertAuthority.
- **Filtry** (`category-filters.ts`): Producent; Łączność („Tylko Wi-Fi”: HC20, HC50, CT37 HC, Memor 12 HC; „Wi-Fi + 5G”: HC25, HC55, CT37 HC, Memor 17 HC, RS38H — nano SIM i eSIM potwierdzone u wszystkich); „Przycisk alarmowy → W obudowie terminala” tylko modele z fizycznym przyciskiem (Zebra HC2X/HC5X — Red Duress Button; RS38H — „1 programmable key (SOS key)”). Memor HC (przycisk programowalny / gest / klips-akcesorium) i CT37 HC (brak) poprawnie poza filtrem.
- **Menu** (`Navbar.tsx`, grupa Terminale), `subcategory-content.ts`, strona `src/app/terminale-dla-sluzby-zdrowia/page.tsx` (metadata, canonical), `public/llms.txt`, linki do `/terminale-dla-sluzby-zdrowia` z FAQ `/drukarki-dla-sluzby-zdrowia` i `/skanery-dla-sluzby-zdrowia`, FAQ `honeywell-ih45-cord-eu` (opis C13/C5 zgodny z Configuration Guide).
- **Unikalność:** `porownaj-opisy.py` (description, shortDescription, seoDescription, faq) dla CT37 HC, akcesoriów, CT37, Zebra HC, Memor HC i RS38H — 0 wspólnych 6-gramów z udziałem kart Honeywell.

## Rozbieżności źródeł

1. **RFID przy CT37 HC:** datasheet CT37 HC (Accessory Ecosystem) wymienia „RFID reader handle”, a Configuration Guide (Appendix „CT30 XP vs CT37 Accessories”) ma „—” w kolumnie CT37 Healthcare dla adaptera RFID IH45-BK-37S i zestawu wearable. Karta trzyma się Configuration Guide (FAQ 5).
2. **Lista 46 środków:** liczba z strony CT37 HC; lista w Application Brief Rev E 10/22 dla „Mobile computers and scanners for healthcare” liczy 46 pozycji, ale dokument nie wymienia CT37 HC. Listy środków nie podano w treści.
3. **CipherLab:** broszura „over 24 cleaning agents”, strona — 24 numerowane środki i 4 roztwory (IPA ≥ 70%, chusteczki IPA 70%, alkohol medyczny 75%, podchloryn 5,25–8,25%).
4. **Zebra HC25:** Spec Sheet — poza Ameryką Płn. HC20/HC25 mają SE4720, ale „select HC25 models can be configured without scan engine”. Konfiguracji PN WCMTB-H25B6BCJ1-A6 nie potwierdziłem w dokumencie Zebry; komórka tabeli zgodna z kartą sklepu.
5. **94ACC0411:** na zdjęciu przycisk pomarańczowo-czerwony; dokumenty Datalogic nie podają koloru.

## Sprawy dla właściciela

- **CT30-5CB-UVN-HC0** (stacja 5-gniazdowa HC do CT30 XP) ma w API stan 3 szt.; Configuration Guide (Appendix „CT30 XP vs CT37 Chargers”) podaje zgodność z CT37 z wyjątkiem baterii rozszerzonej (CT37 HC ma standardową). Może zastąpić CT37-5CB-UVN-HC0 (0 szt.) — karty nie dodałem.
- Akcesoria CT37 HC: 10 z 14 PN ma 0 szt.; 9 kart ma placeholder zamiast zdjęcia (BTSC-002, HS-HC-3PK, CLIP-LAN-HC, USBC-PLUG-5PK, PB-GRY, SP-1PK, UCP-NHC, UCP-BHC, 3007-4683-001).
- `honeywell-ih45-cord-eu`: zdjęcie to logo z alt „zdjęcie przewodu 77900508E niedostępne”, a opis ma tryb rozkazujący „Dobierz zestaw” (stara treść, poza zmianą T1).
- Karty Zebra HC20/HC25/HC50/HC55 (poza zakresem, do osobnej decyzji): m.in. „antymikrobialna obudowa” (Spec Sheet: „disinfectant ready; healthcare plastics”, bez „antimicrobial”), „Wi-Fi 6E” w HC20 bez zastrzeżenia licencji, „Code Blue”, akapity TCO.
- Dla audytora Q / właściciela: jeśli karty Datalogic HC piszą „czerwony przycisk” przy 94ACC0411 — dokument Datalogic koloru nie podaje (P-10).

## Testy (25.10.2026, `next start -p 3295`)

- `npx tsc --noEmit` — bez błędów; `npx next build` — exit 0 (błędy `/api/stock` z braku lokalnej bazy jak w buildzie integracji).
- HTTP 200: `/terminale-dla-sluzby-zdrowia`, `/produkt/honeywell-ct37-hc`, `/produkt/honeywell-ct37`, 13 akcesoriów HC, `/produkt/honeywell-ih45-cord-eu`, `/skanery-dla-sluzby-zdrowia`, `/drukarki-dla-sluzby-zdrowia`.
- Tabela wariantów CT37 HC: `scrollWidth = clientWidth` przy 1440/1280/1024 (brak niedostępnych wariantów, więc bez przycisku „Pokaż niedostępne warianty”). Strona przy 390 px bez poziomego przewijania (CT37 HC, kategoria, stacja 5CB).
- Akcesoria na karcie CT37 HC: 4 widoczne, „Pokaż pozostałe (10)” → 14, „Zwiń” działa; jeden dział „Akcesoria”.
- Kategoria: 8 kafli, filtry Producent / Łączność / Przycisk alarmowy, link w menu. Tabela porównawcza przewija się przy 1024 px (831/686) — tak samo jak w `/skanery-dla-sluzby-zdrowia` (810/686) i `/drukarki-dla-sluzby-zdrowia` (901/686); to zachowanie komponentu `TabelaPorownawcza`, nie tabela wariantów.
- Zrzuty: `$SP/hc4/shots-audyt-P/` (CT37 HC, kategoria, stacja 5CB — 1440 i 390; tabela i kafle kategorii; akcesoria zwinięte i rozwinięte).
