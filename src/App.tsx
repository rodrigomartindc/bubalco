import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tarifas from './pages/Tarifas';
import Horarios from './pages/Horarios';
import Volunteering from './components/Volunteering';
import Gracias from './pages/Gracias';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifas" element={<Tarifas />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route
          path="/voluntariado"
          element={
            <div className="pt-20">
              <Volunteering />
            </div>
          }
        />
      </Routes>

      {/* Home on mobile has its own footer slide inside the snap scroller */}
      <div className={isHome ? 'hidden md:block' : ''}>
        <Footer />
      </div>
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
