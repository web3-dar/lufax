import React from 'react';
import BusNavigation from '../components/BusNavigation';
import BusHeroSection from '../components/BusHeroSection';
import BusinessOverview from '../sections/BusinessOver';
import OurTech from '../sections/OurTech';


const Business: React.FC = () => {
  const sections = [
    { id: 'business-overview', title: 'Business Overview' },
    { id: 'our-tech', title: 'Our Technologies' },

  ];

  return (
    <div>
      {/* Hero Section */}
      <BusHeroSection title="Business and Services " />

      {/* Sticky Navigation */}
      <BusNavigation sections={sections} />

      {/* Page Sections */}
      <div className="space-y-16">
        <BusinessOverview />
        <OurTech />
        
      </div>
    </div>
  );
};

export default Business;
