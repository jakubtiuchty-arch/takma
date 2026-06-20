# Panel „Wizytówka Google" (/admin/wizytowka) — setup

Panel działa dwufazowo. **Faza 1** (audyt AI, zadania, podgląd opinii + drafty odpowiedzi, doradca AI) wymaga tylko klucza Places API. **Faza 2** (statystyki telefonów/tras, auto-publikacja odpowiedzi i postów, ochrona profilu) wymaga Business Profile API.

---

## FAZA 1 — Places API (szybko, ~15 min, bez zatwierdzania Google)

1. **Google Cloud Console** (najlepiej projekt `takma-analytics`, który już macie dla GA4/GSC) → **APIs & Services → Enable APIs** → włącz **„Places API (New)"**. Projekt musi mieć włączony **billing** (Places ma darmowy limit miesięczny, panel robi ~1 zapytanie na otwarcie/odświeżenie).
2. **APIs & Services → Credentials → Create credentials → API key**. Skopiuj klucz. (Zalecane: ogranicz klucz do „Places API (New)".)
3. **Znajdź Place ID wizytówki TAKMA**: https://developers.google.com/maps/documentation/places/web-service/place-id (wpisz „TAKMA Wrocław", skopiuj `ChIJ...`).
4. Ustaw zmienne env (Vercel **Production** + lokalnie `.env.local`):
   ```
   GOOGLE_PLACES_API_KEY=AIza...
   GBP_PLACE_ID=ChIJ...
   ```
   W Vercelu: `vercel env add GOOGLE_PLACES_API_KEY production` itd., potem redeploy.
5. Wejdź na `/admin/wizytowka` → kliknij **„Uruchom audyt AI"**. Gotowe.

Co dostajesz w Fazie 1:
- Ocena + liczba opinii + zdjęcia + status, kompletność danych (czego brakuje).
- **Audyt AI** + **inteligentne zadania** (priorytety) — odświeżane przyciskiem.
- **Opinie** (do 5) z przyciskiem „Zaproponuj odpowiedź AI" (draft do skopiowania do GBP).
- **Doradca AI** — czat o strategii wizytówki (zna dane profilu + audyt).

---

## FAZA 2 — Business Profile API (kilka dni, wymaga zatwierdzenia Google)

Potrzebne do: prywatnych statystyk (telefony, prośby o trasę, wyświetlenia), **auto-publikacji** odpowiedzi na opinie, **postów** na wizytówkę, **ochrony** (alert gdy ktoś zmieni/„zamknie" profil).

1. **Wniosek o dostęp** do Business Profile APIs: https://developers.google.com/my-business/content/prereqs → wypełnij formularz „request access" (na projekt GCP). Google zatwierdza zwykle 1–5 dni.
2. Po zatwierdzeniu włącz API: **My Business Account Management API**, **My Business Business Information API**, **Business Profile Performance API**.
3. **OAuth** (wizytówki wymagają zgody właściciela konta, nie service accountu): utwórz OAuth Client ID (typ Web/Desktop), przejdź flow jako konto będące **właścicielem/menedżerem** wizytówki TAKMA, zapisz **refresh token**.
4. Pobierz **Account ID** i **Location ID** wizytówki (Account Management API → accounts → locations).
5. Ustaw env (Vercel + lokalnie):
   ```
   GBP_OAUTH_CLIENT_ID=...
   GBP_OAUTH_CLIENT_SECRET=...
   GBP_OAUTH_REFRESH_TOKEN=...
   GBP_LOCATION_ID=locations/...
   GBP_ACCOUNT_ID=accounts/...
   ```
6. Panel sam wykryje konfigurację Fazy 2 (`businessApiConfigured()`) i odblokuje statystyki + auto-akcje.

> Kod Fazy 2 (klient Business Profile API, statystyki, auto-odpowiedzi, ochrona) dopisujemy po przyznaniu dostępu — wtedy mamy realne ID i token do przetestowania. Plumbing (wykrywanie konfiguracji, miejsca w UI) jest już gotowe.

---

## Koszt
- Places API: groszowy (1 zapytanie/odświeżenie, cache 12 h w DB). 
- AI (audyt/zadania/odpowiedzi/czat): Claude Sonnet, jak reszta panelu.
- Business Profile API: bezpłatne (limity Google).
