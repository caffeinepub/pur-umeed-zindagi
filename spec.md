# Pur Umeed Zindagi - Complete Website Redesign

## Current State
The website currently uses a dark forest green theme (dark backgrounds, oklch dark values). The user wants a complete visual overhaul to match indushospital.org.pk which uses: clean white/light backgrounds, professional blue-teal accents, modern corporate hospital aesthetic, clean typography, light cards with subtle shadows, white header with logo, and a professional top utility bar.

## Requested Changes (Diff)

### Add
- Light/white background theme throughout (like indushospital.org.pk)
- Top utility bar above header (with social links / contact info styled like IHHN)
- Clean white header with logo, horizontal nav links in dark text
- Professional hero section with large image slider / banner area
- Clean stat counter section (patients served, sites, etc.) with dark green accent
- Cards with white backgrounds, subtle box-shadows, dark green accent borders on hover
- Footer matching IHHN style: dark footer with logo, quick links columns, contact info
- Mobile-responsive hamburger menu
- Smooth scroll and subtle fade-in animations

### Modify
- index.css: Switch from dark OKLCH theme to light theme. White backgrounds (#fff / oklch 98%), dark green text accents (oklch 35% 0.2 145), blue-teal secondary (oklch 50% 0.15 200)
- All pages: Remove dark backgrounds, apply light card styles
- Header/Layout: Change from dark sticky header to white sticky header with colored accent line at top
- Hero section on Home: Use new hospital hero image with light overlay, white text headline
- All page section headers (GreenHeader): Change to white section with dark green text or a clean teal gradient
- Navigation: Horizontal desktop nav with dropdowns, clean white bg

### Remove
- Dark `.header-bg` dark glass effect
- `section-alt` dark section pattern
- Dark card backgrounds throughout
- `.green-gradient` dark gradient header sections
- `hero-bg` dark overlay

## Implementation Plan
1. Update `index.css` -- light color tokens, white bg, dark green primary, clean typography
2. Update `Layout.tsx` -- white header, utility top bar, IHHN-style footer with columns
3. Update `Home.tsx` -- light hero with new image, white stat cards, clean sections
4. Update all page files -- replace dark backgrounds/cards with light equivalents
5. Ensure all existing content (MHOs, Patient Data, Psychologists, Leadership, Regions, Workshops, Awareness, Gallery, Feedback, Contact) is preserved, just restyled
