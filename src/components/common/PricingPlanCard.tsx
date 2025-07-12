import React from 'react';
import { LucideProps, Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  originalPrice: string;
  icon: React.ElementType<LucideProps>;
  popular: boolean;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

interface PricingPlanCardProps {
  plan: Plan;
  onCtaClick: () => void;
}

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ plan, onCtaClick }) => {
  const { icon: Icon, name, price, originalPrice, popular, description, features, cta, highlight } = plan;

  return (
    <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
      highlight ? 'border-2 border-gold lg:scale-105' : 'border-2 border-gold/30 hover:border-gold/50'
    }`}>
      {popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-gold to-yellow-600 text-navy px-4 sm:px-6 py-1 sm:py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm animate-pulse-glow">
            MAIS PROCURADO
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
            highlight ? 'bg-gradient-to-br from-gold to-yellow-600' : 'bg-gold/20'
          } hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25`}>
            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${highlight ? 'text-navy' : 'text-gold'}`} />
          </div>

          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">{name}</h3>
          <p className="font-lora text-sm sm:text-base text-light-gray mb-3 sm:mb-4 px-2">{description}</p>

          <div className="mb-3 sm:mb-4">
            <div className="font-playfair text-2xl sm:text-4xl font-bold text-navy">{price}</div>
            <div className="font-lora text-base sm:text-lg text-light-gray line-through">{originalPrice}</div>
            <div className="font-montserrat text-xs sm:text-sm text-green-600 font-semibold">
              até 12x sem juros
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-2 sm:space-x-3">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5 hover:scale-110 transition-transform duration-300" />
              <span className="font-lora text-sm sm:text-base text-navy">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onCtaClick}
          className={`w-full py-3 sm:py-4 rounded-lg font-montserrat font-bold text-base sm:text-lg transition-all duration-300 ${
            highlight
              ? 'bg-gradient-to-r from-gold to-yellow-600 text-navy hover:shadow-2xl hover:shadow-gold/25 transform hover:scale-105 hover:-translate-y-1'
              : 'bg-gradient-to-r from-navy to-blue-900 text-off-white hover:from-blue-900 hover:to-navy hover:shadow-lg'
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;
