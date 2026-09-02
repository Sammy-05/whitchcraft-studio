# Whitchcraft Studio — website concept

A design concept for **Whitchcraft Studio**, a recording studio and creative residency in a 1911 villa in St-Ursanne, in the Swiss Jura.

**Live:** https://sammy-05.github.io/whitchcraft-studio/

## What this is

One page covering the seven requested sections — Home, About us, The Space, Overnight & Residency, Booking & Rates, References, Contact — with a working **EN / DE switch** in the masthead. It swaps every string on the page, including form labels, placeholders and select options, remembers the choice, and falls back to the browser language on a first visit.

Plain HTML, CSS and vanilla JS. No build step, no framework, no dependency beyond two webfonts.

## Design notes

The reference points are printed matter rather than websites: an exhibition catalogue, a letterpress rate card, a small hotel's stationery.

- **Structure.** Sections are introduced by a hairline rule with the section name set small in the left margin, so the page reads as a document with running heads. No numbered chapters, no badges, no cards.
- **Type.** Fraunces carries every display line — a warm, high-contrast serif with vintage bones and a modern cut. Instrument Sans handles everything else. Scale contrast does the work; there is no decoration.
- **Colour.** Warm paper, near-black ink, a Jura yellow, forest green, and a clay red used only for accents. Two sections break the paper: the overnight section in forest, the references in full yellow.
- **Rates** are set as a printed price list with dotted leaders rather than pricing cards, which is both more honest to the place and easier for the client to extend.
- **Motion** is limited to a short fade on figures and section heads, and respects `prefers-reduced-motion`. The hero is never animated, so the page is readable the instant it paints.

## Placeholders

Everything here is stand-in content, ready to be swapped for the real material:

- **Photographs** are placeholders from [Unsplash](https://unsplash.com), colour-graded to one family so the page reads as a single shoot. Replace the files in `assets/img/` with the studio's own photography at the same aspect ratios.
- **Copy** was written to show tone and length in both languages; the client's real EN/DE text replaces it one-for-one.
- **Rates and reference quotes** are invented, and flagged as placeholders on the page itself.
- **The contact form** validates and confirms, but is not wired to an inbox. Point it at Formspree, Basin, or a Wix form to go live.

## Editing text

Every bilingual string lives on the element:

```html
<p data-en="English text" data-de="Deutscher Text">English text</p>
```

`assets/js/main.js` swaps `textContent` when the language changes. Input placeholders use `data-en-ph` / `data-de-ph`.

## Running locally

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Handover

The client asked for something they can edit themselves and already have a Wix subscription. This build is the design direction, not the final platform: the grid, palette, type system and section structure all rebuild cleanly in Wix Studio, Squarespace or Webflow, with the bilingual pairs mapped onto the platform's own language manager.
