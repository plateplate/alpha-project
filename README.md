# Project Alpha – Multi-Page Static Site (Pink Theme)

**Live Site:** https://plateplate.github.io/alpha-project/  
**Repo:** https://github.com/plateplate/alpha-project

## BLUF
Build and deploy a clean, multi-page static site using HTML, CSS, and GitHub Pages. Focus on structure, semantic markup, accessibility, and professional developer habits (wireframes, README, links, relative paths).

## User Story
_As a burgeoning web developer who wants a job, I want a showcase of my projects and talents so that I ace this class, learn stuff, and get a great job._

## Page Map
- `/index.html` — Home/landing with quick links (About, Blog, Projects, Resources, Nu, WAVE, Source)
- `/about.html` — **Developer profile card** (image + text) with privacy note (fictional persona)
- `/projects.html` — Project tiles (demo placeholders)
- `/blog.html` — 3 short, hard-coded entries
- `/resources.html` — Curated dev resources

Global navbar & footer on every page. All internal links use **relative paths**. Assets are isolated in `/styles`, `/scripts`, `/images`.

## Wireframe
![Home Wireframe](images/wireframe-home.png "Low-fidelity home page wireframe")

## Tech & Structure
- **HTML5/CSS3/JS**, **Normalize.css**, **Bootstrap 5 grid**, **Google Font (Inter)**
- External stylesheet: `/styles/style.css` (no inline styles)
- Advanced selectors included (e.g., `:focus-visible`, child/sibling, attribute selectors)
- Light JS with `DOMContentLoaded`, a **Theme** toggle (tiny interaction), and console logs
- Pink theme via CSS variables

```
/
├── index.html
├── about.html
├── projects.html
├── blog.html
├── resources.html
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
└── images/
    ├── profile.jpg (+ responsive .webp/.jpg variants)
    └── wireframe-home.png
```

## How to View
1. Visit the **Live Site**: https://plateplate.github.io/alpha-project/  
2. Or clone and open `index.html` locally (VS Code + Live Server recommended).

## Validation & Accessibility
- **Nu HTML Checker:** https://validator.w3.org/nu/?doc=https%3A%2F%2Fplateplate.github.io%2Falpha-project%2F  
- **WAVE Accessibility:** https://wave.webaim.org/report#/https://plateplate.github.io/alpha-project/  

Images include `alt`, headings form a logical outline, contrast and focus states are checked. Fix any Nu/WAVE errors that appear after edits.

## Code Snippet (Tiny Interaction)
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <!-- ... -->
  <button id="themeToggle" class="btn btn-outline-light btn-sm" type="button" aria-label="Toggle theme">Theme</button>
</nav>
<script src="scripts/script.js"></script>
```
```js
// scripts/script.js (excerpt)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready: portfolio scripts loaded');
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('theme-alt');
    console.log('Theme toggled');
  });
});
```

## Credits & Disclosures
- **Normalize.css** (CDN) — reset defaults  
- **Bootstrap 5** (CDN) — grid & components  
- **Google Fonts (Inter)** — typography  
- **About photo** supplied by project owner; responsive variants generated locally  
- Content scaffolding assisted by AI; reviewed and edited by me. Any copied/adapted snippets are attributed in code comments.

---

### Checklist (for submission)
- Repo public, Pages enabled, **live link works**  
- `/styles`, `/scripts`, `/images` folders  
- 4+ pages; global nav + footer  
- Semantic HTML; **Nu passes (no errors)**  
- Normalize + BS5 (or Flex/Grid), Google Font  
- Responsive layout looks good on mobile  
- JS ready handler + tiny interaction  
- WAVE errors cleared (warnings okay)  
- Relative paths; filenames kebab-case  
- README complete (wireframe, snippet, links, disclosure)  
- Footer/links to **Repo**, **Live Site**, **Nu**, **WAVE**
