import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Users, Shield, CheckCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-15T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-navy/30 to-slate-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold text-off-white mb-4 sm:mb-6 px-4 leading-tight">
            Transforme sua carreira com a <span className="text-gold">LowerLift® Experience</span>
          </h2>
          <p className="font-lora text-base sm:text-lg md:text-xl lg:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Vagas limitadas para garantir qualidade. Não perca esta oportunidade única de se juntar aos cirurgiões de elite!
          </p>

          {/* Contador Regressivo */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/30 mb-8 sm:mb-12 max-w-4xl mx-auto hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/50">
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-off-white mb-4 sm:mb-6">
              Oferta Especial Termina Em:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl border border-gold/30 hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 transform hover:scale-105 animate-pulse-glow">
                <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="font-lora text-xs sm:text-sm text-light-gray uppercase tracking-wide">Dias</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl border border-gold/30 hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 transform hover:scale-105 animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="font-lora text-xs sm:text-sm text-light-gray uppercase tracking-wide">Horas</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl border border-gold/30 hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 transform hover:scale-105 animate-pulse-glow" style={{animationDelay: '1s'}}>
                <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="font-lora text-xs sm:text-sm text-light-gray uppercase tracking-wide">Minutos</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl border border-gold/30 hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 transform hover:scale-105 animate-pulse-glow" style={{animationDelay: '1.5s'}}>
                <div className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="font-lora text-xs sm:text-sm text-light-gray uppercase tracking-wide">Segundos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-gold/40">
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Tempo Limitado</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray">Desconto de 30% válido apenas para as primeiras 50 vagas</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-gold/40">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Vagas Limitadas</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray">Apenas 50 cirurgiões serão aceitos nesta turma</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-gold/40 sm:col-span-3 md:col-span-1">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Risco Zero</h3>
            <p className="font-lora text-sm sm:text-base text-light-gray">Garantia incondicional de 90 dias</p>
          </div>
        </div>

        {/* Como Garantir Sua Vaga */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-off-white text-center mb-8 sm:mb-12 px-4">
            Como Garantir Sua Vaga
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:border-gold/40">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                <span className="font-montserrat text-lg sm:text-2xl font-bold text-navy">1</span>
              </div>
              <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2 sm:mb-3">Escolha seu Plano</h4>
              <p className="font-lora text-sm sm:text-base text-light-gray">Selecione a modalidade que melhor se adapta ao seu perfil e objetivos profissionais</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:border-gold/40">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                <span className="font-montserrat text-lg sm:text-2xl font-bold text-navy">2</span>
              </div>
              <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2 sm:mb-3">Finalize o Pagamento</h4>
              <p className="font-lora text-sm sm:text-base text-light-gray">Complete sua inscrição com pagamento seguro em até 12x sem juros no cartão</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-gold/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:border-gold/40 sm:col-span-3 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
                <span className="font-montserrat text-lg sm:text-2xl font-bold text-navy">3</span>
              </div>
              <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2 sm:mb-3">Comece Imediatamente</h4>
              <p className="font-lora text-sm sm:text-base text-light-gray">Receba acesso instantâneo e inicie sua transformação profissional hoje mesmo</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/50">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-off-white mb-3 sm:mb-4 px-4">
                Escolha sua modalidade
              </h3>
              <p className="font-lora text-sm sm:text-base lg:text-lg text-light-gray px-4">
                Três opções de investimento para transformar sua carreira
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 cursor-pointer border border-gold/20 hover:border-gold/40 transform hover:scale-105">
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Essentials</h4>
                <div className="font-montserrat text-xl sm:text-2xl font-bold text-gold mb-1">R$ 6.900</div>
                <div className="font-lora text-xs sm:text-sm text-light-gray line-through mb-2">R$ 9.900</div>
                <div className="font-montserrat text-xs text-green-400">12x sem juros</div>
              </div>
              
              <div className="bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl p-4 sm:p-6 text-center hover:from-gold/30 hover:to-yellow-600/30 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 cursor-pointer border-2 border-gold sm:scale-105 hover:scale-110 transform">
                <div className="bg-gradient-to-r from-gold to-yellow-600 text-navy px-2 sm:px-3 py-1 rounded-full text-xs font-montserrat font-bold mb-2 sm:mb-3 inline-block animate-pulse-glow">
                  MAIS POPULAR
                </div>
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Experience</h4>
                <div className="font-montserrat text-xl sm:text-2xl font-bold text-gold mb-1">R$ 11.900</div>
                <div className="font-lora text-xs sm:text-sm text-light-gray line-through mb-2">R$ 16.900</div>
                <div className="font-montserrat text-xs text-green-400">12x sem juros</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 cursor-pointer border border-gold/20 hover:border-gold/40 transform hover:scale-105 sm:col-span-3 md:col-span-1">
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-off-white mb-2">Experience at Home</h4>
                <div className="font-montserrat text-xl sm:text-2xl font-bold text-gold mb-1">R$ 49.900</div>
                <div className="font-lora text-xs sm:text-sm text-light-gray line-through mb-2">R$ 69.900</div>
                <div className="font-montserrat text-xs text-green-400">12x sem juros</div>
              </div>
            </div>

            <div className="text-center">
              <button className="group bg-gradient-to-r from-gold to-yellow-600 text-navy px-16 py-6 rounded-xl font-montserrat font-bold text-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-4 mx-auto mb-6">
                <span>Inscreva-se Agora</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-xs sm:text-sm text-light-gray">Acesso imediato</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-xs sm:text-sm text-light-gray">Certificado reconhecido</span>
                </div>
                <div className="flex items-center justify-center space-x-2 sm:col-span-3 md:col-span-1">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-xs sm:text-sm text-light-gray">Garantia de 90 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="font-lora text-sm sm:text-base lg:text-lg text-light-gray mb-3 sm:mb-4 px-4">
            Ainda tem dúvidas? Fale conosco:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="border-2 border-gold text-gold px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-montserrat font-semibold text-sm sm:text-base hover:bg-gradient-to-r hover:from-gold hover:to-yellow-600 hover:text-navy hover:shadow-lg hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105">
              WhatsApp: (11) 99999-9999
            </button>
            <button className="border-2 border-gold text-gold px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-montserrat font-semibold text-sm sm:text-base hover:bg-gradient-to-r hover:from-gold hover:to-yellow-600 hover:text-navy hover:shadow-lg hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105">
              Email: contato@lowerlift.com.br
            </button>
          </div>
        </div>
      </div>
      
      {/* Botão CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-r from-navy to-blue-900 border-t border-gold/30 p-4">
        <button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-navy py-4 rounded-xl font-montserrat font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 flex items-center justify-center space-x-2">
          <span>Inscreva-se Agora</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;