import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const TopNav = () => {
  return (
    <div className="flex justify-between text-primary p-2 items-center bg-light-gray">
      <div className="address flex items-center">
        <HiLocationMarker />
        <span className="text-secondary text-xs">
          123 Street, New York, USA
        </span>
      </div>
      <div className="socials flex">
        <div className="flex items-center mr-3 text-sm">
          <BsFillTelephoneFill />
          <span className="text-secondary ml-2">+989025356564</span>
        </div>
        <div className="flex items-center">
          <span className="mx-1 bg-white inline-block p-1.5 rounded-md">
            <BsLinkedin />
          </span>
          <span className="mx-1 bg-white inline-block p-1 rounded-md">
            <FaFacebookF />
          </span>
          <span className="mx-1 bg-white inline-block p-1 rounded-md">
            <BsTwitter />
          </span>
          <span className="mx-1 bg-white inline-block p-1 rounded-md">
            <BsInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
