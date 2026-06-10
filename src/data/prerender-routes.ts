export const PRERENDER_ROUTES = [
  '/',
  '/bioparque',
  '/bioparque/horarios-y-tarifas',
  '/bioparque/preguntas-frecuentes',
  '/visitas-escolares',
  '/nuestro-trabajo',
  '/donaciones',
] as const;

export type PrerenderRoute = (typeof PRERENDER_ROUTES)[number];
