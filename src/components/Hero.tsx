import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:overflow-hidden md:bg-brand-dark">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full overflow-hidden bg-brand-dark">
          <div className="relative z-10 px-6 py-12 w-full h-full flex items-center justify-center">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-7 animate-fade-in-up delay-100">
                <img
                  src={asset("/logos/logo-blanco.png")}
                  alt="Bubalcó Patagonia"
                  className="h-16 mx-auto"
                />
              </div>

              <p className="text-base text-white/80 mb-10 font-light animate-fade-in-up delay-200">
                Rescate, rehabilitación y conservación de la fauna silvestre
              </p>

              <div className="flex flex-col gap-3 justify-center items-stretch animate-fade-in-up delay-400">
                <button
                  onClick={() => scrollToSection('donaciones')}
                  className="px-7 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors"
                >
                  Apoyar Ahora
                </button>
                <button
                  onClick={() => scrollToSection('quienes-somos')}
                  className="px-7 py-4 border border-white/30 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors"
                >
                  Explorar Bioparque
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <button
              onClick={() => scrollToSection('donaciones')}
              className="text-white/60 hover:text-white transition-colors animate-bounce"
              aria-label="Scroll"
            >
              <ChevronDown size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8 animate-fade-in-up delay-100">
            <img
              src={asset("/logos/logo-blanco.png")}
              alt="Bubalcó Patagonia"
              className="h-20 md:h-24 mx-auto"
            />
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-12 font-light animate-fade-in-up delay-200">
            Rescate, rehabilitación y conservación de la fauna silvestre
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('donaciones')}
              className="px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors"
            >
              Apoyar Ahora
            </button>
            <button
              onClick={() => scrollToSection('quienes-somos')}
              className="px-8 py-4 border border-white/30 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors"
            >
              Explorar Bioparque
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('donaciones')}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;
