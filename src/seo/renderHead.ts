import { DEFAULT_OG_IMAGE, SITE_URL, getSeoForPath, type PageSEO } from '../data/seo';

const SITE_NAME = 'Fundación Bubalcó Patagonia';

export function buildCanonicalUrl(path: string): string {
  if (path === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path}`;
}

export function getRobotsDirective(
  seo: PageSEO,
  options: { siteEnv?: string; hostname?: string } = {},
): string {
  const { siteEnv, hostname } = options;

  if (siteEnv === 'preview' || (hostname && hostname.includes('hostingersite.com'))) {
    return 'noindex, nofollow';
  }

  if (seo.noindex) {
    return 'noindex, follow';
  }

  return 'index, follow';
}

export interface HeadMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  robots: string;
}

export function getHeadMetaForPath(
  pathname: string,
  options: { siteEnv?: string; hostname?: string } = {},
): HeadMeta {
  const seo = getSeoForPath(pathname);
  const { title, description, path, ogImage } = seo;

  return {
    title,
    description,
    canonicalUrl: buildCanonicalUrl(path),
    image: ogImage ?? DEFAULT_OG_IMAGE,
    robots: getRobotsDirective(seo, options),
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderHeadTags(pathname: string, options: { siteEnv?: string } = {}): string {
  const meta = getHeadMetaForPath(pathname, options);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonicalUrl = escapeHtml(meta.canonicalUrl);
  const image = escapeHtml(meta.image);

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="robots" content="${escapeHtml(meta.robots)}" />`,
  ].join('\n    ');
}

const SEO_TAG_PATTERN =
  /<title>[\s\S]*?<\/title>|<meta\s+(?:name|property)="(?:description|robots|twitter:[^"]+|og:[^"]+)"[^>]*\/?>|<link\s+rel="canonical"[^>]*\/?>/gi;

export function injectHeadIntoHtml(
  html: string,
  pathname: string,
  options: { siteEnv?: string } = {},
): string {
  const withoutSeoTags = html.replace(SEO_TAG_PATTERN, '');
  const headTags = renderHeadTags(pathname, options);

  return withoutSeoTags.replace(/<head>/i, `<head>\n    ${headTags}`);
}
