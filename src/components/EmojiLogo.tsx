
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface EmojiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  trackMouse?: boolean;
}

const EmojiLogo: React.FC<EmojiLogoProps> = ({ 
  className, 
  size = 'md', 
  animated = true,
  trackMouse = false
}) => {
  const sizeClasses = {
    'sm': 'w-16 h-16',
    'md': 'w-24 h-24',
    'lg': 'w-40 h-40', 
    'xl': 'w-60 h-60'
  };
  
  const logoRef = useRef<HTMLDivElement>(null);
  const [sunglassesPosition, setSunglassesPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!trackMouse) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate the angle between the mouse and the center of the logo
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
      
      // Calculate the maximum movement distance (% of logo size)
      const maxDistance = 5;
      
      // Calculate the new position with limited movement
      const newX = Math.cos(angle) * maxDistance;
      const newY = Math.sin(angle) * maxDistance;
      
      setSunglassesPosition({ x: newX, y: newY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trackMouse]);

  return (
    <div 
      ref={logoRef}
      className={cn('relative', sizeClasses[size], className)}
    >
      {/* Face */}
      <div className={cn(
        'bg-emoji-yellow w-full h-full rounded-full absolute',
        animated && !trackMouse && 'animate-face-bounce'
      )} />
      
      {/* Sunglasses */}
      <div 
        className={cn(
          'absolute w-[90%] h-[30%] top-[20%] left-[5%] transition-transform duration-200',
          animated && !trackMouse && 'animate-sunglasses-rotate'
        )}
        style={
          trackMouse 
            ? { transform: `translate(${sunglassesPosition.x}%, ${sunglassesPosition.y}%)` } 
            : {}
        }
      >
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
