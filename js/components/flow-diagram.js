/* flow-diagram.js — 5-step SGO fund flow diagram with scroll animation
   Renders: DONOR → TAX CREDIT → SGO → SERVICE PROVIDERS → STUDENTS
   HTML nodes + SVG arrow overlay. IntersectionObserver scroll build.
   Requires: Lucide icons loaded globally (window.lucide)
*/

const NODES = [
  { label: 'Donor',             icon: 'user',           variant: '' },
  { label: 'Tax Credit',        icon: 'file-text',      variant: '' },
  { label: 'SGO',               icon: 'landmark',       variant: 'active' },
  { label: 'Service Providers', icon: 'shield',         variant: '' },
  { label: 'Students',          icon: 'graduation-cap', variant: 'outcome' },
];

const NODE_W  = 112;
const NODE_H  = 96;
const GAP     = 52;    // horizontal gap between nodes (arrow space)
const PAD_T   = 48;    // top padding for annotation text
const PAD_B   = 48;    // bottom padding for annotation text
const STEP    = NODE_W + GAP;
const TOTAL_W = NODES.length * STEP - GAP;
const TOTAL_H = PAD_T + NODE_H + PAD_B;
const CENTER_Y = PAD_T + NODE_H / 2;

const ANNOTATIONS = [
  {
    text: 'Dollar-for-dollar federal tax credit',
    x: STEP * 0 + NODE_W + GAP / 2,
    y: PAD_T - 14,
    anchor: 'middle',
  },
  {
    text: 'SGO conducts due diligence + oversight',
    x: STEP * 2 + NODE_W / 2,
    y: PAD_T + NODE_H + 28,
    anchor: 'middle',
  },
];

export function initFlowDiagram(container, steps = null) {
  container.innerHTML = '';
  container.classList.add('flow-diagram');

  const outer = document.createElement('div');
  outer.style.cssText = `position:relative;width:${TOTAL_W}px;height:${TOTAL_H}px;margin:0 auto`;

  // — SVG layer (arrows + annotations, behind nodes) ——————————————
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${TOTAL_W} ${TOTAL_H}`);
  svg.setAttribute('width', TOTAL_W);
  svg.setAttribute('height', TOTAL_H);
  svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:visible';
  svg.setAttribute('aria-hidden', 'true');

  // Arrows
  NODES.slice(0, -1).forEach((_, i) => {
    const x1  = i * STEP + NODE_W + 4;
    const x2  = (i + 1) * STEP - 4;
    const len = x2 - x1;

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', CENTER_Y);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', CENTER_Y);
    line.setAttribute('stroke', '#1F1F1F');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('marker-end', 'url(#arr-ink)');
    line.setAttribute('stroke-dasharray', len);
    line.setAttribute('stroke-dashoffset', len);
    line.classList.add('flow-line');
    line.setAttribute('data-delay', i * 150 + 75);
    svg.appendChild(line);
  });

  // Annotation texts
  ANNOTATIONS.forEach(a => {
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', a.x);
    text.setAttribute('y', a.y);
    text.setAttribute('text-anchor', a.anchor);
    text.setAttribute('font-family', 'IBM Plex Mono, Courier New, monospace');
    text.setAttribute('font-size', '11');
    text.setAttribute('font-style', 'italic');
    text.setAttribute('fill', '#6B7280');
    text.setAttribute('letter-spacing', '0.04em');
    text.setAttribute('opacity', '0');
    text.classList.add('flow-annotation');
    text.textContent = a.text;
    svg.appendChild(text);
  });

  outer.appendChild(svg);

  // — HTML node layer ——————————————————————————————————————————————
  NODES.forEach((node, i) => {
    const el = document.createElement('div');
    el.className = `dnode flow-node${node.variant ? ' ' + node.variant : ''}`;
    el.style.cssText = `position:absolute;left:${i * STEP}px;top:${PAD_T}px;width:${NODE_W}px;height:${NODE_H}px`;
    el.setAttribute('data-delay', i * 150);
    el.innerHTML = `
      <i data-lucide="${node.icon}" style="width:28px;height:28px;stroke-width:1.5" aria-hidden="true"></i>
      <span class="dnode-label">${node.label}</span>
    `;
    outer.appendChild(el);
  });

  container.appendChild(outer);

  // Optional step descriptions below diagram
  if (steps && steps.length) {
    const descs = document.createElement('div');
    descs.className = 'flow-steps';
    descs.style.cssText = `display:grid;grid-template-columns:repeat(${steps.length},1fr);gap:var(--sp3);margin-top:var(--sp5);font-family:var(--font-sans);font-size:var(--font-size-caption);color:var(--color-ink-muted);line-height:var(--line-height-caption)`;
    steps.forEach(s => {
      const d = document.createElement('div');
      d.innerHTML = `<span style="font-family:var(--font-mono);font-size:10px;color:var(--color-green);letter-spacing:0.1em;text-transform:uppercase;display:block;margin-bottom:4px">${s.num}</span>${s.title}`;
      descs.appendChild(d);
    });
    container.appendChild(descs);
  }

  // Lucide icons
  if (window.lucide) lucide.createIcons({ el: container });

  // Scroll animation
  _startAnimation(container);
}

function _animateIn(container) {
  container.querySelectorAll('.flow-node').forEach(node => {
    const delay = parseInt(node.getAttribute('data-delay')) || 0;
    setTimeout(() => node.classList.add('visible'), delay);
  });
  container.querySelectorAll('.flow-line').forEach(line => {
    const delay = parseInt(line.getAttribute('data-delay')) || 0;
    setTimeout(() => {
      line.style.transition = 'stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
      line.setAttribute('stroke-dashoffset', '0');
    }, delay);
  });
  setTimeout(() => {
    container.querySelectorAll('.flow-annotation').forEach(a => {
      a.style.transition = 'opacity 0.4s ease';
      a.setAttribute('opacity', '1');
    });
  }, 750);
}

function _showAll(container) {
  container.querySelectorAll('.flow-node').forEach(n => n.classList.add('visible'));
  container.querySelectorAll('.flow-line').forEach(l => l.setAttribute('stroke-dashoffset', '0'));
  container.querySelectorAll('.flow-annotation').forEach(a => a.setAttribute('opacity', '1'));
}

function _startAnimation(container) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    _showAll(container);
    return;
  }

  const trigger = () => {
    // Guard: only fire once
    if (container.dataset.animated) return;
    container.dataset.animated = '1';
    _animateIn(container);
  };

  // Already in viewport on load — fire after a short paint delay
  const rect = container.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    setTimeout(trigger, 80);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      trigger();
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  observer.observe(container);
}
