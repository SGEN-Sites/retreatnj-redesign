# Media

## Client media (captured from www.retreatnj.com on 2026-11-05)

`assets/img/live/` — logo marks (`logo-main.svg`, `logo-footer.svg`), store photography (`store-counter`,
`store-display`, `store-entrance`, `store-front`), the golden-hour brand photo (`hero-golden-hour`), category photos
(`cat-*`), team, founder and blog imagery. Resized and re-encoded to WebP only; never edited.

## Generated media (`assets/img/gen/`, every `<img>` carries `data-ai="generated"`)

Model: fal `fal-ai/flux-pro/v1.1-ultra` (stills), `fal-ai/birefnet/v2` (General Use (Heavy), refine foreground) for
cut-outs. Rules: no people, hands or faces; no text, numbers, labels or logos; blank devices and jars; colours named
in words; dark scenes leave named negative space for type. Reviewed at full size before use.

| file | request id | use |
|---|---|---|
| cut-leaf | 01a1a93d-8f9b-7b31-ab1f-a2cc64fb1bce → 01a1a940-28e3-7453-b31f-ca048ffbd3be | retired 2026-11-05 by the owner; not used |
| cut-stones | 01a1a93d-90cf-7603-ab9d-572795e45683 → 01a1a940-2a1b-7ce0-8a1a-e39806bb8b5d | retired 2026-11-05 by the owner; not used |
| cut-orb | 01a1a93d-9228-7bd2-b3f3-6012796f347f → 01a1a940-2b49-76d1-b50f-f914c275adb1 | retired 2026-11-05 by the owner; not used |
| cut-bud | 01a1a93d-9364-7a61-a2a6-6f355393f12d → 01a1a940-2c6b-7e52-9e64-538120b52921 | flower |
| cut-vape | 01a1a93d-95c8-7ee3-a714-538f19521dfd → 01a1a940-2f15-7593-9c13-21db4d1dc45f | vapes |
| cut-grinder | 01a1a93d-970a-7bf3-9e50-3881aaf402c5 → 01a1a940-306c-7bb0-9817-0b077fde83c1 | accessories |
| cut-jar | 01a1a93d-9892-79a3-b2fa-54984dfbe22b → 01a1a940-31d5-70f0-81a4-33ba1bcca609 | offers, brands |
| scene-still | 01a1a93d-99d4-7671-b5b7-46e559935d1e | candlelit still life |
| scene-window | 01a1a93d-9b01-7bf3-88ef-1dabdadfe454 | the re·treat definition |
| scene-botanical | 01a1a93d-9c4d-7b42-ba77-f5213580ff62 | learn / terpenes |
| scene-sand | 01a1a93d-9d82-74d1-90c4-cef29400b88c | order-ahead band backdrop |
| scene-ritual | 01a1a93d-9ec7-7d60-a73f-d6572ab12226 | area page; its sand-ripple sibling also backs the marquee |
| prod-flower | 01a1a9e1-d856-7003-8e81-a2d4894ee627 | Shop by category bento (home, menu, location) |
| prod-edibles | 01a1a9e1-d9ea-7a82-b1d5-b93e4cec636e | Shop by category bento |
| prod-pre-rolls | 01a1a9e7-be40-7071-ada8-f44cb9fa4e3b (third take) | Shop by category bento |
| prod-vapes | 01a1a9e5-f714-7fb0-9480-beb640de506a (second take) | Shop by category bento |
| prod-accessories | 01a1a9e1-de1f-78c3-a758-921acc12cd54 | Shop by category bento |
| prod-bag | 01a1a9f7-97fc-7e62-9d00-c6d0a8e5e4f6 | Order ahead band on the home page (owner pick: option B) |

The prod-* set (2026-11-05) is one studio series: unbranded products on travertine plinths, a pale warm-stone backdrop
and window light. They show product types, not The Retreat's own stock, so they carry no product or brand claims.

Rejected: a pre-roll render (read as a cigarette); for the bento, two more pre-roll takes (white tubes; hollow paper)
and one vape take (a dropper bottle). Spend: 22 stills + 8 cut-outs at fal list price (about $0.06 per Ultra still);
not reconciled against an invoice.

## Home hero (owner pick: option I, 2026-11-05)

`hero-home.webp` (3840x2136), `hero-home-portrait.webp` (1100x1894) and their cut-outs `hero-home-fg.webp` /
`hero-home-portrait-fg.webp` are The Retreat's own golden-hour photo (`7ad8d765-homepage-hero.jpg`), upscaled 2x with
fal SeedVR2 (request 01a1a9af-c677-7dd3-85cf-4e0eb5f72e5e), colour-graded (`tools/grade-hero.py`), cut out with
BiRefNet (requests `hero-fg-2400` / `hero-fg-portrait` in jobs.json), then given extra sky above her head
(`tools/extend-hero.py`: the photo's own top-row colours and grain, no generated content) so her head clears the
floating nav. The person and the landscape are unchanged.

## What's New feature photo (owner pick: option B, 2026-11-05)

`feature-vaping-2400.webp` / `-1200.webp` are the blog's own photo for "Vaping vs. Smoking Cannabis" (1920x1080 on the
live site), upscaled 2x with fal SeedVR2 (request 01a1aa58-3ad6-7e61-85f1-f81d13ca87d1) and graded like the hero
(`tools/grade-feature.py`: colour and light only; nothing in the picture is added or removed).
