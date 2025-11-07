import React from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacts" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader title="contacts" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <p className="md:w-1/2 text-gray-text">
            I am interested in internship opportunities and collaborating on projects. If you have any other requests or questions, please feel free to reach out to me.
          </p>
          <div className="md:w-1/3 border border-gray-text p-4">
            <h3 className="text-white font-semibold mb-4">Message me here</h3>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={24} className="text-gray-text" />
              <span className="text-gray-text">!ECLIPSE#2517</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={24} className="text-gray-text" />
              <span className="text-gray-text">example@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
