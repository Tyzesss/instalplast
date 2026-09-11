import re
from pathlib import Path

t = Path(r"C:/Users/Tymek/AppData/Local/Temp/lubuskie.svg").read_text(
    encoding="utf-8", errors="ignore"
)
paths = re.findall(r'\bd="([^"]+)"', t)
print("count", len(paths))
for i, p in enumerate(paths[:8]):
    print(i, len(p), p[:160].replace("\n", " "))

# Project towns into viewBox using Wikimedia location map bounds
# N:53.18 S:51.33 W:14.40 E:16.60  -> viewBox 0 0 400 460
BOUNDS = dict(n=53.18, s=51.33, w=14.40, e=16.60)
VW, VH = 400, 460

TOWNS = [
    ("Zielona Góra", 51.935, 15.506, True, True),
    ("Gorzów Wlkp.", 52.737, 15.229, False, True),
    ("Świebodzin", 52.247, 15.533, False, False),
    ("Sulechów", 52.085, 15.627, False, False),
    ("Nowa Sól", 51.803, 15.717, False, False),
    ("Żagań", 51.617, 15.315, False, False),
    ("Żary", 51.642, 15.142, False, False),
    ("Krosno Odrz.", 52.055, 15.099, False, False),
    ("Gubin", 51.950, 14.728, False, False),
    ("Lubsko", 51.784, 14.969, False, False),
    ("Kożuchów", 51.745, 15.594, False, False),
    ("Czerwieńsk", 52.013, 15.423, False, False),
    ("Szprotawa", 51.566, 15.537, False, False),
    ("Sława", 51.883, 16.072, False, False),
    ("Wschowa", 51.807, 16.317, False, False),
]


def xy(lat: float, lon: float) -> tuple[float, float]:
    x = (lon - BOUNDS["w"]) / (BOUNDS["e"] - BOUNDS["w"]) * VW
    y = (BOUNDS["n"] - lat) / (BOUNDS["n"] - BOUNDS["s"]) * VH
    return round(x, 1), round(y, 1)


for name, lat, lon, hub, label in TOWNS:
    x, y = xy(lat, lon)
    print(f'  {{ name: "{name}", x: {x}, y: {y}, hub: {str(hub).lower()}, label: {str(label).lower()} }},')

# Simplified Lubuskie outline (approx boundary points lat/lon clockwise from NW)
outline = [
    (52.95, 14.55),
    (53.12, 14.85),
    (53.15, 15.20),
    (53.05, 15.55),
    (52.85, 15.85),
    (52.70, 16.05),
    (52.45, 16.15),
    (52.20, 16.25),
    (51.95, 16.35),
    (51.75, 16.45),
    (51.55, 16.25),
    (51.40, 15.95),
    (51.38, 15.55),
    (51.42, 15.15),
    (51.55, 14.75),
    (51.75, 14.55),
    (52.00, 14.45),
    (52.25, 14.50),
    (52.50, 14.45),
    (52.75, 14.50),
]
pts = [xy(lat, lon) for lat, lon in outline]
# Build SVG path
parts = [f"M{pts[0][0]},{pts[0][1]}"]
for x, y in pts[1:]:
    parts.append(f"L{x},{y}")
parts.append("Z")
path = "".join(parts)
print("PATH_LEN", len(path))
print("PATH", path)
Path("scripts/lubuskie-path.txt").write_text(path, encoding="utf-8")
