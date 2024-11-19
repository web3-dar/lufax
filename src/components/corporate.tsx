import React from 'react';
import corp from '../images/corp.jpg'

const CorporateOverview: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${corp})`, // Replace with the correct image path
      }}
    >
      <div className="bg-[#113159]/80 text-white p-8 w-[80%] rounded">
        <h2 className="text-2xl font-semibold mb-1 px-5">Corporate Overview</h2>
        <p className="text-lg mb-4 p-5">
          Lufax is a leading financial services enabler for small business owners in China. The Company offers financing products designed principally to address the needs of small business owners. In doing so, the Company has established relationships with 85 financial institutions in China as funding partners, many of which have worked with the Company for over three years.
        </p>
        <a
          href="#"
          className="text-white hover:text-blue-500 p-5"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default CorporateOverview;
