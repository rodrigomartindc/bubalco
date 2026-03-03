import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();
  const plusCode = 'W6RR+5X Allen, Río Negro';
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`;

  return (
    <section id="ubicacion" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="w-full px-6 py-8">
            <div className={`space-y-5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Ubicación</p>

                <h2 className="text-2xl font-medium text-gray-900 mb-4 leading-tight">
                  Vení a conocernos
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Estamos en Allen, Río Negro, Patagonia Argentina.
                  <span className="block mt-2">
                    Te esperamos para vivir una experiencia única conectando con la naturaleza.
                  </span>
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <div className="relative h-[210px]">
                  <iframe
                    title="Mapa Bubalco"
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900">Dirección</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 flex items-start gap-3">
                  <Phone className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Teléfono</p>
                    <p className="text-xs text-gray-500">+54 9 11 1234-5678</p>
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

              <div className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Ubicación</p>

              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                Vení a
                <span className="block">conocernos</span>
              </h2>

              <p className="text-base text-gray-500 leading-relaxed mb-12">
                Estamos en Allen, Río Negro, Patagonia Argentina.
                <span className="block mt-2">
                  Te esperamos para vivir una experiencia única conectando con la naturaleza.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Dirección</p>
                  <p className="text-sm text-gray-500">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                  >
                    Abrir en Google Maps ({plusCode})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Teléfono</p>
                  <p className="text-sm text-gray-500">+54 9 11 1234-5678</p>
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

            <div className="flex gap-3 pt-6">
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-brand transition-colors">
                <Instagram className="text-white" size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="relative h-[600px]">
                <iframe
                  title="Mapa Bubalco"
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="bg-white/90 backdrop-blur rounded-xl border border-gray-200 p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs tracking-wider text-gray-400 uppercase">Bubalcó</p>
                      <p className="text-sm text-gray-700 truncate">Allen, Río Negro — {plusCode}</p>
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
                    >
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
