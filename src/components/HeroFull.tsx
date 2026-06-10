import { Link } from 'react-router-dom';
import { ROUTES } from '../data/site';
import { HERO_CIERVOS } from '../data/images';
import OptimizedPicture from './OptimizedPicture';

const HeroFull = () => {
  return (
    <section className="scroll-section md:hidden">
      <div className="hero-full-card">
        <div className="h-full flex flex-col bg-white">
          <div className="overflow-hidden" style={{ flex: '1 1 0', maxHeight: '48%' }}>
            <OptimizedPicture
              image={HERO_CIERVOS}
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-3 text-center flex-shrink-0">
            <h1 className="text-xl font-medium text-gray-900 mb-2">
              Refugio, rescate y conservación en la Patagonia Argentina
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Inspirando a salvar la fauna silvestre para el futuro
            </p>
            <div className="flex flex-col gap-3 items-stretch w-full">
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
    </section>
  );
};

export default HeroFull;
