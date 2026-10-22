# SUNMI T3 PRO i T3 PRO MAX — komputery POS

Data: 2026-10-22. Zakres: karty `sunmi-t3-pro` i `sunmi-t3-pro-max` w `/komputery-pos`, ekrany klienta C02020003 i C02020004 w `/akcesoria-do-komputerow-pos`, aktualizacja treści i filtrów kategorii. Polecenie właściciela: „https://www.sunmi.com/en/t3-pro-series/ — lecimy dalej”.

## Źródła

- Karta katalogowa SUNMI T3 PRO, model L15B1 (właściciel): `public/datasheets/sunmi-t3-pro.pdf` — SUNMI OS (Android 13), Qualcomm Kryo 670 do 2,7 GHz, 6 GB RAM / 128 GB, microSD do 2 TB, ekran 15,6" FHD 400 nitów z powłoką AF, kamera 8 Mpx, NFC na ekranie, głośniki 2 × 2 W, LAN 1000M, Wi-Fi 2,4/5/6 GHz 802.11ax, Bluetooth 5.2 z BLE i BT Long Range do 200 m, złącza (3 × USB 2.0 A, USB 3.0 A, USB-C, 2 × micro USB, micro USB debug, RJ45, RJ11, RJ12, DC), przycisk zasilania z czytnikiem linii papilarnych, zasilacz 100–240 V / 1,7 A → 24 V / 2,5 A, masa 3,3 kg (ekrany klienta 0,9 kg i 1,7 kg), wymiary 298 (wys.) × 371,5 × 170 mm, 0–40°C / -20–60°C; przedłużacz ekranu klienta 1,5 m, ukryte przewody, aluminium, logo i kolor marki („Have your device tailored to your brand”).
- Karta katalogowa SUNMI T3 PRO MAX, model L15A1 (właściciel): `public/datasheets/sunmi-t3-pro-max.pdf` — te same parametry; drukarka 80 mm, gilotyna, 250 mm/s, rolka φ80 mm, modułowa drukarka Seiko z wyjmowaną głowicą; masa 5,5 kg; wymiary 390 (wys.) × 371,5 × 200 mm.
- Strona SUNMI T3 PRO Series: https://www.sunmi.com/en/t3-pro-series/ — ekran główny odchylany o 125°, ponad 100 000 odchyleń (dane SUNMI Lab), NFC na ekranie głównym i na ekranie klienta (opcja), drukarka Seiko 80 mm, 250 mm/s, trwałość 150 km, gilotyna, wyjmowana głowica. Strona zapowiada też wersję Dual-OS 8/256 GB i ekran 18,5" (Q1 2026) — poza ofertą.
- Jarltech T3 PRO: https://jarltech.com/en/sunmi-t3-pro?hide=none — P01240002 (NFC, „Android (AOSP)”, 2,0 GHz) i P01240008 (GMS-EDLA, Android 13, 2,7 GHz), 6/128 GB, gwarancja 36 miesięcy, zestaw: zasilacz i przewód zasilający; akcesoria: C02020003 i C02020004 (12 miesięcy), zasilacz X09020676 (C5, 0 szt.), przedłużenia gwarancji X09200195/196.
- Jarltech T3 PRO MAX: https://jarltech.com/en/sunmi-t3-pro-max — P01250004 (NFC, 2,0 GHz) i P01250007 (GMS-EDLA, Android 13, 2,7 GHz, w zestawie także QSG), gwarancja 36 miesięcy; akcesoria: C02020003, C02020004 („T3 PRO, T3 PRO MAX”), przedłużenia gwarancji X09200199/200. Brak szuflady.
- ERS: https://www.ers-online.co.uk/T3PROMAX/accessories i https://www.ers-online.co.uk/T3PRO/accessories — C02020003 i C02020004 „fits for: T3 PRO & T3 PRO MAX”; przy T3 PRO także C20000098 „T3 PRO Max 58mm Paper Roll Support”. Brak szuflady.
- SUNMI OS / GMS: wersja GMS ma usługi Google (GMS EDLA) i Google Play. Wersja SUNMI OS korzysta ze sklepu SUNMI App Store (https://www.sunmi.com/en/appstore/, https://developer.sunmi.com/en/); aplikacje udostępnia partner lub dostawca oprogramowania.

## PN, ceny i stany (/api/stock, 22.10.2026)

| PN | Karta / wariant | Cena netto | Stan |
|---|---|---:|---|
| P01240002 | sunmi-t3-pro, SUNMI OS | 5114,81 | available (EU 23, w dostawie 22) |
| P01240008 | sunmi-t3-pro, GMS | 5114,81 | unavailable (0 / 0) |
| P01250004 | sunmi-t3-pro-max, SUNMI OS | 6341,96 | available (EU 10) |
| P01250007 | sunmi-t3-pro-max, GMS | 6341,96 | unavailable (0 / 0) |
| C02020003 | sunmi-c02020003 | 1223,78 | available (EU 98) |
| C02020004 | sunmi-c02020004 | 1835,65 | unavailable (0 / 0) |

## Decyzje i wyłączenia

- Procesor: Jarltech podaje 2,0 GHz dla P01240002 i P01250004, a 2,7 GHz dla wersji GMS. Karta SUNMI podaje 2,7 GHz bez rozróżnienia; wpisano 2,7 GHz i nie rozróżniono wariantów po procesorze.
- Ekrany klienta: C02020003 / C02020004 tylko do T3 PRO i T3 PRO MAX; C02020008 / C02020007 tylko do T3 i T3 80 mm. Zapisane w opisach, specyfikacji („Nie pasuje do”), FAQ i dymku filtra.
- Szuflada MAX C06004004: niepowiązana z T3 PRO i T3 PRO MAX. SUNMI, ERS i Jarltech nie wskazują jej przy T3 PRO ani MAX. T3 PRO ma port szuflady RJ11/RJ12 i zasilanie 24 V; FAQ kieruje do kontaktu przed doborem szuflady.
- Bez kart: zasilacz X09020676 (C5, 0 szt.), przedłużenia gwarancji X09200195/196/199/200, prowadnica C20000098 (poza briefem).
- Wymiary: rysunek na karcie SUNMI pokazuje 298 mm (T3 PRO) i 390 mm (MAX) jako wysokość; na kartach zapisano „dł. × szer. × wys.” jak przy T3.
- Zawartość zestawu ekranów klienta: ekran i przedłużacz 1,5 m według karty T3 PRO („comes with a 1.5m extension cord”); złącze USB według opisu PN w integracji.

## Zdjęcia

- T3 PRO: rendery SUNMI „T3 PRO_单屏”, „T3 PRO_大小屏”, „T3 PRO_双大屏” (właściciel), 3000 × 3000, przezroczyste tło.
- T3 PRO MAX: rendery SUNMI T3 PRO MAX z karty https://barcodesite.eu/products/sunmi-t3-pro-max-p01250004 (1200 × 1200, przezroczyste tło; 5 unikalnych ujęć, szóste to duplikat przodu). Cztery ujęcia pokazują drugi ekran 15,6"; alt mówi, że ekran kupuje się osobno. Pominięto klatki animacji ze strony SUNMI (`print_N.jpg`).
- Ekrany klienta: C02020003 = „T3 PRO_大小屏” 9, C02020004 = „T3 PRO_双大屏” 8.
- Obróbka: `scripts/obrob-zdjecia.py --plotno=1200x1200 --jak=P01280007.png --bez-ciena`, białe tło RGB, produkt 82,8% dłuższego boku.
