<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- npm only (package-lock.json, no lockfile for other managers).
- Dev: `npm run dev` (Turbopack, port 3000). Build: `npm run build`.
- No test suite. There is no `typecheck` script; verify types with `npx tsc --noEmit`. Lint: `npm run lint` (`eslint`, flat config with core-web-vitals + TS rules).

## Stack quirks

- Next 16.4.3 / React 19.3 with `cacheComponents: true`, `partialPrefetching: true`, and `reactCompiler: true` (`next.config.ts`). React Compiler handles memoization — don't add `useMemo`/`useCallback`/`memo` manually. With `cacheComponents`, caching and async props (`params`, `searchParams`) work differently from stock Next.js — check `node_modules/next/dist/docs/` instead of assuming.
- Tailwind v4, CSS-first: all theme config lives in `src/app/globals.css` (CSS variables); there is no `tailwind.config.*`. Tailwind is wired to Turbopack via the rule in `next.config.ts`, not PostCSS.
- shadcn-style components use the **`base-nova`** style on **Base UI** (`@base-ui/react`), not Radix/shadcn's default primitives. Existing ones are in `src/components/ui/` (button, card). The `shadcn` CLI is a local dependency; aliases come from `components.json` (`@/components`, `@/lib`, `@/hooks`) and map into `src/`.
- `@/*` maps to `src/*`.

## Conventions

- Static images live in `src/assest/` (note the misspelling) and are imported statically (e.g. `import banner from "@/assest/Banner.png"`); the `public/` folder is unused. Keep new assets in `src/assest/` and follow that import pattern.
- App Router pages under `src/app/`; shared components in `src/components/` (`Navbar`, `Footer`, `Banner`, `destination/`).
