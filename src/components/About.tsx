import React from 'react';
import { Award, CheckCircle, Zap } from 'lucide-react';
import InfoCard from './common/InfoCard';

const aboutData = [
  {
    icon: Award,
    title: "Ensino Avançado",
    description: "Metodologia de ensino inovadora com os mais renomados especialistas em cirurgia facial do país"
  },
  {
    icon: CheckCircle,
    title: "Técnicas Comprovadas",
    description: "Métodos proprietários desenvolvidos e testados por especialistas reconhecidos internacionalmente"
  },
  {
    icon: Zap,
    title: "Resultados Previsíveis",
    description: "Protocolos testados que garantem naturalidade, longevidade e satisfação dos pacientes"
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-off-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <h2 id="about-heading" className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
            Uma Plataforma <span className="text-gold">Exclusiva</span> para Cirurgiões Plásticos
          </h2>
          <p className="font-lora text-base sm:text-lg lg:text-xl text-light-gray max-w-3xl mx-auto leading-relaxed px-4">
            O LowerLift® Experience é a plataforma de capacitação mais avançada do Brasil, dedicada a cirurgiões plásticos que buscam excelência e diferenciação em rejuvenescimento facial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 lg:gap-32 animate-slide-up" role="list">
          {aboutData.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;