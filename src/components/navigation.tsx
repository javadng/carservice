"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillCar, AiOutlineArrowRight } from "react-icons/ai";

const Navigation = () => {
  const pathname = usePathname();

  const isActiveLink = (linkHref: string) => pathname === linkHref;
  const liClasses = "hover:text-primary transition duration-300";

  return (
    <nav className="grid grid-cols-[minmax(180px,260px)_1fr_180px] h-20 shadow-md items-center">
      <div className="icon text-primary text-2xl font-bold p-3">
        <h2 className="flex items-center">
          <AiFillCar />
          <span className="ml-3">CarServ</span>
        </h2>
      </div>
      <div className="menu text-sm font-bold">
        <ul className="flex justify-evenly">
          <li
            className={`${liClasses} ${
              isActiveLink("/") ? "text-primary" : ""
            }`}
          >
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/about") ? "text-primary" : ""
            }`}
          >
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/services") ? "text-primary" : ""
            }`}
          >
            <Link href="/services">
              <span>Services</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/pages") ? "text-primary" : ""
            } cursor-pointer`}
          >
            <span>Pages</span>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/contact") ? "text-primary" : ""
            }`}
          >
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-primary text-white h-full p-5 py-7">
        <Link href="/" className="flex items-center hover:scale-110 transition">
          <span className="uppercase mr-3 block">Get a quote</span>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
