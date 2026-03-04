import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { asset } from '../utils/asset';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handleMq = () => setIsMobile(mq.matches);
    handleMq();
    mq.addEventListener('change', handleMq);
    return () => mq.removeEventListener('change', handleMq);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isHome = location.pathname === '/';
  const isDark = !isScrolled && isHome && !isMobile;

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/tarifas', label: 'Tarifas' },
    { to: '/horarios', label: 'Horarios' },
    { to: '/voluntariado', label: 'Voluntariado' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-lg shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src={isDark ? asset('/logos/logo-blanco.png') : asset('/logos/logo-negro.png')}
              alt="Bubalcó Patagonia"
              className="h-10 w-auto transition-all"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive
                      ? isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'
                      : isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer"
              className={`transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="text-gray-900" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 text-sm tracking-wide rounded-lg transition-colors ${
                    isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
