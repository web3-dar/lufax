import React from 'react';
import img1 from '../images/Img1.3bcfe6d8.png';
import img2 from '../images/Img2.c820de52.png';
import ContactHeroSection from '../components/ContactHero';

const ContactUs: React.FC = () => {
  return (
<>
    <ContactHeroSection title="Contact Us " />
    
   
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="w-[70%] space-y-8">
        {/* Media Contact Card */}
        <div className="group flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-[300px]">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Media Contact</h3>
            <a
              href="mailto:dept_lufaxholdingpr@lu.com"
              className="text-blue-600 hover:underline"
            >
              dept_lufaxholdingpr@lu.com
            </a>
          </div>
          {/* Image Section */}
          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
        </div>

        {/* IR Contact Card */}
        <div className="group flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-[300px]">
          {/* Text Section */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">IR Contact</h3>
            <a href="#" className="text-blue-600 flex items-center hover:underline">
              Learn More <span className="ml-2">&rarr;</span>
            </a>
          </div>
          {/* Image Section */}
          <div
            className="flex-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
        </div>
      </div>
    </div> </>
  );
};

export default ContactUs;
