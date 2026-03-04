import { Info } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Tarifas() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-[7.5rem] pb-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Tarifas de Ingreso
          </h1>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Conocé nuestros precios y paquetes para visitar Bubalcó Patagonia
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-10">
          <div className={`bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-xl font-medium text-white mb-6">Entradas Individuales</h3>

            <div className="space-y-3">
              <div className="py-4 px-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Entrada General</p>
                    <p className="text-white/40 text-xs mt-0.5">Mayores de 13 años</p>
                  </div>
                  <span className="text-2xl font-medium text-white">$25.800</span>
                </div>
              </div>

              <div className="py-4 px-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Menores y Jubilados</p>
                    <p className="text-white/40 text-xs mt-0.5">Entre 4 y 12 años incluidos</p>
                  </div>
                  <span className="text-2xl font-medium text-white">$21.000</span>
                </div>
              </div>

              <div className="py-4 px-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Menores de 4 años</p>
                    <p className="text-white/40 text-xs mt-0.5">Sin cargo</p>
                  </div>
                  <span className="text-2xl font-medium text-white">GRATIS</span>
                </div>
              </div>

              <div className="py-4 px-5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-sm font-medium">Acompañante</p>
                    <p className="text-white/40 text-xs mt-0.5">Persona con discapacidad</p>
                  </div>
                  <span className="text-2xl font-medium text-white">$9.600</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-medium text-white mb-6">Pase Anual</h3>

            <div className="py-8 px-6 bg-white/5 rounded-xl border border-white/10 mb-6">
              <div className="text-center">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">
                  Acceso Ilimitado
                </p>
                <p className="text-5xl font-medium text-white mb-2">$108.200</p>
                <p className="text-sm text-white/50">Visitá el bioparque todo el año</p>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                <Info size={16} className="text-white/50" />
                Beneficios del Pase Anual
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">·</span>
                  <span>Visitás todas las veces que quieras durante 365 días</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">·</span>
                  <span>Acceso prioritario en días de alta demanda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">·</span>
                  <span>Descuentos en tienda y actividades especiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">·</span>
                  <span>Ideal para familias que viven en la región</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 mb-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <h3 className="text-xl font-medium text-white mb-6">Paquetes Grupales</h3>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-center">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Grupo I</p>
                <p className="text-4xl font-medium text-white mb-3">$83.700</p>
                <div className="bg-white/5 rounded-lg p-3 mb-3">
                  <p className="text-xs text-white/40">Incluye:</p>
                  <p className="text-sm text-white">2 Entradas Generales</p>
                  <p className="text-sm text-white">2 Menores/Jubilados</p>
                </div>
                <p className="text-xs text-white/30">Ideal para familias pequeñas</p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border-2 border-brand/40 hover:border-brand/60 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand text-white text-xs px-3 py-1 rounded-full">
                MÁS POPULAR
              </div>
              <div className="text-center">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Grupo II</p>
                <p className="text-4xl font-medium text-white mb-3">$95.800</p>
                <div className="bg-white/5 rounded-lg p-3 mb-3">
                  <p className="text-xs text-white/40">Incluye:</p>
                  <p className="text-sm text-white">2 Entradas Generales</p>
                  <p className="text-sm text-white">3 Menores/Jubilados</p>
                </div>
                <p className="text-xs text-white/30">Perfecto para familias numerosas</p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-center">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Grupo III</p>
                <p className="text-4xl font-medium text-white mb-3">$129.300</p>
                <div className="bg-white/5 rounded-lg p-3 mb-3">
                  <p className="text-xs text-white/40">Incluye:</p>
                  <p className="text-sm text-white">6 Entradas Generales</p>
                </div>
                <p className="text-xs text-white/30">Ideal para grupos de amigos</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <Info className="text-white/50" size={18} />
            Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-white/60">
            <div>
              <h4 className="text-sm text-white mb-2">Formas de Pago</h4>
              <ul className="space-y-1 text-sm">
                <li>· Efectivo en boletería</li>
                <li>· Tarjetas de débito y crédito</li>
                <li>· Transferencia bancaria (consultar)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-white mb-2">Notas</h4>
              <ul className="space-y-1 text-sm">
                <li>· Los precios pueden estar sujetos a cambios</li>
                <li>· Conservá tu ticket durante toda la visita</li>
                <li>· Los menores deben estar acompañados por adultos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
