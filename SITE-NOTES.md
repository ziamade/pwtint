# Site Notes: Pacific Window Tint

Built: 2026-03-24
Build path: site-builder agent (expert skills)

---

## Expert Skills Applied

- **brand-architect**: Extracted fonts (Dancing Script, Montserrat, DM Sans) and colors (#00D9FF cyan, #0A1628 navy, #FF6B35 orange) from the real old site (alexota9.github.io). Dark mode default matches the existing brand identity.
- **copy-expert**: Hero tagline grounded in founding year and location. About section references Dana by name (from review data). Service descriptions rewritten to be specific and avoid AI vocabulary. FAQ grounded in review data (37-minute tint time from AnG review).
- **media-curator**: 5 before/after project pairs identified from fixture photos. Hero banner, logo, and mobile service trailer photo classified. Logo set as favicon.
- **seo-schema**: Full JSON-LD with AutoRepair @type, geo coordinates, opening hours, service catalog, aggregate rating, FAQPage schema, and speakable markup for AEO.
- **Layout**: Section order: hero, trust, services, projects, reviews, faq, hours, about, contact. Hero variant 2 (full backdrop). Dark mode default. Tint accent style.

## What Came From Real Data

All of these are sourced from the fixture (gathered.json) plus live scraping of:
- https://alexota9.github.io/alexota.github.com (old PW Tint site)
- https://pwtint.net (live Wix site, limited data due to Wix JS rendering)

| Data | Source | Notes |
|------|--------|-------|
| Business name | Fixture + old site | Pacific Window Tint |
| Phone | Fixture + old site | 209-954-9896 |
| Email | Old site schema LD+JSON | pacificwindowtint@gmail.com |
| Address | Fixture + old site | 8829 Davis Road STE 3, Stockton, CA 95209 |
| Geo coordinates | Old site meta tags | 37.9577, -121.2908 |
| Hours | Fixture | Mon-Fri 9-5, weekends closed |
| Reviews | Fixture (Google Places) | 3 reviews, all 5-star |
| Rating | Old site trust badges | 4.5+ stars, 100+ reviews (aggregateRating) |
| License | Old site trust section | #896816 |
| Services | Fixture | 6 services (auto, residential, commercial, mobile, specialty, removal) |
| Photos | Fixture photos dir | 13 images, 5 before/after pairs |
| Brand fonts | Old site Google Fonts links | Dancing Script, Montserrat, DM Sans |
| Brand colors | Old site CSS custom properties | #00D9FF, #0A1628, #1A2F4F, #FF6B35 |
| Founding year | Fixture + old site title | 2007 |
| Owner name | Review text (all 3 mention Dana) | Dana |
| Warranty | Old site FAQ + reviews | Lifetime warranty |
| Family-owned | Old site badge section | Family-owned badge |

## What Agent Generated (grounded in data)

- **Hero tagline**: "Stockton's Tint Shop Since 2007" (facts: city + founding year)
- **Hero subtitle**: References family-owned, services, lifetime warranty (all from gathered data)
- **About text**: References Dana, 2007, Davis Road, Stockton, lifetime warranty (all from gathered data)
- **Service descriptions**: Rewritten from fixture descriptions, removed AI vocabulary
- **FAQ answers**: Grounded in hours, location, services, review data (37-minute job time from AnG review)
- **SEO metadata**: Title 55 chars, meta 148 chars, includes city and phone

## Verify Before Going Live

- [ ] Phone number is current: 209-954-9896
- [ ] Email is current: pacificwindowtint@gmail.com
- [ ] Address is correct: 8829 Davis Road STE 3, Stockton, CA 95209
- [ ] Hours are accurate (Mon-Fri 9-5, closed weekends)
- [ ] License #896816 is still active
- [ ] Service list matches what they actually offer today
- [ ] Photos show the right business and are not outdated
- [ ] Domain pwtint.net is correct
- [ ] Owner approves hero tagline and about section copy

## Section Order

1. Hero (variant 2, full backdrop)
2. Trust badges (4.5+ stars, Est. 2007, License #896816, Lifetime Warranty)
3. Services (6 cards with before/after hover)
4. Projects (5 before/after pairs)
5. Reviews (3 Google reviews)
6. FAQ (5 questions)
7. Hours
8. About
9. Contact

## Image Inventory

| Image | Type | Used In |
|-------|------|---------|
| hero_banner.png | Hero backdrop | hero.json |
| pwt_logo.png | Logo + favicon | client.json, public/favicons/ |
| img_autobf.png / img_autotint.JPEG | Before/after pair | projects.json, automotive-tinting.md |
| img_housebf.JPEG / img_houseting.JPG | Before/after pair | projects.json, residential-tinting.md |
| img_commercialbf.JPEG / img_commercialtint.JPEG | Before/after pair | projects.json, commercial-tinting.md |
| img_specialtybf.JPEG / img_specialtytint.JPEG | Before/after pair | projects.json, specialty-vehicles.md |
| img_removalbf.JPEG / img_removaltint.JPEG | Before/after pair | projects.json, tint-removal.md |
| img_trailer.JPG | Gallery/service | gallery.json, mobile-service.md |
