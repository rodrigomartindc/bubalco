import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import RouteTransition from './components/RouteTransition';
import { resetScroll } from './utils/resetScroll';
import Navbar from './components/Navbar';
import DonationStrip from './components/DonationStrip';
import WhatsAppButton from './components/WhatsAppButton';
import DesktopSlideIndicator from './components/DesktopSlideIndicator';
import Footer from './components/Footer';
import GoogleMapsFooter from './components/GoogleMapsFooter';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Bioparque from './pages/Bioparque';
import Donaciones from './pages/Donaciones';
import VisitasEscolares from './pages/VisitasEscolares';
import NuestroTrabajoPage from './pages/NuestroTrabajoPage';
import Novedades from './pages/Novedades';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import HorariosYTarifas from './pages/HorariosYTarifas';
import Volunteering from './components/Volunteering';
import Gracias from './pages/Gracias';
import StructuredData from './components/StructuredData';
import { usePageSEO } from './hooks/usePageSEO';

function AppShell() {
  const location = useLocation();
  usePageSEO();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handle = () => setIsDesktop(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  const isHome = location.pathname === '/';
  const isBioparque = location.pathname === '/bioparque';
  const isHorariosYTarifas = location.pathname === '/bioparque/horarios-y-tarifas';
  const isVisitasEscolares = location.pathname === '/visitas-escolares';
  const isFaq = location.pathname === '/bioparque/preguntas-frecuentes';
  const isDonaciones = location.pathname === '/donaciones';
  const isNuestroTrabajo = location.pathname === '/nuestro-trabajo';
  const hasOwnMobileFooter = isHome || isBioparque || isHorariosYTarifas || isVisitasEscolares || isFaq || isDonaciones || isNuestroTrabajo;
  const showAppFooter = hasOwnMobileFooter ? isDesktop : true;

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && !url.hash) return;

      document.documentElement.classList.add('page-navigating');
      resetScroll();
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    const usesMobileSnap = isHome || isBioparque || isVisitasEscolares;
    const mq = window.matchMedia('(max-width: 767px)');

    const apply = () => {
      const shouldLock = usesMobileSnap && mq.matches;
      document.documentElement.classList.toggle('mobile-snap-page', shouldLock);
      document.body.classList.toggle('mobile-snap-page', shouldLock);
    };

    apply();
    mq.addEventListener('change', apply);

    return () => {
      mq.removeEventListener('change', apply);
      document.documentElement.classList.remove('mobile-snap-page');
      document.body.classList.remove('mobile-snap-page');
    };
  }, [isHome, isBioparque, isVisitasEscolares]);

  useEffect(() => {
    const usesMobileSnap = isHome || isBioparque || isVisitasEscolares;
    const mq = window.matchMedia('(max-width: 767px)');
    if (!usesMobileSnap || !mq.matches) return;

    const selector = isHome ? '.home-slides' : '.bioparque-slides';
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;

    let startY = 0;

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      startY = touch.clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      const currentY = touch.clientY;
      const deltaY = currentY - startY;

      const atTop = el.scrollTop <= 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

      const pullingDownAtTop = atTop && deltaY > 0;
      const pushingUpAtBottom = atBottom && deltaY < 0;

      if (pullingDownAtTop || pushingUpAtBottom) {
        event.preventDefault();
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [isHome, isBioparque, isVisitasEscolares, location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Navbar />
      <DonationStrip />
      <WhatsAppButton />
      <DesktopSlideIndicator />
      <RouteTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/bioparque" element={<Bioparque />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/visitas-escolares" element={<VisitasEscolares />} />
          <Route path="/nuestro-trabajo" element={<NuestroTrabajoPage />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/bioparque/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/bioparque/horarios-y-tarifas" element={<HorariosYTarifas />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/voluntariado" element={<div className="pt-[9rem]"><Volunteering /></div>} />
        </Routes>
      </RouteTransition>
      {showAppFooter && isDesktop ? (
        <section id="contacto" data-slide-label="Contacto" className="desktop-footer-snap scroll-section min-h-screen flex flex-col">
          <GoogleMapsFooter fill snap={false} />
          <Footer snap={false} />
        </section>
      ) : (
        <>
          {showAppFooter && <GoogleMapsFooter />}
          {showAppFooter && <Footer />}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppShell />
    </Router>
  );
}

export default App;
