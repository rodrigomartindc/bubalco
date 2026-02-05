import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <MapPin className="text-emerald-600" size={18} />
                <span className="text-emerald-700 text-sm font-semibold">Ubicación</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Vení a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
                  conocernos
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Estamos en Allen, Río Negro, Patagonia Argentina. Te esperamos para vivir una experiencia
                única conectando con la naturaleza.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Dirección</p>
                  <p className="text-gray-600">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <Phone className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Teléfono</p>
                  <p className="text-gray-600">
                    +54 9 11 1234-5678<br />
                    Emergencias: +54 9 11 8765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-amber-100 p-4 rounded-2xl group-hover:bg-amber-600 transition-colors">
                  <Mail className="text-amber-700 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">
                    info@bubalco.com<br />
                    educacion@bubalco.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="#" className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="text-white" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="text-white" size={24} />
              </a>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="bg-emerald-200 rounded-3xl h-[600px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-teal-500/50"></div>
              <div className="relative text-center">
                <MapPin size={80} className="text-emerald-700 mx-auto mb-4" />
                <p className="text-2xl font-bold text-emerald-900">Mapa del Bioparque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
