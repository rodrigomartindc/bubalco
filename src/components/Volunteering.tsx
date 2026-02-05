import { Users, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Volunteering = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="voluntariados" ref={ref} className="scroll-section min-h-screen flex items-center relative bg-gradient-to-br from-emerald-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="text-emerald-300" size={18} />
            <span className="text-emerald-100 text-sm font-medium">Sumate</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Sé parte del
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              cambio
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Únete a nuestro equipo de voluntarios y contribuye directamente al bienestar
            de los animales rescatados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`glass-dark p-12 rounded-3xl ${isVisible ? 'animate-fade-in-left delay-100' : 'opacity-0'}`}>
            <Users size={48} className="text-emerald-400 mb-6" />
            <h3 className="text-3xl font-black text-white mb-8">¿Por qué ser voluntario?</h3>

            <div className="space-y-6">
              {[
                'Impacto directo en el bienestar animal',
                'Aprendizaje sobre conservación',
                'Comunidad de personas apasionadas',
                'Desarrollo de nuevas habilidades',
                'Certificación por tu labor'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="group bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <Heart size={40} className="text-white mb-4" />
              <h4 className="text-2xl font-black text-white mb-3">Cuidado Animal</h4>
              <p className="text-emerald-50 mb-4">
                Asistencia en alimentación, limpieza y cuidado diario
              </p>
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <Users size={40} className="text-white mb-4" />
              <h4 className="text-2xl font-black text-white mb-3">Educación Ambiental</h4>
              <p className="text-emerald-50 mb-4">
                Guía de visitas, talleres y actividades de concientización
              </p>
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-amber-700 to-amber-800 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <Sparkles size={40} className="text-white mb-4" />
              <h4 className="text-2xl font-black text-white mb-3">Otros Voluntariados</h4>
              <p className="text-amber-50 mb-4">
                Mantenimiento, administración, redes sociales y eventos
              </p>
              <div className="flex items-center gap-2 text-white font-semibold">
                <span>Más información</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white rounded-3xl p-12 text-center ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            ¿Listo para unirte?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Completá el formulario y nos pondremos en contacto para comenzar este increíble viaje juntos
          </p>
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105">
            <span>Inscribirme como Voluntario</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
