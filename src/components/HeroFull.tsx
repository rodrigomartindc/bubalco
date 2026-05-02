import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const HeroFull = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section md:hidden">
      <div className="hero-full-card">
        <div className={`h-full flex flex-col bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden flex-1">
            <img
              src={asset('/hero-ciervos.jpg')}
              alt="Fauna silvestre en Bubalcó Patagonia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-4 text-center flex-shrink-0">
            <h1 className="text-xl font-medium text-gray-900 mb-2">
              Refugio, rescate y conservación en la Patagonia Argentina
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Inspirando a salvar la fauna silvestre para el futuro
            </p>
            <div className="flex flex-col gap-3 items-stretch w-full">
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
    </section>
  );
};

export default HeroFull;
