# Audyt Q: Datalogic Memor 12 HC / 17 HC z akcesoriami, CipherLab RS38H, middleware (25.10.2026)

Gałąź `audyt/terminale-hc-q` (z `integracja/terminale-hc`, 160f816f). Audyt przed wdrożeniem, niezależny od dokumentacji T2/T3: każde zdanie widoczne dla klienta porównane z dokumentem producenta.

## Źródła

| Skrót | Dokument |
|---|---|
| DS-HC | Datalogic DS-MEMOR12-17-HEALTHCARE-EN Rev A (`public/datasheets/datalogic-memor-12-17-hc-en.pdf`, 2 strony; treść identyczna z kopią Barcode Factory bez strony reklamowej) |
| PD-1130 | Strona Memor 12/17 HC, datalogic.com pd-1130 (`$SP/hc4/src/datalogic/dl-memor-12-17-hc-pd-1130.txt`) |
| PD-1102 | Strona Memor 12-17, sekcja „Models & Accessories” (`$SP/hc4/src/datalogic/dl-memor-12-17-pd-1102.txt`, linie 305–515) |
| UM | Instrukcja Memor 12/17 © 2025 (`public/downloads/memor12_17_um.pdf`) |
| HIMSS | Komunikat Datalogic HIMSS 2026 (`$SP/hc3/src/datalogic/dl-pr-himss-2026.txt`) |
| CL-WEB | Strona CipherLab RS38H Series (`$SP/hc4/src/cipherlab/rs38h.html`) |
| CL-BR | Broszura CipherLab RS38H TR38HX0101501-09/2024 (= `public/datasheets/cipherlab-rs38h.pdf`) |
| JT / ERS | Jarltech RS38H (`jarltech-rs38h.html`), ERS UK akcesoria RS38H (`ers-rs38h-acc.html`) — tylko opisy PN |
| API | `https://www.takma.com.pl/api/stock` — 2 wywołania 25.10.2026, rozstrzyga drugie |

## Ustalenia i poprawki

| ID | Karta | Pole | Było | Jest | Źródło | Kategoria |
|---|---|---|---|---|---|---|
| Q01 | datalogic-memor-12-hc | description | „Zielony punkt Green Spot wyświetlany na kodzie potwierdza udany odczyt.” | „Zielony punkt Green Spot potwierdza udany odczyt.” | DS-HC s. 2 Scan Engine: „Green Spot for good-read feedback” | SPOZA |
| Q02 | datalogic-memor-12-hc | imageDescriptions[0] | „…widok z tyłu na aparat oraz okno skanera” | „…widok z tyłu na aparat, diodę LED i logo Datalogic” | zdjęcie 944950027.png (z tyłu nie ma okna skanera); UM s. 4 Top View: „Data Capture Window” na górnej krawędzi | NIEPRECYZYJNE |
| Q03 | datalogic-memor-12-hc | faq[0] | „znosi dezynfekcję preparatami stosowanymi w szpitalach” | „jest przygotowana do częstej dezynfekcji środkami z listy Datalogic” | PD-1130: „disinfectant-ready and resistant to a wide range of commonly used cleaning agents”; DS-HC Chemical Resistance | NIEPRECYZYJNE |
| Q04 | datalogic-memor-12-hc | faq[2] | „…albo do gestu na ekranie” | „…albo do zdefiniowanego gestu” | DS-HC: „custom gestures”; PD-1130: „with a simple press or motion” | SPOZA |
| Q05 | datalogic-memor-12-hc | faq[5] | „Aktualizacje zabezpieczeń Androida obejmuje narzędzie Datalogic Shield.” | „…dostarcza Datalogic Shield. Datalogic oferuje tę usługę w umowach rocznych, 3-letnich i do 5 lat.” | PD-1102, EASEOFCARE Agreements: „MEMOR 12, DATALOGIC SHIELD, ANNUAL / 3 YEARS / <=5 YEARS” | NIEPRECYZYJNE |
| Q06 | datalogic-memor-17-hc | specifications „Pasma EMEA” | bez GSM i WCDMA | dopisane „WCDMA: B1/2/4/5/8; GSM: 4 pasma” | DS-HC s. 2 WWAN, EMEA and ROW | NIEPRECYZYJNE |
| Q06a | datalogic-memor-17-hc | description, applications | „…przy przechodzeniu między budynkami placówki”; „Praca w kilku budynkach placówki” | „…przy przemieszczaniu się między placówkami medycznymi”; „Przemieszczanie się między placówkami medycznymi” | PD-1130: „when visiting patients at home or navigating across medical facilities with their 5G capabilities” | NIEPRECYZYJNE |
| Q07 | datalogic-memor-hc-94a150126, -94a150127 | relatedAccessories | osłona 94ACC0405 przy stacjach | usunięta | żaden dokument nie podaje zgodności stacji HC z terminalem w osłonie; UM s. 11: stacja bezprzewodowa zawsze z adapterem właściwym dla wersji | SPOZA |
| Q08 | datalogic-memor-hc-94a150126 | description | „Jest biała, w wersji HC. Służy tylko do ładowania i nie przesyła danych.” | „Ma białą obudowę w wersji HC i służy wyłącznie do ładowania, bez transmisji danych.” | 6-gram wspólny z `cipherlab-ars20chcnnnr1` | STYL |
| Q09 | datalogic-memor-hc-94a150141 | description | „Po włożeniu terminala do stacji personel może korzystać z pełnego środowiska pulpitu…” | „Pracuje w trybie Desktop: obraz z terminala trafia na zewnętrzny monitor, a personel korzysta z pełnego środowiska pulpitu…” | UM s. 61: „Desktop mode … connect your device to an external display”; HIMSS: „full desktop environment while charging” | NIEPRECYZYJNE |
| Q10 | datalogic-memor-hc-94acc0411 | imageDescriptions | „…i obrotowym klipsem” | „…i klipsem na odwrocie” | dokumenty nie opisują obrotu; PD-1102: „clip is removable” | SPOZA |
| Q11 | datalogic-zasilacz-usb-94acc0383 | description | stacje 94A150128/94A150129 bez linków; brak ładowania terminala przez USB-C | linki do kart stacji; „Z tym samym przewodem ładuje także sam terminal, również w wersji HC, przez złącze USB-C.” | UM s. 10: „Use a USB Type-C cable in conjunction with the power supply adapter (… 94ACC0383)” | NIEPRECYZYJNE |
| Q12 | datalogic-dock-1slot-memor-12 (94A150128) | description, specifications, blok „Wymagane” | „Wymaga zasilacza 94ACC0380 i kabla zasilającego”; „Kompaktowa konstrukcja idealna…” | blok „Wymagane”: przewód 94ACC0327 + zasilacz USB 94ACC0383; adapter 94ACC0395 (Memor 12/17) / 94ACC0401 (Memor 30/35) dla terminala bez osłony; bez „idealna” | PD-1102: „Single Slot Charging Dock - charge only (requires 94ACC0327 and 94ACC0383) for M12-17 without rubber boot (requires 94ACC0395 …) or for M30-35 … (requires 94ACC0401 …)” | SPRZECZNE (pytanie T2 a) |
| Q13 | datalogic-dock-wireless-memor-12 (94A150129) | description, specifications, blok „Wymagane” | „Wymaga zasilacza 94ACC0380” | blok „Wymagane”: 94ACC0327 + 94ACC0383; adapter 94ACC0394 (Memor 12/17) / 94ACC0400 (Memor 30/35) | PD-1102: „requires part numbers 94ACC0327 - USB-C cable and 94ACC0383 - Power Wall Adapter … (requires 94ACC0394 …)”; UM s. 11: „Always use the adapter” | SPRZECZNE (pytanie T2 a) |
| Q14 | datalogic-psu-memor-12 (94ACC0380) | description, „Wymaga”, „Kompatybilność”, blok „Wymagane” | zasila 94A150128 i 94A150129; przewód 95ACC1113 | lista stacji zasilanych wg PD-1102 (94A150130/131/132, 94A150123, 94A150133, 94A150141, 94A150127, 94ACC0392); jednogniazdowe → 94ACC0383; przewód EU 95A051041 w bloku „Wymagane” | PD-1102: „Power Cord, Europe 95A051041”, „Power Cord, US 95ACC1113”; UM s. 7: „95A051041 Power Cord Europe”, „95ACC1113 Power Cord NA”; API: 95ACC1113 unavailable (0 szt.) | SPRZECZNE (pytanie T2 b) |
| Q15 | datalogic-charger-4slot-memor-12 (94ACC0392) | specifications „Wymagane akcesoria” | „kabel zasilający 95ACC1113” | „przewód zasilający 95A051041 (wtyczka europejska)” | jw. | SPRZECZNE |
| Q16 | datalogic-kabel-usb-c-skorpio-x5 (94ACC0327) | „Kompatybilność” | tylko stacja HC 94A150126 | + stacje 94A150128 i 94A150129 (z zasilaczem 94ACC0383) | PD-1102 | NIEPRECYZYJNE |
| Q17 | 94A150128 / 94A150129 / 94ACC0380 / 94ACC0327 | priceFrom (karta i wariant) | 388,76 / 508,37 / 164,47 / 68,88 | 383,86 / 501,55 / 162,51 / 70,05 | API (available) | NIEPRECYZYJNE |
| Q18 | cipherlab-rs38h | seoTitle | „terminal medyczny do dezynfekcji, 5G” | „terminal medyczny z 5G i przyciskiem SOS” | CL-WEB | STYL |
| Q19 | cipherlab-rs38h | seoDescription | „obudowa odporna na ponad 24 środki czyszczące i UV-C … AS3858SF4NSGH.” | „obudowa przetestowana z ponad 24 środkami czyszczącymi i światłem UV-C …” + permutacje fraz + „PN: AS3858SF4NSGH.” | CL-WEB: „tested with over 24 cleaning agents … built for UV-C light sterilization” | NIEPRECYZYJNE |
| Q20 | cipherlab-rs38h | shortDescription | „Obudowa odporna na dezynfekcję” | „Obudowa przygotowana do dezynfekcji” | CL-WEB/CL-BR: „disinfectant-ready housing” | NIEPRECYZYJNE |
| Q21 | cipherlab-rs38h | description | „RS38H to terminal mobilny…” (brak „CipherLab RS38H” w opisie) | „CipherLab RS38H to terminal mobilny…” | zasada marka + model | STYL |
| Q22 | cipherlab-rs38h | description | „…jest bezpieczny w pracy przy pacjencie.” | „…jest bezpieczny w zastosowaniach medycznych.” | CL-BR s. 4: „The SE4720's Green LED aimer is safe for healthcare use” | NIEPRECYZYJNE |
| Q23 | cipherlab-rs38h | description | „Z tyłu jest aparat 16 MP, a z przodu 8 MP.” (201 słów) | zdanie przeniesione do specyfikacji (191 słów) | zasada: opis ≠ specyfikacja | STYL |
| Q24 | cipherlab-rs38h | specifications | brak procesora, GNSS, aparatów, przycisków, czasu ładowania, odporności na upadki, microSD | dodane: Qualcomm QCM4490 2,4 GHz; GPS/GLONASS/Galileo/BeiDou/QZSS, A-GPS; 16 MP PDAF + LED / 8 MP; przycisk SOS, 2 przyciski skanowania, głośność, włącznik; 2 h z zasilaczem QC 4.0 / PD 3.0 > 27 W; 1,5 m na płytki na betonie (MIL-STD-810H), 1000 przewrotów z 0,5 m; microSD do 1 TB | CL-WEB Specifications | NIEPRECYZYJNE |
| Q25 | cipherlab-rs38h | priceFrom (karta i wariant) | 5535,95 | 5570,96 | API (unavailable, 0 szt.) | NIEPRECYZYJNE |
| Q26 | cipherlab-rs38h | faq | 3 pytania, bez przycisku alarmowego i alternatyw | + „Czy CipherLab RS38H ma przycisk alarmowy?”, + „Jakie inne terminale dla służby zdrowia z 5G są w ofercie?” (ostatnie) | CL-WEB: Keypad „1 programmable key, … left and right trigger keys, power key”, „red SOS button … pre-programmed to notify personnel … or to address healthcare violence” | STYL |
| Q27 | cipherlab-ars38wccnhe01 | seoDescription | „Obraz z terminala trafia na monitor wózka…” | „Obraz z terminala można wyświetlić na monitorze wózka…” | CL-WEB: „can project the RS38H screen onto a nursing cart's monitor” | NIEPRECYZYJNE |
| Q28 | cipherlab-ars38wccnhe01 | description | „…do terminala RS38H w wersji…” | „…do terminala CipherLab RS38H, w wersji…” | zasada marka + model | STYL |
| Q29 | cipherlab-kbrs381455502 | description | „…przeznaczona dla RS38H, terminala CipherLab dla placówek medycznych.” | „…w wersji dla ochrony zdrowia, przeznaczona do terminala CipherLab RS38H.” | JT/ERS: „Spare Battery, Healthcare”, „4500mAh Battery (Healthcare) for RS38H” | STYL |
| Q30 | cipherlab-kbrs381455502 | description | „z zasilaczem QC lub PD o mocy powyżej 27 W” | „z zasilaczem o mocy powyżej 27 W z certyfikacją QC 4.0 lub PD 3.0” | CL-WEB przypis: „Charger/Cable must have QC 4.0 or PD 3.0 above certification … above 27W” | NIEPRECYZYJNE |

## Pytania T2 — rozstrzygnięcie

- (a) Według PD-1102 stacje 94A150128 i 94A150129 zasila zasilacz USB 94ACC0383 przez przewód 94ACC0327. Zasilacz 94ACC0380 jest dla stacji 4-gniazdowych, Smart Docking, 94A150123 i ładowarki 94ACC0392. Karty poprawiono (Q12–Q14, Q16) i dodano blok „Wymagane” z linkami do kart 94ACC0327 i 94ACC0383, tak jak w stacji HC 94A150126. Adaptery opisano tylko w tekście, bo w sklepie nie ma ich kart.
- (b) PD-1102 i UM: 95ACC1113 to „Power Cord, US/NA”, a 95A051041 to „Power Cord, Europe”. Karta 94ACC0380 wskazuje teraz 95A051041 (Q14). To samo poprawiono w 94ACC0392 (Q15).

## Sprawdzone bez uwag

- Memor 12 HC i 17 HC: name, shortDescription, seoTitle, seoDescription (PN na końcu), pozostałe zdania opisów (178 i 174 słowa), wszystkie wiersze specyfikacji z DS-HC (procesor, pamięć, ekran, panel, skaner, aparaty, Wi-Fi 6E — DS nie wspomina o licencji, BT 5.3, NFC, GNSS, czujniki, przyciski, audio, bateria, Qi EPP 7 W, IP65/IP68, upadki, przewroty, temperatury, ESD, wymiary, oprogramowanie, EMM, gwarancja 1 rok), warianty: 944950027, 944950006 i 944950023 z konfiguracją wg PD-1102, SafeSwap tylko 944950023 (DS-HC: „M17HC 6/128GB version only”), dymki, lista środków słowo w słowo (DS-HC „Chemical Resistance (applies to device, rubber boot and chargers)”), przycisk alarmowy: brak w obudowie, alarm przyciskiem programowalnym/gestem, czerwony przycisk tylko w klipsie 94ACC0411, bez „antymikrobowy”, relatedProducts, downloads (pliki istnieją: 638 KB / 1,3 MB / 8,9 MB).
- Zdjęcia terminali (obejrzane na ciemnym tle): Memor 12 HC — ikona Wi-Fi, bez 5G; Memor 17 HC — ikona 5G; boki: lewy przycisk skanowania + głośność, prawy przycisk skanowania + przycisk długi; czyste wycięcie. Akcesoria 94A150126, 94ACC0411, 94ACC0383 (4 wtyczki: UK, EU, AU, US), 95A051041 — zgodne z opisami.
- Akcesoria HC 94A150127, 94A150141, 94ACC0414, 94ACC0409, 94ACC0405: nazwy, PN, zgodność (DS-HC wymienia dla 12-17 HC: 94A150126, 94A150127, 94ACC0409, 94ACC0405, 94ACC0411; 94A150141 i 94ACC0414 tylko przy 17 HC), bloki „Wymagane”.
- Ceny i dostępność wszystkich 11 kart Datalogic HC = API (available).
- CipherLab RS38H: system (Android 13 GMS → 15 wg CL-WEB), pamięć, SE4720, ekran 630 nitów, łączność, bateria 4500 mAh hot swap, 14+ h, IP65/IP68, wymiary, masa, temperatura, gwarancja 12 miesięcy, wariant AS3858SF4NSGH (JT: 8/128 GB, 5G, eSIM, SE4720), unavailable = API, zdjęcia (biało-niebieska wersja HC, czerwony SOS z boku, klips i pasek), relatedAccessories (wszystkie „Healthcare” wg JT/ERS), relatedProducts (terminale HC z 5G).
- ARS38WCCNHE01 i KBRS381455502: PN, „Healthcare”, ceny i unavailable = API; middleware: oba slugi są w `existingSlugs` po jednym razie, wszystkie 37 slugów CipherLab obsłużone.

## Rozbieżności źródeł

1. RS38H Android: CL-BR (09/2024) i PDF na karcie — „upgradable to Android 18”; CL-WEB — „Android 15”, z zastrzeżeniem Qualcomm. Na karcie zostaje 15.
2. RS38H bateria: CL-WEB „Li-ion”, CL-BR „Li-Polymer”. Na karcie nie podano.
3. Memor HC: PD-1102 opisuje stacje i akcesoria HC jako „for Memor 17 HC”, a DS-HC wymienia je dla rodziny 12-17 HC. Na kartach podano oba modele (wg DS-HC).
4. Memor HC Android: DS-HC 2026 „13/15, upgradeable to 19”; UM i DS 17 HC 2025 „18”; PN „A13 GMS”. Na kartach: Android 13 GMS, bez górnej wersji.
5. Złącza Memor: DS-HC „USB 3.2 gen1 Host and Client (Type-C); Super Speed USB 2.0 (Type-C, Bottom I/O)”, UM pokazuje jedno złącze USB-C na spodzie. Karty oddają DS-HC.
6. Adaptery: UM — stacje bezprzewodowe zawsze z adapterem, osobne adaptery HC 94ACC0396/94ACC0399 (w API: found=false). PD-1102 przy stacjach HC adapterów nie wymienia. Stacje przewodowe: PD-1102 „requires 94ACC0395” bez osłony, UM — adapter opcjonalny.
7. 94ACC0383: UM „USB-C, five switchover plugs”, PD-1102 „4 regional plugs – USB A”, zdjęcie — 4 wtyczki. UM: „Use only … 94ACC0383 to power any of the docks”, PD-1102: stacje 4-gniazdowe wymagają 94ACC0380.
8. 94ACC0411: UM „Belt clip HC”, PD-1102 „Pocket clip with emergency red button”.
9. ARS38WCCNHE01 „zasilacz EU w zestawie” potwierdza tylko JT („incl. EU adapter”). ERS podaje tylko nazwę „EU Workstation Connect Cradle”.
10. 94A150141 utożsamiono z „Smart Docking HC” z komunikatu HIMSS, bo PD-1102 nazywa ją „Smart Docking Station M17 white”.

## Weryfikacja

- `porownaj-opisy.py` (description, shortDescription, seoDescription, faq) na zbiorze: karty Datalogic HC, CipherLab, Honeywell HC, skanery HC Datalogic/Newland, `datalogic-memor-12/17`, akcesoria Memor i Skorpio, Zebra HC20/25/50/55. W kartach z zakresu wspólne 6-gramy zostały tylko w nazwach środków czyszczących (Memor 12 HC / 17 HC, Gryphon 4600 HC). Opisy: Memor 12 HC 178 słów, Memor 17 HC 175, RS38H 190.
- `npx tsc --noEmit` — bez błędów, `npx next build` — kod 0.
- `next start -p 3296`: 19 kart z zakresu, kategoria i oba PDF zwracają 200. Tabele wariantów: `scrollWidth = clientWidth` przy 1440, 1280 i 1024 px (RS38H także po „Pokaż niedostępne warianty”). Przy 390 px strony nie przewijają się w poziomie. Akcesoria: 4 w pierwszym rzędzie, „Pokaż pozostałe (5/7/3)” i „Zwiń” działają na Memor 12 HC, Memor 17 HC i RS38H. Bloki „Wymagane” na 94A150128, 94A150129, 94ACC0380, 94A150126, 94A150141 i 94ACC0383 pokazują poprawne elementy. Zrzuty: `$SP/hc4/shots-audyt-Q/`.

## Sprawy dla właściciela

1. Karty adapterów 94ACC0394 i 94ACC0395 (API: available, 14,64 zł netto) i 94ACC0400/94ACC0401 (unavailable). Adaptery są potrzebne do stacji 94A150129 i 94A150128, a teraz są opisane tylko w tekście. Warto też zapytać Datalogic, czy adapter HC jest dołączony do stacji 94A150126/94A150127.
2. Karta `datalogic-memor-17` (poza zakresem), FAQ: „stacja dokująca z Ethernet (przewodowa 94A150128 lub bezprzewodowa 94A150129)”. Obie stacje tylko ładują. Karty `datalogic-memor-12/17` nie mają w relatedAccessories 94ACC0383 i 95A051041, a mają ceny w treści.
3. Zdjęcia: placeholdery przy 94A150127, 94A150141, 94ACC0414, 94ACC0409, 94ACC0405, ARS38WCCNHE01 i KBRS381455502. RS38H: zdjęcia 2–5 to .webp na białym tle, nie PNG z przezroczystością.
4. PDF RS38H na karcie (broszura 2024) podaje Androida 18, a karta 15.
5. Lokalnie przy 390 px karta RS38H („Niedostępny”) pokazuje dolny przycisk „Koszyk” (lokalne `/api/stock` zwraca 500). Do sprawdzenia na produkcji; logiki nie zmieniano.
