import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  specialty: string;
  text: string;
  result: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-gold fill-current" />
    ));
  };

  return (
    <article className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 relative transform hover:scale-105 hover:-translate-y-2" role="listitem">
      <Quote className="w-12 h-12 text-gold/30 absolute top-6 right-6" />

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

      <div className="flex space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      <p className="font-lora text-light-gray leading-relaxed italic mb-6">
        "{testimonial.text}"
      </p>

      <div className="bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-lg p-4 border border-gold/20 hover:border-gold/30 hover:bg-gold/20 transition-all duration-300">
        <h5 className="font-montserrat text-sm font-semibold text-gold mb-1">Resultado Alcançado:</h5>
        <p className="font-lora text-sm text-off-white">{testimonial.result}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
