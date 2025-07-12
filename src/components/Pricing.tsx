import React from 'react';
import { Star, Crown, Gift } from 'lucide-react';
import PricingPlanCard from './common/PricingPlanCard'; // Ajuste o caminho se necessário

const plansData = [
  {
    id: "essentials", // Adicionando ID único
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
    id: "experience",
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
    id: "experience_at_home",
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

const Pricing: React.FC = () => {
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
          {plansData.map((plan) => (
            <PricingPlanCard
              key={plan.id}
              plan={plan}
              onCtaClick={() => scrollToSection('final-cta')}
            />
          ))}
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