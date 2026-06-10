// v5 — minimal vanilla JS for the scroll-driven advisor.

(function () {
  'use strict';

  function translate(key, fallback, vars) {
    if (window.TO && TO.i18n && typeof TO.i18n.t === 'function') {
      var value = TO.i18n.t(key, vars);
      return value === key && fallback != null ? fallback : value;
    }
    return fallback != null ? fallback : key;
  }

  // ── 1. Top progress bar ─────────────────────────────────────
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // ── 2. Fade-in on scroll for any .fade element ──────────────
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade').forEach((el) => fadeObs.observe(el));

  // ── 3. Six-habit interactive savings meter ──────────────────
  // Toggle a habit ON, savings go UP. Simple and positive.
  const levers = document.querySelectorAll('.lever');
  const savePctEl = document.getElementById('save-pct');
  const saveFillEl = document.getElementById('save-fill');
  const saveCountEl = document.getElementById('save-count');
  const saveTierEl = document.getElementById('save-tier');
  const verdictEl = document.getElementById('verdict');
  // Per-habit qualitative impact (T-shirt sizing). Numeric score is internal-only,
  // used to bucket the rollup; we never surface a percentage.
  const IMPACTS = {
    1: 'high', 2: 'high', 3: 'medium', 4: 'low', 5: 'high', 6: 'medium'
  };
  const IMPACT_SCORE = { high: 3, medium: 2, low: 1 };
  const TOTAL_LEVERS = 6;
  const MAX_SCORE = Object.keys(IMPACTS).reduce((s, k) => s + IMPACT_SCORE[IMPACTS[k]], 0);

  function impactLabel(level) {
    const keyMap = { high: 'quick.scene2.impact.high', medium: 'quick.scene2.impact.medium', low: 'quick.scene2.impact.low' };
    const fallback = { high: 'High impact', medium: 'Medium impact', low: 'Low impact' };
    return translate(keyMap[level], fallback[level]);
  }

  function syncLeverSaveLabels() {
    levers.forEach((l) => {
      const saveEl = l.querySelector('.lever-save');
      if (!saveEl) return;
      const level = IMPACTS[l.dataset.p] || 'low';
      saveEl.classList.remove('impact-high', 'impact-med', 'impact-low');
      saveEl.classList.add(level === 'medium' ? 'impact-med' : 'impact-' + level);
      saveEl.textContent = impactLabel(level);
    });
  }

  function syncCopyButtonLabels() {
    document.querySelectorAll('.copy-btn').forEach((btn) => {
      if (btn.classList.contains('copied')) {
        btn.textContent = translate('quick.scene6.copied', 'COPIED ✓');
        return;
      }
      if (btn.dataset.copyState === 'fallback') {
        btn.textContent = translate('quick.scene6.pressCtrlC', 'PRESS CTRL+C');
        return;
      }
      btn.textContent = translate('quick.scene6.copy', 'COPY');
    });
  }

  function updateMeter() {
    let score = 0, count = 0;
    const activeHabits = [];
    levers.forEach((l) => {
      if (l.classList.contains('on')) {
        const level = IMPACTS[l.dataset.p] || 'low';
        score += IMPACT_SCORE[level];
        count++;
        const nameEl = l.querySelector('.lever-name');
        if (nameEl) activeHabits.push({ name: nameEl.textContent.trim(), level: level });
      }
    });

    // Bucket the rollup into a single T-shirt size. No percentages surfaced.
    let overall;
    if (count === 0) overall = 'none';
    else if (score <= Math.round(MAX_SCORE * 0.33)) overall = 'low';
    else if (score <= Math.round(MAX_SCORE * 0.66)) overall = 'medium';
    else overall = 'high';

    const overallText = overall === 'none'
      ? translate('quick.scene2.impact.none', 'None')
      : impactLabel(overall).replace(/\s*impact\s*$/i, '');

    savePctEl.textContent = overallText;
    savePctEl.classList.remove('bump');
    void savePctEl.offsetWidth;
    savePctEl.classList.add('bump');
    setTimeout(() => savePctEl.classList.remove('bump'), 260);
    // Bar reflects qualitative fullness from count, not a savings %.
    saveFillEl.style.width = (count / TOTAL_LEVERS * 100) + '%';
    saveCountEl.textContent = count;

    let tier, verdict, klass;
    if (count === 0) {
      tier = translate('quick.scene2.meter.noHabitsTier', 'No habits yet');
      verdict = translate('quick.scene2.meter.noHabitsVerdictHtml', 'Flip a switch to see which habits typically carry the most leverage. Labels are <em>directional</em>, not guarantees.');
      klass = '';
    } else if (count === 1) {
      const h = activeHabits[0];
      tier = translate('quick.scene2.meter.startTier', 'A start');
      verdict = translate('quick.scene2.meter.startVerdictHtml', '<strong>“{{name}}”</strong> is rated <strong>{{level}}</strong> leverage. Stack a few more to compound the effect — measure your own usage to confirm.', { name: h.name, level: impactLabel(h.level).toLowerCase() });
      klass = overall === 'high' ? 'good' : (overall === 'medium' ? 'amber' : '');
    } else {
      const sum = activeHabits.map(h => impactLabel(h.level).replace(/\s*impact\s*$/i, '')).join(' + ');
      let tail;
      if (count <= 3) {
        tier = translate('quick.scene2.meter.solidTier', 'Solid');
        tail = translate('quick.scene2.meter.solidTail', 'This is the daily zone — most teams stop here.');
        klass = 'amber';
      } else if (count <= 5) {
        tier = translate('quick.scene2.meter.tightTier', 'Tight loop');
        tail = translate('quick.scene2.meter.tightTail', 'Lighter, faster turns. Measure to see what it’s worth on your workload.');
        klass = 'good';
      } else {
        tier = translate('quick.scene2.meter.allSixTier', 'All six');
        tail = translate('quick.scene2.meter.allSixTail', 'Diminishing returns kick in — pick the two or three that fit your day.');
        klass = 'good';
      }
      verdict = translate('quick.scene2.meter.multiVerdictHtml', '<strong>{{count}} habits on:</strong> {{sum}} &rarr; overall <strong>{{overall}}</strong> leverage. {{tail}}', {
        count: count,
        sum: sum,
        overall: overallText.toLowerCase(),
        tail: tail
      });
    }

    saveTierEl.textContent = tier;
    verdictEl.innerHTML = verdict;
    verdictEl.className = 'verdict ' + klass;
  }

  function toggleLever(l) {
    l.classList.toggle('on');
    l.setAttribute('aria-checked', l.classList.contains('on') ? 'true' : 'false');
    updateMeter();
  }

  levers.forEach((l) => {
    l.addEventListener('click', (e) => {
      // Don't toggle the switch when the user clicks an inline link inside the lever.
      if (e.target.closest('a')) return;
      toggleLever(l);
    });
    l.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleLever(l); }
    });
  });

  document.querySelector('#flip-all')?.addEventListener('click', () => {
    levers.forEach((l) => {
      l.classList.add('on');
      l.setAttribute('aria-checked', 'true');
    });
    updateMeter();
  });
  document.querySelector('#reset-all')?.addEventListener('click', () => {
    levers.forEach((l) => {
      l.classList.remove('on');
      l.setAttribute('aria-checked', 'false');
    });
    updateMeter();
  });

  // Initial state.
  syncLeverSaveLabels();
  updateMeter();

  // ── 4. Copy buttons on templates ────────────────────────────
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.tmpl').querySelector('pre');
      const text = pre.innerText;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          btn.dataset.copyState = 'copied';
          btn.textContent = translate('quick.scene6.copied', 'COPIED ✓');
          btn.classList.add('copied');
          setTimeout(() => {
            btn.dataset.copyState = 'default';
            btn.textContent = translate('quick.scene6.copy', 'COPY');
            btn.classList.remove('copied');
          }, 1500);
        }).catch(() => {
          btn.dataset.copyState = 'fallback';
          btn.textContent = translate('quick.scene6.pressCtrlC', 'PRESS CTRL+C');
        });
      } else {
        btn.dataset.copyState = 'fallback';
        btn.textContent = translate('quick.scene6.pressCtrlC', 'PRESS CTRL+C');
      }
    });
  });

  // ── 5. Animate the bad/good token counters when visible ─────
  const counters = document.querySelectorAll('.demo .count');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1600;
      const t0 = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => counterObs.observe(c));

  window.addEventListener('langchange', () => {
    syncLeverSaveLabels();
    syncCopyButtonLabels();
    updateMeter();
  });
})();

// ── Sticky "Full playbook" CTA: appear after hero scrolled past ─
(function () {
  const cta = document.getElementById('sticky-cta');
  const hero = document.querySelector('.hero');
  if (!cta || !hero) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      cta.classList.toggle('visible', !e.isIntersecting);
    });
  }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
  io.observe(hero);
})();
