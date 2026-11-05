# The Retreat — redesign preview: pitch notes

Preview of a total redesign of www.retreatnj.com for The Retreat (woman-owned adult-use dispensary, 656 Grand St,
Jersey City, NJ). Built 2026-11-05. Noindex on every page; robots.txt disallows all crawling.

## Kept exactly

- **Every live page, on its live URL**: `/`, `/about/`, `/natalie/`, `/community/`, `/careers/`, `/contact/`,
  `/faqs/`, `/location/`, `/menu/`, `/brands/`, `/blog/` (with `?category=` filters and `/blog/page/2/`, `/blog/page/3/`),
  all 20 blog posts, `/privacy-policy/`, `/terms-conditions/`, `/accessibility/`.
- **The client's words**: headings, paragraphs, FAQ answers, brand notes, the founders' letter, team bios, Natalie's
  story, community programs, blog articles and legal text are rendered as captured on 2026-11-05.
- **Home section order** as live: hero → products → who we are → what's new → re·treat definition → visit → newsletter.
- **The 21+ age gate**, the email sign-up ("Meditate on this."), the contact form fields, the Google Maps embed.
- **Their photography and marks**: logo, store photos, category photos, team and founder photos, blog images.
- **Their three Google reviews**, quoted exactly as published on the live brands page.
- **The live menu**: every Shop, Order and category link opens The Retreat's existing online menu (order ahead for
  pickup). The preview does not rebuild the menu or checkout. A production build embeds the menu on `/menu/`.

## New (page types the live site does not have)

Shop: `/flower/`, `/pre-rolls/`, `/edibles/`, `/vapes/`, `/accessories/`, `/shop/` (how to shop), `/terpenes/`
(shop by aroma), `/deals/` (offers & new arrivals). Learn: `/learn/`, `/cannabis-101/`, `/first-visit/`,
`/new-jersey-cannabis-laws/`. Visit: `/areas-we-serve/` + Hoboken, Bayonne, Downtown Jersey City. About:
`/the-space/`. Utility: `/site-map/`, `404`.

These pages are written in The Retreat's voice from facts on the live site only (address, hours, directions and
drive times from the location page, payment and ID rules from the FAQ, brand notes from the brands page, tax and
gifting facts from their own blog). General cannabis education is phrased carefully, with no medical claims.
**They are drafts for the client's approval**, like every new page in a pitch.

New on existing pages: a sticky "Order ahead for pickup" bar (desktop) and a bottom quick-nav dock (phones), live
open/closed status on Jersey City time, mega menus, breadcrumbs, structured data (Store, FAQPage, BreadcrumbList,
BlogPosting).

## Not built (would need the client's facts)

- **Rewards / loyalty program** — the live site shows none. Ask: is there a program (points, birthday, referral)?
- **Specific deals** (daily specials, first-time discounts, veteran or senior discounts) — none are published. Ask
  which standing offers exist; the `/deals/` page is ready to list them.
- **Delivery** — not offered on the live site.
- **Medical patients page** — The Retreat is adult-use; the FAQ notes no medical card is needed.

## Questions for the client (found while capturing the live site)

1. **Sunday hours disagree.** `/location/` says Sunday 11 AM – 6 PM; the home page, footer, contact page and the
   age gate say 11 AM – 8 PM. The preview uses 11 AM – 8 PM everywhere. Which is right?
2. **Careers email domain.** `/careers/` asks for resumes at `info@theretreat.com`; every other page uses
   `info@retreatnj.com`. The preview keeps the careers address as published. Is it a typo?
3. **Missing meta descriptions** on `/natalie/`, `/location/` and `/brands/` (the preview adds them), and a typo in
   the careers description ("cannavis", corrected in the preview).
4. A duplicated phrase on `/natalie/` ("any other any other way") is kept as published; fix on approval.
5. Two older posts still read as pre-opening ("Ahead of our grand opening", "Opening Soon!"). Update?
6. **Rewards?** A small "REWARDS" card is visible on the display-wall photo. If The Retreat runs a loyalty
   program, we will add a Rewards page and put it in the Deals menu.
7. **Public consumption, contradicted on the blog.** The parks post says public consumption is not legal in Jersey
   City; three other posts say smoking is allowed "where cigarette smoking is permitted". The new pages follow the
   stricter reading (private spaces only). The posts are kept as published; worth correcting.
8. **Light Rail walk:** the contact page says a 5-minute walk from the Liberty State Park station; the getting-here
   post says 10. The preview uses 5.
9. **Possession limit:** the parks post mentions possessing up to 6 ounces; the laws page sticks to the purchase limits
   stated in the "everything you need to know" post. Confirm before we add possession limits.
10. The blog image named "jersey-city-the-retreat" shows the Newark skyline; the preview does not use it as a Jersey
    City photo.

## Imagery

Real client media is used as captured and never altered by AI. Generated images (fal FLUX1.1 [pro] Ultra; cut-outs
with fal BiRefNet v2) are mood and illustration only: glass leaf, river stones, glowing orb, bud, blank vape
cartridge, bronze grinder, frosted jar, and five dark still-life scenes. No people, no text, no logos, no product
packaging. Every generated `<img>` carries `data-ai="generated"`; prompts and request ids are in
`docs/MEDIA.md`.
