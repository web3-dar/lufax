import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface NavigationProps {
  sections: { id: string; title: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 bg-[#eff0f8] shadow-md z-50">
      <div className="relative">
        <ul
          ref={listRef}
          className="flex justify-center space-x-8 p-4 text-sm md:text-base overflow-x-auto whitespace-nowrap"
        >
          {sections.map((section) => (
            <li
              key={section.id}
              className="relative cursor-pointer font-medium text-gray-700 hover:text-blue-500"
              onClick={() => handleScroll(section.id)}
            >
              {section.title}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleScrollRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 p-2 "
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
