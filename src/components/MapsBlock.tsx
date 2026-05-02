import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 flex items-center justify-center">
                <p className="text-xs text-gray-400">Mapa próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Dónde Estamos</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">En el corazón de la Patagonia norte</h2>
          <p className="text-base text-gray-500 leading-relaxed mb-10">
            Nos encontramos en una isla de Río Negro, cerca del límite con Neuquén, rodeados de naturaleza y lejos de lo urbano. Una ubicación estratégica que nos permite trabajar directamente en los ecosistemas que protegemos.
          </p>
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-20 flex items-center justify-center">
            <p className="text-base text-gray-400">Mapa próximamente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
