
import React from 'react';
import { Cloud as CloudIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CloudProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animationDelay?: string;
}

const Cloud: React.FC<CloudProps> = ({ 
  className, 
  size = 'md',
  animationDelay = '0s'
}) => {
  const sizeClasses = {
    'sm': 'w-16 h-16',
    'md': 'w-24 h-24',
    'lg': 'w-36 h-36',
  };

  return (
    <div 
      className={cn(
        'text-white absolute opacity-80', 
        sizeClasses[size], 
        className
      )}
      style={{ 
        animation: `float 15s ease-in-out infinite`,
        animationDelay: animationDelay
      }}
    >
      <CloudIcon className="w-full h-full" />
    </div>
  );
};

export default Cloud;
