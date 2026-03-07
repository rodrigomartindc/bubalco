import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { asset } from '../utils/asset';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const years = useCountUp(30, 2000, isVisible);
  const hectares = useCountUp(34, 2000, isVisible);
  const hours = useCountUp(3, 1500, isVisible);

  return (
    <section id="quienes-somos" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:overflow-hidden">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative bg-white overflow-hidden">
          <div className="relative z-10 w-full px-6 py-10">
            <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Quiénes Somos</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-5 leading-tight">
                Más que un refugio,<br />una familia
              </h2>
              <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed mb-8">
                Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
                a la comunidad sobre la importancia de la conservación.
              </p>
              <Link to="/nosotros" className="group inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mb-10">
                Conocer más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                {[
                  { value: `+${years}`, label: 'Años en conservación' },
                  { value: `${hectares}`, label: 'Hectáreas en Patagonia' },
                  { value: `${hours}`, label: 'Horas de recorrido' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-medium text-gray-900">{s.value}</p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-tight">{s.label}</p>
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
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Quiénes Somos</p>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Más que un refugio,<br />una familia
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
              Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
              a la comunidad sobre la importancia de la conservación.
            </p>
            <Link to="/nosotros" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mb-12">
              Conocer más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              {[
                { value: `+${years}`, label: 'Años trabajando en conservación' },
                { value: `${hectares}`, label: 'Hectáreas en la Patagonia Argentina' },
                { value: `${hours}`, label: 'Horas de recorrido' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-medium text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img src={asset('/tucan-bubalco.jpg')} alt="Tucán en Bubalcó Patagonia" className="w-full max-w-md rounded-2xl object-cover h-[480px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
