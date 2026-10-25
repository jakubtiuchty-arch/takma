# Weryfikacja V4 — oprogramowanie na produkcji (25.10.2026)

Kontrola po wdrożeniu 8eb1bcfe na https://www.takma.com.pl: 8 kart (BarTender Starter, Professional, Automation,
Enterprise, Cloud; Loftware Cloud Designer, Essentials, Business), `/oprogramowanie`, `/programy-do-etykiet`,
`/programy-do-kart`, `zebra-cardstudio`. Sprawdzany był tekst widoczny dla klienta (Playwright, `wait_until='load'` + 3 s),
a nie same pliki. Treść porównana zdanie po zdaniu z dokumentami producentów (stan z 25.10.2026):

- BarTender: Pricing z macierzą funkcji i przypisami `/modals/*`, Technical Specifications, strona Cloud, What's New in
  BarTender 12, Consolidated EULA (7.2, 7.3, 7.5), EU Data Act Transparency Statement, PDF-y Printer-Based Licensing (02.2025),
  Activation FAQ, Getting Started with BarTender Cloud, Print Portal, System Security, Intelligent Templates, Integration Builder,
  Librarian, Drivers by Seagull, What's New 12.0/12.1; strona sterowników (lista marek), artykuł 26784459646231 (Redemption Code → PKC).
- Loftware: pomoc Loftware Cloud 25.9 (About Cloud Designer, How Licensing Works, System Requirements, Product Range),
  arkusz „Edition comparison sheet” (04.2025, ten sam plik co `/downloads/loftware/…`), drivers.loftware.com.
- Zawartość SKU: dystrybutorzy (channelonline, barcodefactory, omegabrand, rfid.it) — tylko co zawiera PN.
- Ceny: publiczne `/api/stock` produkcji, 2 wywołania po 45 PN (identyczne), bez cen zakupu.

Wynik: 7 rozbieżności treści i 2 usterki wyglądu/danych poprawione w repo (lista niżej). Zachowanie cen, koszyka i kasy — zgodne
z decyzjami właściciela.

## Karty — treść (element | na stronie | dokument | ocena)

### BarTender Starter
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Nazwa, H1, SEO | BarTender Starter, licencja Workstation, PN na końcu seoDescription | Pricing: Starter „Available as Workstation” | zgodne |
| Opis ak. 1 | 1 użytkownik, 1 komputer, drukarki bez limitu, lokalne i LAN/WAN | Tech. Spec.: Workstation „single user from a single PC”, „unlimited number of printers”, LAN/WAN | zgodne |
| Opis ak. 2, spec. „Projektowanie”, „Druk” | 400+ szablonów, kreatory, 100+ symbologii, 70+ formatów grafiki, tabele, druk dwustronny, pełny kolor, eksport 35+ formatów | Macierz on-premises (wszystkie X dla Starter) | zgodne |
| Opis ak. 3, spec. „Źródła danych”, „Nie obejmuje” | Excel i CSV, prosta numeracja, data i godzina, filtr rekordów; bez Intelligent Templates, RFID, formularzy, SQL | Macierz: Basic database connectivity, Simple serialization, Print-time filters (●+ „only for basic databases”), pozostałe „–” | zgodne |
| Opis ak. 4, spec. „Wsparcie” | 1/3/5 lat, Standard Maintenance & Support w cenie | Pricing FAQ: plany 1/3/5 lat; Standard M&S „included for at least one year” | zgodne |
| Wymagania (wspólne BT) | Windows 10/11, Server 2016–2025, 64-bit, 8 GB RAM, 20 GB, 1024×768 / 1920×1080, .NET 4.8, 21 języków z polskim | Technical Specifications | zgodne |
| Warianty, atrybut „Okres”, dymek | BTS-WS-SUB-1YR/3YR/5YR; 1 rok / 3 lata / 5 lat | SKU u 2 dystrybutorów; dymek bez długości wsparcia dla 3/5 lat | zgodne |
| Nazwy wariantów (koszyk, kasa, Merchant, JSON-LD) | „BarTender Starter — BarTender Starter — Workstation, subskrypcja 1 rok” | — | **niezgodne (powtórzona nazwa)** → V4-1 |
| FAQ (6) | Workstation; różnice z Professional; Redemption Code → Customer Portal → PKC; odnowienie 12 mies./90 dni, EOG 60 dni z opłatą do końca okresu; 12 000+ sterowników i marki; 30-dniowa wersja próbna | Tech. Spec., macierz, art. 26784459646231, EULA 7.2–7.3, Data Act Statement, strona sterowników, Pricing („30-Day Trial … all features”) | zgodne |
| Zdjęcia (alt) | Biblioteka szablonów, filtr branż (Automotive, Education, Life Sciences, Manufacturing); grafika „What's New in BarTender 12” | Obraz producenta | zgodne |
| Pliki | Nowości 12.1 (630 KB), Drivers by Seagull (254 KB), Aktywacja (258 KB) | 200, rozmiar i suma MD5 = PDF producenta | zgodne |

### BarTender Professional
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1, spec. „Model licencji”, „Użytkownicy”, „Drukarki” | Workstation albo licencja na 2/5/10 drukarek, użytkownicy bez limitu | Tech. Spec. (Application + Printer License, unlimited users), macierz „Single user or Unlimited” | zgodne |
| Opis ak. 2, spec. „Szablony” | Intelligent Templates: warstwy, selektor, konsolidacja; twarze; skrypty obiektów | Macierz | zgodne |
| Opis ak. 3, spec. „Źródła danych”, „Numeracja”, „Formularze” | 20+ źródeł, zapis do SQL, numeracja alfanum./hex/wzorzec, formularze ze skanerem i wagą | Macierz | zgodne |
| Opis ak. 3 — druk zdalny | „także bez sterownika na urządzeniu użytkownika” | Print Portal: „driverless printing” = bez sterownika drukarki **na serwerze** Print Portal | **niezgodne** → V4-2 |
| Opis ak. 4, spec. „Bezpieczeństwo” | Uprawnienia użytkowników i grup, hasła | Macierz „Role-based security”, „Password protection”; System Security | zgodne |
| Spec. „Okres subskrypcji” | „Workstation: 1, 3 lub 5 lat; licencja na drukarki: 1 rok lub 3 lata” jako cecha produktu | Pricing FAQ: wszystkie licencje 1/3/5 lat | **niezgodne (precyzja)** → V4-3 |
| Spec. „Baza systemowa” | SQL Server 2012+ dla System Database i History Explorer, SQL 2025 Express w pakiecie | Tech. Spec. „Database” | zgodne |
| Warianty i dodatki | 11 PN, BTP-PRT-* jako „Dodatkowa drukarka / +1”; nazwy z powtórzoną nazwą produktu | SKU u 2 dystrybutorów | zgodne; nazwy → V4-1 |
| Dymki | Licencja, Drukarki (7 dni), Okres | Printer-Based Licensing (7 dni, BLS) | zgodne |
| FAQ (7) | Workstation vs drukarki; liczenie drukarek (7 dni, 30 dni bez gwarancji); dokupienie drukarki; Intelligent Templates; dane do zamówienia; odnowienie; SQL Server | Printer-Based Licensing, macierz, EULA, Data Act, Tech. Spec. | zgodne |
| Zdjęcia, pliki | Druk zdalny na smartfonie; Intelligent Templates 764 KB, Print Portal 744 KB, licencja na drukarki 424 KB, aktywacja 258 KB | Obraz producenta; PDF-y = producent | zgodne |

### BarTender Automation
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1–2, spec. „Integracje”, „Dla programistów” | 2/5/10/20 drukarek, użytkownicy bez limitu; File Drop, e-mail, TCP/IP, REST API, monitorowanie bazy, 70+ akcji, .NET SDK, REST API | Macierz, Integration Builder | zgodne |
| Opis ak. 3, spec. „Formularze”, „Druk” | Funkcje Professional; szablony w języku drukarki; reprint 7 dni; Intelligent Forms w subskrypcji, przeciągnij i upuść | Macierz (●+ „7 days”, „subscription users”), What's New 12 („drag-and-drop”) | zgodne |
| Opis ak. 4, spec. „Okres subskrypcji”, seoDescription | „Subskrypcja trwa 1 rok albo 3 lata” | Pricing FAQ: 1/3/5 lat | **niezgodne (precyzja)** → V4-3 |
| Spec. „Baza systemowa” | System Database, History Explorer, Reprint Console | Tech. Spec. | zgodne |
| Warianty, dymki | 8 PN, BTA-PRT-* „+1”; nazwy z powtórzoną nazwą produktu | SKU u 2 dystrybutorów | zgodne; nazwy → V4-1 |
| FAQ (6) | ERP/WMS przez File Drop i inne wyzwalacze; różnice z Professional; Intelligent Forms; +1 drukarka i 7 dni; aktywacja z BLS; odnowienie | Macierz, Integration Builder, Printer-Based Licensing, EULA, Data Act | zgodne |
| Zdjęcia, pliki | Intelligent Form Builder; File Drop z plikami ORDER_*.csv i drukarkami Zebra 450H Max; Integration Builder 449 KB, Nowości 12.0 648 KB, licencja na drukarki | Obraz producenta (powiększony); PDF-y = producent | zgodne |

### BarTender Enterprise (na zapytanie)
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1, spec. | 3/5/10/20 drukarek, użytkownicy bez limitu, 1 rok, inne okresy na zapytanie | SKU BTE-*, macierz „Unlimited” | zgodne |
| Opis ak. 2, spec. „Zarządzanie dokumentami”, „Audyt” | Librarian z wersjami, Workflow Designer, uprawnienia według ról, dziennik audytu bez limitu, podpisy elektroniczne (dane logowania), szyfrowanie | Macierz, Pricing („unlimited logging”), System Security („submit their logon credentials”), Librarian | zgodne |
| Opis ak. 3, spec. „Ciągłość”, „Integracje”, „Dane”, „Chmura” | Printer failover, zapasowy serwer licencji, synchronizacja z Cloud, Print Portal REST API, zaawansowane pola globalne, Phrase Library | Macierz | zgodne |
| FAQ (5) | Brak ceny u producenta; Librarian; różnice z Automation; 72 h bez BLS; dane do zamówienia | Pricing („Contact sales for a quote”), Librarian, macierz, Printer-Based Licensing (72-hour grace) | zgodne |
| Zdjęcia, pliki | Workflow Designer „Default Approval Flow”; pracownik z laptopem i przepływem zatwierdzania; Librarian 520 KB, System Security 502 KB, licencja na drukarki | Obraz producenta; PDF-y = producent | zgodne |
| Nazwy wariantów | „BarTender Enterprise — BarTender Enterprise — …” w zapytaniu o wycenę | — | → V4-1 |

### BarTender Cloud
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1 | SaaS w przeglądarce, Print Gateway przy pierwszym druku, w sklepie plany roczne, użytkownicy bez limitu | Strona Cloud, Getting Started („first time you … print … install the Print Gateway”), macierz „Unlimited users” | zgodne |
| Opis ak. 2–3, spec. | Essentials: Cloud Designer, Intelligent Templates, RFID, PDF, formularze, historia zmian, role, 2 GB; Automation: REST API, File Drop, Workflow Designer, Cloud Spaces, formularze w przeglądarce, druk z chmury na Zebra i TSC, 5 GB | Macierz Cloud, strona Cloud, What's New 12 („Zebra and TSC printers … no drivers”), wiadomość 12.4 (TSC) | zgodne |
| Opis ak. 4, spec. SSO, wsparcie | Enterprise: konektory ERP, SSO, na zapytanie; 99,99%, SOC Type 2, ISO 27001; Essential / Standard / Premium | Macierz (SSO tylko Enterprise; strona Cloud wymienia SSO też przy Automation — sprzeczność u producenta, karta trzyma się macierzy), strona Cloud | zgodne |
| Spec. „Dane” | Bazy w chmurze i pliki lokalne, Excel/CSV/TXT, tabele, zaawansowana numeracja | Pricing („Connect to cloud databases and local files”), macierz | zgodne |
| Warianty, dymki | 9 PN; Enterprise i +1 Enterprise na zapytanie; nazwy „BarTender Cloud — BarTender Cloud Essentials — …” | SKU BTC-* | zgodne; nazwy → V4-1 |
| FAQ (7) | Wybór planu; Print Gateway i druk bez sterownika; chmura vs lokalnie (okresowe łączenie z serwerem aktywacji); drukarki i dostawcy jako użytkownicy; dane do zamówienia; odnowienie; wersja próbna (formularz u producenta) | Strona Cloud („external suppliers”, „Request a trial”), Activation FAQ, EULA, Data Act | zgodne |
| Zdjęcia, pliki | Strona startowa (30 dni), kreator ze źródłami Azure SQL/Excel/Google Sheets/SAP HANA, etykieta logistyczna; Getting Started 731 KB, Nowości 12.1 | Obrazy producenta; PDF-y = producent | zgodne |

### Loftware Cloud Designer
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1–2 | MŚP; Control Center; Web Designer i Desktop Designer, ten sam plik; Loftware Print; druk zdalny przez komputer z Desktop Designer | About Cloud Designer, Product Range („open the same label”) | zgodne |
| Opis ak. 3, spec. „Drukarki”, „Komputery” | Miejsca drukarek, PDF/XPS zajmują miejsce, komputery bez limitu w domenie, jeden klucz, 1 + rozszerzenia do 10 | How Licensing Works, About Cloud Designer („up to ten”), SKU | zgodne |
| Opis ak. 4, spec. | 1 GB, 1 środowisko, źródła danych, logowanie Microsoft/Google, zaproszenie e-mailem; Automation tylko jako wersja próbna; wsparcie Basic e-mail | Arkusz porównania, System Requirements („Microsoft or Google account”), About Cloud Designer | zgodne |
| Spec. system i sprzęt | Windows 11, Server 2016–2025 bez Core/Nano, x86, 8/16 GB RAM, 20/40 GB SSD, 1366×768, .NET 4.7.2, sterowniki v5 | System Requirements | zgodne |
| FAQ (8) | Różnice z Essentials („druk z przeglądarki przez Loftware Web Client”) | Product Range: formularze w Loftware Print albo „Loftware Web Client **thin client**”; System Requirements: Web Client to aplikacja Windows | **niezgodne** → V4-4 |
| Pozostałe FAQ | Liczenie drukarek, licencja e-mailem, porty 443 i 8080 + loftware.io, wymagania, 4500+ sterowników i marki, Automation, alternatywy | How Licensing Works, System Requirements, drivers.loftware.com | zgodne |
| Zdjęcie, pliki | Web Designer z etykietą Data Matrix; porównanie edycji 84 KB (= arkusz producenta), sterowniki (strona producenta) | Obraz producenta | zgodne |

### Loftware Cloud Essentials
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1, spec. „Drukarki” | Roczna subskrypcja, NSCEBS001M do 2 drukarek, NSCEAO001M do 20 | Arkusz (2–20), SKU u 2 dystrybutorów | zgodne |
| shortDescription, opis ak. 2, spec. „Formularze”, „Druk przez przeglądarkę”, zastosowanie, FAQ (3 odpowiedzi) | Formularze „w przeglądarce, przez Loftware Web Client”; „Druk etykiet z przeglądarki bez instalacji programu” | Product Range: „Loftware Web Client thin client”; System Requirements: Web Client wymaga Windows 11 / Server i .NET | **niezgodne** → V4-4 |
| Opis ak. 3–4, spec. | Integracja jednokierunkowa; jeden domyślny proces zatwierdzania; role; 1 GB; historia 3 mies.; opcje SQL 1 GB i historia 1 rok; wsparcie Basic (Standard), e-mail i telefon | Arkusz porównania (str. 1–2), Product Range | zgodne |
| Warianty, dymki | 4 PN; NSCEAO/NSCEDB/NSCEPH jako dodatki; NSCEDB001M bez okresu | SKU; okres NSCEDB001M sprzeczny u dystrybutorów (karta go nie podaje) | zgodne; nazwy → V4-1 |
| Pozostałe FAQ | Liczba drukarek; opcje; aktywacja; alternatywy | Arkusz, System Requirements | zgodne |

### Loftware Cloud Business (na zapytanie)
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| Opis ak. 1 | Small do 3 + NSCBSA001M, Large do 50 | SKU u 2 dystrybutorów; arkusz „3+ printers” | zgodne |
| Opis ak. 2–3, spec. | Drukarki chmurowe bez sterownika, zarządzanie drukarkami, analityka, Cloud API, integracje chmura/lokalne, synchronizacja; Change and Transport, dodatkowe środowiska, AD/OpenID Connect; 5 GB, Cloud SQL 5 GB, historia 1 rok; opcje (SAP, Oracle, hybryda, Cloud Automation Service, API, sandbox, Platinum, Academy) | Arkusz porównania, Product Range | zgodne |
| FAQ (7) | Wycena; Small/Large; drukarki chmurowe (porty 443 i 1434); opcje; Compliance i Enterprise; uruchomienie konta; alternatywy | System Requirements („Port number for Cloud printers”), Product Range, arkusz | zgodne |
| Zdjęcia, pliki | Grafika Loftware (serwerownia), Web Designer; porównanie edycji, sterowniki | Obrazy producenta | zgodne |

### Strony kategorii i CardStudio
| Element | Na stronie | Dokument | Ocena |
|---|---|---|---|
| `/programy-do-etykiet` — definicja, tabela porównawcza (8 wierszy), poradnik, część techniczna, zastosowania, FAQ | Edycje, systemy, 1/3/5 lat, Loftware SaaS, formularze, integracje, kontrola zmian, 12 000+ i 4500+ sterowników, dostarczenie licencji | Macierz BarTender, Tech. Spec., Pricing FAQ, Product Range, arkusz, System Requirements | zgodne |
| `/programy-do-etykiet` — filtry | Producent 5/3; Windows 7 (bez BarTender Cloud), Przeglądarka 4; Na stanowisko 2 (Starter, Professional), Na liczbę drukarek 7 | Tech. Spec. (Workstation tylko Starter/Professional), Product Range (Desktop Designer) | zgodne |
| `/oprogramowanie`, `/programy-do-kart` | 10 i 2 kafle, opisy kategorii | Karty | zgodne |
| `zebra-cardstudio` | Licencja e-mailem, 4 PN z ceną, dostawa 0 zł | `/api/stock` (2 wywołania) | zgodne (uwaga O-3) |
| Twierdzenia o partnerstwie, ceny w treści i SEO, „Ty”, superlatywy, notatki o źródłach | brak na 11 stronach (tekst widoczny) | Decyzje właściciela, AGENTS.md | zgodne |

## Poprawki w repo (gałąź `weryfikacja/oprogramowanie-v4`)

| ID | Plik | Było | Jest | Uzasadnienie |
|---|---|---|---|---|
| V4-1 | `bartender-products.ts`, `loftware-products.ts` — nazwy 45 wariantów | „BarTender Starter — Workstation, subskrypcja 1 rok”; „Loftware Cloud Business Small — subskrypcja, do 3 drukarek” | „Workstation, subskrypcja 1 rok”; „plan Essentials, 1 drukarka, 1 rok”; „wersja Small, subskrypcja do 3 drukarek” | Kod łączy `${produkt} — ${wariant}` (koszyk, kasa, zamówienie, zapytanie o wycenę, JSON-LD `Offer.name`, Merchant i Ceneo). Na produkcji: „BarTender Starter — BarTender Starter — Workstation…” w szufladzie i kasie oraz 36 tytułów w feedzie Merchant. Konwencja katalogu: nazwa wariantu bez nazwy produktu. „dodatkowa drukarka” zostaje w nazwie — `czyDodatekLicencji` rozpoznaje te same 11 dodatków co przed zmianą |
| V4-2 | Professional — opis, spec. „Druk i kodowanie” | „bez sterownika na urządzeniu użytkownika”; „druk zdalny bez sterownika” | „bez sterownika drukarki na serwerze” | Print Portal: driverless printing — serwer nie potrzebuje sterownika drukarki podłączonej do urządzenia klienta |
| V4-3 | Automation — opis, spec. „Okres subskrypcji”; Professional — spec. „Okres subskrypcji” | „Subskrypcja trwa 1 rok albo 3 lata”; „1 rok lub 3 lata” | „W sklepie dostępne są subskrypcje na 1 rok albo 3 lata…”; „W sklepie: …” | Producent: wszystkie licencje w planach 1, 3 i 5 lat (jak S11 dla Cloud) |
| V4-4 | Essentials — shortDescription, opis, spec. „Formularze” i „Druk sieciowy”, zastosowanie, 3 odpowiedzi FAQ; Designer — FAQ | Formularze i druk „w przeglądarce, przez Loftware Web Client”; „Druk etykiet z przeglądarki bez instalacji programu” | „w cienkim kliencie Loftware Web Client”; „Druk z formularzy bez programu do projektowania”; FAQ o stanowisku operatora: Loftware Print albo Web Client w Windows 11 / Server 2016–2025, przeglądarka dla Control Center i Web Designer | Product Range: „Loftware Web Client thin client”; System Requirements: Web Client w wymaganiach aplikacji Windows |
| V4-5 | `src/app/produkt/[slug]/page.tsx` — logo marki obok H1 | BarTender (proporcje ok. 6:1) w `h-10` = 248 px; przy 390 px prawa krawędź 431–463 px, logo ucięte | Dla `bartender` `h-6 lg:h-7 w-auto` (ten sam wzorzec co `magicard` i `brady`): 149 × 24 px przy 390 px (prawa krawędź 374), 174 × 28 px przy 1440 px | Zrzut 390 px; inne logo (Zebra 107 px, Loftware 140 px) mieszczą się w 374 px; sprawdzone na `next start` |

Po poprawkach: opisy 150–181 słów, `porownaj-opisy.py` na obu plikach — 0 wspólnych 6-gramów w description,
shortDescription, seoDescription i FAQ; `node scripts/test-licencje.cjs` OK; `npx tsc --noEmit` 0 błędów; `npx next build` OK.
Ceny, marża, dostawa i reguły dostępności bez zmian.

## Zachowanie na produkcji

- **API (`/api/stock`, 2 wywołania, 45 PN, odpowiedzi identyczne, źródło stock-cache):** 37 licencji z ceną — `available`,
  „Licencja elektroniczna — kod e-mailem”, `electronicLicense: true`, cena = `priceFrom` wariantu na karcie; 8 PN na zapytanie
  (BTE ×5, BTC-10-ENT, BTC-ENT-PRT, NSCB ×3) — bez ceny, „Cena na zapytanie”. CardStudio 4 PN — jak licencje.
- **Boks ceny:** Starter 751,44, Professional 1129,22 (BTP-WS-SUB-1YR, nie dodatkowa drukarka 390,09), Automation 2172,20,
  Cloud 1478,25 (Essentials 1 drukarka), Designer 1478,25, Essentials 3055,04 zł netto; „Dostępny”, wiersz
  „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem”, „Dodaj do koszyka”. Enterprise i Business: „Na zapytanie”,
  „Cena na zapytanie”, przycisk „Zapytaj o cenę”, bez koszyka (także w tabeli wariantów i na pasku 390 px).
  Kafle `/programy-do-etykiet` i `/oprogramowanie`: te same ceny „od”; Enterprise i Business — „Cena na zapytanie”.
- **JSON-LD:** nazwa, marka (BarTender / Loftware), `sku` = pierwszy PN, oferty = ceny i dostępność z API (37 sprawdzonych);
  Enterprise i Business bez `offers`, warianty Cloud Enterprise poza `AggregateOffer` (7 ofert). FAQPage = FAQ karty.
- **Koszyk i kasa (bez wysyłania formularza):** Starter 1 rok → szuflada „Dostawa 0 zł · Licencja elektroniczna — kod e-mailem”;
  `/zamowienie` krok 1 „Dostawa: Gratis”, 924,27 zł brutto; krok 2 — sekcja „Dane licencjobiorcy” i boks dostawy 0 zł.
  + ZD220d (ZD22042-D0EG00EZ, 653,28 zł) → 1404,72 zł netto, „Darmowa dostawa” (próg 1000 zł jak dotąd), sekcja licencjobiorcy
  nadal widoczna. Starter + przewód 90A052258 (390 px) → 815,89 zł, dostawa 25,00 zł i „brakuje 184,11 zł” (jak dotąd).
  Pozycje usunięte, koszyk pusty.
- **Wygląd:** tabele wariantów 8 kart i CardStudio bez poziomego przewijania przy 1440/1280/1024 (1216/1216, 960/960),
  przy 390 px widok kart i strona 390/390; przycisku „Pokaż niedostępne warianty” brak (żaden wariant nie jest niedostępny).
  Kafle 299×224 (1440), 213×160 (1024), 171×128 (390) — jak CardStudio i Magicard HUB. Tabela porównawcza przy 1024 px przewija się
  w swoim kontenerze (736/686) — wspólny komponent, jak na stronach wzorcowych.
- **Linki i pliki:** 42 linki wewnętrzne z kart i kategorii — 200; 12 PDF-ów — 200, rozmiar zgodny, MD5 = dokumenty producentów;
  linki zewnętrzne (free-trial, cloud, drivers.loftware.com) — 200. Sitemap zawiera 8 kart i 3 strony.
- **Merchant feed:** 36 licencji z `g:shipping` 0 PLN, pozycje na zapytanie pominięte.

## Otwarte (poza zakresem poprawek V4)

1. **O-1 (kod, do decyzji):** JSON-LD `AggregateOffer.lowPrice` obejmuje dodatki (Professional 390,09; Automation 652,89;
   Designer 566,67; Essentials 788,40), a boks i kafel pokazują cenę licencji podstawowej (K-09 z audytu K).
2. **O-2 (kasa, sprzed zmian):** podsumowanie w `/zamowienie` pisze „zl” zamiast „zł” (`src/app/zamowienie/page.tsx`, od 02.2026).
3. **O-3 (CardStudio, sprzed zmian):** tytuł strony „Zebra CardStudio 2.0 - Oprogramowanie | 259,6 zł | TAKMA” — szablon tytułu
   z `priceFrom` (259,6), a cena z API 244,54 zł.
4. **O-4 (kafel, sprzed zmian):** Magicard HUB (bezpłatny) na kaflu pokazuje „Cena na zapytanie”; na karcie — „Bezpłatny”.
5. **O-5:** kafle kart na zapytanie mają przycisk „Zapytaj o produkt” (wspólny wzór kafli `quoteOnly`/`comingSoon`), karta — „Zapytaj o cenę”.
6. Z audytu S nadal otwarte: BTC-PROV, SKU z ceną spoza kart, NSCEDB001M u dystrybutora.
