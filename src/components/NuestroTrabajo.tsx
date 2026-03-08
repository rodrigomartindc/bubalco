import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  { n: '01', title: 'Refugio', desc: 'Hogar seguro para animales que no pueden volver a su hábitat natural.' },
  { n: '02', title: 'Conservación', desc: 'Proyectos de preservación de especies nativas y sus ecosistemas.' },
  { n: '03', title: 'Rescate', desc: 'Respuesta 24/7 a emergencias, rescatando animales en peligro.' },
  { n: '04', title: 'Educación', desc: 'Concientizamos sobre conservación ambiental y respeto por la vida silvestre.' },
];

export default function NuestroTrabajo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="px-6 py-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestro Trabajo</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-3">Lo que hacemos cada día</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Cuatro pilares fundamentales que guían cada acción.
              </p>
              <div className="space-y-3">
                {pillars.map((c) => (
                  <div key={c.n} className="rounded-xl p-5 bg-white border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-[10px] font-medium flex items-center justify-center flex-shrink-0">{c.n}</span>
                      <h3 className="text-base font-medium text-gray-900">{c.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pl-9">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">Nuestro Trabajo</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Lo que hacemos cada día</h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Nuestro trabajo se sostiene sobre cuatro pilares fundamentales que guían cada acción para proteger la fauna silvestre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((c, i) => (
            <div key={c.n} className={`rounded-2xl p-7 md:p-8 bg-white border border-gray-100 hover:border-brand/30 transition-colors ${isVisible ? `animate-scale-in delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-brand/10 text-brand text-xs font-medium flex items-center justify-center flex-shrink-0">{c.n}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
