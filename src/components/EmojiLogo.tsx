
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
  const [mouthPosition, setMouthPosition] = useState({ x: 0, y: 0 });
  
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
      const mouthMaxDistance = 2; // Less movement for the mouth
      
      // Calculate the new position with limited movement
      const newX = Math.cos(angle) * maxDistance;
      const newY = Math.sin(angle) * maxDistance;
      
      // Mouth moves with delay and less intensely
      const mouthX = Math.cos(angle) * mouthMaxDistance;
      const mouthY = Math.sin(angle) * mouthMaxDistance;
      
      setSunglassesPosition({ x: newX, y: newY });
      setMouthPosition({ x: mouthX, y: mouthY });
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
      
      {/* Custom Sunglasses */}
      <div 
        className={cn(
          'absolute w-[90%] h-[35%] top-[20%] left-[5%] transition-transform duration-200',
          animated && !trackMouse && 'animate-sunglasses-rotate'
        )}
        style={
          trackMouse 
            ? { transform: `translate(${sunglassesPosition.x}%, ${sunglassesPosition.y}%)` } 
            : {}
        }
      >
        <img 
          src="/lovable-uploads/71494e35-0c22-4429-b5bc-6989525f3286.png" 
          alt="Sunglasses" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Custom Mouth */}
      <div 
        className="absolute w-[40%] h-[30%] top-[65%] left-[30%] transition-transform duration-300"
        style={
          trackMouse 
            ? { transform: `translate(${mouthPosition.x}%, ${mouthPosition.y}%)` } 
            : {}
        }
      >
        <img 
          src="/lovable-uploads/d9cb7662-f8bc-4039-85e8-fe0c994726be.png" 
          alt="Mouth" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default EmojiLogo;
