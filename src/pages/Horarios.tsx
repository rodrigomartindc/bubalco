import { Clock, Sun, Moon, Calendar, Info, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Horarios() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-gray-900">
      <div className="min-h-screen flex flex-col justify-center pt-16 pb-4 px-3 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4">
            Horarios de Visita
          </h1>
          <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto">
            Planificá tu visita a Bubalcó Patagonia
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
          <div className={`glass-dark p-4 md:p-6 rounded-xl md:rounded-3xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg">
                <Sun className="text-emerald-400" size={20} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Lunes a Viernes</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="bg-emerald-900/30 p-3 md:p-4 rounded-lg border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-emerald-400" size={16} />
                  <span className="text-white font-bold text-sm md:text-base">Boletería:</span>
                </div>
                <p className="text-xl md:text-2xl font-black text-emerald-400">12:00 - 18:00</p>
              </div>

              <div className="bg-emerald-800/30 p-3 md:p-4 rounded-lg border border-emerald-600/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="text-emerald-500" size={16} />
                  <span className="text-white font-bold text-sm md:text-base">Cierre del Parque:</span>
                </div>
                <p className="text-xl md:text-2xl font-black text-emerald-500">20:00 hs</p>
              </div>
            </div>
          </div>

          <div className={`glass-dark p-4 md:p-6 rounded-xl md:rounded-3xl ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-amber-700/25 rounded-lg">
                <Calendar className="text-amber-500" size={20} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Fines de Semana</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="bg-amber-900/25 p-3 md:p-4 rounded-lg border border-amber-700/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-amber-500" size={16} />
                  <span className="text-white font-bold text-sm md:text-base">Boletería:</span>
                </div>
                <p className="text-xl md:text-2xl font-black text-amber-500">10:00 - 17:00</p>
              </div>

              <div className="bg-amber-800/25 p-3 md:p-4 rounded-lg border border-amber-600/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="text-amber-600" size={16} />
                  <span className="text-white font-bold text-sm md:text-base">Cierre del Parque:</span>
                </div>
                <p className="text-xl md:text-2xl font-black text-amber-600">19:00 hs</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`glass-dark p-3 md:p-6 rounded-xl md:rounded-3xl ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="flex items-center justify-between bg-stone-900/50 p-3 md:p-4 rounded-lg border-2 border-stone-700/30">
            <div className="flex items-center gap-2">
              <Moon className="text-stone-400" size={16} />
              <span className="text-white font-bold text-sm md:text-base">Días Martes:</span>
            </div>
            <p className="text-xl md:text-2xl font-black text-stone-400">CERRADO</p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className={`bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-emerald-500/20 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center justify-center gap-2">
              <Info className="text-emerald-400" size={28} />
              Recomendaciones para tu Visita
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg md:text-xl">Antes de Venir</h4>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>Llegá temprano para disfrutar más tiempo en el parque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>Verificá el clima antes de tu visita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>Usá ropa y calzado cómodo para caminar</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg md:text-xl">Durante tu Visita</h4>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>Respetá los horarios de alimentación de los animales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>Mantené la distancia con los animales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 text-xl">•</span>
                    <span>No arrojes basura, cuidá nuestro espacio natural</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
