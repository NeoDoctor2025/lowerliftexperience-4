import React from 'react';
import { LucideProps } from 'lucide-react';

interface MethodologyPointCardProps {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
}

const MethodologyPointCard: React.FC<MethodologyPointCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gold/10 text-center hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:border-gold/30">
      <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-gold/25">
        <Icon className="w-8 h-8 text-navy" />
      </div>
      <h3 className="font-playfair text-xl font-bold text-navy mb-2">
        {title}
      </h3>
      <p className="font-lora text-light-gray">
        {description}
      </p>
    </div>
  );
};

export default MethodologyPointCard;
