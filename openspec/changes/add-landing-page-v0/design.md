# Design: BusinessApps Landing Page

## Theme Implementation: "1989 (Taylor's Version)"

### Color Palette

- **Primary/Heading Text**: `#789ac0` (120, 154, 192) - To be used for headings and primary actions. Contrast will be monitored to ensure readability on light backgrounds.
- **Secondary/Neutral**: `#b7bdc9` (183, 189, 201)
- **Accent/Base 1**: `#ead5c6` (234, 213, 198)
- **Accent/Base 2**: `#af9cb1` (175, 156, 177)
- **Accent/Base 3**: `#866475` (134, 100, 117)
- **Background**: White or very light variations of `#ead5c6`.

### Design Decisions

- **Light Theme Only**: The `next-themes` configuration will be locked to `light`. Global CSS will be updated to ensure light variables are always used.
- **Typography**: Near-black or `#866475` for body text to ensure maximum readability against the soft palette.
- **Mobile-First/PWA**: The layout will prioritize single-column viewing for mobile operators (Android phones).

## Component Architecture

- **Shadcn UI Evolution**: Standard Shadcn components will be themed via CSS variables in `globals.css` using the palette above.
- **Hero Section**: Focused on the "5-second hook" and the "Built by an operator" statement.
- **"System, not Software" Section**: A grid or list highlighting the operating principles (visibility, minimal input, offline-first).
- **CTA Strategy**: "Calm" CTAs like "Message us to get started" using `#789ac0`.

## Branding & Assets

- **Logo**: Use `public/logo.jpg` as the primary logo in the navigation/hero.
- **Favicon/Icons**: `public/logo.jpg` will be used as the source for the favicon and mobile app icons.

## PH Internet Realities

- Minimal heavy assets (JS/Images) to ensure fast loading on low-connectivity networks.
- Mention of "Offline-first" as a core feature.
