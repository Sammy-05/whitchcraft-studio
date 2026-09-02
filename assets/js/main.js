/* Whitchcraft Studio — no dependencies */
(function () {
  'use strict';

  /* ---------- language ---------- */
  var STORE = 'wc-lang';
  var titles = {
    en: 'Whitchcraft Studio — St-Ursanne',
    de: 'Whitchcraft Studio — St-Ursanne'
  };

  function setLang(lang) {
    if (lang !== 'de') lang = 'en';

    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('[data-' + lang + '-ph]').forEach(function (el) {
      el.setAttribute('placeholder', el.getAttribute('data-' + lang + '-ph'));
    });

    document.documentElement.lang = lang;
    document.title = titles[lang];

    document.querySelectorAll('.lang__btn').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on);
    });

    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var saved;
  try { saved = localStorage.getItem(STORE); } catch (e) {}
  setLang(saved || (navigator.language || '').slice(0, 2).toLowerCase());

  /* ---------- masthead ---------- */
  var head = document.getElementById('masthead');
  var onScroll = function () { head.classList.toggle('stuck', window.scrollY > 20); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.documentElement.classList.remove('is-menu');
  }

  burger.addEventListener('click', function () {
    if (burger.getAttribute('aria-expanded') === 'true') return closeMenu();
    menu.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('is-menu');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) closeMenu();
  });

  /* ---------- reveal ---------- */
  var items = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- contact form (demo) ---------- */
  var form = document.getElementById('form');
  var msg = document.getElementById('formMsg');
  var copy = {
    bad: {
      en: 'Please add your name, a valid email and a message.',
      de: 'Bitte Name, gültige E-Mail und Nachricht ergänzen.'
    },
    ok: {
      en: 'Thank you. This demo form is not connected to an inbox yet.',
      de: 'Danke. Dieses Demo-Formular ist noch nicht mit einem Postfach verbunden.'
    }
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var lang = document.documentElement.lang === 'de' ? 'de' : 'en';
    var ok = true;

    form.querySelectorAll('[required]').forEach(function (input) {
      var good = input.value.trim() !== '' && input.checkValidity();
      input.closest('.f').classList.toggle('bad', !good);
      if (!good) ok = false;
    });

    msg.classList.toggle('ok', ok);
    msg.textContent = ok ? copy.ok[lang] : copy.bad[lang];
    if (ok) form.reset();
  });

  /* ---------- year ---------- */
  document.getElementById('yr').textContent = new Date().getFullYear();
})();
