# Crousty Chicken

Responsive French-language restaurant website for Crousty Chicken in La Louvière. It includes the crousty menu, three milkshake flavours, Kreamy's canned desserts, student offers, an about section, FAQs, and contact links.

## Deploy on Vercel

This is a static HTML, CSS, and JavaScript site. Import this folder as the Vercel project root, choose **Other** as the framework preset, and leave the build command blank. The site is served directly from `index.html`; it has no server, database, package installation, or build step.

## Design context

- `PRODUCT.md` records the audience, purpose, and brand direction.
- `DESIGN.md` documents the visual system and responsive patterns.
- `.impeccable/design.json` contains the machine-readable design-system extensions.

## Before launch

- The menu names and descriptions follow the current Uber Eats listing. Check the listing for current prices and availability.
- Food, milkshake, and Kreamy's dessert photographs are generated illustrations based on the supplied product references. The restaurant story shows the Blanche, Curry, and Mixte trays together. Replace generated photos with current restaurant photos if exact product appearance matters.
- The supplied menu shows Kreamy's canned desserts at €4.00 each. Confirm current prices and availability before launch.
- The restaurant owner confirmed all three Crousty trays cost €8.00 in store. Uber Eats currently lists each tray at €11.70; check the live menu because online prices can change. Online extra sauce is €1.00 and extra chicken is €1.50.
- The supplied shake artwork shows both €4.00 and €4.50; shake prices are omitted until the restaurant confirms the current price. The page directs visitors to Uber Eats for current prices and availability.
- Set the site's canonical URL and add `sitemap.xml` plus the sitemap URL in `robots.txt` after the Vercel deployment hostname is known. Search engines expect absolute sitemap URLs; do not use a placeholder hostname.
- Verify the business information in Google Business Profile and connect the deployed domain to Google Search Console to request indexing and monitor search performance. Structured data and FAQs help explain the site; they do not guarantee rankings or rich results.

## Search and AI discovery files

- `robots.txt` currently allows compliant crawlers to access the public site. Add its absolute sitemap URL after deployment.
- `llm.md` is the full factual site and menu reference; `llms.txt` is a short index that points to it. These are supplementary files and do not guarantee crawling, indexing, or AI visibility.
- `AGENTS.md` contains repository guidance for coding agents; it is not a crawler policy file.

## Push to GitHub or GitLab

This folder is the repository root. After creating an empty repository on GitHub or GitLab, connect and push it with:

```sh
git remote add origin <repository-url>
git push -u origin main
```

Deploy this same repository root in Vercel with the **Other** framework preset and no build command.

## Confirm before launch

- Confirm the Uber Eats listing opens the right restaurant.
- Confirm the phone number and address.
- Add the current student offer and eligibility details if you want them shown publicly.
