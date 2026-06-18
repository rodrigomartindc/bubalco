import FaqAccordion from '../components/FaqAccordion';
import { faqSections } from '../data/faq';
import { WHATSAPP_URL_FAQ } from '../data/site';
import { useIsDesktop } from '../hooks/useIsDesktop';
import FooterSlide from '../components/FooterSlide';

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  ),
};

export default function PreguntasFrecuentes() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      {!isDesktop && (
      <div className="pt-[9rem] bg-white">
        <div className="max-w-3xl mx-auto px-5 py-12">
          <p className="text-xs tracking-widest text-brand uppercase mb-2 text-center">FAQ</p>
          <h1 className="text-3xl font-medium text-gray-900 mb-8 text-center">Preguntas frecuentes</h1>

          <div className="space-y-8">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-medium text-brand uppercase tracking-widest mb-3 pb-2 border-b border-brand/20">
                  {section.title}
                </h2>
                <FaqAccordion items={section.items} />
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-900 mb-1">¿Tenés otra consulta?</p>
            <p className="text-xs text-gray-500 mb-4">Escribinos por WhatsApp.</p>
            <a href={WHATSAPP_URL_FAQ} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
              Contactanos
            </a>
          </div>
        </div>
        <FooterSlide />
      </div>
      )}

      {isDesktop && (
      <div className="pt-[9rem] pb-20 bg-white">
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
      )}
    </>
  );
}
