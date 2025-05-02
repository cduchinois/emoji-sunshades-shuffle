
import React from 'react';
import { cn } from '@/lib/utils';
import { Smile, Sun, Music, Heart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-emoji-purple mb-4 p-3 bg-purple-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  const features = [
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Super Cool",
      description: "This emoji is the coolest one you'll ever meet."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Always Sunny",
      description: "The sunglasses are always ready for a bright day."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Groovy Moves",
      description: "Watch it dance and bounce to invisible beats."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Lovable",
      description: "Everyone who meets this emoji falls in love instantly."
    }
  ];

  return (
    <section className={cn('py-16 px-6', className)}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why This Emoji Rocks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
