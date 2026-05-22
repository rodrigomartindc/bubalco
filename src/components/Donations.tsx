import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Donations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="donaciones" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white">
      {/* Mobile: Donación + Bioparque mitad y mitad */}
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-white">
          <div className="h-full flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Cómo ayudar</p>
              <h2 className="text-xl font-medium text-gray-900 mb-2">Tu donación sostiene nuestro trabajo</h2>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                Personas y empresas que creen en proteger la naturaleza y confían en lo que hacemos hacen posible este proyecto. Cada aporte ayuda a rescatar animales y a impulsar nuestros proyectos de conservación.
              </p>
              <Link to="/donaciones" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors">
                Quiero Donar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mx-6 border-t border-gray-100" />

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 text-center bg-brand-dark rounded-b-[28px]">
              <h2 className="text-xl font-medium text-white mb-2">Visitá el bioparque</h2>
              <p className="text-xs text-white/50 mb-3 leading-relaxed">
                Cada visita es una contribución directa al trabajo de la fundación. Al visitarnos ayudás a cuidar a los animales que viven con nosotros y a apoyar nuestros programas de educación.
              </p>
              <Link to="/bioparque" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
                Descubrí el Bioparque <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Cómo Ayudar</p>
        </div>
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Tu donación sostiene nuestro trabajo</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
              Personas y empresas que creen en proteger la naturaleza y confían en lo que hacemos hacen posible este proyecto. Cada aporte ayuda a rescatar animales y a impulsar nuestros proyectos de conservación.
            </p>
            <Link to="/donaciones" className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors">
              Quiero Donar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-brand-dark rounded-2xl p-10 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-medium text-white mb-4">Visitá el bioparque</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
              Cada visita es una contribución directa al trabajo de la fundación. Al visitarnos ayudás a cuidar a los animales que viven con nosotros y a apoyar nuestros programas de educación.
            </p>
            <Link to="/bioparque" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
              Descubrí el Bioparque <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
