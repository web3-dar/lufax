import React, { useState } from 'react';
import header from '../images/Header.jpg';
import Reports from '../components/reports';
import CorporateOverview from '../components/corporate';
import InvestFoot from '../components/investFoot';

const Invest: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <>
      <div className="bg-transparent text-white">
        {/* Header */}

        {/* Hero Section */}
        <div
          className="relative text-center py-12 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${header})` }}
        >
          {/* Search and Language Dropdown */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 p-4 bg-transparent">
            {/* Search Bar */}
            <div>
              <label htmlFor="search" className="px-2">
                Search
              </label>
              <input
                id="search"
                type="text"
                placeholder="Keywords..."
                className="py-1 px-2 rounded bg-transparent border placeholder-gray-300 focus:outline-none"
              />
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="py-1 px-3 rounded focus:outline-none"
              >
                {language} ▼
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleLanguageChange('English')}
                  >
                    English
                  </div>
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleLanguageChange('中文 (简体)')}
                  >
                    中文 (简体)
                  </div>
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleLanguageChange('中文 (繁體)')}
                  >
                    中文 (繁體)
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 text-center">
            <h1 className="text-[2.5rem] font-semibold">Investor Relations</h1>
            <p className="mt-4 text-lg">
              Lufax is a leading financial services enabler for small business owners in China.
            </p>
          </div>
        </div>

        {/* Stock Info */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center py-4 px-8 bg-[#113159] h-auto sm:h-[100px]">
          <div>
            <h2 className="text-3xl font-thin">Stock Info</h2>
          </div>
          <hr className="border-t border-gray-400 w-full sm:hidden my-2" />
          <div className="flex gap-5">
            <div className="text-2xl font-thin">NYSE: LU</div>
            <div className="text-green-400 text-2xl">$2.43</div>
            <div>
              <span className="text-white text-2xl">($0.15)</span>
            </div>
          </div>
          <hr className="border-t border-gray-400 w-full sm:hidden my-2" />
          <div>
            <button className="bg-[#31334d] px-4 py-2 rounded hover:text-white hover:bg-gray-600 border-2 border-white">
              All Stock Data
            </button>
          </div>
        </div>
      </div>
      <Reports />
      <CorporateOverview/>
      <br /> <br /> <br />
      <InvestFoot/>
    </>
  );
};

export default Invest;
