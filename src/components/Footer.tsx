import React from 'react';
import Logo from '../components/icons/Logo01.png';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-text mt-16">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <HashLink to="/#home" smooth className="flex items-center gap-2">
                {/* Use the imported PNG as an image source (not as a component) */}
                <img src={Logo} alt="Eclipse logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-white">Eclipse</span>
              </HashLink>
            </div>
            <p className="text-white text-center md:text-left">Rookie AI/ML Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-2xl font-medium text-white mb-3">Media</h4>
            <div className="flex gap-4">
              <a href="https://github.com/RandomRohit-hub" className="text-gray-text hover:text-white" aria-label="GitHub">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/rohit-sharma-441b20297" className="text-gray-text hover:text-white" aria-label="LinkedIn">
                <Linkedin size={32} />
              </a>
              <a href="https://x.com/randomrohit002" className="text-gray-text hover:text-white" aria-label="Twitter / X">
                <Twitter size={32} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-text mt-12">© Copyright 2025. Made by Eclipse</p>
      </div>
    </footer>
  );
};

export default Footer;
