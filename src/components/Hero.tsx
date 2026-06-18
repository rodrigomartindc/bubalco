import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ROUTES } from '../data/site';
import { HERO_CIERVOS } from '../data/images';
import OptimizedPicture from './OptimizedPicture';

const Hero = () => {
  return (
    <section id="inicio" data-slide-label="Inicio" className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:pt-[130px]">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center min-h-[calc(100vh-130px)]">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              Refugio, rescate y conservación<br />en la Patagonia Argentina
            </h1>
            <p className="text-base text-gray-500 mb-10">
              Inspirando a salvar la fauna silvestre para el futuro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link to={ROUTES.bioparque} className="px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                Descubrí el Bioparque
              </Link>
              <Link to={ROUTES.nuestroTrabajo} className="px-8 py-4 border border-gray-200 text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-50 transition-colors">
                Nuestro trabajo en conservación
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <OptimizedPicture
              image={HERO_CIERVOS}
              className="w-full max-w-[520px] h-[420px] object-cover object-center"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <ChevronDown size={28} strokeWidth={1.5} className="text-gray-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
