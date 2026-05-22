import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqItems } from '../data/faq';

export default function FaqSlide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const preview = faqItems;

  return (
    <section className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-white" style={{ textAlign: 'left' }}>
          <div className="h-full flex flex-col px-5 py-5">
            <div className="text-center mb-3">
              <p className="text-xs tracking-widest text-brand uppercase mb-2">FAQ</p>
              <h2 className="text-lg font-medium text-gray-900">Preguntas frecuentes</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5">
              {preview.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between px-4 py-3 text-left bg-white"
                    >
                      <span className="text-sm font-medium text-gray-900 pr-3">{item.question}</span>
                      <ChevronDown size={14} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                      <p className="px-4 pb-3 text-sm text-gray-500 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-3">
              <Link
                to="/bioparque/preguntas-frecuentes"
                className="group inline-flex items-center gap-2 text-sm text-brand font-medium"
              >
                Ver todas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
