# Skanery ladowe — dobór katalogu i weryfikacja 2026-10-21

Zakres: aktualne rodziny z https://bcmarket.pl/54-czytniki-ladowe, po wyłączeniu wycofanych. BCMarket służył wyłącznie do identyfikacji rodzin i PN. Opisy, zdjęcia, ceny i stany nie były kopiowane z konkurencji.

## Wyłączenia

- Datalogic Magellan 9300i, 9400i i 9800i: wycofane, pominięte zgodnie z decyzją użytkownika. W PartnerNet znajdują się w grupie Obsolete.
- Zebra MP7000: producent oznacza End of Sale, następcą jest MP72. Pominięto całą rodzinę mimo zapasu dystrybucyjnego. https://www.zebra.com/us/en/products/scanners/multi-plane-scanners/mp7000.html
- M3751-010211-07604: cena jest w dystrybucji, ale brak dokładnego PN w tabeli producenta. Producent wskazuje M3751-010210-07604. Nie dopisano konfiguracji na podstawie podobieństwa numerów.

## Dodane karty i oferty

Ceny netto sprzedaży z istniejącego /api/stock, z zachowaniem normalnej marży systemu. Stan fizyczny to PL + EU; ilość spodziewana nie oznacza dostępnego zapasu. Dane są dynamiczne, poniższa tabela dokumentuje moment przygotowania.

| Model | PN | Cena netto PLN | Stan PL + EU |
|---|---|---:|---:|
| Datalogic Magellan 3510HSi | M3510-010200 | 1697.97 | 0 |
| Datalogic Magellan 3510HSi | M3511-010210-00604 | 2385.63 | 53 |
| Datalogic Magellan 3510HSi | M3513-010210-00604 | 1872.53 | 32 |
| Datalogic Magellan 3550HSi | M3550-010200 | 2290.41 | 0 |
| Datalogic Magellan 3550HSi | M3551-010210-07604 | 3086.50 | 13 |
| Datalogic Magellan 3700HSi | M3711-010200 | 2110.57 | 8 |
| Datalogic Magellan 3700HSi | M3711-010210-00604 | 2205.78 | 0 |
| Datalogic Magellan 3700HSi | M3751-010200 | 2488.83 | 3 |
| Datalogic Magellan 9550i | 957011001 | 4353.37 | 3 |
| Datalogic Magellan 9550i | 957011001-00053 | 4493.54 | 22 |
| Datalogic Magellan 9550i | 957011001-00351 | 4641.66 | 0 |
| Datalogic Magellan 9550i | 957013101 | 4353.37 | 0 |
| Datalogic Magellan 9550i | 957022201-00050 | 4353.37 | 79 |
| Datalogic Magellan 9550i | 957022201-00312 | 4799.48 | 82 |
| Datalogic Magellan 9600i | 96101001000-000100 | 5749.83 | 0 |
| Datalogic Magellan 9600i | 96101001000-004210 | 6016.96 | 0 |
| Datalogic Magellan 9600i | 96116001000-004530 | 6069.86 | 0 |
| Datalogic Magellan 9900i | 99111001000-000100 | 6056.63 | 49 |
| Zebra SP7201-H | SP7201-SH00004DCWW | 1222.58 | 0 |
| Zebra SP7201-H | SP7201-SH00004SCWW | 1386.65 | 0 |
| Zebra SP7208-H | SP7208-SH00004DCWW | 1590.16 | 0 |
| Zebra SP7208-H | SP7208-SH00004SCWW | 1754.24 | 0 |
| Zebra MP7200 | MP7200-MNDLN000WW | 3772.81 | 0 |
| Zebra MP7200 | MP7200-LNS0N000WW | 3998.05 | 0 |
| Zebra MP7200 | MP7200-MNDLL000WW | 4687.53 | 0 |
| Zebra MP7200 | MP7200-MNSLL000WW | 4687.53 | 0 |
| Zebra MP7200 | MP7200-MNS0N000WW | 3998.05 | 0 |

Dodatkowo PN M3670-010200 w istniejącej rodzinie 3600VSi: obraz kolorowy, AUX i wideo, bez mocowania, zasilacza i przewodu. Bez tworzenia duplikatu modelu 3650/3670.

## Źródła techniczne

- https://www.datalogic.com/eng/retail-healthcare-gs1-digital-link-other-applications/fixed-retail-scanners/magellan-3700hsi-pd-1157.html — tabela Models and Accessories, specyfikacja i sekcja pobierania.
- https://www.datalogic.com/eng/retail-gs1-digital-link-other-applications/fixed-retail-scanners/magellan-35xxhsi-pd-889.html — tabela Models and Accessories, specyfikacja i sekcja pobierania.
- https://www.datalogic.com/eng/retail-gs1-digital-link/fixed-retail-scanners/magellan-9900i-pd-924.html — tabela Models and Accessories, specyfikacja i sekcja pobierania.
- https://www.datalogic.com/eng/retail-gs1-digital-link/fixed-retail-scanners/magellan-9600i-pd-923.html — tabela Models and Accessories, specyfikacja i sekcja pobierania.
- https://www.datalogic.com/eng/retail-gs1-digital-link/fixed-retail-scanners/magellan-9550i-pd-1097.html — tabela Models and Accessories, specyfikacja i sekcja pobierania.
- https://www.zebra.com/us/en/products/spec-sheets/scanners/multi-plane-scanners/sp72-series.html
- https://www.zebra.com/us/en/products/spec-sheets/scanners/multi-plane-scanners/mp72-series.html
- https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/sp72-series-guide-accessory-en-us.pdf
- https://products.b-cdn.net/Brochures/Zebra-MP6000-MP7000-TAG-all.pdf — dokument Zebra obejmujący MP72, hostowany przez dystrybutora. Zgodność przewodów i zasilania na stronach tabel. Lokalna kopia w public/datasheets.

Dokumenty Datalogic pobrano przez formularze producenta i cdn.datalogic.com/Download?iddwnfile=. Identyfikatory: 3510 EN 30719, 3550 PL 29746, 3700 PL 44137, 9550 EN 41470, 9600 EN 41890, 9900 EN 41894. Wszystkie lokalne PDF zweryfikowano sygnaturą %PDF-.

## Zgodność i ograniczenia

- Scale Ready i Adaptive Scale nie oznaczają dołączonej wagi ani legalizacji. Wszystkie oferowane pozycje to skanery.
- Poziome SP7208-H nie zawierają kolorowej kamery wersji V. AUX wymaga 12 V.
- 3510HSi dopuszcza odpowiednie USB 5 V. 3550HSi wymaga 12 V. Nie przeniesiono sposobu zasilania między modelami.
- 90ACC0194: 9550i, 9600i, 9900i. 90ACC0358: 3510HSi, 3550HSi. 90ACC0193: 3600VSi, 3700HSi. Przewód USB 90A052135 dotyczy 9xxx, a 90A052292 — 35xx/36xx/37xx.
- Zestaw standardowego USB MP72: PWR-BGA12V50W0WW + CBL-DC-388A1-01 + przewód AC EU + właściwy przewód danych. Zachowano istniejące karty akcesoriów (relacje po id, linki po slug).

## Zdjęcia i wygląd

Źródła: publiczne katalogi Datalogic, PartnerNet (Magellan3700-left.jpg i MG9900-Medium-platter.jpg), oficjalne fotografie Zebra SP72-H i MP72. Zdjęcie 9900i bez opcjonalnego TDR. Zdjęcie MP7200 pokazuje długą płytę, co jest jawnie wskazane w opisie i alcie.

Przy braku pewnego zdjęcia akcesorium zastosowano wyszarzone logo Datalogic z jawnym altem „zdjęcie niedostępne”. Odrzucono zdjęcie z serwisu dostawcy o nazwie 90ACC0018 jako niepotwierdzone dla 90ACC0194. Nie wygenerowano nieznanej konstrukcji akcesorium.

Przed publikacją: pola kategorii 293,664 × 220,242 px, porównane z istniejącymi Magellan 900i i 1500i. Widoczny dłuższy bok produktu 73% wysokości pola = 160,777 px we wszystkich nowych kartach. Pola relacji/akcesoriów 282,25 × 211,6875 px; urządzenia 73%, akcesoria ze zdjęciami 62%. Układ komponentu pozostaje bez zmian. Skala galerii korzysta z dotychczasowego mechanizmu ramek i marginesów. Logo zastępcze ma własne białe marginesy.

Sprawdzono przeglądarką: 9 kart w kategorii, wszystkie obrazy wczytane, pierwszy rząd 4 akcesoriów, rozwinięcie piątego produktu i ponowne zwinięcie. Metadane i typy sprawdzone; lint zgłasza tylko istniejące ostrzeżenia img. Panel /admin/etykiety-na-magazynie musi zachować przekierowanie do logowania przy braku sesji.
