import React from 'react';
import CountUp from 'react-countup';
import img1 from '../images/part1.png';
import img2 from '../images/part2.png';

const Partners: React.FC = () => {
  return (
    <>
<h2 className="text-center text-3xl m-3 font-bold mb-6 ">Partners</h2>
    <section id="partners" className="px-8 md:px-16 py-16 bg-white flex justify-center gap-3">



      {/* First Card */}
      <div className="relative flex items-center justify-center w-[500px] h-64 shadow-lg overflow-hidden rounded-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#3073e8] bg-opacity-70 hover:bg-[#1266f6]"></div>
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">
            <CountUp start={1} end={80} duration={2} />
            +
          </h1>
          <p className="text-lg mt-2">Funding Partners</p>
        </div>
      </div>

      {/* Second Card */}
      <div className="relative flex items-center justify-center w-[500px] h-64 shadow-lg overflow-hidden rounded-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#22aef0] bg-opacity-70 hover:bg-[#00adff]"></div>
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">
            <CountUp start={1} end={480} duration={2} />
            +
          </h1>
          <p className="text-lg mt-2">Empowering financial institutions such as banks</p>
        </div>
      </div>
    </section></>
  );
};

export default Partners;
