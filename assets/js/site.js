(function () {
  var menuToggle = document.querySelector('[data-site-menu-toggle]');
  var mobileNav = document.querySelector('[data-site-mobile-nav]');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function revealFadeIn(el) {
    el.classList.add('is-visible');
  }

  function isFadeInInView(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.92 && rect.bottom > 8;
  }

  function initFadeIn() {
    var fadeEls = document.querySelectorAll('.fade-in');
    if (!fadeEls.length) return;

    fadeEls.forEach(function (el) {
      if (isFadeInInView(el)) {
        revealFadeIn(el);
      }
    });

    if (typeof IntersectionObserver !== 'function') {
      fadeEls.forEach(revealFadeIn);
      return;
    }

    var rootMargin =
      window.matchMedia('(max-width: 767px)').matches ? '0px 0px 0px 0px' : '0px 0px -40px 0px';

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealFadeIn(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: rootMargin }
    );

    fadeEls.forEach(function (el) {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });
  }

  initFadeIn();
  window.addEventListener('load', initFadeIn);
})();
