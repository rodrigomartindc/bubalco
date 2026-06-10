# SEO / GEO

## Fase 1 (metadata client-side)

- Metadata por ruta (`src/data/seo.ts`, `src/hooks/usePageSEO.ts`)
- Canonical, Open Graph, Twitter Cards y meta robots dinámicos
- `public/robots.txt` y `public/sitemap.xml`
- JSON-LD global (Organization + WebSite) y FAQPage en preguntas frecuentes

## Fase 2 (prerender estático)

El build de producción genera HTML estático por ruta indexable con Playwright post-build.

### Rutas prerenderizadas

- `/`
- `/bioparque`
- `/bioparque/horarios-y-tarifas`
- `/bioparque/preguntas-frecuentes`
- `/visitas-escolares`
- `/nuestro-trabajo`
- `/donaciones`

Cada ruta queda en `dist/<ruta>/index.html` (la home en `dist/index.html`). Apache/LiteSpeed sirve esos archivos antes del fallback SPA gracias a `public/htaccess`.

### Comandos

```bash
npm run build          # solo Vite (SPA)
npm run build:static   # Vite + prerender de las 7 rutas
```

### Variables de entorno

| Variable | Valores | Uso |
|----------|---------|-----|
| `VITE_SITE_ENV` | `production` \| `preview` | `preview` fuerza `noindex, nofollow` en el HTML estático del build |

Usar `VITE_SITE_ENV=preview` si el deploy va a un dominio temporal (p. ej. `hostingersite.com`). En producción final usar `production`.

En runtime, `usePageSEO` sigue forzando `noindex` si el hostname contiene `hostingersite.com`.

### Redirects 301 (fuera de este repo)

La web anterior sigue activa en su dominio/carpeta. Los **redirects 301** desde las URLs viejas hacia `https://fundacionbubalco.org.ar` se configuran en el **servidor del dominio anterior**, no en este proyecto.

## Dominio

Toda la configuración apunta al dominio final:

`https://fundacionbubalco.org.ar`

## Verificación local

Después de `npm run build:static`:

```bash
npm run preview
curl -s http://127.0.0.1:4173/bioparque/ | grep -c '<div id="root"></div>'   # debe ser 0
curl -s http://127.0.0.1:4173/bioparque/ | grep '<title>'
```

El `#root` no debe quedar vacío en las rutas prerenderizadas.
