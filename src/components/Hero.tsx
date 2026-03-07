import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:bg-white">
      {/* Mobile */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full bg-white">
          <div className="relative z-10 px-6 py-12 w-full h-full flex flex-col items-center justify-center">
            <div className={`text-center flex-1 flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-6 animate-fade-in-up delay-100">
                <img src={asset('/logos/isologo-colores.png')} alt="Bubalcó" className="h-20 mx-auto" />
              </div>
              <h1 className="text-2xl font-medium text-gray-900 mb-3 animate-fade-in-up delay-200">
                Rescate, rehabilitación y conservación de fauna silvestre
              </h1>
              <p className="text-sm text-gray-500 mb-8 animate-fade-in-up delay-300">Bubalcó Patagonia</p>
              <div className="flex flex-col gap-3 items-stretch animate-fade-in-up delay-400">
                <button onClick={() => scrollToSection('recorrido')} className="px-7 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                  Explorar el Bioparque
                </button>
                <Link to="/nosotros" className="px-7 py-4 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors text-center">
                  Nuestro trabajo en conservación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative z-10 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-8 animate-fade-in-up delay-100">
            <img src={asset('/logos/isologo-colores.png')} alt="Bubalcó" className="h-28 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
            Rescate, rehabilitación y conservación<br />de fauna silvestre
          </h1>
          <p className="text-base text-gray-500 mb-12 animate-fade-in-up delay-300">Bubalcó Patagonia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <button onClick={() => scrollToSection('recorrido')} className="px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Explorar el Bioparque
            </button>
            <Link to="/nosotros" className="px-8 py-4 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors">
              Nuestro trabajo en conservación
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
