import React from 'react';
import { CheckCircle, Target, Zap, Award } from 'lucide-react';

const Solution: React.FC = () => {
  const solutions = [
    {
      icon: Target,
      title: "Técnicas Exclusivas",
      description: "Domine métodos proprietários que garantem resultados naturais e previsíveis",
      benefits: ["Protocolos testados", "Resultados consistentes", "Diferenciação técnica"]
    },
    {
      icon: Zap,
      title: "Atualização Contínua",
      description: "Mantenha-se sempre à frente com as mais recentes inovações",
      benefits: ["Conteúdo atualizado", "Novas técnicas", "Tendências do mercado"]
    },
    {
      icon: Award,
      title: "Autoridade Reconhecida",
      description: "Torne-se referência em rejuvenescimento facial avançado",
      benefits: ["Credibilidade profissional", "Reconhecimento pelos pares", "Liderança de mercado"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            A <span className="text-gold">solução</span> que você precisa
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            O LowerLift® Experience oferece exatamente o que você precisa para superar 
            os desafios e se destacar no mercado de cirurgia plástica facial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-navy text-center mb-4">
                  {solution.title}
                </h3>
                
                <p className="font-lora text-light-gray text-center mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                      <span className="font-lora text-navy">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-off-white mb-6">
                Transforme sua prática hoje
              </h3>
              <p className="font-lora text-lg text-light-gray leading-relaxed mb-8">
                Não deixe que a concorrência tome sua frente. Invista no seu desenvolvimento 
                profissional e garanta seu lugar entre os melhores cirurgiões do país.
              </p>
              
              <button
                onClick={() => scrollToSection('programa')}
                className="bg-gradient-to-r from-gold to-yellow-600 text-navy px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                Conheça o Programa
              </button>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="font-montserrat text-2xl font-bold text-gold mb-1">500+</div>
                  <div className="font-lora text-sm text-light-gray">Cirurgiões transformados</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="font-montserrat text-2xl font-bold text-gold mb-1">15 anos</div>
                  <div className="font-lora text-sm text-light-gray">De experiência comprovada</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500">
              <h4 className="font-playfair text-xl font-bold text-off-white mb-6 text-center">
                O que você vai conseguir:
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Resultados 300% mais previsíveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Aumento na satisfação dos pacientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Diferenciação competitiva no mercado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">ROI em até 6 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;