import React from 'react';
import { Check, Star, Crown, Gift } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Essentials",
      price: "R$ 6.900",
      originalPrice: "R$ 9.900",
      icon: Star,
      popular: false,
      description: "Para cirurgiões que querem dominar o básico",
      features: [
        "Acesso aos 4 módulos principais",
        "50+ vídeos em alta definição",
        "Material didático em PDF",
        "Certificado de conclusão",
        "Suporte por email",
        "Acesso por 12 meses"
      ],
      cta: "Começar agora",
      highlight: false
    },
    {
      name: "Experience",
      price: "R$ 11.900",
      originalPrice: "R$ 16.900",
      icon: Crown,
      popular: true,
      description: "O programa completo para resultados excepcionais",
      features: [
        "Tudo do plano Essentials",
        "Mentoria personalizada (6 sessões)",
        "Lives mensais exclusivas",
        "Grupo VIP no Telegram",
        "Biblioteca de casos clínicos",
        "Suporte prioritário",
        "Acesso vitalício",
        "Atualizações gratuitas"
      ],
      cta: "Garantir minha vaga",
      highlight: true
    },
    {
      name: "Experience at Home",
      price: "R$ 49.900",
      originalPrice: "R$ 69.900",
      icon: Gift,
      popular: false,
      description: "Experiência completa com mentoria presencial",
      features: [
        "Tudo do plano Experience",
        "2 dias de imersão presencial",
        "Prática supervisionada",
        "Networking com especialistas",
        "Kit de instrumentos exclusivo",
        "Mentoria presencial individual",
        "Suporte vitalício",
        "Acesso a eventos futuros"
      ],
      cta: "Experiência completa",
      highlight: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="investimento" className="py-16 sm:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
            Escolha seu <span className="text-gold">Investimento</span>
          </h2>
          <p className="font-lora text-base sm:text-lg lg:text-xl text-light-gray max-w-3xl mx-auto leading-relaxed px-4">
            Três modalidades pensadas para diferentes perfis e necessidades. 
            Todos os planos incluem garantia incondicional de 30 dias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 animate-slide-up">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                plan.highlight ? 'border-2 border-gold lg:scale-105' : 'border-2 border-gold/30 hover:border-gold/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-gold to-yellow-600 text-navy px-4 sm:px-6 py-1 sm:py-2 rounded-full font-montserrat font-bold text-xs sm:text-sm animate-pulse-glow">
                      MAIS PROCURADO
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
                      plan.highlight ? 'bg-gradient-to-br from-gold to-yellow-600' : 'bg-gold/20'
                    } hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25`}>
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${plan.highlight ? 'text-navy' : 'text-gold'}`} />
                    </div>
                    
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                    <p className="font-lora text-sm sm:text-base text-light-gray mb-3 sm:mb-4 px-2">{plan.description}</p>
                    
                    <div className="mb-3 sm:mb-4">
                      <div className="font-playfair text-2xl sm:text-4xl font-bold text-navy">{plan.price}</div>
                      <div className="font-lora text-base sm:text-lg text-light-gray line-through">{plan.originalPrice}</div>
                      <div className="font-montserrat text-xs sm:text-sm text-green-600 font-semibold">
                        até 12x sem juros
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0 mt-0.5 hover:scale-110 transition-transform duration-300" />
                        <span className="font-lora text-sm sm:text-base text-navy">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection('final-cta')}
                    className={`w-full py-3 sm:py-4 rounded-lg font-montserrat font-bold text-base sm:text-lg transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-gold to-yellow-600 text-navy hover:shadow-2xl hover:shadow-gold/25 transform hover:scale-105 hover:-translate-y-1'
                        : 'bg-gradient-to-r from-navy to-blue-900 text-off-white hover:from-blue-900 hover:to-navy hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/20">
          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
            Oferta Especial por Tempo Limitado
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-gold mb-2">30%</div>
              <div className="font-lora text-sm sm:text-base text-light-gray">Desconto especial</div>
              <div className="font-montserrat text-xs sm:text-sm text-green-400 mt-1">Economia de até R$ 20.000</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-gold mb-2">12x</div>
              <div className="font-lora text-sm sm:text-base text-light-gray">Sem juros</div>
              <div className="font-montserrat text-xs sm:text-sm text-green-400 mt-1">Facilite seu investimento</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 sm:col-span-3 md:col-span-1">
              <div className="font-playfair text-2xl sm:text-3xl font-bold text-gold mb-2">30 dias</div>
              <div className="font-lora text-sm sm:text-base text-light-gray">Garantia total</div>
              <div className="font-montserrat text-xs sm:text-sm text-green-400 mt-1">Risco zero para você</div>
            </div>
          </div>
          <p className="font-lora text-sm sm:text-base lg:text-lg text-light-gray leading-relaxed px-4">
            Esta oferta especial é válida apenas para as primeiras 50 inscrições. 
            Não perca a oportunidade de transformar sua carreira com desconto exclusivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;