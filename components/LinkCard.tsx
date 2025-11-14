
import React from 'react';

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, title, description, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/60 hover:border-sky-400 w-full sm:w-80 text-left"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gray-900/70 p-3 rounded-lg mr-4 transition-colors duration-300 group-hover:bg-sky-900/50">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
            {title}
        </h3>
      </div>
      <p className="text-gray-400 min-h-[40px]">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium text-sky-400 group-hover:text-sky-200 transition-colors duration-300">
        <span>Buka Aplikasi</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
