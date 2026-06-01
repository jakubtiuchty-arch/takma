# Prompt dla Claude Code — naprawienie 3 broken GA4 events

**Cel**: dodać tracking dla 3 key events w TAKMA GA4 (klik_tel, klik_mail, wyslanie_formularza) które są zdefiniowane w GA4 admin ale nie zbierają danych — brakuje kodu po stronie strony.

**Kontekst projektu**:
- Next.js 14 (App Router) + Vercel
- GA4 przez bezpośredni `gtag.js` (NIE GTM)
- Helper functions w `src/lib/ga-events.ts`
- Już zaimplementowane: purchase, view_item, add_to_cart, view_cart, begin_checkout, add_payment_info, generate_lead, search, notify_me

**Co MA się stać**:
- 3 nowe helper functions w `src/lib/ga-events.ts`
- 1 nowy komponent globalny `AutoLinkTracking` który łapie kliknięcia na każdy `<a href="tel:">` i `<a href="mailto:">` w całej aplikacji (bez konieczności edytowania każdego linka osobno)
- Wstawienie komponentu w `app/layout.tsx`
- Dodanie 1 linii w `app/kontakt/page.tsx` dla form submit tracking

**Co NIE wolno**:
- Ruszać istniejących funkcji w `ga-events.ts`
- Zmieniać submit logic w formularzu kontaktowym
- Dodawać nowych dependencies (`package.json` nietknięty)
- Zmieniać stylów / wyglądu strony

---

## Krok 1 — Uruchom Claude Code

```bash
cd ~/takma
claude
```

---

## Krok 2 — Wklej cały prompt poniżej do Claude Code

````
Cześć! Dodaj tracking GA4 dla kliknięć telefon/email/formularz. To projekt Next.js 14 App Router + Vercel + bezpośrednie gtag.js (NIE GTM).

GA4 ma już skonfigurowane 3 key events które nie zbierają danych (brak kodu po stronie strony):
- klik_tel — kliknięcie w <a href="tel:...">
- klik_mail — kliknięcie w <a href="mailto:...">
- wyslanie_formularza — wysłanie formularza kontaktowego po sukcesie

Działa już (NIE ruszaj):
- purchase, view_item, add_to_cart, view_cart, begin_checkout, add_payment_info, generate_lead, search, notify_me
- Plik: src/lib/ga-events.ts

WYMAGANE ZMIANY (4 pliki, ~50 linii kodu).

═══════════════════════════════════════════════════════════════
### ZMIANA 1 — src/lib/ga-events.ts
═══════════════════════════════════════════════════════════════

Na końcu pliku DODAJ (nie modyfikuj istniejących funkcji):

```typescript
// ── Phone / Email / Form tracking ─────────────────────────────

/** Phone link click (klik_tel) */
export function trackPhoneClick(phoneNumber: string, location?: string) {
  gtag('event', 'klik_tel', {
    phone_number: phoneNumber,
    location: location ?? 'unknown',
  })
}

/** Email link click (klik_mail) */
export function trackEmailClick(emailAddress: string, location?: string) {
  gtag('event', 'klik_mail', {
    email_address: emailAddress,
    location: location ?? 'unknown',
  })
}

/** Form submission success (wyslanie_formularza) */
export function trackFormSubmit(formName: string, formLocation?: string) {
  gtag('event', 'wyslanie_formularza', {
    form_name: formName,
    form_location: formLocation ?? 'unknown',
  })
}
```

═══════════════════════════════════════════════════════════════
### ZMIANA 2 — NOWY plik src/components/tracking/AutoLinkTracking.tsx
═══════════════════════════════════════════════════════════════

Utwórz folder `src/components/tracking/` jeśli nie istnieje.
Utwórz plik z dokładnie taką zawartością:

```typescript
'use client'

import { useEffect } from 'react'
import { trackPhoneClick, trackEmailClick } from '@/lib/ga-events'

/**
 * Global event listener — automatycznie strzela klik_tel i klik_mail
 * dla wszystkich <a href="tel:..."> i <a href="mailto:..."> w całej aplikacji.
 * Wstawione w app/layout.tsx, więc działa na każdej stronie.
 */
export function AutoLinkTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      try {
        if (href.startsWith('tel:')) {
          trackPhoneClick(href.replace('tel:', ''), window.location.pathname)
        } else if (href.startsWith('mailto:')) {
          const email = href.replace('mailto:', '').split('?')[0]
          trackEmailClick(email, window.location.pathname)
        }
      } catch (err) {
        // Tracking failure must not break navigation
        console.warn('AutoLinkTracking error:', err)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
```

═══════════════════════════════════════════════════════════════
### ZMIANA 3 — src/app/layout.tsx
═══════════════════════════════════════════════════════════════

W górę pliku dodaj import (obok innych importów komponentów):

```typescript
import { AutoLinkTracking } from '@/components/tracking/AutoLinkTracking'
```

Wewnątrz `<body>` JSX, na końcu (przed zamykającym `</body>`) dodaj:

```jsx
<AutoLinkTracking />
```

Komponent renderuje `null` więc nie wpływa wizualnie. Można też dać blisko `<Footer />` lub na samym końcu.

═══════════════════════════════════════════════════════════════
### ZMIANA 4 — src/app/kontakt/page.tsx
═══════════════════════════════════════════════════════════════

Na górze pliku znajdź import:
```typescript
import { trackGenerateLead } from '@/lib/ga-events'
```

Zmień na:
```typescript
import { trackGenerateLead, trackFormSubmit } from '@/lib/ga-events'
```

Następnie znajdź linię (około 103):
```typescript
trackGenerateLead(`kontakt_${formData.reason}`)
```

DODAJ BEZPOŚREDNIO POD nią:
```typescript
trackFormSubmit('kontakt_main', '/kontakt')
```

═══════════════════════════════════════════════════════════════
KRYTERIA AKCEPTACJI:
═══════════════════════════════════════════════════════════════

- ✅ Nie usuwasz ani nie modyfikujesz istniejących funkcji w ga-events.ts
- ✅ Nie zmieniasz submit logic formularza kontaktowego (tylko dodajesz 1 linię)
- ✅ Nie zmieniasz package.json (zero nowych dependencies)
- ✅ Nie zmieniasz UI/CSS (tylko logika)
- ✅ TypeScript się kompiluje bez błędów (npm run build LUB npm run typecheck)
- ✅ ESLint przechodzi (npm run lint)

═══════════════════════════════════════════════════════════════
PO ZAKOŃCZENIU:
═══════════════════════════════════════════════════════════════

1. Uruchom `npm run lint` żeby sprawdzić błędy
2. Uruchom `git diff` i pokaż wszystkie zmiany
3. Uruchom `git status` żeby zobaczyć listę zmodyfikowanych/nowych plików
4. Napisz krótkie podsumowanie:
   - Lista zmienionych plików (4 pliki)
   - Czy lint przeszedł (✅/❌)
   - Czy są inne potencjalne problemy
   - Sugerowany commit message

NIE COMMITUJ ANI NIE PUSHUJ — to zrobi user manualnie po sprawdzeniu diff.
````

---

## Krok 3 — Po zakończeniu Claude Code

Sprawdź diff:

```bash
git diff
git status
```

Zobaczysz dokładnie co zmieniono.

Jeśli OK:

```bash
git add .
git commit -m "feat(analytics): add phone, email and form tracking events"
git push
```

Vercel automatycznie:
1. Wykryje push
2. Zbuduje preview deployment
3. Po sukcesie wdroży na produkcję (jeśli main branch)

---

## Krok 4 — Test na żywo (po deploy ~2-3 min)

### Opcja A — szybki test w GA4 Realtime

1. Otwórz `https://www.takma.com.pl/kontakt` w incognito (czyste cookies)
2. Kliknij na numer telefonu (`+48 607 819 688`)
3. Otwórz drugą kartę: GA4 → **Raporty → W czasie rzeczywistym**
4. W ciągu **30 sekund** zobacz event w sekcji "Aktywni użytkownicy ostatnich 30 minut → Liczba zdarzeń"
5. Powinien być event `klik_tel`

### Opcja B — pełniejszy test w DebugView

1. Zainstaluj rozszerzenie Chrome: **"Google Analytics Debugger"** (oficjalne)
2. Włącz rozszerzenie (kliknij ikonę w toolbar)
3. Otwórz `https://www.takma.com.pl`
4. GA4 → **Administracja → DebugView** (po lewej dół)
5. Klikaj telefony/maile na stronie
6. W DebugView powinieneś widzieć **w czasie rzeczywistym** wszystkie eventy: `klik_tel`, `klik_mail`

### Opcja C — sprawdzenie po 24h

Po 24 godzinach:

GA4 → **Raporty → Zaangażowanie → Zdarzenia** → szukaj:
- `klik_tel` — kliknięcia telefonu
- `klik_mail` — kliknięcia maila
- `wyslanie_formularza` — wysłanie formularza

Powinny mieć już dane.

---

## Jeśli coś pójdzie nie tak — REVERT

```bash
git revert HEAD
git push
```

Vercel w 2 minuty cofnie zmiany. Strona wraca do stanu poprzedniego.

---

## Co dalej (po 7 dniach z działającym trackingiem)

1. **Cleanup duplikatów events w GA4 admin** — usunąć: `mailto`, `tel`, `podstrona_kontakt` (duplikaty/redundantne — zastąpione przez `klik_mail`, `klik_tel`, automatyczne `page_view` na `/kontakt`)
2. **Sprawdzić real lead volume** — porównać:
   - `generate_lead` (form submits): ~16/m-c teraz
   - `klik_tel` (calls): nowe — pewnie 30-100/m-c
   - `klik_mail` (emails): nowe — pewnie 15-50/m-c
3. **Update Google Ads conversions** — zaimportować nowe konwersje (`klik_tel` jako Phone Call Conversion w Google Ads)
4. **Audiences remarketingowe**:
   - "Kliknęli telefon ale nie zostawili leada" (klik_tel bez generate_lead)
   - "Kliknęli mail ale nie wysłali formularza"

---

## Podsumowanie tej zmiany

| Co dostajesz | Wartość |
|---|---|
| Tracking realnych telefonów | 🎯 Dzwoniący klienci nareszcie liczeni |
| Tracking realnych maili | 🎯 Lead-gen pełny obraz |
| Tracking form submit (osobno od generate_lead) | 🎯 Backup metryka |
| Auto-tracking wszystkich tel:/mailto: na stronie | 🎯 Zero ręcznej pracy w przyszłości |
| Zero ryzyka | ✅ Komponent niezależny, return null |
| Łatwy revert | ✅ git revert HEAD jeśli problem |
