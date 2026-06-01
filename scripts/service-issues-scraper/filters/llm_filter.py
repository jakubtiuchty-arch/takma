"""LLM filter using OpenAI gpt-4o-mini (fast + cheap).

Two-stage filter:
1. Relevance: is this fragment about a *technical issue* with the brand's device?
2. Extraction: pull structured info — symptom, model, root cause, solution.
"""

import json
import os
import re

from openai import OpenAI


_client: OpenAI | None = None
MODEL = "gpt-4o-mini"


def _get_client() -> OpenAI:
    global _client
    if _client is None:
        _client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
    return _client


RELEVANCE_PROMPT = """You judge whether a forum/Reddit post is about a TECHNICAL ISSUE with a LABEL/BARCODE PRINTER from {brand_name}.

CRITICAL: {brand_name} makes industrial label printers (thermal/thermal-transfer, barcodes, EAN/QR codes). Model numbers like G500, RT700, EZ2250i refer to {brand_name} printers in this context — but the SAME numbers (G500, etc.) are used by Logitech mice, monitors, cars, and other products. You MUST verify the post is about a PRINTER, not another product type.

Return JSON only: {{"relevant": true|false, "model": "<exact {brand_name} model if mentioned, else empty>", "reason": "<3 words>"}}

REJECT if (any of these):
- post is about a mouse, monitor, computer, car, or any non-printer product
- post is on subreddit unrelated to printing/labeling (e.g. r/pcmasterrace, r/crtgaming, r/Ubuntu without printer context)
- model number matches but context is clearly about another product
- pure marketing / unboxing / review
- pre-purchase question with no symptom
- generic discussion without specific printer failure

ACCEPT if (all of these):
- post is clearly about a label/thermal/barcode PRINTER (mentions: printing labels, barcodes, ribbon, thermal head, label feed, calibration, media, etc.)
- describes specific symptom, error, or failure
- {brand_name} is the printer brand (not just a model number coincidence)

Models to look for: {models}

Text:
\"\"\"
{text}
\"\"\""""


EXTRACT_PROMPT = """Extract structured info from this {brand_name} technical issue post. Return JSON only:

{{
  "model": "<exact model, e.g. G500, RT700>",
  "symptom": "<one short sentence — what user observed, in Polish>",
  "root_cause": "<one sentence — likely cause if mentioned, in Polish>",
  "solution": "<one sentence — how it was fixed if mentioned, else 'unknown', in Polish>",
  "category": "<one of: printhead, mechanism, sensor, electronics, software, battery, screen, scanner, connectivity, other>",
  "severity": "<low|medium|high>"
}}

Text:
\"\"\"
{text}
\"\"\""""


def _parse_json(text: str) -> dict | None:
    try:
        return json.loads(text)
    except Exception:
        pass
    m = re.search(r"\{.*?\}", text, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(0))
        except Exception:
            return None
    return None


def filter_relevant(brand_name: str, models: list[str], text: str) -> dict | None:
    prompt = RELEVANCE_PROMPT.format(
        brand_name=brand_name,
        models=", ".join(models[:15]),
        text=text[:3000],
    )
    try:
        resp = _get_client().chat.completions.create(
            model=MODEL,
            response_format={"type": "json_object"},
            max_tokens=200,
            messages=[{"role": "user", "content": prompt}],
        )
        out = resp.choices[0].message.content or ""
    except Exception as e:
        print(f"  ! OpenAI relevance call failed: {e}")
        return None
    return _parse_json(out)


def extract_issue(brand_name: str, text: str) -> dict | None:
    prompt = EXTRACT_PROMPT.format(brand_name=brand_name, text=text[:3000])
    try:
        resp = _get_client().chat.completions.create(
            model=MODEL,
            response_format={"type": "json_object"},
            max_tokens=400,
            messages=[{"role": "user", "content": prompt}],
        )
        out = resp.choices[0].message.content or ""
    except Exception as e:
        print(f"  ! OpenAI extract call failed: {e}")
        return None
    return _parse_json(out)
