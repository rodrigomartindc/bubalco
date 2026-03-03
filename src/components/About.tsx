import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="quienes-somos" ref={ref} className="scroll-section relative md:min-h-screen md:flex md:items-center md:bg-white md:overflow-hidden">
      <div className="slide-card md:hidden">
        <div className="slide-card__scroll relative bg-white overflow-hidden">
          <div className="relative z-10 w-full px-6 py-10">
            <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Nuestra Misión</p>

              <h2 className="text-3xl font-medium text-gray-900 mb-5 leading-tight">
                Más que un refugio,
                <br />
                una familia
              </h2>

              <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
                a la comunidad sobre la importancia de la conservación.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-gray-900 uppercase tracking-wider">Pilares</p>
                <p className="text-xs text-gray-400">Deslizá →</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
              {[
                { n: '01', title: 'Refugio', desc: 'Hogar seguro para animales que no pueden volver a su hábitat natural.' },
                { n: '02', title: 'Educación', desc: 'Concientizamos sobre conservación ambiental y respeto por la vida silvestre.' },
                { n: '03', title: 'Rescate', desc: 'Respuesta 24/7 a emergencias, rescatando animales en peligro.' },
                { n: '04', title: 'Conservación', desc: 'Proyectos de preservación de especies nativas y sus ecosistemas.' },
              ].map((card) => (
                <div
                  key={card.n}
                  className="snap-start shrink-0 w-[82%] rounded-2xl p-6 bg-gray-50 border border-gray-100"
                >
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
                    {card.n}
                  </p>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Nuestra Misión</p>

          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Más que un refugio,
            <br />
            una familia
          </h2>

          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos
            a la comunidad sobre la importancia de la conservación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { n: '01', title: 'Refugio', desc: 'Hogar seguro para animales que no pueden volver a su hábitat natural.', delay: 'delay-100' },
            { n: '02', title: 'Educación', desc: 'Concientizamos sobre conservación ambiental y respeto por la vida silvestre.', delay: 'delay-200' },
            { n: '03', title: 'Rescate', desc: 'Respuesta 24/7 a emergencias, rescatando animales en peligro.', delay: 'delay-300' },
            { n: '04', title: 'Conservación', desc: 'Proyectos de preservación de especies nativas y sus ecosistemas.', delay: 'delay-400' },
          ].map((card) => (
            <div
              key={card.n}
              className={`rounded-2xl p-7 md:p-8 bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors ${
                isVisible ? `animate-scale-in ${card.delay}` : 'opacity-0'
              }`}
            >
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
                {card.n}
              </p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <div className="p-7 md:p-9 lg:p-10">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                    Nuestro Impacto
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
                    Desde 2010, hemos transformado vidas y creado conciencia sobre la importancia
                    de proteger nuestra biodiversidad.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { value: '1,500+', title: 'Animales Rescatados', sub: 'En los últimos 15 años' },
                      { value: '50K+', title: 'Visitantes Educados', sub: 'Programas de concientización' },
                      { value: '200+', title: 'Especies Protegidas', sub: 'Fauna nativa en conservación' },
                    ].map((stat) => (
                      <div key={stat.title} className="relative">
                        <div className="h-px w-12 bg-gray-200 mb-4"></div>
                        <p className="text-3xl md:text-4xl font-medium text-gray-900 leading-none">
                          {stat.value}
                        </p>
                        <p className="mt-3 text-sm font-medium text-gray-900">{stat.title}</p>
                        <p className="text-xs text-gray-400">{stat.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-xs tracking-widest text-gray-400 uppercase">
                      Nuestros Valores
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                      {[
                        'Respeto por la vida',
                        'Compromiso',
                        'Transparencia',
                        'Profesionalismo',
                      ].map((t) => (
                        <span key={t} className="inline-flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-brand"></span>
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
