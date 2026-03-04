import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const ParkMap = () => {
  const { ref, isVisible } = useScrollAnimation();

  const zones = [
    'Área Silvestre',
    'Parque de Loros',
    'Primates',
    'Llanura Pampeana',
    'Felinos',
    'Invernadero y Fosas',
    'Costa de Río',
    'Aviario',
    'Corrales',
  ];

  return (
    <section id="recorrido" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="px-4 py-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3 text-center">Recorrido</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">Mapa del Bioparque</h2>

              <img
                src={asset('/mapa-bubalco.jpg')}
                alt="Mapa del Bioparque Bubalcó Patagonia"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Recorrido</p>

            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Mapa del
              <span className="block">Bioparque</span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed mb-10">
              Recorré nuestras 9 zonas temáticas a orillas del Río Negro.
              Cada área está diseñada para el bienestar de las especies que la habitan.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {zones.map((zone, i) => (
                <div key={zone} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand/10 text-brand text-xs flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600">{zone}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <img
              src={asset('/mapa-bubalco.jpg')}
              alt="Mapa del Bioparque Bubalcó Patagonia"
              className="w-full rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkMap;
