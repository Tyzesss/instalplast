from pathlib import Path
import re
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
ts = (ROOT / "src/components/landing/lubuskie-map-data.ts").read_text(encoding="utf-8")
path = re.search(r'LUBUSKIE_PATH =\n  "([^"]+)"', ts).group(1)
nums = re.findall(r"([\d.]+),([\d.]+)", path)
pts = [(float(x), float(y)) for x, y in nums]
vw, vh = 400, 613
scale = 2
img = Image.new("RGB", (vw * scale, vh * scale), (255, 255, 255))
d = ImageDraw.Draw(img)
d.polygon([(x * scale, y * scale) for x, y in pts], fill=(196, 92, 74), outline=(139, 46, 34))
for line in ts.splitlines():
    if "name:" not in line:
        continue
    m = re.search(r'name: "([^"]+)".*x: ([\d.]+), y: ([\d.]+).*hub: (true|false)', line)
    if not m:
        continue
    name = m.group(1)
    x, y = float(m.group(2)) * scale, float(m.group(3)) * scale
    hub = m.group(4) == "true"
    r = 7 if hub else 4
    d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255), outline=(30, 30, 30))
    d.text((x + 8, y - 5), name, fill=(30, 30, 30))
out = ROOT / "scripts/lubuskie-preview.png"
img.save(out)
print(f"pts={len(pts)} saved={out}")
