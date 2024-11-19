import React from 'react';
import bg from '../images/page_about_banner.3095c1ed.png'

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`, // Replace with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1 className="text-white text-5xl md:text-4xl font-thin z-10">{title}</h1>
    </div>
  );
};

export default HeroSection;
