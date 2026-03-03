import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section md:hidden">
      <div className="slide-card">
        <div className={`slide-card__scroll bg-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="px-6 py-10">
            <h3 className="text-2xl font-medium text-gray-900">Nuestro Impacto</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Desde 2010, hemos transformado vidas y creado conciencia sobre la importancia
              de proteger nuestra biodiversidad.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { value: '1,500+', title: 'Animales' },
                { value: '50K+', title: 'Visitantes' },
                { value: '200+', title: 'Especies' },
              ].map((s) => (
                <div key={s.title} className="text-center rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xl font-medium text-gray-900 leading-none">{s.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{s.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs tracking-widest text-gray-400 uppercase">Nuestros Valores</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Respeto por la vida', 'Compromiso', 'Transparencia', 'Profesionalismo'].map((t) => (
                  <div key={t} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm text-gray-700">{t}</p>
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
