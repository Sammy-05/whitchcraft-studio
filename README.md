# Whitchcraft Studio — website concept

A design concept for **Whitchcraft Studio**, a creative residency and recording space in a 1911 villa in St-Ursanne, Swiss Jura.

**Live demo:** https://sammy-05.github.io/whitchcraft-studio/

## What this is

A one-page site covering the seven requested sections — Home, About us, The Space, Overnight & Residency, Booking & Rates, References, Contact — with a working **EN / DE language switch** (top right, remembered between visits, defaults to the browser language).

Built as plain HTML, CSS and vanilla JS: no build step, no dependencies, loads in well under a second.

## Design notes

- **Palette** — warm paper (`#F6F2E9`), ink, a Jura yellow (`#F5C11E`), forest green and clay. Bright, but held together by lots of empty space.
- **Type** — Fraunces for display (a warm, slightly wonky serif — vintage charm, modern cut) against Inter for text. Strong size contrast does the heavy lifting.
- **Texture** — a fine paper grain over the whole page so the flat colour never feels sterile.
- **Motion** — restrained: a marquee, soft reveals on scroll, slow image zoom on hover. All of it respects `prefers-reduced-motion`.

## Placeholders

Everything here is stand-in content, ready to be swapped for the real material:

- **Images** — riso-style SVG illustrations in `assets/img/`. These are drop-in replacements for the studio's own photography.
- **Copy** — written to show tone and length in both languages; the client's real EN/DE copy replaces it 1:1.
- **Rates and reference quotes** — placeholder figures and testimonials (flagged as such on the page).
- **Contact form** — validates and shows a confirmation, but is not wired to an inbox. Point it at Formspree, Basin or a Wix form to go live.

## Editing text

All bilingual strings live on the element itself:

```html
<p data-en="English text" data-de="Deutscher Text">English text</p>
```

`assets/js/main.js` swaps `textContent` on toggle. Placeholders use `data-en-ph` / `data-de-ph`.

## Running locally

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Handover

The client asked for something they can edit themselves (they already have Wix). This build is the design direction — the same layout, palette and type system rebuild cleanly in Wix Studio, Squarespace or Webflow, with the bilingual sections mapped to the platform's own language manager.
