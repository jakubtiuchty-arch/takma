# Honeywell PC45d (`honeywell-pc45d`) — przepisanie karty, 25.10.2026

Polecenie właściciela: „Przepisz” (karta miała ceny w FAQ i SEO oraz porównania z drukarkami Zebra). Karta przepisana wyłącznie według dokumentów Honeywell. Dokument roboczy — nie dla klienta.

## Źródła

| Dokument | Plik / URL | Wersja | Użycie |
|---|---|---|---|
| Karta katalogowa PC45 (Retail) | `public/downloads/honeywell/honeywell-pc45-karta-katalogowa-en.pdf` (kopia `pc45-direct-thermal-and-thermal-transfer-desktop-printer-datasheet-en.pdf` z honeywell.com, 562 740 B) | Rev F 05/26 | Główne źródło (rozstrzyga). Wersja Rev E 04/26 różni się tylko przypisami WWAN i dodaniem SOTI Connect / OpIntel w Rev F. |
| Przewodnik akcesoriów PC45 | `public/downloads/honeywell/honeywell-pc45-akcesoria-en.pdf` (identyczny z `hon-ia-pss-pc45-desktop-printer-accessories-guide.pdf`, md5 1d42c2fc…) | Rev B 04/26 | Akcesoria, zestaw Wi-Fi/BT, zgodność głowic. |
| Instrukcja obsługi PC45d/PC45t | `public/instrukcje/honeywell-pc45-ug-en.pdf` | PC45-EN-UG-01 Rev B 07/23 | Szerokość materiału 15–118 mm, min. długość etykiety z obcinarką/odklejakiem, ekran (rękawica, rysik), ZSim, tryb uśpienia i gwarancja ekranu, akcesoria montowane przez użytkownika. |
| Instrukcja akcesoriów PC45 | `sps-ppr-pc45-acc-en-ug.pdf` (honeywell.com; nie dodana do repo, 10 MB) | PC45-ACC-EN-UG Rev C 03/26 | Montaż modułu Wi-Fi/BT (śrubokręt krzyżakowy, gniazdo od spodu, naklejka NFC), sprężyna do linerless, montaż na ścianie. |
| Skrócona instrukcja PL | `public/instrukcje/honeywell-pc45-qs-pl.pdf` | PC45-PL-QS-01 Rev A 09/23 | Zawartość opakowania; przewód zasilający zależny od SKU. |
| Arkusz regulacyjny | `sps-ppr-pc45-ml-rs.pdf` | PC45-ML-RS-03 Rev A | Modele PC45d/PC45t, FCC klasa B — bez nowych treści na karcie. |
| Strona produktu PC45D (GB) | `pc45d-std-page-gb.html` (automation.honeywell.com, pobrana 25.10.2026) | — | Opisy PN, branże, zastosowania (Packaging Label, Receipt, Wristband). |
| Dystrybutorzy (tylko PC45D200000200) | ers-online.co.uk/PC45D200000200; quad.de/en/pc45d200000200/1052n | 25.10.2026 | Konfiguracja wersji linerless (PN nieobecny na stronie Honeywell). |

## PN → konfiguracja → źródło → API (25.10.2026, drugie wywołanie)

| PN | Konfiguracja | Źródło | API: found / dostępność |
|---|---|---|---|
| PC45D000000200 | LCD, Ethernet (+ USB std.), 203 dpi, bez przewodu zasilającego („NO PC”) | Strona Honeywell: „SKU,LCD,ETH,203DPI, NO PC” | true / on-order (tylko w dostawie, 0 na stanie) |
| PC45D020000200 | LCD, Ethernet + Bluetooth + WLAN, 203 dpi, NO PC | Strona Honeywell: „SKU,LCD,E+BT+WL,203DPI,NO PC” | true / available |
| PC45D00EU00200 | LCD, RFID, Ethernet, 203 dpi, NO PC | Strona Honeywell: „SKU,LCD,RFID,ETH,203DPI, NO PC” | true / available (1 szt.) — **nowy wariant na karcie** |
| PC45D200000200 | Linerless, DT, 203 dpi, Ethernet + USB, LCD | ERS: „DT - 203 DPI - USB / LAN Only - Linerless”; QUAD: „direct thermal - linerless - Ethernet + USB - 203 dpi - LCD - RTC” (2 zgodne źródła) | true / unavailable |
| PC45D030000300 | Ethernet + port szeregowy, 300 dpi, NO PC | Strona Honeywell: „PC45D, ETH + SERIAL,300 DPI, NO PC” | true / unavailable — **nowy wariant na karcie** |

Pominięte (found: false w API, wersje z amerykańskim przewodem „US PC”): PC45D000000201, PC45D010000201, PC45D00NA00201, PC45D04NA00201. Wersje PC45D1… to Healthcare (karta `honeywell-pc45d-hc`).

`priceFrom` = cena z API (wartość startowa; kartę aktualizuje API). Logiki cen nie zmieniano.

## Co usunięto i dlaczego

- Ceny: FAQ „Ile kosztuje…”, ceny w FAQ o alternatywach i porównaniach, „od 1 518 zł netto” w seoDescription, wiersz „Cena od” w tabeli porównania — ceny nie należą do treści i SEO.
- Porównania z konkurencją (FAQ „PC45d czy Zebra ZD421d/ZD621d”, „PC45d wygrywa”, „Wi-Fi 6 vs Wi-Fi 5”, „+33%”, akapit opisu z ZD421d/ZD621d, „Żadna inna drukarka… nie oferuje ekranu dotykowego”, „jedyna drukarka biurkowa…”) — porównania z konkurencją nie należą do opisu ani FAQ; superlatywy bez pokrycia.
- „Następca PC42d/PC43d” i „seria E-Class Mark III” — karta mówi tylko, że PC45 rozwija konstrukcję E-class i PC43; PC42d nie występuje w dokumentach.
- Procesor 792 MHz, „NFC — tag pasywny — opcja” jako parametr, listy kodów 1D/2D — brak w karcie katalogowej (symbologie Honeywell odsyła do osobnej strony). NFC opisane tylko jako część zestawu 205-190-012.
- „Długość etykiety max 127 mm (na szpuli)” — błąd (127 mm to średnica rolki); wpisano 1727/900 mm.
- „Szerokość mediów 19–118 mm” — brak źródła; instrukcja podaje 15–118 mm.
- „Zalecane etykiety… Zebra Z-Select 2000D, Honeywell Duratherm II”, „o 40% więcej etykiet na rolce”, zastosowania „Allegro, Amazon, InPost”, „Specyfikacja techniczna zgodna z danymi producenta” (notatka o źródle) — spoza dokumentów.
- `relatedAccessories`: usunięte Labelmate CAT-3 i LD-115 (brak w przewodniku PC45 Rev B 04/26). Zostały: głowice 225-783-001 i 225-784-001, wałek 205-187-002, odklejak 205-187-001, obcinarka 205-187-006.
- `relatedProducts`: usunięta `honeywell-pd45` (drukarka przemysłowa, inna klasa); dodane `honeywell-pc45d-hc`, `citizen-cl-e300`, `brother-td-4d` (biurkowe 4" termiczne).
- Tabela porównania PC42E-T / PC45d / PC45t z cenami i „Najlepszy do” zastąpiona porównaniem PC45d / PC45d Healthcare / PC45t z danymi z dokumentów PC45 (PC42E-T nie miał karty katalogowej w źródłach).
- Download: link do prod-edam.honeywell.com zastąpiony lokalnymi PDF (karta katalogowa Rev F dodana do repo; instrukcje i przewodnik już były).
- Opisy zdjęć: zdjęcie 2 to widok z przodu (było „z boku, porty USB i Ethernet”), zdjęcie 3 to lewy bok z zatrzaskiem i włącznikiem.

## Karty głowic 225-783-001 / 225-784-001

Karty podawały zgodność z PC43d, PC43t i PD43. Przewodnik akcesoriów PC45 Rev B 04/26 wymienia obie głowice tylko dla PC45d, PC45d Healthcare i PC45t; brak dokumentu Honeywell potwierdzającego PC43/PD43. Poprawiono shortDescription, zdanie o zgodności w opisie i parametr „Kompatybilność” (głowica 300 dpi zyskała też PC45d Healthcare). Bez zmian, ale niepotwierdzone w dokumentach: „wymiana zalecana po 50–150 km druku”, „Montaż narzędziowy w kilka minut”.

## Rozbieżności w dokumentach Honeywell

- Łączność: karta katalogowa Rev F i przewodnik akcesoriów — Wi-Fi 6 i Bluetooth 5.2; strona produktu PC45D — „Wi-Fi 5 and Bluetooth 5.1 LE”. Przyjęto kartę katalogową i przewodnik (nowsze, zgodne ze sobą).
- Grubość materiału: karta katalogowa 0,05–0,16 mm; instrukcja (07/23) 0,06–0,2 mm. Przyjęto kartę katalogową.
- Języki: karta katalogowa — FP, DP, IPL, ZSim2 (ZPL-II), DPL, XML (SAP AII, Oracle WMS), PDF, C#; instrukcja dodatkowo ESim (EPL). Na karcie dokładna lista z karty katalogowej.
- Temperatura przechowywania: karta retail −20–70°C; karta Healthcare (na karcie HC) −20–60°C.
- Modem komórkowy: w opcjach z przypisem „US WWAN certified”; na karcie z dopiskiem „certyfikat dla USA”.
- Przewód zasilający dla PC45D200000200: brak opisu Honeywell; ERS sprzedaje przewody osobno. Karta podaje brak przewodu dla wszystkich wersji w ofercie.

## Samokontrola (zdanie po zdaniu, EN rozstrzyga)

- Opis (159 słów, 4 akapity): szerokość 4", druk termiczny bez taśmy — DS; rozwija E-class i PC43 — DS; branże — strona (Industry); materiały (opakowania, paragony, przywieszki, opaski) — DS „Media Types” + strona „Application”; ekran duży/rękawica/rysik — DS „large touch screen” + UG „gloved hand, or a stylus”; Smart Parse — DS; ZSim2 bez zmian po stronie hosta — UG (ZSim); Printer Edge — DS; OpIntel — DS; konfiguracje — strona Honeywell + ERS/QUAD; akcesoria montowane przez użytkownika — UG App. C. Brak SPRZECZNYCH.
- Specyfikacja: każdy wiersz z DS Rev F, poza: szerokość materiału 15 mm i min. długości z obcinarką/odklejakiem (UG), montaż na ścianie (ACC UG), zawartość opakowania (QS PL), przewód zasilający (opisy PN „NO PC”).
- FAQ (8 pytań): PC45d vs PC45t — DS (wymiary, waga), UG/przewodnik (obcinarka linerless tylko PC45d); języki — DS; materiały — DS + UG; Wi-Fi/BT — przewodnik + ACC UG + DS (WPA3, 802.11r); Healthcare — przewodnik (PN), karta HC; akcesoria — przewodnik; zestaw — QS PL + DS (zasilacz); gwarancja — DS + UG (tryb uśpienia).
- Dymki wariantów: DS (dpi, prędkości, szerokości, WLAN, RFID EPC Gen 2, RS-232 115,2 kb/s), przewodnik (obcinarka linerless).
- Unikalność: `porownaj-opisy.py` (products.ts + honeywell-citizen-hc-products.ts, prefiks `honeywell-`, pola description, shortDescription, seoDescription, faq) — 0 wspólnych 6-gramów karty `honeywell-pc45d` z innymi kartami (w tym `honeywell-pc45d-hc`, `honeywell-pc45t`, `honeywell-pc42e-t`).

## Poza zakresem (do decyzji)

- Karta `honeywell-pc45t` ma te same problemy: cena w seoTitle i seoDescription, FAQ „Ile kosztuje…”, FAQ „PC45t czy Zebra ZD421t/ZD621t” („wygrywa”), alternatywy z cenami, tabela porównania z „Cena od” i „Najlepszy do”, linki do prod-edam.honeywell.com w downloads. Nie zmieniano.
- Tabele porównania w kartach `honeywell-pc45t` i `honeywell-pc42e-t` nadal podają „Cena od 1 518 zł” dla PC45d.
- Brak kart akcesoriów: wałek linerless 205-187-003, obcinarka linerless 205-187-004, tacka 205-190-007, zestaw Wi-Fi/BT 205-190-012, uchwyt rolki 205-190-005 i inne z przewodnika.
- Karta obcinarki 205-187-006 opisuje cięcie „etykiet bez podkładu” — przewodnik przewiduje do linerless osobną obcinarkę 205-187-004; tacka 205-190-007 sprzedawana osobno.
- Zdjęcia `pc45d_1..3.png` (1200 × 1200, nazwy nie według PN) — bez zmian.
