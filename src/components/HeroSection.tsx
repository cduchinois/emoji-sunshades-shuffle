
import React from 'react';
import EmojiLogo from './EmojiLogo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-16 px-6 flex flex-col items-center justify-center min-h-[80vh] bg-emoji-yellow', className)}>
      <div className="mb-8">
        <EmojiLogo size="xl" />
      </div>
      
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Coolest Emoji Ever
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Watch those sunglasses bounce and groove! This cool emoji is here to brighten your day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-emoji-purple hover:bg-purple-700 text-white">Get Started</Button>
          <Button variant="outline" className="border-emoji-purple text-emoji-purple hover:bg-emoji-purple hover:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
