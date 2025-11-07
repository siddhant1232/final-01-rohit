import React, { useState } from 'react';
import { Logo } from './icons/Logo';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'home', href: '/#home' },
  { name: 'works', href: '/#projects' },
  { name: 'about-me', href: '/#about-me' },
  { name: 'contacts', href: '/#contacts' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; // Offset for sticky header
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const getLinkClass = (href: string) => {
    const baseClass = "flex items-center gap-1 text-gray-text hover:text-white transition-colors";
    const linkHash = href.split('#')[1];
    
    if (href === '/#home' && location.pathname === '/' && location.hash === '') {
      return `${baseClass} text-white`;
    }
    
    if (location.hash === `#${linkHash}`) {
      return `${baseClass} text-white`;
    }

    return baseClass;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-8">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-white text-lg">Eclipse</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <HashLink 
                key={link.name} 
                to={link.href}
                smooth 
                scroll={scrollWithOffset}
                className={getLinkClass(link.href)}
              >
                <span className="text-primary">#</span>
                <span>{link.name}</span>
              </HashLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background h-screen">
          <nav className="flex flex-col items-center justify-center gap-12 text-3xl h-full -mt-20">
            {navLinks.map(link => (
              <HashLink 
                key={link.name} 
                to={link.href}
                smooth
                scroll={scrollWithOffset}
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-2 text-gray-text hover:text-white transition-colors"
              >
                <span className="text-primary">#</span>
                <span>{link.name}</span>
              </HashLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
