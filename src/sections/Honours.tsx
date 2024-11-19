import React from "react";
import img from "../images/honours.png";

const CompanyProfile: React.FC = () => {
  return (
    <section id="honors" className="px-8 md:px-16 py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center text-3xl m-3 font-bold mb-6">Honours</h2>
     

      {/* Image and Text Card Container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Image Card */}
          <img
            src={img}
            alt="Cityscape"
            className=" h-auto rounded-lg shadow-lg"
          />

          {/* Text Card */}
          <div
            className=" bg-[#eff0f8]  text-sm p-6 rounded-lg w-full border"
            style={{ transform: 'translate(20px, -20px)' }} // Adjust this to shift the text card as needed
          >
            <p className="text-gray-700 text-base leading-relaxed ">
             
            <p className="m-3 text-sm text-gray-600 font-thin">2024: MSCI ESG Rating A</p>
<p className="m-3 text-sm text-gray-600 font-thin">2024: Ranked in the Fortune 500 list for 2024</p>
<p className="m-3 text-sm text-gray-600 font-thin">2023: Fortune "China TOP500"</p>
<p className="m-3 text-sm text-gray-600 font-thin">2023: The Asset "Best Digital Collaboration"</p>
<p className="m-3 text-sm text-gray-600 font-thin">2023: "Gold Medal List of Chinese Financial Institutions" The Best Technology-Enabling Fintech Company</p>
<p className="m-3 text-sm text-gray-600 font-thin">2022: The Forbes "2022 ESG top 50"</p>
<p className="m-3 text-sm text-gray-600 font-thin">2022: Xinhua Credit Jinlan Cup Social Responsibility Practice Pioneer Case</p>
<p className="m-3 text-sm text-gray-600 font-thin">2022: "Excellent Social Responsibility Project of China Financial Year" by Jinnuo Award</p>
<p className="m-3 text-sm text-gray-600 font-thin">2022: The "Janus" risk decision engine received the "Sustainable Development" Species Award by the Harvard Business Review</p>
<p className="m-3 text-sm text-gray-600 font-thin">2022: Won the "Best Inclusive Finance Project in China" and the "Annual Green Sustainable Management Platform" by The Asian Banker</p>
<p className="m-3 text-sm text-gray-600 font-thin">2016-2021: Shortlisted in the KPMG China Leading Fintech 50 List</p>
<p className="m-3 text-sm text-gray-600 font-thin">2021: Selected as one of the "Top 50 Online New Economy (Shanghai)" by the Shanghai United Media Group’s Jiemian News</p>
<p className="m-3 text-sm text-gray-600 font-thin">2021: Became one of the first enterprise members of the Digital Finance Innovation Alliance</p>
<p className="m-3 text-sm text-gray-600 font-thin">2020: Winner of Diamond Award for AI, Platinum Award for Blockchain-based Transformation and Platinum Award for Cybersecurity from the Institute of Financial Technologists of Asia (IFTA)</p>
<p className="m-3 text-sm text-gray-600 font-thin">2020: Ranked No.19 on WPP BrandZ™ Top 100 Most Valuable Chinese Brands list</p>
<p className="m-3 text-sm text-gray-600 font-thin">2020: Shortlisted in the China's Fintech Pioneer List of Securities Times</p>
<p className="m-3 text-sm text-gray-600 font-thin">2020: The Asset China Fintech Company of the Year</p>
<p className="m-3 text-sm text-gray-600 font-thin">2019: Ranked No. 26 on the WPP Top 100 Most Valuable Chinese Brands list, with a brand value of USD6.89 billion</p>
<p className="m-3 text-sm text-gray-600 font-thin">2019: Shortlisted in the Outstanding Big Data Security Cases of the Year from National Engineering Laboratories</p>
<p className="m-3 text-sm text-gray-600 font-thin">2019: Shortlisted as a China FinTech Case by Harvard Business School in its FinTech-focused course in 2019</p>
<p className="m-3 text-sm text-gray-600 font-thin">2016-2018: Winner of the Award for Outstanding Economic Contributions to Pudong from the People's Government of Shanghai Pudong New Area</p>
<p className="m-3 text-sm text-gray-600 font-thin">2018: Winner of the Outstanding Achievement Award for Financial Big Data Innovation and Application of the Specialized Committee on Fintech of the Payment and Clearing Association of China</p>
<p className="m-3 text-sm text-gray-600 font-thin">2017: Received RMB7 million special fund support from the Special Development Fund for Shanghai Zhangjiang National Independent Innovation Demonstration Zone</p>
<p className="m-3 text-sm text-gray-600 font-thin">2016: Named a Global Growth Company at the World Economic Forum 2016</p>
<p className="m-3 text-sm text-gray-600 font-thin">2015: Winner of the Shanghai Financial Innovation Award from the Shanghai Municipal Government</p>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
