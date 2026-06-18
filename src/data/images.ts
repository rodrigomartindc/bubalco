export interface ResponsiveImageSource {
  path: string;
  width: number;
}

export interface OptimizedImage {
  alt: string;
  width: number;
  height: number;
  fallback: string;
  sources: ResponsiveImageSource[];
  sizes?: string;
}

export const HERO_CIERVOS: OptimizedImage = {
  alt: 'Fauna silvestre en Bubalcó Patagonia',
  width: 1000,
  height: 667,
  fallback: '/images/hero/hero-ciervos.jpg',
  sources: [
    { path: '/images/hero/hero-ciervos-480.webp', width: 480 },
    { path: '/images/hero/hero-ciervos-780.webp', width: 780 },
    { path: '/images/hero/hero-ciervos-1040.webp', width: 1040 },
  ],
  sizes: '(max-width: 767px) 100vw, 520px',
};

export const MAP_1: OptimizedImage = {
  alt: 'Mapa Bubalcó Patagonia 1',
  width: 1080,
  height: 1350,
  fallback: '/images/bioparque/bubalco-map-1.png',
  sources: [
    { path: '/images/bioparque/bubalco-map-1-304.webp', width: 304 },
    { path: '/images/bioparque/bubalco-map-1.webp', width: 608 },
  ],
  sizes: '(max-width: 768px) 50vw, 280px',
};

export const MAP_2: OptimizedImage = {
  alt: 'Mapa Bubalcó Patagonia 2',
  width: 1080,
  height: 1350,
  fallback: '/images/bioparque/bubalco-map-2.png',
  sources: [
    { path: '/images/bioparque/bubalco-map-2-304.webp', width: 304 },
    { path: '/images/bioparque/bubalco-map-2.webp', width: 608 },
  ],
  sizes: '(max-width: 768px) 50vw, 280px',
};

export const LOGO_NEGRO = {
  alt: 'Bubalcó Patagonia',
  width: 200,
  height: 53,
  webp: '/logos/logo-negro.webp',
  fallback: '/logos/logo-negro.png',
} as const;

export const LOGO_BLANCO = {
  alt: 'Bubalcó Patagonia',
  width: 200,
  height: 53,
  webp: '/logos/logo-blanco.webp',
  fallback: '/logos/logo-blanco.png',
} as const;

export const BIOPARQUE_MAP_PREVIEW = '/images/bioparque/bubalco-map-0.png';
export const BIOPARQUE_MAP_FULL = '/images/bioparque/mapa-bubalco.jpg';
export const BIOPARQUE_FONDO = '/images/bioparque/bubalco-fondo.png';
export const BIOPARQUE_CERTIF = '/images/bioparque/certif-legislatura-bubalco.webp';
export const BIOPARQUE_VISITAS = '/images/bioparque/bubalco-visitas.jpg';
export const VISITAS_ESCOLARES_CONCIENCIA = '/images/bioparque/visitas-escolares-conciencia.jpeg';

export const NUESTRO_TRABAJO_HERO = '/images/nuestro-trabajo/nuestro-trabajo-hero.jpeg';
export const NUESTRO_TRABAJO_REFUGIO = '/images/nuestro-trabajo/nuestro-trabajo-refugio.jpeg';
export const NUESTRO_TRABAJO_CONSERVACION = '/images/nuestro-trabajo/nuestro-trabajo-conservacion.jpeg';
export const NUESTRO_TRABAJO_RESCATE = '/images/nuestro-trabajo/nuestro-trabajo-rescate.jpeg';

export const DONACIONES_BENEFICIOS_PDF = '/docs/beneficios-impositivos-bubalco.pdf';
export const PARTNER_CLUB_RIO_NEGRO = '/images/partners/logo-club-rio-negro.png';

export const TARJETAS = [
  { src: '/images/tarjetas/tarjeta-visa.png', alt: 'Visa' },
  { src: '/images/tarjetas/tarjeta-mastercard.png', alt: 'Mastercard' },
  { src: '/images/tarjetas/tarjeta-maestro.png', alt: 'Maestro' },
  { src: '/images/tarjetas/tarjeta-mercaddpago.png', alt: 'Mercado Pago' },
  { src: '/images/tarjetas/tarjeta-tarjeta-naranja.png', alt: 'Naranja' },
  { src: '/images/tarjetas/tarjeta-cabal.png', alt: 'Cabal' },
  { src: '/images/tarjetas/tarjeta-faro.png', alt: 'Faro' },
  { src: '/images/tarjetas/tarjeta-coopeplus.png', alt: 'Coopeplus' },
  { src: '/images/tarjetas/tarjeta-huilen.png', alt: 'Huilen' },
] as const;
