import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quienes-somos" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:overflow-hidden">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative bg-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-50 to-transparent"></div>
          <div className="relative z-10 w-full px-6 py-10">
            <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <Sparkles className="text-emerald-600" size={18} />
                <span className="text-emerald-700 text-sm font-semibold">Nuestra Misión</span>
              </div>

              <h2 className="text-4xl font-black text-gray-900 mb-5 leading-tight">
                Más que un refugio,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  una familia
                </span>
              </h2>

              <p className="text-base text-gray-600 max-w-sm mx-auto leading-relaxed">
                Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
                a la comunidad sobre la importancia de la conservación.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-gray-900">Pilares</p>
                <p className="text-xs font-semibold text-gray-500">Deslizá →</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
              {[
                {
                  n: '01',
                  title: 'Refugio',
                  desc: 'Hogar seguro para animales que no pueden volver a su hábitat natural.',
                  blob: 'bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.18),transparent_60%)]',
                },
                {
                  n: '02',
                  title: 'Educación',
                  desc: 'Concientizamos sobre conservación ambiental y respeto por la vida silvestre.',
                  blob: 'bg-[radial-gradient(circle_at_70%_25%,rgba(20,184,166,0.16),transparent_60%)]',
                },
                {
                  n: '03',
                  title: 'Rescate',
                  desc: 'Respuesta 24/7 a emergencias, rescatando animales en peligro.',
                  blob: 'bg-[radial-gradient(circle_at_35%_30%,rgba(245,158,11,0.18),transparent_60%)]',
                },
                {
                  n: '04',
                  title: 'Conservación',
                  desc: 'Proyectos de preservación de especies nativas y sus ecosistemas.',
                  blob: 'bg-[radial-gradient(circle_at_75%_35%,rgba(34,197,94,0.14),transparent_60%)]',
                },
              ].map((card) => (
                <div
                  key={card.n}
                  className={`snap-start shrink-0 w-[82%] relative overflow-hidden rounded-3xl p-6 bg-white/85 backdrop-blur border border-emerald-100 shadow-sm ${card.blob}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-[0.22em] text-emerald-800/70">
                      PILAR {card.n}
                    </span>
                    <span className="h-8 w-8 rounded-2xl border border-emerald-100 bg-white/70 shadow-sm"></span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-50 to-transparent"></div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <Sparkles className="text-emerald-600" size={18} />
            <span className="text-emerald-700 text-sm font-semibold">Nuestra Misión</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Más que un refugio,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              una familia
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
            a la comunidad sobre la importancia de la conservación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              n: '01',
              title: 'Refugio',
              desc: 'Hogar seguro para animales que no pueden volver a su hábitat natural.',
              blob: 'bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.22),transparent_60%)]',
              delay: 'delay-100',
            },
            {
              n: '02',
              title: 'Educación',
              desc: 'Concientizamos sobre conservación ambiental y respeto por la vida silvestre.',
              blob: 'bg-[radial-gradient(circle_at_70%_25%,rgba(20,184,166,0.20),transparent_60%)]',
              delay: 'delay-200',
            },
            {
              n: '03',
              title: 'Rescate',
              desc: 'Respuesta 24/7 a emergencias, rescatando animales en peligro.',
              blob: 'bg-[radial-gradient(circle_at_35%_30%,rgba(245,158,11,0.22),transparent_60%)]',
              delay: 'delay-300',
            },
            {
              n: '04',
              title: 'Conservación',
              desc: 'Proyectos de preservación de especies nativas y sus ecosistemas.',
              blob: 'bg-[radial-gradient(circle_at_75%_35%,rgba(34,197,94,0.18),transparent_60%)]',
              delay: 'delay-400',
            },
          ].map((card) => (
            <div
              key={card.n}
              className={`group relative overflow-hidden rounded-3xl p-7 md:p-8 bg-white/80 backdrop-blur border border-emerald-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all ${card.blob} ${
                isVisible ? `animate-scale-in ${card.delay}` : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/40 via-transparent to-emerald-50/40 pointer-events-none"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-xs font-black tracking-[0.22em] text-emerald-800/70">
                      PILAR {card.n}
                    </span>
                    <span className="h-px w-10 bg-gradient-to-r from-emerald-300 to-transparent"></span>
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-emerald-100 bg-white/70 shadow-sm"></div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="rounded-3xl overflow-hidden border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white">
            <div className="p-7 md:p-9 lg:p-10">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                    Nuestro Impacto
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                    Desde 2010, hemos transformado vidas y creado conciencia sobre la importancia
                    de proteger nuestra biodiversidad.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { value: '1,500+', title: 'Animales Rescatados', sub: 'En los últimos 15 años', tone: 'text-emerald-700' },
                      { value: '50K+', title: 'Visitantes Educados', sub: 'Programas de concientización', tone: 'text-emerald-700' },
                      { value: '200+', title: 'Especies Protegidas', sub: 'Fauna nativa en conservación', tone: 'text-amber-700' },
                    ].map((stat) => (
                      <div key={stat.title} className="relative">
                        <div className="h-px w-12 bg-gradient-to-r from-emerald-300 to-transparent mb-4"></div>
                        <p className={`text-4xl md:text-5xl font-black leading-none ${stat.tone}`}>
                          {stat.value}
                        </p>
                        <p className="mt-3 text-gray-900 font-bold text-base">{stat.title}</p>
                        <p className="text-gray-500 text-sm">{stat.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-emerald-100">
                    <p className="text-xs font-black tracking-[0.22em] text-gray-500">
                      NUESTROS VALORES
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-gray-700 font-semibold">
                      {[
                        'Respeto por la vida',
                        'Compromiso',
                        'Transparencia',
                        'Profesionalismo',
                      ].map((t) => (
                        <span key={t} className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
