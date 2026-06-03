---
name: Tess Farms LLC
description: Indian plants and tropical fruit trees in Central Florida
colors:
  nursery-green: "#2a5c3a"
  garden-sage: "#4a8c5a"
  morning-mist: "#e5f0e5"
  warm-earth: "#f4efe6"
  rich-soil: "#3a2e1e"
  weathered-bark: "#6b5f4f"
  terracotta-clay: "#b8542e"
  terracotta-deep: "#944424"
  whatsapp-leaf: "#25d366"
  whatsapp-leaf-hover: "#1fad54"
typography:
  display:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Bitter, Georgia, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  pill: "9999px"
  surface: "16px"
  chip: "9999px"
  compact: "12px"
spacing:
  section-y: "clamp(64px, 8vw, 96px)"
  content-x: "clamp(20px, 4vw, 32px)"
  stack-sm: "4px"
  stack-md: "16px"
  stack-lg: "32px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-leaf}"
    textColor: "#fafaf8"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-leaf-hover}"
    textColor: "#fafaf8"
  button-phone:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#fafaf8"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-cta:
    backgroundColor: "{colors.terracotta-clay}"
    textColor: "#fafaf8"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-cta-hover:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "#fafaf8"
  chip-variety:
    backgroundColor: "{colors.morning-mist}"
    textColor: "{colors.nursery-green}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  header-whatsapp:
    backgroundColor: "{colors.whatsapp-leaf}"
    textColor: "#fafaf8"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  floating-whatsapp:
    backgroundColor: "{colors.whatsapp-leaf}"
    textColor: "#fafaf8"
    rounded: "{rounded.pill}"
    size: "56px"
---

# Design System: Tess Farms LLC

## 1. Overview

**Creative North Star: "The Uncle's Garden"**

A single scrolling page that feels like walking into George's nursery: warm soil underfoot, rows of labeled plants, someone who knows your name and what you're looking for. Not polished, not corporate, not trying to impress. Just abundant, real, and deeply personal. Every section exists to build trust and push toward one action: contact George.

The design is grounded in earth tones and nursery greens, with Bitter's sturdy serif giving headings the weight of hand-lettered plant stakes. Source Sans 3 keeps body text clear and unhurried. The palette stays warm (cream backgrounds, soil-toned text, sage greens) with terracotta clay as the non-contact action color and WhatsApp green reserved exclusively for conversion buttons, because that's how George's customers actually reach him.

This system explicitly rejects three failure modes: the generic garden center site (stock photos, clip art, "Shop Now" everywhere), the SaaS-cold corporate aesthetic (clean grids, faceless illustrations, startup language), and the cluttered small business site (walls of text, inconsistent styling, dated design). It also rejects the millennial plant influencer look (pink, monstera, "plant mom" vibes). The audience is first-generation Indian immigrants, not lifestyle bloggers.

**Key Characteristics:**
- Single scrolling page; no multi-page navigation
- Warm earth palette with green accents; terracotta for non-WhatsApp CTAs
- WhatsApp green as the dominant conversion color (the literal action George's customers take)
- Floating WhatsApp button visible at all times after scrolling past the hero
- Bitter serif headings: sturdy, readable, not decorative
- Large text throughout for older users on mobile (75% mobile audience)
- Soft, rounded surfaces; pill-shaped buttons; no sharp edges
- Flat elevation with tonal layering (cream, white, sage-light, forest-green sections)
- Generous section spacing; content breathes
- Minimal sticky header: wordmark + phone icon + WhatsApp pill (no nav links)

## 2. Colors

A committed earth palette. Nursery Green carries the identity across the hero and final CTA sections, bookending the page in dark green. Warm Earth cream and white alternate in mid-page sections. WhatsApp Leaf green is reserved exclusively for the primary conversion action (messaging George). Terracotta Clay serves non-messaging CTAs. The palette is warm at every level; there is no cool neutral in the system.

### Primary
- **Nursery Green** (oklch(0.30 0.10 155)): Hero background, final CTA section, footer. The dominant identity color that bookends the page. Carries 30-40% of the visible surface.
- **Garden Sage** (oklch(0.44 0.13 155)): Section kicker text ("Meet George"), step labels, icon containers. The lighter read of the green family.
- **Morning Mist** (oklch(0.94 0.04 155)): About George section background, variety chip backgrounds, step card backgrounds. The lightest green tint.

### Secondary
- **Terracotta Clay** (oklch(0.55 0.14 35)): Non-messaging CTAs if needed. Warm, earthy, approachable. Currently minimal on the single page.
- **Terracotta Deep** (oklch(0.48 0.14 35)): Hover state for Terracotta Clay. Darkens without shifting hue.

### Tertiary
- **WhatsApp Leaf** (#25d366): Reserved exclusively for WhatsApp CTA buttons and the floating WhatsApp button. Never used decoratively. Its presence means "tap here to message George."
- **WhatsApp Leaf Hover** (#1fad54): Hover/active state for WhatsApp buttons.

### Neutral
- **Warm Earth** (oklch(0.96 0.012 75)): Default page background for the "What We Grow" section. A warm cream that reads as natural paper.
- **Rich Soil** (oklch(0.25 0.03 60)): Primary text color. Dark, warm, high contrast against cream.
- **Weathered Bark** (oklch(0.45 0.02 60)): Secondary text, descriptions, taglines, metadata. Softer than Rich Soil but still readable.

### Named Rules
**The WhatsApp Rule.** WhatsApp green (#25d366) appears only on elements that open a WhatsApp conversation. It is never used as a decorative color, section background, or accent. Its scarcity is what makes it unmissable. On this page it appears in exactly three places: hero CTA, final CTA, and the floating button.

**The No-Cool Rule.** Every neutral in the system is warm-tinted (hue 60-80 in OKLCH). There is no blue-gray, no slate, no cool undertone anywhere. The warmth is the brand.

**The Bookend Rule.** The page opens and closes with Nursery Green sections (hero + final CTA), creating a visual frame. Mid-page sections alternate between white, cream, and sage-light. This rhythm is fixed.

## 3. Typography

**Display Font:** Bitter (with Georgia, "Times New Roman", serif fallback)
**Body Font:** Source Sans 3 (with "Segoe UI", system-ui, sans-serif fallback)

**Character:** Bitter's slab-serif presence gives headings the feeling of hand-lettered plant labels: sturdy, readable, honest. Source Sans 3 is warm and open for body text, easy to read at larger sizes on mobile, without the clinical edge of a geometric sans. The pairing is workhorse, not decorative. It doesn't draw attention to itself; it lets the plants and George's story be the focus.

### Hierarchy
- **Display** (700, clamp(1.875rem, 4vw, 3rem), 1.15): The hero headline. One instance on the page: "The plants you grew up with, growing right here in Florida."
- **Headline** (700, clamp(1.5rem, 3vw, 2.25rem), 1.25): Section headings within the page: "A nursery born from homesickness", "Plants from back home", "How to visit", "Ready to grow something from home?"
- **Title** (700, 1.25rem, 1.3): Plant names, card headings, step titles. The third level.
- **Body** (400, 1.125rem, 1.65): All running text. 18px base, generous line height for older readers. Max width capped at 65ch where applicable.
- **Label** (600, 0.875rem, 1.4, tracking +0.02em): Section kickers ("Meet George"), step numbers ("Step 1"), variety chip text. Semibold and uppercase to compensate for small size.

### Named Rules
**The 18px Floor Rule.** Body text never drops below 18px (1.125rem). Many visitors are older, browsing on phones. Readability is non-negotiable.

## 4. Elevation

Flat by design. No box-shadows in the resting state. Depth is communicated through tonal layering: the page flows through Nursery Green (hero) to white (stats) to sage-light (about) to white (quote) to cream (plants) to white (how it works) to Nursery Green (final CTA). This rhythm creates visual separation without simulated physicality.

The only hover elevation effect is a soft `shadow-lg` that appears on featured plant cards on desktop, signaling interactivity. The floating WhatsApp button uses `shadow-lg` permanently since it floats above content. Mobile has no hover; touch targets are large and tappable by default.

### Named Rules
**The Flat Earth Rule.** Surfaces are flat. Depth comes from color shifts between sections, not from shadows or borders. If you're reaching for `box-shadow`, use a background tint instead. Exception: the floating WhatsApp button, which needs shadow to read as floating.

## 5. Components

### Buttons
Soft, rounded, confident. Like ripe fruit: inviting to touch, clear about what they are.

- **Shape:** Pill (border-radius: 9999px)
- **WhatsApp (Primary):** WhatsApp green (#25d366) background, near-white text, 14px 28px padding. MessageCircle icon always present. Hover darkens to #1fad54. Appears in hero, final CTA, and floating button.
- **Phone (Secondary):** Transparent with white/10 background and white/20 border on dark sections. Phone icon + number visible. Tappable `tel:` link on mobile.
- **CTA (Terracotta):** Terracotta Clay background for non-contact actions. Hover shifts to Terracotta Deep. Currently minimal usage on single page.
- **Focus:** 2px ring in Garden Sage, 2px offset. Visible on all backgrounds.

### Chips
- **Style:** Morning Mist background, Nursery Green text, pill shape, 4px 10px padding. Used for plant variety names.
- **State:** Static; no selected/unselected distinction. Informational only.
- **Overflow:** When varieties exceed 4, show first 4 chips plus a "+N more" text label in Weathered Bark.

### Cards / Containers
Two tiers of plant display on the single page.

- **Featured Plant Cards:** White background on cream section, generously rounded (16px), border 1px Morning Mist. Internal padding 24px mobile, 32px desktop. Hover: soft shadow-lg on desktop only. Contains emoji icon, name, tagline, description, and variety chips.
- **Compact Plant Items:** White background, rounded (12px), border 1px sage-light/30. Internal padding 16px. Emoji + name + tagline + chips in a tight layout. No hover effect.
- **Step Cards:** Cream background on white section, rounded (16px). Centered content: icon circle, step label, title, description.

### Sticky Header
- **Height:** 56px mobile, 64px desktop.
- **Background:** White/90 with backdrop-blur-sm, 1px Morning Mist border bottom.
- **Left:** "Tess Farms" wordmark in Bitter bold, links to top of page.
- **Right:** Phone icon button (40px touch target) + WhatsApp pill button (green, smaller than hero CTAs).
- **No navigation links.** Single page needs no nav. The header exists for brand presence and persistent contact access.

### Floating WhatsApp Button
- **Position:** Fixed, bottom-right (24px inset), z-50.
- **Size:** 56px circle, WhatsApp green background, white MessageCircle icon.
- **Visibility:** Hidden while the hero is in viewport; appears once the user scrolls past. This prevents doubling with the hero's WhatsApp CTA.
- **Shadow:** shadow-lg always (needs to read as floating above content).
- **Interaction:** Scale 110% on hover, 95% on active. Transition 200ms.

## 6. Do's and Don'ts

### Do:
- **Do** use WhatsApp green exclusively on buttons that initiate a WhatsApp conversation with George. Its scarcity is its power.
- **Do** keep body text at 18px (1.125rem) minimum. Many visitors are older and on mobile.
- **Do** alternate section backgrounds (Nursery Green, white, cream, Morning Mist) to create visual rhythm without borders or shadows.
- **Do** show George's real name, real phone number, and real social links. Specificity builds trust. From PRODUCT.md: "Trust through specificity."
- **Do** use Bitter serif only for headings. Body text is always Source Sans 3.
- **Do** ensure the WhatsApp + Phone CTA pair appears in both the hero and the final section. From PRODUCT.md: "One action, everywhere."
- **Do** use plant variety names as chips; the specificity ("Alphonso", "Kesar", "Neelum") is more persuasive than any paragraph of description.
- **Do** keep touch targets at 48px+ minimum for all interactive elements. 75% of visitors are on mobile.
- **Do** make the phone number a tappable `tel:` link everywhere it appears.

### Don't:
- **Don't** use stock photography of generic gardens, white suburban families, or tropical resorts. This is an Indian nursery in Florida; the imagery should reflect that or be absent. From PRODUCT.md: "Generic garden center sites: stock photography of white suburban families in gardens, clip art icons."
- **Don't** add shadows to cards or sections. The system is flat; depth comes from background tint shifts. See: The Flat Earth Rule.
- **Don't** use cool-toned neutrals (slate, gray-blue, zinc). Every neutral is warm. See: The No-Cool Rule.
- **Don't** use glassmorphism, gradient text, or side-stripe borders. These are absolute bans.
- **Don't** make the site feel "SaaS." No hero-metric templates, no identical card grids with icon + heading + text, no startup language. From PRODUCT.md: "Overly corporate/SaaS aesthetic: minimal to the point of cold."
- **Don't** clutter sections with walls of text or inconsistent styling. From PRODUCT.md: "Cluttered small business sites: walls of text, busy layouts, inconsistent styling."
- **Don't** use "plant mom" aesthetics: millennial pink, monstera illustrations, lifestyle-blogger typography. From PRODUCT.md: "Instagram plant influencer aesthetic: millennial pink, monstera everything."
- **Don't** hide the phone number or WhatsApp link. Both must be visible in the sticky header without scrolling on mobile.
- **Don't** add multi-page navigation. The site is a single scrolling page. A hamburger menu with no destinations is worse than no menu.
- **Don't** add a traditional nav bar with page links. If the page grows, anchor links within the sticky header are acceptable, but only if they serve real user needs (not decoration).
