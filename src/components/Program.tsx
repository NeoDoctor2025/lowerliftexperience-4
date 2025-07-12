import React from 'react';
import { PlayCircle, FileText, Users, Calendar, Award, BookOpen, FlaskConical, HeartPulse, Briefcase, Trophy } from 'lucide-react';
import ModuleTimelineItem from './common/ModuleTimelineItem'; // Ajuste o caminho se necessário

const modulesData = [
  {
    icon: BookOpen,
    title: "Módulo 1: Fundamentos Anatômicos",
    duration: "2 semanas",
    format: "Online + Material PDF",
    topics: ["Anatomia facial aplicada", "Biomecânica dos tecidos", "Avaliação pré-operatória", "Planejamento cirúrgico detalhado"],
    materials: ["15 vídeos HD", "Apostila ilustrada", "Atlas anatômico", "Checklist de avaliação"]
  },
  {
    icon: FlaskConical,
    title: "Módulo 2: Técnicas LowerLift® Exclusivas",
    duration: "3 semanas",
    format: "Demonstrações práticas + Mentoria",
    topics: ["Métodos proprietários LowerLift®", "Instrumentação específica", "Protocolos de execução", "Refinamentos técnicos avançados"],
    materials: ["25 vídeos técnicos", "Guia de instrumentos", "Protocolos passo-a-passo", "Sessão de mentoria"]
  },
  {
    icon: HeartPulse,
    title: "Módulo 3: Prática Clínica Avançada",
    duration: "2 semanas",
    format: "Casos reais + Supervisão",
    topics: ["Casos complexos comentados", "Revisões cirúrgicas", "Combinação de técnicas", "Otimização de resultados"],
    materials: ["20 casos clínicos", "Análises comparativas", "Templates de documentação", "Suporte direto"]
  },
  {
    icon: Briefcase,
    title: "Módulo 4: Gestão e Pós-Operatório",
    duration: "1 semana",
    format: "Protocolos + Lives",
    topics: ["Gestão de complicações", "Protocolos pós-operatórios", "Satisfação do paciente", "Fotodocumentação profissional"],
    materials: ["Protocolos completos", "Live semanal", "Kit de fotografia", "Sistema de follow-up"]
  },
  {
    icon: Trophy,
    title: "Módulo 5: Masterclass e Certificação",
    duration: "1 semana",
    format: "Masterclass + Avaliação",
    topics: ["Sessões de Masterclass", "Revisão final completa", "Exame de certificação", "Cerimônia de conclusão"],
    materials: ["Masterclass exclusiva", "Simulado final", "Certificado oficial", "Acesso vitalício"]
  }
];

const resourcesData = [
  {
    icon: PlayCircle,
    title: "80+ Vídeos HD",
    description: "Demonstrações detalhadas de todas as técnicas"
  },
  {
    icon: FileText,
    title: "Material Didático Completo",
    description: "Apostilas, protocolos e guidelines exclusivos"
  },
  {
    icon: Users,
    title: "Mentoria Personalizada",
    description: "Acompanhamento individual com especialistas"
  },
  {
    icon: Calendar,
    title: "Lives Semanais",
    description: "Sessões ao vivo para esclarecimento de dúvidas"
  },
  {
    icon: Award,
    title: "Certificação Oficial",
    description: "Certificado reconhecido nacionalmente"
  },
  {
    icon: BookOpen,
    title: "Acesso Vitalício",
    description: "Conteúdo sempre disponível para consulta"
  }
];

const Program: React.FC = () => {
  return (
    <section id="programa" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            O Que Você Vai <span className="text-gold">Dominar</span> - Programa Completo
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Um cronograma estruturado de 9 semanas para dominar completamente 
            as técnicas LowerLift® Experience, do básico à maestria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-slide-up">
          <div>
            <h3 className="font-playfair text-3xl font-bold text-navy mb-8">
              Timeline do Programa
            </h3>
            
            <div className="relative space-y-8">
              {/* Linha conectora vertical */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold via-gold to-gold opacity-30"></div>
              
              {modulesData.map((module) => (
                <ModuleTimelineItem key={module.title} module={module} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-3xl font-bold text-navy mb-8">
              Recursos Inclusos
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resourcesData.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <div key={resource.title} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gold/10 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 text-center transform hover:scale-105 hover:-translate-y-1 hover:border-gold/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                      <IconComponent className="w-6 h-6 text-navy" />
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-navy mb-2">{resource.title}</h4>
                    <p className="font-lora text-sm text-light-gray">{resource.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-navy to-blue-900 rounded-xl p-8 mt-8 text-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/20">
              <h4 className="font-playfair text-2xl font-bold mb-4">Bônus Exclusivos</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-lora">Acesso ao grupo VIP no Telegram</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-lora">Biblioteca de casos clínicos exclusivos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-lora">Templates de documentação profissional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-lora">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-lora">Atualizações de conteúdo vitalícias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-2xl p-8 md:p-12 text-center border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/40">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Cronograma Flexível
          </h3>
          <p className="font-lora text-lg text-light-gray max-w-3xl mx-auto leading-relaxed mb-8">
            Estude no seu próprio ritmo com acesso vitalício ao conteúdo. 
            O programa foi desenhado para se adaptar à sua rotina profissional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm border border-gold/10 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-gold mb-1">9 semanas</div>
              <div className="font-lora text-sm text-light-gray">Duração recomendada</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm border border-gold/10 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-gold mb-1">4-6h</div>
              <div className="font-lora text-sm text-light-gray">Por semana</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm border border-gold/10 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 transform hover:scale-105">
              <div className="font-montserrat text-2xl font-bold text-gold mb-1">Vitalício</div>
              <div className="font-lora text-sm text-light-gray">Acesso ao conteúdo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;