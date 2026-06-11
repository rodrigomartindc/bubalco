import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL_VISITAS_ESCOLARES } from '../data/site';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { useDesktopSnap } from '../hooks/useDesktopSnap';
import FooterSlide from '../components/FooterSlide';
import { asset } from '../utils/asset';

const desktopSlide = 'scroll-section relative md:min-h-screen md:flex md:items-center md:pt-[130px]';

export default function VisitasEscolares() {
  const isDesktop = useIsDesktop();
  useDesktopSnap(isDesktop);

  return (
    <>
      {!isDesktop && (
      <div className="bioparque-slides">
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full px-6 py-8 flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación ambiental</p>
              <h1 className="text-2xl font-medium text-gray-900 mb-3">Un aula en la naturaleza</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Te acercamos a la conservación de forma directa y participativa.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Cada visita combina información científica, la historia de cada animal y actividades que fomentan la empatía y el compromiso con la naturaleza. Se adapta según nivel escolar y armamos experiencias únicas para las escuelas.
              </p>
              <a href={WHATSAPP_URL_VISITAS_ESCOLARES} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mx-auto">
                Reservá para tu escuela <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="w-full h-[34%] overflow-hidden flex-shrink-0">
                <img
                  src={asset('/visitas-escolares-conciencia.jpeg')}
                  alt="Educación ambiental en Bubalcó Patagonia"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 px-6 py-6 flex flex-col justify-center text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Conciencia</p>
                <h2 className="text-2xl font-medium text-gray-900 mb-4 leading-snug">"El conocimiento sin amor no prende"</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Una cita de John Burroughs que representa nuestro objetivo con los guiados escolares: sembrar conciencia de conservación a través del amor, la empatía y la conexión.
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
      )}

      {isDesktop && (
      <div className="md:contents">
        <section id="ve-intro" data-slide-label="Intro" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-2xl mx-auto px-6 md:px-12 text-center min-h-[calc(100vh-130px)] flex flex-col justify-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Educación ambiental</p>
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4 leading-tight">Un aula en la naturaleza</h1>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Te acercamos a la conservación de forma directa y participativa.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Cada visita combina información científica, la historia de cada animal y actividades que fomentan la empatía y el compromiso con la naturaleza. Se adapta según nivel escolar y armamos experiencias únicas para las escuelas.
            </p>
            <a href={WHATSAPP_URL_VISITAS_ESCOLARES} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors mx-auto">
              Reservá para tu escuela <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <section id="ve-conciencia" data-slide-label="Conciencia" className={`${desktopSlide} md:bg-white`}>
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-130px)]">
            <div className="text-center lg:text-left">
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Conciencia</p>
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4 leading-snug">
                "El conocimiento sin amor no prende"
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-5">
                Una cita de John Burroughs que representa nuestro objetivo con los guiados escolares: sembrar conciencia de conservación a través del amor, la empatía y la conexión.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                La educación es la base para generar un cambio real en cómo nos relacionamos con el medio ambiente y otras especies. Tomar conciencia de nuestro impacto es el primer paso para construir un futuro en el que a todos nos gustaría vivir.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={asset('/visitas-escolares-conciencia.jpeg')}
                alt="Educación ambiental en Bubalcó Patagonia"
                className="w-full max-w-[520px] h-[420px] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <FooterSlide />
      </div>
      )}
    </>
  );
}
