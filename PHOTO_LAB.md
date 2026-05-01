# Photo Lab — Adding Photos Guide

This document is written for **both humans and AI assistants** to safely add new photos to the `Photo Lab` page in this repo.

## Where the page lives

- **Page**: `photo-lab.html`
- **Gallery script**: `assets/js/photo-lab.js`
- **Gallery data (source of truth)**: `assets/data/photo-lab.json`
- **Images folder**: `assets/img/photo-lab/`

## Quickstart (recommended workflow)

1. Put new image files into:
   - `assets/img/photo-lab/`
2. Add a new item into:
   - `assets/data/photo-lab.json`
3. Preview:
   - Prefer previewing via an HTTP server (not `file://`) so fetch works reliably.

## Important note about previewing locally (file:// vs http://)

The gallery script (`assets/js/photo-lab.js`) supports **inline JSON** embedded inside `photo-lab.html` (to work around browsers blocking `fetch()` in `file://` mode).

- If you preview `photo-lab.html` by **double-clicking** it (i.e. `file://`), the page will likely use the **inline JSON**.
- If you preview via a local server or GitHub Pages, the page can use the **external JSON** at `assets/data/photo-lab.json`.

### What this means when adding new photos

- If you only update `assets/data/photo-lab.json`, but your local preview is using inline JSON, you may not see new photos immediately.
- Solutions:
  - **Recommended**: preview via an HTTP server, then external JSON will load normally.
  - Or update the inline JSON block inside `photo-lab.html` as well (only needed for `file://` previews).

## Add a new photo (step-by-step)

### Step 1 — Copy the image into the repo

Put the file here:

- Original (full size): `assets/img/photo-lab/full/<your-file-name>.jpg`
- Thumbnail (auto-generated): `assets/img/photo-lab/thumbs/<your-file-stem>.jpg`

Notes:
- Use **web-friendly formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
- Avoid `.HEIC` for web publishing (convert to `.jpg` first).
- Spaces in filenames work, but it’s better to use simple names like `DSCF0177.JPG` or `street-01.jpg`.

### Step 2 — Add a JSON entry

Open `assets/data/photo-lab.json` and append a new item in `items`.

Use this template:

```json
{
  "id": "unique-id-no-spaces",
  "title": "",
  "alt": "",
  "year": null,
  "location": "",
  "tags": [],
  "camera": "",
  "lens": "",
  "thumb": "./assets/img/photo-lab/thumbs/YOUR_FILE_STEM.jpg",
  "src": "./assets/img/photo-lab/full/YOUR_FILE_NAME.JPG"
}
```

Field guidance:
- `id`: unique string (letters/numbers/hyphens). Keep stable.
- `title`: currently hidden in the “clean” UI, but still useful metadata.
- `alt`: accessibility text. If unsure, copy title.
- `tags`: optional array for future filtering (currently hidden in “clean” UI).
- `thumb` / `src`: **must be relative paths**, never local absolute paths like `/Users/...`.
  - Correct format: `./assets/img/photo-lab/<filename>`

### Step 3 — (Optional) update inline JSON for file:// preview

If you still want to preview by double-click (`file://`):
- Open `photo-lab.html`
- Find the block:

```html
<script id="photo-lab-data" type="application/json">
...json...
</script>
```

- Paste the updated JSON there too.

## Different image sizes — is it OK?

Yes. The grid uses a fixed thumbnail aspect ratio and `object-fit: cover`, so:
- Portrait / landscape / mixed sizes will still align nicely.
- Some edges may be cropped in the grid thumbnails.
- The lightbox shows the full image using `object-fit: contain`.

If you prefer **no cropping** in the grid, change the CSS in `assets/css/main.css`:
- `.photo-lab__thumb img { object-fit: contain; }`

## Common problems (and fixes)

### “Failed to load gallery data”
Cause: previewing via `file://` can block `fetch()` for JSON.
Fix:
- Preview via a local server, or
- Ensure `photo-lab.html` has the inline JSON block.

### Image doesn’t show
Checklist:
- Does the file exist at `assets/img/photo-lab/<name>`?
- Does the JSON path match the filename **exactly** (case-sensitive on many hosts)?
- Is it a web-supported format (`jpg/png/webp`)?

## Instructions for AI assistants (do this when asked to add photos)

When the user says “add new photos”:
- List the filenames inside `assets/img/photo-lab/full/`
- Update `assets/data/photo-lab.json` to include new files (relative paths)
- If the user previews via `file://`, also sync the inline JSON in `photo-lab.html`
- Do **not** reference local absolute paths like `/Users/...` in JSON
- Prefer `.jpg/.jpeg/.png/.webp`; avoid `.HEIC` unless converted

## Auto-generate thumbnails (macOS, built-in)

This repo can generate thumbnails using macOS built-in `sips`.

- Put originals into `assets/img/photo-lab/full/`
- Generate thumbnails (width 1200px) into `assets/img/photo-lab/thumbs/`

Example command (run at repo root):

```bash
mkdir -p assets/img/photo-lab/thumbs
for f in assets/img/photo-lab/full/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}; do
  [ -f "$f" ] || continue
  base="$(basename "$f")"
  stem="${base%.*}"
  sips -s format jpeg --resampleWidth 1200 "$f" --out "assets/img/photo-lab/thumbs/${stem}.jpg" >/dev/null
done
```

把新原图放到：assets/img/photo-lab/full/

AI工作流程：
- 扫描 assets/img/photo-lab/full/ 找到新增的图片文件
- 用 sips 批量生成/补齐缩略图到：assets/img/photo-lab/thumbs/（宽 1200px，输出 jpg，只生成缺的）
- 更新 assets/data/photo-lab.json：
- src → ./assets/img/photo-lab/full/<原图文件名>
- thumb → ./assets/img/photo-lab/thumbs/<同名stem>.jpg
- 同步 photo-lab.html 里的内嵌数据块（保证你双击 file:// 预览也能立刻看到）
- 最后做一次快速校验：JSON 里引用的 thumb/src 文件都存在