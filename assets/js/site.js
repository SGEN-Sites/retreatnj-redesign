/* The Retreat — site behaviour. Vanilla, no dependencies.
   Contract: everything renders without JS; this file only adds motion, menus and live status. */
(function () {
  'use strict';
  var d = document, root = d.documentElement, w = window;
  var reduce = w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = w.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var store = {
    get: function (s, k) { try { return w[s].getItem(k); } catch (e) { return null; } },
    set: function (s, k, v) { try { w[s].setItem(k, v); } catch (e) { /* private mode */ } }
  };
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };

  /* ---------- live open / closed (America/New_York) ---------- */
  var HOURS = { 0: [11, 20], 1: [10, 21], 2: [10, 21], 3: [10, 21], 4: [10, 21], 5: [10, 21], 6: [10, 21] };
  function fmt(h) { var s = h >= 12 ? 'PM' : 'AM'; var x = h % 12 || 12; return x + ' ' + s; }
  function nowNY() {
    try {
      var p = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
      var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return { day: days[o.weekday], h: parseInt(o.hour, 10) % 24, m: parseInt(o.minute, 10) };
    } catch (e) { var n = new Date(); return { day: n.getDay(), h: n.getHours(), m: n.getMinutes() }; }
  }
  function status() {
    var n = nowNY(), t = n.h + n.m / 60, today = HOURS[n.day];
    if (t >= today[0] && t < today[1]) return { open: true, text: 'Open now · until ' + fmt(today[1]), day: n.day };
    if (t < today[0]) return { open: false, text: 'Closed · opens today at ' + fmt(today[0]), day: n.day };
    var nx = HOURS[(n.day + 1) % 7];
    return { open: false, text: 'Closed · opens tomorrow at ' + fmt(nx[0]), day: n.day };
  }
  function paintStatus() {
    var s = status();
    $$('[data-status]').forEach(function (el) {
      el.setAttribute('data-open', s.open ? 'true' : 'false');
      var t = $('[data-status-text]', el) || el;
      if (t.hasAttribute('data-status-text')) t.textContent = s.text;
    });
    $$('[data-day]').forEach(function (row) {
      var days = row.getAttribute('data-day').split(',').map(Number);
      row.setAttribute('data-today', days.indexOf(s.day) > -1 ? 'true' : 'false');
    });
  }
  paintStatus();
  setInterval(paintStatus, 60000);

  /* ---------- age gate (as on the live site) ---------- */
  var gate = $('[data-gate]');
  if (gate && store.get('localStorage', 'retreat-21') !== 'yes' && !/[?&]nogate/.test(location.search)) {
    gate.classList.add('is-on');
    d.body.classList.add('no-scroll');
    var yes = $('[data-gate-yes]', gate);
    if (yes) yes.focus({ preventScroll: true });
    gate.addEventListener('click', function (e) {
      if (e.target.closest('[data-gate-yes]')) {
        store.set('localStorage', 'retreat-21', 'yes');
        gate.classList.remove('is-on'); d.body.classList.remove('no-scroll');
      } else if (e.target.closest('[data-gate-no]')) {
        var m = $('[data-gate-msg]', gate); if (m) m.hidden = false;
      }
    });
  }

  /* ---------- footer link columns fold on phones ---------- */
  if (w.matchMedia('(max-width: 719px)').matches) $$('.footer-cols .fold').forEach(function (f) { f.removeAttribute('open'); });

  /* ---------- header: scrolled state ---------- */
  var header = $('.site-header');
  function onScrollHeader() { if (header) header.classList.toggle('is-scrolled', w.scrollY > 24); }
  onScrollHeader();

  /* ---------- mega menus ---------- */
  var scrim = $('.mega-scrim');
  var openBtn = null, closeT = null;
  function panelFor(btn) { return d.getElementById(btn.getAttribute('aria-controls')); }
  function closeMega() {
    if (!openBtn) return;
    openBtn.setAttribute('aria-expanded', 'false');
    var p = panelFor(openBtn); if (p) p.classList.remove('is-open');
    openBtn = null; if (scrim) scrim.classList.remove('is-on'); if (header) header.classList.remove('is-open');
  }
  function openMega(btn) {
    if (openBtn === btn) return;
    closeMega();
    openBtn = btn; btn.setAttribute('aria-expanded', 'true');
    var p = panelFor(btn); if (p) p.classList.add('is-open');
    if (scrim) scrim.classList.add('is-on'); if (header) header.classList.add('is-open');
  }
  $$('[data-mega]').forEach(function (btn) {
    btn.addEventListener('click', function (e) { e.preventDefault(); if (openBtn === btn) closeMega(); else openMega(btn); });
    if (fine) {
      btn.addEventListener('mouseenter', function () { clearTimeout(closeT); closeT = setTimeout(function () { openMega(btn); }, 90); });
      btn.addEventListener('mouseleave', function () { clearTimeout(closeT); closeT = setTimeout(closeMega, 260); });
      var p = panelFor(btn);
      if (p) {
        p.addEventListener('mouseenter', function () { clearTimeout(closeT); });
        p.addEventListener('mouseleave', function () { clearTimeout(closeT); closeT = setTimeout(closeMega, 220); });
      }
    }
  });
  if (scrim) scrim.addEventListener('click', closeMega);
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (openBtn) { var b = openBtn; closeMega(); b.focus(); } closeDrawer(); }
  });
  d.addEventListener('focusin', function (e) {
    if (openBtn && !e.target.closest('.mega-panel') && !e.target.closest('[data-mega]')) closeMega();
  });

  /* ---------- drawer ---------- */
  var drawer = $('.drawer'), burger = $('.burger');
  function setBars(hidden) { [pickup, dock].forEach(function (el) { if (el) el.toggleAttribute('data-suppressed', hidden); }); updateBars(); }
  function openDrawer() { if (!drawer) return; drawer.classList.add('is-open'); drawer.removeAttribute('inert'); burger.setAttribute('aria-expanded', 'true'); d.body.classList.add('no-scroll'); setBars(true); var c = $('.drawer__close', drawer); if (c) c.focus(); }
  function closeDrawer() { if (!drawer || !drawer.classList.contains('is-open')) return; drawer.classList.remove('is-open'); drawer.setAttribute('inert', ''); burger.setAttribute('aria-expanded', 'false'); d.body.classList.remove('no-scroll'); setBars(false); burger.focus(); }
  if (burger) burger.addEventListener('click', openDrawer);
  if (drawer) { drawer.setAttribute('inert', ''); $$('.drawer__close, .drawer a', drawer).forEach(function (a) { a.addEventListener('click', closeDrawer); }); }

  /* ---------- sticky pickup bar + phone dock ---------- */
  var pickup = $('[data-pickup]'), dock = $('[data-dock]');
  var heroEl = $('[data-hero]') || $('.phero') || $('main > :first-child');
  var footer = $('.site-footer');
  var pastHero = false, atFooter = false, typing = false;
  var dismissed = store.get('sessionStorage', 'retreat-bar') === 'off';
  function updateBars() {
    var showPick = pastHero && !atFooter && !typing && !dismissed && pickup && !pickup.hasAttribute('data-suppressed');
    var showDock = pastHero && !typing && dock && !dock.hasAttribute('data-suppressed');
    if (pickup) pickup.classList.toggle('is-on', !!showPick);
    if (dock) dock.classList.toggle('is-on', !!showDock);
    var h = 0;
    if (showPick && pickup.offsetParent !== null) h = pickup.offsetHeight + 30;
    if (showDock && dock.offsetParent !== null) h = dock.offsetHeight + 24;
    root.style.setProperty('--bottom-stack', h + 'px');
  }
  if ('IntersectionObserver' in w) {
    if (heroEl) new IntersectionObserver(function (en) { pastHero = !en[0].isIntersecting; updateBars(); }, { rootMargin: '-35% 0px 0px 0px' }).observe(heroEl);
    if (footer) new IntersectionObserver(function (en) { atFooter = en[0].isIntersecting; updateBars(); }, { rootMargin: '0px 0px -12% 0px' }).observe(footer);
  } else { pastHero = true; updateBars(); }
  var x = $('[data-pickup-x]');
  if (x) x.addEventListener('click', function () { dismissed = true; store.set('sessionStorage', 'retreat-bar', 'off'); updateBars(); });
  d.addEventListener('focusin', function (e) { if (e.target.matches('input, textarea, select')) { typing = true; updateBars(); } });
  d.addEventListener('focusout', function (e) { if (e.target.matches('input, textarea, select')) { typing = false; updateBars(); } });

  /* ---------- split headings into words ---------- */
  function splitWords(el) {
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var parts = n.textContent.split(/(\s+)/), frag = d.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(' ')); return; }
            var o = d.createElement('span'); o.className = 'w';
            var inner = d.createElement('span'); inner.textContent = p; inner.style.setProperty('--i', i++);
            o.appendChild(inner); frag.appendChild(o);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains('w')) { walk(n); }
      });
    })(el);
  }

  /* ---------- reveals ---------- */
  if (!reduce && 'IntersectionObserver' in w) {
    $$('[data-split]').forEach(splitWords);
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -9% 0px', threshold: .05 });
    $$('[data-reveal], [data-split]').forEach(function (el) { io.observe(el); });
    $$('[data-stagger]').forEach(function (g) { $$('[data-reveal]', g).forEach(function (c, k) { c.style.setProperty('--d', (k * 0.09) + 's'); }); });
    // safety: never leave content hidden
    setTimeout(function () { $$('[data-reveal]:not(.is-in), [data-split]:not(.is-in)').forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < innerHeight) el.classList.add('is-in'); }); }, 2500);
  } else {
    $$('[data-reveal], [data-split]').forEach(function (el) { el.classList.add('is-in'); });
  }
  var hero = $('.hero--home');
  if (hero) requestAnimationFrame(function () { hero.classList.add('is-ready'); });

  /* ---------- definition: words light as you scroll ---------- */
  var meaning = $('.definition__meaning');
  if (meaning && !reduce) {
    var txt = meaning.textContent.trim().split(/\s+/);
    meaning.innerHTML = txt.map(function (t) { return '<span class="w">' + t.replace(/</g, '&lt;') + '</span>'; }).join(' ');
  }
  var mWords = meaning ? $$('.w', meaning) : [];

  /* ---------- parallax depth + scroll-linked work (one rAF) ---------- */
  var depthEls = reduce ? [] : $$('[data-depth]');
  var progress = $('.progress');
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = innerHeight;
    onScrollHeader();
    for (var i = 0; i < depthEls.length; i++) {
      var el = depthEls[i], r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      var c = (r.top + r.height / 2 - vh / 2);
      var dp = parseFloat(el.getAttribute('data-depth')) || 0;
      el.style.transform = 'translate3d(0,' + (c * -dp).toFixed(1) + 'px,0)';
    }
    if (mWords.length) {
      var mr = meaning.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (vh * .85 - mr.top) / (mr.height + vh * .35)));
      var lit = Math.round(p * mWords.length);
      for (var k = 0; k < mWords.length; k++) mWords[k].classList.toggle('lit', k < lit);
    }
    if (progress) {
      var art = $('article'); if (art) { var ar = art.getBoundingClientRect(); var pr = Math.min(1, Math.max(0, -ar.top / (ar.height - vh))); progress.style.setProperty('--p', pr.toFixed(3)); }
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  w.addEventListener('scroll', req, { passive: true });
  w.addEventListener('resize', req);
  frame();

  /* ---------- key light follows the pointer on dark bands ---------- */
  if (fine && !reduce) {
    $$('.band--night, .band--olive, .hero, .phero, .ctaband').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--lx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        b.style.setProperty('--ly', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
    });
  }

  /* ---------- 3D tilt with glare ---------- */
  if (fine && !reduce) {
    $$('[data-tilt]').forEach(function (el) {
      var max = parseFloat(el.getAttribute('data-tilt')) || 8;
      var target = el.querySelector('[data-tilt-target]') || el;
      if (!$('.tilt-glare', target)) { var g = d.createElement('span'); g.className = 'tilt-glare'; target.appendChild(g); }
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        target.style.transform = 'rotateY(' + ((px - .5) * max * 2).toFixed(2) + 'deg) rotateX(' + ((.5 - py) * max * 2).toFixed(2) + 'deg) translateZ(0)';
        target.style.setProperty('--gx', (px * 100).toFixed(1) + '%'); target.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
      });
      el.addEventListener('pointerleave', function () { target.style.transform = ''; });
    });
    /* scene tilt: the whole hero stage leans toward the pointer, layers at different depths */
    $$('[data-scene]').forEach(function (sc) {
      var layers = $$('[data-z]', sc);
      var host = sc.closest('section') || sc;
      host.addEventListener('pointermove', function (e) {
        var r = host.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        layers.forEach(function (l) { var z = parseFloat(l.getAttribute('data-z')); l.style.translate = (px * z * 40).toFixed(1) + 'px ' + (py * z * 30).toFixed(1) + 'px'; });
      });
      host.addEventListener('pointerleave', function () { layers.forEach(function (l) { l.style.translate = ''; }); });
    });
    /* magnetic buttons */
    $$('[data-magnetic]').forEach(function (b) {
      b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .18).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * .28).toFixed(1) + 'px)'; });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------- forms: preview build has no backend ---------- */
  $$('form[data-preview-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = $('.form__ok', f.parentElement) || d.createElement('p');
      ok.className = 'form__ok'; ok.setAttribute('role', 'status');
      ok.textContent = 'Thank you. This is a design preview, so nothing was sent — on the live site this form goes straight to The Retreat.';
      f.parentElement.appendChild(ok); f.reset();
    });
  });

  /* ---------- blog: ?category= filter, as on the live site ---------- */
  var list = $('[data-blog-list]');
  if (list) {
    var m = location.search.match(/[?&]category=([^&]+)/);
    var cat = m ? decodeURIComponent(m[1]) : '';
    if (cat) {
      var shown = 0;
      $$('[data-cats]', list).forEach(function (c) { var hit = c.getAttribute('data-cats').split(' ').indexOf(cat) > -1; c.hidden = !hit; if (hit) shown++; });
      $$('[data-filter]').forEach(function (a) { a.setAttribute('aria-current', a.getAttribute('data-filter') === cat ? 'true' : 'false'); });
      var feat = $('[data-feature-post]'); if (feat) feat.hidden = true;
      var pg = $('.pager'); if (pg) pg.hidden = true;
      var h = $('[data-blog-heading]'); if (h) h.textContent = cat;
      if (!shown) { var none = d.createElement('p'); none.textContent = 'No posts in this category yet.'; list.appendChild(none); }
    }
  }
})();
