import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';
import { ROUTES } from '../data/site';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:bg-white md:pt-[130px]">
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
                <Link to={ROUTES.bioparque} className="px-7 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors text-center">
                  Descubrí el Bioparque
                </Link>
                <Link to={ROUTES.nuestroTrabajo} className="px-7 py-3 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors text-center">
                  Nuestro trabajo en conservación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight animate-fade-in-up delay-100">
              Refugio, rescate y conservación<br />en la Patagonia Argentina
            </h1>
            <p className="text-base text-gray-500 mb-10 animate-fade-in-up delay-200">
              Inspirando a salvar la fauna silvestre para el futuro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in-up delay-300">
              <Link to={ROUTES.bioparque} className="px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                Descubrí el Bioparque
              </Link>
              <Link to={ROUTES.nuestroTrabajo} className="px-8 py-4 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors">
                Nuestro trabajo en conservación
              </Link>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up delay-200">
            <img src={asset('/hero-ciervos.jpg')} alt="Fauna silvestre en Bubalcó Patagonia" className="w-full max-w-md rounded-2xl object-cover h-[480px]" />
          </div>
        </div>
        <div className="flex justify-center pb-4 animate-fade-in-up delay-500">
          <ChevronDown size={28} strokeWidth={1.5} className="text-gray-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
