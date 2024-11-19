import React from 'react';
import bg from '../images/headBg.854020c1.png'

interface HeroSectionProps {
  title: string;
}

const ContactHeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`, // Replace with your image URL
      }}
    >
      
      <h1 className="text-white text-6xl md:text-4xl font-semibold z-10">{title}</h1>
    </div>
  );
};

export default ContactHeroSection;
