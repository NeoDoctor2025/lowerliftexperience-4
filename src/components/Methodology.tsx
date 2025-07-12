import React from 'react';
import { PlayCircle, FileText, Users, RefreshCw } from 'lucide-react';

const Methodology: React.FC = () => {
  const methodologyPoints = [
    {
      icon: PlayCircle,
      title: "Aulas Teóricas e Práticas",
      description: "Conteúdo estruturado que combina fundamentos científicos com demonstrações práticas detalhadas"
    },
    {
      icon: FileText,
      title: "Casos Reais Comentados",
      description: "Análise aprofundada de casos clínicos reais com comentários dos especialistas"
    },
    {
      icon: Users,
      title: "Suporte Personalizado",
      description: "Mentoria individual e acompanhamento direto com os professores especialistas"
    },
    {
      icon: RefreshCw,
      title: "Atualizações Constantes",
      description: "Conteúdo sempre atualizado com as mais recentes inovações e técnicas"
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Metodologia <span className="text-gold">Exclusiva</span> LowerLift®
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Nossa abordagem combina o que há de mais avançado em ensino médico com a prática real, 
            garantindo seu domínio completo das técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-slide-up">
          {methodologyPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gold/10 text-center hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-gold/30">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                  <IconComponent className="w-8 h-8 text-navy" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">
                  {point.title}
                </h3>
                
                <p className="font-lora text-light-gray">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-navy to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden min-h-[300px] flex flex-col justify-center hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/20">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Veja a Metodologia em Ação
          </h3>
          <p className="font-lora text-lg text-light-gray max-w-2xl mx-auto leading-relaxed">
            Em breve, um vídeo demonstrativo de como o LowerLift® Experience 
            vai transformar sua prática cirúrgica.
          </p>
          
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-yellow-600/5 pointer-events-none animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;