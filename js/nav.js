/* nav.js — Injects site navigation and footer, sets active state */

const NAV_LINKS = [
  { label: 'About',       href: '/about'     },
  { label: 'The Problem', href: '/problem'   },
  { label: 'Solution',    href: '/solution'  },
  { label: 'Resources',   href: '/resources' },
  { label: 'Get in Touch', href: '/contact'  },
];

const ORG_NAME = '[PLACEHOLDER NAME]';

function getActivePath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return path;
}

function buildNav() {
  const active = getActivePath();
  const links = NAV_LINKS.map(({ label, href }) => {
    const isActive = active === href || (href !== '/' && active.startsWith(href));
    return `<li>
      <a href="${href}" class="nav-link${isActive ? ' active' : ''}"
         ${isActive ? 'aria-current="page"' : ''}>${label}</a>
    </li>`;
  }).join('');

  return `
    <div class="container">
      <div class="nav-inner">
        <a href="/" class="nav-logo" aria-label="${ORG_NAME} — Home">
          <span class="nav-logo-text">${ORG_NAME}</span>
        </a>
        <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"
                aria-controls="nav-links">
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
        </button>
        <ul class="nav-links" id="nav-links" role="list">${links}</ul>
      </div>
    </div>
  `;
}

function buildFooter() {
  const links = NAV_LINKS.map(({ label, href }) =>
    `<a href="${href}">${label}</a>`
  ).join('');

  return `
    <div class="container">
      <div class="footer-inner">
        <span class="footer-name">${ORG_NAME}</span>
        <nav class="footer-links" aria-label="Footer navigation">${links}</nav>
      </div>
    </div>
  `;
}

function initMobileToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Close when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function init() {
  const navEl = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');

  if (navEl) navEl.innerHTML = buildNav();
  if (footerEl) footerEl.innerHTML = buildFooter();

  initMobileToggle();
}

document.addEventListener('DOMContentLoaded', init);
