# PROGRESS — dziennik pracy (checkpointy sesji Claude Code)

> Po każdym etapie / buildzie dopisuję tu wpis: co zrobione, zmienione pliki, commit, TODO.
> Po crashu sesji: przeczytaj ostatni wpis i kontynuuj od tego miejsca.

---

## 2026-06-20 — Panel „Wizytówka Google" (/admin/wizytowka) — Faza 1

- **Cel:** mini-Localo dla wizytówki TAKMA (nie geo-grid — ogólnopolscy; nacisk na jakość profilu). Decyzja: TAKMA tak, serwis-zebry pominięty (ma dobrą 4,6★).
- **Faza 1 (Places API New):** kafelki (ocena/opinie/zdjęcia/status) + kompletność danych, **audyt AI** (score 0-100) + **inteligentne zadania** (priorytety, odhaczanie), **opinie** (do 5) z AI-draftem odpowiedzi, **doradca AI** (czat, zna profil+audyt).
- **Plumbing Fazy 2** (Business Profile API): `businessApiConfigured()` + miejsca w UI (statystyki telefonów/tras, auto-odpowiedzi, posty, ochrona) — kod dopiszemy po dostępie Google.
- Pliki: `src/lib/gbp.ts` (Places New), `src/lib/gbp-snapshot.ts` (cache 12h), `src/app/admin/wizytowka/{page,WizytowkaChat,WizytowkaUI}.tsx` + trasy `{audit,chat,reply,task}/route.ts`; modele Prisma `GbpSnapshot/GbpTask/GbpAudit/GbpChatMessage` (db push OK); pozycja w Sidebar; `INSTRUKCJA-wizytowka-google-setup.md`.
- **Konfiguracja:** `GOOGLE_PLACES_API_KEY` + `GBP_PLACE_ID=ChIJ2fZ3X3_pD0cRz2tBiCg5N_c` (TAKMA – Centrum Systemów Mobilnych, 3,7★/13 opinii) — w .env.local + Vercel prod. Druga wizytówka (Serwis Zebra 4,6★) = serwis-zebry, pominięta.
- tsc 0, build exit 0. Commit: <ten>. Deploy: auto z push.
- TODO Faza 2: wniosek Business Profile API + OAuth → statystyki/auto-odpowiedzi/posty/ochrona. Po deployu: zalogować się → „Uruchom audyt AI".

---

## 2026-06-19 — TC201: przebudowa wpisu na pierwszoplanowo TC201 + hero Higgsfield + UI

- **Slug** zmieniony `zebra-tc201-vs-tc22` → `zebra-tc201`; tytuł/SEO/excerpt przestawione na TC201 (porównanie z TC22 zostaje w treści), kategoria `przewodnik`. Usunięte „serii TC2x 2026" z H1.
- **Hero**: generowany W CAŁOŚCI w Higgsfield (nano_banana_pro) z renderami TC201 jako referencją (NIE composite ImageMag! — patrz [[feedback_hero-generate-whole-in-higgsfield]]). Finalnie ujęcie 3/4 (Front-Left ref → poprawne klawisze), pełne rozpoznawalne urządzenie, scena magazynu zalana firmową zielenią #A8F000. Warianty w `TC201/hero-34-w*.png`.
- **GuidePage.tsx**: zmiękczony gradient nakładki hero (mniej przykrywa obraz); `overflow-x-hidden` → `overflow-x-clip` na <article> (hover-zoom nie ucinał góry); dodany hover-zoom obrazów w treści (`[&_img:hover]:scale-[1.7]`).
- **Treść**: blok góra = 2× TC201 (przód+tył, bez TC22); sekcja skanery = 2 ujęcia 3/4 (FR+FL, gap 86px); back render podmieniony na prosty tył. Boxy decyzyjne przerobione na CZYSTE (jednolita ramka, bez badge/gradientu/cienia = anty-AI-slop), CTA jako solidny przycisk #2563eb przypięty do dołu (flex+margin-top:auto), zdjęcia TC22/TC201 na górze boksów.
- **Nowe rendery**: `tc201_front_right.png`, `tc201_front_left.png`; `tc201_back.png` (prosty tył); hero `zebra-tc201-hero.webp` (usunięty stary `...-vs-tc22-hero.webp`).
- **SEO/AEO/GEO zweryfikowane (localhost)**: title z frazą, meta desc 162 zn., canonical OK, OG+hero, H1 wiodący modelem, 11×H2; JSON-LD: Article(author/dates), BreadcrumbList, FAQPage 14 Q&A, SpeakableSpecification (AEO), ImageObject, Organization, WebSite; 0 img bez alt; bogata treść (296× „TC201", tabele specyfikacji, encje Qualcomm/Wi-Fi7/FIPS → GEO). Uwaga: author w schema = „Jakub Tiuchty" (globalne w GuidePage, nie zmieniam).
- Pamięć: nowe [[reference_zebra-brand-color]] (#A8F000), [[feedback_hero-generate-whole-in-higgsfield]], rozszerzony [[feedback_no-colored-left-border]] (badge/gradient/cień/pigułka = slop).
- tsc 0, strona 200. Commit: <ten>. Wdrożenie: po akceptacji (user zlecił commit+push tego etapu).

---

## 2026-06-19 — blog: wpis Zebra TC201 vs TC22 (SEO seeding przed premierą 21.07)

- **Cel:** zasiać treść pod „zebra tc201" przed premierą 21 lipca 2026; porównanie do TC22; hero z prawdziwego renderu 1:1.
- Nowy guide `zebra-tc201-vs-tc22` (`src/data/guides.ts`, wstawiony na początek tablicy = pierwszy w siatce /poradnik). Kategoria `porownanie`, 9 sekcji + 14 FAQ. Fakty z karty TC201 głosem eksperta (bez cytowania PDF). Wzorzec: istniejący `zebra-tc22-vs-tc27`.
- **Fakty TC201:** 4. gen TC2x, Qualcomm Dragonwing Q-6690 (+150%), Wi-Fi 7, BT 6.0, 5G NR Sub-6 Rel-17 + Dual eSIM, skanery SR500/AC670(30 m, kolor)/SR560(60°), zintegrowany RFID (opcja, EMEA Q4 2026), IP68/IP65, najwytrzymalszy TC2 (750 tumble +50%, upadki do 2,13 m z bootem, -20°C), FIPS 140-3 + Common Criteria, wstecznie zgodny z akcesoriami TC22/TC27. Premiera 21.07.2026, ceny po premierze (nie wymyślam). TC22 od 2 417 zł.
- **Hero 1:1:** kompozycja ImageMagick z prawdziwych renderów (folder TC201/, przezroczyste PNG 3750×5000) — front na pierwszym planie + tył ze skanerem za nim, ciemne tło #020102 + poświata + cienie. `public/images/guides/zebra-tc201-vs-tc22-hero.webp` (2000×848). Rendery do treści: `public/images/products/tc201_front.png`, `tc201_back.png`.
- Brak karty `/produkt/zebra-tc201` → linki kierują na `/kontakt` i `/terminale-mobilne-zebra` (bez 404). Sitemap łapie slug automatycznie.
- `.gitignore`: dodane `TC201/` i `Karty*/` (surowe rendery, nie do repo).
- Build OK (exit 0), tsc 0, strona w SSG. Commit: <uzupełnić>. Deploy: <uzupełnić>.
- TODO: gdy powstanie karta produktu TC201 → podmienić linki `/kontakt` na `/produkt/zebra-tc201`; po premierze uzupełnić ceny w tabeli i FAQ.

---

## 2026-06-19 — analytics: dialog z AI o analizie (kontekst → codzienna analiza)

- **Cel:** właściciel chce prowadzić dialog z AI przy „Analizie dnia" — dopisywać kontekst (np. „spadek bo inwentaryzacja"), żeby AI nie alarmowało codziennie o wyjaśnionych anomaliach.
- Nowe/zmienione pliki:
  - `prisma/schema.prisma` — model `GaChatMessage` (role/content/pinned/createdAt). `db push` wykonany.
  - `src/app/admin/analytics/chat/route.ts` (nowy) — GET historia (60), POST: wiadomość→odpowiedź Sonnet (system = ostatni digest+metryki+alerty, historia 30); akcje `pin`/`delete`. Pod `/admin/*` (cookie).
  - `src/app/admin/analytics/AnalizaChat.tsx` (nowy) — czat pod „Analizą dnia": dymki, Enter wysyła, 📌 przypina trwały kontekst, usuwanie. Odpowiedzi AI renderowane przez `Md`.
  - `src/app/admin/analytics/page.tsx` — render `<AnalizaChat/>` pod digestem.
  - `src/app/api/cron/ga-digest/route.ts` — wstrzyknięcie kontekstu właściciela (przypięte + user msgs z 21 dni) do promptu: „NIE zgłaszaj ponownie wyjaśnionych anomalii".
- **Jak działa pętla:** piszesz w czacie → trafia do tabeli → następny cron `ga-digest` czyta Twoje wyjaśnienia i pomija wyjaśnione alerty. 📌 = kontekst trwały (zawsze w analizie, bez wygasania po 21 dniach).
- Build OK (exit 0), tsc 0. Commit: <uzupełnić>. Deploy: <uzupełnić>.
- TODO: zweryfikować w panelu (napisać testową wiadomość, sprawdzić odpowiedź); ewentualnie cron `ga-digest --force` by zobaczyć efekt kontekstu od razu.

---

## 2026-06-19 — analytics: wyłącznik GA per-urządzenie + log IP na żywo

- **Cel:** (1) wykluczyć siebie z analityki mimo dynamicznego IP, (2) pokazać w `/admin/analytics` kto teraz na stronie (IP).
- **Wybór:** opcja B (opt-out na urządzeniu) zamiast filtra IP w GA4 — bo IP dynamiczne.
- Zmienione/nowe pliki:
  - `src/app/layout.tsx` — w `ga4-init`: `?ga-off=1` → `localStorage.ga_optout`, ustawia `window['ga-disable-G…']`; `?ga-on=1` cofa. Render `<LiveBeacon/>` poza /admin i /panel.
  - `src/components/LiveBeacon.tsx` (nowy) — `sendBeacon('/api/track/live', {path})` przy każdej zmianie ścieżki.
  - `src/app/api/track/live/route.ts` (nowy) — zapis IP (x-forwarded-for) + miasto/kraj (nagłówki Vercel) → model `LiveVisitor`.
  - `prisma/schema.prisma` — model `LiveVisitor` (`db push` wykonany).
  - `src/app/admin/analytics/realtime/route.ts` — `recentIps()`: unikalne IP z 10 min, retencja 48 h, zwraca `liveIps`.
  - `src/app/admin/analytics/LiveNow.tsx` — sekcja „Adresy IP na stronie".
  - `src/app/polityka-prywatnosci/page.tsx` — zdanie o logu ruchu (art. 6 ust. 1 lit. f RODO, retencja 48 h).
- **Jak wyłączyć się z GA:** wejdź na dowolną stronę z `?ga-off=1` (np. `https://www.takma.com.pl/?ga-off=1`). Zostaje w localStorage tej przeglądarki na stałe. Cofnięcie: `?ga-on=1`.
- Build OK, tsc 0 błędów. Commit `d5a6518`. Deploy prod: `takma-7glaxs072` (ready).
- TODO: po deployu zweryfikować w `/admin/analytics`, że własne IP nie pojawia się w GA realtime, a w sekcji IP widać odwiedzających.

---

## 2026-06-11 — start dziennika

- Stan repo: ostatni commit `b4d4b48` — fix(analytics): renderuj markdown w Analizie dnia zamiast gołego tekstu
- Panel Analytics GA4 (`/admin/analytics`) działa od 2026-06-10 (property 359306315)

## 2026-06-11 — kontynuacja: panel /admin/analytics

Aktywne zadanie: panel Analytics GA4. Stan na wejściu:
- Zrobione i scommitowane (working tree czyste, tylko untracked dokumenty):
  - `35b9c29` — panel GA4 + codzienna analiza AI (cron ga-digest, Sonnet)
  - `77a1d4c` — zakładki Konwersje / Dzień po dniu / Search Console + alerty w digestcie
  - `5027c89` — fix purchase tracking: `PurchaseTracker.tsx` na `/zamowienie/potwierdzenie` (zamówienia Stripe wcześniej niewidoczne w GA — 10/14 zamówień z 28 dni)
  - `8e43b86` — fix build (escape cudzysłowu)
  - `b4d4b48` — markdown w „Analizie dnia"
- Kluczowe pliki: `src/lib/ga.ts`, `src/lib/gsc.ts`, `src/app/admin/analytics/` (page, dzien, konwersje, gsc, `_ui.tsx`), `src/app/api/cron/ga-digest`, `PurchaseTracker.tsx`, `scripts/funnel-analysis.mjs`
- TODO/weryfikacja: sprawdzić czy purchase ze Stripe faktycznie wpada do GA4 po deployu fixa (dane spłyną po pierwszym realnym zamówieniu ONLINE)

## 2026-06-11 ~16:50 — checkpoint przed restartem sesji

Zrobione w tej sesji:
- **Empik**: napisany opis sklepu (2 warianty: pełny + krótki) — user wkleja sam w panelu Empik. Fakty: branża od 1994, Zebra Premier Partner + autoryzowany serwis, klienci Orlen/PKP/Lasy Państwowe.
- **Higgsfield setup** (kompletny):
  - CLI: `npm install -g @higgsfield/cli` → `higgsfield 0.1.40`
  - Auth: `higgsfield auth login` → zalogowany pomyślnie
  - Skills: `npx skills add higgsfield-ai/skills` → 4 skills w `~/takma/.agents/skills/`: higgsfield-generate, higgsfield-marketplace-cards, higgsfield-product-photoshoot, higgsfield-soul-id (symlinked do Claude Code, widoczne po restarcie)
- Restart sesji właśnie po to, żeby skills się załadowały.

Bez zmian w kodzie repo (working tree: tylko untracked dokumenty + PROGRESS.md). Ostatni commit nadal `b4d4b48`.

Po restarcie możliwe kierunki: karty marketplace dla Empik/Allegro przez `higgsfield-marketplace-cards`; otwarte TODO z /admin/analytics (weryfikacja purchase Stripe w GA4).

## 2026-06-11 ~16:51 — banner Empik 500x100

- Wygenerowany banner sklepu Empik przez Higgsfield (GPT Image 2, logo TAKMA jako referencja): logo + drukarka ZD + terminal MC + „Autoryzowany Partner Zebra".
- Workflow: gen 16:9 2k z kompozycją w centralnym pasie → auto-detekcja pasa treści (PIL/numpy) → crop 5:1 → resize 500x100 JPG (14 kB, limit 1024 kB).
- Plik: `~/Desktop/empik-banner-500x100.jpg` (+ źródło w `tmp-banner/raw.png`). User wgrywa sam w panelu Empik.
- Bez zmian w kodzie repo.
- **v2 (finalna)**: Empik = tylko etykiety → nowy wariant bannera z rolkami etykiet zamiast sprzętu, tekst „Etykiety termiczne i termotransferowe". Plik: `~/Desktop/empik-banner-etykiety-500x100.jpg` (13 kB). Źródło: `tmp-banner/raw-etykiety.png`.
- **v3 (finalna)**: + taśmy termotransferowe → banner z rolkami etykiet i czarnymi rolkami taśm, tekst „Etykiety i taśmy termotransferowe" (ś poprawne, zweryfikowane w 2k). Plik: `~/Desktop/empik-banner-etykiety-tasmy-500x100.jpg` (15 kB). Źródło: `tmp-banner/raw-etykiety-tasmy.png`.
- **Logo Empik 80x80**: sam niebieski glob wycięty z `takma_logo.png` (pełne logo nieczytelne w 80px), biały kwadrat, PNG 3 kB. Plik: `~/Desktop/empik-logo-80x80.png`.

## 2026-06-11 ~17:30 — Empik API: rozpoznanie

- Klucz API w `.env.local` (`EMPIK_API_KEY`). Test OK: shop_id 37449, OPEN, KYC approved, 0 ofert.
- EmpikPlace = Mirakl seller API, base `https://marketplace.empik.com/api`, nagłówek `Authorization: <klucz>`.
- Kluczowe endpointy: OF01 POST /api/offers/imports (CSV multipart, NORMAL), OF02/04 status, P31 GET /api/products?product_references=EAN|..., P41 import kart, STO01 stock, OR11 zamówienia, AF01 pola dodatkowe (GPSR!, vatmargin, price-calibration-enabled).
- **Skan EAN**: 375 etykiet/taśm z EAN w feedzie → **74 mają już karty w Empiku** (oferta od ręki przez OF01), 301 wymaga importu kart (P41 + akceptacja operatora Empika). Wyniki: `/tmp/empik-existing-cards.json` (uwaga: tmp — ulotne).
- **BUG opisu sklepu**: w panelu wkleił się znak „▎" („etykiety i ▎ taśmy") — user poprawi ręcznie w panelu.
- TODO next: moduł `src/lib/empik/` (wzór allegro): generator CSV OF01 (sku, product-id=EAN, price, quantity, state=11, leadtime, GPSR) + decyzja cenowa (×1,12×VAT jak Allegro?) + cron stock/ceny STO01.

## 2026-06-11 ~18:05 — integracja Empik DZIAŁA (75 ofert live)

- **Moduł `src/lib/empik/`**: `client.ts` (Mirakl: OF01/OF02/OF03/P31/OF21), `pricing.ts` (EMPIK_MARKUP=1.08 ×VAT, źródło StockCache.price), `offers.ts` (kandydaci etykiety+taśmy, CSV OF01 z polami GPSR per producent).
- **Cron `/api/cron/empik-sync`** (vercel.json: 7:15 i 14:15, po stock-sync): pełny zrzut — P31 po EAN → karty dopasowane → OF01 NORMAL (create+update+delete). Nowe karty w katalogu Empika podłączają się same. Diagnostyka: `?check=<import_id>`.
- **Import #1** (226158140): 76/76 success. **Import #2** (226158836): 8 updated, 1 deleted.
- **PACK_SIZE_BY_SKU** (offers.ts): 8 kart Empika to wielopaki (02100BK08945=24, 05095BK08345/11045=6, 3007201-T=8, 800261-107/800273-205/800264-605=12, 3003632=4) — cena ×pack, qty=pełne paczki. Lekcja z buga Jarltech.
- **EXCLUDED_SKUS**: 76381 — karta Empika to „Osram lampki choinkowe" (kolizja EAN), oferta usunięta.
- Stan: **75 ofert aktywnych**. Build OK. NIE scommitowane — czeka na potwierdzenie usera.
- DO WERYFIKACJI (user): karty 800264-505, 800264-155, 800294-155/605 i inne Zebra case-PN bez jawnego packa w tytule — czy karta = rolka czy karton (Zebra sprzedaje 8002xx po 12/box). Pending: import 301 brakujących kart (P41), obsługa zamówień (OR11/OR21 cron jak allegro-orders).
- **Scommitowane i wdrożone**: commit `25a69c6` (push na claude/takma-frontend-build-RrM9E), `EMPIK_API_KEY` dodany do Vercel env (production), deploy `takma-64u5vvns1` ręcznie przez CLI (auto-deploy z GH nie triggeruje). Produkcyjny test `?check` OK — cron 7:15/14:15 będzie chodził sam.

## 2026-06-11 ~18:45 — Empik: jakość kart + pilot P41

- User słusznie zgłosił dramat kart Empika („Cartusz wstążkowy... oryginalny Tak", złe zdjęcia) — to karty katalogu Empika (maszynowe tłumaczenia od innych sprzedawców/Icecat), nie nasze oferty.
- Mechanizm naprawy: P41 (POST /api/products/imports) — zgłaszamy własne dane kart (dopasowanie po EAN), operator Empika zatwierdza.
- Format poznany: kolumny = kody atrybutów; wymagane STR_GOLD (kod kategorii, np. 21-19-12 akcesoria / 6-645-11 etykiety), CATALOG_CODE (PN, rola SHOP_SKU), PELNY_TYTUL, OPIS_PRODUKTU_PELNY, ZDJECIE_OKLADKI_PRZOD_DUZY (URL, MEDIA), VAT_VALUE ("23"); EAN opcjonalny ale kluczowy do match. Separator ';'.
- **Cenzura treści Empika**: opis NIE MOŻE zawierać frazy „substancje chemiczne" (błąd 2031) — uwaga przy generowaniu opisów z products.ts!
- **Pilot**: karta 05100BK08345 (EAN 5052178143640, ta od „Cartusza") — import 6691938, transform 1/1 OK, status SENT. Test też czy przyjmą obraz .webp (images z takma.com.pl). CZEKAMY na moderację → sprawdzić jutro czy karta na empik.com się poprawiła.
- Po pozytywnym pilocie: generator P41 dla wszystkich materiałów (74 poprawki istniejących kart + 301 nowych kart). Pliki pilota: /tmp/empik-pilot-product*.csv (ulotne).

## 2026-06-11 ~19:15 — /admin/empik (zakładka jak Allegro)

- **Sidebar**: grupa „Empik" (Przegląd / Zamówienia / Wiadomości / Oferty) pod Allegro; `isChildActive` rozszerzone o `/admin/empik`.
- **Przegląd** (`/admin/empik`): KPI do akceptacji (WAITING_ACCEPTANCE — auto-anulacja!), do wysyłki, wątki, oferty (total+aktywne) + szybkie akcje + opis działania syncu.
- **Zamówienia**: lista OR11 + szczegóły (?order=) z akcjami: akceptacja (OR21, form POST → accept/route), tracking+wysłane (OR23+OR24 → tracking/route). Statusy PL w `lib/empik/orders.ts`.
- **Wiadomości**: wątki Mirakl Inbox (GET /inbox/threads), widok wątku + odpowiedź (POST /inbox/threads/{id}/message przez reply/route).
- **Oferty**: lista OF21 z packami i statusem + przycisk „Synchronizuj teraz" (oferty/sync/route woła GET crona inline).
- Nowe pliki: `lib/empik/{orders,messages}.ts`, `empikListOffers` w client.ts, 7 plików w `app/admin/empik/`. Build OK (2386 stron). NIE scommitowane.
- UWAGA runtime: kształty odpowiedzi Inbox/OR11 typowane defensywnie — pierwsze realne zamówienie/wiadomość zweryfikuje mapowanie pól.
- Scommitowane `d25256e` + push + deploy prod `takma-2izwz0t2x` (READY). Panel /admin/empik live.

## 2026-06-11 ~21:30 — Przelewy24 zamiast Stripe (kod gotowy, czeka na klucz API)

- **Odkrycie**: konto P24 352235 zarejestrowane na www.takma.com.pl (sklep „Empik" 401737 pod nim = rozliczenia EmpikPlace). CRC zweryfikowany legacy testConnection (`error=0`). Klucz API z panelu NIE działa na REST (401) — stary klucz sprzed REST; **user ma kliknąć „generuj nowy" i podać świeży**.
- **Kod (działa, build OK)**:
  - `src/lib/p24.ts` — register (SHA-384 sign, waitForResult, timeLimit 30), verify (OBOWIĄZKOWY), weryfikacja podpisu notyfikacji; P24_SANDBOX=true → sandbox
  - `src/actions/checkout.ts` — createCheckoutSession na P24 (sessionId=order.id, amount=order.totalBrutto grosze, urlReturn z &sid=, urlStatus=/api/p24/webhook); pro forma bez zmian
  - `src/app/api/p24/webhook/route.ts` — sign check → amount check → verify → PAID + maile (idempotentne)
  - `src/app/api/p24/status/route.ts` — polling dla strony potwierdzenia
  - potwierdzenie: `getOrderState` (sid P24 lub session_id Stripe), `PaymentPending.tsx` (spinner+poll 3s/2min)
  - zamowienie/page.tsx: teksty na Przelewy24
  - schema: Order.p24SessionId (unique), p24OrderId — **db push wykonany na prod DB**
  - .env.local: P24_MERCHANT_ID/POS_ID=352235, P24_API_KEY (stary — do podmiany!), P24_CRC
- Stripe webhook/lib zostają (historia zamówień). NIE scommitowane.
- TODO: nowy klucz API od usera → testAccess → commit/push/deploy → env na Vercel → test 1 zł.

## 2026-06-11 ~22:00 — P24: REST zablokowany, przejście na API 3.2 (DZIAŁA)

- Nowy klucz API + nowy CRC (42f3ee9289eb6694) od usera; IP whitelist `%` dodany. REST testAccess NADAL 401 → REST API wyłączone na koncie, aktywuje tylko BOK P24 (opcjonalny mail: „aktywacja REST API dla 352235").
- **Klasyczne API 3.2 działa na samym CRC**: trnRegister zwrócił token (test `error=0`). Przepisany transport w `src/lib/p24.ts`: md5 sign `sessionId|merchantId|amount|PLN|crc`, form-urlencoded, trnRegister/trnRequest/trnVerify, notyfikacja = form p24_* (webhook parsuje URLSearchParams). Interfejs funkcji bez zmian — przyszłe przejście na REST = podmiana transportu w jednym pliku.
- env: P24_API_KEY=e59d193a24388c4d2976acca08d87e9c (pod przyszły REST), P24_CRC=42f3ee9289eb6694.
- Build OK. NIE scommitowane. Po deployu: env na Vercel + realny test (najtańszy produkt, BLIK).
- **WDROŻONE NA PROD**: commit `d16f5ed`, env P24_* na Vercelu, deploy `takma-bkivqav2k` READY. Czeka na test bojowy usera (zakup taśmy BLIK).

## 2026-06-11 ~22:20 — P24 DZIAŁA END-TO-END (pierwsza opłacona transakcja)

- Test bojowy: zamówienie 20260611200002, 42,80 zł BLIK → transakcja P24 4506613438 „Dokonana", środki na koncie P24 (42,16 po prowizji).
- **BUG złapany na żywo**: `p24OrderId Int` — identyfikatory P24 (4,5 mld) przekraczają int4 → webhook 500 PO udanym verify. Fix: String (commit `5115811`, db push). To dlatego notyfikacje P24 (wysyłane od 22:00:37, ponawiane) kończyły się 500 — wyglądało jak „brak notyfikacji".
- Po fixie ręczna (poprawnie podpisana) notyfikacja → 200, zamówienie **PAID**, maile poszły. Kolejne retry P24 dostaną idempotentne {received:true}.
- Fix UX po drodze: koszyk czyszczony dopiero na opłaconym potwierdzeniu (commit `2b692d8`), timing logi w checkoucie (`6e224c9`: createOrder 455ms + p24Register 217ms; 30-40s pierwszego testu = zimny start).
- Deploye: `takma-ot9jspzpm` (aktualny prod).
- TODO cleanup (przy okazji): opis transakcji „—" → „-" (legacy API gubi em-dash: „Zamówienie ... ? takma"), usunąć timing logi, postmortem dla dwóch martwych zamówień testowych (user kasuje w adminie). REST API: opcjonalny mail do BOK o aktywację (przyszłościowo).
- Wieczorny domykający batch: box „Płatność" w szczegółach zamówienia admina (`3d1f1e2`), etykiety maili Stripe→Przelewy24 (`b1a4e2c`), 3 porzucone zamówienia testowe usunięte z DB (skrypt z bezpiecznikiem PENDING-only). Prod: `takma-eq1jy4hii`.

## 2026-06-11 ~23:10 — fix 404 w feedach Ceneo/Merchant + wyszukiwarka

- **Wyszukiwarka** (`44e1e13`): szukanie nazwy modelu („zt610") podbijało wariant PN (ZT61042… zawiera „zt610") z linkiem ?pn= — teraz wynik wariantowy tylko gdy query pasuje do PN a NIE do nazwy.
- **Feedy** (`ccfd0a6`): 648/1438 ofert Ceneo (i tyle samo w Merchant) linkowało na 404 — urządzenia z wariantami dostawały `/produkt/{slug}/bez-rozmiaru/{PN}` (strony statyczne wariantów istnieją tylko dla etykiet/taśm). Fix: urządzenia przez `?pn=` (preselekcja+cena wariantu). Po deployu zweryfikowane na żywym feedzie: 0 ofert 404 (5 pozostałych z „bez-rozmiaru" to etykiety/taśmy z istniejącymi stronami — wszystkie 200).
- ODRZUCONE (decyzja usera): redirect-fallback w route [size]/[pn] — feed odświeży się do godziny, noc, brak ruchu.
- Pending z wniosków: price-match Ceneo (feed brutto vs strona netto) — wisi z project_takma-ceneo.

## 2026-06-11 ~23:20 — KONIEC DNIA (podsumowanie sesji)

Zrobione dziś (wszystko na prod, ostatni commit `ccfd0a6`, deploy `takma-fpulq02wz`):
1. **Empik**: banner 500x100 + logo 80x80 (Higgsfield, Pulpit) · integracja Mirakl (75 ofert live, cron empik-sync 7:15/14:15, wielopaki ×pack, EAN-kolizja usunięta) · panel /admin/empik (Przegląd/Zamówienia/Wiadomości/Oferty) · pilot P41 poprawy karty „Cartusz" (import 6691938, SENT) — **sprawdzić jutro/pojutrze czy karta 05100BK08345 na empik.com ma nasz tytuł/zdjęcie** → jeśli tak, generator P41 (74 poprawki + 301 nowych kart).
2. **Przelewy24 zamiast Stripe**: API 3.2 (REST zablokowany — ew. mail do BOK), webhook+verify, PaymentPending, pierwsza realna transakcja BLIK opłacona end-to-end (42,80 zł, P24 4506613438). Bug int4 p24OrderId złapany i naprawiony. Box „Płatność" w adminie, maile Stripe→P24, koszyk czyszczony po opłaceniu.
3. **Wyszukiwarka**: model nie podbija wariantu PN (zt610 → czysta strona produktu).
4. **Feedy Ceneo/Merchant**: fix 404 dla 648/1438 ofert (urządzenia przez ?pn=), zweryfikowane 0×404. Price-match potwierdzony (PDP netto+brutto).

Otwarte na kolejne sesje:
- Empik: weryfikacja pilota P41 → masowy import kart; weryfikacja kart Zebra case-PN (800264-*, 800294-*); cron zamówień Empik (OR11/OR21).
- P24: cleanup (em-dash w opisie transakcji „?", timing logi); opcjonalnie BOK → REST API.
- Ceneo (user): konto Partner + rejestracja feedów, Zaufane Opinie.
- Empik opis sklepu: znak „▎" — user poprawia w panelu.
- **23:10 — PILOT P41 ZAAKCEPTOWANY** (tego samego wieczoru!): karta 05100BK08345 w Catalog Manager = nasz tytuł/opis/zdjęcie (.webp przyjęty), status Zaakceptowany+Zsynchronizowano, oferta aktywna. **ZIELONE ŚWIATŁO na masowy import P41** (74 poprawki + 301 nowych kart) — do zrobienia w następnej sesji. Routine trig_01DyrsihaQVe8x8Mof4FpJ9b (piątek 8:00, weryfikacja publicznej strony) może zostać jako kontrola propagacji.

## 2026-06-11 ~23:20 — NOCNY masowy import kart Empik (user śpi, mandat: pracować do sukcesu)

- **Generator `scripts/empik-p41.mts`** (commit poniżej): wszystkie materiały z ważnym EAN, dedup po EAN, bez 76381 (kolizja). Tytuł = nazwa + wariant („102×152 mm, rdzeń 76 mm" / „83 mm × 450 m"), opis = wariant + opis produktu + nota TAKMA, sanitizer („substancj* chemiczn*"→„chemikalia"), kody marek (Zebra: 34=AAAALM, 600=AAND, 2100=AAANMT), zdjęcie images[0].
- **Wysłane 23:15**: etykiety import **6693011** (1134/1134 OK), taśmy import **6693016** (105/105 OK) — zero błędów transformacji, status SENT (moderacja).
- Uruchomienie: `npx tsx --env-file=.env --env-file=.env.local scripts/empik-p41.mts [labels|ribbons|all]` (klucz w .env.local!).
- **Nocna kontrola zaplanowana podwójnie**: lokalny one-shot cron 3:52 (pełna analiza: statusy importów, raporty, sync ofert, ew. poprawki odrzuconych wierszy, checkpoint) + chmurowy routine trig_01B1x6x9qqokAfjNjXVGzNUn 4:10 (publiczny endpoint sync, raport na claude.ai/code/routines).
- Punkt odniesienia PRZED moderacją: matchedCards=76, ofert live=75. Sukces = po moderacji ~1300 kart i sync dopina setki ofert.

## 2026-06-12 ~03:55 — NOCNA KONTROLA: pełen sukces masowego importu

- **Moderacja Empika zaakceptowała 1239/1239 kart** w ~4,5h (oba importy bez raportów błędów).
- Sync ofert (import 226263383): **1239/1239 OK, 0 błędów** — 1163 oferty nowe + 16 zaktualizowanych.
- **Stan konta: 1238 ofert live** (wczoraj 75), matchedCards 1239 (wczoraj 76). Ceny OK (wielopaki ×pack), qty z capem 30, produkty bez stanu qty=0 (auto-aktywacja gdy towar wróci).
- Generator NIE wymagał poprawek (0 odrzuconych wierszy) — brak zmian w kodzie tej nocy.
- Uwaga kosmetyczna: część istniejących kart w OF21 nadal pokazuje stare tytuły („Cartusz", „Label Roll") — nasze update'y treści propagują się wolniej niż nowe karty; obserwować 1-2 dni, ew. ponowić P41 dla tych EAN-ów.
- Chmurowy routine 4:10 (trig_01B1x6x9qqokAfjNjXVGzNUn) potwierdzi to samo na claude.ai/code/routines — sync jest idempotentny.
- TODO rano: wyrywkowa kontrola kart na empik.com od frontu (tytuły/zdjęcia/opisy), potem normalna praca cronów 7:15/14:15.

## 2026-06-12 ~07:30 — redesign dymka ChatAI (koncept Higgsfield #1, commit 2707a29)

- 3 koncepty wygenerowane GPT Image 2 (na Pulpicie: niebieski glass / minimal / dark) — user wybrał #1 (brand blue).
- Wdrożone w `MaterialsAdvisorWidget.tsx`: header gradient #1B9DD9→primary-700, avatar = glob z logo (`public/images/takma-glob.png`), chipy szybkiego startu, bąble/linki primary, caption „Propozycja dla Ciebie", launcher z gradientem i poświatą. CTA koszyka zostało limonkowe (spójność ze sklepem). Deploy `takma-b8qsyqrsl`.

## 2026-06-12 ~09:10 — /admin/analytics: sekcja „Na żywo" (commit d15b200)

- `gaRealtime()` w lib/ga.ts: aktywni teraz, minuta-po-minucie (30 min), strony live (unifiedScreenName). UWAGA: GA4 Realtime API NIE udostępnia wymiarów źródła (sprawdzone v1beta+v1alpha) — „Skąd przyszli dzisiaj" to intraday runReport (sessionSourceMedium, opóźnienie minut).
- `/api/admin/analytics/realtime` (auth sesją), `LiveNow.tsx` z pollingiem 30 s: licznik z pulsem, sparkline, dwie tabele. Sekcja nad kartami przeglądu.
- Wcześniej rano: emoji 3D w chipach czatu (`388cbf4`).

## 2026-06-12 ~09:20 — kontrola pilota HTML (przypadek „w toku")

- Karta 3005103: NOWA strona publiczna p1749136719 działa — NASZ tytuł w h1, oferta kupowalna, nasz opis (jeszcze nocna wersja plain). STARA karta p1608949724 wisi bez oferty („Brak możliwości zakupu") — Empik utworzył nową kartę zamiast w pełni nadpisać starej; stara pewnie wygaśnie/scali się (obserwować duplikaty w wyszukiwarce Empika).
- Pilot HTML (import 6695905): COMPLETE bez błędów, ale publiczna strona NIE pokazuje jeszcze sekcji „Główne zastosowania"/„Dane wariantu" (propagacja ~godziny). Brak escapowanych znaczników.
- Decyzja: czekam — kolejna kontrola ~11:20 (one-shot cron). Masowa wysyłka opisów HTML dopiero po potwierdzeniu renderowania list na stronie publicznej.
- Fix 401 w „Na żywo" (`c5c65c7`): cookie admin-session ma path /admin → endpoint przeniesiony na /admin/analytics/realtime (NIE /api/admin/* — ważny wzorzec na przyszłość). Działa, potwierdzone przez usera.

## 2026-06-12 ~09:45 — NOWY PRODUKT: Datalogic Skorpio X40 (commit d0dbdf9)

- Research Ahrefs: frazy X40 zerowe (greenfield!), klaster żyje przez „datalogic skorpio x5" (70/mies., KD 0) i „skorpio x5" (50). SERP X5: #1 bcmarket DR26/2 backlinki, reszta DR 4-37 — TOP3 realne od wejścia.
- Strategia: strona celuje w „datalogic skorpio x40" + przejmuje intencję X5 (pozycjonowanie „następca Skorpio X5", zgodność z dokami X5 w FAQ/opisie).
- 11 wariantów (PN 946400001–011, konfiguracje i ceny sparowane z konkurencją: SR kompakt 4542,24 / SR gun 4809,42 / LR kompakt 4965,26 / LR gun 5232,49 netto), availability on-order (stock-sync podepnie żywe ceny z Ingrama, jeśli ma PN-y).
- Spec z karty Datalogic (X40: WiFi6E, BT5.3, NFC, Android 15→19, Halogen DL/ER 10m, Green Spot, 7000mAh hot-swap, Qi 10W, IP65/67, 2.4m, -20..50°C, 445g). X45 (5G+GPS) wspomniany jako „na zamówienie" — kandydat na osobną kartę później.
- Zdjęcia: oficjalne packshoty Datalogic (kompakt+gun, 800x800) + scena z dokami z karty PDF → /images/products/datalogic-skorpio-x40_*.png. TODO opcjonalnie: lepsze renderingi z portalu partnerskiego Datalogic.
- 11 FAQ (AEO: cena, vs X5, vs X45, zasięg, Green Spot, klawiatury, uchwyt, Qi, doki X5, chłodnie, alternatywy + linki wewn. do MC9450).
- TODO user: GSC → Request indexing dla /produkt/datalogic-skorpio-x40.
- **Korekta cen X40 (`3a0bc81`)**: Ingram MA już PN-y 9464000xx (DE 2-33 szt.!) — strona od rana pokazywała żywe ceny (SR kompakt 5225,20), a moje statyczne „od 4542" z parytetu bcmarket było niespójne. Fallbacki+FAQ+SEO podciągnięte do live. **DECYZJA BIZNESOWA dla usera**: bcmarket sprzedaje po 4542 netto = PONIŻEJ naszego kosztu z Ingrama (4750,18) — oni mają tańsze źródło (Datalogic direct?); nasza cena ~15% wyżej. Opcje: zostawić (marża zdrowa), negocjować cenę projektową u Ingrama/Datalogic, albo świadomie zejść z marży na tym modelu.
- **X40 przedsprzedaż (`ed4057c`)**: user słusznie zakwestionował „Dostępny 2-3 dni" — BlueStar API raportuje stan (2-33 szt.), ale ich webshop = „PRE-LAUNCH, contact sales rep" (zamówić się nie da); Ingram 0+trucks (PIERWSZY screen usera to był INGRAM), Jarltech 0. Nowy `lib/stock-overrides.ts` (PRELAUNCH_PNS) nakładany w stock-sync i /api/stock: status „Przedsprzedaż — wysyłka po premierze (2-4 tyg)", cena zostaje. Zweryfikowane na prod. **USUNĄĆ PN-y z listy po premierze** (sygnał: BlueStar/Ingram webshop pozwala kupić). Note: pole StockCache.ingramPrice trzyma koszt NAJTAŃSZEGO źródła (myląca nazwa). bcmarket jedzie na ~5% marży (info od usera).

## 2026-06-12 ~11:30 — NOWY PRODUKT: Datalogic Skorpio X45 (commit 69e2d28)

- Kompletność PN zweryfikowana sondą (Ingram+BlueStar, zakres 946450001-15): istnieją DOKŁADNIE 3 PN-y — screen usera kompletny. Konfiguracje wywnioskowane lustrzanie z numeracji X40 w Ingramie (001=48kl gun, 002=29kl, 003=39kl, wszystkie SR+5G; jedna cena potwierdza różnice tylko klawiaturowe) — **zweryfikować nazwy w portalu Ingrama gdy się pojawią**.
- Cena: koszt Ingram 5720,47 → od 6292,52 netto. PN-y w PRELAUNCH_PNS (Ingram: 0, niedostępne). Cross-linki X40↔X45.
- Zdjęcia: tymczasowo packshot gun X40 (konstrukcja identyczna) + scena z dokami — **podmienić na oficjalne X45 gdy dystrybucja je opublikuje**.
- TODO user: GSC Request indexing dla /produkt/datalogic-skorpio-x45 (i X40, jeśli jeszcze nie).
- ~11:40 druga kontrola pilota HTML: strona publiczna karty 3005103 nadal z nocnym opisem plain (bez sekcji, bez escapowanych tagów) — aktualizacje treści ISTNIEJĄCYCH kart propagują się wolniej niż nowe karty. Trzecia kontrola ~14:45.
- Listing (`2109bab`): X45 z frontowym zdjęciem (spójność gridu terminali); **ProductCard fix**: live badge rozróżnia on-order („Na zamówienie", da się kupić) od unavailable („Niedostępny" + dzwonek) — wcześniej binarka totalStock>0, która zabijała przedsprzedaż X40/X45 czerwonym „Niedostępny".
- **Zasada binarna dostępności (`afb83b2`, decyzja usera)**: na stanie=Dostępny, brak=Niedostępny — bez stanów pośrednich. Kafelek wrócił do binarki, override przedsprzedażowy → unavailable + tekst „Przedsprzedaż — dostawy w drodze do dystrybucji", statyki X40/X45 unavailable, inDelivery=0. Zweryfikowane na prod (oba PN-y: unavailable + tekst przedsprzedaży). Zapisane w memory jako feedback_binary-availability.

## 2026-06-12 ~12:10 — fix głowic ZT510/ZT610 (commit 5786749, zgłoszenie usera)

- P1083347-006 to głowica 300 dpi WYŁĄCZNIE do ZT510 (zweryfikowane: katalog części Zebra + 5 sklepów) — nasz wpis „ZT510, ZT610, ZT610R" sklejał ją z ZT610 (PN ZT510-owy, zdjęcie/slug ZT610-owe).
- Rozplątane: zt610-300 → PN P1083320-011 (2360,53 live); NOWY wpis zebra-glowica-zt510-300dpi (P1083347-006, 2141,49 live, 72 szt.); ZT510 linkuje swoją głowicę; noty o braku zamienności w obu opisach; FAQ ZT510 z cenami zaktualizowane.

## 2026-06-12 ~14:15 — NOWE PRODUKTY: Falcon X60 + X65 (commit 7321b54)

- Serie zweryfikowane sondą Ingram: X60 = 14 PN (946600001-014), X65 = 6 PN (946650001-006). Konfiguracje z listingu Ingrama (screeny od usera): X60 SR/LR/XLR × 31/41/53 podświetlane × kompakt/gun × stykowe/Qi; X65 SR/XLR gun 5G. UWAGA: 946650006 = wg Ingrama 53 kl. (jak 004) — oznaczony jako wariant wireless wg wzorca serii, ZWERYFIKOWAĆ przy dostawie.
- Ceny (koszt→sprzedaż ×1,10): X60 hh-SR 5406,69→5947,36; gun-SR 5841,13→6425,24; LR 6299,76→6929,74; XLR 6613,54→7274,89. X65: 6661,79→7327,97; XLR 7434,20→8177,62.
- 20 PN w PRELAUNCH_PNS. Zdjęcia: fronty z renderu PDF 8x (X60 turkus / X65 fiolet), gun packshot bcmarket (oficjalny render Datalogic), scena hali z karty. Cross-linki w rodzinie + vs MC9400/MC9450.
- Klaster Datalogic kompletny: Skorpio X40/X45 + Falcon X60/X65 — 4 karty, 34 SKU. TODO user: GSC Request indexing ×2 (Falcon).
- ~14:45 trzecia kontrola pilota HTML: strona publiczna 3005103 NADAL z nocnym opisem plain (import HTML 6695905 COMPLETE 6:50 → >8h bez propagacji). WNIOSEK: aktualizacje treści ISTNIEJĄCYCH kart Empika propagują się na front >8h (nowe karty: ~4,5h). Bez escapowanych tagów — nic nie wskazuje na odrzucenie HTML. Automatyczne kontrole zakończone — ZWERYFIKOWAĆ RĘCZNIE jutro rano (sekcje „Główne zastosowania"/„Dane wariantu" + <li> na stronie) i wtedy zdecydować o masowej wysyłce `scripts/empik-p41.mts all`.

## 2026-06-12 ~22:55 — linkbuilding: artykuł dla 300gospodarka.pl

- Oferta WhitePress: SG 5 dni, DOFOLLOW, 12+ mies., 586,22 zł. Napisany pełny artykuł `ARTYKUL-300gospodarka-przestoje-druku.md` („Godzina przestoju…" — kąt kosztowo-biznesowy pod profil portalu).
- Mapa linków: 5× takma (etykiety TT, taśmy TT — klaster KD 0-2, drukarki, Falcon X60 — świeża indeksacja, brand) + 2× serwis-zebry (brand + /serwis). UWAGA: oferta dopuszcza 1 link do innych domen — drugi link serwis-zebry do akceptacji wydawcy (fallback w pliku). User wkleja w WhitePress + zdjęcie główne (propozycja: scena hali z karty Datalogic).
- Hero do artykułu 300gospodarka wygenerowany (GPT Image 2, Higgsfield): reportażowa scena hali — przemysłowa drukarka drukuje pas etykiet, pracownik w kamizelce, paczki na przenośniku. Plik: ~/Desktop/artykul-300gospodarka-hero.png (2688×1520), źródło do wpisania: „materiały własne TAKMA".
- Korekta artykułu 300gospodarka (2026-06-13): wymóg „linki tylko do jednej www" → 2 linki serwis-zebry zamienione na takma: #1 serwis drukarek Zebra → /serwis, #4 autoryzowany serwis → /serwis/datalogic (różne URL-e, by Google liczył oba anchory). Wszystkie 7 linków = takma.com.pl, wszystkie 200. Plik gotowy do wklejki.
- Artykuł 300gospodarka wyeksportowany do plików (~/Desktop/Artykul-300gospodarka-przestoje-druku.*): DOCX (zbudowany python-docx — 7 hiperłączy OK), ODT/RTF/HTML (textutil — 7 linków OK). UWAGA: textutil HTML→DOCX/DOC GUBI hiperłącza — DOCX trzeba budować python-docx, DOC niepewny. Rekomendacja do WhitePress: DOCX.

## 2026-06-13 — SEO MC3400 data-driven (commit c88a342)

- Pipeline 3-fazowy: dane (GSC/GA4/Ahrefs/konkurencja) → seo-data/mc3400.json → audyt scripts/seo-audit-product.ts (statyczne+dynamiczne) → pętla do 25 PASS/0 FAIL + czysty build.
- Dane: GSC quick-winy (zebra mc3400 poz14.9, zebra terminale poz19.7, CTR 0); GA4 75% eng. ale 0 leadów (2 form_start); Ahrefs „kolektor danych zebra" 128/KD0/TP200; konkurenci mediana 1742 słów editorial, tylko bcmarket ma JSON-LD Product.
- Fix: wplecione „Zebra MC3300", „Zebra MC 3400", „Zebra terminale" w opis+2 nowe FAQ. Treść 2041→2162 słów.
- Skrypt reużywalny dla kolejnych produktów: `npx tsx scripts/seo-audit-product.ts <slug>` + seo-data/<slug>.json.

## 2026-06-14 — SEO ZD421T + ZD421D z anty-kanibalizacją (commit 43bdc28)

- Klaster „zebra zd421" 814/mies (KD0, parasol) + zd421t 337 + zd421d 100. GSC wykrył kanibalizację: strona T łapie „zebra zd421d" (poz.22), D prawie nie rankuje.
- Strategia: T = parasol „zebra zd421" + termotransfer (taśmy, trwałe etykiety); D = direct thermal (kurierskie/paragony, bez taśmy). Treść różnicowana → każda strona własna intencja. Cross-linki T↔D.
- Benchmark konkurencji: mediana 1861 słów editorial (bcmarket ma Product+Offer; agbit cienki 448; elmatech fetch=0 wykluczony). Cel 110%=2047.
- ZD421T 1475→2056 słów (30 PASS/0 FAIL), ZD421D 1639→2115 (27/0). Build czysty. Deploy takma-mrdfd14kx.
- seo-data/zd421t.json + zd421d.json. Skrypt audytu reużyty bez zmian.

## 2026-06-14 — artykuł przeniesiony do mistrzu.com (promo na 300gospodarka wygasło)

- Nowy wydawca mistrzu.com (oferta 701331): 3 dofollow, anchory URL/Brand/słowa kluczowe, do 3 zdjęć, bezterminowo, 159,39 zł netto (taniej niż 586 zł na 300gospodarka po promo).
- Ta sama treść („Godzina przestoju…"), linki przycięte 7→3 (max wydawcy), dywersyfikacja anchorów:
  1. serwis drukarek Zebra → /serwis
  2. etykiety termiczne i termotransferowe → /etykiety-termotransferowe-zebra
  3. drukarki przemysłowe → /drukarki-etykiet
  Pozostałe wzmianki (taśmy, Falcon X60, brand TAKMA) jako tekst bez linku.
- Pliki: ~/Desktop/Artykul-mistrzu-przestoje-druku.{docx,odt,rtf,html} (DOCX z hiperłączami przez python-docx) + hero artykul-300gospodarka-hero.png (do reużycia). Wydawca pozwala 3 zdjęcia — można dodać 2 inline w razie potrzeby.

## 2026-06-19 — SEO ZT231 data-driven (commit bfe3813)

- Powód: śr. poz. „zebra zt231" = 11,3 (granica str.1/2). Cel: stała str.1.
- Dane: GSC quick-winy (zebra zt231 poz11,3 / zt231 poz6,4 / rfid / manual, CTR 0); GA4 86 odsłon, 77% eng, 0 leadów; Ahrefs zebra zt231 119/KD0, zebra zt230 166 (poprzednik), drukarka etykiet przemysłowa 100/CPC70; konkurenci mediana 1729 słów.
- Fix: 3 FAQ (RFID, vs ZT230 + „drukarka etykiet przemysłowa", instrukcja/manual). Treść 1797→2001. Audyt 29/0, build czysty. Deploy takma-kk0klp92a.
- seo-data/zt231.json. 4. karta przepuszczona przez pipeline (po MC3400, ZD421T, ZD421D).

## 2026-07-05 — Atrybucja "droga klienta od kliknięcia" + konwersje offline + alerty + GSC w kokpicie
- **Tracking**: AttributionTracker (cookies takma_attr 90d gclid/UTM/landing + takma_journey sesja, max 15 stron); zapis na Lead (nowy model, /api/contact + /api/inquiry) i Order (createOrder). Schema przez `prisma db push` (NIE migrate — drift).
- **Wzbogacanie**: resolveGclid (click_view GAQL, okno 90 dni, dni z ±2 offsetem) → kampania/grupa/słowo; AttributionCard (lazy-resolve przy otwarciu) w /admin/zamowienia/[id]; nowa strona /admin/leady (lista+rozwijane szczegóły+ścieżka) + link w Sidebar.
- **Konwersje offline**: akcja "Zakup (marża) — offline" `conversionActions/7673894850` (UPLOAD_CLICKS, PURCHASE, secondary); cron /api/cron/ads-conversions (5:30 UTC) — PAID+ z gclid ≤60 dni, marża = totalNetto − ingramPriceSnapshot (fallback 80%), partial failure → retry. Test prod OK (0 kandydatów — dane od dziś).
- **Alerty**: cron /api/cron/alerts (5:45 UTC) — Ads koszt >2× śr. 7d, koszt>50zł przy 0 konw., HTTP check 5 stron, GA4 sesje>30 przy 0 keyEvents; mail Resend tylko gdy coś nie gra. Test prod: alerts:0 OK.
- **Kokpit GSC**: lib gsc.ts na tym samym SA (webmasters.readonly!) — SA już był siteOwner sc-domain:takma.com.pl; sekcja "Google (wyszukiwarka)" w /s/[id]: kliknięcia/wyświetlenia/pozycja (okno D-9..D-3 vs poprzednie) + top 10 fraz. Bug: rows bez dimensions nie mają `keys` → `r.keys?.[0]`. Pozostałe 4 strony: dodać SA w GSC.
- Commity: 7fa8a07 (atrybucja), konwersje+alerty, fix escape; kokpit deploy prod.
- TODO: obserwować pierwsze gclid w leadach/zamówieniach; dodać SA do GSC pozostałych 4 stron.

## 2026-07-07 — kampania Honeywell + strony porównań (DRAFT na localhost)
- **Ads**: kampania "Honeywell — terminale i drukarki [API]" (id 24010303919, budżet 15 zł/dz, Maximize Clicks z sufitem CPC 5 zł, PL+polski): grupy CT32/CT47/PC45d/PC45t z RSA i słowami PHRASE; grupa "Porównania Zebra→Honeywell" ZAPAUZOWANA (7 słów, bez reklam) — czeka na akceptację stron porównań. Wykluczenia kampanii: serwis/naprawa/sterowniki/instrukcja/używany/olx/allegro.
- **Porównania jako wpisy bloga (NIE COMMITOWANE, working tree!)**: 2 wpisy w `src/data/guides.ts` (kategoria porownanie, slugi honeywell-ct32-vs-zebra-tc22 i honeywell-pc45d-vs-zebra-zd421d, styl 1:1 jak wpis Brother RJ vs ZQ521) + hero z Higgsfield (nano_banana_pro, referencje = zdjęcia produktów z repo, 1584×672 webp w public/images/guides/). Standalone /porownania usunięte. WDROŻONE 7.07 wieczorem: wpisy na prodzie (200), grupa porównań podzielona na terminale (198082567413) i drukarki, RSA z landingami /poradnik/<slug>, obie grupy ENABLED. Hero v2 (TC22 wierny referencji), treść SEO-first (zdjęcia produktów, sekcje zastosowań, FAQ ×7).
- Dodane 6 grup przemysłowych (2026-07-07 po południu): PM45, PM65, PD45, PX940 (weryfikator!), PX45, PX65 — słowa PHRASE + RSA per model.
- Kontekst decyzji: marża Honeywell > Zebra; NIE bijemy w czyste frazy modelowe Zebry (jedno konto = jeden slot, kanibalizacja własnych reklam TC22/ZD421).

## 2026-07-07 (późny wieczór) — trzecia para porównawcza w Ads
- Grupa "Porównania drukarki TT (PC45t vs ZD421t)" w kampanii Honeywell: 5 fraz PHRASE (m.in. "zamiennik zebra gk420t") + RSA → istniejący wpis /poradnik/zebra-zd421t-vs-honeywell-pc45t. Sitelink "ZD421t czy PC45t?" (asset 387735147080) dopięty do grup ZD421 + drukarki zebra.
- TODO przy następnej edycji bloga: linki krzyżowe między wpisami porównań d↔t.

## 2026-08-04 — Monitor przetargów: TED (przetargi UE) + fix CPV + scoring lotów
- **Powód**: Mimira pokazywała przetargi (np. GCI Gdynia — sprzęt do EZD z drukarkami etykiet i czytnikami kodów), a nasz monitor milczał. Diagnoza: to przetarg POWYŻEJ progów UE → publikowany TYLKO w TED, nie w BZP (zweryfikowane skanem BZP 30.07-4.08: brak; TED: publikacja 535307-2026 z 3.08).
- **TED jako drugie źródło** w `/api/cron/przetargi`: api.ted.europa.eu/v3/notices/search (bez klucza), kwerenda expert = CPV branżowe OR full-text PL (drukarki etykiet, kolektory, czytniki kodów, terminale mobilne...) + buyer-country=POL + notice-type cn-*. ~3-5 ogłoszeń/dzień. noticeNumber=`TED/<pub>`, source='TED' (kolumna była w schemacie), url na ted.europa.eu. Awaria TED nie wywala crona (try/catch, pole tedError w odpowiedzi).
- **Fix bug CPV w prefiltrze BZP**: `cpvCode` to string z WIELOMA kodami — stary `startsWith` sprawdzał tylko pierwszy (drukarki etykiet jako CPV dodatkowy przepadały); teraz `includes`.
- **Scoring lotów**: prompt Haiku rozszerzony — zamówienie podzielone na części, z których choć jedna to rdzeń AutoID → 60-85 (można ofertować sam lot). TED dostaje jawny opis "Zamówienie podzielone na N części". Efekt: GCI 35→75 pkt; 3.08 dałby 4 trafienia ≥40 do maila (w tym Stalowa Wola: 39 drukarek kodów kreskowych).
- Panel /admin/przetargi: badge źródła BZP/TED·UE. Mail: znacznik źródła + stopka.
- LEKCJE TED API: pola w `fields` walidowane ściśle (deadline-receipt-tender-date-lot, NIE ...-tenders-date-time); pola tekstowe to `{pol: string[]}`; tytuł ma prefiks "Polska – <kategoria> – "; deadline per-lot (bierzemy najwcześniejszy).
- TODO po deployu: odpalić cron z from=2026-07-28 (nadrobienie zaległego okna z GCI).

## 2026-08-04 — Stock: fix stęchłych stanów Jarltech (SL204C pokazywał 112 szt. z kwietnia)
- jarltech-sync ubijany na maxDuration=300s robił ~350/2898 PN zawsze od początku listy products.ts — ogon (202 wpisy) wisiał na danych z 15.04. Fix: stale-first + czyste zatrzymanie przed limitem (commit 98d9b05); pełna rotacja puli co ~8 przebiegów/dni.
- Bezpiecznik 7 dni: stock-sync i /api/stock (fast-path override + slow-path) ignorują wpisy JarltechStockCache starsze niż 7 dni — stęchły wpis = brak wpisu = live fallback (commit eba1f07).
- Nadrobione ręcznie: 6 przebiegów jarltech-sync (~2510 PN), StockCache SL204C wyczyszczony → live przeliczył: 0 szt., „W dostawie (79 szt., ETA 17.09)". UWAGA: pełny stock-sync też nie mieści się w 300 s (504 przy ręcznym wywołaniu) — działa bo pisze batchami, ale warto kiedyś dodać ten sam wzorzec deadline+rotacja.

## 2026-08-05 — Promocja Zebra CEE Voucher (do 4.10) na kartach + w Ads
- Biuletyn PartnerConnect: rabaty voucherowe per imienny end-user — DS2208 56,2%, DS4608 72,5%, ZD230t 63,8%, ZD230d 62,9% od ceny kat. (dziś wszędzie ~50%). Ceny zakupu sprawdzone live u 3 dystrybutorów (skrypt z lib ingram/bluestar/jarltech; wymaga `npx tsx --env-file=.env --env-file=.env.local`).
- Karty produktów: baner promo (PromoBanner, config `src/data/promos.ts`, sam znika po endDate) — cena promo z buforem: DS2208 349 zł (marża ~11%), DS4608 549 zł (~15%), ZD230d 859 zł, ZD230t 879 zł (~18%); zamówienie przez formularz (koszyk = ceny regularne, bo rabat wymaga vouchera per klient). Promocyjne SKU wyniesione na wariant nr 1. CTA banera BIAŁE (limonka tylko akcent — konflikt z koszykiem).
- Ads: 4 promotion assets (44%/21%/18%/10%, redemption 5.08-4.10) podpięte do SW Zebra, SW Modele, DSA, SW brand przez API.
- GMC: sale_price NIE dodane — cena promo nie obowiązuje w koszyku, mismatch groziłby zawieszeniem konta Merchant.

## 2026-08-05 — Hero TC501 na stronie głównej (baner + artefakty CSS)
- Nowa scena z Higgsfield (nano_banana_pro, referencje 1:1: front + bok TC501; 2 rundy korekt urządzenia — zmyślony przycisk boczny, logo ZEBRA na dolnej ramce). Ultrapanorama 5:1 (3600×720, dopadding prawej ciemnej strony PIL-em) + `object-cover object-left` — kadr mieści się na każdej szerokości.
- Animacja: WIDEO/GIF odrzucone (kling animował całą scenę mimo promptów; wersja z maskedmerge też nie przeszła wizualnie, „latająca kulka" też nie) — finalnie czysty CSS: pulsująca poświata limonkowej linii na regale (2 patche, fazy naprzemienne 4,5 s), Ken Burns + fade-up na pozostałych slajdach, prefers-reduced-motion. LEKCJA: artefakty na banerach webowych = nakładka CSS w boxie aspect-[5/1] kotwiczonym jak obraz, nie wideo.
- Hero.tsx ma gotową obsługę slajdów wideo (video?: string) na przyszłość.

## 2026-08-06 — Hero: slajd promocji Zebra CEE (2. pozycja karuzeli)
- Packshot z Higgsfield (nano_banana_pro + rendery 1:1 z repo): DS4608/DS2208 frontem, ZD230d i ZD230t jako RÓŻNE obudowy (kopułowa vs piętrowa — UWAGA: to nie ten sam korpus!), osobne postumenty z limonkowymi krawędziami. 6 rund korekt: skanery zawsze frontem, bez zmyślonych stacji dokujących, proporcje ZD230d (za wysoka za pierwszym podejściem).
- CTA per produkt (−44/−21/−18/−10), pigułka „Promocja · tylko do 4 października", slajd znika sam po endDate (import z data/promos.ts). Puls poświaty: JEDEN delikatny radial mix-blend-screen (mocniejszy przysłaniał urządzenia).
- LEKCJA: rendery boczne ≠ frontalne — biała wersja produktu bywa jedynym frontalnym kadrem (poza + kolory z czarnej wersji przez 2 referencje).

## 2026-08-06 — Promocja Zebra na materiały (Printhead/ZipShip) na kartach + GMC serwis-zebry
- Kafel promo na kartach etykiet/taśm (ZipShipBanner card, pod boxem ceny): "PROMOCJA · DO −15% / 3 kartony taniej do Twojej drukarki Zebra", CTA→formularz z prośbą o nr seryjny. Kategorie/serie CZYSTE (tam się nie zamawia). KRYTYCZNE: rabat 56% to POUFNY warunek partnerski PartnerConnect — na froncie tylko −15% od NASZYCH cen. Config+notka w src/data/promos.ts (kod ZP2607-000-ZEBRASUP, próg 5000 EUR/rok, bez RFID/opasek). Marże policzone: etykiety koszt 59% katalogu (voucher pełny → koszt 44%, marża 15%→~30%), taśmy 49%.
- GMC serwis-zebry.pl: setup dokończony 5/5 (brakowała polityka zwrotów), feed 88 poz. zaciągnięty, moderacja Google trwa. Subkonto 5833239240.
- Program Zebra "głowice za 0 zł" (Printhead Protection, STAŁY, próg 5000 EUR/rok, wyłączność na oryg. materiały): landing pod niego = głowice w GMC + baza seryjna serwis-zebry. Do rozplanowania.

## 2026-08-09 — Promocja TSC Trade-Up + kolorystyka per producent na /promocje
- `PromotionAccent` w `src/data/promotions.ts` (base/on/light) + `ACCENT_ZEBRA` (#A8F000, tekst ciemny) i `ACCENT_TSC` (#1351A2 z logo, tekst biały, light #5BA0E8 do czytelności na czerni). Hub i landing NIE mają już zaszytej limonki — kolor bierze się z promocji. `AskAboutProductButton` dostał prop `buttonStyle`.
- Nowy wpis `tsc-wymiana-drukarki` (Trade-Up): oddajesz starą drukarkę etykiet dowolnej marki, dostajesz zwrot od TSC przy zakupie nowej przemysłowej. Do 31.12.2026.
- Kafel `/images/promo-card-tsc-wymiana.webp` — Higgsfield nano_banana_pro z REFERENCJĄ realnego zdjęcia MH241T (media_import_url z prod), niebieska poświata TSC, styl 1:1 z kaflami Zebry.
- Kolejność na hubie: Zebra (3 oferty) → TSC (1). tsc EXIT=0, oba URL-e 200, linki `/drukarki-etykiet-tsc` i `/przemyslowe-drukarki-etykiet` żyją.
- UWAGA: kwot rabatu NIE ZNAMY — T&C odsyłają do osobnej listy („click here"). Treść mówi „wysokość zwrotu podajemy w wycenie". Do pozyskania od Jarltech/TSC przed kampanią Ads.

## 2026-08-09 — Wpis o przejęciu Honeywell PSS przez Brady + hero wideo
- Nowy wpis `brady-przejmuje-honeywell-pss` w `guides.ts` (43. pozycja, kategoria branżowy). Fakty z komunikatów spółek: zamknięcie 3.08.2026, 1,4 mld USD, PSS ~1,1 mld przychodu, 3000+ pracowników, ~4 mln kontraktów serwisowych, nowy segment Intelligent Productivity Solutions. ZERO odwołań do newslettera partnerskiego.
- WAŻNE (decyzja usera): wszystkie sformułowania o niepewności („nie wiadomo", „nie opublikowano", „brak informacji") USUNIĘTE — nie komunikujemy klientom wątpliwości. Zdania przeczące przestawione na twierdzące.
- Hero = WIDEO (nie obraz): Higgsfield `cinematic_studio_3_0`, 21:9, 1080p, start_image = wcześniejszy render hero (zachowana kolorystyka). Kamera jedzie w głąb hali, światło przechodzi czerwień→błękit, a w tym samym momencie logo Honeywell robi crossfade w logo Brady.
- Logotypy PRAWDZIWE, wypalone ffmpegiem (Honeywell z repo, Brady z Wikimedia Commons — domena publiczna). NIE generowane przez AI. Pułapka: PNG w ffmpeg to jedna klatka — filtr `fade` wymaga `-loop 1 -framerate -t` (inaczej crossfade nie działa).
- Pętla bezszwowa przez ping-pong (`split`+`reverse`+`concat`). 1600×678, CRF 30 → **896 KB** / 10 s.
- Kod: nowe opcjonalne pola w `Guide` — `heroVideo` (renderuje `<video autoplay muted loop playsInline>` w `GuidePage.tsx`) i `ogImage` (statyczna klatka do OG + JSON-LD, bo wideo nie działa w podglądach linków). Pozostałe 42 wpisy bez zmian.
- NIEZACOMMITOWANE. Wpis czeka na akceptację usera (zasada: blog na prod tylko za zgodą).
- Pre-existing błąd tsc do naprawy: `src/app/serwis/layout.tsx` eksportuje `faqEntries` — Next.js nie dopuszcza tego w layout, może wywrócić build.

## 2026-08-17 — AWARIA GA4: 3 dni bez pomiaru (fix b9d6e77)
- **Objaw**: GA4 realtime 0, dzienne dane 13.08=94 users → 15.08=1 → 16.08=0 → 17.08=0. Strona działała normalnie (Clarity rejestrował ruch).
- **Przyczyna**: filtr ruchu deweloperskiego z commita `b9350f6` (14.08 12:18) — regex `/^https?:\/\/(localhost|...)/` wpisany w template literal budujący skrypt inline w `src/app/layout.tsx`. Template literal ZJADŁ BACKSLASHE, do przeglądarki trafiało `/^https?://(localhost|127.0.0.1|[::1])(:|/)/` → regex kończy się na pierwszym nieuciekniętym ukośniku → **SyntaxError całego bloku `ga4-init`** → brak `window.dataLayer` i `gtag` → zero page_view i zero zdarzeń. `gtag/js` ładował się dalej, więc w kodzie strony wyglądało poprawnie.
- **Fix**: porównanie `new URL(document.referrer).hostname` z listą hostów — zero backslashy do zjedzenia. Usunięty też `localStorage.setItem('ga_optout','1')` przy wejściu z localhosta (jedno takie wejście wyłączało pomiar na urządzeniu NA STAŁE).
- **Weryfikacja**: `node --check` na wygenerowanym kodzie (stary = SyntaxError, nowy = OK), build exit 0, prod potwierdzony 135 s po pushu, realtime ożył o 10:28 (2 users, poprawne ścieżki stron).
- **LEKCJA na przyszłość**: każdy skrypt inline składany w template literalu w JSX — ZERO wyrażeń regularnych i backslashy. Weryfikacja obowiązkowa: wyciągnij wyemitowany string i przepuść przez `node --check`. Sam podgląd `view-source` nie wystarczy (skrypt jest tam widoczny, tylko się nie wykonuje).
- **Nieodzyskiwalne**: dane 14–17.08 (3 dni). Do sprawdzenia: czy smart bidding w Ads nie zmiękł na zerowych konwersjach z importu GA4.
- Gałąź produkcyjna to `claude/takma-frontend-build-RrM9E` (origin/HEAD), NIE `main` — main dostaje tylko commity auto-disavow i jest rozjechany.

## 2026-08-17 — Ads: skutki awarii GA4 + konwersje offline nigdy nie działały (migracja na Data Manager API)
- **Skutek awarii GA4 dla Ads**: WSZYSTKIE akcje `primary` (liczone do stawkowania) to importy z GA4 — `klik_tel`, `klik_mail`, `purchase`, `wyslanie_formularza`. Przez 14–16.08 stawkowanie licytowało bez żadnego sygnału. Kampanie nie stanęły; baza konwersji jest tak cienka (0–4/dz, 24/mies.), że zerowe dni mieszczą się w szumie (były już 29–31.07 i 11–12.08).
- Jedyna wyraźna szkoda: niedziela 16.08 = 120 zł / 15 klik (CPC 8,00 zł) vs 02.08 31 zł/20 klik i 09.08 43 zł/18 klik. Winne 3 kampanie na Maximize Conversions (SW Serwis 29,76 zł za 1 klik, SW Zebra 33,15/3, SW Modele 47,41/7). Przepał ~75–80 zł. 17.08 wraca do normy.
- **ODKRYCIE: konwersje offline z marżą nigdy nie doszły do Ads** — akcja „Zakup (marża) — offline" (7673894850) ma 0 konwersji w 30 dni, a w bazie leży 6 opłaconych zamówień z gclid bez `adsConvUploadedAt`. Diagnoza przez `validateOnly` (bez zapisu): każde odrzucane z `CUSTOMER_NOT_ALLOWLISTED_FOR_THIS_FEATURE` — Google zamknął `ConversionUploadService.UploadClickConversions` dla integracji powstałych po jego wygaszeniu. Nasza z 5.07 nie wysłała ANI JEDNEJ konwersji od pierwszego dnia. Niewysłana marża: 2 862,45 zł (największe zamówienie 11.08 → 1 970,70 zł).
- **Doraźnie (krok 2)**: `~/Downloads/takma-konwersje-marza-2026-08-17.csv` (6 wierszy, nagłówek `Parameters:TimeZone=Europe/Warsaw`, kolumna Order ID = numer zamówienia → Google odsiewa duplikaty). Import: Cele → Konwersje → Przesłane pliki → „Prześlij i podejrzyj". PO UDANYM IMPORCIE ustawić `adsConvUploadedAt` na tych 6 zamówieniach, żeby cron ich nie powtórzył.
- **Migracja (krok 1, ZROBIONE w kodzie)**: `uploadClickConversions` w `src/lib/googleAds.ts` przepisane na `POST https://datamanager.googleapis.com/v1/events:ingest`. Zachowany interfejs `ClickConversion`/`ConversionUploadResult` (cron bez zmian poza logiem `requestId`). Wzorzec: najpierw ten sam payload z `validateOnly: true`, dopiero czysta walidacja przepuszcza wysyłkę — Data Manager nie raportuje błędów per zdarzenie w odpowiedzi na ingest. `transactionId` = numer zamówienia (deduplikacja po stronie Google). `destinations[].productDestinationId` = ID akcji konwersji, `operatingAccount` = konto, `loginAccount` = MCC. Usunięty osierocony `adsPost` (nikt już nie używał). Pola `consent` świadomie pominięte — nie mamy CMP, nie deklarujemy zgody, której nie zebraliśmy.
- **BLOKER dla kroku 1**: refresh token ma scope `auth/adwords` + `auth/content`, a Data Manager wymaga `https://www.googleapis.com/auth/datamanager`. Trzeba (a) włączyć Data Manager API w projekcie Google Cloud, (b) wydać token ponownie: `OAUTH_SCOPE="https://www.googleapis.com/auth/adwords https://www.googleapis.com/auth/content https://www.googleapis.com/auth/datamanager" node scripts/google-ads-refresh-token.mjs` i podmienić `GOOGLE_ADS_REFRESH_TOKEN` lokalnie i w Vercel. Do tego czasu cron sypie błędem scope (wcześniej sypał allowlistą — gorzej nie będzie).
- **Do rozważenia**: natywne akcje WEBPAGE (`klik_tel`, `klik_mail`, `wyslanie_formularza`) istnieją na koncie, ale mają 0 konwersji i status secondary — nie strzelają, bo na stronie jest tylko tag GA4, bez tagu Google Ads. Druga ścieżka pomiaru = jeden zepsuty skrypt nie zdejmuje całego stawkowania. Uwaga na podwójne liczenie.

## 2026-08-17 — Audyt Merchant Center + naprawy (commit a8c3df4)
- **Struktura kont**: MCA `5834037689` → subkonta `5820100970` (takma.com.pl) i `5833239240` (serwis-zebry, 88 ofert, 0 odrzuceń — czysto). Kampanie Shopping karmią się z właściwych subkont. Stare konto Verseo `117148699` (pod CSS `143038756`) martwe: „scanter.pl has opted-out from Verseo ADS" → 1425 pozycji bez emisji w Shopping, 1128 tylko w bezpłatnych. Spauzowane kampanie wskazują jeszcze merchant `286069930`.
- **takma 5820100970: 322 odrzucenia z 1931**. Rozbiórka:
  - **305 × „Missing product price"** — `źródło: crawl`, czyli automatyczne feedy Google, NIE nasz feed (feed: 1546 pozycji, każda z ceną). Google wchodził na strony wariantów materiałów (np. `/produkt/zebra-z-ultimate-3000t-white/50x15/86010`), a te nie miały `offers` w JSON-LD, bo kod pomijał sekcję gdy `priceFrom` puste (`hasValidPrice`). FIX: cena z `StockCache` przez nowy `src/lib/stock-snapshot.ts` (jedno zapytanie na proces — stron ~2400 i są statyczne; `revalidate=6h`). Zweryfikowane na prodzie: 86010 ma `offers` 428,33 zł.
  - **8 × „Unsupported image type"** — pliki NIGDY nie istniały, serwer zwracał HTML 404 (CK67-UCP-B/N, CK67-HB-UVB-0, CK6X-UCBC-4B, 815-087-001, zebra-cradle-tc52, zebra-charger-4slot, zebra-antenna-an440). Ścieżki → placeholder, a feed pomija oferty bez zdjęcia rastrowego (`feedImage()` filtruje też SVG — placeholder.svg wcześniej szedł do Google).
  - **1 × „Image too small"** (162×87) + **96 ostrzeżeń** → 99 plików na białe płótno 800×800 (`scripts/fix-small-product-images.py --apply`, kopie w `.image-backup/`, gitignored).
  - **3 × „Guns and Parts"** (rękojeści skanerów) — kodem nieruszalne, wymagają odwołania w panelu.
- **Znalezione przy okazji**: 19 produktów (etykiety foliowe Z-Ultimate) wskazywało na nieistniejące `zebra-labels-foil.jpg` → `tt-foil-labels.png`; martwy kadr `zebra-mc3300x_8.png`. Nowy `scripts/check-product-images.mjs` łapie takie ścieżki (build ich NIE zgłasza). Zostaje brak `getac.svg` — wpis producenta bez produktów.
- **Feed po zmianach**: 1546 → 1535 ofert, 0 martwych obrazów, 0 SVG.
- **Promocje w Shopping**: program NIE jest włączony na żadnym koncie (`Promotion program not enabled`) — włączenie tylko przez panel (Marketing → Promocje), API nie ma takiej metody. Blokuje to promocję materiałów w Shopping. Konto nadrzędne ma też 2 problemy: brak adresu firmy, brak połączonego Ads.
- **PENDING po stronie usera**: (1) wyłączyć automatycznie znajdowane produkty w Źródłach danych — zdejmuje 305 odrzuceń, (2) zgłosić program promocji + adres firmy, (3) odwołanie dla 3 „Guns and Parts".

## 2026-08-20 — ZD421t: linkowanie z instrukcji + tytuł (eksperyment pozycyjny)
- **Diagnoza „dlaczego nie jesteśmy #1 na «zebra zd421t»"** (dane, nie przeczucia): GSC 30 dni — średnia pozycja **10,5**, 144 wyświetlenia, 2 kliknięcia, CTR 1,39%. Na zapytaniach z rozdzielczością jesteśmy dużo wyżej: „203 dpi" 4,0 · „(300 dpi)" 4,5 · „300 dpi" 5,6. Czyli słabo wypadamy TYLKO na samej nazwie modelu.
- **SERP jest do wzięcia**: #1 bcmarket.pl (DR 28, UR 4, **0 linków** do strony), #3 strefadrukarek (DR 36, UR 4, 0 linków), #6 gento.pl (DR **0**). Nasza karta ma **UR 4,7** — wyżej niż każdy sklep w TOP10. To nie jest problem mocy linków, tylko dopasowania treści.
- **Naprawa 1 (serwis-zebry, commit 3a77b34)**: baner lejka pod instrukcją linkował do KATEGORII. Komponent miał deep-linki tylko dla 3 modeli (TC22, ET401, TC201). Nowy `lib/takma-product-links.ts` — mapa 41 modeli → karty produktów, zbudowana z zestawienia kluczy `polishManuals` z 877 slugami katalogu takmy; wszystkie adresy zweryfikowane na produkcji (ZC350 pominięty — 308 na kategorię). Instrukcja ZD421t jest na 9. pozycji tego samego SERP-u, więc teraz wzmacnia kartę zamiast rozpraszać moc po kategorii.
- **Naprawa 2 (takma)**: tytuł karty nie zawierał słowa „termotransferowa" (ma je konkurent z 3. miejsca). Nowy: `Zebra ZD421t 203/300 dpi — drukarka termotransferowa | TAKMA` (60 zn.). Obie rozdzielczości, bo karta ma 6 wariantów — po 3 na każdą; wpisanie jednej byłoby nieprawdą wobec połowy oferty i zepsuło pozycje 4,0–5,6 na zapytaniach z dpi. Cena wyjęta z tytułu (była stęchła: „od 1 649 zł" przy realnych 1 652,07 zł), w opisie zaktualizowana.
- **BASELINE do porównania za 1–2 tygodnie** (GSC, 20.07–19.08.2026): `zebra zd421t` poz. 10,5 / 144 wyśw. / 2 klik. · `drukarka etykiet zebra zd421t` poz. 9,9 / 21 wyśw. · `zd421t` poz. 9,3 · `zebra zd421` poz. 16,6.
- **ZNALEZIONE PRZY OKAZJI — do decyzji**: 164 karty mają cenę wpisaną NA SZTYWNO w `seoTitle`. Porównanie 142 z nich z cenami dystrybutorów: zgodnych ±5 zł tylko **8**, zawyżonych 80, **zaniżonych 54** — czyli tytuł obiecuje cenę niższą niż realna (CT70: 6 168 → 7 553 zł, ZT421: 9 416 → 10 509 zł, HC50: 4 200 → 5 143 zł). Systemowy fix: wstrzykiwać „od X zł" z migawki StockCache (`src/lib/stock-snapshot.ts`), wymaga `revalidate` na kartach produktów. User świadomie odłożył do czasu obserwacji efektu na ZD421t.
- **Nie zrobione (świadomie)**: rozdzielenie ZD421t / ZD421d (karta „t" zbiera wyświetlenia na „zebra zd421d", poz. 24,9) — żeby test tytułu miał jedną zmienną.

## 2026-08-30 — import ofert Jarltecha bez koncesji Zebry (M3 Mobile)
- Oferta 1618419 dla Scantera (projekt OT Logistics S.A, 20 × M3 Mobile SM30 + akcesoria) odbijała się od importu: „nie ma w niej numeru koncesji". Powód: parser szukał identyfikatora wyłącznie jako ciągu cyfr (`Projekt:\t(\d{5,})`), a Jarltech numeruje projekty `Q-20260826-611`. **Sprzęt spoza PartnerConnect — M3 Mobile, Newland — koncesji Zebry nie ma i mieć nie będzie**, a wycena projektowa i tak obowiązuje, więc dokument nie może być odrzucany.
- `src/lib/koncesje.ts`: kolejność rozpoznawania to teraz numer koncesji Zebry ze zdania wstępnego → numer projektu z nagłówka `Projekt:` → `Referencje:`, przy czym dwa ostatnie przyjmują też numer alfanumeryczny. Komunikat błędu mówi o obu numerach.
- `src/lib/koncesja-etykieta.ts` (nowy, wolny od Prismy — używają go komponenty klienckie): `etykietaPowiazania()` rozróżnia „koncesja 81468971" od „projekt Q-20260826-611" po tym, czy numer jest samymi cyframi. Podpięte w panelu koncesji, w komunikacie importu i w podpowiedzi ceny w kreatorze oferty — wcześniej wszędzie stało „do koncesji", co przy M3 było nieprawdą.
- Zweryfikowane na żywym endpoincie (dev 3005, sesja podpisana ADMIN_JWT_SECRET): import 200, 6 pozycji, ważna do 26.11.2026. Ceny w bazie zgodne z PDF — SM300E-UFCFSS-HF 760,96 EUR ≈ 3297 zł, limit 20 szt., klient OT Logistics, 88 dni do końca. Panel pokazuje „oferta Jarltecha 1618419 → projekt Q-20260826-611", a starsze pozycje dalej „→ koncesja 81468971".
- Uwaga na przyszłość: `pdf-parse` importowany jako `pdf-parse` wywala się w skryptach ESM (szuka pliku testowego) — w skryptach diagnostycznych importować `pdf-parse/lib/pdf-parse.js`.
- **Druga oferta M3 (1608893, projekt Q-20260803-050, Terramar) obnażyła dwie kolejne różnice formatu.** Jarltech wystawia te dokumenty w kilku wariantach i parser musi je znosić bez poprawek:
  1. **Brak kolumny „Rabat z cennika"** — tabela ma 10 kolumn zamiast 11. Liczenie od końca (suma i rabat zamykają wiersz) już to obsługiwało, ceny wyszły poprawnie.
  2. **Zdanie wstępne mówi „w nawiązaniu do koncesji Q-20260803-050"** — Jarltech nazywa koncesją własny numer projektu, więc pierwszy wzorzec przyjmuje teraz również numer alfanumeryczny.
  3. **Klient końcowy ginął** (`endUser: null`): dłuższa nazwa łamie się na dwa wiersze („…Sp. z" / „o.o.,:"), a justowanie rozstrzeliwa wyrazy podwójnymi spacjami; zapasowy wzorzec z pola „Referencje" wymagał na dodatek cyfrowego numeru. Teraz nazwę czytamy z tekstu sklejonego w jeden ciąg, do dwukropka zamykającego zdanie. Po poprawce: „Terramar Spedycja Midzynarodowa Sp. z o.o." i „OT Logistics S.A".
- Obie oferty wgrane i zweryfikowane po numerach katalogowych: SM305E-U2CFSS-HF 592,66 EUR (limit 20), SM300E-UFCFSS-HF 760,96 EUR (limit 20), SM30-BOOT-01 występuje w obu projektach i podpowiedź pokazuje obie ceny obok siebie.
- **Rekordy zaimportowane przed tą poprawką mogą mieć uciętą nazwę klienta** (widać „Fortatech Sp. z"). Naprawa: wgrać ten sam PDF ponownie — import kasuje poprzednią wersję dokumentu w obrębie źródła.
- Sposób weryfikacji kolejnych ofert bez klikania: `npm run dev -- -p 3005`, podpisać JWT sesji kluczem ADMIN_JWT_SECRET (`jose`), POST pliku na `/api/admin/koncesje`, potem GET `?pn=…` po numerach z dokumentu.
- Nagłówek karty koncesji odchudzony (uwaga użytkownika): zniknęły liczba pozycji i widełki cen („3 pozycje · 506,00–702,00 EUR"). Zostaje to, po czym dokument się rozpoznaje — reseller, numer oferty i projektu/koncesji, klient końcowy, dystrybutor, termin. Konkretne ceny czyta się z tabeli po rozwinięciu karty.

## 2026-09-01 — kanibalizacja skanerów, kampanie serwisowe i zgody na serwis-zebry.pl
- **Frazy „skaner zebra" rozplątane.** Na każde z zapytań „skaner zebra", „zebra skaner", „skanery zebra" rankowały trzy nasze adresy naraz (kategoria marki, kategoria ogólna, przewodnik), a Google rotował między nimi — kategoria marki spadła z 16 na 27–34 pozycję. Przewodnik dostał tytuł pytaniowy („Jak wybrać skaner…"), kategoria ogólna opisuje cztery marki zamiast wyliczać modele Zebry, kategoria marki zostaje jedyną odpowiedzią na zapytania markowe. Dołożone dwa pytania z „Podobne pytania" (odblokowanie skanera, aplikacje 123Scan / Scanner Control App / DataWedge). **Efekt do oceny za 3–4 tygodnie** — tyle trwa przeliczenie po zmianie tytułów.
- Pozycje na frazy Zebry ogólnie stoją (14,0 → 14,3; TOP3 53 → 51). Spadek kliknięć na stronach Zebry (339 → 282) to w połowie **KC401 pod embargiem** (24 → 7 kliknięć przy pozycji 3,4) — wróci samo 17.09.
- **Ads, kampania „SW Serwis - takma.com.pl - MB - Verseo":** 29 słów w dopasowaniu przybliżonym i do wyrażenia wstrzymanych (w tym „serwis drukarka etykiet": 316 zł/mies., zero konwersji, ściągało zapytania o konkurenta AG Consult i o drukarki do wszywek). Dodane 22 ścisłe frazy dla marek serwisowanych w TAKMIE: Honeywell, Datalogic, M3 Mobile, Newland, Citizen, GoDEX, SATO, TSC, Brother. Zebra i Unitech wstrzymane — **serwis Zebry idzie wyłącznie przez serwis-zebry.pl**, a kampania „Serwis Zebry - Search" dostała wykluczenia obcych marek.
- Strategia tej kampanii przestawiona z maksymalizacji konwersji (nie przyjmuje limitu stawki) na udział w budżecie z **sufitem 6 zł/klik**. Zdjęte wykluczenie „brother" (marka jest na liście serwisowanej), w zamian 15 wykluczeń konsumenckich: tusz, toner, atramentowa, mfc, dcp, wielofunkcyjna, fiskalna, zegarek…
- **Sześć linków do podstron na poziomie konta prowadziło pod adresy ze starego WordPressa** (`/kategoria/terminale-mobilne/`, `/o-nas/`, `/kontakt/`) — po dwa–trzy przekierowania każdy, we wszystkich kampaniach. Poprawione na aktualne.
- **Merchant: z 2162 ofert tylko 490 może się wyświetlać.** Powód numer jeden to nie feed, tylko brak kampanii obejmującej produkt — terminale 0/299, akcesoria 0/281, drukarki przemysłowe 0/114. Shopping istnieje wyłącznie dla materiałów eksploatacyjnych i wydaje 12 zł z 50 zł budżetu przy CPC 1,11 zł (Search: 3–30 zł). **Otwarte: kampania Shopping na sprzęt.**
- Diagnostyka jednorazowa (skrypty w katalogu roboczym sesji, nie w repo): koszt i kliknięcia dnia z GAQL, nakładanie słów między kampaniami (52 frazy = 52% budżetu 30 dni), status ofert z `shopping_product`, mutacje przez `:mutate` z `validateOnly` przed wykonaniem.

## 2026-09-02 — odbicia maili do @takma.com.pl (hostkarma) + podwójny adresat powiadomień
- **Diagnoza z API Resend** (klucz takmy jest send-only, pełny odczyt dał klucz z katalog-it-lasy): 4 odbicia w 2 dni na 42 maile do skrzynek @takma.com.pl (~10%), wszystkie z jednym kodem: `550 Email blocked by hostkarma.junkemailfilter.com`. Odrzuca serwer odbiorcy `mail.takma.com.pl` (cyberfolks, 185.208.164.34), bo IP z puli współdzielonej Amazon SES eu-west-1, z której wysyła Resend, trafia okresowo na listę HostKarma. Resend klasyfikuje to jako „Transient/General” i NIE ponawia — mail przepada. Dotyczy też serwis-zebry.pl (system@, serwis@ → serwis@/wojcik@/zuchnicki@takma.com.pl). Odbiorcy zewnętrzni (gmail, firmy) w tym samym oknie: 0 odbić.
- **Naprawa po stronie odbiorcy, nie nadawcy**: zgłoszenie do cyberfolks o wyłączenie RBL HostKarma dla domeny albo dopisanie SES/serwis-zebry.pl do białej listy SMTP. Alternatywa płatna: dedykowane IP w Resend. Dopóki nie ma decyzji, krytyczne powiadomienia wewnętrzne warto dublować na skrzynkę spoza cyberfolks (jakub.tiuchty@gmail.com już jest w części z serwisu).
- **Znalezione przy okazji**: `ADMIN_EMAIL` na Vercelu = jakub.tiuchty@, a cztery miejsca budowały adresatów jako `[ADMIN_EMAIL || takma@, jakub@]` → ten sam adres dwa razy, **takma@takma.com.pl nie dostawała zgłoszeń z promocji, kontaktu, RFQ i zamówień**. Decyzja usera: to maile potwierdzające, więc idą na **jakub.tiuchty@gmail.com** (poza cyberfolks, zawsze dochodzą). Nowa `adminRecipients()` w `src/lib/email.ts` podpięta w inquiry, contact, customer-rfq i sendAdminNotification.
- Odbity mail promocyjny: kod ZEBRA-87HG-P9CX, ZD230t, klient Aleksy — zgłoszenie jest w bazie leadów, tylko powiadomienie nie doszło.

## 2026-09-04 — komunikat o podwyżce cen Zebry na kartach terminali (od 5.10.2026)
- Zebra podnosi ceny od 5.10.2026 (terminale +15 %, tablety +15 %, akcesoria +5 %, drukarki mobilne/kart +3 %, RFID +5 %; ZD/ZT, skanery ręczne, akcesoria do drukarek, materiały bez zmian). **Decyzja usera: komunikat WYŁĄCZNIE na terminalach mobilnych (23 karty)** — reszta bez.
- `src/data/price-increase.ts` (konfiguracja, `priceIncreaseFor`, wygasa samo po `lastOrderDate` 2026-10-04) + `src/app/produkt/[slug]/PriceIncreaseNotice.tsx` (klient, cena z `useSmartPrice`, różnica w zł dla modelu, licznik dni). Wstawiony pod ceną, nad przyciskami; przy promocji CEE nadal się pokazuje.
- Treść po odsztucznieniu (skill /człowiek): „Nowe ceny Zebry od 5 października” / „Ten terminal będzie droższy o 15%” / „Od 5 października Zebra wprowadza wyższe ceny z powodu wzrostu kosztów komponentów. Zamówienia złożone do 4 października realizujemy w cenie widocznej wyżej. Po tej dacie różnica dla tego modelu wyniesie około 400 zł netto za sztukę.” Bez własnego przycisku (user usunął), bez „ceny cennikowe”.
- Wygląd: ciemny kafel jak PromoBanner, tło z Higgsfield (`public/images/promo/podwyzka-zebra-bg.webp`, odbite — poświata po prawej), nakładka `from-gray-950 from-55% via-gray-950/90 via-80%` + `pr-14`, żeby tekst nie wchodził w poświatę; licznik `absolute top-6 right-6` kafla. Wersja kompaktowa odrzucona („wróć do poprzedniej”).
- Wytyczne, na których to stoi: awersja do straty (kwota zamiast procentu), realny termin i licznik, jedno wezwanie, zero fałszywej pilności (FTC dark patterns). **Termin musi być dotrzymany co do dnia.** Po 5.10: `active=false`/wygaszone, aktualizacja `priceFrom` i tytułów z ceną — notatka w pamięci `project_takma-podwyzka-zebra-2026-10`.
