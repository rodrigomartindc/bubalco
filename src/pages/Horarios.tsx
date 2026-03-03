import { Clock, Sun, Moon, Calendar, Info, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Horarios() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-brand-dark">
      <div className="min-h-screen flex flex-col justify-center pt-16 pb-4 px-3 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4">
            Horarios de Visita
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Planificá tu visita a Bubalcó Patagonia
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-3 md:gap-6 mb-3 md:mb-6">
          <div className={`bg-white/10 backdrop-blur p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Sun className="text-white/50" size={18} />
              <h3 className="text-sm md:text-base font-medium text-white">Lunes a Viernes</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-white/40" size={14} />
                  <span className="text-white text-sm">Boletería:</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-white">12:00 - 18:00</p>
              </div>

              <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="text-white/40" size={14} />
                  <span className="text-white text-sm">Cierre del Parque:</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-white">20:00 hs</p>
              </div>
            </div>
          </div>

          <div className={`bg-white/10 backdrop-blur p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Calendar className="text-white/50" size={18} />
              <h3 className="text-sm md:text-base font-medium text-white">Fines de Semana</h3>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-white/40" size={14} />
                  <span className="text-white text-sm">Boletería:</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-white">10:00 - 17:00</p>
              </div>

              <div className="bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="text-white/40" size={14} />
                  <span className="text-white text-sm">Cierre del Parque:</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-white">19:00 hs</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white/10 backdrop-blur p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="flex items-center justify-between bg-white/5 p-3 md:p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-2">
              <Moon className="text-white/40" size={14} />
              <span className="text-white text-sm">Días Martes:</span>
            </div>
            <p className="text-lg md:text-xl font-medium text-white/60">CERRADO</p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className={`bg-white/10 backdrop-blur p-6 md:p-10 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-6 md:mb-8 flex items-center justify-center gap-2">
              <Info className="text-white/50" size={20} />
              Recomendaciones para tu Visita
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-white/60">
              <div>
                <h4 className="text-sm text-white mb-4">Antes de Venir</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
                    <span>Llegá temprano para disfrutar más tiempo en el parque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
                    <span>Verificá el clima antes de tu visita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
                    <span>Usá ropa y calzado cómodo para caminar</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-white mb-4">Durante tu Visita</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
                    <span>Respetá los horarios de alimentación de los animales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
                    <span>Mantené la distancia con los animales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand mt-0.5">·</span>
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
