# Aktualizacja disavow takma.com.pl — instrukcja v5 (PIĄTA fala — nowy atakujący)

**Data**: 20 czerwca 2026
**Powód**: Nowa fala spamu — PBN **„OutrankHQ / LinkBaron"** (inny niż dotychczasowy SEOExpress)

---

## Co się stało

- Po falach 1–4 (SEOExpress) pojawił się **NOWY wzorzec atakującego**: domeny `.store` DR 28 z nazwami typu
  `outrank-hq-*`, `link-baron-*`, `forum-provider-link-baron`, `epic-syndicate-link-baron-keyword`.
- Do tego drobne `.shop` (linkforge, linkchest, trafficspike, rankbasket, backlinkshop) i `twoj-katalog.com.pl`.
- **Wszystkie nowe linki: dofollow = 0** (nofollow/UGC) → niska realna szkodliwość, disavow profilaktycznie.
- Źródło danych: Ahrefs (site-explorer-referring-domains, sort first_seen).

## Dodane w v5 (15 nowych domen)

```
domain:backlinkshop.shop
domain:epic-syndicate-link-baron-keyword.store
domain:forum-provider-link-baron.store
domain:high-outrank-hq-dofollow-platform.store
domain:link-baron-link-juice-optimal-marketplace.store
domain:link-baron-pro-press-release.store
domain:link-baron-syndicate-equity.store
domain:linkchest.shop
domain:linkforgepro.shop
domain:outrank-hq-dr-90-paramount-system.store
domain:outrank-hq-master-anchor-text.store
domain:outrank-hq-prime-blogger.store
domain:rankbasket.shop
domain:trafficspike.shop
domain:twoj-katalog.com.pl
```

**Łącznie v5**: 542 unikalne domeny (v4: 527, +15).

## Co NIE dodaję (realne — zostawić)

| Domena | DR | Ruch | Powód |
|---|---|---|---|
| **planujdomiogrod.pl** | 49 | 6 982 | NASZ guest post (BLOG-paszport-roslin) — wartościowy link, NIE disavow |
| **openprocurements.com** | 12 | 722 | Nieoznaczone jako spam, realny ruch — obserwować, nie disavow |
| **cityon.pl** | 30 | 3 322 | Realna polska strona (wykluczona już w v4) |

## Jak wgrać do Google Search Console

1. Wejdź: **https://search.google.com/search-console/disavow-links**
2. Właściwość: **takma.com.pl**
3. „Wybierz plik z odrzuconymi linkami" → `/Users/jakubtiuchty/takma/disavow-merged-final-v5.txt`
4. Potwierdź. Google pokaże: *„542 domeny, 0 URL-i"*.

**Google zastępuje cały plik** — v5 zawiera wszystkie 527 z v4 + 15 nowych. Nic nie tracisz.

---

## Biznesowo

To nowy nadawca, ale ten sam schemat co wcześniej: tani PBN wzmiankuje TAKMA z domen DR 28, linki **nofollow** (dofollow=0). DR i pozycje stabilne — brak realnych konsekwencji. Koszt obrony: ~15 min co fala.

**Następna fala**: spodziewana ~tydzień (cykl). Sprawdzić Ahrefs first_seen i wygenerować v6, jeśli przyjdzie.
