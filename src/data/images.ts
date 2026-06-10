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
  fallback: '/hero-ciervos.jpg',
  sources: [
    { path: '/hero-ciervos-480.webp', width: 480 },
    { path: '/hero-ciervos-780.webp', width: 780 },
    { path: '/hero-ciervos-1040.webp', width: 1040 },
  ],
  sizes: '(max-width: 767px) 100vw, 520px',
};

export const TUCAN_BUBALCO: OptimizedImage = {
  alt: 'Bubalcó Patagonia',
  width: 800,
  height: 1419,
  fallback: '/tucan-bubalco.jpg',
  sources: [
    { path: '/tucan-bubalco-440.webp', width: 440 },
    { path: '/tucan-bubalco.webp', width: 880 },
  ],
  sizes: '(max-width: 1024px) 100vw, 440px',
};

export const MAP_1: OptimizedImage = {
  alt: 'Mapa Bubalcó Patagonia 1',
  width: 1080,
  height: 1350,
  fallback: '/bubalco-map-1.png',
  sources: [
    { path: '/bubalco-map-1-304.webp', width: 304 },
    { path: '/bubalco-map-1.webp', width: 608 },
  ],
  sizes: '(max-width: 768px) 50vw, 304px',
};

export const MAP_2: OptimizedImage = {
  alt: 'Mapa Bubalcó Patagonia 2',
  width: 1080,
  height: 1350,
  fallback: '/bubalco-map-2.png',
  sources: [
    { path: '/bubalco-map-2-304.webp', width: 304 },
    { path: '/bubalco-map-2.webp', width: 608 },
  ],
  sizes: '(max-width: 768px) 50vw, 304px',
};

export const LOGO_NEGRO = {
  alt: 'Bubalcó Patagonia',
  width: 160,
  height: 43,
  webp: '/logos/logo-negro.webp',
  fallback: '/logos/logo-negro.png',
} as const;

export const LOGO_BLANCO = {
  alt: 'Bubalcó Patagonia',
  width: 144,
  height: 38,
  webp: '/logos/logo-blanco.webp',
  fallback: '/logos/logo-blanco.png',
} as const;
