# Plan wdrożenia: Priorytet A + B — Title/meta + Strony-pułapki

**Cel**: Zwiększenie CTR z 1.18% do ~3-4% poprzez optymalizację title/meta + naprawienie strony-pułapek.

**Oczekiwany efekt**: +340 clicks/90 dni (z 1 151 do ~1 500). Reprocessing przez Google: 1-2 tygodnie.

**Czas wdrożenia**: 3-4 godziny pracy + deploy + 30 min Request Indexing.

---

## Krok 1 — Title/meta optimization (5 zmian, ~1.5 godz)

### 1.1 — Poradnik DT vs TT (3 484 imp, CTR 0.11% → cel 4%)

**Plik**: `src/data/guides.ts`
**Linia**: 593 (entry `drukarka-termiczna-vs-termotransferowa`)

**Obecnie:**
```ts
{
  slug: 'drukarka-termiczna-vs-termotransferowa',
  title: 'Drukarka termiczna vs termotransferowa — różnice, koszty, zastosowania',
  seoTitle: 'Drukarka termiczna vs termotransferowa — porównanie 2026',
  seoDescription: 'Drukarka termiczna czy termotransferowa? Różnice, koszty druku na etykietę, trwałość, TCO. Kalkulacje PLN i polecane drukarki etykiet Zebra od 621 zł.',
  ...
}
```

**Zmień na:**
```ts
{
  slug: 'drukarka-termiczna-vs-termotransferowa',
  title: 'Drukarka termiczna vs termotransferowa — różnice, koszty, zastosowania',
  seoTitle: 'Drukarka termiczna czy termotransferowa? Porównanie 2026 (DT vs TT)',
  seoDescription: 'Co lepsze: druk termiczny czy termotransferowy? Trwałość 3-12 mies vs 10 lat, koszty od 0,005 zł/etykietę, papier termoczuły vs taśma barwiąca. Porównanie z cenami i polecanymi modelami Zebra.',
  ...
}
```

**Dlaczego**:
- „czy" w title to question pattern — Google preferuje dla informational queries
- „DT vs TT" w nawiasie łapie skróty których ludzie używają
- W meta dodane „papier termoczuły" + „taśma barwiąca" — dokładne match dla query „potocznie drukarka z taśmą barwiąca" (573 imp poz 2.5!)

---

### 1.2 — Termotransferowe drukarki etykiet (4 495 imp, CTR 0.04% → cel 2%)

**Plik**: `src/data/products.ts`
**Linia**: 270 (subcategory `termotransferowe-drukarki-etykiet`)

**Obecnie:**
```ts
seoTitle: 'Termotransferowe drukarki etykiet | Trwały druk z taśmą ribbon',
seoDescription: 'Drukarki termotransferowe — trwały druk etykiet z użyciem taśmy barwiącej (ribbon). Biurkowe i przemysłowe modele Zebra, Honeywell, TSC. Porównanie, ceny, doradztwo.',
```

**Zmień na:**
```ts
seoTitle: 'Drukarki termotransferowe (TT) — z taśmą barwiącą od 639 zł | TAKMA',
seoDescription: 'Drukarki termotransferowe Zebra, Honeywell, TSC, Brother — druk z taśmą barwiącą (ribbon). 42 modele biurkowe i przemysłowe od 639 zł. Trwały wydruk do 10 lat. Ceny netto, doradztwo.',
```

**Dlaczego**:
- „(TT)" — dodaje skrót branżowy
- „z taśmą barwiącą" w title — bezpośredni keyword match dla 573 imp query
- „od 639 zł" — cena w title to znacząco zwiększa CTR (Google's CTR studies)
- „42 modele" — number creates curiosity

---

### 1.3 — Drukarki etykiet Zebra (1 917 imp, CTR 0.10% → cel 3%)

**Plik**: `src/data/products.ts`
**Linia**: 55474 (brand category `drukarki-etykiet-zebra`)

**Obecnie:**
```ts
seoTitle: 'Drukarki etykiet Zebra — kup od 639 zł netto | Sklep',
seoDescription: 'Drukarki etykiet Zebra: biurkowe, przemysłowe i mobilne od 639 zł netto. Porównanie modeli, TCO, FAQ. Autoryzowany partner Zebra z serwisem — TAKMA.',
```

**Zmień na:**
```ts
seoTitle: 'Drukarki etykiet Zebra — biurkowe, przemysłowe, mobilne od 639 zł | TAKMA',
seoDescription: 'Drukarki Zebra ZD220, ZD421, ZD621, ZT411, ZT610, ZQ521 i inne — od 639 zł netto. Autoryzowany Premier Partner Zebra, serwis w Polsce. Ceny, porównanie TCO, doradztwo techniczne.',
```

**Dlaczego**:
- W title dodane „biurkowe, przemysłowe, mobilne" — łapie keywords „drukarka zebra biurkowa", „drukarka zebra przemysłowa"
- W meta wymienione popularne modele (ZD220, ZD421, ZD621, ZT411, ZT610, ZQ521) — eksponuje exact match dla ich brand+model queries
- „Premier Partner" — trust signal w SERP

---

### 1.4 — Skanery Zebra (1 504 imp, CTR 0.13% → cel 3%)

**Plik**: `src/data/products.ts`
**Linia**: 55511 (brand category `skanery-kodow-kreskowych-zebra`)

**Obecnie:**
```ts
seoTitle: 'Skanery kodów kreskowych Zebra — od 352 zł | 1D/2D',
seoDescription: 'Skanery Zebra: przewodowe, bezprzewodowe i prezentacyjne od 352 zł netto. Czytniki 1D/2D, gwarancja do 5 lat. Autoryzowany partner Zebra — TAKMA.',
```

**Zmień na:**
```ts
seoTitle: 'Skaner Zebra cena — 1D/2D, przewodowe i bezprzewodowe od 352 zł | TAKMA',
seoDescription: 'Skanery kodów kreskowych Zebra DS2208, DS2278, DS3678, DS4608, LI2208 — 1D/2D, przewodowe i Bluetooth od 352 zł netto. Gwarancja 5 lat. Autoryzowany Premier Partner.',
```

**Dlaczego**:
- „Skaner Zebra cena" w title to **dokładny match** dla query „skaner zebra cena" (250 imp poz 8.4) i „skaner zebra" (1 025 imp poz 8.29!)
- W meta wymienione TOP 5 modeli — match na specific brand+model queries
- 1 025 imp na „skaner zebra" + boost CTR z 0.1% do 3% = ~30 clicks/mies tylko z tej zmiany

---

### 1.5 — Tablety przemysłowe (774 imp, CTR 0.13% → cel 2%)

**Plik**: `src/data/products.ts`
**Linia**: 196 (category `tablety-przemyslowe`)

**Obecnie:**
```ts
seoTitle: 'Tablety przemysłowe — rugged Android i Windows | Zebra, Getac, Honeywell',
seoDescription: 'Tablety przemysłowe rugged od 3 250 zł netto: Zebra ET40/ET45/ET60/ET65/ET401/ET80, Getac F110/T800, Honeywell RT10A. IP65–IP68, ekrany 8–12″ 1000 nit, -30°C do +50°C. Porównanie modeli, TCO, doradztwo techniczne. TAKMA — autoryzowany partner.',
```

**Zmień na:**
```ts
seoTitle: 'Tablety przemysłowe rugged Android i Windows od 3 250 zł | TAKMA',
seoDescription: 'Tablety Zebra ET40/ET45/ET60/ET65, Getac F110/T800, Honeywell RT10A — IP65-IP68, ekrany 8-12″, do magazynu, chłodni i terenu od 3 250 zł netto. Porównanie modeli, TCO 3 lata.',
```

**Dlaczego**:
- Cena w title („od 3 250 zł") — boost CTR
- Skrócony title (był zbyt długi) — Google obetnie title po ~60 znakach, więc trzeba krótszy
- Meta zachowuje wszystkie modele dla brand+model match

---

### 1.6 — Serwis (1 391 imp, CTR 0.22% → cel 2%)

**Plik**: `src/app/serwis/layout.tsx`
**Linia**: 4-6 (metadata.title.absolute + description)

**Obecnie:**
```ts
title: {
  absolute: 'Serwis i naprawa drukarek etykiet, terminali mobilnych i skanerów | TAKMA',
},
description: 'Profesjonalny serwis pogwarancyjny urządzeń AutoID — TAKMA Wrocław. Darmowa diagnostyka 48h. Autoryzowany serwis Zebra. Naprawiamy Honeywell, Datalogic, Brother, M3 Mobile, Newland, Citizen, Godex. Cała Polska.',
```

**Zmień na:**
```ts
title: {
  absolute: 'Serwis Zebra, Honeywell, Datalogic — naprawa drukarek, terminali, skanerów | TAKMA',
},
description: 'Serwis pogwarancyjny urządzeń AutoID — TAKMA Wrocław. Diagnostyka 48h GRATIS, autoryzowany serwis Zebra. Naprawa drukarek etykiet, terminali mobilnych i skanerów Zebra, Honeywell, Datalogic, M3 Mobile, Brother, Newland.',
```

**Dlaczego**:
- Marki na początku title — match dla query typu „serwis zebra", „serwis honeywell"
- „GRATIS" capitalized w meta — zwiększa CTR (free benefit)
- Zachowane „Wrocław" + „cała Polska" — local SEO

---

## Krok 2 — EM45 fix dla query „telefon zebra" (1 zmiana, ~30 min)

### 2.1 — EM45 product entry

**Plik**: `src/data/products.ts`
**Linia**: 24610 (product `zebra-em45`)

**Obecnie:**
```ts
{
  id: 'zebra-em45',
  slug: 'zebra-em45',
  name: 'Zebra EM45',
  seoTitle: 'Zebra EM45 — smartfon biznesowy 5G, IP68 | od 2 951 zł',
  seoDescription: 'Zebra EM45 (EM45B1) — smartfon enterprise 5G: Wi-Fi 6E, 50 MP OIS, IP68+IP65+MIL-STD-810H, bateria 4 750 mAh / 25 h, COPE, AI NPU. Od 2 951 zł netto.',
  shortDescription: 'Zebra EM45 — enterprise mobile w formie smartfona, 6,7" FHD+ 120 Hz, 5G, Wi-Fi 6E, aparat 50 MP, NFC, AI (NPU), COPE',
}
```

**Zmień na:**
```ts
{
  id: 'zebra-em45',
  slug: 'zebra-em45',
  name: 'Zebra EM45',
  seoTitle: 'Zebra EM45 — telefon biznesowy / smartfon enterprise 5G | od 2 951 zł',
  seoDescription: 'Zebra EM45 — telefon Zebra w formie smartfona: 5G, Wi-Fi 6E, 50 MP, IP68, MIL-STD-810H, bateria 25h. Enterprise mobile dla menedżerów, kurierów i serwisu. Od 2 951 zł netto.',
  shortDescription: 'Zebra EM45 — telefon biznesowy / smartfon enterprise w formie konsumenckiej, 6,7" FHD+ 120 Hz, 5G, Wi-Fi 6E, aparat 50 MP, IP68, COPE',
}
```

**Dlaczego**:
- 220 imp/90 dni dla „telefon zebra" + 28 dla „zebra em45" — łącznie ~250 impressions czeka
- Słowo „telefon" w title i meta — match dla generic query
- „smartfon enterprise" + „forma konsumencka" — różnice od TC seria (kolektor vs telefon)
- Po deployu + reindeksacji EM45 powinien wskoczyć na poz. 5-8 dla „telefon zebra"

### 2.2 — Sprawdź czy też w description (longer text)

**Plik**: `src/data/products.ts`
**Linia**: ~24611-24640 (full description block dla zebra-em45)

Otworz tę sekcję i dodaj na początku 1-2 zdania:

```
Zebra EM45 to **telefon biznesowy** marki Zebra Technologies — pierwsze urządzenie w portfolio Zebra mające formę smartfona konsumenckiego (6,7" FHD+, 11 mm grubości, 192 g) z funkcjami enterprise: skaner kodów, konfiguracja MDM, gwarancja 5 lat. Idealny dla pracowników którzy potrzebują **telefonu Zebra zamiast kolektora danych**...
```

(Reszta opisu produktu zostaje)

---

## Krok 3 — Trailing slash policy (1 zmiana, ~10 min)

### 3.1 — next.config.mjs

**Plik**: `next.config.mjs`
**Linia**: ~3 (po `const nextConfig = {`)

**Dodaj:**
```js
const nextConfig = {
  trailingSlash: false,  // ← DODAJ TĘ LINIĘ
  images: {
    ...
  },
  ...
}
```

**Dlaczego**: Google ma w indeksie warianty z slashem (np. `/produkt/zebra-zd421/` i `/produkt/zebra-zd421`). To kanibalizacja własna — link equity rozproszony. `trailingSlash: false` + automatyczny 301 z `/path/` na `/path`.

**Test po deployu:**
```bash
curl -I https://www.takma.com.pl/produkt/zebra-zd421/
# Powinno zwrócić: HTTP/2 308 (Permanent Redirect)
# location: /produkt/zebra-zd421
```

---

## Krok 4 — Vercel domain canonical (5 min)

### 4.1 — Sprawdź konfigurację domen w Vercel

Idź do: https://vercel.com → Twój projekt takma → Settings → Domains

Powinno być (idealne):
- ✅ `www.takma.com.pl` — **Primary** (Production)
- ✅ `takma.com.pl` — **Redirect** to `www.takma.com.pl` (308 Permanent)

Jeśli `takma.com.pl` (non-www) jest „Production" zamiast „Redirect" → kliknij ⚙️ przy nim → ustaw jako **Redirect to www.takma.com.pl**.

**Test po zmianie:**
```bash
curl -I https://takma.com.pl/
# Powinno: HTTP/2 308
# location: https://www.takma.com.pl/
```

To samo dla `http://takma.com.pl` i `http://www.takma.com.pl` — HSTS w `next.config.mjs` już to obsługuje (`Strict-Transport-Security: max-age=63072000; preload`), więc HTTP→HTTPS jest wymuszone.

---

## Krok 5 — Sitemap update (5 min)

### 5.1 — Sprawdź sitemap.ts

**Plik**: `src/app/sitemap.ts`

Plik jest OK — automatycznie generuje wpisy dla wszystkich produktów. Po Krok 1.1-1.6 sitemap zaktualizuje `lastModified` w produktach automatycznie.

**Akcja jednorazowa po deployu:**

GSC → wybierz property `https://www.takma.com.pl/` → **Sitemaps** w menu → upewnij się że `/sitemap.xml` jest „Success" status. Jeśli nie — kliknij **Submit a new sitemap** → wpisz `sitemap.xml` → Submit.

---

## Krok 6 — Deploy

### 6.1 — Build + commit + push

```bash
cd /Users/jakubtiuchty/takma
git add -A
git commit -m "SEO: Fix title/meta dla 5 stron + EM45 telefon zebra + trailing slash"
git push
```

### 6.2 — Vercel auto-deploy

Vercel powinno automatycznie zbudować i deployować po push. Czekaj 2-5 min, sprawdź deployment status: https://vercel.com/[Twój-team]/takma

### 6.3 — Verify produkcja

```bash
# Sprawdź że nowe title/meta są w produkcji
curl -s https://www.takma.com.pl/skanery-kodow-kreskowych-zebra | grep -E "<title>|description"
# Powinno pokazać: "Skaner Zebra cena — 1D/2D..."

curl -s https://www.takma.com.pl/produkt/zebra-em45 | grep -E "<title>|description"  
# Powinno pokazać: "Zebra EM45 — telefon biznesowy / smartfon..."

# Sprawdź trailing slash redirect
curl -I https://www.takma.com.pl/produkt/zebra-zd421/
# Status: 308

# Sprawdź www canonical
curl -I https://takma.com.pl/
# Status: 308 → www.takma.com.pl
```

---

## Krok 7 — GSC Request Indexing (15 min)

Po deployu, dla każdej zmienionej strony **Request Indexing** w GSC:

1. GSC → property `https://www.takma.com.pl/`
2. Pasek wyszukiwania na górze → wpisz URL po kolei (poniżej)
3. Po inspection (30-60s) → kliknij **POPROŚ O ZINDEKSOWANIE**

**Lista 11 URL do request:**
```
https://www.takma.com.pl/poradnik/drukarka-termiczna-vs-termotransferowa
https://www.takma.com.pl/termotransferowe-drukarki-etykiet
https://www.takma.com.pl/drukarki-etykiet-zebra
https://www.takma.com.pl/skanery-kodow-kreskowych-zebra
https://www.takma.com.pl/tablety-przemyslowe
https://www.takma.com.pl/serwis
https://www.takma.com.pl/produkt/zebra-em45
https://www.takma.com.pl/produkt/zebra-tc22
https://www.takma.com.pl/produkt/zebra-tc27
https://www.takma.com.pl/produkt/zebra-tc58
https://www.takma.com.pl/produkt/zebra-tc78
```

Cel:
- Pierwsze 6 — żeby Google szybko zaktualizował title/meta
- Ostatnie 5 — żeby Google zauważył 301 redirect z TC21→TC22, TC26→TC27, TC57x→TC58, TC77→TC78 i przeniósł ranking signals

Limit GSC: ~10-12 request indexing/dzień. Możesz zrobić to w 2 turach jeśli potrzeba.

---

## Krok 8 — Monitoring efektów

### 8.1 — Pierwszy check (po 7 dniach)

GSC → Performance → wybierz property `https://www.takma.com.pl/` → ostatnie 7 dni (po deploy)

Sprawdź czy CTR na tych 6 stronach wzrósł (powinno wzrosnąć z 0.1% do co najmniej 1%).

### 8.2 — Pełny check (po 4 tygodniach)

Wróć do Ahrefs → uruchom GSC tools (jak w naszym audycie):
- Czy te 5 stron ma teraz CTR > 2%?
- Czy clicks wzrosły?
- Czy nowe keywords pojawiły się (np. EM45 dla „telefon zebra")?

Mogę zrobić ten follow-up audit za 4 tyg.

---

## Co NIE jest w tym planie (zostawione na później)

| Zadanie | Powód | Kiedy zrobić |
|---|---|---|
| Cross-product links w description 17 produktów Zebra | Wymaga edycji ~15 entries w products.ts | Po widocznym efekcie disavow + title fixes (4-6 tyg) |
| Blog post na serwis-zebry.pl (3 000 słów) | Większy nakład pracy | Po monitoring fazie |
| Backlink building zewnętrzny | Strategiczne, długoterminowe | Po blog post |
| Strony per konfiguracja produktu | Architektoniczne, najwyższy nakład | Q4 2026 |

---

## Podsumowanie

**Co implementujesz**: 7 zmian w 5 plikach + Vercel config + Request Indexing
**Pliki**:
- `src/data/guides.ts` (1 entry)
- `src/data/products.ts` (5 entries)
- `src/app/serwis/layout.tsx` (1 metadata block)
- `next.config.mjs` (1 line)
- Vercel dashboard (domain config)

**Total time**: ~3-4 godziny pracy + 30 min Request Indexing po deployu.

**Oczekiwany impact**: +30% organic clicks w 4-6 tyg. (z 1 151 do ~1 500 / 90 dni). To przy stałych impressions — jak Google da boost rankingu przez disavow, będzie więcej.

**Risk**: Niski. Wszystkie zmiany to title/meta + standardowe Next.js config. 0 ryzyka uszkodzenia produkcji.

---

## Kolejność wdrożenia

Rekomendacja:

1. **Krok 1** (1.5 godz) — title/meta dla 5 stron + 1.6 dla serwis
2. **Krok 2** (30 min) — EM45 fix
3. **Krok 3** (10 min) — trailing slash
4. **Krok 6** (5 min) — commit + push (Vercel auto-deploy 2-5 min)
5. **Krok 4** (5 min) — Vercel domains check (równolegle z deploy)
6. **Krok 6.3** (5 min) — verify production
7. **Krok 7** (15 min) — Request Indexing 11 URLs
8. **Krok 5** (2 min) — sitemap submit (jeśli jeszcze nie był)

Total: ~3 godziny end-to-end.

Po deployu daj znać. Po 7 dniach sprawdzimy pierwsze efekty.
