# Rozszerzenie powiązań etykiet RFID — 16.10.2026

## Wynik

Przegląd 34 kart aktualnych drukarek RFID i 21 istniejących kart etykiet (25 PN). Nie dodawano nowych etykiet, sampli ani PN z nierozstrzygniętą jednostką sprzedaży. Macierz wzrosła z 43 do 81 relacji kart (+38). Powiązania etykieta → drukarka i drukarka → etykieta korzystają z jednego źródła.

| Drukarki | Karty etykiet standardowych | Zmiana |
|---|---:|---|
| Zebra ZT231 RFID, ZT411 RFID, ZT610 RFID | po 12 | +5 mniejszych nawojów na gilzie 76 mm |
| Zebra ZT421 RFID, ZT620 RFID | po 9 | +4 mniejsze nawoje; bez BT781 szerokości 44 mm |
| Zebra ZD621R | 5 | Bez zmiany; adapter gilzy 76 mm |
| Zebra ZD611R | 2 | Bez zmiany; wyłącznie formaty do 54 mm, adapter gilzy 76 mm |
| TSC Printronix T6204e/T6304e/T6604e/T6206e/T6306e RFID | po 3 | BT573 PP przemysłowe, BT573 PET biurkowe, BT793 biurkowe |
| Zebra ZT411 T5 On-Metal | dodatkowe 5 | Bez zmiany, oddzielna sekcja i dokładne PN T5 |

TSC: ZIPRT3017401 (BT573 UCODE 9), ZIPRD3017407 (BT573 UCODE 9), ZIPRD3016390 (BT793 UCODE 9). Walidacja producenta dotyczy wkładek, nie fizycznego testu każdej rolki Zebra w TAKMA. Przed rozpoczęciem druku wymagana jest kalibracja materiału i RFID. Nie deklarujemy laboratoryjnego potwierdzenia wszystkich gotowych PN.

Mniejsze rolki biurkowe nie są zastrzeżone do drukarek biurkowych: gilza 76/76,2 mm i średnica do 127 mm mieszczą się także w torze wybranych modeli przemysłowych. Zachowano ograniczenia szerokości mediów (51 mm dla ZT421/ZT620), szerokości głowicy i skoku RFID. Wymaganie adaptera jest teraz zapisane dla konkretnej pary drukarka–etykieta, a nie globalnie dla całej rodziny. Nie przeniesiono adaptera ZD na ZT/TSC. BT793 jest termiczna i nie wymaga taśmy; opis sekcji rozróżnia DT i TT.

## Pozostałe modele i wykluczenia

- Brother TD-4650TNWBR / TD-4750TNWBR / TJ-4021TNR / TJ-4121TNR: instrukcje dopuszczają wiele wkładek po kalibracji, ale nie potwierdzają konkretnych gotowych PN Zebra. Brak bezwarunkowych rekomendacji.
- BIXOLON XT5-40NR / XD5-40tR: lista producenta zawiera m.in. ALIEN i KLU; nie zawiera naszych konkretnych wkładek. Dla XD5 dodatkowo gilza 25,4–38,1 mm nie mieści naszych rolek 76 mm. Uchwyt LES-400G nie znosi tego ograniczenia.
- TSC MB241TR/MB341TR oraz TH240R/TH340R: puste kolumny MB241/TH240 w macierzy nie oznaczają walidacji. TH dodatkowo standardowo 25,4–38,1 mm gilzy. Bez nowych rekomendacji.
- TSC Alpha-40L RFID: wkładka ZBR2000 jest odnotowana jako przetestowana, ale posiadane nawoje TT na gilzie 76 mm nie pasują do mobilnej drukarki DT. Nie utożsamiono zgodności samej wkładki ze zgodnością rolki.
- Honeywell PM45 RFID / PX45 RFID / PX65 RFID: sam UHF, szerokość i gilza nie są dowodem poprawnego kodowania konkretnej wkładki. Instrukcja PM45/65 dostępna w wyszukiwaniu producenta wymagała logowania przy próbie pobrania. Brak nowego przypisania bez potwierdzonej kombinacji.
- SATO CT4-LX / CL4NX Plus / CL6NX Plus RFID: sprawdzono osobne tabele UHF producenta (ETSI); nie zawierają posiadanych BT573/BT793/ZBR2000/ZBR2100/ZBR2200/ZBR4000. Podobny DogBone UCODE 8 nie jest ZBR4000 UCODE 8. CL4-SXR/CL6-SXR: nie przenoszono macierzy NX na inną generację urządzeń.
- Zebra ZQ511/ZQ521/ZQ630 Plus RFID: bez przenoszenia rolek TT do DT. ZIPRM3017413/7414 pozostają bez rekomendacji do czasu ustalenia średnicy gotowego nawoju; ZQ511 wyklucza także szerokość 102 mm.
- BT713 25 × 15 mm oraz Metal Skin Delta/Titanium: zachowano wcześniejsze ograniczenia skoku, szerokości podkładu i konstrukcji. Silverline nadal wyłącznie w dedykowanej konfiguracji ZT411 T5.
- ZIPRT3014648, ZIPRT3017405 i P150270-001 z ostatniego badania nie były publikowane i nie są przedmiotem tego wdrożenia.

## Źródła

- Zebra EMEA RFID Supplies Catalogue, January 2026: https://www.zebra.com/content/dam/zebra_dam/en_gb/brochure/portfolio/rfid-supplies-zipship-catalogue-en-gb.pdf — klasy nawojów, wkładki, gilzy, średnice i wymiary.
- Zebra ZD600 RFID: https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zd600-rfid-series-spec-sheet-en-us.pdf — ograniczenia modeli biurkowych i adaptery.
- Zebra specyfikacja mediów ZT411/ZT421: https://docs.zebra.com/us/en/printers/industrial/zt411-zt421-industrial-printer-user-guide/c-zt4x1-specs/r-zt4x1-media-specifications.html
- TSC RFID Tags and Inlays Tested by Printer Model: https://fs.tscprinters.com/en/download/3138 — wizualnie sprawdzone kolumny modelowe i wiersze 91 (BoingTech 1020573t / UCODE 9), 95 (1020781P / UCODE 8), 96 (1020793 / UCODE 9), 199 (ZBR2000 / UCODE 8). Nie przeniesiono wiersza 95 na niejednoznaczne UCODE 8/9 naszej rodziny BT781. Wiersz 199 potwierdza tylko Alpha-40L, nie T6000e.
- TSC T6000e RFID: https://fs.tscprinters.com/es/dl/2/2179 — tor materiału, DT/TT, minimum RFID 15,9 mm, różnice 4/6 cali. Bieżące karty w repozytorium i audyty źródłowe zawierają zgodne limity.
- SATO konfiguracja i pliki CL4NX Plus, CL6NX Plus oraz CT4-LX: https://www.sato-global.com/support/rfid-config-guide/ — osobne listy przetestowanych wkładek, region, pozycja anteny i minimalne separacje.
- BIXOLON lista wkładek: https://www.bixolon.com/_upload/manual/Manual_RFID_Inlay_Compatibility_ENG_V1.00.pdf
- Brother TJ RFID: https://download.brother.com/welcome/docp100549/cv_tj-4020tn_eng_ug_04.pdf — rozdział 9, kalibracja i warunki umiejscowienia wkładki.

## Kontrola i publikacja

Istniejący komponent PrinterMaterialVariants: bez zmian układu, CSS, obrazów, cen, koszyka ani filtracji stanów. Cztery pierwsze kafelki i standardowe Pokaż pozostałe / Zwiń. Ta sama pula PN, obrazów i ofert; zmieniają się wyłącznie przypisania i warunki użycia. Cen i stanów nie wpisano na stałe. Zachowano osobny dział Silverline dla T5.

Testy: integralność 21 kart /25 PN, unikalność, SEO, wyszukiwanie PN, powiązania w obie strony, granice szerokości, wymagania adaptera zależne od drukarki, wykluczenia modeli bez potwierdzenia i zwykłych modeli bez RFID. TypeScript i lint bez nowych błędów; wcześniejsze ostrzeżenie img w nagłówku marki.

Kontrola przeglądarki przed publikacją: T6204e pokazuje trzy dokładne PN, ceny live, stany i koszyk; karta BT793 po rozwinięciu pokazuje wszystkie pięć modeli TSC. ZT411: 4 → 14 aktualnie dostępnych wariantów → 4. ZD611R: tylko ZIPRD3016344 i ZIPRD3016390, widoczny adapter. Wzorce ZD421t oraz zwykła ZT411 mają identyczne pola zdjęć 288,25 × 216,19 px, object-contain p-3. Zajętość obrazów przy progu różnicy od bieli 35: nowe przypisania BT573 PP 54,4 × 57,1%, BT793 54,3 × 67,5%; wzorce Z-Select 2000T 51,5 × 65,9%, Z-Perform 1000T 65,8 × 55,5%. Schemat BT573 PET zawiera podpisy i wymiary (86,6 × 70,2% całej grafiki), wizualnie poprawny w istniejącym polu. Nie edytowano obrazów. Pełny build produkcyjny lokalny przeszedł z wyłączoną produkcyjną bazą i kluczami dystrybucji.

Publikacja: wyłącznie commit i push na claude/takma-frontend-build-RrM9E, automatyczne wdrożenie Gita. Zachowano pliki panelu magazynu, pozycję menu i obsługę danych.
