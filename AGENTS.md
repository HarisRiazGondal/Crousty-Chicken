# Agent guide

## Project

- This is the static French-language website for Crousty Chicken in La Louvière, Belgium.
- The deployable site root is this directory. It uses plain HTML, CSS, and JavaScript; there is no package manager, build step, server, or database.
- Vercel should serve `index.html` directly with the **Other** framework preset and no build command.

## Working rules

- Keep the site static and dependency-free unless the owner asks for a different setup.
- Preserve the French-Belgian language (`fr-BE`), mobile layout, menu anchors, contact links, address, and phone number.
- Treat the menu photos as illustrative generated artwork, not proof of exact plating or packaging.
- Prices and opening hours can change. The shake-price references conflict; do not invent a current price. Direct visitors to the live menu or Maps for changing details.
- Do not add factual claims about allergens, ingredients, sourcing, dietary suitability, delivery coverage, or offers unless the owner confirms them.
- Keep local SEO information consistent across the page, structured data, `llm.md`, `llms.txt`, and `sitemap.xml`.
- Before adding canonical or sitemap URLs, use the owner's confirmed public HTTPS domain. Never guess a Vercel hostname.
- `robots.txt` controls crawler access preferences. `AGENTS.md` is project guidance for coding agents; it is not a web-crawler or SEO directive.
- Do not claim indexing, rankings, or AI-answer visibility are guaranteed.
