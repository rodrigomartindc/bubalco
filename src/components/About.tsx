import { Shield, GraduationCap, Heart, Leaf, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quienes-somos" ref={ref} className="scroll-section min-h-screen flex items-center relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-50 to-transparent"></div>

      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <Sparkles className="text-emerald-600" size={18} />
            <span className="text-emerald-700 text-sm font-semibold">Nuestra Misión</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Más que un refugio,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              una familia
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
            a la comunidad sobre la importancia de la conservación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white hover:scale-105 transition-transform ${isVisible ? 'animate-scale-in delay-100' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
              <Shield size={150} />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Refugio</h3>
              <p className="text-white/90 leading-relaxed">
                Hogar seguro para animales que no pueden volver a su hábitat natural.
              </p>
            </div>
          </div>

          <div className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:scale-105 transition-transform ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
              <GraduationCap size={150} />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Educación</h3>
              <p className="text-white/90 leading-relaxed">
                Concientizamos sobre conservación ambiental y respeto por la vida silvestre.
              </p>
            </div>
          </div>

          <div className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-amber-700 to-amber-800 text-white hover:scale-105 transition-transform ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
              <Heart size={150} />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black mb-3">Rescate</h3>
              <p className="text-white/90 leading-relaxed">
                Respuesta 24/7 a emergencias, rescatando animales en peligro.
              </p>
            </div>
          </div>

          <div className={`group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white hover:scale-105 transition-transform ${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
              <Leaf size={150} />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Conservación</h3>
              <p className="text-white/90 leading-relaxed">
                Proyectos de preservación de especies nativas y sus ecosistemas.
              </p>
            </div>
          </div>
        </div>

        <div className={`bg-gray-900 rounded-3xl overflow-hidden ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
                Nuestro Impacto
              </h3>
              <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                Desde 2010, hemos transformado vidas y creado conciencia sobre la importancia
                de proteger nuestra biodiversidad.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500 flex-shrink-0">
                    1,500+
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-base md:text-lg">Animales Rescatados</p>
                    <p className="text-gray-400 text-sm md:text-base">En los últimos 15 años</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 flex-shrink-0">
                    50K+
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-base md:text-lg">Visitantes Educados</p>
                    <p className="text-gray-400 text-sm md:text-base">Programas de concientización</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 flex-shrink-0">
                    200+
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-base md:text-lg">Especies Protegidas</p>
                    <p className="text-gray-400 text-sm md:text-base">Fauna nativa en conservación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 md:p-12 lg:p-16 flex items-center">
              <div className="w-full">
                <h4 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-8">Nuestros Valores</h4>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: 'Respeto por la vida', desc: 'Cada animal merece dignidad y cuidado' },
                    { title: 'Compromiso', desc: 'Dedicación absoluta a nuestra causa' },
                    { title: 'Transparencia', desc: 'Comunicación abierta con la comunidad' },
                    { title: 'Profesionalismo', desc: 'Excelencia en cada aspecto' }
                  ].map((value, index) => (
                    <div key={index} className="flex gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div className="min-w-0">
                        <p className="text-white font-bold text-base md:text-lg break-words">{value.title}</p>
                        <p className="text-emerald-100 text-sm md:text-base break-words">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
