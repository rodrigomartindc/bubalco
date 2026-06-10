# SEO / GEO

## Fase 1 (metadata client-side)

- Metadata por ruta (`src/data/seo.ts`, `src/hooks/usePageSEO.ts`)
- Canonical, Open Graph, Twitter Cards y meta robots dinámicos
- `public/robots.txt`, `public/sitemap.xml` y `public/llms.txt`
- JSON-LD global (NGO + WebSite + Bioparque) y FAQPage en preguntas frecuentes

## GEO (`llms.txt`)

Archivo en `public/llms.txt`, servido en `/llms.txt`. Resume en texto plano quién es la fundación, páginas clave, horarios, contacto y redes. Ayuda a asistentes (ChatGPT, Perplexity, etc.) a citar información correcta.

Actualizarlo cuando cambien tarifas, horarios o URLs importantes.

## Schema.org (JSON-LD)

Definido en `src/data/structured-data.ts` e inyectado desde `StructuredData.tsx`:

| Schema | Tipo | Para qué sirve |
|--------|------|----------------|
| `organizationSchema` | `NGO` | Identidad de la fundación, contacto, dirección, geo |
| `websiteSchema` | `WebSite` | Sitio web e idioma |
| `bioparqueSchema` | `TouristAttraction` + `Zoo` | Lugar visitable: ubicación, horarios, relación con la ONG |
| FAQ (solo en `/bioparque/preguntas-frecuentes`) | `FAQPage` | Preguntas frecuentes en resultados enriquecidos |

Los horarios del schema deben mantenerse alineados con `HorariosYTarifas.tsx` cuando cambien.

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

### Dónde cambiar `VITE_SITE_ENV`

| Contexto | Archivo / comando | Valor actual recomendado |
|----------|-------------------|--------------------------|
| Deploy automático a Hostinger | `.github/workflows/deploy-hostinger.yml` → paso `Build static site` → `env.VITE_SITE_ENV` | `preview` (mientras el link sea `hostingersite.com`) |
| Build local manual | Terminal: `VITE_SITE_ENV=preview npm run build:static` | `preview` o `production` según necesidad |
| Go-live con dominio final | Mismo workflow: cambiar a `production` y hacer push a `main` | `production` |

`preview` escribe `noindex, nofollow` en el HTML estático del prerender. `production` permite `index, follow` en rutas indexables.

En runtime, `usePageSEO` también fuerza `noindex` si el hostname contiene `hostingersite.com` (doble protección mientras dure el preview).

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
