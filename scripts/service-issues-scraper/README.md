# service-issues-scraper

Skrypt zbierający najczęstsze problemy techniczne z urządzeniami AutoID
(drukarki, terminale, skanery) z polskich i międzynarodowych źródeł — do
wykorzystania przy tworzeniu treści blogowej `/poradnik/[slug]` na takma.com.pl.

Cel: dla marek bez własnej dokumentacji serwisowej (Godex, SATO, M3 Mobile)
zbudować bazę realnych case'ów technicznych z linkami źródłowymi.

## Stack
- Python 3.11+
- PRAW (Reddit API)
- requests + BeautifulSoup4 (elektroda.pl)
- anthropic (Claude Haiku do filtrowania)

## Quick start

```bash
cd scripts/service-issues-scraper
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # i wypełnij klucze API
python main.py --brand godex
```

## Output

```
output/
├── godex.json          # surowe znaleziska + categorization
└── godex.md            # gotowe do wklejenia w blog
```

## Źródła w MVP
- **Reddit** — r/printers, r/sysadmin, r/labels (PRAW oficjalne API)
- **elektroda.pl** — najlepsze polskie forum techniczne

## Następne źródła (po MVP)
- Google Search via SerpAPI
- YouTube comments via YouTube Data API
- Stack Exchange

## Wymagane env vars

- `REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET`, `REDDIT_USER_AGENT`
- `ANTHROPIC_API_KEY`

Uzyskanie kluczy Reddit: https://www.reddit.com/prefs/apps (script type)
