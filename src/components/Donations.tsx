import { Heart, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Donations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="donaciones" ref={ref} className="scroll-section min-h-screen flex items-center relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent"></div>

      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
              <Heart className="text-emerald-600" size={18} fill="currentColor" />
              <span className="text-emerald-700 text-sm font-semibold">Tu apoyo salva vidas</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Cada aporte
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
                marca la diferencia
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Más de 150 animales dependen de tu generosidad cada día. Tu donación
              nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación.
            </p>

            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">150+</p>
                <p className="text-sm text-gray-600 mt-1">Animales al cuidado</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Atención veterinaria</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">$5M</p>
                <p className="text-sm text-gray-600 mt-1">Costo anual</p>
              </div>
            </div>

            <button className="group flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105">
              <span className="text-lg">Donar Ahora</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="group relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-3xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-6 right-6">
                <Zap size={32} className="opacity-50" />
              </div>
              <div className="relative">
                <p className="text-sm font-semibold mb-2 opacity-90">Único</p>
                <h3 className="text-3xl font-black mb-4">Donación Puntual</h3>
                <p className="text-emerald-50 mb-6">
                  Un aporte único que tiene un impacto inmediato en la vida de nuestros animales rescatados.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>Elegir monto</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-900 p-8 rounded-3xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border-2 border-emerald-400">
              <div className="absolute -top-3 -right-3 bg-amber-600 text-white text-xs font-black px-4 py-1 rounded-full">
                MÁS POPULAR
              </div>
              <div className="absolute top-6 right-6">
                <Heart size={32} className="text-emerald-400 opacity-50" fill="currentColor" />
              </div>
              <div className="relative">
                <p className="text-sm font-semibold mb-2 text-emerald-400">Mensual</p>
                <h3 className="text-3xl font-black mb-4">Padrino/Madrina</h3>
                <p className="text-gray-300 mb-6">
                  Conviértete en guardián permanente. Tu apoyo mensual garantiza cuidado continuo.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <span>Comenzar ahora</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-amber-700 to-amber-800 p-8 rounded-3xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="absolute top-6 right-6">
                <TrendingUp size={32} className="opacity-50" />
              </div>
              <div className="relative">
                <p className="text-sm font-semibold mb-2 opacity-90">Especial</p>
                <h3 className="text-3xl font-black mb-4">Otras Formas de Ayudar</h3>
                <p className="text-amber-50 mb-6">
                  Transferencias, donación de alimentos, medicamentos o materiales para el bioparque.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>Ver opciones</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
