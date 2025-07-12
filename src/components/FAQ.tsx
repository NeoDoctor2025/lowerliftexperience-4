import React, { useState } from 'react';
import FaqItem from './common/FaqItem'; // Ajuste o caminho se necessário

const faqsData = [
  {
    category: "Sobre o Programa",
    questions: [
      {
        id: "sp-1", // ID único para a pergunta
        question: "Preciso ter experiência prévia em cirurgia facial?",
        answer: "Sim, o programa é destinado a cirurgiões plásticos com pelo menos 2 anos de experiência. É necessário ter CRM ativo e residência concluída em cirurgia plástica."
      },
      {
        id: "sp-2",
        question: "As técnicas são realmente exclusivas?",
        answer: "Sim, as técnicas LowerLift® são métodos proprietários desenvolvidos pelos nossos especialistas ao longo de 15 anos de pesquisa e prática clínica. Você não encontrará essas técnicas em nenhum outro lugar."
      },
      {
        id: "sp-3",
        question: "Quanto tempo leva para concluir o programa?",
        answer: "O programa tem duração de 8 semanas, com aproximadamente 4-6 horas de estudo por semana. Você pode estudar no seu próprio ritmo, pois o acesso é vitalício."
      },
      {
        id: "sp-4",
        question: "O conteúdo é atualizado regularmente?",
        answer: "Sim, o conteúdo é constantemente atualizado com as mais recentes inovações e técnicas. Todos os alunos recebem as atualizações gratuitamente, garantindo que você sempre tenha acesso ao que há de mais moderno."
      }
    ]
  },
  {
    category: "Investimento e Inscrição",
    questions: [
      {
        id: "ii-1",
        question: "Posso parcelar o investimento?",
        answer: "Sim, oferecemos parcelamento em até 12x sem juros no cartão de crédito. Também aceitamos PIX à vista com desconto adicional de 5%."
      },
      {
        id: "ii-2",
        question: "A garantia de 90 dias é real?",
        answer: "Sim, é uma garantia técnica incondicional. Se não ficar satisfeito nos primeiros 90 dias, devolvemos 100% do seu investimento, sem perguntas ou burocracias."
      },
      {
        id: "ii-3",
        question: "Quando posso começar após a inscrição?",
        answer: "O acesso é liberado imediatamente após a confirmação do pagamento. Você receberá por email todas as informações de login e pode começar a estudar no mesmo dia."
      },
      {
        id: "ii-4",
        question: "Existe algum custo adicional?",
        answer: "Não, o valor do programa inclui tudo: aulas, materiais, mentoria, certificado e atualizações futuras. Não há taxas ocultas ou custos adicionais."
      }
    ]
  },
  {
    category: "Suporte e Acompanhamento",
    questions: [
      {
        id: "sa-1",
        question: "Posso aplicar as técnicas imediatamente?",
        answer: "Recomendamos prática supervisionada inicial. O programa Experience inclui mentoria para orientar seus primeiros casos e garantir que você aplique as técnicas com segurança."
      },
      {
        id: "sa-2",
        question: "E se eu não conseguir acompanhar o cronograma?",
        answer: "Não há problema! O acesso é vitalício e você pode estudar no seu próprio ritmo. Também oferecemos suporte para esclarecer dúvidas a qualquer momento."
      },
      {
        id: "sa-3",
        question: "O certificado é reconhecido pelo CFM?",
        answer: "O certificado é de especialização técnica, reconhecido pela comunidade médica. Recomendamos verificar os requisitos específicos do seu conselho regional para educação continuada."
      },
      {
        id: "sa-4",
        question: "Como funciona o suporte técnico?",
        answer: "Oferecemos suporte técnico 24/7 para alunos ativos através de chat, email e grupo VIP no Telegram. Nossa equipe responde dúvidas em até 2 horas durante dias úteis."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(faqsData[0].questions[0].id); // Abrir o primeiro por padrão

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
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
          {faqsData.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy text-center mb-8 relative">
                <span className="bg-off-white px-6 relative z-10">{category.category}</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gold/30"></div>
                </div>
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    id={faq.id}
                    faq={faq}
                    isOpen={openIndex === faq.id}
                    onClick={() => toggleFAQ(faq.id)}
                  />
                ))}
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