import re
from pathlib import Path

html = Path(r"C:/Users/Tymek/AppData/Local/Temp/gmaps-ip.html")
if not html.exists() or html.stat().st_size < 1000:
    import urllib.request

    url = (
        "https://www.google.com/maps/place/Instal-plast+Serwis+Maciej+G%C5%82owacki/"
        "@51.9350176,15.5179781,17z/data=!4m8!3m7!1s0x470613d776dcd471:0x5e9397672a534965"
        "!8m2!3d51.9350176!4d15.5179781!9m1!1b1!16s%2Fg%2F11g879jkc9?hl=pl"
    )
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept-Language": "pl-PL,pl;q=0.9",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    html.write_bytes(data)
    print("downloaded", len(data))

t = html.read_text(encoding="utf-8", errors="ignore")
print("len", len(t))

# Common Google Maps review payload patterns
patterns = [
    r"\],\"(.*?)\",\[\[",
    r"\"(Profesjonal[^\"]{0,180})\"",
    r"\"([^\"]{30,220}?polecam[^\"]{0,80})\"",
    r"\"([^\"]{30,220}?Polecam[^\"]{0,80})\"",
]
for p in patterns:
    found = re.findall(p, t, flags=re.I)
    print("pattern", p[:40], "->", len(found))
    for f in found[:8]:
        s = f if isinstance(f, str) else str(f)
        if len(s) > 25 and not s.startswith("http"):
            print(" ", s[:200])

# rating
for m in re.finditer(r"([0-5]\.[0-9]),\s*null,\s*\[\[null,null,", t):
    print("maybe rating near", m.group(0)[:40])
for m in re.finditer(r"([0-5],[0-9])\s*na podstawie\s*(\d+)", t):
    print("pl rating", m.group(0))
for m in re.finditer(r"(\d+)\s+opinie", t, re.I):
    print("opinie", m.group(0))
