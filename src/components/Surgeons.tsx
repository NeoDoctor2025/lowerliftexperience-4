import React from 'react';
import { Award, BookOpen, Users, Trophy, Star, Globe } from 'lucide-react';

const Surgeons: React.FC = () => {
  const mentors = [
    {
      name: "Dr. Alexandre Santos",
      title: "Cirurgião Plástico Facial",
      credentials: "SBCP, ISAPS, ASPS, FACS",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      achievements: [
        { icon: Award, text: "Prêmio de Excelência Cirúrgica 2023" },
        { icon: BookOpen, text: "Autor de 45+ artigos científicos" },
        { icon: Users, text: "8.500+ procedimentos realizados" },
        { icon: Globe, text: "Palestrante em 15 países" }
      ]
    },
    {
      name: "Dra. Marina Costa",
      title: "Especialista em Rejuvenescimento",
      credentials: "SBCP, FACS, ISAPS",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      achievements: [
        { icon: Trophy, text: "Pioneira em técnicas minimamente invasivas" },
        { icon: BookOpen, text: "Autora de 30+ publicações internacionais" },
        { icon: Users, text: "6.200+ cirurgias de sucesso" },
        { icon: Star, text: "Professora titular há 12 anos" }
      ]
    }
  ];

  return (
    <section id="cirurgiões" className="py-24 bg-navy" aria-labelledby="surgeons-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="surgeons-heading" className="font-playfair text-4xl md:text-5xl font-bold text-off-white mb-6">
            Conheça Nossos <span className="text-gold">Mentores</span>
          </h2>
          <p className="font-lora text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Aprenda com os maiores nomes da cirurgia plástica facial, referências nacionais e internacionais 
            com décadas de experiência e resultados comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up" role="list">
          {mentors.map((mentor, index) => {
            return (
              <article key={index} className="bg-gradient-to-br from-navy to-blue-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold/10 overflow-hidden transition-all duration-500 border border-gold/20 hover:border-gold/40 p-8 text-center transform hover:scale-105 hover:-translate-y-2" role="listitem">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-gold shadow-lg hover:shadow-xl hover:shadow-gold/25 mb-6 mx-auto transition-all duration-500 hover:scale-110"
                  loading="lazy"
                  width="192"
                  height="192"
                />
                
                <h3 className="font-playfair text-2xl font-bold text-off-white mb-2">{mentor.name}</h3>
                <p className="font-montserrat text-gold font-semibold mb-2">{mentor.title}</p>
                <p className="font-lora text-light-gray text-sm mb-6 text-center">{mentor.credentials}</p>
                
                <div className="space-y-3">
                  {mentor.achievements.map((achievement, i) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={i} className="flex items-center space-x-3 bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-lg p-3 border border-gold/10 hover:border-gold/30 hover:bg-gold/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-gold flex-shrink-0" />
                        <span className="font-lora text-off-white">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Surgeons;