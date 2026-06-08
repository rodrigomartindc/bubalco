import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

export default function MapsBlock() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recorrido" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="px-6 py-8">
            <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Dónde Estamos</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-3">En el corazón<br />de la Patagonia norte</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                En una isla de Río Negro, cerca del límite con Neuquén, rodeados de naturaleza y lejos de lo urbano. Una ubicación estratégica que nos permite trabajar directamente en los ecosistemas que protegemos.
              </p>
              <div className="flex gap-3">
                <img src={asset('/bubalco-map-1.png')} alt="Mapa Bubalcó Patagonia 1" className="flex-1 min-w-0 rounded-xl object-cover" />
                <img src={asset('/bubalco-map-2.png')} alt="Mapa Bubalcó Patagonia 2" className="flex-1 min-w-0 rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Dónde Estamos</p>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">En el corazón de la Patagonia norte</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Nos encontramos en una isla de Río Negro, cerca del límite con Neuquén, rodeados de naturaleza y lejos de lo urbano. Una ubicación estratégica que nos permite trabajar directamente en los ecosistemas que protegemos.
            </p>
          </div>
          <div className="flex justify-center gap-4 lg:gap-5 max-w-2xl mx-auto">
            <img src={asset('/bubalco-map-1.png')} alt="Mapa Bubalcó Patagonia 1" className="w-full max-w-[244px] rounded-2xl object-cover" />
            <img src={asset('/bubalco-map-2.png')} alt="Mapa Bubalcó Patagonia 2" className="w-full max-w-[244px] rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
