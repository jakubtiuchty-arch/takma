# Diagnostyka: takma.com.pl vs omegaprint.pl na fraze "zebra tc22"

**Data analizy:** 2026-04-02  
**Stan:** TAKMA ~poz. 15 | omegaprint ~poz. 6

---

## 1. PRAWDZIWY POWOD PRZEWAGI OMEGAPRINT

### A) Google Merchant Center + Google Shopping (KLUCZOWE)
Omegaprint ma **aktywna integracje z Google Merchant Center** (ID: 139054788, tracking AW-716070055).
TAKMA **nie ma** Google Merchant Center. To jest powod nr 1.

Google faworyzuje sklepy z aktywnym feedem produktowym w wynikach organicznych
dla fraz zakupowych ("zebra tc22" = fraza z intencja zakupowa). Google zna cene,
dostepnosc i warianty omegaprint z feeda — i nagradza to lepszym rankingiem.

### B) Platforma e-commerce vs strona informacyjna
Omegaprint dziala na **Shoper** — pelny sklep z koszykiem, platnoscia, statusem
zamowienia. Google klasyfikuje to jako "sklep" i daje bonus w wynikach zakupowych.

TAKMA to **strona informacyjna z formularzem kontaktowym** (RFQ). Google widzi
brak koszyka, brak platnosci online = nizsza intencja zakupowa w oczach algorytmu.

### C) Recenzje/oceny
Omegaprint: ocena **5 gwiazdek** widoczna na stronie (nawet jesli sztuczna).
TAKMA: **zero recenzji, zero ocen**. Product schema bez aggregateRating.

### D) Wiele URL-i produktowych (efekt "surface area")
Omegaprint ma **3 osobne URL-e** dla TC22:
- /Terminal-danych-Zebra-TC22-bateria-5200mAh/1015
- /Terminal-danych-Zebra-TC22-bateria-3800mAh/1083
- /Terminal-danych-Zebra-TC22-skaner-SE55/1084

Kazdy URL to dodatkowa szansa na ranking. Google moze pokazac najlepiej
dopasowany wariant. TAKMA ma **1 URL** z wariantami na jednej stronie.

---

## 2. CO TAKMA ROBI DOBRZE (i to NIE jest problem)

| Czynnik | TAKMA | omegaprint | Wynik |
|---------|-------|------------|-------|
| Title tag | "Zebra TC22 — kolektor danych..." | "Terminal danych Zebra TC22..." | Remis |
| H1 | "Zebra TC22" | "Terminal danych Zebra TC22..." | TAKMA lepsze (krotsze, exact match) |
| URL slug | /produkt/zebra-tc22 | /pl/p/Terminal-danych-Zebra-TC22.../1015 | TAKMA lepsze |
| Tresc | ~3800 slow, FAQ, porownania | ~300 slow | TAKMA 10x lepsze |
| Schema | Product + FAQ + Breadcrumb | Minimalne/brak | TAKMA lepsze |
| Canonical | Poprawny (www, bez trailing slash) | ? | OK |
| Redirecty | 0-2 hopy, wszystkie -> www bez slash | n/a | OK |
| Internal linking | 132 wzmianki w 6 plikach + poradniki | Slabe | TAKMA lepsze |

**Wniosek:** On-page SEO TAKMA jest znacznie lepsze. Problem NIE lezy w tresci.

---

## 3. CO NAPRAWIC (priorytet malejacy)

### PRIORYTET 1: Google Merchant Center (wplyw: +5-10 pozycji)
**Czas: 1-2 tygodnie na setup**

1. Zarejestrowac Google Merchant Center
2. Stworzyc feed produktowy (XML/JSON) z cenami, SKU, dostepnoscia
3. Nie musisz miec koszyka — Merchant Center dziala z "free product listings"
   nawet bez e-commerce (Surface across Google)
4. Dodac dane strukturalne `Offer` z `availability` i `priceValidUntil`
5. Podlaczyc feed do Google Ads (nawet bez kampanii — sam feed daje boost)

**To jest JEDYNA zmiana ktora moze przesunac z poz. 15 na poz. 5-8.**

### PRIORYTET 2: og:type — zmiana z "article" na "product" (wplyw: maly, ale latwy)
**Czas: 5 minut**

W `src/app/produkt/[slug]/page.tsx` linia 85:
```
type: 'article'  ->  type: 'website'
```
Lepiej: uzyj `og:type = product` (wymaga dodania product:* metatags, ktore juz
czesciowo sa na liniach 92-95).

### PRIORYTET 3: Dodaj aggregateRating do Product schema (wplyw: rich snippets)
**Czas: 1-2 godziny**

Nawet jesli nie masz recenzji klientow, mozesz dodac "ocena eksperta" lub
"ocena redakcji" do schema. Albo lepiej: zbierz 3-5 prawdziwych opinii od
klientow i dodaj ReviewRating. Gwiazdki w SERP = wyzszy CTR = lepszy ranking.

### PRIORYTET 4: Rozwazyc osobne URL-e dla kluczowych wariantow
**Czas: kilka godzin, ryzykowne**

Rozwazyc stworzenie:
- /produkt/zebra-tc22-se55 (wariant ze skanerem SE55)
- /produkt/zebra-tc22-se4710 (wariant standardowy)

ALE: to moze spowodowac kanibalizacje. Bezpieczniejsza opcja to zostac
przy jednym URL i wzmocnic go przez Merchant Center.

### PRIORYTET 5: Backlinki (wplyw: dlugoterminowy)
Omegaprint ma DR:0, TAKMA prawdopodobnie tez niskie. Ale omegaprint
kompensuje to feedem Merchant Center i platformą sklepowa.

---

## 4. CZEGO NIE ROBIC

- **NIE dodawaj wiecej tresci** — 3800 slow to juz za duzo, Google preferuje
  strony produktowe ktore szybko odpowiadaja na pytanie "ile kosztuje, gdzie kupic"
- **NIE zmieniaj URL-a** — /produkt/zebra-tc22 jest idealny
- **NIE twórz sztucznych recenzji** — Google wykrywa i karze

---

## 5. KANIBALIZACJA — BRAK PROBLEMU

Zapytanie `zebra tc22 site:takma.com.pl` pokazuje **1 glowny wynik**
(produkt/zebra-tc22). Strony poradnikowe (tc22-vs-tc27, top-10-terminali)
nie kanibalizuja — maja inne frazy docelowe. OK.

---

## 6. TIMELINE OCZEKIWAN

| Akcja | Czas wdrozenia | Efekt w SERP |
|-------|----------------|--------------|
| Google Merchant Center + feed | 1-2 tyg | 4-8 tyg po zatwierdzeniu feeda |
| og:type fix | 5 min | 2-4 tyg (po reindeksacji) |
| aggregateRating | 1-2h | 2-4 tyg |
| **Realny cel** | | **Pozycja 5-8 w ciagu 2-3 miesiecy** |

---

## PODSUMOWANIE

**Omegaprint wygrywa NIE dlatego, ze ma lepsza strone (bo nie ma). Wygrywa
dlatego, ze Google traktuje go jako "sklep" a TAKMA jako "strone informacyjna".**

Google Merchant Center to game-changer. Bez niego TAKMA bedzie zawsze przegrywac
z gorszymi stronami ktore maja feed produktowy, koszyk i gwiazdki w SERP.
