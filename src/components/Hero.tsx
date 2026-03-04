import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { asset } from '../utils/asset';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const years = useCountUp(30, 2000, isVisible);
  const hectares = useCountUp(34, 2000, isVisible);
  const hours = useCountUp(3, 1500, isVisible);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asset('/tucan-bubalco.jpg')})` }} />
      <div className="absolute inset-0 bg-brand-dark/80" />

      {/* Mobile */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asset('/tucan-bubalco.jpg')})` }} />
          <div className="absolute inset-0 bg-brand-dark/80" />
          <div className="relative z-10 px-6 py-12 w-full h-full flex flex-col items-center justify-center">
            <div className={`text-center flex-1 flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl font-medium text-white mb-4 animate-fade-in-up delay-100">
                Rescate, rehabilitación y conservación de fauna silvestre
              </h1>
              <p className="text-sm text-white/60 mb-8 animate-fade-in-up delay-200">Bubalcó Patagonia</p>
              <div className="flex flex-col gap-3 items-stretch animate-fade-in-up delay-300">
                <button onClick={() => scrollToSection('recorrido')} className="px-7 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
                  Explorar el Bioparque
                </button>
                <Link to="/nosotros" className="px-7 py-4 border border-white/30 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors text-center">
                  Nuestro trabajo en conservación
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mt-8 animate-fade-in-up delay-400">
              {[
                { value: `+${years}`, label: 'Años en conservación' },
                { value: `${hectares}`, label: 'Hectáreas en Patagonia' },
                { value: `${hours}`, label: 'Horas de recorrido' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-medium text-white">{s.value}</p>
                  <p className="text-[10px] text-white/50 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up delay-100">
            Rescate, rehabilitación y conservación de fauna silvestre
          </h1>
          <p className="text-base text-white/60 mb-12 animate-fade-in-up delay-200">Bubalcó Patagonia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
            <button onClick={() => scrollToSection('recorrido')} className="px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
              Explorar el Bioparque
            </button>
            <Link to="/nosotros" className="px-8 py-4 border border-white/30 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors">
              Nuestro trabajo en conservación
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-400">
            {[
              { value: `+${years}`, label: 'Años trabajando en conservación' },
              { value: `${hectares}`, label: 'Hectáreas en la Patagonia Argentina' },
              { value: `${hours}`, label: 'Horas de recorrido' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-medium text-white">{s.value}</p>
                <p className="text-xs text-white/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
