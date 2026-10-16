# BIXOLON XT5-40NR i XD5-40tR — 16.10.2026

## Zakres i dystrybucja

Dwie karty, cztery PN. Użytkownik zaakceptował zerowe stany. Bez próbek i bez ręcznych stanów. Bez zmian komponentów kart. Zebry pozostają pierwszymi 10 produktami kategorii RFID.

Bezpośrednie uwierzytelnione API Jarltech potwierdziło wszystkie cztery PN oraz trzy głowice i LES-400G. BlueStar i Ingram nie zwróciły ofert. Potwierdzone rekordy zapisano w JarltechStockCache, bez ujawniania cen zakupu. Dalsze odświeżanie obejmuje istniejący rotacyjny jarltech-sync zbierający PN z całego katalogu. Odczyt publicznego /api/stock potwierdził found=true i ceny poniżej.

| PN | Wersja | Cena sprzedaży netto PLN | Zapas EU |
|---|---|---:|---:|
| XT5-40NRES | 203 dpi, UHF EU | 14482,42 | 0 |
| XT5-43NRES/BEG | 300 dpi, UHF EU | 17504,34 | 0 |
| XT5-46NRES/BEG | 600 dpi, UHF EU | 21319,86 | 0 |
| XD5-40tREK | 203 dpi, UHF EU | 8659,82 | 0 |
| AE04-00043A-AS | Głowica XT5 203 dpi | 1528,42 | 0 |
| AE04-00043B-AS | Głowica XT5 300 dpi | 2752,86 | 0 |
| AE04-00043C-AS | Głowica XT5 600 dpi | 3177,67 | 0 |
| LES-400G | Uchwyt rolki XD5 | 75,12 | 11 |

Kurs NBP 4,3661 PLN/EUR, tabela 202/A/NBP/2026. Wspólny unified-stock stosuje mnożnik urządzeń 1,10. Wcześniejsze zestawienie w rozmowie omyłkowo zastosowało 1,15; skorygowano przy implementacji i poinformowano użytkownika. Nie zmieniano reguły cen sklepu.

## Źródła i zgodność

- Aktualna oferta RFID: https://www.bixolon.com/product.php?key=rfid
- XT5-40NR: https://www.bixolon.com/product_view.php?idx=384
- XD5-40tR: https://www.bixolon.com/product_view.php?idx=386
- Jarltech konfiguracje: https://www.jarltech.com/en/bixolon-xt5-40nr oraz https://www.jarltech.com/en/bixolon-xd5-40tr
- Jarltech części XT5: https://www.jarltech.com/en/bixolon-xt5-40-series
- Instrukcja XT5: https://www.bixolon.com/_upload/manual/Manual_user_XT5-40NR_%EC%8B%9C%EB%A6%AC%EC%A6%88_ENG_V1.02.pdf
- Instrukcja XD5: https://www.bixolon.com/_upload/manual/Manual_user_XD5-40tR_%EC%8B%9C%EB%A6%AC%EC%A6%88_ENG_V1_01.pdf
- Katalog akcesoriów wrzesień 2026: https://www.bixolon.com/_upload/accessories_guide/AccessoriesGuide_LabelPrinters_English_Sep26_V1.pdf
- Karty katalogowe dystrybutora: https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/bixolon_xt5-40nr.pdf i https://www.jarltech.com/sites/default/files/documents/product/datasheet/en/bixolon_xd5-40tr.pdf
- Zgodność głowic z rodziną RFID: https://www.barcode-uk.com/product/rfid-products/rfid-printers/bixolon/bixolon-xt5-40nr-4-inch-thermal-transfer-industrial-uhf-rfid-label-printer/bixolon-xt5-40nr-4-inch-thermal-transfer-industrial-uhf-rfid-label-printer-xt5-43nres-beg-rfid-uhf-printing-and-encoding-12-dots-mm-300-dpi-disp-rtc-rs232-ethernet-black/xt5-43nres-beg (sekcja akcesoriów, trzy PN).

Instrukcja XT5 s.104 rozstrzyga różnice szerokości (104/105,7/105,6 mm) i szybkości (356/254/127 mm/s), zamiast uproszczonego 104 mm dla wszystkich w katalogu dystrybutora. Tabela zawiera wyłącznie te trzy różniące się parametry. RFID, interfejsy i RTC są wspólne. Instrukcja XD5 potwierdza LCD, UHF EU, 108 mm, 152 mm/s, LES-400G na s.59. Jeden PN XD5 ma puste atrybuty wariantu. Nie dodano PN /MEA ani wersji 300 dpi niepotwierdzonej w naszym API.

Nie podano pamięci XD5: opis starego PN w Jarltech 64/128 MB, nowsza instrukcja 256/256 MB. Nie rozszerzano konfiguracji o Wi-Fi, Bluetooth lub opcje innych PN. Nie przypisano automatycznie etykiet Zebra bez potwierdzenia wkładki.

Warunki gwarancji zweryfikowano w https://www.bixolon.com/warranty.php i katalogach dystrybutora. Strona ogólna nie podaje okresu konkretnego PN, a Jarltech podaje 12/24 miesiące zależnie od PN XT5 i 36 miesięcy XD5. Ze względu na różnicę z ogólną informacją producenta o 2 latach serii XT5 nie obiecywano jednego wspólnego okresu na nowych kartach.

Nie przypisano gilotyn, odklejaków, nawijaków ani modułów Wi-Fi bez potwierdzenia konkretnego zestawu dla RFID. TPH-XD5-40TR / AE04-00056A-AS nie ma oferty w naszym API. Nie dodano go. AR04-00018A-AS znaleziono w dystrybucji, lecz nie dodano bez jednoznacznej zgodności RFID i prawdziwego zdjęcia. Nie użyto usług StageIT jako akcesoriów sprzętowych.

## Zdjęcia i wygląd

- XT5 źródło: https://www.jarltech.com/sites/default/files/images/product/main/bixolon_xt5-40nr.png i https://www.bixolon.com/_upload/product/XT5-40NR_01_800x800%5B0%5D.png
- XD5 źródło: https://www.bixolon.com/_upload/product/XD5-40TR_01_800x800%5B0%5D.png. Zdjęcie Jarltech pokazuje inny panel bez LCD; użyto właściwego zdjęcia RFID producenta.
- Głowica: https://signprinthead.com/798-large_default/original-bixolon-ae04-00043a-as-printhead-203-dpi-for-bixolon-xt5.jpg — wspólny poglądowy widok zespołu, alt zaznacza charakter poglądowy.
- LES-400G: https://www.ers-online.co.uk/files/products/images/18677_les-400g.jpg

Oryginały obejrzano. Na stronie wykryto szare pasy poza obrysem drukarek. Usunięto je w built-in Imagen, zachowując konstrukcję i kąt. Pierwsze obrazy akcesoriów były za duże; drugi przebieg ograniczył skalę. Finalne assety WebP93 w public/images/products. Założenia promptów użytych w narzędziu: usunięcie szarych artefaktów, płaskie białe nieprzezroczyste tło, zachowanie fizycznych detali, kątów i napisów; printer target73/76% szerokości; accessory target55% z >=22% marginesu z obu stron. Bez zmian CSS kafelków.

Pomiar bbox RGB<210, udział szerokości / wysokości:

| Zdjęcie | W / H |
|---|---|
| XT5-40NR final | 80,5% / 68,1% |
| TSC MB RFID wzorzec | 82,8% / 78,8% |
| SATO CL4NX Plus RFID wzorzec | 74,5% / 68,3% |
| XD5-40tR final | 84,5% / 67,7% |
| Brother TD-4650TNWBR wzorzec | 86,4% / 74,2% |
| TSC TH RFID wzorzec | 72,9% / 73,4% |
| Głowica XT5 final | 58,7% / 27,0% |
| LES-400G final | 58,4% / 47,3% |

Na desktopie pole głównego zdjęcia 576,5×576,5 px, takie samo jak PX45 RFID. Kategorie i akcesoria używają istniejących komponentów. XT5 ma 3 głowice, XD5 jeden uchwyt, więc wszystko mieści się w pierwszym rzędzie. Istniejącego mechanizmu Pokaż pozostałe/Zwiń nie zmieniano. Wszystkie downloady PDF zapisano lokalnie. Dodano producenta, filtr BIXOLON, obsługę prefiksu w middleware i wymiary OG.

## Kontrola

TypeScript, ESLint zmienionych modułów i diff-check. Kontrola unikalności ID/slug, wszystkich odnośników, plików, PN, różnic w tabeli i liczników: RFID34, biurkowe32, przemysłowe55, TT73, akcesoria284. Pierwszych10 RFID to Zebry. Usunięty PM65 RFID nie wraca. Trasa magazynu pozostaje w repozytorium i menu.

Kontrola przeglądarkowa przed pushem: pole kategorii obu BIXOLON 293,66×220,24 px, identyczne jak SATO CL4NX Plus, TSC MB241TR i Brother TD-4650TNWBR. API i UI pokazują 3 ceny XT5 oraz cenę XD5; uchwyt 75,12 zł netto, dostępny. Tabela XD5 zawiera tylko PN, cenę, magazyn, status i akcję. Grafiki wczytane, bez szarych pasów.
