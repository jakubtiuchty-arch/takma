# On-Page.ai dla TAKMA — analiza zastosowania

**Data**: 3 czerwca 2026
**Kontekst**: artykuł "How To Automate Real SEO Work With Live SERP Data" — 17 przepisów do automatyzacji SEO
**Zastosowanie**: takma.com.pl (+ siostrzane serwis-zebry.pl, microsites)

---

## 1. Czym to się różni od tego, co już mamy w Ahrefs

Wartość On-Page.ai dla nas leży w **trzech rzeczach, których Ahrefs nie daje**:

**Po pierwsze — entity gap analysis per pojedyncza strona.**
Ahrefs mówi: "fraza 'etykiety termiczne' ma 600 wyszukań i KD 0". On-Page.ai mówi: "Twoja strona /etykiety-termiczne ma 73% pokrycia entities względem top 10 SERP. Brakuje Ci konkretnie: BOPP, dwell time, top-coat, 1-mil PET, BS5609 Section 2". To jest poziom konkretu, którego nie da Ci żadne narzędzie keywordowe.

**Po drugie — automatyczna detekcja overlap z konkurencją.**
On-Page.ai porównuje Twoją stronę z 3 stronami które aktualnie rankują w top 10 dla tej frazy. Pokazuje gdzie konkurencja przegrywa, a gdzie wygrywa. Ahrefs daje keyword gap (jakie frazy mają oni, których my nie mamy). On-Page.ai daje entity gap (jakie pojęcia oni mają w tekście, których my nie mamy).

**Po trzecie — pętla "skanuj-edytuj-rescanuj"** w ramach jednego agenta.
Agent w Codex/Claude Code: skanuje stronę przez On-Page.ai, dodaje brakujące entities w naturalny sposób w kodzie, ponownie skanuje, sprawdza czy `related_important entity score` jest wyższy od konkurencji. To kompletna pętla "tuningu strony do top 10" zamiast jednorazowej rekomendacji.

**Co On-Page.ai NIE zastąpi**:
- Ahrefs (volume/KD/intent/backlinks) — to inne dane
- GSC (realne pozycje, CTR, kliknięcia) — to inne dane
- Naszych audytów strukturalnych (schema markup, hierarchia H1/H2/H3, dateModified) — On-Page.ai patrzy na entities w tekście, nie na strukturę kodu

To **uzupełnienie**, nie zamiana.

---

## 2. Strategiczne dopasowanie do TAKMA

### Gdzie pasuje TAK

**`/etykiety-termiczne` — strona klasycznie zacięta (stuck page)**
GSC: 362 impresje/mies, **avg pozycja 26,6**, 4 kliknięcia. Czyli Google pokazuje stronę na końcu drugiej strony wyników. Wszystkie nasze rekomendacje strukturalne są już zrobione (TechArticle, HowTo, FAQPage, 24 linki wewnętrzne). To **klasyczny przypadek dla recipe #1 ("Recover a Stuck Page in ONE Command")** lub recipe #11 ("Why Is This Page Not Ranking?").

Bo skoro struktura jest dobra a pozycja słaba — najprawdopodobniejszy powód to **niedoreprezentowanie entities** w tekście względem konkurencji. To dokładnie to, co On-Page.ai mierzy.

**`/etykiety-termotransferowe-zebra` po launchu — nowe strony bez historii**
Świeże strony potrzebują wiedzieć "co konkretnie napisać żeby trafić w top 10". On-Page.ai pokaże entities z top 10 dla "etykiety termotransferowe zebra" — natychmiastowa lista co dopisać do landingu i podstron.

**`/tasmy-termotransferowe` po launchu — pełna paleta produktów technicznych**
Taśmy mają długą listę technicznych pojęć (wax, wax-resin, resin, dwell time, OS, edge wear, back-coating). Konkurencja w Polsce słabo to opisuje. On-Page.ai pokaże czy mamy pełną reprezentację entities czy są luki.

**Wewnętrzna kanibalizacja — recipe #17 ("Local Cannibalization Checker", można zmodyfikować)**
GSC pokazuje że `/etykiety-termiczne` rankuje na "etykiety termotransferowe zebra" zamiast `/etykiety-termotransferowe-zebra`. Recipe #17 jest po local, ale logika wykrywania kanibalizacji jest taka sama — sprawdza title/H1/entities/internal links dwóch stron na tę samą frazę i mówi która powinna być primary, którą trzeba zdyferencjować.

**Internal linking site-wide — recipe #2**
TAKMA ma >100 stron produktów + 5 stron kategorii. Internal linking jest gęsty w kategoriach, ale 582 strony /produkt/* są słabo połączone z kategoriami. Recipe #2 buduje manifest wszystkich URL-i i dodaje brakujące linki kontekstowe. To realne usprawnienie.

**Site-wide refresh starych stron — recipe #5**
TAKMA ma blog (`/poradnik/*`) z artykułami sprzed 2-3 lat. Niektóre rankują (np. "drukarka termiczna a termotransferowa" pos 8). On-Page.ai pokaże co dopisać żeby dopchnąć je do top 3.

### Gdzie NIE pasuje

**Recipes #14, #15, #16 (Local SEO)** — TAKMA nie jest lokalna. To są e-commerce B2B działający national. Local SEO nie ma znaczenia.
- **Wyjątek**: te recipes **MAJĄ ZASTOSOWANIE dla serwis-zebry.pl** — siostrzana domena (Kraków, lokalny serwis). Tam recipe #16 (GBP alignment) i #15 (Local tuning) są wprost idealne.

**Recipes #9 i #10 (Client Audit PDF)** — to pod klientów agencji SEO. TAKMA to własna strona, nie potrzeba PDF-ów dla siebie.

**Recipe #13 (Image/Alt)** — TAKMA ma w większości dobre alt-texts (zdjęcia produktów Zebra z poprawnymi opisami). Marginalna wartość.

---

## 3. Top 5 konkretnych zastosowań dla TAKMA (priorytety)

### Priorytet 1 — `/etykiety-termiczne` jako stuck page (Recipe #1 lub #11)

**Status**: strona istnieje od 2024, pos avg 26, ma kompletny schema, brakuje rankingu.

**Hipoteza**: niedoreprezentowane entities względem top 10 SERP.

**Działanie**: uruchom recipe #1 ("Recover a Stuck Page"). Agent zeskanuje stronę, porówna z top 10 SERP, doda brakujące entities z importance 9-10 w istniejącym tekście (bez przepisywania), zwaliduje przez rescan.

**Spodziewany efekt po 4-8 tyg**: pozycja z 26 do 10-15. To znaczy z 362 impr/4 clicks → 700-1 200 impr/40-100 clicks.

**Koszt czasu**: agent biegnie 15-30 minut. Człowiek waliduje wyniki 30 minut. Razem ~1h.

### Priorytet 2 — Kanibalizacja DT vs TT (zmodyfikowany Recipe #17)

**Status**: `/etykiety-termiczne` rankuje na frazy które powinny iść do `/etykiety-termotransferowe-zebra`. To 173 + 117 impr/mies marnowane.

**Działanie**: uruchom diagnostykę kanibalizacji — agent porówna title/H1/entities/internal links obu stron i pokaże co zrobić by zdyferencjować je w oczach Google. Konkretnie zaproponuje:
- Które entities usunąć z `/etykiety-termiczne` (żeby nie była "TT-like")
- Które internal links przekierować
- Czy wymagany jest canonical lub redirect na poziomie strony

**Spodziewany efekt**: po 8 tyg Google rozpoznaje `/etykiety-termotransferowe-zebra` jako primary URL na frazę "etykiety termotransferowe zebra". Pozycja z 16 (stara strona) do 5-8 (nowa strona).

**Koszt czasu**: 30 min agent + 1h człowiek (decyzje strategiczne, nie automatyczne).

### Priorytet 3 — Pre-launch tuning `/etykiety-termotransferowe-zebra` i `/tasmy-termotransferowe` (Recipe #7)

**Status**: 2 landingi + 28 podstron serii. Pre-launch — nie ma jeszcze rankingu, ale chcemy wystartować ze stronami które od dnia 1 mają entity coverage = top 10 SERP.

**Działanie**: uruchom recipe #7 ("Standard Optimization, Single Page") dla każdego landingu. Pomijając serie/[slug] dla początku (28 stron to zbyt dużo, lepiej zrobić top 5).

Agent dla każdej strony zeskanuje, doda brakujące entities z importance 7-10, podbije relevance powyżej konkurencji, zwaliduje przez rescan.

**Spodziewany efekt**: nowe strony startują z lepszym entity coverage niż konkurencja. Po 4-8 tyg pozycja w top 10-15 zamiast 30-50 dla nowych URL-i.

**Koszt czasu**: 30 min per strona × 7 stron (2 landingi + 5 top serii) = 3,5h agent + 2h człowiek na walidację.

### Priorytet 4 — Site-wide refresh blog/poradnik (Recipe #5)

**Status**: TAKMA ma blog z artykułami "drukarka termiczna vs termotransferowa", "co to drukarka termiczna" itp. Niektóre rankują w top 5-10 ale są stare (2-3 lata bez update).

**Działanie**: uruchom recipe #5 dla wszystkich URL-i z `/poradnik/*` posortowanych od najstarszych. Agent w batchach po 10 doda brakujące entities + 1 paragraf "co nowego w 2026" jeśli content jest cieńszy od konkurencji.

**Spodziewany efekt**: artykuły z pozycji 8-10 idą do 3-5. Z 200-500 impr → 1 000-3 000 impr per artykuł.

**Koszt czasu**: agent biegnie nocą (1-2 godziny). Człowiek waliduje rano (2-3 godziny).

### Priorytet 5 — serwis-zebry.pl GBP alignment (Recipe #16) i Local Tuning (Recipe #15)

**Status**: serwis-zebry.pl to siostrzana domena, **lokalna** (Kraków + okolice). Recipe #16 i #15 są wprost dla niej.

**Działanie**:
- Recipe #16: porównaj GBP "TAKMA — Autoryzowany Serwis Zebra" z `/serwis-drukarek-zebra` na takma.com.pl i z serwis-zebry.pl. Sprawdź NAP alignment, kategorie GBP vs services na stronie.
- Recipe #15: local tuning strony `/serwis-drukarek-zebra` dla frazy "serwis drukarek Zebra Kraków".

**Spodziewany efekt**: pozycja w map pack + local 3-pack dla "serwis drukarek Zebra Kraków" i "naprawa drukarek termicznych Kraków" (już mamy 11 pos w GSC).

**Koszt czasu**: 1h agent + 1h człowiek.

---

## 4. Co trzeba żeby zacząć (setup)

### Wymagane
1. **Konto na On-Page.ai** — subskrypcja płatna, ich strona to https://on-page.ai. Nie wiem ile kosztuje — sprawdź pricing. Z artykułu wynika że mają model "kredyty na skany" — skany Lite/Standard/Deep zużywają różne ilości.

2. **API key** do On-Page.ai z poziomu ich panelu.

3. **MCP connector** — https://api.on-page.ai. Nie ma w Anthropic MCP registry (sprawdziłem) — to znaczy że jest custom MCP, trzeba go dodać ręcznie. W Cowork mode to się robi w ustawieniach connectors → Add custom MCP.

4. **Środowisko agentowe** — Claude Code (przez terminal) lub Cowork mode (jak teraz). **Cowork zadziała**, bo agent czyta repo lokalnie i ma dostęp do MCP. Codex GPT 5.5 też zadziała, ale skoro już pracujesz w Cowork, nie ma sensu zmieniać.

### Opcjonalne ale przydatne
5. **Git workflow** — recipes #2/#5/#8 modyfikują dziesiątki stron. Najlepiej żeby agent pracował na osobnym branchu, robił commity per batch, a Ty review-ujesz przez `git diff` przed mergem do main. Inaczej jeden bad batch może rozjebać 50 stron.

6. **Backup repo** — przed pierwszym uruchomieniem agenta site-wide, snapshot Git. Jeden zły refresh = wracasz do snapshotu.

7. **Środowisko testowe** — wdroż recipes najpierw na Vercel preview branchu, nie bezpośrednio na production. Pierwszy raz uruchamiasz Recipe #1 — zrób to na preview, zobacz co agent zmienia, dopiero potem merge.

### Czego NIE potrzeba
- Codex/OpenAI — Claude Code wystarczy
- Wynajmu dodatkowych ludzi — to jest workflow 1-osobowy z review
- Dodatkowych narzędzi SEO (Surfer, Frase, MarketMuse) — On-Page.ai pokrywa entity analysis

---

## 5. Realistyczna ocena ROI

**Co realnie zyskujesz** (zakładając że subskrypcja On-Page.ai ~50-200 zł/mies):

| Scenariusz | Praca własna teraz | Praca z On-Page.ai | Zaoszczędzony czas |
|---|---|---|---|
| Optymalizacja 1 stuck page | 8h research + edycja | 1h agent + walidacja | **7h/strona** |
| Pełen audit kanibalizacji 2 stron | 4h porównań | 30 min agent + 1h | **2,5h** |
| Internal linking site-wide (100 stron) | 40-60h ręcznie | 4-6h agent + walidacja | **35-50h** |
| Refresh 20 starych artykułów | 30h | 4-6h agent + walidacja | **24h** |

**Łącznie ~70-100h pracy oszczędzonej** w pierwszym miesiącu, jeśli rozwiniesz to do site-wide. Plus efekt biznesowy — pozycje w top 10 zamiast 20-30, czyli realny ruch.

**Co MOŻE nie zadziałać dobrze**:

**Polskie entities** — On-Page.ai jest narzędziem US-centric. Polskie SERPy mogą mieć inny zestaw "important entities" niż angielskie. Konkretnie: dla frazy "etykiety termiczne" w PL top 10 to inni gracze niż w USA. **Nie wiem jak dobrze ich Google entity extractor radzi sobie z polskim**. To ryzyko, którego nie da się sprawdzić bez pilotażu na 1-2 stronach.

**Brand entities** — TAKMA, Zebra, ZD230, ZT411 — czy On-Page.ai rozpoznaje, że są "important entities" w niszy autoid PL? Najpewniej dla Zebra tak (global brand), dla ZD230 nie wiem.

**Anglicyzmy w sklepie** — jeśli On-Page.ai zarekomenduje "ribbon" zamiast "taśma barwiąca" bo top 10 SERP używa "ribbon" — naruszamy PREFERENCJE-jak-pisac.md. W recipe trzeba dodać linijkę: *"Preferuj polskie odpowiedniki anglojęzycznych terminów"*. Inaczej agent doda "ribbon", "wax", "resin" wprost do tekstu.

**Schema vs tekst** — On-Page.ai patrzy na widoczny tekst. Jeśli definicje są w `DefinedTerm` schema ale nie w body, On-Page.ai ich nie zauważy. To znaczy: musimy mieć **i** schema **i** widoczny tekst z tymi entities. Sami planowaliśmy oba.

---

## 6. Konkretny plan użycia (jeśli zdecydujesz się zacząć)

**Tydzień 1 (pilotaż)**:
1. Załóż konto On-Page.ai, dokup najmniejszy pakiet kredytów
2. Dodaj MCP do Cowork mode (custom MCP, URL: https://api.on-page.ai)
3. Uruchom recipe #11 (diagnostyka) na `/etykiety-termiczne` — bezpieczne, agent niczego nie edytuje, tylko diagnozuje
4. Przejrzyj raport — czy On-Page.ai dobrze rozpoznaje polskie entities, czy konkurenci w top 10 SERP to faktycznie ci, których byśmy oczekiwali
5. **Decyzja**: czy dane są wiarygodne → kontynuujemy, czy nie → zwracamy

**Tydzień 2 (jeśli pilotaż OK)**:
1. Uruchom recipe #1 na `/etykiety-termiczne` — agent edytuje, ale na branchu testowym
2. Zrób PR review zmian — czy nie wszedł "ribbon", "wax" itp.; czy zmiany są naturalne; czy nie zniknęło nic wartościowego
3. Merge do main jeśli OK
4. Czekamy 2-3 tyg, sprawdzamy GSC czy pozycja się ruszyła z 26 → ~15-18

**Tydzień 5 (jeśli wzrost widoczny)**:
1. Skalujemy: recipes #7 dla landingów TT, recipe #5 dla blogów, recipe #2 dla site-wide linkowania
2. Recipe #16/#15 dla serwis-zebry.pl

**Tydzień 8 (review)**:
1. Sprawdzamy GA4 + GSC: ile nowych pozycji w top 10, ile ruchu, ile leadów
2. Decyzja czy subskrypcja On-Page.ai się opłaca długoterminowo

---

## 7. Ryzyko — co odradzam

**Nie uruchamiaj recipe #2/#5/#8 (site-wide) bez pilotażu na 1-2 stronach.** Agent edytujący 100 stron na raz, gdy źle skonfigurowany, może wstawić "ribbon" zamiast "taśma barwiąca" w 100 miejscach. Wycofanie tego = godziny pracy.

**Nie uruchamiaj recipe #9/#10 (Audit PDF) dla TAKMA.** To nie są pod TAKMA, są pod agencje SEO sprzedające audyty klientom. Marginalne dla naszego use-case.

**Nie polegaj na On-Page.ai jako jedynym źródle prawdy dla SEO.** GSC pokazuje realny ranking. Ahrefs pokazuje keyword universe. On-Page.ai pokazuje **entity coverage względem konkurencji** — to jedna trzecia obrazu. Bez tych dwóch pozostałych narzędzi On-Page.ai jest jak tachometr w samochodzie bez deski rozdzielczej.

**Nie używaj recipe-ów jako "set and forget".** Agent edytuje pliki w repo. Ty robisz code review każdej PR-ki. To nie jest narzędzie do automatyzacji bez review.

---

## 8. Wniosek

**TAK, On-Page.ai pasuje do TAKMA** — szczególnie dla:
- Recovery `/etykiety-termiczne` (stuck page)
- Pre-launch tuning landingów TT i taśm
- Site-wide refresh blogów /poradnik/*
- Internal linking na 100+ stronach
- Local SEO dla serwis-zebry.pl

**Krytyczne ostrzeżenia**:
- Pilotaż przed scale (recipe #11 na 1 stronie, potem decyzja)
- Polskie entities — sprawdź w pilotażu czy działa dobrze
- Anglicyzmy — wymuszaj polszczyznę w prompcie recipe
- Code review każdej PR-ki, nie automatyzacja set-and-forget

**Łączny realistyczny ROI**: 70-100h zaoszczędzonej pracy + 3-5x wzrost ruchu organicznego w niszy etykiet/taśm w 8 tygodni — **jeśli pilotaż się powiedzie**.

**Pierwszy krok**: pilotaż recipe #11 na `/etykiety-termiczne` (diagnostyka, agent nic nie edytuje). To kosztuje 1 skan ~kilka dolarów i 30 minut Twojego czasu. Jeśli raport wygląda sensownie — idziemy dalej. Jeśli nie — wycofujemy się.

Mogę pomóc z setupem MCP-a w Cowork i napisaniem custom promptu z polskimi wytycznymi (no-anglicyzmy, no-emoji, B2B netto), jak tylko zdecydujesz że chcesz to przetestować.
