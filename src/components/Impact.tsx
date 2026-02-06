import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section md:hidden">
      <div className="slide-card">
        <div className={`slide-card__scroll bg-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="px-6 py-10">
            <h3 className="text-3xl font-black text-gray-900">Nuestro Impacto</h3>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Desde 2010, hemos transformado vidas y creado conciencia sobre la importancia
              de proteger nuestra biodiversidad.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                { value: '1,500+', title: 'Animales', tone: 'text-emerald-700' },
                { value: '50K+', title: 'Visitantes', tone: 'text-emerald-700' },
                { value: '200+', title: 'Especies', tone: 'text-amber-700' },
              ].map((s) => (
                <div key={s.title} className="text-center rounded-2xl border border-emerald-100 bg-emerald-50/30 p-4">
                  <p className={`text-2xl font-black leading-none ${s.tone}`}>{s.value}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-600">{s.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100">
              <p className="text-xs font-black tracking-[0.22em] text-gray-500">NUESTROS VALORES</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Respeto por la vida', 'Compromiso', 'Transparencia', 'Profesionalismo'].map((t) => (
                  <div key={t} className="rounded-2xl border border-emerald-100 bg-white p-4">
                    <p className="font-semibold text-gray-800">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


