export function isPrerenderMode(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return new URLSearchParams(window.location.search).get('prerender') === '1';
}
