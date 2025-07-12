import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItemProps {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick, id }) => {
  const panelId = `faq-panel-${id}`;
  const headerId = `faq-header-${id}`;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gold/10 overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/30 transform hover:scale-105">
      <button
        id={headerId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 group"
      >
        <h4 className="font-playfair text-lg font-semibold text-navy pr-4 group-hover:text-gold transition-colors duration-300">
          {faq.question}
        </h4>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-gold transform rotate-0 transition-transform duration-300 hover:scale-110" />
          ) : (
            <Plus className="w-6 h-6 text-gold transform rotate-0 transition-transform duration-300 group-hover:rotate-90 hover:scale-110" />
          )}
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-6">
            <div className="pt-4 border-t border-gray-100">
              <p className="font-lora text-light-gray leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
