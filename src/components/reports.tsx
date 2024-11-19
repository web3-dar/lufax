import React from 'react';
import { FaBroadcastTower, FaFileAlt } from 'react-icons/fa';

const Reports: React.FC = () => {
  return (
    <div className="bg-white py-12 px-8">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Quarterly Results */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Quarterly Results</h2>
          <div className="bg-[#113159] text-white p-9 shadow-lg w-full md:w-[500px] rounded-lg">
            <p className="mb-4">
              Lufax Reports Third Quarter 2024 Financial Results
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaBroadcastTower className="mr-2" />
                <a
                  href="#"
                  className="hover:underline"
                >
                  Earnings Webcast
                </a>
              </li>
              <li className="flex items-center">
                <FaFileAlt className="mr-2" />
                <a
                  href="#"
                  className="hover:underline"
                >
                  Earnings Release
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block text-blue-300 hover:underline"
            >
              View More →
            </a>
          </div>
        </div>

        {/* Annual Reports */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Annual Reports</h2>
          <div className="bg-[#113159] text-white p-9 shadow-lg w-full md:w-[500px] rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaFileAlt className="mr-2" />
                <a
                  href="#"
                  className="hover:underline"
                >
                  2023 Annual Report
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block text-blue-300 hover:underline"
            >
              View More →

            </a>
            <br /><br /><br /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
