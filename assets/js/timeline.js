/* Timeline scroll beam — vanilla port of the Aceternity "scroll beam follow"
   effect, themed to the Academic Minimalist palette.

   A faint static rail runs the full height of the timeline. A teal "beam"
   grows from the top, its height mapped linearly to how far the timeline has
   travelled through the viewport. Each node lights up once the beam passes it. */
(function () {
  var timeline = document.querySelector('[data-timeline]');
  if (!timeline) return;

  var beam = timeline.querySelector('.timeline__beam');
  var nodes = Array.prototype.slice.call(
    timeline.querySelectorAll('.timeline__node')
  );

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Static fallback: fill the beam and light every node, no scroll listener.
  if (reduceMotion) {
    if (beam) {
      beam.style.height = timeline.offsetHeight + 'px';
      beam.style.opacity = '1';
    }
    nodes.forEach(function (node) {
      node.classList.add('is-active');
    });
    return;
  }

  var ticking = false;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function update() {
    ticking = false;

    var vh = window.innerHeight || document.documentElement.clientHeight;
    var rect = timeline.getBoundingClientRect();
    var trackHeight = timeline.offsetHeight;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var absoluteTop = rect.top + scrollY;

    // Match framer-motion offset ["start 10%", "end 50%"]:
    //   progress 0 when the timeline top sits 10% down the viewport,
    //   progress 1 when the timeline bottom reaches the viewport middle.
    var start = absoluteTop - vh * 0.1;
    var end = absoluteTop + trackHeight - vh * 0.5;
    var denominator = end - start;
    var progress = denominator > 0 ? (scrollY - start) / denominator : 0;
    progress = clamp(progress, 0, 1);

    var beamHeight = progress * trackHeight;

    if (beam) {
      beam.style.height = beamHeight + 'px';
      beam.style.opacity = String(clamp(progress / 0.08, 0, 1));
    }

    var timelineTop = rect.top;
    for (var i = 0; i < nodes.length; i++) {
      var nodeRect = nodes[i].getBoundingClientRect();
      var center = nodeRect.top - timelineTop + nodeRect.height / 2;
      if (beamHeight >= center - 2) {
        nodes[i].classList.add('is-active');
      } else {
        nodes[i].classList.remove('is-active');
      }
    }
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);

  update();
})();
