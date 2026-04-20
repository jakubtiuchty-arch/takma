# Analiza kanibalizacji: Karta produktu vs Poradnik — Zebra ET401

## Dwa URL-e, jeden produkt

| | Karta produktu | Poradnik |
|---|---|---|
| **URL** | /produkt/zebra-et401 | /poradnik/zebra-et401-tablet-przemyslowy-nowej-generacji |
| **Title** | Tablet przemysłowy Zebra ET401 — Wi-Fi 7, IP68, RFID UHF, Android 15 | Zebra ET401 — tablet przemysłowy z RFID UHF i Wi-Fi 7 \| Poradnik 2026 |
| **Meta desc** | (228 zn.) Zebra ET401 — następca ET40... | (261 zn.) Zebra ET401 — następca ET40/ET45... |
| **og:type** | website ❌ | article ✅ |
| **Schema** | Product + FAQPage | TechArticle + FAQPage |
| **FAQ** | 10 pytań | 10 pytań (innych!) |

---

## Diagnoza: CO się kanibalizuje

### 🔴 Krytyczne nakładki

**1. Title tagi — niemal identyczne frazy:**
- Produkt: „**Tablet przemysłowy Zebra ET401** — Wi-Fi 7, IP68, RFID UHF, Android 15"
- Poradnik: „**Zebra ET401** — **tablet przemysłowy** z RFID UHF i Wi-Fi 7 | Poradnik 2026"
- Problem: Google widzi dwa title z tą samą frazą „tablet przemysłowy Zebra ET401 + Wi-Fi 7 + RFID UHF" — nie wie, który wyświetlić

**2. Meta description — oba zaczynają się identycznie:**
- Produkt: „**Zebra ET401 — następca ET40**..."
- Poradnik: „**Zebra ET401 — następca ET40/ET45**..."
- Problem: Oba opisy próbują złapać te same frazy, oba mają keyword stuffing

**3. Frazy, na które OBYDWIE strony próbują rankować:**

| Fraza | Karta produktu | Poradnik | Kanibalizacja? |
|---|---|---|---|
| zebra et401 | ✅ title, H1, meta | ✅ title, H1, meta | 🔴 TAK |
| tablet przemysłowy zebra et401 | ✅ title | ✅ title | 🔴 TAK |
| et401 cena | ✅ FAQ, warianty | ✅ FAQ, tabela cenowa | 🔴 TAK |
| et401 vs et40 | ✅ FAQ | ✅ H2, tabela, FAQ | 🟡 CZĘŚCIOWO |
| et401 rfid | ✅ title, treść | ✅ H1, H2, treść | 🟡 CZĘŚCIOWO |
| et401 wifi 7 | ✅ title | ✅ title, H2 | 🟡 CZĘŚCIOWO |
| et401 ip68 | ✅ title, treść | ✅ H2, treść | 🟡 CZĘŚCIOWO |
| et401 vs samsung | ❌ brak | ✅ H2, tabela, FAQ | ✅ OK — rozdzielone |
| et401 migracja z et40 | ❌ brak | ✅ H2, treść | ✅ OK — rozdzielone |
| et401 ai touch | ❌ brak | ✅ H2, treść | ✅ OK — rozdzielone |
| et401 battery free | ✅ FAQ, treść | ✅ treść | 🟡 CZĘŚCIOWO |

**Werdykt: ~60% fraz się nakłada. To zbyt dużo.**

---

## Strategia naprawy: Rozdzielenie intentów

Klucz to jasny podział:
- **Karta produktu** = **intent transakcyjny** → „chcę kupić / sprawdzić cenę / porównać warianty"
- **Poradnik** = **intent informacyjny** → „chcę zrozumieć / porównać z konkurencją / zdecydować czy migrować"

### KROK 1: Zmienić title tagi (najważniejsze!)

**Karta produktu — zostawić transakcyjny:**
```
Zebra ET401 — tablet przemysłowy | 11 wariantów od 2 410 zł | TAKMA
```
Logika: cena, warianty, brand sklepu = transakcyjny intent. Usunięte: Wi-Fi 7, IP68, RFID UHF (te cechy niech ciągnie poradnik).

**Poradnik — wzmocnić informacyjny:**
```
Zebra ET401 — kompletny przewodnik: RFID, Wi-Fi 7, porównanie z konkurencją | 2026
```
Logika: „przewodnik", „porównanie" = informacyjny intent. Dodane: sygnał porównania z konkurencją.

### KROK 2: Zmienić meta description

**Karta produktu (~155 zn., transakcyjny):**
```
Zebra ET401 — tablet przemysłowy 8″ i 10″ z Android 15. 11 konfiguracji Wi-Fi i 5G od 2 410 zł netto. Sprawdź warianty, ceny i zamów w TAKMA.
```
Kluczowe frazy: warianty, ceny, zamów — transakcyjne CTA.

**Poradnik (~155 zn., informacyjny):**
```
Czym Zebra ET401 różni się od ET40 i Samsung Tab Active5? Przewodnik po RFID UHF, Wi-Fi 7, AI i migracji. Tabele porównawcze i kalkulacja kosztów.
```
Kluczowe frazy: „czym różni się", „przewodnik", „porównanie", „kalkulacja" — informacyjne.

### KROK 3: Rozdzielić FAQ (częściowo już zrobione!)

Obecny stan jest dobry — 10 pytań na karcie i 10 INNYCH na poradniku. Ale jest jeden duplikat tematyczny:

| Temat | Karta produktu | Poradnik |
|---|---|---|
| Cena ET401 | „Jaka jest cena tabletu Zebra ET401?" | „Ile kosztuje Zebra ET401?" |
| ET401 vs ET40 | „Czym różni się Zebra ET401 od ET40?" | „Czym ET401 różni się od ET40?" |

**Rekomendacja:**
- Cenę zostaw na **karcie produktu** (intent transakcyjny) — usuń z poradnika lub zmień na „Ile kosztuje wdrożenie floty ET401?" (inna fraza, informacyjny intent)
- Porównanie vs ET40 zostaw na **poradniku** (intent informacyjny, tabela) — na karcie produktu zmień na „Jakie akcesoria ET40 pasują do ET401?" (bardziej transakcyjne)

### KROK 4: Dodać cross-linking między stronami

Na **karcie produktu** dodaj widoczny link:
> 📖 Przeczytaj kompletny przewodnik: [Zebra ET401 — wszystko co musisz wiedzieć przed zakupem](/poradnik/zebra-et401-tablet-przemyslowy-nowej-generacji)

Na **poradniku** (już jest, ale wzmocnij):
> 🛒 Gotowy do zakupu? [Sprawdź warianty i ceny Zebra ET401 →](/produkt/zebra-et401)

To jasny sygnał dla Google: „karta to strona zakupowa, poradnik to strona informacyjna".

### KROK 5: Wewnętrzne anchor texty

Kiedy linkujesz DO karty produktu z innych stron (np. z poradników, artykułów):
- Używaj anchor textów transakcyjnych: „ceny Zebra ET401", „kup Zebra ET401", „warianty ET401"

Kiedy linkujesz DO poradnika z innych stron:
- Używaj anchor textów informacyjnych: „porównanie ET401 vs Samsung", „przewodnik po ET401", „migracja z ET40 na ET401"

---

## Implementacja w kodzie

### products.ts — zmiana seoTitle i seoDescription:

```typescript
// BYŁO:
seoTitle: 'Tablet przemysłowy Zebra ET401 — Wi-Fi 7, IP68, RFID UHF, Android 15',
seoDescription: 'Zebra ET401 — następca ET40. Wi-Fi 7, IP68, Qualcomm Dragonwing Q-6690...',

// POWINNO BYĆ:
seoTitle: 'Zebra ET401 — tablet przemysłowy | 11 wariantów od 2 410 zł | TAKMA',
seoDescription: 'Zebra ET401 — tablet przemysłowy 8″ i 10″ z Android 15. 11 konfiguracji Wi-Fi i 5G od 2 410 zł netto. Sprawdź warianty, ceny i zamów w TAKMA.',
```

### guides.ts — zmiana seoTitle i seoDescription:

```typescript
// BYŁO:
seoTitle: 'Zebra ET401 — tablet przemysłowy z RFID UHF i Wi-Fi 7 | Poradnik 2026',
seoDescription: 'Zebra ET401 — następca ET40/ET45. Tablet przemysłowy z RFID UHF, Wi-Fi 7, IP68, AI, 8 lat wsparcia. Porównanie z Samsung Tab Active5 i Honeywell EDA10A. Tablet do magazynu, tablet wzmocniony IP68. Tablet enterprise Zebra ET401. PN: ET4010A-001C1B0P-A6.',

// POWINNO BYĆ:
seoTitle: 'Zebra ET401 — kompletny przewodnik: RFID, Wi-Fi 7, porównanie z konkurencją | 2026',
seoDescription: 'Czym Zebra ET401 różni się od ET40 i Samsung Tab Active5? Przewodnik po RFID UHF, Wi-Fi 7, AI i migracji. Tabele porównawcze i kalkulacja kosztów.',
```

---

## Efekt po zmianach

**Dla Google Search:**
- Zapytanie „zebra et401 cena" → karta produktu (transakcyjny title z ceną)
- Zapytanie „zebra et401 vs samsung" → poradnik (informacyjny title z „porównanie")
- Zapytanie „zebra et401" (ogólne) → karta produktu (transakcyjny, z ceną w title — wyższy CTR)
- Zapytanie „zebra et401 rfid" → poradnik (informacyjny, z dedykowaną sekcją RFID)
- Zapytanie „zebra et401 migracja z et40" → poradnik (unikalna treść)
- Zapytanie „tablet przemysłowy zebra" → karta produktu (Product schema z cenami)

**Dla AI (ChatGPT, Gemini, Perplexity):**
- Pytanie „ile kosztuje Zebra ET401" → karta produktu (AggregateOffer w schema)
- Pytanie „czym ET401 różni się od Samsung" → poradnik (TechArticle z tabelą porównawczą)
- Pytanie „czy warto kupić Zebra ET401" → poradnik (kompleksowa analiza)

---

## Checklist zmian

- [ ] Zmienić `seoTitle` w products.ts (ET401) — transakcyjny z ceną
- [ ] Zmienić `seoDescription` w products.ts (ET401) — transakcyjny, ~155 znaków
- [ ] Zmienić `seoTitle` w guides.ts (ET401) — informacyjny z „przewodnik" i „porównanie"
- [ ] Zmienić `seoDescription` w guides.ts (ET401) — informacyjny, ~155 znaków, bez keyword stuffing
- [ ] Zmienić FAQ #1 na poradniku z „Ile kosztuje" na „Ile kosztuje wdrożenie floty ET401?"
- [ ] Zmienić FAQ #2 na karcie z „Czym różni się od ET40" na „Jakie akcesoria ET40 pasują do ET401?"
- [ ] Dodać link do poradnika na karcie produktu (np. w sekcji opisu lub nad FAQ)
- [ ] Wzmocnić CTA z poradnika do karty produktu
- [ ] Zweryfikować anchor texty w linkach wewnętrznych
