import { Facebook, Instagram, Twitter, Mail, MapPin, Heart } from 'lucide-react';

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
              src="https://bubalco.com/wp-content/uploads/2023/05/bubalco-logo-dark.webp"
              alt="Bubalco"
              className="h-16 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
              Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación
              de la fauna nativa.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('donaciones')} className="text-gray-400 hover:text-white transition-colors">
                  Donaciones
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('bioparque')} className="text-gray-400 hover:text-white transition-colors">
                  Bioparque
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('quienes-somos')} className="text-gray-400 hover:text-white transition-colors">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('voluntariados')} className="text-gray-400 hover:text-white transition-colors">
                  Voluntariados
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-400">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Ruta 25 Km 3.5, Pilar<br />Buenos Aires
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@bubalco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 flex items-center gap-2">
            © 2024 Bubalco. Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> para los animales
          </p>
          <div className="flex gap-6 text-sm">
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
