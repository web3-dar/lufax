import React from 'react';

import img1 from '../images/staff_1.png'
import img2 from '../images/staff_2.png'
import img3 from '../images/staff_3.png'
import img4 from '../images/staff_4.png'
import img5 from '../images/staff_5.png'
import img6 from '../images/staff_6.png'
const CorporateCulture: React.FC = () => {
  const data = [
    { title: 'Staff Training', image: img1 },
    { title: 'Creation Camp', image: img2 },
    { title: 'Team Building', image: img6 },
    { title: 'Star Power', image: img3 },
    { title: 'Knowledge Sharing', image: img4 },
    { title: 'Staff Union Activities', image: img5 },
  ];

  return (
    <section id="corporate-culture" className="px-8 md:px-16 py-16 bg-white">
      {/* Corporate Culture Header */}
      <h2 className="text-center text-3xl m-3 font-bold mb-6">Corporate Culture</h2>
      {/* Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group h-64"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-opacity duration-300"></div>
            {/* Title */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-normal text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorporateCulture;
