import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

export default function MapsBlock() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recorrido" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="px-4 py-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3 text-center">Dónde Estamos</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">Conocé el recorrido</h2>
              <img src={asset('/mapa-bubalco.jpg')} alt="Mapa del Bioparque Bubalcó Patagonia" className="w-full rounded-2xl mb-4" />
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                34 hectáreas a orillas del Río Negro, en la Patagonia Argentina. Un recorrido de 3 horas por 9 zonas temáticas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Dónde Estamos</p>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">Conocé el<span className="block">recorrido</span></h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              34 hectáreas a orillas del Río Negro, en Allen, Patagonia Argentina.
              Un recorrido de 3 horas por 9 zonas temáticas diseñadas para el bienestar de las especies que las habitan.
            </p>
            <p className="text-sm text-gray-400">
              Área Silvestre · Parque de Loros · Primates · Llanura Pampeana · Felinos · Invernadero y Fosas · Costa de Río · Aviario · Corrales
            </p>
          </div>
          <div>
            <img src={asset('/mapa-bubalco.jpg')} alt="Mapa del Bioparque Bubalcó Patagonia" className="w-full rounded-2xl shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
