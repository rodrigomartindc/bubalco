import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;
        return (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              id={`${id}-btn`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900 pr-4">{item.question}</span>
              <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-btn`}
              className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}
            >
              <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed whitespace-pre-line">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
