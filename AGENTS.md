# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router pages live in `app/(site)/`, grouped by route segments for each marketing surface.
- Shared UI sits in `components/`; keep top-level wrappers in `app/layout.tsx` and `app/globals.css`.
- Typed copy, navigation, and data belong to `lib/content/*.ts`. Legacy HTML stays in `site-rebuild/`; production assets ship from `public/` (`public/images`, `public/media`).
- Project docs and rationale live under `docs/`; add context there when introducing notable changes.

## Build, Test, and Development Commands
- `pnpm dev` starts the Next.js dev server at `http://localhost:3000`.
- `pnpm exec tsc --noEmit` runs a repository-wide type check; fix any drift before opening a PR.
- `pnpm build` performs the production build and surfaces static generation or routing regressions.
- `pnpm lint` executes ESLint once you install a local eslint binary (`pnpm add -D eslint`).

## Coding Style & Naming Conventions
- Use TypeScript with React function components; default-export page-level entries (`page.tsx`) and keep co-located helpers file-scoped.
- Follow the existing 2-space indentation, double quotes, and Tailwind utility sequencing; reach for `clsx` only when conditional classes add clarity.
- Prefer descriptive PascalCase component names and SCREAMING_SNAKE_CASE for exported content constants in `lib/content`.
- Reuse shared primitives from `components/` and keep large data blobs inside the corresponding `lib/content` module, not inline in JSX.

## Testing Guidelines
- Automated tests are not wired yet; rely on `pnpm exec tsc --noEmit` and `pnpm build` as required gates.
- Manually smoke-test the affected routes, navigation, and accessibility basics (keyboard focus, contrast) after each change.
- Extend `lib/content` fixtures to exercise new code paths and validate rendering states when adding features.

## Commit & Pull Request Guidelines
- Follow conventional commit prefixes (`feat:`, `fix:`, `chore:`) consistent with the existing history.
- Keep commits scoped to a route or component and separate content-only updates from structural refactors.
- PRs should include a concise summary, linked issue or task, commands run, and before/after screenshots or recordings for UI-impacting work.
- Tag reviewers when updating shared layout, navigation, or public asset directories to prompt cross-team visibility.

## Content & Assets Notes
- Compress imagery before committing; filenames in `public/images` should describe purpose (`clients-grid.png`, `hero-video-thumb.jpg`).
- When syncing copy from legacy sources, cross-reference `site-rebuild/` and update the matching `lib/content/*.ts` module.
- Capture major content or asset decisions in `docs/` so future agents understand why conventions were chosen.
