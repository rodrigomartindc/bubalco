import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGO_NEGRO } from '../data/images';
import { ROUTES, SOCIAL_LINKS } from '../data/site';
import OptimizedLogo from './OptimizedLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setIsOpen(false); }, [location]);

  const isBioparque = location.pathname.startsWith('/bioparque');

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname === ROUTES.home) {
      const el = document.querySelector('.home-slides') as HTMLElement | null;
      if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(ROUTES.home);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[200] bg-white/95 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo — mobile: goHome handler; desktop: normal link */}
            <Link to={ROUTES.home} className="flex-shrink-0 md:hidden" onClick={goHome}>
              <OptimizedLogo logo={LOGO_NEGRO} className="h-10 w-auto" />
            </Link>
            <Link to={ROUTES.home} className="flex-shrink-0 hidden md:block">
              <OptimizedLogo logo={LOGO_NEGRO} className="h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-7">
              <NavLink to={ROUTES.home} className={({ isActive }) => `text-sm tracking-wide transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                Inicio
              </NavLink>

              <div className="relative group">
                <NavLink to={ROUTES.bioparque} className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${isBioparque ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                  Qué es el Bioparque <ChevronDown size={14} />
                </NavLink>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                    <Link to={ROUTES.horarios} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Horarios y Tarifas</Link>
                    <Link to={ROUTES.visitasEscolares} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Visitas Escolares</Link>
                    <Link to={ROUTES.faq} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Preguntas Frecuentes</Link>
                  </div>
                </div>
              </div>

              <NavLink to={ROUTES.nuestroTrabajo} className={({ isActive }) => `text-sm tracking-wide transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                Nuestro Trabajo
              </NavLink>

              <NavLink to={ROUTES.donaciones} className={({ isActive }) => `text-sm tracking-wide transition-colors font-medium ${isActive ? 'text-accent' : 'text-accent hover:text-amber-600'}`}>
                Apoyar la conservación. Doná ahora
              </NavLink>

              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-900" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900"
                aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed inset-0 bg-white z-[199] overflow-y-auto"
          style={{ paddingTop: '124px' }}
        >
          <div className="px-6 py-4 space-y-1">
            <NavLink to={ROUTES.home} onClick={goHome} className={({ isActive }) => `block px-4 py-3 text-base tracking-wide underline underline-offset-4 decoration-gray-300 rounded-lg transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              Inicio
            </NavLink>

            <div>
              <Link to={ROUTES.bioparque} className={`block px-4 py-3 text-base tracking-wide underline underline-offset-4 decoration-gray-300 rounded-lg transition-colors ${isBioparque ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                Qué es el Bioparque
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link to={ROUTES.horarios} className="block px-4 py-2 text-[15px] text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                  Horarios y Tarifas
                </Link>
                <Link to={ROUTES.visitasEscolares} className="block px-4 py-2 text-[15px] text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                  Visitas Escolares
                </Link>
                <Link to={ROUTES.faq} className="block px-4 py-2 text-[15px] text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                  Preguntas Frecuentes
                </Link>
              </div>
            </div>

            <NavLink to={ROUTES.nuestroTrabajo} className={({ isActive }) => `block px-4 py-3 text-base tracking-wide underline underline-offset-4 decoration-gray-300 rounded-lg transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              Nuestro Trabajo
            </NavLink>

            <NavLink to={ROUTES.donaciones} className={({ isActive }) => `block px-4 py-3 text-base tracking-wide underline underline-offset-4 decoration-accent/50 rounded-lg font-medium transition-colors ${isActive ? 'bg-accent/10 text-accent' : 'text-accent hover:bg-accent/10'}`}>
              Apoyar la conservación. Doná ahora
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
