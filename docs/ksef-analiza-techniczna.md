# KSeF (Krajowy System e-Faktur) -- Kompletna analiza techniczna

> Dokument przygotowany: 2 kwietnia 2026  
> Wersja API: KSeF 2.0  
> Status systemu: **OBOWIAZKOWY** od 1 lutego 2026 (duzi podatnicy) / 1 kwietnia 2026 (pozostali)

---

## Spis tresci

1. [Harmonogram obowiazkowego KSeF](#1-harmonogram-obowiazkowego-ksef)
2. [Architektura API](#2-architektura-api)
3. [Srodowiska](#3-srodowiska)
4. [Uwierzytelnianie](#4-uwierzytelnianie)
5. [Endpointy API](#5-endpointy-api)
6. [Format faktury -- FA(3)](#6-format-faktury--fa3)
7. [Szyfrowanie](#7-szyfrowanie)
8. [Limity](#8-limity)
9. [Tryby offline](#9-tryby-offline)
10. [Istniejace biblioteki i SDK](#10-istniejace-biblioteki-i-sdk)
11. [Typowe pulapki integracyjne](#11-typowe-pulapki-integracyjne)
12. [Plan integracji z Next.js](#12-plan-integracji-z-nextjs)

---

## 1. Harmonogram obowiazkowego KSeF

| Etap | Data | Kogo dotyczy |
|------|------|--------------|
| Etap I | **1 lutego 2026** | Podatnicy z obrotem > 200 mln PLN w 2024 r. |
| Etap II | **1 kwietnia 2026** | Wszyscy pozostali podatnicy VAT (MSP z obrotem > 10 tys. PLN/mies.) |
| Etap III | **1 stycznia 2027** | Najmniejsi podatnicy |
| Odbior faktur | **1 lutego 2026** | Wszyscy podatnicy -- obowiazek odbierania faktur z KSeF |

**Wazne:** Od 1 lutego 2026 wszystkie faktury (w tym korekty) musza uzywac struktury **FA(3)**, niezaleznie od formatu oryginalnej faktury.

---

## 2. Architektura API

### Specyfikacja

- **Standard:** OpenAPI 3.0.4
- **Wersja API:** v2 (KSeF 2.0)
- **Protokol:** REST/JSON (komunikacja) + XML (faktury)
- **Szyfrowanie transportu:** TLS 1.2+ (preferowany TLS 1.3), HSTS
- **Format faktur:** XML zgodny z XSD FA(3)

### Repozytorium dokumentacji

Oficjalne repozytorium Ministerstwa Finansow:
- **Dokumentacja:** https://github.com/CIRFMF/ksef-docs
- **Klient C#/.NET:** https://github.com/CIRFMF/ksef-client-csharp
- **Klient Java:** https://github.com/CIRFMF/ksef-client-java

---

## 3. Srodowiska

### Adresy bazowe

| Srodowisko | Base URL | OpenAPI JSON | Dokumentacja interaktywna |
|------------|----------|-------------|--------------------------|
| **Produkcja** | `https://api.ksef.mf.gov.pl` | `/docs/v2/openapi.json` | `/docs/v2` |
| **Integracyjne (test)** | `https://api-test.ksef.mf.gov.pl` | `/docs/v2/openapi.json` | `/docs/v2` |
| **Demo (pre-prod)** | `https://api-demo.ksef.mf.gov.pl` | `/docs/v2/openapi.json` | `/docs/v2` |

### Roznice miedzy srodowiskami

| Aspekt | Produkcja | Integracyjne (test) | Demo |
|--------|-----------|-------------------|------|
| Dane uwierzytelniajace | Prawdziwe (rejestr wlascicieli) | Zanonimizowane dane testowe | Prawdziwe (rejestr wlascicieli) |
| Skutek prawny | **TAK** | NIE | NIE |
| Przechowywanie danych | Trwale | Usuwane po okresie | Usuwane po okresie |
| Certyfikaty | Kwalifikowane | Self-signed akceptowane | Kwalifikowane |
| Limity | Standardowe | Konfigurowalne przez API | Standardowe |

---

## 4. Uwierzytelnianie

### Przeglad

System wymaga uzyskania **JWT accessToken** przed dostepem do chronionych zasobow. Uwierzytelnianie opiera sie na dwoch elementach:
1. **Kontekst logowania** -- identyfikator NIP
2. **Podmiot uwierzytelniajacy** -- podpis kwalifikowany lub token KSeF

### Metody uwierzytelniania

| Metoda | Opis | Zastosowanie |
|--------|------|-------------|
| **Podpis kwalifikowany XAdES** | Podpis XML dokumentu AuthTokenRequest | Najwyzszy poziom bezpieczenstwa |
| **Token KSeF** | Token wygenerowany w MCU, szyfrowany RSA-OAEP | Integracje systemowe (API-to-API) |
| **Pieczec elektroniczna** | Pieczec organizacyjna z NIP | Automatyzacja firmowa |
| **Profil Zaufany / ePUAP** | Podpis przez Profil Zaufany | Dostep osobisty |
| **Certyfikat KSeF** | Certyfikat wydany przez MF (niekwalifikowany) | Alternatywa systemowa |

### Flow uwierzytelniania -- krok po kroku

```
1. POST /api/v2/auth/challenge
   -> Odpowiedz: { challenge: string, timestamp: number }
   -> Challenge wazny 10 minut (nonce anty-replay)

2a. [XAdES] Przygotuj XML AuthTokenRequest (schemat authv2.xsd):
    - Challenge (z kroku 1)
    - ContextIdentifier (NIP / InternalId / NipVatUe)
    - SubjectIdentifierType (certificateSubject / certificateFingerprint)
    - AuthorizationPolicy (opcjonalnie -- whitelist IP)
    -> Podpisz dokumentem XAdES certyfikatem kwalifikowanym

2b. [Token KSeF] Przygotuj szyfrowany token:
    - Format: "{ksefToken}|{timestampMs}"
    - Szyfruj: RSA-OAEP z SHA-256 (MGF1-SHA256)
    - Koduj: Base64

3. POST /api/v2/auth/xades-signature   (metoda XAdES)
   POST /api/v2/auth/ksef-token         (metoda token)
   -> Odpowiedz: { authenticationToken: JWT, referenceNumber: string }

4. GET /api/v2/auth/{referenceNumber}
   -> Sprawdz status uwierzytelniania (proces asynchroniczny)

5. POST /api/v2/auth/token/redeem
   -> Wymien authenticationToken na:
      - accessToken (JWT, ~15 minut waznosci)
      - refreshToken (JWT, do 7 dni waznosci)

6. POST /api/v2/auth/token/refresh
   -> Odnow accessToken uzywajac refreshToken (bez ponownego uwierzytelniania)
```

### Typy tokenow

| Token | Format | Czas zycia | Przeznaczenie |
|-------|--------|------------|---------------|
| `authenticationToken` | JWT (tymczasowy) | Kilka minut | Sledzenie operacji async uwierzytelniania |
| `accessToken` | JWT | ~15 minut | Autoryzacja zadan API |
| `refreshToken` | JWT | Do 7 dni | Odnawianie accessToken |

### Wymagania certyfikatow

- Musi zawierac identyfikator podmiotu zgodny z kontekstem
- Dla osob fizycznych: PESEL/NIP w atrybutach certyfikatu
- Dla organizacji: NIP wymagany
- Format podpisu: **XAdES** (obowiazkowy)
- W srodowisku testowym akceptowane sa certyfikaty self-signed

---

## 5. Endpointy API

KSeF 2.0 API posiada **73 endpointy**. Ponizej najwazniejsze pogrupowane tematycznie.

### 5.1 Uwierzytelnianie / Sesja

| Metoda | Endpoint | Opis |
|--------|----------|------|
| POST | `/api/v2/auth/challenge` | Inicjacja uwierzytelniania, pobranie challenge (wazny 10 min) |
| POST | `/api/v2/auth/xades-signature` | Przeslanie podpisanego XAdES AuthTokenRequest |
| POST | `/api/v2/auth/ksef-token` | Przeslanie zaszyfrowanego tokenu KSeF |
| GET | `/api/v2/auth/{referenceNumber}` | Sprawdzenie statusu uwierzytelniania |
| POST | `/api/v2/auth/token/redeem` | Wymiana na accessToken + refreshToken |
| POST | `/api/v2/auth/token/refresh` | Odnowienie accessToken przez refreshToken |

### 5.2 Sesje

| Metoda | Endpoint | Opis |
|--------|----------|------|
| POST | `/api/v2/sessions/online` | Otwarcie sesji interaktywnej |
| POST | `/api/v2/sessions/batch` | Otwarcie sesji wsadowej (batch) |
| POST | `/api/v2/sessions/online/{ref}/close` | Zamkniecie sesji i pobranie UPO |

### 5.3 Faktury

| Metoda | Endpoint | Opis |
|--------|----------|------|
| POST | `/api/v2/sessions/online/{ref}/invoices/` | Wyslanie zaszyfrowanej faktury |
| GET | (pobieranie faktur) | Pobranie faktury po ID |
| GET | (lista faktur sesji) | Lista faktur w sesji |
| GET | (faktury z bledami) | Lista faktur odrzuconych w sesji |

### 5.4 Bezpieczenstwo / Certyfikaty

| Metoda | Endpoint | Opis |
|--------|----------|------|
| GET | `/api/v2/security/public-key-certificates` | Pobranie aktualnego klucza publicznego KSeF do szyfrowania |

### 5.5 Uprawnienia

| Metoda | Endpoint | Opis |
|--------|----------|------|
| (CRUD) | `/api/v2/permissions/**` | Zarzadzanie uprawnieniami podmiotow |

### 5.6 Tokeny

| Metoda | Endpoint | Opis |
|--------|----------|------|
| (CRUD) | `/api/v2/tokens` | Generowanie, listowanie, uniewaznnianie tokenow |

### 5.7 Limity

| Metoda | Endpoint | Opis |
|--------|----------|------|
| GET | `/api/v2/limits/context` | Pobranie limitow sesji |
| GET | `/api/v2/limits/subject` | Pobranie limitow certyfikatow i rejestracji |
| GET | `/api/v2/rate-limits` | Pobranie aktualnych quotas |

### 5.8 Dane testowe (tylko srodowisko testowe)

| Metoda | Endpoint | Opis |
|--------|----------|------|
| (rozne) | `/api/v2/testdata/*` | Tworzenie podmiotow testowych, przydzielanie uprawnien |

### 5.9 Zapytania o faktury (Query)

| Operacja | Opis |
|----------|------|
| `ksefInvoiceQueryStart` | Rozpoczecie asynchronicznego wyszukiwania |
| `ksefInvoiceQueryStatus` | Sprawdzenie postepu zapytania |
| `ksefInvoiceQueryResult` | Pobranie wynikow partiami |
| `ksefInvoiceValidate` | Walidacja pre-wysylkowa |

---

## 6. Format faktury -- FA(3)

### Przeglad

- **Schemat:** FA(3) -- trzeci wariant faktury ustrukturyzowanej
- **Format:** XML zgodny z XSD
- **Obowiazuje od:** 1 lutego 2026
- **Kodowanie:** UTF-8 (obowiazkowe)
- **Rozmiar:** max 1 MB (bez zalacznikow), max 3 MB (z zalacznikami)

### Glowne elementy struktury XML

```xml
<Faktura xmlns="...">
  <!-- 1. Naglowek -->
  <Naglowek>
    <!-- Dane techniczne, data wytworzenia pliku, wersja schematu -->
  </Naglowek>

  <!-- 2. Podmiot1 (OBOWIAZKOWY) -- Sprzedawca -->
  <Podmiot1>
    <!-- NIP (wymagany do autoryzacji w KSeF), nazwa, adres -->
  </Podmiot1>

  <!-- 3. Podmiot2 (OBOWIAZKOWY) -- Nabywca -->
  <Podmiot2>
    <!-- NIP/dane identyfikacyjne, nazwa, adres -->
  </Podmiot2>

  <!-- 4. Podmiot3 (OPCJONALNY) -- Trzecia strona -->
  <Podmiot3>
    <!-- Np. platnik, odbiorca -->
  </Podmiot3>

  <!-- 5. Dane faktury -->
  <Fa>
    <!-- Numer faktury, data wystawienia, data sprzedazy -->
    <!-- Wiersze faktury: pozycje towarowe/uslugowe -->
    <!-- Kazdy wiersz: nazwa (do 512 znakow), ilosc, cena netto, stawka VAT -->
  </Fa>

  <!-- 6. Podsumowanie -->
  <Podsumowanie>
    <!-- Kwoty podatku z podzialem na stawki, kwota do zaplaty -->
  </Podsumowanie>

  <!-- 7. Zalacznik (NOWE w FA(3)) -->
  <Zalacznik>
    <!-- Specyfikacje, protokoly odbioru -- max 3 MB lacznie -->
  </Zalacznik>
</Faktura>
```

### Obowiazkowe elementy

| Element | Wymagalnosc | Opis |
|---------|-------------|------|
| Naglowek | **Obowiazkowy** | Dane techniczne, wersja schematu |
| Podmiot1 | **Obowiazkowy** | Sprzedawca -- NIP konieczny do autoryzacji |
| Podmiot2 | **Obowiazkowy** | Nabywca |
| Podmiot3 | Opcjonalny | Trzecia strona (platnik, odbiorca) |
| Fa (dane faktury) | **Obowiazkowy** | Numer, daty, wiersze, kwoty |
| Podsumowanie | **Obowiazkowy** | Sumy VAT i brutto |
| Zalacznik | Opcjonalny | Nowe w FA(3) |

### Zmiany FA(3) vs FA(2)

| Zmiana | FA(2) | FA(3) |
|--------|-------|-------|
| Nazwa towaru/uslugi | 256 znakow | **512 znakow** |
| Zalaczniki | Brak | **TAK** -- specyfikacje, protokoly (max 3 MB) |
| Identyfikacja pracownikow | Brak | **TAK** -- powiazanie osob z transakcjami |
| Kody VAT | Ograniczone | **Rozszerzone** -- nowe kody i oznaczenia transakcji |
| Sekcja platnosci | Podstawowa | **Przebudowana** -- platnosci czesciowe, factoring, platnosci miedzynarodowe |
| Rachunki bankowe | Prosty format | **Restrukturyzacja** -- lepsze wsparcie miedzynarodowe |
| JST i grupy VAT | Ograniczone | **Ulepszone** -- jasne zasady adresowania |

---

## 7. Szyfrowanie

### Szyfrowanie faktur (obowiazkowe)

Wszystkie faktury musza byc zaszyfrowane przed wyslaniem -- zarowno w trybie interaktywnym jak i wsadowym.

```
1. Pobierz klucz publiczny KSeF:
   GET /api/v2/security/public-key-certificates

2. Wygeneruj losowy klucz symetryczny AES-256 (unikalny per sesja)

3. Zaszyfruj klucz AES kluczem publicznym KSeF:
   Algorytm: RSAES-OAEP z SHA-256 i MGF1-SHA256

4. Wyslij zaszyfrowany klucz AES przy otwieraniu sesji (pole encryptionKey)

5. Szyfruj kazda fakture:
   Algorytm: AES-256-CBC z paddingiem PKCS#7
```

### Szyfrowanie tokenow

- Token KSeF: format `{ksefToken}|{timestampMs}` szyfrowany RSA-OAEP SHA-256, kodowany Base64

---

## 8. Limity

### Limity sesji

| Parametr | Wartosc domyslna |
|----------|-----------------|
| Rozmiar faktury (bez zalacznikow) | **1 MB** |
| Rozmiar faktury (z zalacznikami) | **3 MB** |
| Maksymalna liczba faktur na sesje | **10 000** |

### Limity certyfikatow

| Typ identyfikatora | Zadania certyfikatow | Aktywne certyfikaty |
|--------------------|--------------------|-------------------|
| NIP | 300 | 100 |
| PESEL | 12 | 6 |
| Odcisk certyfikatu | 12 | 6 |

### Rate limiting API

- KSeF limituje liczbe zapytan w krotkim czasie (szczegolowe progi per endpoint w oddzielnej dokumentacji)
- Chronione endpointy: limit per kontekst/IP
- Otwarte endpointy: limit per IP
- **Produkcja:** Zwiekszenie limitow wymaga formalnego wniosku z uzasadnieniem
- **Srodowisko testowe:** Limity konfigurowalne przez dedykowane endpointy testowe

### Sprawdzanie limitow

```
GET /api/v2/limits/context    -- limity sesji
GET /api/v2/limits/subject    -- limity certyfikatow i rejestracji
GET /api/v2/rate-limits       -- aktualne quotas
```

---

## 9. Tryby offline

System przewiduje trzy scenariusze pracy offline:

| Tryb | Wyzwalacz | Okno czasowe |
|------|-----------|-------------|
| **Offline24** | Inicjowany przez podatnika | 24 godziny na wyslanie do KSeF |
| **Niedostepnosc systemu** | Planowana konserwacja | 7 dni prolongaty |
| **Tryb awaryjny** | Nieplanowana awaria | Faktury wazne bez rejestracji w KSeF |

**Faktury offline wymagaja DWOCH kodow QR:**
1. QR OFFLINE -- do weryfikacji przez odbiorcow
2. QR CERTIFICATE -- potwierdzenie certyfikatu

---

## 10. Istniejace biblioteki i SDK

### Oficjalne (Ministerstwo Finansow)

| Biblioteka | Jezyk | Repozytorium |
|-----------|-------|-------------|
| ksef-client-csharp | C# / .NET | https://github.com/CIRFMF/ksef-client-csharp |
| ksef-client-java | Java | https://github.com/CIRFMF/ksef-client-java |
| ksef-docs | Dokumentacja | https://github.com/CIRFMF/ksef-docs |

### JavaScript / TypeScript (nieoficjalne)

| Pakiet | Opis | Instalacja |
|--------|------|-----------|
| **@ksef/client** (lkow/ksef-client-ts) | API v2-only SDK, ESM only, Node.js 20+ | `pnpm add @ksef/client` |
| **kse_f** | Klient JS dla KSeF API 2.0 | `npm install kse_f` |
| **ksef4dev/ksef-node** | Przyklady Node.js od KSeF Integrators | GitHub |

### Python

| Pakiet | Opis |
|--------|------|
| **ksef2** (artpods56/ksef2) | Python SDK for KSeF v2.0 API |

### PHP

| Pakiet | Opis |
|--------|------|
| **n1ebieski/ksef-php-client** | Klient PHP |

### Inne

| Narzedzie | Opis |
|-----------|------|
| **n8n community node** | Node n8n do KSeF -- query, download, manage faktur |
| **KSeFGate** | Usluga posredniczaca z REST API |
| **ksefapi.pl** | Komercyjne API posredniczace |

### Rekomendacja dla JavaScript/TypeScript

**`@ksef/client`** (lkow/ksef-client-ts) -- najlepsza opcja:
- Wsparcie API v2 only
- ESM, Node.js 20+
- Pelne wsparcie: uwierzytelnianie (token + XAdES), sesje, szyfrowanie, faktury
- Wsparcie FA(3) z schemaVersion `1-0E`
- Przykladowe uzycie:

```typescript
import { KsefClient } from '@ksef/client';

// Inicjalizacja
const client = new KsefClient({ environment: 'test' });

// 1. Uwierzytelnianie tokenem
const authInit = await client.authentication.initiateTokenAuthentication(
  { type: 'NIP', value: '1234567890' },
  ksefToken
);
const operation = await client.authentication.getAuthenticationStatus(
  authInit.referenceNumber,
  authInit.authenticationToken.token
);
const tokens = await client.authentication.redeemTokens(
  authInit.authenticationToken.token
);

// 2. Otwarcie sesji
const session = await client.sessions.openOnlineSession({
  formCode: { systemCode: 'FA (3)', schemaVersion: '1-0E', value: 'FA' },
  encryptionKey: encryptedAesKey
});

// 3. Szyfrowanie i wyslanie faktury
const encrypted = await encryptInvoice(invoiceXml, aesKey);
const result = await client.invoices.sendInvoice(encrypted);

// 4. Sprawdzenie statusu
const status = await client.sessions.getSessionStatus(session.referenceNumber);
const invoices = await client.sessions.listSessionInvoices(session.referenceNumber);

// 5. Zamkniecie sesji (pobiera UPO)
await client.sessions.closeOnlineSession(session.referenceNumber);

// 6. Sprawdzenie limitow
const limits = await client.rateLimits.getEffectiveLimits(accessToken);
```

---

## 11. Typowe pulapki integracyjne

### Bezpieczenstwo
- **Nie eksponuj credentiali** w repozytoriach ani logach
- **Maskuj tokeny** w logach (pokazuj tylko ostatnie 4 znaki)
- **Rotacja tokenow** -- implementuj automatyczne odswiezanie accessToken
- **Przechowuj sekrety** w secret managerze (np. Vercel env vars), nigdy w kodzie

### Logika biznesowa
- **Walidacja przed wyslaniem** -- ZAWSZE uzywaj endpointu walidacji przed produkcyjnym wysylaniem
- **Deduplikacja** -- FA(3) uzywa logiki biznesowej (NIP + typ + numer), nie hash pliku
- **Chronologia dat** -- system sprawdza poprawnosc chronologiczna
- **Szyfrowanie obowiazkowe** -- kazda faktura musi byc zaszyfrowana AES-256

### Infrastruktura
- **Obsluga trybu offline** -- zaimplementuj Offline24, niedostepnosc systemu i tryb awaryjny
- **HTTP 429** -- implementuj exponential backoff przy rate limitingu
- **Zamykanie sesji** -- zawsze zamykaj sesje (wtedy pobierasz UPO)
- **Timeout sesji** -- obsluz scenariusz wygasniecia sesji
- **Batch vs Interactive** -- w batch pojedyncze faktury sa przetwarzane niezaleznie (nie all-or-nothing)

### Walidacja XML
- **Waliduj XML** przeciw aktualnemu XSD przed wyslaniem
- **UTF-8** -- obowiazkowe kodowanie
- **Limit 512 znakow** na nazwe towaru/uslugi w FA(3)
- **Limit 1 MB / 3 MB** na fakture

---

## 12. Plan integracji z Next.js

### Architektura

```
Next.js App
├── app/
│   ├── api/ksef/
│   │   ├── auth/route.ts          -- Uwierzytelnianie KSeF
│   │   ├── session/route.ts       -- Otwieranie/zamykanie sesji
│   │   ├── invoices/route.ts      -- CRUD faktur
│   │   ├── invoices/send/route.ts -- Wyslanie faktury do KSeF
│   │   ├── invoices/query/route.ts-- Wyszukiwanie faktur
│   │   ├── status/route.ts        -- Status faktury/sesji
│   │   └── upo/route.ts           -- Pobieranie UPO
│   └── admin/ksef/
│       ├── page.tsx               -- Dashboard KSeF
│       ├── invoices/page.tsx      -- Lista faktur
│       ├── invoices/[id]/page.tsx -- Szczegoly faktury
│       └── settings/page.tsx      -- Konfiguracja KSeF
├── lib/
│   ├── ksef/
│   │   ├── client.ts              -- Wrapper na @ksef/client
│   │   ├── auth.ts                -- Logika uwierzytelniania
│   │   ├── encryption.ts          -- AES-256 / RSA-OAEP szyfrowanie
│   │   ├── invoice-builder.ts     -- Budowanie XML FA(3)
│   │   ├── invoice-validator.ts   -- Walidacja XML vs XSD
│   │   └── types.ts               -- Typy TypeScript
│   └── db/
│       └── ksef-schema.ts         -- Schema bazy danych
```

### Co przechowywac w bazie danych

```sql
-- Tabela sesji KSeF
CREATE TABLE ksef_sessions (
  id            UUID PRIMARY KEY,
  reference_no  TEXT NOT NULL UNIQUE,  -- referenceNumber z KSeF
  status        TEXT NOT NULL,         -- open, closed, error
  session_type  TEXT NOT NULL,         -- online, batch
  nip           TEXT NOT NULL,         -- NIP podatnika
  opened_at     TIMESTAMP NOT NULL,
  closed_at     TIMESTAMP,
  upo_reference TEXT,                  -- referencja UPO po zamknieciu
  created_at    TIMESTAMP DEFAULT NOW()
);

-- Tabela faktur
CREATE TABLE ksef_invoices (
  id              UUID PRIMARY KEY,
  session_id      UUID REFERENCES ksef_sessions(id),
  ksef_number     TEXT UNIQUE,         -- numer nadany przez KSeF
  invoice_number  TEXT NOT NULL,       -- numer wlasny faktury
  invoice_type    TEXT NOT NULL,       -- FA, KOR (korekta)
  seller_nip      TEXT NOT NULL,
  buyer_nip       TEXT,
  buyer_name      TEXT NOT NULL,
  net_amount      DECIMAL(12,2),
  vat_amount      DECIMAL(12,2),
  gross_amount    DECIMAL(12,2),
  issue_date      DATE NOT NULL,
  sale_date       DATE,
  status          TEXT NOT NULL,       -- draft, sent, accepted, rejected, error
  xml_content     TEXT,                -- oryginalny XML (opcjonalnie)
  error_message   TEXT,
  sent_at         TIMESTAMP,
  accepted_at     TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW()
);

-- Tabela tokenow KSeF (szyfrowane!)
CREATE TABLE ksef_credentials (
  id              UUID PRIMARY KEY,
  nip             TEXT NOT NULL UNIQUE,
  ksef_token      TEXT NOT NULL,       -- ZASZYFROWANY token KSeF
  access_token    TEXT,                -- ZASZYFROWANY JWT accessToken
  refresh_token   TEXT,                -- ZASZYFROWANY JWT refreshToken
  token_expires   TIMESTAMP,
  refresh_expires TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW()
);

-- Tabela UPO (Urzedowe Poswiadczenie Odbioru)
CREATE TABLE ksef_upo (
  id              UUID PRIMARY KEY,
  session_id      UUID REFERENCES ksef_sessions(id),
  reference_no    TEXT NOT NULL,
  upo_content     TEXT,                -- XML UPO
  download_url    TEXT,                -- presigned URL
  downloaded_at   TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW()
);
```

### Funkcjonalnosci panelu admin

#### Dashboard KSeF
- Status polaczenia z KSeF (zielony/czerwony)
- Liczba faktur wyslanych dzis/tydzien/miesiac
- Ostatnie bledy i ostrzezenia
- Informacja o aktualnych limitach (z `/api/v2/rate-limits`)

#### Lista faktur
- Filtry: data, NIP nabywcy, status, typ faktury
- Sortowanie po dacie wystawienia, kwocie
- Status kazdej faktury (draft/wyslana/zaakceptowana/odrzucona)
- Eksport do CSV/PDF
- Akcje: wyslij, podglad XML, pobierz UPO

#### Formularz wystawienia faktury
- Pola zgodne z FA(3): dane sprzedawcy, nabywcy, wiersze, stawki VAT
- Auto-walidacja XML przed wyslaniem
- Podglad wygenerowanego XML
- Przycisk "Wyslij do KSeF" z potwierdzeniem

#### Ustawienia
- Konfiguracja NIP i danych firmy
- Zarzadzanie tokenem KSeF (upload/rotacja)
- Wybor srodowiska (test/produkcja)
- Konfiguracja webhookow/powiadomien

### Przykladowa implementacja API route (Next.js App Router)

```typescript
// app/api/ksef/invoices/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getKsefClient } from '@/lib/ksef/client';
import { buildInvoiceXml } from '@/lib/ksef/invoice-builder';
import { encryptInvoice } from '@/lib/ksef/encryption';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const invoiceData = await request.json();

    // 1. Zbuduj XML FA(3)
    const xml = buildInvoiceXml(invoiceData);

    // 2. Waliduj XML vs XSD
    // const validation = await validateXml(xml);
    // if (!validation.valid) return NextResponse.json({ error: validation.errors }, { status: 400 });

    // 3. Pobierz klienta KSeF z aktywna sesja
    const client = await getKsefClient();

    // 4. Zaszyfruj fakture
    const encrypted = await encryptInvoice(xml, client.sessionAesKey);

    // 5. Wyslij do KSeF
    const result = await client.invoices.sendInvoice(encrypted);

    // 6. Zapisz w bazie
    await db.ksefInvoices.create({
      data: {
        sessionId: client.currentSessionId,
        ksefNumber: result.ksefNumber,
        invoiceNumber: invoiceData.number,
        invoiceType: invoiceData.type,
        sellerNip: invoiceData.seller.nip,
        buyerNip: invoiceData.buyer.nip,
        buyerName: invoiceData.buyer.name,
        netAmount: invoiceData.totals.net,
        vatAmount: invoiceData.totals.vat,
        grossAmount: invoiceData.totals.gross,
        issueDate: invoiceData.issueDate,
        saleDate: invoiceData.saleDate,
        status: 'sent',
        xmlContent: xml,
        sentAt: new Date(),
      }
    });

    return NextResponse.json({
      success: true,
      ksefNumber: result.ksefNumber,
    });

  } catch (error) {
    console.error('[KSeF] Invoice send error:', error);
    return NextResponse.json(
      { error: 'Blad wyslania faktury do KSeF' },
      { status: 500 }
    );
  }
}
```

### Instalacja zaleznosci

```bash
# Klient KSeF TypeScript (API v2)
pnpm add @ksef/client

# Obsluga XML
pnpm add fast-xml-parser xmlbuilder2

# Walidacja XSD (opcjonalnie)
pnpm add libxmljs2

# Szyfrowanie (Node.js crypto jest wbudowane)
# AES-256-CBC + RSA-OAEP -- dostepne natywnie w Node.js 20+
```

---

## Zrodla

- [Portal KSeF -- Wsparcie dla integratorow](https://ksef.podatki.gov.pl/ksef-na-okres-obligatoryjny/wsparcie-dla-integratorow/)
- [Dokumentacja API KSeF (srodowisko testowe)](https://api-test.ksef.mf.gov.pl/docs/v2)
- [GitHub CIRFMF/ksef-docs -- oficjalna dokumentacja](https://github.com/CIRFMF/ksef-docs)
- [GitHub CIRFMF/ksef-docs -- przeglad zmian API 2.0](https://github.com/CIRFMF/ksef-docs/blob/main/przeglad-kluczowych-zmian-ksef-api-2-0.md)
- [GitHub lkow/ksef-client-ts -- TypeScript SDK](https://github.com/lkow/ksef-client-ts)
- [KsBot -- KSeF API 2.0 endpointy](https://ksbot.pl/api/ksef-api-2-0/)
- [Struktura logiczna FA(3) -- portal KSeF](https://ksef.podatki.gov.pl/informacje-ogolne-ksef-20/struktura-logiczna-fa-3/)
- [Terminy i obowiazki KSeF 2026-2027 -- amavat](https://amavat.pl/terminy-i-obowiazki-zwiazane-z-ksef-aktualny-harmonogram-zmian/)
- [KSeF API -- poradnik dla programistow](https://www.i-malaksiegowosc.pl/ksef-api-i-techniczne-integracje-poradnik-dla-programistow-i-dzialow-it/)
- [npm -- pakiety KSeF](https://www.npmjs.com/search?q=keywords:ksef)
- [Publikacja dokumentacji API KSeF 2.0 i FA(3)](https://ksef.podatki.gov.pl/wyjasnienia/publikacja-dokumentacji-api-ksef-20-oraz-struktury-logicznej-fa-3-30062025/)
- [Exorigo-Upos -- KSeF 2.0 new API](https://www.exorigo-upos.com/blog/ksef-2-0-new-api-the-last-call-to-prepare-for-mandatory-e-invoicing/)
- [FA(3) vs FA(2) roznice](https://portal.faktura.pl/podatki/alarm-podatkowy/ksef-512-znakow-zalaczniki-i-nowe-zasady-platnosci-czym-rozni-sie-fa3-od-fa2/)
