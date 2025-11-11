# Infobell IT Website

Next.js implementation of the Infobell IT marketing site. The codebase mirrors the content, structure, and assets of the legacy site (archived outside the repository for size) while modernising the implementation with typed content sources and reusable components. A curated export of the Blue Book section lives in `legacy-bluebook/` so report data can be regenerated locally.

## At a Glance

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript  
- **Styling:** Tailwind CSS (via `app/globals.css`)  
- **Package manager:** pnpm  
- **Content model:** Static data modules in `lib/content/*.ts` feed page routes inside `app/(site)/…`  
- **Reference data:** `legacy-bluebook/` retains the exported Blue Book HTML used for data generation; keep the full legacy snapshot outside the repo (ignored via `site-rebuild/`).

Detailed decisions made during the redesign are recorded in [`docs/redesign-plan.md`](docs/redesign-plan.md).

## Getting Started

\`\`\`bash
# install dependencies
pnpm install

# run the local dev server (http://localhost:3000)
pnpm dev

# type-check and produce a production build
pnpm exec tsc --noEmit
pnpm build

# linting (needs eslint installed/configured if you enable it locally)
pnpm lint
\`\`\`

> **Note:** the repository ships without an `eslint` binary. Run `pnpm add -D eslint` and configure it if you want `pnpm lint` to succeed locally.

## Project Layout

\`\`\`
app/
  (site)/           # All marketing routes (home, ai, clients, careers, etc.)
    layout.tsx      # wraps pages with the new header & footer
components/
  site-header.tsx   # navigation built from lib/content/site.ts
  site-footer.tsx
docs/
  redesign-plan.md  # migration reference + checklist
lib/content/        # typed content sources consumed by pages
public/images/      # exported imagery from the legacy site
public/media/       # hero video (≈79 MB)
legacy-bluebook/    # exported HTML for Blue Book reports used by scripts/generate_bluebook_data.py
\`\`\`

### Content Sources

- `lib/content/home.ts`, `team.ts`, `company.ts` – hero copy, expertise blurbs, leadership, and logos
- `lib/content/ai.ts` – AI overview, IFX details, and partner-specific copy
- `lib/content/careers.ts` – job listings and detailed responsibilities
- `lib/content/bluebook.ts` – Blue Book category metadata and report summaries (used by `/bluebook` and `/bluebook/[slug]`)
- `lib/content/contact.ts` – contact form field definitions and CTA text
- `lib/content/privacy.ts`, `press.ts`, `site.ts` – legal policy copy, press release, and navigation data

Update these modules when copy or product offerings change; page components automatically reflect the edits.

### Assets

- Optimised images live beneath `public/images`. Each filename mirrors the corresponding asset from the legacy export.
- The AMD day hero video (`public/media/Infobell-at-AMD-AI-Day-2025.mp4`) is ~79 MB. GitHub flags this as large – consider moving it to Git LFS or a CDN if repository size becomes a concern.

## Routes & Behaviour

- `/` – hero, core expertise, IFX promo, service products, leadership, and client preview
- `/ai`, `/ai/{amd,intel,nvidia}`, `/ai/ifx` – AI solution messaging sourced from `lib/content/ai.ts`
- `/clients`, `/team`, `/locations`, `/privacy-policy`, `/press-releases/prease-release-amd-2025`
- `/careers` with dynamic detail pages under `/careers/[slug]`  
- `/bluebook` listing reports, with dynamic report summaries at `/bluebook/[slug]`
- `/contact` – mailto-based contact form. A subject query parameter like `/contact?subject=ConvoGene` pre-fills the subject field.

## Reference Snapshot

The original site export (ignored via `site-rebuild/`) contains:

- Raw HTML pages & assets (`www.infobellit.com/…`)
- `sitemap.xml`, `robots.txt`
- `clean_text.txt` / `all_text_raw.txt` with extracted copy

Consult this folder when validating copy fidelity or retrieving additional media.

## Deployment Notes

- `next.config.mjs` disables image optimisation (legacy assets are already rasterised) and skips TypeScript blocking build errors. Adjust as needed for your deployment target (Vercel or custom).
- The build currently emits a warning about using TypeScript 5.0.2. Upgrade to ≥5.1 when feasible.

## Contributing

1. Modify the relevant content module or component
2. Run `pnpm exec tsc --noEmit` and `pnpm build`
3. Keep assets in `public/` optimised; prefer PNG/JPEG/WebP under 1 MB where possible
4. Submit a PR referencing the page or copy you updated

For questions about the redesign scope, start with [`docs/redesign-plan.md`](docs/redesign-plan.md) or the tracked Blue Book export in `legacy-bluebook/` (keep the full legacy snapshot locally under `site-rebuild/` if needed).

## v0 Sync Workflow

1. Create and modify your project using [v0.app](https://v0.app).
2. Deploy your chats from the v0 interface.
3. Changes are automatically pushed to this repository.
4. Vercel deploys the latest version from this repository.
