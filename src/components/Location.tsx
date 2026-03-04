import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ubicacion" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="w-full px-6 py-8">
            <div className={`space-y-5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Ubicación</p>
                <h2 className="text-2xl font-medium text-gray-900 mb-4 leading-tight">Vení a conocernos</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Estamos en Allen, Río Negro, Patagonia Argentina.
                  Te esperamos para vivir una experiencia única conectando con la naturaleza.
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                  <MapPin className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Dirección</p>
                    <p className="text-xs text-gray-500">Isla 19, Contralmirante Guerrico<br />Allen, Río Negro, Argentina</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                  <Phone className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">WhatsApp</p>
                    <a href={WA_URL} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-gray-900">+54 9 298 473-1612</a>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                  <Mail className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Email</p>
                    <p className="text-xs text-gray-500">info@bubalco.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`max-w-3xl ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Ubicación</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">Vení a<span className="block">conocernos</span></h2>
          <p className="text-base text-gray-500 leading-relaxed mb-12">
            Estamos en Allen, Río Negro, Patagonia Argentina. Te esperamos para vivir una experiencia única conectando con la naturaleza.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900 mb-1">Dirección</p>
                <p className="text-sm text-gray-500">Isla 19, Contralmirante Guerrico<br />Allen, Río Negro, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gray-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900 mb-1">WhatsApp</p>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900">+54 9 298 473-1612</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-gray-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-900 mb-1">Email</p>
                <p className="text-sm text-gray-500">info@bubalco.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-brand transition-colors">
              <Instagram className="text-white" size={20} />
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-[#25d366] transition-colors">
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white"><path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.468.655 4.876 1.898 6.988L2 30l7.257-1.902A13.94 13.94 0 0016.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm6.36 19.314c-.348-.174-2.063-1.018-2.383-1.134-.32-.116-.553-.174-.786.174-.232.348-.902 1.134-1.106 1.368-.203.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.937-2.41-.203-.348-.022-.536.153-.71.157-.156.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.435-.03-.61-.087-.174-.785-1.892-1.076-2.59-.283-.68-.57-.588-.786-.6-.203-.01-.435-.012-.667-.012s-.61.088-.93.435c-.32.348-1.222 1.194-1.222 2.912s1.25 3.378 1.426 3.61c.174.232 2.46 3.754 5.96 5.264.833.36 1.483.574 1.99.735.836.266 1.597.228 2.198.138.67-.1 2.063-.844 2.354-1.66.29-.814.29-1.514.203-1.66-.087-.145-.32-.232-.668-.405z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
