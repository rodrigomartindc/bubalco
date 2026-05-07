import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

const HeroMinimal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-brand-dark" style={{ textAlign: 'left' }}>
          <div className={`h-full flex flex-col transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Top: logo + tagline */}
            <div className="px-7 pt-8 pb-1 flex items-center gap-3">
              <img src={asset('/logos/isologo-blanco.png')} alt="Bubalcó" className="h-9 opacity-70 flex-shrink-0" />
              <p className="text-xs tracking-[0.2em] text-white/30 uppercase">Fundación Bubalcó Patagonia</p>
            </div>

            {/* Middle: title + subtitle */}
            <div className="flex-1 flex flex-col justify-center px-7">
              <h1 className="text-3xl font-medium text-white leading-snug mb-4">
                Refugio, rescate<br />y conservación<br />
                <span className="text-brand">en la Patagonia</span>
              </h1>
              <p className="text-sm text-white/50 max-w-[260px]">
                Inspirando a salvar la fauna silvestre para el futuro
              </p>
            </div>

            {/* Bottom: CTAs */}
            <div className="px-7 pb-8">
              <div className="flex gap-3">
                <Link to="/bioparque" className="flex-1 py-3 bg-white text-gray-900 text-sm tracking-wide rounded-full text-center hover:bg-gray-100 transition-colors">
                  Bioparque
                </Link>
                <Link to="/nosotros" className="flex-1 py-3 border border-white/20 text-white text-sm tracking-wide rounded-full text-center hover:bg-white/5 transition-colors">
                  Conservación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
