import json
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
LEGACY_DIR = ROOT / "legacy-bluebook"
INDEX_FILE = LEGACY_DIR / "BlueBook.html"
OUTPUT_JSON = ROOT / "lib" / "content" / "bluebook-data.json"


def extract_summary(legacy_id: str) -> list[str]:
    html_path = LEGACY_DIR / f"{legacy_id}.html"
    if not html_path.exists():
        print(f"Warning: missing {html_path}")
        return []
    soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")
    column = soup.select_one(".ib-bluebook-container .col-xl-6") or soup
    paragraphs = [p.get_text(" ", strip=True) for p in column.select("p") if p.get_text(strip=True)]

    # Find the first bullet list that *isn't* the breadcrumb (Blue Book Series / legacy id)
    bullet_text = None
    for ul in column.select("ul"):
        items = [li.get_text(" ", strip=True) for li in ul.select("li") if li.get_text(strip=True)]
        if not items:
            continue
        # Skip breadcrumb list
        if len(items) >= 2 and "Blue Book Series" in items[0]:
            continue
        bullet_text = "Highlights: " + "; ".join(items)
        break

    summary: list[str] = []
    if paragraphs:
        summary.append(paragraphs[0])
    if len(paragraphs) > 1:
        summary.append(paragraphs[1])
    if bullet_text:
        summary.append(bullet_text)
    elif len(paragraphs) > 2:
        summary.append(paragraphs[2])
    return summary


def slugify(legacy_id: str) -> str:
    return legacy_id.lower()


def main():
    soup = BeautifulSoup(INDEX_FILE.read_text(encoding="utf-8"), "html.parser")
    categories = []
    for block in soup.select(".ifbb-pv"):
        heading = block.select_one("h3.ib-resouces-heading")
        if not heading:
            continue
        name = heading.get_text(strip=True)
        reports = []
        for anchor in block.select("a.ib-resource-card"):
            href = anchor.get("href")
            if not href:
                continue
            legacy_id = Path(href).stem
            subtitle = anchor.get_text(" ", strip=True)
            slug = slugify(legacy_id)
            summary = extract_summary(legacy_id)
            reports.append({
                "slug": slug,
                "legacyId": legacy_id,
                "title": "",
                "subtitle": subtitle,
                "summary": summary,
            })
        if reports:
            categories.append({"name": name, "reports": reports})
    OUTPUT_JSON.write_text(json.dumps(categories, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
