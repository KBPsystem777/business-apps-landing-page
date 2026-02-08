# Project Context

## Purpose

BusinessApps is a flagship product of BPxAI (https://bpxai.com), a product studio focused on building simple to full-stack, practical web applications for real-world businesses. It specifically targets food businesses, rental operations, and small-to-medium enterprises (SMEs) that currently rely on manual processes, legacy spreadsheets, and fragmented tools.

Instead of generic software, BusinessApps delivers repeatable, opinionated tools designed to improve visibility, control, and decision-making for business owners and operators.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17 (with PostCSS)
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod
- **Charts**: Recharts
- **State/Data**: Date-fns, Vaul (drawers), Embla Carousel
- **Utilities**: `clsx`, `tailwind-merge`

## Project Conventions

### Code Style

- **Kebab-case**: Use kebab-case for file names and directory names.
- **Components**: Functional components with TypeScript interfaces for props.
- **Shadcn UI**: Keep raw UI primitives in `components/ui/` and compose them into higher-level components in `components/`.
- **Imports**: Use absolute imports with `@/` alias (e.g., `@/components/...`).

### Architecture Patterns

- **App Router**: Standard Next.js App Router structure.
- **Hooks**: Extraction of reusable logic into `hooks/`.
- **Utils**: Generic helper functions reside in `lib/utils.ts`.
- **Theming**: Dark mode support using `next-themes`.

### Testing Strategy

- [TBD] (Focus is currently on rapid prototyping and practical utility).

### Git Workflow

- **OpenSpec Workflow**: Follow the Three-Stage Workflow (Proposal -> Implementation -> Archive) as defined in `openspec/AGENTS.md`.
- **Commits**: Use descriptive, verb-led commit messages.

## Domain Context

- **Business Focus**: Operations-heavy businesses (Food, Rental, SMEs).
- **Core Problems**: Fragmentation, manual data entry, lack of visibility.
- **Solutions**: Sales dashboards, operations tools, lightweight automation, and PWAs.

## Important Constraints

- **Lightweight**: Tools should be lightweight and performant, avoiding "enterprise software" complexity.
- **PWA-first**: Designed to be usable on mobile devices for personnel in the field/kitchen/warehouse.

## External Dependencies

- **BPxAI**: Integration or alignment with broader BPxAI ecosystem.
- **Vercel**: (Assumed) target platform for Next.js deployment.
