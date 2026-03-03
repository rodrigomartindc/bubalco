import { Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Volunteering = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="voluntariados" ref={ref} className="scroll-section min-h-screen flex items-center relative bg-brand-dark overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-white/40 uppercase mb-6">Sumate</p>

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Sé parte del
            <span className="block">cambio</span>
          </h2>

          <p className="text-base text-white/50 max-w-3xl mx-auto">
            Únete a nuestro equipo de voluntarios y contribuye directamente al bienestar
            de los animales rescatados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`bg-white/10 backdrop-blur p-10 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-left delay-100' : 'opacity-0'}`}>
            <Users size={32} className="text-white/50 mb-6" />
            <h3 className="text-2xl font-medium text-white mb-8">¿Por qué ser voluntario?</h3>

            <div className="space-y-5">
              {[
                'Impacto directo en el bienestar animal',
                'Aprendizaje sobre conservación',
                'Comunidad de personas apasionadas',
                'Desarrollo de nuevas habilidades',
                'Certificación por tu labor'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-5 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="group bg-brand p-8 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
              <Heart size={28} className="text-white/70 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Cuidado Animal</h4>
              <p className="text-sm text-white/60 mb-4">
                Asistencia en alimentación, limpieza y cuidado diario
              </p>
              <div className="flex items-center gap-2 text-sm text-white">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 hover:shadow-lg transition-all cursor-pointer">
              <Users size={28} className="text-white/70 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Educación Ambiental</h4>
              <p className="text-sm text-white/60 mb-4">
                Guía de visitas, talleres y actividades de concientización
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 hover:shadow-lg transition-all cursor-pointer">
              <Users size={28} className="text-white/70 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Otros Voluntariados</h4>
              <p className="text-sm text-white/60 mb-4">
                Mantenimiento, administración, redes sociales y eventos
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white rounded-2xl p-10 text-center ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
            ¿Listo para unirte?
          </h3>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            Completá el formulario y nos pondremos en contacto para comenzar este increíble viaje juntos
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
            <span>Inscribirme como Voluntario</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
