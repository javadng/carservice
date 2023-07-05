import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer p-10 text-white">
      <div className="container w-5/6 mx-auto md:grid md:grid-cols-2 lg:grid-cols-4">
        {/* addresses */}
        <ul>
          <h1 className="text-2xl font-bold my-6">Address</h1>
          <li className="flex items-center my-3">
            <MdLocationOn className="mr-3 text-3xl" />
            <span>123 Street, New York, USA</span>
          </li>
          <li className="flex items-center my-3">
            <BsFillTelephoneFill className="mr-3 text-2xl" />
            <span>+012 345 67890</span>
          </li>
          <li className="flex items-center my-3">
            <FiMail className="mr-3 text-2xl" />
            <span>info@example.com</span>
          </li>
        </ul>
        {/* opening hours */}
        <ul>
          <h1 className="text-2xl font-bold my-6">Opening Hours</h1>
          <li className=" my-6">
            <h2 className="font-bold">Monday - Friday:</h2>
            <span>09.00 AM - 09.00 PM</span>
          </li>
          <li className=" my-6">
            <h2 className="font-bold">Saturday - Sunday:</h2>
            <span>09.00 AM - 12.00 PM</span>
          </li>
        </ul>
        {/* services */}
        <ul className="md:row-start-2 lg:row-start-1 lg:col-start-3">
          <h1 className="text-2xl my-6 font-bold">Services</h1>
          <li className="flex items-center my-1 p-1 hover:scale-110 transition duration-300 cursor-pointer">
            <AiOutlineRight className="mr-3" />
            <span>Diagnostic Test</span>
          </li>
          <li className="flex items-center my-1 p-1 hover:scale-110 transition duration-300 cursor-pointer">
            <AiOutlineRight className="mr-3" />
            <span>Engine Servicing</span>
          </li>
          <li className="flex items-center my-1 p-1 hover:scale-110 transition duration-300 cursor-pointer">
            <AiOutlineRight className="mr-3" />
            <span>Vacuam Cleaning</span>
          </li>
          <li className="flex items-center my-1 p-1 hover:scale-110 transition duration-300 cursor-pointer">
            <AiOutlineRight className="mr-3" />
            <span>Tires Replacement</span>
          </li>
          <li className="flex items-center my-1 p-1 hover:scale-110 transition duration-300 cursor-pointer">
            <AiOutlineRight className="mr-3" />
            <span>Oil Changing</span>
          </li>
        </ul>
        {/* newsletter */}
        <div className="md:row-start-2 lg:row-start-1 lg:col-start-4">
          <h1 className="text-2xl my-6 font-bold">Newsletter</h1>
          <p className="my-3">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Your email"
              className="block w-full text-secondary"
            />
            <button className="absolute right-5 top-[5px] py-[2px] px-[5px] bg-primary text-white">
              Sign up
            </button>
          </div>
        </div>
        {/* copy rights */}
        <div className="border-t-2 mt-6 p-3 border-gray w-full col-span-4 text-gray">
          <p>© Your Site Name, All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
