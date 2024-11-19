import React from "react";
import img from "../images/page_about_company.804c9f63.png";

const CompanyProfile: React.FC = () => {
  return (
    <section id="company-profile" className="px-8 md:px-16 py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center text-3xl m-3 font-bold mb-6">Company Profile</h2>
      <p className="text-center text-sm max-w-[90%] m-auto mb-12">
        Lufax Holding is a leading financial service empowering institution for
        small and micro businesses in China, and a subsidiary of Ping An Group.
        We provide individual entrepreneurs with easy access to inclusive
        products and services, empower institutional partners, implement
        inclusive finance, and support the real economy.
      </p>

      {/* Image and Text Card Container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Image Card */}
          <img
            src={img}
            alt="Cityscape"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          {/* Text Card */}
          <div
            className=" bg-white shadow-lg text-sm p-6 rounded-lg w-full border"
            style={{ transform: 'translate(20px, -20px)' }} // Adjust this to shift the text card as needed
          >
            <p className="text-gray-700 text-base leading-relaxed">
              We offer tailor-made financing products to SBOs and other
              high-quality borrowers to address their large unmet needs. In
              doing so, we have established relationships with over 85
              financial institutions in China, many of which have worked with
              us for over three years.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              Through our unique offline-to-online model supported by an
              extensive nationwide direct sales network. Our total balance of
              retail credit enabled reached RMB213.1 billion as of September
              30, 2024. We ranked second among non-traditional financial
              service providers for SBOs in China in terms of total inclusive
              SMB loans enabled as of June 30, 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
