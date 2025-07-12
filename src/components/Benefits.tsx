import React from 'react';
import { TrendingUp, Shield, Clock, Star, Users, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de 300% na cartela",
      description: "Resultados comprovados dos nossos alunos em média"
    },
    {
      icon: Shield,
      title: "Resultados mais seguros",
      description: "Protocolos que reduzem drasticamente as complicações"
    },
    {
      icon: Clock,
      title: "ROI em 6 meses",
      description: "Investimento que se paga rapidamente"
    },
    {
      icon: Star,
      title: "Satisfação dos pacientes",
      description: "98% de aprovação nos resultados obtidos"
    },
    {
      icon: Users,
      title: "Network exclusivo",
      description: "Acesso a uma comunidade de cirurgiões de elite"
    },
    {
      icon: Award,
      title: "Certificação reconhecida",
      description: "Credencial que diferencia você no mercado"
    }
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            <span className="text-gold">Benefícios</span> Transformadores
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Veja como o LowerLift® Experience vai revolucionar sua prática profissional 
            e acelerar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/25">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-navy text-center mb-4">
                  {benefit.title}
                </h3>
                
                <p className="font-lora text-light-gray text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-green-500/30">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Resultados Comprovados
          </h3>
          <p className="font-lora text-lg text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Mais de 500 cirurgiões já transformaram suas carreiras com o LowerLift® Experience. 
            Agora é a sua vez de fazer parte deste grupo seleto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-montserrat text-4xl font-bold mb-2">98%</div>
              <div className="font-lora text-green-100">Satisfação</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-montserrat text-4xl font-bold mb-2">300%</div>
              <div className="font-lora text-green-100">Aumento médio</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-montserrat text-4xl font-bold mb-2">6 meses</div>
              <div className="font-lora text-green-100">ROI médio</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-montserrat text-4xl font-bold mb-2">Zero</div>
              <div className="font-lora text-green-100">Arrependimentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;