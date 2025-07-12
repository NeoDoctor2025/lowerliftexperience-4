import React from 'react';
import { LucideProps } from 'lucide-react';

interface InfoCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <article className="group text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-gold/10 hover:border-gold/30 transform hover:scale-105 hover:-translate-y-2" role="listitem">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/25">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-navy" />
      </div>
      <h3 className="font-playfair text-lg sm:text-xl font-semibold text-navy mb-3 sm:mb-4">{title}</h3>
      <p className="font-lora text-sm sm:text-base text-light-gray leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default InfoCard;
