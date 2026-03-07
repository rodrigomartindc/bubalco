import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MapsBlock() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recorrido" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="px-6 py-10">
            <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Mapas</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Conocé el recorrido</h2>
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 flex items-center justify-center">
                <p className="text-sm text-gray-400">Imagen del mapa próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Mapas</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">Conocé el recorrido</h2>
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-dashed border-gray-200 bg-white p-20 flex items-center justify-center">
            <p className="text-base text-gray-400">Imagen del mapa próximamente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
