import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { asset } from '../utils/asset';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bioparqueOpen, setBioparqueOpen] = useState(true);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  const isBioparque = location.pathname === '/bioparque';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={asset('/logos/logo-negro.png')} alt="Bubalcó Patagonia" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `text-sm tracking-wide transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
              Inicio
            </NavLink>

            <div className="relative group">
              <NavLink to="/bioparque" className={`text-sm tracking-wide transition-colors flex items-center gap-1 ${isBioparque ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                Bioparque <ChevronDown size={14} />
              </NavLink>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px]">
                  <a href="/bioparque#horarios" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Horarios</a>
                  <a href="/bioparque#tarifas" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">Tarifas</a>
                </div>
              </div>
            </div>

            <NavLink to="/voluntariado" className={({ isActive }) => `text-sm tracking-wide transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
              Voluntariado
            </NavLink>

            <NavLink to="/donaciones" className={({ isActive }) => `text-sm tracking-wide transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
              Donaciones
            </NavLink>

            <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-1">
            <NavLink to="/" className={({ isActive }) => `block px-4 py-3 text-sm tracking-wide rounded-lg transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              Inicio
            </NavLink>

            <div>
              <button
                onClick={() => setBioparqueOpen(!bioparqueOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm tracking-wide rounded-lg transition-colors ${isBioparque ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Bioparque
                <ChevronDown size={16} className={`transition-transform ${bioparqueOpen ? 'rotate-180' : ''}`} />
              </button>
              {bioparqueOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link to="/bioparque" className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                    General
                  </Link>
                  <a href="/bioparque#horarios" className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                    Horarios
                  </a>
                  <a href="/bioparque#tarifas" className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50">
                    Tarifas
                  </a>
                </div>
              )}
            </div>

            <NavLink to="/voluntariado" className={({ isActive }) => `block px-4 py-3 text-sm tracking-wide rounded-lg transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              Voluntariado
            </NavLink>

            <NavLink to="/donaciones" className={({ isActive }) => `block px-4 py-3 text-sm tracking-wide rounded-lg transition-colors ${isActive ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              Donaciones
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
