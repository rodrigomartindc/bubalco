import { Link } from 'react-router-dom';
import { ROUTES } from '../data/site';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { useDesktopSnap } from '../hooks/useDesktopSnap';
import { asset } from '../utils/asset';
import FooterSlide from '../components/FooterSlide';

const desktopSlide = 'scroll-section relative md:min-h-screen md:flex md:items-center md:pt-[130px]';

const objetivos = [
  'Apoyar la conservación de especies y ecosistemas en peligro de extinción en Argentina y la región patagónica.',
  'Incrementar el conocimiento científico aplicado directamente a la conservación de fauna silvestre.',
  'Promover la conciencia pública sobre la importancia de conservar la naturaleza, convirtiendo cada visita en un acto de cambio.',
];

const amenazas = [
  {
    title: 'Pérdida de hábitat',
    desc: 'La expansión humana, la deforestación, la urbanización y la agricultura intensiva reducen el espacio disponible para que los animales silvestres vivan, encuentren alimento y se reproduzcan. Es la principal causa de extinción de especies en Argentina.',
  },
  {
    title: 'Explotación y comercio ilegal',
    desc: 'La caza furtiva, la pesca excesiva y el tráfico ilegal de animales silvestres —impulsado por el mascotismo, la medicina alternativa y el coleccionismo— ponen en peligro la supervivencia de especies y desequilibran ecosistemas completos.',
  },
  {
    title: 'Cambio climático y contaminación',
    desc: 'Afectan directamente la disponibilidad de recursos alimenticios y reproductivos de la fauna silvestre, alterando ciclos naturales que tardaron millones de años en establecerse.',
  },
];

const valores = [
  {
    title: 'Bienestar animal',
    desc: 'Cada decisión parte del bienestar real de cada animal bajo nuestro cuidado. No hay compromiso posible en ese punto.',
  },
  {
    title: 'Conocimiento riguroso',
    desc: 'Actuamos desde el saber científico. Creemos que el conocimiento verdadero es la mejor herramienta contra la indiferencia y la ignorancia.',
  },
  {
    title: 'Impacto regional',
    desc: 'Somos patagónicos. Nuestro trabajo construye identidad, orgullo y responsabilidad sobre el territorio que habitamos.',
  },
  {
    title: 'Comunidad',
    desc: 'La conservación de la fauna silvestre no es tarea de unos pocos. Invitamos a cada persona a ser parte activa de algo que trasciende lo individual.',
  },
  {
    title: 'Transparencia',
    desc: 'Abrimos nuestras puertas, mostramos lo que hacemos y rendimos cuentas. La confianza se construye con hechos.',
  },
  {
    title: 'Respeto por la vida',
    desc: 'Todo ser vivo merece existir en condiciones dignas. Esa convicción guía cada proyecto, cada rescate, cada decisión.',
  },
];

function SectionDivider() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <div className="w-14 border-t border-gray-200" />
    </div>
  );
}

function DecoListItem({ title, desc }: { title?: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 text-left">
      <span className="text-[#2B5962] font-medium leading-relaxed flex-shrink-0">|</span>
      {title ? (
        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-medium text-gray-900">{title}: </span>
          {desc}
        </p>
      ) : (
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      )}
    </div>
  );
}

export default function NuestroTrabajoPage() {
  const isDesktop = useIsDesktop();
  useDesktopSnap(isDesktop);

  return (
    <>
      {!isDesktop && (
      <div className="pt-[9rem] bg-white">
        {/* Hero */}
        <section className="bg-white">
          <div className="w-full h-56 overflow-hidden">
            <img
              src={asset('/nuestro-trabajo-hero.jpeg')}
              alt="Fauna silvestre bajo el cuidado de Bubalcó Patagonia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-6 flex flex-col justify-center text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">
                  Fundación Bubalcó Patagonia Argentina
                </p>
                <h1 className="text-2xl font-medium text-gray-900 mb-4 leading-snug">
                  Proteger la Biodiversidad
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  En una isla del río Negro, en el corazón de la Patagonia argentina, Bubalcó trabaja para proteger la fauna silvestre, conservar especies en peligro de extinción y concientizar a la comunidad.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Más de 400 animales refugiados y proyectos activos de rescate, conservación y educación en la región.
                </p>
          </div>
        </section>

        <SectionDivider />

        {/* Bloque 1: Nuestra misión */}
        <section className="bg-white px-6 py-7 text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Nuestra razón de ser</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Misión y compromiso</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
              </p>
              <p className="text-sm font-medium text-gray-900 mb-3">Objetivos:</p>
              <div className="space-y-3">
                {objetivos.map((item) => (
                  <DecoListItem key={item} desc={item} />
                ))}
              </div>
        </section>

        <SectionDivider />

        {/* Bloque 2: Amenazas */}
        <section className="bg-white px-6 py-7 text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">El contexto que nos convoca</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Las principales amenazas a la fauna silvestre</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Organismos como Fundación Bubalcó nacen como respuesta a una crisis real: la fauna silvestre enfrenta amenazas crecientes que ponen en riesgo la biodiversidad de toda la región y del mundo.
              </p>
              <div className="space-y-4">
                {amenazas.map((item) => (
                  <DecoListItem key={item.title} title={item.title} desc={item.desc} />
                ))}
              </div>
        </section>

        <SectionDivider />

        {/* Bloque 3: Valores */}
        <section className="bg-white px-6 py-7 text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Nuestros valores</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Lo que nos mueve</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Bubalcó es una convicción: que la naturaleza merece defensores concretos y que el conocimiento verdadero es la herramienta de cambio más poderosa.
              </p>
              <div className="space-y-4">
                {valores.map((item) => (
                  <DecoListItem key={item.title} title={item.title} desc={item.desc} />
                ))}
              </div>
        </section>

        <SectionDivider />

        {/* Bloque 4: Refugio */}
        <section className="bg-white">
          <div className="w-full h-48 overflow-hidden">
            <img
              src={asset('/nuestro-trabajo-refugio.jpeg')}
              alt="Refugio para animales silvestres en Bubalcó Patagonia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-6 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Refugio</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">Una casa para animales que no pueden volver a la naturaleza</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  El Bioparque Bubalcó Patagonia es un espacio con instalaciones únicas en la región para el cuidado de animales silvestres que no pueden regresar a su hábitat natural.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  El Bioparque Bubalcó es un espacio de conservación de fauna silvestre ubicado en una isla del río Negro, Patagonia argentina, con 34 hectáreas íntegramente destinadas a los animales. Es hogar de más de 400 animales silvestres y cuenta con un equipo dedicado a garantizarles una vida digna y con bienestar.
                </p>
          </div>
        </section>

        <SectionDivider />

        {/* Bloque 5: Conservación */}
        <section className="bg-white">
          <div className="w-full h-48 overflow-hidden">
            <img
              src={asset('/nuestro-trabajo-conservacion.jpeg')}
              alt="Trabajo de conservación de fauna silvestre en Bubalcó Patagonia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-6 flex flex-col justify-center text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Conservación</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">Acciones para proteger</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Desarrollamos proyectos activos de conservación de fauna silvestre con especies de Argentina y de todo el mundo.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  En Bubalcó trabajamos en la conservación de especies en peligro de extinción a través de programas concretos: reproducción controlada, reinserción en hábitat natural, investigación científica aplicada y educación ambiental.
                </p>
          </div>
        </section>

        <SectionDivider />

        {/* Bloque 6: Rescate */}
        <section className="bg-white px-6 py-8 flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Rescate</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Cuando la fauna silvestre necesita ayuda</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Rescate y rehabilitación de fauna silvestre en Río Negro y Neuquén.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                En Bubalcó asistimos con rescates, tránsitos, liberaciones y cuidados permanentes de fauna silvestre a Fauna Río Negro y Neuquén. Colaboramos con instituciones afines y con la comunidad cuando es necesario.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Hoy el 40% de los animales que habitan el bioparque provienen de rescates cuya reinserción en la naturaleza no fue posible.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                También recibimos animales de otros centros, antiguos zoológicos y particulares que ya no pueden garantizarles las mejores condiciones. Para todos ellos, Bubalcó es una segunda oportunidad.
              </p>
        </section>

        <SectionDivider />

        {/* Bloque 7: Educación */}
        <section className="bg-white px-6 py-8 flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación Ambiental</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">El conocimiento es la base del cambio</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Abrimos nuestras puertas a la comunidad, las escuelas y a todo aquel que quiera conectar con la naturaleza y sumar al proyecto.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                En Bubalcó creemos que la conservación de la fauna silvestre empieza por el conocimiento y la empatía.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Por eso trabajamos de la mano con la comunidad de Río Negro y la Patagonia, recibimos escuelas y desarrollamos espacios de aprendizaje para todo público.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Una experiencia de educación ambiental concreta: una forma de enseñar, concientizar y lograr que el amor por los animales se convierta en acción real.
              </p>
              <p className="text-sm font-medium text-gray-900 mb-6 italic">Que nada le gane al verdadero conocimiento.</p>
              <Link
                to={ROUTES.visitasEscolares}
                className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mx-auto"
              >
                Visitas educativas
              </Link>
        </section>

        <FooterSlide />
      </div>
      )}

      {isDesktop && (
      <div className="md:contents">
        <section id="nt-hero" data-slide-label="Inicio" className="scroll-section relative md:min-h-screen md:pt-[130px] md:bg-white overflow-hidden">
          <div className="grid md:grid-cols-[52fr_48fr] min-h-[calc(100vh-130px)]">
            <div className="relative min-h-[240px] md:min-h-0">
              <img
                src={asset('/nuestro-trabajo-hero.jpeg')}
                alt="Fauna silvestre bajo el cuidado de Bubalcó Patagonia"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 18%' }}
              />
            </div>
            <div className="flex items-center px-8 lg:px-12 xl:px-14 py-8 lg:py-10">
              <div className="max-w-md lg:max-w-lg text-left">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">
                  Fundación Bubalcó Patagonia Argentina
                </p>
                <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-medium text-gray-900 mb-4 leading-tight">
                  Proteger la <span className="text-brand">Biodiversidad</span>
                </h1>
                <p className="text-sm lg:text-base text-gray-500 leading-relaxed mb-5">
                  En una isla del río Negro, en el corazón de la Patagonia argentina, Bubalcó trabaja para proteger la fauna silvestre, conservar especies en peligro de extinción y concientizar a la comunidad.
                </p>
                <div className="border-l-[3px] border-accent pl-4 mb-6">
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    Más de 400 animales refugiados y proyectos activos de rescate, conservación y educación en la región.
                  </p>
                </div>
                <Link
                  to={ROUTES.donaciones}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors"
                >
                  Apoyá la conservación
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="nt-mision" data-slide-label="Misión" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 min-h-[calc(100vh-130px)] flex items-center">
          <div className="w-full rounded-[32px] bg-[#F7FAF8] border border-gray-100 px-10 lg:px-12 py-12 lg:py-14 border-t-2 border-t-brand/30">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
              <div className="text-left">
                <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestra razón de ser</p>
                <h2 className="text-3xl font-medium text-gray-900 mb-4">Misión y compromiso</h2>
                <p className="text-base text-gray-500 leading-relaxed mb-4">
                  Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                  Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <p className="text-base font-medium text-gray-900 mb-5">Objetivos:</p>
                <div className="space-y-4">
                  {objetivos.map((item) => (
                    <DecoListItem key={item} desc={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section id="nt-amenazas" data-slide-label="Amenazas" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 min-h-[calc(100vh-130px)] flex items-center">
          <div className="w-full rounded-[32px] bg-gray-50 border border-gray-100 px-10 lg:px-12 py-12 lg:py-14">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">El contexto que nos convoca</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Las principales amenazas a la fauna silvestre</h2>
              <p className="text-base text-gray-500 leading-relaxed">
                Organismos como Fundación Bubalcó nacen como respuesta a una crisis real: la fauna silvestre enfrenta amenazas crecientes que ponen en riesgo la biodiversidad de toda la región y del mundo.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mt-10">
              {amenazas.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-left">
                  <div className="h-1 w-10 rounded-full bg-brand/70 mb-5" />
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section id="nt-valores" data-slide-label="Valores" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-6 md:px-12 text-center min-h-[calc(100vh-130px)] flex flex-col justify-center py-4">
            <p className="text-xs tracking-widest text-brand uppercase mb-2">Nuestros valores</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-3">Lo que nos mueve</h2>
            <div className="w-full max-w-[59rem] mx-auto">
              <p className="text-base text-gray-500 leading-relaxed mb-4 text-center">
                Bubalcó es una convicción: que la naturaleza merece defensores concretos y que el conocimiento verdadero es la herramienta de cambio más poderosa.
              </p>
              <div className="space-y-3 text-left">
                {valores.map((item) => (
                  <DecoListItem key={item.title} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="nt-refugio" data-slide-label="Refugio" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-130px)]">
            <img
              src={asset('/nuestro-trabajo-refugio.jpeg')}
              alt="Refugio para animales silvestres en Bubalcó Patagonia"
              className="w-full rounded-2xl object-cover h-80"
            />
            <div className="text-center md:text-left">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Refugio</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Una casa para animales que no pueden volver a la naturaleza</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                El Bioparque Bubalcó Patagonia es un espacio con instalaciones únicas en la región para el cuidado de animales silvestres que no pueden regresar a su hábitat natural.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                El Bioparque Bubalcó es un espacio de conservación de fauna silvestre ubicado en una isla del río Negro, Patagonia argentina, con 34 hectáreas íntegramente destinadas a los animales. Es hogar de más de 400 animales silvestres y cuenta con un equipo dedicado a garantizarles una vida digna y con bienestar.
              </p>
            </div>
          </div>
        </section>

        <section id="nt-conservacion" data-slide-label="Conservación" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-130px)]">
            <div className="md:order-first text-center md:text-left">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Conservación</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Acciones para proteger</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Desarrollamos proyectos activos de conservación de fauna silvestre con especies de Argentina y de todo el mundo.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                En Bubalcó trabajamos en la conservación de especies en peligro de extinción a través de programas concretos: reproducción controlada, reinserción en hábitat natural, investigación científica aplicada y educación ambiental.
              </p>
            </div>
            <img
              src={asset('/nuestro-trabajo-conservacion.jpeg')}
              alt="Trabajo de conservación de fauna silvestre en Bubalcó Patagonia"
              className="w-full rounded-2xl object-cover h-80 md:order-last"
            />
          </div>
        </section>

        <section id="nt-rescate" data-slide-label="Rescate" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-130px)]">
            <img
              src={asset('/nuestro-trabajo-rescate.jpeg')}
              alt="Rescate de fauna silvestre en Bubalcó Patagonia"
              className="w-full rounded-2xl object-cover h-80"
            />
            <div className="text-center md:text-left">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Rescate</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Cuando la fauna silvestre necesita ayuda</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Rescate y rehabilitación de fauna silvestre en Río Negro y Neuquén.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                En Bubalcó asistimos con rescates, tránsitos, liberaciones y cuidados permanentes de fauna silvestre a Fauna Río Negro y Neuquén. Colaboramos con instituciones afines y con la comunidad cuando es necesario.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Hoy el 40% de los animales que habitan el bioparque provienen de rescates cuya reinserción en la naturaleza no fue posible.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                También recibimos animales de otros centros, antiguos zoológicos y particulares que ya no pueden garantizarles las mejores condiciones. Para todos ellos, Bubalcó es una segunda oportunidad.
              </p>
            </div>
          </div>
        </section>

        <section id="nt-educacion" data-slide-label="Educación" className={`${desktopSlide} md:bg-[#F7FAF8]`}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-12 min-h-[calc(100vh-130px)] flex items-center">
            <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center py-8">
              <div className="text-left">
                <p className="text-xs tracking-widest text-brand uppercase mb-4">Educación Ambiental</p>
                <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 leading-tight">El conocimiento es la base del cambio</h2>
                <p className="text-base text-gray-500 leading-relaxed mb-4">
                  Abrimos nuestras puertas a la comunidad, las escuelas y a todo aquel que quiera conectar con la naturaleza y sumar al proyecto.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  En Bubalcó creemos que la conservación de la fauna silvestre empieza por el conocimiento y la empatía.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Por eso trabajamos de la mano con la comunidad de Río Negro y la Patagonia, recibimos escuelas y desarrollamos espacios de aprendizaje para todo público.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Una experiencia de educación ambiental concreta: una forma de enseñar, concientizar y lograr que el amor por los animales se convierta en acción real.
                </p>
              </div>
              <div className="lg:border-l lg:border-brand/15 lg:pl-12 text-left">
                <p className="text-2xl lg:text-[1.75rem] font-medium text-gray-900 leading-snug mb-8">
                  <span className="text-brand/25 text-4xl leading-none align-top mr-1">"</span>
                  Que nada le gane al verdadero conocimiento.
                </p>
                <Link
                  to={ROUTES.visitasEscolares}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
                >
                  Visitas educativas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      )}
    </>
  );
}
