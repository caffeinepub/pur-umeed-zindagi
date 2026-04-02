# Pur Umeed Zindagi

## Current State
The website has a sticky header (Layout.tsx) with logo, navigation links, and mobile menu. The header does NOT display the current date. There is no Appointment booking form anywhere on the site. The App.tsx has routes for 12 pages.

## Requested Changes (Diff)

### Add
- **Live Date Display in Header**: Show today's date (auto-updating daily) in the header bar -- visible on desktop. Format: e.g. "Thursday, 02 April 2026" in Urdu or English. Updates automatically every day without manual changes.
- **Appointment Form Page** (`/appointment`): A dedicated appointment booking form page with fields:
  - Patient Name (full name)
  - Phone Number
  - Age
  - Gender (Male/Female/Other)
  - Region/City
  - Preferred Date
  - Preferred Time
  - Reason / Chief Complaint (textarea)
  - Submit button
  - Success confirmation message on submit
- **Navigation Link**: Add "Appointment" link to the header navigation and mobile menu.
- **Route**: Add `/appointment` route in App.tsx.

### Modify
- Layout.tsx: Add live date display in the header (top right area near nav, or in a thin top bar above header). Import `useState` and `useEffect` for live date.
- App.tsx: Import and register the new Appointment page route.

### Remove
- Nothing removed.

## Implementation Plan
1. Add `LiveDate` component inside Layout.tsx that uses `useEffect` to update once per minute (or on mount) and formats today's date fully (e.g. "Thursday, 2 April 2026").
2. Place the live date display in the header, right side or in a thin announcement bar above the main nav.
3. Create `/src/frontend/src/pages/Appointment.tsx` with the appointment booking form. On submit, show a success message (no backend required -- local state only).
4. Add `/appointment` route to App.tsx.
5. Add "Appointment" nav link to Layout.tsx desktop nav and mobile menu.
