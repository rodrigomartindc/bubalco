import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { asset } from '../utils/asset';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const years = useCountUp(30, 2000, isVisible);
  const hectares = useCountUp(34, 2000, isVisible);
  const animals = useCountUp(500, 2000, isVisible);

  return (
    <section id="quienes-somos" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:overflow-hidden">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative bg-white overflow-hidden">
          <div className="relative z-10 w-full px-6 py-6">
            <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <img src={asset('/logos/isologo-colores.png')} alt="Fundación Bubalcó" className="h-11 mx-auto mb-2" />
              <p className="text-xs tracking-widest text-brand uppercase mb-2">Fundación Bubalcó</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-2 leading-tight">
                Aliados de la Naturaleza
              </h2>
              <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed mb-4">
                Protegemos a la fauna silvestre y trabajamos para que la comunidad comprenda y valore la importancia de conservarla.
              </p>

              <Link to="/nosotros" className="group inline-flex items-center gap-2 px-6 py-2.5 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mb-4">
                Conocer más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="space-y-2 w-full">
                {[
                  { value: `+${years}`, line1: 'Años trabajando', line2: 'en conservación' },
                  { value: `${hectares}`, line1: 'Hectáreas en', line2: 'Patagonia Argentina' },
                  { value: `${animals}`, line1: 'Animales protegidos', line2: 'en 2025' },
                ].map((s) => (
                  <div key={s.line1} className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-2 border border-gray-100">
                    <p className="text-3xl font-medium text-brand w-16 text-right flex-shrink-0">{s.value}</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-700 leading-tight">{s.line1}</p>
                      <p className="text-sm text-gray-500 leading-tight">{s.line2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <img src={asset('/logos/isologo-colores.png')} alt="Fundación Bubalcó" className="h-14 mb-4" />
            <p className="text-xs tracking-widest text-brand uppercase mb-6">Fundación Bubalcó</p>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Aliados de la Naturaleza
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
              Protegemos a la fauna silvestre y trabajamos para que la comunidad comprenda y valore la importancia de conservarla.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              {[
                { value: `+${years}`, label: 'Años trabajando en conservación' },
                { value: `${hectares}`, label: 'Hectáreas en la Patagonia Argentina' },
                { value: `${animals}`, label: 'Animales protegidos en 2025' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl font-medium text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-2">{s.label}</p>
                </div>
              ))}
            </div>

            <Link to="/nosotros" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Conocer más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={asset('/tucan-bubalco.jpg')} alt="Bubalcó Patagonia" className="w-full max-w-md rounded-2xl object-cover h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
