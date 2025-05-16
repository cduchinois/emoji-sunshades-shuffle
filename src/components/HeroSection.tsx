
import React from 'react';
import EmojiLogo from './EmojiLogo';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('relative flex items-center justify-center min-h-screen overflow-hidden', className)}>
      {/* Emoji Logo with Mouse Tracking */}
      <div className="relative z-10">
        <EmojiLogo size="xl" trackMouse={true} />
      </div>
    </section>
  );
};

export default HeroSection;
