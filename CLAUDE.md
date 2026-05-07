# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hanyi Xu's personal academic website — a static site hosted on GitHub Pages at `hanyixu.com`. Pure HTML/CSS/JS with no build tools, frameworks, or bundlers.

## Pages

- `index.html` — Home / About Me
- `research.html` — Research interests and master's thesis summary
- `publications.html` — Manuscripts and presentations
- `cv.html` — CV download page (links `files/CV_HanyiXu.pdf`)
- `photo-lab.html` — Client-side photography gallery with filtering and lightbox

## Centralized Config

`config/site.json` is the single source of truth for site-wide data (name, links, intro text, CV info, education, contacts, copyright). The file `assets/js/apply-site-config.js` reads it via sync XHR and populates any HTML element with `data-site-*` attributes. To update eg. name or links, edit the JSON — not the HTML.

## Page Template

`templates/page-template.html` is the starting point for new pages. It uses `{{PAGE_TITLE}}`, `{{PAGE_EXCERPT}}`, and `{{PAGE_CONTENT}}` placeholders. Copy it, replace the placeholders, and add the new page to the nav in every existing page.

## Photo Lab

- Photo metadata is embedded as inline JSON in `photo-lab.html` (`<script id="photo-lab-data" type="application/json">`), not loaded from `assets/data/photo-lab.json` (which appears to be a duplicate/backup).
- Full images: `assets/img/photo-lab/full/`
- Thumbnails: `assets/img/photo-lab/thumbs/`
- Gallery logic: `assets/js/photo-lab.js`

## CSS and Assets

- `assets/css/main.css` — main stylesheet (custom properties at `:root` for colors)
- `assets/css/lato-fonts.css` — self-hosted Lato @font-face declarations
- Lato font files in `assets/fonts/Lato/` (Light and Regular for body, Thin for titles)
- `assets/css/fontawesome-all.min.css` and `assets/css/academicons.min.css` — icon libraries
- `assets/js/main.min.js` — minified JS for nav/responsive behavior (from academic template)
- `assets/img/favicon.png` — favicon linked in all pages
- CSS/JS cache busted with `?v=YYYYMMDD` query strings

## No Build Step

Pages are served as-is. No npm, no Jekyll, no static site generator. The `.gitignore` references `_site/`, `.sass-cache/`, `Gemfile.lock`, and `node_modules` — these are likely leftovers from a previous Jekyll-based academic template, but the site no longer uses them.

## Deployment

GitHub Pages with a custom domain. The `CNAME` file contains `hanyixu.com`. Pushing to `master` deploys.
