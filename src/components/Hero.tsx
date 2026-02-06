import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:overflow-hidden md:bg-gradient-to-br md:from-emerald-900 md:via-teal-800 md:to-emerald-950 md:animate-gradient">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950 animate-gradient">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-16 left-6 w-56 h-56 bg-emerald-500 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute bottom-16 right-6 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-green-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 px-6 py-12 w-full h-full flex items-center justify-center">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-7 animate-fade-in-up delay-100">
                <img
                  src="https://bubalco.com/wp-content/uploads/2023/05/bubalco-logo-dark.webp"
                  alt="Bubalco"
                  className="h-20 mx-auto filter brightness-0 invert"
                />
              </div>

              <p className="text-lg text-emerald-100 mb-10 font-light animate-fade-in-up delay-200">
                Rescate, rehabilitación y conservación de la fauna silvestre
              </p>

              <div className="flex flex-col gap-3 justify-center items-stretch animate-fade-in-up delay-400">
                <button
                  onClick={() => scrollToSection('donaciones')}
                  className="group px-7 py-4 bg-white text-emerald-900 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">Apoyar Ahora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
                <button
                  onClick={() => scrollToSection('bioparque')}
                  className="px-7 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/20 transition-all"
                >
                  Explorar Bioparque
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <button
              onClick={() => scrollToSection('donaciones')}
              className="text-white/80 hover:text-white transition-colors animate-bounce"
              aria-label="Scroll"
            >
              <ChevronDown size={36} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="hidden md:block relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8 animate-fade-in-up delay-100">
            <img
              src="https://bubalco.com/wp-content/uploads/2023/05/bubalco-logo-dark.webp"
              alt="Bubalco"
              className="h-24 md:h-32 mx-auto filter brightness-0 invert"
            />
          </div>

          <p className="text-xl md:text-3xl text-emerald-100 mb-12 font-light animate-fade-in-up delay-200">
            Rescate, rehabilitación y conservación de la fauna silvestre
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('donaciones')}
              className="group px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Apoyar Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection('bioparque')}
              className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Explorar Bioparque
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('donaciones')}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={40} strokeWidth={2} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
