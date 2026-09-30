---
name: Crousty Chicken
description: A casual, local restaurant site for big-flavour chicken trays in La Louvière.
colors:
  cobalt: "#0757d5"
  cobalt-deep: "#0642ac"
  chicken-red: "#c91d17"
  counter-yellow: "#f1d252"
  cream: "#faf5e1"
  paper: "#fffdf5"
  ink: "#141512"
  line: "#d9d2bd"
typography:
  display:
    fontFamily: "Barlow Condensed, Impact, Arial Narrow, sans-serif"
    fontSize: "clamp(61px, 7.6vw, 100px)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    letterSpacing: "0.095em"
rounded:
  button: "2px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    height: "58px"
    padding: "0 22px"
  button-order:
    backgroundColor: "{colors.chicken-red}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    height: "51px"
    padding: "0 22px"
  menu-tray-feature:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    padding: "24px 30px 30px"
---

# Design System: Crousty Chicken

## 1. Overview

**Creative North Star: “The La Louvière counter”**

The site should feel like a lively local takeaway: direct, friendly, and easy to use while someone is choosing lunch on a phone. The restaurant's own rooster logo, rectangular tray photography, and short French copy carry the identity. Cream and cobalt establish the page; red and yellow make the food and calls to action feel energetic.

Avoid a generic fast-food template. Use actual Crousty Chicken details and keep menu, directions, and ordering close at hand. On mobile, the hero copy stays on its clean cream field and the food image follows it in the page flow so neither obscures the other.

**Key Characteristics:**
- Casual, local, affordable voice.
- Cobalt and cream with red and yellow accents.
- Condensed, bold display headlines with readable sans-serif body copy.
- Image-led menu trays and clear next steps.

## 2. Colors

The palette pairs the restaurant's cobalt and red identity with a quiet cream canvas and a sharp yellow highlight.

### Primary
- **Cobalt** (`{colors.cobalt}`): Main action buttons, the hero field, and featured menu surfaces.
- **Deep Cobalt** (`{colors.cobalt-deep}`): Stronger blue for hover and secondary emphasis.

### Secondary
- **Chicken Red** (`{colors.chicken-red}`): Order actions and headline emphasis.
- **Counter Yellow** (`{colors.counter-yellow}`): Student offer details and high-visibility accents.

### Neutral
- **Cream** (`{colors.cream}`): Main page and hero text background.
- **Paper** (`{colors.paper}`): Menu labels, offer callouts, and light surfaces.
- **Ink** (`{colors.ink}`): Primary text.
- **Warm Line** (`{colors.line}`): Quiet separators and outlines.

**The Clear Copy Rule.** Keep body text on a solid, high-contrast surface; do not place paragraphs or actions over busy food photography.

## 3. Typography

**Display Font:** Barlow Condensed (with Impact, Arial Narrow, sans-serif fallbacks)  
**Body Font:** DM Sans (with Arial, sans-serif fallbacks)

**Character:** Barlow Condensed gives the food headlines a bold sign-painted energy. DM Sans keeps menus, details, and actions plain and legible.

### Hierarchy
- **Display** (900, fluid 61–100px, 0.84 line-height): Hero headlines and large section titles.
- **Headline** (800–900, 25–55px, tight line-height): Menu names and product callouts.
- **Title** (700–800, 14–25px, 1.2–1.4 line-height): Navigation, FAQs, and supporting labels.
- **Body** (400–600, 13–16px, 1.55–1.75 line-height): Descriptions and practical restaurant information.
- **Label** (800, 9–10px, tracked uppercase when short): Small section markers and offer labels.

**The Phone Readability Rule.** Keep paragraphs at least 14px on narrow screens and let copy wrap naturally; reserve condensed uppercase type for short headlines.

## 4. Elevation

Depth is restrained. The page mostly separates regions with bold color blocks and photography. Menu tiles and the student offer use compact shadows to distinguish them from their backgrounds; avoid large diffuse shadows.

### Shadow Vocabulary
- **Menu surface** (`0 17px 36px rgb(31 34 31 / 11%)`): Separate food tiles from the section background.
- **Offer callout** (`0 4px 15px rgb(17 25 37 / 7%)`): Lift the student teaser slightly above the hero background.

**The Small Lift Rule.** Use shadows only where a control or food panel needs separation; the page itself stays flat.

## 5. Components

### Buttons
- **Shape:** Nearly square corners (`2px`).
- **Primary:** Cobalt with white text; 58px tall in the desktop hero and 52px on mobile.
- **Order:** Chicken red with white text; use for the header and ordering actions.
- **Hover / Focus:** Darken the button on hover; preserve a visible keyboard focus indicator.
- **Secondary:** Simple underlined text link for in-page navigation.

### Cards / Containers
- **Menu trays:** Rectangular, image-led blocks with distinct cobalt, yellow, or deep navy panels; no rounded-card treatment.
- **Background:** Use cream or paper for light content, and a brand color for featured dishes.
- **Shadow Strategy:** Follow the small-lift rule; menu tile shadow is the stronger structural shadow.
- **Internal Padding:** About 20–30px for menu copy.

### Navigation
- **Desktop:** Horizontal DM Sans links on cream, with a thin red or blue underline on hover and focus.
- **Mobile:** A 42px hamburger control opens a full-width paper menu below the 74px header. Keep the tap area large and visible.

### Hero
- **Desktop:** Cream copy field beside a cobalt-framed food photograph, split by a diagonal edge.
- **Mobile:** Stack eyebrow, headline, description, actions, and student offer above the food photo. Never let the image overlap text or controls.

### Student Offer Teaser
- **Style:** Compact paper panel with a red top accent, cobalt icon, and direct link to the offer details.
- **Copy:** Say offers are available; do not invent an amount or eligibility rules.

## 6. Do's and Don'ts

### Do:
- **Do** keep menu, directions, phone, and order links easy to find on small screens.
- **Do** use the restaurant's real logo and rectangular tray imagery.
- **Do** keep text and controls on a solid surface with clear contrast.
- **Do** use exact current brand colors from the frontmatter tokens.
- **Do** preserve the friendly local tone and only publish confirmed menu and offer details.

### Don't:
- **Don't** use a generic fast-food template or copy that could describe any restaurant.
- **Don't** layer mobile hero text or buttons over busy food photography.
- **Don't** make up prices, opening hours, ingredients, allergens, or student-offer conditions.
- **Don't** turn rectangular tray imagery into generic round-bowl product art.
- **Don't** use condensed uppercase typography for long body copy.
