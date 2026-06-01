"""Reddit scraper — uses public JSON endpoints (no API key, no OAuth).

Reddit exposes every URL as JSON by appending `.json`. Rate limit: 60 req/min.
We respect this with sleep between calls.
"""

import time
from dataclasses import dataclass

import requests


HEADERS = {
    "User-Agent": "takma-issues-scraper/0.2 (research; contact: jakub.tiuchty@gmail.com)",
    "Accept": "application/json",
}


@dataclass
class RawHit:
    source: str
    url: str
    title: str
    text: str
    date: str
    score: int


def _fetch_json(url: str, params: dict | None = None, retries: int = 3) -> dict | None:
    for attempt in range(retries):
        try:
            r = requests.get(url, headers=HEADERS, params=params, timeout=20)
            if r.status_code == 429:
                wait = 30 * (attempt + 1)
                print(f"  ! rate limited, waiting {wait}s")
                time.sleep(wait)
                continue
            r.raise_for_status()
            return r.json()
        except Exception as e:
            print(f"  ! reddit fetch failed ({attempt + 1}/{retries}): {e}")
            time.sleep(5)
    return None


def _extract_hits_from_listing(data: dict, source_label: str) -> list[RawHit]:
    hits: list[RawHit] = []
    children = data.get("data", {}).get("children", []) if isinstance(data, dict) else []
    for child in children:
        post = child.get("data", {})
        if post.get("over_18"):
            continue
        permalink = post.get("permalink", "")
        if not permalink:
            continue
        hits.append(RawHit(
            source=source_label,
            url=f"https://reddit.com{permalink}",
            title=post.get("title", ""),
            text=post.get("selftext", "") or "",
            date=time.strftime("%Y-%m-%d", time.gmtime(post.get("created_utc", 0))),
            score=post.get("score", 0),
        ))
    return hits


def _fetch_post_comments(post_url: str, max_comments: int = 5) -> str:
    """Fetch top comments for a post (post_url is reddit permalink)."""
    json_url = post_url.rstrip("/") + ".json"
    data = _fetch_json(json_url, params={"limit": 25, "sort": "top"})
    if not data or not isinstance(data, list) or len(data) < 2:
        return ""
    comment_listing = data[1].get("data", {}).get("children", [])
    bodies: list[str] = []
    for c in comment_listing[:max_comments]:
        body = c.get("data", {}).get("body", "")
        if body and len(body) > 50 and body != "[removed]" and body != "[deleted]":
            bodies.append(body)
    if not bodies:
        return ""
    return "\n\n--- TOP COMMENTS ---\n" + "\n---\n".join(bodies)


def search_reddit(queries: list[str], subs: list[str], per_query_limit: int = 25) -> list[RawHit]:
    hits: list[RawHit] = []
    seen: set[str] = set()

    # global search
    for query in queries:
        data = _fetch_json(
            "https://www.reddit.com/search.json",
            params={"q": query, "limit": per_query_limit, "sort": "relevance", "type": "link"},
        )
        if not data:
            continue
        new_hits = _extract_hits_from_listing(data, "reddit")
        for h in new_hits:
            if h.url in seen:
                continue
            seen.add(h.url)
            # enrich with top comments (one extra call per hit, costs rate-limit budget)
            comments = _fetch_post_comments(h.url, max_comments=3)
            if comments:
                h.text = (h.text + comments).strip()
            hits.append(h)
            time.sleep(1.2)  # ~50 req/min, safely under 60
        time.sleep(2)
        print(f"  [reddit] '{query}': total {len(hits)} hits so far")

    # per-subreddit search (focused)
    for sub in subs:
        for query in queries[:3]:  # cap per-sub queries
            data = _fetch_json(
                f"https://www.reddit.com/r/{sub}/search.json",
                params={"q": query, "limit": 10, "sort": "relevance", "restrict_sr": "on"},
            )
            if not data:
                continue
            new_hits = _extract_hits_from_listing(data, f"reddit:r/{sub}")
            for h in new_hits:
                if h.url in seen:
                    continue
                seen.add(h.url)
                hits.append(h)
            time.sleep(1.5)
        print(f"  [reddit:r/{sub}] total {len(hits)} hits so far")

    return hits
