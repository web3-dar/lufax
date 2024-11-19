import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon


import img1 from '../images/yong.png';
import img2 from '../images/gregory.png';
import img3 from '../images/dongqi.jpg';
import img4 from '../images/youn.jpg';
import img5 from '../images/alston.png';
import img6 from '../images/mao.png';
import img7 from '../images/yan.png';

interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string; // Detailed description
}

const ManagementTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      image: img1,
      name: 'Yong Suk Cho',
      position: 'Chairman of the Board and Chief Executive Officer',
      description:
        'Mr. Yong Suk Cho has been the chairman of our board and chief executive officer of our company since August 2022,and he served as co-chief executive officer of our company from January 2021 to August 2022 and a director of our company since March 2016. He has also been the chief executive officer of Puhui since March 2016. Mr. Cho has extensive experience in the consumer finance industry. Mr. Cho served as the vice president of portfolio management team of Citibank Korea and Thailand Inc. from July 1999 to March 2006, and senior vice president of marketing department of the Hongkong and Shanghai Banking Corporation Limited, Seoul Branch from April 2006 to September 2007. Mr. Cho subsequently joined Ping An where he held a number of management positions, including section chief, assistant general manager, deputy general manager and general manager of the credit guarantee insurance business department from October 2007 to February 2015, during which he was in charge of planning, finance and risk management business lines. Mr. Cho obtained his MBA degree from the University of California, Berkeley, Haas School of Business in May 1999.',
    },
    {
      id: 2,
      image: img2,
      name: 'Gregory Dean Gibb',
      position: 'Director and Co-Chief Executive Officer',
      description:
        'Mr. Gregory Dean Gibb has been the co-chief executive officer of our company since January 2021 and a director of our company since December 2014, and he served as our chief executive officer from March 2016 to January 2021. He has also been the co-chairman and chief executive officer of Shanghai Lufax since September 2011. Mr. Gibb has over 20 years of experience serving multinational and domestic companies in the finance and investment industry. Mr. Gibb served as the marketing assistant in Merrill Lynch International from July 1989 to December 1991, various positions at McKinsey & Company from January 1992 to August 2006, including as its global senior director, and subsequently the chief operating officer of Taishin Financial Holding Co., Ltd, a company listed on the Taiwan Stock Exchange (TWSE: 2887), from September 2006 to May 2011. After that, Mr. Gibb joined Ping An Insurance (Group) Company of China and served as the chief innovation officer from May 2011 to September 2013. Mr. Gibb obtained his bachelor of arts degree from Middlebury College in May 1989.',
    },
    {
      id: 3,
      image: img3,
      name: 'Dongqi Chen',
      position: 'General Manager',
      description:
        'Mr. Dongqi Chen has been the general manager of our company since August 2022. He currently also serves as Chairman of Ping An Consumer Finance Co., Ltd. Mr. Chen has over 25 years of experience in sales management and the financial industry. Prior to his current positions, Mr. Chen has served as General Manager of Puhui from 2020 to 2022, Executive Deputy General Manager of Puhui from 2017 to 2020, Deputy General Manager of Puhui from 2016 to 2017, and Assistant to the General Manager of Puhui from 2015 to 2016. Mr. Chen has served as Chairman and General Manager of Ping An Insurance Agency Co., Ltd. from 2014 to 2018 and held a number of positions in Ping An Property & Casualty Insurance Company of China Ltd. from 1996 to 2014, including as Assistant to General Manager of the Credit Guarantee Insurance Business Unit from 2013 to 2014. Mr. Chen received his Bachelor’s Degree in Insurance from Nankai University in 1991.',
    },
    {
      id: 4,
      image: img4,
      name: 'Youn Jeong Lim',
      position: 'Chief Risk Officer',
      description:
        'Ms. Youn Jeong Lim has been the chief risk officer of our company since August 2022. She served as vice president of Puhui from March 2017 to August 2022, and was also the chief risk officer of Puhui, where she was responsible for the comprehensive risk management of retail lending business of Lufax. Ms. Lim has led the transformation of Puhuis risk management system from a traditional model into a technology-supported, data-driven online model. Prior to joining Puhui in 2008, Ms. Lim has served as the Head of Consumer Finance Risk Management Department of Standard Chartered Bank in Korea from 2006 to 2008 and the Head of Credit Card Business Planning Department of Citibank in Korea from 1999 to 2005. Ms. Lim received her Masters Degree in Economics from Ohio State University in 1996.',
    },
    {
      id: 5,
      image: img5,
      name: 'Alston Zhu Peiqing',
      position: 'Chief Financial Officer',
      description:
        'Mr. Alston Zhu Peiqing joined Ping An Bank in April 2018, where he served as the general manager of the finance and planning department at the Head Office Ping An Bank from April 2018 to April 2024. Prior to that, Mr. Zhu served as Principal Partner of Greater China financial services industry at Capgemini China from May 2016 to April 2018 and as the First Vice President and chief financial officer one-down at United Overseas Bank (China) from May 2013 to May 2016. From June 2003 to May 2013, he held various positions at PricewaterhouseCoopers, Ernst & Young, and Deloitte China, providing audit, financial management, risk management, tax, and digital professional services to the financial industry. Mr. Zhu began his career at Industrial and Commercial Bank of China in September 2002. Mr. Zhu received his bachelors degree in economics at the University of International Business and Economics. Mr. Zhu is Fellow Member of CGMA (AICPA & CIMA), the Association of Chartered Certified Accountants in the United Kingdom, and the Certified Public Accountants Australia.',
    },
    {
      id: 6,
      image: img6,
      name: 'Jinliang Mao',
      position: 'Chief Technology Officer',
      description:
        'Mr. Jinliang Mao has been the chief technology officer of our company since November 2017. He has also been the general manager of Lufax (Shenzhen) Technology since September 2018. Mr. Mao has extensive experience in internet technology. He joined Ping An in April 1993 and has since then held various positions relating to information management within Ping An Group. Mr. Mao obtained his bachelor’s degree in engineering from National University of Defense Technology in July 1988 and master’s degree in engineering from National University of Defense Technology in June 1991.',
    },
    {
      id: 7,
      image: img7,
      name: 'Yan Zhuang',
      position: 'Chief Human Resources Officer',
      description:
        'Ms. Yan Zhuang has been the chief human resources officer of our company since 2018. She joined Ping An in 1995, and has since then held various positions, such as the General Manager of the Talent Performance Management Department of Ping An Group, Head of HRBP of Ping An Group Bank Investment and Technology Internet, General Manager of the Human Resources Department of Ping An Property & Casualty Insurance Company, General Manager of the Product Department, and General Manager of the Finance and Enterprise Department. She has extensive work experience across various fields.',
    },
  ];

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="management-team" className="px-8 md:px-16 py-16 bg-white">
      <h2 className="text-center text-3xl m-3 font-bold mb-6">Management Team </h2>
      

      

<div className="grid gap-8 grid-cols-1 md:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => handleCardClick(member)}
            className="cursor-pointer  rounded-lg  hover:shadow-lg  text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full  object-cover rounded-md mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-gray-500 text-sm w-[60%] m-auto">{member.position}</p>
          </div>
        ))}
      </div>




      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-4xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none border-2 rounded-full p-2 text-black"
            >
              <FaTimes className="w-3 h-3" />
            </button>

            {/* Modal Content */}
            <div className="flex ">
              {/* Image Section */}
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-[200px] h-[200px] object-cover rounded-lg flex-shrink-0"
              />

              {/* Text Content Section */}
              <div className="flex-1 ml-6">
                <h3 className="text-3xl mb-4 font-semibold text-blue-600 text-center">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm text-center">{selectedMember.position}</p>

                {/* Scrollable Description */}
                <div
                  className="mt-4 text-gray-800 text-sm  m-auto max-w-[80%] overflow-y-auto pr-2 mb-4"
                  style={{ maxHeight: '200px', lineHeight: '1.6' }}
                >
                  {selectedMember.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManagementTeam;
