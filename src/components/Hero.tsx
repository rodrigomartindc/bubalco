import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:bg-white">
      {/* Mobile */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full bg-white">
          <div className={`h-full flex flex-col transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-center animate-fade-in-up delay-100 mt-auto">
              <div className="w-[15rem] h-[15rem] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={asset('/hero-ciervos.jpg')}
                  alt="Fauna silvestre en Bubalcó Patagonia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start px-6 py-3 text-center mb-auto">
              <h1 className="text-xl font-medium text-gray-900 mb-2 animate-fade-in-up delay-200">
                Refugio, rescate y conservación en la Patagonia Argentina
              </h1>
              <p className="text-sm text-gray-500 mb-5 animate-fade-in-up delay-300">
                Inspirando a salvar la fauna silvestre para el futuro
              </p>
              <div className="flex flex-col gap-3 items-stretch w-full animate-fade-in-up delay-400">
                <Link to="/bioparque" className="px-7 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors text-center">
                  Descubrí el Bioparque
                </Link>
                <Link to="/nosotros" className="px-7 py-3 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors text-center">
                  Nuestro trabajo en conservación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex relative z-10 w-full min-h-screen flex-col">
        <div className="absolute inset-0">
          <img
            src={asset('/hero-ciervos.jpg')}
            alt="Fauna silvestre en Bubalcó Patagonia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className={`relative flex-1 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center max-w-4xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight animate-fade-in-up delay-100">
              Refugio, rescate y conservación<br />en la Patagonia Argentina
            </h1>
            <p className="text-lg text-white/70 mb-12 animate-fade-in-up delay-200">
              Inspirando a salvar la fauna silvestre para el futuro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
              <Link to="/bioparque" className="px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
                Descubrí el Bioparque
              </Link>
              <Link to="/nosotros" className="px-8 py-4 border border-white/40 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors">
                Nuestro trabajo en conservación
              </Link>
            </div>
          </div>
        </div>
        <div className="relative pb-8 flex justify-center animate-fade-in-up delay-500">
          <ChevronDown size={28} strokeWidth={1.5} className="text-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
