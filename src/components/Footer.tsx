
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('py-6 px-6', className)}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-emoji-purple">© 2025 Cool Emoji. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">Terms</a>
            <a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">Privacy</a>
            <a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
