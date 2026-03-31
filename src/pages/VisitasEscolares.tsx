import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+quiero+info+sobre+visitas+escolares!&type=phone_number&app_absent=0';

export default function VisitasEscolares() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-[7.5rem] pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">Educación</p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Un aula en la naturaleza</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-3xl">
            Acercamos a estudiantes y visitantes a la fauna y la conservación de forma directa y participativa.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-12 max-w-3xl">
            Nuestros recorridos están diseñados para enseñar sobre las especies, sus ecosistemas y la importancia de protegerlos. Cada visita combina información científica, historias de los animales y actividades que fomentan la empatía y el compromiso con la naturaleza.
          </p>

          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center mb-12">
            <p className="text-sm text-gray-400 mb-4">Fotos y contenido próximamente</p>
          </div>

          <div className="text-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
            >
              Reservá para tu curso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
