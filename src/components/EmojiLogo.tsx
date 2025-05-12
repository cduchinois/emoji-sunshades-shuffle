
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface EmojiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  trackMouse?: boolean;
}

interface ElementPosition {
  x: number;
  y: number;
  rotation: number;
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
  const [sunglassesPosition, setSunglassesPosition] = useState<ElementPosition>({ x: 0, y: 0, rotation: 0 });
  const [mouthPosition, setMouthPosition] = useState<ElementPosition>({ x: 0, y: 0, rotation: 0 });
  const [targetSunglassesPosition, setTargetSunglassesPosition] = useState<ElementPosition>({ x: 0, y: 0, rotation: 0 });
  const [targetMouthPosition, setTargetMouthPosition] = useState<ElementPosition>({ x: 0, y: 0, rotation: 0 });
  
  // Animation frame reference for smooth interpolation
  const animationRef = useRef<number | null>(null);
  
  // Constants for movement
  const SUNGLASSES_FACTOR = 0.6;
  const MOUTH_FACTOR = 0.4;
  const MAX_TRANSLATION = 10; // pixels
  const MAX_SUNGLASSES_ROTATION = 5; // degrees
  const MAX_MOUTH_ROTATION = 8; // degrees
  const INTERPOLATION_SPEED = 0.08; // Lower = smoother but slower
  
  // Handle mouse movement to calculate target positions
  useEffect(() => {
    if (!trackMouse) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalized cursor position (-1 to 1)
      const dx = (e.clientX - centerX) / (window.innerWidth / 2);
      const dy = (e.clientY - centerY) / (window.innerHeight / 2);
      
      // Update target positions with translation and rotation
      setTargetSunglassesPosition({
        x: dx * MAX_TRANSLATION * SUNGLASSES_FACTOR,
        y: dy * MAX_TRANSLATION * SUNGLASSES_FACTOR,
        rotation: dx * MAX_SUNGLASSES_ROTATION * SUNGLASSES_FACTOR
      });
      
      setTargetMouthPosition({
        x: dx * MAX_TRANSLATION * MOUTH_FACTOR,
        y: dy * MAX_TRANSLATION * MOUTH_FACTOR,
        rotation: dx * MAX_MOUTH_ROTATION * MOUTH_FACTOR
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trackMouse]);
  
  // Smooth interpolation animation
  useEffect(() => {
    if (!trackMouse) return;
    
    const animate = () => {
      setSunglassesPosition(prev => ({
        x: prev.x + (targetSunglassesPosition.x - prev.x) * INTERPOLATION_SPEED,
        y: prev.y + (targetSunglassesPosition.y - prev.y) * INTERPOLATION_SPEED,
        rotation: prev.rotation + (targetSunglassesPosition.rotation - prev.rotation) * INTERPOLATION_SPEED
      }));
      
      setMouthPosition(prev => ({
        x: prev.x + (targetMouthPosition.x - prev.x) * INTERPOLATION_SPEED,
        y: prev.y + (targetMouthPosition.y - prev.y) * INTERPOLATION_SPEED,
        rotation: prev.rotation + (targetMouthPosition.rotation - prev.rotation) * INTERPOLATION_SPEED
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trackMouse, targetSunglassesPosition, targetMouthPosition]);

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
            ? { 
                transform: `translate(${sunglassesPosition.x}px, ${sunglassesPosition.y}px) rotate(${sunglassesPosition.rotation}deg)`,
                transition: 'transform 0.25s cubic-bezier(0.33, 1, 0.68, 1)' // Power3.out equivalent
              } 
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
        className="absolute w-[40%] h-[30%] top-[65%] left-[30%]"
        style={
          trackMouse 
            ? { 
                transform: `translate(${mouthPosition.x}px, ${mouthPosition.y}px) rotate(${mouthPosition.rotation}deg)`,
                transition: 'transform 0.25s cubic-bezier(0.33, 1, 0.68, 1)' // Power3.out equivalent
              } 
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
