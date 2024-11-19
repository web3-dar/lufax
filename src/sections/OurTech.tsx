import React from 'react';

import img1 from '../images/tech1.png';
import img2 from '../images/tech2.png';
import img3 from '../images/tech3.png';

const OurTech: React.FC = () => {
  return (
    <section id="our-tech" className="px-8 md:px-16 py-16 bg-[#eff0f8]">

<h2 className="text-center text-3xl m-3 font-bold mb-6 ">Our Technologies</h2>

<br />
      <div className="flex gap-5 justify-center">
        {/* Card 1 */}
        <div className="relative flex items-center justify-center w-[400px] h-64 shadow-lg overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
            <p className="text-sm mt-2 p-4">
              Natural language processing 丨 Custom-built intelligent customer service bots and systems 丨 Regulatory technology for regulatory compliance
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex items-center justify-center w-[400px] h-64 shadow-lg overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-2xl font-bold">Data Science</h2>
            <p className="text-sm mt-2 p-4">
              Over 19 years of through-cycle credit data | Access to Ping An ecosystem analytics and insights and enterprise data
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex items-center justify-center w-[400px] h-64 shadow-lg overflow-hidden rounded-lg transform transition-transform duration-500 hover:scale-105">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-2xl font-bold">Blockchain Utilization</h2>
            <p className="text-sm mt-2 p-4">
              Blockchain technology to accomplish suitability management and transparent disclosure | Record all platform interactions with users on the blockchain to ensure full traceability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTech;
