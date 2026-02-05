import { ChevronDown, Sparkles } from 'lucide-react';
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
    <section ref={ref} className="scroll-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950 animate-gradient">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="text-emerald-300" size={18} />
            <span className="text-emerald-100 text-sm font-medium">Refugio de Vida Silvestre</span>
          </div>

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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={40} strokeWidth={2} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
