/**
 * Loads config/site.json (sync) and fills elements marked with data-site-* attributes.
 * Edit values in config/site.json only.
 */
(function () {
  function get(obj, path) {
    if (!obj || !path) return null;
    var parts = path.split('.');
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function configUrl() {
    try {
      return new URL('config/site.json', document.baseURI).href;
    } catch (e) {
      return 'config/site.json';
    }
  }

  function loadConfigSync() {
    var url = configUrl();
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      if (xhr.status >= 200 && xhr.status < 300 && xhr.responseText) {
        return JSON.parse(xhr.responseText);
      }
    } catch (e) {
      console.warn('[site-config] Could not load', url, e);
    }
    return null;
  }

  function setLinesWithBreaks(el, lines) {
    if (!el || !lines || !lines.length) return;
    el.textContent = '';
    for (var i = 0; i < lines.length; i++) {
      if (i) el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(lines[i]));
    }
  }

  function apply(cfg) {
    if (!cfg) return;

    document.querySelectorAll('[data-site-text]').forEach(function (el) {
      var v = get(cfg, el.getAttribute('data-site-text'));
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll('[data-site-href]').forEach(function (el) {
      var v = get(cfg, el.getAttribute('data-site-href'));
      if (v != null) el.setAttribute('href', v);
    });

    document.querySelectorAll('[data-site-email]').forEach(function (el) {
      var email = get(cfg, el.getAttribute('data-site-email'));
      if (email) el.setAttribute('href', 'mailto:' + email);
    });

    document.querySelectorAll('[data-site-src]').forEach(function (el) {
      var v = get(cfg, el.getAttribute('data-site-src'));
      if (v != null) el.setAttribute('src', v);
    });

    document.querySelectorAll('[data-site-alt]').forEach(function (el) {
      var v = get(cfg, el.getAttribute('data-site-alt'));
      if (v != null) el.setAttribute('alt', v);
    });

    document.querySelectorAll('meta[name="description"][data-site-content]').forEach(function (el) {
      var v = get(cfg, el.getAttribute('data-site-content'));
      if (v != null) el.setAttribute('content', v);
    });

    var titleEl = document.querySelector('title[data-page-title]');
    if (titleEl) {
      var pageTitle = titleEl.getAttribute('data-page-title');
      var suffix = get(cfg, 'site.titleSuffix');
      if (pageTitle && suffix) titleEl.textContent = pageTitle + ' - ' + suffix;
    }

    var copyrightEl = document.querySelector('[data-site-footer-copyright]');
    if (copyrightEl) {
      var year = get(cfg, 'site.copyrightYear');
      var name = get(cfg, 'person.displayName');
      if (year != null && name) copyrightEl.textContent = '\u00a9 ' + year + ' ' + name;
    }

    var updatedEl = document.querySelector('[data-site-footer-updated]');
    if (updatedEl) {
      var label = get(cfg, 'site.lastUpdatedLabel');
      if (label != null) updatedEl.textContent = 'Site last updated ' + label;
    }

    var eduEl = document.querySelector('[data-site-block="education"]');
    if (eduEl) setLinesWithBreaks(eduEl, get(cfg, 'about.educationLines'));

    var contactEl = document.querySelector('[data-site-block="contact"]');
    if (contactEl) setLinesWithBreaks(contactEl, get(cfg, 'about.contactLines'));

    var cvLink = document.querySelector('[data-site-cv-download]');
    if (cvLink) {
      var cvPath = get(cfg, 'cv.filePath');
      if (cvPath) cvLink.setAttribute('href', cvPath);
    }

    var cvTip = document.querySelector('[data-cv-tooltip]');
    if (cvTip && cfg.cv) {
      var c = cfg.cv;
      setLinesWithBreaks(cvTip, [
        'File name: ' + (c.fileName || ''),
        'Last updated: ' + (c.lastUpdated || ''),
        'File size: ' + (c.fileSizeLabel || ''),
        'File type: ' + (c.fileType || ''),
      ]);
    }

    var articleMeta = document.querySelector('article [itemprop="description"][data-site-content]');
    if (articleMeta) {
      var mv = get(cfg, articleMeta.getAttribute('data-site-content'));
      if (mv != null) articleMeta.setAttribute('content', mv);
    }
  }

  apply(loadConfigSync());
})();
