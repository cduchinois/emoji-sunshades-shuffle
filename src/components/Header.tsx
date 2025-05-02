
import React from 'react';
import EmojiLogo from './EmojiLogo';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('w-full py-4 px-6 flex items-center justify-between', className)}>
      <div className="flex items-center gap-4">
        <EmojiLogo size="sm" />
        <h1 className="text-2xl font-bold text-emoji-purple">Cool Emoji</h1>
      </div>
      
      <nav>
        <ul className="flex gap-6">
          <li><a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">Home</a></li>
          <li><a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">About</a></li>
          <li><a href="#" className="text-emoji-purple hover:text-purple-800 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
