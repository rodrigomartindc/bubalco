import { GraduationCap, HandHeart, Leaf, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    n: '01',
    title: 'Refugio',
    desc: 'Una casa para animales que no pueden volver a la naturaleza.',
    icon: HandHeart,
    accent: 'border-l-brand',
    topAccent: 'border-t-brand',
    iconTone: 'bg-brand/10 text-brand',
  },
  {
    n: '02',
    title: 'Conservación',
    desc: 'Proyectos concretos para proteger especies.',
    icon: Leaf,
    accent: 'border-l-brand-dark',
    topAccent: 'border-t-brand-dark',
    iconTone: 'bg-brand-dark/10 text-brand-dark',
  },
  {
    n: '03',
    title: 'Rescate',
    desc: 'Intervenimos cuando la fauna silvestre necesita ayuda.',
    icon: ShieldCheck,
    accent: 'border-l-brand',
    topAccent: 'border-t-brand',
    iconTone: 'bg-brand/10 text-brand',
  },
  {
    n: '04',
    title: 'Educación',
    desc: 'El conocimiento y el amor por la naturaleza son la base del cambio.',
    icon: GraduationCap,
    accent: 'border-l-accent/50',
    topAccent: 'border-t-accent/50',
    iconTone: 'bg-accent/10 text-amber-600',
  },
];

export default function NuestroTrabajo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-gray-50">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll bg-gray-50">
          <div className="px-6 py-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Nuestro Trabajo</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Cómo protegemos<br />la vida silvestre</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Cuatro ejes que orientan todo lo que hacemos.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.n} className={`bg-white border border-gray-100 border-l-4 ${c.accent} rounded-2xl p-4 shadow-sm`}>
                      <div className="flex items-start gap-3">
                        <span className={`w-8 h-8 rounded-full ${c.iconTone} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={15} strokeWidth={1.8} />
                        </span>
                        <div>
                          <p className="text-[11px] tracking-widest text-gray-400 mb-1">{c.n}</p>
                          <h3 className="text-base font-medium text-gray-900 mb-1">{c.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">Nuestro Trabajo</p>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Cómo protegemos la vida silvestre</h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Cuatro ejes de trabajo que orientan todo lo que hacemos cada día para proteger la vida silvestre.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.n} className={`rounded-2xl p-7 md:p-8 bg-white border border-gray-100 border-t-4 ${c.topAccent} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${isVisible ? `animate-scale-in delay-${(i + 1) * 100}` : 'opacity-0'}`}>
                <span className={`w-10 h-10 rounded-full ${c.iconTone} flex items-center justify-center mb-6`}>
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <p className="text-xs tracking-widest text-gray-400 mb-3">{c.n}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
