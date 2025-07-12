import React from 'react';
import { X } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      title: "Resultados Inconsistentes",
      description: "Dificuldade em obter resultados previsíveis e naturais, gerando insatisfação dos pacientes e comprometendo sua reputação profissional"
    },
    {
      title: "Técnicas Desatualizadas",
      description: "Uso de métodos obsoletos que não acompanham a evolução da cirurgia facial moderna, resultando em complicações evitáveis"
    },
    {
      title: "Falta de Diferenciação",
      description: "Ausência de técnicas exclusivas em um mercado cada vez mais competitivo, perdendo pacientes para concorrentes mais especializados"
    },
    {
      title: "Complicações Frequentes",
      description: "Alto índice de revisões e complicações por falta de conhecimento em protocolos avançados de segurança e execução"
    }
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-6">
            Por Que Seus Resultados em Cirurgia Facial <span className="text-red-500">Não São Consistentes?</span>
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Identificamos os principais obstáculos que impedem cirurgiões talentosos de alcançarem 
            a excelência e consistência em seus resultados faciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-slide-up">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start space-x-6 p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl shadow-sm border border-red-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-red-400">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-6 h-6 text-off-white" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-off-white mb-3">{problem.title}</h3>
                <p className="font-lora text-light-gray leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 md:p-12 text-center border border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-off-white mb-6">
            O Impacto de Não Agir
          </h3>
          
          <p className="font-lora text-lg text-light-gray max-w-3xl mx-auto leading-relaxed mb-8">
            <span className="text-red-400 font-bold text-2xl">78% dos cirurgiões enfrentam complicações por técnicas inadequadas.</span><br/>
            Não se atualizar pode custar caro à sua reputação e à sua prática. A cada dia que passa sem dominar 
            as técnicas mais avançadas, você perde oportunidades e pacientes para concorrentes mais preparados.
          </p>

          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 md:p-12 text-center text-off-white border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500">
            <h4 className="font-playfair text-2xl font-bold text-gold mb-4">
              Placeholder para Gráfico Comparativo
            </h4>
            <p className="font-lora text-light-gray">
              Aqui será exibido um gráfico mostrando a diferença entre resultados com e sem as técnicas LowerLift®. 
              Dados comparativos de satisfação do paciente, taxa de complicações e tempo de recuperação.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-red-400 mb-1">-40%</div>
              <div className="font-lora text-sm text-light-gray">Perda de pacientes</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-red-400 mb-1">+60%</div>
              <div className="font-lora text-sm text-light-gray">Risco de complicações</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-red-400 mb-1">-50%</div>
              <div className="font-lora text-sm text-light-gray">Competitividade no mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;