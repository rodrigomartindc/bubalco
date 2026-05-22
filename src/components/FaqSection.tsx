import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FaqAccordion from './FaqAccordion';
import { faqItems } from '../data/faq';

export default function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-white py-16 md:py-20">
      <div className={`max-w-3xl mx-auto px-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest text-brand uppercase mb-4">Preguntas frecuentes</p>
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-3">
            Todo lo que necesitás saber
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Respuestas claras para planificar tu visita a Bubalcó
          </p>
        </div>

        <FaqAccordion items={faqItems} />

        <div className="text-center mt-8">
          <Link
            to="/bioparque/preguntas-frecuentes"
            className="group inline-flex items-center gap-2 text-sm text-brand font-medium hover:text-brand-dark transition-colors"
          >
            Ver todas las preguntas frecuentes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
