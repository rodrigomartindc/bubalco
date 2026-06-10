## Bubalco

Vite + React + TypeScript (SPA) deployeado en Hostinger **Shared/Premium** como sitio estático (build a `dist/`).

### Deploy a Hostinger (GitHub Actions)

Este repo incluye el workflow `/.github/workflows/deploy-hostinger.yml` que hace:

- `npm ci`
- `npm run build`
- Sube `dist/**` a Hostinger (temp) y activa el deploy moviéndolo al root del sitio
- Renombra `htaccess` → `.htaccess` para que funcione el routing SPA (React Router)

**Tenés que crear estos GitHub Secrets (repo → Settings → Secrets and variables → Actions):**

- `HOSTINGER_HOST` (recomendado: **IP del servidor**, no el hostname — hPanel → SSH Access)
- `HOSTINGER_PORT` (**en Hostinger Shared suele ser `65002`**, confirmalo en hPanel → SSH Access)
- `HOSTINGER_USERNAME`
- `HOSTINGER_PASSWORD`
- `HOSTINGER_TARGET` (ruta absoluta al root del sitio, típicamente `.../public_html`)

### Si el deploy falla con `CONNECT_FAIL: TimeoutError`

Eso significa que **GitHub no puede abrir el puerto SSH** de Hostinger. No es un error de contraseña (eso fallaría más adelante, en el paso SCP).

1. hPanel → **Advanced → SSH Access** → SSH debe estar **habilitado**
2. Confirmá **puerto `65002`** (shared) en el secret `HOSTINGER_PORT`
3. Usá la **IP del servidor** en `HOSTINGER_HOST` (más estable que `srvXXX.hostinger.com`)
4. Si reintentaste muchas veces seguidas, Hostinger puede **bloquear temporalmente** — esperá 30–60 min
5. Probá desde tu PC: `ssh -p 65002 TU_USUARIO@TU_IP` (si falla ahí también, es Hostinger/red)
6. Re-ejecutá el workflow manualmente: Actions → Deploy to Hostinger → Run workflow

### Hostinger: SPA routing

El archivo `public/htaccess` se copia a `dist/htaccess` y en deploy se renombra a `.htaccess`.

