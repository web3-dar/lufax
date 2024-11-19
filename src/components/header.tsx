import React, { useState } from 'react';
import logo from '../logo.80d5324a.png';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', link: '/' },
    {
      label: 'About Us',
      link: '/about',
      dropdown: [
        { label: 'Company Profile', link: '/about' },
        { label: 'Honours', link: '/about' },
        { label: 'Mission & Positioning', link: '/about' },
        { label: 'Partners', link: '/about' },
        { label: 'Management Team', link: '/about' },
        { label: 'Corporate Culture', link: '/about' },
        { label: 'Development History', link: '/about' },
        { label: 'About Ping An', link: '/about' },
      ],
    },
    { label: 'Business and Services', link: '/business', dropdown: [
        { label: 'Business Overview', link: '/business' },
        { label: 'Our Technologies', link: '/business' }
      ] 
    },
    { label: 'News Center', link: '/news-center' },
    { label: 'Investor Relations', link: '/invest' },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Join Us', link: '#', dropdown: [
      { label: 'Social Recruitment', link: '#' },
      { label: 'Campus Recruitment', link: '#' }
    ] },
    { label: 'EN / 简', link: '#' },
  ];

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (index: number) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex z-20 flex-col px-4 md:px-8 py-4 bg-white sticky top-0 shadow-sm relative transition-all duration-300 ${activeDropdown !== null || isMenuOpen ? 'h-auto' : 'h-[80px]'}`}
    >
      {/* Logo and Nav Items Container */}
      <div className="flex justify-evenly  items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Icon on Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            {/* Hamburger Icon */}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links on Larger Screens */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Nav Item */}
              <a
                href={item.link}
                className="text-gray-800 font-bold relative hover:text-blue-500"
              >
                {item.label}
                {/* Centered Blue Underline */}
                <div className="absolute bottom-[-3px] left-1/2 w-[30%] h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center -translate-x-1/2"></div>
              </a>

              {/* Dropdown Menu (Positioned Under the Parent Item) */}
              {activeDropdown === index && item.dropdown && (
                <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-64`}>
                  <div className={`flex flex-col ${item.dropdown.length > 2 ? 'grid grid-cols-2 gap-4' : ''}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="text-gray-800 hover:text-blue-600 transition font-medium px-4 py-2"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.link}
                className="text-gray-800 font-bold relative hover:text-blue-500"
              >
                {item.label}
              </a>
              {/* Dropdown for Mobile */}
              {item.dropdown && (
                <div className="mt-2 flex flex-col space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="text-gray-800 hover:text-blue-600 transition font-medium"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
