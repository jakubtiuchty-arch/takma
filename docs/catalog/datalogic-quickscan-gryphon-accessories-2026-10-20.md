# QuickScan / Gryphon — akcesoria, 20.10.2026

## Zakres i zgodność

Dodano 9 kart i przypisano akcesoria do QD2590, QW2520, QBT2500, QM2500, GD4690, GBT4600 i GM4600. Zachowano istniejące 4 karty akcesoriów Gryphon. Zasilacz 8-0935 oraz przewód EU 6003-0940 wykorzystano z istniejących kart bez duplikowania PN.

| PN | Przypisanie | Cena netto PLN | Stan EU przy kontroli |
|---|---|---:|---:|
| 90A052258 | QD2590, QW2520, GD4690; QBT2500/QM2500/GBT4600/GM4600 przez odpowiednią bazę | 64,15 | 1489 |
| STD-QW25-BK | QW2520 | 44,63 | 21 |
| STD-AUTO-QD25-BK | QD2590 | 72,51 | 14 |
| STD-AUTFLX-QD25-BK | QD2590 | 72,51 | 46 |
| BC2090-BK | QBT2500 Bluetooth | 405,09 | 24 |
| BC2090-BK-433 | QM2500 STAR 433 MHz, nie 910 MHz | 405,09 | 16 |
| RBP-QBT25-BK | QBT2500 / QM2500 | 117,14 | 67 |
| HLD-Q040-BK | QD2590 | 53,00 | 170 |
| STD-G041-BK | GD4690 (zestaw GD4690-BKK1S-HP) | 97,61 | 148 |
| PM-BASE-GD46-BK | GD4690 | 97,61 | 9 |
| WLC4690-BK-BT | GBT4600 | 607,93 | 116 |
| WLC4690-BK-433 | GM4600 433 MHz | 607,93 | 101 |
| RBP-GM46 | GBT4600 / GM4600 z akumulatorem, nie SuperCap | 139,46 | 28 |
| 8-0935 | Bazy BC2090 i WLC4690, zasilanie 12 V; nie bezpośrednio USB-C QuickScan | 61,36 | 1398 |
| 6003-0940 | Przewód EU do zasilacza 8-0935 | 22,31 | 847 |

Ceny i stany pobrano z integracji dystrybucji Ingram / BlueStar / Jarltech. Front pobiera je dalej przez istniejący mechanizm po PN. Nie zapisano cen zakupu w repozytorium. Nie dodano MC-GM45: brak jednoznacznego potwierdzenia współpracy z RBP-GM46. Nie przypisano baz STAR do modeli Bluetooth ani odwrotnie.

## Źródła producenta

- https://apps.datalogic.com/e-catalog/ec-QSI2500.aspx — PN akcesoriów i zawartość zestawów QD/QW/QBT/QM2500.
- https://apps.datalogic.com/e-catalog/ec-gryphon-4600.aspx — akcesoria i zestaw GD4690-BKK1S-HP z STD-G041-BK.
- https://cdn.datalogic.com/Download?iddwnfile=42836 — Gryphon 4600 Product Reference Guide, zasilanie i bazy WLC4690.
- https://cdn.datalogic.com/Download?iddwnfile=36726 — QuickScan cordless Quick Reference Guide, zasilacz 8-0935 dla bazy, ładowanie i akumulator.

Dokumenty na nowych kartach wykorzystują istniejące lokalne pliki instrukcji i kart katalogowych TAKMA.

## Zdjęcia i wygląd

Źródła zdjęć producenta (PartnerNet):
- BC2090: https://partnernet.datalogic.com/upload/image_gallery/acc_general/PLX-QUICKSCAN-QBT_QM2500-BASE-STATION-BC2090-HR.jpg
- STD-AUTO-QD25-BK: https://partnernet.datalogic.com/upload/image_gallery/eps/accessories/PLX-QS2500-STAND-BLACK-LEFT-FACING-HR.jpg
- STD-AUTFLX-QD25-BK: https://partnernet.datalogic.com/upload/image_gallery/eps/accessories/PLX-QS2500-FLEX-STAND-BLACK-RIGHT-FACING-HR.jpg
- HLD-Q040-BK: https://partnernet.datalogic.com/upload/image_gallery/eps/accessories/PLX-QS2500-DESK-WALL-HOLDER-BLACK-RIGHT-FACING-HR.jpg
- STD-G041: https://partnernet.datalogic.com/upload/image_gallery/acc_general/PLX-GRYPHON4500-STD-G041-HR.jpg — przygotowano czarną wersję w imagegen, porównano geometrię z oryginałem.
- STD-QW25-BK: https://cdn.webshopapp.com/shops/299287/files/435793790/700x700x2/datalogic-soporte-datalogic-std-qw25-bk.jpg
- RBP-QBT25-BK: https://static1.redcart.pl/templates/images/thumb/8272/1500/1500/pl/0/templates/images/products/8272/4416d009dbab56b35d8609aa60023283.jpg
- 90A052258: https://www.thebarcodewarehouse.co.uk/Images/Product/Default/large/90A052258.jpg — poprawiono ostrość w imagegen, porównano oba złącza i przebieg przewodu.

Nie zmieniono komponentów ani układu. Wspólne pole zdjęcia 4:3; widoczny produkt: dłuższy bok 62% wysokości pola, jak PowerScan BC9630-BT i RBP-PM96. Zmierzono w przeglądarce pole 282,25 × 211,6875 px: dłuższy bok produktu 131,24625 px dla nowych i dwóch wzorcowych kart. Galeria korzysta z tego samego kadrowania na podstawie granic produktu. Pierwsze 4 akcesoria widoczne; pozostałe przez standardowe rozwijanie i zwijanie.

## Walidacja

- TypeScript i lint zmienionych danych.
- Wszystkie 20 kart QuickScan/Gryphon: HTTP 200, obrazy lokalne, metadane i JSON-LD, istniejące cele linków, przypisania akcesoriów.
- Kontrola dwóch kart wzorcowych PowerScan oraz sekcji QuickScan i Gryphon w przeglądarce.
- Sprawdzono rozwijanie 4 → 5 oraz zwijanie listy.
- Trasa /admin/etykiety-na-magazynie zachowana (307 do logowania).
- Publikacja tylko z Gita, gałąź claude/takma-frontend-build-RrM9E.
