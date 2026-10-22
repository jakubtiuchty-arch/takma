# SUNMI D3 — komputer POS

Data: 2026-10-22. Zakres: karta `sunmi-d3` w `/komputery-pos`, aktualizacja treści, filtrów i metadanych kategorii, `llms.txt`, `sunmi-category.ts`. Polecenie właściciela: „https://www.sunmi.com/en/d3-family — lecimy”. Materiały od właściciela: karta katalogowa D3, karta kamer (ta sama co przy T3), rendery D3 w trzech konfiguracjach ekranów.

## Źródła

- Karta katalogowa SUNMI D3 Family (właściciel): `public/datasheets/sunmi-d3.pdf` — modele F153A (jeden ekran), F153B (ekran klienta 10,1"), F153C (drugi ekran 15,6"); SUNMI OS 4.0 (Android 14); 8 rdzeni do 2,2 GHz (4 × Cortex-A72 + 4 × Cortex-A53), 6 TOPS AI; pamięć „4GB RAM+64GB ROM” lub „3GB RAM+32GB ROM”, microSD do 1 TB; ekran główny 15,6" IPS FHD z powłoką AF; ekran klienta F153B 10,1" HD 1280 × 800 IPS, dotykowy; złącza 2 × USB 2.0 A, USB 3.0 A, USB-C (USB 2.0), RJ11 (port szeregowy), RJ12 (szuflada), RJ45, audio, DC; na ekranie klienta 2 × micro USB (u góry i z prawej); Ethernet F153A 100M, F153B/F153C 1000M; Wi-Fi 6 2,4/5 GHz 802.11 a/b/g/n/ac/ax; Bluetooth 5.4 z BLE; NFC „Tap on screen”, ISO/IEC 14443 A/B, MIFARE, FeliCa, ISO 15693, HCE na życzenie; głośnik 3 W; mikrofon tylko F153C; zasilacz 100–240 V AC → 24 V / 1,5 A DC; 375 × 192 × 322 mm; masa F153B 5,3 kg netto / 7,9 kg brutto; 0–40°C, -20–60°C, wilgotność 5–95%; przycisk zasilania z niebieską diodą i ukryty przycisk pobierania; ukryte przewody; wielowarstwowe zabezpieczenia przed oszustwem, kradzieżą i manipulacją; SDK SUNMI; zastosowania: sieci szybkiej obsługi, sieci sklepów, pojedyncze sklepy. Akcesoria opcjonalne: prowadnica papieru 58 mm, czytnik paskowy MSR, kamera jedno- i dwuobiektywowa.
- Strona SUNMI D3 Family: https://www.sunmi.com/en/d3-family
- ERS P01300033: https://www.ers-online.co.uk/o38559/p01300033-sunmi-d3-android-desktop-pos-terminal — „Sunmi D3 Android POS Terminal, 4GB / 64GB, Wi-Fi 6, 15.6 Inch, Customer Display, Micro SD Slot, NFC, EU Wall Wart Power Supply”. Brak akcesoriów przy D3.
- Jarltech D3: https://www.jarltech.com/en/sunmi-d3 — Android 14, SUNMI OS 4.0, GMS EDLA; gwarancja 36 miesięcy; w zestawie zasilacz i przewód EU.

## PN, ceny i stany (/api/stock, 22.10.2026)

| PN | Wersja | Cena netto | Stan | Na karcie |
|---|---|---:|---|---|
| P01300033 | D3 F153B, ekran klienta 10,1", zasilacz EU | 2619,93 | on-order (0 + 62 w dostawie) | tak |
| P01300032 | to samo z zasilaczem UK | 2619,93 | on-order | nie (wtyczka UK) |

- API nie zna innych PN D3 (sprawdzone P01300001–060). Wersji F153A (jeden ekran) i F153C (drugi ekran 15,6") nie dodano, bo nie mają PN.
- Dostępność `on-order`: towar w dostawie (62 szt.), 0 szt. w magazynie.

## Decyzje i rozbieżności

- Pamięć: Jarltech w tytule wariantu podaje 3 GB / 32 GB, a w podsumowaniu 4 GB / 64 GB. ERS podaje 4 GB / 64 GB w opisie PN P01300033. Karta SUNMI wymienia obie konfiguracje. Przyjęto 4 GB RAM / 64 GB.
- System: Android 14, SUNMI OS 4.0, usługi Google GMS EDLA (Jarltech). Filtr „Usługi Google” kwalifikuje D3 jako „Z usługami Google (GMS)”.
- Mikrofon: tylko F153C, dlatego na karcie D3 (F153B) „bez mikrofonu”.
- NFC: karta SUNMI podaje „Tap on screen” bez wskazania, który ekran; na karcie „Na ekranie”.
- Zabezpieczenia: opis ostrożny („ograniczają ryzyko oszustw i nieuprawnionych zmian oprogramowania”), bez nazw certyfikatów.
- Drukarka: D3 nie ma drukarki; filtr „Drukarka wbudowana” = „Bez drukarki”. Prowadnica 58 mm z listy akcesoriów SUNMI nie ma PN w UE.
- Ekrany klienta C02020007/C02020008 (T3) i C02020003/C02020004 (T3 PRO) nie pasują do D3. Zapisane w FAQ karty i kategorii.

## Akcesoria

- Brak kart akcesoriów, `relatedAccessories` puste. ERS nie podaje akcesoriów do D3. Kamery, MSR i prowadnica 58 mm z karty SUNMI nie mają PN w UE.
- Szuflada kasowa: niepowiązana, brak źródła zgodności. FAQ: port RJ12, przed zakupem szuflady prosimy o kontakt (jak przy T3 PRO).

## Karta katalogowa

- Oryginał 5,6 MB (5 833 281 B). Zdjęcia w PDF miały do ok. 445 dpi (7000 × 2461 px na szerokości strony A4).
- Zmniejszono PyMuPDF `rewrite_images(dpi_threshold=250, dpi_target=200, quality=80)`: zdjęcia powyżej 400 dpi do ok. 200–220 dpi, reszta bez zmian; tekst wektorowy bez zmian. Wynik 3,7 MB (3 689 000 B). Porównanie renderów strony 1 przy 200 dpi: brak widocznej różnicy.

## Zdjęcia

- Rendery SUNMI „D3 大小屏” (właściciel), 3000 × 3000, przezroczyste tło. Kolejność: 7, 1, 9, 3, 2, 8, 6, 10. Pominięto ujęcia 4 (lewy bok) i 5 (góra) oraz rendery „单屏” i „双大屏”.
- Obróbka: `scripts/obrob-zdjecia.py --plotno=1200x1200 --jak=P01280007.png --bez-ciena`, białe tło RGB, produkt 82,8% dłuższego boku (jak T3 i T3 PRO). Mapy dims/frames/uniform-bounds dopisane ręcznie.
