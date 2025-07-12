import React from 'react';
import { ArrowRight, Award, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-blue-900 pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg')] bg-cover bg-center bg-fixed opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-navy/30 to-slate-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        <div className="animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/10 to-yellow-600/10 border border-gold/30 rounded-full px-3 sm:px-6 py-2 mb-6 sm:mb-8 animate-pulse-glow">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <span className="font-montserrat text-xs sm:text-sm text-gold font-medium text-center">PROGRAMA EXCLUSIVO PARA CIRURGIÕES DE ELITE</span>
          </div>
          
          <p className="font-montserrat text-xs sm:text-sm text-gold font-medium mb-4 animate-pulse">
            ⚡ Vagas limitadas para garantir qualidade
          </p>
          
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-off-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-gold">LowerLift®</span> Experience
          </h1>
          
          <p className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl text-off-white/90 mb-3 sm:mb-4 px-2">
            Cirurgia Facial Avançada para Cirurgiões de Elite
          </p>
          
          <p className="font-lora text-base sm:text-lg md:text-xl text-light-gray max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Aprenda técnicas exclusivas para resultados naturais e previsíveis com os maiores especialistas em rejuvenescimento facial do Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16 px-4">
            <button
              onClick={() => scrollToSection('investimento')}
              className="group bg-gradient-to-r from-gold to-yellow-600 text-navy px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-montserrat font-bold text-lg sm:text-xl hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 sm:space-x-3 border-2 border-gold/30 hover:border-gold w-full sm:w-auto justify-center animate-pulse-glow"
            >
              <span>Garanta sua Vaga</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('sobre')}
              className="group border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold text-base sm:text-lg hover:bg-gradient-to-r hover:from-gold hover:to-yellow-600 hover:text-navy hover:shadow-lg hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Conhecer o programa</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-float">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3" />
              <div className="font-montserrat text-xl sm:text-2xl font-bold text-off-white">500+</div>
              <div className="font-lora text-sm sm:text-base text-light-gray text-center">Cirurgiões treinados</div>
            </div>
            
            <div className="flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-float" style={{animationDelay: '1s'}}>
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3" />
              <div className="font-montserrat text-xl sm:text-2xl font-bold text-off-white">98%</div>
              <div className="font-lora text-sm sm:text-base text-light-gray text-center">Satisfação dos alunos</div>
            </div>
            
            <div className="flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-float sm:col-span-3 md:col-span-1" style={{animationDelay: '2s'}}>
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3" />
              <div className="font-montserrat text-xl sm:text-2xl font-bold text-off-white">15</div>
              <div className="font-lora text-sm sm:text-base text-light-gray text-center">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Hero;