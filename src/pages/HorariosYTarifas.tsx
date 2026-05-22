import { Sun, Moon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HorariosYTarifas() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-[9rem] pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">Planificá tu visita</p>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-12">Horarios y Tarifas</h1>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-brand-dark p-8 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="text-white/50" size={18} />
                <h3 className="font-medium">Jueves a Domingo y Feriados</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                  <span className="text-white/60 text-sm">Boletería</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                  <span className="text-white/60 text-sm">Cierre del Parque</span>
                  <span className="font-medium">18:00 hs</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark p-8 rounded-2xl text-white">
              <h3 className="font-medium mb-6">Tarifas de Ingreso</h3>
              <div className="space-y-3">
                {[
                  { name: 'Entrada General', sub: 'Mayores de 13 años', price: '$25.800' },
                  { name: 'Menores y Jubilados', sub: '4 a 12 años', price: '$21.000' },
                  { name: 'Menores de 4 años', sub: '', price: 'GRATIS' },
                ].map((t) => (
                  <div key={t.name} className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      {t.sub && <p className="text-xs text-white/40 mt-0.5">{t.sub}</p>}
                    </div>
                    <span className="text-xl font-medium">{t.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 mt-4">Tu entrada contribuye directamente al trabajo de la fundación.</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Moon className="text-gray-400" size={16} />
              <span className="text-sm text-gray-600">Lunes, Martes, Miércoles</span>
            </div>
            <span className="text-sm font-medium text-gray-500">CERRADO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
