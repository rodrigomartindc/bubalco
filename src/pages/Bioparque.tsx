import { useEffect, useState } from 'react';
import { ArrowRight, Download, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../data/site';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { asset } from '../utils/asset';
import FooterSlide from '../components/FooterSlide';

const MAP_PREVIEW = '/bubalco-map-0.png';
const MAP_FULL = '/mapa-bubalco.jpg';

const desktopSlide = 'scroll-section relative md:min-h-screen md:flex md:items-center md:pt-[130px]';

export default function Bioparque() {
  const isDesktop = useIsDesktop();
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('desktop-home-snap', isDesktop);
    document.body.classList.toggle('desktop-home-snap', isDesktop);

    return () => {
      document.documentElement.classList.remove('desktop-home-snap');
      document.body.classList.remove('desktop-home-snap');
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isMapOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMapOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMapOpen]);

  return (
    <>
      {!isDesktop && (
      <div className="bioparque-slides">
        {/* Slide 1: Hero */}
        <section className="bp-slide" style={{ padding: 0 }}>
          <div className="w-full h-full bg-white">
            <div className="h-full flex flex-col">
              <div className="overflow-hidden" style={{ flex: '0 0 36%' }}>
                <img src={asset('/bubalco-fondo.png')} alt="Bubalcó Patagonia" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-start px-6 pt-4 pb-4 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-2">Bioparque</p>
                <h1 className="text-2xl font-medium text-gray-900 mb-2">Bubalcó Patagonia</h1>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Refugio y centro de rescate de fauna en la Patagonia. Un recorrido educativo para conocer de cerca las historias de los animales y comprender por qué proteger la naturaleza es fundamental.
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <Link to={ROUTES.horarios} className="px-6 py-3 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors text-center">
                    Horarios y Tarifas
                  </Link>
                  <Link to={ROUTES.visitasEscolares} className="px-6 py-3 border border-gray-200 text-gray-900 text-sm rounded-full text-center hover:bg-gray-50 transition-colors">
                    Visitas Escolares
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: Qué es + Legislatura */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-5 text-center bg-brand-dark">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Conservación en acción</p>
                <h2 className="text-lg font-medium text-white mb-2">Un refugio para animales que no pueden volver a la naturaleza</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  En 34 hectáreas de la Patagonia argentina, cuidamos a nuestros habitantes, protegemos a las especies y enseñamos por qué conservar la naturaleza es responsabilidad de todos.
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start pt-7 px-6 pb-5 text-center">
                <h2 className="text-lg font-medium text-gray-900 mb-3">Un proyecto reconocido por su aporte a la conservación y la educación</h2>
                <img src={asset('/certif-legislatura-bubalco.webp')} alt="Declarado de interés por la Legislatura de Río Negro" className="h-24 mx-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Visitas escolares */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col text-center">
              <div className="w-full h-[32%] overflow-hidden">
                <img src={asset('/bubalco-visitas.jpg')} alt="Visitas escolares en Bubalcó" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 py-6">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">Un aula en la naturaleza</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Acercamos a estudiantes y visitantes a la fauna y la conservación de forma directa y participativa.
                </p>
                <Link to={ROUTES.visitasEscolares} className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white text-sm rounded-full mx-auto">
                  Visitas Escolares <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: De dónde vienen */}
        <section className="bp-slide">
          <div className="bp-card bg-white overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="bg-brand/5 px-6 pt-6 pb-5 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Historias que merecen<br />ser contadas</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">De dónde vienen<br />los habitantes del parque</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Cada animal tiene su historia. Conocerla nos ayuda a entender por qué protegemos la fauna y sus ecosistemas.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-start pt-7 px-6 pb-5">
                <div className="space-y-4">
                  {[
                    'Algunos llegaron como rescates; otros nacieron en otros centros y se crían dentro de programas de conservación.',
                    'Todos viven con nosotros porque no pueden volver a su hábitat, por eso los cuidamos.',
                    'Cada historia revela las problemáticas de las especies y nos conecta con su cuidado, en el bioparque y en la naturaleza.',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3 text-left">
                      <span className="text-[#2B5962] font-medium leading-relaxed">|</span>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium italic">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Por qué abrimos */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="py-5 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-2 px-6">Nuestra misión</p>
              <h2 className="text-lg font-medium text-gray-900 mb-4 px-6">Convivencia Responsable</h2>
              <div className="space-y-px">
                {[
                  { n: '1', title: 'Educación para generar cambio', desc: 'La educación es un pilar de nuestro trabajo. Compartimos información sobre las especies y la historia de cada animal, porque conocimiento y empatía son la base para un vínculo responsable con la naturaleza.' },
                  { n: '2', title: 'Animales que encontraron un hogar', desc: 'Los animales del parque no pueden volver a la naturaleza y están habituados a convivir con personas que respetan su bienestar y los cuidan. Les damos un hogar seguro y nos aseguramos que sus historias no sean en vano.' },
                  { n: '3', title: 'Conectar con lo que protegemos', desc: 'Cada vez vivimos más alejados de la naturaleza y es difícil proteger lo que no se conoce. Conectar con cada animal y entender sus desafíos nos impulsa a buscar un mundo en armonía con la naturaleza.' },
                ].map((b) => (
                  <div key={b.n} className="px-5 py-3 text-left" style={{ background: ['rgba(65,117,88,0.06)', 'rgba(43,89,98,0.06)', 'rgba(65,117,88,0.03)'][Number(b.n)-1] }}>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand/15 text-brand text-[11px] font-medium flex items-center justify-center flex-shrink-0 mt-0.5">{b.n}</span>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-0.5">{b.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Planificar tu visita */}
        <section id="tarifas-horarios-m" className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Planificar tu visita</p>
                <h2 className="text-xl font-medium text-gray-900 mb-2">Horarios y Tarifas</h2>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Consultá días, horarios, valores de entrada y promociones vigentes.
                </p>
                <Link to={ROUTES.horarios} className="group inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                  Horarios y Tarifas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mx-6 border-t border-gray-100" />

              <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 text-center bg-brand-dark">
                <h2 className="text-xl font-medium text-white mb-2">¿Tenés dudas?</h2>
                <p className="text-xs text-white/50 mb-4 leading-relaxed">
                  Revisá información útil antes de venir.
                </p>
                <Link to={ROUTES.faq} className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
                  Preguntas Frecuentes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Descargar mapa */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className={`px-6 h-full flex flex-col items-center text-center min-h-0 ${isMapOpen ? 'py-3' : 'py-6'}`}>
              {!isMapOpen && (
                <>
                  <p className="text-xs tracking-widest text-brand uppercase mb-3 flex-shrink-0">El recorrido</p>
                  <h2 className="text-2xl font-medium text-gray-900 mb-4 flex-shrink-0">Mapa del bioparque</h2>
                </>
              )}

              {isMapOpen ? (
                <div className="relative flex-1 min-h-0 w-full flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsMapOpen(false)}
                    className="absolute right-0 top-0 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-sm backdrop-blur"
                    aria-label="Cerrar mapa"
                  >
                    <X size={17} />
                  </button>
                  <img
                    src={asset(MAP_FULL)}
                    alt="Mapa del recorrido del Bioparque Bubalcó"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-center mb-4">
                  <button
                    type="button"
                    onClick={() => setIsMapOpen(true)}
                    className="relative inline-flex flex-shrink-0 group"
                    aria-label="Ampliar mapa del bioparque"
                  >
                    <div className="w-52 h-52 rounded-full overflow-hidden">
                      <img
                        src={asset(MAP_PREVIEW)}
                        alt="Mapa del recorrido del Bioparque Bubalcó"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-sm backdrop-blur transition-transform group-active:scale-95">
                      <Search size={17} />
                    </span>
                  </button>
                  <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                    Descargá el mapa en tu celular<br />
                    para recorrer el bioparque sin papel.
                  </p>
                </div>
              )}

              <a
                href={asset(MAP_FULL)}
                download="mapa-bubalco-patagonia.jpg"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white text-sm rounded-full w-full max-w-xs flex-shrink-0"
              >
                Descargar mapa
              </a>
            </div>
          </div>
        </section>

        <FooterSlide sectionClassName="bp-slide" />
      </div>
      )}

      {isDesktop && (
      <div className="md:contents">
        {/* Slide 1: Hero */}
        <section className={`${desktopSlide} md:bg-white`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center min-h-[calc(100vh-130px)]">
              <div>
                <p className="text-xs tracking-widest text-brand uppercase mb-6">Bioparque</p>
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 leading-tight">Bubalcó Patagonia</h1>
                <p className="text-base text-gray-500 leading-relaxed mb-10">
                  Refugio y centro de rescate de fauna en la Patagonia. Un recorrido educativo para conocer de cerca las historias de los animales y comprender por qué proteger la naturaleza es fundamental.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link to={ROUTES.horarios} className="px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">Horarios y Tarifas</Link>
                  <Link to={ROUTES.visitasEscolares} className="px-8 py-4 border border-gray-200 text-gray-900 text-sm rounded-full hover:bg-gray-50 transition-colors">Visitas Escolares</Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={asset('/bubalco-fondo.png')}
                  alt="Bubalcó Patagonia"
                  className="w-full max-w-[520px] h-[420px] object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: Qué es */}
        <section className={`${desktopSlide} md:bg-white`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[calc(100vh-130px)]">
              <div>
                <p className="text-xs tracking-widest text-brand uppercase mb-4">Conservación en acción</p>
                <h2 className="text-3xl font-medium text-gray-900 mb-4">Un refugio para animales que no pueden volver a la naturaleza</h2>
                <p className="text-base text-gray-500 leading-relaxed">
                  En 34 hectáreas de la Patagonia argentina, cuidamos a nuestros habitantes, protegemos a las especies y enseñamos por qué conservar la naturaleza es responsabilidad de todos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Reconocimiento provincial</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Declarado de interés científico, educativo, conservacionista y turístico por la Legislatura de la Provincia de Río Negro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Educación */}
        <section className={`${desktopSlide} md:bg-brand-dark`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Educación</p>
            <h2 className="text-3xl font-medium text-white mb-4">Un aula en la naturaleza</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Acercamos a estudiantes y visitantes a la fauna y la conservación de forma directa y participativa. Nuestros recorridos combinan información científica, historias de los animales y actividades que fomentan la empatía.
            </p>
            <Link to={ROUTES.visitasEscolares} className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm rounded-full hover:bg-gray-100 transition-colors">
              Visitas Escolares <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Slide 4: De dónde vienen */}
        <section className={`${desktopSlide} md:bg-white`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            <div className="min-h-[calc(100vh-130px)] flex flex-col justify-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Historias que merecen ser contadas</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">De dónde vienen los habitantes del parque</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-3xl">
                Cada animal tiene su historia. Conocerla nos ayuda a entender por qué protegemos la fauna y sus ecosistemas.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 leading-relaxed italic">Algunos llegaron como rescates; otros nacieron en otros centros y se crían dentro de programas de conservación.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 leading-relaxed italic">Todos viven con nosotros porque no pueden volver a su hábitat, por eso los cuidamos.</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 md:col-span-2">
                  <p className="text-sm text-gray-500 leading-relaxed italic">Cada historia revela las problemáticas de las especies y nos conecta con su cuidado, en el bioparque y en la naturaleza.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Convivencia Responsable */}
        <section className={`${desktopSlide} md:bg-gray-50`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            <div className="min-h-[calc(100vh-130px)] flex flex-col justify-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Nuestra misión</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-6">Convivencia Responsable</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { n: '1', title: 'Educación para generar cambio', desc: 'La educación es un pilar de nuestro trabajo. Compartimos información sobre las especies y la historia de cada animal, porque conocimiento y empatía son la base para un vínculo responsable con la naturaleza.' },
                  { n: '2', title: 'Animales que encontraron un hogar', desc: 'Los animales del parque no pueden volver a la naturaleza y están habituados a convivir con personas que respetan su bienestar y los cuidan. Les damos un hogar seguro y nos aseguramos que sus historias no sean en vano.' },
                  { n: '3', title: 'Conectar con lo que protegemos', desc: 'Cada vez vivimos más alejados de la naturaleza y es difícil proteger lo que no se conoce. Conectar con cada animal y entender sus desafíos nos impulsa a buscar un mundo en armonía con la naturaleza.' },
                ].map((b) => (
                  <div key={b.n} className="bg-white rounded-2xl p-6 border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-brand/10 text-brand text-sm font-medium flex items-center justify-center mb-3">{b.n}</span>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Planificar tu visita */}
        <section id="tarifas-horarios" className={`${desktopSlide} md:bg-white scroll-mt-[130px]`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
            <div className="min-h-[calc(100vh-130px)] flex flex-col justify-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Planificar tu visita</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-6">Información para venir</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-brand-dark rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-medium text-white mb-4">Horarios y Tarifas</h3>
                  <p className="text-base text-white/60 leading-relaxed mb-6">
                    Consultá días, horarios, valores de entrada y promociones vigentes.
                  </p>
                  <Link to={ROUTES.horarios} className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm rounded-full hover:bg-gray-100 transition-colors">
                    Ver horarios y tarifas <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Preguntas Frecuentes</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-6">
                    Revisá información útil antes de venir.
                  </p>
                  <Link to={ROUTES.faq} className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
                    Ver preguntas frecuentes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Mapa descargable */}
        <section className={`${desktopSlide} md:bg-white`}>
          <div className="w-full px-6 md:px-12 lg:px-20 max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">El recorrido</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Mapa del Bioparque</h2>
            <img src={asset('/bubalco-map-0.png')} alt="Mapa del Bioparque Bubalcó" className="w-64 h-64 rounded-full object-cover mb-5 mx-auto" loading="lazy" />
            <p className="text-sm text-gray-500 mb-6">Descargá el mapa en tu celular para recorrer el bioparque sin papel.</p>
            <a href={asset('/mapa-bubalco.jpg')} download="mapa-bubalco-patagonia.jpg" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
              <Download size={18} /> Descargar mapa
            </a>
          </div>
        </section>
      </div>
      )}
    </>
  );
}
