import React from 'react';
import { LucideProps } from 'lucide-react';

interface Module {
  icon: React.ElementType<LucideProps>;
  title: string;
  duration: string;
  format: string;
  topics: string[];
  materials: string[];
}

interface ModuleTimelineItemProps {
  module: Module;
}

const ModuleTimelineItem: React.FC<ModuleTimelineItemProps> = ({ module }) => {
  const { icon: Icon, title, duration, format, topics, materials } = module;

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gold/20 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 ml-8 transform hover:scale-105 hover:-translate-y-1 hover:border-gold/40">
      <div className="absolute -left-14 top-6 w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-off-white hover:scale-110 hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-gold/25">
        <Icon className="w-6 h-6 text-navy" />
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-playfair text-xl font-semibold text-navy">{title}</h4>
          <div className="text-right">
            <span className="font-montserrat text-sm text-gold font-medium block">{duration}</span>
            <span className="font-lora text-xs text-light-gray">{format}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {topics.map((topic) => (
            <div key={topic} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
              <span className="font-lora text-sm text-light-gray">{topic}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gold/5 to-yellow-600/5 rounded-lg p-3 border border-gold/10 hover:border-gold/30 hover:bg-gold/10 transition-all duration-300">
          <h5 className="font-montserrat text-sm font-semibold text-navy mb-2">Materiais Inclusos:</h5>
          <div className="grid grid-cols-2 gap-1">
            {materials.map((material) => (
              <span key={material} className="font-lora text-xs text-light-gray">• {material}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleTimelineItem;
