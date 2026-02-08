# Capability: Landing Page

## ADDED Requirements

### [LP-001] Messaging Alignment

The landing page must communicate that BusinessApps builds repeatable software products for specific business types, prioritizing "Systems over Software".

- **Scenario: Hero Message**
  - GIVEN the user arrives on the landing page
  - THEN they should see "BusinessApps is built by someone who runs businesses — not just writes code" prominently.

### [LP-002] 1989 Taylor's Version Theme

The page must use the specific hex codes for Taylor Swift's 1989 (Taylor's Version) for all UI elements.

- **Scenario: Light Mode Only**
  - GIVEN the user's system preference is dark mode
  - THEN the landing page remains in light mode with the 1989 palette.

### [LP-003] Operating Principles Visibility

The page must explicitly list the internal product doctrine: Daily visibility, Minimal input, No training required, Works on cheap Android phones, Owner-first design.

- **Scenario: Mobile Accessibility**
  - GIVEN the user is on a low-end Android mobile device
  - THEN the operating principles are clearly readable and the layout is responsive.

### [LP-004] PH Internet Context

The page must mention "Built for Philippine internet realities" or "Offline-first/Low-connectivity aware".

- **Scenario: Offline Reassurance**
  - GIVEN the visitor is concerned about connectivity
  - THEN they find a section explaining how the apps work in low-signal environments.

### [LP-005] Calm Call to Action

The CTAs must avoid aggressive sales language and use calm, confident alternatives.

- **Scenario: Contact CTA**
  - GIVEN the user wants to inquire
  - THEN they see "Message us to get started" or "Turn spreadsheets into systems" colored in `#789ac0`.

### [LP-006] Visual Branding & Assets

The landing page must use the official `public/logo.jpg` for branding consistency across the site and browser metadata.

- **Scenario: Site Logo**
  - GIVEN the landing page header or hero is rendered
  - THEN the `public/logo.jpg` asset is displayed as the primary brand identifier.

- **Scenario: Metadata Assets**
  - GIVEN the site is loaded in a browser or saved to a home screen
  - THEN the favicon and app icons correctly reference the `public/logo.jpg` branding.
