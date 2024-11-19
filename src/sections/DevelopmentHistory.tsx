import React, { useState } from "react";

import img1 from "../images/now.png";
import img2 from "../images/2014.png";
import img3 from "../images/2011.png";

const DevelopmentHistory: React.FC = () => {
  // State for active year
  const [activeYear, setActiveYear] = useState("Now");

  // Data for years and images
  const timelineData = [
    { year: "Now", image: img1 },
    { year: "2016", image: img2 },
    { year: "2011", image: img3 },
  ];

  // Find the active image based on the year
  const activeImage = timelineData.find((item) => item.year === activeYear)?.image;

  return (
    <section
      id="development-history"
      className="px-8 md:px-16 py-16 bg-[#eff0f8] relative"
    >
      <div className="timeline-container p-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-8">Development History</h2>

        {/* Timeline Navigation */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-[14px] w-full h-1 bg-blue-500"></div>

          {/* Timeline Items */}
          <div className="timeline flex justify-between items-center relative z-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item flex flex-col items-center cursor-pointer relative"
                onClick={() => setActiveYear(item.year)}
              >
                {/* Circle */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    activeYear === item.year
                      ? "bg-blue-500 border-blue-500"
                      : "border-blue-500 bg-white"
                  }`}
                >
                  {activeYear === item.year && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Year Label */}
                <span
                  className={`text-sm mt-2 ${
                    activeYear === item.year
                      ? "text-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="image-display mt-8 flex justify-center">
          {activeImage && (
            <img
              src={activeImage}
              alt={activeYear}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHistory;
