import FaqAccordion from '../components/FaqAccordion';
import { faqSections } from '../data/faq';
import { WHATSAPP_URL_FAQ } from '../data/site';
import FooterSlide from '../components/FooterSlide';


export default function PreguntasFrecuentes() {
  return (
    <>
      {/* ── Mobile: scroll-snap slides ────────────────────────────── */}
      <div className="bioparque-slides md:hidden">

        {/* Slide 1: FAQ scrollable */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-5 py-6" style={{ textAlign: 'left' }}>
              <p className="text-xs tracking-widest text-brand uppercase mb-2 text-center">FAQ</p>
              <h1 className="text-2xl font-medium text-gray-900 mb-5 text-center">Preguntas frecuentes</h1>

              <div className="space-y-6">
                {faqSections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-xs font-medium text-brand uppercase tracking-widest mb-2 pb-1 border-b border-brand/20">
                      {section.title}
                    </h2>
                    <FaqAccordion items={section.items} />
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                <p className="text-sm font-medium text-gray-900 mb-1">¿Tenés otra consulta?</p>
                <p className="text-xs text-gray-500 mb-3">Escribinos por WhatsApp.</p>
                <a href={WHATSAPP_URL_FAQ} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </section>

        <FooterSlide sectionClassName="bp-slide" />
      </div>

      {/* ── Desktop: normal flow ───────────────────────────────────── */}
      <div className="hidden md:block pt-[9rem] pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest text-brand uppercase mb-6">FAQ</p>
          <h1 className="text-4xl font-medium text-gray-900 mb-12">Preguntas frecuentes</h1>

          <div className="space-y-10">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-medium text-brand uppercase tracking-widest mb-4 pb-2 border-b border-brand/20">
                  {section.title}
                </h2>
                <FaqAccordion items={section.items} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-2">¿Tenés otra consulta?</h3>
            <p className="text-sm text-gray-500 mb-6">Escribinos por WhatsApp y te respondemos lo antes posible.</p>
            <a href={WHATSAPP_URL_FAQ} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Contactanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
