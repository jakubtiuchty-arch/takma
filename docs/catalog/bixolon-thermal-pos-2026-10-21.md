# BIXOLON — termiczne drukarki POS, 2026-10-21

Zakres: 9 rodzin, 42 PN, 2 nowe akcesoria oraz dwa istniejące przewody z rozszerzoną zgodnością. Kategoria `/drukarki-pos`. Bez zmian układu kart.

## Źródła

- https://bixoloneu.com/product-type/drukarki-pos/drukarka-termiczna-pos/?lang=pl
- Aktualne karty producenta poszczególnych modeli (polskie strony: `srp-330iii`, `srp-350v`, `srp-350plusv`, `seria-srp-380`, `srp-380plus`, `srp-q200`, `seria-srp-q300`, `seria-srp-f310ii`, `srp-s300ii`).
- https://bixoloneu.com/accessories/?lang=pl
- https://bixoloneu.com/gwarancji/?lang=pl
- Publiczne karty Jarltech oraz autoryzowany odczyt API dla PN. Ceny zakupu i dane dostępu nie są częścią tego raportu.

## Decyzje i rozbieżności

- STP-103III: brak potwierdzonej oferty w sprawdzonej dystrybucji; nie opublikowano.
- SRP-S3000: publiczna karta Jarltech zawiera wyłącznie usługi StageIT, bez PN drukarki. Nie opublikowano.
- SRP-S300: bieżąca karta rodziny Jarltech oferuje SRP-S320K/BEG, nie SRP-S300. Nie podmieniano modelu bez polecenia.
- SRP-Q300WaK/BEG: minimum dystrybucyjne 4 sztuki; nie dodano do sprzedaży jednostkowej. Karta obejmuje SRP-Q300K/BEG.
- SRP-380plusK: opis dystrybucyjny ogranicza się do nazwy i USB. Nie dopisano dodatkowych portów ani zawartości zestawu. 180 dpi i 500 mm/s potwierdza aktualna karta producenta.
- SRP-350plusV: dane dystrybucji zawierają miejscami pustą prędkość lub dwie prędkości. Przyjęto dane producenta: 400 mm/s dla 180 dpi, 370 mm/s dla 203 dpi.
- SRP-S300II: producent podaje rolkę do 103 mm, dystrybucja dla oferowanych PN 102 mm. W karcie zastosowano ostrożny limit 102 mm. Materiał Re-stick i Linerless Extreme rozdzielono według X w PN.
- SRP-F310II ma USB-A; nie podpięto przewodu USB A-B. RS-232 wyłącznie przy konfiguracji z tym portem.
- Nie dodawano zasilaczy, osłon ani uchwytów, których zgodność wskazywała tylko poprzednie generacje.
- Zdjęcie brzęczyka RBC-100 poprawiono w image_gen z oryginalnej fotografii producenta. Konstrukcja, układ otworów, przewód i wtyk porównane z oryginałem.

## Ceny sprzedaży netto i stan

Snapshot 2026-10-21; frontend pobiera bieżące oferty. Kwoty początkowe mogą różnić się o 0,01 zł od API wskutek zaokrągleń.

| Model / akcesorium | PN | Netto PLN | Stan szt. |
|---|---|---:|---:|
| BIXOLON SRP-330III | SRP-330IIIESK/BEG | 593.06 | 55 |
| BIXOLON SRP-330III | SRP-330IIISK/BEG | 491.57 | 36 |
| BIXOLON SRP-350V | SRP-350VK/BEG | 571.69 | 30 |
| BIXOLON SRP-350V | SRP-350VSK/BEG | 571.69 | 36 |
| BIXOLON SRP-350V | SRP-352VK/BEG | 571.69 | 0 |
| BIXOLON SRP-350V | SRP-352VSK/BEG | 571.69 | 0 |
| BIXOLON SRP-350plusV | SRP-350PLUSVK/BEG | 667.89 | 72 |
| BIXOLON SRP-350plusV | SRP-350plusVSK/BEG | 699.91 | 51 |
| BIXOLON SRP-350plusV | SRP-350plusVBaK/BEG | 881.61 | 0 |
| BIXOLON SRP-350plusV | SRP-350PlusVPWK | 641.16 | 0 |
| BIXOLON SRP-350plusV | SRP-350PLUSVWDAK/BEG | 935.04 | 39 |
| BIXOLON SRP-350plusV | SRP-352plusVBaK/BEG | 881.61 | 0 |
| BIXOLON SRP-350plusV | SRP-352plusVK/BEG | 667.89 | 0 |
| BIXOLON SRP-350plusV | SRP-352plusVSK/BEG | 699.91 | 0 |
| BIXOLON SRP-350plusV | SRP-352plusVWDaK/BEG | 935.04 | 0 |
| BIXOLON SRP-380 | SRP-382K/BEG | 868.22 | 0 |
| BIXOLON SRP-380 | SRP-380EK | 951.03 | 0 |
| BIXOLON SRP-380 | SRP-380K | 868.22 | 0 |
| BIXOLON SRP-380 | SRP-380PWK | 833.51 | 0 |
| BIXOLON SRP-380 | SRP-380SK | 927.03 | 0 |
| BIXOLON SRP-380 | SRP-382EK/BEG | 951.03 | 0 |
| BIXOLON SRP-380 | SRP-382PWK | 833.51 | 0 |
| BIXOLON SRP-380 | SRP-382SK | 927.03 | 0 |
| BIXOLON SRP-380plus | SRP-380plusK | 913.39 | 0 |
| BIXOLON SRP-Q200 | SRP-Q200EWDK | 654.50 | 1 |
| BIXOLON SRP-Q200 | SRP-Q200SK | 480.87 | 0 |
| BIXOLON SRP-Q300 | SRP-Q300K/BEG | 667.89 | 0 |
| BIXOLON SRP-F310II | SRP-F310IICOSK | 761.36 | 0 |
| BIXOLON SRP-F310II | SRP-F310IICOK/BEG | 721.32 | 0 |
| BIXOLON SRP-F310II | SRP-F310IICOWDK | 868.22 | 0 |
| BIXOLON SRP-F310II | SRP-F312IICOK | 721.32 | 0 |
| BIXOLON SRP-F310II | SRP-F312IICOSK | 761.36 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIBAK/BEG | 1814.93 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIK/BEG | 1474.86 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIPWK/BEG | 1497.04 | 0 |
| BIXOLON SRP-S300II | SRP-S300IISK/BEG | 1537.70 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIWDAK/BEG | 1814.93 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIXBaK/BEG | 2073.68 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIXK/BEG | 1729.91 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIXPWK/BEG | 1752.09 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIXSK/BEG | 1796.45 | 0 |
| BIXOLON SRP-S300II | SRP-S300IIXWDaK/BEG | 2073.68 | 0 |
| Brzęczyk BIXOLON RBC-100 do SRP-F310II | RBC-100 | 22.18 | 157 |
| Sygnalizator BIXOLON B-Melodist RMB-100G | RMB-100G | 107.72 | 0 |
| Przewód USB BIXOLON USB-KAB-G | USB-KAB-G | 26.11 | 0 |
| Przewód RS-232 BIXOLON SER-KAB-9-9 | SER-KAB-9-9 | 32.64 | 0 |

## PDF-y na TAKMA

- /datasheets/bixolon-srp-330iii-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-330III_EN.pdf
- /datasheets/bixolon-srp-350v-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-350V_EN.pdf
- /datasheets/bixolon-srp-350plusv-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-350plusV_EN.pdf
- /datasheets/bixolon-srp-380-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-380_EN.pdf
- /datasheets/bixolon-srp-380plus-en.pdf ← https://bixoloneu.com/wp-content/uploads/2025/11/Spec-Sheet_SRP-380plus_English_Nov25_V1.pdf
- /datasheets/bixolon-srp-q200-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-Q200_EN.pdf
- /datasheets/bixolon-srp-q300-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-Q300_EN.pdf
- /datasheets/bixolon-srp-f310ii-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/BR_SRP-F310II_EN.pdf
- /datasheets/bixolon-srp-s300ii-en.pdf ← https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/SRP-S300II_EN.pdf

## Zdjęcia

- /images/products/bixolon-srp-330iii-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/05/SRP-330III_01-1.png
- /images/products/bixolon-srp-330iii-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/05/SRP-330III_02.png
- /images/products/bixolon-srp-330iii-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/05/SRP-330III_03.png
- /images/products/bixolon-srp-330iii-5.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/05/SRP-330III_04.png
- /images/products/bixolon-srp-350v-1.webp (700×700) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350V_main.png
- /images/products/bixolon-srp-350v-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350V_02.png
- /images/products/bixolon-srp-350v-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350V_03.png
- /images/products/bixolon-srp-350v-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350V_04.png
- /images/products/bixolon-srp-350v-5.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350V_05.png
- /images/products/bixolon-srp-350plusv-1.webp (700×700) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350plusV_main.png
- /images/products/bixolon-srp-350plusv-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350plusV_01.png
- /images/products/bixolon-srp-350plusv-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350plusV_02.png
- /images/products/bixolon-srp-350plusv-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350plusV_03.png
- /images/products/bixolon-srp-350plusv-5.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2023/06/SRP-350plusV_04.png
- /images/products/bixolon-srp-380-1.webp (1500×1500) ← https://bixoloneu.com/wp-content/uploads/2016/01/SRP-380.jpg
- /images/products/bixolon-srp-380-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-380_01.png
- /images/products/bixolon-srp-380-3.webp (600×600) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP380_02.png
- /images/products/bixolon-srp-380-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP380_03.png
- /images/products/bixolon-srp-380plus-1.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/01/SRP-380II_01.png
- /images/products/bixolon-srp-380plus-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/01/SRP-380II_01_Receipt.png
- /images/products/bixolon-srp-380plus-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/01/SRP-380ll_04_Open.png
- /images/products/bixolon-srp-380plus-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/01/SRP-380ll_05_Top_Cover_Open_Paper.png
- /images/products/bixolon-srp-380plus-5.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/01/SRP-380ll_07_Interface.png
- /images/products/bixolon-srp-q200-1.webp (1500×1500) ← https://bixoloneu.com/wp-content/uploads/2020/07/SRP-Q200_02_paper.jpg
- /images/products/bixolon-srp-q200-2.webp (700×700) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-Q200_02.png
- /images/products/bixolon-srp-q200-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-Q200_03.png
- /images/products/bixolon-srp-q200-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-Q200_01.png
- /images/products/bixolon-srp-q300-1.webp (1500×1500) ← https://bixoloneu.com/wp-content/uploads/2017/10/SRP-Q300.jpg
- /images/products/bixolon-srp-q300-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-Q300_01.png
- /images/products/bixolon-srp-q300-3.webp (1500×1500) ← https://bixoloneu.com/wp-content/uploads/2018/10/SRP-Q300.jpg
- /images/products/bixolon-srp-f310ii-1.webp (1500×1500) ← https://bixoloneu.com/wp-content/uploads/2016/07/SRP-F310II.jpg
- /images/products/bixolon-srp-f310ii-2.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-F310II_01.png
- /images/products/bixolon-srp-f310ii-3.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-F310II_02.png
- /images/products/bixolon-srp-f310ii-4.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-F310II_03.png
- /images/products/bixolon-srp-f310ii-5.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2021/01/SRP-F310II_04png.png
- /images/products/bixolon-srp-s300ii-1.webp (800×800) ← https://bixoloneu.com/wp-content/uploads/2025/07/SRP-S300II.jpg
- /images/products/bixolon-srp-s300ii-2.webp (2444×2322) ← https://bixoloneu.com/wp-content/uploads/2025/09/SRP-S300lI-04.png
- /images/products/bixolon-srp-s300ii-3.webp (1935×2317) ← https://bixoloneu.com/wp-content/uploads/2025/09/SRP-S300lI_Label.png
- /images/products/bixolon-srp-s300ii-4.webp (1903×2472) ← https://bixoloneu.com/wp-content/uploads/2025/09/SRP-S300lI_Rear-Interface.png
- /images/products/bixolon-srp-s300ii-5.webp (1911×2297) ← https://bixoloneu.com/wp-content/uploads/2025/09/SRP-S300lI_Recipt.png
- /images/products/bixolon-rbc-100-1.webp (1254×1254) ← https://bixoloneu.com/wp-content/uploads/2015/09/buzzer.jpg
- /images/products/bixolon-rmb-100g-1.webp (700×700) ← https://bixoloneu.com/wp-content/uploads/2015/09/BIXOLON_B-Melodist-e1444640000241.jpg

## Kontrola przed publikacją

- TypeScript i odczyt 13 kart: HTTP 200, jeden H1, metaopis, canonical, OG/Twitter, Product/ProductGroup.
- 42 unikalne PN; wyłącznie różniące się cechy w tabeli. Linki produktów i lokalne PDF-y sprawdzone.
- Galeria 576,5×576,5 px. Widoczny obiekt 78% = 449,67 px, tak samo jak BIXOLON SPP-R310 i XM7-20.
- Kafelki 4:3; widoczny obiekt drukarki 72% wysokości, akcesoria 62%. Weryfikacja nazw i skali w przeglądarce, bez zmian struktury kafelków.
- Odrzucono miniaturę 400×400 SRP-330III; jako główne użyto zdjęcia 800×800.
- Opisy odróżniają stacjonarne POS, mobilne paragony i etykiety. SRP-350V/plusV i SRP-380/plus rozdzielono przez parametry i linki porównawcze.

## Korekta zdjęć 22.10.2026
SRP-Q200-1 przeniesiono na białe płótno 1500 × 1500 (dłuższy bok produktu 82%, jak SRP-380-1, SRP-F310II-1 i SRP-Q300-1). SRP-Q200-2 i SRP-Q200-3 ponownie wykadrowano z oryginałów bixoloneu.com: produkt 80% płótna zamiast 41–43%. SRP-380-2: usunięto szare linie 1 px przy lewej i prawej krawędzi.
