import React from 'react';
import { Github, Linkedin, Figma } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 fixed left-4 top-1/2 -translate-y-1/2 z-40">
      <div className="w-px h-48 bg-gray-text"></div>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Github size={24} /></a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Linkedin size={24} /></a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-white transition-colors"><Figma size={24} /></a>
    </div>
  );
};

export default SocialSidebar;
