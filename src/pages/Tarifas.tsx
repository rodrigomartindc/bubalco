import { DollarSign, Users, Calendar, Info } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Tarifas() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Tarifas de Ingreso
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conocé nuestros precios y paquetes para visitar Bubalcó Patagonia
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`glass-dark p-8 rounded-3xl transform hover:scale-105 transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-2xl">
                <DollarSign className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Entradas Individuales</h3>
            </div>

            <div className="space-y-4">
              <div className="py-4 px-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold text-lg">Entrada General</p>
                    <p className="text-gray-400 text-sm">Mayores de 13 años</p>
                  </div>
                  <span className="text-4xl font-black text-emerald-400">$25.800</span>
                </div>
              </div>

              <div className="py-4 px-6 bg-emerald-600/10 rounded-2xl border border-emerald-600/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold text-lg">Menores y Jubilados</p>
                    <p className="text-gray-400 text-sm">Entre 4 y 12 años incluidos</p>
                  </div>
                  <span className="text-4xl font-black text-emerald-500">$21.000</span>
                </div>
              </div>

              <div className="py-4 px-6 bg-amber-700/15 rounded-2xl border border-amber-600/25">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold text-lg">Menores de 4 años</p>
                    <p className="text-gray-400 text-sm">Sin cargo</p>
                  </div>
                  <span className="text-4xl font-black text-amber-500">GRATIS</span>
                </div>
              </div>

              <div className="py-4 px-6 bg-stone-700/20 rounded-2xl border border-stone-600/30">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold text-lg">Acompañante</p>
                    <p className="text-gray-400 text-sm">Persona con discapacidad</p>
                  </div>
                  <span className="text-3xl font-black text-stone-300">$9.600</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-dark p-8 rounded-3xl transform hover:scale-105 transition-all ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-2xl">
                <Calendar className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Pase Anual</h3>
            </div>

            <div className="py-8 px-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border-2 border-emerald-400/30 mb-6">
              <div className="text-center">
                <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide mb-2">
                  Acceso Ilimitado
                </p>
                <p className="text-6xl font-black text-white mb-2">$108.200</p>
                <p className="text-gray-300">Visitá el bioparque todo el año</p>
              </div>
            </div>

            <div className="bg-emerald-900/30 p-6 rounded-2xl border border-emerald-500/20">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Info size={20} className="text-emerald-400" />
                Beneficios del Pase Anual
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Visitás todas las veces que quieras durante 365 días</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Acceso prioritario en días de alta demanda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Descuentos en tienda y actividades especiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Ideal para familias que viven en la región</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`glass-dark p-8 rounded-3xl mb-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-amber-700/25 rounded-2xl">
              <Users className="text-amber-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">Paquetes Grupales</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-800/20 to-amber-700/20 p-6 rounded-2xl border border-amber-700/30 hover:border-amber-600/50 transition-all hover:scale-105">
              <div className="text-center">
                <h4 className="text-amber-500 font-bold text-xl mb-2">Grupo I</h4>
                <p className="text-5xl font-black text-white mb-3">$83.700</p>
                <div className="bg-amber-900/30 rounded-xl p-3 mb-3">
                  <p className="text-gray-300 text-sm font-semibold">Incluye:</p>
                  <p className="text-white font-bold">2 Entradas Generales</p>
                  <p className="text-white font-bold">2 Menores/Jubilados</p>
                </div>
                <p className="text-gray-400 text-xs">Ideal para familias pequeñas</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-700/20 to-amber-600/20 p-6 rounded-2xl border-2 border-amber-600/40 hover:border-amber-500/60 transition-all hover:scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                MÁS POPULAR
              </div>
              <div className="text-center">
                <h4 className="text-amber-400 font-bold text-xl mb-2">Grupo II</h4>
                <p className="text-5xl font-black text-white mb-3">$95.800</p>
                <div className="bg-amber-900/30 rounded-xl p-3 mb-3">
                  <p className="text-gray-300 text-sm font-semibold">Incluye:</p>
                  <p className="text-white font-bold">2 Entradas Generales</p>
                  <p className="text-white font-bold">3 Menores/Jubilados</p>
                </div>
                <p className="text-gray-400 text-xs">Perfecto para familias numerosas</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600/20 to-amber-500/20 p-6 rounded-2xl border border-amber-600/30 hover:border-amber-500/50 transition-all hover:scale-105">
              <div className="text-center">
                <h4 className="text-amber-400 font-bold text-xl mb-2">Grupo III</h4>
                <p className="text-5xl font-black text-white mb-3">$129.300</p>
                <div className="bg-amber-900/30 rounded-xl p-3 mb-3">
                  <p className="text-gray-300 text-sm font-semibold">Incluye:</p>
                  <p className="text-white font-bold">6 Entradas Generales</p>
                </div>
                <p className="text-gray-400 text-xs">Ideal para grupos de amigos</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 p-8 rounded-3xl border border-emerald-500/20 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="text-emerald-400" />
            Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">Formas de Pago</h4>
              <ul className="space-y-1 text-sm">
                <li>• Efectivo en boletería</li>
                <li>• Tarjetas de débito y crédito</li>
                <li>• Transferencia bancaria (consultar)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Notas</h4>
              <ul className="space-y-1 text-sm">
                <li>• Los precios pueden estar sujetos a cambios</li>
                <li>• Conservá tu ticket durante toda la visita</li>
                <li>• Los menores deben estar acompañados por adultos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
