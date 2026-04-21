/* render.js — Shared template utilities
   Usage: import { hydrate, renderAccordion, ... } from '/js/render.js';
*/

/* ── HYDRATE ─────────────────────────────────────────────────────
   Fills elements with [data-content="key.path"] from a content obj.
   Supports dot-notation: "hero.headline" → content.hero.headline
   Set data-content-html to allow HTML values (default: textContent).
*/
export function hydrate(content) {
  document.querySelectorAll('[data-content]').forEach(el => {
    const keyPath = el.dataset.content;
    const value = resolvePath(content, keyPath);
    if (value === undefined || value === null) return;
    if (el.dataset.contentHtml !== undefined) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}

function resolvePath(obj, path) {
  return path.split('.').reduce((cur, key) => cur?.[key], obj);
}


/* ── ACCORDION ──────────────────────────────────────────────────
   data: Array of { label, content (HTML string), stat? }
   container: HTMLElement to render into
*/
export function renderAccordion(data, container) {
  container.innerHTML = data.map((panel, i) => `
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="false"
              aria-controls="accordion-panel-${i}" id="accordion-btn-${i}">
        <span class="accordion-trigger-label">${panel.label}</span>
        <span class="toggle-icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-panel" id="accordion-panel-${i}"
           role="region" aria-labelledby="accordion-btn-${i}">
        <div class="accordion-panel-inner">
          ${panel.content}
          ${panel.stat ? `<div class="callout-stat"><p>${panel.stat}</p></div>` : ''}
          ${panel.footnotes ? renderFootnotes(panel.footnotes) : ''}
        </div>
      </div>
    </div>
  `).join('');

  initAccordionBehavior(container);
}

function initAccordionBehavior(container) {
  container.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.classList.toggle('open', !expanded);
    });
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}


/* ── TABS ────────────────────────────────────────────────────────
   data: Array of { label, content (HTML string) }
   container: HTMLElement
*/
export function renderTabs(data, container) {
  const tabList = data.map((tab, i) => `
    <button class="tab-trigger" role="tab"
            aria-selected="${i === 0}" aria-controls="tab-panel-${i}"
            id="tab-btn-${i}">
      ${tab.label}
    </button>
  `).join('');

  const panels = data.map((tab, i) => `
    <div class="tab-panel${i === 0 ? ' active' : ''}" role="tabpanel"
         id="tab-panel-${i}" aria-labelledby="tab-btn-${i}"
         ${i !== 0 ? 'hidden' : ''}>
      ${tab.content}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="tabs-list" role="tablist">${tabList}</div>
    ${panels}
  `;

  initTabBehavior(container);
}

function initTabBehavior(container) {
  const triggers = container.querySelectorAll('.tab-trigger');
  const panels = container.querySelectorAll('.tab-panel');

  triggers.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      triggers.forEach(b => { b.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => { p.classList.remove('active'); p.hidden = true; });
      btn.setAttribute('aria-selected', 'true');
      panels[i].classList.add('active');
      panels[i].hidden = false;
    });
  });

  // Arrow key navigation
  container.querySelector('.tabs-list').addEventListener('keydown', e => {
    const idx = [...triggers].indexOf(document.activeElement);
    if (idx === -1) return;
    if (e.key === 'ArrowRight') triggers[(idx + 1) % triggers.length].focus();
    if (e.key === 'ArrowLeft')  triggers[(idx - 1 + triggers.length) % triggers.length].focus();
  });
}


/* ── EXPANDABLE LIST ────────────────────────────────────────────
   data: Array of { num, title, summary, detail (HTML string), callout? }
   container: HTMLElement
*/
export function renderExpandableList(data, container) {
  container.innerHTML = data.map((item, i) => `
    <div class="expandable-item">
      <button class="expandable-trigger" aria-expanded="false"
              aria-controls="exp-panel-${i}" id="exp-btn-${i}">
        <span class="expandable-num">${item.num}</span>
        <span class="expandable-summary">
          <span class="expandable-summary-title">${item.title}</span>
          <span class="expandable-summary-desc">${item.summary}</span>
        </span>
        <span class="toggle-icon" aria-hidden="true"></span>
      </button>
      <div class="expandable-panel" id="exp-panel-${i}"
           role="region" aria-labelledby="exp-btn-${i}">
        <div class="expandable-panel-inner">
          <p>${item.detail}</p>
          ${item.callout ? `
            <div class="callout-important">
              <span class="label-tag">Important to Know</span>
              <p>${item.callout}</p>
            </div>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  initExpandableBehavior(container);
}

function initExpandableBehavior(container) {
  container.querySelectorAll('.expandable-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.classList.toggle('open', !expanded);
    });
  });
}


/* ── FOOTNOTES ──────────────────────────────────────────────────
   items: Array of strings (citation text)
*/
export function renderFootnotes(items) {
  if (!items || !items.length) return '';
  const lis = items.map(text => `<li>${text}</li>`).join('');
  return `<div class="footnotes"><ol>${lis}</ol></div>`;
}


/* ── PERSON CARD ────────────────────────────────────────────────
   person: { name, title, affiliation, email, photo? }
*/
export function renderPersonCard(person) {
  const photo = person.photo
    ? `<img class="person-card-photo" src="${person.photo}"
            alt="Photo of ${person.name}" width="80" height="80">`
    : `<div class="person-card-photo-placeholder" aria-hidden="true">
        <i data-lucide="user" style="width:32px;height:32px;stroke:#6B7280;stroke-width:1.5"></i>
       </div>`;

  return `
    <div class="person-card">
      <span class="crosshair crosshair--tl" aria-hidden="true">+</span>
      <span class="crosshair crosshair--br" aria-hidden="true">+</span>
      ${photo}
      <div>
        <div class="person-card-name">${person.name}</div>
        <div class="person-card-title">${person.title}</div>
      </div>
      <div class="person-card-affiliation">${person.affiliation}</div>
      <a class="person-card-email" href="mailto:${person.email}">
        <i data-lucide="mail" style="width:14px;height:14px;stroke-width:1.5" aria-hidden="true"></i>
        ${person.email}
      </a>
    </div>
  `;
}


/* ── PREVIEW CARD (landing page) ────────────────────────────────
   card: { label, title, description, href }
*/
export function renderPreviewCard(card) {
  return `
    <a class="preview-card" href="${card.href}">
      <span class="crosshair crosshair--tl" aria-hidden="true">+</span>
      <span class="crosshair crosshair--br" aria-hidden="true">+</span>
      <span class="preview-card-label">${card.label}</span>
      <span class="preview-card-title">${card.title}</span>
      <span class="preview-card-description">${card.description}</span>
      <span class="preview-card-link">Learn more →</span>
    </a>
  `;
}


/* ── DOC CARD (resources page) ──────────────────────────────────
   doc: { type, title, description, href?, placeholder? }
*/
export function renderDocCard(doc) {
  const isPlaceholder = doc.placeholder;
  return `
    <div class="doc-card${isPlaceholder ? ' doc-card--placeholder' : ''}">
      <span class="doc-card-type">${doc.type}</span>
      <span class="doc-card-title">${doc.title}</span>
      <span class="doc-card-description">${doc.description}</span>
      ${isPlaceholder
        ? `<span class="doc-card-action">Coming Soon</span>`
        : `<a class="doc-card-action" href="${doc.href}" download>
             <i data-lucide="download" style="width:14px;height:14px;stroke-width:1.5" aria-hidden="true"></i>
             Download
           </a>`
      }
    </div>
  `;
}


/* ── CALLOUT IMPORTANT ──────────────────────────────────────────
   { label?, body (HTML string) }
*/
export function renderCallout(data) {
  return `
    <div class="callout-important">
      <span class="label-tag">${data.label || 'Important to Know'}</span>
      <p>${data.body}</p>
    </div>
  `;
}
