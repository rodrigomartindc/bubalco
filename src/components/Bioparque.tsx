import { Calendar, Clock, Ticket, Sun, Moon, Info, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Bioparque = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="bioparque" ref={ref} className="scroll-section min-h-screen flex items-center relative bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <MapPin className="text-emerald-300" size={18} />
            <span className="text-emerald-100 text-sm font-medium">Visitanos</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Descubrí el
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Bioparque
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Una experiencia única donde aprenderás sobre conservación mientras conoces a
            nuestros residentes rescatados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className={`glass-dark p-8 rounded-3xl transform hover:scale-105 transition-all ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-2xl">
                <Calendar className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Horarios</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-900/30 p-4 rounded-2xl border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="text-emerald-400" size={18} />
                  <span className="text-white font-bold">Lunes a Viernes</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Boletería:</span>
                    <span className="text-white font-semibold">12:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cierre:</span>
                    <span className="text-white font-semibold">20:00 hs</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-800/30 p-4 rounded-2xl border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="text-amber-600" size={18} />
                  <span className="text-white font-bold">Fines de semana y feriados</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Boletería:</span>
                    <span className="text-white font-semibold">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cierre:</span>
                    <span className="text-white font-semibold">19:00 hs</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 bg-stone-900/50 rounded-2xl px-4 border border-stone-700/30">
                <div className="flex items-center gap-2">
                  <Moon className="text-stone-400" size={18} />
                  <span className="text-gray-300 font-medium">Martes</span>
                </div>
                <span className="text-stone-400 font-bold">CERRADO</span>
              </div>
            </div>
          </div>

          <div className={`glass-dark p-8 rounded-3xl transform hover:scale-105 transition-all ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-2xl">
                <Ticket className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Tarifas</h3>
            </div>

            <div className="space-y-3">
              <div className="py-3 px-5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold">Entrada General</p>
                    <p className="text-gray-400 text-xs">Mayores de 13 años</p>
                  </div>
                  <span className="text-3xl font-black text-emerald-400">$25.800</span>
                </div>
              </div>

              <div className="py-3 px-5 bg-emerald-600/10 rounded-2xl border border-emerald-600/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold">Menores y Jubilados</p>
                    <p className="text-gray-400 text-xs">Entre 4 y 12 años</p>
                  </div>
                  <span className="text-3xl font-black text-emerald-500">$21.000</span>
                </div>
              </div>

              <div className="py-3 px-5 bg-emerald-700/10 rounded-2xl border border-emerald-700/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold">Pase Anual</p>
                    <p className="text-gray-400 text-xs">Acceso ilimitado</p>
                  </div>
                  <span className="text-2xl font-black text-emerald-600">$108.200</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Paquetes Grupales</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="py-2 px-3 bg-amber-800/20 rounded-xl border border-amber-700/30 text-center">
                    <p className="text-amber-600 text-xs mb-1 font-semibold">Grupo I</p>
                    <p className="text-white font-bold text-sm">$83.700</p>
                    <p className="text-gray-500 text-xs">2 Gen + 2 Men</p>
                  </div>
                  <div className="py-2 px-3 bg-amber-700/20 rounded-xl border border-amber-600/30 text-center">
                    <p className="text-amber-500 text-xs mb-1 font-semibold">Grupo II</p>
                    <p className="text-white font-bold text-sm">$95.800</p>
                    <p className="text-gray-500 text-xs">2 Gen + 3 Men</p>
                  </div>
                  <div className="py-2 px-3 bg-amber-600/20 rounded-xl border border-amber-500/30 text-center">
                    <p className="text-amber-400 text-xs mb-1 font-semibold">Grupo III</p>
                    <p className="text-white font-bold text-sm">$129.300</p>
                    <p className="text-gray-500 text-xs">6 Generales</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between items-center py-2 px-4 bg-amber-700/15 rounded-xl border border-amber-600/25">
                  <span className="text-white font-semibold text-sm">Menores de 4</span>
                  <span className="text-amber-500 font-black text-sm">GRATIS</span>
                </div>
                <div className="flex justify-between items-center py-2 px-4 bg-stone-700/20 rounded-xl border border-stone-600/30">
                  <span className="text-white font-semibold text-sm">Acompañante</span>
                  <span className="text-stone-300 font-bold text-sm">$9.600</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-dark p-8 rounded-3xl transform hover:scale-105 transition-all ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500/20 p-4 rounded-2xl">
                <Clock className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Recorridos</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-3 flex items-center gap-2">
                  <Info className="text-emerald-400" size={16} />
                  <span className="text-sm">Visitas guiadas disponibles</span>
                </p>
              </div>

              <div className="py-4 px-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Duración aproximada</span>
                    <span className="text-white font-bold">2-3 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Recorrido libre</span>
                    <span className="text-white font-bold">Incluido</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Forma de pago</span>
                    <span className="text-white font-bold">Efectivo</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-800/30 border border-amber-700/40 rounded-2xl p-4">
                <p className="text-amber-300 text-sm">
                  <strong>Importante:</strong> Solo se acepta efectivo. No hay cajero en el predio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`glass-dark p-10 rounded-3xl ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">Información Importante</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Estacionamiento gratuito</p>
                    <p className="text-gray-400 text-sm">Amplio espacio disponible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Área de picnic</p>
                    <p className="text-gray-400 text-sm">Podés traer tu comida</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Kiosco interno</p>
                    <p className="text-gray-400 text-sm">Snacks y bebidas disponibles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white font-semibold">Accesibilidad</p>
                    <p className="text-gray-400 text-sm">Senderos adaptados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-500/20">
                <p className="text-emerald-400 font-semibold mb-2">¿Cómo llegar?</p>
                <p className="text-gray-300">Ruta 25 Km 3.5, Pilar, Buenos Aires</p>
                <p className="text-gray-400 text-sm mt-2">A 50 km de CABA</p>
              </div>
              <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-600/20">
                <p className="text-emerald-400 font-semibold mb-2">Visitas Educativas</p>
                <p className="text-gray-300">Consultar por grupos escolares</p>
                <p className="text-gray-400 text-sm mt-2">educacion@bubalco.com</p>
              </div>
              <div className="bg-amber-900/50 p-6 rounded-2xl border border-amber-700/30">
                <p className="text-amber-400 font-semibold mb-2">Recomendación</p>
                <p className="text-gray-300">Usar calzado cómodo y protector solar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bioparque;
