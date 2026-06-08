import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';
import { ROUTES } from '../data/site';

export default function BioparqueBlock() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center bg-brand-dark">
      <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="max-w-xl">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-6">Bioparque Bubalcó</p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Fundación Bubalcó Patagonia</h2>
            <p className="text-base text-white/50 leading-relaxed mb-4">
              Un espacio dedicado al rescate y conservación de fauna silvestre,
              abierto a la comunidad para educar y concientizar sobre la importancia de proteger nuestra biodiversidad.
            </p>
            <p className="text-sm text-white/40 mb-8">Visitas educativas · Grupos escolares · Actividades de concientización</p>
            <Link to={ROUTES.bioparque} className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
              Explorar Bioparque <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={asset('/logos/isologo-colores.png')} alt="Bubalcó Patagonia" className="w-48 md:w-64 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
