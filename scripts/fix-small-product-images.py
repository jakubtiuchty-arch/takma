#!/usr/bin/env python3
"""Doprowadza zdjęcia produktowe do wymogów Merchant Center.

Google odrzuca obrazy poniżej swojego progu („Image too small") i ostrzega przed
zaostrzeniem wymogów dla kolejnych — w sierpniu 2026 na koncie takmy było
1 odrzucenie i 96 ostrzeżeń. Skrypt skaluje produkt tak, by zajmował ~85% kadru,
i osadza go na białym kwadracie 800×800 (białe tło = styl katalogu i wymóg Google).

    python3 scripts/fix-small-product-images.py           # tylko raport
    python3 scripts/fix-small-product-images.py --apply   # nadpisuje, kopie w .image-backup/
"""
import os, sys, shutil
from PIL import Image

DIR = 'public/images/products'
BACKUP = '.image-backup/products'
TARGET = 800
MIN_SIDE = 500          # poniżej tego Google ostrzega lub odrzuca
APPLY = '--apply' in sys.argv

todo = []
for f in sorted(os.listdir(DIR)):
    if not f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        continue
    p = os.path.join(DIR, f)
    try:
        with Image.open(p) as im:
            w, h = im.size
    except Exception as e:
        print(f'  ! nie odczytano {f}: {e}')
        continue
    if w < MIN_SIDE or h < MIN_SIDE:
        todo.append((f, p, w, h))

todo.sort(key=lambda t: t[2] * t[3])
print(f'plików w katalogu: {len(os.listdir(DIR))}, do poprawy (<{MIN_SIDE}px): {len(todo)}\n')
for f, _, w, h in todo[:8]:
    print(f'   {w}×{h}  {f}')
if len(todo) > 8:
    print(f'   … i {len(todo) - 8} więcej')

if not APPLY:
    print('\nTryb raportu. Uruchom z --apply, żeby nadpisać pliki.')
    sys.exit(0)

os.makedirs(BACKUP, exist_ok=True)
done = 0
for f, p, w, h in todo:
    shutil.copy2(p, os.path.join(BACKUP, f))
    before = os.path.getsize(p)
    with Image.open(p) as im:
        im = im.convert('RGBA') if im.mode in ('RGBA', 'LA', 'P') else im.convert('RGB')
        scale = min(TARGET * 0.85 / w, TARGET * 0.85 / h)
        resized = im.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)
        canvas = Image.new('RGB', (TARGET, TARGET), (255, 255, 255))
        off = ((TARGET - resized.width) // 2, (TARGET - resized.height) // 2)
        # RGBA wkleja się z maską alfa, żeby przezroczyste tło stało się białe, nie czarne
        canvas.paste(resized, off, resized if resized.mode == 'RGBA' else None)
        ext = os.path.splitext(f)[1].lower()
        fmt = 'PNG' if ext == '.png' else 'WEBP' if ext == '.webp' else 'JPEG'
        canvas.save(p, fmt, quality=90) if fmt != 'PNG' else canvas.save(p, fmt, optimize=True)
    done += 1
    if done <= 5 or done % 25 == 0:
        print(f'  {f}: {w}×{h} → {TARGET}×{TARGET} ({before // 1024}kB → {os.path.getsize(p) // 1024}kB)')
print(f'\nPoprawiono {done} plików. Kopie oryginałów: {BACKUP}/')
