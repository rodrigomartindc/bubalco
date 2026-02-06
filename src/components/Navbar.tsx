import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

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
      // Wait for navigation to paint
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
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://bubalco.com/wp-content/uploads/2023/05/bubalco-logo-dark.webp"
              alt="Bubalco Logo"
              className="h-12 w-auto transition-all"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-semibold transition-colors ${
                    isActive
                      ? 'text-emerald-600'
                      : isScrolled || !isHome
                      ? 'text-gray-700 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={goToDonations}
              className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={goToDonations}
              className="block w-full text-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
