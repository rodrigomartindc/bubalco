import { ArrowRight } from 'lucide-react';
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
          <div className="relative z-10 w-full px-6 py-9">
            <div className={`space-y-5 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase">Tu apoyo salva vidas</p>

              <h2 className="text-2xl font-medium text-gray-900 leading-tight">
                Cada aporte
                <span className="block">marca la diferencia</span>
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed">
                Tu donación nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación.
              </p>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <p className="text-sm font-medium text-gray-900">Elegí tu donación</p>
                <div className="mt-4 grid gap-3">
                  {donationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => void startCheckout(opt.id)}
                      disabled={isPayLoading}
                      className="w-full text-left rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-colors p-4 disabled:opacity-60"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm text-gray-500">{opt.label}</p>
                          <p className="mt-1 text-xl font-medium text-gray-900">
                            ${opt.amount.toLocaleString('es-AR')}
                          </p>
                        </div>
                        <p className="text-xs text-gray-400">
                          {isPayLoading ? 'Iniciando…' : 'Mercado Pago'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {payError && (
                  <p className="mt-4 text-sm text-gray-700">{payError}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Tu apoyo salva vidas</p>

            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Cada aporte
              <span className="block">marca la diferencia</span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed">
              Más de 150 animales dependen de tu generosidad cada día. Tu donación
              nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación.
            </p>

            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="text-center">
                <p className="text-3xl font-medium text-gray-900">150+</p>
                <p className="text-xs text-gray-500 mt-1">Animales al cuidado</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-medium text-gray-900">24/7</p>
                <p className="text-xs text-gray-500 mt-1">Atención veterinaria</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-medium text-gray-900">$5M</p>
                <p className="text-xs text-gray-500 mt-1">Costo anual</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
            >
              <span>Donar Ahora</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            {payError && (
              <p className="text-sm text-gray-700">{payError}</p>
            )}
          </div>

          <div className={`space-y-5 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
            <div className="group relative bg-brand-dark p-8 rounded-2xl text-white hover:shadow-lg transition-all cursor-pointer">
              <div className="relative">
                <p className="text-xs tracking-widest uppercase opacity-70 mb-2">Único</p>
                <h3 className="text-xl font-medium mb-3">Donación Puntual</h3>
                <p className="text-sm text-white/70 mb-6">
                  Un aporte único que tiene un impacto inmediato en la vida de nuestros animales rescatados.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span>Elegir monto</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-900 p-8 rounded-2xl text-white hover:shadow-lg transition-all cursor-pointer border border-gray-800">
              <div className="absolute -top-3 -right-3 bg-brand text-white text-xs px-3 py-1 rounded-full">
                MÁS POPULAR
              </div>
              <div className="relative">
                <p className="text-xs tracking-widest uppercase text-brand mb-2">Mensual</p>
                <h3 className="text-xl font-medium mb-3">Padrino/Madrina</h3>
                <p className="text-sm text-gray-400 mb-6">
                  Conviértete en guardián permanente. Tu apoyo mensual garantiza cuidado continuo.
                </p>
                <div className="flex items-center gap-2 text-sm text-brand">
                  <span>Comenzar ahora</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all cursor-pointer border border-gray-200">
              <div className="relative">
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Especial</p>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Otras Formas de Ayudar</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Transferencias, donación de alimentos, medicamentos o materiales para el bioparque.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-900">
                  <span>Ver opciones</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Elegí tu donación</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Vas a pagar de forma segura con Mercado Pago y luego volverás a esta web.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 transition-colors"
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
                    className="text-left rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors p-4 disabled:opacity-60"
                  >
                    <p className="text-sm text-gray-500">{opt.label}</p>
                    <p className="mt-1 text-xl font-medium text-gray-900">
                      ${opt.amount.toLocaleString('es-AR')}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {isPayLoading ? 'Iniciando…' : 'Pagar con Mercado Pago'}
                    </p>
                  </button>
                ))}
              </div>

              {payError && (
                <p className="mt-4 text-sm text-gray-700">{payError}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donations;
