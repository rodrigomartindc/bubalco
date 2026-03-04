import { Instagram, Facebook, Mail, MapPin, Heart } from 'lucide-react';
import { asset } from '../utils/asset';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img
              src={asset("/logos/logo-blanco.png")}
              alt="Bubalcó Patagonia"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación
              de la fauna nativa.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('donaciones')} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Donaciones
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('bioparque')} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Bioparque
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quienes-somos')} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('voluntariados')} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Voluntariados
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">
                  Isla 19, Contralmirante Guerrico<br />
                  Allen, Río Negro, Argentina
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">info@bubalco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            © 2024 Bubalcó. Hecho con <Heart size={12} className="text-brand" fill="currentColor" /> para los animales
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
