# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Bubalcó Patagonia — a React + TypeScript + Vite SPA for an animal rescue biopark in Patagonia, Argentina. It has a small PHP API backend for Mercado Pago payment integration that is optional for local development.

### Development commands

See `package.json` for all scripts. Key ones:

- `npm run dev` — Vite dev server (port 5173)
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript type checking (`tsc --noEmit`)
- `npm run preview` — preview production build

### Node version

The project requires Node.js >= 20 (specified in `.nvmrc` and `package.json` engines). Use `nvm use 20` if the default Node version is different.

### Known issues

- `npm run lint` reports 1 pre-existing error (`no-unsafe-finally` in `src/pages/Gracias.tsx`). This is in the existing codebase and not a setup issue.

### PHP backend (optional)

The PHP API under `public/api/mp/` handles Mercado Pago donations. It requires PHP 8.x with the `curl` extension and a `config.php` with a valid `MP_ACCESS_TOKEN`. This is not needed for frontend development — the site works fully without it except for the donation checkout flow.
