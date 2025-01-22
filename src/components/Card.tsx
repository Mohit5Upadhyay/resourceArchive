
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div 
      onClick={() => window.open(link, '_blank')}
      className="group cursor-pointer bg-gray-900 rounded-xl p-6 
                 transform transition-all duration-300 hover:scale-105 
                 border border-gray-800 hover:border-[#ff6600]
                 min-h-[250px] flex flex-col justify-between"
    >
      {/* Card Header */}
      <div>
        <h3 className="text-2xl font-bold text-[#ff6600] mb-3">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-white transition-colors">
          {description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">Click to explore</span>
        <svg 
          className="w-6 h-6 text-[#ff6600] transform group-hover:translate-x-2 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;