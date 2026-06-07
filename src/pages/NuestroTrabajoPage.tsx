import { Link } from 'react-router-dom';
import { ROUTES } from '../data/site';
import { asset } from '../utils/asset';
import FooterSlide from '../components/FooterSlide';

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
  return (
    <>
      <div className="bioparque-slides md:hidden">
        {/* Hero */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="w-full h-[42%] overflow-hidden flex-shrink-0">
                <img
                  src={asset('/nuestro-trabajo-hero.jpeg')}
                  alt="Fauna silvestre bajo el cuidado de Bubalcó Patagonia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col justify-center text-center">
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
            </div>
          </div>
        </section>

        {/* Bloque 1: Nuestra misión */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-7">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Nuestra razón de ser</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Misión y compromiso</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
              </p>
              <p className="text-sm font-medium text-gray-900 mb-3 text-left">Objetivos:</p>
              <div className="space-y-3">
                {objetivos.map((item) => (
                  <DecoListItem key={item} desc={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bloque 2: Amenazas */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-7">
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
            </div>
          </div>
        </section>

        {/* Bloque 3: Valores */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-7">
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
            </div>
          </div>
        </section>

        {/* Bloque 4: Refugio */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="w-full h-[34%] overflow-hidden flex-shrink-0">
                <img
                  src={asset('/nuestro-trabajo-refugio.jpeg')}
                  alt="Refugio para animales silvestres en Bubalcó Patagonia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="slide-card__scroll flex-1 px-6 py-6 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Refugio</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">Una casa para animales que no pueden volver a la naturaleza</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  El Bioparque Bubalcó Patagonia es un espacio con instalaciones únicas en la región para el cuidado de animales silvestres que no pueden regresar a su hábitat natural.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  El Bioparque Bubalcó es un espacio de conservación de fauna silvestre ubicado en una isla del río Negro, Patagonia argentina, con 34 hectáreas íntegramente destinadas a los animales. Es hogar de más de 400 animales silvestres y cuenta con un equipo dedicado a garantizarles una vida digna y con bienestar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloque 5: Conservación */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="w-full h-[34%] overflow-hidden flex-shrink-0">
                <img
                  src={asset('/nuestro-trabajo-conservacion.jpeg')}
                  alt="Trabajo de conservación de fauna silvestre en Bubalcó Patagonia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col justify-center text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Conservación</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">Acciones para proteger</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Desarrollamos proyectos activos de conservación de fauna silvestre con especies de Argentina y de todo el mundo.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  En Bubalcó trabajamos en la conservación de especies en peligro de extinción a través de programas concretos: reproducción controlada, reinserción en hábitat natural, investigación científica aplicada y educación ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloque 6: Rescate */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-8 flex flex-col justify-center text-center">
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
            </div>
          </div>
        </section>

        {/* Bloque 7: Educación */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-8 flex flex-col justify-center text-center">
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
            </div>
          </div>
        </section>

        <FooterSlide sectionClassName="bp-slide" />
      </div>

      {/* Desktop */}
      <div className="hidden md:block pt-[9rem] pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          <div className="text-center">
            <img
              src={asset('/nuestro-trabajo-hero.jpeg')}
              alt="Fauna silvestre bajo el cuidado de Bubalcó Patagonia"
              className="w-full object-cover h-[480px] mb-10"
            />
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Fundación Bubalcó Patagonia Argentina</p>
            <h1 className="text-4xl font-medium text-gray-900 mb-6 max-w-3xl mx-auto">Proteger la Biodiversidad</h1>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl mx-auto">
              En una isla del río Negro, en el corazón de la Patagonia argentina, Bubalcó trabaja para proteger la fauna silvestre, conservar especies en peligro de extinción y concientizar a la comunidad.
            </p>
            <p className="text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Más de 400 animales refugiados y proyectos activos de rescate, conservación y educación en la región.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestra razón de ser</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Misión y compromiso</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
            </p>
            <p className="text-base font-medium text-gray-900 mb-4">Objetivos:</p>
            <div className="space-y-3">
              {objetivos.map((item) => (
                <DecoListItem key={item} desc={item} />
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">El contexto que nos convoca</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Las principales amenazas a la fauna silvestre</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Organismos como Fundación Bubalcó nacen como respuesta a una crisis real: la fauna silvestre enfrenta amenazas crecientes que ponen en riesgo la biodiversidad de toda la región y del mundo.
            </p>
            <div className="space-y-4">
              {amenazas.map((item) => (
                <DecoListItem key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestros valores</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Lo que nos mueve</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              Bubalcó es una convicción: que la naturaleza merece defensores concretos y que el conocimiento verdadero es la herramienta de cambio más poderosa.
            </p>
            <div className="space-y-4">
              {valores.map((item) => (
                <DecoListItem key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src={asset('/nuestro-trabajo-refugio.jpeg')}
              alt="Refugio para animales silvestres en Bubalcó Patagonia"
              className="w-full rounded-2xl object-cover h-80"
            />
            <div>
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-first">
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

          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Rescate</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Cuando la fauna silvestre necesita ayuda</h2>
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

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Educación Ambiental</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">El conocimiento es la base del cambio</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
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
            <p className="text-base font-medium text-gray-900 mb-8 italic">Que nada le gane al verdadero conocimiento.</p>
            <Link
              to={ROUTES.visitasEscolares}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
            >
              Visitas educativas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
