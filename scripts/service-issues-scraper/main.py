#!/usr/bin/env python3
"""Service issues scraper — main orchestrator.

Usage:
    python main.py --brand godex
    python main.py --brand godex --skip-reddit
    python main.py --brand godex --max-hits 50
"""

import argparse
import json
import os
import sys
import time
from collections import Counter
from dataclasses import asdict
from pathlib import Path

from dotenv import load_dotenv

from scrapers.reddit import search_reddit, RawHit
from scrapers.elektroda import search_elektroda
from filters.llm_filter import filter_relevant, extract_issue


HERE = Path(__file__).parent
OUTPUT_DIR = HERE / "output"
OUTPUT_DIR.mkdir(exist_ok=True)

CACHE_TTL_SECONDS = 24 * 3600  # 24h


def cache_path(brand_slug: str) -> Path:
    return OUTPUT_DIR / f"{brand_slug}.raw.json"


def load_cached_hits(brand_slug: str, max_age: int = CACHE_TTL_SECONDS) -> list[RawHit] | None:
    p = cache_path(brand_slug)
    if not p.exists():
        return None
    age = time.time() - p.stat().st_mtime
    if age > max_age:
        print(f"[cache] expired ({int(age/3600)}h old), will re-scrape")
        return None
    try:
        with open(p, encoding="utf-8") as f:
            data = json.load(f)
        hits = [RawHit(**item) for item in data]
        print(f"[cache] loaded {len(hits)} hits from {p.name} ({int(age/60)}min old)")
        return hits
    except Exception as e:
        print(f"[cache] failed to load: {e}")
        return None


def save_cached_hits(brand_slug: str, hits: list[RawHit]) -> None:
    p = cache_path(brand_slug)
    with open(p, "w", encoding="utf-8") as f:
        json.dump([asdict(h) for h in hits], f, ensure_ascii=False, indent=2)
    print(f"[cache] saved {len(hits)} hits to {p.name}")


def load_config() -> dict:
    with open(HERE / "config.json", encoding="utf-8") as f:
        return json.load(f)


def collect_raw_hits(brand_cfg: dict, limits: dict, skip_reddit: bool, skip_elektroda: bool) -> list[RawHit]:
    hits: list[RawHit] = []
    queries_pl = brand_cfg["queries_pl"]
    queries_en = brand_cfg["queries_en"]
    subs = brand_cfg.get("reddit_subs", [])

    if not skip_reddit:
        print(f"[reddit] fetching ({len(queries_pl) + len(queries_en)} queries)...")
        hits += search_reddit(
            queries_pl + queries_en,
            subs,
            per_query_limit=limits["reddit_results_per_query"],
        )
        print(f"[reddit] got {len(hits)} raw hits")

    if not skip_elektroda:
        print(f"[elektroda] fetching ({len(queries_pl)} PL queries)...")
        elektroda_hits = search_elektroda(
            queries_pl,
            per_query_limit=limits["elektroda_results_per_query"],
        )
        print(f"[elektroda] got {len(elektroda_hits)} raw hits")
        hits += elektroda_hits

    return hits


def filter_and_extract(brand_cfg: dict, raw_hits: list[RawHit], limits: dict, max_hits: int | None) -> list[dict]:
    name = brand_cfg["name"]
    models = brand_cfg["models"]
    name_lower = name.lower()

    cleaned: list[dict] = []
    seen_titles: set[str] = set()
    skipped_brand = 0
    skipped_llm = 0

    for i, hit in enumerate(raw_hits):
        if max_hits and len(cleaned) >= max_hits:
            break

        if hit.title in seen_titles:
            continue
        seen_titles.add(hit.title)

        text_len = len(hit.text)
        if text_len < limits["min_text_length"]:
            continue
        if text_len > limits["max_text_length"]:
            hit_text = hit.text[: limits["max_text_length"]]
        else:
            hit_text = hit.text

        full_text = f"TITLE: {hit.title}\n\n{hit_text}"

        # PRE-FILTER: brand name must appear somewhere in title or text
        # This eliminates false positives where only a generic model number matches.
        combined = (hit.title + " " + hit.text).lower()
        if name_lower not in combined:
            skipped_brand += 1
            continue

        rel = filter_relevant(name, models, full_text)
        if not rel or not rel.get("relevant"):
            skipped_llm += 1
            continue

        ext = extract_issue(name, full_text)
        if not ext:
            skipped_llm += 1
            continue

        cleaned.append({
            "source": hit.source,
            "url": hit.url,
            "title": hit.title,
            "date": hit.date,
            "score": hit.score,
            **ext,
        })

        if (i + 1) % 10 == 0:
            print(f"  ... processed {i + 1}/{len(raw_hits)}, kept {len(cleaned)}, skipped_brand {skipped_brand}, skipped_llm {skipped_llm}")

    print(f"  Final: kept {len(cleaned)}, skipped_brand {skipped_brand}, skipped_llm {skipped_llm}")
    return cleaned


def write_outputs(brand_slug: str, brand_name: str, items: list[dict]) -> None:
    json_path = OUTPUT_DIR / f"{brand_slug}.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    print(f"[out] {json_path}")

    # frequency by symptom category
    cat_count = Counter(it.get("category", "other") for it in items)
    model_count = Counter(it.get("model") for it in items if it.get("model"))

    md_path = OUTPUT_DIR / f"{brand_slug}.md"
    lines: list[str] = []
    lines.append(f"# Najczęstsze problemy techniczne {brand_name} — zebrane z forów")
    lines.append("")
    lines.append(f"Zebrano **{len(items)}** zweryfikowanych przypadków z Reddit i elektroda.pl. Dane filtrowane przez Claude Haiku — odrzucono fragmenty bez konkretnej usterki.")
    lines.append("")

    lines.append("## Częstotliwość kategorii usterek")
    lines.append("")
    for cat, n in cat_count.most_common():
        lines.append(f"- **{cat}**: {n}")
    lines.append("")

    lines.append("## Najczęściej zgłaszane modele")
    lines.append("")
    for model, n in model_count.most_common(10):
        lines.append(f"- {model}: {n}")
    lines.append("")

    lines.append("## Przypadki (uporządkowane wg kategorii)")
    lines.append("")

    by_cat: dict[str, list[dict]] = {}
    for it in items:
        by_cat.setdefault(it.get("category", "other"), []).append(it)

    for cat in sorted(by_cat.keys()):
        lines.append(f"### {cat}")
        lines.append("")
        for it in by_cat[cat]:
            model = it.get("model") or "—"
            lines.append(f"**{model} — {it.get('symptom', '?')}**")
            if it.get("root_cause"):
                lines.append(f"- Przyczyna: {it['root_cause']}")
            if it.get("solution") and it["solution"] != "unknown":
                lines.append(f"- Rozwiązanie: {it['solution']}")
            lines.append(f"- Źródło: [{it['source']}]({it['url']})")
            lines.append("")
        lines.append("")

    with open(md_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"[out] {md_path}")


def main() -> int:
    load_dotenv(HERE / ".env")

    parser = argparse.ArgumentParser()
    parser.add_argument("--brand", required=True, help="Brand slug from config.json (e.g. godex)")
    parser.add_argument("--skip-reddit", action="store_true")
    parser.add_argument("--skip-elektroda", action="store_true")
    parser.add_argument("--max-hits", type=int, default=None, help="Stop after N filtered cases")
    parser.add_argument("--no-cache", action="store_true", help="Force fresh scraping (ignore raw cache)")
    args = parser.parse_args()

    cfg = load_config()
    brand_cfg = cfg["brands"].get(args.brand)
    if not brand_cfg:
        print(f"Brand '{args.brand}' not found in config.json. Available: {list(cfg['brands'].keys())}")
        return 1

    if not os.environ.get("OPENAI_API_KEY"):
        print("ERROR: OPENAI_API_KEY not set. Add to .env")
        return 1

    print(f"=== Scraping issues for {brand_cfg['name']} ===")

    raw: list[RawHit] | None = None
    if not args.no_cache:
        raw = load_cached_hits(args.brand)

    if raw is None:
        raw = collect_raw_hits(brand_cfg, cfg["limits"], args.skip_reddit, args.skip_elektroda)
        save_cached_hits(args.brand, raw)

    print(f"\n=== Total raw hits: {len(raw)} ===\n")

    print("=== Filtering and extracting (Claude Haiku) ===")
    items = filter_and_extract(brand_cfg, raw, cfg["limits"], args.max_hits)
    print(f"\n=== Kept {len(items)} relevant cases ===\n")

    write_outputs(args.brand, brand_cfg["name"], items)
    return 0


if __name__ == "__main__":
    sys.exit(main())
