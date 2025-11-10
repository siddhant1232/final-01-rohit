import React from 'react';
import { Logo } from './icons/Logo';
import { Github, Linkedin } from 'lucide-react';
import { FigmaIcon } from './icons/Figma';
import { HashLink } from 'react-router-hash-link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-text mt-16">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <HashLink to="/#home" smooth className="flex items-center gap-2">
                <Logo />
                <span className="font-bold text-white">Eclipse</span>
              </HashLink>
              <p className="text-white">Rookie AI/ML Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-2xl font-medium text-white mb-3">Media</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-text hover:text-white"><Github size={32} /></a>
              <a href="#" className="text-gray-text hover:text-white"><Linkedin size={32} /></a>
              <a href="#" className="text-gray-text hover:text-white"><FigmaIcon size={32} /></a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-text mt-12">© Copyright 2025. Made by Eclipse</p>
      </div>
    </footer>
  );
};

export default Footer;
