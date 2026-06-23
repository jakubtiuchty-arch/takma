# Allegro PROD — checklista uruchomienia

Cel: przełączyć integrację z sandbox na produkcję, żeby wystawiać realne oferty
i (dla etykiet) podpinać się pod produkcyjny katalog Allegro.

Stan dziś: sandbox działa (taśmy wystawione jako szkice). Kod jest gotowy na prod —
wystarczy zmiana zmiennych środowiskowych + rejestracja apki prod.

---

## 1. Konto produkcyjne Allegro — 2FA (wymagane)

- [ ] Zaloguj się na **produkcyjne** konto sprzedażowe Allegro (to, na którym sprzedajesz).
- [ ] Włącz **uwierzytelnianie dwuskładnikowe (2FA)** — bez tego nie zarejestrujesz aplikacji prod.
      Allegro → Ustawienia konta → Bezpieczeństwo → Weryfikacja dwuetapowa.

## 2. Rejestracja aplikacji produkcyjnej

- [ ] Wejdź na **https://apps.developer.allegro.pl/** (zalogowany na konto prod).
- [ ] „Zarejestruj nową aplikację" → typ **aplikacja webowa** (Authorization Code Flow).
- [ ] **Redirect URI** (musi być DOKŁADNIE taki — z https i hostem produkcyjnym):
      ```
      https://takma.com.pl/api/admin/allegro/auth/callback
      ```
      ⚠️ Host bez `www` — bo pod takim wchodzisz w `/admin`. Musi się zgadzać
      co do znaku (patrz sekcja 6, pułapka cookie).
- [ ] Uprawnienia / scope: zaznacz dostęp do **sprzedaży i ofert** (odczyt + zapis ofert,
      odczyt katalogu produktów). To pokrywa wystawianie ofert i wyszukiwanie w katalogu.
- [ ] Zapisz i skopiuj **Client ID** oraz **Client Secret** apki PROD.

## 3. Zwolnienie z GTIN/EAN (potwierdzenie)

- [ ] Upewnij się, że konto prod ma aktywne **zwolnienie z obowiązku podawania EAN/GTIN**
      dla kategorii, w których wystawiamy:
      - 17254 „Folie, termotransfery" (taśmy)
      - 64536 „Etykiety samoprzylepne" (etykiety)
      (Sprzedajesz tam od dawna bez EAN, więc zwykle jest aktywne — tylko potwierdź,
      bo w kat. 64536 EAN jest formalnie `required`, działa wyłącznie dzięki zwolnieniu.)

## 4. Zmienne środowiskowe — wartości PROD

Te same nazwy co teraz, zmieniają się wartości (sandbox → prod):

| Zmienna | Sandbox (teraz) | PROD (docelowo) |
|---|---|---|
| `ALLEGRO_CLIENT_ID` | apka sandbox | **Client ID apki PROD** |
| `ALLEGRO_CLIENT_SECRET` | apka sandbox | **Client Secret apki PROD** |
| `ALLEGRO_ENV` | `sandbox` | `prod` |
| `ALLEGRO_API_BASE` | `https://api.allegro.pl.allegrosandbox.pl` | `https://api.allegro.pl` |
| `ALLEGRO_AUTH_BASE` | `https://allegro.pl.allegrosandbox.pl/auth/oauth` | `https://allegro.pl/auth/oauth` |
| `ALLEGRO_REDIRECT_URI` | `http://localhost:3000/api/admin/allegro/auth/callback` | `https://takma.com.pl/api/admin/allegro/auth/callback` |

## 5. Ustawienie zmiennych na Vercel

- [ ] Vercel → projekt **takma** → Settings → Environment Variables.
- [ ] Dodaj/edytuj **6 zmiennych** z kolumny PROD powyżej, środowisko **Production**
      (a jeśli testujesz na preview — też Preview, ale z tym samym prod redirect URI
      to się nie zgodzi; najprościej: tylko Production).
- [ ] `ALLEGRO_REDIRECT_URI` na Vercel = `https://takma.com.pl/api/admin/allegro/auth/callback`.
- [ ] **Redeploy** (Vercel nie podłącza nowych env do istniejącego deployu — trzeba przebudować).

> Lokalnie (`.env`) zostaw sandbox do dalszych testów — prod odpalasz na żywej domenie.
> Albo przełącz `.env` na prod, jeśli chcesz łączyć z prod z localhosta (wtedy redirect
> URI w apce musiałby zawierać też `http://localhost:3000/...` — Allegro pozwala dodać kilka URI).

## 6. Połączenie konta na produkcji

- [ ] Wejdź na **https://takma.com.pl/admin/allegro/konfiguracja** (zalogowany jako admin).
- [ ] Kliknij **„Połącz z Allegro"** → zalogujesz się na konto prod i zaakceptujesz dostęp apki.
- [ ] Po powrocie status = **Połączono**, „Konto: <login>". Token zapisze się w bazie
      jako `environment = prod` (osobny od sandboxowego).

⚠️ **Pułapka cookie/host:** stronę `/admin` i powrót z Allegro (redirect URI) musisz mieć
na **tym samym hoście** — czyli `takma.com.pl` **bez `www`** w obu miejscach.
Gdybyś wszedł na `www.takma.com.pl`, cookie `allegro_oauth_state` (CSRF) nie dojdzie
i dostaniesz „invalid_state". Najpewniej: w Vercel ustaw `takma.com.pl` jako domenę
podstawową (redirect z `www` → bez `www`).

## 7. Test po połączeniu

- [ ] **Taśmy:** `/admin/allegro/oferty` → „Wystaw szkic" na jednym wariancie →
      sprawdź w panelu Allegro (prod) czy szkic powstał z ceną brutto i zdjęciem.
- [ ] **Etykiety (po połączeniu prod):** dam znać — zbuduję matcher katalogowy i przetestujemy
      na próbce, ile Twoich etykiet znajduje się w katalogu Allegro (wtedy liczba etykiet,
      materiał, EAN biorą się z katalogu — bez ręcznego wpisywania).

---

## Szybka ściąga wartości PROD (do skopiowania na Vercel)

```
ALLEGRO_ENV=prod
ALLEGRO_API_BASE=https://api.allegro.pl
ALLEGRO_AUTH_BASE=https://allegro.pl/auth/oauth
ALLEGRO_REDIRECT_URI=https://takma.com.pl/api/admin/allegro/auth/callback
ALLEGRO_CLIENT_ID=<Client ID apki PROD>
ALLEGRO_CLIENT_SECRET=<Client Secret apki PROD>
```
