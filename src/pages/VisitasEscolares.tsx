import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL_VISITAS_ESCOLARES } from '../data/site';
import FooterSlide from '../components/FooterSlide';


export default function VisitasEscolares() {
  return (
    <>
      {/* ── Mobile: scroll-snap slides ────────────────────────────── */}
      <div className="bioparque-slides md:hidden">

        {/* Slide 1: Educación ambiental */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación ambiental</p>
              <h1 className="text-2xl font-medium text-gray-900 mb-3">Un aula en la naturaleza</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Te acercamos a la conservación de forma directa y participativa.
              </p>
              <a href={WHATSAPP_URL_VISITAS_ESCOLARES} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                Reservá para tu escuela <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Slide 2: Información / cita */}
        <section className="bp-slide">
          <div className="bp-card bg-gray-50">
            <div className="slide-card__scroll px-6 py-6">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Conciencia</p>
              <div className="bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-5 mb-4">
                <h2 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                  "El conocimiento sin amor no prende"
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Una cita de John Burroughs que representa nuestro objetivo con los guiados escolares: sembrar conciencia de conservación a través del amor, la empatía y la conexión.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand-dark p-5">
                <p className="text-xs tracking-widest text-brand-dark uppercase mb-3">Aprendizaje</p>
                <h2 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                  Experiencias adaptadas para escuelas
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  Cada visita combina información científica, la historia de cada animal y actividades que fomentan la empatía y el compromiso con la naturaleza.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  La educación es la base para generar un cambio real en cómo nos relacionamos con el medio ambiente y otras especies. Tomar conciencia de nuestro impacto es el primer paso para construir un futuro en el que a todos nos gustaría vivir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterSlide sectionClassName="bp-slide" />
      </div>

      {/* ── Desktop: normal flow ───────────────────────────────────── */}
      <div className="hidden md:block pt-[9rem] pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-20">

          {/* Bloque 1 */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Educación ambiental</p>
            <h1 className="text-4xl font-medium text-gray-900 mb-4">Un aula en la naturaleza</h1>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-2xl">
              Te acercamos a la conservación de forma directa y participativa.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Cada visita combina información científica, la historia de cada animal y actividades que fomentan la empatía y el compromiso con la naturaleza. Se adapta según nivel escolar y armamos experiencias únicas para las escuelas.
            </p>
            <a href={WHATSAPP_URL_VISITAS_ESCOLARES} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Reservá para tu escuela <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bloque 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 border-l-4 border-l-brand bg-gray-50 p-8">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Conciencia</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 leading-snug">
                "El conocimiento sin amor no prende"
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Una cita de John Burroughs que representa nuestro objetivo con los guiados escolares: sembrar conciencia de conservación a través del amor, la empatía y la conexión.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 border-l-4 border-l-brand-dark bg-gray-50 p-8">
              <p className="text-xs tracking-widest text-brand-dark uppercase mb-4">Aprendizaje</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                La educación es la base para generar un cambio real en cómo nos relacionamos con el medio ambiente y otras especies. Tomar conciencia de nuestro impacto es el primer paso para construir un futuro en el que a todos nos gustaría vivir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
