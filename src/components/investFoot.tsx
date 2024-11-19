import React from 'react';
import foot from '../images/IR Contacts BG.png'

const InvestFoot: React.FC = () => {
  return (
    <div className="bg-[#113159] text-white p-8">
      {/* Latest News and Events */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Latest News */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Latest News</h2>
          <ul className="space-y-4">
            <li>
              <p className="text-sm">Oct 21, 2024</p>
              <a href="#" className="text-lg font-semibold hover:text-blue-700">
                Lufax Reports Third Quarter 2024 Financial Results
              </a>
            </li>
            <li>
              <p className="text-sm">Oct 15, 2024</p>
              <a href="#" className="text-lg font-semibold hover:text-blue-700">
                Lufax to Announce Third Quarter 2024 Financial Results on October 21, 2024
              </a>
            </li>
            <li>
              <p className="text-sm">Aug 21, 2024</p>
              <a href="#" className="text-lg font-semibold hover:text-blue-700">
                Lufax Reports Second Quarter 2024 Financial Results
              </a>
            </li>
          </ul>
          <div className='flex justify-end'>
             <button className="mt-4 px-4 py-2 bg-gray-800 border border-white  text-white rounded hover:bg-white hover:text-blue-500">
            View All News
          </button>
          </div>
         
        </div>

        {/* Latest Events */}
        <div>
          <h2 className="text-xl font-bold mb-4">Latest Events</h2>
          <ul className="space-y-4">
            <li>
              <p className="text-sm">Monday, October 21, 2024</p>
              <a href="#" className="text-lg font-semibold hover:text-blue-700">
                Lufax Holding Ltd Third Quarter 2024 Earnings Conference Call
              </a>
            </li>
          </ul>
          <br /><br /><br /><br /><br /> <br />
          <div className='flex justify-end'>
             <button className="mt-4 px-4 py-2 bg-gray-800 border border-white  text-white rounded hover:bg-white hover:text-blue-500">
            View All News
          </button>
          </div>
        </div>
      </div>

      {/* IR Contacts and Quick Links */}
      <div className="grid md:grid-cols-2  mt-12">
        {/* IR Contacts */}
        <div
          className="relative bg-cover bg-center p-6 rounded-md"
          style={{
            backgroundImage: `url(${foot})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">IR Contacts</h2>
            <p className="mb-2">Lufax Holding</p>
            <p className="text-sm">
              Email: <a href="mailto:Investor_Relations@lu.com" className="underline">Investor_Relations@lu.com</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div
          className="relative bg-cover bg-center p-6 rounded-md"
          style={{
            backgroundImage: `url(${foot})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lg font-semibold hover:underline">SEC Filings</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Investor FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Corporate Website</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      {/* <footer className="mt-8 text-center text-sm">
        © Copyright 2023 Shanghai Lufax Information Technology Co., Ltd. ALL Rights Reserved
      </footer> */}
    </div>
  );
};

export default InvestFoot;
