import React from 'react';
import pinan from '../images/page_about_pingan_conent_img_us_v2.4bccbd85.png';

const AboutPingAn: React.FC = () => {
  return (
    <section id="about-ping-an" className="px-8 md:px-16 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-sm max-w-[400px] text-center md:text-left">
          <p className="text-gray-600 leading-relaxed">
            Founded in 1988 in Shenzhen as the first joint-stock insurance company in China, Ping An Insurance (Group) Company of China, Ltd. (“Ping An” or the “Group”) strives to become a world-leading integrated financial, health, and senior care services provider. With nearly 232 million retail customers, Ping An is one of the largest financial services companies in the world.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Under the technology-driven “integrated finance + health and senior care” strategy, Ping An provides professional “financial advisory, family doctor, and senior care concierge” services. Ping An advances intelligent digital transformation and employs technologies to improve the quality and efficiency of its financial businesses and enhance risk management. The Group is listed on the stock exchanges in Hong Kong and Shanghai. Ping An ranked 29th in the Forbes Global 2000 list in 2024 and 33rd in the Fortune Global 500 list in 2023.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center">
          <img
            src={pinan}
            alt="Ping An Pyramid Structure"
            className="w-[80%] "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPingAn;
