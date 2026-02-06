import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();
  const plusCode = 'W6RR+5X Allen, Río Negro';
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`;

  return (
    <section id="ubicacion" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gradient-to-br md:from-gray-50 md:to-emerald-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="w-full px-6 py-8">
            <div className={`space-y-5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                  <MapPin className="text-emerald-600" size={18} />
                  <span className="text-emerald-700 text-sm font-semibold">Ubicación</span>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
                  Vení a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
                    conocernos
                  </span>
                </h2>

                <p className="text-base text-gray-600 leading-relaxed">
                  Estamos en Allen, Río Negro, Patagonia Argentina.
                  <span className="block mt-2">
                    Te esperamos para vivir una experiencia única conectando con la naturaleza.
                  </span>
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-xl">
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
                  <p className="text-sm font-bold text-gray-900">Dirección</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                  >
                    Abrir en Google Maps ({plusCode})
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-emerald-100 bg-white p-4 flex items-start gap-3">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Phone className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Teléfono</p>
                    <p className="text-sm text-gray-600">+54 9 11 1234-5678</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-white p-4 flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-2xl">
                    <Mail className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Email</p>
                    <p className="text-sm text-gray-600">info@bubalco.com</p>
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
                Estamos en Allen, Río Negro, Patagonia Argentina.
                <span className="block mt-2">
                  Te esperamos para vivir una experiencia única conectando con la naturaleza.
                </span>
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
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-sm font-semibold text-gray-600 hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                  >
                    Abrir en Google Maps ({plusCode})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <Phone className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Teléfono</p>
                  <p className="text-gray-600">
                    +54 9 11 1234-5678
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
                    info@bubalco.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="#" className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                <Instagram className="text-white" size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                <Facebook className="text-white" size={24} />
              </a>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-2xl">
              <div className="relative h-[600px]">
                <iframe
                  title="Mapa Bubalco"
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="bg-white/85 backdrop-blur rounded-2xl border border-emerald-100 p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-black tracking-wide text-emerald-800/80">BUBALCO</p>
                      <p className="text-gray-700 font-semibold truncate">Allen, Río Negro — {plusCode}</p>
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
