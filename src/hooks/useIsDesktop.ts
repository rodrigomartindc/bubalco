import { useEffect, useState } from 'react';

function getIsDesktop(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(min-width: 768px)').matches;
}

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handle = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  return isDesktop;
}
