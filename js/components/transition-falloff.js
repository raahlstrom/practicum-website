/* transition-falloff.js — Academic performance drop at school transitions SVG
   Shows cumulative learning with sharp drops at elementary→middle and middle→high.
   Options:
     full: true  → includes axis labels, annotations, grade markers (problem page)
     full: false → simplified visual only (landing page teaser)
*/

const W = 640;
const H = 220;
const ML = 48;   // margin left
const MR = 24;   // margin right
const MT = 28;   // margin top
const MB = 36;   // margin bottom

const CHART_W = W - ML - MR;
const CHART_H = H - MT - MB;

// Grade positions: K(0) through 12
const GRADES = 13;
function gx(grade) { return ML + (grade / (GRADES - 1)) * CHART_W; }
function gy(perf)  { return MT + (1 - perf) * CHART_H; }  // perf: 0=low, 1=high

// Performance data — normalized 0–1. Drops at grade 5→6 and grade 8→9.
const DATA = [
  { g: 0,  p: 0.28 },
  { g: 1,  p: 0.36 },
  { g: 2,  p: 0.44 },
  { g: 3,  p: 0.51 },
  { g: 4,  p: 0.58 },
  { g: 5,  p: 0.65 },  // elementary peak
  { g: 6,  p: 0.38 },  // ← transition drop 1
  { g: 7,  p: 0.47 },
  { g: 8,  p: 0.54 },  // middle peak
  { g: 9,  p: 0.32 },  // ← transition drop 2
  { g: 10, p: 0.40 },
  { g: 11, p: 0.46 },
  { g: 12, p: 0.52 },
];

const TRANSITIONS = [
  { from: 5, to: 6, label: 'Elementary → Middle', shortLabel: 'T1' },
  { from: 8, to: 9, label: 'Middle → High School', shortLabel: 'T2' },
];

export function initTransitionFalloff(container, { full = true } = {}) {
  container.innerHTML = '';
  container.classList.add('transition-falloff');

  const ns = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.style.cssText = 'width:100%;height:auto;display:block;overflow:visible';
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Line chart showing academic performance dropping at school transition points');

  const g = (tag, attrs = {}, text = '') => {
    const el = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    if (text) el.textContent = text;
    return el;
  };

  // — Background grid lines ——————————————————————————————————————
  if (full) {
    [0.25, 0.5, 0.75, 1].forEach(v => {
      svg.appendChild(g('line', {
        x1: ML, y1: gy(v), x2: ML + CHART_W, y2: gy(v),
        stroke: '#D9D6CE', 'stroke-width': '1',
      }));
    });
  }

  // — Axes ——————————————————————————————————————————————————————
  // X axis
  svg.appendChild(g('line', {
    x1: ML, y1: MT + CHART_H, x2: ML + CHART_W, y2: MT + CHART_H,
    stroke: '#1F1F1F', 'stroke-width': '1.5',
  }));
  // Y axis
  svg.appendChild(g('line', {
    x1: ML, y1: MT, x2: ML, y2: MT + CHART_H,
    stroke: '#1F1F1F', 'stroke-width': '1.5',
  }));

  // — Drop zone shading ——————————————————————————————————————————
  TRANSITIONS.forEach(t => {
    const x1 = gx(t.from);
    const x2 = gx(t.to);
    svg.appendChild(g('rect', {
      x: x1, y: MT,
      width: x2 - x1,
      height: CHART_H,
      fill: '#E7C857',
      opacity: '0.15',
    }));
  });

  // — Main line ————————————————————————————————————————————————
  const pts = DATA.map(d => `${gx(d.g)},${gy(d.p)}`).join(' ');

  // Area fill under line
  const areaPath = `M${gx(DATA[0].g)},${gy(DATA[0].p)} ` +
    DATA.slice(1).map(d => `L${gx(d.g)},${gy(d.p)}`).join(' ') +
    ` L${gx(DATA[DATA.length - 1].g)},${MT + CHART_H} L${gx(DATA[0].g)},${MT + CHART_H} Z`;

  svg.appendChild(g('path', {
    d: areaPath,
    fill: '#5FAF8F',
    opacity: '0.08',
  }));

  const line = g('polyline', {
    points: pts,
    fill: 'none',
    stroke: '#5FAF8F',
    'stroke-width': '2.5',
    'stroke-linejoin': 'round',
    'stroke-linecap': 'round',
  });
  // Animate line draw
  const lineEl = svg.appendChild(line);

  // — Transition drop indicators ——————————————————————————————————
  TRANSITIONS.forEach(t => {
    const x1 = gx(t.from);
    const x2 = gx(t.to);
    const y1 = gy(DATA[t.from].p);
    const y2 = gy(DATA[t.to].p);

    // Vertical drop arrow
    svg.appendChild(g('line', {
      x1: (x1 + x2) / 2, y1: y1 + 4,
      x2: (x1 + x2) / 2, y2: y2 - 4,
      stroke: '#1F1F1F',
      'stroke-width': '1.5',
      'marker-end': 'url(#arr-ink)',
      'stroke-dasharray': '3 2',
    }));

    // Data points at transition edges
    [{ g: t.from, p: DATA[t.from].p }, { g: t.to, p: DATA[t.to].p }].forEach(pt => {
      svg.appendChild(g('circle', {
        cx: gx(pt.g), cy: gy(pt.p), r: '3.5',
        fill: '#1F1F1F',
      }));
    });

    if (full) {
      const labelX = (x1 + x2) / 2;
      const labelY = y2 + 18;
      const lbl = g('text', {
        x: labelX, y: labelY,
        'text-anchor': 'middle',
        'font-family': 'IBM Plex Mono, Courier New, monospace',
        'font-size': '10',
        'font-style': 'italic',
        fill: '#6B7280',
        'letter-spacing': '0.03em',
      }, t.label);
      svg.appendChild(lbl);
    } else {
      // Simplified: just show T1, T2
      svg.appendChild(g('text', {
        x: (x1 + x2) / 2,
        y: MT - 8,
        'text-anchor': 'middle',
        'font-family': 'IBM Plex Mono, Courier New, monospace',
        'font-size': '10',
        fill: '#1F1F1F',
        'font-weight': '700',
        'letter-spacing': '0.06em',
      }, t.shortLabel));
    }
  });

  // — Grade labels (full version) ——————————————————————————————
  if (full) {
    ['K','1','2','3','4','5','6','7','8','9','10','11','12'].forEach((lbl, i) => {
      svg.appendChild(g('text', {
        x: gx(i), y: MT + CHART_H + 16,
        'text-anchor': 'middle',
        'font-family': 'IBM Plex Mono, Courier New, monospace',
        'font-size': '10',
        fill: '#6B7280',
        'letter-spacing': '0.04em',
      }, lbl));
    });

    // Y axis label
    const yLabel = g('text', {
      x: 12, y: MT + CHART_H / 2,
      'text-anchor': 'middle',
      'font-family': 'IBM Plex Mono, Courier New, monospace',
      'font-size': '10',
      'font-style': 'italic',
      fill: '#6B7280',
      'letter-spacing': '0.04em',
      transform: `rotate(-90, 12, ${MT + CHART_H / 2})`,
    }, 'Performance');
    svg.appendChild(yLabel);

    // Caption
    svg.appendChild(g('text', {
      x: ML + CHART_W / 2, y: H - 4,
      'text-anchor': 'middle',
      'font-family': 'IBM Plex Mono, Courier New, monospace',
      'font-size': '9',
      fill: '#6B7280',
      'letter-spacing': '0.06em',
    }, 'Grade Level'));
  }

  // — Legend (full version) ——————————————————————————————————————
  if (full) {
    svg.appendChild(g('line', {
      x1: ML, y1: 14, x2: ML + 24, y2: 14,
      stroke: '#5FAF8F', 'stroke-width': '2.5',
    }));
    svg.appendChild(g('text', {
      x: ML + 30, y: 18,
      'font-family': 'IBM Plex Mono, Courier New, monospace',
      'font-size': '10', 'font-style': 'italic',
      fill: '#6B7280',
    }, 'Academic performance'));

    svg.appendChild(g('rect', {
      x: ML + 180, y: 8, width: 16, height: 10,
      fill: '#E7C857', opacity: '0.4',
    }));
    svg.appendChild(g('text', {
      x: ML + 202, y: 18,
      'font-family': 'IBM Plex Mono, Courier New, monospace',
      'font-size': '10', 'font-style': 'italic',
      fill: '#6B7280',
    }, 'Transition period'));
  }

  container.appendChild(svg);
}
