import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_URL, getSeoForPath } from '../data/seo';

const SITE_NAME = 'Fundación Bubalcó Patagonia';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function getRobotsDirective(noindex: boolean | undefined): string {
  const hostname = window.location.hostname;

  if (hostname.includes('hostingersite.com')) {
    return 'noindex, nofollow';
  }

  if (noindex) {
    return 'noindex, follow';
  }

  return 'index, follow';
}

function buildCanonicalUrl(path: string): string {
  if (path === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path}`;
}

export function usePageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const { title, description, path, ogImage, noindex } = seo;
    const canonicalUrl = buildCanonicalUrl(path);
    const image = ogImage ?? DEFAULT_OG_IMAGE;
    const robots = getRobotsDirective(noindex);

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonicalUrl);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'es_AR');
    upsertMeta('property', 'og:site_name', SITE_NAME);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    upsertMeta('name', 'robots', robots);
  }, [pathname]);
}
