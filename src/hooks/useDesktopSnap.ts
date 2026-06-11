import { useEffect } from 'react';

export function useDesktopSnap(enabled: boolean) {
  useEffect(() => {
    document.documentElement.classList.toggle('desktop-home-snap', enabled);
    document.body.classList.toggle('desktop-home-snap', enabled);

    return () => {
      document.documentElement.classList.remove('desktop-home-snap');
      document.body.classList.remove('desktop-home-snap');
    };
  }, [enabled]);
}
