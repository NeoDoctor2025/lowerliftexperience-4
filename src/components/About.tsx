import React from 'react';
import { Award, CheckCircle, Zap } from 'lucide-react';

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
          <article className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2" role="listitem">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/25">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-navy mb-3 sm:mb-4">Ensino Avançado</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray leading-relaxed">
              Metodologia de ensino inovadora com os mais renomados especialistas em cirurgia facial do país
            </p>
          </article>

          <article className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2" role="listitem">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/25">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-navy mb-3 sm:mb-4">Técnicas Comprovadas</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray leading-relaxed">
              Métodos proprietários desenvolvidos e testados por especialistas reconhecidos internacionalmente
            </p>
          </article>

          <article className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2" role="listitem">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/25">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-navy mb-3 sm:mb-4">Resultados Previsíveis</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray leading-relaxed">
              Protocolos testados que garantem naturalidade, longevidade e satisfação dos pacientes
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;