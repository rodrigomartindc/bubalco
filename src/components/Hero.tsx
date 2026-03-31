import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:justify-center md:bg-white">
      {/* Mobile */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative h-full bg-white">
          <div className="relative z-10 px-6 py-10 w-full h-full flex flex-col items-center justify-center">
            <div className={`text-center flex-1 flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-gray-100 animate-fade-in-up delay-100">
                <img src={asset('/tucan-bubalco.jpg')} alt="Bubalcó" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-medium text-gray-900 mb-3 animate-fade-in-up delay-200">
                Refugio, rescate y conservación en la Patagonia Argentina
              </h1>
              <p className="text-sm text-gray-500 mb-8 animate-fade-in-up delay-300">
                Inspirando a salvar la fauna silvestre para el futuro
              </p>
              <div className="flex flex-col gap-3 items-stretch animate-fade-in-up delay-400">
                <Link to="/bioparque" className="px-7 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors text-center">
                  Descubrí el Bioparque
                </Link>
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
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 border-gray-100 animate-fade-in-up delay-100">
            <img src={asset('/tucan-bubalco.jpg')} alt="Bubalcó" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
            Refugio, rescate y conservación<br />en la Patagonia Argentina
          </h1>
          <p className="text-base text-gray-500 mb-12 animate-fade-in-up delay-300">
            Inspirando a salvar la fauna silvestre para el futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <Link to="/bioparque" className="px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Descubrí el Bioparque
            </Link>
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
