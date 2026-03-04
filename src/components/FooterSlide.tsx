import { Instagram, Mail, MapPin } from 'lucide-react';
import { asset } from '../utils/asset';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';

export default function FooterSlide() {
  return (
    <section className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-gray-900 text-white">
          <div className="px-6 py-10 h-full flex flex-col justify-between">
            <div>
              <img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-10 mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación de la fauna nativa.
              </p>
              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-400">Isla 19, Contralmirante Guerrico<br />Allen, Río Negro, Argentina</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-400">info@bubalco.com</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-800">
              <div className="flex gap-3">
                <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#25d366] transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-white"><path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.468.655 4.876 1.898 6.988L2 30l7.257-1.902A13.94 13.94 0 0016.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm6.36 19.314c-.348-.174-2.063-1.018-2.383-1.134-.32-.116-.553-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.203.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.937-2.41-.203-.348-.022-.536.153-.71.157-.156.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.435-.03-.61-.087-.174-.785-1.892-1.076-2.59-.283-.68-.57-.588-.786-.6-.203-.01-.435-.012-.667-.012s-.61.088-.93.435c-.32.348-1.222 1.194-1.222 2.912s1.25 3.378 1.426 3.61c.174.232 2.46 3.754 5.96 5.264.833.36 1.483.574 1.99.735.836.266 1.597.228 2.198.138.67-.1 2.063-.844 2.354-1.66.29-.814.29-1.514.203-1.66-.087-.145-.32-.232-.668-.405z"/></svg>
                </a>
              </div>
              <p className="mt-5 text-xs text-gray-500">© 2024 Bubalcó.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
