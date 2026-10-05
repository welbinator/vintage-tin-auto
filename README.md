# Vintage Tin Auto Sales

Pitch landing page for a lead: Russell Parsons, owner of Vintage Tin Auto Sales, a licensed Nebraska used/classic car dealer in Willow Island, NE.

Static Astro + a Cloudflare Worker (serves static assets and a no-DB contact form handler at `/api/contact`).

## Facts used (all verified)
- Business: Vintage Tin Auto Sales (NE dealer license DL07111)
- Owner: Russell Parsons
- Location: Willow Island, NE
- Phone: (308) 537-8713
Source: Nebraska Motor Vehicle Industry Licensing Board active dealer list.

Nothing about inventory or prices is claimed, since that was not verified.

## Design
Vintage Americana: cream paper, oxblood red, chrome/steel accents, Oswald display type. Full-bleed parallax hero (Higgsfield-generated classic muscle car), scroll reveals, reduced-motion safe.

## Develop / deploy
- `npm install`
- `npm run build`
- `npx wrangler deploy`

Live: https://vintage-tin-auto.james-welbes.workers.dev
