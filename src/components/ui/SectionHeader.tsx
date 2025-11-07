import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  title: string;
  link?: {
    href: string;
    text: string;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, link }) => (
  <div className="flex items-center justify-between w-full mb-12">
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-medium text-white">
        <span className="text-primary">#</span>{title}
      </h2>
      <div className="hidden sm:block w-24 md:w-48 h-px bg-primary"></div>
    </div>
    {link && (
      <Link to={link.href} className="text-white font-medium whitespace-nowrap hover:underline">
        {link.text}
      </Link>
    )}
  </div>
);
