import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#fcfaf7] border-t border-[#e7ded3]/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45] inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a089]" />
            Dudas Comunes
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1a17] mt-2 font-normal">
            Preguntas frecuentes
          </h2>
          <p className="text-sm text-[#7c7268] mt-2 font-light">
            Todo lo que necesitás saber antes de tu visita al gabinete en Morón.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e7ded3] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#faf5ef] transition-colors"
                >
                  <span className="font-editorial text-lg text-[#1e1a17] font-normal leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f9f3ef] flex items-center justify-center text-[#7a5a45] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#c5a089] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4a433d] font-light leading-relaxed border-t border-[#e7ded3]/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
