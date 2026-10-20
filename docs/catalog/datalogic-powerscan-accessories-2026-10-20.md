# PowerScan 9600 — uzupełnienie akcesoriów 20.10.2026

## Zgodność

11 nowych kart; łącznie 15 akcesoriów. PD9630: 7 przypisań, PBT9600: 12, PM9600 433 MHz: 12. Brak akumulatorów i ładowarek na przewodowym PD9630. Baza BT tylko do PBT; baza STAR 433 tylko do PM 433. Przewody dobrane według konfiguracji zestawów producenta: PD USB CAB-553, PD RS-232 CAB-549, BC9630 USB CAB-552, BC9630 RS-232 CAB-548. Inne, niezweryfikowane połączenia nie są dodawane. Usunięto wcześniejsze bezwzględne stwierdzenie o niezgodności CAB-552 z PD — katalog zestawów sam nie dowodzi takiego wykluczenia.

HLD-P096, STD-P096 i PC-P096: rodzina PowerScan 9600, wszystkie trzy karty. 8-0935 z przewodem EU 6003-0940: bazy BC9630 oraz PD przez przewód RS-232 z wejściem zasilania. Ładowarki MC-P096-M2/M4 do RBP-PM96, wymagają 90ACC0350 (12 V 5 A) i 6003-0940. M4 obejmuje M2+E2, akumulatory nie są dołączone. Tekst rozróżnia elementy wymagane, opcjonalne i już dołączone do kompletnych zestawów.

## Źródła producenta

- https://apps.datalogic.com/e-catalog/ec-ps9600series.aspx — dokładne PN, zestawy i wymagany 90ACC0350.
- https://cdn.datalogic.com/Download?iddwnfile=40959 — PowerScan 9600 Accessory Guide, strony 8–9, wszystkie dodane grupy.
- https://cdn.datalogic.com/Download?iddwnfile=36486 — instrukcja MC-P096: M2 2 stanowiska, M4 M2+E2, zasilanie 12 V 5 A, EU 6003-0940.
- https://cdn.datalogic.com/Download?iddwnfile=36485 — HLD-P096 montaż.
- https://cdn.datalogic.com/Download?iddwnfile=36487 — STD-P096 montaż.
- https://cdn.datalogic.com/Download?iddwnfile=36481 — BC96xx połączenia i zasilanie.
- https://cdn.datalogic.com/Download?iddwnfile=36482 — PD96xx połączenia i zasilanie.

Cztery nowe PDF-y są w public/instrukcje, na kartach linki lokalne TAKMA. Klient nie otrzymuje notatek o badaniu źródeł.

## Dystrybucja

Odczyt Ingram/BlueStar/Jarltech; odświeżone rekordy cache wyłącznie dla 15 PN. Publiczna cena sprzedaży PLN netto z /api/stock, bez cen zakupu. Kolumna EU oznacza dostępne sztuki; nie dolicza dostaw przyszłych.

| PN | Cena netto PLN | PL | EU |
|---|---:|---:|---:|
| CAB-553 | 97.61 | 0 | 157 |
| CAB-549 | 97.61 | 0 | 64 |
| CAB-548 | 80.88 | 0 | 183 |
| 8-0935 | 61.36 | 0 | 1398 |
| 6003-0940 | 22.31 | 0 | 847 |
| HLD-P096 | 53 | 0 | 493 |
| STD-P096 | 97.61 | 0 | 49 |
| MC-P096-M2 | 436.25 | 0 | 49 |
| MC-P096-M4 | 786.81 | 0 | 40 |
| PC-P096 | 78.09 | 0 | 27 |
| 90ACC0350 | 125.51 | 0 | 83 |
| RBP-PM96 | 167.34 | 0 | 426 |
| BC9630-BT | 1189.3 | 0 | 5 |
| BC9630-433 | 1189.3 | 0 | 155 |
| CAB-552 | 80.88 | 0 | 17 |

## Zdjęcia

Oryginały galerii producenta:
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/PLX-PC-P096-PROTECTIVE-CASE-HR.jpg
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/PLX-HLD-P096-HOLDER-HR.jpg
- https://partnernet.datalogic.com/upload/image_gallery/eps/Accessories/PLX-STD-P096-FLEX-STAND-HR.jpg

Puste ładowarki, bez opcjonalnych akumulatorów:
- https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/Datalogic-MC-P096-M2.jpg
- https://www.barcodefactory.com/images/product/large/mc-p096-m4.png

CAB-548:
- https://i.ebayimg.com/images/g/uWgAAOSwUB5m6ZUJ/s-l960.jpg — dokładny PN CAB-548, porównanie z oficjalnym katalogiem.

CAB-553, CAB-549, 8-0935, 6003-0940 i 90ACC0350: restauracja Imagen na podstawie zdjęć w oficjalnym katalogu. CAB-553 i CAB-549 dodatkowo porównane ze zdjęciem modularnego złącza CAB-548. Pierwsza generacja CAB-553 z błędnym złączem odrzucona; opublikowana wersja z prostokątnym wtykiem modularnym w okrągłej osłonie. Próby generowania ładowarek odrzucono; użyto lepszych oryginałów M2/M4.

Użyto wspólnego ProductCard bez zmian układu. Dwa wzorce to istniejące BC9630-BT i RBP-PM96: pole 282,25 × 211,6875 px, dłuższy bok produktu 131,24625 px (62% wysokości pola). Każde nowe zdjęcie ma zmierzone granice obiektu w product-image-uniform-bounds i taką samą skalę 62%, nie rozmiar 73% przypisany samym skanerom. Sprawdzono pierwszy rząd, pozostałe dwa rzędy PBT, rozwijanie i zwijanie. Zachowano jeden wspólny dział Akcesoria.

## Kontrole

TypeScript i lint danych; integralność celów linków, obrazów, przypisań i PDF; HTTP kart; brak sekcji etykiet z akcesoriami; chroniona trasa magazynu /admin/etykiety-na-magazynie. Publikacja z gałęzi claude/takma-frontend-build-RrM9E; po publikacji kontrola trzech kart oraz rozwijania/zamykania na produkcji.
