import { CONTACT, ROUTES, SOCIAL_LINKS } from './site';
import { DEFAULT_OG_IMAGE, SITE_URL } from './seo';

export const GEO_COORDINATES = {
  latitude: -39.0595151,
  longitude: -67.7601751,
} as const;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: CONTACT.address,
  addressLocality: 'Allen',
  addressRegion: 'Río Negro',
  addressCountry: 'AR',
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Fundación Bubalcó Patagonia',
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-negro.png`,
  image: DEFAULT_OG_IMAGE,
  sameAs: Object.values(SOCIAL_LINKS),
  telephone: CONTACT.phoneVisible,
  email: CONTACT.donationEmail,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO_COORDINATES.latitude,
    longitude: GEO_COORDINATES.longitude,
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fundación Bubalcó Patagonia',
  url: SITE_URL,
  inLanguage: 'es-AR',
  publisher: {
    '@type': 'Organization',
    name: 'Fundación Bubalcó Patagonia',
  },
};

export const bioparqueSchema = {
  '@context': 'https://schema.org',
  '@type': ['TouristAttraction', 'Zoo'],
  name: 'Bioparque Bubalcó Patagonia',
  description:
    'Refugio de fauna silvestre de 34 hectáreas en una isla del río Negro, dedicado al bienestar animal, la conservación y la educación ambiental en Allen, Río Negro, Patagonia Argentina.',
  url: `${SITE_URL}${ROUTES.bioparque}`,
  image: DEFAULT_OG_IMAGE,
  telephone: CONTACT.phoneVisible,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO_COORDINATES.latitude,
    longitude: GEO_COORDINATES.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  isAccessibleForFree: false,
  publicAccess: true,
  parentOrganization: {
    '@type': 'NGO',
    name: 'Fundación Bubalcó Patagonia',
    url: SITE_URL,
  },
};
