import React from 'react';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import CompanyProfile from '../sections/companyProfile';
import MissionPositioning from '../sections/Mission';
import ManagementTeam from '../sections/managementTeam';
import DevelopmentHistory from '../sections/DevelopmentHistory';
import Honours from '../sections/Honours';
import Partners from '../sections/partners';
import CorporateCulture from '../sections/CorporateCulture';
import AboutPinAn from '../sections/aboutPinan';

const About: React.FC = () => {
  const sections = [
    { id: 'company-profile', title: 'Company Profile' },
    { id: 'mission-positioning', title: 'Mission & Positioning' },
    { id: 'management-team', title: 'Management Team' },
    { id: 'development-history', title: 'Development History' },
    { id: 'honors', title: 'Honors' },
    { id: 'partners', title: 'Partners' },
    { id: 'corporate-culture', title: 'Corporate Culture' },
    { id: 'about-ping-an', title: 'About Ping An' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection title="About Us" />

      {/* Sticky Navigation */}
      <Navigation sections={sections} />

      {/* Page Sections */}
      <div className="space-y-16">
        <CompanyProfile />
        <MissionPositioning />
        <ManagementTeam />
        <DevelopmentHistory />
        <Honours />
        <Partners />
        <CorporateCulture />
        <AboutPinAn />
      </div>
    </div>
  );
};

export default About;
