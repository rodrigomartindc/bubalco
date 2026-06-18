import { MAP_1, MAP_2 } from '../data/images';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import OptimizedPicture from './OptimizedPicture';

export default function MapsBlock() {
  const { ref, reveal } = useScrollAnimation();

  return (
    <section id="recorrido" data-slide-label="Recorrido" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:pt-[130px]">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="px-6 py-8">
            <div className={`text-center ${reveal()}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Dónde Estamos</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-3">En el corazón<br />de la Patagonia norte</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                En una isla de Río Negro, cerca del límite con Neuquén, rodeados de naturaleza y lejos de lo urbano. Una ubicación estratégica que nos permite trabajar directamente en los ecosistemas que protegemos.
              </p>
              <div className="flex gap-3">
                <OptimizedPicture image={MAP_1} className="flex-1 min-w-0 rounded-xl object-cover" loading="lazy" />
                <OptimizedPicture image={MAP_2} className="flex-1 min-w-0 rounded-xl object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto min-h-[calc(100vh-130px)] flex flex-col justify-start pt-10 pb-4">
        <div className={`text-center mb-6 lg:mb-8 ${reveal()}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Dónde Estamos</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">En el corazón de la Patagonia norte</h2>
        </div>
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full ${reveal()}`}>
          <div className="flex gap-4 justify-center lg:justify-end">
            <OptimizedPicture image={MAP_1} className="w-full max-w-[240px] lg:max-w-[280px] h-[220px] lg:h-[280px] rounded-2xl object-contain" loading="lazy" />
            <OptimizedPicture image={MAP_2} className="w-full max-w-[240px] lg:max-w-[280px] h-[220px] lg:h-[280px] rounded-2xl object-contain" loading="lazy" />
          </div>
          <p className="text-base text-gray-500 leading-relaxed text-center lg:text-left">
            Nos encontramos en una isla de Río Negro, cerca del límite con Neuquén, rodeados de naturaleza y lejos de lo urbano. Una ubicación estratégica que nos permite trabajar directamente en los ecosistemas que protegemos.
          </p>
        </div>
      </div>
    </section>
  );
}
