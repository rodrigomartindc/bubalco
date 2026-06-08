# SEO / GEO — Fase 1

## Qué se implementó

- Metadata client-side por ruta (`src/data/seo.ts`, `src/hooks/usePageSEO.ts`)
- Canonical, Open Graph, Twitter Cards y meta robots dinámicos
- `public/robots.txt` y `public/sitemap.xml`
- JSON-LD global (Organization + WebSite) y FAQPage en preguntas frecuentes

## Dominio

Toda la configuración apunta al dominio final:

`https://fundacionbubalco.org.ar`

El dominio temporal de preview (`hostingersite.com`) fuerza `noindex, nofollow` en todas las páginas.

## Limitación SPA

Este proyecto es una SPA React/Vite. Algunas herramientas SEO que no ejecutan JavaScript pueden seguir viendo poco contenido por ruta.

Si herramientas como Seobility siguen sin leer bien el sitio, la fase 2 recomendada es prerender o SSR de las rutas principales.
