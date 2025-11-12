import React from 'react';
import { Github, Linkedin ,Twitter  } from 'lucide-react';
import { FigmaIcon } from './icons/Figma';
import {StreamlitIcon} from './icons/Streamlit';

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed top-0 left-4 lg:left-8 z-50">
      <div className="w-px h-32 bg-gray-text mb-4"></div>
      <div className="flex flex-col items-center gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Github size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Linkedin size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Twitter size={24} /></a>
      </div>
    </div>
  );
};

export default SocialSidebar;
