import React from 'react';
import TestimonialCard from './common/TestimonialCard'; // Ajuste o caminho se necessário

// Dados dos depoimentos movidos para fora para melhor organização, poderiam vir de um arquivo de dados
const testimonialsData = [
  {
    id: "1", // Adicionando um ID único
    name: "Dr. Carlos Mendoza",
    location: "São Paulo - SP",
    specialty: "Cirurgia Plástica Facial",
    text: "O LowerLift® Experience transformou minha prática. Os resultados que consigo agora são impressionantes, com naturalidade incomparável. Meus pacientes ficam encantados.",
    result: "Aumento de 280% na cartela de pacientes",
    rating: 5,
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "Dra. Ana Beatriz",
    location: "Rio de Janeiro - RJ",
    specialty: "Rejuvenescimento Facial",
    text: "As técnicas aprendidas me diferenciaram completamente no mercado. Aumentei minha cartela de pacientes em 300% após aplicar os métodos do programa.",
    result: "ROI de 450% em 8 meses",
    rating: 5,
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Dr. Fernando Silva",
    location: "Brasília - DF",
    specialty: "Cirurgia Estética Avançada",
    text: "Investimento que se pagou rapidamente. A qualidade dos resultados e a satisfação dos pacientes aumentaram drasticamente. Recomendo sem hesitar.",
    result: "Zero complicações em 200+ cirurgias",
    rating: 5,
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-6">
            O que dizem nossos <span className="text-gold">alunos de elite</span>
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Depoimentos reais de cirurgiões que transformaram suas práticas e 
            conquistaram resultados excepcionais com o LowerLift® Experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up" role="list">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Navegação com dots dourados */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id} // Usando ID para key
              className="w-3 h-3 rounded-full bg-gold/30 hover:bg-gold hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
              aria-label={`Ir para depoimento ${index + 1}`} // aria-label pode continuar usando index se a ordem visual for importante
            />
          ))}
        </div>

        {/* Seção de estatísticas */}
        <div className="bg-gradient-to-r from-navy to-blue-900 rounded-2xl p-8 md:p-12 text-center border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-off-white mb-6">
            Junte-se a mais de 500 cirurgiões de elite
          </h3>
          <p className="font-lora text-lg text-light-gray max-w-3xl mx-auto leading-relaxed mb-8">
            Que já transformaram suas práticas e conquistaram resultados excepcionais 
            com as técnicas LowerLift® Experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-4xl font-bold text-gold mb-2">98%</div>
              <div className="font-lora text-light-gray">Taxa de satisfação</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-4xl font-bold text-gold mb-2">300%</div>
              <div className="font-lora text-light-gray">Aumento médio na cartela</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105">
              <div className="font-montserrat text-4xl font-bold text-gold mb-2">6 meses</div>
              <div className="font-lora text-light-gray">ROI médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;