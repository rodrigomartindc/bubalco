import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { asset } from '../utils/asset';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handleMq = () => setIsMobile(mq.matches);
    handleMq();
    mq.addEventListener('change', handleMq);
    return () => mq.removeEventListener('change', handleMq);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/tarifas', label: 'Tarifas' },
    { to: '/horarios', label: 'Horarios' },
    { to: '/voluntariado', label: 'Voluntariado' }
  ];

  const goToDonations = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('donaciones');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    const el = document.getElementById('donaciones');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome || isMobile
          ? 'bg-white/95 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src={isScrolled || !isHome || isMobile ? asset('/logos/logo-negro.png') : asset('/logos/logo-blanco.png')}
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
                      ? isScrolled || !isHome ? 'text-gray-900 font-medium' : 'text-white font-medium'
                      : isScrolled || !isHome
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={goToDonations}
              className="px-5 py-2.5 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
            >
              Donar
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isScrolled || !isHome || isMobile ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                    isActive
                      ? 'bg-gray-50 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={goToDonations}
              className="block w-full text-center px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-lg hover:bg-brand-dark transition-colors"
            >
              Donar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
