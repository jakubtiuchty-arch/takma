# Aktualizacja disavow takma.com.pl — instrukcja v4 (czwarta fala SEOExpress)

**Data**: 7 czerwca 2026
**Powód**: Czwarta fala ataku PBN SEOExpress + 4 inne spamy (.shop, .co.in, .info)

---

## Co się stało (skrót)

- **Po wgraniu v3 (31 maja) atak nie ustąpił** — pojawiają się nowe domeny SEOExpress co 1-2 dni
- **Refdomains rosną**: 354 (30 maja) → **376 (6 czerwca)** = +22 nowych w 7 dni
- **Ale**: 15 z tych 22 to domeny **już wgrane do v3** — Ahrefs po prostu zaindeksował je z opóźnieniem
- **Faktycznie nowych spamów: 13** — wszystkie do dopisania w v4
- **DR pozostaje stabilny: 26** — to ważna informacja. Atak nie powoduje dalszych spadków od 20 maja, plateau trzyma się.

## Co dodajemy w v4 (13 nowych domen)

**9 nowych SEOExpress `.store`** (wzorzec już znany):

```
domain:professional-seoexpress-marketing-studio.store
domain:seoexpress-pbn-experts.store
domain:supreme-anchor-text-provider-seoexpress.store
domain:seoexpress-master-digital-portal.store
domain:seoexpress-best-seo-firm.store
domain:premium-tier-1-company-seoexpress.store
domain:elite-domain-seoexpress-consultants.store
domain:supreme-dofollow-seoexpress-hub.store
domain:seoexpress-white-hat-group.store
```

**4 inne spamy** (drobne ataki dodatkowe):

```
domain:lixil-reformshop.shop      (DR 35, sklepowy spam japoński)
domain:homefinance.co.in          (DR 1.9, dofollow! indyjski spam)
domain:preparation.co.in          (DR 0.3, dofollow! indyjski spam)
domain:cheapsmmprovider.info      (DR 0, dofollow! SMM spam)
```

**Łącznie v4**: 527 unikalnych domen (v3: 514, +13).

## Co NIE dodaję (nawet jeśli pojawiło się jako "nowa refdomain")

| Domena | DR | Traffic | Powód braku w disavow |
|---|---|---|---|
| **cityon.pl** | 28 | 2 881 | Realna polska strona z ruchem — może być organic mention, NIE disavow |

## Plik gotowy do wgrania

**Lokalizacja**: `/Users/jakubtiuchty/takma/disavow-merged-final-v4.txt`
**Wielkość**: ~23 KB, **527 domen**

---

## Jak wgrać do Google Search Console — krok po kroku

1. Wejdź na: **https://search.google.com/search-console/disavow-links**
2. Wybierz właściwość: **takma.com.pl**
3. Kliknij **"Wybierz plik z odrzuconymi linkami"** (Choose file)
4. Wybierz plik: **`/Users/jakubtiuchty/takma/disavow-merged-final-v4.txt`**
5. Potwierdź wczytanie. Google pokaże komunikat: *"Plik zawiera 527 domen i 0 URL-i"*
6. Gotowe.

**Przypomnienie**: Google **zastępuje cały plik** przy każdym wgraniu. Wersja v4 zawiera wszystkie poprzednie 514 domen + 13 nowych. Niczego nie tracisz, niczego nie musisz dodawać ręcznie.

---

## Co to znaczy biznesowo

**To nie jest gorszy atak niż poprzedni** — to ten sam atakujący (SEOExpress PBN) z tym samym wzorcem domen. Po wgraniu v3 atak nie ustał, ale:

- **DR stabilny na 26** od 20 maja — algorytm Google nie zalicza tych linków jako szkodliwych (są oznaczone w GSC przez disavow)
- **Pozycje rankingowe nie spadają** (potwierdzone w GSC dla głównych fraz TAKMA)
- **Sklep pracuje normalnie** — brak realnych konsekwencji biznesowych

**Co realnie się dzieje**: SEOExpress (chiński/azjatycki SEO PBN) regularnie wzmiankuje TAKMA w swojej generowanej przez AI marketingowej "wedzie" o usługach SEO — i to z domen DR 34, których my Disavowujemy. Koszt ataku dla nich: ~$1 za domenę. Koszt obrony dla nas: 30 minut na disavow co 7-14 dni.

**Następna spodziewana fala**: 14-21 czerwca (cykl ~14 dni). Jeśli wzorzec się powtórzy, generujemy v5 wtedy.

---

## Co możemy zrobić proaktywnie

**1. Częstotliwość monitoringu** — zamiast czekać aż user zgłosi atak, zaplanować cykliczne sprawdzenie w Ahrefs co 7 dni:
- DR history (musi być stabilny lub rosnący)
- Refdomains history (jeśli +10/tydz to standardowy szum, +30/tydz = atak)
- Lista nowych refdomains (filtr po `first_seen` i wzorcu nazwy)

**2. Skrypt automatyzujący** — gdyby w `/admin/seo-agent` (już istnieje w repo) dodać moduł "spam-defense" który:
- Pobiera nowe refdomains co 24h przez Ahrefs MCP
- Klasyfikuje (SEOExpress / generic spam / legitimate)
- Generuje delta-listę do dopisania w `disavow-merged-final-v{N+1}.txt`
- Wysyła Slack/email alert jeśli przekroczy próg (5+ spamów w 24h)

**3. Inne domeny TAKMA** — sprawdzić czy atak rozszerza się na:
- serwis-zebry.pl (siostrzana, podatna)
- ezdrp24.com.pl
- tc22.pl, zebrazt411.pl, et401.pl (microsites)

Jeśli któraś z nich też ma +5 nowych SEOExpress w ostatnich 14 dniach — disavow analogicznie.

---

## Następne kroki

1. **Wgraj v4 do GSC** (5 minut, ścieżka wyżej)
2. **Zaplanuj sprawdzenie za 7 dni** (cron lub przypomnienie w kalendarzu)
3. Czy chcesz, żebym sprawdził **siostrzane domeny** (serwis-zebry.pl, ezdrp24, microsites) pod kątem analogicznego ataku?
4. Czy chcesz, żebym przygotował **skrypt automatyzujący wykrywanie ataków** w `/admin/seo-agent` (na bazie istniejącej infrastruktury Prisma + Ahrefs MCP)?
