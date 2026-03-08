import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Donations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="donaciones" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white">
      {/* Mobile: Donaciones + Bioparque en 1 card, mitad y mitad */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="h-full flex flex-col">
            {/* Mitad superior: Donaciones */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Tu apoyo salva vidas</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Cada aporte marca la diferencia
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Tu donación nos ayuda a continuar nuestro trabajo de rescate y conservación.
              </p>
              <Link
                to="/donaciones"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors"
              >
                Donaciones <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Separador */}
            <div className="mx-6 border-t border-gray-100" />

            {/* Mitad inferior: Bioparque */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center bg-brand-dark rounded-b-[28px]">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-3">Bioparque Bubalcó</p>
              <h3 className="text-xl font-medium text-white mb-2">
                Fundación Bubalcó Patagonia
              </h3>
              <p className="text-sm text-white/50 mb-6">
                Visitas educativas · Grupos escolares
              </p>
              <Link
                to="/bioparque"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors"
              >
                Explorar Bioparque <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: solo Donaciones */}
      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Tu apoyo salva vidas</p>

          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Cada aporte marca la diferencia
          </h2>

          <p className="text-base text-gray-500 leading-relaxed mb-10">
            Más de 150 animales dependen de tu generosidad cada día. Tu donación
            nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación.
          </p>

          <Link
            to="/donaciones"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors"
          >
            Donaciones <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Donations;
