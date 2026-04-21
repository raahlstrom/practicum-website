/* logic-model.js — 5-level logic model diagram with scroll animation
   Renders: Inputs → Activities → Outputs → Outcomes → Impact
   Horizontal columns with items per level. Scroll-triggered stagger reveal.
*/

const LEVEL_COLORS = {
  'inputs':     { bg: 'var(--color-rule)',   text: 'var(--color-ink)' },
  'activities': { bg: 'var(--color-rule)',   text: 'var(--color-ink)' },
  'outputs':    { bg: 'var(--color-rule)',   text: 'var(--color-ink)' },
  'outcomes':   { bg: 'var(--color-yellow)', text: 'var(--color-ink)' },
  'impact':     { bg: 'var(--color-green)',  text: 'var(--color-ink)' },
};

export function initLogicModel(container, levels) {
  container.innerHTML = '';
  container.classList.add('logic-model');

  // Wrapper for horizontal scroll on mobile
  const wrap = document.createElement('div');
  wrap.style.cssText = 'overflow-x:auto;padding-bottom:var(--sp3)';

  const inner = document.createElement('div');
  inner.style.cssText = 'display:flex;align-items:flex-start;gap:0;min-width:640px';

  levels.forEach((level, i) => {
    const key = level.label.toLowerCase().replace(/\s+/g, '-');

    // Column
    const col = document.createElement('div');
    col.className = 'lm-col';
    col.style.cssText = `flex:1;opacity:0;transform:translateX(12px);transition:opacity 350ms ease,transform 350ms ease;transition-delay:${i * 100}ms`;
    col.setAttribute('data-delay', i * 100);

    // Header
    const header = document.createElement('div');
    header.className = 'lm-header';
    header.style.cssText = `
      font-family:var(--font-mono);
      font-size:10px;
      font-weight:700;
      letter-spacing:0.10em;
      text-transform:uppercase;
      color:var(--color-paper);
      background:var(--color-ink);
      padding:var(--sp2) var(--sp3);
      margin-bottom:var(--sp3);
      text-align:center;
    `;
    header.textContent = level.label;
    col.appendChild(header);

    // Items
    const itemsWrap = document.createElement('div');
    itemsWrap.style.cssText = 'display:flex;flex-direction:column;gap:var(--sp2);padding:0 var(--sp2)';

    level.items.forEach(item => {
      const el = document.createElement('div');
      el.style.cssText = `
        font-family:var(--font-sans);
        font-size:var(--font-size-caption);
        font-weight:var(--font-weight-medium);
        line-height:var(--line-height-caption);
        color:var(--color-ink);
        background:var(--color-paper);
        border:1.5px solid var(--color-ink);
        border-radius:var(--radius-sm);
        padding:var(--sp2) var(--sp3);
        text-align:center;
      `;
      el.textContent = item;
      itemsWrap.appendChild(el);
    });

    col.appendChild(itemsWrap);
    inner.appendChild(col);

    // Arrow connector (not after last column)
    if (i < levels.length - 1) {
      const arrow = document.createElement('div');
      arrow.setAttribute('aria-hidden', 'true');
      // Height matches the header block (10px font + 8px top + 8px bottom padding = 26px,
      // use 28px to account for line-height). align-self:flex-start keeps it from stretching.
      arrow.style.cssText = `
        flex-shrink:0;
        width:32px;
        height:28px;
        display:flex;
        align-items:center;
        justify-content:center;
        align-self:flex-start;
        color:var(--color-ink);
        font-size:22px;
        line-height:1;
      `;
      arrow.textContent = '→';
      inner.appendChild(arrow);
    }
  });

  wrap.appendChild(inner);
  container.appendChild(wrap);

  // Scroll animation
  _animateOnScroll(container, inner);
}

function _animateOnScroll(container, inner) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    inner.querySelectorAll('.lm-col').forEach(col => {
      col.style.opacity = '1';
      col.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      inner.querySelectorAll('.lm-col').forEach((col, i) => {
        setTimeout(() => {
          col.style.opacity = '1';
          col.style.transform = 'translateX(0)';
        }, i * 100);
      });

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}
