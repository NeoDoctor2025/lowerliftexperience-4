import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const faqs = [
    {
      category: "Sobre o Programa",
      questions: [
        {
          question: "Preciso ter experiência prévia em cirurgia facial?",
          answer: "Sim, o programa é destinado a cirurgiões plásticos com pelo menos 2 anos de experiência. É necessário ter CRM ativo e residência concluída em cirurgia plástica."
        },
        {
          question: "As técnicas são realmente exclusivas?",
          answer: "Sim, as técnicas LowerLift® são métodos proprietários desenvolvidos pelos nossos especialistas ao longo de 15 anos de pesquisa e prática clínica. Você não encontrará essas técnicas em nenhum outro lugar."
        },
        {
          question: "Quanto tempo leva para concluir o programa?",
          answer: "O programa tem duração de 8 semanas, com aproximadamente 4-6 horas de estudo por semana. Você pode estudar no seu próprio ritmo, pois o acesso é vitalício."
        },
        {
          question: "O conteúdo é atualizado regularmente?",
          answer: "Sim, o conteúdo é constantemente atualizado com as mais recentes inovações e técnicas. Todos os alunos recebem as atualizações gratuitamente, garantindo que você sempre tenha acesso ao que há de mais moderno."
        }
      ]
    },
    {
      category: "Investimento e Inscrição",
      questions: [
        {
          question: "Posso parcelar o investimento?",
          answer: "Sim, oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX à vista com desconto adicional de 5%."
        },
        {
          question: "A garantia de 90 dias é real?",
          answer: "Sim, é uma garantia técnica incondicional. Se não ficar satisfeito nos primeiros 90 dias, devolvemos 100% do seu investimento, sem perguntas ou burocracias."
        },
        {
          question: "Quando posso começar após a inscrição?",
          answer: "O acesso é liberado imediatamente após a confirmação do pagamento. Você receberá por email todas as informações de login e pode começar a estudar no mesmo dia."
        },
        {
          question: "Existe algum custo adicional?",
          answer: "Não, o valor do programa inclui tudo: aulas, materiais, mentoria, certificado e atualizações futuras. Não há taxas ocultas ou custos adicionais."
        }
      ]
    },
    {
      category: "Suporte e Acompanhamento",
      questions: [
        {
          question: "Posso aplicar as técnicas imediatamente?",
          answer: "Recomendamos prática supervisionada inicial. O programa Experience inclui mentoria para orientar seus primeiros casos e garantir que você aplique as técnicas com segurança."
        },
        {
          question: "E se eu não conseguir acompanhar o cronograma?",
          answer: "Não há problema! O acesso é vitalício e você pode estudar no seu próprio ritmo. Também oferecemos suporte para esclarecer dúvidas a qualquer momento."
        },
        {
          question: "O certificado é reconhecido pelo CFM?",
          answer: "O certificado é de especialização técnica, reconhecido pela comunidade médica. Recomendamos verificar os requisitos específicos do seu conselho regional para educação continuada."
        },
        {
          question: "Como funciona o suporte técnico?",
          answer: "Oferecemos suporte técnico 24/7 para alunos ativos através de chat, email e grupo VIP no Telegram. Nossa equipe responde dúvidas em até 2 horas durante dias úteis."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Perguntas <span className="text-gold">Frequentes</span>
          </h2>
          <p className="font-lora text-xl text-light-gray leading-relaxed">
            Esclarecemos as dúvidas mais comuns sobre o LowerLift® Experience
          </p>
        </div>

        <div className="space-y-12 animate-slide-up">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy text-center mb-8 relative">
                <span className="bg-off-white px-6 relative z-10">{category.category}</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gold/30"></div>
                </div>
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;
                  
                  return (
                    <div key={questionIndex} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gold/10 overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/30 transform hover:scale-105">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 group"
                      >
                        <h4 className="font-playfair text-lg font-semibold text-navy pr-4 group-hover:text-gold transition-colors duration-300">
                          {faq.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="w-6 h-6 text-gold transform rotate-0 transition-transform duration-300 hover:scale-110" />
                          ) : (
                            <Plus className="w-6 h-6 text-gold transform rotate-0 transition-transform duration-300 group-hover:rotate-90 hover:scale-110" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <div className="overflow-hidden">
                          <div className="px-8 pb-6">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="font-lora text-light-gray leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 md:p-12 text-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/20">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="font-lora text-lg text-light-gray mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre o programa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold to-yellow-600 text-navy px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                WhatsApp: (11) 99999-9999
              </button>
              <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-gradient-to-r hover:from-gold hover:to-yellow-600 hover:text-navy hover:shadow-lg hover:shadow-gold/25 transition-all duration-500 transform hover:scale-105">
                Email: contato@lowerlift.com.br
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;