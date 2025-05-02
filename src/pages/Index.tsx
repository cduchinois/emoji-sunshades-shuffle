
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-300 via-blue-200 to-yellow-200">
      <Header className="bg-transparent" />
      <HeroSection />
      <Footer className="mt-auto bg-transparent" />
    </div>
  );
};

export default Index;
