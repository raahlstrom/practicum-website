/* state-map.js — U.S. state map using D3 + TopoJSON + us-atlas
   Color-codes states by SGO opt-in status. Tooltip on hover/tap.
   Requires: D3 v7, TopoJSON v3 loaded globally (window.d3, window.topojson)
   Data from: content/state-map-data.js
*/

const US_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json';

// FIPS code → 2-letter postal code
const FIPS = {
  '01':'AL','02':'AK','04':'AZ','05':'AR','06':'CA','08':'CO','09':'CT',
  '10':'DE','12':'FL','13':'GA','15':'HI','16':'ID','17':'IL','18':'IN',
  '19':'IA','20':'KS','21':'KY','22':'LA','23':'ME','24':'MD','25':'MA',
  '26':'MI','27':'MN','28':'MS','29':'MO','30':'MT','31':'NE','32':'NV',
  '33':'NH','34':'NJ','35':'NM','36':'NY','37':'NC','38':'ND','39':'OH',
  '40':'OK','41':'OR','42':'PA','44':'RI','45':'SC','46':'SD','47':'TN',
  '48':'TX','49':'UT','50':'VT','51':'VA','53':'WA','54':'WV','55':'WI',
  '56':'WY',
};

const STATUS_LABELS = {
  'opted-in':  'Opted In',
  'opted-out': 'Opted Out',
  'undecided': 'Undecided',
};

export async function initStateMap(container, stateData) {
  if (!window.d3 || !window.topojson) {
    container.innerHTML = `<p style="font-family:var(--font-mono);font-size:12px;color:var(--color-ink-muted)">State map requires D3 and TopoJSON. Add script tags to page.</p>`;
    return;
  }

  const { d3, topojson } = window;

  // Build status lookup by postal code
  const statusByCode = {};
  stateData.forEach(s => { statusByCode[s.code] = s; });

  // Load topology
  let us;
  try {
    us = await d3.json(US_ATLAS_URL);
  } catch (e) {
    container.innerHTML = `<p style="font-family:var(--font-mono);font-size:12px;color:var(--color-ink-muted)">Could not load map data.</p>`;
    return;
  }

  const states = topojson.feature(us, us.objects.states);
  const borders = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

  // — Tooltip ————————————————————————————————————————————————————
  const tooltip = document.createElement('div');
  tooltip.className = 'map-tooltip';
  container.style.position = 'relative';
  container.appendChild(tooltip);

  // — SVG ————————————————————————————————————————————————————————
  const WIDTH  = 960;
  const HEIGHT = 600;

  const svg = d3.select(container)
    .insert('svg', '.map-tooltip')
    .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
    .attr('class', 'state-map-svg')
    .style('width', '100%')
    .style('height', 'auto')
    .style('display', 'block');

  // us-atlas Albers data is pre-projected; use identity path
  const path = d3.geoPath();

  // State fills
  svg.selectAll('.state-path')
    .data(states.features)
    .join('path')
    .attr('class', d => {
      const code   = FIPS[String(d.id).padStart(2, '0')];
      const state  = code ? statusByCode[code] : null;
      const status = state ? state.status : 'undecided';
      return `state-path state-path--${status}`;
    })
    .attr('d', path)
    .attr('stroke', '#1F1F1F')
    .attr('stroke-width', '0.5')
    .on('mouseenter touchstart', function(event, d) {
      const code   = FIPS[String(d.id).padStart(2, '0')];
      const state  = code ? statusByCode[code] : null;
      if (!state) return;

      tooltip.textContent = `${state.name} — ${STATUS_LABELS[state.status] || state.status}`;
      tooltip.classList.add('visible');

      const rect = container.getBoundingClientRect();
      const e    = event.touches ? event.touches[0] : event;
      tooltip.style.left = (e.clientX - rect.left + 12) + 'px';
      tooltip.style.top  = (e.clientY - rect.top - 32) + 'px';
    })
    .on('mousemove', function(event) {
      const rect = container.getBoundingClientRect();
      tooltip.style.left = (event.clientX - rect.left + 12) + 'px';
      tooltip.style.top  = (event.clientY - rect.top - 32) + 'px';
    })
    .on('mouseleave touchend', () => {
      tooltip.classList.remove('visible');
    });

  // State borders (internal)
  svg.append('path')
    .datum(borders)
    .attr('fill', 'none')
    .attr('stroke', '#F7F6F2')
    .attr('stroke-width', '1')
    .attr('d', path);

  // — Legend ————————————————————————————————————————————————————
  const counts = { 'opted-in': 0, 'opted-out': 0, 'undecided': 0 };
  stateData.forEach(s => { if (counts[s.status] !== undefined) counts[s.status]++; });

  const legend = document.createElement('div');
  legend.className = 'map-legend';
  legend.innerHTML = [
    ['opted-in',  `Opted In (${counts['opted-in']})`],
    ['opted-out', `Opted Out (${counts['opted-out']})`],
    ['undecided', `Undecided (${counts['undecided']})`],
  ].map(([status, label]) => `
    <div class="map-legend-item">
      <span class="map-legend-swatch map-legend-swatch--${status}"></span>
      ${label}
    </div>
  `).join('');
  container.appendChild(legend);
}
