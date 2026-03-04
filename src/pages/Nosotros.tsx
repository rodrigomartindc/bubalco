import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

export default function Nosotros() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-[7.5rem] pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Quiénes Somos</p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">Más que un refugio,<br />una familia</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-2xl">
            Rescatamos, rehabilitamos y protegemos la fauna silvestre mientras educamos a la comunidad sobre la importancia de la conservación. Desde hace más de 30 años trabajamos en Allen, Río Negro, Patagonia Argentina.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <img src={asset('/tucan-bubalco.jpg')} alt="Experiencia Bubalcó" className="w-full rounded-2xl object-cover h-[400px]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Nuestra historia</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Bubalcó nació con la misión de dar refugio a animales silvestres que no pueden regresar a su hábitat natural. A lo largo de los años, nos convertimos en un centro de referencia en conservación y educación ambiental en la Patagonia.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Hoy, con 34 hectáreas a orillas del Río Negro, somos hogar de cientos de animales y recibimos miles de visitantes cada año.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Nuestros valores</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Respeto por la vida', desc: 'Cada animal merece dignidad y cuidado, independientemente de su especie o condición.' },
                { title: 'Compromiso', desc: 'Trabajamos las 24 horas, los 365 días del año, porque la conservación no descansa.' },
                { title: 'Transparencia', desc: 'Rendimos cuentas a nuestra comunidad y donantes con total apertura.' },
                { title: 'Profesionalismo', desc: 'Contamos con equipos capacitados en veterinaria, biología y educación ambiental.' },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-medium text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-2xl bg-brand-dark p-8 md:p-12">
            {[
              { value: '+30', label: 'Años trabajando en conservación' },
              { value: '34', label: 'Hectáreas en la Patagonia Argentina' },
              { value: '3', label: 'Horas de recorrido' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-medium text-white">{s.value}</p>
                <p className="text-xs text-white/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
