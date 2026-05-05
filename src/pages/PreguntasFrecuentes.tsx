import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FaqAccordion from '../components/FaqAccordion';
import { faqItems } from '../data/faq';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+tengo+una+consulta!&type=phone_number&app_absent=0';

export default function PreguntasFrecuentes() {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="pt-[7.5rem] pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-brand uppercase mb-6">FAQ</p>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">Preguntas frecuentes</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-2xl">
            Encontrá respuestas claras sobre cómo visitar Bubalcó, reservar tu entrada, recorrer el predio y planificar mejor tu experiencia.
          </p>

          <FaqAccordion items={faqItems} />

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-2">¿Tenés otra consulta?</h3>
            <p className="text-sm text-gray-500 mb-6">
              Escribinos por WhatsApp y te respondemos lo antes posible.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors"
            >
              Contactanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
