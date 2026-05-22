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
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
  const hasOwnMobileFooter = isHome || isBioparque || isHorariosYTarifas || isVisitasEscolares || isFaq;
  const showAppFooter = hasOwnMobileFooter ? isDesktop : true;

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
