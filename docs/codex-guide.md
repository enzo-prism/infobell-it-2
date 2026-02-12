# Codex Implementation Guide

This guide captures the decisions and conventions that now drive the Infobell IT marketing site. Use it as the first stop before editing files so additions stay consistent.

## Architecture Overview

- Next.js App Router with TypeScript. Pages live under `app/(site)/**/page.tsx`; shared layout/wrappers are in `app/(site)/layout.tsx`.
- Content is centralized inside `lib/content`. Update these modules (e.g., `lib/content/company.ts`, `lib/content/home.ts`, `lib/content/site.ts`) instead of hard-coding copy or navigation in components.
- Navigation (`NAV_PRIMARY`), footer links, and corporate details (`CORPORATE_OFFICE`) power the header/footer and should be edited via `lib/content/site.ts`.

## Brand Consistency Rules

- Use `Infobell IT` for all user-visible mentions across page copy, metadata, and UI labels.
- Treat standalone `Infobell` in active website code as a regression unless it is part of a fixed external filename/URL.
- When performing bulk copy updates, re-run a repo search for `Infobell` to verify no unintended brand drift remains.

## Homepage Content Map

- `lib/content/home.ts` is the source of truth for:
  - `HERO_CONTENT.heading` and `HERO_CONTENT.description`
  - `HERO_CENTER_TITLE_OVERRIDES`, `HERO_CENTER_TAGLINES`, and `HERO_CENTER_SUMMARY_OVERRIDES` (Centers of Excellence card copy)
  - `TECH_STACK` entries (labels, logos, and destination links)
- Keep slider-specific copy overrides in those dedicated override maps rather than adding inline conditionals in components.

## Metadata Requirements

- Every page must export `metadata` with a short `title` + `description`.
- Dynamic routes (`/bluebook/[slug]`, `/careers/[slug]`) already implement `generateMetadata`; follow those patterns when adding new dynamic pages.
- If you introduce a new page under `app/(site)`, add a concise `metadata` export immediately to keep SEO consistent.

## Shared Components & Usage

- **HeroVideoFrame** (`components/hero-video-frame.tsx`): looping Infobell logo reel. Use in hero or CTA sections by passing optional `className`/`title`.
- **LeadershipCard** (`components/leadership-card.tsx`): wraps a leader profile card. Clicking the card opens the member’s LinkedIn profile in a new tab; use this component whenever rendering leadership tiles (see `/team`).
- **AutoHighlightLogoGrid** for animated logo lists and **CoreExpertiseCarousel** for the home expertise slider.
- **SiteFooter** is data-driven: Solutions/Product columns come from `NAV_PRIMARY`, HQ block from `CORPORATE_OFFICE`, and CTAs are embedded in the footer component. When editing navigation, the footer updates automatically.

## Styling & Animation Notes

- Global theme tokens and utility animations live in `app/globals.css`. Recently added: `gradient-flow` / `animate-gradient` for moving backgrounds.
- Reuse existing utility classes (`card-glow`, `motion-safe:animate-…`) whenever possible instead of creating bespoke keyframes.
- CTA buttons commonly use gradient borders + hover translations; reference the homepage hero buttons when designing new interactions.

## Assets & External Logos

- Store partner/client logos under `public/images/partners` or `public/images/clients` as appropriate.
- When adding a logo, reference it in `lib/content/...` (e.g., `AI_PARTNERS`) so both home cards and detail pages use the same data.
- Remote media (e.g., Cloudinary videos) should be whitelisted in `next.config.mjs` before using in `<Image>`/`<video>`.

## Client Link Maintenance

- Client cards on `/` and `/clients` are driven by `CLIENT_LOGOS` in `lib/content/company.ts`.
- Use `href` on each client entry to control click-through behavior; missing `href` means the card is non-clickable.
- When updating a client domain, search the repository for the old domain to eliminate stale references.

## Contact & Location Blocks

- The contact sidebar (`/contact`) and locations page share the same HQ data from `CORPORATE_OFFICE`. Update address/email once in `lib/content/site.ts`.
- The contact page now embeds the headquarters image; keep imagery consistent with `/locations` unless explicitly changed.

## Footer & Navigation Guidance

- `components/site-footer.tsx` expects `NAV_PRIMARY` to contain both `Solutions` and `Products` groups. When renaming or reordering nav entries, ensure those groups remain available; otherwise update the footer component.
- Social links currently only include LinkedIn. If additional networks are added to `SOCIAL_LINKS`, update the icon rendering in `SiteFooter` to match.

## Workflow Tips

- Before editing, run `git status -sb` to understand divergence from `origin/main`.
- Keep copy in `lib/content` so bluebook data, hero strings, etc. stay reusable.
- When touching hero sections, remember to maintain `HeroVideoFrame` placement (hero vs CTA) per current design choices.
- After UI-impacting changes, smoke-test `pnpm dev` and consider capturing notes/screenshots for future contributors.

This doc should evolve with the project—add new sections whenever you introduce patterns another agent should know about.
