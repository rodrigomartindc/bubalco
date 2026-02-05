## Bubalco

Vite + React + TypeScript (SPA) deployeado en Hostinger **Shared/Premium** como sitio estático (build a `dist/`).

### Deploy a Hostinger (GitHub Actions)

Este repo incluye el workflow `/.github/workflows/deploy-hostinger.yml` que hace:

- `npm ci`
- `npm run build`
- Sube `dist/**` a Hostinger (temp) y activa el deploy moviéndolo al root del sitio
- Renombra `htaccess` → `.htaccess` para que funcione el routing SPA (React Router)

**Tenés que crear estos GitHub Secrets (repo → Settings → Secrets and variables → Actions):**

- `HOSTINGER_HOST`
- `HOSTINGER_PORT` (normalmente `22`)
- `HOSTINGER_USERNAME`
- `HOSTINGER_PASSWORD`
- `HOSTINGER_TARGET` (ruta absoluta al root del sitio, típicamente `.../public_html`)

### Hostinger: SPA routing

El archivo `public/htaccess` se copia a `dist/htaccess` y en deploy se renombra a `.htaccess`.

