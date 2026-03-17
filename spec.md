# Pur Umeed Zindagi

## Current State
Website has 9 pages including Psychologists. No workshops/events page exists.

## Requested Changes (Diff)

### Add
- New `Workshops` page (`/workshops`) featuring:
  - Featured highlight: 8th Biennial ICON Conference 2026 – "Resilient Care, Sustainable Future" (organized by IHHN)
    - Workshop: "Psychological First Aid in Crises" – December 9, 2025, IHHN Badin Campus
    - Moderator: Danish Khan (Certificate of Appreciation)
    - Facilitator: Ms. Ayesha Kasiri (Certificate of Appreciation)
  - Full events list:
    1. World Mental Health Day Celebration – October 2025, Badin
    2. Stress Management Seminar – November 20, 2025, Badin
    3. Psychological First Aid in Crises – December 9, 2025, Badin Campus
    4. Psychological First Aid in Crises – January 16, 2026, Karachi (9AM–1PM, Transfusion Hall Blood Centre; Facilitator: Ms. Mishal Ashraf; Moderator: Ms. Ayesha Kasiri; Learning objectives listed)
    5. Community Awareness Sessions (Ongoing) – Shahdi Large, Sehwan, and rural areas
  - Also include: Stress Management workshop content (practical strategies, deep breathing, mindfulness, journaling – from LinkedIn post by Danish Niaz Babbar)
- Route `/workshops` in App.tsx
- "Workshops" nav link in Layout.tsx (desktop + mobile)

### Modify
- App.tsx: add workshopsRoute
- Layout.tsx: add Workshops nav link after Psychologists

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/Workshops.tsx`
2. Register route in App.tsx
3. Add nav link in Layout.tsx
