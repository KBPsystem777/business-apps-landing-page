# Tasks: BusinessApps Landing Page

## Infrastructure & Theme

- [x] Configure Tailwind theme in `tailwind.config.ts` with the 1989 Taylor's Version color palette.
- [x] Update `app/globals.css` with the palette CSS variables and force `:root` (light mode) styles.
- [x] Disable dark mode detection in `components/theme-provider.tsx` or `app/layout.tsx`.

## Core Landing Page Implementation

- [x] Create `components/hero-section.tsx` with the "Operator-built" core messaging.
- [x] Create `components/principles-section.tsx` highlighting the 5 core operating principles.
- [x] Create `components/differentiation-section.tsx` covering "Systems over Software" and PH internet realities.
- [x] Create `components/cta-section.tsx` with calm, operator-led actions.

## Content & Branding

- [x] Integrate "If we build it once, we build it for many" phrasing to emphasize product over custom studio.
- [x] Add the invisible AI section: automation that reduces manual work without complication.
- [x] Implement "Owner exits the store" promise as a major emotional hook.
- [x] Set up `public/logo.jpg` as the official logo in the header/hero components.
- [x] Configure `app/favicon.ico` and metadata icons (e.g., `apple-icon.png`) using `public/logo.jpg`.

## Final Polish & Validation

- [x] Verify accessibility and contrast for `#789ac0` on light backgrounds.
- [x] Run `openspec validate add-landing-page-v0 --strict`.
- [x] Deploy v0 for review.
