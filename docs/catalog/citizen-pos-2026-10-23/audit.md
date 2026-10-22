# Citizen POS — 10 drukarek paragonów i 17 akcesoriów w /drukarki-pos

Data: 22–23.10.2026 (praca nocna). Zakres: 10 kart drukarek Citizen (bez igłowej CBM-910II), 17 nowych kart akcesoriów, zgodność istniejącej karty TZ66802-0, treść, filtry i dane kategorii `/drukarki-pos`, llms.txt. Polecenie właściciela (czat 22.10.2026): „https://www.citizen-systems.com/pl/products/printer/pos/overview — to zostawiam Ci na noc do zrobienia. To w kategorii Drukarki POS. Spokojnie, powoli to rób. Opis zgodny ze specyfikacją. Zdjęcia dopasowane do reszty. Datasheety dostępne tam na stronie. Nie dodawaj drukarek igłowych.”

Pliki: `src/data/citizen-pos-products.ts` (wzorem `epson-pos-products.ts` / `bixolon-pos-products.ts`), podłączenie w `products.ts`, `product-stock.ts` (`LIVE_OFFER_SLUGS`), `produkt/[slug]/page.tsx` i `product-variant-offers.ts` (Citizen POS jak Epson/BIXOLON/SUNMI POS: oferty na żywo, ProductGroup, `@id`, galeria 0,78), `ProductCard.tsx` (kafle jak Epson POS: 0,72 drukarki, 0,62 akcesoria; logo Citizen jako zdjęcie zastępcze akcesoriów, jak Brady/SUNMI).

## Źródła

- Karty katalogowe PL i EN (PDF z 20.05.2026): `https://www.citizen-systems.com/resource/support/generated/printer/<model>/datasheet-<model>-{pl,en}.pdf`. Wersje PL skopiowane do `public/datasheets/citizen-<model>.pdf` (bez zmian).
- Instrukcje obsługi EN (rozdz. 1.1–1.4: cechy, zawartość opakowania, „Model Classification”, specyfikacja): `https://www.citizen-systems.com/resource/support/POS/Manuals/User_Manuals/…` — CT-E301, CT-E351, CT-E601, CT-E651 (wspólna z CT-E651L), CT-S310II, CT-S601II (wspólna z CT-S601IIR), CT-S751, CT-S851III, CT-S4500.
- Citizen „Network and Option Interfaces – POS Printers” (04.08.2025): `https://www.citizen-systems.com/resource/support/POS/Generic_Printer_Files/Docs_Compatible_Network_Cards/Citizen_Network_and_Option_Interfaces_-_POS.pdf` — tabela gniazd IF1/IF2 i opcji (Powered USB 1100092, Bluetooth i Lightning tylko fabrycznie, PwrOut 5 V / 2 A).
- Strony produktów Citizen PL/EN (`/pl/products/printer/pos/<model>`) — tylko CT-S601IIR: media „MAXStick (Premium, 2GO i X2), Nakagawa”, „etykiety, które można ponownie przyklejać”.
- Dystrybutorzy (opisy PN): Jarltech `https://www.jarltech.com/en/citizen-<model>`, ERS `https://www.ers-online.co.uk/…` (strony modeli i `/<MODEL>/accessories/all`), Levata `https://www.levata.com/en-gb/citizen-<model>-receipt-printers`.
- Ceny i stany: `/api/stock` (źródło „mixed” / „stock-cache+jarltech-override”), sprawdzone ponownie 22.10.2026 ok. 23:10, przed wpisaniem.

## PN drukarek — konfiguracja potwierdzona źródłem

| PN | Konfiguracja na karcie | Potwierdzenie | Cena netto | Stan API |
|---|---|---|---:|---|
| CTE351XXEBX | USB, RS-232, czarna | Jarltech („USB, RS232 … black”), ERS, Levata | 593,42 | available (DE 40, +96 w dostawie) |
| CTE351XEEBX | USB, Ethernet, czarna | Jarltech, ERS, Levata | 657,09 | available (88) |
| CTE351XXEWX | USB, RS-232, biała | Jarltech, ERS, Levata | 593,42 | available (48) |
| CTE351XEEWX | USB, Ethernet, biała | Jarltech, ERS | 657,09 | unavailable |
| CTE301XXEBX | USB, czarna | Jarltech („USB (type B) … black”), Levata | 616,33 | available (27) |
| CTE301XXEWX | USB, biała | Jarltech | 616,33 | unavailable |
| CTE301X3EBX | USB, RS-232, Ethernet, czarna | Jarltech („USB (type B), RS232, Ethernet … black”) | 728,40 | on-order (0 + 16 w dostawie) |
| CTE301X3EWX | USB, RS-232, Ethernet, biała | Jarltech | 728,40 | unavailable |
| CTS310IIEBK | USB, RS-232, czarna | Jarltech („dual interface (RS232, USB) … black”), instrukcja (bez kodu = USB + serial, BK) | 593,42 | available (121) |
| CTS310IIXEEBX | USB, Ethernet, czarna | Jarltech („USB, ethernet … black”) | 659,63 | available (9) |
| CTS310IIEPW | USB, RS-232, biała (pure white) | Jarltech („white”), instrukcja (PW = pure white) | 593,42 | unavailable |
| CTE601XNEBX | USB, gniazdo karty, czarna | Jarltech („update-interface … black”), ERS („Optional Interface Slot”) | 784,42 | available (2) |
| CTE601XNEWX | USB, gniazdo karty, biała | Jarltech, ERS | 784,42 | unavailable |
| CTE601XTEBX | USB, Bluetooth (USB host), czarna | Jarltech („USB, USB Host, Bluetooth … black”), ERS | 980,53 | unavailable |
| CTE601XAEBX | USB, Lightning (USB host), czarna | Jarltech („USB, USB Host, Lightning … black”), ERS | 1158,81 | unavailable |
| CTE651XNEBX / XNEWX | USB, czarna / biała | Jarltech, Levata („USB, black/white”) | 713,12 | unavailable |
| CTE651XTEBX / XTEWX | USB, Bluetooth, czarna / biała | Jarltech, Levata („USB, BT”) | 921,95 | unavailable |
| CTE651XAEBX | USB, Lightning (USB host), czarna | Jarltech, Levata | 1102,78 | unavailable |
| CTE651XNEBXL | USB, czujnik szczeliny i czarnego znacznika, czarna | Jarltech („Black Mark Sensor, Gap Sensor … black”), instrukcja (sufiks L = czujnik papieru włączony) | 1059,49 | unavailable |
| CTS751XNEBX / XNEWX | USB, czarna / biała | Jarltech, ERS | 804,80 | unavailable |
| CTS751XTEBX / XTEWX | USB, Bluetooth (iOS), czarna / biała | Jarltech („Bluetooth (iOS)”), ERS („BT (iOS)”) | 1011,10 | unavailable |
| CTS751XAEBX | USB, Lightning (USB host), czarna | Jarltech, ERS | 1189,38 | unavailable |
| CTS851IIIS3NEBPXX | USB + gniazdo karty, wbudowany zasilacz, czujnik bliskiego końca, czarna | Levata („USB + Option Slot, Black … LCD display, 4 buttons”), Jarltech; instrukcja (S = built-in, P = PNE) | 895,96 | available (14) |
| CTS851IIIS3TEBPXX | USB, Bluetooth, czarna | Levata („Bluetooth, USB, Black”) | 1133,83 | unavailable |
| CTS601IIS3NEBXRX | bez interfejsu, liner-free, wbudowany zasilacz, czarna | ERS („Restick/Liner-free, No interface, Black”); instrukcja (S, R = liner-free) | 1160,25 | unavailable |
| CTS4500XNEBX | USB, czarna | Jarltech („USB, drawer kickout … black”), ERS | 1148,62 | available (4) |
| CTS4500XNEWX | USB, biała | Jarltech | 1148,62 | unavailable |
| CTS4500XTEBX | USB, Bluetooth, czarna | Jarltech | 1357,47 | unavailable |

Uwagi do konfiguracji:
- CT-E601 XN: Jarltech opisuje XNEWX jako „USB, USB Host”, a XNEBX bez „USB Host”; ERS przy obu podaje „USB Host”. Na karcie: USB + gniazdo karty (to potwierdzają oba źródła), bez USB host dla XN. Port USB do ładowania (PwrOut) według dokumentu Citizen.
- CT-E651 XN: dystrybutorzy podają tylko „USB”. Gniazdo karty IF2 wynika z dokumentu Citizen (dla modelu) i instrukcji („Interchangeable interface board”), dlatego na karcie wariant XN nie ma atrybutu, a karty opisano w treści i specyfikacji jako opcję.
- CT-E651 XT, CT-S751 XT: dystrybutorzy nie podają „USB Host” — na karcie tylko „Bluetooth”.

## Pominięte PN

- Rynki USA/Japonia/Chiny/Australia/Indie (np. CT-S310II-U-BK, CT-E351RSU-BK, CT-S601IIS3UBUBKR) — poza zakresem.
- API nie zna: CTE601XXEBX, CTE601XXEWX, CTS4500XTEWX, CTS310IIEWH, CTS310IIXEEPW, CTS310IIXXEPX i 49 kombinacji z formatu (lista w rozpoznaniu).
- Stara seria CT-S310 bez „II” (CTS310PAWH, CTS310RSEWH, CTS310USBWH).
- CTS851IIIN3NEBPXX — znaczenie litery N niepotwierdzone (Levata: „No Interface”).

## Sprzeczności w materiałach producenta i decyzje

1. **Zasilacz (CT-E301/E351/E601/E651/E651L/S751).** Karty katalogowe w „Funkcjach i korzyściach” piszą „wbudowane źródło zasilania” (szablon). Tabela specyfikacji CT-E351/E651/E651L: „zewnętrzne źródło zasilania (w zestawie) lub 24 V DC”. Instrukcje (1.2 Unpacking): zasilacz **37AD5** w zestawie; Jarltech: „incl.: power supply unit”. Decyzja: „zasilacz zewnętrzny 37AD5 w zestawie”. ERS potwierdza, że PWT20022-00 = „37AD5 AC Adaptor”.
2. **Zasilacz CT-S601IIR.** Tabela karty: „external power supply (supplied) or 24V DC”; PN `S3` = wbudowany zasilacz (instrukcja CT-S601II: S = built-in, 36AD3/37AD3 built in), ERS „integrated power supply”, wymiary/masa w karcie dla wersji S (145 × 192 × 148 mm, 2 kg). Decyzja: zasilacz wbudowany.
3. **CT-S310II, CT-S851III (S3)** — wbudowany zasilacz, bez sprzeczności (karta + instrukcja).
4. **Trwałość.** Karty CT-E301/E351/E601/E651/E651L/S310II/S751/S851III podają szablonowe „200 mln impulsów lub 150 km, 2 mln cięć”; instrukcje podają inne wartości (np. CT-E351: 150 km / 300 mln, 1,5 mln cięć; CT-E601: 200 km / 200 mln, 2 mln cięć; CT-E651: dodatkowo „20 mln linii” w karcie). Decyzja: trwałości nie podano. Wyjątek CT-S601IIR: karta „100 mln impulsów, 75 km” = instrukcja (liner-free) → podano trwałość głowicy. CT-S310II: zdanie z karty „LLP może wydłużyć trwałość głowicy do 200 km lub więcej” zostało, bo to cecha funkcji, nie wartość nominalna.
5. **Wymiary CT-E301 i CT-E601.** Karta: „108 x 125 x 165 mm (szer. × gł. × wys.)”, Jarltech tak samo; instrukcje: 125 (W) × 165 (D) × 108 (H) mm. Zdjęcie tyłu (CT-E301 White_08) ma proporcję szer./wys. 1,16 ≈ 125/108, więc kolejność w karcie jest błędna. Decyzja: 125 × 165 × 108 mm. Masa: karta 1,3 kg, instrukcja ok. 1,2 kg → podano 1,3 kg (karta).
6. **Wymiary CT-E351/E651/S751.** Karta 125 × 170 × 108 mm, 1,26 kg; instrukcje 125 × 165 × 108 mm, ok. 1,3 kg. Decyzja: wartości z karty.
7. **Masa CT-S310II.** Karta 1,9 kg, instrukcja 1,8 kg → 1,9 kg (karta).
8. **Panel CT-E301.** Karta: „1 przycisk, 2 diody LED”; instrukcja i zdjęcia: przyciski POWER i FEED. Decyzja: „Przyciski POWER i FEED, 2 diody LED” (instrukcja).
9. **Szerokość papieru CT-E351/E651/E651L** (karta 59–80 mm ±0,5) i **CT-E301/E601** (57,5–79,5 mm ±0,5) — na kartach wartości z karty katalogowej; instrukcje podają „80 mm i 58 mm”. W filtrze kategorii modele te są w „58 mm” i „80 mm” (reguła `slugs`).
10. **Gwarancja.** Z karty: CT-E351, CT-E651, CT-E651L, CT-S310II, CT-S751, CT-S4500 („2 lata, w tym głowica i obcinak”). Karty CT-E301, CT-E601, CT-S851III, CT-S601IIR nie podają: CT-E601 — ERS („2-year warranty including head and cutter”); CT-E301, CT-S851III — Jarltech „24 months”; CT-S601IIR — ERS „2-year warranty”.
11. **Jarltech CT-E351**: szerokość druku 76 mm — przyjęto 72 mm (karta i instrukcja).
12. **CT-S310II**: karta podaje tylko RS-232 + USB 1.1; wersja Ethernet z instrukcji (ET) i Jarltech. Grubość papieru i średnica rolki tylko z instrukcji.
13. **„Przenośna drukarka POS” / „Mobile-POS ready”** — szablon kart, pominięte.

Inne dane spoza karty katalogowej (instrukcja lub dystrybutor): zawartość zestawu (instrukcje + Jarltech/Levata), obsługa 2 szuflad (instrukcje), RJ12 (Jarltech, CT-E651), papier 58/80 mm w CT-S310II/S751 (karta) i grubość/gilza CT-S310II (instrukcja), minimalna długość wydruku 40 mm i odbiór etykiet pojedynczo (instrukcja CT-S601II), Nakagawa (strona Citizen), Bluetooth (iOS) CT-S751 (Jarltech), XML/Web print i zalecenia podłączania kart (instrukcje), 115 200 b/s dla RS-232 (dokument Citizen).

## Akcesoria i zgodność

| Karta | PN | Cena / stan | Zgodność na karcie | Źródło zgodności |
|---|---|---|---|---|
| citizen-pos-lan-usb-host-ppz60104s | PPZ60104S | 417,58 / unavailable | CT-E601, CT-E651, CT-E651L, CT-S751, CT-S4500; CL-E300EX/321EX | Jarltech („LAN card with USB-Host, for: CL-E300EX/321EX, CT-E601/651, CT-S4500/751”), ERS |
| citizen-pos-wifi-ppz60112s | PPZ60112S | 681,88 / unavailable | jw. | Jarltech („WiFi interface for: …”), ERS |
| citizen-pos-rs232-pps00276s | PPS00276S | 73,77 / unavailable | CT-E601, CT-E651, CT-E651L, CT-S4500, CT-S251 | Jarltech („fits for: CT-S251, CT-E651, CT-S4500, CT-E601”), ERS (strony E601, S4500). **Bez CT-S751** — dokument Citizen ma IF2-RS01 dla S751, ale PN PPS00276S nie jest potwierdzony dla S751 |
| citizen-pos-lan-premium-if2-es04 | IF2-ES04 | 771,74 / unavailable | CT-E601/651/651L, CT-S751, CT-S4500; CL-E300EX/321EX, CL-H300SV | ERS, dokument Citizen (Premium LAN 10/100/1000) |
| citizen-pos-wifi-premium-if2-wf5s | IF2-WF5S | 927,67 / unavailable | jw. (bez CL-H300SV) | ERS, dokument Citizen (2,4/5 GHz, 802.11a/b/g/n/ac) |
| citizen-pos-wifi-premium-if2-wf5l | IF2-WF5L | 991,10 / unavailable | jw. + CL-H300SV | ERS, dokument Citizen |
| citizen-pos-modul-wifi-upg-wf5s | UPG-WF5S | 155,94 / unavailable | rozbudowa IF2-ES04 (E601/651/651L, S751, S4500); IF5-ES04 | dokument Citizen („WiFi Upgrade”, „identical to the full WiFi card”), ERS („For: WLAN interface IF5-ES04”) |
| citizen-pos-modul-wifi-upg-wf5l | UPG-WF5L | 219,36 / unavailable | rozbudowa IF2-ES04 | dokument Citizen (UPG-WF5L = antena dalekiego zasięgu) |
| citizen-pos-ethernet-pps00585s | PPS00585S | 263,53 / **available (16)** | CT-S851III; CT-S600/800/601II/651II/801II/851II; CL-S400DT, CL-S6621 | ERS (strona akcesoriów CT-S851III: „Interface - Compact Ethernet”), Jarltech |
| citizen-pos-lan-usb-host-pps00339s | PPS00339S | 370,01 / unavailable | CT-S851III | ERS („IF1-EFX2 LAN Interface Card with USB-Host & Remote Management”), dokument Citizen (IF1-EFX2 dla CT-S80xIII) |
| citizen-pos-wifi-ppz60108s | PPZ60108S | 639,60 / unavailable | CT-S851III, CT-S601IIR; CT-S600, CT-S800II; CL-E700, CL-S400, CL-S6621 | ERS (strony S851III i S601IIR), Jarltech („WiFi (802.11ac)”) |
| citizen-pos-rs232-tz66801-0 | TZ66801-0 | 46,52 / unavailable | CT-S851III, CT-S601IIR; CT-S600/800/601II/651II/801II/851II; CL-E700 | ERS (strony S851III i S601IIR), Jarltech („serial, 25 pins”) |
| citizen-pos-usb-tz66803-0 | TZ66803-0 | 46,52 / unavailable | seria CT-S600/800, w tym CT-S601IIR i CT-S851III | ERS („USB Interface Card Module for CT-S600/800”, strony S851III i S601IIR) |
| citizen-pos-powered-usb-1100092 | 1100092 | 142,19 / unavailable | CT-E301, E351, E601, E651, E651L, S751, S851III, S601IIR | dokument Citizen (wiersz Powered USB), ERS („Powered USB 24v Y-Cable”, także strona S601IIR) |
| citizen-pos-uchwyt-scienny-wallmountkit | WALLMOUNTKIT | 52,09 / unavailable | CT-S601, CT-S801 (w tym CT-S601IIR), CD-S50 | ERS („Wall Mount Kit for CT-S601/801, CD-S50”) |
| citizen-pos-zasilacz-pwt20022-00 | PWT20022-00 | 155,94 / unavailable | CT-E301, E351, E601, E651, E651L, S751 | ERS (PWT20022-00 = 37AD5), instrukcje (37AD5 w zestawie tych modeli), Jarltech (CT-E351) |
| citizen-pos-zasilacz-pwt20035-0 | PWT20035-0 | 168,23 / unavailable | CT-S4500; CL-E300, CL-E303, CL-E321, CL-E331 | Jarltech, ERS |
| citizen-parallel-cl-s400dt (istniejąca) | TZ66802-0 | bez zmian | dopisano CT-S851III i CT-S601IIR | ERS (strony S851III i S601IIR), Jarltech |

Pominięte akcesoria:
- **PPS00591S** — API go zna (210,67 zł), ale żaden dystrybutor ani dokument nie potwierdza nazwy ani zgodności tego PN (rozpoznanie przypisało go do IF2-EFX3 bez źródła). Brak karty.
- **PPM80053-0** (głowica CT-S4500) — wzorzec kategorii (Epson, BIXOLON POS) nie ma części zamiennych.
- **3YW-CTS600_800_2000** — przedłużenie gwarancji, poza zakresem.
- **IF1-ES04, IF1-WF5S/L, PPZ60094S, PPZ60103S, PPS00279S, PBM30056-0, PBM30093-0, PBM30062-0, 2000462** — poza listą briefu lub poza API.
- IF2-ES04, IF2-WF5S i IF2-WF5L ERS oznacza jako „Product Discontinued” (UK); API je zna, karty dodane jako „Niedostępny”.

`relatedAccessories` drukarek: pierwsze 4 pozycje to najczęściej potrzebne (Wi-Fi, Ethernet, RS-232/Powered USB lub zasilacz), reszta w „Pokaż pozostałe” (mechanizm bez zmian).

## Zdjęcia

Źródło: oryginały z `https://www.citizen-systems.com/media/images/printer/POS/<model>/…` (białe tło, 2194–8220 px). Obróbka: `python3 scripts/obrob-zdjecia.py … --plotno=1200x1200 --jak=public/images/products/C04060001.png --bez-ciena` (rembg birefnet-general, dłuższy bok obiektu 83% płótna jak SUNMI NT220), potem spłaszczenie na białe tło RGB i zapis PNG po PN. Mapy `product-image-dims.json`, `-frames.json`, `-uniform-bounds.json` dopisane skryptem pomocniczym (bbox kanału alfa > 8), bez `generate-image-dims.mjs`.

| Model | Pliki | Źródła (kolejno) |
|---|---|---|
| CT-E351 | CTE351XXEBX(.png, -2…-6) | Black_POS (przód pod kątem), Black_POS_Printout, Black_POS_Front, Black_POS_Back (wersja Ethernet), Black_POS_Open, biała: `_processed_/…/csm_Citizen_CT-E351_White_POS_4ce97f94d2.jpg` 750 × 500 (jedyna dostępna wersja biała, powiększona ok. 1,8×) |
| CT-E301 | CTE301XXEBX(-2…-6) | Black_02_3-4_angle_without_printout, Black_01_…with_printout, Black_06_Upper_front_view, BK_SingleInterface (tył USB), White_08_Back_side (tył USB+RS-232+Ethernet), White_02_3-4_angle |
| CT-S310II | CTS310IIEBK(-2…-5) | White_POS_Shadow (jedyne ujęcie pod kątem — zdjęcie główne białe), Preview Black (1200 px; czarne oryginały mają max 1280 px), White_POS_Front, HR/Black_POS_Connections, White_POS_Open |
| CT-E601 | CTE601XNEBX(-2…-6) | Black_POS, Black_POS_Printout, Black_POS_Front, Black_POS_Back, Black_POS_Open_Media, White_POS |
| CT-E651 | CTE651XNEBX(-2…-6) | black/Citizen_CT-E651_POS, Black_POS_Printout, Black_POS_Front, Black_POS_Back, Black_POS_Open (szare tło — wycięte), white/White_POS |
| CT-E651L | CTE651XNEBXL(-2…-4) | CT-E651L/black/Printout (etykieta), CT-E651L/white/Front, CT-E651 Back, CT-E651 Open (ta sama obudowa; strona Citizen CT-E651L też używa zdjęć CT-E651) |
| CT-S751 | CTS751XNEBX(-2…-6) | White_POS_Upperfront (brak zamkniętego ujęcia pod kątem), White_POS_Front, Black_POS_Open, Black_POS_Side_View_Open, Black_POS_Bottom, Black_White_POS_Printout |
| CT-S851III | CTS851IIIS3NEBPXX(-2…-5) | BK_Oblique_Online, BK, BK_Back, BK_Oblique_Error, BK_Open-Paper — oryginały CMYK (Japan Color 2001 Coated) przekonwertowane `magick -profile "sRGB Profile.icc"` |
| CT-S601IIR | CTS601IIS3NEBXRX(-2,-3) | Black_POS_Feed, Black_POS_Front, Black_POS_Open (Panel to wycinek przycięty na krawędziach; zdjęcia z kością słoniową pominięte, bo nie ma PN) |
| CT-S4500 | CTS4500XNEBX(-2…-6) | Black_POS, Black_POS_Upperfront, Black_POS_Back (z kartą sieciową), Black_POS_Open_Printout, White_POS_Front_Printout, White_POS_Side_View_Open |

Uwaga: Citizen publikuje te same pliki dla CT-E351 i CT-E651 (POS, Front — identyczne md5), więc zdjęcia główne obu kart są takie same; różnią się zdjęcia tyłu (Ethernet vs gniazdo karty).

Akcesoria: oficjalnych zdjęć Citizen brak (strony Citizen nie publikują kart interfejsu; ERS ma własne zdjęcia dystrybutora). Wszystkie 17 kart ma `images: []` i w kaflach logo Citizen (wzorzec Brady/SUNMI: `placeholderLogo` w `ProductCard.tsx`).

## Weryfikacja z kartami katalogowymi (23.10.2026)

Każdą kartę porównano zdanie po zdaniu z kartą PL i EN (title, meta, short, opis, specyfikacja, FAQ, dymki, opisy zdjęć). Poprawione w trakcie:
- opisy zdjęć „z lewej/prawej strony” → „pod kątem” (kąt nie jest opisany przez producenta);
- CT-E351: „wylot z gilotyną” w opisie zdjęcia przodu → bez gilotyny (nie widać);
- CT-S751: zdanie o miejscu nad drukarką → sformułowanie z karty („nawet w niedużych przestrzeniach”);
- CT-S4500: „rolka 112 mm” w opisie zdjęcia → „papier w komorze”; „zapasowy zasilacz” → „zasilacz zgodny, sprzedawany osobno”;
- CT-E601: gwarancja z ERS; opcje kart uzupełnione o „USB z hubem” (karta katalogowa);
- CT-E651L: „etykiety cenowe” → „etykiety” (karta nie mówi o cenach);
- CT-S601IIR: usunięto ENERGY STAR (karta tego modelu go nie wymienia).
SPOZA KARTY (oznaczone wyżej): zawartość zestawu, gwarancja CT-E301/E601/S851III/S601IIR, Bluetooth (iOS) CT-S751, RJ12 CT-E651, Nakagawa, zalecenia instalacji kart.

## Do decyzji / otwarte

- `src/lib/ingram.ts` nie rozpoznaje PN `CTE…`/`CTS…` ani akcesoriów Citizen (spadają do prefiksu `ZB`); ceny działają z BlueStar/Jarltech. Bez zmian, zgodnie z briefem.
- GTIN wariantów są u ERS (np. CTE351XEEBX 5060198390760) — nie wpisane (karty Epson/BIXOLON POS też nie mają GTIN).
- Slugi `citizen-*` przechodzą przez middleware dzięki prefiksowi `citizen-`; `existingSlugs` bez zmian.

## Poprawki po audytach (23.10.2026)

Dwa niezależne audyty porównały karty z kartami katalogowymi, instrukcjami, dokumentem „Network and Option Interfaces – POS” i dystrybutorami. Decyzje głównej sesji wprowadzone w commitach na gałęzi `produkt/citizen-pos`. Ta sekcja ma pierwszeństwo przed tabelami wyżej (akcesoria, „Pominięte akcesoria”).

### Akcesoria

| Zmiana | Źródło |
|---|---|
| Usunięte karty IF2-ES04, IF2-WF5S, IF2-WF5L, UPG-WF5S, UPG-WF5L (z `relatedAccessories`, opisów, FAQ, specyfikacji „Karty interfejsu” i `llms.txt`) | ERS: „Product Discontinued”; Jarltech ich nie ma; UPG rozbudowują tylko kartę Premium |
| Usunięta karta WALLMOUNTKIT (także z akcesoriów CT-S601IIR) | Instrukcja CT-S601II, rozdz. 3.9: „CT-S601IIS (built-in power supply type) cannot be used vertically or installed on a wall” — brak zgodnej drukarki w katalogu |
| 1100092: zgodność tylko CT-E301, CT-E351, CT-E601, CT-E651, CT-E651L, CT-S751 (gniazdo DC, zasilacz 37AD5); usunięty z CT-S851III i CT-S601IIR (wersje S z gniazdem AC); specyfikacja: 1 m, USB i wtyk DC | Dokument Citizen (wiersz Powered USB), ERS („Powered USB 24v Y-Cable USB & Hosiden DC power (1m)”, lista modeli), instrukcje (37AD5 w zestawie) |
| TZ66803-0: zgodność tylko CT-S601IIR; usunięta z CT-S851III (USB w standardzie) | Instrukcja CT-S851III, karta katalogowa |
| PPS00339S: bez „zdalnego zarządzania”; 2 porty USB host, Ethernet 10/100 Mb/s, konfiguracja w przeglądarce; różnica wobec PPS00585S: porty USB host i Request Print | Dokument Citizen, str. 2 (IF1-EFX2 / IF1-EFX3) i str. 4 |
| PPZ60104S: 2 porty USB host do urządzeń wskazanych przez Citizen; XML/Web print w CT-E601, CT-E651, CT-E651L, CT-S751, CT-S4500; port ładowania tylko CT-E601, CT-S751, CT-S4500 | Instrukcje rozdz. 1.1 i 3.6 (CT-E601), dokument Citizen str. 2 i 4 |
| PPZ60112S: Wi-Fi 2,4 i 5 GHz, 802.11a/b/g/n/ac, do 433 Mb/s, port Ethernet 10BASE-T/100BASE-TX; adapter Wi-Fi działa w porcie USB karty, nie w porcie ładowania. Adapter w zestawie — nie wpisano (ERS i Jarltech tego nie podają) | Dokument Citizen str. 2 (IF2-WF05), instrukcja CT-E601 rozdz. 3.6 |
| Nowa karta PPS00591S (IF2-EFX3, Ethernet compact 10/100 Mb/s) do CT-E601, CT-E651, CT-E651L, CT-S751, CT-S4500; 210,67 zł, dostępna (API 23.10.2026: 2 szt. + 2 w dostawie) | Dokument Citizen str. 4 („IF2-EFX3 PN#: PPS00591S”, złącze IF2: CT-E6x1, CT-S751, CT-S4500) |
| Nowa karta 2000462 (uchwyt pod ladę) do CT-S751; 142,19 zł, niedostępna | ERS („Under Counter Mounting Bracket for CT-S751”), Levata |
| PPS00585S zgodna z CT-S601IIR | Jarltech: „fits for: … CT-S601II …” |
| TZ66802-0: `shortDescription` z CL-S400DT, CT-S851III i CT-S601IIR | jak wcześniej (ERS, Jarltech) |
| PWT20035-0: wejście 100–240 V, 50/60 Hz, wyjście 24 V DC, 2,5 A | Instrukcja CT-S4500, rozdz. 1.4 |
| Akcesoria bez trybu rozkazującego („Przewód podłącza się przy wyłączonej drukarce. Do drukarki podłącza się jednocześnie tylko jeden interfejs.”) | Instrukcje rozdz. 3.6 („Do not connect multiple interfaces at the same time”) |

### Drukarki

| Karta | Zmiana | Źródło |
|---|---|---|
| CT-E651L | Papier 59–80 mm, 53–85 µm; etykiety na podkładzie 57,5/79,5 mm, 65–85 µm, podkład do 60 µm, gilza 25,4 mm (zewn. 32 mm); etykieta 25–300 mm, przerwa 4–30 mm; cięcie w przerwie, odcinek min. 29 mm; regulowany czujnik bliskiego końca; FAQ o wersji z wolnym gniazdem karty | Instrukcja CT-E651, rozdz. 1.4, 3.9, 5.2 |
| CT-E651 | Wolne gniazdo karty tylko w XNEBX/XNEWX (atrybut „Gniazdo karty” i dymek); w wersjach Bluetooth i Lightning gniazdo zajmuje moduł fabryczny; regulowany czujnik bliskiego końca; IPX1; „w handlu, gastronomii i hotelarstwie”, „pod komputerem POS typu all-in-one albo obok szuflady” | Instrukcja CT-E651, rozdz. 1.1, 1.3 („interface board”), 3.9; karta katalogowa |
| CT-S751 | Jak wyżej (atrybut „Gniazdo karty” dla XN); Bluetooth z certyfikatem Apple MFi (iPad, iPhone, Windows, macOS, Android) zamiast „do urządzeń z iOS”; regulowany czujnik bliskiego końca; IPX1; uchwyt 2000462 | Instrukcja CT-S751, rozdz. 1.1, 1.3, 3.11; dokument Citizen str. 2 (Bluetooth: Windows, macOS, iOS, Android) |
| CT-S4500 | Gniazdo karty w wersjach XN, Bluetooth zajmuje gniazdo; etykiety szer. 54–108 mm (podkład 58–112 mm), dł. 25–300 mm, przerwa 4–30 mm; regulowany czujnik bliskiego końca | Instrukcja CT-S4500, rozdz. 1.3, 3.10, 5 (Label media) |
| CT-S601IIR | Blok wymaganych elementów: karta interfejsu (TZ66803-0) i przewód; alternatywy TZ66801-0, TZ66802-0, PPZ60108S, PPS00585S; jedna karta. Gilza 25,4 mm / zewn. min. 29,5 mm, materiał 65–90 µm. Re-stick: „oznaczenia tymczasowe”, bez twierdzenia o ponownym przyklejaniu. Z opcji kart usunięto Wi-Fi premium i Powered USB (wersja S ma zasilacz wbudowany) | Instrukcja CT-S601II, rozdz. 1.4, 3.7 (Powered USB: przed podłączeniem odłączyć zasilacz AC), Jarltech (PPS00585S) |
| CT-S851III | Zawartość zestawu: drukarka, przewód zasilający, rolka papieru, skrócona instrukcja; przewód USB i karty osobno | Instrukcja rozdz. 1.2, Jarltech („incl.: … receipt roll, QSG, order separately: interface”) |
| CT-S310II | FAQ: zestaw do montażu na ścianie w komplecie, montaż wykonuje serwisant, praca pionowo na gumowych nóżkach z zestawu | Instrukcja CT-S310II, rozdz. 1.2 i 3.5 |
| CT-E301, CT-E351, CT-E601, CT-E651 | Szerokość papieru „80 lub 58 mm” z zakresem z karty; papier 58 mm wymaga przekładki | Karty katalogowe, instrukcje (1.1, rozdz. o przekładce 58 mm) |
| CT-E301, CT-E601 | ENERGY STAR w „Normy” | Instrukcje, rozdz. 1.1 |
| CT-E351, CT-E651, CT-S751 | „Obudowa odporna na krople wody spadające pionowo (IPX1)” | Instrukcje, rozdz. 1.1 |
| CT-E601, CT-E651, CT-E651L, CT-S751, CT-S4500 | Specyfikacja „Karty interfejsu” bez kart Premium; PPS00591S w FAQ o sieci | — |
| Wszystkie | Trwałość głowicy i gilotyny bez zmian: karty katalogowe podają wartość szablonową, instrukcje inne (tylko CT-S601IIR zgodna) | Karty katalogowe, instrukcje rozdz. 1.4 |

Tabela porównawcza w `pos-category-content.ts`: CT-E651L „paragony 59–80 mm, etykiety na podkładzie 57,5 lub 79,5 mm”.

### Zdjęcia

- CT-S310II: zdjęcie główne czarne (PN domyślny CTS310IIEBK); zamienione pliki `CTS310IIEBK.png` ↔ `-2.png` i ich wpisy w trzech mapach.
- CT-E651L: usunięte białe `CTE651XNEBXL-2.png` (oferta ma tylko wersję czarną); `-3` → `-2`, `-4` → `-3` w plikach i mapach.
- CT-E351 `-6`: oryginał `CT-E651/white/Citizen_CT-E651_White_POS.jpg` (4433 × 3838, ta sama obudowa) zamiast miniatury 750 px; plik identyczny z `CTE651XNEBX-6.png` (ta sama obróbka), wpisy map skopiowane.
- Opisy: CT-S751 `-5` (opcjonalna karta Ethernet z portami USB host), CT-S4500 `-3` (opcjonalna karta Ethernet).

### Do decyzji

- IPX1 dla CT-E651L: instrukcja CT-E651 jest wspólna dla CT-E651L, ale brief wymienił tylko CT-E351, CT-E651 i CT-S751 — nie dopisano.
- CT-S310II: instrukcja wymienia w zestawie także rolkę papieru i przegrodę 58 mm; „Zawartość zestawu” bez rolki (bez zmian).
