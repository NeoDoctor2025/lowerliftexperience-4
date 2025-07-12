import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Carlos Mendoza",
      location: "São Paulo - SP",
      specialty: "Cirurgia Plástica Facial",
      text: "O LowerLift® Experience transformou minha prática. Os resultados que consigo agora são impressionantes, com naturalidade incomparável. Meus pacientes ficam encantados.",
      result: "Aumento de 280% na cartela de pacientes",
      rating: 5,
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Dra. Ana Beatriz",
      location: "Rio de Janeiro - RJ", 
      specialty: "Rejuvenescimento Facial",
      text: "As técnicas aprendidas me diferenciaram completamente no mercado. Aumentei minha cartela de pacientes em 300% após aplicar os métodos do programa.",
      result: "ROI de 450% em 8 meses",
      rating: 5,
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Dr. Fernando Silva",
      location: "Brasília - DF",
      specialty: "Cirurgia Estética Avançada", 
      text: "Investimento que se pagou rapidamente. A qualidade dos resultados e a satisfação dos pacientes aumentaram drasticamente. Recomendo sem hesitar.",
      result: "Zero complicações em 200+ cirurgias",
      rating: 5,
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-gold fill-current" />
    ));
  };

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
          {testimonials.map((testimonial, index) => (
            <article key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 relative transform hover:scale-105 hover:-translate-y-2" role="listitem">
              {/* Aspas douradas */}
              <Quote className="w-12 h-12 text-gold/30 absolute top-6 right-6" />
              
              {/* Foto com borda metálica */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/50 shadow-lg hover:shadow-xl hover:shadow-gold/25 transition-all duration-500 hover:scale-110"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div>
                  <h4 className="font-playfair text-lg font-semibold text-off-white">{testimonial.name}</h4>
                  <p className="font-lora text-sm text-gold">{testimonial.specialty}</p>
                  <p className="font-lora text-xs text-light-gray">{testimonial.location}</p>
                </div>
              </div>

              {/* Avaliação com estrelas */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Citação */}
              <p className="font-lora text-light-gray leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Resultado específico */}
              <div className="bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-lg p-4 border border-gold/20 hover:border-gold/30 hover:bg-gold/20 transition-all duration-300">
                <h5 className="font-montserrat text-sm font-semibold text-gold mb-1">Resultado Alcançado:</h5>
                <p className="font-lora text-sm text-off-white">{testimonial.result}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Navegação com dots dourados */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-gold/30 hover:bg-gold hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
              aria-label={`Ir para depoimento ${index + 1}`}
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