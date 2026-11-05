# The Retreat — website redesign preview

A total redesign of [retreatnj.com](https://www.retreatnj.com/) for **The Retreat**, the woman-owned and operated
adult-use cannabis dispensary at 656 Grand St, Jersey City, NJ.

**Live preview:** https://sgen-sites.github.io/retreatnj-redesign/  (noindex · design preview · 21+ age gate as on the live site)

## What this is

- **55 pages**: every page of the live site on its live URL, with The Retreat's own words, plus the page types a
  leading dispensary site carries and the live site lacks: category guides (flower, pre-rolls, edibles, vapes,
  accessories), how to shop, shop by aroma, offers, a learn hub, Cannabis 101, your first visit, New Jersey cannabis
  laws, areas we serve (Hoboken, Bayonne, Downtown Jersey City), inside The Retreat, a site map and a 404.
- **Art direction — "Golden Hour on Grand", light edition**: the brand's own sand (#EAE4DE) and bronze (#7D644F) in
  tints and shades, milk-glass panes, and real store photography layered across arches and section seams. Built from
  the brand's leaf-cornered tiles, its golden-hour photography and its own words
  ("re·treat — a safe space where you can experience complete renewal…", "Meditate on this.").
- **Motion**: word-by-word heading reveals, scroll parallax on layered images, 3D tilt and glare on category tiles,
  a pointer-following light, magnetic buttons, a breathing circle, a definition that lights up as you scroll.
  All of it is off under `prefers-reduced-motion`, and every word is visible without JavaScript.
- **Chrome**: utility line with live open/closed status (Jersey City time), mega menus, phone drawer, a sticky
  "Order ahead for pickup" bar on desktop and a bottom quick-nav dock on phones.
- **Shop, Order and category links open The Retreat's existing live menu**; the preview does not rebuild the menu.

See [`PITCH-NOTES.md`](PITCH-NOTES.md) for what was kept, what is new (drafts for approval), what was not built,
and questions found on the live site. Image provenance: [`MEDIA.md`](MEDIA.md).

Static HTML, CSS and vanilla JS. No framework, no runtime dependencies, no trackers. Self-hosted fonts (SIL OFL).
