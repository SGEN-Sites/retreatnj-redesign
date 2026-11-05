# Media

## Owner-supplied media

`natalie-benson.webp` (1080x1350): the portrait the owner supplied for /natalie/ on 2026-11-05
(`assets/source/owner-natalie-benson.png`), resized and re-encoded only; the alt text names Natalie Benson on the
owner's word.

`cine-store-storefront-1960.webp` / `-1000.webp`: a frame of the storefront the owner supplied on 2026-11-05 for the
/location/ hero (`assets/source/owner-storefront-screenshot.png`, captured from a map viewer). The viewer's side-panel
button and mini map were cropped off (34 px at the left, 120 px at the bottom; nothing painted in), then fal Topaz
Precision "High Fidelity V2" at 1x, face enhancement off (request 01a1aad2-6478-7800-83bf-efc4cd39bc2f), then
`tools/grade-store.py` (colour and light only). **Rights not yet confirmed:** the frame came from a map viewer, so before
launch the owner confirms The Retreat took it or holds permission (Street View imagery and visitors' photos carry
Google's or the photographer's terms).

## Client media (captured from www.retreatnj.com on 2026-11-05)

`assets/img/live/` — logo marks (`logo-main.svg`, `logo-footer.svg`), store photography (`store-counter`,
`store-display`, `store-entrance`, `store-front`), the golden-hour brand photo (`hero-golden-hour`), category photos
(`cat-*`), team, founder and blog imagery. Resized and re-encoded to WebP only; never edited.

## Generated media (`assets/img/gen/`, every `<img>` carries `data-ai="generated"`)

Model: fal `fal-ai/flux-pro/v1.1-ultra` (stills), `fal-ai/birefnet/v2` (General Use (Heavy), refine foreground) for
cut-outs; later fixes used `fal-ai/flux-pro/kontext`, `fal-ai/nano-banana-pro/edit` and `bria/guided-remove-background`
(request ids in `assets/generated/jobs.json`, "productFixes"). Rules: no people, hands or faces; no text, numbers, labels or logos; blank devices and jars; colours named
in words; dark scenes leave named negative space for type. Reviewed at full size before use.

| file | request id | use |
|---|---|---|
| cut-leaf | 01a1a93d-8f9b-7b31-ab1f-a2cc64fb1bce → 01a1a940-28e3-7453-b31f-ca048ffbd3be | retired 2026-11-05 by the owner; not used |
| cut-stones | 01a1a93d-90cf-7603-ab9d-572795e45683 → 01a1a940-2a1b-7ce0-8a1a-e39806bb8b5d | retired 2026-11-05 by the owner; not used |
| cut-orb | 01a1a93d-9228-7bd2-b3f3-6012796f347f → 01a1a940-2b49-76d1-b50f-f914c275adb1 | retired 2026-11-05 by the owner; not used |
| cut-bud | 01a1a93d-9364-7a61-a2a6-6f355393f12d → 01a1a940-2c6b-7e52-9e64-538120b52921 | flower |
| cut-vape | 01a1a93d-95c8-7ee3-a714-538f19521dfd → 01a1a940-2f15-7593-9c13-21db4d1dc45f | source of cut-vape-slant |
| cut-vape-slant | cut-vape rotated 36°, nothing redrawn (`tools/process-images.py`) | vapes (owner: slanted to sit inside the ring) |
| cut-grinder | 01a1a93d-970a-7bf3-9e50-3881aaf402c5 → re-cut 01a1aac1-a2c1-7221-9bc6-86c3883e2445 (Bria; the first cut lost the lid's inside) | accessories |
| cut-jar-gummies | Kontext edit of the jar 01a1aac1-a5fc-7733-8524-aea4a272f89b → Bria cut 01a1aac2-6a7d-7a80-a1f9-bd57c5443ebc | edibles (owner: round gummies) |
| cut-pre-rolls | Nano Banana Pro edit 01a1aad1-3dbb-7dc2-9259-134e2c323722, guided by the live site's own pre-roll photo (`3b1e2d6b-Pre-Rolls.jpg`) → Bria cut 01a1aad3-52ee-7b33-bba8-52ce79d495e1 | pre-rolls (replaced the first cut on the owner's word: "does not look a preroll at all") |
| thumb-cut-* | 168 px copies of the five category cut-outs | the Shop mega menu tiles (owner: the image each category hero uses) |
| cut-jar | 01a1a93d-9892-79a3-b2fa-54984dfbe22b → 01a1a940-31d5-70f0-81a4-33ba1bcca609 | offers, brands |
| scene-still | 01a1a93d-99d4-7671-b5b7-46e559935d1e | candlelit still life |
| scene-window | 01a1a93d-9b01-7bf3-88ef-1dabdadfe454 | the re·treat definition |
| scene-botanical | 01a1a93d-9c4d-7b42-ba77-f5213580ff62 | learn / terpenes; home Learn tile "Shop by aroma" |
| scene-sand | 01a1a93d-9d82-74d1-90c4-cef29400b88c | order-ahead band backdrop |
| scene-ritual | 01a1a93d-9ec7-7d60-a73f-d6572ab12226 | area page; its sand-ripple sibling also backs the marquee |
| prod-flower | 01a1a9e1-d856-7003-8e81-a2d4894ee627 | Shop by category bento (home, menu, location); home Learn tile "Cannabis 101" |
| prod-edibles | 01a1a9e1-d9ea-7a82-b1d5-b93e4cec636e | Shop by category bento |
| prod-pre-rolls | 01a1a9e7-be40-7071-ada8-f44cb9fa4e3b (third take) | Shop by category bento |
| prod-vapes | 01a1a9e5-f714-7fb0-9480-beb640de506a (second take) | Shop by category bento |
| prod-accessories | 01a1a9e1-de1f-78c3-a758-921acc12cd54 | Shop by category bento |
| prod-bag | 01a1a9f7-97fc-7e62-9d00-c6d0a8e5e4f6 | Order ahead band on the home page (owner pick: option B) |

The prod-* set (2026-11-05) is one studio series: unbranded products on travertine plinths, a pale warm-stone backdrop
and window light. They show product types, not The Retreat's own stock, so they carry no product or brand claims.

Rejected: a pre-roll render (read as a cigarette); for the bento, two more pre-roll takes (white tubes; hollow paper)
and one vape take (a dropper bottle). For the pre-roll hero: the first cut-out and six more takes (paper cones, a
metal-looking cone, hollow tubes, a printed-looking speckle); a seventh, text-only Nano Banana Pro take is kept as an
alternative. Spend: 22 stills + 8 cut-outs at fal list price (about $0.06 per Ultra still); then 5 Ultra, 2 Kontext
($0.04), 2 Nano Banana Pro ($0.15), 1 Topaz and 4 Bria cuts (Topaz and Bria prices not looked up). None of it is
reconciled against an invoice (the fal usage API refuses this key).

## Home hero (owner pick: option I, 2026-11-05)

`hero-home.webp` (3840x2136), `hero-home-portrait.webp` (1100x1894) and their cut-outs `hero-home-fg.webp` /
`hero-home-portrait-fg.webp` are The Retreat's own golden-hour photo (`7ad8d765-homepage-hero.jpg`), upscaled 2x with
fal SeedVR2 (request 01a1a9af-c677-7dd3-85cf-4e0eb5f72e5e), colour-graded (`tools/grade-hero.py`), cut out with
BiRefNet (requests `hero-fg-2400` / `hero-fg-portrait` in jobs.json), then given extra sky above her head
(`tools/extend-hero.py`: the photo's own top-row colours and grain, no generated content) so her head clears the
floating nav. The person and the landscape are unchanged. On phones the crop was re-centred on her on 2026-11-05 (owner: "move the
lady to the center"; `tools/center-hero-portrait.py`): the same graded photo framed 272.7 px further left and her
cut-out moved by the same 240 phone px, nothing added or removed; the earlier files are in `assets/generated/archive/`.

## What's New feature photo (owner pick: option B, 2026-11-05)

`feature-vaping-2400.webp` / `-1200.webp` are the blog's own photo for "Vaping vs. Smoking Cannabis" (1920x1080 on the
live site), upscaled 2x with fal SeedVR2 (request 01a1aa58-3ad6-7e61-85f1-f81d13ca87d1) and graded like the hero
(`tools/grade-feature.py`: colour and light only; nothing in the picture is added or removed).

## Visit photo (owner pick: option B, 2026-11-05)

`visit-interior-1760.webp` / `-1100.webp` are the live site's own interior photo (`The-Retreat-Interior.jpg`, 880x879),
upscaled 2x with fal Topaz Precision "High Fidelity V2", face enhancement off (request
01a1aa79-b2bd-7712-9d40-793c2ec7e6a1; a "Low Resolution V2" take, 01a1aa79-b406-7e70-9fd3-59bad364d576, was compared at
100% and not used), then given a cinematic grade (`tools/grade-visit.py`: colour and light only; nothing in the picture
is added or removed; the TV screens are only dimmed and desaturated). The ungraded original still serves /location/
and /the-space/.

## Store photos, cinematic (owner request 2026-11-05)

`cine-store-counter-2000/-1000.webp`, `cine-store-display-1536/-800.webp` and `cine-store-entrance-2000/-1000.webp` are
the live site's own store photos (counter 1200x896, display 1536x2048, entrance 1200x900) run through fal Topaz
Precision "High Fidelity V2", face enhancement off (counter 2x 01a1aa97-665b-75c2-80c5-f73b6ea40ecf, display 1x
01a1aa97-67b1-7580-865c-a65534281ea5, entrance 2x 01a1aa97-a5d4-7843-9258-ff6d9570dea5), then graded with
`tools/grade-store.py` in the Visit photo's look (colour and light only; nothing added or removed; lettering checked at
100%). They serve the home page's "Who we are" band, the Learn tile "Your first visit" and /the-space/; the
graded entrance is also the backdrop of the footer's "Find your retreat." on every page (owner pick B, 2026-11-05).
On the owner's request (2026-11-05) the graded entrance replaced the ungraded one everywhere: /first-visit/,
/areas-we-serve/, /shop/, the About page collage (with the graded counter and display beside it) and the About
mega-menu card. Other pages keep the ungraded counter and display files.
