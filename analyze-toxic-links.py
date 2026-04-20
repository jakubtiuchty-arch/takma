#!/usr/bin/env python3
"""Analyze Ahrefs CSVs for toxic backlinks → generate disavow.txt"""
import csv
import re
from collections import Counter, defaultdict
from pathlib import Path

BASE = Path("/Users/jakubtiuchty/takma")
REFDOMAINS_CSV = BASE / "takma.com.pl-refdomains-subdomains_2026-04-19_10-26-51.csv"
BACKLINKS_CSV = BASE / "takma.com.pl-backlinks-subdomains_2026-04-19_10-26-25.csv"

SPAM_TLDS = {"xyz", "top", "tk", "cf", "ga", "ml", "click", "loan", "work",
             "bid", "date", "racing", "win", "party", "trade", "review",
             "accountant", "cricket", "faith", "science", "stream", "download",
             "gq", "men", "mom", "cyou", "icu", "buzz", "rest", "pics"}

SPAM_ANCHOR_PATTERNS = [
    r"\b(casino|kasyno|poker|bet\s?365|gambling|slots?|blackjack|roulette)\b",
    r"\b(viagra|cialis|pharmacy|cbd|kamagra|tadalafil|sildenafil)\b",
    r"\b(porn|xxx|escort|sex\s?cam|dating\s?site|adult\s?dating)\b",
    r"\b(payday\s?loan|quick\s?loan|bad\s?credit|mortgage\s?rate)\b",
    r"\b(replica\s?(rolex|watch|handbag|louis))\b",
    r"\b(cheap\s?(jersey|nfl|nba|nike))\b",
    r"\b(buy\s?(essay|followers|likes|backlinks))\b",
]
SPAM_ANCHOR_RE = re.compile("|".join(SPAM_ANCHOR_PATTERNS), re.IGNORECASE)

CYRILLIC_RE = re.compile(r"[\u0400-\u04FF]")
CJK_RE = re.compile(r"[\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]")
ARABIC_RE = re.compile(r"[\u0600-\u06FF]")

GOOD_LANGS = {"pl", "en", "de", "cs", "sk", "uk"}

def read_utf16_tsv(path):
    with open(path, "r", encoding="utf-16") as f:
        reader = csv.DictReader(f, delimiter="\t")
        return list(reader)

def norm(s):
    return (s or "").strip().strip('"')

def domain_tld(d):
    parts = d.lower().split(".")
    return parts[-1] if parts else ""

def classify_refdomain(row):
    reasons = []
    domain = norm(row.get("Domain", "")).lower()
    is_spam = norm(row.get("Is spam", ""))
    try:
        dr = float(norm(row.get("DR", "0")) or 0)
    except ValueError:
        dr = 0
    try:
        traffic = int(norm(row.get("Traffic ", "0")) or 0)
    except ValueError:
        traffic = 0
    dofollow_links = norm(row.get("Dofollow links", "0"))

    tld = domain_tld(domain)

    if is_spam and is_spam.lower() in {"yes", "true", "1"}:
        reasons.append("ahrefs_spam_flag")
    if tld in SPAM_TLDS:
        reasons.append(f"spam_tld:.{tld}")
    if CYRILLIC_RE.search(domain):
        reasons.append("cyrillic_domain")
    if CJK_RE.search(domain):
        reasons.append("cjk_domain")
    if ARABIC_RE.search(domain):
        reasons.append("arabic_domain")
    if dr == 0 and traffic == 0:
        reasons.append("dr0_traffic0")
    elif dr < 5 and traffic < 50:
        reasons.append("dr<5_traffic<50")

    return reasons, {"domain": domain, "dr": dr, "traffic": traffic,
                     "tld": tld, "dofollow_links": dofollow_links}

def main():
    print("=" * 70)
    print("ANALIZA REFERRING DOMAINS")
    print("=" * 70)
    refs = read_utf16_tsv(REFDOMAINS_CSV)
    print(f"Łącznie ref. domains: {len(refs)}")

    toxic = []
    by_reason = Counter()
    dr_buckets = Counter()
    tld_dist = Counter()
    for r in refs:
        reasons, meta = classify_refdomain(r)
        tld_dist[meta["tld"]] += 1
        if meta["dr"] == 0:
            dr_buckets["0"] += 1
        elif meta["dr"] < 10:
            dr_buckets["1-9"] += 1
        elif meta["dr"] < 30:
            dr_buckets["10-29"] += 1
        elif meta["dr"] < 50:
            dr_buckets["30-49"] += 1
        else:
            dr_buckets["50+"] += 1
        if reasons:
            toxic.append((meta, reasons))
            for x in reasons:
                by_reason[x] += 1

    print("\nDR rozkład:")
    for k in ["0", "1-9", "10-29", "30-49", "50+"]:
        print(f"  DR {k:>6}: {dr_buckets.get(k, 0):>4}")

    print("\nTop 15 TLD:")
    for tld, n in tld_dist.most_common(15):
        flag = "  [SPAM TLD]" if tld in SPAM_TLDS else ""
        print(f"  .{tld:<10} {n:>4}{flag}")

    print(f"\nDomeny z flagą toxic: {len(toxic)} / {len(refs)}")
    print("Powody:")
    for reason, n in by_reason.most_common():
        print(f"  {reason:<25} {n:>4}")

    print("\n" + "=" * 70)
    print("ANALIZA BACKLINKS (anchor text)")
    print("=" * 70)
    backlinks = read_utf16_tsv(BACKLINKS_CSV)
    print(f"Łącznie backlinków: {len(backlinks)}")

    spam_anchor_domains = defaultdict(list)
    cjk_cyrillic_pages = defaultdict(int)
    suspicious_anchors = Counter()

    for b in backlinks:
        anchor = norm(b.get("Anchor", ""))
        ref_page = norm(b.get("Referring page URL", ""))
        lang = norm(b.get("Language", "")).lower()
        domain_match = re.search(r"https?://(?:www\.)?([^/]+)", ref_page)
        domain = domain_match.group(1).lower() if domain_match else ""

        if SPAM_ANCHOR_RE.search(anchor):
            spam_anchor_domains[domain].append(anchor[:80])
            suspicious_anchors[anchor[:80]] += 1
        if CYRILLIC_RE.search(anchor) or CJK_RE.search(anchor) or ARABIC_RE.search(anchor):
            cjk_cyrillic_pages[domain] += 1

    print(f"\nDomeny z SPAM anchor patterns: {len(spam_anchor_domains)}")
    for d, anchors in sorted(spam_anchor_domains.items(), key=lambda x: -len(x[1]))[:20]:
        print(f"  {d} ({len(anchors)}×) — np. {anchors[0]}")

    print(f"\nDomeny z anchor w obcym alfabecie (CJK/cyrillic/arabic): {len(cjk_cyrillic_pages)}")
    for d, n in sorted(cjk_cyrillic_pages.items(), key=lambda x: -x[1])[:20]:
        print(f"  {d} — {n} linków")

    print("\nTop 15 spam anchorów:")
    for a, n in suspicious_anchors.most_common(15):
        print(f"  {n:>3}× {a}")

    print("\n" + "=" * 70)
    print("GENEROWANIE disavow.txt")
    print("=" * 70)

    # Dwie wersje disavow: SAFE (konserwatywna) + TIGHT (agresywna)
    safe_domains = {}
    tight_domains = {}

    refs_by_domain = {}
    for r in refs:
        d = norm(r.get("Domain", "")).lower()
        refs_by_domain[d] = r

    def get_meta(d):
        r = refs_by_domain.get(d)
        if not r: return (0, 0, False)
        try: dr = float(norm(r.get("DR","0")) or 0)
        except: dr = 0
        try: tr = int(norm(r.get("Traffic ","0")) or 0)
        except: tr = 0
        spam = norm(r.get("Is spam","")).lower() in {"yes","true","1"}
        return (dr, tr, spam)

    for meta, reasons in toxic:
        d = meta["domain"]
        if not d or d == "takma.com.pl":
            continue
        dr, tr, spam = get_meta(d)

        # SAFE: flaga spam + traffic 0 (PBN/link farm), spam TLD, obcy alfabet
        is_safe_disavow = False
        if spam and tr == 0:
            is_safe_disavow = True
        if meta["tld"] in SPAM_TLDS:
            is_safe_disavow = True
        if "cyrillic_domain" in reasons or "cjk_domain" in reasons or "arabic_domain" in reasons:
            is_safe_disavow = True

        if is_safe_disavow:
            safe_domains[d] = set(r for r in reasons if r != "dr<5_traffic<50")
        # TIGHT: wszystko z flagą spam lub innymi sygnałami
        if reasons:
            tight_domains[d] = set(reasons)

    for d, anchors in spam_anchor_domains.items():
        if d and d != "takma.com.pl":
            safe_domains.setdefault(d, set()).add(f"spam_anchor({len(anchors)})")
            tight_domains.setdefault(d, set()).add(f"spam_anchor({len(anchors)})")
    for d, n in cjk_cyrillic_pages.items():
        if d and d != "takma.com.pl" and n >= 2:
            safe_domains.setdefault(d, set()).add(f"foreign_alphabet_anchor({n})")
            tight_domains.setdefault(d, set()).add(f"foreign_alphabet_anchor({n})")

    def strip_www(s): return {re.sub(r"^www\.", "", k): v for k, v in s.items()}
    safe_domains = strip_www(safe_domains)
    tight_domains = strip_www(tight_domains)
    safe_domains.pop("takma.com.pl", None)
    tight_domains.pop("takma.com.pl", None)

    def write_disavow(path, domains, label):
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"# Disavow file for takma.com.pl — {label}\n")
            f.write(f"# Generated: 2026-04-19\n")
            f.write(f"# Total domains: {len(domains)}\n")
            f.write(f"# Format: GSC disavow (domain: prefix)\n\n")
            for d in sorted(domains.keys()):
                reasons_str = ", ".join(sorted(domains[d]))
                f.write(f"# {reasons_str}\n")
                f.write(f"domain:{d}\n")

    write_disavow(BASE / "disavow-safe.txt", safe_domains, "SAFE (konserwatywny)")
    write_disavow(BASE / "disavow-tight.txt", tight_domains, "TIGHT (agresywny)")

    # Tabelka do review
    review = BASE / "disavow-review.md"
    with open(review, "w", encoding="utf-8") as f:
        f.write(f"# Disavow review — takma.com.pl\n\n")
        f.write(f"Data: 2026-04-19 | Ref. domains total: {len(refs)}\n\n")
        f.write(f"- **SAFE** (rekomendowane): {len(safe_domains)} domen\n")
        f.write(f"- **TIGHT** (agresywne): {len(tight_domains)} domen\n\n")
        f.write(f"## Różnica: TIGHT \\ SAFE ({len(set(tight_domains)-set(safe_domains))} domen — review ręczny!)\n\n")
        f.write("Te są w TIGHT ale nie w SAFE — niższy sygnał (np. DR<5 bez flagi spam, lub spam flag ale real traffic). Review przed disavow.\n\n")
        f.write("| Domena | DR | Traffic | Powody |\n|---|---:|---:|---|\n")
        for d in sorted(set(tight_domains) - set(safe_domains)):
            dr, tr, _ = get_meta(d)
            f.write(f"| {d} | {dr:.0f} | {tr} | {', '.join(sorted(tight_domains[d]))} |\n")
        f.write(f"\n## SAFE disavow — {len(safe_domains)} domen (top 50 po DR)\n\n")
        f.write("| Domena | DR | Traffic | Powody |\n|---|---:|---:|---|\n")
        sd = sorted(safe_domains.keys(), key=lambda x: -get_meta(x)[0])
        for d in sd[:50]:
            dr, tr, _ = get_meta(d)
            f.write(f"| {d} | {dr:.0f} | {tr} | {', '.join(sorted(safe_domains[d]))} |\n")

    print(f"\nZapisano:")
    print(f"  disavow-safe.txt  → {len(safe_domains)} domen (rekomendowane)")
    print(f"  disavow-tight.txt → {len(tight_domains)} domen (agresywne)")
    print(f"  disavow-review.md → tabelka do przeglądu")

if __name__ == "__main__":
    main()
