import React from 'react';
import pinan from '../images/busOver.png';

const BusinessOverview: React.FC = () => {
  return (
    <section id="business-overview" className="px-8 md:px-16 py-16 bg-white">
        <h2 className="text-center text-3xl m-3 font-semibold mb-6 ">Business Overview</h2>
      <div className="relative overflow-hidden bg-gray-800 text-white  shadow-lg w-full  max-w-2xl mx-auto mt-10">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden group h-[350px]">
          <img
            src={pinan}
            alt="Credit Cards"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <p className="text-center text-sm sm:text-base px-4">
              We have served a total of around <strong>6.8 million SBOs</strong> in
              China since our founding, as of the end of 2023. Our total balance of
              retail credit reached <strong>RMB213.1 billion</strong>, as of 2024
              September 30th. We ranked second among non-traditional financial
              service providers for SBOs in China in terms of total inclusive SMB
              loans enabled as of June 30, 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
