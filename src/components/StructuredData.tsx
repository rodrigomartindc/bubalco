import { CONTACT, SOCIAL_LINKS } from '../data/site';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../data/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Fundación Bubalcó Patagonia',
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-negro.png`,
  image: DEFAULT_OG_IMAGE,
  sameAs: Object.values(SOCIAL_LINKS),
  telephone: CONTACT.phoneVisible,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address,
    addressLocality: 'Allen',
    addressRegion: 'Río Negro',
    addressCountry: 'AR',
  },
};

const websiteSchema = {
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

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
