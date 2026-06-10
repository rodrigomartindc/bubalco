import { ArrowRight, Copy } from 'lucide-react';
import { useState } from 'react';
import { CONTACT, WHATSAPP_URL_DONACIONES } from '../data/site';
import { useIsDesktop } from '../hooks/useIsDesktop';
import FooterSlide from '../components/FooterSlide';
import { asset } from '../utils/asset';

const ALIAS = 'donacion.bubalco';

const destinosAporte = [
  'Alimento',
  'Insumos veterinarios',
  'Medicamentos',
  'Rescates',
  'Enriquecimiento ambiental',
  'Mantenimiento de espacios',
];

function AliasCopiable() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(ALIAS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 bg-accent/10 border border-accent/50 rounded-xl px-4 py-3 w-full hover:bg-accent/15 transition-colors group shadow-sm"
    >
      <div className="flex-1 text-left">
        <p className="text-xs text-accent/80 mb-0.5">Alias CBU/CVU</p>
        <p className="text-sm font-medium text-gray-900">{ALIAS}</p>
      </div>
      <Copy size={15} className={`flex-shrink-0 transition-colors ${copied ? 'text-brand' : 'text-accent group-hover:text-amber-600'}`} />
    </button>
  );
}

export default function Donaciones() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {!isDesktop && (
      <div className="bioparque-slides">

        {/* Slide 1: Información básica */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full px-6 py-8 flex flex-col justify-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Donaciones</p>
              <h1 className="text-2xl font-medium text-gray-900 mb-4">Tu apoyo se convierte en cuidado</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Detrás de cada animal y de cada rescate hay un equipo que trabaja todos los días. Tu donación es parte de ese trabajo.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Podés donar por transferencia al alias de la Fundación. Toda contribución, grande o pequeña, hace la diferencia.
              </p>

              <AliasCopiable />

              <p className="text-xs text-gray-400 mt-3 leading-relaxed text-center">
                Enviá el comprobante a <span className="text-gray-600 font-medium">{CONTACT.donationEmail}</span><br />con el asunto "Mi donación".
              </p>
            </div>
          </div>
        </section>

        {/* Slide 2: En qué se transforma tu aporte */}
        <section className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="h-full px-6 py-8 flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-3">En qué se transforma tu aporte</p>
              <h2 className="text-2xl font-medium text-white mb-4">Cuidado concreto para los animales</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Tu ayuda sostiene necesidades diarias y situaciones urgentes del refugio.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {destinosAporte.map((destino) => (
                  <div key={destino} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-xs text-white/75 leading-tight">{destino}</p>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_URL_DONACIONES} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
                Consultar por donaciones <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Slide 3: Beneficios impositivos */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full px-6 py-8 flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-accent uppercase mb-3">Beneficios impositivos</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Beneficios que quizás no conocías</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Las donaciones a Bubalcó tienen beneficios impositivos para empresas y particulares. Descargá el documento y conocé cómo se aplica en tu caso.
              </p>
              <a
                href={asset('/beneficios-impositivos-bubalco.pdf')}
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors mx-auto"
              >
                Descargar documento
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <FooterSlide sectionClassName="bp-slide" />
      </div>
      )}

      {isDesktop && (
      <div className="pt-[9rem] pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-20">

          {/* Bloque 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Donaciones</p>
              <h1 className="text-4xl font-medium text-gray-900 mb-6">Tu apoyo se convierte en cuidado</h1>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Detrás de cada animal y de cada rescate hay un equipo que trabaja todos los días. Tu donación es parte de ese trabajo.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Podés donar por transferencia al alias de la Fundación. Toda contribución, grande o pequeña, hace la diferencia.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-sm font-medium text-gray-900 mb-4">Cómo donar</p>
              <AliasCopiable />
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Enviá el comprobante a <span className="font-medium text-gray-700">{CONTACT.donationEmail}</span> con el asunto "Mi donación".
              </p>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="bg-brand-dark rounded-2xl p-10 text-white">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">En qué se transforma tu aporte</p>
            <h2 className="text-3xl font-medium text-white mb-4">Cuidado concreto para los animales</h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl">
              Tu ayuda sostiene necesidades diarias y situaciones urgentes del refugio: desde alimento e insumos veterinarios hasta rescates y mantenimiento de espacios.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {destinosAporte.map((destino) => (
                <div key={destino} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm text-white/75">{destino}</p>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL_DONACIONES} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
              Consultar por donaciones <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bloque 3: Beneficios impositivos */}
          <div className="bg-accent/10 rounded-2xl p-10 border border-accent/30">
            <p className="text-xs tracking-widest text-accent uppercase mb-4">Beneficios impositivos</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Beneficios que quizás no conocías</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Las donaciones a Bubalcó tienen beneficios impositivos para empresas y particulares. Descargá el documento y conocé cómo se aplica en tu caso.
            </p>
            <a
              href={asset('/beneficios-impositivos-bubalco.pdf')}
              download
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm tracking-wide rounded-full hover:bg-amber-500 transition-colors"
            >
              Descargar documento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
      )}
    </>
  );
}
