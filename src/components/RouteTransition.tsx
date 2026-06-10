import { useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { resetScroll } from '../utils/resetScroll';

interface Props {
  children: React.ReactNode;
}

export default function RouteTransition({ children }: Props) {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.add('page-navigating');
    html.style.scrollBehavior = 'auto';

    resetScroll();

    if (isFirstRender.current) {
      isFirstRender.current = false;
      html.classList.remove('page-navigating');
      html.style.scrollBehavior = '';
      return;
    }

    setVisible(false);
    resetScroll();

    const frame = requestAnimationFrame(() => {
      resetScroll();
      setVisible(true);

      requestAnimationFrame(() => {
        resetScroll();
        html.classList.remove('page-navigating');
        html.style.scrollBehavior = '';
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      html.classList.remove('page-navigating');
      html.style.scrollBehavior = '';
    };
  }, [pathname]);

  return (
    <div className={`route-transition ${visible ? 'route-transition--visible' : ''}`}>
      {children}
    </div>
  );
}
