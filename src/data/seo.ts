export const SITE_URL = 'https://fundacionbubalco.org.ar';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero/hero-ciervos.jpg`;

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export const seoByPath: Record<string, PageSEO> = {
  '/': {
    title: 'Fundación Bubalcó Patagonia | Refugio, rescate y conservación',
    description:
      'Fundación Bubalcó Patagonia trabaja en el rescate, refugio, conservación y educación ambiental de fauna silvestre en Río Negro, Patagonia Argentina.',
    path: '/',
  },
  '/bioparque': {
    title: 'Bioparque Bubalcó Patagonia | Fauna silvestre en Río Negro',
    description:
      'Conocé el Bioparque Bubalcó Patagonia, un refugio de 34 hectáreas en una isla del río Negro dedicado al bienestar animal, la conservación y la educación ambiental.',
    path: '/bioparque',
  },
  '/bioparque/horarios-y-tarifas': {
    title: 'Horarios y tarifas | Bioparque Bubalcó Patagonia',
    description:
      'Consultá días de apertura, horarios, tarifas, promociones, medios de pago y guiados educativos para visitar el Bioparque Bubalcó Patagonia.',
    path: '/bioparque/horarios-y-tarifas',
  },
  '/bioparque/preguntas-frecuentes': {
    title: 'Preguntas frecuentes | Bioparque Bubalcó Patagonia',
    description:
      'Respondemos las preguntas más frecuentes para planificar tu visita al Bioparque Bubalcó Patagonia: horarios, entradas, recorrido, accesibilidad y servicios.',
    path: '/bioparque/preguntas-frecuentes',
  },
  '/bioparque/visitas-escolares': {
    title: 'Visitas escolares | Educación ambiental en Bubalcó Patagonia',
    description:
      'Propuestas educativas para escuelas en el Bioparque Bubalcó Patagonia. Una experiencia de educación ambiental directa, participativa y conectada con la fauna silvestre.',
    path: '/bioparque/visitas-escolares',
  },
  '/nuestro-trabajo': {
    title: 'Nuestro trabajo | Conservación, rescate y educación ambiental',
    description:
      'Conocé el trabajo de Fundación Bubalcó Patagonia en rescate, refugio, conservación de fauna silvestre y educación ambiental en Río Negro y la Patagonia.',
    path: '/nuestro-trabajo',
  },
  '/donaciones': {
    title: 'Donaciones | Ayudá a proteger la fauna silvestre',
    description:
      'Sumate a Fundación Bubalcó Patagonia con una donación para apoyar el rescate, cuidado, conservación y bienestar de más de 400 animales silvestres.',
    path: '/donaciones',
  },
  '/gracias': {
    title: 'Gracias | Fundación Bubalcó Patagonia',
    description: 'Gracias por tu apoyo a Fundación Bubalcó Patagonia.',
    path: '/gracias',
    noindex: true,
  },
  '/novedades': {
    title: 'Novedades | Fundación Bubalcó Patagonia',
    description: 'Historias de rescate, proyectos de conservación y novedades de la fundación.',
    path: '/novedades',
    noindex: true,
  },
  '/voluntariado': {
    title: 'Voluntariado | Fundación Bubalcó Patagonia',
    description: 'Información sobre voluntariado en Fundación Bubalcó Patagonia.',
    path: '/voluntariado',
    noindex: true,
  },
};

export function getSeoForPath(pathname: string): PageSEO {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return seoByPath[normalized] ?? seoByPath['/'];
}
