# AGENTS.md

This file provides guidance to AI coding assistants when working with code in this repository.

## Project Overview

Hanyi Xu's personal academic website — a static site hosted on GitHub Pages at `hanyixu.com`. Pure HTML/CSS/JS with no build tools, frameworks, or bundlers. No npm, no Jekyll, no static site generator.

## Site Architecture

### Pages (5)

| Page | File | Key sections |
|------|------|-------------|
| Home / About Me | `index.html` | Profile card (sidebar), About Me text, Education cards, Research Interest chips, tech links |
| Research | `research.html` | Research Overview, Research Themes (4 cards), Master's Thesis summary |
| Publications | `publications.html` | Sidebar filter, Manuscripts + Presentations sections with pub-card layout |
| CV | `cv.html` | Sidebar (contact, links, skills, licenses) + Main (education, research experience, publications, teaching, service, industry, language) |
| Photo Lab | `photo-lab.html` | Client-side gallery with tag filtering and lightbox |

### Navigation

All 5 pages share the same nav in the `<header class="site-header">`: Home / Research / Publications / CV / Photo Lab. The current page is marked with `class="is-active"` and `aria-current="page"`. The header also carries an email icon link and a mobile hamburger menu toggle. A matching mobile-only nav (`class="site-mobile-nav"`) duplicates the desktop nav structure.

### Shared Footer

Every page has `<footer class="site-footer">` with brand name, copyright year, "last updated" label, and footer links (GitHub, LinkedIn, ORCID, Email). Footer data is populated from `config/site.json`.

## Centralized Config (`config/site.json`)

This is the **single source of truth** for all site-wide data. Never hardcode personal info, links, or CV metadata in HTML pages. Always edit `config/site.json` instead.

Structure:
- `person` — displayName, pronouns, location, affiliation
- `links` — email, orcid, github, linkedin
- `profiles` — avatarPath, avatarAlt
- `site` — titleSuffix, defaultMetaDescription, copyrightYear, lastUpdatedLabel
- `cv` — filePath, fileName, lastUpdated, fileSizeLabel, fileType
- `about` — locationLine, introText, education (array), researchInterests (array), computerBuildUrl, computerTestUrl
- `research` — overview, tagline
- `publications` — intro
- `photoLab` — intro

The file `assets/js/apply-site-config.js` reads `config/site.json` via sync XHR and populates HTML elements with `data-site-*` attributes:

| Attribute | Action |
|-----------|--------|
| `data-site-text="path"` | Sets `textContent` to value at JSON path |
| `data-site-href="path"` | Sets `href` attribute |
| `data-site-email="path"` | Sets `href="mailto:" + value` |
| `data-site-src="path"` | Sets `src` attribute |
| `data-site-alt="path"` | Sets `alt` attribute |
| `data-site-content="path"` | Sets `textContent` (or `content` for `<meta>`) |
| `data-site-block="education"` | Generates education cards from `about.education` array |
| `data-site-block="research-interests"` | Generates interest chips from `about.researchInterests` array |
| `data-site-footer-copyright` | Generates "© YYYY Name" |
| `data-site-footer-updated` | Generates "Site last updated LABEL" |
| `data-site-cv-download` | Sets download link href from `cv.filePath` |
| `data-cv-tooltip` | Populates CV file metadata tooltip |
| `data-page-title="Title"` | Sets `<title>Title - Hanyi Xu</title>` using `site.titleSuffix` |

To change the site tagline, email address, or any repeated data, **edit `config/site.json` only**. Do not touch the HTML.

## Design System (Academic Minimalist)

### Typography

- Display/headings: **Manrope** (weights 600, 800) via Google Fonts
- Body: **Hanken Grotesk** (weights 400, 500, 600) via Google Fonts
- Code/monospace: **JetBrains Mono** (weight 500) via Google Fonts
- Font classes: `text-display`, `text-headline`, `text-body`, `text-body-lg`, `text-label`, `text-muted`, `prose`

### Color Palette

Teal-based academic scheme defined in `assets/css/design.css`. Primary accent is teal (`--color-primary`). Cards, buttons, chips, and active nav state all use the teal palette. The design is light-mode only.

### Icons

**Self-hosted Material Symbols** — no Google Fonts API for icons:

- `assets/fonts/material-symbols-outlined.ttf` — the icon font file (~957 KB)
- `assets/css/material-symbols.css` — `@font-face` declaration + icon classes
- Usage: `<span class="material-symbols-outlined" aria-hidden="true">mail</span>`
- Specific icons used across pages: `mail`, `menu`, `location_on`, `account_balance`, `link`, `code`, `work`, `fingerprint`, `school`, `science`, `menu_book`, `cast_for_education`, `volunteer_activism`, `translate`, `psychology`, `category`, `open_in_new`, `download`, `call`, `language`, `slideshow`, `picture_as_pdf`, `pin_drop`
- When adding new icons, check if they exist in the Material Symbols set first
- Only use `material-symbols-outlined--filled` for filled variants

### Responsive Design

Mobile-first with breakpoints in `design.css`. The `site-header` collapses the desktop nav into a hamburger menu (`button.site-menu-toggle`) that toggles `nav.site-mobile-nav`. Animation handled by `assets/js/site.js`.

### CSS Class Naming

BEM-style: `.site-header`, `.site-header__inner`, `.site-header__actions`, `.profile-card`, `.profile-card__photo`, `.profile-card__name`, `.pub-card`, `.pub-card__title`, `.cv-section`, `.cv-section__title`, `.card`, `.card__title`, `.card__subtitle`, `.chip`, `.btn`, `.btn--primary`, `.fade-in`, etc.

## CSS and Asset Files

### Active (used by current pages)

| File | Purpose |
|------|---------|
| `assets/css/design.css?v=YYYYMMDDX` | Main stylesheet (~1565 lines, Academic Minimalist) |
| `assets/css/material-symbols.css` | Self-hosted Material Symbols @font-face |
| `assets/fonts/material-symbols-outlined.ttf` | Icon font file |
| `assets/js/apply-site-config.js` | Config injection via data attributes |
| `assets/js/site.js?v=YYYYMMDD` | Mobile nav toggle + scroll fade-in animations |
| `assets/js/photo-lab.js?v=YYYYMMDDb` | Gallery filtering + lightbox |
| `assets/img/favicon.png` | Favicon (linked in all pages) |
| `assets/img/photo-lab/full/` | Full-resolution gallery images |
| `assets/img/photo-lab/thumbs/` | Gallery thumbnails (800px width) |
| `images/profile.jpeg` | Profile photo on home page |

### Legacy (preserved in repo, unused by current pages)

- `assets/css/main.css` — legacy academic template styles
- `assets/css/lato-fonts.css` — legacy self-hosted Lato font
- `assets/css/fontawesome-all.min.css` — legacy Font Awesome
- `assets/css/academicons.min.css` — legacy Academicons
- `assets/js/main.min.js` — legacy nav script

These exist for reference. Do not link to them in new pages. Do not delete them without confirming intent.

### Cache Busting

CSS and JS files use `?v=YYYYMMDD` query strings. When updating `design.css`, `site.js`, or `photo-lab.js`, increment or change the version suffix across all pages. The version suffix may include a trailing letter (e.g., `?v=20260525f`, `?v=20260525h`) to distinguish multiple updates on the same day.

### JS Load Order

All pages load scripts in this order (required):

1. `apply-site-config.js` — must run first (populates data attributes before anything else reads them)
2. `site.js` — mobile nav + animations
3. `photo-lab.js` — only on `photo-lab.html`

## Page Template

`templates/page-template.html` is the starting point for new pages. It contains:

- Full `<head>` with all font preconnects, Material Symbols CSS, and `design.css`
- Shared `<header>` and `<footer>` boilerplate
- `{{PAGE_TITLE}}` placeholder in `<title>`, `<h1>`, and meta

To create a new page:

1. Copy `templates/page-template.html`
2. Replace `{{PAGE_TITLE}}` with the page title
3. Replace `{{PAGE_EXCERPT}}` with meta description text
4. Replace `{{PAGE_CONTENT}}` with the page body HTML
5. Add the new page link to the nav in all 5 existing pages
6. Mark the new page's nav link with `class="is-active"` and `aria-current="page"`

## Photo Lab (`photo-lab.html`)

- Photo metadata is an **inline JSON** blob in `<script id="photo-lab-data" type="application/json">` — this is the canonical source
- A stale backup exists at `assets/data/photo-lab.json` — it is NOT the canonical source; do not edit or rely on it
- Full images: `assets/img/photo-lab/full/` (variable formats: .jpg, .JPG, .jpeg)
- Thumbnails: `assets/img/photo-lab/thumbs/` (all .jpg, 800px width)
- Gallery logic: `assets/js/photo-lab.js` (tag filtering, lightbox, prev/next navigation)
- Filter chips are generated from item tags in the JSON
- Lightbox has prev/next buttons and a close button
- Empty state: `div.photo-lab__empty` shown when no photos match filter

Photo data structure:
```json
{
  "version": 1,
  "updated": "YYYY-MM-DD",
  "items": [
    {
      "id": "unique-id",
      "title": "Display title",
      "alt": "Alt text",
      "year": null,
      "location": "",
      "tags": [],
      "camera": "",
      "lens": "",
      "thumb": "./path/to/thumb.jpg",
      "src": "./path/to/full.jpg"
    }
  ]
}
```

When adding photos:
- Generate thumbnail (800px width) → `assets/img/photo-lab/thumbs/`
- Place full image → `assets/img/photo-lab/full/`
- Add JSON entry to the inline `<script>` in `photo-lab.html`
- Update the `"updated"` date

## CV Page-specific Patterns

- `cv-page-header` — header with title + download button + file metadata tooltip
- `cv-layout` — sidebar (`cv-sidebar`) + main (`cv-main`) two-column layout
- `cv-sidebar__block` — contact, links, skills (chip groups), licenses
- `cv-sidebar__list` — icon + text list items
- `cv-section` — main content sections with icon + title
- `cv-edu-item` — education entries (date + degree + school)
- `cv-entry` — research/industry entries (role + date + org + PI + bullet list)
- `cv-teaching-item` — teaching entries (icon + school + bullet list)
- `cv-simple-list` — plain bullet list for licenses, service, language
- `cv-lang` — language display (bold labels)
- The PDF download button uses `data-site-cv-download` + `data-cv-tooltip`

## File Structure Conventions

```
hanyixu.github.io/
├── index.html              # Home
├── research.html           # Research
├── publications.html       # Publications
├── cv.html                 # CV
├── photo-lab.html          # Photo Lab
├── CNAME                   # Custom domain: hanyixu.com
├── config/
│   └── site.json           # Centralized site config
├── templates/
│   └── page-template.html  # New page starter
├── assets/
│   ├── css/
│   │   ├── design.css      # Main stylesheet (active)
│   │   ├── material-symbols.css
│   │   ├── main.css        # Legacy, unused
│   │   ├── lato-fonts.css  # Legacy, unused
│   │   ├── fontawesome-all.min.css  # Legacy, unused
│   │   └── academicons.min.css      # Legacy, unused
│   ├── fonts/
│   │   └── material-symbols-outlined.ttf
│   ├── js/
│   │   ├── apply-site-config.js
│   │   ├── site.js
│   │   ├── photo-lab.js
│   │   └── main.min.js     # Legacy, unused
│   ├── img/
│   │   ├── favicon.png
│   │   └── photo-lab/
│   │       ├── full/       # Full-resolution photos
│   │       └── thumbs/     # 800px thumbnails
│   └── vendor/
│       └── academicons/    # Legacy
├── files/
│   ├── CV_HanyiXu.pdf
│   ├── CNS2026.pdf
│   ├── paper-pmena-2024.pdf
│   ├── slides-pmena-2024.pdf
│   └── slides-ACCMOM-2024.pdf
└── images/
    └── profile.jpeg        # Home page profile photo
```

## Editing Rules

### Do

- Edit site-wide data in `config/site.json`
- Update CSS in `assets/css/design.css`
- Add JS behavior in `assets/js/site.js` (general) or `assets/js/photo-lab.js` (Photo Lab only)
- Use `data-site-*` attributes for any content that exists in `config/site.json`
- Bump cache-busting query strings when updating CSS/JS
- Add new pages by copying `templates/page-template.html`
- Update nav in ALL existing pages when adding a new page
- Use Material Symbols icons (not Font Awesome or Academicons)

### Don't

- Hardcode personal info, links, or CV metadata in HTML (use config)
- Link to legacy CSS files (`main.css`, `lato-fonts.css`, `fontawesome-all.min.css`, `academicons.min.css`)
- Use legacy `main.min.js` 
- Edit `assets/data/photo-lab.json` (stale backup — edit inline JSON in photo-lab.html)
- Change only some pages' nav when adding/removing/renaming a page
- Use inline styles (use `design.css` classes)
- Add npm packages, frameworks, or build tools

## Deployment

- GitHub Pages with custom domain `hanyixu.com` (set in `CNAME` file)
- Push to `master` deploys automatically
- No CI/CD pipeline, no build step — files are served as-is
- The `.gitignore` references `_site/`, `.sass-cache/`, `Gemfile.lock`, `node_modules` (Jekyll leftovers, ignored)

## Git Conventions

- Branch `backup-YYYY-MM-DD` is used as a safety net before major redesigns
- Commit messages are concise and descriptive
- Profile photo lives in `images/profile.jpeg` (not in assets/img)
