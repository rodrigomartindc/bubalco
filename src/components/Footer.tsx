import { Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { asset } from '../utils/asset';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación de la fauna nativa.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors">
                <Instagram size={18} />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#25d366] transition-colors">
                <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-white"><path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.468.655 4.876 1.898 6.988L2 30l7.257-1.902A13.94 13.94 0 0016.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm6.36 19.314c-.348-.174-2.063-1.018-2.383-1.134-.32-.116-.553-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.203.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.937-2.41-.203-.348-.022-.536.153-.71.157-.156.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.435-.03-.61-.087-.174-.785-1.892-1.076-2.59-.283-.68-.57-.588-.786-.6-.203-.01-.435-.012-.667-.012s-.61.088-.93.435c-.32.348-1.222 1.194-1.222 2.912s1.25 3.378 1.426 3.61c.174.232 2.46 3.754 5.96 5.264.833.36 1.483.574 1.99.735.836.266 1.597.228 2.198.138.67-.1 2.063-.844 2.354-1.66.29-.814.29-1.514.203-1.66-.087-.145-.32-.232-.668-.405z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                <a href={WA_URL} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">+54 9 298 473-1612</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">info@bubalco.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">Isla 19, Contralmirante Guerrico<br />Allen, Río Negro, Argentina</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="/nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="/bioparque" className="text-sm text-gray-400 hover:text-white transition-colors">Bioparque</a></li>
              <li><a href="/bioparque#tarifas" className="text-sm text-gray-400 hover:text-white transition-colors">Tarifas</a></li>
              <li><a href="/bioparque#horarios" className="text-sm text-gray-400 hover:text-white transition-colors">Horarios</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            © 2026 Bubalcó. Hecho con <Heart size={12} className="text-accent" fill="currentColor" /> para los animales
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
