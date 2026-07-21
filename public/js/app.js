/* ══════════════════════════════════════════════════════════════
   KreatorAI — app.js
   SPA navigation, scroll effects, FAQ, animations
   ══════════════════════════════════════════════════════════════ */

const PAGES = ['home', 'services', 'about', 'pricing'];

/* ── PAGE LOADER ──────────────────────────────── */
async function showPage(name) {
  if (!PAGES.includes(name)) name = 'home';

  // Load partial HTML
  const res = await fetch(`pages/${name}.html`);
  const html = await res.text();
  document.getElementById('page-root').innerHTML = html;

  // Update nav active state
  document.querySelectorAll('.nm a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === name);
  });

  // Push state for browser back/forward
  history.pushState({ page: name }, '', `#${name}`);

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Re-run page-specific init
  setTimeout(() => {
    initReveal();
    initFAQ();
    initCounters();
  }, 50);
}

/* ── BROWSER BACK/FORWARD ─────────────────────── */
window.addEventListener('popstate', e => {
  const page = (e.state && e.state.page) || 'home';
  showPage(page);
});

/* ── MOBILE MENU ──────────────────────────────── */
function toggleMob() {
  document.getElementById('hbg').classList.toggle('open');
  document.getElementById('mobmenu').classList.toggle('open');
}
function closeMob() {
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mobmenu').classList.remove('open');
}

/* ── SCROLL EFFECTS ───────────────────────────── */
const nav = document.getElementById('nav');
const prog = document.getElementById('prog');
const btt  = document.getElementById('btt');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sc', scrollY > 40);
  btt.classList.toggle('show', scrollY > 400);
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  if (docH > 0) prog.style.width = (scrollY / docH * 100) + '%';
}, { passive: true });

/* ── SCROLL REVEAL ────────────────────────────── */
let revealObs;
function initReveal() {
  if (revealObs) revealObs.disconnect();
  revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') });
  }, { threshold: .06, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('#page-root .rv').forEach(el => revealObs.observe(el));
}

/* ── FAQ TOGGLE ───────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('#page-root .fq').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.fi');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('#page-root .fi.open').forEach(f => f.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ── ANIMATED COUNTERS ────────────────────────── */
function animateCount(el, target, suffix, isDecimal) {
  let startTs = null;
  const duration = 1400;
  const step = ts => {
    if (!startTs) startTs = ts;
    const p = Math.min((ts - startTs) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = isDecimal
      ? (eased * target).toFixed(1) + suffix
      : Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const strip = document.querySelector('#page-root .stats-strip');
  if (!strip) return;
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const nums = e.target.querySelectorAll('.stat-num');
      const data = [
        { val:10,    sfx:'+',  dec:false },
        { val:6,     sfx:'+',  dec:false },
        { val:50000, sfx:'+',  dec:false },
      ];
      nums.forEach((el, i) => {
        if (data[i]) animateCount(el, data[i].val, data[i].sfx, data[i].dec);
      });
      counterObs.disconnect();
    });
  }, { threshold:.5 });
  counterObs.observe(strip);
}

/* ── BOOT ─────────────────────────────────────── */
(function init() {
  // Detect initial page from hash
  const hash = location.hash.replace('#', '');
  const startPage = PAGES.includes(hash) ? hash : 'home';
  showPage(startPage);
})();
