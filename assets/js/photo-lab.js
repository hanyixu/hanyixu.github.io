/* global window, document, fetch */
(function () {
  const DATA_URL = './assets/data/photo-lab.json';
  const INLINE_DATA_ID = 'photo-lab-data';

  const gridEl = document.getElementById('photo-lab-grid');
  const filtersEl = document.getElementById('photo-lab-filters');
  const metaEl = document.getElementById('photo-lab-meta');
  const emptyEl = document.getElementById('photo-lab-empty');

  const lightboxEl = document.getElementById('photo-lab-lightbox');
  const lightboxImg = lightboxEl ? lightboxEl.querySelector('.photo-lab-lightbox__img') : null;
  const lightboxCaption = lightboxEl ? lightboxEl.querySelector('.photo-lab-lightbox__caption') : null;
  const closeBtn = lightboxEl ? lightboxEl.querySelector('.photo-lab-lightbox__close') : null;
  const prevBtn = lightboxEl ? lightboxEl.querySelector('.photo-lab-lightbox__prev') : null;
  const nextBtn = lightboxEl ? lightboxEl.querySelector('.photo-lab-lightbox__next') : null;

  if (!gridEl || !filtersEl || !metaEl || !emptyEl || !lightboxEl || !lightboxImg || !lightboxCaption || !closeBtn || !prevBtn || !nextBtn) {
    return;
  }

  /** @type {{items: any[]}|null} */
  let data = null;
  /** @type {any[]} */
  let allItems = [];
  /** @type {any[]} */
  let visibleItems = [];
  /** @type {string|null} */
  let activeTag = null;
  /** @type {number} */
  let activeIndex = -1;
  /** @type {HTMLElement|null} */
  let lastFocused = null;

  function normalizeTags(tags) {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags.filter(Boolean).map(String);
    return [String(tags)];
  }

  function loadInlineData() {
    const el = document.getElementById(INLINE_DATA_ID);
    if (!el) return null;
    try {
      const raw = el.textContent || '';
      if (!raw.trim()) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function getAllTags(items) {
    const set = new Set();
    for (const it of items) {
      for (const t of normalizeTags(it.tags)) set.add(t);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  function renderFilters(items) {
    const tags = getAllTags(items);
    if (tags.length === 0) {
      filtersEl.innerHTML = '';
      return;
    }

    const parts = [];
    for (const t of tags) {
      const isActive = activeTag === t;
      parts.push(
        `<button type="button" class="photo-lab__filter ${isActive ? 'is-active' : ''}" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`
      );
    }

    filtersEl.innerHTML = parts.join('');
  }

  function formatMeta(it) {
    const bits = [];
    if (it.year) bits.push(String(it.year));
    if (it.location) bits.push(String(it.location));
    return bits.join(' · ');
  }

  function renderGrid(items) {
    const parts = [];
    items.forEach((it, idx) => {
      const title = it.title ? String(it.title) : '';
      const alt = it.alt ? String(it.alt) : title || 'Photo';
      const thumb = it.thumb || it.src || './assets/img/photo-lab/placeholder.svg';
      const meta = formatMeta(it);
      const tags = normalizeTags(it.tags);

      parts.push(`
        <button type="button" class="photo-lab__tile" data-idx="${idx}">
          <span class="photo-lab__thumb">
            <img loading="lazy" decoding="async" src="${escapeHtml(thumb)}" alt="${escapeHtml(alt)}">
          </span>
          <span class="photo-lab__info">
            ${title ? `<span class="photo-lab__title">${escapeHtml(title)}</span>` : ''}
            ${meta ? `<span class="photo-lab__sub">${escapeHtml(meta)}</span>` : ''}
            ${tags.length ? `<span class="photo-lab__tags">${tags.map(t => `<span class="photo-lab__tag">${escapeHtml(t)}</span>`).join('')}</span>` : ''}
          </span>
        </button>
      `);
    });
    gridEl.innerHTML = parts.join('');

    emptyEl.classList.toggle('hidden', items.length !== 0);
    metaEl.textContent = items.length === 0 ? '0 photos' : `${items.length} photo${items.length === 1 ? '' : 's'}`;
  }

  function applyFilter() {
    if (!activeTag) {
      visibleItems = [...allItems];
    } else {
      visibleItems = allItems.filter((it) => normalizeTags(it.tags).includes(activeTag));
    }

    renderFilters(allItems);
    renderGrid(visibleItems);
  }

  function openLightbox(index) {
    if (index < 0 || index >= visibleItems.length) return;
    activeIndex = index;
    lastFocused = /** @type {HTMLElement|null} */ (document.activeElement);

    const it = visibleItems[activeIndex];
    const src = it.src || it.thumb || './assets/img/photo-lab/placeholder.svg';

    lightboxImg.src = src;
    lightboxImg.alt = it.alt ? String(it.alt) : 'Photo';
    lightboxCaption.textContent = '';

    document.body.classList.add('overflow--hidden');
    lightboxEl.classList.remove('hidden');
    closeBtn.focus();
  }

  function closeLightbox() {
    lightboxEl.classList.add('hidden');
    document.body.classList.remove('overflow--hidden');
    if (lightboxImg) lightboxImg.src = '';
    activeIndex = -1;
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }

  function showPrev() {
    if (activeIndex < 0) return;
    const next = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(next);
  }

  function showNext() {
    if (activeIndex < 0) return;
    const next = (activeIndex + 1) % visibleItems.length;
    openLightbox(next);
  }

  filtersEl.addEventListener('click', (e) => {
    const btn = /** @type {HTMLElement|null} */ (e.target && e.target.closest('.photo-lab__filter'));
    if (!btn) return;
    const tag = btn.getAttribute('data-tag') || '';
    activeTag = tag ? tag : null;
    applyFilter();
  });

  gridEl.addEventListener('click', (e) => {
    const tile = /** @type {HTMLElement|null} */ (e.target && e.target.closest('.photo-lab__tile'));
    if (!tile) return;
    const idxStr = tile.getAttribute('data-idx') || '';
    const idx = Number.parseInt(idxStr, 10);
    if (!Number.isFinite(idx)) return;
    openLightbox(idx);
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (lightboxEl.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Prefer inline JSON so the page works when opened via file://
  // (browsers often block fetch() from local files).
  const inlineJson = loadInlineData();
  if (inlineJson && Array.isArray(inlineJson.items)) {
    data = inlineJson;
    allItems = inlineJson.items;
    applyFilter();
  } else {
    fetch(DATA_URL, { cache: 'no-store' })
      .then((r) => r.ok ? r.json() : Promise.reject(new Error(`Failed to load ${DATA_URL}`)))
      .then((json) => {
        data = json;
        allItems = Array.isArray(json.items) ? json.items : [];
        applyFilter();
      })
      .catch(() => {
        allItems = [];
        applyFilter();
        metaEl.textContent = 'Failed to load gallery data.';
      });
  }
})();
