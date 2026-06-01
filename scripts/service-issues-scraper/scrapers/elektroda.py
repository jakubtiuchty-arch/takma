"""Elektroda.pl scraper — Polish electronics forum.

Uses Google site:elektroda.pl search via duckduckgo as fallback (no API needed),
or direct site search.
"""

import time
import urllib.parse
from dataclasses import dataclass

import requests
from bs4 import BeautifulSoup

from .reddit import RawHit  # reuse same dataclass


HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/130.0 Safari/537.36",
    "Accept-Language": "pl-PL,pl;q=0.9,en;q=0.8",
}


def _search_elektroda(query: str, limit: int = 20) -> list[str]:
    """Use elektroda's built-in search to get topic URLs.
    Falls back to DuckDuckGo HTML search if elektroda's search times out.
    """
    # Try direct elektroda search first (longer timeout)
    params = {"keywords": query, "search_type": "all"}
    url = "https://www.elektroda.pl/rtvforum/search.php?" + urllib.parse.urlencode(params)
    try:
        r = requests.get(url, headers=HEADERS, timeout=45)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "lxml")
        links: list[str] = []
        for a in soup.select("a[href*='topic']"):
            href = a.get("href", "")
            if not href:
                continue
            if href.startswith("/"):
                href = "https://www.elektroda.pl" + href
            if "topic" in href and href not in links:
                links.append(href)
            if len(links) >= limit:
                break
        if links:
            return links
        # search returned but empty → fall through to DDG
    except Exception as e:
        print(f"  ! elektroda direct search failed for '{query}': {e}, trying DuckDuckGo fallback")

    # Fallback: DuckDuckGo HTML search with site:elektroda.pl
    try:
        ddg_url = "https://html.duckduckgo.com/html/"
        ddg_params = {"q": f"site:elektroda.pl {query}"}
        r = requests.post(ddg_url, headers=HEADERS, data=ddg_params, timeout=20)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "lxml")
        links: list[str] = []
        for a in soup.select("a.result__a, a[href*='elektroda.pl']"):
            href = a.get("href", "")
            if "elektroda.pl" in href and "topic" in href and href not in links:
                # DDG wraps URLs sometimes — extract real
                if "uddg=" in href:
                    real = urllib.parse.parse_qs(urllib.parse.urlparse(href).query).get("uddg", [None])[0]
                    if real:
                        href = real
                links.append(href)
            if len(links) >= limit:
                break
        return links
    except Exception as e:
        print(f"  ! DDG fallback also failed for '{query}': {e}")
        return []


def _fetch_topic(url: str) -> RawHit | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=20)
        r.raise_for_status()
    except Exception as e:
        print(f"  ! elektroda fetch failed {url}: {e}")
        return None

    soup = BeautifulSoup(r.text, "lxml")

    title_el = soup.select_one("h1") or soup.select_one("title")
    title = title_el.get_text(strip=True) if title_el else url

    posts = soup.select(".postbody, .post-content, .post_text")
    if not posts:
        posts = soup.select("[class*='post']")

    text_blobs: list[str] = []
    for p in posts[:5]:
        txt = p.get_text(separator=" ", strip=True)
        if txt and len(txt) > 80:
            text_blobs.append(txt)

    if not text_blobs:
        return None

    return RawHit(
        source="elektroda.pl",
        url=url,
        title=title,
        text="\n\n---\n\n".join(text_blobs[:3]),
        date="",
        score=0,
    )


def search_elektroda(queries: list[str], per_query_limit: int = 20) -> list[RawHit]:
    hits: list[RawHit] = []
    seen: set[str] = set()
    for query in queries:
        urls = _search_elektroda(query, limit=per_query_limit)
        for u in urls:
            if u in seen:
                continue
            seen.add(u)
            hit = _fetch_topic(u)
            if hit:
                hits.append(hit)
            time.sleep(1.5)  # politeness
        time.sleep(2)
    return hits
