
import { AiOutlineWechat, AiOutlineWeibo, AiOutlineTwitter } from "react-icons/ai";
import logo from "../logo_white.02384774.png"
const Footer = () => {
  return (
    <footer className="bg-[#292827] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left Section: Logo and Address */}
        <div className="col-span-2">
          <img src={logo} alt="" width={100} />
          <p className="text-sm leading-6">
            No. 1333 Lujiazui Ring Road, <br />
            Shanghai, People's Republic of China
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <ul>
              <li>Company Profile</li>
              <li>Mission & Positioning</li>
              <li>Management Team</li>
              <li>Development History</li>
              <li>Honors</li>
              <li>Partners</li>
              <li>Corporate Culture</li>
              <li>About Ping An</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Business and Services</h3>
            <ul>
              <li>Business Overview</li>
              <li>Our Technologies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">News Center</h3>
            <ul>
              <li>News List</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul>
              <li>Media Contact</li>
              <li>IR Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Join Us</h3>
            <ul>
              <li>Social Recruitment</li>
              <li>Campus Recruitment</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              title="WeChat"
            >
              <AiOutlineWechat className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              title="Weibo"
            >
              <AiOutlineWeibo className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              title="Twitter"
            >
              <AiOutlineTwitter className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
