
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('bg-gray-100 py-8 px-6', className)}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2025 Cool Emoji. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-emoji-purple transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-emoji-purple transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-emoji-purple transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
