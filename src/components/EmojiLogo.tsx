
import React from 'react';
import { cn } from '@/lib/utils';

interface EmojiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const EmojiLogo: React.FC<EmojiLogoProps> = ({ 
  className, 
  size = 'md', 
  animated = true 
}) => {
  const sizeClasses = {
    'sm': 'w-16 h-16',
    'md': 'w-24 h-24',
    'lg': 'w-40 h-40', 
    'xl': 'w-60 h-60'
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      {/* Face */}
      <div className={cn(
        'bg-emoji-yellow w-full h-full rounded-full absolute',
        animated && 'animate-face-bounce'
      )} />
      
      {/* Sunglasses */}
      <div className={cn(
        'absolute w-[90%] h-[30%] top-[20%] left-[5%]',
        animated && 'animate-sunglasses-rotate'
      )}>
        <div className="absolute w-full h-[20%] bg-emoji-purple rounded-md top-[40%]" />
        <div className="absolute w-[45%] h-[80%] bg-emoji-purple rounded-full bottom-0 left-0" />
        <div className="absolute w-[45%] h-[80%] bg-emoji-purple rounded-full bottom-0 right-0" />
      </div>
      
      {/* Nose */}
      <div className="absolute w-[10%] h-[10%] bg-emoji-purple rounded-full top-[60%] left-[45%]" />
      
      {/* Mouth/Smile */}
      <div className="absolute w-[30%] h-[15%] bg-emoji-purple rounded-full top-[75%] left-[35%]">
        <div className="absolute w-[80%] h-[50%] bg-emoji-yellow rounded-full top-0 left-[10%]" />
      </div>
    </div>
  );
};

export default EmojiLogo;
