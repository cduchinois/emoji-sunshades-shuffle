
import React from 'react';
import EmojiLogo from './EmojiLogo';
import Cloud from './Cloud';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('relative py-16 px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden', className)}>
      {/* Clouds */}
      <Cloud size="lg" className="top-[10%] left-[15%] opacity-90" animationDelay="0s" />
      <Cloud size="md" className="top-[25%] right-[10%] opacity-80" animationDelay="3s" />
      <Cloud size="sm" className="bottom-[20%] left-[8%] opacity-70" animationDelay="6s" />
      <Cloud size="lg" className="bottom-[15%] right-[15%] opacity-75" animationDelay="9s" />
      <Cloud size="md" className="top-[40%] left-[30%] opacity-60" animationDelay="12s" />
      
      {/* Emoji Logo with Mouse Tracking */}
      <div className="mb-10 relative z-10">
        <EmojiLogo size="xl" trackMouse={true} />
      </div>
      
      {/* Text Content */}
      <div className="text-center max-w-2xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-emoji-purple">
          Chill,
        </h1>
        <p className="text-3xl md:text-5xl font-bold mb-4 text-emoji-purple">
          your personal asset manager
        </p>
        <p className="text-2xl md:text-4xl font-bold mb-10 text-emoji-purple">
          powered by Solana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-emoji-purple hover:bg-purple-700 text-white text-lg px-8 py-6">
            CONNECT WALLET
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
