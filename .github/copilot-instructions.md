# Copilot Instructions for QodeIO (quodeio)

## Project Overview
- **Framework:** Next.js 16 (App Router, TypeScript, React 19)
- **UI:** Tailwind CSS, custom CSS in `app/globals.css`
- **Structure:**
  - All pages are in the `app/` directory, using Next.js App Router conventions.
  - Shared UI components are in `app/components/` (e.g., `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `About.tsx`).
  - Each route (e.g., `/about`, `/services`) has its own folder with a `page.tsx` file.
  - Static assets (images) are in `public/images/`.

## Key Patterns & Conventions
- **Layout:**
  - `app/layout.tsx` defines the root layout, imports global styles, and wraps all pages with `Header` and `Footer`.
  - Font variables are set up using `next/font` and referenced in CSS.
- **Styling:**
  - Tailwind CSS is the primary styling method, with some custom properties in `globals.css`.
  - Use semantic HTML and utility classes for layout and responsiveness.
- **Component Usage:**
  - Pages import and compose components from `app/components/`.
  - Background SVGs and decorative elements are used for visual branding.
- **Routing:**
  - Each folder in `app/` (e.g., `about/`, `services/`) represents a route.
  - The main entry is `app/page.tsx` (the home page).

## Developer Workflows
- **Development:**
  - Start dev server: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - Hot reload is enabled by default.
- **Build & Deploy:**
  - Build: `npm run build`
  - Start production: `npm run start`
  - Deployments are optimized for Vercel, but standard Next.js deployment applies.
- **Linting:**
  - Run linter: `npm run lint`
  - ESLint config extends `eslint-config-next` with custom ignores in `eslint.config.mjs`.
- **TypeScript:**
  - Strict mode is enabled. Path alias `@/*` maps to project root.

## Integration & External Dependencies
- **Fonts:** Uses `next/font` for Geist and Geist Mono.
- **No backend/API routes** are present in this codebase (static site only).
- **No custom server logic**—all logic is in React components.

## Project-Specific Notes
- **Branding:**
  - QodeIO logo and color scheme are used throughout (see `Header.tsx`, `Footer.tsx`, SVG backgrounds).
- **Accessibility:**
  - Semantic HTML and ARIA best practices are followed in components.
- **No test suite** is present; add tests if needed.

## Examples
- To add a new page: create a folder under `app/` (e.g., `app/contact/`) and add `page.tsx`.
- To add a new shared component: add to `app/components/` and import where needed.

---
For more, see `README.md` and Next.js docs. Keep instructions concise and focused on this codebase's actual structure and practices.