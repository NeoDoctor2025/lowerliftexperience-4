import React from 'react';
import { Shield, CheckCircle, Award, Clock } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Ícone de escudo dourado grande */}
          <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Shield className="w-12 h-12 text-navy" />
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-6">
            Garantia Técnica <span className="text-gold">Incondicional</span> de 90 Dias
          </h2>
          
          <p className="font-lora text-xl text-off-white max-w-4xl mx-auto leading-relaxed mb-12">
            Estamos tão confiantes na qualidade e eficácia do LowerLift® Experience que oferecemos 
            uma garantia técnica incondicional de 90 dias. Se você não obtiver os resultados prometidos 
            ou não ficar completamente satisfeito com o programa, devolvemos 100% do seu investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-slide-up">
          {/* Explicação detalhada */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/50">
            <h3 className="font-playfair text-3xl font-bold text-off-white mb-8 text-center">
              Como Funciona Nossa Garantia
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-montserrat text-navy font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-off-white mb-2">
                    Acesse Todo o Conteúdo
                  </h4>
                  <p className="font-lora text-light-gray">
                    Estude todos os módulos, assista às aulas e aplique as técnicas ensinadas 
                    durante os primeiros 90 dias.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-montserrat text-navy font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-off-white mb-2">
                    Teste na Prática
                  </h4>
                  <p className="font-lora text-light-gray">
                    Aplique as técnicas LowerLift® em seus pacientes e avalie os resultados 
                    obtidos com nossos métodos exclusivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-montserrat text-navy font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-off-white mb-2">
                    Solicite o Reembolso
                  </h4>
                  <p className="font-lora text-light-gray">
                    Se não ficar satisfeito por qualquer motivo, solicite o reembolso 
                    completo em até 90 dias após a compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Condições resumidas */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/40 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <Clock className="w-12 h-12 text-gold" />
                <div>
                  <h4 className="font-playfair text-xl font-bold text-off-white">90 Dias Completos</h4>
                  <p className="font-lora text-light-gray">Tempo suficiente para testar tudo</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Acesso completo ao programa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Teste em casos reais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Avalie os resultados obtidos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/40 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="w-12 h-12 text-gold" />
                <div>
                  <h4 className="font-playfair text-xl font-bold text-off-white">Sem Pegadinhas</h4>
                  <p className="font-lora text-light-gray">Processo simples e transparente</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Reembolso de 100% do valor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Processamento em até 5 dias úteis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <span className="font-lora text-off-white">Sem questionamentos desnecessários</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Selo de confiança metálico */}
        <div className="bg-gradient-to-r from-gold/20 to-yellow-600/20 rounded-2xl p-8 md:p-12 text-center border-2 border-gold/30 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:border-gold/50">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Award className="w-16 h-16 text-gold" />
            <div className="text-left">
              <h3 className="font-playfair text-3xl font-bold text-off-white">
                Selo de Confiança LowerLift®
              </h3>
              <p className="font-lora text-lg text-gold">15 anos de excelência comprovada</p>
            </div>
          </div>
          
          <p className="font-lora text-lg text-off-white max-w-4xl mx-auto leading-relaxed mb-8">
            Nossa garantia é respaldada por 15 anos de experiência, mais de 500 cirurgiões formados 
            e uma taxa de satisfação de 98%. Menos de 2% dos nossos alunos solicitam reembolso, 
            o que comprova a eficácia do programa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-3xl font-bold text-gold mb-2">98%</div>
              <div className="font-lora text-light-gray">Taxa de satisfação</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-3xl font-bold text-gold mb-2">{"<2%"}</div>
              <div className="font-lora text-light-gray">Taxa de reembolso</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-3xl font-bold text-gold mb-2">500+</div>
              <div className="font-lora text-light-gray">Carreiras transformadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;