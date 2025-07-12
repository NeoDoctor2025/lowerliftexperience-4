import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-off-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-playfair text-3xl font-bold text-gold mb-6">
              LowerLift<span className="text-off-white">®</span>
            </div>
            <p className="font-lora text-light-gray leading-relaxed mb-6">
              A plataforma mais avançada de ensino em cirurgia facial para cirurgiões plásticos de elite. 
              Transformando carreiras há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="font-montserrat text-gold font-bold">L</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="font-montserrat text-gold font-bold">L</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <address className="flex items-center space-x-3 not-italic">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+5511999999999" className="font-lora text-light-gray hover:text-gold transition-colors">(11) 99999-9999</a>
              </address>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contato@lowerlift.com.br" className="font-lora text-light-gray hover:text-gold transition-colors">contato@lowerlift.com.br</a>
              </div>
              <address className="flex items-start space-x-3 not-italic">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="font-lora text-light-gray">
                  Av. Paulista, 1000<br/>
                  São Paulo - SP
                </span>
              </address>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Atendimento</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="font-lora text-light-gray">
                  <div>Segunda a Sexta</div>
                  <div>09:00 às 18:00</div>
                </div>
              </div>
              <div className="font-lora text-light-gray">
                <div>Suporte técnico 24/7</div>
                <div className="text-sm text-gold">Para alunos ativos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light-gray/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Informações Legais</h4>
              <div className="space-y-2 font-lora text-sm text-light-gray">
                <p>CNPJ: 00.000.000/0001-00</p>
                <p>Razão Social: LowerLift Educação Médica Ltda.</p>
                <p>Este site não está afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Avisos Importantes</h4>
              <div className="space-y-2 font-lora text-sm text-light-gray">
                <p>• Programa destinado exclusivamente a médicos especialistas</p>
                <p>• CRM ativo obrigatório para participação</p>
                <p>• Resultados podem variar conforme aplicação das técnicas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light-gray/20 mt-8 pt-8 text-center">
          <p className="font-lora text-light-gray">
            © 2024 LowerLift® Experience. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;