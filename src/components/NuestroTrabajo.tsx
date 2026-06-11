import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    title: 'Refugio',
    desc: 'Una casa para animales que no pueden volver a la naturaleza.',
    accent: 'border-l-brand',
    topAccent: 'border-t-brand',
  },
  {
    title: 'Conservación',
    desc: 'Proyectos concretos para proteger especies.',
    accent: 'border-l-brand-dark',
    topAccent: 'border-t-brand-dark',
  },
  {
    title: 'Rescate',
    desc: 'Intervenimos cuando la fauna silvestre necesita ayuda.',
    accent: 'border-l-[#C97A5A]',
    topAccent: 'border-t-[#C97A5A]',
  },
  {
    title: 'Educación',
    desc: 'El conocimiento y el amor por la naturaleza son la base del cambio.',
    accent: 'border-l-accent/50',
    topAccent: 'border-t-accent/50',
  },
];

export default function NuestroTrabajo() {
  const { ref, reveal } = useScrollAnimation();

  return (
    <section id="pilares" data-slide-label="Pilares" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="px-6 py-8">
            <div className={`${reveal()}`}>
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Nuestro Trabajo</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Cómo protegemos<br />la vida silvestre</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Cuatro ejes que orientan todo lo que hacemos.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {pillars.map((c) => (
                  <div key={c.title} className={`bg-white border border-gray-100 border-l-4 ${c.accent} rounded-2xl px-3 py-4 shadow-sm text-left`}>
                    <h3 className="text-base font-medium text-gray-900 mb-1.5">{c.title}</h3>
                    <p className="text-sm text-gray-500 leading-snug">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${reveal()}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">Nuestro Trabajo</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Cómo protegemos la vida silvestre</h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Cuatro ejes de trabajo que orientan todo lo que hacemos cada día para proteger la vida silvestre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((c, i) => (
              <div key={c.title} className={`rounded-2xl p-7 md:p-8 bg-white border border-gray-100 border-t-4 ${c.topAccent} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${reveal(`animate-scale-in delay-${(i + 1) * 100}`)}`}>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{c.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
