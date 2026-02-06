import { Heart, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMemo, useState } from 'react';

const Donations = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [isPayLoading, setIsPayLoading] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const donationOptions = useMemo(
    () => [
      { id: 'feed_1', label: 'Alimento', amount: 5000 },
      { id: 'vet_1', label: 'Veterinaria', amount: 10000 },
      { id: 'rescue_1', label: 'Rescate', amount: 20000 },
    ],
    [],
  );

  const startCheckout = async (donationId: string) => {
    setPayError(null);
    setIsPayLoading(true);
    try {
      const res = await fetch('/api/mp/create_preference.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ donation_id: donationId }),
      });
      const json = (await res.json()) as { ok: true; init_point: string } | { ok: false; error: string };
      if (!json.ok) {
        setPayError(json.error || 'No se pudo iniciar el pago.');
        return;
      }
      window.location.href = json.init_point;
    } catch {
      setPayError('No se pudo iniciar el pago. Intentá de nuevo en unos segundos.');
    } finally {
      setIsPayLoading(false);
    }
  };

  return (
    <section id="donaciones" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:overflow-hidden md:bg-white">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent"></div>
          <div className="relative z-10 w-full px-6 py-9">
            <div className={`space-y-5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                <Heart className="text-emerald-600" size={18} fill="currentColor" />
                <span className="text-emerald-700 text-sm font-semibold">Tu apoyo salva vidas</span>
              </div>

              <h2 className="text-3xl font-black text-gray-900 leading-tight">
                Cada aporte
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
                  marca la diferencia
                </span>
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Tu donación nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación.
              </p>

              <div className="rounded-3xl border border-emerald-100 bg-white shadow-sm p-5">
                <p className="text-sm font-bold text-gray-900">Elegí tu donación</p>
                <div className="mt-4 grid gap-3">
                  {donationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => void startCheckout(opt.id)}
                      disabled={isPayLoading}
                      className="w-full text-left rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 transition-colors p-4 disabled:opacity-60"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-600">{opt.label}</p>
                          <p className="mt-1 text-2xl font-black text-gray-900">
                            ${opt.amount.toLocaleString('es-AR')}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-emerald-700">
                          {isPayLoading ? 'Iniciando…' : 'Mercado Pago'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {payError && (
                  <p className="mt-4 text-sm text-amber-700 font-semibold">{payError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent"></div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
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

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span className="text-lg">Donar Ahora</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>

            {payError && (
              <p className="text-sm text-amber-700 font-semibold">{payError}</p>
            )}
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

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
          <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-emerald-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Elegí tu donación</h3>
                  <p className="mt-2 text-gray-600">
                    Vas a pagar de forma segura con Mercado Pago y luego volverás a esta web.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-xl font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cerrar
                </button>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {donationOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => void startCheckout(opt.id)}
                    disabled={isPayLoading}
                    className="text-left rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 transition-colors p-4 disabled:opacity-60"
                  >
                    <p className="text-sm font-semibold text-gray-600">{opt.label}</p>
                    <p className="mt-1 text-2xl font-black text-gray-900">
                      ${opt.amount.toLocaleString('es-AR')}
                    </p>
                    <p className="mt-2 text-sm font-bold text-emerald-700">
                      {isPayLoading ? 'Iniciando…' : 'Pagar con Mercado Pago'}
                    </p>
                  </button>
                ))}
              </div>

              {payError && (
                <p className="mt-4 text-sm text-amber-700 font-semibold">{payError}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donations;
