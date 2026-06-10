import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getHeadMetaForPath } from '../seo/renderHead';

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

export function usePageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getHeadMetaForPath(pathname, {
      siteEnv: import.meta.env.VITE_SITE_ENV,
      hostname: window.location.hostname,
    });

    document.title = meta.title;

    upsertMeta('name', 'description', meta.description);
    upsertLink('canonical', meta.canonicalUrl);

    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:image', meta.image);
    upsertMeta('property', 'og:url', meta.canonicalUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'es_AR');
    upsertMeta('property', 'og:site_name', 'Fundación Bubalcó Patagonia');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', meta.image);

    upsertMeta('name', 'robots', meta.robots);
  }, [pathname]);
}
