import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DonationStrip from './components/DonationStrip';
import WhatsAppButton from './components/WhatsAppButton';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const snap = document.querySelector('.home-slides, .bioparque-slides') as HTMLElement | null;
    if (snap) snap.scrollTop = 0;
  }, [pathname]);
  return null;
}

function AppShell() {
  const location = useLocation();
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
      <ScrollToTop />
      <Navbar />
      <DonationStrip />
      <WhatsAppButton />
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
      {showAppFooter && <GoogleMapsFooter />}
      {showAppFooter && <Footer />}
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
