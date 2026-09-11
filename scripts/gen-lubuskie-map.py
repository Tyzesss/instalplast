"""Generate high-detail Lubuskie SVG path from PRG/GeoJSON + verify town dots."""
from __future__ import annotations

import json
import math
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GEO = ROOT / "scripts" / "lubuskie-max.geojson"
OUT = ROOT / "src" / "components" / "landing" / "lubuskie-map-data.ts"
PREVIEW = ROOT / "scripts" / "lubuskie-preview.svg"
REPORT = ROOT / "scripts" / "lubuskie-verify.txt"

# Canonical names for Nominatim lookup + display labels on map
TOWN_QUERIES = [
    ("Zielona Góra", "Zielona Góra, Poland", True, True),
    ("Gorzów Wlkp.", "Gorzów Wielkopolski, Poland", False, True),
    ("Świebodzin", "Świebodzin, Poland", False, False),
    ("Sulechów", "Sulechów, lubuskie, Poland", False, False),
    ("Nowa Sól", "Nowa Sól, Poland", False, False),
    ("Żagań", "Żagań, Poland", False, False),
    ("Żary", "Żary, Poland", False, False),
    ("Krosno Odrz.", "Krosno Odrzańskie, Poland", False, False),
    ("Gubin", "Gubin, Poland", False, False),
    ("Lubsko", "Lubsko, Poland", False, False),
    ("Kożuchów", "Kożuchów, Poland", False, False),
    ("Czerwieńsk", "Czerwieńsk, Poland", False, False),
    ("Szprotawa", "Szprotawa, Poland", False, False),
    ("Sława", "Sława, lubuskie, Poland", False, False),
    ("Wschowa", "Wschowa, Poland", False, False),
]

# Fallback coords (WGS84) if Nominatim rate-limits — from OSM / Wikipedia
FALLBACK = {
    "Zielona Góra": (51.9356, 15.5064),
    "Gorzów Wlkp.": (52.7368, 15.2288),
    "Świebodzin": (52.2474, 15.5335),
    "Sulechów": (52.0851, 15.6270),
    "Nowa Sól": (51.8033, 15.7171),
    "Żagań": (51.6174, 15.3149),
    "Żary": (51.6420, 15.1420),
    "Krosno Odrz.": (52.0549, 15.0989),
    "Gubin": (51.9496, 14.7284),
    "Lubsko": (51.7843, 14.9689),
    "Kożuchów": (51.7454, 15.5940),
    "Czerwieńsk": (52.0131, 15.4231),
    "Szprotawa": (51.5658, 15.5366),
    "Sława": (51.8828, 16.0720),
    "Wschowa": (51.8072, 16.3170),
}


def perp_dist(p, a, b):
    ax, ay = a
    bx, by = b
    px, py = p
    dx, dy = bx - ax, by - ay
    if dx == 0 and dy == 0:
        return ((px - ax) ** 2 + (py - ay) ** 2) ** 0.5
    t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
    return ((px - (ax + t * dx)) ** 2 + (py - (ay + t * dy)) ** 2) ** 0.5


def douglas(pts, eps):
    if len(pts) < 3:
        return pts
    dmax, idx = 0, 0
    for i in range(1, len(pts) - 1):
        d = perp_dist(pts[i], pts[0], pts[-1])
        if d > dmax:
            dmax, idx = d, i
    if dmax > eps:
        left = douglas(pts[: idx + 1], eps)
        right = douglas(pts[idx:], eps)
        return left[:-1] + right
    return [pts[0], pts[-1]]


def point_in_ring(lon: float, lat: float, ring: list[tuple[float, float]]) -> bool:
    """Ray casting; ring as (lon, lat)."""
    inside = False
    n = len(ring)
    j = n - 1
    for i in range(n):
        xi, yi = ring[i]
        xj, yj = ring[j]
        if ((yi > lat) != (yj > lat)) and (
            lon < (xj - xi) * (lat - yi) / (yj - yi + 1e-18) + xi
        ):
            inside = not inside
        j = i
    return inside


def load_outer_ring(geo: dict) -> list[tuple[float, float]]:
    if geo["type"] == "Polygon":
        coords = geo["coordinates"][0]
    elif geo["type"] == "MultiPolygon":
        # largest outer ring
        coords = max(geo["coordinates"], key=lambda p: len(p[0]))[0]
    else:
        raise ValueError(geo["type"])
    return [(float(lon), float(lat)) for lon, lat in coords]


def nominatim_latlon(query: str) -> tuple[float, float] | None:
    url = (
        "https://nominatim.openstreetmap.org/search?"
        + urllib.parse.urlencode(
            {
                "q": query,
                "format": "json",
                "limit": 1,
                "countrycodes": "pl",
            }
        )
    )
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "InstalPlastMapGen/1.0 (local build script)"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        if not data:
            return None
        return float(data[0]["lat"]), float(data[0]["lon"])
    except Exception:
        return None


def main() -> None:
    geo = json.loads(GEO.read_text(encoding="utf-8"))
    ring = load_outer_ring(geo)
    if ring[0] != ring[-1]:
        ring = ring + [ring[0]]

    lons = [p[0] for p in ring]
    lats = [p[1] for p in ring]

    # ~0.0015° ≈ 150 m — keep Odra meanders + Wschowa tail sharp
    # Raise recursion limit for large polygons
    import sys

    sys.setrecursionlimit(20000)
    simp = douglas(ring, 0.0015)
    if simp[0] != simp[-1]:
        simp.append(simp[0])

    pad = 0.04
    west, east = min(lons) - pad, max(lons) + pad
    south, north = min(lats) - pad, max(lats) + pad
    mid_lat = (south + north) / 2
    lon_scale = math.cos(math.radians(mid_lat))

    vw = 400
    vh = round(vw * ((north - south) / ((east - west) * lon_scale)))

    def xy(lon: float, lat: float) -> tuple[float, float]:
        x = (lon - west) / (east - west) * vw
        y = (north - lat) / (north - south) * vh
        return round(x, 1), round(y, 1)

    pts = [xy(lon, lat) for lon, lat in simp[:-1]]
    parts = [f"M{pts[0][0]},{pts[0][1]}"]
    for x, y in pts[1:]:
        parts.append(f"L{x},{y}")
    parts.append("Z")
    path = "".join(parts)

    report_lines = [
        f"source={GEO.name}",
        f"raw_pts={len(ring)} simplified={len(simp)} viewBox=0 0 {vw} {vh}",
        f"bounds lon=[{min(lons):.4f},{max(lons):.4f}] lat=[{min(lats):.4f},{max(lats):.4f}]",
        "",
        "town | lat | lon | inside_polygon | source",
    ]

    towns_out: list[tuple[str, float, float, bool, bool]] = []
    for name, query, hub, label in TOWN_QUERIES:
        coords = nominatim_latlon(query)
        src = "nominatim"
        if coords is None:
            coords = FALLBACK[name]
            src = "fallback"
        lat, lon = coords
        inside = point_in_ring(lon, lat, ring[:-1] if ring[0] == ring[-1] else ring)
        report_lines.append(
            f"{name} | {lat:.5f} | {lon:.5f} | {inside} | {src}"
        )
        if not inside:
            report_lines.append(f"  WARNING: {name} outside polygon — check coords")
        towns_out.append((name, lat, lon, hub, label))
        # be polite to Nominatim
        import time

        if src == "nominatim":
            time.sleep(1.05)

    town_lines = []
    for name, lat, lon, hub, label in towns_out:
        x, y = xy(lon, lat)
        town_lines.append(
            f'  {{ name: "{name}", x: {x}, y: {y}, hub: {str(hub).lower()}, label: {str(label).lower()} }},'
        )

    out = (
        "/** Województwo lubuskie - dokładny kontur PRG (ppatrzyk/polska-geojson max) + punkty z Nominatim/OSM. */\n"
        f'export const LUBUSKIE_VIEWBOX = "0 0 {vw} {vh}";\n'
        "export const LUBUSKIE_PATH =\n"
        f'  "{path}";\n'
        "\n"
        "export const MAP_TOWNS = [\n"
        + "\n".join(town_lines)
        + "\n] as const;\n"
    )
    OUT.write_text(out, encoding="utf-8")

    # labeled preview
    labels = []
    circles = []
    for name, lat, lon, hub, label in towns_out:
        x, y = xy(lon, lat)
        r = 6 if hub else 3.5
        circles.append(
            f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fff" stroke="#222" stroke-width="1"/>'
        )
        labels.append(
            f'<text x="{x + 7}" y="{y + 3}" font-size="9" fill="#222" font-family="sans-serif">{name}</text>'
        )
    preview = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}">'
        f'<rect width="100%" height="100%" fill="#fff"/>'
        f'<path d="{path}" fill="#c45c4a" fill-opacity="0.82" stroke="#8b2e22" stroke-width="1.5" stroke-linejoin="round"/>'
        + "".join(circles)
        + "".join(labels)
        + "</svg>"
    )
    PREVIEW.write_text(preview, encoding="utf-8")
    REPORT.write_text("\n".join(report_lines) + "\n", encoding="utf-8")
    print("\n".join(report_lines[:6]))
    print(f"wrote {OUT.relative_to(ROOT)}")
    print(f"report {REPORT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
